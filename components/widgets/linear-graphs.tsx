"use client";
// Interactive explorables for "linear-graphs" (Straight-Line Graphs & Coordinate Geometry).
//  1. Segment lab — drag (or tap / step) two points A and B. Everything about the
//     segment updates exactly: gradient, y = mx + c, ax + by + c = 0, midpoint,
//     length as a simplified surd, the perpendicular bisector, and the point P
//     dividing AB in a ratio m : n (H+).
//  2. Two-line lab — choose two lines y = m₁x + c₁ and y = m₂x + c₂. See where they
//     meet (the simultaneous-equation solution, as exact fractions), whether they are
//     parallel or perpendicular (m₁m₂ = −1), and the area of the triangle they make
//     with the x-axis or the y-axis.
import { useRef, useState, type PointerEvent as ReactPointerEvent } from "react";
import { WidgetFrame, Stepper, Slider, Segmented, Readout, M, makePlane, PlaneGrid, type WidgetDef } from "./kit";
import { renderInline } from "../Rich";

/* ------------------------------------------------------------------------ */
/* Exact rational arithmetic                                                  */
/* ------------------------------------------------------------------------ */

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

interface Q {
  n: number;
  d: number;
}

function q(n: number, d = 1): Q {
  if (d < 0) {
    n = -n;
    d = -d;
  }
  const g = gcd(n, d);
  return { n: n / g + 0, d: d / g };
}
const add = (a: Q, b: Q): Q => q(a.n * b.d + b.n * a.d, a.d * b.d);
const sub = (a: Q, b: Q): Q => q(a.n * b.d - b.n * a.d, a.d * b.d);
const mul = (a: Q, b: Q): Q => q(a.n * b.n, a.d * b.d);
const div = (a: Q, b: Q): Q => q(a.n * b.d, a.d * b.n);
const val = (a: Q): number => a.n / a.d;
const isZero = (a: Q): boolean => a.n === 0;
const qAbs = (a: Q): Q => q(Math.abs(a.n), a.d);

/** Markup for inside {{ }}: "3", "-3/2". */
const qm = (a: Q): string => (a.d === 1 ? `${a.n}` : `${a.n}/${a.d}`);
/** Plain text with a real minus sign: "−3/2" (for aria labels). */
const qt = (a: Q): string => qm(a).replace("-", "−");

/** The x-term inside {{ }}: "3x", "-x", "2/3 x". */
function xTerm(m: Q): string {
  if (m.n === 0) return "";
  const s = m.n < 0 ? "-" : "";
  const a = Math.abs(m.n);
  if (m.d === 1) return s + (a === 1 ? "x" : `${a}x`);
  return `${s}${a}/${m.d} x`;
}

/** "y = 2/3 x - 4" inside {{ }} (no braces). */
function lineEq(m: Q, c: Q): string {
  const t = xTerm(m);
  if (!t) return `y = ${qm(c)}`;
  if (isZero(c)) return `y = ${t}`;
  return `y = ${t} ${c.n < 0 ? "-" : "+"} ${qm(qAbs(c))}`;
}

/** "3x - 2y + 7 = 0" from integer coefficients (no braces). */
function intForm(a: number, b: number, c: number): string {
  const parts: Array<[number, string]> = [
    [a, "x"],
    [b, "y"],
    [c, ""],
  ];
  let out = "";
  for (const [k, v] of parts) {
    if (k === 0) continue;
    const mag = Math.abs(k);
    const t = v === "" ? `${mag}` : mag === 1 ? v : `${mag}${v}`;
    if (!out) out = k < 0 ? `-${t}` : t;
    else out += k < 0 ? ` - ${t}` : ` + ${t}`;
  }
  return `${out || "0"} = 0`;
}

/** √n → [k, m] with n = k²·m. */
function surd(n: number): [number, number] {
  let k = 1;
  let m = n;
  for (let f = 2; f * f <= m; f++)
    while (m % (f * f) === 0) {
      m /= f * f;
      k *= f;
    }
  return [k, m];
}
const surdMark = (k: number, m: number): string => (m === 1 ? `${k}` : k === 1 ? `sqrt(${m})` : `${k}sqrt(${m})`);

