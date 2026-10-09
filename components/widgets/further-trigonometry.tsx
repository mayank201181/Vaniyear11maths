"use client";
// Interactive explorables for "further-trigonometry".
//  1. Triangle lab — build a triangle from SAS, SSS, ASA or SSA and watch the
//     sine rule, cosine rule and ½ab sin C solve it live, drawn to scale. In SSA
//     mode the side a swings round C, so you can see the ambiguous case (0, 1 or
//     2 triangles) happen.
//  2. Trig graph explorer — y = a·f(b(x + p)) + d for f = sin, cos, tan, with the
//     basic graph as a ghost, plus a horizontal line y = k whose intersections
//     are the solutions of the equation in 0° ≤ x ≤ 360°.
import { useId, useState, type ReactNode } from "react";
import {
  WidgetFrame,
  Slider,
  Segmented,
  Readout,
  M,
  type WidgetDef,
} from "./kit";

/* ------------------------------------------------------------------------ */
/* Helpers                                                                    */
/* ------------------------------------------------------------------------ */

const RAD = Math.PI / 180;
const sinD = (d: number): number => Math.sin(d * RAD);
const cosD = (d: number): number => Math.cos(d * RAD);
const tanD = (d: number): number => Math.tan(d * RAD);

/** Decimal for display with a real minus sign, trailing zeros stripped. */
function fmt(v: number, dp = 1): string {
  const r = Number(v.toFixed(dp));
  const s = String(Object.is(r, -0) ? 0 : r);
  return s.startsWith("-") ? "−" + s.slice(1) : s;
}
/** Number for maths markup (ASCII minus). */
const mk = (v: number, dp = 2): string => String(Number(v.toFixed(dp)));

/* ------------------------------------------------------------------------ */
/* 1. Triangle lab                                                            */
/* ------------------------------------------------------------------------ */

type Mode = "SAS" | "SSS" | "ASA" | "SSA";
interface Tri {
  a: number;
  b: number;
  c: number;
  A: number;
  B: number;
  C: number;
}

function solveTriangle(
  mode: Mode,
  s: { a: number; b: number; c: number; A: number; B: number },
): { tris: Tri[]; problem?: string } {
  const { a, b, c, A, B } = s;
  if (mode === "SAS") {
    const a2 = b * b + c * c - 2 * b * c * cosD(A);
    const aa = Math.sqrt(a2);
    const BB =
      Math.acos(
        Math.max(-1, Math.min(1, (aa * aa + c * c - b * b) / (2 * aa * c))),
      ) / RAD;
    return { tris: [{ a: aa, b, c, A, B: BB, C: 180 - A - BB }] };
  }
  if (mode === "SSS") {
    const sides = [a, b, c].sort((x, y) => x - y);
    if (sides[0] + sides[1] <= sides[2] + 1e-9) {
      return {
        tris: [],
        problem: `${fmt(sides[0])} + ${fmt(sides[1])} = ${fmt(sides[0] + sides[1])} is not more than ${fmt(sides[2])}, so these sides can't close up into a triangle (the triangle inequality fails).`,
      };
    }
    const AA = Math.acos((b * b + c * c - a * a) / (2 * b * c)) / RAD;
    const BB = Math.acos((a * a + c * c - b * b) / (2 * a * c)) / RAD;
    return { tris: [{ a, b, c, A: AA, B: BB, C: 180 - AA - BB }] };
  }
  if (mode === "ASA") {
    const C = 180 - A - B;
    if (C <= 0.0001)
      return {
        tris: [],
        problem: `A + B = ${A + B}°, which leaves nothing for C — the angles of a triangle add up to exactly 180°.`,
      };
    return {
      tris: [
        { a: (c * sinD(A)) / sinD(C), b: (c * sinD(B)) / sinD(C), c, A, B, C },
      ],
    };
  }
  // SSA: angle A, adjacent side b, opposite side a.
  const sB = (b * sinD(A)) / a;
  if (sB > 1 + 1e-9) {
    return {
      tris: [],
      problem: `sin B = ${mk(sB, 3)} > 1 — impossible. Side a = ${fmt(a)} is too short to reach the base line (it needs at least b sin A = ${fmt(b * sinD(A), 2)}).`,
    };
  }
  const B1 = Math.asin(Math.min(1, sB)) / RAD;
  const cands = sB > 1 - 1e-9 ? [90] : [B1, 180 - B1];
  const tris: Tri[] = [];
  for (const BB of cands) {
    const C = 180 - A - BB;
    if (C <= 1e-6) continue;
    tris.push({ a, b, c: (a * sinD(C)) / sinD(A), A, B: BB, C });
  }
  if (!tris.length)
    return {
      tris,
      problem:
        "Both possible angles for B are too big to fit with A in one triangle.",
    };
  return { tris };
}

