"use client";
// Interactive explorables for "sets-venn".
//  1. Shade the set — pick a target like A′ ∩ B or (A ∪ B) ∩ C, tap regions of a
//     two- or three-set Venn diagram to shade it, then check. Builds fluency in
//     reading set notation and spots De Morgan-type equivalences.
//  2. Venn probability lab — set the four region counts of a two-set diagram;
//     choose P(A ∩ B), P(A ∪ B), P(A′), P(A | B) or P(B | A) and watch which
//     regions form the numerator and which form the denominator ("given" shrinks
//     the sample space). Also tests whether A and B are independent.
import { useId, useRef, useState, type MouseEvent, type ReactNode } from "react";
import { WidgetFrame, Stepper, Segmented, Readout, M, type WidgetDef } from "./kit";

/* ------------------------------------------------------------------------ */
/* Shared geometry                                                            */
/* ------------------------------------------------------------------------ */

interface Circ {
  cx: number;
  cy: number;
  r: number;
  label: string;
  lx: number;
  ly: number;
}

interface Layout {
  W: number;
  H: number;
  circles: Circ[];
  /** Where to print each region's label/count, keyed by membership bits ("10", "011", …). */
  spots: Record<string, [number, number]>;
}

const L2: Layout = {
  W: 320,
  H: 200,
  circles: [
    { cx: 125, cy: 100, r: 66, label: "A", lx: 66, ly: 40 },
    { cx: 195, cy: 100, r: 66, label: "B", lx: 254, ly: 40 },
  ],
  spots: { "10": [92, 104], "11": [160, 104], "01": [228, 104], "00": [286, 176] },
};

const L3: Layout = {
  W: 340,
  H: 280,
  circles: [
    { cx: 130, cy: 110, r: 70, label: "A", lx: 56, ly: 48 },
    { cx: 210, cy: 110, r: 70, label: "B", lx: 284, ly: 48 },
    { cx: 170, cy: 180, r: 70, label: "C", lx: 244, ly: 262 },
  ],
  spots: {
    "100": [100, 92], "010": [240, 92], "001": [170, 222], "110": [170, 80],
    "101": [124, 160], "011": [216, 160], "111": [170, 136], "000": [306, 252],
  },
};

function regionKeys(n: number): string[] {
  return n === 2 ? ["10", "11", "01", "00"] : ["100", "010", "001", "110", "101", "011", "111", "000"];
}

/** Plain-language name of a region. */
function regionName(k: string): string {
  const L = ["A", "B", "C"];
  const ins = L.filter((_, i) => k[i] === "1");
  if (ins.length === 0) return k.length === 2 ? "Outside both" : "Outside all three";
  if (ins.length === k.length) return k.length === 2 ? "A and B" : "All three";
  return `${ins.join(" and ")} only`;
}

/** Membership bits of a point, or null if outside the universal rectangle. */
function locate(layout: Layout, x: number, y: number): string | null {
  if (x < 10 || y < 10 || x > layout.W - 10 || y > layout.H - 10) return null;
  return layout.circles.map((c) => ((x - c.cx) ** 2 + (y - c.cy) ** 2 <= c.r * c.r ? "1" : "0")).join("");
}

/**
 * Draws a Venn diagram; each region in `fills` is painted with the given class.
 * Regions are built exactly: clip to every circle the region is inside, and mask
 * out every circle it is outside.
 */
