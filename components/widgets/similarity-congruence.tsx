"use client";
// Interactive explorables for "Similarity & Congruence".
//  1. Scale factor lab — enlarge a 2 × 1 rectangle (length / area view) or a cube
//     (volume view) by k = ½ … 4. Copies of the original tile the enlargement, so
//     you can *count* k² rectangles and k³ cubes. Exact fraction readouts for k, k², k³.
//  2. Congruence checker — choose SSS, SAS, ASA, RHS, SSA or AAA, set the given
//     measurements and see EVERY triangle that fits. One triangle = a valid test;
//     SSA can give two different triangles (the ambiguous case); AAA fixes the shape
//     but not the size.
import { useState, type ReactElement } from "react";
import { WidgetFrame, Slider, Segmented, Readout, M, type WidgetDef } from "./kit";
import { renderInline } from "../Rich";

const RAD = Math.PI / 180;
type P2 = [number, number];
const pts = (ps: P2[]) => ps.map((p) => `${p[0].toFixed(1)},${p[1].toFixed(1)}`).join(" ");

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a;
}
/** n / d as maths markup, simplified. */
function fracMarkup(n: number, d: number): string {
  const g = gcd(n, d) || 1;
  const a = n / g, b = d / g;
  return b === 1 ? String(a) : `${a}/${b}`;
}
function dec(v: number, dp = 3): string {
  return String(parseFloat(v.toFixed(dp)));
}
function sig(v: number, n = 3): string {
  return String(parseFloat(v.toPrecision(n)));
}
function Caption({ text }: { text: string }) {
  return <span>{renderInline(text)}</span>;
}

// ===========================================================================
// 1. Scale factor lab
// ===========================================================================

type View = "length" | "area" | "volume";

