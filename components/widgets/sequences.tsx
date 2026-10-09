"use client";
// Interactive explorables for "sequences" (Sequences & Series).
//  1. Arithmetic sequence & series builder — sliders for the first term a, the
//     common difference d and the number of terms n. See the terms plotted as
//     points on a straight line (with the "zero term" a − d as the intercept), the
//     nth term dn + (a − d), the last term, and Sₙ. The "Gauss" view stacks a
//     reversed copy on top so every column has height a + l: two copies make a
//     rectangle, so Sₙ = n(a + l)/2. A target stepper tests "is T a term?".
//  2. Sequence lab (H+) — two tools:
//     • Quadratic: choose a, b, c in an² + bn + c (or hide them for a mystery
//       sequence). The difference table shows the constant second difference 2a,
//       and subtracting an² leaves a linear sequence.
//     • Limit: (pn + q)/(rn + s). Plot the terms for n up to 10, 100 or 1000, see
//       them home in on p/r, and find how big n must be to get within 0.01.
import { useState, type ReactNode } from "react";
import { WidgetFrame, Slider, Segmented, Readout, M, makePlane, PlaneGrid, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* Helpers                                                                    */
/* ------------------------------------------------------------------------ */

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

/** Remove float noise. */
const cl = (v: number): number => parseFloat(v.toPrecision(12));

/** Display number with a real minus sign, rounded to dp, trailing zeros stripped. */
function fmt(v: number, dp = 2): string {
  const r = Number(v.toFixed(dp));
  const s = String(Object.is(r, -0) ? 0 : r);
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}

/** Number for use inside maths markup (ASCII minus). */
const mk = (v: number): string => String(cl(v));

/** Simplified fraction n/d as markup ("3/4", "-5"). Integers only. */
function fracMk(n: number, d: number): string {
  if (d < 0) {
    n = -n;
    d = -d;
  }
  const g = gcd(n, d);
  n /= g;
  d /= g;
  return d === 1 ? `${n}` : `${n < 0 ? "-" : ""}${Math.abs(n)}/${d}`;
}

/** ASCII polynomial from [coef, var] pairs, zero terms dropped. */
function polyMk(terms: Array<[number, string]>): string {
  let out = "";
  for (const [c0, v] of terms) {
    const c = cl(c0);
    if (c === 0) continue;
    const abs = Math.abs(c);
    const t = v === "" ? `${abs}` : abs === 1 ? v : `${abs}${v}`;
    if (!out) out = c < 0 ? `-${t}` : t;
    else out += c < 0 ? ` - ${t}` : ` + ${t}`;
  }
  return out || "0";
}

/** A "nice" grid step for a range. */
function niceStep(range: number, target = 8): number {
  const raw = range / target;
  const p = Math.pow(10, Math.floor(Math.log10(raw)));
  for (const m of [1, 2, 5, 10]) if (m * p >= raw) return m * p;
  return 10 * p;
}

const ordinal = (n: number): string => {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
};

/* ------------------------------------------------------------------------ */
/* 1. Arithmetic sequence & series builder                                     */
/* ------------------------------------------------------------------------ */

type ArithView = "terms" | "sum";

function ArithmeticBuilder() {
  const [a, setA] = useState(3);
  const [d, setD] = useState(4);
  const [n, setN] = useState(8);
  const [view, setView] = useState<ArithView>("terms");
  const [paired, setPaired] = useState(false);
  const [target, setTarget] = useState(43);

  const u = (k: number) => a + (k - 1) * d;
  const ks = Array.from({ length: n }, (_, i) => i + 1);
  const terms = ks.map(u);
  const last = u(n);
  const S = (n * (a + last)) / 2;
  const zero = a - d;
  const nth = polyMk([[d, "n"], [zero, ""]]);

  // Is the target a term?
  let targetNode: ReactNode;
  let targetTone: "good" | "bad" = "bad";
  if (d === 0) {
    targetTone = target === a ? "good" : "bad";
    targetNode = target === a ? <>Every term is {fmt(a)}.</> : <>Every term is {fmt(a)}, so {fmt(target)} never appears.</>;
  } else {
    const pos = (target - a) / d + 1;
    const whole = Number.isInteger(pos);
    if (whole && pos >= 1) {
      targetTone = "good";
      targetNode = (
        <>
          <M>{`${nth} = ${target}`}</M> gives n = {pos}: {fmt(target)} is the <strong>{ordinal(pos)} term</strong>.
        </>
      );
    } else {
      targetNode = (
        <>
          <M>{`${nth} = ${target}`}</M> gives n = <M>{fracMk(target - a + d, d)}</M>
          {whole ? <> — that&apos;s not a positive position</> : <> — not a whole number</>}, so {fmt(target)} is <strong>not a term</strong>.
        </>
      );
    }
  }

  /* ---- Terms view: points on a line ---- */
  const W = 360;
  const H = 280;
  const allVals = [zero, ...Array.from({ length: 15 }, (_, i) => u(i + 1)), 0];
  const lo = Math.min(...allVals);
  const hi = Math.max(...allVals);
  const step = niceStep(Math.max(hi - lo, 10));
  const yMin = Math.floor(lo / step) * step - step;
  const yMax = Math.ceil(hi / step) * step + step;
  const plane = makePlane({ width: W, height: H, xMin: 0, xMax: 16, yMin, yMax, pad: 26 });
  const { px, py } = plane;

  /* ---- Sum view: columns, optionally with the reversed copy stacked ---- */
  const allNonNeg = terms.every((t) => t >= 0);
  const colTop = a + last;
  const BW = 360;
  const BH = 240;
  const padL = 30;
  const padB = 26;
  const colW = (BW - padL - 10) / n;
  const scale = colTop > 0 ? (BH - padB - 14) / (paired ? colTop : Math.max(...terms, 1)) : 1;
  const by = (v: number) => BH - padB - v * scale;

  const ariaTerms = `Points for the first ${n} terms of the sequence with nth term ${nth.replace(/-/g, "−")}: ${terms.map((t) => fmt(t)).join(", ")}. They lie on a straight line that crosses n = 0 at ${fmt(zero)}.`;
  const ariaSum = allNonNeg
    ? `${n} columns with heights equal to the terms ${terms.map((t) => fmt(t)).join(", ")}${paired ? `, each with the reversed sequence stacked on top so every column reaches ${fmt(colTop)}` : ""}.`
    : "Some terms are negative, so the column picture is not drawn.";

  const caption = (
    <>
      Each term is <strong>{fmt(Math.abs(d))} {d >= 0 ? "more" : "less"}</strong> than the one before, so the nth term starts{" "}
      <M>{`${d === 0 ? "0" : polyMk([[d, "n"]])}`}</M>. The &ldquo;zero term&rdquo; (what would come before the 1st) is <M>{`a - d = ${mk(zero)}`}</M>, so the nth term is{" "}
      <M>{nth}</M> — the same as <M>{`a + (n - 1)d`}</M>. The {ordinal(n)} term is <M>{`${mk(a)} + ${n - 1} * ${d < 0 ? `(${d})` : d} = ${mk(last)}`}</M>. Adding the first {n}{" "}
      terms: pair the first with the last, the 2nd with the 2nd-last, …; every pair makes <M>{`${mk(a)} + ${last < 0 ? `(${last})` : last} = ${mk(a + last)}`}</M>, and two copies of the series
      make {n} such pairs, so <M>{`S_${n} = ${n}/2 (${mk(a)} + ${last < 0 ? `(${last})` : last}) = ${mk(S)}`}</M>.
    </>
  );

  return (
    <WidgetFrame
      title="Arithmetic sequence & series builder"
      tryThis={[
        "Make the sequence 5, 8, 11, 14, … What is the zero term, and where does it appear in the nth term?",
        "Find a sequence where 100 is the 20th term. Is there more than one?",
        "Turn on **Two copies** in the Sum view. Why does every column reach the same height?",
        "Make the sum of 10 terms equal exactly 0. What do you notice about the first and last terms?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <Slider label="First term a" value={a} min={-10} max={20} onChange={setA} format={fmt} />
          <Slider label="Common difference d" value={d} min={-5} max={6} onChange={setD} format={fmt} />
          <Slider label="Number of terms n" value={n} min={2} max={15} onChange={setN} />
        </div>

        <p className="text-center text-base">
          {terms.map((t) => fmt(t)).join(", ")}, …
        </p>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="nth term" value={<M>{nth}</M>} />
          <Readout label={`${ordinal(n)} term`} value={fmt(last)} tone="ink" />
          <Readout label="Zero term a − d" value={fmt(zero)} tone="ink" />
          <Readout label={<>Sum S<sub>{n}</sub></>} value={fmt(S)} tone="good" />
        </div>

        <Segmented<ArithView>
          label="View"
          value={view}
          onChange={setView}
          options={[
            { value: "terms", label: "Terms as points" },
            { value: "sum", label: "Sum (Gauss's trick)" },
          ]}
        />

        {view === "terms" ? (
          <>
            <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={ariaTerms}>
              <PlaneGrid plane={plane} step={step} labels={false} />
              {[2, 4, 6, 8, 10, 12, 14, 16].map((x) => (
                <text key={x} x={px(x)} y={H - 8} fontSize={10} textAnchor="middle" className="fill-ink-2">
                  {x}
                </text>
              ))}
              {Array.from(new Set([yMin + step, Math.round((yMin + yMax) / 2 / step) * step, yMax - step])).map((y) => (
                <text key={y} x={4} y={py(y) + 3} fontSize={10} className="fill-ink-2">
                  {fmt(y)}
                </text>
              ))}
              <text x={px(16) - 2} y={py(0) - 5} fontSize={11} textAnchor="end" className="fill-ink-2">
                n
              </text>
              <line x1={px(0)} y1={py(zero)} x2={px(15)} y2={py(zero + 15 * d)} className="stroke-accent" strokeWidth={1.5} strokeDasharray="5 4" />
              <circle cx={px(0)} cy={py(zero)} r={5} className="fill-surface stroke-accent" strokeWidth={2} />
              {ks.map((k) => (
                <circle key={k} cx={px(k)} cy={py(u(k))} r={4.5} className="fill-brand stroke-ink" strokeWidth={1} />
              ))}
            </svg>
            <p className="text-xs text-ink-2">
              Dots: the terms (n, u<sub>n</sub>). Dashed line: <M>{`y = ${polyMk([[d, "x"], [zero, ""]])}`}</M>. Hollow circle at n = 0: the zero term {fmt(zero)}. A linear sequence is a
              straight-line graph sampled at whole numbers — the gradient is d.
            </p>
          </>
        ) : (
          <>
            <Segmented<"one" | "two">
              label="Copies"
              value={paired ? "two" : "one"}
              onChange={(v) => setPaired(v === "two")}
              options={[
                { value: "one", label: "One copy" },
                { value: "two", label: "Two copies" },
              ]}
            />
            {allNonNeg && colTop > 0 ? (
              <svg viewBox={`0 0 ${BW} ${BH}`} className="h-auto w-full" role="img" aria-label={ariaSum}>
                <line x1={padL} y1={by(0)} x2={BW - 6} y2={by(0)} className="stroke-ink-2" strokeWidth={1.5} />
                {ks.map((k, i) => {
                  const x = padL + i * colW + 1;
                  const h1 = u(k);
                  const h2 = u(n + 1 - k);
                  return (
                    <g key={k}>
                      <rect x={x} y={by(h1)} width={colW - 2} height={h1 * scale} className="fill-brand" opacity={0.85} />
                      {paired ? <rect x={x} y={by(h1 + h2)} width={colW - 2} height={h2 * scale} className="fill-accent" opacity={0.75} /> : null}
                      {colW > 18 ? (
                        <text x={x + (colW - 2) / 2} y={BH - 10} fontSize={10} textAnchor="middle" className="fill-ink-2">
                          {fmt(h1)}
                        </text>
                      ) : null}
                    </g>
                  );
                })}
                {paired ? (
                  <>
                    <line x1={padL} y1={by(colTop)} x2={padL + n * colW} y2={by(colTop)} className="stroke-ink" strokeWidth={1.5} strokeDasharray="4 3" />
                    <text x={padL - 4} y={by(colTop) + 4} fontSize={11} textAnchor="end" className="fill-ink font-bold">
                      {fmt(colTop)}
                    </text>
                  </>
                ) : null}
              </svg>
            ) : (
              <p className="rounded-xl border border-line bg-surface-2 p-3 text-sm text-ink-2">
                Some terms are zero or negative, so heights can&apos;t show them as columns — but the pairing still works: the formula below doesn&apos;t care about signs.
              </p>
            )}
            <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed">
              {paired ? (
                <>
                  Blue: <M>{`S_${n}`}</M> in order. Orange: the same terms in reverse. Each column is <M>{`a + l = ${mk(a)} + ${last < 0 ? `(${last})` : last} = ${mk(colTop)}`}</M>, so two copies
                  make a {n} × {fmt(colTop)} rectangle: <M>{`2S_${n} = ${n * colTop}`}</M>, <M>{`S_${n} = ${mk(S)}`}</M>.
                </>
              ) : (
                <>
                  <M>{`S_${n} = n/2 (2a + (n - 1)d) = ${n}/2 (2 * ${a < 0 ? `(${a})` : a} + ${n - 1} * ${d < 0 ? `(${d})` : d}) = ${mk(S)}`}</M>
                </>
              )}
            </div>
          </>
        )}

        <div className="space-y-2 rounded-xl border border-line p-3">
          <Slider label="Is this number a term?" value={target} min={-60} max={200} onChange={setTarget} format={fmt} />
          <p className={`text-sm ${targetTone === "good" ? "text-good" : "text-bad"}`}>{targetNode}</p>
        </div>
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Sequence lab (H+): quadratic sequences and limiting values               */
/* ------------------------------------------------------------------------ */

type LabMode = "quadratic" | "limit";

function Cell({ children, strong }: { children: ReactNode; strong?: boolean }) {
  return <td className={`border border-line px-2 py-1 text-center tabular-nums ${strong ? "font-extrabold text-brand" : ""}`}>{children}</td>;
}

/** " + 3/n", " - 3/n" or "" (inside {{ }}). */
const overN = (k: number): string => (k === 0 ? "" : ` ${k < 0 ? "-" : "+"} ${Math.abs(k)}/n`);

function QuadraticPanel() {
  const [A, setA] = useState(1);
  const [B, setB] = useState(2);
  const [C, setC] = useState(-1);
  const [hidden, setHidden] = useState(false);

  const f = (n: number) => cl(A * n * n + B * n + C);
  const ns = [1, 2, 3, 4, 5, 6];
  const vals = ns.map(f);
  const d1 = vals.slice(1).map((v, i) => cl(v - vals[i]));
  const d2 = d1.slice(1).map((v, i) => cl(v - d1[i]));
  const rem = ns.map((n) => cl(f(n) - A * n * n));
  const formula = polyMk([[A, "n^2"], [B, "n"], [C, ""]]);

  function mystery() {
    // Randomness only in an event handler.
    const As = [0.5, 1, 1.5, 2, 3, -1, -2, -0.5];
    const a = As[Math.floor(Math.random() * As.length)];
    const half = !Number.isInteger(a);
    const b = Math.floor(Math.random() * 13) - 6 + (half ? 0.5 : 0);
    const c = Math.floor(Math.random() * 17) - 8;
    setA(a);
    setB(b);
    setC(c);
    setHidden(true);
  }

  const W = 360;
  const H = 240;
  const xs = [1, 2, 3, 4, 5, 6, 7, 8];
  const ys = xs.map(f);
  const lo = Math.min(0, ...ys);
  const hi = Math.max(0, ...ys);
  const step = niceStep(Math.max(hi - lo, 10), 6);
  const plane = makePlane({ width: W, height: H, xMin: 0, xMax: 9, yMin: Math.floor(lo / step) * step - step, yMax: Math.ceil(hi / step) * step + step, pad: 22 });
  const { px, py } = plane;
  const curve: string[] = [];
  for (let i = 0; i <= 90; i++) {
    const x = (9 * i) / 90;
    curve.push(`${i ? "L" : "M"}${px(x).toFixed(1)},${py(A * x * x + B * x + C).toFixed(1)}`);
  }

  return (
    <div className="space-y-4">
      {hidden ? (
        <div className="flex flex-wrap items-center gap-2 rounded-xl bg-brand-soft p-3 text-sm">
          <span className="font-bold">Mystery sequence — find its nth term from the table, then reveal.</span>
          <button type="button" className="kbd" onClick={() => setHidden(false)}>
            Reveal
          </button>
        </div>
      ) : (
        <div className="grid gap-3 sm:grid-cols-3">
          <Slider label="a (n² coefficient)" value={A} min={-3} max={3} step={0.5} onChange={setA} format={fmt} />
          <Slider label="b" value={B} min={-10} max={10} step={0.5} onChange={setB} format={fmt} />
          <Slider label="c" value={C} min={-10} max={10} onChange={setC} format={fmt} />
        </div>
      )}
      <div className="flex flex-wrap items-center gap-2">
        <button type="button" className="kbd" onClick={mystery}>
          New mystery sequence
        </button>
        {!hidden ? (
          <span className="text-lg">
            <M>{`u_n = ${formula}`}</M>
          </span>
        ) : null}
      </div>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <tbody>
            <tr>
              <th className="border border-line px-2 py-1 text-left text-ink-2">n</th>
              {ns.map((n) => (
                <Cell key={n}>{n}</Cell>
              ))}
            </tr>
            <tr>
              <th className="border border-line px-2 py-1 text-left">Term</th>
              {vals.map((v, i) => (
                <Cell key={i} strong>
                  {fmt(v)}
                </Cell>
              ))}
            </tr>
            <tr>
              <th className="border border-line px-2 py-1 text-left text-ink-2">1st diff</th>
              <td className="border border-line" />
              {d1.map((v, i) => (
                <Cell key={i}>{fmt(v)}</Cell>
              ))}
            </tr>
            <tr>
              <th className="border border-line px-2 py-1 text-left text-ink-2">2nd diff</th>
              <td className="border border-line" />
              <td className="border border-line" />
              {d2.map((v, i) => (
                <Cell key={i}>{fmt(v)}</Cell>
              ))}
            </tr>
            {!hidden ? (
              <tr>
                <th className="border border-line px-2 py-1 text-left text-ink-2">
                  Term − <M>{polyMk([[A, "n^2"]])}</M>
                </th>
                {rem.map((v, i) => (
                  <Cell key={i}>{fmt(v)}</Cell>
                ))}
              </tr>
            ) : null}
          </tbody>
        </table>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Terms of the sequence for n = 1 to 8: ${ys.map((y) => fmt(y)).join(", ")}${hidden ? "" : `, on the curve y = ${formula.replace(/-/g, "−")}`}.`}>
        <PlaneGrid plane={plane} step={step} labels={false} />
        {xs.map((x) => (
          <text key={x} x={px(x)} y={H - 6} fontSize={10} textAnchor="middle" className="fill-ink-2">
            {x}
          </text>
        ))}
        {!hidden ? <path d={curve.join(" ")} fill="none" className="stroke-accent" strokeWidth={1.5} strokeDasharray="5 4" /> : null}
        {xs.map((x) => (
          <circle key={x} cx={px(x)} cy={py(f(x))} r={4.5} className="fill-brand stroke-ink" strokeWidth={1} />
        ))}
      </svg>

      <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed">
        {A === 0 ? (
          <>The second differences are all 0, so this sequence is <strong>linear</strong>, not quadratic: the first differences are constant ({fmt(B)}).</>
        ) : hidden ? (
          <>The second difference is constant at {fmt(2 * A)}. Halve it to get the coefficient of <M>{"n^2"}</M>, subtract that many <M>{"n^2"}</M> from each term, and find the nth term of what&apos;s left.</>
        ) : (
          <>
            Second difference {fmt(2 * A)} → coefficient of <M>{"n^2"}</M> is {fmt(2 * A)} ÷ 2 = {fmt(A)}. Taking away <M>{polyMk([[A, "n^2"]])}</M> leaves {rem.map((v) => fmt(v)).join(", ")}, a linear sequence with nth term{" "}
            <M>{polyMk([[B, "n"], [C, ""]])}</M>. So <M>{`u_n = ${formula}`}</M>.
          </>
        )}
      </div>
    </div>
  );
}

type Zoom = 10 | 100 | 1000;

function LimitPanel() {
  const [p, setP] = useState(2);
  const [qq, setQ] = useState(1);
  const [r, setR] = useState(1);
  const [s, setS] = useState(3);
  const [zoom, setZoom] = useState<Zoom>(10);

  // Keep every denominator positive for n ≥ 1: r + s > 0.
  const sMin = 1 - r;
  const sv = Math.max(s, sMin);
  const u = (n: number) => (p * n + qq) / (r * n + sv);
  const L = p / r;
  const K = qq * r - p * sv; // u_n − L = K / (r(rn + s))
  const top = polyMk([[p, "n"], [qq, ""]]);
  const bot = polyMk([[r, "n"], [sv, ""]]);
  const nth = `(${top})/(${bot})`;

  // Smallest n with |u_n − L| < 0.01: r(rn + s) > 100|K|.
  let within: number | null = 1;
  if (K !== 0) {
    let n = Math.max(1, Math.floor((100 * Math.abs(K)) / (r * r) - sv / r) - 2);
    while (Math.abs(K) / (r * (r * n + sv)) >= 0.01) n++;
    within = n;
  }

  const W = 360;
  const H = 240;
  const samples: Array<[number, number]> = [];
  const count = Math.min(zoom, 200);
  for (let i = 1; i <= count; i++) {
    const n = zoom <= 200 ? i : Math.round((i * zoom) / count);
    samples.push([n, u(n)]);
  }
  const yVals = [...samples.map(([, y]) => y), L, u(1)];
  let lo = Math.min(...yVals);
  let hi = Math.max(...yVals);
  if (hi - lo < 0.5) {
    lo -= 0.5;
    hi += 0.5;
  }
  const padY = (hi - lo) * 0.1;
  const plane = makePlane({ width: W, height: H, xMin: 0, xMax: zoom, yMin: lo - padY, yMax: hi + padY, pad: 26 });
  const { px, py } = plane;
  const path = samples.map(([n, y], i) => `${i ? "L" : "M"}${px(n).toFixed(1)},${py(y).toFixed(1)}`).join(" ");

  const LMk = fracMk(p, r);
  const caption = (
    <>
      Divide top and bottom by n: <M>{`u_n = (${mk(p)}${overN(qq)})/(${mk(r)}${overN(sv)})`}</M>. As n grows, every{" "}
      <M>{"k/n"}</M> part shrinks towards 0, so the terms approach <M>{`${mk(p)}/${mk(r)}${LMk !== `${p}/${r}` ? ` = ${LMk}` : ""}`}</M>.{" "}
      {K === 0 ? (
        <>Here the top is an exact multiple of the bottom, so <strong>every</strong> term equals the limit.</>
      ) : (
        <>
          Exactly, <M>{`u_n - ${LMk} = ${K}/${r === 1 ? `(${bot})` : `(${r}(${bot}))`}`}</M>, which is {K > 0 ? "positive" : "negative"}: the terms approach from <strong>{K > 0 ? "above" : "below"}</strong>{" "}
          and never reach the limit. They are within 0.01 of it from n = {within} onwards.
        </>
      )}
    </>
  );

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-2">
        <Slider label="p (top: pn + q)" value={p} min={-6} max={6} onChange={setP} />
        <Slider label="q" value={qq} min={-10} max={10} onChange={setQ} />
        <Slider label="r (bottom: rn + s)" value={r} min={1} max={6} onChange={(v) => { setR(v); if (s < 1 - v) setS(1 - v); }} />
        <Slider label="s" value={sv} min={sMin} max={10} onChange={setS} />
      </div>
      <p className="text-center text-lg">
        <M>{`u_n = ${nth}`}</M>
      </p>
      <Segmented<"10" | "100" | "1000">
        label="Zoom out"
        value={String(zoom) as "10" | "100" | "1000"}
        onChange={(v) => setZoom(Number(v) as Zoom)}
        options={[
          { value: "10", label: "n ≤ 10" },
          { value: "100", label: "n ≤ 100" },
          { value: "1000", label: "n ≤ 1000" },
        ]}
      />
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Terms of u n = ${nth} for n from 1 to ${zoom}, approaching the dashed line at ${fmt(L, 4)}.`}>
        <rect x={plane.pad} y={plane.pad} width={W - 2 * plane.pad} height={H - 2 * plane.pad} className="fill-surface stroke-line" />
        <line x1={px(0)} x2={px(zoom)} y1={py(L)} y2={py(L)} className="stroke-accent" strokeWidth={1.5} strokeDasharray="6 4" />
        <text x={px(zoom) - 2} y={py(L) - 5} fontSize={11} textAnchor="end" className="fill-ink font-bold">
          limit {fmt(L, 4)}
        </text>
        {zoom <= 10 ? (
          samples.map(([n, y]) => <circle key={n} cx={px(n)} cy={py(y)} r={4} className="fill-brand stroke-ink" strokeWidth={1} />)
        ) : (
          <path d={path} fill="none" className="stroke-brand" strokeWidth={2} />
        )}
        <text x={px(zoom)} y={H - 8} fontSize={10} textAnchor="end" className="fill-ink-2">
          n = {zoom}
        </text>
        <text x={plane.pad} y={H - 8} fontSize={10} className="fill-ink-2">
          n = 0
        </text>
        <text x={plane.pad + 2} y={plane.pad - 6} fontSize={10} className="fill-ink-2">
          {fmt(hi + padY, 3)}
        </text>
      </svg>
      <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
        <Readout label="u₁₀" value={fmt(u(10), 4)} tone="ink" />
        <Readout label="u₁₀₀" value={fmt(u(100), 4)} tone="ink" />
        <Readout label="u₁₀₀₀" value={fmt(u(1000), 5)} tone="ink" />
        <Readout label="Limit" value={<M>{LMk}</M>} tone="good" />
      </div>
      <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed">{caption}</div>
    </div>
  );
}

function SequenceLab() {
  const [mode, setMode] = useState<LabMode>("quadratic");
  return (
    <WidgetFrame
      title="Sequence lab (H+)"
      tryThis={[
        "Quadratic: change only c. Which rows of the difference table change, and which don't? Why?",
        "Quadratic: press **New mystery sequence** and find the nth term before you reveal it.",
        "Limit: make a sequence that tends to {{3/2}} from **below**.",
        "Limit: can you make the terms get *further* from the limit as n grows? Explain what you find.",
      ]}
      caption={
        mode === "quadratic" ? (
          <>
            For <M>{"u_n = an^2 + bn + c"}</M>, the second difference is always <M>{"2a"}</M>: the <M>{"n^2"}</M> terms 1, 4, 9, 16, … have second difference 2, and b and c only shift the first differences.
            That&apos;s why you halve the second difference.
          </>
        ) : (
          <>
            For large n, the <M>{"n"}</M>-terms dominate: <M>{"(pn + q)/(rn + s)"}</M> behaves like <M>{"(pn)/(rn) = p/r"}</M>. To prove it, divide every term by n and let <M>{"1/n"}</M> → 0.
          </>
        )
      }
    >
      <div className="space-y-4">
        <Segmented<LabMode>
          label="Tool"
          value={mode}
          onChange={setMode}
          options={[
            { value: "quadratic", label: "Quadratic nth term" },
            { value: "limit", label: "Limiting value" },
          ]}
        />
        {mode === "quadratic" ? <QuadraticPanel /> : <LimitPanel />}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "arithmetic-builder",
    title: "Arithmetic sequence & series builder",
    blurb: "Change a, d and n: see the nth term, the straight-line pattern and Gauss's pairing trick for Sₙ.",
    Component: ArithmeticBuilder,
  },
  {
    id: "sequence-lab",
    title: "Sequence lab (H+)",
    blurb: "Crack quadratic sequences with a difference table, and watch fraction sequences home in on their limit.",
    Component: SequenceLab,
  },
];
