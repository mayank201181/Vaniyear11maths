// Procedural skill drills — Graphs of Functions (topic "graphs-of-functions").
// Every generator picks the answer first from integers (roots, turning points,
// speeds, k and a in y = k·a^x …) and builds the question around it, so the
// marked answer is exact. Bounded rejection loops rule out degenerate cases.
import type { Drill } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { clean, frac, num, poly, roundTo, simplify } from "./helpers.ts";

const TOPIC = "graphs-of-functions";

/* ------------------------------------------------------------------------ */
/* Formatting helpers                                                        */
/* ------------------------------------------------------------------------ */

/** ax² + bx + c as ASCII (for {{ }} and expression answers). */
const quad = (a: number, b: number, c: number): string => poly([[a, "x^2"], [b, "x"], [c, ""]]);
/** ax³ + bx² + cx + d as ASCII. */
const cubic = (a: number, b: number, c: number, d: number): string => poly([[a, "x^3"], [b, "x^2"], [c, "x"], [d, ""]]);

/** Inside {{ }}: bracket negatives, keep decimals clean. */
const ib = (n: number): string => (n < 0 ? `(${clean(n)})` : `${clean(n)}`);

/** Coordinates in plain text: (3, −2). */
const pt = (x: number, y: number): string => `(${num(x)}, ${num(y)})`;
const ptSpec = (x: number, y: number): AnswerSpec => ({ type: "list", values: [clean(x), clean(y)], ordered: true, display: pt(x, y) });

/** A rational shown in running text: 3, −2, {{-3/2}}. */
const qText = (n: number, d: number): string => {
  const [a, b] = simplify(n, d);
  return b === 1 ? num(a) : frac(a, b);
};

/** "(x - 3)" / "(x + 2)" / "x" for (x − h) inside {{ }}. */
const xMinus = (h: number): string => (h === 0 ? "x" : `(x ${h > 0 ? "-" : "+"} ${Math.abs(h)})`);

/** "y = 2x - 3" as an answer spec. */
function lineSpec(m: number, k: number): AnswerSpec {
  const rhs = poly([[m, "x"], [k, ""]]);
  return { type: "expression", expr: `y=${rhs.replace(/\s+/g, "")}`, display: `{{y = ${rhs}}}` };
}

/* ------------------------------------------------------------------------ */
/* Speed–time diagram                                                        */
/* ------------------------------------------------------------------------ */

function speedTimeSvg(u: number, v: number, t1: number, t2: number, t3: number): string {
  const W = 360, H = 230, ox = 48, oy = 190, gw = 290, gh = 150;
  const X = (t: number) => Math.round((ox + (t / t3) * gw) * 10) / 10;
  const Y = (s: number) => Math.round((oy - (s / v) * gh * 0.85) * 10) / 10;
  const P = (t: number, s: number) => `${X(t)},${Y(s)}`;
  const out: string[] = [`<rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff"/>`];
  out.push(`<polygon points="${P(0, 0)} ${P(0, u)} ${P(t1, v)} ${P(t2, v)} ${P(t3, 0)}" fill="#bae6fd" stroke="none"/>`);
  out.push(`<line x1="${ox}" y1="${oy}" x2="${ox + gw + 10}" y2="${oy}" stroke="#334155" stroke-width="1.5"/>`);
  out.push(`<line x1="${ox}" y1="${oy}" x2="${ox}" y2="${oy - gh - 10}" stroke="#334155" stroke-width="1.5"/>`);
  out.push(`<polyline points="${P(0, u)} ${P(t1, v)} ${P(t2, v)} ${P(t3, 0)}" fill="none" stroke="#1f2937" stroke-width="2.5"/>`);
  const dash = 'stroke="#334155" stroke-width="1" stroke-dasharray="4 3"';
  out.push(`<line x1="${ox}" y1="${Y(v)}" x2="${X(t1)}" y2="${Y(v)}" ${dash}/>`);
  out.push(`<line x1="${X(t1)}" y1="${Y(v)}" x2="${X(t1)}" y2="${oy}" ${dash}/>`);
  out.push(`<line x1="${X(t2)}" y1="${Y(v)}" x2="${X(t2)}" y2="${oy}" ${dash}/>`);
  const txt = (x: number, y: number, s: string, anchor = "middle") =>
    `<text x="${x}" y="${y}" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="${anchor}">${s}</text>`;
  out.push(txt(ox - 6, oy + 4, "0", "end"));
  out.push(txt(ox - 6, Y(v) + 4, String(v), "end"));
  if (u > 0) out.push(txt(ox - 6, Y(u) + 4, String(u), "end"));
  out.push(txt(X(t1), oy + 15, String(t1)));
  out.push(txt(X(t2), oy + 15, String(t2)));
  out.push(txt(X(t3), oy + 15, String(t3)));
  out.push(txt(ox + gw / 2, H - 6, "Time (s)"));
  out.push(`<text x="14" y="${oy - gh / 2}" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" transform="rotate(-90 14 ${oy - gh / 2})">Speed (m/s)</text>`);
  const label = `Speed–time graph: the speed ${u > 0 ? `starts at ${u} m/s and rises` : "rises from 0"} to ${v} m/s at ${t1} s, stays at ${v} m/s until ${t2} s, then falls to 0 at ${t3} s.`;
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">${out.join("")}</svg>`;
}

/* ------------------------------------------------------------------------ */
/* Drills                                                                     */
/* ------------------------------------------------------------------------ */

