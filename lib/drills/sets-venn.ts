// Procedural skill drills for "sets-venn" (Year 11, Edexcel 4MA1 Higher — Unit 9).
//
// Every Venn question is built from the region counts first (centre outwards), so
// all the information in the prompt is consistent and every answer is an exact
// integer or a simplified fraction. Diagrams are drawn from the same counts.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { frac, gcd, lcm, num, poly, indexForm, simplify } from "./helpers.ts";
import { makeRng } from "./rng.ts";

const T = "sets-venn";

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

const sum = (xs: readonly number[]) => xs.reduce((a, b) => a + b, 0);
const prod = (xs: readonly number[]) => xs.reduce((a, b) => a * b, 1);

/** Bounded rejection loop; falls back to fixed seeds so it is always deterministic. */
function attempt(make: (r: Rng) => DrillItem | null, rng: Rng): DrillItem {
  for (let i = 0; i < 600; i++) {
    const x = make(rng);
    if (x) return x;
  }
  for (let s = 1; s < 5000; s++) {
    const x = make(makeRng(s));
    if (x) return x;
  }
  throw new Error("sets-venn drill: no valid item");
}

/** Plain-text algebra with a real minus sign: "2x − 3". */
const alg = (s: string) => s.replace(/ - /g, " − ").replace(/^-/, "−");

/** Bracket an expression only when it has more than one term. */
const wrapE = (e: string) => (/ [+-] /.test(e) ? `(${e})` : e);

/** "4 + 7 = 11", or just "11" when there is one part. */
const addUp = (parts: readonly number[], sep = " + ") => (parts.length > 1 ? `${parts.join(sep)} = ${sum(parts)}` : `${sum(parts)}`);
/** Product version of addUp. */
const mulUp = (parts: readonly number[]) => (parts.length > 1 ? `${parts.join(" × ")} = ${prod(parts)}` : `${prod(parts)}`);
/** "take Art" + "take Drama" → "take Art and Drama". */
function both2(v1: string, v2: string): string {
  const w = v1.split(" ")[0];
  return v2.startsWith(w + " ") ? `${v1} and ${v2.slice(w.length + 1)}` : `${v1} and ${v2}`;
}

/** A set written out: {2, 4, 6}. */
const setStr = (xs: readonly number[]) => `{${xs.join(", ")}}`;

/** Fraction answer in simplest form (keyed as such). */
function fracAns(n: number, d: number) {
  const [a, b] = simplify(n, d);
  return { type: "fraction" as const, n: a, d: b, simplest: true, display: frac(a, b) };
}

/** Fraction traps: dropped if invalid, equal to the answer, or repeated. */
function fracTraps(n: number, d: number, cands: Array<[number, number, string]>): Trap[] {
  const out: Trap[] = [];
  const used = [n / d];
  for (const [a, b, feedback] of cands) {
    if (b <= 0 || a <= 0 || a >= b) continue;
    if (used.some((u) => Math.abs(u - a / b) < 1e-9)) continue;
    used.push(a / b);
    const [x, y] = simplify(a, b);
    out.push({ spec: { type: "fraction", n: x, d: y }, feedback });
  }
  return out;
}

/** Number traps: dropped if non-positive, equal to the answer, or repeated. */
function numTraps(answer: number, cands: Array<[number, string]>): Trap[] {
  const out: Trap[] = [];
  const used = [answer];
  for (const [v, feedback] of cands) {
    if (!Number.isInteger(v) || v < 0 || used.includes(v)) continue;
    used.push(v);
    out.push({ spec: { type: "number", value: v }, feedback });
  }
  return out;
}

// ---------------------------------------------------------------------------
// SVG Venn diagrams
// ---------------------------------------------------------------------------

const FONT = `font-family="sans-serif" fill="#1f2937"`;

/** Several lines of text centred on (x, y). */
function lines(x: number, y: number, rows: readonly string[], size = 14): string {
  const gap = size + 3;
  const top = y - ((rows.length - 1) * gap) / 2;
  return rows
    .map((t, i) => `<text x="${x}" y="${(top + i * gap + size / 3).toFixed(1)}" font-size="${size}" ${FONT} text-anchor="middle">${t}</text>`)
    .join("");
}

/**
 * Two-set Venn diagram. vals = [A only, A and B, B only, outside], each a list of
 * text rows (one row for a count, several for prime factors).
 */
function venn2(labels: readonly [string, string], vals: readonly (readonly string[])[], aria: string, size = 14): string {
  const pos: Array<[number, number]> = [[92, 104], [160, 104], [228, 104], [286, 176]];
  return (
    `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}">` +
    `<rect x="0" y="0" width="320" height="200" fill="#ffffff"/>` +
    `<rect x="10" y="10" width="300" height="180" fill="none" stroke="#334155" stroke-width="1.5"/>` +
    `<text x="20" y="30" font-size="15" ${FONT}>ξ</text>` +
    `<circle cx="125" cy="100" r="66" fill="#c7d2fe" fill-opacity="0.5" stroke="#1f2937" stroke-width="2"/>` +
    `<circle cx="195" cy="100" r="66" fill="#fde68a" fill-opacity="0.5" stroke="#1f2937" stroke-width="2"/>` +
    `<text x="66" y="40" font-size="15" font-weight="700" ${FONT} text-anchor="middle">${labels[0]}</text>` +
    `<text x="254" y="40" font-size="15" font-weight="700" ${FONT} text-anchor="middle">${labels[1]}</text>` +
    vals.map((v, i) => lines(pos[i][0], pos[i][1], v, size)).join("") +
    `</svg>`
  );
}

/** Region keys for three sets, as bit strings "abc" (1 = inside). */
const R3 = ["100", "010", "001", "110", "101", "011", "111", "000"] as const;
type R3Key = (typeof R3)[number];
const R3POS: Record<R3Key, [number, number]> = {
  "100": [100, 92], "010": [240, 92], "001": [170, 222], "110": [170, 80],
  "101": [124, 160], "011": [216, 160], "111": [170, 136], "000": [306, 252],
};
const R3NAME = (L: readonly string[]): Record<R3Key, string> => ({
  "100": `${L[0]} only`, "010": `${L[1]} only`, "001": `${L[2]} only`,
  "110": `${L[0]} and ${L[1]} only`, "101": `${L[0]} and ${L[2]} only`, "011": `${L[1]} and ${L[2]} only`,
  "111": "all three", "000": "none of them",
});

