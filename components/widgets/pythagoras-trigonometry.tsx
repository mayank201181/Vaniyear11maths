"use client";
// Interactive explorables for "Pythagoras & Right-Angled Trigonometry".
//  1. Triangle lab — two views of one right-angled triangle.
//     (a) Squares: whole-number legs a and b with the squares drawn on all three
//         sides to scale; c² = a² + b² live, c as an exact simplified surd, and a
//         "Pythagorean triple" flag when c is a whole number.
//     (b) SOH CAH TOA: set the angle and the hypotenuse, choose which acute angle
//         you label from, and watch O, A, H relabel. The ratios stay fixed when the
//         triangle is scaled (similar triangles) and show exact values at 30°, 45°, 60°.
//  2. Cuboid diagonal in 3D — a rotatable cuboid. Step through "base diagonal",
//     "space diagonal" and "angle with the base", each with its right-angled
//     triangle highlighted and the live Pythagoras / tan working.
import { useMemo, useState, type ReactElement } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, M, type WidgetDef } from "./kit";
import { renderInline } from "../Rich";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

const RAD = Math.PI / 180;

/** n significant figures, plain text with a real minus sign. */
function sig(v: number, n = 3): string {
  if (v === 0) return "0";
  const s = String(parseFloat(v.toPrecision(n)));
  return s.startsWith("-") ? "−" + s.slice(1) : s;
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

function surdMarkup(n: number): string {
  const [k, s] = splitSquare(n);
  if (s === 1) return String(k);
  return k === 1 ? `sqrt(${s})` : `${k}sqrt(${s})`;
}

/** √n simplified, as plain text for SVG labels: 2√13, 5, √7. */
function plainSurd(n: number): string {
  const [k, s] = splitSquare(n);
  if (s === 1) return String(k);
  return (k === 1 ? "" : String(k)) + "√" + s;
}

type P2 = [number, number];
const pts = (ps: P2[]) => ps.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");

function Caption({ text }: { text: string }) {
  return <span>{renderInline(text)}</span>;
}

// ===========================================================================
// 1. Triangle lab
// ===========================================================================

type LabMode = "squares" | "trig";

function SquaresView() {
  const [a, setA] = useState(3);
  const [b, setB] = useState(4);
  const c2 = a * a + b * b;
  const c = Math.sqrt(c2);
  const isTriple = Number.isInteger(c);
  const [k, s] = splitSquare(c2);

  // Maths coords: right angle C at the origin, A = (a, 0), B = (0, b).
  // Squares: on CA below, on CB to the left, on AB outwards (offset (b, a)).
  const W = 360, H = 320, pad = 14;
  const spanX = a + 2 * b, spanY = 2 * a + b;
  const sc = Math.min((W - 2 * pad) / spanX, (H - 2 * pad) / spanY);
  const ox = (W - spanX * sc) / 2 + b * sc;
  const oy = (H - spanY * sc) / 2 + (a + b) * sc;
  const P = (x: number, y: number): P2 => [ox + x * sc, oy - y * sc];

  const tri = [P(0, 0), P(a, 0), P(0, b)];
  const sqA = [P(0, 0), P(a, 0), P(a, -a), P(0, -a)];
  const sqB = [P(0, 0), P(0, b), P(-b, b), P(-b, 0)];
  const sqC = [P(a, 0), P(a + b, a), P(b, a + b), P(0, b)];
  const cC = P((a + b) / 2, (a + b) / 2); // centre of the square on the hypotenuse
  const gridA: ReactElement[] = [];
  const gridB: ReactElement[] = [];
  for (let i = 1; i < a; i++) {
    const [x1, y1] = P(i, 0), [x2, y2] = P(i, -a);
    gridA.push(<line key={`av${i}`} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-brand" strokeOpacity={0.35} strokeWidth={1} />);
    const [x3, y3] = P(0, -i), [x4, y4] = P(a, -i);
    gridA.push(<line key={`ah${i}`} x1={x3} y1={y3} x2={x4} y2={y4} className="stroke-brand" strokeOpacity={0.35} strokeWidth={1} />);
  }
  for (let i = 1; i < b; i++) {
    const [x1, y1] = P(-i, 0), [x2, y2] = P(-i, b);
    gridB.push(<line key={`bv${i}`} x1={x1} y1={y1} x2={x2} y2={y2} className="stroke-good" strokeOpacity={0.4} strokeWidth={1} />);
    const [x3, y3] = P(-b, i), [x4, y4] = P(0, i);
    gridB.push(<line key={`bh${i}`} x1={x3} y1={y3} x2={x4} y2={y4} className="stroke-good" strokeOpacity={0.4} strokeWidth={1} />);
  }
  const lbl = (p: P2, t: string) => (
    <text x={p[0]} y={p[1] + 5} fontSize={14} fontWeight={800} textAnchor="middle" className="fill-ink">{t}</text>
  );
  const cMarkup = surdMarkup(c2);

  let caption: string;
  if (isTriple) caption = `${a}, ${b}, ${c} is a **Pythagorean triple**: {{${a}^2 + ${b}^2 = ${a * a} + ${b * b} = ${c2} = ${c}^2}}, so the hypotenuse is exactly ${c}. ${gcdN(a, b) > 1 ? `It's ${gcdN(a, b)} × the triple ${a / gcdN(a, b)}, ${b / gcdN(a, b)}, ${c / gcdN(a, b)}.` : ""}`;
  else if (k > 1) caption = `The two small squares have total area ${a * a} + ${b * b} = ${c2}, so the big square has area ${c2} and its side is {{c = sqrt(${c2}) = sqrt(${k * k} * ${s}) = ${cMarkup}}} ≈ ${sig(c, 4)}. Not a whole number, so leave it as a surd if the question asks for an exact answer.`;
  else caption = `The two small squares have total area ${a * a} + ${b * b} = ${c2}, so the big square has area ${c2} and its side is {{c = sqrt(${c2})}} ≈ ${sig(c, 4)}. ${c2} has no square factor, so {{sqrt(${c2})}} is already in simplest form.`;

  return (
    <div className="space-y-3">
      <div className="grid gap-2 sm:grid-cols-2">
        <Stepper label={<span>Leg <M>a</M></span>} value={a} min={1} max={12} onChange={setA} />
        <Stepper label={<span>Leg <M>b</M></span>} value={b} min={1} max={12} onChange={setB} />
      </div>
      <div className="grid grid-cols-3 gap-2">
        <Readout label="a² + b²" value={`${a * a} + ${b * b}`} tone="ink" />
        <Readout label="c²" value={c2} tone="ink" />
        <Readout label="c (exact)" value={<M>{cMarkup}</M>} tone={isTriple ? "good" : "brand"} />
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Right-angled triangle with legs ${a} and ${b}. Squares on the legs have areas ${a * a} and ${b * b}; the square on the hypotenuse has area ${c2}, so the hypotenuse is ${isTriple ? c : `root ${c2}, about ${sig(c, 4)}`}.`}>
        <polygon points={pts(sqA)} className="fill-brand-soft stroke-brand" strokeWidth={1.5} />
        {gridA}
        <polygon points={pts(sqB)} className="fill-good-soft stroke-good" strokeWidth={1.5} />
        {gridB}
        <polygon points={pts(sqC)} className="fill-accent-soft stroke-accent" strokeWidth={1.5} />
        <polygon points={pts(tri)} className="fill-surface stroke-ink" strokeWidth={2} />
        <polyline points={pts([P(0.18 * Math.min(a, b), 0), P(0.18 * Math.min(a, b), 0.18 * Math.min(a, b)), P(0, 0.18 * Math.min(a, b))])} fill="none" className="stroke-ink" strokeWidth={1.5} />
        {lbl(P(a / 2, -a / 2), `${a * a}`)}
        {lbl(P(-b / 2, b / 2), `${b * b}`)}
        {lbl(cC, `${c2}`)}
        <text x={P(a / 2, 0)[0]} y={P(a / 2, 0)[1] - 6} fontSize={12} textAnchor="middle" className="fill-ink-2">a = {a}</text>
        <text x={P(0, b / 2)[0] + 6} y={P(0, b / 2)[1]} fontSize={12} textAnchor="start" className="fill-ink-2">b = {b}</text>
      </svg>
      <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed text-ink"><Caption text={caption} /></div>
    </div>
  );
}

function gcdN(a: number, b: number): number {
  while (b) [a, b] = [b, a % b];
  return a;
}

type From = "P" | "R";
const EXACT: Record<number, { sin: string; cos: string; tan: string }> = {
  30: { sin: "1/2", cos: "sqrt(3)/2", tan: "sqrt(3)/3" },
  45: { sin: "sqrt(2)/2", cos: "sqrt(2)/2", tan: "1" },
  60: { sin: "sqrt(3)/2", cos: "1/2", tan: "sqrt(3)" },
};

function TrigView() {
  const [th, setTh] = useState(35);
  const [hyp, setHyp] = useState(8);
  const [from, setFrom] = useState<From>("P");

  const adjP = hyp * Math.cos(th * RAD); // horizontal leg PQ
  const oppP = hyp * Math.sin(th * RAD); // vertical leg QR
  const ang = from === "P" ? th : 90 - th;
  const O = from === "P" ? oppP : adjP;
  const A = from === "P" ? adjP : oppP;

  // Fixed scale so changing the hypotenuse visibly scales the triangle.
  const W = 380, H = 290, sc = 24;
  const x0 = 64, yb = 262;
  const P: P2 = [x0, yb], Q: P2 = [x0 + adjP * sc, yb], R: P2 = [x0 + adjP * sc, yb - oppP * sc];
  const legH = { from: "QR", len: oppP }, legB = { from: "PQ", len: adjP };
  const roleOf = (side: "PQ" | "QR" | "PR") => (side === "PR" ? "H" : (side === "QR") === (from === "P") ? "O" : "A");
  const colour = (r: string) => (r === "H" ? "fill-accent" : r === "O" ? "fill-brand" : "fill-good");
  const lineCol = (r: string) => (r === "H" ? "stroke-accent" : r === "O" ? "stroke-brand" : "stroke-good");

  // Angle arc at the chosen vertex.
  const arc = (() => {
    const r = 26;
    if (from === "P") {
      const e: P2 = [P[0] + r * Math.cos(th * RAD), P[1] - r * Math.sin(th * RAD)];
      return { d: `M${P[0] + r},${P[1]} A${r},${r} 0 0 0 ${e[0].toFixed(1)},${e[1].toFixed(1)}`, lx: P[0] + (r + 16) * Math.cos((th / 2) * RAD), ly: P[1] - (r + 16) * Math.sin((th / 2) * RAD) + 4 };
    }
    // At R: between down (towards Q) and towards P.
    const a2 = 90 - th; // angle at R
    const e: P2 = [R[0] - r * Math.sin(a2 * RAD), R[1] + r * Math.cos(a2 * RAD)];
    return { d: `M${R[0]},${R[1] + r} A${r},${r} 0 0 1 ${e[0].toFixed(1)},${e[1].toFixed(1)}`, lx: R[0] - (r + 14) * Math.sin((a2 / 2) * RAD), ly: R[1] + (r + 14) * Math.cos((a2 / 2) * RAD) + 4 };
  })();

  const ex = EXACT[ang];
  const sinV = O / hyp, cosV = A / hyp, tanV = O / A;

  const caption = `From the ${ang}° angle: **O** = ${sig(O)}, **A** = ${sig(A)}, **H** = ${sig(hyp)}. So {{sin ${ang}° = O/H}} = ${sig(O, 4)} ÷ ${sig(hyp, 4)} = ${sig(sinV, 4)}${ex ? ` = {{${ex.sin}}} exactly` : ""}. Change H and watch O and A grow — but the ratios don't move: every right-angled triangle with a ${ang}° angle is similar. That's why sin, cos and tan depend only on the angle.${from === "R" ? ` Notice {{sin ${ang}° = cos ${90 - ang}°}}: the opposite for one angle is the adjacent for the other.` : ""}`;

  return (
    <div className="space-y-3">
      <Slider label={<span>Angle at P</span>} value={th} min={5} max={85} onChange={setTh} format={(v) => `${v}°`} />
      <Slider label={<span>Hypotenuse H</span>} value={hyp} min={2} max={10} step={0.5} onChange={setHyp} format={(v) => sig(v, 3)} />
      <div className="flex flex-wrap items-center gap-3">
        <span className="text-sm font-semibold text-ink-2">Label sides from</span>
        <Segmented<From> label="Label sides from" options={[{ value: "P", label: `angle P (${th}°)` }, { value: "R", label: `angle R (${90 - th}°)` }]} value={from} onChange={setFrom} />
      </div>
      <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Right-angled triangle PQR with the right angle at Q. Labelling from the ${ang} degree angle at ${from}: opposite ${sig(O)}, adjacent ${sig(A)}, hypotenuse ${sig(hyp)}.`}>
        <polygon points={pts([P, Q, R])} className="fill-surface-2" />
        <line x1={P[0]} y1={P[1]} x2={Q[0]} y2={Q[1]} className={lineCol(roleOf("PQ"))} strokeWidth={4} />
        <line x1={Q[0]} y1={Q[1]} x2={R[0]} y2={R[1]} className={lineCol(roleOf("QR"))} strokeWidth={4} />
        <line x1={P[0]} y1={P[1]} x2={R[0]} y2={R[1]} className={lineCol("H")} strokeWidth={4} />
        <polyline points={pts([[Q[0] - 11, yb], [Q[0] - 11, yb - 11], [Q[0], yb - 11]])} fill="none" className="stroke-ink" strokeWidth={1.5} />
        <path d={arc.d} fill="none" className="stroke-ink" strokeWidth={2} />
        <text x={arc.lx} y={arc.ly} fontSize={12} fontWeight={700} textAnchor="middle" className="fill-ink">{ang}°</text>
        <text x={(P[0] + Q[0]) / 2} y={yb + 20} fontSize={13} fontWeight={800} textAnchor="middle" className={colour(roleOf("PQ"))}>{roleOf("PQ")} = {sig(legB.len)}</text>
        <text x={Q[0] + 8} y={yb - (legH.len * sc) / 2 + 4} fontSize={13} fontWeight={800} textAnchor="start" className={colour(roleOf("QR"))}>{roleOf("QR")} = {sig(legH.len)}</text>
        <text x={(P[0] + R[0]) / 2 - 20 * Math.sin(th * RAD)} y={(P[1] + R[1]) / 2 - 20 * Math.cos(th * RAD) + 4} fontSize={13} fontWeight={800} textAnchor="middle" className={colour("H")}>H = {sig(hyp)}</text>
        <text x={P[0] - 6} y={yb + 16} fontSize={12} textAnchor="end" className="fill-ink-2">P</text>
        <text x={Q[0] + 6} y={yb + 16} fontSize={12} className="fill-ink-2">Q</text>
        <text x={R[0] + 6} y={R[1] - 4} fontSize={12} className="fill-ink-2">R</text>
      </svg>
      <div className="grid grid-cols-3 gap-2">
        <Readout label={`sin ${ang}° = O/H`} value={ex ? <M>{ex.sin}</M> : sig(sinV, 4)} />
        <Readout label={`cos ${ang}° = A/H`} value={ex ? <M>{ex.cos}</M> : sig(cosV, 4)} tone="good" />
        <Readout label={`tan ${ang}° = O/A`} value={ex ? <M>{ex.tan}</M> : sig(tanV, 4)} tone="ink" />
      </div>
      <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed text-ink"><Caption text={caption} /></div>
    </div>
  );
}

function TriangleLab() {
  const [mode, setMode] = useState<LabMode>("squares");
  return (
    <WidgetFrame
      title="Right-angled triangle lab"
      tryThis={
        mode === "squares"
          ? [
              "Find three different pairs of legs that give a whole-number hypotenuse. Which ones are multiples of 3, 4, 5?",
              "Make the legs equal. Why is the hypotenuse always a multiple of {{sqrt(2)}}?",
              "Find legs that give {{c = 5sqrt(2)}}. Is there more than one answer?",
            ]
          : [
              "Set the angle to 30° and change H. Predict O before you look.",
              "Find the angle where O = A. What is tan of that angle?",
              "Switch the labels to angle R. Which ratio for P equals sin R?",
              "Make sin bigger than 0.9. What happens to the triangle's shape?",
            ]
      }
      caption={
        mode === "squares" ? (
          <span>Pythagoras is a statement about <b>areas</b>: the two squares on the shorter sides exactly fill the square on the hypotenuse. That&rsquo;s why you square, add, then square root.</span>
        ) : (
          <span><b>O</b> is opposite the angle, <b>A</b> is next to it (not the hypotenuse), <b>H</b> is opposite the right angle. Always label from the angle you&rsquo;re using — the labels move when the angle does.</span>
        )
      }
    >
      <div className="mb-3">
        <Segmented<LabMode> label="View" options={[{ value: "squares", label: "Squares (Pythagoras)" }, { value: "trig", label: "SOH CAH TOA" }]} value={mode} onChange={setMode} />
      </div>
      {mode === "squares" ? <SquaresView /> : <TrigView />}
    </WidgetFrame>
  );
}

// ===========================================================================
// 2. Cuboid diagonal in 3D
// ===========================================================================

type V3 = [number, number, number];
type Step = "base" | "space" | "angle";

function CuboidDiagonal() {
  const [l, setL] = useState(8);
  const [w, setW] = useState(4);
  const [h, setH] = useState(5);
  const [yaw, setYaw] = useState(30);
  const [step, setStep] = useState<Step>("base");

  const W = 360, H = 300, sc = 15, cx = 180, cy = 158;
  const pitch = 24 * RAD;
  const proj = useMemo(() => {
    const cs = Math.cos(yaw * RAD), sn = Math.sin(yaw * RAD);
    return (p: V3): P2 => {
      const x = p[0] - l / 2, y = p[1] - w / 2, z = p[2] - h / 2;
      const xr = x * cs - y * sn;
      const yr = x * sn + y * cs;
      const up = z * Math.cos(pitch) + yr * Math.sin(pitch);
      return [cx + xr * sc, cy - up * sc];
    };
  }, [yaw, l, w, h, pitch]);

  // Corners: A front-left-bottom, B front-right-bottom, C back-right-bottom, D back-left-bottom; E–H above.
  const A: V3 = [0, 0, 0], B: V3 = [l, 0, 0], C: V3 = [l, w, 0], D: V3 = [0, w, 0];
  const up = (p: V3): V3 => [p[0], p[1], h];
  const E = up(A), F = up(B), G = up(C), Hh = up(D);
  const edges: Array<[V3, V3]> = [[A, B], [B, C], [C, D], [D, A], [E, F], [F, G], [G, Hh], [Hh, E], [A, E], [B, F], [C, G], [D, Hh]];

  const base2 = l * l + w * w;
  const baseD = Math.sqrt(base2);
  const d2 = base2 + h * h;
  const space = Math.sqrt(d2);
  const angle = Math.atan(h / baseD) / RAD;

  // Right-angle mark at vertex V between unit directions u and v (in 3D), size m.
  const mark = (V: V3, u: V3, v: V3, m = 0.55) => {
    const p1: V3 = [V[0] + u[0] * m, V[1] + u[1] * m, V[2] + u[2] * m];
    const p2: V3 = [p1[0] + v[0] * m, p1[1] + v[1] * m, p1[2] + v[2] * m];
    const p3: V3 = [V[0] + v[0] * m, V[1] + v[1] * m, V[2] + v[2] * m];
    return pts([proj(p1), proj(p2), proj(p3)]);
  };

  // Angle arc at A from the base diagonal AC up to the space diagonal AG.
  const arcPath = (() => {
    const r = Math.min(2.2, baseD * 0.4);
    const u: V3 = [l / baseD, w / baseD, 0];
    const out: string[] = [];
    for (let i = 0; i <= 16; i++) {
      const t = ((angle * i) / 16) * RAD;
      const p: V3 = [r * Math.cos(t) * u[0], r * Math.cos(t) * u[1], r * Math.sin(t)];
      const q = proj(p);
      out.push(`${i === 0 ? "M" : "L"}${q[0].toFixed(1)},${q[1].toFixed(1)}`);
    }
    const mid = (angle / 2) * RAD;
    const lp = proj([(r + 1.1) * Math.cos(mid) * u[0], (r + 1.1) * Math.cos(mid) * u[1], (r + 1.1) * Math.sin(mid)]);
    return { d: out.join(" "), lp };
  })();

  const pA = proj(A), pB = proj(B), pC = proj(C), pG = proj(G);
  const mid = (p: P2, q: P2): P2 => [(p[0] + q[0]) / 2, (p[1] + q[1]) / 2];
  const tag = (p: P2, t: string, cls = "fill-ink", dx = 0, dy = -6) => (
    <text x={p[0] + dx} y={p[1] + dy} fontSize={12} fontWeight={700} textAnchor="middle" className={cls}>{t}</text>
  );

  const baseM = surdMarkup(base2), spaceM = surdMarkup(d2);
  const working: string[] =
    step === "base"
      ? [
          `The base is flat, so ABC is an ordinary right-angled triangle (right angle at B).`,
          `{{AC^2 = ${l}^2 + ${w}^2 = ${l * l} + ${w * w} = ${base2}}}`,
          `{{AC = ${baseM}}} ≈ ${sig(baseD, 4)}. Keep {{AC^2 = ${base2}}} for the next step — no rounding needed.`,
        ]
      : step === "space"
        ? [
            `CG is vertical, so it is perpendicular to everything in the base — including AC. Triangle ACG has its right angle at C.`,
            `{{AG^2 = AC^2 + CG^2 = ${base2} + ${h}^2 = ${d2}}}`,
            `{{AG = ${spaceM}}} ≈ ${sig(space, 4)}. In one go: {{d = sqrt(l^2 + w^2 + h^2)}}.`,
          ]
        : [
            `The angle between AG and the base is the angle between AG and its "shadow" on the base, AC.`,
            `In triangle ACG: CG = ${h} is opposite, AC = {{${baseM}}} is adjacent.`,
            `{{theta = tan^(-1)(${h}/${baseM.includes("sqrt") ? `(${baseM})` : baseM})}} = ${sig(angle, 4)}° ≈ ${(Math.round(angle * 10) / 10).toFixed(1)}°`,
          ];

  return (
    <WidgetFrame
      title="Cuboid diagonal in 3D"
      tryThis={[
        "Find a cuboid whose space diagonal is a whole number. (Try 1, 2, 2 or 2, 3, 6.)",
        "Keep the height fixed and make the base bigger. What happens to the angle with the base?",
        "Rotate the cuboid until angle ACG looks acute. Is it still 90°? Why?",
        "Make a cube. Show that the angle with the base is always {{tan^(-1)(1/sqrt(2))}} ≈ 35.3°.",
      ]}
      caption={
        <span>
          3D problems are 2D problems in disguise: find a right-angled triangle that <b>lies in a flat plane</b>. Here you use two — one flat on the base, one standing up through the diagonal. Turning the cuboid changes how the angles <i>look</i>, never what they are.
        </span>
      }
    >
      <div className="space-y-3">
        <div className="grid gap-2 sm:grid-cols-3">
          <Stepper label="Length AB" value={l} min={1} max={10} onChange={setL} />
          <Stepper label="Width BC" value={w} min={1} max={10} onChange={setW} />
          <Stepper label="Height CG" value={h} min={1} max={10} onChange={setH} />
        </div>
        <Slider label="Turn the cuboid" value={yaw} min={0} max={80} onChange={setYaw} format={(v) => `${v}°`} />
        <Segmented<Step>
          label="Step"
          options={[
            { value: "base", label: "1. Base diagonal" },
            { value: "space", label: "2. Space diagonal" },
            { value: "angle", label: "3. Angle with base" },
          ]}
          value={step}
          onChange={setStep}
        />
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Cuboid ${l} by ${w} by ${h}. Base diagonal AC is root ${base2}, about ${sig(baseD, 4)}; space diagonal AG is root ${d2}, about ${sig(space, 4)}; the angle between AG and the base is about ${sig(angle, 3)} degrees.`}>
          <polygon points={pts([pA, pB, pC, proj(D)])} className="fill-brand-soft" fillOpacity={0.6} />
          {edges.map(([p, q], i) => {
            const a = proj(p), b = proj(q);
            return <line key={i} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} className="stroke-ink-2" strokeWidth={1.4} />;
          })}
          {step === "base" ? (
            <>
              <polygon points={pts([pA, pB, pC])} className="fill-good-soft stroke-good" strokeWidth={2.5} />
              <polyline points={mark(B, [-1, 0, 0], [0, 1, 0])} fill="none" className="stroke-ink" strokeWidth={1.5} />
              {tag(mid(pA, pB), `${l}`, "fill-ink", 0, 16)}
              {tag(mid(pB, pC), `${w}`, "fill-ink", 10, 14)}
              {tag(mid(pA, pC), plainSurd(base2), "fill-good", 0, -8)}
            </>
          ) : (
            <>
              <polygon points={pts([pA, pC, pG])} className="fill-accent-soft stroke-accent" strokeWidth={2} />
              <line x1={pA[0]} y1={pA[1]} x2={pC[0]} y2={pC[1]} className="stroke-good" strokeWidth={3} />
              <line x1={pA[0]} y1={pA[1]} x2={pG[0]} y2={pG[1]} className="stroke-brand" strokeWidth={3} />
              <polyline points={mark(C, [-l / baseD, -w / baseD, 0], [0, 0, 1])} fill="none" className="stroke-ink" strokeWidth={1.5} />
              {tag(mid(pA, pC), plainSurd(base2), "fill-good", 0, 16)}
              {tag(mid(pC, pG), `${h}`, "fill-ink", 10, 0)}
              {tag(mid(pA, pG), step === "space" ? plainSurd(d2) : "", "fill-brand", -12, -8)}
              {step === "angle" ? (
                <>
                  <path d={arcPath.d} fill="none" className="stroke-ink" strokeWidth={2} />
                  {tag(arcPath.lp, "θ", "fill-ink", 0, 4)}
                </>
              ) : null}
            </>
          )}
          {(
            [
              [A, "A", 0, 16],
              [B, "B", 8, 14],
              [C, "C", 10, 4],
              [G, "G", 8, -6],
            ] as Array<[V3, string, number, number]>
          ).map(([p, t, dx, dy]) => {
            const q = proj(p);
            return <text key={t} x={q[0] + dx} y={q[1] + dy} fontSize={12} fontWeight={700} textAnchor="middle" className="fill-ink-2">{t}</text>;
          })}
        </svg>
        <div className="grid grid-cols-3 gap-2">
          <Readout label="Base AC" value={<M>{baseM}</M>} tone="good" />
          <Readout label="Space AG" value={<M>{spaceM}</M>} />
          <Readout label="Angle θ" value={`${(Math.round(angle * 10) / 10).toFixed(1)}°`} tone="ink" />
        </div>
        <ol className="list-decimal space-y-1 rounded-xl bg-surface-2 p-3 pl-8 text-sm leading-relaxed text-ink">
          {working.map((t, i) => (
            <li key={i}><Caption text={t} /></li>
          ))}
        </ol>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------

export const widgets: WidgetDef[] = [
  { id: "triangle-lab", title: "Right-angled triangle lab", blurb: "See Pythagoras as areas, then label O, A, H and watch sin, cos and tan stay fixed as the triangle grows.", Component: TriangleLab },
  { id: "cuboid-diagonal", title: "Cuboid diagonal in 3D", blurb: "Turn a cuboid and find its space diagonal and the angle with the base, one right-angled triangle at a time.", Component: CuboidDiagonal },
];
