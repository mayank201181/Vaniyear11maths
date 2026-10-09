"use client";
// Interactive explorables for "Vectors & Transformations".
//  1. Transformation machine — apply a reflection, rotation, enlargement (incl. fractional
//     and negative scale factors) or translation to an asymmetric shape on a grid, then
//     optionally a second transformation. Every transformation is stored exactly as an
//     affine map x ↦ Mx + t, so the widget can *classify* the combination and describe the
//     single equivalent transformation fully (mirror line / centre / angle / scale factor /
//     column vector) and list the invariant vertices.
//  2. Vector lab — set column vectors a and b. "Combine" draws λa + μb tip-to-tail with its
//     column vector and magnitude (Pythagoras, exact surd). "Point on AB" splits AB in a
//     ratio m : n and shows OP = a + m/(m+n)(b − a) in terms of a and b and as a column.
import { useState, type ReactElement } from "react";
import { WidgetFrame, Slider, Stepper, Segmented, Readout, M, makePlane, PlaneGrid, type WidgetDef } from "./kit";
import { renderInline } from "../Rich";

type P2 = [number, number];
const HALO = { paintOrder: "stroke" as const, strokeLinejoin: "round" as const };

// ---------------------------------------------------------------------------
// Number formatting
// ---------------------------------------------------------------------------

function gcd(a: number, b: number): number {
  a = Math.abs(a);
  b = Math.abs(b);
  while (b) [a, b] = [b, a % b];
  return a || 1;
}
const near = (a: number, b: number) => Math.abs(a - b) < 1e-9;
const tidy = (v: number) => (near(v, 0) ? 0 : Math.round(v * 1e9) / 1e9);
/** Plain text number with a real minus sign. */
function n(v: number): string {
  const s = String(tidy(v));
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}
/** Maths-markup number: exact fraction when v is a multiple of 1/2, 1/3, 1/4, 1/5 or 1/6; ASCII minus. */
function q(v: number): string {
  v = tidy(v);
  for (const d of [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]) {
    const k = v * d;
    if (near(k, Math.round(k))) {
      const num = Math.round(k);
      if (d === 1) return String(num);
      const g = gcd(num, d);
      return d / g === 1 ? String(num / g) : `${num / g}/${d / g}`;
    }
  }
  return String(parseFloat(v.toFixed(3)));
}
const col = (v: P2) => `col(${q(v[0])}, ${q(v[1])})`;
const pt = (p: P2) => `(${n(p[0])}, ${n(p[1])})`;

// ===========================================================================
// 1. Transformation machine
// ===========================================================================

/** Affine map (x, y) ↦ (a x + b y + e, c x + d y + f). */
interface Aff { a: number; b: number; c: number; d: number; e: number; f: number }
const apply = (T: Aff, p: P2): P2 => [tidy(T.a * p[0] + T.b * p[1] + T.e), tidy(T.c * p[0] + T.d * p[1] + T.f)];
/** T2 after T1. */
function compose(T2: Aff, T1: Aff): Aff {
  return {
    a: T2.a * T1.a + T2.b * T1.c,
    b: T2.a * T1.b + T2.b * T1.d,
    c: T2.c * T1.a + T2.d * T1.c,
    d: T2.c * T1.b + T2.d * T1.d,
    e: T2.a * T1.e + T2.b * T1.f + T2.e,
    f: T2.c * T1.e + T2.d * T1.f + T2.f,
  };
}
const reflX = (k: number): Aff => ({ a: -1, b: 0, c: 0, d: 1, e: 2 * k, f: 0 }); // in x = k
const reflY = (k: number): Aff => ({ a: 1, b: 0, c: 0, d: -1, e: 0, f: 2 * k }); // in y = k
const reflYX: Aff = { a: 0, b: 1, c: 1, d: 0, e: 0, f: 0 };
const reflYmX: Aff = { a: 0, b: -1, c: -1, d: 0, e: 0, f: 0 };
function rot(deg: number, C: P2): Aff {
  const r = (deg * Math.PI) / 180;
  const co = Math.round(Math.cos(r)), si = Math.round(Math.sin(r));
  return { a: co, b: -si, c: si, d: co, e: C[0] - (co * C[0] - si * C[1]), f: C[1] - (si * C[0] + co * C[1]) };
}
const enl = (k: number, C: P2): Aff => ({ a: k, b: 0, c: 0, d: k, e: (1 - k) * C[0], f: (1 - k) * C[1] });
const trans = (v: P2): Aff => ({ a: 1, b: 0, c: 0, d: 1, e: v[0], f: v[1] });