function venn3(labels: readonly [string, string, string], vals: Record<R3Key, readonly string[]>, aria: string, size = 14): string {
  return (
    `<svg viewBox="0 0 340 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}">` +
    `<rect x="0" y="0" width="340" height="280" fill="#ffffff"/>` +
    `<rect x="10" y="10" width="320" height="260" fill="none" stroke="#334155" stroke-width="1.5"/>` +
    `<text x="20" y="30" font-size="15" ${FONT}>ξ</text>` +
    `<circle cx="130" cy="110" r="70" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/>` +
    `<circle cx="210" cy="110" r="70" fill="#fde68a" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/>` +
    `<circle cx="170" cy="180" r="70" fill="#bbf7d0" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/>` +
    `<text x="56" y="48" font-size="15" font-weight="700" ${FONT} text-anchor="middle">${labels[0]}</text>` +
    `<text x="284" y="48" font-size="15" font-weight="700" ${FONT} text-anchor="middle">${labels[1]}</text>` +
    `<text x="244" y="262" font-size="15" font-weight="700" ${FONT} text-anchor="middle">${labels[2]}</text>` +
    R3.map((k) => lines(R3POS[k][0], R3POS[k][1], vals[k], size)).join("") +
    `</svg>`
  );
}

function venn2Counts(labels: readonly [string, string], c: readonly number[]): string {
  const aria = `Venn diagram with sets ${labels[0]} and ${labels[1]} inside the universal set. ${labels[0]} only: ${c[0]}. Both ${labels[0]} and ${labels[1]}: ${c[1]}. ${labels[1]} only: ${c[2]}. Outside both circles: ${c[3]}.`;
  return venn2(labels, c.map((x) => [String(x)]), aria);
}

function venn3Counts(labels: readonly [string, string, string], c: Record<R3Key, number>): string {
  const names = R3NAME(labels);
  const aria = `Venn diagram with three overlapping sets ${labels.join(", ")}. ` + R3.map((k) => `${names[k]}: ${c[k]}`).join(". ") + ".";
  const vals = {} as Record<R3Key, string[]>;
  for (const k of R3) vals[k] = [String(c[k])];
  return venn3(labels, vals, aria);
}

/** Random three-set region counts (every inner region ≥ 1). */
function counts3(r: Rng, tier: 1 | 2 | 3): Record<R3Key, number> {
  const hi = tier === 1 ? 9 : 14;
  const c = {} as Record<R3Key, number>;
  for (const k of R3) c[k] = k === "000" ? r.int(tier === 1 ? 1 : 0, hi) : k.split("").filter((b) => b === "1").length === 1 ? r.int(2, hi + 4) : r.int(1, hi - 3);
  return c;
}
const in3 = (k: R3Key, i: number) => k[i] === "1";

// ---------------------------------------------------------------------------
// Contexts
// ---------------------------------------------------------------------------

interface Ctx2 {
  who: string;
  one: string;
  p: string;
  q: string;
  L: [string, string];
}
const CTX2: Ctx2[] = [
  { who: "students in Year 11", one: "student", p: "play badminton", q: "play chess", L: ["B", "C"] },
  { who: "people at a hawker centre", one: "person", p: "ordered chendol", q: "ordered roti prata", L: ["C", "R"] },
  { who: "students in a language survey", one: "student", p: "study French", q: "study Spanish", L: ["F", "S"] },
  { who: "commuters at an MRT station", one: "commuter", p: "own a bicycle", q: "own a scooter", L: ["B", "S"] },
  { who: "members of a book club", one: "member", p: "read fantasy", q: "read mysteries", L: ["F", "M"] },
  { who: "students at a CCA fair", one: "student", p: "joined the choir", q: "joined robotics", L: ["C", "R"] },
  { who: "visitors to Sentosa", one: "visitor", p: "went to the beach", q: "rode the cable car", L: ["B", "K"] },
];

interface Ctx3 {
  who: string;
  one: string;
  verbs: [string, string, string];
  L: [string, string, string];
}
const CTX3: Ctx3[] = [
  { who: "Year 11 students", one: "student", verbs: ["take Art", "take Drama", "take Music"], L: ["A", "D", "M"] },
  { who: "people at a fruit stall", one: "person", verbs: ["like durian", "like mango", "like rambutan"], L: ["D", "M", "R"] },
  { who: "members of a sports club", one: "member", verbs: ["swim", "run", "cycle"], L: ["S", "R", "C"] },
  { who: "students in a CCA survey", one: "student", verbs: ["play hockey", "play netball", "do athletics"], L: ["H", "N", "A"] },
];

// ---------------------------------------------------------------------------
// Set expressions (for listing and for reading regions)
// ---------------------------------------------------------------------------

interface Expr2 {
  s: string;
  f: (a: boolean, b: boolean) => boolean;
  words: string;
}
const EXPR2_BASIC: Expr2[] = [
  { s: "A ∩ B", f: (a, b) => a && b, words: "in A **and** in B" },
  { s: "A ∪ B", f: (a, b) => a || b, words: "in A **or** B (or both)" },
  { s: "A′", f: (a) => !a, words: "**not** in A" },
  { s: "B′", f: (_a, b) => !b, words: "**not** in B" },
];
const EXPR2_MORE: Expr2[] = [
  { s: "A′ ∩ B", f: (a, b) => !a && b, words: "not in A but in B" },
  { s: "A ∩ B′", f: (a, b) => a && !b, words: "in A but not in B" },
  { s: "(A ∪ B)′", f: (a, b) => !(a || b), words: "in neither A nor B" },
  { s: "(A ∩ B)′", f: (a, b) => !(a && b), words: "not in both A and B" },
  { s: "A′ ∪ B", f: (a, b) => !a || b, words: "not in A, or in B" },
  { s: "A′ ∩ B′", f: (a, b) => !a && !b, words: "in neither A nor B" },
];
// Region order: A only, A and B, B only, outside.
const REG2: Array<[boolean, boolean]> = [[true, false], [true, true], [false, true], [false, false]];
const REG2NAME = (L: readonly string[]) => [`${L[0]} only`, `${L[0]} ∩ ${L[1]}`, `${L[1]} only`, `outside both`];

interface Expr3 {
  s: string;
  f: (a: boolean, b: boolean, c: boolean) => boolean;
}
const EXPR3: Expr3[] = [
  { s: "A ∩ B ∩ C", f: (a, b, c) => a && b && c },
  { s: "A ∩ B ∩ C′", f: (a, b, c) => a && b && !c },
  { s: "A ∩ C", f: (a, _b, c) => a && c },
  { s: "(A ∪ B) ∩ C", f: (a, b, c) => (a || b) && c },
  { s: "A′ ∩ B′ ∩ C", f: (a, b, c) => !a && !b && c },
  { s: "(A ∪ B ∪ C)′", f: (a, b, c) => !(a || b || c) },
  { s: "A ∩ (B ∪ C)", f: (a, b, c) => a && (b || c) },
  { s: "B′ ∩ C′", f: (_a, b, c) => !b && !c },
  { s: "A ∪ (B ∩ C)", f: (a, b, c) => a || (b && c) },
  { s: "(A ∩ B)′ ∩ C", f: (a, b, c) => !(a && b) && c },
];

