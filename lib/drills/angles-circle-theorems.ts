// Procedural skill drills for "Angles, Polygons & Circle Theorems".
//
// Every circle diagram is built from the real angles: points are placed on the
// circle by their arc positions, so an inscribed angle of 40° really is 40°.
// Intersecting-chord / secant diagrams use the power of a point to place P so
// that the drawn lengths match the numbers in the question.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { clean, gcd, num, roundTo } from "./helpers.ts";

const T = "angles-circle-theorems";
type Tier = 1 | 2 | 3;
type Pt = [number, number];
const RAD = Math.PI / 180;

/** Bounded rejection loop. */
function attempt(make: () => DrillItem | null): DrillItem {
  for (let i = 0; i < 600; i++) {
    const r = make();
    if (r) return r;
  }
  throw new Error(`${T}: could not build a valid question`);
}

/** Number traps, skipping any equal to the answer, repeats, and nonsense. */
function numTraps(answer: number, cands: Array<[number, string]>): Trap[] {
  const seen: number[] = [answer];
  const out: Trap[] = [];
  for (const [v, feedback] of cands) {
    if (!Number.isFinite(v) || v <= 0 || Math.abs(v * 100 - Math.round(v * 100)) > 1e-6) continue;
    if (seen.some((s) => Math.abs(s - v) <= 0.011 * Math.max(Math.abs(s), 1))) continue;
    seen.push(v);
    out.push({ spec: { type: "number", value: clean(v) }, feedback });
  }
  return out.slice(0, 2);
}

/** Linear expression in plain text: lin(3, -15) → "3x − 15", lin(2, 0) → "2x". */
function lin(p: number, r: number, v = "x"): string {
  const head = `${p === 1 ? "" : p}${v}`;
  if (r === 0) return head;
  return r < 0 ? `${head} − ${-r}` : `${head} + ${r}`;
}

/** Round to 3 significant figures; null if the value sits on a rounding tie. */
function sf3(v: number): number | null {
  if (!(v > 0)) return null;
  const dp = 2 - Math.floor(Math.log10(v));
  const s = v * 10 ** dp;
  if (Math.abs(s - Math.floor(s) - 0.5) < 1e-6) return null;
  return dp >= 0 ? roundTo(v, dp) : clean(Math.round(s) * 10 ** -dp);
}
/** 3 s.f. value as text with trailing zeros: 7 → "7.00". */
function s3(v: number): string {
  return v >= 100 ? num(v) : v.toPrecision(3);
}
/** A 6 s.f. intermediate value for working. */
const s6 = (v: number) => num(clean(parseFloat(v.toPrecision(6))));

/** Coefficient of π as a fraction n/d → expression key, display markup and plain words. */
function piFrac(n: number, d: number): { expr: string; show: string } {
  const g = gcd(n, d);
  const a = n / g, b = d / g;
  if (b === 1) return a === 1 ? { expr: "pi", show: "{{pi}}" } : { expr: `${a}pi`, show: `{{${a} pi}}` };
  if (a === 1) return { expr: `pi/${b}`, show: `{{pi/${b}}}` };
  return { expr: `${a}pi/${b}`, show: `{{(${a} pi)/${b}}}` };
}

// ---------------------------------------------------------------------------
// SVG helpers
// ---------------------------------------------------------------------------

const INK = "#1f2937";
const SOFT = "#334155";
const UNK = "#4338ca";
const f1 = (n: number) => {
  const v = Math.round(n * 10) / 10;
  return String(Object.is(v, -0) ? 0 : v);
};

function svgOpen(w: number, h: number, aria: string): string {
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}"><rect x="0" y="0" width="${w}" height="${h}" fill="#ffffff"/>`;
}

function tx(p: Pt, s: string, o: { size?: number; anchor?: string; color?: string; bold?: boolean } = {}): string {
  return `<text x="${f1(p[0])}" y="${f1(p[1])}" font-size="${o.size ?? 13}" font-family="sans-serif" text-anchor="${o.anchor ?? "middle"}" fill="${o.color ?? INK}" stroke="#ffffff" stroke-width="3" paint-order="stroke"${o.bold ? ' font-weight="bold"' : ""}>${s}</text>`;
}

function seg(a: Pt, b: Pt, o: { dash?: boolean; color?: string; w?: number } = {}): string {
  return `<line x1="${f1(a[0])}" y1="${f1(a[1])}" x2="${f1(b[0])}" y2="${f1(b[1])}" stroke="${o.color ?? INK}" stroke-width="${o.w ?? 1.8}"${o.dash ? ' stroke-dasharray="5 4"' : ""}/>`;
}

const pol = (c: Pt, r: number, deg: number): Pt => [c[0] + r * Math.cos(deg * RAD), c[1] - r * Math.sin(deg * RAD)];
const add = (a: Pt, b: Pt, k = 1): Pt => [a[0] + k * b[0], a[1] + k * b[1]];
const norm = (v: Pt): Pt => {
  const L = Math.hypot(v[0], v[1]) || 1;
  return [v[0] / L, v[1] / L];
};
const dirTo = (a: Pt, b: Pt): Pt => norm([b[0] - a[0], b[1] - a[1]]);
const mid = (a: Pt, b: Pt): Pt => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];

/** Arc + label for the (non-reflex) angle AVB. */
function angleMark(V: Pt, A: Pt, B: Pt, label: string, unknown = false, rOver?: number): string {
  const u1 = dirTo(V, A);
  const u2 = dirTo(V, B);
  const dot = u1[0] * u2[0] + u1[1] * u2[1];
  const ang = Math.acos(Math.max(-1, Math.min(1, dot))) / RAD;
  const r = rOver ?? (ang < 35 ? 30 : ang < 60 ? 24 : 19);
  const color = unknown ? UNK : INK;
  const s = add(V, u1, r);
  const e = add(V, u2, r);
  const sweep = u1[0] * u2[1] - u1[1] * u2[0] > 0 ? 1 : 0;
  const bis = norm([u1[0] + u2[0], u1[1] + u2[1]]);
  const L = add(V, bis, r + 9 + 3 * label.length);
  return `<path d="M${f1(s[0])},${f1(s[1])} A${r},${r} 0 0 ${sweep} ${f1(e[0])},${f1(e[1])}" fill="none" stroke="${color}" stroke-width="1.5"/>` + tx([L[0], L[1] + 4.5], label, { color, bold: unknown, size: 12 });
}

function rightMark(V: Pt, A: Pt, B: Pt, s = 10): string {
  const u1 = dirTo(V, A);
  const u2 = dirTo(V, B);
  const p1 = add(V, u1, s);
  const p3 = add(V, u2, s);
  const p2 = add(p1, u2, s);
  return `<path d="M${f1(p1[0])},${f1(p1[1])} L${f1(p2[0])},${f1(p2[1])} L${f1(p3[0])},${f1(p3[1])}" fill="none" stroke="${INK}" stroke-width="1.3"/>`;
}

function ptLabel(P: Pt, name: string, nbrs: Pt[], centre?: Pt, force?: Pt): string {
  if (force) {
    const L0 = add(P, norm(force), 15);
    return tx([L0[0], L0[1] + 5], name, { bold: true, size: 14 });
  }
  let v: Pt = [0, 0];
  for (const q of nbrs) {
    const u = dirTo(P, q);
    v = [v[0] - u[0], v[1] - u[1]];
  }
  if (centre) {
    const u = dirTo(centre, P);
    v = [v[0] + 1.6 * u[0], v[1] + 1.6 * u[1]];
  }
  const d: Pt = Math.hypot(v[0], v[1]) < 1e-6 ? [0, -1] : norm(v);
  const L = add(P, d, 15);
  return tx([L[0], L[1] + 5], name, { bold: true, size: 14 });
}

/** Label a length at the middle of PQ, pushed sideways by `off` pixels (sign chooses the side). */
function lenLabel(P: Pt, Q: Pt, s: string, off = 12): string {
  const u = dirTo(P, Q);
  const n: Pt = [-u[1], u[0]];
  const m = add(mid(P, Q), n, off);
  return tx([m[0], m[1] + 4.5], s, { size: 12, color: SOFT });
}

/** Length label at the middle of PQ, on the side away from point `away`. */
function lenAway(P: Pt, Q: Pt, s: string, away: Pt, off = 13): string {
  const u = dirTo(P, Q);
  let n: Pt = [-u[1], u[0]];
  const m = mid(P, Q);
  if (n[0] * (m[0] - away[0]) + n[1] * (m[1] - away[1]) < 0) n = [-n[0], -n[1]];
  const at = add(m, n, off);
  return tx([at[0], at[1] + 4.5], s, { size: 12, color: SOFT });
}

interface Scene {
  w: number;
  h: number;
  c: Pt;
  R: number;
  pts: Record<string, Pt>;
  onCircle: string[];
  segs: Array<[string, string] | [string, string, "dash"]>;
  marks?: Array<[string, string, string, string] | [string, string, string, string, boolean] | [string, string, string, string, boolean, number]>;
  rights?: Array<[string, string, string]>;
  extra?: string;
  aria: string;
  hide?: string[];
  labelDir?: Record<string, Pt>;
}

function drawScene(s: Scene): string {
  let out = svgOpen(s.w, s.h, s.aria);
  out += `<circle cx="${f1(s.c[0])}" cy="${f1(s.c[1])}" r="${f1(s.R)}" fill="none" stroke="${SOFT}" stroke-width="2"/>`;
  for (const g of s.segs) out += seg(s.pts[g[0]], s.pts[g[1]], { dash: g[2] === "dash" });
  out += s.extra ?? "";
  for (const m of s.marks ?? []) out += angleMark(s.pts[m[0]], s.pts[m[1]], s.pts[m[2]], m[3], m[4] ?? false, m[5]);
  for (const r of s.rights ?? []) out += rightMark(s.pts[r[0]], s.pts[r[1]], s.pts[r[2]]);
  for (const [name, P] of Object.entries(s.pts)) {
    if (s.hide?.includes(name)) continue;
    const nbrs = s.segs.filter((g) => g[0] === name || g[1] === name).map((g) => s.pts[g[0] === name ? g[1] : g[0]]);
    out += `<circle cx="${f1(P[0])}" cy="${f1(P[1])}" r="2.8" fill="${INK}"/>`;
    out += ptLabel(P, name, nbrs, s.onCircle.includes(name) ? s.c : undefined, s.labelDir?.[name]);
  }
  return out + "</svg>";
}

function intersect(p1: Pt, p2: Pt, p3: Pt, p4: Pt): Pt {
  const d = (p1[0] - p2[0]) * (p3[1] - p4[1]) - (p1[1] - p2[1]) * (p3[0] - p4[0]);
  const a = p1[0] * p2[1] - p1[1] * p2[0];
  const b = p3[0] * p4[1] - p3[1] * p4[0];
  return [(a * (p3[0] - p4[0]) - (p1[0] - p2[0]) * b) / d, (a * (p3[1] - p4[1]) - (p1[1] - p2[1]) * b) / d];
}

// ---------------------------------------------------------------------------
// 1. Parallel lines
// ---------------------------------------------------------------------------

type Quad = "UR" | "UL" | "LL" | "LR";
const QUADS: Quad[] = ["UR", "UL", "LL", "LR"];
interface Pos {
  line: 0 | 1;
  q: Quad;
}
const OPP: Record<Quad, Quad> = { UR: "LL", LL: "UR", UL: "LR", LR: "UL" };
const QUAD_WORDS: Record<Quad, string> = {
  UR: "above the line and right of the transversal",
  UL: "above the line and left of the transversal",
  LL: "below the line and left of the transversal",
  LR: "below the line and right of the transversal",
};
const QUAD_RAYS: Record<Quad, [number, number]> = { UR: [0, 1], UL: [1, 2], LL: [2, 3], LR: [3, 4] };
const posVal = (p: Pos, phi: number) => (p.q === "UR" || p.q === "LL" ? phi : 180 - phi);
const lineWord = (p: Pos) => (p.line === 0 ? "upper" : "lower");

interface Rel {
  equal: boolean;
  reasons: string[];
}
function relate(a: Pos, b: Pos): Rel {
  if (a.line === b.line) {
    return a.q === OPP[b.q]
      ? { equal: true, reasons: ["vertically opposite angles are equal"] }
      : { equal: false, reasons: ["angles on a straight line add up to 180°"] };
  }
  const up = a.line === 0 ? a : b;
  const lo = a.line === 0 ? b : a;
  if (up.q === lo.q) return { equal: true, reasons: ["corresponding angles are equal"] };
  const upIn = up.q === "LL" || up.q === "LR";
  const loIn = lo.q === "UR" || lo.q === "UL";
  if (upIn && loIn) {
    return OPP[up.q] === lo.q
      ? { equal: true, reasons: ["alternate angles are equal"] }
      : { equal: false, reasons: ["co-interior angles add up to 180°"] };
  }
  const first = relate(a, { line: a.line, q: b.q });
  return { equal: first.equal, reasons: [first.reasons[0], "corresponding angles are equal"] };
}

function parallelDiagram(phi: number, marks: Array<{ pos: Pos; label: string; unknown?: boolean }>, aria: string): string {
  const w = 400;
  const h = 260;
  const y0 = 85;
  const y1 = 185;
  const dx = (y1 - y0) / Math.tan(phi * RAD);
  const I: Pt[] = [
    [200 + dx / 2, y0],
    [200 - dx / 2, y1],
  ];
  const u = pol([0, 0], 1, phi);
  let out = svgOpen(w, h, aria);
  out += seg([20, y0], [380, y0], { w: 2 }) + seg([20, y1], [380, y1], { w: 2 });
  for (const y of [y0, y1]) out += `<path d="M44,${y - 6} L53,${y} L44,${y + 6}" fill="none" stroke="${INK}" stroke-width="2"/>`;
  out += seg(add(I[0], u, 70), add(I[1], u, -70), { w: 2 });
  const dirs = [0, phi, 180, 180 + phi, 360];
  for (const m of marks) {
    const V = I[m.pos.line];
    const [i, j] = QUAD_RAYS[m.pos.q];
    out += angleMark(V, pol(V, 50, dirs[i]), pol(V, 50, dirs[j]), m.label, m.unknown);
  }
  return out + "</svg>";
}

function solveLinear(p: number, r: number, q: number, s: number, equal: boolean, x: number): string[] {
  if (equal) {
    const A = p - q;
    const B = s - r;
    const line = A > 0 ? `${A === 1 ? "" : A}x = ${num(B)}` : `${-A === 1 ? "" : -A}x = ${num(-B)}`;
    return Math.abs(A) === 1 ? [`Collect the x terms on one side: x = ${x}`] : [`Collect the x terms on one side: ${line}`, `x = ${x}`];
  }
  const k = r + s;
  return [`Simplify: ${lin(p + q, k)} = 180, so ${p + q}x = ${180 - k}`, `x = ${180 - k} ÷ ${p + q} = ${x}`];
}

