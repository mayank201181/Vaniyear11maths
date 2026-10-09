"use client";
// Interactive explorables for "Indices, Standard Form & Surds".
//  1. Power ladder — pick a base and slide a (possibly negative, possibly
//     fractional) index along the graph of y = b^x; the exact value is shown
//     as an integer, a fraction or a surd, with the ÷b ladder that explains
//     why b^0 = 1 and b^(−n) = 1/b^n.
//  2. Surd workshop — (a) simplify √n by finding the largest square factor,
//     with a to-scale picture showing √n is exactly k lengths of √s;
//     (b) rationalise k/√b or k/(a ± √b) step by step, with a decimal check.
import { useMemo, useState } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, M, makePlane, type WidgetDef } from "./kit";
import { renderInline } from "../Rich";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}

/** Integer q-th root of n, or null if n is not a perfect q-th power. */
function intRoot(n: number, q: number): number | null {
  const r = Math.round(Math.pow(n, 1 / q));
  for (const c of [r - 1, r, r + 1]) if (c > 0 && Math.pow(c, q) === n) return c;
  return null;
}

/** n = k² × s with s square-free. */
function splitSquare(n: number): [number, number] {
  let k = 1, s = n;
  for (let f = 2; f * f <= s; f++) {
    while (s % (f * f) === 0) {
      s /= f * f;
      k *= f;
    }
  }
  return [k, s];
}

/** 4 significant figures, plain text with a real minus sign. */
function sig4(v: number): string {
  if (v === 0) return "0";
  const s = String(parseFloat(v.toPrecision(4)));
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}

/** c√s in maths markup. */
function sm(c: number, s: number): string {
  if (s === 1) return String(c);
  if (c === 1) return `sqrt(${s})`;
  if (c === -1) return `-sqrt(${s})`;
  return `${c}sqrt(${s})`;
}

/** p + q√s in maths markup. */
function sumM(p: number, q: number, s: number): string {
  if (q === 0) return String(p);
  if (p === 0) return sm(q, s);
  return `${p} ${q < 0 ? "-" : "+"} ${sm(Math.abs(q), s)}`;
}

// ===========================================================================
// 1. Power ladder
// ===========================================================================

const BASES = [2, 3, 4, 8, 9] as const;
type Den = "1" | "2" | "3";

/** Exact value of b^(p/q) (p/q in lowest terms) as maths markup. */
function exactPower(b: number, p: number, q: number): { markup: string; exact: boolean } {
  if (p === 0) return { markup: "1", exact: true };
  const r = q === 1 ? b : intRoot(b, q);
  const P = Math.abs(p);
  if (r !== null) {
    const v = Math.pow(r, P);
    return { markup: p < 0 ? `1/${v}` : String(v), exact: true };
  }
  const root = q === 2 ? `sqrt(${b})` : `cbrt(${b})`;
  // Pull whole powers out where it helps: b^(3/2) = b sqrt(b).
  const whole = Math.floor(P / q), rem = P % q;
  let body: string;
  if (whole === 0) body = rem === 1 ? root : `(${root})^${rem}`;
  else body = `${Math.pow(b, whole)}${rem === 1 ? root : `(${root})^${rem}`}`;
  return { markup: p < 0 ? `1/(${body})` : body, exact: false };
}

