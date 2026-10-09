// Procedural skill drills for "fractions-percentages" (Year 11, Edexcel 4MA1 Higher).
// Values are built from integers (whole cents, tenths of a per cent) and rounded
// with exact integer / BigInt arithmetic, so answers never carry float noise.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { frac, gcd, num, big, clean, poly, simplify } from "./helpers.ts";

const TOPIC = "fractions-percentages";

const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara", "Kenji", "Olivia"] as const;

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

/** Money from whole cents: 8000 → "$80", 1250 → "$12.50", 123456 → "$1,234.56". */
function cash(cents: number): string {
  const c = Math.round(Math.abs(cents));
  const d = Math.floor(c / 100);
  const r = c % 100;
  return (cents < 0 ? "−" : "") + "$" + big(d) + (r ? "." + String(r).padStart(2, "0") : "");
}

/** Percentage from tenths: 125 → "12.5%". */
function pc(tenths: number): string {
  return `${num(tenths / 10)}%`;
}

/** Multiplier from tenths of a per cent: up 125 → "1.125", down 75 → "0.925". */
function mult(tenths: number, up: boolean): string {
  return num(clean((1000 + (up ? tenths : -tenths)) / 1000));
}

/** Round the positive rational N/D (BigInts) to dp decimal places, half up. */
function roundBig(N: bigint, D: bigint, dp: number): number {
  const f = 10n ** BigInt(dp);
  const q = (2n * N * f + D) / (2n * D);
  return clean(Number(q) / 10 ** dp);
}

/** Round the positive rational N/D (integers) to dp decimal places, half up. */
function roundQ(N: number, D: number, dp: number): number {
  return roundBig(BigInt(N), BigInt(D), dp);
}

/** Is N/D exact to dp decimal places? */
function exactQ(N: number, D: number, dp: number): boolean {
  return (N * 10 ** dp) % D === 0;
}

/** Mixed-number markup for a positive fraction (unsimplified parts kept). */
function mixed(n: number, d: number): string {
  return frac(n, d, { simplify: false, mixed: true });
}

/** "(x + 3)" style factor as plain ASCII for {{ }} and answer specs; k = 0 gives "x". */
function lin(k: number): string {
  return k === 0 ? "x" : `(${poly([[1, "x"], [k, ""]])})`;
}

/** "(2x - 3)" from p x + q. */
function lin2(p: number, q: number): string {
  return `(${poly([[p, "x"], [q, ""]])})`;
}