const parallelLines: Drill = {
  id: `${T}.parallel-lines`,
  topicId: T,
  title: "Angles in parallel lines",
  level: 1,
  guideRef: "angle-facts",
  generate(rng, tier) {
    const all: Pos[] = [];
    for (const line of [0, 1] as const) for (const q of QUADS) all.push({ line, q });
    return attempt(() => {
      let phi = rng.int(40, 140);
      if (phi > 77 && phi < 103) return null;
      const a = rng.pick(all);
      const b = rng.pick(all);
      if (a.line === b.line && a.q === b.q) return null;
      const rel = relate(a, b);
      const twoStep = rel.reasons.length > 1;
      const algebra = tier === 3 || (tier === 2 && rng.bool(0.7));
      if (tier === 1 && twoStep) return null;
      if (tier === 1 && a.line === b.line && rng.bool(0.6)) return null;
      if (tier === 2 && algebra && twoStep) return null;
      if (tier === 2 && !algebra && !twoStep) return null;
      if (tier === 3 && !twoStep && rng.bool(0.7)) return null;
      const va = posVal(a, phi);
      const vb = posVal(b, phi);
      const intro = rng.pick([
        "The two horizontal lines are parallel (marked with arrows).",
        "In the diagram, the lines marked with arrows are parallel and are crossed by a transversal.",
        "Two parallel lines are cut by a straight line, as shown.",
      ]);
      const where = (p: Pos) => `at the ${lineWord(p)} crossing, ${QUAD_WORDS[p.q]}`;

      if (!algebra) {
        const aria = `Two parallel lines crossed by a transversal. The angle ${where(a)} is ${va}°. The angle ${where(b)} is marked x.`;
        const diagram = parallelDiagram(phi, [
          { pos: a, label: `${va}°` },
          { pos: b, label: "x", unknown: true },
        ], aria);
        const solution: string[] = [];
        if (!twoStep) {
          solution.push(rel.equal ? `x = ${va}° because ${rel.reasons[0]}.` : `x + ${va}° = 180° because ${rel.reasons[0]}.`);
          if (!rel.equal) solution.push(`x = 180° − ${va}° = ${vb}°`);
        } else {
          const m: Pos = { line: a.line, q: b.q };
          const vm = posVal(m, phi);
          const first = relate(a, m);
          solution.push(
            first.equal
              ? `The angle ${QUAD_WORDS[b.q]} at the ${lineWord(a)} crossing is also ${vm}° (${first.reasons[0]}).`
              : `The angle ${QUAD_WORDS[b.q]} at the ${lineWord(a)} crossing is 180° − ${va}° = ${vm}° (${first.reasons[0]}).`,
          );
          solution.push(`That angle and x are in matching positions, so x = ${vm}° (corresponding angles are equal).`);
        }
        return {
          prompt: `${intro} The angle ${where(a)} is ${va}°. Work out the size of the angle marked x, ${where(b)}.`,
          diagram,
          answer: { type: "number", value: vb },
          solution,
          hint: twoStep ? "Move the known angle one step at a time: first round its own crossing, then across to the other crossing." : "Decide whether the two angles are equal or add up to 180° — picture the F, Z or C shape.",
          traps: numTraps(vb, [rel.equal ? [180 - va, "These two angles are equal, not supplementary — check the shape (F, Z or vertically opposite)."] : [va, "These two angles are not equal: they add up to 180°."]]),
        };
      }

      // Algebra version
      const x = rng.int(6, 30);
      const p = rng.int(2, 7);
      const q = rng.int(2, 7);
      if (rel.equal && p === q) return null;
      const r = va - p * x;
      const s = vb - q * x;
      if (r === 0 || s === 0 || Math.abs(r) > 90 || Math.abs(s) > 90) return null;
      const la = `(${lin(p, r)})°`;
      const lb = `(${lin(q, s)})°`;
      const aria = `Two parallel lines crossed by a transversal. The angle ${where(a)} is marked ${la}. The angle ${where(b)} is marked ${lb}.`;
      const diagram = parallelDiagram(phi, [
        { pos: a, label: la },
        { pos: b, label: lb, unknown: true },
      ], aria);
      const askAngle = tier === 3 && rng.bool(0.5);
      const solution: string[] = [];
      if (!twoStep) {
        solution.push(rel.equal ? `${cap(rel.reasons[0])}: ${lin(p, r)} = ${lin(q, s)}` : `${cap(rel.reasons[0])}: (${lin(p, r)}) + (${lin(q, s)}) = 180`);
      } else {
        const first = relate(a, { line: a.line, q: b.q });
        solution.push(
          first.equal
            ? `The angle ${QUAD_WORDS[b.q]} at the ${lineWord(a)} crossing is also (${lin(p, r)})° (${first.reasons[0]}). It corresponds to ${lb}, so ${lin(p, r)} = ${lin(q, s)}`
            : `The angle ${QUAD_WORDS[b.q]} at the ${lineWord(a)} crossing is 180° − (${lin(p, r)})° (${first.reasons[0]}). It corresponds to ${lb}, so (${lin(p, r)}) + (${lin(q, s)}) = 180`,
        );
      }
      solution.push(...solveLinear(p, r, q, s, rel.equal, x));
      if (askAngle) solution.push(`The angle is ${q} × ${x} ${s < 0 ? "−" : "+"} ${Math.abs(s)} = ${vb}°`);
      const wrongX = rel.equal ? (180 - r - s) / (p + q) : p !== q ? (s - r) / (p - q) : NaN;
      const traps: Array<[number, string]> = [];
      if (!askAngle && Number.isInteger(wrongX)) traps.push([wrongX, rel.equal ? "You made the angles add up to 180°, but they are equal." : "You made the angles equal, but they add up to 180°."]);
      if (askAngle) traps.push([x, `That is the value of x. Now substitute it into ${lin(q, s)}.`]);
      return {
        prompt: `${intro} The angle ${where(a)} is ${la}, and the angle ${where(b)} is ${lb}. ${askAngle ? `Work out the size of the angle marked ${lb}.` : "Work out the value of x."}`,
        diagram,
        answer: { type: "number", value: askAngle ? vb : x },
        solution,
        hint: "Decide whether the two angles are equal or add up to 180°, then write an equation.",
        traps: numTraps(askAngle ? vb : x, traps),
      };
    });
  },
};

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}

// ---------------------------------------------------------------------------
// 2. Polygons
// ---------------------------------------------------------------------------

const POLY_NAME: Record<number, string> = { 5: "pentagon", 6: "hexagon", 7: "heptagon", 8: "octagon", 9: "nonagon", 10: "decagon" };
const pname = (n: number) => POLY_NAME[n] ?? `${n}-sided polygon`;
const an = (s: string) => (/^(8|11|18|o|e|a|i|u)/.test(s) ? `an ${s}` : `a ${s}`);
const REG_INT: Record<number, number> = { 3: 60, 4: 90, 5: 108, 6: 120, 8: 135, 9: 140, 10: 144, 12: 150, 15: 156, 18: 160, 20: 162, 24: 165 };

function polySum(rng: Rng, tier: Tier): DrillItem {
  const n = tier === 1 ? rng.int(5, 15) : rng.int(7, 30);
  const S = (n - 2) * 180;
  const shape = pname(n);
  return {
    prompt: rng.pick([
      `Work out the sum of the interior angles of ${an(shape)}.`,
      `A polygon has ${n} sides. What do its interior angles add up to?`,
    ]),
    answer: { type: "number", value: S },
    solution: [`A polygon with n sides splits into (n − 2) triangles from one vertex.`, `Sum = (${n} − 2) × 180° = ${n - 2} × 180° = ${S}°`],
    hint: "How many triangles can you split the polygon into by drawing diagonals from one corner?",
    traps: numTraps(S, [
      [n * 180, "That's n × 180°. Splitting from one vertex gives n − 2 triangles, not n."],
      [360, "360° is the sum of the exterior angles of any polygon."],
    ]),
  };
}

function polyRegular(rng: Rng, tier: Tier): DrillItem {
  const n = rng.pick(tier === 1 ? [5, 6, 8, 9, 10, 12] : [12, 15, 18, 20, 24, 30, 36, 40, 45]);
  const e = 360 / n;
  const i = 180 - e;
  const askExt = rng.bool(0.3);
  const shape = pname(n);
  return {
    prompt: askExt
      ? `Work out the size of one exterior angle of a regular ${shape}.`
      : rng.pick([`Work out the size of one interior angle of a regular ${shape}.`, `A regular polygon has ${n} sides. Work out the size of each interior angle.`]),
    answer: { type: "number", value: askExt ? e : i },
    solution: askExt
      ? [`The exterior angles of any polygon add up to 360°.`, `Each exterior angle = 360° ÷ ${n} = ${num(e)}°`]
      : [`Each exterior angle = 360° ÷ ${n} = ${num(e)}°`, `Interior + exterior = 180° (angles on a straight line), so each interior angle = 180° − ${num(e)}° = ${num(i)}°`],
    hint: "Start with the exterior angles — they always add up to 360°.",
    traps: askExt
      ? numTraps(e, [[i, "That's the interior angle. The exterior angle is 180° minus it."]])
      : numTraps(i, [
          [e, "That's the exterior angle. The interior angle is 180° minus it."],
          [(n - 2) * 180, "That's the total of all the interior angles — divide by the number of angles."],
        ]),
  };
}

function polyFindN(rng: Rng, tier: Tier): DrillItem {
  const n = rng.pick(tier === 1 ? [5, 6, 8, 9, 10, 12, 15, 18, 20] : [9, 10, 12, 15, 18, 20, 24, 30, 36, 40, 45, 60, 72]);
  const e = 360 / n;
  const i = 180 - e;
  const fromInt = tier > 1 && rng.bool(0.6);
  const wrong = 360 / (fromInt ? i : 180 - e);
  return {
    prompt: fromInt
      ? `Each interior angle of a regular polygon is ${num(i)}°. How many sides does the polygon have?`
      : `Each exterior angle of a regular polygon is ${num(e)}°. How many sides does the polygon have?`,
    answer: { type: "number", value: n },
    solution: fromInt
      ? [`Each exterior angle = 180° − ${num(i)}° = ${num(e)}°`, `The exterior angles add up to 360°, so n = 360 ÷ ${num(e)} = ${n}`]
      : [`The exterior angles add up to 360°.`, `n = 360 ÷ ${num(e)} = ${n}`],
    hint: fromInt ? "Turn the interior angle into an exterior angle first." : "All the exterior angles are equal and add up to 360°.",
    traps: Number.isInteger(wrong)
      ? numTraps(n, [[wrong, fromInt ? "You divided 360 by the interior angle — use the exterior angle." : "You treated the exterior angle as an interior angle."]])
      : undefined,
  };
}

function polySumToN(rng: Rng): DrillItem {
  const n = rng.int(7, 24);
  const S = (n - 2) * 180;
  return {
    prompt: `The interior angles of a polygon add up to ${S.toLocaleString("en-GB")}°. How many sides does the polygon have?`,
    answer: { type: "number", value: n },
    solution: [`(n − 2) × 180 = ${S}`, `n − 2 = ${S} ÷ 180 = ${n - 2}`, `n = ${n}`],
    hint: "Use (n − 2) × 180 and work backwards.",
    traps: numTraps(n, [[n - 2, "That's n − 2 (the number of triangles). Add 2 to get the number of sides."]]),
  };
}

function polyIrregular(rng: Rng): DrillItem {
  return attempt(() => {
    const n = rng.int(5, 8);
    const S = (n - 2) * 180;
    const known: number[] = [];
    for (let k = 0; k < n - 1; k++) known.push(rng.int(95, 172));
    const x = S - known.reduce((a, b) => a + b, 0);
    if (x < 70 || x > 175) return null;
    return {
      prompt: `${cap(an(pname(n)))} has interior angles of ${known.slice(0, -1).map((k) => `${k}°`).join(", ")} and ${known[known.length - 1]}°, and one more angle x. Work out x.`,
      answer: { type: "number", value: x },
      solution: [`Angle sum = (${n} − 2) × 180° = ${S}°`, `Known angles add up to ${known.reduce((a, b) => a + b, 0)}°`, `x = ${S}° − ${known.reduce((a, b) => a + b, 0)}° = ${x}°`],
      hint: `First find the total of the interior angles of ${an(pname(n))}.`,
      traps: numTraps(x, [[x + 180, `That uses n × 180 − 180… check: the angle sum of ${an(pname(n))} is (n − 2) × 180°.`]]),
    };
  });
}

function polyRatio(rng: Rng): DrillItem {
  const n = rng.pick([6, 8, 9, 10, 12, 15, 18, 20, 24, 30, 36]);
  const e = 360 / n;
  const i = 180 - e;
  const kind = rng.pick(["times", "more", "ratio"] as const);
  const k = i / e;
  if (kind === "times" && !Number.isInteger(k)) return polyRatio(rng);
  const g = gcd(i, e);
  const prompt =
    kind === "times"
      ? `Each interior angle of a regular polygon is ${k} times the size of each exterior angle. How many sides does the polygon have?`
      : kind === "more"
        ? `Each interior angle of a regular polygon is ${num(i - e)}° more than each exterior angle. How many sides does the polygon have?`
        : `In a regular polygon, interior angle : exterior angle = ${i / g} : ${e / g}. How many sides does the polygon have?`;
  const step1 =
    kind === "times"
      ? `Let the exterior angle be e. Then ${k}e + e = 180, so ${k + 1}e = 180 and e = ${num(e)}°`
      : kind === "more"
        ? `Let the exterior angle be e. Then (e + ${num(i - e)}) + e = 180, so 2e = ${num(180 - (i - e))} and e = ${num(e)}°`
        : `Interior + exterior = 180°, shared in the ratio ${i / g} : ${e / g}, so e = 180 × ${e / g} ÷ ${(i + e) / g} = ${num(e)}°`;
  return {
    prompt,
    answer: { type: "number", value: n },
    solution: [`Interior angle + exterior angle = 180° (angles on a straight line).`, step1, `n = 360 ÷ ${num(e)} = ${n}`],
    hint: "Call the exterior angle e. Interior and exterior angles make a straight line.",
    traps: numTraps(n, [[e, "That's the exterior angle. Divide 360 by it to get the number of sides."]]),
  };
}

const TESS: number[][] = [
  [4, 6, 12],
  [4, 8, 8],
  [3, 12, 12],
  [5, 5, 10],
  [3, 10, 15],
  [3, 9, 18],
  [3, 8, 24],
  [4, 5, 20],
  [6, 6, 6],
  [3, 3, 4, 4],
  [3, 4, 4, 6],
  [3, 3, 6, 6],
  [3, 3, 3, 3, 6],
];

function polyTess(rng: Rng): DrillItem {
  const set = rng.pick(TESS);
  const idx = rng.int(0, set.length - 1);
  const missing = set[idx];
  const known = set.filter((_, i) => i !== idx);
  const NUMW = ["", "", "two", "three", "four"];
  const names: string[] = [];
  for (const n of Array.from(new Set(known))) {
    const k = known.filter((m) => m === n).length;
    const one = n === 3 ? "equilateral triangle" : n === 4 ? "square" : `regular ${pname(n)}`;
    names.push(k === 1 ? an(one) : `${NUMW[k]} ${one.replace(/(polygon|gon|triangle|square)$/, "$1s").replace(/x$/, "xs")}`);
  }
  const total = known.reduce((s, n) => s + REG_INT[n], 0);
  const gap = 360 - total;
  return {
    prompt: `${cap(names.slice(0, -1).join(", "))}${names.length > 1 ? " and " : ""}${names[names.length - 1]} meet at a point. One more regular polygon P fits exactly into the gap, with no overlaps. How many sides does P have?`,
    answer: { type: "number", value: missing },
    solution: [
      `Angles at a point add up to 360°. The known interior angles are ${known.map((n) => `${REG_INT[n]}°`).join(" + ")} = ${total}°.`,
      `So each interior angle of P is 360° − ${total}° = ${gap}°, and its exterior angle is 180° − ${gap}° = ${180 - gap}°.`,
      `Number of sides = 360 ÷ ${180 - gap} = ${missing}`,
    ],
    hint: "Find the interior angle of each known polygon, then use angles at a point.",
    traps: numTraps(missing, [[360 / gap, "You divided 360 by the interior angle of P — use its exterior angle."]].filter(([v]) => Number.isInteger(v)) as Array<[number, string]>),
  };
}

function polyAlgebra(rng: Rng): DrillItem {
  return attempt(() => {
    const n = rng.int(5, 6);
    const S = (n - 2) * 180;
    const x = rng.int(15, 60);
    const cs: number[] = [];
    const os: number[] = [];
    for (let k = 0; k < n; k++) {
      cs.push(rng.int(1, 4));
      os.push(k === n - 1 ? 0 : 10 * rng.int(-3, 5));
    }
    const last = S - cs.reduce((a, c) => a + c * x, 0) - os.reduce((a, o) => a + o, 0);
    if (Math.abs(last) > 60 || last % 5 !== 0) return null;
    os[n - 1] = last;
    const vals = cs.map((c, k) => c * x + os[k]);
    if (vals.some((v) => v < 40 || v >= 180)) return null;
    const exprs = cs.map((c, k) => lin(c, os[k]));
    const C = cs.reduce((a, b) => a + b, 0);
    const O = os.reduce((a, b) => a + b, 0);
    const askLargest = rng.bool(0.5);
    const largest = Math.max(...vals);
    return {
      prompt: `The interior angles of ${an(pname(n))}, in degrees, are ${exprs.slice(0, -1).join(", ")} and ${exprs[n - 1]}. ${askLargest ? "Work out the size of the largest angle." : "Work out the value of x."}`,
      answer: { type: "number", value: askLargest ? largest : x },
      solution: [
        `Angle sum of ${an(pname(n))} = (${n} − 2) × 180° = ${S}°`,
        `Add the expressions: ${lin(C, O)} = ${S}`,
        `${C}x = ${S - O}, so x = ${x}`,
        ...(askLargest ? [`The angles are ${vals.map((v) => `${v}°`).join(", ")}; the largest is ${largest}°.`] : []),
      ],
      hint: "Add all the expressions and set them equal to the angle sum.",
      traps: numTraps(askLargest ? largest : x, askLargest ? [[x, "That's x — now substitute it into each angle."]] : [[(360 - O) / C, "You used 360°. That's the angle sum of a quadrilateral, not this polygon."]].filter(([v]) => Number.isInteger(v)) as Array<[number, string]>),
    };
  });
}

