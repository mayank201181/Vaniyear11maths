// Procedural skill drills for "Pythagoras & Right-Angled Trigonometry".
// Lengths are built from integers (or integers ÷ 2 / ÷ 10) so squares are exact;
// rounded answers are rounded once, at the end, from the full-precision value.
// Exact-value answers use a tiny "rational × √s" type so surds stay exact.
// Diagrams are drawn to scale from the actual side lengths and angles.
import type { Drill, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { clean, frac, gcd, num, roundTo } from "./helpers.ts";

const T = "pythagoras-trigonometry";

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

const RAD = Math.PI / 180;
const sinD = (d: number) => Math.sin(d * RAD);
const cosD = (d: number) => Math.cos(d * RAD);
const tanD = (d: number) => Math.tan(d * RAD);
const asinD = (x: number) => Math.asin(x) / RAD;
const acosD = (x: number) => Math.acos(x) / RAD;
const atanD = (x: number) => Math.atan(x) / RAD;

/** Round to n significant figures (default 3). */
function sf(v: number, n = 3): number {
  if (v === 0) return 0;
  return clean(parseFloat(v.toPrecision(n)));
}
/** Long intermediate value for working: 6 s.f. */
/** A 3 s.f. value written with its trailing zeros (49 → "49.0"). */
function s3(v: number): string {
  const a = Math.abs(v);
  return a >= 100 || a === 0 ? num(v) : num(v).replace(/^(−?)(.*)$/, (_m, sg: string) => sg + a.toPrecision(3));
}
function s6(v: number): string {
  return num(sf(v, 6));
}
const dp1 = (v: number) => roundTo(v, 1);

/** Try `make` up to `tries` times; return the first non-null result, else the fallback. */
function attempt<R>(make: () => R | null, fallback: () => R, tries = 400): R {
  for (let i = 0; i < tries; i++) {
    const r = make();
    if (r !== null) return r;
  }
  return fallback();
}

/** Number traps, skipping any that are (nearly) the answer, repeats or nonsense. */
function numTraps(answer: number, cands: Array<[number, string]>): Trap[] {
  const seen: number[] = [answer];
  const out: Trap[] = [];
  for (const [v, feedback] of cands) {
    if (!Number.isFinite(v) || v <= 0) continue;
    if (seen.some((s) => Math.abs(s - v) <= 0.012 * Math.max(Math.abs(s), 1e-9))) continue;
    seen.push(v);
    out.push({ spec: { type: "number", value: v }, feedback });
  }
  return out;
}

/** True when √v is (to 1 d.p.) exact — used to avoid "3 s.f." answers that are whole numbers. */
function rootTooNeat(v: number): boolean {
  const r = Math.sqrt(v);
  return Math.abs(r * 10 - Math.round(r * 10)) < 1e-6;
}

/** n = k² × s with s square-free. */
function splitSquare(n: number): [number, number] {
  let k = 1, s = n;
  for (let f = 2; f * f <= s; f++) {
    while (s % (f * f) === 0) {
      s /= f * f;
      k *= f;
    }
  }
  return [k, s];
}

function surdM(k: number, s: number): string {
  if (s === 1) return String(k);
  return k === 1 ? `sqrt(${s})` : `${k}sqrt(${s})`;
}

const pad3 = (b: number) => {
  const [w, f] = String(clean(b)).split(".");
  return w.padStart(3, "0") + (f ? "." + f : "");
};

const UNITS = ["cm", "m", "mm"] as const;

// ---------------------------------------------------------------------------
// Diagrams
// ---------------------------------------------------------------------------

const F = (n: number) => n.toFixed(1);
const TXT = 'font-size="13" font-family="sans-serif" fill="#1f2937"';

function svgOpen(w: number, h: number, aria: string): string {
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}"><rect x="0" y="0" width="${w}" height="${h}" fill="#ffffff"/>`;
}

function label(x: number, y: number, s: string, anchor: "start" | "middle" | "end" = "middle"): string {
  return `<text x="${F(x)}" y="${F(y)}" ${TXT} text-anchor="${anchor}">${s}</text>`;
}

type Pt = [number, number];
const unitV = (a: Pt, b: Pt): Pt => {
  const dx = b[0] - a[0], dy = b[1] - a[1], L = Math.hypot(dx, dy) || 1;
  return [dx / L, dy / L];
};

/** Arc at vertex V from direction u1 to direction u2 (radius r), with a label on the bisector. */
function angleArc(V: Pt, u1: Pt, u2: Pt, r: number, sweep: 0 | 1, text?: string): string {
  const s: Pt = [V[0] + r * u1[0], V[1] + r * u1[1]];
  const e: Pt = [V[0] + r * u2[0], V[1] + r * u2[1]];
  let out = `<path d="M${F(s[0])},${F(s[1])} A${r},${r} 0 0 ${sweep} ${F(e[0])},${F(e[1])}" fill="none" stroke="#1f2937" stroke-width="1.5"/>`;
  if (text) {
    const bx = u1[0] + u2[0], by = u1[1] + u2[1], L = Math.hypot(bx, by) || 1;
    out += label(V[0] + ((r + 15) * bx) / L, V[1] + ((r + 15) * by) / L + 4, text);
  }
  return out;
}

interface TriOpts {
  /** Real horizontal leg PQ and vertical leg QR (right angle at Q). */
  w: number;
  h: number;
  base?: string;
  height?: string;
  hyp?: string;
  angleP?: string;
  angleR?: string;
  /** Angle of depression at R, measured from a horizontal line through R. */
  depression?: string;
  names?: [string, string, string];
  flip?: boolean;
  aria: string;
}

/** A to-scale right-angled triangle PQR with the right angle at Q (bottom). */
function rightTriSvg(o: TriOpts): string {
  const VW = 360, VH = 240;
  const s = Math.min(230 / o.w, 160 / o.h);
  const W = o.w * s, H = o.h * s;
  const x0 = (VW - W) / 2, yb = 205;
  const fx = (x: number) => (o.flip ? VW - x : x);
  const dir = o.flip ? -1 : 1;
  const P: Pt = [fx(x0), yb], Q: Pt = [fx(x0 + W), yb], R: Pt = [fx(x0 + W), yb - H];
  let out = svgOpen(VW, VH, o.aria);
  out += `<polygon points="${F(P[0])},${F(P[1])} ${F(Q[0])},${F(Q[1])} ${F(R[0])},${F(R[1])}" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/>`;
  const m = 11;
  out += `<polyline points="${F(Q[0] - dir * m)},${F(yb)} ${F(Q[0] - dir * m)},${F(yb - m)} ${F(Q[0])},${F(yb - m)}" fill="none" stroke="#1f2937" stroke-width="1.5"/>`;
  if (o.base) out += label((P[0] + Q[0]) / 2, yb + 20, o.base);
  if (o.height) out += label(Q[0] + dir * 8, yb - H / 2 + 4, o.height, dir > 0 ? "start" : "end");
  if (o.hyp) {
    const M: Pt = [(P[0] + R[0]) / 2, (P[1] + R[1]) / 2];
    const n = unitV(Q, M);
    out += label(M[0] + 18 * n[0], M[1] + 18 * n[1] + 4, o.hyp);
  }
  const rP = Math.max(18, Math.min(34, W * 0.3));
  if (o.angleP) out += angleArc(P, [dir, 0], unitV(P, R), rP, o.flip ? 1 : 0, o.angleP);
  const rR = Math.max(18, Math.min(30, H * 0.3));
  if (o.angleR) out += angleArc(R, [0, 1], unitV(R, P), rR, o.flip ? 0 : 1, o.angleR);
  if (o.depression) {
    const end = R[0] - dir * Math.min(W * 0.75, 170);
    out += `<line x1="${F(R[0])}" y1="${F(R[1])}" x2="${F(end)}" y2="${F(R[1])}" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/>`;
    out += angleArc(R, [-dir, 0], unitV(R, P), Math.max(22, Math.min(40, W * 0.3)), o.flip ? 1 : 0, o.depression);
  }
  if (o.names) {
    const [a, b, c] = o.names;
    out += label(P[0] - dir * 12, yb + 5, a);
    out += label(Q[0] + dir * 12, yb + 5, b);
    out += label(R[0] + dir * 10, R[1] - 6, c);
  }
  return out + "</svg>";
}

/** Two right-angled triangles ABD and CBD sharing the vertical side BD (D between A and C). */
function sharedSvg(ad: number, dc: number, bd: number, labs: { ad?: string; ab?: string; bc?: string; dc?: string; a: string; c: string }, aria: string): string {
  const VW = 380, VH = 240;
  const s = Math.min(320 / (ad + dc), 165 / bd);
  const x0 = (VW - (ad + dc) * s) / 2, yb = 205;
  const A: Pt = [x0, yb], D: Pt = [x0 + ad * s, yb], C: Pt = [x0 + (ad + dc) * s, yb], B: Pt = [D[0], yb - bd * s];
  let out = svgOpen(VW, VH, aria);
  out += `<polygon points="${F(A[0])},${F(A[1])} ${F(C[0])},${F(C[1])} ${F(B[0])},${F(B[1])}" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/>`;
  out += `<line x1="${F(B[0])}" y1="${F(B[1])}" x2="${F(D[0])}" y2="${F(D[1])}" stroke="#1f2937" stroke-width="2"/>`;
  out += `<polyline points="${F(D[0] + 10)},${F(yb)} ${F(D[0] + 10)},${F(yb - 10)} ${F(D[0])},${F(yb - 10)}" fill="none" stroke="#1f2937" stroke-width="1.5"/>`;
  out += angleArc(A, [1, 0], unitV(A, B), 30, 0, labs.a);
  out += angleArc(C, [-1, 0], unitV(C, B), 30, 1, labs.c);
  if (labs.ad) out += label((A[0] + D[0]) / 2, yb + 20, labs.ad);
  if (labs.dc) out += label((D[0] + C[0]) / 2, yb + 20, labs.dc);
  if (labs.ab) out += label((A[0] + B[0]) / 2 - 16, (A[1] + B[1]) / 2 - 4, labs.ab, "end");
  if (labs.bc) out += label((C[0] + B[0]) / 2 + 16, (C[1] + B[1]) / 2 - 4, labs.bc, "start");
  out += label(A[0] - 10, yb + 5, "A") + label(D[0], yb + 36, "D") + label(C[0] + 10, yb + 5, "C") + label(B[0], B[1] - 8, "B");
  return out + "</svg>";
}

/** Oblique cuboid with the space diagonal from the front-bottom-left to the back-top-right corner. */
function cuboidSvg(l: number, w: number, h: number, labs: { l: string; w: string; h: string }, aria: string, showAngle = false): string {
  const VW = 380, VH = 250;
  const k = 0.5, c = Math.cos(30 * RAD), sn = Math.sin(30 * RAD);
  const s = Math.min(250 / (l + k * w * c), 170 / (h + k * w * sn));
  const L = l * s, Hh = h * s, dx = k * w * c * s, dy = k * w * sn * s;
  const x0 = (VW - L - dx) / 2, y0 = 215;
  const A: Pt = [x0, y0], B: Pt = [x0 + L, y0], Cc: Pt = [x0 + L + dx, y0 - dy], Dd: Pt = [x0 + dx, y0 - dy];
  const up = (p: Pt): Pt => [p[0], p[1] - Hh];
  const E = up(A), Fp = up(B), G = up(Cc), Hp = up(Dd);
  const ln = (p: Pt, q: Pt, extra = "") => `<line x1="${F(p[0])}" y1="${F(p[1])}" x2="${F(q[0])}" y2="${F(q[1])}" stroke="#1f2937" stroke-width="1.8"${extra}/>`;
  const dash = ' stroke-dasharray="5 4"';
  let out = svgOpen(VW, VH, aria);
  out += `<polygon points="${F(A[0])},${F(A[1])} ${F(B[0])},${F(B[1])} ${F(Fp[0])},${F(Fp[1])} ${F(E[0])},${F(E[1])}" fill="#fde68a" fill-opacity="0.6" stroke="none"/>`;
  out += ln(A, B) + ln(B, Fp) + ln(Fp, E) + ln(E, A) + ln(B, Cc) + ln(Cc, G) + ln(G, Fp) + ln(E, Hp) + ln(Hp, G);
  out += ln(A, Dd, dash) + ln(Dd, Cc, dash) + ln(Dd, Hp, dash);
  out += `<line x1="${F(A[0])}" y1="${F(A[1])}" x2="${F(G[0])}" y2="${F(G[1])}" stroke="#b91c1c" stroke-width="2.4"/>`;
  if (showAngle) {
    out += `<line x1="${F(A[0])}" y1="${F(A[1])}" x2="${F(Cc[0])}" y2="${F(Cc[1])}" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="4 3"/>`;
    out += angleArc(A, unitV(A, Cc), unitV(A, G), 34, 0, "θ");
  }
  out += label((A[0] + B[0]) / 2, y0 + 20, labs.l);
  out += label(A[0] - 8, y0 - Hh / 2 + 4, labs.h, "end");
  out += label((B[0] + Cc[0]) / 2 + 10, (B[1] + Cc[1]) / 2 + 12, labs.w, "start");
  return out + "</svg>";
}

