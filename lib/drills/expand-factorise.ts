// ---------------------------------------------------------------------------
// Skill drills — Expanding, Factorising & Substitution (Year 11, 4MA1 Higher).
// Each drill generates unlimited fresh questions from a seeded RNG.
// ---------------------------------------------------------------------------
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { clean, frac, gcd, num, br, poly, roundTo } from "./helpers.ts";

type Tier = 1 | 2 | 3;
/** Polynomial in one letter, coefficients from the constant upwards: [c0, c1, c2, …]. */
type P = number[];

const TOPIC = "expand-factorise";
const LETTERS = ["x", "y", "a", "m", "n", "p", "t"];

// ---------- formatting ----------
const M = (s: string): string => `{{${s}}}`;
const pw = (v: string, k: number): string => (k === 0 ? "" : k === 1 ? v : `${v}^${k}`);

/** Polynomial → ASCII, highest power first: [6, -5, 1] → "x^2 - 5x + 6". */
function pstr(p: P, v = "x"): string {
  const terms: Array<[number, string]> = [];
  for (let k = p.length - 1; k >= 0; k--) terms.push([p[k], pw(v, k)]);
  return poly(terms);
}
/** A linear bracket body: lin(2, -3) → "2x - 3". */
const lin = (a: number, b: number, v = "x"): string => poly([[a, v], [b, ""]]);
/** Bracketed: "(2x - 3)". */
const bl = (a: number, b: number, v = "x"): string => `(${lin(a, b, v)})`;

function pmul(a: P, b: P): P {
  const out: P = new Array(a.length + b.length - 1).fill(0);
  a.forEach((x, i) => b.forEach((y, j) => (out[i + j] += x * y)));
  return out;
}
function padd(a: P, b: P, sign = 1): P {
  const n = Math.max(a.length, b.length);
  const out: P = [];
  for (let i = 0; i < n; i++) out.push((a[i] ?? 0) + sign * (b[i] ?? 0));
  return out;
}
const peq = (a: P, b: P): boolean => {
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) if ((a[i] ?? 0) !== (b[i] ?? 0)) return false;
  return true;
};
/** Plain-text signed term for working lines: "+ 6x", "− 4". */
const sgn = (c: number, key: string): string => (c < 0 ? `- ${poly([[-c, key]])}` : `+ ${poly([[c, key]])}`);
/** A fraction n/d as raw markup (no braces) for use inside {{ }}. */
function fin(n: number, d: number): string {
  const s = frac(n, d);
  return s.slice(2, -2);
}

/** A number inside {{ }}: negatives bracketed with an ASCII minus. */
const bm = (n: number): string => (n < 0 ? `(-${clean(-n)})` : `${clean(n)}`);
/** A term inside a product: negatives bracketed, e.g. (-3b). */
const tb = (c: number, key: string): string => (c < 0 ? `(${poly([[c, key]])})` : poly([[c, key]]));
const etrap = (expr: string, feedback: string): Trap => ({ spec: { type: "expression", expr }, feedback });
const ntrap = (value: number, feedback: string): Trap => ({ spec: { type: "number", value }, feedback });

/** All permutations of an array. */
function perms<X>(a: X[]): X[][] {
  if (a.length <= 1) return [a];
  const out: X[][] = [];
  a.forEach((x, i) => {
    for (const p of perms([...a.slice(0, i), ...a.slice(i + 1)])) out.push([x, ...p]);
  });
  return out;
}

/**
 * Accepted spellings of a fully factorised product, for a text answer: every order of the
 * bracket factors, either internal order of each bracket, with or without "*", and the
 * monomial prefix in front (or at the end with "*").
 */
function factorVariants(prefix: string[], brackets: string[][]): string[] {
  const out = new Set<string>();
  for (const order of perms(brackets)) {
    let bodies: string[][] = [[]];
    for (const alts of order) bodies = bodies.flatMap((b) => alts.map((a) => [...b, `(${a})`]));
    for (const b of bodies) {
      for (const j of ["", "*"]) {
        const prod = b.join(j);
        if (!prefix.length) out.add(prod);
        for (const k of prefix) {
          out.add(k + prod);
          out.add(k + "*" + prod);
          out.add(prod + "*" + k);
        }
      }
    }
  }
  return [...out];
}
/** Bracket spellings for v ± n: "x+5" / "5+x", "x-5" / "-5+x". */
function binAlts(a: string, b: number): string[] {
  const first = `${a}${b < 0 ? "-" : "+"}${Math.abs(b)}`;
  const second = `${b}+${a}`;
  return [first, second];
}

// ---------- 3 s.f. ----------
function sig3(x: number): number {
  if (x === 0) return 0;
  const e = Math.floor(Math.log10(Math.abs(x)));
  return roundTo(x, Math.max(0, 2 - e));
}

// ===========================================================================
// 1. Expand two brackets
// ===========================================================================
function expandDouble(rng: Rng, tier: Tier): DrillItem {
  const v = rng.pick(LETTERS);
  if (tier === 1) {
    const sq = rng.bool(0.2);
    let a = 1, b = 2;
    for (let i = 0; i < 100; i++) {
      a = rng.bool(0.6) ? rng.int(1, 9) : rng.nonZero(-9, 9);
      b = sq ? a : rng.nonZero(-9, 9);
      if (sq || (a !== b && a + b !== 0)) break;
    }
    const res = pmul([a, 1], [b, 1]);
    const expr = pstr(res, v);
    const q = sq ? `(${lin(1, a, v)})^2` : `${bl(1, a, v)}${bl(1, b, v)}`;
    const traps: Trap[] = [];
    if (sq) traps.push(etrap(pstr([a * a, 0, 1], v), `${M(q)} means ${M(`${bl(1, a, v)}${bl(1, a, v)}`)} — there are four products, so there is a middle term ${M(`${2 * a}${v}`)}.`));
    else if (a + b !== 0) traps.push(etrap(pstr([a * b, 0, 1], v), "You've lost the middle term. Multiply every term in the first bracket by every term in the second — four products."));
    return {
      prompt: rng.pick([`Expand and simplify ${M(q)}.`, `Multiply out and simplify ${M(q)}.`, `Expand the brackets and collect like terms: ${M(q)}.`]),
      answer: { type: "expression", expr, form: "expanded" },
      solution: [
        sq ? `${M(q)} = ${M(`${bl(1, a, v)}${bl(1, a, v)}`)}.` : "Multiply each term in the first bracket by each term in the second.",
        `${M(`${v} * ${v} = ${v}^2`)}, ${M(`${v} * ${bm(b)} = ${term(b, v)}`)}, ${M(`${bm(a)} * ${v} = ${term(a, v)}`)}, ${M(`${bm(a)} * ${bm(b)} = ${a * b}`)}.`,
        `Collect the ${M(v)} terms: ${M(`${term(a, v)} ${sgn(b, v)} = ${term(a + b, v) || "0"}`)}. Answer: ${M(expr)}.`,
      ],
      hint: "Four products: first × first, first × last, last × first, last × last — then collect the middle terms.",
      traps,
    };
  }
  if (tier === 2) {
    const sq = rng.bool(0.3);
    let p = 2, q = 1, r = 1, s = 1;
    for (let i = 0; i < 100; i++) {
      p = rng.int(1, 5); q = rng.nonZero(-9, 9);
      r = sq ? p : rng.int(1, 5); s = sq ? q : rng.nonZero(-9, 9);
      if ((p > 1 || r > 1) && (sq || p * s + q * r !== 0) && !(p === r && q === s && !sq)) break;
    }
    const res = pmul([q, p], [s, r]);
    const expr = pstr(res, v);
    const qd = sq ? `(${lin(p, q, v)})^2` : `${bl(p, q, v)}${bl(r, s, v)}`;
    const traps: Trap[] = [];
    if (sq) traps.push(etrap(pstr([q * q, 0, p * p], v), `Squaring a bracket is NOT squaring each term: ${M(qd)} = ${M(`${bl(p, q, v)}${bl(p, q, v)}`)}, which has a middle term ${M(term(2 * p * q, v))}.`));
    else if (p * s + q * r !== 0) traps.push(etrap(pstr([q * s, 0, p * r], v), "You've lost the middle terms — there are four products to find, then collect like terms."));
    return {
      prompt: rng.pick([`Expand and simplify ${M(qd)}.`, `Multiply out and simplify fully ${M(qd)}.`, `Expand and simplify: ${M(qd)}.`]),
      answer: { type: "expression", expr, form: "expanded" },
      solution: [
        sq ? `Write it as two brackets: ${M(`${bl(p, q, v)}${bl(p, q, v)}`)}.` : "Use a grid or FOIL: every term times every term.",
        `${M(`${term(p, v)} * ${term(r, v)} = ${term(p * r, pw(v, 2))}`)}; ${M(`${term(p, v)} * ${bm(s)} = ${term(p * s, v)}`)}; ${M(`${bm(q)} * ${term(r, v)} = ${term(q * r, v)}`)}; ${M(`${bm(q)} * ${bm(s)} = ${q * s}`)}.`,
        `Collect: ${M(`${term(p * s, v)} ${sgn(q * r, v)} = ${term(p * s + q * r, v) || "0"}`)}, so the answer is ${M(expr)}.`,
      ],
      hint: sq ? "Write the square as two identical brackets and find all four products." : "Multiply the coefficients as well as the letters: 3x × 2x = 6x².",
      traps,
    };
  }
  // tier 3: two-letter brackets, or a difference of two expansions
  if (rng.bool(0.5)) {
    const [x, y] = rng.pick([["x", "y"], ["a", "b"], ["m", "n"], ["p", "q"]]);
    let p = 2, q = 1, r = 1, s = 1;
    for (let i = 0; i < 100; i++) {
      p = rng.int(1, 5); q = rng.nonZero(-7, 7); r = rng.int(1, 5); s = rng.nonZero(-7, 7);
      if ((p > 1 || r > 1) && p * s + q * r !== 0 && !(p === r && q === s)) break;
    }
    const expr = poly([[p * r, `${x}^2`], [p * s + q * r, `${x}${y}`], [q * s, `${y}^2`]]);
    const B1 = `(${poly([[p, x], [q, y]])})`, B2 = `(${poly([[r, x], [s, y]])})`;
    return {
      prompt: `Expand and simplify ${M(B1 + B2)}.`,
      answer: { type: "expression", expr, form: "expanded" },
      solution: [
        `${M(`${term(p, x)} * ${term(r, x)} = ${term(p * r, `${x}^2`)}`)} and ${M(`${tb(q, y)} * ${tb(s, y)} = ${term(q * s, `${y}^2`)}`)}.`,
        `The two middle products are ${M(term(p * s, x + y))} and ${M(term(q * r, x + y))}, which are like terms: they add to ${M(term(p * s + q * r, x + y))}.`,
        `Answer: ${M(expr)}.`,
      ],
      hint: `${M(x + y)} and ${M(y + x)} are the same term — collect them.`,
      traps: [etrap(poly([[p * r, `${x}^2`], [q * s, `${y}^2`]]), `You've lost the ${M(x + y)} terms — there are four products.`)],
    };
  }
  let p = 2, q = 1, r = 1, s = 1, u = 1;
  for (let i = 0; i < 100; i++) {
    p = rng.int(1, 4); q = rng.nonZero(-6, 6); r = rng.int(1, 4); s = rng.nonZero(-6, 6); u = rng.nonZero(-6, 6);
    if (s * u !== 0 && (r * u + s !== 0)) break;
  }
  const A = pmul([q, p], [q, p]);
  const B = pmul([s, r], [u, 1]);
  const res = padd(A, B, -1);
  const expr = pstr(res, v);
  const wrong: P = [A[0] + B[0], A[1] + B[1], A[2] - B[2]];
  const qd = `(${lin(p, q, v)})^2 - ${bl(r, s, v)}${bl(1, u, v)}`;
  return {
    prompt: rng.pick([`Expand and simplify ${M(qd)}.`, `Simplify fully ${M(qd)}.`]),
    answer: { type: "expression", expr, form: "expanded" },
    solution: [
      `${M(`(${lin(p, q, v)})^2 = ${pstr(A, v)}`)}.`,
      `${M(`${bl(r, s, v)}${bl(1, u, v)} = ${pstr(B, v)}`)}. Keep it in a bracket before subtracting.`,
      `${M(`${pstr(A, v)} - (${pstr(B, v)})`)} — the minus changes the sign of EVERY term in the bracket.`,
      `Answer: ${M(expr)}.`,
    ],
    hint: "Expand each part separately, put the second one in a bracket, then subtract every term.",
    traps: peq(wrong, res) ? [] : [etrap(pstr(wrong, v), "The minus sign applies to every term of the second expansion, not just the first one. Put it in a bracket before subtracting.")],
  };
}

