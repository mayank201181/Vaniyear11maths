// Procedural skill drills — Functions (topic "functions").
// Functions are stored as polynomial coefficient arrays (index = power), so
// evaluating, composing and printing are all exact integer arithmetic. Every
// generator picks the answer first (an integer input, root or value) and builds
// the question around it; bounded rejection loops rule out degenerate cases.
import type { Drill } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { frac, num, poly, simplify } from "./helpers.ts";

const TOPIC = "functions";

/* ------------------------------------------------------------------------ */
/* Polynomial helpers (coefficients low → high: [c0, c1, c2, …])             */
/* ------------------------------------------------------------------------ */

type P = number[];

function trim(p: P): P {
  const q = [...p];
  while (q.length > 1 && q[q.length - 1] === 0) q.pop();
  return q;
}
const add = (p: P, q: P): P => trim(Array.from({ length: Math.max(p.length, q.length) }, (_, i) => (p[i] ?? 0) + (q[i] ?? 0)));
const scale = (p: P, k: number): P => trim(p.map((c) => c * k));
function mul(p: P, q: P): P {
  const out: P = new Array(p.length + q.length - 1).fill(0);
  p.forEach((a, i) => q.forEach((b, j) => (out[i + j] += a * b)));
  return trim(out);
}
/** f(g(x)). */
function compose(f: P, g: P): P {
  let out: P = [0];
  let pw: P = [1];
  for (let i = 0; i < f.length; i++) {
    out = add(out, scale(pw, f[i]));
    pw = mul(pw, g);
  }
  return out;
}
const val = (p: P, x: number): number => p.reduce((s, c, i) => s + c * Math.pow(x, i), 0);
const same = (p: P, q: P): boolean => {
  const a = trim(p), b = trim(q);
  return a.length === b.length && a.every((c, i) => c === b[i]);
};

/** ASCII string (works in {{ }} and as an expression answer). */
function ps(p: P, v = "x"): string {
  const terms: Array<[number, string]> = [];
  for (let i = p.length - 1; i >= 0; i--) terms.push([p[i], i === 0 ? "" : i === 1 ? v : `${v}^${i}`]);
  return poly(terms);
}

/** Inside {{ }}: bracket negatives. */
const ib = (n: number): string => (n < 0 ? `(${n})` : `${n}`);

/** "3 * (-2)^2 - 4 * (-2) + 1" — p with a number substituted, for a solution line. */
function subNum(p: P, x: number): string {
  let out = "";
  for (let i = p.length - 1; i >= 0; i--) {
    const c = p[i];
    if (c === 0) continue;
    const a = Math.abs(c);
    const factor = i === 0 ? "" : i === 1 ? ib(x) : `${ib(x)}^${i}`;
    const body = i === 0 ? `${a}` : a === 1 ? factor : `${a} * ${factor}`;
    out += out ? (c < 0 ? ` - ${body}` : ` + ${body}`) : c < 0 ? `-${body}` : body;
  }
  return out || "0";
}

/** "3(2x + 1)^2 - (2x + 1) + 4" — p with an expression substituted. */
function subExpr(p: P, inner: string): string {
  let out = "";
  for (let i = p.length - 1; i >= 0; i--) {
    const c = p[i];
    if (c === 0) continue;
    const a = Math.abs(c);
    const factor = i === 0 ? "" : i === 1 ? `(${inner})` : `(${inner})^${i}`;
    const body = i === 0 ? `${a}` : a === 1 ? factor : `${a}${factor}`;
    out += out ? (c < 0 ? ` - ${body}` : ` + ${body}`) : c < 0 ? `-${body}` : body;
  }
  return out || "0";
}

/** n/d in running text: whole numbers plain, otherwise {{a/b}}. */
const qt = (n: number, d: number): string => {
  const [a, b] = simplify(n, d);
  return b === 1 ? num(a) : frac(a, b);
};
/** n/d inside {{ }}: "7/2", "-3". */
const qm = (n: number, d: number): string => {
  const [a, b] = simplify(n, d);
  return b === 1 ? `${a}` : `${a}/${b}`;
};
/** Number answer for n/d (fractions and decimals both accepted). */
const qSpec = (n: number, d: number): AnswerSpec => {
  const [a, b] = simplify(n, d);
  return { type: "number", value: a / b, display: b === 1 ? num(a) : frac(a, b) };
};

const NAMES = ["f", "g", "h"] as const;

/* ------------------------------------------------------------------------ */
/* Drills                                                                     */
/* ------------------------------------------------------------------------ */

