// Procedural skill drills for "statistics" (Year 11, Edexcel 4MA1 Higher — Unit 6).
//
// All data are integers (or integer tenths), so totals, medians and frequency
// densities are exact; rounding uses integer arithmetic and exact …5 ties are
// rejected, so "correct to 1 decimal place" is never ambiguous.
// Quartiles of raw lists always use n = 4k + 3 values, where the (n + 1)/4 rule
// and the "median of each half" rule give the same answer.
// Graph-reading drills key the exact reading off the drawn polygon and accept
// answers within one small grid square.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { num, clean, poly, ordinal, roundTo } from "./helpers.ts";
import { makeRng } from "./rng.ts";

const T = "statistics";
const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara", "Kenji", "Olivia"] as const;

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

const sum = (xs: readonly number[]) => xs.reduce((a, b) => a + b, 0);
const asc = (xs: readonly number[]) => [...xs].sort((a, b) => a - b);
/** Keep a trap candidate only if it is positive. */
const pos = (v: number) => (v > 0 ? v : null);

/** Bounded rejection loop; falls back to fixed seeds so it is always deterministic. */
function attempt(make: (r: Rng) => DrillItem | null, rng: Rng): DrillItem {
  for (let i = 0; i < 800; i++) {
    const x = make(rng);
    if (x) return x;
  }
  for (let s = 1; s < 5000; s++) {
    const x = make(makeRng(s));
    if (x) return x;
  }
  throw new Error("statistics drill: no valid item");
}

/** Fixed decimal places with a real minus sign. */
function fx(v: number, dp: number): string {
  return (v < 0 ? "−" : "") + Math.abs(v).toFixed(dp);
}

/** n ÷ d (integers, d > 0) rounded half away from zero to dp places, exactly. */
function divRound(n: number, d: number, dp: number): number {
  const f = 10 ** dp;
  const q = Math.floor((2 * Math.abs(n) * f + d) / (2 * d));
  return clean((n < 0 ? -q : q) / f);
}

/** n ÷ d terminates within dp decimal places. */
const exactTo = (n: number, d: number, dp: number) => (Math.abs(n) * 10 ** dp) % d === 0;

/** Rounding n ÷ d to dp places would land exactly on a …5 tie. */
function isTie(n: number, d: number, dp: number): boolean {
  const f = 10 ** dp;
  const a = Math.abs(n);
  return (2 * a * f) % d === 0 && (a * f) % d !== 0;
}

/** "12.375 = 12.4 (1 d.p.)", "3.1428… = 3.1 (1 d.p.)" or the exact value. */
function approx(n: number, d: number, dp: number): string {
  if (exactTo(n, d, dp)) return num(clean(n / d));
  const r = fx(divRound(n, d, dp), dp);
  if (exactTo(n, d, 4)) return `${num(clean(n / d))} = ${r} (${dp} d.p.)`;
  const t = Math.floor((Math.abs(n) * 1e4) / d) / 1e4;
  return `${n < 0 ? "−" : ""}${t.toFixed(4)}… = ${r} (${dp} d.p.)`;
}

/** Number traps: dropped if missing, untidy, too close to the answer or repeated. */
function numTraps(answer: number, cands: Array<[number | null, string]>, tol = 0): Trap[] {
  const out: Trap[] = [];
  const used: number[] = [answer];
  const gap = tol > 0 ? 2 * tol : 1e-9;
  for (const [raw, feedback] of cands) {
    if (raw === null || !Number.isFinite(raw)) continue;
    const v = clean(raw);
    if (Math.abs(v * 100 - Math.round(v * 100)) > 1e-6) continue;
    if (used.some((u) => Math.abs(u - v) < gap)) continue;
    used.push(v);
    const spec: AnswerSpec = tol > 0 ? { type: "number", value: v, tolerance: tol / 2 } : { type: "number", value: v };
    out.push({ spec, feedback });
  }
  return out;
}

/** A class interval in plain text: "10 < t ≤ 20". */
const cls = (lo: number, hi: number, v: string) => `${num(lo)} < ${v} ≤ ${num(hi)}`;

function classAccept(lo: number, hi: number, v: string): string[] {
  const a = num(lo);
  const b = num(hi);
  return [cls(lo, hi, v), `${a}<${v}<=${b}`, `${a}<x≤${b}`, `${a}<x<=${b}`, `${a}<${v}<${b}`, `${a}<x<${b}`, `${a}-${b}`, `${a} to ${b}`];
}
const classAnswer = (lo: number, hi: number, v: string): AnswerSpec => ({ type: "text", accept: classAccept(lo, hi, v), display: cls(lo, hi, v) });
const classTrap = (lo: number, hi: number, v: string, feedback: string): Trap => ({ spec: { type: "text", accept: classAccept(lo, hi, v) }, feedback });

/** Index of the class containing the value of rank t (1-based) from frequencies f. */
function classOfRank(f: readonly number[], t: number): number {
  let c = 0;
  for (let i = 0; i < f.length; i++) {
    c += f[i];
    if (t <= c) return i;
  }
  return f.length - 1;
}

const running = (f: readonly number[]) => {
  const out: number[] = [];
  let c = 0;
  for (const x of f) out.push((c += x));
  return out;
};

// Grouped (continuous) data contexts.
interface GCtx {
  head: string;
  v: string;
  unit: string;
  who: string;
  qty: string;
  qtys: string;
  about: (who: string) => string;
  more: (x: string) => string;
  between: (a: string, b: string) => string;
  starts: number[];
  units: number[];
}
const GCTX: GCtx[] = [
  {
    head: "Time (t minutes)", v: "t", unit: "minutes", who: "pupils", qty: "time", qtys: "times",
    about: (w) => `the times, in minutes, that ${w} took to travel to school`,
    more: (x) => `took more than ${x} minutes`, between: (a, b) => `took between ${a} and ${b} minutes`,
    starts: [0, 10], units: [5, 10],
  },
  {
    head: "Height (h cm)", v: "h", unit: "cm", who: "sunflower seedlings", qty: "height", qtys: "heights",
    about: (w) => `the heights, in cm, of ${w}`,
    more: (x) => `were taller than ${x} cm`, between: (a, b) => `had a height between ${a} cm and ${b} cm`,
    starts: [0, 20], units: [5, 10],
  },
  {
    head: "Mass (m grams)", v: "m", unit: "grams", who: "mangoes", qty: "mass", qtys: "masses",
    about: (w) => `the masses, in grams, of ${w} at a fruit stall`,
    more: (x) => `had a mass of more than ${x} grams`, between: (a, b) => `had a mass between ${a} g and ${b} g`,
    starts: [100, 150, 200], units: [10],
  },
  {
    head: "Rainfall (r mm)", v: "r", unit: "mm", who: "weather stations", qty: "rainfall", qtys: "rainfall amounts",
    about: (w) => `the rainfall, in mm, recorded in one week of the monsoon season by ${w} across Southeast Asia`,
    more: (x) => `had more than ${x} mm of rain`, between: (a, b) => `had between ${a} mm and ${b} mm of rain`,
    starts: [0], units: [5, 10],
  },
  {
    head: "Distance (d km)", v: "d", unit: "km", who: "cyclists", qty: "distance", qtys: "distances",
    about: (w) => `the distances, in km, cycled by ${w} at East Coast Park one Sunday`,
    more: (x) => `cycled more than ${x} km`, between: (a, b) => `cycled between ${a} km and ${b} km`,
    starts: [0, 10], units: [5, 10],
  },
  {
    head: "Age (a years)", v: "a", unit: "years", who: "people", qty: "age", qtys: "ages",
    about: (w) => `the ages, in years, of ${w} attending yoga classes at a community centre`,
    more: (x) => `were older than ${x} years`, between: (a, b) => `were aged between ${a} and ${b} years`,
    starts: [10, 20], units: [5, 10],
  },
];

function gTable(ctx: GCtx, b: readonly number[], f: readonly (number | string)[]): string {
  return `| ${ctx.head} | Frequency |\n|---|---|\n` + f.map((x, i) => `| ${cls(b[i], b[i + 1], ctx.v)} | ${x} |`).join("\n");
}
function cfTable(ctx: GCtx, b: readonly number[], cf: readonly number[]): string {
  return `| ${ctx.head} | Cumulative frequency |\n|---|---|\n` + cf.map((x, i) => `| ${cls(b[0], b[i + 1], ctx.v)} | ${x} |`).join("\n");
}

/** Equal-width class boundaries. */
function equalClasses(r: Rng, ctx: GCtx, k: number, tier: 1 | 2 | 3): number[] {
  const start = r.pick(ctx.starts);
  const w = r.pick(ctx.units) * (tier >= 2 && r.bool(0.3) ? 2 : 1);
  return Array.from({ length: k + 1 }, (_, i) => start + i * w);
}

/** Unequal-width class boundaries built from a base unit u. */
function unequalClasses(r: Rng, ctx: GCtx, k: number, u: number): number[] | null {
  const b = [r.pick(ctx.starts)];
  for (let i = 0; i < k; i++) b.push(b[i] + u * r.pick([1, 2, 2, 3, 4]));
  const widths = b.slice(1).map((x, i) => x - b[i]);
  return new Set(widths).size >= 2 ? b : null;
}