/** Term helper with negative numbers inside markup. */
function term(c: number, key: string): string {
  return poly([[c, key]]) === "0" ? "" : poly([[c, key]]);
}

// ===========================================================================
// 2. Factorise x² + bx + c
// ===========================================================================
function factoriseSimple(rng: Rng, tier: Tier): DrillItem {
  const v = rng.pick(LETTERS);
  // Common-factor variant: v² + kv = v(v + k)
  if (tier < 3 && rng.bool(0.2)) {
    const k = rng.nonZero(-12, 12);
    const expr = `${v}${bl(1, k, v)}`;
    return {
      prompt: rng.pick([`Factorise ${M(pstr([0, k, 1], v))}.`, `Factorise fully ${M(pstr([0, k, 1], v))}.`]),
      answer: { type: "expression", expr, form: "factorised" },
      solution: [`Both terms contain ${M(v)}, so take ${M(v)} out as a common factor.`, `${M(pstr([0, k, 1], v))} = ${M(expr)}. Check by expanding.`],
      hint: "There is no constant term — what do both terms share?",
      traps: [etrap(`(${v}+${Math.abs(k)})(${v}-${Math.abs(k)})`, "That expands to a difference of two squares, which has no middle term. Here both terms share a common factor.")],
    };
  }
  let r = 2, s = 3;
  for (let i = 0; i < 100; i++) {
    if (tier === 1) {
      r = rng.int(1, 9); s = rng.bool(0.6) ? rng.int(1, 9) : rng.int(-9, -1);
    } else if (tier === 2) {
      r = rng.nonZero(-12, 12); s = rng.nonZero(-12, 12);
    } else {
      r = rng.nonZero(-20, 20); s = rng.nonZero(-20, 20);
    }
    if (r + s !== 0 && Math.abs(r * s) > 1 && (tier < 3 || Math.abs(r * s) >= 24)) break;
  }
  const twoVar = tier === 3 && rng.bool(0.4);
  if (twoVar) {
    const [x, y] = rng.pick([["x", "y"], ["a", "b"], ["m", "n"], ["p", "q"]]);
    const rr = Math.max(-9, Math.min(9, r)) || 2, ss = Math.max(-9, Math.min(9, s)) || 3;
    const R = rr + ss === 0 ? rr + 1 : rr;
    const S = ss;
    const shown = poly([[1, `${x}^2`], [R + S, `${x}${y}`], [R * S, `${y}^2`]]);
    const expr = `(${poly([[1, x], [R, y]])})(${poly([[1, x], [S, y]])})`;
    return {
      prompt: `Factorise ${M(shown)}.`,
      answer: { type: "expression", expr, form: "factorised" },
      solution: [
        `Treat it like ${M(pstr([R * S, R + S, 1], x))}, but every constant carries a ${M(y)}.`,
        `Two numbers that multiply to ${num(R * S)} and add to ${num(R + S)}: ${num(R)} and ${num(S)}.`,
        `So ${M(shown)} = ${M(expr)}.`,
      ],
      hint: `Find two numbers with product ${num(R * S)} and sum ${num(R + S)}; each bracket gets ${M(y)} after the number.`,
      traps: [etrap(`(${poly([[1, x], [-R, y]])})(${poly([[1, x], [-S, y]])})`, "Check the signs: expand your brackets — the middle term comes out with the wrong sign.")],
    };
  }
  const shown = pstr([r * s, r + s, 1], v);
  const expr = `${bl(1, r, v)}${bl(1, s, v)}`;
  return {
    prompt: rng.pick([`Factorise ${M(shown)}.`, `Factorise fully ${M(shown)}.`, `Write ${M(shown)} as the product of two brackets.`]),
    answer: { type: "expression", expr, form: "factorised" },
    solution: [
      `Look for two numbers that multiply to ${num(r * s)} and add to ${num(r + s)}.`,
      `${num(r)} × ${br(s)} = ${num(r * s)} and ${num(r)} + ${br(s)} = ${num(r + s)}.`,
      `So ${M(shown)} = ${M(expr)}. Expand to check.`,
    ],
    hint: `Product ${num(r * s)}, sum ${num(r + s)}. ${r * s < 0 ? "A negative product means the signs are different." : "A positive product means the signs are the same."}`,
    traps: [etrap(`${bl(1, -r, v)}${bl(1, -s, v)}`, "Right numbers, wrong signs — expand your answer and compare the middle term.")],
  };
}

// ===========================================================================
// 3. Difference of two squares
// ===========================================================================
function dots(rng: Rng, tier: Tier): DrillItem {
  const v = rng.pick(LETTERS);
  if (tier === 1) {
    const n = rng.int(1, 12);
    const flip = rng.bool(0.25);
    const shown = flip ? `${n * n} - ${v}^2` : `${v}^2 - ${n * n}`;
    const expr = flip ? `(${n}+${v})(${n}-${v})` : `(${v}+${n})(${v}-${n})`;
    return {
      prompt: rng.pick([`Factorise ${M(shown)}.`, `Factorise ${M(shown)} using the difference of two squares.`]),
      answer: { type: "expression", expr, form: "factorised" },
      solution: [
        `${M(shown)} = ${M(flip ? `${n}^2 - ${v}^2` : `${v}^2 - ${n}^2`)} — one square minus another.`,
        `Use ${M("A^2 - B^2 = (A + B)(A - B)")}: ${M(expr)}.`,
        "Check: the middle terms cancel when you expand.",
      ],
      hint: `${n * n} is a square number — ${n} squared.`,
      traps: [etrap(flip ? `(${n}-${v})^2` : `(${v}-${n})^2`, `${M(flip ? `(${n} - ${v})^2` : `(${v} - ${n})^2`)} has a middle term when you expand it. You need one + bracket and one − bracket.`)],
    };
  }
  let a = 2, b = 3;
  for (let i = 0; i < 100; i++) {
    a = tier === 2 ? rng.int(2, 6) : rng.int(2, 9);
    b = tier === 2 ? rng.int(1, 11) : rng.int(2, 12);
    if (gcd(a, b) === 1) break;
  }
  const two = tier === 3 || rng.bool(0.35);
  const w = two ? rng.pick(["y", "z", "k"].filter((c) => c !== v)) : "";
  const A = `${a}${v}`;
  const B = two ? (b === 1 ? w : `${b}${w}`) : `${b}`;
  const second = two ? (b === 1 ? `${w}^2` : `${b * b}${w}^2`) : `${b * b}`;
  const shown = `${a * a}${v}^2 - ${second}`;
  const expr = `(${A}+${B})(${A}-${B})`;
  return {
    prompt: rng.pick([`Factorise ${M(shown)}.`, `Factorise fully ${M(shown)}.`]),
    answer: { type: "expression", expr, form: "factorised" },
    solution: [
      `${M(`${a * a}${v}^2 = (${A})^2`)} and ${M(`${second} = ${two ? `(${B})` : B}^2`)}.`,
      `${M("A^2 - B^2 = (A + B)(A - B)")} with ${M(`A = ${A}`)} and ${M(`B = ${B}`)}.`,
      `So ${M(shown)} = ${M(expr)}.`,
    ],
    hint: "Each term is a perfect square — what was squared to make it?",
    traps: [etrap(`(${A}-${B})^2`, "A squared bracket gives a middle term. A difference of two squares needs (A + B)(A − B)."), etrap(`(${a * a}${v}+${B})(${v}-${B})`, `Square-root the coefficient too: ${M(`${a * a}${v}^2 = (${A})^2`)}.`)],
  };
}

