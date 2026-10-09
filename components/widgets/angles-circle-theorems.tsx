"use client";
// Interactive explorables for "angles-circle-theorems".
//  1. Circle theorem lab — drag points round a circle (or use the sliders) and
//     watch the angle at the centre, angles in the same segment, a cyclic
//     quadrilateral or the alternate segment theorem update live. Every angle
//     is computed exactly from the arcs (whole degrees → halves at worst).
//  2. Power of a point — two lines through P cut a circle of radius 5 cm.
//     PA × PB = PC × PD whether P is inside (intersecting chords) or outside
//     (secants), and PT² gives the same number for a tangent.
import { useRef, useState, type PointerEvent as ReactPointerEvent, type ReactNode } from "react";
import { WidgetFrame, Slider, Segmented, Readout, M, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* Shared helpers                                                             */
/* ------------------------------------------------------------------------ */

type Pt = [number, number];
const RAD = Math.PI / 180;
const mod = (a: number) => ((a % 360) + 360) % 360;
/** Anticlockwise arc (degrees) from p to q. */
const arcFrom = (p: number, q: number) => mod(q - p);
/** Is x strictly inside the anticlockwise arc from p to q? */
const between = (p: number, q: number, x: number) => arcFrom(p, x) > 0 && arcFrom(p, x) < arcFrom(p, q);
const deg = (v: number) => `${Number.isInteger(v) ? v : v.toFixed(1)}°`;
const f1 = (n: number) => Math.round(n * 10) / 10;
/** Direction (maths degrees, anticlockwise from east) from a to b in screen coordinates. */
const dirDeg = (a: Pt, b: Pt) => Math.atan2(a[1] - b[1], b[0] - a[0]) / RAD;
const toward = (V: Pt, d: number, r: number): Pt => [V[0] + r * Math.cos(d * RAD), V[1] - r * Math.sin(d * RAD)];

/** Arc from maths angle `start`, sweeping anticlockwise by `sweep` degrees, radius r about V. */
function sweepPath(V: Pt, start: number, sweep: number, r: number): string {
  const s = toward(V, start, r);
  const e = toward(V, start + sweep, r);
  return `M${f1(s[0])},${f1(s[1])} A${r},${r} 0 ${sweep > 180 ? 1 : 0} 0 ${f1(e[0])},${f1(e[1])}`;
}

/** The (non-reflex) angle PVQ: its arc path and a label position on the bisector. */
function angleBetween(V: Pt, P: Pt, Q: Pt, r: number, labelGap = 15): { d: string; at: Pt } {
  const d1 = dirDeg(V, P);
  const d2 = dirDeg(V, Q);
  const diff = mod(d2 - d1);
  const [start, sweep] = diff <= 180 ? [d1, diff] : [d2, 360 - diff];
  return { d: sweepPath(V, start, sweep, r), at: toward(V, start + sweep / 2, r + labelGap) };
}

function Label({ at, children, tone = "fill-ink", bold = false, size = 12 }: { at: Pt; children: ReactNode; tone?: string; bold?: boolean; size?: number }) {
  return (
    <text
      x={at[0]}
      y={at[1] + size / 3}
      fontSize={size}
      textAnchor="middle"
      className={`${tone} stroke-surface`}
      strokeWidth={3}
      paintOrder="stroke"
      fontWeight={bold ? 800 : 600}
    >
      {children}
    </text>
  );
}

/* ------------------------------------------------------------------------ */
/* 1. Circle theorem lab                                                      */
/* ------------------------------------------------------------------------ */

type Mode = "centre" | "segment" | "cyclic" | "tangent";
type Name = "A" | "B" | "C" | "D";
const USES: Record<Mode, Name[]> = {
  centre: ["A", "B", "C"],
  segment: ["A", "B", "C", "D"],
  cyclic: ["A", "B", "C", "D"],
  tangent: ["A", "B", "C"],
};
const W = 360;
const H = 310;
const CX = 180;
const CY = 155;
const R = 105;
const O: Pt = [CX, CY];
const onC = (d: number): Pt => toward(O, d, R);

const TRY: Record<Mode, string[]> = {
  centre: [
    "Drag C anywhere on the major arc. Does angle ACB change?",
    "Make angle AOB exactly 180° (AB a diameter). What happens to angle ACB?",
    "Drag C onto the minor arc AB. Now the angle at the centre is reflex — is it still double?",
  ],
  segment: [
    "Keep C and D on the same side of AB. Can you make angle ACB ≠ angle ADB?",
    "Drag D across chord AB. What do the two angles add up to now?",
  ],
  cyclic: [
    "Make one angle 100°. Predict its opposite angle before you look.",
    "Can you make a cyclic quadrilateral with all four angles equal? What shape is it?",
    "Drag the points out of order. The quadrilateral follows the circle — do the sums still hold?",
  ],
  tangent: [
    "Move C around the major arc. Which angle stays equal to angle ACB?",
    "Move B until AB is a diameter. What is the angle between the tangent and AB?",
    "Drag C to the other side of AB. Which side of the tangent do you use now?",
  ],
};

function CircleTheoremLab() {
  const [mode, setMode] = useState<Mode>("centre");
  const [pos, setPos] = useState<Record<Name, number>>({ A: 205, B: 335, C: 100, D: 150 });
  const svgRef = useRef<SVGSVGElement>(null);
  const drag = useRef<Name | null>(null);
  const names = USES[mode];

  const setPoint = (n: Name, d0: number) => {
    const d = mod(Math.round(d0));
    setPos((p) => {
      const clash = names.some((m) => m !== n && Math.min(arcFrom(p[m], d), arcFrom(d, p[m])) < 5);
      return clash ? p : { ...p, [n]: d };
    });
  };

  const toSvg = (e: ReactPointerEvent<SVGSVGElement>): Pt | null => {
    const svg = svgRef.current;
    if (!svg) return null;
    const r = svg.getBoundingClientRect();
    return [((e.clientX - r.left) / r.width) * W, ((e.clientY - r.top) / r.height) * H];
  };
  const angleOf = (p: Pt) => Math.atan2(CY - p[1], p[0] - CX) / RAD;
  const onDown = (e: ReactPointerEvent<SVGSVGElement>) => {
    const p = toSvg(e);
    if (!p) return;
    let best: Name | null = null;
    let bestD = 48;
    for (const n of names) {
      const q = onC(pos[n]);
      const dist = Math.hypot(q[0] - p[0], q[1] - p[1]);
      if (dist < bestD) {
        best = n;
        bestD = dist;
      }
    }
    if (!best) return;
    drag.current = best;
    e.currentTarget.setPointerCapture(e.pointerId);
    setPoint(best, angleOf(p));
  };
  const onMove = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (!drag.current) return;
    const p = toSvg(e);
    if (p) setPoint(drag.current, angleOf(p));
  };
  const onUp = () => {
    drag.current = null;
  };

  const P = { A: onC(pos.A), B: onC(pos.B), C: onC(pos.C), D: onC(pos.D) };
  const a = pos.A;
  const b = pos.B;
  const arcAB = arcFrom(a, b);
  /** Arc AB that does NOT contain point x (this is the arc an angle at x stands on). */
  const standOn = (x: number) => (between(a, b, x) ? { start: b, sweep: 360 - arcAB } : { start: a, sweep: arcAB });

  const shapes: ReactNode[] = [];
  const labels: ReactNode[] = [];
  let caption: ReactNode = null;
  let readouts: ReactNode = null;
  let aria = "";

  if (mode === "centre") {
    const arc = standOn(pos.C);
    const theta = arc.sweep;
    const insc = theta / 2;
    shapes.push(
      <path key="arc" d={sweepPath(O, arc.start, arc.sweep, R)} fill="none" className="stroke-brand" strokeWidth={5} strokeLinecap="round" opacity={0.35} />,
      <line key="oa" x1={CX} y1={CY} x2={P.A[0]} y2={P.A[1]} className="stroke-brand" strokeWidth={2} />,
      <line key="ob" x1={CX} y1={CY} x2={P.B[0]} y2={P.B[1]} className="stroke-brand" strokeWidth={2} />,
      <line key="ca" x1={P.C[0]} y1={P.C[1]} x2={P.A[0]} y2={P.A[1]} className="stroke-accent" strokeWidth={2} />,
      <line key="cb" x1={P.C[0]} y1={P.C[1]} x2={P.B[0]} y2={P.B[1]} className="stroke-accent" strokeWidth={2} />,
      <path key="mo" d={sweepPath(O, arc.start, theta, 24)} fill="none" className="stroke-brand" strokeWidth={2} />,
    );
    const mc = angleBetween(P.C, P.A, P.B, 26);
    shapes.push(<path key="mc" d={mc.d} fill="none" className="stroke-accent" strokeWidth={2} />);
    labels.push(
      <Label key="lo" at={toward(O, arc.start + theta / 2, 42)} tone="fill-brand" bold>
        {deg(theta)}
      </Label>,
      <Label key="lc" at={mc.at} tone="fill-accent" bold>
        {deg(insc)}
      </Label>,
    );
    readouts = (
      <>
        <Readout label={theta > 180 ? "Reflex angle AOB" : "Angle AOB"} value={deg(theta)} />
        <Readout label="Angle ACB" value={deg(insc)} tone="ink" />
        <Readout label="AOB ÷ ACB" value="2" tone="good" />
      </>
    );
    aria = `Circle with centre O. Angle AOB at the centre is ${deg(theta)} and angle ACB at the circumference is ${deg(insc)}.`;
    caption =
      theta === 180 ? (
        <>
          AB is now a <strong>diameter</strong>: the &quot;angle at the centre&quot; is a straight line, 180°, so angle ACB = 90°. That is the <strong>angle in a semicircle</strong> theorem — a special case of the centre theorem.
        </>
      ) : (
        <>
          Both highlighted angles stand on the same arc AB (the shaded arc, {deg(theta)} of the circle). The angle at the centre is always <strong>twice</strong> the angle at the circumference:{" "}
          <M>{`${theta} ÷ 2 = ${theta / 2}`}</M>°.{" "}
          {theta > 180
            ? "C is on the minor arc, so the angle at O on C's far side is reflex — the theorem still works if you use the reflex angle."
            : "Slide C along the major arc: the angle at C never changes, because the arc it stands on doesn't change."}
        </>
      );
  } else if (mode === "segment") {
    const arcC = standOn(pos.C);
    const arcD = standOn(pos.D);
    const same = arcC.start === arcD.start;
    const ac = arcC.sweep / 2;
    const ad = arcD.sweep / 2;
    shapes.push(
      <line key="ab" x1={P.A[0]} y1={P.A[1]} x2={P.B[0]} y2={P.B[1]} className="stroke-ink-2" strokeWidth={1.5} strokeDasharray="5 4" />,
      <line key="ca" x1={P.C[0]} y1={P.C[1]} x2={P.A[0]} y2={P.A[1]} className="stroke-accent" strokeWidth={2} />,
      <line key="cb" x1={P.C[0]} y1={P.C[1]} x2={P.B[0]} y2={P.B[1]} className="stroke-accent" strokeWidth={2} />,
      <line key="da" x1={P.D[0]} y1={P.D[1]} x2={P.A[0]} y2={P.A[1]} className="stroke-brand" strokeWidth={2} />,
      <line key="db" x1={P.D[0]} y1={P.D[1]} x2={P.B[0]} y2={P.B[1]} className="stroke-brand" strokeWidth={2} />,
    );
    const mc = angleBetween(P.C, P.A, P.B, 24);
    const md = angleBetween(P.D, P.A, P.B, 24);
    shapes.push(<path key="mc" d={mc.d} fill="none" className="stroke-accent" strokeWidth={2} />, <path key="md" d={md.d} fill="none" className="stroke-brand" strokeWidth={2} />);
    labels.push(
      <Label key="lc" at={mc.at} tone="fill-accent" bold>
        {deg(ac)}
      </Label>,
      <Label key="ld" at={md.at} tone="fill-brand" bold>
        {deg(ad)}
      </Label>,
    );
    readouts = (
      <>
        <Readout label="Angle ACB" value={deg(ac)} tone="ink" />
        <Readout label="Angle ADB" value={deg(ad)} />
        <Readout label={same ? "Difference" : "Sum"} value={same ? deg(Math.abs(ac - ad)) : deg(ac + ad)} tone="good" />
      </>
    );
    aria = `Circle with chord AB. C and D are on ${same ? "the same side" : "opposite sides"} of AB. Angle ACB is ${deg(ac)} and angle ADB is ${deg(ad)}.`;
    caption = same ? (
      <>
        C and D are in the <strong>same segment</strong> (same side of chord AB), so both angles stand on the same arc AB and are each half of the same angle at the centre: angle ACB = angle ADB = {deg(ac)}.
      </>
    ) : (
      <>
        C and D are now on <strong>opposite sides</strong> of AB, so ACBD is a <strong>cyclic quadrilateral</strong>. The two angles stand on the two different arcs, which make the whole circle (360°), so they add up to{" "}
        <M>{"360 ÷ 2 = 180"}</M>°.
      </>
    );
  } else if (mode === "cyclic") {
    const order = [...names].sort((u, v) => pos[u] - pos[v]);
    const angAt: Record<string, number> = {};
    order.forEach((v, i) => {
      const prev = order[(i + 3) % 4];
      const next = order[(i + 1) % 4];
      angAt[v] = (360 - arcFrom(pos[prev], pos[next])) / 2;
      const m = angleBetween(P[v], P[prev], P[next], 22);
      shapes.push(<path key={`m${v}`} d={m.d} fill="none" className={i % 2 ? "stroke-brand" : "stroke-accent"} strokeWidth={2} />);
      labels.push(
        <Label key={`l${v}`} at={m.at} tone={i % 2 ? "fill-brand" : "fill-accent"} bold>
          {deg(angAt[v])}
        </Label>,
      );
    });
    const poly = order.map((v) => `${f1(P[v][0])},${f1(P[v][1])}`).join(" ");
    shapes.unshift(<polygon key="q" points={poly} className="fill-brand-soft stroke-ink" strokeWidth={2} opacity={0.9} />);
    const [p0, p1, p2, p3] = order;
    readouts = (
      <>
        <Readout label={`∠${p0} + ∠${p2}`} value={deg(angAt[p0] + angAt[p2])} tone="good" />
        <Readout label={`∠${p1} + ∠${p3}`} value={deg(angAt[p1] + angAt[p3])} tone="good" />
        <Readout label="All four" value={deg(angAt[p0] + angAt[p1] + angAt[p2] + angAt[p3])} tone="ink" />
      </>
    );
    aria = `Cyclic quadrilateral ${order.join("")}. Angles: ${order.map((v) => `${v} ${deg(angAt[v])}`).join(", ")}.`;
    caption = (
      <>
        Opposite angles of a cyclic quadrilateral add up to 180°: ∠{p0} + ∠{p2} = {deg(angAt[p0])} + {deg(angAt[p2])} = 180°. Why? ∠{p0} and ∠{p2} stand on the two arcs between {p1} and {p3}, which together make the full 360°, and each angle is half its arc. Orange and purple angles are opposite pairs.
      </>
    );
  } else {
    // tangent: alternate segment theorem
    const arc = standOn(pos.C);
    const insc = arc.sweep / 2;
    const rayDir = arc.start === a ? a + 90 : a - 90; // tangent ray on the side away from C
    const T1 = toward(P.A, a + 90, 170);
    const T2 = toward(P.A, a - 90, 170);
    const ray = toward(P.A, rayDir, 60);
    shapes.push(
      <line key="t" x1={T1[0]} y1={T1[1]} x2={T2[0]} y2={T2[1]} className="stroke-ink" strokeWidth={2} />,
      <line key="oa" x1={CX} y1={CY} x2={P.A[0]} y2={P.A[1]} className="stroke-ink-2" strokeWidth={1.5} strokeDasharray="5 4" />,
      <line key="ab" x1={P.A[0]} y1={P.A[1]} x2={P.B[0]} y2={P.B[1]} className="stroke-brand" strokeWidth={2} />,
      <line key="ca" x1={P.C[0]} y1={P.C[1]} x2={P.A[0]} y2={P.A[1]} className="stroke-accent" strokeWidth={2} />,
      <line key="cb" x1={P.C[0]} y1={P.C[1]} x2={P.B[0]} y2={P.B[1]} className="stroke-accent" strokeWidth={2} />,
    );
    const mt = angleBetween(P.A, ray, P.B, 30);
    const mc = angleBetween(P.C, P.A, P.B, 24);
    // right angle between radius and tangent
    const u1 = toward([0, 0], a + 180, 9);
    const u2 = toward([0, 0], rayDir + 180, 0);
    const v2 = toward([0, 0], a + 90, 9);
    void u2;
    const sq = `M${f1(P.A[0] + u1[0])},${f1(P.A[1] + u1[1])} L${f1(P.A[0] + u1[0] + v2[0])},${f1(P.A[1] + u1[1] + v2[1])} L${f1(P.A[0] + v2[0])},${f1(P.A[1] + v2[1])}`;
    shapes.push(
      <path key="sq" d={sq} fill="none" className="stroke-ink-2" strokeWidth={1.3} />,
      <path key="mt" d={mt.d} fill="none" className="stroke-brand" strokeWidth={2} />,
      <path key="mc" d={mc.d} fill="none" className="stroke-accent" strokeWidth={2} />,
    );
    labels.push(
      <Label key="lt" at={mt.at} tone="fill-brand" bold>
        {deg(insc)}
      </Label>,
      <Label key="lc" at={mc.at} tone="fill-accent" bold>
        {deg(insc)}
      </Label>,
    );
    readouts = (
      <>
        <Readout label="Tangent–chord angle" value={deg(insc)} />
        <Readout label="Angle ACB" value={deg(insc)} tone="ink" />
        <Readout label="Angle OAB" value={deg(90 - insc < 0 ? insc - 90 : 90 - insc)} tone="ink" />
      </>
    );
    aria = `Circle with a tangent at A, chord AB and a point C. The angle between the tangent and AB is ${deg(insc)}, equal to angle ACB.`;
    caption = (
      <>
        <strong>Alternate segment theorem:</strong> the angle between the tangent at A and the chord AB (measured on the side away from C) equals angle ACB in the other segment — both are {deg(insc)}. Proof idea: the tangent is perpendicular to the radius OA, so angle OAB = 90° − {deg(insc)}; triangle OAB is isosceles, so angle AOB = {deg(2 * insc)}, and the angle at C is half of that.
      </>
    );
  }

  return (
    <WidgetFrame title="Circle theorem lab" tryThis={TRY[mode]} caption={caption}>
      <div className="space-y-4">
        <Segmented<Mode>
          label="Theorem"
          value={mode}
          onChange={setMode}
          options={[
            { value: "centre", label: "Centre" },
            { value: "segment", label: "Same segment" },
            { value: "cyclic", label: "Cyclic quad" },
            { value: "tangent", label: "Alternate segment" },
          ]}
        />
        <svg
          ref={svgRef}
          viewBox={`0 0 ${W} ${H}`}
          className="mx-auto h-auto w-full max-w-md select-none"
          style={{ touchAction: "none" }}
          role="img"
          aria-label={aria}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          <circle cx={CX} cy={CY} r={R} fill="none" className="stroke-ink" strokeWidth={2} />
          {shapes}
          {mode !== "segment" && mode !== "cyclic" ? (
            <>
              <circle cx={CX} cy={CY} r={3} className="fill-ink" />
              <Label at={[CX + 12, CY + 14]} bold size={13}>
                O
              </Label>
            </>
          ) : null}
          {labels}
          {names.map((n) => {
            const q = P[n];
            return (
              <g key={n}>
                <circle cx={q[0]} cy={q[1]} r={14} className="fill-brand" opacity={0.15} />
                <circle cx={q[0]} cy={q[1]} r={6} className="fill-surface stroke-brand" strokeWidth={2.5} />
                <Label at={onC(pos[n]).map((v, i) => v + (i === 0 ? 1 : -1) * 0) as Pt} size={1}>
                  {""}
                </Label>
                <Label at={toward(O, pos[n], R + 20)} bold size={14}>
                  {n}
                </Label>
              </g>
            );
          })}
        </svg>
        <p className="text-center text-xs text-ink-2">Drag the points round the circle, or use the sliders.</p>
        <div className="grid gap-3 sm:grid-cols-2">
          {names.map((n) => (
            <Slider key={n} label={`Position of ${n}`} value={pos[n]} min={0} max={359} onChange={(v) => setPoint(n, v)} format={(v) => `${v}°`} />
          ))}
        </div>
        <div className="grid grid-cols-3 gap-2">{readouts}</div>
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Power of a point                                                        */
/* ------------------------------------------------------------------------ */

const RC = 5; // radius in cm
const W2 = 360;
const H2 = 280;
const fmt2 = (v: number) => (Math.round(v * 100) / 100).toFixed(2);

/** Signed distances along direction phi (maths degrees) from P to the circle, or null if the line misses. */
function hits(OP: number, phi: number): [number, number] | null {
  const ux = Math.cos(phi * RAD);
  const b = -OP * ux; // (P − O)·u with P − O = (−OP, 0)
  const c = OP * OP - RC * RC;
  const disc = b * b - c;
  if (disc < 1e-9) return null;
  const s = Math.sqrt(disc);
  return [-b - s, -b + s];
}

function PowerOfPoint() {
  const [where, setWhere] = useState<"inside" | "outside">("inside");
  const [opIn, setOpIn] = useState(3);
  const [opOut, setOpOut] = useState(9);
  const [in1, setIn1] = useState(30);
  const [in2, setIn2] = useState(115);
  const [out1, setOut1] = useState(12);
  const [out2, setOut2] = useState(-24);
  const inside = where === "inside";
  const OP = inside ? opIn : opOut;
  const phi1 = inside ? in1 : out1;
  const phi2 = inside ? in2 : out2;
  const s = inside ? 21 : 11.5; // px per cm
  const Oc: Pt = inside ? [180, 140] : [262, 140];
  const Pc: Pt = [Oc[0] - OP * s, Oc[1]];
  const at = (phi: number, t: number): Pt => [Pc[0] + t * s * Math.cos(phi * RAD), Pc[1] - t * s * Math.sin(phi * RAD)];
  const power = OP * OP - RC * RC; // negative inside
  const k = Math.abs(power);

  const h1 = hits(OP, phi1);
  const h2 = hits(OP, phi2);
  const tLen = inside ? 0 : Math.sqrt(power);
  const tAng = inside ? 0 : Math.asin(RC / OP) / RAD;
  const T = inside ? Pc : at(tAng, tLen);

  const lineEls: ReactNode[] = [];
  const lab: ReactNode[] = [];
  const names: Array<[string, string]> = [
    ["A", "B"],
    ["C", "D"],
  ];
  const lengths: Array<[number, number] | null> = [];
  [h1, h2].forEach((h, i) => {
    const phi = i === 0 ? phi1 : phi2;
    const cls = i === 0 ? "stroke-brand" : "stroke-accent";
    const tone = i === 0 ? "fill-brand" : "fill-accent";
    if (!h) {
      const far = at(phi, inside ? 8 : 16);
      lineEls.push(<line key={`l${i}`} x1={Pc[0]} y1={Pc[1]} x2={far[0]} y2={far[1]} className={cls} strokeWidth={2} strokeDasharray="4 4" />);
      lengths.push(null);
      return;
    }
    const [t1, t2] = h;
    const X = at(phi, t1);
    const Y = at(phi, t2);
    const startPt = inside ? X : Pc;
    lineEls.push(<line key={`l${i}`} x1={startPt[0]} y1={startPt[1]} x2={Y[0]} y2={Y[1]} className={cls} strokeWidth={2.5} />);
    lineEls.push(<circle key={`x${i}`} cx={X[0]} cy={X[1]} r={4} className={`fill-surface ${cls}`} strokeWidth={2} />, <circle key={`y${i}`} cx={Y[0]} cy={Y[1]} r={4} className={`fill-surface ${cls}`} strokeWidth={2} />);
    const outX = toward(Oc, dirDeg(Oc, X), RC * s + 14);
    const outY = toward(Oc, dirDeg(Oc, Y), RC * s + 14);
    lab.push(
      <Label key={`n${i}a`} at={outX} tone={tone} bold size={13}>
        {names[i][0]}
      </Label>,
      <Label key={`n${i}b`} at={outY} tone={tone} bold size={13}>
        {names[i][1]}
      </Label>,
    );
    lengths.push(inside ? [-t1, t2] : [t1, t2]);
  });

  const allHit = lengths.every((l) => l !== null);
  const prods = lengths.map((l) => (l ? l[0] * l[1] : null));
  const aria = `Circle of radius 5 cm with P ${inside ? "inside" : "outside"} it, ${fmt2(OP)} cm from the centre O. ${lengths
    .map((l, i) => (l ? `P${names[i][0]} = ${fmt2(l[0])}, P${names[i][1]} = ${fmt2(l[1])}` : `line ${i + 1} misses the circle`))
    .join("; ")}.`;

  return (
    <WidgetFrame
      title="Power of a point: chords and secants"
      tryThis={[
        "Put P at the centre (OP = 0). What is PA × PB, and why?",
        "With P inside, can you make PA = PB? What angle does that chord make with OP?",
        "With P outside, turn line 1 until it only just touches the circle. Compare PA × PB with {{PT^2}}.",
        "Double OP when P is outside. Does the product double?",
      ]}
      caption={
        inside ? (
          <>
            <strong>Intersecting chords:</strong> every chord through P is cut into two parts with the same product. Here{" "}
            {allHit ? (
              <>
                PA × PB = {fmt2(prods[0] ?? 0)} and PC × PD = {fmt2(prods[1] ?? 0)}
              </>
            ) : (
              <>the products agree</>
            )}
            , which is exactly <M>{`r^2 - OP^2 = 25 - ${fmt2(OP * OP)} = ${fmt2(k)}`}</M>. Why: triangles PAC and PDB are similar (angle CAB = angle CDB, angles in the same segment), so <M>{"(PA)/(PD) = (PC)/(PB)"}</M>.
          </>
        ) : (
          <>
            <strong>Secants and tangent from an outside point:</strong> PA × PB = PC × PD = <M>{`OP^2 - r^2 = ${fmt2(OP * OP)} - 25 = ${fmt2(k)}`}</M> — use the{" "}
            <strong>whole</strong> length to the far point, not the chord. The tangent is the limiting case where the two points merge: <M>{`PT^2 = ${fmt2(k)}`}</M>, so PT ={" "}
            {fmt2(tLen)} cm (Pythagoras in triangle OTP gives the same thing).
            {allHit ? null : " A dashed line misses the circle — turn it back towards O."}
          </>
        )
      }
    >
      <div className="space-y-4">
        <Segmented<"inside" | "outside">
          label="Where is P?"
          value={where}
          onChange={setWhere}
          options={[
            { value: "inside", label: "P inside (chords)" },
            { value: "outside", label: "P outside (secants)" },
          ]}
        />
        <svg viewBox={`0 0 ${W2} ${H2}`} className="mx-auto h-auto w-full max-w-md select-none" role="img" aria-label={aria}>
          <circle cx={Oc[0]} cy={Oc[1]} r={RC * s} fill="none" className="stroke-ink" strokeWidth={2} />
          <line x1={Pc[0]} y1={Pc[1]} x2={Oc[0]} y2={Oc[1]} className="stroke-ink-2" strokeWidth={1.2} strokeDasharray="3 4" />
          {!inside ? <line x1={Pc[0]} y1={Pc[1]} x2={T[0]} y2={T[1]} className="stroke-good" strokeWidth={2.5} /> : null}
          {!inside ? <line x1={Oc[0]} y1={Oc[1]} x2={T[0]} y2={T[1]} className="stroke-ink-2" strokeWidth={1.2} strokeDasharray="3 4" /> : null}
          {lineEls}
          <circle cx={Oc[0]} cy={Oc[1]} r={3} className="fill-ink" />
          <Label at={[Oc[0] + 10, Oc[1] + 16]} bold size={13}>
            O
          </Label>
          <circle cx={Pc[0]} cy={Pc[1]} r={4.5} className="fill-ink" />
          <Label at={[Pc[0] - (inside ? 0 : 12), Pc[1] + (inside ? 18 : 4)]} bold size={13}>
            P
          </Label>
          {!inside ? (
            <>
              <circle cx={T[0]} cy={T[1]} r={4} className="fill-surface stroke-good" strokeWidth={2} />
              <Label at={toward(Oc, dirDeg(Oc, T), RC * s + 14)} tone="fill-good" bold size={13}>
                T
              </Label>
            </>
          ) : null}
          {lab}
        </svg>
        <div className="grid gap-3 sm:grid-cols-3">
          {inside ? (
            <Slider label="Distance OP" value={opIn} min={0} max={4.6} step={0.1} onChange={setOpIn} format={(v) => `${v.toFixed(1)} cm`} />
          ) : (
            <Slider label="Distance OP" value={opOut} min={5.6} max={13} step={0.1} onChange={setOpOut} format={(v) => `${v.toFixed(1)} cm`} />
          )}
          {inside ? (
            <>
              <Slider label="Turn line AB" value={in1} min={0} max={179} onChange={setIn1} format={(v) => `${v}°`} />
              <Slider label="Turn line CD" value={in2} min={0} max={179} onChange={setIn2} format={(v) => `${v}°`} />
            </>
          ) : (
            <>
              <Slider label="Turn line AB" value={out1} min={-70} max={70} onChange={setOut1} format={(v) => `${v}°`} />
              <Slider label="Turn line CD" value={out2} min={-70} max={70} onChange={setOut2} format={(v) => `${v}°`} />
            </>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-3">
          {lengths.map((l, i) => (
            <Readout
              key={i}
              label={`P${names[i][0]} × P${names[i][1]}`}
              value={l ? `${fmt2(l[0])} × ${fmt2(l[1])} = ${fmt2(l[0] * l[1])}` : "misses"}
              tone={l ? (i === 0 ? "brand" : "ink") : "bad"}
            />
          ))}
          <Readout label={inside ? "r² − OP²" : "PT² = OP² − r²"} value={fmt2(k)} tone="good" />
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "circle-theorem-lab", title: "Circle theorem lab", blurb: "Drag points round a circle and watch the angle facts hold — centre, same segment, cyclic quadrilateral, alternate segment.", Component: CircleTheoremLab },
  { id: "power-of-a-point", title: "Power of a point", blurb: "Turn two lines through P and see why PA × PB = PC × PD for chords, secants and tangents.", Component: PowerOfPoint },
];
