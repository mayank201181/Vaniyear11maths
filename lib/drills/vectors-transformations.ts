// Procedural skill drills for "Vectors & Transformations".
// Every coordinate and vector component is an integer (enlargements pick offsets that are
// multiples of the scale-factor denominator), so images and answers are exact. Vector-geometry
// answers are linear expressions in a and b with exact fraction coefficients. Grid and
// vector diagrams are drawn to scale from the actual numbers.
// Column vectors use the {{col(x, y)}} markup (stacked in brackets); typed answers are "x, y".
import type { Drill } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { clean, gcd, num, br } from "./helpers.ts";

const T = "vectors-transformations";
type P2 = [number, number];

const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara", "Olivia", "Kenji"] as const;

// ---------------------------------------------------------------------------
// Small helpers
// ---------------------------------------------------------------------------

const z = (n: number): number => (n === 0 ? 0 : clean(n));
const pt = (p: P2): string => `(${num(p[0])}, ${num(p[1])})`;
const cv = (p: P2): string => `{{col(${z(p[0])}, ${z(p[1])})}}`;
const ib = (n: number): string => (n < 0 ? `(${z(n)})` : `${z(n)}`);
const VTYPE = " Type your answer as top, bottom (for example 3, −2).";
const add = (p: P2, q: P2): P2 => [z(p[0] + q[0]), z(p[1] + q[1])];
const sub = (p: P2, q: P2): P2 => [z(p[0] - q[0]), z(p[1] - q[1])];
const mul = (k: number, p: P2): P2 => [z(k * p[0]), z(k * p[1])];
const same = (p: P2, q: P2): boolean => Math.abs(p[0] - q[0]) < 1e-9 && Math.abs(p[1] - q[1]) < 1e-9;

function coordSpec(p: P2): AnswerSpec {
  return { type: "list", values: [z(p[0]), z(p[1])], ordered: true, display: pt(p) };
}
function vecSpec(p: P2): AnswerSpec {
  return { type: "list", values: [z(p[0]), z(p[1])], ordered: true, display: cv(p) };
}

/** Traps for pair answers: drops any candidate equal to the answer or to an earlier trap. */
function pairTraps(ans: P2, cands: Array<[P2, string]>, spec: (p: P2) => AnswerSpec = coordSpec): Trap[] {
  const used: P2[] = [ans];
  const out: Trap[] = [];
  for (const [p, feedback] of cands) {
    if (!Number.isFinite(p[0]) || !Number.isFinite(p[1]) || used.some((u) => same(u, p))) continue;
    used.push(p);
    out.push({ spec: spec(p), feedback });
  }
  return out;
}

/** Traps for single numbers. */
function numTraps(ans: number, cands: Array<[number, string]>, tol?: number): Trap[] {
  const used: number[] = [ans];
  const out: Trap[] = [];
  for (const [v0, feedback] of cands) {
    const v = clean(v0);
    if (!Number.isFinite(v) || used.some((u) => Math.abs(u - v) < Math.max(1e-6, (tol ?? 0) * 2.2))) continue;
    used.push(v);
    out.push({ spec: tol ? { type: "number", value: v, tolerance: tol } : { type: "number", value: v }, feedback });
  }
  return out;
}

/** Round to 3 significant figures. */
function sf3(v: number): number {
  if (v === 0) return 0;
  return clean(parseFloat(v.toPrecision(3)));
}
function tol3(v: number): number {
  return clean(0.5 * Math.pow(10, Math.floor(Math.log10(Math.abs(v))) - 2), 6);
}
function s3(v: number): string {
  return Math.abs(sf3(v)).toPrecision(3).replace(/^/, v < 0 ? "−" : "");
}

/** Exact simplified surd √N = k√m. */
function surd(N: number): { k: number; m: number } {
  let k = 1, m = N;
  for (let f = 2; f * f <= m; f++) {
    while (m % (f * f) === 0) {
      m /= f * f;
      k *= f;
    }
  }
  return { k, m };
}
function surdMarkup(N: number): string {
  const { k, m } = surd(N);
  if (m === 1) return String(k);
  return k === 1 ? `{{sqrt(${m})}}` : `{{${k}sqrt(${m})}}`;
}
function surdExpr(N: number): string {
  const { k, m } = surd(N);
  if (m === 1) return String(k);
  return k === 1 ? `sqrt(${m})` : `${k}sqrt(${m})`;
}

// ---- Exact fractions [n, d] for vector-geometry coefficients ----
type Fr = [number, number];
function fr(n: number, d = 1): Fr {
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1;
  return [z(n / g), d / g];
}
const fAdd = (p: Fr, q: Fr): Fr => fr(p[0] * q[1] + q[0] * p[1], p[1] * q[1]);
const fSub = (p: Fr, q: Fr): Fr => fr(p[0] * q[1] - q[0] * p[1], p[1] * q[1]);
const fMul = (p: Fr, q: Fr): Fr => fr(p[0] * q[0], p[1] * q[1]);
const fNeg = (p: Fr): Fr => fr(-p[0], p[1]);
const fZero = (p: Fr): boolean => p[0] === 0;

