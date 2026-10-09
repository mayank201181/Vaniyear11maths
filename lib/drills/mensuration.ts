// Procedural skill drills for "Length, Area & Volume" (mensuration).
//
// Exactness: every length is a whole number, so answers "in terms of π" are
// built as simplified rational multiples of π (piF), and calculator answers are
// rounded ONCE, at the end, from the full-precision value (sf3). sf3 rejects
// values sitting on a rounding tie so "3 s.f." is never ambiguous.
// Diagrams are drawn to scale from the actual lengths and angles.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { clean, frac, num, simplify } from "./helpers.ts";

const T = "mensuration";
const PI = Math.PI;
const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara", "Olivia", "Kenji"] as const;

type Tier = 1 | 2 | 3;
type Mode = "exact" | "3sf";

const ASK_PI = "Give your answer in terms of {{pi}}.";
const ASK_SF = "Give your answer correct to 3 significant figures.";
const ask = (m: Mode) => (m === "exact" ? ASK_PI : ASK_SF);

/** Bounded rejection loop. */
function retry(make: () => DrillItem | null): DrillItem {
  for (let i = 0; i < 800; i++) {
    const item = make();
    if (item) return item;
  }
  throw new Error("mensuration drill: could not build a valid question");
}

// ---------------------------------------------------------------------------
// Exact values (rational × π, optionally ± a whole number) and rounding
// ---------------------------------------------------------------------------

interface Ex {
  /** For the answer checker: "12pi", "10pi/3", "36-9pi". */
  expr: string;
  /** For {{ }} display: "12 pi", "10/3 pi", "36 - 9 pi". */
  tex: string;
  value: number;
  /** Coefficient of π is a whole number. */
  whole: boolean;
}

/** (n/d)π in simplest form. */
function piF(n: number, d = 1): Ex {
  const [a, b] = simplify(Math.round(n), Math.round(d));
  const value = (a / b) * PI;
  if (b === 1) return a === 1 ? { expr: "pi", tex: "pi", value, whole: true } : { expr: `${a}pi`, tex: `${a} pi`, value, whole: true };
  return { expr: a === 1 ? `pi/${b}` : `${a}pi/${b}`, tex: `${a}/${b} pi`, value, whole: false };
}

/** k + p (sign +1) or k − p (sign −1), with k a whole number. */
function withK(k: number, p: Ex, sign: 1 | -1 = 1): Ex {
  return {
    expr: `${k}${sign > 0 ? "+" : "-"}${p.expr}`,
    tex: `${k} ${sign > 0 ? "+" : "-"} ${p.tex}`,
    value: k + sign * p.value,
    whole: p.whole,
  };
}

/** p − k (π part first, for leaf-type answers). */
function minusK(p: Ex, k: number): Ex {
  return { expr: `${p.expr}-${k}`, tex: `${p.tex} - ${k}`, value: p.value - k, whole: p.whole };
}

interface R3 {
  value: number;
  /** Rounded value with its trailing zeros, e.g. "49.0". */
  text: string;
}

/** Round to 3 significant figures; null on (near) rounding ties. */
function sf3(x: number): R3 | null {
  if (!Number.isFinite(x) || x <= 0) return null;
  const e = Math.floor(Math.log10(x));
  const scale = Math.pow(10, e - 2);
  const s = x / scale;
  if (Math.abs(s - Math.floor(s) - 0.5) < 1e-5) return null;
  const v = Math.round(s);
  if (v >= 1000 || v < 100) return null;
  const value = clean(v * scale);
  const dp = Math.max(0, 2 - e);
  return { value, text: value.toFixed(dp) };
}

/** Calculator display of a long value: 6 significant figures then "…". */
function long(x: number): string {
  return num(parseFloat(x.toPrecision(6))) + "…";
}

interface Ans {
  spec: AnswerSpec;
  /** How the final answer reads in the solution. */
  show: string;
}

function answerOf(E: Ex, mode: Mode, unit: string): Ans | null {
  if (mode === "exact") {
    return { spec: { type: "expression", expr: E.expr, display: `{{${E.tex}}} ${unit}`.trim() }, show: `**{{${E.tex}}} ${unit}**`.replace(" **", "**") };
  }
  const r = sf3(E.value);
  if (!r) return null;
  return {
    spec: { type: "number", value: r.value, allowFraction: false, display: `${r.text} ${unit}`.trim() },
    show: `{{${E.tex}}} = ${long(E.value)} ≈ **${r.text} ${unit}** (3 s.f.)`,
  };
}

/** Trap list builder: skips wrong values equal (or very close) to the answer or to an earlier trap. */
function trapsFor(answer: Ex, mode: Mode, cands: Array<[Ex | null, string]>): Trap[] {
  const seen: number[] = [answer.value];
  const out: Trap[] = [];
  for (const [w, feedback] of cands) {
    if (!w || !Number.isFinite(w.value) || w.value <= 0) continue;
    if (seen.some((s) => Math.abs(s - w.value) <= 0.02 * Math.max(Math.abs(s), 1e-9))) continue;
    if (mode === "exact") {
      seen.push(w.value);
      out.push({ spec: { type: "expression", expr: w.expr }, feedback });
    } else {
      const r = sf3(w.value);
      if (!r) continue;
      seen.push(w.value);
      out.push({ spec: { type: "number", value: r.value }, feedback });
    }
  }
  return out;
}

/** Number traps for plain numeric answers. */
function numTraps(answer: number, cands: Array<[number, string]>): Trap[] {
  const seen: number[] = [answer];
  const out: Trap[] = [];
  for (const [v, feedback] of cands) {
    if (!Number.isFinite(v) || v <= 0) continue;
    if (seen.some((s) => Math.abs(s - v) <= 0.005 * Math.max(Math.abs(s), 1e-9))) continue;
    seen.push(v);
    out.push({ spec: { type: "number", value: clean(v) }, feedback });
  }
  return out;
}


// ---------------------------------------------------------------------------
// Diagrams (inline SVG, white background, to scale)
// ---------------------------------------------------------------------------

const F = (n: number) => n.toFixed(1);
const TXT = 'font-size="13" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke"';
const STROKE = 'stroke="#1f2937" stroke-width="2"';
const DASH = 'stroke="#334155" stroke-width="1.3" stroke-dasharray="5 4"';
const FILL = "#c7d2fe";

function svg(w: number, h: number, aria: string, body: string): string {
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}"><rect x="0" y="0" width="${w}" height="${h}" fill="#ffffff"/>${body}</svg>`;
}

function label(x: number, y: number, s: string, anchor: "start" | "middle" | "end" = "middle"): string {
  return `<text x="${F(x)}" y="${F(y)}" ${TXT} text-anchor="${anchor}">${s}</text>`;
}

function rightMark(x: number, y: number, dx: number, dy: number): string {
  // Small square at (x, y) opening towards (dx, dy) (each ±1).
  const s = 10;
  return `<path d="M${F(x + dx * s)},${F(y)} L${F(x + dx * s)},${F(y + dy * s)} L${F(x)},${F(y + dy * s)}" fill="none" stroke="#334155" stroke-width="1.2"/>`;
}

/** Sector of angle th (degrees), opening upwards. */
function sectorSvg(th: number, rLabel: string, thLabel: string, opts: { diameter?: boolean } = {}): string {
  const cx = 160, cy = th > 180 ? 140 : 190, R = th > 180 ? 105 : 130;
  const a0 = ((90 - th / 2) * PI) / 180, a1 = ((90 + th / 2) * PI) / 180;
  const P = (a: number, r = R): [number, number] => [cx + r * Math.cos(a), cy - r * Math.sin(a)];
  const [x0, y0] = P(a0), [x1, y1] = P(a1);
  const large = th > 180 ? 1 : 0;
  let body = `<path d="M${cx},${cy} L${F(x0)},${F(y0)} A${R},${R} 0 ${large} 0 ${F(x1)},${F(y1)} Z" fill="${FILL}" ${STROKE}/>`;
  if (opts.diameter) {
    body += label(cx, cy + 20, rLabel);
  } else {
    // Angle arc and label.
    const ar = 26;
    const [ax0, ay0] = P(a0, ar), [ax1, ay1] = P(a1, ar);
    body += `<path d="M${F(ax0)},${F(ay0)} A${ar},${ar} 0 ${large} 0 ${F(ax1)},${F(ay1)}" fill="none" stroke="#1f2937" stroke-width="1.3"/>`;
    const lr = th < 50 ? 62 : 44;
    body += label(cx, cy - lr + 5, thLabel);
    // Radius label on the left-hand radius, pushed outwards.
    const mx = (cx + x1) / 2, my = (cy + y1) / 2;
    const na = a1 + PI / 2;
    body += label(mx + 18 * Math.cos(na), my - 18 * Math.sin(na) + 5, rLabel);
  }
  body += `<circle cx="${cx}" cy="${cy}" r="2.5" fill="#1f2937"/>`;
  return svg(320, th > 180 ? 270 : 230, `Sector of a circle with angle ${thLabel} and ${opts.diameter ? "diameter" : "radius"} ${rLabel}`, body);
}

/** Isosceles trapezium with parallel sides a (top) and b (bottom), height h. */
function trapeziumSvg(a: number, b: number, h: number, la: string, lb: string, lh: string): string {
  const s = Math.min(260 / b, 150 / h);
  const x0 = (340 - b * s) / 2, y1 = 195;
  const off = ((b - a) / 2) * s;
  const TL: [number, number] = [x0 + off, y1 - h * s], TR: [number, number] = [x0 + off + a * s, y1 - h * s];
  let body = `<path d="M${F(x0)},${y1} L${F(x0 + b * s)},${y1} L${F(TR[0])},${F(TR[1])} L${F(TL[0])},${F(TL[1])} Z" fill="${FILL}" ${STROKE}/>`;
  body += `<line x1="${F(TL[0])}" y1="${F(TL[1])}" x2="${F(TL[0])}" y2="${y1}" ${DASH}/>`;
  body += rightMark(TL[0], y1, 1, -1);
  body += label((TL[0] + TR[0]) / 2, TL[1] - 8, la);
  body += label(x0 + (b * s) / 2, y1 + 20, lb);
  body += label(TL[0] + 6, (TL[1] + y1) / 2 + 5, lh, "start");
  return svg(340, 230, `Trapezium with parallel sides ${la} and ${lb} and perpendicular height ${lh}`, body);
}

/** Parallelogram with base b, perpendicular height h and horizontal offset o (slant side sl). */
function parallelogramSvg(b: number, h: number, o: number, lb: string, lh: string, ls: string): string {
  const s = Math.min(270 / (b + o), 150 / h);
  const x0 = (340 - (b + o) * s) / 2, y1 = 195;
  const BL: [number, number] = [x0, y1], BR: [number, number] = [x0 + b * s, y1];
  const TR: [number, number] = [x0 + (b + o) * s, y1 - h * s], TL: [number, number] = [x0 + o * s, y1 - h * s];
  let body = `<path d="M${F(BL[0])},${F(BL[1])} L${F(BR[0])},${F(BR[1])} L${F(TR[0])},${F(TR[1])} L${F(TL[0])},${F(TL[1])} Z" fill="${FILL}" ${STROKE}/>`;
  body += `<line x1="${F(TL[0])}" y1="${F(TL[1])}" x2="${F(TL[0])}" y2="${y1}" ${DASH}/>`;
  body += rightMark(TL[0], y1, 1, -1);
  body += label(x0 + (b * s) / 2, y1 + 20, lb);
  body += label(TL[0] + 6, (TL[1] + y1) / 2 + 5, lh, "start");
  body += label((BL[0] + TL[0]) / 2 - 8, (BL[1] + TL[1]) / 2, ls, "end");
  return svg(340, 230, `Parallelogram with base ${lb}, slanted side ${ls} and perpendicular height ${lh}`, body);
}

/** L-shape: bottom W, left H, top a, right c (notch cut from the top right). */
function lShapeSvg(W: number, H: number, a: number, c: number, u: string): string {
  const s = Math.min(240 / W, 160 / H);
  const x0 = (340 - W * s) / 2, y1 = 200;
  const X = (x: number) => x0 + x * s, Y = (y: number) => y1 - y * s;
  const pts: Array<[number, number]> = [[0, 0], [W, 0], [W, c], [a, c], [a, H], [0, H]];
  let body = `<path d="M${pts.map(([x, y]) => `${F(X(x))},${F(Y(y))}`).join(" L")} Z" fill="${FILL}" ${STROKE}/>`;
  body += label(X(W / 2), Y(0) + 20, `${W} ${u}`);
  body += label(X(0) - 8, Y(H / 2) + 5, `${H} ${u}`, "end");
  body += label(X(a / 2), Y(H) - 8, `${a} ${u}`);
  body += label(X(W) + 8, Y(c / 2) + 5, `${c} ${u}`, "start");
  return svg(340, 230, `L-shaped floor plan: bottom ${W} ${u}, left side ${H} ${u}, top ${a} ${u}, right side ${c} ${u}. All corners are right angles.`, body);
}

