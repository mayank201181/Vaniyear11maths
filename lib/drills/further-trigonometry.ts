// Procedural skill drills — Sine & Cosine Rules, Trig Graphs & Identities
// (topic "further-trigonometry").
// Triangles are built from integer angles and nice sides, then every answer is
// computed exactly and rounded once (3 s.f. for lengths/areas, 1 d.p. for
// angles). Trig equations use one general solver (principal value + period),
// so every solution in the interval is listed. Bounded rejection loops rule out
// degenerate or ambiguous cases.
import type { Drill } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { clean, frac, gcd, num, poly, roundTo } from "./helpers.ts";

const TOPIC = "further-trigonometry";

/* ------------------------------------------------------------------------ */
/* Numeric helpers                                                            */
/* ------------------------------------------------------------------------ */

const RAD = Math.PI / 180;
const sinD = (d: number): number => Math.sin(d * RAD);
const cosD = (d: number): number => Math.cos(d * RAD);
const asinD = (v: number): number => Math.asin(v) / RAD;
const acosD = (v: number): number => Math.acos(v) / RAD;
const atanD = (v: number): number => Math.atan(v) / RAD;

/** Power of ten of the last kept digit at 3 s.f. */
const ulp3 = (x: number): number => Math.pow(10, Math.floor(Math.log10(Math.abs(x))) - 2);
/** Round to 3 significant figures. */
const sf3 = (x: number): number => clean(Math.round(x / ulp3(x)) * ulp3(x));
/** 3 s.f. display that keeps trailing zeros: 12.0, 0.500, 1230. */
function sfStr(x: number): string {
  const r = sf3(x);
  const s = Math.abs(r) >= 1000 ? String(Math.round(r)) : r.toPrecision(3);
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}
const dp1 = (x: number): number => roundTo(x, 1);
/** Angle display to 1 d.p. (whole numbers stay whole). */
const degStr = (x: number): string => `${num(dp1(x))}°`;

/** A length/area answer to 3 s.f. (one unit of slack for early rounding). */
function ans3(x: number, unit: string): AnswerSpec {
  return { type: "number", value: sf3(x), tolerance: ulp3(x), display: `${sfStr(x)} ${unit}`.trim() };
}
/** An angle answer to 1 d.p. */
function ansDeg(x: number): AnswerSpec {
  return { type: "number", value: dp1(x), tolerance: 0.1, display: degStr(x) };
}
/** Trap only if it is clearly different from the real answer. */
function trap3(answer: number, wrong: number, feedback: string): Trap[] {
  if (!Number.isFinite(wrong) || wrong <= 0) return [];
  if (Math.abs(sf3(wrong) - sf3(answer)) <= 2.5 * ulp3(answer)) return [];
  return [{ spec: { type: "number", value: sf3(wrong), tolerance: ulp3(wrong) }, feedback }];
}
function trapDeg(answer: number, wrong: number, feedback: string): Trap[] {
  if (!Number.isFinite(wrong)) return [];
  if (Math.abs(dp1(wrong) - dp1(answer)) <= 0.35) return [];
  return [{ spec: { type: "number", value: dp1(wrong), tolerance: 0.1 }, feedback }];
}

/** Length with 1 d.p. chosen as an integer of tenths. */
const tenths = (n: number): number => clean(n / 10);

const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara", "Olivia", "Kenji"];
const VERTS: [string, string, string][] = [["A", "B", "C"], ["P", "Q", "R"], ["X", "Y", "Z"], ["L", "M", "N"], ["D", "E", "F"]];

/* ------------------------------------------------------------------------ */
/* Diagrams                                                                   */
/* ------------------------------------------------------------------------ */

const TXT = 'font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle"';

/**
 * A triangle drawn to scale from its three angles (degrees, at vertices 0, 1, 2).
 * sideLabels[i] is the side opposite vertex i; angleLabels[i] sits inside vertex i.
 */
function triSvg(names: [string, string, string], ang: [number, number, number], sideLabels: (string | null)[], angleLabels: (string | null)[], aria: string): string {
  const W = 360, H = 230, padX = 52, padY = 34;
  // Math coordinates: V0 at origin, V1 on the x-axis, V2 above.
  const c = sinD(ang[2]);
  const b = sinD(ang[1]);
  const raw: [number, number][] = [[0, 0], [c, 0], [b * cosD(ang[0]), b * sinD(ang[0])]];
  const xs = raw.map((p) => p[0]), ys = raw.map((p) => p[1]);
  const minX = Math.min(...xs), maxX = Math.max(...xs), maxY = Math.max(...ys);
  const s = Math.min((W - 2 * padX) / (maxX - minX), (H - 2 * padY) / maxY);
  const offX = (W - s * (maxX - minX)) / 2;
  const offY = (H - s * maxY) / 2;
  const P = raw.map(([x, y]) => [offX + (x - minX) * s, H - offY - y * s] as [number, number]);
  const r1 = (v: number) => Math.round(v * 10) / 10;
  const G = [(P[0][0] + P[1][0] + P[2][0]) / 3, (P[0][1] + P[1][1] + P[2][1]) / 3];
  const unit = (dx: number, dy: number): [number, number] => {
    const L = Math.hypot(dx, dy) || 1;
    return [dx / L, dy / L];
  };
  const out: string[] = [`<rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff"/>`];
  out.push(`<polygon points="${P.map((p) => `${r1(p[0])},${r1(p[1])}`).join(" ")}" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/>`);
  for (let i = 0; i < 3; i++) {
    // vertex name, pushed away from the centroid
    const [ux, uy] = unit(P[i][0] - G[0], P[i][1] - G[1]);
    out.push(`<text x="${r1(P[i][0] + ux * 16)}" y="${r1(P[i][1] + uy * 16 + 5)}" ${TXT} font-weight="700">${names[i]}</text>`);
    // angle label along the internal bisector
    const al = angleLabels[i];
    if (al) {
      const j = (i + 1) % 3, k = (i + 2) % 3;
      const [ax, ay] = unit(P[j][0] - P[i][0], P[j][1] - P[i][1]);
      const [bx, by] = unit(P[k][0] - P[i][0], P[k][1] - P[i][1]);
      const [mx, my] = unit(ax + bx, ay + by);
      const d = ang[i] < 35 ? 46 : ang[i] < 60 ? 34 : 26;
      out.push(`<text x="${r1(P[i][0] + mx * d)}" y="${r1(P[i][1] + my * d + 4)}" ${TXT} font-size="12">${al}</text>`);
    }
    // side label opposite vertex i, outside the triangle
    const sl = sideLabels[i];
    if (sl) {
      const j = (i + 1) % 3, k = (i + 2) % 3;
      const M = [(P[j][0] + P[k][0]) / 2, (P[j][1] + P[k][1]) / 2];
      let [nx, ny] = unit(-(P[k][1] - P[j][1]), P[k][0] - P[j][0]);
      if (nx * (M[0] - P[i][0]) + ny * (M[1] - P[i][1]) < 0) [nx, ny] = [-nx, -ny];
      out.push(`<text x="${r1(M[0] + nx * 15)}" y="${r1(M[1] + ny * 15 + 5)}" ${TXT}>${sl}</text>`);
    }
  }
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}">${out.join("")}</svg>`;
}

