// Procedural skill drills for "Number, Accuracy & Bounds" (number-bounds).
//
// Exactness: every decimal in a prompt or answer is built from an integer and a
// number of decimal places (decStr), and bounds are computed in integer units
// (thousandths, or tenths of the rounding unit) before converting. Only the
// quotient / calculator answers use floating point, and those are rounded with
// roundSf(), which rejects values that sit too close to a rounding boundary.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { gcd, lcm } from "./helpers.ts";
import { makeRng } from "./rng.ts";

const T = "number-bounds";

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

/** Bounded rejection loop; falls back to fixed seeds so it is always deterministic. */
function attempt(make: (r: Rng) => DrillItem | null, rng: Rng): DrillItem {
  for (let i = 0; i < 600; i++) {
    const x = make(rng);
    if (x) return x;
  }
  for (let s = 1; s < 5000; s++) {
    const x = make(makeRng(s));
    if (x) return x;
  }
  throw new Error("number-bounds drill: no valid item");
}

const P10 = (k: number) => Math.pow(10, k);

/** Integer N with d decimal places as a string: decStr(387, 3) = "0.387"; decStr(47, -2) = "4700". */
function decStr(N: number, d: number): string {
  const neg = N < 0;
  let s = String(Math.abs(Math.round(N)));
  let out: string;
  if (d <= 0) out = s === "0" ? "0" : s + "0".repeat(-d);
  else {
    s = s.padStart(d + 1, "0");
    out = s.slice(0, s.length - d) + "." + s.slice(s.length - d);
  }
  return (neg ? "−" : "") + out;
}

/** Drop trailing decimal zeros: "6.350" → "6.35", "7.0" → "7". */
function trimDec(s: string): string {
  return s.includes(".") ? s.replace(/0+$/, "").replace(/\.$/, "") : s;
}

/** Number value of a display string (handles the real minus sign and commas). */
function val(s: string): number {
  return parseFloat(s.replace("−", "-").replace(/,/g, ""));
}

/** Group a long integer part with commas: "48372.5" → "48,372.5" (5+ digit integer parts only). */
function grp(s: string): string {
  const [i, f] = s.split(".");
  const neg = i.startsWith("−");
  const body = neg ? i.slice(1) : i;
  if (body.length < 5) return s;
  const g = body.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return (neg ? "−" : "") + g + (f !== undefined ? "." + f : "");
}

/** Thousandths integer → tidy decimal string. */
const milli = (x: number) => trimDec(decStr(x, 3));
/** Millionths integer → tidy decimal string. */
const micro = (x: number) => trimDec(decStr(x, 6));

/** Round x to k significant figures; ok = false if x is too close to a rounding boundary. */
function roundSf(x: number, k: number): { v: number; ok: boolean } {
  if (x === 0 || !Number.isFinite(x)) return { v: 0, ok: false };
  const e = Math.floor(Math.log10(Math.abs(x)));
  const p = k - 1 - e;
  const scaled = Math.abs(x) * P10(p);
  const fr = scaled - Math.floor(scaled);
  const ok = Math.abs(fr - 0.5) > 1e-4;
  const r = Math.sign(x) * Math.round(scaled);
  const v = p >= 0 ? parseFloat((r / P10(p)).toFixed(p)) : r * P10(-p);
  return { v, ok };
}

/** A k-s.f. value written with its trailing zeros: (10, 3) → "10.0". */
function sfStr(v: number, k: number): string {
  if (v === 0) return "0";
  const e = Math.floor(Math.log10(Math.abs(v)) + 1e-12);
  const p = k - 1 - e;
  const s = p > 0 ? v.toFixed(p) : String(Math.round(v));
  return grp(s.replace("-", "−"));
}

/** Calculator-style display of a float, 8 s.f. */
function calc(x: number): string {
  return String(parseFloat(x.toPrecision(8))).replace("-", "−");
}

/** 4 s.f. for "about" values. */
function sig4(x: number): string {
  return grp(String(parseFloat(x.toPrecision(4))).replace("-", "−"));
}

/** Index-form maths: [2,3,7],[2,1,2] → "2^2 * 3 * 7^2". */
function idx(ps: number[], es: number[]): string {
  const parts: string[] = [];
  ps.forEach((p, i) => {
    if (es[i] === 0) return;
    parts.push(es[i] === 1 ? `${p}` : `${p}^${es[i]}`);
  });
  return parts.length ? parts.join(" * ") : "1";
}

function powProd(ps: number[], es: number[]): number {
  return ps.reduce((acc, p, i) => acc * Math.pow(p, es[i]), 1);
}

/** Exponents of n over the given primes (n must factor completely over them). */
function expsOver(n: number, ps: number[]): number[] {
  return ps.map((p) => {
    let c = 0;
    while (n % p === 0) {
      n /= p;
      c++;
    }
    return c;
  });
}

/** Primes dividing n, ascending. */
function primesOf(n: number): number[] {
  const out: number[] = [];
  for (let p = 2; p * p <= n; p++) {
    if (n % p === 0) {
      out.push(p);
      while (n % p === 0) n /= p;
    }
  }
  if (n > 1) out.push(n);
  return out;
}

/** "Divide by primes" ladder text: 1764 → 882 → … → 1. */
function ladder(n: number): string {
  const chain: number[] = [n];
  const divs: number[] = [];
  let m = n;
  for (let p = 2; m > 1; ) {
    if (m % p === 0) {
      m /= p;
      divs.push(p);
      chain.push(m);
    } else p++;
  }
  return `Divide by primes, smallest first: ${chain.join(" → ")} (dividing by ${divs.join(", ")}).`;
}

/** Number answer, decimal only, with a display string. */
function numAns(v: number, display?: string): AnswerSpec {
  return { type: "number", value: v, allowFraction: false, ...(display ? { display } : {}) };
}

/** Number traps, dropping any that are invalid, equal the answer, or repeat. */
function numTraps(answer: number, cands: Array<[number, string]>): Trap[] {
  const seen: number[] = [answer];
  const out: Trap[] = [];
  for (const [v, feedback] of cands) {
    if (!Number.isFinite(v) || v === 0) continue;
    if (seen.some((s) => Math.abs(s - v) <= 1e-9 * Math.max(1, Math.abs(s)))) continue;
    seen.push(v);
    out.push({ spec: { type: "number", value: v }, feedback });
  }
  return out;
}

/** Ordered-pair (lower, upper) traps, dropping repeats of the answer. */
function pairTraps(lo: number, hi: number, cands: Array<[number, number, string]>): Trap[] {
  const seen: string[] = [`${lo},${hi}`];
  const out: Trap[] = [];
  for (const [a, b, feedback] of cands) {
    const key = `${a},${b}`;
    if (seen.includes(key) || !Number.isFinite(a) || !Number.isFinite(b)) continue;
    seen.push(key);
    out.push({ spec: { type: "list", values: [a, b], ordered: true }, feedback });
  }
  return out;
}

const LETTERS = ["a", "b", "c", "d"];

// ---------------------------------------------------------------------------
// Bounds: a measured quantity held as an integer number of thousandths.
// ---------------------------------------------------------------------------

/** A measurement correct to the nearest `u` thousandths (u = 1000 → nearest whole unit). */
interface Meas {
  v: number; // value in thousandths
  u: number; // rounding unit in thousandths (even)
}

const lo = (m: Meas) => m.v - m.u / 2;
const hi = (m: Meas) => m.v + m.u / 2;

/** The measurement as written in the question, keeping zeros that show its accuracy ("3.60"). */
function given(m: Meas): string {
  const dec = m.u >= 1000 ? 0 : m.u >= 100 ? 1 : 2;
  return grp(decStr(m.v / P10(3 - dec), dec));
}

/** "the nearest cm", "1 decimal place", "the nearest 5 m" … */
function accText(u: number, unit: string): string {
  const one: Record<string, string> = { m: "metre", g: "gram", s: "second", litres: "litre", km: "km", cm: "cm", kg: "kg", ml: "ml" };
  if (u === 1000) return `the nearest ${one[unit] ?? unit}`;
  if (u === 100) return "1 decimal place";
  if (u === 10) return "2 decimal places";
  return `the nearest ${milli(u)} ${unit}`;
}

function meas(rng: Rng, u: number, minVal: number, maxVal: number): Meas {
  // minVal / maxVal in whole units.
  const j = rng.int(Math.ceil((minVal * 1000) / u), Math.floor((maxVal * 1000) / u));
  return { v: j * u, u };
}