/** House shape: rectangle w by h1 with an isosceles triangle on top, total height H. */
function houseSvg(w: number, h1: number, H: number, u: string): string {
  const s = Math.min(200 / w, 170 / H);
  const x0 = (340 - w * s) / 2, y1 = 205;
  const X = (x: number) => x0 + x * s, Y = (y: number) => y1 - y * s;
  let body = `<path d="M${F(X(0))},${F(Y(0))} L${F(X(w))},${F(Y(0))} L${F(X(w))},${F(Y(h1))} L${F(X(w / 2))},${F(Y(H))} L${F(X(0))},${F(Y(h1))} Z" fill="${FILL}" ${STROKE}/>`;
  body += `<line x1="${F(X(w) + 22)}" y1="${F(Y(0))}" x2="${F(X(w) + 22)}" y2="${F(Y(H))}" stroke="#334155" stroke-width="1.2"/>`;
  body += `<line x1="${F(X(w) + 16)}" y1="${F(Y(H))}" x2="${F(X(w) + 28)}" y2="${F(Y(H))}" stroke="#334155" stroke-width="1.2"/>`;
  body += `<line x1="${F(X(w) + 16)}" y1="${F(Y(0))}" x2="${F(X(w) + 28)}" y2="${F(Y(0))}" stroke="#334155" stroke-width="1.2"/>`;
  body += label(X(w) + 32, Y(H / 2) + 5, `${H} ${u}`, "start");
  body += label(X(w / 2), Y(0) + 20, `${w} ${u}`);
  body += label(X(0) - 8, Y(h1 / 2) + 5, `${h1} ${u}`, "end");
  return svg(340, 235, `Pentagon made of a rectangle ${w} ${u} wide and ${h1} ${u} tall with an isosceles triangle on top. Total height ${H} ${u}.`, body);
}

type Shade = "inscribed" | "quarter" | "annulus" | "window" | "leaf" | "corners";

function shadeSvg(kind: Shade, l1: string, l2 = "", ratio = 0.5): string {
  const x0 = 70, y0 = 20, S = 180, x1 = x0 + S, y1 = y0 + S;
  const sq = (fill: string) => `<rect x="${x0}" y="${y0}" width="${S}" height="${S}" fill="${fill}" ${STROKE}/>`;
  let body = "";
  let aria = "";
  if (kind === "inscribed") {
    body = sq(FILL) + `<circle cx="${x0 + S / 2}" cy="${y0 + S / 2}" r="${S / 2}" fill="#ffffff" ${STROKE}/>` + label(x0 + S / 2, y1 + 22, l1);
    aria = `Square of side ${l1} with a circle touching all four sides. The four corners outside the circle are shaded.`;
  } else if (kind === "quarter") {
    body = sq(FILL) + `<path d="M${x0},${y1} L${x1},${y1} A${S},${S} 0 0 0 ${x0},${y0} Z" fill="#ffffff" ${STROKE}/>` + label(x0 + S / 2, y1 + 22, l1);
    aria = `Square of side ${l1}. A quarter circle centred at the bottom left corner with radius equal to the side is unshaded; the region outside it is shaded.`;
  } else if (kind === "leaf") {
    body = sq("#ffffff") + `<path d="M${x0},${y0} A${S},${S} 0 0 1 ${x1},${y1} A${S},${S} 0 0 1 ${x0},${y0} Z" fill="${FILL}" ${STROKE}/>` + label(x0 + S / 2, y1 + 22, l1);
    aria = `Square of side ${l1}. Two quarter circles of radius ${l1}, centred at the bottom left and top right corners, overlap in a leaf shape, which is shaded.`;
  } else if (kind === "corners") {
    const r = S / 2;
    body = sq(FILL);
    body += `<path d="M${x0},${y0} L${x0 + r},${y0} A${r},${r} 0 0 1 ${x0},${y0 + r} Z" fill="#ffffff" ${STROKE}/>`;
    body += `<path d="M${x1},${y0} L${x1},${y0 + r} A${r},${r} 0 0 1 ${x1 - r},${y0} Z" fill="#ffffff" ${STROKE}/>`;
    body += `<path d="M${x1},${y1} L${x1 - r},${y1} A${r},${r} 0 0 1 ${x1},${y1 - r} Z" fill="#ffffff" ${STROKE}/>`;
    body += `<path d="M${x0},${y1} L${x0},${y1 - r} A${r},${r} 0 0 1 ${x0 + r},${y1} Z" fill="#ffffff" ${STROKE}/>`;
    body += label(x0 + S / 2, y1 + 22, l1);
    aria = `Square of side ${l1} with a quarter circle cut from each corner; each quarter circle has radius half the side. The region left in the middle is shaded.`;
  } else if (kind === "annulus") {
    const cx = 160, cy = 110, R = 95, r = R * ratio;
    body = `<circle cx="${cx}" cy="${cy}" r="${R}" fill="${FILL}" ${STROKE}/><circle cx="${cx}" cy="${cy}" r="${F(r)}" fill="#ffffff" ${STROKE}/>`;
    body += `<line x1="${cx}" y1="${cy}" x2="${cx + R}" y2="${cy}" stroke="#334155" stroke-width="1.3"/><line x1="${cx}" y1="${cy}" x2="${cx}" y2="${F(cy - r)}" stroke="#334155" stroke-width="1.3"/>`;
    body += `<circle cx="${cx}" cy="${cy}" r="2.5" fill="#1f2937"/>`;
    body += label(cx + (R + r) / 2, cy + 18, l1) + label(cx + 6, cy - r / 2 + 4, l2, "start");
    aria = `Two circles with the same centre. Outer radius ${l1}, inner radius ${l2}. The ring between them is shaded.`;
  } else {
    // Window: rectangle with a semicircle on top; width l1, rectangle height l2; ratio = h / w.
    const w = Math.min(160, 185 / (ratio + 0.5)), h = w * ratio, xa = 160 - w / 2, yb = 205;
    body = `<path d="M${xa},${yb} L${xa + w},${yb} L${xa + w},${yb - h} A${w / 2},${w / 2} 0 0 0 ${xa},${yb - h} Z" fill="${FILL}" ${STROKE}/>`;
    body += `<line x1="${xa}" y1="${F(yb - h)}" x2="${xa + w}" y2="${F(yb - h)}" ${DASH}/>`;
    body += label(160, yb + 20, l1) + label(xa - 8, yb - h / 2 + 5, l2, "end");
    aria = `Window shape: a rectangle ${l1} wide and ${l2} tall with a semicircle on top whose diameter is the top edge. The whole shape is shaded.`;
  }
  const height = kind === "window" ? 235 : kind === "annulus" ? 220 : 232;
  return svg(320, height, aria, body);
}

/** Cone with base radius r and height h (slant l). Labels may be blank. */
function coneSvg(r: number, h: number, lr: string, lh: string, ll: string): string {
  const s = Math.min(160 / h, 115 / r);
  const cx = 160, by = 196, top = by - h * s, rx = r * s, ry = Math.max(8, rx * 0.28);
  let body = `<path d="M${F(cx - rx)},${by} L${cx},${F(top)} L${F(cx + rx)},${by}" fill="${FILL}" ${STROKE}/>`;
  body += `<path d="M${F(cx - rx)},${by} A${F(rx)},${F(ry)} 0 0 0 ${F(cx + rx)},${by}" fill="${FILL}" ${STROKE}/>`;
  body += `<path d="M${F(cx - rx)},${by} A${F(rx)},${F(ry)} 0 0 1 ${F(cx + rx)},${by}" fill="none" ${DASH}/>`;
  if (lh) {
    body += `<line x1="${cx}" y1="${F(top)}" x2="${cx}" y2="${by}" ${DASH}/>` + rightMark(cx, by, 1, -1);
    body += label(cx + 6, top + (by - top) * 0.55 + 5, lh, "start");
  }
  if (lr) {
    body += `<line x1="${cx}" y1="${by}" x2="${F(cx + rx)}" y2="${by}" ${DASH}/>`;
    body += label(cx + rx / 2, by + ry + 16, lr);
  }
  if (ll) body += label(cx + rx / 2 + 10, (top + by) / 2, ll, "start");
  body += `<circle cx="${cx}" cy="${by}" r="2.5" fill="#1f2937"/>`;
  const parts = [lr && `base radius ${lr}`, lh && `vertical height ${lh}`, ll && `slant height ${ll}`].filter(Boolean).join(", ");
  return svg(320, 250, `Cone with ${parts}`, body);
}

/** Frustum from a cone of base radius R, cut at radius r; h = frustum height, h1 = removed cone height. */
function frustumSvg(R: number, r: number, h: number, h1: number, labels: { R: string; r: string; h?: string; H?: string; h1?: string }): string {
  const H = h + h1;
  const s = Math.min(200 / H, 100 / R);
  const cx = 185, by = 225, apex = by - H * s, ty = by - h * s;
  const rx = R * s, ry = Math.max(8, rx * 0.25), tx = r * s, tyr = Math.max(4, tx * 0.25);
  let body = `<path d="M${F(cx - rx)},${by} L${F(cx - tx)},${F(ty)} L${F(cx + tx)},${F(ty)} L${F(cx + rx)},${by}" fill="${FILL}" ${STROKE}/>`;
  body += `<path d="M${F(cx - rx)},${by} A${F(rx)},${F(ry)} 0 0 0 ${F(cx + rx)},${by}" fill="${FILL}" ${STROKE}/>`;
  body += `<path d="M${F(cx - rx)},${by} A${F(rx)},${F(ry)} 0 0 1 ${F(cx + rx)},${by}" fill="none" ${DASH}/>`;
  body += `<ellipse cx="${cx}" cy="${F(ty)}" rx="${F(tx)}" ry="${F(tyr)}" fill="#e0e7ff" ${STROKE}/>`;
  // Removed cone, dashed.
  body += `<path d="M${F(cx - tx)},${F(ty)} L${cx},${F(apex)} L${F(cx + tx)},${F(ty)}" fill="none" ${DASH}/>`;
  body += `<line x1="${cx}" y1="${by}" x2="${F(cx + rx)}" y2="${by}" ${DASH}/>` + label(cx + rx / 2, by - 6, labels.R);
  body += `<line x1="${cx}" y1="${F(ty)}" x2="${F(cx + tx)}" y2="${F(ty)}" stroke="#334155" stroke-width="1.3"/>` + label(cx + tx / 2, ty - tyr - 5, labels.r);
  if (labels.h) {
    body += `<line x1="${F(cx - rx - 22)}" y1="${by}" x2="${F(cx - rx - 22)}" y2="${F(ty)}" stroke="#334155" stroke-width="1.2"/>`;
    body += `<line x1="${F(cx - rx - 28)}" y1="${F(ty)}" x2="${F(cx - rx - 16)}" y2="${F(ty)}" stroke="#334155" stroke-width="1.2"/><line x1="${F(cx - rx - 28)}" y1="${by}" x2="${F(cx - rx - 16)}" y2="${by}" stroke="#334155" stroke-width="1.2"/>`;
    body += label(cx - rx - 32, (by + ty) / 2 + 5, labels.h, "end");
  }
  if (labels.H) {
    body += `<line x1="${F(cx + rx + 22)}" y1="${by}" x2="${F(cx + rx + 22)}" y2="${F(apex)}" stroke="#334155" stroke-width="1.2"/>`;
    body += `<line x1="${F(cx + rx + 16)}" y1="${F(apex)}" x2="${F(cx + rx + 28)}" y2="${F(apex)}" stroke="#334155" stroke-width="1.2"/><line x1="${F(cx + rx + 16)}" y1="${by}" x2="${F(cx + rx + 28)}" y2="${by}" stroke="#334155" stroke-width="1.2"/>`;
    body += label(cx + rx + 32, (by + apex) / 2 + 5, labels.H, "start");
  }
  if (labels.h1) {
    body += `<line x1="${cx}" y1="${F(apex)}" x2="${cx}" y2="${F(ty)}" ${DASH}/>`;
    body += label(cx + 5, (apex + ty) / 2 + 12, labels.h1, "start");
  }
  const parts = [`base radius ${labels.R}`, `top radius ${labels.r}`, labels.h && `frustum height ${labels.h}`, labels.H && `original cone height ${labels.H}`, labels.h1 && `removed cone height ${labels.h1}`].filter(Boolean).join(", ");
  return svg(370, 255, `Frustum of a cone, shaded, with the removed top cone shown dashed: ${parts}`, body);
}

