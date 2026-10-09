// Procedural skill drills — Linear & Simultaneous Equations (topic "solving-equations").
// Every answer is computed exactly from integers (money in cents) and bounded
// rejection loops keep the numbers friendly and rule out degenerate cases
// (zero coefficients, parallel lines, fractions that cancel in the prompt).
import type { Drill, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { gcd, lcm, num, br, poly, simplify, term } from "./helpers.ts";

const TOPIC = "solving-equations";

/* ------------------------------------------------------------------------ */
/* Shared helpers                                                            */
/* ------------------------------------------------------------------------ */

/** Wrap in maths markup. */
const M = (s: string | number): string => `{{${s}}}`;

/** a·v + b as ASCII for {{ }}: lin(3, -2) → "3x - 2". */
const lin = (a: number, b: number, v = "x"): string => poly([[a, v], [b, ""]]);

/** b + a·v with the number first: linC(-3, 20) → "20 - 3x". */
const linC = (a: number, b: number, v = "x"): string => poly([[b, ""], [a, v]]);

/** A side of an equation written naturally: "5x + 2", or "17 − 3x" when the x-term is negative. */
const side = (a: number, b: number, v = "x"): string => (a < 0 && b > 0 ? linC(a, b, v) : lin(a, b, v));

/** m(expr) — or just expr when m = 1. */
const times = (m: number, e: string): string => (m === 1 ? e : `${m}(${e})`);

/** Rational → ASCII for use inside {{ }}: 7/2 → "7/2", −6/3 → "-2". */
function ratStr(n: number, d: number): string {
  const [p, q] = simplify(n, d);
  return q === 1 ? `${p}` : `${p}/${q}`;
}

/** Plain-text substitution sum: [[3, 2], [-5, -1]] → "3 × 2 − 5 × (−1)". */
function plainSum(pairs: Array<[number, number]>): string {
  return pairs
    .filter(([c]) => c !== 0)
    .map(([c, v], i) => {
      const mag = Math.abs(c) === 1 ? br(v) : `${num(Math.abs(c))} × ${br(v)}`;
      if (i === 0) return c < 0 ? `−${mag}` : mag;
      return `${c < 0 ? "−" : "+"} ${mag}`;
    })
    .join(" ");
}

const numTrap = (value: number, feedback: string): Trap => ({ spec: { type: "number", value }, feedback });
const listTrap = (values: number[], feedback: string): Trap => ({ spec: { type: "list", values, ordered: true }, feedback });

/** Round to 3 significant figures. */
const sig3 = (v: number): number => Number(v.toPrecision(3));

interface Person {
  name: string;
  sub: string;
  Sub: string;
  pos: string;
}
const NAMES: Array<[string, "f" | "m"]> = [
  ["Aisha", "f"], ["Wei Ling", "f"], ["Arjun", "m"], ["Priya", "f"], ["Marcus", "m"], ["Siti", "f"],
  ["Ethan", "m"], ["Mei", "f"], ["Ravi", "m"], ["Hana", "f"], ["Jun", "m"], ["Zara", "f"], ["Olivia", "f"], ["Kenji", "m"],
];
function person(rng: Rng, not?: string): Person {
  for (let i = 0; i < 30; i++) {
    const [name, g] = rng.pick(NAMES);
    if (name === not) continue;
    return g === "f" ? { name, sub: "she", Sub: "She", pos: "her" } : { name, sub: "he", Sub: "He", pos: "his" };
  }
  return { name: "Ravi", sub: "he", Sub: "He", pos: "his" };
}

/** "Subtract 5 from both sides" / "Add 5 to both sides" — the inverse of "+ b". */
function undo(b: number): string {
  return b > 0 ? `Subtract ${num(b)} from both sides` : `Add ${num(-b)} to both sides`;
}

/** Move a c·v term: "Subtract {{3x}} from both sides" / "Add {{2x}} to both sides". */
function moveX(c: number, v: string): string {
  return c > 0 ? `Subtract ${M(term(c, v))} from both sides` : `Add ${M(term(-c, v))} to both sides`;
}

/** Final division step for A·v = R (A ≠ 0), simplifying a fractional answer. */
function divideStep(A: number, R: number, v: string): string {
  if (A === 1) return `So ${M(`${v} = ${R}`)}.`;
  if (R % A === 0) return `Divide both sides by ${num(A)}: ${v} = ${num(R)} ÷ ${br(A)} = ${num(R / A)}.`;
  const [p, q] = simplify(R, A);
  return `Divide both sides by ${num(A)}: ${M(`${v} = ${ratStr(p, q)}`)}.`;
}

/**
 * Steps to solve A·v + B = C·v + D (A ≠ C), collecting the unknown on the side
 * with the larger coefficient so it stays positive.
 */
function solveSteps(A: number, B: number, C: number, D: number, v = "x"): string[] {
  const out: string[] = [];
  const k = A - C;
  if (k > 0) {
    if (C !== 0) out.push(`${moveX(C, v)}: ${M(`${lin(k, B, v)} = ${D}`)}.`);
    if (B !== 0) out.push(`${undo(B)}: ${M(`${term(k, v)} = ${D - B}`)}.`);
    if (k !== 1 || out.length === 0) out.push(divideStep(k, D - B, v));
  } else {
    if (A !== 0) out.push(`${moveX(A, v)} (the right side has more ${v}'s): ${M(`${B} = ${lin(-k, D, v)}`)}.`);
    if (D !== 0) out.push(`${undo(D)}: ${M(`${B - D} = ${term(-k, v)}`)}.`);
    if (k !== -1 || out.length === 0) out.push(divideStep(-k, B - D, v));
  }
  return out;
}

/** Answer spec for the exact value n/d: a whole number, or a simplest-form fraction. */
function valueSpec(n: number, d = 1): AnswerSpec {
  const [p, q] = simplify(n, d);
  return q === 1 ? { type: "number", value: p } : { type: "fraction", n: p, d: q, simplest: true, allowDecimal: true };
}

/** Collects numeric traps for the answer n/d, skipping repeats, non-rationals and the answer itself. */
function trapper(ansN: number, ansD = 1) {
  const traps: Trap[] = [];
  const [an, ad] = simplify(ansN, ansD);
  const seen = new Set<string>([`${an}/${ad}`]);
  const add = (n: number, d: number, feedback: string) => {
    if (!Number.isInteger(n) || !Number.isInteger(d) || d === 0 || traps.length >= 3) return;
    const [p, q] = simplify(n, d);
    const key = `${p}/${q}`;
    if (seen.has(key)) return;
    seen.add(key);
    traps.push({ spec: q === 1 ? { type: "number", value: p } : { type: "fraction", n: p, d: q, allowDecimal: true }, feedback });
  };
  return { traps, add };
}

/** Expression trap list, skipping exact duplicates of the answer string. */
function exprTraps(answer: string, list: Array<[string, string]>): Trap[] {
  return list.filter(([e]) => e !== answer).map(([expr, feedback]) => ({ spec: { type: "expression", expr }, feedback }));
}

/** Letter pairs [other, subject] for rearranging drills (no letter clashes, no "pi"). */
const PAIRS: Array<[string, string]> = [["y", "x"], ["p", "q"], ["w", "t"], ["k", "m"], ["s", "r"], ["h", "n"], ["v", "u"], ["a", "b"]];

/* --------------------------- simultaneous helpers ------------------------- */

/** "3x + 2y = 17"-style ASCII (constant shown via `cs`). */
function eq2(a: number, b: number, c: number, vx: string, vy: string, cs: (v: number) => string = (v) => String(v)): string {
  return `${poly([[a, vx], [b, vy]])} = ${cs(c)}`;
}

/**
 * Solve a·X + b·Y = c, d·X + e·Y = f (integer solution in scaled units, ae − bd ≠ 0)
 * with full elimination steps. `cs` formats constants (e.g. cents → dollars).
 */
function solve2(
  e1: [number, number, number],
  e2: [number, number, number],
  vx: string,
  vy: string,
  l1: string,
  l2: string,
  cs: (v: number) => string = (v) => num(v),
  swapped = false,
): { steps: string[]; x: number; y: number } {
  const [a, b, c] = e1;
  const [d, e, f] = e2;
  // Eliminate whichever letter needs the smaller multipliers (or is already missing).
  const yEasy = b === 0 || e === 0;
  const xEasy = a === 0 || d === 0;
  if (!swapped && !yEasy && (xEasy || lcm(Math.abs(a), Math.abs(d)) < lcm(Math.abs(b), Math.abs(e)))) {
    const r = solve2([b, a, c], [e, d, f], vy, vx, l1, l2, cs, true);
    return { steps: r.steps, x: r.y, y: r.x };
  }
  const det = a * e - b * d;
  const x = (c * e - b * f) / det;
  const y = (a * f - c * d) / det;
  const csm = (v: number) => cs(v).replace(/−/g, "-");
  /** coefficient × value for substitution inside {{ }}: "3 * (-2)", "-(4.50)", "5". */
  const sv = (k: number, v: number): string => {
    const p = v < 0 ? `(${csm(v)})` : csm(v);
    return k === 1 ? p : k === -1 ? `-${p}` : `${k} * ${p}`;
  };
  /** Two signed parts joined in the original (x then y) order. */
  const pair = (px: [number, string], py: [number, string]): string => {
    const [f1, f2] = swapped ? [py, px] : [px, py];
    if (f1[0] === 0) return `${f2[0] < 0 ? "-" : ""}${f2[1]}`;
    return `${f1[0] < 0 ? "-" : ""}${f1[1]} ${f2[0] < 0 ? "-" : "+"} ${f2[1]}`;
  };
  const eqD = (p: number, q: number, r: number) => (swapped ? eq2(q, p, r, vy, vx, csm) : eq2(p, q, r, vx, vy, csm));
  const steps: string[] = [];
  if (yEasy) {
    const own = b === 0;
    const p = own ? a : d, q = own ? d : a, r = own ? e : b, lab = own ? l1 : l2;
    const cOwn = own ? c : f, cOther = own ? f : c, other = own ? l2 : l1;
    steps.push(`${lab} has no ${vy}-term: ${M(`${term(p, vx)} = ${csm(cOwn)}`)}, so ${vx} = ${cs(x)}.`);
    steps.push(`Substitute into ${other}: ${M(`${pair([q, sv(Math.abs(q), x)], [r, term(Math.abs(r), vy)])} = ${csm(cOther)}`)}, so ${vy} = ${cs(y)}.`);
    return { steps, x, y };
  }
  const L = lcm(Math.abs(b), Math.abs(e));
  const m1 = L / Math.abs(b);
  const m2 = L / Math.abs(e);
  const same = b * m1 === e * m2;
  const K = same ? m1 * a - m2 * d : m1 * a + m2 * d;
  const R = same ? m1 * c - m2 * f : m1 * c + m2 * f;
  if (m1 !== 1 || m2 !== 1) {
    const parts: string[] = [];
    if (m1 !== 1) parts.push(`${l1} × ${m1}: ${M(eqD(m1 * a, m1 * b, m1 * c))}`);
    if (m2 !== 1) parts.push(`${l2} × ${m2}: ${M(eqD(m2 * d, m2 * e, m2 * f))}`);
    steps.push(`Make the ${vy}-coefficients match. ${parts.join("; ")}.`);
  }
  steps.push(
    `The ${vy}-terms have ${same ? "the same sign, so subtract" : "opposite signs, so add"}: ${M(`${term(K, vx)} = ${csm(R)}`)}${K === 1 ? "" : `, so ${vx} = ${cs(R)} ÷ ${br(K)} = ${cs(x)}`}.`,
  );
  steps.push(
    `Substitute ${vx} = ${cs(x)} into ${l1}: ${M(`${pair([a, sv(Math.abs(a), x)], [b, term(Math.abs(b), vy)])} = ${csm(c)}`)}, so ${M(`${term(b, vy)} = ${csm(c - a * x)}`)}${b === 1 ? "" : ` and ${vy} = ${cs(y)}`}.`,
  );
  return { steps, x, y };
}

/* ------------------------------------------------------------------------ */
/* Drills                                                                    */
/* ------------------------------------------------------------------------ */

export const drills: Drill[] = [
  /* 1 ---------------------------------------------------------------- */
  {
    id: `${TOPIC}.both-sides-brackets`,
    topicId: TOPIC,
    title: "Solve equations with x on both sides and brackets",
    level: 1,
    guideRef: "linear-equations",
    generate(rng, tier) {
      const v = tier === 1 ? "x" : rng.pick(["x", "x", "y", "n", "t"]);
      for (let i = 0; i < 300; i++) {
        const form = tier === 1 ? rng.pick(["plain", "plain", "bracket"]) : rng.pick(["plain", "bracket", "two", "minus"]);
        let A = 0, B = 0, C = 0, D = 0;
        let shown = "";
        let expand = "";
        let minusTrapB: number | null = null;
        if (form === "plain") {
          A = rng.int(2, 9);
          C = tier === 1 ? rng.int(1, 8) : rng.pick([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7]);
          B = tier === 1 ? rng.int(1, 15) : rng.nonZero(-15, 18);
          D = tier === 1 ? rng.int(1, 30) : rng.nonZero(-20, 30);
          if (rng.bool()) [A, B, C, D] = [C, D, A, B];
          shown = `${side(A, B, v)} = ${side(C, D, v)}`;
        } else if (form === "bracket") {
          const p = rng.int(2, tier === 1 ? 5 : 7), r = tier === 1 ? 1 : rng.int(1, 3), q = rng.nonZero(-8, 9);
          if (gcd(r, q) !== 1) continue;
          A = p * r; B = p * q;
          C = tier === 1 ? rng.int(1, 6) : rng.pick([-3, -2, -1, 1, 2, 3, 4, 5]);
          D = rng.nonZero(-20, 30);
          shown = `${p}(${lin(r, q, v)}) = ${side(C, D, v)}`;
          expand = `Expand the bracket: ${M(`${lin(A, B, v)} = ${side(C, D, v)}`)}.`;
        } else if (form === "two") {
          const p = rng.int(2, 6), q = rng.nonZero(-7, 8), s = rng.int(2, 6), u = rng.nonZero(-7, 8), r = rng.int(1, 3), t = rng.int(1, 3);
          if (gcd(r, q) !== 1 || gcd(t, u) !== 1 || p === s) continue;
          A = p * r; B = p * q; C = s * t; D = s * u;
          shown = `${p}(${lin(r, q, v)}) = ${s}(${lin(t, u, v)})`;
          expand = `Expand both brackets: ${M(`${lin(A, B, v)} = ${lin(C, D, v)}`)}.`;
        } else {
          // p(rx + q) − s(x + u) = d
          const p = rng.int(2, 7), r = rng.int(1, 3), q = rng.nonZero(-6, 8), s = rng.int(2, 5), u = rng.nonZero(-6, 8);
          if (gcd(r, q) !== 1) continue;
          A = p * r - s; B = p * q - s * u; C = 0; D = rng.nonZero(-20, 40);
          shown = `${p}(${lin(r, q, v)}) - ${s}(${lin(1, u, v)}) = ${D}`;
          expand = `Expand: ${M(`${poly([[p * r, v], [p * q, ""], [-s, v], [-s * u, ""]])} = ${D}`)} (note ${M(`-${s} * ${br(u).replace(/−/g, "-")} = ${-s * u}`)}). Collect: ${M(`${lin(A, B, v)} = ${D}`)}.`;
          minusTrapB = p * q + s * u;
        }
        const k = A - C;
        if (k === 0 || A === 0) continue;
        const R = D - B;
        if (R === 0) continue;
        const whole = R % k === 0;
        const wantFrac = tier === 3 && rng.bool(0.45);
        if (wantFrac ? whole : !whole) continue;
        if (Math.abs(R / k) > 20) continue;
        const { traps, add } = trapper(R, k);
        add(D + B, k, `Check the sign when you move ${num(Math.abs(B))} across — do the opposite operation to both sides.`);
        if (C !== 0) add(R, A + C, `To collect the ${v}-terms, subtract ${M(term(C, v))} from both sides — don't add it.`);
        if (minusTrapB !== null) add(D - minusTrapB, k, "A minus sign in front of a bracket multiplies *every* term inside — the last term changes sign.");
        const steps = [expand, ...solveSteps(A, B, C, D, v)].filter((s) => s);
        steps.push(`Check: substitute ${v} = ${R % k === 0 ? num(R / k) : M(ratStr(R, k))} into the original equation — both sides should match.`);
        return {
          prompt: `Solve ${M(shown)}.${wantFrac ? " Give your answer as a fraction in its simplest form." : ""}`,
          answer: valueSpec(R, k),
          solution: steps,
          hint: expand ? "Expand the bracket(s) first, then collect the letter terms on the side with more of them." : `Get the ${v}-terms on one side (the side with more ${v}'s) and the numbers on the other.`,
          traps,
        };
      }
      return {
        prompt: `Solve ${M("5x + 3 = 2x + 18")}.`,
        answer: { type: "number", value: 5 },
        solution: [`Subtract ${M("2x")}: ${M("3x + 3 = 18")}.`, `Subtract 3: ${M("3x = 15")}.`, "Divide by 3: x = 5."],
      };
    },
  },

  /* 2 ---------------------------------------------------------------- */
  {
    id: `${TOPIC}.fractions`,
    topicId: TOPIC,
    title: "Solve equations with fractions",
    level: 2,
    guideRef: "linear-equations",
    generate(rng, tier) {
      const dens = tier === 1 ? [2, 3, 4, 5] : [2, 3, 4, 5, 6, 8, 9, 10];
      for (let i = 0; i < 400; i++) {
        const p = rng.pick(dens), q = rng.pick(dens);
        if (p === q) continue;
        const al = tier === 1 ? 1 : rng.int(1, tier === 2 ? 3 : 5);
        const be = tier === 1 ? 1 : rng.int(1, tier === 2 ? 3 : 4);
        const a = rng.nonZero(-9, 9), b = rng.nonZero(-9, 9);
        if (gcd(gcd(al, Math.abs(a)), p) !== 1 || gcd(gcd(be, Math.abs(b)), q) !== 1) continue;
        const wantFrac = tier === 3 && rng.bool(0.4);
        const shape = rng.pick(tier === 1 ? ["sum", "sum", "equal"] : ["sum", "diff", "equal"]);
        if (shape === "equal") {
          if (al * b === be * a) continue; // proportional numerators make the answer trivial
          // (αx + a)/p = (βx + b)/q  →  q(αx + a) = p(βx + b)
          const A = q * al, B = q * a, C = p * be, D = p * b;
          const k = A - C, R = D - B;
          if (k === 0 || R === 0 || Math.abs(R / k) > 20) continue;
          if (wantFrac ? R % k === 0 : R % k !== 0) continue;
          const { traps, add } = trapper(R, k);
          add(q * b - p * a, p * al - q * be, "When you cross-multiply, each numerator is multiplied by the *other* fraction's denominator.");
          return {
            prompt: `Solve ${M(`(${lin(al, a)})/${p} = (${lin(be, b)})/${q}`)}.${wantFrac ? " Give your answer as a fraction in its simplest form." : ""}`,
            answer: valueSpec(R, k),
            solution: [
              `Multiply both sides by ${p * q} (cross-multiply): ${M(`${q}(${lin(al, a)}) = ${p}(${lin(be, b)})`)}.`,
              `Expand: ${M(`${lin(A, B)} = ${lin(C, D)}`)}.`,
              ...solveSteps(A, B, C, D),
            ],
            hint: "Clear both fractions at once: multiply both sides by both denominators.",
            traps,
          };
        }
        const s = shape === "diff" ? -1 : 1;
        const L = lcm(p, q), m1 = L / p, m2 = L / q;
        const K = m1 * al + s * m2 * be;
        const B = m1 * a + s * m2 * b;
        if (K === 0) continue;
        const c = rng.nonZero(-4, 9);
        const R = L * c - B;
        if (R === 0 || Math.abs(R / K) > 25) continue;
        if (wantFrac ? R % K === 0 : R % K !== 0) continue;
        const { traps, add } = trapper(R, K);
        add(c - B, K, `Multiply *every* term by ${L} — including the ${c} on the right-hand side.`);
        if (s === -1) add(L * c - (m1 * a + m2 * b), K, "The minus sign in front of the second fraction applies to its whole numerator, so the constant changes sign too.");
        const op = s === 1 ? "+" : "-";
        return {
          prompt: `Solve ${M(`(${lin(al, a)})/${p} ${op} (${lin(be, b)})/${q} = ${c}`)}.${wantFrac ? " Give your answer as a fraction in its simplest form." : ""}`,
          answer: valueSpec(R, K),
          solution: [
            `The LCM of ${p} and ${q} is ${L}. Multiply every term by ${L}: ${M(`${times(m1, lin(al, a))} ${op} ${times(m2, lin(be, b))} = ${L * c}`)}.`,
            `Expand${s === -1 ? " (careful with the minus)" : ""}: ${M(`${poly([[m1 * al, "x"], [m1 * a, ""], [s * m2 * be, "x"], [s * m2 * b, ""]])} = ${L * c}`)}, so ${M(`${lin(K, B)} = ${L * c}`)}.`,
            ...solveSteps(K, B, 0, L * c),
          ],
          hint: `Multiply every term by the lowest common multiple of ${p} and ${q} to clear the fractions.`,
          traps,
        };
      }
      return {
        prompt: `Solve ${M("(x + 1)/2 + (x + 2)/3 = 4")}.`,
        answer: { type: "number", value: 3.4 },
        solution: ["Multiply by 6: 3(x + 1) + 2(x + 2) = 24.", "5x + 7 = 24, so 5x = 17 and x = 3.4."],
      };
    },
  },

  /* 3 ---------------------------------------------------------------- */
  {
    id: `${TOPIC}.form-and-solve`,
    topicId: TOPIC,
    title: "Form and solve an equation from a context",
    level: 2,
    guideRef: "linear-equations",
    generate(rng, tier) {
      const kind = rng.pick(tier === 1 ? ["triangle", "rectangle", "number"] : ["triangle", "quad", "rectangle", "ages", "number"]);
      for (let i = 0; i < 400; i++) {
        if (kind === "triangle" || kind === "quad") {
          const n = kind === "triangle" ? 3 : 4;
          const total = n === 3 ? 180 : 360;
          const x = rng.int(tier === 1 ? 5 : 8, kind === "quad" ? 40 : 30);
          const as = Array.from({ length: n }, () => rng.int(1, tier === 1 ? 3 : 5));
          const bs = Array.from({ length: n - 1 }, () => rng.int(-15, 40));
          const last = total - as.reduce((s, a) => s + a * x, 0) - bs.reduce((s, b) => s + b, 0);
          bs.push(last);
          if (Math.abs(last) > 60) continue;
          const angles = as.map((a, j) => a * x + bs[j]);
          if (angles.some((g) => g <= 5 || g >= (n === 3 ? 170 : 300))) continue;
          if (new Set(angles).size !== n) continue;
          const exprs = as.map((a, j) => `(${lin(a, bs[j])})°`);
          const sumA = as.reduce((s, a) => s + a, 0), sumB = bs.reduce((s, b) => s + b, 0);
          const askLargest = tier > 1 && rng.bool(0.6);
          const big = Math.max(...angles);
          const shape = n === 3 ? "a triangle" : "a quadrilateral";
          const solution = [
            `The angles in ${shape} add up to ${total}°: ${M(`${as.map((a, j) => lin(a, bs[j])).map((e) => `(${e})`).join(" + ")} = ${total}`)}.`,
            `Collect like terms: ${M(`${lin(sumA, sumB)} = ${total}`)}.`,
            ...solveSteps(sumA, sumB, 0, total),
          ];
          if (askLargest) solution.push(`The angles are ${angles.map((g) => `${g}°`).join(", ")} (check: they add to ${total}°). The largest is ${big}°.`);
          const { traps, add } = trapper(askLargest ? big : x);
          if (askLargest) add(x, 1, `That's the value of x — now substitute it to find the largest angle.`);
          else add((n === 3 ? 360 : 180) - sumB, sumA, `Angles in a triangle add up to 180° and angles in a quadrilateral add up to 360°.`);
          return {
            prompt: `The angles of ${shape} are ${exprs.join(", ")}. ${askLargest ? "Work out the size of the largest angle, in degrees." : "Work out the value of x."}`,
            answer: { type: "number", value: askLargest ? big : x },
            solution,
            hint: `Use the angle sum of ${shape} (${total}°) to write one equation in x.`,
            traps,
          };
        }
        if (kind === "rectangle") {
          const x = rng.int(2, 12);
          const a = rng.int(2, 5), b = rng.int(-3, 9), c = rng.int(1, 3), d = rng.int(-2, 8);
          const len = a * x + b, wid = c * x + d;
          if (len <= 0 || wid <= 0 || len === wid || b === 0) continue;
          const P = 2 * (len + wid);
          const askArea = tier > 1 && rng.bool(0.6);
          const { traps, add } = trapper(askArea ? len * wid : x);
          if (askArea) add(x, 1, "That's x — now work out the length and width, then multiply.");
          else add(P - b - d, a + c, "The perimeter goes all the way round: there are *two* lengths and *two* widths.");
          return {
            prompt: `A rectangle has length ${M(`(${lin(a, b)})`)} cm and width ${M(d === 0 ? lin(c, d) : `(${lin(c, d)})`)} cm. Its perimeter is ${P} cm. ${askArea ? "Work out the area of the rectangle, in {{cm^2}}." : "Work out the value of x."}`,
            answer: { type: "number", value: askArea ? len * wid : x },
            solution: [
              `Perimeter = 2 × (length + width): ${M(`2(${lin(a, b)} + ${lin(c, d)}) = ${P}`)}.`,
              `So ${M(`${lin(2 * (a + c), 2 * (b + d))} = ${P}`)}.`,
              ...solveSteps(2 * (a + c), 2 * (b + d), 0, P),
              ...(askArea ? [`Length = ${len} cm, width = ${wid} cm, so area = ${len} × ${wid} = ${len * wid} {{cm^2}}.`] : []),
            ],
            hint: "Write the perimeter in terms of x and set it equal to the number given.",
            traps,
          };
        }
        if (kind === "ages") {
          const b = rng.int(3, 15), m = rng.int(3, 5), n = rng.int(2, m - 1);
          if (((m - n) * b) % (n - 1) !== 0) continue;
          const k = ((m - n) * b) / (n - 1);
          if (k < 2 || k > 20) continue;
          const P = person(rng), Q = person(rng, P.name);
          const word = (t: number) => (t === 2 ? "twice" : t === 3 ? "three times" : t === 4 ? "four times" : "five times");
          const { traps, add } = trapper(m * b);
          add(b, 1, `That's ${Q.name}'s age — the question asks for ${P.name}'s.`);
          return {
            prompt: `${P.name} is ${word(m)} as old as ${P.pos} cousin ${Q.name}. In ${k} years' time, ${P.name} will be ${word(n)} as old as ${Q.name}. How old is ${P.name} now?`,
            answer: { type: "number", value: m * b },
            solution: [
              `Let ${Q.name} be x years old now, so ${P.name} is ${M(term(m, "x"))}.`,
              `In ${k} years: ${M(`${lin(m, k)} = ${n}(x + ${k})`)}.`,
              `Expand: ${M(`${lin(m, k)} = ${lin(n, n * k)}`)}.`,
              ...solveSteps(m, k, n, n * k),
              `So ${P.name} is ${m} × ${b} = ${m * b} years old.`,
            ],
            hint: "Let the younger person's age be x. Remember that *both* people get older by the same number of years.",
            traps,
          };
        }
        // number puzzle: ax − b = cx + d
        const x = tier === 1 ? rng.int(2, 15) : rng.nonZero(-9, 20);
        const a = rng.int(2, 9), c = rng.int(1, 8), b = rng.int(1, 20);
        if (a === c) continue;
        const d = a * x - b - c * x;
        if (d === 0 || Math.abs(d) > 40) continue;
        const P = person(rng);
        const dPhrase = d > 0 ? `adds ${d}` : `subtracts ${-d}`;
        const { traps, add } = trapper(x);
        add(d - b, a - c, `Check the sign when you move the ${b} across: subtracting ${b} on one side means adding ${b} on the other.`);
        return {
          prompt: `${P.name} thinks of a number. ${P.Sub} multiplies it by ${a} and then subtracts ${b}. ${P.Sub} gets the same answer when ${P.sub} multiplies the number by ${c} and then ${dPhrase}. What is ${P.pos} number?`,
          answer: { type: "number", value: x },
          solution: [`Let the number be x: ${M(`${lin(a, -b)} = ${lin(c, d)}`)}.`, ...solveSteps(a, -b, c, d), `Check: ${a} × ${br(x)} − ${b} = ${a * x - b} and ${c} × ${br(x)} ${d > 0 ? "+" : "−"} ${Math.abs(d)} = ${c * x + d}.`],
          hint: "Call the number x and write each instruction as an expression. They are equal.",
          traps,
        };
      }
      return {
        prompt: "The angles of a triangle are (x + 10)°, (2x)° and (3x + 20)°. Work out the value of x.",
        answer: { type: "number", value: 25 },
        solution: ["6x + 30 = 180", "6x = 150, so x = 25."],
      };
    },
  },

  /* 4 ---------------------------------------------------------------- */
  {
    id: `${TOPIC}.subject-once`,
    topicId: TOPIC,
    title: "Change the subject of a formula",
    level: 1,
    guideRef: "rearranging-once",
    generate(rng, tier) {
      const [o, s] = rng.pick(PAIRS);
      const formulas: Array<{ f: string; subj: string; ans: string; disp: string; steps: string[]; traps: Array<[string, string]> }> = [
        { f: "v = u + at", subj: "t", ans: "(v-u)/a", disp: "t = (v - u)/a", steps: ["Subtract u: {{v - u = at}}.", "Divide by a: {{t = (v - u)/a}}."], traps: [["v/a-u", "Undo in reverse order: subtract u first, then divide by a."]] },
        { f: "v = u + at", subj: "a", ans: "(v-u)/t", disp: "a = (v - u)/t", steps: ["Subtract u: {{v - u = at}}.", "Divide by t: {{a = (v - u)/t}}."], traps: [["(v+u)/t", "Undo + u by subtracting u."]] },
        { f: "P = 2(l + w)", subj: "w", ans: "P/2-l", disp: "w = P/2 - l", steps: ["Divide by 2: {{P/2 = l + w}}.", "Subtract l: {{w = P/2 - l}} (or {{(P - 2l)/2}})."], traps: [["(P-l)/2", "Divide by 2 *before* subtracting l — or subtract 2l, not l."]] },
        { f: "C = (5(F - 32))/9", subj: "F", ans: "9C/5+32", disp: "F = (9C)/5 + 32", steps: ["Multiply by 9: {{9C = 5(F - 32)}}.", "Divide by 5: {{(9C)/5 = F - 32}}.", "Add 32: {{F = (9C)/5 + 32}}."], traps: [["5C/9+32", "To undo ×5 and ÷9 you multiply by 9 and divide by 5."]] },
        { f: "s = ((u + v)t)/2", subj: "t", ans: "2s/(u+v)", disp: "t = (2s)/(u + v)", steps: ["Multiply by 2: {{2s = (u + v)t}}.", "Divide by {{(u + v)}}: {{t = (2s)/(u + v)}}."], traps: [["2s/u+v", "Divide by the whole bracket {{(u + v)}}, not just u."]] },
        { f: "y = mx + c", subj: "x", ans: "(y-c)/m", disp: "x = (y - c)/m", steps: ["Subtract c: {{y - c = mx}}.", "Divide by m: {{x = (y - c)/m}}."], traps: [["y/m-c", "Subtract c first, then divide — dividing first would need {{c/m}}."]] },
        { f: "E = mgh", subj: "h", ans: "E/(mg)", disp: "h = E/(mg)", steps: ["h is multiplied by mg, so divide both sides by mg: {{h = E/(mg)}}."], traps: [["Emg", "h is *multiplied* by mg, so divide by mg."]] },
        { f: "A = (bh)/2", subj: "h", ans: "2A/b", disp: "h = (2A)/b", steps: ["Multiply by 2: {{2A = bh}}.", "Divide by b: {{h = (2A)/b}}."], traps: [["A/(2b)", "To undo ÷2, multiply by 2."]] },
      ];
      for (let i = 0; i < 200; i++) {
        const tmpl = rng.pick(tier === 1 ? ["lin", "lin", "neg", "brk"] : tier === 2 ? ["lin", "div", "neg", "brk", "formula"] : ["div", "neg2", "formula", "formula", "brk"]);
        if (tmpl === "formula") {
          const F = rng.pick(formulas);
          return {
            prompt: `Make ${F.subj} the subject of the formula ${M(F.f)}.`,
            answer: { type: "expression", expr: F.ans, display: M(F.disp) },
            solution: [...F.steps, "Each step undoes one operation, in the reverse order to how they were done to " + F.subj + "."],
            hint: `What has been done to ${F.subj}? Undo those operations in reverse order, doing the same to both sides.`,
            traps: exprTraps(F.ans, F.traps),
          };
        }
        const a = rng.int(2, 9), b = rng.nonZero(-12, 15);
        if (tmpl === "lin") {
          const ans = `(${lin(1, -b, o)})/${a}`;
          return {
            prompt: `Make ${s} the subject of ${M(`${o} = ${lin(a, b, s)}`)}.`,
            answer: { type: "expression", expr: ans, display: M(`${s} = (${lin(1, -b, o)})/${a}`) },
            solution: [`${undo(b)}: ${M(`${lin(1, -b, o)} = ${term(a, s)}`)}.`, `Divide both sides by ${a}: ${M(`${s} = (${lin(1, -b, o)})/${a}`)}.`],
            hint: `${s} is multiplied by ${a}, then ${b > 0 ? `${b} is added` : `${-b} is subtracted`}. Undo in reverse order.`,
            traps: exprTraps(ans, [
              [`(${lin(1, b, o)})/${a}`, `Check the sign: to undo ${b > 0 ? "+" : "−"} ${Math.abs(b)} you ${b > 0 ? "subtract" : "add"} ${Math.abs(b)}.`],
              [`${o}/${a} ${b > 0 ? "-" : "+"} ${Math.abs(b)}`, `If you divide first, you must divide the ${Math.abs(b)} as well. Undo the ${b > 0 ? "+" : "−"} ${Math.abs(b)} first.`],
            ]),
          };
        }
        if (tmpl === "neg" || tmpl === "neg2") {
          // o = b − a·s  →  s = (b − o)/a   ; neg2: o = (b − a s)/c → s = (b − c o)/a
          const c = tmpl === "neg2" ? rng.int(2, 7) : 1;
          const bb = Math.abs(b) + 1;
          if (c > 1 && gcd(gcd(a, bb), c) !== 1) continue;
          const rhs = c === 1 ? linC(-a, bb, s) : `(${linC(-a, bb, s)})/${c}`;
          const ans = c === 1 ? `(${bb} - ${o})/${a}` : `(${bb} - ${c}${o})/${a}`;
          const disp = c === 1 ? `${s} = (${bb} - ${o})/${a}` : `${s} = (${bb} - ${c}${o})/${a}`;
          const steps = c === 1 ? [] : [`Multiply both sides by ${c}: ${M(`${c}${o} = ${linC(-a, bb, s)}`)}.`];
          const lhs = c === 1 ? o : `${c}${o}`;
          steps.push(`Add ${M(term(a, s))} to both sides: ${M(`${lhs} + ${term(a, s)} = ${bb}`)}.`);
          steps.push(`Subtract ${M(lhs)}: ${M(`${term(a, s)} = ${bb} - ${lhs}`)}.`);
          steps.push(`Divide by ${a}: ${M(disp)}.`);
          return {
            prompt: `Make ${s} the subject of ${M(`${o} = ${rhs}`)}.`,
            answer: { type: "expression", expr: ans, display: M(disp) },
            solution: steps,
            hint: `The ${s}-term is negative. Add it to both sides first so it becomes positive.`,
            traps: exprTraps(ans, [[c === 1 ? `(${o} - ${bb})/${a}` : `(${c}${o} - ${bb})/${a}`, `Sign slip: ${M(`${o} = ${bb} - ...`)} means ${s} goes *down* as ${o} goes up, so the answer must have ${M(`${bb} - ...`)}.`]]),
          };
        }
        if (tmpl === "brk") {
          // o = a(s − c)  →  s = o/a + c
          const c = rng.nonZero(-9, 9);
          const ans = `${o}/${a} ${c > 0 ? "+" : "-"} ${Math.abs(c)}`;
          return {
            prompt: `Make ${s} the subject of ${M(`${o} = ${a}(${lin(1, -c, s)})`)}.`,
            answer: { type: "expression", expr: ans, display: M(`${s} = ${o}/${a} ${c > 0 ? "+" : "-"} ${Math.abs(c)}`) },
            solution: [
              `Divide both sides by ${a}: ${M(`${o}/${a} = ${lin(1, -c, s)}`)}.`,
              `${c > 0 ? `Add ${c}` : `Subtract ${-c}`}: ${M(`${s} = ${o}/${a} ${c > 0 ? "+" : "-"} ${Math.abs(c)}`)}  (equivalently ${M(`(${lin(1, a * c, o)})/${a}`)}).`,
            ],
            hint: "Divide by the number outside the bracket first, or expand the bracket — both work.",
            traps: exprTraps(ans, [[`${o}/${a} ${c > 0 ? "-" : "+"} ${Math.abs(c)}`, `Sign slip: to undo ${c > 0 ? "−" : "+"} ${Math.abs(c)} you ${c > 0 ? "add" : "subtract"}.`]]),
          };
        }
        // div: o = (a s + b)/c  →  s = (c o − b)/a
        const c = rng.int(2, 7);
        if (gcd(gcd(a, Math.abs(b)), c) !== 1) continue;
        const ans = `(${lin(c, -b, o)})/${a}`;
        return {
          prompt: `Make ${s} the subject of ${M(`${o} = (${lin(a, b, s)})/${c}`)}.`,
          answer: { type: "expression", expr: ans, display: M(`${s} = (${lin(c, -b, o)})/${a}`) },
          solution: [
            `Multiply both sides by ${c}: ${M(`${c}${o} = ${lin(a, b, s)}`)}.`,
            `${undo(b)}: ${M(`${lin(c, -b, o)} = ${term(a, s)}`)}.`,
            `Divide by ${a}: ${M(`${s} = (${lin(c, -b, o)})/${a}`)}.`,
          ],
          hint: `Clear the fraction first: multiply both sides by ${c}.`,
          traps: exprTraps(ans, [
            [`(${lin(c, b, o)})/${a}`, `Check the sign: to undo ${b > 0 ? "+" : "−"} ${Math.abs(b)} you ${b > 0 ? "subtract" : "add"}.`],
            [`(${lin(1, -b, o)})*${c}/${a}`, `Multiply *all* of the left side by ${c} before moving the ${Math.abs(b)} — the ${Math.abs(b)} is inside the fraction.`],
          ]),
        };
      }
      return {
        prompt: `Make x the subject of ${M("y = 3x + 2")}.`,
        answer: { type: "expression", expr: "(y-2)/3", display: M("x = (y - 2)/3") },
        solution: ["Subtract 2: y − 2 = 3x.", "Divide by 3."],
      };
    },
  },

  /* 5 ---------------------------------------------------------------- */
  {
    id: `${TOPIC}.subject-powers-roots`,
    topicId: TOPIC,
    title: "Change the subject with squares, cubes and roots",
    level: 2,
    guideRef: "rearranging-once",
    generate(rng, tier) {
      const [o, s] = rng.pick(PAIRS);
      const kind = rng.pick(tier === 1 ? ["sq", "root", "cube"] : tier === 2 ? ["sq", "root", "cube", "brsq", "num", "num"] : ["sqrtx", "brsq", "num", "num", "cube"]);
      if (kind === "sq") {
        const a = rng.int(2, 9), c = rng.int(3, 20);
        const ans = `sqrt((${o} + ${c})/${a})`;
        return {
          prompt: `Make ${s} the subject of ${M(`${o} = ${a}${s}^2 - ${c}`)}, where ${s} > 0.`,
          answer: { type: "expression", expr: ans, display: M(`${s} = ${ans}`) },
          solution: [`Add ${c}: ${M(`${o} + ${c} = ${a}${s}^2`)}.`, `Divide by ${a}: ${M(`(${o} + ${c})/${a} = ${s}^2`)}.`, `Square root (positive, as ${s} > 0): ${M(`${s} = ${ans}`)}.`],
          hint: `Get ${M(`${s}^2`)} on its own first; the square root is the very last step.`,
          traps: exprTraps(ans, [[`sqrt(${o}/${a}) + ${c}`, "Undo in reverse order: the − " + c + " was done last, so undo it first."], [`(${o} + ${c})/${a}`, `That gives ${M(`${s}^2`)} — take the square root to finish.`]]),
        };
      }
      if (kind === "root") {
        const a = rng.int(2, 9), b = rng.nonZero(-15, 15);
        const ans = `(${o}^2 ${b > 0 ? "-" : "+"} ${Math.abs(b)})/${a}`;
        return {
          prompt: `Make ${s} the subject of ${M(`${o} = sqrt(${lin(a, b, s)})`)}.`,
          answer: { type: "expression", expr: ans, display: M(`${s} = ${ans}`) },
          solution: [`Square both sides: ${M(`${o}^2 = ${lin(a, b, s)}`)}.`, `${undo(b)}: ${M(`${o}^2 ${b > 0 ? "-" : "+"} ${Math.abs(b)} = ${term(a, s)}`)}.`, `Divide by ${a}: ${M(`${s} = ${ans}`)}.`],
          hint: "The square root was the last thing done, so undo it first: square both sides.",
          traps: exprTraps(ans, [[`(${o} ${b > 0 ? "-" : "+"} ${Math.abs(b)})/${a}`, "Square both sides first — the whole of the left side becomes " + `${M(`${o}^2`)}.`]]),
        };
      }
      if (kind === "cube") {
        const a = rng.int(2, 9), b = rng.nonZero(-20, 20);
        const ans = `cbrt((${o} ${b > 0 ? "-" : "+"} ${Math.abs(b)})/${a})`;
        return {
          prompt: `Make ${s} the subject of ${M(`${o} = ${a}${s}^3 ${b > 0 ? "+" : "-"} ${Math.abs(b)}`)}.`,
          answer: { type: "expression", expr: ans, display: M(`${s} = ${ans}`) },
          solution: [`${undo(b)}: ${M(`${o} ${b > 0 ? "-" : "+"} ${Math.abs(b)} = ${a}${s}^3`)}.`, `Divide by ${a}: ${M(`(${o} ${b > 0 ? "-" : "+"} ${Math.abs(b)})/${a} = ${s}^3`)}.`, `Cube root (no ± needed — a cube root has only one real value): ${M(`${s} = ${ans}`)}.`],
          hint: `Get ${M(`${s}^3`)} alone, then take the cube root.`,
          traps: exprTraps(ans, [[`cbrt(${o}/${a}) ${b > 0 ? "-" : "+"} ${Math.abs(b)}`, `Undo in reverse order: the ${b > 0 ? "+" : "−"} ${Math.abs(b)} was done last, so undo it first.`], [`(${o} ${b > 0 ? "-" : "+"} ${Math.abs(b)})/${a}`, `That's ${M(`${s}^3`)} — take the cube root to finish.`]]),
        };
      }
      if (kind === "brsq") {
        const a = rng.int(2, 9), b = rng.nonZero(-9, 9);
        const ans = `sqrt(${o}/${a}) ${b > 0 ? "-" : "+"} ${Math.abs(b)}`;
        return {
          prompt: `Make ${s} the subject of ${M(`${o} = ${a}(${lin(1, b, s)})^2`)}, where ${M(`${lin(1, b, s)} > 0`)}.`,
          answer: { type: "expression", expr: ans, display: M(`${s} = ${ans}`) },
          solution: [`Divide by ${a}: ${M(`${o}/${a} = (${lin(1, b, s)})^2`)}.`, `Square root (positive, as the bracket is positive): ${M(`sqrt(${o}/${a}) = ${lin(1, b, s)}`)}.`, `${undo(b)}: ${M(`${s} = ${ans}`)}.`],
          hint: "Peel the layers off from the outside: the ×" + a + " first, then the square, then the " + (b > 0 ? "+" : "−") + " " + Math.abs(b) + ".",
          traps: exprTraps(ans, [[`sqrt(${o}/${a}) ${b > 0 ? "+" : "-"} ${Math.abs(b)}`, `Check the sign: to undo ${b > 0 ? "+" : "−"} ${Math.abs(b)} you ${b > 0 ? "subtract" : "add"}.`]]),
        };
      }
      if (kind === "sqrtx") {
        // o = (sqrt(s) + a)/b  →  s = (b o − a)^2
        const a = rng.nonZero(-9, 9), b = rng.int(2, 8);
        const ans = `(${lin(b, -a, o)})^2`;
        return {
          prompt: `Make ${s} the subject of ${M(`${o} = (sqrt(${s}) ${a > 0 ? "+" : "-"} ${Math.abs(a)})/${b}`)}.`,
          answer: { type: "expression", expr: ans, display: M(`${s} = ${ans}`) },
          solution: [`Multiply by ${b}: ${M(`${b}${o} = sqrt(${s}) ${a > 0 ? "+" : "-"} ${Math.abs(a)}`)}.`, `${undo(a)}: ${M(`${lin(b, -a, o)} = sqrt(${s})`)}.`, `Square both sides: ${M(`${s} = ${ans}`)}.`],
          hint: `Isolate ${M(`sqrt(${s})`)} first, then square both sides.`,
          traps: exprTraps(ans, [[`${b * b}${o}^2 ${a > 0 ? "-" : "+"} ${a * a}`, `Square the *whole* side: ${M(`(${lin(b, -a, o)})^2`)} is not ${M(`${b * b}${o}^2 ${a > 0 ? "-" : "+"} ${a * a}`)}.`]]),
        };
      }
      // Numerical: rearrange a real formula, then substitute (3 s.f.)
      const f = rng.pick(["sphere", "circle", "ke", "pendulum", "cyl", "cone"]);
      if (f === "sphere") {
        const V = rng.int(5, 400) * 5;
        const r = sig3(Math.cbrt((3 * V) / (4 * Math.PI)));
        return {
          prompt: `The volume of a sphere is ${M("V = 4/3 pi r^3")}. Make r the subject, then find r when V = ${V} {{cm^3}}. Give your answer correct to 3 significant figures.`,
          answer: { type: "number", value: r },
          solution: ["Multiply by 3: {{3V = 4 pi r^3}}.", "Divide by 4π: {{r^3 = (3V)/(4 pi)}}.", "Cube root: {{r = cbrt((3V)/(4 pi))}}.", `r = ${M(`cbrt((3 * ${V})/(4 pi))`)} = ${r} cm (3 s.f.).`],
          hint: "Rearrange first: get r³ on its own, then take the cube root.",
          traps: [numTrap(sig3(Math.sqrt((3 * V) / (4 * Math.PI))), "r is *cubed*, so undo it with a cube root.")].filter((t) => t.spec.type === "number" && t.spec.value !== r),
        };
      }
      if (f === "circle") {
        const A = rng.int(10, 600);
        const r = sig3(Math.sqrt(A / Math.PI));
        return {
          prompt: `The area of a circle is ${M("A = pi r^2")}. Make r the subject, then find the radius of a circle with area ${A} {{cm^2}}. Give your answer correct to 3 significant figures.`,
          answer: { type: "number", value: r },
          solution: ["Divide by π: {{r^2 = A/pi}}.", "Square root (r > 0): {{r = sqrt(A/pi)}}.", `r = ${M(`sqrt(${A}/pi)`)} = ${r} cm (3 s.f.).`],
          hint: "Divide by π, then square root.",
          traps: [numTrap(sig3(A / Math.PI), "That's r² — take the square root.")].filter((t) => t.spec.type === "number" && t.spec.value !== r),
        };
      }
      if (f === "ke") {
        const m = rng.int(2, 80), E = rng.int(5, 200) * 10;
        const v = sig3(Math.sqrt((2 * E) / m));
        return {
          prompt: `Kinetic energy is given by ${M("E = 1/2 m v^2")}. Make v the subject, then find v when E = ${E} and m = ${m}. Give your answer correct to 3 significant figures.`,
          answer: { type: "number", value: v },
          solution: ["Multiply by 2: {{2E = m v^2}}.", "Divide by m: {{v^2 = (2E)/m}}.", "Square root: {{v = sqrt((2E)/m)}}.", `v = ${M(`sqrt((2 * ${E})/${m})`)} = ${v} (3 s.f.).`],
          hint: "Undo the ½ by doubling, then divide by m, then square root.",
          traps: [numTrap(sig3(Math.sqrt(E / (2 * m))), "To undo × ½ you multiply by 2, not divide by 2.")].filter((t) => t.spec.type === "number" && t.spec.value !== v),
        };
      }
      if (f === "pendulum") {
        const T = rng.int(8, 40) / 10;
        const l = sig3((9.8 * T * T) / (4 * Math.PI * Math.PI));
        return {
          prompt: `The time for one swing of a pendulum is ${M("T = 2 pi sqrt(l/g)")} seconds, where l is the length in metres and g = 9.8. Make l the subject, then find l when T = ${T}. Give your answer correct to 3 significant figures.`,
          answer: { type: "number", value: l },
          solution: ["Divide by 2π: {{T/(2 pi) = sqrt(l/g)}}.", "Square both sides: {{T^2/(4 pi^2) = l/g}}.", "Multiply by g: {{l = (g T^2)/(4 pi^2)}}.", `l = ${M(`(9.8 * ${T}^2)/(4 pi^2)`)} = ${l} m (3 s.f.).`],
          hint: "Get the square root on its own, then square both sides.",
          traps: [numTrap(sig3((9.8 * T) / (2 * Math.PI)), "Square *both* sides to remove the square root — including the T.")].filter((t) => t.spec.type === "number" && t.spec.value !== l),
        };
      }
      const h = rng.int(3, 30), V = rng.int(20, 900) * 5;
      const cone = f === "cone";
      const r = sig3(Math.sqrt(((cone ? 3 : 1) * V) / (Math.PI * h)));
      return {
        prompt: cone
          ? `The volume of a cone is ${M("V = 1/3 pi r^2 h")}. Make r the subject, then find r when V = ${V} {{cm^3}} and h = ${h} cm. Give your answer correct to 3 significant figures.`
          : `The volume of a cylinder is ${M("V = pi r^2 h")}. Make r the subject, then find r when V = ${V} {{cm^3}} and h = ${h} cm. Give your answer correct to 3 significant figures.`,
        answer: { type: "number", value: r },
        solution: cone
          ? ["Multiply by 3: {{3V = pi r^2 h}}.", "Divide by πh: {{r^2 = (3V)/(pi h)}}.", "Square root: {{r = sqrt((3V)/(pi h))}}.", `r = ${M(`sqrt((3 * ${V})/(pi * ${h}))`)} = ${r} cm (3 s.f.).`]
          : ["Divide by πh: {{r^2 = V/(pi h)}}.", "Square root: {{r = sqrt(V/(pi h))}}.", `r = ${M(`sqrt(${V}/(pi * ${h}))`)} = ${r} cm (3 s.f.).`],
        hint: "Get r² on its own, then take the square root.",
        traps: [numTrap(sig3(((cone ? 3 : 1) * V) / (Math.PI * h)), "That's r² — take the square root.")].filter((t) => t.spec.type === "number" && t.spec.value !== r),
      };
    },
  },

  /* 6 ---------------------------------------------------------------- */
  {
    id: `${TOPIC}.subject-twice`,
    topicId: TOPIC,
    title: "Change the subject when it appears twice",
    level: 3,
    guideRef: "rearranging-twice",
    generate(rng, tier) {
      const [o, s] = rng.pick(PAIRS.slice(0, 6));
      const kind = rng.pick(tier === 1 ? ["collect", "ratio", "ax"] : tier === 2 ? ["collect", "ratio", "ratio2", "ax", "prod"] : ["ratio2", "prod", "rootfrac", "rootratio", "ratio"]);
      for (let i = 0; i < 200; i++) {
        if (kind === "collect") {
          // s·o + a = b·s + c  →  s = (c − a)/(o − b)
          const a = rng.int(1, 12), b = rng.int(2, 9), c = rng.int(1, 15);
          if (a === c) continue;
          const ans = `${c - a}/(${o} - ${b})`;
          return {
            prompt: `Make ${s} the subject of ${M(`${s}${o} + ${a} = ${b}${s} + ${c}`)}.`,
            answer: { type: "expression", expr: ans, display: M(`${s} = ${c - a}/(${o} - ${b})`) },
            solution: [
              `Collect the ${s}-terms on the left and everything else on the right: ${M(`${s}${o} - ${b}${s} = ${c} - ${a}`)}.`,
              `Factorise out ${s}: ${M(`${s}(${o} - ${b}) = ${c - a}`)}.`,
              `Divide by ${M(`(${o} - ${b})`)}: ${M(`${s} = ${c - a}/(${o} - ${b})`)}.`,
            ],
            hint: `Get every term containing ${s} on one side, then factorise ${s} out.`,
            traps: exprTraps(ans, [[`${c - a}/(${o} + ${b})`, `Moving ${M(`${b}${s}`)} to the left makes it ${M(`-${b}${s}`)}.`], [`${c + a}/(${o} - ${b})`, `Moving + ${a} to the right makes it − ${a}.`]]),
          };
        }
        if (kind === "ratio") {
          // o = (s + a)/(s − b)  →  s = (b·o + a)/(o − 1)
          const a = rng.int(1, 9), b = rng.int(1, 9);
          const ans = `(${b}${o} + ${a})/(${o} - 1)`;
          return {
            prompt: `Make ${s} the subject of ${M(`${o} = (${s} + ${a})/(${s} - ${b})`)}.`,
            answer: { type: "expression", expr: ans, display: M(`${s} = ${ans}`) },
            solution: [
              `Multiply both sides by ${M(`(${s} - ${b})`)}: ${M(`${o}(${s} - ${b}) = ${s} + ${a}`)}.`,
              `Expand: ${M(`${s}${o} - ${b}${o} = ${s} + ${a}`)}.`,
              `Collect ${s}-terms on the left: ${M(`${s}${o} - ${s} = ${b}${o} + ${a}`)}.`,
              `Factorise: ${M(`${s}(${o} - 1) = ${b}${o} + ${a}`)}, so ${M(`${s} = ${ans}`)}.`,
            ],
            hint: "Multiply up by the denominator first, then expand and collect the " + s + "-terms.",
            traps: exprTraps(ans, [[`(${b}${o} - ${a})/(${o} - 1)`, "Check the signs as you move terms across."], [`(${b}${o} + ${a})/${o}`, `Factorising ${M(`${s}${o} - ${s}`)} gives ${M(`${s}(${o} - 1)`)} — don't lose the 1.`]]),
          };
        }
        if (kind === "ratio2") {
          // o = (a s + b)/(c s + d) → s = (b − d o)/(c o − a)
          const a = rng.int(1, 6), b = rng.nonZero(-9, 9), c = rng.int(2, 5), d = rng.nonZero(-9, 9);
          if (a * d - b * c === 0 || gcd(gcd(a, Math.abs(b)), gcd(c, Math.abs(d))) !== 1) continue;
          const ans = `(${linC(-d, b, o)})/(${lin(c, -a, o)})`;
          return {
            prompt: `Make ${s} the subject of ${M(`${o} = (${lin(a, b, s)})/(${lin(c, d, s)})`)}.`,
            answer: { type: "expression", expr: ans, display: M(`${s} = ${ans}`) },
            solution: [
              `Multiply by the denominator: ${M(`${o}(${lin(c, d, s)}) = ${lin(a, b, s)}`)}.`,
              `Expand: ${M(`${c}${s}${o} ${d > 0 ? "+" : "-"} ${term(Math.abs(d), o)} = ${lin(a, b, s)}`)}.`,
              `Collect ${s}-terms on the left, the rest on the right: ${M(`${c}${s}${o} - ${term(a, s)} = ${linC(-d, b, o)}`)}.`,
              `Factorise: ${M(`${s}(${lin(c, -a, o)}) = ${linC(-d, b, o)}`)}, so ${M(`${s} = ${ans}`)}.`,
            ],
            hint: "Clear the fraction, expand, put all the " + s + "-terms on one side, factorise.",
            traps: exprTraps(ans, [[`(${lin(-d, b, o)})/(${lin(c, a, o)})`, "Sign slip: when " + term(a, s) + " moves to the left it becomes negative."]]),
          };
        }
        if (kind === "ax") {
          // o = a s/(s + b) → s = b o/(a − o)
          const a = rng.int(2, 9), b = rng.int(1, 9);
          const ans = `${b}${o}/(${a} - ${o})`;
          return {
            prompt: `Make ${s} the subject of ${M(`${o} = (${a}${s})/(${s} + ${b})`)}.`,
            answer: { type: "expression", expr: ans, display: M(`${s} = (${b}${o})/(${a} - ${o})`) },
            solution: [
              `Multiply by ${M(`(${s} + ${b})`)}: ${M(`${s}${o} + ${b}${o} = ${a}${s}`)}.`,
              `Collect ${s}-terms on the right (where ${M(`${a}${s}`)} is): ${M(`${b}${o} = ${a}${s} - ${s}${o}`)}.`,
              `Factorise: ${M(`${b}${o} = ${s}(${a} - ${o})`)}, so ${M(`${s} = (${b}${o})/(${a} - ${o})`)}.`,
            ],
            hint: "After multiplying out, " + s + " appears twice — collect those two terms together and factorise.",
            traps: exprTraps(ans, [[`${b}${o}/(${o} - ${a})`, "Sign slip — check by substituting a value back in."]]),
          };
        }
        if (kind === "prod") {
          // a(s + o) = b s o  →  s(b o − a) = a o  →  s = a o/(b o − a)
          const a = rng.int(2, 9), b = rng.int(2, 9);
          if (a === b || gcd(a, b) !== 1) continue;
          const ans = `${a}${o}/(${b}${o} - ${a})`;
          return {
            prompt: `Make ${s} the subject of ${M(`${a}(${s} + ${o}) = ${b}${s}${o}`)}.`,
            answer: { type: "expression", expr: ans, display: M(`${s} = (${a}${o})/(${b}${o} - ${a})`) },
            solution: [
              `Expand: ${M(`${a}${s} + ${a}${o} = ${b}${s}${o}`)}.`,
              `Collect ${s}-terms on the right: ${M(`${a}${o} = ${b}${s}${o} - ${a}${s}`)}.`,
              `Factorise: ${M(`${a}${o} = ${s}(${b}${o} - ${a})`)}, so ${M(`${s} = (${a}${o})/(${b}${o} - ${a})`)}.`,
            ],
            hint: "Expand the bracket, then gather both " + s + "-terms on the same side.",
            traps: exprTraps(ans, [[`${a}${o}/(${b}${o} + ${a})`, "Moving " + term(a, s) + " to the other side changes its sign."]]),
          };
        }
        if (kind === "rootfrac") {
          // sqrt((s + a)/s) = o  →  s = a/(o^2 − 1)
          const a = rng.int(2, 15);
          const ans = `${a}/(${o}^2 - 1)`;
          return {
            prompt: `Make ${s} the subject of ${M(`${o} = sqrt((${s} + ${a})/${s})`)}.`,
            answer: { type: "expression", expr: ans, display: M(`${s} = ${ans}`) },
            solution: [
              `Square both sides: ${M(`${o}^2 = (${s} + ${a})/${s}`)}.`,
              `Multiply by ${s}: ${M(`${s}${o}^2 = ${s} + ${a}`)}.`,
              `Collect: ${M(`${s}${o}^2 - ${s} = ${a}`)}, so ${M(`${s}(${o}^2 - 1) = ${a}`)}.`,
              `Divide: ${M(`${s} = ${ans}`)}.`,
            ],
            hint: "Square both sides first, then clear the fraction.",
            traps: exprTraps(ans, [[`${a}/(${o} - 1)`, `Squaring the left side gives ${M(`${o}^2`)}, not ${o}.`]]),
          };
        }
        // rootratio: o = sqrt((a s + b)/(s + c)) → s = (b − c o^2)/(o^2 − a)
        const a = rng.int(2, 6), b = rng.int(1, 12), c = rng.int(1, 9);
        if (b === a * c) continue;
        const ans = `(${b} - ${c}${o}^2)/(${o}^2 - ${a})`;
        return {
          prompt: `Make ${s} the subject of ${M(`${o} = sqrt((${a}${s} + ${b})/(${s} + ${c}))`)}.`,
          answer: { type: "expression", expr: ans, display: M(`${s} = ${ans}`) },
          solution: [
            `Square: ${M(`${o}^2 = (${a}${s} + ${b})/(${s} + ${c})`)}.`,
            `Multiply up: ${M(`${s}${o}^2 + ${c}${o}^2 = ${a}${s} + ${b}`)}.`,
            `Collect ${s}-terms on the left: ${M(`${s}${o}^2 - ${a}${s} = ${b} - ${c}${o}^2`)}.`,
            `Factorise and divide: ${M(`${s} = ${ans}`)}.`,
          ],
          hint: "Square, multiply by the denominator, then collect and factorise.",
          traps: exprTraps(ans, [[`(${b} - ${c}${o}^2)/(${o}^2 + ${a})`, "Sign slip: the " + term(a, s) + " changes sign when it moves across."]]),
        };
      }
      return {
        prompt: `Make x the subject of ${M("y = (x + 2)/(x - 3)")}.`,
        answer: { type: "expression", expr: "(3y+2)/(y-1)", display: M("x = (3y + 2)/(y - 1)") },
        solution: ["y(x − 3) = x + 2", "xy − x = 3y + 2", "x(y − 1) = 3y + 2"],
      };
    },
  },

  /* 7 ---------------------------------------------------------------- */
  {
    id: `${TOPIC}.elimination`,
    topicId: TOPIC,
    title: "Solve simultaneous equations by elimination",
    level: 2,
    guideRef: "simultaneous-linear",
    generate(rng, tier) {
      for (let i = 0; i < 400; i++) {
        const x = tier === 1 ? rng.int(1, 8) : rng.nonZero(-7, 9);
        const y = tier === 1 ? rng.int(1, 8) : rng.nonZero(-7, 9);
        let a: number, b: number, d: number, e: number;
        if (tier === 1) {
          a = rng.int(1, 6); b = rng.int(1, 5); d = rng.int(1, 6);
          e = rng.pick([b, -b, 2 * b]);
        } else {
          const R = tier === 2 ? 7 : 9;
          a = rng.nonZero(-R, R); b = rng.nonZero(-R, R); d = rng.nonZero(-R, R); e = rng.nonZero(-R, R);
          if (Math.abs(b) === Math.abs(e) && Math.abs(a) === Math.abs(d)) continue;
          if (tier === 3 && (Math.abs(b) === Math.abs(e) || Math.abs(a) === Math.abs(d) || b % e === 0 || e % b === 0)) continue;
        }
        if (a * e - b * d === 0) continue;
        if (a < 0 && b < 0) continue;
        if (d < 0 && e < 0) continue;
        if (tier < 3 && (a < 0 || d < 0)) continue;
        const c = a * x + b * y, f = d * x + e * y;
        const g3 = (p: number, q: number, r: number) => gcd(gcd(Math.abs(p), Math.abs(q)), Math.abs(r));
        if (g3(a, b, c) !== 1 || g3(d, e, f) !== 1) continue;
        const rearr = tier === 3 && rng.bool(0.4);
        const shown1 = M(eq2(a, b, c, "x", "y"));
        // Show (2) rearranged as dx = f − ey on tier 3 sometimes.
        const shown2 = rearr ? M(`${term(d, "x")} = ${linC(-e, f, "y")}`) : M(eq2(d, e, f, "x", "y"));
        const { steps } = solve2([a, b, c], [d, e, f], "x", "y", "(1)", "(2)");
        if (rearr) steps.unshift(`First write (2) in the same form as (1): ${M(eq2(d, e, f, "x", "y"))}.`);
        steps.push(`Check in (2): ${plainSum([[d, x], [e, y]])} = ${num(f)} ✓`);
        // Trap: added instead of subtracted (or vice versa).
        const traps: Trap[] = [];
        if (b !== 0 && e !== 0) {
          const L = lcm(Math.abs(b), Math.abs(e)), m1 = L / Math.abs(b), m2 = L / Math.abs(e);
          const same = b * m1 === e * m2;
          const K = same ? m1 * a + m2 * d : m1 * a - m2 * d;
          const R = same ? m1 * c + m2 * f : m1 * c - m2 * f;
          if (K !== 0 && R % K === 0) {
            const xw = R / K;
            if ((c - a * xw) % b === 0 && xw !== x) {
              traps.push(listTrap([xw, (c - a * xw) / b], "Same signs → subtract; different signs → add (SSS: Same Sign Subtract). Check your answer in both equations."));
            }
          }
        }
        return {
          prompt: `Solve the simultaneous equations\n\n(1)  ${shown1}\n\n(2)  ${shown2}\n\nGive your answer as x, y (for example 3, −2).`,
          answer: { type: "list", values: [x, y], ordered: true, display: `x = ${num(x)}, y = ${num(y)}` },
          solution: steps,
          hint: "Multiply one or both equations so that the x's or the y's have the same size coefficient, then add or subtract.",
          traps,
        };
      }
      return {
        prompt: "Solve the simultaneous equations\n\n(1)  {{3x + 2y = 16}}\n\n(2)  {{x - 2y = 0}}\n\nGive your answer as x, y.",
        answer: { type: "list", values: [4, 2], ordered: true },
        solution: ["Add: 4x = 16, x = 4.", "Then 4 − 2y = 0, y = 2."],
      };
    },
  },

  /* 8 ---------------------------------------------------------------- */
  {
    id: `${TOPIC}.substitution`,
    topicId: TOPIC,
    title: "Solve simultaneous equations by substitution",
    level: 2,
    guideRef: "simultaneous-linear",
    generate(rng, tier) {
      for (let i = 0; i < 400; i++) {
        const x = tier === 1 ? rng.nonZero(-3, 8) : rng.nonZero(-8, 9);
        const kind = rng.pick(tier === 1 ? ["yfirst"] : tier === 2 ? ["yfirst", "xfirst", "meet"] : ["xfirst", "meet", "yfirst"]);
        const m = rng.pick(tier === 1 ? [2, 3, 4, -2, -3] : [-5, -4, -3, -2, 2, 3, 4, 5]);
        const k = rng.nonZero(-9, 9);
        if (kind === "meet") {
          // y = m x + k and y = n x + j → coordinates of intersection
          const n = rng.pick([-4, -3, -2, -1, 1, 2, 3, 4, 5]);
          if (n === m) continue;
          const y = m * x + k;
          const j = y - n * x;
          if (j === 0 || Math.abs(y) > 40) continue;
          return {
            prompt: `The lines ${M(`y = ${lin(m, k)}`)} and ${M(`y = ${lin(n, j)}`)} intersect at the point P. Find the coordinates of P. Give your answer as x, y.`,
            answer: { type: "list", values: [x, y], ordered: true, display: `(${num(x)}, ${num(y)})` },
            solution: [
              `At P both y-values are equal: ${M(`${lin(m, k)} = ${lin(n, j)}`)}.`,
              ...solveSteps(m, k, n, j),
              `Substitute into the first line: y = ${num(m)} × ${br(x)} ${k > 0 ? "+" : "−"} ${Math.abs(k)} = ${num(y)}. So P = (${num(x)}, ${num(y)}).`,
            ],
            hint: "Where two lines meet, they have the same x AND the same y. Set the two expressions for y equal.",
          };
        }
        if (kind === "yfirst") {
          // y = m x + k ; a x + b y = c
          const a = rng.int(1, 7), b = rng.nonZero(-5, 6);
          if (a + b * m === 0) continue;
          const y = m * x + k;
          if (Math.abs(y) > 30) continue;
          const c = a * x + b * y;
          if (gcd(gcd(a, Math.abs(b)), Math.abs(c)) !== 1) continue;
          const K = a + b * m, B = b * k;
          const traps: Trap[] = [];
          if ((c - k) % K === 0 && (c - k) / K !== x) {
            const xw = (c - k) / K;
            traps.push(listTrap([xw, m * xw + k], `Multiply *both* terms of ${M(`(${lin(m, k)})`)} by ${b}.`));
          }
          return {
            prompt: `Solve the simultaneous equations\n\n${M(`y = ${lin(m, k)}`)}\n\n${M(eq2(a, b, c, "x", "y"))}\n\nGive your answer as x, y.`,
            answer: { type: "list", values: [x, y], ordered: true, display: `x = ${num(x)}, y = ${num(y)}` },
            solution: [
              `Substitute ${M(`y = ${lin(m, k)}`)} into the second equation: ${M(`${term(a, "x")} ${b > 0 ? "+" : "-"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}(${lin(m, k)}) = ${c}`)}.`,
              `Expand and collect: ${M(`${lin(K, B)} = ${c}`)}.`,
              ...solveSteps(K, B, 0, c),
              `Then y = ${num(m)} × ${br(x)} ${k > 0 ? "+" : "−"} ${Math.abs(k)} = ${num(y)}.`,
            ],
            hint: "One equation already tells you what y equals. Replace y in the other equation with that expression.",
            traps,
          };
        }
        // xfirst: x = m y + k ; a x + b y = c  — unknown y first
        const yv = rng.nonZero(-7, 8);
        const xv = m * yv + k;
        if (Math.abs(xv) > 30) continue;
        const a = rng.nonZero(-5, 6), b = rng.nonZero(-6, 7);
        if (a * m + b === 0) continue;
        const c = a * xv + b * yv;
        if (gcd(gcd(Math.abs(a), Math.abs(b)), Math.abs(c)) !== 1) continue;
        const K = a * m + b, B = a * k;
        return {
          prompt: `Solve the simultaneous equations\n\n${M(`x = ${lin(m, k, "y")}`)}\n\n${M(eq2(a, b, c, "x", "y"))}\n\nGive your answer as x, y.`,
          answer: { type: "list", values: [xv, yv], ordered: true, display: `x = ${num(xv)}, y = ${num(yv)}` },
          solution: [
            `Substitute for x: ${M(`${a === 1 ? "" : a === -1 ? "-" : a}(${lin(m, k, "y")}) ${b > 0 ? "+" : "-"} ${term(Math.abs(b), "y")} = ${c}`)}.`,
            `Expand and collect: ${M(`${lin(K, B, "y")} = ${c}`)}.`,
            ...solveSteps(K, B, 0, c, "y"),
            `Then x = ${num(m)} × ${br(yv)} ${k > 0 ? "+" : "−"} ${Math.abs(k)} = ${num(xv)}.`,
          ],
          hint: "Replace x in the second equation by the expression it equals; you get an equation in y only.",
          traps: xv !== yv ? [listTrap([yv, xv], "You found both values — but give x first, then y.")] : [],
        };
      }
      return {
        prompt: "Solve the simultaneous equations\n\n{{y = 2x + 1}}\n\n{{3x + y = 11}}\n\nGive your answer as x, y.",
        answer: { type: "list", values: [2, 5], ordered: true },
        solution: ["3x + 2x + 1 = 11", "5x = 10, x = 2, y = 5"],
      };
    },
  },

  /* 9 ---------------------------------------------------------------- */
  {
    id: `${TOPIC}.simultaneous-context`,
    topicId: TOPIC,
    title: "Form and solve simultaneous equations from a context",
    level: 3,
    guideRef: "simultaneous-linear",
    generate(rng, tier) {
      const kind = rng.pick(tier === 1 ? ["tickets", "line", "coins"] : ["tickets", "hawker", "coins", "line", "plan"]);
      const cents = (v: number) => (v < 0 ? "−" : "") + (Math.abs(v) % 100 === 0 ? String(Math.abs(v) / 100) : (Math.abs(v) / 100).toFixed(2));
      for (let i = 0; i < 400; i++) {
        if (kind === "tickets" || kind === "hawker") {
          const tickets = kind === "tickets";
          const step = tickets ? (tier === 1 ? 100 : 50) : 10;
          const Xc = tickets ? rng.int(1200 / step, 4000 / step) * step : rng.int(12, 30) * step;
          const Yc = tickets ? rng.int(600 / step, 3000 / step) * step : rng.int(10, 25) * step;
          if (Xc === Yc || (tickets && Yc > Xc - 300)) continue;
          const a1 = rng.int(1, 5), c1 = rng.int(1, 6), a2 = rng.int(1, 5), c2 = rng.int(1, 6);
          if (a1 * c2 - a2 * c1 === 0) continue;
          const T1 = a1 * Xc + c1 * Yc, T2 = a2 * Xc + c2 * Yc;
          const P = person(rng), Q = person(rng, P.name);
          const ctx = tickets
            ? rng.pick([["adult", "child", "tickets for a Sentosa attraction"], ["adult", "student", "concert tickets"], ["adult", "child", "zoo tickets"]])
            : rng.pick([["roti prata", "teh tarik", "at a hawker centre"], ["vegetable bun", "kopi", "at a kopitiam"], ["plate of chee cheong fun", "soy milk", "at a hawker stall"]]);
          const prompt = tickets
            ? `${P.name} pays $${cents(T1)} for ${a1} ${ctx[0]} and ${c1} ${ctx[1]} ${ctx[2]}. ${Q.name} pays $${cents(T2)} for ${a2} ${ctx[0]} and ${c2} ${ctx[1]} tickets. Work out the price of one ${ctx[0]} ticket and one ${ctx[1]} ticket. Give your answer in dollars as ${ctx[0]}, ${ctx[1]}.`
            : `${P.name} buys ${a1} × ${ctx[0]} and ${c1} × ${ctx[1]} ${ctx[2]} for $${cents(T1)}. ${Q.name} buys ${a2} × ${ctx[0]} and ${c2} × ${ctx[1]} for $${cents(T2)}. Work out the cost of one ${ctx[0]} and the cost of one ${ctx[1]}. Give your answer in dollars, ${ctx[0]} first.`;
          const { steps } = solve2([a1, c1, T1], [a2, c2, T2], "a", "c", "(1)", "(2)", cents);
          return {
            prompt,
            answer: { type: "list", values: [Xc / 100, Yc / 100], ordered: true, display: `$${(Xc / 100).toFixed(2)} and $${(Yc / 100).toFixed(2)}` },
            solution: [
              `Let a = the price of one ${ctx[0]}${tickets ? " ticket" : ""} and c = the price of one ${ctx[1]}${tickets ? " ticket" : ""}, in dollars.`,
              `(1) ${M(eq2(a1, c1, T1, "a", "c", (v) => cents(v).replace("−", "-")))} and (2) ${M(eq2(a2, c2, T2, "a", "c", (v) => cents(v).replace("−", "-")))}.`,
              ...steps,
            ],
            hint: "Use two letters for the two unknown prices, write one equation per person, then eliminate.",
            traps: [listTrap([Yc / 100, Xc / 100], `Right values, wrong order — give the ${ctx[0]} price first.`)],
          };
        }
        if (kind === "coins") {
          const [lo, hi] = rng.pick([[10, 50], [20, 50], [10, 20], [20, 100]] as Array<[number, number]>);
          const p = rng.int(3, tier === 1 ? 15 : 30), q = rng.int(3, tier === 1 ? 15 : 30);
          if (p === q) continue;
          const n = p + q, V = lo * p + hi * q;
          const nm = (c: number) => (c === 100 ? "$1" : `${c}c`);
          const { steps } = solve2([1, 1, n], [lo, hi, V], "x", "y", "(1)", "(2)");
          const P = person(rng);
          return {
            prompt: `${P.name} has ${n} coins in ${P.pos} piggy bank. They are all ${nm(lo)} and ${nm(hi)} coins, and their total value is $${cents(V)}. How many of each coin does ${P.sub} have? Give your answer as number of ${nm(lo)} coins, number of ${nm(hi)} coins.`,
            answer: { type: "list", values: [p, q], ordered: true, display: `${p} × ${nm(lo)} and ${q} × ${nm(hi)}` },
            solution: [
              `Let x = number of ${nm(lo)} coins and y = number of ${nm(hi)} coins. Work in cents.`,
              `(1) ${M(`x + y = ${n}`)} (number of coins); (2) ${M(eq2(lo, hi, V, "x", "y"))} (value in cents).`,
              ...steps,
            ],
            hint: "One equation counts the coins; the other counts their value. Work in cents so everything is a whole number.",
            traps: [listTrap([q, p], `Right values, wrong order — ${nm(lo)} coins first.`)],
          };
        }
        if (kind === "plan") {
          const fee = rng.int(10, 40), rateC = rng.int(2, 12) * 50; // rate per GB in cents
          const g1 = rng.int(2, 15), g2 = rng.int(2, 25);
          if (g1 === g2) continue;
          const B1 = fee * 100 + g1 * rateC, B2 = fee * 100 + g2 * rateC;
          const P = person(rng);
          const { steps } = solve2([1, g1, B1], [1, g2, B2], "f", "r", "(1)", "(2)", cents);
          return {
            prompt: `${P.name}'s mobile plan charges a fixed monthly fee plus a cost for each GB of data used. In March ${P.sub} used ${g1} GB and paid $${cents(B1)}. In April ${P.sub} used ${g2} GB and paid $${cents(B2)}. Work out the fixed fee and the cost per GB. Give your answer in dollars, fixed fee first.`,
            answer: { type: "list", values: [fee, rateC / 100], ordered: true, display: `$${fee} and $${(rateC / 100).toFixed(2)} per GB` },
            solution: [
              `Let f = fixed fee and r = cost per GB, in dollars.`,
              `(1) ${M(`f + ${g1}r = ${cents(B1)}`)}; (2) ${M(`f + ${g2}r = ${cents(B2)}`)}.`,
              ...steps,
            ],
            hint: "Subtracting the two bills removes the fixed fee — the difference is all data.",
            traps: [listTrap([rateC / 100, fee], "Right values, wrong order — fixed fee first.")],
          };
        }
        // line through two points: y = m x + c
        const mm = rng.pick(tier === 1 ? [1, 2, 3, 4, -1, -2, -3] : [-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6]);
        const cc = rng.nonZero(-9, 9);
        const x1 = rng.int(-4, 6), x2 = rng.int(-4, 8);
        if (x1 === x2) continue;
        const y1 = mm * x1 + cc, y2 = mm * x2 + cc;
        const { steps } = solve2([x1, 1, y1], [x2, 1, y2], "m", "c", "(1)", "(2)");
        return {
          prompt: `The straight line ${M("y = mx + c")} passes through the points (${num(x1)}, ${num(y1)}) and (${num(x2)}, ${num(y2)}). Use simultaneous equations to find m and c. Give your answer as m, c.`,
          answer: { type: "list", values: [mm, cc], ordered: true, display: `m = ${num(mm)}, c = ${num(cc)}` },
          solution: [
            `Substitute each point into y = mx + c: (1) ${M(`${y1} = ${x1 === 0 ? "" : `${term(x1, "m")} + `}c`)}; (2) ${M(`${y2} = ${x2 === 0 ? "" : `${term(x2, "m")} + `}c`)}.`,
            ...steps,
          ],
          hint: "Each point gives you one equation in m and c.",
          traps: mm !== cc ? [listTrap([cc, mm], "Give m first, then c.")] : [],
        };
      }
      return {
        prompt: "3 adult tickets and 2 child tickets cost $95. 1 adult and 4 child tickets cost $65. Find the price of each ticket, adult first.",
        answer: { type: "list", values: [25, 10], ordered: true },
        solution: ["3a + 2c = 95, a + 4c = 65", "a = 25, c = 10"],
      };
    },
  },

  /* 10 --------------------------------------------------------------- */
  {
    id: `${TOPIC}.three-unknowns`,
    topicId: TOPIC,
    title: "Solve three equations in three unknowns",
    level: 3,
    guideRef: "simultaneous-three",
    generate(rng, tier) {
      for (let i = 0; i < 500; i++) {
        const x = rng.int(tier === 1 ? 1 : -4, 6), y = rng.int(tier === 1 ? 1 : -4, 6), z = rng.int(tier === 1 ? 1 : -4, 6);
        const R = tier === 1 ? 3 : tier === 2 ? 4 : 5;
        const row = (): [number, number, number] => [rng.int(-R, R), rng.int(-R, R), tier === 1 ? rng.pick([1, -1]) : rng.int(-R, R)];
        const rows = [row(), row(), row()];
        if (tier === 1) rows[0] = [1, 1, 1];
        // Pivot: eliminate z using row 1, which must contain z; row 2 must contain z too.
        if (rows[0][2] === 0 || rows[1][2] === 0) continue;
        if (rows.some((r) => r.filter((v) => v !== 0).length < 2)) continue;
        const [[a1, b1, c1], [a2, b2, c2], [a3, b3, c3]] = rows;
        const det = a1 * (b2 * c3 - b3 * c2) - b1 * (a2 * c3 - a3 * c2) + c1 * (a2 * b3 - a3 * b2);
        if (det === 0) continue;
        const d = rows.map(([p, q, r]) => p * x + q * y + r * z);
        if (d.some((v) => Math.abs(v) > 50)) continue;
        // Equation (4) from (1),(2); (5) from (1),(3) (or (3) itself if it has no z).
        const combo = (ri: number): [number, number, number] | null => {
          const [p, q, r] = rows[ri];
          if (r === 0) return [p, q, d[ri]];
          const g = gcd(Math.abs(c1), Math.abs(r));
          const k1 = r / g, k2 = c1 / g; // k1·(1) − k2·(row)
          let e: [number, number, number] = [k1 * a1 - k2 * p, k1 * b1 - k2 * q, k1 * d[0] - k2 * d[ri]];
          const h = gcd(gcd(Math.abs(e[0]), Math.abs(e[1])), Math.abs(e[2])) || 1;
          e = [e[0] / h, e[1] / h, e[2] / h];
          if (e[0] < 0 || (e[0] === 0 && e[1] < 0)) e = [-e[0], -e[1], -e[2]];
          return e;
        };
        const e4 = combo(1), e5 = combo(2);
        if (!e4 || !e5) continue;
        if (e4[0] * e5[1] - e4[1] * e5[0] === 0) continue;
        if (Math.max(...e4.map(Math.abs), ...e5.map(Math.abs)) > (tier === 3 ? 40 : 30) || Math.max(Math.abs(e4[0]), Math.abs(e4[1]), Math.abs(e5[0]), Math.abs(e5[1])) > 12) continue;
        const how = (ri: number) => {
          const r = rows[ri][2];
          if (r === 0) return `(${ri + 1}) has no z-term, so call it (5): ${M(eq2(e5[0], e5[1], e5[2], "x", "y"))}.`;
          const g = gcd(Math.abs(c1), Math.abs(r));
          const k1 = r / g, k2 = c1 / g;
          const lab = ri === 1 ? "(4)" : "(5)";
          const e = ri === 1 ? e4 : e5;
          const s1 = k1 < 0 ? -k1 : k1, s2 = k1 < 0 ? -k2 : k2; // s1·(1) − s2·(row), s1 > 0
          const desc = `${s1 === 1 ? "" : `${s1} × `}(1) ${s2 > 0 ? "−" : "+"} ${Math.abs(s2) === 1 ? "" : `${Math.abs(s2)} × `}(${ri + 1})`;
          return `Eliminate z using ${desc}, then simplify: ${lab} ${M(eq2(e[0], e[1], e[2], "x", "y"))}.`;
        };
        const two = solve2(e4, e5, "x", "y", "(4)", "(5)");
        if (two.x !== x || two.y !== y) continue;
        const eqs = rows.map((r, j) => `(${j + 1})  ${M(`${poly([[r[0], "x"], [r[1], "y"], [r[2], "z"]])} = ${d[j]}`)}`);
        return {
          prompt: `Solve the simultaneous equations\n\n${eqs.join("\n\n")}\n\nGive your answer as x, y, z.`,
          answer: { type: "list", values: [x, y, z], ordered: true, display: `x = ${num(x)}, y = ${num(y)}, z = ${num(z)}` },
          solution: [
            how(1),
            how(2),
            ...two.steps,
            `Substitute x = ${num(x)} and y = ${num(y)} into (1): ${M(`${term(c1, "z")} = ${d[0]} - ${a1 * x + b1 * y < 0 ? `(${a1 * x + b1 * y})` : a1 * x + b1 * y}`)}, so ${c1 === 1 ? `z = ${num(z)}` : `${M(`${term(c1, "z")} = ${c1 * z}`)} and z = ${num(z)}`}.`,
            `Check in (3): ${plainSum([[a3, x], [b3, y], [c3, z]])} = ${num(d[2])} ✓`,
          ],
          hint: "Use one equation to knock z out of each of the other two. That leaves two equations in x and y.",
          traps: x !== z ? [listTrap([z, y, x], "Give the values in the order x, y, z.")] : [],
        };
      }
      return {
        prompt: "Solve the simultaneous equations\n\n(1)  {{x + y + z = 6}}\n\n(2)  {{x - y + z = 2}}\n\n(3)  {{2x + y - z = 1}}\n\nGive your answer as x, y, z.",
        answer: { type: "list", values: [1, 2, 3], ordered: true },
        solution: ["(1) − (2): 2y = 4, so y = 2.", "(1) + (3): 3x + 2y = 7, so x = 1.", "Then z = 6 − 1 − 2 = 3."],
      };
    },
  },
];
