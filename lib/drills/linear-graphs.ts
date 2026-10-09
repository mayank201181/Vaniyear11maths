// Procedural skill drills — Straight-Line Graphs & Coordinate Geometry (topic "linear-graphs").
// Every generator picks the answer first from integers (a gradient as a simplified
// fraction, an integer intersection point, an integer midpoint …) and builds the
// question around it, so the marked answer is exact. Bounded rejection loops rule
// out degenerate cases (vertical/horizontal lines, parallel lines, zero intercepts).
import type { Drill } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { frac, gcd, num, poly, simplify } from "./helpers.ts";

const TOPIC = "linear-graphs";

/* ------------------------------------------------------------------------ */
/* Rationals and formatting                                                  */
/* ------------------------------------------------------------------------ */

/** A simplified rational [n, d] with d > 0. */
type Q = [number, number];
const q = (n: number, d = 1): Q => simplify(n, d);
const qEq = (a: Q, b: Q): boolean => a[0] === b[0] && a[1] === b[1];
const qVal = (a: Q): number => a[0] / a[1];

/** Plain ASCII for use inside {{ }}: "3", "-3/2". */
const qAsc = (a: Q): string => (a[1] === 1 ? `${a[0]}` : `${a[0]}/${a[1]}`);
/** For running text: 3, −2 or {{-3/2}}. */
const qText = (a: Q): string => (a[1] === 1 ? num(a[0]) : frac(a[0], a[1]));
/** Inside {{ }}, bracket negatives: (−3), (−3/2). */
const qBr = (a: Q): string => (a[0] < 0 || a[1] !== 1 ? `(${qAsc(a)})` : qAsc(a));
/** Integer inside {{ }} with brackets for negatives. */
const ib = (n: number): string => (n < 0 ? `(${n})` : `${n}`);

/** Coordinates in plain text: (3, −2). */
/** "y + 6" / "x - 2" inside {{ }}. */
const shift = (v: string, k: number): string => poly([[1, v], [-k, ""]]);

const pt = (x: number, y: number): string => `(${num(x)}, ${num(y)})`;

/** The x-term inside {{ }}: "3x", "-x", "2/3 x", "-2/3 x". */
function xTerm(m: Q): string {
  const [n, d] = m;
  if (n === 0) return "";
  const s = n < 0 ? "-" : "";
  const a = Math.abs(n);
  if (d === 1) return s + (a === 1 ? "x" : `${a}x`);
  return `${s}${a}/${d} x`;
}

/** Right-hand side of y = mx + c inside {{ }}. */
function rhs(m: Q, c: Q): string {
  const t = xTerm(m);
  if (!t) return qAsc(c);
  if (c[0] === 0) return t;
  const ac: Q = [Math.abs(c[0]), c[1]];
  return `${t} ${c[0] < 0 ? "-" : "+"} ${qAsc(ac)}`;
}

/** "{{y = 3x - 2}}" */
const lineMk = (m: Q, c: Q): string => `{{y = ${rhs(m, c)}}}`;

/** ASCII answer expression "y=(2/3)x-5/3". */
function lineExpr(m: Q, c: Q): string {
  const [n, d] = m;
  let t = "";
  if (n !== 0) t = d === 1 ? (n === 1 ? "x" : n === -1 ? "-x" : `${n}x`) : `(${n}/${d})x`;
  const cs = c[0] === 0 ? "" : `${c[0] < 0 ? "-" : "+"}${Math.abs(c[0])}${c[1] === 1 ? "" : `/${c[1]}`}`;
  if (!t) return `y=${qAsc(c)}`;
  return `y=${t}${cs}`;
}

const lineSpec = (m: Q, c: Q): AnswerSpec => ({ type: "expression", expr: lineExpr(m, c), display: lineMk(m, c) });

/** Answer spec for a single rational value (gradient, intercept …). */
function qSpec(a: Q): AnswerSpec {
  if (a[1] === 1) return { type: "number", value: a[0] };
  return { type: "fraction", n: a[0], d: a[1], simplest: true, allowDecimal: true, display: frac(a[0], a[1]) };
}

/** c in y = mx + c for the line with gradient m through (x1, y1). */
const interceptThrough = (m: Q, x1: number, y1: number): Q => q(y1 * m[1] - m[0] * x1, m[1]);

/** "ax + by = c" inside {{ }}. */
const impl = (a: number, b: number, c: number): string => `{{${poly([[a, "x"], [b, "y"]])} = ${c}}}`;
/** "ax + by + c = 0" inside {{ }}. */
const impl0 = (a: number, b: number, c: number): string => `{{${poly([[a, "x"], [b, "y"], [c, ""]])} = 0}}`;

/** Normalise integer coefficients: no common factor, first non-zero positive. */
function normCoeffs(cs: number[]): number[] {
  const g = cs.reduce((acc, v) => gcd(acc, v), 0) || 1;
  const lead = cs.find((v) => v !== 0) ?? 1;
  const s = lead < 0 ? -1 : 1;
  return cs.map((v) => (v * s) / g + 0);
}

const ptSpec = (x: number, y: number): AnswerSpec => ({ type: "list", values: [x, y], ordered: true, display: pt(x, y) });

const LETTERS: Array<[string, string]> = [["A", "B"], ["P", "Q"], ["C", "D"], ["R", "S"]];

/** Simplify √n → [k, m] with n = k²m, m square-free. */
function surd(n: number): [number, number] {
  let k = 1, m = n;
  for (let f = 2; f * f <= m; f++) while (m % (f * f) === 0) { m /= f * f; k *= f; }
  return [k, m];
}
const surdExpr = (k: number, m: number): string => (m === 1 ? `${k}` : k === 1 ? `sqrt(${m})` : `${k}sqrt(${m})`);

const sig3 = (v: number): number => Number(v.toPrecision(3));

/* ------------------------------------------------------------------------ */
/* Diagram for the triangle-area drill                                        */
/* ------------------------------------------------------------------------ */

/** Clip the infinite line through (x0, y0) with direction (dx, dy) to a box. */
function clip(x0: number, y0: number, dx: number, dy: number, b: { x0: number; x1: number; y0: number; y1: number }): [number, number, number, number] | null {
  let t0 = -1e9, t1 = 1e9;
  const edges: Array<[number, number]> = [[-dx, x0 - b.x0], [dx, b.x1 - x0], [-dy, y0 - b.y0], [dy, b.y1 - y0]];
  for (const [p, qq] of edges) {
    if (p === 0) { if (qq < 0) return null; continue; }
    const t = qq / p;
    if (p < 0) t0 = Math.max(t0, t); else t1 = Math.min(t1, t);
  }
  if (t0 > t1) return null;
  return [x0 + t0 * dx, y0 + t0 * dy, x0 + t1 * dx, y0 + t1 * dy];
}

const r2 = (v: number): number => Math.round(v * 100) / 100;