// ---------------------------------------------------------------------------
// Shared number pools
// ---------------------------------------------------------------------------

/** Pythagorean triples (a, b, c) with a² + b² = c². */
const TRIPLES: Array<[number, number, number]> = [
  [3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17], [12, 16, 20], [7, 24, 25], [15, 20, 25], [10, 24, 26], [20, 21, 29],
];

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// ===========================================================================
// Drills
// ===========================================================================

// --- 1. Arc length and sector area -----------------------------------------

function sectorForward(rng: Rng, tier: Tier): DrillItem | null {
  const kind = rng.pick(["arc", "area"] as const);
  let th: number, r: number, mode: Mode;
  if (tier === 1) {
    th = rng.pick([30, 45, 60, 72, 90, 120, 135, 150, 240, 270, 300]);
    r = rng.int(2, 12);
    mode = "exact";
  } else {
    th = 5 * rng.int(4, 68);
    if ([90, 180, 270].includes(th)) return null;
    r = rng.int(3, 20);
    mode = rng.bool(0.6) ? "3sf" : "exact";
  }
  const A = kind === "arc" ? piF(th * r, 180) : piF(th * r * r, 360);
  if (tier === 1 && !A.whole) return null;
  const ctx = tier === 1 ? 0 : rng.int(0, 2);
  let u = "cm";
  let prompt: string;
  let diagram: string | undefined;
  if (ctx === 1 && kind === "area") {
    u = "m";
    prompt = `A garden sprinkler sprays water up to ${r} m and turns through an angle of ${th}°, so it waters a sector of a circle. Work out the area of grass it waters. ${ask(mode)}`;
  } else if (ctx === 1 && kind === "arc" && th < 180) {
    prompt = `The tip of a pendulum ${r} cm long swings through an angle of ${th}°. Work out the length of the arc the tip travels along. ${ask(mode)}`;
  } else if (ctx === 2 && th <= 90 && r >= 8) {
    const who = rng.pick(NAMES);
    prompt = `${who} cuts a slice from a round vegetarian pizza of radius ${r} cm. The slice is a sector with angle ${th}°. Work out the ${kind === "arc" ? "length of the curved crust edge of the slice" : "area of the top of the slice"}. ${ask(mode)}`;
  } else {
    prompt = `The diagram shows a sector of a circle with radius ${r} cm and angle ${th}°. Work out the ${kind === "arc" ? "arc length" : "area"} of the sector. ${ask(mode)}`;
    diagram = sectorSvg(th, `${r} cm`, `${th}°`);
  }
  const unit = kind === "arc" ? u : `${u}²`;
  const ans = answerOf(A, mode, unit);
  if (!ans) return null;
  const fr = frac(th, 360);
  const solution =
    kind === "arc"
      ? [
          `The sector is ${fr} of a full circle (${th}° out of 360°).`,
          `Full circumference = {{2 * pi * ${r}}} = {{${2 * r} pi}} ${u}.`,
          `Arc length = ${fr} × {{${2 * r} pi}} = ${ans.show}${mode === "exact" ? "." : ""}`,
        ]
      : [
          `The sector is ${fr} of a full circle (${th}° out of 360°).`,
          `Full circle area = {{pi * ${r}^2}} = {{${r * r} pi}} ${u}².`,
          `Sector area = ${fr} × {{${r * r} pi}} = ${ans.show}${mode === "exact" ? "." : ""}`,
        ];
  const traps =
    kind === "arc"
      ? trapsFor(A, mode, [
          [piF(th * r * r, 360), "That's the sector AREA (it uses r²). Arc length is a fraction of the circumference, 2πr."],
          [piF(th * r, 360), "You used πr — the circumference is 2πr (or πd), so the arc is twice that."],
          [piF(2 * r), "That's the whole circumference — multiply by the fraction of the circle, θ/360."],
        ])
      : trapsFor(A, mode, [
          [piF(th * r, 180), "That's the ARC LENGTH. Sector area is a fraction of πr²."],
          [piF(r * r), "That's the whole circle — multiply by θ/360."],
          [piF(th * 4 * r * r, 360), "You used the diameter in πr² — square the RADIUS."],
        ]);
  return { prompt, answer: ans.spec, solution, hint: `What fraction of the whole circle is ${th}°? Take that fraction of the ${kind === "arc" ? "circumference" : "area"}.`, traps, diagram };
}

function sectorReverse(rng: Rng): DrillItem | null {
  const t = rng.int(0, 2);
  const th = 5 * rng.int(4, 68);
  const r = rng.int(3, 18);
  if (t === 0) {
    const L = piF(th * r, 180);
    return {
      prompt: `A sector of a circle has radius ${r} cm and arc length {{${L.tex}}} cm. Work out the angle of the sector, in degrees.`,
      answer: { type: "number", value: th, display: `${th}°` },
      solution: [
        `Arc length = {{theta/360}} × {{2 pi r}}, so {{theta/360}} × {{2 pi * ${r}}} = {{${L.tex}}}.`,
        `{{theta/360}} × {{${2 * r} pi}} = {{${L.tex}}}, so {{theta/360}} = {{${L.tex}}} ÷ {{${2 * r} pi}} = ${frac(th, 360)}.`,
        `θ = ${frac(th, 360)} × 360 = **${th}°**.`,
      ],
      hint: "Write the arc-length formula with θ unknown, then the π's cancel.",
      traps: numTraps(th, [[th * 2 <= 360 ? th * 2 : NaN, "You used πr instead of 2πr for the circumference."]]),
    };
  }
  if (t === 1) {
    const A = piF(th * r * r, 360);
    return {
      prompt: `A sector of a circle has radius ${r} cm and area {{${A.tex}}} cm². Work out the angle of the sector, in degrees.`,
      answer: { type: "number", value: th, display: `${th}°` },
      solution: [
        `Sector area = {{theta/360}} × {{pi r^2}}, so {{theta/360}} × {{${r * r} pi}} = {{${A.tex}}}.`,
        `{{theta/360}} = {{${A.tex}}} ÷ {{${r * r} pi}} = ${frac(th, 360)}.`,
        `θ = ${frac(th, 360)} × 360 = **${th}°**.`,
      ],
      hint: "Set up θ/360 × πr² = the given area and solve for θ.",
      traps: numTraps(th, [[(th * r) / 2 <= 360 ? (th * r) / 2 : NaN, "You used the arc-length formula 2πr — this is an AREA, so use πr²."]]),
    };
  }
  const A = piF(th * r * r, 360);
  return {
    prompt: `A sector of a circle has angle ${th}° and area {{${A.tex}}} cm². Work out the radius of the sector, in cm.`,
    answer: { type: "number", value: r, display: `${r} cm` },
    solution: [
      `{{${th}/360}} × {{pi r^2}} = {{${A.tex}}}.`,
      `Divide by π and multiply by {{360/${th}}}: {{r^2}} = ${r * r}.`,
      `r = {{sqrt(${r * r})}} = **${r} cm**.`,
    ],
    hint: "Set up the sector-area equation; you'll reach r², so finish with a square root.",
    traps: numTraps(r, [[r * r, "That's r² — take the square root to get the radius."]]),
    diagram: sectorSvg(th, "r cm", `${th}°`),
  };
}

// --- 2. Perimeter (and area) of semicircles and sectors -----------------------

function semicircleItem(rng: Rng, mode: Mode): DrillItem | null {
  const d = 2 * rng.int(2, 15);
  const r = d / 2;
  const kind = rng.pick(["perimeter", "area"] as const);
  const ctx = rng.int(0, 2);
  const u = ctx === 0 ? "cm" : "m";
  const E = kind === "perimeter" ? withK(d, piF(r)) : piF(r * r, 2);
  const unit = kind === "perimeter" ? u : `${u}²`;
  const ans = answerOf(E, mode, unit);
  if (!ans) return null;
  const what = ctx === 0 ? "the semicircle" : ctx === 1 ? "the flower bed" : "the stage";
  const intro =
    ctx === 0
      ? `The diagram shows a semicircle with diameter ${d} cm.`
      : ctx === 1
        ? `A flower bed in the Botanic Gardens is a semicircle with diameter ${d} m.`
        : `A school stage is a semicircle with a straight front edge of ${d} m.`;
  const q = kind === "perimeter" ? `Work out the perimeter of ${what}.` : `Work out the area of ${what}.`;
  const solution =
    kind === "perimeter"
      ? [
          `Curved part = half the circumference = {{1/2}} × {{pi * ${d}}} = {{${piF(r).tex}}} ${u}.`,
          `Add the straight edge (the diameter, ${d} ${u}).`,
          `Perimeter = ${ans.show}${mode === "exact" ? "." : ""}`,
        ]
      : [`Radius = ${d} ÷ 2 = ${r} ${u}.`, `Area = {{1/2}} × {{pi * ${r}^2}} = ${ans.show}${mode === "exact" ? "." : ""}`];
  const traps =
    kind === "perimeter"
      ? trapsFor(E, mode, [
          [piF(r), "That's just the curved edge — a perimeter goes all the way round, so add the diameter."],
          [withK(d, piF(d)), "You used the whole circumference. A semicircle has half of it."],
          [withK(d, piF(d, 2 * 2)), "Half the circumference is {{1/2}} × π × diameter — check you used d, not r."],
        ])
      : trapsFor(E, mode, [
          [piF(d * d, 2), "You squared the diameter — use the radius in πr²."],
          [piF(r * r), "That's the whole circle — a semicircle is half of it."],
          [withK(d, piF(r)), "That's the perimeter, not the area."],
        ]);
  return {
    prompt: `${intro} ${q} ${ask(mode)}`,
    answer: ans.spec,
    solution,
    hint: kind === "perimeter" ? "Perimeter = curved edge + straight edge." : "Find the radius first; a semicircle is half of πr².",
    traps,
    diagram: ctx === 0 ? sectorSvg(180, `${d} cm`, "180°", { diameter: true }) : undefined,
  };
}

function sectorPerimeterItem(rng: Rng, mode: Mode): DrillItem | null {
  const th = 5 * rng.int(4, 64);
  if ([90, 180].includes(th)) return null;
  const r = rng.int(3, 20);
  const arc = piF(th * r, 180);
  const E = withK(2 * r, arc);
  const ans = answerOf(E, mode, "cm");
  if (!ans) return null;
  const fr = frac(th, 360);
  return {
    prompt: `The diagram shows a sector of a circle, radius ${r} cm, angle ${th}°. Work out the perimeter of the sector. ${mode === "exact" ? "Give your answer in the form {{a + b pi}}." : ASK_SF}`,
    answer: ans.spec,
    solution: [
      `Arc length = ${fr} × {{2 pi * ${r}}} = {{${arc.tex}}} cm.`,
      `The perimeter also includes the two radii: 2 × ${r} = ${2 * r} cm.`,
      `Perimeter = ${ans.show}${mode === "exact" ? "." : ""}`,
    ],
    hint: "The boundary of a sector is the arc PLUS two straight radii.",
    traps: trapsFor(E, mode, [
      [arc, "That's only the arc — the perimeter includes the two radii as well."],
      [withK(r, arc), "A sector has TWO straight edges (two radii), not one."],
      [withK(2 * r, piF(th * r * r, 360)), "You used the sector area formula for the curved edge — the arc comes from 2πr."],
    ]),
    diagram: sectorSvg(th, `${r} cm`, `${th}°`),
  };
}

function perimeterReverse(rng: Rng): DrillItem | null {
  if (rng.bool(0.5)) {
    const th = rng.pick([30, 36, 40, 45, 60, 72, 80, 90, 108, 120, 135, 144, 150, 160]);
    const r = rng.int(3, 24);
    const arc = piF(th * r, 180);
    const E = withK(2 * r, arc);
        return {
      prompt: `A sector of a circle has angle ${th}° and perimeter {{${E.tex}}} cm. Work out the radius of the sector, in cm.`,
      answer: { type: "number", value: r, display: `${r} cm` },
      solution: [
        `Perimeter = 2r + {{${th}/360}} × {{2 pi r}} = 2r + {{${piF(th, 180).tex} r}}.`,
        `Match this with {{${E.tex}}}: the whole-number part gives 2r = ${2 * r} (and the π part agrees).`,
        `r = **${r} cm**.`,
      ],
      hint: "Write the perimeter as 2r + (arc length) with r unknown, then compare the parts without π.",
      traps: numTraps(r, [[2 * r, "2r is the two radii together — the radius is half of that."]]),
      diagram: sectorSvg(th, "r cm", `${th}°`),
    };
  }
  const r = rng.int(3, 15);
  const A = piF(r * r, 2);
  const P = withK(2 * r, piF(r));
  return {
    prompt: `A semicircle has area {{${A.tex}}} cm². Work out its perimeter. Give your answer in the form {{a + b pi}}.`,
    answer: { type: "expression", expr: P.expr, display: `{{${P.tex}}} cm` },
    solution: [
      `{{1/2 pi r^2}} = {{${A.tex}}}, so {{r^2}} = ${r * r} and r = ${r} cm.`,
      `Curved edge = {{1/2}} × {{2 pi * ${r}}} = {{${piF(r).tex}}} cm; straight edge = diameter = ${2 * r} cm.`,
      `Perimeter = **{{${P.tex}}} cm**.`,
    ],
    hint: "Work backwards from the area to find r first.",
    traps: [
      { spec: { type: "expression" as const, expr: piF(r).expr }, feedback: "That's only the curved edge — add the diameter." },
      { spec: { type: "expression" as const, expr: withK(2 * r, piF(2 * r)).expr }, feedback: "You used a whole circumference for the curved edge — a semicircle has half." },
    ].filter((tr) => tr.spec.expr !== P.expr),
  };
}

