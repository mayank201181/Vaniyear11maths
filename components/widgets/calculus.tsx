"use client";
// Interactive explorables for "calculus" (Differentiation).
//  1. Chord → tangent — pick a curve and a point P, then shrink h. The chord PQ
//     swings into the tangent and its gradient (computed exactly from the
//     algebraic formula) homes in on dy/dx at P.
//  2. Curve and gradient graph — build a cubic with sliders; the gradient
//     function dy/dx is drawn underneath on the same x-scale. A tracer shows the
//     tangent and its gradient; turning points are found from dy/dx = 0 and
//     classified with d²y/dx². A "motion" view relabels it as s, v (kinematics).
import { useId, useState } from "react";
import { WidgetFrame, Stepper, Slider, Segmented, Readout, M, makePlane, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* Shared helpers                                                            */
/* ------------------------------------------------------------------------ */

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

/** Number for maths markup (ASCII minus) without float noise. */
const mn = (v: number) => String(+v.toFixed(6) || 0);
/** Number for plain text (real minus sign). */
const pn = (v: number) => mn(v).replace("-", "−");
/** Rounded for display (plain text). */
const rd = (v: number, dp = 2) => pn(+v.toFixed(dp));

/** Exact n/d as markup. */
function fr(n: number, d: number): string {
  if (d < 0) {
    n = -n;
    d = -d;
  }
  const g = gcd(n, d);
  n /= g;
  d /= g;
  if (d === 1) return mn(n);
  return n < 0 ? `-${-n}/${d}` : `${n}/${d}`;
}

/** Polynomial from [coef, var] pairs as markup: "x^3 - 3x^2 + 5". */
function polyStr(terms: Array<[number, string]>): string {
  let out = "";
  for (const [c, v] of terms) {
    if (c === 0) continue;
    const abs = Math.abs(c);
    const t = v === "" ? mn(abs) : abs === 1 ? v : `${mn(abs)}${v}`;
    out += out ? (c < 0 ? ` - ${t}` : ` + ${t}`) : c < 0 ? `-${t}` : t;
  }
  return out || "0";
}

type Plane = ReturnType<typeof makePlane>;

/** SVG path for y = f(x) across the plane (off-screen parts are clipped by the caller). */
function curvePath(f: (x: number) => number, plane: Plane): string {
  const { xMin, xMax, yMin, yMax, px, py } = plane;
  const span = yMax - yMin;
  let d = "";
  let pen = false;
  for (let i = 0; i <= 400; i++) {
    const x = xMin + ((xMax - xMin) * i) / 400;
    const y = f(x);
    if (!Number.isFinite(y) || y > yMax + span || y < yMin - span) {
      pen = false;
      continue;
    }
    d += `${pen ? "L" : "M"}${px(x).toFixed(1)},${py(y).toFixed(1)}`;
    pen = true;
  }
  return d;
}

/** Grid with separate x and y steps (the kit's PlaneGrid uses one step for both). */
function Grid({ plane, xStep, yStep, xLabel, yLabel }: { plane: Plane; xStep: number; yStep: number; xLabel: string; yLabel: string }) {
  const { px, py, xMin, xMax, yMin, yMax } = plane;
  const xs: number[] = [];
  const ys: number[] = [];
  for (let x = Math.ceil(xMin / xStep) * xStep; x <= xMax + 1e-9; x += xStep) xs.push(+x.toFixed(6));
  for (let y = Math.ceil(yMin / yStep) * yStep; y <= yMax + 1e-9; y += yStep) ys.push(+y.toFixed(6));
  return (
    <g>
      {xs.map((x) => (
        <line key={`gx${x}`} x1={px(x)} x2={px(x)} y1={py(yMin)} y2={py(yMax)} className="stroke-line" strokeWidth={1} />
      ))}
      {ys.map((y) => (
        <line key={`gy${y}`} y1={py(y)} y2={py(y)} x1={px(xMin)} x2={px(xMax)} className="stroke-line" strokeWidth={1} />
      ))}
      <line x1={px(0)} x2={px(0)} y1={py(yMin)} y2={py(yMax)} className="stroke-ink-2" strokeWidth={1.5} />
      <line y1={py(0)} y2={py(0)} x1={px(xMin)} x2={px(xMax)} className="stroke-ink-2" strokeWidth={1.5} />
      {xs.filter((x) => x !== 0).map((x) => (
        <text key={`lx${x}`} x={px(x)} y={py(0) + 13} fontSize={10} textAnchor="middle" className="fill-ink-2">{pn(x)}</text>
      ))}
      {ys.filter((y) => y !== 0).map((y) => (
        <text key={`ly${y}`} x={px(0) - 4} y={py(y) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">{pn(y)}</text>
      ))}
      <text x={px(xMax) - 2} y={py(0) - 5} fontSize={11} textAnchor="end" className="fill-ink-2" fontStyle="italic">{xLabel}</text>
      <text x={px(0) + 5} y={py(yMax) + 11} fontSize={11} className="fill-ink-2" fontStyle="italic">{yLabel}</text>
    </g>
  );
}

/* ------------------------------------------------------------------------ */
/* 1. Chord → tangent                                                         */
/* ------------------------------------------------------------------------ */

type CurveKey = "sq" | "cubic" | "hump";

const CURVES: Record<
  CurveKey,
  {
    label: string;
    eq: string;
    f: (x: number) => number;
    df: (x: number) => number;
    dfStr: string;
    /** Exact chord gradient between x = a and x = a + h, simplified algebraically. */
    chord: (a: number, h: number) => number;
    /** The simplified chord-gradient formula with a substituted, as markup. */
    chordStr: (a: number) => string;
  }
> = {
  sq: {
    label: "x²",
    eq: "x^2",
    f: (x) => x * x,
    df: (x) => 2 * x,
    dfStr: "2x",
    chord: (a, h) => 2 * a + h,
    chordStr: (a) => `((${mn(a)} + h)^2 - ${a < 0 ? `(${mn(a)})` : mn(a)}^2)/h = ${polyStr([[2 * a, ""]]) === "0" ? "" : `${mn(2 * a)} + `}h`,
  },
  cubic: {
    label: "x³ − 3x",
    eq: "x^3 - 3x",
    f: (x) => x * x * x - 3 * x,
    df: (x) => 3 * x * x - 3,
    dfStr: "3x^2 - 3",
    chord: (a, h) => 3 * a * a + 3 * a * h + h * h - 3,
    chordStr: (a) => `${polyStr([[1, "h^2"], [3 * a, "h"], [3 * a * a - 3, ""]])}`,
  },
  hump: {
    label: "6x − x²",
    eq: "6x - x^2",
    f: (x) => 6 * x - x * x,
    df: (x) => 6 - 2 * x,
    dfStr: "6 - 2x",
    chord: (a, h) => 6 - 2 * a - h,
    chordStr: (a) => polyStr([[6 - 2 * a, ""], [-1, "h"]]),
  },
};

const HS = ["2", "1", "0.5", "0.1", "0.01"] as const;
type HKey = (typeof HS)[number];

function ChordToTangent() {
  const [curve, setCurve] = useState<CurveKey>("sq");
  const [a, setA] = useState(1);
  const [hKey, setHKey] = useState<HKey>("1");
  const [showTangent, setShowTangent] = useState(true);
  const clipId = useId().replace(/:/g, "");

  const C = CURVES[curve];
  const h = Number(hKey);
  const W = 340;
  const H = 300;
  const yRange = curve === "cubic" ? { yMin: -6, yMax: 10 } : curve === "hump" ? { yMin: -4, yMax: 12 } : { yMin: -2, yMax: 14 };
  const xRange = curve === "hump" ? { xMin: -1, xMax: 7 } : { xMin: -4, xMax: 4 };
  const plane = makePlane({ width: W, height: H, ...xRange, ...yRange, pad: 20 });
  const { px, py } = plane;

  const P: [number, number] = [a, C.f(a)];
  const Q: [number, number] = [a + h, C.f(a + h)];
  const mChord = C.chord(a, h);
  const mTan = C.df(a);
  const xL = plane.xMin;
  const xR = plane.xMax;
  const lineAt = (m: number, x: number) => P[1] + m * (x - P[0]);

  const aMin = curve === "hump" ? 0 : -2.5;
  const aMax = curve === "hump" ? 5 : 2.5;
  const setCurveSafe = (k: CurveKey) => {
    setCurve(k);
    if (k === "hump") setA((v) => Math.min(5, Math.max(0, v)));
    else setA((v) => Math.min(2.5, Math.max(-2.5, v)));
  };

  const aria = `Graph of y = ${C.label}. P is at (${rd(P[0])}, ${rd(P[1])}) and Q is at (${rd(Q[0], 3)}, ${rd(Q[1], 3)}). Chord PQ has gradient ${rd(mChord, 4)}; the tangent at P has gradient ${pn(mTan)}.`;

  return (
    <WidgetFrame
      title="From chord to tangent"
      tryThis={[
        "On {{y = x^2}} put P at x = 1.5 and shrink h. Which number are the chord gradients closing in on? Does {{dy/dx = 2x}} agree?",
        "On {{y = x^3 - 3x}}, find the two places where the tangent is horizontal. What is {{dy/dx}} there?",
        "On {{y = 6x - x^2}}, the chord gradient is {{6 - 2a - h}}. Predict the tangent gradient at x = 4 before you move the slider.",
        "Can you make the chord gradient bigger than the tangent gradient? Smaller? What decides which?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            The chord from P (x = {pn(a)}) to Q (x = {pn(a)} + h) has gradient{" "}
            <M>{`(change in y)/(change in x) = ${C.chordStr(a)}`}</M>. With h = {hKey} that is <strong>{rd(mChord, 4)}</strong>.
          </p>
          <p>
            As h shrinks, Q slides down the curve towards P and every term containing h vanishes. What is left, <strong>{pn(mTan)}</strong>, is the
            gradient of the tangent at P — exactly what <M>{`dy/dx = ${C.dfStr}`}</M> gives at x = {pn(a)}. That limit is what differentiation means.
          </p>
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <div>
          <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto h-auto w-full max-w-sm" role="img" aria-label={aria}>
            <defs>
              <clipPath id={clipId}>
                <rect x={px(xL)} y={py(plane.yMax)} width={px(xR) - px(xL)} height={py(plane.yMin) - py(plane.yMax)} />
              </clipPath>
            </defs>
            <rect x={0} y={0} width={W} height={H} className="fill-surface" />
            <Grid plane={plane} xStep={1} yStep={2} xLabel="x" yLabel="y" />
            <g clipPath={`url(#${clipId})`}>
              <path d={curvePath(C.f, plane)} fill="none" className="stroke-brand" strokeWidth={3} strokeLinecap="round" />
              {showTangent ? (
                <line x1={px(xL)} y1={py(lineAt(mTan, xL))} x2={px(xR)} y2={py(lineAt(mTan, xR))} className="stroke-good" strokeWidth={2} strokeDasharray="7 5" />
              ) : null}
              <line x1={px(xL)} y1={py(lineAt(mChord, xL))} x2={px(xR)} y2={py(lineAt(mChord, xR))} className="stroke-accent" strokeWidth={2.5} />
              <circle cx={px(Q[0])} cy={py(Q[1])} r={5.5} className="fill-accent stroke-surface" strokeWidth={2} />
              <circle cx={px(P[0])} cy={py(P[1])} r={6} className="fill-ink stroke-surface" strokeWidth={2} />
              <text x={px(P[0]) - 9} y={py(P[1]) - 8} fontSize={13} fontWeight={700} textAnchor="end" className="fill-ink">P</text>
              {h >= 0.5 ? <text x={px(Q[0]) + 8} y={py(Q[1]) + 14} fontSize={13} fontWeight={700} className="fill-accent">Q</text> : null}
            </g>
          </svg>
          <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-ink-2">
            <span className="inline-flex items-center gap-1"><span className="inline-block h-1 w-5 rounded bg-accent" aria-hidden /> chord PQ</span>
            {showTangent ? <span className="inline-flex items-center gap-1"><span className="inline-block h-1 w-5 rounded bg-good" aria-hidden /> tangent at P</span> : null}
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-line bg-surface p-3 space-y-3">
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Curve</div>
              <Segmented label="Curve" value={curve} onChange={setCurveSafe} options={(Object.keys(CURVES) as CurveKey[]).map((k) => ({ value: k, label: `y = ${CURVES[k].label}` }))} />
            </div>
            <Slider label="P is at x =" value={a} min={aMin} max={aMax} step={0.5} onChange={setA} format={pn} />
            <div>
              <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Gap h between P and Q</div>
              <Segmented label="Gap h" value={hKey} onChange={setHKey} options={HS.map((v) => ({ value: v, label: `h = ${v}` }))} />
            </div>
            <label className="flex min-h-[40px] cursor-pointer items-center gap-2 text-sm font-bold text-good">
              <input type="checkbox" checked={showTangent} onChange={(e) => setShowTangent(e.target.checked)} className="h-5 w-5" />
              Show the tangent at P
            </label>
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Readout label="Chord gradient" tone="ink" value={rd(mChord, 4)} />
            <Readout label="Tangent gradient" tone="good" value={pn(mTan)} />
          </div>
        </div>
      </div>

      <div className="mt-4 overflow-x-auto">
        <table className="w-full min-w-[280px] text-center text-sm tabular-nums">
          <caption className="mb-1 text-left text-xs font-bold uppercase tracking-wide text-ink-2">Chord gradients from P (x = {pn(a)})</caption>
          <thead>
            <tr className="border-b border-line text-ink-2">
              <th className="py-1 font-bold">h</th>
              {HS.map((v) => (
                <th key={v} className={`py-1 font-bold ${v === hKey ? "text-accent" : ""}`}>{v}</th>
              ))}
              <th className="py-1 font-bold text-good">→ 0</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th className="py-1 font-bold text-ink-2">gradient</th>
              {HS.map((v) => (
                <td key={v} className={`py-1 ${v === hKey ? "font-extrabold text-accent" : "text-ink"}`}>{rd(C.chord(a, Number(v)), 4)}</td>
              ))}
              <td className="py-1 font-extrabold text-good">{pn(mTan)}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Curve and gradient graph                                                */
/* ------------------------------------------------------------------------ */

type View = "curve" | "motion";

interface Stationary {
  x: number;
  exact: string | null;
  kind: "maximum" | "minimum" | "inflection";
}

function stationaryPoints(a: number, b: number, c: number): Stationary[] {
  // dy/dx = 3a x² + 2b x + c
  if (a === 0) {
    if (b === 0) return [];
    const x = -c / (2 * b);
    return [{ x, exact: fr(-c, 2 * b), kind: b > 0 ? "minimum" : "maximum" }];
  }
  const disc = b * b - 3 * a * c; // quarter of the discriminant of 3ax² + 2bx + c
  if (disc < 0) return [];
  if (disc === 0) return [{ x: -b / (3 * a), exact: fr(-b, 3 * a), kind: "inflection" }];
  const s = Math.sqrt(disc);
  const perfect = Number.isInteger(s);
  const xs = [(-b - s) / (3 * a), (-b + s) / (3 * a)].sort((p, q) => p - q);
  return xs.map((x) => {
    const second = 6 * a * x + 2 * b;
    let exact: string | null = null;
    if (perfect) {
      const n = Math.round(x * 3 * a);
      exact = fr(n, 3 * a);
    }
    return { x, exact, kind: second < 0 ? "maximum" : "minimum" };
  });
}

function CurveAndGradient() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-3);
  const [c, setC] = useState(-9);
  const [d, setD] = useState(5);
  const [x0, setX0] = useState(1);
  const [view, setView] = useState<View>("curve");
  const clipTop = useId().replace(/:/g, "");
  const clipBot = useId().replace(/:/g, "");

  const motion = view === "motion";
  const X = motion ? "t" : "x";
  const Y = motion ? "s" : "y";
  const f = (x: number) => a * x ** 3 + b * x * x + c * x + d;
  const df = (x: number) => 3 * a * x * x + 2 * b * x + c;
  const d2 = (x: number) => 6 * a * x + 2 * b;

  const eq = polyStr([[a, `${X}^3`], [b, `${X}^2`], [c, X], [d, ""]]);
  const deq = polyStr([[3 * a, `${X}^2`], [2 * b, X], [c, ""]]);
  const d2eq = polyStr([[6 * a, X], [2 * b, ""]]);
  const dName = motion ? "v" : "dy/dx";
  const d2Name = motion ? "a" : "(d^2y)/(dx^2)";

  const W = 340;
  const xMin = motion ? 0 : -5;
  const xMax = motion ? 8 : 5;
  const top = makePlane({ width: W, height: 230, xMin, xMax, yMin: -40, yMax: 40, pad: 20 });
  const bot = makePlane({ width: W, height: 170, xMin, xMax, yMin: -40, yMax: 40, pad: 20 });

  const sp = stationaryPoints(a, b, c).filter((s) => s.x >= xMin - 1e-9 && s.x <= xMax + 1e-9);
  const m = df(x0);
  const y0 = f(x0);
  const tx = (x: number) => y0 + m * (x - x0);
  const tone = m > 0 ? "good" : m < 0 ? "bad" : "brand";
  const strokeTone = m > 0 ? "stroke-good" : m < 0 ? "stroke-bad" : "stroke-brand";

  const changeX = (v: number) => setX0(Math.min(xMax, Math.max(xMin, v)));
  const setViewSafe = (v: View) => {
    setView(v);
    if (v === "motion") {
      setA(2);
      setB(-15);
      setC(36);
      setD(0);
      setX0(1);
    } else {
      setA(1);
      setB(-3);
      setC(-9);
      setD(5);
      setX0(1);
    }
  };

  const spText = (s: Stationary) => (s.exact ?? `≈ ${mn(+s.x.toFixed(2))}`);
  const aria = `Graph of ${Y} = ${eq} with its gradient function ${dName} = ${deq} drawn underneath. ${
    sp.length ? `Stationary points at ${X} = ${sp.map((s) => rd(s.x)).join(" and ")}.` : "No stationary points in view."
  } Tracer at ${X} = ${pn(x0)} with gradient ${rd(m)}.`;

  const motionNote = (s: Stationary) => {
    if (s.kind === "inflection") return "v = 0 but does not change sign: it pauses, then carries on the same way";
    return s.kind === "maximum" ? "at rest, then turns round and heads back (s is a maximum)" : "at rest, then turns round and moves forward (s is a minimum)";
  };

  return (
    <WidgetFrame
      title="A curve and its gradient graph"
      tryThis={[
        "Move the tracer to each turning point. What is the gradient graph doing directly underneath?",
        "Make a cubic with no turning points at all. What does that mean for the quadratic {{dy/dx}} — and its discriminant?",
        "Set a = 0. The curve becomes a quadratic: what shape is its gradient graph now?",
        "In motion view, when is the particle at rest? Check the times by solving {{v = 0}}, then say which way it moves in between.",
      ]}
      caption={
        <div className="space-y-2">
          {motion ? (
            <p>
              Displacement <M>{`s = ${eq}`}</M>, so velocity <M>{`v = (ds)/(dt) = ${deq}`}</M> and acceleration <M>{`a = (dv)/(dt) = ${d2eq}`}</M>. At
              t = {pn(x0)}: v = {rd(m)} m/s ({m > 0 ? "moving in the positive direction" : m < 0 ? "moving back towards O" : "momentarily at rest"}), a = {rd(d2(x0))} m/s².
            </p>
          ) : (
            <p>
              Differentiating <M>{`y = ${eq}`}</M> gives <M>{`dy/dx = ${deq}`}</M>. At x = {pn(x0)} the tangent gradient is {rd(m)}:{" "}
              {m > 0 ? "the curve is going up, so the gradient graph is above the axis." : m < 0 ? "the curve is going down, so the gradient graph is below the axis." : "the tangent is flat, so the gradient graph crosses or touches the axis here."}
            </p>
          )}
          <p>
            {sp.length === 0
              ? `${dName === "v" ? "v" : "dy/dx"} is never 0 in this window, so there are no ${motion ? "times at rest" : "turning points"} here.`
              : sp.map((s, i) => (
                  <span key={i} className="block">
                    <M>{`${motion ? "v" : "dy/dx"} = 0`}</M> at <M>{`${X} = ${spText(s)}`}</M>:{" "}
                    {motion ? motionNote(s) : s.kind === "inflection" ? "the gradient is zero but does not change sign — a stationary point of inflection, not a turning point." : <>
                      <M>{`${d2Name}`}</M> = {rd(d2(s.x))} is {s.kind === "maximum" ? "negative, so a maximum" : "positive, so a minimum"}.
                    </>}
                  </span>
                ))}
          </p>
        </div>
      }
    >
      <div className="mb-3">
        <Segmented
          label="View"
          value={view}
          onChange={setViewSafe}
          options={[
            { value: "curve", label: "Curve y and dy/dx" },
            { value: "motion", label: "Motion s and v" },
          ]}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <div>
          <svg viewBox={`0 0 ${W} 230`} className="mx-auto h-auto w-full max-w-sm" role="img" aria-label={aria}>
            <defs>
              <clipPath id={clipTop}>
                <rect x={top.px(xMin)} y={top.py(40)} width={top.px(xMax) - top.px(xMin)} height={top.py(-40) - top.py(40)} />
              </clipPath>
            </defs>
            <rect x={0} y={0} width={W} height={230} className="fill-surface" />
            <Grid plane={top} xStep={1} yStep={10} xLabel={X} yLabel={Y} />
            <g clipPath={`url(#${clipTop})`}>
              <path d={curvePath(f, top)} fill="none" className="stroke-brand" strokeWidth={3} strokeLinecap="round" />
              <line x1={top.px(xMin)} y1={top.py(tx(xMin))} x2={top.px(xMax)} y2={top.py(tx(xMax))} className={strokeTone} strokeWidth={2} strokeDasharray="7 5" />
              {sp.map((s, i) => (
                <circle key={i} cx={top.px(s.x)} cy={top.py(f(s.x))} r={5.5} className={s.kind === "inflection" ? "fill-surface stroke-ink" : "fill-accent stroke-surface"} strokeWidth={2} />
              ))}
              <circle cx={top.px(x0)} cy={top.py(y0)} r={6} className="fill-ink stroke-surface" strokeWidth={2} />
            </g>
          </svg>
          <svg viewBox={`0 0 ${W} 170`} className="mx-auto mt-1 h-auto w-full max-w-sm" role="img" aria-label={`Gradient graph ${dName} = ${deq}. At ${X} = ${pn(x0)} its value is ${rd(m)}.`}>
            <defs>
              <clipPath id={clipBot}>
                <rect x={bot.px(xMin)} y={bot.py(40)} width={bot.px(xMax) - bot.px(xMin)} height={bot.py(-40) - bot.py(40)} />
              </clipPath>
            </defs>
            <rect x={0} y={0} width={W} height={170} className="fill-surface-2" />
            <Grid plane={bot} xStep={1} yStep={20} xLabel={X} yLabel={motion ? "v" : "dy/dx"} />
            <g clipPath={`url(#${clipBot})`}>
              <path d={curvePath(df, bot)} fill="none" className="stroke-accent" strokeWidth={2.5} strokeLinecap="round" />
              <line x1={bot.px(x0)} x2={bot.px(x0)} y1={bot.py(40)} y2={bot.py(-40)} className="stroke-ink-2" strokeWidth={1} strokeDasharray="3 4" />
              {sp.map((s, i) => (
                <circle key={i} cx={bot.px(s.x)} cy={bot.py(0)} r={4.5} className="fill-accent" />
              ))}
              <circle cx={bot.px(x0)} cy={bot.py(m)} r={5.5} className="fill-ink stroke-surface" strokeWidth={2} />
            </g>
          </svg>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="mb-2 text-sm font-bold text-brand">
              <M>{`${Y} = ${eq}`}</M>
            </div>
            <Stepper label={<M>{`${X}^3`}</M>} value={a} min={-2} max={2} onChange={setA} format={pn} />
            <Slider label={<span>coefficient of <M>{`${X}^2`}</M></span>} value={b} min={-15} max={15} onChange={setB} format={pn} />
            <Slider label={<span>coefficient of <M>{X}</M></span>} value={c} min={-40} max={40} onChange={setC} format={pn} />
            <Slider label="constant" value={d} min={-20} max={20} onChange={setD} format={pn} />
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <Slider label={`Tracer: ${X} =`} value={x0} min={xMin} max={xMax} step={0.25} onChange={changeX} format={pn} />
          </div>
          <div className="grid grid-cols-2 gap-2">
            <Readout label={motion ? "v = ds/dt" : "dy/dx"} tone="ink" value={<span className="text-base"><M>{deq}</M></span>} />
            <Readout label={motion ? "a = dv/dt" : "d²y/dx²"} tone="ink" value={<span className="text-base"><M>{d2eq}</M></span>} />
            <Readout label={`${motion ? "v" : "Gradient"} at ${X} = ${pn(x0)}`} tone={tone} value={rd(m)} />
            <Readout label={`${Y} at ${X} = ${pn(x0)}`} tone="brand" value={rd(y0)} />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "chord-to-tangent", title: "From chord to tangent", blurb: "Shrink the gap between two points on a curve and watch the chord turn into the tangent.", Component: ChordToTangent },
  { id: "curve-and-gradient", title: "A curve and its gradient graph", blurb: "Build a cubic, trace its tangent, and see turning points appear where dy/dx = 0 — or switch to motion and find when a particle is at rest.", Component: CurveAndGradient },
];
