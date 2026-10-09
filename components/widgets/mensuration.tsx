"use client";
// Interactive explorables for "Length, Area & Volume".
//  1. Sector lab — change the radius and angle of a sector and watch its arc
//     length, area and perimeter (exact in terms of π and as decimals). A
//     second mode rolls the same sector up into a cone: the arc becomes the
//     base circumference, which is exactly why the curved area is πrl.
//  2. Frustum builder — choose the base radius, top radius and height of a
//     frustum; similar triangles find the missing cone, and the volume is
//     shown as big cone − small cone, checked against πh/3 (R² + Rr + r²).
//     r = 0 gives a cone, r = R a cylinder.
import { useState } from "react";
import { WidgetFrame, Slider, Segmented, Readout, M, type WidgetDef } from "./kit";
import { renderInline } from "../Rich";

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}

/** Simplified fraction n/d as maths markup ("7/2", "3"). */
function fracM(n: number, d: number): string {
  const g = gcd(n, d);
  const a = n / g, b = d / g;
  return b === 1 ? String(a) : `${a}/${b}`;
}

/** (n/d)π as maths markup: "pi", "6 pi", "28/9 pi". */
function piM(n: number, d = 1): string {
  if (n === 0) return "0";
  const g = gcd(n, d);
  const a = n / g, b = d / g;
  if (b === 1) return a === 1 ? "pi" : `${a} pi`;
  return `${a}/${b} pi`;
}

/** 3 significant figures, plain text with a real minus sign. */
function sig3(v: number): string {
  if (v === 0) return "0";
  const s = Math.abs(v) >= 1000 ? String(Math.round(Number(v.toPrecision(3)))) : v.toPrecision(3);
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}

const RAD = Math.PI / 180;

/** SVG path for a sector with centre (cx, cy), radius R px, opening upwards, angle th°. */
function sectorPath(cx: number, cy: number, R: number, th: number): string {
  const a0 = (90 - th / 2) * RAD, a1 = (90 + th / 2) * RAD;
  const x0 = cx + R * Math.cos(a0), y0 = cy - R * Math.sin(a0);
  const x1 = cx + R * Math.cos(a1), y1 = cy - R * Math.sin(a1);
  const large = th > 180 ? 1 : 0;
  return `M${cx},${cy} L${x0.toFixed(1)},${y0.toFixed(1)} A${R},${R} 0 ${large} 0 ${x1.toFixed(1)},${y1.toFixed(1)} Z`;
}

/** Just the arc of that sector (for highlighting). */
function arcPath(cx: number, cy: number, R: number, th: number): string {
  const a0 = (90 - th / 2) * RAD, a1 = (90 + th / 2) * RAD;
  const x0 = cx + R * Math.cos(a0), y0 = cy - R * Math.sin(a0);
  const x1 = cx + R * Math.cos(a1), y1 = cy - R * Math.sin(a1);
  return `M${x0.toFixed(1)},${y0.toFixed(1)} A${R},${R} 0 ${th > 180 ? 1 : 0} 0 ${x1.toFixed(1)},${y1.toFixed(1)}`;
}

// ===========================================================================
// 1. Sector lab
// ===========================================================================

type SectorMode = "sector" | "cone";
type Measure = "arc" | "area" | "perimeter";