function sig3(v: number): string {
  const s = Number(v.toPrecision(3)).toString();
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}

function Rich({ text }: { text: string }) {
  return <>{renderInline(text)}</>;
}

/** Clip y = m x + c to the square [lo, hi]². Returns two x-values or null. */
function clipLine(m: number, c: number, lo: number, hi: number): [number, number] | null {
  if (m === 0) return c >= lo && c <= hi ? [lo, hi] : null;
  const xa = (lo - c) / m;
  const xb = (hi - c) / m;
  const x0 = Math.max(lo, Math.min(xa, xb));
  const x1 = Math.min(hi, Math.max(xa, xb));
  return x0 < x1 ? [x0, x1] : null;
}

type Pt = [number, number];
const LO = -8;
const HI = 8;
const PLANE = makePlane({ width: 320, height: 320, xMin: LO, xMax: HI, yMin: LO, yMax: HI, pad: 16 });
const HALO = { paintOrder: "stroke" as const, strokeLinejoin: "round" as const };

/** Infinite line through P with direction (dx, dy), clipped to the plane, as SVG coordinates. */
function lineThrough(p: [number, number], dx: number, dy: number): [number, number, number, number] | null {
  const { px, py } = PLANE;
  if (dx === 0) return [px(p[0]), py(LO), px(p[0]), py(HI)];
  const m = dy / dx;
  const c = p[1] - m * p[0];
  const seg = clipLine(m, c, LO, HI);
  if (!seg) return null;
  return [px(seg[0]), py(m * seg[0] + c), px(seg[1]), py(m * seg[1] + c)];
}

/* ------------------------------------------------------------------------ */
/* 1. Segment lab                                                             */
/* ------------------------------------------------------------------------ */

type Show = "line" | "bisector" | "ratio";