function TriangleLab() {
  const [mode, setMode] = useState<Mode>("SAS");
  const [a, setA] = useState(7);
  const [b, setB] = useState(8);
  const [c, setC] = useState(10);
  const [angA, setAngA] = useState(50);
  const [angB, setAngB] = useState(60);
  const clip = useId().replace(/:/g, "");

  // SSA defaults that show the ambiguous case nicely.
  const pick = (m: Mode) => {
    setMode(m);
    if (m === "SSA") {
      setAngA(35);
      setB(10);
      setA(7);
    }
  };

  const { tris, problem } = solveTriangle(mode, { a, b, c, A: angA, B: angB });
  const T = tris[0];

  // Drawing: A at the origin, AB along the base, C above. Fixed scale unless it would overflow.
  const W = 380;
  const H = 230;
  const pad = 30;
  // Use the solved values (in SSS the angle A, and in ASA the side b, are computed, not set).
  const drawA = T ? T.A : angA;
  const drawB = T ? T.b : b;
  const Cpt: [number, number] = [drawB * cosD(drawA), drawB * sinD(drawA)];
  const showFigure = Boolean(T) || mode === "SSA";
  const Bpts = tris.map((t) => t.c);
  const xs = [
    0,
    Cpt[0],
    ...Bpts,
    mode === "SSA" && !tris.length ? Math.max(b, a) : 0,
  ];
  const minX = Math.min(...xs);
  const maxX = Math.max(...xs, 1);
  const maxY = Math.max(Cpt[1], 1);
  const sc = Math.min(24, (W - 2 * pad) / (maxX - minX), (H - 2 * pad) / maxY);
  const ox = (W - sc * (maxX - minX)) / 2 - minX * sc;
  const oy = H - (H - sc * maxY) / 2;
  const X = (x: number) => ox + x * sc;
  const Y = (y: number) => oy - y * sc;
  const pA: [number, number] = [X(0), Y(0)];
  const pC: [number, number] = [X(Cpt[0]), Y(Cpt[1])];

  // Rule box
  let rule: ReactNode = null;
  if (T && mode === "SAS") {
    rule = (
      <>
        <p>
          Two sides and the angle <em>between</em> them →{" "}
          <strong>cosine rule</strong> for the third side:
        </p>
        <p className="mt-1">
          <M>{`a^2 = ${mk(b)}^2 + ${mk(c)}^2 - 2 * ${mk(b)} * ${mk(c)} * cos ${angA}° = ${mk(T.a * T.a)}`}</M>
          , so a = {fmt(T.a, 2)}.
        </p>
        <p className="mt-1">
          Then the cosine rule again (rearranged) gives B = {fmt(T.B)}°, and C =
          180° − A − B = {fmt(T.C)}°.
        </p>
      </>
    );
  } else if (T && mode === "SSS") {
    rule = (
      <>
        <p>
          Three sides → <strong>cosine rule</strong>, rearranged for an angle:
        </p>
        <p className="mt-1">
          <M>{`cos A = (${mk(b)}^2 + ${mk(c)}^2 - ${mk(a)}^2)/(2 * ${mk(b)} * ${mk(c)}) = ${mk((b * b + c * c - a * a) / (2 * b * c), 4)}`}</M>
          , so A = {fmt(T.A)}°.
        </p>
        <p className="mt-1">
          {b * b + c * c - a * a < 0
            ? "The top is negative, so cos A < 0 and A is obtuse."
            : b * b + c * c - a * a === 0
              ? "The top is zero: cos A = 0, so A = 90° — this is Pythagoras."
              : "The top is positive, so A is acute."}
        </p>
      </>
    );
  } else if (T && mode === "ASA") {
    rule = (
      <>
        <p>
          Two angles → the third is C = 180° − {angA}° − {angB}° = {fmt(T.C)}°.
          Then the <strong>sine rule</strong> pairs c with C:
        </p>
        <p className="mt-1">
          <M>{`a = (${mk(c)} sin ${angA}°)/(sin ${mk(T.C, 1)}°) = ${mk(T.a)}`}</M>{" "}
          and{" "}
          <M>{`b = (${mk(c)} sin ${angB}°)/(sin ${mk(T.C, 1)}°) = ${mk(T.b)}`}</M>
        </p>
      </>
    );
  } else if (mode === "SSA" && tris.length) {
    const sB = (b * sinD(angA)) / a;
    rule = (
      <>
        <p>
          Two sides and an angle <em>not</em> between them →{" "}
          <strong>sine rule</strong> for B:
        </p>
        <p className="mt-1">
          <M>{`sin B = (${mk(b)} sin ${angA}°)/${mk(a)} = ${mk(sB, 4)}`}</M>, so
          B = {fmt(tris[0].B)}°
          {tris.length === 2 ? (
            <>
              {" "}
              or B = 180° − {fmt(tris[0].B)}° = {fmt(tris[1].B)}°
            </>
          ) : null}
          .
        </p>
      </>
    );
  }

  const area = T ? 0.5 * T.b * T.c * sinD(T.A) : 0;

  let caption: ReactNode;
  if (problem) caption = <>No triangle: {problem}</>;
  else if (mode === "SSA")
    caption =
      tris.length === 2 ? (
        <>
          <strong>Two triangles!</strong> Side a ({fmt(a)}) is longer than the
          height b sin A = {fmt(b * sinD(angA), 2)} but shorter than b ={" "}
          {fmt(b)}, so it can swing to meet the base in <strong>two</strong>{" "}
          places (the dashed circle shows every place it can reach). Both angles
          have the same sine because <M>{"sin B = sin(180° - B)"}</M>.
          That&apos;s the ambiguous case — an exam will tell you whether B is
          acute or obtuse.
        </>
      ) : (
        <>
          <strong>One triangle.</strong>{" "}
          {Math.abs(tris[0].B - 90) < 1e-6
            ? "Side a exactly equals the height b sin A, so it just touches the base: B = 90°."
            : `Side a (${fmt(a)}) is at least as long as b (${fmt(b)}), so the second meeting point would be behind A — only the acute B works.`}
        </>
      );
  else if (T)
    caption = (
      <>
        Area{" "}
        <M>{`= 1/2 bc sin A = 1/2 * ${mk(T.b)} * ${mk(T.c)} * sin ${mk(T.A, 1)}°`}</M>{" "}
        = {fmt(area, 2)} square units. The largest angle (
        {fmt(Math.max(T.A, T.B, T.C))}°) is always opposite the longest side (
        {fmt(Math.max(T.a, T.b, T.c), 2)}).{" "}
        {T.A > 90
          ? "A is obtuse, so cos A is negative and the cosine rule adds instead of subtracts — side a gets extra long."
          : ""}
      </>
    );

  const aria = problem
    ? `No triangle can be drawn: ${problem}`
    : `Triangle${tris.length === 2 ? "s" : ""} drawn to scale. ` +
      tris
        .map(
          (t) =>
            `Sides a ${fmt(t.a, 2)}, b ${fmt(t.b, 2)}, c ${fmt(t.c, 2)}; angles A ${fmt(t.A)}°, B ${fmt(t.B)}°, C ${fmt(t.C)}°.`,
        )
        .join(" Or: ");

  const lbl = (
    x: number,
    y: number,
    text: string,
    cls = "fill-ink",
    size = 12,
    weight = 600,
  ) => (
    <text
      x={x}
      y={y}
      fontSize={size}
      fontWeight={weight}
      textAnchor="middle"
      className={cls}
    >
      {text}
    </text>
  );

  /** Point inside the angle at P (between rays to Q and R), dist px along the bisector. */
  const inside = (
    P: [number, number],
    Q: [number, number],
    R: [number, number],
    deg: number,
  ): [number, number] => {
    const u = (v: [number, number]): [number, number] => {
      const l = Math.hypot(v[0], v[1]) || 1;
      return [v[0] / l, v[1] / l];
    };
    const q = u([Q[0] - P[0], Q[1] - P[1]]);
    const r = u([R[0] - P[0], R[1] - P[1]]);
    const m = u([q[0] + r[0], q[1] + r[1]]);
    const dist = deg < 30 ? 40 : deg < 60 ? 30 : 22;
    return [P[0] + m[0] * dist, P[1] + m[1] * dist + 4];
  };

  return (
    <WidgetFrame
      title="Triangle lab: sine rule, cosine rule, area"
      tryThis={[
        "In SAS mode set A = 90°. What does {{a^2 = b^2 + c^2 - 2bc cos A}} turn into, and why?",
        "In SSS mode, make angle A obtuse. What sign does {{b^2 + c^2 - a^2}} have?",
        "In SSA mode with A = 30° and b = 10: find a value of a that gives **no** triangle, exactly **one**, and **two**.",
        "Keep b and c fixed in SAS mode. Which angle A makes the area as big as possible?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <Segmented<Mode>
          label="What you know"
          value={mode}
          onChange={pick}
          options={[
            { value: "SAS", label: "SAS" },
            { value: "SSS", label: "SSS" },
            { value: "ASA", label: "ASA" },
            { value: "SSA", label: "SSA (ambiguous)" },
          ]}
        />
        <p className="text-xs text-ink-2">
          {mode === "SAS" &&
            "You know sides b and c and the angle A between them."}
          {mode === "SSS" && "You know all three sides."}
          {mode === "ASA" &&
            "You know angles A and B and the side c between them."}
          {mode === "SSA" &&
            "You know angle A, the side b next to it, and the side a opposite it."}
        </p>
        <div className="grid gap-3 sm:grid-cols-3">
          {mode === "SSS" || mode === "SSA" ? (
            <Slider
              label="side a"
              value={a}
              min={2}
              max={14}
              step={0.5}
              onChange={setA}
            />
          ) : null}
          {mode !== "ASA" ? (
            <Slider
              label="side b"
              value={b}
              min={2}
              max={14}
              step={0.5}
              onChange={setB}
            />
          ) : null}
          {mode !== "SSA" ? (
            <Slider
              label="side c"
              value={c}
              min={2}
              max={14}
              step={0.5}
              onChange={setC}
            />
          ) : null}
          {mode !== "SSS" ? (
            <Slider
              label="angle A"
              value={angA}
              min={10}
              max={mode === "SSA" ? 150 : 170}
              step={1}
              onChange={setAngA}
              format={(v) => `${v}°`}
            />
          ) : null}
          {mode === "ASA" ? (
            <Slider
              label="angle B"
              value={angB}
              min={10}
              max={160}
              step={1}
              onChange={setAngB}
              format={(v) => `${v}°`}
            />
          ) : null}
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label={aria}
        >
          <defs>
            <clipPath id={clip}>
              <rect x={0} y={0} width={W} height={H} />
            </clipPath>
          </defs>
          {mode === "SSA" ? (
            <g clipPath={`url(#${clip})`}>
              <line
                x1={0}
                x2={W}
                y1={pA[1]}
                y2={pA[1]}
                className="stroke-line"
                strokeWidth={1.5}
              />
              <circle
                cx={pC[0]}
                cy={pC[1]}
                r={a * sc}
                fill="none"
                className="stroke-accent"
                strokeWidth={1.5}
                strokeDasharray="5 4"
              />
            </g>
          ) : null}
          {tris.map((t, i) => {
            const pB: [number, number] = [X(t.c), Y(0)];
            const pts = `${pA[0]},${pA[1]} ${pB[0]},${pB[1]} ${pC[0]},${pC[1]}`;
            return (
              <g key={i}>
                <polygon
                  points={pts}
                  className={
                    i === 0 ? "fill-brand-soft stroke-brand" : "stroke-accent"
                  }
                  fill={i === 0 ? undefined : "none"}
                  strokeWidth={2}
                  strokeDasharray={i === 0 ? undefined : "6 4"}
                />
                {lbl(
                  pB[0] + (i === 0 ? 8 : -8),
                  pB[1] + 16,
                  i === 0 ? "B" : "B₂",
                  "fill-ink",
                  13,
                  800,
                )}
                {lbl(
                  (pB[0] + pC[0]) / 2 + (i === 0 ? 18 : -18),
                  (pB[1] + pC[1]) / 2,
                  `a=${fmt(t.a)}`,
                  i === 0 ? "fill-brand" : "fill-accent",
                  11,
                )}
                {(() => {
                  const q = inside(pB, pA, pC, t.B);
                  return lbl(
                    q[0],
                    q[1],
                    `${fmt(t.B)}°`,
                    i === 0 ? "fill-ink-2" : "fill-accent",
                    11,
                  );
                })()}
                {i === 0 && mode !== "SSA"
                  ? (() => {
                      const q = inside(pC, pA, pB, t.C);
                      return lbl(q[0], q[1], `${fmt(t.C)}°`, "fill-ink-2", 11);
                    })()
                  : null}
              </g>
            );
          })}
          {showFigure ? (
            <g>
              {lbl(pA[0] - 8, pA[1] + 16, "A", "fill-ink", 13, 800)}
              {lbl(pC[0], pC[1] - 10, "C", "fill-ink", 13, 800)}
              {(() => {
                const q = inside(pA, [X(1), Y(0)], pC, drawA);
                return lbl(q[0], q[1], `${fmt(drawA)}°`, "fill-ink-2", 11);
              })()}
              {lbl(
                (pA[0] + pC[0]) / 2 - 22,
                (pA[1] + pC[1]) / 2,
                `b=${fmt(drawB)}`,
                "fill-brand",
                11,
              )}
              {T
                ? lbl(
                    (pA[0] + X(T.c)) / 2,
                    pA[1] + 16,
                    `c=${fmt(T.c)}`,
                    "fill-brand",
                    11,
                  )
                : null}
            </g>
          ) : (
            lbl(
              W / 2,
              H / 2,
              "No triangle with these measurements",
              "fill-bad",
              13,
              700,
            )
          )}
        </svg>

        {T ? (
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            <Readout
              label="a, b, c"
              value={`${fmt(T.a)}, ${fmt(T.b)}, ${fmt(T.c)}`}
              tone="ink"
            />
            <Readout
              label="A, B, C"
              value={`${fmt(T.A)}°, ${fmt(T.B)}°, ${fmt(T.C)}°`}
              tone="ink"
            />
            <Readout label="Area" value={fmt(area, 2)} />
            <Readout
              label="Triangles"
              value={tris.length}
              tone={tris.length === 2 ? "bad" : "good"}
            />
          </div>
        ) : (
          <Readout label="Triangles" value={0} tone="bad" />
        )}
        {rule ? (
          <div className="rounded-xl bg-surface-2 p-3 text-sm leading-relaxed text-ink">
            {rule}
          </div>
        ) : null}
      </div>
    </WidgetFrame>
  );
}

/* ------------------------------------------------------------------------ */
/* 2. Trig graph explorer                                                     */
/* ------------------------------------------------------------------------ */

type Fn = "sin" | "cos" | "tan";
type BVal = "0.5" | "1" | "2" | "3";

const F: Record<Fn, (d: number) => number> = {
  sin: sinD,
  cos: cosD,
  tan: tanD,
};

/** All x in [0, 360] with a·f(b(x + p)) + d = k, rounded to 1 d.p. */
function solutions(
  fn: Fn,
  a: number,
  b: number,
  p: number,
  d: number,
  k: number,
): number[] {
  const v = (k - d) / a;
  let base: number[];
  if (fn === "tan") {
    const g = Math.atan(v) / RAD;
    base = [g, g + 180];
  } else {
    if (Math.abs(v) > 1 + 1e-12) return [];
    const w = Math.max(-1, Math.min(1, v));
    base =
      fn === "sin"
        ? [Math.asin(w) / RAD, 180 - Math.asin(w) / RAD]
        : [Math.acos(w) / RAD, 360 - Math.acos(w) / RAD];
  }
  const out = new Map<string, number>();
  for (const u0 of base) {
    for (let n = -6; n <= 8; n++) {
      const x = (u0 + 360 * n) / b - p;
      if (x < -1e-7 || x > 360 + 1e-7) continue;
      const r = Number((Math.abs(x) < 1e-9 ? 0 : x).toFixed(1));
      out.set(r.toFixed(1), r);
    }
  }
  return [...out.values()].sort((s, t) => s - t);
}

function TrigGraphExplorer() {
  const [fn, setFn] = useState<Fn>("sin");
  const [a, setAmp] = useState(1);
  const [bs, setBs] = useState<BVal>("1");
  const [p, setP] = useState(0);
  const [d, setD] = useState(0);
  const [k, setK] = useState(0.5);
  const [ghost, setGhost] = useState(true);
  const clip = useId().replace(/:/g, "");
  const b = Number(bs);

  const W = 380;
  const H = 280;
  const L = 34;
  const R = 12;
  const TP = 12;
  const BT = 26;
  const yMax = 6.5;
  const px = (x: number) => L + (x / 360) * (W - L - R);
  const py = (y: number) => TP + ((yMax - y) / (2 * yMax)) * (H - TP - BT);

  const g = (x: number) => a * F[fn](b * (x + p)) + d;

  // Path, broken at tan asymptotes.
  const path = (
    h: (x: number) => number,
    isTan: boolean,
    inner: (x: number) => number,
  ): string => {
    let s = "";
    let pen = false;
    let prevCos = 0;
    for (let i = 0; i <= 1440; i++) {
      const x = i / 4;
      const cu = cosD(inner(x));
      if (
        isTan &&
        (Math.abs(cu) < 0.004 ||
          (i > 0 && Math.sign(cu) !== Math.sign(prevCos)))
      ) {
        pen = false;
        prevCos = cu;
        continue;
      }
      prevCos = cu;
      const y = Math.max(-40, Math.min(40, h(x)));
      s += `${pen ? "L" : "M"}${px(x).toFixed(1)},${py(y).toFixed(1)}`;
      pen = true;
    }
    return s;
  };
  const curve = path(g, fn === "tan", (x) => b * (x + p));
  const base = path(
    (x) => F[fn](x),
    fn === "tan",
    (x) => x,
  );
  const xs = solutions(fn, a, b, p, d, k);

  const period = fn === "tan" ? 180 / b : 360 / b;
  const asymptotes: number[] = [];
  if (fn === "tan") {
    for (let n = -10; n <= 10; n++) {
      const x = (90 + 180 * n) / b - p;
      if (x >= 0 && x <= 360) asymptotes.push(x);
    }
  }

  // Equation text for maths markup.
  const aTxt = a === 1 ? "" : a === -1 ? "-" : mk(a);
  const pTxt = p === 0 ? "x" : `x ${p > 0 ? "+" : "-"} ${Math.abs(p)}`;
  const inner =
    b === 1
      ? pTxt
      : b === 0.5
        ? p === 0
          ? "x/2"
          : `(${pTxt})/2`
        : p === 0
          ? `${b}x`
          : `${b}(${pTxt})`;
  const eq = `y = ${aTxt}${fn}(${inner})${d === 0 ? "" : d > 0 ? ` + ${mk(d)}` : ` - ${mk(-d)}`}`;

  const steps: string[] = [];
  if (b !== 1)
    steps.push(
      `a horizontal stretch, scale factor ${b === 0.5 ? "2" : `1/${b}`} (period ${fmt(period)}°)`,
    );
  if (p !== 0)
    steps.push(
      `a translation ${Math.abs(p)}° to the ${p > 0 ? "left" : "right"}`,
    );
  if (Math.abs(a) !== 1)
    steps.push(`a vertical stretch, scale factor ${fmt(Math.abs(a))}`);
  if (a < 0) steps.push("a reflection in the x-axis");
  if (d !== 0)
    steps.push(`a translation ${fmt(Math.abs(d))} ${d > 0 ? "up" : "down"}`);

  const maxV = Math.abs(a) + d;
  const minV = d - Math.abs(a);
  const caption = (
    <>
      Starting from <M>{`y = ${fn} x`}</M>, this graph is{" "}
      {steps.length ? steps.join(", then ") : "the basic graph itself"}.{" "}
      {fn === "tan" ? (
        <>
          tan has no maximum or minimum — it shoots off to ±∞ at its asymptotes,
          which are {fmt(period)}° apart.
        </>
      ) : (
        <>
          Its values run from {fmt(minV)} to {fmt(maxV)}.
        </>
      )}{" "}
      The line y = {fmt(k)} meets it <strong>{xs.length}</strong> time
      {xs.length === 1 ? "" : "s"} in 0°–360°
      {xs.length ? (
        <>
          , so <M>{`${eq.slice(4)} = ${mk(k)}`}</M> has {xs.length} solution
          {xs.length === 1 ? "" : "s"} there
        </>
      ) : (
        <> — the equation has no solutions in this interval</>
      )}
      .
      {b > 1
        ? ` Squashing by ${b} fits ${b} full cycles into 360°, which is why multiple-angle equations like sin ${b}x = k have more solutions.`
        : ""}
    </>
  );

  const aria = `Graph of ${eq} for x from 0 to 360 degrees${ghost ? `, with y = ${fn} x shown dashed` : ""}. The line y = ${fmt(k)} crosses it at ${xs.length ? xs.map((x) => `${fmt(x)} degrees`).join(", ") : "no points"}.`;

  return (
    <WidgetFrame
      title="Trig graph explorer"
      tryThis={[
        "Set {{y = sin x}} and the line y = 0.5. Read off both solutions. Why is the second one 180° minus the first?",
        "Now change b to 2. How many solutions does {{sin 2x = 0.5}} have, and why?",
        "Find a value of p that makes the sin graph sit exactly on top of the cos graph.",
        "Make the maximum value 4 and the minimum −2. Which a and d do you need?",
      ]}
      caption={caption}
    >
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-2">
          <Segmented<Fn>
            label="Function"
            value={fn}
            onChange={setFn}
            options={[
              { value: "sin", label: "sin" },
              { value: "cos", label: "cos" },
              { value: "tan", label: "tan" },
            ]}
          />
          <button
            type="button"
            className="kbd min-h-[40px] px-3 text-sm"
            aria-pressed={ghost}
            onClick={() => setGhost((v) => !v)}
          >
            {ghost ? "Hide" : "Show"} y = {fn} x
          </button>
        </div>
        <p className="text-center text-lg">
          <M>{eq}</M>
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          <Slider
            label="a (vertical stretch)"
            value={a}
            min={-3}
            max={3}
            step={0.5}
            onChange={(v) => setAmp(v === 0 ? (a > 0 ? -0.5 : 0.5) : v)}
            format={(v) => fmt(v)}
          />
          <div className="space-y-1">
            <span className="text-sm font-semibold text-ink-2">
              b (inside multiplier)
            </span>
            <div>
              <Segmented<BVal>
                label="b"
                value={bs}
                onChange={setBs}
                options={[
                  { value: "0.5", label: "½" },
                  { value: "1", label: "1" },
                  { value: "2", label: "2" },
                  { value: "3", label: "3" },
                ]}
              />
            </div>
          </div>
          <Slider
            label="p (inside shift)"
            value={p}
            min={-180}
            max={180}
            step={15}
            onChange={setP}
            format={(v) => `${fmt(v)}°`}
          />
          <Slider
            label="d (vertical shift)"
            value={d}
            min={-3}
            max={3}
            step={0.5}
            onChange={setD}
            format={(v) => fmt(v)}
          />
          <Slider
            label="line y = k"
            value={k}
            min={-6}
            max={6}
            step={0.1}
            onChange={(v) => setK(Number(v.toFixed(1)))}
            format={(v) => fmt(v)}
          />
        </div>

        <svg
          viewBox={`0 0 ${W} ${H}`}
          className="h-auto w-full rounded-xl border border-line bg-surface"
          role="img"
          aria-label={aria}
        >
          <defs>
            <clipPath id={clip}>
              <rect
                x={px(0)}
                y={py(yMax)}
                width={px(360) - px(0)}
                height={py(-yMax) - py(yMax)}
              />
            </clipPath>
          </defs>
          {[30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330, 360].map(
            (x) => (
              <line
                key={`gx${x}`}
                x1={px(x)}
                x2={px(x)}
                y1={py(yMax)}
                y2={py(-yMax)}
                className="stroke-line"
                strokeWidth={x % 90 === 0 ? 1.2 : 0.6}
              />
            ),
          )}
          {[-6, -5, -4, -3, -2, -1, 1, 2, 3, 4, 5, 6].map((y) => (
            <line
              key={`gy${y}`}
              x1={px(0)}
              x2={px(360)}
              y1={py(y)}
              y2={py(y)}
              className="stroke-line"
              strokeWidth={0.6}
            />
          ))}
          <line
            x1={px(0)}
            x2={px(360)}
            y1={py(0)}
            y2={py(0)}
            className="stroke-ink-2"
            strokeWidth={1.5}
          />
          <line
            x1={px(0)}
            x2={px(0)}
            y1={py(yMax)}
            y2={py(-yMax)}
            className="stroke-ink-2"
            strokeWidth={1.5}
          />
          {[90, 180, 270, 360].map((x) => (
            <text
              key={`lx${x}`}
              x={px(x)}
              y={H - 8}
              fontSize={10}
              textAnchor="middle"
              className="fill-ink-2"
            >
              {x}°
            </text>
          ))}
          {[-6, -4, -2, 2, 4, 6].map((y) => (
            <text
              key={`ly${y}`}
              x={L - 6}
              y={py(y) + 3}
              fontSize={10}
              textAnchor="end"
              className="fill-ink-2"
            >
              {fmt(y)}
            </text>
          ))}
          <g clipPath={`url(#${clip})`}>
            {asymptotes.map((x) => (
              <line
                key={`as${x}`}
                x1={px(x)}
                x2={px(x)}
                y1={py(yMax)}
                y2={py(-yMax)}
                className="stroke-bad"
                strokeWidth={1}
                strokeDasharray="4 4"
              />
            ))}
            {ghost ? (
              <path
                d={base}
                fill="none"
                className="stroke-ink-2"
                strokeWidth={1.5}
                strokeDasharray="5 4"
              />
            ) : null}
            <path
              d={curve}
              fill="none"
              className="stroke-brand"
              strokeWidth={2.5}
            />
            <line
              x1={px(0)}
              x2={px(360)}
              y1={py(k)}
              y2={py(k)}
              className="stroke-accent"
              strokeWidth={1.8}
            />
            {xs.map((x, i) => (
              <g key={`s${x}`}>
                <line
                  x1={px(x)}
                  x2={px(x)}
                  y1={py(k)}
                  y2={py(0)}
                  className="stroke-accent"
                  strokeWidth={1}
                  strokeDasharray="2 3"
                />
                <circle
                  cx={px(x)}
                  cy={py(k)}
                  r={4.5}
                  className="fill-accent stroke-ink"
                  strokeWidth={1}
                />
                {xs.length <= 6 ? (
                  <text
                    x={px(x)}
                    y={py(k) + (i % 2 ? 18 : -9)}
                    fontSize={10}
                    fontWeight={700}
                    textAnchor="middle"
                    className="fill-ink"
                  >
                    {fmt(x)}°
                  </text>
                ) : null}
              </g>
            ))}
          </g>
        </svg>

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="Period" value={`${fmt(period)}°`} tone="ink" />
          <Readout
            label={fn === "tan" ? "Amplitude" : "Max / min"}
            value={fn === "tan" ? "none" : `${fmt(maxV)} / ${fmt(minV)}`}
            tone="ink"
          />
          <Readout
            label="Solutions"
            value={xs.length}
            tone={xs.length ? "good" : "bad"}
          />
          <Readout label="Line y = k" value={fmt(k)} tone="brand" />
        </div>
        <p className="text-sm text-ink">
          <strong>Solutions in 0° ≤ x ≤ 360°:</strong>{" "}
          {xs.length ? xs.map((x) => `x = ${fmt(x)}°`).join(", ") : "none"}
          {xs.length ? " (to 1 d.p.)" : ""}
        </p>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  {
    id: "triangle-lab",
    title: "Triangle lab",
    blurb:
      "Build a triangle from SAS, SSS, ASA or SSA and watch the sine and cosine rules solve it — including the ambiguous case.",
    Component: TriangleLab,
  },
  {
    id: "trig-graph-explorer",
    title: "Trig graph explorer",
    blurb:
      "Stretch and shift sin, cos and tan, then slide a line y = k to see every solution in 0°–360°.",
    Component: TrigGraphExplorer,
  },
];