// Discrete frequency-table contexts.
interface FCtx {
  head: string;
  what: string;
  noun: string;
  x0: number[];
  k: number[];
}
const FCTX: FCtx[] = [
  { head: "Number of siblings", what: "the number of siblings of each pupil in Year 11", noun: "number of siblings", x0: [0], k: [4, 5] },
  { head: "Goals scored", what: "the number of goals a hockey team scored in each match last season", noun: "number of goals per match", x0: [0], k: [5, 6] },
  { head: "People in the car", what: "the number of people in each car arriving at a school car park", noun: "number of people per car", x0: [1], k: [4, 5] },
  { head: "Books read", what: "how many books each member of a reading club read over the holidays", noun: "number of books read", x0: [0, 1, 2], k: [5, 6] },
  { head: "MRT trips", what: "how many MRT trips each pupil in a CCA group made last weekend", noun: "number of MRT trips", x0: [0, 1], k: [5, 6] },
  { head: "Hawker centre visits", what: "how many times each pupil in a class ate at a hawker centre last week", noun: "number of visits", x0: [0, 1], k: [5, 6] },
  { head: "Shoe size", what: "the shoe sizes of the members of a running club", noun: "shoe size", x0: [4, 5, 6], k: [5, 6] },
];

function fTable(ctx: FCtx, xs: readonly number[], fs: readonly (number | string)[]): string {
  return `| ${ctx.head} | Frequency |\n|---|---|\n` + xs.map((x, i) => `| ${num(x)} | ${fs[i]} |`).join("\n");
}

// ---------------------------------------------------------------------------
// SVG: cumulative frequency graph and histogram (drawn exactly from the data)
// ---------------------------------------------------------------------------

const X0 = 62;
const X1 = 444;
const Y0 = 262;
const Y1 = 18;
const p1 = (v: number) => v.toFixed(1);

function cfGraph(ctx: GCtx, b: readonly number[], cf: readonly number[], N: number): string {
  const L0 = b[0];
  const span = b[b.length - 1] - L0;
  const W = b[1] - b[0];
  const px = (x: number) => X0 + ((x - L0) / span) * (X1 - X0);
  const py = (y: number) => Y0 - (y / N) * (Y0 - Y1);
  const parts: string[] = [];
  const mx = W / 5;
  const nx = Math.round(span / mx);
  for (let i = 0; i <= nx; i++) {
    const x = L0 + i * mx;
    parts.push(`<line x1="${p1(px(x))}" y1="${Y1}" x2="${p1(px(x))}" y2="${Y0}" stroke="${i % 5 === 0 ? "#94a3b8" : "#e2e8f0"}" stroke-width="${i % 5 === 0 ? 1 : 0.8}"/>`);
  }
  for (let j = 0; j <= 20; j++) {
    const y = (j * N) / 20;
    parts.push(`<line x1="${X0}" y1="${p1(py(y))}" x2="${X1}" y2="${p1(py(y))}" stroke="${j % 5 === 0 ? "#94a3b8" : "#e2e8f0"}" stroke-width="${j % 5 === 0 ? 1 : 0.8}"/>`);
  }
  for (let i = 0; i < b.length; i++) {
    parts.push(`<text x="${p1(px(b[i]))}" y="${Y0 + 15}" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">${num(b[i])}</text>`);
  }
  for (let j = 0; j <= 4; j++) {
    const y = (j * N) / 4;
    parts.push(`<text x="${X0 - 6}" y="${p1(py(y) + 4)}" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">${num(y)}</text>`);
  }
  const pts = [[L0, 0], ...cf.map((c, i) => [b[i + 1], c])];
  parts.push(`<polyline points="${pts.map(([x, y]) => `${p1(px(x))},${p1(py(y))}`).join(" ")}" fill="none" stroke="#1f2937" stroke-width="2"/>`);
  for (const [x, y] of pts) parts.push(`<circle cx="${p1(px(x))}" cy="${p1(py(y))}" r="3" fill="#1f2937"/>`);
  const aria = `Cumulative frequency graph, ${ctx.head} on the horizontal axis from ${num(L0)} to ${num(b[b.length - 1])}, cumulative frequency from 0 to ${N}. Straight lines join the points ${pts.map(([x, y]) => `(${num(x)}, ${num(y)})`).join(", ")}. Small squares are ${num(mx)} across and ${num(N / 20)} up.`;
  return `<svg viewBox="0 0 460 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}"><rect x="0" y="0" width="460" height="310" fill="#ffffff"/>${parts.join("")}<line x1="${X0}" y1="${Y0}" x2="${X1}" y2="${Y0}" stroke="#1f2937" stroke-width="1.5"/><line x1="${X0}" y1="${Y0}" x2="${X0}" y2="${Y1}" stroke="#1f2937" stroke-width="1.5"/><text x="${(X0 + X1) / 2}" y="300" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">${ctx.head}</text><text x="16" y="${(Y0 + Y1) / 2}" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155" transform="rotate(-90 16 ${(Y0 + Y1) / 2})">Cumulative frequency</text></svg>`;
}

/** Histogram with frequency density in tenths (fdT) and base unit u on the x grid; sT = y grid step in tenths. */
function histogram(ctx: GCtx, b: readonly number[], fdT: readonly number[], u: number, sT: number): string {
  const L0 = b[0];
  const span = b[b.length - 1] - L0;
  const majT = 5 * sT;
  const topT = Math.ceil((Math.max(...fdT) + sT) / majT) * majT;
  const px = (x: number) => X0 + ((x - L0) / span) * (X1 - X0);
  const py = (yT: number) => Y0 - (yT / topT) * (Y0 - Y1);
  const parts: string[] = [];
  const nx = Math.round(span / u);
  const labelEvery = nx > 12 ? 2 : 1;
  for (let i = 0; i <= nx; i++) {
    const x = L0 + i * u;
    parts.push(`<line x1="${p1(px(x))}" y1="${Y1}" x2="${p1(px(x))}" y2="${Y0}" stroke="#e2e8f0" stroke-width="0.8"/>`);
    if (i % labelEvery === 0) parts.push(`<text x="${p1(px(x))}" y="${Y0 + 15}" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">${num(x)}</text>`);
  }
  for (let yT = 0; yT <= topT; yT += sT) {
    const major = yT % majT === 0;
    parts.push(`<line x1="${X0}" y1="${p1(py(yT))}" x2="${X1}" y2="${p1(py(yT))}" stroke="${major ? "#94a3b8" : "#e2e8f0"}" stroke-width="${major ? 1 : 0.8}"/>`);
    if (major) parts.push(`<text x="${X0 - 6}" y="${p1(py(yT) + 4)}" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">${num(clean(yT / 10))}</text>`);
  }
  fdT.forEach((h, i) => {
    parts.push(`<rect x="${p1(px(b[i]))}" y="${p1(py(h))}" width="${p1(px(b[i + 1]) - px(b[i]))}" height="${p1(py(0) - py(h))}" fill="#c7d2fe" stroke="#334155" stroke-width="1.5"/>`);
  });
  const aria = `Histogram, ${ctx.head} on the horizontal axis, frequency density on the vertical axis. Bars: ${fdT.map((h, i) => `${cls(b[i], b[i + 1], ctx.v)} height ${num(clean(h / 10))}`).join("; ")}.`;
  return `<svg viewBox="0 0 460 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="${aria}"><rect x="0" y="0" width="460" height="310" fill="#ffffff"/>${parts.join("")}<line x1="${X0}" y1="${Y0}" x2="${X1}" y2="${Y0}" stroke="#1f2937" stroke-width="1.5"/><line x1="${X0}" y1="${Y0}" x2="${X0}" y2="${Y1}" stroke="#1f2937" stroke-width="1.5"/><text x="${(X0 + X1) / 2}" y="300" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">${ctx.head}</text><text x="16" y="${(Y0 + Y1) / 2}" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155" transform="rotate(-90 16 ${(Y0 + Y1) / 2})">Frequency density</text></svg>`;
}

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

type Stat = "mean" | "median" | "range" | "mode";