/** "Describe fully" for any affine map built from the four IGCSE transformations. */
function describe(T: Aff): { text: string; kind: "identity" | "translation" | "rotation" | "reflection" | "enlargement" | "glide" | "other"; centre?: P2 } {
  const { a, b, c, d, e, f } = T;
  const det = a * d - b * c;
  const isScalar = near(b, 0) && near(c, 0) && near(a, d);
  if (isScalar && near(a, 1)) {
    if (near(e, 0) && near(f, 0)) return { text: "no change at all (the identity): every point is invariant", kind: "identity" };
    return { text: `a **translation** by the column vector {{${col([e, f])}}}`, kind: "translation" };
  }
  if (isScalar) {
    const k = a;
    const C: P2 = [tidy(e / (1 - k)), tidy(f / (1 - k))];
    if (near(k, -1)) return { text: `a **rotation of 180°** about ${pt(C)} (the same as an enlargement with scale factor −1, centre ${pt(C)})`, kind: "rotation", centre: C };
    return { text: `an **enlargement**, scale factor {{${q(k)}}}, centre ${pt(C)}`, kind: "enlargement", centre: C };
  }
  const scale = Math.sqrt(Math.abs(det));
  if (near(scale, 1) && det > 0) {
    // Rotation by θ: solve (I − M)C = t.
    const deg = Math.round((Math.atan2(c, a) * 180) / Math.PI + 360) % 360;
    const m11 = 1 - a, m12 = -b, m21 = -c, m22 = 1 - d;
    const D = m11 * m22 - m12 * m21;
    const C: P2 = [tidy((e * m22 - m12 * f) / D), tidy((m11 * f - m21 * e) / D)];
    const dir = deg === 90 ? "90° anticlockwise" : deg === 270 ? "90° clockwise" : `${deg}°`;
    return { text: `a **rotation of ${dir}** about ${pt(C)}`, kind: "rotation", centre: C };
  }
  if (near(scale, 1) && det < 0) {
    const theta = Math.round(((Math.atan2(c, a) * 180) / Math.PI / 2 + 180) % 180);
    const x0: P2 = [e / 2, f / 2];
    const img = apply(T, x0);
    if (!(near(img[0], x0[0]) && near(img[1], x0[1]))) {
      return { text: "a reflection followed by a translation along the mirror (a *glide reflection*). It is **not** one of the four single transformations — you'd have to describe it as two", kind: "glide" };
    }
    let line = "";
    if (theta === 0) line = `y = ${q(x0[1])}`;
    else if (theta === 90) line = `x = ${q(x0[0])}`;
    else if (theta === 45) line = `y = x ${x0[1] - x0[0] < 0 ? "-" : "+"} ${q(Math.abs(x0[1] - x0[0]))}`.replace(/ \+ 0$/, "");
    else if (theta === 135) line = `y = -x ${x0[1] + x0[0] < 0 ? "-" : "+"} ${q(Math.abs(x0[1] + x0[0]))}`.replace(/ \+ 0$/, "");
    else line = `a line at ${theta}° to the x-axis through ${pt(x0)}`;
    const named = line === "y = 0" ? "the x-axis (y = 0)" : line === "x = 0" ? "the y-axis (x = 0)" : `the line {{${line}}}`;
    return { text: `a **reflection** in ${named}`, kind: "reflection" };
  }
  return { text: `an enlargement combined with a rotation (scale factor {{${q(scale)}}}). That's not a single IGCSE transformation`, kind: "other" };
}

