// Procedural skill drills — Differentiation (topic "calculus").
// Curves are stored as lists of [coefficient, power] terms, so values and
// gradients are computed exactly from integers. Turning points, times at rest
// and optimal values are chosen first (as integers) and the question is built
// around them; bounded rejection loops rule out degenerate cases.
import type { Drill } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { clean, frac, num, poly } from "./helpers.ts";

const TOPIC = "calculus";

/* ------------------------------------------------------------------------ */
/* Term-list helpers                                                         */
/* ------------------------------------------------------------------------ */

/** [coefficient, power] — power may be negative or a half-integer. */
type Term = [number, number];

/** A power as typed maths: 3, -2, 1/2, -3/2. */
function powStr(n: number): string {
  if (Number.isInteger(n)) return String(n);
  const twice = Math.round(n * 2);
  return `${twice}/2`;
}

/** One term with a non-negative coefficient, as maths markup (recip: 4/x^2 rather than 4x^(-2)). */
function termM(c: number, n: number, v: string, recip: boolean): string {
  const k = clean(c);
  const coef = (s: string) => (k === 1 ? s : `${k}${s}`);
  if (n === 0) return `${k}`;
  if (n === 1) return coef(v);
  if (recip && n < 0 && Number.isInteger(n)) return n === -1 ? `${k}/${v}` : `${k}/${v}^${-n}`;
  if (recip && n === 0.5) return coef(`sqrt(${v})`);
  if (recip && n === -0.5) return `${k}/sqrt(${v})`;
  if (Number.isInteger(n) && n > 0) return coef(`${v}^${n}`);
  return coef(`${v}^(${powStr(n)})`);
}

/** Sum of terms as markup, e.g. "3x^2 - 4/x + 1". */
function polyM(terms: Term[], v = "x", recip = true): string {
  let out = "";
  for (const [c, n] of terms) {
    if (c === 0) continue;
    const t = termM(Math.abs(c), n, v, recip);
    out += out ? (c < 0 ? ` - ${t}` : ` + ${t}`) : c < 0 ? `-${t}` : t;
  }
  return out || "0";
}

/** Plain ASCII for an expression answer (negative / fractional powers as x^(-2), x^(1/2)). */
const polyA = (terms: Term[], v = "x"): string => polyM(terms, v, false).replace(/\s+/g, "");

/** Collect like powers, drop zeros, sort by descending power. */
function tidy(terms: Term[]): Term[] {
  const m = new Map<number, number>();
  for (const [c, n] of terms) m.set(n, clean((m.get(n) ?? 0) + c));
  return [...m.entries()].filter(([, c]) => c !== 0).map(([n, c]) => [c, n] as Term).sort((a, b) => b[1] - a[1]);
}

const diff = (terms: Term[]): Term[] => tidy(terms.filter(([, n]) => n !== 0).map(([c, n]) => [clean(c * n), n - 1] as Term));
const evalAt = (terms: Term[], x: number): number => clean(terms.reduce((s, [c, n]) => s + c * Math.pow(x, n), 0));

/** "{{3x^4}} → {{12x^3}}" for each term (constants → 0). */
function diffSteps(terms: Term[], v = "x"): string {
  return terms
    .filter(([c]) => c !== 0)
    .map(([c, n]) => {
      const from = polyM([[c, n]], v);
      if (n === 0) return `{{${from}}} → 0`;
      const neg = n < 0 || !Number.isInteger(n);
      const fromFull = neg ? `${from} = ${polyM([[c, n]], v, false)}` : from;
      const d = clean(c * n);
      const to = polyM([[d, n - 1]], v, false);
      const toRecip = polyM([[d, n - 1]], v, true);
      return `{{${fromFull}}} → {{${to}${toRecip !== to ? ` = ${toRecip}` : ""}}}`;
    })
    .join(", ");
}

/** Bracket negatives inside {{ }}. */
const ib = (n: number): string => (n < 0 ? `(${clean(n)})` : `${clean(n)}`);
/** Coordinates in text. */
const pt = (x: number, y: number): string => `(${num(x)}, ${num(y)})`;
const ptSpec = (x: number, y: number): AnswerSpec => ({ type: "list", values: [clean(x), clean(y)], ordered: true, display: pt(x, y) });

/** Substitution line: "3(2)^2 - 4(2) + 1". */
function subst(terms: Term[], x: number): string {
  let out = "";
  for (const [c, n] of terms) {
    if (c === 0) continue;
    const k = Math.abs(c);
    let t: string;
    if (n === 0) t = `${k}`;
    else if (n === -1) t = `${k}/${ib(x)}`;
    else if (n < 0) t = `${k}/${ib(x)}^${-n}`;
    else t = `${k === 1 ? "" : k}${ib(x).startsWith("(") || k !== 1 ? `(${clean(x)})` : clean(x)}${n === 1 ? "" : `^${n}`}`;
    out += out ? (c < 0 ? ` - ${t}` : ` + ${t}`) : c < 0 ? `-${t}` : t;
  }
  return out || "0";
}

/** "y = 3x - 5" as an equation spec. */
function lineSpec(m: number, k: number): AnswerSpec {
  const rhs = poly([[m, "x"], [k, ""]]);
  return { type: "equation", eq: `y = ${rhs}`, display: `{{y = ${rhs}}}` };
}

/** A curve for gradient / tangent / normal questions; points x = k keep values integer. */
function makeCurve(rng: Parameters<Drill["generate"]>[0], tier: 1 | 2 | 3): { terms: Term[]; k: number } {
  if (tier === 1) {
    const a = rng.pick([1, 1, 2, 3, -1]);
    const b = rng.nonZero(-6, 6);
    const c = rng.int(-8, 8);
    return { terms: tidy([[a, 2], [b, 1], [c, 0]]), k: rng.nonZero(-3, 4) };
  }
  if (tier === 2 || rng.bool(0.4)) {
    const a = rng.pick([1, 1, 2, -1]);
    const b = rng.int(-4, 4);
    const c = rng.nonZero(-7, 7);
    const d = rng.int(-6, 6);
    return { terms: tidy([[a, 3], [b, 2], [c, 1], [d, 0]]), k: rng.nonZero(-3, 3) };
  }
  // Tier 3: polynomial + reciprocal term b/x with k² | b.
  const k = rng.pick([1, 2, -1, -2]);
  const b = k * k * rng.pick([1, 2, 3, 4, -1, -2, -3]);
  const a = rng.pick([1, 2, 3, -1]);
  const c = rng.int(-5, 5);
  return { terms: tidy([[a, 2], [c, 1], [b, -1]]), k };
}