function VennSvg({
  layout,
  fills,
  texts,
  aria,
  onPick,
}: {
  layout: Layout;
  fills: Record<string, string | undefined>;
  texts?: Record<string, ReactNode>;
  aria: string;
  onPick?: (k: string) => void;
}) {
  const uid = useId().replace(/:/g, "");
  const ref = useRef<SVGSVGElement>(null);
  const { W, H, circles } = layout;
  const keys = regionKeys(circles.length);

  const click = (e: MouseEvent<SVGSVGElement>) => {
    if (!onPick || !ref.current) return;
    const ctm = ref.current.getScreenCTM();
    if (!ctm) return;
    const pt = ref.current.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    const p = pt.matrixTransform(ctm.inverse());
    const k = locate(layout, p.x, p.y);
    if (k) onPick(k);
  };

  return (
    <svg ref={ref} viewBox={`0 0 ${W} ${H}`} className={`h-auto w-full ${onPick ? "cursor-pointer" : ""}`} role="img" aria-label={aria} onClick={click}>
      <defs>
        {circles.map((c, i) => (
          <clipPath key={i} id={`${uid}c${i}`}>
            <circle cx={c.cx} cy={c.cy} r={c.r} />
          </clipPath>
        ))}
        {keys.map((k) => (
          <mask key={k} id={`${uid}m${k}`}>
            <rect x={0} y={0} width={W} height={H} fill="white" />
            {circles.map((c, i) => (k[i] === "0" ? <circle key={i} cx={c.cx} cy={c.cy} r={c.r} fill="black" /> : null))}
          </mask>
        ))}
      </defs>
      <rect x={10} y={10} width={W - 20} height={H - 20} className="fill-surface stroke-ink-2" strokeWidth={1.5} />
      {keys.map((k) => {
        const cls = fills[k];
        if (!cls) return null;
        let el: ReactNode = <rect x={10} y={10} width={W - 20} height={H - 20} mask={`url(#${uid}m${k})`} className={cls} />;
        circles.forEach((_, i) => {
          if (k[i] === "1") el = <g clipPath={`url(#${uid}c${i})`}>{el}</g>;
        });
        return <g key={k}>{el}</g>;
      })}
      {circles.map((c, i) => (
        <g key={i}>
          <circle cx={c.cx} cy={c.cy} r={c.r} fill="none" className="stroke-ink" strokeWidth={2} />
          <text x={c.lx} y={c.ly} fontSize={15} fontWeight={700} textAnchor="middle" className="fill-ink">
            {c.label}
          </text>
        </g>
      ))}
      <text x={20} y={30} fontSize={15} className="fill-ink">
        ξ
      </text>
      {texts
        ? keys.map((k) =>
            texts[k] !== undefined ? (
              <text key={k} x={layout.spots[k][0]} y={layout.spots[k][1] + 5} fontSize={14} fontWeight={700} textAnchor="middle" className="fill-ink">
                {texts[k]}
              </text>
            ) : null,
          )
        : null}
    </svg>
  );
}

/* ------------------------------------------------------------------------ */
/* 1. Shade the set                                                           */
/* ------------------------------------------------------------------------ */

type B = boolean;
interface Target {
  s: string;
  words: string;
  f: (a: B, b: B, c: B) => B;
}

const T2: Target[] = [
  { s: "A ∩ B", words: "in A **and** in B", f: (a, b) => a && b },
  { s: "A ∪ B", words: "in A **or** in B (or both)", f: (a, b) => a || b },
  { s: "A′", words: "**not** in A", f: (a) => !a },
  { s: "A′ ∩ B", words: "in B but not in A", f: (a, b) => !a && b },
  { s: "A ∩ B′", words: "in A but not in B", f: (a, b) => a && !b },
  { s: "(A ∪ B)′", words: "in neither A nor B", f: (a, b) => !(a || b) },
  { s: "A′ ∩ B′", words: "not in A and not in B", f: (a, b) => !a && !b },
  { s: "(A ∩ B)′", words: "not in both at once", f: (a, b) => !(a && b) },
  { s: "A′ ∪ B′", words: "not in A, or not in B", f: (a, b) => !a || !b },
  { s: "A′ ∪ B", words: "not in A, or in B", f: (a, b) => !a || b },
];

const T3: Target[] = [
  { s: "A ∩ B ∩ C", words: "in all three sets", f: (a, b, c) => a && b && c },
  { s: "A ∩ B ∩ C′", words: "in A and B but not C", f: (a, b, c) => a && b && !c },
  { s: "A ∩ C", words: "in A and C (B doesn't matter)", f: (a, _b, c) => a && c },
  { s: "(A ∪ B) ∩ C", words: "in C, and also in A or B", f: (a, b, c) => (a || b) && c },
  { s: "A ∪ (B ∩ C)", words: "in A, or in both B and C", f: (a, b, c) => a || (b && c) },
  { s: "A′ ∩ B′ ∩ C", words: "in C only", f: (a, b, c) => !a && !b && c },
  { s: "(A ∪ B ∪ C)′", words: "in none of the sets", f: (a, b, c) => !(a || b || c) },
  { s: "A ∩ (B ∪ C)′", words: "in A but in neither B nor C", f: (a, b, c) => a && !(b || c) },
  { s: "(A ∩ B) ∪ (A ∩ C)", words: "in A and B, or in A and C", f: (a, b, c) => (a && b) || (a && c) },
];

function truthOf(t: Target, k: string): boolean {
  const bit = (i: number) => k[i] === "1";
  return t.f(bit(0), bit(1), k.length > 2 ? bit(2) : false);
}

