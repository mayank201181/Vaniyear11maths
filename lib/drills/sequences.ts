// Procedural skill drills — Sequences & Series (topic "sequences").
// Spec: docs/DRILLS.md. Every generator picks the structure first (a, d, n, the
// coefficients of an² + bn + c …) from integers, then builds the question around
// it, so every marked answer is exact. Decimals are built from whole numbers of
// tenths/halves and passed through clean(). Bounded rejection loops remove
// trivial or degenerate cases, and every trap is filtered so it can never equal
// the correct answer.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { big, br, clean, frac, gcd, num, ordinal, poly, roundTo, simplify, term } from "./helpers.ts";

const TOPIC = "sequences";
const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara", "Olivia", "Kenji"] as const;

// ---------------------------------------------------------------------------
// Formatting helpers
// ---------------------------------------------------------------------------

/** a·v + b as tidy ASCII ("3n + 2", "20 - 3n", "1.5n - 0.5"); safe inside {{ }} and as an AnswerSpec expr. */
function lin(a: number, b: number, v = "n"): string {
  a = clean(a);
  b = clean(b);
  if (a < 0 && b > 0) return `${b} - ${term(-a, v)}`;
  return poly([[a, v], [b, ""]]);
}

/** Plain-text substitution of n = k into lin(a, b): "3 × 10 + 2", "20 − 3 × 4". */
function subst(a: number, b: number, k: number): string {
  if (a < 0 && b > 0) return `${num(b)} − ${num(-a)} × ${br(k)}`;
  const first = `${num(a)} × ${br(k)}`;
  if (b === 0) return first;
  return `${first} ${b < 0 ? "−" : "+"} ${num(Math.abs(b))}`;
}

/** "7, 11, 15, 19, …" */
const seqText = (vals: number[]): string => vals.map(num).join(", ") + ", …";
/** "5 + 9 + 13 + …" */
const seriesText = (vals: number[]): string => vals.map((v, i) => (i === 0 ? num(v) : v < 0 ? `(${num(v)})` : num(v))).join(" + ") + " + …";

/** Sum of the first n terms of the arithmetic series with first term a, difference d. */
const Sn = (a: number, d: number, n: number): number => clean((n * (2 * a + (n - 1) * d)) / 2);

/** Number traps, skipping anything equal to the answer or an earlier trap, and non-finite values. */
function numTraps(answer: number, list: Array<[number, string]>): Trap[] {
  const out: Trap[] = [];
  const seen: number[] = [clean(answer)];
  for (const [v, feedback] of list) {
    if (!Number.isFinite(v)) continue;
    const c = clean(v);
    if (Math.abs(c * 10000 - Math.round(c * 10000)) > 1e-6) continue;
    if (seen.some((s) => Math.abs(s - c) < 1e-9)) continue;
    seen.push(c);
    out.push({ spec: { type: "number", value: c }, feedback });
  }
  return out;
}

/** Expression traps given as [expr, values at n = 1..6, feedback]; skipped when they match the answer's values. */
function exprTraps(answerVals: number[], list: Array<[string, number[], string]>): Trap[] {
  const out: Trap[] = [];
  const seen: number[][] = [answerVals];
  const same = (x: number[], y: number[]) => x.every((v, i) => Math.abs(v - y[i]) < 1e-9);
  for (const [expr, vals, feedback] of list) {
    if (vals.some((v) => !Number.isFinite(v))) continue;
    if (seen.some((s) => same(s, vals))) continue;
    seen.push(vals);
    out.push({ spec: { type: "expression", expr }, feedback });
  }
  return out;
}

const N6 = [1, 2, 3, 4, 5, 6];
const linVals = (a: number, b: number): number[] => N6.map((n) => clean(a * n + b));

// Exact rationals -------------------------------------------------------------
interface Q {
  n: number;
  d: number;
}
const q = (n: number, d = 1): Q => {
  const [a, b] = simplify(n, d);
  return { n: a, d: b };
};
const qEq = (x: Q, y: Q): boolean => x.n === y.n && x.d === y.d;
/** Running text: whole numbers plain, fractions as {{n/d}}. */
const qShow = (x: Q): string => (x.d === 1 ? num(x.n) : frac(x.n, x.d));
function qSpec(x: Q): AnswerSpec {
  return x.d === 1 ? { type: "number", value: x.n } : { type: "fraction", n: x.n, d: x.d, simplest: true, allowDecimal: true, display: frac(x.n, x.d) };
}
function qTraps(answer: Q, list: Array<[Q, string]>): Trap[] {
  const out: Trap[] = [];
  const seen: Q[] = [answer];
  for (const [v, feedback] of list) {
    if (!Number.isFinite(v.n) || !Number.isFinite(v.d) || v.d === 0) continue;
    if (seen.some((s) => qEq(s, v))) continue;
    seen.push(v);
    out.push({ spec: v.d === 1 ? { type: "number", value: v.n } : { type: "fraction", n: v.n, d: v.d }, feedback });
  }
  return out;
}

const YES = ["yes", "y", "yes it is", "yes, it is", "it is", "true", "yes it's a term", "yes, it's a term", "it is a term"];
const NO = ["no", "n", "no it is not", "no, it is not", "no it isn't", "no, it isn't", "no it's not", "no, it's not", "it is not", "not a term", "it is not a term", "false"];

/** "a n + b" inside {{ }} as a numerator/denominator piece, bracketed when it has two terms. */
/** Integer inside {{ }} with ASCII minus, bracketed when negative: (-3). */
const ib = (n: number): string => (n < 0 ? `(${n})` : `${n}`);

const bk = (s: string): string => (/[+-]/.test(s.replace(/^-/, "")) ? `(${s})` : s);

const FORMULA = "{{S_n = n/2 (2a + (n - 1)d)}}";

