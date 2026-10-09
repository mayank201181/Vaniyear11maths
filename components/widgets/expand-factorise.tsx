"use client";
// Interactive explorables for "Expanding, Factorising & Substitution".
//  1. Bracket multiplier — expand (ax + b)(cx + d), optionally × (x + e), with the grid
//     method and like terms colour-coded; then run it backwards to factorise a target
//     quadratic (including a ≠ 1) by adjusting the brackets until the product matches.
//  2. Completing-the-square grapher — sliders for a, b, c in f(x) = ax² + bx + c show
//     the exact form a(x + p)² + q, the turning point, the discriminant and roots, and
//     a substitution point (k, f(k)) on the curve.
import { Fragment, useId, useState, type ReactNode } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, M, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* Shared helpers                                                            */
/* ------------------------------------------------------------------------ */

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x;
}

/** Polynomial as coefficients from the constant upwards: [c0, c1, c2, …]. */
type Poly = number[];

function pmul(a: Poly, b: Poly): Poly {
  const out: Poly = new Array(a.length + b.length - 1).fill(0);
  a.forEach((x, i) => b.forEach((y, j) => (out[i + j] += x * y)));
  return out;
}

const samePoly = (a: Poly, b: Poly) => {
  const n = Math.max(a.length, b.length);
  for (let i = 0; i < n; i++) if ((a[i] ?? 0) !== (b[i] ?? 0)) return false;
  return true;
};

/** Unsigned term as maths markup: 3x^2, x, 7. */
function absTermMk(c: number, k: number): string {
  const a = Math.abs(c);
  if (k === 0) return String(a);
  return `${a === 1 ? "" : a}x${k > 1 ? `^${k}` : ""}`;
}

/** Signed single term: -3x, x^2, 7. */
function termMk(c: number, k: number): string {
  return `${c < 0 ? "-" : ""}${absTermMk(c, k)}`;
}

/** Polynomial → markup, highest power first: "2x^2 - 5x + 3". */
function polyMk(p: Poly): string {
  let out = "";
  for (let k = p.length - 1; k >= 0; k--) {
    const c = p[k];
    if (!c) continue;
    out += out ? `${c < 0 ? " - " : " + "}${absTermMk(c, k)}` : termMk(c, k);
  }
  return out || "0";
}

/** A linear bracket body: (a, b) → "2x - 3". */
const linMk = (a: number, b: number) => polyMk([b, a]);

/** A fraction n/d as raw markup (simplified; whole numbers stay whole). */
function fracMk(n: number, d: number): string {
  if (d < 0) { n = -n; d = -d; }
  const g = gcd(n, d) || 1;
  const a = n / g, b = d / g;
  if (b === 1) return String(a);
  return `${a < 0 ? "-" : ""}${Math.abs(a)}/${b}`;
}

/** Plain-text number with a real minus sign. */
const tx = (v: number) => (v < 0 ? `−${Math.abs(v)}` : String(v));

/** Number with at most 3 s.f.-ish decimals, real minus sign. */
function dec(v: number, dp = 2): string {
  const r = Math.round(v * 10 ** dp) / 10 ** dp;
  return tx(Object.is(r, -0) ? 0 : r);
}

/** A long maths line split into pieces so it can wrap on a phone. */
function MathChain({ parts }: { parts: string[] }) {
  return (
    <>
      {parts.map((p, i) => (
        <Fragment key={i}>
          {i > 0 ? " " : null}
          <span className="inline-block">
            <M>{p}</M>
          </span>
        </Fragment>
      ))}
    </>
  );
}

/** Stepper handler that skips 0 (a zero coefficient would delete the x term). */
const skipZero = (prev: number, next: number) => (next === 0 ? (prev > 0 ? -1 : 1) : next);

/* ------------------------------------------------------------------------ */
/* 1. Bracket multiplier                                                     */
/* ------------------------------------------------------------------------ */

type Mode = "expand" | "factorise";