function SegmentLab() {
  const [A, setA] = useState<Pt>([-4, -3]);
  const [B, setB] = useState<Pt>([4, 3]);
  const [active, setActive] = useState<"A" | "B">("B");
  const [show, setShow] = useState<Show>("line");
  const [rm, setRm] = useState(1);
  const [rn, setRn] = useState(2);
  const dragging = useRef<"A" | "B" | null>(null);
  const svgRef = useRef<SVGSVGElement>(null);

  const [ax, ay] = A;
  const [bx, by] = B;
  const dx = bx - ax;
  const dy = by - ay;

  // ---- exact facts ----
  const vertical = dx === 0;
  const horizontal = dy === 0;
  const m = vertical ? null : q(dy, dx);
  const c = m ? sub(q(ay), mul(m, q(ax))) : null;
  const eq = vertical ? `x = ${ax}` : lineEq(m as Q, c as Q);
  // Integer form: dy·x − dx·y + (dx·ay − dy·ax) = 0, scaled so there is no common factor and a > 0.
  let ia = dy;
  let ib = -dx;
  let ic = dx * ay - dy * ax;
  const g = gcd(gcd(ia, ib), ic);
  const sgn = ia < 0 || (ia === 0 && ib < 0) ? -1 : 1;
  ia = (sgn * ia) / g + 0;
  ib = (sgn * ib) / g + 0;
  ic = (sgn * ic) / g + 0;
  const mid: [Q, Q] = [q(ax + bx, 2), q(ay + by, 2)];
  const d2 = dx * dx + dy * dy;
  const [sk, sm] = surd(d2);
  const length = Math.sqrt(d2);

  // Perpendicular bisector.
  let bis: string;
  if (vertical) bis = `y = ${qm(mid[1])}`;
  else if (horizontal) bis = `x = ${qm(mid[0])}`;
  else {
    const mp = q(-dx, dy);
    bis = lineEq(mp, add(mid[1], mul(q(dx, dy), mid[0])));
  }

  // Ratio point P with AP : PB = rm : rn.
  const frac = q(rm, rm + rn);
  const P: [Q, Q] = [add(q(ax), mul(frac, q(dx))), add(q(ay), mul(frac, q(dy)))];

  // ---- interaction ----
  const toMaths = (e: ReactPointerEvent<SVGSVGElement>): Pt | null => {
    const svg = svgRef.current;
    if (!svg) return null;
    const r = svg.getBoundingClientRect();
    const sx = ((e.clientX - r.left) / r.width) * 320;
    const sy = ((e.clientY - r.top) / r.height) * 320;
    const x = Math.round(LO + (sx - PLANE.pad) / PLANE.sx);
    const y = Math.round(LO + (320 - PLANE.pad - sy) / PLANE.sy);
    return [Math.max(LO, Math.min(HI, x)), Math.max(LO, Math.min(HI, y))];
  };
  const place = (which: "A" | "B", p: Pt) => {
    const other = which === "A" ? B : A;
    if (p[0] === other[0] && p[1] === other[1]) return; // A and B must be different points
    if (which === "A") setA(p);
    else setB(p);
  };
  const onDown = (e: ReactPointerEvent<SVGSVGElement>) => {
    const p = toMaths(e);
    if (!p) return;
    // Grab whichever point is nearest the touch (within 1.2 units), otherwise move the active point there.
    const near = (s: Pt) => Math.hypot(s[0] - p[0], s[1] - p[1]);
    const grab = near(A) <= 1.2 && near(A) <= near(B) ? "A" : near(B) <= 1.2 ? "B" : null;
    const which = grab ?? active;
    dragging.current = which;
    setActive(which);
    e.currentTarget.setPointerCapture(e.pointerId);
    place(which, p);
  };
  const onMove = (e: ReactPointerEvent<SVGSVGElement>) => {
    if (!dragging.current) return;
    const p = toMaths(e);
    if (p) place(dragging.current, p);
  };
  const onUp = () => {
    dragging.current = null;
  };

  // ---- drawing ----
  const { px, py } = PLANE;
  const full = lineThrough([ax, ay], dx, dy);
  const bisLine = lineThrough([val(mid[0]), val(mid[1])], -dy, dx);

  // ---- caption ----
  const parts: string[] = [];
  if (vertical) {
    parts.push(`A and B have the same x-coordinate, so the run is 0 and the gradient is **undefined**: the line is vertical, {{x = ${ax}}}. It can't be written as y = mx + c.`);
  } else if (horizontal) {
    parts.push(`The rise is 0, so the gradient is 0 and the line is horizontal: {{y = ${ay}}}.`);
  } else {
    parts.push(
      `**Gradient** = {{(${by} - ${ay < 0 ? `(${ay})` : ay})/(${bx} - ${ax < 0 ? `(${ax})` : ax})}} = {{${dy}/${dx < 0 ? `(${dx})` : dx}}} = {{${qm(m as Q)}}}. Substituting A into y = mx + c gives c = {{${qm(c as Q)}}}.`,
    );
  }
  if (show === "line") {
    parts.push(
      `**Midpoint** = average the coordinates = {{(${qm(mid[0])}, ${qm(mid[1])})}}. **Length** = {{sqrt(${dx}^2 + ${dy}^2) = sqrt(${d2})}}${sk > 1 && sm > 1 ? ` = {{${surdMark(sk, sm)}}}` : sm === 1 ? ` = ${sk}` : ""} ≈ ${sig3(length)} — Pythagoras on the run and the rise.`,
    );
  } else if (show === "bisector") {
    parts.push(
      vertical || horizontal
        ? `The perpendicular bisector goes through the midpoint at right angles to AB: {{${bis}}}.`
        : `The **perpendicular bisector** passes through the midpoint {{(${qm(mid[0])}, ${qm(mid[1])})}} with gradient {{${qm(q(-dx, dy))}}} — the negative reciprocal, because {{${qm(m as Q)} * ${qm(q(-dx, dy)).startsWith("-") ? `(${qm(q(-dx, dy))})` : qm(q(-dx, dy))} = -1}}. Every point on it is the same distance from A and from B.`,
    );
  } else {
    parts.push(
      `AP : PB = ${rm} : ${rn}, so AB is cut into ${rm + rn} equal parts and P is {{${rm}/${rm + rn}}} of the way from A: P = A + {{${rm}/${rm + rn}}}(B − A) = {{(${qm(P[0])}, ${qm(P[1])})}}.${rm === rn ? " Equal parts — P is the midpoint." : ""}`,
    );
  }
  const caption = parts.join(" ");

  const aria = `Points A(${ax}, ${ay}) and B(${bx}, ${by}) on a grid from −8 to 8. ${vertical ? `Vertical line x = ${ax}.` : `Line with gradient ${qt(m as Q)} and y-intercept ${qt(c as Q)}.`} Midpoint (${qt(mid[0])}, ${qt(mid[1])}); length ${sig3(length)}.${
    show === "ratio" ? ` P(${qt(P[0])}, ${qt(P[1])}) divides AB in the ratio ${rm} to ${rn}.` : ""
  }`;

  const dot = (name: string, p: Pt, isActive: boolean) => {
    const x = px(p[0]);
    const y = py(p[1]);
    const right = p[0] <= 4;
    return (
      <g key={name}>
        <circle cx={x} cy={y} r={isActive ? 9 : 7} className={isActive ? "fill-brand stroke-surface" : "fill-ink stroke-surface"} strokeWidth={2.5} />
        <text x={right ? x + 11 : x - 11} y={Math.max(14, y - 9)} fontSize={12} fontWeight={800} textAnchor={right ? "start" : "end"} className="fill-ink stroke-surface" strokeWidth={3} style={HALO}>
          {name}({p[0]}, {p[1]})
        </text>
      </g>
    );
  };

  return (
    <WidgetFrame
      title="Segment lab: gradient, midpoint, length, bisector"
      tryThis={[
        "Drag B until the gradient is {{-2/3}}. How many different positions can you find?",
        "Make AB vertical. What happens to the gradient, the equation and the perpendicular bisector?",
        "Find a segment of length exactly 5 that isn't horizontal or vertical (think 3, 4, 5).",
        "Ratio view: set AP : PB = 1 : 1, then 3 : 1. Predict P before you look.",
      ]}
      caption={<Rich text={caption} />}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented<Show>
            label="What to show"
            value={show}
            onChange={setShow}
            options={[
              { value: "line", label: "Line" },
              { value: "bisector", label: "Perp. bisector" },
              { value: "ratio", label: "Ratio point (H+)" },
            ]}
          />
          <Segmented<"A" | "B">
            label="Point that a tap moves"
            value={active}
            onChange={setActive}
            options={[
              { value: "A", label: "Tap moves A" },
              { value: "B", label: "Tap moves B" },
            ]}
          />
        </div>

        <svg
          ref={svgRef}
          viewBox="0 0 320 320"
          className="mx-auto h-auto w-full max-w-md cursor-crosshair select-none"
          style={{ touchAction: "none" }}
          role="img"
          aria-label={aria}
          onPointerDown={onDown}
          onPointerMove={onMove}
          onPointerUp={onUp}
          onPointerCancel={onUp}
        >
          <PlaneGrid plane={PLANE} step={1} labels={false} />
          {[-8, -4, 4, 8].map((t) => (
            <g key={t}>
              <text x={px(t)} y={py(0) + 13} fontSize={10} textAnchor="middle" className="fill-ink-2">{t}</text>
              <text x={px(0) - 4} y={py(t) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">{t}</text>
            </g>
          ))}
          {full ? <line x1={full[0]} y1={full[1]} x2={full[2]} y2={full[3]} className="stroke-brand" strokeWidth={1.5} strokeDasharray="5 4" opacity={0.7} /> : null}
          {/* rise / run triangle */}
          {!vertical && !horizontal ? (
            <g>
              <line x1={px(ax)} y1={py(ay)} x2={px(bx)} y2={py(ay)} className="stroke-good" strokeWidth={2.5} />
              <line x1={px(bx)} y1={py(ay)} x2={px(bx)} y2={py(by)} className="stroke-accent" strokeWidth={2.5} />
              <text x={(px(ax) + px(bx)) / 2} y={py(ay) + (dy > 0 ? 14 : -6)} fontSize={11} fontWeight={700} textAnchor="middle" className="fill-good stroke-surface" strokeWidth={3} style={HALO}>
                run {dx}
              </text>
              <text x={px(bx) + (dx > 0 ? 6 : -6)} y={(py(ay) + py(by)) / 2 + 4} fontSize={11} fontWeight={700} textAnchor={dx > 0 ? "start" : "end"} className="fill-accent stroke-surface" strokeWidth={3} style={HALO}>
                rise {dy}
              </text>
            </g>
          ) : null}
          <line x1={px(ax)} y1={py(ay)} x2={px(bx)} y2={py(by)} className="stroke-brand" strokeWidth={3.5} />
          {show === "bisector" && bisLine ? (
            <g>
              <line x1={bisLine[0]} y1={bisLine[1]} x2={bisLine[2]} y2={bisLine[3]} className="stroke-bad" strokeWidth={2.5} />
              <circle cx={px(val(mid[0]))} cy={py(val(mid[1]))} r={5} className="fill-bad" />
            </g>
          ) : null}
          {show === "line" ? <circle cx={px(val(mid[0]))} cy={py(val(mid[1]))} r={5} className="fill-good stroke-surface" strokeWidth={2} /> : null}
          {show === "ratio" ? (
            <g>
              <circle cx={px(val(P[0]))} cy={py(val(P[1]))} r={6} className="fill-accent stroke-surface" strokeWidth={2} />
              <text x={px(val(P[0])) - 9} y={py(val(P[1])) + 16} fontSize={12} fontWeight={800} textAnchor="end" className="fill-accent stroke-surface" strokeWidth={3} style={HALO}>
                P
              </text>
            </g>
          ) : null}
          {dot("A", A, active === "A")}
          {dot("B", B, active === "B")}
        </svg>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Stepper label="A x" value={ax} min={LO} max={HI} onChange={(v) => place("A", [v, ay])} />
          <Stepper label="A y" value={ay} min={LO} max={HI} onChange={(v) => place("A", [ax, v])} />
          <Stepper label="B x" value={bx} min={LO} max={HI} onChange={(v) => place("B", [v, by])} />
          <Stepper label="B y" value={by} min={LO} max={HI} onChange={(v) => place("B", [bx, v])} />
        </div>

        {show === "ratio" ? (
          <div className="grid gap-3 sm:grid-cols-2">
            <Slider label="AP parts (m)" value={rm} min={1} max={6} onChange={setRm} />
            <Slider label="PB parts (n)" value={rn} min={1} max={6} onChange={setRn} />
          </div>
        ) : null}

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" aria-live="polite">
          <Readout label="Gradient" value={vertical ? "undefined" : <M>{qm(m as Q)}</M>} />
          <Readout label="Equation" value={<M>{eq}</M>} />
          <Readout label="ax + by + c = 0" value={<M>{intForm(ia, ib, ic)}</M>} tone="ink" />
          <Readout label="Midpoint" value={<M>{`(${qm(mid[0])}, ${qm(mid[1])})`}</M>} tone="good" />
          <Readout
            label="Length AB"
            value={
              <span>
                <M>{sm === 1 ? `${sk}` : surdMark(sk, sm)}</M>
                {sm === 1 ? null : <span className="text-base text-ink-2"> ≈ {sig3(length)}</span>}
              </span>
            }
            tone="ink"
          />
          {show === "bisector" ? <Readout label="Perpendicular bisector" value={<M>{bis}</M>} tone="bad" /> : null}
          {show === "ratio" ? <Readout label={`P (AP : PB = ${rm} : ${rn})`} value={<M>{`(${qm(P[0])}, ${qm(P[1])})`}</M>} /> : null}
        </div>
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Two-line lab                                                            */
/* ------------------------------------------------------------------------ */

const GRADS: Q[] = [
  q(-4), q(-3), q(-5, 2), q(-2), q(-3, 2), q(-1), q(-2, 3), q(-1, 2), q(-1, 3), q(0),
  q(1, 3), q(1, 2), q(2, 3), q(1), q(3, 2), q(2), q(5, 2), q(3), q(4),
];
const ZERO_INDEX = 9;

type Tri = "meet" | "x-axis" | "y-axis";

function TwoLines() {
  const [i1, setI1] = useState(ZERO_INDEX + 6); // m₁ = 2
  const [c1, setC1] = useState(-2);
  const [i2, setI2] = useState(ZERO_INDEX - 3); // m₂ = −2/3
  const [c2, setC2] = useState(4);
  const [mode, setMode] = useState<Tri>("meet");

  const m1 = GRADS[i1];
  const m2 = GRADS[i2];
  const C1 = q(c1);
  const C2 = q(c2);
  const parallel = m1.n * m2.d === m2.n * m1.d;
  const same = parallel && c1 === c2;
  const perp = !isZero(m1) && !isZero(m2) && mul(m1, m2).n === -1 && mul(m1, m2).d === 1;
  const X = parallel ? null : div(sub(C2, C1), sub(m1, m2));
  const Y = X ? add(mul(m1, X), C1) : null;

  // Integer forms for the simultaneous-equation view: m = p/r → p x − r y = −r c.
  const simEq = (m: Q, c: number) => {
    const a = m.n;
    const b = -m.d;
    const k = -m.d * c;
    const s = a < 0 || (a === 0 && b < 0) ? -1 : 1;
    const parts: string[] = [];
    if (a !== 0) parts.push(`${s * a === 1 ? "" : s * a === -1 ? "-" : s * a}x`);
    parts.push(`${parts.length ? (s * b < 0 ? " - " : " + ") : s * b < 0 ? "-" : ""}${Math.abs(b) === 1 ? "" : Math.abs(b)}y`);
    return `${parts.join("")} = ${s * k}`;
  };

  // Triangle with an axis.
  let area: Q | null = null;
  let triNote = "";
  let triPts: Array<[number, number]> = [];
  if (mode === "x-axis") {
    if (isZero(m1) || isZero(m2)) triNote = "A horizontal line never crosses the x-axis (or lies on it), so there's no triangle. Give both lines a non-zero gradient.";
    else if (!X || !Y) triNote = "Parallel lines never meet, so no triangle is formed.";
    else {
      const x1 = div(q(-c1), m1);
      const x2 = div(q(-c2), m2);
      const base = qAbs(sub(x1, x2));
      area = mul(q(1, 2), mul(base, qAbs(Y)));
      triPts = [[val(x1), 0], [val(x2), 0], [val(X), val(Y)]];
      if (isZero(area)) triNote = "The lines meet on the x-axis, so the \"triangle\" has collapsed to a point: area 0.";
      else
        triNote = `L₁ meets the x-axis at x = {{${qm(x1)}}} and L₂ at x = {{${qm(x2)}}}, so the base is {{${qm(base)}}}. The lines meet at height {{${qm(qAbs(Y))}}} from the axis, so the area = {{1/2}} × {{${qm(base)}}} × {{${qm(qAbs(Y))}}} = {{${qm(area)}}}.`;
    }
  } else if (mode === "y-axis") {
    if (!X || !Y) triNote = "Parallel lines never meet, so no triangle is formed.";
    else {
      const base = qAbs(q(c1 - c2));
      area = mul(q(1, 2), mul(base, qAbs(X)));
      triPts = [[0, c1], [0, c2], [val(X), val(Y)]];
      if (isZero(area)) triNote = "The lines meet on the y-axis (same c), so there's no triangle: area 0.";
      else
        triNote = `The y-intercepts are ${c1} and ${c2}, so the base along the y-axis is ${Math.abs(c1 - c2)}. The lines meet at x = {{${qm(X)}}}, which is the height. Area = {{1/2}} × ${Math.abs(c1 - c2)} × {{${qm(qAbs(X))}}} = {{${qm(area)}}}.`;
    }
  }

  // ---- caption ----
  let caption: string;
  if (same) caption = "Same gradient **and** same intercept: the two equations describe the **same line**, so the simultaneous equations have infinitely many solutions.";
  else if (parallel)
    caption = `Both gradients are {{${qm(m1)}}}, so the lines are **parallel**: they never meet. Try to solve the simultaneous equations and the x-terms cancel, leaving the impossible {{${c1} = ${c2}}}. No solution.`;
  else {
    const bits = [
      `Where the lines cross, both y-values are equal: {{${lineEq(m1, C1).slice(4)} = ${lineEq(m2, C2).slice(4)}}}, giving x = {{${qm(X as Q)}}} and y = {{${qm(Y as Q)}}}. That point solves **both** equations at once.`,
    ];
    if (perp) bits.push(`**Perpendicular!** {{${qm(m1)} * ${m2.n < 0 ? `(${qm(m2)})` : qm(m2)} = -1}} — each gradient is the negative reciprocal of the other.`);
    else if (!isZero(m1) && !isZero(m2)) bits.push(`m₁ × m₂ = {{${qm(mul(m1, m2))}}}, not −1, so they are not perpendicular.`);
    if (mode !== "meet") bits.push(triNote);
    caption = bits.join(" ");
  }
  if (mode !== "meet" && (parallel || same)) caption += " " + triNote;

  const { px, py } = PLANE;
  const seg1 = clipLine(val(m1), c1, LO, HI);
  const seg2 = clipLine(val(m2), c2, LO, HI);
  const onGrid = X && Y && val(X) >= LO && val(X) <= HI && val(Y) >= LO && val(Y) <= HI;
  const showTri = mode !== "meet" && area && !isZero(area) && triPts.every(([x, y]) => x >= LO - 0.01 && x <= HI + 0.01 && y >= LO - 0.01 && y <= HI + 0.01);

  const aria = `Line 1: ${lineEq(m1, C1).replace(/-/g, "minus ")}. Line 2: ${lineEq(m2, C2).replace(/-/g, "minus ")}. ${
    same ? "They are the same line." : parallel ? "They are parallel." : `They meet at (${qt(X as Q)}, ${qt(Y as Q)})${perp ? " at right angles" : ""}.`
  }${area ? ` Triangle area ${qt(area)}.` : ""}`;

  const gradLabel = (i: number) => <M>{qm(GRADS[i])}</M>;

  return (
    <WidgetFrame
      title="Two-line lab: intersections, perpendiculars and areas"
      tryThis={[
        "Make L₂ perpendicular to L₁. Check the product m₁ × m₂ in the caption.",
        "Make the lines parallel. What happens to the simultaneous equations?",
        "Triangle with the x-axis: make one with area exactly 12.",
        "Can you make the lines meet exactly on the x-axis? Predict the triangle's area first.",
      ]}
      caption={<Rich text={caption} />}
    >
      <div className="space-y-4">
        <Segmented<Tri>
          label="Show"
          value={mode}
          onChange={setMode}
          options={[
            { value: "meet", label: "Intersection" },
            { value: "x-axis", label: "Triangle with x-axis" },
            { value: "y-axis", label: "Triangle with y-axis" },
          ]}
        />

        <div className="grid gap-3 sm:grid-cols-2">
          <div className="space-y-2 rounded-xl border border-line p-3">
            <p className="text-sm font-extrabold text-brand">
              L₁: <M>{lineEq(m1, C1)}</M>
            </p>
            <Slider label={<>gradient m₁</>} value={i1} min={0} max={GRADS.length - 1} onChange={setI1} format={gradLabel} />
            <Stepper label="intercept c₁" value={c1} min={-6} max={6} onChange={setC1} />
          </div>
          <div className="space-y-2 rounded-xl border border-line p-3">
            <p className="text-sm font-extrabold text-bad">
              L₂: <M>{lineEq(m2, C2)}</M>
            </p>
            <Slider label={<>gradient m₂</>} value={i2} min={0} max={GRADS.length - 1} onChange={setI2} format={gradLabel} />
            <Stepper label="intercept c₂" value={c2} min={-6} max={6} onChange={setC2} />
          </div>
        </div>

        <svg viewBox="0 0 320 320" className="mx-auto h-auto w-full max-w-md" role="img" aria-label={aria}>
          <PlaneGrid plane={PLANE} step={1} labels={false} />
          {[-8, -4, 4, 8].map((t) => (
            <g key={t}>
              <text x={px(t)} y={py(0) + 13} fontSize={10} textAnchor="middle" className="fill-ink-2">{t}</text>
              <text x={px(0) - 4} y={py(t) + 3} fontSize={10} textAnchor="end" className="fill-ink-2">{t}</text>
            </g>
          ))}
          {showTri ? <polygon points={triPts.map(([x, y]) => `${px(x)},${py(y)}`).join(" ")} className="fill-accent" opacity={0.3} /> : null}
          {seg1 ? <line x1={px(seg1[0])} y1={py(val(m1) * seg1[0] + c1)} x2={px(seg1[1])} y2={py(val(m1) * seg1[1] + c1)} className="stroke-brand" strokeWidth={3} /> : null}
          {seg2 ? (
            <line x1={px(seg2[0])} y1={py(val(m2) * seg2[0] + c2)} x2={px(seg2[1])} y2={py(val(m2) * seg2[1] + c2)} className="stroke-bad" strokeWidth={3} strokeDasharray={same ? "8 6" : undefined} />
          ) : null}
          <circle cx={px(0)} cy={py(c1)} r={4} className="fill-brand" />
          <circle cx={px(0)} cy={py(c2)} r={4} className="fill-bad" />
          {onGrid && X && Y ? (
            <g>
              <circle cx={px(val(X))} cy={py(val(Y))} r={6} className="fill-surface stroke-ink" strokeWidth={2.5} />
              {perp ? (
                <text x={px(val(X)) + 9} y={py(val(Y)) - 9} fontSize={12} fontWeight={800} className="fill-good stroke-surface" strokeWidth={3} style={HALO}>
                  90°
                </text>
              ) : null}
            </g>
          ) : null}
        </svg>

        <div className="grid grid-cols-1 gap-2 sm:grid-cols-2" aria-live="polite">
          <Readout
            label="Simultaneous equations"
            value={
              <span className="text-base">
                <M>{simEq(m1, c1)}</M>
                <br />
                <M>{simEq(m2, c2)}</M>
              </span>
            }
            tone="ink"
          />
          <Readout
            label="Intersection"
            value={same ? "every point" : parallel ? "none (parallel)" : <M>{`(${qm(X as Q)}, ${qm(Y as Q)})`}</M>}
            tone={parallel ? "bad" : "brand"}
          />
          <Readout label="m₁ × m₂" value={<M>{qm(mul(m1, m2))}</M>} tone={perp ? "good" : "ink"} />
          {mode !== "meet" ? <Readout label="Triangle area" value={area ? <M>{qm(area)}</M> : "—"} tone="good" /> : null}
        </div>
        {X && Y && !onGrid ? <p className="text-sm text-ink-2">The lines meet off the grid, at <Rich text={`{{(${qm(X)}, ${qm(Y)})}}`} />.</p> : null}
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "segment-lab", title: "Segment lab", blurb: "Drag two points: watch the gradient, equation, midpoint, exact length, perpendicular bisector and ratio point update.", Component: SegmentLab },
  { id: "two-line-lab", title: "Two-line lab", blurb: "Steer two lines: find where they meet, test m₁m₂ = −1, and measure the triangle they make with an axis.", Component: TwoLines },
];