/** "After how many years will it first pass $T?" (used by the compound drill at tier 3). */
function yearsToReach(rng: Rng, tier: 1 | 2 | 3): DrillItem {
      let P = 1000000, t = 40, dep = false, T = 1500000, n = 1;
      const vals: number[] = [];
      for (let i = 0; i < 300; i++) {
        dep = rng.bool(0.45);
        P = tier === 1 ? rng.int(2, 20) * 100000 : tier === 2 ? rng.int(10, 200) * 50000 : rng.int(200, 4000) * 10000;
        t = dep
          ? rng.pick(tier === 1 ? [100, 200, 250] : [80, 120, 150, 180, 225])
          : rng.pick(tier === 1 ? [50, 100, 200] : tier === 2 ? [25, 30, 35, 40, 45] : [18, 22, 26, 32, 38]);
        const ratio = dep ? rng.pick([0.25, 0.4, 0.5, 0.6, 0.75]) : rng.pick(tier === 1 ? [1.25, 1.5, 2] : [1.2, 1.3, 1.5, 2]);
        T = Math.round((P * ratio) / 10000) * 10000; // a round target in whole $100s
        vals.length = 0;
        let v = P / 100; // dollars
        const m = (1000 + (dep ? -t : t)) / 1000;
        n = 0;
        let ok = true;
        while (dep ? v >= T / 100 : v <= T / 100) {
          v *= m;
          n++;
          vals.push(v);
          if (n > 40) { ok = false; break; }
        }
        if (!ok || n < 2) continue;
        // Keep away from the boundary so rounding never matters.
        const last = vals[n - 1], prev = vals[n - 2];
        if (Math.abs(last - T / 100) < 1 || Math.abs(prev - T / 100) < 1) continue;
        break;
      }
      const m = mult(t, !dep);
      const fmt2 = (v: number) => cash(Math.round(v * 100));
      const prompt = dep
        ? `A machine is bought for ${cash(P)}. Its value depreciates by ${pc(t)} each year. After how many complete years will it first be worth less than ${cash(T)}?`
        : `${rng.pick(NAMES)} invests ${cash(P)} at ${pc(t)} per year compound interest. After how many complete years will the investment first be worth more than ${cash(T)}?`;
      return {
        prompt,
        answer: { type: "number", value: n },
        solution: [
          `The yearly multiplier is ${m}. Find the first n with ${cash(P)} × {{${m}^n}} ${dep ? "<" : ">"} ${cash(T)}.`,
          `n = ${n - 1}: ${cash(P)} × {{${m}^${n - 1}}} = ${fmt2(vals[n - 2])} — not yet.`,
          `n = ${n}: ${cash(P)} × {{${m}^${n}}} = ${fmt2(vals[n - 1])} — ${dep ? "below" : "above"} ${cash(T)}.`,
          `So the answer is ${n} years.`,
        ],
        hint: "Use your calculator's ANS key: multiply by the multiplier again and again, counting the years.",
        traps: [{ spec: { type: "number", value: n - 1 }, feedback: `After ${n - 1} year${n - 1 === 1 ? "" : "s"} it has not yet ${dep ? "dropped below" : "passed"} ${cash(T)} — check the year after.` }],
      };
}

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // 1 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.mixed-number-operations`,
    topicId: TOPIC,
    title: "Add, subtract, multiply and divide mixed numbers",
    level: 1,
    guideRef: "fraction-operations",
    generate(rng, tier) {
      const dens = tier === 1 ? [2, 3, 4, 5, 6] : tier === 2 ? [3, 4, 5, 6, 7, 8, 9, 10, 12] : [6, 7, 8, 9, 10, 12, 14, 15];
      const wMax = tier === 1 ? 3 : tier === 2 ? 5 : 8;
      const op = rng.pick(["+", "−", "×", "÷"] as const);
      let w1 = 2, n1 = 1, d1 = 2, w2 = 1, n2 = 1, d2 = 3, rn = 1, rd = 1;
      for (let i = 0; i < 200; i++) {
        d1 = rng.pick(dens);
        d2 = rng.pick(dens.filter((x) => x !== d1));
        n1 = rng.int(1, d1 - 1);
        n2 = rng.int(1, d2 - 1);
        w1 = rng.int(1, wMax);
        w2 = rng.int(1, wMax);
        if (gcd(n1, d1) !== 1 || gcd(n2, d2) !== 1) continue;
        const A = w1 * d1 + n1, B = w2 * d2 + n2;
        if (op === "+") [rn, rd] = simplify(A * d2 + B * d1, d1 * d2);
        else if (op === "−") [rn, rd] = simplify(A * d2 - B * d1, d1 * d2);
        else if (op === "×") [rn, rd] = simplify(A * B, d1 * d2);
        else [rn, rd] = simplify(A * d2, d1 * B);
        // Keep the answer a genuine mixed number (more than 1, not whole).
        if (rd === 1 || rn <= rd) continue;
        if (op === "÷" && w1 * d1 + n1 <= w2 * d2 + n2) continue;
        break;
      }
      const A = w1 * d1 + n1, B = w2 * d2 + n2;
      const F1 = mixed(A, d1), F2 = mixed(B, d2);
      const I1 = frac(A, d1, { simplify: false }), I2 = frac(B, d2, { simplify: false });
      const steps: string[] = [`Write each mixed number as an improper fraction: ${F1} = ${I1} and ${F2} = ${I2}.`];
      const traps: Trap[] = [];
      if (op === "+" || op === "−") {
        const L = (d1 * d2) / gcd(d1, d2);
        const a = A * (L / d1), b = B * (L / d2);
        const top = op === "+" ? a + b : a - b;
        steps.push(`Use the common denominator ${L}: ${frac(a, L, { simplify: false })} ${op} ${frac(b, L, { simplify: false })} = ${frac(top, L, { simplify: false })}.`);
        const [sn, sd] = simplify(op === "+" ? A + B : A - B, d1 + d2);
        if (sn * rd !== rn * sd && sn > 0) traps.push({ spec: { type: "fraction", n: sn, d: sd }, feedback: "You added (or subtracted) the denominators. Rewrite both fractions with a common denominator first." });
      } else if (op === "×") {
        steps.push(`Multiply tops and bottoms: ${frac(A * B, d1 * d2, { simplify: false })}.`);
        // Classic slip: multiply the whole numbers and the fractions separately.
        const [tn, td] = simplify(w1 * w2 * d1 * d2 + n1 * n2, d1 * d2);
        if (tn * rd !== rn * td) traps.push({ spec: { type: "fraction", n: tn, d: td }, feedback: "You multiplied the whole numbers and the fraction parts separately. Convert to improper fractions first — the cross terms matter." });
      } else {
        steps.push(`Dividing by ${I2} is the same as multiplying by its reciprocal ${frac(d2, B, { simplify: false })}: ${I1} × ${frac(d2, B, { simplify: false })} = ${frac(A * d2, d1 * B, { simplify: false })}.`);
        const [tn, td] = simplify(A * B, d1 * d2);
        if (tn * rd !== rn * td) traps.push({ spec: { type: "fraction", n: tn, d: td }, feedback: "You multiplied instead of dividing. Flip the second fraction (use its reciprocal), then multiply." });
      }
      steps.push(`Simplify and write as a mixed number: ${frac(rn, rd)} = ${frac(rn, rd, { mixed: true })}.`);
      const lead = rng.pick([
        "Without a calculator, work out",
        "Show how to work out, without a calculator,",
        "Work out the exact value of",
      ]);
      return {
        prompt: `${lead} ${F1} ${op} ${F2}. Give your answer as a mixed number in its simplest form.`,
        answer: { type: "fraction", n: rn, d: rd, simplest: true, form: "mixed" },
        solution: steps,
        hint: op === "÷" ? "Make both improper, then multiply by the reciprocal of the second." : "Turn both mixed numbers into improper fractions first.",
        traps,
      };
    },
  },

  // 2 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.fraction-to-decimal`,
    topicId: TOPIC,
    title: "Convert a fraction to a decimal",
    level: 1,
    guideRef: "recurring-decimals",
    generate(rng, tier) {
      const recurring = tier > 1 && rng.bool(0.4);
      if (!recurring) {
        // Terminating: denominator 2^a 5^b.
        const dens = tier === 1 ? [4, 5, 8, 20, 25, 50] : [8, 16, 20, 25, 40, 50, 80, 125, 160, 250, 32];
        let n = 1, d = 8;
        for (let i = 0; i < 100; i++) {
          d = rng.pick(dens);
          n = rng.int(1, d - 1);
          if (gcd(n, d) === 1) break;
        }
        let a = 0, b = 0;
        for (let m = d; m % 2 === 0; m /= 2) a++;
        for (let m = d; m % 5 === 0; m /= 5) b++;
        const k = Math.max(a, b);
        const p = 10 ** k;
        const scale = p / d;
        const value = clean((n * scale) / p);
        return {
          prompt: `${rng.pick(["Write", "Without a calculator, write", "Convert"])} ${frac(n, d)} ${rng.pick(["as a decimal.", "to a decimal."])}`,
          answer: { type: "number", value, allowFraction: false },
          solution: [
            `${d} = {{${[a ? (a > 1 ? `2^${a}` : "2") : "", b ? (b > 1 ? `5^${b}` : "5") : ""].filter(Boolean).join(" * ")}}} has no prime factors other than 2 and 5, so the decimal terminates.`,
            `Multiply top and bottom by ${scale} to get a power of 10: ${frac(n, d, { simplify: false })} = ${frac(n * scale, p, { simplify: false })}.`,
            `${frac(n * scale, p, { simplify: false })} = ${num(value)}.`,
          ],
          hint: "Scale the fraction so the denominator is 10, 100, 1000 …",
        };
      }
      // Recurring: divide and round.
      const dens = tier === 2 ? [3, 6, 7, 9, 11, 12, 15] : [7, 11, 13, 14, 21, 22, 24, 27, 33, 37];
      let n = 1, d = 7;
      for (let i = 0; i < 100; i++) {
        d = rng.pick(dens);
        n = rng.int(1, d - 1);
        if (gcd(n, d) === 1) break;
      }
      const dp = rng.pick([2, 3]);
      const value = roundQ(n, d, dp);
      // Long-division digits for the working.
      const digits: number[] = [];
      let r = n;
      for (let i = 0; i < 6; i++) {
        r *= 10;
        digits.push(Math.floor(r / d));
        r %= d;
      }
      return {
        prompt: `Use division to write ${frac(n, d)} as a decimal. Give your answer correct to ${dp} decimal places.`,
        answer: { type: "number", value, allowFraction: false },
        solution: [
          `${d} has a prime factor other than 2 or 5, so the decimal recurs.`,
          `Divide ${n} by ${d}: ${n} ÷ ${d} = 0.${digits.join("")}…`,
          `Correct to ${dp} decimal places: ${value.toFixed(dp)}.`,
        ],
        hint: `Short division: ${n}.000000 ÷ ${d}, then look at the digit after the ${dp === 2 ? "2nd" : "3rd"} decimal place.`,
      };
    },
  },

  // 3 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.recurring-to-fraction`,
    topicId: TOPIC,
    title: "Write a recurring decimal as a fraction",
    level: 2,
    guideRef: "recurring-decimals",
    generate(rng, tier) {
      let I = 0, P = "", R = "3";
      for (let i = 0; i < 200; i++) {
        I = tier === 3 && rng.bool(0.4) ? rng.int(1, 4) : 0;
        const p = tier === 1 ? 0 : tier === 2 ? rng.pick([0, 1, 1]) : rng.pick([1, 1, 2]);
        const r = tier === 1 ? rng.pick([1, 2]) : tier === 2 ? rng.pick([1, 2, 2]) : rng.pick([1, 2, 3]);
        P = Array.from({ length: p }, () => String(rng.int(0, 9))).join("");
        R = Array.from({ length: r }, () => String(rng.int(0, 9))).join("");
        if (/^0+$/.test(R) || /^9+$/.test(R)) continue;
        if (r > 1 && new Set(R).size === 1) continue; // "33" is really period 1
        if (r === 3 && R[0] === R[1] && R[1] === R[2]) continue;
        if (p > 0 && P[p - 1] === R[r - 1]) continue; // not the shortest way to write it
        if (I === 0 && p === 0 && r === 1 && tier > 1) continue;
        break;
      }
      const p = P.length, r = R.length;
      const A = Number(`${I}${P}${R}`), B = Number(`${I}${P}`);
      const big1 = 10 ** (p + r), big2 = 10 ** p;
      const [fn, fd] = simplify(A - B, big1 - big2);
      const shown = `${I}.${P}${R.repeat(r === 1 ? 5 : r === 2 ? 3 : 2)}…`;
      const xp = (k: number) => {
        // x × 10^k written out as a decimal
        const s = `${I}${P}${R.repeat(8)}`;
        const intPart = s.slice(0, 1 + k).replace(/^0+(?=\d)/, "");
        return `${intPart}.${s.slice(1 + k, 1 + k + 6)}…`;
      };
      const steps: string[] = [`Let x = ${shown}`];
      if (p > 0) steps.push(`Move the non-recurring digit${p > 1 ? "s" : ""} past the point: ${big2}x = ${xp(p)}`);
      steps.push(`Move one full block of the recurring part: ${big1}x = ${xp(p + r)}`);
      steps.push(`Subtract so the recurring tails cancel: ${big1 - big2}x = ${num(A - B)}`);
      steps.push(`x = ${frac(A - B, big1 - big2, { simplify: false })}${gcd(A - B, big1 - big2) > 1 ? ` = ${frac(fn, fd)}` : ""}`);
      const traps: Trap[] = [];
      if (p > 0) {
        const [tn, td] = simplify(Number(R), 10 ** r - 1);
        const t = I * td + tn;
        if (t * fd !== fn * td) traps.push({ spec: { type: "fraction", n: t, d: td }, feedback: `That ignores the non-recurring digit${p > 1 ? "s" : ""} ${P}. Multiply by ${10 ** p} first to move ${p > 1 ? "them" : "it"} past the point, then subtract.` });
      } else {
        const [tn, td] = simplify(Number(`${I}${R}`), 10 ** r);
        if (tn * fd !== fn * td) traps.push({ spec: { type: "fraction", n: tn, d: td }, feedback: "That is the terminating decimal, not the recurring one. A recurring block of length " + r + " goes over " + (10 ** r - 1) + "." });
      }
      return {
        prompt: `${rng.pick(["Write", "Use algebra to write", "Express"])} the recurring decimal ${shown} (the digit${r > 1 ? "s" : ""} ${R} repeat${r > 1 ? "" : "s"} forever) as a fraction in its simplest form.`,
        answer: { type: "fraction", n: fn, d: fd, simplest: true },
        solution: steps,
        hint: `Multiply x by a power of 10 that lines up the recurring blocks, then subtract to cancel the tail.`,
        traps,
      };
    },
  },

  // 4 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.increase-decrease-multiplier`,
    topicId: TOPIC,
    title: "Increase or decrease an amount using a multiplier",
    level: 1,
    guideRef: "percentage-change",
    generate(rng, tier) {
      let cents = 8000, t = 150, up = true;
      const ctxs = [
        { up: true, text: (c: string, p: string) => `A laptop costs ${c} before GST. GST of ${p} is added. Work out the price including GST.` , fixed: 90 },
        { up: true, text: (c: string, p: string) => `${rng.pick(NAMES)} earns ${c} a month. She gets a ${p} pay rise. Work out her new monthly pay.` , fixed: 0 },
        { up: false, text: (c: string, p: string) => `A pair of trainers costs ${c}. In a sale the price is reduced by ${p}. Work out the sale price.` , fixed: 0 },
        { up: false, text: (c: string, p: string) => `A hawker stall's monthly rent of ${c} is cut by ${p}. Work out the new rent.` , fixed: 0 },
        { up: true, text: (c: string, p: string) => `Increase ${c} by ${p}.` , fixed: 0 },
        { up: false, text: (c: string, p: string) => `Decrease ${c} by ${p}.` , fixed: 0 },
      ];
      const ctx = rng.pick(ctxs);
      up = ctx.up;
      for (let i = 0; i < 100; i++) {
        if (tier === 1) {
          cents = rng.int(2, 60) * 1000;
          t = ctx.fixed || rng.pick([50, 100, 150, 200, 250, 300, 400]);
        } else if (tier === 2) {
          cents = rng.int(150, 9000) * 10;
          t = ctx.fixed || rng.pick([30, 70, 90, 120, 175, 35, 85, 125, 225]);
        } else {
          cents = rng.int(10000, 900000);
          t = ctx.fixed || rng.pick([25, 45, 65, 135, 165, 185, 215, 375]);
        }
        if (!up && t >= 1000) continue;
        break;
      }
      const N = cents * (1000 + (up ? t : -t));
      const exact = N % 1000 === 0;
      const value = roundQ(N, 100000, 2);
      const change = roundQ(cents * t, 100000, 2);
      return {
        prompt: `${ctx.text(cash(cents), pc(t))}${exact ? "" : " Give your answer to the nearest cent."}`,
        answer: { type: "number", value, display: cash(Math.round(value * 100)) },
        solution: [
          `${up ? "An increase" : "A decrease"} of ${pc(t)} means you have ${pc(1000 + (up ? t : -t))} of the original, so the multiplier is ${mult(t, up)}.`,
          `${cash(cents)} × ${mult(t, up)} = ${cash(Math.round(value * 100))}${exact ? "" : " (to the nearest cent)"}.`,
        ],
        hint: `What percentage of the original is left (or reached)? Turn that into a decimal multiplier.`,
        traps: Math.abs(change - value) > 0.005 ? [{ spec: { type: "number", value: change }, feedback: `That is just the ${pc(t)} on its own — now ${up ? "add it to" : "take it away from"} the original (or use the multiplier ${mult(t, up)}).` }] : [],
      };
    },
  },

  // 5 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.percentage-change`,
    topicId: TOPIC,
    title: "Find a percentage change, profit or loss",
    level: 2,
    guideRef: "percentage-change",
    generate(rng, tier) {
      let oldC = 5000, newC = 6000;
      for (let i = 0; i < 200; i++) {
        if (tier === 1) {
          oldC = rng.int(2, 40) * 1000;
          const pct = rng.pick([5, 10, 15, 20, 25, 30, 40, 50, 60, 75]) * (rng.bool() ? 1 : -1);
          newC = (oldC * (100 + pct)) / 100;
        } else if (tier === 2) {
          oldC = rng.int(20, 400) * 100;
          const pct = rng.int(3, 65) * (rng.bool() ? 1 : -1);
          newC = (oldC * (100 + pct)) / 100;
        } else {
          oldC = rng.int(1500, 90000);
          newC = Math.round(oldC * (0.4 + rng.next() * 1.2));
        }
        if (!Number.isInteger(newC) || newC === oldC || newC <= 0) continue;
        if (tier === 3 && exactQ(Math.abs(newC - oldC) * 100, oldC, 0)) continue;
        break;
      }
      const diff = Math.abs(newC - oldC);
      const rise = newC > oldC;
      const exact = exactQ(diff * 100, oldC, 1);
      const value = roundQ(diff * 100, oldC, 1);
      const wrong = roundQ(diff * 100, newC, 1);
      const kind = rng.pick(["price", "profit", "plain"] as const);
      const who = rng.pick(NAMES);
      let prompt: string;
      if (kind === "profit") {
        prompt = `${who} buys a second-hand bicycle for ${cash(oldC)} and sells it for ${cash(newC)}. Work out the percentage ${rise ? "profit" : "loss"}.`;
      } else if (kind === "price") {
        const item = rng.pick(["A monthly MRT concession pass", "The price of a durian", "A concert ticket", "An HDB flat's monthly utilities bill"]);
        prompt = `${item} changes from ${cash(oldC)} to ${cash(newC)}. Work out the percentage ${rise ? "increase" : "decrease"}.`;
      } else {
        prompt = `A value ${rise ? "rises" : "falls"} from ${cash(oldC)} to ${cash(newC)}. Work out the percentage ${rise ? "increase" : "decrease"}.`;
      }
      if (!exact) prompt += " Give your answer correct to 1 decimal place.";
      return {
        prompt,
        answer: { type: "number", value, display: `${num(value)}%` },
        solution: [
          `Change = ${cash(newC)} − ${cash(oldC)} = ${rise ? "" : "−"}${cash(diff)}.`,
          `Divide by the **original** amount: ${num(diff / 100)} ÷ ${num(oldC / 100)} × 100.`,
          `= ${num(value)}%${exact ? "" : " (1 d.p.)"} ${rise ? (kind === "profit" ? "profit" : "increase") : kind === "profit" ? "loss" : "decrease"}.`,
        ],
        hint: "Percentage change = change ÷ ORIGINAL × 100.",
        traps: Math.abs(wrong - value) > 0.05 ? [{ spec: { type: "number", value: wrong }, feedback: "You divided by the new amount. Percentage change is always measured against the original." }] : [],
      };
    },
  },

  // 6 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.reverse-percentage`,
    topicId: TOPIC,
    title: "Find the original amount (reverse percentage)",
    level: 2,
    guideRef: "reverse-percentages",
    generate(rng, tier) {
      let O = 5000, t = 200, up = false;
      const ctx = rng.pick([
        { up: false, make: (n: string, p: string) => `In a sale, all prices are reduced by ${p}. A jacket costs ${n} in the sale. Work out the price before the sale.` },
        { up: true, make: (n: string, p: string) => `The price of a phone including ${p} GST is ${n}. Work out the price before GST was added.`, fixed: 90 },
        { up: true, make: (n: string, p: string) => `After a ${p} pay rise, ${rng.pick(NAMES)}'s weekly wage is ${n}. Work out the weekly wage before the rise.` },
        { up: false, make: (n: string, p: string) => `A car loses ${p} of its value in its first year. After one year it is worth ${n}. Work out its value when new.` },
        { up: true, make: (n: string, p: string) => `A school's CCA budget was increased by ${p} to ${n}. Work out the budget before the increase.` },
      ] as { up: boolean; make: (n: string, p: string) => string; fixed?: number }[]);
      up = ctx.up;
      for (let i = 0; i < 200; i++) {
        if (tier === 1) {
          O = rng.int(5, 120) * 1000;
          t = ctx.fixed ?? rng.pick([100, 200, 250, 300, 400, 500]);
        } else if (tier === 2) {
          O = rng.int(200, 9000) * 100;
          t = ctx.fixed ?? rng.pick([50, 120, 150, 180, 350, 150, 80]);
        } else {
          O = rng.int(1000, 60000) * 100;
          t = ctx.fixed ?? rng.pick([25, 75, 125, 175, 225, 375]);
        }
        const N = O * (1000 + (up ? t : -t));
        if (N % 1000 !== 0) continue; // the given amount must be exact in cents
        break;
      }
      const Ncents = (O * (1000 + (up ? t : -t))) / 1000;
      const value = O / 100;
      // Trap: take/add the percentage of the NEW amount.
      const wrong = roundQ(Ncents * (1000 + (up ? -t : t)), 100000, 2);
      return {
        prompt: ctx.make(cash(Ncents), pc(t)),
        answer: { type: "number", value, display: cash(O) },
        solution: [
          `The amount given is ${pc(1000 + (up ? t : -t))} of the original, so original × ${mult(t, up)} = ${cash(Ncents)}.`,
          `Undo the multiplier by dividing: ${cash(Ncents)} ÷ ${mult(t, up)} = ${cash(O)}.`,
          `Check: ${cash(O)} × ${mult(t, up)} = ${cash(Ncents)} ✓`,
        ],
        hint: `The given amount is not 100% — what percentage of the original is it?`,
        traps: Math.abs(wrong - value) > 0.005 ? [{ spec: { type: "number", value: wrong }, feedback: `You found ${pc(t)} of the new amount. The ${pc(t)} was a percentage of the ORIGINAL — divide by ${mult(t, up)} instead.` }] : [],
      };
    },
  },

  // 7 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.compound-interest`,
    topicId: TOPIC,
    title: "Compound interest and depreciation (incl. finding the number of years)",
    level: 2,
    guideRef: "compound-growth",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.5)) return yearsToReach(rng, tier);
      const dep = rng.bool(0.4);
      const P = tier === 1 ? rng.int(2, 20) * 50000 : tier === 2 ? rng.int(40, 600) * 5000 : rng.int(500, 9000) * 1000;
      const t = dep
        ? tier === 1 ? rng.pick([100, 150, 200]) : tier === 2 ? rng.pick([80, 120, 150, 180, 250]) : rng.pick([75, 125, 135, 185, 215])
        : tier === 1 ? rng.pick([20, 30, 40, 50]) : tier === 2 ? rng.pick([15, 25, 32, 35, 45, 28]) : rng.pick([18, 24, 27, 36, 42, 55]);
      const n = tier === 1 ? rng.int(2, 4) : tier === 2 ? rng.int(3, 8) : rng.int(5, 12);
      const m = BigInt(1000 + (dep ? -t : t));
      const value = roundBig(BigInt(P) * m ** BigInt(n), 100n * 1000n ** BigInt(n), 2);
      // Simple-interest trap.
      const simple = roundQ(P * (1000 + (dep ? -t : t) * n), 100000, 2);
      const who = rng.pick(NAMES);
      const prompt = dep
        ? rng.pick([
            `A car is bought for ${cash(P)}. It depreciates by ${pc(t)} each year. Work out its value after ${n} years.`,
            `A delivery van worth ${cash(P)} loses ${pc(t)} of its value every year. Work out its value after ${n} years.`,
          ])
        : rng.pick([
            `${who} invests ${cash(P)} in a savings account paying ${pc(t)} compound interest per year. Work out the value of the investment after ${n} years.`,
            `${cash(P)} is invested at ${pc(t)} per annum compound interest. Work out the total amount after ${n} years.`,
          ]);
      return {
        prompt: `${prompt} Give your answer to the nearest cent.`,
        answer: { type: "number", value, display: cash(Math.round(value * 100)) },
        solution: [
          `Multiplier for one year: ${dep ? "1 − " : "1 + "}${num(t / 1000)} = ${mult(t, !dep)}.`,
          `Apply it ${n} times: ${cash(P)} × {{${mult(t, !dep)}^${n}}}.`,
          `= ${cash(Math.round(value * 100))} (to the nearest cent).`,
        ],
        hint: "Use {{A = P * m^n}}, where m is the multiplier for one year.",
        traps: Math.abs(simple - value) > 0.005 ? [{ spec: { type: "number", value: simple }, feedback: `That is simple ${dep ? "depreciation" : "interest"} — the same amount every year. Compound means each year's ${pc(t)} is taken of the NEW value: use the multiplier to the power ${n}.` }] : [],
      };
    },
  },

  // 8 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.repeated-percentage-change`,
    topicId: TOPIC,
    title: "Overall effect of repeated percentage changes",
    level: 3,
    guideRef: "compound-growth",
    generate(rng, tier) {
      const k = tier === 3 ? 3 : 2;
      let ch: number[] = [];
      let total = 0;
      for (let i = 0; i < 200; i++) {
        const pool = tier === 1 ? [10, 20, 25, 30, 40, 50] : [5, 8, 10, 12, 15, 20, 25, 30, 35, 40];
        ch = Array.from({ length: k }, () => rng.pick(pool) * (rng.bool() ? 1 : -1));
        if (ch.every((c) => c > 0) || ch.every((c) => c < 0)) continue;
        // Product of (100 + c_i) − 100^k, as hundredths of a per cent × 100^(k−2)
        let prod = 1;
        for (const c of ch) prod *= 100 + c;
        total = prod - 100 ** k; // overall % change = total / 100^(k−1)
        if (total === 0) continue;
        break;
      }
      const D = 100 ** (k - 1);
      const exact = exactQ(Math.abs(total), D, 2);
      const mag = roundQ(Math.abs(total), D, 2);
      const value = total < 0 ? -mag : mag;
      const naive = ch.reduce((a, b) => a + b, 0);
      const desc = ch.map((c) => `${c > 0 ? "increases" : "decreases"} by ${Math.abs(c)}%`);
      const story = rng.pick(["The price of a share", "The number of visitors to Sentosa in a month", "The price of a bubble-tea franchise", "A town's population"]);
      const lastJoin = desc.length === 3 ? `${desc[0]}, then ${desc[1]}, then ${desc[2]}` : `${desc[0]} and then ${desc[1]}`;
      const ms = ch.map((c) => num(clean((100 + c) / 100)));
      let prodM = 1;
      for (const c of ch) prodM *= (100 + c) / 100;
      const prodText = num(clean(prodM, 10));
      return {
        prompt: `${story} ${lastJoin}. Work out the overall percentage change. Write a decrease as a negative number${exact ? "" : " and give your answer correct to 2 decimal places"}.`,
        answer: { type: "number", value, display: `${num(value)}%` },
        solution: [
          `Write each change as a multiplier: ${ms.join(", ")}.`,
          `Multiply them: ${ms.join(" × ")} = ${prodText}.`,
          `${prodText} − 1 = ${num(clean(prodM - 1, 10))}, so the overall change is ${num(value)}%${exact ? "" : " (2 d.p.)"} — ${value < 0 ? "a decrease" : "an increase"}.`,
        ],
        hint: "Percentage changes don't add — multiply their multipliers.",
        traps: naive !== value ? [{ spec: { type: "number", value: naive }, feedback: "You added the percentages. Each change acts on the new amount, so multiply the multipliers instead." }] : [],
      };
    },
  },

  // 9 -----------------------------------------------------------------------
  {
    id: `${TOPIC}.simplify-algebraic-fraction`,
    topicId: TOPIC,
    title: "Simplify algebraic fractions by factorising",
    level: 2,
    guideRef: "algebraic-fractions",
    generate(rng, tier) {
      // Build from factors so the answer is exact: (x+a)(x+b) / ((x+a)(x+c)) etc.
      const R = tier === 1 ? 5 : tier === 2 ? 7 : 9;
      const variant = tier === 1 ? rng.pick(["quad-over-lin", "quad-over-quad"] as const) : tier === 2 ? rng.pick(["quad-over-quad", "quad-over-quad", "common-x"] as const) : rng.pick(["scaled", "nonmonic", "multiply", "divide"] as const);
      let a = 2, b = 3, c = -1, k = 2, p = 2, q = 1, e = 4, f = -3;
      const ok = () => new Set([a, b, c]).size === 3 && a !== 0 && b !== 0;
      for (let i = 0; i < 200; i++) {
        a = rng.nonZero(-R, R);
        b = rng.nonZero(-R, R);
        c = rng.nonZero(-R, R);
        k = rng.pick([2, 3, 4, 5]);
        p = rng.pick([2, 3]);
        q = rng.nonZero(-7, 7);
        e = rng.nonZero(-R, R);
        f = rng.nonZero(-R, R);
        if (!ok()) continue;
        if (variant === "nonmonic" && (gcd(p, q) !== 1 || q === p * a || q === p * c)) continue;
        if ((variant === "multiply" || variant === "divide") && new Set([a, b, c, e, f]).size !== 5) continue;
        break;
      }
      const quad = (r: number, s: number) => poly([[1, "x^2"], [r + s, "x"], [r * s, ""]]);
      let prompt: string, expr: string, steps: string[];
      let trap: Trap | undefined;
      if (variant === "quad-over-lin") {
        const N = quad(a, b);
        prompt = `Simplify fully {{(${N})/${lin(a)}}}.`;
        expr = poly([[1, "x"], [b, ""]]);
        steps = [`Factorise the numerator: ${"{{"}${N} = ${lin(a)}${lin(b)}${"}}"}.`, `Cancel the common factor ${"{{"}${lin(a)}${"}}"}.`, `= {{${expr}}}`];
      } else if (variant === "quad-over-quad" || variant === "common-x") {
        const A = variant === "common-x" ? 0 : a;
        const N = variant === "common-x" ? poly([[1, "x^2"], [b, "x"]]) : quad(A, b);
        const Dn = variant === "common-x" ? poly([[1, "x^2"], [c, "x"]]) : quad(A, c);
        const DnFact = variant === "common-x" ? `x${lin(c)}` : `${lin(A)}${lin(c)}`;
        const NFact = variant === "common-x" ? `x${lin(b)}` : `${lin(A)}${lin(b)}`;
        prompt = `Simplify fully {{(${N})/(${Dn})}}.`;
        expr = `${lin(b)}/${lin(c)}`;
        steps = [`Factorise the top: {{${N} = ${NFact}}}.`, `Factorise the bottom: {{${Dn} = ${DnFact}}}.`, `Cancel the common factor {{${lin(A)}}}: {{${expr}}}.`];
        if (c !== 0) trap = { spec: { type: "fraction", n: simplify(b, c)[0], d: simplify(b, c)[1] }, feedback: "You can't cancel the x terms on their own — only whole common FACTORS cancel. Factorise top and bottom first." };
      } else if (variant === "scaled") {
        const N = poly([[k, "x^2"], [k * (a + b), "x"], [k * a * b, ""]]);
        const Dn = quad(a, c);
        prompt = `Simplify fully {{(${N})/(${Dn})}}.`;
        expr = `${k}${lin(b)}/${lin(c)}`;
        steps = [`Take out the common factor ${k}, then factorise: {{${N} = ${k}${lin(a)}${lin(b)}}}.`, `Factorise the bottom: {{${Dn} = ${lin(a)}${lin(c)}}}.`, `Cancel {{${lin(a)}}}: {{(${k}${lin(b)})/${lin(c)}}}.`];
      } else if (variant === "nonmonic") {
        // (px+q)(x+a) / ((x+a)(x+c))
        const N = poly([[p, "x^2"], [p * a + q, "x"], [q * a, ""]]);
        const Dn = quad(a, c);
        prompt = `Simplify fully {{(${N})/(${Dn})}}.`;
        expr = `${lin2(p, q)}/${lin(c)}`;
        steps = [`Factorise the top: {{${N} = ${lin2(p, q)}${lin(a)}}}.`, `Factorise the bottom: {{${Dn} = ${lin(a)}${lin(c)}}}.`, `Cancel {{${lin(a)}}}: {{${expr}}}.`];
      } else {
        // (x^2 + ...)/(x + e) × (x + f)/(x^2 + ...) style, sharing factors
        const N1 = quad(a, b), D1 = lin(e).slice(1, -1), N2 = lin(f).slice(1, -1), D2 = quad(a, f);
        if (variant === "multiply") {
          prompt = `Simplify fully {{(${N1})/(${D1}) * (${N2})/(${D2})}}.`;
          expr = `${lin(b)}/${lin(e)}`;
          steps = [
            `Factorise: {{${N1} = ${lin(a)}${lin(b)}}} and {{${D2} = ${lin(a)}${lin(f)}}}.`,
            `Write as one fraction: {{(${lin(a)}${lin(b)}${lin(f)})/(${lin(e)}${lin(a)}${lin(f)})}}.`,
            `Cancel {{${lin(a)}}} and {{${lin(f)}}}: {{${expr}}}.`,
          ];
        } else {
          prompt = `Simplify fully {{(${N1})/(${D1})}} ÷ {{(${D2})/(${N2})}}.`;
          expr = `${lin(b)}/${lin(e)}`;
          steps = [
            `Dividing by a fraction = multiplying by its reciprocal: {{(${N1})/(${D1}) * (${N2})/(${D2})}}.`,
            `Factorise: {{${N1} = ${lin(a)}${lin(b)}}} and {{${D2} = ${lin(a)}${lin(f)}}}.`,
            `Cancel {{${lin(a)}}} and {{${lin(f)}}}: {{${expr}}}.`,
          ];
        }
      }
      return {
        prompt,
        answer: { type: "expression", expr, form: "simplified" },
        solution: steps,
        hint: "Factorise every numerator and denominator completely, then cancel whole brackets.",
        traps: trap ? [trap] : [],
      };
    },
  },

  // 10 -----------------------------------------------------------------------
  {
    id: `${TOPIC}.add-subtract-algebraic-fractions`,
    topicId: TOPIC,
    title: "Add or subtract algebraic fractions",
    level: 3,
    guideRef: "algebraic-fractions",
    generate(rng, tier) {
      let A = 2, B = 3, p = 1, q = -2, r = 1, s = 1;
      const sub = rng.bool();
      for (let i = 0; i < 200; i++) {
        A = rng.int(1, tier === 1 ? 4 : 7);
        B = rng.int(1, tier === 1 ? 4 : 7);
        p = rng.nonZero(-6, 6);
        q = rng.nonZero(-6, 6);
        r = tier === 3 ? rng.pick([1, 2, 3]) : 1;
        s = tier === 3 ? rng.pick([1, 2]) : 1;
        if (r * q === s * p && r === s) continue; // same denominator
        if (r === s && p === q) continue;
        if (gcd(r, p) > 1 || gcd(s, q) > 1) continue; // each denominator already simplified
        // Numerator: A(sx+q) ± B(rx+p) = (As ± Br)x + (Aq ± Bp)
        const nx = A * s + (sub ? -B * r : B * r);
        const nc = A * q + (sub ? -B * p : B * p);
        if (nx === 0 && nc === 0) continue;
        // No common factor with a denominator: numerator must not vanish at x = −p/r or −q/s.
        if (nx * -p + nc * r === 0) continue;
        if (nx * -q + nc * s === 0) continue;
        break;
      }
      const nx = A * s + (sub ? -B * r : B * r);
      const nc = A * q + (sub ? -B * p : B * p);
      const d1 = lin2(r, p), d2 = lin2(s, q);
      const num1 = poly([[nx, "x"], [nc, ""]]);
      const op = sub ? "-" : "+";
      const expr = `(${num1})/(${d1}${d2})`;
      const lead = rng.pick(["Write as a single fraction in its simplest form", "Express as a single fraction", "Simplify fully"]);
      // Trap: add tops and bottoms.
      const trapExpr = `(${A}${sub ? "-" : "+"}${B})/(${poly([[r + (sub ? -s : s), "x"], [p + (sub ? -q : q), ""]])})`;
      const trapOk = !(r + (sub ? -s : s) === 0 && p + (sub ? -q : q) === 0);
      return {
        prompt: `${lead}: {{${A}/${d1} ${op} ${B}/${d2}}}.`,
        answer: { type: "expression", expr, form: "simplified" },
        solution: [
          `Common denominator: {{${d1}${d2}}}.`,
          `{{(${A === 1 ? "" : A}${d2} ${op} ${B === 1 ? "" : B}${d1})/(${d1}${d2})}}`,
          `Expand the top: {{${poly([[A * s, "x"], [A * q, ""]])} ${sub ? "- (" + poly([[B * r, "x"], [B * p, ""]]) + ")" : "+ " + poly([[B * r, "x"], [B * p, ""]])} = ${num1}}}.`,
          `= {{${expr}}}`,
        ],
        hint: "Multiply each numerator by the OTHER denominator. Bracket the second numerator when subtracting.",
        traps: sub
          ? [{ spec: { type: "expression", expr: `(${poly([[nx, "x"], [A * q + B * p, ""]])})/(${d1}${d2})` }, feedback: "Careful with the minus sign: it applies to EVERY term of the second numerator, so −(…) changes both signs." }]
          : trapOk ? [{ spec: { type: "expression", expr: trapExpr }, feedback: "You added the tops and the bottoms. Use a common denominator, just like with number fractions." }] : [],
      };
    },
  },
];