// ---------------------------------------------------------------------------
// Exact surd arithmetic: value = (n/d)·√s, s square-free
// ---------------------------------------------------------------------------

type Sd = { n: number; d: number; s: number };

function sd(n: number, d: number, s = 1): Sd {
  const [k, s2] = splitSquare(s);
  n *= k;
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1;
  return { n: n / g, d: d / g, s: s2 };
}
const sdMul = (a: Sd, b: Sd) => sd(a.n * b.n, a.d * b.d, a.s * b.s);
const sdDiv = (a: Sd, b: Sd) => sd(a.n * b.d, a.d * b.n * b.s, a.s * b.s);
const sdVal = (a: Sd) => (a.n / a.d) * Math.sqrt(a.s);

/** Maths markup for (n/d)√s. */
function sdM(a: Sd): string {
  if (a.s === 1) return a.d === 1 ? num(a.n).replace("−", "-") : `${a.n < 0 ? "-" : ""}${Math.abs(a.n)}/${a.d}`;
  const neg = a.n < 0 ? "-" : "";
  const top = surdM(Math.abs(a.n), a.s);
  return a.d === 1 ? neg + top : `${neg}(${top})/${a.d}`;
}

function sdAnswer(a: Sd): AnswerSpec {
  if (a.s === 1) return a.d === 1 ? { type: "number", value: a.n } : { type: "fraction", n: a.n, d: a.d, simplest: true };
  return { type: "expression", expr: sdM(a), form: "surd", display: `{{${sdM(a)}}}` };
}

type Fn = "sin" | "cos" | "tan";
const EXACT: Record<Fn, Record<number, Sd>> = {
  sin: { 0: sd(0, 1), 30: sd(1, 2), 45: sd(1, 2, 2), 60: sd(1, 2, 3), 90: sd(1, 1) },
  cos: { 0: sd(1, 1), 30: sd(1, 2, 3), 45: sd(1, 2, 2), 60: sd(1, 2), 90: sd(0, 1) },
  tan: { 0: sd(0, 1), 30: sd(1, 3, 3), 45: sd(1, 1), 60: sd(1, 1, 3) },
};

// ---------------------------------------------------------------------------
// Side roles for SOH CAH TOA
// ---------------------------------------------------------------------------

type Role = "opp" | "adj" | "hyp";
const ROLE_NAME: Record<Role, string> = { opp: "opposite", adj: "adjacent", hyp: "hypotenuse" };

/** Which ratio links two roles, and which is on top. */
function ratioFor(a: Role, b: Role): { fn: Fn; top: Role; bot: Role; mnemonic: string } {
  const set = new Set([a, b]);
  if (set.has("opp") && set.has("hyp")) return { fn: "sin", top: "opp", bot: "hyp", mnemonic: "SOH" };
  if (set.has("adj") && set.has("hyp")) return { fn: "cos", top: "adj", bot: "hyp", mnemonic: "CAH" };
  return { fn: "tan", top: "opp", bot: "adj", mnemonic: "TOA" };
}
const trig = (fn: Fn, d: number) => (fn === "sin" ? sinD(d) : fn === "cos" ? cosD(d) : tanD(d));

/** Side lengths of a right triangle with angle θ and hypotenuse 1. */
const roleLen = (r: Role, th: number) => (r === "hyp" ? 1 : r === "opp" ? sinD(th) : cosD(th));

/**
 * Diagram for a SOH CAH TOA triangle. The marked angle is at P (base = adjacent)
 * or at R (base = opposite). `labels` gives the text on each role's side.
 */
function sohSvg(th: number, at: "P" | "R", labels: Partial<Record<Role, string>>, angleText: string, flip: boolean, aria: string, names?: [string, string, string]): string {
  const opp = sinD(th), adj = cosD(th);
  if (at === "P") return rightTriSvg({ w: adj, h: opp, base: labels.adj, height: labels.opp, hyp: labels.hyp, angleP: angleText, flip, aria, names });
  return rightTriSvg({ w: opp, h: adj, base: labels.opp, height: labels.adj, hyp: labels.hyp, angleR: angleText, flip, aria, names });
}

const NAME_SETS: Array<[string, string, string]> = [["A", "B", "C"], ["P", "Q", "R"], ["L", "M", "N"], ["X", "Y", "Z"], ["D", "E", "F"], ["J", "K", "L"], ["S", "T", "U"]];

/** Vertex names for a SOH CAH TOA triangle: first = bottom vertex, second = right angle, third = top. */
function sohNames(rng: Rng, at: "P" | "R") {
  const n = rng.pick(NAME_SETS);
  const [P, Q, R] = n;
  const side: Record<Role, string> = at === "P" ? { adj: P + Q, opp: Q + R, hyp: P + R } : { opp: P + Q, adj: Q + R, hyp: P + R };
  const angle = at === "P" ? Q + P + R : P + R + Q;
  return { names: n, side, angle, right: P + Q + R, tri: P + Q + R };
}

// ---------------------------------------------------------------------------
// Pythagorean triples
// ---------------------------------------------------------------------------

const TRIPLES: Array<[number, number, number]> = [
  [3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41], [12, 35, 37], [11, 60, 61],
];

// ===========================================================================
// Drills
// ===========================================================================