// ===========================================================================
// 4. Substitution into expressions and formulae
// ===========================================================================
type Q = [number, number];
function q(n: number, d = 1): Q {
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1;
  return [n / g, d / g];
}
const qadd = (a: Q, b: Q): Q => q(a[0] * b[1] + b[0] * a[1], a[1] * b[1]);
const qmul = (a: Q, b: Q): Q => q(a[0] * b[0], a[1] * b[1]);

function substitution(rng: Rng, tier: Tier): DrillItem {
  const kinds = tier === 1 ? ["expr", "ke", "suvat"] : tier === 2 ? ["s", "vsf", "dec"] : ["fracs", "finda", "findv"];
  const kind = rng.pick(kinds);
  if (kind === "expr") {
    const [x, y] = rng.pick([["a", "b"], ["x", "y"], ["p", "q"], ["m", "n"]]);
    const A = rng.int(2, 5), B = rng.nonZero(-9, 9);
    const X = rng.int(-6, -2), Y = rng.nonZero(-8, 8);
    const ans = A * X * X + B * Y;
    const shown = `${A}${x}^2 ${B < 0 ? "-" : "+"} ${Math.abs(B)}${y}`;
    const wrong = (A * X) * (A * X) + B * Y;
    const traps: Trap[] = [];
    if (wrong !== ans) traps.push(ntrap(wrong, `Only ${M(x)} is squared, not ${M(`${A}${x}`)}. Indices first: square ${num(X)}, then multiply by ${A}.`));
    if (-A * X * X + B * Y !== ans) traps.push(ntrap(-A * X * X + B * Y, `${M(`(${X})^2 = ${X * X}`)} — a negative number squared is positive.`));
    return {
      prompt: rng.pick([`Work out the value of ${M(shown)} when ${M(x)} = ${num(X)} and ${M(y)} = ${num(Y)}.`, `Given ${M(x)} = ${num(X)} and ${M(y)} = ${num(Y)}, evaluate ${M(shown)}.`]),
      answer: { type: "number", value: ans },
      solution: [
        `Substitute with brackets: ${M(`${A} * (${X})^2 ${B < 0 ? "-" : "+"} ${Math.abs(B)} * ${bm(Y)}`)}.`,
        `Indices first: ${M(`(${X})^2 = ${X * X}`)}, so ${M(`${A} * ${X * X} = ${A * X * X}`)}.`,
        `${num(A * X * X)} ${B * Y < 0 ? "−" : "+"} ${num(Math.abs(B * Y))} = ${num(ans)}.`,
      ],
      hint: "Put negative numbers in brackets, then do the power before the multiplication.",
      traps,
    };
  }
  if (kind === "ke") {
    const m = rng.int(1, 10) * 2, vv = rng.int(2, 12);
    const neg = rng.bool(0.4);
    const ans = (m * vv * vv) / 2;
    const traps: Trap[] = [];
    if ((m * vv) * (m * vv) / 2 !== ans) traps.push(ntrap((m * vv) * (m * vv) / 2, `Only ${M("v")} is squared: work out ${M("v^2")} first, then multiply by ${M("1/2 m")}.`));
    if (m * vv !== ans) traps.push(ntrap(m * vv, `${M("v^2")} means ${M("v * v")}, not ${M("2v")}.`));
    return {
      prompt: `Kinetic energy is given by ${M("E = 1/2 m v^2")}. Work out ${M("E")} when ${M("m")} = ${m} and ${M("v")} = ${num(neg ? -vv : vv)}.`,
      answer: { type: "number", value: ans },
      solution: [
        `${M(`E = 1/2 * ${m} * ${neg ? `(${-vv})` : vv}^2`)}.`,
        `${M(`${neg ? `(${-vv})` : vv}^2 = ${vv * vv}`)}, and ${M(`1/2 * ${m} = ${m / 2}`)}.`,
        `${M("E")} = ${m / 2} × ${vv * vv} = ${num(ans)}.`,
      ],
      hint: "Square v first (a negative squared is positive), then multiply.",
      traps,
    };
  }
  if (kind === "suvat") {
    let u = 3, a = 2, s = 4, v = 5;
    for (let i = 0; i < 300; i++) {
      u = rng.int(0, 15); a = rng.int(1, 10); s = rng.int(1, 40);
      const v2 = u * u + 2 * a * s;
      const r = Math.round(Math.sqrt(v2));
      if (r * r === v2 && r > u) { v = r; break; }
    }
    if (v * v !== u * u + 2 * a * s) { u = 3; a = 2; s = 4; v = 5; }
    return {
      prompt: `${M("v^2 = u^2 + 2as")}. Work out the value of ${M("v")} when ${M("u")} = ${u}, ${M("a")} = ${a} and ${M("s")} = ${s}, given that ${M("v")} is positive.`,
      answer: { type: "number", value: v },
      solution: [
        `${M(`v^2 = ${u}^2 + 2 * ${a} * ${s} = ${u * u} + ${2 * a * s} = ${v * v}`)}.`,
        `${M(`v = sqrt(${v * v}) = ${v}`)} (taking the positive root).`,
      ],
      hint: "Find v² first, then square-root at the very end.",
      traps: [ntrap(v * v, `That's ${M("v^2")}. Square-root it to find ${M("v")}.`), ...(u + 2 * a * s !== v * v && u + 2 * a * s !== v ? [ntrap(u + 2 * a * s, `${M("u^2")} means ${M("u * u")} — you used ${M("u")} instead.`)] : [])],
    };
  }
  if (kind === "s") {
    const u = rng.int(2, 25), t = rng.int(2, 9);
    const a = rng.pick([-2, -3, -4, -5, -6, -8, -10, -1.5, -2.5, -9.8, 1.5, 2.5, 4]);
    const ans = clean(u * t + 0.5 * a * t * t);
    const traps: Trap[] = [];
    const w = clean(u * t + 0.5 * (a * t) * (a * t));
    if (w !== ans) traps.push(ntrap(w, `Only ${M("t")} is squared in ${M("1/2 a t^2")}: work out ${M("t^2")} first.`));
    return {
      prompt: `${M("s = ut + 1/2 a t^2")}. Work out the value of ${M("s")} when ${M("u")} = ${u}, ${M("t")} = ${t} and ${M("a")} = ${num(a)}.`,
      answer: { type: "number", value: ans },
      solution: [
        `${M(`s = ${u} * ${t} + 1/2 * ${bm(a)} * ${t}^2`)}.`,
        `${M(`${u} * ${t} = ${u * t}`)} and ${M(`1/2 * ${bm(a)} * ${t * t} = ${clean(0.5 * a * t * t)}`)}.`,
        `${M("s")} = ${u * t} ${a < 0 ? "−" : "+"} ${num(Math.abs(clean(0.5 * a * t * t)))} = ${num(ans)}.`,
      ],
      hint: "Work out each term separately, keeping the sign of a.",
      traps,
    };
  }
  if (kind === "vsf") {
    let u = 4, a = 3, s = 10, v2 = 76;
    for (let i = 0; i < 100; i++) {
      u = rng.int(2, 20); a = rng.int(2, 9); s = rng.int(5, 60);
      v2 = u * u + 2 * a * s;
      const r = Math.round(Math.sqrt(v2));
      if (r * r !== v2) break;
    }
    const v = sig3(Math.sqrt(v2));
    return {
      prompt: `${M("v^2 = u^2 + 2as")}. Calculate ${M("v")} when ${M("u")} = ${u}, ${M("a")} = ${a} and ${M("s")} = ${s}, where ${M("v > 0")}. Give your answer correct to 3 significant figures.`,
      answer: { type: "number", value: v, tolerance: 0.0000001 },
      solution: [
        `${M(`v^2 = ${u}^2 + 2 * ${a} * ${s} = ${u * u} + ${2 * a * s} = ${v2}`)}.`,
        `${M(`v = sqrt(${v2}) = ${clean(roundTo(Math.sqrt(v2), 5))}...`)}`,
        `To 3 s.f., ${M("v")} = ${num(v)}.`,
      ],
      hint: "Find v² as a whole number first, then square-root and round.",
      traps: [ntrap(v2, `That's ${M("v^2")} — take the square root.`)],
    };
  }
  if (kind === "dec") {
    const [x, y] = rng.pick([["a", "b"], ["x", "y"], ["p", "q"], ["r", "s"]]);
    const A = rng.int(2, 6), B = rng.int(2, 9);
    const X10 = rng.pick([-15, -25, -12, -5, -35, -45, -8, -3]);
    const Y10 = rng.pick([12, 25, 35, 4, 6, 15, -24, -16]);
    const X = X10 / 10, Y = Y10 / 10;
    const ans = clean((A * X10 * X10) / 100 - (B * Y10) / 10);
    const shown = `${A}${x}^2 - ${B}${y}`;
    const traps: Trap[] = [];
    const w = clean(-(A * X10 * X10) / 100 - (B * Y10) / 10);
    if (w !== ans) traps.push(ntrap(w, `${M(`(${num(X).replace("−", "-")})^2`)} is positive — a negative squared is positive.`));
    return {
      prompt: `Work out the value of ${M(shown)} when ${M(x)} = ${num(X)} and ${M(y)} = ${num(Y)}.`,
      answer: { type: "number", value: ans },
      solution: [
        `${M(`${A} * (${num(X).replace("−", "-")})^2 - ${B} * ${Y < 0 ? `(${num(Y).replace("−", "-")})` : num(Y)}`)}.`,
        `${M(`(${num(X).replace("−", "-")})^2 = ${clean(X * X)}`)}, so the first term is ${num(clean((A * X10 * X10) / 100))}; the second is ${num(clean((B * Y10) / 10))}.`,
        `${num(clean((A * X10 * X10) / 100))} − ${br(clean((B * Y10) / 10))} = ${num(ans)}.`,
      ],
      hint: "Brackets round negatives, powers before multiplying, and watch subtracting a negative.",
      traps,
    };
  }
  if (kind === "fracs") {
    let X: Q = [2, 3], Y: Q = [-1, 4];
    for (let i = 0; i < 50; i++) {
      const d1 = rng.pick([2, 3, 4, 5]), d2 = rng.pick([2, 3, 4, 5, 6]);
      X = q(rng.nonZero(-4, 4), d1);
      Y = q(rng.nonZero(-5, 5), d2);
      if (X[1] > 1 && Y[1] > 1) break;
    }
    const A = rng.int(2, 4);
    const res = qadd(qmul(X, X), qmul([-A, 1], Y)); // x² − A y
    const shown = `x^2 - ${A}y`;
    const traps: Trap[] = [];
    const w = qadd(qmul([X[0] * 2, X[1]], [1, 1]), qmul([-A, 1], Y));
    if (!(w[0] === res[0] && w[1] === res[1])) traps.push({ spec: { type: "fraction", n: w[0], d: w[1] }, feedback: `${M("x^2")} means ${M("x * x")}, not ${M("2x")}.` });
    return {
      prompt: `Work out the value of ${M(shown)} when ${M(`x = ${fin(X[0], X[1])}`)} and ${M(`y = ${fin(Y[0], Y[1])}`)}. Give your answer as a fraction in its simplest form.`,
      answer: { type: "fraction", n: res[0], d: res[1], simplest: true },
      solution: [
        `${M(`x^2 = (${fin(X[0], X[1])})^2 = ${fin(X[0] * X[0], X[1] * X[1])}`)} (square the top and the bottom).`,
        `${M(`${A}y = ${A} * (${fin(Y[0], Y[1])}) = ${fin(A * Y[0], Y[1])}`)}.`,
        `${M(`${fin(X[0] * X[0], X[1] * X[1])} - (${fin(A * Y[0], Y[1])}) = ${fin(res[0], res[1])}`)}.`,
      ],
      hint: "Square the numerator and the denominator; then use a common denominator.",
      traps,
    };
  }
  if (kind === "finda") {
    let u = 10, v = 4, s = 5, a = -8.4;
    for (let i = 0; i < 200; i++) {
      u = rng.int(2, 30); v = rng.int(0, 30); s = rng.pick([2, 4, 5, 8, 10, 20, 25, 40, 50]);
      if (u === v) continue;
      a = (v * v - u * u) / (2 * s);
      if (Math.abs(roundTo(a, 2) - a) < 1e-9 && Math.abs(a) >= 0.5) break;
    }
    a = clean(a);
    return {
      prompt: `${M("v^2 = u^2 + 2as")}. A cyclist's speed changes from ${M("u")} = ${u} m/s to ${M("v")} = ${v} m/s over a distance ${M("s")} = ${s} m. Work out the acceleration ${M("a")} in m/s².`,
      answer: { type: "number", value: a },
      solution: [
        `Substitute: ${M(`${v}^2 = ${u}^2 + 2 * a * ${s}`)}, so ${M(`${v * v} = ${u * u} + ${2 * s}a`)}.`,
        `${M(`${2 * s}a = ${v * v} - ${u * u} = ${v * v - u * u}`)}.`,
        `${M(`a = ${v * v - u * u} / ${2 * s}`)} = ${num(a)} m/s²${a < 0 ? " (negative: the cyclist slows down)" : ""}.`,
      ],
      hint: "Substitute everything you know first, then solve the linear equation for a.",
      traps: a !== -a ? [ntrap(-a, `Check the sign: ${M(`${v * v} - ${u * u}`)} is ${v * v - u * u < 0 ? "negative" : "positive"}.`)] : [],
    };
  }
  // findv: E = ½mv², find v
  let m = 4, v = 5;
  for (let i = 0; i < 50; i++) {
    m = rng.pick([2, 4, 6, 8, 10, 12, 0.5, 1.5, 2.5]); v = rng.int(2, 15);
    if (clean(0.5 * m * v * v) === Math.round(0.5 * m * v * v)) break;
  }
  const E = clean(0.5 * m * v * v);
  return {
    prompt: `${M("E = 1/2 m v^2")}. Work out the positive value of ${M("v")} when ${M("E")} = ${num(E)} and ${M("m")} = ${num(m)}.`,
    answer: { type: "number", value: v },
    solution: [
      `${M(`${E} = 1/2 * ${m} * v^2`)}, so ${M(`${E} = ${clean(m / 2)}v^2`)}.`,
      `${M(`v^2 = ${E} / ${clean(m / 2)} = ${v * v}`)}.`,
      `${M(`v = sqrt(${v * v}) = ${v}`)}.`,
    ],
    hint: "Substitute, then undo × ½m by dividing, and undo the square with a square root.",
    traps: [ntrap(v * v, `That's ${M("v^2")} — square-root it.`)],
  };
}