// Sets of whole numbers for the listing drill.
interface NumSet {
  desc: string;
  has: (x: number, N: number) => boolean;
}
const isSquare = (x: number) => Number.isInteger(Math.sqrt(x));
const isPrimeN = (x: number) => {
  if (x < 2) return false;
  for (let p = 2; p * p <= x; p++) if (x % p === 0) return false;
  return true;
};
function numSets(r: Rng): NumSet[] {
  const k1 = r.pick([2, 3, 4, 5]);
  const k2 = r.pick([3, 4, 5, 6].filter((k) => k !== k1));
  const f = r.pick([12, 18, 20, 24, 30]);
  const m = r.int(6, 12);
  return [
    { desc: `multiples of ${k1}`, has: (x) => x % k1 === 0 },
    { desc: `multiples of ${k2}`, has: (x) => x % k2 === 0 },
    { desc: "prime numbers", has: isPrimeN },
    { desc: "odd numbers", has: (x) => x % 2 === 1 },
    { desc: "even numbers", has: (x) => x % 2 === 0 },
    { desc: "square numbers", has: isSquare },
    { desc: `factors of ${f}`, has: (x) => f % x === 0 },
    { desc: `numbers greater than ${m}`, has: (x) => x > m },
  ];
}

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

export const drills: Drill[] = [
  // 1 ── List the members of a set ──────────────────────────────────────────
  {
    id: `${T}.list-members`,
    topicId: T,
    title: "List the members of a set like A ∩ B or A′",
    level: 1,
    guideRef: "set-notation",
    generate(rng, tier) {
      return attempt((r) => {
        const N = tier === 1 ? r.pick([10, 12]) : r.pick([12, 15, 16, 18, 20]);
        const pool = numSets(r);
        const [SA, SB, SC] = r.shuffle(pool).slice(0, 3);
        const U = Array.from({ length: N }, (_, i) => i + 1);
        const A = U.filter((x) => SA.has(x, N));
        const B = U.filter((x) => SB.has(x, N));
        const C = U.filter((x) => SC.has(x, N));
        if (A.length < 2 || B.length < 2 || A.length === N || B.length === N) return null;
        if (A.every((x) => B.includes(x)) || B.every((x) => A.includes(x))) return null;
        let s: string;
        let pred: (x: number) => boolean;
        let words: string;
        let useC = false;
        if (tier === 3 && r.bool(0.6)) {
          if (C.length < 2 || C.length === N) return null;
          useC = true;
          const e = r.pick(EXPR3);
          s = e.s;
          pred = (x) => e.f(A.includes(x), B.includes(x), C.includes(x));
          words = "Test each number in ξ against A, B and C in turn.";
        } else {
          const e = r.pick(tier === 1 ? EXPR2_BASIC : [...EXPR2_BASIC, ...EXPR2_MORE]);
          s = e.s;
          pred = (x) => e.f(A.includes(x), B.includes(x));
          words = `${s} means the numbers that are ${e.words}.`;
        }
        const ans = U.filter(pred);
        if (ans.length < 1 || ans.length > 9) return null;
        const prompt =
          `- ξ = {whole numbers from 1 to ${N}}\n- A = {${SA.desc}}\n- B = {${SB.desc}}` +
          (useC ? `\n- C = {${SC.desc}}` : "") +
          `\n\nList the members of the set ${s}.`;
        const inter = A.filter((x) => B.includes(x));
        const union = U.filter((x) => A.includes(x) || B.includes(x));
        const traps: Trap[] = [];
        const same = (p: number[]) => p.length === ans.length && p.every((x, i) => x === ans[i]);
        if (s === "A ∩ B" && !same(union)) traps.push({ spec: { type: "list", values: union }, feedback: "That's A ∪ B (in A **or** B). ∩ means in **both** sets." });
        if (s === "A ∪ B" && inter.length && !same(inter)) traps.push({ spec: { type: "list", values: inter }, feedback: "That's A ∩ B (in both). ∪ means in A **or** B — collect everything from either set." });
        if (s === "A′" && !same(A)) traps.push({ spec: { type: "list", values: A }, feedback: "Those are the members of A. The dash ′ means the complement: everything in ξ that is **not** in A." });
        return {
          prompt,
          answer: { type: "list", values: ans, display: setStr(ans) },
          solution: [
            `A = ${setStr(A)}`,
            `B = ${setStr(B)}` + (useC ? `, C = ${setStr(C)}` : ""),
            words,
            `${s} = ${setStr(ans)}`,
          ],
          hint: "Write out each set in full first, then check every number in ξ against the condition.",
          traps,
        };
      }, rng);
    },
  },

  // 2 ── n(A ∪ B) and friends ───────────────────────────────────────────────
  {
    id: `${T}.count-with-notation`,
    topicId: T,
    title: "Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
    level: 1,
    guideRef: "set-notation",
    generate(rng, tier) {
      return attempt((r) => {
        const big = tier === 1 ? 30 : 80;
        const c = r.int(2, tier === 1 ? 9 : 25);
        const a = c + r.int(2, tier === 1 ? 12 : 30);
        const b = c + r.int(2, tier === 1 ? 12 : 30);
        const out = r.int(tier === 1 ? 2 : 1, tier === 1 ? 10 : 30);
        const U = a + b - c + out;
        if (U > big + 30 || a === b) return null;
        const union = a + b - c;
        const kinds = tier === 1 ? ["union", "comp"] : tier === 2 ? ["union", "neither", "aOnly", "comp"] : ["inter", "neither", "aOnly", "notBoth"];
        const k = r.pick(kinds);
        const facts = [`n(ξ) = ${U}`, `n(A) = ${a}`, `n(B) = ${b}`];
        let ask: string, ans: number, steps: string[];
        let traps: Trap[] = [];
        if (k === "union") {
          facts.push(`n(A ∩ B) = ${c}`);
          ask = "n(A ∪ B)";
          ans = union;
          steps = [`n(A ∪ B) = n(A) + n(B) − n(A ∩ B)`, `= ${a} + ${b} − ${c} = ${union}`, "The overlap is subtracted once because it was counted in both n(A) and n(B)."];
          traps = numTraps(ans, [[a + b, "You counted the overlap twice — subtract n(A ∩ B) once."]]);
        } else if (k === "comp") {
          facts.push(`n(A ∩ B) = ${c}`);
          ask = "n(A′)";
          ans = U - a;
          steps = [`A′ is everything in ξ that is not in A.`, `n(A′) = n(ξ) − n(A) = ${U} − ${a} = ${ans}`];
          traps = numTraps(ans, [[b - c, "That's only the part of B outside A — A′ also includes the region outside both circles."]]);
        } else if (k === "neither") {
          facts.push(`n(A ∩ B) = ${c}`);
          ask = "n((A ∪ B)′)";
          ans = out;
          steps = [`n(A ∪ B) = ${a} + ${b} − ${c} = ${union}`, `n((A ∪ B)′) = n(ξ) − n(A ∪ B) = ${U} − ${union} = ${out}`];
          traps = numTraps(ans, [[U - a - b, "You subtracted the overlap twice — find n(A ∪ B) first."]]);
        } else if (k === "aOnly") {
          facts.push(`n(A ∩ B) = ${c}`);
          ask = "n(A ∩ B′)";
          ans = a - c;
          steps = [`A ∩ B′ means in A but not in B: the 'A only' region.`, `n(A ∩ B′) = n(A) − n(A ∩ B) = ${a} − ${c} = ${ans}`];
          traps = numTraps(ans, [[U - b, "That's n(B′), which also includes the region outside both circles."]]);
        } else if (k === "inter") {
          facts.push(`n(A ∪ B) = ${union}`);
          ask = "n(A ∩ B)";
          ans = c;
          steps = [`n(A ∪ B) = n(A) + n(B) − n(A ∩ B)`, `${union} = ${a} + ${b} − n(A ∩ B)`, `n(A ∩ B) = ${a + b} − ${union} = ${c}`];
          traps = numTraps(ans, [[a + b - U, "You used n(ξ) instead of n(A ∪ B) — not everyone is in A or B."]]);
        } else {
          facts.push(`n(A ∩ B) = ${c}`);
          ask = "n((A ∩ B)′)";
          ans = U - c;
          steps = [`(A ∩ B)′ is everything except the overlap.`, `n((A ∩ B)′) = n(ξ) − n(A ∩ B) = ${U} − ${c} = ${ans}`];
          traps = numTraps(ans, [[out, "That's (A ∪ B)′ — outside both. (A ∩ B)′ is everything except the overlap."]]);
        }
        return {
          prompt: `${r.shuffle(facts.slice(1)).reduce((acc, f) => `${acc}\n- ${f}`, `- ${facts[0]}`)}\n\nWork out ${ask}.`,
          answer: { type: "number", value: ans },
          solution: steps,
          hint: "Sketch a two-circle Venn diagram and fill it in from the overlap outwards.",
          traps,
        };
      }, rng);
    },
  },

  // 3 ── Read a Venn diagram using set notation ─────────────────────────────
  {
    id: `${T}.read-regions`,
    topicId: T,
    title: "Read n(A′ ∩ B), n((A ∪ B)′)… from a Venn diagram",
    level: 1,
    guideRef: "venn-diagrams",
    generate(rng, tier) {
      return attempt((r) => {
        if (tier === 3) {
          const c = counts3(r, tier);
          const e = r.pick(EXPR3);
          const keys = R3.filter((k) => e.f(in3(k, 0), in3(k, 1), in3(k, 2)));
          const ans = sum(keys.map((k) => c[k]));
          const total = sum(R3.map((k) => c[k]));
          if (ans === 0) return null;
          const names = R3NAME(["A", "B", "C"]);
          return {
            prompt: `The Venn diagram shows the number of elements in each region of the sets A, B and C. n(ξ) = ${total}.\n\nWork out n(${e.s}).`,
            diagram: venn3Counts(["A", "B", "C"], c),
            answer: { type: "number", value: ans },
            solution: [
              `${e.s} is made of the region${keys.length > 1 ? "s" : ""}: ${keys.map((k) => names[k]).join("; ")}.`,
              `n(${e.s}) = ${addUp(keys.map((k) => c[k]))}`,
            ],
            hint: "Shade the region on a sketch first: ∩ keeps only what is in both, ∪ takes everything from either, ′ flips inside and outside.",
            traps: numTraps(ans, [[total - ans, "That's the complement of the set you were asked for — everything outside it."]]),
          };
        }
        const c = [r.int(2, 15), r.int(1, 12), r.int(2, 15), r.int(tier === 1 ? 1 : 0, 12)];
        const e = r.pick(tier === 1 ? EXPR2_BASIC : [...EXPR2_BASIC, ...EXPR2_MORE]);
        const idx = [0, 1, 2, 3].filter((i) => e.f(...REG2[i]));
        const ans = sum(idx.map((i) => c[i]));
        const total = sum(c);
        if (ans === 0) return null;
        const names = REG2NAME(["A", "B"]);
        return {
          prompt: `The Venn diagram shows the number of elements in each region of the sets A and B. n(ξ) = ${total}.\n\nWork out n(${e.s}).`,
          diagram: venn2Counts(["A", "B"], c),
          answer: { type: "number", value: ans },
          solution: [
            `${e.s} means the elements that are ${e.words}.`,
            `Regions: ${idx.map((i) => names[i]).join("; ")}.`,
            `n(${e.s}) = ${addUp(idx.map((i) => c[i]))}`,
          ],
          hint: "Say the notation in words first, then shade the matching regions.",
          traps: numTraps(ans, [[total - ans, "That's the complement — the regions you were *not* asked for."]]),
        };
      }, rng);
    },
  },

  // 4 ── Two-set problems in context ────────────────────────────────────────
  {
    id: `${T}.two-set-context`,
    topicId: T,
    title: "Fill in a two-set Venn diagram from a story",
    level: 2,
    guideRef: "venn-diagrams",
    generate(rng, tier) {
      return attempt((r) => {
        const ctx = r.pick(CTX2);
        const both = r.int(2, tier === 1 ? 10 : 25);
        const pOnly = r.int(2, tier === 1 ? 15 : 35);
        const qOnly = r.int(2, tier === 1 ? 15 : 35);
        const none = r.int(1, tier === 1 ? 10 : 20);
        const N = both + pOnly + qOnly + none;
        const nP = pOnly + both;
        const nQ = qOnly + both;
        if (pOnly === qOnly) return null;
        const ask = tier === 1 ? "both" : r.pick(tier === 2 ? ["both", "pOnly", "exactlyOne"] : ["exactlyOne", "notBoth", "pNotQ"]);
        const story = `There are ${N} ${ctx.who}.\n\n- ${nP} ${ctx.p}.\n- ${nQ} ${ctx.q}.\n- ${none} ${none === 1 ? "does" : "do"} neither.`;
        const fill = [
          `Let the overlap be x. Then ${ctx.p} only = ${nP} − x and ${ctx.q} only = ${nQ} − x.`,
          `Total: (${nP} − x) + x + (${nQ} − x) + ${none} = ${N}, so ${nP + nQ + none} − x = ${N} and x = ${both}.`,
        ];
        let q: string, ans: number, extra: string;
        let cands: Array<[number, string]> = [];
        if (ask === "both") {
          q = `How many of them ${both2(ctx.p, ctx.q).replace(" and ", " **and** ")}?`;
          ans = both;
          extra = `So ${both} ${both2(ctx.p, ctx.q)}.`;
          cands = [[nP + nQ - N, "You forgot the people who do neither — take them out of the total first."]];
        } else if (ask === "pOnly") {
          q = `How many of them ${ctx.p} only?`;
          ans = pOnly;
          extra = `${ctx.p} only = ${nP} − ${both} = ${pOnly}.`;
          cands = [[nP, `That's everyone who ${ctx.p}, including the overlap. 'Only' means take the overlap away.`], [both, "That's the overlap — 'only' means the part of the circle outside the overlap."]];
        } else if (ask === "exactlyOne") {
          q = `How many of them do exactly one of these?`;
          ans = pOnly + qOnly;
          extra = `Exactly one = ${pOnly} + ${qOnly} = ${ans}.`;
          cands = [[nP + nQ, "That counts the overlap twice — 'exactly one' leaves the overlap out completely."], [N - none, "That includes people who do both. 'Exactly one' means one but not the other."]];
        } else if (ask === "notBoth") {
          q = `How many of them do **not** do both?`;
          ans = N - both;
          extra = `Not both = ${N} − ${both} = ${ans} (this includes those who do neither).`;
          cands = [[pOnly + qOnly, "Don't forget the people who do neither — they also don't do both."]];
        } else {
          q = `${ctx.L[0]} = {${ctx.who.split(" ")[0]} who ${ctx.p}} and ${ctx.L[1]} = {${ctx.who.split(" ")[0]} who ${ctx.q}}. Work out n(${ctx.L[0]} ∩ ${ctx.L[1]}′).`;
          ans = pOnly;
          extra = `${ctx.L[0]} ∩ ${ctx.L[1]}′ is '${ctx.p} but not ${ctx.q}': ${nP} − ${both} = ${pOnly}.`;
          cands = [[nP, `${ctx.L[0]} ∩ ${ctx.L[1]}′ excludes the overlap.`], [N - nQ, `That's ${ctx.L[1]}′, which also includes those who do neither.`]];
        }
        return {
          prompt: `${story}\n\n${q}`,
          answer: { type: "number", value: ans },
          solution: ask === "both" ? fill.concat(extra) : fill.concat(`Regions: ${ctx.p} only ${pOnly}, both ${both}, ${ctx.q} only ${qOnly}, neither ${none}.`, extra),
          hint: "Take out the 'neither' group first. Then n(P) + n(Q) counts the overlap twice — compare it with how many are left.",
          traps: numTraps(ans, cands),
        };
      }, rng);
    },
  },

  // 5 ── Algebra in Venn regions ────────────────────────────────────────────
  {
    id: `${T}.venn-algebra`,
    topicId: T,
    title: "Solve for x when Venn regions contain algebra",
    level: 2,
    guideRef: "venn-diagrams",
    generate(rng, tier) {
      return attempt((r) => {
        const x = r.int(2, tier === 1 ? 8 : 12);
        const co = [0, 1, 2, 3].map(() => r.int(1, tier === 1 ? 2 : 4));
        const k = [0, 1, 2, 3].map(() => (tier === 1 ? r.int(0, 6) : r.int(-6, 8)));
        // The outside region is often just a number.
        if (r.bool(0.5)) co[3] = 0;
        if (co[3] === 0 && k[3] < 1) k[3] = r.int(2, 9);
        const vals = co.map((c, i) => c * x + k[i]);
        if (vals.some((v) => v < 1)) return null;
        if (k.filter((v) => v !== 0).length < 2) return null;
        const exprs = co.map((c, i) => poly([[c, "x"], [k[i], ""]]));
        const total = sum(vals);
        const A = vals[0] + vals[1];
        const B = vals[1] + vals[2];
        const sc = sum(co);
        const sk = sum(k);
        const diagram = venn2(["A", "B"], exprs.map((e) => [alg(e)]), `Venn diagram with sets A and B. A only: ${alg(exprs[0])}. A and B: ${alg(exprs[1])}. B only: ${alg(exprs[2])}. Outside both: ${alg(exprs[3])}.`);
        const eqn = `${poly([[sc, "x"], [sk, ""]])} = ${total}`;
        const mode = tier === 1 ? "x" : tier === 2 ? r.pick(["x", "nA", "nB"]) : r.pick(["fromA", "fromB"]);
        if (mode === "x" || mode === "nA" || mode === "nB") {
          const ans = mode === "x" ? x : mode === "nA" ? A : B;
          const steps = [
            `All the regions add up to n(ξ): {{${exprs.map(wrapE).join(" + ")} = ${total}}}`,
            `Simplify: {{${eqn}}}, so {{${sc}x = ${total - sk}}} and {{x = ${x}}}.`,
          ];
          if (mode === "nA") steps.push(`n(A) = (${alg(exprs[0])}) + (${alg(exprs[1])}) = ${vals[0]} + ${vals[1]} = ${A}`);
          if (mode === "nB") steps.push(`n(B) = (${alg(exprs[1])}) + (${alg(exprs[2])}) = ${vals[1]} + ${vals[2]} = ${B}`);
          return {
            prompt: `The Venn diagram shows the number of elements in each region of the sets A and B.\n\nn(ξ) = ${total}.\n\n${mode === "x" ? "Work out the value of x." : `Work out n(${mode === "nA" ? "A" : "B"}).`}`,
            diagram,
            answer: { type: "number", value: ans },
            solution: steps,
            hint: "Every element of ξ is in exactly one region, so the four regions add up to n(ξ).",
            traps: mode === "x" ? [] : numTraps(ans, [[x, "That's the value of x — now substitute it to find the number in the set."]]),
          };
        }
        // Tier 3: given n(A) or n(B), find n(ξ).
        const useA = mode === "fromA";
        const i0 = useA ? 0 : 1;
        const i1 = useA ? 1 : 2;
        const given = useA ? A : B;
        const sc2 = co[i0] + co[i1];
        const sk2 = k[i0] + k[i1];
        return {
          prompt: `The Venn diagram shows the number of elements in each region of the sets A and B.\n\nn(${useA ? "A" : "B"}) = ${given}.\n\nWork out n(ξ).`,
          diagram,
          answer: { type: "number", value: total },
          solution: [
            `n(${useA ? "A" : "B"}) is the two regions inside circle ${useA ? "A" : "B"}: {{${wrapE(exprs[i0])} + ${wrapE(exprs[i1])} = ${given}}}`,
            `{{${poly([[sc2, "x"], [sk2, ""]])} = ${given}}}, so {{x = ${x}}}.`,
            `Regions: ${vals.join(", ")}. n(ξ) = ${vals.join(" + ")} = ${total}`,
          ],
          hint: `Form an equation using only the regions inside circle ${useA ? "A" : "B"}.`,
          traps: numTraps(total, [[x, "That's x — now substitute into every region and add them up."], [total - vals[3], "You missed the region outside both circles — it's still part of ξ."]]),
        };
      }, rng);
    },
  },

  // 6 ── Three-set problems, centre outwards ────────────────────────────────
  {
    id: `${T}.three-set`,
    topicId: T,
    title: "Fill in a three-set Venn diagram from the centre outwards",
    level: 3,
    guideRef: "venn-diagrams",
    generate(rng, tier) {
      return attempt((r) => {
        const ctx = r.pick(CTX3);
        const c = counts3(r, tier);
        if (c["000"] < 1 && tier < 3) return null;
        const [P, Q, S] = ctx.L;
        const nI = (i: number) => sum(R3.filter((k) => in3(k, i)).map((k) => c[k]));
        const nPair = (i: number, j: number) => sum(R3.filter((k) => in3(k, i) && in3(k, j)).map((k) => c[k]));
        const total = sum(R3.map((k) => c[k]));
        const facts = [
          `${nI(0)} ${ctx.verbs[0]}, ${nI(1)} ${ctx.verbs[1]} and ${nI(2)} ${ctx.verbs[2]}.`,
          `${nPair(0, 1)} ${both2(ctx.verbs[0], ctx.verbs[1])}.`,
          `${nPair(0, 2)} ${both2(ctx.verbs[0], ctx.verbs[2])}.`,
          `${nPair(1, 2)} ${both2(ctx.verbs[1], ctx.verbs[2])}.`,
          `${c["111"]} ${c["111"] === 1 ? "does" : "do"} all three.`,
        ];
        const ask = tier === 1 ? r.pick(["only0", "none"]) : r.pick(["none", "exactlyOne", "exactlyTwo", "only1"]);
        const exOne = c["100"] + c["010"] + c["001"];
        const exTwo = c["110"] + c["101"] + c["011"];
        let q: string, ans: number;
        let cands: Array<[number, string]> = [];
        if (ask === "only0") {
          q = `How many ${ctx.verbs[0]} only?`;
          ans = c["100"];
          cands = [[nI(0) - nPair(0, 1) - nPair(0, 2), "You took the centre away twice — subtract the 'two only' regions, not the full pair totals."]];
        } else if (ask === "only1") {
          q = `How many ${ctx.verbs[1]} only?`;
          ans = c["010"];
          cands = [[nI(1) - nPair(0, 1) - nPair(1, 2), "You took the centre away twice — work out the 'two only' regions first."]];
        } else if (ask === "none") {
          q = `How many do none of these three?`;
          ans = c["000"];
          cands = [[total - nI(0) - nI(1) - nI(2), "Adding the three circle totals counts the overlaps more than once — fill in the regions first."]];
        } else if (ask === "exactlyOne") {
          q = `How many do exactly one of these three?`;
          ans = exOne;
          cands = [[exOne + exTwo + c["111"], "That's everyone in at least one circle. 'Exactly one' means only the three 'only' regions."]];
        } else {
          q = `How many do exactly two of these three?`;
          ans = exTwo;
          cands = [[nPair(0, 1) + nPair(0, 2) + nPair(1, 2), "Each pair total includes the people doing all three — subtract the centre from each pair."]];
        }
        const stem = ask === "none" ? `There are ${total} ${ctx.who}. ` : `A group of ${ctx.who} was surveyed. `;
        const names = R3NAME(ctx.L);
        return {
          prompt: `${stem}Of these:\n\n${facts.map((f) => `- ${f}`).join("\n")}\n\n${q}`,
          answer: { type: "number", value: ans },
          solution: [
            `Centre (all three): ${c["111"]}.`,
            `Two only: ${P}${Q} = ${nPair(0, 1)} − ${c["111"]} = ${c["110"]}; ${P}${S} = ${nPair(0, 2)} − ${c["111"]} = ${c["101"]}; ${Q}${S} = ${nPair(1, 2)} − ${c["111"]} = ${c["011"]}.`,
            `Only one: ${P} = ${nI(0)} − ${c["110"]} − ${c["101"]} − ${c["111"]} = ${c["100"]}; ${Q} = ${c["010"]}; ${S} = ${c["001"]}.` +
              (ask === "none" ? ` In at least one = ${total - c["000"]}, so none = ${total} − ${total - c["000"]} = ${c["000"]}.` : ""),
            `Answer: ${ans}${ask === "exactlyOne" ? ` (${names["100"]} + ${names["010"]} + ${names["001"]})` : ask === "exactlyTwo" ? " (the three 'two only' regions)" : ""}.`,
          ],
          hint: "Start in the centre (all three), then the 'two only' regions, then the 'one only' regions.",
          traps: numTraps(ans, cands),
          diagram: tier === 1 ? venn3([P, Q, S], blank3(c["111"]), `Blank three-set Venn diagram for ${P}, ${Q} and ${S} with only the centre filled in: ${c["111"]}.`) : undefined,
        };
      }, rng);
    },
  },

  // 7 ── Prime-factor Venn diagram → HCF / LCM / the numbers ───────────────
  {
    id: `${T}.hcf-lcm-from-venn`,
    topicId: T,
    title: "Read HCF and LCM from a prime-factor Venn diagram",
    level: 2,
    guideRef: "venn-hcf-lcm",
    generate(rng, tier) {
      return attempt((r) => {
        const pool = tier === 1 ? [2, 2, 3, 5] : [2, 2, 3, 3, 5, 7, 11];
        const pickMany = (n: number) => Array.from({ length: n }, () => r.pick(pool)).sort((a, b) => a - b);
        const shared = pickMany(r.int(1, tier === 1 ? 2 : 3));
        const oA = pickMany(r.int(1, 2));
        const oB = pickMany(r.int(1, 2));
        if (oA.some((p) => oB.includes(p))) return null;
        const A = prod(shared) * prod(oA);
        const B = prod(shared) * prod(oB);
        const H = prod(shared);
        const Lc = H * prod(oA) * prod(oB);
        if (A > 1500 || B > 1500 || A === B) return null;
        const [X, Y] = r.pick([["A", "B"], ["P", "Q"], ["M", "N"], ["S", "T"]] as const);
        const aria = `Venn diagram of prime factors. ${X} only: ${oA.join(", ")}. Both ${X} and ${Y}: ${shared.join(", ")}. ${Y} only: ${oB.join(", ")}.`;
        const diagram = venn2([X, Y], [oA.map(String), shared.map(String), oB.map(String), [""]], aria, 13);
        const ask = r.pick(["H", "L", "Y", "L"]);
        let q: string, ans: number, steps: string[];
        let cands: Array<[number, string]> = [];
        if (ask === "H") {
          q = `Work out the highest common factor (HCF) of ${X} and ${Y}.`;
          ans = H;
          steps = [`The HCF is the product of the primes in the overlap.`, `HCF = ${mulUp(shared)}`];
          cands = [[Lc, "That's the LCM. The HCF uses only the overlap."]];
        } else if (ask === "L") {
          q = `Work out the lowest common multiple (LCM) of ${X} and ${Y}.`;
          ans = Lc;
          steps = [`The LCM is the product of **every** prime in the diagram (each region once).`, `LCM = ${[...oA, ...shared, ...oB].join(" × ")} = ${Lc}`];
          cands = [[H, "That's the HCF. The LCM multiplies everything in both circles."], [A * B, `${X} × ${Y} counts the overlap twice — multiply each prime in the diagram once.`]];
        } else {
          q = `Work out the value of ${Y}.`;
          ans = B;
          steps = [`${Y} is the product of all the primes inside circle ${Y}, including the overlap.`, `${Y} = ${[...shared, ...oB].join(" × ")} = ${B}`];
          cands = [[prod(oB), "Include the primes in the overlap too — they are factors of both numbers."], [Lc, `That's the LCM — ${Y} only uses the primes inside its own circle.`]];
        }
        return {
          prompt: `The Venn diagram shows the prime factors of two numbers, ${X} and ${Y}, where ${X} = ${A}.\n\n${q}`,
          diagram,
          answer: { type: "number", value: ans },
          solution: [`Check: ${X} = ${[...oA, ...shared].join(" × ")} = ${A} ✓`, ...steps],
          hint: "Overlap = primes the numbers share (HCF). Whole diagram = everything either number needs (LCM).",
          traps: numTraps(ans, cands),
        };
      }, rng);
    },
  },

  // 8 ── HCF and LCM of two or three numbers ────────────────────────────────
  {
    id: `${T}.hcf-lcm`,
    topicId: T,
    title: "Find the HCF and LCM using prime factors",
    level: 2,
    guideRef: "venn-hcf-lcm",
    generate(rng, tier) {
      return attempt((r) => {
        const pool = tier === 1 ? [2, 2, 3, 3, 5] : [2, 2, 2, 3, 3, 5, 7];
        const pickMany = (n: number) => Array.from({ length: n }, () => r.pick(pool));
        const shared = pickMany(r.int(1, 2));
        const k = tier === 3 ? 3 : 2;
        const nums = Array.from({ length: k }, () => prod(shared) * prod(pickMany(r.int(1, 2))));
        if (new Set(nums).size < k) return null;
        if (nums.some((n) => n > (tier === 1 ? 200 : 1000) || n < 10)) return null;
        const H = nums.reduce((a, b) => gcd(a, b));
        const L = nums.reduce((a, b) => lcm(a, b));
        if (H < 2 || L > 20000 || nums.includes(H) || nums.includes(L)) return null;
        nums.sort((a, b) => a - b);
        const names = nums.join(k === 3 ? ", " : " and ").replace(/, (\d+)$/, " and $1");
        const prodAll = prod(nums);
        return {
          prompt: `Find the highest common factor (HCF) and the lowest common multiple (LCM) of ${names}.\n\nGive the HCF first, then the LCM.`,
          answer: { type: "list", values: [H, L], ordered: true, display: `HCF = ${H}, LCM = ${L}` },
          solution: [
            nums.map((n) => `${n} = ${indexForm(n)}`).join(", "),
            `HCF: each prime that is in **every** number, to the lowest power: ${indexForm(H)} = ${H}.`,
            `LCM: every prime that appears, to the highest power: ${indexForm(L)} = ${L}.`,
            k === 2 ? `Check: HCF × LCM = ${H} × ${L} = ${H * L} = ${nums[0]} × ${nums[1]}.` : "In a three-set Venn diagram, the HCF is the centre and the LCM is the whole diagram.",
          ],
          hint: "Write each number as a product of primes, then put the shared primes in the overlap of a Venn diagram.",
          traps: prodAll !== L ? [{ spec: { type: "list", values: [H, prodAll], ordered: true }, feedback: "Multiplying the numbers together gives a common multiple, but not the lowest one." }] : [],
        };
      }, rng);
    },
  },

  // 9 ── Probability from a Venn diagram ────────────────────────────────────
  {
    id: `${T}.venn-probability`,
    topicId: T,
    title: "Find P(A ∪ B), P(A′)… from a Venn diagram",
    level: 2,
    guideRef: "venn-probability",
    generate(rng, tier) {
      return attempt((r) => {
        const ctx = r.pick(CTX2);
        const c = [r.int(2, 15), r.int(1, 12), r.int(2, 15), r.int(1, 12)];
        const total = sum(c);
        const opts: Array<[string, number[], string]> = [
          [`${ctx.L[0]} ∩ ${ctx.L[1]}`, [1], `${ctx.p} and ${ctx.q}`],
          [`${ctx.L[0]} ∪ ${ctx.L[1]}`, [0, 1, 2], `${ctx.p} or ${ctx.q} (or both)`],
          [`${ctx.L[0]}′`, [2, 3], `do not ${ctx.p.replace(/^(\w+)ed\b/, "$1")}`],
          [`${ctx.L[0]} ∩ ${ctx.L[1]}′`, [0], `${ctx.p} but not ${ctx.q}`],
          [`(${ctx.L[0]} ∪ ${ctx.L[1]})′`, [3], "do neither"],
        ];
        const choice = r.pick(tier === 1 ? opts.slice(0, 3) : opts);
        const [s, idx] = choice;
        const n = sum(idx.map((i) => c[i]));
        if (n === 0 || n === total) return null;
        const words = tier === 3;
        const cands: Array<[number, number, string]> = [];
        if (s.includes("∪") && !s.includes("′")) cands.push([c[0] + 2 * c[1] + c[2], total, "You counted the overlap twice — each person is in just one region."]);
        if (s === `${ctx.L[0]}′`) cands.push([c[0] + c[1], total, `That's P(${ctx.L[0]}). The complement ′ means NOT in ${ctx.L[0]}.`]);
        cands.push([n, total - c[3], "The denominator is everyone in ξ — including those outside both circles."]);
        return {
          prompt:
            `The Venn diagram shows information about ${total} ${ctx.who}.\n\n- ${ctx.L[0]} = {${ctx.who.split(" ")[0]} who ${ctx.p}}\n- ${ctx.L[1]} = {${ctx.who.split(" ")[0]} who ${ctx.q}}\n\n` +
            (words
              ? `One of them is chosen at random. Find the probability that this ${ctx.one} is in the set ${s}. Give your answer as a fraction in its simplest form.`
              : `One of them is chosen at random. Find P(${s}). Give your answer as a fraction in its simplest form.`),
          diagram: venn2Counts(ctx.L, c),
          answer: fracAns(n, total),
          solution: [
            `${s} is the region${idx.length > 1 ? "s" : ""}: ${idx.map((i) => REG2NAME(ctx.L)[i]).join("; ")} → ${addUp(idx.map((i) => c[i]))}.`,
            `Total in ξ = ${c.join(" + ")} = ${total}.`,
            `P(${s}) = ${frac(n, total, { simplify: false })}${gcd(n, total) > 1 ? ` = ${frac(n, total)}` : ""}`,
          ],
          hint: "Probability = (number in the region) ÷ (number in the whole of ξ).",
          traps: fracTraps(n, total, cands),
        };
      }, rng);
    },
  },

  // 10 ── Conditional probability "given" ──────────────────────────────────
  {
    id: `${T}.conditional`,
    topicId: T,
    title: "Conditional probability P(A | B) from a Venn diagram",
    level: 3,
    guideRef: "venn-probability",
    generate(rng, tier) {
      return attempt((r) => {
        if (tier === 3) {
          const ctx = r.pick(CTX3);
          const c = counts3(r, 2);
          const total = sum(R3.map((k) => c[k]));
          const L = ctx.L;
          const conds: Array<{ given: (k: R3Key) => boolean; event: (k: R3Key) => boolean; g: string; e: string; gn: string; en: string }> = [
            { given: (k) => in3(k, 2), event: (k) => in3(k, 0), g: L[2], e: L[0], gn: ctx.verbs[2], en: ctx.verbs[0] },
            { given: (k) => in3(k, 0) && in3(k, 1), event: (k) => in3(k, 2), g: `${L[0]} ∩ ${L[1]}`, e: L[2], gn: `${ctx.verbs[0]} and ${ctx.verbs[1]}`, en: ctx.verbs[2] },
            { given: (k) => in3(k, 1), event: (k) => !in3(k, 0) && !in3(k, 2), g: L[1], e: `${L[0]}′ ∩ ${L[2]}′`, gn: ctx.verbs[1], en: `${ctx.verbs[1].split(" ")[0] === "like" ? "like" : "do"} neither of the other two` },
            { given: (k) => in3(k, 0) || in3(k, 1), event: (k) => in3(k, 2), g: `${L[0]} ∪ ${L[1]}`, e: L[2], gn: `${ctx.verbs[0]} or ${ctx.verbs[1]}`, en: ctx.verbs[2] },
          ];
          const cd = r.pick(conds);
          const gK = R3.filter(cd.given);
          const eK = gK.filter(cd.event);
          const d = sum(gK.map((k) => c[k]));
          const n = sum(eK.map((k) => c[k]));
          if (n === 0 || n === d) return null;
          return {
            prompt: `The Venn diagram shows information about ${total} ${ctx.who}. One of them is chosen at random.\n\nFind P(${cd.e} | ${cd.g}). Give your answer as a fraction in its simplest form.`,
            diagram: venn3Counts(L, c),
            answer: fracAns(n, d),
            solution: [
              `'Given ${cd.g}' means the new total is only the people in ${cd.g}: ${addUp(gK.map((k) => c[k]))}.`,
              `Of those, the ones in ${cd.e}: ${addUp(eK.map((k) => c[k]))}.`,
              `P(${cd.e} | ${cd.g}) = ${frac(n, d, { simplify: false })}${gcd(n, d) > 1 ? ` = ${frac(n, d)}` : ""}`,
            ],
            hint: "'Given' shrinks the sample space: the denominator is only the elements in the given set.",
            traps: fracTraps(n, d, [[n, total, "The denominator should be only those in the 'given' set, not everyone."]]),
          };
        }
        const ctx = r.pick(CTX2);
        const c = [r.int(2, 15), r.int(1, 12), r.int(2, 15), r.int(1, 12)];
        const total = sum(c);
        const [P, Q] = ctx.L;
        // [event regions, given regions, notation, words]
        const opts: Array<[number[], number[], string, string]> = [
          [[1], [1, 2], `${P} | ${Q}`, `Given that the ${ctx.one} ${ctx.q}, find the probability that they also ${ctx.p.replace(/^(\w+)ed\b/, "$1")}`],
          [[1], [0, 1], `${Q} | ${P}`, `Given that the ${ctx.one} ${ctx.p}, find the probability that they also ${ctx.q.replace(/^(\w+)ed\b/, "$1")}`],
          [[0], [0, 3], `${P} | ${Q}′`, ""],
          [[3], [2, 3], `${Q}′ | ${P}′`, ""],
          [[0, 2], [0, 1, 2], `exactly one | at least one`, ""],
        ];
        const pool = tier === 1 ? opts.slice(0, 2) : opts.slice(0, 4);
        const [eIdx, gIdx, note] = r.pick(pool);
        const n = sum(eIdx.map((i) => c[i]));
        const d = sum(gIdx.map((i) => c[i]));
        if (n === 0 || n === d) return null;
        // Tier 1 always uses notation; tier 2 uses the past-tense-free contexts only for notation.
        const prompt =
          `The Venn diagram shows information about ${total} ${ctx.who}.\n\n- ${P} = {${ctx.who.split(" ")[0]} who ${ctx.p}}\n- ${Q} = {${ctx.who.split(" ")[0]} who ${ctx.q}}\n\n` +
          `One of them is chosen at random. Find P(${note}). Give your answer as a fraction in its simplest form.`;
        const gName = note.split(" | ")[1];
        return {
          prompt,
          diagram: venn2Counts(ctx.L, c),
          answer: fracAns(n, d),
          solution: [
            `Given ${gName}: only look at the region${gIdx.length > 1 ? "s" : ""} in ${gName} → ${addUp(gIdx.map((i) => c[i]))}.`,
            `Of these, the ones in ${note.split(" | ")[0]}: ${n}.`,
            `P(${note}) = ${frac(n, d, { simplify: false })}${gcd(n, d) > 1 ? ` = ${frac(n, d)}` : ""}`,
          ],
          hint: "'Given' means the denominator is only the elements in the given set — not the whole of ξ.",
          traps: fracTraps(n, d, [[n, total, "You divided by everyone. 'Given' restricts you to the given set only."]]),
        };
      }, rng);
    },
  },
];

/** Three-set diagram with only the centre filled in (tier 1 scaffold). */
function blank3(centre: number): Record<R3Key, string[]> {
  const v = {} as Record<R3Key, string[]>;
  for (const k of R3) v[k] = [k === "111" ? String(centre) : ""];
  return v;
}