// ---------------------------------------------------------------------------
// 1. nth term of a linear sequence
// ---------------------------------------------------------------------------
const findNthTerm: Drill = {
  id: `${TOPIC}.linear-nth-term`,
  topicId: TOPIC,
  title: "Find the nth term of a linear sequence",
  level: 1,
  guideRef: "linear-nth-term",
  generate(rng, tier) {
    const halves = tier === 3 && rng.bool(0.5);
    const later = tier === 3 && !halves; // shown terms start part-way through the sequence
    let d = 3, b = 2, s = 1;
    for (let i = 0; i < 100; i++) {
      if (tier === 1) {
        d = rng.int(2, 9);
        b = rng.int(-5, 9);
      } else if (tier === 2) {
        d = rng.pick([-9, -8, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9, 11, 12]);
        b = rng.int(-15, 30);
      } else if (halves) {
        d = rng.pick([0.5, 1.5, 2.5, 3.5, -0.5, -1.5, -2.5]);
        b = rng.pick([-3.5, -2.5, -1.5, -0.5, 0.5, 1.5, 2.5, 3.5, 4.5, 6, 2, -1]);
      } else {
        d = rng.pick([-13, -11, -9, -7, -6, -4, 3, 4, 6, 7, 8, 9, 11, 13, 15]);
        b = rng.int(-40, 60);
        s = rng.int(3, 7);
      }
      const first = clean(d + b);
      if (b === 0 || first === 0) continue;
      if (tier === 1 && first <= 0) continue;
      if (later && clean(d * s + b) === 0) continue;
      break;
    }
    const pos = [0, 1, 2, 3, 4].map((k) => s + k);
    const vals = pos.map((k) => clean(d * k + b));
    const ans = lin(d, b);
    const name = rng.pick(NAMES);
    let prompt: string;
    if (later) {
      prompt = `The ${ordinal(pos[0])}, ${ordinal(pos[1])}, ${ordinal(pos[2])} and ${ordinal(pos[3])} terms of a linear sequence are\n\n${vals.slice(0, 4).map(num).join(", ")}\n\nFind an expression, in terms of n, for the nth term of the sequence.`;
    } else {
      prompt = rng.pick([
        `Here are the first five terms of an arithmetic sequence:\n\n${seqText(vals)}\n\nFind an expression, in terms of n, for the nth term of this sequence.`,
        `Write down an expression for the nth term of the sequence ${seqText(vals.slice(0, 4))}`,
        `${name} writes down the sequence ${seqText(vals.slice(0, 4))}\n\nFind an expression, in terms of n, for the nth term.`,
      ]);
    }
    const dn = term(d, "n");
    const atS = clean(d * s);
    const shownFirst = vals[0];
    const adjust = clean(shownFirst - atS);
    const solution = [
      `The terms go ${d > 0 ? "up" : "down"} by ${num(Math.abs(d))} each time, so the nth term starts {{${dn}}}.`,
      later
        ? `When n = ${s}, {{${dn}}} = ${num(atS)}, but the ${ordinal(s)} term is ${num(shownFirst)}.`
        : `When n = 1, {{${dn}}} = ${num(d)}, but the 1st term is ${num(shownFirst)}.`,
      `${num(shownFirst)} − ${br(atS)} = ${num(adjust)}, so nth term = {{${ans}}}.`,
      `Check: n = ${pos[2]} gives ${subst(d, b, pos[2])} = ${num(vals[2])} ✓`,
    ];
    const traps = exprTraps(linVals(d, b), [
      later
        ? [lin(d, clean(shownFirst - d)), linVals(d, clean(shownFirst - d)), `The first number shown is the ${ordinal(s)} term, not the 1st. Compare with {{${dn}}} at n = ${s}.`]
        : [lin(d, shownFirst), linVals(d, shownFirst), "You used the first term as the constant. Compare the sequence with the times table of the difference instead."],
      [lin(1, d), linVals(1, d), `That's the term-to-term rule ("add ${num(d)}"), not a position-to-term rule. The difference goes in front of n.`],
    ]);
    return {
      prompt,
      answer: { type: "expression", expr: ans, form: "simplified", display: `{{${ans}}}` },
      solution,
      hint: "The common difference tells you the multiple of n. Then compare with the actual terms.",
      traps,
    };
  },
};