function SectorLab() {
  const [r, setR] = useState(6);
  const [th, setTh] = useState(120);
  const [mode, setMode] = useState<SectorMode>("sector");
  const [measure, setMeasure] = useState<Measure>("arc");

  const fr = fracM(th, 360);
  const arcExact = piM(th * r, 180);
  const arc = (th / 360) * 2 * Math.PI * r;
  const areaExact = piM(th * r * r, 360);
  const area = (th / 360) * Math.PI * r * r;
  const per = 2 * r + arc;

  // Rolled-up cone: slant l = r, base radius ρ = rθ/360.
  const rho = (r * th) / 360;
  const rhoM = fracM(r * th, 360);
  const coneH = Math.sqrt(Math.max(0, r * r - rho * rho));
  const coneV = (Math.PI * rho * rho * coneH) / 3;

  let caption: string;
  if (mode === "sector") {
    if (measure === "arc") caption = `${th}° is ${renderFracWords(th)} of a full turn, so the arc is {{${fr}}} of the circumference: {{${fr} * 2 pi * ${r} = ${arcExact}}} ≈ ${sig3(arc)} cm. Double the radius and the arc doubles too — arc length is proportional to r.`;
    else if (measure === "area") caption = `The sector is {{${fr}}} of the whole disc, so its area is {{${fr} * pi * ${r}^2 = ${areaExact}}} ≈ ${sig3(area)} cm². Double the radius and the area is multiplied by 4 — area grows with {{r^2}}.`;
    else caption = `A sector's perimeter is the arc PLUS two radii: {{${2 * r} + ${arcExact}}} ≈ ${sig3(per)} cm. Forgetting the two straight edges is the most common slip in exams.`;
  } else {
    caption = `Curl the sector round until its straight edges meet. The radius ${r} becomes the cone's slant height l, and the arc ({{${arcExact}}}) becomes the base circumference {{2 pi rho}}, so the base radius is {{rho = ${rhoM}}}. The curved area is still the sector's area: {{${fr} * pi * ${r}^2 = pi * ${rhoM} * ${r}}} — that is exactly {{pi r l}}.`;
  }

  // Sector-mode drawing.
  const W = 320, H = 260, cx = 160, cy = 138, k = 9.5;
  const Rpx = r * k;

  // Cone-mode drawing.
  const sk = 6.2, scx = 82, scy = 118, sR = r * sk;
  const cs = 7.2, ccx = 245, cby = 196;
  const crx = rho * cs, cry = Math.max(4, crx * 0.28), capex = cby - coneH * cs;

  return (
    <WidgetFrame
      title="Sector lab"
      tryThis={
        mode === "sector"
          ? [
              "Find a radius and angle that give an arc length of exactly {{4 pi}} cm. Can you find three?",
              "Keep the angle fixed and double the radius. What happens to the arc? To the area?",
              "Which angle makes the perimeter of a radius-6 sector exactly {{12 + 6 pi}}?",
            ]
          : [
              "Set the angle to 180°. Why is the cone's base radius exactly half of its slant height?",
              "Check that the sector's area equals {{pi r l}} for three different settings.",
              "With r = 12, which angle gives the biggest cone volume? (Try between 280° and 300°.)",
            ]
      }
      caption={<span>{renderInline(caption)}</span>}
    >
      <div className="space-y-3">
        <Segmented<SectorMode>
          label="View"
          options={[
            { value: "sector", label: "Sector" },
            { value: "cone", label: "Roll into a cone" },
          ]}
          value={mode}
          onChange={setMode}
        />
        <Slider label={mode === "cone" ? "Radius r = slant height l (cm)" : "Radius r (cm)"} value={r} min={2} max={12} onChange={setR} />
        <Slider label="Angle θ" value={th} min={10} max={350} step={5} onChange={setTh} format={(v) => `${v}°`} />

        {mode === "sector" ? (
          <>
            <Segmented<Measure>
              label="Measure"
              options={[
                { value: "arc", label: "Arc length" },
                { value: "area", label: "Area" },
                { value: "perimeter", label: "Perimeter" },
              ]}
              value={measure}
              onChange={setMeasure}
            />
            <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`Sector of radius ${r} centimetres and angle ${th} degrees, drawn inside its dashed full circle. It is ${fr.replace("/", " over ")} of the circle.`}>
              <circle cx={cx} cy={cy} r={Rpx} fill="none" className="stroke-line" strokeWidth={1.5} strokeDasharray="5 4" />
              <path d={sectorPath(cx, cy, Rpx, th)} className={measure === "area" ? "fill-brand-soft stroke-brand" : "fill-surface-2 stroke-ink-2"} strokeWidth={2} />
              {measure !== "area" ? <path d={arcPath(cx, cy, Rpx, th)} fill="none" className="stroke-accent" strokeWidth={5} strokeLinecap="round" /> : null}
              {measure === "perimeter" ? (
                <path d={sectorPath(cx, cy, Rpx, th)} fill="none" className="stroke-accent" strokeWidth={5} strokeLinejoin="round" />
              ) : null}
              <circle cx={cx} cy={cy} r={3} className="fill-ink" />
              <text x={cx} y={cy + 20} fontSize={12} textAnchor="middle" className="fill-ink-2">
                {th}°
              </text>
              <text x={cx + Rpx * Math.cos((90 + th / 2) * RAD) / 2 - 8} y={cy - (Rpx * Math.sin((90 + th / 2) * RAD)) / 2 - 6} fontSize={12} textAnchor="end" className="fill-ink-2">
                r = {r}
              </text>
            </svg>
            <div className="grid grid-cols-1 gap-2 sm:grid-cols-3">
              <Readout label="Fraction of circle" value={<M>{`${th}/360 = ${fr}`}</M>} tone="ink" />
              <Readout
                label={measure === "arc" ? "Arc length (exact)" : measure === "area" ? "Area (exact)" : "Perimeter (exact)"}
                value={<M>{measure === "arc" ? arcExact : measure === "area" ? areaExact : `${2 * r} + ${arcExact}`}</M>}
              />
              <Readout label="Calculator (3 s.f.)" value={`${sig3(measure === "arc" ? arc : measure === "area" ? area : per)} ${measure === "area" ? "cm²" : "cm"}`} tone="good" />
            </div>
          </>
        ) : (
          <>
            <svg viewBox="0 0 340 230" className="h-auto w-full" role="img" aria-label={`Left: a sector of radius ${r} and angle ${th} degrees. Right: the cone it rolls into, with slant height ${r}, base radius about ${sig3(rho)} and height about ${sig3(coneH)}.`}>
              <path d={sectorPath(scx, scy, sR, th)} className="fill-brand-soft stroke-brand" strokeWidth={2} />
              <path d={arcPath(scx, scy, sR, th)} fill="none" className="stroke-accent" strokeWidth={4} strokeLinecap="round" />
              <circle cx={scx} cy={scy} r={2.5} className="fill-ink" />
              <text x={scx} y={222} fontSize={12} textAnchor="middle" className="fill-ink-2">sector</text>
              <text x={170} y={122} fontSize={20} textAnchor="middle" className="fill-ink-2">→</text>
              {/* Cone */}
              <path d={`M${(ccx - crx).toFixed(1)},${cby} L${ccx},${capex.toFixed(1)} L${(ccx + crx).toFixed(1)},${cby}`} className="fill-brand-soft stroke-brand" strokeWidth={2} />
              <path d={`M${(ccx - crx).toFixed(1)},${cby} A${crx.toFixed(1)},${cry.toFixed(1)} 0 0 0 ${(ccx + crx).toFixed(1)},${cby}`} className="fill-brand-soft stroke-accent" strokeWidth={3} />
              <path d={`M${(ccx - crx).toFixed(1)},${cby} A${crx.toFixed(1)},${cry.toFixed(1)} 0 0 1 ${(ccx + crx).toFixed(1)},${cby}`} fill="none" className="stroke-accent" strokeWidth={1.5} strokeDasharray="4 3" />
              <line x1={ccx} y1={capex} x2={ccx} y2={cby} className="stroke-ink-2" strokeWidth={1.2} strokeDasharray="4 3" />
              <line x1={ccx} y1={cby} x2={ccx + crx} y2={cby} className="stroke-ink-2" strokeWidth={1.2} strokeDasharray="4 3" />
              <text x={ccx + crx / 2 + 8} y={(capex + cby) / 2} fontSize={12} className="fill-ink-2">l = {r}</text>
              <text x={ccx} y={222} fontSize={12} textAnchor="middle" className="fill-ink-2">cone</text>
            </svg>
            <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
              <Readout label="Base radius ρ" value={<M>{rhoM}</M>} tone="ink" />
              <Readout label="Height (Pythagoras)" value={`${sig3(coneH)} cm`} tone="ink" />
              <Readout label="Curved area πρl" value={<M>{areaExact}</M>} />
              <Readout label="Volume (3 s.f.)" value={`${sig3(coneV)} cm³`} tone="good" />
            </div>
          </>
        )}
      </div>
    </WidgetFrame>
  );
}