// --- 3. Areas of 2D shapes --------------------------------------------------------

function areas2d(rng: Rng, tier: Tier): DrillItem | null {
  const t = tier === 1 ? rng.int(0, 1) : tier === 2 ? rng.int(1, 3) : rng.int(3, 5);
  const u0 = rng.pick(["cm", "m"] as const);
  // Rooms and sheds are always measured in metres.
  const u = t === 2 || t === 4 ? "m" : u0;
  if (t === 0) {
    // Trapezium.
    const a = rng.int(2, 14), b = rng.int(a + 2, 20), h = rng.int(2, 14);
    const A = clean(((a + b) * h) / 2);
    return {
      prompt: `The diagram shows a trapezium. The parallel sides are ${a} ${u} and ${b} ${u}, and the perpendicular height is ${h} ${u}. Work out the area of the trapezium, in ${u}².`,
      answer: { type: "number", value: A, display: `${num(A)} ${u}²` },
      solution: [`Area = {{1/2}}(a + b)h`, `= {{1/2}} × (${a} + ${b}) × ${h} = {{1/2}} × ${a + b} × ${h}`, `= **${num(A)} ${u}²**`],
      hint: "Average the two parallel sides, then multiply by the height.",
      traps: numTraps(A, [[(a + b) * h, "You forgot to halve — the formula is ½(a + b)h."], [a * b * h, "Add the parallel sides, don't multiply everything."]]),
      diagram: trapeziumSvg(a, b, h, `${a} ${u}`, `${b} ${u}`, `${h} ${u}`),
    };
  }
  if (t === 1) {
    // Parallelogram with a slanted side shown (Pythagorean triple).
    const [p, q, c] = rng.pick(TRIPLES.slice(0, 6));
    const vertFirst = rng.bool();
    const h = vertFirst ? p : q, o = vertFirst ? q : p;
    const b = rng.int(Math.max(4, o), 22);
    const A = b * h;
    return {
      prompt: `The diagram shows a parallelogram with base ${b} ${u}, slanted side ${c} ${u} and perpendicular height ${h} ${u}. Work out its area, in ${u}².`,
      answer: { type: "number", value: A, display: `${A} ${u}²` },
      solution: [`Area of a parallelogram = base × PERPENDICULAR height.`, `= ${b} × ${h} = **${A} ${u}²** (the slanted side ${c} ${u} is not needed).`],
      hint: "Which length is at right angles to the base?",
      traps: numTraps(A, [[b * c, "The slanted side isn't the height — use the perpendicular height."], [(b * h) / 2, "That formula is for a triangle — a parallelogram is base × height."]]),
      diagram: parallelogramSvg(b, h, o, `${b} ${u}`, `${h} ${u}`, `${c} ${u}`),
    };
  }
  if (t === 2) {
    // L-shape.
    const W = rng.int(6, 20), H = rng.int(6, 18), a = rng.int(2, W - 2), c = rng.int(2, H - 2);
    const A = W * H - (W - a) * (H - c);
    const who = rng.pick(NAMES);
    return {
      prompt: `${who}'s bedroom floor is the L-shape in the diagram (all corners are right angles). Work out the area of the floor, in ${u}².`,
      answer: { type: "number", value: A, display: `${A} ${u}²` },
      solution: [
        `Split into two rectangles: bottom strip ${W} × ${c} = ${W * c} ${u}², and upper part ${a} × ${H - c} = ${a * (H - c)} ${u}² (its height is ${H} − ${c} = ${H - c}).`,
        `Total = ${W * c} + ${a * (H - c)} = **${A} ${u}²**.`,
        `Check: big rectangle ${W} × ${H} = ${W * H} minus the missing corner ${W - a} × ${H - c} = ${(W - a) * (H - c)} gives ${A}. ✓`,
      ],
      hint: "Split it into two rectangles — or take a missing corner away from a big rectangle. Work out any missing lengths first.",
      traps: numTraps(A, [[W * H, "That's the whole rectangle — subtract the missing corner."], [W * c + a * H, "Your two rectangles overlap — the upper one is only H − c tall."]]),
      diagram: lShapeSvg(W, H, a, c, u),
    };
  }
  if (t === 3) {
    // Trapezium reverse: find the height.
    const a = rng.int(3, 15), b = rng.int(a + 1, 24), h = rng.int(3, 16);
    const A = clean(((a + b) * h) / 2);
    return {
      prompt: `A trapezium has parallel sides of ${a} ${u} and ${b} ${u}. Its area is ${num(A)} ${u}². Work out its perpendicular height, in ${u}.`,
      answer: { type: "number", value: h, display: `${h} ${u}` },
      solution: [`{{1/2}} × (${a} + ${b}) × h = ${num(A)}`, `${num(clean((a + b) / 2))} × h = ${num(A)}`, `h = ${num(A)} ÷ ${num(clean((a + b) / 2))} = **${h} ${u}**`],
      hint: "Substitute into A = ½(a + b)h and solve for h.",
      traps: numTraps(h, [[clean(A / (a + b)), "You forgot the ½ when you rearranged: h = 2A ÷ (a + b)."]]),
      diagram: trapeziumSvg(a, b, h, `${a} ${u}`, `${b} ${u}`, "h"),
    };
  }
  if (t === 4) {
    // House-shaped pentagon.
    const w = 2 * rng.int(2, 9), h1 = rng.int(3, 12), H = h1 + rng.int(2, 8);
    const A = w * h1 + (w * (H - h1)) / 2;
    return {
      prompt: `The diagram shows the end wall of a garden shed: a rectangle with an isosceles triangle on top. Work out the area of the wall, in ${u}².`,
      answer: { type: "number", value: A, display: `${num(A)} ${u}²` },
      solution: [
        `Rectangle: ${w} × ${h1} = ${w * h1} ${u}².`,
        `Triangle: height ${H} − ${h1} = ${H - h1}, so area = {{1/2}} × ${w} × ${H - h1} = ${num((w * (H - h1)) / 2)} ${u}².`,
        `Total = **${num(A)} ${u}²**.`,
      ],
      hint: "Split into a rectangle and a triangle. The triangle's height is NOT the full height.",
      traps: numTraps(A, [[w * h1 + (w * H) / 2, "The triangle's height is the total height MINUS the rectangle's height."], [w * h1 + w * (H - h1), "Triangle area is ½ × base × height."]]),
      diagram: houseSvg(w, h1, H, u),
    };
  }
  // t === 5: algebraic trapezium.
  const x = rng.int(3, 14), k = rng.int(2, 9), h = rng.pick([2, 4, 6, 8, 10]), dbl = rng.bool();
  const b = dbl ? 2 * x + k : x + k;
  const A = ((x + b) * h) / 2;
  const sumTxt = dbl ? `3x + ${k}` : `2x + ${k}`;
  return {
    prompt: `A trapezium has parallel sides x cm and ${dbl ? `(2x + ${k})` : `(x + ${k})`} cm, and perpendicular height ${h} cm. Its area is ${A} cm². Work out the value of x.`,
    answer: { type: "number", value: x },
    solution: [
      `{{1/2}} × (${sumTxt}) × ${h} = ${A}`,
      `${h / 2}(${sumTxt}) = ${A}, so ${sumTxt} = ${A / (h / 2)}`,
      `${dbl ? 3 : 2}x = ${A / (h / 2) - k}, so **x = ${x}**.`,
    ],
    hint: "Write an equation using A = ½(a + b)h, then solve it.",
    traps: numTraps(x, [[b, `That's the longer parallel side — the question asks for x.`]]),
    diagram: trapeziumSvg(x, b, h, "x cm", dbl ? `(2x + ${k}) cm` : `(x + ${k}) cm`, `${h} cm`),
  };
}

// --- 4. Shaded areas with circles ---------------------------------------------------

function shadedItem(rng: Rng, tier: Tier): DrillItem | null {
  const pool: Shade[] = tier === 1 ? ["inscribed", "annulus"] : tier === 2 ? ["inscribed", "quarter", "annulus", "window"] : ["leaf", "corners", "window", "quarter"];
  const kind = rng.pick(pool);
  const mode: Mode = tier === 1 ? "exact" : rng.bool(0.5) ? "exact" : "3sf";
  const exactAsk = "Give your answer in terms of {{pi}}.";
  let E: Ex, prompt: string, solution: string[], cands: Array<[Ex | null, string]>, diagram: string, hint: string;
  if (kind === "inscribed") {
    const r = rng.int(2, 12), s = 2 * r;
    E = withK(s * s, piF(r * r), -1);
    prompt = `A circle fits exactly inside a square of side ${s} cm, touching all four sides. Work out the shaded area (the square outside the circle), in cm².`;
    solution = [`The circle's diameter is the side, ${s} cm, so its radius is ${r} cm.`, `Square: {{${s}^2}} = ${s * s} cm². Circle: {{pi * ${r}^2}} = {{${r * r} pi}} cm².`];
    cands = [[withK(s * s, piF(s * s), -1), "The radius is HALF the side of the square."], [withK(s * s, piF(2 * r), -1), "You subtracted the circumference — you need the circle's AREA, πr²."]];
    diagram = shadeSvg("inscribed", `${s} cm`);
    hint = "Shaded = square − circle. What is the circle's radius?";
  } else if (kind === "annulus") {
    const R = rng.int(4, 15), r = rng.int(2, R - 1);
    E = piF(R * R - r * r);
    prompt = `A ring-shaped washer is made from a circle of radius ${R} mm with a circular hole of radius ${r} mm cut from its centre. Work out the area of the washer (shaded), in mm².`;
    solution = [`Outer circle: {{pi * ${R}^2}} = {{${R * R} pi}}. Hole: {{pi * ${r}^2}} = {{${r * r} pi}}.`];
    cands = [[piF((R - r) * (R - r)), "You can't subtract the radii first: π(R − r)² is not πR² − πr²."], [piF(R * R + r * r), "The hole is taken AWAY — subtract its area."]];
    diagram = shadeSvg("annulus", `${R} mm`, `${r} mm`, r / R);
    hint = "Area of the ring = big circle − small circle.";
  } else if (kind === "quarter") {
    const s = rng.int(2, 14);
    E = withK(s * s, piF(s * s, 4), -1);
    prompt = `The diagram shows a square of side ${s} cm. A quarter circle of radius ${s} cm is drawn from one corner. Work out the shaded area, in cm².`;
    solution = [`Square: {{${s}^2}} = ${s * s} cm².`, `Quarter circle: {{1/4}} × {{pi * ${s}^2}} = {{${piF(s * s, 4).tex}}} cm².`];
    cands = [[withK(s * s, piF(s * s), -1), "Only a QUARTER of the circle is inside the square."], [piF(s * s, 4), "That's the quarter circle itself — the shaded part is what's left of the square."]];
    diagram = shadeSvg("quarter", `${s} cm`);
    hint = "Shaded = square − quarter circle.";
  } else if (kind === "window") {
    const w = 2 * rng.int(1, 4), h = rng.int(2, 9), r = w / 2;
    E = withK(w * h, piF(r * r, 2));
    prompt = `An arched doorway in a hawker-centre wall is a rectangle ${w} m wide and ${h} m tall with a semicircle on top (the semicircle's diameter is the top of the rectangle). Work out the area of the opening, in m².`;
    solution = [`Rectangle: ${w} × ${h} = ${w * h} m².`, `Semicircle: radius ${r} m, area {{1/2}} × {{pi * ${r}^2}} = {{${piF(r * r, 2).tex}}} m².`];
    cands = [[withK(w * h, piF(r * r)), "The top is a SEMIcircle — halve πr²."], [withK(w * h, piF(w * w, 2)), "The semicircle's radius is half the width."]];
    diagram = shadeSvg("window", `${w} m`, `${h} m`, h / w);
    hint = "Split into a rectangle and a semicircle; the semicircle's diameter is the width.";
  } else if (kind === "leaf") {
    const s = rng.int(2, 14);
    E = minusK(piF(s * s, 2), s * s);
    prompt = `In a square of side ${s} cm, two quarter circles of radius ${s} cm are drawn, centred at opposite corners. Work out the area of the shaded leaf shape where they overlap, in cm².`;
    solution = [
      `Each quarter circle has area {{1/4 pi * ${s}^2}} = {{${piF(s * s, 4).tex}}} cm²; the square is ${s * s} cm².`,
      `The two quarter circles cover the whole square, with the leaf covered twice: 2 × {{${piF(s * s, 4).tex}}} = square + leaf.`,
      `Leaf = {{${piF(s * s, 2).tex}}} − ${s * s}.`,
    ];
    cands = [[withK(s * s, piF(s * s, 4), -1), "That's the square minus ONE quarter circle — the region outside one arc, not the overlap."], [piF(s * s, 2), "Two quarter circles overlap — you have counted the square's area too. Subtract it."]];
    diagram = shadeSvg("leaf", `${s} cm`);
    hint = "Add the two quarter circles: which region gets counted twice?";
  } else {
    const r = rng.int(2, 10), s = 2 * r;
    E = withK(s * s, piF(r * r), -1);
    prompt = `A square tile of side ${s} cm has a quarter circle of radius ${r} cm cut from each of its four corners. Work out the area of the tile that remains (shaded), in cm².`;
    solution = [`The four quarter circles make one whole circle of radius ${r} cm: area {{${r * r} pi}} cm².`, `Square: {{${s}^2}} = ${s * s} cm².`];
    cands = [[withK(s * s, piF(r * r, 4), -1), "There are FOUR quarter circles — together they make a whole circle."], [withK(s * s, piF(s * s), -1), "Each quarter circle has radius half the side."]];
    diagram = shadeSvg("corners", `${s} cm`);
    hint = "What do four quarter circles of the same radius make?";
  }
  const unit = kind === "annulus" ? "mm²" : kind === "window" ? "m²" : "cm²";
  const ans = answerOf(E, mode, unit);
  if (!ans) return null;
  solution = [...solution, `Shaded area = ${ans.show}${mode === "exact" ? "." : ""}`];
  return { prompt: `${prompt} ${mode === "exact" ? exactAsk : ASK_SF}`, answer: ans.spec, solution, hint, traps: trapsFor(E, mode, cands), diagram };
}