/** Circle with centre O, chord AB subtending angle θ; minor or major segment shaded. */
function segmentSvg(r: string, theta: number, major: boolean): string {
  const W = 300, H = 230, cx = 150, cy = 105, R = 85;
  const pt = (phi: number): [number, number] => [Math.round((cx + R * cosD(phi)) * 10) / 10, Math.round((cy - R * sinD(phi)) * 10) / 10];
  const A = pt(-90 - theta / 2), B = pt(-90 + theta / 2);
  const large = major ? (theta < 180 ? 1 : 0) : theta > 180 ? 1 : 0;
  const sweep = major ? 1 : 0;
  const seg = `M${A[0]},${A[1]} A${R},${R} 0 ${large} ${sweep} ${B[0]},${B[1]} Z`;
  const out: string[] = [`<rect x="0" y="0" width="${W}" height="${H}" fill="#ffffff"/>`];
  out.push(`<circle cx="${cx}" cy="${cy}" r="${R}" fill="none" stroke="#1f2937" stroke-width="2"/>`);
  out.push(`<path d="${seg}" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/>`);
  out.push(`<line x1="${cx}" y1="${cy}" x2="${A[0]}" y2="${A[1]}" stroke="#334155" stroke-width="1.5"/>`);
  out.push(`<line x1="${cx}" y1="${cy}" x2="${B[0]}" y2="${B[1]}" stroke="#334155" stroke-width="1.5"/>`);
  out.push(`<circle cx="${cx}" cy="${cy}" r="3" fill="#1f2937"/>`);
  out.push(`<text x="${cx}" y="${cy - 9}" ${TXT} font-weight="700">O</text>`);
  out.push(`<text x="${A[0] - 12}" y="${A[1] + 14}" ${TXT} font-weight="700">A</text>`);
  out.push(`<text x="${B[0] + 12}" y="${B[1] + 14}" ${TXT} font-weight="700">B</text>`);
  out.push(`<text x="${cx}" y="${cy + 30}" ${TXT} font-size="12">${theta}°</text>`);
  const mid = [(cx + A[0]) / 2, (cy + A[1]) / 2];
  out.push(`<text x="${Math.round(mid[0] - 16)}" y="${Math.round(mid[1])}" ${TXT} font-size="12">${r}</text>`);
  const aria = `Circle with centre O and radius ${r}. Radii OA and OB make an angle of ${theta} degrees at O. The ${major ? "major" : "minor"} segment cut off by the chord AB is shaded.`;
  return `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}">${out.join("")}</svg>`;
}

/* ------------------------------------------------------------------------ */
/* Trig equation solver                                                       */
/* ------------------------------------------------------------------------ */

type Fn = "sin" | "cos" | "tan";

/** Principal-range values of u in [0, 360) with fn(u) = k. */
function baseSolutions(fn: Fn, k: number): number[] {
  const out: number[] = [];
  if (fn === "sin") {
    if (Math.abs(k) > 1 + 1e-12) return [];
    const a = asinD(Math.max(-1, Math.min(1, k)));
    out.push(a, 180 - a);
  } else if (fn === "cos") {
    if (Math.abs(k) > 1 + 1e-12) return [];
    const b = acosD(Math.max(-1, Math.min(1, k)));
    out.push(b, 360 - b);
  } else {
    const g = atanD(k);
    out.push(g, g + 180);
  }
  return out.map((u) => ((u % 360) + 360) % 360);
}

/** All x in [lo, hi] with fn(m·x) = k, rounded to 1 d.p. and sorted. */
function solve(fn: Fn, k: number, m: number, lo: number, hi: number): number[] {
  const seen = new Map<string, number>();
  for (const u0 of baseSolutions(fn, k)) {
    for (let n = -6; n <= 12; n++) {
      const x = (u0 + 360 * n) / m;
      if (x < lo - 1e-7 || x > hi + 1e-7) continue;
      const v = dp1(Math.abs(x) < 1e-9 ? 0 : x);
      seen.set(v.toFixed(1), v);
    }
  }
  return [...seen.values()].sort((a, b) => a - b);
}

const listAns = (xs: number[]): AnswerSpec => ({ type: "list", values: xs, tolerance: 0.1, display: xs.map((x) => degStr(x)).join(", ") });

/** k inside {{ }} as a decimal when it terminates (0.5, -0.35), else a fraction. */
function kDec(n: number, d: number): string {
  return 100 % d === 0 ? String(clean(n / d)) : kMk(n, d);
}
/** k inside {{ }} as a fraction: "1/3", "-2/5". */
function kMk(n: number, d: number): string {
  const [a, b] = [n / gcd(n, d), d / gcd(n, d)];
  return b === 1 ? String(a) : `${a < 0 ? "-" : ""}${Math.abs(a)}/${b}`;
}

/* ------------------------------------------------------------------------ */
/* Drills                                                                     */
/* ------------------------------------------------------------------------ */