// ---------------------------------------------------------------------------
// 2. Using the nth term: which term? is it a term? first term past a value
// ---------------------------------------------------------------------------
const useNthTerm: Drill = {
  id: `${TOPIC}.use-nth-term`,
  topicId: TOPIC,
  title: "Is it a term? Which term? Use the nth term",
  level: 2,
  guideRef: "linear-nth-term",
  generate(rng, tier) {
    const mode = tier === 1 ? rng.pick(["which", "first"] as const) : rng.pick(["which", "isTerm", "first"] as const);
    const showTerms = tier >= 2 && rng.bool(0.5);
    const decreasingFirst = mode === "first" && tier === 3 && rng.bool(0.5);
    let a = 3, b = 4;
    for (let i = 0; i < 100; i++) {
      if (decreasingFirst) {
        a = -rng.int(3, 9);
        b = rng.int(60, 300);
        if (b % -a === 0 && rng.bool(0.6)) continue;
      } else if (mode === "first") {
        a = rng.int(tier === 1 ? 2 : 3, tier === 1 ? 9 : 15);
        b = rng.int(-12, 15);
      } else if (mode === "isTerm") {
        a = rng.pick([-9, -7, -6, -5, -4, -3, 3, 4, 5, 6, 7, 8, 9, 11, 12]);
        b = a < 0 ? rng.int(100, 600) : rng.int(-20, 25);
      } else {
        a = tier === 1 ? rng.int(2, 9) : rng.pick([-8, -7, -6, -5, -4, -3, 3, 4, 5, 6, 7, 8, 9, 11, 12]);
        b = a < 0 ? rng.int(200, 900) : rng.int(-15, 20);
      }
      if (b === 0 || a + b === 0) continue;
      break;
    }
    const nth = lin(a, b);
    const intro = showTerms
      ? `Here are the first four terms of an arithmetic sequence: ${seqText([1, 2, 3, 4].map((k) => a * k + b))}`
      : `The nth term of a sequence is {{${nth}}}.`;
    const find = showTerms ? [`The difference is ${num(a)}, so the nth term is {{${nth}}}.`] : [];

    if (mode === "which") {
      let k = 30;
      for (let i = 0; i < 100; i++) {
        k = rng.int(tier === 1 ? 12 : 20, tier === 1 ? 60 : 120);
        if (a * k + b > 0 || a < 0) break;
      }
      const X = a * k + b;
      return {
        prompt: `${intro}\n\nWhich term of the sequence is equal to ${num(X)}?`,
        answer: { type: "number", value: k, display: `the ${ordinal(k)} term (n = ${k})` },
        solution: [
          ...find,
          `Set the nth term equal to ${num(X)}: {{${nth} = ${X}}}.`,
          `${a > 0 ? `{{${term(a, "n")} = ${X} - ${ib(b)} = ${X - b}}}` : `{{${term(-a, "n")} = ${b} - ${ib(X)} = ${b - X}}}`}.`,
          `n = ${a > 0 ? `${num(X - b)} ÷ ${a}` : `${num(b - X)} ÷ ${-a}`} = ${k}, so ${num(X)} is the ${ordinal(k)} term.`,
        ],
        hint: "Make an equation: nth term = the value, then solve for n.",
        traps: numTraps(k, [
          [(X + b) / a, "Check the sign when you move the constant across — undo it with the inverse operation."],
          [X / a, "Deal with the constant term before dividing by the coefficient of n."],
        ].filter(([v]) => Number.isInteger(v) && (v as number) > 0) as Array<[number, string]>),
      };
    }

    if (mode === "isTerm") {
      const isTerm = rng.bool(0.5);
      let X = 0;
      for (let i = 0; i < 100; i++) {
        const k = rng.int(15, 90);
        X = a * k + b + (isTerm ? 0 : rng.int(1, Math.abs(a) - 1) * (rng.bool() ? 1 : -1));
        if (X > 0 && (X - b) / a > 1) break;
      }
      const nVal = q(X - b, a);
      return {
        prompt: `${intro}\n\nIs ${num(X)} a term of this sequence? Answer yes or no.`,
        answer: isTerm ? { type: "text", accept: YES, display: `Yes — it is the ${ordinal(nVal.n)} term` } : { type: "text", accept: NO, display: "No" },
        solution: [
          ...find,
          `Solve {{${nth} = ${X}}}.`,
          `n = ${num(X - b)} ÷ ${br(a)} = ${nVal.d === 1 ? num(nVal.n) : frac(nVal.n, nVal.d, { mixed: true })}.`,
          isTerm
            ? `n is a positive whole number, so yes: ${num(X)} is the ${ordinal(nVal.n)} term.`
            : `n is not a whole number, so ${num(X)} is **not** a term (it falls between the ${ordinal(Math.floor(nVal.n / nVal.d))} and ${ordinal(Math.floor(nVal.n / nVal.d) + 1)} terms).`,
        ],
        hint: "Set the nth term equal to the number. A term needs a whole-number position n.",
        traps: isTerm
          ? [{ spec: { type: "text", accept: ["no"] }, feedback: "Solve the equation carefully — the value of n comes out as a whole number here." }]
          : [{ spec: { type: "text", accept: ["yes"] }, feedback: "Close isn't enough. Solve the equation: n must be a whole number for it to be a term." }],
      };
    }

    // mode === "first"
    if (decreasingFirst) {
      let n = 1;
      while (a * n + b >= 0) n++;
      const val = a * n + b;
      const exact = q(b, -a);
      return {
        prompt: `${intro}\n\nFind the first term of the sequence that is negative.`,
        answer: { type: "number", value: val },
        solution: [
          ...find,
          `Negative means {{${nth} < 0}}, so {{${term(-a, "n")} > ${b}}}.`,
          `n > ${num(b)} ÷ ${-a} = ${exact.d === 1 ? num(exact.n) : frac(exact.n, exact.d, { mixed: true })}${exact.d === 1 ? " — at exactly that n the term is 0, which is not negative" : ""}.`,
          `So n = ${n}, and the ${ordinal(n)} term is ${subst(a, b, n)} = ${num(val)}.`,
        ],
        hint: "Write an inequality: nth term < 0. Solve it, then think about which whole number n works.",
        traps: numTraps(val, [
          [n, "That's the position n. The question asks for the value of the term."],
          [a * (n - 1) + b, "That term is not negative. Which is the first whole number n bigger than your answer?"],
        ]),
      };
    }
    const X = rng.int(tier === 1 ? 60 : 150, tier === 1 ? 200 : 900);
    let n = 1;
    while (a * n + b <= X) n++;
    const val = a * n + b;
    const exact = q(X - b, a);
    return {
      prompt: `${intro}\n\nFind the first term of the sequence that is greater than ${num(X)}.`,
      answer: { type: "number", value: val },
      solution: [
        ...find,
        `Solve {{${nth} > ${X}}}: {{${term(a, "n")} > ${X - b}}}.`,
        `n > ${num(X - b)} ÷ ${a} = ${exact.d === 1 ? num(exact.n) : frac(exact.n, exact.d, { mixed: true })}${exact.d === 1 ? ` — at exactly that n the term equals ${num(X)}, which is not *greater*` : ""}.`,
        `So n = ${n}, and the ${ordinal(n)} term is ${subst(a, b, n)} = ${num(val)}.`,
      ],
      hint: "Write an inequality: nth term > the value. Solve it, then take the next whole number.",
      traps: numTraps(val, [
        [n, "That's the position n. The question asks for the value of the term."],
        [a * (n - 1) + b, `That term is not greater than ${num(X)}. Take the next whole number n.`],
      ]),
    };
  },
};

// ---------------------------------------------------------------------------
// 3. kth term from a and d
// ---------------------------------------------------------------------------
const kthTerm: Drill = {
  id: `${TOPIC}.kth-term`,
  topicId: TOPIC,
  title: "Find a term using a + (n − 1)d",
  level: 1,
  guideRef: "arithmetic-sequences",
  generate(rng, tier) {
    // Work in tenths so decimal sequences stay exact.
    let A = 30, D = 40, k = 40;
    for (let i = 0; i < 100; i++) {
      if (tier === 1) {
        A = rng.int(1, 20) * 10;
        D = rng.int(2, 9) * 10;
        k = rng.int(20, 60);
      } else if (tier === 2) {
        A = rng.int(-20, 60) * 10;
        D = rng.pick([-12, -9, -8, -7, -6, -5, -4, -3, 3, 4, 5, 6, 7, 8, 9, 11, 12]) * 10;
        k = rng.int(30, 100);
      } else {
        A = rng.int(-80, 150);
        D = rng.pick([-27, -23, -17, -13, -7, -6, -4, -3, 3, 4, 6, 7, 12, 13, 15, 17, 25]);
        k = rng.int(50, 200);
      }
      if (A === 0 || A + (k - 1) * D === 0) continue;
      if (A % 10 === 0 && D % 10 === 0 && tier === 3) continue;
      break;
    }
    const a = clean(A / 10), d = clean(D / 10);
    const ans = clean((A + (k - 1) * D) / 10);
    const terms = [0, 1, 2, 3].map((j) => clean((A + j * D) / 10));
    const name = rng.pick(NAMES);
    const given = rng.bool(0.35);
    const prompt = given ? `An arithmetic sequence has first term ${num(a)} and common difference ${num(d)}.\n\nFind the ${ordinal(k)} term.` : rng.pick([
      `Here are the first four terms of an arithmetic sequence: ${seqText(terms)}\n\nUse {{a + (n - 1)d}} to find the ${ordinal(k)} term.`,
      `${name}'s arithmetic sequence starts ${seqText(terms)}\n\nWork out the ${ordinal(k)} term of the sequence.`,
    ]);
    return {
      prompt,
      answer: { type: "number", value: ans },
      solution: [
        given ? `a = ${num(a)} and d = ${num(d)}.` : `a = ${num(a)} and d = ${num(terms[1])} − ${br(terms[0])} = ${num(d)}.`,
        `The ${ordinal(k)} term is {{a + (${k} - 1)d}} = ${num(a)} + ${k - 1} × ${br(d)}.`,
        `= ${num(a)} ${clean((k - 1) * d) < 0 ? "−" : "+"} ${num(Math.abs(clean(((k - 1) * D) / 10)))} = ${num(ans)}.`,
      ],
      hint: `To reach the ${ordinal(k)} term you add d only ${k - 1} times — not ${k}.`,
      traps: numTraps(ans, [
        [clean((A + k * D) / 10), `You added d ${k} times. From the 1st term to the ${ordinal(k)} term there are only ${k - 1} steps.`],
        [clean((D + (k - 1) * A) / 10), "You've swapped a and d. a is the first term; d is the gap between terms."],
      ]),
    };
  },
};