export const drills: Drill[] = [
  /* 1 ─ Plotting: table of values ------------------------------------------ */
  {
    id: `${TOPIC}.table-of-values`,
    topicId: TOPIC,
    title: "Complete a table of values for a quadratic or cubic",
    level: 1,
    guideRef: "plotting-quadratics",
    generate(rng, tier) {
      const isCubic = tier === 3 && rng.bool(0.5);
      const a = tier === 1 ? 1 : rng.pick(tier === 2 ? [1, 1, 2, -1, -2] : [2, 3, -1, -2]);
      const b = isCubic ? rng.pick([-4, -3, -2, 2, 3, 4]) : rng.nonZero(tier === 1 ? -4 : -6, tier === 1 ? 4 : 6);
      const c = rng.int(-6, 6);
      const f = (x: number) => (isCubic ? a * x * x * x + b * x + c : a * x * x + b * x + c);
      const eq = isCubic ? cubic(a, 0, b, c) : quad(a, b, c);
      const xs = isCubic ? [-3, -2, -1, 0, 1, 2, 3] : [-3, -2, -1, 0, 1, 2, 3, 4];
      const negs = xs.filter((x) => x < 0);
      const poss = xs.filter((x) => x > 0);
      const x1 = rng.pick(negs);
      const x2 = rng.pick(poss);
      const row = xs.map((x) => (x === x1 || x === x2 ? "?" : num(f(x))));
      const table = `| x | ${xs.map(num).join(" | ")} |\n|---|${xs.map(() => "---").join("|")}|\n| y | ${row.join(" | ")} |`;
      const y1 = f(x1), y2 = f(x2);
      const wrongNeg = isCubic ? -a * x1 * x1 * x1 + b * x1 + c : -a * x1 * x1 + b * x1 + c;
      const intro = rng.pick([
        `Here is a table of values for {{y = ${eq}}}.`,
        `Priya is drawing the graph of {{y = ${eq}}}. Here is her table of values.`,
        `Complete the table of values for {{y = ${eq}}}.`,
      ]);
      const powerTxt = isCubic ? `x^3` : `x^2`;
      const pw = isCubic ? 3 : 2;
      const lc = a === 1 ? "" : a === -1 ? "-" : `${a}`;
      const subst = (x: number) => `${lc}(${x})^${pw} ${b < 0 ? "-" : "+"} ${Math.abs(b)} * ${ib(x)} ${c < 0 ? "-" : "+"} ${Math.abs(c)}`;
      const traps: Trap[] = [];
      if (wrongNeg !== y1) traps.push({ spec: { type: "list", values: [wrongNeg, y2], ordered: true }, feedback: `Check x = ${num(x1)}: a negative number ${isCubic ? "cubed stays negative" : "squared is positive"}. Put it in a bracket: {{${ib(x1)}^${isCubic ? 3 : 2} = ${isCubic ? x1 ** 3 : x1 * x1}}}.` });
      return {
        prompt: `${intro}\n\n${table}\n\nFind the two missing values of y. Give the value for x = ${num(x1)} first.`,
        answer: { type: "list", values: [y1, y2], ordered: true, display: `${num(y1)} and ${num(y2)}` },
        solution: [
          `x = ${num(x1)}: {{y = ${subst(x1)} = ${y1}}}`,
          `x = ${num(x2)}: {{y = ${subst(x2)} = ${y2}}}`,
          `The missing values are ${num(y1)} and ${num(y2)}.`,
        ],
        hint: `Substitute each x in a bracket and square or cube first: {{${powerTxt}}} with x = ${num(x1)} means {{${ib(x1)}^${isCubic ? 3 : 2}}}.`,
        traps,
      };
    },
  },

  /* 2 ─ Plotting: symmetry and turning point from roots --------------------- */
  {
    id: `${TOPIC}.turning-point-from-roots`,
    topicId: TOPIC,
    title: "Use symmetry to find the turning point of a quadratic graph",
    level: 1,
    guideRef: "plotting-quadratics",
    generate(rng, tier) {
      let p = 1, q = 3;
      for (let i = 0; i < 100; i++) {
        p = rng.int(-7, 6);
        q = rng.int(p + 2, 8);
        if (tier === 1 && (p + q) % 2 !== 0) continue;
        if (p !== 0 || q !== 0) break;
      }
      const h = (p + q) / 2;
      const kind = rng.int(0, 2);
      if (kind === 0) {
        // Line of symmetry from two points with the same y
        const Y = rng.int(-9, 12);
        const name = rng.pick(["Arjun", "Wei Ling", "Hana", "Marcus"]);
        return {
          prompt: `${name} plots a quadratic graph. In the table of values, y = ${num(Y)} when x = ${num(p)} and also when x = ${num(q)}. The line of symmetry of the graph is x = k. Find k.`,
          answer: { type: "number", value: h, display: `x = ${num(h)}` },
          solution: [
            "Points with the same y-value are mirror images in the line of symmetry.",
            `So the line of symmetry is halfway between: {{k = (${p} + ${ib(q)})/2 = ${clean(h)}}}.`,
          ],
          hint: "The line of symmetry is exactly halfway between two x-values that give the same y.",
          traps: (q - p) / 2 === h ? [] : [{ spec: { type: "number", value: (q - p) / 2 }, feedback: "You halved the gap between them. Add the two x-values and halve (the mean), don't subtract." }],
        };
      }
      // Turning point of y = (x − p)(x − q)
      const yTp = (h - p) * (h - q);
      const neg = tier >= 2 && rng.bool(0.4);
      const sgn = neg ? -1 : 1;
      const eqShown = neg ? `{{y = ${xMinus(p)}(${q} - x)}}` : `{{y = ${xMinus(p)}${xMinus(q)}}}`;
      const ty = clean(sgn * yTp);
      return {
        prompt: `The graph of ${eqShown} crosses the x-axis at x = ${num(p)} and x = ${num(q)}. Find the coordinates of its turning point. Give your answer as (x, y).`,
        answer: ptSpec(h, ty),
        solution: [
          `The turning point lies on the line of symmetry, halfway between the roots: {{x = (${p} + ${ib(q)})/2 = ${clean(h)}}}.`,
          `Substitute x = ${num(h)}: {{y = ${neg ? `(${ib(h)} - ${ib(p)})(${q} - ${ib(h)})` : `(${ib(h)} - ${ib(p)})(${ib(h)} - ${ib(q)})`} = ${clean(ty)}}}.`,
          `Turning point ${pt(h, ty)} — a ${neg ? "maximum (the graph is ∩-shaped)" : "minimum (the graph is ∪-shaped)"}.`,
        ],
        hint: "Find the x-coordinate first: it is halfway between the two roots. Then substitute it.",
        traps: ty !== 0 ? [{ spec: ptSpec(h, -ty), feedback: "Check the sign of y: substitute carefully, bracket by bracket." }] : [],
      };
    },
  },

  /* 3 ─ Recognising graph shapes ------------------------------------------ */
  {
    id: `${TOPIC}.recognise-graph`,
    topicId: TOPIC,
    title: "Name the type of graph from its equation",
    level: 1,
    guideRef: "recognising-graphs",
    generate(rng, tier) {
      const choices = "Answer *linear*, *quadratic*, *cubic*, *reciprocal* or *exponential*.";
      if (tier === 3 && rng.bool(0.35)) {
        // Asymptote of a shifted reciprocal / exponential
        const k = rng.nonZero(-6, 6);
        const recip = rng.bool();
        const a = rng.pick([2, 3, 4, 5, 6, 8, 12]);
        const eq = recip ? `y = ${a}/x ${k < 0 ? "-" : "+"} ${Math.abs(k)}` : `y = ${a}^x ${k < 0 ? "-" : "+"} ${Math.abs(k)}`;
        return {
          prompt: `The graph of {{${eq}}} has a horizontal asymptote with equation y = c. Find c.`,
          answer: { type: "number", value: k, display: `y = ${num(k)}` },
          solution: recip
            ? [`As x gets very large, {{${a}/x}} gets closer and closer to 0 but never reaches it.`, `So y gets closer and closer to ${num(k)}: the asymptote is y = ${num(k)}.`]
            : [`As x → −∞, {{${a}^x}} gets closer and closer to 0 but stays positive.`, `So y gets closer and closer to ${num(k)}: the asymptote is y = ${num(k)}.`],
          hint: "Which part of the equation can get as close to 0 as you like without ever reaching it?",
          traps: [{ spec: { type: "number", value: -k }, feedback: "Adding k moves the graph UP by k (it's outside the function), so the asymptote moves from y = 0 to y = k." }],
        };
      }
      type Kind = "linear" | "quadratic" | "cubic" | "reciprocal" | "exponential";
      const kind: Kind = rng.pick(["linear", "quadratic", "cubic", "reciprocal", "exponential"] as const);
      const n = rng.pick([2, 3, 4, 5]);
      const m = rng.nonZero(-5, 5);
      const c = rng.int(-6, 6);
      let eq = "";
      if (kind === "linear") eq = rng.bool() ? `y = ${poly([[m, "x"], [c, ""]])}` : `y = ${poly([[c, ""], [m, "x"]])}`;
      else if (kind === "quadratic") eq = rng.bool() ? `y = ${quad(m, 0, c === 0 ? n : c)}` : `y = ${poly([[c === 0 ? n : c, ""], [m, "x"], [-1, "x^2"]])}`;
      else if (kind === "cubic") eq = rng.bool() ? `y = ${cubic(1, 0, m, c)}` : `y = ${poly([[c === 0 ? n : c, ""], [m === 1 ? 2 : m, "x^3"]])}`;
      else if (kind === "reciprocal") eq = `y = ${m < 0 ? "-" : ""}${Math.abs(m) === 1 ? n * 2 : Math.abs(m * 2)}/x`;
      else {
        const base = tier === 1 ? rng.pick(["2", "3", "4", "5", "10"]) : rng.pick(["2", "3", "4", "5", "(1/2)", "(1/3)", "0.5"]);
        const coef = rng.pick([1, 2, 3, 5, 10]);
        eq = coef === 1 ? `y = ${base}^x` : `y = ${coef} * ${base}^x`;
      }
      const accept: Record<Kind, string[]> = {
        linear: ["linear", "linear graph", "straight line", "a straight line", "line"],
        quadratic: ["quadratic", "quadratic graph", "parabola", "a parabola"],
        cubic: ["cubic", "cubic graph", "a cubic"],
        reciprocal: ["reciprocal", "reciprocal graph", "hyperbola", "a hyperbola"],
        exponential: ["exponential", "exponential graph", "an exponential"],
      };
      const why: Record<Kind, string> = {
        linear: "The highest power of x is 1, so the graph is a straight line.",
        quadratic: "The highest power of x is 2, so the graph is a ∪ or ∩-shaped parabola.",
        cubic: "The highest power of x is 3, so the graph is a cubic (an S-shaped curve).",
        reciprocal: "x is on the bottom of a fraction ({{k/x}}), so it is a reciprocal graph: two separate branches with asymptotes on both axes.",
        exponential: "x is the power (the index), with a fixed number as the base, so the graph is exponential.",
      };
      const traps: Trap[] = [];
      if (kind === "exponential") traps.push({ spec: { type: "text", accept: ["quadratic"] }, feedback: "In a quadratic the x is the base ({{x^2}}). Here x is the power ({{2^x}}) — that's exponential." });
      if (kind === "reciprocal") traps.push({ spec: { type: "text", accept: ["linear"] }, feedback: "x is on the bottom of the fraction, so it isn't a straight line — it's a reciprocal graph." });
      if (kind === "cubic") traps.push({ spec: { type: "text", accept: ["quadratic"] }, feedback: "Look at the highest power of x: it is 3, not 2." });
      const prompt = rng.pick([
        `What type of graph is {{${eq}}}? ${choices}`,
        `Wei Ling sketches the graph of {{${eq}}}. Which type of graph should it be? ${choices}`,
        `Name the type of curve with equation {{${eq}}}. ${choices}`,
      ]);
      return {
        prompt,
        answer: { type: "text", accept: accept[kind], display: kind },
        solution: [why[kind], `It is ${kind === "exponential" ? "an" : "a"} **${kind}** graph.`],
        hint: "Where is the x? Find its highest power — or whether it is on the bottom of a fraction or up in the power.",
        traps,
      };
    },
  },

  /* 4 ─ Completing the square → turning point ---------------------------- */
  {
    id: `${TOPIC}.completed-square-turning-point`,
    topicId: TOPIC,
    title: "Find the turning point by completing the square",
    level: 2,
    guideRef: "sketching-quadratics",
    generate(rng, tier) {
      let a = 1, b = 4, c = 1;
      for (let i = 0; i < 100; i++) {
        a = tier === 3 ? rng.pick([2, 3, -1, -2]) : 1;
        const p = tier === 1 ? rng.nonZero(-5, 5) : rng.nonZero(-7, 7); // half of b/a for nice cases
        b = tier === 2 && rng.bool(0.4) ? 2 * p + (p > 0 ? -1 : 1) : 2 * a * p; // tier 2 sometimes odd b
        c = rng.int(-12, 12);
        if (b !== 0 && c !== 0) break;
      }
      const h = clean(-b / (2 * a));
      const k = clean(c - (b * b) / (4 * a));
      const eq = quad(a, b, c);
      const hTxt = qText(-b, 2 * a);
      const kTxt = qText(4 * a * c - b * b, 4 * a);
      const steps: string[] = [];
      if (a === 1) {
        const half = qText(b, 2);
        steps.push(`Halve the coefficient of x: {{${b}/2}} = ${half}.`);
        steps.push(`{{${eq} = (x ${b < 0 ? "-" : "+"} ${frac(Math.abs(b), 2).replace(/[{}]/g, "")})^2 - (${frac(Math.abs(b), 2).replace(/[{}]/g, "")})^2 ${c < 0 ? "-" : "+"} ${Math.abs(c)}}}`);
      } else {
        const p = b / (2 * a);
        steps.push(`Take out the factor ${num(a)} from the x-terms: {{y = ${a}(x^2 ${b / a < 0 ? "-" : "+"} ${Math.abs(b / a)}x) ${c < 0 ? "-" : "+"} ${Math.abs(c)}}}.`);
        steps.push(`Complete the square inside: {{y = ${a}((x ${p < 0 ? "-" : "+"} ${Math.abs(p)})^2 - ${p * p}) ${c < 0 ? "-" : "+"} ${Math.abs(c)}}} = {{${a}(x ${p < 0 ? "-" : "+"} ${Math.abs(p)})^2 ${k < 0 ? "-" : "+"} ${Math.abs(k)}}}.`);
      }
      steps.push(`The turning point is (${hTxt}, ${kTxt}) — change the sign inside the bracket, keep the sign outside. It is a ${a > 0 ? "minimum" : "maximum"} because the {{x^2}} coefficient is ${a > 0 ? "positive" : "negative"}.`);
      const lead = rng.pick(["By completing the square, find", "Write the equation in completed-square form and hence find", "Find"]);
      return {
        prompt: `${lead} the coordinates of the turning point of the curve {{y = ${eq}}}. Give your answer as (x, y)${h % 1 !== 0 ? " using decimals or fractions" : ""}.`,
        answer: { type: "list", values: [h, k], ordered: true, display: `(${hTxt}, ${kTxt})` },
        solution: steps,
        hint: a === 1 ? "Halve the x-coefficient: {{(x + b/2)^2}}, then subtract what the bracket adds." : `Take the factor ${num(a)} out of the first two terms before completing the square.`,
        traps: [{ spec: { type: "list", values: [-h, k], ordered: true }, feedback: "Sign slip on x: {{(x + p)^2}} is smallest when x = −p, not +p." }],
      };
    },
  },

  /* 5 ─ Intercepts from completed-square form ----------------------------- */
  {
    id: `${TOPIC}.intercepts-from-completed-square`,
    topicId: TOPIC,
    title: "Find the intercepts of a quadratic in completed-square form",
    level: 2,
    guideRef: "sketching-quadratics",
    generate(rng, tier) {
      const h = rng.nonZero(-6, 6);
      const r = rng.int(1, tier === 1 ? 4 : 6);
      const maxForm = tier === 3 && rng.bool(0.5);
      const askY = tier >= 2 && rng.bool(0.3);
      const sq = r * r;
      const eq = maxForm ? `y = ${sq} - ${xMinus(h)}^2` : `y = ${xMinus(h)}^2 - ${sq}`;
      if (askY) {
        const y0 = maxForm ? sq - h * h : h * h - sq;
        return {
          prompt: `A curve has equation {{${eq}}}. Find the y-coordinate of the point where it crosses the y-axis.`,
          answer: { type: "number", value: y0 },
          solution: [`On the y-axis x = 0: {{y = ${maxForm ? `${sq} - (0 ${h > 0 ? "-" : "+"} ${Math.abs(h)})^2` : `(0 ${h > 0 ? "-" : "+"} ${Math.abs(h)})^2 - ${sq}`} = ${y0}}}.`],
          hint: "Every point on the y-axis has x = 0.",
          traps: [{ spec: { type: "number", value: maxForm ? sq + h * h : -h * h - sq }, feedback: `{{${ib(-h)}^2 = ${h * h}}} — squaring a negative gives a positive.` }],
        };
      }
      return {
        prompt: `A curve has equation {{${eq}}}. Find the x-coordinates of the points where it crosses the x-axis.`,
        answer: { type: "list", values: [h - r, h + r], display: `x = ${num(h - r)} and x = ${num(h + r)}` },
        solution: [
          `On the x-axis y = 0, so {{${xMinus(h)}^2 = ${sq}}}.`,
          `Square root, remembering ±: {{x ${h > 0 ? "-" : "+"} ${Math.abs(h)} = +- ${r}}}.`,
          `So x = ${num(h)} + ${r} = ${num(h + r)} or x = ${num(h)} − ${r} = ${num(h - r)}.`,
        ],
        hint: "Set y = 0 and get the bracket squared on its own. Don't forget the ± when you square root.",
        traps: [
          { spec: { type: "list", values: [-h - r, -h + r] }, feedback: `The bracket {{${xMinus(h)}}} is zero when x = ${num(h)}, not ${num(-h)}.` },
          { spec: { type: "list", values: [h + r] }, feedback: "There are two crossing points: the square root can be positive or negative." },
        ],
      };
    },
  },

  /* 6 ─ Which straight line to draw ---------------------------------------- */
  {
    id: `${TOPIC}.which-line-to-draw`,
    topicId: TOPIC,
    title: "Find the straight line to draw to solve an equation graphically",
    level: 2,
    guideRef: "graphical-solutions",
    generate(rng, tier) {
      const isCubic = tier === 3 && rng.bool(0.5);
      let b = 1, c = 1, d = 2, e = 3;
      for (let i = 0; i < 100; i++) {
        b = rng.int(-5, 5);
        c = rng.int(-6, 6);
        d = rng.int(-6, 6);
        e = rng.int(-8, 8);
        if (b !== d && (tier === 1 || c !== e) && b !== 0) break;
      }
      const a = tier === 3 && !isCubic ? rng.pick([2, 3]) : 1;
      const curve = isCubic ? cubic(1, 0, b, c) : quad(a, b, c);
      const lead = isCubic ? "x^3" : a === 1 ? "x^2" : `${a}x^2`;
      const rearranged = rng.bool(tier === 1 ? 0 : 0.5);
      // Target equation: lead + d x + e = 0, or lead + d x = −e
      const target = rearranged ? `${poly([[1, lead], [d, "x"]])} = ${-e}` : `${poly([[1, lead], [d, "x"], [e, ""]])} = 0`;
      const m = b - d, k = c - e;
      const name = rng.pick(["Ravi", "Siti", "Kenji", "Olivia"]);
      return {
        prompt: `${name} has drawn the graph of {{y = ${curve}}}. Find the equation of the straight line ${name} should draw on the same axes to solve {{${target}}}.`,
        answer: lineSpec(m, k),
        solution: [
          `Rearrange so the left side is the drawn curve: {{${poly([[1, lead], [d, "x"], [e, ""]])} = 0}}.`,
          `Add {{${poly([[b - d, "x"], [c - e, ""]])}}} to both sides: {{${curve} = ${poly([[m, "x"], [k, ""]])}}}.`,
          `So draw {{y = ${poly([[m, "x"], [k, ""]])}}}; the x-coordinates where it crosses the curve are the solutions.`,
        ],
        hint: "Subtract the equation you want to solve from the curve you have: (curve) − (target) = what you need to draw.",
        traps: [{ spec: lineSpec(-m, -k), feedback: "Signs reversed: you need curve − target, not target − curve. Check by writing curve = line." }],
      };
    },
  },

  /* 7 ─ Line meets curve --------------------------------------------------- */
  {
    id: `${TOPIC}.line-meets-curve`,
    topicId: TOPIC,
    title: "Find where a straight line crosses a quadratic curve",
    level: 2,
    guideRef: "graphical-solutions",
    generate(rng, tier) {
      let r1 = 1, r2 = 3, m = 2, k = 1;
      for (let i = 0; i < 100; i++) {
        r1 = rng.int(-6, 5);
        r2 = rng.int(r1 + 1, 7);
        m = rng.int(-4, 4);
        k = rng.int(-8, 8);
        if (tier === 1 && (r1 < -3 || r2 > 5)) continue;
        if (r1 !== 0 && r2 !== 0 && (m !== 0 || tier > 1)) break;
      }
      const a = tier === 3 ? rng.pick([1, 2]) : 1;
      // a(x − r1)(x − r2) = a x² − a(r1+r2) x + a r1 r2 = curve − line
      const b = -a * (r1 + r2) + m;
      const c = a * r1 * r2 + k;
      const curve = quad(a, b, c);
      const line = poly([[m, "x"], [k, ""]]);
      const diff = quad(a, b - m, c - k);
      const askPoints = tier === 3 && rng.bool(0.5);
      const ctx = rng.pick(["the curve", "the graph of", "the parabola"]);
      if (askPoints) {
        const y1 = m * r1 + k, y2 = m * r2 + k;
        return {
          prompt: `Find the coordinates of the two points where the line {{y = ${line}}} meets ${ctx} {{y = ${curve}}}. Give the point with the smaller x-coordinate first, as x₁, y₁, x₂, y₂.`,
          answer: { type: "list", values: [r1, y1, r2, y2], ordered: true, display: `${pt(r1, y1)} and ${pt(r2, y2)}` },
          solution: [
            `Set the equations equal: {{${curve} = ${line}}}, so {{${diff} = 0}}.`,
            `Factorise: {{${a === 1 ? "" : a}${xMinus(r1)}${xMinus(r2)} = 0}}, so x = ${num(r1)} or x = ${num(r2)}.`,
            `Substitute into the line: ${pt(r1, y1)} and ${pt(r2, y2)}.`,
          ],
          hint: "At the crossing points both equations give the same y, so set them equal and solve the quadratic.",
        };
      }
      const traps: Trap[] = r1 + r2 !== 0 ? [{ spec: { type: "list", values: [-r1, -r2] }, feedback: "Sign slip: if {{x - 3 = 0}} then x = 3, not −3." }] : [];
      return {
        prompt: `The line {{y = ${line}}} crosses ${ctx} {{y = ${curve}}} at two points. Find the x-coordinates of these points.`,
        answer: { type: "list", values: [r1, r2], display: `x = ${num(r1)} and x = ${num(r2)}` },
        solution: [
          `Set the equations equal: {{${curve} = ${line}}}.`,
          `Rearrange to = 0: {{${diff} = 0}}.`,
          `Factorise: {{${a === 1 ? "" : a}${xMinus(r1)}${xMinus(r2)} = 0}}, so x = ${num(r1)} or x = ${num(r2)}.`,
        ],
        hint: "Where they cross, the y-values are equal. Put curve = line, collect everything on one side and factorise.",
        traps,
      };
    },
  },

  /* 8 ─ Speed–time graphs -------------------------------------------------- */
  {
    id: `${TOPIC}.speed-time-graph`,
    topicId: TOPIC,
    title: "Distance and acceleration from a speed–time graph",
    level: 2,
    guideRef: "real-life-graphs",
    generate(rng, tier) {
      const v = rng.pick(tier === 1 ? [10, 12, 15, 20] : [8, 12, 14, 15, 18, 20, 24, 25, 30]);
      const u = tier === 3 && rng.bool(0.6) ? rng.pick([2, 4, 5, 6].filter((x) => x < v)) : 0;
      let t1 = 4, t2 = 10, t3 = 16;
      for (let i = 0; i < 100; i++) {
        t1 = rng.pick([2, 4, 5, 6, 8, 10]);
        t2 = t1 + rng.pick([4, 5, 6, 8, 10, 12, 15, 20]);
        t3 = t2 + rng.pick([2, 3, 4, 5, 6, 8, 10]);
        if (tier === 1 && (v - u) % t1 !== 0) continue;
        break;
      }
      const diagram = speedTimeSvg(u, v, t1, t2, t3);
      const who = rng.pick(["A cyclist", "A train leaving an MRT station", "A runner", "A tram", "A remote-control car"]);
      const kind = rng.pick(tier === 1 ? (["distance", "accel"] as const) : (["distance", "distance", "accel", "decel"] as const));
      if (kind === "distance") {
        const dist = clean(((u + v) / 2) * t1 + v * (t2 - t1) + (v / 2) * (t3 - t2));
        return {
          prompt: `${who} moves for ${t3} seconds. The speed–time graph shows the journey. Work out the total distance travelled, in metres.`,
          diagram,
          answer: { type: "number", value: dist, display: `${num(dist)} m` },
          solution: [
            "Distance = area under the speed–time graph.",
            u > 0
              ? `First part (trapezium): {{1/2 (${u} + ${v}) * ${t1} = ${clean(((u + v) / 2) * t1)}}}.`
              : `First part (triangle): {{1/2 * ${t1} * ${v} = ${clean((v / 2) * t1)}}}.`,
            `Middle (rectangle): {{${t2 - t1} * ${v} = ${v * (t2 - t1)}}}. Last part (triangle): {{1/2 * ${t3 - t2} * ${v} = ${clean((v / 2) * (t3 - t2))}}}.`,
            `Total = ${num(dist)} m.`,
          ],
          hint: "Split the area under the graph into triangles, rectangles or trapezia and add them.",
          traps: [{ spec: { type: "number", value: v * t3 }, feedback: "That's the rectangle speed × total time — but the object wasn't at top speed the whole time. Use the area of the actual shape." }],
        };
      }
      if (kind === "accel") {
        const [n, d] = simplify(v - u, t1);
        const val = clean((v - u) / t1);
        return {
          prompt: `${who} moves for ${t3} seconds. The speed–time graph shows the journey. Work out the acceleration during the first ${t1} seconds, in m/s². Give your answer as an exact value.`,
          diagram,
          answer: d === 1 ? { type: "number", value: val } : { type: "fraction", n, d, allowDecimal: true, display: `${frac(n, d)} m/s²` },
          solution: [
            "Acceleration = gradient of the speed–time graph = change in speed ÷ time.",
            `{{(${v} - ${u})/${t1} = ${val % 1 === 0 ? val : `${n}/${d}`}}} m/s².`,
          ],
          hint: "Acceleration is the gradient: rise ÷ run on the first section.",
          traps: clean(((u + v) / 2) * t1) === val ? [] : [{ spec: { type: "number", value: clean(((u + v) / 2) * t1) }, feedback: "That's the area (distance). Acceleration is the gradient, not the area." }],
        };
      }
      const [n, d] = simplify(v, t3 - t2);
      const val = clean(v / (t3 - t2));
      return {
        prompt: `${who} moves for ${t3} seconds. The speed–time graph shows the journey. Work out the deceleration over the last ${t3 - t2} seconds, in m/s². Give your answer as a positive exact value.`,
        diagram,
        answer: d === 1 ? { type: "number", value: val } : { type: "fraction", n, d, allowDecimal: true, display: `${frac(n, d)} m/s²` },
        solution: [
          `The speed falls from ${v} m/s to 0 in ${t3 - t2} s.`,
          `Gradient = {{(0 - ${v})/${t3 - t2}}}, so the deceleration is ${val % 1 === 0 ? num(val) : frac(n, d)} m/s².`,
        ],
        hint: "Deceleration is the size of the (negative) gradient on the last section.",
        traps: [{ spec: { type: "number", value: clean(v / t3) }, feedback: `Use the time for the last section only (${t2} s to ${t3} s), not the whole journey.` }],
      };
    },
  },

  /* 9 ─ Transformations of graphs ------------------------------------------ */
  {
    id: `${TOPIC}.transform-a-point`,
    topicId: TOPIC,
    title: "Find where a point moves under a graph transformation",
    level: 2,
    guideRef: "graph-transformations",
    generate(rng, tier) {
      const p = rng.nonZero(-6, 6);
      const q = rng.nonZero(-6, 6);
      const a = rng.pick([2, 3, 4, 5]);
      const s = rng.nonZero(-5, 5);
      const pool = tier === 1 ? ["up", "left", "reflX", "reflY"] : tier === 2 ? ["up", "left", "stretchY", "stretchX", "reflX", "reflY"] : ["combo1", "combo2", "stretchX", "left", "combo3"];
      const t = rng.pick(pool);
      const pointName = rng.pick(["The point", "The turning point", "The point A at"]);
      let f = "", ans: [number, number] = [p, q], why = "", trap: [number, number] | null = null, trapMsg = "";
      let pp = p;
      if (t === "stretchX") pp = p * a; // so p/a is a whole number
      switch (t) {
        case "up":
          f = `f(x) ${s < 0 ? "-" : "+"} ${Math.abs(s)}`; ans = [pp, q + s];
          why = `Adding ${num(s)} outside the function moves the graph ${s > 0 ? "up" : "down"} by ${Math.abs(s)}: only y changes.`;
          trap = [pp + s, q]; trapMsg = "A change OUTSIDE the brackets affects y, not x.";
          break;
        case "left":
          f = `f(x ${s < 0 ? "-" : "+"} ${Math.abs(s)})`; ans = [pp - s, q];
          why = `{{f(x ${s < 0 ? "-" : "+"} ${Math.abs(s)})}} is a translation by the vector ({{${-s}}}, 0): inside the bracket works the opposite way, so x becomes ${num(pp)} − ${br0(s)}.`;
          trap = [pp + s, q]; trapMsg = `Inside the bracket the shift goes the "wrong" way: {{f(x + a)}} moves the graph LEFT by a.`;
          break;
        case "stretchY":
          f = `${a}f(x)`; ans = [pp, a * q];
          why = `{{${a}f(x)}} stretches the graph vertically by scale factor ${a}: every y-value is multiplied by ${a}.`;
          trap = [a * pp, q]; trapMsg = "A number multiplying f(x) on the outside changes y, not x.";
          break;
        case "stretchX":
          f = `f(${a}x)`; ans = [pp / a, q];
          why = `{{f(${a}x)}} is a horizontal stretch with scale factor {{1/${a}}}: every x-value is divided by ${a}.`;
          trap = [pp * a, q]; trapMsg = `Inside the bracket it works the opposite way: {{f(${a}x)}} squashes towards the y-axis, so divide x by ${a}.`;
          break;
        case "reflX":
          f = `-f(x)`; ans = [pp, -q];
          why = "{{-f(x)}} reflects the graph in the x-axis: y changes sign.";
          trap = [-pp, q]; trapMsg = "The minus is outside f, so it flips the y-values (reflection in the x-axis).";
          break;
        case "reflY":
          f = `f(-x)`; ans = [-pp, q];
          why = "{{f(-x)}} reflects the graph in the y-axis: x changes sign.";
          trap = [pp, -q]; trapMsg = "The minus is inside the bracket, so it flips the x-values (reflection in the y-axis).";
          break;
        case "combo1": {
          const r = rng.nonZero(-4, 4);
          f = `f(x ${r < 0 ? "+" : "-"} ${Math.abs(r)}) ${s < 0 ? "-" : "+"} ${Math.abs(s)}`; ans = [pp + r, q + s];
          why = `Translation by the vector (${num(r)}, ${num(s)}): x moves ${r > 0 ? "right" : "left"} ${Math.abs(r)} and y moves ${s > 0 ? "up" : "down"} ${Math.abs(s)}.`;
          trap = [pp - r, q + s]; trapMsg = "Inside the bracket, {{x - a}} moves the graph RIGHT by a.";
          break;
        }
        case "combo2":
          f = `${a}f(x) ${s < 0 ? "-" : "+"} ${Math.abs(s)}`; ans = [pp, a * q + s];
          why = `Multiply y by ${a}, then add ${num(s)}: {{${a} * ${ib(q)} ${s < 0 ? "-" : "+"} ${Math.abs(s)} = ${a * q + s}}}.`;
          trap = [pp, a * (q + s)]; trapMsg = `Order matters: {{${a}f(x) ${s < 0 ? "-" : "+"} ${Math.abs(s)}}} multiplies first, then adds.`;
          break;
        default:
          f = `-f(x) ${s < 0 ? "-" : "+"} ${Math.abs(s)}`; ans = [pp, -q + s];
          why = `Reflect in the x-axis (y → ${num(-q)}), then move ${s > 0 ? "up" : "down"} ${Math.abs(s)}.`;
          trap = [pp, -(q + s)]; trapMsg = "Reflect first, then translate: {{-f(x) + a}} is not the same as {{-(f(x) + a)}}.";
      }
      const traps: Trap[] = trap && (trap[0] !== ans[0] || trap[1] !== ans[1]) ? [{ spec: ptSpec(trap[0], trap[1]), feedback: trapMsg }] : [];
      return {
        prompt: `${pointName} ${pt(pp, q)} lies on the curve {{y = f(x)}}. Write down the coordinates of the image of this point on the curve {{y = ${f}}}.`,
        answer: ptSpec(ans[0], ans[1]),
        solution: [why, `The image is ${pt(ans[0], ans[1])}.`],
        hint: "Outside f(x) → changes y, the way you'd expect. Inside the bracket → changes x, the opposite way.",
        traps,
      };
    },
  },

  /* 10 ─ Exponential functions (H+) --------------------------------------- */
  {
    id: `${TOPIC}.exponential-functions`,
    topicId: TOPIC,
    title: "Find k and a in y = ka^x, and use exponential growth or decay",
    level: 3,
    guideRef: "exponential-functions",
    generate(rng, tier) {
      const useContext = rng.bool(tier === 1 ? 0.3 : 0.4);
      if (useContext) {
        const decay = rng.bool();
        if (decay) {
          const V0 = rng.pick([18000, 24000, 32000, 45000, 60000, 85000, 120000]);
          const r = rng.pick(tier === 1 ? [10, 20] : [8, 12, 15, 18, 22, 25]);
          const n = rng.int(2, tier === 3 ? 8 : 5);
          const item = rng.pick(["car", "electric scooter fleet", "delivery van", "laptop stock"]);
          const value = roundTo(V0 * Math.pow((100 - r) / 100, n), 0);
          return {
            prompt: `A ${item} is worth $${V0.toLocaleString("en-GB")}. Its value falls by ${r}% each year. The value after t years is {{V = ${V0} * ${clean((100 - r) / 100)}^t}}. Work out its value after ${n} years. Give your answer to the nearest dollar.`,
            answer: { type: "number", value, tolerance: 1, display: `$${value.toLocaleString("en-GB")}` },
            solution: [
              `Losing ${r}% leaves ${100 - r}%, so the multiplier is ${clean((100 - r) / 100)}.`,
              `{{V = ${V0} * ${clean((100 - r) / 100)}^${n} = ${roundTo(V0 * Math.pow((100 - r) / 100, n), 2)}}}…`,
              `≈ $${value.toLocaleString("en-GB")} to the nearest dollar.`,
            ],
            hint: "Use the multiplier to the power n — don't take away the same amount every year.",
            traps: [{ spec: { type: "number", value: clean(V0 * (1 - (r * n) / 100)) }, feedback: `That's linear decrease (${r}% of the ORIGINAL value each year). Exponential decay takes ${r}% of the current value — use the multiplier to the power ${n}.` }],
          };
        }
        const N0 = rng.pick([50, 80, 120, 150, 200, 250, 400]);
        const dt = rng.pick([2, 3, 4, 5, 6]);
        const steps = rng.int(3, tier === 1 ? 4 : 6);
        const T = dt * steps;
        const thing = rng.pick(["bacteria in a dish", "yeast cells in a bread dough sample", "algae cells in a pond sample"]);
        const N = N0 * Math.pow(2, steps);
        return {
          prompt: `There are ${N0} ${thing}. The number doubles every ${dt} hours, so after t hours there are {{N = ${N0} * 2^(t/${dt})}}. How many are there after ${T} hours?`,
          answer: { type: "number", value: N },
          solution: [`${T} hours is {{${T}/${dt} = ${steps}}} doubling periods.`, `{{N = ${N0} * 2^${steps} = ${N0} * ${Math.pow(2, steps)} = ${N}}}.`],
          hint: "Count how many doubling periods fit into the time first.",
          traps: [{ spec: { type: "number", value: N0 * 2 * steps }, feedback: "Doubling repeatedly multiplies by 2 each time — it's {{2^n}}, not 2 × n." }],
        };
      }
      // Find k and a from two points on y = k a^x
      const bases: Array<[number, number]> = tier === 1 ? [[2, 1], [3, 1], [4, 1], [5, 1]] : [[2, 1], [3, 1], [4, 1], [5, 1], [3, 2], [1, 2], [5, 2], [1, 4]];
      const [an, ad] = rng.pick(bases);
      const x1 = tier === 1 ? 0 : rng.pick([1, 2]);
      const gap = tier === 3 ? rng.pick([2, 3]) : tier === 2 ? 2 : rng.pick([1, 2]);
      const x2 = x1 + gap;
      let k = 3;
      for (let i = 0; i < 100; i++) {
        k = rng.pick([1, 2, 3, 4, 5, 6, 8, 10, 12, 20]) * Math.pow(ad, x2);
        if (k <= 2000 && !(an === 1 && ad === 1)) break;
      }
      const aVal = clean(an / ad);
      const y1 = clean(k * Math.pow(aVal, x1));
      const y2 = clean(k * Math.pow(aVal, x2));
      const aTxt = ad === 1 ? num(an) : frac(an, ad);
      const ratio = clean(y2 / y1);
      const ratioTxt = Number.isInteger(ratio) ? num(ratio) : frac(Math.pow(an, gap), Math.pow(ad, gap));
      const root = gap === 1 ? "" : gap === 2 ? "square root" : "cube root";
      return {
        prompt: `The curve {{y = k a^x}}, where k and a are positive constants, passes through the points ${pt(x1, y1)} and ${pt(x2, y2)}. Find the value of k and the value of a. Give k first.`,
        answer: { type: "list", values: [k, aVal], ordered: true, display: `k = ${num(k)}, a = ${aTxt}` },
        solution: [
          `Substitute both points: {{${y1} = k a^${x1}}} and {{${y2} = k a^${x2}}}.`,
          `Divide the second by the first: {{a^${gap} = ${y2}/${y1}}} = ${ratioTxt}${gap > 1 ? `, so a = ${aTxt} (the positive ${root})` : `, so a = ${aTxt}`}.`,
          x1 === 0 ? `At x = 0, {{a^0 = 1}} so k = ${num(k)}.` : `Then {{k = ${y1} / ${ib(aVal)}^${x1} = ${k}}}.`,
        ],
        hint: "Divide one equation by the other — k cancels and you're left with a power of a.",
        traps: aVal === k ? [] : [{ spec: { type: "list", values: [aVal, k], ordered: true }, feedback: "Right numbers, wrong order: give k first, then a." }],
      };
    },
  },
];

/** Bracket a negative for running text: (−3). */
function br0(n: number): string {
  return n < 0 ? `(${num(n)})` : num(n);
}