export const drills: Drill[] = [
  /* 1 ─ Evaluate f(a) -------------------------------------------------------- */
  {
    id: `${TOPIC}.evaluate`,
    topicId: TOPIC,
    title: "Work out f(a) for a given input",
    level: 1,
    guideRef: "functions-as-mappings",
    generate(rng, tier) {
      const name = rng.pick(NAMES);
      if (tier === 3 && rng.bool(0.5)) {
        // Rational function at an integer: answer a fraction in simplest form.
        let p = 2, q = 1, r = 1, s = 3, x = 2;
        for (let i = 0; i < 100; i++) {
          p = rng.nonZero(-5, 5);
          q = rng.int(-7, 7);
          r = rng.pick([1, 1, 2, 3]);
          s = rng.nonZero(-6, 6);
          x = rng.nonZero(-4, 4);
          const top = p * x + q, bot = r * x + s;
          if (bot !== 0 && top !== 0 && simplify(top, bot)[1] !== 1 && p * s !== q * r) break;
        }
        const top = p * x + q, bot = r * x + s;
        const [n, d] = simplify(top, bot);
        const fx = `(${ps([q, p])})/(${ps([s, r])})`;
        const traps: Trap[] = [];
        const [wn, wd] = simplify(-p * x + q, -r * x + s);
        if (-r * x + s !== 0 && wn * d !== n * wd) traps.push({ spec: { type: "fraction", n: wn, d: wd }, feedback: `Put the negative input in a bracket: ${num(p)} × ${ib(x)} and ${num(r)} × ${ib(x)}.` });
        return {
          prompt: `{{${name}(x) = ${fx}}}\n\nWork out {{${name}(${x})}}. Give your answer as a fraction in its simplest form.`,
          answer: { type: "fraction", n, d, simplest: true, display: frac(n, d) },
          solution: [
            `Replace every x with ${ib(x)}: {{${name}(${x}) = (${subNum([q, p], x)})/(${subNum([s, r], x)})}}`,
            `= {{${top}/${bot}}}${simplify(top, bot)[0] !== top || simplify(top, bot)[1] !== bot ? ` = ${frac(n, d)}` : ""}`,
          ],
          hint: "Work out the top and the bottom separately, then simplify the fraction.",
          traps,
        };
      }
      let f: P = [1, 2];
      let x = 3;
      for (let i = 0; i < 100; i++) {
        if (tier === 1) {
          f = [rng.int(-9, 9), rng.pick([2, 3, 4, 5, -2, -3])];
          x = rng.int(-5, 6);
        } else {
          f = [rng.int(-9, 9), rng.int(-6, 6), rng.pick(tier === 2 ? [1, 2, 3, -1, -2] : [2, 3, 4, -2, -3])];
          x = rng.nonZero(-5, 5);
        }
        if (x !== 0 && x !== 1 && f[0] !== 0 && val(f, x) !== 0) break;
      }
      const ans = val(f, x);
      const style = rng.int(0, 2);
      const intro =
        style === 0
          ? `{{${name}(x) = ${ps(f)}}}\n\nWork out {{${name}(${x})}}.`
          : style === 1
            ? `The function ${name} is defined as ${name} : x ↦ {{${ps(f)}}}\n\nFind the output when the input is ${num(x)}.`
            : `{{${name}(x) = ${ps(f)}}}\n\nFind the value of {{${name}(${x})}}.`;
      const traps: Trap[] = [];
      if (f.length === 3 && x < 0) {
        const wrong = -f[2] * x * x + f[1] * x + f[0];
        if (wrong !== ans) traps.push({ spec: { type: "number", value: wrong }, feedback: `A negative number squared is positive: {{(${x})^2 = ${x * x}}}. Keep the bracket.` });
      }
      if (f.length === 2 && x < 0) {
        const wrong = f[1] * -x + f[0];
        if (wrong !== ans) traps.push({ spec: { type: "number", value: wrong }, feedback: `Careful with the sign: ${num(f[1])} × ${ib(x)} = ${num(f[1] * x)}.` });
      }
      return {
        prompt: intro,
        answer: { type: "number", value: ans },
        solution: [
          `Replace every x with ${ib(x)}: {{${name}(${x}) = ${subNum(f, x)}}}`,
          `= ${num(ans)}`,
        ],
        hint: "Substitute the input for x — put a negative input in a bracket.",
        traps,
      };
    },
  },

  /* 2 ─ Find the input from the output --------------------------------------- */
  {
    id: `${TOPIC}.find-input`,
    topicId: TOPIC,
    title: "Find x when you know f(x)",
    level: 1,
    guideRef: "functions-as-mappings",
    generate(rng, tier) {
      const name = rng.pick(NAMES);
      if (tier === 3 && rng.bool(0.6)) {
        // Quadratic: two integer solutions.
        let r1 = 2, r2 = -3, k = 4;
        let f: P = [0, 1, 1];
        for (let i = 0; i < 100; i++) {
          r1 = rng.int(-7, 7);
          r2 = rng.int(-7, 7);
          k = rng.int(-10, 15);
          // (x − r1)(x − r2) + k = x² − (r1 + r2)x + r1r2 + k
          f = [r1 * r2 + k, -(r1 + r2), 1];
          if (r1 !== r2 && f[1] !== 0 && f[0] !== 0 && k !== 0) break;
        }
        return {
          prompt: `{{${name}(x) = ${ps(f)}}}\n\nSolve {{${name}(x) = ${k}}}.`,
          answer: { type: "list", values: [r1, r2], display: `x = ${num(Math.min(r1, r2))} or x = ${num(Math.max(r1, r2))}` },
          solution: [
            `Set up the equation: {{${ps(f)} = ${k}}}`,
            `Rearrange to = 0: {{${ps(add(f, [-k]))} = 0}}`,
            `Factorise: {{(${ps([-r1, 1])})(${ps([-r2, 1])}) = 0}}`,
            `So x = ${num(r1)} or x = ${num(r2)}.`,
          ],
          hint: "Make the quadratic equal to zero first, then factorise. Expect two answers.",
          traps: [{ spec: { type: "list", values: [-r1, -r2] }, feedback: "Sign slip: if (x − a) = 0 then x = a, not −a." }],
        };
      }
      let a = 3, b = 2, c = 1, x = 4;
      for (let i = 0; i < 100; i++) {
        a = rng.pick(tier === 1 ? [2, 3, 4, 5, 6] : [2, 3, 4, 5, -2, -3, -4]);
        b = rng.nonZero(-9, 9);
        c = tier === 1 ? 1 : rng.pick([1, 1, 2, 3, 4]);
        x = tier === 1 ? rng.int(1, 9) : rng.nonZero(-8, 8);
        if (c === 1 || (a * x + b) % c === 0) {
          if (c === 1 || simplify(a, c)[1] !== 1) break;
        }
      }
      const out = (a * x + b) / c;
      const top = ps([b, a]);
      const fx = c === 1 ? top : `(${top})/${c}`;
      const wrong = c === 1 ? a * out + b : (a * out + b) / c;
      const traps: Trap[] = [];
      if (wrong !== x && Number.isInteger(wrong)) traps.push({ spec: { type: "number", value: wrong }, feedback: `That is {{${name}(${out})}} — you were given the *output* ${num(out)}, so solve an equation for the input.` });
      const prompt = rng.bool()
        ? `{{${name}(x) = ${fx}}}\n\nGiven that {{${name}(x) = ${out}}}, find the value of x.`
        : `{{${name}(x) = ${fx}}}\n\nSolve {{${name}(a) = ${out}}}. Give the value of a.`;
      return {
        prompt,
        answer: { type: "number", value: x },
        solution: [
          `Form an equation: {{${fx} = ${out}}}`,
          ...(c === 1 ? [] : [`Multiply by ${c}: {{${top} = ${out * c}}}`]),
          `{{${term(a)}x = ${out * c} ${b < 0 ? "+" : "-"} ${Math.abs(b)} = ${out * c - b}}}`,
          `x = ${num(x)}. Check: {{${name}(${x}) = ${out}}} ✓`,
        ],
        hint: "You know the output, not the input. Set the rule equal to the output and solve.",
        traps,
      };
    },
  },

  /* 3 ─ Substitute an expression --------------------------------------------- */
  {
    id: `${TOPIC}.substitute-expression`,
    topicId: TOPIC,
    title: "Find f(x + a), f(2x) and similar",
    level: 2,
    guideRef: "functions-as-mappings",
    generate(rng, tier) {
      const name = rng.pick(NAMES);
      let f: P = [1, 3];
      let inner: P = [2, 1];
      let diff = false;
      for (let i = 0; i < 100; i++) {
        if (tier === 1) {
          f = [rng.nonZero(-9, 9), rng.pick([2, 3, 4, 5, -2, -3])];
          inner = rng.bool() ? [rng.nonZero(-6, 6), 1] : [0, rng.pick([2, 3, 4, -1, -2])];
        } else {
          f = [rng.int(-8, 8), rng.nonZero(-6, 6), rng.pick(tier === 2 ? [1, 1, 2] : [1, 2, 3, -1])];
          inner = rng.bool(0.7) ? [rng.nonZero(-5, 5), 1] : [0, rng.pick([2, 3, -1, -2])];
          diff = tier === 3 && rng.bool(0.5) && inner[0] !== 0;
        }
        const res = diff ? add(compose(f, inner), scale(f, -1)) : compose(f, inner);
        if (!same(res, f) && res.some((c) => c !== 0)) break;
      }
      const innerStr = ps(inner);
      const comp = compose(f, inner);
      const res = diff ? add(comp, scale(f, -1)) : comp;
      const ask = diff ? `{{${name}(${innerStr}) - ${name}(x)}}` : `{{${name}(${innerStr})}}`;
      const traps: Trap[] = [];
      if (!diff && inner[1] === 1) {
        const wrong = add(f, [inner[0]]);
        if (!same(wrong, res)) traps.push({ spec: { type: "expression", expr: ps(wrong) }, feedback: `That is {{${name}(x) ${inner[0] < 0 ? "-" : "+"} ${Math.abs(inner[0])}}}. Replace *every* x inside the rule with {{(${innerStr})}}.` });
      }
      return {
        prompt: `{{${name}(x) = ${ps(f)}}}\n\nFind ${ask}. Give your answer in its simplest form.`,
        answer: { type: "expression", expr: ps(res), form: "simplified", display: `{{${ps(res)}}}` },
        solution: [
          `Replace every x with {{(${innerStr})}}: {{${name}(${innerStr}) = ${subExpr(f, innerStr)}}}`,
          `Expand and collect: {{${name}(${innerStr}) = ${ps(comp)}}}`,
          ...(diff ? [`Subtract {{${name}(x)}}: {{${ps(comp)} - (${ps(f)}) = ${ps(res)}}}`] : []),
        ],
        hint: `Write the rule again with {{(${innerStr})}} in a bracket wherever you see x.`,
        traps,
      };
    },
  },

  /* 4 ─ Excluded values and the domain --------------------------------------- */
  {
    id: `${TOPIC}.excluded-values`,
    topicId: TOPIC,
    title: "Find values that must be excluded from the domain",
    level: 1,
    guideRef: "domain-range",
    generate(rng, tier) {
      const name = rng.pick(NAMES);
      const mode = tier === 3 ? rng.pick(["quad", "quad", "root", "frac"] as const) : rng.pick(["frac", "frac", "root"] as const);
      if (mode === "quad") {
        let r1 = 2, r2 = -3, k = 5;
        for (let i = 0; i < 100; i++) {
          r1 = rng.nonZero(-7, 7);
          r2 = rng.nonZero(-7, 7);
          k = rng.nonZero(-9, 9);
          if (r1 !== r2 && r1 + r2 !== 0 || (r1 === -r2 && r1 !== r2 && rng.bool(0.3))) break;
        }
        const den: P = [r1 * r2, -(r1 + r2), 1];
        return {
          prompt: `{{${name}(x) = ${k}/(${ps(den)})}}\n\nFind the two values of x that must be excluded from the domain of ${name}.`,
          answer: { type: "list", values: [r1, r2], display: `x = ${num(Math.min(r1, r2))} and x = ${num(Math.max(r1, r2))}` },
          solution: [
            "You cannot divide by zero, so exclude any x that makes the denominator 0.",
            `{{${ps(den)} = 0}}`,
            `{{(${ps([-r1, 1])})(${ps([-r2, 1])}) = 0}}, so x = ${num(r1)} or x = ${num(r2)}.`,
          ],
          hint: "Which inputs make the denominator zero? Factorise it.",
          traps: [{ spec: { type: "list", values: [-r1, -r2] }, feedback: "Sign slip: (x − a) = 0 gives x = a." }],
        };
      }
      let a = 1, b = 3, k = 4;
      for (let i = 0; i < 100; i++) {
        a = tier === 1 ? 1 : rng.pick([2, 3, 4, 5]);
        b = rng.nonZero(-9, 9);
        k = rng.nonZero(-9, 9);
        if (a === 1 || simplify(b, a)[1] !== 1) break;
      }
      const inside = ps([b, a]);
      if (mode === "frac") {
        const prompt = rng.bool()
          ? `{{${name}(x) = ${k}/(${inside})}}\n\nWhich value of x must be excluded from the domain of ${name}?`
          : `The function ${name} is given by {{${name}(x) = ${k}/(${inside})}}. State the value of x that cannot be an input of ${name}.`;
        return {
          prompt,
          answer: qSpec(-b, a),
          solution: [
            "Division by zero is undefined, so the denominator cannot be 0.",
            `{{${inside} = 0}}`,
            `x = ${qt(-b, a)}`,
          ],
          hint: "Which input makes the denominator zero?",
          traps: [{ spec: qSpec(b, a), feedback: `Check the sign: substitute your value into {{${inside}}} — it should give 0.` }],
        };
      }
      // Square root: least value in the domain.
      return {
        prompt: `{{${name}(x) = sqrt(${inside})}}\n\nThe domain of ${name} is x ≥ k. Find the value of k.`,
        answer: qSpec(-b, a),
        solution: [
          "You cannot take the square root of a negative number (in real numbers), so the expression inside must be ≥ 0.",
          `{{${inside} >= 0}}`,
          `x ≥ ${qt(-b, a)}, so k = ${qt(-b, a)}.`,
        ],
        hint: "The number under the square root must not be negative.",
        traps: [{ spec: qSpec(b, a), feedback: "Check the sign: at the boundary the expression under the root equals 0." }],
      };
    },
  },

  /* 5 ─ Range --------------------------------------------------------------------- */
  {
    id: `${TOPIC}.range`,
    topicId: TOPIC,
    title: "Find the range of a function",
    level: 2,
    guideRef: "domain-range",
    generate(rng, tier) {
      const name = rng.pick(NAMES);
      if (tier === 1 || (tier === 2 && rng.bool(0.4))) {
        if (rng.bool(0.5)) {
          // Linear function on a closed interval.
          let a = 3, b = 1, m = -1, n = 4;
          for (let i = 0; i < 100; i++) {
            a = rng.pick(tier === 1 ? [2, 3, 4, 5] : [2, 3, 4, -2, -3, -4]);
            b = rng.int(-9, 9);
            m = rng.int(-5, 2);
            n = rng.int(m + 2, 7);
            if (a * m + b !== m || a * n + b !== n) break;
          }
          const lo = Math.min(a * m + b, a * n + b), hi = Math.max(a * m + b, a * n + b);
          return {
            prompt: `{{${name}(x) = ${ps([b, a])}}} with domain {{${m} <= x <= ${n}}}.\n\nFind the least and the greatest value of {{${name}(x)}}. Give the least value first.`,
            answer: { type: "list", values: [lo, hi], ordered: true, display: `${num(lo)} and ${num(hi)}, so ${num(lo)} ≤ ${name}(x) ≤ ${num(hi)}` },
            solution: [
              `A straight line is ${a > 0 ? "increasing" : "decreasing"}, so the extreme values are at the ends of the domain.`,
              `{{${name}(${m}) = ${subNum([b, a], m)} = ${a * m + b}}} and {{${name}(${n}) = ${subNum([b, a], n)} = ${a * n + b}}}`,
              `Range: {{${lo} <= ${name}(x) <= ${hi}}}`,
            ],
            hint: "The range is the set of outputs. Work out the outputs at both ends of the domain.",
            traps: [{ spec: { type: "list", values: [m, n], ordered: true }, feedback: "Those are the ends of the domain (the inputs). The range is about outputs." }],
          };
        }
        // Completed-square form.
        const p = rng.nonZero(-6, 6), q = rng.int(-9, 9);
        const up = tier === 1 ? true : rng.bool(0.7);
        const sq = `(${ps([-p, 1])})^2`;
        const fx = up ? `${sq} ${q < 0 ? "-" : "+"} ${Math.abs(q)}` : `${q} - ${sq}`;
        const traps: Trap[] = [];
        if (q !== -q) traps.push({ spec: { type: "number", value: -q }, feedback: "Check the sign of the constant: the bracket is 0 at its turning point, so f(x) equals the constant there." });
        if (p !== q) traps.push({ spec: { type: "number", value: p }, feedback: `${num(p)} is the x-value of the turning point. The range is about the output.` });
        return {
          prompt: `{{${name}(x) = ${fx}}} for all real x.\n\nThe range of ${name} can be written as {{${name}(x) ${up ? ">=" : "<="} k}}. Find k.`,
          answer: { type: "number", value: q },
          solution: [
            `A square is never negative: {{${sq} >= 0}}, and it equals 0 when x = ${num(p)}.`,
            up ? `So the least value of {{${name}(x)}} is 0 ${q < 0 ? "−" : "+"} ${Math.abs(q)} = ${num(q)}.` : `So the greatest value of {{${name}(x)}} is ${num(q)} − 0 = ${num(q)}.`,
            `Range: {{${name}(x) ${up ? ">=" : "<="} ${q}}}, so k = ${num(q)}.`,
          ],
          hint: "What is the smallest value a squared bracket can take?",
          traps: traps.filter((t) => (t.spec as { value: number }).value !== q),
        };
      }
      // Complete the square from ax² + bx + c.
      let a = 1, b = 4, c = 1;
      for (let i = 0; i < 100; i++) {
        a = tier === 2 ? 1 : rng.pick([1, 2, 3]);
        b = tier === 2 ? 2 * rng.nonZero(-5, 5) : rng.nonZero(-9, 9);
        c = rng.int(-9, 12);
        if (tier === 2 || b % (2 * a) !== 0) break;
      }
      // a(x + b/2a)² + c − b²/4a
      const kn = 4 * a * c - b * b, kd = 4 * a;
      const hN = b, hD = 2 * a;
      const sqIn = `x ${b < 0 ? "-" : "+"} ${qm(Math.abs(hN), hD)}`;
      const kStr = qm(kn, kd);
      return {
        prompt: `{{${name}(x) = ${ps([c, b, a])}}} for all real x.\n\nThe range of ${name} is {{${name}(x) >= k}}. Find k.${simplify(kn, kd)[1] !== 1 ? " Give your answer as a fraction or a decimal." : ""}`,
        answer: qSpec(kn, kd),
        solution: [
          `Complete the square: {{${name}(x) = ${a === 1 ? "" : a}(${sqIn})^2 ${kn < 0 ? "-" : "+"} ${qm(Math.abs(kn), kd)}}}`,
          `The squared bracket is never negative and is 0 when x = ${qt(-hN, hD)}.`,
          `So the least value is ${qt(kn, kd)}: the range is {{${name}(x) >= ${kStr}}}, k = ${qt(kn, kd)}.`,
        ],
        hint: "Complete the square — the minimum value is the constant left over.",
        traps: c * kd !== kn ? [{ spec: { type: "number", value: c }, feedback: "That is the y-intercept, not the minimum. Complete the square to find the lowest point." }] : [],
      };
    },
  },

  /* 6 ─ Composite function: a value ------------------------------------------ */
  {
    id: `${TOPIC}.composite-value`,
    topicId: TOPIC,
    title: "Work out fg(a) — do g first",
    level: 1,
    guideRef: "composite-functions",
    generate(rng, tier) {
      let f: P = [1, 2], g: P = [0, 0, 1], x = 3;
      let threeFns = false;
      let h: P = [1, 1];
      for (let i = 0; i < 100; i++) {
        const lin = (): P => [rng.nonZero(-7, 7), rng.pick(tier === 1 ? [2, 3, 4, 5] : [2, 3, 4, -2, -3])];
        const quad = (): P => [rng.int(-5, 5), 0, 1];
        if (tier === 1) {
          f = lin();
          g = lin();
          x = rng.int(1, 6);
        } else {
          [f, g] = rng.bool() ? [lin(), quad()] : [quad(), lin()];
          x = rng.nonZero(-4, 4);
          threeFns = tier === 3 && rng.bool(0.4);
          if (threeFns) h = [rng.nonZero(-5, 5), 1];
        }
        const inner = threeFns ? val(h, x) : x;
        const ans = val(f, val(g, inner));
        const other = val(g, val(f, inner));
        if (ans !== other && Math.abs(ans) < 400) break;
      }
      const inp = threeFns ? val(h, x) : x;
      const gx = val(g, inp);
      const ans = val(f, gx);
      const ask = threeFns ? `fgh(${x})` : rng.bool(0.5) ? `fg(${x})` : `f(g(${x}))`;
      const defs = `{{f(x) = ${ps(f)}}}\n{{g(x) = ${ps(g)}}}${threeFns ? `\n{{h(x) = ${ps(h)}}}` : ""}`;
      return {
        prompt: `${defs}\n\nWork out {{${ask}}}.`,
        answer: { type: "number", value: ans },
        solution: [
          ...(threeFns ? [`Work from the right: {{h(${x}) = ${subNum(h, x)} = ${inp}}}`] : []),
          `Do g first: {{g(${inp}) = ${subNum(g, inp)} = ${gx}}}`,
          `Then f: {{f(${gx}) = ${subNum(f, gx)} = ${ans}}}`,
        ],
        hint: "fg(x) means f(g(x)): the function nearest the x acts first.",
        traps: [{ spec: { type: "number", value: val(g, val(f, inp)) }, feedback: "You did f first. In fg the g is next to the input, so g acts first." }],
      };
    },
  },

  /* 7 ─ Composite function: an expression ------------------------------------- */
  {
    id: `${TOPIC}.composite-expression`,
    topicId: TOPIC,
    title: "Find fg(x) as an expression",
    level: 2,
    guideRef: "composite-functions",
    generate(rng, tier) {
      let f: P = [1, 2], g: P = [3, 4];
      let order: "fg" | "gf" = "fg";
      for (let i = 0; i < 100; i++) {
        const lin = (): P => [rng.nonZero(-8, 8), rng.pick(tier === 1 ? [2, 3, 4, 5] : [2, 3, 4, 5, -1, -2, -3])];
        if (tier === 1) {
          f = lin();
          g = lin();
        } else if (tier === 2) {
          const q: P = [rng.int(-6, 6), 0, rng.pick([1, 1, 2])];
          [f, g] = rng.bool() ? [lin(), q] : [q, lin()];
        } else {
          const q: P = [rng.int(-6, 6), rng.nonZero(-5, 5), rng.pick([1, 2, -1])];
          [f, g] = rng.bool() ? [lin(), q] : [q, lin()];
        }
        order = rng.bool() ? "fg" : "gf";
        if (!same(compose(f, g), compose(g, f))) break;
      }
      const [outer, inner] = order === "fg" ? [f, g] : [g, f];
      const outerName = order[0], innerName = order[1];
      const res = compose(outer, inner);
      const wrong = order === "fg" ? compose(g, f) : compose(f, g);
      const traps: Trap[] = [{ spec: { type: "expression", expr: ps(wrong) }, feedback: `That is ${order === "fg" ? "gf" : "fg"}(x). In ${order}(x) the function ${innerName} acts first, so substitute ${innerName}(x) into ${outerName}.` }];
      const prod = mul(f, g);
      if (!same(prod, res)) traps.push({ spec: { type: "expression", expr: ps(prod) }, feedback: `That is f(x) × g(x). A composite means *substitute* one function into the other, not multiply them.` });
      return {
        prompt: `{{f(x) = ${ps(f)}}}\n{{g(x) = ${ps(g)}}}\n\nFind {{${order}(x)}}. Simplify your answer.`,
        answer: { type: "expression", expr: ps(res), form: "simplified", display: `{{${order}(x) = ${ps(res)}}}` },
        solution: [
          `{{${order}(x) = ${outerName}(${innerName}(x)) = ${outerName}(${ps(inner)})}}`,
          `Substitute into ${outerName}: {{${subExpr(outer, ps(inner))}}}`,
          `Expand and simplify: {{${order}(x) = ${ps(res)}}}`,
        ],
        hint: `Write ${outerName}'s rule, then replace its x with the whole of {{${innerName}(x)}} in a bracket.`,
        traps,
      };
    },
  },

  /* 8 ─ Solve fg(x) = k ------------------------------------------------------- */
  {
    id: `${TOPIC}.solve-composite`,
    topicId: TOPIC,
    title: "Solve an equation like fg(x) = k",
    level: 3,
    guideRef: "composite-functions",
    generate(rng, tier) {
      const quadratic = tier >= 2 && rng.bool(tier === 2 ? 0.4 : 0.7);
      if (!quadratic) {
        let f: P = [1, 2], g: P = [3, 4], x = 2;
        let ff = false;
        for (let i = 0; i < 100; i++) {
          f = [rng.nonZero(-8, 8), rng.pick(tier === 1 ? [2, 3, 4] : [2, 3, 4, -2, -3])];
          g = [rng.nonZero(-8, 8), rng.pick(tier === 1 ? [2, 3, 5] : [2, 3, 5, -2, -4])];
          ff = tier === 3 && rng.bool(0.5);
          x = rng.int(tier === 1 ? 1 : -6, 7);
          const inner = ff ? f : g;
          if (x !== 0 && val(compose(f, inner), x) !== val(compose(inner === g ? g : f, f), x)) break;
        }
        const innerP = ff ? f : g;
        const comp = compose(f, innerP);
        const k = val(comp, x);
        const label = ff ? "ff" : "fg";
        const innerName = ff ? "f" : "g";
        return {
          prompt: `{{f(x) = ${ps(f)}}}${ff ? "" : `\n{{g(x) = ${ps(g)}}}`}\n\nSolve {{${label}(x) = ${k}}}.`,
          answer: { type: "number", value: x },
          solution: [
            `{{${label}(x) = f(${ps(innerP)}) = ${subExpr(f, ps(innerP))} = ${ps(comp)}}}`,
            `Solve {{${ps(comp)} = ${k}}}: {{${comp[1]}x = ${k - comp[0]}}}`,
            `x = ${num(x)}`,
          ],
          hint: `Find an expression for {{${label}(x)}} first, then solve the equation.`,
          traps: [{ spec: { type: "number", value: val(ff ? f : compose(g, f), x) === x ? x + 1 : val(compose(g, f), x) }, feedback: "That is a value of the function, not the input x. Set the composite expression equal to the number and solve." }].filter((t) => (t.spec as { value: number }).value !== x),
        };
      }
      // Quadratic composite: two solutions.
      let f: P = [0, 0, 1], g: P = [1, 2], r1 = 2, r2 = -3;
      let comp: P = [0];
      let k = 0;
      for (let i = 0; i < 100; i++) {
        if (rng.bool()) {
          // f(x) = x² + p, g linear: (cx + d)² + p = k
          const c = rng.pick([1, 2]);
          const d = c === 1 ? rng.nonZero(-6, 6) : 2 * rng.nonZero(-3, 3) / 2 * (rng.bool() ? 1 : 1);
          const p = rng.int(-6, 6);
          f = [p, 0, 1];
          g = [c === 2 && d % 1 !== 0 ? 2 : d, c];
          const x0 = rng.nonZero(-5, 5);
          r1 = x0;
          const s = g[1] * x0 + g[0];
          // other root: c x + d = −s → x = (−s − d)/c
          const other = (-s - g[0]) / g[1];
          if (!Number.isInteger(other) || other === x0 || s === 0) continue;
          r2 = other;
          comp = compose(f, g);
          k = val(comp, x0);
          break;
        } else {
          // f linear, g(x) = x² + q: a(x² + q) + b = k
          const a = rng.pick([2, 3, -2, 4]);
          const b = rng.nonZero(-9, 9);
          const q = rng.nonZero(-6, 6);
          f = [b, a];
          g = [q, 0, 1];
          const m = rng.int(1, 6);
          r1 = m;
          r2 = -m;
          comp = compose(f, g);
          k = val(comp, m);
          break;
        }
      }
      const rest = add(comp, [-k]);
      return {
        prompt: `{{f(x) = ${ps(f)}}}\n{{g(x) = ${ps(g)}}}\n\nSolve {{fg(x) = ${k}}}.`,
        answer: { type: "list", values: [r1, r2], display: `x = ${num(Math.min(r1, r2))} or x = ${num(Math.max(r1, r2))}` },
        solution: [
          `{{fg(x) = f(${ps(g)}) = ${subExpr(f, ps(g))}}}`,
          `Set it equal to ${num(k)} and rearrange: {{${ps(rest)} = 0}}`,
          `Solve: x = ${num(Math.min(r1, r2))} or x = ${num(Math.max(r1, r2))} (two solutions — the composite is quadratic).`,
        ],
        hint: "Build fg(x) first — it is quadratic, so look for two solutions.",
        traps: [{ spec: { type: "number", value: Math.max(r1, r2) }, feedback: "There is a second solution — a quadratic equation usually has two." }],
      };
    },
  },

  /* 9 ─ Inverse of a linear (or cubic) function ------------------------------- */
  {
    id: `${TOPIC}.inverse-linear`,
    topicId: TOPIC,
    title: "Find the inverse function f⁻¹(x)",
    level: 2,
    guideRef: "inverse-functions",
    generate(rng, tier) {
      const mode = tier === 1 ? "ax+b" : tier === 2 ? rng.pick(["(ax+b)/c", "b-ax", "a(x+b)", "solve"] as const) : rng.pick(["cubic", "recip", "(ax+b)/c", "solve"] as const);
      const a = rng.pick([2, 3, 4, 5, 6]);
      const b = rng.nonZero(-9, 9);
      if (mode === "solve") {
        // Solve f⁻¹(x) = k  ⇔  x = f(k).
        const c = rng.pick([2, 3, 4]);
        const k = rng.nonZero(-6, 8);
        const f: P = [b, a];
        const fk = val(f, k);
        const finvK: [number, number] = [k - b, a];
        const traps: Trap[] = [];
        const [tn, td] = simplify(finvK[0], finvK[1]);
        if (tn !== fk * td) traps.push({ spec: qSpec(finvK[0], finvK[1]), feedback: `That is {{f^(-1)(${k})}}. The equation says the *output* of {{f^(-1)}} is ${num(k)}, so x = f(${num(k)}).` });
        void c;
        return {
          prompt: `{{f(x) = ${ps(f)}}}\n\nSolve {{f^(-1)(x) = ${k}}}.`,
          answer: { type: "number", value: fk },
          solution: [
            `If {{f^(-1)(x) = ${k}}}, then applying f to both sides gives {{x = f(${k})}}.`,
            `{{f(${k}) = ${subNum(f, k)} = ${fk}}}`,
            `x = ${num(fk)}. (Or find {{f^(-1)(x) = (x ${b < 0 ? "+" : "-"} ${Math.abs(b)})/${a}}} and solve.)`,
          ],
          hint: "f undoes f⁻¹. What happens if you apply f to both sides?",
          traps,
        };
      }
      let fx = "", inv = "", steps: string[] = [];
      const traps: Trap[] = [];
      const bAbs = Math.abs(b), bOp = b < 0 ? "-" : "+", bInv = b < 0 ? "+" : "-";
      if (mode === "ax+b") {
        fx = ps([b, a]);
        inv = `(x ${bInv} ${bAbs})/${a}`;
        steps = [`Write {{y = ${fx}}} and make x the subject.`, `{{y ${bInv} ${bAbs} = ${a}x}}, so {{x = (y ${bInv} ${bAbs})/${a}}}`, `Swap the letters: {{f^(-1)(x) = ${inv}}}`];
        traps.push({ spec: { type: "expression", expr: `(x ${bOp} ${bAbs})/${a}` }, feedback: `Undo "${b < 0 ? "subtract" : "add"} ${bAbs}" by ${b < 0 ? "adding" : "subtracting"} ${bAbs}.` });
        traps.push({ spec: { type: "expression", expr: `x/${a} ${bInv} ${bAbs}` }, feedback: "Undo the steps in reverse order: deal with the constant before dividing." });
      } else if (mode === "(ax+b)/c") {
        let c = 3;
        for (let i = 0; i < 50; i++) {
          c = rng.pick([2, 3, 4, 5]);
          if (simplify(a, c)[1] !== 1 && c !== a) break;
        }
        fx = `(${ps([b, a])})/${c}`;
        inv = `(${c}x ${bInv} ${bAbs})/${a}`;
        steps = [`Write {{y = ${fx}}}. Multiply by ${c}: {{${c}y = ${ps([b, a])}}}`, `{{${c}y ${bInv} ${bAbs} = ${a}x}}, so {{x = (${c}y ${bInv} ${bAbs})/${a}}}`, `Swap the letters: {{f^(-1)(x) = ${inv}}}`];
        traps.push({ spec: { type: "expression", expr: `(${a}x ${bInv} ${bAbs})/${c}` }, feedback: "The multiplier and divisor swap roles: multiply by the old divisor, divide by the old multiplier." });
      } else if (mode === "b-ax") {
        const B = Math.abs(b) + 1;
        fx = `${B} - ${a}x`;
        inv = `(${B} - x)/${a}`;
        steps = [`Write {{y = ${fx}}}. Add {{${a}x}} and subtract y: {{${a}x = ${B} - y}}`, `{{x = (${B} - y)/${a}}}`, `Swap the letters: {{f^(-1)(x) = ${inv}}}`];
        traps.push({ spec: { type: "expression", expr: `(x - ${B})/${a}` }, feedback: `Careful with the sign of x: from {{${a}x = ${B} - y}} you get {{(${B} - y)/${a}}}.` });
      } else if (mode === "a(x+b)") {
        fx = `${a}(x ${bOp} ${bAbs})`;
        inv = `x/${a} ${bInv} ${bAbs}`;
        steps = [`Write {{y = ${fx}}}. Divide by ${a}: {{y/${a} = x ${bOp} ${bAbs}}}`, `{{x = y/${a} ${bInv} ${bAbs}}}`, `Swap the letters: {{f^(-1)(x) = ${inv}}} (or {{(x ${bInv} ${a * bAbs})/${a}}})`];
        traps.push({ spec: { type: "expression", expr: `(x ${bInv} ${bAbs})/${a}` }, feedback: "Reverse order: divide by the multiplier first, then undo the bracket's constant." });
      } else if (mode === "cubic") {
        fx = `${a}x^3 ${bOp} ${bAbs}`;
        inv = `cbrt((x ${bInv} ${bAbs})/${a})`;
        steps = [`Write {{y = ${fx}}}. {{y ${bInv} ${bAbs} = ${a}x^3}}`, `{{x^3 = (y ${bInv} ${bAbs})/${a}}}, so {{x = cbrt((y ${bInv} ${bAbs})/${a})}}`, `Swap the letters: {{f^(-1)(x) = ${inv}}}`];
        traps.push({ spec: { type: "expression", expr: `cbrt(x/${a}) ${bInv} ${bAbs}` }, feedback: "Undo in reverse order: the constant was added last, so remove it first, then divide, then cube-root." });
      } else {
        // f(x) = a/(x + b)
        fx = `${a}/(x ${bOp} ${bAbs})`;
        inv = `${a}/x ${bInv} ${bAbs}`;
        steps = [`Write {{y = ${fx}}}. Multiply up: {{y(x ${bOp} ${bAbs}) = ${a}}}`, `{{x ${bOp} ${bAbs} = ${a}/y}}, so {{x = ${a}/y ${bInv} ${bAbs}}}`, `Swap the letters: {{f^(-1)(x) = ${inv}}} (or {{(${a} ${bInv} ${bAbs}x)/x}})`];
        traps.push({ spec: { type: "expression", expr: `(x ${bOp} ${bAbs})/${a}` }, feedback: "That is the reciprocal {{1/f(x)}}, not the inverse. {{f^(-1)}} undoes f — rearrange y = f(x) for x." });
      }
      return {
        prompt: rng.bool()
          ? `{{f(x) = ${fx}}}\n\nFind {{f^(-1)(x)}}. Give your answer as an expression in x.`
          : `The function f is defined as f : x ↦ {{${fx}}}\n\nExpress the inverse function {{f^(-1)(x)}} in terms of x.`,
        answer: { type: "expression", expr: inv, display: `{{f^(-1)(x) = ${inv}}}` },
        solution: steps,
        hint: "Write y = f(x), rearrange to make x the subject, then swap x and y.",
        traps,
      };
    },
  },

  /* 10 ─ Inverse of a rational function; self-inverse functions ----------------- */
  {
    id: `${TOPIC}.inverse-rational`,
    topicId: TOPIC,
    title: "Inverses of fractions like (ax + b)/(cx + d)",
    level: 3,
    guideRef: "inverse-functions",
    generate(rng, tier) {
      let a = 2, b = 3, c = 1, d = -4;
      for (let i = 0; i < 100; i++) {
        a = rng.nonZero(-5, 5);
        b = rng.nonZero(-9, 9);
        c = tier === 1 ? 1 : rng.pick([1, 1, 2, 3]);
        d = rng.nonZero(-7, 7);
        // non-degenerate (ad − bc ≠ 0) and not already self-inverse (d ≠ −a)
        if (a * d - b * c !== 0 && d !== -a && a !== 0) break;
      }
      const top = ps([b, a]);
      const bot = ps([d, c]);
      const fx = `(${top})/(${bot})`;
      const mode = tier === 1 ? "expr" : rng.pick(tier === 2 ? (["expr", "expr", "value"] as const) : (["expr", "value", "self"] as const));
      if (mode === "self") {
        // f(x) = (ax + b)/(cx + k) is self-inverse when k = −a (and a² + bc ≠ 0).
        let A = 3, B = 5, C = 1;
        for (let i = 0; i < 100; i++) {
          A = rng.nonZero(-6, 6);
          B = rng.nonZero(-9, 9);
          C = rng.pick([1, 2, 3]);
          if (A * A + B * C !== 0) break;
        }
        return {
          prompt: `{{f(x) = (${ps([B, A])})/(${C === 1 ? "" : C}x + k)}}, where k is a constant.\n\nGiven that f is self-inverse (so {{f^(-1)(x) = f(x)}}), find the value of k.`,
          answer: { type: "number", value: -A },
          solution: [
            `Let {{y = (${ps([B, A])})/(${C === 1 ? "" : C}x + k)}}. Multiply up: {{${C === 1 ? "" : C}xy + ky = ${ps([B, A])}}}`,
            `Collect x terms: {{${C === 1 ? "" : C}xy - ${A === 1 ? "" : A === -1 ? "-" : A}x = ${B} - ky}}, so {{f^(-1)(x) = (${B} - kx)/(${C === 1 ? "" : C}x ${A < 0 ? "+" : "-"} ${Math.abs(A)})}}`,
            `For this to equal f(x), compare denominators: k = ${num(-A)}. Check the numerator: {{${B} - (${-A})x = ${ps([B, A])}}} ✓`,
          ],
          hint: "Find f⁻¹(x) with k left in, then compare it with f(x) term by term.",
          traps: A !== 0 ? [{ spec: { type: "number", value: A }, feedback: "Close — check the sign. Rearranging moves the x-coefficient across, so k must be its negative." }] : [],
        };
      }
      if (mode === "value") {
        // f⁻¹(m) = x such that f(x) = m: x = (b − dm)/(cm − a)
        let m = 2;
        for (let i = 0; i < 100; i++) {
          m = rng.nonZero(-6, 6);
          if (c * m - a !== 0 && b - d * m !== 0) break;
        }
        const n0 = b - d * m, d0 = c * m - a;
        const [n1, d1] = simplify(n0, d0);
        const traps: Trap[] = [];
        if (c * m + d !== 0) {
          const [fn, fd] = simplify(a * m + b, c * m + d);
          if (fn * d1 !== n1 * fd) traps.push({ spec: { type: "fraction", n: fn, d: fd }, feedback: `That is f(${num(m)}). {{f^(-1)(${m})}} is the input that gives the output ${num(m)}.` });
        }
        return {
          prompt: `{{f(x) = ${fx}}}\n\nFind the value of {{f^(-1)(${m})}}. Give your answer as a fraction in its simplest form where necessary.`,
          answer: d1 === 1 ? { type: "number", value: n1 } : { type: "fraction", n: n1, d: d1, simplest: true, display: frac(n1, d1) },
          solution: [
            `{{f^(-1)(${m})}} is the input x with {{f(x) = ${m}}}: {{(${top})/(${bot}) = ${m}}}`,
            `Multiply up: {{${top} = ${ps([m * d, m * c])}}}, so {{${a - m * c === 1 ? "" : a - m * c === -1 ? "-" : a - m * c}x = ${m * d - b}}}`,
            `x = ${qt(n0, d0)}`,
          ],
          hint: "Instead of finding the whole inverse, solve f(x) = the given number.",
          traps,
        };
      }
      // inverse expression: x = (b − dy)/(cy − a) → f⁻¹(x) = (dx − b)/(a − cx)
      const inv = `(${ps([-b, d])})/(${ps([a, -c])})`;
      const cy = c === 1 ? "" : `${c}`;
      return {
        prompt: `{{f(x) = ${fx}}}\n\nFind {{f^(-1)(x)}}. Give your answer as a single fraction in terms of x.`,
        answer: { type: "expression", expr: inv, display: `{{f^(-1)(x) = ${inv}}}` },
        solution: [
          `Let {{y = ${fx}}}. Multiply up: {{${cy}xy ${d < 0 ? "-" : "+"} ${Math.abs(d)}y = ${top}}}`,
          `Collect the x terms on one side: {{${cy}xy - ${a === 1 ? "" : a === -1 ? "-" : a}x = ${b} ${d < 0 ? "+" : "-"} ${Math.abs(d)}y}}`,
          `Factorise and divide: {{x(${ps([-a, c], "y")}) = ${ps([b, -d], "y")}}}, so {{x = (${ps([b, -d], "y")})/(${ps([-a, c], "y")})}}`,
          `Swap the letters: {{f^(-1)(x) = ${inv}}} (multiplying top and bottom by −1 gives an equivalent form).`,
        ],
        hint: "x appears twice after you multiply up: collect the x terms, factorise x out, then divide.",
        traps: [{ spec: { type: "expression", expr: `(${bot})/(${top})` }, feedback: "That is {{1/f(x)}} — flipping the fraction is not the inverse. Rearrange y = f(x) for x." }],
      };
    },
  },
];

function term(c: number): string {
  return c === 1 ? "" : c === -1 ? "-" : String(c);
}
