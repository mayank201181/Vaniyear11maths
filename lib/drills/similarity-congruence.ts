// Procedural skill drills for "Similarity & Congruence".
// Similar figures are built from integer "base" lengths × p/q, so every given length
// and every exact answer is a clean integer or half; "3 s.f." answers are rounded once,
// at the end, from the full-precision value. Triangle diagrams are drawn to scale from
// the actual side lengths (law of cosines), with parallel lines really parallel.
import type { Drill } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { big, clean, gcd, num } from "./helpers.ts";

const T = "similarity-congruence";

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

/** Round to n significant figures (default 3). */
function sf(v: number, n = 3): number {
  if (v === 0) return 0;
  return clean(parseFloat(v.toPrecision(n)));
}
/** A 3 s.f. value written with its trailing zeros (12 → "12.0"). */
function s3(v: number): string {
  const r = sf(v);
  const a = Math.abs(r);
  return a >= 100 ? big(r) : a.toPrecision(3);
}
/** Half a unit in the 3rd significant figure — lets a correctly rounded answer through. */
function tol3(v: number): number {
  return clean(0.5 * Math.pow(10, Math.floor(Math.log10(Math.abs(v))) - 2), 6);
}
/** Number answer to 3 s.f. */
function ans3(v: number, unit: string): AnswerSpec {
  return { type: "number", value: sf(v), tolerance: tol3(v), display: `${s3(v)} ${unit}` };
}
/** Exact number answer. */
function ansExact(v: number, unit: string): AnswerSpec {
  return { type: "number", value: clean(v), display: `${big(v)} ${unit}`.trim() };
}

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
  for (const [v0, feedback] of cands) {
    const v = clean(v0);
    if (!Number.isFinite(v) || v < 1e-4) continue;
    if (seen.some((s) => Math.abs(s - v) <= 0.012 * Math.max(Math.abs(s), 1e-9))) continue;
    seen.push(v);
    out.push({ spec: { type: "number", value: v }, feedback });
  }
  return out;
}

/** Text traps (only those not already accepted). */
function textTraps(accept: string[], cands: Array<[string[], string]>): Trap[] {
  const norm = (s: string) => s.toLowerCase().replace(/\s+/g, "");
  const ok = new Set(accept.map(norm));
  return cands.filter(([a]) => !a.some((s) => ok.has(norm(s)))).map(([a, feedback]) => ({ spec: { type: "text", accept: a }, feedback }));
}

/** A fraction p/q in maths markup, plus its decimal when that terminates nicely. */
function ratioText(p: number, q: number): string {
  const g = gcd(p, q);
  const a = p / g, b = q / g;
  if (b === 1) return String(a);
  let d = b;
  while (d % 2 === 0) d /= 2;
  while (d % 5 === 0) d /= 5;
  return d === 1 && b <= 20 ? `{{${a}/${b}}} = ${num(a / b)}` : `{{${a}/${b}}}`;
}
const fracM = (p: number, q: number) => {
  const g = gcd(p, q);
  return q / g === 1 ? String(p / g) : `{{${p / g}/${q / g}}}`;
};

/** Lengths in halves for tiers 2–3: 7 → 3.5. */
const half = (n: number) => clean(n / 2);

// ---------------------------------------------------------------------------
// Geometry + SVG
// ---------------------------------------------------------------------------

type Pt = [number, number];
const F = (n: number) => n.toFixed(1);
const TXT = 'font-size="13" font-family="sans-serif" fill="#1f2937"';

/** Triangle with BC = a, CA = b, AB = c: B = (0,0), C = (a,0), A above (maths y-up). */
function triFromSides(a: number, b: number, c: number): [Pt, Pt, Pt] | null {
  if (a <= 0 || b <= 0 || c <= 0) return null;
  const x = (c * c + a * a - b * b) / (2 * a);
  const y2 = c * c - x * x;
  if (y2 <= 1e-9) return null;
  return [[x, Math.sqrt(y2)], [0, 0], [a, 0]];
}
/** Smallest angle (degrees) of a triangle with sides a, b, c (assumed valid). */
function minAngle(a: number, b: number, c: number): number {
  const ang = (o: number, p: number, q: number) => (Math.acos((p * p + q * q - o * o) / (2 * p * q)) * 180) / Math.PI;
  return Math.min(ang(a, b, c), ang(b, a, c), ang(c, a, b));
}
const validTri = (a: number, b: number, c: number, minDeg = 28) =>
  a < b + c && b < a + c && c < a + b && minAngle(a, b, c) >= minDeg;

function svgOpen(w: number, h: number, aria: string): string {
  return `<svg viewBox="0 0 ${w} ${h}" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}"><rect x="0" y="0" width="${w}" height="${h}" fill="#ffffff"/>`;
}
function text(x: number, y: number, s: string, anchor: "start" | "middle" | "end" = "middle", bold = false): string {
  return `<text x="${F(x)}" y="${F(y)}" ${TXT}${bold ? ' font-weight="700"' : ""} text-anchor="${anchor}">${s}</text>`;
}
/** Map maths points (y up) into a W×H box with a uniform scale. */
function fitter(all: Pt[], W: number, H: number, pad: number, padX = pad): (p: Pt) => Pt {
  const xs = all.map((p) => p[0]), ys = all.map((p) => p[1]);
  const x0 = Math.min(...xs), x1 = Math.max(...xs), y0 = Math.min(...ys), y1 = Math.max(...ys);
  const s = Math.min((W - 2 * padX) / Math.max(x1 - x0, 1e-9), (H - 2 * pad) / Math.max(y1 - y0, 1e-9));
  const ox = (W - (x1 - x0) * s) / 2, oy = (H - (y1 - y0) * s) / 2;
  return (p: Pt): Pt => [ox + (p[0] - x0) * s, oy + (y1 - p[1]) * s];
}
const unitV = (from: Pt, to: Pt): Pt => {
  const dx = to[0] - from[0], dy = to[1] - from[1], L = Math.hypot(dx, dy) || 1;
  return [dx / L, dy / L];
};
const centroid = (ps: Pt[]): Pt => [ps.reduce((s, p) => s + p[0], 0) / ps.length, ps.reduce((s, p) => s + p[1], 0) / ps.length];
function polygon(ps: Pt[], fill: string): string {
  return `<polygon points="${ps.map((p) => `${F(p[0])},${F(p[1])}`).join(" ")}" fill="${fill}" stroke="#1f2937" stroke-width="2"/>`;
}
function line(p: Pt, q: Pt, width = 2): string {
  return `<line x1="${F(p[0])}" y1="${F(p[1])}" x2="${F(q[0])}" y2="${F(q[1])}" stroke="#1f2937" stroke-width="${width}"/>`;
}
/** Vertex name, pushed out from `from` (usually the centroid). */
function vLab(p: Pt, from: Pt, name: string): string {
  const [ux, uy] = unitV(from, p);
  return text(p[0] + ux * 14, p[1] + uy * 14 + 4, name, "middle", true);
}
/** Side label at the midpoint of PQ, on the side away from `away`. */
function sLab(p: Pt, q: Pt, away: Pt, s: string): string {
  const mx = (p[0] + q[0]) / 2, my = (p[1] + q[1]) / 2;
  let [nx, ny] = unitV(p, q);
  [nx, ny] = [-ny, nx];
  if ((mx - away[0]) * nx + (my - away[1]) * ny < 0) [nx, ny] = [-nx, -ny];
  const anchor = nx > 0.45 ? "start" : nx < -0.45 ? "end" : "middle";
  return text(mx + nx * 9, my + ny * (ny > 0 ? 15 : 11) + 4, s, anchor);
}
/** Parallel-line arrow (chevron) 30% of the way along PQ, pointing from P to Q. */
function arrow(p: Pt, q: Pt): string {
  const mx = p[0] + (q[0] - p[0]) * 0.3, my = p[1] + (q[1] - p[1]) * 0.3;
  const [ux, uy] = unitV(p, q);
  const [nx, ny] = [-uy, ux];
  const tip: Pt = [mx + ux * 4, my + uy * 4];
  const a: Pt = [mx - ux * 4 + nx * 5, my - uy * 4 + ny * 5];
  const b: Pt = [mx - ux * 4 - nx * 5, my - uy * 4 - ny * 5];
  return `<polyline points="${F(a[0])},${F(a[1])} ${F(tip[0])},${F(tip[1])} ${F(b[0])},${F(b[1])}" fill="none" stroke="#1f2937" stroke-width="1.8"/>`;
}

// ---------------------------------------------------------------------------
// Shared vocabulary
// ---------------------------------------------------------------------------

/** Side of a triangle opposite vertex i: 0 → BC, 1 → AC, 2 → AB (letters from L). */
const sideName = (L: string, i: number) => (i === 0 ? L[1] + L[2] : i === 1 ? L[0] + L[2] : L[0] + L[1]);
/** Side joining vertices i and j, written in the order given. */
const pairName = (L: string, i: number, j: number) => (i < j ? L[i] + L[j] : L[j] + L[i]);
const pairKey = (i: number, j: number) => (i < j ? `${i}${j}` : `${j}${i}`);

// ===========================================================================
// Drills
// ===========================================================================

type Fact = { kind: "s"; i: number; j: number; v: number } | { kind: "a"; i: number; v: number };
type CongKind = "SSS" | "SAS" | "ASA" | "AAS" | "RHS" | "SSA" | "AAA";