// ---------------------------------------------------------------------------
// 4. Arithmetic sequence from two pieces of information
// ---------------------------------------------------------------------------
const twoTerms: Drill = {
  id: `${TOPIC}.from-two-terms`,
  topicId: TOPIC,
  title: "Find a and d from two terms",
  level: 2,
  guideRef: "arithmetic-sequences",
  generate(rng, tier) {
    let a = 5, d = 3, u = 3, v = 8;
    for (let i = 0; i < 100; i++) {
      a = tier === 1 ? rng.int(1, 20) : rng.int(-30, 40);
      d = tier === 1 ? rng.int(2, 9) : rng.pick([-9, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9, 11]);
      u = rng.int(2, tier === 1 ? 6 : 10);
      v = u + rng.int(2, tier === 1 ? 6 : 12);
      if (a === 0 || a === d || a - d === 0) continue;
      break;
    }
    const t = (n: number) => a + (n - 1) * d;
    const P = t(u), Q = t(v);
    const sumMode = tier === 3 && rng.bool(0.5);
    const mode = sumMode ? "nth" : rng.pick(tier === 1 ? (["ad", "kth"] as const) : (["nth", "kth", "ad"] as const));
    const nth = lin(d, a - d);
    let intro: string;
    let solve: string[];
    if (sumMode) {
      let r = u + 1, s = u + 3;
      for (let i = 0; i < 100; i++) {
        r = rng.int(2, 9);
        s = r + rng.int(1, 8);
        if (r !== u && s !== u && r + s !== 2 * u) break;
      }
      const R = t(r) + t(s);
      const coef = r + s - 2 - 2 * (u - 1);
      intro = `In an arithmetic sequence, the ${ordinal(u)} term is ${num(P)} and the sum of the ${ordinal(r)} and ${ordinal(s)} terms is ${num(R)}.`;
      solve = [
        `{{a + ${u - 1}d = ${P}}} and {{(a + ${r - 1}d) + (a + ${s - 1}d) = ${R}}}, i.e. {{2a + ${r + s - 2}d = ${R}}}.`,
        `Double the first: {{2a + ${2 * (u - 1)}d = ${2 * P}}}. Subtract: {{${term(coef, "d")} = ${R - 2 * P}}}, so d = ${num(d)}.`,
        `Then a = ${num(P)} − ${u - 1} × ${br(d)} = ${num(a)}.`,
      ];
    } else {
      intro = `In an arithmetic sequence, the ${ordinal(u)} term is ${num(P)} and the ${ordinal(v)} term is ${num(Q)}.`;
      solve = [
        `From the ${ordinal(u)} term to the ${ordinal(v)} term is ${v - u} steps of d: {{${v - u}d = ${Q} - ${ib(P)} = ${Q - P}}}, so d = ${num(d)}.`,
        `{{a + ${u - 1}d = ${P}}}, so a = ${num(P)} − ${u - 1} × ${br(d)} = ${num(a)}.`,
      ];
    }
    const hint = "Write each fact as an equation in a and d (the nth term is a + (n − 1)d), then solve them simultaneously.";
    if (mode === "nth") {
      return {
        prompt: `${intro}\n\nFind an expression, in terms of n, for the nth term of the sequence.`,
        answer: { type: "expression", expr: nth, form: "simplified", display: `{{${nth}}}` },
        solution: [...solve, `nth term = {{a + (n - 1)d}} = ${num(a)} + ${br(d)}(n − 1) = {{${nth}}}.`],
        hint,
        traps: exprTraps(linVals(d, a - d), [
          [lin(d, a), linVals(d, a), "Expand a + (n − 1)d carefully: the constant is a − d, not a."],
          [lin(a, d), linVals(a, d), "You've swapped a and d. The common difference multiplies n."],
        ]),
      };
    }
    if (mode === "kth") {
      let k = rng.int(25, 80);
      if (k === u || k === v) k += 1;
      const ans = t(k);
      return {
        prompt: `${intro}\n\nFind the ${ordinal(k)} term of the sequence.`,
        answer: { type: "number", value: ans },
        solution: [...solve, `${ordinal(k)} term = ${num(a)} + ${k - 1} × ${br(d)} = ${num(ans)}.`],
        hint,
        traps: numTraps(ans, [
          [a + k * d, `From the 1st term to the ${ordinal(k)} term there are ${k - 1} steps of d, not ${k}.`],
          [P + (k - u + 1) * d, "Count the steps from the term you know carefully."],
        ]),
      };
    }
    return {
      prompt: `${intro}\n\nFind the first term a and the common difference d. Give a first, then d.`,
      answer: { type: "list", values: [a, d], ordered: true, display: `a = ${num(a)}, d = ${num(d)}` },
      solution: solve,
      hint,
      traps: [{ spec: { type: "list", values: [d, a], ordered: true }, feedback: "Right numbers, wrong order — give a (the first term) first, then d." }],
    };
  },
};