const polygons: Drill = {
  id: `${T}.polygon-angles`,
  topicId: T,
  title: "Interior and exterior angles of polygons",
  level: 1,
  guideRef: "polygons",
  generate(rng, tier) {
    if (tier === 1) return rng.pick([polySum, polyRegular, polyFindN])(rng, tier);
    if (tier === 2) return rng.pick([polyRegular, polyFindN, polyFindN, (r: Rng) => polySumToN(r), (r: Rng) => polyIrregular(r)])(rng, tier);
    return rng.pick([(r: Rng) => polyRatio(r), (r: Rng) => polyTess(r), (r: Rng) => polyAlgebra(r)])(rng);
  },
};

// ---------------------------------------------------------------------------
// 3. Angle at centre, semicircle, same segment
// ---------------------------------------------------------------------------

const C0: Pt = [200, 140];
const R0 = 100;

function centreBasic(rng: Rng, tier: Tier): DrillItem {
  const x = tier === 1 ? rng.int(25, 80) : rng.int(21, 86);
  const y = 2 * x;
  const j = rng.int(-20, 20);
  const pts: Record<string, Pt> = { A: pol(C0, R0, 270 - x + j), B: pol(C0, R0, 270 + x + j), C: pol(C0, R0, 90 + rng.int(-35, 35)), O: C0 };
  const reverse = rng.bool(0.5);
  const aria = reverse
    ? `Circle with centre O and points A, B, C on the circle. Angle AOB at the centre is ${y}°. Angle ACB at the circumference is marked x.`
    : `Circle with centre O and points A, B, C on the circle. Angle ACB at the circumference is ${x}°. Angle AOB at the centre is marked x.`;
  const diagram = drawScene({
    w: 400, h: 280, c: C0, R: R0, pts, onCircle: ["A", "B", "C"],
    segs: [["C", "A"], ["C", "B"], ["O", "A"], ["O", "B"]],
    marks: reverse ? [["O", "A", "B", `${y}°`], ["C", "A", "B", "x", true]] : [["C", "A", "B", `${x}°`], ["O", "A", "B", "x", true]],
    aria,
  });
  const ans = reverse ? x : y;
  return {
    prompt: reverse
      ? `A, B and C are points on a circle, centre O. Angle AOB = ${y}°. Work out the value of x.`
      : `A, B and C are points on a circle, centre O. Angle ACB = ${x}°. Work out the value of x.`,
    diagram,
    answer: { type: "number", value: ans },
    solution: reverse
      ? [`The angle at the centre is twice the angle at the circumference (both stand on arc AB).`, `x = ${y}° ÷ 2 = ${x}°`]
      : [`The angle at the centre is twice the angle at the circumference (both stand on arc AB).`, `x = 2 × ${x}° = ${y}°`],
    hint: "Both angles stand on the same arc AB. Which one is bigger — the one at the centre or the one at the edge?",
    traps: numTraps(ans, reverse ? [[2 * y, "The angle at the centre is the BIGGER one — halve it, don't double it."]] : [[x / 2, "The angle at the centre is twice the angle at the circumference, not half."]]),
  };
}

function semicircle(rng: Rng): DrillItem {
  const rot = rng.int(-25, 25);
  const a = rng.int(18, 72);
  if (a === 45) return semicircle(rng);
  const pts: Record<string, Pt> = { A: pol(C0, R0, rot + 180), B: pol(C0, R0, rot), C: pol(C0, R0, rot + 2 * a), O: C0 };
  const askA = rng.bool(0.4);
  const b = 90 - a;
  const aria = `Circle with centre O. AB is a diameter through O and C is on the circle. ${askA ? `Angle ABC is ${b}° and angle CAB is marked x.` : `Angle CAB is ${a}° and angle ABC is marked x.`}`;
  const diagram = drawScene({
    w: 400, h: 280, c: C0, R: R0, pts, onCircle: ["A", "B", "C"],
    segs: [["A", "B"], ["A", "C"], ["B", "C"]],
    marks: askA ? [["B", "A", "C", `${b}°`], ["A", "B", "C", "x", true]] : [["A", "B", "C", `${a}°`], ["B", "A", "C", "x", true]],
    aria,
  });
  const ans = askA ? a : b;
  const given = askA ? b : a;
  return {
    prompt: `AB is a diameter of the circle, centre O, and C is a point on the circle. ${askA ? `Angle ABC = ${b}°` : `Angle CAB = ${a}°`}. Work out the value of x.`,
    diagram,
    answer: { type: "number", value: ans },
    solution: [`The angle in a semicircle is 90°, so angle ACB = 90°.`, `Angles in triangle ABC add up to 180°: x = 180° − 90° − ${given}° = ${ans}°`],
    hint: "AB is a diameter. What do you know about the angle at C?",
    traps: numTraps(ans, [[180 - given, "You forgot angle ACB. The angle in a semicircle is 90°."]]),
  };
}

function centreIsosceles(rng: Rng): DrillItem {
  const x = rng.int(25, 80);
  const j = rng.int(-20, 20);
  const pts: Record<string, Pt> = { A: pol(C0, R0, 270 - x + j), B: pol(C0, R0, 270 + x + j), C: pol(C0, R0, 90 + rng.int(-35, 35)), O: C0 };
  const reverse = rng.bool(0.5);
  const oab = 90 - x;
  const diagram = drawScene({
    w: 400, h: 280, c: C0, R: R0, pts, onCircle: ["A", "B", "C"],
    segs: [["C", "A"], ["C", "B"], ["O", "A"], ["O", "B"], ["A", "B"]],
    marks: reverse ? [["A", "O", "B", `${oab}°`], ["C", "A", "B", "x", true]] : [["C", "A", "B", `${x}°`], ["A", "O", "B", "x", true]],
    aria: `Circle with centre O and points A, B, C on the circle. Triangle OAB is drawn. ${reverse ? `Angle OAB is ${oab}° and angle ACB is marked x.` : `Angle ACB is ${x}° and angle OAB is marked x.`}`,
  });
  const ans = reverse ? x : oab;
  return {
    prompt: reverse
      ? `A, B and C are points on a circle, centre O. Angle OAB = ${oab}°. Work out the value of x.`
      : `A, B and C are points on a circle, centre O. Angle ACB = ${x}°. Work out the value of x.`,
    diagram,
    answer: { type: "number", value: ans },
    solution: reverse
      ? [`OA = OB (radii), so triangle OAB is isosceles: angle OBA = ${oab}°.`, `Angle AOB = 180° − 2 × ${oab}° = ${2 * x}° (angles in a triangle).`, `Angle at the centre is twice the angle at the circumference: x = ${2 * x}° ÷ 2 = ${x}°`]
      : [`Angle at the centre is twice the angle at the circumference: angle AOB = 2 × ${x}° = ${2 * x}°`, `OA = OB (radii), so triangle OAB is isosceles with equal base angles.`, `x = (180° − ${2 * x}°) ÷ 2 = ${oab}°`],
    hint: "Two radii make an isosceles triangle. Find angle AOB first.",
    traps: numTraps(ans, reverse ? [[2 * x, "That's angle AOB. The angle at the circumference is half of it."]] : [[2 * x, "That's angle AOB. Now use the isosceles triangle OAB."], [(180 - x) / 2, "You used the angle at C as the angle at O — double it first."]]),
  };
}

function minorArc(rng: Rng): DrillItem {
  const y = 2 * rng.int(35, 80);
  const k = rng.int(-(y / 2 - 20), y / 2 - 20);
  const pts: Record<string, Pt> = { A: pol(C0, R0, 270 - y / 2), B: pol(C0, R0, 270 + y / 2), C: pol(C0, R0, 270 + k), O: C0 };
  const ans = 180 - y / 2;
  const diagram = drawScene({
    w: 400, h: 280, c: C0, R: R0, pts, onCircle: ["A", "B", "C"],
    segs: [["O", "A"], ["O", "B"], ["C", "A"], ["C", "B"]],
    marks: [["O", "A", "B", `${y}°`], ["C", "A", "B", "x", true]],
    aria: `Circle with centre O. A and B are on the circle with angle AOB ${y}°. C is on the minor arc AB and angle ACB is marked x.`,
  });
  return {
    prompt: `A, B and C are points on a circle, centre O. C lies on the minor arc AB. Angle AOB = ${y}°. Work out the value of x.`,
    diagram,
    answer: { type: "number", value: ans },
    solution: [`C is on the minor arc, so angle ACB stands on the MAJOR arc AB. The angle at the centre on that arc is the reflex angle AOB = 360° − ${y}° = ${360 - y}°.`, `x = ${360 - y}° ÷ 2 = ${ans}°`, `Check: ACB and a point on the major arc would make a cyclic quadrilateral, ${y / 2}° + ${ans}° = 180°.`],
    hint: "Which arc does angle ACB stand on? Look at the angle at the centre on the other side.",
    traps: numTraps(ans, [[y / 2, "That would be the angle at a point on the MAJOR arc. C is on the minor arc, so use the reflex angle at O."]]),
  };
}

function centreAlgebra(rng: Rng): DrillItem {
  return attempt(() => {
    const v = rng.int(25, 80);
    const x = rng.int(5, 20);
    const q = rng.int(2, 5);
    const s = v - q * x;
    const p = rng.int(2, 9);
    const r = 2 * v - p * x;
    if (p === 2 * q || s === 0 || r === 0 || Math.abs(s) > 50 || Math.abs(r) > 90) return null;
    const j = rng.int(-15, 15);
    const pts: Record<string, Pt> = { A: pol(C0, R0, 270 - v + j), B: pol(C0, R0, 270 + v + j), C: pol(C0, R0, 90 + rng.int(-30, 30)), O: C0 };
    const la = `(${lin(p, r)})°`;
    const lc = `(${lin(q, s)})°`;
    const diagram = drawScene({
      w: 400, h: 280, c: C0, R: R0, pts, onCircle: ["A", "B", "C"],
      segs: [["C", "A"], ["C", "B"], ["O", "A"], ["O", "B"]],
      marks: [["O", "A", "B", la], ["C", "A", "B", lc]],
      aria: `Circle with centre O and points A, B, C on the circle. Angle AOB is ${la} and angle ACB is ${lc}.`,
    });
    const A = p - 2 * q;
    const B = 2 * s - r;
    return {
      prompt: `A, B and C are points on a circle, centre O. Angle AOB = ${la} and angle ACB = ${lc}. Work out the value of x.`,
      diagram,
      answer: { type: "number", value: x },
      solution: [`Angle at the centre = 2 × angle at the circumference: ${lin(p, r)} = 2(${lin(q, s)})`, `${lin(p, r)} = ${lin(2 * q, 2 * s)}`, A > 0 ? `${A === 1 ? "" : A}x = ${B}` : `${-A === 1 ? "" : -A}x = ${-B}`, `x = ${x}`],
      hint: "Which angle is twice the other? Write that as an equation.",
      traps: numTraps(x, [[(2 * r - s) / (2 * p - q), "You doubled the wrong angle — the angle at the centre is the larger one."]].filter(([w]) => Number.isInteger(w)) as Array<[number, string]>),
    };
  });
}

function sameSegment(rng: Rng): DrillItem {
  return attempt(() => {
    const x = rng.int(22, 55);
    const y = rng.int(22, 55);
    const pArc = rng.int(25, 180 - x - y - 25);
    const qArc = 180 - x - y - pArc;
    if (qArc < 25) return null;
    const t0 = rng.int(0, 359);
    const angA = t0;
    const angB = t0 + 2 * x;
    const angC = angB + 2 * pArc;
    const angD = angC + 2 * y;
    const A = pol(C0, R0, angA);
    const B = pol(C0, R0, angB);
    const C = pol(C0, R0, angC);
    const D = pol(C0, R0, angD);
    const E = intersect(A, C, B, D);
    const ans = 180 - x - y;
    const diagram = drawScene({
      w: 400, h: 280, c: C0, R: R0, pts: { A, B, C, D, E }, onCircle: ["A", "B", "C", "D"],
      segs: [["A", "C"], ["B", "D"], ["A", "D"], ["B", "C"]],
      marks: [["D", "A", "B", `${x}°`], ["A", "C", "D", `${y}°`], ["E", "B", "C", "x", true]],
      aria: `Four points A, B, C, D on a circle. Chords AC and BD cross at E. Angle ADB is ${x}°, angle CAD is ${y}° and angle BEC is marked x.`,
    });
    return {
      prompt: `A, B, C and D are points on a circle. The chords AC and BD meet at E. Angle ADB = ${x}° and angle CAD = ${y}°. Work out the size of angle BEC, marked x.`,
      diagram,
      answer: { type: "number", value: ans },
      solution: [`Angles in the same segment are equal: angle ACB = angle ADB = ${x}° (both stand on arc AB).`, `Angles in the same segment are equal: angle DBC = angle DAC = ${y}° (both stand on arc DC).`, `In triangle BEC: x = 180° − ${x}° − ${y}° = ${ans}°`],
      hint: "Find two angles of triangle BEC using angles in the same segment.",
      traps: numTraps(ans, [[x + y, `${x + y}° is angle AEB (or CED). Angle BEC is the angle in triangle BEC.`]]),
    };
  });
}

const centreTheorems: Drill = {
  id: `${T}.centre-semicircle-segment`,
  topicId: T,
  title: "Angle at the centre, semicircle and same segment",
  level: 2,
  guideRef: "circle-theorems-1",
  generate(rng, tier) {
    if (tier === 1) return rng.pick([centreBasic, centreBasic, (r: Rng) => semicircle(r)])(rng, tier);
    if (tier === 2) return rng.pick([centreBasic, (r: Rng) => semicircle(r), (r: Rng) => centreIsosceles(r), (r: Rng) => centreIsosceles(r)])(rng, tier);
    return rng.pick([minorArc, centreAlgebra, sameSegment])(rng);
  },
};

// ---------------------------------------------------------------------------
// 4. Cyclic quadrilaterals
// ---------------------------------------------------------------------------

interface Quad4 {
  pts: Record<string, Pt>;
  ang: Record<"A" | "B" | "C" | "D", number>;
  arcs: number[];
}
function makeCyclic(rng: Rng, needSmallA = false): Quad4 | null {
  const a1 = 2 * rng.int(25, 65);
  const a2 = 2 * rng.int(25, 65);
  const a3 = 2 * rng.int(25, 65);
  const a4 = 360 - a1 - a2 - a3;
  if (a4 < 50 || a4 > 130) return null;
  if (needSmallA && a2 + a3 >= 170) return null;
  const t0 = rng.int(0, 359);
  const pts: Record<string, Pt> = {
    A: pol(C0, R0, t0),
    B: pol(C0, R0, t0 + a1),
    C: pol(C0, R0, t0 + a1 + a2),
    D: pol(C0, R0, t0 + a1 + a2 + a3),
  };
  const ang = { A: (a2 + a3) / 2, B: (a3 + a4) / 2, C: (a4 + a1) / 2, D: (a1 + a2) / 2 };
  if (Object.values(ang).some((v) => v === 90)) return null;
  return { pts, ang, arcs: [a1, a2, a3, a4] };
}
const NEXT: Record<string, [string, string]> = { A: ["D", "B"], B: ["A", "C"], C: ["B", "D"], D: ["C", "A"] };
const OPPV: Record<string, "A" | "B" | "C" | "D"> = { A: "C", B: "D", C: "A", D: "B" };
const angName = (v: string) => `${NEXT[v][0]}${v}${NEXT[v][1]}`;
const QSEGS: Array<[string, string]> = [["A", "B"], ["B", "C"], ["C", "D"], ["D", "A"]];