// --- 5. Volume and capacity of prisms and cylinders ------------------------------------

function prismVolume(rng: Rng, tier: Tier): DrillItem | null {
  const t = tier === 1 ? rng.int(0, 2) : tier === 2 ? rng.int(0, 4) : rng.int(4, 6);
  if (t === 0) {
    const r = rng.int(2, 12), h = rng.int(3, 25);
    const mode: Mode = tier === 1 ? "exact" : rng.bool() ? "exact" : "3sf";
    const useD = tier >= 2 && rng.bool(0.5);
    const E = piF(r * r * h);
    const ans = answerOf(E, mode, "cm³");
    if (!ans) return null;
    return {
      prompt: `A cylinder has ${useD ? `diameter ${2 * r} cm` : `radius ${r} cm`} and height ${h} cm. Work out its volume, in cm³. ${ask(mode)}`,
      answer: ans.spec,
      solution: [`${useD ? `Radius = ${2 * r} ÷ 2 = ${r} cm. ` : ""}Volume = area of circular cross-section × height = {{pi r^2 h}}.`, `= {{pi * ${r}^2 * ${h}}} = ${ans.show}${mode === "exact" ? "." : ""}`],
      hint: "Prism rule: cross-section area × length. Here the cross-section is a circle.",
      traps: trapsFor(E, mode, [
        [piF(4 * r * r * h), "You used the diameter as the radius."],
        [piF(2 * r * h), "You used 2πr (the circumference) instead of πr² (the area) for the cross-section."],
      ]),
    };
  }
  if (t === 1) {
    const [a, b] = [rng.int(3, 12), rng.int(3, 12)];
    const L = rng.int(5, 30);
    const V = clean((a * b * L) / 2);
    return {
      prompt: `A triangular prism is ${L} cm long. Its cross-section is a right-angled triangle whose two shorter sides are ${a} cm and ${b} cm. Work out the volume of the prism, in cm³.`,
      answer: { type: "number", value: V, display: `${num(V)} cm³` },
      solution: [`Cross-section area = {{1/2}} × ${a} × ${b} = ${num(clean((a * b) / 2))} cm².`, `Volume = ${num(clean((a * b) / 2))} × ${L} = **${num(V)} cm³**.`],
      hint: "Volume of a prism = area of cross-section × length.",
      traps: numTraps(V, [[a * b * L, "The cross-section is a TRIANGLE — halve base × height."]]),
    };
  }
  if (t === 2) {
    const l = 5 * rng.int(4, 20), w = 5 * rng.int(4, 12), h = 5 * rng.int(2, 10);
    const cm3 = l * w * h, L = clean(cm3 / 1000);
    const who = rng.pick(NAMES);
    return {
      prompt: `${who}'s fish-free aquarium for water plants is a cuboid ${l} cm long, ${w} cm wide and ${h} cm tall. How many litres of water does it hold when full? (1 litre = 1000 cm³)`,
      answer: { type: "number", value: L, display: `${num(L)} litres` },
      solution: [`Volume = ${l} × ${w} × ${h} = ${cm3.toLocaleString("en-GB")} cm³.`, `1 litre = 1000 cm³, so ${cm3.toLocaleString("en-GB")} ÷ 1000 = **${num(L)} litres**.`],
      hint: "Find the volume in cm³, then divide by 1000.",
      traps: numTraps(L, [[clean(cm3 / 100), "1 litre is 1000 cm³, not 100 cm³."], [cm3, "That's in cm³ — convert to litres (÷ 1000)."]]),
    };
  }
  if (t === 3) {
    // Trapezoidal prism (e.g. a ramp / swimming pool).
    const a = rng.int(1, 4), b = a + rng.int(1, 3), w = rng.int(5, 12), len = rng.int(15, 30);
    // Pool: length len, depth from a (shallow) to b (deep), width w. Cross-section is the side trapezium.
    const V = clean(((a + b) * len * w) / 2);
    return {
      prompt: `A swimming pool is ${len} m long and ${w} m wide. The depth goes evenly from ${a} m at the shallow end to ${b} m at the deep end, so its side view is a trapezium. Work out the volume of water when the pool is full, in m³.`,
      answer: { type: "number", value: V, display: `${num(V)} m³` },
      solution: [`Cross-section (the side): trapezium area = {{1/2}} × (${a} + ${b}) × ${len} = ${num(clean(((a + b) * len) / 2))} m².`, `Volume = ${num(clean(((a + b) * len) / 2))} × ${w} = **${num(V)} m³**.`],
      hint: "Which face is the constant cross-section? It's the trapezium side view; the width is the prism's length.",
      traps: numTraps(V, [[b * len * w, `The pool isn't ${b} m deep everywhere — use the trapezium side view.`], [(a + b) * len * w, "Trapezium area is ½(a + b)h — don't forget the half."]]),
    };
  }
  if (t === 4) {
    // Cylinder capacity in litres, 3 s.f.
    const r = rng.int(4, 30), h = rng.int(10, 60);
    const cm3 = PI * r * r * h;
    const R = sf3(cm3 / 1000);
    if (!R) return null;
    const ctx = rng.pick(["cylindrical rain-water barrel", "cylindrical water tank", "cylindrical stock pot for vegetable soup"]);
    const w1 = sf3(cm3 / 100), w2 = sf3(cm3);
    return {
      prompt: `A ${ctx} has internal radius ${r} cm and height ${h} cm. Work out its capacity in litres. (1 litre = 1000 cm³) ${ASK_SF}`,
      answer: { type: "number", value: R.value, allowFraction: false, display: `${R.text} litres` },
      solution: [`Volume = {{pi * ${r}^2 * ${h}}} = {{${r * r * h} pi}} = ${long(cm3)} cm³.`, `÷ 1000: ${long(cm3 / 1000)} ≈ **${R.text} litres** (3 s.f.).`],
      hint: "Volume in cm³ first (πr²h), then ÷ 1000 for litres.",
      traps: numTraps(R.value, [[w1 ? w1.value : NaN, "1 litre = 1000 cm³, not 100 cm³."], [w2 ? w2.value : NaN, "That's the volume in cm³ — divide by 1000 for litres."]]),
    };
  }
  if (t === 5) {
    // Reverse: volume k π, radius r → height h.
    const r = rng.int(2, 10), h = rng.int(3, 20);
    const V = piF(r * r * h);
    return {
      prompt: `A cylinder has radius ${r} cm and volume {{${V.tex}}} cm³. Work out its height, in cm.`,
      answer: { type: "number", value: h, display: `${h} cm` },
      solution: [`{{pi * ${r}^2 * h}} = {{${V.tex}}}`, `{{${r * r} pi h}} = {{${V.tex}}}, so h = ${r * r * h} ÷ ${r * r} = **${h} cm**.`],
      hint: "Substitute into V = πr²h; the π cancels.",
      traps: numTraps(h, [[clean((r * h) / 2), "Divide by r² (the radius squared), not 2r."], [clean(h * r), "You divided by r only — the formula has r²."]]),
    };
  }
  // t === 6: litres → height, 3 s.f.
  const r = rng.int(8, 30), litres = 5 * rng.int(2, 40);
  const h = (litres * 1000) / (PI * r * r);
  const R = sf3(h);
  if (!R) return null;
  const wrong = sf3(litres / (PI * r * r));
  const who = rng.pick(NAMES);
  return {
    prompt: `${who} pours ${litres} litres of water into an empty cylindrical tank of radius ${r} cm. How deep is the water, in cm? ${ASK_SF}`,
    answer: { type: "number", value: R.value, allowFraction: false, display: `${R.text} cm` },
    solution: [`${litres} litres = ${litres * 1000} cm³.`, `{{pi * ${r}^2 * h}} = ${litres * 1000}, so h = {{${litres * 1000}/(${r * r} pi)}} = ${long(h)}`, `≈ **${R.text} cm** (3 s.f.).`],
    hint: "Convert litres to cm³ first, then use V = πr²h with h unknown.",
    traps: numTraps(R.value, [[wrong ? wrong.value : NaN, "Convert litres to cm³ (× 1000) before you divide."]]),
  };
}

// --- 6. Surface area of prisms and cylinders ---------------------------------------