/** Sketch of two lines and the triangle they make with an axis (not to be read off — the numbers come from the equations). */
function triangleSvg(v: Array<[number, number]>, l1: [number, number, number, number], l2: [number, number, number, number], axis: "x" | "y"): string {
  const xs = [...v.map((p) => p[0]), 0], ys = [...v.map((p) => p[1]), 0];
  const spanX = Math.max(...xs) - Math.min(...xs) || 1, spanY = Math.max(...ys) - Math.min(...ys) || 1;
  const box = { x0: Math.min(...xs) - 0.25 * spanX, x1: Math.max(...xs) + 0.25 * spanX, y0: Math.min(...ys) - 0.25 * spanY, y1: Math.max(...ys) + 0.25 * spanY };
  const W = 320, H = 240, pad = 16;
  const X = (x: number) => r2(pad + ((x - box.x0) / (box.x1 - box.x0)) * (W - 2 * pad));
  const Y = (y: number) => r2(H - pad - ((y - box.y0) / (box.y1 - box.y0)) * (H - 2 * pad));
  const out: string[] = [`<rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff"/>`];
  out.push(`<polygon points="${v.map(([x, y]) => `${X(x)},${Y(y)}`).join(" ")}" fill="#fde68a" stroke="none"/>`);
  out.push(`<line x1="${X(box.x0)}" y1="${Y(0)}" x2="${X(box.x1)}" y2="${Y(0)}" stroke="#334155" stroke-width="1.5"/>`);
  out.push(`<line x1="${X(0)}" y1="${Y(box.y0)}" x2="${X(0)}" y2="${Y(box.y1)}" stroke="#334155" stroke-width="1.5"/>`);
  out.push(`<text x="${X(box.x1) - 4}" y="${Y(0) - 6}" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="end">x</text>`);
  out.push(`<text x="${X(0) + 6}" y="${Y(box.y1) + 12}" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937">y</text>`);
  out.push(`<text x="${X(0) - 4}" y="${Y(0) + 14}" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">O</text>`);
  const lines: Array<[string, [number, number, number, number]]> = [["L₁", l1], ["L₂", l2]];
  for (const [name, [x0, y0, dx, dy]] of lines) {
    const c = clip(x0, y0, dx, dy, box);
    if (!c) continue;
    out.push(`<line x1="${X(c[0])}" y1="${Y(c[1])}" x2="${X(c[2])}" y2="${Y(c[3])}" stroke="#2563eb" stroke-width="2"/>`);
    // Label near the end that is higher on the page.
    const [lx, ly] = Y(c[1]) < Y(c[3]) ? [X(c[0]), Y(c[1])] : [X(c[2]), Y(c[3])];
    const ax = Math.min(W - 24, Math.max(6, lx + (lx > W / 2 ? -26 : 6)));
    const ay = Math.min(H - 6, Math.max(14, ly + 14));
    out.push(`<text x="${r2(ax)}" y="${r2(ay)}" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1d4ed8">${name}</text>`);
  }
  const label = `Sketch, not to scale: lines L1 and L2 cross each other and both cross the ${axis}-axis, enclosing a shaded triangle.`;
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${label}">${out.join("")}</svg>`;
}

/* ------------------------------------------------------------------------ */
/* Drills                                                                     */
/* ------------------------------------------------------------------------ */