// ---------------------------------------------------------------------------
// 5. Sum of an arithmetic series using Sn
// ---------------------------------------------------------------------------
const sumSeries: Drill = {
  id: `${TOPIC}.sum-series`,
  topicId: TOPIC,
  title: "Sum an arithmetic series with the Sₙ formula",
  level: 2,
  guideRef: "arithmetic-series",
  generate(rng, tier) {
    let a = 3, d = 4, n = 20;
    for (let i = 0; i < 100; i++) {
      if (tier === 1) {
        a = rng.int(1, 12);
        d = rng.int(2, 6);
        n = rng.int(10, 30);
      } else {
        a = rng.int(-25, 60);
        d = rng.pick([-9, -7, -6, -5, -4, -3, -2, 2, 3, 4, 5, 6, 7, 8, 9, 11]);
        n = rng.int(15, 50);
      }
      if (a === 0 || Sn(a, d, n) === 0 || a === d) continue;
      break;
    }
    const terms = [0, 1, 2, 3].map((j) => a + j * d);
    if (tier === 3 && rng.bool(0.6)) {
      // Sum of a block of terms from the p-th to the q-th.
      const p = rng.int(5, 20);
      const qq = p + rng.int(10, 30);
      const ans = Sn(a, d, qq) - Sn(a, d, p - 1);
      return {
        prompt: `Here is an arithmetic series: ${seriesText(terms)}\n\nWork out the sum of the ${ordinal(p)} term to the ${ordinal(qq)} term inclusive.`,
        answer: { type: "number", value: ans },
        solution: [
          `a = ${num(a)}, d = ${num(d)}. Sum from the ${ordinal(p)} to the ${ordinal(qq)} term = {{S_${qq} - S_${p - 1}}}.`,
          `{{S_${qq}}} = {{${qq}/2}} × (2 × ${br(a)} + ${qq - 1} × ${br(d)}) = ${big(Sn(a, d, qq))}.`,
          `{{S_${p - 1}}} = {{${p - 1}/2}} × (2 × ${br(a)} + ${p - 2} × ${br(d)}) = ${big(Sn(a, d, p - 1))}.`,
          `Difference = ${big(ans)}.`,
        ],
        hint: `Total of the first ${qq} terms, minus the terms you don't want. Which ones are those?`,
        traps: numTraps(ans, [
          [Sn(a, d, qq) - Sn(a, d, p), `You've also removed the ${ordinal(p)} term — subtract only the first ${p - 1} terms.`],
          [Sn(a, d, qq - p + 1), "That's the sum of the first few terms of the series, not the block you were asked for."],
        ]),
      };
    }
    const ans = Sn(a, d, n);
    const prompt = rng.pick([
      `Find the sum of the first ${n} terms of the arithmetic series ${seriesText(terms)}`,
      `An arithmetic series has first term ${num(a)} and common difference ${num(d)}.\n\nWork out the sum of the first ${n} terms.`,
      `Work out {{S_${n}}} for the arithmetic series ${seriesText(terms)}`,
    ]);
    return {
      prompt,
      answer: { type: "number", value: ans },
      solution: [
        `a = ${num(a)}, d = ${num(d)}, n = ${n}. Use ${FORMULA}.`,
        `{{S_${n}}} = {{${n}/2}} × (2 × ${br(a)} + ${n - 1} × ${br(d)}) = ${num(n / 2)} × ${num(2 * a + (n - 1) * d)}.`,
        `= ${big(ans)}.`,
      ],
      hint: "Identify a, d and n, then substitute into the Sₙ formula (it's on the formula sheet).",
      traps: numTraps(ans, [
        [n * (2 * a + (n - 1) * d), "You forgot to halve: the formula has {{n/2}} in front."],
        [(n * (a + (n - 1) * d)) / 2, "Inside the bracket it's 2a, not a: Sₙ = {{n/2}}(first + last), and first + last = 2a + (n − 1)d."],
      ]),
    };
  },
};

// ---------------------------------------------------------------------------
// 6. Sum using first and last terms (multiples, integers, seats)
// ---------------------------------------------------------------------------
const sumFirstLast: Drill = {
  id: `${TOPIC}.sum-first-last`,
  topicId: TOPIC,
  title: "Sum a series from its first and last terms",
  level: 2,
  guideRef: "arithmetic-series",
  generate(rng, tier) {
    const mode = tier === 1 ? rng.pick(["integers", "multiples"] as const) : rng.pick(["multiples", "seats", "seatsLast"] as const);
    let first = 1, last = 100, count = 100;
    let prompt = "";
    const pre: string[] = [];
    let offByOne = true;
    if (mode === "integers") {
      const kind = rng.pick(["all", "odd", "even"] as const);
      const N = rng.int(30, 150);
      if (kind === "all") {
        first = 1; last = N; count = N;
        prompt = `Work out the sum of all the whole numbers from 1 to ${N}.`;
        offByOne = false;
      } else if (kind === "odd") {
        first = 1; last = 2 * N - 1; count = N;
        prompt = `Work out the sum of the odd numbers {{1 + 3 + 5 + ... + ${last}}}.`;
        pre.push(`The odd numbers form an arithmetic series with a = 1, d = 2. Number of terms: ({{${last} - 1}}) ÷ 2 + 1 = ${count}.`);
      } else {
        first = 2; last = 2 * N; count = N;
        prompt = `Work out the sum of the even numbers {{2 + 4 + 6 + ... + ${last}}}.`;
        pre.push(`The even numbers form an arithmetic series with a = 2, d = 2. Number of terms: ${last} ÷ 2 = ${count}.`);
      }
    } else if (mode === "multiples") {
      let m = 7, L = 50, U = 300;
      for (let i = 0; i < 100; i++) {
        m = rng.int(3, tier === 1 ? 9 : 17);
        L = rng.int(10, 300);
        U = L + rng.int(tier === 1 ? 80 : 150, tier === 1 ? 250 : 700);
        if (L % m !== 0 && U % m !== 0) break;
      }
      first = Math.ceil(L / m) * m;
      last = Math.floor(U / m) * m;
      count = (last - first) / m + 1;
      prompt = `Find the sum of all the multiples of ${m} between ${L} and ${U}.`;
      pre.push(
        `The first multiple of ${m} after ${L} is ${first}; the last before ${U} is ${last}.`,
        `Number of terms: ({{${last} - ${first}}}) ÷ ${m} + 1 = ${count}.`,
      );
    } else {
      const name = rng.pick(["A theatre", "A concert hall", "The school hall", "An outdoor cinema at Sentosa"]);
      let r = 20, d = 2;
      for (let i = 0; i < 100; i++) {
        r = rng.int(12, 30);
        d = rng.int(1, 4);
        count = rng.int(12, 35);
        if (r !== d) break;
      }
      first = r;
      last = r + (count - 1) * d;
      if (mode === "seats") {
        prompt = `${name} has ${count} rows of seats. There are ${r} seats in the front row and each row has ${d} more seat${d > 1 ? "s" : ""} than the row in front.\n\nHow many seats are there altogether?`;
        pre.push(`Seats per row form an arithmetic sequence with a = ${r}, d = ${d}. The back row has ${r} + ${count - 1} × ${d} = ${last} seats.`);
      } else {
        prompt = `${name} has ${r} seats in the front row. Each row has ${d} more seat${d > 1 ? "s" : ""} than the row in front, and the back row has ${last} seats.\n\nHow many seats are there altogether?`;
        pre.push(`Number of rows: ({{${last} - ${r}}}) ÷ ${d} + 1 = ${count}.`);
      }
    }
    const ans = clean((count * (first + last)) / 2);
    return {
      prompt,
      answer: { type: "number", value: ans },
      solution: [
        ...pre,
        `Pair the first and last terms: each pair adds to ${first} + ${last} = ${first + last}, so {{S_n = n/2 (a + l)}}.`,
        `Sum = {{${count}/2}} × ${first + last} = ${big(ans)}.`,
      ],
      hint: "Find the first term, the last term and how many terms there are. Then use Sₙ = (number of terms ÷ 2) × (first + last).",
      traps: numTraps(ans, [
        ...(offByOne ? ([[((count - 1) * (first + last)) / 2, "Count the terms again: (last − first) ÷ d gives the number of *gaps*. Add 1 for the number of terms."]] as Array<[number, string]>) : []),
        [count * (first + last), "Each pair adds to first + last, but there are only half as many pairs as terms. Divide by 2."],
      ]),
    };
  },
};