type NSets = "2" | "3";

function ShadeTheSet() {
  const [n, setN] = useState<NSets>("2");
  const [ti, setTi] = useState(0);
  const [shaded, setShaded] = useState<string[]>([]);
  const [status, setStatus] = useState<"idle" | "right" | "wrong" | "shown">("idle");

  const layout = n === "2" ? L2 : L3;
  const targets = n === "2" ? T2 : T3;
  const target = targets[ti % targets.length];
  const keys = regionKeys(Number(n));
  const correct = keys.filter((k) => truthOf(target, k));

  const toggle = (k: string) => {
    setStatus("idle");
    setShaded((s) => (s.includes(k) ? s.filter((x) => x !== k) : [...s, k]));
  };
  const next = (step: number) => {
    setTi((i) => (i + step + targets.length) % targets.length);
    setShaded([]);
    setStatus("idle");
  };
  const changeN = (v: NSets) => {
    setN(v);
    setTi(0);
    setShaded([]);
    setStatus("idle");
  };

  const missing = correct.filter((k) => !shaded.includes(k));
  const extra = shaded.filter((k) => !correct.includes(k));
  const check = () => setStatus(missing.length === 0 && extra.length === 0 ? "right" : "wrong");

  const fills: Record<string, string | undefined> = {};
  for (const k of keys) {
    if (status === "shown") fills[k] = correct.includes(k) ? "fill-good opacity-60" : undefined;
    else if (shaded.includes(k)) fills[k] = status === "wrong" && extra.includes(k) ? "fill-bad opacity-60" : "fill-brand opacity-50";
  }
  const aria = `Venn diagram with ${n} sets. Target: ${target.s}. Shaded regions: ${
    (status === "shown" ? correct : shaded).map(regionName).join(", ") || "none"
  }.`;

  let caption: ReactNode;
  if (status === "right") {
    caption = (
      <>
        ✅ Correct. <strong>{target.s}</strong> means elements {renderWords(target.words)} — that is the region{correct.length > 1 ? "s" : ""}{" "}
        <strong>{correct.map(regionName).join(", ")}</strong>. {equivNote(target.s)}
      </>
    );
  } else if (status === "wrong") {
    caption = (
      <>
        Not quite. {missing.length ? `You've missed ${missing.length} region${missing.length > 1 ? "s" : ""}. ` : ""}
        {extra.length ? `${extra.length} shaded region${extra.length > 1 ? "s are" : " is"} not part of it (shown red). ` : ""}
        Read it in words: <strong>{target.s}</strong> = elements {renderWords(target.words)}. Test each region: does it pass?
      </>
    );
  } else if (status === "shown") {
    caption = (
      <>
        <strong>{target.s}</strong> = elements {renderWords(target.words)}: <strong>{correct.map(regionName).join(", ")}</strong>. Tip: ∩ keeps only what both
        conditions share, ∪ takes everything from either, and ′ swaps inside for outside. {equivNote(target.s)}
      </>
    );
  } else {
    caption = (
      <>
        Tap the regions that make up <strong>{target.s}</strong>, then press Check. You have shaded {shaded.length} of the {keys.length} regions. Say the notation in
        words first — “∩” is <em>and</em>, “∪” is <em>or</em>, and a dash ′ means <em>not</em>.
      </>
    );
  }

  return (
    <WidgetFrame
      title="Shade the set"
      tryThis={[
        "Shade A′ ∩ B′, then (A ∪ B)′. What do you notice? Now compare (A ∩ B)′ with A′ ∪ B′.",
        "In the three-set diagram, shade (A ∩ B) ∪ (A ∩ C), then A ∩ (B ∪ C). Are they the same set?",
        "Which target needs the most regions shaded? Why does a complement usually need lots?",
      ]}
      caption={caption}
    >
      <div className="space-y-3">
        <div className="flex flex-wrap items-center justify-between gap-2">
          <Segmented<NSets>
            label="Number of sets"
            value={n}
            onChange={changeN}
            options={[
              { value: "2", label: "Two sets" },
              { value: "3", label: "Three sets" },
            ]}
          />
          <div className="flex items-center gap-2">
            <button type="button" className="kbd min-h-10 min-w-10" onClick={() => next(-1)} aria-label="previous target">
              ‹
            </button>
            <span className="min-w-[9ch] rounded-xl border border-line bg-surface px-3 py-2 text-center text-lg font-extrabold text-brand">{target.s}</span>
            <button type="button" className="kbd min-h-10 min-w-10" onClick={() => next(1)} aria-label="next target">
              ›
            </button>
          </div>
        </div>

        <VennSvg layout={layout} fills={fills} aria={aria} onPick={status === "shown" ? undefined : toggle} />

        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4" role="group" aria-label="Regions — tap to shade">
          {keys.map((k) => {
            const on = status === "shown" ? correct.includes(k) : shaded.includes(k);
            return (
              <button
                key={k}
                type="button"
                aria-pressed={on}
                disabled={status === "shown"}
                onClick={() => toggle(k)}
                className={`min-h-10 rounded-lg border px-2 py-1.5 text-sm font-bold transition ${on ? "border-brand bg-brand-soft text-brand" : "border-line bg-surface text-ink-2"}`}
              >
                {regionName(k)}
              </button>
            );
          })}
        </div>

        <div className="flex flex-wrap gap-2">
          <button type="button" className="btn btn-primary" onClick={check} disabled={status === "shown"}>
            Check
          </button>
          <button type="button" className="btn btn-secondary" onClick={() => setStatus("shown")}>
            Show me
          </button>
          <button
            type="button"
            className="btn btn-ghost"
            onClick={() => {
              setShaded([]);
              setStatus("idle");
            }}
          >
            Clear
          </button>
        </div>
      </div>
    </WidgetFrame>
  );
}