// ===========================================================================
// 5. Expand three brackets
// ===========================================================================
function expandTriple(rng: Rng, tier: Tier): DrillItem {
  const v = rng.pick(LETTERS);
  let f: Array<[number, number]> = []; // [coef, const]
  let cube = false;
  for (let i = 0; i < 100; i++) {
    if (tier === 1) {
      f = [[1, rng.nonZero(-5, 5)], [1, rng.nonZero(-5, 5)], [1, rng.nonZero(-5, 5)]];
    } else if (tier === 2) {
      f = [[rng.int(2, 3), rng.nonZero(-5, 5)], [1, rng.nonZero(-5, 5)], [1, rng.nonZero(-6, 6)]];
    } else {
      cube = rng.bool(0.3);
      if (cube) {
        const b: [number, number] = [rng.int(1, 3), rng.nonZero(-4, 4)];
        f = [b, b, b];
      } else f = [[rng.int(1, 3), rng.nonZero(-5, 5)], [rng.int(2, 3), rng.nonZero(-5, 5)], [rng.int(1, 2), rng.nonZero(-4, 4)]];
    }
    const distinct = new Set(f.map((x) => x.join(","))).size;
    if (cube || distinct >= 2) break;
  }
  const first = pmul([f[0][1], f[0][0]], [f[1][1], f[1][0]]);
  const res = pmul(first, [f[2][1], f[2][0]]);
  const expr = pstr(res, v);
  const shown = cube ? `(${lin(f[0][0], f[0][1], v)})^3` : f.map(([a, b]) => bl(a, b, v)).join("");
  const traps: Trap[] = [];
  if (cube) {
    const w = [f[0][1] ** 3, 0, 0, f[0][0] ** 3];
    if (!peq(w, res)) traps.push(etrap(pstr(w, v), "Cubing a bracket is not cubing each term — write it as three brackets and expand two at a time."));
  } else {
    const w = [res[0], 0, res[2], res[3]];
    if (!peq(w, res)) traps.push(etrap(pstr(w, v), `You've lost the ${M(v)} terms. Expand two brackets fully first, then multiply EVERY term by the third bracket.`));
  }
  return {
    prompt: rng.pick([`Expand and simplify ${M(shown)}.`, `Show your working to expand and simplify ${M(shown)}.`, `Multiply out ${M(shown)}, giving your answer in its simplest form.`]),
    answer: { type: "expression", expr, form: "expanded" },
    solution: [
      `${cube ? `Write it as ${M(`${bl(f[0][0], f[0][1], v)}${bl(f[0][0], f[0][1], v)}${bl(f[0][0], f[0][1], v)}`)}. ` : ""}Expand the first two brackets: ${M(`${bl(f[0][0], f[0][1], v)}${bl(f[1][0], f[1][1], v)} = ${pstr(first, v)}`)}.`,
      `Multiply every term by ${M(bl(f[2][0], f[2][1], v))}: ${M(`(${pstr(first, v)})${bl(f[2][0], f[2][1], v)}`)}.`,
      `That gives ${M(pstr(pmul(first, [0, f[2][0]]), v))} and ${M(pstr(pmul(first, [f[2][1]]), v))}; collect like terms.`,
      `Answer: ${M(expr)}.`,
    ],
    hint: "Two at a time: expand any two brackets, simplify, then multiply by the third.",
    traps,
  };
}

// ===========================================================================
// 6. Factorise ax² + bx + c, a ≠ 1
// ===========================================================================
function factoriseANot1(rng: Rng, tier: Tier): DrillItem {
  const v = rng.pick(LETTERS);
  let p = 2, qq = 1, r = 1, s = 3;
  for (let i = 0; i < 200; i++) {
    if (tier === 1) { p = rng.int(2, 3); qq = rng.int(1, 7); r = 1; s = rng.int(1, 7); }
    else if (tier === 2) { p = rng.int(2, 5); qq = rng.nonZero(-7, 7); r = rng.int(1, 3); s = rng.nonZero(-7, 7); }
    else { p = rng.int(2, 6); qq = rng.nonZero(-9, 9); r = rng.int(2, 4); s = rng.nonZero(-9, 9); }
    if (gcd(p, qq) === 1 && gcd(r, s) === 1 && p * s + qq * r !== 0 && !(p === r && qq === s) && p * r > 1) break;
  }
  const res = pmul([qq, p], [s, r]);
  const shown = pstr(res, v);
  const expr = `${bl(p, qq, v)}${bl(r, s, v)}`;
  const A = p * r, C = qq * s, m = p * s, n = qq * r;
  const traps: Trap[] = [];
  const sw = pmul([s, p], [qq, r]);
  if (!peq(sw, res)) traps.push(etrap(`${bl(p, s, v)}${bl(r, qq, v)}`, "Close — but expand your brackets: the middle term doesn't match. Try swapping the numbers between the brackets."));
  const sg = pmul([-qq, p], [-s, r]);
  if (!peq(sg, res)) traps.push(etrap(`${bl(p, -qq, v)}${bl(r, -s, v)}`, "Check the signs — expand your answer and compare the middle term."));
  return {
    prompt: rng.pick([`Factorise ${M(shown)}.`, `Factorise fully ${M(shown)}.`, `Factorise ${M(shown)} into two brackets.`]),
    answer: { type: "expression", expr, form: "factorised" },
    solution: [
      `Multiply ${M("a * c")}: ${A} × ${br(C)} = ${num(A * C)}. Find two numbers that multiply to ${num(A * C)} and add to ${num(m + n)}: ${num(m)} and ${num(n)}.`,
      `Split the middle term: ${M(`${term(A, pw(v, 2))} ${sgn(m, v)} ${sgn(n, v)} ${C < 0 ? "-" : "+"} ${Math.abs(C)}`)}.`,
      `Factorise in pairs: ${M(`${term(p, v)}${bl(r, s, v)} ${qq < 0 ? "-" : "+"} ${Math.abs(qq)}${bl(r, s, v)}`)}.`,
      `The common bracket comes out: ${M(expr)}.`,
    ],
    hint: `Find two numbers that multiply to ${M("a * c")} = ${num(A * C)} and add to ${num(m + n)}, then split the middle term.`,
    traps,
  };
}