// ---------------------------------------------------------------------------
// 7. Use Sn to find an unknown (n or d), including "least n so that Sn > X"
// ---------------------------------------------------------------------------
const findN: Drill = {
  id: `${TOPIC}.find-n-from-sum`,
  topicId: TOPIC,
  title: "Use Sₙ to find the number of terms",
  level: 3,
  guideRef: "arithmetic-series",
  generate(rng, tier) {
    let a = 3, d = 4, N = 12;
    for (let i = 0; i < 100; i++) {
      a = rng.int(1, tier === 1 ? 10 : 25);
      d = rng.int(2, tier === 1 ? 6 : 9);
      N = rng.int(tier === 1 ? 6 : 10, tier === 1 ? 15 : 30);
      if (a !== d && 2 * a !== d) break;
    }
    const name = rng.pick(NAMES);
    const B = 2 * a - d;
    const mode = tier === 3 ? rng.pick(["exceed", "exceed", "findD"] as const) : rng.pick(["exact", "savings"] as const);

    if (mode === "findD") {
      const S = Sn(a, d, N);
      return {
        prompt: `An arithmetic series has first term ${a}. The sum of the first ${N} terms is ${big(S)}.\n\nFind the common difference d.`,
        answer: { type: "number", value: d },
        solution: [
          `{{S_${N} = ${N}/2 (2 × ${a} + ${N - 1}d) = ${S}}}.`,
          `{{2 × ${a} + ${N - 1}d}} = ${big(S)} ÷ ${num(N / 2)} = ${2 * a + (N - 1) * d}.`,
          `{{${N - 1}d = ${(N - 1) * d}}}, so d = ${d}.`,
        ],
        hint: "Substitute everything you know into the Sₙ formula — only d is unknown, and it appears linearly.",
        traps: numTraps(d, [[clean(((2 * S) / N - a) / (N - 1)), "Inside the bracket it's 2a, not a."]]),
      };
    }

    if (mode === "exceed") {
      const uN = a + (N - 1) * d;
      let X = Sn(a, d, N - 1) + 1, root = N - 0.5;
      for (let i = 0; i < 100; i++) {
        X = Sn(a, d, N - 1) + rng.int(1, uN - 1);
        root = (-B + Math.sqrt(B * B + 8 * d * X)) / (2 * d);
        const r2 = roundTo(root, 2);
        if (r2 > N - 1 && r2 < N) break;
      }
      const r2 = roundTo(root, 2);
      const terms = [0, 1, 2, 3].map((j) => a + j * d);
      return {
        prompt: rng.pick([
          `For the arithmetic series ${seriesText(terms)} find the least number of terms needed for the sum to be greater than ${big(X)}.`,
          `${name} saves $${a} in the first week, $${a + d} in the second week, $${a + 2 * d} in the third week, and so on.\n\nAfter how many weeks will ${name}'s total savings first be more than $${big(X)}?`,
        ]),
        answer: { type: "number", value: N },
        solution: [
          `a = ${a}, d = ${d}. Solve {{n/2 (${2 * a} + ${d}(n - 1)) = ${X}}}: multiply by 2 and expand to get {{${poly([[d, "n^2"], [B, "n"], [-2 * X, ""]])} = 0}}.`,
          `Quadratic formula: {{n = (${-B} + sqrt(${B * B} + ${8 * d * X}))/${2 * d}}} ≈ ${num(r2)} (the other root is negative).`,
          `The sum passes ${big(X)} between n = ${N - 1} and n = ${N}, so the least whole number is n = ${N}.`,
          `Check: {{S_${N - 1}}} = ${big(Sn(a, d, N - 1))} (too small) and {{S_${N}}} = ${big(Sn(a, d, N))} (big enough) ✓`,
        ],
        hint: "Set Sₙ equal to the target and solve the quadratic in n. The answer must be a whole number — which way should you round?",
        traps: numTraps(N, [[N - 1, `After ${N - 1} terms the sum is only ${big(Sn(a, d, N - 1))} — not enough yet. Round *up*.`]]),
      };
    }

    const S = Sn(a, d, N);
    const terms = [0, 1, 2, 3].map((j) => a + j * d);
    const other = q(-B - N * d, d); // roots of d n² + B n − 2S = 0 sum to −B/d
    const g = gcd(gcd(d, Math.abs(B)), 2 * S);
    const prompt =
      mode === "savings"
        ? `${name} saves $${a} in the first week, $${a + d} in the second week, $${a + 2 * d} in the third week, and so on.\n\nAfter how many weeks will ${name} have saved exactly $${big(S)} in total?`
        : `How many terms of the arithmetic series ${seriesText(terms)} must be added to give a total of ${big(S)}?`;
    return {
      prompt,
      answer: { type: "number", value: N },
      solution: [
        `a = ${a}, d = ${d}. Set {{S_n = n/2 (${2 * a} + ${d}(n - 1)) = ${S}}}.`,
        `Multiply by 2 and expand: {{n(${poly([[d, "n"], [B, ""]])}) = ${2 * S}}}, so {{${poly([[d / g, "n^2"], [B / g, "n"], [(-2 * S) / g, ""]])} = 0}}${g > 1 ? ` (after dividing by ${g})` : ""}.`,
        `Solve (factorise or use the formula): n = ${N} or n = ${qShow(other)}.`,
        `n must be a positive whole number, so n = ${N}.`,
      ],
      hint: "Substitute a and d into Sₙ, set it equal to the total and you get a quadratic in n.",
      traps: numTraps(N, [[N + 1, `Check: {{S_${N + 1}}} would be ${big(Sn(a, d, N + 1))}, not ${big(S)}.`], [N - 1, `Check: {{S_${N - 1}}} is only ${big(Sn(a, d, N - 1))}.`]]),
    };
  },
};