export const drills: Drill[] = [
  /* 1 ─ Sine rule: missing side ------------------------------------------- */
  {
    id: `${TOPIC}.sine-rule-side`,
    topicId: TOPIC,
    title: "Use the sine rule to find a missing side",
    level: 1,
    guideRef: "sine-rule",
    generate(rng, tier) {
      const V = rng.pick(VERTS);
      let A = 50, B = 70, C = 60, a = 10;
      for (let i = 0; i < 100; i++) {
        A = tier === 1 ? 5 * rng.int(6, 22) : rng.int(25, 115);
        B = tier === 1 ? 5 * rng.int(6, 22) : rng.int(25, 115);
        C = 180 - A - B;
        if (C >= 20 && A !== B && Math.abs(A - B) >= 4 && C !== A && C !== B) break;
      }
      a = tier === 1 ? rng.int(5, 20) : tenths(rng.int(45, 220));
      const unit = tier === 3 ? "km" : "cm";
      // Side b (opposite vertex 1) is the unknown. Tier 2/3 sometimes gives C instead of B.
      const giveC = tier >= 2 && rng.bool(tier === 3 ? 0.7 : 0.4);
      const b = (a * sinD(B)) / sinD(A);
      const [n0, n1, n2] = V;
      const sideA = `${n1}${n2}`, sideB = `${n0}${n2}`;
      let intro: string;
      if (tier === 3 && rng.bool(0.5)) {
        const who = rng.pick(NAMES);
        intro = `Two coastguard stations, ${n1} and ${n2}, are ${num(a)} km apart. A boat is at ${n0}. Angle ${n1}${n0}${n2} = ${A}° and angle ${giveC ? `${n0}${n2}${n1} = ${C}°` : `${n0}${n1}${n2} = ${B}°`}. ${who} wants the distance from the boat to station ${n2}.`;
      } else {
        intro = `In triangle ${n0}${n1}${n2}, ${sideA} = ${num(a)} ${unit}, angle ${n0} = ${A}° and angle ${giveC ? `${n2} = ${C}°` : `${n1} = ${B}°`}.`;
      }
      const diagram = triSvg(V, [A, B, C], [`${num(a)} ${unit}`, "x", null], [`${A}°`, giveC ? null : `${B}°`, giveC ? `${C}°` : null], `Triangle ${n0}${n1}${n2}. Side ${sideA} is ${num(a)} ${unit}, angle ${n0} is ${A} degrees and angle ${giveC ? `${n2} is ${C}` : `${n1} is ${B}`} degrees. Side ${sideB} is marked x.`);
      const steps: string[] = [];
      if (giveC) steps.push(`First find the angle opposite ${sideB}: angle ${n1} = 180° − ${A}° − ${C}° = ${B}°.`);
      steps.push(`Pair each side with its opposite angle: {{x/(sin ${B}°) = ${num(a)}/(sin ${A}°)}}.`);
      steps.push(`{{x = (${num(a)} sin ${B}°)/(sin ${A}°) = ${clean(roundTo(b, 4))}...}}`);
      steps.push(`${sideB} = ${sfStr(b)} ${unit} (3 s.f.)`);
      return {
        prompt: `${intro}\n\nWork out the length of ${sideB}. Give your answer correct to 3 significant figures.`,
        diagram,
        answer: ans3(b, unit),
        solution: steps,
        hint: giveC ? `You need the angle *opposite* ${sideB}. Use the angle sum of a triangle first.` : `Label each side with the angle opposite it, then use {{a/(sin A) = b/(sin B)}}.`,
        traps: [
          ...trap3(b, (a * sinD(A)) / sinD(B), "The ratio is upside down: the side you want goes with the sine of ITS opposite angle, so x = (known side × sin of angle opposite x) ÷ sin of angle opposite the known side."),
          ...(giveC ? trap3(b, (a * sinD(C)) / sinD(A), `That uses angle ${n2}, which is opposite ${n0}${n1}, not ${sideB}. Find angle ${n1} first.`) : []),
        ],
      };
    },
  },

  /* 2 ─ Cosine rule: missing side ----------------------------------------- */
  {
    id: `${TOPIC}.cosine-rule-side`,
    topicId: TOPIC,
    title: "Use the cosine rule to find a missing side",
    level: 1,
    guideRef: "cosine-rule",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.6)) {
        // Bearings context: P → Q on θ1, then Q → R on θ2; angle PQR = 180 − (θ2 − θ1).
        const who = rng.pick(NAMES);
        const t1 = rng.int(2, 8) * 10 + rng.pick([0, 5]);
        const d = rng.int(4, 14) * 10;
        const t2 = t1 + d;
        const p = tenths(rng.int(25, 90));
        const q = tenths(rng.int(25, 90));
        const Q = 180 - d;
        const pr = Math.sqrt(p * p + q * q - 2 * p * q * cosD(Q));
        const b3 = (n: number) => String(n).padStart(3, "0");
        return {
          prompt: `${who} walks ${num(p)} km from P to Q on a bearing of ${b3(t1)}°. She then walks ${num(q)} km from Q to R on a bearing of ${b3(t2)}°.\n\nWork out the direct distance PR. Give your answer correct to 3 significant figures.`,
          answer: ans3(pr, "km"),
          solution: [
            `Draw it. At Q, the angle between the way back to P (bearing ${b3(t1 + 180)}°) and the way on to R (bearing ${b3(t2)}°) is ${t1 + 180}° − ${t2}° = ${Q}°.`,
            `Cosine rule with the included angle: {{PR^2 = ${num(p)}^2 + ${num(q)}^2 - 2 * ${num(p)} * ${num(q)} * cos ${Q}°}}`,
            `{{PR^2 = ${clean(roundTo(pr * pr, 4))}...}}, so PR = ${sfStr(pr)} km (3 s.f.)`,
          ],
          hint: "Sketch both legs with North lines at P and Q. Angle PQR = 180° − (the change in bearing).",
          traps: [
            ...trap3(pr, Math.sqrt(p * p + q * q - 2 * p * q * cosD(d)), `You used ${d}° (the turn) as the angle. The angle inside the triangle at Q is 180° − ${d}° = ${Q}°.`),
          ],
        };
      }
      const V = rng.pick(VERTS);
      const [n0, n1, n2] = V;
      let A = 60, b = 7, c = 9;
      for (let i = 0; i < 100; i++) {
        A = tier === 1 ? 5 * rng.int(6, 17) : rng.int(20, 150);
        b = tier === 1 ? rng.int(4, 15) : tenths(rng.int(35, 160));
        c = tier === 1 ? rng.int(4, 15) : tenths(rng.int(35, 160));
        if (b !== c && A !== 90) break;
      }
      const a2 = b * b + c * c - 2 * b * c * cosD(A);
      const a = Math.sqrt(a2);
      // angles at the other vertices (for the to-scale diagram)
      const B = acosD((a * a + c * c - b * b) / (2 * a * c));
      const C = 180 - A - B;
      const unit = rng.pick(["cm", "m"]);
      const s0 = `${n1}${n2}`;
      return {
        prompt: `In triangle ${n0}${n1}${n2}, ${n0}${n1} = ${num(c)} ${unit}, ${n0}${n2} = ${num(b)} ${unit} and angle ${n1}${n0}${n2} = ${A}°.\n\nWork out the length of ${s0}. Give your answer correct to 3 significant figures.`,
        diagram: triSvg(V, [A, B, C], ["?", `${num(b)} ${unit}`, `${num(c)} ${unit}`], [`${A}°`, null, null], `Triangle ${n0}${n1}${n2} with ${n0}${n1} = ${num(c)} ${unit}, ${n0}${n2} = ${num(b)} ${unit} and the angle between them ${A} degrees. Side ${s0} is unknown.`),
        answer: ans3(a, unit),
        solution: [
          `Two sides and the angle between them (SAS), so use the cosine rule: {{a^2 = b^2 + c^2 - 2bc cos A}}.`,
          `{{${s0}^2 = ${num(b)}^2 + ${num(c)}^2 - 2 * ${num(b)} * ${num(c)} * cos ${A}° = ${clean(roundTo(a2, 4))}...}}`,
          `${A > 90 ? `(cos ${A}° is negative, so the last term is *added* — the side opposite an obtuse angle is long.) ` : ""}${s0} = {{sqrt(${clean(roundTo(a2, 4))}...)}} = ${sfStr(a)} ${unit} (3 s.f.)`,
        ],
        hint: "You know two sides and the angle *between* them — that's the cosine rule, not the sine rule.",
        traps: [
          ...trap3(a, a2, "That's {{a^2}}. Take the square root at the end."),
          ...trap3(a, Math.sqrt(b * b + c * c + 2 * b * c * cosD(A)), "Sign slip: the cosine rule *subtracts* {{2bc cos A}}."),
        ],
      };
    },
  },

  /* 3 ─ Area = ½ab sin C (forwards and backwards) -------------------------- */
  {
    id: `${TOPIC}.area-half-ab-sinc`,
    topicId: TOPIC,
    title: "Find the area of a triangle with ½ab sin C",
    level: 1,
    guideRef: "area-sine",
    generate(rng, tier) {
      const V = rng.pick(VERTS);
      const [n0, n1, n2] = V;
      const unit = rng.pick(["cm", "m"]);
      // Tier 3: exact answer with 30°/150° or 60°/120°.
      if (tier === 3 && rng.bool(0.4)) {
        const C = rng.pick([60, 120]);
        let a = 4, b = 6;
        for (let i = 0; i < 100; i++) {
          a = rng.int(3, 16);
          b = rng.int(3, 16);
          if (a !== b && (a * b) % 4 === 0) break;
        }
        const k = (a * b) / 4;
        const c = Math.sqrt(a * a + b * b - 2 * a * b * cosD(C));
        const Ang0 = acosD((b * b + c * c - a * a) / (2 * b * c));
        return {
          prompt: `In triangle ${n0}${n1}${n2}, ${n1}${n2} = ${a} ${unit}, ${n0}${n2} = ${b} ${unit} and angle ${n0}${n2}${n1} = ${C}°.\n\nFind the exact area of the triangle. Give your answer in the form {{k sqrt(3)}} ${unit}².`,
          diagram: triSvg(V, [Ang0, 180 - C - Ang0, C], [`${a} ${unit}`, `${b} ${unit}`, null], [null, null, `${C}°`], `Triangle ${n0}${n1}${n2} with sides ${a} and ${b} ${unit} meeting at ${n2} at an angle of ${C} degrees.`),
          answer: { type: "expression", expr: `${k}sqrt(3)`, form: "surd", display: `{{${k}sqrt(3)}} ${unit}²` },
          solution: [
            `{{sin ${C}° = sqrt(3)/2}} (exact value).`,
            `Area = {{1/2 * ${a} * ${b} * sqrt(3)/2 = ${a * b}/4 sqrt(3) = ${k}sqrt(3)}} ${unit}²`,
          ],
          hint: `Use {{sin ${C}° = sqrt(3)/2}} — no calculator decimals needed.`,
          traps: [{ spec: { type: "expression", expr: `${2 * k}sqrt(3)` }, feedback: "You've forgotten the {{1/2}} in {{1/2 ab sin C}}." }],
        };
      }
      // Backwards: find the angle (or a side) from the area.
      if (tier >= 2 && rng.bool(0.4)) {
        let a = 8, b = 11, S = 30, s = 0.6;
        for (let i = 0; i < 200; i++) {
          a = rng.int(5, 18);
          b = rng.int(5, 18);
          S = rng.int(8, 120);
          s = (2 * S) / (a * b);
          if (a !== b && s > 0.25 && s < 0.95) break;
        }
        const obtuse = tier === 3 && rng.bool(0.5);
        const acute = asinD(s);
        const ang = obtuse ? 180 - acute : acute;
        return {
          prompt: `Triangle ${n0}${n1}${n2} has area ${S} ${unit}². ${n1}${n2} = ${a} ${unit}, ${n0}${n2} = ${b} ${unit} and angle ${n0}${n2}${n1} is ${obtuse ? "obtuse" : "acute"}.\n\nWork out the size of angle ${n0}${n2}${n1}. Give your answer correct to 1 decimal place.`,
          answer: ansDeg(ang),
          solution: [
            `Area = {{1/2 ab sin C}}, so {{${S} = 1/2 * ${a} * ${b} * sin C}}.`,
            `{{sin C = (2 * ${S})/(${a} * ${b}) = ${clean(roundTo(s, 5))}...}}`,
            obtuse ? `{{sin^(-1)}} gives ${degStr(acute)}, but C is obtuse: C = 180° − ${degStr(acute)} = ${degStr(ang)}.` : `C = {{sin^(-1)(${clean(roundTo(s, 5))}...)}} = ${degStr(ang)}`,
          ],
          hint: "Substitute what you know into {{Area = 1/2 ab sin C}} and make sin C the subject.",
          traps: [
            ...trapDeg(ang, s / 2 <= 1 ? (obtuse ? 180 - asinD(s / 2) : asinD(s / 2)) : NaN, "You've lost the {{1/2}}: {{sin C = (2 * Area)/(ab)}}."),
            ...(obtuse ? trapDeg(ang, acute, "That's the acute angle with this sine. The question says the angle is obtuse — use 180° minus it.") : []),
          ],
        };
      }
      let a = 8, b = 11, C = 50;
      for (let i = 0; i < 100; i++) {
        a = tier === 1 ? rng.int(4, 20) : tenths(rng.int(35, 180));
        b = tier === 1 ? rng.int(4, 20) : tenths(rng.int(35, 180));
        C = tier === 1 ? 5 * rng.int(5, 17) : rng.int(20, 160);
        if (a !== b && C !== 90 && C !== 30 && C !== 150) break;
      }
      const para = tier >= 2 && rng.bool(0.25);
      const area = (para ? 1 : 0.5) * a * b * sinD(C);
      const c = Math.sqrt(a * a + b * b - 2 * a * b * cosD(C));
      const Ang0 = acosD((b * b + c * c - a * a) / (2 * b * c));
      if (para) {
        return {
          prompt: `A parallelogram has sides ${num(a)} ${unit} and ${num(b)} ${unit}. One of its angles is ${C}°.\n\nWork out the area of the parallelogram. Give your answer correct to 3 significant figures.`,
          answer: ans3(area, `${unit}²`),
          solution: [
            "A diagonal splits the parallelogram into two congruent triangles.",
            `Each triangle: {{1/2 * ${num(a)} * ${num(b)} * sin ${C}°}}. Two of them: {{${num(a)} * ${num(b)} * sin ${C}° = ${clean(roundTo(area, 4))}...}}`,
            `Area = ${sfStr(area)} ${unit}² (3 s.f.)`,
          ],
          hint: "Cut it along a diagonal into two identical triangles.",
          traps: [...trap3(area, area / 2, "That's one triangle — the parallelogram is two of them.")],
        };
      }
      return {
        prompt: `In triangle ${n0}${n1}${n2}, ${n1}${n2} = ${num(a)} ${unit}, ${n0}${n2} = ${num(b)} ${unit} and angle ${n0}${n2}${n1} = ${C}°.\n\nWork out the area of the triangle. Give your answer correct to 3 significant figures.`,
        diagram: triSvg(V, [Ang0, 180 - C - Ang0, C], [`${num(a)} ${unit}`, `${num(b)} ${unit}`, null], [null, null, `${C}°`], `Triangle ${n0}${n1}${n2} with sides ${num(a)} and ${num(b)} ${unit} meeting at ${n2} at an angle of ${C} degrees.`),
        answer: ans3(area, `${unit}²`),
        solution: [
          `The angle ${C}° is between the two known sides, so use {{Area = 1/2 ab sin C}}.`,
          `{{Area = 1/2 * ${num(a)} * ${num(b)} * sin ${C}° = ${clean(roundTo(area, 4))}...}}`,
          `Area = ${sfStr(area)} ${unit}² (3 s.f.)`,
        ],
        hint: "Check the angle is the one *between* the two sides you know, then use {{1/2 ab sin C}}.",
        traps: [
          ...trap3(area, 2 * area, "You've forgotten the {{1/2}}."),
          ...trap3(area, 0.5 * a * b * cosD(C), "Use sin C, not cos C."),
        ],
      };
    },
  },

  /* 4 ─ Sine rule: missing angle (and the ambiguous case) ------------------- */
  {
    id: `${TOPIC}.sine-rule-angle`,
    topicId: TOPIC,
    title: "Use the sine rule to find a missing angle",
    level: 2,
    guideRef: "sine-rule",
    generate(rng, tier) {
      const V = rng.pick(VERTS);
      const [n0, n1, n2] = V;
      const unit = rng.pick(["cm", "m"]);
      const ambiguous = tier === 3 && rng.bool(0.6);
      let A = 50, a = 10, b = 8, s = 0.5;
      for (let i = 0; i < 300; i++) {
        A = ambiguous ? rng.int(25, 60) : tier === 1 ? 5 * rng.int(8, 22) : rng.int(35, 125);
        a = tier === 1 ? rng.int(5, 20) : tenths(rng.int(40, 200));
        b = tier === 1 ? rng.int(5, 20) : tenths(rng.int(40, 200));
        s = (b * sinD(A)) / a;
        if (ambiguous) {
          // a < b and sin B < 1: two triangles; we want the obtuse B.
          if (a < b && s < 0.96 && s > sinD(A) + 0.08 && 180 - asinD(s) + A < 170) break;
        } else if (a > b && s > 0.2 && s < 0.97 && asinD(s) >= 15) break;
      }
      const acute = asinD(s);
      const Bang = ambiguous ? 180 - acute : acute;
      const C = 180 - A - Bang;
      const sideA = `${n1}${n2}`, sideB = `${n0}${n2}`;
      const prompt = `In triangle ${n0}${n1}${n2}, ${sideA} = ${num(a)} ${unit}, ${sideB} = ${num(b)} ${unit} and angle ${n1}${n0}${n2} = ${A}°.${ambiguous ? ` Angle ${n0}${n1}${n2} is obtuse.` : ""}\n\nWork out the size of angle ${n0}${n1}${n2}. Give your answer correct to 1 decimal place.`;
      return {
        prompt,
        diagram: ambiguous ? undefined : triSvg(V, [A, Bang, C], [`${num(a)} ${unit}`, `${num(b)} ${unit}`, null], [`${A}°`, "θ", null], `Triangle ${n0}${n1}${n2}: ${sideA} = ${num(a)} ${unit}, ${sideB} = ${num(b)} ${unit}, angle ${n0} = ${A} degrees. Angle ${n1} is marked theta.`),
        answer: ansDeg(Bang),
        solution: [
          `Sides with their opposite angles: ${sideA} faces ${n0}, ${sideB} faces ${n1}. Put the angles on top: {{(sin ${n1})/${num(b)} = (sin ${A}°)/${num(a)}}}.`,
          `{{sin ${n1} = (${num(b)} sin ${A}°)/${num(a)} = ${clean(roundTo(s, 5))}...}}`,
          ambiguous
            ? `{{sin^(-1)}} gives ${degStr(acute)}, but sin is positive in two places: the obtuse answer is 180° − ${degStr(acute)} = ${degStr(Bang)}. (Check: ${A}° + ${degStr(Bang)} < 180°, so this triangle exists.)`
            : `Angle ${n1} = {{sin^(-1)(${clean(roundTo(s, 5))}...)}} = ${degStr(Bang)}. (It must be acute: it faces the shorter side ${sideB}, so it is smaller than ${A}°.)`,
        ],
        hint: ambiguous ? "Your calculator gives an acute angle. Which obtuse angle has the same sine?" : "When you want an angle, flip the sine rule: {{(sin B)/b = (sin A)/a}}.",
        traps: [
          ...(ambiguous ? trapDeg(Bang, acute, "That's the acute solution. sin θ = sin(180° − θ), and the question says the angle is obtuse.") : []),
          ...((a * sinD(A)) / b <= 1 ? trapDeg(Bang, asinD((a * sinD(A)) / b), "The sides are swapped: angle at " + n1 + " is opposite " + sideB + ", so use sin " + n1 + " = (" + sideB + " × sin " + A + "°) ÷ " + sideA + ".") : []),
        ],
      };
    },
  },

  /* 5 ─ Cosine rule: missing angle ----------------------------------------- */
  {
    id: `${TOPIC}.cosine-rule-angle`,
    topicId: TOPIC,
    title: "Use the cosine rule to find an angle from three sides",
    level: 2,
    guideRef: "cosine-rule",
    generate(rng, tier) {
      const V = rng.pick(VERTS);
      const [n0, n1, n2] = V;
      let a = 7, b = 5, c = 6, cosA = 0.2;
      const want = tier === 1 ? "largest" : tier === 2 ? rng.pick(["largest", "named"] as const) : rng.pick(["largest", "smallest", "named"] as const);
      for (let i = 0; i < 200; i++) {
        const lo = tier === 1 ? 3 : 4, hi = tier === 1 ? 14 : 25;
        const s = [rng.int(lo, hi), rng.int(lo, hi), rng.int(lo, hi)].sort((x, y) => x - y);
        if (s[0] === s[1] || s[1] === s[2] || s[0] + s[1] <= s[2] + (tier === 1 ? 1 : 0)) continue;
        // a is the side opposite the angle we want.
        if (want === "largest") [a, b, c] = [s[2], s[0], s[1]];
        else if (want === "smallest") [a, b, c] = [s[0], s[1], s[2]];
        else [a, b, c] = rng.shuffle(s) as [number, number, number];
        cosA = (b * b + c * c - a * a) / (2 * b * c);
        if (tier === 1 && cosA <= 0.05) continue; // keep tier 1 acute
        if (Math.abs(cosA) > 0.02) break;
      }
      const A = acosD(cosA);
      const B = acosD((a * a + c * c - b * b) / (2 * a * c));
      const unit = rng.pick(["cm", "m", "km"]);
      const ctx = tier === 3 && rng.bool(0.5);
      const who = rng.pick(NAMES);
      const askTxt = want === "largest" ? "the largest angle of the triangle" : want === "smallest" ? "the smallest angle of the triangle" : `angle ${n1}${n0}${n2}`;
      const prompt = ctx
        ? `${who} is fencing a triangular vegetable plot ${n0}${n1}${n2} with sides ${n0}${n1} = ${c} m, ${n0}${n2} = ${b} m and ${n1}${n2} = ${a} m.\n\nWork out the size of ${askTxt}. Give your answer correct to 1 decimal place.`
        : `Triangle ${n0}${n1}${n2} has ${n0}${n1} = ${c} ${unit}, ${n0}${n2} = ${b} ${unit} and ${n1}${n2} = ${a} ${unit}.\n\nWork out the size of ${askTxt}. Give your answer correct to 1 decimal place.`;
      const g = gcd(b * b + c * c - a * a, 2 * b * c) || 1;
      return {
        prompt,
        diagram: ctx ? undefined : triSvg(V, [A, B, 180 - A - B], [`${a} ${unit}`, `${b} ${unit}`, `${c} ${unit}`], [want === "named" ? "θ" : null, null, null], `Triangle ${n0}${n1}${n2} with sides ${n0}${n1} = ${c}, ${n0}${n2} = ${b} and ${n1}${n2} = ${a} ${unit}.`),
        answer: ansDeg(A),
        solution: [
          want === "named" ? `Angle ${n0} is opposite ${n1}${n2} = ${a}.` : `The ${want} angle is opposite the ${want} side, ${n1}${n2} = ${a}, so it is angle ${n0}.`,
          `{{cos ${n0} = (b^2 + c^2 - a^2)/(2bc) = (${b}^2 + ${c}^2 - ${a}^2)/(2 * ${b} * ${c}) = ${(b * b + c * c - a * a) / g}/${(2 * b * c) / g}}} = ${num(roundTo(cosA, 5))}${Number.isInteger(roundTo(cosA * 1000, 6)) ? "" : "..."}`,
          `${n0} = {{cos^(-1)(${clean(roundTo(cosA, 5))}${Number.isInteger(roundTo(cosA * 1000, 6)) ? "" : "..."})}} = ${degStr(A)}${cosA < 0 ? " — obtuse, because the cosine is negative." : ""}`,
        ],
        hint: want === "named" ? "The side opposite the angle you want goes *last*, with the minus sign: {{cos A = (b^2 + c^2 - a^2)/(2bc)}}." : "The largest angle is always opposite the largest side (smallest opposite smallest).",
        traps: [
          ...trapDeg(A, 180 - A, "Sign slip: the side opposite the angle is the one you *subtract* — {{cos A = (b^2 + c^2 - a^2)/(2bc)}}."),
        ],
      };
    },
  },

  /* 6 ─ Graphs: solve sin x = k etc. in an interval ------------------------- */
  {
    id: `${TOPIC}.graph-all-solutions`,
    topicId: TOPIC,
    title: "Use the trig graphs to find every solution in 0°–360°",
    level: 2,
    guideRef: "trig-graphs",
    generate(rng, tier) {
      let fn: Fn = "sin", n = 1, d = 2, lo = 0, hi = 360, xs: number[] = [];
      let rearr = "";
      for (let i = 0; i < 100; i++) {
        fn = rng.pick(["sin", "cos", "tan"] as const);
        if (tier === 1) {
          const opts: [number, number][] = fn === "tan" ? [[1, 1], [-1, 1]] : [[1, 2], [-1, 2]];
          [n, d] = rng.pick(opts);
          if (fn === "tan" && rng.bool(0.6)) [n, d] = [rng.pick([2, 3, 4, 5, -2, -3, -4, -5]), rng.pick([1, 1, 2])];
          if (fn !== "tan" && rng.bool(0.6)) [n, d] = [rng.pick([1, 2, 3, 4, 6, 7, 8, 9, -1, -2, -3, -4, -6, -7, -8, -9]), 10];
        } else {
          d = fn === "tan" ? 10 : 100;
          n = fn === "tan" ? rng.nonZero(-35, 35) : rng.nonZero(-95, 95);
          if (fn !== "tan" && n % 5 !== 0 && rng.bool(0.5)) n = 5 * Math.round(n / 5) || 15;
        }
        const g = gcd(n, d);
        n /= g;
        d /= g;
        if (fn !== "tan" && Math.abs(n) >= d) continue;
        lo = 0;
        hi = 360;
        if (tier === 3 && rng.bool(0.5)) {
          lo = -180;
          hi = 180;
        }
        xs = solve(fn, n / d, 1, lo, hi);
        if (xs.length >= 2) break;
      }
      // Tier 3: present as a linear equation to rearrange first.
      if (tier === 3 && d <= 10 && rng.bool(0.6)) {
        const m = rng.pick([2, 3, 4, 5]);
        const kk = (m * n) / d;
        if (Number.isInteger(kk) || (m * n) % d === 0) {
          const cst = rng.nonZero(-6, 6);
          rearr = `{{${m}${fn} x ${cst < 0 ? "-" : "+"} ${Math.abs(cst)} = ${clean(kk + cst)}}}`;
        }
      }
      const eqStr = `{{${fn} x = ${kDec(n, d)}}}`;
      const k = n / d;
      const pv = fn === "sin" ? asinD(k) : fn === "cos" ? acosD(k) : atanD(k);
      const rule =
        fn === "sin"
          ? `sin is symmetrical about 90°: the other solution comes from 180° − (principal value).`
          : fn === "cos"
            ? `cos is symmetrical about 0° and 360°: the other solution is 360° − (principal value).`
            : `tan repeats every 180°: add or subtract 180°.`;
      const rangeTxt = lo === 0 ? "0° ≤ x ≤ 360°" : "−180° ≤ x ≤ 180°";
      const steps: string[] = [];
      if (rearr) steps.push(`Rearrange: ${eqStr}.`);
      steps.push(`Calculator: x = {{${fn}^(-1)(${kDec(n, d)})}} = ${degStr(pv)}.`);
      steps.push(rule);
      steps.push(`In ${rangeTxt}: x = ${xs.map((x) => degStr(x)).join(", ")}.`);
      const traps: Trap[] = [];
      if (fn === "sin" && k < 0 && lo === 0) {
        const wrong = [dp1(pv), dp1(180 - pv)];
        traps.push({ spec: { type: "list", values: wrong, tolerance: 0.1 }, feedback: `${degStr(pv)} is not in 0°–360°. Use the graph: sin is negative between 180° and 360°.` });
      }
      if (fn === "cos" && lo === 0) {
        const wrong = [dp1(pv), dp1(180 - pv)];
        if (Math.abs(wrong[1] - xs[1]) > 0.3) traps.push({ spec: { type: "list", values: wrong, tolerance: 0.1 }, feedback: "180° − x is the sine rule of thumb. For cos the symmetry is about 180°: use 360° − x." });
      }
      return {
        prompt: `Solve ${rearr || eqStr} for ${rangeTxt}. Give all the solutions, correct to 1 decimal place where necessary.`,
        answer: listAns(xs),
        solution: steps,
        hint: `Find one value with {{${fn}^(-1)}}, then sketch {{y = ${fn} x}} and use its symmetry to find the rest.`,
        traps,
      };
    },
  },

  /* 7 ─ Transformations of trig graphs -------------------------------------- */
  {
    id: `${TOPIC}.graph-transformations`,
    topicId: TOPIC,
    title: "Transform trig graphs: max, min and period",
    level: 2,
    guideRef: "trig-graphs",
    generate(rng, tier) {
      const kind = rng.pick(tier === 1 ? (["maxval", "point", "point"] as const) : (["maxval", "period", "point", "point"] as const));
      if (kind === "maxval") {
        const fn = rng.pick(["sin", "cos"] as const);
        const a = rng.int(2, tier === 1 ? 5 : 9);
        const c = rng.nonZero(-6, 6);
        const askMax = rng.bool();
        const v = askMax ? a + c : c - a;
        return {
          prompt: `Write down the ${askMax ? "maximum" : "minimum"} value of {{y = ${a}${fn} x ${c < 0 ? "-" : "+"} ${Math.abs(c)}}}.`,
          answer: { type: "number", value: v },
          solution: [
            `{{${fn} x}} goes from −1 to 1, so {{${a}${fn} x}} goes from −${a} to ${a}.`,
            `Adding ${num(c)} shifts everything ${c > 0 ? "up" : "down"}: the ${askMax ? "maximum" : "minimum"} is ${askMax ? `${a} ${c < 0 ? "−" : "+"} ${Math.abs(c)}` : `−${a} ${c < 0 ? "−" : "+"} ${Math.abs(c)}`} = ${num(v)}.`,
          ],
          hint: `What are the biggest and smallest values {{${fn} x}} can take?`,
          traps: [
            ...(askMax && 1 + c !== v ? [{ spec: { type: "number" as const, value: 1 + c }, feedback: `The ${a} stretches the graph vertically: the top is ${a} × 1, not 1.` }] : []),
            ...(!askMax && c + a !== v ? [{ spec: { type: "number" as const, value: c + a }, feedback: "That's the maximum. The minimum uses −1." }] : []),
          ],
        };
      }
      if (kind === "period") {
        const fn = rng.pick(["sin", "cos", "tan"] as const);
        const half = tier === 3 && rng.bool(0.35);
        const b = half ? 0 : rng.pick([2, 3, 4, 5, 6]);
        const base = fn === "tan" ? 180 : 360;
        const p = half ? base * 2 : base / b;
        const eq = half ? `y = ${fn}(x/2)` : `y = ${fn} ${b}x`;
        return {
          prompt: `The graph of {{${eq}}} repeats itself every p degrees. Write down the period p.`,
          answer: { type: "number", value: p, display: `${p}°` },
          solution: [
            `{{y = ${fn} x}} has period ${base}°.`,
            half
              ? `Replacing x by {{x/2}} stretches the graph horizontally by scale factor 2, so the period doubles: ${p}°.`
              : `Replacing x by ${b}x squashes the graph horizontally by scale factor {{1/${b}}}: period = ${base}° ÷ ${b} = ${p}°.`,
          ],
          hint: `How many degrees does {{y = ${fn} x}} take to repeat? What does multiplying x inside do to the graph?`,
          traps: half ? [{ spec: { type: "number", value: base / 2 }, feedback: "Dividing x by 2 *stretches* the graph — the period gets longer, not shorter." }] : [{ spec: { type: "number", value: base * b }, feedback: `Multiplying x by ${b} makes the graph repeat ${b} times as often — the period gets *shorter*.` }],
        };
      }
      // Coordinates of a turning point after a transformation (unique in 0°–360°).
      type Case = { eq: string; x: number; y: number; which: "maximum" | "minimum"; why: string; wrong?: [number, number]; wrongMsg?: string };
      const cases: Case[] = [];
      const c = rng.nonZero(-4, 5);
      cases.push({ eq: `y = sin x ${c < 0 ? "-" : "+"} ${Math.abs(c)}`, x: 90, y: 1 + c, which: "maximum", why: `{{y = sin x}} has its maximum at (90, 1). Adding ${num(c)} translates the graph ${c > 0 ? "up" : "down"} by ${Math.abs(c)}.` });
      const a = rng.int(2, 6);
      cases.push({ eq: `y = ${a}cos x`, x: 180, y: -a, which: "minimum", why: `{{y = cos x}} has its minimum at (180, −1). A vertical stretch, scale factor ${a}, multiplies every y-value by ${a}.`, wrong: [180, -1], wrongMsg: "The stretch multiplies the y-coordinate too." });
      const p = rng.int(1, 8) * 10;
      cases.push({ eq: `y = sin(x - ${p})`, x: 90 + p, y: 1, which: "maximum", why: `{{y = sin(x - ${p})}} is {{y = sin x}} translated ${p} to the **right**, so the maximum moves from (90, 1) to (${90 + p}, 1).`, wrong: [90 - p, 1], wrongMsg: `(x − ${p}) moves the graph to the RIGHT by ${p}, not left.` });
      const q = rng.int(1, 8) * 10;
      cases.push({ eq: `y = sin(x + ${q})`, x: 90 - q, y: 1, which: "maximum", why: `{{y = sin(x + ${q})}} is {{y = sin x}} translated ${q} to the **left**, so the maximum moves from (90, 1) to (${90 - q}, 1).`, wrong: [90 + q, 1], wrongMsg: `(x + ${q}) moves the graph to the LEFT by ${q}.` });
      const r = rng.int(2, 17) * 10;
      cases.push({ eq: `y = cos(x + ${r})`, x: 180 - r, y: -1, which: "minimum", why: `{{y = cos x}} has its minimum at (180, −1). Translating ${r} to the left moves it to (${180 - r}, −1).`, wrong: [180 + r, -1], wrongMsg: `(x + ${r}) moves the graph LEFT by ${r}.` });
      cases.push({ eq: "y = -sin x", x: 270, y: 1, which: "maximum", why: "{{y = -sin x}} is {{y = sin x}} reflected in the x-axis: the minimum at (270, −1) becomes a maximum at (270, 1).", wrong: [90, 1], wrongMsg: "Reflecting in the x-axis turns the old maximum at 90° into a minimum. The new maximum is where sin x had its minimum." });
      if (tier >= 2) {
        const A = rng.int(2, 5), s = rng.int(1, 6) * 10, k = rng.nonZero(-3, 3);
        cases.push({ eq: `y = ${A}sin(x - ${s}) ${k < 0 ? "-" : "+"} ${Math.abs(k)}`, x: 90 + s, y: A + k, which: "maximum", why: `Start from (90, 1) on {{y = sin x}}. Right ${s}: x = ${90 + s}. Stretch ×${A} then ${k > 0 ? "up" : "down"} ${Math.abs(k)}: y = ${A} × 1 ${k < 0 ? "−" : "+"} ${Math.abs(k)} = ${A + k}.`, wrong: [90 - s, A + k], wrongMsg: `(x − ${s}) is a shift to the RIGHT.` });
        const tt = rng.int(1, 8) * 10;
        cases.push({ eq: `y = cos(x - ${tt})`, x: tt, y: 1, which: "maximum", why: `{{y = cos x}} has a maximum at (0, 1). Translating ${tt} to the right moves it to (${tt}, 1); the next one would be at ${360 + tt}°, outside the interval.` });
      }
      const C = rng.pick(cases);
      const traps: Trap[] = C.wrong && (C.wrong[0] !== C.x || C.wrong[1] !== C.y) ? [{ spec: { type: "list", values: C.wrong, ordered: true }, feedback: C.wrongMsg ?? "Check the direction of the shift." }] : [];
      return {
        prompt: `Write down the coordinates of the ${C.which} point of the graph of {{${C.eq}}} for 0° ≤ x ≤ 360°. Give your answer as (x, y).`,
        answer: { type: "list", values: [C.x, C.y], ordered: true, display: `(${num(C.x)}, ${num(C.y)})` },
        solution: [C.why, `${C.which[0].toUpperCase() + C.which.slice(1)} point: (${num(C.x)}, ${num(C.y)}).`],
        hint: "Start from a turning point of the basic graph — sin x: max (90, 1), min (270, −1); cos x: max (0, 1), min (180, −1) — then apply the transformation to it.",
        traps,
      };
    },
  },

  /* 8 ─ Segment area ------------------------------------------------------ */
  {
    id: `${TOPIC}.segment-area`,
    topicId: TOPIC,
    title: "Find the area of a segment (sector − triangle)",
    level: 3,
    guideRef: "area-sine",
    generate(rng, tier) {
      const r = tier === 1 ? rng.int(4, 15) : rng.bool(0.5) ? rng.int(5, 20) : tenths(rng.int(45, 160));
      let th = 80;
      for (let i = 0; i < 50; i++) {
        th = tier === 1 ? 10 * rng.int(4, 15) : rng.int(35, 160);
        if (th !== 90 || tier === 1) break;
      }
      const major = tier === 3 && rng.bool(0.5);
      const sector = (th / 360) * Math.PI * r * r;
      const tri = 0.5 * r * r * sinD(th);
      const minor = sector - tri;
      const area = major ? Math.PI * r * r - minor : minor;
      const unit = "cm";
      const ctx = tier >= 2 && rng.bool(0.4);
      const intro = ctx
        ? `A circular window has centre O and radius ${num(r)} ${unit}. A straight bar AB is fixed across it, with angle AOB = ${th}°. The ${major ? "larger" : "smaller"} part of the window cut off by the bar is tinted.`
        : `The diagram shows a circle, centre O, radius ${num(r)} ${unit}. A and B are points on the circle with angle AOB = ${th}°.`;
      const what = ctx ? "the area of the tinted part" : `the area of the shaded ${major ? "major" : "minor"} segment`;
      const steps = [
        `Sector AOB: {{${th}/360 * pi * ${num(r)}^2 = ${clean(roundTo(sector, 4))}...}}`,
        `Triangle AOB: {{1/2 * ${num(r)}^2 * sin ${th}° = ${clean(roundTo(tri, 4))}...}}`,
        `Minor segment = sector − triangle = ${clean(roundTo(minor, 4))}...`,
      ];
      if (major) steps.push(`Major segment = whole circle − minor segment = {{pi * ${num(r)}^2}} − ${clean(roundTo(minor, 4))}... = ${sfStr(area)} ${unit}²`);
      else steps.push(`Area = ${sfStr(area)} ${unit}² (3 s.f.)`);
      return {
        prompt: `${intro}\n\nWork out ${what}. Give your answer correct to 3 significant figures.`,
        diagram: segmentSvg(`${num(r)} ${unit}`, th, major),
        answer: ans3(area, `${unit}²`),
        solution: steps,
        hint: "Segment = sector − triangle. Find the triangle with {{1/2 ab sin C}}, using the two radii as a and b.",
        traps: [
          ...trap3(area, major ? Math.PI * r * r - sector : sector, major ? "You took away the whole sector. Take away only the minor segment (sector − triangle)." : "That's the whole sector — subtract triangle AOB to leave the segment."),
          ...trap3(area, major ? Math.PI * r * r - (sector + tri) : sector + tri, "The triangle is *inside* the sector: subtract it, don't add it."),
        ],
      };
    },
  },

  /* 9 ─ Identities: exact values from sin²θ + cos²θ = 1 ---------------------- */
  {
    id: `${TOPIC}.exact-values-identity`,
    topicId: TOPIC,
    title: "Use sin²θ + cos²θ = 1 to find exact values",
    level: 2,
    guideRef: "trig-identities",
    generate(rng, tier) {
      const triples: [number, number, number][] = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [9, 40, 41], [12, 35, 37]];
      const [p0, q0, r] = rng.pick(tier === 1 ? triples.slice(0, 5) : triples);
      const [p, q] = rng.bool() ? [p0, q0] : [q0, p0];
      // Quadrant: 1 = acute; 2 = obtuse; 3, 4 for tier 3.
      const quad = tier === 1 ? 1 : tier === 2 ? rng.pick([1, 2, 2]) : rng.pick([2, 3, 4]);
      const sS = quad === 1 || quad === 2 ? 1 : -1;
      const sC = quad === 1 || quad === 4 ? 1 : -1;
      const sinV: [number, number] = [sS * p, r];
      const cosV: [number, number] = [sC * q, r];
      const tanV: [number, number] = [sS * sC * p, q];
      const given = rng.pick(tier === 3 ? (["sin", "cos", "tan"] as const) : (["sin", "cos"] as const));
      const asks = (["sin", "cos", "tan"] as const).filter((f) => f !== given);
      const ask = rng.pick(asks);
      const val = { sin: sinV, cos: cosV, tan: tanV };
      const range = quad === 1 ? "0° < θ < 90°" : quad === 2 ? "90° < θ < 180°" : quad === 3 ? "180° < θ < 270°" : "270° < θ < 360°";
      const gv = val[given], av = val[ask];
      const signNote =
        quad === 1 ? "θ is acute, so sin, cos and tan are all positive." : quad === 2 ? "θ is obtuse: sin θ > 0 but cos θ < 0 and tan θ < 0." : quad === 3 ? "In 180°–270°, sin θ < 0 and cos θ < 0, so tan θ > 0." : "In 270°–360°, cos θ > 0 but sin θ < 0 and tan θ < 0.";
      const steps: string[] = [];
      if (given === "tan") {
        steps.push(`{{tan theta = ${kMk(gv[0], gv[1])}}}: think of a right-angled triangle with opposite ${p} and adjacent ${q}. Hypotenuse = {{sqrt(${p}^2 + ${q}^2) = ${r}}}.`);
      } else {
        const other = given === "sin" ? "cos" : "sin";
        const gA = Math.abs(gv[0]), oA = given === "sin" ? q : p;
        steps.push(`{{${other}^2 theta = 1 - ${given}^2 theta = 1 - (${gA}/${r})^2 = ${oA * oA}/${r * r}}}, so {{${other} theta = +- ${oA}/${r}}}.`);
      }
      steps.push(signNote);
      steps.push(ask === "tan" ? `{{tan theta = (sin theta)/(cos theta) = ${kMk(av[0], av[1])}}}` : `{{${ask} theta = ${kMk(av[0], av[1])}}}`);
      const traps: Trap[] = [];
      if (av[0] < 0) traps.push({ spec: { type: "fraction", n: -av[0], d: av[1] }, feedback: `Check the sign: ${signNote}` });
      if (ask === "tan" && av[1] !== r) traps.push({ spec: { type: "fraction", n: av[0], d: r }, feedback: "tan θ = sin θ ÷ cos θ — divide the fractions; the r's cancel." });
      return {
        prompt: `Given that {{${given} theta = ${kMk(gv[0], gv[1])}}} and ${range}, find the exact value of {{${ask} theta}}.`,
        answer: { type: "fraction", n: av[0], d: av[1], simplest: true },
        solution: steps,
        hint: given === "tan" ? "Draw a right-angled triangle for the acute angle, then decide the signs from the interval." : "Use {{sin^2 theta + cos^2 theta = 1}}, then choose + or − from the interval θ is in.",
        traps,
      };
    },
  },

  /* 10 ─ Trig equations in an interval -------------------------------------- */
  {
    id: `${TOPIC}.solve-trig-equations`,
    topicId: TOPIC,
    title: "Solve trig equations (multiple angles and quadratics)",
    level: 3,
    guideRef: "trig-equations",
    generate(rng, tier) {
      const kind = rng.pick(tier === 1 ? (["multiple", "quadratic"] as const) : (["multiple", "quadratic", "ratio", "identity"] as const));
      const lo = 0, hi = 360;
      const range = "0° ≤ x ≤ 360°";
      if (kind === "multiple") {
        for (let i = 0; i < 100; i++) {
          const fn = rng.pick(["sin", "cos", "tan"] as const);
          const m = rng.pick([2, 3]);
          let n: number, d: number;
          if (tier === 1) [n, d] = fn === "tan" ? rng.pick([[1, 1], [-1, 1]] as [number, number][]) : rng.pick([[1, 2], [-1, 2]] as [number, number][]);
          else if (fn === "tan") [n, d] = [rng.nonZero(-30, 30), 10];
          else [n, d] = [rng.nonZero(-9, 9), 10];
          const g = gcd(n, d);
          n /= g;
          d /= g;
          if (fn !== "tan" && Math.abs(n) >= d) continue;
          const xs = solve(fn, n / d, m, lo, hi);
          if (xs.length < 2) continue;
          const k = n / d;
          const pv = fn === "sin" ? asinD(k) : fn === "cos" ? acosD(k) : atanD(k);
          const us = solve(fn, k, 1, 0, 360 * m);
          const firstLap = solve(fn, k, 1, 0, 360).map((u) => dp1(u / m));
          return {
            prompt: `Solve {{${fn} ${m}x = ${kDec(n, d)}}} for ${range}. Give all the solutions, correct to 1 decimal place where necessary.`,
            answer: listAns(xs),
            solution: [
              `Let u = ${m}x. Then 0° ≤ u ≤ ${360 * m}° — the interval is ${m} times as long.`,
              `{{${fn}^(-1)(${kDec(n, d)})}} = ${degStr(pv)}. All u in range: ${us.map((u) => degStr(u)).join(", ")}.`,
              `Divide each by ${m}: x = ${xs.map((x) => degStr(x)).join(", ")}.`,
            ],
            hint: `Substitute u = ${m}x and remember to stretch the interval for u to 0°–${360 * m}° *before* you divide by ${m}.`,
            traps: firstLap.length < xs.length ? [{ spec: { type: "list", values: firstLap, tolerance: 0.1 }, feedback: `You only found the u-values in 0°–360°. Since u = ${m}x runs up to ${360 * m}°, there are more solutions.` }] : [],
          };
        }
      }
      if (kind === "ratio") {
        // a sin x = b cos x → tan x = b/a
        let a = 2, b = 3;
        for (let i = 0; i < 50; i++) {
          a = rng.int(2, 9);
          b = rng.nonZero(-9, 9);
          if (gcd(a, Math.abs(b)) === 1 && Math.abs(b) !== a) break;
        }
        const xs = solve("tan", b / a, 1, lo, hi);
        const pv = atanD(b / a);
        return {
          prompt: `Solve {{${a}sin x = ${b < 0 ? "-" : ""}${Math.abs(b) === 1 ? "" : Math.abs(b)}cos x}} for ${range}. Give your answers correct to 1 decimal place.`,
          answer: listAns(xs),
          solution: [
            `Divide both sides by {{${a} cos x}} and use {{(sin x)/(cos x) = tan x}}: {{tan x = ${kMk(b, a)}}}.`,
            `{{tan^(-1)(${kMk(b, a)})}} = ${degStr(pv)}. tan repeats every 180°.`,
            `x = ${xs.map((x) => degStr(x)).join(", ")}`,
          ],
          hint: "Get sin x and cos x together as a fraction — which identity turns {{(sin x)/(cos x)}} into one function?",
          traps: [...(Math.abs(b) !== a ? [{ spec: { type: "list" as const, values: solve("tan", a / b, 1, lo, hi), tolerance: 0.1 }, feedback: `Upside down: {{tan x = (sin x)/(cos x) = ${kMk(b, a)}}}, not {{${kMk(a, b)}}}.` }] : [])],
        };
      }
      // Quadratic in sin or cos (optionally disguised with sin² = 1 − cos²).
      const roots: [number, number][] = [[1, 2], [-1, 2], [1, 1], [-1, 1], [0, 1], [1, 3], [-1, 3], [2, 3], [-2, 3], [1, 4], [3, 4], [-3, 4], [2, 1], [3, 1], [-2, 1], [3, 2]];
      for (let i = 0; i < 200; i++) {
        const identity = kind === "identity";
        const fn: Fn = identity ? "cos" : rng.pick(["sin", "cos"] as const);
        const pool = tier === 1 ? roots.slice(0, 5) : roots;
        const [n1, d1] = rng.pick(pool);
        const [n2, d2] = rng.pick(pool);
        if (n1 * d2 === n2 * d1) continue;
        const valid = [n1 / d1, n2 / d2].filter((v) => Math.abs(v) <= 1);
        if (valid.length === 0) continue;
        if (tier === 1 && valid.length < 2) continue;
        // (d1 c − n1)(d2 c − n2) = A c² + B c + C
        const A = d1 * d2, B = -(d1 * n2 + d2 * n1), C = n1 * n2;
        if (gcd(gcd(A, Math.abs(B)), Math.abs(C)) !== 1) continue;
        const xs = [...new Set([...solve(fn, n1 / d1, 1, lo, hi), ...solve(fn, n2 / d2, 1, lo, hi)])].sort((u, v) => u - v);
        if (xs.length < 2 || xs.length > 6) continue;
        const f = `${fn} x`;
        const factor = (n: number, d: number) => (n === 0 ? `${fn} x` : `(${d === 1 ? "" : d}${fn} x ${n > 0 ? "-" : "+"} ${Math.abs(n)})`);
        let eq: string;
        let pre: string | null = null;
        if (identity) {
          // A cos² + B cos + C = 0  ⇔  A sin²x = B cos x + (A + C)
          const rhs = poly([[B, "cos x"], [A + C, ""]]);
          eq = `${A === 1 ? "" : A}sin^2 x = ${rhs}`;
          pre = `Replace {{sin^2 x}} with {{1 - cos^2 x}}: {{${A === 1 ? "" : A}(1 - cos^2 x) = ${rhs}}}, which rearranges to {{${poly([[A, "cos^2 x"], [B, "cos x"], [C, ""]])} = 0}}.`;
        } else {
          eq = `${poly([[A, `${fn}^2 x`], [B, f], [C, ""]])} = 0`;
        }
        const bad = [n1 / d1, n2 / d2].filter((v) => Math.abs(v) > 1);
        const steps: string[] = [];
        if (pre) steps.push(pre);
        steps.push(`Factorise as a quadratic in {{${f}}}: {{${factor(n1, d1)}${factor(n2, d2)} = 0}}, so {{${f} = ${kMk(n1, d1)}}} or {{${f} = ${kMk(n2, d2)}}}.`);
        if (bad.length) steps.push(`{{${f} = ${bad.map((v) => (v === n1 / d1 ? kMk(n1, d1) : kMk(n2, d2))).join("")}}} has no solutions: {{${f}}} is always between −1 and 1.`);
        for (const [n, d] of [[n1, d1], [n2, d2]] as [number, number][]) {
          if (Math.abs(n / d) > 1) continue;
          const s = solve(fn, n / d, 1, lo, hi);
          steps.push(`{{${f} = ${kMk(n, d)}}}: x = ${s.map((x) => degStr(x)).join(", ")}`);
        }
        const traps: Trap[] = [];
        const partial = valid.length === 2 ? solve(fn, valid[0], 1, lo, hi) : [];
        if (partial.length && partial.length < xs.length) traps.push({ spec: { type: "list", values: partial, tolerance: 0.1 }, feedback: "There's a second factor — solve that one too." });
        return {
          prompt: `Solve {{${eq}}} for ${range}. Give all the solutions, correct to 1 decimal place where necessary.`,
          answer: listAns(xs),
          solution: steps,
          hint: identity ? "Use {{sin^2 x + cos^2 x = 1}} to write everything in terms of cos x, then factorise." : `Let c = {{${f}}}. Solve the quadratic in c first, then solve each {{${f} = c}}.`,
          traps,
        };
      }
      // Fallback (never expected): a standard one.
      return {
        prompt: `Solve {{2cos^2 x - cos x - 1 = 0}} for ${range}.`,
        answer: listAns([0, 120, 240, 360]),
        solution: ["{{(2cos x + 1)(cos x - 1) = 0}}", "cos x = 1: x = 0°, 360°; {{cos x = -1/2}}: x = 120°, 240°."],
        hint: "Factorise as a quadratic in cos x.",
      };
    },
  },
];