/** Render **bold** inside the short target descriptions. */
function renderWords(w: string): ReactNode {
  return w.split("**").map((part, i) => (i % 2 ? <strong key={i}>{part}</strong> : <span key={i}>{part}</span>));
}

function equivNote(s: string): string {
  if (s === "(A ∪ B)′" || s === "A′ ∩ B′") return "Notice (A ∪ B)′ and A′ ∩ B′ are the same region — “not (A or B)” is “not A and not B”.";
  if (s === "(A ∩ B)′" || s === "A′ ∪ B′") return "Notice (A ∩ B)′ and A′ ∪ B′ are the same region — “not (A and B)” is “not A or not B”.";
  if (s === "A′ ∩ B′ ∩ C") return "This is the region exam questions call “C only”.";
  if (s === "(A ∩ B) ∪ (A ∩ C)") return "It's the same set as A ∩ (B ∪ C) — ∩ distributes over ∪, just like × over +.";
  return "";
}

/* ------------------------------------------------------------------------ */
/* 2. Venn probability lab                                                    */
/* ------------------------------------------------------------------------ */

function gcd(a: number, b: number): number {
  let x = Math.abs(a);
  let y = Math.abs(b);
  while (y) [x, y] = [y, x % y];
  return x || 1;
}

type PKind = "and" | "or" | "notA" | "AgB" | "BgA";

const PDEF: Record<PKind, { label: string; num: string[]; den: string[]; words: string }> = {
  and: { label: "P(A ∩ B)", num: ["11"], den: ["10", "11", "01", "00"], words: "in both A and B, out of everything in ξ" },
  or: { label: "P(A ∪ B)", num: ["10", "11", "01"], den: ["10", "11", "01", "00"], words: "in A or B or both, out of everything in ξ" },
  notA: { label: "P(A′)", num: ["01", "00"], den: ["10", "11", "01", "00"], words: "not in A, out of everything in ξ" },
  AgB: { label: "P(A | B)", num: ["11"], den: ["11", "01"], words: "in A, out of only those in B — “given B” shrinks the sample space to circle B" },
  BgA: { label: "P(B | A)", num: ["11"], den: ["10", "11"], words: "in B, out of only those in A — “given A” shrinks the sample space to circle A" },
};