/** A vector c₁a + c₂b, as an answer key ("(2/5)a+(3/5)b") and as maths markup ("{{2/5 a + 3/5 b}}"). */
interface Lin { a: Fr; b: Fr }
function linKey(v: Lin): string {
  const parts: string[] = [];
  for (const [c, s] of [[v.a, "a"], [v.b, "b"]] as Array<[Fr, string]>) {
    if (fZero(c)) continue;
    const [n, d] = c;
    let t: string;
    if (d === 1) t = n === 1 ? s : n === -1 ? `-${s}` : `${n}${s}`;
    else t = `(${n}/${d})${s}`;
    parts.push(t);
  }
  return parts.length ? parts.join("+").replace(/\+-/g, "-").replace(/\+\(-/g, "-(") : "0";
}
function linShow(v: Lin): string {
  let out = "";
  for (const [c, s] of [[v.a, "a"], [v.b, "b"]] as Array<[Fr, string]>) {
    if (fZero(c)) continue;
    const [n, d] = c;
    const an = Math.abs(n);
    const mag = d === 1 ? (an === 1 ? s : `${an}${s}`) : `${an}/${d} ${s}`;
    if (!out) out = (n < 0 ? "-" : "") + mag;
    else out += n < 0 ? ` - ${mag}` : ` + ${mag}`;
  }
  return `{{${out || "0"}}}`;
}
function linSpec(v: Lin): AnswerSpec {
  return { type: "expression", expr: linKey(v), display: linShow(v) };
}
const L = (a: Fr, b: Fr): Lin => ({ a, b });
const lAdd = (p: Lin, q: Lin): Lin => L(fAdd(p.a, q.a), fAdd(p.b, q.b));
const lSub = (p: Lin, q: Lin): Lin => L(fSub(p.a, q.a), fSub(p.b, q.b));
const lMul = (k: Fr, p: Lin): Lin => L(fMul(k, p.a), fMul(k, p.b));
const lSame = (p: Lin, q: Lin): boolean => p.a[0] * q.a[1] === q.a[0] * p.a[1] && p.b[0] * q.b[1] === q.b[0] * p.b[1];
function linTraps(ans: Lin, cands: Array<[Lin, string]>): Trap[] {
  const used: Lin[] = [ans];
  const out: Trap[] = [];
  for (const [v, feedback] of cands) {
    if ((fZero(v.a) && fZero(v.b)) || used.some((u) => lSame(u, v))) continue;
    used.push(v);
    out.push({ spec: { type: "expression", expr: linKey(v) }, feedback });
  }
  return out;
}
const frShow = (f: Fr): string => (f[1] === 1 ? num(f[0]) : `{{${f[0] < 0 ? "-" : ""}${Math.abs(f[0])}/${f[1]}}}`);

// ---------------------------------------------------------------------------
// SVG helpers
// ---------------------------------------------------------------------------

const F1 = (n: number) => n.toFixed(1);
const TXT = 'font-family="sans-serif" fill="#1f2937"';
function svgOpen(w: number, h: number, aria: string): string {
  return `<svg viewBox="0 0 ${F1(w)} ${F1(h)}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}"><rect x="0" y="0" width="${F1(w)}" height="${F1(h)}" fill="#ffffff"/>`;
}
function txt(x: number, y: number, s: string, size = 13, anchor: "start" | "middle" | "end" = "middle", bold = false): string {
  return `<text x="${F1(x)}" y="${F1(y)}" font-size="${size}" ${TXT}${bold ? ' font-weight="700"' : ""} text-anchor="${anchor}">${s}</text>`;
}

interface GridShape { pts: P2[]; fill: string; label: string }
/** A square grid with axes, drawn to scale, showing labelled polygons. */
function gridSvg(shapes: GridShape[], aria: string): string {
  const all = shapes.flatMap((s) => s.pts).concat([[0, 0]]);
  const x0 = Math.min(...all.map((p) => p[0])) - 1, x1 = Math.max(...all.map((p) => p[0])) + 1;
  const y0 = Math.min(...all.map((p) => p[1])) - 1, y1 = Math.max(...all.map((p) => p[1])) + 1;
  const cell = Math.min(24, 420 / (x1 - x0), 300 / (y1 - y0));
  const pad = 18;
  const W = (x1 - x0) * cell + 2 * pad, H = (y1 - y0) * cell + 2 * pad;
  const px = (x: number) => pad + (x - x0) * cell;
  const py = (y: number) => pad + (y1 - y) * cell;
  let s = svgOpen(W, H, aria);
  for (let x = x0; x <= x1; x++) s += `<line x1="${F1(px(x))}" y1="${F1(py(y0))}" x2="${F1(px(x))}" y2="${F1(py(y1))}" stroke="#e5e7eb" stroke-width="1"/>`;
  for (let y = y0; y <= y1; y++) s += `<line x1="${F1(px(x0))}" y1="${F1(py(y))}" x2="${F1(px(x1))}" y2="${F1(py(y))}" stroke="#e5e7eb" stroke-width="1"/>`;
  s += `<line x1="${F1(px(x0))}" y1="${F1(py(0))}" x2="${F1(px(x1))}" y2="${F1(py(0))}" stroke="#334155" stroke-width="1.5"/>`;
  s += `<line x1="${F1(px(0))}" y1="${F1(py(y0))}" x2="${F1(px(0))}" y2="${F1(py(y1))}" stroke="#334155" stroke-width="1.5"/>`;
  const step = x1 - x0 > 14 || y1 - y0 > 14 ? 4 : 2;
  for (let x = Math.ceil(x0 / step) * step; x <= x1; x += step) if (x !== 0) s += txt(px(x), py(0) + 12, num(x), 10);
  for (let y = Math.ceil(y0 / step) * step; y <= y1; y += step) if (y !== 0) s += txt(px(0) - 4, py(y) + 4, num(y), 10, "end");
  s += txt(px(x1) - 4, py(0) - 5, "x", 11, "end");
  s += txt(px(0) + 6, py(y1) + 10, "y", 11, "start");
  for (const sh of shapes) {
    s += `<polygon points="${sh.pts.map((p) => `${F1(px(p[0]))},${F1(py(p[1]))}`).join(" ")}" fill="${sh.fill}" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/>`;
    const cx = sh.pts.reduce((a, p) => a + p[0], 0) / sh.pts.length, cy = sh.pts.reduce((a, p) => a + p[1], 0) / sh.pts.length;
    s += txt(px(cx), py(cy) + 4, sh.label, 12, "middle", true);
  }
  return s + "</svg>";
}

/** Arrow from p to q (SVG pixels) with a filled head, plus an optional label offset to one side. */
function arrow(p: P2, q: P2, label = "", side = 1): string {
  const dx = q[0] - p[0], dy = q[1] - p[1], len = Math.hypot(dx, dy) || 1;
  const ux = dx / len, uy = dy / len;
  const mx = p[0] + dx * 0.55, my = p[1] + dy * 0.55;
  const hx = mx + ux * 7, hy = my + uy * 7;
  const head = `<polygon points="${F1(hx)},${F1(hy)} ${F1(hx - ux * 11 - uy * 5)},${F1(hy - uy * 11 + ux * 5)} ${F1(hx - ux * 11 + uy * 5)},${F1(hy - uy * 11 - ux * 5)}" fill="#1f2937"/>`;
  let s = `<line x1="${F1(p[0])}" y1="${F1(p[1])}" x2="${F1(q[0])}" y2="${F1(q[1])}" stroke="#1f2937" stroke-width="2"/>` + head;
  if (label) s += `<text x="${F1(mx - uy * 16 * side)}" y="${F1(my + ux * 16 * side + 4)}" font-size="14" font-style="italic" font-weight="700" ${TXT} text-anchor="middle">${label}</text>`;
  return s;
}
function seg(p: P2, q: P2, dash = false): string {
  return `<line x1="${F1(p[0])}" y1="${F1(p[1])}" x2="${F1(q[0])}" y2="${F1(q[1])}" stroke="#1f2937" stroke-width="2"${dash ? ' stroke-dasharray="5 4"' : ""}/>`;
}
function dot(p: P2, name: string, dx = 0, dy = -10): string {
  return `<circle cx="${F1(p[0])}" cy="${F1(p[1])}" r="3.5" fill="#1f2937"/>` + txt(p[0] + dx, p[1] + dy, name, 14, "middle", true);
}
const lerp = (p: P2, q: P2, t: number): P2 => [p[0] + (q[0] - p[0]) * t, p[1] + (q[1] - p[1]) * t];

// ---------------------------------------------------------------------------
// Transformations of points
// ---------------------------------------------------------------------------

interface Tf { name: string; f: (p: P2) => P2; rule: string }
function mirror(kind: "x=a" | "y=b" | "y=x" | "y=-x" | "y=x+c" | "y=-x+c", c = 0): Tf {
  switch (kind) {
    case "x=a": return { name: c === 0 ? "the y-axis" : `the line x = ${num(c)}`, f: (p) => [z(2 * c - p[0]), p[1]], rule: c === 0 ? "(x, y) → (−x, y)" : `the y-coordinate stays the same; x moves to the same distance on the other side of x = ${num(c)}` };
    case "y=b": return { name: c === 0 ? "the x-axis" : `the line y = ${num(c)}`, f: (p) => [p[0], z(2 * c - p[1])], rule: c === 0 ? "(x, y) → (x, −y)" : `the x-coordinate stays the same; y moves to the same distance on the other side of y = ${num(c)}` };
    case "y=x": return { name: "the line y = x", f: (p) => [p[1], p[0]], rule: "(x, y) → (y, x): swap the coordinates" };
    case "y=-x": return { name: "the line y = −x", f: (p) => [z(-p[1]), z(-p[0])], rule: "(x, y) → (−y, −x): swap and change both signs" };
    case "y=x+c": return { name: `the line y = x ${c < 0 ? "−" : "+"} ${num(Math.abs(c))}`, f: (p) => [z(p[1] - c), z(p[0] + c)], rule: `(x, y) → (y − ${br(c)}, x + ${br(c)})` };
    case "y=-x+c": return { name: `the line y = −x ${c < 0 ? "−" : "+"} ${num(Math.abs(c))}`, f: (p) => [z(c - p[1]), z(c - p[0])], rule: `(x, y) → (${num(c)} − y, ${num(c)} − x)` };
  }
}
type Turn = "90cw" | "90acw" | "180";
function rotate(p: P2, c: P2, t: Turn): P2 {
  const d = sub(p, c);
  const r: P2 = t === "90acw" ? [z(-d[1]), d[0]] : t === "90cw" ? [d[1], z(-d[0])] : [z(-d[0]), z(-d[1])];
  return add(c, r);
}
const turnName = (t: Turn): string => (t === "90acw" ? "90° anticlockwise" : t === "90cw" ? "90° clockwise" : "180°");

// Small scalene triangles (as offsets) so an image fixes the transformation.
const TRIS: P2[][] = [
  [[0, 0], [2, 0], [0, 1]],
  [[0, 0], [1, 0], [0, 2]],
  [[0, 0], [2, 0], [2, 1]],
  [[0, 0], [1, 0], [1, 2]],
  [[0, 0], [3, 0], [0, 1]],
  [[0, 0], [2, 0], [1, 2]],
  [[0, 0], [3, 0], [1, 2]],
];

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // 1 ------------------------------------------------------------------------
  {
    id: `${T}.reflect-a-point`,
    topicId: T,
    title: "Reflect a point in a mirror line",
    level: 1,
    guideRef: "transformations",
    generate(rng, tier) {
      const kinds = tier === 1 ? (["x=a", "y=b", "y=x"] as const) : tier === 2 ? (["x=a", "y=b", "y=x", "y=-x"] as const) : (["x=a", "y=b", "y=-x", "y=x+c", "y=-x+c"] as const);
      let kind = rng.pick(kinds) as "x=a" | "y=b" | "y=x" | "y=-x" | "y=x+c" | "y=-x+c";
      let c = 0;
      let P: P2 = [3, 5];
      let m = mirror(kind, c);
      for (let i = 0; i < 100; i++) {
        kind = rng.pick(kinds);
        c = kind === "y=x" || kind === "y=-x" ? 0 : tier === 1 ? rng.int(-3, 4) : rng.nonZero(-5, 5);
        P = tier === 1 ? [rng.int(-6, 6), rng.int(-6, 6)] : [rng.int(-8, 8), rng.int(-8, 8)];
        m = mirror(kind, c);
        const I = m.f(P);
        if (same(I, P)) continue; // point on the mirror
        if (Math.abs(I[0]) > 12 || Math.abs(I[1]) > 12) continue;
        break;
      }
      const I = m.f(P);
      const name = rng.pick(NAMES);
      const prompt = rng.pick([
        `The point P ${pt(P)} is reflected in ${m.name}. Find the coordinates of its image P′.`,
        `Triangle A has a vertex at ${pt(P)}. ${name} reflects triangle A in ${m.name} to get triangle B. Where does this vertex end up? Give the coordinates.`,
        `Reflect the point ${pt(P)} in ${m.name}. Give the coordinates of the image.`,
      ]);
      const sol: string[] = [];
      if (kind === "x=a") {
        const d = P[0] - c;
        sol.push(`The mirror is the vertical line x = ${num(c)}. The point is ${num(Math.abs(d))} unit${Math.abs(d) === 1 ? "" : "s"} to the ${d > 0 ? "right" : "left"} of it.`, `The image is the same distance on the other side: x = ${num(c)} ${d > 0 ? "−" : "+"} ${num(Math.abs(d))} = ${num(I[0])}. The y-coordinate doesn't change.`);
      } else if (kind === "y=b") {
        const d = P[1] - c;
        sol.push(`The mirror is the horizontal line y = ${num(c)}. The point is ${num(Math.abs(d))} unit${Math.abs(d) === 1 ? "" : "s"} ${d > 0 ? "above" : "below"} it.`, `The image is the same distance on the other side: y = ${num(c)} ${d > 0 ? "−" : "+"} ${num(Math.abs(d))} = ${num(I[1])}. The x-coordinate doesn't change.`);
      } else {
        sol.push(`For a reflection in ${m.name}: ${m.rule}.`, `Check: the midpoint of P and P′ is ${pt([clean((P[0] + I[0]) / 2), clean((P[1] + I[1]) / 2)])}, which lies on the mirror line.`);
      }
      sol.push(`P′ = ${pt(I)}.`);
      const cands: Array<[P2, string]> = [];
      if (kind === "x=a") cands.push([[P[0], z(2 * c - P[1])], `That's a reflection in the line y = ${num(c)}. The line x = ${num(c)} is vertical, so x changes and y stays the same.`], [[z(-P[0]), P[1]], "You reflected in the y-axis. Measure the distance from P to the line x = " + num(c) + " instead."]);
      if (kind === "y=b") cands.push([[z(2 * c - P[0]), P[1]], `That's a reflection in the line x = ${num(c)}. The line y = ${num(c)} is horizontal, so y changes and x stays the same.`], [[P[0], z(-P[1])], "You reflected in the x-axis. Measure the distance from P to the line y = " + num(c) + " instead."]);
      if (kind === "y=x") cands.push([[z(-P[1]), z(-P[0])], "That's the reflection in y = −x. For y = x just swap the coordinates."]);
      if (kind === "y=-x") cands.push([[P[1], P[0]], "That's the reflection in y = x. For y = −x swap the coordinates AND change both signs."]);
      if (kind === "y=x+c") cands.push([[P[1], P[0]], `That's the reflection in y = x. This mirror is shifted by ${num(c)}, so (x, y) → (y − ${br(c)}, x + ${br(c)}).`]);
      if (kind === "y=-x+c") cands.push([[z(-P[1]), z(-P[0])], `That's the reflection in y = −x. This mirror is shifted, so (x, y) → (${num(c)} − y, ${num(c)} − x).`]);
      return {
        prompt,
        answer: coordSpec(I),
        solution: sol,
        hint: kind === "x=a" || kind === "y=b" ? "Is the mirror vertical or horizontal? Only the coordinate that crosses the mirror changes." : "Sketch the line and the point. The mirror is the perpendicular bisector of P and its image.",
        traps: pairTraps(I, cands),
      };
    },
  },

  // 2 ------------------------------------------------------------------------
  {
    id: `${T}.rotate-a-point`,
    topicId: T,
    title: "Rotate a point about a centre",
    level: 1,
    guideRef: "transformations",
    generate(rng, tier) {
      let C: P2 = [0, 0], P: P2 = [3, 1];
      let t: Turn = "90cw";
      for (let i = 0; i < 100; i++) {
        t = rng.pick(["90cw", "90acw", "180"] as const);
        C = tier === 1 ? [0, 0] : tier === 2 ? (rng.bool(0.3) ? [0, 0] : [rng.int(-4, 4), rng.int(-4, 4)]) : [rng.nonZero(-5, 5), rng.nonZero(-5, 5)];
        P = [rng.int(-7, 7), rng.int(-7, 7)];
        const d = sub(P, C);
        if (d[0] === 0 || d[1] === 0) continue; // avoid points directly level with the centre (too easy)
        const I = rotate(P, C, t);
        if (Math.abs(I[0]) > 12 || Math.abs(I[1]) > 12) continue;
        break;
      }
      const I = rotate(P, C, t);
      const d = sub(P, C);
      const rd = sub(I, C);
      const origin = C[0] === 0 && C[1] === 0;
      const cName = origin ? "the origin" : `the point ${pt(C)}`;
      const wording = tier === 3 && t !== "180" && rng.bool(0.4) ? (t === "90cw" ? "270° anticlockwise" : "270° clockwise") : turnName(t);
      const prompt = rng.pick([
        `The point P ${pt(P)} is rotated ${wording} about ${cName}. Find the coordinates of the image P′.`,
        `Shape S has a corner at ${pt(P)}. S is rotated ${wording} about ${cName}. Where does that corner end up?`,
      ]);
      const ruleText = t === "90acw" ? "(x, y) → (−y, x)" : t === "90cw" ? "(x, y) → (y, −x)" : "(x, y) → (−x, −y)";
      const sol: string[] = [];
      if (wording.startsWith("270")) sol.push(`${wording} is the same as ${turnName(t)}.`);
      if (!origin) sol.push(`Work relative to the centre: P − C = ${cv(d)} (the vector from C to P).`);
      sol.push(`A rotation of ${turnName(t)} sends ${ruleText}: ${cv(d)} → ${cv(rd)}.`);
      if (!origin) sol.push(`Add the centre back on: ${pt(C)} + ${cv(rd)} = ${pt(I)}.`);
      else sol.push(`P′ = ${pt(I)}.`);
      const other: Turn = t === "90cw" ? "90acw" : t === "90acw" ? "90cw" : "180";
      const cands: Array<[P2, string]> = [];
      if (t !== "180") cands.push([rotate(P, C, other), "That's the rotation in the opposite direction. Clockwise means the way clock hands turn."]);
      if (!origin) cands.push([rotate(P, [0, 0], t), "You rotated about the origin. Work with the vector from the centre to P, then add the centre back on."]);
      return {
        prompt,
        answer: coordSpec(I),
        solution: sol,
        hint: origin ? "Use tracing paper in your head: a quarter turn swaps the coordinates and changes one sign." : "Find the vector from the centre to P, rotate that vector, then add it back on to the centre.",
        traps: pairTraps(I, cands),
      };
    },
  },

  // 3 ------------------------------------------------------------------------
  {
    id: `${T}.enlarge-a-point`,
    topicId: T,
    title: "Enlarge from a centre (fractional and negative scale factors)",
    level: 2,
    guideRef: "transformations",
    generate(rng, tier) {
      const ks: Fr[] = tier === 1 ? [[2, 1], [3, 1]] : tier === 2 ? [[2, 1], [3, 1], [1, 2], [-1, 1], [-2, 1], [1, 3]] : [[-1, 2], [3, 2], [-2, 1], [-3, 1], [-1, 3], [2, 3]];
      let k: Fr = [2, 1], C: P2 = [1, 1], P: P2 = [3, 2];
      let back = false;
      for (let i = 0; i < 200; i++) {
        k = rng.pick(ks);
        C = tier === 1 ? (rng.bool(0.4) ? [0, 0] : [rng.int(-3, 3), rng.int(-3, 3)]) : [rng.int(-4, 4), rng.int(-4, 4)];
        const dd = k[1];
        const d: P2 = [dd * rng.int(-4, 4), dd * rng.int(-4, 4)];
        if (d[0] === 0 && d[1] === 0) continue;
        if (Math.abs(d[0]) + Math.abs(d[1]) < 2) continue;
        P = add(C, d);
        const I = add(C, mul(k[0] / k[1], d));
        if ([P, I].some((q) => Math.abs(q[0]) > 12 || Math.abs(q[1]) > 12)) continue;
        break;
      }
      back = tier === 3 && rng.bool(0.35);
      const kv = k[0] / k[1];
      const d = sub(P, C);
      const I = add(C, mul(kv, d));
      const kS = frShow(fr(k[0], k[1]));
      const origin = C[0] === 0 && C[1] === 0;
      const cName = origin ? "the origin" : pt(C);
      if (back) {
        const di = sub(I, C);
        return {
          prompt: `Shape A is enlarged with scale factor ${kS}, centre ${cName}, to give shape B. One vertex of B is at ${pt(I)}. Find the coordinates of the matching vertex of A.`,
          answer: coordSpec(P),
          solution: [
            `Vector from the centre to the image vertex: ${pt(I)} − ${pt(C)} = ${cv(di)}.`,
            `The object is the image "undone": divide by the scale factor ${kS}: ${cv(di)} ÷ ${kv < 0 ? `(${kS})` : kS} = ${cv(d)}.`,
            `Add the centre back: ${pt(C)} + ${cv(d)} = ${pt(P)}.`,
          ],
          hint: "Work backwards: the inverse of an enlargement with scale factor k is an enlargement with scale factor 1 ÷ k from the same centre.",
          traps: pairTraps(P, [
            [add(C, mul(kv, di)), "You enlarged B again. To go from B back to A, divide the vector from the centre by the scale factor."],
            [add(C, mul(-1 / kv, di)), "Check the sign: dividing by a negative scale factor keeps the vector on the opposite side of the centre."],
          ]),
        };
      }
      const prompt = rng.pick([
        `Enlarge the point P ${pt(P)} with scale factor ${kS} and centre ${cName}. Give the coordinates of the image P′.`,
        `Triangle T has a vertex at ${pt(P)}. T is enlarged by scale factor ${kS}, centre ${cName}. Find the coordinates of the image of this vertex.`,
      ]);
      const sol = [
        `Vector from the centre to P: ${pt(P)} − ${pt(C)} = ${cv(d)}.`,
        `Multiply by the scale factor ${kS}: ${cv(mul(kv, d))}.${kv < 0 ? " A negative scale factor puts the image on the opposite side of the centre." : ""}`,
        `Add the centre back: ${pt(C)} + ${cv(mul(kv, d))} = ${pt(I)}.`,
      ];
      return {
        prompt,
        answer: coordSpec(I),
        solution: sol,
        hint: "Find the vector from the centre to the point, multiply it by the scale factor, then add it to the centre.",
        traps: pairTraps(I, [
          [mul(kv, P), "You multiplied the coordinates of P by the scale factor. That only works when the centre is the origin — measure from the centre."],
          [add(C, mul(Math.abs(kv), d)), "With a negative scale factor the image is on the OTHER side of the centre."],
          [add(P, mul(kv, d)), "Start from the centre, not from P: image = centre + k × (vector from centre to P)."],
        ]),
      };
    },
  },

  // 4 ------------------------------------------------------------------------
  {
    id: `${T}.describe-a-transformation`,
    topicId: T,
    title: "Describe a transformation fully: mirror line, centre, scale factor",
    level: 3,
    guideRef: "transformations",
    generate(rng, tier) {
      const mode = rng.pick(tier === 1 ? (["mirror", "sf"] as const) : (["mirror", "sf", "centre", "rot"] as const));
      const tri = rng.pick(TRIS);
      if (mode === "mirror") {
        const kinds = tier === 3 ? (["x=a", "y=b", "y=x", "y=-x", "y=x+c", "y=-x+c"] as const) : (["x=a", "y=b", "y=x", "y=-x"] as const);
        let A: P2[] = tri, B: P2[] = tri, m = mirror("x=a", 1), kind: (typeof kinds)[number] = "x=a", c = 1;
        for (let i = 0; i < 200; i++) {
          kind = rng.pick(kinds);
          c = kind === "y=x" || kind === "y=-x" ? 0 : rng.int(-3, 3);
          const anc: P2 = [rng.int(-6, 5), rng.int(-6, 5)];
          A = tri.map((p) => add(p, anc));
          m = mirror(kind, c);
          B = A.map(m.f);
          // Object must not touch the mirror, and keep everything on a small grid.
          if (A.some((p, j) => same(p, B[j]))) continue;
          const sideSign = (p: P2) => (kind === "x=a" ? p[0] - c : kind === "y=b" ? p[1] - c : kind === "y=x" ? p[1] - p[0] : kind === "y=-x" ? p[1] + p[0] : kind === "y=x+c" ? p[1] - p[0] - c : p[1] + p[0] - c);
          const sg = A.map(sideSign);
          if (!(sg.every((v) => v > 0) || sg.every((v) => v < 0))) continue;
          if ([...A, ...B].some((p) => Math.abs(p[0]) > 8 || Math.abs(p[1]) > 8)) continue;
          break;
        }
        const eq = kind === "x=a" ? `x=${c}` : kind === "y=b" ? `y=${c}` : kind === "y=x" ? "y=x" : kind === "y=-x" ? "y=-x" : kind === "y=x+c" ? `y=x+${c}` : `y=-x+${c}`;
        const show = m.name.replace(/^the line /, "").replace(/^the y-axis$/, "x = 0").replace(/^the x-axis$/, "y = 0");
        const traps: Trap[] = [];
        if (kind === "x=a") traps.push({ spec: { type: "equation", eq: `y=${c}` }, feedback: "Lines x = a are vertical and y = b horizontal. Your mirror is vertical, so it's x = …" });
        if (kind === "y=b") traps.push({ spec: { type: "equation", eq: `x=${c}` }, feedback: "Lines y = b are horizontal. Your mirror is horizontal, so it's y = …" });
        if (kind === "y=x") traps.push({ spec: { type: "equation", eq: "y=-x" }, feedback: "Check the slope: y = x goes up from left to right." });
        if (kind === "y=-x") traps.push({ spec: { type: "equation", eq: "y=x" }, feedback: "Check the slope: y = −x goes down from left to right." });
        const mid: P2 = [clean((A[0][0] + B[0][0]) / 2), clean((A[0][1] + B[0][1]) / 2)];
        const mid2: P2 = [clean((A[1][0] + B[1][0]) / 2), clean((A[1][1] + B[1][1]) / 2)];
        return {
          prompt: `Triangle A has vertices ${A.map(pt).join(", ")}. Triangle B has vertices ${B.map(pt).join(", ")} (in the same order). Triangle A is reflected to give triangle B. Find the equation of the mirror line.`,
          diagram: gridSvg([{ pts: A, fill: "#c7d2fe", label: "A" }, { pts: B, fill: "#fde68a", label: "B" }], `Grid with triangle A at ${A.map(pt).join(", ")} and its reflection B at ${B.map(pt).join(", ")}.`),
          answer: { type: "equation", eq, display: `{{${show.replace(/−/g, "-")}}}` },
          solution: [
            `The mirror line passes through the midpoint of each object point and its image.`,
            `Midpoint of ${pt(A[0])} and ${pt(B[0])} is ${pt(mid)}; midpoint of ${pt(A[1])} and ${pt(B[1])} is ${pt(mid2)}.`,
            `The line through these midpoints is ${show}.`,
          ],
          hint: "Join a vertex to its image. The mirror line cuts that segment in half at right angles.",
          traps,
        };
      }
      if (mode === "rot") {
        let A: P2[] = tri, B: P2[] = tri, C: P2 = [1, 1], t: Turn = "90cw";
        for (let i = 0; i < 200; i++) {
          t = rng.pick(["90cw", "90acw", "180"] as const);
          C = [rng.int(-3, 3), rng.int(-3, 3)];
          const anc: P2 = [rng.int(-5, 4), rng.int(-5, 4)];
          A = tri.map((p) => add(p, anc));
          B = A.map((p) => rotate(p, C, t));
          if (A.some((p) => same(p, C))) continue;
          if ([...A, ...B].some((p) => Math.abs(p[0]) > 8 || Math.abs(p[1]) > 8)) continue;
          break;
        }
        const ask = rng.bool() ? "centre" : "angle";
        const sol = [
          `Every point stays the same distance from the centre, so the centre lies on the perpendicular bisector of each point and its image.`,
          `Try ${pt(C)}: ${pt(A[0])} − ${pt(C)} = ${cv(sub(A[0], C))} and ${pt(B[0])} − ${pt(C)} = ${cv(sub(B[0], C))}. The second vector is the first turned ${turnName(t)}.`,
          `So B is A rotated ${turnName(t)} about ${pt(C)}.`,
        ];
        if (ask === "centre") {
          return {
            prompt: `Triangle A has vertices ${A.map(pt).join(", ")}. Triangle A is rotated ${turnName(t)} to give triangle B with vertices ${B.map(pt).join(", ")} (in the same order). Find the coordinates of the centre of rotation.`,
            diagram: gridSvg([{ pts: A, fill: "#c7d2fe", label: "A" }, { pts: B, fill: "#fde68a", label: "B" }], `Grid with triangle A at ${A.map(pt).join(", ")} and its rotation B at ${B.map(pt).join(", ")}.`),
            answer: coordSpec(C),
            solution: sol,
            hint: "The centre is the only point that doesn't move. It's equally far from each vertex and its image — try the perpendicular bisectors.",
            traps: pairTraps(C, [[[0, 0], "The centre isn't always the origin. Check: does a quarter turn about (0, 0) really send A to B?"]]),
          };
        }
        const deg = t === "180" ? 180 : t === "90acw" ? 90 : 270;
        return {
          prompt: `Triangle A has vertices ${A.map(pt).join(", ")}. Triangle B has vertices ${B.map(pt).join(", ")} (in the same order). B is a rotation of A about ${pt(C)}. Find the angle of rotation, measured **anticlockwise**, in degrees (between 0° and 360°).`,
          diagram: gridSvg([{ pts: A, fill: "#c7d2fe", label: "A" }, { pts: B, fill: "#fde68a", label: "B" }], `Grid with triangle A at ${A.map(pt).join(", ")} and its rotation B at ${B.map(pt).join(", ")}.`),
          answer: { type: "number", value: deg, display: `${deg}°` },
          solution: sol.concat(t === "90cw" ? ["90° clockwise is 270° anticlockwise."] : []),
          hint: "Compare the vector from the centre to a vertex with the vector from the centre to its image. A quarter turn anticlockwise sends (x, y) to (−y, x).",
          traps: numTraps(deg, [[360 - deg, "Right size of turn, wrong direction — the question asks for the anticlockwise angle."]]),
        };
      }
      // Enlargement: scale factor or centre.
      const ks: Fr[] = tier === 1 ? [[2, 1], [3, 1]] : tier === 2 ? [[2, 1], [3, 1], [1, 2], [-1, 1], [-2, 1]] : [[-2, 1], [1, 2], [-1, 2], [3, 2], [-1, 1], [1, 3]];
      let A: P2[] = tri, B: P2[] = tri, C: P2 = [0, 0], k: Fr = [2, 1];
      for (let i = 0; i < 300; i++) {
        k = rng.pick(ks);
        C = [rng.int(-4, 4), rng.int(-4, 4)];
        const anc: P2 = [rng.int(-3, 3), rng.int(-3, 3)];
        if (anc[0] === 0 && anc[1] === 0) continue;
        // Offsets from the centre are multiples of k's denominator so every image vertex is on the grid.
        A = tri.map((p) => add(C, mul(k[1], add(p, anc))));
        B = A.map((p) => add(C, mul(k[0] / k[1], sub(p, C))));
        if (A.some((p) => same(p, C))) continue;
        if ([...A, ...B].some((p) => Math.abs(p[0]) > 9 || Math.abs(p[1]) > 9)) continue;
        break;
      }
      const kv = k[0] / k[1];
      const kS = frShow(fr(k[0], k[1]));
      const lenA = Math.hypot(...sub(A[1], A[0])), lenB = Math.hypot(...sub(B[1], B[0]));
      const sol = [
        `Compare matching sides: side ${pt(A[0])}–${pt(A[1])} has length ${num(Math.round(lenA * 1000) / 1000)}; its image has length ${num(Math.round(lenB * 1000) / 1000)}. So the size of the scale factor is ${frShow(fr(Math.abs(k[0]), k[1]))}.`,
        kv < 0 ? "The image is upside down, on the other side of the centre, so the scale factor is negative." : kv < 1 ? "The image is smaller and the same way up, so the scale factor is a positive fraction." : "The image is bigger and the same way up, so the scale factor is positive.",
        `Join each vertex to its image with a straight line (ray). The lines all meet at the centre ${pt(C)}.`,
        `Check: ${pt(C)} + ${kv < 0 ? `(${kS})` : kS} × ${cv(sub(A[0], C))} = ${pt(B[0])}. ✓`,
      ];
      const diagram = gridSvg([{ pts: A, fill: "#c7d2fe", label: "A" }, { pts: B, fill: "#fde68a", label: "B" }], `Grid with triangle A at ${A.map(pt).join(", ")} and its enlargement B at ${B.map(pt).join(", ")}.`);
      const stem = `Triangle A has vertices ${A.map(pt).join(", ")}. Triangle A is enlarged to give triangle B with vertices ${B.map(pt).join(", ")} (in the same order).`;
      if (mode === "sf") {
        return {
          prompt: `${stem} Find the scale factor of the enlargement.`,
          diagram,
          answer: k[1] === 1 ? { type: "number", value: k[0], display: kS } : { type: "fraction", n: k[0], d: k[1], display: kS },
          solution: sol.slice(0, 2),
          hint: "Divide an image length by the matching object length. Then ask: is B the same way up, or upside down?",
          traps: numTraps(clean(kv), [
            [Math.abs(kv), "Right size, wrong sign — B is upside down on the other side of the centre, so the scale factor is negative."],
            [1 / kv, "That's the reciprocal: scale factor = image length ÷ object length, not the other way round."],
          ]),
        };
      }
      return {
        prompt: `${stem} Find the coordinates of the centre of enlargement.`,
        diagram,
        answer: coordSpec(C),
        solution: sol,
        hint: "Draw lines through each vertex of A and the matching vertex of B. Where do they cross?",
        traps: pairTraps(C, [[[0, 0], "The centre isn't always the origin — rule lines through matching vertices and see where they meet."]]),
      };
    },
  },

  // 5 ------------------------------------------------------------------------
  {
    id: `${T}.combined-transformations`,
    topicId: T,
    title: "Apply one transformation after another",
    level: 2,
    guideRef: "combined-transformations",
    generate(rng, tier) {
      const pool = (): Tf[] => {
        const a = rng.nonZero(-3, 3), b = rng.nonZero(-3, 3);
        const p = rng.nonZero(-5, 5), q = rng.nonZero(-5, 5);
        const list: Tf[] = [
          mirror("y=b", 0),
          mirror("x=a", 0),
          mirror("y=x"),
          { name: "a rotation of 90° clockwise about the origin", f: (P) => rotate(P, [0, 0], "90cw"), rule: "(x, y) → (y, −x)" },
          { name: "a rotation of 180° about the origin", f: (P) => rotate(P, [0, 0], "180"), rule: "(x, y) → (−x, −y)" },
          { name: `a translation by the column vector ${cv([p, q])}`, f: (P) => add(P, [p, q]), rule: `add ${cv([p, q])}` },
        ];
        if (tier >= 2) {
          list.push(mirror("y=-x"), mirror("x=a", a), mirror("y=b", b), { name: "a rotation of 90° anticlockwise about the origin", f: (P) => rotate(P, [0, 0], "90acw"), rule: "(x, y) → (−y, x)" });
        }
        if (tier === 3) {
          const C: P2 = [rng.nonZero(-3, 3), rng.nonZero(-3, 3)];
          list.push(
            { name: `a rotation of 90° clockwise about ${pt(C)}`, f: (P) => rotate(P, C, "90cw"), rule: `rotate the vector from ${pt(C)} to the point by 90° clockwise` },
            { name: "an enlargement, scale factor −2, centre the origin", f: (P) => mul(-2, P), rule: "(x, y) → (−2x, −2y)" },
          );
        }
        return list.map((tf) => (tf.name.startsWith("the ") ? { ...tf, name: `a reflection in ${tf.name}` } : tf));
      };
      let P: P2 = [2, 3];
      let t1: Tf = mirror("y=x"), t2: Tf = mirror("y=b", 0);
      for (let i = 0; i < 200; i++) {
        const list = pool();
        const [u, v] = rng.shuffle(list).slice(0, 2);
        t1 = u;
        t2 = v;
        P = [rng.nonZero(-6, 6), rng.nonZero(-6, 6)];
        const M = t1.f(P), R = t2.f(M);
        if (same(M, P) || same(R, M) || same(R, P)) continue;
        if ([M, R].some((q) => Math.abs(q[0]) > 14 || Math.abs(q[1]) > 14)) continue;
        break;
      }
      const M = t1.f(P), R = t2.f(M), W = t1.f(t2.f(P));
      const name = rng.pick(NAMES);
      const prompt = rng.pick([
        `The point P ${pt(P)} is transformed by ${t1.name}, followed by ${t2.name}. Find the coordinates of the final image.`,
        `${name} takes a shape with a vertex at ${pt(P)} and applies ${t1.name}, then ${t2.name}. Where does the vertex end up?`,
      ]);
      return {
        prompt,
        answer: coordSpec(R),
        solution: [
          `First: ${t1.name} (${t1.rule}). ${pt(P)} → ${pt(M)}.`,
          `Then: ${t2.name} (${t2.rule}). ${pt(M)} → ${pt(R)}.`,
          `Final image: ${pt(R)}.`,
        ],
        hint: "Do them one at a time, in the order given. Write down the point after the first transformation before you do the second.",
        traps: pairTraps(R, [
          [W, "You did the transformations in the wrong order. The order matters — apply the first one named first."],
          [M, "That's only the first transformation. Now apply the second one to this point."],
        ]),
      };
    },
  },

  // 6 ------------------------------------------------------------------------
  {
    id: `${T}.single-equivalent-transformation`,
    topicId: T,
    title: "Single transformation equivalent to two (and invariant points)",
    level: 3,
    guideRef: "combined-transformations",
    generate(rng, tier) {
      const modes = tier === 1 ? (["xx", "yy", "xy"] as const) : (["xx", "yy", "xy", "rr", "refl"] as const);
      const mode = rng.pick(modes);
      if (mode === "xx" || mode === "yy") {
        let a = 1, b = 3;
        for (let i = 0; i < 50; i++) {
          a = rng.int(-4, 4);
          b = rng.int(-4, 4);
          if (a !== b) break;
        }
        if (a === b) b = a + 2;
        const L1 = mode === "xx" ? `x = ${num(a)}` : `y = ${num(a)}`;
        const L2 = mode === "xx" ? `x = ${num(b)}` : `y = ${num(b)}`;
        const s = 2 * (b - a);
        const v: P2 = mode === "xx" ? [s, 0] : [0, s];
        const wrong: P2 = mode === "xx" ? [-s, 0] : [0, -s];
        const half: P2 = mode === "xx" ? [b - a, 0] : [0, b - a];
        const co = mode === "xx" ? "x" : "y";
        return {
          prompt: `Shape A is reflected in the line ${L1} to give shape B. Shape B is then reflected in the line ${L2} to give shape C. The single transformation that maps A onto C is a translation. Write down its column vector.${VTYPE}`,
          answer: vecSpec(v),
          solution: [
            `Take a point with ${co}-coordinate ${co === "x" ? "x" : "y"}. Reflecting in ${L1} gives ${num(2 * a)} − ${co}.`,
            `Reflecting that in ${L2} gives ${num(2 * b)} − (${num(2 * a)} − ${co}) = ${co} ${s < 0 ? "−" : "+"} ${num(Math.abs(s))}.`,
            `So every point moves ${num(Math.abs(s))} ${co === "x" ? (s > 0 ? "right" : "left") : s > 0 ? "up" : "down"}: translation by ${cv(v)} — twice the gap between the mirrors.`,
          ],
          hint: "Track one point, e.g. one with coordinate 0, through both reflections. Two parallel mirrors give a translation of twice the distance between them.",
          traps: pairTraps(v, [
            [wrong, "Right size, wrong direction — the shape moves from the first mirror towards the second."],
            [half, "That's the distance between the mirrors. Two reflections move a shape TWICE that distance."],
          ], vecSpec),
        };
      }
      if (mode === "xy") {
        const a = rng.nonZero(-4, 4);
        let b = rng.nonZero(-4, 4);
        if (b === a) b = -a;
        const first = rng.bool();
        const L1 = first ? `x = ${num(a)}` : `y = ${num(b)}`;
        const L2 = first ? `y = ${num(b)}` : `x = ${num(a)}`;
        const askInv = rng.bool();
        const C: P2 = [a, b];
        return {
          prompt: askInv
            ? `Transformation T is a reflection in the line ${L1} followed by a reflection in the line ${L2}. Exactly one point is invariant under T (it maps to itself). Find its coordinates.`
            : `Shape A is reflected in the line ${L1}, then the result is reflected in the line ${L2}. This is equivalent to a rotation of 180°. Find the coordinates of the centre of this rotation.`,
          answer: coordSpec(C),
          solution: [
            `Reflect a general point (x, y) (perpendicular mirrors, so the order doesn't matter): in x = ${num(a)} it becomes (${num(2 * a)} − x, y); in y = ${num(b)} it becomes (x, ${num(2 * b)} − y). Together: (x, y) → (${num(2 * a)} − x, ${num(2 * b)} − y).`,
            `That is a rotation of 180° about the midpoint of (x, y) and its image, which is always (${num(a)}, ${num(b)}) — where the two mirrors cross.`,
            `The centre ${pt(C)} is the only invariant point.`,
          ],
          hint: "Two perpendicular mirrors make a half-turn. Which point lies on BOTH mirrors?",
          traps: pairTraps(C, [[[b, a], "Coordinates swapped: x = a is the vertical mirror, so it fixes the x-coordinate of the centre."]]),
        };
      }
      if (mode === "rr") {
        let Pc: P2 = [1, 0], Qc: P2 = [3, 2];
        for (let i = 0; i < 50; i++) {
          Pc = [rng.int(-3, 3), rng.int(-3, 3)];
          Qc = [rng.int(-3, 3), rng.int(-3, 3)];
          if (!same(Pc, Qc)) break;
        }
        if (same(Pc, Qc)) Qc = add(Pc, [2, 1]);
        const v = mul(2, sub(Qc, Pc));
        return {
          prompt: `Shape A is rotated 180° about ${pt(Pc)} to give shape B. Shape B is rotated 180° about ${pt(Qc)} to give shape C. Describe fully the single transformation that maps A onto C: it is a translation — give its column vector.${VTYPE}`,
          answer: vecSpec(v),
          solution: [
            `A half-turn about (p, q) sends (x, y) → (${"2p − x"}, ${"2q − y"}).`,
            `About ${pt(Pc)}: (x, y) → (${num(2 * Pc[0])} − x, ${num(2 * Pc[1])} − y). Then about ${pt(Qc)}: → (${num(2 * Qc[0])} − (${num(2 * Pc[0])} − x), ${num(2 * Qc[1])} − (${num(2 * Pc[1])} − y)) = (x + ${br(v[0])}, y + ${br(v[1])}).`,
            `So every point moves by ${cv(v)}: twice the vector from the first centre to the second.`,
          ],
          hint: "Track the point (0, 0) through both half-turns and see how far it moved.",
          traps: pairTraps(v, [
            [sub(Qc, Pc), "That's the vector between the centres. Two half-turns move a shape TWICE that vector."],
            [mul(-2, sub(Qc, Pc)), "Wrong direction — the shape moves from the first centre towards the second."],
          ], vecSpec),
        };
      }
      // Two mirrors through the origin → a rotation about the origin.
      const M = [
        { n: "the x-axis", ang: 0 },
        { n: "the line y = x", ang: 45 },
        { n: "the y-axis", ang: 90 },
        { n: "the line y = −x", ang: 135 },
      ];
      const [m1, m2] = rng.shuffle(M).slice(0, 2);
      const deg = (((2 * (m2.ang - m1.ang)) % 360) + 360) % 360;
      const f = (ang: number) => (P: P2): P2 => {
        const c = Math.round(Math.cos((2 * ang * Math.PI) / 180)), s = Math.round(Math.sin((2 * ang * Math.PI) / 180));
        return [z(c * P[0] + s * P[1]), z(s * P[0] - c * P[1])];
      };
      const P: P2 = [rng.nonZero(1, 5), rng.nonZero(-5, 5)];
      const I = f(m2.ang)(f(m1.ang)(P));
      return {
        prompt: `A shape is reflected in ${m1.n}, and the image is then reflected in ${m2.n}. The combined transformation is a single rotation about the origin. Find the angle of rotation, measured **anticlockwise**, in degrees (between 0° and 360°).`,
        answer: { type: "number", value: deg, display: `${deg}°` },
        solution: [
          `Track a point: ${pt(P)} → ${pt(f(m1.ang)(P))} after the first reflection → ${pt(I)} after the second.`,
          `${pt(P)} → ${pt(I)} is a turn of ${deg}° anticlockwise about the origin.`,
          `In general, two mirrors crossing at angle θ make a rotation of 2θ about the crossing point: here the mirrors are ${Math.abs(m2.ang - m1.ang)}° apart${deg !== 2 * Math.abs(m2.ang - m1.ang) ? " (measured from the first mirror to the second)" : ""}.`,
        ],
        hint: "Pick an easy point like (1, 0) or (2, 1) and follow it through both reflections. Then ask: what turn takes the start to the end?",
        traps: numTraps(deg, [[360 - deg, "Right size, wrong direction: the turn goes from the first mirror towards the second. Check by tracking a point."], [Math.abs(m2.ang - m1.ang), "That's the angle between the mirrors. The rotation is TWICE that angle."]]),
      };
    },
  },

  // 7 ------------------------------------------------------------------------
  {
    id: `${T}.column-vector-arithmetic`,
    topicId: T,
    title: "Add, subtract and scale column vectors; position vectors",
    level: 1,
    guideRef: "vector-basics",
    generate(rng, tier) {
      const mode = tier === 1 ? rng.pick(["combo", "combo", "AB"] as const) : tier === 2 ? rng.pick(["combo", "AB", "solvex"] as const) : rng.pick(["combo", "scalars", "solvex", "AB"] as const);
      const rv = (lo: number, hi: number): P2 => [rng.nonZero(lo, hi), rng.nonZero(lo, hi)];
      if (mode === "combo") {
        const a = tier === 1 ? rv(1, 6) : rv(-6, 7);
        const b = tier === 1 ? rv(1, 6) : rv(-6, 7);
        const m = tier === 1 ? rng.int(2, 4) : rng.pick([2, 3, 4, 5, -2, -3]);
        const n = tier === 1 ? rng.pick([1, 2, 3, -1]) : rng.pick([2, 3, -2, -3, -4, -1]);
        const R = add(mul(m, a), mul(n, b));
        const show = `{{${m}a ${n < 0 ? "-" : "+"} ${Math.abs(n) === 1 ? "" : Math.abs(n)}b}}`;
        return {
          prompt: `**a** = ${cv(a)} and **b** = ${cv(b)}. Work out ${show} as a column vector.${VTYPE}`,
          answer: vecSpec(R),
          solution: [
            `${m}**a** = ${cv(mul(m, a))} and ${num(n)}**b** = ${cv(mul(n, b))}.`,
            `Add the tops and add the bottoms: {{col(${m * a[0]} + ${ib(n * b[0])}, ${m * a[1]} + ${ib(n * b[1])})}} = ${cv(R)}.`,
          ],
          hint: "Multiply each component by its scalar first, then combine top with top and bottom with bottom.",
          traps: pairTraps(R, [
            [add(mul(m, a), mul(-n, b)), "Check the sign of the b term — subtracting a negative number adds."],
            [add(mul(m, a), b), `Multiply BOTH components of b by ${num(n)}.`],
          ], vecSpec),
        };
      }
      if (mode === "AB") {
        const A: P2 = [rng.int(-6, 6), rng.int(-6, 6)];
        let B: P2 = [rng.int(-6, 6), rng.int(-6, 6)];
        if (same(A, B) || B[0] === A[0] || B[1] === A[1]) B = add(A, [rng.nonZero(-5, 5) || 3, rng.nonZero(-5, 5) || -2]);
        const v = sub(B, A);
        if (rng.bool(0.35)) {
          return {
            prompt: `The point A has position vector ${cv(A)}. The vector from A to B is ${cv(v)}. Find the coordinates of B.`,
            answer: coordSpec(B),
            solution: [`The position vector of B is OB = OA + AB.`, `OB = ${cv(A)} + ${cv(v)} = ${cv(B)}, so B = ${pt(B)}.`],
            hint: "Go from O to A, then from A to B.",
            traps: pairTraps(B, [[sub(A, v), "You subtracted. To travel O → A → B, add the two vectors."]]),
          };
        }
        return {
          prompt: `A is the point ${pt(A)} and B is the point ${pt(B)}. Write →AB as a column vector.${VTYPE}`,
          answer: vecSpec(v),
          solution: [`AB = OB − OA ("end minus start").`, `= ${cv(B)} − ${cv(A)} = ${cv(v)}.`],
          hint: "Vector from A to B = (position of B) − (position of A): end minus start.",
          traps: pairTraps(v, [[sub(A, B), "That's the vector from B to A. For AB do end minus start: B − A."], [add(A, B), "Don't add the position vectors — subtract: OB − OA."]], vecSpec),
        };
      }
      if (mode === "solvex") {
        const k = rng.pick([2, 3, -2]);
        const x: P2 = rv(-5, 5);
        const a = rv(-6, 6);
        const b = add(mul(k, x), a);
        return {
          prompt: `**a** = ${cv(a)} and **b** = ${cv(b)}. The vector **x** satisfies {{${k}x + a = b}}. Find **x** as a column vector.${VTYPE}`,
          answer: vecSpec(x),
          solution: [`Rearrange like an equation: ${num(k)}**x** = **b** − **a** = ${cv(sub(b, a))}.`, `Divide each component by ${num(k)}: **x** = ${cv(x)}.`],
          hint: "Solve it like ordinary algebra: subtract a, then divide by the number in front of x.",
          traps: pairTraps(x, [[mul(1 / k, add(b, a)), "To get rid of + a, subtract a from b — don't add it."], [sub(b, a), `You still need to divide by ${num(k)}.`]], vecSpec),
        };
      }
      // scalars: m a + n b = given, solve for m and n.
      let a: P2 = [2, 1], b: P2 = [1, 3], m = 2, n = -1;
      for (let i = 0; i < 100; i++) {
        a = rv(-4, 5);
        b = rv(-4, 5);
        if (a[0] * b[1] - a[1] * b[0] === 0) continue;
        m = rng.nonZero(-4, 4);
        n = rng.nonZero(-4, 4);
        if (m === n) continue;
        break;
      }
      const R = add(mul(m, a), mul(n, b));
      return {
        prompt: `**a** = ${cv(a)}, **b** = ${cv(b)} and {{m a + n b}} = ${cv(R)}, where m and n are numbers. Find m and n. Give your answer as m, n.`,
        answer: { type: "list", values: [m, n], ordered: true, display: `m = ${num(m)}, n = ${num(n)}` },
        solution: [
          `Tops: ${num(a[0])}m + ${br(b[0])}n = ${num(R[0])}. Bottoms: ${num(a[1])}m + ${br(b[1])}n = ${num(R[1])}.`,
          `Solve these simultaneous equations (e.g. by elimination): m = ${num(m)}, n = ${num(n)}.`,
          `Check: ${num(m)}${cv(a)} + ${br(n)}${cv(b)} = ${cv(R)}. ✓`,
        ],
        hint: "Write one equation for the top components and one for the bottom components, then solve them simultaneously.",
        traps: pairTraps([m, n], [[[n, m], "Those are the right numbers in the wrong order — give m first."]], (p) => ({ type: "list", values: [p[0], p[1]], ordered: true })),
      };
    },
  },

  // 8 ------------------------------------------------------------------------
  {
    id: `${T}.magnitude`,
    topicId: T,
    title: "Magnitude of a vector (Pythagoras)",
    level: 2,
    guideRef: "vector-basics",
    generate(rng, tier) {
      const TRIPLES: P2[] = [[3, 4], [5, 12], [6, 8], [8, 15], [9, 12], [7, 24], [12, 16], [20, 21]];
      const signs = (p: P2): P2 => [rng.bool() ? p[0] : -p[0], rng.bool() ? p[1] : -p[1]];
      if (tier === 1) {
        let v = signs(rng.pick(TRIPLES));
        if (rng.bool()) v = [v[1], v[0]];
        const L = Math.hypot(v[0], v[1]);
        return {
          prompt: rng.pick([`Find the magnitude of the vector ${cv(v)}.`, `A drone flies along the displacement vector ${cv(v)} metres (east, north). How far is it from where it started, in metres?`]),
          answer: { type: "number", value: L },
          solution: [`|v| = {{sqrt(${br(v[0])}^2 + ${br(v[1])}^2)}} = {{sqrt(${v[0] ** 2} + ${v[1] ** 2})}} = {{sqrt(${L * L})}} = ${L}.`],
          hint: "The vector is the hypotenuse of a right-angled triangle with sides equal to its components.",
          traps: numTraps(L, [[L * L, "Don't forget to square-root at the end."], [Math.abs(v[0]) + Math.abs(v[1]), "Magnitude isn't the sum of the components — use Pythagoras."]]),
        };
      }
      const mode = tier === 2 ? rng.pick(["surd", "AB"] as const) : rng.pick(["combo", "findk", "AB"] as const);
      if (mode === "surd" || mode === "AB") {
        let v: P2 = [2, 4], A: P2 = [0, 0], B: P2 = [2, 4];
        for (let i = 0; i < 100; i++) {
          A = [rng.int(-5, 5), rng.int(-5, 5)];
          B = [rng.int(-6, 6), rng.int(-6, 6)];
          v = sub(B, A);
          const N = v[0] ** 2 + v[1] ** 2;
          if (v[0] === 0 || v[1] === 0) continue;
          if (Number.isInteger(Math.sqrt(N))) continue;
          if (mode === "surd" && surd(N).k === 1 && rng.bool(0.6)) continue; // favour ones that simplify
          break;
        }
        const N = v[0] ** 2 + v[1] ** 2;
        const exact = mode === "surd" || rng.bool(0.5);
        const stem = mode === "surd" ? `Find the magnitude of the vector ${cv(v)}.` : `A is the point ${pt(A)} and B is the point ${pt(B)}. Find |→AB|, the magnitude of →AB.`;
        const steps = [
          ...(mode === "AB" ? [`AB = ${cv(B)} − ${cv(A)} = ${cv(v)}.`] : []),
          `|AB| = {{sqrt(${br(v[0])}^2 + ${br(v[1])}^2)}} = {{sqrt(${N})}}.`.replace("|AB|", mode === "surd" ? "|v|" : "|AB|"),
        ];
        if (exact) {
          const { k, m } = surd(N);
          if (k > 1) steps.push(`Simplify: {{sqrt(${N}) = sqrt(${k * k} * ${m}) = ${k}sqrt(${m})}}.`);
          return {
            prompt: `${stem} Give your answer as a surd in its simplest form.`,
            answer: { type: "expression", expr: surdExpr(N), form: "surd", display: surdMarkup(N) },
            solution: steps,
            hint: "Square each component, add, then square-root. Look for a square factor to take outside the root.",
            traps: [{ spec: { type: "number", value: N }, feedback: "That's the magnitude squared — take the square root." }],
          };
        }
        const L = Math.sqrt(N);
        steps.push(`= ${s3(L)} (3 s.f.).`);
        return {
          prompt: `${stem} Give your answer correct to 3 significant figures.`,
          answer: { type: "number", value: sf3(L), tolerance: tol3(L), display: s3(L) },
          solution: steps,
          hint: "Find the column vector first, then use Pythagoras on its components.",
          traps: numTraps(sf3(L), [[N, "That's the magnitude squared — take the square root."], [Math.abs(v[0]) + Math.abs(v[1]), "Use Pythagoras, not the sum of the components."]]),
        };
      }
      if (mode === "findk") {
        const [p, q] = rng.pick(TRIPLES);
        const k = rng.bool() ? p : q;
        const other = k === p ? q : p;
        const L = Math.hypot(p, q);
        const otherS = rng.bool() ? other : -other;
        const top = rng.bool();
        const vecS = top ? `{{col(k, ${otherS})}}` : `{{col(${otherS}, k)}}`;
        return {
          prompt: `The vector ${vecS} has magnitude ${L}. Find the positive value of k.`,
          answer: { type: "number", value: k },
          solution: [`{{k^2 + ${br(otherS)}^2 = ${L}^2}}, so {{k^2 = ${L * L} - ${other * other} = ${k * k}}}.`, `k = ±${k}; the positive value is ${k}.`],
          hint: "Write Pythagoras with k in it: k² + (other component)² = (magnitude)².",
          traps: numTraps(k, [[L - other, `Magnitudes don't subtract like that — square them: k² = ${L}² − ${other}², not ${L} − ${other}.`], [k * k, "That's k² — take the square root."]]),
        };
      }
      // combo
      let a: P2 = [2, 1], b: P2 = [1, -3], m = 2, n = -1, R: P2 = [3, 5];
      for (let i = 0; i < 100; i++) {
        a = [rng.nonZero(-5, 5), rng.nonZero(-5, 5)];
        b = [rng.nonZero(-5, 5), rng.nonZero(-5, 5)];
        m = rng.pick([2, 3, -2]);
        n = rng.pick([1, -1, 2, -3]);
        R = add(mul(m, a), mul(n, b));
        const N = R[0] ** 2 + R[1] ** 2;
        if (R[0] === 0 || R[1] === 0 || Number.isInteger(Math.sqrt(N))) continue;
        break;
      }
      const N = R[0] ** 2 + R[1] ** 2;
      const Lr = Math.sqrt(N);
      const show = `{{${m}a ${n < 0 ? "-" : "+"} ${Math.abs(n) === 1 ? "" : Math.abs(n)}b}}`;
      return {
        prompt: `**a** = ${cv(a)} and **b** = ${cv(b)}. Find {{|${m}a ${n < 0 ? "-" : "+"} ${Math.abs(n) === 1 ? "" : Math.abs(n)}b|}}, the magnitude of ${show}. Give your answer correct to 3 significant figures.`,
        answer: { type: "number", value: sf3(Lr), tolerance: tol3(Lr), display: s3(Lr) },
        solution: [`${show} = ${cv(R)}.`, `Magnitude = {{sqrt(${br(R[0])}^2 + ${br(R[1])}^2) = sqrt(${N})}} = ${s3(Lr)} (3 s.f.).`],
        hint: "Work out the combined column vector first, then use Pythagoras.",
        traps: numTraps(sf3(Lr), [[sf3(m * Math.hypot(...a) + n * Math.hypot(...b)), "Magnitudes don't combine like that — find the single vector first, then its length."], [N, "Take the square root at the end."]], tol3(Lr)),
      };
    },
  },

  // 9 ------------------------------------------------------------------------
  {
    id: `${T}.vector-paths`,
    topicId: T,
    title: "Write a vector in terms of a and b (paths, midpoints, ratios)",
    level: 2,
    guideRef: "vector-geometry",
    generate(rng, tier) {
      const shape = tier === 1 ? rng.pick(["tri", "para"] as const) : rng.pick(["tri", "para", "trap"] as const);
      const RATIOS: P2[] = tier === 1 ? [[1, 1], [1, 2], [2, 1]] : [[1, 2], [2, 1], [1, 3], [3, 1], [2, 3], [3, 2], [3, 4]];
      const A_ = L(fr(1), fr(0)), B_ = L(fr(0), fr(1)), O_ = L(fr(0), fr(0));
      if (shape === "tri") {
        const [m, n] = rng.pick(RATIOS);
        const t = fr(m, m + n);
        const PN = rng.pick(["P", "X", "N", "D", "Q"]);
        const P = lAdd(A_, lMul(t, lSub(B_, A_)));
        const targets: Array<[string, Lin, string]> = [
          ["AB", lSub(B_, A_), "AB = AO + OB = −a + b."],
          [`A${PN}`, lMul(t, lSub(B_, A_)), `A${PN} is ${frShow(t)} of AB, and AB = b − a.`],
          [`O${PN}`, P, `O${PN} = OA + A${PN} = a + ${frShow(t)}(b − a).`],
          [`${PN}B`, lMul(fSub(fr(1), t), lSub(B_, A_)), `${PN}B is ${frShow(fSub(fr(1), t))} of AB, and AB = b − a.`],
          [`B${PN}`, lMul(fNeg(fSub(fr(1), t)), lSub(B_, A_)), `B${PN} goes from B back towards A: ${frShow(fSub(fr(1), t))} of BA, and BA = a − b.`],
          [`${PN}O`, lMul(fr(-1), P), `${PN}O = −O${PN}, and O${PN} = OA + A${PN} = a + ${frShow(t)}(b − a).`],
        ];
        const pool = tier === 1 ? targets.slice(0, 3) : targets.slice(1);
        const [lab, ans, why] = rng.pick(pool);
        const O: P2 = [50, 225], Ap: P2 = [165, 45], Bp: P2 = [405, 205];
        const Pp = lerp(Ap, Bp, m / (m + n));
        const diagram =
          svgOpen(460, 260, `Triangle OAB with vector a from O to A and b from O to B. ${PN} lies on AB with A${PN} to ${PN}B in the ratio ${m} to ${n}.`) +
          arrow(O, Ap, "a", 1) + arrow(O, Bp, "b", -1) + seg(Ap, Bp) + dot(O, "O", -10, 14) + dot(Ap, "A", 0, -10) + dot(Bp, "B", 12, 4) + dot(Pp, PN, 6, -12) + "</svg>";
        const steps = [why];
        if (lab === `O${PN}`) steps.push(`= a + ${frShow(t)}b − ${frShow(t)}a.`);
        steps.push(`${lab} = ${linShow(ans)}.`);
        const where = m === n ? `${PN} is the midpoint of AB` : rng.bool() ? `${PN} is the point on AB such that A${PN} : ${PN}B = ${m} : ${n}` : `${PN} lies on AB with A${PN} = ${frShow(t)} AB`;
        return {
          prompt: `OAB is a triangle with →OA = **a** and →OB = **b**. ${where}. Find →${lab} in terms of **a** and **b**. Simplify your answer.`,
          diagram,
          answer: linSpec(ans),
          solution: steps,
          hint: `Find AB first (go A → O → B). Then use the ratio: A${PN} is what fraction of AB?`,
          traps: linTraps(ans, [
            [lMul(fr(-1), ans), "Check the direction — your vector points the opposite way."],
            [lab === `O${PN}` ? lAdd(A_, lMul(fr(m, n), lSub(B_, A_))) : lMul(fr(m, n), lSub(B_, A_)), `The ratio ${m} : ${n} means A${PN} is ${frShow(t)} of AB — split AB into ${m + n} equal parts.`],
            [lAdd(A_, lMul(t, lAdd(A_, B_))), "AB is b − a, not a + b: to go from A to B you travel backwards along a."],
          ]),
        };
      }
      if (shape === "para") {
        const [m, n] = rng.pick(RATIOS);
        const t = fr(m, m + n);
        // OABC parallelogram: OA = a, OC = b, AB = b, CB = a. M midpoint of AB; N on CB with CN : NB = m : n.
        const Mv = lAdd(A_, lMul(fr(1, 2), B_));
        const Nv = lAdd(B_, lMul(t, A_));
        const targets: Array<[string, Lin, string[]]> = [
          ["AC", lSub(B_, A_), ["AC = AO + OC = −a + b."]],
          ["OB", lAdd(A_, B_), ["OB = OA + AB = a + b."]],
          ["OM", Mv, ["OM = OA + AM, and AM = {{1/2}}AB = {{1/2}}b."]],
          ["ON", Nv, [`ON = OC + CN, and CN = ${frShow(t)} CB = ${frShow(t)}a.`]],
          ["MN", lSub(Nv, Mv), [`MN = MO + ON = −OM + ON.`, `OM = ${linShow(Mv)} and ON = ${linShow(Nv)}.`]],
          ["NA", lSub(A_, Nv), [`NA = NO + OA = −ON + a, where ON = ${linShow(Nv)}.`]],
        ];
        const pool = tier === 1 ? targets.slice(0, 4) : targets.slice(2);
        const [lab, ans, steps] = rng.pick(pool);
        const O: P2 = [50, 220], Ap: P2 = [290, 220], Cp: P2 = [150, 60], Bp: P2 = [390, 60];
        const Mp = lerp(Ap, Bp, 0.5), Np = lerp(Cp, Bp, m / (m + n));
        const diagram =
          svgOpen(450, 260, `Parallelogram OABC with OA = a along the bottom and OC = b up the left side. M is the midpoint of AB and N is on CB with CN to NB in the ratio ${m} to ${n}.`) +
          arrow(O, Ap, "a", -1) + arrow(O, Cp, "b", 1) + seg(Ap, Bp) + seg(Cp, Bp) + dot(O, "O", -10, 14) + dot(Ap, "A", 10, 16) + dot(Bp, "B", 12, -6) + dot(Cp, "C", -8, -8) + dot(Mp, "M", 14, 4) + dot(Np, "N", 0, -10) + "</svg>";
        return {
          prompt: `OABC is a parallelogram with →OA = **a** and →OC = **b**. M is the midpoint of AB. N is the point on CB such that CN : NB = ${m} : ${n}. Find →${lab} in terms of **a** and **b**. Simplify your answer.`,
          diagram,
          answer: linSpec(ans),
          solution: [...steps, `${lab} = ${linShow(ans)}.`],
          hint: "In a parallelogram, opposite sides are the same vector: AB = OC = b and CB = OA = a. Then plan a route.",
          traps: linTraps(ans, [
            [lMul(fr(-1), ans), "Check the direction — your vector points the opposite way."],
            [lab === "ON" ? lAdd(B_, lMul(fr(m, n), A_)) : lab === "OM" ? lAdd(A_, B_) : lSub(B_, A_), lab === "ON" ? `CN is ${frShow(t)} of CB, not ${frShow(fr(m, n))} — there are ${m + n} equal parts.` : "Look at the diagram again and follow your route one step at a time."],
          ]),
        };
      }
      // Trapezium OABC: OA = a, OC = b, CB = k a.
      const k = rng.pick([2, 3]);
      const Bv = lAdd(B_, lMul(fr(k), A_));
      const ABv = lSub(Bv, A_);
      const Mv = lAdd(A_, lMul(fr(1, 2), ABv));
      const targets: Array<[string, Lin, string[]]> = [
        ["AB", ABv, [`AB = AO + OC + CB = −a + b + ${k}a.`]],
        ["OB", Bv, [`OB = OC + CB = b + ${k}a.`]],
        ["OM", Mv, [`AB = −a + b + ${k}a = ${linShow(ABv)}.`, `OM = OA + {{1/2}}AB = a + {{1/2}}(${linShow(ABv)}).`]],
        ["MC", lSub(B_, Mv), [`OM = a + {{1/2}}AB = ${linShow(Mv)}.`, `MC = MO + OC = −OM + b.`]],
      ];
      const [lab, ans, steps] = rng.pick(targets);
      const O: P2 = [40, 215], Ap: P2 = [40 + 100, 215], Cp: P2 = [90, 70], Bp: P2 = [90 + 100 * k, 70];
      const Mp = lerp(Ap, Bp, 0.5);
      const diagram =
        svgOpen(460, 255, `Trapezium OABC with OA = a along the bottom, OC = b, and CB parallel to OA and ${k} times as long. M is the midpoint of AB.`) +
        arrow(O, Ap, "a", -1) + arrow(O, Cp, "b", 1) + seg(Ap, Bp) + seg(Cp, Bp) + dot(O, "O", -10, 14) + dot(Ap, "A", 6, 16) + dot(Bp, "B", 12, -6) + dot(Cp, "C", -8, -8) + dot(Mp, "M", 14, 4) + "</svg>";
      return {
        prompt: `OABC is a trapezium. →OA = **a**, →OC = **b** and →CB = ${k}**a**. M is the midpoint of AB. Find →${lab} in terms of **a** and **b**. Simplify your answer.`,
        diagram,
        answer: linSpec(ans),
        solution: [...steps, `${lab} = ${linShow(ans)}.`],
        hint: "Plan a route along vectors you know (OA, OC, CB). Going backwards along a vector changes its sign.",
        traps: linTraps(ans, [
          [lMul(fr(-1), ans), "Check the direction — your vector points the opposite way."],
          [lab === "AB" || lab === "OM" ? (lab === "AB" ? lAdd(lAdd(A_, B_), lMul(fr(k), A_)) : lAdd(A_, lMul(fr(1, 2), lAdd(lAdd(A_, B_), lMul(fr(k), A_))))) : O_, "Going from A back to O is −a, not +a."],
        ]),
      };
    },
  },

  // 10 -----------------------------------------------------------------------
  {
    id: `${T}.parallel-and-collinear`,
    topicId: T,
    title: "Parallel vectors and collinear points",
    level: 3,
    guideRef: "vector-geometry",
    generate(rng, tier) {
      const mode = tier === 1 ? rng.pick(["colk", "abk"] as const) : rng.pick(["colk", "abk", "collinear", "ratio"] as const);
      if (mode === "colk") {
        let p = 2, q = 3, s = 2, k = 6, r = 4;
        for (let i = 0; i < 100; i++) {
          p = rng.nonZero(-5, 6);
          q = rng.nonZero(-5, 6);
          s = rng.pick(tier === 1 ? [2, 3] : [2, 3, -2, -3, 4]);
          r = s * p;
          k = s * q;
          if (Math.abs(p) === Math.abs(q)) continue;
          break;
        }
        const top = rng.bool();
        const v1 = `{{col(${p}, ${q})}}`;
        const v2 = top ? `{{col(${r}, k)}}` : `{{col(k, ${k})}}`;
        const ans = top ? k : r;
        return {
          prompt: `The vectors ${v1} and ${v2} are parallel. Find the value of k.`,
          answer: { type: "number", value: ans },
          solution: [
            `Parallel vectors are multiples of each other: ${v2} = λ${v1}.`,
            top ? `Tops: ${num(r)} = λ × ${br(p)}, so λ = ${num(s)}.` : `Bottoms: ${num(k)} = λ × ${br(q)}, so λ = ${num(s)}.`,
            top ? `Bottoms: k = ${num(s)} × ${br(q)} = ${num(k)}.` : `Tops: k = ${num(s)} × ${br(p)} = ${num(r)}.`,
          ],
          hint: "Find the multiplier from the components you know, then use it on the other component.",
          traps: numTraps(ans, [[top ? q + (r - p) : p + (k - q), "Parallel means MULTIPLY by the same number, not add the same number."], [-ans, "Check the sign of the multiplier."]]),
        };
      }
      if (mode === "abk") {
        let u = 2, v = 3, t = 2;
        for (let i = 0; i < 100; i++) {
          u = rng.nonZero(-4, 5);
          v = rng.nonZero(-4, 5);
          t = rng.pick([2, 3, -2, 4]);
          if (Math.abs(u) !== Math.abs(v)) break;
        }
        const askA = rng.bool();
        const first = `{{${linShow(L(fr(u), fr(v))).slice(2, -2)}}}`;
        const second = askA ? `{{ka ${t * v < 0 ? "-" : "+"} ${Math.abs(t * v)}b}}` : `{{${t * u}a + kb}}`;
        const ans = askA ? t * u : t * v;
        return {
          prompt: `The vectors ${first} and ${second} are parallel. Find the value of k.`,
          answer: { type: "number", value: ans },
          solution: [
            `Parallel ⇒ the second vector is a multiple of the first: λ(${first}).`,
            askA ? `Compare the b terms: ${num(t * v)} = λ × ${br(v)}, so λ = ${num(t)}.` : `Compare the a terms: ${num(t * u)} = λ × ${br(u)}, so λ = ${num(t)}.`,
            askA ? `Then k = ${num(t)} × ${br(u)} = ${num(ans)}.` : `Then k = ${num(t)} × ${br(v)} = ${num(ans)}.`,
          ],
          hint: "If two vectors are parallel, one is a number times the other. Which term tells you that number?",
          traps: numTraps(ans, [[-ans, "Check the sign of the multiplier."], [askA ? u + t * v - v : v + t * u - u, "Parallel means MULTIPLY by the same number, not add."]]),
        };
      }
      if (mode === "collinear") {
        // OAB triangle, P on AB with AP:PB = m:n; OQ = k a + c b with O, P, Q collinear.
        const [m, n] = rng.pick([[1, 2], [2, 1], [1, 3], [3, 1], [2, 3], [3, 2]] as P2[]);
        const s = rng.pick([1, 2, 3]);
        const c = m * s; // coefficient of b
        const k = n * s;
        const O: P2 = [50, 225], Ap: P2 = [165, 45], Bp: P2 = [405, 205];
        const Pp = lerp(Ap, Bp, m / (m + n));
        const diagram =
          svgOpen(460, 260, `Triangle OAB with OA = a and OB = b, and P on AB with AP to PB in the ratio ${m} to ${n}.`) +
          arrow(O, Ap, "a", 1) + arrow(O, Bp, "b", -1) + seg(Ap, Bp) + seg(O, Pp, true) + dot(O, "O", -10, 14) + dot(Ap, "A", 0, -10) + dot(Bp, "B", 12, 4) + dot(Pp, "P", 6, -12) + "</svg>";
        const OP = L(fr(n, m + n), fr(m, m + n));
        return {
          prompt: `OAB is a triangle with →OA = **a** and →OB = **b**. P is on AB with AP : PB = ${m} : ${n}. The point Q has →OQ = k**a** + ${c === 1 ? "" : c}**b**. Given that O, P and Q lie on a straight line, find the value of k.`,
          diagram,
          answer: { type: "number", value: k },
          solution: [
            `OP = a + ${frShow(fr(m, m + n))}(b − a) = ${linShow(OP)} = ${frShow(fr(1, m + n))}(${n === 1 ? "" : n}a + ${m === 1 ? "" : m}b).`,
            `O, P, Q collinear ⇒ OQ is a multiple of OP, so OQ is a multiple of ${n === 1 ? "" : n}a + ${m === 1 ? "" : m}b.`,
            `The b coefficient is ${c} = ${s} × ${m}, so OQ = ${s}(${n === 1 ? "" : n}a + ${m === 1 ? "" : m}b) and k = ${k}.`,
          ],
          hint: "Find OP in terms of a and b first. Collinear with O means OQ must be a scalar multiple of OP.",
          traps: numTraps(k, [[m * s * m / n, `Check which part of the ratio goes with which vector: OP = ${linShow(OP)}.`], [c, "k isn't automatically the same as the b coefficient — use the ratio of the coefficients in OP."]]),
        };
      }
      // ratio: A, B, C collinear; AB = p(u a + v b), BC = q(u a + v b) → AB : BC = p : q
      let u = 1, v = 2, p = 2, q = 3;
      for (let i = 0; i < 100; i++) {
        u = rng.nonZero(-3, 4);
        v = rng.nonZero(-3, 4);
        p = rng.int(1, 4);
        q = rng.int(1, 5);
        if (gcd(Math.abs(u), Math.abs(v)) !== 1 || gcd(p, q) !== 1 || p === q) continue;
        break;
      }
      const AB = L(fr(p * u), fr(p * v)), BC = L(fr(q * u), fr(q * v));
      return {
        prompt: `→AB = ${linShow(AB)} and →BC = ${linShow(BC)}. These show that A, B and C lie on a straight line. Find the ratio AB : BC in its simplest form.`,
        answer: { type: "ratio", parts: [p, q], simplest: true, display: `${p} : ${q}` },
        solution: [
          `Take out common factors: →AB = {{${p === 1 ? "" : p}(${linShow(L(fr(u), fr(v))).slice(2, -2)})}} and →BC = {{${q === 1 ? "" : q}(${linShow(L(fr(u), fr(v))).slice(2, -2)})}}.`,
          `They are multiples of the same vector, so AB ∥ BC; they share the point B, so A, B, C lie on one straight line.`,
          `→AB = ${q === 1 ? p : `{{${p}/${q}}}`} →BC, so AB : BC = ${p} : ${q}.`,
        ],
        hint: "Factorise each vector to find the common vector inside the bracket. The numbers outside give the ratio.",
        traps: [{ spec: { type: "ratio", parts: [q, p] }, feedback: "Ratio the wrong way round — AB comes first." }],
      };
    },
  },
];
