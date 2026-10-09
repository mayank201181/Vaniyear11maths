"use client";
// Interactive explorables for "inequalities".
//  1. Region builder — up to three linear inequalities (y ? mx + c, x ? k, y ? k).
//     The region satisfying all of them is shaded, solid/dashed boundaries follow
//     ≤/≥ vs </>, integer points inside are counted, and a movable test point is
//     checked against every inequality.
//  2. Quadratic inequality explorer — steppers for a, b, c and a choice of
//     < ≤ > ≥. The parabola is drawn with the part that satisfies the inequality
//     highlighted, the solution set is shown on a number line, in inequality form
//     and in set notation (including the "all x" / "no x" / single-point cases).
import { useId, useState, type ReactNode } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, M, makePlane, PlaneGrid, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* Helpers                                                                    */
/* ------------------------------------------------------------------------ */

type Op = "<" | "<=" | ">" | ">=";
const SYM: Record<Op, string> = { "<": "<", "<=": "≤", ">": ">", ">=": "≥" };
const FLIP: Record<Op, Op> = { "<": ">", ">": "<", "<=": ">=", ">=": "<=" };
const isLess = (op: Op): boolean => op[0] === "<";
const isIncl = (op: Op): boolean => op.length === 2;
const OP_OPTIONS: { value: Op; label: string }[] = [
  { value: "<", label: "<" },
  { value: "<=", label: "≤" },
  { value: ">", label: ">" },
  { value: ">=", label: "≥" },
];

const cl = (v: number): number => parseFloat(v.toPrecision(12));