function VennProbability() {
  const [aOnly, setAOnly] = useState(8);
  const [both, setBoth] = useState(4);
  const [bOnly, setBOnly] = useState(6);
  const [none, setNone] = useState(2);
  const [kind, setKind] = useState<PKind>("AgB");

  const cnt: Record<string, number> = { "10": aOnly, "11": both, "01": bOnly, "00": none };
  const total = aOnly + both + bOnly + none;
  const nA = aOnly + both;
  const nB = both + bOnly;
  const def = PDEF[kind];
  const num = def.num.reduce((s, k) => s + cnt[k], 0);
  const den = def.den.reduce((s, k) => s + cnt[k], 0);
  const g = gcd(num, den);

  const fills: Record<string, string | undefined> = {};
  for (const k of ["10", "11", "01", "00"]) {
    if (def.num.includes(k)) fills[k] = "fill-brand opacity-60";
    else if (def.den.includes(k)) fills[k] = "fill-accent opacity-25";
  }
  const texts: Record<string, ReactNode> = { "10": aOnly, "11": both, "01": bOnly, "00": none };

  // Independence: P(A ∩ B) = P(A) × P(B)  ⇔  n(A ∩ B) × n(ξ) = n(A) × n(B).
  const indep = total > 0 && both * total === nA * nB;

  const value =
    den === 0 ? "undefined" : num === 0 ? "0" : num === den ? "1" : g > 1 ? `${num}/${den} = ${num / g}/${den / g}` : `${num}/${den}`;
  const dec = den === 0 ? "—" : (num / den).toFixed(3).replace(/\.?0+$/, "") || "0";

  const aria = `Two-set Venn diagram. A only ${aOnly}, A and B ${both}, B only ${bOnly}, outside both ${none}. ${def.label}: numerator regions shaded strongly, denominator regions shaded lightly. Value ${den === 0 ? "undefined" : `${num} out of ${den}`}.`;

  return (
    <WidgetFrame
      title="Venn probability lab"
      tryThis={[
        "Find region counts that make P(A | B) = 1. What must be true about B?",
        "Make P(A | B) equal to P(A). Then check the independence box — what does it say?",
        "Can P(A | B) be bigger than P(A ∩ B)? Can it ever be smaller? Test it.",
        "Set the counts so that P(A ∪ B) = {{3/4}}.",
      ]}
      caption={
        den === 0 ? (
          <>The denominator region is empty, so this probability is undefined — you can’t pick someone from an empty group. Add someone to it.</>
        ) : (
          <>
            {def.label} counts the elements {def.words}. Numerator (dark): <strong>{num}</strong>. Denominator (dark + light): <strong>{den}</strong>. So{" "}
            <M>{`${def.label.replace(/[()]/g, (c) => c)} = ${value}`}</M>.
            {kind === "AgB" || kind === "BgA" ? (
              <>
                {" "}
                Compare with <M>{`P(A ∩ B) = ${both}/${total}`}</M> — same numerator, but the whole of ξ on the bottom.
              </>
            ) : null}{" "}
            {indep ? (
              <>
                Here <M>{`P(A) * P(B) = ${nA}/${total} * ${nB}/${total} = P(A ∩ B)`}</M>, so A and B are <strong>independent</strong>: knowing B tells you nothing
                about A.
              </>
            ) : (
              <>A and B are not independent here, because <M>{`P(A) * P(B) != P(A ∩ B)`}</M>.</>
            )}
          </>
        )
      }
    >
      <div className="space-y-4">
        <Segmented<PKind>
          label="Probability to find"
          value={kind}
          onChange={setKind}
          options={(Object.keys(PDEF) as PKind[]).map((k) => ({ value: k, label: PDEF[k].label }))}
        />
        <VennSvg layout={L2} fills={fills} texts={texts} aria={aria} />
        <div className="grid gap-2 sm:grid-cols-2">
          <Stepper label="A only" value={aOnly} min={0} max={30} onChange={setAOnly} />
          <Stepper label="A and B" value={both} min={0} max={30} onChange={setBoth} />
          <Stepper label="B only" value={bOnly} min={0} max={30} onChange={setBOnly} />
          <Stepper label="Outside both" value={none} min={0} max={30} onChange={setNone} />
        </div>
        <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
          <Readout label="n(ξ)" value={total} tone="ink" />
          <Readout label="n(A), n(B)" value={`${nA}, ${nB}`} tone="ink" />
          <Readout label={def.label} value={den === 0 ? "—" : <M>{num === 0 ? "0" : num === den ? "1" : `${num / g}/${den / g}`}</M>} />
          <Readout label="Independent?" value={indep ? "Yes" : "No"} tone={indep ? "good" : "bad"} />
        </div>
        <p className="text-xs text-ink-2">
          Decimal: {dec}. Dark shading = the outcomes you want; light shading = the rest of the group you’re choosing from.
        </p>
      </div>
    </WidgetFrame>
  );
}

export const widgets: WidgetDef[] = [
  { id: "shade-the-set", title: "Shade the set", blurb: "Tap regions of a Venn diagram to build sets like A′ ∩ B or (A ∪ B) ∩ C.", Component: ShadeTheSet },
  { id: "venn-probability-lab", title: "Venn probability lab", blurb: "Change the region counts and see how “given” changes the denominator.", Component: VennProbability },
];
