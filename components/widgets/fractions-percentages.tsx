"use client";
// Interactive explorables for "fractions-percentages".
//  1. Decimal machine — long division of n/d, showing why the decimal
//     terminates (denominator 2^a 5^b) or recurs, where the cycle starts,
//     how long it is, and the algebra that turns it back into a fraction.
//  2. Growth & decay lab — compound interest / depreciation year by year,
//     against simple interest, with A = P × m^n, the overall % change and
//     the number of years to double (or halve).
import { useState, type ReactNode } from "react";
import { WidgetFrame, Stepper, Slider, Segmented, Readout, M, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* Helpers                                                                    */
/* ------------------------------------------------------------------------ */

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

/** Index-form markup of the prime factorisation: 60 → "2^2 * 3 * 5". */
function factorMarkup(n: number): string {
  if (n === 1) return "1";
  const parts: string[] = [];
  let m = n;
  for (let p = 2; p * p <= m; p++) {
    let k = 0;
    while (m % p === 0) {
      m /= p;
      k++;
    }
    if (k) parts.push(k > 1 ? `${p}^${k}` : `${p}`);
  }
  if (m > 1) parts.push(`${m}`);
  return parts.join(" * ");
}

/** Long division of r/d (0 ≤ r < d): pre-period digits, period digits and the step table. */
function longDivision(r0: number, d: number) {
  const seen = new Map<number, number>();
  const digits: number[] = [];
  const rems: number[] = [];
  let r = r0;
  while (r !== 0 && !seen.has(r) && digits.length < 200) {
    seen.set(r, digits.length);
    rems.push(r);
    digits.push(Math.floor((r * 10) / d));
    r = (r * 10) % d;
  }
  if (r === 0) return { pre: digits, period: [] as number[], rems, repeatAt: -1 };
  const start = seen.get(r) ?? 0;
  return { pre: digits.slice(0, start), period: digits.slice(start), rems, repeatAt: start };
}

/** Plain number with a real minus sign and thousands separators. */
function fmtNum(v: number, dp = 2): string {
  const s = Math.abs(v).toLocaleString("en-GB", { minimumFractionDigits: dp, maximumFractionDigits: dp });
  return (v < 0 ? "−" : "") + s;
}

/* ------------------------------------------------------------------------ */
/* 1. Decimal machine                                                         */
/* ------------------------------------------------------------------------ */

function DecimalMachine() {
  const [n, setN] = useState(5);
  const [d, setD] = useState(22);

  const g = gcd(n, d);
  const sn = n / g;
  const sd = d / g;
  const whole = Math.floor(sn / sd);
  const { pre, period, rems, repeatAt } = longDivision(sn % sd, sd);
  let twos = 0;
  let fives = 0;
  let other = sd;
  while (other % 2 === 0) {
    other /= 2;
    twos++;
  }
  while (other % 5 === 0) {
    other /= 5;
    fives++;
  }
  const terminates = other === 1;
  const p = pre.length;
  const L = period.length;

  const preText = pre.join("");
  const periodShown = period.slice(0, 30).join("");
  const periodCut = L > 30;
  const plainDecimal = terminates
    ? `${whole}${p ? "." + preText : ""}`
    : `${whole}.${preText}${period.join("").repeat(L < 6 ? Math.ceil(12 / L) : 1).slice(0, Math.max(L, 12))}…`;

  // Algebra proof only when the numbers stay readable.
  const showProof = !terminates && p + L <= 6;
  const bigK = 10 ** (p + L);
  const smallK = 10 ** p;
  const A = Number(`${whole}${preText}${period.join("")}`);
  const B = Number(`${whole}${preText}`);

  // Long-division steps to show (first 10).
  const steps = rems.slice(0, 10).map((r, i) => ({ i, r, r10: r * 10, digit: Math.floor((r * 10) / sd), next: (r * 10) % sd }));

  const aria = `${n} over ${d}${g > 1 ? ` simplifies to ${sn} over ${sd}` : ""}. Denominator ${sd} = ${factorMarkup(sd).replace(/\*/g, "times").replace(/\^/g, " to the power ")}. The decimal ${
    terminates ? `terminates: ${plainDecimal}` : `recurs with a cycle of ${L} digit${L === 1 ? "" : "s"} starting after ${p} non-recurring digit${p === 1 ? "" : "s"}`
  }.`;

  let caption: ReactNode;
  if (terminates) {
    caption = (
      <>
        In simplest form the denominator is <M>{`${sd} = ${factorMarkup(sd)}`}</M>, which has <strong>only 2s and 5s</strong>. So you can scale it up to a power of
        10 — <M>{`${sn}/${sd} = ${sn * (10 ** Math.max(twos, fives) / sd)}/${10 ** Math.max(twos, fives)}`}</M> — and the decimal stops after{" "}
        {Math.max(twos, fives)} place{Math.max(twos, fives) === 1 ? "" : "s"}. The long division hits remainder 0.
      </>
    );
  } else {
    caption = (
      <>
        The denominator <M>{`${sd} = ${factorMarkup(sd)}`}</M> has a prime factor other than 2 or 5, so no power of 10 is a multiple of it — the division never
        ends. There are only {sd - 1} possible non-zero remainders, so one must <strong>repeat</strong>, and from then on the digits repeat too: a cycle of{" "}
        <strong>{L}</strong> digit{L === 1 ? "" : "s"} (always at most {sd - 1}).
        {p > 0 ? (
          <> The {twos || fives ? `factor${twos && fives ? "s" : ""} of ${[twos ? "2" : "", fives ? "5" : ""].filter(Boolean).join(" and ")}` : ""} in {sd} cause{twos && fives ? "" : "s"} the {p} non-recurring digit{p === 1 ? "" : "s"} before the cycle starts.</>
        ) : null}
      </>
    );
  }

  return (
    <WidgetFrame
      title="Decimal machine"
      tryThis={[
        "Find three denominators between 30 and 50 whose fractions terminate. What do they have in common?",
        "Set {{1/7}}, then {{2/7}}, {{3/7}}. Same six digits — why? (Watch the remainders.)",
        "Make a fraction with exactly one non-recurring digit before the cycle, like 0.1666…",
        "Which denominator under 100 gives the longest cycle? Can a cycle ever be longer than d − 1?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-2">
          <Stepper label="Numerator" value={n} min={1} max={99} onChange={setN} />
          <Stepper label="Denominator" value={d} min={2} max={99} onChange={setD} />
        </div>
        <div className="grid gap-3 sm:grid-cols-2">
          <Slider label="Numerator (slide)" value={n} min={1} max={99} onChange={setN} />
          <Slider label="Denominator (slide)" value={d} min={2} max={99} onChange={setD} />
        </div>

        <div className="rounded-xl border border-line bg-surface p-3" role="img" aria-label={aria}>
          <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 text-lg">
            <span className="text-2xl">
              <M>{`${n}/${d}`}</M>
            </span>
            {g > 1 ? (
              <span>
                = <M>{`${sn}/${sd}`}</M>
              </span>
            ) : null}
            <span className="font-mono text-xl tabular-nums break-all">
              = {whole}
              {pre.length || L ? "." : ""}
              <span>{preText}</span>
              {L ? (
                <span className="rounded bg-brand-soft px-0.5 text-brand underline decoration-dotted underline-offset-4">
                  {periodShown}
                  {periodCut ? "…" : ""}
                </span>
              ) : null}
              {L ? <span className="text-ink-2">…</span> : null}
            </span>
          </div>
          {L ? <p className="mt-1 text-sm text-ink-2">The highlighted block repeats forever.</p> : null}
        </div>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Denominator" value={<M>{factorMarkup(sd)}</M>} tone="ink" />
          <Readout label="Type" value={terminates ? "Terminating" : "Recurring"} tone={terminates ? "good" : "brand"} />
          <Readout label="Non-recurring digits" value={terminates ? "—" : p} tone="ink" />
          <Readout label="Cycle length" value={terminates ? "—" : L} tone="ink" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[300px] text-sm tabular-nums">
            <caption className="mb-1 text-left text-xs font-bold uppercase tracking-wide text-ink-2">Long division of the fractional part (first {steps.length} steps)</caption>
            <thead>
              <tr className="text-left text-ink-2">
                <th className="py-1 pr-2 font-semibold">Remainder</th>
                <th className="py-1 pr-2 font-semibold">× 10</th>
                <th className="py-1 pr-2 font-semibold">÷ {sd} → digit</th>
                <th className="py-1 font-semibold">New remainder</th>
              </tr>
            </thead>
            <tbody>
              {steps.map((s) => {
                const cycleStart = s.i === repeatAt;
                return (
                  <tr key={s.i} className={`border-t border-line ${!terminates && s.i >= repeatAt ? "bg-brand-soft/40" : ""}`}>
                    <td className={`py-1 pr-2 ${cycleStart ? "font-extrabold text-brand" : ""}`}>{s.r}</td>
                    <td className="py-1 pr-2">{s.r10}</td>
                    <td className="py-1 pr-2 font-bold">{s.digit}</td>
                    <td className={`py-1 ${(!terminates && s.next === rems[repeatAt]) ? "font-extrabold text-brand" : ""}`}>{s.next}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          {!terminates ? (
            <p className="mt-1 text-xs text-ink-2">
              Remainder <strong className="text-brand">{rems[repeatAt]}</strong> comes back, so the digits repeat from there.
            </p>
          ) : null}
        </div>

        {showProof ? (
          <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed">
            <p className="font-bold text-ink">Prove it with algebra</p>
            <ul className="mt-1 space-y-0.5 tabular-nums">
              <li>Let x = {plainDecimal}</li>
              {p > 0 ? (
                <li>
                  {smallK}x = {whole}
                  {preText}.{period.join("").repeat(3)}…
                </li>
              ) : null}
              <li>
                {bigK}x = {A}.{period.join("").repeat(3)}…
              </li>
              <li>
                Subtract: {bigK - smallK}x = {A} − {B} = {A - B}
              </li>
              <li className="font-bold text-good">
                x = <M>{`${A - B}/${bigK - smallK}`}</M>
                {gcd(A - B, bigK - smallK) > 1 ? (
                  <>
                    {" "}= <M>{`${(A - B) / gcd(A - B, bigK - smallK)}/${(bigK - smallK) / gcd(A - B, bigK - smallK)}`}</M>
                  </>
                ) : null}
              </li>
            </ul>
          </div>
        ) : !terminates ? (
          <p className="rounded-xl bg-surface-2 p-3 text-sm">The cycle is long here — pick a fraction whose decimal has at most 6 digits before it repeats to see the algebra proof.</p>
        ) : null}
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Growth & decay lab                                                      */
/* ------------------------------------------------------------------------ */

type Dir = "grow" | "decay";

function GrowthLab() {
  const [dir, setDir] = useState<Dir>("grow");
  const [P, setP] = useState(5000);
  const [rate, setRate] = useState(6); // per cent, step 0.5
  const [years, setYears] = useState(12);

  const r = dir === "grow" ? rate : -rate;
  const m = 1 + r / 100;
  const values = Array.from({ length: years + 1 }, (_, k) => P * m ** k);
  const simple = Array.from({ length: years + 1 }, (_, k) => P * (1 + (r / 100) * k));
  const A = values[years];
  const S = simple[years];
  const overall = (A / P - 1) * 100;
  // Years to double (growth) or halve (decay).
  let nTarget = 0;
  for (let k = 1; k <= 500; k++) {
    const v = m ** k;
    if (dir === "grow" ? v >= 2 : v <= 0.5) {
      nTarget = k;
      break;
    }
  }

  // ---- chart ----
  const W = 360;
  const H = 210;
  const left = 46;
  const right = 10;
  const top = 12;
  const bottom = 28;
  const maxV = Math.max(...values, ...simple, P) * 1.05;
  const px = (k: number) => left + ((k + 0.5) * (W - left - right)) / (years + 1);
  const py = (v: number) => H - bottom - (Math.max(0, v) / maxV) * (H - top - bottom);
  const barW = Math.max(3, ((W - left - right) / (years + 1)) * 0.6);
  const tickStep = maxV > 40000 ? 10000 : maxV > 20000 ? 5000 : maxV > 8000 ? 2000 : maxV > 4000 ? 1000 : 500;
  const yTicks: number[] = [];
  for (let v = 0; v <= maxV; v += tickStep) yTicks.push(v);
  const xLabelEvery = years > 15 ? 5 : years > 8 ? 2 : 1;
  const simplePath = simple.map((v, k) => `${k ? "L" : "M"}${px(k).toFixed(1)},${py(v).toFixed(1)}`).join(" ");

  const mText = m.toFixed(rate % 1 ? 3 : 2).replace(/0+$/, "").replace(/\.$/, "");
  const aria = `Bar chart of value each year for ${years} years. Start $${fmtNum(P, 0)}, multiplier ${mText} per year. Compound value after ${years} years $${fmtNum(A)}; simple ${dir === "grow" ? "interest" : "depreciation"} gives $${fmtNum(S)}.`;

  return (
    <WidgetFrame
      title="Growth & decay lab"
      tryThis={[
        "At 6% a year, how many years does it take to double? Now try 8% and 12%. Spot the \"rule of 72\": years ≈ 72 ÷ rate.",
        "Make compound and simple interest give the *same* answer. Which number of years does it?",
        "Depreciate at 20% a year. Does the value ever reach $0? Why not?",
        "Find a rate where the money is worth more than 3 times as much after 10 years.",
      ]}
      caption={
        <>
          Each year the value is multiplied by the same <strong>multiplier</strong> <M>{`m = 1 ${r >= 0 ? "+" : "-"} ${Math.abs(r)}/100 = ${mText}`}</M>, so after {years} year
          {years === 1 ? "" : "s"}: <M>{`A = ${P} * ${mText}^${years}`}</M> = <strong>${fmtNum(A)}</strong>. Simple {dir === "grow" ? "interest adds" : "depreciation takes away"} the
          same ${fmtNum(Math.abs((P * r) / 100))} every year (the dashed line), but compound {dir === "grow" ? "interest earns interest on the interest" : "depreciation takes a percentage of a shrinking value"}
          — so the bars {dir === "grow" ? "curve upwards and pull ahead" : "fall more and more slowly and never reach zero"}. Overall change:{" "}
          <strong>
            {overall >= 0 ? "+" : "−"}
            {fmtNum(Math.abs(overall))}%
          </strong>
          , not {years} × {rate}% = {fmtNum(years * rate, rate % 1 ? 1 : 0)}%.
        </>
      }
    >
      <div className="space-y-4">
        <Segmented<Dir>
          label="Growth or decay"
          value={dir}
          onChange={setDir}
          options={[
            { value: "grow", label: "Compound interest" },
            { value: "decay", label: "Depreciation" },
          ]}
        />
        <div className="grid gap-3 sm:grid-cols-3">
          <Slider label="Start amount P" value={P} min={500} max={20000} step={500} onChange={setP} format={(v) => `$${fmtNum(v, 0)}`} />
          <Slider label={dir === "grow" ? "Interest rate per year" : "Depreciation per year"} value={rate} min={0.5} max={dir === "grow" ? 20 : 40} step={0.5} onChange={setRate} format={(v) => `${v}%`} />
          <Slider label="Years n" value={years} min={1} max={25} onChange={setYears} />
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={aria}>
          {yTicks.map((v) => (
            <g key={v}>
              <line x1={left} x2={W - right} y1={py(v)} y2={py(v)} className="stroke-line" strokeWidth={1} />
              <text x={left - 4} y={py(v) + 3} fontSize={9} textAnchor="end" className="fill-ink-2">
                {v >= 1000 ? `${v / 1000}k` : v}
              </text>
            </g>
          ))}
          <line x1={left} x2={W - right} y1={py(0)} y2={py(0)} className="stroke-ink-2" strokeWidth={1.5} />
          {/* reference line at P, and at 2P / P/2 */}
          <line x1={left} x2={W - right} y1={py(P)} y2={py(P)} className="stroke-ink-2" strokeWidth={1} strokeDasharray="2 3" />
          {(dir === "grow" ? 2 * P : P / 2) <= maxV ? (
            <g>
              <line x1={left} x2={W - right} y1={py(dir === "grow" ? 2 * P : P / 2)} y2={py(dir === "grow" ? 2 * P : P / 2)} className="stroke-accent" strokeWidth={1.2} strokeDasharray="6 3" />
              <text x={W - right - 2} y={py(dir === "grow" ? 2 * P : P / 2) - 3} fontSize={9} textAnchor="end" className="fill-accent">
                {dir === "grow" ? "2P" : "P/2"}
              </text>
            </g>
          ) : null}
          {values.map((v, k) => (
            <rect
              key={k}
              x={px(k) - barW / 2}
              y={py(v)}
              width={barW}
              height={Math.max(0, py(0) - py(v))}
              className={nTarget && k >= nTarget ? "fill-good" : "fill-brand"}
              opacity={0.85}
            />
          ))}
          <path d={simplePath} fill="none" className="stroke-ink" strokeWidth={1.8} strokeDasharray="5 4" />
          {values.map((_, k) =>
            k % xLabelEvery === 0 ? (
              <text key={`x${k}`} x={px(k)} y={H - bottom + 13} fontSize={9} textAnchor="middle" className="fill-ink-2">
                {k}
              </text>
            ) : null,
          )}
          <text x={(left + W - right) / 2} y={H - 4} fontSize={10} textAnchor="middle" className="fill-ink-2">
            years
          </text>
        </svg>
        <p className="text-xs text-ink-2">
          Bars: compound value each year ({nTarget ? `green once it has ${dir === "grow" ? "doubled" : "halved"}` : "blue"}). Dashed line: simple {dir === "grow" ? "interest" : "depreciation"}.
        </p>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Multiplier m" value={mText} tone="ink" />
          <Readout label={`Compound after ${years} yr`} value={`$${fmtNum(A)}`} />
          <Readout label={`Simple after ${years} yr`} value={`$${fmtNum(Math.max(0, S))}`} tone="ink" />
          <Readout label={dir === "grow" ? "Years to double" : "Years to halve"} value={nTarget || "—"} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "decimal-machine",
    title: "Decimal machine",
    blurb: "Divide any fraction and see why its decimal stops or repeats — and the algebra that turns it back.",
    Component: DecimalMachine,
  },
  {
    id: "growth-decay-lab",
    title: "Growth & decay lab",
    blurb: "Compound interest and depreciation year by year, against simple interest.",
    Component: GrowthLab,
  },
];