// ---------------------------------------------------------------------------
// 8a. nth term of a sequence of fractions (H+) — a variant inside drill 8
// ---------------------------------------------------------------------------
function fractionNth(rng: Rng, tier: 1 | 2 | 3): DrillItem {
  {
    const quadDen = tier === 3 && rng.bool(0.5);
    let p = 2, qn = 1, r = 3, s = 2;
    const top = (n: number) => p * n + qn;
    const bot = (n: number) => (quadDen ? n * n + s : r * n + s);
    for (let i = 0; i < 300; i++) {
      p = rng.int(1, tier === 1 ? 4 : 6);
      qn = rng.int(tier === 1 ? 0 : -3, 6);
      r = rng.int(1, tier === 1 ? 5 : 7);
      s = quadDen ? rng.int(1, 6) : rng.int(tier === 1 ? 0 : -2, 7);
      if (qn === 0 && p === 1) continue;
      if (!quadDen && p === r && qn === s) continue;
      if (!quadDen && p * s === qn * r) continue; // constant sequence
      let ok = true;
      for (let n = 1; n <= 4; n++) {
        const t = top(n), b = bot(n);
        if (t <= 0 || b <= 1 || t === b || gcd(t, b) !== 1) ok = false;
      }
      if (ok) break;
    }
    const topS = lin(p, qn);
    const botS = quadDen ? poly([[1, "n^2"], [s, ""]]) : lin(r, s);
    const ans = `${bk(topS)}/${bk(botS)}`;
    const shown = [1, 2, 3, 4].map((n) => frac(top(n), bot(n), { simplify: false })).join(", ") + ", …";
    const vals = N6.map((n) => top(n) / bot(n));
    const wrongTop = lin(p, p + qn);
    const wrongBot = quadDen ? botS : lin(r, r + s);
    return {
      prompt: `Here are the first four terms of a sequence:\n\n${shown}\n\nFind an expression, in terms of n, for the nth term of the sequence.`,
      answer: { type: "expression", expr: ans, display: `{{${ans}}}` },
      solution: [
        `Treat the numerators and denominators as two separate sequences.`,
        `Numerators ${[1, 2, 3, 4].map(top).join(", ")}: ${p === 1 ? "up by 1" : `up by ${p}`} each time, nth term {{${topS}}}.`,
        quadDen
          ? `Denominators ${[1, 2, 3, 4].map(bot).join(", ")}: second difference 2, so they are {{n^2}} plus ${s}: nth term {{${botS}}}.`
          : `Denominators ${[1, 2, 3, 4].map(bot).join(", ")}: up by ${r} each time, nth term {{${botS}}}.`,
        `So the nth term is {{${ans}}}.`,
      ],
      hint: "Find the nth term of the numerators and of the denominators separately.",
      traps: exprTraps(vals, [
        [`${bk(wrongTop)}/${bk(wrongBot)}`, N6.map((n) => (p * n + p + qn) / (quadDen ? n * n + s : r * n + r + s)), "Check n = 1 in your expression — the constant in each linear nth term is (first term − difference)."],
        [`${bk(botS)}/${bk(topS)}`, N6.map((n) => bot(n) / top(n)), "Upside down: the numerators' nth term goes on top."],
      ]),
    };
  }
}

// ---------------------------------------------------------------------------
// 8. nth term of a quadratic sequence (H+)
// ---------------------------------------------------------------------------
const quadNth: Drill = {
  id: `${TOPIC}.quadratic-nth-term`,
  topicId: TOPIC,
  title: "Find the nth term of a quadratic or fraction sequence",
  level: 3,
  guideRef: "quadratic-sequences",
  generate(rng, tier) {
    if (tier >= 2 && rng.bool(0.4)) return fractionNth(rng, tier);
    let A = 1, B = 2, C = -1;
    for (let i = 0; i < 200; i++) {
      if (tier === 1) {
        A = 1;
        B = rng.int(-6, 6);
        C = rng.int(-6, 8);
      } else if (tier === 2) {
        A = rng.pick([2, 3, -1, -2, 2, 3]);
        B = rng.int(-9, 9);
        C = rng.int(-12, 15);
      } else {
        A = rng.pick([0.5, 1.5, 2.5, -0.5, -1.5]);
        B = clean(rng.int(-7, 7) + 0.5); // A + B is then a whole number
        C = rng.int(-8, 10);
      }
      if (B === 0 && C === 0) continue;
      const vals = [1, 2, 3, 4, 5].map((n) => clean(A * n * n + B * n + C));
      if (vals.some((v) => v === 0) && rng.bool(0.7)) continue;
      const first = vals.slice(1).map((v, j) => clean(v - vals[j]));
      if (first.some((v) => v === 0)) continue;
      break;
    }
    const f = (n: number) => clean(A * n * n + B * n + C);
    const vals = [1, 2, 3, 4, 5].map(f);
    const d1 = vals.slice(1).map((v, j) => clean(v - vals[j]));
    const d2 = clean(2 * A);
    const rem = [1, 2, 3, 4, 5].map((n) => clean(f(n) - A * n * n));
    const ans = poly([[A, "n^2"], [B, "n"], [C, ""]]);
    // Classic slip: use the second difference (not half of it) as the n² coefficient, then fit a line through the first two remainders.
    const r1 = vals[0] - d2, r2 = vals[1] - 4 * d2;
    const tB = clean(r2 - r1), tC = clean(r1 - (r2 - r1));
    const trapExpr = poly([[d2, "n^2"], [tB, "n"], [tC, ""]]);
    const name = rng.pick(NAMES);
    return {
      prompt: rng.pick([
        `Here are the first five terms of a quadratic sequence:\n\n${seqText(vals)}\n\nFind an expression, in terms of n, for the nth term.`,
        `${name} says the sequence ${seqText(vals)} is quadratic. Find its nth term in the form {{an^2 + bn + c}}.`,
      ]),
      answer: { type: "expression", expr: ans, form: "simplified", display: `{{${ans}}}` },
      solution: [
        `First differences: ${d1.map(num).join(", ")}. Second differences: all ${num(d2)}.`,
        `The coefficient of {{n^2}} is half the second difference: ${num(d2)} ÷ 2 = ${num(A)}.`,
        `Subtract {{${term(A, "n^2")}}} from each term: ${rem.map(num).join(", ")} — a linear sequence with nth term {{${lin(B, C)}}}.`,
        `So the nth term is {{${ans}}}. Check n = 3: ${[`${num(A)} × 9`, B ? `${B < 0 ? "−" : "+"} ${num(Math.abs(B))} × 3` : "", C ? `${C < 0 ? "−" : "+"} ${num(Math.abs(C))}` : ""].filter(Boolean).join(" ")} = ${num(vals[2])} ✓`,
      ],
      hint: "Find the second difference. Half of it is the coefficient of n²; take that n² part away and what's left is linear.",
      traps: exprTraps(
        N6.map(f),
        [[trapExpr, N6.map((n) => clean(d2 * n * n + tB * n + tC)), "The coefficient of n² is *half* the second difference (because {{n^2}} itself has second difference 2)."]],
      ),
    };
  },
};