export const drills: Drill[] = [
  // -------------------------------------------------------------------------
  {
    id: `${T}.which-condition`,
    topicId: T,
    title: "Which congruence condition? (SSS, SAS, ASA, RHS)",
    level: 1,
    guideRef: "congruence",
    generate(rng, tier) {
      const kinds: CongKind[] = tier === 1 ? ["SSS", "SAS", "ASA", "RHS", "SSS", "SAS", "AAA"] : ["SSS", "SAS", "ASA", "AAS", "RHS", "SSA", "AAA", "SSA"];
      const kind = rng.pick(kinds);
      const other = tier === 1 ? "PQR" : rng.pick(["PQR", "XYZ", "LMN", "DEF"]);
      const perm = tier === 3 ? rng.shuffle([0, 1, 2]) : [0, 1, 2];
      const L1 = "ABC";
      const L2 = perm.map((i) => other[i]).join("");
      const step = tier === 1 ? 5 : 1;
      const ang = (lo: number, hi: number) => step * rng.int(Math.ceil(lo / step), Math.floor(hi / step));
      const verts = rng.shuffle([0, 1, 2]);
      const [u, v, w] = verts;
      let facts: Fact[] = [];
      switch (kind) {
        case "SSS": {
          const [a, b, c] = attempt(
            () => {
              const s = [rng.int(4, 15), rng.int(4, 15), rng.int(4, 15)];
              return s[0] < s[1] + s[2] && s[1] < s[0] + s[2] && s[2] < s[0] + s[1] && new Set(s).size >= 2 ? s : null;
            },
            () => [5, 7, 9],
          );
          facts = [{ kind: "s", i: 0, j: 1, v: a }, { kind: "s", i: 1, j: 2, v: b }, { kind: "s", i: 0, j: 2, v: c }];
          break;
        }
        case "SAS":
          facts = [{ kind: "s", i: v, j: u, v: rng.int(4, 15) }, { kind: "a", i: v, v: ang(25, 130) }, { kind: "s", i: v, j: w, v: rng.int(4, 15) }];
          break;
        case "ASA": {
          const a1 = ang(25, 95), a2 = ang(25, 150 - a1);
          facts = [{ kind: "a", i: u, v: a1 }, { kind: "s", i: u, j: v, v: rng.int(4, 15) }, { kind: "a", i: v, v: a2 }];
          break;
        }
        case "AAS": {
          const a1 = ang(25, 95), a2 = ang(25, 150 - a1);
          facts = [{ kind: "a", i: u, v: a1 }, { kind: "a", i: v, v: a2 }, { kind: "s", i: v, j: w, v: rng.int(4, 15) }];
          break;
        }
        case "RHS": {
          const h = rng.int(10, 25), l = rng.int(5, h - 2);
          facts = [{ kind: "a", i: v, v: 90 }, { kind: "s", i: u, j: w, v: h }, { kind: "s", i: v, j: u, v: l }];
          break;
        }
        case "SSA": {
          // Angle at v, side v–u next to it, and the side u–w opposite it: the ambiguous case.
          const th = ang(25, 60);
          const c = rng.int(8, 15);
          const lo = Math.ceil(c * Math.sin((th * Math.PI) / 180) + 0.3);
          const a = rng.int(Math.min(lo, c - 1), c - 1);
          facts = [{ kind: "s", i: v, j: u, v: c }, { kind: "s", i: u, j: w, v: a }, { kind: "a", i: v, v: th }];
          break;
        }
        case "AAA": {
          const [a1, a2] = attempt(
            () => {
              const x = ang(25, 100), y = ang(25, 100);
              const z = 180 - x - y;
              return z >= 20 && x !== y && y !== z && x !== z ? [x, y] : null;
            },
            () => [50, 60],
          );
          facts = [{ kind: "a", i: 0, v: a1 }, { kind: "a", i: 1, v: a2 }, { kind: "a", i: 2, v: 180 - a1 - a2 }];
          break;
        }
      }
      if (tier >= 2) facts = rng.shuffle(facts);
      const show = (L: string, f: Fact) => (f.kind === "s" ? `${pairName(L, Math.min(f.i, f.j), Math.max(f.i, f.j))} = ${f.v} cm` : `angle ${L[f.i]} = ${f.v}°`);
      const rows = facts.map((f) => `| ${show(L1, f)} | ${show(L2, f)} |`).join("\n");
      const prompt =
        `Here are some facts about triangle ${L1} and triangle ${other}.\n\n| Triangle ${L1} | Triangle ${other} |\n|---|---|\n${rows}\n\n` +
        "Which condition proves that the triangles are congruent? Write SSS, SAS, ASA, AAS or RHS — or write **none** if these facts do not prove they are congruent.";

      const NONE = ["none", "no", "neither", "not congruent", "not necessarily", "cannot tell", "can't tell", "not proven"];
      const ASA = ["ASA", "AAS", "SAA", "ASA or AAS", "AAS or ASA"];
      let accept: string[];
      let display: string;
      let solution: string[];
      let traps: Trap[] = [];
      const fA = facts.filter((f) => f.kind === "a") as Array<{ kind: "a"; i: number; v: number }>;
      switch (kind) {
        case "SSS":
          accept = ["SSS"];
          display = "SSS";
          solution = ["All three pairs of corresponding sides are equal.", "Three sides fix a triangle completely, so the triangles are congruent by **SSS**."];
          break;
        case "SAS":
          accept = ["SAS"];
          display = "SAS";
          solution = [
            `The equal angle (angle ${L1[v]} = angle ${L2[v]}) is **between** the two equal sides.`,
            "Two sides and the included angle fix the triangle, so they are congruent by **SAS**.",
          ];
          traps = textTraps(accept, [[["SSA", "ASS"], "Look again at where the angle is — it sits between the two given sides, so this is SAS."]]);
          break;
        case "ASA":
        case "AAS": {
          accept = ASA;
          display = kind === "ASA" ? "ASA (AAS also fine)" : "AAS (ASA also fine)";
          const third = 180 - fA[0].v - fA[1].v;
          solution = [
            `Two pairs of angles are equal, so the third angles are equal too: 180° − ${fA[0].v}° − ${fA[1].v}° = ${third}° in both.`,
            kind === "ASA"
              ? "The equal side lies between the two given angles, so the triangles are congruent by **ASA**."
              : "With all the angles known, one pair of corresponding sides is enough: congruent by **AAS** (equivalently ASA).",
          ];
          traps = textTraps(accept, [[["AAA"], "Equal angles alone only prove similarity — but you also have a pair of equal corresponding sides, which fixes the size."]]);
          break;
        }
        case "RHS":
          accept = ["RHS", "RHS (right angle, hypotenuse, side)"];
          display = "RHS";
          solution = [
            `Both triangles have a right angle (at ${L1[v]} and ${L2[v]}), equal hypotenuses (${pairName(L1, u, w)} = ${pairName(L2, u, w)}) and another equal side.`,
            "Right angle, Hypotenuse, Side: congruent by **RHS**. (Pythagoras then forces the third sides to be equal too.)",
          ];
          traps = textTraps(accept, [[["SAS", "SSA"], "The right angle is not between the hypotenuse and the other side, so it isn't SAS. For right-angled triangles the test is RHS."]]);
          break;
        case "SSA":
          accept = NONE;
          display = "none";
          solution = [
            `The angle at ${L1[v]} is **not** between the two given sides — this is SSA (side, side, non-included angle).`,
            `With angle ${L1[v]} = ${fA[0].v}°, ${pairName(L1, v, u)} fixed and ${pairName(L1, u, w)} shorter than ${pairName(L1, v, u)}, side ${pairName(L1, u, w)} can swing to meet the third line in **two** places, giving two different triangles.`,
            "So the facts do **not** prove congruence: **none**.",
          ];
          traps = textTraps(accept, [
            [["SAS"], "Check where the angle is. In SAS the angle must be between the two sides; here it isn't, and SSA can give two different triangles."],
            [["SSA", "ASS"], "Right — that pattern is SSA, which is *not* a valid test. So the answer is none."],
          ]);
          break;
        default:
          accept = NONE;
          display = "none";
          solution = [
            "All three pairs of angles are equal, but no sides are given.",
            "One triangle could be an enlargement of the other: equal angles prove the triangles are **similar**, not congruent. Answer: **none**.",
          ];
          traps = textTraps(accept, [
            [["AAA"], "AAA proves the triangles are similar, not congruent — one could be an enlargement of the other. So: none."],
            [["ASA", "AAS"], "ASA needs a pair of equal sides too. With only angles, the triangles could be different sizes."],
          ]);
      }
      return {
        prompt,
        answer: { type: "text", accept, display },
        solution,
        hint: "For each row, ask: side or angle? Then check whether any equal angle sits *between* the two equal sides.",
        traps,
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.corresponding-parts`,
    topicId: T,
    title: "Use the order of letters in congruent triangles",
    level: 2,
    guideRef: "congruence",
    generate(rng, tier) {
      const other = tier === 1 ? "PQR" : rng.pick(["PQR", "XYZ", "LMN", "DEF"]);
      let perm = rng.shuffle([0, 1, 2]);
      for (let i = 0; i < 20 && tier >= 2 && perm[0] === 0 && perm[1] === 1; i++) perm = rng.shuffle([0, 1, 2]);
      // L2[j] is the vertex of the second triangle that corresponds to vertex j of ABC.
      const L2 = perm.map((i) => other[i]);
      const idx = (letter: string) => L2.indexOf(letter);
      const name2 = L2.join("");
      const [x, y] = rng.shuffle([0, 1, 2]).slice(0, 2).sort((a, b) => a - b); // positions in `other` (alphabetical)
      const mode = tier === 1 ? rng.pick(["side", "angle"] as const) : rng.pick(["side", "angle", "algebra", "algebra"] as const);

      if (mode === "angle") {
        const [aA, aB] = attempt(
          () => {
            const p = rng.int(25, 105), q = rng.int(25, 105), r = 180 - p - q;
            return r >= 25 && p !== q && q !== r && p !== r ? [p, q] : null;
          },
          () => [48, 71],
        );
        const angs = [aA, aB, 180 - aA - aB];
        const V = other[x];
        const others = [0, 1, 2].filter((t) => t !== x).map((t) => other[t]);
        const askName = `${others[0]}${V}${others[1]}`;
        const j = idx(V);
        const hideThird = tier === 3 && rng.bool(0.6);
        const hidden = hideThird ? j : -1;
        const given = [0, 1, 2].filter((t) => t !== hidden).map((t) => `angle ${"ABC"[t]} = ${angs[t]}°`);
        const answer = angs[j];
        const prompt = `Triangle ABC is congruent to triangle ${name2}. In triangle ABC, ${given.join(", ")}. Work out the size of angle ${askName}.`;
        return {
          prompt,
          answer: { type: "number", value: answer, display: `${answer}°` },
          solution: [
            `The letters match in order: ABC ↔ ${name2}, so ${L2[0]} ↔ A, ${L2[1]} ↔ B, ${L2[2]} ↔ C.`,
            `Angle ${askName} is the angle at ${V}, which corresponds to angle ${"ABC"[j]}.`,
            hideThird
              ? `Angle ${"ABC"[j]} = 180° − ${angs[(j + 1) % 3]}° − ${angs[(j + 2) % 3]}° = ${answer}°, so angle ${askName} = ${answer}°.`
              : `So angle ${askName} = ${answer}°.`,
          ],
          hint: `Write ABC above ${name2} and pair the letters up column by column.`,
          traps: numTraps(answer, [[angs[x], `You matched ${V} with the letter in the same alphabetical position. Use the order in "triangle ${name2}" instead: ${V} sits under ${"ABC"[j]}.`]]),
        };
      }

      const sides = attempt(
        () => {
          const lo = tier === 1 ? 4 : 5, hi = tier === 1 ? 12 : 20;
          const s = [rng.int(lo, hi), rng.int(lo, hi), rng.int(lo, hi)];
          return validTri(s[0], s[1], s[2], 15) && new Set(s).size === 3 ? s : null;
        },
        () => [6, 8, 11],
      );
      const side1 = (i: number, j: number) => {
        const k = pairKey(i, j);
        return k === "12" ? sides[0] : k === "02" ? sides[1] : sides[2];
      };
      const ask = other[x] + other[y];
      const i1 = idx(other[x]), j1 = idx(other[y]);
      const corr = pairName("ABC", Math.min(i1, j1), Math.max(i1, j1));
      const val = side1(i1, j1);
      const wrong = side1(x, y);
      const given = `AB = ${sides[2]} cm, BC = ${sides[0]} cm and AC = ${sides[1]} cm`;

      if (mode === "side") {
        return {
          prompt: `Triangle ABC is congruent to triangle ${name2}. ${given}. Work out the length of ${ask}.`,
          answer: { type: "number", value: val, display: `${val} cm` },
          solution: [
            `Pair the letters in order: A ↔ ${L2[0]}, B ↔ ${L2[1]}, C ↔ ${L2[2]}.`,
            `${ask} joins ${other[x]} and ${other[y]}, which correspond to ${"ABC"[i1]} and ${"ABC"[j1]} — side ${corr}.`,
            `So ${ask} = ${corr} = ${val} cm.`,
          ],
          hint: `Which letters of ABC sit in the same positions as ${other[x]} and ${other[y]} in "${name2}"?`,
          traps: numTraps(val, [[wrong, `That matches by alphabetical position. The order in "triangle ${name2}" tells you ${other[x]} ↔ ${"ABC"[i1]} and ${other[y]} ↔ ${"ABC"[j1]}.`]]),
        };
      }

      // Algebra: the corresponding side is given as an expression in x.
      const [c1, c0, xv] = attempt(
        () => {
          const a = rng.int(2, 5), t = rng.int(2, 9), b = val - a * t;
          return b !== 0 && Math.abs(b) <= 12 ? [a, b, t] : null;
        },
        () => [1, val - 2, 2],
      );
      const expr = `${c1}x ${c0 < 0 ? "−" : "+"} ${Math.abs(c0)}`;
      const wrongX = (wrong - c0) / c1;
      return {
        prompt: `Triangle ABC is congruent to triangle ${name2}. ${given}. In triangle ${name2}, ${ask} = (${expr}) cm. Work out the value of x.`,
        answer: { type: "number", value: xv },
        solution: [
          `Pair the letters in order: A ↔ ${L2[0]}, B ↔ ${L2[1]}, C ↔ ${L2[2]}, so ${ask} corresponds to ${corr} = ${val} cm.`,
          `${expr} = ${val}`,
          `${c1}x = ${val - c0}, so x = ${xv}.`,
        ],
        hint: `First find which side of ABC matches ${ask}, then set up an equation.`,
        traps: Number.isInteger(wrongX) ? numTraps(xv, [[wrongX, `You used the side in the same alphabetical position. ${ask} corresponds to ${corr} (= ${val} cm), not ${pairName("ABC", x, y)}.`]]) : [],
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.similar-missing-side`,
    topicId: T,
    title: "Find a missing side in similar shapes",
    level: 1,
    guideRef: "similar-lengths",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.6)) {
        if (rng.bool()) {
          // Shadows at the same moment: similar right-angled triangles.
          const name = rng.pick(["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Kenji", "Hana", "Ravi"]);
          const thing = rng.pick(["a tree", "a lamp post", "a flagpole", "an HDB block's notice board pole", "a palm tree"]);
          const h = rng.int(148, 186) / 100;
          const sp = rng.int(12, 38) / 10;
          const sT = rng.int(45, 260) / 10;
          const H = (h * sT) / sp;
          return {
            prompt: `At the same moment, ${name}, who is ${num(h)} m tall, casts a shadow ${num(sp)} m long, and ${thing} casts a shadow ${num(sT)} m long. Work out the height of ${thing.replace(/^an? /, "the ")}. Give your answer correct to 3 significant figures.`,
            answer: ans3(H, "m"),
            solution: [
              "The sun's rays are parallel, so the two height–shadow triangles have equal angles: they are similar.",
              `Scale factor = {{${num(sT)}/${num(sp)}}} = ${num(sf(sT / sp, 6))}…`,
              `Height = ${num(h)} × {{${num(sT)}/${num(sp)}}} = ${num(sf(H, 6))}… ≈ ${s3(H)} m.`,
            ],
            hint: "Height and shadow are corresponding sides. How many times longer is the big shadow?",
            traps: numTraps(sf(H), [
              [sf(h + sT - sp), "You added the difference in shadow lengths. Similar shapes are linked by multiplying by a scale factor, not adding."],
              [sf((h * sp) / sT), "You divided by the scale factor. The longer shadow belongs to the taller object."],
            ]),
          };
        }
        // Photo / screen enlargement.
        const item = rng.pick(["photo", "poster", "painting", "phone screenshot"]);
        const w1 = rng.int(8, 20);
        let h1 = rng.int(6, 18);
        if (h1 === w1) h1 += 1;
        const w2 = rng.int(180, 640) / 10;
        const h2 = (h1 * w2) / w1;
        return {
          prompt: `A ${item} is ${w1} cm wide and ${h1} cm tall. It is enlarged to make a similar ${item} ${num(w2)} cm wide. Work out the height of the enlarged ${item}. Give your answer correct to 3 significant figures.`,
          answer: ans3(h2, "cm"),
          solution: [
            `Scale factor = new width ÷ old width = {{${num(w2)}/${w1}}} = ${num(sf(w2 / w1, 6))}…`,
            `New height = ${h1} × {{${num(w2)}/${w1}}} = ${num(sf(h2, 6))}… ≈ ${s3(h2)} cm.`,
          ],
          hint: "Find the scale factor from the two widths, then apply it to the height.",
          traps: numTraps(sf(h2), [
            [sf(h1 + w2 - w1), "You added the increase in width to the height. Enlargement multiplies every length by the same factor."],
            [sf((w1 * w2) / h1), "Check which lengths correspond: width goes with width, height with height."],
          ]),
        };
      }

      const ratios: Array<[number, number]> =
        tier === 1 ? [[2, 1], [3, 1], [1, 2], [5, 2], [3, 2]] : tier === 2 ? [[3, 2], [5, 2], [4, 3], [5, 3], [2, 3], [3, 4], [2, 5], [5, 4], [7, 2]] : [[7, 3], [5, 6], [8, 5], [3, 7], [9, 4], [7, 5]];
      const [p, q] = rng.pick(ratios);
      const u = attempt(
        () => {
          const raw = tier === 1 ? [rng.int(2, 7), rng.int(2, 7), rng.int(2, 7)] : [rng.int(4, 14), rng.int(4, 14), rng.int(4, 14)];
          const s = tier === 1 ? raw : raw.map(half);
          return new Set(s).size === 3 && validTri(s[0], s[1], s[2]) ? s : null;
        },
        () => (tier === 1 ? [4, 5, 6] : [2, 2.5, 3]),
      );
      const s1 = u.map((v) => clean(v * q)); // BC, AC, AB
      const s2 = u.map((v) => clean(v * p));
      const L1 = "ABC";
      const L2 = rng.pick(["DEF", "PQR", "XYZ", "LMN"]);
      const known = rng.int(0, 2);
      const unknown = rng.pick([0, 1, 2].filter((i) => i !== known));
      const findIn2 = rng.bool(0.6);
      const extra = tier >= 2 && rng.bool(0.5) ? [0, 1, 2].find((i) => i !== known && i !== unknown)! : -1;

      const given: string[] = [];
      given.push(`${sideName(L1, known)} = ${num(s1[known])} cm`);
      if (findIn2) given.push(`${sideName(L1, unknown)} = ${num(s1[unknown])} cm`);
      if (extra >= 0) given.push(`${sideName(L1, extra)} = ${num(s1[extra])} cm`);
      given.push(`${sideName(L2, known)} = ${num(s2[known])} cm`);
      if (!findIn2) given.push(`${sideName(L2, unknown)} = ${num(s2[unknown])} cm`);
      const target = findIn2 ? sideName(L2, unknown) : sideName(L1, unknown);
      const answer = findIn2 ? s2[unknown] : s1[unknown];
      const from = findIn2 ? s1[unknown] : s2[unknown];

      // Diagram: both triangles to the same scale; the second may be reflected.
      const t1 = triFromSides(s1[0], s1[1], s1[2])!;
      let t2 = triFromSides(s2[0], s2[1], s2[2])!;
      const flip = tier >= 2 && rng.bool();
      const w1 = Math.max(...t1.map((p0) => p0[0]));
      const gap = 0.35 * Math.max(s1[0], s2[0]);
      t2 = t2.map((pt) => [(flip ? s2[0] - pt[0] : pt[0]) + w1 + gap, pt[1]] as Pt) as [Pt, Pt, Pt];
      const map = fitter([...t1, ...t2], 460, 230, 34, 56);
      const P1 = t1.map(map), P2 = t2.map(map);
      const c1 = centroid(P1), c2 = centroid(P2);
      const edge = (P: Pt[], i: number): [Pt, Pt] => (i === 0 ? [P[1], P[2]] : i === 1 ? [P[0], P[2]] : [P[0], P[1]]);
      let svg = svgOpen(460, 230, `Two similar triangles ${L1} and ${L2}, drawn to scale. ${given.join(", ")}.`);
      svg += polygon(P1, "#c7d2fe") + polygon(P2, "#fde68a");
      for (let i = 0; i < 3; i++) svg += vLab(P1[i], c1, L1[i]) + vLab(P2[i], c2, L2[i]);
      const lab1 = [known, ...(findIn2 ? [unknown] : []), ...(extra >= 0 ? [extra] : [])];
      const lab2 = [known, ...(!findIn2 ? [unknown] : [])];
      for (const i of lab1) svg += sLab(...edge(P1, i), c1, `${num(s1[i])} cm`);
      for (const i of lab2) svg += sLab(...edge(P2, i), c2, `${num(s2[i])} cm`);
      svg += "</svg>";

      const kFwd = findIn2 ? [p, q] : [q, p];
      const kText = ratioText(kFwd[0], kFwd[1]);
      const kNum = findIn2 ? s2[known] : s1[known];
      const kDen = findIn2 ? s1[known] : s2[known];
      return {
        prompt: `Triangle ${L1} is similar to triangle ${L2}, with ${L1[0]}, ${L1[1]} and ${L1[2]} corresponding to ${L2[0]}, ${L2[1]} and ${L2[2]}. ${given.join(", ")}. Work out the length of ${target}.`,
        diagram: svg,
        answer: { type: "number", value: answer, display: `${num(answer)} cm` },
        solution: [
          `${sideName(L1, known)} and ${sideName(L2, known)} are corresponding sides (both known).`,
          `Scale factor ${findIn2 ? `${L1} → ${L2}` : `${L2} → ${L1}`} = {{${num(kNum)}/${num(kDen)}}} = ${kText}.`,
          `${target} = ${num(from)} × ${fracM(kFwd[0], kFwd[1])} = ${num(answer)} cm.`,
        ],
        hint: "Find a pair of corresponding sides you know both of — that gives the scale factor.",
        traps: numTraps(answer, [
          [from + (kNum - kDen), "You added the difference between the sides. Similar shapes have lengths in the same *ratio*, so multiply by the scale factor."],
          [(from * kDen) / kNum, "You used the scale factor the wrong way round — check whether the answer should be bigger or smaller."],
        ]),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.parallel-nested`,
    topicId: T,
    title: "Similar triangles with a parallel line inside",
    level: 2,
    guideRef: "similar-lengths",
    generate(rng, tier) {
      const ratios: Array<[number, number]> = tier === 1 ? [[1, 2], [1, 3], [2, 3], [1, 4]] : tier === 2 ? [[2, 5], [3, 5], [3, 4], [2, 3], [3, 7]] : [[4, 7], [5, 8], [3, 8], [5, 7], [4, 9], [2, 7]];
      const [m, n] = rng.pick(ratios);
      const [s, t, r] = attempt(
        () => {
          const raw = tier === 1 ? [rng.int(2, 6), rng.int(2, 6), rng.int(2, 6)] : [rng.int(3, 12), rng.int(3, 12), rng.int(3, 12)].map(half);
          return new Set(raw).size === 3 && validTri(raw[0], raw[1], raw[2], 30) ? raw : null;
        },
        () => [3, 4, 3.5],
      );
      // AB = n s, BC = n t, AC = n r; AD = m s, DE = m t, AE = m r.
      const AB = clean(n * s), BC = clean(n * t), AC = clean(n * r);
      const AD = clean(m * s), DE = clean(m * t), AE = clean(m * r);
      const DB = clean(AB - AD), EC = clean(AC - AE);
      const variants = tier === 1 ? (["BC", "DE"] as const) : tier === 2 ? (["BC", "DE", "DB"] as const) : (["DB", "EC", "BC"] as const);
      const vr = rng.pick(variants);

      const tri = triFromSides(BC, AC, AB)!; // A, B, C
      const A0 = tri[0], B0 = tri[1], C0 = tri[2];
      const D0: Pt = [A0[0] + ((B0[0] - A0[0]) * m) / n, A0[1] + ((B0[1] - A0[1]) * m) / n];
      const E0: Pt = [A0[0] + ((C0[0] - A0[0]) * m) / n, A0[1] + ((C0[1] - A0[1]) * m) / n];
      const map = fitter([A0, B0, C0], 360, 260, 36, 56);
      const [A, B, C, D, E] = [A0, B0, C0, D0, E0].map(map);
      const cen = centroid([A, B, C]);
      const labels: Record<string, string> = {};
      let given: string[] = [];
      let answer = 0, target = "", sol: string[] = [], traps: Trap[] = [];
      const kText = ratioText(n, m);
      if (vr === "BC") {
        given = [`AD = ${num(AD)} cm`, `DB = ${num(DB)} cm`, `DE = ${num(DE)} cm`];
        labels.AD = num(AD); labels.DB = num(DB); labels.DE = num(DE);
        if (tier >= 2 && rng.bool(0.4)) { given.push(`AE = ${num(AE)} cm`); labels.AE = num(AE); }
        answer = BC; target = "BC";
        sol = [`AB = AD + DB = ${num(AD)} + ${num(DB)} = ${num(AB)} cm.`, `Scale factor = {{AB/AD}} = {{${num(AB)}/${num(AD)}}} = ${kText}.`, `BC = DE × ${fracM(n, m)} = ${num(DE)} × ${fracM(n, m)} = ${num(BC)} cm.`];
        traps = numTraps(BC, [[(DE * DB) / AD, "You used DB as the corresponding side. Triangle ABC's side is the whole of AB = AD + DB."], [DE + DB, "Lengths in similar triangles scale by multiplying, not by adding."]]);
      } else if (vr === "DE") {
        given = [`AD = ${num(AD)} cm`, `DB = ${num(DB)} cm`, `BC = ${num(BC)} cm`];
        labels.AD = num(AD); labels.DB = num(DB); labels.BC = num(BC);
        answer = DE; target = "DE";
        sol = [`AB = AD + DB = ${num(AB)} cm.`, `Scale factor from ABC down to ADE = {{AD/AB}} = {{${num(AD)}/${num(AB)}}} = ${ratioText(m, n)}.`, `DE = ${num(BC)} × ${fracM(m, n)} = ${num(DE)} cm.`];
        traps = numTraps(DE, [[(BC * AD) / DB, "You compared AD with DB. The big triangle's side is AB = AD + DB."], [(BC * AB) / AD, "That makes DE bigger than BC — the scale factor should shrink the length."]]);
      } else if (vr === "DB") {
        given = [`AD = ${num(AD)} cm`, `DE = ${num(DE)} cm`, `BC = ${num(BC)} cm`];
        labels.AD = num(AD); labels.DE = num(DE); labels.BC = num(BC);
        answer = DB; target = "DB";
        sol = [`Scale factor = {{BC/DE}} = {{${num(BC)}/${num(DE)}}} = ${kText}.`, `AB = AD × ${fracM(n, m)} = ${num(AD)} × ${fracM(n, m)} = ${num(AB)} cm.`, `DB = AB − AD = ${num(AB)} − ${num(AD)} = ${num(DB)} cm.`];
        traps = numTraps(DB, [[AB, "That's the whole of AB. The question asks for DB, so subtract AD."], [(AD * DE) / BC, "Scale factor the wrong way round — AB must be longer than AD."]]);
      } else {
        given = [`AE = ${num(AE)} cm`, `DE = ${num(DE)} cm`, `BC = ${num(BC)} cm`];
        labels.AE = num(AE); labels.DE = num(DE); labels.BC = num(BC);
        answer = EC; target = "EC";
        sol = [`Scale factor = {{BC/DE}} = {{${num(BC)}/${num(DE)}}} = ${kText}.`, `AC = AE × ${fracM(n, m)} = ${num(AE)} × ${fracM(n, m)} = ${num(AC)} cm.`, `EC = AC − AE = ${num(AC)} − ${num(AE)} = ${num(EC)} cm.`];
        traps = numTraps(EC, [[AC, "That's the whole of AC. The question asks for EC, so subtract AE."], [(AE * DE) / BC, "Scale factor upside down — AC must be longer than AE."]]);
      }
      let svg = svgOpen(360, 260, `Triangle ABC with D on AB and E on AC, DE parallel to BC. ${given.join(", ")}.`);
      svg += polygon([A, B, C], "#c7d2fe");
      svg += polygon([A, D, E], "#fde68a");
      svg += line(D, E) + arrow(D, E) + arrow(B, C);
      const segs: Record<string, [Pt, Pt]> = { AD: [A, D], DB: [D, B], AE: [A, E], EC: [E, C], DE: [D, E], BC: [B, C] };
      for (const [k, v] of Object.entries(labels)) svg += sLab(segs[k][0], segs[k][1], k === "DE" ? A : cen, `${v} cm`);
      svg += vLab(A, cen, "A") + vLab(B, cen, "B") + vLab(C, cen, "C") + vLab(D, cen, "D") + vLab(E, cen, "E");
      svg += "</svg>";
      return {
        prompt: `In the diagram, ADB and AEC are straight lines and DE is parallel to BC. ${given.join(", ")}. Work out the length of ${target}.`,
        diagram: svg,
        answer: { type: "number", value: answer, display: `${num(answer)} cm` },
        solution: ["Triangles ADE and ABC are similar: angle A is shared, and angle ADE = angle ABC (corresponding angles, DE ∥ BC).", ...sol],
        hint: "Draw the two triangles ADE and ABC separately. The side of the big triangle along AB is the *whole* of AB.",
        traps,
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.crossing-lines`,
    topicId: T,
    title: "Similar triangles in a 'bow-tie' (crossing lines)",
    level: 2,
    guideRef: "similar-lengths",
    generate(rng, tier) {
      const ratios: Array<[number, number]> = tier === 1 ? [[1, 2], [1, 3], [2, 1], [3, 1]] : tier === 2 ? [[2, 3], [3, 4], [2, 5], [3, 5], [3, 2], [5, 2], [4, 3]] : [[3, 7], [4, 7], [5, 7], [5, 6], [7, 4], [7, 5], [8, 5]];
      const [m, n] = rng.pick(ratios); // triangle XAB : triangle XDC = m : n
      const [s, r, t] = attempt(
        () => {
          const raw = tier === 1 ? [rng.int(2, 6), rng.int(2, 6), rng.int(2, 6)] : [rng.int(3, 12), rng.int(3, 12), rng.int(3, 12)].map(half);
          return new Set(raw).size === 3 && validTri(raw[0], raw[1], raw[2], 30) ? raw : null;
        },
        () => [3, 4, 3.5],
      );
      const XA = clean(m * s), XB = clean(m * r), AB = clean(m * t);
      const XD = clean(n * s), XC = clean(n * r), DC = clean(n * t);
      const variants = tier === 1 ? (["DC", "XD"] as const) : tier === 2 ? (["DC", "XD", "XC"] as const) : (["XC", "AD", "XB"] as const);
      const vr = rng.pick(variants);

      // Construct to scale: A = (0,0), B = (AB,0), X below; D, C beyond X.
      const xx = (XA * XA + AB * AB - XB * XB) / (2 * AB);
      const X0: Pt = [xx, -Math.sqrt(Math.max(XA * XA - xx * xx, 1e-9))];
      const A0: Pt = [0, 0], B0: Pt = [AB, 0];
      const f = n / m;
      const D0: Pt = [X0[0] + (X0[0] - A0[0]) * f, X0[1] + (X0[1] - A0[1]) * f];
      const C0: Pt = [X0[0] + (X0[0] - B0[0]) * f, X0[1] + (X0[1] - B0[1]) * f];
      const map = fitter([A0, B0, C0, D0], 380, 280, 36, 60);
      const [A, B, C, D, X] = [A0, B0, C0, D0, X0].map(map);
      const labels: Record<string, string> = {};
      let given: string[] = [], answer = 0, target = "", sol: string[] = [], traps: Trap[] = [];
      const kAB = ratioText(n, m);
      const sfLine = `Scale factor from XAB to XDC = {{DC/AB}} = {{${num(DC)}/${num(AB)}}} = ${kAB}.`;
      if (vr === "DC") {
        given = [`XA = ${num(XA)} cm`, `XD = ${num(XD)} cm`, `AB = ${num(AB)} cm`];
        Object.assign(labels, { XA: num(XA), XD: num(XD), AB: num(AB) });
        answer = DC; target = "DC";
        sol = [`Scale factor = {{XD/XA}} = {{${num(XD)}/${num(XA)}}} = ${kAB}.`, `DC = AB × ${fracM(n, m)} = ${num(AB)} × ${fracM(n, m)} = ${num(DC)} cm.`];
        traps = numTraps(DC, [[(AB * XA) / XD, "Scale factor upside down: XD is the side in the triangle containing DC."], [AB + XD - XA, "Similar triangles multiply lengths by a scale factor — they don't add a fixed amount."]]);
      } else if (vr === "XD") {
        given = [`XA = ${num(XA)} cm`, `AB = ${num(AB)} cm`, `DC = ${num(DC)} cm`];
        Object.assign(labels, { XA: num(XA), AB: num(AB), DC: num(DC) });
        answer = XD; target = "XD";
        sol = [sfLine, `XD corresponds to XA (both lie on line AD), so XD = ${num(XA)} × ${fracM(n, m)} = ${num(XD)} cm.`];
        traps = numTraps(XD, [[(XA * AB) / DC, "Scale factor upside down — the triangle with DC is the one containing XD."], [(XB * DC) / AB, "XD matches XA, not XB: they are on the same straight line through X."]]);
      } else if (vr === "XC") {
        given = [`XB = ${num(XB)} cm`, `AB = ${num(AB)} cm`, `DC = ${num(DC)} cm`];
        Object.assign(labels, { XB: num(XB), AB: num(AB), DC: num(DC) });
        answer = XC; target = "XC";
        sol = [sfLine, `XC corresponds to XB (both on line BC), so XC = ${num(XB)} × ${fracM(n, m)} = ${num(XC)} cm.`];
        traps = numTraps(XC, [[(XB * AB) / DC, "Scale factor upside down — XC is in the triangle with DC."]]);
      } else if (vr === "XB") {
        given = [`XC = ${num(XC)} cm`, `AB = ${num(AB)} cm`, `DC = ${num(DC)} cm`];
        Object.assign(labels, { XC: num(XC), AB: num(AB), DC: num(DC) });
        answer = XB; target = "XB";
        sol = [`Scale factor from XDC to XAB = {{AB/DC}} = {{${num(AB)}/${num(DC)}}} = ${ratioText(m, n)}.`, `XB = XC × ${fracM(m, n)} = ${num(XC)} × ${fracM(m, n)} = ${num(XB)} cm.`];
        traps = numTraps(XB, [[(XC * DC) / AB, "Scale factor upside down: XB is in the triangle with AB."]]);
      } else {
        given = [`XA = ${num(XA)} cm`, `AB = ${num(AB)} cm`, `DC = ${num(DC)} cm`];
        Object.assign(labels, { XA: num(XA), AB: num(AB), DC: num(DC) });
        answer = clean(XA + XD); target = "AD";
        sol = [sfLine, `XD = XA × ${fracM(n, m)} = ${num(XA)} × ${fracM(n, m)} = ${num(XD)} cm.`, `AD = AX + XD = ${num(XA)} + ${num(XD)} = ${num(answer)} cm.`];
        traps = numTraps(answer, [[XD, "That's XD. AD runs all the way from A to D, through X."], [clean(XA + (XA * AB) / DC), "Check the scale factor direction: XD is in the triangle with DC."]]);
      }
      const segs: Record<string, [Pt, Pt, Pt]> = { XA: [X, A, B], XD: [X, D, C], XB: [X, B, A], XC: [X, C, D], AB: [A, B, X], DC: [D, C, X] };
      let svg = svgOpen(380, 280, `AB parallel to DC; lines AD and BC cross at X. ${given.join(", ")}.`);
      svg += polygon([X, A, B], "#c7d2fe") + polygon([X, D, C], "#fde68a");
      svg += arrow(A, B) + arrow(C, D);
      for (const [k, v] of Object.entries(labels)) svg += sLab(segs[k][0], segs[k][1], segs[k][2], `${v} cm`);
      svg += vLab(A, X, "A") + vLab(B, X, "B") + vLab(C, X, "C") + vLab(D, X, "D");
      const ua = unitV(X, A), uc = unitV(X, C);
      svg += vLab(X, [X[0] - (ua[0] + uc[0]), X[1] - (ua[1] + uc[1])], "X");
      svg += "</svg>";
      return {
        prompt: `In the diagram, AB is parallel to DC. The straight lines AD and BC cross at X. ${given.join(", ")}. Work out the length of ${target}.`,
        diagram: svg,
        answer: { type: "number", value: answer, display: `${num(answer)} cm` },
        solution: ["Triangles XAB and XDC are similar: the angles at X are vertically opposite, and angle XAB = angle XDC (alternate angles, AB ∥ DC).", ...sol],
        hint: "Match the vertices: A ↔ D, B ↔ C, X ↔ X. Which pair of parallel sides gives you the scale factor?",
        traps,
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.convert-area`,
    topicId: T,
    title: "Convert units of area (m², cm², mm², km²)",
    level: 1,
    guideRef: "area-volume-units",
    generate(rng, tier) {
      if (tier === 3 && rng.bool(0.5)) {
        if (rng.bool()) {
          // Rectangle with mixed units.
          const L = rng.int(12, 48) / 10; // m
          const W = 5 * rng.int(12, 50); // cm
          const inM = rng.bool();
          const thing = rng.pick(["rug", "classroom noticeboard", "garden bed", "table top", "yoga mat"]);
          const area = inM ? clean((L * W) / 100) : clean(L * 100 * W);
          return {
            prompt: `A rectangular ${thing} measures ${num(L)} m by ${W} cm. Work out its area in ${inM ? "m²" : "cm²"}.`,
            answer: ansExact(area, inM ? "m²" : "cm²"),
            solution: inM
              ? [`Convert first: ${W} cm = ${num(W / 100)} m.`, `Area = ${num(L)} × ${num(W / 100)} = ${num(area)} m².`]
              : [`Convert first: ${num(L)} m = ${num(L * 100)} cm.`, `Area = ${num(L * 100)} × ${W} = ${big(area)} cm².`],
            hint: "Put both lengths into the same unit *before* you multiply.",
            traps: numTraps(area, [[clean(L * W), "You multiplied metres by centimetres. Convert one length first."], [inM ? clean((L * W) / 10000) : clean(L * W * 10000), "Convert the *length* (×100 or ÷100), not the area, when only one side is in different units."]]),
          };
        }
        // Tiles on a floor.
        const tile = rng.pick([20, 25, 30, 40, 50]);
        const a = tile * rng.int(6, 20), b = tile * rng.int(6, 16);
        const count = (a / tile) * (b / tile);
        const areaM = clean((a * b) / 10000);
        return {
          prompt: `A floor is a rectangle ${num(a / 100)} m by ${num(b / 100)} m. It is covered with square tiles of side ${tile} cm, with no gaps. How many tiles are needed?`,
          answer: { type: "number", value: count },
          solution: [
            `Floor area = ${num(a / 100)} × ${num(b / 100)} = ${num(areaM)} m² = ${num(areaM)} × 10 000 = ${big(a * b)} cm².`,
            `One tile = ${tile} × ${tile} = ${tile * tile} cm².`,
            `Number of tiles = ${big(a * b)} ÷ ${tile * tile} = ${count}. (Check: ${a / tile} tiles along × ${b / tile} tiles across.)`,
          ],
          hint: "Work in centimetres throughout — or count how many tiles fit along each side.",
          traps: numTraps(count, [[clean((areaM * 100) / (tile * tile)), "1 m² is 10 000 cm², not 100 cm²."]]),
        };
      }
      const convs: Array<[string, string, number]> =
        tier === 1 ? [["m²", "cm²", 10000], ["cm²", "mm²", 100]] : tier === 2 ? [["m²", "cm²", 10000], ["cm²", "mm²", 100], ["km²", "m²", 1000000]] : [["m²", "mm²", 1000000], ["km²", "m²", 1000000], ["m²", "cm²", 10000]];
      const [big1, small1, fac] = rng.pick(convs);
      const lin = Math.round(Math.sqrt(fac));
      const e = tier === 1 ? rng.pick([0, 0, -1]) : rng.pick([-2, -1, 0]);
      const vBig = clean(rng.int(2, 95) * Math.pow(10, e));
      const vSmall = clean(vBig * fac);
      const down = rng.bool(); // true: big unit → small unit
      const given = down ? vBig : vSmall;
      const answer = down ? vSmall : vBig;
      return {
        prompt: `Convert ${big(given)} ${down ? big1 : small1} to ${down ? small1 : big1}.`,
        answer: ansExact(answer, down ? small1 : big1),
        solution: [
          `1 ${big1.slice(0, -1)} = ${big(lin)} ${small1.slice(0, -1)}, so 1 ${big1} = ${big(lin)} × ${big(lin)} = ${big(fac)} ${small1}.`,
          down ? `${big(given)} × ${big(fac)} = ${big(answer)} ${small1}.` : `${big(given)} ÷ ${big(fac)} = ${big(answer)} ${big1}.`,
        ],
        hint: `Picture a 1 ${big1} square: how many ${small1.slice(0, -1)} along each side?`,
        traps: numTraps(answer, [
          [down ? clean(given * lin) : clean(given / lin), `You used the length factor (${big(lin)}). Areas need it squared: ${big(lin)}² = ${big(fac)}.`],
          [down ? clean(given / fac) : clean(given * fac), "Wrong direction — a smaller unit needs a bigger number of them."],
        ]),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.convert-volume`,
    topicId: T,
    title: "Convert units of volume and capacity (m³, cm³, litres)",
    level: 2,
    guideRef: "area-volume-units",
    generate(rng, tier) {
      if (tier >= 2 && rng.bool(tier === 3 ? 0.6 : 0.3)) {
        const kind = rng.pick(["tankCm", "tankM", "cups"] as const);
        if (kind === "tankCm") {
          const a = 5 * rng.int(6, 24), b = 5 * rng.int(4, 16), c = 5 * rng.int(4, 14);
          const litres = clean((a * b * c) / 1000);
          return {
            prompt: `A cuboid fish tank measures ${a} cm by ${b} cm by ${c} cm. How many litres of water does it hold when full?`,
            answer: ansExact(litres, "litres"),
            solution: [`Volume = ${a} × ${b} × ${c} = ${big(a * b * c)} cm³.`, `1 litre = 1000 cm³, so ${big(a * b * c)} ÷ 1000 = ${num(litres)} litres.`],
            hint: "Find the volume in cm³ first. How many cm³ make a litre?",
            traps: numTraps(litres, [[clean((a * b * c) / 100), "1 litre is 1000 cm³ (a 10 cm cube), not 100 cm³."], [a * b * c, "That's the volume in cm³ — now convert to litres."]]),
          };
        }
        if (kind === "tankM") {
          const a = rng.int(8, 30) / 10, b = rng.int(5, 20) / 10, c = rng.int(4, 15) / 10;
          const m3 = clean(a * b * c);
          const litres = clean(m3 * 1000);
          return {
            prompt: `A rainwater tank is a cuboid ${num(a)} m long, ${num(b)} m wide and ${num(c)} m deep. Work out its capacity in litres.`,
            answer: ansExact(litres, "litres"),
            solution: [`Volume = ${num(a)} × ${num(b)} × ${num(c)} = ${num(m3)} m³.`, `1 m³ = 100 × 100 × 100 cm³ = 1 000 000 cm³ = 1000 litres.`, `${num(m3)} × 1000 = ${big(litres)} litres.`],
            hint: "How many litres fit in a 1 m cube? (1 litre is a 10 cm cube.)",
            traps: numTraps(litres, [[m3 * 100, "1 m³ is 1000 litres: 10 litre-cubes fit along each 1 m edge, and 10 × 10 × 10 = 1000."], [m3 * 1000000, "That's in cm³. Divide by 1000 to get litres."]]),
          };
        }
        const cup = rng.pick([200, 250, 400, 500]);
        const m3 = clean(rng.int(2, 40) / 100);
        const cups = (m3 * 1000000) / cup;
        return {
          prompt: `A drinks dispenser at a school sports day holds ${num(m3)} m³ of water. How many cups of ${cup} cm³ can be filled from it?`,
          answer: { type: "number", value: clean(cups) },
          solution: [`${num(m3)} m³ = ${num(m3)} × 1 000 000 = ${big(m3 * 1000000)} cm³.`, `${big(m3 * 1000000)} ÷ ${cup} = ${big(cups)} cups.`],
          hint: "Change m³ to cm³ first: how many cm³ in 1 m³?",
          traps: numTraps(clean(cups), [[clean((m3 * 10000) / cup), "1 m³ = 100³ cm³ = 1 000 000 cm³ (not 10 000)."], [clean((m3 * 100) / cup), "Volumes use the length factor cubed: 100³ = 1 000 000."]]),
        };
      }
      const convs: Array<[string, string, number, number]> =
        tier === 1
          ? [["m³", "cm³", 1000000, 100], ["litres", "cm³", 1000, 0], ["cm³", "mm³", 1000, 10]]
          : [["m³", "cm³", 1000000, 100], ["litres", "cm³", 1000, 0], ["cm³", "mm³", 1000, 10], ["m³", "litres", 1000, 0]];
      const [bigU, smallU, fac, lin] = rng.pick(convs);
      const e = tier === 1 ? rng.pick([0, 0, -1]) : rng.pick([-2, -1, 0]);
      const vBig = clean(rng.int(2, 95) * Math.pow(10, e));
      const vSmall = clean(vBig * fac);
      const down = rng.bool();
      const given = down ? vBig : vSmall;
      const answer = down ? vSmall : vBig;
      const why =
        bigU === "litres" ? "1 litre = 1000 cm³ (a 10 cm × 10 cm × 10 cm cube)." : bigU === "m³" && smallU === "litres" ? "1 m³ = 1 000 000 cm³ = 1000 litres." : `1 ${bigU.slice(0, -1)} = ${lin} ${smallU.slice(0, -1)}, so 1 ${bigU} = ${lin}³ = ${big(fac)} ${smallU}.`;
      const cands: Array<[number, string]> = [[down ? clean(given / fac) : clean(given * fac), "Wrong direction — converting to a smaller unit should give a bigger number."]];
      if (lin) {
        cands.unshift([down ? clean(given * lin) : clean(given / lin), `You used the length factor ${lin}. Volumes need it cubed: ${lin}³ = ${big(fac)}.`]);
        cands.push([down ? clean(given * lin * lin) : clean(given / (lin * lin)), `That's the *area* factor ${lin}². Volume has three dimensions, so cube it.`]);
      }
      return {
        prompt: `Convert ${big(given)} ${down ? bigU : smallU} to ${down ? smallU : bigU}.`,
        answer: ansExact(answer, down ? smallU : bigU),
        solution: [why, down ? `${big(given)} × ${big(fac)} = ${big(answer)} ${smallU}.` : `${big(given)} ÷ ${big(fac)} = ${big(answer)} ${bigU}.`],
        hint: "Picture a cube of the bigger unit. How many little cubes along each edge — and how many altogether?",
        traps: numTraps(answer, cands),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.area-volume-from-lengths`,
    topicId: T,
    title: "Use k² and k³: areas and volumes of similar shapes",
    level: 2,
    guideRef: "area-volume-scale",
    generate(rng, tier) {
      const isVol = rng.bool();
      const d = isVol ? 3 : 2;
      const areaCtx = [
        { intro: "Triangles P and Q are similar.", what: "area", len: "base" },
        { intro: "Two cylinders, P and Q, are mathematically similar.", what: "total surface area", len: "radius" },
        { intro: "Two logos, P and Q, are mathematically similar.", what: "area", len: "width" },
        { intro: "Two cones, P and Q, are mathematically similar.", what: "curved surface area", len: "slant height" },
      ];
      const volCtx = [
        { intro: "Two cylinders, P and Q, are mathematically similar.", what: "volume", len: "height" },
        { intro: "Two vases, P and Q, are mathematically similar.", what: "volume", len: "height" },
        { intro: "Two square-based pyramids, P and Q, are mathematically similar.", what: "volume", len: "base edge" },
        { intro: "Two cones, P and Q, are mathematically similar.", what: "volume", len: "radius" },
      ];
      const ctx = rng.pick(isVol ? volCtx : areaCtx);
      const unit = isVol ? "cm³" : "cm²";
      let p: number, q: number, known: number, answer: AnswerSpec, ansVal: number, lenText: string;
      const reverse = rng.bool(0.35); // given Q, find P
      if (tier === 1) {
        const k = isVol ? rng.int(2, 4) : rng.int(2, 5);
        [p, q] = reverse ? [1, k] : [k, 1];
        const u = rng.int(isVol ? 2 : 3, isVol ? 12 : 30);
        known = clean(u * Math.pow(q, d));
        ansVal = clean(u * Math.pow(p, d));
        lenText = reverse ? `P is an enlargement of Q with scale factor ${k}.` : `Q is an enlargement of P with scale factor ${k}.`;
        answer = ansExact(ansVal, unit);
      } else {
        const ratios: Array<[number, number]> = tier === 2 ? (isVol ? [[3, 2], [2, 3], [4, 3], [3, 4], [5, 2], [2, 5]] : [[3, 2], [2, 3], [4, 3], [3, 4], [5, 2], [5, 3], [3, 5], [5, 4]]) : [[7, 4], [5, 3], [8, 5], [7, 5], [9, 7], [6, 11]];
        [p, q] = rng.pick(ratios);
        const w = tier === 2 ? rng.int(1, 4) : rng.int(1, 3);
        const lp = q * w, lq = p * w;
        lenText = `The ${ctx.len} of P is ${lp} cm and the ${ctx.len} of Q is ${lq} cm.`;
        if (tier === 2) {
          const u = rng.int(1, isVol ? 6 : 9);
          known = clean(u * Math.pow(q, d));
          ansVal = clean(u * Math.pow(p, d));
          answer = ansExact(ansVal, unit);
        } else {
          known = rng.int(isVol ? 60 : 20, isVol ? 900 : 400);
          ansVal = (known * Math.pow(p, d)) / Math.pow(q, d);
          answer = ans3(ansVal, unit);
        }
      }
      // With `reverse`, the known value belongs to Q and we find P (scale factor q/p from Q to P).
      // Re-derive in that case so the numbers stay nice.
      let givenName = "P", findName = "Q";
      if (reverse && tier >= 2) {
        givenName = "Q"; findName = "P";
        if (tier === 2) {
          const u = clean(known / Math.pow(q, d));
          known = clean(u * Math.pow(p, d));
          ansVal = clean(u * Math.pow(q, d));
          answer = ansExact(ansVal, unit);
        } else {
          ansVal = (known * Math.pow(q, d)) / Math.pow(p, d);
          answer = ans3(ansVal, unit);
        }
        [p, q] = [q, p];
      }
      const kT = fracM(p, q);
      const kd = d === 2 ? `{{(${p}/${q})^2}}` : `{{(${p}/${q})^3}}`;
      const kdText = q === 1 ? `${p}${d === 2 ? "²" : "³"} = ${Math.pow(p, d)}` : `${kd} = {{${Math.pow(p, d)}/${Math.pow(q, d)}}}`;
      const shown = tier === 3 ? `${num(sf(ansVal, 6))}… ≈ ${s3(ansVal)}` : big(ansVal);
      return {
        prompt: `${ctx.intro} ${lenText} The ${ctx.what} of ${givenName} is ${big(known)} ${unit}. Work out the ${ctx.what} of ${findName}.${tier === 3 ? " Give your answer correct to 3 significant figures." : ""}`,
        answer,
        solution: [
          `Length scale factor from ${givenName} to ${findName}: k = ${kT}.`,
          `${isVol ? "Volume" : "Area"} scale factor = k${d === 2 ? "²" : "³"} = ${kdText}.`,
          `${ctx.what[0].toUpperCase() + ctx.what.slice(1)} of ${findName} = ${big(known)} × ${q === 1 ? Math.pow(p, d) : `{{${Math.pow(p, d)}/${Math.pow(q, d)}}}`} = ${shown} ${unit}.`,
        ],
        hint: isVol ? "Lengths scale by k, so volumes scale by k³." : "Lengths scale by k, so areas scale by k².",
        traps: numTraps(tier === 3 ? sf(ansVal) : ansVal, [
          [sf((known * p) / q, 6), `You multiplied by the length scale factor only. ${isVol ? "Volume" : "Area"} needs k${d === 2 ? "²" : "³"}.`],
          [sf((known * Math.pow(p, 5 - d)) / Math.pow(q, 5 - d), 6), d === 3 ? "You squared k — that's for areas. Volume uses k³." : "You cubed k — that's for volumes. Area uses k²."],
        ]),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.back-to-lengths`,
    topicId: T,
    title: "From areas or volumes back to lengths (√ and ∛)",
    level: 3,
    guideRef: "area-volume-scale",
    generate(rng, tier) {
      const variants = tier === 1 ? (["area-len", "vol-len"] as const) : tier === 2 ? (["area-len", "vol-len", "area-vol"] as const) : (["area-vol", "vol-area", "vol-len"] as const);
      const vr = rng.pick(variants);
      const usesVolRatio = vr === "vol-len" || vr === "vol-area";
      const ratios: Array<[number, number]> = tier === 1
        ? (usesVolRatio ? [[2, 1], [3, 1], [1, 2]] : [[2, 1], [3, 1], [1, 2], [1, 3], [4, 1]])
        : usesVolRatio ? [[3, 2], [2, 3], [4, 3], [3, 4], [5, 2]] : [[3, 2], [2, 3], [4, 3], [3, 4], [5, 2], [2, 5], [5, 3], [3, 5], [5, 4]];
      const [p, q] = rng.pick(ratios); // lengths P : Q = q : p (k = p/q from P to Q)
      const u = rng.int(1, usesVolRatio ? 4 : 8);
      const w = tier === 1 ? rng.int(1, 5) : rng.int(1, 6);
      const solid = rng.pick(["bottles", "cones", "cylinders", "pyramids", "statues"]);
      const len = rng.pick(["height", "width"]);
      const kT = fracM(p, q);

      if (vr === "area-len") {
        const A1 = q * q * u, A2 = p * p * u, L1 = q * w, L2 = p * w;
        const shape = rng.pick(["Two similar triangles", "Two similar photo frames", "Two similar flags", "Two similar kites"]);
        return {
          prompt: `${shape}, P and Q, have areas ${A1} cm² and ${A2} cm². The ${len} of P is ${L1} cm. Work out the ${len} of Q.`,
          answer: ansExact(L2, "cm"),
          solution: [`Area scale factor = {{${A2}/${A1}}} = ${fracM(p * p, q * q)}.`, `Length scale factor k = square root of that = ${kT}.`, `${len[0].toUpperCase() + len.slice(1)} of Q = ${L1} × ${kT} = ${L2} cm.`],
          hint: "The ratio of areas is k². Undo the square to get the length scale factor.",
          traps: numTraps(L2, [[clean((L1 * A2) / A1), "You used the area ratio on a length. Lengths scale by k, which is the square root of the area ratio."]]),
        };
      }
      if (vr === "vol-len") {
        const V1 = q * q * q * u, V2 = p * p * p * u, L1 = q * w, L2 = p * w;
        return {
          prompt: `Two similar ${solid}, P and Q, have volumes ${big(V1)} cm³ and ${big(V2)} cm³. The ${len} of P is ${L1} cm. Work out the ${len} of Q.`,
          answer: ansExact(L2, "cm"),
          solution: [`Volume scale factor = {{${V2}/${V1}}} = ${fracM(p * p * p, q * q * q)}.`, `Length scale factor k = cube root of that = ${kT}.`, `${len[0].toUpperCase() + len.slice(1)} of Q = ${L1} × ${kT} = ${L2} cm.`],
          hint: "The ratio of volumes is k³. Take the cube root to get k.",
          traps: numTraps(L2, [
            [clean((L1 * V2) / V1), "You used the volume ratio on a length. Lengths scale by k = ∛(volume ratio)."],
            [sf(L1 * Math.sqrt(V2 / V1), 6), "You took the square root. Volumes scale by k³, so use the cube root."],
          ]),
        };
      }
      if (vr === "area-vol") {
        const A1 = q * q * u, A2 = p * p * u;
        const v = rng.int(1, 6);
        const V1 = q * q * q * v, V2 = p * p * p * v;
        return {
          prompt: `Two similar ${solid}, P and Q, have surface areas ${big(A1)} cm² and ${big(A2)} cm². The volume of P is ${big(V1)} cm³. Work out the volume of Q.`,
          answer: ansExact(V2, "cm³"),
          solution: [
            `Area scale factor k² = {{${A2}/${A1}}} = ${fracM(p * p, q * q)}, so k = ${kT}.`,
            `Volume scale factor k³ = ${q === 1 ? `${p}³ = ${p * p * p}` : `{{(${p}/${q})^3}} = {{${p * p * p}/${q * q * q}}}`}.`,
            `Volume of Q = ${big(V1)} × ${fracM(p * p * p, q * q * q)} = ${big(V2)} cm³.`,
          ],
          hint: "Go area → length → volume: square root, then cube.",
          traps: numTraps(V2, [[clean((V1 * A2) / A1), "You used the area ratio for volume. Find k first (square root), then cube it."], [clean((V1 * p) / q), "That's only k. Volumes scale by k³."]]),
        };
      }
      // vol-area
      const V1 = q * q * q * u, V2 = p * p * p * u;
      const v = rng.int(2, 9);
      const S1 = q * q * v, S2 = p * p * v;
      return {
        prompt: `Two similar ${solid}, P and Q, have volumes ${big(V1)} cm³ and ${big(V2)} cm³. The surface area of P is ${big(S1)} cm². Work out the surface area of Q.`,
        answer: ansExact(S2, "cm²"),
        solution: [
          `Volume scale factor k³ = {{${V2}/${V1}}} = ${fracM(p * p * p, q * q * q)}, so k = ${kT}.`,
          `Area scale factor k² = ${q === 1 ? `${p}² = ${p * p}` : `{{(${p}/${q})^2}} = {{${p * p}/${q * q}}}`}.`,
          `Surface area of Q = ${big(S1)} × ${fracM(p * p, q * q)} = ${big(S2)} cm².`,
        ],
        hint: "Go volume → length → area: cube root, then square.",
        traps: numTraps(S2, [[clean((S1 * V2) / V1), "You used the volume ratio for area. Cube-root it to get k, then square."], [clean((S1 * p) / q), "That's only k. Areas scale by k²."]]),
      };
    },
  },

  // -------------------------------------------------------------------------
  {
    id: `${T}.mass-capacity-paint`,
    topicId: T,
    title: "Similar solids in context: mass, capacity and paint",
    level: 3,
    guideRef: "area-volume-scale",
    generate(rng, tier) {
      const kinds = tier === 1 ? (["mass", "capacity", "paint"] as const) : tier === 2 ? (["mass", "capacity", "paint", "reverse"] as const) : (["mass", "capacity", "paint", "reverse", "area-mass"] as const);
      const kind = rng.pick(kinds);
      const exactRatios: Array<[number, number]> = tier === 1 ? [[2, 1], [3, 1]] : [[3, 2], [4, 3], [5, 2], [5, 3], [2, 1], [3, 1]];
      const rough = tier === 3;

      if (kind === "paint") {
        const thing = rng.pick(["boat", "car", "train carriage", "house", "statue"]);
        if (tier === 1) {
          const k = rng.int(2, 5), P = rng.int(3, 25) * 2;
          const ans = P * k * k;
          return {
            prompt: `A model ${thing} needs ${P} ml of paint to cover it. A similar model ${thing} is ${k} times as long. How much paint does the larger model need?`,
            answer: ansExact(ans, "ml"),
            solution: ["Paint covers *surface area*, so use the area scale factor.", `k = ${k}, so k² = ${k * k}.`, `${P} × ${k * k} = ${ans} ml.`],
            hint: "Is paint about length, area or volume?",
            traps: numTraps(ans, [[P * k, "Paint covers an area, so multiply by k², not k."], [P * k * k * k, "Paint covers surface area (k²), not volume (k³)."]]),
          };
        }
        const k = rng.pick(tier === 2 ? [10, 20, 25, 50] : [12, 15, 24, 30, 40]);
        const P = tier === 2 ? rng.int(4, 30) : rng.int(12, 60) / 2;
        const litres = (P * k * k) / 1000;
        return {
          prompt: `A model ${thing} is made to a scale of 1 : ${k}. The model needs ${num(P)} ml of paint. The real ${thing} is painted with the same thickness of paint. How many litres of paint does the real ${thing} need?${tier === 3 ? " Give your answer correct to 3 significant figures." : ""}`,
          answer: tier === 3 ? ans3(litres, "litres") : ansExact(clean(litres), "litres"),
          solution: [
            `Length scale factor k = ${k}, so area scale factor k² = ${k * k}.`,
            `Paint = ${num(P)} × ${k * k} = ${big(clean(P * k * k))} ml.`,
            `${big(clean(P * k * k))} ml ÷ 1000 = ${tier === 3 ? `${num(sf(litres, 6))} ≈ ${s3(litres)}` : num(clean(litres))} litres.`,
          ],
          hint: "Paint depends on surface area — and don't forget 1 litre = 1000 ml.",
          traps: numTraps(tier === 3 ? sf(litres) : clean(litres), [
            [clean((P * k) / 1000), "Paint covers area: multiply by k², not k."],
            [clean(P * k * k), "That's in ml — convert to litres (÷ 1000)."],
            [clean((P * k * k * k) / 1000), "Paint is about surface area (k²), not volume (k³)."],
          ]),
        };
      }

      // Heights / masses for the volume-based contexts.
      let [p, q] = rng.pick(exactRatios);
      let w = rng.int(2, 6);
      if (rough) {
        [p, q] = rng.pick([[7, 4], [5, 3], [8, 5], [9, 5], [7, 5], [11, 6]] as Array<[number, number]>);
        w = rng.int(2, 4);
      }
      const h1 = q * w, h2 = p * w;
      const k3 = Math.pow(p / q, 3);

      if (kind === "mass") {
        const item = rng.pick(["Merlion statues", "bronze elephants", "chocolate Easter eggs", "wax candles", "glass paperweights"]);
        const unit = item.startsWith("chocolate") || item.startsWith("wax") || item.startsWith("glass") ? "g" : "kg";
        const u = rng.int(2, unit === "g" ? 40 : 6);
        const m1 = rough ? (unit === "g" ? rng.int(40, 400) : rng.int(2, 30)) : u * q * q * q;
        const m2 = m1 * k3;
        return {
          prompt: `Two ${item} are mathematically similar and made of the same material. The smaller one is ${h1} cm tall and has a mass of ${m1} ${unit}. The larger one is ${h2} cm tall. Work out the mass of the larger one.${rough ? " Give your answer correct to 3 significant figures." : ""}`,
          answer: rough ? ans3(m2, unit) : ansExact(clean(m2), unit),
          solution: [
            "Same material, so mass is proportional to volume: use k³.",
            `k = {{${h2}/${h1}}} = ${fracM(p, q)}, so k³ = ${q === 1 ? `${p * p * p}` : `{{${p * p * p}/${q * q * q}}}`}.`,
            `Mass = ${m1} × ${q === 1 ? p * p * p : `{{${p * p * p}/${q * q * q}}}`} = ${rough ? `${num(sf(m2, 6))}… ≈ ${s3(m2)}` : big(clean(m2))} ${unit}.`,
          ],
          hint: "Mass depends on volume. What happens to volume when lengths are multiplied by k?",
          traps: numTraps(rough ? sf(m2) : clean(m2), [
            [sf((m1 * p) / q, 6), "Mass goes with volume — multiply by k³, not k."],
            [sf((m1 * p * p) / (q * q), 6), "k² is for areas. Mass depends on volume, so use k³."],
          ]),
        };
      }
      if (kind === "capacity") {
        const item = rng.pick(["bottles", "jugs", "flasks", "teapots", "watering cans"]);
        const u = rng.int(2, 12) * 5;
        const c1 = rough ? rng.int(30, 160) * 5 : u * q * q * q;
        const c2 = c1 * k3;
        const toL = tier >= 2 && !rough && c2 >= 1000 && rng.bool();
        const shown = toL ? clean(c2 / 1000) : c2;
        return {
          prompt: `Two ${item} are mathematically similar. The smaller is ${h1} cm tall and holds ${c1} ml. The larger is ${h2} cm tall. How much does the larger one hold? Give your answer in ${toL ? "litres" : "ml"}${rough ? ", correct to 3 significant figures" : ""}.`,
          answer: rough ? ans3(c2, "ml") : ansExact(clean(shown), toL ? "litres" : "ml"),
          solution: [
            "Capacity is a volume, so use k³.",
            `k = {{${h2}/${h1}}} = ${fracM(p, q)}, so k³ = ${q === 1 ? `${p * p * p}` : `{{${p * p * p}/${q * q * q}}}`}.`,
            `Capacity = ${c1} × ${q === 1 ? p * p * p : `{{${p * p * p}/${q * q * q}}}`} = ${rough ? `${num(sf(c2, 6))}… ≈ ${s3(c2)}` : big(clean(c2))} ml${toL ? ` = ${num(clean(c2 / 1000))} litres` : ""}.`,
          ],
          hint: "Capacity is volume — which power of k?",
          traps: numTraps(rough ? sf(c2) : clean(shown), [
            [sf(((toL ? c1 / 1000 : c1) * p) / q, 6), "Capacity is a volume: multiply by k³, not k."],
            [sf(((toL ? c1 / 1000 : c1) * p * p) / (q * q), 6), "k² is the area factor. Capacity needs k³."],
            ...(toL ? ([[clean(c2), "That's in ml — the question asks for litres."]] as Array<[number, string]>) : []),
          ]),
        };
      }
      if (kind === "reverse") {
        // Masses given → height. Perfect-cube ratio, or 3 s.f. at tier 3.
        const item = rng.pick(["candles", "statues", "chocolate figures", "stone lanterns"]);
        const unit = item === "statues" || item === "stone lanterns" ? "kg" : "g";
        const u = rng.int(1, 5);
        const m1 = rough ? rng.int(50, 400) : u * q * q * q;
        const m2 = rough ? rng.int(m1 + 60, m1 * 6) : u * p * p * p;
        const H2 = h1 * Math.cbrt(m2 / m1);
        return {
          prompt: `Two similar ${item} are made of the same material. The smaller has mass ${m1} ${unit} and height ${h1} cm. The larger has mass ${m2} ${unit}. Work out the height of the larger one.${rough ? " Give your answer correct to 3 significant figures." : ""}`,
          answer: rough ? ans3(H2, "cm") : ansExact(clean(h2), "cm"),
          solution: [
            `Mass ∝ volume, so the volume scale factor is {{${m2}/${m1}}}${rough ? "" : ` = ${fracM(p * p * p, q * q * q)}`}.`,
            `k = {{cbrt(${m2}/${m1})}}${rough ? ` = ${num(sf(Math.cbrt(m2 / m1), 6))}…` : ` = ${fracM(p, q)}`}.`,
            `Height = ${h1} × ${rough ? num(sf(Math.cbrt(m2 / m1), 6)) + "…" : fracM(p, q)} = ${rough ? `${num(sf(H2, 6))}… ≈ ${s3(H2)}` : num(h2)} cm.`,
          ],
          hint: "The mass ratio is the volume ratio, k³. Undo the cube.",
          traps: numTraps(rough ? sf(H2) : clean(h2), [
            [sf((h1 * m2) / m1, 6), "Heights scale by k, the *cube root* of the mass ratio."],
            [sf(h1 * Math.sqrt(m2 / m1), 6), "Square root is for areas. Mass ratio = k³, so take the cube root."],
          ]),
        };
      }
      // area-mass (tier 3): surface areas → mass.
      const item = rng.pick(["chocolate eggs", "solid glass spheres", "wax candles", "clay pots"]);
      const [pp, qq] = rng.pick([[3, 2], [4, 3], [5, 3], [5, 4], [5, 2]] as Array<[number, number]>);
      const v = rng.int(2, 9);
      const S1 = qq * qq * v * 4, S2 = pp * pp * v * 4;
      const m1 = rng.int(4, 40) * 5;
      const m2 = (m1 * pp * pp * pp) / (qq * qq * qq);
      return {
        prompt: `Two ${item} are mathematically similar and made of the same material. Their surface areas are ${S1} cm² and ${S2} cm². The smaller one has a mass of ${m1} g. Work out the mass of the larger one. Give your answer correct to 3 significant figures.`,
        answer: ans3(m2, "g"),
        solution: [
          `Area scale factor k² = {{${S2}/${S1}}} = {{${pp * pp}/${qq * qq}}}, so k = {{${pp}/${qq}}}.`,
          `Mass ∝ volume, so use k³ = {{${pp * pp * pp}/${qq * qq * qq}}}.`,
          `Mass = ${m1} × {{${pp * pp * pp}/${qq * qq * qq}}} = ${num(sf(m2, 6))}… ≈ ${s3(m2)} g.`,
        ],
        hint: "Area ratio → length ratio (square root) → volume ratio (cube).",
        traps: numTraps(sf(m2), [
          [sf((m1 * S2) / S1, 6), "You used the area ratio for mass. Mass goes with volume: find k, then cube it."],
          [sf((m1 * pp) / qq, 6), "That's only k. Mass scales by k³."],
        ]),
      };
    },
  },
];

