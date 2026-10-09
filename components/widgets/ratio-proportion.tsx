"use client";
// Interactive explorables for "ratio-proportion".
//  1. Ratio bar model — set a 2- or 3-part ratio and what you know (the total,
//     the difference between two shares, or one share). The bar model shows
//     equal blocks, the value of one part and every share, plus the simplest
//     form and the 1 : n form.
//  2. Proportion explorer — pick y ∝ x, x², x³, √x, 1/x or 1/x², set k, and
//     see the graph, a table of values and exactly what multiplying x by 2, 3
//     or ½ does to y (y is multiplied by mⁿ).
import { useState, type ReactNode } from "react";
import { WidgetFrame, Stepper, Slider, Segmented, Readout, M, makePlane, PlaneGrid, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* Helpers                                                                    */
/* ------------------------------------------------------------------------ */

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

/** Plain number with a real minus sign, no float noise. */
function pn(v: number): string {
  const s = String(+v.toFixed(8));
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}

/** 3 significant figures (or exact if it is shorter). */
function sig3(v: number): string {
  if (v === 0) return "0";
  const r = +v.toPrecision(3);
  return pn(Math.abs(r - v) < 1e-9 ? v : r);
}

/** Is v exact to 2 decimal places? */
function exact2(v: number): boolean {
  return Math.abs(v * 100 - Math.round(v * 100)) < 1e-7;
}

/** Money: exact to the cent, otherwise "≈ $x.xx". */
function cash(v: number): string {
  const s = Math.abs(v).toFixed(2).replace(/\.00$/, "");
  return (exact2(v) ? "" : "≈ ") + "$" + s;
}

/* ------------------------------------------------------------------------ */
/* 1. Ratio bar model                                                         */
/* ------------------------------------------------------------------------ */

type Know = "total" | "diff" | "share";

const WHO = ["Aisha", "Ravi", "Mei"] as const;
const ROW_FILL = ["fill-brand-soft stroke-brand", "fill-accent-soft stroke-accent", "fill-good-soft stroke-good"] as const;
const ROW_TEXT = ["fill-brand", "fill-accent", "fill-good"] as const;

function RatioBarModel() {
  const [people, setPeople] = useState<"2" | "3">("2");
  const [parts, setParts] = useState<number[]>([3, 5, 4]);
  const [know, setKnow] = useState<Know>("total");
  const [amount, setAmount] = useState(120);

  const m = people === "2" ? 2 : 3;
  const ps = parts.slice(0, m);
  const S = ps.reduce((a, b) => a + b, 0);
  const diffParts = Math.abs(ps[1] - ps[0]);
  const divisor = know === "total" ? S : know === "diff" ? diffParts : ps[0];
  const valid = divisor > 0;
  const u = valid ? amount / divisor : 0;
  const shares = ps.map((p) => p * u);
  const g = ps.reduce((a, b) => gcd(a, b), 0);
  const simplest = ps.map((p) => p / g);
  const setPart = (i: number) => (v: number) => setParts((old) => old.map((p, j) => (j === i ? v : p)));

  // ---- SVG geometry ----
  const W = 360;
  const left = 54;
  const right = 72;
  const rowH = 30;
  const gap = 12;
  const top = 10;
  const maxP = Math.max(...ps);
  const block = (W - left - right) / Math.max(maxP, 6);
  const H = top + m * (rowH + gap) + 28;
  const showUnit = block >= 26;

  const knownText =
    know === "total"
      ? `The total is $${amount}`
      : know === "diff"
        ? `${WHO[1]} has $${amount} ${ps[1] >= ps[0] ? "more" : "less"} than ${WHO[0]}`
        : `${WHO[0]}'s share is $${amount}`;

  const aria = valid
    ? `Bar model for the ratio ${ps.join(" to ")}. ${knownText}. One part is worth ${cash(u)}. Shares: ${ps.map((_, i) => `${WHO[i]} ${cash(shares[i])}`).join(", ")}.`
    : `Bar model for the ratio ${ps.join(" to ")}. The two shares are equal, so a difference cannot fix the size of one part.`;

  let caption: ReactNode;
  if (!valid) {
    caption = (
      <>
        {WHO[0]} and {WHO[1]} have the <strong>same</strong> number of parts, so the difference between them is always $0 — it tells you nothing about the size of one part. Change one
        of the first two parts.
      </>
    );
  } else {
    caption = (
      <>
        {knownText}. That amount is{" "}
        <strong>
          {divisor} part{divisor === 1 ? "" : "s"}
        </strong>{" "}
        of the bar ({know === "total" ? `${ps.join(" + ")} = ${S}` : know === "diff" ? `${Math.max(ps[0], ps[1])} − ${Math.min(ps[0], ps[1])} = ${diffParts}` : `${WHO[0]} has ${ps[0]}`}),
        so one part = ${amount} ÷ {divisor} = <strong>{cash(u)}</strong>. Every share is just its number of parts × {cash(u)}. Whatever you know, the method is the same:{" "}
        <strong>find one part first</strong>.
      </>
    );
  }

  return (
    <WidgetFrame
      title="Ratio bar model"
      tryThis={[
        "Share $120 in the ratio 3 : 5. Now switch to “difference” — what difference gives the same shares?",
        "Set 2 : 7 and make one part worth exactly $8. What total do you need?",
        "With 3 people, find a ratio where a total of $100 gives every share in whole dollars.",
        "Set the ratio 4 : 4 and choose “difference”. Why does the model break?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <Segmented<"2" | "3">
            label="Number of people"
            value={people}
            onChange={setPeople}
            options={[
              { value: "2", label: "2 people" },
              { value: "3", label: "3 people" },
            ]}
          />
          <Segmented<Know>
            label="What you know"
            value={know}
            onChange={setKnow}
            options={[
              { value: "total", label: "Total" },
              { value: "diff", label: "Difference" },
              { value: "share", label: `${WHO[0]}'s share` },
            ]}
          />
        </div>

        <div className="grid gap-3 sm:grid-cols-3">
          {ps.map((p, i) => (
            <Stepper key={i} label={`${WHO[i]}'s parts`} value={p} min={1} max={12} onChange={setPart(i)} />
          ))}
        </div>
        <Slider
          label={know === "total" ? "Total ($)" : know === "diff" ? `Difference between ${WHO[0]} and ${WHO[1]} ($)` : `${WHO[0]}'s share ($)`}
          value={amount}
          min={1}
          max={500}
          onChange={setAmount}
          format={(v) => `$${v}`}
        />

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={aria}>
          {ps.map((p, i) => {
            const y = top + i * (rowH + gap);
            return (
              <g key={i}>
                <text x={left - 6} y={y + rowH / 2 + 4} fontSize={11} textAnchor="end" className="fill-ink font-bold">
                  {WHO[i]}
                </text>
                {Array.from({ length: p }, (_, j) => {
                  const extra = know === "diff" && i < 2 && j >= Math.min(ps[0], ps[1]) && p > Math.min(ps[0], ps[1]);
                  return (
                    <g key={j}>
                      <rect
                        x={left + j * block}
                        y={y}
                        width={block}
                        height={rowH}
                        className={ROW_FILL[i]}
                        strokeWidth={extra ? 2.5 : 1.2}
                        strokeDasharray={extra ? "4 2" : undefined}
                      />
                      {showUnit && valid ? (
                        <text x={left + j * block + block / 2} y={y + rowH / 2 + 4} fontSize={9} textAnchor="middle" className="fill-ink">
                          {exact2(u) ? pn(+u.toFixed(2)) : sig3(u)}
                        </text>
                      ) : null}
                    </g>
                  );
                })}
                <text x={left + p * block + 6} y={y + rowH / 2 + 4} fontSize={12} className={`${ROW_TEXT[i]} font-bold`}>
                  {valid ? cash(shares[i]) : "?"}
                </text>
              </g>
            );
          })}
          <text x={left} y={H - 8} fontSize={10} className="fill-ink-2">
            {valid ? `Each block = one part = ${cash(u)}` : "One part can't be found"}
            {know === "diff" && valid ? " · dashed blocks = the difference" : ""}
          </text>
        </svg>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="One part" value={valid ? cash(u) : "—"} />
          <Readout label="Total" value={valid ? cash(u * S) : "—"} tone="ink" />
          <Readout label="Simplest form" value={simplest.join(" : ")} tone="ink" />
          <Readout label="Form 1 : n" value={`1 : ${sig3(ps[1] / ps[0])}`} tone="good" />
        </div>
        <p className="text-xs text-ink-2">
          Fractions of the total: {ps.map((p, i) => (
            <span key={i} className="mr-2">
              {WHO[i]} <M>{`${p / gcd(p, S)}/${S / gcd(p, S)}`}</M>
            </span>
          ))}
        </p>
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Proportion explorer                                                     */
/* ------------------------------------------------------------------------ */

type Rel = "x" | "x2" | "x3" | "sqrt" | "inv" | "inv2";

const RELS: Record<Rel, { n: number; label: string; formula: string; words: string }> = {
  x: { n: 1, label: "x", formula: "y = kx", words: "directly proportional to x" },
  x2: { n: 2, label: "x²", formula: "y = kx^2", words: "directly proportional to x²" },
  x3: { n: 3, label: "x³", formula: "y = kx^3", words: "directly proportional to x³" },
  sqrt: { n: 0.5, label: "√x", formula: "y = k sqrt(x)", words: "directly proportional to √x" },
  inv: { n: -1, label: "1/x", formula: "y = k/x", words: "inversely proportional to x" },
  inv2: { n: -2, label: "1/x²", formula: "y = k/x^2", words: "inversely proportional to x²" },
};

const MULTS = [
  { value: "2", label: "× 2", m: 2 },
  { value: "3", label: "× 3", m: 3 },
  { value: "0.5", label: "÷ 2", m: 0.5 },
] as const;

/** m^n as markup and its value. */
function effect(m: number, n: number): { text: string; value: number } {
  const value = m ** n;
  const base = m === 0.5 ? "(1/2)" : String(m);
  const pow = n === 0.5 ? `sqrt(${m === 0.5 ? "1/2" : m})` : n === 1 ? base : `${base}^${n < 0 ? `(${n})` : n}`;
  return { text: pow, value };
}

/** Exact value of m^n for m in {2, 3, 1/2}, n in {±1, ±2, 3, 1/2}, as markup. */
function exactMarkup(m: number, n: number): string {
  if (n === 0.5) return m === 0.5 ? "1/sqrt(2)" : `sqrt(${m})`;
  const v = m ** n;
  if (v >= 1) return pn(v);
  return `1/${pn(1 / v)}`;
}

function niceCeil(v: number): number {
  if (v <= 0) return 1;
  const p = 10 ** Math.floor(Math.log10(v));
  for (const s of [1, 2, 2.5, 5, 10]) if (s * p >= v) return s * p;
  return 10 * p;
}

function ProportionExplorer() {
  const [rel, setRel] = useState<Rel>("x2");
  const [k, setK] = useState(2);
  const [x, setX] = useState(1.5);
  const [mult, setMult] = useState<"2" | "3" | "0.5">("2");

  const { n, formula, words } = RELS[rel];
  const m = MULTS.find((o) => o.value === mult)?.m ?? 2;
  const f = (t: number) => k * t ** n;
  const inverse = n < 0;
  const xMin = inverse ? 0.5 : 0;
  const xMax = 4;
  const yMax = niceCeil(Math.max(f(inverse ? xMin : xMax), 1));
  const plane = makePlane({ width: 360, height: 240, xMin: 0, xMax, yMin: 0, yMax, pad: 30 });
  const { px, py } = plane;
  const yStep = yMax / 5;

  const pts: string[] = [];
  const N = 160;
  for (let i = 0; i <= N; i++) {
    const t = xMin + ((xMax - xMin) * i) / N;
    const v = f(t);
    if (!Number.isFinite(v)) continue;
    pts.push(`${pts.length ? "L" : "M"}${px(t).toFixed(1)},${py(Math.min(v, yMax * 1.02)).toFixed(1)}`);
  }

  const y1 = f(x);
  const x2 = x * m;
  const y2 = f(x2);
  const onGraph2 = x2 <= xMax && x2 >= xMin && y2 <= yMax;
  const eff = effect(m, n);
  const multWord = m === 2 ? "doubled" : m === 3 ? "trebled" : "halved";
  const table = [1, 2, 3, 4];

  const aria = `Graph of ${formula.replace("^", " to the power ")} with k = ${k}. Point P at x = ${pn(x)}, y = ${sig3(y1)}. When x is ${multWord} to ${pn(x2)}, y becomes ${sig3(y2)}, which is y multiplied by ${sig3(eff.value)}.`;

  return (
    <WidgetFrame
      title="Proportion explorer"
      tryThis={[
        "Find the relationship where doubling x makes y four times smaller.",
        "Which relationship makes y 27 times bigger when x is trebled?",
        "For y ∝ x², find k so the curve passes through (2, 12).",
        "Change k. Does the multiplier for y change? Why not?",
      ]}
      caption={
        <>
          Here <M>{formula}</M> with k = {pn(k)}: y is {words}. When x is {multWord}, x is replaced by {m === 0.5 ? <M>{"x/2"}</M> : <>{m}x</>}, so y is multiplied by{" "}
          <M>{eff.text}</M> = <strong><M>{exactMarkup(m, n)}</M></strong>
          {n === 0.5 ? <> ≈ {sig3(eff.value)}</> : null}. The k cancels — the multiplier depends only on the <strong>power</strong>, never on k or on the starting x.{" "}
          {inverse
            ? "Inverse proportion: as x grows, y shrinks, and the graph never touches either axis."
            : n === 1
              ? "Direct proportion to x is the only one whose graph is a straight line through the origin."
              : "The graph passes through the origin but curves — equal steps in x don't give equal steps in y."}
        </>
      }
    >
      <div className="space-y-4">
        <Segmented<Rel>
          label="Relationship"
          value={rel}
          onChange={setRel}
          options={(Object.keys(RELS) as Rel[]).map((r) => ({ value: r, label: <>y ∝ {RELS[r].label}</> }))}
        />
        <div className="grid gap-3 sm:grid-cols-2">
          <Slider label="Constant k" value={k} min={0.5} max={5} step={0.5} onChange={setK} />
          <Slider label="Starting x" value={x} min={0.5} max={2} step={0.25} onChange={setX} />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink-2">Change x:</span>
          <Segmented<"2" | "3" | "0.5"> label="Multiply x by" value={mult} onChange={setMult} options={MULTS.map((o) => ({ value: o.value, label: o.label }))} />
        </div>

        <svg viewBox="0 0 360 240" className="h-auto w-full" role="img" aria-label={aria}>
          <PlaneGrid plane={plane} step={1} labels={false} />
          {Array.from({ length: 6 }, (_, i) => i * yStep).map((v) => (
            <text key={`yl${v}`} x={px(0) - 4} y={py(v) + 3} fontSize={9} textAnchor="end" className="fill-ink-2">
              {pn(+v.toFixed(2))}
            </text>
          ))}
          {[1, 2, 3, 4].map((t) => (
            <text key={`xl${t}`} x={px(t)} y={py(0) + 13} fontSize={9} textAnchor="middle" className="fill-ink-2">
              {t}
            </text>
          ))}
          <line x1={px(0)} x2={px(0)} y1={py(0)} y2={py(yMax)} className="stroke-ink-2" strokeWidth={1.5} />
          <line x1={px(0)} x2={px(xMax)} y1={py(0)} y2={py(0)} className="stroke-ink-2" strokeWidth={1.5} />
          <text x={px(xMax) - 2} y={py(0) - 4} fontSize={10} textAnchor="end" className="fill-ink-2">
            x
          </text>
          <text x={px(0) + 4} y={py(yMax) + 10} fontSize={10} className="fill-ink-2">
            y
          </text>
          <path d={pts.join(" ")} fill="none" className="stroke-brand" strokeWidth={2.5} />
          {/* P */}
          <line x1={px(x)} x2={px(x)} y1={py(0)} y2={py(Math.min(y1, yMax))} className="stroke-ink-2" strokeDasharray="3 3" />
          <circle cx={px(x)} cy={py(Math.min(y1, yMax))} r={5} className="fill-brand stroke-surface" strokeWidth={1.5} />
          <text x={px(x) + 7} y={py(Math.min(y1, yMax)) - 6} fontSize={11} className="fill-brand font-bold">
            P
          </text>
          {onGraph2 ? (
            <g>
              <line x1={px(x2)} x2={px(x2)} y1={py(0)} y2={py(y2)} className="stroke-accent" strokeDasharray="3 3" />
              <circle cx={px(x2)} cy={py(y2)} r={5} className="fill-accent stroke-surface" strokeWidth={1.5} />
              <text x={px(x2) + 7} y={py(y2) - 6} fontSize={11} className="fill-accent font-bold">
                Q
              </text>
            </g>
          ) : null}
        </svg>
        {!onGraph2 ? <p className="text-xs text-ink-2">Q is off the visible graph — the numbers below still show where it is.</p> : null}

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="P" value={`(${pn(x)}, ${sig3(y1)})`} tone="ink" />
          <Readout label="Q" value={`(${pn(x2)}, ${sig3(y2)})`} tone="ink" />
          <Readout label={`x ${m === 0.5 ? "÷ 2" : `× ${m}`} ⇒ y ×`} value={<M>{exactMarkup(m, n)}</M>} />
          <Readout label="Check: y₂ ÷ y₁" value={sig3(y2 / y1)} tone="good" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[280px] text-sm tabular-nums">
            <caption className="mb-1 text-left text-xs font-bold uppercase tracking-wide text-ink-2">Table of values (3 s.f.)</caption>
            <tbody>
              <tr className="border-t border-line">
                <th className="py-1 pr-2 text-left font-semibold text-ink-2">x</th>
                {table.map((t) => (
                  <td key={t} className="py-1 pr-2">
                    {t}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-line">
                <th className="py-1 pr-2 text-left font-semibold text-ink-2">y</th>
                {table.map((t) => (
                  <td key={t} className="py-1 pr-2 font-bold">
                    {sig3(f(t))}
                  </td>
                ))}
              </tr>
              <tr className="border-t border-line">
                <th className="py-1 pr-2 text-left font-semibold text-ink-2">{inverse ? <M>{n === -1 ? "xy" : "x^2 y"}</M> : <M>{n === 0.5 ? "y/sqrt(x)" : n === 1 ? "y/x" : `y/x^${n}`}</M>}</th>
                {table.map((t) => (
                  <td key={t} className="py-1 pr-2 text-good">
                    {sig3(inverse ? f(t) * t ** -n : f(t) / t ** n)}
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
          <p className="mt-1 text-xs text-ink-2">The last row is always k — that's how you spot the relationship from a table.</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "ratio-bar-model",
    title: "Ratio bar model",
    blurb: "Know the total, the difference or one share? Watch the bar model find one part — then every share.",
    Component: RatioBarModel,
  },
  {
    id: "proportion-explorer",
    title: "Proportion explorer",
    blurb: "Pick y ∝ x, x², x³, √x, 1/x or 1/x² and see exactly what doubling, trebling or halving x does to y.",
    Component: ProportionExplorer,
  },
];