type Kind = "reflect" | "rotate" | "enlarge" | "translate";
type Mirror = "x=k" | "y=k" | "y=x" | "y=-x";
type Second = "none" | "rx" | "ry" | "ryx" | "r90" | "r180" | "t" | "e2";

const SHAPE: P2[] = [[1, 1], [3, 1], [3, 2], [2, 2], [2, 4], [1, 4]]; // an asymmetric "L"
const SECONDS: Record<Second, { label: string; T: Aff | null; name: string }> = {
  none: { label: "nothing", T: null, name: "" },
  rx: { label: "reflect in x-axis", T: reflY(0), name: "reflection in the x-axis" },
  ry: { label: "reflect in y-axis", T: reflX(0), name: "reflection in the y-axis" },
  ryx: { label: "reflect in y = x", T: reflYX, name: "reflection in y = x" },
  r90: { label: "rotate 90° anticlockwise about O", T: rot(90, [0, 0]), name: "rotation 90° anticlockwise about O" },
  r180: { label: "rotate 180° about O", T: rot(180, [0, 0]), name: "rotation 180° about O" },
  t: { label: "translate by col(2, −3)", T: trans([2, -3]), name: "translation by col(2, −3)" },
  e2: { label: "enlarge ×2 from O", T: enl(2, [0, 0]), name: "enlargement, scale factor 2, centre O" },
};
const KS = [-2, -1, -0.5, 0.5, 2, 3];