export const drills: Drill[] = [
  // 1 --------------------------------------------------------- gradient from two points
  {
    id: "linear-graphs.gradient-two-points",
    topicId: TOPIC,
    title: "Find the gradient from two points",
    level: 1,
    guideRef: "y-mx-c",
    generate(rng, tier) {
      const [P, R] = rng.pick(LETTERS);
      if (tier === 3 && rng.bool(0.45)) {
        // Work backwards: the gradient is known, one coordinate is not.
        let m: Q = [-2, 1], x2 = 5, y1 = 7, y2 = 1, k = 8;
        for (let i = 0; i < 200; i++) {
          m = q(rng.pick([-4, -3, -2, 2, 3, 4, 1, -1, 3, -3, 2, -2]), rng.pick([1, 2, 3]));
          if (m[1] === 1 && Math.abs(m[0]) === 1) continue;
          x2 = rng.int(-8, 9);
          y1 = rng.int(-9, 9);
          y2 = rng.int(-9, 9);
          const dy = y2 - y1;
          if (dy === 0 || (dy * m[1]) % m[0] !== 0) continue;
          k = x2 - (dy * m[1]) / m[0];
          if (k !== x2 && Math.abs(k) <= 20 && k !== 0) break;
        }
        const dy = y2 - y1;
        const wrongK = x2 + (dy * m[1]) / m[0];
        const traps: Trap[] = wrongK !== k ? [{ spec: { type: "number", value: wrongK }, feedback: "Check the sign: the run is x₂ − k, so k = x₂ − (rise ÷ gradient)." }] : [];
        return {
          prompt: `The line through ${P}(k, ${num(y1)}) and ${R}${pt(x2, y2)} has gradient ${qText(m)}. Find the value of k.`,
          answer: { type: "number", value: k },
          solution: [
            `Gradient = {{(y_2 - y_1)/(x_2 - x_1)}}, so {{(${y2} - ${ib(y1)})/(${x2} - k) = ${qAsc(m)}}}.`,
            `The rise is ${num(dy)}, so ${num(x2)} − k = ${num(dy)} ÷ {{${qBr(m)}}} = ${num((dy * m[1]) / m[0])}.`,
            `So k = ${num(x2)} − ${(dy * m[1]) / m[0] < 0 ? `(${num((dy * m[1]) / m[0])})` : num((dy * m[1]) / m[0])} = ${num(k)}.`,
          ],
          hint: "Write the gradient formula with k in it, then set it equal to the given gradient.",
          traps,
        };
      }
      let x1 = 1, y1 = 2, x2 = 3, y2 = 8;
      for (let i = 0; i < 200; i++) {
        const lo = tier === 1 ? 0 : tier === 2 ? -9 : -12;
        const hi = tier === 1 ? 10 : tier === 2 ? 9 : 12;
        x1 = rng.int(lo, hi); y1 = rng.int(lo, hi); x2 = rng.int(lo, hi); y2 = rng.int(lo, hi);
        const dx = x2 - x1, dy = y2 - y1;
        if (dx === 0 || dy === 0) continue;
        if (tier === 1 && (dy % dx !== 0 || Math.abs(dy / dx) === 1)) continue;
        if (tier >= 2 && Math.abs(q(dy, dx)[1]) === 1) continue;
        if (tier >= 2 && x1 >= 0 && y1 >= 0 && x2 >= 0 && y2 >= 0) continue;
        break;
      }
      const dx = x2 - x1, dy = y2 - y1;
      const m = q(dy, dx);
      const prompt = rng.pick([
        `Find the gradient of the line joining ${P}${pt(x1, y1)} and ${R}${pt(x2, y2)}.`,
        `A straight line passes through the points ${pt(x1, y1)} and ${pt(x2, y2)}. Work out the gradient of the line.`,
        `${P}${pt(x1, y1)} and ${R}${pt(x2, y2)} are two points on the line L. Find the gradient of L.`,
      ]) + (m[1] === 1 ? "" : " Give your answer in its simplest form.");
      const traps: Trap[] = [];
      const recip = q(dx, dy);
      if (!qEq(recip, m)) traps.push({ spec: qSpec(recip), feedback: "That's run ÷ rise — upside down. Gradient = change in y ÷ change in x." });
      traps.push({ spec: qSpec(q(-dy, dx)), feedback: "Sign slip. Subtract the coordinates in the same order on the top and the bottom." });
      return {
        prompt,
        answer: qSpec(m),
        solution: [
          `Gradient = {{(y_2 - y_1)/(x_2 - x_1)}} = {{(${y2} - ${ib(y1)})/(${x2} - ${ib(x1)})}} = {{${dy}/${ib(dx)}}}.`,
          `= ${qText(m)}${qVal(m) > 0 ? " (positive: the line goes up from left to right)." : " (negative: the line goes down from left to right)."}`,
        ],
        hint: "Rise over run: change in y on top, change in x underneath — same order on both.",
        traps,
      };
    },
  },

  // 2 ------------------------------------------------- gradient & intercept from an equation
  {
    id: "linear-graphs.gradient-from-equation",
    topicId: TOPIC,
    title: "Read the gradient or intercept from any form of a line",
    level: 1,
    guideRef: "y-mx-c",
    generate(rng, tier) {
      const name = rng.pick(["L", "the line L", "the straight line L"]);
      if (tier === 1) {
        // y = c + mx  or  ky = ax + b  (k divides both).
        let m = 3, c = 5, k = 2;
        for (let i = 0; i < 100; i++) {
          m = rng.nonZero(-6, 6); c = rng.nonZero(-9, 9); k = rng.pick([2, 3, 4, 5]);
          if (Math.abs(m) !== 1) break;
        }
        const form = rng.pick(["swap", "multiple"] as const);
        const eq = form === "swap" ? `{{y = ${poly([[c, ""], [m, "x"]])}}}` : `{{${k}y = ${poly([[k * m, "x"], [k * c, ""]])}}}`;
        const askM = rng.bool();
        const ans = askM ? m : c;
        const traps: Trap[] = [];
        if (form === "swap" && askM && c !== m) traps.push({ spec: { type: "number", value: c }, feedback: "The gradient is the number multiplying x, wherever it is written — not the first number you see." });
        if (form === "multiple") traps.push({ spec: { type: "number", value: k * ans }, feedback: `Divide every term by ${k} first, so the equation starts "y = …".` });
        return {
          prompt: `${name[0].toUpperCase() + name.slice(1)} has equation ${eq}. Write down the ${askM ? "gradient" : "y-intercept (the value of c)"} of L.`,
          answer: { type: "number", value: ans },
          solution: [
            form === "swap" ? `Reorder: ${lineMk(q(m), q(c))}.` : `Divide every term by ${k}: ${lineMk(q(m), q(c))}.`,
            askM ? `The gradient is the coefficient of x: m = ${num(m)}.` : `The y-intercept is the constant term: c = ${num(c)}.`,
          ],
          hint: "Get the equation into the form y = mx + c first.",
          traps,
        };
      }
      // ax + by = c  (tier 2)  or  ax + by + c = 0 (tier 3)
      let a = 3, b = 2, c = 12;
      for (let i = 0; i < 200; i++) {
        a = rng.nonZero(-7, 7); b = rng.nonZero(-7, 7); c = rng.nonZero(-15, 15);
        if (Math.abs(b) === 1 || gcd(gcd(a, b), c) !== 1) continue;
        if (tier === 2 && (a < 0 && b < 0)) continue;
        if (gcd(a, b) === Math.abs(b)) continue; // gradient would be whole and too easy at this tier
        break;
      }
      const zeroForm = tier === 3;
      const eq = zeroForm ? impl0(a, b, -c) : impl(a, b, c);
      const asks: Array<"m" | "c" | "xint"> = tier === 3 ? ["m", "c", "xint"] : ["m", "c"];
      const ask = rng.pick(asks);
      const m = q(-a, b);
      const yInt = q(c, b);
      const xInt = q(c, a);
      const ans = ask === "m" ? m : ask === "c" ? yInt : xInt;
      const traps: Trap[] = [];
      if (ask === "m") {
        traps.push({ spec: qSpec(q(a, b)), feedback: `When you move the x-term to the other side its sign changes: ${frac(-a, b)}, not ${frac(a, b)}.` });
        const bad = q(-b, a);
        if (!qEq(bad, m)) traps.push({ spec: qSpec(bad), feedback: "Make y the subject — divide by the coefficient of y, not x." });
      } else if (ask === "c") {
        traps.push({ spec: { type: "number", value: c }, feedback: `Divide the constant by ${num(b)} too — every term gets divided when you make y the subject.` });
      } else {
        const bad = q(c, b);
        if (!qEq(bad, xInt)) traps.push({ spec: qSpec(bad), feedback: "That's where it crosses the y-axis. On the x-axis, y = 0." });
      }
      const what = ask === "m" ? "the gradient of L" : ask === "c" ? "the y-coordinate of the point where L crosses the y-axis" : "the x-coordinate of the point where L crosses the x-axis";
      const rearr = `${b}y = ${poly([[-a, "x"], [c, ""]])}`;
      return {
        prompt: `${name[0].toUpperCase() + name.slice(1)} has equation ${eq}. Find ${what}.${ans[1] === 1 ? "" : " Give your answer as a fraction in its simplest form."}`,
        answer: qSpec(ans),
        solution: ask === "xint"
          ? [`On the x-axis y = 0, so {{${poly([[a, "x"], [-c, ""]])} = 0}}.`, `{{${a}x = ${c}}}, so x = ${qText(xInt)}.`]
          : [
              zeroForm ? `Rearrange to make y the subject: {{${rearr}}}.` : `${a > 0 ? "Subtract" : "Add"} {{${poly([[Math.abs(a), "x"]])}}} ${a > 0 ? "from" : "to"} both sides: {{${rearr}}}.`,
              `Divide by ${num(b)}: ${lineMk(m, yInt)}.`,
              ask === "m" ? `So the gradient is ${qText(m)}.` : `So L crosses the y-axis at y = ${qText(yInt)}.`,
            ],
        hint: ask === "xint" ? "Every point on the x-axis has y = 0." : "Rearrange to y = mx + c — the x-term changes sign when it crosses over.",
        traps,
      };
    },
  },

  // 3 --------------------------------------------------- equation through two points
  {
    id: "linear-graphs.line-through-two-points",
    topicId: TOPIC,
    title: "Find the equation of the line through two points",
    level: 2,
    guideRef: "y-mx-c",
    generate(rng, tier) {
      let x1 = 1, y1 = 5, x2 = 3, y2 = 9;
      let m: Q = [2, 1], c: Q = [3, 1];
      for (let i = 0; i < 300; i++) {
        if (tier <= 2) {
          const md = tier === 1 ? 1 : rng.pick([2, 3, 4, 2, 3]);
          const mn = rng.nonZero(tier === 1 ? -5 : -7, tier === 1 ? 5 : 7);
          if (gcd(mn, md) !== 1 || (md === 1 && Math.abs(mn) === 1)) continue;
          const cc = rng.nonZero(-9, 9);
          const k1 = rng.int(-4, 4), k2 = rng.int(-4, 4);
          if (k1 === k2) continue;
          x1 = md * k1; x2 = md * k2;
          y1 = (mn * x1) / md + cc; y2 = (mn * x2) / md + cc;
          if (x1 === 0 || x2 === 0) continue; // don't hand over the intercept
          m = [mn, md]; c = [cc, 1];
        } else {
          x1 = rng.int(-9, 9); y1 = rng.int(-9, 9); x2 = rng.int(-9, 9); y2 = rng.int(-9, 9);
          if (x1 === x2 || y1 === y2 || x1 === 0 || x2 === 0) continue;
          m = q(y2 - y1, x2 - x1);
          c = interceptThrough(m, x1, y1);
          if (m[1] === 1 || c[1] === 1 || c[0] === 0) continue;
        }
        break;
      }
      const [P, R] = rng.pick(LETTERS);
      const prompt = rng.pick([
        `Find the equation of the straight line through ${P}${pt(x1, y1)} and ${R}${pt(x2, y2)}.`,
        `The line L passes through the points ${pt(x1, y1)} and ${pt(x2, y2)}. Find an equation for L.`,
        `${P}${pt(x1, y1)} and ${R}${pt(x2, y2)} lie on a straight line. Work out the equation of the line.`,
      ]) + " Give your answer in the form y = mx + c.";
      const traps: Trap[] = [];
      const recip = q(x2 - x1, y2 - y1);
      const cr = interceptThrough(recip, x1, y1);
      if (!(qEq(recip, m) && qEq(cr, c))) traps.push({ spec: lineSpec(recip, cr), feedback: "Your gradient is upside down — it's change in y ÷ change in x." });
      const cBad = q(y1);
      if (!qEq(cBad, c)) traps.push({ spec: lineSpec(m, cBad), feedback: "The gradient is right, but c isn't the y-coordinate of a point. Substitute the point into y = mx + c and solve for c." });
      return {
        prompt,
        answer: lineSpec(m, c),
        solution: [
          `Gradient m = {{(${y2} - ${ib(y1)})/(${x2} - ${ib(x1)})}} = {{${y2 - y1}/${ib(x2 - x1)}}} = ${qText(m)}.`,
          `Substitute ${pt(x1, y1)} into y = mx + c: {{${y1} = ${qBr(m)} * ${ib(x1)} + c}}, so c = ${qText(c)}.`,
          `Equation: ${lineMk(m, c)}. (Check with ${pt(x2, y2)}: it fits.)`,
        ],
        hint: "First the gradient, then substitute one point into y = mx + c to find c.",
        traps,
      };
    },
  },

  // 4 ------------------------------------------- y − y₁ = m(x − x₁) and integer form
  {
    id: "linear-graphs.point-gradient-form",
    topicId: TOPIC,
    title: "Use y − y₁ = m(x − x₁) and write ax + by + c = 0",
    level: 2,
    guideRef: "point-gradient-form",
    generate(rng, tier) {
      if (tier === 1) {
        let m = 3, x1 = 2, y1 = 5;
        for (let i = 0; i < 100; i++) {
          m = rng.nonZero(-6, 6); x1 = rng.nonZero(-6, 8); y1 = rng.int(-9, 9);
          if (Math.abs(m) !== 1 && y1 - m * x1 !== 0) break;
        }
        const c = y1 - m * x1;
        const traps: Trap[] = [];
        const bad = y1 + m * x1;
        if (bad !== c) traps.push({ spec: lineSpec(q(m), q(bad)), feedback: "Sign slip expanding −m(x − x₁): the constant is −m × x₁." });
        return {
          prompt: rng.pick([
            `A line has gradient ${num(m)} and passes through the point ${pt(x1, y1)}. Find its equation in the form y = mx + c.`,
            `Line L goes through ${pt(x1, y1)} with gradient ${num(m)}. Use {{y - y_1 = m(x - x_1)}} to find the equation of L in the form y = mx + c.`,
          ]),
          answer: lineSpec(q(m), q(c)),
          solution: [
            `{{${shift("y", y1)} = ${m}(${shift("x", x1)})}}`,
            `Expand: {{${shift("y", y1)} = ${poly([[m, "x"], [-m * x1, ""]])}}}.`,
            `${y1 >= 0 ? "Add" : "Subtract"} ${num(Math.abs(y1))}: ${lineMk(q(m), q(c))}.`,
          ],
          hint: "Put the point and gradient into y − y₁ = m(x − x₁), expand, then make y the subject.",
          traps,
        };
      }
      // Fractional gradient (tier 2) or a gradient taken from a parallel line (tier 3).
      let m: Q = [2, 3], x1 = 1, y1 = 4, pa = 2, pb = 3, pc = 6;
      for (let i = 0; i < 200; i++) {
        if (tier === 2) {
          m = q(rng.nonZero(-5, 5), rng.pick([2, 3, 4, 5]));
          if (m[1] === 1) continue;
        } else {
          pa = rng.nonZero(-6, 6); pb = rng.pick([2, 3, 4, 5, -2, -3]); pc = rng.nonZero(-12, 12);
          if (gcd(gcd(pa, pb), pc) !== 1) continue;
          m = q(-pa, pb);
          if (m[1] === 1) continue;
        }
        x1 = rng.int(-7, 7); y1 = rng.int(-7, 7);
        const [, , cc] = normCoeffs([m[0], -m[1], m[1] * y1 - m[0] * x1]);
        if (cc === 0 || (x1 === 0 && y1 === 0)) continue;
        if (tier === 3 && pa * x1 + pb * y1 === pc) continue; // point must not lie on the given line
        break;
      }
      const raw = [m[0], -m[1], m[1] * y1 - m[0] * x1];
      const [A, B, C] = normCoeffs(raw);
      const gradText = tier === 2 ? `has gradient ${qText(m)}` : `is parallel to the line with equation ${impl(pa, pb, pc)}`;
      const prompt = `The line L ${gradText} and passes through the point ${pt(x1, y1)}. Find an equation of L in the form ax + by + c = 0, where a, b and c are integers with no common factor and a > 0. Give the values of a, b and c, in that order.`;
      const traps: Trap[] = [{ spec: { type: "list", values: [A, B, -C], ordered: true }, feedback: "Check the sign of c — when everything moves to one side, every term changes sign." }];
      if (B !== -A && B !== A) traps.push({ spec: { type: "list", values: normCoeffs([m[1], -m[0], m[0] * y1 - m[1] * x1]), ordered: true }, feedback: "The x and y coefficients have swapped — the gradient is −a ÷ b." });
      const sol: string[] = [];
      if (tier === 3) sol.push(`Parallel lines have equal gradients. ${impl(pa, pb, pc)} gives {{y = ${rhs(m, q(pc, pb))}}}, so m = ${qText(m)}.`);
      sol.push(`{{${shift("y", y1)} = (${qAsc(m)})(${shift("x", x1)})}}`);
      sol.push(`Multiply both sides by ${m[1]}: {{${m[1]}(${shift("y", y1)}) = ${m[0] === 1 ? "" : m[0] === -1 ? "-" : m[0]}(${shift("x", x1)})}}, so {{${poly([[m[1], "y"], [-m[1] * y1, ""]])} = ${poly([[m[0], "x"], [-m[0] * x1, ""]])}}}.`);
      sol.push(`Collect on one side with a positive x-term: ${impl0(A, B, C)}. So a = ${num(A)}, b = ${num(B)}, c = ${num(C)}.`);
      return {
        prompt,
        answer: { type: "list", values: [A, B, C], ordered: true, display: `a = ${num(A)}, b = ${num(B)}, c = ${num(C)} (${impl0(A, B, C)})` },
        solution: sol,
        hint: "Write y − y₁ = m(x − x₁), then multiply by the denominator of m to clear the fraction.",
        traps,
      };
    },
  },

  // 5 ------------------------------------------------------------------- midpoint
  {
    id: "linear-graphs.midpoint",
    topicId: TOPIC,
    title: "Find a midpoint (or a missing endpoint)",
    level: 1,
    guideRef: "midpoint-distance",
    generate(rng, tier) {
      const [P, R] = rng.pick(LETTERS);
      if (tier >= 2 && rng.bool(tier === 3 ? 0.65 : 0.3)) {
        let x1 = 2, y1 = -3, mx = 5, my = 1;
        for (let i = 0; i < 100; i++) {
          x1 = rng.int(-9, 9); y1 = rng.int(-9, 9); mx = rng.int(-8, 8); my = rng.int(-8, 8);
          if (x1 !== mx && y1 !== my && (x1 < 0 || y1 < 0 || mx < 0 || my < 0)) break;
        }
        const bx = 2 * mx - x1, by = 2 * my - y1;
        const tx = (x1 + mx) / 2, ty = (y1 + my) / 2;
        return {
          prompt: rng.pick([
            `M${pt(mx, my)} is the midpoint of the line segment ${P}${R}. ${P} has coordinates ${pt(x1, y1)}. Find the coordinates of ${R}.`,
            `The midpoint of ${P}${R} is ${pt(mx, my)}. Given that ${P} is the point ${pt(x1, y1)}, work out the coordinates of ${R}.`,
          ]),
          answer: ptSpec(bx, by),
          solution: [
            `The step from ${P} to M is (${num(mx - x1)}, ${num(my - y1)}). The same step again takes you from M to ${R}.`,
            `${R} = (${num(mx)} + ${mx - x1 < 0 ? `(${num(mx - x1)})` : num(mx - x1)}, ${num(my)} + ${my - y1 < 0 ? `(${num(my - y1)})` : num(my - y1)}) = ${pt(bx, by)}.`,
            `Check: the midpoint of ${pt(x1, y1)} and ${pt(bx, by)} is ${pt(mx, my)}.`,
          ],
          hint: "M is halfway, so the jump from the first point to M is repeated from M to the other end.",
          traps: [{ spec: { type: "list", values: [tx, ty], ordered: true }, feedback: `That's the midpoint of ${P} and M. M is the middle — ${R} is beyond it.` }],
        };
      }
      let x1 = 2, y1 = 4, x2 = 6, y2 = 10;
      for (let i = 0; i < 100; i++) {
        const lo = tier === 1 ? 0 : -10;
        x1 = rng.int(lo, 12); y1 = rng.int(lo, 12); x2 = rng.int(lo, 12); y2 = rng.int(lo, 12);
        if (x1 === x2 || y1 === y2) continue;
        if (tier === 1 && ((x1 + x2) % 2 !== 0 || (y1 + y2) % 2 !== 0)) continue;
        if (tier >= 2 && x1 >= 0 && y1 >= 0 && x2 >= 0 && y2 >= 0) continue;
        break;
      }
      const mx = (x1 + x2) / 2, my = (y1 + y2) / 2;
      const hx = Math.abs(x2 - x1) / 2, hy = Math.abs(y2 - y1) / 2;
      const traps: Trap[] = [];
      if (hx !== mx || hy !== my) traps.push({ spec: { type: "list", values: [hx, hy], ordered: true }, feedback: "You halved the difference. The midpoint is the average: add the coordinates, then halve." });
      return {
        prompt: rng.pick([
          `${P} is the point ${pt(x1, y1)} and ${R} is the point ${pt(x2, y2)}. Find the coordinates of the midpoint of ${P}${R}.`,
          `Work out the midpoint of the line segment joining ${pt(x1, y1)} and ${pt(x2, y2)}.`,
          `A straight path runs from ${pt(x1, y1)} to ${pt(x2, y2)}. A bench is placed exactly halfway along it. Find the coordinates of the bench.`,
        ]),
        answer: ptSpec(mx, my),
        solution: [
          `Midpoint = {{((x_1 + x_2)/2, (y_1 + y_2)/2)}}.`,
          `= {{((${x1} + ${ib(x2)})/2, (${y1} + ${ib(y2)})/2)}} = ${pt(mx, my)}.`,
        ],
        hint: "Average the x-coordinates, then average the y-coordinates.",
        traps,
      };
    },
  },

  // 6 ------------------------------------------------------------------ distance
  {
    id: "linear-graphs.distance",
    topicId: TOPIC,
    title: "Find the length of a line segment",
    level: 2,
    guideRef: "midpoint-distance",
    generate(rng, tier) {
      const [P, R] = rng.pick(LETTERS);
      const triples: Array<[number, number]> = [[3, 4], [4, 3], [5, 12], [12, 5], [6, 8], [8, 6], [8, 15], [15, 8], [9, 12], [12, 9], [7, 24]];
      if (tier === 3 && rng.bool(0.5)) {
        // Unknown coordinate from a given length → two answers.
        const [dx, dy] = rng.pick(triples.filter(([a, b]) => a <= 12 && b <= 12));
        const L = Math.sqrt(dx * dx + dy * dy);
        let x2 = 7, y1 = 2;
        for (let i = 0; i < 50; i++) {
          x2 = rng.int(-6, 9); y1 = rng.int(-8, 8);
          if (x2 - dx !== 0 && x2 + dx !== 0) break;
        }
        const y2 = y1 + (rng.bool() ? dy : -dy);
        const a1 = x2 - dx, a2 = x2 + dx;
        return {
          prompt: `${P} is the point (a, ${num(y1)}) and ${R} is the point ${pt(x2, y2)}. The length of ${P}${R} is ${L} units. Find the two possible values of a.`,
          answer: { type: "list", values: [a1, a2], ordered: false, display: `a = ${num(a1)} or a = ${num(a2)}` },
          solution: [
            `{{(${x2} - a)^2 + (${y2} - ${ib(y1)})^2 = ${L}^2}}, so {{(${x2} - a)^2 + ${dy * dy} = ${L * L}}}.`,
            `{{(${x2} - a)^2 = ${dx * dx}}}, so {{${x2} - a = +- ${dx}}}.`,
            `a = ${num(a1)} or a = ${num(a2)}.`,
          ],
          hint: "Use Pythagoras with the unknown in the horizontal leg — and remember a square root has two signs.",
          traps: [{ spec: { type: "list", values: [a1], ordered: false }, feedback: `There are two answers: ${P} can be on either side of ${R}.` }, { spec: { type: "list", values: [a2], ordered: false }, feedback: `There are two answers: ${P} can be on either side of ${R}.` }],
        };
      }
      let x1 = 1, y1 = 2, dx = 3, dy = 4;
      for (let i = 0; i < 200; i++) {
        if (tier === 1) [dx, dy] = rng.pick(triples);
        else { dx = rng.int(1, 11); dy = rng.int(1, 11); }
        dx *= rng.bool() ? 1 : -1; dy *= rng.bool() ? 1 : -1;
        x1 = rng.int(tier === 1 ? 0 : -8, 8); y1 = rng.int(tier === 1 ? 0 : -8, 8);
        const d2 = dx * dx + dy * dy;
        if (tier === 1 && (x1 + dx < 0 || y1 + dy < 0)) continue;
        if (tier >= 2 && Number.isInteger(Math.sqrt(d2))) continue;
        if (tier === 2 && surd(d2)[0] === 1 && rng.bool(0.6)) continue; // usually needs simplifying
        break;
      }
      const x2 = x1 + dx, y2 = y1 + dy;
      const d2 = dx * dx + dy * dy;
      const [k, s] = surd(d2);
      const base = [
        `Distance = {{sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)}}.`,
        `= {{sqrt((${x2} - ${ib(x1)})^2 + (${y2} - ${ib(y1)})^2)}} = {{sqrt(${ib(dx)}^2 + ${ib(dy)}^2)}} = {{sqrt(${dx * dx} + ${dy * dy})}} = {{sqrt(${d2})}}.`,
      ];
      const sumTrap: Trap = { spec: { type: "number", value: Math.abs(dx) + Math.abs(dy) }, feedback: "That's the distance along the grid lines. The straight line is the hypotenuse: square, add, then square root." };
      if (tier === 1) {
        return {
          prompt: `${P} is the point ${pt(x1, y1)} and ${R} is the point ${pt(x2, y2)}. Work out the length of ${P}${R}.`,
          answer: { type: "number", value: k },
          solution: [...base, `= ${k} units.`],
          hint: "Sketch the right-angled triangle: horizontal leg, vertical leg, then Pythagoras.",
          traps: [sumTrap],
        };
      }
      const exact = tier === 2 || rng.bool(0.3);
      if (exact) {
        const traps: Trap[] = [sumTrap];
        const bad = Math.abs(dx * dx - dy * dy);
        if (bad !== d2 && bad > 0) traps.push({ spec: { type: "expression", expr: `sqrt(${bad})` }, feedback: "Pythagoras adds the squares of both legs — both squares are positive." });
        return {
          prompt: `Find the exact length of the line segment joining ${P}${pt(x1, y1)} and ${R}${pt(x2, y2)}. Give your answer as a surd in its simplest form.`,
          answer: { type: "expression", expr: surdExpr(k, s), form: "surd", display: `{{${surdExpr(k, s)}}}` },
          solution: [...base, k === 1 ? `{{sqrt(${d2})}} can't be simplified, so the length is {{sqrt(${d2})}} units.` : `{{sqrt(${d2}) = sqrt(${k * k} * ${s}) = ${k}sqrt(${s})}} units.`],
          hint: "Pythagoras on the horizontal and vertical steps, then look for a square factor under the root.",
          traps,
        };
      }
      const v = sig3(Math.sqrt(d2));
      return {
        prompt: rng.pick([
          `Calculate the length of ${P}${R}, where ${P} is ${pt(x1, y1)} and ${R} is ${pt(x2, y2)}. Give your answer correct to 3 significant figures.`,
          `A drone flies in a straight line from ${pt(x1, y1)} to ${pt(x2, y2)} on a map grid measured in kilometres. How far does it fly? Give your answer in km, correct to 3 significant figures.`,
        ]),
        answer: { type: "number", value: v },
        solution: [...base, `= ${num(Number(Math.sqrt(d2).toFixed(5)))}… = ${num(v)} (3 s.f.).`],
        hint: "Find the horizontal and vertical steps, then use Pythagoras.",
        traps: [sumTrap],
      };
    },
  },

  // 7 ------------------------------------------- parallel, perpendicular, normal, bisector
  {
    id: "linear-graphs.perpendicular-line",
    topicId: TOPIC,
    title: "Parallel lines, perpendicular lines, normals and perpendicular bisectors",
    level: 2,
    guideRef: "parallel-perpendicular",
    generate(rng, tier) {
      let m: Q = [2, 1], mp: Q = [-1, 2], x1 = 4, y1 = 1, c: Q = [3, 1];
      let prompt = "";
      const sol: string[] = [];
      let kind: "par" | "perp" | "normal" | "bisector" = "perp";
      if (tier === 1) {
        kind = rng.bool(0.3) ? "par" : "perp";
        let c0 = 1;
        for (let i = 0; i < 200; i++) {
          m = q(rng.pick([2, 3, 4, 5, -2, -3, -4, -5, 1, -1, 2, -3]), rng.pick([1, 1, 1, 2, 3]));
          if (m[0] === 0) continue;
          mp = kind === "par" ? m : q(-m[1], m[0]);
          c0 = rng.nonZero(-8, 8);
          x1 = rng.int(-6, 6); y1 = rng.int(-8, 8);
          c = interceptThrough(mp, x1, y1);
          if (c[1] !== 1 || c[0] === c0 * 1 || c[0] === 0) continue;
          if (y1 * m[1] === m[0] * x1 + c0 * m[1]) continue; // point not on the given line
          break;
        }
        prompt = rng.pick([
          `Line L₁ has equation ${lineMk(m, q(c0))}. Line L₂ is ${kind === "par" ? "parallel" : "perpendicular"} to L₁ and passes through ${pt(x1, y1)}. Find an equation of L₂ in the form y = mx + c.`,
          `Find the equation of the line that is ${kind === "par" ? "parallel" : "perpendicular"} to ${lineMk(m, q(c0))} and goes through the point ${pt(x1, y1)}. Give it in the form y = mx + c.`,
        ]);
        sol.push(kind === "par" ? `Parallel lines have the same gradient: m = ${qText(mp)}.` : `L₁ has gradient ${qText(m)}. Perpendicular gradient = negative reciprocal = ${qText(mp)} (check: ${qText(m)} × ${qText(mp)} = −1).`);
      } else if (tier === 2) {
        kind = "normal";
        let a = 2, b = 3;
        for (let i = 0; i < 300; i++) {
          a = rng.nonZero(-5, 5); b = rng.nonZero(-5, 5);
          if (gcd(a, b) !== 1 || Math.abs(a) < 2) continue;
          m = q(-a, b); mp = q(b, a);
          x1 = rng.int(-6, 6); y1 = rng.int(-6, 6);
          c = interceptThrough(mp, x1, y1);
          if (c[1] !== 1 || c[0] === 0 || a * x1 + b * y1 === 0) continue;
          break;
        }
        const cc = a * x1 + b * y1;
        prompt = rng.pick([
          `The point P${pt(x1, y1)} lies on the line L with equation ${impl(a, b, cc)}. Find the equation of the normal to L at P. Give your answer in the form y = mx + c.`,
          `L is the line ${impl(a, b, cc)} and P${pt(x1, y1)} is a point on L. The line N passes through P and is perpendicular to L. Find an equation for N in the form y = mx + c.`,
        ]);
        sol.push(`Rearrange L: {{y = ${rhs(m, q(cc, b))}}}, so the gradient of L is ${qText(m)}.`);
        sol.push(`The normal is perpendicular, so its gradient is ${qText(mp)} (the product of the gradients is −1).`);
      } else {
        kind = "bisector";
        let ax = 1, ay = 2, bx = 5, by = 8;
        for (let i = 0; i < 300; i++) {
          ax = rng.int(-8, 8); ay = rng.int(-8, 8); bx = rng.int(-8, 8); by = rng.int(-8, 8);
          if (ax === bx || ay === by || (ax + bx) % 2 !== 0 || (ay + by) % 2 !== 0) continue;
          m = q(by - ay, bx - ax); mp = q(-(bx - ax), by - ay);
          x1 = (ax + bx) / 2; y1 = (ay + by) / 2;
          c = interceptThrough(mp, x1, y1);
          if (c[1] !== 1 || c[0] === 0 || (mp[1] === 1 && Math.abs(mp[0]) === 1 && rng.bool(0.7))) continue;
          break;
        }
        prompt = `A is the point ${pt(ax, ay)} and B is the point ${pt(bx, by)}. Find the equation of the perpendicular bisector of AB. Give your answer in the form y = mx + c.`;
        sol.push(`Midpoint of AB = {{((${ax} + ${ib(bx)})/2, (${ay} + ${ib(by)})/2)}} = ${pt(x1, y1)}.`);
        sol.push(`Gradient of AB = {{${by - ay}/${ib(bx - ax)}}} = ${qText(m)}, so the perpendicular gradient is ${qText(mp)}.`);
      }
      sol.push(`Substitute ${pt(x1, y1)}: {{${y1} = ${qBr(mp)} * ${ib(x1)} + c}}, so c = ${qText(c)}.`);
      sol.push(`Equation: ${lineMk(mp, c)}.`);
      const traps: Trap[] = [];
      if (kind !== "par") {
        const cm = interceptThrough(m, x1, y1);
        if (!qEq(m, mp)) traps.push({ spec: lineSpec(m, cm), feedback: "That line has the same gradient as the original, so it is parallel, not perpendicular. Use the negative reciprocal of the gradient." });
        const recip = q(m[1], m[0]);
        const cr = interceptThrough(recip, x1, y1);
        if (!qEq(recip, mp) && !qEq(recip, m)) traps.push({ spec: lineSpec(recip, cr), feedback: "Reciprocal is right, but the sign must change too: m₁ × m₂ = −1." });
      }
      return {
        prompt,
        answer: lineSpec(mp, c),
        solution: sol,
        hint: kind === "par" ? "Parallel means the same gradient — only c changes." : "Perpendicular gradient: flip the fraction and change the sign. Then substitute the point to find c.",
        traps,
      };
    },
  },

  // 8 -------------------------------------------------------------- intersections
  {
    id: "linear-graphs.intersection",
    topicId: TOPIC,
    title: "Find where two lines intersect",
    level: 2,
    guideRef: "intersections",
    generate(rng, tier) {
      let p = 2, qq = 3;
      for (let i = 0; i < 50; i++) {
        p = rng.int(-6, 7); qq = rng.int(-7, 8);
        if (p !== qq && (p !== 0 || qq !== 0)) break;
      }
      const sol: string[] = [];
      let l1 = "", l2 = "";
      if (tier === 1) {
        let m1 = 2, m2 = -1;
        for (let i = 0; i < 100; i++) {
          m1 = rng.nonZero(-5, 5); m2 = rng.nonZero(-5, 5);
          if (m1 !== m2 && qq - m1 * p !== qq - m2 * p) break;
        }
        const c1 = qq - m1 * p, c2 = qq - m2 * p;
        l1 = lineMk(q(m1), q(c1)); l2 = lineMk(q(m2), q(c2));
        sol.push(`At the intersection both y-values are equal: {{${poly([[m1, "x"], [c1, ""]])} = ${poly([[m2, "x"], [c2, ""]])}}}.`);
        sol.push(`{{${poly([[m1 - m2, "x"]])} = ${c2 - c1}}}${m1 - m2 === 1 ? "" : `, so x = ${num(p)}`}.`);
        sol.push(`y = ${num(m1)} × ${p < 0 ? `(${num(p)})` : num(p)} ${c1 < 0 ? "−" : "+"} ${num(Math.abs(c1))} = ${num(qq)}.`);
      } else if (tier === 2) {
        let m1 = 2, a = 3, b = 2;
        for (let i = 0; i < 200; i++) {
          m1 = rng.nonZero(-4, 4); a = rng.nonZero(-6, 6); b = rng.nonZero(-6, 6);
          if (gcd(a, b) !== 1 || Math.abs(b) === 1 || a + b * m1 === 0) continue;
          break;
        }
        const c1 = qq - m1 * p, c = a * p + b * qq;
        l1 = lineMk(q(m1), q(c1)); l2 = impl(a, b, c);
        sol.push(`Substitute {{y = ${poly([[m1, "x"], [c1, ""]])}}} into the second equation: {{${poly([[a, "x"]])} ${b < 0 ? "-" : "+"} ${Math.abs(b)}(${poly([[m1, "x"], [c1, ""]])}) = ${c}}}.`);
        sol.push(`{{${poly([[a + b * m1, "x"], [b * c1, ""]])} = ${c}}}, so {{${poly([[a + b * m1, "x"]])} = ${c - b * c1}}}${a + b * m1 === 1 ? "" : ` and x = ${num(p)}`}.`);
        sol.push(`Then y = ${num(qq)} (from the first equation).`);
      } else {
        let a1 = 2, b1 = 3, a2 = 5, b2 = -2;
        for (let i = 0; i < 300; i++) {
          a1 = rng.int(1, 7); b1 = rng.nonZero(-7, 7); a2 = rng.nonZero(-7, 7); b2 = rng.nonZero(-7, 7);
          if (gcd(a1, b1) !== 1 || gcd(a2, b2) !== 1) continue;
          if (a1 * b2 - a2 * b1 === 0 || Math.abs(b1) === 1 || Math.abs(b2) === 1 || Math.abs(b1) === Math.abs(b2)) continue;
          break;
        }
        const c1 = a1 * p + b1 * qq, c2 = a2 * p + b2 * qq;
        l1 = impl(a1, b1, c1); l2 = impl(a2, b2, c2);
        const det = a1 * b2 - a2 * b1;
        sol.push(`Eliminate y: multiply the first equation by ${num(b2)} and the second by ${num(b1)}.`);
        sol.push(`{{${poly([[a1 * b2, "x"], [b1 * b2, "y"]])} = ${c1 * b2}}} and {{${poly([[a2 * b1, "x"], [b1 * b2, "y"]])} = ${c2 * b1}}}.`);
        sol.push(`Subtract: {{${poly([[det, "x"]])} = ${c1 * b2 - c2 * b1}}}, so x = ${num(p)}.`);
        sol.push(`Substitute into the first: {{${b1}y = ${c1} - ${ib(a1 * p)}}} = ${num(b1 * qq)}, so y = ${num(qq)}.`);
      }
      sol.push(`The lines meet at ${pt(p, qq)}.`);
      return {
        prompt: rng.pick([
          `Find the coordinates of the point where the lines ${l1} and ${l2} intersect.`,
          `The lines L₁: ${l1} and L₂: ${l2} cross at the point P. Work out the coordinates of P.`,
          `Solve the simultaneous equations ${l1} and ${l2} to find where the two straight lines meet. Give the coordinates of the point.`,
        ]),
        answer: ptSpec(p, qq),
        solution: sol,
        hint: "The intersection lies on both lines, so solve the two equations simultaneously.",
        traps: [{ spec: { type: "list", values: [qq, p], ordered: true }, feedback: "Right numbers, wrong order — coordinates are (x, y)." }],
      };
    },
  },

  // 9 ------------------------------------------------------------ triangle area
  {
    id: "linear-graphs.triangle-area",
    topicId: TOPIC,
    title: "Area of a triangle formed by two lines and an axis",
    level: 3,
    guideRef: "intersections",
    generate(rng, tier) {
      const useY = tier >= 2 && rng.bool(tier === 3 ? 0.5 : 0.35);
      if (useY) {
        // Two lines and the y-axis: base on the y-axis = |c1 − c2|, height = |x of intersection|.
        let m1 = 2, m2 = -1, p = 3, qq = 4;
        for (let i = 0; i < 200; i++) {
          m1 = rng.nonZero(-4, 4); m2 = rng.nonZero(-4, 4); p = rng.nonZero(-6, 6); qq = rng.int(-6, 8);
          if (m1 !== m2) break;
        }
        const c1 = qq - m1 * p, c2 = qq - m2 * p;
        const area = (Math.abs(c1 - c2) * Math.abs(p)) / 2;
        const diagram = triangleSvg([[0, c1], [0, c2], [p, qq]], [0, c1, 1, m1], [0, c2, 1, m2], "y");
        return {
          prompt: `The diagram is a sketch of the lines L₁: ${lineMk(q(m1), q(c1))} and L₂: ${lineMk(q(m2), q(c2))}. Find the area of the shaded triangle enclosed by L₁, L₂ and the y-axis.`,
          diagram,
          answer: { type: "number", value: area, display: `${num(area)} square units` },
          solution: [
            `L₁ and L₂ cross the y-axis at (0, ${num(c1)}) and (0, ${num(c2)}), so the base along the y-axis is ${Math.abs(c1 - c2)}.`,
            `Intersection: {{${poly([[m1, "x"], [c1, ""]])} = ${poly([[m2, "x"], [c2, ""]])}}} gives x = ${num(p)}, so the height (distance from the y-axis) is ${Math.abs(p)}.`,
            `Area = {{1/2}} × ${Math.abs(c1 - c2)} × ${Math.abs(p)} = ${num(area)} square units.`,
          ],
          hint: "Use the y-axis as the base. The height is how far the crossing point is from the y-axis — its x-coordinate.",
          traps: [{ spec: { type: "number", value: area * 2 }, feedback: "You forgot the half: area of a triangle = ½ × base × height." }],
        };
      }
      let a = -2, b = 4, p = 1, qq = 6;
      for (let i = 0; i < 400; i++) {
        a = rng.int(-8, 8); b = rng.int(-8, 8); p = rng.int(-6, 6); qq = rng.nonZero(-8, 8);
        if (a === b || a === p || b === p) continue;
        if (tier === 1 && (qq % (p - a) !== 0 || qq % (p - b) !== 0 || qq < 0)) continue;
        if (tier >= 2 && qq % (p - a) === 0 && qq % (p - b) === 0) continue;
        break;
      }
      const area = (Math.abs(a - b) * Math.abs(qq)) / 2;
      let eq1: string, eq2: string;
      if (tier === 1) {
        const m1 = qq / (p - a), m2 = qq / (p - b);
        eq1 = lineMk(q(m1), q(-m1 * a)); eq2 = lineMk(q(m2), q(-m2 * b));
      } else {
        // Through (a, 0) and (p, q): q x − (p − a) y = q a.
        const [A1, B1, C1] = normCoeffs([qq, -(p - a), qq * a]);
        const [A2, B2, C2] = normCoeffs([qq, -(p - b), qq * b]);
        eq1 = impl(A1, B1, C1); eq2 = impl(A2, B2, C2);
      }
      const diagram = triangleSvg([[a, 0], [b, 0], [p, qq]], [a, 0, p - a, qq], [b, 0, p - b, qq], "x");
      return {
        prompt: `The diagram is a sketch of the lines L₁: ${eq1} and L₂: ${eq2}. Find the area of the shaded triangle enclosed by L₁, L₂ and the x-axis.`,
        diagram,
        answer: { type: "number", value: area, display: `${num(area)} square units` },
        solution: [
          `On the x-axis y = 0: L₁ crosses at x = ${num(a)} and L₂ crosses at x = ${num(b)}, so the base is ${Math.abs(a - b)}.`,
          `Solve L₁ and L₂ simultaneously: they meet at ${pt(p, qq)}, so the height (distance from the x-axis) is ${Math.abs(qq)}.`,
          `Area = {{1/2}} × ${Math.abs(a - b)} × ${Math.abs(qq)} = ${num(area)} square units.`,
        ],
        hint: "Find the three corners: two x-intercepts (put y = 0) and the intersection of the lines.",
        traps: [{ spec: { type: "number", value: area * 2 }, feedback: "You forgot the half: area of a triangle = ½ × base × height." }],
      };
    },
  },

  // 10 ------------------------------------------------- dividing a line in a ratio (H+)
  {
    id: "linear-graphs.divide-in-ratio",
    topicId: TOPIC,
    title: "Find the point dividing a line segment in a given ratio",
    level: 3,
    guideRef: "dividing-a-line",
    generate(rng, tier) {
      const ratios: Array<[number, number]> = tier === 1 ? [[1, 2], [2, 1], [1, 3], [3, 1]] : [[2, 3], [3, 2], [1, 4], [3, 4], [4, 3], [2, 5], [5, 2], [1, 3], [3, 1]];
      const [m, n] = rng.pick(ratios);
      const s = m + n;
      const reverse = tier === 3 && rng.bool(0.5);
      let ax = 1, ay = 2, dx = 6, dy = 9;
      for (let i = 0; i < 200; i++) {
        ax = rng.int(tier === 1 ? 0 : -8, 8); ay = rng.int(tier === 1 ? 0 : -8, 8);
        const step = reverse ? m : s;
        dx = step * rng.nonZero(tier === 1 ? -3 : -4, tier === 1 ? 3 : 4);
        dy = step * rng.nonZero(tier === 1 ? -3 : -4, tier === 1 ? 3 : 4);
        if (reverse) { dx = (dx / m) * s; dy = (dy / m) * s; }
        if (tier === 1 && (ax + dx < 0 || ay + dy < 0)) continue;
        if (Math.abs(ax + dx) > 24 || Math.abs(ay + dy) > 24) continue;
        break;
      }
      const bx = ax + dx, by = ay + dy;
      const px = ax + (m * dx) / s, py = ay + (m * dy) / s;
      if (reverse) {
        const tx = 2 * px - ax, ty = 2 * py - ay; // treating P as a midpoint
        const traps: Trap[] = tx !== bx || ty !== by ? [{ spec: { type: "list", values: [tx, ty], ordered: true }, feedback: `P isn't the midpoint — AP is ${m} parts and PB is ${n} parts.` }] : [];
        return {
          prompt: `A is the point ${pt(ax, ay)}. The point P${pt(px, py)} lies on the line segment AB such that AP : PB = ${m} : ${n}. Find the coordinates of B.`,
          answer: ptSpec(bx, by),
          solution: [
            `AP is ${m} of the ${s} equal parts of AB. The vector AP = (${num(px - ax)}, ${num(py - ay)}).`,
            `One part = (${num((px - ax) / m)}, ${num((py - ay) / m)}), so AB = ${s} parts = (${num(dx)}, ${num(dy)}).`,
            `B = A + AB = ${pt(bx, by)}.`,
          ],
          hint: "Work backwards: AP is a known number of equal parts — find one part, then scale up to the whole of AB.",
          traps,
        };
      }
      const useFraction = tier >= 2 && rng.bool(0.35);
      const prompt = useFraction
        ? `A is ${pt(ax, ay)} and B is ${pt(bx, by)}. The point P lies on AB with AP = ${frac(m, s)} AB. Find the coordinates of P.`
        : rng.pick([
            `A is the point ${pt(ax, ay)} and B is the point ${pt(bx, by)}. The point P lies on AB such that AP : PB = ${m} : ${n}. Find the coordinates of P.`,
            `P divides the line segment from A${pt(ax, ay)} to B${pt(bx, by)} in the ratio ${m} : ${n}. Work out the coordinates of P.`,
          ]);
      const fromB: [number, number] = [ax + (n * dx) / s, ay + (n * dy) / s];
      const wrongFrac: [number, number] = [ax + (m * dx) / n, ay + (m * dy) / n];
      const traps: Trap[] = [];
      if (m !== n) traps.push({ spec: { type: "list", values: fromB, ordered: true }, feedback: `Measured from the wrong end: P is ${m} parts from A, so it is closer to ${m < n ? "A" : "B"}.` });
      traps.push({ spec: { type: "list", values: wrongFrac, ordered: true, tolerance: 1e-6 }, feedback: `The fraction of the way along is ${m} out of ${s} parts, i.e. {{${m}/${s}}} — not {{${m}/${n}}}.` });
      return {
        prompt,
        answer: ptSpec(px, py),
        solution: [
          `${useFraction ? "" : `AP : PB = ${m} : ${n}, so AB has ${s} equal parts and P is {{${m}/${s}}} of the way from A to B. `}AB = (${num(dx)}, ${num(dy)}).`,
          `{{${m}/${s}}} of AB = (${num((m * dx) / s)}, ${num((m * dy) / s)}).`,
          `P = A + {{${m}/${s}}}AB = (${num(ax)} + ${(m * dx) / s < 0 ? `(${num((m * dx) / s)})` : num((m * dx) / s)}, ${num(ay)} + ${(m * dy) / s < 0 ? `(${num((m * dy) / s)})` : num((m * dy) / s)}) = ${pt(px, py)}.`,
        ],
        hint: "How many equal parts is AB split into? P is that fraction of the way from A.",
        traps,
      };
    },
  },
];
