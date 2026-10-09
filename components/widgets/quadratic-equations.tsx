"use client";
// Interactive explorables for "quadratic-equations".
//  1. Quadratic explorer — sliders for a, b, c; the parabola y = ax² + bx + c
//     with its roots, vertex and axis of symmetry; the discriminant, the exact
//     roots from the formula (simplified surds) and the completed-square form.
//  2. Line meets curve — a line y = mx + c against a circle x² + y² = r² or a
//     parabola y = x² + q. Substituting gives a quadratic; its discriminant
//     decides 2, 1 (tangent) or 0 intersection points.
import { useId, useState, type ReactNode } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, M, makePlane, PlaneGrid, type WidgetDef } from "./kit";

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

/** Decimal for display with a real minus sign, trailing zeros stripped. */
function fmt(v: number, dp = 2): string {
  const r = Number(v.toFixed(dp));
  const s = String(Object.is(r, -0) ? 0 : r);
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}

/** Number for use inside maths markup (ASCII minus). */
const mk = (v: number): string => String(cl(v));

/** Integer for markup, negatives bracketed: (-3). */
const mb = (v: number): string => (v < 0 ? `(${v})` : `${v}`);

/** Simplified fraction n/d as markup ("3/4", "-5", …). */
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

/** ASCII polynomial from [coef, var] pairs, zero terms dropped: "1.25x^2 - 5x + 3". */
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

/** n = s²·t with t square-free. */
function surdSplit(n: number): [number, number] {
  let s = 1;
  let t = n;
  for (let k = 2; k * k <= t; k++) {
    while (t % (k * k) === 0) {
      t /= k * k;
      s *= k;
    }
  }
  return [s, t];
}

/** Exact roots of ax² + bx + c = 0 (integers a, b, c, D ≥ 0) as markup. */
function exactRoots(a: number, b: number, D: number): string[] {
  const root = Math.sqrt(D);
  if (Number.isInteger(root)) {
    const r1 = fracMk(-b + root, 2 * a);
    const r2 = fracMk(-b - root, 2 * a);
    return r1 === r2 ? [r1] : [r1, r2];
  }
  const [s, t] = surdSplit(D);
  let p = -b;
  let q = s;
  let d = 2 * a;
  const g = gcd(gcd(p, q), d);
  p /= g;
  q /= g;
  d /= g;
  if (d < 0) {
    p = -p;
    d = -d; // ± absorbs the sign of q
  }
  const surd = `${q === 1 ? "" : q}sqrt(${t})`;
  const top = p === 0 ? `+- ${surd}` : `${p} +- ${surd}`;
  return [d === 1 ? top : `(${top})/${d}`];
}

/* ------------------------------------------------------------------------ */
/* 1. Quadratic explorer                                                      */
/* ------------------------------------------------------------------------ */

type View = "formula" | "square";