const raw: Drill[] = [
  // 1 ─ Averages and range of a list ---------------------------------------
  {
    id: `${T}.list-averages`,
    topicId: T,
    title: "Mean, median, mode or range of a list",
    level: 1,
    guideRef: "averages-raw-data",
    generate(rng, tier) {
      return attempt((r) => {
        const name = r.pick(NAMES);
        type C = { text: (n: number) => string; lo: number; hi: number; scale: number };
        const pool: C[] =
          tier === 1
            ? [
                { text: (n) => `${name} recorded the number of messages received on each of ${n} days:`, lo: 3, hi: 30, scale: 1 },
                { text: (n) => `The numbers of durians sold at a stall on ${n} days were:`, lo: 10, hi: 45, scale: 1 },
                { text: (n) => `The numbers of push-ups ${n} pupils did in one minute were:`, lo: 12, hi: 48, scale: 1 },
              ]
            : tier === 2
              ? [
                  { text: (n) => `The heights, in cm, of ${n} pupils in a Year 11 class are:`, lo: 148, hi: 184, scale: 1 },
                  { text: (n) => `${name} recorded the number of minutes spent revising on each of ${n} days:`, lo: 15, hi: 95, scale: 1 },
                  { text: (n) => `The marks, out of 80, of ${n} pupils in a mock exam are:`, lo: 22, hi: 79, scale: 1 },
                ]
              : [
                  { text: (n) => `The midday temperatures, in °C, in Sapporo on ${n} days of a winter school trip were:`, lo: -9, hi: 6, scale: 1 },
                  { text: (n) => `The times, in seconds, of ${n} runners in a 100 m heat were:`, lo: 112, hi: 168, scale: 10 },
                  { text: (n) => `The lengths, in cm, of ${n} leaves collected in the Botanic Gardens were:`, lo: 45, hi: 138, scale: 10 },
                ];
        const c = r.pick(pool);
        const n = tier === 1 ? r.int(7, 9) : tier === 2 ? r.int(8, 12) : r.int(8, 11);
        const stat: Stat = r.pick(["mean", "median", "range", "mode"] as const);
        let data: number[];
        if (stat === "mode") {
          const vals: number[] = [];
          for (let v = c.lo; v <= c.hi; v++) vals.push(v);
          if (vals.length < n) return null;
          data = r.shuffle(vals).slice(0, n - 1);
          data.splice(r.int(0, n - 1), 0, r.pick(data));
        } else {
          data = Array.from({ length: n }, () => r.int(c.lo, c.hi));
        }
        const S = c.scale;
        const show = (u: number) => (S === 1 ? num(u) : fx(u / S, 1));
        const showV = (u: number) => num(clean(u / S));
        const list = data.map(show).join(", ");
        const s = asc(data);
        const min = s[0];
        const max = s[n - 1];
        if (max === min) return null;
        const medU = n % 2 ? s[(n - 1) / 2] : (s[n / 2 - 1] + s[n / 2]) / 2;
        const orderStep = `Put the values in order: ${s.map(show).join(", ")}.`;
        let question: string;
        let answer: AnswerSpec;
        let solution: string[];
        let traps: Trap[] = [];
        let hint: string;
        if (stat === "mean") {
          const tot = sum(data);
          const D = n * S;
          if (isTie(tot, D, 1)) return null;
          const exact = exactTo(tot, D, 1);
          if (tier === 1 && !exact) return null;
          const ans = divRound(tot, D, 1);
          question = exact ? "Work out the mean." : "Work out the mean. Give your answer correct to 1 decimal place.";
          answer = { type: "number", value: ans };
          solution = [
            `Add all ${n} values: the total is ${showV(tot)}.`,
            `Mean = total ÷ number of values = ${showV(tot)} ÷ ${n} = ${approx(tot, D, 1)}.`,
          ];
          hint = "Mean = total of the values ÷ how many values there are.";
          traps = numTraps(ans, [
            [divRound(tot, (n - 1) * S, 1), `Count the values again — there are ${n} of them, so divide by ${n}.`],
            [clean(medU / S), "That's the median (the middle value). The mean shares the total out equally."],
          ]);
        } else if (stat === "median") {
          const ans = clean(medU / S);
          question = "Work out the median.";
          answer = { type: "number", value: ans };
          solution =
            n % 2
              ? [orderStep, `There are ${n} values, so the median is the {{(${n} + 1)/2}} = ${ordinal((n + 1) / 2)} value.`, `Median = ${showV(medU)}.`]
              : [
                  orderStep,
                  `There are ${n} values, so the median is the {{(${n} + 1)/2}} = ${num((n + 1) / 2)}th value — halfway between the ${ordinal(n / 2)} and ${ordinal(n / 2 + 1)} values.`,
                  `Median = (${show(s[n / 2 - 1])} + ${show(s[n / 2])}) ÷ 2 = ${showV(medU)}.`,
                ];
          hint = "Order the data first, then find the middle.";
          const unsortedMid = n % 2 ? data[(n - 1) / 2] : (data[n / 2 - 1] + data[n / 2]) / 2;
          traps = numTraps(ans, [[clean(unsortedMid / S), "That's the middle of the list as written. Put the values in order first."]]);
        } else if (stat === "range") {
          const ans = clean((max - min) / S);
          question = "Work out the range.";
          answer = { type: "number", value: ans };
          solution = [`Largest value = ${show(max)}, smallest value = ${show(min)}.`, `Range = ${show(max)} − ${min < 0 ? `(${show(min)})` : show(min)} = ${showV(max - min)}.`];
          hint = "Range = largest value − smallest value.";
          traps = numTraps(ans, [
            [min < 0 ? clean((max + min) / S) : null, "Subtracting a negative number adds: largest − (negative) = largest + its size."],
            [clean(Math.abs(data[n - 1] - data[0]) / S), "That's the last value minus the first. Use the largest and smallest values."],
          ]);
        } else {
          const counts = new Map<number, number>();
          for (const v of data) counts.set(v, (counts.get(v) ?? 0) + 1);
          const modeU = [...counts.entries()].find(([, k]) => k === 2)?.[0];
          if (modeU === undefined) return null;
          const ans = clean(modeU / S);
          question = "Write down the mode.";
          answer = { type: "number", value: ans };
          solution = [orderStep, `${show(modeU)} appears twice; every other value appears once. Mode = ${show(modeU)}.`];
          hint = "The mode is the value that appears most often.";
          traps = numTraps(ans, [[2, `2 is how many times the mode appears — the mode is the value itself, ${show(modeU)}.`]]);
        }
        return { prompt: `${c.text(n)}\n\n${list}\n\n${question}`, answer, solution, hint, traps };
      }, rng);
    },
  },

  // 2 ─ Working backwards with the mean; combined means -------------------
  {
    id: `${T}.mean-backwards`,
    topicId: T,
    title: "Work backwards from a mean (and combine means)",
    level: 2,
    guideRef: "averages-raw-data",
    generate(rng, tier) {
      const kinds = tier === 1 ? (["missing", "join"] as const) : tier === 2 ? (["missing", "join", "leave", "combined"] as const) : (["join", "leave", "combined", "algebra"] as const);
      const kind = rng.pick(kinds);
      return attempt((r) => {
        const name = r.pick(NAMES);
        if (kind === "missing") {
          const n = tier === 1 ? r.int(4, 5) : r.int(5, 7);
          const m = tier === 1 ? r.int(12, 40) : r.int(45, 85);
          const others = Array.from({ length: n - 1 }, () => m + r.int(-12, 12));
          const miss = n * m - sum(others);
          if (miss < 1 || Math.abs(miss - m) < 3 || Math.abs(miss - m) > 25 || (tier > 1 && miss > 100)) return null;
          const tpl = r.int(0, 2);
          const prompt =
            tpl === 0
              ? `The mean of ${n} numbers is ${m}. ${n - 1} of the numbers are ${others.join(", ")}.\n\nWork out the other number.`
              : tpl === 1
                ? `${name} has taken ${n} tests. The mean mark is ${m}. The marks in the first ${n - 1} tests were ${others.join(", ")}.\n\nWork out the mark in the last test.`
                : `A hawker stall sold a mean of ${m} plates of chee cheong fun a day over ${n} days. On ${n - 1} of the days it sold ${others.join(", ")} plates.\n\nHow many plates did it sell on the other day?`;
          return {
            prompt,
            answer: { type: "number", value: miss },
            solution: [`Total of all ${n} values = mean × ${n} = ${m} × ${n} = ${n * m}.`, `Total of the ${n - 1} known values = ${sum(others)}.`, `Missing value = ${n * m} − ${sum(others)} = ${miss}.`],
            hint: "Work backwards: mean × number of values gives the total.",
            traps: numTraps(miss, [[m, "The missing value doesn't have to equal the mean. Find the total first: mean × number of values."]]),
          };
        }
        if (kind === "join" || kind === "leave") {
          const n = r.int(5, 11);
          const tpl = r.pick([0, 1, 2]);
          const a = tpl === 0 ? r.int(165, 182) : tpl === 1 ? r.int(28, 48) : r.int(58, 75);
          const d = r.pick([-3, -2, -1, 1, 2, 3]);
          const b = a + d;
          const what = tpl === 0 ? ["height", "cm", "basketball squad", "players", "player"] : tpl === 1 ? ["age", "years", "book club", "members", "member"] : ["mass", "kg", "lift", "people", "person"];
          if (kind === "join") {
            const x = (n + 1) * b - n * a;
            const ok = tpl === 0 ? x >= 150 && x <= 215 : tpl === 1 ? x >= 16 && x <= 85 : x >= 40 && x <= 110;
            if (!ok) return null;
            return {
              prompt: `The mean ${what[0]} of the ${n} ${what[3]} in a ${what[2]} is ${a} ${what[1]}. One more ${what[4]} joins, and the mean ${what[0]} of all ${n + 1} ${what[3]} becomes ${b} ${what[1]}.\n\nWork out the ${what[0]} of the new ${what[4]}.`,
              answer: { type: "number", value: x },
              solution: [`Total before: ${n} × ${a} = ${n * a}.`, `Total after: ${n + 1} × ${b} = ${(n + 1) * b}.`, `New ${what[4]}: ${(n + 1) * b} − ${n * a} = ${x} ${what[1]}.`],
              hint: "Find the total before and the total after. The difference is the new value.",
              traps: numTraps(x, [
                [b, "The new person's value isn't the new mean — compare the totals before and after."],
                [pos(n * b - n * a), `The new total is for ${n + 1} ${what[3]}: multiply the new mean by ${n + 1}.`],
              ]),
            };
          }
          const x = n * a - (n - 1) * b;
          const ok = tpl === 0 ? x >= 150 && x <= 215 : tpl === 1 ? x >= 16 && x <= 85 : x >= 40 && x <= 110;
          if (!ok) return null;
          return {
            prompt: `The mean ${what[0]} of the ${n} ${what[3]} in a ${what[2]} is ${a} ${what[1]}. One ${what[4]} leaves, and the mean ${what[0]} of the remaining ${n - 1} ${what[3]} is ${b} ${what[1]}.\n\nWork out the ${what[0]} of the ${what[4]} who left.`,
            answer: { type: "number", value: x },
            solution: [`Total before: ${n} × ${a} = ${n * a}.`, `Total after: ${n - 1} × ${b} = ${(n - 1) * b}.`, `The ${what[4]} who left: ${n * a} − ${(n - 1) * b} = ${x} ${what[1]}.`],
            hint: "Totals, not means, can be added and subtracted.",
            traps: numTraps(x, [
              [pos(n * a - n * b), `After one leaves there are only ${n - 1} — multiply the new mean by ${n - 1}.`],
              [pos(a - b), "That's only the change in the mean. Work with the totals."],
            ]),
          };
        }
        if (kind === "combined") {
          const n1 = r.int(12, 32);
          const n2 = r.int(12, 32);
          if (n1 === n2) return null;
          const scale = tier === 3 && r.bool() ? 10 : 1;
          const aU = scale === 1 ? r.int(45, 80) : r.int(450, 800);
          const bU = scale === 1 ? r.int(45, 80) : r.int(450, 800);
          if (Math.abs(aU - bU) < 3 * scale) return null;
          const tot = n1 * aU + n2 * bU;
          const D = (n1 + n2) * scale;
          if (isTie(tot, D, 1) || exactTo(tot, D, 0)) return null;
          const ans = divRound(tot, D, 1);
          const sh = (u: number) => num(clean(u / scale));
          const c1 = r.pick(["11R", "11T", "11G"]);
          const c2 = c1 === "11R" ? "11S" : "11R";
          return {
            prompt: `In a mock exam, the ${n1} pupils in class ${c1} had a mean mark of ${sh(aU)}. The ${n2} pupils in class ${c2} had a mean mark of ${sh(bU)}.\n\nWork out the mean mark of all ${n1 + n2} pupils. Give your answer correct to 1 decimal place.`,
            answer: { type: "number", value: ans },
            solution: [
              `Total for ${c1}: ${n1} × ${sh(aU)} = ${sh(n1 * aU)}. Total for ${c2}: ${n2} × ${sh(bU)} = ${sh(n2 * bU)}.`,
              `Combined total = ${sh(tot)}, shared between ${n1 + n2} pupils.`,
              `Mean = ${sh(tot)} ÷ ${n1 + n2} = ${approx(tot, D, 1)}.`,
            ],
            hint: "You can't just average the two means — the classes are different sizes. Combine the totals.",
            traps: numTraps(ans, [[clean((aU + bU) / (2 * scale)), "Averaging the two means ignores the class sizes. Find each class's total first."]]),
          };
        }
        // algebra: mean of expressions in x
        const k = r.int(4, 5);
        const terms = Array.from({ length: k }, () => [r.int(1, 3), r.int(-6, 9)] as [number, number]);
        const x = r.int(2, 12);
        if (terms.some(([p, q]) => p * x + q <= 0)) return null;
        const A = sum(terms.map((t) => t[0]));
        const B = sum(terms.map((t) => t[1]));
        const tot = A * x + B;
        if (tot % k !== 0) return null;
        const m = tot / k;
        const exprs = terms.map(([p, q]) => `{{${poly([[p, "x"], [q, ""]])}}}`);
        return {
          prompt: `The mean of these ${k} expressions is ${m}:\n\n${exprs.join(",  ")}\n\nWork out the value of {{x}}.`,
          answer: { type: "number", value: x },
          solution: [
            `Add them: {{${poly([[A, "x"], [B, ""]])}}}.`,
            `Mean = ${m}, so the total is ${k} × ${m} = ${k * m}: {{${poly([[A, "x"], [B, ""]])} = ${k * m}}}.`,
            `{{${A}x = ${k * m - B}}}, so {{x = ${x}}}.`,
          ],
          hint: "Mean × number of values = total. Write the total in terms of x.",
          traps: numTraps(x, [
            [Number.isInteger((m - B) / A) ? (m - B) / A : null, `The total of ${k} values is ${k} × the mean, not the mean itself.`],
            [m, "That's the mean. Set (sum of the expressions) = number of values × mean and solve."],
          ]),
        };
      }, rng);
    },
  },

  // 3 ─ Quartiles and IQR from a list -------------------------------------
  {
    id: `${T}.quartiles-list`,
    topicId: T,
    title: "Find the quartiles and IQR of a list",
    level: 2,
    guideRef: "quartiles-iqr",
    generate(rng, tier) {
      return attempt((r) => {
        const n = tier === 1 ? r.pick([7, 11]) : tier === 2 ? r.pick([11, 15]) : r.pick([15, 19]);
        const stem = tier === 3 && r.bool(0.6);
        type C = { text: string; lo: number; hi: number; unit: string; key?: string };
        const pool: C[] = stem
          ? [
              { text: `The stem-and-leaf diagram shows the times, in minutes, that ${n} pupils spent on a maths homework.`, lo: 12, hi: 58, unit: "minutes", key: "minutes" },
              { text: `The stem-and-leaf diagram shows the marks of ${n} pupils in a science test.`, lo: 21, hi: 67, unit: "marks", key: "marks" },
              { text: `The stem-and-leaf diagram shows the number of durians sold at a stall on each of ${n} days.`, lo: 14, hi: 62, unit: "durians", key: "durians" },
            ]
          : [
              { text: `The numbers of push-ups that ${n} pupils did in one minute are:`, lo: 12, hi: 58, unit: "push-ups" },
              { text: `The times, in minutes, that ${n} pupils spent on a homework are:`, lo: 15, hi: 70, unit: "minutes" },
              { text: `The numbers of durians sold at a stall on ${n} days are:`, lo: 8, hi: 60, unit: "durians" },
              { text: `The prices, in $, of ${n} second-hand bicycles are:`, lo: 45, hi: 180, unit: "dollars" },
            ];
        const c = r.pick(pool);
        const data = Array.from({ length: n }, () => r.int(c.lo, c.hi));
        const s = asc(data);
        const i1 = (n + 1) / 4;
        const i2 = (n + 1) / 2;
        const i3 = (3 * (n + 1)) / 4;
        const q1 = s[i1 - 1];
        const q3 = s[i3 - 1];
        const med = s[i2 - 1];
        if (q3 - q1 < 3) return null;
        let shown: string;
        if (stem) {
          const lo = Math.floor(s[0] / 10);
          const hi = Math.floor(s[n - 1] / 10);
          const rows: string[] = [];
          for (let t = lo; t <= hi; t++) {
            const leaves = s.filter((v) => Math.floor(v / 10) === t).map((v) => v % 10);
            if (!leaves.length) return null;
            rows.push(`| ${t} | ${leaves.join(" ")} |`);
          }
          const ex = s[0];
          shown = `| Stem | Leaves |\n|---|---|\n${rows.join("\n")}\n\nKey: ${Math.floor(ex / 10)} | ${ex % 10} means ${ex} ${c.key}`;
        } else {
          shown = data.join(", ");
        }
        const ask = r.pick(tier === 1 ? (["lq", "uq", "iqr"] as const) : (["lq", "uq", "iqr", "iqr"] as const));
        const ans = ask === "lq" ? q1 : ask === "uq" ? q3 : q3 - q1;
        const question =
          ask === "lq" ? "Work out the lower quartile." : ask === "uq" ? "Work out the upper quartile." : "Work out the interquartile range.";
        const traps: Array<[number | null, string]> = [];
        if (!stem) {
          if (ask === "lq") traps.push([data[i1 - 1], "That's the value in that position in the unordered list. Order the data first."]);
          if (ask === "uq") traps.push([data[i3 - 1], "That's the value in that position in the unordered list. Order the data first."]);
          if (ask === "iqr" && data[i3 - 1] - data[i1 - 1] > 0) traps.push([data[i3 - 1] - data[i1 - 1], "Order the data before finding the quartiles."]);
        }
        if (ask === "lq") traps.push([q3, "That's the upper quartile — the lower quartile is a quarter of the way up."]);
        if (ask === "uq") traps.push([q1, "That's the lower quartile — the upper quartile is three quarters of the way up."]);
        if (ask === "iqr") traps.push([s[n - 1] - s[0], "That's the range (largest − smallest). The IQR is upper quartile − lower quartile."]);
        if (ask !== "iqr") traps.push([med, "That's the median (the middle value)."]);
        return {
          prompt: `${c.text}\n\n${shown}\n\n${question}`,
          answer: { type: "number", value: ans },
          solution: [
            stem ? `The diagram is already in order: ${s.join(", ")}.` : `Order the data: ${s.join(", ")}.`,
            `n = ${n}. Lower quartile = {{(${n} + 1)/4}} = ${ordinal(i1)} value = ${q1}. Upper quartile = {{3 * (${n} + 1)/4}} = ${ordinal(i3)} value = ${q3}.`,
            ask === "iqr" ? `IQR = ${q3} − ${q1} = ${q3 - q1}.` : `So the ${ask === "lq" ? "lower" : "upper"} quartile is ${ans}.`,
          ],
          hint: "Order the data, then use positions {{(n+1)/4}} and {{3(n+1)/4}}.",
          traps: numTraps(ans, traps),
        };
      }, rng);
    },
  },

  // 4 ─ Mean from a discrete frequency table -------------------------------
  {
    id: `${T}.table-mean`,
    topicId: T,
    title: "Mean from a frequency table",
    level: 1,
    guideRef: "frequency-tables",
    generate(rng, tier) {
      const missing = tier === 3 && rng.bool(0.5);
      return attempt((r) => {
        const c = r.pick(FCTX);
        const k = r.pick(c.k);
        const x0 = r.pick(c.x0);
        const xs = Array.from({ length: k }, (_, i) => x0 + i);
        const fs = Array.from({ length: k }, () => (tier === 1 ? r.int(1, 10) : tier === 2 ? r.int(1, 20) : r.int(2, 25)));
        const N = sum(fs);
        const S = sum(fs.map((f, i) => f * xs[i]));
        const products = xs.map((x, i) => `${x} × ${fs[i]}`).join(" + ");
        if (!missing) {
          if (isTie(S, N, 1)) return null;
          const ans = divRound(S, N, 1);
          return {
            prompt: `The table shows ${c.what}.\n\n${fTable(c, xs, fs)}\n\nWork out the mean ${c.noun}. Give your answer correct to 1 decimal place.`,
            answer: { type: "number", value: ans },
            solution: [
              `Total of all the values: Σfx = ${products} = ${S}.`,
              `Number of values: Σf = ${fs.join(" + ")} = ${N}.`,
              `Mean = ${S} ÷ ${N} = ${approx(S, N, 1)}.`,
            ],
            hint: "Multiply each value by its frequency and add; then divide by the total frequency.",
            traps: numTraps(ans, [
              [divRound(S, k, 1), `Divide by the total frequency (${N}), not by the number of rows.`],
              [divRound(N, k, 1), "That's the mean of the frequencies. You want the mean of the values."],
            ]),
          };
        }
        // Missing frequency k from a given mean.
        const j = r.int(0, k - 1);
        if (fs[j] > 15 || fs[j] < 2) return null;
        if (!exactTo(S, N, 1) || exactTo(S, N, 0) && r.bool(0.7)) return null;
        const mT = (S * 10) / N;
        if (10 * xs[j] === mT) return null;
        const N1 = N - fs[j];
        const S1 = S - xs[j] * fs[j];
        const mm = num(clean(mT / 10));
        const cells = fs.map((f, i) => (i === j ? "*k*" : String(f)));
        return {
          prompt: `The table shows ${c.what}.\n\n${fTable(c, xs, cells)}\n\nThe mean ${c.noun} is ${mm}. Work out the value of *k*.`,
          answer: { type: "number", value: fs[j] },
          solution: [
            `Σfx = ${S1} + ${xs[j]}k and Σf = ${N1} + k.`,
            `{{(${S1} + ${xs[j]}k)/(${N1} + k) = ${mm}}}, so ${S1} + ${xs[j]}k = ${num(clean((mT * N1) / 10))} + ${mm}k.`,
            `Collect the k terms on one side: ${num(clean(Math.abs(xs[j] - mT / 10)))}k = ${num(clean(Math.abs((mT * N1) / 10 - S1)))}, so k = ${fs[j]}.`,
          ],
          hint: "Write Σfx and Σf in terms of k, then set Σfx ÷ Σf equal to the mean.",
        };
      }, rng);
    },
  },

  // 5 ─ Median, mode, range from a discrete table ---------------------------
  {
    id: `${T}.table-median-mode-range`,
    topicId: T,
    title: "Median, mode and range from a frequency table",
    level: 1,
    guideRef: "frequency-tables",
    generate(rng, tier) {
      return attempt((r) => {
        const c = r.pick(FCTX);
        const k = r.pick(c.k);
        const x0 = r.pick(c.x0);
        const xs = Array.from({ length: k }, (_, i) => x0 + i);
        const fs = Array.from({ length: k }, () => (tier === 1 ? r.int(1, 12) : r.int(1, 22)));
        const ask = r.pick(["median", "median", "mode", "range"] as const);
        if (ask === "range" && tier >= 2 && r.bool(0.6)) {
          if (r.bool()) fs[0] = 0;
          else fs[k - 1] = 0;
        }
        const N = sum(fs);
        const table = fTable(c, xs, fs);
        const pre = `The table shows ${c.what}.\n\n${table}\n\n`;
        if (ask === "median") {
          const ra = classOfRank(fs, Math.floor((N + 1) / 2));
          const rb = classOfRank(fs, Math.ceil((N + 1) / 2));
          const ans = clean((xs[ra] + xs[rb]) / 2);
          const cfs = running(fs);
          const midX = k % 2 ? xs[(k - 1) / 2] : (xs[k / 2 - 1] + xs[k / 2]) / 2;
          return {
            prompt: `${pre}Find the median ${c.noun}.`,
            answer: { type: "number", value: ans },
            solution: [
              N % 2
                ? `There are ${N} values, so the median is the {{(${N} + 1)/2}} = ${ordinal((N + 1) / 2)} value.`
                : `There are ${N} values, so the median is the {{(${N} + 1)/2}} = ${num((N + 1) / 2)}th value: halfway between the ${ordinal(N / 2)} and ${ordinal(N / 2 + 1)} values.`,
              `Running totals: ${cfs.join(", ")}.`,
              N % 2
                ? `The ${ordinal((N + 1) / 2)} value is in the row for ${xs[ra]}, so the median is ${ans}.`
                : ra === rb
                  ? `The ${ordinal(N / 2)} and ${ordinal(N / 2 + 1)} values are both ${xs[ra]}, so the median is ${ans}.`
                  : `The ${ordinal(N / 2)} value is ${xs[ra]} and the ${ordinal(N / 2 + 1)} is ${xs[rb]}, so the median is (${xs[ra]} + ${xs[rb]}) ÷ 2 = ${ans}.`,
            ],
            hint: "Find the position of the middle value, then count down the frequencies.",
            traps: numTraps(ans, [
              [(N + 1) / 2, `${num((N + 1) / 2)} is the *position* of the median — find which value is in that position.`],
              [clean(midX), "That's the middle row of the table. The median is the middle of all the data values, so use the frequencies."],
            ]),
          };
        }
        if (ask === "mode") {
          const mx = Math.max(...fs);
          if (fs.filter((f) => f === mx).length !== 1) return null;
          const ans = xs[fs.indexOf(mx)];
          return {
            prompt: `${pre}Write down the mode.`,
            answer: { type: "number", value: ans },
            solution: [`The highest frequency is ${mx}.`, `It belongs to ${ans}, so the mode is ${ans}.`],
            hint: "The mode is the value with the highest frequency.",
            traps: numTraps(ans, [[mx, `${mx} is the highest *frequency*. The mode is the value it belongs to.`]]),
          };
        }
        const nz = xs.filter((_, i) => fs[i] > 0);
        const ans = nz[nz.length - 1] - nz[0];
        if (ans <= 0) return null;
        return {
          prompt: `${pre}Work out the range.`,
          answer: { type: "number", value: ans },
          solution: [
            `Ignore any value with frequency 0. Largest value = ${nz[nz.length - 1]}, smallest value = ${nz[0]}.`,
            `Range = ${nz[nz.length - 1]} − ${nz[0]} = ${ans}.`,
          ],
          hint: "Range = largest value − smallest value that actually occurs.",
          traps: numTraps(ans, [
            [xs[k - 1] - xs[0], "A value with frequency 0 never occurred — leave it out."],
            [Math.max(...fs) - Math.min(...fs), "That's the range of the frequencies. Use the values in the first column."],
          ]),
        };
      }, rng);
    },
  },

  // 6 ─ Estimated mean from grouped data -----------------------------------
  {
    id: `${T}.grouped-mean`,
    topicId: T,
    title: "Estimate the mean from grouped data",
    level: 2,
    guideRef: "frequency-tables",
    generate(rng, tier) {
      return attempt((r) => {
        const c = r.pick(GCTX);
        const k = tier === 1 ? r.int(4, 5) : r.int(4, 6);
        const b = tier === 3 && r.bool(0.6) ? unequalClasses(r, c, k, r.pick(c.units)) : equalClasses(r, c, k, tier);
        if (!b) return null;
        const fs = Array.from({ length: k }, () => r.int(tier === 1 ? 2 : 1, tier === 1 ? 15 : 28));
        const N = sum(fs);
        const mid2 = fs.map((_, i) => b[i] + b[i + 1]);
        const S2 = sum(fs.map((f, i) => f * mid2[i]));
        if (isTie(S2, 2 * N, 1)) return null;
        const ans = divRound(S2, 2 * N, 1);
        const mids = mid2.map((m) => num(clean(m / 2)));
        const SU = sum(fs.map((f, i) => f * b[i + 1]));
        return {
          prompt: `The table shows information about ${c.about(`${N} ${c.who}`)}.\n\n${gTable(c, b, fs)}\n\nWork out an estimate for the mean ${c.qty}. Give your answer correct to 1 decimal place.`,
          answer: { type: "number", value: ans },
          solution: [
            `Use the midpoint of each class: ${mids.join(", ")}.`,
            `Σfx = ${fs.map((f, i) => `${f} × ${mids[i]}`).join(" + ")} = ${num(clean(S2 / 2))}.`,
            `Estimated mean = ${num(clean(S2 / 2))} ÷ ${N} = ${approx(S2, 2 * N, 1)}.`,
          ],
          hint: "You don't know the exact values, so assume each one is at the midpoint of its class.",
          traps: numTraps(ans, [
            [divRound(SU, N, 1), "You used the upper class bounds. Use the midpoints — they are the best single estimate for each class."],
            [divRound(S2, 2 * k, 1), `Divide by the total frequency (${N}), not by the number of classes.`],
          ]),
        };
      }, rng);
    },
  },

  // 7 ─ Modal class, median class and estimated range ----------------------
  {
    id: `${T}.grouped-classes`,
    topicId: T,
    title: "Modal class, median class and range of grouped data",
    level: 2,
    guideRef: "frequency-tables",
    generate(rng, tier) {
      return attempt((r) => {
        const c = r.pick(GCTX);
        const k = r.int(5, 6);
        const b = equalClasses(r, c, k, tier);
        const fs = Array.from({ length: k }, () => r.int(1, tier === 1 ? 18 : 30));
        const ask = r.pick(tier === 1 ? (["modal", "median"] as const) : (["modal", "median", "median", "range"] as const));
        if (ask === "range" && r.bool(0.6)) {
          if (r.bool()) fs[0] = 0;
          else fs[k - 1] = 0;
        }
        const N = sum(fs);
        const pre = `The table shows information about ${c.about(`${N} ${c.who}`)}.\n\n${gTable(c, b, fs)}\n\n`;
        const midIdx = Math.floor((k - 1) / 2);
        if (ask === "modal") {
          const mx = Math.max(...fs);
          if (fs.filter((f) => f === mx).length !== 1) return null;
          const i = fs.indexOf(mx);
          const traps: Trap[] = [];
          const med = classOfRank(fs, Math.ceil(N / 2));
          if (med !== i && classOfRank(fs, Math.floor(N / 2) + 1) === med) traps.push(classTrap(b[med], b[med + 1], c.v, "That's the class containing the median. The modal class has the highest frequency."));
          return {
            prompt: `${pre}Write down the modal class.`,
            answer: classAnswer(b[i], b[i + 1], c.v),
            solution: [`The highest frequency is ${mx}.`, `So the modal class is ${cls(b[i], b[i + 1], c.v)}.`],
            hint: "The modal class is the class with the highest frequency.",
            traps,
          };
        }
        if (ask === "median") {
          const lo = classOfRank(fs, Math.ceil(N / 2));
          const hi = classOfRank(fs, Math.floor(N / 2) + 1);
          if (lo !== hi) return null;
          const cfs = running(fs);
          const traps: Trap[] = [];
          const mx = Math.max(...fs);
          const modal = fs.indexOf(mx);
          if (modal !== lo && fs.filter((f) => f === mx).length === 1) traps.push(classTrap(b[modal], b[modal + 1], c.v, "That's the modal class (highest frequency). The median class contains the middle value."));
          if (midIdx !== lo && midIdx !== modal) traps.push(classTrap(b[midIdx], b[midIdx + 1], c.v, "That's the middle row of the table — use the running totals of the frequencies instead."));
          return {
            prompt: `${pre}Find the class interval that contains the median.`,
            answer: classAnswer(b[lo], b[lo + 1], c.v),
            solution: [
              `There are ${N} values, so the median is about the {{${N}/2}} = ${N % 2 ? `${num(N / 2)}th` : ordinal(N / 2)} value.`,
              `Running totals: ${cfs.join(", ")}.`,
              `The running total first reaches ${num(N / 2)} in the class ${cls(b[lo], b[lo + 1], c.v)}, so that class contains the median.`,
            ],
            hint: "Find the position of the middle value, then add up the frequencies until you pass it.",
            traps,
          };
        }
        const nzI = fs.map((f, i) => (f > 0 ? i : -1)).filter((i) => i >= 0);
        const ans = b[nzI[nzI.length - 1] + 1] - b[nzI[0]];
        return {
          prompt: `${pre}Work out an estimate for the range of the ${c.qtys}, using the class boundaries of the lowest and highest classes that contain data.`,
          answer: { type: "number", value: ans },
          solution: [
            `The lowest class with data starts at ${b[nzI[0]]}; the highest class with data ends at ${b[nzI[nzI.length - 1] + 1]}.`,
            `Estimated range = ${b[nzI[nzI.length - 1] + 1]} − ${b[nzI[0]]} = ${ans} ${c.unit}.`,
            "It is only an estimate: the real smallest and largest values could be anywhere inside those classes.",
          ],
          hint: "Use the smallest possible value and the largest possible value from the table.",
          traps: numTraps(ans, [
            [b[k] - b[0], "A class with frequency 0 contains no data — leave it out."],
            [Math.max(...fs) - Math.min(...fs), "That's the range of the frequencies. Use the class boundaries."],
          ]),
        };
      }, rng);
    },
  },

  // 8 ─ Cumulative frequency tables ----------------------------------------
  {
    id: `${T}.cf-table`,
    topicId: T,
    title: "Build and use a cumulative frequency table",
    level: 2,
    guideRef: "cumulative-frequency",
    generate(rng, tier) {
      const kind = rng.pick(tier === 1 ? (["cf", "more"] as const) : tier === 2 ? (["cf", "point", "more"] as const) : (["point", "more", "between"] as const));
      return attempt((r) => {
        const c = r.pick(GCTX);
        const k = r.int(5, 6);
        const b = equalClasses(r, c, k, tier);
        const fs = Array.from({ length: k }, () => r.int(2, tier === 1 ? 16 : 30));
        const N = sum(fs);
        const cf = running(fs);
        if (kind === "cf") {
          const j = r.int(2, k - 1); // class index j-1 ends at b[j]
          const ans = cf[j - 1];
          return {
            prompt: `The table shows information about ${c.about(`${N} ${c.who}`)}.\n\n${gTable(c, b, fs)}\n\nWork out the cumulative frequency for ${cls(b[0], b[j], c.v)}.`,
            answer: { type: "number", value: ans },
            solution: [`Add the frequencies of every class up to ${b[j]}: ${fs.slice(0, j).join(" + ")} = ${ans}.`],
            hint: "Cumulative frequency is a running total.",
            traps: numTraps(ans, [[fs[j - 1], "That's the frequency of just one class. Cumulative frequency adds up all the classes so far."]]),
          };
        }
        if (kind === "point") {
          const j = r.int(1, k - 2);
          const mid = (b[j] + b[j + 1]) / 2;
          return {
            prompt: `The table shows information about ${c.about(`${N} ${c.who}`)}.\n\n${gTable(c, b, fs)}\n\nThe data are used to draw a cumulative frequency graph. Which point is plotted for the class ${cls(b[j], b[j + 1], c.v)}? Give the coordinates (${c.v}, cumulative frequency).`,
            answer: { type: "list", values: [b[j + 1], cf[j]], ordered: true, display: `(${b[j + 1]}, ${cf[j]})` },
            solution: [
              `Cumulative frequency up to ${b[j + 1]}: ${fs.slice(0, j + 1).join(" + ")} = ${cf[j]}.`,
              `Plot it at the **upper bound** of the class, ${b[j + 1]} — by then all ${cf[j]} values have been counted.`,
              `Point: (${b[j + 1]}, ${cf[j]}).`,
            ],
            hint: "Plot cumulative frequency against the upper class bound.",
            traps: [
              { spec: { type: "list", values: [mid, cf[j]], ordered: true }, feedback: "Cumulative frequency is plotted at the upper bound, not the midpoint." },
              { spec: { type: "list", values: [b[j], cf[j]], ordered: true }, feedback: "Plot at the upper bound of the class — the running total isn't complete until the end of the class." },
              ...(fs[j] !== cf[j] ? [{ spec: { type: "list", values: [b[j + 1], fs[j]], ordered: true } as AnswerSpec, feedback: "The y-coordinate is the cumulative frequency (running total), not the class frequency." }] : []),
            ],
          };
        }
        const pre = `The cumulative frequency table shows information about ${c.about(`${N} ${c.who}`)}.\n\n${cfTable(c, b, cf)}\n\n`;
        if (kind === "more") {
          const j = r.int(1, k - 2); // boundary b[j+1]
          const X = b[j + 1];
          const ans = N - cf[j];
          return {
            prompt: `${pre}How many ${c.who} ${c.more(num(X))}?`,
            answer: { type: "number", value: ans },
            solution: [`From the table, ${cf[j]} ${c.who} have ${c.v} ≤ ${X}.`, `Total = ${N}, so ${N} − ${cf[j]} = ${ans} have ${c.v} > ${X}.`],
            hint: "The table gives how many are *at most* a value. Subtract from the total.",
            traps: numTraps(ans, [[cf[j], `${cf[j]} is how many have ${c.v} ≤ ${X}. You want *more than* ${X}: subtract from ${N}.`]]),
          };
        }
        const i = r.int(0, k - 3);
        const j = r.int(i + 1, k - 2);
        const A = b[i + 1];
        const B = b[j + 1];
        const ans = cf[j] - cf[i];
        return {
          prompt: `${pre}How many ${c.who} ${c.between(num(A), num(B))}? (That is, ${cls(A, B, c.v)}.)`,
          answer: { type: "number", value: ans },
          solution: [`Up to ${B}: ${cf[j]}. Up to ${A}: ${cf[i]}.`, `Between: ${cf[j]} − ${cf[i]} = ${ans}.`],
          hint: "Subtract two cumulative frequencies.",
          traps: numTraps(ans, [[cf[j], `That counts everything up to ${B}, including those at or below ${A}.`]]),
        };
      }, rng);
    },
  },

  // 9 ─ Read a cumulative frequency graph ----------------------------------
  {
    id: `${T}.cf-graph`,
    topicId: T,
    title: "Read a cumulative frequency graph",
    level: 3,
    guideRef: "cumulative-frequency",
    generate(rng, tier) {
      const asks = tier === 1 ? (["median", "lq", "uq"] as const) : tier === 2 ? (["median", "iqr", "iqr", "more", "uq"] as const) : (["iqr", "more", "pct", "longer"] as const);
      const ask = rng.pick(asks);
      return attempt((r) => {
        const c = r.pick(GCTX);
        const k = r.int(5, 6);
        const b = equalClasses(r, c, k, tier);
        const W = b[1] - b[0];
        const N = r.pick([40, 60, 80, 100, 120, 160, 200]);
        const peak = r.int(1, k - 2);
        const w = Array.from({ length: k }, (_, i) => r.int(2, 6) + (Math.abs(i - peak) <= 1 ? r.int(4, 9) : 0));
        const Wt = sum(w);
        const fs = w.map((x) => Math.floor((x * N) / Wt));
        fs[peak] += N - sum(fs);
        if (fs.some((f) => f < 2)) return null;
        const cf = running(fs);
        const all = [0, ...cf];
        const read = (target: number) => {
          for (let i = 0; i < k; i++) if (target <= cf[i]) return b[i] + ((target - all[i]) / fs[i]) * W;
          return b[k];
        };
        const cfAt = (X: number) => {
          const i = Math.min(k - 1, Math.floor((X - b[0]) / W));
          return all[i] + ((X - b[i]) / W) * fs[i];
        };
        const mx = W / 5;
        const my = N / 20;
        const g = cfGraph(c, b, cf, N);
        const intro = `The cumulative frequency graph shows information about ${c.about(`${N} ${c.who}`)}.`;
        const acc = `(Answers within one small square are accepted.)`;
        const q1 = read(N / 4);
        const q2 = read(N / 2);
        const q3 = read((3 * N) / 4);
        const rx = (v: number) => roundTo(v, 1);
        if (ask === "median" || ask === "lq" || ask === "uq") {
          const target = ask === "median" ? N / 2 : ask === "lq" ? N / 4 : (3 * N) / 4;
          const val = ask === "median" ? q2 : ask === "lq" ? q1 : q3;
          const word = ask === "median" ? `median ${c.qty}` : `${ask === "lq" ? "lower" : "upper"} quartile of the ${c.qtys}`;
          const ans = rx(val);
          return {
            prompt: `${intro}\n\nUse the graph to find an estimate for the ${word}. ${acc}`,
            diagram: g,
            answer: { type: "number", value: ans, tolerance: mx, display: `about ${num(ans)}` },
            solution: [
              `${ask === "median" ? "Median" : ask === "lq" ? "Lower quartile" : "Upper quartile"}: go to ${ask === "median" ? "½" : ask === "lq" ? "¼" : "¾"} of ${N} = ${num(target)} on the cumulative frequency axis.`,
              `Go across to the graph, then down to the ${c.v}-axis.`,
              `Reading ≈ ${num(ans)} ${c.unit}.`,
            ],
            hint: `For a cumulative frequency graph use ${ask === "median" ? "n ÷ 2" : ask === "lq" ? "n ÷ 4" : "3n ÷ 4"} — read across, then down.`,
            traps: numTraps(
              ans,
              [
                [ask === "lq" ? rx(q3) : ask === "uq" ? rx(q1) : null, ask === "lq" ? "That's the upper quartile (¾ of the way up)." : "That's the lower quartile (¼ of the way up)."],
                [ask !== "median" ? rx(q2) : null, "That's the median. Quartiles are read at ¼ and ¾ of the total."],
              ],
              mx,
            ),
          };
        }
        if (ask === "iqr") {
          const ans = rx(q3 - q1);
          return {
            prompt: `${intro}\n\nUse the graph to find an estimate for the interquartile range of the ${c.qtys}. ${acc}`,
            diagram: g,
            answer: { type: "number", value: ans, tolerance: mx, display: `about ${num(ans)}` },
            solution: [
              `Lower quartile: read across from ${num(N / 4)} → about ${num(rx(q1))}.`,
              `Upper quartile: read across from ${num((3 * N) / 4)} → about ${num(rx(q3))}.`,
              `IQR ≈ ${num(rx(q3))} − ${num(rx(q1))} = ${num(ans)} ${c.unit}.`,
            ],
            hint: "IQR = upper quartile − lower quartile. Read them at ¾ and ¼ of the total frequency.",
            traps: numTraps(ans, [[rx(q3), "That's just the upper quartile — subtract the lower quartile."], [rx(q2), "That's the median."]], mx),
          };
        }
        if (ask === "more") {
          const steps = Math.round((b[k] - b[0]) / mx);
          const X = b[0] + r.int(3, steps - 3) * mx;
          const below = cfAt(X);
          const ans = Math.round(N - below);
          if (Math.abs(N - below - ans) > 0.35) return null;
          return {
            prompt: `${intro}\n\nUse the graph to find an estimate for the number of ${c.who} that ${c.more(num(X))}. ${acc}`,
            diagram: g,
            answer: { type: "number", value: ans, tolerance: my, display: `about ${ans}` },
            solution: [`Go up from ${num(X)} on the ${c.v}-axis to the graph, then across: about ${num(Math.round(below))} have ${c.v} ≤ ${num(X)}.`, `More than ${num(X)}: ${N} − ${num(Math.round(below))} ≈ ${ans}.`],
            hint: "The graph gives how many are *at most* a value. Subtract from the total.",
            traps: numTraps(ans, [[Math.round(below), `That's how many have ${c.v} ≤ ${num(X)}. Subtract it from ${N}.`]], my),
          };
        }
        if (ask === "pct") {
          const p = r.pick([10, 20, 80, 90]);
          const val = read((p * N) / 100);
          const ans = rx(val);
          return {
            prompt: `${intro}\n\nUse the graph to estimate the ${ordinal(p)} percentile of the ${c.qtys} (the value below which ${p}% of the data lie). ${acc}`,
            diagram: g,
            answer: { type: "number", value: ans, tolerance: mx, display: `about ${num(ans)}` },
            solution: [`${p}% of ${N} = ${num((p * N) / 100)}.`, `Read across from ${num((p * N) / 100)} to the graph, then down: about ${num(ans)} ${c.unit}.`],
            hint: `Find ${p}% of the total frequency on the vertical axis.`,
            traps: numTraps(ans, [[rx(read(((100 - p) * N) / 100)), `That's the ${ordinal(100 - p)} percentile — you read at ${100 - p}% instead of ${p}%.`]], mx),
          };
        }
        // longer: "p% took longer than T; find T"
        const p = r.pick([10, 20, 25, 30]);
        const val = read(((100 - p) * N) / 100);
        const ans = rx(val);
        return {
          prompt: `${intro}\n\n${p}% of the ${c.who} have ${/^[aeiou]/.test(c.qty) ? "an" : "a"} ${c.qty} greater than *T* ${c.unit}. Use the graph to estimate *T*. ${acc}`,
          diagram: g,
          answer: { type: "number", value: ans, tolerance: mx, display: `about ${num(ans)}` },
          solution: [
            `${p}% above T means ${100 - p}% at or below T.`,
            `${100 - p}% of ${N} = ${num(((100 - p) * N) / 100)}. Read across from ${num(((100 - p) * N) / 100)}, then down: T ≈ ${num(ans)}.`,
          ],
          hint: "The graph counts from the bottom: how many are *below* T?",
          traps: numTraps(ans, [[rx(read((p * N) / 100)), `That's the value with ${p}% *below* it. You need ${100 - p}% below.`]], mx),
        };
      }, rng);
    },
  },

  // 10 ─ Frequency density calculations ------------------------------------
  {
    id: `${T}.frequency-density`,
    topicId: T,
    title: "Frequency density: frequency ÷ class width",
    level: 2,
    guideRef: "histograms",
    generate(rng, tier) {
      const kind = rng.pick(tier === 1 ? (["fd", "freq"] as const) : tier === 2 ? (["fd", "freq", "area"] as const) : (["freq", "area", "area"] as const));
      return attempt((r) => {
        const c = r.pick(GCTX);
        if (kind === "area") {
          const u = r.pick(c.units);
          const start = r.pick(c.starts);
          const wA = u * r.int(1, 3);
          const wB = u * r.int(1, 4);
          if (wA === wB) return null;
          const hA = r.int(2, 9);
          const hB = r.int(2, 9);
          if (hA === hB) return null;
          const fA = r.int(2, 30) * 2;
          const fBnum = hB * fA * wB;
          const fBden = wA * hA;
          if (fBnum % fBden !== 0) return null;
          const fB = fBnum / fBden;
          if (fB < 4 || fB > 150) return null;
          const loA = start;
          const hiA = start + wA;
          const hiB = hiA + wB;
          const wrong = (fA * hB) / hA;
          return {
            prompt: `A histogram shows ${c.about(`some ${c.who}`)}. The bar for the class ${cls(loA, hiA, c.v)} is ${hA} cm tall and represents ${fA} ${c.who}. The bar for the class ${cls(hiA, hiB, c.v)} is ${hB} cm tall.\n\nHow many ${c.who} does the bar for ${cls(hiA, hiB, c.v)} represent?`,
            answer: { type: "number", value: fB },
            solution: [
              `In a histogram **area** represents frequency. Frequency density for the first class = ${fA} ÷ ${wA} = ${frac2(fA, wA)}, drawn ${hA} cm tall.`,
              `So 1 cm of height = ${frac2(fA, wA)} ÷ ${hA} = ${frac2(fA, wA * hA)} in frequency density.`,
              `Second bar: frequency density = ${hB} × ${frac2(fA, wA * hA)} = ${frac2(hB * fA, wA * hA)}; frequency = that × ${wB} = ${fB}.`,
            ],
            hint: "Frequency = frequency density × class width. The two classes have different widths.",
            traps: numTraps(fB, [[Number.isInteger(wrong) ? wrong : null, "You compared heights only. The classes have different widths, so compare areas (height × width)."]]),
          };
        }
        const k = r.int(4, 5);
        const u = r.pick(c.units);
        const b = unequalClasses(r, c, k, u);
        if (!b) return null;
        const widths = b.slice(1).map((x, i) => x - b[i]);
        const sT = tier === 1 ? 10 : r.pick([2, 4, 10]);
        const fdT = widths.map(() => sT * r.int(1, tier === 1 ? 8 : 12));
        const fs = fdT.map((h, i) => (h * widths[i]) / 10);
        if (fs.some((f) => !Number.isInteger(f) || f < 2 || f > 120)) return null;
        const j = r.int(0, k - 1);
        const fd = clean(fdT[j] / 10);
        if (kind === "fd") {
          return {
            prompt: `The table shows information about ${c.about(`${sum(fs)} ${c.who}`)}.\n\n${gTable(c, b, fs)}\n\nA histogram is drawn. Work out the frequency density for the class ${cls(b[j], b[j + 1], c.v)}.`,
            answer: { type: "number", value: fd },
            solution: [`Class width = ${b[j + 1]} − ${b[j]} = ${widths[j]}.`, `Frequency density = frequency ÷ class width = ${fs[j]} ÷ ${widths[j]} = ${num(fd)}.`],
            hint: "Frequency density = frequency ÷ class width.",
            traps: numTraps(fd, [
              [fs[j] * widths[j], "Divide the frequency by the class width — don't multiply."],
              [exactTo(widths[j], fs[j], 2) ? clean(widths[j] / fs[j]) : null, "That's width ÷ frequency. It's frequency ÷ width."],
              [fs[j], "That's the frequency. In a histogram the height is frequency ÷ class width."],
            ]),
          };
        }
        const f = fs[j];
        return {
          prompt: `In a histogram showing ${c.about(`some ${c.who}`)}, the bar for the class ${cls(b[j], b[j + 1], c.v)} has a height (frequency density) of ${num(fd)}.\n\nHow many ${c.who} are in this class?`,
          answer: { type: "number", value: f },
          solution: [`Class width = ${b[j + 1]} − ${b[j]} = ${widths[j]}.`, `Frequency = frequency density × class width = ${num(fd)} × ${widths[j]} = ${f}.`],
          hint: "Frequency = frequency density × class width (the area of the bar).",
          traps: numTraps(f, [
            [fd, "That's the height of the bar. The frequency is the *area*: height × width."],
            [exactTo(fdT[j], 10 * widths[j], 2) ? clean(fdT[j] / (10 * widths[j])) : null, "Multiply by the class width, don't divide."],
          ]),
        };
      }, rng);
    },
  },

  // 11 ─ Read a histogram ----------------------------------------------------
  {
    id: `${T}.histogram-read`,
    topicId: T,
    title: "Read frequencies from a histogram",
    level: 3,
    guideRef: "histograms",
    generate(rng, tier) {
      const kind = rng.pick(tier === 1 ? (["class", "class", "total"] as const) : tier === 2 ? (["class", "total", "more"] as const) : (["more", "between", "between"] as const));
      return attempt((r) => {
        const c = r.pick(GCTX);
        const k = r.int(4, 5);
        const u = r.pick(c.units);
        const b = unequalClasses(r, c, k, u);
        if (!b) return null;
        const widths = b.slice(1).map((x, i) => x - b[i]);
        if (b[k] - b[0] > 22 * u) return null;
        const sT = r.pick(u === 5 ? [2, 4, 10] : [2, 4, 10, 20]);
        const fdT = widths.map(() => sT * r.int(1, 12));
        const fs = fdT.map((h, i) => (h * widths[i]) / 10);
        if (fs.some((f) => !Number.isInteger(f) || f < 2 || f > 150)) return null;
        if (new Set(fdT).size < k - 1) return null;
        const g = histogram(c, b, fdT, u, sT);
        const intro = `The histogram shows information about ${c.about(`some ${c.who}`)}.`;
        const fdS = (i: number) => num(clean(fdT[i] / 10));
        if (kind === "class") {
          const j = r.int(0, k - 1);
          if (widths[j] === 10 && fdT[j] === 10) return null;
          return {
            prompt: `${intro}\n\nHow many ${c.who} are in the class ${cls(b[j], b[j + 1], c.v)}?`,
            diagram: g,
            answer: { type: "number", value: fs[j] },
            solution: [`Height of the bar (frequency density) = ${fdS(j)}. Class width = ${widths[j]}.`, `Frequency = ${fdS(j)} × ${widths[j]} = ${fs[j]}.`],
            hint: "Read the frequency density, then multiply by the class width.",
            traps: numTraps(fs[j], [[clean(fdT[j] / 10), "That's the frequency density (the height). Multiply by the class width to get the frequency."]]),
          };
        }
        if (kind === "total") {
          const N = sum(fs);
          return {
            prompt: `${intro}\n\nHow many ${c.who} are there altogether?`,
            diagram: g,
            answer: { type: "number", value: N },
            solution: [`Frequency of each bar = frequency density × class width: ${fs.map((f, i) => `${fdS(i)} × ${widths[i]} = ${f}`).join("; ")}.`, `Total = ${fs.join(" + ")} = ${N}.`],
            hint: "Find the area of every bar and add.",
            traps: numTraps(N, [[clean(sum(fdT) / 10), "You added the heights. Each frequency is height × width."]]),
          };
        }
        // Partial classes: assume values are spread evenly through each class.
        const part = (i: number, from: number, to: number) => (fdT[i] * (to - from)) / 10;
        if (kind === "more") {
          const j = r.int(0, k - 1);
          if (widths[j] < 2 * u) return null;
          const X = b[j] + u * r.int(1, widths[j] / u - 1);
          const p = part(j, X, b[j + 1]);
          if (!Number.isInteger(p)) return null;
          const later = sum(fs.slice(j + 1));
          const ans = p + later;
          return {
            prompt: `${intro}\n\nEstimate the number of ${c.who} that ${c.more(num(X))}.`,
            diagram: g,
            answer: { type: "number", value: ans },
            solution: [
              `Part of the class ${cls(b[j], b[j + 1], c.v)}: from ${X} to ${b[j + 1]} is ${b[j + 1] - X} wide, so ${fdS(j)} × ${b[j + 1] - X} = ${p}.`,
              later ? `Classes above ${b[j + 1]}: ${fs.slice(j + 1).map((f, i) => `${fdS(j + 1 + i)} × ${widths[j + 1 + i]} = ${f}`).join("; ")}, total ${later}.` : `There are no classes above ${b[j + 1]}.`,
              `Estimate = ${p}${later ? ` + ${later}` : ""} = ${ans}.`,
            ],
            hint: "Only part of one bar counts. Use frequency density × the part of the width you need.",
            traps: numTraps(ans, [
              [fs[j] + later, `Only the part of ${cls(b[j], b[j + 1], c.v)} above ${X} counts.`],
              [later > 0 ? later : null, `Include the part of ${cls(b[j], b[j + 1], c.v)} above ${X} too.`],
            ]),
          };
        }
        const i = r.int(0, k - 2);
        const j = r.int(i + 1, k - 1);
        if (widths[i] < 2 * u || widths[j] < 2 * u) return null;
        const A = b[i] + u * r.int(1, widths[i] / u - 1);
        const B = b[j] + u * r.int(1, widths[j] / u - 1);
        const pA = part(i, A, b[i + 1]);
        const pB = part(j, b[j], B);
        if (!Number.isInteger(pA) || !Number.isInteger(pB)) return null;
        const mid = sum(fs.slice(i + 1, j));
        const ans = pA + mid + pB;
        return {
          prompt: `${intro}\n\nEstimate the number of ${c.who} that ${c.between(num(A), num(B))}.`,
          diagram: g,
          answer: { type: "number", value: ans },
          solution: [
            `From ${A} to ${b[i + 1]}: ${fdS(i)} × ${b[i + 1] - A} = ${pA}.`,
            mid ? `Whole classes from ${b[i + 1]} to ${b[j]}: ${mid}.` : `There are no whole classes in between.`,
            `From ${b[j]} to ${B}: ${fdS(j)} × ${B - b[j]} = ${pB}.`,
            `Estimate = ${pA} + ${mid ? `${mid} + ` : ""}${pB} = ${ans}.`,
          ],
          hint: "Split the interval at the class boundaries. For part of a bar use frequency density × part-width.",
          traps: numTraps(ans, [[fs[i] + mid + fs[j], "Only part of the first and last bars is inside the interval."]]),
        };
      }, rng);
    },
  },
];

/** Positive n/d: a whole number, a terminating decimal (≤ 3 d.p.) or a simplified {{fraction}}. */
function frac2(n: number, d: number): string {
  let a = n;
  let b = d;
  while (b) [a, b] = [b, a % b];
  const nn = n / a;
  const dd = d / a;
  if (dd === 1) return String(nn);
  if ((nn * 1000) % dd === 0) return num(clean(nn / dd));
  return `{{${nn}/${dd}}}`;
}

// The two discrete-table skills share one drill: mean (incl. a missing frequency at tier 3),
// or median / mode / range.
const tableMean = raw.find((d) => d.id === `${T}.table-mean`)!;
const tableOther = raw.find((d) => d.id === `${T}.table-median-mode-range`)!;

export const drills: Drill[] = raw
  .filter((d) => d !== tableOther)
  .map((d) =>
    d === tableMean
      ? {
          ...d,
          id: `${T}.frequency-table`,
          title: "Mean, median, mode and range from a frequency table",
          generate: (rng: Rng, tier: 1 | 2 | 3) => (rng.bool(0.5) ? tableMean.generate(rng, tier) : tableOther.generate(rng, tier)),
        }
      : d,
  );