export const drills: Drill[] = [
  // -------------------------------------------------------------------------
  {
    id: `${T}.missing-side`,
    topicId: T,
    title: "Find a missing side with Pythagoras",
    level: 1,
    guideRef: "pythagoras",
    generate(rng, tier) {
      const val = (): number =>
        tier === 1 ? rng.int(3, 15) : tier === 2 ? (rng.bool(0.6) ? rng.int(4, 30) : rng.int(9, 59) / 2) : rng.int(15, 140) / 10;
      const unit = tier === 1 ? rng.pick(["cm", "m"] as const) : rng.pick(UNITS);
      const sfNote = "Give your answer correct to 3 significant figures.";

      // Tier 3: a context half the time.
      if (tier === 3 && rng.bool(0.6)) {
        const ctx = rng.pick(["ladder", "park", "screen", "ramp"] as const);
        if (ctx === "ladder" || ctx === "ramp") {
          const r = attempt(() => {
            const c = rng.int(35, 95) / 10;
            const a = rng.int(Math.ceil(c * 2), Math.floor(c * 5)) / 10;
            const b2 = clean(c * c - a * a);
            if (b2 <= 0 || rootTooNeat(b2)) return null;
            return { c, a, b2 };
          }, () => ({ c: 6.5, a: 1.8, b2: clean(6.5 * 6.5 - 1.8 * 1.8) }));
          const b = Math.sqrt(r.b2), ans = sf(b);
          const prompt = ctx === "ladder"
            ? `A ladder ${num(r.c)} m long leans against a vertical wall. The foot of the ladder is on horizontal ground, ${num(r.a)} m from the wall. How far up the wall does the ladder reach? ${sfNote}`
            : `A straight ramp is ${num(r.c)} m long. It rises ${num(r.a)} m vertically. How far does it cover horizontally? ${sfNote}`;
          return {
            prompt,
            answer: { type: "number", value: ans },
            solution: [
              `The ${ctx === "ladder" ? "ladder" : "ramp"} is the hypotenuse (opposite the right angle), so subtract: {{x^2 = ${num(r.c)}^2 - ${num(r.a)}^2 = ${num(clean(r.c * r.c))} - ${num(clean(r.a * r.a))} = ${num(r.b2)}}}.`,
              `{{x = sqrt(${num(r.b2)})}} = ${s6(b)}…`,
              `x = ${s3(ans)} m (3 s.f.)`,
            ],
            hint: "Which length is the hypotenuse? The unknown is a shorter side, so subtract the squares.",
            traps: numTraps(ans, [[sf(Math.sqrt(r.c * r.c + r.a * r.a)), "You added the squares — but the unknown is a shorter side, so subtract."]]),
          };
        }
        const r = ctx === "park"
          ? attempt(() => { const a = rng.int(40, 250), b = rng.int(30, 200); return a === b || rootTooNeat(a * a + b * b) ? null : { a, b }; }, () => ({ a: 120, b: 85 }))
          : attempt(() => { const a = rng.int(50, 140), b = Math.round((a * 9) / 16) + rng.int(-2, 2); return rootTooNeat(a * a + b * b) ? null : { a, b }; }, () => ({ a: 100, b: 56 }));
        const c2 = r.a * r.a + r.b * r.b, c = Math.sqrt(c2), ans = sf(c);
        const prompt = ctx === "park"
          ? `A rectangular park is ${r.a} m long and ${r.b} m wide. Arjun walks in a straight line from one corner to the opposite corner. How far does he walk? ${sfNote}`
          : `A TV screen is a rectangle ${r.a} cm wide and ${r.b} cm high. Screen sizes are measured along the diagonal. Work out the length of the diagonal. ${sfNote}`;
        return {
          prompt,
          answer: { type: "number", value: ans },
          solution: [
            `The diagonal is the hypotenuse of a right-angled triangle with sides ${r.a} and ${r.b}: {{d^2 = ${r.a}^2 + ${r.b}^2 = ${r.a * r.a} + ${r.b * r.b} = ${c2}}}.`,
            `{{d = sqrt(${c2})}} = ${s6(c)}…`,
            `d = ${s3(ans)} ${ctx === "park" ? "m" : "cm"} (3 s.f.)`,
          ],
          hint: "Draw the rectangle and its diagonal: two sides and the diagonal make a right-angled triangle.",
          traps: numTraps(ans, [
            [r.a + r.b, "Adding the two sides gives the route around the edge, not the diagonal. Square, add, then square root."],
            [sf(Math.sqrt(Math.abs(r.a * r.a - r.b * r.b))), "You subtracted — the diagonal is the hypotenuse, so add the squares."],
          ]),
        };
      }

      const mode = rng.pick(["hyp", "leg"] as const);
      const flip = rng.bool();
      if (mode === "hyp") {
        const r = attempt(() => {
          const a = val(), b = val();
          if (a / b < 0.4 || a / b > 2.5) return null;
          const c2 = clean(a * a + b * b);
          return rootTooNeat(c2) ? null : { a, b, c2 };
        }, () => ({ a: 7, b: 9, c2: 130 }));
        const c = Math.sqrt(r.c2), ans = sf(c);
        return {
          prompt: `A right-angled triangle has shorter sides of ${num(r.a)} ${unit} and ${num(r.b)} ${unit}. Work out the length of the hypotenuse, x. ${sfNote}`,
          diagram: rightTriSvg({ w: r.a, h: r.b, base: `${num(r.a)} ${unit}`, height: `${num(r.b)} ${unit}`, hyp: "x", flip, aria: `Right-angled triangle with shorter sides ${num(r.a)} ${unit} and ${num(r.b)} ${unit}. The hypotenuse is marked x.` }),
          answer: { type: "number", value: ans },
          solution: [
            `x is the hypotenuse (opposite the right angle), so add the squares: {{x^2 = ${num(r.a)}^2 + ${num(r.b)}^2 = ${num(clean(r.a * r.a))} + ${num(clean(r.b * r.b))} = ${num(r.c2)}}}.`,
            `{{x = sqrt(${num(r.c2)})}} = ${s6(c)}…`,
            `x = ${s3(ans)} ${unit} (3 s.f.)`,
          ],
          hint: "x is opposite the right angle, so it is the longest side: square, add, square root.",
          traps: numTraps(ans, [
            [clean(r.a + r.b), "You added the sides. Square them first, add, then square root."],
            [sf(r.c2), "That's {{x^2}} — take the square root to finish."],
            [sf(Math.sqrt(Math.abs(r.a * r.a - r.b * r.b))), "You subtracted — x is the hypotenuse, so add the squares."],
          ]),
        };
      }
      const r = attempt(() => {
        const c = val(), a = val();
        if (a >= c || a / c < 0.3 || a / c > 0.9) return null;
        const b2 = clean(c * c - a * a);
        return rootTooNeat(b2) ? null : { c, a, b2 };
      }, () => ({ c: 12, a: 7, b2: 95 }));
      const b = Math.sqrt(r.b2), ans = sf(b);
      const unknownIsBase = rng.bool();
      const diagram = unknownIsBase
        ? rightTriSvg({ w: b, h: r.a, base: "x", height: `${num(r.a)} ${unit}`, hyp: `${num(r.c)} ${unit}`, flip, aria: `Right-angled triangle with hypotenuse ${num(r.c)} ${unit} and one shorter side ${num(r.a)} ${unit}. The other shorter side is marked x.` })
        : rightTriSvg({ w: r.a, h: b, base: `${num(r.a)} ${unit}`, height: "x", hyp: `${num(r.c)} ${unit}`, flip, aria: `Right-angled triangle with hypotenuse ${num(r.c)} ${unit} and one shorter side ${num(r.a)} ${unit}. The other shorter side is marked x.` });
      return {
        prompt: `A right-angled triangle has a hypotenuse of ${num(r.c)} ${unit}. One of the other sides is ${num(r.a)} ${unit}. Work out the length of the third side, x. ${sfNote}`,
        diagram,
        answer: { type: "number", value: ans },
        solution: [
          `The hypotenuse is ${num(r.c)} ${unit}, so x is a shorter side: subtract the squares. {{x^2 = ${num(r.c)}^2 - ${num(r.a)}^2 = ${num(clean(r.c * r.c))} - ${num(clean(r.a * r.a))} = ${num(r.b2)}}}.`,
          `{{x = sqrt(${num(r.b2)})}} = ${s6(b)}…`,
          `x = ${s3(ans)} ${unit} (3 s.f.)`,
        ],
        hint: "Is x the hypotenuse? If not, subtract the smaller square from the bigger one.",
        traps: numTraps(ans, [
          [sf(Math.sqrt(r.c * r.c + r.a * r.a)), "You added the squares. x is a shorter side, so subtract — your answer must be less than the hypotenuse."],
          [clean(r.c - r.a), "Subtract the squares, not the sides."],
        ]),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.find-side-trig`,
    topicId: T,
    title: "Find a side with SOH CAH TOA",
    level: 1,
    guideRef: "sohcahtoa",
    generate(rng, tier) {
      const sfNote = "Give your answer correct to 3 significant figures.";
      if (tier === 3 && rng.bool(0.6)) {
        // Two triangles sharing the vertical side BD.
        const v = rng.pick(["ad-dc", "ab-bc"] as const);
        const r = attempt(() => {
          const a = rng.int(25, 60), c = rng.int(15, 55), p = rng.int(40, 150) / 10;
          if (Math.abs(a - c) < 6) return null;
          const bd = v === "ad-dc" ? p * tanD(a) : p * sinD(a);
          const ad = v === "ad-dc" ? p : p * cosD(a);
          const dc = bd / tanD(c);
          const ans = v === "ad-dc" ? dc : bd / sinD(c);
          if (bd / (ad + dc) < 0.15 || ans > 99) return null;
          return { a, c, p, bd, ad, dc, ans };
        }, () => ({ a: 40, c: 25, p: 8, bd: 8 * tanD(40), ad: 8, dc: (8 * tanD(40)) / tanD(25), ans: (8 * tanD(40)) / tanD(25) }));
        const ans = sf(r.ans);
        if (v === "ad-dc") {
          return {
            prompt: `A, D and C lie in a straight line on level ground, with D between A and C. BD is a vertical post. AD = ${num(r.p)} m, angle BAD = ${r.a}° and angle BCD = ${r.c}°. Work out the length of DC. ${sfNote}`,
            diagram: sharedSvg(r.ad, r.dc, r.bd, { ad: `${num(r.p)} m`, dc: "x", a: `${r.a}°`, c: `${r.c}°` }, `Two right-angled triangles ABD and CBD share the vertical side BD. AD is ${num(r.p)} metres, angle A is ${r.a} degrees, angle C is ${r.c} degrees and DC is marked x.`),
            answer: { type: "number", value: ans },
            solution: [
              `Triangle ABD first (it has two facts): BD is opposite ${r.a}°, AD is adjacent, so TOA: {{BD = ${num(r.p)} tan ${r.a}°}} = ${s6(r.bd)}… m. Keep this unrounded.`,
              `Triangle CBD: BD is opposite ${r.c}°, DC is adjacent: {{tan ${r.c}° = (BD)/(DC)}}, so {{DC = (BD)/(tan ${r.c}°)}} = ${s6(r.dc)}…`,
              `DC = ${s3(ans)} m (3 s.f.)`,
            ],
            hint: "Find the shared side BD in the triangle where you know two things, then use it in the other triangle.",
            traps: numTraps(ans, [
              [sf(sf(r.bd) / tanD(r.c)), "Close — but you rounded BD before using it. Keep the full calculator value for the next step."],
              [sf(r.bd * tanD(r.c)), "In triangle CBD the unknown DC is on the bottom of tan: divide by {{tan " + r.c + "°}}, don't multiply."],
            ]),
          };
        }
        return {
          prompt: `A, D and C lie in a straight line on level ground, with D between A and C. BD is a vertical post. AB = ${num(r.p)} m, angle BAD = ${r.a}° and angle BCD = ${r.c}°. Work out the length of BC. ${sfNote}`,
          diagram: sharedSvg(r.ad, r.dc, r.bd, { ab: `${num(r.p)} m`, bc: "x", a: `${r.a}°`, c: `${r.c}°` }, `Two right-angled triangles ABD and CBD share the vertical side BD. AB is ${num(r.p)} metres, angle A is ${r.a} degrees, angle C is ${r.c} degrees and BC is marked x.`),
          answer: { type: "number", value: ans },
          solution: [
            `Triangle ABD: AB is the hypotenuse, BD is opposite ${r.a}°, so SOH: {{BD = ${num(r.p)} sin ${r.a}°}} = ${s6(r.bd)}… m.`,
            `Triangle CBD: BC is the hypotenuse, BD is opposite ${r.c}°: {{sin ${r.c}° = (BD)/(BC)}}, so {{BC = (BD)/(sin ${r.c}°)}} = ${s6(r.ans)}…`,
            `BC = ${s3(ans)} m (3 s.f.)`,
          ],
          hint: "BD belongs to both triangles. Find it first, then use it in the second triangle.",
          traps: numTraps(ans, [
            [sf(r.bd * sinD(r.c)), "BC is the hypotenuse, so it goes on the bottom: divide by {{sin " + r.c + "°}}."],
            [sf((r.p * cosD(r.a)) / sinD(r.c)), "BD is opposite the angle at A, so use sin, not cos, in triangle ABD."],
          ]),
        };
      }

      const th = tier === 1 ? rng.int(20, 70) : rng.bool(0.7) ? rng.int(12, 78) : rng.int(25, 155) / 2;
      const roles: Role[] = ["opp", "adj", "hyp"];
      const known = rng.pick(roles);
      const want = rng.pick(roles.filter((r) => r !== known));
      const v = tier === 1 ? rng.int(4, 20) : rng.bool(0.5) ? rng.int(5, 40) : rng.int(25, 300) / 10;
      const unit = rng.pick(UNITS);
      const at = rng.pick(["P", "R"] as const);
      const flip = rng.bool();
      const { fn, top, bot, mnemonic } = ratioFor(known, want);
      const hyp = v / roleLen(known, th);
      const exact = hyp * roleLen(want, th);
      const ans = sf(exact);
      const ratio = trig(fn, th);
      const xOnTop = want === top;
      const thS = num(th);
      const labels: Partial<Record<Role, string>> = { [known]: `${num(v)} ${unit}`, [want]: "x" };
      const nm = sohNames(rng, at);
      // The wrong-ratio trap: right structure, wrong function.
      const otherFns = (["sin", "cos", "tan"] as Fn[]).filter((f) => f !== fn);
      const wrongFn = rng.pick(otherFns);
      const wrong = xOnTop ? v * trig(wrongFn, th) : v / trig(wrongFn, th);
      return {
        prompt: `In triangle ${nm.tri}, angle ${nm.right} = 90°, angle ${nm.angle} = ${thS}° and ${nm.side[known]} = ${num(v)} ${unit}. Work out the length of ${nm.side[want]} (marked x). ${sfNote}`,
        diagram: sohSvg(th, at, labels, `${thS}°`, flip, `Right-angled triangle ${nm.tri} with the right angle at ${nm.names[1]}. Angle ${nm.angle} is ${thS} degrees, ${nm.side[known]} is ${num(v)} ${unit} and ${nm.side[want]} is marked x.`, nm.names),
        answer: { type: "number", value: ans },
        solution: [
          `Label from the ${thS}° angle: ${num(v)} ${unit} is the **${ROLE_NAME[known]}**, x is the **${ROLE_NAME[want]}** → ${mnemonic}.`,
          xOnTop
            ? `{{${fn} ${thS}° = x/${num(v)}}}, so {{x = ${num(v)} ${fn} ${thS}°}} = ${s6(exact)}…`
            : `{{${fn} ${thS}° = ${top === known ? num(v) : "x"}/${bot === known ? num(v) : "x"}}}, so {{x = ${num(v)}/(${fn} ${thS}°)}} = ${s6(exact)}…`,
          `x = ${s3(ans)} ${unit} (3 s.f.)`,
        ],
        hint: "Label the sides O, A, H from the marked angle. Which two are involved — the one you know and the one you want?",
        traps: numTraps(ans, [
          [sf(xOnTop ? v / ratio : v * ratio), xOnTop ? "x is on the top of the ratio, so multiply — don't divide." : "x is on the bottom of the ratio, so divide by the trig value — don't multiply."],
          [sf(wrong), `Check your labels: the ${ROLE_NAME[known]} and ${ROLE_NAME[want]} go with ${fn}, not ${wrongFn}.`],
        ]),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.exact-length`,
    topicId: T,
    title: "Exact lengths with Pythagoras (surd answers)",
    level: 2,
    guideRef: "pythagoras",
    generate(rng, tier) {
      const modes = tier === 1 ? (["hyp", "leg"] as const) : tier === 2 ? (["hyp", "leg", "iso", "coords"] as const) : (["iso", "coords", "leg"] as const);
      const mode = rng.pick(modes);
      const form = "Give your answer as a surd in its simplest form.";
      const unit = rng.pick(["cm", "m"] as const);
      const lim = tier === 1 ? 12 : tier === 2 ? 20 : 30;
      const r = attempt(() => {
        let a = 0, b = 0, N = 0, other = 0;
        if (mode === "hyp") {
          a = rng.int(2, lim); b = rng.int(2, lim);
          if (a === b && tier === 1) return null;
          N = a * a + b * b; other = Math.abs(a * a - b * b);
        } else {
          a = rng.int(4, lim + 4); b = rng.int(2, a - 1); // a = hypotenuse (or equal side)
          N = a * a - b * b; other = a * a + b * b;
          if (mode === "iso" && b * 2 >= 2 * a) return null;
        }
        if (mode === "coords") {
          a = rng.nonZero(-9, 9); b = rng.nonZero(-9, 9);
          if (Math.abs(a) === Math.abs(b) && tier < 3) return null;
          N = a * a + b * b; other = Math.abs(a * a - b * b);
        }
        const [k, s] = splitSquare(N);
        if (s === 1 || k === 1) return null;
        return { a, b, N, k, s, other };
      }, () => ({ a: 4, b: 6, N: 52, k: 2, s: 13, other: 20 }));
      const { a, b, N, k, s } = r;
      const ansM = surdM(k, s);
      const answer: AnswerSpec = { type: "expression", expr: ansM, form: "surd", display: `{{${ansM}}}` };
      const simp = `{{sqrt(${N}) = sqrt(${k * k} * ${s}) = ${ansM}}}`;
      const wrongTrap = (): Trap[] => {
        if (r.other <= 0) return [];
        const [k2, s2] = splitSquare(r.other);
        const m = surdM(k2, s2);
        return [{ spec: s2 === 1 ? { type: "number", value: k2 } : { type: "expression", expr: m }, feedback: mode === "hyp" || mode === "coords" ? "You subtracted the squares — for the hypotenuse (or a distance) you add them." : "You added the squares — the unknown is a shorter side, so subtract." }];
      };
      if (mode === "coords") {
        const x1 = rng.int(-6, 6), y1 = rng.int(-6, 6);
        const x2 = x1 + a, y2 = y1 + b;
        const P = rng.pick([["A", "B"], ["P", "Q"], ["R", "S"]] as const);
        const pt = (x: number, y: number) => `(${num(x)}, ${num(y)})`;
        return {
          prompt: `${P[0]} is the point ${pt(x1, y1)} and ${P[1]} is the point ${pt(x2, y2)}. Work out the exact length of ${P[0]}${P[1]}. ${form}`,
          answer,
          solution: [
            `Horizontal change: ${num(x2)} − ${x1 < 0 ? `(${num(x1)})` : num(x1)} = ${num(a)}. Vertical change: ${num(y2)} − ${y1 < 0 ? `(${num(y1)})` : num(y1)} = ${num(b)}.`,
            `These are the shorter sides of a right-angled triangle: {{${P[0]}${P[1]}^2 = ${a < 0 ? `(${a})` : a}^2 + ${b < 0 ? `(${b})` : b}^2 = ${a * a} + ${b * b} = ${N}}}.`,
            `${simp}.`,
          ],
          hint: "Sketch the two points. The horizontal and vertical gaps are the shorter sides of a right-angled triangle.",
          traps: wrongTrap(),
        };
      }
      if (mode === "iso") {
        const base = 2 * b;
        return {
          prompt: `An isosceles triangle has two sides of length ${a} ${unit} and a base of ${base} ${unit}. Work out the exact perpendicular height of the triangle. ${form}`,
          diagram: rightTriSvg({ w: b, h: Math.sqrt(N), base: `${b} ${unit}`, height: "h", hyp: `${a} ${unit}`, aria: `Half of the isosceles triangle: a right-angled triangle with hypotenuse ${a} ${unit}, base ${b} ${unit} (half of the base) and height h.` }),
          answer,
          solution: [
            `The height cuts the isosceles triangle into two right-angled triangles, each with hypotenuse ${a} and base {{${base}/2}} = ${b} (the diagram shows one half).`,
            `{{h^2 = ${a}^2 - ${b}^2 = ${a * a} - ${b * b} = ${N}}}.`,
            `${simp} ${unit}.`,
          ],
          hint: "The height splits the base exactly in half. Work in one right-angled half.",
          traps: [
            ...(() => {
              const M2 = a * a - base * base;
              if (M2 <= 0) return [];
              const [k3, s3] = splitSquare(M2);
              return [{ spec: (s3 === 1 ? { type: "number", value: k3 } : { type: "expression", expr: surdM(k3, s3) }) as AnswerSpec, feedback: `Use half the base (${b}), not the whole base — the height meets the base at its midpoint.` }];
            })(),
            ...wrongTrap(),
          ],
        };
      }
      const flip = rng.bool();
      const diagram = mode === "hyp"
        ? rightTriSvg({ w: a, h: b, base: `${a} ${unit}`, height: `${b} ${unit}`, hyp: "x", flip, aria: `Right-angled triangle with shorter sides ${a} ${unit} and ${b} ${unit}; the hypotenuse is marked x.` })
        : rightTriSvg({ w: Math.sqrt(N), h: b, base: "x", height: `${b} ${unit}`, hyp: `${a} ${unit}`, flip, aria: `Right-angled triangle with hypotenuse ${a} ${unit} and a shorter side ${b} ${unit}; the other shorter side is marked x.` });
      return {
        prompt: mode === "hyp" ? `A right-angled triangle has shorter sides of ${a} ${unit} and ${b} ${unit}. Work out the exact length of the hypotenuse, x. ${form}` : `A right-angled triangle has a hypotenuse of ${a} ${unit} and another side of ${b} ${unit}. Work out the exact length of the third side, x. ${form}`,
        diagram,
        answer,
        solution: mode === "hyp"
          ? [`x is the hypotenuse: {{x^2 = ${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${N}}}.`, `Find the largest square factor of ${N}: ${k * k}.`, `${simp} ${unit}.`]
          : [`x is a shorter side: {{x^2 = ${a}^2 - ${b}^2 = ${a * a} - ${b * b} = ${N}}}.`, `Find the largest square factor of ${N}: ${k * k}.`, `${simp} ${unit}.`],
        hint: `Find {{x^2}} first, then look for the biggest square number that divides it.`,
        traps: wrongTrap(),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.is-it-right-angled`,
    topicId: T,
    title: "Is the triangle right-angled? (converse of Pythagoras)",
    level: 2,
    guideRef: "pythagoras",
    generate(rng, tier) {
      const yes = rng.bool();
      // Squares of the three sides, plus how to display each side.
      let sq: number[] = [], show: string[] = [];
      if (tier === 3) {
        const r = attempt(() => {
          const p = rng.int(2, 45), q = rng.int(2, 45);
          const c = yes ? p + q : p + q + rng.pick([-1, 1, 2]);
          const all = [p, q, c];
          if (all.every((n) => Number.isInteger(Math.sqrt(n)))) return null;
          if (all.filter((n) => !Number.isInteger(Math.sqrt(n))).length < 1 || p === q) return null;
          return all;
        }, () => [7, 9, 16]);
        sq = r;
        show = r.map((n) => (Number.isInteger(Math.sqrt(n)) ? String(Math.sqrt(n)) : `{{sqrt(${n})}}`));
      } else {
        const sides = attempt(() => {
          const t = rng.pick(tier === 1 ? TRIPLES.slice(0, 4) : TRIPLES);
          const k = tier === 1 ? rng.int(1, 4) : rng.pick([0.5, 1.5, 2, 2.5, 3, 5, 10]);
          let out = t.map((x) => clean(x * k));
          if (!yes) {
            const i = rng.int(0, 2);
            out = out.map((x, j) => (j === i ? clean(x + rng.pick(tier === 1 ? [-1, 1] : [-1, -0.5, 0.5, 1])) : x));
          }
          const s2 = [...out].sort((x, y) => x - y);
          if (s2[0] + s2[1] <= s2[2] + 1e-9) return null; // not a triangle
          if (new Set(out).size < 3) return null;
          const right = Math.abs(s2[0] ** 2 + s2[1] ** 2 - s2[2] ** 2) < 1e-9;
          return right === yes ? out : null;
        }, () => (yes ? [6, 8, 10] : [6, 8, 11]));
        sq = sides.map((x) => clean(x * x));
        show = sides.map(num);
      }
      const order = rng.shuffle([0, 1, 2]);
      const unit = rng.pick(["cm", "m", "mm"] as const);
      const list = order.map((i) => show[i]);
      const sorted = [0, 1, 2].sort((x, y) => sq[x] - sq[y]);
      const [i0, i1, i2] = sorted;
      const sum = clean(sq[i0] + sq[i1]);
      const isRight = Math.abs(sum - sq[i2]) < 1e-9;
      const name = rng.pick(["A triangle", "Triangle PQR", "Triangle ABC", "A triangular garden bed"]);
      const sqText = (i: number) => (show[i].startsWith("{{") ? `{{(sqrt(${sq[i]}))^2 = ${sq[i]}}}` : `{{${show[i]}^2 = ${num(sq[i])}}}`);
      return {
        prompt: `${name} has sides of length ${list[0]} ${unit}, ${list[1]} ${unit} and ${list[2]} ${unit}. Is it a right-angled triangle? Type **yes** or **no**.`,
        answer: isRight ? { type: "text", accept: ["yes", "y"], display: "Yes" } : { type: "text", accept: ["no", "n"], display: "No" },
        solution: [
          `The longest side is ${show[i2]}. If the triangle is right-angled, its square equals the sum of the squares of the other two.`,
          `${sqText(i0)} and ${sqText(i1)}, so the sum is ${num(sum)}. The longest side squared: ${sqText(i2)}.`,
          isRight ? `${num(sum)} = ${num(sq[i2])}, so **yes** — by the converse of Pythagoras the angle opposite the longest side is 90°.` : `${num(sum)} ≠ ${num(sq[i2])}, so **no** — it is not right-angled (the angle opposite the longest side is ${sum > sq[i2] ? "acute" : "obtuse"}).`,
        ],
        hint: "Square the two shorter sides and add. Compare with the square of the longest side.",
        traps: [isRight
          ? { spec: { type: "text", accept: ["no"] }, feedback: "Check again: compare (shorter)² + (shorter)² with (longest)² — they are equal." }
          : { spec: { type: "text", accept: ["yes"] }, feedback: "Close isn't enough — the two totals must be exactly equal. Look again at your squares." }],
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.find-angle-trig`,
    topicId: T,
    title: "Find an angle with inverse trig",
    level: 2,
    guideRef: "sohcahtoa",
    generate(rng, tier) {
      const dpNote = "Give your answer correct to 1 decimal place.";
      if (tier === 3 && rng.bool(0.5)) {
        const r = attempt(() => {
          const L = rng.int(6, 30), half = rng.int(2, L - 2);
          const base = acosD(half / L);
          if (base < 20 || base > 80) return null;
          return { L, half, base };
        }, () => ({ L: 13, half: 5, base: acosD(5 / 13) }));
        const askApex = rng.bool();
        const apex = 180 - 2 * r.base;
        const ans = dp1(askApex ? apex : r.base);
        const unit = rng.pick(["cm", "m"] as const);
        return {
          prompt: `An isosceles triangle has two equal sides of ${r.L} ${unit} and a base of ${2 * r.half} ${unit}. Work out the size of ${askApex ? "the angle between the two equal sides" : "one of the base angles"}. ${dpNote}`,
          answer: { type: "number", value: ans },
          solution: [
            `Draw the line of symmetry: it meets the base at its midpoint at 90°, making two right-angled triangles with hypotenuse ${r.L} and base ${r.half}.`,
            `Base angle: the base half is adjacent, ${r.L} is the hypotenuse → CAH: {{cos x = ${r.half}/${r.L}}}, {{x = cos^(-1)(${r.half}/${r.L})}} = ${s6(r.base)}…°`,
            askApex ? `Apex angle = 180° − 2 × ${s6(r.base)}° = ${s6(apex)}… = ${num(ans)}° (1 d.p.)` : `Base angle = ${num(ans)}° (1 d.p.)`,
          ],
          hint: "Split the isosceles triangle down its line of symmetry into two right-angled triangles.",
          traps: numTraps(ans, askApex
            ? [[dp1(r.base), "That's a base angle — the question wants the angle between the equal sides."], [dp1(90 - r.base), "That's only half of the apex angle. Double it."]]
            : [[dp1(apex), "That's the apex angle — the question asks for a base angle."], [dp1(acosD(Math.min(1, (2 * r.half) / r.L)) || 0), "Use half the base in the right-angled triangle, not the whole base."]]),
        };
      }
      const roles: Role[] = ["opp", "adj", "hyp"];
      const r = attempt(() => {
        const k1 = rng.pick(roles);
        const k2 = rng.pick(roles.filter((x) => x !== k1));
        const { fn, top, bot } = ratioFor(k1, k2);
        const vt = tier === 1 ? rng.int(3, 20) : rng.bool(0.6) ? rng.int(3, 40) : rng.int(25, 250) / 10;
        const vb = tier === 1 ? rng.int(3, 20) : rng.bool(0.6) ? rng.int(3, 40) : rng.int(25, 250) / 10;
        if (fn !== "tan" && vt >= vb) return null;
        const ratio = vt / vb;
        const th = fn === "sin" ? asinD(ratio) : fn === "cos" ? acosD(ratio) : atanD(ratio);
        if (th < 15 || th > 75) return null;
        if (Math.abs(th - Math.round(th)) < 0.05) return null;
        return { fn, top, bot, vt, vb, th };
      }, () => ({ fn: "tan" as Fn, top: "opp" as Role, bot: "adj" as Role, vt: 5, vb: 9, th: atanD(5 / 9) }));
      const ans = dp1(r.th);
      const unit = rng.pick(UNITS);
      const at = rng.pick(["P", "R"] as const);
      const labels: Partial<Record<Role, string>> = { [r.top]: `${num(r.vt)} ${unit}`, [r.bot]: `${num(r.vb)} ${unit}` };
      const nm = sohNames(rng, at);
      const mn = r.fn === "sin" ? "SOH" : r.fn === "cos" ? "CAH" : "TOA";
      const ratioM = `${num(r.vt)}/${num(r.vb)}`;
      // Wrong-ratio trap: same two numbers under another (valid) inverse function.
      const q = r.vt / r.vb;
      const wrongs: Array<[number, string]> = [[dp1(90 - r.th), "That's the other acute angle. Label the sides from the angle marked x."]];
      if (r.fn !== "tan") wrongs.push([dp1(atanD(q)), `The sides you know are the ${ROLE_NAME[r.top]} and the ${ROLE_NAME[r.bot]}, which go with ${r.fn}, not tan.`]);
      else if (q < 1) wrongs.push([dp1(asinD(q)), "The sides you know are the opposite and adjacent, which go with tan, not sin."]);
      return {
        prompt: `In triangle ${nm.tri}, angle ${nm.right} = 90°, ${nm.side[r.top]} = ${num(r.vt)} ${unit} and ${nm.side[r.bot]} = ${num(r.vb)} ${unit}. Work out the size of angle ${nm.angle} (marked x). ${dpNote}`,
        diagram: sohSvg(r.th, at, labels, "x", rng.bool(), `Right-angled triangle ${nm.tri} with the right angle at ${nm.names[1]}. ${nm.side[r.top]} is ${num(r.vt)} ${unit}, ${nm.side[r.bot]} is ${num(r.vb)} ${unit} and angle ${nm.angle} is marked x.`, nm.names),
        answer: { type: "number", value: ans },
        solution: [
          `From the angle x: ${num(r.vt)} ${unit} is the **${ROLE_NAME[r.top]}** and ${num(r.vb)} ${unit} is the **${ROLE_NAME[r.bot]}** → ${mn}.`,
          `{{${r.fn} x = ${ratioM}}}, so {{x = ${r.fn}^(-1)(${ratioM})}} = ${s6(r.th)}…°`,
          `x = ${num(ans)}° (1 d.p.)`,
        ],
        hint: "Label O, A, H from the angle x, pick the ratio that uses the two sides you know, then use the inverse (shift) key.",
        traps: numTraps(ans, wrongs),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.triples`,
    topicId: T,
    title: "Spot and generate Pythagorean triples",
    level: 2,
    guideRef: "pythagorean-triples",
    generate(rng, tier) {
      const mode = tier === 1 ? "missing" : tier === 2 ? rng.pick(["missing", "euclid"] as const) : rng.pick(["missing", "reverse", "euclid"] as const);
      const formula = "Euclid's formula says that for whole numbers m > n > 0, the numbers {{m^2 - n^2}}, {{2mn}} and {{m^2 + n^2}} form a Pythagorean triple.";
      if (mode === "euclid" || mode === "reverse") {
        const r = attempt(() => {
          const m = rng.int(2, tier === 3 ? 11 : 8), n = rng.int(1, m - 1);
          return { m, n };
        }, () => ({ m: 4, n: 1 }));
        const { m, n } = r;
        const a = m * m - n * n, b = 2 * m * n, c = m * m + n * n;
        if (mode === "euclid") {
          return {
            prompt: `${formula} Use m = ${m} and n = ${n} to write down the triple. Give all three numbers.`,
            answer: { type: "list", values: [a, b, c], ordered: false, display: `${Math.min(a, b)}, ${Math.max(a, b)}, ${c}` },
            solution: [
              `{{m^2 - n^2 = ${m * m} - ${n * n} = ${a}}}, {{2mn = 2 * ${m} * ${n} = ${b}}}, {{m^2 + n^2 = ${m * m} + ${n * n} = ${c}}}.`,
              `Check: {{${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${a * a + b * b} = ${c}^2}}. ✓`,
            ],
            hint: "Substitute m and n into each of the three expressions.",
            traps: n === 1 ? [] : [{ spec: { type: "list", values: [m * m - n, 2 * m * n, m * m + n] }, feedback: "Square n as well as m." } as Trap],
          };
        }
        const sides = rng.shuffle([a, b, c]);
        return {
          prompt: `${formula} The triple ${sides[0]}, ${sides[1]}, ${sides[2]} comes from this formula. Find m and n. Give m first, then n.`,
          answer: { type: "list", values: [m, n], ordered: true, display: `m = ${m}, n = ${n}` },
          solution: [
            `The largest number is {{m^2 + n^2 = ${c}}}; the even leg is {{2mn = ${b}}}, so {{mn = ${b / 2}}}.`,
            `Then {{(m + n)^2 = m^2 + n^2 + 2mn = ${c} + ${b} = ${c + b}}}, so m + n = ${m + n}; and {{(m - n)^2 = ${c} - ${b} = ${c - b}}}, so m − n = ${m - n}.`,
            `Solve: m = ${m}, n = ${n}. Check {{m^2 - n^2 = ${a}}}. ✓`,
          ],
          hint: "The hypotenuse is m² + n² and the even side is 2mn. What are (m + n)² and (m − n)²?",
          traps: n !== m ? [{ spec: { type: "list", values: [n, m], ordered: true }, feedback: "Right numbers, wrong order — m is the larger one." }] : [],
        };
      }
      const t = rng.pick(tier === 1 ? TRIPLES.slice(0, 3) : TRIPLES.slice(0, tier === 2 ? 6 : 8));
      const k = tier === 1 ? rng.int(2, 6) : tier === 2 ? rng.pick([2, 3, 4, 5, 6, 7, 8, 10, 0.5]) : rng.pick([3, 4, 5, 6, 7, 9, 11, 12, 15, 20, 25, 1.5]);
      const [p, q, h] = t.map((x) => clean(x * k));
      const giveLegs = rng.bool();
      const unit = rng.pick(UNITS);
      const flip = rng.bool();
      const swap = rng.bool();
      const [legA, legB] = swap ? [q, p] : [p, q];
      const [tA, tB] = swap ? [t[1], t[0]] : [t[0], t[1]];
      if (giveLegs) {
        return {
          prompt: `A right-angled triangle has shorter sides of ${num(legA)} ${unit} and ${num(legB)} ${unit}. Without a calculator, find the length of the hypotenuse, x. (Look for a Pythagorean triple.)`,
          diagram: rightTriSvg({ w: legA, h: legB, base: `${num(legA)} ${unit}`, height: `${num(legB)} ${unit}`, hyp: "x", flip, aria: `Right-angled triangle with shorter sides ${num(legA)} ${unit} and ${num(legB)} ${unit}; the hypotenuse is marked x.` }),
          answer: { type: "number", value: h },
          solution: [
            `${num(legA)} = ${num(k)} × ${tA} and ${num(legB)} = ${num(k)} × ${tB}: this is the ${t[0]}-${t[1]}-${t[2]} triple scaled by ${num(k)}.`,
            `So x = ${num(k)} × ${t[2]} = ${num(h)} ${unit}.`,
            `Check: {{${num(legA)}^2 + ${num(legB)}^2 = ${num(clean(legA * legA))} + ${num(clean(legB * legB))} = ${num(clean(h * h))} = ${num(h)}^2}}.`,
          ],
          hint: "Divide both sides by a common factor. Do you recognise the triple that's left?",
          traps: numTraps(h, [[clean(legA + legB), "Adding the sides doesn't work — scale up the hypotenuse of the basic triple instead."]]),
        };
      }
      const known = rng.bool() ? legA : legB;
      const other = known === legA ? legB : legA;
      const tKnown = known === legA ? tA : tB, tOther = known === legA ? tB : tA;
      return {
        prompt: `A right-angled triangle has a hypotenuse of ${num(h)} ${unit} and another side of ${num(known)} ${unit}. Without a calculator, find the length of the third side, x. (Look for a Pythagorean triple.)`,
        diagram: known === legA
          ? rightTriSvg({ w: legA, h: legB, base: `${num(legA)} ${unit}`, height: "x", hyp: `${num(h)} ${unit}`, flip, aria: `Right-angled triangle with hypotenuse ${num(h)} ${unit} and one shorter side ${num(known)} ${unit}; the other shorter side is marked x.` })
          : rightTriSvg({ w: legA, h: legB, base: "x", height: `${num(legB)} ${unit}`, hyp: `${num(h)} ${unit}`, flip, aria: `Right-angled triangle with hypotenuse ${num(h)} ${unit} and one shorter side ${num(known)} ${unit}; the other shorter side is marked x.` }),
        answer: { type: "number", value: other },
        solution: [
          `${num(known)} = ${num(k)} × ${tKnown} and ${num(h)} = ${num(k)} × ${t[2]}: the ${t[0]}-${t[1]}-${t[2]} triple scaled by ${num(k)}.`,
          `So x = ${num(k)} × ${tOther} = ${num(other)} ${unit}.`,
          `Check: {{${num(h)}^2 - ${num(known)}^2 = ${num(clean(h * h - known * known))} = ${num(other)}^2}}.`,
        ],
        hint: "What do the hypotenuse and the known side have in common? Divide it out.",
        traps: numTraps(other, [[clean(h - known), "Subtracting the sides doesn't work — it's the squares that subtract."]]),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.bearings`,
    topicId: T,
    title: "Bearings with right-angled triangles",
    level: 2,
    guideRef: "bearings-elevation",
    generate(rng, tier) {
      const mode = tier === 1 ? rng.pick(["back", "component"] as const) : tier === 2 ? rng.pick(["back", "component", "from-components"] as const) : rng.pick(["two-leg", "from-components", "two-leg"] as const);
      const place = rng.pick([["A", "B"], ["P", "Q"], ["the harbour", "the buoy"], ["the lighthouse", "the ship"], ["Changi", "the waypoint"]] as const);
      const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);
      if (mode === "back") {
        const th = attempt(() => { const t = rng.int(5, 355); return t % 90 === 0 || t === 180 ? null : t; }, () => 67);
        const ans = (th + 180) % 360;
        return {
          prompt: `The bearing of ${place[1]} from ${place[0]} is ${pad3(th)}°. Work out the bearing of ${place[0]} from ${place[1]}.`,
          answer: { type: "number", value: ans, display: `${pad3(ans)}°` },
          solution: [
            `A back bearing points the opposite way, so it differs by 180°.`,
            th < 180 ? `${pad3(th)}° + 180° = ${pad3(ans)}°` : `${pad3(th)}° − 180° = ${pad3(ans)}°`,
          ],
          hint: "Draw a north line at each point. Facing back the way you came is a half-turn.",
          traps: numTraps(ans, [[360 - th, "360° − bearing reflects the direction in the north line — you need a half-turn: ±180°."], [(th + 90) % 360, "Turning around is 180°, not 90°."]]),
        };
      }
      if (mode === "component") {
        const th = attempt(() => { const t = rng.int(5, 355); const m = t % 90; return m < 12 || m > 78 ? null : t; }, () => 130);
        const d = tier === 1 ? rng.int(5, 60) : rng.int(25, 400) / 10;
        let phi: number, ns: "north" | "south", ew: "east" | "west", ref: string;
        if (th < 90) { phi = th; ns = "north"; ew = "east"; ref = `${th}° from north towards east`; }
        else if (th < 180) { phi = 180 - th; ns = "south"; ew = "east"; ref = `180° − ${th}° = ${phi}° from south towards east`; }
        else if (th < 270) { phi = th - 180; ns = "south"; ew = "west"; ref = `${th}° − 180° = ${phi}° from south towards west`; }
        else { phi = 360 - th; ns = "north"; ew = "west"; ref = `360° − ${th}° = ${phi}° from north towards west`; }
        const askEW = rng.bool();
        const exact = askEW ? d * sinD(phi) : d * cosD(phi);
        const ans = sf(exact);
        const dirWord = askEW ? ew : ns;
        const who = rng.pick(["A ship", "A drone", "A yacht", "A hiker"]);
        return {
          prompt: `${who} travels ${num(d)} km from ${place[0]} on a bearing of ${pad3(th)}° to ${place[1]}. How far ${dirWord} of ${place[0]} is ${place[1]}? Give your answer correct to 3 significant figures.`,
          answer: { type: "number", value: ans },
          solution: [
            `The path makes ${ref}. Draw a right-angled triangle with the ${num(d)} km path as the hypotenuse.`,
            askEW
              ? `The ${ew}ward distance is opposite the ${phi}° angle: {{${num(d)} sin ${phi}°}} = ${s6(exact)}…`
              : `The ${ns}ward distance is adjacent to the ${phi}° angle: {{${num(d)} cos ${phi}°}} = ${s6(exact)}…`,
            `${s3(ans)} km (3 s.f.)`,
          ],
          hint: "Find the acute angle between the path and the north–south line, then decide: is the distance you want opposite or adjacent to it?",
          traps: numTraps(ans, [[sf(askEW ? d * cosD(phi) : d * sinD(phi)), "Swap sin and cos: check which side is opposite the angle you used."]]),
        };
      }
      if (mode === "from-components") {
        const r = attempt(() => {
          const n = tier === 2 ? rng.int(3, 30) : rng.int(20, 300) / 10;
          const e = tier === 2 ? rng.int(3, 30) : rng.int(20, 300) / 10;
          if (n / e < 0.25 || n / e > 4) return null;
          return { n, e };
        }, () => ({ n: 8, e: 5 }));
        const sN = rng.pick([1, -1]), sE = rng.pick([1, -1]);
        const brg = ((Math.atan2(sE * r.e, sN * r.n) / RAD) + 360) % 360;
        const ans = dp1(brg);
        const alpha = atanD(r.e / r.n);
        const step = sN > 0 && sE > 0 ? `Bearing = ${s6(alpha)}…°` : sN < 0 && sE > 0 ? `Bearing = 180° − ${s6(alpha)}° = ${s6(brg)}…°` : sN < 0 ? `Bearing = 180° + ${s6(alpha)}° = ${s6(brg)}…°` : `Bearing = 360° − ${s6(alpha)}° = ${s6(brg)}…°`;
        return {
          prompt: `${cap(place[1])} is ${num(r.n)} km due ${sN > 0 ? "north" : "south"} and ${num(r.e)} km due ${sE > 0 ? "east" : "west"} of ${place[0]}. Work out the bearing of ${place[1]} from ${place[0]}. Give your answer correct to 1 decimal place.`,
          answer: { type: "number", value: ans, display: `${pad3(ans)}°` },
          solution: [
            `Sketch it: the angle between the north–south line and the path satisfies {{tan alpha = ${num(r.e)}/${num(r.n)}}} (${sE > 0 ? "east" : "west"} ÷ ${sN > 0 ? "north" : "south"}), so {{alpha = tan^(-1)(${num(r.e)}/${num(r.n)})}} = ${s6(alpha)}…°`,
            `${step}  (measured clockwise from north).`,
            `Bearing = ${pad3(ans)}° (1 d.p.)`,
          ],
          hint: "Sketch the north line first. Bearings are measured clockwise from north — which quadrant is the path in?",
          traps: numTraps(ans, [
            [dp1(alpha), "That's the angle with the north–south line. Bearings are measured clockwise from north — adjust for the quadrant."],
            [dp1(((Math.atan2(sE * r.n, sN * r.e) / RAD) + 360) % 360), "You've used north ÷ east. The angle at the north line has the east–west distance opposite it."],
          ]),
        };
      }
      // two-leg: a 90° turn between the two legs
      const r = attempt(() => {
        const t1 = rng.int(10, 340), turn = rng.pick([90, -90]);
        const t2 = (t1 + turn + 360) % 360;
        const d1 = rng.int(30, 250) / 10, d2 = rng.int(30, 250) / 10;
        if (d1 / d2 < 0.3 || d1 / d2 > 3.3 || t1 % 90 === 0) return null;
        return { t1, t2, turn, d1, d2 };
      }, () => ({ t1: 40, t2: 130, turn: 90, d1: 12, d2: 9 }));
      const dist = Math.sqrt(r.d1 * r.d1 + r.d2 * r.d2);
      const beta = atanD(r.d2 / r.d1);
      const brg = ((r.t1 + (r.turn > 0 ? beta : -beta)) % 360 + 360) % 360;
      const askDist = rng.bool();
      const ans = askDist ? sf(dist) : dp1(brg);
      return {
        prompt: `A ship sails ${num(r.d1)} km from A on a bearing of ${pad3(r.t1)}° to B. It then sails ${num(r.d2)} km on a bearing of ${pad3(r.t2)}° to C. ${askDist ? "Work out the direct distance AC. Give your answer correct to 3 significant figures." : "Work out the bearing of C from A. Give your answer correct to 1 decimal place."}`,
        answer: askDist ? { type: "number", value: ans } : { type: "number", value: ans, display: `${pad3(ans)}°` },
        solution: [
          `The ship turns from ${pad3(r.t1)}° to ${pad3(r.t2)}° — a 90° turn — so angle ABC = 90°.`,
          askDist
            ? `Pythagoras: {{AC^2 = ${num(r.d1)}^2 + ${num(r.d2)}^2 = ${num(clean(r.d1 * r.d1 + r.d2 * r.d2))}}}, {{AC = ${s6(dist)}}}…`
            : `Angle BAC: {{tan(BAC) = ${num(r.d2)}/${num(r.d1)}}}, so angle BAC = ${s6(beta)}…°. C is ${r.turn > 0 ? "clockwise" : "anticlockwise"} of the first leg, so bearing = ${pad3(r.t1)}° ${r.turn > 0 ? "+" : "−"} ${s6(beta)}° = ${s6(brg)}…°`,
          askDist ? `AC = ${s3(ans)} km (3 s.f.)` : `Bearing of C from A = ${pad3(ans)}° (1 d.p.)`,
        ],
        hint: "What is the angle between the two legs? Once you see the right angle, it's Pythagoras and SOH CAH TOA.",
        traps: askDist
          ? numTraps(ans, [[clean(r.d1 + r.d2), "That's the distance sailed, not the straight-line distance AC."]])
          : numTraps(ans, [[dp1(beta), "That's angle BAC — add it to (or subtract it from) the first bearing."], [dp1(((r.t1 + (r.turn > 0 ? -beta : beta)) % 360 + 360) % 360), "C is on the other side of the first leg — check which way the ship turned."]]),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.elevation-depression`,
    topicId: T,
    title: "Angles of elevation and depression",
    level: 2,
    guideRef: "bearings-elevation",
    generate(rng, tier) {
      const sfNote = "Give your answer correct to 3 significant figures.";
      const mode = tier === 1 ? rng.pick(["height", "depression"] as const) : tier === 2 ? rng.pick(["height", "depression", "angle"] as const) : rng.pick(["two-angles", "angle", "two-angles"] as const);
      if (mode === "height") {
        const d = tier === 1 ? rng.int(10, 80) : rng.int(150, 900) / 10;
        const a = tier === 1 ? rng.int(15, 65) : rng.int(12, 70);
        const eye = tier === 2 && rng.bool(0.5) ? rng.int(14, 18) / 10 : 0;
        const what = rng.pick(["a tree", "an HDB block", "a flagpole", "a Supertree at Gardens by the Bay", "a clock tower"]);
        const [who, pr] = rng.pick([["Priya", "Her"], ["Kenji", "His"], ["Zara", "Her"], ["Marcus", "His"], ["Siti", "Her"], ["Jun", "His"]] as const);
        const up = d * tanD(a), exact = up + eye, ans = sf(exact);
        return {
          prompt: `${who} stands on level ground ${num(d)} m from the foot of ${what}. ${eye ? `${pr} eyes are ${num(eye)} m above the ground. ` : ""}The angle of elevation of the top from ${eye ? `${pr.toLowerCase()} eyes` : "where they stand"} is ${a}°. Work out the height of ${what.replace(/^an? /, "the ")}. ${sfNote}`,
          diagram: eye ? undefined : rightTriSvg({ w: d, h: up, base: `${num(d)} m`, height: "h", angleP: `${a}°`, aria: `Right-angled triangle: horizontal ground ${num(d)} metres, vertical height h, angle of elevation ${a} degrees at ground level.` }),
          answer: { type: "number", value: ans },
          solution: [
            `The height above ${eye ? "eye level" : "the ground"} is opposite the ${a}° angle; the ${num(d)} m is adjacent → TOA.`,
            `{{h = ${num(d)} tan ${a}°}} = ${s6(up)}…${eye ? ` m above eye level; add the eye height: ${s6(up)} + ${num(eye)} = ${s6(exact)}…` : ""}`,
            `Height = ${s3(ans)} m (3 s.f.)`,
          ],
          hint: "The angle of elevation is measured up from the horizontal. Which ratio links the opposite and the adjacent?",
          traps: numTraps(ans, [
            [sf(d * sinD(a) + eye), "Sin uses the hypotenuse — but the ground distance is adjacent to the angle. Use tan."],
            ...(eye ? [[sf(up), "Don't forget to add the height of the eyes above the ground."] as [number, string]] : []),
          ]),
        };
      }
      if (mode === "depression") {
        const h = tier === 1 ? rng.int(20, 120) : rng.int(150, 1500) / 10;
        const a = tier === 1 ? rng.int(15, 60) : rng.int(8, 65);
        const exact = h / tanD(a), ans = sf(exact);
        const ctx = rng.pick([
          [`From the top of a vertical cliff ${num(h)} m above sea level`, "a boat at sea", "the boat", "the foot of the cliff"],
          [`From the top of a lighthouse ${num(h)} m above sea level`, "a kayak", "the kayak", "the base of the lighthouse"],
          [`From a drone hovering ${num(h)} m above level ground`, "a picnic mat on the ground", "the mat", "the point directly below the drone"],
        ] as const);
        return {
          prompt: `${ctx[0]}, the angle of depression of ${ctx[1]} is ${a}°. Work out the horizontal distance from ${ctx[3]} to ${ctx[2]}. ${sfNote}`,
          diagram: rightTriSvg({ w: exact, h, height: `${num(h)} m`, base: "d", depression: `${a}°`, aria: `The observer is ${num(h)} metres above the point directly below. A dashed horizontal line from the observer and the line of sight down to the object make an angle of depression of ${a} degrees. The horizontal distance is d.` }),
          answer: { type: "number", value: ans },
          solution: [
            `The angle of depression is measured down from the horizontal. By alternate angles, the angle of elevation from ${ctx[2]} up to the observer is also ${a}°.`,
            `In that triangle, ${num(h)} m is opposite ${a}° and d is adjacent: {{tan ${a}° = ${num(h)}/d}}, so {{d = ${num(h)}/(tan ${a}°)}} = ${s6(exact)}…`,
            `d = ${s3(ans)} m (3 s.f.)`,
          ],
          hint: "Use alternate angles: the angle of depression from the top equals the angle of elevation from the bottom.",
          traps: numTraps(ans, [
            [sf(h * tanD(a)), "d is on the bottom of tan here: divide by {{tan " + a + "°}}, don't multiply."],
            [sf(h / sinD(a)), "That's the length of the line of sight (the hypotenuse), not the horizontal distance."],
          ]),
        };
      }
      if (mode === "angle") {
        const r = attempt(() => {
          const h = rng.int(10, 150), d = rng.int(10, 200);
          const a = atanD(h / d);
          if (a < 8 || a > 75 || Math.abs(a - Math.round(a)) < 0.05) return null;
          return { h, d, a };
        }, () => ({ h: 45, d: 80, a: atanD(45 / 80) }));
        const dep = rng.bool();
        const ans = dp1(r.a);
        return {
          prompt: dep
            ? `A climber at the top of a vertical rock face ${r.h} m high looks down at a tent on level ground ${r.d} m from the foot of the rock face. Work out the angle of depression of the tent from the climber. Give your answer correct to 1 decimal place.`
            : `A kite is flying directly above a point ${r.d} m from Hana along level ground, at a height of ${r.h} m above the ground. Work out the angle of elevation of the kite from Hana's feet. Give your answer correct to 1 decimal place.`,
          answer: { type: "number", value: ans },
          solution: [
            dep ? `The angle of depression equals the angle of elevation of the climber from the tent (alternate angles).` : `The height is opposite the angle of elevation and the ground distance is adjacent.`,
            `{{tan x = ${r.h}/${r.d}}}, so {{x = tan^(-1)(${r.h}/${r.d})}} = ${s6(r.a)}…°`,
            `x = ${num(ans)}° (1 d.p.)`,
          ],
          hint: "Sketch the right-angled triangle. Which two sides do you know, relative to the angle?",
          traps: numTraps(ans, [[dp1(90 - r.a), dep ? "That's the angle with the vertical rock face. Depression is measured from the horizontal." : "That's the angle at the kite. Elevation is measured up from the ground."]]),
        };
      }
      // two-angles: walk towards a tower
      const r = attempt(() => {
        const a = rng.int(15, 45), b = a + rng.int(8, 30), d = rng.int(10, 80);
        if (b > 75) return null;
        const y = (d * tanD(a)) / (tanD(b) - tanD(a));
        const h = y * tanD(b);
        if (h > 300) return null;
        return { a, b, d, y, h };
      }, () => ({ a: 30, b: 45, d: 20, y: (20 * tanD(30)) / (tanD(45) - tanD(30)), h: ((20 * tanD(30)) / (tanD(45) - tanD(30))) * tanD(45) }));
      const ans = sf(r.h);
      return {
        prompt: `From a point A on level ground, the angle of elevation of the top of a tower is ${r.a}°. Mei walks ${r.d} m directly towards the tower to point B, where the angle of elevation is ${r.b}°. Work out the height of the tower. ${sfNote}`,
        diagram: twoAngleSvg(r.a, r.b, r.d, r.y, r.h),
        answer: { type: "number", value: ans },
        solution: [
          `Let the height be h and the distance from B to the foot of the tower be y. Then {{h = y tan ${r.b}°}} and {{h = (y + ${r.d}) tan ${r.a}°}}.`,
          `Set equal: {{y(tan ${r.b}° - tan ${r.a}°) = ${r.d} tan ${r.a}°}}, so {{y = (${r.d} tan ${r.a}°)/(tan ${r.b}° - tan ${r.a}°)}} = ${s6(r.y)}… m.`,
          `{{h = y tan ${r.b}°}} = ${s6(r.h)}… = ${s3(ans)} m (3 s.f.)`,
        ],
        hint: "Call the unknown distance from B to the tower y. Write the height two ways — one from each triangle — and set them equal.",
        traps: numTraps(ans, [
          [sf(r.d * tanD(r.b)), "The " + r.d + " m isn't the distance to the tower from either point — introduce y for the distance from B."],
          [sf(r.d * tanD(r.b - r.a)), "You can't subtract the angles like that — write the height in terms of y from each point."],
        ]),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.three-d`,
    topicId: T,
    title: "Lengths and angles in 3D",
    level: 3,
    guideRef: "three-d",
    generate(rng, tier) {
      const mode = tier === 1 ? rng.pick(["diagonal", "diagonal", "angle"] as const) : rng.pick(["diagonal", "angle", "pyramid-edge", "pyramid-angle"] as const);
      const unit = rng.pick(["cm", "m"] as const);
      if (mode === "diagonal" || mode === "angle") {
        const QUADS: Array<[number, number, number]> = [[1, 2, 2], [2, 3, 6], [1, 4, 8], [4, 4, 7], [2, 6, 9], [6, 6, 7], [3, 4, 12], [2, 5, 14], [2, 10, 11], [1, 12, 12], [8, 9, 12], [4, 8, 8], [6, 10, 15], [3, 6, 22], [4, 13, 16]];
        let l: number, w: number, h: number;
        if (tier === 1 && mode === "diagonal") {
          const q = rng.shuffle(rng.pick(QUADS));
          [l, w, h] = q;
        } else {
          const r = attempt(() => {
            const a = tier === 1 ? rng.int(2, 15) : rng.int(3, 30), b = tier === 1 ? rng.int(2, 15) : rng.int(3, 30), c = tier === 1 ? rng.int(2, 15) : rng.int(3, 30);
            if (rootTooNeat(a * a + b * b + c * c) && mode === "diagonal") return null;
            return [a, b, c] as [number, number, number];
          }, () => [5, 7, 4] as [number, number, number]);
          [l, w, h] = r;
        }
        const base2 = l * l + w * w, d2 = base2 + h * h;
        const diag = Math.sqrt(d2);
        const labs = { l: `${l} ${unit}`, w: `${w} ${unit}`, h: `${h} ${unit}` };
        if (mode === "diagonal") {
          const exactInt = Number.isInteger(diag);
          const ans = exactInt ? diag : sf(diag);
          return {
            prompt: `A cuboid measures ${l} ${unit} by ${w} ${unit} by ${h} ${unit}. Work out the length of the diagonal shown, from one corner to the opposite corner. ${exactInt ? "" : "Give your answer correct to 3 significant figures."}`.trim(),
            diagram: cuboidSvg(l, w, h, labs, `Cuboid with length ${l}, width ${w} and height ${h} ${unit}. A space diagonal runs from the front bottom left corner to the back top right corner.`),
            answer: { type: "number", value: ans },
            solution: [
              `Diagonal of the base: {{${l}^2 + ${w}^2 = ${base2}}} (keep it as the square).`,
              `This base diagonal and the height ${h} make a right angle: {{d^2 = ${base2} + ${h}^2 = ${d2}}}.`,
              exactInt ? `{{d = sqrt(${d2}) = ${diag}}} ${unit}` : `{{d = sqrt(${d2})}} = ${s6(diag)}… = ${s3(ans)} ${unit} (3 s.f.)`,
            ],
            hint: "Find the diagonal of the base first (it lies flat), then use it with the height in a second right-angled triangle.",
            traps: numTraps(ans, [
              [exactInt ? Math.sqrt(base2) : sf(Math.sqrt(base2)), "That's only the diagonal of the base. Now combine it with the height."],
              [l + w + h, "Adding the edges isn't a straight line — use Pythagoras twice."],
            ]),
          };
        }
        const ang = atanD(h / Math.sqrt(base2));
        const ans = dp1(ang);
        return {
          prompt: `A cuboid measures ${l} ${unit} long, ${w} ${unit} wide and ${h} ${unit} high. Work out the angle θ between the space diagonal shown and the base of the cuboid. Give your answer correct to 1 decimal place.`,
          diagram: cuboidSvg(l, w, h, labs, `Cuboid ${l} by ${w} by ${h} ${unit}. A space diagonal rises from the front bottom left corner to the back top right corner; the angle theta is between it and the base diagonal.`, true),
          answer: { type: "number", value: ans },
          solution: [
            `The angle with the base is the angle between the diagonal and its "shadow" on the base — the base diagonal: {{sqrt(${l}^2 + ${w}^2) = sqrt(${base2})}} = ${s6(Math.sqrt(base2))}…`,
            `In the vertical right-angled triangle: height ${h} is opposite θ, base diagonal is adjacent: {{tan theta = ${h}/sqrt(${base2})}}.`,
            `{{theta = tan^(-1)(${h}/sqrt(${base2}))}} = ${s6(ang)}… = ${num(ans)}° (1 d.p.)`,
          ],
          hint: "The angle between a line and a plane is with the line's projection on the plane — here, the diagonal of the base.",
          traps: numTraps(ans, [
            [dp1(atanD(h / l)), "That's the angle with an edge of the base. The diagonal's shadow on the base is the base diagonal, not an edge."],
            [dp1(90 - ang), "That's the angle with the vertical edge. Measure from the base."],
          ]),
        };
      }
      // Square-based pyramid, apex above the centre of the base.
      const s = tier === 1 ? rng.pick([4, 6, 8, 10, 12]) : rng.int(4, 24);
      const hgt = tier === 1 ? rng.int(4, 15) : rng.int(5, 30);
      const half2 = (s * s) / 2; // (half diagonal)²
      const halfD = Math.sqrt(half2);
      const edge = Math.sqrt(hgt * hgt + half2);
      const sM = s % 2 === 0 ? `${s / 2}sqrt(2)` : `(${s}sqrt(2))/2`;
      if (mode === "pyramid-edge") {
        const ans = sf(edge);
        return {
          prompt: `A pyramid has a square base of side ${s} ${unit}. Its apex is vertically above the centre of the base, at a height of ${hgt} ${unit}. Work out the length of one of the sloping edges. Give your answer correct to 3 significant figures.`,
          answer: { type: "number", value: ans },
          solution: [
            `Half the diagonal of the base: the diagonal is {{${s}sqrt(2)}}, so half of it is {{${sM}}} = ${s6(halfD)}… (and its square is {{${num(half2)}}}).`,
            `The edge, the height and the half-diagonal make a right-angled triangle: {{e^2 = ${hgt}^2 + ${num(half2)} = ${num(clean(hgt * hgt + half2))}}}.`,
            `{{e = sqrt(${num(clean(hgt * hgt + half2))})}} = ${s6(edge)}… = ${s3(ans)} ${unit} (3 s.f.)`,
          ],
          hint: "The apex is above the centre, so the right-angled triangle uses half of the base diagonal.",
          traps: numTraps(ans, [
            [sf(Math.sqrt(hgt * hgt + (s / 2) ** 2)), "That uses half the side — it's the slant height of a face. The edge goes to a corner, so use half the diagonal."],
            [sf(Math.sqrt(hgt * hgt + 2 * s * s)), "Use half of the base diagonal, not the whole diagonal."],
          ]),
        };
      }
      const ang = atanD(hgt / halfD);
      const ans = dp1(ang);
      return {
        prompt: `A pyramid has a square base of side ${s} ${unit}. Its apex is vertically above the centre of the base, at a height of ${hgt} ${unit}. Work out the angle between a sloping edge and the base. Give your answer correct to 1 decimal place.`,
        answer: { type: "number", value: ans },
        solution: [
          `The edge's projection on the base runs from a corner to the centre: half the diagonal = {{${sM}}} = ${s6(halfD)}…`,
          `Height ${hgt} is opposite the angle, the half-diagonal is adjacent: {{tan theta = ${hgt}/${s6(halfD)}}}`,
          `{{theta = tan^(-1)(${hgt}/${s6(halfD)})}} = ${s6(ang)}… = ${num(ans)}° (1 d.p.)`,
        ],
        hint: "Drop a line from the apex to the centre of the base. Which length on the base joins that centre to the foot of the edge?",
        traps: numTraps(ans, [
          [dp1(atanD(hgt / (s / 2))), "That's the angle between a face and the base (using half the side). The edge meets the base at a corner — use half the diagonal."],
          [dp1(90 - ang), "That's the angle between the edge and the vertical height."],
        ]),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.exact-values`,
    topicId: T,
    title: "Exact trig values for 30°, 45° and 60°",
    level: 3,
    guideRef: "exact-values",
    generate(rng, tier) {
      const mode = tier === 1 ? rng.pick(["side", "expr"] as const) : rng.pick(["side", "expr", "expr"] as const);
      if (mode === "side") {
        const r = attempt(() => {
          const th = rng.pick([30, 45, 60]);
          const roles: Role[] = ["opp", "adj", "hyp"];
          const known = rng.pick(roles), want = rng.pick(roles.filter((x) => x !== known));
          const v = tier === 1 ? rng.int(2, 12) : rng.int(2, 24);
          const sides: Record<Role, Sd> = th === 30 ? { opp: sd(1, 1), adj: sd(1, 1, 3), hyp: sd(2, 1) } : th === 45 ? { opp: sd(1, 1), adj: sd(1, 1), hyp: sd(1, 1, 2) } : { opp: sd(1, 1, 3), adj: sd(1, 1), hyp: sd(2, 1) };
          const res = sdMul(sd(v, 1), sdDiv(sides[want], sides[known]));
          if (res.s === 1 && tier > 1) return null;
          if (res.s === 1 && res.d !== 1) return null;
          if (th === 45 && known !== "hyp" && want !== "hyp") return null; // x = v — trivial
          return { th, known, want, v, res };
        }, () => ({ th: 60, known: "adj" as Role, want: "hyp" as Role, v: 5, res: sd(10, 1) }));
        const { th, known, want, v, res } = r;
        const { fn, top } = ratioFor(known, want);
        const xOnTop = want === top;
        const tv = EXACT[fn][th];
        const unit = rng.pick(["cm", "m"] as const);
        const labels: Partial<Record<Role, string>> = { [known]: `${v} ${unit}`, [want]: "x" };
        const at = rng.pick(["P", "R"] as const);
        const nm = sohNames(rng, at);
        const raw = xOnTop ? sdMul(sd(v, 1), tv) : sdDiv(sd(v, 1), tv);
        return {
          prompt: `In triangle ${nm.tri}, angle ${nm.right} = 90°, angle ${nm.angle} = ${th}° and ${nm.side[known]} = ${v} ${unit}. Without a calculator, work out the exact length of ${nm.side[want]} (marked x). Give your answer in its simplest form${res.s > 1 ? " (as a surd with a rational denominator)" : ""}.`,
          diagram: sohSvg(th, at, labels, `${th}°`, rng.bool(), `Right-angled triangle ${nm.tri} with the right angle at ${nm.names[1]}. Angle ${nm.angle} is ${th} degrees, ${nm.side[known]} is ${v} ${unit} and ${nm.side[want]} is marked x.`, nm.names),
          answer: sdAnswer(res),
          solution: [
            `From the ${th}° angle, ${v} is the ${ROLE_NAME[known]} and x is the ${ROLE_NAME[want]}, so use ${fn}: {{${fn} ${th}° = ${sdM(tv)}}}.`,
            xOnTop ? `{{x = ${v} * ${sdM(tv)} = ${sdM(raw)}}}` : `{{x = ${v}/(${fn} ${th}°) = ${v} / (${sdM(tv)}) = ${sdM(raw)}}}${tv.s > 1 ? " (multiply top and bottom by the surd to rationalise)" : ""}`,
            `x = {{${sdM(res)}}} ${unit}`,
          ],
          hint: th === 45 ? "The 45-45-90 triangle has sides 1 : 1 : √2." : "The 30-60-90 triangle (half an equilateral triangle) has sides 1 : √3 : 2.",
          traps: (() => {
            const wrong = xOnTop ? sdDiv(sd(v, 1), tv) : sdMul(sd(v, 1), tv);
            if (Math.abs(sdVal(wrong) - sdVal(res)) < 1e-9) return [];
            const t: Trap = { spec: { type: "expression", expr: sdM(wrong) }, feedback: xOnTop ? "x is on top of the ratio — multiply by the exact value, don't divide." : "x is on the bottom of the ratio — divide by the exact value, don't multiply." };
            return [t];
          })(),
        };
      }
      // Expression evaluation.
      const ANG: Record<Fn, number[]> = { sin: [30, 45, 60], cos: [30, 45, 60], tan: [30, 45, 60] };
      const r = attempt(() => {
        const kind = rng.pick(tier === 1 ? (["product", "sum"] as const) : (["product", "sum", "squares", "quotient"] as const));
        const f1 = rng.pick(["sin", "cos", "tan"] as Fn[]), f2 = rng.pick(["sin", "cos", "tan"] as Fn[]);
        const a1 = rng.pick(ANG[f1]), a2 = rng.pick(ANG[f2]);
        if (f1 === f2 && a1 === a2) return null;
        const v1 = EXACT[f1][a1], v2 = EXACT[f2][a2];
        const c = tier === 1 ? 1 : rng.pick([1, 1, 2, 3, 4, 6]);
        const cM = c === 1 ? "" : `${c} `;
        let res: Sd, text: string, steps: string[];
        if (kind === "product") {
          res = sdMul(sd(c, 1), sdMul(v1, v2));
          text = `${cM}${f1} ${a1}° * ${f2} ${a2}°`;
          steps = [`{{${f1} ${a1}° = ${sdM(v1)}}} and {{${f2} ${a2}° = ${sdM(v2)}}}.`, `{{${c === 1 ? "" : `${c} * `}${sdM(v1).includes("/") ? `(${sdM(v1)})` : sdM(v1)} * ${sdM(v2).includes("/") ? `(${sdM(v2)})` : sdM(v2)} = ${sdM(res)}}}`];
        } else if (kind === "quotient") {
          if (sdVal(v2) === 0) return null;
          res = sdDiv(v1, v2);
          text = `(${f1} ${a1}°)/(${f2} ${a2}°)`;
          steps = [`{{${f1} ${a1}° = ${sdM(v1)}}} and {{${f2} ${a2}° = ${sdM(v2)}}}.`, `Divide (multiply by the reciprocal) and rationalise if needed: {{${sdM(res)}}}.`];
        } else if (kind === "squares") {
          const q1 = sdMul(v1, v1), q2 = sdMul(v2, v2);
          const minus = rng.bool(0.4);
          const n = minus ? q1.n * q2.d - q2.n * q1.d : q1.n * q2.d + q2.n * q1.d;
          if (n === 0) return null;
          res = sd(n, q1.d * q2.d);
          text = `${f1}^2 ${a1}° ${minus ? "-" : "+"} ${f2}^2 ${a2}°`;
          steps = [`{{${f1}^2 ${a1}° = (${sdM(v1)})^2 = ${sdM(q1)}}} and {{${f2}^2 ${a2}° = (${sdM(v2)})^2 = ${sdM(q2)}}}.`, `{{${sdM(q1)} ${minus ? "-" : "+"} ${sdM(q2)} = ${sdM(res)}}}`];
        } else {
          // sum: both terms must share the same surd part
          const t1 = sdMul(sd(c, 1), v1);
          if (t1.s !== v2.s) return null;
          const n = t1.n * v2.d + v2.n * t1.d;
          res = sd(n, t1.d * v2.d, t1.s);
          text = `${cM}${f1} ${a1}° + ${f2} ${a2}°`;
          steps = [`{{${f1} ${a1}° = ${sdM(v1)}}} and {{${f2} ${a2}° = ${sdM(v2)}}}.`, `Use a common denominator and add: {{${sdM(t1)} + ${sdM(v2)} = ${sdM(res)}}}.`];
        }
        if (res.n === 0) return null;
        return { text, res, steps, kind };
      }, () => ({ text: "sin 60° * tan 30°", res: sd(1, 2), steps: ["{{sin 60° = sqrt(3)/2}} and {{tan 30° = sqrt(3)/3}}.", "{{sqrt(3)/2 * sqrt(3)/3 = 3/6 = 1/2}}"], kind: "product" as const }));
      return {
        prompt: `Without a calculator, work out the exact value of {{${r.text}}}. Give your answer in its simplest form${r.res.s > 1 ? " (any surd with a rational denominator)" : ""}.`,
        answer: sdAnswer(r.res),
        solution: [...r.steps, `= {{${sdM(r.res)}}}`],
        hint: "Sketch the half-equilateral triangle (1, √3, 2) and the half-square (1, 1, √2) and read the ratios off them.",
      };
    },
  },
];

/** Tower seen from two points A and B on level ground (B closer), to scale. */
function twoAngleSvg(a: number, b: number, d: number, y: number, h: number): string {
  const VW = 380, VH = 240;
  const s = Math.min(320 / (d + y), 160 / h);
  const x0 = (VW - (d + y) * s) / 2, yb = 205;
  const A: Pt = [x0, yb], B: Pt = [x0 + d * s, yb], Fo: Pt = [x0 + (d + y) * s, yb], Tp: Pt = [Fo[0], yb - h * s];
  let out = svgOpen(VW, VH, `A tower of height h. Point A on the ground has angle of elevation ${a} degrees to the top, point B, ${d} metres closer, has angle of elevation ${b} degrees.`);
  out += `<polygon points="${F(A[0])},${F(A[1])} ${F(Fo[0])},${F(Fo[1])} ${F(Tp[0])},${F(Tp[1])}" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/>`;
  out += `<line x1="${F(B[0])}" y1="${F(B[1])}" x2="${F(Tp[0])}" y2="${F(Tp[1])}" stroke="#1f2937" stroke-width="1.8"/>`;
  out += `<polyline points="${F(Fo[0] - 10)},${F(yb)} ${F(Fo[0] - 10)},${F(yb - 10)} ${F(Fo[0])},${F(yb - 10)}" fill="none" stroke="#1f2937" stroke-width="1.5"/>`;
  out += angleArc(A, [1, 0], unitV(A, Tp), 34, 0, `${a}°`);
  out += angleArc(B, [1, 0], unitV(B, Tp), 26, 0, `${b}°`);
  out += label((A[0] + B[0]) / 2, yb + 20, `${d} m`) + label((B[0] + Fo[0]) / 2, yb + 20, "y");
  out += label(Fo[0] + 8, yb - (h * s) / 2, "h", "start");
  out += label(A[0] - 10, yb + 5, "A") + label(B[0], yb + 36, "B");
  return out + "</svg>";
}