/** "a third", "a quarter" … for common angles, else the fraction. */
function renderFracWords(th: number): string {
  const words: Record<number, string> = { 90: "a quarter", 180: "a half", 120: "a third", 60: "a sixth", 45: "an eighth", 270: "three quarters", 240: "two thirds", 30: "a twelfth" };
  return words[th] ?? `{{${fracM(th, 360)}}}`;
}

// ===========================================================================
// 2. Frustum builder
// ===========================================================================

function FrustumBuilder() {
  const [R, setRraw] = useState(6);
  const [r, setr] = useState(3);
  const [h, setH] = useState(8);
  const setR = (v: number) => {
    setRraw(v);
    if (r > v) setr(v);
  };

  const isCyl = r === R, isCone = r === 0;
  // Small cone height h1 = h r / (R − r); big cone height H = h R / (R − r).
  const h1n = h * r, h1d = R - r;
  const Hn = h * R;
  // Volumes as multiples of π/3, kept as fractions over (R − r).
  //   big = R² · hR/(R−r), small = r² · hr/(R−r)  ⇒ difference = h(R³ − r³)/(R − r) = h(R² + Rr + r²).
  const sumSq = R * R + R * r + r * r;
  const frustumM = isCyl ? piM(R * R * h) : piM(h * sumSq, 3);
  const frustumV = isCyl ? Math.PI * R * R * h : (Math.PI * h * sumSq) / 3;
  const cylV = Math.PI * R * R * h;
  const share = isCyl ? "1" : fracM(sumSq, 3 * R * R);

  const bigM = isCyl ? "" : piM(R * R * Hn, 3 * h1d);
  const smallM = isCyl || isCone ? "0" : piM(r * r * h1n, 3 * h1d);

  // Drawing: fixed scale so changing R, r, h really changes the picture.
  const W = 340, Hs = 270, s = 13, cx = 170, by = 238;
  const ty = by - h * s;
  const rx = R * s, tx = r * s;
  const ry = Math.max(6, rx * 0.25), tyr = Math.max(3, tx * 0.25);
  const apexY = isCyl ? null : by - (Hn / h1d) * s;

  let caption: string;
  if (isCyl) caption = `With r = R the sides are parallel: no cone, just a **cylinder**. Volume = {{pi R^2 h = ${frustumM}}} ≈ ${sig3(frustumV)}.`;
  else if (isCone) caption = `With r = 0 there's nothing cut off: it's a whole **cone**, and its volume {{${frustumM}}} is exactly {{1/3}} of the cylinder with the same base and height.`;
  else
    caption = `Similar triangles: the missing cone has height {{x}} where {{x/${r} = (x + ${h})/${R}}}, so {{x = ${fracM(h1n, h1d)}}}. Frustum = big cone − small cone = {{${bigM} - ${smallM} = ${frustumM}}} ≈ ${sig3(frustumV)} cm³. It is {{${share}}} of the cylinder with the same base and height.`;

  return (
    <WidgetFrame
      title="Frustum builder"
      tryThis={[
        "Set r = 0. What fraction of the cylinder is the solid now — and why?",
        "Set r = R. What happens to the missing cone?",
        "Make r exactly half of R. What fraction of the big cone is the small cone? (Think scale factor cubed.)",
        "Check that big − small always equals {{1/3 pi h (R^2 + R r + r^2)}}.",
      ]}
      caption={<span>{renderInline(caption)}</span>}
    >
      <div className="space-y-3">
        <Slider label="Base radius R (cm)" value={R} min={2} max={10} onChange={setR} />
        <Slider label="Top radius r (cm)" value={r} min={0} max={R} onChange={setr} />
        <Slider label="Frustum height h (cm)" value={h} min={2} max={14} onChange={setH} />

        <svg viewBox={`0 0 ${W} ${Hs}`} className="h-auto w-full" role="img" aria-label={`Side view of a ${isCyl ? "cylinder" : isCone ? "cone" : "frustum"} with base radius ${R}, top radius ${r} and height ${h} centimetres${!isCyl && !isCone ? ", with the removed top cone shown dashed" : ""}.`}>
          {apexY !== null && !isCone ? (
            <path d={`M${cx - tx},${ty} L${cx},${apexY} L${cx + tx},${ty}`} fill="none" className="stroke-ink-2" strokeWidth={1.3} strokeDasharray="5 4" />
          ) : null}
          <path d={`M${cx - rx},${by} L${cx - tx},${ty} L${cx + tx},${ty} L${cx + rx},${by}`} className="fill-brand-soft stroke-brand" strokeWidth={2} />
          <path d={`M${cx - rx},${by} A${rx},${ry} 0 0 0 ${cx + rx},${by}`} className="fill-brand-soft stroke-brand" strokeWidth={2} />
          <path d={`M${cx - rx},${by} A${rx},${ry} 0 0 1 ${cx + rx},${by}`} fill="none" className="stroke-brand" strokeWidth={1.2} strokeDasharray="4 3" />
          {r > 0 ? <ellipse cx={cx} cy={ty} rx={tx} ry={tyr} className="fill-surface stroke-brand" strokeWidth={2} /> : null}
          <line x1={cx} y1={by} x2={cx + rx} y2={by} className="stroke-ink-2" strokeWidth={1.2} strokeDasharray="4 3" />
          <text x={cx + rx / 2} y={by + ry + 16} fontSize={12} textAnchor="middle" className="fill-ink-2">R = {R}</text>
          {r > 0 ? <text x={cx + tx + 6} y={ty + 4} fontSize={12} className="fill-ink-2">r = {r}</text> : null}
          <line x1={cx - rx - 16} y1={by} x2={cx - rx - 16} y2={ty} className="stroke-ink-2" strokeWidth={1.2} />
          <text x={cx - rx - 20} y={(by + ty) / 2 + 4} fontSize={12} textAnchor="end" className="fill-ink-2">h = {h}</text>
          {apexY !== null && apexY < 0 ? (
            <text x={cx + 8} y={14} fontSize={11} className="fill-ink-2">apex is off the top ↑</text>
          ) : null}
        </svg>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Missing cone height" value={isCyl ? "none" : <M>{fracM(h1n, h1d)}</M>} tone="ink" />
          <Readout label="Full cone height" value={isCyl ? "—" : <M>{fracM(Hn, h1d)}</M>} tone="ink" />
          <Readout label="Volume (exact)" value={<M>{frustumM}</M>} />
          <Readout label="Volume (3 s.f.)" value={`${sig3(frustumV)} cm³`} tone="good" />
        </div>
        <div className="rounded-xl border border-line bg-surface p-3 text-sm text-ink-2">
          Cylinder with the same base and height: <span className="font-bold text-ink">{sig3(cylV)} cm³</span>. This solid is{" "}
          <span className="font-bold text-ink">
            <M>{share}</M>
          </span>{" "}
          of it — always between <M>{"1/3"}</M> (a cone) and 1 (a cylinder).
        </div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------

export const widgets: WidgetDef[] = [
  { id: "sector-lab", title: "Sector lab", blurb: "Change a sector's radius and angle, then roll it into a cone to see where πrl comes from.", Component: SectorLab },
  { id: "frustum-builder", title: "Frustum builder", blurb: "Build a frustum, find the missing cone with similar triangles, and watch big cone − small cone.", Component: FrustumBuilder },
];
