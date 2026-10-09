"use client";
// Interactive explorables for "solving-equations" (Linear & Simultaneous Equations).
//  1. Two lines, one point — set the coefficients of ax + by = c and dx + ey = f,
//     watch both lines move, see the exact intersection, the elimination step that
//     finds it, and what happens when ae − bd = 0 (parallel or identical lines).
//  2. Undo machine — a formula as a chain of operations on the subject. Run it
//     forwards, then backwards (inverse operations in reverse order) to change the
//     subject, with a live numerical round-trip check. Includes a "subject appears
//     twice" mode where the machine breaks and you must collect and factorise.
import { useId, useState, type ReactNode } from "react";
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
/** Number rounded to dp for display. */
const rd = (v: number, dp = 3) => pn(+v.toFixed(dp));

/** Exact n/d as maths markup: "7/2", "-3", "-5/3". */
function fracMarkup(n: number, d: number): string {
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

/** "3x - 2y" style left side from coefficients. */
function lhs(a: number, b: number, vx = "x", vy = "y"): string {
  const t = (c: number, v: string) => (c === 1 ? v : c === -1 ? `-${v}` : `${c}${v}`);
  if (a === 0 && b === 0) return "0";
  if (a === 0) return t(b, vy);
  if (b === 0) return t(a, vx);
  return `${t(a, vx)} ${b < 0 ? "-" : "+"} ${t(Math.abs(b), vy)}`;
}

function lcm(a: number, b: number): number {
  return Math.abs(a * b) / gcd(a, b);
}

/* ------------------------------------------------------------------------ */
/* 1. Two lines, one point                                                    */
/* ------------------------------------------------------------------------ */

interface Sys {
  a: number;
  b: number;
  c: number;
  d: number;
  e: number;
  f: number;
}

const PRESETS: { name: string; s: Sys }[] = [
  { name: "Whole-number answer", s: { a: 2, b: 1, c: 7, d: 1, e: -1, f: -1 } },
  { name: "Scale both", s: { a: 3, b: 2, c: 4, d: 5, e: -3, f: 13 } },
  { name: "Fraction answer", s: { a: 2, b: 3, c: 5, d: 4, e: -1, f: 3 } },
  { name: "Parallel?", s: { a: 2, b: -1, c: 3, d: 4, e: -2, f: 2 } },
];

const XR = 10;

/** Two points spanning the visible window for ax + by = c (null if a = b = 0). */
function linePoints(a: number, b: number, c: number): [number, number, number, number] | null {
  if (a === 0 && b === 0) return null;
  if (b === 0) {
    const x = c / a;
    return [x, -XR, x, XR];
  }
  const y = (x: number) => (c - a * x) / b;
  return [-XR, y(-XR), XR, y(XR)];
}

function TwoLines() {
  const [s, setS] = useState<Sys>(PRESETS[0].s);
  const [preset, setPreset] = useState("0");
  const clipId = useId().replace(/:/g, "");
  const set = (k: keyof Sys) => (v: number) => {
    setS({ ...s, [k]: v });
    setPreset("");
  };
  const { a, b, c, d, e, f } = s;
  const det = a * e - b * d;
  const nx = c * e - b * f;
  const ny = a * f - c * d;
  const bad1 = a === 0 && b === 0;
  const bad2 = d === 0 && e === 0;
  const same = det === 0 && nx === 0 && ny === 0 && !bad1 && !bad2;
  const parallel = det === 0 && !same && !bad1 && !bad2;
  const px = det !== 0 ? nx / det : NaN;
  const py = det !== 0 ? ny / det : NaN;
  const inView = det !== 0 && Math.abs(px) <= XR && Math.abs(py) <= XR;

  const W = 320;
  const plane = makePlane({ width: W, height: W, xMin: -XR, xMax: XR, yMin: -XR, yMax: XR, pad: 18 });
  const l1 = linePoints(a, b, c);
  const l2 = linePoints(d, e, f);

  // Elimination of y (or x when y is missing from an equation).
  let elim: string[] = [];
  if (!bad1 && !bad2) {
    if (b !== 0 && e !== 0) {
      const L = lcm(b, e);
      const m1 = L / Math.abs(b);
      const m2 = L / Math.abs(e);
      const sameSign = b * e > 0;
      const K = sameSign ? m1 * a - m2 * d : m1 * a + m2 * d;
      const R = sameSign ? m1 * c - m2 * f : m1 * c + m2 * f;
      elim = [
        m1 === 1 && m2 === 1
          ? `The y-coefficients are already the same size (${Math.abs(b)}).`
          : `Make the y-coefficients both ${L}: multiply (1) by ${m1} and (2) by ${m2}.`,
        `The y-terms have ${sameSign ? "the same sign, so subtract" : "opposite signs, so add"}: {{${K === 0 ? "0" : lhs(K, 0)} = ${mn(R)}}}.`,
        K !== 0
          ? `So {{x = ${fracMarkup(R, K)}}}. Substitute back into (1) to find y.`
          : R === 0
            ? "Everything cancels to 0 = 0: the equations say the same thing, so every point on the line is a solution."
            : `Everything in x cancels, leaving 0 = ${pn(R)} — impossible. There is no solution.`,
      ];
    } else {
      const which = b === 0 ? "(1)" : "(2)";
      elim = [`${which} has no y-term, so it gives x straight away. Substitute that into the other equation to get y.`];
    }
  }

  const label = bad1 || bad2
    ? "One equation has no x or y term, so it is not a line."
    : same
      ? "Both equations describe the same line."
      : parallel
        ? "The two lines are parallel and never meet."
        : `The lines meet at (${rd(px)}, ${rd(py)}).`;

  return (
    <WidgetFrame
      title="Two lines, one point"
      tryThis={[
        "Change the numbers so the solution is (3, −2). How many different pairs of equations can do it?",
        "Make the two lines parallel. What is ae − bd every time? Why does elimination fail?",
        "Make equation (2) exactly 3 times equation (1). What happens to the picture and to the elimination?",
        "Find a system whose solution is not a whole number, e.g. x = {{7/5}}. Does the graph show it exactly?",
      ]}
      caption={
        <div className="space-y-2">
          <p>
            Every point on a line is a pair (x, y) that makes that equation true. The point where the lines cross is the only pair that makes{" "}
            <strong>both</strong> true — that is the solution of the simultaneous equations.
          </p>
          <p>
            Elimination is the algebra version of finding that crossing point. It fails exactly when <M>{"ae - bd = 0"}</M>: then the lines have the
            same gradient, so they are parallel (no solution) or the same line (infinitely many solutions).
          </p>
        </div>
      }
    >
      <div className="mb-3">
        <Segmented
          label="Example systems"
          value={preset}
          onChange={(v) => {
            setPreset(v);
            setS(PRESETS[Number(v)].s);
          }}
          options={PRESETS.map((p, i) => ({ value: String(i), label: p.name }))}
        />
      </div>
      <div className="grid gap-4 md:grid-cols-[1fr_1fr]">
        <div>
          <svg viewBox={`0 0 ${W} ${W}`} className="mx-auto h-auto w-full max-w-sm" role="img" aria-label={`Graph of ${lhs(a, b)} = ${c} and ${lhs(d, e)} = ${f}. ${label}`}>
            <defs>
              <clipPath id={clipId}>
                <rect x={plane.px(-XR)} y={plane.py(XR)} width={plane.px(XR) - plane.px(-XR)} height={plane.py(-XR) - plane.py(XR)} />
              </clipPath>
            </defs>
            <rect x={0} y={0} width={W} height={W} className="fill-surface" />
            <PlaneGrid plane={plane} step={2} />
            <g clipPath={`url(#${clipId})`}>
              {l1 ? <line x1={plane.px(l1[0])} y1={plane.py(l1[1])} x2={plane.px(l1[2])} y2={plane.py(l1[3])} className="stroke-brand" strokeWidth={same ? 6 : 3} strokeLinecap="round" /> : null}
              {l2 ? <line x1={plane.px(l2[0])} y1={plane.py(l2[1])} x2={plane.px(l2[2])} y2={plane.py(l2[3])} className="stroke-accent" strokeWidth={3} strokeDasharray={same ? "8 6" : undefined} strokeLinecap="round" /> : null}
              {inView ? (
                <g>
                  <circle cx={plane.px(px)} cy={plane.py(py)} r={7} className="fill-good stroke-surface" strokeWidth={2} />
                  <text x={plane.px(px) + (px > 5 ? -10 : 10)} y={plane.py(py) - 10} fontSize={12} fontWeight={800} textAnchor={px > 5 ? "end" : "start"} className="fill-ink">
                    ({rd(px, 2)}, {rd(py, 2)})
                  </text>
                </g>
              ) : null}
            </g>
          </svg>
          <div className="mt-2 flex flex-wrap justify-center gap-x-4 gap-y-1 text-sm">
            <span className="inline-flex items-center gap-2"><span className="inline-block h-1 w-6 rounded bg-brand" aria-hidden /> (1)</span>
            <span className="inline-flex items-center gap-2"><span className="inline-block h-1 w-6 rounded bg-accent" aria-hidden /> (2)</span>
          </div>
        </div>
        <div className="space-y-3">
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="mb-2 text-sm font-bold text-brand">
              (1) <M>{`${lhs(a, b)} = ${c}`}</M>
            </div>
            <div className="space-y-1">
              <Stepper label="a (x-coefficient)" value={a} min={-6} max={6} onChange={set("a")} format={pn} />
              <Stepper label="b (y-coefficient)" value={b} min={-6} max={6} onChange={set("b")} format={pn} />
              <Stepper label="c (right side)" value={c} min={-20} max={20} onChange={set("c")} format={pn} />
            </div>
          </div>
          <div className="rounded-xl border border-line bg-surface p-3">
            <div className="mb-2 text-sm font-bold text-accent">
              (2) <M>{`${lhs(d, e)} = ${f}`}</M>
            </div>
            <div className="space-y-1">
              <Stepper label="d (x-coefficient)" value={d} min={-6} max={6} onChange={set("d")} format={pn} />
              <Stepper label="e (y-coefficient)" value={e} min={-6} max={6} onChange={set("e")} format={pn} />
              <Stepper label="f (right side)" value={f} min={-20} max={20} onChange={set("f")} format={pn} />
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-2 sm:grid-cols-3">
        <Readout label="ae − bd" value={pn(det)} tone={det === 0 ? "bad" : "ink"} />
        <Readout
          label="Solution"
          tone={det === 0 ? "bad" : "good"}
          value={bad1 || bad2 ? "—" : same ? "infinitely many" : parallel ? "none" : <span><M>{`x = ${fracMarkup(nx, det)}`}</M>, <M>{`y = ${fracMarkup(ny, det)}`}</M></span>}
        />
        <Readout label="Picture" tone="ink" value={bad1 || bad2 ? "not a line" : same ? "same line" : parallel ? "parallel" : inView ? "they cross" : "cross off-screen"} />
      </div>

      {elim.length ? (
        <div className="mt-4 rounded-xl border border-line bg-surface p-3 text-sm">
          <div className="mb-1 font-bold text-ink-2">Elimination, live</div>
          <ol className="list-decimal space-y-1 pl-5 text-ink">
            {elim.map((t) => (
              <li key={t}>
                <RichInline text={t} />
              </li>
            ))}
          </ol>
          {det !== 0 ? (
            <p className="mt-2 text-ink-2">
              Check: <M>{`${lhs(a, b)}`}</M> at the solution gives {rd(a * px + b * py)} (needs {c}); <M>{`${lhs(d, e)}`}</M> gives {rd(d * px + e * py)} (needs {f}).
            </p>
          ) : null}
        </div>
      ) : null}
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Undo machine — changing the subject                                     */
/* ------------------------------------------------------------------------ */

interface Op {
  /** Forward label, e.g. "× 3". */
  fwd: string;
  /** Inverse label, e.g. "÷ 3". */
  inv: string;
  f: (v: number) => number;
  g: (v: number) => number;
}

type Mode = "linear" | "sphere" | "pendulum" | "twice";

function UndoMachine() {
  const [mode, setMode] = useState<Mode>("linear");
  const [a, setA] = useState(3);
  const [b, setB] = useState(-4);
  const [c, setC] = useState(2);
  const [x, setX] = useState(4);
  const [r, setR] = useState(3);
  const [l, setL] = useState(1.2);
  const [p, setP] = useState(2);
  const [q, setQ] = useState(3);
  const [xt, setXt] = useState(5);
  const [shown, setShown] = useState(0);

  const pick = (m: Mode) => {
    setMode(m);
    setShown(0);
  };

  /* ---- machine modes ---- */
  let subject = "x";
  let output = "y";
  let formula = "";
  let inverse = "";
  let ops: Op[] = [];
  let input = 0;
  let control: ReactNode = null;
  if (mode === "linear") {
    subject = "x";
    output = "y";
    formula = `y = (${lhs(a, 0)} ${b < 0 ? "-" : "+"} ${Math.abs(b)})/${c}`;
    inverse = `x = (${c === 1 ? "y" : `${c}y`} ${b < 0 ? "+" : "-"} ${Math.abs(b)})/${a}`;
    ops = [
      { fwd: `× ${pn(a)}`, inv: `÷ ${pn(a)}`, f: (v) => v * a, g: (v) => v / a },
      { fwd: b < 0 ? `− ${-b}` : `+ ${b}`, inv: b < 0 ? `+ ${-b}` : `− ${b}`, f: (v) => v + b, g: (v) => v - b },
      { fwd: `÷ ${c}`, inv: `× ${c}`, f: (v) => v / c, g: (v) => v * c },
    ];
    input = x;
    control = (
      <div className="space-y-1">
        <Stepper label="a (multiplies x)" value={a} min={-6} max={6} onChange={(v) => setA(v === 0 ? (a > 0 ? -1 : 1) : v)} format={pn} />
        <Stepper label="b (added)" value={b} min={-9} max={9} onChange={(v) => setB(v === 0 ? (b > 0 ? -1 : 1) : v)} format={pn} />
        <Stepper label="c (divides)" value={c} min={2} max={6} onChange={setC} />
        <Slider label={<>Try a value of x</>} value={x} min={-10} max={10} step={0.5} onChange={setX} format={pn} />
      </div>
    );
  } else if (mode === "sphere") {
    subject = "r";
    output = "V";
    formula = "V = 4/3 pi r^3";
    inverse = "r = cbrt((3V)/(4 pi))";
    ops = [
      { fwd: "cube", inv: "cube root", f: (v) => v ** 3, g: (v) => Math.cbrt(v) },
      { fwd: "× 4", inv: "÷ 4", f: (v) => v * 4, g: (v) => v / 4 },
      { fwd: "÷ 3", inv: "× 3", f: (v) => v / 3, g: (v) => v * 3 },
      { fwd: "× π", inv: "÷ π", f: (v) => v * Math.PI, g: (v) => v / Math.PI },
    ];
    input = r;
    control = <Slider label="Radius r (cm)" value={r} min={0.5} max={10} step={0.5} onChange={setR} format={(v) => `${v} cm`} />;
  } else if (mode === "pendulum") {
    subject = "l";
    output = "T";
    formula = "T = 2 pi sqrt(l/g)";
    inverse = "l = g (T/(2 pi))^2";
    ops = [
      { fwd: "÷ g", inv: "× g", f: (v) => v / 9.8, g: (v) => v * 9.8 },
      { fwd: "square root", inv: "square", f: (v) => Math.sqrt(v), g: (v) => v * v },
      { fwd: "× 2π", inv: "÷ 2π", f: (v) => v * 2 * Math.PI, g: (v) => v / (2 * Math.PI) },
    ];
    input = l;
    control = <Slider label="Length l (m), with g = 9.8" value={l} min={0.1} max={3} step={0.1} onChange={setL} format={(v) => `${+v.toFixed(1)} m`} />;
  }

  const fwdVals = [input];
  for (const op of ops) fwdVals.push(op.f(fwdVals[fwdVals.length - 1]));
  const out = fwdVals[fwdVals.length - 1];
  const invOps = [...ops].reverse();
  const invVals = [out];
  for (const op of invOps) invVals.push(op.g(invVals[invVals.length - 1]));
  const back = invVals[invVals.length - 1];
  const steps = invOps.length;

  /* ---- "appears twice" mode: y = (x + p)/(x − q) ---- */
  const yt = xt === q ? NaN : (xt + p) / (xt - q);
  const xBack = (q * yt + p) / (yt - 1);
  const twiceSteps = [
    `Start: {{y = (x + ${p})/(x - ${q})}}. x is in two places, so no single chain of operations reaches it.`,
    `Multiply both sides by {{(x - ${q})}}: {{y(x - ${q}) = x + ${p}}}.`,
    `Expand: {{xy - ${q}y = x + ${p}}}.`,
    `Collect the x-terms on one side, everything else on the other: {{xy - x = ${q}y + ${p}}}.`,
    `Factorise — x now appears once: {{x(y - 1) = ${q}y + ${p}}}.`,
    `Divide: {{x = (${q}y + ${p})/(y - 1)}}.`,
  ];

  const tryThis =
    mode === "twice"
      ? [
          "Slide x towards " + q + ". What happens to y — and why?",
          "Can y ever equal 1? Look at the rearranged formula, then try to make it happen with the slider.",
          "Before revealing each step, say it out loud. Which step is the one that makes x appear only once?",
        ]
      : [
          "Before pressing Reveal, predict the inverse of each box. In which order do they come?",
          mode === "linear" ? "Make a negative. Does the inverse formula still work? Check with the round trip." : mode === "sphere" ? "Double r. Why does V go up 8 times?" : "Make the pendulum 4 times as long. What happens to T?",
          "Spot the error: someone undoes {{y = (3x - 4)/2}} as {{x = y/2 + 4/3}}. Which two mistakes did they make?",
        ];

  return (
    <WidgetFrame
      title="Undo machine: changing the subject"
      tryThis={tryThis}
      caption={
        mode === "twice" ? (
          <p>
            When the subject appears twice, a chain of inverse operations can't reach it. Instead, get rid of fractions, gather every term containing{" "}
            <M>x</M> on one side, then <strong>factorise</strong> so x appears once. The new formula can&apos;t give y = 1 because that would mean dividing
            by zero — and indeed the original fraction never equals 1 (the top is always {p + q} more than the bottom).
          </p>
        ) : (
          <p>
            A formula is a machine: start with <M>{subject}</M>, apply operations in order, get <M>{output}</M>. To change the subject, run the machine
            backwards: undo each operation with its <strong>inverse</strong>, starting from the <strong>last</strong> one. Whatever you put in comes back
            out — the round trip is a free check of your rearranged formula.
          </p>
        )
      }
    >
      <div className="mb-3">
        <Segmented
          label="Choose a formula"
          value={mode}
          onChange={pick}
          options={[
            { value: "linear", label: "y = (ax + b)/c" },
            { value: "sphere", label: "Sphere V" },
            { value: "pendulum", label: "Pendulum T" },
            { value: "twice", label: "x appears twice" },
          ]}
        />
      </div>

      {mode !== "twice" ? (
        <div className="space-y-4">
          <div className="text-center text-lg font-bold text-ink">
            <M>{formula}</M>
          </div>
          {control}
          {/* Forward chain */}
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Forwards: building {output} from {subject}</div>
            <div className="flex flex-wrap items-center gap-1 text-sm">
              <span className="rounded-lg bg-brand-soft px-2 py-1 font-extrabold text-brand tabular-nums">
                {subject} = {rd(fwdVals[0])}
              </span>
              {ops.map((op, i) => (
                <span key={`f${i}`} className="inline-flex items-center gap-1">
                  <span aria-hidden className="text-ink-2">→</span>
                  <span className="rounded-lg border border-line bg-surface px-2 py-1 font-bold text-ink">{op.fwd}</span>
                  <span aria-hidden className="text-ink-2">→</span>
                  <span className="rounded-lg bg-surface-2 px-2 py-1 tabular-nums text-ink">{rd(fwdVals[i + 1])}</span>
                </span>
              ))}
            </div>
          </div>
          {/* Inverse chain */}
          <div>
            <div className="mb-1 text-xs font-bold uppercase tracking-wide text-ink-2">Backwards: undoing, last operation first</div>
            <div className="flex flex-wrap items-center gap-1 text-sm">
              <span className="rounded-lg bg-accent-soft px-2 py-1 font-extrabold text-ink tabular-nums">
                {output} = {rd(out)}
              </span>
              {invOps.map((op, i) => (
                <span key={`g${i}`} className="inline-flex items-center gap-1">
                  <span aria-hidden className="text-ink-2">→</span>
                  <span className={`rounded-lg border px-2 py-1 font-bold ${i < shown ? "border-accent bg-surface text-ink" : "border-dashed border-line bg-surface-2 text-ink-2"}`}>
                    {i < shown ? op.inv : "?"}
                  </span>
                  <span aria-hidden className="text-ink-2">→</span>
                  <span className="rounded-lg bg-surface-2 px-2 py-1 tabular-nums text-ink">{i < shown ? rd(invVals[i + 1]) : "…"}</span>
                </span>
              ))}
            </div>
          </div>
          <div className="flex flex-wrap gap-2">
            <button type="button" className="btn btn-primary min-h-[40px] px-4" onClick={() => setShown(Math.min(steps, shown + 1))} disabled={shown >= steps}>
              Reveal next inverse
            </button>
            <button type="button" className="btn btn-secondary min-h-[40px] px-4" onClick={() => setShown(shown >= steps ? 0 : steps)}>
              {shown >= steps ? "Hide all" : "Show all"}
            </button>
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Readout label="Rearranged formula" tone="brand" value={shown >= steps ? <M>{inverse}</M> : "reveal every step"} />
            <Readout
              label="Round trip"
              tone={shown >= steps ? (Math.abs(back - input) < 1e-9 ? "good" : "bad") : "ink"}
              value={shown >= steps ? `${subject} = ${rd(back)} ✓` : `${subject} = ${rd(input)} → ${output} → ?`}
            />
          </div>
        </div>
      ) : (
        <div className="space-y-4">
          <div className="space-y-1">
            <Stepper label="p in y = (x + p)/(x − q)" value={p} min={1} max={9} onChange={setP} />
            <Stepper label="q" value={q} min={1} max={9} onChange={setQ} />
            <Slider label="Try a value of x" value={xt} min={-10} max={10} step={0.5} onChange={setXt} format={pn} />
          </div>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            <Readout label={`y when x = ${pn(xt)}`} tone={Number.isFinite(yt) ? "brand" : "bad"} value={Number.isFinite(yt) ? rd(yt) : "undefined (÷ 0)"} />
            <Readout
              label="Put y into the new formula"
              tone={Number.isFinite(yt) && shown >= twiceSteps.length ? "good" : "ink"}
              value={!Number.isFinite(yt) ? "—" : shown >= twiceSteps.length ? `x = ${rd(xBack)} ✓` : "finish the steps first"}
            />
          </div>
          <ol className="list-decimal space-y-1 rounded-xl border border-line bg-surface p-3 pl-8 text-sm text-ink">
            {twiceSteps.slice(0, Math.max(1, shown)).map((t) => (
              <li key={t}>
                <RichInline text={t} />
              </li>
            ))}
          </ol>
          <div className="flex flex-wrap gap-2">
            <button
              type="button"
              className="btn btn-primary min-h-[40px] px-4"
              onClick={() => setShown(Math.min(twiceSteps.length, Math.max(1, shown) + 1))}
              disabled={shown >= twiceSteps.length}
            >
              Next step
            </button>
            <button type="button" className="btn btn-secondary min-h-[40px] px-4" onClick={() => setShown(0)}>
              Start again
            </button>
          </div>
        </div>
      )}
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "two-lines-one-point",
    title: "Two lines, one point",
    blurb: "Simultaneous equations as two straight lines: move them and watch the solution, and the elimination, change live.",
    Component: TwoLines,
  },
  {
    id: "undo-machine",
    title: "Undo machine: changing the subject",
    blurb: "Run a formula forwards, then undo it backwards to make a new subject — and see why it breaks when the subject appears twice.",
    Component: UndoMachine,
  },
];