/** Targets to factorise: [a, b, c, d] meaning (ax + b)(cx + d). */
const TARGETS: Array<[number, number, number, number]> = [
  [1, 3, 1, 4],
  [1, -5, 1, 2],
  [2, 1, 1, 3],
  [3, -2, 1, 4],
  [2, -3, 1, -5],
  [2, 5, 3, -1],
  [1, 6, 1, -6],
  [3, 4, 2, 1],
  [4, -1, 1, 3],
  [2, 3, 2, -3],
  [5, 2, 1, -3],
  [3, -1, 3, -2],
];

/** One colour per power of x, so like terms stand out: numbers, x, x², x³. */
const TERM_TONE = ["bg-warn-soft", "bg-info-soft", "bg-brand-soft", "bg-good-soft"];

function GridCell({ c, k }: { c: number; k: number }) {
  return (
    <td className={`rounded-lg px-1 py-2 text-center text-base font-extrabold text-ink ${c === 0 ? "bg-surface-2" : TERM_TONE[Math.min(k, 3)]}`}>
      <M>{c === 0 ? "0" : termMk(c, k)}</M>
    </td>
  );
}

/** Multiplication grid: row terms down the side, column terms across the top. */
function Grid({ rows, cols, label }: { rows: Array<[number, number]>; cols: Array<[number, number]>; label: string }) {
  return (
    <table className="w-full table-fixed border-separate border-spacing-1">
      <caption className="sr-only">{label}</caption>
      <thead>
        <tr>
          <th scope="col" className="w-14 text-lg font-extrabold text-ink-2">×</th>
          {cols.map(([c, k], i) => (
            <th key={i} scope="col" className="rounded-lg bg-surface-2 px-1 py-2 text-base font-extrabold text-ink">
              <M>{termMk(c, k)}</M>
            </th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map(([rc, rk], i) => (
          <tr key={i}>
            <th scope="row" className="rounded-lg bg-surface-2 px-1 py-2 text-base font-extrabold text-ink">
              <M>{termMk(rc, rk)}</M>
            </th>
            {cols.map(([cc, ck], j) => (
              <GridCell key={j} c={rc * cc} k={rk + ck} />
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}

/** "3x + 2x = 5x" style collecting line for the x-power k from a list of cell products. */
function collectLine(cells: Array<[number, number]>, k: number): string | null {
  const like = cells.filter(([c, kk]) => kk === k && c !== 0).map(([c]) => c);
  if (like.length < 2) return null;
  const sum = like.reduce((s, c) => s + c, 0);
  const lhs = like.map((c, i) => (i === 0 ? termMk(c, k) : `${c < 0 ? "- " : "+ "}${absTermMk(c, k)}`)).join(" ");
  return `${lhs} = ${sum === 0 ? "0" : termMk(sum, k)}`;
}

function BracketMultiplier() {
  const [mode, setMode] = useState<Mode>("expand");
  const [a, setA] = useState(2);
  const [b, setB] = useState(3);
  const [c, setC] = useState(1);
  const [d, setD] = useState(-4);
  const [third, setThird] = useState(false);
  const [e, setE] = useState(1);
  const [ti, setTi] = useState(0);
  const [showHint, setShowHint] = useState(false);

  const two = pmul([b, a], [d, c]);
  const product = mode === "expand" && third ? pmul(two, [e, 1]) : two;
  const b1 = `(${linMk(a, b)})`, b2 = `(${linMk(c, d)})`, b3 = `(${linMk(1, e)})`;
  const lhs = mode === "expand" && third ? b1 + b2 + b3 : b1 + b2;

  const [ta, tb, tc, td] = TARGETS[ti];
  const target = pmul([tb, ta], [td, tc]);
  const matched = mode === "factorise" && samePoly(two, target);
  const sameSecond = mode === "factorise" && !matched && two[2] === target[2] && two[0] === target[0];
  const A = target[2], B = target[1], C = target[0];

  const newTarget = () => {
    let next = ti;
    while (next === ti) next = Math.floor(Math.random() * TARGETS.length);
    setTi(next);
    setShowHint(false);
  };

  // Cells of the first grid, for collecting like terms.
  const cells1: Array<[number, number]> = [[a * c, 2], [a * d, 1], [b * c, 1], [b * d, 0]];
  const quadTerms: Array<[number, number]> = ([[two[2], 2], [two[1], 1], [two[0], 0]] as Array<[number, number]>).filter(([q]) => q !== 0);
  const cells2: Array<[number, number]> = quadTerms.flatMap(([q, k]) => [[q, k + 1], [q * e, k]] as Array<[number, number]>);
  const line1 = collectLine(cells1, 1);
  const line2 = third ? [2, 1].map((k) => collectLine(cells2, k)).filter((x): x is string => !!x) : [];

  let caption: ReactNode;
  if (mode === "expand") {
    caption = third ? (
      <>
        Three brackets: expand two first, then multiply <b>every</b> term of <M>{polyMk(two)}</M> by <M>{b3}</M> — that&apos;s {quadTerms.length * 2} products. Each power of <M>{"x"}</M> has its own colour, so same-coloured cells are like terms to collect.
      </>
    ) : (
      <>
        Every term in one bracket meets every term in the other: four products. The two blue cells are both <M>{"x"}</M> terms — collecting them gives the middle term {two[1] === 0 ? <>— here they cancel, so it&apos;s a <b>difference of two squares</b>.</> : <M>{termMk(two[1], 1) || "0"}</M>}.
        {b === d && a === c ? <> Squaring a bracket gives the middle term twice — <M>{`(${linMk(a, b)})^2`}</M> is never just <M>{`${termMk(a * a, 2)} + ${b * b}`}</M>.</> : null}
      </>
    );
  } else if (matched) {
    caption = (
      <>
        ✅ <M>{`${polyMk(target)} = ${b1}${b2}`}</M>. Expand your brackets to check: the outer and inner products <M>{termMk(a * d, 1) || "0"}</M> and <M>{termMk(b * c, 1) || "0"}</M> add to the middle term.
      </>
    );
  } else {
    caption = (
      <>
        Adjust the brackets until their product is <M>{polyMk(target)}</M>.{" "}
        {sameSecond ? <>Your first and last terms already match — now swap or change signs so the cross products add to <M>{termMk(B, 1) || "0"}</M>.</> : <>The <M>{"x"}</M> coefficients must multiply to {A} and the numbers to {tx(C)}.</>}
      </>
    );
  }

  return (
    <WidgetFrame
      title="Bracket multiplier"
      tryThis={
        mode === "expand"
          ? ["Make the middle term disappear. What do the brackets look like?", "Set both brackets the same. Why is {{(2x + 3)^2}} not {{4x^2 + 9}}?", "Add a third bracket: how many products are there before you collect like terms?"]
          : ["Factorise the target by changing the brackets until they match.", "Use the hint: find two numbers that multiply to {{a * c}} and add to {{b}}.", "Some targets have no middle term. What do their brackets have in common?"]
      }
      caption={caption}
    >
      <div className="space-y-4">
        <Segmented
          label="Mode"
          value={mode}
          onChange={(m) => { setMode(m); setShowHint(false); }}
          options={[
            { value: "expand", label: "Expand" },
            { value: "factorise", label: "Factorise" },
          ]}
        />

        {mode === "factorise" ? (
          <div className={`rounded-xl border p-3 ${matched ? "border-good bg-good-soft" : "border-line bg-surface-2"}`}>
            <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Target</div>
            <div className="text-xl font-extrabold text-ink">
              <M>{polyMk(target)}</M>
            </div>
            <div className="mt-2 flex flex-wrap gap-2">
              <button type="button" className="btn btn-secondary min-h-[40px]" onClick={newTarget}>New target</button>
              <button type="button" className="btn btn-ghost min-h-[40px]" onClick={() => setShowHint((h) => !h)} aria-expanded={showHint}>
                {showHint ? "Hide hint" : "Hint"}
              </button>
            </div>
            {showHint ? (
              <p className="mt-2 text-sm text-ink">
                <M>{`a * c = ${A} * ${C < 0 ? `(${C})` : C} = ${A * C}`}</M>. Find two numbers that multiply to {tx(A * C)} and add to {tx(B)}: they are {tx(ta * td)} and {tx(tb * tc)}. Split the middle term: <M>{`${termMk(A, 2)} ${ta * td < 0 ? "-" : "+"} ${absTermMk(ta * td, 1)} ${tb * tc < 0 ? "-" : "+"} ${absTermMk(tb * tc, 1)} ${C < 0 ? "-" : "+"} ${Math.abs(C)}`}</M>, then factorise in pairs.
              </p>
            ) : null}
          </div>
        ) : null}

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-line p-3">
            <div className="text-sm font-bold text-ink-2">First bracket <M>{b1}</M></div>
            <Stepper label={<>coefficient of <M>{"x"}</M></>} value={a} min={1} max={6} onChange={setA} />
            <Stepper label="number" value={b} min={-9} max={9} onChange={setB} format={tx} />
          </div>
          <div className="space-y-2 rounded-xl border border-line p-3">
            <div className="text-sm font-bold text-ink-2">Second bracket <M>{b2}</M></div>
            <Stepper label={<>coefficient of <M>{"x"}</M></>} value={c} min={1} max={6} onChange={setC} />
            <Stepper label="number" value={d} min={-9} max={9} onChange={setD} format={tx} />
          </div>
        </div>

        {mode === "expand" ? (
          <div className="flex flex-wrap items-center gap-3">
            <button type="button" className={`btn min-h-[40px] ${third ? "btn-primary" : "btn-secondary"}`} aria-pressed={third} onClick={() => setThird((t) => !t)}>
              {third ? "Remove third bracket" : "Add a third bracket"}
            </button>
            {third ? <Stepper label={<>third bracket <M>{b3}</M></>} value={e} min={-6} max={6} onChange={(v) => setE(skipZero(e, v))} format={tx} /> : null}
          </div>
        ) : null}

        <div className="space-y-2">
          <div className="text-sm font-semibold text-ink-2">
            Step 1: <M>{`${b1}${b2}`}</M>
          </div>
          <Grid rows={[[c, 1], [d, 0]].filter(([q]) => q !== 0) as Array<[number, number]>} cols={[[a, 1], [b, 0]].filter(([q]) => q !== 0) as Array<[number, number]>} label={`Grid for ${b1}${b2}`} />
          <p className="text-sm text-ink">
            {line1 ? <>Collect: <M>{line1}</M>. </> : null}
            So <MathChain parts={[`${b1}${b2}`, "=", polyMk(two)]} />
          </p>
        </div>

        {mode === "expand" && third ? (
          <div className="space-y-2">
            <div className="text-sm font-semibold text-ink-2">
              Step 2: <M>{`(${polyMk(two)})${b3}`}</M>
            </div>
            <Grid rows={[[1, 1], [e, 0]]} cols={quadTerms} label={`Grid for (${polyMk(two)}) times ${b3}`} />
            <p className="text-sm text-ink">
              {line2.length ? <>Collect: {line2.map((l, i) => <Fragment key={i}>{i ? "; " : ""}<M>{l}</M></Fragment>)}. </> : null}
            </p>
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Readout label="Brackets" value={<M>{lhs}</M>} tone="ink" />
          <Readout label={mode === "expand" ? "Expanded" : matched ? "Matches the target ✓" : "Your product"} value={<M>{polyMk(product)}</M>} tone={mode === "factorise" ? (matched ? "good" : "bad") : "brand"} />
        </div>
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Completing-the-square grapher                                          */
/* ------------------------------------------------------------------------ */

const W = 360, H = 300, PAD = 26;
const X_MIN = -8, X_MAX = 8, Y_MIN = -16, Y_MAX = 16;
const px = (x: number) => PAD + ((x - X_MIN) * (W - 2 * PAD)) / (X_MAX - X_MIN);
const py = (y: number) => H - PAD - ((y - Y_MIN) * (H - 2 * PAD)) / (Y_MAX - Y_MIN);

function SquareGrapher() {
  const [a, setA] = useState(1);
  const [b, setB] = useState(-4);
  const [c, setC] = useState(-5);
  const [k, setK] = useState(-1);
  const clipId = useId().replace(/:/g, "");

  const f = (x: number) => a * x * x + b * x + c;
  // a(x + p)^2 + q with p = b/(2a), q = (4ac − b²)/(4a).
  const pMk = fracMk(b, 2 * a);
  const qN = 4 * a * c - b * b, qD = 4 * a;
  const qMk = fracMk(qN, qD);
  const pVal = b / (2 * a), qVal = qN / qD;
  const disc = b * b - 4 * a * c;
  const sqrtD = Math.sqrt(Math.max(0, disc));
  const exactRoot = disc >= 0 && Number.isInteger(sqrtD);
  const roots = disc > 0 ? [(-b - sqrtD) / (2 * a), (-b + sqrtD) / (2 * a)].sort((u, v) => u - v) : disc === 0 ? [-b / (2 * a)] : [];

  const aStr = a === 1 ? "" : a === -1 ? "-" : String(a);
  const bracket = pVal === 0 ? "x^2" : `(x ${pVal < 0 ? "-" : "+"} ${fracMk(Math.abs(b), Math.abs(2 * a))})^2`;
  const csq = `${aStr}${bracket}${qVal === 0 ? "" : ` ${qVal < 0 ? "-" : "+"} ${fracMk(Math.abs(qN), Math.abs(qD))}`}`;
  const fx = polyMk([c, b, a]);
  const fk = f(k);
  const kb = k < 0 ? `(${k})` : String(k);
  const tpx = -pVal, tpy = qVal;

  // Curve path, sampled finely; clipped to the plot area.
  let d = "";
  for (let i = 0; i <= 320; i++) {
    const x = X_MIN + ((X_MAX - X_MIN) * i) / 320;
    const y = Math.max(Y_MIN - 40, Math.min(Y_MAX + 40, f(x)));
    d += `${i ? "L" : "M"}${px(x).toFixed(1)},${py(y).toFixed(1)}`;
  }
  const inView = (x: number, y: number) => x >= X_MIN && x <= X_MAX && y >= Y_MIN && y <= Y_MAX;

  const xs = Array.from({ length: X_MAX - X_MIN + 1 }, (_, i) => X_MIN + i);
  const ys = Array.from({ length: (Y_MAX - Y_MIN) / 2 + 1 }, (_, i) => Y_MIN + 2 * i);

  const rootText =
    disc < 0 ? "no real roots" : exactRoot ? roots.map((r) => fracMk(Math.round(r * 2 * a), 2 * a)).join(" and ") : roots.map((r) => dec(r, 2)).join(" and ");

  const aria = `Graph of y = ${fx.replace(/\^2/g, " squared")}. Turning point at (${dec(tpx)}, ${dec(tpy)}), a ${a > 0 ? "minimum" : "maximum"}. ${disc > 0 ? "Crosses the x-axis twice" : disc === 0 ? "Touches the x-axis once" : "Does not meet the x-axis"}. Point marked at x = ${k}, f(${k}) = ${fk}.`;

  return (
    <WidgetFrame
      title="Completing-the-square grapher"
      tryThis={[
        "Make the turning point (2, −3). What are {{p}} and {{q}}?",
        "Make a curve with no real roots. What do you notice about the signs of {{a}} and {{q}}?",
        "Find a value of c that makes the curve just touch the x-axis when a = 1 and b = 6.",
        "Find two different values of k with the same f(k). How are they related to the turning point?",
      ]}
      caption={
        <>
          <MathChain parts={[`f(x) = ${fx}`, "=", csq]} />. A square is never negative, so the bracket is smallest (zero) when <M>{`x = ${fracMk(-b, 2 * a)}`}</M>. That makes <M>{`(${fracMk(-b, 2 * a)}, ${qMk})`}</M> the {a > 0 ? "minimum" : "maximum"} point.{" "}
          {disc < 0 ? (
            <>The curve never reaches <M>{"y = 0"}</M>: <M>{"q"}</M> and <M>{"a"}</M> have the same sign, so <M>{"b^2 - 4ac < 0"}</M>.</>
          ) : disc === 0 ? (
            <>The turning point sits on the x-axis: <M>{"b^2 - 4ac = 0"}</M>, one repeated root.</>
          ) : (
            <>It crosses the x-axis at <M>{"x"}</M> = {rootText}{exactRoot ? "" : " (2 d.p.)"} — symmetric about <M>{`x = ${fracMk(-b, 2 * a)}`}</M>.</>
          )}
        </>
      }
    >
      <div className="space-y-4">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full rounded-xl border border-line bg-surface" role="img" aria-label={aria}>
          <defs>
            <clipPath id={clipId}>
              <rect x={PAD} y={PAD} width={W - 2 * PAD} height={H - 2 * PAD} />
            </clipPath>
          </defs>
          {xs.map((x) => (
            <line key={`gx${x}`} x1={px(x)} x2={px(x)} y1={py(Y_MIN)} y2={py(Y_MAX)} className="stroke-line" strokeWidth={1} />
          ))}
          {ys.map((y) => (
            <line key={`gy${y}`} x1={px(X_MIN)} x2={px(X_MAX)} y1={py(y)} y2={py(y)} className="stroke-line" strokeWidth={1} />
          ))}
          <line x1={px(0)} x2={px(0)} y1={py(Y_MIN)} y2={py(Y_MAX)} className="stroke-ink-2" strokeWidth={1.5} />
          <line x1={px(X_MIN)} x2={px(X_MAX)} y1={py(0)} y2={py(0)} className="stroke-ink-2" strokeWidth={1.5} />
          {xs.filter((x) => x % 2 === 0 && x !== 0).map((x) => (
            <text key={`lx${x}`} x={px(x)} y={py(0) + 13} fontSize={10} textAnchor="middle" className="fill-ink-2">{x}</text>
          ))}
          {ys.filter((y) => y % 4 === 0 && y !== 0).map((y) => (
            <text key={`ly${y}`} x={px(0) - 5} y={py(y) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">{y}</text>
          ))}
          <text x={px(X_MAX) - 2} y={py(0) - 5} fontSize={11} textAnchor="end" className="fill-ink-2">x</text>
          <text x={px(0) + 5} y={py(Y_MAX) + 10} fontSize={11} className="fill-ink-2">y</text>
          <g clipPath={`url(#${clipId})`}>
            {tpx >= X_MIN && tpx <= X_MAX ? (
              <line x1={px(tpx)} x2={px(tpx)} y1={py(Y_MIN)} y2={py(Y_MAX)} className="stroke-accent" strokeWidth={1.5} strokeDasharray="5 4" />
            ) : null}
            <path d={d} fill="none" className="stroke-brand" strokeWidth={2.5} />
            {inView(k, fk) ? (
              <>
                <line x1={px(k)} x2={px(k)} y1={py(0)} y2={py(fk)} className="stroke-good" strokeWidth={1.5} strokeDasharray="3 3" />
                <circle cx={px(k)} cy={py(fk)} r={5} className="fill-good stroke-surface" strokeWidth={1.5} />
              </>
            ) : null}
            {roots.map((r) => (inView(r, 0) ? <circle key={r} cx={px(r)} cy={py(0)} r={4.5} className="fill-surface stroke-ink" strokeWidth={2} /> : null))}
            {inView(tpx, tpy) ? <circle cx={px(tpx)} cy={py(tpy)} r={5.5} className="fill-accent stroke-ink" strokeWidth={1.5} /> : null}
          </g>
          {!inView(tpx, tpy) ? (
            <text x={W / 2} y={PAD - 8} fontSize={11} textAnchor="middle" className="fill-ink-2">Turning point is off the grid</text>
          ) : null}
        </svg>

        <div className="grid gap-3 sm:grid-cols-2">
          <Slider label={<><M>{"a"}</M> (coefficient of <M>{"x^2"}</M>)</>} value={a} min={-3} max={3} onChange={(v) => setA(skipZero(a, v))} format={tx} />
          <Slider label={<><M>{"b"}</M> (coefficient of <M>{"x"}</M>)</>} value={b} min={-10} max={10} onChange={setB} format={tx} />
          <Slider label={<><M>{"c"}</M> (constant)</>} value={c} min={-12} max={12} onChange={setC} format={tx} />
          <Slider label={<>input <M>{"k"}</M> for <M>{"f(k)"}</M></>} value={k} min={-6} max={6} onChange={setK} format={tx} />
        </div>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
          <Readout label="Completed square" value={<M>{csq}</M>} />
          <Readout label={a > 0 ? "Minimum point" : "Maximum point"} value={<M>{`(${fracMk(-b, 2 * a)}, ${qMk})`}</M>} tone="ink" />
          <Readout label={<>Discriminant <M>{"b^2 - 4ac"}</M></>} value={<>{tx(disc)} → {disc > 0 ? "2 roots" : disc === 0 ? "1 root" : "0 roots"}</>} tone={disc < 0 ? "bad" : "good"} />
          <Readout label={<>Substitution <M>{`f(${k})`}</M></>} value={<M>{String(fk)}</M>} tone="good" />
        </div>

        <div className="rounded-xl bg-surface-2 p-3 text-sm text-ink">
          <div className="font-semibold text-ink-2">How the square is completed</div>
          <ol className="mt-1 list-decimal space-y-1 pl-5">
            {a !== 1 ? (
              <li>
                Take out <M>{String(a)}</M> from the <M>{"x"}</M> terms: <MathChain parts={[b === 0 ? `${a}x^2` : `${a}(x^2 ${b * a < 0 ? "-" : "+"} ${fracMk(Math.abs(b), Math.abs(a))}x)`, ...(c === 0 ? [] : [`${c < 0 ? "-" : "+"} ${Math.abs(c)}`])]} />
              </li>
            ) : null}
            <li>
              Halve the <M>{"x"}</M> coefficient{a !== 1 ? " inside the bracket" : ""}: <M>{`p = ${pMk}`}</M>.
            </li>
            <li>
              <M>{`${bracket}`}</M> makes an extra <M>{fracMk(b * b, 4 * a * a)}</M>, so subtract it{a !== 1 ? <> (times <M>{String(a)}</M>)</> : null}: <M>{`q = ${c} - ${a !== 1 ? `${a < 0 ? `(${a})` : a} * ` : ""}${fracMk(b * b, 4 * a * a)} = ${qMk}`}</M>.
            </li>
            <li>
              Substitution check: <MathChain parts={[`f(${k}) = ${a} * ${kb}^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)} * ${kb} ${c < 0 ? "-" : "+"} ${Math.abs(c)}`, "=", String(fk)]} />
            </li>
          </ol>
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "bracket-multiplier",
    title: "Bracket multiplier",
    blurb: "Expand two or three brackets with a colour-coded grid — then run it backwards to factorise quadratics, including a ≠ 1.",
    Component: BracketMultiplier,
  },
  {
    id: "completing-the-square-grapher",
    title: "Completing-the-square grapher",
    blurb: "Change a, b and c and watch the completed-square form, turning point, roots and f(k) update on the graph.",
    Component: SquareGrapher,
  },
];