function TransformationMachine() {
  const [kind, setKind] = useState<Kind>("reflect");
  const [mirror, setMirror] = useState<Mirror>("x=k");
  const [k, setK] = useState(0);
  const [turn, setTurn] = useState<"90" | "270" | "180">("90");
  const [cx, setCx] = useState(0);
  const [cy, setCy] = useState(0);
  const [kIdx, setKIdx] = useState(4);
  const [tx, setTx] = useState(3);
  const [ty, setTy] = useState(-2);
  const [second, setSecond] = useState<Second>("none");

  const C: P2 = [cx, cy];
  const sf = KS[kIdx];
  let T1: Aff;
  let firstName: string;
  if (kind === "reflect") {
    T1 = mirror === "x=k" ? reflX(k) : mirror === "y=k" ? reflY(k) : mirror === "y=x" ? reflYX : reflYmX;
    firstName = mirror === "x=k" ? `reflection in x = ${n(k)}` : mirror === "y=k" ? `reflection in y = ${n(k)}` : mirror === "y=x" ? "reflection in y = x" : "reflection in y = −x";
  } else if (kind === "rotate") {
    const deg = turn === "90" ? 90 : turn === "270" ? 270 : 180;
    T1 = rot(deg, C);
    firstName = `rotation ${turn === "90" ? "90° anticlockwise" : turn === "270" ? "90° clockwise" : "180°"} about ${pt(C)}`;
  } else if (kind === "enlarge") {
    T1 = enl(sf, C);
    firstName = `enlargement, scale factor ${n(sf)}, centre ${pt(C)}`;
  } else {
    T1 = trans([tx, ty]);
    firstName = `translation by col(${n(tx)}, ${n(ty)})`;
  }
  const T2 = SECONDS[second].T;
  const total = T2 ? compose(T2, T1) : T1;
  const img1 = SHAPE.map((p) => apply(T1, p));
  const img2 = T2 ? img1.map((p) => apply(T2, p)) : null;
  const final = img2 ?? img1;
  const desc = describe(total);
  const invariant = SHAPE.filter((p, i) => near(p[0], final[i][0]) && near(p[1], final[i][1]));

  // Drawing
  const W = 360, H = 360;
  const plane = makePlane({ width: W, height: H, xMin: -10, xMax: 10, yMin: -10, yMax: 10, pad: 14 });
  const { px, py } = plane;
  const poly = (ps: P2[]) => ps.map((p) => `${px(p[0]).toFixed(1)},${py(p[1]).toFixed(1)}`).join(" ");
  const offGrid = final.some((p) => Math.abs(p[0]) > 10 || Math.abs(p[1]) > 10);

  const guides: ReactElement[] = [];
  if (kind === "reflect") {
    const L = 10;
    const ends: [P2, P2] = mirror === "x=k" ? [[k, -L], [k, L]] : mirror === "y=k" ? [[-L, k], [L, k]] : mirror === "y=x" ? [[-L, -L], [L, L]] : [[-L, L], [L, -L]];
    guides.push(<line key="m" x1={px(ends[0][0])} y1={py(ends[0][1])} x2={px(ends[1][0])} y2={py(ends[1][1])} className="stroke-bad" strokeWidth={2.5} strokeDasharray="7 4" />);
  }
  if (kind === "rotate" || kind === "enlarge") {
    if (kind === "enlarge")
      SHAPE.forEach((p, i) => {
        const far: P2 = [C[0] + (p[0] - C[0]) * 30, C[1] + (p[1] - C[1]) * 30];
        const back: P2 = [C[0] - (p[0] - C[0]) * 30, C[1] - (p[1] - C[1]) * 30];
        guides.push(<line key={`r${i}`} x1={px(back[0])} y1={py(back[1])} x2={px(far[0])} y2={py(far[1])} className="stroke-ink-2" strokeWidth={0.8} opacity={0.5} />);
      });
    guides.push(<circle key="c" cx={px(C[0])} cy={py(C[1])} r={5} className="fill-bad stroke-surface" strokeWidth={2} />);
  }
  if (kind === "translate") {
    const p = SHAPE[0], q2 = img1[0];
    guides.push(
      <line key="tv" x1={px(p[0])} y1={py(p[1])} x2={px(q2[0])} y2={py(q2[1])} className="stroke-good" strokeWidth={2.5} markerEnd="url(#vt-arrow)" />,
    );
  }

  const tryThis = [
    "Reflect in x = 2, then reflect in the y-axis. The result is a translation — predict its column vector first.",
    "Find a scale factor that makes the image upside down AND smaller.",
    "Rotate 90° about any centre, then reflect in y = x. Is the result ever a single transformation?",
    "Which settings leave a vertex of the shape invariant (not moving)?",
  ];

  const ariaLabel = `Grid from −10 to 10. Object L-shape with vertices ${SHAPE.map(pt).join(", ")}. Image after ${firstName}${T2 ? ` then ${SECONDS[second].name}` : ""}: ${final.map(pt).join(", ")}.`;
  const captionText =
    `${T2 ? `**${firstName}**, then **${SECONDS[second].name}**` : `**${firstName}**`} is ${desc.text}.` +
    (desc.kind === "reflection" ? " Every point on the mirror line is invariant." : desc.kind === "rotation" || desc.kind === "enlargement" ? ` The only invariant point is the centre ${desc.centre ? pt(desc.centre) : ""}.` : desc.kind === "translation" ? " A translation has no invariant points." : "") +
    (invariant.length ? ` Invariant vertices of the shape: ${invariant.map(pt).join(", ")}.` : "") +
    (kind === "enlarge" && sf < 0 ? " A negative scale factor puts the image on the *other* side of the centre, upside down." : "") +
    (kind === "enlarge" && Math.abs(sf) < 1 ? " A scale factor between −1 and 1 makes the image smaller — it's still called an enlargement." : "") +
    (offGrid ? " (Part of the image is off the grid.)" : "");

  return (
    <WidgetFrame title="Transformation machine" tryThis={tryThis} caption={<span>{renderInline(captionText)}</span>}>
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full rounded-xl border border-line bg-surface" role="img" aria-label={ariaLabel}>
          <defs>
            <marker id="vt-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse">
              <path d="M0,0 L10,5 L0,10 z" className="fill-good" />
            </marker>
          </defs>
          <PlaneGrid plane={plane} step={1} labels={false} />
          {[-10, -5, 5, 10].map((t) => (
            <g key={t}>
              <text x={px(t)} y={py(0) + 12} fontSize={9} textAnchor="middle" className="fill-ink-2">{n(t)}</text>
              <text x={px(0) - 4} y={py(t) + 3} fontSize={9} textAnchor="end" className="fill-ink-2">{n(t)}</text>
            </g>
          ))}
          {guides}
          <polygon points={poly(SHAPE)} className="fill-brand stroke-ink" fillOpacity={0.55} strokeWidth={2} />
          <text x={px(1.5)} y={py(1.5) + 4} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-ink stroke-surface" strokeWidth={3} style={HALO}>A</text>
          {img2 ? <polygon points={poly(img1)} className="fill-accent stroke-ink" fillOpacity={0.2} strokeWidth={1.5} strokeDasharray="4 3" /> : null}
          <polygon points={poly(final)} className="fill-accent stroke-ink" fillOpacity={0.6} strokeWidth={2} />
          <text x={px((final[0][0] + final[2][0]) / 2)} y={py((final[0][1] + final[2][1]) / 2) + 4} fontSize={11} fontWeight={800} textAnchor="middle" className="fill-ink stroke-surface" strokeWidth={3} style={HALO}>{img2 ? "C" : "B"}</text>
          {invariant.map((p) => (
            <circle key={`i${p[0]},${p[1]}`} cx={px(p[0])} cy={py(p[1])} r={6} className="fill-good stroke-surface" strokeWidth={2} />
          ))}
        </svg>
        <div className="space-y-3">
          <Segmented<Kind>
            label="First transformation"
            options={[
              { value: "reflect", label: "Reflect" },
              { value: "rotate", label: "Rotate" },
              { value: "enlarge", label: "Enlarge" },
              { value: "translate", label: "Translate" },
            ]}
            value={kind}
            onChange={setKind}
          />
          {kind === "reflect" ? (
            <>
              <Segmented<Mirror>
                label="Mirror line"
                options={[
                  { value: "x=k", label: "x = k" },
                  { value: "y=k", label: "y = k" },
                  { value: "y=x", label: "y = x" },
                  { value: "y=-x", label: "y = −x" },
                ]}
                value={mirror}
                onChange={setMirror}
              />
              {mirror === "x=k" || mirror === "y=k" ? <Stepper label="k" value={k} min={-6} max={6} onChange={setK} format={n} /> : null}
            </>
          ) : null}
          {kind === "rotate" ? (
            <Segmented<"90" | "270" | "180">
              label="Angle"
              options={[
                { value: "90", label: "90° anticlockwise" },
                { value: "270", label: "90° clockwise" },
                { value: "180", label: "180°" },
              ]}
              value={turn}
              onChange={setTurn}
            />
          ) : null}
          {kind === "enlarge" ? <Slider label="Scale factor" value={kIdx} min={0} max={KS.length - 1} onChange={setKIdx} format={(i) => <M>{q(KS[i])}</M>} /> : null}
          {kind === "rotate" || kind === "enlarge" ? (
            <>
              <Stepper label="Centre x" value={cx} min={-6} max={6} onChange={setCx} format={n} />
              <Stepper label="Centre y" value={cy} min={-6} max={6} onChange={setCy} format={n} />
            </>
          ) : null}
          {kind === "translate" ? (
            <>
              <Stepper label="Move right (top)" value={tx} min={-8} max={8} onChange={setTx} format={n} />
              <Stepper label="Move up (bottom)" value={ty} min={-8} max={8} onChange={setTy} format={n} />
              <div className="text-sm text-ink-2">
                Column vector: <M>{col([tx, ty])}</M>
              </div>
            </>
          ) : null}
          <label className="block space-y-1 text-sm">
            <span className="font-semibold text-ink-2">Then apply</span>
            <select className="w-full min-h-10 rounded-lg border border-line bg-surface px-2 py-2 text-ink" value={second} onChange={(e) => setSecond(e.target.value as Second)}>
              {(Object.keys(SECONDS) as Second[]).map((s) => (
                <option key={s} value={s}>{SECONDS[s].label}</option>
              ))}
            </select>
          </label>
          <div className="grid grid-cols-1 gap-2">
            <Readout label={img2 ? "Vertex (1, 1) ends at" : "Vertex (1, 1) maps to"} value={pt(final[0])} tone="ink" />
            <Readout label="Single equivalent" value={<span className="text-base">{renderInline(desc.text.replace(/\*\*/g, "").split(". ")[0])}</span>} tone={desc.kind === "other" || desc.kind === "glide" ? "bad" : "good"} />
          </div>
        </div>
      </div>
    </WidgetFrame>
  );
}