function ScaleFactorLab() {
  const [view, setView] = useState<View>("area");
  const [k2, setK2] = useState(4); // k = k2 / 2, so k runs ½, 1, 1½ … 4 in exact halves
  const k = k2 / 2;
  const kM = fracMarkup(k2, 2);
  const kSqM = fracMarkup(k2 * k2, 4);
  const kCuM = fracMarkup(k2 * k2 * k2, 8);
  const kSq = k * k, kCu = k * k * k;

  // ---- Rectangle views (2 × 1 original) ----
  const W = 380, H = 230;
  const u = 26; // px per unit
  const ox = 18, oy = 30; // original's top-left
  const ex = 100, ey = 30; // enlargement's top-left
  const tiles: ReactElement[] = [];
  if (view !== "volume") {
    // Copies of the original 2 × 1 tile laid across the enlargement (partial at the edges when k isn't whole).
    for (let x = 2; x < 2 * k - 1e-9; x += 2) tiles.push(<line key={`tx${x}`} x1={ex + x * u} y1={ey} x2={ex + x * u} y2={ey + k * u} className="stroke-brand" strokeDasharray="4 3" strokeWidth={1.4} />);
    for (let y = 1; y < k - 1e-9; y += 1) tiles.push(<line key={`ty${y}`} x1={ex} y1={ey + y * u} x2={ex + 2 * k * u} y2={ey + y * u} className="stroke-brand" strokeDasharray="4 3" strokeWidth={1.4} />);
  }

  // ---- Cube view (isometric) ----
  const cu = 22;
  const iso = (x: number, y: number, z: number, cx: number, cy: number): P2 => [cx + (x - y) * cu * Math.cos(30 * RAD), cy + (x + y) * cu * Math.sin(30 * RAD) - z * cu];
  const cubeFaces = (s: number, cx: number, cy: number, grid: boolean, keyP: string) => {
    const P = (x: number, y: number, z: number) => iso(x, y, z, cx, cy);
    const top = [P(0, 0, s), P(s, 0, s), P(s, s, s), P(0, s, s)];
    const left = [P(0, s, 0), P(s, s, 0), P(s, s, s), P(0, s, s)];
    const right = [P(s, 0, 0), P(s, s, 0), P(s, s, s), P(s, 0, s)];
    const lines: ReactElement[] = [];
    if (grid) {
      for (let t = 1; t < s - 1e-9; t += 1) {
        const add = (a: P2, b: P2, key: string) => lines.push(<line key={`${keyP}${key}${t}`} x1={a[0]} y1={a[1]} x2={b[0]} y2={b[1]} className="stroke-brand" strokeWidth={1} strokeOpacity={0.7} />);
        add(P(t, 0, s), P(t, s, s), "a");
        add(P(0, t, s), P(s, t, s), "b");
        add(P(t, s, 0), P(t, s, s), "c");
        add(P(0, s, t), P(s, s, t), "d");
        add(P(s, t, 0), P(s, t, s), "e");
        add(P(s, 0, t), P(s, s, t), "f");
      }
    }
    return (
      <g key={keyP}>
        <polygon points={pts(top)} className="fill-brand-soft stroke-ink" strokeWidth={1.5} />
        <polygon points={pts(left)} className="fill-accent-soft stroke-ink" strokeWidth={1.5} />
        <polygon points={pts(right)} className="fill-good-soft stroke-ink" strokeWidth={1.5} />
        {lines}
      </g>
    );
  };

  const paint = 40, mass = 200;
  const captions: Record<View, string> = {
    length: `Every length is multiplied by k = {{${kM}}}. The 2 × 1 rectangle becomes ${dec(2 * k)} × ${dec(k)}, and its perimeter goes from 6 to ${dec(6 * k)} — also × {{${kM}}}. Perimeters, heights, diagonals, radii: anything measured in cm scales by k.`,
    area: `The big rectangle is ${dec(2 * k)} × ${dec(k)} = ${dec(2 * kSq)} square units, compared with 2. That's {{${kSqM}}} = ${dec(kSq)} copies of the original (count the dashed tiles${Number.isInteger(k) ? "" : " — some are only part-tiles"}). Area has two dimensions, so it scales by {{k^2}}. A model that needs ${paint} ml of paint would need ${dec(paint * kSq)} ml at this size.`,
    volume: `The big cube has side ${dec(k)}, so it holds {{${kM}^3}} = {{${kCuM}}} = ${dec(kCu)} unit cubes${Number.isInteger(k) ? "" : " (the grid shows whole cubes plus slices)"}. Volume has three dimensions, so it scales by {{k^3}}. A ${mass} g solid made bigger like this would weigh ${dec(mass * kCu)} g — mass and capacity follow volume.`,
  };

  return (
    <WidgetFrame
      title="Scale factor lab"
      tryThis={[
        "Find the k that makes the area exactly 9 times bigger. What does the volume do for the same k?",
        "Set k = {{1/2}}. What fraction of the original area is left? What fraction of the volume?",
        "The volume went up 8 times. What happened to the area? (Find k first.)",
        "Predict the area and volume factors for k = 2.5 before you move the slider.",
      ]}
      caption={
        <span>
          Similar shapes: lengths × <M>k</M>, areas × <M>{"k^2"}</M>, volumes × <M>{"k^3"}</M>. Going backwards? Square root an area ratio, cube root a volume ratio, to get back to <M>k</M>.
        </span>
      }
    >
      <div className="space-y-3">
        <Segmented<View>
          label="What to measure"
          options={[
            { value: "length", label: "Length" },
            { value: "area", label: "Area" },
            { value: "volume", label: "Volume" },
          ]}
          value={view}
          onChange={setView}
        />
        <Slider label={<span>Scale factor <M>k</M></span>} value={k2} min={1} max={8} onChange={setK2} format={(v) => <M>{fracMarkup(v, 2)}</M>} />
        <div className="grid grid-cols-3 gap-2">
          <Readout label="Length × k" value={<M>{kM}</M>} tone={view === "length" ? "brand" : "ink"} />
          <Readout label="Area × k²" value={<M>{kSqM}</M>} tone={view === "area" ? "brand" : "ink"} />
          <Readout label="Volume × k³" value={<M>{kCuM}</M>} tone={view === "volume" ? "brand" : "ink"} />
        </div>
        {view === "volume" ? (
          <svg viewBox={`0 0 ${W} 250`} className="h-auto w-full" role="img" aria-label={`A unit cube and a similar cube of side ${dec(k)}. The big cube's volume is ${dec(kCu)} times the small one's.`}>
            {cubeFaces(1, 40, 150, false, "s")}
            <text x={40} y={196} fontSize={12} textAnchor="middle" className="fill-ink-2">original: 1 cube</text>
            {cubeFaces(k, 240, 236 - 2 * k * cu * Math.sin(30 * RAD) - k * cu < 10 ? 10 + k * cu : 236 - 2 * k * cu * Math.sin(30 * RAD) - 0 * cu, true, "b")}
            <text x={240} y={248} fontSize={12} textAnchor="middle" className="fill-ink-2">side {dec(k)} → volume {dec(kCu)}</text>
          </svg>
        ) : (
          <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`A 2 by 1 rectangle and a similar rectangle ${dec(2 * k)} by ${dec(k)}. ${view === "area" ? `Area ${dec(2 * kSq)} compared with 2, a factor of ${dec(kSq)}.` : `Perimeter ${dec(6 * k)} compared with 6, a factor of ${dec(k)}.`}`}>
            {Array.from({ length: 13 }, (_, i) => (
              <line key={`gx${i}`} x1={ex + i * u} y1={ey} x2={ex + i * u} y2={ey + 7 * u} className="stroke-line" strokeWidth={0.8} />
            )).slice(0, 11)}
            {Array.from({ length: 8 }, (_, i) => (
              <line key={`gy${i}`} x1={ex} y1={ey + i * u} x2={ex + 10 * u} y2={ey + i * u} className="stroke-line" strokeWidth={0.8} />
            )).slice(0, 7)}
            <rect x={ox} y={oy} width={2 * u} height={u} className={view === "area" ? "fill-accent-soft stroke-ink" : "fill-surface stroke-accent"} strokeWidth={view === "length" ? 3 : 1.5} />
            <text x={ox + u} y={oy + u + 16} fontSize={11} textAnchor="middle" className="fill-ink-2">2 × 1</text>
            <rect x={ex} y={ey} width={2 * k * u} height={k * u} className={view === "area" ? "fill-brand-soft stroke-ink" : "fill-surface stroke-brand"} fillOpacity={view === "area" ? 0.9 : 0} strokeWidth={view === "length" ? 3 : 1.5} />
            {view === "area" ? tiles : null}
            <text x={ex + k * u} y={ey - 8} fontSize={12} fontWeight={700} textAnchor="middle" className="fill-ink">{dec(2 * k)}</text>
            <text x={ex + 2 * k * u + 6} y={ey + (k * u) / 2 + 4} fontSize={12} fontWeight={700} className="fill-ink">{dec(k)}</text>
          </svg>
        )}
        <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed text-ink"><Caption text={captions[view]} /></div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// 2. Congruence checker
// ===========================================================================

type Cond = "SSS" | "SAS" | "ASA" | "RHS" | "SSA" | "AAA";
type Tri = [P2, P2, P2]; // A, B, C in maths units (y up)

interface Solved {
  tris: Tri[];
  /** Labels for the given parts, drawn on the first triangle: [from, to, text] or an angle at a vertex index. */
  note: string;
}

function solve(c: Cond, v: Record<string, number>): Solved {
  const cos = (d: number) => Math.cos(d * RAD), sin = (d: number) => Math.sin(d * RAD);
  switch (c) {
    case "SSS": {
      const { a, b, c: cc } = v; // BC, CA, AB
      if (a >= b + cc || b >= a + cc || cc >= a + b) return { tris: [], note: `No triangle: the longest side must be shorter than the other two added together (${Math.max(a, b, cc)} < ${a + b + cc - Math.max(a, b, cc)} fails).` };
      const x = (cc * cc + b * b - a * a) / (2 * b);
      return { tris: [[[0, 0], [x, Math.sqrt(cc * cc - x * x)], [b, 0]]], note: "Three sides can only be joined up one way (mirror images count as the same triangle)." };
    }
    case "SAS": {
      const { b, c: cc, A } = v;
      return { tris: [[[0, 0], [cc * cos(A), cc * sin(A)], [b, 0]]], note: "The angle is *between* the two sides, so it hinges them at a fixed opening — the third side is forced." };
    }
    case "ASA": {
      const { a, B, C } = v;
      if (B + C >= 180) return { tris: [], note: `No triangle: the two angles add to ${B + C}°, leaving nothing for the third angle.` };
      const AB = (a * sin(C)) / sin(B + C);
      // Place B at the origin, C on the x-axis; then shift so A-B-C reads naturally.
      const Bp: P2 = [0, 0], Cp: P2 = [a, 0], Ap: P2 = [AB * cos(B), AB * sin(B)];
      return { tris: [[Ap, Bp, Cp]], note: `The two rays from B and C can only meet at one point. (The third angle is ${180 - B - C}°, so AAS works too.)` };
    }
    case "RHS": {
      const { h, l } = v;
      if (l >= h) return { tris: [], note: "No triangle: the hypotenuse must be the longest side." };
      const other = Math.sqrt(h * h - l * l);
      return { tris: [[[0, 0], [l, other], [l, 0]]], note: `Pythagoras forces the third side: {{sqrt(${h}^2 - ${l}^2)}} ≈ ${sig(other)}. One triangle only.` };
    }
    case "SSA": {
      const { A, c: cc, a } = v; // angle A, AB = c (next to A), BC = a (opposite A)
      const Bp: P2 = [cc * cos(A), cc * sin(A)];
      const disc = a * a - cc * cc * sin(A) * sin(A);
      if (disc < -1e-9) return { tris: [], note: `No triangle: BC = ${a} is shorter than the distance from B to the line (${sig(cc * sin(A))}), so it can't reach.` };
      const r = Math.sqrt(Math.max(disc, 0));
      const xs = [cc * cos(A) - r, cc * cos(A) + r].filter((x) => x > 1e-6);
      const uniq = xs.filter((x, i) => i === 0 || Math.abs(x - xs[0]) > 1e-6);
      const tris = uniq.map((x) => [[0, 0], Bp, [x, 0]] as Tri);
      const note =
        tris.length === 2
          ? `**Two different triangles** fit: BC can swing to meet the base line at two places. SSA is *not* a congruence test.`
          : Math.abs(disc) < 1e-9
            ? "Exactly one triangle — BC just touches the base line at a right angle. (This is really RHS.)"
            : `Only one triangle this time (BC ≥ AB, so the second crossing is behind A). But change the numbers and SSA can give two — so it's still not a valid test.`;
      return { tris, note };
    }
    default: {
      const { A, B } = v;
      if (A + B >= 180) return { tris: [], note: "No triangle: the angles must add up to 180°." };
      const make = (base: number): Tri => {
        const C = 180 - A - B;
        const AB = (base * sin(C)) / sin(A + C) || 0;
        // A at origin, C on the x-axis at `base`; B from angle A and AB = base·sin C / sin B.
        const ABlen = (base * sin(C)) / sin(B);
        void AB;
        return [[0, 0], [ABlen * cos(A), ABlen * sin(A)], [base, 0]];
      };
      return { tris: [make(4), make(7)], note: "Same three angles, different sizes: the triangles are **similar**, not congruent. AAA fixes the shape but not the size." };
    }
  }
}

const COND_INFO: Record<Cond, { sliders: Array<{ key: string; label: string; min: number; max: number; step: number; unit: string }>; init: Record<string, number> }> = {
  SSS: { sliders: [{ key: "a", label: "BC", min: 2, max: 10, step: 0.5, unit: "" }, { key: "b", label: "CA", min: 2, max: 10, step: 0.5, unit: "" }, { key: "c", label: "AB", min: 2, max: 10, step: 0.5, unit: "" }], init: { a: 6, b: 7, c: 5 } },
  SAS: { sliders: [{ key: "b", label: "AC", min: 2, max: 10, step: 0.5, unit: "" }, { key: "c", label: "AB", min: 2, max: 10, step: 0.5, unit: "" }, { key: "A", label: "Angle A (between them)", min: 10, max: 170, step: 1, unit: "°" }], init: { b: 8, c: 5, A: 50 } },
  ASA: { sliders: [{ key: "a", label: "BC", min: 2, max: 10, step: 0.5, unit: "" }, { key: "B", label: "Angle B", min: 10, max: 160, step: 1, unit: "°" }, { key: "C", label: "Angle C", min: 10, max: 160, step: 1, unit: "°" }], init: { a: 8, B: 55, C: 45 } },
  RHS: { sliders: [{ key: "h", label: "Hypotenuse AB", min: 2, max: 10, step: 0.5, unit: "" }, { key: "l", label: "Side AC", min: 1, max: 10, step: 0.5, unit: "" }], init: { h: 8, l: 5 } },
  SSA: { sliders: [{ key: "A", label: "Angle A", min: 10, max: 150, step: 1, unit: "°" }, { key: "c", label: "AB (next to A)", min: 2, max: 10, step: 0.5, unit: "" }, { key: "a", label: "BC (opposite A)", min: 1, max: 10, step: 0.5, unit: "" }], init: { A: 35, c: 8, a: 5.5 } },
  AAA: { sliders: [{ key: "A", label: "Angle A", min: 10, max: 160, step: 1, unit: "°" }, { key: "B", label: "Angle B", min: 10, max: 160, step: 1, unit: "°" }], init: { A: 60, B: 50 } },
};

function CongruenceChecker() {
  const [cond, setCond] = useState<Cond>("SSA");
  const [vals, setVals] = useState<Record<Cond, Record<string, number>>>(() => ({
    SSS: { ...COND_INFO.SSS.init },
    SAS: { ...COND_INFO.SAS.init },
    ASA: { ...COND_INFO.ASA.init },
    RHS: { ...COND_INFO.RHS.init },
    SSA: { ...COND_INFO.SSA.init },
    AAA: { ...COND_INFO.AAA.init },
  }));
  const v = vals[cond];
  const setV = (key: string, x: number) => setVals((old) => ({ ...old, [cond]: { ...old[cond], [key]: x } }));
  const { tris, note } = solve(cond, v);

  // Fixed scale (so sizes compare honestly), centred on the drawing.
  const W = 380, H = 250, sc = 22;
  const all = tris.flat();
  const xs = all.map((p) => p[0]), ys = all.map((p) => p[1]);
  const x0 = all.length ? Math.min(...xs) : 0, x1 = all.length ? Math.max(...xs) : 1;
  const y0 = all.length ? Math.min(...ys) : 0, y1 = all.length ? Math.max(...ys) : 1;
  const s = Math.min(sc, (W - 60) / Math.max(x1 - x0, 0.1), (H - 60) / Math.max(y1 - y0, 0.1));
  const ox = (W - (x1 - x0) * s) / 2 - x0 * s, oy = H - (H - (y1 - y0) * s) / 2 + y0 * s;
  const P = (p: P2): P2 => [ox + p[0] * s, oy - p[1] * s];
  const styles = ["fill-brand-soft stroke-brand", "fill-accent-soft stroke-accent"];
  const verdict = tris.length === 1 ? "1 triangle — proves congruence" : tris.length === 2 ? (cond === "AAA" ? "Same shape, any size" : "2 triangles — NOT a test") : "No triangle possible";
  const tone = tris.length === 1 ? "good" : tris.length === 0 ? "ink" : "bad";

  const vLab = (p: P2, cen: P2, t: string, key: string, cls = "fill-ink") => {
    const dx = p[0] - cen[0], dy = p[1] - cen[1], L = Math.hypot(dx, dy) || 1;
    return <text key={key} x={p[0] + (dx / L) * 14} y={p[1] + (dy / L) * 14 + 4} fontSize={13} fontWeight={800} textAnchor="middle" className={cls}>{t}</text>;
  };

  return (
    <WidgetFrame
      title="Congruence checker: does the information fix the triangle?"
      tryThis={[
        "In SSA, set angle A = 35°, AB = 8 and slide BC from 4 to 9. When are there two triangles, one, or none?",
        "Explain why SAS always gives exactly one triangle but SSA doesn't.",
        "In AAA, both triangles have the same angles. Are they congruent? What *are* they?",
        "In SSS, find three lengths that make no triangle at all.",
      ]}
      caption={
        <span>
          A set of facts is a <b>congruence test</b> only if it always pins down exactly <b>one</b> triangle. SSS, SAS, ASA (or AAS) and RHS do; SSA and AAA don&rsquo;t.
        </span>
      }
    >
      <div className="space-y-3">
        <Segmented<Cond>
          label="Condition"
          options={(["SSS", "SAS", "ASA", "RHS", "SSA", "AAA"] as Cond[]).map((c) => ({ value: c, label: c }))}
          value={cond}
          onChange={setCond}
        />
        <div className="grid gap-2 sm:grid-cols-3">
          {COND_INFO[cond].sliders.map((sl) => (
            <Slider key={`${cond}-${sl.key}`} label={sl.label} value={v[sl.key]} min={sl.min} max={sl.max} step={sl.step} onChange={(x) => setV(sl.key, x)} format={(x) => `${x}${sl.unit}`} />
          ))}
        </div>
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full" role="img" aria-label={`${cond}: ${verdict}. ${tris.length} triangle${tris.length === 1 ? "" : "s"} drawn.`}>
          {tris.length === 0 ? (
            <text x={W / 2} y={H / 2} fontSize={14} fontWeight={700} textAnchor="middle" className="fill-ink-2">No triangle fits these measurements</text>
          ) : null}
          {tris.map((t, i) => {
            const q = t.map(P) as [P2, P2, P2];
            return <polygon key={`t${i}`} points={pts(q)} className={styles[i]} fillOpacity={i === 0 ? 0.75 : 0.5} strokeWidth={2.5} strokeDasharray={i === 1 ? "6 4" : undefined} />;
          })}
          {tris.map((t, i) => {
            const q = t.map(P) as [P2, P2, P2];
            const cen: P2 = [(q[0][0] + q[1][0] + q[2][0]) / 3, (q[0][1] + q[1][1] + q[2][1]) / 3];
            const names = tris.length === 2 && cond === "SSA" ? ["A", "B", i === 0 ? "C₁" : "C₂"] : tris.length === 2 ? (i === 0 ? ["A", "B", "C"] : ["A′", "B′", "C′"]) : ["A", "B", "C"];
            return (
              <g key={`l${i}`}>
                {q.map((p, j) => (i === 1 && cond === "SSA" && j < 2 ? null : vLab(p, cen, names[j], `v${i}${j}`, i === 1 ? "fill-accent" : "fill-ink")))}
              </g>
            );
          })}
        </svg>
        <div className="grid grid-cols-2 gap-2">
          <Readout label="Verdict" value={verdict} tone={tone} />
          <Readout label="Triangles that fit" value={cond === "AAA" && tris.length ? "infinitely many" : tris.length} tone="ink" />
        </div>
        <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed text-ink"><Caption text={note} /></div>
      </div>
    </WidgetFrame>
  );
}

// ---------------------------------------------------------------------------

export const widgets: WidgetDef[] = [
  { id: "scale-factor-lab", title: "Scale factor lab", blurb: "Enlarge a rectangle and a cube and count the copies: lengths × k, areas × k², volumes × k³.", Component: ScaleFactorLab },
  { id: "congruence-checker", title: "Congruence checker", blurb: "Set SSS, SAS, ASA, RHS, SSA or AAA information and see every triangle that fits — spot the ambiguous case.", Component: CongruenceChecker },
];