function cyclicBasic(rng: Rng): DrillItem {
  return attempt(() => {
    const q = makeCyclic(rng);
    if (!q) return null;
    const g = rng.pick(["A", "B", "C", "D"] as const);
    const u = OPPV[g];
    const gv = q.ang[g];
    const ans = q.ang[u];
    const diagram = drawScene({
      w: 400, h: 280, c: C0, R: R0, pts: q.pts, onCircle: ["A", "B", "C", "D"], segs: QSEGS,
      marks: [[g, NEXT[g][0], NEXT[g][1], `${gv}°`], [u, NEXT[u][0], NEXT[u][1], "x", true]],
      aria: `Cyclic quadrilateral ABCD. Angle ${angName(g)} is ${gv}° and the opposite angle ${angName(u)} is marked x.`,
    });
    return {
      prompt: `ABCD is a cyclic quadrilateral. Angle ${angName(g)} = ${gv}°. Work out the value of x.`,
      diagram,
      answer: { type: "number", value: ans },
      solution: [`Opposite angles of a cyclic quadrilateral add up to 180°.`, `x = 180° − ${gv}° = ${ans}°`],
      hint: "x and the given angle are opposite each other in a quadrilateral whose corners all lie on the circle.",
      traps: numTraps(ans, [[gv, "Opposite angles of a cyclic quadrilateral are supplementary (add to 180°), not equal."]]),
    };
  });
}

function cyclicExterior(rng: Rng): DrillItem {
  return attempt(() => {
    const q = makeCyclic(rng);
    if (!q) return null;
    const C = q.pts.C;
    const D = q.pts.D;
    const E = add(C, dirTo(D, C), 60);
    if (E[0] < 15 || E[0] > 385 || E[1] < 15 || E[1] > 265) return null;
    const ext = 180 - q.ang.C;
    const reverse = rng.bool(0.5);
    const diagram = drawScene({
      w: 400, h: 280, c: C0, R: R0, pts: { ...q.pts, E }, onCircle: ["A", "B", "C", "D"],
      segs: [...QSEGS, ["C", "E"]],
      marks: reverse ? [["A", "D", "B", `${q.ang.A}°`], ["C", "B", "E", "x", true]] : [["C", "B", "E", `${ext}°`], ["A", "D", "B", "x", true]],
      aria: `Cyclic quadrilateral ABCD with side DC extended to E. ${reverse ? `Angle DAB is ${q.ang.A}° and angle BCE is marked x.` : `Angle BCE is ${ext}° and angle DAB is marked x.`}`,
    });
    const ans = reverse ? ext : q.ang.A;
    const given = reverse ? q.ang.A : ext;
    return {
      prompt: `ABCD is a cyclic quadrilateral and DCE is a straight line. ${reverse ? `Angle DAB = ${given}°` : `Angle BCE = ${given}°`}. Work out the value of x.`,
      diagram,
      answer: { type: "number", value: ans },
      solution: reverse
        ? [`Opposite angles of a cyclic quadrilateral add to 180°: angle BCD = 180° − ${given}° = ${q.ang.C}°`, `Angles on a straight line add to 180°: x = 180° − ${q.ang.C}° = ${ans}°`, `(So the exterior angle equals the interior opposite angle.)`]
        : [`Angles on a straight line add to 180°: angle BCD = 180° − ${given}° = ${q.ang.C}°`, `Opposite angles of a cyclic quadrilateral add to 180°: x = 180° − ${q.ang.C}° = ${ans}°`],
      hint: "Find angle BCD first, using the straight line DCE.",
      traps: numTraps(ans, [[180 - given, "That's angle BCD. You need one more step."]]),
    };
  });
}

function cyclicAlgebra(rng: Rng, tier: Tier): DrillItem {
  return attempt(() => {
    const q = makeCyclic(rng);
    if (!q) return null;
    const pair = rng.bool(0.5) ? (["A", "C"] as const) : (["B", "D"] as const);
    const [g, u] = pair;
    const x = rng.int(5, 25);
    const p = rng.int(2, 6);
    const qq = rng.int(2, 6);
    const r = q.ang[g] - p * x;
    const s = q.ang[u] - qq * x;
    if (Math.abs(r) > 70 || Math.abs(s) > 70) return null;
    if (tier === 3 && (r === 0 || s === 0)) return null;
    const la = `(${lin(p, r)})°`.replace(/^\((\d*x)\)°$/, "$1°");
    const lb = `(${lin(qq, s)})°`.replace(/^\((\d*x)\)°$/, "$1°");
    // tier 3: find x from one opposite pair, then evaluate an angle from the other pair
    const other = g === "A" ? (["B", "D"] as const) : (["A", "C"] as const);
    const ov = rng.pick(other);
    const k = rng.int(2, 5);
    const t = q.ang[ov] - k * x;
    if (tier === 3 && (t === 0 || Math.abs(t) > 70)) return null;
    const lo = `(${lin(k, t)})°`;
    const marks: Array<[string, string, string, string] | [string, string, string, string, boolean]> = [
      [g, NEXT[g][0], NEXT[g][1], la],
      [u, NEXT[u][0], NEXT[u][1], lb],
    ];
    if (tier === 3) marks.push([ov, NEXT[ov][0], NEXT[ov][1], lo, true]);
    const diagram = drawScene({
      w: 400, h: 280, c: C0, R: R0, pts: q.pts, onCircle: ["A", "B", "C", "D"], segs: QSEGS, marks,
      aria: `Cyclic quadrilateral ABCD. Angle ${angName(g)} is ${la} and angle ${angName(u)} is ${lb}.${tier === 3 ? ` Angle ${angName(ov)} is ${lo}.` : ""}`,
    });
    const sum = r + s;
    const solution = [`Opposite angles of a cyclic quadrilateral add to 180°: (${lin(p, r)}) + (${lin(qq, s)}) = 180`, `${lin(p + qq, sum)} = 180, so ${p + qq}x = ${180 - sum}`, `x = ${x}`];
    if (tier === 3) solution.push(`Angle ${angName(ov)} = ${k} × ${x} ${t < 0 ? "−" : "+"} ${Math.abs(t)} = ${q.ang[ov]}°`);
    const ans = tier === 3 ? q.ang[ov] : x;
    const wrong = p !== qq ? (s - r) / (p - qq) : NaN;
    return {
      prompt: `ABCD is a cyclic quadrilateral. Angle ${angName(g)} = ${la} and angle ${angName(u)} = ${lb}.${tier === 3 ? ` Angle ${angName(ov)} = ${lo}. Work out the size of angle ${angName(ov)}.` : " Work out the value of x."}`,
      diagram,
      answer: { type: "number", value: ans },
      solution,
      hint: tier === 3 ? "Which two of the angles are opposite? Use them to find x first." : "Opposite angles of a cyclic quadrilateral add up to 180°.",
      traps: numTraps(ans, tier === 3 ? [[x, `That's x. Substitute it into ${lin(k, t)}.`]] : Number.isInteger(wrong) ? [[wrong, "You set the opposite angles equal — they add up to 180°."]] : []),
    };
  });
}

function cyclicCentre(rng: Rng): DrillItem {
  return attempt(() => {
    const q = makeCyclic(rng, true);
    if (!q) return null;
    const y = q.arcs[1] + q.arcs[2];
    const ans = q.ang.C;
    const diagram = drawScene({
      w: 400, h: 280, c: C0, R: R0, pts: { ...q.pts, O: C0 }, onCircle: ["A", "B", "C", "D"],
      segs: [...QSEGS, ["O", "B"], ["O", "D"]],
      marks: [["O", "B", "D", `${y}°`], ["C", "B", "D", "x", true]],
      aria: `Cyclic quadrilateral ABCD in a circle with centre O. Angle BOD is ${y}° and angle BCD is marked x.`,
    });
    return {
      prompt: `A, B, C and D are points on a circle, centre O. Angle BOD = ${y}°. Work out the size of angle BCD, marked x.`,
      diagram,
      answer: { type: "number", value: ans },
      solution: [`Angle at the centre is twice the angle at the circumference: angle BAD = ${y}° ÷ 2 = ${y / 2}°`, `Opposite angles of a cyclic quadrilateral add to 180°: x = 180° − ${y / 2}° = ${ans}°`],
      hint: "Find angle BAD first — it stands on the same arc as angle BOD.",
      traps: numTraps(ans, [[y / 2, "That's angle BAD. C is on the other side of BD, so use the cyclic quadrilateral."], [180 - y, "Halve the angle at the centre first, then use opposite angles."]]),
    };
  });
}

const cyclicQuads: Drill = {
  id: `${T}.cyclic-quadrilateral`,
  topicId: T,
  title: "Cyclic quadrilaterals",
  level: 2,
  guideRef: "circle-theorems-2",
  generate(rng, tier) {
    if (tier === 1) return cyclicBasic(rng);
    if (tier === 2) return rng.pick([(r: Rng) => cyclicExterior(r), (r: Rng) => cyclicAlgebra(r, 2), (r: Rng) => cyclicBasic(r)])(rng);
    return rng.pick([(r: Rng) => cyclicCentre(r), (r: Rng) => cyclicAlgebra(r, 3)])(rng);
  },
};

// ---------------------------------------------------------------------------
// 5. Tangents
// ---------------------------------------------------------------------------

const TRIPLES: Array<[number, number, number]> = [
  [3, 4, 5], [6, 8, 10], [5, 12, 13], [9, 12, 15], [8, 15, 17], [12, 16, 20], [7, 24, 25], [20, 21, 29], [12, 35, 37], [9, 40, 41], [15, 20, 25], [10, 24, 26],
];

/** Tangent scene: radius ratio r/d fixes the half-angle at P. */
function tangentPts(h: number, both: boolean): { pts: Record<string, Pt>; c: Pt; R: number } {
  const R = Math.min(72, 250 * Math.sin(h * RAD));
  const c: Pt = [115, 135];
  const d = R / Math.sin(h * RAD);
  const pts: Record<string, Pt> = { O: c, A: pol(c, R, 90 - h), P: [c[0] + d, c[1]] };
  if (both) pts.B = pol(c, R, -(90 - h));
  return { pts, c, R };
}

function tangentAngle(rng: Rng, tier: Tier): DrillItem {
  const kind = tier === 1 ? "single" : tier === 2 ? rng.pick(["AOB", "PAB"] as const) : rng.pick(["ACB", "chordAOB"] as const);
  if (kind === "single") {
    const y = rng.int(35, 72);
    const h = 90 - y;
    const { pts, c, R } = tangentPts(h, false);
    const ans = 90 - y;
    const reverse = rng.bool(0.5);
    const diagram = drawScene({
      w: 420, h: 270, c, R, pts, onCircle: ["A"], segs: [["O", "A"], ["A", "P"], ["O", "P"]],
      marks: reverse ? [["P", "A", "O", `${ans}°`], ["O", "A", "P", "x", true]] : [["O", "A", "P", `${y}°`], ["P", "A", "O", "x", true]],
      aria: `Circle with centre O. PA is a tangent at A. ${reverse ? `Angle APO is ${ans}° and angle AOP is marked x.` : `Angle AOP is ${y}° and angle APO is marked x.`}`,
    });
    const given = reverse ? ans : y;
    const out = reverse ? y : ans;
    return {
      prompt: `PA is a tangent to the circle, centre O, at the point A. ${reverse ? `Angle APO = ${given}°` : `Angle AOP = ${given}°`}. Work out the value of x.`,
      diagram,
      answer: { type: "number", value: out },
      solution: [`A tangent meets the radius at 90°, so angle OAP = 90°.`, `Angles in triangle OAP: x = 180° − 90° − ${given}° = ${out}°`],
      hint: "What angle does a tangent make with the radius at the point of contact?",
      traps: numTraps(out, [[180 - given, "You missed the right angle between the tangent and the radius."]]),
    };
  }
  if (kind === "AOB" || kind === "PAB") {
    const p = 2 * rng.int(18, 42);
    const h = p / 2;
    const { pts, c, R } = tangentPts(h, true);
    const aob = 180 - p;
    const pab = 90 - h;
    const ans = kind === "AOB" ? aob : pab;
    const segs: Array<[string, string]> = kind === "AOB" ? [["O", "A"], ["O", "B"], ["P", "A"], ["P", "B"]] : [["P", "A"], ["P", "B"], ["A", "B"]];
    const diagram = drawScene({
      w: 420, h: 270, c, R, pts, onCircle: ["A", "B"], segs,
      marks: kind === "AOB" ? [["P", "A", "B", `${p}°`], ["O", "A", "B", "x", true]] : [["P", "A", "B", `${p}°`], ["A", "P", "B", "x", true]],
      aria: `Circle with centre O. PA and PB are tangents from P touching the circle at A and B. Angle APB is ${p}°. ${kind === "AOB" ? "Angle AOB" : "Angle PAB"} is marked x.`,
    });
    return {
      prompt: `PA and PB are tangents to the circle, centre O, at A and B. Angle APB = ${p}°. Work out the value of x.`,
      diagram,
      answer: { type: "number", value: ans },
      solution:
        kind === "AOB"
          ? [`Tangents meet radii at 90°: angle OAP = angle OBP = 90°.`, `Angles in quadrilateral OAPB add to 360°: x = 360° − 90° − 90° − ${p}° = ${aob}°`]
          : [`Tangents from a point are equal: PA = PB, so triangle PAB is isosceles.`, `x = (180° − ${p}°) ÷ 2 = ${pab}°`],
      hint: kind === "AOB" ? "Mark the two right angles, then use the angle sum of quadrilateral OAPB." : "Two tangents from the same point are equal in length.",
      traps: numTraps(ans, kind === "AOB" ? [[p, "AOB and APB are not equal — they add up to 180° (the other two angles are right angles)."]] : [[180 - p, "That's angle AOB. Triangle PAB is isosceles: halve 180° − APB."]]),
    };
  }
  if (kind === "ACB") {
    const cc = rng.int(48, 72);
    const p = 180 - 2 * cc;
    const { pts, c, R } = tangentPts(p / 2, true);
    pts.C = pol(c, R, 180 + rng.int(-40, 40));
    const diagram = drawScene({
      w: 420, h: 270, c, R, pts, onCircle: ["A", "B", "C"],
      segs: [["P", "A"], ["P", "B"], ["C", "A"], ["C", "B"]],
      marks: [["C", "A", "B", `${cc}°`], ["P", "A", "B", "x", true]],
      aria: `Circle with centre O. PA and PB are tangents at A and B. C is on the major arc and angle ACB is ${cc}°. Angle APB is marked x.`,
    });
    return {
      prompt: `PA and PB are tangents to the circle, centre O, at A and B. C is a point on the major arc AB and angle ACB = ${cc}°. Work out the size of angle APB, marked x.`,
      diagram,
      answer: { type: "number", value: p },
      solution: [`Angle at the centre is twice the angle at the circumference: angle AOB = 2 × ${cc}° = ${2 * cc}°`, `Angle OAP = angle OBP = 90° (tangent ⟂ radius).`, `Quadrilateral OAPB: x = 360° − 90° − 90° − ${2 * cc}° = ${p}°`],
      hint: "Join OA and OB. What is angle AOB?",
      traps: numTraps(p, [[2 * cc, "That's angle AOB. APB is 180° minus it."], [180 - cc, "Double ACB to get the angle at the centre first."]]),
    };
  }
  const t = rng.int(48, 72);
  const p = 180 - 2 * t;
  const { pts, c, R } = tangentPts(p / 2, true);
  const diagram = drawScene({
    w: 420, h: 270, c, R, pts, onCircle: ["A", "B"],
    segs: [["P", "A"], ["P", "B"], ["A", "B"], ["O", "A"], ["O", "B"]],
    marks: [["A", "P", "B", `${t}°`], ["O", "A", "B", "x", true]],
    aria: `Circle with centre O. PA and PB are tangents at A and B. Angle PAB between tangent and chord is ${t}°. Angle AOB is marked x.`,
  });
  return {
    prompt: `PA and PB are tangents to the circle, centre O, at A and B. Angle PAB = ${t}°. Work out the size of angle AOB, marked x.`,
    diagram,
    answer: { type: "number", value: 2 * t },
    solution: [`Angle OAP = 90° (tangent ⟂ radius), so angle OAB = 90° − ${t}° = ${90 - t}°.`, `OA = OB (radii), so angle OBA = ${90 - t}° too.`, `x = 180° − 2 × ${90 - t}° = ${2 * t}°`],
    hint: "Angle OAP is 90°. How much of it is angle OAB?",
    traps: numTraps(2 * t, [[180 - 2 * t, "That's angle APB. Find the base angles of triangle OAB instead."], [90 - t, "That's angle OAB — one more step to angle AOB."]]),
  };
}

