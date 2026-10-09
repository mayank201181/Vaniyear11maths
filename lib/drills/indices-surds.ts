// Procedural skill drills for "Indices, Standard Form & Surds" (indices-surds).
// Every generator builds its numbers from integers (standard form is held as
// integer × 10^e) and rejects awkward cases with bounded retry loops, so each
// answer is exact. Surd answers are matched as text with the usual typing
// variants (√ is normalised to "sqrt"), so an unsimplified or unrationalised
// form is never marked correct; value-equal forms hit a "wrong form" trap.
import type { Drill } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { big, clean, frac, gcd, num, poly, simplify } from "./helpers.ts";

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

/** Try `make` up to `tries` times; return the first non-null result, else the fallback. */
function attempt<T>(make: () => T | null, fallback: T, tries = 400): T {
  for (let i = 0; i < tries; i++) {
    const r = make();
    if (r !== null) return r;
  }
  return fallback;
}

const SQUAREFREE_EASY = [2, 3, 5, 6, 7];
const SQUAREFREE = [2, 3, 5, 6, 7, 10, 11, 13, 14, 15];

/** n = k² × s with s square-free. */
function splitSquare(n: number): [number, number] {
  let k = 1, s = n;
  for (let f = 2; f * f <= s; f++) {
    while (s % (f * f) === 0) {
      s /= f * f;
      k *= f;
    }
  }
  return [k, s];
}

/** Exponent in maths markup: ^3, ^x, ^(-2), ^(2x+1). */
function ex(e: string | number): string {
  const s = String(e).replace(/\s+/g, "");
  return /^[0-9a-z]$|^[0-9]+$/.test(s) ? `^${s}` : `^(${String(e)})`;
}

/** b√c in maths markup (b may be ±1 or negative). */
function sm(b: number, c: number): string {
  if (b === 1) return `sqrt(${c})`;
  if (b === -1) return `-sqrt(${c})`;
  return `${b}sqrt(${c})`;
}

/** a + b√c in maths markup. */
function ss(a: number, b: number, c: number): string {
  if (b === 0) return String(a);
  if (a === 0) return sm(b, c);
  return `${a} ${b < 0 ? "-" : "+"} ${sm(Math.abs(b), c)}`;
}

/** Typing variants of B√c for B > 0. */
function coefVariants(B: number, c: number): string[] {
  if (B === 1) return [`sqrt(${c})`, `sqrt${c}`];
  return [`${B}sqrt(${c})`, `${B}sqrt${c}`, `${B}*sqrt(${c})`, `${B}*sqrt${c}`];
}

/** Answer a + b√c (integers); text match so only the simplified form counts. */
function surdAns(a: number, b: number, c: number): AnswerSpec {
  if (b === 0) return { type: "number", value: a };
  const vs = coefVariants(Math.abs(b), c);
  const accept: string[] = [];
  for (const v of vs) {
    if (a === 0) accept.push(`${b < 0 ? "-" : ""}${v}`);
    else {
      accept.push(`${a}${b < 0 ? "-" : "+"}${v}`);
      accept.push(`${b < 0 ? "-" : ""}${v}${a < 0 ? "-" : "+"}${Math.abs(a)}`);
    }
  }
  return { type: "text", accept, display: `{{${ss(a, b, c)}}}` };
}

/** Answer (N√s)/D with N, D > 0 already in lowest terms. */
function fracSurdAns(N: number, D: number, s: number): AnswerSpec {
  if (D === 1) return surdAns(0, N, s);
  const accept: string[] = [];
  for (const v of coefVariants(N, s)) accept.push(`${v}/${D}`, `(${v})/${D}`);
  accept.push(`(${N}/${D})sqrt(${s})`, `(${N}/${D})sqrt${s}`, `(${N}/${D})*sqrt(${s})`, `${N}/${D}*sqrt(${s})`, `${N}/${D}*sqrt${s}`);
  return { type: "text", accept, display: `{{(${sm(N, s)})/${D}}}` };
}

/** Rational answer n/d: a whole number, or a fraction in simplest form. */
function ratAns(n: number, d: number, allowDecimal = false): AnswerSpec {
  const [a, b] = simplify(n, d);
  if (b === 1) return { type: "number", value: a };
  return { type: "fraction", n: a, d: b, simplest: true, ...(allowDecimal ? { allowDecimal: true } : {}) };
}

/** Rational value in maths markup. */
function ratM(n: number, d: number): string {
  return frac(n, d);
}

/** Number traps, dropping any that equal the answer (or repeat). */
function numTraps(answer: number | null, cands: Array<[number, string]>): Trap[] {
  const seen = new Set<number>(answer === null ? [] : [answer]);
  const out: Trap[] = [];
  for (const [v, feedback] of cands) {
    if (!Number.isFinite(v) || seen.has(v)) continue;
    seen.add(v);
    out.push({ spec: { type: "number", value: v }, feedback });
  }
  return out;
}

// --- monomials --------------------------------------------------------------

type Mono = { c: number; e: [number, number] };

/** Monomial in maths markup: 3x^2 y. */
function monoM(m: Mono, v: [string, string]): string {
  const parts: string[] = [];
  m.e.forEach((p, i) => {
    if (p === 0) return;
    parts.push(p === 1 ? v[i] : `${v[i]}^${p}`);
  });
  const coef = m.c === 1 && parts.length ? "" : String(m.c);
  return coef + parts.join(" ");
}

/** Monomial as ASCII for the checker: 3x^2*y. */
function monoA(m: Mono, v: [string, string]): string {
  const parts: string[] = [];
  m.e.forEach((p, i) => {
    if (p === 0) return;
    parts.push(p === 1 ? v[i] : `${v[i]}^${p}`);
  });
  if (!parts.length) return String(m.c);
  return (m.c === 1 ? "" : `${m.c}*`) + parts.join("*");
}

function monoSpec(m: Mono, v: [string, string]): AnswerSpec {
  return { type: "expression", expr: monoA(m, v), form: "simplified", display: `{{${monoM(m, v)}}}` };
}

const LETTERS: Array<[string, string]> = [["x", "y"], ["a", "b"], ["p", "q"], ["m", "n"], ["h", "k"]];

// --- standard form ----------------------------------------------------------

/** Number held exactly as I × 10^e (I a positive integer). */
type Big = { I: number; e: number };

function norm(b: Big): Big {
  let { I, e } = b;
  while (I % 10 === 0 && I !== 0) {
    I /= 10;
    e += 1;
  }
  return { I, e };
}

/** Standard-form pieces of I × 10^e. */
function sf(b: Big): { mant: number; exp: number; value: number } {
  const n = norm(b);
  const digits = String(n.I).length;
  const exp = n.e + digits - 1;
  const mant = clean(n.I / Math.pow(10, digits - 1));
  return { mant, exp, value: clean(mant * Math.pow(10, exp)) };
}

/** Standard form in maths markup: 3.52 × 10^(-4). */
function sfM(b: Big): string {
  const { mant, exp } = sf(b);
  return `${num(mant)} * 10${ex(exp)}`;
}

/** Ordinary decimal string for I × 10^e, exact (no float maths). */
function ordinary(b: Big): string {
  const n = norm(b);
  if (n.e >= 0) return big(n.I * Math.pow(10, n.e));
  const s = String(n.I).padStart(-n.e + 1, "0");
  const point = s.length + n.e;
  return `${s.slice(0, point)}.${s.slice(point)}`;
}

function sfAns(b: Big): AnswerSpec {
  const { value } = sf(b);
  return { type: "number", value, standardForm: true, display: `{{${sfM(b)}}}` };
}

/** Two-significant-figure mantissa digits 11–99, not a multiple of 10. */
function twoSig(rng: { int(a: number, b: number): number }): number {
  for (let i = 0; i < 50; i++) {
    const v = rng.int(11, 99);
    if (v % 10 !== 0) return v;
  }
  return 23;
}

// --- equations with indices -------------------------------------------------

const BASES: Array<{ c: number; max: number }> = [
  { c: 2, max: 6 },
  { c: 3, max: 4 },
  { c: 5, max: 3 },
];

/** Linear expression in x as markup/ASCII: 2x - 3. */
function lin(a: number, b: number): string {
  return poly([[a, "x"], [b, ""]]);
}

