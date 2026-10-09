"use client";
// Interactive explorables for "graphs-of-functions".
//  1. Quadratic sketcher — set a, b, c in y = ax² + bx + c and watch the curve,
//     its completed-square form, turning point, axis of symmetry, intercepts and
//     discriminant update exactly. Optionally add a straight line y = mx + d to
//     see which equation its crossing points solve (graphical solutions).
//  2. Transformation lab — pick a base graph (x², x³, 1/x, 2^x) and a
//     transformation (f(x) + a, f(x + a), af(x), f(ax), −f(x), f(−x)); see the
//     old and new curves and exactly where two key points move. A "predict
//     first" mode hides the new curve until you commit to an answer.
import { useId, useState } from "react";
import { WidgetFrame, Stepper, Slider, Segmented, Readout, M, makePlane, PlaneGrid, type WidgetDef } from "./kit";
import { RichInline } from "../Rich";

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
/** Rounded for display. */
const rd = (v: number, dp = 2) => pn(+v.toFixed(dp));

/** Exact n/d as maths markup: "7/2", "-3", "-5/3". */
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

/** ax² + bx + c as markup. */
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

/** √n = k√m with m square-free. */
function surd(n: number): [number, number] {
  let k = 1;
  let m = n;
  for (let f = 2; f * f <= m; f++) while (m % (f * f) === 0) {
    m /= f * f;
    k *= f;
  }
  return [k, m];
}

/** Exact roots of Ax² + Bx + C = 0 (integers) as markup + decimals. */
function rootsOf(A: number, B: number, C: number): { count: number; exact: string; values: number[] } {
  const D = B * B - 4 * A * C;
  if (D < 0) return { count: 0, exact: "no real roots", values: [] };
  if (D === 0) return { count: 1, exact: `x = ${fr(-B, 2 * A)}`, values: [-B / (2 * A)] };
  const [k, m] = surd(D);
  const values = [(-B - Math.sqrt(D)) / (2 * A), (-B + Math.sqrt(D)) / (2 * A)].sort((p, q) => p - q);
  if (m === 1) {
    const pair: Array<[number, string]> = [
      [(-B - k) / (2 * A), fr(-B - k, 2 * A)],
      [(-B + k) / (2 * A), fr(-B + k, 2 * A)],
    ];
    pair.sort((p, q) => p[0] - q[0]);
    return { count: 2, exact: `x = ${pair[0][1]}, x = ${pair[1][1]}`, values };
  }
  // (−B ± k√m) / 2A, cancel a common factor
  let p = -B;
  let q = k;
  let d = 2 * A;
  const g = gcd(gcd(p, q), d);
  p /= g;
  q /= g;
  d /= g;
  if (d < 0) {
    p = -p;
    d = -d;
  }
  const sq = q === 1 ? `sqrt(${m})` : `${q}sqrt(${m})`;
  const top = p === 0 ? `+- ${sq}` : `${mn(p)} +- ${sq}`;
  return { count: 2, exact: d === 1 ? `x = ${top}` : `x = (${top})/${d}`, values };
}

/** SVG path for y = f(x) in the plane, breaking at asymptotes / off-screen jumps. */
function curvePath(f: (x: number) => number, plane: ReturnType<typeof makePlane>): string {
  const { xMin, xMax, yMin, yMax, px, py } = plane;
  const span = yMax - yMin;
  const N = 480;
  let d = "";
  let pen = false;
  let prev = NaN;
  for (let i = 0; i <= N; i++) {
    const x = xMin + ((xMax - xMin) * i) / N;
    const y = f(x);
    const ok = Number.isFinite(y) && y > yMin - 2 * span && y < yMax + 2 * span;
    const jump = Number.isFinite(prev) && Math.abs(y - prev) > span;
    if (!ok || jump) {
      pen = false;
      prev = ok ? y : NaN;
      if (!ok) continue;
    }
    d += `${pen ? "L" : "M"}${px(x).toFixed(1)},${py(y).toFixed(1)}`;
    pen = true;
    prev = y;
  }
  return d;
}

/* ------------------------------------------------------------------------ */
/* 1. Quadratic sketcher                                                      */
/* ------------------------------------------------------------------------ */

const XR = 8;
const YR = 12;