function tangentLength(rng: Rng, tier: Tier): DrillItem {
  const exact = tier === 1 || (tier === 3 && rng.bool(0.5));
  const mode0 = tier === 3 && exact ? "kite" : rng.pick(["findT", "findT", "findD"] as const);
  return attempt(() => {
    let r: number, t: number, d: number;
    if (exact) {
      const tr = rng.pick(TRIPLES);
      if (rng.bool(0.5)) [r, t, d] = [tr[0], tr[1], tr[2]];
      else [r, t, d] = [tr[1], tr[0], tr[2]];
    } else {
      r = rng.int(3, 15);
      t = rng.int(4, 25);
      d = Math.sqrt(r * r + t * t);
    }
    const unit = rng.pick(["cm", "m", "mm"]);
    const h = Math.asin(r / d) / RAD;
    if (h < 14 || h > 70) return null;
    const mode = mode0;
    if (!exact && mode === "findT") {
      // d must be a whole number for a clean question; reshape
      d = rng.int(r + 2, r + 25);
      t = Math.sqrt(d * d - r * r);
    }
    const tv = mode === "findD" ? d : t;
    const rounded = Number.isInteger(tv) ? tv : sf3(tv);
    if (rounded === null) return null;
    if (mode !== "kite" && !exact && Number.isInteger(tv)) return null;
    const both = mode === "kite";
    const hh = Math.asin(r / d) / RAD;
    if (hh < 14 || hh > 70) return null;
    const { pts, c, R } = tangentPts(hh, both);
    let extra = "";
    const O = pts.O;
    const A = pts.A;
    const P = pts.P;
    extra += lenAway(O, A, `${r} ${unit}`, P);
    if (mode === "findD") extra += lenAway(A, P, `${num(t)} ${unit}`, O);
    else extra += tx([(O[0] + P[0]) / 2, O[1] + (both ? -8 : 17)], `${num(d)} ${unit}`, { size: 12, color: SOFT });
    const segs: Array<[string, string]> = both ? [["O", "A"], ["O", "B"], ["A", "P"], ["B", "P"], ["O", "P"]] : [["O", "A"], ["A", "P"], ["O", "P"]];
    const diagram = drawScene({
      w: 420, h: 270, c, R, pts, onCircle: both ? ["A", "B"] : ["A"], segs, extra,
      aria: `Circle with centre O and radius ${r} ${unit}. PA is a tangent at A.${mode === "findD" ? ` PA is ${num(t)} ${unit}.` : ` OP is ${num(d)} ${unit}.`}`,
    });
    if (mode === "kite") {
      if (!Number.isInteger(t)) return null;
      const area = r * t;
      return {
        prompt: `PA and PB are tangents to a circle, centre O, at A and B. The radius is ${r} ${unit} and OP = ${d} ${unit}. Work out the area of the kite OAPB in ${unit}².`,
        diagram,
        answer: { type: "number", value: area },
        solution: [`Angle OAP = 90° (tangent ⟂ radius), so PA = {{sqrt(${d}^2 - ${r}^2)}} = {{sqrt(${d * d - r * r})}} = ${t} ${unit}`, `The kite is two congruent right-angled triangles OAP and OBP.`, `Area = 2 × {{1/2}} × ${r} × ${t} = ${area} ${unit}²`],
        hint: "Split the kite along OP into two right-angled triangles.",
        traps: numTraps(area, [[area / 2, "That's just triangle OAP. The kite is made of two of them."], [(r * d), "OP is the hypotenuse, not a side of the right angle. Find PA first."]]),
      };
    }
    const ans = rounded;
    const findT = mode === "findT";
    return {
      prompt: findT
        ? `PA is a tangent to a circle, centre O, at the point A. The radius of the circle is ${r} ${unit} and OP = ${num(d)} ${unit}. Work out the length of PA.${Number.isInteger(tv) ? "" : " Give your answer correct to 3 significant figures."}`
        : `PA is a tangent to a circle, centre O, at the point A. The radius of the circle is ${r} ${unit} and PA = ${num(t)} ${unit}. Work out the length of OP.${Number.isInteger(tv) ? "" : " Give your answer correct to 3 significant figures."}`,
      diagram,
      answer: { type: "number", value: ans },
      solution: findT
        ? [`Angle OAP = 90° (tangent ⟂ radius), so OP is the hypotenuse of triangle OAP.`, `PA² = ${num(d)}² − ${r}² = ${num(d * d - r * r)}`, `PA = {{sqrt(${num(d * d - r * r)})}} = ${Number.isInteger(tv) ? num(tv) : `${s6(tv)}… ≈ ${s3(ans)}`} ${unit}`]
        : [`Angle OAP = 90° (tangent ⟂ radius), so OP is the hypotenuse.`, `OP² = ${r}² + ${num(t)}² = ${num(r * r + t * t)}`, `OP = {{sqrt(${num(r * r + t * t)})}} = ${Number.isInteger(tv) ? num(tv) : `${s6(tv)}… ≈ ${s3(ans)}`} ${unit}`],
      hint: "The tangent is perpendicular to the radius, so you have a right-angled triangle. Which side is the hypotenuse?",
      traps: numTraps(ans, findT ? [[sf3(Math.sqrt(d * d + r * r)) ?? 0, "You added the squares. OP is the hypotenuse, so subtract."]] : [[sf3(Math.sqrt(Math.abs(t * t - r * r))) ?? 0, "OP is the hypotenuse, so add the squares."]]),
    };
  });
}

const tangents: Drill = {
  id: `${T}.tangents`,
  topicId: T,
  title: "Tangents: right angles and equal lengths",
  level: 2,
  guideRef: "circle-theorems-2",
  generate(rng, tier) {
    return rng.bool(0.6) ? tangentAngle(rng, tier) : tangentLength(rng, tier);
  },
};

// ---------------------------------------------------------------------------
// 6. Alternate segment theorem
// ---------------------------------------------------------------------------

const AC: Pt = [200, 118];
const AR = 92;

function altSegScene(t: number, u: number, withO: boolean) {
  const A = pol(AC, AR, 270);
  const B = pol(AC, AR, 270 + 2 * t);
  const C = pol(AC, AR, 270 + 2 * t + 2 * u);
  const S: Pt = [A[0] + 150, A[1]];
  const Tt: Pt = [A[0] - 150, A[1]];
  const pts: Record<string, Pt> = { A, B, C, S, T: Tt };
  if (withO) pts.O = AC;
  return pts;
}