// ===========================================================================
// 7. Completing the square
// ===========================================================================
function completeSquare(rng: Rng, tier: Tier): DrillItem {
  const x = "x";
  type Kind = "basic" | "odd" | "a" | "tp" | "neg" | "ahalf" | "tpa";
  const kind: Kind = tier === 1 ? rng.pick<Kind>(["basic", "basic", "basic", "tp"]) : tier === 2 ? rng.pick<Kind>(["odd", "a", "tp", "basic"]) : rng.pick<Kind>(["ahalf", "neg", "tpa"]);
  if (kind === "basic" || kind === "tp") {
    let b = 6, c = 4;
    for (let i = 0; i < 50; i++) {
      b = 2 * rng.nonZero(tier === 1 ? -6 : -9, tier === 1 ? 6 : 9); c = rng.int(-15, 20);
      if (c !== (b / 2) ** 2) break;
    }
    const p = b / 2, qv = c - p * p;
    const shown = pstr([c, b, 1], x);
    const sq = `(${lin(1, p, x)})^2`;
    const steps = [
      `Halve the coefficient of ${M("x")}: ${num(b)} ÷ 2 = ${num(p)}, so start with ${M(sq)}.`,
      `${M(`${sq} = x^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)}x + ${p * p}`)}, which is ${p * p} too much${c !== 0 ? `, so subtract ${p * p}` : ""}.`,
      `${M(`${shown} = ${sq} ${c < 0 ? "-" : "+"} ${Math.abs(c)} - ${p * p} = ${sq} ${qv < 0 ? "-" : "+"} ${Math.abs(qv)}`)}.`,
    ];
    if (kind === "basic") {
      return {
        prompt: `Write ${M(shown)} in the form ${M("(x + p)^2 + q")}, where ${M("p")} and ${M("q")} are integers. Give the values of ${M("p")} and ${M("q")}, ${M("p")} first.`,
        answer: { type: "list", values: [p, qv], ordered: true, display: `p = ${num(p)}, q = ${num(qv)}` },
        solution: [...steps, `So ${M("p")} = ${num(p)} and ${M("q")} = ${num(qv)}.`],
        hint: "Halve the x coefficient to get p; then subtract p² to cancel the extra constant.",
        traps: [{ spec: { type: "list", values: [p, c + p * p], ordered: true }, feedback: `Expanding ${M(sq)} gives an extra +${p * p}, so you must SUBTRACT ${p * p}, not add it.` }, { spec: { type: "list", values: [b, c - b * b], ordered: true }, feedback: "p is HALF the coefficient of x." }],
      };
    }
    return {
      prompt: `By completing the square, find the coordinates of the turning point of the curve ${M(`y = ${shown}`)}. Give the ${M("x")}-coordinate first.`,
      answer: { type: "list", values: [-p, qv], ordered: true, display: `(${num(-p)}, ${num(qv)})` },
      solution: [...steps, `${M(`${sq} >= 0`)}, and it is 0 when ${M("x")} = ${num(-p)}. So the minimum point is (${num(-p)}, ${num(qv)}).`],
      hint: "Complete the square; the bracket is smallest (zero) when x makes it zero.",
      traps: [{ spec: { type: "list", values: [p, qv], ordered: true }, feedback: `${M(sq)} is zero when ${M("x")} = ${num(-p)} — the sign flips.` }],
    };
  }
  if (kind === "odd") {
    let b = 5, c = 2;
    for (let i = 0; i < 50; i++) {
      b = rng.pick([-1, 1]) * (2 * rng.int(0, 5) + 1); c = rng.int(-10, 12);
      if (Math.abs(b) > 1 || rng.bool()) break;
    }
    const shown = pstr([c, b, 1], x);
    const qn = 4 * c - b * b; // q = qn/4
    const sq = `(x ${b < 0 ? "-" : "+"} ${fin(Math.abs(b), 2)})^2`;
    return {
      prompt: `Write ${M(shown)} in the form ${M("(x + p)^2 + q")}. Give the values of ${M("p")} and ${M("q")}, ${M("p")} first, as fractions or decimals.`,
      answer: { type: "list", values: [b / 2, qn / 4], ordered: true, display: `p = ${frac(b, 2)}, q = ${frac(qn, 4)}` },
      solution: [
        `Half of ${num(b)} is ${frac(b, 2)}, so start with ${M(sq)}.`,
        `${M(sq)} expands to ${M(`x^2 ${b < 0 ? "-" : "+"} ${term(Math.abs(b), "x")} + ${fin(b * b, 4)}`)}, so subtract ${frac(b * b, 4)}.`,
        `${M(`q = ${c} - ${fin(b * b, 4)} = ${fin(qn, 4)}`)}. So ${M(`${shown} = ${sq} ${qn < 0 ? "-" : "+"} ${fin(Math.abs(qn), 4)}`)}.`,
      ],
      hint: "p is half the x coefficient even when that's a fraction; q = c − p².",
      traps: [{ spec: { type: "list", values: [b / 2, c + (b * b) / 4], ordered: true }, feedback: `You need to subtract ${M("p^2")}, not add it.` }],
    };
  }
  if (kind === "a" || kind === "tpa") {
    let a = 2, p = 3, c = 5;
    for (let i = 0; i < 50; i++) {
      a = rng.int(2, 5); p = rng.nonZero(-5, 5); c = rng.int(-20, 25);
      if (c !== a * p * p) break;
    }
    const b = 2 * a * p, qv = c - a * p * p;
    const shown = pstr([c, b, a], x);
    const steps = [
      `Factor ${a} out of the ${M("x")} terms: ${M(`${a}(x^2 ${p < 0 ? "-" : "+"} ${term(Math.abs(2 * p), "x")}) ${c < 0 ? "-" : "+"} ${Math.abs(c)}`)}.`,
      `Complete the square inside: ${M(`x^2 ${p < 0 ? "-" : "+"} ${term(Math.abs(2 * p), "x")} = (${lin(1, p, x)})^2 - ${p * p}`)}.`,
      `${M(`${a}[(${lin(1, p, x)})^2 - ${p * p}] ${c < 0 ? "-" : "+"} ${Math.abs(c)} = ${a}(${lin(1, p, x)})^2 - ${a * p * p} ${c < 0 ? "-" : "+"} ${Math.abs(c)}`)} = ${M(`${a}(${lin(1, p, x)})^2 ${qv < 0 ? "-" : "+"} ${Math.abs(qv)}`)}.`,
    ];
    if (kind === "a") {
      return {
        prompt: `Write ${M(shown)} in the form ${M("a(x + b)^2 + c")}, where ${M("a")}, ${M("b")} and ${M("c")} are integers. Give ${M("a")}, ${M("b")} and ${M("c")} in that order.`,
        answer: { type: "list", values: [a, p, qv], ordered: true, display: `a = ${a}, b = ${num(p)}, c = ${num(qv)}` },
        solution: steps,
        hint: `Take out ${a} from the first two terms only, then complete the square inside the bracket.`,
        traps: qv !== c - p * p ? [{ spec: { type: "list", values: [a, p, c - p * p], ordered: true }, feedback: `The −${p * p} is inside the bracket, so it gets multiplied by ${a} when you expand: subtract ${a * p * p}.` }] : [],
      };
    }
    return {
      prompt: `By completing the square, find the coordinates of the minimum point of ${M(`y = ${shown}`)}. Give the ${M("x")}-coordinate first.`,
      answer: { type: "list", values: [-p, qv], ordered: true, display: `(${num(-p)}, ${num(qv)})` },
      solution: [...steps, `The squared bracket is 0 when ${M("x")} = ${num(-p)}, so the minimum point is (${num(-p)}, ${num(qv)}).`],
      hint: "Complete the square first — the minimum happens where the bracket equals zero.",
      traps: [{ spec: { type: "list", values: [p, qv], ordered: true }, feedback: `The bracket ${M(`(${lin(1, p, x)})^2`)} is zero when ${M("x")} = ${num(-p)}.` }],
    };
  }
  if (kind === "neg") {
    let b = 6, c = 7;
    for (let i = 0; i < 50; i++) {
      b = 2 * rng.nonZero(-6, 6); c = rng.int(-10, 15);
      if (c + (b / 2) ** 2 !== 0) break;
    }
    const h = b / 2; // −x² + bx + c = c + h² − (x − h)²
    const P = c + h * h, Qv = -h;
    const shown = poly([[c, ""], [b, "x"], [-1, "x^2"]]);
    return {
      prompt: `Write ${M(shown)} in the form ${M("p - (x + q)^2")}. Give the values of ${M("p")} and ${M("q")}, ${M("p")} first.`,
      answer: { type: "list", values: [P, Qv], ordered: true, display: `p = ${num(P)}, q = ${num(Qv)}` },
      solution: [
        `Take out −1 from the ${M("x")} terms: ${M(`${shown} = ${c} - (x^2 ${-b < 0 ? "-" : "+"} ${term(Math.abs(b), "x")})`)}.`,
        `${M(`x^2 ${-b < 0 ? "-" : "+"} ${term(Math.abs(b), "x")} = (${lin(1, -h, "x")})^2 - ${h * h}`)}.`,
        `${M(`${c} - [(${lin(1, -h, "x")})^2 - ${h * h}] = ${P} - (${lin(1, -h, "x")})^2`)}, so ${M("p")} = ${num(P)} and ${M("q")} = ${num(Qv)}.`,
      ],
      hint: "Factor out −1 from the x² and x terms first; watch the sign when you remove the square bracket.",
      traps: [{ spec: { type: "list", values: [c - h * h, Qv], ordered: true }, feedback: `Subtracting ${M(`[(...)^2 - ${h * h}]`)} turns the −${h * h} into +${h * h}.` }, ...(Qv !== 0 ? [{ spec: { type: "list" as const, values: [P, h], ordered: true }, feedback: `Inside the bracket you have ${M(`x ${-h < 0 ? "-" : "+"} ${Math.abs(h)}`)}, so q = ${num(Qv)}.` }] : [])],
    };
  }
  // ahalf: a(x + p)² + q with p a half
  let a = 2, k = 3, c = 1;
  for (let i = 0; i < 50; i++) {
    a = rng.int(2, 3); k = rng.pick([-1, 1]) * (2 * rng.int(0, 3) + 1); c = rng.int(-9, 9);
    if (c !== 0) break;
  }
  const b = a * k; // p = k/2
  const qn = 4 * c - a * k * k; // q = qn/4
  const shown = pstr([c, b, a], x);
  return {
    prompt: `Write ${M(shown)} in the form ${M("a(x + b)^2 + c")}. Give ${M("a")}, ${M("b")} and ${M("c")} in that order, as fractions or decimals where needed.`,
    answer: { type: "list", values: [a, k / 2, qn / 4], ordered: true, display: `a = ${a}, b = ${frac(k, 2)}, c = ${frac(qn, 4)}` },
    solution: [
      `Factor out ${a}: ${M(`${a}(x^2 ${k < 0 ? "-" : "+"} ${term(Math.abs(k), "x")}) ${c < 0 ? "-" : "+"} ${Math.abs(c)}`)}.`,
      `${M(`x^2 ${k < 0 ? "-" : "+"} ${term(Math.abs(k), "x")} = (x ${k < 0 ? "-" : "+"} ${fin(Math.abs(k), 2)})^2 - ${fin(k * k, 4)}`)}.`,
      `Multiply back by ${a}: the constant becomes ${M(`${c} - ${a} * ${fin(k * k, 4)} = ${fin(qn, 4)}`)}.`,
      `So ${M(`${shown} = ${a}(x ${k < 0 ? "-" : "+"} ${fin(Math.abs(k), 2)})^2 ${qn < 0 ? "-" : "+"} ${fin(Math.abs(qn), 4)}`)}.`,
    ],
    hint: "Factor a out of the x-terms only; then halve the new x coefficient.",
    traps: [{ spec: { type: "list", values: [a, k / 2, c - (k * k) / 4], ordered: true }, feedback: `The ${M(`-${fin(k * k, 4)}`)} is inside the bracket — multiply it by ${a} as well.` }],
  };
}