// ---------------------------------------------------------------------------
// The drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // 1 ────────────────────────────────────────────────────────────────────────
  {
    id: `${T}.prime-factorisation`,
    topicId: T,
    title: "Write a number as a product of prime factors",
    level: 1,
    guideRef: "prime-factors-hcf-lcm",
    generate(rng, tier) {
      const mode = tier === 1 ? "plain" : tier === 2 ? (rng.bool(0.6) ? "plain" : "times") : rng.pick(["plain", "times", "power"] as const);
      return attempt((r) => {
        if (mode === "plain") {
          const pool = tier === 1 ? [2, 3, 5] : tier === 2 ? [2, 3, 5, 7] : [2, 3, 5, 7, 11, 13];
          const k = tier === 3 ? r.int(3, 4) : r.int(2, 3);
          const ps = r.shuffle(pool).slice(0, k).sort((a, b) => a - b);
          const es = ps.map(() => r.int(1, tier === 1 ? 3 : 4));
          if (es.every((e) => e === 1)) return null;
          const n = powProd(ps, es);
          const [mn, mx] = tier === 1 ? [20, 600] : tier === 2 ? [100, 6000] : [500, 60000];
          if (n < mn || n > mx) return null;
          const form = ps.map((p, i) => `${p}^${LETTERS[i]}`).join(" * ");
          const lettersTxt = LETTERS.slice(0, k).join(", ").replace(/, (\w)$/, " and $1");
          const prompt = r.bool()
            ? `Write ${grp(String(n))} as a product of powers of its prime factors, in the form {{${form}}}. Give the values of ${lettersTxt}, in that order, separated by commas.`
            : `Express ${grp(String(n))} as a product of prime factors in index form: {{${n} = ${form}}}. Write down ${lettersTxt}, in that order, separated by commas.`;
          return {
            prompt,
            answer: { type: "list", values: es, ordered: true, display: `{{${idx(ps, es)}}} so ${es.join(", ")}` },
            solution: [ladder(n), `So {{${n} = ${idx(ps, es)}}}.`, `${LETTERS.slice(0, k).map((l, i) => `${l} = ${es[i]}`).join(", ")}.`],
            hint: "Keep dividing by the smallest prime that goes in exactly, then count how many times you used each prime.",
          };
        }
        if (mode === "times") {
          const pool = [2, 3, 5, 7];
          const k = r.int(2, 3);
          const ps = r.shuffle(pool).slice(0, k).sort((a, b) => a - b);
          const es = ps.map(() => r.int(1, 3));
          const m = r.pick([4, 6, 8, 9, 10, 12, 14, 15, 18, 20, 21, 24, 45, 50]);
          const all = Array.from(new Set([...ps, ...primesOf(m)])).sort((a, b) => a - b);
          if (all.length > 4) return null;
          const eN = all.map((p) => (ps.includes(p) ? es[ps.indexOf(p)] : 0));
          const eM = expsOver(m, all);
          const eT = all.map((_, i) => eN[i] + eM[i]);
          const form = all.map((p, i) => `${p}^${LETTERS[i]}`).join(" * ");
          const lettersTxt = LETTERS.slice(0, all.length).join(", ").replace(/, (\w)$/, " and $1");
          const traps: Trap[] = [{ spec: { type: "list", values: eN, ordered: true }, feedback: `Those are the powers in N itself — you still need to multiply by ${m} = {{${idx(all, eM)}}}.` }];
          const multE = all.map((_, i) => eN[i] * Math.max(1, eM[i]));
          if (multE.join() !== eT.join() && multE.join() !== eN.join()) {
            traps.push({ spec: { type: "list", values: multE, ordered: true }, feedback: "When you multiply powers of the same prime you ADD the indices, not multiply them." });
          }
          return {
            prompt: `{{N = ${idx(ps, es)}}}. Write {{${m}N}} as a product of powers of its prime factors, in the form {{${form}}}. Give ${lettersTxt}, in that order, separated by commas.`,
            answer: { type: "list", values: eT, ordered: true, display: `{{${m}N = ${idx(all, eT)}}} so ${eT.join(", ")}` },
            solution: [`First write ${m} in prime factors: {{${m} = ${idx(all, eM)}}}.`, `Multiply by adding the powers of each prime: {{${m}N = ${idx(all, eM)} * ${idx(ps, es)} = ${idx(all, eT)}}}.`, `${LETTERS.slice(0, all.length).map((l, i) => `${l} = ${eT[i]}`).join(", ")}.`],
            hint: `Split ${m} into prime factors first, then use {{p^m * p^n = p^(m+n)}}.`,
            traps,
          };
        }
        // power: smallest k so that kN is a square / cube.
        const t = r.bool() ? 2 : 3;
        const k = r.int(2, 3);
        const ps = r.shuffle([2, 3, 5, 7]).slice(0, k).sort((a, b) => a - b);
        const es = ps.map(() => r.int(1, 5));
        if (es.every((e) => e % t === 0)) return null;
        if (es.filter((e) => e % t !== 0).length < 2 && r.bool(0.7)) return null;
        const need = es.map((e) => (t - (e % t)) % t);
        const kk = powProd(ps, need);
        if (kk > 5000 || kk < 2) return null;
        const word = t === 2 ? "square" : "cube";
        const after = es.map((e, i) => e + need[i]);
        const N = powProd(ps, es);
        const sqLike = powProd(ps, es.map((e) => e % 2));
        return {
          prompt: `{{N = ${idx(ps, es)}}}. Find the smallest positive integer k such that {{kN}} is a ${word} number.`,
          answer: numAns(kk),
          solution: [
            `A ${word} number has every prime power a multiple of ${t}.`,
            `Raise each power to the next multiple of ${t}: {{${idx(ps, es)} -> ${idx(ps, after)}}}.`,
            `So {{k = ${idx(ps, need)} = ${kk}}}.`,
          ],
          hint: `In a ${word} number every index in the prime factorisation is a multiple of ${t}. Which primes are short?`,
          traps: numTraps(kk, [
            [N, "N × N is certainly a square, but it is not the smallest k. Only top up the powers that are short."],
            ...(t === 3 ? ([[sqLike, "That would make every power even (a square). For a cube each power must be a multiple of 3."]] as Array<[number, string]>) : []),
          ]),
        };
      }, rng);
    },
  },

  // 2 ────────────────────────────────────────────────────────────────────────
  {
    id: `${T}.hcf-lcm`,
    topicId: T,
    title: "Find the HCF and LCM (including word problems)",
    level: 2,
    guideRef: "prime-factors-hcf-lcm",
    generate(rng, tier) {
      const mode =
        tier === 1
          ? rng.pick(["plain", "plain", "ctxL", "ctxH"] as const)
          : tier === 2
            ? rng.pick(["index", "index", "ctxL", "ctxH", "plain"] as const)
            : rng.pick(["index3", "reverse", "ctxL3", "index"] as const);
      return attempt((r) => {
        const pickNum = (): [number, number[]] => {
          const ps = [2, 3, 5, 7];
          const es = ps.map(() => (r.bool(0.75) ? r.int(1, 3) : 0));
          if (es.filter((e) => e > 0).length < 2) return [0, es];
          return [powProd(ps, es), es];
        };
        if (mode === "plain") {
          const a = r.int(12, 180), b = r.int(12, 180);
          const h = gcd(a, b), L = lcm(a, b);
          if (a === b || h < 2 || a % b === 0 || b % a === 0 || L > 2000) return null;
          const askH = r.bool();
          const ans = askH ? h : L;
          return {
            prompt: `Find the ${askH ? "highest common factor (HCF)" : "lowest common multiple (LCM)"} of ${a} and ${b}.`,
            answer: numAns(ans),
            solution: [
              `{{${a} = ${idx(primesOf(a), expsOver(a, primesOf(a)))}}} and {{${b} = ${idx(primesOf(b), expsOver(b, primesOf(b)))}}}.`,
              askH ? `HCF: the primes they share, to the lower power: ${h}.` : `LCM: every prime, to the higher power: ${L}.`,
              askH ? `Check: ${a} ÷ ${h} = ${a / h} and ${b} ÷ ${h} = ${b / h}, which have no common factor.` : `Check: ${L} ÷ ${a} = ${L / a} and ${L} ÷ ${b} = ${L / b}.`,
            ],
            hint: "Write both numbers as products of prime factors (or use a prime-factor Venn diagram).",
            traps: numTraps(ans, askH ? [[L, "That's the LCM — the HCF is the biggest number that divides into both."]] : [[a * b, `${a} × ${b} is a common multiple, but not the lowest. Don't double-count the shared factor ${h}.`], [h, "That's the HCF — the LCM is the smallest number both divide into."]]),
          };
        }
        if (mode === "index" || mode === "index3") {
          const cnt = mode === "index3" ? 3 : 2;
          const nums: number[] = [];
          const ex: number[][] = [];
          for (let i = 0; i < cnt; i++) {
            const [n, es] = pickNum();
            if (!n) return null;
            nums.push(n);
            ex.push(es);
          }
          if (new Set(nums).size !== cnt) return null;
          for (let i = 0; i < cnt; i++) for (let j = 0; j < cnt; j++) if (i !== j && nums[i] % nums[j] === 0) return null;
          const ps = [2, 3, 5, 7];
          const minE = ps.map((_, i) => Math.min(...ex.map((e) => e[i])));
          const maxE = ps.map((_, i) => Math.max(...ex.map((e) => e[i])));
          const H = powProd(ps, minE), L = powProd(ps, maxE);
          if (H < 2 || L > 2_000_000) return null;
          const askH = r.bool();
          const ans = askH ? H : L;
          const names = ["A", "B", "C"].slice(0, cnt);
          const defs = names.map((nm, i) => `{{${nm} = ${idx(ps, ex[i])}}}`).join(", ");
          const prod = nums.reduce((s, n) => s * n, 1);
          return {
            prompt: `${defs}. Find the ${askH ? "HCF" : "LCM"} of ${names.join(", ").replace(/, (\w)$/, " and $1")}. Give your answer as an ordinary number.`,
            answer: numAns(ans, grp(String(ans))),
            solution: askH
              ? [`HCF: take each prime that is in every number, to the LOWEST power.`, `{{${idx(ps, minE)} = ${H}}}.`]
              : [`LCM: take every prime that appears, to the HIGHEST power.`, `{{${idx(ps, maxE)} = ${L}}}.`],
            hint: askH ? "Which primes appear in every number? Use the smallest power of each." : "Every prime that appears anywhere, to its biggest power.",
            traps: numTraps(ans, askH ? [[L, "That's the LCM. For the HCF use the LOWEST power of each shared prime."]] : [[H, "That's the HCF. For the LCM use the HIGHEST power of every prime."], [prod, "Multiplying the numbers gives a common multiple, but not the lowest."]]),
          };
        }
        if (mode === "reverse") {
          const a = r.int(12, 240), b = r.int(12, 240);
          const h = gcd(a, b), L = lcm(a, b);
          if (a === b || h < 3 || a % b === 0 || b % a === 0) return null;
          return {
            prompt: `Two numbers A and B have HCF ${h} and LCM ${grp(String(L))}. A = ${a}. Find B.`,
            answer: numAns(b),
            solution: [`For two numbers, A × B = HCF × LCM (the shared factors are counted once in each).`, `B = {{(${h} * ${L})/${a}}} = ${b}.`, `Check: HCF(${a}, ${b}) = ${h} and LCM = ${L}.`],
            hint: "For any two numbers, HCF × LCM = A × B. Why?",
            traps: numTraps(b, [[h * L, "You found HCF × LCM, which is A × B — now divide by A."], [L / a, "LCM ÷ A only gives the extra factor B brings — multiply it by the HCF."]]),
          };
        }
        if (mode === "ctxH") {
          const h = r.int(4, 24);
          const x = r.int(2, 12), y = r.int(2, 12);
          if (gcd(x, y) !== 1 || x === y) return null;
          const p = h * x, q = h * y;
          if (p > 300 || q > 300) return null;
          const tmpl = r.int(0, 2);
          const prompt =
            tmpl === 0
              ? `Siti has ${p} curry puffs and ${q} kaya buns. She packs all of them into identical boxes, with nothing left over. What is the greatest number of boxes she can make?`
              : tmpl === 1
                ? `A rectangular floor measures ${p} cm by ${q} cm. It is to be covered with identical square tiles, with no gaps and no cutting. What is the largest possible side length of a tile, in cm?`
                : `A CCA club has ${p} Year 10 and ${q} Year 11 students. The teacher splits them into the greatest possible number of identical groups (same mix of years in each). How many groups are there?`;
          return {
            prompt,
            answer: numAns(h),
            solution: [`Every box/tile/group must divide BOTH ${p} and ${q} exactly, and we want the biggest such number: the HCF.`, `${p} = ${h} × ${x} and ${q} = ${h} × ${y}, and ${x} and ${y} share no factor, so HCF = ${h}.`],
            hint: "Is this about sharing out (a factor) or about meeting up again (a multiple)?",
            traps: numTraps(h, [[lcm(p, q), "That's the LCM — but you are splitting things up, so you need a common FACTOR."]]),
          };
        }
        // ctxL / ctxL3
        const three = mode === "ctxL3";
        const per = three ? [r.int(4, 20), r.int(4, 20), r.int(4, 20)] : [r.int(4, tier === 1 ? 20 : 30), r.int(4, tier === 1 ? 20 : 30)];
        if (new Set(per).size !== per.length) return null;
        for (const x of per) for (const y of per) if (x !== y && x % y === 0) return null;
        const L = per.reduce((s, x) => lcm(s, x), 1);
        if (L > (three ? 600 : 240)) return null;
        if (per.reduce((s, x) => s * x, 1) === L && r.bool(0.7)) return null; // prefer shared factors
        const tmpl = r.int(0, 2);
        const list = per.join(three ? ", " : " and ").replace(/, (\d+)$/, " and $1");
        let prompt: string;
        if (tmpl === 0) prompt = `${three ? "Three bus services" : "Two bus services"} leave Jurong East interchange together at 07:00. They leave every ${list} minutes respectively. How many minutes after 07:00 do they next all leave together?`;
        else if (tmpl === 1) prompt = `${three ? "Three lights" : "Two lights"} flash every ${list} seconds respectively. They flash together at midnight. After how many seconds do they next flash together?`;
        else prompt = `Wei Ling's ${three ? "three timers" : "two timers"} beep every ${list} minutes respectively. They all beep together at 09:00. How many minutes later do they next all beep together?`;
        const prod = per.reduce((s, x) => s * x, 1);
        return {
          prompt,
          answer: numAns(L),
          solution: [`They meet again at a time that is a multiple of every period: the LCM.`, per.map((x) => `{{${x} = ${idx(primesOf(x), expsOver(x, primesOf(x)))}}}`).join(", ") + ".", `LCM = ${L}, so after ${L}.`],
          hint: "Each one repeats on multiples of its own period. When do the lists of multiples first match?",
          traps: numTraps(L, [[prod, "Multiplying the periods gives a common multiple, but not the first one."], [per.reduce((s, x) => gcd(s, x), 0), "That's the HCF — you want the first time they coincide again, a common MULTIPLE."]]),
        };
      }, rng);
    },
  },

  // 3 ────────────────────────────────────────────────────────────────────────
  {
    id: `${T}.round-sf-dp`,
    topicId: T,
    title: "Round to decimal places or significant figures",
    level: 1,
    guideRef: "rounding-estimation",
    generate(rng, tier) {
      return attempt((r) => {
        let N: number, d: number, L: number;
        let carryK = 0; // > 0: a run of 9s, and rounding to carryK s.f. carries through them
        if (tier === 3 && r.bool(0.5)) {
          // e.g. 39.97 to 3 s.f. → 40.0.
          const m = r.int(1, 3);
          const tail = r.int(0, 2);
          let s = String(r.int(1, 8)) + "9".repeat(m) + String(r.int(5, 9));
          for (let i = 0; i < tail; i++) s += String(r.int(0, 9));
          if (s.endsWith("0")) return null;
          N = Number(s);
          L = s.length;
          d = r.int(Math.max(0, L - 3), Math.min(8, L + 2));
          carryK = 1 + m;
        } else {
          L = tier === 1 ? r.int(4, 5) : tier === 2 ? r.int(4, 6) : r.int(5, 7);
          N = r.int(P10(L - 1), P10(L) - 1);
          if (N % 10 === 0) return null;
          d = tier === 1 ? r.int(0, Math.min(3, L - 1)) : r.int(0, Math.min(8, L + 2));
        }
        // Choose what to round to: p = number of digits of N to remove.
        type Kind = "sf" | "dp" | "nearest" | "whole";
        const kinds: Kind[] = ["sf", "sf"];
        if (d >= 2) kinds.push("dp", "dp");
        if (d === 0) kinds.push("nearest");
        if (d >= 1 && L - d >= 1) kinds.push("whole");
        const kind: Kind = carryK ? (r.bool(0.6) ? "sf" : "dp") : r.pick(kinds);
        let p: number, k = 0, dp = 0;
        if (kind === "sf") {
          k = carryK || r.int(1, Math.min(tier === 1 ? 2 : 4, L - 1));
          p = L - k;
        } else if (kind === "dp") {
          if (carryK) {
            p = L - carryK;
            dp = d - p;
            if (dp < 1) return null;
          } else {
            dp = r.int(1, Math.min(tier === 1 ? 2 : 3, d - 1));
            p = d - dp;
          }
        } else if (kind === "nearest") {
          p = r.int(1, Math.min(3, L - 2));
        } else p = d;
        if (p < 1 || p >= L + 6) return null;
        const q = Math.floor(N / P10(p));
        const rem = N - q * P10(p);
        let M = 2 * rem >= P10(p) ? q + 1 : q;
        if (M === 0) return null;
        let D = d - p;
        if (kind === "sf" && String(M).length > k) {
          M = M / 10;
          D -= 1;
        }
        const ansStr = grp(decStr(M, D));
        const ans = val(ansStr);
        const xStr = grp(decStr(N, d));
        if (Math.abs(N / P10(d)) > 9_999_999) return null;

        let prompt: string;
        const what =
          kind === "sf" ? `${k} significant figure${k > 1 ? "s" : ""}` : kind === "dp" ? `${dp} decimal place${dp > 1 ? "s" : ""}` : kind === "nearest" ? `the nearest ${grp(String(P10(p)))}` : "the nearest whole number";
        const tmpl = r.int(0, 2);
        if (tmpl === 0) prompt = `Round ${xStr} to ${what}.`;
        else if (tmpl === 1) prompt = `A calculator display shows ${xStr}. Write this number correct to ${what}.`;
        else prompt = `Write ${xStr} correct to ${what}.`;

        const traps: Array<[number, string]> = [];
        // Truncating instead of rounding.
        const truncStr = grp(decStr(q, d - p));
        if (q > 0) traps.push([val(truncStr), "You chopped the number off. Look at the next digit: if it is 5 or more, round up."]);
        if (kind === "sf") {
          if (d - k >= 1) {
            const p2 = d - k;
            const q2 = Math.floor(N / P10(p2));
            const M2 = 2 * (N - q2 * P10(p2)) >= P10(p2) ? q2 + 1 : q2;
            if (M2 > 0) traps.push([val(decStr(M2, k)), `That's ${k} decimal place${k > 1 ? "s" : ""}. Significant figures start at the first non-zero digit.`]);
          }
          if (D < 0) traps.push([M, "Keep the place value: the digits you drop must be replaced with zeros."]);
        }
        if (kind === "dp" && dp < L) {
          // Rounding to dp significant figures instead.
          const p3 = L - dp;
          const q3 = Math.floor(N / P10(p3));
          const M3 = 2 * (N - q3 * P10(p3)) >= P10(p3) ? q3 + 1 : q3;
          if (p3 !== p) traps.push([val(decStr(M3, d - p3)), `That's ${dp} significant figure${dp > 1 ? "s" : ""}. Decimal places are counted after the decimal point.`]);
        }
        const nextDigit = Math.floor(rem / P10(p - 1));
        return {
          prompt,
          answer: numAns(ans, ansStr),
          solution: [
            kind === "sf"
              ? `Count ${k} significant figure${k > 1 ? "s" : ""} from the first non-zero digit of ${xStr}.`
              : kind === "dp"
                ? `Keep ${dp} digit${dp > 1 ? "s" : ""} after the decimal point.`
                : kind === "whole"
                  ? "Keep the units digit."
                  : `Keep the ${grp(String(P10(p)))}s digit; everything after it becomes 0.`,
            `The next digit is ${nextDigit}, so ${nextDigit >= 5 ? "round up" : "round down (keep the digit)"}.`,
            `${xStr} ≈ ${ansStr}${D > 0 && ansStr.endsWith("0") ? " (the final 0 shows the accuracy, so keep it)" : ""}.`,
          ],
          hint: kind === "sf" ? "Significant figures start at the first non-zero digit — leading zeros don't count." : "Find the last digit you keep, then look at the digit after it.",
          traps: numTraps(ans, traps),
        };
      }, rng);
    },
  },

  // 4 ────────────────────────────────────────────────────────────────────────
  {
    id: `${T}.estimate`,
    topicId: T,
    title: "Estimate a calculation by rounding to 1 significant figure",
    level: 2,
    guideRef: "rounding-estimation",
    generate(rng, tier) {
      return attempt((r) => {
        // A number that rounds to d × 10^e at 1 s.f. T = that value in thousandths.
        interface Approx { s: string; t: string; T: number; x: number }
        const mk = (eMin: number, eMax: number): Approx | null => {
          const dd = r.int(1, 9);
          const e = r.int(eMin, eMax);
          const four = tier === 3 && r.bool(0.5);
          const scale = four ? 1000 : 100;
          const half = four ? 450 : 45;
          const delta = dd === 1 ? r.int(1, half - 1) : r.nonZero(-half, half - 1);
          const A = dd * scale + delta;
          const digits = four ? 3 : 2;
          const s = decStr(A, digits - e);
          const t = decStr(dd, -e);
          return { s, t, T: dd * P10(e + 3), x: val(s) };
        };
        const tmpl = tier === 1 ? r.pick([0, 0, 1]) : r.pick([0, 1, 2]);
        const eR: [number, number] = tier === 1 ? [0, 2] : tier === 2 ? [-1, 2] : [-2, 2];
        if (tmpl === 0) {
          const a = mk(eR[0], eR[1]), b = mk(eR[0], eR[1]), c = mk(tier === 1 ? 0 : -1, 1);
          if (!a || !b || !c) return null;
          const num = a.T * b.T, den = c.T * 1000;
          if ((num * 100) % den !== 0) return null;
          const est = (num * 100) / den / 100;
          if (est < 0.1 || est > 100000) return null;
          const wrong = (a.T * b.T * c.T) / 1e9;
          const exact = (a.x * b.x) / c.x;
          return {
            prompt: `By rounding each number to 1 significant figure, find an estimate for {{(${a.s} * ${b.s})/${c.s}}}.`,
            answer: numAns(est, grp(String(est))),
            solution: [`Round each number to 1 s.f.: ${a.s} ≈ ${a.t}, ${b.s} ≈ ${b.t}, ${c.s} ≈ ${c.t}.`, `{{(${a.t} * ${b.t})/${c.t} = ${micro(a.T * b.T)}/${c.t} = ${est}}}.`, `(The exact value is about ${sig4(exact)}, so the estimate is sensible.)`],
            hint: `Round every number to 1 significant figure first.${c.T < 1000 ? " Dividing by a number less than 1 makes the answer bigger." : ""}`,
            traps: numTraps(est, [[parseFloat(wrong.toPrecision(10)), "You multiplied by the bottom number instead of dividing by it."]]),
          };
        }
        if (tmpl === 1) {
          const e = r.int(Math.max(eR[0], 0), eR[1]);
          const a = mk(e, e), b = mk(e - 1, e), c = mk(tier === 1 ? 0 : -1, 1);
          if (!a || !b || !c) return null;
          const S = a.T + b.T;
          if ((S * 100) % c.T !== 0) return null;
          const est = (S * 100) / c.T / 100;
          if (est < 0.1 || est > 100000) return null;
          const wrong = a.T / 1000 + b.T / c.T;
          const exact = (a.x + b.x) / c.x;
          return {
            prompt: `Work out an estimate for {{(${a.s} + ${b.s})/${c.s}}}, by rounding each number to 1 significant figure.`,
            answer: numAns(est, grp(String(est))),
            solution: [`Round each number to 1 s.f.: ${a.s} ≈ ${a.t}, ${b.s} ≈ ${b.t}, ${c.s} ≈ ${c.t}.`, `{{(${a.t} + ${b.t})/${c.t} = ${milli(S)}/${c.t} = ${est}}}.`, `(The exact value is about ${sig4(exact)}.)`],
            hint: "The fraction line acts as a bracket: add the top first, then divide.",
            traps: numTraps(est, [[parseFloat(wrong.toPrecision(10)), "The whole top line is divided — work out the numerator first."]]),
          };
        }
        const a = mk(eR[0], eR[1]), b = mk(eR[0], eR[1]);
        const e = r.int(0, 2);
        const c = mk(e, e), dq = mk(e - 1, e);
        if (!a || !b || !c || !dq) return null;
        const D = c.T - dq.T;
        if (D <= 0) return null;
        const num = a.T * b.T;
        if ((num * 100) % (D * 1000) !== 0) return null;
        const est = (num * 100) / (D * 1000) / 100;
        if (est < 0.1 || est > 100000) return null;
        const exact = (a.x * b.x) / (c.x - dq.x);
        if (exact <= 0) return null;
        const wrong = (a.T * b.T) / c.T / 1000 - dq.T / 1000;
        return {
          prompt: `Use approximations to 1 significant figure to estimate the value of {{(${a.s} * ${b.s})/(${c.s} - ${dq.s})}}.`,
          answer: numAns(est, grp(String(est))),
          solution: [`Round each number to 1 s.f.: ${a.s} ≈ ${a.t}, ${b.s} ≈ ${b.t}, ${c.s} ≈ ${c.t}, ${dq.s} ≈ ${dq.t}.`, `Top: ${a.t} × ${b.t} = ${micro(num)}. Bottom: ${c.t} − ${dq.t} = ${milli(D)}.`, `Estimate = ${micro(num)} ÷ ${milli(D)} = ${est}. (Exact value: about ${sig4(exact)}.)`],
          hint: "Round everything to 1 s.f., then work out the top and the bottom separately.",
          traps: numTraps(est, [[parseFloat(wrong.toPrecision(10)), "The denominator is the whole of the bottom line — subtract first, then divide."]]),
        };
      }, rng);
    },
  },

  // 5 ────────────────────────────────────────────────────────────────────────
  {
    id: `${T}.calculator`,
    topicId: T,
    title: "Use a calculator with brackets, powers and roots",
    level: 2,
    guideRef: "rounding-estimation",
    generate(rng, tier) {
      return attempt((r) => {
        const dp = tier === 1 ? 1 : r.int(1, 2);
        const dec = (mn: number, mx: number) => {
          const n = r.int(mn * P10(dp), mx * P10(dp));
          if (n % 10 === 0) return null;
          return { s: decStr(n, dp), x: n / P10(dp) };
        };
        const k = tier === 3 ? r.pick([3, 3, 4]) : 3;
        const tmpl = tier === 3 ? r.int(0, 3) : r.int(0, 2);
        const a = dec(2, 20), b = dec(2, 40), c = dec(2, 15), d = dec(1, 9);
        if (!a || !b || !c || !d) return null;
        let expr: string, top: number, bot: number, topTxt: string, botTxt: string;
        const wrongs: Array<[number, string]> = [];
        if (tmpl === 0) {
          expr = `(${a.s} + ${b.s})/(${c.s} * ${d.s})`;
          top = a.x + b.x;
          bot = c.x * d.x;
          topTxt = `${a.s} + ${b.s}`;
          botTxt = `${c.s} × ${d.s}`;
          wrongs.push([a.x + b.x / bot, "Put brackets round the whole numerator: (a + b) ÷ (c × d)."], [(top / c.x) * d.x, "Put brackets round the whole denominator — you multiplied by the last number instead of dividing."]);
        } else if (tmpl === 1) {
          if (c.x <= d.x + 0.5) return null;
          expr = `sqrt(${a.s}^2 + ${b.s})/(${c.s} - ${d.s})`;
          top = Math.sqrt(a.x * a.x + b.x);
          bot = c.x - d.x;
          topTxt = `√(${a.s}² + ${b.s})`;
          botTxt = `${c.s} − ${d.s}`;
          wrongs.push([top / c.x - d.x, "Put brackets round the denominator: divide by the whole of (c − d)."], [(a.x * a.x + b.x) / bot, "Don't forget the square root over the whole numerator."]);
        } else if (tmpl === 2) {
          const a3 = a.x * a.x * a.x;
          if (a3 <= b.x + 1) return null;
          expr = `(${a.s}^3 - ${b.s})/(sqrt(${c.s}) + ${d.s})`;
          top = a3 - b.x;
          bot = Math.sqrt(c.x) + d.x;
          topTxt = `${a.s}³ − ${b.s}`;
          botTxt = `√${c.s} + ${d.s}`;
          wrongs.push([top / Math.sqrt(c.x) + d.x, "Put brackets round the denominator: (√c + d)."], [(a.x * 3 - b.x) / bot, "{{a^3}} means a × a × a, not 3 × a."]);
        } else {
          if (a.x <= b.x / 2 + 1) return null;
          const bs = trimDec(decStr(Math.round((b.x / 2) * P10(dp + 1)), dp + 1));
          const bb = val(bs);
          expr = `(${a.s}^2 - ${bs}^2)/(${c.s} * sqrt(${d.s}))`;
          top = a.x * a.x - bb * bb;
          bot = c.x * Math.sqrt(d.x);
          topTxt = `${a.s}² − ${bs}²`;
          botTxt = `${c.s} × √${d.s}`;
          wrongs.push([a.x * a.x - (bb * bb) / bot, "Bracket the whole numerator before dividing."], [(top / c.x) * Math.sqrt(d.x), "Bracket the whole denominator — you multiplied by √d instead of dividing."]);
        }
        const v = top / bot;
        if (!(v > 0.1 && v < 50000)) return null;
        const R = roundSf(v, k);
        if (!R.ok) return null;
        const ansStr = sfStr(R.v, k);
        const traps: Array<[number, string]> = [];
        for (const [w, f] of wrongs) {
          if (!(w > 0)) continue;
          const rw = roundSf(w, k);
          if (rw.ok) traps.push([rw.v, f]);
        }
        return {
          prompt: `Use your calculator to work out {{${expr}}}. Give your answer correct to ${k} significant figures.`,
          answer: numAns(R.v, ansStr),
          solution: [`Numerator: ${topTxt} = ${calc(top)}.`, `Denominator: ${botTxt} = ${calc(bot)}.`, `${calc(top)} ÷ ${calc(bot)} = ${calc(v)} = ${ansStr} (${k} s.f.).`],
          hint: "Work out the top and the bottom separately (or type brackets round each), then divide. Write down the full display before rounding.",
          traps: numTraps(R.v, traps),
        };
      }, rng);
    },
  },

  // 6 ────────────────────────────────────────────────────────────────────────
  {
    id: `${T}.error-interval`,
    topicId: T,
    title: "Find bounds and error intervals",
    level: 1,
    guideRef: "error-intervals",
    generate(rng, tier) {
      // Rounding unit = m × 10^k. Values are integers in units of 10^(k−1).
      interface Opt { label: string; m: number; k: number; trunc?: boolean; sf?: number }
      const opts: Opt[] =
        tier === 1
          ? [
              { label: "the nearest whole number", m: 1, k: 0 },
              { label: "1 decimal place", m: 1, k: -1 },
              { label: "the nearest 10", m: 1, k: 1 },
              { label: "the nearest 100", m: 1, k: 2 },
            ]
          : tier === 2
            ? [
                { label: "2 decimal places", m: 1, k: -2 },
                { label: "2 significant figures", m: 1, k: 0, sf: 2 },
                { label: "3 significant figures", m: 1, k: 0, sf: 3 },
                { label: "the nearest 5", m: 5, k: 0 },
                { label: "1 decimal place", m: 1, k: -1, trunc: true },
                { label: "a whole number", m: 1, k: 0, trunc: true },
                { label: "the nearest 1000", m: 1, k: 3 },
              ]
            : [
                { label: "2 significant figures", m: 1, k: 0, sf: 2 },
                { label: "3 significant figures", m: 1, k: 0, sf: 3 },
                { label: "the nearest 0.5", m: 5, k: -1 },
                { label: "2 decimal places", m: 1, k: -2, trunc: true },
                { label: "the nearest 50", m: 5, k: 1 },
                { label: "1 significant figure", m: 1, k: 0, sf: 1 },
              ];
      return attempt((r) => {
        const o = r.pick(opts);
        let j: number, k = o.k;
        if (o.sf) {
          j = r.int(P10(o.sf - 1) + 1, P10(o.sf) - 1);
          if (o.sf === 1 && j === 1) return null;
          if (j % 10 === 0 && r.bool(0.7)) return null;
          k = r.int(-3, 2) - (o.sf - 1);
          if (k > 3 - o.sf) return null;
        } else {
          const maxVal = 9000;
          const jmax = Math.min(o.k <= -1 ? 400 : 999, Math.floor(maxVal / (o.m * P10(o.k))));
          j = r.int(2, Math.max(3, jmax));
          if (o.m === 1 && j % 10 === 0) return null;
        }
        const m = o.m;
        const dec = 1 - k; // decimals of the half-unit grid
        const V = j * m * 10;
        const h = m * 5;
        const conv = (x: number) => val(decStr(x, dec));
        const show = (x: number) => trimDec(decStr(x, dec));
        const shown = k >= 0 ? String(j * m) + "0".repeat(k) : decStr(j * m, -k);
        const loI = o.trunc ? V : V - h;
        const hiI = o.trunc ? V + m * 10 : V + h;
        if (loI <= 0) return null;
        const L = conv(loI), U = conv(hiI);
        if (U >= 10000) return null;
        const unitStr = show(m * 10);
        const ctx = r.pick([
          { q: "A length", v: "L", u: " cm" },
          { q: "The mass of a parcel", v: "m", u: " kg" },
          { q: "A time", v: "t", u: " s" },
          { q: "A number", v: "x", u: "" },
        ]);
        const askInterval = r.bool();
        const prompt =
          `${ctx.q}, {{${ctx.v}}}, is ${shown}${ctx.u}, ${o.trunc ? "truncated to" : "correct to"} ${o.label}. ` +
          (askInterval
            ? `Write down the error interval for {{${ctx.v}}}. Type its two limits, lower first, separated by a comma.`
            : `Write down the lower bound and the upper bound of {{${ctx.v}}}, lower bound first, separated by a comma.`);
        const sol: string[] = [];
        if (o.sf) sol.push(`To ${o.label}, ${shown} is rounded to the nearest ${unitStr}.`);
        if (o.trunc) {
          sol.push(`Truncating just chops digits off, so the true value is at least ${shown} but less than ${show(hiI)}.`);
        } else {
          sol.push(`Half of ${unitStr} is ${show(h)}. Lower bound = ${shown} − ${show(h)} = ${show(loI)}; upper bound = ${shown} + ${show(h)} = ${show(hiI)}.`);
        }
        sol.push(`Error interval: {{${show(loI)} <= ${ctx.v} < ${show(hiI)}}}${ctx.u}. (The upper bound itself would round up, so it is not included.)`);
        const cands: Array<[number, number, string]> = [
          [U, L, "Right numbers — but give the lower bound first."],
        ];
        if (o.trunc) cands.push([conv(V - h), conv(V + h), "That's for a ROUNDED value. Truncation only ever chops off, so the true value can't be below the number shown."]);
        else {
          cands.push([conv(V - 2 * h), conv(V + 2 * h), `The bounds are HALF a unit either side: ± ${show(h)}, not ± ${unitStr}.`]);
          cands.push([conv(V), conv(V + 2 * h), "That would be truncation. A rounded value can be up to half a unit below as well as above."]);
        }
        return {
          prompt,
          answer: { type: "list", values: [L, U], ordered: true, display: `${show(loI)}, ${show(hiI)}` },
          solution: sol,
          hint: o.trunc ? "Truncation never rounds up. What is the smallest the value could be? And what can it not reach?" : "What is the rounding unit? The bounds are half of it either side.",
          traps: pairTraps(L, U, cands),
        };
      }, rng);
    },
  },

  // 7 ────────────────────────────────────────────────────────────────────────
  {
    id: `${T}.bounds-add-multiply`,
    topicId: T,
    title: "Bounds of a total, difference or area",
    level: 2,
    guideRef: "bounds-calculations",
    generate(rng, tier) {
      const mode =
        tier === 1 ? rng.pick(["perim", "multiple"] as const) : tier === 2 ? rng.pick(["perim", "multiple", "diff", "area"] as const) : rng.pick(["diff", "area", "jug", "multiple"] as const);
      return attempt((r) => {
        const upper = r.bool();
        const UL = upper ? "upper" : "lower";
        const pickB = upper ? hi : lo;
        const pickW = upper ? lo : hi;
        if (mode === "perim" || mode === "area") {
          const unit = r.pick(["cm", "m"]);
          const u = unit === "cm" ? r.pick(tier === 1 ? [1000] : [1000, 100]) : r.pick([100, 10]);
          const a = unit === "cm" ? meas(r, u, 12, 95) : meas(r, u, 2, 30);
          const b = unit === "cm" ? meas(r, u, 12, 95) : meas(r, u, 2, 30);
          if (a.v === b.v || (a.v % 1000 === 0 && u < 1000 && r.bool(0.7))) return null;
          const acc = accText(u, unit);
          if (mode === "perim") {
            const P = 2 * (pickB(a) + pickB(b));
            const plain = 2 * (a.v + b.v);
            return {
              prompt: `A rectangle has length ${given(a)} ${unit} and width ${given(b)} ${unit}, both correct to ${acc}. Work out the ${UL} bound for the perimeter of the rectangle, in ${unit}.`,
              answer: numAns(P / 1000, milli(P)),
              solution: [
                `${upper ? "Upper" : "Lower"} bounds: length ${milli(pickB(a))} ${unit}, width ${milli(pickB(b))} ${unit}.`,
                `To make the perimeter as ${upper ? "large" : "small"} as possible, use the ${UL} bound of every side.`,
                `2 × (${milli(pickB(a))} + ${milli(pickB(b))}) = ${milli(P)} ${unit}.`,
              ],
              hint: `Find the ${UL} bound of each side first, then do the calculation.`,
              traps: numTraps(P / 1000, [
                [(plain + (upper ? 1 : -1) * (u / 2)) / 1000, "You added the half-unit once, to the answer. Each of the four sides has its own bound."],
                [plain / 1000, "That's the perimeter from the rounded values — use the bounds."],
              ]),
            };
          }
          const A = pickB(a) * pickB(b);
          const mixed = pickB(a) * pickW(b);
          return {
            prompt: `A rectangular ${unit === "cm" ? "photo" : "garden"} measures ${given(a)} ${unit} by ${given(b)} ${unit}, both correct to ${acc}. Calculate the ${UL} bound for its area, in {{${unit}^2}}. Give the exact value.`,
            answer: numAns(A / 1e6, micro(A)),
            solution: [
              `${upper ? "Upper" : "Lower"} bounds: ${milli(pickB(a))} ${unit} and ${milli(pickB(b))} ${unit}.`,
              `For the ${upper ? "largest" : "smallest"} area, multiply the two ${UL} bounds.`,
              `${milli(pickB(a))} × ${milli(pickB(b))} = ${micro(A)} {{${unit}^2}}.`,
            ],
            hint: `Area = length × width. Which bound of each length makes the area as ${upper ? "big" : "small"} as possible?`,
            traps: numTraps(A / 1e6, [
              [mixed / 1e6, `Use the ${UL} bound for BOTH lengths.`],
              [(a.v * b.v) / 1e6, "That's the area from the rounded values — use the bounds."],
            ]),
          };
        }
        if (mode === "multiple") {
          const ctx = r.pick([
            { s: "A stack of {n} identical textbooks. Each book is {x} cm thick, correct to {acc}.", what: "height of the stack", unit: "cm", u: [100], rng: [1, 5] },
            { s: "A row of {n} identical floor tiles laid edge to edge. Each tile is {x} cm long, correct to {acc}.", what: "length of the row", unit: "cm", u: [1000, 5000], rng: [20, 60] },
            { s: "A lift carries {n} boxes of durians. Each box has a mass of {x} kg, correct to {acc}.", what: "total mass of the boxes", unit: "kg", u: [1000, 100], rng: [8, 30] },
          ]);
          const u = r.pick(ctx.u);
          const x = meas(r, u, ctx.rng[0], ctx.rng[1]);
          const n = r.int(tier === 1 ? 4 : 6, tier === 1 ? 12 : 25);
          const tot = n * pickB(x);
          const once = n * x.v + (upper ? 1 : -1) * (u / 2);
          const text = ctx.s.replace("{n}", String(n)).replace("{x}", given(x)).replace("{acc}", accText(u, ctx.unit));
          return {
            prompt: `${text} Work out the ${UL} bound for the ${ctx.what}, in ${ctx.unit}.`,
            answer: numAns(tot / 1000, milli(tot)),
            solution: [`${upper ? "Upper" : "Lower"} bound of one item: ${milli(pickB(x))} ${ctx.unit}.`, `Every item could be at its ${UL} bound, so multiply: ${n} × ${milli(pickB(x))} = ${milli(tot)} ${ctx.unit}.`],
            hint: `Each of the ${n} items could be at its ${UL} bound.`,
            traps: numTraps(tot / 1000, [[once / 1000, `The error builds up: each of the ${n} items can be ${milli(u / 2)} ${ctx.unit} out, not just the total.`]]),
          };
        }
        if (mode === "diff") {
          const ctx = r.pick([
            { s: "A ribbon is {a} m long, correct to {accA}. Mei cuts off a piece {b} m long, correct to {accB}.", what: "length of ribbon left", unit: "m", uA: 100, uB: 10, ra: [3, 9], rb: [1, 2] },
            { s: "A water tank holds {a} litres, correct to {accA}. Jun drains {b} litres, correct to {accB}.", what: "volume of water left", unit: "litres", uA: 10000, uB: 1000, ra: [300, 900], rb: [40, 250] },
            { s: "Aisha's height is {a} cm, correct to {accA}. Her brother's height is {b} cm, correct to {accB}.", what: "difference between their heights", unit: "cm", uA: 1000, uB: 100, ra: [150, 185], rb: [110, 140] },
          ]);
          const a = meas(r, ctx.uA, ctx.ra[0], ctx.ra[1]);
          const b = meas(r, ctx.uB, ctx.rb[0], ctx.rb[1]);
          if (b.v >= a.v) return null;
          const D = upper ? hi(a) - lo(b) : lo(a) - hi(b);
          const sameBound = upper ? hi(a) - hi(b) : lo(a) - lo(b);
          const text = ctx.s.replace("{a}", given(a)).replace("{b}", given(b)).replace("{accA}", accText(ctx.uA, ctx.unit)).replace("{accB}", accText(ctx.uB, ctx.unit));
          return {
            prompt: `${text} Calculate the ${UL} bound for the ${ctx.what}, in ${ctx.unit}.`,
            answer: numAns(D / 1000, milli(D)),
            solution: [
              `Bounds: ${milli(lo(a))} ≤ first < ${milli(hi(a))}, and ${milli(lo(b))} ≤ second < ${milli(hi(b))}.`,
              upper ? "For the biggest difference, take the BIGGEST first amount and subtract the SMALLEST second amount." : "For the smallest difference, take the SMALLEST first amount and subtract the BIGGEST second amount.",
              `${milli(upper ? hi(a) : lo(a))} − ${milli(upper ? lo(b) : hi(b))} = ${milli(D)} ${ctx.unit}.`,
            ],
            hint: `For a subtraction, the ${UL} bound uses the ${UL} bound of the first number and the ${upper ? "lower" : "upper"} bound of the second.`,
            traps: numTraps(D / 1000, [[sameBound / 1000, `Using the ${UL} bound of both doesn't work for subtraction — to make a − b ${upper ? "big" : "small"}, take ${upper ? "away as little" : "away as much"} as possible.`]]),
          };
        }
        // jug: total minus n equal portions.
        const J = meas(r, r.pick([50000, 100000]), 1000, 2500); // ml
        const c = meas(r, 10000, 120, 300);
        const n = r.int(2, 4);
        if (n * c.v >= J.v - 100000) return null;
        const rest = upper ? hi(J) - n * lo(c) : lo(J) - n * hi(c);
        const wrong = upper ? hi(J) - n * hi(c) : lo(J) - n * lo(c);
        return {
          prompt: `A jug contains ${given(J)} ml of soy milk, correct to the nearest ${milli(J.u)} ml. Olivia pours out ${n} glasses, each containing ${given(c)} ml, correct to the nearest 10 ml. Work out the ${UL} bound for the amount of soy milk left in the jug, in ml.`,
          answer: numAns(rest / 1000, milli(rest)),
          solution: [
            `Jug: ${milli(lo(J))} ≤ J < ${milli(hi(J))}. Each glass: ${milli(lo(c))} ≤ g < ${milli(hi(c))}.`,
            upper ? `Most left = most in the jug − least poured: ${milli(hi(J))} − ${n} × ${milli(lo(c))}.` : `Least left = least in the jug − most poured: ${milli(lo(J))} − ${n} × ${milli(hi(c))}.`,
            `= ${milli(rest)} ml.`,
          ],
          hint: `What makes the amount left as ${upper ? "large" : "small"} as possible: a fuller or emptier jug? Bigger or smaller glasses?`,
          traps: numTraps(rest / 1000, [[wrong / 1000, "For a subtraction you need OPPOSITE bounds: the amount poured out should be at its other extreme."]]),
        };
      }, rng);
    },
  },

  // 8 ────────────────────────────────────────────────────────────────────────
  {
    id: `${T}.bounds-divide`,
    topicId: T,
    title: "Bounds in speed, density and other divisions",
    level: 3,
    guideRef: "bounds-calculations",
    generate(rng, tier) {
      const mode = tier === 1 ? rng.pick(["speed", "density"] as const) : tier === 2 ? rng.pick(["speed", "density", "time"] as const) : rng.pick(["speed", "time", "radius", "density"] as const);
      return attempt((r) => {
        const upper = r.bool();
        const UL = upper ? "upper" : "lower";
        if (mode === "radius") {
          const A = meas(r, 1000, 20, 400);
          const Ab = upper ? hi(A) : lo(A);
          const R = Math.sqrt(Ab / 1000 / Math.PI);
          const R3 = roundSf(R, 3);
          if (!R3.ok) return null;
          const other = roundSf(Math.sqrt((upper ? lo(A) : hi(A)) / 1000 / Math.PI), 3);
          const plain = roundSf(Math.sqrt(A.v / 1000 / Math.PI), 3);
          return {
            prompt: `The area of a circular pizza base is ${given(A)} {{cm^2}}, correct to the nearest {{cm^2}}. Calculate the ${UL} bound for its radius. Give your answer correct to 3 significant figures.`,
            answer: numAns(R3.v, sfStr(R3.v, 3)),
            solution: [`Area bounds: ${milli(lo(A))} ≤ A < ${milli(hi(A))}.`, `{{r = sqrt(A/pi)}} increases as A increases, so use the ${UL} bound of A.`, `{{r = sqrt(${milli(Ab)}/pi)}} = ${calc(R)} = ${sfStr(R3.v, 3)} cm (3 s.f.).`],
            hint: "Rearrange {{A = pi r^2}} for r first. Does r get bigger or smaller when A gets bigger?",
            traps: numTraps(R3.v, [
              ...(other.ok ? ([[other.v, `That's the ${upper ? "lower" : "upper"} bound — a bigger area means a bigger radius.`]] as Array<[number, string]>) : []),
              ...(plain.ok ? ([[plain.v, "That uses the rounded area — use the bound."]] as Array<[number, string]>) : []),
            ]),
          };
        }
        let top: Meas, bot: Meas, prompt: string, unitAns: string, qName: string, tName: string, bName: string;
        if (mode === "speed") {
          top = r.bool() ? meas(r, 1000, 60, 400) : meas(r, 10000, 200, 3000);
          bot = r.bool() || tier === 1 ? meas(r, 100, 8, 90) : meas(r, 1000, 20, 400);
          if (bot.v <= 0) return null;
          const who = r.pick(["Arjun", "Priya", "Kenji", "Hana", "Ravi"]);
          prompt = `${who} cycles ${given(top)} m, correct to ${accText(top.u, "m")}, in ${given(bot)} seconds, correct to ${accText(bot.u, "s")}. Work out the ${UL} bound for ${who}'s average speed. Give your answer in m/s, correct to 3 significant figures.`;
          unitAns = "m/s";
          qName = "speed";
          tName = "distance";
          bName = "time";
        } else if (mode === "density") {
          top = r.bool() ? meas(r, 1000, 80, 900) : meas(r, 100, 20, 300);
          bot = meas(r, r.pick([1000, 100]), 10, 120);
          const mat = r.pick(["a block of wood", "a piece of glass", "a stone", "a bar of soap"]);
          prompt = `The mass of ${mat} is ${given(top)} g, correct to ${accText(top.u, "g")}. Its volume is ${given(bot)} {{cm^3}}, correct to ${bot.u === 1000 ? "the nearest {{cm^3}}" : "1 decimal place"}. Calculate the ${UL} bound for its density, in {{g/cm^3}}. Give your answer correct to 3 significant figures.`;
          unitAns = "g/cm³";
          qName = "density";
          tName = "mass";
          bName = "volume";
        } else {
          top = meas(r, 1000, 80, 400);
          bot = meas(r, 1000, 40, 110);
          prompt = `A coach travels ${given(top)} km, correct to the nearest km, at an average speed of ${given(bot)} km/h, correct to the nearest km/h. Work out the ${UL} bound for the time taken, in hours. Give your answer correct to 3 significant figures.`;
          unitAns = "hours";
          qName = "time";
          tName = "distance";
          bName = "speed";
        }
        const tB = upper ? hi(top) : lo(top);
        const bB = upper ? lo(bot) : hi(bot);
        const v = tB / bB;
        const R3 = roundSf(v, 3);
        if (!R3.ok) return null;
        const same = roundSf((upper ? hi(top) : lo(top)) / (upper ? hi(bot) : lo(bot)), 3);
        const plain = roundSf(top.v / bot.v, 3);
        return {
          prompt,
          answer: numAns(R3.v, sfStr(R3.v, 3)),
          solution: [
            `${tName[0].toUpperCase() + tName.slice(1)}: ${milli(lo(top))} ≤ ${tName} < ${milli(hi(top))}. ${bName[0].toUpperCase() + bName.slice(1)}: ${milli(lo(bot))} ≤ ${bName} < ${milli(hi(bot))}.`,
            upper ? `For the largest ${qName}, divide the LARGEST ${tName} by the SMALLEST ${bName}.` : `For the smallest ${qName}, divide the SMALLEST ${tName} by the LARGEST ${bName}.`,
            `${milli(tB)} ÷ ${milli(bB)} = ${calc(v)} = ${sfStr(R3.v, 3)} ${unitAns} (3 s.f.).`,
          ],
          hint: `In a division, making the bottom ${upper ? "smaller" : "bigger"} makes the answer ${upper ? "bigger" : "smaller"}.`,
          traps: numTraps(R3.v, [
            ...(same.ok ? ([[same.v, `Dividing ${UL} by ${UL} doesn't give the ${UL} bound. For a division, use OPPOSITE bounds on the top and bottom.`]] as Array<[number, string]>) : []),
            ...(plain.ok ? ([[plain.v, "That uses the rounded values — use the bounds."]] as Array<[number, string]>) : []),
          ]),
        };
      }, rng);
    },
  },

  // 9 ────────────────────────────────────────────────────────────────────────
  {
    id: `${T}.suitable-accuracy`,
    topicId: T,
    title: "Give an answer to a suitable degree of accuracy",
    level: 3,
    guideRef: "bounds-calculations",
    generate(rng, tier) {
      return attempt((r) => {
        const ctx = r.int(0, tier === 1 ? 1 : 2);
        let top: Meas, bot: Meas, setup: string, sym: string, unit: string;
        if (ctx === 0) {
          top = meas(r, 1000, 100, 600);
          bot = meas(r, 100, 10, 90);
          setup = `A runner covers {{d = ${given(top)}}} m, correct to the nearest metre, in {{t = ${given(bot)}}} s, correct to 1 decimal place. Her average speed is {{v = d/t}}.`;
          sym = "v";
          unit = "m/s";
        } else if (ctx === 1) {
          top = meas(r, 100, 50, 400);
          bot = meas(r, 100, 10, 90);
          setup = `A stone has mass {{m = ${given(top)}}} g and volume {{V = ${given(bot)}}} {{cm^3}}, both correct to 1 decimal place. Its density is {{rho = m/V}}.`;
          sym = "rho";
          unit = "g/cm³";
        } else {
          top = meas(r, 1000, 200, 900);
          bot = meas(r, 1000, 20, 80);
          setup = `A hose fills a paddling pool with {{W = ${given(top)}}} litres of water, correct to the nearest litre, in {{T = ${given(bot)}}} minutes, correct to the nearest minute. The flow rate is {{F = W/T}} litres per minute.`;
          sym = "F";
          unit = "litres per minute";
        }
        const LB = lo(top) / hi(bot);
        const UB = hi(top) / lo(bot);
        let k = 0;
        for (let s = 4; s >= 1; s--) {
          const a = roundSf(LB, s), b = roundSf(UB, s);
          if (!a.ok || !b.ok) return null;
          if (a.v === b.v) {
            k = s;
            break;
          }
        }
        if (k < (tier === 1 ? 2 : 1) || k > 3) return null;
        if (k === 1 && LB < 1) return null;
        const ans = roundSf(UB, k).v;
        const finerU = roundSf(UB, k + 1), finerL = roundSf(LB, k + 1);
        const direct = roundSf(top.v / bot.v, 3);
        const symM = sym === "rho" ? "ρ" : sym;
        return {
          prompt: `${setup} By considering bounds, work out the value of {{${sym}}} to a suitable degree of accuracy. (Give just the value, in ${unit}.)`,
          answer: numAns(ans, sfStr(ans, k)),
          solution: [
            `Lower bound of ${symM} = ${milli(lo(top))} ÷ ${milli(hi(bot))} = ${calc(LB)}.`,
            `Upper bound of ${symM} = ${milli(hi(top))} ÷ ${milli(lo(bot))} = ${calc(UB)}.`,
            `To ${k + 1} s.f. they are ${sfStr(finerL.v, k + 1)} and ${sfStr(finerU.v, k + 1)} — different. To ${k} s.f. both are ${sfStr(ans, k)}.`,
            `So ${symM} = ${sfStr(ans, k)} ${unit} (${k} s.f.): both bounds round to this value, so it is the most accurate answer you can be sure of.`,
          ],
          hint: "Find both bounds, then round them both more and more coarsely until they agree.",
          traps: numTraps(ans, [
            ...(direct.ok ? ([[direct.v, "3 s.f. is not automatically right here — the bounds don't agree to that accuracy."]] as Array<[number, string]>) : []),
            [finerU.v, `That's the upper bound to ${k + 1} s.f. — but the lower bound gives ${sfStr(finerL.v, k + 1)}, so you can't be sure of that digit.`],
            [finerL.v, `That's the lower bound to ${k + 1} s.f. — but the upper bound gives ${sfStr(finerU.v, k + 1)}, so you can't be sure of that digit.`],
          ]),
        };
      }, rng);
    },
  },

  // 10 ───────────────────────────────────────────────────────────────────────
  {
    id: `${T}.counting`,
    topicId: T,
    title: "Count outcomes with the product rule",
    level: 2,
    guideRef: "number-problems",
    generate(rng, tier) {
      const mode = tier === 1 ? rng.pick(["meal", "code"] as const) : tier === 2 ? rng.pick(["meal", "code", "norepeat", "digits"] as const) : rng.pick(["norepeat", "digits", "digits"] as const);
      return attempt((r) => {
        if (mode === "meal") {
          const s = r.int(2, 6), m = r.int(3, 8), d = r.int(2, 5);
          const three = tier > 1 && r.bool();
          const dr = r.int(2, 6);
          const parts = three ? [s, m, d, dr] : [s, m, d];
          const ans = parts.reduce((x, y) => x * y, 1);
          const names = ["starters", "mains", "desserts", "drinks"];
          return {
            prompt: `A vegetarian café offers ${parts.map((n, i) => `${n} ${names[i]}`).join(", ").replace(/, ([^,]+)$/, " and $1")}. A set meal is one of each. How many different set meals are possible?`,
            answer: numAns(ans),
            solution: [`Each starter can go with each main, and so on: the choices multiply.`, `${parts.join(" × ")} = ${ans}.`],
            hint: "For each starter, how many mains could follow? Draw a tree if it helps.",
            traps: numTraps(ans, [[parts.reduce((x, y) => x + y, 0), "Adding counts the dishes, not the meals. Every choice combines with every other choice, so multiply."]]),
          };
        }
        if (mode === "code") {
          const nl = r.int(1, 2), nd = r.int(2, 4);
          const letters = r.pick([5, 6, 8, 26]);
          const ans = Math.pow(letters, nl) * Math.pow(10, nd);
          const letTxt = letters === 26 ? "any of the 26 letters" : `one of the letters A to ${String.fromCharCode(64 + letters)}`;
          return {
            prompt: `A locker code is ${nl === 1 ? "one letter" : "two letters"} followed by ${nd} digits. Each letter is ${letTxt}, and each digit is 0–9. Letters and digits may repeat. How many different codes are possible?`,
            answer: numAns(ans, grp(String(ans))),
            solution: [`There are ${letters} choices for each letter and 10 for each digit.`, `${Array(nl).fill(letters).concat(Array(nd).fill(10)).join(" × ")} = ${grp(String(ans))}.`],
            hint: "Fill the positions one at a time: how many choices for each?",
            traps: numTraps(ans, [[letters * nl + 10 * nd, "Multiply the number of choices for each position — don't add them."], [letters * 10 ** nd, `There are ${nl} letter positions: each needs its own factor of ${letters}.`]]),
          };
        }
        if (mode === "norepeat") {
          const n = r.int(6, 15);
          const k = r.int(2, 4);
          const roles = ["captain", "vice-captain", "secretary", "treasurer"].slice(0, k);
          let ans = 1;
          const fs: number[] = [];
          for (let i = 0; i < k; i++) {
            ans *= n - i;
            fs.push(n - i);
          }
          return {
            prompt: `A CCA club has ${n} members. One person is chosen as ${roles.join(", ").replace(/, ([^,]+)$/, " and $1")}. Nobody can hold two roles. In how many different ways can the roles be filled?`,
            answer: numAns(ans, grp(String(ans))),
            solution: [`${n} choices for ${roles[0]}, then ${n - 1} left for ${roles[1]}${k > 2 ? ", and so on" : ""}.`, `${fs.join(" × ")} = ${grp(String(ans))}.`],
            hint: "After the first role is filled, how many people are left for the next?",
            traps: numTraps(ans, [[Math.pow(n, k), "That lets one person hold several roles. Each choice uses someone up."]]),
          };
        }
        // digits: count n-digit numbers with a property; the product-rule working is
        // checked against a brute-force count so the solution can never disagree.
        const nd = tier === 3 ? r.pick([3, 4]) : 3;
        const mid = (n: number) => Array(Math.max(0, nd - 2)).fill(n);
        const X = nd === 3 ? 500 : 5000;
        const conds: Array<{ t: string; f: (x: number) => boolean; steps: string[]; calc: string; v: number }> = [
          {
            t: "are even",
            f: (x) => x % 2 === 0,
            steps: ["First digit: 9 choices (1–9). Last digit: 5 choices (0, 2, 4, 6, 8)." + (nd > 2 ? " Each middle digit: 10 choices." : "")],
            calc: [9, ...mid(10), 5].join(" × "),
            v: 9 * P10(nd - 2) * 5,
          },
          {
            t: "are odd and have all their digits different",
            f: (x) => x % 2 === 1 && new Set(String(x)).size === nd,
            steps: ["Last digit first: 5 choices (1, 3, 5, 7, 9).", "First digit: not 0 and not the last digit, so 8 choices. Then the remaining positions use the digits left: " + (nd === 3 ? "8." : "8, then 7.")],
            calc: nd === 3 ? "5 × 8 × 8" : "5 × 8 × 8 × 7",
            v: nd === 3 ? 320 : 2240,
          },
          {
            t: "have all their digits different",
            f: (x) => new Set(String(x)).size === nd,
            steps: ["First digit: 9 choices (not 0). Second: 9 (0 is now allowed, but not the first digit)." + (nd === 3 ? " Third: 8." : " Third: 8. Fourth: 7.")],
            calc: nd === 3 ? "9 × 9 × 8" : "9 × 9 × 8 × 7",
            v: nd === 3 ? 648 : 4536,
          },
          {
            t: "are multiples of 5 with all digits different",
            f: (x) => x % 5 === 0 && new Set(String(x)).size === nd,
            steps: ["Split into cases by the last digit.", nd === 3 ? "Ending in 0: first digit 9 choices, middle 8 → 72. Ending in 5: first digit 8 choices (not 0 or 5), middle 8 → 64." : "Ending in 0: 9 × 8 × 7 = 504. Ending in 5: first digit 8 choices (not 0 or 5), then 8 × 7 → 448."],
            calc: nd === 3 ? "72 + 64" : "504 + 448",
            v: nd === 3 ? 136 : 952,
          },
          {
            t: "contain no zero digit",
            f: (x) => !String(x).includes("0"),
            steps: ["Every digit has 9 choices (1–9)."],
            calc: Array(nd).fill(9).join(" × "),
            v: Math.pow(9, nd),
          },
          {
            t: `are greater than ${X} and even`,
            f: (x) => x > X && x % 2 === 0,
            steps: [`Numbers from ${X} upwards: first digit 5–9 (5 choices), last digit even (5 choices)${nd > 2 ? ", each middle digit 10 choices" : ""}.`, `That includes ${X} itself, which is not greater than ${X}, so subtract 1.`],
            calc: `${[5, ...mid(10), 5].join(" × ")} − 1`,
            v: 5 * P10(nd - 2) * 5 - 1,
          },
        ];
        const c = r.pick(tier === 2 ? [conds[0], conds[2], conds[4]] : conds);
        let ans = 0;
        for (let x = P10(nd - 1); x < P10(nd); x++) if (c.f(x)) ans++;
        if (ans !== c.v) throw new Error(`counting drill: working ${c.v} disagrees with count ${ans} (${c.t})`);
        const allNd = 9 * P10(nd - 1);
        const pr = r.int(0, 1);
        return {
          prompt: pr === 0 ? `How many ${nd}-digit whole numbers ${c.t}? (A ${nd}-digit number cannot start with 0.)` : `Ethan lists every ${nd}-digit whole number that ${c.t.replace(/^are /, "is ").replace(/^have /, "has ").replace(/^contain /, "contains ")}. How many numbers are on his list?`,
          answer: numAns(ans, grp(String(ans))),
          solution: [...c.steps, `Total: ${c.calc} = ${grp(String(ans))}.`],
          hint: "Which position has the strictest rule? Deal with it first, then count the choices for the others.",
          traps: numTraps(ans, [[allNd, `That's every ${nd}-digit number — apply the condition.`]]),
        };
      }, rng);
    },
  },
];
