"use client";
// Interactive explorables for "Number, Accuracy & Bounds".
//  1. Error-interval zoom — pick a rounded (or truncated) value and its
//     accuracy; a zoomed number line shows the error interval with a closed
//     circle at the lower bound and an open circle at the upper bound. Slide a
//     "true value" and watch what it rounds to, especially AT the bounds.
//  2. Bounds calculator — two measurements, each with its own accuracy, and
//     an operation (+, −, ×, ÷). All four bound combinations are tabulated,
//     the largest and smallest are highlighted, the result's interval is drawn
//     to scale, and the "suitable degree of accuracy" is found live.
// All values are held as integers (ticks of a known size) and only turned
// into decimals for display, so bounds are exact.
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, M, type WidgetDef } from "./kit";
import { renderInline } from "../Rich";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

/** Integer n with d decimal places → string, with a real minus sign. */
function decStr(n: number, d: number): string {
  const neg = n < 0;
  let s = String(Math.abs(Math.round(n)));
  if (d > 0) {
    s = s.padStart(d + 1, "0");
    s = s.slice(0, s.length - d) + "." + s.slice(s.length - d);
  }
  return (neg ? "−" : "") + s;
}

/** Drop trailing decimal zeros. */
function trim(s: string): string {
  return s.includes(".") ? s.replace(/0+$/, "").replace(/\.$/, "") : s;
}

/** Round to k significant figures (half away from zero), as a number. */
function roundSf(x: number, k: number): number {
  if (x === 0) return 0;
  const e = Math.floor(Math.log10(Math.abs(x)));
  const p = k - 1 - e;
  const f = Math.pow(10, p);
  const r = Math.round(Math.abs(x) * f + 1e-9) * Math.sign(x);
  return p >= 0 ? parseFloat((r / f).toFixed(p)) : r / f;
}

/** A k-s.f. value with its trailing zeros: (4.8, 3) → "4.80". */
function sfStr(v: number, k: number): string {
  if (v === 0) return "0";
  const e = Math.floor(Math.log10(Math.abs(v)) + 1e-12);
  const p = k - 1 - e;
  const s = p > 0 ? v.toFixed(p) : String(Math.round(v));
  return s.replace("-", "−");
}

/** Up to 7 significant figures, no float noise. */
function show(x: number): string {
  return String(parseFloat(x.toPrecision(7))).replace("-", "−");
}

// ===========================================================================
// 1. Error-interval zoom
// ===========================================================================

type Acc = "10" | "1" | "0.1" | "0.01";
type How = "round" | "trunc";

const ACC: Record<Acc, { label: string; dec: number; unitTicks: number; words: string }> = {
  // Values are integers in units of 1/20 of the accuracy, displayed with `dec` decimals.
  "10": { label: "nearest 10", dec: 0, unitTicks: 10, words: "the nearest 10" },
  "1": { label: "nearest 1", dec: 1, unitTicks: 10, words: "the nearest whole number" },
  "0.1": { label: "1 d.p.", dec: 2, unitTicks: 10, words: "1 decimal place" },
  "0.01": { label: "2 d.p.", dec: 3, unitTicks: 10, words: "2 decimal places" },
};

