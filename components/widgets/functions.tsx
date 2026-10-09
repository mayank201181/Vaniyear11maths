"use client";
// Interactive explorables for "functions".
//  1. Composite function machines — choose f and g from a menu, feed in an
//     input and watch it pass through the two machines in the order fg or gf.
//     The composite expression is computed exactly (polynomial composition) and
//     a small table compares fg(x) with gf(x) for several inputs.
//  2. Inverse mirror — pick a family (ax + b, ax³ + b, ax² + b), set a and b,
//     and see f, the line y = x and f⁻¹ as its reflection. A point P on f and
//     its image P′ on f⁻¹ show that inputs and outputs swap. For ax² + b you can
//     drop the domain restriction to see why the inverse then fails to be a function.
import { useId, useState } from "react";
import { WidgetFrame, Stepper, Slider, Segmented, Readout, M, makePlane, PlaneGrid, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* Shared helpers                                                            */
/* ------------------------------------------------------------------------ */

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

/** Exact value with denominator ≤ 64 as maths markup: "7/4", "-3", "5". */
function fr(v: number): string {
  for (let d = 1; d <= 64; d++) {
    const n = Math.round(v * d);
    if (Math.abs(n / d - v) < 1e-9) {
      const g = gcd(n, d);
      const nn = n / g;
      const dd = d / g;
      return dd === 1 ? String(nn) : `${nn}/${dd}`;
    }
  }
  return String(+v.toFixed(3));
}
/** Same, for plain text (real minus sign). */
const pfr = (v: number) => fr(v).replace("-", "−");
/** Rounded decimal for plain text. */
const rd = (v: number, dp = 2) => String(+v.toFixed(dp)).replace("-", "−");

type P = number[]; // coefficients, low → high

function trim(p: P): P {
  const q = [...p];
  while (q.length > 1 && Math.abs(q[q.length - 1]) < 1e-12) q.pop();
  return q;
}
const padd = (p: P, q: P): P => trim(Array.from({ length: Math.max(p.length, q.length) }, (_, i) => (p[i] ?? 0) + (q[i] ?? 0)));
function pmul(p: P, q: P): P {
  const out: P = new Array(p.length + q.length - 1).fill(0);
  p.forEach((a, i) => q.forEach((b, j) => (out[i + j] += a * b)));
  return trim(out);
}
function compose(f: P, g: P): P {
  let out: P = [0];
  let pw: P = [1];
  for (let i = 0; i < f.length; i++) {
    out = padd(out, pw.map((c) => c * f[i]));
    pw = pmul(pw, g);
  }
  return out;
}
const pval = (p: P, x: number) => p.reduce((s, c, i) => s + c * Math.pow(x, i), 0);
const psame = (p: P, q: P) => {
  const a = trim(p);
  const b = trim(q);
  return a.length === b.length && a.every((c, i) => Math.abs(c - b[i]) < 1e-9);
};

/** Polynomial as maths markup, e.g. "1/4 x^2 - 3/2 x + 9/4". */
function pstr(p: P): string {
  let out = "";
  for (let i = p.length - 1; i >= 0; i--) {
    const c = p[i];
    if (Math.abs(c) < 1e-12) continue;
    const abs = Math.abs(c);
    const v = i === 0 ? "" : i === 1 ? "x" : `x^${i}`;
    const coef = fr(abs);
    const t = v === "" ? coef : abs === 1 ? v : coef.includes("/") ? `${coef} ${v}` : `${coef}${v}`;
    out += out ? (c < 0 ? ` - ${t}` : ` + ${t}`) : c < 0 ? `-${t}` : t;
  }
  return out || "0";
}

/* ------------------------------------------------------------------------ */
/* 1. Composite function machines                                             */
/* ------------------------------------------------------------------------ */

type FnId = "lin" | "sub4" | "triple" | "sq" | "sq1" | "five" | "half";

const FNS: Record<FnId, { p: P; md: string; plain: string }> = {
  lin: { p: [3, 2], md: "2x + 3", plain: "2x + 3" },
  sub4: { p: [-4, 1], md: "x - 4", plain: "x − 4" },
  triple: { p: [0, 3], md: "3x", plain: "3x" },
  sq: { p: [0, 0, 1], md: "x^2", plain: "x²" },
  sq1: { p: [1, 0, 1], md: "x^2 + 1", plain: "x² + 1" },
  five: { p: [5, -1], md: "5 - x", plain: "5 − x" },
  half: { p: [-1.5, 0.5], md: "(x - 3)/2", plain: "(x − 3) ÷ 2" },
};
const FN_IDS = Object.keys(FNS) as FnId[];

function FnPicker({ label, value, onChange }: { label: string; value: FnId; onChange: (v: FnId) => void }) {
  return (
    <div>
      <div className="mb-1 text-sm font-bold text-ink-2">
        {label}(x) =
      </div>
      <Segmented label={`Choose ${label}(x)`} value={value} onChange={onChange} options={FN_IDS.map((id) => ({ value: id, label: <M>{FNS[id].md}</M> }))} />
    </div>
  );
}

function CompositeMachines() {
  const [fId, setF] = useState<FnId>("lin");
  const [gId, setG] = useState<FnId>("sq");
  const [order, setOrder] = useState<"fg" | "gf">("fg");
  const [x, setX] = useState(2);

  const f = FNS[fId];
  const g = FNS[gId];
  // In fg, g acts first; in gf, f acts first.
  const first = order === "fg" ? { name: "g", fn: g } : { name: "f", fn: f };
  const second = order === "fg" ? { name: "f", fn: f } : { name: "g", fn: g };
  const mid = pval(first.fn.p, x);
  const out = pval(second.fn.p, mid);
  const fg = compose(f.p, g.p);
  const gf = compose(g.p, f.p);
  const shown = order === "fg" ? fg : gf;
  const commute = psame(fg, gf);
  const xs = [-3, -2, -1, 0, 1, 2, 3];
  const identity = psame(fg, [0, 1]) && psame(gf, [0, 1]);

  const W = 412;
  const H = 150;
  const box = (cx: number, name: string, rule: string) => (
    <g>
      <rect x={cx - 52} y={40} width={104} height={56} rx={10} className="fill-brand-soft stroke-brand" strokeWidth={2} />
      <text x={cx} y={62} textAnchor="middle" fontSize={15} fontWeight={800} className="fill-brand">
        {name}
      </text>
      <text x={cx} y={84} textAnchor="middle" fontSize={12} className="fill-ink">
        {rule}
      </text>
    </g>
  );
  const bubble = (cx: number, v: number, label: string) => (
    <g>
      <circle cx={cx} cy={68} r={22} className="fill-surface stroke-ink-2" strokeWidth={2} />
      <text x={cx} y={73} textAnchor="middle" fontSize={v !== Math.round(v) || Math.abs(v) >= 100 ? 11 : 14} fontWeight={800} className="fill-ink">
        {pfr(v)}
      </text>
      <text x={cx} y={112} textAnchor="middle" fontSize={11} className="fill-ink-2">
        {label}
      </text>
    </g>
  );
  const arrow = (x1: number, x2: number) => (
    <g>
      <line x1={x1} y1={68} x2={x2 - 6} y2={68} className="stroke-ink-2" strokeWidth={2} />
      <path d={`M${x2 - 8},62 L${x2},68 L${x2 - 8},74 Z`} className="fill-ink-2" />
    </g>
  );

  const aria = `Function machines for ${order}(x): the input ${pfr(x)} goes into ${first.name} first, giving ${pfr(mid)}, then into ${second.name}, giving ${pfr(out)}.`;

  return (
    <WidgetFrame
      title="Composite function machines"
      tryThis={[
        "With {{f(x) = 2x + 3}} and {{g(x) = x^2}}, compare fg(2) and gf(2). Predict both before you switch the order.",
        "Choose {{f(x) = 3x}} and {{g(x) = x^2}}. Is there any input where fg(x) = gf(x)?",
        "Find a pair f, g where fg(x) = x for every input. What does that tell you about g?",
        "Choose the same function for f and g to see ff(x). Which choice makes ff(x) = x?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            <M>{`${order}(x)`}</M> means <M>{`${order[0]}(${order[1]}(x))`}</M>: the function written <strong>next to the x</strong> acts first. Here{" "}
            {pfr(x)} goes into {first.name} and comes out as {pfr(mid)}; that output is the input for {second.name}, giving {pfr(out)}.
          </p>
          <p>
            Substituting the whole rule of {first.name} into {second.name} gives <M>{`${order}(x) = ${pstr(shown)}`}</M>.{" "}
            {identity
              ? "Both orders give x: each machine undoes the other, so g is the inverse of f."
              : commute
                ? "Here fg and gf happen to be the same function — that is unusual."
                : "Compare the table: fg and gf are different functions, so the order matters."}
          </p>
        </div>
      }
    >
      <div className="space-y-3">
        <FnPicker label="f" value={fId} onChange={setF} />
        <FnPicker label="g" value={gId} onChange={setG} />
        <div className="flex flex-wrap items-center justify-between gap-3">
          <Segmented
            label="Order"
            value={order}
            onChange={setOrder}
            options={[
              { value: "fg", label: "fg(x): g first" },
              { value: "gf", label: "gf(x): f first" },
            ]}
          />
          <Stepper label="Input x" value={x} min={-5} max={5} onChange={setX} format={pfr} />
        </div>
      </div>

      <svg viewBox={`0 0 ${W} ${H}`} className="mt-3 h-auto w-full" role="img" aria-label={aria}>
        <rect x={0} y={0} width={W} height={H} className="fill-surface" />
        {bubble(26, x, "input")}
        {arrow(48, 64)}
        {box(116, first.name, first.fn.plain)}
        {arrow(168, 186)}
        {bubble(208, mid, `${first.name}(${pfr(x)})`)}
        {arrow(230, 248)}
        {box(300, second.name, second.fn.plain)}
        {arrow(352, 366)}
        {bubble(388, out, `${order}(${pfr(x)})`)}
        <text x={W / 2} y={138} textAnchor="middle" fontSize={13} fontWeight={800} className="fill-accent">
          {`${order}(${pfr(x)}) = ${second.name}(${pfr(mid)}) = ${pfr(out)}`}
        </text>
      </svg>

      <div className="mt-3 grid grid-cols-2 gap-2">
        <Readout label="fg(x)" tone={order === "fg" ? "brand" : "ink"} value={<span className="text-base"><M>{pstr(fg)}</M></span>} />
        <Readout label="gf(x)" tone={order === "gf" ? "brand" : "ink"} value={<span className="text-base"><M>{pstr(gf)}</M></span>} />
      </div>

      <div className="mt-3 overflow-x-auto">
        <table className="w-full min-w-[300px] border-collapse text-center text-sm tabular-nums">
          <thead>
            <tr>
              <th className="border border-line bg-surface-2 px-1 py-1 text-ink-2">x</th>
              {xs.map((v) => (
                <th key={v} className={`border border-line px-1 py-1 ${v === x ? "bg-brand-soft text-brand" : "bg-surface-2 text-ink-2"}`}>
                  {pfr(v)}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {(["fg", "gf"] as const).map((row) => (
              <tr key={row}>
                <th className="border border-line px-1 py-1 text-ink-2">{row}(x)</th>
                {xs.map((v) => {
                  const a = pval(fg, v);
                  const b = pval(gf, v);
                  const val = row === "fg" ? a : b;
                  return (
                    <td key={v} className={`border border-line px-1 py-1 ${Math.abs(a - b) < 1e-9 ? "bg-good-soft text-good" : "text-ink"}`}>
                      {pfr(val)}
                    </td>
                  );
                })}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="mt-1 text-xs text-ink-2">Green cells: inputs where fg(x) and gf(x) agree.</p>
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Inverse mirror                                                          */
/* ------------------------------------------------------------------------ */

type Family = "lin" | "cube" | "sq";
const A_VALUES = [-3, -2.5, -2, -1.5, -1, -0.5, 0.5, 1, 1.5, 2, 2.5, 3];
const R = 6;

/** "a·v" as markup with a = ±1 and fractional a handled. */
function coefTerm(a: number, v: string): string {
  if (a === 1) return v;
  if (a === -1) return `-${v}`;
  const s = fr(a);
  return s.includes("/") ? `${s} ${v}` : `${s}${v}`;
}

/** (x − b)/a written tidily, e.g. "(x - 1)/3", "2 - x", "2(x + 1)/3". */
function undoLinear(a: number, b: number): string {
  const p = Math.round(a * 2);
  const q = 2;
  const g = gcd(p, q);
  const num = p / g; // a = num/den
  const den = q / g;
  const inner = num > 0 ? (b === 0 ? "x" : `x ${b > 0 ? "-" : "+"} ${Math.abs(b)}`) : b === 0 ? "-x" : `${b} - x`;
  const absNum = Math.abs(num);
  const top = den === 1 ? inner : `${den}(${inner})`;
  if (absNum === 1) return top;
  return den === 1 && !inner.includes(" ") && inner !== "-x" ? `${top}/${absNum}` : `(${top})/${absNum}`;
}

function InverseMirror() {
  const [family, setFamily] = useState<Family>("lin");
  const [ai, setAi] = useState(9); // a = 2
  const [b, setB] = useState(1);
  const [t, setT] = useState(1);
  const [restrict, setRestrict] = useState(true);
  const clipId = useId().replace(/:/g, "");

  const a = A_VALUES[ai];
  const restricted = family === "sq" && restrict;
  const tMin = restricted ? 0 : -3;
  const tt = Math.max(tMin, t);

  const f = (x: number) => (family === "lin" ? a * x + b : family === "cube" ? a * x * x * x + b : a * x * x + b);
  const domainLo = family === "sq" && restrict ? 0 : -R;

  const W = 340;
  const H = 340;
  const plane = makePlane({ width: W, height: H, xMin: -R, xMax: R, yMin: -R, yMax: R, pad: 16 });
  const { px, py } = plane;

  // f as y = f(x); f⁻¹ as the reflected set {(f(s), s)}.
  const N = 600;
  let dF = "";
  let dInv = "";
  let penF = false;
  let penI = false;
  for (let i = 0; i <= N; i++) {
    const s = domainLo + ((R - domainLo) * i) / N;
    const y = f(s);
    const okF = Math.abs(y) <= R * 3;
    dF += okF ? `${penF ? "L" : "M"}${px(s).toFixed(1)},${py(y).toFixed(1)}` : "";
    penF = okF;
    dInv += okF ? `${penI ? "L" : "M"}${px(y).toFixed(1)},${py(s).toFixed(1)}` : "";
    penI = okF;
  }

  const fx = family === "lin" ? `${coefTerm(a, "x")}${b ? ` ${b > 0 ? "+" : "-"} ${Math.abs(b)}` : ""}` : family === "cube" ? `${coefTerm(a, "x^3")}${b ? ` ${b > 0 ? "+" : "-"} ${Math.abs(b)}` : ""}` : `${coefTerm(a, "x^2")}${b ? ` ${b > 0 ? "+" : "-"} ${Math.abs(b)}` : ""}`;
  const undo = undoLinear(a, b);
  const inv = family === "lin" ? undo : family === "cube" ? `cbrt(${undo})` : `sqrt(${undo})`;
  const selfInverse = family === "lin" && a === -1;
  const invDomain = family === "sq" ? (a > 0 ? `x >= ${b}` : `x <= ${b}`) : "all real x";
  const fRange = family === "sq" ? (a > 0 ? `f(x) >= ${b}` : `f(x) <= ${b}`) : "all real values";

  const P: [number, number] = [tt, f(tt)];
  const Q: [number, number] = [f(tt), tt];
  const inView = (pt: [number, number]) => Math.abs(pt[0]) <= R && Math.abs(pt[1]) <= R;
  const exactY = fr(f(tt)).length <= 6 ? pfr(f(tt)) : rd(f(tt));

  const aria = `Graph of f(x) = ${fx} and its reflection in the line y = x. Point P (${pfr(tt)}, ${exactY}) on f reflects to P′ (${exactY}, ${pfr(tt)}).${family === "sq" && !restrict ? " Without a restricted domain the reflection is not a function." : ""}`;

  return (
    <WidgetFrame
      title="Inverse mirror"
      tryThis={[
        "Move P along f. What happens to its coordinates when it reflects to P′?",
        "Find a straight line that is its own inverse. (Hint: try a = −1 with different values of b.)",
        "Choose ax² + b and switch the restriction off. Why can't the reflected curve be a function?",
        "Set a = 2 and b = −3. Before looking, predict {{f^(-1)(5)}}, then check with P.",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            The inverse <M>{"f^(-1)"}</M> undoes f, so it swaps inputs and outputs: f sends {pfr(tt)} to {exactY}, and{" "}
            <M>{"f^(-1)"}</M> sends {exactY} back to {pfr(tt)}. Swapping x and y is exactly a reflection in the line <M>{"y = x"}</M>.
          </p>
          <p>
            Algebra gives the same thing: write <M>{`y = ${fx}`}</M>, make x the subject, then swap the letters to get{" "}
            <M>{`f^(-1)(x) = ${inv}`}</M>. The domain of <M>{"f^(-1)"}</M> is the range of f ({family === "sq" ? <M>{fRange}</M> : fRange}).
          </p>
          {selfInverse ? (
            <p className="font-bold text-good">
              With a = −1 the line is perpendicular to y = x, so reflecting it changes nothing: f is self-inverse, <M>{"f^(-1)(x) = f(x)"}</M>.
            </p>
          ) : null}
          {family === "sq" && !restrict ? (
            <p className="font-bold text-bad">
              Without a restriction, two inputs (such as ±1) give the same output, so the reflection sends one input to two outputs. That is not a function —
              restrict the domain to x ≥ 0 to make f one-to-one.
            </p>
          ) : null}
        </div>
      }
    >
      <div className="space-y-3">
        <Segmented
          label="Function family"
          value={family}
          onChange={(v) => {
            setFamily(v);
            setRestrict(true);
          }}
          options={[
            { value: "lin", label: <M>{"ax + b"}</M> },
            { value: "cube", label: <M>{"ax^3 + b"}</M> },
            { value: "sq", label: <M>{"ax^2 + b"}</M> },
          ]}
        />
      </div>

      <div className="mt-3 grid gap-4 md:grid-cols-[1fr_1fr]">
        <div>
          <svg viewBox={`0 0 ${W} ${H}`} className="mx-auto h-auto w-full max-w-sm" role="img" aria-label={aria}>
            <defs>
              <clipPath id={clipId}>
                <rect x={px(-R)} y={py(R)} width={px(R) - px(-R)} height={py(-R) - py(R)} />
              </clipPath>
            </defs>
            <rect x={0} y={0} width={W} height={H} className="fill-surface" />
            <PlaneGrid plane={plane} step={1} labels={false} />
            {[-4, -2, 2, 4].map((v) => (
              <g key={v}>
                <text x={px(v)} y={py(0) + 13} fontSize={10} textAnchor="middle" className="fill-ink-2">{v}</text>
                <text x={px(0) - 5} y={py(v) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">{v}</text>
              </g>
            ))}
            <g clipPath={`url(#${clipId})`}>
              <line x1={px(-R)} y1={py(-R)} x2={px(R)} y2={py(R)} className="stroke-ink-2" strokeWidth={1.5} strokeDasharray="6 5" />
              <path d={dInv} fill="none" className={family === "sq" && !restrict ? "stroke-bad" : "stroke-accent"} strokeWidth={3} strokeDasharray={family === "sq" && !restrict ? "2 5" : undefined} strokeLinecap="round" />
              <path d={dF} fill="none" className="stroke-brand" strokeWidth={3} strokeLinecap="round" />
              {inView(P) && inView(Q) ? (
                <line x1={px(P[0])} y1={py(P[1])} x2={px(Q[0])} y2={py(Q[1])} className="stroke-ink-2" strokeWidth={1.5} strokeDasharray="3 3" />
              ) : null}
              {inView(P) ? <circle cx={px(P[0])} cy={py(P[1])} r={6} className="fill-brand stroke-surface" strokeWidth={2} /> : null}
              {inView(Q) ? <circle cx={px(Q[0])} cy={py(Q[1])} r={6} className="fill-accent stroke-surface" strokeWidth={2} /> : null}
            </g>
            <text x={px(R) - 4} y={py(R) + 14} fontSize={11} textAnchor="end" className="fill-ink-2">y = x</text>
          </svg>
          <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-xs text-ink-2">
            <span className="inline-flex items-center gap-1"><span className="inline-block h-3 w-3 rounded-full bg-brand" aria-hidden /> f and P</span>
            <span className="inline-flex items-center gap-1"><span className="inline-block h-3 w-3 rounded-full bg-accent" aria-hidden /> f⁻¹ and P′</span>
            <span className="inline-flex items-center gap-1"><span className="inline-block h-0.5 w-4 bg-ink-2" aria-hidden /> mirror y = x</span>
          </div>
        </div>

        <div className="space-y-3">
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="mb-2 text-sm font-bold text-brand">
              <M>{`f(x) = ${fx}`}</M>
              {family === "sq" && restrict ? <span className="text-ink-2">, x ≥ 0</span> : null}
            </div>
            <Slider label="a" value={ai} min={0} max={A_VALUES.length - 1} onChange={setAi} format={(i) => pfr(A_VALUES[i])} />
            <Slider label="b" value={b} min={-4} max={4} onChange={setB} format={pfr} />
            <Slider label="Input at P" value={tt} min={tMin} max={3} step={0.5} onChange={setT} format={pfr} />
          </div>
          {family === "sq" ? (
            <label className="flex min-h-[40px] cursor-pointer items-center gap-2 rounded-xl border border-line bg-surface p-3 text-sm font-bold text-ink">
              <input type="checkbox" checked={restrict} onChange={(e) => setRestrict(e.target.checked)} className="h-5 w-5" />
              Restrict the domain of f to x ≥ 0
            </label>
          ) : null}
          <div className="grid grid-cols-2 gap-2">
            <Readout label="P on f" value={`(${pfr(tt)}, ${exactY})`} />
            <Readout label="P′ on f⁻¹" tone="ink" value={`(${exactY}, ${pfr(tt)})`} />
          </div>
          <Readout
            label="Inverse function"
            tone={family === "sq" && !restrict ? "bad" : "good"}
            value={family === "sq" && !restrict ? <span className="text-base">none — f is not one-to-one</span> : <span className="text-base"><M>{`f^(-1)(x) = ${inv}`}</M></span>}
          />
          {family === "sq" && restrict ? (
            <p className="text-sm text-ink-2">
              Domain of <M>{"f^(-1)"}</M>: <M>{invDomain}</M>
            </p>
          ) : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "composite-machines", title: "Composite function machines", blurb: "Feed a number through f and g in either order — see why fg and gf differ.", Component: CompositeMachines },
  { id: "inverse-mirror", title: "Inverse mirror", blurb: "Reflect a function in y = x to see its inverse, and find functions that are their own inverse.", Component: InverseMirror },
];