function prismSurface(rng: Rng, tier: Tier): DrillItem | null {
  const t = tier === 1 ? rng.int(0, 1) : tier === 2 ? rng.int(1, 3) : rng.int(3, 4);
  if (t === 0) {
    const l = rng.int(2, 15), w = rng.int(2, 12), h = rng.int(2, 12);
    if (l === w && w === h) return null;
    const A = 2 * (l * w + l * h + w * h);
    return {
      prompt: `A closed cardboard box is a cuboid ${l} cm by ${w} cm by ${h} cm. Work out its total surface area, in cm².`,
      answer: { type: "number", value: A, display: `${A} cm²` },
      solution: [`Three different faces: ${l} × ${w} = ${l * w}, ${l} × ${h} = ${l * h}, ${w} × ${h} = ${w * h}.`, `Each appears twice: 2 × (${l * w} + ${l * h} + ${w * h}) = **${A} cm²**.`],
      hint: "A cuboid has 6 faces in 3 matching pairs.",
      traps: numTraps(A, [[l * w + l * h + w * h, "Each face has a matching opposite face — double it."], [l * w * h, "That's the volume, not the surface area."]]),
    };
  }
  if (t === 1) {
    const r = rng.int(2, 12), h = rng.int(2, 25);
    const open = tier >= 2 && rng.bool(0.5);
    const mode: Mode = tier === 1 ? "exact" : rng.bool() ? "exact" : "3sf";
    const E = piF(open ? r * r + 2 * r * h : 2 * r * r + 2 * r * h);
    const ans = answerOf(E, mode, "cm²");
    if (!ans) return null;
    const what = open ? "an open cylindrical plant pot (it has a base but no lid)" : "a closed cylindrical tin";
    return {
      prompt: `Work out the total outside surface area of ${what} with radius ${r} cm and height ${h} cm. ${ask(mode)}`,
      answer: ans.spec,
      solution: [
        `Curved surface: unrolls to a rectangle {{2 pi r}} by h = {{2 pi * ${r} * ${h}}} = {{${2 * r * h} pi}} cm².`,
        open ? `One circular base: {{pi * ${r}^2}} = {{${r * r} pi}} cm².` : `Two circular ends: 2 × {{pi * ${r}^2}} = {{${2 * r * r} pi}} cm².`,
        `Total = ${ans.show}${mode === "exact" ? "." : ""}`,
      ],
      hint: "Curved surface (2πrh) plus the circular ends that are actually there.",
      traps: trapsFor(E, mode, [
        [piF(2 * r * h), "That's only the curved surface — add the circular end(s)."],
        [piF(open ? 2 * r * r + 2 * r * h : r * r + 2 * r * h), open ? "An open pot has only ONE circular end." : "A closed tin has TWO circular ends."],
        [piF(r * r * h), "That's the volume (πr²h)."],
      ]),
    };
  }
  if (t === 2) {
    const [a, b, c] = rng.pick(TRIPLES.slice(0, 7));
    const L = rng.int(4, 25);
    const A = a * b + (a + b + c) * L;
    return {
      prompt: `A triangular prism (a doorstop) is ${L} cm long. Its cross-section is a right-angled triangle with sides ${a} cm, ${b} cm and ${c} cm. Work out its total surface area, in cm².`,
      answer: { type: "number", value: A, display: `${A} cm²` },
      solution: [
        `Two triangular ends: 2 × {{1/2}} × ${a} × ${b} = ${a * b} cm².`,
        `Three rectangles, each ${L} cm long: (${a} + ${b} + ${c}) × ${L} = ${(a + b + c) * L} cm².`,
        `Total = **${A} cm²**.`,
      ],
      hint: "Two triangles plus three rectangles — the rectangles together are (perimeter of triangle) × length.",
      traps: numTraps(A, [[2 * a * b + (a + b + c) * L, "Each triangle is ½ × base × height — don't forget the half."], [(a * b) / 2 + (a + b + c) * L, "There are TWO triangular ends."], [a * b + (a + b) * L, "There are three rectangular faces, including the sloping one."]]),
    };
  }
  if (t === 3) {
    // Closed cylinder with diameter, 3 s.f. — or exact in terms of π.
    const d = 2 * rng.int(2, 15), h = rng.int(3, 30), r = d / 2;
    const mode: Mode = rng.bool() ? "exact" : "3sf";
    const E = piF(2 * r * r + 2 * r * h);
    const ans = answerOf(E, mode, "cm²");
    if (!ans) return null;
    return {
      prompt: `A closed cylinder has diameter ${d} cm and height ${h} cm. Work out its total surface area. ${ask(mode)}`,
      answer: ans.spec,
      solution: [`r = ${d} ÷ 2 = ${r} cm.`, `Curved: {{2 pi * ${r} * ${h}}} = {{${2 * r * h} pi}}; ends: 2 × {{pi * ${r}^2}} = {{${2 * r * r} pi}}.`, `Total = ${ans.show}${mode === "exact" ? "." : ""}`],
      hint: "Halve the diameter first. Then 2πrh + 2πr².",
      traps: trapsFor(E, mode, [
        [piF(2 * d * d + 2 * d * h), "You used the diameter as the radius."],
        [piF(2 * r * h), "Add the two circular ends."],
      ]),
    };
  }
  // t === 4: reverse — total surface area kπ, r → h.
  const r = rng.int(2, 10), h = rng.int(2, 20);
  const S = piF(2 * r * r + 2 * r * h);
  return {
    prompt: `A closed cylinder has radius ${r} cm and total surface area {{${S.tex}}} cm². Work out its height, in cm.`,
    answer: { type: "number", value: h, display: `${h} cm` },
    solution: [
      `{{2 pi r^2 + 2 pi r h}} = {{${S.tex}}}, so {{2 pi * ${r}^2}} + {{2 pi * ${r} h}} = {{${S.tex}}}.`,
      `Divide by π: ${2 * r * r} + ${2 * r}h = ${2 * r * r + 2 * r * h}.`,
      `${2 * r}h = ${2 * r * h}, so **h = ${h} cm**.`,
    ],
    hint: "Write 2πr² + 2πrh = the total, divide through by π, then solve the linear equation.",
    traps: numTraps(h, [[clean((2 * r * r + 2 * r * h) / (2 * r)), "Subtract the two circular ends (2πr²) before dividing by 2πr."]]),
  };
}

// --- 7. Volume of pyramids, cones and spheres -----------------------------------------

function coneSphereVolume(rng: Rng, tier: Tier): DrillItem | null {
  const t = tier === 1 ? rng.int(0, 2) : tier === 2 ? rng.int(0, 3) : rng.int(4, 6);
  const mode: Mode = tier === 1 ? "exact" : rng.bool(0.5) ? "exact" : "3sf";
  if (t === 0) {
    const r = rng.int(2, 12), h = rng.int(3, 24);
    if (tier === 1 && (r * r * h) % 3 !== 0) return null;
    const E = piF(r * r * h, 3);
    const ans = answerOf(E, mode, "cm³");
    if (!ans) return null;
    return {
      prompt: `A solid cone has base radius ${r} cm and vertical height ${h} cm. Work out its volume. ${ask(mode)}`,
      answer: ans.spec,
      solution: [`V = {{1/3 pi r^2 h}} (on the formula sheet).`, `= {{1/3}} × {{pi * ${r}^2 * ${h}}} = ${ans.show}${mode === "exact" ? "." : ""}`],
      hint: "A cone is one third of the cylinder with the same base and height.",
      traps: trapsFor(E, mode, [[piF(r * r * h), "That's the cylinder — a cone is {{1/3}} of it."], [piF(r * h, 3), "Square the radius: r²."]]),
      diagram: coneSvg(r, h, `${r} cm`, `${h} cm`, ""),
    };
  }
  if (t === 1) {
    const r = rng.int(2, 12);
    const hemi = rng.bool(0.4);
    if (tier === 1 && !hemi && r % 3 !== 0) return null;
    const E = hemi ? piF(2 * r * r * r, 3) : piF(4 * r * r * r, 3);
    const ans = answerOf(E, mode, "cm³");
    if (!ans) return null;
    const what = hemi ? `a solid hemisphere of radius ${r} cm` : rng.pick([`a sphere of radius ${r} cm`, `a solid steel ball of radius ${r} cm`, `a spherical glass marble of radius ${r} cm`]);
    return {
      prompt: `Work out the volume of ${what}. ${ask(mode)}`,
      answer: ans.spec,
      solution: hemi
        ? [`Sphere: {{4/3 pi r^3}}; a hemisphere is half: {{2/3 pi r^3}}.`, `= {{2/3}} × {{pi * ${r}^3}} = {{2/3}} × {{${r ** 3} pi}} = ${ans.show}${mode === "exact" ? "." : ""}`]
        : [`V = {{4/3 pi r^3}} (on the formula sheet).`, `= {{4/3}} × {{pi * ${r}^3}} = {{4/3}} × {{${r ** 3} pi}} = ${ans.show}${mode === "exact" ? "." : ""}`],
      hint: hemi ? "Half of 4/3 πr³." : "Cube the radius, then multiply by 4/3 π.",
      traps: trapsFor(E, mode, [
        [hemi ? piF(4 * r ** 3, 3) : piF(2 * r ** 3, 3), hemi ? "That's the whole sphere — a hemisphere is half." : "That's a hemisphere — a whole sphere is {{4/3 pi r^3}}."],
        [piF(4 * r * r, 3), "Cube the radius (r³), don't square it."],
        [hemi ? piF(2 * r * r) : piF(4 * r * r), "That's a surface-area formula (r²). Volume uses r³."],
      ]),
    };
  }
  if (t === 2) {
    const a = rng.int(2, 15), b = rng.bool() ? a : rng.int(2, 15), h = rng.int(3, 20);
    if (tier === 1 && (a * b * h) % 3 !== 0) return null;
    const [n, d] = simplify(a * b * h, 3);
    const base = a === b ? `a square base of side ${a} cm` : `a rectangular base ${a} cm by ${b} cm`;
    const exact = d === 1;
    const val = n / d;
    const R = sf3(val);
    if (!exact && !R) return null;
    const spec: AnswerSpec = exact ? { type: "number", value: n, display: `${n} cm³` } : { type: "number", value: R!.value, allowFraction: false, display: `${R!.text} cm³` };
    return {
      prompt: `A pyramid has ${base} and vertical height ${h} cm. Work out its volume, in cm³.${exact ? "" : " " + ASK_SF}`,
      answer: spec,
      solution: [`V = {{1/3}} × base area × height.`, `Base area = ${a} × ${b} = ${a * b} cm².`, `V = {{1/3}} × ${a * b} × ${h} = ${exact ? `**${n} cm³**` : `${long(val)} ≈ **${R!.text} cm³**`}.`],
      hint: "Any pyramid: one third of base area × height.",
      traps: numTraps(exact ? n : R!.value, [[a * b * h, "That's the prism (cuboid) — a pyramid is {{1/3}} of it."], [exact ? (a * b * h) / 2 : NaN, "It's {{1/3}}, not {{1/2}}."]]),
    };
  }
  if (t === 3) {
    // Cone with slant height given (Pythagoras).
    const [p, q, c] = rng.pick(TRIPLES);
    const k = rng.int(1, 2);
    const r = p * k, h = q * k, l = c * k;
    if (r > 30 || h > 48) return null;
    const E = piF(r * r * h, 3);
    const ans = answerOf(E, mode, "cm³");
    if (!ans) return null;
    return {
      prompt: `A cone has base radius ${r} cm and slant height ${l} cm. Work out its volume. ${ask(mode)}`,
      answer: ans.spec,
      solution: [`First the vertical height: {{h = sqrt(${l}^2 - ${r}^2)}} = {{sqrt(${l * l - r * r})}} = ${h} cm.`, `V = {{1/3}} × {{pi * ${r}^2 * ${h}}} = ${ans.show}${mode === "exact" ? "." : ""}`],
      hint: "The volume needs the VERTICAL height. Radius, height and slant make a right-angled triangle.",
      traps: trapsFor(E, mode, [[piF(r * r * l, 3), "You used the slant height — the formula needs the perpendicular height. Use Pythagoras first."]]),
      diagram: coneSvg(r, h, `${r} cm`, "", `${l} cm`),
    };
  }
  if (t === 4) {
    // Ice-cream / toy: cone + hemisphere.
    const r = rng.int(2, 9), h = rng.int(r + 2, 24);
    const E = piF(r * r * (2 * r + h), 3);
    const ans = answerOf(E, mode, "cm³");
    if (!ans) return null;
    return {
      prompt: `A wooden toy is a solid cone of base radius ${r} cm and height ${h} cm, with a solid hemisphere of radius ${r} cm stuck to its base. Work out the total volume of the toy. ${ask(mode)}`,
      answer: ans.spec,
      solution: [`Cone: {{1/3 pi * ${r}^2 * ${h}}} = {{${piF(r * r * h, 3).tex}}}.`, `Hemisphere: {{2/3 pi * ${r}^3}} = {{${piF(2 * r ** 3, 3).tex}}}.`, `Total = ${ans.show}${mode === "exact" ? "." : ""}`],
      hint: "Split the solid into parts you know, find each volume, add.",
      traps: trapsFor(E, mode, [
        [piF(r * r * h + 2 * r ** 3 * 3, 3 * 1), "Check the hemisphere: it is {{2/3 pi r^3}}."],
        [piF(r * r * h + 4 * r ** 3, 3), "That uses a whole sphere — the toy has a HEMIsphere."],
      ]),
    };
  }
  if (t === 5) {
    // Grain silo: cylinder + hemisphere roof.
    const r = rng.int(2, 8), h = rng.int(4, 20);
    const E = piF(3 * r * r * h + 2 * r ** 3, 3);
    const ans = answerOf(E, mode, "m³");
    if (!ans) return null;
    return {
      prompt: `A grain silo is a cylinder of radius ${r} m and height ${h} m with a hemispherical roof of the same radius. Work out the total volume of the silo. ${ask(mode)}`,
      answer: ans.spec,
      solution: [`Cylinder: {{pi * ${r}^2 * ${h}}} = {{${r * r * h} pi}} m³.`, `Hemisphere: {{2/3 pi * ${r}^3}} = {{${piF(2 * r ** 3, 3).tex}}} m³.`, `Total = ${ans.show}${mode === "exact" ? "." : ""}`],
      hint: "Cylinder + half a sphere.",
      traps: trapsFor(E, mode, [[piF(3 * r * r * h + 4 * r ** 3, 3), "The roof is a HEMIsphere: {{2/3 pi r^3}}."], [piF(r * r * h)  , "Don't forget the roof."]]),
    };
  }
  // t === 6: a cone and a sphere have equal volume — find the cone's height.
  const r = rng.int(2, 9), R = rng.int(1, 3) * r;
  // (1/3)πR²h = (4/3)πr³ → h = 4r³/R²
  const hNum = 4 * r ** 3, hDen = R * R;
  if (hNum % hDen !== 0) return null;
  const h = hNum / hDen;
  return {
    prompt: `A metal sphere of radius ${r} cm has the same volume as a cone of base radius ${R} cm. Work out the height of the cone, in cm.`,
    answer: { type: "number", value: h, display: `${h} cm` },
    solution: [`{{1/3 pi * ${R}^2 * h}} = {{4/3 pi * ${r}^3}}.`, `Multiply both sides by 3 and divide by π: ${R * R}h = ${4 * r ** 3}.`, `h = **${h} cm**.`],
    hint: "Set the two volume formulas equal; π and the thirds cancel.",
    traps: numTraps(h, [[h / 4, "The sphere is {{4/3}}πr³ — keep the 4."], [h * 3, "Both formulas have a third — they cancel."]]),
  };
}