function QuadraticExplorer() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-2);
  const [c, setC] = useState(-3);
  const [view, setView] = useState<View>("formula");
  const clip = useId().replace(/:/g, "");

  const D = b * b - 4 * a * c;
  const h = -b / (2 * a);
  const k = c - (b * b) / (4 * a);
  const roots = D > 0 ? [(-b - Math.sqrt(D)) / (2 * a), (-b + Math.sqrt(D)) / (2 * a)].sort((u, v) => u - v) : D === 0 ? [h] : [];
  const exact = D >= 0 ? exactRoots(a, b, D) : [];

  const W = 360;
  const H = 320;
  const plane = makePlane({ width: W, height: H, xMin: -8, xMax: 8, yMin: -16, yMax: 16, pad: 22 });
  const { px, py } = plane;
  const pts: string[] = [];
  for (let i = 0; i <= 320; i++) {
    const x = -8 + (16 * i) / 320;
    const y = Math.max(-60, Math.min(60, a * x * x + b * x + c));
    pts.push(`${i ? "L" : "M"}${px(x).toFixed(1)},${py(y).toFixed(1)}`);
  }
  const vertexIn = h >= -8 && h <= 8 && k >= -16 && k <= 16;

  const setLead = (v: number) => setA(v === 0 ? (a > 0 ? -1 : 1) : v);
  const eq = `${polyMk([[a, "x^2"], [b, "x"], [c, ""]])} = 0`;
  const hMk = fracMk(-b, 2 * a);
  const kMk = fracMk(4 * a * c - b * b, 4 * a);
  const bracket = hMk === "0" ? "x^2" : `(x ${hMk.startsWith("-") ? "+" : "-"} ${hMk.replace(/^-/, "")})^2`;
  const sqForm = `${a === 1 ? "" : a === -1 ? "-" : a}${bracket}${kMk === "0" ? "" : kMk.startsWith("-") ? ` - ${kMk.slice(1)}` : ` + ${kMk}`}`;

  const nRoots = D > 0 ? 2 : D === 0 ? 1 : 0;
  const exactNode = (
    <>
      {exact.map((r, i) => (
        <span key={r}>
          {i ? " or " : ""}
          <M>{`x = ${r}`}</M>
        </span>
      ))}
    </>
  );
  const aria = `Graph of y = ${eq.replace(" = 0", "")}. Discriminant ${D}. ${nRoots === 0 ? "No real roots: the curve does not meet the x-axis." : nRoots === 1 ? `One repeated root at x = ${fmt(h)}: the curve touches the x-axis.` : `Two roots at x = ${fmt(roots[0])} and x = ${fmt(roots[1])}.`} Vertex at (${fmt(h)}, ${fmt(k)}).`;

  let caption: ReactNode;
  if (D > 0) {
    caption = (
      <>
        The discriminant <M>{`b^2 - 4ac = ${mb(b)}^2 - 4 * ${mb(a)} * ${mb(c)} = ${D}`}</M> is <strong>positive</strong>, so{" "}
        <M>{`sqrt(${D})`}</M> is a real number and the ± in the formula gives <strong>two different roots</strong> — the curve crosses the x-axis twice.{" "}
        {Number.isInteger(Math.sqrt(D)) ? (
          <>Because {D} is a perfect square the roots are rational, so this quadratic factorises.</>
        ) : (
          <>{D} is not a perfect square, so the roots are irrational (surds) — this one won&apos;t factorise nicely; use the formula or complete the square.</>
        )}{" "}
        The roots sit symmetrically either side of the axis <M>{`x = ${hMk}`}</M>, each <M>{`sqrt(${D})/${mk(Math.abs(2 * a))}`}</M> away.
      </>
    );
  } else if (D === 0) {
    caption = (
      <>
        The discriminant is <strong>exactly 0</strong>, so <M>{"+- sqrt(0)"}</M> adds nothing: both roots are the same, <M>{`x = ${hMk}`}</M>. The vertex sits right on
        the x-axis — the curve <strong>touches</strong> it. In completed-square form this is just <M>{`${sqForm} = 0`}</M>: a perfect square.
      </>
    );
  } else {
    caption = (
      <>
        The discriminant is <strong>negative</strong> ({D}), and no real number squares to a negative — so there are <strong>no real roots</strong>. The vertex is at
        height <M>{kMk}</M>, {a > 0 ? "above the x-axis with the curve opening upwards" : "below the x-axis with the curve opening downwards"}, so it never reaches y = 0.
      </>
    );
  }

  return (
    <WidgetFrame
      title="Quadratic explorer"
      tryThis={[
        "Make the graph just **touch** the x-axis. What is the discriminant then?",
        "Set a = 1 and b = 6. Which value of c gives equal roots? Predict with {{b^2 = 4ac}} first.",
        "Find a, b, c with two roots that are surds (not whole numbers). How can you tell from D alone?",
        "Change only the sign of a. Why can that turn \"no roots\" into \"two roots\"?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <Stepper label={<>a (not 0)</>} value={a} min={-4} max={4} onChange={setLead} />
          <Slider label="b" value={b} min={-10} max={10} onChange={setB} />
          <Slider label="c" value={c} min={-10} max={10} onChange={setC} />
        </div>

        <p className="text-center text-lg">
          <M>{eq}</M>
        </p>

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={aria}>
          <defs>
            <clipPath id={clip}>
              <rect x={px(-8)} y={py(16)} width={px(8) - px(-8)} height={py(-16) - py(16)} />
            </clipPath>
          </defs>
          <PlaneGrid plane={plane} step={2} />
          <g clipPath={`url(#${clip})`}>
            {h >= -8 && h <= 8 ? <line x1={px(h)} x2={px(h)} y1={py(16)} y2={py(-16)} className="stroke-accent" strokeWidth={1.5} strokeDasharray="5 4" /> : null}
            <path d={pts.join(" ")} fill="none" className="stroke-brand" strokeWidth={2.5} />
            {vertexIn ? <circle cx={px(h)} cy={py(k)} r={4.5} className="fill-accent stroke-ink" strokeWidth={1} /> : null}
            {roots.map((r, i) =>
              r >= -8 && r <= 8 ? (
                <g key={i}>
                  <circle cx={px(r)} cy={py(0)} r={5.5} className={D === 0 ? "fill-good stroke-ink" : "fill-bad stroke-ink"} strokeWidth={1} />
                  <text x={px(r)} y={py(0) + (i === 0 ? -10 : 20)} fontSize={11} textAnchor="middle" className="fill-ink font-bold">
                    {fmt(r)}
                  </text>
                </g>
              ) : null,
            )}
          </g>
        </svg>
        <p className="text-xs text-ink-2">
          Dots on the x-axis: the roots. Orange dot: the vertex. Dashed line: the axis of symmetry <M>{`x = ${hMk}`}</M>.
          {roots.some((r) => r < -8 || r > 8) ? " (A root is off the edge of this window.)" : ""}
        </p>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Discriminant" value={D} tone={D > 0 ? "good" : D === 0 ? "brand" : "bad"} />
          <Readout label="Real roots" value={nRoots} tone="ink" />
          <Readout label="Vertex" value={`(${fmt(h)}, ${fmt(k)})`} tone="ink" />
          <Readout label="Opens" value={a > 0 ? "Up ∪" : "Down ∩"} tone="ink" />
        </div>

        <Segmented<View>
          label="Method"
          value={view}
          onChange={setView}
          options={[
            { value: "formula", label: "Quadratic formula" },
            { value: "square", label: "Completing the square" },
          ]}
        />
        <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed">
          {view === "formula" ? (
            <ul className="space-y-1">
              <li>
                a = {fmt(a)}, b = {fmt(b)}, c = {fmt(c)}
              </li>
              <li>
                <M>{`x = (-b +- sqrt(b^2 - 4ac))/(2a) = (${mk(-b)} +- sqrt(${D}))/${mk(2 * a)}`}</M>
              </li>
              <li className="font-bold">
                {D < 0 ? (
                  <>√ of a negative number — no real solutions.</>
                ) : (
                  <>
                    Exact: {exactNode}
                    {D > 0 && !Number.isInteger(Math.sqrt(D)) ? (
                      <>
                        {" "}
                        ≈ {fmt(roots[0], 3)} or {fmt(roots[1], 3)}
                      </>
                    ) : null}
                  </>
                )}
              </li>
            </ul>
          ) : (
            <ul className="space-y-1">
              <li>
                <M>{`${polyMk([[a, "x^2"], [b, "x"], [c, ""]])} = ${sqForm}`}</M>
              </li>
              <li>
                Vertex (turning point) at <M>{`(${hMk}, ${kMk})`}</M>, {a > 0 ? "a minimum" : "a maximum"}.
              </li>
              <li className="font-bold">
                {D < 0 ? (
                  <>
                    <M>{`${bracket} = ${fracMk(b * b - 4 * a * c, 4 * a * a)}`}</M> — a square can&apos;t be negative, so no real solutions.
                  </>
                ) : (
                  <>
                    <M>{`${bracket} = ${fracMk(b * b - 4 * a * c, 4 * a * a)}`}</M>, so {exactNode}
                  </>
                )}
              </li>
            </ul>
          )}
        </div>
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Line meets curve                                                        */
/* ------------------------------------------------------------------------ */

type Curve = "circle" | "parabola";

function LineMeetsCurve() {
  const [curve, setCurve] = useState<Curve>("circle");
  const [r2, setR2] = useState(25);
  const [q, setQ] = useState(-4);
  const [m, setM] = useState(1);
  const [c, setC] = useState(1);
  const clip = useId().replace(/:/g, "");

  // Substitute y = mx + c to get A x² + B x + C = 0 (all multiples of 1/4, so exact in floating point).
  const A = curve === "circle" ? 1 + m * m : 1;
  const B = curve === "circle" ? 2 * m * c : -m;
  const C = curve === "circle" ? c * c - r2 : q - c;
  const D = cl(B * B - 4 * A * C);
  const xs = D > 0 ? [(-B - Math.sqrt(D)) / (2 * A), (-B + Math.sqrt(D)) / (2 * A)] : D === 0 ? [-B / (2 * A)] : [];
  const points = xs.map((x) => [x, m * x + c] as const);

  const S = 320;
  const plane = makePlane({ width: S, height: S, xMin: -8, xMax: 8, yMin: -8, yMax: 8, pad: 20 });
  const { px, py, sx } = plane;
  const parab: string[] = [];
  for (let i = 0; i <= 200; i++) {
    const x = -8 + (16 * i) / 200;
    parab.push(`${i ? "L" : "M"}${px(x).toFixed(1)},${py(Math.min(40, x * x + q)).toFixed(1)}`);
  }

  const lineMk = `y = ${polyMk([[m, "x"], [c, ""]])}`;
  const curveMk = curve === "circle" ? `x^2 + y^2 = ${r2}` : `y = ${polyMk([[1, "x^2"], [q, ""]])}`;
  const subMk =
    curve === "circle"
      ? `x^2 + (${polyMk([[m, "x"], [c, ""]])})^2 = ${r2}`
      : `${polyMk([[m, "x"], [c, ""]])} = ${polyMk([[1, "x^2"], [q, ""]])}`;
  const quadMk = `${polyMk([[A, "x^2"], [B, "x"], [C, ""]])} = 0`;
  const n = points.length;
  const verdict = n === 2 ? "The line cuts the curve at two points" : n === 1 ? "The line is a tangent — it touches at exactly one point" : "The line misses the curve";
  const aria = `${curve === "circle" ? `Circle x squared plus y squared equals ${r2}` : `Parabola y = x squared ${q < 0 ? "minus" : "plus"} ${Math.abs(q)}`} and line ${lineMk}. ${verdict}${n ? ": " + points.map(([x, y]) => `(${fmt(x)}, ${fmt(y)})`).join(" and ") : ""}.`;

  return (
    <WidgetFrame
      title="Line meets curve"
      tryThis={[
        "Make the line a **tangent** to the circle (exactly one meeting point). Watch the discriminant.",
        "Circle with {{r^2 = 20}} and m = 0.5: which c makes the line just touch? Check that {{c^2 = r^2(1 + m^2)}}.",
        "Parabola: set m = 2. Find c so the line touches {{y = x^2 + q}}. Can you predict c from q?",
        "Find a line through the centre of the circle. Why must it always meet the circle twice?",
      ]}
      caption={
        <>
          Substituting the line into the curve turns two equations into <strong>one quadratic</strong>: <M>{quadMk}</M>. Each real root is the x-coordinate of a meeting
          point, so its discriminant <M>{`B^2 - 4AC = ${mk(D)}`}</M> decides the picture: {D > 0 ? "positive → two points" : D === 0 ? "zero → one repeated root, a tangent" : "negative → no real roots, so the line misses"}.
          {n ? (
            <>
              {" "}
              Always find y from the <strong>linear</strong> equation, so each x is paired with the right y.
            </>
          ) : null}
        </>
      }
    >
      <div className="space-y-4">
        <Segmented<Curve>
          label="Curve"
          value={curve}
          onChange={setCurve}
          options={[
            { value: "circle", label: "Circle" },
            { value: "parabola", label: "Parabola" },
          ]}
        />
        <div className="grid gap-3 sm:grid-cols-3">
          {curve === "circle" ? (
            <Slider label={<M>{"r^2"}</M>} value={r2} min={1} max={50} onChange={setR2} />
          ) : (
            <Slider label="q (shifts the parabola)" value={q} min={-6} max={4} onChange={setQ} />
          )}
          <Slider label="Gradient m" value={m} min={-3} max={3} step={0.5} onChange={setM} />
          <Slider label="Intercept c" value={c} min={-8} max={8} step={0.5} onChange={setC} />
        </div>

        <p className="flex flex-wrap justify-center gap-x-6 gap-y-1 text-lg">
          <M>{curveMk}</M>
          <M>{lineMk}</M>
        </p>

        <svg viewBox={`0 0 ${S} ${S}`} className="mx-auto h-auto w-full max-w-md" role="img" aria-label={aria}>
          <defs>
            <clipPath id={clip}>
              <rect x={px(-8)} y={py(8)} width={px(8) - px(-8)} height={py(-8) - py(8)} />
            </clipPath>
          </defs>
          <PlaneGrid plane={plane} step={2} />
          <g clipPath={`url(#${clip})`}>
            {curve === "circle" ? (
              <circle cx={px(0)} cy={py(0)} r={Math.sqrt(r2) * sx} fill="none" className="stroke-brand" strokeWidth={2.5} />
            ) : (
              <path d={parab.join(" ")} fill="none" className="stroke-brand" strokeWidth={2.5} />
            )}
            <line x1={px(-8)} y1={py(m * -8 + c)} x2={px(8)} y2={py(m * 8 + c)} className="stroke-accent" strokeWidth={2.5} />
            {points.map(([x, y], i) => (
              <g key={i}>
                <circle cx={px(x)} cy={py(y)} r={5.5} className={n === 1 ? "fill-good stroke-ink" : "fill-bad stroke-ink"} strokeWidth={1} />
                <text x={px(x) + 8} y={py(y) - 8} fontSize={11} className="fill-ink font-bold">
                  ({fmt(x)}, {fmt(y)})
                </text>
              </g>
            ))}
          </g>
        </svg>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          <Readout label="Discriminant" value={fmt(D, 4)} tone={D > 0 ? "good" : D === 0 ? "brand" : "bad"} />
          <Readout label="Meeting points" value={n} tone="ink" />
          <Readout label="Verdict" value={n === 2 ? "Cuts" : n === 1 ? "Tangent" : "Misses"} tone={n === 1 ? "brand" : "ink"} />
        </div>

        <ol className="list-decimal space-y-1 rounded-xl bg-surface-2 p-3 pl-8 text-sm leading-relaxed">
          <li>
            Substitute: <M>{subMk}</M>
          </li>
          <li>
            Rearrange: <M>{quadMk}</M>
          </li>
          <li>
            {n === 0 ? (
              <>Discriminant {fmt(D, 4)} &lt; 0 → no real solutions.</>
            ) : (
              <>
                x = {xs.map((x) => fmt(x)).join(" or ")} → y = {points.map(([, y]) => fmt(y)).join(" or ")} (2 d.p.)
              </>
            )}
          </li>
        </ol>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "quadratic-explorer",
    title: "Quadratic explorer",
    blurb: "Change a, b and c and watch the roots, the discriminant and the completed square respond.",
    Component: QuadraticExplorer,
  },
  {
    id: "line-meets-curve",
    title: "Line meets curve",
    blurb: "Slide a line across a circle or parabola — the discriminant predicts 2, 1 or 0 meeting points.",
    Component: LineMeetsCurve,
  },
];
