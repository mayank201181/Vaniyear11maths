"use client";
// Interactive explorables for "statistics".
//  1. Cumulative frequency builder — edit a grouped frequency table and watch the
//     running totals, the plotted points (at upper bounds), the median, quartiles,
//     IQR and a matching box plot update; read "how many more than x" off the graph.
//  2. Histogram studio — unequal class widths: frequency density = f ÷ width,
//     area = frequency. Compare an honest histogram with a misleading
//     "height = frequency" chart and estimate how many lie between any two values.
import { useState, type ReactNode } from "react";
import { WidgetFrame, Stepper, Slider, Segmented, Readout, M, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* Helpers                                                                    */
/* ------------------------------------------------------------------------ */

/** Up to dp decimal places, trailing zeros removed, real minus sign. */
function fmt(v: number, dp = 2): string {
  let s = (Math.round(v * 10 ** dp) / 10 ** dp).toFixed(dp);
  if (s.includes(".")) s = s.replace(/\.?0+$/, "");
  if (s === "-0") s = "0";
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}

/** Exactly representable to dp places? */
function exactTo(v: number, dp: number): boolean {
  return Math.abs(v * 10 ** dp - Math.round(v * 10 ** dp)) < 1e-9;
}

/** "= 2.5" or "≈ 2.47" depending on whether rounding happened. */
function eq(v: number, dp = 2): string {
  return `${exactTo(v, dp) ? "=" : "≈"} ${fmt(v, dp)}`;
}

function running(f: readonly number[]): number[] {
  const out: number[] = [];
  let c = 0;
  for (const x of f) out.push((c += x));
  return out;
}

/** A "nice" grid step so that max / step is about 4–8. */
function niceStep(max: number): number {
  const raw = max / 6;
  const p = 10 ** Math.floor(Math.log10(raw || 1));
  for (const m of [1, 2, 2.5, 5, 10]) if (m * p >= raw) return m * p;
  return 10 * p;
}

/* ------------------------------------------------------------------------ */
/* 1. Cumulative frequency builder                                            */
/* ------------------------------------------------------------------------ */

interface CfPreset {
  key: string;
  label: string;
  head: string;
  v: string;
  unit: string;
  b: number[];
  f: number[];
}

const CF_PRESETS: CfPreset[] = [
  { key: "time", label: "Journey times", head: "Time (t minutes)", v: "t", unit: "minutes", b: [0, 10, 20, 30, 40, 50, 60], f: [4, 11, 18, 9, 5, 3] },
  { key: "height", label: "Pupil heights", head: "Height (h cm)", v: "h", unit: "cm", b: [140, 150, 160, 170, 180, 190, 200], f: [3, 10, 22, 19, 8, 2] },
  { key: "rain", label: "Weekly rainfall", head: "Rainfall (r mm)", v: "r", unit: "mm", b: [0, 20, 40, 60, 80, 100, 120], f: [12, 20, 15, 8, 4, 1] },
];

function CumulativeBuilder() {
  const [presetKey, setPresetKey] = useState("time");
  const preset = CF_PRESETS.find((p) => p.key === presetKey) ?? CF_PRESETS[0];
  const [freqs, setFreqs] = useState<Record<string, number[]>>(() => Object.fromEntries(CF_PRESETS.map((p) => [p.key, [...p.f]])));
  const [showQ, setShowQ] = useState(true);
  const [readX, setReadX] = useState(35);

  const b = preset.b;
  const f = freqs[preset.key];
  const k = f.length;
  const W = b[1] - b[0];
  const cf = running(f);
  const N = cf[k - 1];
  const all = [0, ...cf];

  const setF = (i: number, val: number) => setFreqs((prev) => ({ ...prev, [preset.key]: prev[preset.key].map((x, j) => (j === i ? val : x)) }));
  const choosePreset = (key: string) => {
    setPresetKey(key);
    const p = CF_PRESETS.find((q) => q.key === key) ?? CF_PRESETS[0];
    setReadX(p.b[0] + Math.round((p.b[p.b.length - 1] - p.b[0]) * 0.55 / ((p.b[1] - p.b[0]) / 5)) * ((p.b[1] - p.b[0]) / 5));
  };

  /** x-value at which the polygon reaches cumulative frequency c (0 < c ≤ N). */
  const readAt = (c: number): number => {
    for (let i = 0; i < k; i++) if (c <= cf[i] && f[i] > 0) return b[i] + ((c - all[i]) / f[i]) * W;
    return b[k];
  };
  /** Cumulative frequency read off the polygon at x. */
  const cfAt = (x: number): number => {
    if (x <= b[0]) return 0;
    if (x >= b[k]) return N;
    const i = Math.min(k - 1, Math.floor((x - b[0]) / W));
    return all[i] + ((x - b[i]) / W) * f[i];
  };

  const ok = N >= 4;
  const q1 = ok ? readAt(N / 4) : 0;
  const q2 = ok ? readAt(N / 2) : 0;
  const q3 = ok ? readAt((3 * N) / 4) : 0;
  const x = Math.min(b[k], Math.max(b[0], readX));
  const below = cfAt(x);
  const nz = f.map((v, i) => (v > 0 ? i : -1)).filter((i) => i >= 0);
  const minEst = nz.length ? b[nz[0]] : b[0];
  const maxEst = nz.length ? b[nz[nz.length - 1] + 1] : b[k];

  // ---- SVG geometry ----
  const SW = 360;
  const SH = 300;
  const L = 42;
  const R = 12;
  const T = 12;
  const B0 = 212; // x-axis
  const yMax = Math.max(10, Math.ceil(N / 10) * 10);
  const yStep = niceStep(yMax);
  const px = (v: number) => L + ((v - b[0]) / (b[k] - b[0])) * (SW - L - R);
  const py = (c: number) => B0 - (c / yMax) * (B0 - T);
  const minor = W / 5;
  const xMinor: number[] = [];
  for (let v = b[0]; v <= b[k] + 1e-9; v += minor) xMinor.push(+v.toFixed(6));
  const yTicks: number[] = [];
  for (let c = 0; c <= yMax + 1e-9; c += yStep) yTicks.push(+c.toFixed(6));
  const pts = [[b[0], 0], ...cf.map((c, i) => [b[i + 1], c])];
  const BOX = 252; // box plot centre line

  const guides = ok && showQ
    ? [
        { c: N / 4, v: q1, label: "LQ", cls: "stroke-accent", txt: "fill-accent" },
        { c: N / 2, v: q2, label: "M", cls: "stroke-brand", txt: "fill-brand" },
        { c: (3 * N) / 4, v: q3, label: "UQ", cls: "stroke-accent", txt: "fill-accent" },
      ]
    : [];

  const aria = ok
    ? `Cumulative frequency graph for ${preset.head}, total ${N}. Points plotted at the upper class bounds: ${pts.map(([a, c]) => `(${a}, ${c})`).join(", ")}. Median about ${fmt(q2, 1)}, lower quartile about ${fmt(q1, 1)}, upper quartile about ${fmt(q3, 1)}. At ${fmt(x, 1)}, the cumulative frequency is about ${fmt(below, 1)}.`
    : "Cumulative frequency graph with too little data to read quartiles.";

  let caption: ReactNode;
  if (!ok) {
    caption = <>Add some data — you need a total frequency of at least 4 to talk about quartiles.</>;
  } else {
    const steepest = f.indexOf(Math.max(...f));
    caption = (
      <>
        Each point is plotted at the <strong>upper bound</strong> of its class, because only by the end of the class have all of its {N > 1 ? "values" : "value"} been
        counted. With <M>{`n = ${N}`}</M>, read across from <M>{`n/4 = ${fmt(N / 4)}`}</M>, <M>{`n/2 = ${fmt(N / 2)}`}</M> and <M>{`3n/4 = ${fmt((3 * N) / 4)}`}</M>:
        median ≈ <strong>{fmt(q2, 1)}</strong>, quartiles ≈ {fmt(q1, 1)} and {fmt(q3, 1)}, so IQR ≈ <strong>{fmt(q3 - q1, 1)}</strong> {preset.unit}. The graph is
        steepest over <M>{`${b[steepest]} < ${preset.v} <= ${b[steepest + 1]}`}</M>, the modal class — steep means lots of data packed into a short interval. At {preset.v} ={" "}
        {fmt(x, 1)} the graph is at about {fmt(below, 1)}, so roughly <strong>{fmt(N - below, 0)}</strong> values are more than {fmt(x, 1)}.
      </>
    );
  }

  return (
    <WidgetFrame
      title="Cumulative frequency builder"
      tryThis={[
        "Move data between classes so the median stays the same but the IQR gets smaller. What happens to the shape of the curve?",
        "Put every extra value into the last class. Where is the graph steepest now?",
        "Use the reading slider to find how many values are more than 45 — check it against the running totals.",
        "Why are the points plotted at 10, 20, 30… and not at the midpoints 5, 15, 25…?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <Segmented label="Data set" value={presetKey} onChange={choosePreset} options={CF_PRESETS.map((p) => ({ value: p.key, label: p.label }))} />

        <div className="grid gap-2 sm:grid-cols-2">
          {f.map((v, i) => (
            <Stepper key={`${preset.key}-${i}`} label={<M>{`${b[i]} < ${preset.v} <= ${b[i + 1]}`}</M>} value={v} min={0} max={40} onChange={(val) => setF(i, val)} />
          ))}
        </div>

        <svg viewBox={`0 0 ${SW} ${SH}`} className="h-auto w-full" role="img" aria-label={aria}>
          {xMinor.map((v, i) => (
            <line key={`gx${i}`} x1={px(v)} x2={px(v)} y1={T} y2={B0} className="stroke-line" strokeWidth={i % 5 === 0 ? 1.2 : 0.5} />
          ))}
          {yTicks.map((c) => (
            <g key={`gy${c}`}>
              <line x1={L} x2={SW - R} y1={py(c)} y2={py(c)} className="stroke-line" strokeWidth={1} />
              <text x={L - 4} y={py(c) + 3} fontSize={9} textAnchor="end" className="fill-ink-2">
                {fmt(c)}
              </text>
            </g>
          ))}
          <line x1={L} x2={SW - R} y1={B0} y2={B0} className="stroke-ink-2" strokeWidth={1.5} />
          <line x1={L} x2={L} y1={T} y2={B0} className="stroke-ink-2" strokeWidth={1.5} />
          {b.map((v) => (
            <text key={`bx${v}`} x={px(v)} y={B0 + 12} fontSize={9} textAnchor="middle" className="fill-ink-2">
              {v}
            </text>
          ))}
          <text x={(L + SW - R) / 2} y={B0 + 25} fontSize={10} textAnchor="middle" className="fill-ink-2">
            {preset.head}
          </text>
          <text x={10} y={(T + B0) / 2} fontSize={10} textAnchor="middle" className="fill-ink-2" transform={`rotate(-90 10 ${(T + B0) / 2})`}>
            Cumulative frequency
          </text>

          {/* reading line */}
          {ok ? (
            <g>
              <line x1={px(x)} x2={px(x)} y1={B0} y2={py(below)} className="stroke-good" strokeWidth={1.5} strokeDasharray="4 3" />
              <line x1={L} x2={px(x)} y1={py(below)} y2={py(below)} className="stroke-good" strokeWidth={1.5} strokeDasharray="4 3" />
            </g>
          ) : null}

          {/* quartile guides */}
          {guides.map((g) => (
            <g key={g.label}>
              <line x1={L} x2={px(g.v)} y1={py(g.c)} y2={py(g.c)} className={g.cls} strokeWidth={1.3} strokeDasharray="2 2" />
              <line x1={px(g.v)} x2={px(g.v)} y1={py(g.c)} y2={B0} className={g.cls} strokeWidth={1.3} strokeDasharray="2 2" />
              <text x={px(g.v) + 3} y={B0 - 4} fontSize={9} className={g.txt}>
                {g.label}
              </text>
            </g>
          ))}

          <polyline points={pts.map(([a, c]) => `${px(a).toFixed(1)},${py(c).toFixed(1)}`).join(" ")} fill="none" className="stroke-brand" strokeWidth={2.2} />
          {pts.map(([a, c], i) => (
            <circle key={`p${i}`} cx={px(a)} cy={py(c)} r={3.2} className="fill-brand" />
          ))}

          {/* box plot */}
          {ok ? (
            <g>
              <text x={L - 4} y={BOX + 3} fontSize={9} textAnchor="end" className="fill-ink-2">
                Box
              </text>
              <line x1={px(minEst)} x2={px(q1)} y1={BOX} y2={BOX} className="stroke-ink" strokeWidth={1.5} />
              <line x1={px(q3)} x2={px(maxEst)} y1={BOX} y2={BOX} className="stroke-ink" strokeWidth={1.5} />
              <line x1={px(minEst)} x2={px(minEst)} y1={BOX - 6} y2={BOX + 6} className="stroke-ink" strokeWidth={1.5} />
              <line x1={px(maxEst)} x2={px(maxEst)} y1={BOX - 6} y2={BOX + 6} className="stroke-ink" strokeWidth={1.5} />
              <rect x={px(q1)} y={BOX - 11} width={Math.max(1, px(q3) - px(q1))} height={22} className="fill-brand-soft stroke-ink" strokeWidth={1.5} />
              <line x1={px(q2)} x2={px(q2)} y1={BOX - 11} y2={BOX + 11} className="stroke-brand" strokeWidth={2.5} />
              <text x={(L + SW - R) / 2} y={SH - 6} fontSize={9} textAnchor="middle" className="fill-ink-2">
                Box plot from the graph (ends = lowest and highest possible values)
              </text>
            </g>
          ) : null}
        </svg>

        <div className="flex flex-wrap items-center gap-3">
          <button type="button" className="kbd" aria-pressed={showQ} onClick={() => setShowQ((s) => !s)}>
            {showQ ? "Hide" : "Show"} median & quartile lines
          </button>
        </div>
        <Slider label={<>Read the graph at {preset.v} =</>} value={x} min={b[0]} max={b[k]} step={minor} onChange={setReadX} format={(v) => `${fmt(v, 1)} ${preset.unit}`} />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Total n" value={N} tone="ink" />
          <Readout label="Median" value={ok ? `≈ ${fmt(q2, 1)}` : "—"} />
          <Readout label="LQ, UQ" value={ok ? `${fmt(q1, 1)}, ${fmt(q3, 1)}` : "—"} tone="ink" />
          <Readout label="IQR" value={ok ? `≈ ${fmt(q3 - q1, 1)}` : "—"} tone="good" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[300px] text-sm tabular-nums">
            <caption className="mb-1 text-left text-xs font-bold uppercase tracking-wide text-ink-2">Frequency → cumulative frequency → point to plot</caption>
            <thead>
              <tr className="text-left text-ink-2">
                <th className="py-1 pr-2 font-semibold">Class</th>
                <th className="py-1 pr-2 font-semibold">Frequency</th>
                <th className="py-1 pr-2 font-semibold">Cumulative</th>
                <th className="py-1 font-semibold">Plot</th>
              </tr>
            </thead>
            <tbody>
              {f.map((v, i) => (
                <tr key={i} className="border-t border-line">
                  <td className="py-1 pr-2">
                    <M>{`${b[i]} < ${preset.v} <= ${b[i + 1]}`}</M>
                  </td>
                  <td className="py-1 pr-2">{v}</td>
                  <td className="py-1 pr-2 font-bold">{cf[i]}</td>
                  <td className="py-1 text-brand">
                    ({b[i + 1]}, {cf[i]})
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Histogram studio                                                        */
/* ------------------------------------------------------------------------ */

interface HPreset {
  key: string;
  label: string;
  head: string;
  v: string;
  unit: string;
  b: number[];
  f: number[];
}

const H_PRESETS: HPreset[] = [
  { key: "time", label: "Journey times", head: "Time (t minutes)", v: "t", unit: "minutes", b: [0, 10, 15, 20, 30, 50, 80], f: [8, 9, 12, 15, 14, 6] },
  { key: "age", label: "Yoga class ages", head: "Age (a years)", v: "a", unit: "years", b: [15, 20, 30, 40, 50, 70, 90], f: [6, 14, 18, 12, 16, 4] },
];

type HMode = "density" | "frequency";

function HistogramStudio() {
  const [presetKey, setPresetKey] = useState("time");
  const preset = H_PRESETS.find((p) => p.key === presetKey) ?? H_PRESETS[0];
  const [freqs, setFreqs] = useState<Record<string, number[]>>(() => Object.fromEntries(H_PRESETS.map((p) => [p.key, [...p.f]])));
  const [mode, setMode] = useState<HMode>("density");
  const [ranges, setRanges] = useState<Record<string, [number, number]>>({ time: [12, 40], age: [25, 60] });

  const b = preset.b;
  const f = freqs[preset.key];
  const k = f.length;
  const widths = f.map((_, i) => b[i + 1] - b[i]);
  const fd = f.map((v, i) => v / widths[i]);
  const N = f.reduce((s, v) => s + v, 0);
  const [ra, rb] = ranges[preset.key];
  const lo = Math.min(ra, rb);
  const hi = Math.max(ra, rb);

  const setF = (i: number, val: number) => setFreqs((prev) => ({ ...prev, [preset.key]: prev[preset.key].map((x, j) => (j === i ? val : x)) }));
  const setA = (v: number) => setRanges((prev) => ({ ...prev, [preset.key]: [v, prev[preset.key][1]] }));
  const setB = (v: number) => setRanges((prev) => ({ ...prev, [preset.key]: [prev[preset.key][0], v] }));

  // Estimate of how many lie between lo and hi (data spread evenly within each class).
  const parts = f
    .map((v, i) => {
      const ov = Math.max(0, Math.min(hi, b[i + 1]) - Math.max(lo, b[i]));
      return { i, ov, est: (v * ov) / widths[i] };
    })
    .filter((p) => p.ov > 0);
  const estimate = parts.reduce((s, p) => s + p.est, 0);

  const heights = mode === "density" ? fd : f;
  const yMaxRaw = Math.max(0.1, ...heights) * 1.15;
  const yStep = niceStep(yMaxRaw);
  const yMax = Math.ceil(yMaxRaw / yStep) * yStep;

  const SW = 360;
  const SH = 240;
  const L = 40;
  const R = 12;
  const T = 12;
  const B0 = 200;
  const px = (v: number) => L + ((v - b[0]) / (b[k] - b[0])) * (SW - L - R);
  const py = (h: number) => B0 - (h / yMax) * (B0 - T);
  const yTicks: number[] = [];
  for (let h = 0; h <= yMax + 1e-9; h += yStep) yTicks.push(+h.toFixed(6));

  const maxF = Math.max(...f);
  const maxFD = Math.max(...fd);
  const modalF = f.indexOf(maxF);
  const modalD = fd.indexOf(maxFD);
  const widest = widths.indexOf(Math.max(...widths));

  const aria = `${mode === "density" ? "Histogram" : "Misleading bar chart"} of ${preset.head}. ${f
    .map((v, i) => `${b[i]} to ${b[i + 1]}: frequency ${v}, frequency density ${fmt(fd[i], 2)}`)
    .join("; ")}. Shaded from ${lo} to ${hi}: estimated ${fmt(estimate, 1)} values.`;

  const cls = (i: number) => `${b[i]} < ${preset.v} <= ${b[i + 1]}`;

  const caption: ReactNode =
    mode === "density" ? (
      <>
        Each bar&apos;s <strong>height</strong> is frequency density = frequency ÷ class width, so its <strong>area</strong> is the frequency. The
        widest class, <M>{cls(widest)}</M>, has {f[widest]} values spread over {widths[widest]} {preset.unit}, so its bar is only {fmt(fd[widest], 2)} high.
        {modalF !== modalD ? (
          <>
            {" "}Notice the most values are in <M>{cls(modalF)}</M>, but the tallest bar is <M>{cls(modalD)}</M> — data there are packed most densely.
          </>
        ) : (
          <> The tallest bar, <M>{cls(modalD)}</M>, is where the data are most densely packed.</>
        )}{" "}
        Between {lo} and {hi} there are about <strong>{fmt(estimate, 1)}</strong> values — area of the shaded strips, assuming the data are spread evenly through
        each class.
      </>
    ) : (
      <>
        This is the <strong>wrong</strong> way: bar height = frequency. Wide classes collect more values just because they are wide, so{" "}
        <M>{cls(modalF)}</M> looks the most important{widths[modalF] > Math.min(...widths) ? `, even though it is ${widths[modalF]} ${preset.unit} wide` : ""}. The
        total area no longer matches the data. Switch back to frequency density to make area honest.
      </>
    );

  return (
    <WidgetFrame
      title="Histogram studio"
      tryThis={[
        "Give two classes of different widths the same frequency. Which bar is taller in the histogram, and why?",
        "Make every bar the same height. What does that tell you about how the data are spread?",
        "Estimate how many values lie between 12 and 40 by hand, then check with the shading.",
        "Switch to \"height = frequency\". Which class looks biggest now — and is it really?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          <Segmented label="Data set" value={presetKey} onChange={setPresetKey} options={H_PRESETS.map((p) => ({ value: p.key, label: p.label }))} />
          <Segmented<HMode>
            label="Bar height"
            value={mode}
            onChange={setMode}
            options={[
              { value: "density", label: "Height = frequency density" },
              { value: "frequency", label: "Height = frequency (wrong)" },
            ]}
          />
        </div>

        <div className="grid gap-2 sm:grid-cols-2">
          {f.map((v, i) => (
            <Stepper key={`${preset.key}-${i}`} label={<M>{cls(i)}</M>} value={v} min={0} max={40} onChange={(val) => setF(i, val)} />
          ))}
        </div>

        <svg viewBox={`0 0 ${SW} ${SH}`} className="h-auto w-full" role="img" aria-label={aria}>
          {yTicks.map((h) => (
            <g key={`gy${h}`}>
              <line x1={L} x2={SW - R} y1={py(h)} y2={py(h)} className="stroke-line" strokeWidth={1} />
              <text x={L - 4} y={py(h) + 3} fontSize={9} textAnchor="end" className="fill-ink-2">
                {fmt(h, 2)}
              </text>
            </g>
          ))}
          {/* shaded estimate strips (density mode only: area = frequency) */}
          {mode === "density"
            ? parts.map((p) => (
                <rect
                  key={`s${p.i}`}
                  x={px(Math.max(lo, b[p.i]))}
                  y={py(fd[p.i])}
                  width={Math.max(0, px(Math.min(hi, b[p.i + 1])) - px(Math.max(lo, b[p.i])))}
                  height={Math.max(0, B0 - py(fd[p.i]))}
                  className="fill-good"
                  opacity={0.35}
                />
              ))
            : null}
          {f.map((v, i) => (
            <g key={`bar${i}`}>
              <rect
                x={px(b[i])}
                y={py(heights[i])}
                width={px(b[i + 1]) - px(b[i])}
                height={Math.max(0, B0 - py(heights[i]))}
                className={mode === "density" ? "fill-brand-soft stroke-brand" : "fill-bad-soft stroke-bad"}
                fillOpacity={mode === "density" ? 0.7 : 1}
                strokeWidth={1.5}
              />
              {px(b[i + 1]) - px(b[i]) >= 22 && v > 0 ? (
                <text x={(px(b[i]) + px(b[i + 1])) / 2} y={Math.min(B0 - 4, py(heights[i]) + 12)} fontSize={9} textAnchor="middle" className="fill-ink">
                  {mode === "density" ? `f=${v}` : v}
                </text>
              ) : null}
            </g>
          ))}
          {mode === "density" ? (
            <g>
              <line x1={px(lo)} x2={px(lo)} y1={T} y2={B0} className="stroke-good" strokeWidth={1.8} />
              <line x1={px(hi)} x2={px(hi)} y1={T} y2={B0} className="stroke-good" strokeWidth={1.8} />
            </g>
          ) : null}
          <line x1={L} x2={SW - R} y1={B0} y2={B0} className="stroke-ink-2" strokeWidth={1.5} />
          <line x1={L} x2={L} y1={T} y2={B0} className="stroke-ink-2" strokeWidth={1.5} />
          {b.map((v) => (
            <text key={`bx${v}`} x={px(v)} y={B0 + 12} fontSize={9} textAnchor="middle" className="fill-ink-2">
              {v}
            </text>
          ))}
          <text x={(L + SW - R) / 2} y={B0 + 26} fontSize={10} textAnchor="middle" className="fill-ink-2">
            {preset.head}
          </text>
          <text x={10} y={(T + B0) / 2} fontSize={10} textAnchor="middle" className="fill-ink-2" transform={`rotate(-90 10 ${(T + B0) / 2})`}>
            {mode === "density" ? "Frequency density" : "Frequency"}
          </text>
        </svg>

        {mode === "density" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <Slider label="Estimate from" value={ra} min={b[0]} max={b[k]} onChange={setA} format={(v) => `${v} ${preset.unit}`} />
            <Slider label="to" value={rb} min={b[0]} max={b[k]} onChange={setB} format={(v) => `${v} ${preset.unit}`} />
          </div>
        ) : null}

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Total frequency" value={N} tone="ink" />
          <Readout label="Most values in" value={<M>{cls(modalF)}</M>} tone="ink" />
          <Readout label="Tallest histogram bar" value={<M>{cls(modalD)}</M>} />
          <Readout label={`Between ${lo} and ${hi}`} value={mode === "density" ? `≈ ${fmt(estimate, 1)}` : "—"} tone="good" />
        </div>

        <div className="overflow-x-auto">
          <table className="w-full min-w-[300px] text-sm tabular-nums">
            <caption className="mb-1 text-left text-xs font-bold uppercase tracking-wide text-ink-2">Frequency density = frequency ÷ class width</caption>
            <thead>
              <tr className="text-left text-ink-2">
                <th className="py-1 pr-2 font-semibold">Class</th>
                <th className="py-1 pr-2 font-semibold">Width</th>
                <th className="py-1 pr-2 font-semibold">Frequency</th>
                <th className="py-1 font-semibold">Frequency density</th>
              </tr>
            </thead>
            <tbody>
              {f.map((v, i) => (
                <tr key={i} className="border-t border-line">
                  <td className="py-1 pr-2">
                    <M>{cls(i)}</M>
                  </td>
                  <td className="py-1 pr-2">{widths[i]}</td>
                  <td className="py-1 pr-2">{v}</td>
                  <td className="py-1 font-bold">
                    {v} ÷ {widths[i]} {eq(fd[i], 2)}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {mode === "density" && parts.length ? (
          <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed">
            <p className="font-bold text-ink">
              Estimate between {lo} and {hi}
            </p>
            <ul className="mt-1 space-y-0.5 tabular-nums">
              {parts.map((p) => (
                <li key={p.i}>
                  <M>{cls(p.i)}</M>: {p.ov === widths[p.i] ? `whole class = ${f[p.i]}` : `${fmt(fd[p.i], 3)} × ${p.ov} ${eq(p.est, 1)}`}
                </li>
              ))}
              <li className="font-bold text-good">Total {eq(estimate, 1)}</li>
            </ul>
          </div>
        ) : null}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "cumulative-frequency-builder",
    title: "Cumulative frequency builder",
    blurb: "Change a grouped frequency table and watch the cumulative frequency graph, median, quartiles, IQR and box plot respond.",
    Component: CumulativeBuilder,
  },
  {
    id: "histogram-studio",
    title: "Histogram studio",
    blurb: "Unequal class widths: see why bar area — not height — shows frequency, and estimate how many lie between any two values.",
    Component: HistogramStudio,
  },
];