/* ------------------------------------------------------------------------ */
/* Drills                                                                     */
/* ------------------------------------------------------------------------ */

export const drills: Drill[] = [
  /* 1 ─ Chord gradients approaching the tangent ------------------------------ */
  {
    id: `${TOPIC}.chord-gradient`,
    topicId: TOPIC,
    title: "Find the gradient of a chord on a curve",
    level: 1,
    guideRef: "gradient-of-a-curve",
    generate(rng, tier) {
      // f(x) = kx² + bx  (tier 3 sometimes x³)
      const cubic = tier === 3 && rng.bool(0.5);
      const k = tier === 1 ? 1 : rng.pick([1, 2, 3, -1]);
      const b = tier === 1 ? 0 : rng.int(-5, 5);
      const terms: Term[] = cubic ? [[1, 3]] : tidy([[k, 2], [b, 1]]);
      const f = (x: number) => evalAt(terms, x);
      const close = tier > 1 && rng.bool(0.5);
      let a = 1, x2 = 3;
      for (let i = 0; i < 100; i++) {
        a = rng.int(-3, 4);
        x2 = close ? clean(a + rng.pick([0.1, 0.01, 0.5])) : a + rng.int(1, 4);
        const g = (f(x2) - f(a)) / (x2 - a);
        if (Math.abs(g) > 1e-9 && Math.abs(Math.abs(g) - 1) > 1e-9) break;
      }
      const h = clean(x2 - a);
      const rise = clean(f(x2) - f(a));
      const grad = clean(rise / h);
      const eq = polyM(terms);
      const intro = rng.pick([
        `A curve has equation {{y = ${eq}}}.`,
        `Mei is investigating the curve {{y = ${eq}}}.`,
        `The points A and B lie on the curve {{y = ${eq}}}.`,
      ]);
      const traps: Trap[] = [];
      const inv = clean(h / rise);
      if (inv !== grad) traps.push({ spec: { type: "number", value: inv }, feedback: "You worked out run ÷ rise. Gradient = change in y ÷ change in x." });
      if (rise !== grad) traps.push({ spec: { type: "number", value: rise }, feedback: "That's the change in y. Now divide by the change in x." });
      const dTerms = diff(terms);
      return {
        prompt: `${intro}\n\nWork out the gradient of the chord joining the points where x = ${num(a)} and x = ${num(x2)}.${close ? " Give your answer as an exact decimal." : ""}`,
        answer: { type: "number", value: grad },
        solution: [
          `When x = ${num(a)}: {{y = ${subst(terms, a)} = ${clean(f(a))}}}. When x = ${num(x2)}: {{y = ${subst(terms, x2)} = ${clean(f(x2))}}}.`,
          `Gradient = {{(change in y)/(change in x)}} = {{${clean(f(x2))} - ${ib(f(a))}}} ÷ {{${x2} - ${ib(a)}}} = ${num(rise)} ÷ ${num(h)} = ${num(grad)}.`,
          close
            ? `The two points are very close, so this is almost the gradient of the tangent at x = ${num(a)}, which is {{dy/dx = ${polyM(dTerms)}}} = ${num(evalAt(dTerms, a))}.`
            : `The tangent gradient {{dy/dx = ${polyM(dTerms)}}} gives ${num(evalAt(dTerms, a))} at x = ${num(a)} and ${num(evalAt(dTerms, x2))} at x = ${num(x2)} — the chord's gradient lies between them.`,
        ],
        hint: "Find both y-values, then gradient = change in y ÷ change in x.",
        traps,
      };
    },
  },

  /* 2 ─ Power rule ------------------------------------------------------------ */
  {
    id: `${TOPIC}.power-rule`,
    topicId: TOPIC,
    title: "Differentiate a polynomial term by term",
    level: 1,
    guideRef: "differentiating-powers",
    generate(rng, tier) {
      const v = tier > 1 && rng.bool(0.25) ? "t" : "x";
      const dep = v === "t" ? rng.pick(["s", "h"]) : "y";
      let terms: Term[] = [];
      let fracLead: { p: number; n: number } | null = null;
      for (let i = 0; i < 100; i++) {
        if (tier === 1) {
          const n = rng.int(2, 4);
          terms = tidy([[rng.pick([1, 2, 3, 4, 5, -2, -3]), n], [rng.nonZero(-9, 9), 1], [rng.pick([0, 0, rng.int(-9, 9)]), 0]]);
        } else {
          const n1 = rng.int(3, tier === 3 ? 6 : 5);
          const n2 = rng.int(2, n1 - 1);
          terms = tidy([[rng.nonZero(-6, 7), n1], [rng.nonZero(-9, 9), n2], [rng.int(-9, 9), 1], [rng.nonZero(-12, 12), 0]]);
          if (tier === 3 && rng.bool(0.5)) {
            // Lead term (p/n)x^n whose derivative has an integer coefficient p.
            const n = rng.pick([2, 3, 4]);
            const p = rng.pick([1, 2, 3, 5, -1, -2, -5].filter((q) => q % n !== 0));
            fracLead = { p, n };
            terms = tidy([[p / n, n], ...terms.filter(([, m]) => m !== n && m < n)]);
          } else fracLead = null;
        }
        if (terms.filter(([, n]) => n > 0).length >= 2) break;
      }
      const d = diff(terms);
      let eq = polyM(terms, v);
      if (fracLead) {
        const rest = terms.slice(1);
        const lead = `${fracLead.p < 0 ? "-" : ""}${Math.abs(fracLead.p)}/${fracLead.n} ${v}^${fracLead.n}`;
        const tail = polyM(rest, v);
        eq = rest.length ? `${lead} ${tail.startsWith("-") ? "- " + tail.slice(1) : "+ " + tail}` : lead;
      }
      const dName = `d${dep}/d${v}`;
      const prompt = rng.pick([
        `Find {{${dName}}} when {{${dep} = ${eq}}}.`,
        `Differentiate {{${dep} = ${eq}}} with respect to ${v}.`,
        `A curve has equation {{${dep} = ${eq}}}. Find the gradient function {{${dName}}}.`,
      ]);
      const traps: Trap[] = [];
      const noReduce = tidy(terms.filter(([, n]) => n !== 0).map(([c, n]) => [clean(c * n), n] as Term));
      traps.push({ spec: { type: "expression", expr: polyA(noReduce, v) }, feedback: "Bring the power down AND reduce the power by one: {{x^n -> n x^(n-1)}}." });
      const konst = terms.find(([, n]) => n === 0);
      if (konst) traps.push({ spec: { type: "expression", expr: polyA([...d, konst], v) }, feedback: `A constant term differentiates to 0 — the graph of {{${dep} = ${num(konst[0])}}} is flat.` });
      return {
        prompt,
        answer: { type: "expression", expr: polyA(d, v), display: `{{${dName} = ${polyM(d, v)}}}` },
        solution: [
          `Differentiate each term: multiply by the power, then reduce the power by 1.`,
          diffSteps(fracLead ? [[fracLead.p / fracLead.n, fracLead.n], ...terms.slice(1)] : terms, v).replace(/\{\{(-?)(\d+(?:\.\d+)?)([a-z])\^(\d)\}\} →/, (m, s, c, vv, n) => (fracLead && Number(n) === fracLead.n ? `{{${s}${Math.abs(fracLead.p)}/${fracLead.n} ${vv}^${n}}} →` : m)),
          `{{${dName} = ${polyM(d, v)}}}`,
        ],
        hint: `Use {{${v}^n -> n${v}^(n-1)}} on each term separately. What happens to a number on its own?`,
        traps,
      };
    },
  },

  /* 3 ─ Rewrite first, then differentiate -------------------------------------- */
  {
    id: `${TOPIC}.rewrite-then-differentiate`,
    topicId: TOPIC,
    title: "Expand or split into powers of x, then differentiate",
    level: 2,
    guideRef: "differentiating-powers",
    generate(rng, tier) {
      const kinds = tier === 1 ? ["recip", "brackets", "divide"] : tier === 2 ? ["recip", "brackets", "divide", "divide"] : ["recip", "brackets", "divide", "roots"];
      const kind = rng.pick(kinds);
      let shown = "";
      let rewritten: Term[] = [];
      let rewriteStep = "";
      let traps: Trap[] = [];
      if (kind === "recip") {
        const n = tier === 1 ? rng.pick([1, 2]) : rng.pick([1, 2, 3]);
        const a = rng.pick([2, 3, 4, 5, 6, 8, -2, -3, -4]);
        const m = rng.pick([2, 3]);
        const b = rng.nonZero(-5, 6);
        rewritten = tidy([[b, m], [a, -n]]);
        shown = polyM(rewritten);
        rewriteStep = `Write the fraction as a negative power: {{${polyM([[a, -n]])} = ${polyM([[a, -n]], "x", false)}}}.`;
        const wrong = tidy([[b * m, m - 1], [clean(-a * n), -n + 1]]);
        if (polyA(wrong) !== polyA(diff(rewritten))) traps.push({ spec: { type: "expression", expr: polyA(wrong) }, feedback: `Reduce the power by 1: {{-${n} - 1 = -${n + 1}}}, so the power gets *more* negative.` });
      } else if (kind === "brackets") {
        let p = 1, q = 2, A = 1, B = 1;
        const cubeForm = tier === 3 && rng.bool(0.5);
        for (let i = 0; i < 100; i++) {
          p = rng.nonZero(-6, 6);
          q = rng.nonZero(-6, 6);
          A = tier === 1 ? 1 : rng.pick([1, 2, 3]);
          B = tier === 1 ? 1 : rng.pick([1, 2, -1]);
          if (A * q + B * p !== 0) break;
        }
        if (cubeForm) {
          rewritten = tidy([[1, 3], [2 * p, 2], [p * p, 1]]);
          shown = `x(x ${p < 0 ? "-" : "+"} ${Math.abs(p)})^2`;
          rewriteStep = `Expand first: {{x(x ${p < 0 ? "-" : "+"} ${Math.abs(p)})^2 = x(${polyM([[1, 2], [2 * p, 1], [p * p, 0]])}) = ${polyM(rewritten)}}}.`;
        } else {
          rewritten = tidy([[A * B, 2], [A * q + B * p, 1], [p * q, 0]]);
          const br1 = `(${polyM([[A, 1], [p, 0]])})`;
          const br2 = `(${polyM([[B, 1], [q, 0]])})`;
          shown = `${br1}${br2}`;
          rewriteStep = `Expand first: {{${br1}${br2} = ${polyM(rewritten)}}}.`;
          traps.push({ spec: { type: "expression", expr: String(A * B) }, feedback: "You can't differentiate each bracket and multiply the results. Expand the brackets first." });
        }
      } else if (kind === "divide") {
        const a = rng.nonZero(-4, 5);
        const b = rng.nonZero(-6, 6);
        const c = tier === 1 ? 0 : rng.nonZero(-8, 8);
        const top = tidy([[a, 3], [b, 2], [c, 0]]);
        shown = `(${polyM(top)})/x`;
        rewritten = tidy([[a, 2], [b, 1], [c, -1]]);
        rewriteStep = `Divide every term by x: {{${shown} = ${polyM(rewritten)}}}${c ? ` = {{${polyM(rewritten, "x", false)}}}` : ""}.`;
        if (c) traps.push({ spec: { type: "expression", expr: polyA(diff(tidy([[a, 2], [b, 1]]))) }, feedback: `Don't drop the {{${polyM([[c, -1]])}}} term — it is {{${polyM([[c, -1]], "x", false)}}}, which differentiates to {{${polyM([[-c, -2]])}}}.` });
      } else {
        // roots: a√x + b/√x or a x√x
        const a = rng.pick([2, 4, 6, 8, -2, -4]);
        const b = rng.pick([2, 4, 6, -2, -6]);
        if (rng.bool(0.5)) {
          rewritten = tidy([[a, 0.5], [b, -0.5]]);
          shown = polyM(rewritten);
          rewriteStep = `Write the roots as powers: {{sqrt(x) = x^(1/2)}} and {{1/sqrt(x) = x^(-1/2)}}, so {{y = ${polyM(rewritten, "x", false)}}}.`;
        } else {
          const c = rng.nonZero(-5, 5);
          rewritten = tidy([[a, 1.5], [c, 1]]);
          shown = `${a < 0 ? "-" : ""}${Math.abs(a)}x sqrt(x) ${c < 0 ? "-" : "+"} ${Math.abs(c) === 1 ? "" : Math.abs(c)}x`;
          rewriteStep = `{{x sqrt(x) = x^1 * x^(1/2) = x^(3/2)}}, so {{y = ${polyM(rewritten, "x", false)}}}.`;
        }
      }
      const d = diff(rewritten);
      const prompt = rng.pick([`Find {{dy/dx}} when {{y = ${shown}}}.`, `A curve has equation {{y = ${shown}}}. Find {{dy/dx}}.`, `Differentiate {{y = ${shown}}}.`]);
      traps = traps.filter((t) => t.spec.type !== "expression" || t.spec.expr !== polyA(d));
      return {
        prompt,
        answer: { type: "expression", expr: polyA(d), display: `{{dy/dx = ${polyM(d)}}}` },
        solution: [rewriteStep, `Differentiate term by term: ${diffSteps(rewritten)}.`, `{{dy/dx = ${polyM(d)}}}${polyM(d) !== polyM(d, "x", false) ? ` (or {{${polyM(d, "x", false)}}})` : ""}`],
        hint: "You can only differentiate a sum of powers of x. Expand brackets, split fractions over x and write roots and reciprocals as powers first.",
        traps,
      };
    },
  },

  /* 4 ─ Gradient at a point / point with a given gradient ---------------------- */
  {
    id: `${TOPIC}.gradient-at-point`,
    topicId: TOPIC,
    title: "Use dy/dx to find a gradient, or where the gradient has a given value",
    level: 1,
    guideRef: "tangents",
    generate(rng, tier) {
      const mode = tier === 1 ? "at" : rng.pick(["at", "find-x", "find-x"]);
      if (mode === "at") {
        const { terms, k } = makeCurve(rng, tier);
        const d = diff(terms);
        const g = evalAt(d, k);
        const yv = evalAt(terms, k);
        const traps: Trap[] = [];
        if (yv !== g) traps.push({ spec: { type: "number", value: yv }, feedback: "That's the y-coordinate. Substitute into {{dy/dx}}, not into y." });
        return {
          prompt: rng.pick([
            `A curve has equation {{y = ${polyM(terms)}}}. Work out the gradient of the curve at the point where x = ${num(k)}.`,
            `Find the gradient of the tangent to {{y = ${polyM(terms)}}} at the point where x = ${num(k)}.`,
            `Arjun says the curve {{y = ${polyM(terms)}}} is steepest at x = ${num(k)}. Before checking, find the gradient of the curve at x = ${num(k)}.`,
          ]),
          answer: { type: "number", value: g },
          solution: [`{{dy/dx = ${polyM(d)}}}`, `At x = ${num(k)}: {{dy/dx = ${subst(d, k)} = ${g}}}.`],
          hint: "Differentiate first, then substitute the x-value into dy/dx.",
          traps,
        };
      }
      // find-x
      if (tier === 2 && rng.bool(0.5)) {
        // Quadratic: 2ax + b = m, ask for coordinates.
        const a = rng.pick([1, 2, 3, -1, -2]);
        const b = rng.nonZero(-8, 8);
        const c = rng.int(-9, 9);
        let x0 = 2;
        for (let i = 0; i < 50; i++) {
          x0 = rng.nonZero(-4, 5);
          if (2 * a * x0 + b !== 0) break;
        }
        const terms = tidy([[a, 2], [b, 1], [c, 0]]);
        const m = 2 * a * x0 + b;
        const y0 = evalAt(terms, x0);
        const traps: Trap[] = [];
        if (evalAt(terms, m) !== y0 || m !== x0) traps.push({ spec: ptSpec(m, evalAt(terms, m)), feedback: `${num(m)} is the gradient, not the x-coordinate. Solve {{dy/dx = ${m}}} for x.` });
        return {
          prompt: `The curve C has equation {{y = ${polyM(terms)}}}. The point P on C has gradient ${num(m)}. Find the coordinates of P.`,
          answer: ptSpec(x0, y0),
          solution: [`{{dy/dx = ${polyM(diff(terms))}}}`, `Solve {{${polyM(diff(terms))} = ${m}}}: {{${2 * a}x = ${m - b}}}, so x = ${num(x0)}.`, `{{y = ${subst(terms, x0)} = ${y0}}}, so P is ${pt(x0, y0)}.`],
          hint: "Set dy/dx equal to the gradient you are given and solve for x. Then find y from the curve's equation.",
          traps,
        };
      }
      // Cubic: y = x³ + bx² + cx + d with dy/dx − m = 3(x − p)(x − q).
      let p = 1, q = 3;
      for (let i = 0; i < 100; i++) {
        p = rng.int(-4, 3);
        q = rng.int(p + 1, 5);
        if ((p + q) % 2 === 0 && p + q !== 0) break;
      }
      const lead = tier === 3 && rng.bool(0.5) ? 2 : 1;
      // lead·x³ + B x² + C x + D, dy/dx = 3·lead x² + 2B x + C = 3·lead(x−p)(x−q) + m
      const B = (-3 * lead * (p + q)) / 2;
      const m = rng.nonZero(-9, 9);
      const C = 3 * lead * p * q + m;
      const D = rng.int(-6, 6);
      const terms = tidy([[lead, 3], [B, 2], [C, 1], [D, 0]]);
      const d = diff(terms);
      return {
        prompt: `A curve has equation {{y = ${polyM(terms)}}}. Find the x-coordinates of the two points on the curve where the gradient is ${num(m)}.`,
        answer: { type: "list", values: [p, q], ordered: false, display: `x = ${num(p)} and x = ${num(q)}` },
        solution: [
          `{{dy/dx = ${polyM(d)}}}`,
          `Set {{${polyM(d)} = ${m}}}: {{${polyM(tidy([[3 * lead, 2], [2 * B, 1], [C - m, 0]]))} = 0}}.`,
          `Divide by ${3 * lead}: {{${polyM(tidy([[1, 2], [-(p + q), 1], [p * q, 0]]))} = 0}}, so {{(${polyM([[1, 1], [-p, 0]])})(${polyM([[1, 1], [-q, 0]])}) = 0}}.`,
          `x = ${num(p)} or x = ${num(q)}.`,
        ],
        hint: "Set dy/dx equal to the given gradient — you get a quadratic equation. Rearrange to = 0 and factorise.",
        traps: [],
      };
    },
  },

  /* 5 ─ Equation of a tangent --------------------------------------------------- */
  {
    id: `${TOPIC}.tangent-equation`,
    topicId: TOPIC,
    title: "Find the equation of a tangent to a curve",
    level: 2,
    guideRef: "tangents",
    generate(rng, tier) {
      let terms: Term[] = [], k = 1, m = 0, y0 = 0;
      for (let i = 0; i < 100; i++) {
        ({ terms, k } = makeCurve(rng, tier));
        m = evalAt(diff(terms), k);
        y0 = evalAt(terms, k);
        if (m !== 0 && y0 - m * k !== 0) break;
      }
      const c = clean(y0 - m * k);
      const point = rng.bool(0.5) ? `at the point where x = ${num(k)}` : `at the point ${pt(k, y0)}`;
      const traps: Trap[] = [];
      const wrong = clean(y0 + m * k);
      if (wrong !== c) traps.push({ spec: { type: "equation", eq: `y = ${poly([[m, "x"], [wrong, ""]])}` }, feedback: `Sign slip: {{y - ${ib(y0)} = ${m}(x - ${ib(k)})}} — expand {{-${m} * ${ib(k)}}} carefully.` });
      if (y0 !== m) traps.push({ spec: { type: "equation", eq: `y = ${poly([[y0, "x"], [clean(y0 - y0 * k), ""]])}` }, feedback: "You used the y-value as the gradient. The gradient comes from dy/dx." });
      return {
        prompt: `${rng.pick(["Find", "Work out"])} the equation of the tangent to the curve {{y = ${polyM(terms)}}} ${point}. Give your answer in the form {{y = mx + c}}.`,
        answer: lineSpec(m, c),
        solution: [
          `{{dy/dx = ${polyM(diff(terms))}}}, so at x = ${num(k)} the gradient is {{${subst(diff(terms), k)} = ${m}}}.`,
          `The point: {{y = ${subst(terms, k)} = ${y0}}}, so it is ${pt(k, y0)}.`,
          `{{y - ${ib(y0)} = ${m}(x - ${ib(k)})}}`,
          `{{y = ${poly([[m, "x"], [c, ""]])}}}`,
        ],
        hint: "You need a gradient (from dy/dx at that x) and a point (from the curve). Then use y − y₁ = m(x − x₁).",
        traps,
      };
    },
  },

  /* 6 ─ Turning points ------------------------------------------------------------ */
  {
    id: `${TOPIC}.turning-point`,
    topicId: TOPIC,
    title: "Find a turning point and decide if it is a maximum or minimum",
    level: 2,
    guideRef: "turning-points",
    generate(rng, tier) {
      const quadratic = tier === 1 || (tier === 2 && rng.bool(0.4));
      if (quadratic) {
        const a = tier === 1 ? rng.pick([1, 1, 2, -1]) : rng.pick([1, 2, 3, -1, -2, -3]);
        const h = rng.nonZero(-5, 5);
        const c = rng.int(-9, 9);
        const terms = tidy([[a, 2], [-2 * a * h, 1], [c, 0]]);
        const y0 = evalAt(terms, h);
        const nature = a > 0 ? "minimum" : "maximum";
        return {
          prompt: `The curve {{y = ${polyM(terms)}}} has one turning point. Use differentiation to find its coordinates.`,
          answer: ptSpec(h, y0),
          solution: [
            `{{dy/dx = ${polyM(diff(terms))}}}`,
            `At a turning point {{dy/dx = 0}}: {{${polyM(diff(terms))} = 0}}, so x = ${num(h)}.`,
            `{{y = ${subst(terms, h)} = ${y0}}}. Turning point ${pt(h, y0)}.`,
            `{{(d^2y)/(dx^2) = ${2 * a}}} ${a > 0 ? "> 0" : "< 0"}, so it is a ${nature}.`,
          ],
          hint: "At a turning point the gradient is zero: solve dy/dx = 0, then substitute x back into y.",
          traps: [{ spec: ptSpec(-h, evalAt(terms, -h)), feedback: `Check the sign when solving {{${polyM(diff(terms))} = 0}}.` }],
        };
      }
      // Cubic with turning points at p < q:  y = L(2x³ − 3(p+q)x² + 6pq x) + D, L = ±1
      let p = -1, q = 2;
      for (let i = 0; i < 100; i++) {
        p = rng.int(-4, 3);
        q = rng.int(p + 1, tier === 3 ? 5 : 4);
        if (q - p <= 5) break;
      }
      const L = rng.pick([1, 1, -1]);
      const D = rng.int(-8, 8);
      const terms = tidy([[2 * L, 3], [-3 * L * (p + q), 2], [6 * L * p * q, 1], [D, 0]]);
      const d = diff(terms);
      const d2 = diff(d);
      const wantMax = rng.bool(0.5);
      // For L = 1 the maximum is at the smaller root.
      const xMax = L > 0 ? p : q;
      const xMin = L > 0 ? q : p;
      const xw = wantMax ? xMax : xMin;
      const xo = wantMax ? xMin : xMax;
      const yw = evalAt(terms, xw);
      const yo = evalAt(terms, xo);
      const sd = (x: number) => evalAt(d2, x);
      return {
        prompt: `The curve C has equation {{y = ${polyM(terms)}}}. Find the coordinates of the ${wantMax ? "maximum" : "minimum"} point on C. Show how you decide which turning point it is.`,
        answer: ptSpec(xw, yw),
        solution: [
          `{{dy/dx = ${polyM(d)} = ${6 * L}(${polyM([[1, 1], [-p, 0]])})(${polyM([[1, 1], [-q, 0]])})}}, so the turning points are at x = ${num(p)} and x = ${num(q)}.`,
          `{{(d^2y)/(dx^2) = ${polyM(d2)}}}: at x = ${num(xw)} it is ${num(sd(xw))} (${sd(xw) < 0 ? "negative → maximum" : "positive → minimum"}); at x = ${num(xo)} it is ${num(sd(xo))}.`,
          `{{y = ${subst(terms, xw)} = ${yw}}}, so the ${wantMax ? "maximum" : "minimum"} point is ${pt(xw, yw)}.`,
        ],
        hint: "Solve dy/dx = 0 to get two x-values. The second derivative is negative at a maximum and positive at a minimum.",
        traps: [{ spec: ptSpec(xo, yo), feedback: `That's the other turning point — it's a ${wantMax ? "minimum" : "maximum"}. Check the sign of {{(d^2y)/(dx^2)}}.` }],
      };
    },
  },

  /* 7 ─ Optimisation in context ----------------------------------------------------- */
  {
    id: `${TOPIC}.optimisation`,
    topicId: TOPIC,
    title: "Optimisation: maximise or minimise a quantity in context",
    level: 3,
    guideRef: "turning-points",
    generate(rng, tier) {
      const kinds = tier === 1 ? ["fence", "profit"] : tier === 2 ? ["fence", "profit", "box", "ball"] : ["box", "ball", "cuboid", "fence"];
      const kind = rng.pick(kinds);
      if (kind === "fence") {
        const k = rng.int(3, 15);
        const L = 4 * k;
        const name = rng.pick(["Siti", "Ravi", "Hana", "Marcus"]);
        const askX = rng.bool(0.4);
        const A = 2 * k * k;
        return {
          prompt: `${name} has ${L} m of fencing to make a rectangular vegetable plot against a long wall. The wall forms one side, so only three sides need fencing. The two sides at right angles to the wall are each x m long.\n\nShow that the area is {{A = ${L}x - 2x^2}}, then use calculus to find the ${askX ? "value of x that gives the maximum area" : "maximum possible area, in m²"}.`,
          answer: { type: "number", value: askX ? k : A },
          solution: [
            `The side parallel to the wall is {{${L} - 2x}}, so {{A = x(${L} - 2x) = ${L}x - 2x^2}}.`,
            `{{(dA)/(dx) = ${L} - 4x = 0}} gives x = ${k}. {{(d^2A)/(dx^2) = -4 < 0}}, so it is a maximum.`,
            `{{A = ${L} * ${k} - 2 * ${k}^2 = ${A}}} m².`,
          ],
          hint: "Write the area in terms of x only, differentiate, set the derivative equal to 0.",
          traps: askX ? [{ spec: { type: "number", value: A }, feedback: "That's the area — the question asks for x." }] : [{ spec: { type: "number", value: k }, feedback: `x = ${k} is where the maximum happens. Substitute it into A to get the area.` }],
        };
      }
      if (kind === "profit") {
        const j = rng.int(5, 20);
        const b = 4 * j; // x = j (hundreds), P = 2j² − c
        const c = rng.int(1, 2 * j * j - 1);
        const P = 2 * j * j - c;
        const askX = rng.bool(0.4);
        return {
          prompt: `A hawker stall's daily profit, $P, from selling x bowls of vegetarian laksa (in tens) is modelled by {{P = ${b}x - 2x^2 - ${c}}}.\n\nUse calculus to find the ${askX ? "value of x that maximises the profit" : "maximum daily profit, in dollars"}.`,
          answer: { type: "number", value: askX ? j : P },
          solution: [
            `{{(dP)/(dx) = ${b} - 4x}}. Set it to 0: x = ${j}.`,
            `{{(d^2P)/(dx^2) = -4 < 0}}, so this is a maximum.`,
            `{{P = ${b} * ${j} - 2 * ${j}^2 - ${c} = ${P}}} dollars.`,
          ],
          hint: "The maximum is where dP/dx = 0.",
          traps: askX ? [{ spec: { type: "number", value: P }, feedback: "That's the profit — the question asks for x." }] : [{ spec: { type: "number", value: j }, feedback: "That's the x-value at the maximum. Substitute it into P." }],
        };
      }
      if (kind === "box") {
        const k = rng.int(2, 7);
        const s = 6 * k;
        const V = 16 * k * k * k;
        const askX = rng.bool(0.4);
        return {
          prompt: `An open box is made from a square sheet of card of side ${s} cm by cutting a square of side x cm from each corner and folding up the sides.\n\nThe volume is {{V = x(${s} - 2x)^2}}. Use calculus to find the ${askX ? "value of x that gives the maximum volume" : "maximum volume of the box, in cm³"}.`,
          answer: { type: "number", value: askX ? k : V },
          solution: [
            `{{V = ${s * s}x - ${4 * s}x^2 + 4x^3}}, so {{(dV)/(dx) = ${s * s} - ${8 * s}x + 12x^2 = 12(x - ${k})(x - ${3 * k})}}.`,
            `x = ${3 * k} would leave no base ({{${s} - 2 * ${3 * k} = 0}}), so x = ${k}. {{(d^2V)/(dx^2) = 24x - ${8 * s}}} = ${24 * k - 8 * s} < 0 at x = ${k}, so it is a maximum.`,
            `{{V = ${k}(${s} - ${2 * k})^2 = ${k} * ${(s - 2 * k) ** 2} = ${V}}} cm³.`,
          ],
          hint: "Expand V, differentiate, and solve dV/dx = 0. One of the two solutions makes no sense for the box.",
          traps: askX ? [{ spec: { type: "number", value: 3 * k }, feedback: `With x = ${3 * k} the base has side 0 — that's the minimum (zero volume).` }] : [{ spec: { type: "number", value: k }, feedback: "That's x. Substitute it into V." }],
        };
      }
      if (kind === "ball") {
        const u = rng.pick([12, 14, 15, 16, 18, 20, 22, 24, 25, 30]);
        const h0 = rng.int(1, 3);
        const t = clean(u / 10);
        const H = clean(h0 + (u * u) / 20);
        const who = rng.pick(["Jun", "Zara", "Kenji", "Priya"]);
        const askT = rng.bool(0.35);
        return {
          prompt: `${who} throws a ball upwards. Its height, h metres, after t seconds is {{h = ${h0} + ${u}t - 5t^2}}.\n\nUse calculus to find ${askT ? "the time, in seconds, at which the ball is highest. Give your answer as a decimal." : "the greatest height of the ball, in metres. Give your answer as a decimal."}`,
          answer: { type: "number", value: askT ? t : H, allowFraction: true },
          solution: [`{{(dh)/(dt) = ${u} - 10t = 0}}, so t = ${num(t)} s.`, `{{(d^2h)/(dt^2) = -10 < 0}}, so this is a maximum.`, `{{h = ${h0} + ${u} * ${t} - 5 * ${t}^2 = ${H}}} m.`],
          hint: "At the top, the ball's vertical velocity dh/dt is zero.",
          traps: askT ? [{ spec: { type: "number", value: H }, feedback: "That's the height — the question asks for the time." }] : [{ spec: { type: "number", value: t }, feedback: "That's the time. Substitute it into h." }],
        };
      }
      // cuboid: square base x, volume V = x³ fixed → minimise surface area A = 2x² + 4V/x
      const x = rng.int(2, 8);
      const V = x * x * x;
      const A = 6 * x * x;
      return {
        prompt: `A closed box is a cuboid with a square base of side x cm and volume ${V} cm³.\n\nShow that its surface area is {{A = 2x^2 + ${4 * V}/x}}, then use calculus to find the minimum surface area, in cm².`,
        answer: { type: "number", value: A },
        solution: [
          `Height = {{${V}/x^2}}, so {{A = 2x^2 + 4x * ${V}/x^2 = 2x^2 + ${4 * V}/x}}.`,
          `{{(dA)/(dx) = 4x - ${4 * V}/x^2 = 0}} → {{x^3 = ${V}}} → x = ${x}. {{(d^2A)/(dx^2) = 4 + ${8 * V}/x^3 > 0}}, so a minimum.`,
          `{{A = 2 * ${x}^2 + ${4 * V}/${x} = ${2 * x * x} + ${4 * x * x} = ${A}}} cm². (The box is a cube!)`,
        ],
        hint: "Write {{4V/x}} as a negative power before differentiating.",
        traps: [{ spec: { type: "number", value: x }, feedback: "That's the side length x. Substitute it into A." }],
      };
    },
  },

  /* 8 ─ Kinematics: velocity and acceleration ---------------------------------------- */
  {
    id: `${TOPIC}.velocity-acceleration`,
    topicId: TOPIC,
    title: "Find velocity and acceleration from displacement",
    level: 2,
    guideRef: "kinematics",
    generate(rng, tier) {
      const a = tier === 1 ? 1 : rng.pick([1, 2, -1]);
      const b = rng.int(-6, 6);
      const c = rng.nonZero(-9, 12);
      const d = tier === 1 ? 0 : rng.int(0, 10);
      const terms = tidy([[a, 3], [b, 2], [c, 1], [d, 0]]);
      const v = diff(terms);
      const acc = diff(v);
      const T = rng.int(1, tier === 1 ? 4 : 6);
      const ask = tier === 1 ? rng.pick(["v", "a"]) : rng.pick(["v", "a", "v0", "a"]);
      const who = rng.pick(["A particle P", "A toy car", "A drone", "A lift"]);
      const intro = `${who} moves in a straight line. Its displacement, s metres, from a fixed point O at time t seconds is {{s = ${polyM(terms, "t")}}}.`;
      if (ask === "a") {
        const val = evalAt(acc, T);
        const vT = evalAt(v, T);
        return {
          prompt: `${intro}\n\nFind the acceleration at t = ${T}, in m/s².`,
          answer: { type: "number", value: val },
          solution: [`{{v = (ds)/(dt) = ${polyM(v, "t")}}}`, `{{a = (dv)/(dt) = ${polyM(acc, "t")}}}`, `At t = ${T}: {{a = ${subst(acc, T).replace(/x/g, "t")} = ${val}}} m/s².`],
          hint: "Acceleration is the derivative of velocity, which is the derivative of displacement — differentiate twice.",
          traps: vT !== val ? [{ spec: { type: "number", value: vT }, feedback: "That's the velocity at that time. Differentiate once more for acceleration." }] : [],
        };
      }
      const Tq = ask === "v0" ? 0 : T;
      const val = evalAt(v, Tq);
      const traps: Trap[] = [];
      const sT = evalAt(terms, Tq);
      if (sT !== val) traps.push({ spec: { type: "number", value: sT }, feedback: "That's the displacement. Velocity is {{(ds)/(dt)}}." });
      return {
        prompt: `${intro}\n\n${ask === "v0" ? "Find the initial velocity, in m/s." : `Find the velocity at t = ${T}, in m/s.`}`,
        answer: { type: "number", value: val },
        solution: [`{{v = (ds)/(dt) = ${polyM(v, "t")}}}`, `At t = ${Tq}: {{v = ${subst(v, Tq)} = ${val}}} m/s.`, ask === "v0" ? "“Initial” means t = 0." : `${val < 0 ? "Negative: it is moving back towards O." : val > 0 ? "Positive: it is moving away from O (in the positive direction)." : "Zero: it is momentarily at rest."}`],
        hint: "Velocity is the rate of change of displacement: v = ds/dt.",
        traps,
      };
    },
  },

  /* 9 ─ Kinematics: at rest -------------------------------------------------------------- */
  {
    id: `${TOPIC}.at-rest`,
    topicId: TOPIC,
    title: "Find when a particle is at rest",
    level: 3,
    guideRef: "kinematics",
    generate(rng, tier) {
      let p = 1, q = 3;
      for (let i = 0; i < 100; i++) {
        p = rng.int(1, 5);
        q = rng.int(p + 1, 7);
        if (q - p <= 4) break;
      }
      const D = rng.int(0, 12);
      // s = 2t³ − 3(p+q)t² + 6pq t + D, v = 6(t − p)(t − q), a = 12t − 6(p+q)
      const s: Term[] = tidy([[2, 3], [-3 * (p + q), 2], [6 * p * q, 1], [D, 0]]);
      const v = diff(s);
      const acc = diff(v);
      const givenV = tier === 1;
      const ask = tier === 3 ? rng.pick(["acc", "disp", "times"]) : "times";
      const vStr = polyM(v, "t");
      const intro = givenV
        ? `A particle moves in a straight line. Its velocity, v m/s, at time t seconds is {{v = ${vStr}}}.`
        : `A particle moves along a straight line. Its displacement, s metres, from O at time t seconds is {{s = ${polyM(s, "t")}}}.`;
      const restSteps = [
        ...(givenV ? [] : [`{{v = (ds)/(dt) = ${vStr}}}`]),
        `At rest means v = 0: {{${vStr} = 0}} → {{6(t^2 - ${p + q}t + ${p * q}) = 0}} → {{6(t - ${p})(t - ${q}) = 0}}.`,
        `t = ${p} s or t = ${q} s.`,
      ];
      if (ask === "times") {
        return {
          prompt: `${intro}\n\nFind the two times at which the particle is instantaneously at rest.`,
          answer: { type: "list", values: [p, q], ordered: false, display: `t = ${p} and t = ${q}` },
          solution: restSteps,
          hint: "“At rest” means the velocity is zero.",
          traps: givenV ? [] : [{ spec: { type: "list", values: [0, p, q], ordered: false }, feedback: "t = 0 isn't a time at rest here — check v at t = 0." }],
        };
      }
      if (ask === "acc") {
        const aP = evalAt(acc, p);
        return {
          prompt: `${intro}\n\nFind the acceleration of the particle when it is first at rest, in m/s².`,
          answer: { type: "number", value: aP },
          solution: [...restSteps, `It is first at rest at t = ${p}. {{a = (dv)/(dt) = ${polyM(acc, "t")}}} = 12 × ${p} − ${6 * (p + q)} = ${aP} m/s².`],
          hint: "First find when v = 0. Then differentiate v to get a, and use the earlier time.",
          traps: [{ spec: { type: "number", value: evalAt(acc, q) }, feedback: `That's the acceleration at t = ${q}, the second time it is at rest.` }],
        };
      }
      const sQ = evalAt(s, q);
      const sP = evalAt(s, p);
      return {
        prompt: `${intro}\n\nFind the displacement of the particle from O when it is at rest for the second time.`,
        answer: { type: "number", value: sQ },
        solution: [...restSteps, `Second time at rest: t = ${q}. {{s = ${subst(s, q)} = ${sQ}}} m.`],
        hint: "Find the times when v = 0, then substitute the later one into s.",
        traps: sP !== sQ ? [{ spec: { type: "number", value: sP }, feedback: `That's the displacement at t = ${p}, the first time it is at rest.` }] : [],
      };
    },
  },

  /* 10 ─ Normals (H+) ------------------------------------------------------------------- */
  {
    id: `${TOPIC}.normal`,
    topicId: TOPIC,
    title: "Find the gradient and equation of a normal",
    level: 3,
    guideRef: "normals",
    generate(rng, tier) {
      let terms: Term[] = [], k = 1, m = 0, y0 = 0;
      for (let i = 0; i < 100; i++) {
        ({ terms, k } = makeCurve(rng, tier === 1 ? 1 : tier));
        m = evalAt(diff(terms), k);
        y0 = evalAt(terms, k);
        if (m !== 0 && y0 !== 0 && k + m * y0 !== 0) break;
      }
      const ask = tier === 1 ? rng.pick(["grad", "eq"]) : tier === 2 ? rng.pick(["grad", "eq", "eq"]) : rng.pick(["eq", "xaxis"]);
      const curve = `{{y = ${polyM(terms)}}}`;
      const base = [
        `{{dy/dx = ${polyM(diff(terms))}}}; at x = ${num(k)} the tangent gradient is {{${subst(diff(terms), k)} = ${m}}}.`,
        `Normal gradient = {{-1/(${m})}} = ${frac(-1, m)} (perpendicular: the two gradients multiply to −1).`,
      ];
      if (ask === "grad") {
        const traps: Trap[] = [{ spec: { type: "number", value: m }, feedback: "That's the gradient of the tangent. The normal is perpendicular to it." }];
        if (m !== 1 && m !== -1) traps.push({ spec: { type: "fraction", n: 1, d: m }, feedback: "Reciprocal — yes — but also change the sign: the gradients must multiply to −1." });
        return {
          prompt: `The curve C has equation ${curve}. Find the gradient of the normal to C at the point where x = ${num(k)}.`,
          answer: { type: "fraction", n: -1 * Math.sign(m), d: Math.abs(m), display: frac(-1, m) },
          solution: base,
          hint: "Find the tangent's gradient first. The normal is at right angles to the tangent.",
          traps,
        };
      }
      const cst = -(k + m * y0);
      const eq = `${poly([[1, "x"], [m, "y"], [cst, ""]])} = 0`;
      const steps = [...base, `The point is ${pt(k, y0)}. {{y - ${ib(y0)} = ${frac(-1, m).slice(2, -2)}(x - ${ib(k)})}}.`, `Multiply by ${num(m)} and rearrange: {{${eq}}}.`];
      if (ask === "xaxis") {
        const X = k + m * y0;
        const tangentX = (m * k - y0) / m;
        return {
          prompt: `The curve C has equation ${curve}. The normal to C at the point where x = ${num(k)} crosses the x-axis at Q. Find the x-coordinate of Q.`,
          answer: { type: "number", value: X },
          solution: [...steps, `On the x-axis y = 0: {{x = ${X}}}.`],
          hint: "Find the equation of the normal, then put y = 0.",
          traps: Number.isInteger(tangentX) && tangentX !== X ? [{ spec: { type: "number", value: tangentX }, feedback: "That's where the tangent crosses the x-axis — use the normal's gradient." }] : [],
        };
      }
      const tangentEq = `${poly([[m, "x"], [-1, "y"], [y0 - m * k, ""]])} = 0`;
      return {
        prompt: `The curve C has equation ${curve}. Find the equation of the normal to C at the point where x = ${num(k)}. Give your answer in the form {{ax + by + c = 0}}, where a, b and c are integers.`,
        answer: { type: "equation", eq, form: "general", display: `{{${eq}}}` },
        solution: steps,
        hint: "Normal gradient = −1 ÷ (tangent gradient). Use y − y₁ = m(x − x₁), then clear the fraction.",
        traps: [{ spec: { type: "equation", eq: tangentEq }, feedback: "That's the tangent. The normal has gradient −1 ÷ (tangent gradient)." }],
      };
    },
  },
];