// ---------------------------------------------------------------------------
// 10. Limiting value (H+)
// ---------------------------------------------------------------------------
const limitValue: Drill = {
  id: `${TOPIC}.limiting-value`,
  topicId: TOPIC,
  title: "Find the limiting value of a sequence",
  level: 3,
  guideRef: "limiting-values",
  generate(rng, tier) {
    const quad = tier === 3 && rng.bool(0.5);
    const zeroTop = tier === 2 && rng.bool(0.15);
    let a = 3, b = 5, c = 2, d = 1, e = 0;
    for (let i = 0; i < 200; i++) {
      a = zeroTop ? 0 : tier === 1 ? rng.int(1, 9) : rng.pick([-5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
      b = rng.nonZero(tier === 1 ? 1 : -9, 9);
      c = rng.int(tier === 1 ? 1 : 2, 7);
      d = rng.nonZero(-6, 9);
      e = quad ? rng.nonZero(-5, 6) : 0;
      if (zeroTop) {
        if (b < 0) b = -b;
      }
      // denominators must be positive for n ≥ 1
      let ok = true;
      for (let n = 1; n <= 3; n++) if ((quad ? c * n * n + d : c * n + d) <= 0) ok = false;
      if (!ok) continue;
      if (!quad && a * d === b * c) continue; // constant sequence
      if (quad && a * d === 0) continue;
      break;
    }
    const lim = q(a, c);
    const v = quad ? "n^2" : "n";
    const topS = quad ? poly([[a, "n^2"], [b, "n"], [e, ""]]) : a < 0 && b > 0 ? `${b} - ${term(-a, "n")}` : poly([[a, "n"], [b, ""]]);
    const botS = poly([[c, v], [d, ""]]);
    const nth = `${bk(topS)}/${bk(botS)}`;
    const piece = (k: number, pow: string) => `${k < 0 ? "-" : "+"} ${Math.abs(k)}/${pow}`;
    const divided = quad
      ? `(${a} ${piece(b, "n")} ${piece(e, "n^2")})/(${c} ${piece(d, "n^2")})`
      : zeroTop
        ? `(${b}/n)/(${c} ${piece(d, "n")})`
        : `(${a} ${piece(b, "n")})/(${c} ${piece(d, "n")})`;
    const vanish = quad ? `{{${Math.abs(b)}/n}}, {{${Math.abs(e)}/n^2}} and {{${Math.abs(d)}/n^2}} all tend to 0` : zeroTop ? `{{${b}/n}} and {{${Math.abs(d)}/n}} both tend to 0` : `{{${Math.abs(b)}/n}} and {{${Math.abs(d)}/n}} both tend to 0`;
    const name = rng.pick(NAMES);
    const isInt = lim.d === 1;
    const form = isInt ? "" : " Give your answer as a fraction in its simplest form.";
    const big1000 = clean(roundTo((quad ? a * 1e6 + b * 1000 + e : a * 1000 + b) / (quad ? c * 1e6 + d : c * 1000 + d), 4));
    return {
      prompt: rng.pick([
        `The nth term of a sequence is {{${nth}}}.\n\nFind the limiting value of the sequence as n → ∞.${form}`,
        `${name} works out the 1000th term of the sequence with nth term {{${nth}}} and gets about ${num(big1000)}.\n\nWhat value do the terms approach as n gets larger and larger?${form}`,
      ]),
      answer: qSpec(lim),
      solution: [
        `Divide every term, top and bottom, by {{${v}}} (the highest power of n): {{${divided}}}.`,
        `As n → ∞, ${vanish}.`,
        zeroTop ? `So the terms tend to {{0/${c}}} = 0.` : `So the terms tend to {{${a}/${c}}}${lim.n === a && lim.d === c ? "" : ` = ${qShow(lim)}`}.`,
        zeroTop ? "The top stays fixed while the bottom grows without limit." : `Quick check: the leading terms dominate, so the ratio of the {{${v}}} coefficients is the limit.`,
      ],
      hint: "For very large n, which terms on the top and bottom really matter? Try dividing everything by the highest power of n.",
      traps: qTraps(lim, [
        [quad ? q(e, d) : q(b, d), "Those are the constant terms — they matter less and less as n grows. Look at the terms with the highest power of n."],
        ...(a !== 0 ? ([[q(c, a), "Upside down: the limit is (top coefficient) ÷ (bottom coefficient)."]] as Array<[Q, string]>) : []),
        [q(a + b + e, c + d), "That's the 1st term (n = 1). The question asks where the terms end up for very large n."],
      ]),
    };
  },
};

export const drills: Drill[] = [findNthTerm, kthTerm, useNthTerm, twoTerms, sumSeries, sumFirstLast, findN, quadNth, limitValue];
