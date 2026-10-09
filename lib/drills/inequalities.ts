// ---------------------------------------------------------------------------
// Skill drills — Inequalities (Year 11, Edexcel 4MA1 Higher 2.9–2.10).
// Linear inequalities (incl. flipping the sign, double inequalities, integer
// solutions, number lines), regions on a graph, and quadratic inequalities.
// Each drill generates unlimited fresh questions from a seeded RNG.
// ---------------------------------------------------------------------------
import type { Drill, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { frac, num, br, poly, simplify } from "./helpers.ts";

const TOPIC = "inequalities";

// ---------- operators ----------
type Op = "<" | "<=" | ">" | ">=";
const FLIP: Record<Op, Op> = { "<": ">", ">": "<", "<=": ">=", ">=": "<=" };
const flip = (op: Op): Op => FLIP[op];
const isIncl = (op: Op): boolean => op.length === 2;
const isLess = (op: Op): boolean => op[0] === "<";
const mkOp = (less: boolean, incl: boolean): Op => (less ? (incl ? "<=" : "<") : incl ? ">=" : ">");
/** Same direction, inclusive-ness toggled. */
const toggleIncl = (op: Op): Op => mkOp(isLess(op), !isIncl(op));
/** Plain-text symbol. */
const SYM: Record<Op, string> = { "<": "<", "<=": "≤", ">": ">", ">=": "≥" };
const pickOp = (rng: Rng): Op => rng.pick(["<", "<=", ">", ">="] as const);

// ---------- rationals ----------
type Q = [number, number];
const q = (n: number, d = 1): Q => simplify(n, d);
const qv = (r: Q): number => r[0] / r[1];
const isInt = (r: Q): boolean => r[1] === 1;
/** Markup (inside {{ }}): "4", "-3", "7/3", "-1/2". */
const qMk = (r: Q): string => (r[1] === 1 ? `${r[0]}` : `${r[0] < 0 ? "-" : ""}${Math.abs(r[0])}/${r[1]}`);
/** Inline text: 4, −3, {{7/3}}. */
const qTx = (r: Q): string => (r[1] === 1 ? num(r[0]) : frac(r[0], r[1]));
/** Terminating decimal string, or null. */
function qDec(r: Q): string | null {
  let d = r[1];
  while (d % 2 === 0) d /= 2;
  while (d % 5 === 0) d /= 5;
  if (d !== 1) return null;
  return String(parseFloat(qv(r).toFixed(6)));
}
/** Every accepted way to type the number r. */
function qStrs(r: Q): string[] {
  if (isInt(r)) return [String(r[0])];
  const out = [qMk(r)];
  const dec = qDec(r);
  if (dec) out.push(dec);
  return out;
}

// ---------- solution sets ----------
type Sol =
  | { kind: "single"; op: Op; k: Q }
  | { kind: "between"; lo: Q; loIncl: boolean; hi: Q; hiIncl: boolean }
  | { kind: "outside"; lo: Q; loIncl: boolean; hi: Q; hiIncl: boolean };

/** Markup for a solution set (may contain two {{ }} chunks). */
function solMk(s: Sol, v = "x"): string {
  if (s.kind === "single") return `{{${v} ${s.op} ${qMk(s.k)}}}`;
  if (s.kind === "between") return `{{${qMk(s.lo)} ${mkOp(true, s.loIncl)} ${v} ${mkOp(true, s.hiIncl)} ${qMk(s.hi)}}}`;
  return `{{${v} ${mkOp(true, s.loIncl)} ${qMk(s.lo)}}} or {{${v} ${mkOp(false, s.hiIncl)} ${qMk(s.hi)}}}`;
}

/** Text answer accepting the usual ways of writing the set. */
function solSpec(s: Sol, v = "x"): AnswerSpec {
  const acc = new Set<string>();
  if (s.kind === "single") {
    for (const k of qStrs(s.k)) {
      acc.add(`${v}${s.op}${k}`);
      acc.add(`${k}${flip(s.op)}${v}`);
      acc.add(`{${v}:${v}${s.op}${k}}`);
      acc.add(`{${v}|${v}${s.op}${k}}`);
    }
  } else if (s.kind === "between") {
    const oL = mkOp(true, s.loIncl), oH = mkOp(true, s.hiIncl);
    for (const l of qStrs(s.lo)) {
      for (const h of qStrs(s.hi)) {
        const main = `${l}${oL}${v}${oH}${h}`;
        acc.add(main);
        acc.add(`${h}${flip(oH)}${v}${flip(oL)}${l}`);
        acc.add(`{${v}:${main}}`);
        acc.add(`{${v}|${main}}`);
        const pLo = [`${v}${flip(oL)}${l}`, `${l}${oL}${v}`];
        const pHi = [`${v}${oH}${h}`, `${h}${flip(oH)}${v}`];
        for (const a of pLo) for (const b of pHi) for (const j of ["and", ",", "&"]) {
          acc.add(`${a}${j}${b}`);
          acc.add(`${b}${j}${a}`);
        }
      }
    }
  } else {
    const oL = mkOp(true, s.loIncl), oH = mkOp(false, s.hiIncl);
    for (const l of qStrs(s.lo)) {
      for (const h of qStrs(s.hi)) {
        const pLo = [`${v}${oL}${l}`, `${l}${flip(oL)}${v}`];
        const pHi = [`${v}${oH}${h}`, `${h}${flip(oH)}${v}`];
        for (const a of pLo) for (const b of pHi) for (const j of ["or", ","]) {
          acc.add(`${a}${j}${b}`);
          acc.add(`${b}${j}${a}`);
        }
        acc.add(`{${v}:${v}${oL}${l}}∪{${v}:${v}${oH}${h}}`);
      }
    }
  }
  return { type: "text", accept: [...acc], display: solMk(s, v) };
}
const solTrap = (s: Sol, feedback: string): Trap => ({ spec: solSpec(s), feedback });

// ---------- small formatting ----------
/** "ax + b" ASCII for markup. */
const lin = (a: number, b: number, v = "x"): string => poly([[a, v], [b, ""]]);
/** Compact ASCII (no spaces) for accepted answers. */
const tight = (s: string): string => s.replace(/\s+/g, "");
/** Plain text from ASCII maths: real minus signs. */
const plain = (s: string): string => s.replace(/-/g, "−");

// ===========================================================================
// SVG: number line
// ===========================================================================
function numberLineSvg(s: Sol): string {
  const bounds = s.kind === "single" ? [qv(s.k)] : [qv(s.lo), qv(s.hi)];
  const mid = Math.round((Math.min(...bounds) + Math.max(...bounds)) / 2);
  const start = mid - 5;
  const X = (v: number): number => 30 + (v - start) * 30;
  const yAxis = 62, yLine = 34;
  let g = `<rect x="0" y="0" width="360" height="90" fill="#ffffff"/>`;
  g += `<line x1="18" y1="${yAxis}" x2="342" y2="${yAxis}" stroke="#334155" stroke-width="2"/>`;
  for (let v = start; v <= start + 10; v++) {
    g += `<line x1="${X(v)}" y1="${yAxis - 6}" x2="${X(v)}" y2="${yAxis + 6}" stroke="#334155" stroke-width="1.5"/>`;
    g += `<text x="${X(v)}" y="${yAxis + 22}" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">${v < 0 ? "−" + -v : v}</text>`;
  }
  const seg = (x1: number, x2: number) => `<line x1="${x1}" y1="${yLine}" x2="${x2}" y2="${yLine}" stroke="#1f2937" stroke-width="3"/>`;
  const arrowR = `<polygon points="342,${yLine} 330,${yLine - 6} 330,${yLine + 6}" fill="#1f2937"/>`;
  const arrowL = `<polygon points="18,${yLine} 30,${yLine - 6} 30,${yLine + 6}" fill="#1f2937"/>`;
  const dot = (v: number, incl: boolean) =>
    `<circle cx="${X(v)}" cy="${yLine}" r="6" fill="${incl ? "#1f2937" : "#ffffff"}" stroke="#1f2937" stroke-width="2"/>`;
  if (s.kind === "single") {
    const k = qv(s.k);
    g += isLess(s.op) ? seg(24, X(k)) + arrowL : seg(X(k), 336) + arrowR;
    g += dot(k, isIncl(s.op));
  } else if (s.kind === "between") {
    const a = qv(s.lo), b = qv(s.hi);
    g += seg(X(a), X(b)) + dot(a, s.loIncl) + dot(b, s.hiIncl);
  } else {
    const a = qv(s.lo), b = qv(s.hi);
    g += seg(24, X(a)) + arrowL + seg(X(b), 336) + arrowR + dot(a, s.loIncl) + dot(b, s.hiIncl);
  }
  return `<svg viewBox="0 0 360 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line from ${num(start)} to ${num(start + 10)} with a solution set drawn above it; a filled circle means the end value is included, an open circle means it is not">${g}</svg>`;
}

// ===========================================================================
// SVG: half-plane / region on a grid
// ===========================================================================
interface Half {
  A: number;
  B: number;
  C: number;
  op: Op; // A x + B y op C
}
type Pt = [number, number];
const sat = (h: Half, x: number, y: number): boolean => {
  const L = h.A * x + h.B * y;
  return h.op === "<" ? L < h.C : h.op === "<=" ? L <= h.C : h.op === ">" ? L > h.C : L >= h.C;
};
/** Clip a convex polygon to the closed half-plane of h. */
function clip(poly0: Pt[], h: Half): Pt[] {
  const f = (p: Pt) => (isLess(h.op) ? h.C - (h.A * p[0] + h.B * p[1]) : h.A * p[0] + h.B * p[1] - h.C);
  const out: Pt[] = [];
  for (let i = 0; i < poly0.length; i++) {
    const P = poly0[i], Qp = poly0[(i + 1) % poly0.length];
    const fp = f(P), fq = f(Qp);
    if (fp >= 0) out.push(P);
    if ((fp >= 0) !== (fq >= 0)) {
      const t = fp / (fp - fq);
      out.push([P[0] + t * (Qp[0] - P[0]), P[1] + t * (Qp[1] - P[1])]);
    }
  }
  return out;
}
/** Segment of the line A x + B y = C inside [-R, R]². */
function lineSeg(h: Half, R: number): [Pt, Pt] | null {
  const pts: Pt[] = [];
  if (h.B !== 0) {
    for (const x of [-R, R]) {
      const y = (h.C - h.A * x) / h.B;
      if (y >= -R - 1e-9 && y <= R + 1e-9) pts.push([x, y]);
    }
  }
  if (h.A !== 0) {
    for (const y of [-R, R]) {
      const x = (h.C - h.B * y) / h.A;
      if (x >= -R - 1e-9 && x <= R + 1e-9) pts.push([x, y]);
    }
  }
  if (pts.length < 2) return null;
  pts.sort((p, r) => p[0] - r[0] || p[1] - r[1]);
  return [pts[0], pts[pts.length - 1]];
}

function regionSvg(hs: Half[], labels: string[], R = 5): string {
  const S = 26, O = 150;
  const X = (x: number) => +(O + x * S).toFixed(1);
  const Y = (y: number) => +(O - y * S).toFixed(1);
  let g = `<rect x="0" y="0" width="300" height="300" fill="#ffffff"/>`;
  for (let i = -R; i <= R; i++) {
    g += `<line x1="${X(i)}" y1="${Y(-R)}" x2="${X(i)}" y2="${Y(R)}" stroke="#e2e8f0" stroke-width="1"/>`;
    g += `<line x1="${X(-R)}" y1="${Y(i)}" x2="${X(R)}" y2="${Y(i)}" stroke="#e2e8f0" stroke-width="1"/>`;
  }
  let region: Pt[] = [[-R, -R], [R, -R], [R, R], [-R, R]];
  for (const h of hs) region = clip(region, h);
  if (region.length >= 3) g += `<polygon points="${region.map((p) => `${X(p[0])},${Y(p[1])}`).join(" ")}" fill="#c7d2fe" fill-opacity="0.85"/>`;
  g += `<line x1="${X(-R)}" y1="${Y(0)}" x2="${X(R)}" y2="${Y(0)}" stroke="#334155" stroke-width="1.5"/>`;
  g += `<line x1="${X(0)}" y1="${Y(-R)}" x2="${X(0)}" y2="${Y(R)}" stroke="#334155" stroke-width="1.5"/>`;
  for (let i = -R; i <= R; i++) {
    if (i === 0) continue;
    const t = i < 0 ? "−" + -i : String(i);
    g += `<text x="${X(i)}" y="${Y(0) + 13}" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">${t}</text>`;
    g += `<text x="${X(0) - 5}" y="${Y(i) + 4}" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">${t}</text>`;
  }
  g += `<text x="${X(R) - 2}" y="${Y(0) - 6}" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">x</text>`;
  g += `<text x="${X(0) + 6}" y="${Y(R) + 12}" font-size="12" font-family="sans-serif" fill="#1f2937">y</text>`;
  hs.forEach((h, i) => {
    const seg = lineSeg(h, R);
    if (!seg) return;
    const [P, Qp] = seg;
    g += `<line x1="${X(P[0])}" y1="${Y(P[1])}" x2="${X(Qp[0])}" y2="${Y(Qp[1])}" stroke="#1f2937" stroke-width="2.5"${isIncl(h.op) ? "" : ' stroke-dasharray="7 5"'}/>`;
    if (labels[i]) {
      const t = 0.82;
      const lx = Math.min(Math.max(P[0] + t * (Qp[0] - P[0]), -R + 0.3), R - 3.4);
      const ly = Math.min(Math.max(P[1] + t * (Qp[1] - P[1]), -R + 0.6), R - 0.4);
      g += `<rect x="${X(lx) + 3}" y="${Y(ly) - 15}" width="${labels[i].length * 7 + 6}" height="18" rx="3" fill="#ffffff" fill-opacity="0.9"/>`;
      g += `<text x="${X(lx) + 6}" y="${Y(ly) - 2}" font-size="13" font-family="sans-serif" fill="#1f2937">${labels[i]}</text>`;
    }
  });
  return `<svg viewBox="0 0 300 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid from −${R} to ${R} with a shaded region bounded by ${labels.filter(Boolean).join(" and ")}; a solid line is included in the region, a dashed line is not">${g}</svg>`;
}

// ===========================================================================
// Shared generators
// ===========================================================================

/** Integer points (x, y) in [-15, 15]² satisfying every half-plane; null if unbounded. */
function latticePoints(hs: Half[]): Pt[] | null {
  const out: Pt[] = [];
  for (let x = -15; x <= 15; x++)
    for (let y = -15; y <= 15; y++)
      if (hs.every((h) => sat(h, x, y))) {
        if (Math.abs(x) >= 14 || Math.abs(y) >= 14) return null;
        out.push([x, y]);
      }
  return out;
}

/** Describe the half-plane as markup, in the natural exam form. */
interface Constraint {
  h: Half;
  mk: string; // inside {{ }}
}
function vert(a: number, op: Op): Constraint {
  return { h: { A: 1, B: 0, C: a, op }, mk: `x ${op} ${a}` };
}
function horiz(b: number, op: Op): Constraint {
  return { h: { A: 0, B: 1, C: b, op }, mk: `y ${op} ${b}` };
}
/** y op m x + c  ⇔  −m x + y op c */
function slope(m: number, c: number, op: Op): Constraint {
  return { h: { A: -m, B: 1, C: c, op }, mk: `y ${op} ${lin(m, c)}` };
}
/** p x + r y op k */
function sum(p: number, r: number, k: number, op: Op): Constraint {
  return { h: { A: p, B: r, C: k, op }, mk: `${poly([[p, "x"], [r, "y"]])} ${op} ${k}` };
}

/** Points grouped by x for a worked solution line. */
function groupByX(pts: Pt[]): string[] {
  const xs = [...new Set(pts.map((p) => p[0]))].sort((a, b) => a - b);
  return xs.map((x) => {
    const ys = pts.filter((p) => p[0] === x).map((p) => p[1]).sort((a, b) => a - b);
    return `x = ${num(x)}: y = ${ys.map(num).join(", ")} (${ys.length} point${ys.length > 1 ? "s" : ""})`;
  });
}

// ===========================================================================
// Drills
// ===========================================================================

export const drills: Drill[] = [
  // -------------------------------------------------------------------------
  // 1. Solve a linear inequality (positive coefficient)
  // -------------------------------------------------------------------------
  {
    id: "inequalities.solve-linear",
    topicId: TOPIC,
    title: "Solve a linear inequality",
    level: 1,
    guideRef: "linear-inequalities",
    generate(rng, tier) {
      const op = pickOp(rng);
      const fracNote = tier === 1 ? "" : " If the boundary value is not a whole number, give it as a fraction in its simplest form.";
      if (tier === 1) {
        const a = rng.int(2, 9), k = rng.int(-6, 10), b = rng.nonZero(-12, 12);
        const c = a * k + b;
        const s: Sol = { kind: "single", op, k: q(k) };
        const traps: Trap[] = [];
        const wrong = q(c + b, a);
        if (qv(wrong) !== k) traps.push(solTrap({ kind: "single", op, k: wrong }, `Check the first step: to undo ${b > 0 ? `+ ${b}` : `− ${-b}`} you must ${b > 0 ? "subtract" : "add"} ${Math.abs(b)} on both sides.`));
        return {
          prompt: `Solve {{${lin(a, b)} ${op} ${c}}}.`,
          answer: solSpec(s),
          solution: [
            `${b > 0 ? "Subtract" : "Add"} ${Math.abs(b)} ${b > 0 ? "from" : "to"} both sides: {{${a}x ${op} ${a * k}}}.`,
            `Divide both sides by ${a} (a positive number, so the sign stays the same): ${solMk(s)}.`,
          ],
          hint: "Treat it like an equation: undo the + or − first, then divide. Dividing by a positive number never changes the sign.",
          traps,
        };
      }
      if (tier === 2 || rng.bool(0.4)) {
        // a x + b op c x + d with a > c
        for (let i = 0; i < 100; i++) {
          const a = rng.int(3, 9), c = rng.nonZero(-4, a - 1);
          if (c === a) continue;
          const diff = a - c;
          const b = rng.nonZero(-15, 15), d = rng.nonZero(-15, 15);
          if (b === d) continue;
          const k = q(d - b, diff);
          if (!isInt(k) && rng.bool(0.5)) continue; // keep most answers whole
          const s: Sol = { kind: "single", op, k };
          return {
            prompt: `Solve {{${lin(a, b)} ${op} ${lin(c, d)}}}.${fracNote}`,
            answer: solSpec(s),
            solution: [
              `${c > 0 ? `Subtract ${c === 1 ? "x" : `${c}x`} from` : `Add ${c === -1 ? "x" : `${-c}x`} to`} both sides: {{${lin(diff, b)} ${op} ${d}}}.`,
              `${b > 0 ? "Subtract" : "Add"} ${Math.abs(b)}: {{${diff === 1 ? "" : diff}x ${op} ${d - b}}}.`,
              ...(diff === 1 ? [] : [`Divide by ${diff} (positive, so the sign stays): ${solMk(s)}.`]),
            ],
            hint: "Collect the x terms on the side with MORE x's — then the coefficient stays positive and the sign never flips.",
          };
        }
      }
      // tier 3: brackets or a fraction
      if (rng.bool()) {
        for (let i = 0; i < 100; i++) {
          const p = rng.int(2, 6), r = rng.int(1, p - 1), qq = rng.nonZero(-7, 7), sv = rng.nonZero(-7, 7);
          const diff = p - r, rhs = r * sv - p * qq;
          if (rhs === 0) continue;
          const k = q(rhs, diff);
          const s: Sol = { kind: "single", op, k };
          const left = `${p}(${lin(1, qq)})`, right = r === 1 ? `x ${sv < 0 ? "-" : "+"} ${Math.abs(sv)}` : `${r}(${lin(1, sv)})`;
          return {
            prompt: `Solve {{${left} ${op} ${right}}}.${fracNote}`,
            answer: solSpec(s),
            solution: [
              `Expand: {{${lin(p, p * qq)} ${op} ${lin(r, r * sv)}}}.`,
              `Collect x terms on the left and numbers on the right: {{${diff === 1 ? "" : diff}x ${op} ${rhs}}}.`,
              ...(diff === 1 ? [] : [`Divide by ${diff} (positive, so the sign stays): ${solMk(s)}.`]),
            ],
            hint: "Expand both brackets first, then collect x terms on the side with more x's.",
          };
        }
      }
      for (let i = 0; i < 100; i++) {
        const a = rng.int(2, 7), b = rng.nonZero(-9, 9), p = rng.int(2, 5), c = rng.nonZero(-6, 6);
        if (a % p === 0 && b % p === 0) continue;
        const k = q(p * c - b, a);
        if (qv(k) === 0) continue;
        const s: Sol = { kind: "single", op, k };
        const traps: Trap[] = [];
        const wrong = q(c - b, a);
        if (qv(wrong) !== qv(k)) traps.push(solTrap({ kind: "single", op, k: wrong }, `Multiply BOTH sides by ${p} first — the ${num(c)} on the right becomes ${num(p * c)}.`));
        return {
          prompt: `Solve {{(${lin(a, b)})/${p} ${op} ${c}}}.${fracNote}`,
          answer: solSpec(s),
          solution: [
            `Multiply both sides by ${p}: {{${lin(a, b)} ${op} ${p * c}}}.`,
            `${b > 0 ? "Subtract" : "Add"} ${Math.abs(b)}: {{${a}x ${op} ${p * c - b}}}.`,
            `Divide by ${a}: ${solMk(s)}.`,
          ],
          hint: "Clear the fraction first by multiplying both sides by the denominator.",
          traps,
        };
      }
      return { prompt: "Solve {{3x + 1 < 13}}.", answer: solSpec({ kind: "single", op: "<", k: q(4) }), solution: ["{{3x < 12}}", "{{x < 4}}"] };
    },
  },

  // -------------------------------------------------------------------------
  // 2. Read an inequality from a number line
  // -------------------------------------------------------------------------
  {
    id: "inequalities.number-line",
    topicId: TOPIC,
    title: "Write the inequality shown on a number line",
    level: 1,
    guideRef: "linear-inequalities",
    generate(rng, tier) {
      let s: Sol;
      const form = tier === 1 ? "single" : tier === 2 ? (rng.bool(0.7) ? "between" : "single") : rng.bool(0.5) ? "outside" : "between";
      if (form === "single") {
        s = { kind: "single", op: pickOp(rng), k: q(rng.int(-6, 6)) };
      } else {
        const lo = rng.int(-6, 3), hi = lo + rng.int(2, 6);
        s = { kind: form, lo: q(lo), hi: q(hi), loIncl: rng.bool(), hiIncl: rng.bool() };
      }
      const traps: Trap[] = [];
      if (s.kind === "single") {
        traps.push(solTrap({ kind: "single", op: toggleIncl(s.op), k: s.k }, s.op.length === 2 ? "The circle is filled in, so the end value IS included — use ≤ or ≥." : "The circle is open (empty), so the end value is NOT included — use < or >."));
        traps.push(solTrap({ kind: "single", op: flip(s.op), k: s.k }, "Check which way the arrow points: arrows to the left mean smaller values (x is less than …)."));
      } else {
        traps.push(solTrap({ ...s, loIncl: !s.loIncl, hiIncl: !s.hiIncl }, "Filled circle = included (≤ or ≥); open circle = not included (< or >). Check each end separately."));
      }
      const what = s.kind === "outside" ? "The number line shows two separate parts. Write down the inequality it represents." : "Write down the inequality shown on the number line, using x.";
      const prompt = `${rng.pick(["", "Look at the number line. ", "Here is a number line. "])}${what} (The number line runs from ${num(Math.round((Math.min(...(s.kind === "single" ? [qv(s.k)] : [qv(s.lo), qv(s.hi)])) + Math.max(...(s.kind === "single" ? [qv(s.k)] : [qv(s.lo), qv(s.hi)]))) / 2) - 5)} to ${num(Math.round((Math.min(...(s.kind === "single" ? [qv(s.k)] : [qv(s.lo), qv(s.hi)])) + Math.max(...(s.kind === "single" ? [qv(s.k)] : [qv(s.lo), qv(s.hi)]))) / 2) + 5)}.)`;
      const sol: string[] = [];
      if (s.kind === "single") {
        sol.push(`The circle at ${qTx(s.k)} is ${isIncl(s.op) ? "filled, so " + qTx(s.k) + " is included" : "open, so " + qTx(s.k) + " is not included"}.`);
        sol.push(`The line goes to the ${isLess(s.op) ? "left (smaller values)" : "right (bigger values)"}, so the answer is ${solMk(s)}.`);
      } else {
        sol.push(`Left end ${qTx(s.lo)}: ${s.loIncl ? "filled circle → included" : "open circle → not included"}. Right end ${qTx(s.hi)}: ${s.hiIncl ? "filled circle → included" : "open circle → not included"}.`);
        sol.push(s.kind === "between" ? `x lies between them: ${solMk(s)}.` : `The arrows point away from each other, so x is in one part OR the other: ${solMk(s)}.`);
      }
      return {
        prompt,
        diagram: numberLineSvg(s),
        answer: solSpec(s),
        solution: sol,
        hint: "Open circle → < or >. Filled circle → ≤ or ≥. Then follow the line to see whether x is bigger or smaller.",
        traps,
      };
    },
  },

  // -------------------------------------------------------------------------
  // 3. Write the inequality for a shaded region on a grid
  // -------------------------------------------------------------------------
  {
    id: "inequalities.region-inequality",
    topicId: TOPIC,
    title: "Write the inequality for a shaded region",
    level: 1,
    guideRef: "graphical-regions",
    generate(rng, tier) {
      const op = pickOp(rng);
      let h: Half, label: string, lhs: string[], rhs: string[], extra: Array<[string[], string[]]> = [];
      const kind = tier === 1 ? rng.pick(["vert", "horiz", "slope"] as const) : tier === 2 ? rng.pick(["slope", "slope", "vert", "horiz"] as const) : rng.pick(["slope", "sum", "sum"] as const);
      if (kind === "vert" || kind === "horiz") {
        const k = rng.nonZero(-4, 4);
        const v = kind === "vert" ? "x" : "y";
        h = kind === "vert" ? { A: 1, B: 0, C: k, op } : { A: 0, B: 1, C: k, op };
        label = `${v} = ${num(k)}`;
        lhs = [v];
        rhs = [String(k)];
      } else if (kind === "slope") {
        let m = 1, c = 0;
        for (let i = 0; i < 50; i++) {
          m = rng.pick(tier === 1 ? [1, 2, -1, -2] : [1, 2, 3, -1, -2, -3]);
          c = rng.int(-3, 3);
          if (!(tier === 1 && c === 0)) break;
        }
        h = { A: -m, B: 1, C: c, op };
        label = `y = ${plain(lin(m, c))}`;
        lhs = ["y"];
        rhs = [tight(lin(m, c)), tight(poly([[c, ""], [m, "x"]]))];
      } else {
        const p = rng.pick([1, 1, 2]), r = p === 2 ? 1 : rng.pick([1, 2]);
        const k = rng.int(2, 6) * (rng.bool(0.8) ? 1 : -1);
        h = { A: p, B: r, C: k, op };
        const L = poly([[p, "x"], [r, "y"]]);
        label = `${L} = ${num(k)}`;
        lhs = [tight(L), tight(poly([[r, "y"], [p, "x"]]))];
        rhs = [String(k)];
        if (r === 1) extra = [[["y"], [tight(poly([[k, ""], [-p, "x"]])), tight(poly([[-p, "x"], [k, ""]]))]]];
      }
      const variants = (o: Op): string[] => {
        const acc: string[] = [];
        for (const [Ls, Rs] of [[lhs, rhs] as [string[], string[]], ...extra])
          for (const L of Ls) for (const R of Rs) acc.push(`${L}${o}${R}`, `${R}${flip(o)}${L}`);
        return acc;
      };
      const ascii = `${lhs[0]} ${op} ${rhs[0].replace(/([+-])/g, " $1 ").replace(/^ - /, "-").trim()}`;
      const display = `{{${ascii}}}`;
      const answer: AnswerSpec = { type: "text", accept: variants(op), display };
      const traps: Trap[] = [
        { spec: { type: "text", accept: variants(flip(op)) }, feedback: "That describes the UNshaded side. Test a point in the shaded region, e.g. one far from the line." },
        { spec: { type: "text", accept: variants(toggleIncl(op)) }, feedback: `Right side — but look at the line: ${isIncl(op) ? "it is solid, so points on it are included (≤ or ≥)" : "it is dashed, so points on it are NOT included (< or >)"}.` },
      ];
      // a test point well inside the region (not on the line)
      let test: Pt = [0, 0];
      for (const P of [[0, 0], [1, 0], [0, 1], [-1, 0], [0, -1], [2, 2], [-2, -2], [3, -3], [-3, 3], [4, 0], [-4, 0], [0, 4], [0, -4]] as Pt[]) {
        if (h.A * P[0] + h.B * P[1] !== h.C) {
          test = P;
          break;
        }
      }
      const inside = sat(h, test[0], test[1]);
      const val = h.A * test[0] + h.B * test[1];
      const rel = (u: number, w: number) => (u < w ? "<" : ">");
      const lhsVal =
        kind === "slope"
          ? `y = ${num(test[1])} and ${plain(rhs[0].replace(/([+-])/g, " $1 ").replace(/^ - /, "-").trim())} = ${num(-h.A * test[0] + h.C)}, so here {{y ${rel(test[1], -h.A * test[0] + h.C)} ${lin(-h.A, h.C)}}}`
          : `${lhs[0]} = ${num(val)}, so here {{${lhs[0]} ${rel(val, h.C)} ${h.C}}}`;
      return {
        prompt: rng.pick([
          `The shaded region is bounded by the line {{${display.slice(2, -2).replace(op, "=")}}}. Write down the inequality satisfied by every point in the shaded region.`,
          `The diagram shows the line {{${display.slice(2, -2).replace(op, "=")}}} with one side shaded. Write down the inequality that describes the shaded region.`,
          `Find the inequality that defines the shaded region, which is bounded by {{${display.slice(2, -2).replace(op, "=")}}}.`,
        ]),
        diagram: regionSvg([h], [label]),
        answer,
        solution: [
          `The boundary is ${display.replace(op, "=")} and it is ${isIncl(op) ? "solid, so use ≤ or ≥" : "dashed, so use < or >"}.`,
          `Test (${num(test[0])}, ${num(test[1])}): ${lhsVal}. This point is ${inside ? "in" : "not in"} the shaded region.`,
          `So the shaded side is ${display}.`,
        ],
        hint: "Solid or dashed tells you ≤/≥ or </>. Then test a point such as (0, 0) to decide which side is shaded.",
        traps,
      };
    },
  },

  // -------------------------------------------------------------------------
  // 4. Solve when you divide/multiply by a negative (sign flips)
  // -------------------------------------------------------------------------
  {
    id: "inequalities.divide-negative",
    topicId: TOPIC,
    title: "Solve an inequality where the sign flips",
    level: 2,
    guideRef: "linear-inequalities",
    generate(rng, tier) {
      const op = pickOp(rng);
      const fracNote = tier === 1 ? "" : " If the boundary value is not a whole number, give it as a fraction in its simplest form.";
      const make = (prompt: string, steps: string[], s: Sol, hint: string) => {
        const traps: Trap[] = s.kind === "single" ? [solTrap({ kind: "single", op: flip(s.op), k: s.k }, "Right number, wrong direction: you divided by a negative, so the inequality sign must flip.")] : [];
        return { prompt, answer: solSpec(s), solution: steps, hint, traps };
      };
      if (tier === 1) {
        const a = rng.int(2, 9), k = rng.int(-6, 8), c = rng.int(1, 20);
        const d = c - a * k;
        const s: Sol = { kind: "single", op: flip(op), k: q(k) };
        return make(
          `Solve {{${c} - ${a}x ${op} ${d}}}.`,
          [`Subtract ${c} from both sides: {{-${a}x ${op} ${d - c}}}.`, `Divide by −${a}. Dividing by a negative flips the sign: ${solMk(s)}.`],
          s,
          "You will end up dividing by a negative number. What must happen to the inequality sign?",
        );
      }
      if (tier === 2 || rng.bool(0.4)) {
        for (let i = 0; i < 100; i++) {
          const a = rng.int(1, 6), c = rng.int(a + 1, 10), b = rng.nonZero(-15, 15), d = rng.nonZero(-15, 15);
          if (b === d) continue;
          const diff = a - c; // negative
          const k = q(d - b, diff);
          if (!isInt(k) && rng.bool(0.5)) continue;
          const s: Sol = { kind: "single", op: flip(op), k };
          return make(
            `Solve {{${lin(a, b)} ${op} ${lin(c, d)}}}.${fracNote}`,
            [
              `Subtract ${c}x from both sides: {{${lin(diff, b)} ${op} ${d}}}.`,
              `${b > 0 ? "Subtract" : "Add"} ${Math.abs(b)}: {{${diff === -1 ? "-" : diff}x ${op} ${d - b}}}.`,
              `Divide by ${num(diff)} and flip the sign: ${solMk(s)}.`,
              `Check: collecting x on the right instead gives {{${b - d} ${op} ${-diff === 1 ? "" : -diff}x}} — the same answer with no flip needed.`,
            ],
            s,
            "Either flip the sign when you divide by a negative, or collect the x terms on the side with more x's.",
          );
        }
      }
      if (rng.bool()) {
        // (p − q x)/r op s
        for (let i = 0; i < 100; i++) {
          const p = rng.int(1, 15), qq = rng.int(2, 6), r = rng.int(2, 5), sv = rng.nonZero(-5, 5);
          if (p % r === 0 && qq % r === 0) continue;
          const k = q(p - r * sv, qq);
          if (qv(k) === 0) continue;
          const s: Sol = { kind: "single", op: flip(op), k };
          return make(
            `Solve {{(${p} - ${qq}x)/${r} ${op} ${sv}}}.${fracNote}`,
            [`Multiply both sides by ${r}: {{${p} - ${qq}x ${op} ${r * sv}}}.`, `Subtract ${p}: {{-${qq}x ${op} ${r * sv - p}}}.`, `Divide by −${qq} and flip the sign: ${solMk(s)}.`],
            s,
            "Clear the fraction first (multiplying by a positive is safe). The flip comes when you divide by the negative x-coefficient.",
          );
        }
      }
      // p(m − x) op n x + t
      for (let i = 0; i < 100; i++) {
        const p = rng.int(2, 5), m = rng.nonZero(-6, 6), n = rng.int(1, 3), t = rng.nonZero(-12, 12);
        const coeff = -(p + n), rhs = t - p * m;
        if (rhs === 0) continue;
        const k = q(rhs, coeff);
        const s: Sol = { kind: "single", op: flip(op), k };
        return make(
          `Solve {{${p}(${m} - x) ${op} ${lin(n, t)}}}.${fracNote}`,
          [`Expand: {{${lin(-p, p * m)} ${op} ${lin(n, t)}}}.`, `Subtract ${n === 1 ? "x" : `${n}x`} and ${p * m < 0 ? "add" : "subtract"} ${Math.abs(p * m)}: {{${coeff}x ${op} ${rhs}}}.`, `Divide by ${num(coeff)} and flip the sign: ${solMk(s)}.`],
          s,
          "Expand carefully: the bracket gives a NEGATIVE x term.",
        );
      }
      const s: Sol = { kind: "single", op: ">", k: q(-2) };
      return make("Solve {{4 - 3x < 10}}.", ["{{-3x < 6}}", "{{x > -2}}"], s, "Flip when dividing by a negative.");
    },
  },

  // -------------------------------------------------------------------------
  // 5. Double inequalities
  // -------------------------------------------------------------------------
  {
    id: "inequalities.double",
    topicId: TOPIC,
    title: "Solve a double inequality",
    level: 2,
    guideRef: "linear-inequalities",
    generate(rng, tier) {
      const lo = rng.int(-6, 4), hi = lo + rng.int(tier === 1 ? 2 : 1, 7);
      const i1 = rng.bool(), i2 = rng.bool();
      const o1 = mkOp(true, i1), o2 = mkOp(true, i2);
      const negative = tier === 3 && rng.bool(0.6);
      if (!negative) {
        const a = rng.int(2, tier === 1 ? 5 : 9), b = rng.nonZero(-12, 12);
        const useFrac = tier === 3;
        const p = useFrac ? rng.int(2, 4) : 1;
        // middle = (a x + b)/p : bounds must be integers → choose L, U as multiples
        const L = (a * lo + b) / p, U = (a * hi + b) / p;
        if (useFrac && (!Number.isInteger(L) || !Number.isInteger(U))) {
          // fall back to whole-number middle
          const s: Sol = { kind: "between", lo: q(lo), loIncl: i1, hi: q(hi), hiIncl: i2 };
          return {
            prompt: `Solve {{${a * lo + b} ${o1} ${lin(a, b)} ${o2} ${a * hi + b}}}.`,
            answer: solSpec(s),
            solution: [`Do the same to all three parts. ${b > 0 ? "Subtract" : "Add"} ${Math.abs(b)}: {{${a * lo} ${o1} ${a}x ${o2} ${a * hi}}}.`, `Divide all three parts by ${a}: ${solMk(s)}.`],
            hint: "Whatever you do to the middle, do to BOTH ends.",
          };
        }
        const s: Sol = { kind: "between", lo: q(lo), loIncl: i1, hi: q(hi), hiIncl: i2 };
        const mid = p === 1 ? lin(a, b) : `(${lin(a, b)})/${p}`;
        const steps = p === 1 ? [] : [`Multiply all three parts by ${p}: {{${a * lo + b} ${o1} ${lin(a, b)} ${o2} ${a * hi + b}}}.`];
        return {
          prompt: `Solve {{${L} ${o1} ${mid} ${o2} ${U}}}.`,
          answer: solSpec(s),
          solution: [...steps, `${b > 0 ? "Subtract" : "Add"} ${Math.abs(b)} in all three parts: {{${a * lo} ${o1} ${a}x ${o2} ${a * hi}}}.`, `Divide all three parts by ${a}: ${solMk(s)}.`],
          hint: "Whatever you do to the middle, do to BOTH ends.",
        };
      }
      // b − a x in the middle: dividing by −a reverses the whole chain
      const a = rng.int(2, 6), b = rng.nonZero(-10, 12);
      const top = b - a * lo, bottom = b - a * hi; // top > bottom
      const s: Sol = { kind: "between", lo: q(lo), loIncl: i2, hi: q(hi), hiIncl: i1 };
      const traps: Trap[] = [];
      if (i1 !== i2) traps.push(solTrap({ kind: "between", lo: q(lo), loIncl: i1, hi: q(hi), hiIncl: i2 }, "When the chain reverses, each ≤ / < travels with its end value. Check which end is included."));
      return {
        prompt: `Solve {{${bottom} ${o1} ${b} - ${a}x ${o2} ${top}}}.`,
        answer: solSpec(s),
        solution: [
          `Subtract ${br(b)} from all three parts: {{${bottom - b} ${o1} -${a}x ${o2} ${top - b}}}.`,
          `Divide all three parts by −${a} and flip both signs: {{${hi} ${flip(o1)} x ${flip(o2)} ${lo}}}.`,
          `Write it the usual way round (smallest first): ${solMk(s)}.`,
        ],
        hint: "Dividing by a negative reverses BOTH signs — then rewrite with the smaller number on the left.",
        traps,
      };
    },
  },

  // -------------------------------------------------------------------------
  // 6. Integer solutions of an inequality
  // -------------------------------------------------------------------------
  {
    id: "inequalities.integer-solutions",
    topicId: TOPIC,
    title: "List the integers that satisfy an inequality",
    level: 2,
    guideRef: "linear-inequalities",
    generate(rng, tier) {
      for (let attempt = 0; attempt < 200; attempt++) {
        const i1 = tier === 1 ? rng.bool(0.5) : rng.bool(), i2 = rng.bool();
        const o1 = mkOp(true, i1), o2 = mkOp(true, i2);
        const style = tier === 3 ? rng.pick(["neg", "frac"] as const) : "plain";
        const a = rng.int(2, tier === 1 ? 4 : 6), b = rng.nonZero(-9, 9);
        const L = rng.int(-15, 10), U = L + rng.int(4, 18);
        const p = style === "frac" ? rng.int(2, 3) : 1;
        // middle expression value at integer n
        const midVal = (n: number): number => (style === "neg" ? b - a * n : (a * n + b) / p);
        const ok = (n: number, inc1: boolean, inc2: boolean) => {
          const m = midVal(n);
          return (inc1 ? L <= m : L < m) && (inc2 ? m <= U : m < U);
        };
        const ns: number[] = [], alt: number[] = [];
        for (let n = -40; n <= 40; n++) {
          if (ok(n, i1, i2)) ns.push(n);
          if (ok(n, !i1, !i2)) alt.push(n);
        }
        if (ns.length < 2 || ns.length > 7) continue;
        const midMk = style === "neg" ? `${b} - ${a}n` : style === "frac" ? `(${lin(a, b, "n")})/${p}` : lin(a, b, "n");
        // bounds on n
        let lo: Q, hi: Q, loIn: boolean, hiIn: boolean;
        if (style === "neg") {
          lo = q(b - U, a); hi = q(b - L, a); loIn = i2; hiIn = i1;
        } else {
          lo = q(p * L - b, a); hi = q(p * U - b, a); loIn = i1; hiIn = i2;
        }
        const s: Sol = { kind: "between", lo, loIncl: loIn, hi, hiIncl: hiIn };
        const traps: Trap[] = [];
        if (alt.join() !== ns.join() && alt.length > 0) traps.push({ spec: { type: "list", values: alt }, feedback: "Check the ends: < means the boundary value is NOT allowed, ≤ means it is." });
        const steps: string[] = [];
        if (style === "frac") steps.push(`Multiply all three parts by ${p}: {{${p * L} ${o1} ${lin(a, b, "n")} ${o2} ${p * U}}}.`);
        if (style === "neg") steps.push(`Subtract ${br(b)}, then divide by −${a} (flip both signs) and write it smallest first: ${solMk(s, "n")}.`);
        else steps.push(`${b > 0 ? "Subtract" : "Add"} ${Math.abs(b)} and divide by ${a}: ${solMk(s, "n")}.`);
        steps.push(`The integers in this range are ${ns.map(num).join(", ")}.`);
        return {
          prompt: rng.pick([
            `n is an integer. Write down all the values of n that satisfy {{${L} ${o1} ${midMk} ${o2} ${U}}}.`,
            `Find all the integers n such that {{${L} ${o1} ${midMk} ${o2} ${U}}}.`,
            `List the integer values of n for which {{${L} ${o1} ${midMk} ${o2} ${U}}}.`,
          ]),
          answer: { type: "list", values: ns, display: ns.map(num).join(", ") },
          solution: steps,
          hint: "Solve the double inequality for n first, then look carefully at whether each end is included.",
          traps,
        };
      }
      return { prompt: "Find all the integers n such that {{-3 < 2n + 1 <= 7}}.", answer: { type: "list", values: [-1, 0, 1, 2, 3] }, solution: ["{{-2 < n <= 3}}", "n = −1, 0, 1, 2, 3"] };
    },
  },

  // -------------------------------------------------------------------------
  // 7. Integer points in a region (count / greatest value)
  // -------------------------------------------------------------------------
  {
    id: "inequalities.region-integer-points",
    topicId: TOPIC,
    title: "Integer points in a region",
    level: 2,
    guideRef: "graphical-regions",
    generate(rng, tier) {
      const op = (less: boolean): Op => mkOp(less, tier === 1 ? true : rng.bool(0.6));
      for (let attempt = 0; attempt < 300; attempt++) {
        let cs: Constraint[];
        const t = rng.int(1, tier === 1 ? 2 : 3);
        if (t === 1) {
          // x ≥ a, y ≥ b, x + y ≤ k
          const a = rng.int(-2, 2), b = rng.int(-2, 2), k = a + b + rng.int(2, 4);
          cs = [vert(a, op(false)), horiz(b, op(false)), tier >= 2 && rng.bool(0.4) ? sum(2, 1, k + a, op(true)) : sum(1, 1, k, op(true))];
        } else if (t === 2) {
          // y ≥ b, y ≤ m x + c (m > 0), x ≤ a
          const m = rng.pick([1, 2]), b = rng.int(-3, 1), a = rng.int(1, 4), c = rng.int(-3, 3);
          cs = [horiz(b, op(false)), slope(m, c, op(true)), vert(a, op(true))];
        } else {
          // y ≥ b, y ≤ m1 x + c1 (m1 > 0), y ≤ m2 x + c2 (m2 < 0)
          const b = rng.int(-3, 0), c1 = rng.int(0, 4), c2 = rng.int(1, 5);
          cs = [horiz(b, op(false)), slope(rng.pick([1, 2]), c1, op(true)), slope(rng.pick([-1, -2]), c2, op(true))];
        }
        const hs = cs.map((c) => c.h);
        const pts = latticePoints(hs);
        if (!pts || pts.length < 3 || pts.length > (tier === 1 ? 10 : 15)) continue;
        const list = cs.map((c) => `{{${c.mk}}}`).join(", ");
        const nonStrict = latticePoints(hs.map((h) => ({ ...h, op: mkOp(isLess(h.op), true) })));
        const askMax = tier >= 2 && rng.bool(0.5);
        if (!askMax) {
          const traps: Trap[] = [];
          if (nonStrict && nonStrict.length !== pts.length) traps.push({ spec: { type: "number", value: nonStrict.length }, feedback: "You have counted points ON a strict (< or >) boundary — dashed lines are not included." });
          return {
            prompt: rng.pick([
              `How many points with integer coordinates satisfy all three inequalities ${list}?`,
              `The region R is defined by ${list}. How many points with integer coordinates lie in R?`,
              `Count the points (x, y), where x and y are both integers, that satisfy ${list}.`,
            ]),
            answer: { type: "number", value: pts.length },
            solution: [
              `Sketch the three boundary lines (solid for ≤ / ≥, dashed for < / >) and shade the region that satisfies all three.`,
              ...groupByX(pts),
              `Total: ${pts.length} points.`,
            ],
            hint: "Go column by column: for each whole-number x, list the whole-number y values that fit every inequality.",
            traps,
          };
        }
        const P = rng.int(1, 4), Rr = rng.nonZero(tier === 3 ? -3 : 1, 4);
        const wantMax = rng.bool(0.7);
        const f = (p: Pt) => P * p[0] + Rr * p[1];
        const best = pts.reduce((acc, p) => (wantMax ? (f(p) > f(acc) ? p : acc) : f(p) < f(acc) ? p : acc), pts[0]);
        const val = f(best);
        const traps: Trap[] = [];
        if (nonStrict) {
          const alt = nonStrict.reduce((m, p) => (wantMax ? Math.max(m, f(p)) : Math.min(m, f(p))), wantMax ? -Infinity : Infinity);
          if (alt !== val) traps.push({ spec: { type: "number", value: alt }, feedback: "That point lies on a strict (dashed) boundary, so it is not in the region." });
        }
        const expr = poly([[P, "x"], [Rr, "y"]]);
        return {
          prompt: `x and y are integers that satisfy ${list}. Find the ${wantMax ? "greatest" : "least"} possible value of {{${expr}}}.`,
          answer: { type: "number", value: val },
          solution: [
            "List the integer points in the region (column by column):",
            ...groupByX(pts),
            `The ${wantMax ? "greatest" : "least"} value of {{${expr}}} is at (${num(best[0])}, ${num(best[1])}): ${P === 1 ? "" : P + " × "}${br(best[0])} ${Rr < 0 ? "−" : "+"} ${Math.abs(Rr) === 1 ? "" : Math.abs(Rr) + " × "}${br(best[1])} = ${num(val)}.`,
          ],
          hint: "The best value is always at (or next to) a corner of the region. List the integer points near the corners and test them.",
          traps,
        };
      }
      return { prompt: "How many points with integer coordinates satisfy {{x >= 0}}, {{y >= 0}}, {{x + y <= 2}}?", answer: { type: "number", value: 6 }, solution: ["(0,0), (0,1), (0,2), (1,0), (1,1), (2,0)", "6 points"] };
    },
  },

  // -------------------------------------------------------------------------
  // 8. Quadratic inequalities with x² (monic)
  // -------------------------------------------------------------------------
  {
    id: "inequalities.quadratic-monic",
    topicId: TOPIC,
    title: "Solve a quadratic inequality",
    level: 2,
    guideRef: "quadratic-inequalities",
    generate(rng, tier) {
      let p = 0, r = 0;
      for (let i = 0; i < 100; i++) {
        p = rng.int(-8, 6);
        r = p + rng.int(1, 9);
        if (p * r !== 0 && p + r !== 0) break;
      }
      const op = pickOp(rng);
      const B = -(p + r), C = p * r;
      const inside = isLess(op), incl = isIncl(op);
      const s: Sol = inside ? { kind: "between", lo: q(p), loIncl: incl, hi: q(r), hiIncl: incl } : { kind: "outside", lo: q(p), loIncl: incl, hi: q(r), hiIncl: incl };
      const wrong: Sol = inside ? { kind: "outside", lo: q(p), loIncl: incl, hi: q(r), hiIncl: incl } : { kind: "between", lo: q(p), loIncl: incl, hi: q(r), hiIncl: incl };
      const fac = (root: number) => `(x ${root < 0 ? "+" : "-"} ${Math.abs(root)})`;
      const std = `${poly([[1, "x^2"], [B, "x"], [C, ""]])} ${op} 0`;
      let shown: string;
      const steps: string[] = [];
      if (tier === 1) shown = `${fac(p)}${fac(r)} ${op} 0`;
      else if (tier === 2) shown = std;
      else {
        shown = rng.bool() ? `x^2 ${op} ${lin(-B, -C)}` : `x(${lin(1, B)}) ${op} ${-C}`;
        steps.push(`Rearrange so one side is 0: {{${std}}}.`);
      }
      if (tier !== 1) steps.push(`Factorise: {{${fac(p)}${fac(r)} ${op} 0}}.`);
      steps.push(`Critical values: x = ${num(p)} and x = ${num(r)}.`);
      steps.push(
        `Sketch the U-shaped curve {{y = ${fac(p)}${fac(r)}}}: it is ${inside ? "below" : "above"} the x-axis ${inside ? "between" : "outside"} the critical values${incl ? " (and = 0 at them, so they are included)" : ""}.`,
      );
      steps.push(`So ${solMk(s)}.`);
      return {
        prompt: `Solve {{${shown}}}.${inside ? "" : " Give your answer as two inequalities joined by \"or\"."}`,
        answer: solSpec(s),
        solution: steps,
        hint: `Find where it equals 0, then sketch the parabola. "${inside ? "< 0" : "> 0"}" means the part of the graph ${inside ? "below" : "above"} the x-axis.`,
        traps: [solTrap(wrong, `Right critical values, wrong region. ${inside ? "Less than 0 means BELOW the x-axis — that is between the roots for a U-shaped graph." : "Greater than 0 means ABOVE the x-axis — the two outer arms of the U."}`)],
      };
    },
  },

  // -------------------------------------------------------------------------
  // 9. How many integers satisfy a quadratic inequality?
  // -------------------------------------------------------------------------
  {
    id: "inequalities.quadratic-integers",
    topicId: TOPIC,
    title: "Count integers satisfying a quadratic inequality",
    level: 2,
    guideRef: "quadratic-inequalities",
    generate(rng, tier) {
      const strictOp = rng.bool();
      const op: Op = strictOp ? "<" : "<=";
      const kind = tier === 1 ? rng.pick(["monic", "square"] as const) : tier === 2 ? rng.pick(["monic", "monic", "square"] as const) : rng.pick(["nonmonic", "nonmonic", "square"] as const);
      const count = (lo: number, hi: number, incl: boolean) => {
        let c = 0;
        for (let n = Math.ceil(lo) - 1; n <= Math.floor(hi) + 1; n++) if (incl ? n >= lo - 1e-9 && n <= hi + 1e-9 : n > lo + 1e-9 && n < hi - 1e-9) c++;
        return c;
      };
      const ask = rng.pick(["How many integers satisfy", "Find the number of integer values of x that satisfy", "How many whole-number solutions (integers, positive, negative or zero) does this inequality have:"]);
      if (kind === "square") {
        let k = 2;
        for (let i = 0; i < 50; i++) {
          k = rng.int(tier === 1 ? 5 : 10, tier === 1 ? 40 : 90);
          if (tier === 1 || !Number.isInteger(Math.sqrt(k)) || rng.bool(0.3)) break;
        }
        const rt = Math.sqrt(k);
        const exact = Number.isInteger(rt);
        const n = count(-rt, rt, !strictOp);
        const alt = count(-rt, rt, strictOp);
        const top = Math.floor(rt - (exact && strictOp ? 1 : 0));
        return {
          prompt: `${ask} {{x^2 ${op} ${k}}}?`,
          answer: { type: "number", value: n },
          solution: [
            `Critical values: {{x = +- sqrt(${k})}}${exact ? ` = ±${rt}` : ` ≈ ±${Math.round(rt * 100) / 100}`}.`,
            `{{x^2 ${op} ${k}}} means {{-sqrt(${k}) ${op} x ${op} sqrt(${k})}} — between the critical values (not just {{x ${op} sqrt(${k})}}).`,
            `The integers are −${top}, …, 0, …, ${top}: that is 2 × ${top} + 1 = ${n}.`,
          ],
          hint: "Square roots come in pairs: x can be negative too. Which integers lie between −√k and √k?",
          traps: [
            { spec: { type: "number", value: top }, feedback: `You only counted the positive side. Negative numbers squared are positive too, so −1, −2, … also work.` },
            ...(alt !== n ? [{ spec: { type: "number", value: alt }, feedback: "Check the end values: is the inequality strict (<) or not (≤)?" }] : []),
          ],
        };
      }
      if (kind === "monic") {
        let p = 0, r = 0;
        for (let i = 0; i < 100; i++) {
          p = rng.int(-7, 4);
          r = p + rng.int(2, 9);
          if (p * r !== 0 && p + r !== 0) break;
        }
        const n = count(p, r, !strictOp), alt = count(p, r, strictOp);
        const expr = poly([[1, "x^2"], [-(p + r), "x"], [p * r, ""]]);
        return {
          prompt: `${ask} {{${expr} ${op} 0}}?`,
          answer: { type: "number", value: n },
          solution: [
            `Factorise: {{(x ${p < 0 ? "+" : "-"} ${Math.abs(p)})(x ${r < 0 ? "+" : "-"} ${Math.abs(r)}) ${op} 0}}. Critical values ${num(p)} and ${num(r)}.`,
            `Below the x-axis means between the roots: ${solMk({ kind: "between", lo: q(p), hi: q(r), loIncl: !strictOp, hiIncl: !strictOp })}.`,
            `Integers from ${num(strictOp ? p + 1 : p)} to ${num(strictOp ? r - 1 : r)}: ${n} of them.`,
          ],
          hint: "Find the critical values, decide whether you need between or outside, then count carefully (are the ends included?).",
          traps: alt !== n ? [{ spec: { type: "number", value: alt }, feedback: "Check the end values: < leaves out the critical values; ≤ includes them." }] : [],
        };
      }
      // non-monic: (a x − u)(x − v) ≤ 0
      for (let i = 0; i < 100; i++) {
        const a = rng.int(2, 4), u = rng.nonZero(-11, 11), v = rng.int(-5, 6);
        if (u % a === 0 || v === 0) continue;
        const r1 = u / a;
        const lo = Math.min(r1, v), hi = Math.max(r1, v);
        if (hi - lo < 1.5) continue;
        const n = count(lo, hi, !strictOp), alt = count(lo, hi, strictOp);
        const expr = poly([[a, "x^2"], [-(a * v + u), "x"], [u * v, ""]]);
        const ra = q(u, a);
        return {
          prompt: `${ask} {{${expr} ${op} 0}}?`,
          answer: { type: "number", value: n },
          solution: [
            `Factorise: {{(${lin(a, -u)})(x ${v < 0 ? "+" : "-"} ${Math.abs(v)}) ${op} 0}}. Critical values ${qTx(ra)} and ${num(v)}.`,
            `The parabola is U-shaped (positive {{x^2}} coefficient), so ${op === "<" ? "< 0" : "≤ 0"} is between the roots.`,
            `Integers from ${num(Math.ceil(lo + (strictOp && Number.isInteger(lo) ? 1 : 0)))} to ${num(Math.floor(hi - (strictOp && Number.isInteger(hi) ? 1 : 0)))}: ${n} of them.`,
          ],
          hint: "One critical value is a fraction — round inwards to find the first and last integers.",
          traps: alt !== n ? [{ spec: { type: "number", value: alt }, feedback: "Check whether the whole-number critical value should be included." }] : [],
        };
      }
      return { prompt: "How many integers satisfy {{x^2 - 2x - 8 <= 0}}?", answer: { type: "number", value: 7 }, solution: ["{{-2 <= x <= 4}}", "7 integers"] };
    },
  },

  // -------------------------------------------------------------------------
  // 10. Harder quadratic inequalities (a ≠ 1, negative x² term)
  // -------------------------------------------------------------------------
  {
    id: "inequalities.quadratic-nonmonic",
    topicId: TOPIC,
    title: "Quadratic inequalities with a ≠ 1",
    level: 3,
    guideRef: "quadratic-inequalities",
    generate(rng, tier) {
      for (let i = 0; i < 200; i++) {
        const a = rng.pick(tier === 1 ? [2, 3] : [2, 3, 4, 5]);
        const u = rng.nonZero(-12, 12), v = rng.int(-6, 6);
        if (u % a === 0) continue; // keep one fractional root
        const r1 = q(u, a), r2 = q(v);
        if (qv(r1) === qv(r2)) continue;
        const [lo, hi] = qv(r1) < qv(r2) ? [r1, r2] : [r2, r1];
        const op = pickOp(rng);
        const negLead = tier === 3 && rng.bool(0.6);
        // (a x − u)(x − v) = a x² − (a v + u) x + u v
        const A = a, B = -(a * v + u), C = u * v;
        // effective op for the positive-leading form
        const effOp = negLead ? flip(op) : op;
        const inside = isLess(effOp), incl = isIncl(effOp);
        const s: Sol = inside ? { kind: "between", lo, loIncl: incl, hi, hiIncl: incl } : { kind: "outside", lo, loIncl: incl, hi, hiIncl: incl };
        const wrong: Sol = inside ? { kind: "outside", lo, loIncl: incl, hi, hiIncl: incl } : { kind: "between", lo, loIncl: incl, hi, hiIncl: incl };
        const shown = negLead ? `${poly([[-C, ""], [-B, "x"], [-A, "x^2"]])} ${op} 0` : `${poly([[A, "x^2"], [B, "x"], [C, ""]])} ${op} 0`;
        const std = `${poly([[A, "x^2"], [B, "x"], [C, ""]])} ${effOp} 0`;
        const fac = `(${lin(a, -u)})${v === 0 ? "x" : `(x ${v < 0 ? "+" : "-"} ${Math.abs(v)})`}`;
        const steps: string[] = [];
        if (negLead) steps.push(`Multiply by −1 to make the {{x^2}} term positive — this flips the sign: {{${std}}}.`);
        steps.push(`Factorise: {{${fac} ${effOp} 0}}. Critical values: x = ${qTx(r1)} and x = ${num(v)}.`);
        steps.push(`The graph of {{y = ${poly([[A, "x^2"], [B, "x"], [C, ""]])}}} is U-shaped; it is ${inside ? "below" : "above"} the x-axis ${inside ? "between" : "outside"} the critical values.`);
        steps.push(`So ${solMk(s)}.`);
        const traps: Trap[] = [solTrap(wrong, negLead ? "Right critical values, wrong region. When you multiply by −1 the inequality flips — or sketch the ∩-shaped graph directly." : "Right critical values, wrong region. Sketch the U-shaped graph and look where it is above/below the x-axis.")];
        return {
          prompt: `Solve {{${shown}}}. Give fractions in their simplest form.${inside ? "" : " Write your answer as two inequalities joined by \"or\"."}`,
          answer: solSpec(s),
          solution: steps,
          hint: negLead ? "A negative {{x^2}} term gives an ∩-shaped graph. Easiest: multiply through by −1 (and flip the sign) first." : "Factorise (or use the formula) to find the critical values, then sketch.",
          traps,
        };
      }
      return { prompt: "Solve {{2x^2 - 5x - 3 < 0}}.", answer: solSpec({ kind: "between", lo: q(-1, 2), hi: q(3), loIncl: false, hiIncl: false }), solution: ["{{(2x + 1)(x - 3) < 0}}", "{{-1/2 < x < 3}}"] };
    },
  },
];