function QuadraticSketcher() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-4);
  const [c, setC] = useState(-5);
  const [showLine, setShowLine] = useState(false);
  const [m, setM] = useState(1);
  const [d, setD] = useState(1);
  const clipId = useId().replace(/:/g, "");

  const W = 340;
  const H = 340;
  const plane = makePlane({ width: W, height: H, xMin: -XR, xMax: XR, yMin: -YR, yMax: YR, pad: 18 });
  const f = (x: number) => a * x * x + b * x + c;

  const D = b * b - 4 * a * c;
  const hTxt = fr(-b, 2 * a);
  const kTxt = fr(4 * a * c - b * b, 4 * a);
  const h = -b / (2 * a);
  const k = c - (b * b) / (4 * a);
  const roots = rootsOf(a, b, c);
  // Completed-square form a(x − h)² + k
  const inner = h === 0 ? "x" : `(x ${h > 0 ? "-" : "+"} ${fr(Math.abs(b), Math.abs(2 * a))})`;
  const kPart = k === 0 ? "" : k > 0 ? ` + ${fr(4 * a * c - b * b, 4 * a)}` : ` - ${fr(-(4 * a * c - b * b), 4 * a)}`;
  const csForm = `${a === 1 ? "" : a === -1 ? "-" : mn(a)}${inner}^2${kPart}`;

  const eq = polyStr([[a, "x^2"], [b, "x"], [c, ""]]);
  const lineEq = polyStr([[m, "x"], [d, ""]]);
  const solved = polyStr([[a, "x^2"], [b - m, "x"], [c - d, ""]]);
  const meet = rootsOf(a, b - m, c - d);

  const inView = (x: number, y: number) => Math.abs(x) <= XR && Math.abs(y) <= YR;

  const aria = `Graph of y = ${eq}. Turning point (${rd(h)}, ${rd(k)}). ${roots.count === 0 ? "It does not cross the x-axis." : `It crosses the x-axis ${roots.count === 1 ? "once" : "twice"}.`}${showLine ? ` The line y = ${lineEq} meets it at ${meet.count} point${meet.count === 1 ? "" : "s"}.` : ""}`;

  return (
    <WidgetFrame
      title="Quadratic sketcher"
      tryThis={[
        "Make a graph that touches the x-axis at exactly one point. What is the discriminant {{b^2 - 4ac}} then?",
        "Keep a and b fixed and change only c. Which features move, and which stay where they are?",
        "Turn on the line. Choose m and d so the crossing points solve {{x^2 - 6x + 5 = 0}} when the curve is {{y = x^2 - 4x - 5}}.",
        "Find a curve with turning point (3, −2). How does its completed-square form show it?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            Completing the square rewrites <M>{`y = ${eq}`}</M> as <M>{`y = ${csForm}`}</M>. A square is never negative, so the bracket is smallest
            (zero) when <M>{`x = ${hTxt}`}</M>: that gives the turning point and the axis of symmetry. The sign of a decides whether it is a
            minimum (∪) or a maximum (∩).
          </p>
          <p>
            The discriminant <M>{"b^2 - 4ac"}</M> = {pn(D)} is {D > 0 ? "positive, so there are two x-intercepts" : D === 0 ? "zero, so the curve just touches the x-axis" : "negative, so the curve never meets the x-axis"}.
          </p>
          {showLine ? (
            <p>
              Where the line meets the curve, <M>{`${eq} = ${lineEq}`}</M>, which rearranges to <M>{`${solved} = 0`}</M>. So the x-coordinates of the
              crossing points are the solutions of that equation — that is how you choose which line to draw.
            </p>
          ) : null}
        </div>
      }
    >
      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <div>
          <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto h-auto w-full max-w-sm" role="img" aria-label={aria}>
            <defs>
              <clipPath id={clipId}>
                <rect x={plane.px(-XR)} y={plane.py(YR)} width={plane.px(XR) - plane.px(-XR)} height={plane.py(-YR) - plane.py(YR)} />
              </clipPath>
            </defs>
            <rect x={0} y={0} width={W} height={H} className="fill-surface" />
            <PlaneGrid plane={plane} step={2} />
            <g clipPath={`url(#${clipId})`}>
              {Math.abs(h) <= XR ? (
                <line x1={plane.px(h)} x2={plane.px(h)} y1={plane.py(YR)} y2={plane.py(-YR)} className="stroke-ink-2" strokeWidth={1.5} strokeDasharray="6 5" />
              ) : null}
              <path d={curvePath(f, plane)} fill="none" className="stroke-brand" strokeWidth={3} strokeLinecap="round" />
              {showLine ? (
                <line x1={plane.px(-XR)} y1={plane.py(m * -XR + d)} x2={plane.px(XR)} y2={plane.py(m * XR + d)} className="stroke-accent" strokeWidth={2.5} strokeLinecap="round" />
              ) : null}
              {roots.values.map((x) =>
                inView(x, 0) ? <circle key={`r${x}`} cx={plane.px(x)} cy={plane.py(0)} r={5} className="fill-surface stroke-brand" strokeWidth={2.5} /> : null,
              )}
              {inView(0, c) ? <circle cx={plane.px(0)} cy={plane.py(c)} r={4.5} className="fill-ink-2" /> : null}
              {inView(h, k) ? <circle cx={plane.px(h)} cy={plane.py(k)} r={6} className="fill-good stroke-surface" strokeWidth={2} /> : null}
              {showLine
                ? meet.values.map((x) =>
                    inView(x, m * x + d) ? <circle key={`m${x}`} cx={plane.px(x)} cy={plane.py(m * x + d)} r={6} className="fill-accent stroke-surface" strokeWidth={2} /> : null,
                  )
                : null}
            </g>
          </svg>
          <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-ink-2">
            <span className="inline-flex items-center gap-1"><span className="inline-block h-3 w-3 rounded-full bg-good" aria-hidden /> turning point</span>
            <span className="inline-flex items-center gap-1"><span className="inline-block h-3 w-3 rounded-full border-2 border-brand" aria-hidden /> x-intercepts</span>
            <span className="inline-flex items-center gap-1"><span className="inline-block h-3 w-3 rounded-full bg-ink-2" aria-hidden /> y-intercept</span>
            {showLine ? <span className="inline-flex items-center gap-1"><span className="inline-block h-3 w-3 rounded-full bg-accent" aria-hidden /> line meets curve</span> : null}
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="mb-2 text-sm font-bold text-brand">
              <M>{`y = ${eq}`}</M>
            </div>
            <Stepper label="a" value={a} min={-3} max={3} onChange={(v) => setA(v === 0 ? (a > 0 ? -1 : 1) : v)} format={pn} />
            <Slider label="b" value={b} min={-10} max={10} onChange={setB} format={pn} />
            <Slider label="c" value={c} min={-10} max={10} onChange={setC} format={pn} />
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <label className="flex min-h-[40px] cursor-pointer items-center gap-2 text-sm font-bold text-accent">
              <input type="checkbox" checked={showLine} onChange={(e) => setShowLine(e.target.checked)} className="h-5 w-5" />
              Add a straight line <M>{`y = ${lineEq}`}</M>
            </label>
            {showLine ? (
              <div className="mt-1 space-y-1">
                <Slider label="m (gradient)" value={m} min={-6} max={6} onChange={setM} format={pn} />
                <Slider label="d (y-intercept)" value={d} min={-12} max={12} onChange={setD} format={pn} />
              </div>
            ) : null}
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Readout label="Completed square" tone="ink" value={<M>{`y = ${csForm}`}</M>} />
        <Readout label={a > 0 ? "Minimum point" : "Maximum point"} tone="good" value={<M>{`(${hTxt}, ${kTxt})`}</M>} />
        <Readout label="Axis of symmetry" tone="ink" value={<M>{`x = ${hTxt}`}</M>} />
        <Readout label="y-intercept" tone="ink" value={`(0, ${pn(c)})`} />
        <Readout label="b² − 4ac" tone={D < 0 ? "bad" : "brand"} value={pn(D)} />
        <Readout
          label="x-intercepts"
          tone={roots.count ? "brand" : "bad"}
          value={roots.count ? <span className="text-base"><M>{roots.exact}</M>{roots.exact.includes("sqrt") ? <span className="block text-xs text-ink-2">≈ {roots.values.map((v) => rd(v)).join(" and ")}</span> : null}</span> : "none"}
        />
      </div>

      {showLine ? (
        <div className="mt-3 rounded-xl border border-line bg-surface p-3 text-sm">
          <div className="font-bold text-ink-2">Graphical solution, live</div>
          <p className="mt-1 text-ink">
            The crossing points solve <M>{`${solved} = 0`}</M>:{" "}
            {meet.count === 0 ? (
              <strong className="text-bad">the line misses the curve, so this equation has no real solutions.</strong>
            ) : (
              <strong className="text-accent">
                <M>{meet.exact}</M>
                {meet.exact.includes("sqrt") ? ` (≈ ${meet.values.map((v) => rd(v)).join(", ")})` : ""}
                {meet.count === 1 ? " — the line is a tangent" : ""}
              </strong>
            )}
          </p>
        </div>
      ) : null}
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Transformation lab                                                      */
/* ------------------------------------------------------------------------ */

type Base = "sq" | "cube" | "recip" | "exp";
type Kind = "up" | "inside" | "stretchY" | "stretchX" | "reflX" | "reflY";

const BASES: Record<Base, { label: string; f: (x: number) => number; wrap: (inner: string) => string; pts: Array<[number, number]> }> = {
  sq: { label: "x²", f: (x) => x * x, wrap: (s) => (s === "x" ? "x^2" : `(${s})^2`), pts: [[0, 0], [2, 4]] },
  cube: { label: "x³", f: (x) => x * x * x, wrap: (s) => (s === "x" ? "x^3" : `(${s})^3`), pts: [[0, 0], [1, 1]] },
  recip: { label: "1/x", f: (x) => (x === 0 ? NaN : 1 / x), wrap: (s) => (s === "x" ? "1/x" : `1/(${s})`), pts: [[1, 1], [2, 0.5]] },
  exp: { label: "2ˣ", f: (x) => Math.pow(2, x), wrap: (s) => (s === "x" ? "2^x" : `2^(${s})`), pts: [[0, 1], [2, 4]] },
};

const KINDS: { value: Kind; label: string }[] = [
  { value: "up", label: "f(x) + a" },
  { value: "inside", label: "f(x + a)" },
  { value: "stretchY", label: "af(x)" },
  { value: "stretchX", label: "f(ax)" },
  { value: "reflX", label: "−f(x)" },
  { value: "reflY", label: "f(−x)" },
];

function TransformLab() {
  const [base, setBase] = useState<Base>("sq");
  const [kind, setKind] = useState<Kind>("inside");
  const [shift, setShift] = useState(2);
  const [scale, setScale] = useState(2);
  const [predict, setPredict] = useState(false);
  const [revealed, setRevealed] = useState(false);
  const clipId = useId().replace(/:/g, "");

  const B = BASES[base];
  const usesShift = kind === "up" || kind === "inside";
  const usesScale = kind === "stretchY" || kind === "stretchX";
  const a = usesShift ? shift : scale;

  const g = (x: number): number => {
    switch (kind) {
      case "up":
        return B.f(x) + a;
      case "inside":
        return B.f(x + a);
      case "stretchY":
        return a * B.f(x);
      case "stretchX":
        return B.f(a * x);
      case "reflX":
        return -B.f(x);
      default:
        return B.f(-x);
    }
  };
  const image = ([x, y]: [number, number]): [number, number] => {
    switch (kind) {
      case "up":
        return [x, y + a];
      case "inside":
        return [x - a, y];
      case "stretchY":
        return [x, a * y];
      case "stretchX":
        return [x / a, y];
      case "reflX":
        return [x, -y];
      default:
        return [-x, y];
    }
  };

  const signed = (v: number) => (v < 0 ? `- ${mn(-v)}` : `+ ${mn(v)}`);
  const fx = B.wrap("x");
  let fNotation = "";
  let newEq = "";
  let words = "";
  switch (kind) {
    case "up":
      fNotation = `f(x) ${signed(a)}`;
      newEq = `${fx} ${signed(a)}`;
      words = `Translation by the vector (0, ${pn(a)}): every point moves ${a >= 0 ? "up" : "down"} ${pn(Math.abs(a))}. Only the y-coordinates change.`;
      break;
    case "inside":
      fNotation = `f(x ${signed(a)})`;
      newEq = B.wrap(`x ${signed(a)}`);
      words = `Translation by the vector (${pn(-a)}, 0): every point moves ${a >= 0 ? "LEFT" : "RIGHT"} ${pn(Math.abs(a))}. Inside the bracket works the opposite way to what you might expect — the new graph reaches each old y-value ${pn(Math.abs(a))} ${a >= 0 ? "earlier" : "later"}.`;
      break;
    case "stretchY":
      fNotation = `${mn(a)}f(x)`;
      newEq = `${mn(a)}${base === "recip" ? `(${fx})` : fx.startsWith("x") ? fx : `* ${fx}`}`;
      words = `Stretch parallel to the y-axis, scale factor ${pn(a)}: every y-coordinate is multiplied by ${pn(a)}. Points on the x-axis do not move.`;
      break;
    case "stretchX":
      fNotation = `f(${mn(a)}x)`;
      newEq = B.wrap(`${mn(a)}x`);
      words = `Stretch parallel to the x-axis, scale factor {{1/${mn(a)}}}: every x-coordinate is divided by ${pn(a)}. Points on the y-axis do not move.`;
      break;
    case "reflX":
      fNotation = "-f(x)";
      newEq = base === "recip" ? "-1/x" : `-${fx}`;
      words = "Reflection in the x-axis: every y-coordinate changes sign.";
      break;
    default:
      fNotation = "f(-x)";
      newEq = B.wrap("-x");
      words = "Reflection in the y-axis: every x-coordinate changes sign.";
  }
  if (kind === "stretchY" && base === "exp") newEq = `${mn(a)} * 2^x`;
  if (kind === "stretchY" && base === "recip") newEq = `${mn(a)}/x`;

  const hidden = predict && !revealed;
  const resetReveal = () => setRevealed(false);

  const W = 340;
  const H = 300;
  const plane = makePlane({ width: W, height: H, xMin: -6, xMax: 6, yMin: -6, yMax: 8, pad: 18 });
  const pts = B.pts.map((p) => ({ from: p, to: image(p) }));
  const inV = (x: number, y: number) => x >= -6 && x <= 6 && y >= -6 && y <= 8;

  return (
    <WidgetFrame
      title="Transformation lab"
      tryThis={[
        "Turn on *Predict first*. Choose {{f(x + 3)}} on {{y = x^2}} and say where the turning point goes before revealing.",
        "Find two different transformations that send the point (2, 4) on {{y = x^2}} to (1, 4).",
        "Which transformations leave the y-intercept of {{y = 2^x}} where it is? Which move the asymptote?",
        "For {{y = 1/x}}, show that {{-f(x)}} and {{f(-x)}} give the same graph. Why does that happen?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <RichInline text={words} />
          </p>
          <p className="text-ink-2">
            Rule of thumb: a change <strong>outside</strong> f acts on y and does what it says; a change <strong>inside</strong> the bracket acts on x and
            does the opposite (add → move left, multiply → squash).
          </p>
        </div>
      }
    >
      <div className="flex flex-wrap items-center gap-2">
        <span className="text-sm font-semibold text-ink-2">f(x) =</span>
        <Segmented
          label="Base graph"
          value={base}
          onChange={(v) => {
            setBase(v);
            resetReveal();
          }}
          options={(Object.keys(BASES) as Base[]).map((k) => ({ value: k, label: BASES[k].label }))}
        />
      </div>
      <div className="mt-2">
        <Segmented
          label="Transformation"
          value={kind}
          onChange={(v) => {
            setKind(v);
            resetReveal();
          }}
          options={KINDS}
        />
      </div>
      <div className="mt-3 grid gap-3 sm:grid-cols-2">
        {usesShift ? (
          <Slider label="a" value={shift} min={-4} max={4} step={0.5} onChange={(v) => { setShift(v); resetReveal(); }} format={pn} />
        ) : usesScale ? (
          <Slider label="a" value={scale} min={0.5} max={3} step={0.5} onChange={(v) => { setScale(v); resetReveal(); }} format={pn} />
        ) : (
          <div className="text-sm text-ink-2">No number to choose — this is a reflection.</div>
        )}
        <label className="flex min-h-[40px] cursor-pointer items-center gap-2 text-sm font-semibold text-ink-2">
          <input type="checkbox" checked={predict} onChange={(e) => { setPredict(e.target.checked); setRevealed(false); }} className="h-5 w-5" />
          Predict first (hide the new graph)
        </label>
      </div>

      <div className="mt-4 grid gap-4 md:grid-cols-[1fr_1fr]">
        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="mx-auto h-auto w-full max-w-sm"
          role="img"
          aria-label={`Graph of y = ${B.label} (dashed)${hidden ? "; the transformed graph is hidden until you reveal it." : ` and y = ${fNotation} (solid).`}`}
        >
          <defs>
            <clipPath id={clipId}>
              <rect x={plane.px(-6)} y={plane.py(8)} width={plane.px(6) - plane.px(-6)} height={plane.py(-6) - plane.py(8)} />
            </clipPath>
          </defs>
          <rect x={0} y={0} width={W} height={H} className="fill-surface" />
          <PlaneGrid plane={plane} step={1} labels={false} />
          <text x={plane.px(5.8)} y={plane.py(0) - 5} fontSize={11} textAnchor="end" className="fill-ink-2">x</text>
          <text x={plane.px(0) + 5} y={plane.py(7.6)} fontSize={11} className="fill-ink-2">y</text>
          {[-4, -2, 2, 4].map((t) => (
            <text key={`tx${t}`} x={plane.px(t)} y={plane.py(0) + 13} fontSize={9} textAnchor="middle" className="fill-ink-2">{t}</text>
          ))}
          {[-4, -2, 2, 4, 6].map((t) => (
            <text key={`ty${t}`} x={plane.px(0) - 4} y={plane.py(t) + 3} fontSize={9} textAnchor="end" className="fill-ink-2">{t}</text>
          ))}
          <g clipPath={`url(#${clipId})`}>
            <path d={curvePath(B.f, plane)} fill="none" className="stroke-ink-2" strokeWidth={2} strokeDasharray="6 5" />
            {!hidden ? <path d={curvePath(g, plane)} fill="none" className="stroke-brand" strokeWidth={3} strokeLinecap="round" /> : null}
            {pts.map(({ from, to }, i) => (
              <g key={`p${i}`}>
                {inV(from[0], from[1]) ? <circle cx={plane.px(from[0])} cy={plane.py(from[1])} r={5} className="fill-surface stroke-ink-2" strokeWidth={2} /> : null}
                {!hidden && inV(to[0], to[1]) ? (
                  <>
                    {inV(from[0], from[1]) && (from[0] !== to[0] || from[1] !== to[1]) ? (
                      <line x1={plane.px(from[0])} y1={plane.py(from[1])} x2={plane.px(to[0])} y2={plane.py(to[1])} className="stroke-accent" strokeWidth={1.5} strokeDasharray="3 3" />
                    ) : null}
                    <circle cx={plane.px(to[0])} cy={plane.py(to[1])} r={6} className={i === 0 ? "fill-good stroke-surface" : "fill-accent stroke-surface"} strokeWidth={2} />
                  </>
                ) : null}
              </g>
            ))}
          </g>
        </svg>

        <div className="space-y-3">
          <div className="rounded-xl border border-line bg-surface p-3 text-sm">
            <div className="text-ink-2">Original (dashed)</div>
            <div className="font-bold text-ink"><M>{`y = ${fx}`}</M></div>
            <div className="mt-2 text-ink-2">New graph</div>
            <div className="font-bold text-brand">
              <M>{`y = ${fNotation}`}</M> {hidden ? null : <> = <M>{newEq}</M></>}
            </div>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3 text-sm">
            <div className="mb-1 font-bold text-ink-2">Where the key points go</div>
            <ul className="space-y-1">
              {pts.map(({ from, to }, i) => (
                <li key={`l${i}`} className="flex flex-wrap items-center gap-2">
                  <span className={`inline-block h-3 w-3 rounded-full ${i === 0 ? "bg-good" : "bg-accent"}`} aria-hidden />
                  <span>
                    ({pn(from[0])}, {pn(from[1])}) →{" "}
                    {hidden ? <span className="text-ink-2">?</span> : <strong>({rd(to[0], 3)}, {rd(to[1], 3)})</strong>}
                  </span>
                </li>
              ))}
            </ul>
            {base === "exp" && !hidden ? (
              <p className="mt-2 text-ink-2">
                Asymptote: <M>{`y = ${kind === "up" ? mn(a) : "0"}`}</M>
              </p>
            ) : null}
            {base === "recip" && !hidden ? (
              <p className="mt-2 text-ink-2">
                Asymptotes: <M>{`x = ${kind === "inside" ? mn(-a) : "0"}`}</M> and <M>{`y = ${kind === "up" ? mn(a) : "0"}`}</M>
              </p>
            ) : null}
          </div>
          {hidden ? (
            <button type="button" onClick={() => setRevealed(true)} className="btn btn-primary min-h-[44px] w-full">
              I&apos;ve made my prediction — reveal
            </button>
          ) : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "quadratic-sketcher",
    title: "Quadratic sketcher",
    blurb: "Change a, b and c: see the turning point, intercepts and discriminant — then add a line to solve equations graphically.",
    Component: QuadraticSketcher,
  },
  {
    id: "transformation-lab",
    title: "Transformation lab",
    blurb: "Apply f(x) + a, f(x + a), af(x), f(ax) and reflections to x², x³, 1/x and 2ˣ — predict where the points go, then check.",
    Component: TransformLab,
  },
];