const altSegment: Drill = {
  id: `${T}.alternate-segment`,
  topicId: T,
  title: "The alternate segment theorem",
  level: 3,
  guideRef: "circle-theorems-2",
  generate(rng, tier) {
    const kinds = tier === 1 ? (["SAB", "TAC"] as const) : tier === 2 ? (["BAC", "ABC"] as const) : (["AOB", "OBA", "iso"] as const);
    const kind = rng.pick(kinds as readonly string[]);
    return attempt(() => {
      const t = rng.int(30, 75);
      const v = rng.int(30, 75);
      const u = 180 - t - v;
      if (u < 30) return null;
      const iso = kind === "iso";
      const vv = iso ? t : v;
      const uu = iso ? 180 - 2 * t : u;
      if (iso && (uu < 30 || t < 40)) return null;
      const withO = kind === "AOB" || kind === "OBA";
      const pts = altSegScene(t, uu, withO);
      const base: Array<[string, string]> = [["T", "A"], ["A", "S"], ["A", "B"], ["B", "C"], ["C", "A"]];
      const intro = "The line TAS is a tangent to the circle at A. B and C are points on the circle.";
      let prompt = "";
      let ans = 0;
      let marks: Array<[string, string, string, string] | [string, string, string, string, boolean]> = [];
      let segs = base;
      let solution: string[] = [];
      let traps: Array<[number, string]> = [];
      let hint = "The angle between a tangent and a chord equals the angle in the alternate segment.";
      if (kind === "SAB") {
        const rev = rng.bool(0.5);
        ans = t;
        marks = rev ? [["C", "A", "B", `${t}°`], ["A", "S", "B", "x", true]] : [["A", "S", "B", `${t}°`], ["C", "A", "B", "x", true]];
        prompt = `${intro} ${rev ? `Angle ACB = ${t}°. Work out the size of angle SAB, marked x.` : `Angle SAB = ${t}°. Work out the size of angle ACB, marked x.`}`;
        solution = [`Alternate segment theorem: the angle between the tangent AS and the chord AB equals the angle in the alternate segment, angle ACB.`, `x = ${t}°`];
        traps = [[180 - t, "These angles are equal (alternate segment theorem), not supplementary."], [90 - t, "There is no right angle here — the radius is not drawn."]];
      } else if (kind === "TAC") {
        ans = v;
        marks = [["A", "T", "C", `${v}°`], ["B", "A", "C", "x", true]];
        prompt = `${intro} Angle TAC = ${v}°. Work out the size of angle ABC, marked x.`;
        solution = [`Alternate segment theorem: the angle between the tangent AT and the chord AC equals the angle in the alternate segment, angle ABC.`, `x = ${v}°`];
        traps = [[180 - v, "These angles are equal (alternate segment theorem), not supplementary."], [t, "Pair the tangent with the chord that forms the angle: TAC goes with angle ABC."]];
      } else if (kind === "BAC") {
        ans = u;
        marks = [["A", "S", "B", `${t}°`], ["A", "T", "C", `${v}°`], ["A", "B", "C", "x", true]];
        prompt = `${intro} Angle SAB = ${t}° and angle TAC = ${v}°. Work out the size of angle BAC, marked x.`;
        solution = [`Angles on the straight line TAS add up to 180°.`, `x = 180° − ${t}° − ${v}° = ${u}°`, `Check with the alternate segment theorem: angle ACB = ${t}°, angle ABC = ${v}°, and ${t}° + ${v}° + ${u}° = 180°.`];
        traps = [[t + v, "Subtract both angles from 180°."]];
        hint = "TAS is a straight line.";
      } else if (kind === "ABC") {
        ans = v;
        marks = [["A", "S", "B", `${t}°`], ["A", "B", "C", `${u}°`], ["B", "A", "C", "x", true]];
        prompt = `${intro} Angle SAB = ${t}° and angle BAC = ${u}°. Work out the size of angle ABC, marked x.`;
        solution = [`Alternate segment theorem: angle ACB = angle SAB = ${t}°.`, `Angles in triangle ABC: x = 180° − ${u}° − ${t}° = ${v}°`];
        traps = [[t, "Angle SAB matches angle ACB (the angle opposite chord AB), not angle ABC."], [180 - t - v === u ? 180 - u : 0, "Use the triangle ABC, not the straight line."]];
      } else if (kind === "AOB") {
        ans = 2 * t;
        segs = [...base, ["O", "A"], ["O", "B"]];
        marks = [["A", "S", "B", `${t}°`], ["O", "A", "B", "x", true]];
        prompt = `${intro.replace("the circle", "the circle, centre O,")} Angle SAB = ${t}°. Work out the size of angle AOB, marked x.`;
        solution = [`Alternate segment theorem: angle ACB = angle SAB = ${t}°.`, `Angle at the centre is twice the angle at the circumference: x = 2 × ${t}° = ${2 * t}°`];
        traps = [[t, "That's angle ACB. The angle at the centre is twice it."], [180 - 2 * t, "Check: angle OAS = 90°, so OAB = 90° − SAB and AOB = 180° − 2 × OAB."]];
      } else if (kind === "OBA") {
        ans = 90 - t;
        segs = [...base, ["O", "A"], ["O", "B"]];
        marks = [["A", "S", "B", `${t}°`], ["B", "A", "O", "x", true]];
        prompt = `${intro.replace("the circle", "the circle, centre O,")} Angle SAB = ${t}°. Work out the size of angle OBA, marked x.`;
        solution = [`Tangent ⟂ radius: angle OAS = 90°, so angle OAB = 90° − ${t}° = ${90 - t}°.`, `OA = OB (radii), so triangle OAB is isosceles: x = angle OAB = ${90 - t}°`];
        traps = [[t, "That's angle ACB (alternate segment). Angle OBA is a base angle of the isosceles triangle OAB."], [2 * t, "That's angle AOB."]];
        hint = "The radius OA is perpendicular to the tangent.";
      } else {
        ans = 180 - 2 * t;
        marks = [["A", "S", "B", `${t}°`], ["B", "A", "C", "x", true]];
        prompt = `${intro} AB = AC and angle SAB = ${t}°. Work out the size of angle BAC, marked x.`;
        solution = [`Alternate segment theorem: angle ACB = angle SAB = ${t}°.`, `AB = AC, so triangle ABC is isosceles and angle ABC = angle ACB = ${t}°.`, `x = 180° − 2 × ${t}° = ${ans}°`];
        traps = [[180 - t, "Triangle ABC has TWO base angles of " + t + "°."], [t, "That's angle ACB."]];
      }
      const aria = `Circle${withO ? " with centre O" : ""}. TAS is a tangent at A, the lowest point. Triangle ABC is inscribed. ${prompt.replace(intro, "").replace(intro.replace("the circle", "the circle, centre O,"), "")}`;
      const diagram = drawScene({ w: 400, h: 245, c: AC, R: AR, pts, onCircle: ["A", "B", "C"], segs, marks, aria: aria.replace(/"/g, "") });
      return { prompt, diagram, answer: { type: "number", value: ans }, solution, hint, traps: numTraps(ans, traps) };
    });
  },
};

// ---------------------------------------------------------------------------
// 7. Chord bisector (perpendicular from the centre)
// ---------------------------------------------------------------------------

/** All (half-chord, distance, radius) right triangles from the triple list, both ways round. */
const HDR: Array<[number, number, number]> = TRIPLES.flatMap(([a, b, c]) => [[a, b, c], [b, a, c]] as Array<[number, number, number]>);

function chordScene(r: number, chords: Array<{ d: number; label?: string }>, extra: (p: Record<string, Pt>, s: number) => string, aria: string, names = true): string {
  const s = 100 / r;
  const c: Pt = [200, 130];
  const pts: Record<string, Pt> = { O: c };
  const segs: Array<[string, string] | [string, string, "dash"]> = [];
  const rights: Array<[string, string, string]> = [];
  const letters = [["A", "B", "M"], ["C", "D", "N"]];
  chords.forEach((ch, i) => {
    const half = Math.sqrt(r * r - ch.d * ch.d);
    const y = c[1] + ch.d * s;
    const [l1, l2, m] = letters[i];
    pts[l1] = [c[0] - half * s, y];
    pts[l2] = [c[0] + half * s, y];
    pts[m] = [c[0], y];
    segs.push([l1, l2]);
    if (ch.d !== 0) {
      segs.push(["O", m, "dash"]);
      rights.push([m, "O", l2]);
    }
  });
  return drawScene({ w: 400, h: 265, c, R: 100, pts, onCircle: Object.keys(pts).filter((k) => ["A", "B", "C", "D"].includes(k)), segs, rights, extra: extra(pts, s), aria, hide: names ? [] : Object.keys(pts) });
}

const chordBisector: Drill = {
  id: `${T}.chord-perpendicular`,
  topicId: T,
  title: "Chords: the perpendicular from the centre",
  level: 2,
  guideRef: "chords",
  generate(rng, tier) {
    const kind3 = rng.pick(["parallel", "pipe", "arch"] as const);
    return attempt(() => {
      const unit = rng.pick(["cm", "cm", "m"]);
      if (tier < 3) {
        const exact = tier === 1 || rng.bool(0.3);
        let h: number, d: number, r: number;
        if (exact) [h, d, r] = rng.pick(HDR);
        else {
          r = rng.int(5, 20);
          d = rng.int(2, r - 2);
          h = Math.sqrt(r * r - d * d);
        }
        const mode = rng.pick(exact ? (["chord", "dist"] as const) : (["chord", "dist", "radius"] as const));
        if (!exact && mode !== "chord") {
          // make the given chord a whole number and the answer a surd
          const L = 2 * rng.int(3, 18);
          h = L / 2;
          if (mode === "dist") {
            r = rng.int(Math.ceil(h) + 1, Math.ceil(h) + 10);
            d = Math.sqrt(r * r - h * h);
          } else {
            d = rng.int(2, 15);
            r = Math.sqrt(h * h + d * d);
          }
        }
        if (d / r < 0.2 || d / r > 0.85) return null;
        const value = mode === "chord" ? 2 * h : mode === "dist" ? d : r;
        const ans = Number.isInteger(value) ? value : sf3(value);
        if (ans === null) return null;
        if (!exact && Number.isInteger(value)) return null;
        const acc = Number.isInteger(value) ? "" : " Give your answer correct to 3 significant figures.";
        const diagram = chordScene(r, [{ d }], (p) => {
          let e = "";
          if (mode !== "radius") e += lenLabel(p.O, p.B, `${num(r)} ${unit}`, -12);
          if (mode !== "dist") e += tx([p.M[0] - 14, (p.O[1] + p.M[1]) / 2 + 4], `${num(d)} ${unit}`, { size: 12, color: SOFT, anchor: "end" });
          if (mode !== "chord") e += tx([200, 252], `AB = ${num(2 * h)} ${unit}`, { size: 12, color: SOFT });
          return e;
        }, `Circle with centre O. Chord AB with midpoint M; OM is perpendicular to AB. ${mode === "chord" ? `Radius ${num(r)} ${unit}, OM ${num(d)} ${unit}.` : mode === "dist" ? `Radius ${num(r)} ${unit}, AB ${num(2 * h)} ${unit}.` : `AB ${num(2 * h)} ${unit}, OM ${num(d)} ${unit}.`}`);
        const facts = mode === "chord" ? `The radius is ${num(r)} ${unit} and the chord is ${num(d)} ${unit} from the centre O.` : mode === "dist" ? `The radius is ${num(r)} ${unit} and the chord AB is ${num(2 * h)} ${unit} long.` : `The chord AB is ${num(2 * h)} ${unit} long and its midpoint M is ${num(d)} ${unit} from the centre O.`;
        const ask = mode === "chord" ? "Work out the length of the chord AB." : mode === "dist" ? "Work out the distance OM from the centre to the chord." : "Work out the radius of the circle.";
        const sol =
          mode === "chord"
            ? [`The perpendicular from the centre bisects the chord, so AM = MB and triangle OMB has a right angle at M.`, `MB² = ${num(r)}² − ${num(d)}² = ${num(r * r - d * d)}, so MB = ${Number.isInteger(h) ? num(h) : `{{sqrt(${num(r * r - d * d)})}} = ${s6(h)}…`}`, `AB = 2 × MB = ${Number.isInteger(value) ? num(value) : `${s6(value)}… ≈ ${s3(ans)}`} ${unit}`]
            : mode === "dist"
              ? [`The perpendicular from the centre bisects the chord: MB = ${num(2 * h)} ÷ 2 = ${num(h)} ${unit}.`, `OM² = ${num(r)}² − ${num(h)}² = ${num(r * r - h * h)}`, `OM = ${Number.isInteger(value) ? num(value) : `{{sqrt(${num(r * r - h * h)})}} = ${s6(value)}… ≈ ${s3(ans)}`} ${unit}`]
              : [`MB = ${num(2 * h)} ÷ 2 = ${num(h)} ${unit} (the perpendicular from the centre bisects the chord).`, `OB² = ${num(h)}² + ${num(d)}² = ${num(h * h + d * d)}`, `r = OB = ${Number.isInteger(value) ? num(value) : `{{sqrt(${num(h * h + d * d)})}} = ${s6(value)}… ≈ ${s3(ans)}`} ${unit}`];
        const wrong: Array<[number, string]> =
          mode === "chord"
            ? [[Number.isInteger(h) ? h : sf3(h) ?? 0, "That's only half the chord (MB). Double it."]]
            : mode === "dist"
              ? [[sf3(Math.sqrt(Math.max(r * r - 4 * h * h, 0))) ?? 0, "Halve the chord first: the right-angled triangle uses MB, not AB."]]
              : [[sf3(Math.sqrt(4 * h * h + d * d)) ?? 0, "Halve the chord first: the right-angled triangle uses MB, not AB."]];
        return { prompt: `${facts} ${ask}${acc}`, diagram, answer: { type: "number", value: ans }, solution: sol, hint: "Draw the radius to the end of the chord: you get a right-angled triangle with half the chord as one side.", traps: numTraps(ans, wrong) };
      }
      // tier 3
      const kind = kind3;
      if (kind === "parallel") {
        const r = rng.pick([5, 10, 13, 15, 17, 25, 26]);
        const opts = HDR.filter((x) => x[2] === r);
        if (opts.length < 2) return null;
        const [p1, p2] = rng.shuffle(opts).slice(0, 2);
        if (p1[1] === p2[1]) return null;
        const opposite = rng.bool(0.5);
        const ans = opposite ? p1[1] + p2[1] : Math.abs(p1[1] - p2[1]);
        const diagram = chordScene(r, [{ d: p1[1] }, { d: opposite ? -p2[1] : p2[1] }], () => "", `Circle with centre O and two parallel chords AB and CD of lengths ${2 * p1[0]} and ${2 * p2[0]} ${unit}, on ${opposite ? "opposite sides" : "the same side"} of the centre.`);
        return {
          prompt: `A circle has radius ${r} ${unit}. AB and CD are parallel chords with AB = ${2 * p1[0]} ${unit} and CD = ${2 * p2[0]} ${unit}. The chords are on ${opposite ? "opposite sides" : "the same side"} of the centre O. Work out the distance between the chords.`,
          diagram,
          answer: { type: "number", value: ans },
          solution: [`Distance from O to AB: {{sqrt(${r}^2 - ${p1[0]}^2)}} = {{sqrt(${r * r - p1[0] * p1[0]})}} = ${p1[1]} ${unit}`, `Distance from O to CD: {{sqrt(${r}^2 - ${p2[0]}^2)}} = {{sqrt(${r * r - p2[0] * p2[0]})}} = ${p2[1]} ${unit}`, opposite ? `Opposite sides of the centre: ${p1[1]} + ${p2[1]} = ${ans} ${unit}` : `Same side of the centre: ${Math.max(p1[1], p2[1])} − ${Math.min(p1[1], p2[1])} = ${ans} ${unit}`],
          hint: "Find how far each chord is from the centre, using half of each chord.",
          traps: numTraps(ans, [[opposite ? Math.abs(p1[1] - p2[1]) : p1[1] + p2[1], opposite ? "The chords are on opposite sides of O — add the distances." : "The chords are on the same side of O — subtract the distances."]]),
        };
      }
      if (kind === "pipe") {
        const [h, d, r] = rng.pick(HDR);
        if (d / r < 0.2 || d / r > 0.85) return null;
        const more = rng.bool(0.4);
        const ans = more ? r + d : r - d;
        const w = 2 * h;
        const diagram = chordScene(r, [{ d: more ? -d : d }], (p, s) => {
          const big = more ? 1 : 0;
          return `<path d="M${f1(p.A[0])},${f1(p.A[1])} A100,100 0 ${big} 0 ${f1(p.B[0])},${f1(p.B[1])} Z" fill="#bae6fd" stroke="none" opacity="0.8"/>` + tx([200, 22], `water surface AB = ${w} ${unit}`, { size: 12, color: SOFT }) + (s ? "" : "");
        }, `Cross-section of a pipe of radius ${r} ${unit} with water in the bottom; the water surface AB is ${w} ${unit} wide and the pipe is ${more ? "more" : "less"} than half full.`);
        return {
          prompt: `The cross-section of a pipe is a circle of radius ${r} ${unit}. Water lies in the bottom of the pipe, and the water surface AB is ${w} ${unit} wide. The pipe is ${more ? "more" : "less"} than half full. Work out the greatest depth of the water.`,
          diagram,
          answer: { type: "number", value: ans },
          solution: [`Half the surface: MB = ${h} ${unit}. The perpendicular from O bisects the chord AB.`, `OM = {{sqrt(${r}^2 - ${h}^2)}} = {{sqrt(${r * r - h * h})}} = ${d} ${unit}`, more ? `The water surface is above the centre, so depth = r + OM = ${r} + ${d} = ${ans} ${unit}` : `The water surface is below the centre, so depth = r − OM = ${r} − ${d} = ${ans} ${unit}`],
          hint: "Find the distance from the centre to the water surface, then think about where the bottom of the pipe is.",
          traps: numTraps(ans, [[d, "That's the distance from the centre to the surface, not the depth."], [more ? r - d : r + d, more ? "The pipe is more than half full: the surface is above the centre." : "The pipe is less than half full: the surface is below the centre."]]),
        };
      }
      // arch: span 2h, height s → radius
      const hh = rng.int(4, 30);
      const sg = rng.int(2, hh - 1);
      if ((hh * hh + sg * sg) % (2 * sg) !== 0) return null;
      const r = (hh * hh + sg * sg) / (2 * sg);
      const d = r - sg;
      if (d / r < 0.15) return null;
      const diagram = chordScene(r, [{ d: -d }], (p) => {
        const top: Pt = [200, 130 - 100];
        return seg(p.M, top, { dash: true, color: "#b45309" }) + tx([p.M[0] + 8, (p.M[1] + top[1]) / 2 + 4], `${sg} ${unit}`, { size: 12, color: "#b45309", anchor: "start" }) + tx([200, p.A[1] + 18], `AB = ${2 * hh} ${unit}`, { size: 12, color: SOFT });
      }, `Circle with a chord AB of length ${2 * hh} ${unit}; the arc above AB rises ${sg} ${unit} above the midpoint of AB.`);
      return {
        prompt: `A bridge arch is an arc of a circle. The arch spans AB = ${2 * hh} ${unit} and its highest point is ${sg} ${unit} above the midpoint of AB. Work out the radius of the circle.`,
        diagram,
        answer: { type: "number", value: r },
        solution: [`Let the radius be r. The centre O is directly below the top of the arch, so OM = r − ${sg}.`, `Right-angled triangle OMB: r² = ${hh}² + (r − ${sg})²`, `r² = ${hh * hh} + r² − ${2 * sg}r + ${sg * sg}, so ${2 * sg}r = ${hh * hh + sg * sg}`, `r = ${hh * hh + sg * sg} ÷ ${2 * sg} = ${num(r)} ${unit}`],
        hint: "Call the radius r. Write the distance from the centre to AB in terms of r, then use Pythagoras.",
        traps: numTraps(r, [[(hh * hh + sg * sg) / sg, `You forgot to divide by 2 in ${2 * sg}r.`]]),
      };
    });
  },
};

// ---------------------------------------------------------------------------
// 8. Intersecting chords, secants, tangent–secant
// ---------------------------------------------------------------------------

interface PLine {
  s1: number;
  s2: number;
  n1: string;
  n2: string;
  sign: 1 | -1;
}
/** Power-of-a-point diagram. Units: O at origin; P on the negative x-axis at distance OP. */
function powerDiagram(R: number, OP: number, lines: PLine[], labels: Array<[string, string, string]>, aria: string, external: boolean): string {
  const sc = external ? Math.min(100 / R, 250 / OP) : 100 / R;
  const O: Pt = external ? [285, 130] : [200, 130];
  const P: Pt = [O[0] - OP * sc, O[1]];
  const pts: Record<string, Pt> = { P };
  const segs: Array<[string, string]> = [];
  const lineOf: Record<string, number> = {};
  const lineDir: Pt[] = [];
  for (const L of lines) {
    const cos = OP === 0 ? 0 : (L.s1 + L.s2) / (2 * OP);
    const th = Math.acos(Math.max(-1, Math.min(1, cos)));
    const u: Pt = [Math.cos(th), -L.sign * Math.sin(th)];
    pts[L.n1] = add(P, u, L.s1 * sc);
    if (L.n2 !== L.n1) pts[L.n2] = add(P, u, L.s2 * sc);
    segs.push([L.n1, L.n2 === L.n1 ? "P" : L.n2]);
    if (external) segs.push(["P", L.n1]);
    lineOf[L.n1] = lineDir.length;
    lineOf[L.n2] = lineDir.length;
    lineDir.push(u);
  }
  let extra = "";
  for (const [a, b, s] of labels) {
    const A = pts[a];
    const B = pts[b];
    const u = dirTo(A, B);
    let n: Pt = [-u[1], u[0]];
    const m = mid(A, B);
    // Push the label away from the other line through P.
    const other = lineDir[1 - lineOf[a === "P" ? b : a]];
    let w: Pt = other;
    if (!external) {
      const v = dirTo(P, a === "P" ? B : A);
      if (v[0] * other[0] + v[1] * other[1] < 0) w = [-other[0], -other[1]];
    }
    if (n[0] * w[0] + n[1] * w[1] > 0) n = [-n[0], -n[1]];
    const at = add(m, n, 11);
    extra += tx([at[0], at[1] + 4.5], s, { size: 12, color: SOFT });
  }
  return drawScene({ w: 420, h: 260, c: O, R: R * sc, pts, onCircle: Object.keys(pts).filter((k) => k !== "P"), segs, extra, aria, hide: [] });
}

const intersectingChords: Drill = {
  id: `${T}.intersecting-chords`,
  topicId: T,
  title: "Intersecting chords and secants",
  level: 3,
  guideRef: "chords",
  generate(rng, tier) {
    const unit = "cm";
    const kind = tier === 1 ? "inside" : tier === 2 ? rng.pick(["inside", "outside", "tangent"] as const) : rng.pick(["quadIn", "linIn", "quadOut", "tangent3"] as const);
    return attempt(() => {
      if (kind === "inside" || kind === "linIn" || kind === "quadIn") {
        let a: number, b: number, c: number, d: number;
        let x = 0;
        let exprs: [string, string, string, string];
        if (kind === "inside") {
          a = rng.int(2, tier === 1 ? 12 : 15);
          b = rng.int(2, tier === 1 ? 12 : 15);
          c = rng.int(2, tier === 1 ? 12 : 15);
          const prod = a * b;
          if ((prod * (tier === 1 ? 2 : 10)) % c !== 0) return null;
          d = prod / c;
          if (d > 25 || c === a || c === b || Math.min(a, b) / Math.max(a, b) < 0.3 || Math.min(c, d) / Math.max(c, d) < 0.3) return null;
          exprs = [`${a}`, `${b}`, `${c}`, "x"];
        } else if (kind === "linIn") {
          // AP = x, PB = b, CP = c, PD = x + k  → bx = c(x + k)
          b = rng.int(5, 14);
          c = rng.int(2, b - 1);
          const k = rng.int(1, 9);
          if ((c * k) % (b - c) !== 0) return null;
          x = (c * k) / (b - c);
          if (x < 2 || x > 20) return null;
          a = x;
          d = x + k;
          exprs = ["x", `${b}`, `${c}`, `x + ${k}`];
        } else {
          // AP = x, PB = x + k, CP = c, PD = d → x² + kx − cd = 0
          x = rng.int(2, 10);
          const k = rng.int(1, 8);
          a = x;
          b = x + k;
          const prod = a * b;
          const fs: number[] = [];
          for (let f = 2; f * f <= prod; f++) if (prod % f === 0 && f !== prod / f) fs.push(f);
          if (!fs.length) return null;
          c = rng.pick(fs);
          d = prod / c;
          if (rng.bool(0.5)) [c, d] = [d, c];
          if (d > 30 || c > 30) return null;
          exprs = ["x", `x + ${k}`, `${c}`, `${d}`];
        }
        if (a === b && c === d) return null;
        if (Math.min(a, b) / Math.max(a, b) < 0.22 || Math.min(c, d) / Math.max(c, d) < 0.22) return null;
        const R = (Math.max(a + b, c + d) / 2) * 1.04;
        const OP = Math.sqrt(R * R - a * b);
        if (OP < 0.12 * R) return null;
        const diagram = powerDiagram(R, OP, [
          { s1: -a, s2: b, n1: "A", n2: "B", sign: 1 },
          { s1: -c, s2: d, n1: "C", n2: "D", sign: -1 },
        ], [["P", "A", exprs[0]], ["P", "B", exprs[1]], ["P", "C", exprs[2]], ["P", "D", exprs[3]]], `Chords AB and CD cross at P inside the circle. AP is ${exprs[0]}, PB is ${exprs[1]}, CP is ${exprs[2]} and PD is ${exprs[3]} (cm).`, false);
        if (kind === "inside") {
          const ans = clean(d);
          return {
            prompt: `The chords AB and CD of a circle intersect at P. AP = ${a} cm, PB = ${b} cm and CP = ${c} cm. Work out the length of PD.`,
            diagram,
            answer: { type: "number", value: ans },
            solution: [`Intersecting chords: AP × PB = CP × PD`, `${a} × ${b} = ${c} × PD, so ${a * b} = ${c} × PD`, `PD = ${a * b} ÷ ${c} = ${num(ans)} ${unit}`],
            hint: "For two chords crossing inside a circle, the products of the two parts of each chord are equal.",
            traps: numTraps(ans, [[a + b - c, "The parts don't add up the same way — multiply the two parts of each chord."], [clean((a * c) / b), "Pair the parts of the SAME chord: AP × PB = CP × PD."]]),
          };
        }
        if (kind === "linIn") {
          const k = d - a;
          return {
            prompt: `The chords AB and CD of a circle intersect at P. AP = x cm, PB = ${b} cm, CP = ${c} cm and PD = (x + ${k}) cm. Work out the value of x.`,
            diagram,
            answer: { type: "number", value: x },
            solution: [`Intersecting chords: AP × PB = CP × PD`, `${b}x = ${c}(x + ${k}) = ${c}x + ${c * k}`, `${b - c}x = ${c * k}, so x = ${x}`],
            hint: "Write AP × PB = CP × PD as an equation in x.",
            traps: numTraps(x, [[x + k, "That's PD. The question asks for x."]]),
          };
        }
        const k = b - a;
        return {
          prompt: `The chords AB and CD of a circle intersect at P. AP = x cm, PB = (x + ${k}) cm, CP = ${c} cm and PD = ${d} cm. Work out the value of x.`,
          diagram,
          answer: { type: "number", value: x },
          solution: [`Intersecting chords: x(x + ${k}) = ${c} × ${d} = ${c * d}`, `x² + ${k === 1 ? "" : k}x − ${c * d} = 0`, `(x − ${x})(x + ${x + k}) = 0, so x = ${x} or x = −${x + k}`, `x is a length, so x = ${x}`],
          hint: "AP × PB = CP × PD gives a quadratic. Which root makes sense for a length?",
          traps: numTraps(x, [[x + k, "That's PB. The question asks for x."]]),
        };
      }
      // External point
      if (kind === "outside" || kind === "quadOut") {
        let a: number, k: number, c: number, e: number;
        if (kind === "outside") {
          a = rng.int(2, 12);
          k = rng.int(3, 15);
          c = rng.int(2, 12);
          const pd = (a * (a + k)) / c;
          if (!Number.isInteger(pd * 10) || pd <= c + 1 || c === a) return null;
          e = clean(pd - c);
        } else {
          a = rng.int(2, 10);
          k = rng.int(2, 10);
          const prod = a * (a + k);
          const fs: number[] = [];
          for (let f = 2; f * f < prod; f++) if (prod % f === 0) fs.push(f);
          if (!fs.length) return null;
          c = rng.pick(fs);
          e = prod / c - c;
          if (c === a || e < 2) return null;
        }
        const pd = c + e;
        if (k > 3 * a || e > 3 * c) return null;
        const R = Math.max(k, e) / 2 * rng.pick([1.25, 1.4, 1.6]);
        const OP = Math.sqrt(R * R + a * (a + k));
        if ((2 * a + k) / (2 * OP) > 0.985 || (c + pd) / (2 * OP) > 0.985) return null;
        const quad = kind === "quadOut";
        const diagram = powerDiagram(R, OP, [
          { s1: a, s2: a + k, n1: "A", n2: "B", sign: 1 },
          { s1: c, s2: pd, n1: "C", n2: "D", sign: -1 },
        ], [["P", "A", quad ? "x" : `${a}`], ["A", "B", `${k}`], ["P", "C", `${c}`], ...(quad ? ([["C", "D", `${num(e)}`]] as Array<[string, string, string]>) : [])], `P is outside the circle. One line from P meets the circle at A then B, the other at C then D. PA is ${quad ? "x" : a}, AB is ${k}, PC is ${c}${quad ? `, CD is ${num(e)}` : ""} (cm).`, true);
        if (!quad) {
          return {
            prompt: `P is a point outside a circle. A line from P meets the circle at A and B, and another line from P meets the circle at C and D, as shown. PA = ${a} cm, AB = ${k} cm and PC = ${c} cm. Work out the length of CD.`,
            diagram,
            answer: { type: "number", value: e },
            solution: [`For two secants from P: PA × PB = PC × PD (use the WHOLE lengths from P).`, `PB = ${a} + ${k} = ${a + k}, so ${a} × ${a + k} = ${c} × PD and PD = ${a * (a + k)} ÷ ${c} = ${num(pd)}`, `CD = PD − PC = ${num(pd)} − ${c} = ${num(e)} ${unit}`],
            hint: "Use PA × PB = PC × PD, where PB and PD are measured all the way from P.",
            traps: numTraps(e, [[clean(pd), "That's PD. Subtract PC to get CD."], [clean((a * k) / c), "Use the whole secant PB = PA + AB, not just AB."]]),
          };
        }
        return {
          prompt: `P is a point outside a circle. A line from P meets the circle at A and B, and another line from P meets the circle at C and D. PA = x cm, AB = ${k} cm, PC = ${c} cm and CD = ${num(e)} cm. Work out the value of x.`,
          diagram,
          answer: { type: "number", value: a },
          solution: [`PA × PB = PC × PD: x(x + ${k}) = ${c} × ${num(pd)} = ${num(c * pd)}`, `x² + ${k === 1 ? "" : k}x − ${num(c * pd)} = 0`, `(x − ${a})(x + ${a + k}) = 0, so x = ${a} (a length is positive)`],
          hint: "PB = x + " + k + ". Form a quadratic and reject the negative root.",
          traps: numTraps(a, [[a + k, "That's PB, not PA."]]),
        };
      }
      // Tangent–secant
      let a: number, k: number, t: number;
      for (let i = 0; ; i++) {
        if (i > 200) return null;
        a = rng.int(2, 12);
        k = rng.int(2, 20);
        if (k > 3.5 * a) continue;
        t = Math.sqrt(a * (a + k));
        if (Number.isInteger(t) || (tier === 3 && rng.bool(0.4))) break;
      }
      const askAB = tier === 3 && Number.isInteger(t) && rng.bool(0.5);
      const R = Math.max(k / 2 * 1.3, t * 0.55);
      const OP = Math.sqrt(R * R + t * t);
      if ((2 * a + k) / (2 * OP) > 0.985) return null;
      const exactT = Number.isInteger(t);
      const tAns = exactT ? t : sf3(t);
      if (tAns === null) return null;
      const diagram = powerDiagram(R, OP, [
        { s1: t, s2: t, n1: "T", n2: "T", sign: 1 },
        { s1: a, s2: a + k, n1: "A", n2: "B", sign: -1 },
      ], [["P", "A", `${a}`], ["A", "B", askAB ? "?" : `${k}`], ...(askAB ? ([["P", "T", `${t}`]] as Array<[string, string, string]>) : [])], `P is outside the circle. PT is a tangent touching at T. A line from P meets the circle at A then B. PA is ${a} cm${askAB ? `, PT is ${t} cm` : `, AB is ${k} cm`}.`, true);
      if (askAB) {
        return {
          prompt: `PT is a tangent to a circle at T. A line from P meets the circle at A and B, with A between P and B. PT = ${t} cm and PA = ${a} cm. Work out the length of AB.`,
          diagram,
          answer: { type: "number", value: k },
          solution: [`Tangent–secant: PT² = PA × PB`, `${t}² = ${a} × PB, so PB = ${t * t} ÷ ${a} = ${a + k}`, `AB = PB − PA = ${a + k} − ${a} = ${k} cm`],
          hint: "PT² = PA × PB. Find PB first.",
          traps: numTraps(k, [[a + k, "That's PB. Subtract PA."]]),
        };
      }
      return {
        prompt: `PT is a tangent to a circle at T. A line from P meets the circle at A and B, with A between P and B. PA = ${a} cm and AB = ${k} cm. Work out the length of PT.${exactT ? "" : " Give your answer correct to 3 significant figures."}`,
        diagram,
        answer: { type: "number", value: tAns },
        solution: [`Tangent–secant: PT² = PA × PB`, `PB = ${a} + ${k} = ${a + k}, so PT² = ${a} × ${a + k} = ${a * (a + k)}`, `PT = {{sqrt(${a * (a + k)})}} = ${exactT ? t : `${s6(t)}… ≈ ${s3(tAns)}`} cm`],
        hint: "The tangent squared equals the product of the two distances along the secant from P.",
        traps: numTraps(tAns, [[(Number.isInteger(Math.sqrt(a * k)) ? Math.sqrt(a * k) : sf3(Math.sqrt(a * k))) ?? 0, "Use the whole secant PB = PA + AB, not AB."], [a * (a + k), "Square root at the end: PT² is the product."]]),
      };
    });
  },
};

// ---------------------------------------------------------------------------
// 9. Following the proof of the angle at the centre
// ---------------------------------------------------------------------------

const proofCentre: Drill = {
  id: `${T}.proof-steps`,
  topicId: T,
  title: "Follow the proof: isosceles triangles from radii",
  level: 3,
  guideRef: "circle-proofs",
  generate(rng, tier) {
    const kind = tier === 1 ? rng.pick(["exterior", "exterior2"] as const) : tier === 2 ? rng.pick(["whole", "back"] as const) : rng.pick(["bowtie", "semicircle"] as const);
    return attempt(() => {
      const c: Pt = [200, 135];
      const R = 105;
      if (kind === "semicircle") {
        const a = rng.int(18, 70);
        if (a === 45) return null;
        const pts: Record<string, Pt> = { A: pol(c, R, 180), B: pol(c, R, 0), C: pol(c, R, 2 * a), O: c };
        const diagram = drawScene({
          w: 400, h: 265, c, R, pts, onCircle: ["A", "B", "C"],
          segs: [["A", "B"], ["A", "C"], ["B", "C"], ["O", "C"]],
          marks: [["A", "O", "C", `${a}°`], ["B", "O", "C", "x", true]],
          aria: `Circle with centre O and diameter AB. C is on the circle and OC is a radius. Angle OAC is ${a}° and angle OBC is marked x.`,
        });
        return {
          prompt: `AB is a diameter of a circle, centre O, and C is a point on the circle. Angle OAC = ${a}°. By using the isosceles triangles OAC and OBC, work out angle OBC, marked x.`,
          diagram,
          answer: { type: "number", value: 90 - a },
          solution: [`OA = OC (radii), so angle OCA = ${a}° and angle AOC = 180° − ${2 * a}° = ${180 - 2 * a}°.`, `Angle BOC = 180° − ${180 - 2 * a}° = ${2 * a}° (angles on the straight line AB).`, `OB = OC (radii), so x = (180° − ${2 * a}°) ÷ 2 = ${90 - a}°.`, `So angle ACB = ${a}° + ${90 - a}° = 90°: this is the proof that the angle in a semicircle is a right angle.`],
          hint: "Find angle AOC, then angle BOC on the straight line, then use triangle OBC.",
          traps: numTraps(90 - a, [[a, "Triangle OBC is isosceles too, but its base angles are not the same as triangle OAC's."], [180 - 2 * a, "That's angle AOC."]]),
        };
      }
      const a = rng.int(15, 40);
      let b = rng.int(15, 40);
      if (kind === "bowtie") {
        b = rng.int(a + 8, 50);
        if (b > 50) return null;
      }
      if (kind !== "bowtie" && kind !== "exterior" && kind !== "exterior2" && Math.abs(a - b) < 4) return null;
      const pts: Record<string, Pt> = { C: pol(c, R, 90), D: pol(c, R, 270), A: pol(c, R, 270 - 2 * a), B: kind === "bowtie" ? pol(c, R, 270 - 2 * b) : pol(c, R, 2 * b - 90), O: c };
      if (kind === "exterior" || kind === "exterior2") {
        const useOAC = kind === "exterior2";
        const diagram = drawScene({
          w: 400, h: 265, c, R, pts: { C: pts.C, D: pts.D, A: pts.A, O: c }, onCircle: ["A", "C", "D"], labelDir: { O: [1, -0.2] },
          segs: [["C", "A"], ["O", "A"], ["C", "O"], ["O", "D", "dash"]],
          marks: [useOAC ? ["A", "O", "C", `${a}°`] : ["C", "A", "O", `${a}°`], ["O", "A", "D", "x", true]],
          aria: `Circle with centre O. C and A are on the circle; CO is extended to D. ${useOAC ? "Angle OAC" : "Angle OCA"} is ${a}° and angle AOD is marked x.`,
        });
        return {
          prompt: `A and C are points on a circle, centre O. The line CO is extended to the point D on the circle. ${useOAC ? `Angle OAC = ${a}°` : `Angle OCA = ${a}°`}. Work out the size of angle AOD, marked x.`,
          diagram,
          answer: { type: "number", value: 2 * a },
          solution: [`OA = OC (radii), so triangle OAC is isosceles and angle ${useOAC ? "OCA" : "OAC"} = ${a}°.`, `The exterior angle of a triangle equals the sum of the two interior opposite angles: x = ${a}° + ${a}° = ${2 * a}°.`, `This is the key step in proving that the angle at the centre is twice the angle at the circumference.`],
          hint: "Two radii make an isosceles triangle. Then use the exterior angle of triangle OAC.",
          traps: numTraps(2 * a, [[180 - 2 * a, "That's angle AOC. Angle AOD is the exterior angle on the straight line COD."], [a, "Triangle OAC has TWO equal angles of " + a + "°; the exterior angle is their sum."]]),
        };
      }
      if (kind === "whole" || kind === "back") {
        const back = kind === "back";
        const y = 2 * (a + b);
        const diagram = drawScene({
          w: 400, h: 265, c, R, pts, onCircle: ["A", "B", "C", "D"], labelDir: { O: [1, -0.45] },
          segs: [["C", "A"], ["C", "B"], ["O", "A"], ["O", "B"], ["C", "O"], ["O", "D", "dash"]],
          marks: back ? [["C", "A", "O", `${a}°`], ["O", "A", "B", `${y}°`], ["C", "O", "B", "x", true]] : [["C", "A", "O", `${a}°`], ["C", "O", "B", `${b}°`], ["O", "A", "B", "x", true]],
          aria: `Circle with centre O. C is at the top; CO is extended to D. A and B are on either side. Angle OCA is ${a}°. ${back ? `Angle AOB is ${y}° and angle OCB is marked x.` : `Angle OCB is ${b}° and angle AOB is marked x.`}`,
        });
        return {
          prompt: back
            ? `A, B and C are points on a circle, centre O, and CO extended meets the circle at D. Angle OCA = ${a}° and angle AOB = ${y}°. Work out the size of angle OCB, marked x.`
            : `A, B and C are points on a circle, centre O, and CO extended meets the circle at D. Angle OCA = ${a}° and angle OCB = ${b}°. Work out the size of angle AOB, marked x.`,
          diagram,
          answer: { type: "number", value: back ? b : y },
          solution: back
            ? [`OA = OC (radii), so angle OAC = ${a}° and the exterior angle AOD = ${a}° + ${a}° = ${2 * a}°.`, `So angle BOD = ${y}° − ${2 * a}° = ${2 * b}°.`, `OB = OC (radii), so angle BOD = 2 × angle OCB: x = ${2 * b}° ÷ 2 = ${b}°.`]
            : [`OA = OC (radii), so angle OAC = ${a}°; exterior angle AOD = ${a}° + ${a}° = ${2 * a}°.`, `OB = OC (radii), so angle OBC = ${b}°; exterior angle BOD = ${b}° + ${b}° = ${2 * b}°.`, `x = ${2 * a}° + ${2 * b}° = ${y}° — exactly twice angle ACB = ${a + b}°. That is the angle at the centre theorem.`],
          hint: "Split the angle at O using the line COD, and use the two isosceles triangles.",
          traps: numTraps(back ? b : y, back ? [[a + b, "That's angle ACB. Subtract angle OCA from it."]] : [[a + b, "That's angle ACB. The angle at the centre is twice it."]]),
        };
      }
      // bowtie: A and B on the same side of CD; AOB = 2(b − a)
      const y = 2 * (b - a);
      const diagram = drawScene({
        w: 400, h: 265, c, R, pts, onCircle: ["A", "B", "C", "D"], labelDir: { O: [1, -0.45] },
        segs: [["C", "A"], ["C", "B"], ["O", "A"], ["O", "B"], ["C", "O"], ["O", "D", "dash"]],
        marks: [["C", "A", "O", `${a}°`, false, 26], ["C", "A", "B", `${b - a}°`, false, 58], ["O", "A", "B", "x", true]],
        aria: `Circle with centre O. C is at the top and CO is extended to D. A and B are both on the left of CD. Angle OCA is ${a}°, angle ACB is ${b - a}° and angle AOB is marked x.`,
      });
      return {
        prompt: `A, B and C are points on a circle, centre O, with A and B on the same side of the diameter CD. Angle OCA = ${a}° and angle ACB = ${b - a}°. Work out the size of angle AOB, marked x.`,
        diagram,
        answer: { type: "number", value: y },
        solution: [`Angle OCB = ${a}° + ${b - a}° = ${b}°.`, `OA = OC, so angle AOD = 2 × ${a}° = ${2 * a}° (exterior angle). OB = OC, so angle BOD = 2 × ${b}° = ${2 * b}°.`, `x = angle BOD − angle AOD = ${2 * b}° − ${2 * a}° = ${y}° — still twice angle ACB, even though O is outside triangle ACB.`],
        hint: "This time subtract: find angles AOD and BOD separately.",
        traps: numTraps(y, [[b - a, "That's angle ACB. The angle at the centre is twice it."], [2 * (a + b), "A and B are on the same side of CD, so subtract the two angles at O."]]),
      };
    });
  },
};

// ---------------------------------------------------------------------------
// 10. Loci: areas of regions
// ---------------------------------------------------------------------------

function lociAnswer(rng: Rng, tier: Tier, n: number, d: number, plus: number, unit: string) {
  // area = plus + (n/d)π
  const exact = rng.bool(tier === 1 ? 0.5 : 0.4);
  const val = plus + (n / d) * Math.PI;
  const r3 = sf3(val);
  if (!exact && r3 === null) return null;
  const pf = piFrac(Math.abs(n), d);
  const sg = n < 0 ? "-" : "+";
  const expr = plus === 0 ? pf.expr : `${plus}${sg}${pf.expr}`;
  const show = plus === 0 ? pf.show : `{{${plus}}} ${n < 0 ? "−" : "+"} ${pf.show}`;
  return {
    exact,
    ask: exact ? `Give your answer in terms of π.` : `Give your answer correct to 3 significant figures.`,
    answer: exact ? ({ type: "expression", expr, display: show } as const) : ({ type: "number", value: r3 as number } as const),
    final: exact ? `${show} ${unit}²` : `${s6(val)}… ≈ ${s3(r3 as number)} ${unit}²`,
    val,
    r3,
  };
}

const RECT = (x: number, y: number, w: number, h: number, fill = "none") => `<rect x="${f1(x)}" y="${f1(y)}" width="${f1(w)}" height="${f1(h)}" fill="${fill}" stroke="${INK}" stroke-width="2"/>`;

const lociArea: Drill = {
  id: `${T}.loci-regions`,
  topicId: T,
  title: "Loci: areas of regions",
  level: 2,
  guideRef: "constructions-loci",
  generate(rng, tier) {
    const kind = tier === 1 ? rng.pick(["corner", "wall", "square"] as const) : tier === 2 ? rng.pick(["path", "pond", "square"] as const) : rng.pick(["shed", "shed", "pond"] as const);
    return attempt(() => {
      const unit = "m";
      const name = rng.pick(["A goat", "A pony", "A donkey", "A sheep"]);
      if (kind === "corner" || kind === "wall") {
        const r = rng.int(3, 12);
        const quarter = kind === "corner";
        const L = quarter ? rng.int(r + 3, 25) : rng.int(2 * r + 2, 2 * r + 14);
        const W = quarter ? rng.int(r + 2, 20) : rng.int(r + 2, L - 1);
        if (W >= L && !quarter) return null;
        const ans = lociAnswer(rng, tier, r * r, quarter ? 4 : 2, 0, unit);
        if (!ans) return null;
        const s = Math.min(320 / L, 190 / W);
        const x0 = 40;
        const y0 = 30;
        const post: Pt = quarter ? [x0, y0 + W * s] : [x0 + (L * s) / 2, y0 + W * s];
        const shape = quarter
          ? `<path d="M${f1(post[0])},${f1(post[1])} L${f1(post[0] + r * s)},${f1(post[1])} A${f1(r * s)},${f1(r * s)} 0 0 0 ${f1(post[0])},${f1(post[1] - r * s)} Z" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>`
          : `<path d="M${f1(post[0] - r * s)},${f1(post[1])} A${f1(r * s)},${f1(r * s)} 0 0 1 ${f1(post[0] + r * s)},${f1(post[1])} Z" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>`;
        const diagram = svgOpen(400, 260, `A ${L} m by ${W} m rectangular field. The animal is tied ${quarter ? "at a corner" : "at the midpoint of one long side"} with a ${r} m rope; the region it can reach is shaded.`) + RECT(x0, y0, L * s, W * s) + shape + `<circle cx="${f1(post[0])}" cy="${f1(post[1])}" r="3.5" fill="${INK}"/>` + tx([x0 + (L * s) / 2, y0 - 8], `${L} m`, { size: 12, color: SOFT }) + tx([x0 + L * s + 8, y0 + (W * s) / 2], `${W} m`, { size: 12, color: SOFT, anchor: "start" }) + "</svg>";
        return {
          prompt: `${name} is tied by a rope of length ${r} m to a post ${quarter ? "at one corner of" : "at the middle of one of the long sides of"} a rectangular field measuring ${L} m by ${W} m. The animal stays inside the field. Work out the area of the region of the field it can reach. ${ans.ask}`,
          diagram,
          answer: ans.answer,
          solution: [
            `The points within ${r} m of the post form a circle of radius ${r} m; inside the field only ${quarter ? "a quarter" : "a half"} of it is available.`,
            `Area = {{1/${quarter ? 4 : 2}}} × π × ${r}² = ${piFrac(r * r, quarter ? 4 : 2).show}`,
            `= ${ans.final}`,
          ],
          hint: "The locus of points within a fixed distance of a point is a circle. What fraction of it fits inside the field?",
          traps: ans.exact ? [{ spec: { type: "expression", expr: `${r * r}pi` }, feedback: `That's the whole circle. The field's edges cut it to ${quarter ? "a quarter" : "a half"}.` }] : numTraps(ans.r3 as number, [[sf3(Math.PI * r * r) ?? 0, `That's the whole circle. The field's edges cut it to ${quarter ? "a quarter" : "a half"}.`], [sf3((Math.PI * r * r) / (quarter ? 2 : 4)) ?? 0, `Check the fraction: a ${quarter ? "corner (90°) gives a quarter" : "straight edge (180°) gives a half"} of the circle.`]]),
        };
      }
      if (kind === "square") {
        const side = rng.int(6, 20);
        const r = rng.int(2, side - 2);
        const ans = lociAnswer(rng, tier, -r * r, 4, side * side, unit);
        if (!ans) return null;
        const s = 200 / side;
        const x0 = 100;
        const y0 = 30;
        const Ap: Pt = [x0, y0 + side * s];
        const diagram = svgOpen(400, 260, `Square ABCD of side ${side} m. The region more than ${r} m from corner A is shaded; a quarter circle of radius ${r} m around A is left unshaded.`) + RECT(x0, y0, side * s, side * s, "#bbf7d0") + `<path d="M${f1(Ap[0])},${f1(Ap[1])} L${f1(Ap[0] + r * s)},${f1(Ap[1])} A${f1(r * s)},${f1(r * s)} 0 0 0 ${f1(Ap[0])},${f1(Ap[1] - r * s)} Z" fill="#ffffff" stroke="#15803d" stroke-width="1.5" stroke-dasharray="5 4"/>` + tx([Ap[0] - 12, Ap[1] + 14], "A", { bold: true, size: 14 }) + tx([x0 + (side * s) / 2, y0 - 8], `${side} m`, { size: 12, color: SOFT }) + "</svg>";
        return {
          prompt: `ABCD is a square lawn with sides of ${side} m. A sprinkler at corner A waters every point of the lawn within ${r} m of A. Work out the area of the lawn that is NOT watered. ${ans.ask}`,
          diagram,
          answer: ans.answer,
          solution: [`Watered region: a quarter circle of radius ${r} m, area {{1/4}} × π × ${r}² = ${piFrac(r * r, 4).show}`, `Not watered = ${side}² − ${piFrac(r * r, 4).show} = ${side * side} − ${piFrac(r * r, 4).show}`, `= ${ans.final}`],
          hint: "Find the watered area (part of a circle) and subtract it from the square.",
          traps: ans.exact ? undefined : numTraps(ans.r3 as number, [[sf3((Math.PI * r * r) / 4) ?? 0, "That's the watered area. Subtract it from the whole lawn."], [sf3(side * side - Math.PI * r * r) ?? 0, "Only a quarter of the circle is inside the square."]]),
        };
      }
      if (kind === "path") {
        const L = rng.int(5, 30);
        const d = rng.int(2, 8);
        const ans = lociAnswer(rng, tier, d * d, 1, 2 * d * L, unit);
        if (!ans) return null;
        const s = Math.min(240 / (L + 2 * d), 160 / (2 * d));
        const cx = 200;
        const cy = 130;
        const half = (L * s) / 2;
        const rr = d * s;
        const shape = `<path d="M${f1(cx - half)},${f1(cy - rr)} L${f1(cx + half)},${f1(cy - rr)} A${f1(rr)},${f1(rr)} 0 0 1 ${f1(cx + half)},${f1(cy + rr)} L${f1(cx - half)},${f1(cy + rr)} A${f1(rr)},${f1(rr)} 0 0 1 ${f1(cx - half)},${f1(cy - rr)} Z" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>`;
        const diagram = svgOpen(400, 260, `A straight fence of length ${L} m. The region within ${d} m of the fence is shaded: a rectangle with a semicircle at each end.`) + shape + seg([cx - half, cy], [cx + half, cy], { w: 3 }) + tx([cx, cy - 6], `${L} m`, { size: 12, color: SOFT }) + seg([cx + half, cy], [cx + half + rr, cy], { dash: true, color: "#b45309" }) + tx([cx + half + rr / 2, cy + 16], `${d} m`, { size: 12, color: "#b45309" }) + "</svg>";
        return {
          prompt: `A straight fence is ${L} m long. A robot mower cuts all the grass that is within ${d} m of the fence. Work out the area of the region within ${d} m of the fence. ${ans.ask}`,
          diagram,
          answer: ans.answer,
          solution: [`The locus is a rectangle ${L} m by ${2 * d} m with a semicircle of radius ${d} m at each end.`, `Rectangle: ${L} × ${2 * d} = ${2 * d * L}. Two semicircles make one circle: π × ${d}² = ${piFrac(d * d, 1).show}`, `Area = ${ans.final}`],
          hint: "Near the middle of the fence the region is a rectangle; around each end it is part of a circle.",
          traps: ans.exact ? [{ spec: { type: "number", value: 2 * d * L }, feedback: "Don't forget the round ends — together they make a whole circle." }] : numTraps(ans.r3 as number, [[2 * d * L, "Don't forget the round ends — together they make a whole circle."], [sf3(d * L + Math.PI * d * d) ?? 0, "The region is on BOTH sides of the fence: the rectangle is " + 2 * d + " m wide."]]),
        };
      }
      if (kind === "pond") {
        const a = rng.int(3, 15);
        const b = rng.int(2, 10);
        const d = rng.int(1, 5);
        if (a === b) return null;
        const ans = lociAnswer(rng, tier, d * d, 1, 2 * d * (a + b), unit);
        if (!ans) return null;
        const s = Math.min(260 / (a + 2 * d), 180 / (b + 2 * d));
        const cx = 200;
        const cy = 130;
        const W2 = (a * s) / 2;
        const H2 = (b * s) / 2;
        const rr = d * s;
        const outer = `<path d="M${f1(cx - W2)},${f1(cy - H2 - rr)} L${f1(cx + W2)},${f1(cy - H2 - rr)} A${f1(rr)},${f1(rr)} 0 0 1 ${f1(cx + W2 + rr)},${f1(cy - H2)} L${f1(cx + W2 + rr)},${f1(cy + H2)} A${f1(rr)},${f1(rr)} 0 0 1 ${f1(cx + W2)},${f1(cy + H2 + rr)} L${f1(cx - W2)},${f1(cy + H2 + rr)} A${f1(rr)},${f1(rr)} 0 0 1 ${f1(cx - W2 - rr)},${f1(cy + H2)} L${f1(cx - W2 - rr)},${f1(cy - H2)} A${f1(rr)},${f1(rr)} 0 0 1 ${f1(cx - W2)},${f1(cy - H2 - rr)} Z" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>`;
        const diagram = svgOpen(400, 260, `A ${a} m by ${b} m rectangular pond with a path of width ${d} m all around it. The path has quarter-circle corners.`) + outer + RECT(cx - W2, cy - H2, 2 * W2, 2 * H2, "#bae6fd") + tx([cx, cy + 4], `${a} m × ${b} m`, { size: 12, color: SOFT }) + "</svg>";
        return {
          prompt: `A rectangular pond measures ${a} m by ${b} m. A path is made of all the points outside the pond that are within ${d} m of the pond's edge. Work out the area of the path. ${ans.ask}`,
          diagram,
          answer: ans.answer,
          solution: [`Along each side the path is a rectangle ${d} m wide: 2 × ${a} × ${d} + 2 × ${b} × ${d} = ${2 * d * (a + b)}`, `At each corner it is a quarter circle of radius ${d} m; the four corners make one circle: π × ${d}² = ${piFrac(d * d, 1).show}`, `Area = ${ans.final}`],
          hint: "Split the path into four straight strips and four rounded corners.",
          traps: ans.exact ? undefined : numTraps(ans.r3 as number, [[(a + 2 * d) * (b + 2 * d) - a * b, "The corners are rounded (points within " + d + " m of a corner form a quarter circle), not square."], [2 * d * (a + b), "Don't forget the four quarter-circle corners."]]),
        };
      }
      // shed: rope r tied at corner of an a × b shed, a < r ≤ b
      const a = rng.int(2, 6);
      const b = rng.int(a + 3, 12);
      const r = rng.int(a + 1, b);
      const n = 3 * r * r + (r - a) * (r - a);
      const ans = lociAnswer(rng, tier, n, 4, 0, unit);
      if (!ans) return null;
      const s = Math.min(150 / (r + a), 105 / r);
      const K: Pt = [200 + (a * s) / 2 - 10, 140];
      // shed occupies x in [K.x − a·s, K.x], y in [K.y − b·s, K.y] ... drawn with corner K at bottom-right
      const shedX = K[0] - a * s;
      const shedY = K[1] - b * s;
      const big = `<path d="M${f1(K[0])},${f1(K[1])} L${f1(K[0])},${f1(K[1] - r * s)} A${f1(r * s)},${f1(r * s)} 0 1 1 ${f1(K[0] - r * s)},${f1(K[1])} Z" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>`;
      const small = `<path d="M${f1(K[0] - a * s)},${f1(K[1])} L${f1(K[0] - r * s)},${f1(K[1])} A${f1((r - a) * s)},${f1((r - a) * s)} 0 0 1 ${f1(K[0] - a * s)},${f1(K[1] - (r - a) * s)} Z" fill="#bbf7d0" stroke="#15803d" stroke-width="1.5"/>`;
      const diagram = svgOpen(400, 280, `A rectangular shed ${a} m by ${b} m with an animal tied at one corner by a ${r} m rope. It can reach three quarters of a circle of radius ${r} m, plus a quarter circle of radius ${r - a} m around the next corner.`) + big + small + RECT(shedX, shedY, a * s, b * s, "#e5e7eb") + `<circle cx="${f1(K[0])}" cy="${f1(K[1])}" r="3.5" fill="${INK}"/>` + tx([shedX + (a * s) / 2, shedY + (b * s) / 2], "shed", { size: 12, color: SOFT }) + "</svg>";
      return {
        prompt: `${name} is tied to the corner of a rectangular shed by a rope ${r} m long. The shed measures ${a} m by ${b} m and the animal cannot go inside it. Work out the area of the region the animal can reach. ${ans.ask}`,
        diagram,
        answer: ans.answer,
        solution: [
          `Away from the shed it can sweep three quarters of a circle of radius ${r} m: {{3/4}} × π × ${r}² = ${piFrac(3 * r * r, 4).show}`,
          `Round the ${a} m side, the rope has ${r} − ${a} = ${r - a} m left: an extra quarter circle {{1/4}} × π × ${r - a}² = ${piFrac((r - a) * (r - a), 4).show}. (The rope is too short to reach round the ${b} m side.)`,
          `Total = ${ans.final}`,
        ],
        hint: "Start with the part of the circle not blocked by the shed. What happens when the rope wraps round a corner?",
        traps: ans.exact ? [{ spec: { type: "expression", expr: piFrac(3 * r * r, 4).expr }, feedback: "The rope can also bend round the nearer corner of the shed — add that extra quarter circle." }] : numTraps(ans.r3 as number, [[sf3((3 * Math.PI * r * r) / 4) ?? 0, "The rope can also bend round the nearer corner of the shed — add that extra quarter circle."], [sf3(Math.PI * r * r) ?? 0, "The shed blocks a quarter of the circle."]]),
      };
    });
  },
};

export const drills: Drill[] = [parallelLines, polygons, centreTheorems, cyclicQuads, tangents, chordBisector, proofCentre, lociArea, altSegment, intersectingChords];