// ===========================================================================
// 8. Function notation
// ===========================================================================
function functionNotation(rng: Rng, tier: Tier): DrillItem {
  const F = rng.pick(["f", "g", "h"]);
  const kind = tier === 1 ? rng.pick(["linval", "sqval", "solvelin"]) : tier === 2 ? rng.pick(["quadval", "solvefrac", "sqsolve", "fracval"]) : rng.pick(["shift", "quadsolve"]);
  if (kind === "linval") {
    const a = rng.pick([-9, -7, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9]), b = rng.nonZero(-12, 12), k = rng.int(-9, -1);
    const fx = lin(a, b);
    const ans = a * k + b;
    return {
      prompt: `${M(`${F}(x) = ${fx}`)}. Work out ${M(`${F}(${k})`)}.`,
      answer: { type: "number", value: ans },
      solution: [`Replace every ${M("x")} with ${num(k)}: ${M(`${F}(${k}) = ${a} * (${k}) ${b < 0 ? "-" : "+"} ${Math.abs(b)}`)}.`, `= ${num(a * k)} ${b < 0 ? "−" : "+"} ${Math.abs(b)} = ${num(ans)}.`],
      hint: `${M(`${F}(${k})`)} means: put x = ${num(k)} into the rule.`,
      traps: a * -k + b !== ans ? [ntrap(a * -k + b, `Keep the negative: ${a} × (${k}) = ${num(a * k)}.`)] : [],
    };
  }
  if (kind === "sqval") {
    const c = rng.nonZero(-12, 12), k = rng.int(2, 9);
    const ans = k * k + c;
    return {
      prompt: `${M(`${F}(x) = x^2 ${c < 0 ? "-" : "+"} ${Math.abs(c)}`)}. Find ${M(`${F}(-${k})`)}.`,
      answer: { type: "number", value: ans },
      solution: [`${M(`${F}(-${k}) = (-${k})^2 ${c < 0 ? "-" : "+"} ${Math.abs(c)}`)}.`, `${M(`(-${k})^2 = ${k * k}`)}, so the answer is ${num(ans)}.`],
      hint: "Put the negative number in brackets before squaring.",
      traps: [ntrap(-k * k + c, `${M(`(-${k})^2 = ${k * k}`)}, not −${k * k}.`)],
    };
  }
  if (kind === "solvelin") {
    let a = 3, b = 2, x = 4;
    for (let i = 0; i < 50; i++) {
      a = rng.int(2, 9); b = rng.nonZero(-15, 15); x = rng.nonZero(-9, 9);
      if (a * x + b !== 0) break;
    }
    const k = a * x + b;
    return {
      prompt: rng.pick([`${M(`${F}(x) = ${lin(a, b)}`)}. Find the value of ${M("x")} for which ${M(`${F}(x) = ${k}`)}.`, `${M(`${F}(x) = ${lin(a, b)}`)}. Given that ${M(`${F}(t) = ${k}`)}, find ${M("t")}.`]),
      answer: { type: "number", value: x },
      solution: [`Set the rule equal to ${num(k)}: ${M(`${lin(a, b)} = ${k}`)}.`, `${M(`${a}x = ${k} ${b < 0 ? "+" : "-"} ${Math.abs(b)} = ${k - b}`)}.`, `${M(`x = ${k - b} / ${a} = ${x}`)}.`],
      hint: `${M(`${F}(x) = ${k}`)} gives you an equation — solve it.`,
      traps: a * k + b !== x ? [ntrap(a * k + b, `That's ${M(`${F}(${k})`)}. Here the OUTPUT is ${num(k)}; you need the input.`)] : [],
    };
  }
  if (kind === "quadval") {
    const a = rng.nonZero(-4, 4), b = rng.nonZero(-9, 9), c = rng.int(-10, 10), k = rng.int(-6, -2);
    const ans = a * k * k + b * k + c;
    const fx = pstr([c, b, a]);
    return {
      prompt: `${M(`${F}(x) = ${fx}`)}. Work out ${M(`${F}(${k})`)}.`,
      answer: { type: "number", value: ans },
      solution: [
        `${M(`${F}(${k}) = ${a} * (${k})^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)} * (${k})${c ? ` ${c < 0 ? "-" : "+"} ${Math.abs(c)}` : ""}`)}.`,
        `${M(`= ${a} * ${k * k} ${b * k < 0 ? "-" : "+"} ${Math.abs(b * k)}${c ? ` ${c < 0 ? "-" : "+"} ${Math.abs(c)}` : ""}`)} = ${num(ans)}.`,
      ],
      hint: "Brackets round the negative, square it first, then multiply.",
      traps: -a * k * k + b * k + c !== ans ? [ntrap(-a * k * k + b * k + c, `${M(`(${k})^2`)} is positive: ${k * k}.`)] : [],
    };
  }
  if (kind === "fracval") {
    let a = 3, b = 1, d = 4, k = -2;
    for (let i = 0; i < 50; i++) {
      a = rng.nonZero(-5, 5); b = rng.nonZero(-9, 9); d = rng.int(2, 7); k = rng.nonZero(-6, 6);
      if (gcd(gcd(Math.abs(a), Math.abs(b)), d) === 1 && (a * k + b) % d !== 0) break;
    }
    const n = a * k + b;
    return {
      prompt: `${M(`${F}(x) = (${lin(a, b)})/${d}`)}. Work out ${M(`${F}(${k})`)}, giving your answer as a fraction in its simplest form.`,
      answer: { type: "fraction", n, d, simplest: true },
      solution: [`${M(`${F}(${k}) = (${a} * ${bm(k)} ${b < 0 ? "-" : "+"} ${Math.abs(b)})/${d} = ${n}/${d}`)}.`, `Simplest form: ${frac(n, d)}.`],
      hint: "Work out the whole numerator first, then divide.",
    };
  }
  if (kind === "solvefrac") {
    let a = 4, b = 3, k = 6;
    for (let i = 0; i < 50; i++) {
      a = rng.int(2, 9); b = rng.nonZero(-12, 12); k = rng.nonZero(-15, 15);
      if ((k - b) % a !== 0 && k - b !== 0) break;
    }
    return {
      prompt: `${M(`${F}(x) = ${lin(a, b)}`)}. Solve ${M(`${F}(x) = ${k}`)}, giving ${M("x")} as a fraction in its simplest form.`,
      answer: { type: "fraction", n: k - b, d: a, simplest: true },
      solution: [`${M(`${lin(a, b)} = ${k}`)}.`, `${M(`${a}x = ${k - b}`)}, so ${M(`x = ${fin(k - b, a)}`)}.`],
      hint: "Set the expression equal to the output and solve.",
      traps: [{ spec: { type: "fraction", n: k + b, d: a }, feedback: `To undo ${b < 0 ? "−" : "+"} ${Math.abs(b)} you must ${b < 0 ? "add" : "subtract"} ${Math.abs(b)}.` }],
    };
  }
  if (kind === "sqsolve") {
    const c = rng.int(-20, 20), r = rng.int(2, 12);
    const k = r * r + c;
    return {
      prompt: `${M(`${F}(x) = x^2 ${c < 0 ? "-" : "+"} ${Math.abs(c)}`)}${c === 0 ? "" : ""}. Find both values of ${M("x")} for which ${M(`${F}(x) = ${k}`)}.`,
      answer: { type: "list", values: [r, -r], display: `x = ${r} or x = −${r}` },
      solution: [`${M(`x^2 ${c < 0 ? "-" : "+"} ${Math.abs(c)} = ${k}`)}, so ${M(`x^2 = ${r * r}`)}.`, `${M(`x = +- ${r}`)}: both ${r} and −${r} square to ${r * r}.`],
      hint: "Get x² on its own — and remember a square has two square roots.",
      traps: [ntrap(r, `There are two answers: −${r} squared is also ${r * r}.`)],
    };
  }
  if (kind === "shift") {
    const b = rng.nonZero(-7, 7), c = rng.int(-9, 9), k = rng.nonZero(-4, 4);
    const fx = pstr([c, b, 1]);
    const res = padd(padd(pmul([k, 1], [k, 1]), [0, 0, 0]), [b * k, b], 1);
    res[0] += c;
    const expr = pstr(res, "x");
    const inner = lin(1, k);
    return {
      prompt: `${M(`${F}(x) = ${fx}`)}. Find and simplify an expression for ${M(`${F}(${inner})`)}.`,
      answer: { type: "expression", expr, form: "expanded" },
      solution: [
        `Replace every ${M("x")} with ${M(`(${inner})`)}: ${M(`(${inner})^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)}(${inner})${c ? ` ${c < 0 ? "-" : "+"} ${Math.abs(c)}` : ""}`)}.`,
        `${M(`(${inner})^2 = ${pstr(pmul([k, 1], [k, 1]))}`)} and ${M(`${b}(${inner}) = ${lin(b, b * k)}`)}.`,
        `Collect like terms: ${M(expr)}.`,
      ],
      hint: `Every x becomes the whole bracket (${inner}) — then expand.`,
      traps: [etrap(pstr([c + k, b, 1]), `${M(`${F}(${inner})`)} is not ${M(`${F}(x) ${k < 0 ? "-" : "+"} ${Math.abs(k)}`)} — replace every x with the bracket.`)],
    };
  }
  // quadsolve: f(x) = k gives a factorisable quadratic
  let r = 2, s = -5, k = 4;
  for (let i = 0; i < 50; i++) {
    r = rng.nonZero(-8, 8); s = rng.nonZero(-8, 8); k = rng.nonZero(-10, 10);
    if (r !== s && r + s !== 0) break;
  }
  const b = -(r + s), c = r * s + k;
  const fx = pstr([c, b, 1]);
  return {
    prompt: `${M(`${F}(x) = ${fx}`)}. Solve ${M(`${F}(x) = ${k}`)}.`,
    answer: { type: "list", values: [r, s], display: `x = ${num(r)} or x = ${num(s)}` },
    solution: [
      `${M(`${fx} = ${k}`)}, so ${M(`${pstr([c - k, b, 1])} = 0`)}.`,
      `Factorise: ${M(`${bl(1, -r)}${bl(1, -s)} = 0`)}.`,
      `So ${M("x")} = ${num(r)} or ${M("x")} = ${num(s)}.`,
    ],
    hint: "Rearrange so one side is 0, then factorise.",
    traps: [{ spec: { type: "list", values: [-r, -s] }, feedback: "Signs: if (x − 3) = 0 then x = +3." }],
  };
}