/** Decimal for display with a real minus sign. */
function fmt(v: number, dp = 2): string {
  const r = Number(v.toFixed(dp));
  const s = String(Object.is(r, -0) ? 0 : r);
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

/** "mx + c" as plain text with real minus signs. */
function linText(m: number, c: number): string {
  const mm = cl(m);
  let s = "";
  if (mm !== 0) s = mm === 1 ? "x" : mm === -1 ? "−x" : `${fmt(mm)}x`;
  if (c !== 0 || !s) s = s ? `${s} ${c < 0 ? "−" : "+"} ${fmt(Math.abs(c))}` : fmt(c);
  return s;
}

/* ------------------------------------------------------------------------ */
/* 1. Region builder                                                          */
/* ------------------------------------------------------------------------ */

type Kind = "slope" | "vert" | "horiz";
interface Ineq {
  on: boolean;
  kind: Kind;
  m: number;
  c: number;
  op: Op;
}
type Pt = [number, number];

/** As A x + B y op C. */
function half(q: Ineq): { A: number; B: number; C: number; op: Op } {
  if (q.kind === "vert") return { A: 1, B: 0, C: q.c, op: q.op };
  if (q.kind === "horiz") return { A: 0, B: 1, C: q.c, op: q.op };
  return { A: -q.m, B: 1, C: q.c, op: q.op };
}
const lhsOf = (q: Ineq): string => (q.kind === "vert" ? "x" : "y");
const rhsOf = (q: Ineq): string => (q.kind === "slope" ? linText(q.m, q.c) : fmt(q.c));
const label = (q: Ineq): string => `${lhsOf(q)} ${SYM[q.op]} ${rhsOf(q)}`;

function satisfies(q: Ineq, x: number, y: number): boolean {
  const h = half(q);
  const L = cl(h.A * x + h.B * y);
  return h.op === "<" ? L < h.C : h.op === "<=" ? L <= h.C : h.op === ">" ? L > h.C : L >= h.C;
}

/** Clip a convex polygon to the closed half-plane of q. */
function clipPoly(poly: Pt[], q: Ineq): Pt[] {
  const h = half(q);
  const f = (p: Pt) => (isLess(h.op) ? h.C - (h.A * p[0] + h.B * p[1]) : h.A * p[0] + h.B * p[1] - h.C);
  const out: Pt[] = [];
  for (let i = 0; i < poly.length; i++) {
    const P = poly[i];
    const Q = poly[(i + 1) % poly.length];
    const fp = f(P);
    const fq = f(Q);
    if (fp >= 0) out.push(P);
    if ((fp >= 0) !== (fq >= 0)) {
      const t = fp / (fp - fq);
      out.push([P[0] + t * (Q[0] - P[0]), P[1] + t * (Q[1] - P[1])]);
    }
  }
  return out;
}

/** The boundary line inside the square [-R, R]². */
function boundary(q: Ineq, R: number): [Pt, Pt] | null {
  const h = half(q);
  const pts: Pt[] = [];
  if (h.B !== 0)
    for (const x of [-R, R]) {
      const y = (h.C - h.A * x) / h.B;
      if (y >= -R - 1e-9 && y <= R + 1e-9) pts.push([x, y]);
    }
  if (h.A !== 0)
    for (const y of [-R, R]) {
      const x = (h.C - h.B * y) / h.A;
      if (x >= -R - 1e-9 && x <= R + 1e-9) pts.push([x, y]);
    }
  if (pts.length < 2) return null;
  pts.sort((p, r) => p[0] - r[0] || p[1] - r[1]);
  return [pts[0], pts[pts.length - 1]];
}

const LINE_CLASS = ["stroke-brand", "stroke-accent", "stroke-good"];
const CHIP_CLASS = ["text-brand", "text-accent", "text-good"];

function IneqControls({ q, i, onChange }: { q: Ineq; i: number; onChange: (q: Ineq) => void }) {
  return (
    <div className={`space-y-2 rounded-xl border border-line p-3 ${q.on ? "bg-surface" : "bg-surface-2 opacity-70"}`}>
      <div className="flex items-center justify-between gap-2">
        <span className={`font-extrabold ${CHIP_CLASS[i]}`}>
          {i + 1}. {q.on ? label(q) : "off"}
        </span>
        <button type="button" className="kbd min-h-[40px] px-3" onClick={() => onChange({ ...q, on: !q.on })} aria-pressed={q.on} aria-label={`Inequality ${i + 1} ${q.on ? "on" : "off"}`}>
          {q.on ? "On" : "Off"}
        </button>
      </div>
      {q.on ? (
        <>
          <Segmented<Kind>
            label={`Type of inequality ${i + 1}`}
            value={q.kind}
            onChange={(kind) => onChange({ ...q, kind, m: kind === "slope" ? q.m || 1 : q.m })}
            options={[
              { value: "slope", label: "y ? mx + c" },
              { value: "vert", label: "x ? k" },
              { value: "horiz", label: "y ? k" },
            ]}
          />
          <Segmented<Op> label={`Sign of inequality ${i + 1}`} value={q.op} onChange={(op) => onChange({ ...q, op })} options={OP_OPTIONS} />
          {q.kind === "slope" ? <Stepper label="gradient m" value={q.m} min={-3} max={3} step={0.5} onChange={(m) => onChange({ ...q, m })} format={fmt} /> : null}
          <Stepper label={q.kind === "slope" ? "intercept c" : "k"} value={q.c} min={-5} max={5} onChange={(c) => onChange({ ...q, c })} format={fmt} />
        </>
      ) : null}
    </div>
  );
}

function RegionBuilder() {
  const [qs, setQs] = useState<Ineq[]>([
    { on: true, kind: "horiz", m: 1, c: -1, op: ">=" },
    { on: true, kind: "slope", m: 2, c: 2, op: "<" },
    { on: true, kind: "slope", m: -1, c: 4, op: "<=" },
  ]);
  const [tx, setTx] = useState(1);
  const [ty, setTy] = useState(1);
  const R = 6;
  const W = 360;
  const plane = makePlane({ width: W, height: W, xMin: -R, xMax: R, yMin: -R, yMax: R, pad: 20 });
  const { px, py } = plane;
  const active = qs.filter((q) => q.on);

  let region: Pt[] = [
    [-R, -R],
    [R, -R],
    [R, R],
    [-R, R],
  ];
  for (const q of active) region = clipPoly(region, q);
  const inside: Pt[] = [];
  for (let x = -R; x <= R; x++) for (let y = -R; y <= R; y++) if (active.every((q) => satisfies(q, x, y))) inside.push([x, y]);
  const touchesEdge = region.some((p) => Math.abs(Math.abs(p[0]) - R) < 1e-9 || Math.abs(Math.abs(p[1]) - R) < 1e-9);
  const empty = region.length < 3 && inside.length === 0;
  let best: Pt | null = null;
  for (const p of inside) if (!best || p[0] + p[1] > best[0] + best[1]) best = p;
  const testIn = active.every((q) => satisfies(q, tx, ty));

  const setQ = (i: number) => (q: Ineq) => setQs(qs.map((o, j) => (j === i ? q : o)));
  const aria = `Grid from −${R} to ${R}. ${active.length ? `Shaded region satisfies ${active.map(label).join(", ")}.` : "No inequalities switched on."} ${inside.length} integer points inside. Test point (${tx}, ${ty}) is ${testIn ? "inside" : "outside"} the region.`;

  let caption: ReactNode;
  if (!active.length) caption = <>Switch on at least one inequality to shade a region.</>;
  else if (empty) caption = <>No point satisfies all of these at once — the half-planes don&apos;t overlap, so the region is <strong>empty</strong>. Try flipping one of the signs.</>;
  else
    caption = (
      <>
        The shaded region is where <strong>all</strong> {active.length === 1 ? "of the inequality" : `${active.length} inequalities`} hold at once. {inside.length} point{inside.length === 1 ? "" : "s"} with integer coordinates
        {touchesEdge ? " on this grid" : ""} lie in it (the dots).{" "}
        {active.some((q) => !isIncl(q.op)) ? <>Dashed lines are for &lt; or &gt;: points <em>on</em> a dashed line do <strong>not</strong> count. </> : <>All the lines are solid (≤ or ≥), so points on the boundary count. </>}
        {touchesEdge ? <>The region runs off the edge of the grid — it is <strong>unbounded</strong>, so there are really infinitely many integer points.</> : best ? <>The greatest value of x + y in the region is {best[0] + best[1]}, at ({fmt(best[0])}, {fmt(best[1])}) — always look near a corner.</> : null}
      </>
    );

  return (
    <WidgetFrame
      title="Region builder"
      tryThis={[
        "Make a triangle that contains exactly 6 integer points.",
        "Change one boundary from ≤ to <. Which dots disappear, and why?",
        "Build {{x >= 0}}, {{y >= 0}}, {{y <= -x + 4}}. Count the dots — do you see 1 + 2 + 3 + 4 + 5?",
        "Move the test point onto a dashed line. Is it in the region?",
      ]}
      caption={caption}
    >
      <div className="grid gap-4 lg:grid-cols-[1fr_1fr]">
        <div className="space-y-3">
          {qs.map((q, i) => (
            <IneqControls key={i} q={q} i={i} onChange={setQ(i)} />
          ))}
        </div>
        <div className="space-y-3">
          <svg viewBox={`0 0 ${W} ${W}`} className="h-auto w-full" role="img" aria-label={aria}>
            <rect x={0} y={0} width={W} height={W} className="fill-surface" />
            {active.length && region.length >= 3 ? <polygon points={region.map((p) => `${px(p[0])},${py(p[1])}`).join(" ")} className="fill-brand-soft" opacity={0.9} /> : null}
            <PlaneGrid plane={plane} step={1} />
            {qs.map((q, i) => {
              if (!q.on) return null;
              const seg = boundary(q, R);
              if (!seg) return null;
              return (
                <line
                  key={i}
                  x1={px(seg[0][0])}
                  y1={py(seg[0][1])}
                  x2={px(seg[1][0])}
                  y2={py(seg[1][1])}
                  className={LINE_CLASS[i]}
                  strokeWidth={2.5}
                  strokeDasharray={isIncl(q.op) ? undefined : "7 5"}
                />
              );
            })}
            {inside.map(([x, y]) => (
              <circle key={`${x},${y}`} cx={px(x)} cy={py(y)} r={3.5} className="fill-ink" />
            ))}
            <circle cx={px(tx)} cy={py(ty)} r={8} fill="none" className={testIn ? "stroke-good" : "stroke-bad"} strokeWidth={3} />
          </svg>
          <div className="grid grid-cols-2 gap-2">
            <Readout label="Integer points" value={empty || !active.length ? "—" : touchesEdge ? `${inside.length}+` : inside.length} />
            <Readout label="Greatest x + y" value={best && !touchesEdge ? best[0] + best[1] : "—"} tone="ink" />
          </div>
          <div className="space-y-2 rounded-xl border border-line p-3">
            <p className="text-sm font-bold text-ink">Test a point (ringed on the grid)</p>
            <div className="grid gap-2 sm:grid-cols-2">
              <Stepper label="x" value={tx} min={-R} max={R} onChange={setTx} />
              <Stepper label="y" value={ty} min={-R} max={R} onChange={setTy} />
            </div>
            <ul className="space-y-1 text-sm">
              {active.map((q, i) => {
                const ok = satisfies(q, tx, ty);
                const rhsVal = q.kind === "slope" ? cl(q.m * tx + q.c) : q.c;
                const lhsVal = q.kind === "vert" ? tx : ty;
                return (
                  <li key={i} className={ok ? "text-good" : "text-bad"}>
                    {ok ? "✓" : "✗"} {label(q)}: {lhsOf(q)} = {fmt(lhsVal)}
                    {q.kind === "slope" ? `, ${rhsOf(q)} = ${fmt(rhsVal)}` : ""} → {fmt(lhsVal)} {SYM[q.op]} {fmt(rhsVal)} is {ok ? "true" : "false"}
                  </li>
                );
              })}
            </ul>
            <p className={`text-sm font-bold ${testIn ? "text-good" : "text-bad"}`}>
              ({fmt(tx)}, {fmt(ty)}) is {testIn ? "in" : "not in"} the region{active.length ? "" : " (no inequalities on)"}.
            </p>
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Quadratic inequality explorer                                          */
/* ------------------------------------------------------------------------ */

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

/** Exact root (−B + sign·√D)/(2A) as maths markup, A > 0. */
function exactRoot(A: number, B: number, D: number, sign: 1 | -1): string {
  const r = Math.sqrt(D);
  if (Number.isInteger(r)) {
    let n = -B + sign * r;
    let d = 2 * A;
    const g = gcd(n, d);
    n /= g;
    d /= g;
    return d === 1 ? `${n}` : `${n < 0 ? "-" : ""}${Math.abs(n)}/${d}`;
  }
  const [s, t] = surdSplit(D);
  let p = -B;
  let q = s;
  let d = 2 * A;
  const g = gcd(gcd(p, q), d);
  p /= g;
  q /= g;
  d /= g;
  const surd = `${q === 1 ? "" : q}sqrt(${t})`;
  const top = p === 0 ? `${sign < 0 ? "-" : ""}${surd}` : `${p} ${sign < 0 ? "-" : "+"} ${surd}`;
  return d === 1 ? top : `(${top})/${d}`;
}

/** ax² + bx + c as maths markup (zero terms dropped). */
function quadMk(a: number, b: number, c: number): string {
  const parts: string[] = [];
  const t = (co: number, v: string) => {
    if (co === 0) return;
    const abs = Math.abs(co);
    const body = v ? (abs === 1 ? v : `${abs}${v}`) : `${abs}`;
    parts.push(parts.length ? `${co < 0 ? "-" : "+"} ${body}` : `${co < 0 ? "-" : ""}${body}`);
  };
  t(a, "x^2");
  t(b, "x");
  t(c, "");
  return parts.join(" ") || "0";
}

type SolKind = "between" | "outside" | "all" | "none" | "point" | "allBut";

function QuadraticInequality() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-2);
  const [c, setC] = useState(-8);
  const [op, setOp] = useState<Op>("<");
  const clip = useId().replace(/:/g, "");

  // Normalise to a positive x² coefficient (multiplying by −1 flips the sign).
  const neg = a < 0;
  const A = neg ? -a : a;
  const B = neg ? -b : b;
  const C = neg ? -c : c;
  const nop: Op = neg ? FLIP[op] : op;
  const D = B * B - 4 * A * C;
  const r1 = D >= 0 ? (-B - Math.sqrt(D)) / (2 * A) : NaN;
  const r2 = D >= 0 ? (-B + Math.sqrt(D)) / (2 * A) : NaN;
  const e1 = D >= 0 ? exactRoot(A, B, D, -1) : "";
  const e2 = D >= 0 ? exactRoot(A, B, D, 1) : "";
  const less = isLess(nop);
  const incl = isIncl(nop);

  let kind: SolKind;
  if (D > 0) kind = less ? "between" : "outside";
  else if (D === 0) kind = nop === "<" ? "none" : nop === "<=" ? "point" : nop === ">" ? "allBut" : "all";
  else kind = less ? "none" : "all";

  const le = incl ? "<=" : "<";
  const ge = incl ? ">=" : ">";
  const W = 360;
  const H = 300;
  const XM = 8;
  const YM = 20;
  const plane = makePlane({ width: W, height: H, xMin: -XM, xMax: XM, yMin: -YM, yMax: YM, pad: 22 });
  const { px, py } = plane;
  const f = (x: number) => a * x * x + b * x + c;
  const N = 320;
  const full: string[] = [];
  const good: string[] = [];
  let pen = false;
  for (let i = 0; i <= N; i++) {
    const x = -XM + (2 * XM * i) / N;
    const y = Math.max(-200, Math.min(200, f(x)));
    full.push(`${i ? "L" : "M"}${px(x).toFixed(1)},${py(y).toFixed(1)}`);
    const v = f(x);
    const ok = op === "<" || op === "<=" ? v < 0 || (op === "<=" && Math.abs(v) < 1e-9) : v > 0 || (op === ">=" && Math.abs(v) < 1e-9);
    if (ok) {
      good.push(`${pen ? "L" : "M"}${px(x).toFixed(1)},${py(y).toFixed(1)}`);
      pen = true;
    } else pen = false;
  }

  // solution intervals on the x-axis (clipped to the window)
  const segs: Array<[number, number]> = [];
  if (kind === "between") segs.push([r1, r2]);
  if (kind === "outside") segs.push([-XM - 1, r1], [r2, XM + 1]);
  if (kind === "all" || kind === "allBut") segs.push([-XM - 1, XM + 1]);
  const crit = D > 0 ? [r1, r2] : D === 0 ? [r1] : [];

  const eq = `${quadMk(a, b, c)} ${op} 0`;

  const NL_H = 60;
  const nlY = 32;
  const answerNode: ReactNode =
    kind === "all" ? (
      <>every real number x</>
    ) : kind === "none" ? (
      <>no real values of x</>
    ) : kind === "outside" ? (
      <>
        <M>{`x ${le} ${e1}`}</M> or <M>{`x ${ge} ${e2}`}</M>
      </>
    ) : kind === "between" ? (
      <M>{`${e1} ${le} x ${le} ${e2}`}</M>
    ) : kind === "point" ? (
      <M>{`x = ${e1}`}</M>
    ) : (
      <>
        every x except <M>{`x = ${e1}`}</M>
      </>
    );
  const setNode: ReactNode =
    kind === "all" ? (
      <>ℝ (all real numbers)</>
    ) : kind === "none" ? (
      <>∅ (the empty set)</>
    ) : kind === "point" ? (
      <>
        {"{ "}
        <M>{e1}</M>
        {" }"}
      </>
    ) : kind === "allBut" ? (
      <>
        {"{ x : "}
        <M>{`x != ${e1}`}</M>
        {" }"}
      </>
    ) : kind === "between" ? (
      <>
        {"{ x : "}
        <M>{`${e1} ${le} x ${le} ${e2}`}</M>
        {" }"}
      </>
    ) : (
      <>
        {"{ x : "}
        <M>{`x ${le} ${e1}`}</M>
        {" } ∪ { x : "}
        <M>{`x ${ge} ${e2}`}</M>
        {" }"}
      </>
    );

  const shape = a > 0 ? "U-shaped (∪)" : "∩-shaped";
  const want = isLess(op) ? "below" : "above";
  let caption: ReactNode;
  if (D > 0)
    caption = (
      <>
        The graph is {shape} and crosses the x-axis at the critical values <M>{`x = ${e1}`}</M> and <M>{`x = ${e2}`}</M>. &ldquo;{SYM[op]} 0&rdquo; asks where the curve is{" "}
        <strong>{want}</strong> the x-axis{incl ? " or on it" : ""}: {kind === "between" ? "the part between the roots" : "the two outer arms"}. {incl ? "The critical values are included (filled circles)." : "The critical values are not included (open circles)."}
        {neg ? <> Because <M>{"a < 0"}</M>, you could multiply by −1 and flip the sign: <M>{`${quadMk(-a, -b, -c)} ${FLIP[op]} 0`}</M> gives the same answer.</> : null}
      </>
    );
  else if (D === 0)
    caption = (
      <>
        The discriminant is 0, so the {shape} graph just <strong>touches</strong> the x-axis at <M>{`x = ${e1}`}</M> and is {a > 0 ? "above" : "below"} it everywhere else. That is why the answer is{" "}
        {kind === "none" ? "no values at all" : kind === "point" ? "just that single value" : kind === "allBut" ? "every x except that one value" : "every real number"}.
      </>
    );
  else
    caption = (
      <>
        The discriminant is negative ({D}), so the {shape} graph never meets the x-axis — it is {a > 0 ? "always above" : "always below"} it. So &ldquo;{SYM[op]} 0&rdquo; is true for{" "}
        {kind === "all" ? "every x" : "no x at all"}.
      </>
    );

  const aria = `Graph of y = ${eq.replace(/ [<>]=? 0$/, "")}. ${D > 0 ? `Critical values ${fmt(r1)} and ${fmt(r2)}.` : D === 0 ? `Touches the x-axis at ${fmt(r1)}.` : "Does not meet the x-axis."} Solution highlighted where the curve is ${want} the axis.`;

  return (
    <WidgetFrame
      title="Quadratic inequality explorer"
      tryThis={[
        "Solve {{x^2 - 2x - 8 < 0}} in your head first, then check it here. Now switch to > — what changes?",
        "Make a negative. Why does \"< 0\" now give the two outer pieces?",
        "Find a, b, c where {{... > 0}} is true for EVERY x. What must the discriminant be?",
        "Make the graph touch the axis (D = 0). Compare the answers for <, ≤, > and ≥.",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="grid gap-3 sm:grid-cols-3">
          <Stepper label="a (not 0)" value={a} min={-3} max={3} onChange={(v) => setA(v === 0 ? (a > 0 ? -1 : 1) : v)} />
          <Slider label="b" value={b} min={-8} max={8} onChange={setB} />
          <Slider label="c" value={c} min={-12} max={12} onChange={setC} />
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <Segmented<Op> label="Inequality sign" value={op} onChange={setOp} options={OP_OPTIONS} />
        </div>
        <p className="text-center text-lg">
          <M>{eq}</M>
        </p>

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={aria}>
          <defs>
            <clipPath id={clip}>
              <rect x={px(-XM)} y={py(YM)} width={px(XM) - px(-XM)} height={py(-YM) - py(YM)} />
            </clipPath>
          </defs>
          <rect x={0} y={0} width={W} height={H} className="fill-surface" />
          <PlaneGrid plane={plane} step={2} />
          <g clipPath={`url(#${clip})`}>
            <path d={full.join(" ")} fill="none" className="stroke-ink-2" strokeWidth={1.5} />
            <path d={good.join(" ")} fill="none" className="stroke-good" strokeWidth={4} />
            {segs.map(([u, v], i) => (
              <line key={i} x1={px(Math.max(u, -XM - 1))} x2={px(Math.min(v, XM + 1))} y1={py(0)} y2={py(0)} className="stroke-brand" strokeWidth={5} strokeLinecap="round" />
            ))}
            {crit.map((x, i) =>
              x >= -XM && x <= XM ? (
                <circle key={i} cx={px(x)} cy={py(0)} r={5.5} className={`${incl ? "fill-brand" : "fill-surface"} stroke-brand`} strokeWidth={2} />
              ) : null,
            )}
          </g>
        </svg>

        <svg viewBox={`0 0 ${W} ${NL_H}`} className="h-auto w-full" role="img" aria-label={`Number line from −${XM} to ${XM} showing the solution set`}>
          <rect x={0} y={0} width={W} height={NL_H} className="fill-surface" />
          <line x1={px(-XM)} x2={px(XM)} y1={nlY} y2={nlY} className="stroke-ink-2" strokeWidth={1.5} />
          {Array.from({ length: 2 * XM + 1 }, (_, i) => i - XM).map((x) => (
            <g key={x}>
              <line x1={px(x)} x2={px(x)} y1={nlY - 4} y2={nlY + 4} className="stroke-ink-2" strokeWidth={1} />
              {x % 2 === 0 ? (
                <text x={px(x)} y={nlY + 18} fontSize={10} textAnchor="middle" className="fill-ink-2">
                  {fmt(x)}
                </text>
              ) : null}
            </g>
          ))}
          {segs.map(([u, v], i) => (
            <line key={i} x1={px(Math.max(u, -XM))} x2={px(Math.min(v, XM))} y1={nlY - 12} y2={nlY - 12} className="stroke-brand" strokeWidth={4} strokeLinecap="round" />
          ))}
          {kind === "point" ? <circle cx={px(r1)} cy={nlY - 12} r={5.5} className="fill-brand stroke-brand" strokeWidth={2} /> : null}
          {kind !== "point" && kind !== "none" && kind !== "all"
            ? crit.map((x, i) =>
                x >= -XM && x <= XM ? <circle key={i} cx={px(x)} cy={nlY - 12} r={5.5} className={`${incl && kind !== "allBut" ? "fill-brand" : "fill-surface"} stroke-brand`} strokeWidth={2} /> : null,
              )
            : null}
        </svg>
        {crit.some((x) => x < -XM || x > XM) ? <p className="text-xs text-ink-2">(A critical value is off the edge of this window.)</p> : null}

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Discriminant" value={D} tone={D > 0 ? "good" : D === 0 ? "brand" : "bad"} />
          <Readout label="Shape" value={a > 0 ? "∪" : "∩"} tone="ink" />
          <Readout label="Critical x" value={D > 0 ? `${fmt(r1)}, ${fmt(r2)}` : D === 0 ? fmt(r1) : "none"} tone="ink" />
          <Readout label={`Want curve`} value={want} tone="ink" />
        </div>
        <div className="space-y-1 rounded-xl bg-surface-2 p-3 text-sm leading-relaxed">
          <p>
            <strong>Solution:</strong> {answerNode}
          </p>
          <p>
            <strong>Set notation:</strong> {setNode}
          </p>
          {D > 0 && !Number.isInteger(Math.sqrt(D)) ? <p className="text-ink-2">The critical values are surds: ≈ {fmt(r1)} and {fmt(r2)}.</p> : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "region-builder",
    title: "Region builder",
    blurb: "Combine up to three inequalities, see the region they define, count its integer points and test any point.",
    Component: RegionBuilder,
  },
  {
    id: "quadratic-inequality",
    title: "Quadratic inequality explorer",
    blurb: "Change a, b, c and the sign — watch which part of the parabola (and of the number line) satisfies the inequality.",
    Component: QuadraticInequality,
  },
];
