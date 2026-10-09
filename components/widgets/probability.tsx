"use client";
// Interactive explorables for "probability".
//  1. Tree diagram lab — a bag of red and blue counters, two picks with or without
//     replacement. Every branch shows its exact fraction; choose an event and an
//     optional "given that" condition and watch the paths light up, the products
//     along each path and the exact (conditional) probability.
//  2. Pascal & binomial explorer — Pascal's triangle up to row 8 next to the full
//     expansion of (a + bx)^n. Pick a term: see nCk × a^(n−k) × (bx)^k, why nCk
//     counts the ways to choose, and the addition rule that builds the triangle.
import { useState, type ReactNode } from "react";
import { WidgetFrame, Stepper, Slider, Segmented, Readout, M, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* Helpers                                                                    */
/* ------------------------------------------------------------------------ */

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

/** Simplified fraction as maths markup text, e.g. "5/14"; whole numbers stay whole. */
function fracText(n: number, d: number): string {
  const g = gcd(n, d);
  const a = n / g;
  const b = d / g;
  return b === 1 ? String(a) : `${a}/${b}`;
}

/** Up to dp decimal places, trailing zeros removed, real minus sign. */
function fmt(v: number, dp = 3): string {
  let s = (Math.round(v * 10 ** dp) / 10 ** dp).toFixed(dp);
  if (s.includes(".")) s = s.replace(/\.?0+$/, "");
  if (s === "-0") s = "0";
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}

function nCr(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  let c = 1;
  for (let i = 1; i <= r; i++) c = (c * (n - r + i)) / i;
  return Math.round(c);
}

/** A stacked fraction drawn in SVG, centred on (x, y). */
function SvgFrac({ x, y, n, d, cls = "fill-ink" }: { x: number; y: number; n: number; d: number; cls?: string }) {
  const w = Math.max(String(n).length, String(d).length) * 7 + 6;
  return (
    <g>
      <text x={x} y={y - 3} fontSize={11} textAnchor="middle" className={cls}>
        {n}
      </text>
      <line x1={x - w / 2} x2={x + w / 2} y1={y} y2={y} className="stroke-ink" strokeWidth={1} />
      <text x={x} y={y + 11} fontSize={11} textAnchor="middle" className={cls}>
        {d}
      </text>
    </g>
  );
}

/* ------------------------------------------------------------------------ */
/* 1. Tree diagram lab                                                        */
/* ------------------------------------------------------------------------ */

type Mode = "with" | "without";
type EventKey = "rr" | "same" | "diff" | "atLeastB";
type CondKey = "none" | "same" | "atLeastR" | "secondR";

const EVENTS: { value: EventKey; label: string; long: string; test: (x: string) => boolean }[] = [
  { value: "rr", label: "Both red", long: "both counters are red", test: (x) => x === "RR" },
  { value: "same", label: "Same colour", long: "both counters are the same colour", test: (x) => x === "RR" || x === "BB" },
  { value: "diff", label: "One of each", long: "the counters are different colours", test: (x) => x === "RB" || x === "BR" },
  { value: "atLeastB", label: "At least one blue", long: "at least one counter is blue", test: (x) => x !== "RR" },
];

const CONDS: { value: CondKey; label: string; long: string; test: (x: string) => boolean }[] = [
  { value: "none", label: "No condition", long: "", test: () => true },
  { value: "same", label: "Same colour", long: "the counters are the same colour", test: (x) => x === "RR" || x === "BB" },
  { value: "atLeastR", label: "At least one red", long: "at least one counter is red", test: (x) => x !== "BB" },
  { value: "secondR", label: "2nd is red", long: "the second counter is red", test: (x) => x[1] === "R" },
];

function TreeLab() {
  const [red, setRed] = useState(5);
  const [blue, setBlue] = useState(3);
  const [mode, setMode] = useState<Mode>("without");
  const [ev, setEv] = useState<EventKey>("same");
  const [cond, setCond] = useState<CondKey>("none");

  const t = red + blue;
  const without = mode === "without";
  const t2 = without ? t - 1 : t;
  const D = t * t2;
  // Second-pick numerators after each first pick.
  const second = {
    R: { R: without ? red - 1 : red, B: blue },
    B: { R: red, B: without ? blue - 1 : blue },
  } as const;
  const first = { R: red, B: blue } as const;
  const leaves = (["R", "B"] as const).flatMap((a) =>
    (["R", "B"] as const).map((b) => ({ key: `${a}${b}`, a, b, n1: first[a], n2: second[a][b], num: first[a] * second[a][b] })),
  );

  const evDef = EVENTS.find((e) => e.value === ev) ?? EVENTS[0];
  const condDef = CONDS.find((c) => c.value === cond) ?? CONDS[0];
  const inEvent = (k: string) => evDef.test(k);
  const inCond = (k: string) => condDef.test(k);
  const condNum = leaves.filter((l) => inCond(l.key)).reduce((s, l) => s + l.num, 0);
  const bothNum = leaves.filter((l) => inCond(l.key) && inEvent(l.key)).reduce((s, l) => s + l.num, 0);
  const evNum = leaves.filter((l) => inEvent(l.key)).reduce((s, l) => s + l.num, 0);
  const conditional = cond !== "none";
  const resN = conditional ? bothNum : evNum;
  const resD = conditional ? condNum : D;

  // ---- SVG geometry ----
  const W = 380;
  const H = 280;
  const x0 = 18;
  const x1 = 130;
  const x2 = 238;
  const y0 = 140;
  const y1 = { R: 72, B: 208 } as const;
  const y2 = (a: "R" | "B", b: "R" | "B") => y1[a] + (b === "R" ? -36 : 36);
  const colour = (c: "R" | "B") => (c === "R" ? "fill-bad" : "fill-info");
  const word = (c: "R" | "B") => (c === "R" ? "red" : "blue");

  const lit = (k: string) => (conditional ? inCond(k) && inEvent(k) : inEvent(k));
  const dim = (k: string) => conditional && !inCond(k);

  const aria = `Tree diagram for ${red} red and ${blue} blue counters, two picks ${without ? "without" : "with"} replacement. First pick: red ${red}/${t}, blue ${blue}/${t}. ${leaves
    .map((l) => `${word(l.a)} then ${word(l.b)}: ${l.n1}/${t} × ${l.n2}/${t2} = ${l.num}/${D}`)
    .join("; ")}. Highlighted paths: ${leaves
    .filter((l) => lit(l.key))
    .map((l) => `${word(l.a)}-${word(l.b)}`)
    .join(", ") || "none"}.`;

  const pathsInEvent = leaves.filter((l) => (conditional ? inCond(l.key) && inEvent(l.key) : inEvent(l.key)));
  let caption: ReactNode;
  if (t2 === 0 || (without && (red === 0 || blue === 0))) {
    caption = <>Put at least one counter of each colour in the bag.</>;
  } else if (conditional && condNum === 0) {
    caption = <>The condition can never happen with this bag, so the conditional probability is undefined.</>;
  } else {
    caption = (
      <>
        {without ? (
          <>
            <strong>Without replacement</strong> the second branches change: one counter has gone, so every second-pick denominator is {t2}, and the numerator drops by 1 on
            the colour you just took.{" "}
          </>
        ) : (
          <>
            <strong>With replacement</strong> the bag is the same for both picks, so the second branches copy the first — the picks are independent.{" "}
          </>
        )}
        Multiply <em>along</em> a path (AND), add <em>between</em> paths (OR).{" "}
        {conditional ? (
          <>
            &quot;Given that {condDef.long}&quot; keeps only the un-greyed paths, total <M>{`${condNum}/${D}`}</M>. Of these, the lit paths make <M>{`${bothNum}/${D}`}</M>, so P({evDef.long} | {condDef.long}) ={" "}
            <M>{`${bothNum}/${D}`}</M> ÷ <M>{`${condNum}/${D}`}</M> = <strong><M>{fracText(bothNum, condNum)}</M></strong>
            {cond === "secondR" && ev === "rr"
              ? without
                ? " — not the same as P(red first), because the picks depend on each other."
                : " — exactly P(red first): with replacement the second pick tells you nothing about the first."
              : "."}
          </>
        ) : (
          <>
            P({evDef.long}) = {pathsInEvent.map((l, i) => (
              <span key={l.key}>
                {i ? " + " : ""}
                <M>{`${l.num}/${D}`}</M>
              </span>
            ))}{" "}
            = <strong><M>{fracText(evNum, D)}</M></strong>.
          </>
        )}
      </>
    );
  }

  return (
    <WidgetFrame
      title="Tree diagram lab"
      tryThis={[
        "Switch between with and without replacement. Which branches change, and which stay the same?",
        "Find a bag where P(same colour) is exactly {{1/2}} without replacement. (Try 3 red and 1 blue, then hunt for more.)",
        "Choose 'Both red' given '2nd is red'. Why does the answer depend on whether you replace the counter?",
        "Check that the four path probabilities always add up to 1. Why must they?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Stepper label="Red counters" value={red} min={1} max={9} onChange={setRed} />
          <Stepper label="Blue counters" value={blue} min={1} max={9} onChange={setBlue} />
        </div>
        <Segmented<Mode>
          label="Replacement"
          value={mode}
          onChange={setMode}
          options={[
            { value: "with", label: "With replacement" },
            { value: "without", label: "Without replacement" },
          ]}
        />

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={aria}>
          <text x={(x0 + x1) / 2} y={14} fontSize={11} textAnchor="middle" className="fill-ink-2">
            1st pick
          </text>
          <text x={(x1 + x2) / 2 + 10} y={14} fontSize={11} textAnchor="middle" className="fill-ink-2">
            2nd pick
          </text>
          <text x={W - 60} y={14} fontSize={11} textAnchor="middle" className="fill-ink-2">
            outcome
          </text>
          {(["R", "B"] as const).map((a) => {
            const firstLit = leaves.some((l) => l.a === a && lit(l.key));
            const firstDim = leaves.filter((l) => l.a === a).every((l) => dim(l.key));
            return (
              <g key={a} opacity={firstDim ? 0.35 : 1}>
                <line x1={x0} y1={y0} x2={x1 - 14} y2={y1[a]} className={firstLit ? "stroke-brand" : "stroke-ink-2"} strokeWidth={firstLit ? 3 : 1.5} />
                <SvgFrac x={(x0 + x1) / 2 - 6} y={(y0 + y1[a]) / 2 + (a === "R" ? -12 : 4)} n={first[a]} d={t} />
                <circle cx={x1} cy={y1[a]} r={11} className={colour(a)} />
                <text x={x1} y={y1[a] + 4} fontSize={11} textAnchor="middle" fontWeight={700} className="fill-surface">
                  {a}
                </text>
                {(["R", "B"] as const).map((b) => {
                  const k = `${a}${b}`;
                  const l = leaves.find((q) => q.key === k)!;
                  const on = lit(k);
                  return (
                    <g key={k} opacity={dim(k) ? 0.35 : 1}>
                      <line x1={x1 + 11} y1={y1[a]} x2={x2 - 11} y2={y2(a, b)} className={on ? "stroke-brand" : "stroke-ink-2"} strokeWidth={on ? 3 : 1.5} />
                      <SvgFrac x={(x1 + x2) / 2 + 4} y={(y1[a] + y2(a, b)) / 2 + (b === "R" ? -10 : 8)} n={l.n2} d={t2} cls={without ? "fill-accent" : "fill-ink"} />
                      <circle cx={x2} cy={y2(a, b)} r={10} className={colour(b)} />
                      <text x={x2} y={y2(a, b) + 4} fontSize={10} textAnchor="middle" fontWeight={700} className="fill-surface">
                        {b}
                      </text>
                      <rect x={x2 + 18} y={y2(a, b) - 14} width={W - x2 - 22} height={28} rx={6} className={on ? "fill-brand-soft stroke-brand" : "fill-surface-2 stroke-line"} strokeWidth={1} />
                      <text x={x2 + 26} y={y2(a, b) + 4} fontSize={11} className="fill-ink" fontWeight={on ? 700 : 400}>
                        {`${a}${b}: ${l.n1}/${t} × ${l.n2}/${t2} = ${l.num}/${D}`}
                      </text>
                    </g>
                  );
                })}
              </g>
            );
          })}
          <circle cx={x0} cy={y0} r={4} className="fill-ink" />
        </svg>

        <div className="space-y-2">
          <div className="text-sm font-semibold text-ink-2">Event</div>
          <Segmented<EventKey> label="Event" value={ev} onChange={setEv} options={EVENTS.map((e) => ({ value: e.value, label: e.label }))} />
          <div className="text-sm font-semibold text-ink-2">Given that…</div>
          <Segmented<CondKey> label="Condition" value={cond} onChange={setCond} options={CONDS.map((c) => ({ value: c.value, label: c.label }))} />
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label={conditional ? "P(event | given)" : "P(event)"} value={resD > 0 ? <M>{fracText(resN, resD)}</M> : "—"} />
          <Readout label="As a decimal" value={resD > 0 ? fmt(resN / resD) : "—"} tone="ink" />
          <Readout label="Paths add to" value={<M>{`${leaves.reduce((s, l) => s + l.num, 0)}/${D} = 1`}</M>} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Pascal & binomial explorer                                              */
/* ------------------------------------------------------------------------ */

/** "3x^2" style term for the expansion line (coefficient c, power k). */
function termText(c: number, k: number, first: boolean): string {
  if (c === 0) return "";
  const sign = c < 0 ? (first ? "-" : " - ") : first ? "" : " + ";
  const m = Math.abs(c);
  const body = k === 0 ? String(m) : `${m === 1 ? "" : m}${k === 1 ? "x" : `x^${k}`}`;
  return sign + body;
}

function PascalExplorer() {
  const [n, setN] = useState(4);
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const [kRaw, setK] = useState(2);
  const k = Math.min(kRaw, n);

  const coefs = Array.from({ length: n + 1 }, (_, i) => nCr(n, i) * a ** (n - i) * b ** i);
  const expansion = coefs.map((c, i) => termText(c, i, i === 0)).join("");
  const C = nCr(n, k);
  const target = coefs[k];
  const bracket = (v: number) => (v < 0 ? `(${v})` : `${v}`);
  const base = `(${a}${b < 0 ? ` - ${Math.abs(b) === 1 ? "" : Math.abs(b)}x` : ` + ${b === 1 ? "" : b}x`})^${n}`;

  // ---- Pascal SVG ----
  const W = 360;
  const rowH = 28;
  const H = (n + 1) * rowH + 16;
  const cell = 34;
  const cx = (row: number, i: number) => W / 2 + (i - row / 2) * cell;
  const cy = (row: number) => 18 + row * rowH;

  const aria = `Pascal's triangle rows 0 to ${n}. Row ${n} is ${Array.from({ length: n + 1 }, (_, i) => nCr(n, i)).join(", ")}. Highlighted: entry ${k} of row ${n}, which is ${C}${
    n > 0 && k > 0 && k < n ? `, the sum of ${nCr(n - 1, k - 1)} and ${nCr(n - 1, k)} above it` : ""
  }.`;

  return (
    <WidgetFrame
      title="Pascal & binomial explorer"
      tryThis={[
        "Set a = 1 and b = 1. What do the coefficients of {{(1 + x)^n}} add up to? Why is it {{2^n}}?",
        "Make b negative. Which terms change sign, and why only those?",
        "Find the coefficient of {{x^3}} in {{(2 + 3x)^5}} before you move the slider, then check.",
        "Every entry is the sum of the two above it. Pick an entry and explain why, using 'choose k brackets'.",
      ]}
      caption={
        <>
          Expanding <M>{base}</M> means multiplying {n} brackets. To get an <M>{k === 0 ? "x^0" : k === 1 ? "x" : `x^${k}`}</M> term, choose <M>{`${b}x`}</M> from {k} of the {n} brackets and{" "}
          <M>{String(a)}</M> from the other {n - k}. There are <strong>{n}C{k} = {C}</strong> ways to choose those brackets — that is the number in row {n} of Pascal&apos;s triangle. So the term is{" "}
          {C} × <M>{`${bracket(a)}^${n - k}`}</M> × <M>{`(${b}x)^${k}`}</M> = {C} × {a ** (n - k)} × {bracket(b ** k)} <M>{k === 0 ? "" : k === 1 ? "x" : `x^${k}`}</M> ={" "}
          <strong>
            <M>{termText(target, k, true) || "0"}</M>
          </strong>
          .{n > 0 && k > 0 && k < n ? ` In the triangle, ${C} = ${nCr(n - 1, k - 1)} + ${nCr(n - 1, k)}: the bracket you add either gives an x (from row ${n - 1}, entry ${k - 1}) or it doesn't (entry ${k}).` : ""}
        </>
      }
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <Stepper label={<>power n</>} value={n} min={1} max={8} onChange={setN} />
          <Stepper label={<>a</>} value={a} min={1} max={3} onChange={setA} />
          <Stepper label={<>b</>} value={b} min={-3} max={3} onChange={(v) => setB(v === 0 ? (b > 0 ? -1 : 1) : v)} />
        </div>
        <Slider label={<>Term in <M>{"x^k"}</M>: k</>} value={k} min={0} max={n} onChange={setK} />

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={aria}>
          {Array.from({ length: n + 1 }, (_, row) =>
            Array.from({ length: row + 1 }, (_, i) => {
              const isTarget = row === n && i === k;
              const isParent = row === n - 1 && (i === k - 1 || i === k) && k > 0 && k < n;
              const inRow = row === n;
              return (
                <g key={`${row}-${i}`}>
                  {isParent ? <line x1={cx(row, i)} y1={cy(row) + 9} x2={cx(n, k)} y2={cy(n) - 9} className="stroke-accent" strokeWidth={1.5} /> : null}
                  <rect
                    x={cx(row, i) - 15}
                    y={cy(row) - 10}
                    width={30}
                    height={20}
                    rx={6}
                    className={isTarget ? "fill-brand stroke-brand" : isParent ? "fill-accent-soft stroke-accent" : inRow ? "fill-brand-soft stroke-line" : "fill-surface-2 stroke-line"}
                    strokeWidth={1}
                  />
                  <text x={cx(row, i)} y={cy(row) + 4} fontSize={11} textAnchor="middle" fontWeight={isTarget || inRow ? 700 : 400} className={isTarget ? "fill-surface" : "fill-ink"}>
                    {nCr(row, i)}
                  </text>
                </g>
              );
            }),
          )}
          {Array.from({ length: n + 1 }, (_, row) => (
            <text key={`lab${row}`} x={6} y={cy(row) + 4} fontSize={10} className="fill-ink-2">
              {`row ${row}`}
            </text>
          ))}
        </svg>

        <div className="overflow-x-auto rounded-xl border border-line bg-surface px-3 py-2 text-sm">
          <M>{`${base} = ${expansion}`}</M>
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label={`${n}C${k}`} value={C} />
          <Readout label={<>Coefficient of <M>{k === 0 ? "x^0" : `x^${k}`}</M></>} value={fmt(target, 0)} tone={target < 0 ? "bad" : "brand"} />
          <Readout label="Sum of coefficients" value={<>{fmt(coefs.reduce((s, c) => s + c, 0), 0)} = <M>{`${bracket(a + b)}^${n}`}</M></>} tone="ink" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "tree-diagram-lab", title: "Tree diagram lab", blurb: "Pick two counters from a bag — with or without replacement — and watch the tree, the paths and the 'given that' probabilities update.", Component: TreeLab },
  { id: "pascal-binomial", title: "Pascal & binomial explorer", blurb: "Build Pascal's triangle and expand (a + bx)ⁿ: see where every coefficient comes from.", Component: PascalExplorer },
];