// --- 8. Surface area of cones and spheres -------------------------------------------

function coneSphereSurface(rng: Rng, tier: Tier): DrillItem | null {
  const t = tier === 1 ? rng.int(0, 2) : tier === 2 ? rng.int(0, 4) : rng.int(4, 6);
  const mode: Mode = tier === 1 ? "exact" : rng.bool(0.5) ? "exact" : "3sf";
  if (t === 0) {
    const r = rng.int(2, 15);
    const E = piF(4 * r * r);
    const ans = answerOf(E, mode, "cm²");
    if (!ans) return null;
    const what = rng.pick(["a sphere", "a tennis-ball-shaped sphere", "a spherical paper lantern", "a spherical bead"]);
    return {
      prompt: `Work out the surface area of ${what} with radius ${r} cm. ${ask(mode)}`,
      answer: ans.spec,
      solution: [`Surface area of a sphere = {{4 pi r^2}} (on the formula sheet).`, `= {{4 pi * ${r}^2}} = ${ans.show}${mode === "exact" ? "." : ""}`],
      hint: "Exactly four times the area of a circle with the same radius.",
      traps: trapsFor(E, mode, [[piF(4 * r ** 3, 3), "That's the VOLUME formula (r³)."], [piF(r * r), "A sphere's surface is FOUR times πr²."]]),
    };
  }
  if (t === 1) {
    const r = rng.int(2, 15);
    const E = piF(3 * r * r);
    const ans = answerOf(E, mode, "cm²");
    if (!ans) return null;
    return {
      prompt: `Work out the total surface area of a solid hemisphere of radius ${r} cm (include the flat face). ${ask(mode)}`,
      answer: ans.spec,
      solution: [`Curved part = half of {{4 pi r^2}} = {{2 pi * ${r}^2}} = {{${2 * r * r} pi}}.`, `Flat circular face = {{pi * ${r}^2}} = {{${r * r} pi}}.`, `Total = ${ans.show}${mode === "exact" ? "." : ""}`],
      hint: "Curved half-sphere + one flat circle.",
      traps: trapsFor(E, mode, [[piF(2 * r * r), "That's just the curved surface — a SOLID hemisphere also has a flat circular face."], [piF(4 * r * r), "That's a whole sphere."]]),
    };
  }
  if (t === 2) {
    const r = rng.int(2, 12), l = rng.int(r + 2, 25);
    const E = piF(r * l);
    const ans = answerOf(E, mode, "cm²");
    if (!ans) return null;
    return {
      prompt: `A party hat is a cone (no base) with base radius ${r} cm and slant height ${l} cm. Work out the area of card in its curved surface. ${ask(mode)}`,
      answer: ans.spec,
      solution: [`Curved surface area of a cone = {{pi r l}} (on the formula sheet).`, `= {{pi * ${r} * ${l}}} = ${ans.show}${mode === "exact" ? "." : ""}`],
      hint: "Use πrl, with l the SLANT height.",
      traps: trapsFor(E, mode, [[piF(r * l + r * r), "The hat has no base — curved surface only."], [piF(2 * r * l), "It's πrl, not 2πrl."]]),
      diagram: coneSvg(r, Math.sqrt(l * l - r * r), `${r} cm`, "", `${l} cm`),
    };
  }
  if (t === 3 || t === 4) {
    // Total surface of a solid cone given vertical height (Pythagoras).
    const [p, q, c] = rng.pick(TRIPLES);
    const k = rng.int(1, 2);
    const r = p * k, h = q * k, l = c * k;
    if (r > 30 || h > 48) return null;
    const E = piF(r * l + r * r);
    const ans = answerOf(E, mode, "cm²");
    if (!ans) return null;
    return {
      prompt: `A solid cone has base radius ${r} cm and vertical height ${h} cm. Work out its total surface area. ${ask(mode)}`,
      answer: ans.spec,
      solution: [`Slant height: {{l = sqrt(${r}^2 + ${h}^2)}} = {{sqrt(${r * r + h * h})}} = ${l} cm.`, `Curved: {{pi * ${r} * ${l}}} = {{${r * l} pi}}; base: {{pi * ${r}^2}} = {{${r * r} pi}}.`, `Total = ${ans.show}${mode === "exact" ? "." : ""}`],
      hint: "πrl needs the SLANT height — find it with Pythagoras. Then add the circular base.",
      traps: trapsFor(E, mode, [[piF(r * h + r * r), "You used the vertical height in πrl — it needs the slant height l."], [piF(r * l), "A SOLID cone also has a circular base: add πr²."]]),
      diagram: coneSvg(r, h, `${r} cm`, `${h} cm`, ""),
    };
  }
  if (t === 5) {
    // Reverse: sphere surface area kπ → radius.
    const r = rng.int(2, 20);
    const S = piF(4 * r * r);
    return {
      prompt: `A sphere has surface area {{${S.tex}}} cm². Work out its radius, in cm.`,
      answer: { type: "number", value: r, display: `${r} cm` },
      solution: [`{{4 pi r^2}} = {{${S.tex}}}, so {{r^2}} = ${4 * r * r} ÷ 4 = ${r * r}.`, `r = {{sqrt(${r * r})}} = **${r} cm**.`],
      hint: "Divide by 4π, then square-root.",
      traps: numTraps(r, [[r * r, "That's r² — take the square root."], [2 * r, "Divide by 4π, not just π."]]),
    };
  }
  // t === 6: curved area kπ and radius → vertical height.
  const [p, q, c] = rng.pick(TRIPLES);
  const k = rng.int(1, 2);
  const r = p * k, h = q * k, l = c * k;
  const C = piF(r * l);
  return {
    prompt: `The curved surface area of a cone is {{${C.tex}}} cm² and its base radius is ${r} cm. Work out the vertical height of the cone, in cm.`,
    answer: { type: "number", value: h, display: `${h} cm` },
    solution: [`{{pi * ${r} * l}} = {{${C.tex}}}, so l = ${r * l} ÷ ${r} = ${l} cm.`, `{{h = sqrt(${l}^2 - ${r}^2)}} = {{sqrt(${l * l - r * r})}} = **${h} cm**.`],
    hint: "Use πrl to find the slant height first, then Pythagoras.",
    traps: numTraps(h, [[l, "That's the slant height — the question asks for the vertical height."]]),
    diagram: coneSvg(r, h, `${r} cm`, "h", ""),
  };
}

// --- 9. Frustums ---------------------------------------------------------------------

function frustumItem(rng: Rng, tier: Tier): DrillItem | null {
  if (tier === 3 && rng.bool(0.5)) {
    // Fraction of the volume.
    const [p, q] = rng.pick([[1, 2], [1, 3], [2, 3], [1, 4], [3, 4], [2, 5], [3, 5], [1, 5]] as Array<[number, number]>);
    const keep = rng.bool();
    const remN = q ** 3 - p ** 3, D = q ** 3;
    const [n, d] = keep ? simplify(remN, D) : simplify(p ** 3, D);
    return {
      prompt: `A solid cone is cut by a plane parallel to its base. The small cone removed from the top has height ${frac(p, q)} of the height of the original cone. What fraction of the original cone's volume is ${keep ? "the frustum that is left" : "the small cone"}? Give your answer as a fraction in its simplest form.`,
      answer: { type: "fraction", n, d, simplest: true },
      solution: [
        `The small cone is similar to the original with length scale factor ${frac(p, q)}.`,
        `Volume scale factor = (${frac(p, q)})³ = ${frac(p ** 3, D)}.`,
        keep ? `Frustum = 1 − ${frac(p ** 3, D)} = **${frac(remN, D)}** of the original.` : `So the small cone is **${frac(p ** 3, D)}** of the original volume.`,
      ],
      hint: "Similar solids: if lengths scale by k, volumes scale by k³.",
      traps: [
        { spec: { type: "fraction" as const, n: keep ? q - p : p, d: q }, feedback: "Volumes don't scale like lengths — cube the length scale factor." },
        { spec: { type: "fraction" as const, n: keep ? q * q - p * p : p * p, d: q * q }, feedback: "Squaring gives the AREA scale factor. Volume needs the cube." },
      ].filter((tr) => tr.spec.n * d !== n * tr.spec.d),
    };
  }
  const r = rng.int(2, 6), R = rng.int(r + 1, Math.min(12, 2 * r + 4)), tt = rng.int(1, tier === 1 ? 3 : 4);
  const h = tt * (R - r), h1 = tt * r, H = tt * R;
  if (h < 3 || H > 40) return null;
  const mode: Mode = tier === 1 ? "exact" : rng.bool(0.5) ? "exact" : "3sf";
  const E = piF(tt * (R ** 3 - r ** 3), 3);
  const big = piF(R * R * H, 3), small = piF(r * r * h1, 3);
  const litres = tier === 3;
  if (litres) {
    // Bucket in cm, answer in litres.
    const k = rng.pick([2, 3, 4, 5]);
    const Rb = R * k, rb = r * k, hb = h * k, h1b = h1 * k, Hb = H * k;
    if (Hb > 80) return null;
    const V = (PI / 3) * (Rb * Rb * Hb - rb * rb * h1b);
    const Rr = sf3(V / 1000);
    if (!Rr) return null;
    const wrongBig = sf3(((PI / 3) * Rb * Rb * Hb) / 1000);
    return {
      prompt: `A bucket is a frustum of a cone. Its base has radius ${rb} cm, its open top has radius ${Rb} cm, and it is ${hb} cm deep. Using similar triangles, the full cone it was cut from would have height ${Hb} cm. Work out how many litres the bucket holds. ${ASK_SF}`,
      answer: { type: "number", value: Rr.value, allowFraction: false, display: `${Rr.text} litres` },
      solution: [
        `The missing small cone has height ${Hb} − ${hb} = ${h1b} cm and radius ${rb} cm.`,
        `Volume = {{1/3 pi * ${Rb}^2 * ${Hb}}} − {{1/3 pi * ${rb}^2 * ${h1b}}} = ${long(V)} cm³.`,
        `÷ 1000 = ${long(V / 1000)} ≈ **${Rr.text} litres** (3 s.f.).`,
      ],
      hint: "Frustum = big cone − small cone. Then cm³ ÷ 1000 = litres.",
      traps: numTraps(Rr.value, [[wrongBig ? wrongBig.value : NaN, "That's the whole cone — subtract the small cone that's missing."], [sf3(V / 100)?.value ?? NaN, "1 litre = 1000 cm³."]]),
    };
  }
  const ans = answerOf(E, mode, "cm³");
  if (!ans) return null;
  let prompt: string, diagram: string;
  const steps: string[] = [];
  if (tier === 1) {
    prompt = `A cone of base radius ${R} cm and height ${H} cm has a smaller cone of radius ${r} cm and height ${h1} cm cut off its top, leaving a frustum. Work out the volume of the frustum. ${ask(mode)}`;
    diagram = frustumSvg(R, r, h, h1, { R: `${R} cm`, r: `${r} cm`, H: `${H} cm`, h1: `${h1} cm` });
  } else {
    prompt = `The diagram shows a frustum with base radius ${R} cm, top radius ${r} cm and height ${h} cm. It was made by cutting a small cone off the top of a large cone. Work out the volume of the frustum. ${ask(mode)}`;
    diagram = frustumSvg(R, r, h, h1, { R: `${R} cm`, r: `${r} cm`, h: `${h} cm` });
    steps.push(
      `Let the small cone have height x. Similar triangles: {{x/${r} = (x + ${h})/${R}}}, so ${R}x = ${r}x + ${r * h}, giving x = ${h1} cm.`,
      `So the large cone has height ${h1} + ${h} = ${H} cm.`,
    );
  }
  steps.push(
    `Large cone: {{1/3 pi * ${R}^2 * ${H}}} = {{${big.tex}}}. Small cone: {{1/3 pi * ${r}^2 * ${h1}}} = {{${small.tex}}}.`,
    `Frustum = {{${big.tex}}} − {{${small.tex}}} = ${ans.show}${mode === "exact" ? "." : ""}`,
  );
  return {
    prompt,
    answer: ans.spec,
    solution: steps,
    hint: tier === 1 ? "Frustum = big cone − small cone." : "Find the height of the missing cone with similar triangles first.",
    traps: trapsFor(E, mode, [
      [big, "That's the whole cone — subtract the small cone."],
      [piF(R * R * h - r * r * h, 3), "You can't use the frustum height for both cones — each cone needs its own height."],
      [piF(tt * (R ** 3 - r ** 3)), "Cone volume has a {{1/3}}."],
    ]),
    diagram,
  };
}