// ===========================================================================
// 2. Vector lab
// ===========================================================================

type VMode = "combine" | "ratio";

/** Exact magnitude of (x, y) where x, y are multiples of 1/2: √N or k√m, possibly over 2. */
function magnitude(v: P2): string {
  const N4 = Math.round(4 * (v[0] * v[0] + v[1] * v[1])); // (2x)² + (2y)², an integer
  if (N4 === 0) return "0";
  let k = 1, m = N4;
  for (let f = 2; f * f <= m; f++) while (m % (f * f) === 0) { m /= f * f; k *= f; }
  // |v| = k√m / 2
  const g = gcd(k, 2);
  const kk = k / g, dd = 2 / g;
  const root = m === 1 ? String(kk) : kk === 1 ? `sqrt(${m})` : `${kk}sqrt(${m})`;
  return dd === 1 ? root : `${root}/2`.replace(/^(\d+)\/2$/, (_, a) => `${a}/2`);
}

/** c₁a + c₂b in maths markup with exact coefficients. */
function abExpr(c1: number, c2: number): string {
  const term = (c: number, s: string) => (near(c, 1) ? s : near(c, -1) ? `-${s}` : `${q(c)} ${s}`);
  if (near(c1, 0) && near(c2, 0)) return "0";
  if (near(c1, 0)) return term(c2, "b");
  if (near(c2, 0)) return term(c1, "a");
  const t2 = term(Math.abs(c2), "b");
  return `${term(c1, "a")} ${c2 < 0 ? "-" : "+"} ${t2}`;
}