// ===========================================================================
// 9. Harder factorising (H+)
// ===========================================================================
function harderFactorise(rng: Rng, tier: Tier): DrillItem {
  type K = "kdots" | "kxdots" | "four" | "quartic" | "sqdiff";
  const kind: K = tier === 1 ? rng.pick<K>(["kdots", "four"]) : tier === 2 ? rng.pick<K>(["kdots", "kxdots", "four", "sqdiff"]) : rng.pick<K>(["kxdots", "quartic", "sqdiff"]);
  const v = rng.pick(["x", "y", "a", "t", "m"]);
  const pm = (n: number) => [binAlts(v, n), binAlts(v, -n)];
  if (kind === "kdots" || kind === "kxdots") {
    let k = 2, n = 5;
    for (let i = 0; i < 20; i++) {
      k = rng.int(2, 7); n = rng.int(1, 9);
      if (k * n * n > 4) break;
    }
    const x = kind === "kxdots";
    const shown = x ? `${k}${v}^3 - ${k * n * n}${v}` : `${k}${v}^2 - ${k * n * n}`;
    const pre = x ? [`${k}${v}`, `${k}*${v}`] : [`${k}`];
    const display = `${pre[0]}(${v} + ${n})(${v} - ${n})`;
    const partial = x ? `${k}${v}(${v}^2-${n * n})` : `${k}(${v}^2-${n * n})`;
    return {
      prompt: `Factorise fully ${M(shown)}.`,
      answer: { type: "text", accept: factorVariants(pre, pm(n)), display: M(display) },
      solution: [
        `Take out the common factor ${M(pre[0])}: ${M(`${shown} = ${partial.replace("^2-", "^2 - ")}`)}.`,
        `${M(`${v}^2 - ${n * n}`)} is a difference of two squares: ${M(`(${v} + ${n})(${v} - ${n})`)}.`,
        `So ${M(shown)} = ${M(display)}.`,
      ],
      hint: "Common factor first — then look at what's left in the bracket.",
      traps: [etrap(partial, `Not fully factorised: ${M(`${v}^2 - ${n * n}`)} is a difference of two squares and factorises again. (If you did factorise fully, type it as a product of brackets like ${display.replace(/ /g, "")}.)`)],
    };
  }
  if (kind === "four") {
    const n = rng.int(1, 4);
    const n2 = n * n;
    const shown = `${v}^4 - ${n2 * n2}`;
    const display = `(${v}^2 + ${n2})(${v} + ${n})(${v} - ${n})`;
    const partial = `(${v}^2+${n2})(${v}^2-${n2})`;
    return {
      prompt: `Factorise fully ${M(shown)}.`,
      answer: { type: "text", accept: factorVariants([], [[`${v}^2+${n2}`, `${n2}+${v}^2`], ...pm(n)]), display: M(display) },
      solution: [
        `${M(shown)} = ${M(`(${v}^2)^2 - ${n2}^2`)} — a difference of two squares.`,
        `So it equals ${M(`(${v}^2 + ${n2})(${v}^2 - ${n2})`)}.`,
        `${M(`${v}^2 - ${n2}`)} is ANOTHER difference of two squares; ${M(`${v}^2 + ${n2}`)} does not factorise.`,
        `Answer: ${M(display)}.`,
      ],
      hint: `Think of ${M(`${v}^4`)} as ${M(`(${v}^2)^2`)}.`,
      traps: [etrap(partial, `Keep going: ${M(`${v}^2 - ${n2}`)} is a difference of two squares too. (If you did factorise fully, type it like ${display.replace(/ /g, "")}.)`)],
    };
  }
  if (kind === "quartic") {
    let r = 1, s = 2;
    for (let i = 0; i < 20; i++) {
      r = rng.int(1, 4); s = rng.int(1, 5);
      if (r !== s) break;
    }
    if (r === s) s = r + 1;
    const B = r * r + s * s, C = r * r * s * s;
    const shown = `${v}^4 - ${B}${v}^2 + ${C}`;
    const display = `(${v} + ${r})(${v} - ${r})(${v} + ${s})(${v} - ${s})`;
    const partial = `(${v}^2-${r * r})(${v}^2-${s * s})`;
    return {
      prompt: `Factorise fully ${M(shown)}.`,
      answer: { type: "text", accept: factorVariants([], [...pm(r), ...pm(s)]), display: M(display) },
      solution: [
        `This is a quadratic in disguise: let ${M(`u = ${v}^2`)}, so it becomes ${M(`u^2 - ${B}u + ${C}`)}.`,
        `${M(`u^2 - ${B}u + ${C} = (u - ${r * r})(u - ${s * s})`)} because ${r * r} × ${s * s} = ${C} and ${r * r} + ${s * s} = ${B}.`,
        `Put ${M(`${v}^2`)} back: ${M(`(${v}^2 - ${r * r})(${v}^2 - ${s * s})`)} — both are differences of two squares.`,
        `Answer: ${M(display)}.`,
      ],
      hint: `Substitute ${M(`u = ${v}^2`)} to see an ordinary quadratic.`,
      traps: [etrap(partial, `Not fully factorised — each bracket ${M(`${v}^2 - k^2`)} is a difference of two squares. (If you did factorise fully, type it like ${display.replace(/ /g, "")}.)`)],
    };
  }
  // sqdiff: (v + a)² − (v + b)², a > b
  let a = 3, b = -1;
  for (let i = 0; i < 50; i++) {
    a = rng.int(-4, 9); b = rng.int(-9, 6);
    if (a - b >= 2 && a !== 0 && b !== 0 && a + b !== 0) break;
  }
  if (!(a - b >= 2 && a + b !== 0 && a !== 0 && b !== 0)) { a = 5; b = 2; }
  const d = a - b, sum = a + b; // = d(2v + sum)
  const shown = `(${lin(1, a, v)})^2 - (${lin(1, b, v)})^2`;
  let accept: string[], display: string;
  if (sum % 2 === 0) {
    const K = 2 * d, m = sum / 2;
    display = `${K}(${lin(1, m, v)})`;
    accept = factorVariants([String(K)], [binAlts(v, m)]);
  } else {
    display = `${d === 1 ? "" : d}(${lin(2, sum, v)})`;
    const alts = [`2${v}${sum < 0 ? "-" : "+"}${Math.abs(sum)}`, `${sum}+2${v}`];
    accept = d === 1 ? [...alts, ...alts.map((x) => `(${x})`)] : factorVariants([String(d)], [alts]);
  }
  const expanded = lin(2 * d, a * a - b * b, v);
  return {
    prompt: `Factorise fully ${M(shown)}.`,
    answer: { type: "text", accept, display: M(display) },
    solution: [
      `Use ${M("A^2 - B^2 = (A + B)(A - B)")} with ${M(`A = ${lin(1, a, v)}`)} and ${M(`B = ${lin(1, b, v)}`)}.`,
      `${M(`A + B = ${lin(2, sum, v)}`)} and ${M(`A - B = ${d}`)} (the ${M(v)}'s cancel).`,
      sum % 2 === 0 ? `${M(`${d}(${lin(2, sum, v)})`)} — take out the common factor 2 from the bracket: ${M(display)}.` : `So the answer is ${M(display)}.`,
      `Check: expanding both squares and subtracting gives ${M(expanded)}.`,
    ],
    hint: "Treat each bracket as one thing: it's A² − B².",
    traps: [
      ...(sum % 2 === 0 ? [etrap(`${d}(2${v}${sum < 0 ? "-" : "+"}${Math.abs(sum)})`, "Not fully factorised — the bracket still has a common factor of 2.")] : []),
      etrap(expanded, `That's the expanded form. The question says factorise — use ${M("A^2 - B^2")}.`),
    ],
  };
}