function ErrorIntervalZoom() {
  const [acc, setAcc] = useState<Acc>("0.1");
  const [how, setHow] = useState<How>("round");
  const [j, setJ] = useState(64); // shown value = j × unit
  const [t, setT] = useState(7); // true value offset, in tenths of a unit (−15 … 15)

  const a = ACC[acc];
  // Work in "fine" integers: 1 unit = 10 fine; display with a.dec decimals after scaling.
  // fine → real value: fine × unit / 10. For unit 10 that is fine × 1 (dec 0);
  // for unit 1 it is fine × 0.1 (dec 1), etc.
  const unitFine = a.unitTicks;
  const V = j * unitFine;
  const half = unitFine / 2;
  const loF = how === "round" ? V - half : V;
  const hiF = how === "round" ? V + half : V + unitFine;
  const x = V + t;
  const fmt = (f: number) => trim(decStr(f, a.dec));
  // The value as written (keeps the zero that shows the accuracy, e.g. 6.0).
  const written = acc === "10" ? String(j * 10) : acc === "1" ? String(j) : acc === "0.1" ? decStr(j, 1) : decStr(j, 2);

  // What x rounds / truncates to (in units of the accuracy).
  const n = how === "round" ? Math.floor((2 * x + unitFine) / (2 * unitFine)) : Math.floor(x / unitFine);
  const toStr = acc === "10" ? String(n * 10) : acc === "1" ? String(n) : acc === "0.1" ? decStr(n, 1) : decStr(n, 2);
  const inside = x >= loF && x < hiF;

  // Number line: V − 1.5u … V + 1.5u.
  const W = 360, H = 120, pad = 24;
  const xMin = V - 1.5 * unitFine, xMax = V + 1.5 * unitFine;
  const px = (f: number) => pad + ((f - xMin) / (xMax - xMin)) * (W - 2 * pad);
  const ticks: number[] = [];
  for (let f = V - unitFine; f <= V + unitFine; f += half) ticks.push(f);
  const y = 62;

  const caption =
    how === "round"
      ? `Anything from ${fmt(loF)} up to (but not including) ${fmt(hiF)} rounds to ${written}. Half of ${fmt(unitFine)} is ${fmt(half)}, so the bounds are ${written} ± ${fmt(half)}: {{${fmt(loF)} <= x < ${fmt(hiF)}}}. Your x = ${fmt(x)} ${inside ? `is inside, so it rounds to ${written}` : `is outside — it rounds to ${toStr}`}.`
      : `Truncating only chops digits off, so the true value can't be below ${written}, and anything up to (but not including) ${fmt(hiF)} still truncates to ${written}: {{${fmt(loF)} <= x < ${fmt(hiF)}}}. Your x = ${fmt(x)} truncates to ${toStr}.`;

  return (
    <WidgetFrame
      title="Error-interval zoom"
      tryThis={[
        "Slide x to exactly the upper bound. What does it round to — and why is the upper bound written with < not ≤?",
        "Switch to *truncated*. Why does the whole interval jump to the right?",
        "How wide is the interval for 2 d.p.? For the nearest 10? What is the pattern?",
        "Find a value of x that rounds to the shown value but is NOT in the truncation interval.",
      ]}
      caption={<span>{renderInline(caption)}</span>}
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink-2">Accuracy</span>
          <Segmented<Acc> label="Accuracy" options={(Object.keys(ACC) as Acc[]).map((k) => ({ value: k, label: ACC[k].label }))} value={acc} onChange={setAcc} />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink-2">The value was</span>
          <Segmented<How>
            label="Rounded or truncated"
            options={[
              { value: "round", label: "rounded" },
              { value: "trunc", label: "truncated" },
            ]}
            value={how}
            onChange={setHow}
          />
        </div>
        <Slider label="Value shown" value={j} min={11} max={99} onChange={setJ} format={() => written} />
        <Slider label="True value x" value={t} min={-15} max={15} onChange={setT} format={() => fmt(x)} />

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Lower bound" value={fmt(loF)} />
          <Readout label="Upper bound" value={fmt(hiF)} />
          <Readout label={how === "round" ? "x rounds to" : "x truncates to"} value={toStr} tone={inside ? "good" : "bad"} />
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`Number line from ${fmt(xMin)} to ${fmt(xMax)}. The error interval runs from ${fmt(loF)}, included, to ${fmt(hiF)}, not included. The true value x is at ${fmt(x)}, which is ${inside ? "inside" : "outside"} the interval.`}
        >
          <line x1={pad} x2={W - pad} y1={y} y2={y} className="stroke-ink-2" strokeWidth={1.5} />
          {ticks.map((f) => (
            <g key={f}>
              <line x1={px(f)} x2={px(f)} y1={y - 6} y2={y + 6} className="stroke-ink-2" strokeWidth={1} />
              <text x={px(f)} y={y + 22} fontSize={11} textAnchor="middle" className={f === V ? "fill-ink" : "fill-ink-2"} fontWeight={f === V ? 700 : 400}>
                {fmt(f)}
              </text>
            </g>
          ))}
          <rect x={px(loF)} y={y - 8} width={px(hiF) - px(loF)} height={16} rx={4} className="fill-brand" opacity={0.25} />
          <line x1={px(loF)} x2={px(hiF)} y1={y} y2={y} className="stroke-brand" strokeWidth={4} />
          <circle cx={px(loF)} cy={y} r={6} className="fill-brand stroke-brand" strokeWidth={2} />
          <circle cx={px(hiF)} cy={y} r={6} className="fill-surface stroke-brand" strokeWidth={2.5} />
          <text x={px(loF)} y={y - 14} fontSize={10} textAnchor="middle" className="fill-brand" fontWeight={700}>LB (≤)</text>
          <text x={px(hiF)} y={y - 14} fontSize={10} textAnchor="middle" className="fill-brand" fontWeight={700}>UB (&lt;)</text>
          <line x1={px(x)} x2={px(x)} y1={y - 34} y2={y - 4} className={inside ? "stroke-good" : "stroke-bad"} strokeWidth={2} />
          <polygon points={`${px(x) - 6},${y - 40} ${px(x) + 6},${y - 40} ${px(x)},${y - 32}`} className={inside ? "fill-good" : "fill-bad"} />
          <text x={px(x)} y={y - 44} fontSize={11} textAnchor="middle" className="fill-ink" fontWeight={700}>x</text>
        </svg>
        <p className="text-xs text-ink-2">
          Shown value {written}, correct to {how === "round" ? a.words : `${a.words} (truncated)`}. Filled circle: included. Open circle: not included.
        </p>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// 2. Bounds calculator
// ===========================================================================

type Op = "+" | "−" | "×" | "÷";
type Prec = "1" | "0.1";

/** A measurement as an integer count of its accuracy unit. */
function bounds(count: number, prec: Prec): { v: number; lo: number; hi: number; str: string; loStr: string; hiStr: string } {
  // Hold in hundredths so halves of 0.1 are exact.
  const unit = prec === "1" ? 100 : 10;
  const v = count * unit;
  const lo = v - unit / 2, hi = v + unit / 2;
  const s = (h: number) => trim(decStr(h, 2));
  return { v: v / 100, lo: lo / 100, hi: hi / 100, str: prec === "1" ? String(count) : decStr(count, 1), loStr: s(lo), hiStr: s(hi) };
}

function apply(op: Op, a: number, b: number): number {
  if (op === "+") return a + b;
  if (op === "−") return a - b;
  if (op === "×") return a * b;
  return a / b;
}

function BoundsCalculator() {
  const [aPrec, setAPrec] = useState<Prec>("1");
  const [bPrec, setBPrec] = useState<Prec>("0.1");
  const [aCount, setACount] = useState(250);
  const [bCount, setBCount] = useState(312);
  const [op, setOp] = useState<Op>("÷");

  const aR = aPrec === "1" ? { min: 1, max: 999 } : { min: 10, max: 999 };
  const bR = bPrec === "1" ? { min: 1, max: 999 } : { min: 10, max: 999 };
  const aC = Math.min(aR.max, Math.max(aR.min, aCount));
  const bC = Math.min(bR.max, Math.max(bR.min, bCount));
  const A = bounds(aC, aPrec);
  const B = bounds(bC, bPrec);
  const combos = [
    { a: "LB", b: "LB", av: A.lo, bv: B.lo, as: A.loStr, bs: B.loStr },
    { a: "LB", b: "UB", av: A.lo, bv: B.hi, as: A.loStr, bs: B.hiStr },
    { a: "UB", b: "LB", av: A.hi, bv: B.lo, as: A.hiStr, bs: B.loStr },
    { a: "UB", b: "UB", av: A.hi, bv: B.hi, as: A.hiStr, bs: B.hiStr },
  ].map((c) => ({ ...c, r: apply(op, c.av, c.bv) }));
  const rs = combos.map((c) => c.r);
  const max = Math.max(...rs), min = Math.min(...rs);
  const iMax = rs.indexOf(max), iMin = rs.indexOf(min);
  const central = apply(op, A.v, B.v);

  // Most accurate rounding both bounds agree on.
  let agree = 0;
  for (let k = 6; k >= 1; k--) {
    if (min !== 0 && max !== 0 && roundSf(min, k) === roundSf(max, k)) {
      agree = k;
      break;
    }
  }

  const rule: Record<Op, string> = {
    "+": "For a sum, add the two upper bounds for the maximum and the two lower bounds for the minimum.",
    "−": "For a difference, the maximum is (biggest a) − (smallest b) and the minimum is (smallest a) − (biggest b): use OPPOSITE bounds.",
    "×": "For a product of positive numbers, multiply the two upper bounds for the maximum and the two lower bounds for the minimum.",
    "÷": "For a quotient, the maximum is (biggest a) ÷ (smallest b) and the minimum is (smallest a) ÷ (biggest b): use OPPOSITE bounds.",
  };

  // Result interval drawn to scale, with a margin.
  const W = 360, H = 84, pad = 28;
  const span = max - min || 1;
  const lo = min - span * 0.6, hi = max + span * 0.6;
  const px = (v: number) => pad + ((v - lo) / (hi - lo)) * (W - 2 * pad);
  const y = 44;

  const caption = `${rule[op]} Here: maximum = ${combos[iMax].as} ${op} ${combos[iMax].bs} = ${show(max)} and minimum = ${combos[iMin].as} ${op} ${combos[iMin].bs} = ${show(min)}. ${
    agree
      ? `Both bounds round to ${sfStr(roundSf(max, agree), agree)} at ${agree} s.f.${agree < 6 ? ` but not at ${agree + 1} s.f.` : ""}, so a suitable answer is **${sfStr(roundSf(max, agree), agree)}**.`
      : "The bounds don't agree even to 1 s.f., so the measurements are too rough to give a reliable answer."
  }`;

  const changePrec = (which: "a" | "b", p: Prec) => {
    // Keep the value roughly the same when the accuracy changes.
    if (which === "a") {
      setACount((c) => (p === aPrec ? c : p === "0.1" ? Math.min(999, c * 10) : Math.max(1, Math.round(c / 10))));
      setAPrec(p);
    } else {
      setBCount((c) => (p === bPrec ? c : p === "0.1" ? Math.min(999, c * 10) : Math.max(1, Math.round(c / 10))));
      setBPrec(p);
    }
  };
  return (
    <WidgetFrame
      title="Bounds calculator"
      tryThis={[
        "Pick ÷ (think speed = distance ÷ time). Which combination gives the maximum? Is it UB ÷ UB?",
        "Pick −. Can you make the answer's interval wider than either measurement's?",
        "Measure b to 1 d.p. instead of the nearest whole number. How many more significant figures can you trust?",
        "Find settings where the suitable answer is only 1 significant figure.",
      ]}
      caption={<span>{renderInline(caption)}</span>}
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink-2">Operation</span>
          <Segmented<Op> label="Operation" options={(["+", "−", "×", "÷"] as Op[]).map((o) => ({ value: o, label: `a ${o} b` }))} value={op} onChange={setOp} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-line p-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-ink-2">a correct to</span>
              <Segmented<Prec> label="Accuracy of a" options={[{ value: "1", label: "nearest 1" }, { value: "0.1", label: "1 d.p." }]} value={aPrec} onChange={(p) => changePrec("a", p)} />
            </div>
            <Slider label="a" value={aC} min={aR.min} max={aR.max} onChange={setACount} format={() => A.str} />
            <p className="text-sm text-ink-2">{renderInline(`{{${A.loStr} <= a < ${A.hiStr}}}`)}</p>
          </div>
          <div className="space-y-2 rounded-xl border border-line p-3">
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-sm font-semibold text-ink-2">b correct to</span>
              <Segmented<Prec> label="Accuracy of b" options={[{ value: "1", label: "nearest 1" }, { value: "0.1", label: "1 d.p." }]} value={bPrec} onChange={(p) => changePrec("b", p)} />
            </div>
            <Slider label="b" value={bC} min={bR.min} max={bR.max} onChange={setBCount} format={() => B.str} />
            <p className="text-sm text-ink-2">{renderInline(`{{${B.loStr} <= b < ${B.hiStr}}}`)}</p>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-sm tabular-nums">
            <thead>
              <tr className="text-left text-ink-2">
                <th className="py-1 pr-2 font-semibold">a</th>
                <th className="py-1 pr-2 font-semibold">b</th>
                <th className="py-1 font-semibold">
                  a {op} b
                </th>
              </tr>
            </thead>
            <tbody>
              {combos.map((c, i) => (
                <tr key={c.a + c.b} className={i === iMax ? "bg-good-soft" : i === iMin ? "bg-bad-soft" : ""}>
                  <td className="py-1 pr-2">
                    {c.a} = {c.as}
                  </td>
                  <td className="py-1 pr-2">
                    {c.b} = {c.bs}
                  </td>
                  <td className="py-1 font-bold">
                    {show(c.r)}
                    {i === iMax ? <span className="ml-2 text-good">max</span> : i === iMin ? <span className="ml-2 text-bad">min</span> : null}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="grid grid-cols-3 gap-2">
          <Readout label="Lower bound" value={show(min)} tone="bad" />
          <Readout label="Upper bound" value={show(max)} tone="good" />
          <Readout label="Suitable answer" value={agree ? sfStr(roundSf(max, agree), agree) : "—"} />
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full"
          role="img"
          aria-label={`Number line for a ${op} b. The result lies between ${show(min)} and ${show(max)}. Using the rounded values gives ${show(central)}.`}
        >
          <line x1={pad} x2={W - pad} y1={y} y2={y} className="stroke-ink-2" strokeWidth={1.5} />
          <line x1={px(min)} x2={px(max)} y1={y} y2={y} className="stroke-brand" strokeWidth={8} strokeLinecap="round" opacity={0.6} />
          <circle cx={px(min)} cy={y} r={5} className="fill-bad" />
          <circle cx={px(max)} cy={y} r={5} className="fill-good" />
          <circle cx={px(central)} cy={y} r={4} className="fill-ink" />
          <text x={px(min)} y={y + 22} fontSize={10} textAnchor="middle" className="fill-ink-2">{show(min)}</text>
          <text x={px(max)} y={y + 22} fontSize={10} textAnchor="middle" className="fill-ink-2">{show(max)}</text>
          <text x={px(central)} y={y - 12} fontSize={10} textAnchor="middle" className="fill-ink">from rounded values: {show(central)}</text>
        </svg>
        <p className="text-xs text-ink-2">
          The dark dot is <M>{"a " + (op === "−" ? "-" : op === "×" ? "*" : op === "÷" ? "/" : "+") + " b"}</M> worked out with the rounded values; the true answer could be anywhere on the bar.
        </p>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "error-interval-zoom", title: "Error-interval zoom", blurb: "Zoom in on a rounded value: which true values could it have come from?", Component: ErrorIntervalZoom },
  { id: "bounds-calculator", title: "Bounds calculator", blurb: "Combine two measurements and find the largest and smallest possible answers.", Component: BoundsCalculator },
];