/** c^k as an ordinary number. */
const ipow = (c: number, k: number) => Math.pow(c, k);

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // 1 ─────────────────────────────────────────────────────────────────────────
  {
    id: "indices-surds.index-laws",
    topicId: "indices-surds",
    title: "Simplify using the index laws",
    level: 1,
    guideRef: "index-laws",
    generate(rng, tier) {
      const v = rng.pick(LETTERS);
      const kind =
        tier === 1 ? rng.pick(["mul", "div"] as const) : tier === 2 ? rng.pick(["mul2", "pow", "powdiv"] as const) : rng.pick(["powdiv", "fracpow"] as const);

      if (kind === "mul" || kind === "mul2") {
        const two = kind === "mul2";
        const c1 = rng.int(2, 9), c2 = rng.int(2, 9);
        const p1 = rng.int(2, 7), p2 = rng.int(2, 7);
        const r1 = two ? rng.int(1, 5) : 0, r2 = two ? rng.int(1, 5) : 0;
        const A: Mono = { c: c1, e: [p1, r1] }, B: Mono = { c: c2, e: [p2, r2] };
        const ans: Mono = { c: c1 * c2, e: [p1 + p2, r1 + r2] };
        const traps: Trap[] = [];
        if (p1 * p2 !== p1 + p2) traps.push({ spec: { type: "expression", expr: monoA({ c: c1 * c2, e: [p1 * p2, r1 * r2 || r1 + r2] }, v) }, feedback: "When you multiply powers of the same letter you ADD the indices — you multiplied them." });
        traps.push({ spec: { type: "expression", expr: monoA({ c: c1 + c2, e: ans.e }, v) }, feedback: "The numbers in front are multiplied, not added." });
        return {
          prompt: `${rng.pick(["Simplify", "Simplify fully"])} {{${monoM(A, v)} * ${monoM(B, v)}}}.`,
          answer: monoSpec(ans, v),
          solution: [
            `Multiply the numbers: ${c1} × ${c2} = ${c1 * c2}.`,
            `Add the indices of ${v[0]}: {{${v[0]}^${p1} * ${v[0]}^${p2} = ${v[0]}^${p1 + p2}}}.` + (two ? ` Same for ${v[1]}: ${r1} + ${r2} = ${r1 + r2}.` : ""),
            `Answer: {{${monoM(ans, v)}}}`,
          ],
          hint: "Multiply the numbers; for the letters, add the indices.",
          traps,
        };
      }

      if (kind === "div") {
        const c2 = rng.int(2, 8), k = rng.int(2, 7);
        const p2 = rng.int(2, 6), d = rng.int(1, 6);
        const p1 = p2 + d;
        const A: Mono = { c: c2 * k, e: [p1, 0] }, B: Mono = { c: c2, e: [p2, 0] };
        const ans: Mono = { c: k, e: [d, 0] };
        const traps: Trap[] = [];
        if (p1 % p2 === 0 && p1 / p2 !== d) traps.push({ spec: { type: "expression", expr: monoA({ c: k, e: [p1 / p2, 0] }, v) }, feedback: "Dividing powers of the same letter means SUBTRACTING the indices, not dividing them." });
        return {
          prompt: rng.bool() ? `Simplify {{${monoM(A, v)}}} ÷ {{${monoM(B, v)}}}.` : `Simplify {{(${monoM(A, v)})/(${monoM(B, v)})}}.`,
          answer: monoSpec(ans, v),
          solution: [`Divide the numbers: ${c2 * k} ÷ ${c2} = ${k}.`, `Subtract the indices: {{${v[0]}^${p1} / ${v[0]}^${p2} = ${v[0]}^${d}}}.`, `Answer: {{${monoM(ans, v)}}}`],
          hint: "Divide the numbers; for the letters, subtract the indices.",
          traps,
        };
      }

      if (kind === "pow") {
        const c = rng.int(2, 5), n = rng.int(2, c <= 3 ? 4 : 3);
        const p = rng.int(1, 5), r = rng.int(1, 4);
        const A: Mono = { c, e: [p, r] };
        const ans: Mono = { c: ipow(c, n), e: [p * n, r * n] };
        const traps: Trap[] = [{ spec: { type: "expression", expr: monoA({ c, e: [p * n, r * n] }, v) }, feedback: `The power applies to the number too: ${c} must be raised to the power ${n}.` }];
        if (c * n !== ipow(c, n)) traps.push({ spec: { type: "expression", expr: monoA({ c: c * n, e: [p * n, r * n] }, v) }, feedback: `{{${c}^${n}}} means ${Array(n).fill(c).join(" × ")}, not ${c} × ${n}.` });
        return {
          prompt: `Simplify {{(${monoM(A, v)})^${n}}}.`,
          answer: monoSpec(ans, v),
          solution: [
            `Everything inside the bracket is raised to the power ${n}.`,
            `Number: {{${c}^${n} = ${ipow(c, n)}}}. Letters: multiply each index by ${n}: ${p} × ${n} = ${p * n} and ${r} × ${n} = ${r * n}.`,
            `Answer: {{${monoM(ans, v)}}}`,
          ],
          hint: "Power of a power: multiply the indices — and don't forget to raise the number.",
          traps,
        };
      }

      if (kind === "powdiv") {
        return attempt(() => {
          const c = rng.int(2, tier === 3 ? 5 : 4), n = rng.int(2, 3);
          const p = rng.int(1, 4), r = rng.int(1, 3);
          const cn = ipow(c, n);
          const divs = [];
          for (let d = 2; d <= cn; d++) if (cn % d === 0) divs.push(d);
          const d = rng.pick(divs);
          const s = rng.int(1, p * n - 1), t = rng.int(1, r * n);
          if (p * n - s < 1) return null;
          const A: Mono = { c, e: [p, r] }, B: Mono = { c: d, e: [s, t] };
          const ans: Mono = { c: cn / d, e: [p * n - s, r * n - t] };
          if (ans.e[1] === 0 && tier === 2) return null;
          const traps: Trap[] = [];
          if ((c * n) % d === 0 && (c * n) / d !== ans.c) traps.push({ spec: { type: "expression", expr: monoA({ c: (c * n) / d, e: ans.e }, v) }, feedback: `{{${c}^${n}}} is ${cn}, not ${c} × ${n}.` });
          if ((p + n - s) >= 1 && (p + n - s) !== ans.e[0]) traps.push({ spec: { type: "expression", expr: monoA({ c: ans.c, e: [p + n - s, Math.max(0, r + n - t)] }, v) }, feedback: "For a power of a power, MULTIPLY the indices (you added them)." });
          return {
            prompt: `Simplify fully {{(${monoM(A, v)})^${n}}} ÷ {{${monoM(B, v)}}}.`,
            answer: monoSpec(ans, v),
            solution: [
              `First the bracket: {{(${monoM(A, v)})^${n} = ${monoM({ c: cn, e: [p * n, r * n] }, v)}}}.`,
              `Then divide: ${cn} ÷ ${d} = ${cn / d}; ${v[0]}: ${p * n} − ${s} = ${p * n - s}; ${v[1]}: ${r * n} − ${t} = ${r * n - t}.`,
              `Answer: {{${monoM(ans, v)}}}`,
            ],
            hint: "Deal with the bracket first (raise everything inside), then divide term by term.",
            traps,
          };
        }, null as never);
      }

      // fracpow: (k^n x^(an) y^(bn))^(m/n) = k^m x^(am) y^(bm)
      return attempt(() => {
        const n = rng.pick([2, 2, 3]);
        const m = rng.pick(n === 2 ? [1, 3] : [1, 2]);
        const k = rng.int(2, n === 2 ? 6 : 3);
        const a = rng.int(1, 4), b = rng.int(1, 3);
        const inside: Mono = { c: ipow(k, n), e: [a * n, b * n] };
        const ans: Mono = { c: ipow(k, m), e: [a * m, b * m] };
        if (ans.c > 250) return null;
        const traps: Trap[] = [];
        if (m === 1) traps.push({ spec: { type: "expression", expr: monoA({ c: ipow(k, n), e: [a, b] }, v) }, feedback: `The power {{1/${n}}} applies to the number as well — take the ${n === 2 ? "square" : "cube"} root of ${ipow(k, n)}.` });
        else traps.push({ spec: { type: "expression", expr: monoA({ c: k, e: ans.e }, v) }, feedback: `{{${ipow(k, n)}^(${m}/${n})}} means root first (${k}), THEN raise to the power ${m}.` });
        return {
          prompt: `Simplify {{(${monoM(inside, v)})^(${m}/${n})}}.`,
          answer: monoSpec(ans, v),
          solution: [
            `Apply the power {{${m}/${n}}} to every factor.`,
            `Number: {{${ipow(k, n)}^(${m}/${n}) = (${n === 2 ? `sqrt(${ipow(k, n)})` : `cbrt(${ipow(k, n)})`})^${m} = ${k}^${m} = ${ans.c}}}.`,
            `Letters: multiply each index by {{${m}/${n}}}: ${a * n} → ${a * m}, ${b * n} → ${b * m}.`,
            `Answer: {{${monoM(ans, v)}}}`,
          ],
          hint: "A fractional power {{m/n}}: n-th root, then the m-th power — for the number AND the letters.",
          traps,
        };
      }, null as never);
    },
  },

  // 2 ─────────────────────────────────────────────────────────────────────────
  {
    id: "indices-surds.simplify-surd",
    topicId: "indices-surds",
    title: "Simplify a surd",
    level: 1,
    guideRef: "simplifying-surds",
    generate(rng, tier) {
      const s = rng.pick(tier === 1 ? SQUAREFREE_EASY : SQUAREFREE);
      const k = rng.int(2, tier === 1 ? 5 : tier === 2 ? 10 : 6);
      const n = k * k * s;
      const outer = tier === 3 ? rng.int(2, 5) : 1;
      const coef = outer * k;
      const lhs = outer === 1 ? `sqrt(${n})` : `${outer}sqrt(${n})`;
      const prompt =
        tier === 3 || rng.bool(0.6)
          ? `${rng.pick(["Simplify", "Simplify fully", "Write in its simplest surd form:"])} {{${lhs}}}.`
          : `Write {{${lhs}}} in the form {{k sqrt(${s})}}, where k is an integer.`;
      const traps: Trap[] = [{ spec: { type: "expression", expr: lhs }, feedback: "That's equal in value, but not fully simplified — take out the LARGEST square factor." }];
      traps.push({ spec: { type: "expression", expr: `${outer * k * k}sqrt(${s})` }, feedback: `{{sqrt(${k * k}) = ${k}}}, so ${k} comes out of the root — not ${k * k}.` });
      return {
        prompt,
        answer: surdAns(0, coef, s),
        solution: [
          `Find the largest square factor of ${n}: ${n} = ${k * k} × ${s}.`,
          `{{sqrt(${n}) = sqrt(${k * k}) * sqrt(${s}) = ${k}sqrt(${s})}}.`,
          ...(outer > 1 ? [`Multiply by ${outer}: {{${outer} * ${k}sqrt(${s}) = ${coef}sqrt(${s})}}.`] : []),
        ],
        hint: `Look for a square number (4, 9, 16, 25, 36, …) that divides ${n}.`,
        traps,
      };
    },
  },

  // 3 ─────────────────────────────────────────────────────────────────────────
  {
    id: "indices-surds.standard-form",
    topicId: "indices-surds",
    title: "Convert and calculate in standard form",
    level: 1,
    guideRef: "standard-form",
    generate(rng, tier) {
      const kind = tier === 1 ? rng.pick(["to", "from"] as const) : tier === 2 ? rng.pick(["mul", "div", "to"] as const) : rng.pick(["ctxMul", "ctxDiv", "div"] as const);

      if (kind === "to" || kind === "from") {
        const I = rng.pick([twoSig(rng), rng.int(101, 999)]);
        if (I % 10 === 0) return drills[2].generate(rng, tier);
        const small = rng.bool();
        const digits = String(I).length;
        const exp = small ? -rng.int(2, tier === 1 ? 5 : 7) : rng.int(3, tier === 1 ? 7 : 9);
        const b: Big = { I, e: exp - (digits - 1) };
        const { mant, value } = sf(b);
        if (kind === "to") {
          const flipped = clean(mant * Math.pow(10, -exp));
          return {
            prompt: `Write ${ordinary(b)} in standard form.`,
            answer: sfAns(b),
            solution: [
              `Place the decimal point after the first non-zero digit: ${num(mant)}.`,
              small
                ? `The point moves ${-exp} places to the right to get ${num(mant)}, so the power is ${num(exp)} (a small number has a negative power).`
                : `The point moves ${exp} places to the left to get ${num(mant)}, so the power is ${exp}.`,
              `${ordinary(b)} = {{${sfM(b)}}}`,
            ],
            hint: "Standard form is A × 10ⁿ with 1 ≤ A < 10. Count how far the decimal point moves.",
            traps: [{ spec: { type: "number", value: flipped, standardForm: true }, feedback: small ? "A number less than 1 needs a NEGATIVE power of 10." : "A large number needs a POSITIVE power of 10." }],
          };
        }
        const wrong = clean(mant * Math.pow(10, exp + (small ? 1 : -1)));
        return {
          prompt: `Write {{${sfM(b)}}} as an ordinary number.`,
          answer: { type: "number", value, display: ordinary(b) },
          solution: [
            exp < 0 ? `A power of ${num(exp)} means move the decimal point ${-exp} places to the left.` : `A power of ${exp} means move the decimal point ${exp} places to the right.`,
            `{{${sfM(b)}}} = ${ordinary(b)}`,
          ],
          hint: exp < 0 ? "A negative power gives a number smaller than 1." : "Multiply by 10 the number of times shown by the power.",
          traps: numTraps(value, [[wrong, `Count again: the point moves exactly ${Math.abs(exp)} places.`]]),
        };
      }

      if (kind === "mul") {
        const A: Big = { I: twoSig(rng), e: rng.int(-8, 8) - 1 };
        const B: Big = { I: twoSig(rng), e: rng.int(-8, 8) - 1 };
        const P: Big = { I: A.I * B.I, e: A.e + B.e };
        const a = sf(A), bb = sf(B), p = sf(P);
        const rawM = clean(a.mant * bb.mant);
        const traps: Trap[] = [];
        if (rawM >= 10) traps.push({ spec: { type: "number", value: clean(p.mant * Math.pow(10, a.exp + bb.exp)), standardForm: true }, feedback: `${num(rawM)} is not between 1 and 10 — when you rewrite it as {{${num(p.mant)} * 10}}, the power goes up by 1.` });
        return {
          prompt: `Work out {{(${sfM(A)}) * (${sfM(B)})}}. Give your answer in standard form.`,
          answer: sfAns(P),
          solution: [
            `Multiply the numbers: ${num(a.mant)} × ${num(bb.mant)} = ${num(rawM)}.`,
            `Add the powers: ${num(a.exp)} + ${num(bb.exp)} = ${num(a.exp + bb.exp)}, giving {{${num(rawM)} * 10${ex(a.exp + bb.exp)}}}.`,
            rawM >= 10 ? `Adjust so the number is between 1 and 10: {{${sfM(P)}}}.` : `This is already in standard form: {{${sfM(P)}}}.`,
          ],
          hint: "Multiply the front numbers, add the powers of 10, then check the front number is between 1 and 10.",
          traps,
        };
      }

      // Division (bare or in context): answer C = A ÷ B, with A = B × C built exactly.
      const C: Big = { I: twoSig(rng), e: rng.int(-6, 7) - 1 };
      const Bd: Big = { I: rng.pick([2, 3, 4, 5, 6, 8, 12, 15, 16, 25]), e: rng.int(-6, 6) };
      const A: Big = { I: C.I * Bd.I, e: C.e + Bd.e };

      if (kind === "ctxMul") {
        type Ctx = { make(): { each: Big; count: Big; text: string; unit: string } };
        const ctxs: Ctx[] = [
          { make: () => { const each: Big = { I: twoSig(rng), e: -rng.int(6, 9) - 1 }; const count: Big = { I: twoSig(rng), e: rng.int(4, 7) - 1 }; return { each, count, text: `A pollen grain has a mass of {{${sfM(each)}}} g. A sample contains {{${sfM(count)}}} pollen grains. Work out the total mass of the sample in grams.`, unit: "g" }; } },
          { make: () => { const each: Big = { I: twoSig(rng), e: rng.int(3, 5) - 1 }; const count: Big = { I: twoSig(rng), e: rng.int(1, 3) - 1 }; return { each, count, text: `A space probe travels at {{${sfM(each)}}} km per hour for {{${sfM(count)}}} hours. Work out the distance it travels in km.`, unit: "km" }; } },
          { make: () => { const each: Big = { I: twoSig(rng), e: rng.int(5, 7) - 1 }; const count: Big = { I: twoSig(rng), e: rng.int(2, 4) - 1 }; return { each, count, text: `Each photo on a phone uses {{${sfM(each)}}} bytes. The phone stores {{${sfM(count)}}} photos. Work out the total number of bytes used.`, unit: "bytes" }; } },
          { make: () => { const each: Big = { I: twoSig(rng), e: -rng.int(5, 7) - 1 }; const count: Big = { I: twoSig(rng), e: rng.int(3, 6) - 1 }; return { each, count, text: `A cell is {{${sfM(each)}}} m long. {{${sfM(count)}}} of these cells are placed end to end. Work out the total length in metres.`, unit: "m" }; } },
        ];
        const { each, count, text } = rng.pick(ctxs).make();
        const P: Big = { I: each.I * count.I, e: each.e + count.e };
        const a = sf(each), c = sf(count);
        return {
          prompt: `${text} Give your answer in standard form.`,
          answer: sfAns(P),
          solution: [
            `Total = {{(${sfM(each)}) * (${sfM(count)})}}.`,
            `${num(a.mant)} × ${num(c.mant)} = ${num(clean(a.mant * c.mant))} and the powers add: ${num(a.exp)} + ${num(c.exp)} = ${num(a.exp + c.exp)}.`,
            `In standard form: {{${sfM(P)}}}.`,
          ],
          hint: "Total = amount for one × how many. Multiply the numbers and add the powers.",
        };
      }

      const a = sf(A), b = sf(Bd), c = sf(C);
      const traps: Trap[] = [];
      if (b.exp !== 0) traps.push({ spec: { type: "number", value: clean(c.mant * Math.pow(10, a.exp + b.exp - (a.exp - b.exp - c.exp))), standardForm: true }, feedback: "When you divide, SUBTRACT the powers of 10 (you added them)." });
      const text =
        kind === "ctxDiv"
          ? rng.pick([
              `A hard drive can store {{${sfM(A)}}} bytes. A film uses {{${sfM(Bd)}}} bytes. How many films can the hard drive store?`,
              `A country has a total income of \${{${sfM(A)}}} shared equally between {{${sfM(Bd)}}} people. How many dollars is this per person?`,
              `A rope of length {{${sfM(A)}}} m is cut into pieces each {{${sfM(Bd)}}} m long. How many pieces are there?`,
            ])
          : `Work out {{(${sfM(A)}) / (${sfM(Bd)})}}.`;
      return {
        prompt: `${text} Give your answer in standard form.`,
        answer: sfAns(C),
        solution: [
          `Divide the numbers: ${num(a.mant)} ÷ ${num(b.mant)} = ${num(clean(a.mant / b.mant))}.`,
          `Subtract the powers: ${num(a.exp)} − ${b.exp < 0 ? `(${num(b.exp)})` : b.exp} = ${num(a.exp - b.exp)}.`,
          `Write in standard form: {{${sfM(C)}}}.`,
        ],
        hint: "Divide the front numbers, subtract the powers of 10, then make sure the front number is between 1 and 10.",
        traps,
      };
    },
  },

  // 4 ─────────────────────────────────────────────────────────────────────────
  {
    id: "indices-surds.evaluate-indices",
    topicId: "indices-surds",
    title: "Evaluate negative and fractional indices",
    level: 2,
    guideRef: "negative-fractional-indices",
    generate(rng, tier) {
      const kind = tier === 1 ? rng.pick(["neg", "root"] as const) : tier === 2 ? rng.pick(["fracpos", "fracneg", "neg"] as const) : rng.pick(["fracbase", "fracneg"] as const);
      const tail = " Give your answer as a whole number or a fraction in its simplest form.";

      if (kind === "neg") {
        return attempt(() => {
          const a = rng.int(2, tier === 1 ? 10 : 12), n = rng.int(1, 3);
          const val = ipow(a, n);
          if (val > 1000 || (n === 1 && tier > 1)) return null;
          return {
            prompt: `Work out the value of {{${a}^(-${n})}}.${tail}`,
            answer: ratAns(1, val),
            solution: [`A negative index means the reciprocal: {{${a}^(-${n}) = 1/${a}^${n}}}.`, `{{${a}^${n} = ${val}}}, so the answer is {{1/${val}}}.`],
            hint: "A negative index does NOT make the answer negative — it means 'one over'.",
            traps: numTraps(null, [[-val, "A negative index means a reciprocal, not a negative number."], [-a * n, "Not a multiplication: {{a^(-n) = 1/a^n}}."]]),
          };
        }, null as never);
      }

      if (kind === "root") {
        const n = rng.pick([2, 2, 3, 3, 4, 5]);
        const r = rng.int(2, n === 2 ? 15 : n === 3 ? 6 : 3);
        const a = ipow(r, n);
        const name = n === 2 ? "square" : n === 3 ? "cube" : `${n}th`;
        return {
          prompt: `Work out {{${a}^(1/${n})}}.`,
          answer: { type: "number", value: r },
          solution: [`A power of {{1/${n}}} means the ${name} root.`, `{{${r}^${n} = ${a}}}, so {{${a}^(1/${n}) = ${r}}}.`],
          hint: `Which number, raised to the power ${n}, gives ${a}?`,
          traps: numTraps(r, [[a / n, `A power of {{1/${n}}} is a ${name} root, not dividing by ${n}.`]].filter(([v]) => Number.isInteger(v)) as Array<[number, string]>),
        };
      }

      if (kind === "fracpos" || kind === "fracneg") {
        return attempt(() => {
          const n = rng.pick([2, 3, 3, 4, 5]);
          const m = rng.int(2, 5);
          if (gcd(m, n) !== 1) return null;
          const r = rng.int(2, n === 2 ? 10 : n === 3 ? 5 : 3);
          const a = ipow(r, n), val = ipow(r, m);
          if (val > 1100 || a > 1100) return null;
          const neg = kind === "fracneg";
          return {
            prompt: `Work out {{${a}^(${neg ? "-" : ""}${m}/${n})}}.${neg ? tail : ""}`,
            answer: neg ? ratAns(1, val) : { type: "number", value: val },
            solution: [
              `The denominator ${n} means the ${n === 2 ? "square" : n === 3 ? "cube" : `${n}th`} root: {{${a}^(1/${n}) = ${r}}}.`,
              `The numerator ${m} means the power ${m}: {{${r}^${m} = ${val}}}.`,
              ...(neg ? [`The minus sign means the reciprocal: {{1/${val}}}.`] : []),
            ],
            hint: "Root first (the bottom of the fraction), then the power (the top) — then deal with any minus sign.",
            traps: neg
              ? numTraps(null, [[val, "You forgot the minus sign in the index — it means take the reciprocal."], [-val, "A negative index means a reciprocal, not a negative answer."]])
              : numTraps(val, (Number.isInteger((a * m) / n) ? [[(a * m) / n, `A fractional index is not 'multiply by {{${m}/${n}}}' — it's a root and a power.`]] : []) as Array<[number, string]>),
          };
        }, null as never);
      }

      // fracbase: (p^n / q^n)^(±m/n), possibly written as a mixed number
      return attempt(() => {
        const n = rng.pick([2, 2, 3]);
        const m = rng.pick(n === 2 ? [1, 3] : [1, 2]);
        const p = rng.int(1, n === 2 ? 7 : 4), q = rng.int(2, n === 2 ? 7 : 5);
        if (p === q || gcd(p, q) !== 1) return null;
        const P = ipow(p, n), Q = ipow(q, n);
        const neg = rng.bool(0.7);
        const [an, ad] = neg ? [ipow(q, m), ipow(p, m)] : [ipow(p, m), ipow(q, m)];
        if (an === ad || an > 400 || ad > 400) return null;
        const baseM = P > Q && rng.bool() ? frac(P, Q, { mixed: true }).slice(2, -2) : `${P}/${Q}`;
        return {
          prompt: `Work out {{(${baseM})^(${neg ? "-" : ""}${m}/${n})}}.${tail}`,
          answer: ratAns(an, ad),
          solution: [
            ...(baseM.includes(" ") ? [`Write the mixed number as an improper fraction: {{${P}/${Q}}}.`] : []),
            ...(neg ? [`The minus sign flips the fraction: {{(${Q}/${P})^(${m}/${n})}}.`] : []),
            `${n === 2 ? "Square" : "Cube"} root top and bottom: {{${neg ? `${q}/${p}` : `${p}/${q}`}}}.`,
            ...(m > 1 ? [`Raise to the power ${m}: {{${ratM(an, ad).slice(2, -2)}}}.`] : []),
            `Answer: ${ratM(an, ad)}`,
          ],
          hint: "Negative index → flip the fraction. Denominator of the index → root. Numerator → power.",
          traps: [{ spec: ratAns(ad, an), feedback: neg ? "You need to flip the fraction because of the negative index." : "Don't flip the fraction — the index is positive." }],
        };
      }, null as never);
    },
  },

  // 5 ─────────────────────────────────────────────────────────────────────────
  {
    id: "indices-surds.index-equations",
    topicId: "indices-surds",
    title: "Solve an equation by matching the base",
    level: 2,
    guideRef: "index-equations",
    generate(rng, tier) {
      const tail = " Give x as a whole number or a fraction in its simplest form.";
      if (tier === 1) {
        return attempt(() => {
          const B = rng.pick(BASES);
          const c = B.c, m = rng.int(1, Math.min(3, B.max));
          const kind = rng.pick(["pos", "pos", "recip", "root"] as const);
          let rhsM: string, k: number, kd = 1;
          if (kind === "root") {
            k = 1;
            kd = rng.pick([2, 3]);
            rhsM = kd === 2 ? `sqrt(${c})` : `cbrt(${c})`;
          } else {
            k = rng.int(1, B.max);
            if (ipow(c, k) > 300) return null;
            rhsM = kind === "recip" ? `1/${ipow(c, k)}` : String(ipow(c, k));
            if (kind === "recip") k = -k;
          }
          if (m === k && kd === 1) return null;
          if (m === 1 && kind === "pos") return null;
          const [xn, xd] = simplify(k, m * kd);
          const P = ipow(c, m);
          const traps: Trap[] = [];
          if (kind === "pos" && ipow(c, k) % P === 0 && ipow(c, k) / P !== xn / xd) traps.push({ spec: { type: "number", value: ipow(c, k) / P }, feedback: `You can't divide ${ipow(c, k)} by ${P} — write both sides as powers of ${c}.` });
          return {
            prompt: `Solve {{${P}^x = ${rhsM}}}.${tail}`,
            answer: ratAns(xn, xd, true),
            solution: [
              `Write both sides as powers of ${c}: {{${P}^x = ${m === 1 ? `${c}^x` : `(${c}^${m})^x = ${c}^(${m}x)`}}} and {{${rhsM} = ${c}${ex(kd === 1 ? k : `1/${kd}`)}}}.`,
              `Equate the indices: {{${m === 1 ? "" : m}x = ${kd === 1 ? k : `1/${kd}`}}}.`,
              `x = ${ratM(xn, xd)}`,
            ],
            hint: `Write ${P} and ${rhsM.startsWith("1/") ? `the fraction` : rhsM.startsWith("sqrt") || rhsM.startsWith("cbrt") ? "the root" : rhsM} as powers of ${c}.`,
            traps,
          };
        }, null as never);
      }

      return attempt(() => {
        const B = rng.pick(BASES.slice(0, 2));
        const c = B.c;
        const m = rng.int(1, B.max - 1), n = rng.int(1, B.max - 1);
        if (m === n) return null;
        const P = ipow(c, m), Q = ipow(c, n);
        if (P > 81 || Q > 81) return null;
        const a = rng.int(1, 3), b = rng.int(-3, 3), d = rng.int(1, 2), e = rng.nonZero(-3, 3);
        if (tier === 2) {
          // P^(ax+b) = Q^(dx+e) → m(ax+b) = n(dx+e)
          const den = m * a - n * d, nu = n * e - m * b;
          if (den === 0 || nu === 0) return null;
          const [xn, xd] = simplify(nu, den);
          if (Math.abs(xn / xd) > 12 || xd > 9) return null;
          const traps: Trap[] = [];
          if (a !== d) {
            const [tn, td] = simplify(e - b, a - d);
            if (tn * xd !== xn * td) traps.push({ spec: ratAns(tn, td, true), feedback: `The bases ${P} and ${Q} are different, so you can't equate those indices yet — first write both as powers of ${c}.` });
          }
          const L = lin(a, b), R = lin(d, e);
          return {
            prompt: `Solve {{${P}${ex(L)} = ${Q}${ex(R)}}}.${tail}`,
            answer: ratAns(xn, xd, true),
            solution: [
              `Write both bases as powers of ${c}: ${P} = {{${c}^${m}}} and ${Q} = {{${c}^${n}}}.`,
              `So {{${c}^(${m === 1 ? L : `${m}(${L})`}) = ${c}^(${n === 1 ? R : `${n}(${R})`})}}.`,
              `Equate the indices: {{${poly([[m * a, "x"], [m * b, ""]])} = ${poly([[n * d, "x"], [n * e, ""]])}}}, so {{${poly([[den, "x"]])} = ${nu}}}.`,
              `x = ${ratM(xn, xd)}`,
            ],
            hint: `Both ${P} and ${Q} are powers of ${c}.`,
            traps,
          };
        }
        // tier 3: P^(ax+b) × Q^x = R or ÷, R a power or reciprocal power of c
        const op = rng.pick(["*", "/"] as const);
        const s = op === "*" ? 1 : -1;
        const k = rng.nonZero(-4, 5);
        if (Math.abs(k) > B.max + 1 || ipow(c, Math.abs(k)) > 300) return null;
        const den = m * a + s * n, nu = k - m * b;
        if (den === 0 || nu === 0) return null;
        const [xn, xd] = simplify(nu, den);
        if (Math.abs(xn / xd) > 12 || xd > 9) return null;
        const rhs = k > 0 ? String(ipow(c, k)) : `1/${ipow(c, -k)}`;
        const L = lin(a, b);
        const lhs = op === "*" ? `${P}${ex(L)} * ${Q}^x` : `(${P}${ex(L)})/(${Q}^x)`;
        return {
          prompt: `Solve {{${lhs} = ${rhs}}}.${tail}`,
          answer: ratAns(xn, xd, true),
          solution: [
            `Write everything as a power of ${c}: {{${c}^(${m === 1 ? L : `${m}(${L})`}) ${op === "*" ? "*" : "/"} ${c}^(${n === 1 ? "x" : `${n}x`}) = ${c}${ex(k)}}}.`,
            `${op === "*" ? "Multiplying adds" : "Dividing subtracts"} indices: {{${poly([[m * a, "x"], [m * b, ""]])} ${op === "*" ? "+" : "-"} ${n === 1 ? "x" : `${n}x`} = ${k}}}.`,
            `So {{${poly([[den, "x"]])} = ${nu}}}, giving x = ${ratM(xn, xd)}.`,
          ],
          hint: `Turn every number into a power of ${c}, combine the left side into ONE power, then equate indices.`,
        };
      }, null as never);
    },
  },

  // 6 ─────────────────────────────────────────────────────────────────────────
  {
    id: "indices-surds.surd-arithmetic",
    topicId: "indices-surds",
    title: "Add, multiply and divide surds",
    level: 2,
    guideRef: "simplifying-surds",
    generate(rng, tier) {
      const kind = tier === 1 ? rng.pick(["collect2", "mul"] as const) : tier === 2 ? rng.pick(["collect3", "mul", "div"] as const) : rng.pick(["collect3", "mulc", "divc"] as const);

      if (kind === "collect2" || kind === "collect3") {
        return attempt(() => {
          const s = rng.pick(tier === 1 ? [2, 3, 5] : SQUAREFREE.slice(0, 7));
          const cnt = kind === "collect2" ? 2 : 3;
          const terms: Array<{ sign: number; c: number; k: number }> = [];
          for (let i = 0; i < cnt; i++) {
            const k = rng.int(1, tier === 1 ? 5 : 6);
            const c = tier === 3 ? rng.int(1, 3) : 1;
            const sign = i === 0 ? 1 : rng.bool(0.6) ? 1 : -1;
            terms.push({ sign, c, k });
          }
          if (terms.filter((t) => t.k > 1).length < cnt - 1) return null;
          if (new Set(terms.map((t) => t.k * t.k * s)).size < cnt) return null;
          const total = terms.reduce((acc, t) => acc + t.sign * t.c * t.k, 0);
          if (total === 0) return null;
          const tm = (t: { c: number; k: number }) => `${t.c === 1 ? "" : t.c}sqrt(${t.k * t.k * s})`;
          const expr = terms.map((t, i) => (i === 0 ? tm(t) : `${t.sign < 0 ? "-" : "+"} ${tm(t)}`)).join(" ");
          const simp = terms.map((t, i) => {
            const v = sm(t.c * t.k, s);
            return i === 0 ? v : `${t.sign < 0 ? "-" : "+"} ${v}`;
          }).join(" ");
          const rootSum = terms.reduce((acc, t) => acc + t.sign * t.c * t.c * t.k * t.k * s, 0);
          const traps: Trap[] = [];
          if (rootSum > 0 && Math.abs(Math.sqrt(rootSum) - total * Math.sqrt(s)) > 1e-6) traps.push({ spec: { type: "expression", expr: `sqrt(${rootSum})` }, feedback: "You can't add or subtract the numbers under the root signs. Simplify each surd first, then collect like surds." });
          return {
            prompt: `Simplify {{${expr}}}. Give your answer in the form {{k sqrt(${s})}}.`,
            answer: surdAns(0, total, s),
            solution: [
              `Simplify each surd so they all contain {{sqrt(${s})}}: {{${simp}}}.`,
              `Collect like surds: {{${sm(total, s)}}}.`,
            ],
            hint: `Write each surd as a multiple of {{sqrt(${s})}}.`,
            traps,
          };
        }, null as never);
      }

      if (kind === "mul" || kind === "mulc") {
        return attempt(() => {
          const s1 = rng.pick(SQUAREFREE.slice(0, 8)), s2 = rng.pick(SQUAREFREE.slice(0, 8));
          const k1 = rng.int(1, 3), k2 = rng.int(1, 3);
          const a = k1 * k1 * s1, b = k2 * k2 * s2;
          if (a === b || a > 150 || b > 150) return null;
          const p = kind === "mulc" ? rng.int(2, 5) : 1, q = kind === "mulc" ? rng.int(2, 5) : 1;
          const [k, s] = splitSquare(a * b);
          if (k === 1 && kind === "mul" && tier === 1) return null;
          const coef = p * q * k;
          const traps: Trap[] = [];
          if (k > 1) traps.push({ spec: { type: "expression", expr: `${p * q}sqrt(${a * b})` }, feedback: `Right value — now simplify {{sqrt(${a * b})}} (it has a square factor).` });
          traps.push({ spec: { type: "expression", expr: `${p * q === 1 ? "" : p * q}sqrt(${a + b})` }, feedback: "{{sqrt(a) * sqrt(b) = sqrt(ab)}} — multiply under the root, don't add." });
          const term = (c: number, n: number) => (c === 1 ? `sqrt(${n})` : `${c}sqrt(${n})`);
          return {
            prompt: `Simplify {{${term(p, a)} * ${term(q, b)}}}.${s === 1 ? "" : ` Give your answer in the form {{k sqrt(${s})}}.`}`,
            answer: surdAns(0, coef, s) as AnswerSpec,
            solution: [
              ...(p * q > 1 ? [`Multiply the numbers outside: ${p} × ${q} = ${p * q}.`] : []),
              `Multiply under the roots: {{sqrt(${a}) * sqrt(${b}) = sqrt(${a * b})}}.`,
              s === 1 ? `{{sqrt(${a * b}) = ${k}}}, so the answer is ${coef}.` : `{{sqrt(${a * b}) = sqrt(${k * k}) * sqrt(${s}) = ${sm(k, s)}}}${p * q > 1 ? `, so the answer is {{${p * q} * ${sm(k, s)} = ${sm(coef, s)}}}` : ""}.`,
            ],
            hint: "{{sqrt(a) * sqrt(b) = sqrt(ab)}}, then look for a square factor.",
            traps: s === 1 ? traps.filter((t) => t.spec.type === "expression" && !t.spec.expr.startsWith(`${p * q}sqrt(${a * b})`)) : traps,
          };
        }, null as never);
      }

      // div / divc: (p√a)/(q√b) with a = b × t
      return attempt(() => {
        const b = rng.pick(SQUAREFREE.slice(0, 8));
        const t = rng.pick([2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 18, 20]);
        const a = b * t;
        if (a > 300) return null;
        const q = kind === "divc" ? rng.int(2, 4) : 1;
        const r = kind === "divc" ? rng.int(1, 4) : 1;
        const p = q * r;
        const [k, s] = splitSquare(t);
        const coef = r * k;
        const top = p === 1 ? `sqrt(${a})` : `${p}sqrt(${a})`, bot = q === 1 ? `sqrt(${b})` : `${q}sqrt(${b})`;
        const traps: Trap[] = [];
        if (k > 1) traps.push({ spec: { type: "expression", expr: `${r}sqrt(${t})` }, feedback: `Right value — now simplify {{sqrt(${t})}}.` });
        return {
          prompt: rng.bool() ? `Simplify {{(${top})/(${bot})}}.` : `Simplify {{${top}}} ÷ {{${bot}}}.`,
          answer: surdAns(0, coef, s),
          solution: [
            ...(q > 1 ? [`Divide the numbers outside: ${p} ÷ ${q} = ${r}.`] : []),
            `Divide under the roots: {{sqrt(${a})/sqrt(${b}) = sqrt(${t})}}.`,
            s === 1 ? `{{sqrt(${t}) = ${k}}}, so the answer is ${coef}.` : k > 1 ? `{{sqrt(${t}) = ${sm(k, s)}}}, so the answer is {{${sm(coef, s)}}}.` : `Answer: {{${sm(coef, s)}}}.`,
          ],
          hint: "{{sqrt(a)/sqrt(b) = sqrt(a/b)}}.",
          traps,
        };
      }, null as never);
    },
  },

  // 7 ─────────────────────────────────────────────────────────────────────────
  {
    id: "indices-surds.expand-surd-brackets",
    topicId: "indices-surds",
    title: "Expand brackets containing surds",
    level: 2,
    guideRef: "surd-brackets",
    generate(rng, tier) {
      const kind = tier === 1 ? rng.pick(["prod1", "dots"] as const) : tier === 2 ? rng.pick(["prod", "square", "dots"] as const) : rng.pick(["prod", "square", "twoRoots"] as const);
      const formTail = (s: number) => ` Give your answer in the form {{a + b sqrt(${s})}}, where a and b are integers.`;

      if (kind === "dots") {
        return attempt(() => {
          const s = rng.pick(SQUAREFREE);
          const u = tier === 1 ? 1 : rng.int(1, 3);
          const a = rng.int(1, 9);
          const val = a * a - u * u * s;
          if (val === 0) return null;
          const su = sm(u, s);
          return {
            prompt: `Expand and simplify {{(${a} + ${su})(${a} - ${su})}}.`,
            answer: { type: "number", value: val },
            solution: [
              `This is the difference of two squares: {{(p + q)(p - q) = p^2 - q^2}}.`,
              `{{${a}^2 - (${su})^2 = ${a * a} - ${u * u * s}}} = ${num(val)}.`,
              "The surd terms cancel — that's why this pattern is used to rationalise denominators.",
            ],
            hint: "The middle terms cancel. What's left?",
            traps: numTraps(val, [[a * a + u * u * s, "The last term is (+surd) × (−surd), which is negative."], [a * a - u * s, `{{(${su})^2 = ${u * u * s}}} — square the number outside as well.`]]),
          };
        }, null as never);
      }

      if (kind === "square") {
        return attempt(() => {
          const s = rng.pick(SQUAREFREE);
          const a = rng.int(1, 7), u = rng.int(1, tier === 3 ? 4 : 3);
          const sg = rng.bool() ? 1 : -1;
          const A = a * a + u * u * s, Bc = sg * 2 * a * u;
          return {
            prompt: `Expand and simplify {{(${a} ${sg < 0 ? "-" : "+"} ${sm(u, s)})^2}}.${formTail(s)}`,
            answer: surdAns(A, Bc, s),
            solution: [
              `{{(${a} ${sg < 0 ? "-" : "+"} ${sm(u, s)})^2 = (${a} ${sg < 0 ? "-" : "+"} ${sm(u, s)})(${a} ${sg < 0 ? "-" : "+"} ${sm(u, s)})}}.`,
              `= {{${a * a} ${sg < 0 ? "-" : "+"} ${sm(a * u, s)} ${sg < 0 ? "-" : "+"} ${sm(a * u, s)} + ${u * u * s}}}`,
              `= {{${ss(A, Bc, s)}}}`,
            ],
            hint: "Write the bracket out twice and multiply every term by every term.",
            traps: [{ spec: { type: "number", value: a * a + u * u * s }, feedback: "{{(p + q)^2}} is not {{p^2 + q^2}} — you've missed the middle terms." }],
          };
        }, null as never);
      }

      if (kind === "twoRoots") {
        return attempt(() => {
          const p = rng.pick(SQUAREFREE), q = rng.pick(SQUAREFREE);
          if (p === q) return null;
          const [k, s] = splitSquare(p * q);
          const sg = rng.bool() ? 1 : -1;
          const A = p + q, Bc = sg * 2 * k;
          return {
            prompt: `Expand and simplify {{(sqrt(${p}) ${sg < 0 ? "-" : "+"} sqrt(${q}))^2}}.${formTail(s)}`,
            answer: surdAns(A, Bc, s),
            solution: [
              `= {{${p} ${sg < 0 ? "-" : "+"} 2sqrt(${p * q}) + ${q}}}`,
              k > 1 ? `{{sqrt(${p * q}) = ${sm(k, s)}}}, so this is {{${ss(A, Bc, s)}}}.` : `= {{${ss(A, Bc, s)}}}`,
            ],
            hint: "Use {{(p + q)^2 = p^2 + 2pq + q^2}} and remember {{(sqrt(p))^2 = p}}.",
            traps: [{ spec: { type: "number", value: A }, feedback: "You've missed the middle terms {{2 sqrt(p) sqrt(q)}}." }],
          };
        }, null as never);
      }

      // prod / prod1: (a + u√s)(b + v√s)
      return attempt(() => {
        const s = rng.pick(kind === "prod1" ? SQUAREFREE_EASY : SQUAREFREE);
        const a = rng.int(1, 8), b = rng.nonZero(-7, 8);
        const u = kind === "prod1" ? 1 : rng.int(1, 3), v = kind === "prod1" ? rng.pick([1, -1]) : rng.nonZero(-3, 3);
        const A = a * b + u * v * s, Bc = a * v + b * u;
        if (Bc === 0 || A === 0) return null;
        const first = `${a} + ${sm(u, s)}`;
        const second = b > 0 ? `${b} ${v < 0 ? "-" : "+"} ${sm(Math.abs(v), s)}` : `${sm(v, s)} - ${-b}`;
        const traps: Trap[] = [];
        const noLast = surdAns(a * b, Bc, s);
        traps.push({ spec: noLast, feedback: `Don't forget the last pair: {{${sm(u, s)} * ${sm(v, s)} = ${u * v * s}}}.` });
        return {
          prompt: `Expand and simplify {{(${first})(${second})}}.${formTail(s)}`,
          answer: surdAns(A, Bc, s),
          solution: [
            `Multiply every term: {{${a} * ${b < 0 ? `(${b})` : b}}} = ${num(a * b)}, {{${a} * ${v < 0 ? `(${sm(v, s)})` : sm(v, s)}}} = {{${sm(a * v, s)}}}, {{${sm(u, s)} * ${b < 0 ? `(${b})` : b}}} = {{${sm(u * b, s)}}}, {{${sm(u, s)} * ${v < 0 ? `(${sm(v, s)})` : sm(v, s)}}} = ${num(u * v * s)}.`,
            `Collect the whole numbers: ${num(a * b)} ${u * v * s < 0 ? "−" : "+"} ${Math.abs(u * v * s)} = ${num(A)}. Collect the surds: {{${sm(Bc, s)}}}.`,
            `Answer: {{${ss(A, Bc, s)}}}`,
          ],
          hint: `Multiply every term by every term (four products). {{sqrt(${s}) * sqrt(${s}) = ${s}}}.`,
          traps,
        };
      }, null as never);
    },
  },

  // 8 ─────────────────────────────────────────────────────────────────────────
  {
    id: "indices-surds.rationalise",
    topicId: "indices-surds",
    title: "Rationalise the denominator",
    level: 3,
    guideRef: "rationalising",
    generate(rng, tier) {
      const kind = tier === 1 ? "simple" : tier === 2 ? rng.pick(["simple2", "mixed"] as const) : rng.pick(["mixed", "mixed2"] as const);

      if (kind === "simple" || kind === "simple2") {
        return attempt(() => {
          const hard = kind === "simple2";
          const a = rng.pick(hard ? [2, 3, 5, 6, 7, 10, 11] : [2, 3, 5, 6, 7]);
          const m = hard && rng.bool() ? rng.int(2, 4) : 1;
          const kk = hard && m === 1 ? rng.int(2, 3) : 1; // √(kk²a) in the denominator
          const k = rng.int(1, 15);
          const denCoef = m * kk;
          const [N, D] = simplify(k, denCoef * a);
          if (N === 0) return null;
          const denM = m > 1 ? `${m}sqrt(${a})` : `sqrt(${kk * kk * a})`;
          const traps: Trap[] = [{ spec: { type: "expression", expr: `${k}/(${denCoef}sqrt(${a}))` }, feedback: "That has the right value, but the denominator still contains a surd — multiply top and bottom by the surd." }];
          const wrong = simplify(k, denCoef * a);
          if (!(wrong[0] === N && wrong[1] === D && D === 1)) traps.push({ spec: ratAns(wrong[0], wrong[1]), feedback: `You've lost the surd on top: {{${k} * sqrt(${a})}} stays as a surd.` });
          return {
            prompt: `Rationalise the denominator of {{${k}/${denM}}}. Give your answer in its simplest form.`,
            answer: fracSurdAns(N, D, a),
            solution: [
              ...(kk > 1 ? [`First simplify: {{sqrt(${kk * kk * a}) = ${kk}sqrt(${a})}}.`] : []),
              `Multiply top and bottom by {{sqrt(${a})}}: {{(${k}sqrt(${a}))/(${denCoef === 1 ? "" : denCoef + " * "}${a})}}.`,
              `= {{(${k}sqrt(${a}))/${denCoef * a}}}${N !== k || D !== denCoef * a ? ` = ${D === 1 ? `{{${sm(N, a)}}}` : `{{(${sm(N, a)})/${D}}}`}` : ""}`,
            ],
            hint: `Multiply the top and the bottom by {{sqrt(${a})}} — because {{sqrt(${a}) * sqrt(${a}) = ${a}}}.`,
            traps: traps.filter((t) => !(t.spec.type === "number" && D === 1)),
          };
        }, null as never);
      }

      if (kind === "mixed") {
        return attempt(() => {
          const b = rng.pick(SQUAREFREE);
          const a = rng.int(1, 6);
          const sg = rng.bool() ? 1 : -1; // denominator a + sg·√b
          const D = a * a - b;
          if (D === 0 || Math.abs(D) > (tier === 2 ? 6 : 12)) return null;
          const t = rng.int(1, 4) * (D < 0 && rng.bool(0.5) ? -1 : 1);
          const k = D * t; // numerator; result = t(a − sg√b)
          if (k <= 0) return null;
          const A = t * a, Bc = -sg * t;
          const denM = `${a} ${sg < 0 ? "-" : "+"} sqrt(${b})`, conjM = `${a} ${sg < 0 ? "+" : "-"} sqrt(${b})`;
          const traps: Trap[] = [{ spec: { type: "expression", expr: `${k}/(${a}${sg < 0 ? "-" : "+"}sqrt(${b}))` }, feedback: "That has the right value, but it isn't rationalised — multiply top and bottom by the conjugate." }];
          if (D !== 1) traps.push({ spec: surdAns(k * a, -sg * k, b), feedback: `You've multiplied the top correctly — now divide by the new denominator, {{${a}^2 - ${b}}} = ${D}.` });
          return {
            prompt: `Rationalise the denominator of {{${k}/(${denM})}}. Give your answer in the form {{p + q sqrt(${b})}}, where p and q are integers.`,
            answer: surdAns(A, Bc, b),
            solution: [
              `Multiply top and bottom by the conjugate {{${conjM}}}.`,
              `Bottom: {{(${denM})(${conjM}) = ${a * a} - ${b}}} = ${num(D)} (difference of two squares).`,
              `Top: {{${k}(${conjM})}}. Divide by ${num(D)}: {{${t === 1 ? "" : t === -1 ? "-" : t}(${conjM})}} = {{${ss(A, Bc, b)}}}.`,
            ],
            hint: "Multiply top and bottom by the same bracket with the opposite sign in the middle.",
            traps,
          };
        }, null as never);
      }

      // mixed2: (c + √b)/(a − √b) = (c + √b)(a + √b)/(a² − b)
      return attempt(() => {
        const b = rng.pick(SQUAREFREE);
        const a = rng.int(1, 6), c = rng.nonZero(-6, 6);
        const sg = rng.bool() ? 1 : -1; // denominator a + sg√b; conjugate a − sg√b
        const D = a * a - b;
        if (D === 0 || Math.abs(D) > 12) return null;
        // (c + √b)(a − sg√b) = ca − sg·b + (a − sg·c)√b
        const P = c * a - sg * b, Q = a - sg * c;
        if (P % D !== 0 || Q % D !== 0 || Q === 0) return null;
        const A = P / D, Bc = Q / D;
        if (A === 0) return null;
        const numM = c > 0 ? `${c} + sqrt(${b})` : `sqrt(${b}) - ${-c}`;
        const denM = `${a} ${sg < 0 ? "-" : "+"} sqrt(${b})`, conjM = `${a} ${sg < 0 ? "+" : "-"} sqrt(${b})`;
        return {
          prompt: `Show the working to write {{(${numM})/(${denM})}} in the form {{p + q sqrt(${b})}}, where p and q are integers. Give your answer.`,
          answer: surdAns(A, Bc, b),
          solution: [
            `Multiply top and bottom by {{${conjM}}}.`,
            `Bottom: {{${a * a} - ${b}}} = ${num(D)}.`,
            `Top: {{(${numM})(${conjM})}} = {{${ss(P, Q, b)}}}.`,
            `Divide by ${num(D)}: {{${ss(A, Bc, b)}}}.`,
          ],
          hint: "Multiply top and bottom by the conjugate of the denominator, then expand the top carefully (four terms).",
          traps: [{ spec: { type: "expression", expr: `(${c}+sqrt(${b}))/(${a}${sg < 0 ? "-" : "+"}sqrt(${b}))` }, feedback: "That has the right value, but it isn't rationalised — multiply top and bottom by the conjugate." }],
        };
      }, null as never);
    },
  },

  // 9 ─────────────────────────────────────────────────────────────────────────
  {
    id: "indices-surds.fractional-power-equations",
    topicId: "indices-surds",
    title: "Solve equations like x^(5/2) = 32",
    level: 3,
    guideRef: "harder-index-equations",
    generate(rng, tier) {
      return attempt(() => {
        const q = rng.pick([2, 3]);
        const pAbs = rng.int(2, 5);
        if (gcd(pAbs, q) !== 1) return null;
        const neg = tier >= 2 && rng.bool(0.5);
        const p = neg ? -pAbs : pAbs;
        // x = (t/u)^q, so x^(p/q) = (t/u)^p
        const t = rng.int(2, tier === 1 ? 5 : 6);
        const u = tier === 3 && rng.bool(0.6) ? rng.int(2, 5) : 1;
        if (gcd(t, u) !== 1) return null;
        const xn = ipow(t, q), xd = ipow(u, q);
        let Nn = ipow(t, pAbs), Nd = ipow(u, pAbs);
        if (neg) [Nn, Nd] = [Nd, Nn];
        if (Math.max(Nn, Nd) > 10000 || xn > 400) return null;
        const coef = tier >= 2 && u === 1 && rng.bool(0.4) ? rng.int(2, 5) : 1;
        const rhs = ratM(coef * Nn, Nd).slice(2, -2);
        const lhs = `${coef === 1 ? "" : coef}x^(${p}/${q})`;
        const traps: Trap[] = [];
        const nVal = Nn / Nd;
        const wrongPow = Math.pow(nVal, p / q);
        if (Number.isInteger(Math.round(wrongPow * 1e9) / 1e9) && Math.abs(wrongPow - xn / xd) > 1e-9) traps.push({ spec: { type: "number", value: Math.round(wrongPow) }, feedback: `To undo a power of {{${p}/${q}}}, raise both sides to the RECIPROCAL power {{${q}/${p}}}.` });
        if (Number.isInteger((nVal * q) / p) && (nVal * q) / p !== xn / xd) traps.push({ spec: { type: "number", value: (nVal * q) / p }, feedback: `A power isn't undone by multiplying by {{${q}/${p}}} — raise to the power {{${q}/${p}}} instead.` });
        return {
          prompt: `${rng.pick(["Solve", "Find x, where x > 0, if"])} {{${lhs} = ${rhs}}}${rng.pick(["", ""])}. ${coef === 1 ? "" : ""}Give x as a whole number or a fraction${u > 1 || neg ? " in its simplest form" : ""}.`.replace("Solve {{", "Solve, for x > 0, {{"),
          answer: ratAns(xn, xd),
          solution: [
            ...(coef > 1 ? [`Divide both sides by ${coef}: {{x^(${p}/${q}) = ${ratM(Nn, Nd).slice(2, -2)}}}.`] : []),
            `Raise both sides to the power {{${q}/${p}}}: {{x = (${ratM(Nn, Nd).slice(2, -2)})^(${q}/${p})}}.`,
            neg ? `The negative index flips the fraction: {{(${ratM(Nd, Nn).slice(2, -2)})^(${q}/${pAbs})}}.` : `Root first: the ${pAbs === 2 ? "square" : pAbs === 3 ? "cube" : `${pAbs}th`} root of {{${ratM(Nn, Nd).slice(2, -2)}}} is {{${ratM(t, u).slice(2, -2)}}}.`,
            neg ? `The ${pAbs === 2 ? "square" : pAbs === 3 ? "cube" : `${pAbs}th`} root is {{${ratM(t, u).slice(2, -2)}}}; then the power ${q}: x = ${ratM(xn, xd)}.` : `Then the power ${q}: x = {{(${ratM(t, u).slice(2, -2)})^${q}}} = ${ratM(xn, xd)}.`,
          ],
          hint: `What power undoes {{${p}/${q}}}? (Its reciprocal.)`,
          traps,
        };
      }, null as never);
    },
  },

  // 10 ────────────────────────────────────────────────────────────────────────
  {
    id: "indices-surds.hidden-quadratic",
    topicId: "indices-surds",
    title: "Solve an index equation that is a hidden quadratic",
    level: 3,
    guideRef: "harder-index-equations",
    generate(rng, tier) {
      const c = rng.pick(tier === 1 ? [2, 3] : [2, 2, 3]);
      const yv = `${c}^x`;
      const join = (terms: Array<[number, string]>) =>
        terms
          .filter(([k]) => k !== 0)
          .map(([k, body], i) => {
            const mag = Math.abs(k);
            const t = body === "" ? String(mag) : mag === 1 ? body : `${mag} * ${body}`;
            return i === 0 ? (k < 0 ? `-${t}` : t) : `${k < 0 ? "-" : "+"} ${t}`;
          })
          .join(" ");

      if (tier === 1) {
        return attempt(() => {
          const m = rng.int(0, c === 2 ? 4 : 3), n = rng.int(0, c === 2 ? 4 : 3);
          if (m >= n) return null;
          const A = ipow(c, m), B = ipow(c, n);
          const sq = rng.pick([`${c}^(2x)`, `(${c}^x)^2`]);
          return {
            prompt: `${rng.pick(["Solve", "Find all values of x such that"])} {{${join([[1, sq], [-(A + B), yv], [A * B, ""]])} = 0}}.`,
            answer: { type: "list", values: [m, n] },
            solution: [
              `Let {{y = ${c}^x}}. Then {{${sq} = y^2}}, so {{y^2 ${-(A + B) < 0 ? "-" : "+"} ${A + B}y + ${A * B} = 0}}.`,
              `Factorise: {{(y - ${A})(y - ${B}) = 0}}, so y = ${A} or y = ${B}.`,
              `{{${c}^x = ${A}}} gives x = ${m}; {{${c}^x = ${B}}} gives x = ${n}.`,
            ],
            hint: `Let {{y = ${c}^x}}. What is {{${sq}}} in terms of y?`,
            traps: [{ spec: { type: "list", values: [A, B] }, feedback: `Those are the values of {{y = ${c}^x}}. Now solve {{${c}^x = ${A}}} and {{${c}^x = ${B}}} for x.` }],
          };
        }, null as never);
      }

      if (tier === 2) {
        return attempt(() => {
          const sq = rng.pick([`${c * c}^x`, `${c}^(2x)`]);
          if (rng.bool(0.5)) {
            // one root negative: (y − A)(y + k) = 0
            const m = rng.int(1, c === 2 ? 5 : 3), k = rng.int(1, 6);
            const A = ipow(c, m);
            if (A === k) return null;
            return {
              prompt: `Solve {{${join([[1, sq], [k - A, yv], [-k * A, ""]])} = 0}}.`,
              answer: { type: "list", values: [m] },
              solution: [
                `Let {{y = ${c}^x}}, so {{${sq} = y^2}}: {{${join([[1, "y^2"], [k - A, "y"], [-k * A, ""]])} = 0}}.`,
                `Factorise: {{(y - ${A})(y + ${k}) = 0}}, so y = ${A} or y = −${k}.`,
                `{{${c}^x}} is always positive, so {{${c}^x = -${k}}} has no solution. {{${c}^x = ${A}}} gives x = ${m}.`,
              ],
              hint: `Substitute {{y = ${c}^x}}, factorise, and remember {{${c}^x > 0}} for every x.`,
              traps: [{ spec: { type: "list", values: [A, -k] }, feedback: `Those are the values of y. Solve {{${c}^x = y}} — and reject any y that can't be a power of ${c}.` }],
            };
          }
          const m = rng.int(0, c === 2 ? 4 : 3), n = rng.int(0, c === 2 ? 4 : 3);
          if (m >= n) return null;
          const A = ipow(c, m), B = ipow(c, n);
          return {
            prompt: `Solve {{${join([[1, sq], [-(A + B), yv], [A * B, ""]])} = 0}}.`,
            answer: { type: "list", values: [m, n] },
            solution: [
              `{{${sq} = (${c}^x)^2}}. Let {{y = ${c}^x}}: {{y^2 - ${A + B}y + ${A * B} = 0}}.`,
              `{{(y - ${A})(y - ${B}) = 0}}, so y = ${A} or y = ${B}.`,
              `x = ${m} or x = ${n}.`,
            ],
            hint: `Write {{${sq}}} as {{(${c}^x)^2}} and substitute {{y = ${c}^x}}.`,
            traps: [{ spec: { type: "list", values: [A, B] }, feedback: `Those are the values of {{${c}^x}}, not of x.` }],
          };
        }, null as never);
      }

      // tier 3: c^(2x+1) − (c^(m+1) + c^n)·c^x + c^(m+n) = 0 → (y − c^m)(c·y − c^n) = 0
      return attempt(() => {
        const m = rng.int(0, c === 2 ? 3 : 2), n = rng.int(0, c === 2 ? 4 : 3);
        if (m === n - 1) return null;
        const S = ipow(c, m + 1) + ipow(c, n), P = ipow(c, m + n);
        const r2 = n - 1;
        const r2M = r2 >= 0 ? String(ipow(c, r2)) : `1/${c}`;
        return {
          prompt: `Solve {{${join([[1, `${c}^(2x+1)`], [-S, yv], [P, ""]])} = 0}}.`,
          answer: { type: "list", values: [m, r2] },
          solution: [
            `{{${c}^(2x+1) = ${c} * (${c}^x)^2}}. Let {{y = ${c}^x}}: {{${c}y^2 - ${S}y + ${P} = 0}}.`,
            `Factorise: {{(y - ${ipow(c, m)})(${c}y - ${ipow(c, n)}) = 0}}, so y = ${ipow(c, m)} or y = {{${r2M}}}.`,
            `{{${c}^x = ${ipow(c, m)}}} gives x = ${m}; {{${c}^x = ${r2M}}} gives x = ${num(r2)}.`,
          ],
          hint: `Split {{${c}^(2x+1)}} as {{${c} * ${c}^(2x)}}, then let {{y = ${c}^x}}.`,
          traps: [{ spec: { type: "list", values: [ipow(c, m), ipow(c, r2)] }, feedback: `Those are the values of {{${c}^x}}. Now find x from each one.` }],
        };
      }, null as never);
    },
  },
];