// ===========================================================================
// 10. Algebraic proof: expand and simplify
// ===========================================================================
function proofSimplify(rng: Rng, tier: Tier): DrillItem {
  const n = rng.pick(["n", "k", "m"]);
  const kind = tier === 1 ? "sym" : tier === 2 ? rng.pick(["sym", "odd", "consec"]) : rng.pick(["odd", "gen", "consec3"]);
  if (kind === "sym") {
    const a = rng.int(1, 9);
    const expr = `${4 * a}${n}`;
    const shown = `(${n} + ${a})^2 - (${n} - ${a})^2`;
    return {
      prompt: rng.pick([`Expand and simplify ${M(shown)}. (This shows the expression is always a multiple of ${4 * a} when ${M(n)} is an integer.)`, `Show that ${M(shown)} simplifies to a single term: expand and simplify it.`]),
      answer: { type: "expression", expr, form: "simplified" },
      solution: [
        `${M(`(${n} + ${a})^2 = ${n}^2 + ${2 * a}${n} + ${a * a}`)} and ${M(`(${n} - ${a})^2 = ${n}^2 - ${2 * a}${n} + ${a * a}`)}.`,
        `Subtract: ${M(`${n}^2 + ${2 * a}${n} + ${a * a} - ${n}^2 + ${2 * a}${n} - ${a * a}`)}.`,
        `${M(`= ${expr}`)} = ${4 * a} × ${M(n)}, a multiple of ${4 * a}.`,
      ],
      hint: "Expand both squares fully, then subtract every term of the second.",
      traps: [etrap("0", "The middle terms don't cancel — subtracting −" + `${2 * a}${n}` + " gives +" + `${2 * a}${n}` + "."), etrap(`${2 * a * a}`, "The square terms cancel, but the middle terms add. Expand carefully.")],
    };
  }
  if (kind === "odd") {
    const a = 2 * rng.int(0, 4) + 1, b = 2 * rng.int(0, 4) + 1;
    const res = [a * a - b * b, 4 * (a + b)]; // (2n+a)² − (2n−b)² = 4(a+b)n + a² − b²
    const expr = pstr(res, n);
    const g = gcd(res[0], res[1]);
    const shown = `(2${n} + ${a})^2 - (2${n} - ${b})^2`;
    return {
      prompt: `${M(`2${n} + ${a}`)} and ${M(`2${n} - ${b}`)} are odd numbers. Expand and simplify ${M(shown)}.`,
      answer: { type: "expression", expr, form: "simplified" },
      solution: [
        `${M(`(2${n} + ${a})^2 = 4${n}^2 + ${4 * a}${n} + ${a * a}`)}.`,
        `${M(`(2${n} - ${b})^2 = 4${n}^2 - ${4 * b}${n} + ${b * b}`)}.`,
        `Subtract: the ${M(`4${n}^2`)} terms cancel, leaving ${M(expr)}.`,
        a === b ? `${M(expr)} = ${8 * a} × ${M(n)}, so it is always a multiple of ${8 * a}.` : `Take out the common factor: ${M(`${expr} = ${g}(${pstr([res[0] / g, res[1] / g], n)})`)}, so it is always a multiple of ${g}.`,
      ],
      hint: "(2n + a)² = 4n² + 4an + a². Expand both, then subtract.",
      traps: [etrap(pstr([a * a - b * b, 2 * (a + b)], n), `Squaring ${M(`2${n} + ${a}`)} gives a middle term of ${M(`2 * 2${n} * ${a} = ${4 * a}${n}`)}.`)],
    };
  }
  if (kind === "consec") {
    const expr = "1";
    return {
      prompt: rng.pick([`Expand and simplify ${M(`(${n} + 1)^2 - ${n}(${n} + 2)`)}.`, `For consecutive integers ${M(n)}, ${M(`${n} + 1`)}, ${M(`${n} + 2`)}: expand and simplify ${M(`(${n} + 1)^2 - ${n}(${n} + 2)`)}.`, `Simplify ${M(`(${n} + 1)^2 - ${n}(${n} + 2)`)} and say what you notice.`]),
      answer: { type: "number", value: 1 },
      solution: [`${M(`(${n} + 1)^2 = ${n}^2 + 2${n} + 1`)} and ${M(`${n}(${n} + 2) = ${n}^2 + 2${n}`)}.`, `Subtract: ${M(`${n}^2 + 2${n} + 1 - ${n}^2 - 2${n} = 1`)}.`, "The square of the middle number is always 1 more than the product of its neighbours."],
      hint: "Expand both parts, then subtract.",
      traps: [ntrap(-1, "Check the subtraction order: the square comes first.")],
    };
  }
  if (kind === "consec3") {
    const a = rng.int(1, 6);
    // (n+a)² + n² + (n−a)² − 3n² = 2a²
    const shown = `(${n} + ${a})^2 + ${n}^2 + (${n} - ${a})^2 - 3${n}^2`;
    return {
      prompt: `Expand and simplify ${M(shown)}.`,
      answer: { type: "number", value: 2 * a * a },
      solution: [
        `${M(`(${n} + ${a})^2 + (${n} - ${a})^2 = 2${n}^2 + ${2 * a * a}`)} — the ${M(`${2 * a}${n}`)} terms cancel.`,
        `Add ${M(`${n}^2`)} and subtract ${M(`3${n}^2`)}: the ${M(n)} terms all cancel, leaving ${2 * a * a}.`,
      ],
      hint: "Expand each square; most terms cancel.",
      traps: [ntrap(a * a * 2 + 4 * a, "The middle terms of the two squares are opposite in sign — they cancel.")],
    };
  }
  // gen: (pn + a)² − (pn − a)² = 4pan
  const p = rng.int(2, 5), a = rng.int(1, 7);
  const expr = `${4 * p * a}${n}`;
  const shown = `(${p}${n} + ${a})^2 - (${p}${n} - ${a})^2`;
  return {
    prompt: `Expand and simplify ${M(shown)}. What does your answer tell you is always true for integer ${M(n)}?`,
    answer: { type: "expression", expr, form: "simplified" },
    solution: [
      `${M(`(${p}${n} + ${a})^2 = ${p * p}${n}^2 + ${2 * p * a}${n} + ${a * a}`)}; ${M(`(${p}${n} - ${a})^2 = ${p * p}${n}^2 - ${2 * p * a}${n} + ${a * a}`)}.`,
      `Subtract: ${M(expr)}.`,
      `So it is always a multiple of ${4 * p * a}. (Quicker: ${M("A^2 - B^2 = (A + B)(A - B)")} = ${M(`(${2 * p}${n})(${2 * a})`)}.)`,
    ],
    hint: "Either expand both squares, or use A² − B² = (A + B)(A − B).",
    traps: [etrap(`${2 * p * a}${n}`, "You've only counted one of the middle terms: subtracting the negative middle term doubles it.")],
  };
}

// ===========================================================================
export const drills: Drill[] = [
  { id: `${TOPIC}.expand-two-brackets`, topicId: TOPIC, title: "Expand and simplify two brackets", level: 1, guideRef: "expanding-brackets", generate: expandDouble },
  { id: `${TOPIC}.factorise-x2-bx-c`, topicId: TOPIC, title: "Factorise x² + bx + c", level: 1, guideRef: "factorising-quadratics", generate: factoriseSimple },
  { id: `${TOPIC}.difference-of-two-squares`, topicId: TOPIC, title: "Factorise a difference of two squares", level: 1, guideRef: "factorising-quadratics", generate: dots },
  { id: `${TOPIC}.substitute-into-formulae`, topicId: TOPIC, title: "Substitute negatives, decimals and fractions into formulae", level: 1, guideRef: "substitution-formulae", generate: substitution },
  { id: `${TOPIC}.expand-three-brackets`, topicId: TOPIC, title: "Expand three brackets", level: 2, guideRef: "expanding-brackets", generate: expandTriple },
  { id: `${TOPIC}.factorise-a-not-1`, topicId: TOPIC, title: "Factorise ax² + bx + c when a ≠ 1", level: 2, guideRef: "factorising-quadratics", generate: factoriseANot1 },
  { id: `${TOPIC}.complete-the-square`, topicId: TOPIC, title: "Complete the square (and find the turning point)", level: 2, guideRef: "completing-the-square", generate: completeSquare },
  { id: `${TOPIC}.function-notation`, topicId: TOPIC, title: "Use function notation: f(3), f(x) = k, f(x + 1)", level: 2, guideRef: "function-notation-basics", generate: functionNotation },
  { id: `${TOPIC}.harder-factorising`, topicId: TOPIC, title: "Factorise fully: harder expressions (H+)", level: 3, guideRef: "harder-algebra", generate: harderFactorise },
  { id: `${TOPIC}.algebraic-proof-simplify`, topicId: TOPIC, title: "Expand and simplify for an algebraic proof (H+)", level: 3, guideRef: "harder-algebra", generate: proofSimplify },
];