function PowerLadder() {
  const [b, setB] = useState<number>(2);
  const [den, setDen] = useState<Den>("1");
  const [num, setNum] = useState(1);
  const q = Number(den);

  const changeDen = (d: Den) => {
    const nq = Number(d);
    setNum((n) => Math.max(-2 * nq, Math.min(2 * nq, Math.round((n / q) * nq))));
    setDen(d);
  };

  const g = gcd(num, q) || 1;
  const p = num / g, qq = q / g;
  const x = num / q;
  const value = Math.pow(b, x);
  const ex = exactPower(b, p, qq);
  const expM = qq === 1 ? String(p) : `${p}/${qq}`;

  // Graph of y = b^x for −2 ≤ x ≤ 2.
  const W = 340, H = 230;
  const yMax = b * b;
  const plane = makePlane({ width: W, height: H, xMin: -2, xMax: 2, yMin: 0, yMax: yMax * 1.08, pad: 30 });
  const { px, py } = plane;
  const path = useMemo(() => {
    const pts: string[] = [];
    for (let i = 0; i <= 160; i++) {
      const xx = -2 + (4 * i) / 160;
      pts.push(`${i === 0 ? "M" : "L"}${px(xx).toFixed(1)},${py(Math.pow(b, xx)).toFixed(1)}`);
    }
    return pts.join(" ");
  }, [b, px, py]);
  const yTicks = [0, yMax / 4, yMax / 2, (3 * yMax) / 4, yMax];

  const ladder = [-2, -1, 0, 1, 2].map((n) => ({ n, v: exactPower(b, n, 1).markup }));
  const rootName = qq === 2 ? "square root" : "cube root";

  let explain: string;
  if (p === 0) explain = `Any non-zero number to the power 0 is 1. Walking left along the ladder you divide by ${b} each step: {{${b} / ${b} = 1}}.`;
  else if (qq === 1 && p > 0) explain = `{{${b}^${p}}} means ${Array(p).fill(b).join(" × ")} = ${Math.pow(b, p)}.`;
  else if (qq === 1) explain = `A negative index means "one over": {{${b}^(${p}) = 1/${b}^${-p} = ${ex.markup}}}. It's what you get by dividing by ${b} again and again.`;
  else {
    const parts = [`The denominator ${qq} means the ${rootName} of ${b}.`];
    if (Math.abs(p) !== 1) parts.push(`The numerator ${Math.abs(p)} means raise it to the power ${Math.abs(p)}.`);
    if (p < 0) parts.push("The minus sign means take the reciprocal.");
    parts.push(ex.exact ? `So {{${b}^(${expM}) = ${ex.markup}}} exactly.` : `${b} is not a perfect ${qq === 2 ? "square" : "cube"}, so the exact value is a surd: {{${ex.markup}}} ≈ ${sig4(value)}.`);
    explain = parts.join(" ");
  }

  return (
    <WidgetFrame
      title="Power ladder"
      tryThis={[
        "Set the index to 0 for every base. What do you notice — and why does the ladder force it?",
        "Find the index that makes {{8^x = 4}}. (Switch to thirds.)",
        "Predict {{4^(-3/2)}} before you check it.",
        "Which base and index give exactly {{1/3}}? Find two different answers.",
      ]}
      caption={<span>{renderCaption(explain)}</span>}
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink-2">Base</span>
          <Segmented label="Base" options={BASES.map((v) => ({ value: String(v), label: String(v) }))} value={String(b)} onChange={(v) => setB(Number(v))} />
        </div>
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-sm font-semibold text-ink-2">Index steps</span>
          <Segmented<Den>
            label="Index steps"
            options={[
              { value: "1", label: "whole" },
              { value: "2", label: "halves" },
              { value: "3", label: "thirds" },
            ]}
            value={den}
            onChange={changeDen}
          />
        </div>
        <Slider label="Index x" value={num} min={-2 * q} max={2 * q} onChange={setNum} format={() => <M>{expM}</M>} />

        <div className="grid grid-cols-2 gap-2">
          <Readout label="Exact value" value={<M>{`${b}^(${expM}) = ${ex.markup}`}</M>} />
          <Readout label="Decimal" value={`≈ ${sig4(value)}`} tone="ink" />
        </div>

        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Graph of y equals ${b} to the power x for x from minus 2 to 2. The marked point is at x = ${sig4(x)}, y ≈ ${sig4(value)}.`}>
          {[-2, -1, 0, 1, 2].map((t) => (
            <g key={`x${t}`}>
              <line x1={px(t)} x2={px(t)} y1={py(0)} y2={py(yMax * 1.08)} className="stroke-line" strokeWidth={1} />
              <text x={px(t)} y={py(0) + 14} fontSize={10} textAnchor="middle" className="fill-ink-2">{t}</text>
            </g>
          ))}
          {yTicks.map((t) => (
            <g key={`y${t}`}>
              <line x1={px(-2)} x2={px(2)} y1={py(t)} y2={py(t)} className="stroke-line" strokeWidth={1} />
              <text x={px(-2) - 4} y={py(t) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">{sig4(t)}</text>
            </g>
          ))}
          <line x1={px(0)} x2={px(0)} y1={py(0)} y2={py(yMax * 1.08)} className="stroke-ink-2" strokeWidth={1.5} />
          <line x1={px(-2)} x2={px(2)} y1={py(0)} y2={py(0)} className="stroke-ink-2" strokeWidth={1.5} />
          <path d={path} fill="none" className="stroke-brand" strokeWidth={2.5} />
          <line x1={px(x)} x2={px(x)} y1={py(0)} y2={py(value)} className="stroke-accent" strokeWidth={1.5} strokeDasharray="4 3" />
          <line x1={px(-2)} x2={px(x)} y1={py(value)} y2={py(value)} className="stroke-accent" strokeWidth={1.5} strokeDasharray="4 3" />
          <circle cx={px(x)} cy={py(value)} r={6} className="fill-accent stroke-ink" strokeWidth={1.5} />
          <text x={px(1.95)} y={py(yMax) - 4} fontSize={12} textAnchor="end" className="fill-brand" fontWeight={700}>y = {b}^x</text>
        </svg>

        <div>
          <div className="text-xs font-bold uppercase tracking-wide text-ink-2">The ladder: each step left divides by {b}</div>
          <div className="mt-2 flex flex-wrap items-center gap-1">
            {ladder.map((r, i) => (
              <div key={r.n} className="flex items-center gap-1">
                {i > 0 ? <span className="text-xs text-ink-2" aria-hidden>×{b}</span> : null}
                <div className={`rounded-lg border px-2 py-1 text-sm ${qq === 1 && p === r.n ? "border-brand bg-brand-soft" : "border-line bg-surface"}`}>
                  <M>{`${b}^(${r.n}) = ${r.v}`}</M>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

/** Caption text may contain {{maths}} and **bold**. */
function renderCaption(text: string) {
  return renderInline(text);
}

// ===========================================================================
// 2. Surd workshop
// ===========================================================================

type Mode = "simplify" | "rationalise";
const RAT_B = [2, 3, 5, 6, 7, 10, 11, 13, 14, 15, 17, 19];

function SurdSimplify() {
  const [n, setN] = useState(72);
  const [k, s] = splitSquare(n);
  const pairs = useMemo(() => {
    const out: Array<{ a: number; b: number; square: boolean }> = [];
    for (let a = 1; a * a <= n; a++) if (n % a === 0) out.push({ a, b: n / a, square: intRoot(a, 2) !== null || intRoot(n / a, 2) !== null });
    return out;
  }, [n]);

  // To-scale picture: √n on top, k copies of √s underneath.
  const W = 340, X0 = 12, unit = 316 / Math.sqrt(200);
  const L = Math.sqrt(n) * unit, seg = Math.sqrt(s) * unit;
  const result = s === 1 ? String(k) : sm(k, s);

  let caption: string;
  if (s === 1) caption = `${n} is a square number, so {{sqrt(${n}) = ${k}}} — no surd left at all.`;
  else if (k === 1) caption = `${n} has no square factor bigger than 1, so {{sqrt(${n})}} is already in its simplest form.`;
  else caption = `The largest square factor of ${n} is ${k * k}. Because {{sqrt(ab) = sqrt(a) sqrt(b)}}, {{sqrt(${n}) = sqrt(${k * k}) * sqrt(${s}) = ${result}}}. The picture is to scale: ${k} lengths of {{sqrt(${s})}} laid end to end exactly match {{sqrt(${n})}}.`;

  return (
    <div className="space-y-3">
      <Slider label={<span>Simplify <M>{`sqrt(${n})`}</M></span>} value={n} min={2} max={200} onChange={setN} />
      <div className="grid grid-cols-2 gap-2">
        <Readout label="Largest square factor" value={k * k} tone="ink" />
        <Readout label="Simplest form" value={<M>{result}</M>} tone={k > 1 ? "good" : "brand"} />
      </div>
      <div>
        <div className="text-xs font-bold uppercase tracking-wide text-ink-2">Factor pairs of {n} (square factors highlighted)</div>
        <div className="mt-2 flex flex-wrap gap-1">
          {pairs.map((f) => (
            <span key={f.a} className={`rounded-lg border px-2 py-1 text-sm tabular-nums ${f.square ? "border-good bg-good-soft text-ink" : "border-line bg-surface text-ink-2"}`}>
              {f.a} × {f.b}
            </span>
          ))}
        </div>
      </div>
      <svg viewBox={`0 0 ${W} 112`} className="h-auto w-full" role="img" aria-label={`To-scale bars: the top bar has length square root of ${n}; the bottom bar is made of ${k} equal ${k === 1 ? "piece" : "pieces"} each of length ${s === 1 ? "1" : `square root of ${s}`}, and both bars are the same length.`}>
        <text x={X0} y={13} fontSize={12} className="fill-ink-2">√{n}</text>
        <rect x={X0} y={18} width={L} height={16} rx={3} className="fill-brand-soft stroke-brand" strokeWidth={1.5} />
        <text x={X0} y={57} fontSize={12} className="fill-ink-2">{s === 1 ? `${k} × 1` : `${k} × √${s}`}</text>
        {Array.from({ length: k }, (_, i) => (
          <rect key={i} x={X0 + i * seg} y={62} width={seg} height={16} rx={2} className={i % 2 ? "fill-accent stroke-ink" : "fill-good-soft stroke-ink"} strokeWidth={1} />
        ))}
        <line x1={X0 + L} x2={X0 + L} y1={14} y2={84} className="stroke-ink-2" strokeWidth={1} strokeDasharray="3 3" />
        <text x={X0} y={104} fontSize={11} className="fill-ink-2">√{n} ≈ {sig4(Math.sqrt(n))} and {k} × {s === 1 ? "1" : `√${s}`} ≈ {k} × {sig4(Math.sqrt(s))} = {sig4(k * Math.sqrt(s))}</text>
      </svg>
      <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed text-ink">{renderCaption(caption)}</div>
    </div>
  );
}

function SurdRationalise() {
  const [k, setK] = useState(6);
  const [a, setA] = useState(3);
  const [sign, setSign] = useState<"+" | "-">("+");
  const [bi, setBi] = useState(4); // index into RAT_B → 7
  const b = RAT_B[bi];
  const sg = sign === "+" ? 1 : -1;

  const original = a === 0 ? k / Math.sqrt(b) : k / (a + sg * Math.sqrt(b));
  const denM = a === 0 ? `sqrt(${b})` : `${a} ${sign} sqrt(${b})`;
  const conjM = a === 0 ? `sqrt(${b})` : `${a} ${sign === "+" ? "-" : "+"} sqrt(${b})`;

  let steps: string[];
  let finalM: string;
  let resultValue: number;
  if (a === 0) {
    const g = gcd(k, b);
    const N = k / g, D = b / g;
    finalM = D === 1 ? sm(N, b) : `(${sm(N, b)})/${D}`;
    resultValue = (N * Math.sqrt(b)) / D;
    steps = [
      `Multiply top and bottom by {{sqrt(${b})}}: {{${k}/sqrt(${b}) * sqrt(${b})/sqrt(${b})}}.`,
      `Bottom: {{sqrt(${b}) * sqrt(${b}) = ${b}}} — a whole number. Top: {{${sm(k, b)}}}.`,
      g > 1 ? `So {{(${sm(k, b)})/${b} = ${finalM}}} (cancel ${g}).` : `So the answer is {{${finalM}}}.`,
    ];
  } else {
    const D = a * a - b; // (a + sg√b)(a − sg√b)
    // k(a − sg√b)/D = (ka − sg·k√b)/D
    let P = k * a, Q = -sg * k, Dn = D;
    const g = gcd(gcd(P, Q), Dn);
    P /= g; Q /= g; Dn /= g;
    if (Dn < 0) { P = -P; Q = -Q; Dn = -Dn; }
    finalM = Dn === 1 ? sumM(P, Q, b) : `(${sumM(P, Q, b)})/${Dn}`;
    resultValue = (P + Q * Math.sqrt(b)) / Dn;
    steps = [
      `Multiply top and bottom by the conjugate {{${conjM}}} — same numbers, opposite sign.`,
      `Bottom: {{(${denM})(${conjM}) = ${a}^2 - (sqrt(${b}))^2 = ${a * a} - ${b} = ${D}}}. The surds cancel (difference of two squares).`,
      `Top: {{${k}(${conjM}) = ${sumM(k * a, -sg * k, b)}}}.`,
      `So the answer is {{${finalM}}}${g > 1 || D < 0 ? ` (after cancelling${D < 0 ? " and tidying the sign" : ""})` : ""}.`,
    ];
  }

  return (
    <div className="space-y-3">
      <div className="space-y-2">
        <Stepper label="Numerator k" value={k} min={1} max={12} onChange={setK} />
        <Stepper label="Whole number a (0 = just a surd)" value={a} min={0} max={6} onChange={setA} />
        {a > 0 ? (
          <div className="flex items-center justify-between gap-3">
            <span className="text-sm font-semibold text-ink-2">Sign</span>
            <Segmented<"+" | "-"> label="Sign in the denominator" options={[{ value: "+", label: "a + √b" }, { value: "-", label: "a − √b" }]} value={sign} onChange={setSign} />
          </div>
        ) : null}
        <Slider label={<span>Surd <M>{`sqrt(${b})`}</M></span>} value={bi} min={0} max={RAT_B.length - 1} onChange={setBi} format={() => <M>{`sqrt(${b})`}</M>} />
      </div>
      <div className="grid grid-cols-2 gap-2">
        <Readout label="Start" value={<M>{`${k}/(${denM})`}</M>} tone="ink" />
        <Readout label="Rationalised" value={<M>{finalM}</M>} tone="good" />
      </div>
      <ol className="list-decimal space-y-1 pl-5 text-sm text-ink">
        {steps.map((t, i) => (
          <li key={i}>{renderCaption(t)}</li>
        ))}
      </ol>
      <div className="rounded-xl border border-line bg-surface p-3 text-sm text-ink-2">
        Decimal check: start ≈ <span className="font-bold text-ink">{sig4(original)}</span>, answer ≈ <span className="font-bold text-ink">{sig4(resultValue)}</span> —{" "}
        {Math.abs(original - resultValue) < 1e-9 * Math.max(1, Math.abs(original)) ? <span className="font-bold text-good">the same number, just written without a surd underneath.</span> : <span className="font-bold text-bad">mismatch</span>}
      </div>
    </div>
  );
}

function SurdWorkshop() {
  const [mode, setMode] = useState<Mode>("simplify");
  return (
    <WidgetFrame
      title="Surd workshop"
      tryThis={
        mode === "simplify"
          ? ["Find three numbers below 200 whose square root simplifies to a multiple of {{sqrt(2)}}.", "Which n gives the biggest whole number outside the root?", "Why does a prime number never simplify?"]
          : ["Make the denominator {{3 - sqrt(7)}}. Why does the answer come out with no fraction at all?", "Find a, b and k so that the answer is a whole number plus a whole number of surds.", "Switch the sign in the denominator. What happens to the sign in the answer?"]
      }
      caption={
        mode === "simplify" ? (
          <span>Simplifying a surd means taking the <b>largest</b> square factor outside the root. Taking a smaller one (like {renderCaption("{{sqrt(72) = 2sqrt(18)}}")}) is not finished.</span>
        ) : (
          <span>Rationalising never changes the value — it multiplies by a clever form of 1. The conjugate works because {renderCaption("{{(a + sqrt(b))(a - sqrt(b)) = a^2 - b}}")}, a whole number.</span>
        )
      }
    >
      <div className="mb-3">
        <Segmented<Mode> label="Mode" options={[{ value: "simplify", label: "Simplify √n" }, { value: "rationalise", label: "Rationalise" }]} value={mode} onChange={setMode} />
      </div>
      {mode === "simplify" ? <SurdSimplify /> : <SurdRationalise />}
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------

export const widgets: WidgetDef[] = [
  { id: "power-ladder", title: "Power ladder", blurb: "Slide a negative or fractional index along y = bˣ and see its exact value.", Component: PowerLadder },
  { id: "surd-workshop", title: "Surd workshop", blurb: "Simplify √n to scale, and rationalise denominators step by step.", Component: SurdWorkshop },
];