function VectorLab() {
  const [mode, setMode] = useState<VMode>("combine");
  const [ax, setAx] = useState(3);
  const [ay, setAy] = useState(1);
  const [bx, setBx] = useState(1);
  const [by, setBy] = useState(3);
  const [lam, setLam] = useState(2);
  const [mu, setMu] = useState(-1);
  const [m, setM] = useState(1);
  const [nn, setNn] = useState(2);

  const a: P2 = [ax, ay], b: P2 = [bx, by];
  const la: P2 = [lam * ax, lam * ay];
  const R: P2 = [tidy(la[0] + mu * bx), tidy(la[1] + mu * by)];
  const t = m / (m + nn);
  const P: P2 = [tidy(ax + t * (bx - ax)), tidy(ay + t * (by - ay))];
  const AB: P2 = [bx - ax, by - ay];
  const parallel = ax * by - ay * bx === 0;

  const pts: P2[] = mode === "combine" ? [[0, 0], a, b, la, R] : [[0, 0], a, b];
  const ext = Math.max(5, ...pts.map((p) => Math.max(Math.abs(p[0]), Math.abs(p[1])))) + 1;
  const W = 340, H = 340;
  const plane = makePlane({ width: W, height: H, xMin: -ext, xMax: ext, yMin: -ext, yMax: ext, pad: 14 });
  const { px, py } = plane;
  const step = ext > 10 ? 2 : 1;

  const arrow = (from: P2, to: P2, cls: string, key: string, width = 3, dash?: string) =>
    near(from[0], to[0]) && near(from[1], to[1]) ? null : (
      <line key={key} x1={px(from[0])} y1={py(from[1])} x2={px(to[0])} y2={py(to[1])} className={cls} strokeWidth={width} strokeDasharray={dash} markerEnd={`url(#vl-${cls.includes("brand") ? "b" : cls.includes("accent") ? "a" : cls.includes("good") ? "g" : "k"})`} />
    );
  const label = (p: P2, text: string, cls = "fill-ink", dx = 8, dy = -8) => (
    <text x={px(p[0]) + dx} y={py(p[1]) + dy} fontSize={13} fontWeight={800} className={`${cls} stroke-surface`} strokeWidth={3} style={HALO}>{text}</text>
  );
  const mid = (p: P2, r: P2): P2 => [(p[0] + r[0]) / 2, (p[1] + r[1]) / 2];

  let caption: string;
  let aria: string;
  if (mode === "combine") {
    caption = `{{${q(lam)} a ${mu < 0 ? "-" : "+"} ${q(Math.abs(mu))} b}} = {{${q(lam)} ${col(a)} ${mu < 0 ? "-" : "+"} ${q(Math.abs(mu))} ${col(b)} = ${col(R)}}}. Tip-to-tail: walk along {{${q(lam)} a}} (blue), then {{${q(mu)} b}} (orange); the dashed green arrow goes straight there. Its length is {{sqrt(${q(R[0])}^2 + ${q(R[1])}^2) = ${magnitude(R)}}}${Number.isInteger(R[0] * R[0] + R[1] * R[1]) && !Number.isInteger(Math.sqrt(R[0] * R[0] + R[1] * R[1])) ? ` ≈ ${n(parseFloat(Math.hypot(R[0], R[1]).toPrecision(3)))}` : ""} by Pythagoras.${parallel ? " Careful: a and b are parallel here, so every combination lies on one line." : ""}`;
    aria = `Vectors a = (${ax}, ${ay}) and b = (${bx}, ${by}). ${lam} a plus ${mu} b drawn tip to tail, resultant (${R[0]}, ${R[1]}).`;
  } else {
    caption = `→AB = **b** − **a** = {{${col(AB)}}}. P splits AB in the ratio ${m} : ${nn}, so →AP = {{${q(t)}}}→AB. Then →OP = **a** + {{${q(t)}}}(**b** − **a**) = {{${abExpr(1 - t, t)}}} = {{${col(P)}}}.${m === nn ? " With 1 : 1, P is the midpoint and →OP = {{1/2}}(**a** + **b**)." : ""} Notice the coefficients of a and b always add up to 1 — that's the sign that P lies on the line AB.`;
    aria = `Triangle OAB with A at (${ax}, ${ay}) and B at (${bx}, ${by}). P divides AB in the ratio ${m} to ${nn} and is at (${q(P[0])}, ${q(P[1])}).`;
  }

  return (
    <WidgetFrame
      title="Vector lab"
      tryThis={
        mode === "combine"
          ? [
              "With **a** = {{col(3, 1)}} and **b** = {{col(1, 3)}}, find λ and μ so that λ**a** + μ**b** = {{col(4, 4)}}. Then try {{col(2, -2)}}.",
              "Make the resultant exactly 5 units long.",
              "Does 2**a** + 3**b** end in the same place as 3**b** + 2**a**? Why?",
            ]
          : [
              "Set the ratio so that →OP = {{1/3}}(2**a** + **b**).",
              "Change a and b but keep the ratio. Do the coefficients of a and b in →OP change?",
              "Make →OP parallel to **a** + **b**. Which ratio works, whatever a and b are?",
            ]
      }
      caption={<span>{renderInline(caption)}</span>}
    >
      <div className="grid gap-4 md:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
        <svg viewBox={`0 0 ${W} ${H}`} className="h-auto w-full rounded-xl border border-line bg-surface" role="img" aria-label={aria}>
          <defs>
            {[["b", "fill-brand"], ["a", "fill-accent"], ["g", "fill-good"], ["k", "fill-ink"]].map(([id, cls]) => (
              <marker key={id} id={`vl-${id}`} viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M0,0 L10,5 L0,10 z" className={cls} />
              </marker>
            ))}
          </defs>
          <PlaneGrid plane={plane} step={step} labels={false} />
          {mode === "combine" ? (
            <>
              {arrow([0, 0], a, "stroke-ink", "a", 1.5)}
              {arrow([0, 0], b, "stroke-ink", "b", 1.5)}
              {label(a, "a", "fill-ink-2")}
              {label(b, "b", "fill-ink-2")}
              {arrow([0, 0], la, "stroke-brand", "la")}
              {arrow(la, R, "stroke-accent", "mb")}
              {arrow([0, 0], R, "stroke-good", "r", 3, "6 4")}
              {label(mid([0, 0], la), `${q(lam)}a`, "fill-brand")}
              {label(mid(la, R), `${q(mu)}b`, "fill-accent")}
            </>
          ) : (
            <>
              <line x1={px(ax)} y1={py(ay)} x2={px(bx)} y2={py(by)} className="stroke-ink" strokeWidth={2} />
              {arrow([0, 0], a, "stroke-brand", "a")}
              {arrow([0, 0], b, "stroke-accent", "b")}
              {arrow([0, 0], P, "stroke-good", "p", 3, "6 4")}
              <circle cx={px(P[0])} cy={py(P[1])} r={5} className="fill-good stroke-surface" strokeWidth={2} />
              {label(a, "A")}
              {label(b, "B")}
              {label(P, "P", "fill-good")}
              {label(mid([0, 0], a), "a", "fill-brand", 6, 14)}
              {label(mid([0, 0], b), "b", "fill-accent", -16, -6)}
            </>
          )}
          {label([0, 0], "O", "fill-ink", -16, 16)}
        </svg>
        <div className="space-y-3">
          <Segmented<VMode>
            label="Mode"
            options={[
              { value: "combine", label: "Combine λa + μb" },
              { value: "ratio", label: "Point on AB" },
            ]}
            value={mode}
            onChange={setMode}
          />
          <div className="grid grid-cols-2 gap-x-4 gap-y-2">
            <Stepper label="a top" value={ax} min={-5} max={5} onChange={setAx} format={n} />
            <Stepper label="b top" value={bx} min={-5} max={5} onChange={setBx} format={n} />
            <Stepper label="a bottom" value={ay} min={-5} max={5} onChange={setAy} format={n} />
            <Stepper label="b bottom" value={by} min={-5} max={5} onChange={setBy} format={n} />
          </div>
          <div className="text-sm text-ink-2">
            <strong>a</strong> = <M>{col(a)}</M>, <strong>b</strong> = <M>{col(b)}</M>
          </div>
          {mode === "combine" ? (
            <>
              <Slider label="λ (multiplier of a)" value={lam} min={-3} max={3} step={0.5} onChange={setLam} format={(v) => <M>{q(v)}</M>} />
              <Slider label="μ (multiplier of b)" value={mu} min={-3} max={3} step={0.5} onChange={setMu} format={(v) => <M>{q(v)}</M>} />
              <div className="grid grid-cols-2 gap-2">
                <Readout label="Result" value={<M>{col(R)}</M>} />
                <Readout label="Magnitude" value={<M>{magnitude(R)}</M>} tone="good" />
              </div>
            </>
          ) : (
            <>
              <Stepper label="AP part (m)" value={m} min={1} max={6} onChange={setM} />
              <Stepper label="PB part (n)" value={nn} min={1} max={6} onChange={setNn} />
              <div className="grid grid-cols-2 gap-2">
                <Readout label="→OP in a, b" value={<M>{abExpr(1 - t, t)}</M>} />
                <Readout label="→OP column" value={<M>{col(P)}</M>} tone="good" />
              </div>
            </>
          )}
        </div>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "transformation-machine", title: "Transformation machine", blurb: "Reflect, rotate, enlarge or translate a shape — then combine two and find the single equivalent transformation.", Component: TransformationMachine },
  { id: "vector-lab", title: "Vector lab", blurb: "Build λa + μb tip-to-tail, and split a line in a ratio to see →OP in terms of a and b.", Component: VectorLab },
];