// --- 10. Melting, recasting, water levels, finding a radius ---------------------------

function recastItem(rng: Rng, tier: Tier): DrillItem | null {
  const t = tier === 1 ? rng.pick([0, 3]) : tier === 2 ? rng.int(0, 3) : rng.pick([1, 2, 4, 5]);
  if (t === 0) {
    // Sphere melted into a cylinder: height.
    const r = rng.int(2, 9), R = rng.int(2, 9);
    const h = (4 * r ** 3) / (3 * R * R);
    const nice = Number.isInteger(h);
    if (tier === 1 && !nice) return null;
    const Rr = sf3(h);
    if (!nice && !Rr) return null;
    const spec: AnswerSpec = nice ? { type: "number", value: h, display: `${h} cm` } : { type: "number", value: Rr!.value, allowFraction: false, display: `${Rr!.text} cm` };
    const w = (4 * r ** 3) / (R * R);
    return {
      prompt: `A solid metal sphere of radius ${r} cm is melted down and recast into a solid cylinder of radius ${R} cm. Work out the height of the cylinder, in cm.${nice ? "" : " " + ASK_SF}`,
      answer: spec,
      solution: [`Volume is unchanged: {{pi * ${R}^2 * h}} = {{4/3 pi * ${r}^3}}.`, `Divide by π: ${R * R}h = {{4/3}} × ${r ** 3} = ${frac(4 * r ** 3, 3)}.`, nice ? `h = ${frac(4 * r ** 3, 3)} ÷ ${R * R} = **${h} cm**.` : `h = ${frac(4 * r ** 3, 3 * R * R)} = ${long(h)} ≈ **${Rr!.text} cm** (3 s.f.).`],
      hint: "Melting doesn't change the volume: set the two volumes equal.",
      traps: numTraps(nice ? h : Rr!.value, [[nice ? w : sf3(w)?.value ?? NaN, "The sphere's volume is {{4/3}}πr³ — keep the {{1/3}}."], [nice ? (4 * r * r) / (3 * R * R) : sf3((4 * r * r) / (3 * R * R))?.value ?? NaN, "Cube the sphere's radius."]]),
    };
  }
  if (t === 1) {
    // Water rise from spheres dropped in.
    const n = tier === 3 ? rng.int(2, 6) : rng.pick([1, 1, 2, 3]);
    const r = rng.int(1, 4), R = rng.int(Math.max(4, 2 * r + 1), 12);
    const rise = (4 * n * r ** 3) / (3 * R * R);
    const Rr = sf3(rise);
    if (!Rr || rise > 20) return null;
    const what = n === 1 ? `a solid metal ball of radius ${r} cm` : `${n} solid metal balls, each of radius ${r} cm,`;
    return {
      prompt: `A cylindrical jar of radius ${R} cm contains water. ${cap(what)} ${n === 1 ? "is" : "are"} dropped in and ${n === 1 ? "is" : "are"} completely covered. By how much does the water level rise, in cm? ${ASK_SF}`,
      answer: { type: "number", value: Rr.value, allowFraction: false, display: `${Rr.text} cm` },
      solution: [
        `Volume of ball${n > 1 ? "s" : ""} = ${n > 1 ? `${n} × ` : ""}{{4/3 pi * ${r}^3}} = {{${piF(4 * n * r ** 3, 3).tex}}} cm³.`,
        `This volume of water is pushed up into a cylinder of radius ${R}: {{pi * ${R}^2 * d}} = {{${piF(4 * n * r ** 3, 3).tex}}}.`,
        `d = ${frac(4 * n * r ** 3, 3 * R * R)} = ${long(rise)} ≈ **${Rr.text} cm** (3 s.f.).`,
      ],
      hint: "The rise in water forms a thin cylinder whose volume equals the volume of what was dropped in.",
      traps: numTraps(Rr.value, [[n > 1 ? sf3(rise / n)?.value ?? NaN : NaN, `There are ${n} balls — multiply the volume by ${n}.`], [sf3((4 * n * r ** 3) / (3 * R))?.value ?? NaN, "Divide by the jar's cross-section πR² — square the radius."]]),
    };
  }
  if (t === 2) {
    // Find radius of sphere from volume (3 s.f.).
    const V = rng.int(20, 3000);
    const r = Math.cbrt((3 * V) / (4 * PI));
    const Rr = sf3(r);
    if (!Rr) return null;
    const ctx = rng.pick([`A sphere has volume ${V} cm³.`, `A spherical scoop of mango sorbet has volume ${V} cm³.`, `A solid metal ball has volume ${V} cm³.`]);
    return {
      prompt: `${ctx} Work out its radius, in cm. ${ASK_SF}`,
      answer: { type: "number", value: Rr.value, allowFraction: false, display: `${Rr.text} cm` },
      solution: [`{{4/3 pi r^3}} = ${V}, so {{r^3}} = {{(3 * ${V})/(4 pi)}} = ${long((3 * V) / (4 * PI))}`, `r = {{cbrt(${num(parseFloat(((3 * V) / (4 * PI)).toPrecision(6)))})}} = ${long(r)} ≈ **${Rr.text} cm** (3 s.f.).`],
      hint: "Rearrange V = 4/3 πr³ for r³, then cube-root.",
      traps: numTraps(Rr.value, [[sf3((3 * V) / (4 * PI))?.value ?? NaN, "That's r³ — take the cube root."], [sf3(Math.sqrt((3 * V) / (4 * PI)))?.value ?? NaN, "It's r CUBED, so use a cube root, not a square root."]]),
    };
  }
  if (t === 3) {
    // Cone volume kπ and height → radius (exact integer).
    const r = rng.int(2, 12), h = 3 * rng.int(1, 8);
    const V = piF(r * r * h, 3);
    return {
      prompt: `A cone has volume {{${V.tex}}} cm³ and vertical height ${h} cm. Work out the radius of its base, in cm.`,
      answer: { type: "number", value: r, display: `${r} cm` },
      solution: [`{{1/3 pi r^2 * ${h}}} = {{${V.tex}}}`, `Divide by π and multiply by 3: ${h}{{r^2}} = ${r * r * h}, so {{r^2}} = ${r * r}.`, `r = **${r} cm**.`],
      hint: "Substitute into V = ⅓πr²h and work backwards to r.",
      traps: numTraps(r, [[r * r, "That's r² — square-root it."], [Math.sqrt((r * r) / 3), "Multiply by 3 to undo the {{1/3}} (don't divide)."]]),
    };
  }
  if (t === 4) {
    // How many small spheres from a cylinder?
    const R = rng.int(2, 8), H = rng.int(5, 30), r = rng.pick([0.5, 1, 1.5, 2]);
    const ratio = (3 * R * R * H) / (4 * r ** 3);
    const n = Math.floor(ratio + 1e-9);
    if (n < 3 || n > 2000 || Math.abs(ratio - Math.round(ratio)) < 0.02) return null;
    return {
      prompt: `A solid cylinder of radius ${R} cm and height ${H} cm is melted down and made into small spheres of radius ${num(r)} cm. What is the greatest number of whole spheres that can be made?`,
      answer: { type: "number", value: n },
      solution: [`Cylinder: {{pi * ${R}^2 * ${H}}} = {{${R * R * H} pi}} cm³. One sphere: {{4/3 pi * ${num(r)}^3}} = {{${piF(Math.round(4 * r ** 3 * 8), 24).tex}}} cm³.`, `Number = {{${R * R * H} pi}} ÷ {{${piF(Math.round(4 * r ** 3 * 8), 24).tex}}} = ${num(parseFloat(ratio.toPrecision(6)))}…`, `Only whole spheres count, so round DOWN: **${n}**.`],
      hint: "Divide the total volume by the volume of one sphere — then think about rounding.",
      traps: numTraps(n, [[n + 1, "You can't make a part-sphere into a whole one — round DOWN."]]),
    };
  }
  // t === 5: cylinder recast into a cone with the same radius → cone height = 3h.
  const r = rng.int(2, 10), h = rng.int(2, 15), R = rng.pick([r, 2 * r]);
  const H = (3 * r * r * h) / (R * R);
  if (!Number.isInteger(H * 4)) return null;
  return {
    prompt: `A solid clay cylinder of radius ${r} cm and height ${h} cm is reshaped into a solid cone with base radius ${R} cm. Work out the height of the cone, in cm.`,
    answer: { type: "number", value: clean(H), display: `${num(H)} cm` },
    solution: [`Volumes are equal: {{1/3 pi * ${R}^2 * H}} = {{pi * ${r}^2 * ${h}}}.`, `Divide by π, multiply by 3: ${R * R}H = ${3 * r * r * h}.`, `H = **${num(H)} cm**.`],
    hint: "Set cone volume = cylinder volume. Watch the ⅓.",
    traps: numTraps(H, [[clean(H / 9), "Multiply by 3 to undo the third — don't divide by 3."], [clean(H / 3), "The cone's ⅓ means it must be 3 times as tall as an equal-base cylinder."]]),
  };
}

// ===========================================================================

export const drills: Drill[] = [
  {
    id: `${T}.arc-sector`,
    topicId: T,
    title: "Arc length and sector area",
    level: 1,
    guideRef: "circles-arcs-sectors",
    generate(rng, tier) {
      return retry(() => (tier === 3 ? sectorReverse(rng) : sectorForward(rng, tier)));
    },
  },
  {
    id: `${T}.sector-perimeter`,
    topicId: T,
    title: "Perimeter and area of semicircles and sectors",
    level: 2,
    guideRef: "circles-arcs-sectors",
    generate(rng, tier) {
      return retry(() => {
        if (tier === 1) return semicircleItem(rng, rng.bool(0.6) ? "exact" : "3sf");
        if (tier === 2) return rng.bool(0.3) ? semicircleItem(rng, "3sf") : sectorPerimeterItem(rng, rng.bool() ? "exact" : "3sf");
        return rng.bool(0.7) ? perimeterReverse(rng) : sectorPerimeterItem(rng, "3sf");
      });
    },
  },
  {
    id: `${T}.areas-2d`,
    topicId: T,
    title: "Areas of trapezia, parallelograms and compound shapes",
    level: 1,
    guideRef: "areas-2d",
    generate(rng, tier) {
      return retry(() => areas2d(rng, tier));
    },
  },
  {
    id: `${T}.shaded-areas`,
    topicId: T,
    title: "Shaded areas with circles",
    level: 2,
    guideRef: "areas-2d",
    generate(rng, tier) {
      return retry(() => shadedItem(rng, tier));
    },
  },
  {
    id: `${T}.prism-volume`,
    topicId: T,
    title: "Volume and capacity of prisms and cylinders",
    level: 1,
    guideRef: "prisms-cylinders",
    generate(rng, tier) {
      return retry(() => prismVolume(rng, tier));
    },
  },
  {
    id: `${T}.prism-surface`,
    topicId: T,
    title: "Surface area of prisms and cylinders",
    level: 2,
    guideRef: "prisms-cylinders",
    generate(rng, tier) {
      return retry(() => prismSurface(rng, tier));
    },
  },
  {
    id: `${T}.cone-sphere-volume`,
    topicId: T,
    title: "Volume of pyramids, cones and spheres",
    level: 2,
    guideRef: "cones-spheres-pyramids",
    generate(rng, tier) {
      return retry(() => coneSphereVolume(rng, tier));
    },
  },
  {
    id: `${T}.cone-sphere-surface`,
    topicId: T,
    title: "Surface area of cones and spheres",
    level: 2,
    guideRef: "cones-spheres-pyramids",
    generate(rng, tier) {
      return retry(() => coneSphereSurface(rng, tier));
    },
  },
  {
    id: `${T}.frustum`,
    topicId: T,
    title: "Volume of a frustum",
    level: 3,
    guideRef: "frustums-composite",
    generate(rng, tier) {
      return retry(() => frustumItem(rng, tier));
    },
  },
  {
    id: `${T}.recast-water`,
    topicId: T,
    title: "Melting, recasting and water levels",
    level: 3,
    guideRef: "frustums-composite",
    generate(rng, tier) {
      return retry(() => recastItem(rng, tier));
    },
  },
];
