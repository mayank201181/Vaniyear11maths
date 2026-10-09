// ---------------------------------------------------------------------------
// Skill drills — Quadratic Equations (Year 11, Edexcel 4MA1 Higher + H+).
// Each drill generates unlimited fresh questions from a seeded RNG.
// ---------------------------------------------------------------------------
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { Trap } from "../types.ts";
import { clean, frac, gcd, num, br, poly, roundTo, simplify, term } from "./helpers.ts";

type Tier = 1 | 2 | 3;
const TOPIC = "quadratic-equations";

// ---------- formatting ----------
const M = (s: string): string => `{{${s}}}`;
/** ax² + bx + c as ASCII (zero terms dropped). */
const quad = (a: number, b: number, c: number, v = "x"): string => poly([[a, `${v}^2`], [b, v], [c, ""]]);
/** ax + b as ASCII. */
const lin = (a: number, b: number, v = "x"): string => poly([[a, v], [b, ""]]);
/** Factor for the root r: "x" when r = 0, else "(x − r)". */
const fac = (r: number, v = "x"): string => (r === 0 ? v : `(${lin(1, -r, v)})`);
/** Number in maths markup, negatives bracketed: (−3). */
const mb = (n: number): string => (n < 0 ? `(${n})` : `${n}`);
/** Exact rational root n/d for display (plain number or {{a/b}}). */
function rt(n: number, d = 1): string {
  const [a, b] = simplify(n, d);
  return b === 1 ? num(a) : frac(a, b);
}
/** "x = 2 or x = −3". */
const orList = (vals: string[], v = "x"): string => vals.map((s) => `${v} = ${s}`).join(" or ");
/** Plain-text label for SVGs: "x − 3" with a real minus sign. */
const lbl = (s: string): string => s.replace(/ - /g, " − ").replace(/^-/, "−");

function sameSet(a: number[], b: number[], tol = 1e-9): boolean {
  if (a.length !== b.length) return false;
  const pool = [...b];
  for (const x of a) {
    const i = pool.findIndex((y) => Math.abs(x - y) <= tol);
    if (i < 0) return false;
    pool.splice(i, 1);
  }
  return true;
}
const listTrap = (values: number[], feedback: string, ordered = false): Trap => ({ spec: { type: "list", values, ordered }, feedback });
const numTrap = (value: number, feedback: string): Trap => ({ spec: { type: "number", value }, feedback });

const isSquare = (n: number): boolean => n >= 0 && Number.isInteger(Math.sqrt(n));
/** q = s²·t with t square-free: returns [s, t]. */
function surdSplit(q: number): [number, number] {
  let s = 1;
  for (let k = 2; k * k <= q; k++) {
    while (q % (k * k) === 0) {
      q /= k * k;
      s *= k;
    }
  }
  return [s, q];
}

// ---------- 3 s.f. ----------
function sig3(x: number): number {
  if (x === 0) return 0;
  const e = Math.floor(Math.log10(Math.abs(x)));
  return roundTo(x, Math.max(0, 2 - e));
}
/** Half a unit in the 3rd significant figure of x. */
function halfUnit3(x: number): number {
  const e = Math.floor(Math.log10(Math.abs(x)));
  return clean(0.5 * Math.pow(10, e - 2));
}
/** 5 s.f. for working lines. */
function sig5(x: number): string {
  const e = Math.floor(Math.log10(Math.abs(x)));
  return num(roundTo(x, Math.max(0, 4 - e)));
}

// ---------- rearranged presentations of ax² + bx + c = 0 ----------
/** A few equivalent ways to write ax² + bx + c = 0 that need rearranging first. */
function rearranged(rng: Rng, a: number, b: number, c: number): string {
  const opts: string[] = [];
  if (b !== 0) opts.push(`${quad(a, b, 0)} = ${-c}`);
  if (b !== 0) opts.push(`${term(a, "x^2")} = ${poly([[-b, "x"], [-c, ""]])}`);
  if (b !== 0) opts.push(`${poly([[a, "x^2"], [c, ""]])} = ${term(-b, "x")}`);
  if (b !== 0 && gcd(a, b) === 1) opts.push(`x(${lin(a, b)}) = ${-c}`);
  return opts.length ? rng.pick(opts) : `${term(a, "x^2")} = ${-c}`;
}

// ---------- SVG diagrams ----------
function rectSvg(L: number, W: number, lenLabel: string, widLabel: string, unit: string): string {
  const maxW = 200, maxH = 110;
  const s = Math.min(maxW / L, maxH / W);
  const w = Math.max(60, Math.round(L * s)), h = Math.max(36, Math.round(W * s));
  const x0 = Math.round((300 - w) / 2) + 15, y0 = Math.round((170 - h) / 2) - 6;
  return (
    '<svg viewBox="0 0 330 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rectangle with length ' + lenLabel + ' ' + unit + ' and width ' + widLabel + ' ' + unit + '">' +
    '<rect x="0" y="0" width="330" height="170" fill="#ffffff"/>' +
    '<rect x="' + x0 + '" y="' + y0 + '" width="' + w + '" height="' + h + '" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/>' +
    '<text x="' + (x0 + w / 2) + '" y="' + (y0 + h + 20) + '" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(' + lenLabel + ') ' + unit + '</text>' +
    '<text x="' + (x0 - 8) + '" y="' + (y0 + h / 2 + 5) + '" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">(' + widLabel + ') ' + unit + '</text>' +
    '</svg>'
  );
}

function triSvg(L1: number, L2: number, l1: string, l2: string, hyp: string, unit: string): string {
  const s = Math.min(200 / L1, 120 / L2);
  const w = Math.round(L1 * s), h = Math.round(L2 * s);
  const x0 = 110, y0 = 150;
  const mx = x0 + w / 2, my = y0 - h / 2;
  return (
    '<svg viewBox="0 0 340 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle with shorter sides ' + l1 + ' and ' + l2 + ' and hypotenuse ' + hyp + ', in ' + unit + '">' +
    '<rect x="0" y="0" width="340" height="175" fill="#ffffff"/>' +
    '<polygon points="' + x0 + ',' + y0 + ' ' + (x0 + w) + ',' + y0 + ' ' + x0 + ',' + (y0 - h) + '" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/>' +
    '<polyline points="' + x0 + ',' + (y0 - 12) + ' ' + (x0 + 12) + ',' + (y0 - 12) + ' ' + (x0 + 12) + ',' + y0 + '" fill="none" stroke="#1f2937" stroke-width="1.5"/>' +
    '<text x="' + (x0 + w / 2) + '" y="' + (y0 + 18) + '" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">' + l1 + '</text>' +
    '<text x="' + (x0 - 8) + '" y="' + (y0 - h / 2 + 4) + '" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">' + l2 + '</text>' +
    '<text x="' + (mx + 10) + '" y="' + (my - 6) + '" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1f2937">' + hyp + '</text>' +
    '</svg>'
  );
}

// ===========================================================================
// 1. Solve x² + bx + c = 0 by factorising (incl. rearranging and x² = kx)
// ===========================================================================
function factoriseSolve(rng: Rng, tier: Tier): DrillItem {
  // The x² = kx trap: never divide by x.
  if (tier >= 2 && rng.bool(0.2)) {
    const a = rng.pick([1, 1, 2, 3, 4, 5]);
    let k = 3;
    for (let i = 0; i < 50; i++) {
      k = rng.nonZero(-9, 9);
      if (Math.abs(k) >= 2) break;
    }
    const lhs = term(a, "x^2"), rhs = term(a * k, "x");
    return {
      prompt: `${rng.pick(["Solve", "Solve the equation", "Find all the solutions of"])} ${M(`${lhs} = ${rhs}`)}.`,
      answer: { type: "list", values: [0, k], display: `x = 0 or x = ${num(k)}` },
      solution: [
        `Don't divide by x — that loses a solution. Bring everything to one side: ${M(`${poly([[a, "x^2"], [-a * k, "x"]])} = 0`)}.`,
        `Factorise: ${M(`${a === 1 ? "" : a}x(${lin(1, -k)}) = 0`)}.`,
        `So x = 0 or ${M(`${lin(1, -k)} = 0`)}: ${orList(["0", num(k)])}.`,
      ],
      hint: "Rearrange to = 0 and take out the common factor x. Dividing by x throws away x = 0.",
      traps: [listTrap([k], `You've lost x = 0. Dividing both sides by x is only allowed if x ≠ 0 — factorise instead: ${M(`${a === 1 ? "" : a}x(${lin(1, -k)}) = 0`)}.`)],
    };
  }
  const R = tier === 1 ? 7 : 10;
  let r1 = 2, r2 = 3;
  for (let i = 0; i < 100; i++) {
    r1 = rng.nonZero(-R, R);
    r2 = rng.nonZero(-R, R);
    if (r1 !== r2) break;
  }
  const b = -(r1 + r2), c = r1 * r2;
  const std = `${quad(1, b, c)} = 0`;
  let eq = std;
  let how = "";
  if (tier === 1) {
    if (b !== 0 && rng.bool(0.3)) {
      eq = `${quad(1, b, 0)} = ${-c}`;
      how = "Rearrange so one side is 0";
    }
  } else if (tier === 2) {
    const t = rng.int(0, 2);
    if (t === 1) {
      eq = `x^2 = ${poly([[-b, "x"], [-c, ""]])}`;
      how = "Rearrange so one side is 0";
    } else if (t === 2 && b !== 0) {
      eq = `${quad(1, b, 0)} = ${-c}`;
      how = "Rearrange so one side is 0";
    }
  } else {
    const t = rng.int(0, 2);
    let k = rng.nonZero(-6, 6);
    if (t === 0) {
      // x(x + k) = mx + n  →  m = k − b, n = −c
      const m = k - b, n = -c;
      eq = `x(${lin(1, k)}) = ${poly([[m, "x"], [n, ""]])}`;
    } else if (t === 1) {
      // (x + k)² = mx + n  →  m = 2k − b, n = k² − c
      const m = 2 * k - b, n = k * k - c;
      eq = `(${lin(1, k)})^2 = ${poly([[m, "x"], [n, ""]])}`;
    } else {
      // (x + k)(x + l) = n with k + l = b, n = kl − c
      let l = b - k, n = k * l - c;
      for (let i = 0; i < 30 && (l === 0 || n === 0 || l === k); i++) {
        k = rng.nonZero(-6, 6);
        l = b - k;
        n = k * l - c;
      }
      eq = l === 0 || n === 0 ? `x(${lin(1, k)}) = ${poly([[k - b, "x"], [-c, ""]])}` : `(${lin(1, k)})(${lin(1, l)}) = ${n}`;
    }
    how = "Expand the brackets and rearrange so one side is 0";
  }
  const steps: string[] = [];
  if (how) steps.push(`${how}: ${M(std)}.`);
  if (b === 0) steps.push(`This is a difference of two squares: ${M(`x^2 - ${-c} = ${fac(r1)}${fac(r2)}`)}.`);
  else steps.push(`Find two numbers that multiply to ${num(c)} and add to ${num(b)}: ${num(-r1)} and ${num(-r2)}. So ${M(`${fac(r1)}${fac(r2)} = 0`)}.`);
  steps.push(`Set each bracket equal to 0: ${orList([num(r1), num(r2)])}.`);
  const traps: Trap[] = [];
  if (!sameSet([-r1, -r2], [r1, r2])) {
    traps.push(listTrap([-r1, -r2], `Sign slip: ${M(`${lin(1, -r1)} = 0`)} gives x = ${num(r1)}, not ${num(-r1)}. Solving each bracket flips the sign of its number.`));
  }
  return {
    prompt: `${rng.pick(["Solve", "Solve the equation", "Find the solutions of"])} ${M(eq)}.`,
    answer: { type: "list", values: [r1, r2], display: orList([num(r1), num(r2)]) },
    solution: steps,
    hint: how ? "Get everything on one side so the other side is 0, then factorise." : "Find two numbers that multiply to the constant and add to the coefficient of x.",
    traps,
  };
}

// ===========================================================================
// 2. The discriminant and the number of real roots
// ===========================================================================
function discriminant(rng: Rng, tier: Tier): DrillItem {
  const kind = rng.pick(["pos", "zero", "neg"] as const);
  let a = 1, b = 4, c = 1;
  for (let i = 0; i < 200; i++) {
    if (kind === "zero") {
      const k = tier === 1 ? 1 : rng.pick([1, 1, -1, 2]);
      const p = tier === 1 ? 1 : rng.pick([1, 2, 3]);
      const q = rng.nonZero(-6, 6);
      a = k * p * p;
      b = 2 * k * p * q;
      c = k * q * q;
      if (gcd(p, q) === 1) break;
    } else {
      a = tier === 1 ? 1 : rng.nonZero(-4, 5);
      b = rng.int(tier === 1 ? -9 : -12, tier === 1 ? 9 : 12);
      c = rng.nonZero(-9, 9);
      const D = b * b - 4 * a * c;
      if ((kind === "pos" && D > 0) || (kind === "neg" && D < 0)) break;
    }
  }
  const D = b * b - 4 * a * c;
  const n = D > 0 ? 2 : D === 0 ? 1 : 0;
  const eq = tier === 3 && b !== 0 ? rearranged(rng, a, b, c) : `${quad(a, b, c)} = 0`;
  const steps: string[] = [];
  if (tier === 3 && b !== 0) steps.push(`Rearrange to the form {{ax^2 + bx + c = 0}}: ${M(`${quad(a, b, c)} = 0`)}.`);
  steps.push(`a = ${num(a)}, b = ${num(b)}, c = ${num(c)}.`);
  const fourAC = 4 * a * c;
  steps.push(`${M("b^2 - 4ac")} = ${M(`${mb(b)}^2 - 4 * ${mb(a)} * ${mb(c)}`)} = ${b * b} ${fourAC >= 0 ? "−" : "+"} ${Math.abs(fourAC)} = ${num(D)}.`);
  steps.push(D > 0 ? `${num(D)} > 0, so there are **2** distinct real roots.` : D === 0 ? "The discriminant is 0, so there is **1** repeated real root (the graph touches the x-axis)." : `${num(D)} < 0, so there are **no** real roots (you can't square-root a negative).`);
  const traps: Trap[] = [];
  const D2 = b * b + fourAC;
  if (D2 !== D) traps.push(listTrap([D2, D2 > 0 ? 2 : D2 === 0 ? 1 : 0], `Check the sign of 4ac: here 4 × ${br(a)} × ${br(c)} = ${num(fourAC)}, and you subtract it.`, true));
  const D3 = -b * b - fourAC;
  if (b !== 0 && D3 !== D && D3 !== D2) traps.push(listTrap([D3, D3 > 0 ? 2 : D3 === 0 ? 1 : 0], `${M("b^2")} is never negative: ${M(`${mb(b)}^2 = ${b * b}`)}. Use brackets on your calculator.`, true));
  return {
    prompt: `For the equation ${M(eq)}, work out the value of the discriminant ${M("b^2 - 4ac")} and hence state the number of real roots.\n\nGive your answer as: discriminant, number of roots.`,
    answer: { type: "list", values: [D, n], ordered: true, display: `${num(D)}, so ${n} real root${n === 1 ? "" : "s"}` },
    solution: steps,
    hint: "Write down a, b and c (with their signs) first. Positive → 2 roots, zero → 1, negative → none.",
    traps,
  };
}

// ===========================================================================
// 3. Factorise and solve when a ≠ 1
// ===========================================================================
function factoriseANot1(rng: Rng, tier: Tier): DrillItem {
  let p1 = 1, q1 = 2, p2 = 2, q2 = -3;
  for (let i = 0; i < 200; i++) {
    if (tier === 1) {
      p1 = 1;
      p2 = rng.pick([2, 4, 5]);
    } else if (tier === 2) {
      p1 = rng.pick([1, 2]);
      p2 = rng.pick([2, 4, 5]);
    } else {
      p1 = rng.pick([1, 2, 4, 5]);
      p2 = rng.pick([2, 4, 5]);
    }
    const Q = tier === 1 ? 7 : 9;
    q1 = rng.nonZero(-Q, Q);
    q2 = rng.nonZero(-Q, Q);
    if (gcd(p1, q1) !== 1 || gcd(p2, q2) !== 1) continue;
    if (q1 * p2 === q2 * p1) continue;
    if (p1 * p2 > 20) continue;
    break;
  }
  const a = p1 * p2, b = p1 * q2 + q1 * p2, c = q1 * q2;
  const m = p1 * q2, n = q1 * p2;
  const x1 = clean(-q1 / p1), x2 = clean(-q2 / p2);
  const showRe = tier === 3 && b !== 0;
  const eq = showRe ? rearranged(rng, a, b, c) : `${quad(a, b, c)} = 0`;
  const steps: string[] = [];
  if (showRe) steps.push(`Rearrange so one side is 0: ${M(`${quad(a, b, c)} = 0`)}.`);
  steps.push(`a × c = ${a} × ${br(c)} = ${num(a * c)}. Two numbers that multiply to ${num(a * c)} and add to ${num(b)}: ${num(m)} and ${num(n)}.`);
  steps.push(`Split the middle term: ${M(`${poly([[a, "x^2"], [m, "x"], [n, "x"], [c, ""]])} = 0`)}, then factorise in pairs: ${M(`${term(p1, "x")}(${lin(p2, q2)}) ${q1 < 0 ? "-" : "+"} ${Math.abs(q1)}(${lin(p2, q2)}) = 0`)}.`);
  steps.push(`${M(`(${lin(p1, q1)})(${lin(p2, q2)}) = 0`)}, so ${orList([rt(-q1, p1), rt(-q2, p2)])}.`);
  const traps: Trap[] = [];
  if (!sameSet([-q1, -q2], [x1, x2])) traps.push(listTrap([-q1, -q2], `From ${M(`${lin(p2, q2)} = 0`)} you must divide by ${p2}: x = ${rt(-q2, p2)}, not ${num(-q2)}.`));
  if (!sameSet([-x1, -x2], [x1, x2]) && !sameSet([-x1, -x2], [-q1, -q2])) traps.push(listTrap([-x1, -x2], "Sign slip — solve each bracket = 0 carefully; the sign changes when you move the constant across."));
  return {
    prompt: `${rng.pick(["Solve", "Solve by factorising", "Factorise and hence solve"])} ${M(eq)}.\n\nGive your answers as exact values (fractions or exact decimals).`,
    answer: { type: "list", values: [x1, x2], display: orList([rt(-q1, p1), rt(-q2, p2)]) },
    solution: steps,
    hint: `Multiply a by c, find a factor pair of that product which adds to b, and use it to split the middle term.`,
    traps,
  };
}

// ===========================================================================
// 4. Solve by completing the square (exact surd answers)
// ===========================================================================
function completeSquare(rng: Rng, tier: Tier): DrillItem {
  if (tier === 3) {
    // Odd b: (x + b/2)² = (b² − 4c)/4 → x = (−b ± √D)/2.
    let b = 3, c = 1, D = 5;
    for (let i = 0; i < 200; i++) {
      b = rng.pick([-9, -7, -5, -3, -1, 1, 3, 5, 7, 9]);
      c = rng.nonZero(-9, 9);
      D = b * b - 4 * c;
      if (D > 0 && !isSquare(D)) break;
    }
    const eq = rng.bool(0.4) ? `${quad(1, b, 0)} = ${-c}` : `${quad(1, b, c)} = 0`;
    const hb = `${Math.abs(b)}/2`;
    const traps: Trap[] = [listTrap([b, D], `Check the sign: ${M(`(x ${b < 0 ? "-" : "+"} ${hb})^2`)} means x = ${M(`${-b}/2`)} ± …, so p = ${num(-b)}.`, true)];
    const qWrong = b * b + 4 * c;
    if (qWrong > 0 && qWrong !== D) traps.push(listTrap([-b, qWrong], `Watch the sign of c when you move it across: ${M(`${b * b}/4 ${c > 0 ? "-" : "+"} ${Math.abs(c)} = ${D}/4`)}.`, true));
    return {
      prompt: `Solve ${M(eq)} by completing the square. Give your answers in the form ${M("(p +- sqrt(q))/2")}, where p and q are integers.\n\nEnter p and q, separated by a comma.`,
      answer: { type: "list", values: [-b, D], ordered: true, display: `p = ${num(-b)}, q = ${D}, i.e. ${M(`x = (${-b} +- sqrt(${D}))/2`)}` },
      solution: [
        `Halve the coefficient of x: ${M(`${quad(1, b, 0)} = (x ${b < 0 ? "-" : "+"} ${hb})^2 - ${b * b}/4`)}.`,
        `So ${M(`(x ${b < 0 ? "-" : "+"} ${hb})^2 = ${b * b}/4 ${c > 0 ? "-" : "+"} ${Math.abs(c)} = ${D}/4`)}.`,
        `Square-root both sides (± !): ${M(`x ${b < 0 ? "-" : "+"} ${hb} = +- sqrt(${D})/2`)}.`,
        `${M(`x = (${-b} +- sqrt(${D}))/2`)}, so p = ${num(-b)} and q = ${D}.`,
      ],
      hint: "Halve the odd coefficient of x — fractions are fine. Then put everything over 4 on the right.",
      traps,
    };
  }
  let h = 2, q = 3;
  for (let i = 0; i < 200; i++) {
    h = rng.nonZero(tier === 1 ? -5 : -8, tier === 1 ? 5 : 8);
    q = rng.int(2, tier === 1 ? 20 : 60);
    if (!isSquare(q) && q !== h * h) break;
  }
  const b = 2 * h, c = h * h - q;
  const eq = tier === 2 && rng.bool(0.4) ? `${quad(1, b, 0)} = ${-c}` : `${quad(1, b, c)} = 0`;
  const [s, t] = surdSplit(q);
  const traps: Trap[] = [listTrap([h, q], `${M(`(${lin(1, h)})^2 = ${q}`)} gives ${M(`x = ${-h} +- sqrt(${q})`)} — the sign of ${num(h)} changes when it moves across.`, true)];
  const qWrong = h * h + c;
  if (c !== 0 && qWrong > 0 && qWrong !== q) traps.push(listTrap([-h, qWrong], `Watch the sign of c: ${M(`(${lin(1, h)})^2 - ${h * h} ${c < 0 ? "-" : "+"} ${Math.abs(c)} = 0`)} gives ${M(`(${lin(1, h)})^2 = ${q}`)}.`, true));
  const steps = [
    `Halve the coefficient of x: ${M(`${quad(1, b, 0)} = (${lin(1, h)})^2 - ${h * h}`)}.`,
    `So ${M(`(${lin(1, h)})^2 - ${h * h} ${c < 0 ? "-" : "+"} ${Math.abs(c)} = 0`)}, i.e. ${M(`(${lin(1, h)})^2 = ${q}`)}.`,
    `Square-root both sides (± !): ${M(`${lin(1, h)} = +- sqrt(${q})`)}, so ${M(`x = ${-h} +- sqrt(${q})`)}: p = ${num(-h)}, q = ${q}.`,
  ];
  if (s > 1) steps.push(`(Simplified, ${M(`sqrt(${q}) = ${s}sqrt(${t})`)}, so this is also ${M(`${-h} +- ${s}sqrt(${t})`)}.)`);
  return {
    prompt: `${rng.pick(["Solve", "By completing the square, solve", "Use completing the square to solve"])} ${M(eq)}. Give your answers in the form ${M("p +- sqrt(q)")}, where p and q are integers.\n\nEnter p and q, separated by a comma.`,
    answer: { type: "list", values: [-h, q], ordered: true, display: `p = ${num(-h)}, q = ${q}, i.e. ${M(`x = ${-h} +- sqrt(${q})`)}` },
    solution: steps,
    hint: `Write ${M(`${quad(1, b, 0)}`)} as ${M(`(x + ${b}/2)^2`)} minus a correction, then get the bracket squared on its own.`,
    traps,
  };
}

// ===========================================================================
// 5. Quadratic formula, answers to 3 s.f.
// ===========================================================================
function formula3sf(rng: Rng, tier: Tier): DrillItem {
  let a = 1, b = 5, c = 3, D = 13;
  let r1 = 0, r2 = 0;
  for (let i = 0; i < 300; i++) {
    a = tier === 1 ? rng.pick([1, 1, 2, 3]) : rng.int(1, 6);
    b = rng.nonZero(tier === 1 ? -9 : -12, tier === 1 ? 9 : 12);
    c = rng.nonZero(tier === 1 ? -9 : -12, tier === 1 ? 9 : 12);
    D = b * b - 4 * a * c;
    if (D <= 0 || isSquare(D)) continue;
    r1 = (-b + Math.sqrt(D)) / (2 * a);
    r2 = (-b - Math.sqrt(D)) / (2 * a);
    if (Math.min(Math.abs(r1), Math.abs(r2)) < 0.1 || Math.max(Math.abs(r1), Math.abs(r2)) > 60) continue;
    break;
  }
  const s1 = sig3(r1), s2 = sig3(r2);
  const tol = Math.min(halfUnit3(s1), halfUnit3(s2));
  const eq = tier === 3 ? rearranged(rng, a, b, c) : `${quad(a, b, c)} = 0`;
  const steps: string[] = [];
  if (tier === 3) steps.push(`Rearrange to the form {{ax^2 + bx + c = 0}}: ${M(`${quad(a, b, c)} = 0`)}.`);
  steps.push(`a = ${num(a)}, b = ${num(b)}, c = ${num(c)}.`);
  steps.push(`${M(`x = (-${mb(b)} +- sqrt(${mb(b)}^2 - 4 * ${mb(a)} * ${mb(c)}))/(2 * ${mb(a)})`)} = ${M(`(${-b} +- sqrt(${D}))/${2 * a}`)}.`);
  steps.push(`x = ${sig5(r1)}… or x = ${sig5(r2)}…, so ${orList([num(s1), num(s2)])} (3 s.f.).`);
  const traps: Trap[] = [];
  const t1 = [sig3(-r1), sig3(-r2)];
  if (!sameSet(t1, [s1, s2], tol * 4)) traps.push(listTrap(t1, "Sign slip: the formula starts with −b. With b = " + num(b) + ", −b = " + num(-b) + "."));
  const t2 = [sig3(-b + Math.sqrt(D) / (2 * a)), sig3(-b - Math.sqrt(D) / (2 * a))];
  if (!sameSet(t2, [s1, s2], tol * 4) && !sameSet(t2, t1, tol * 4) && t2.every((v) => v !== 0)) {
    traps.push(listTrap(t2, `Divide the **whole** of ${M(`-b +- sqrt(b^2 - 4ac)`)} by 2a, not just the square root. Use brackets on your calculator.`));
  }
  return {
    prompt: `${rng.pick(["Solve", "Use the quadratic formula to solve", "Solve the equation"])} ${M(eq)}.\n\nGive your solutions correct to 3 significant figures.`,
    answer: { type: "list", values: [s1, s2], tolerance: tol, display: orList([num(s1), num(s2)]) },
    solution: steps,
    hint: "Write down a, b and c with their signs, then substitute into x = (−b ± √(b² − 4ac)) ÷ 2a. Do the ‘+’ and ‘−’ versions separately.",
    traps,
  };
}

// ===========================================================================
// 6. Form a quadratic from an area problem; reject the impossible root
// ===========================================================================
const TRIPLES: Array<[number, number, number]> = [[3, 4, 5], [5, 12, 13], [8, 15, 17], [7, 24, 25], [20, 21, 29], [6, 8, 10], [9, 12, 15]];

/** (x + p)² as markup, or x² when p = 0. */
const sqr = (p: number): string => (p === 0 ? "x^2" : `(${lin(1, p)})^2`);

function areaProblem(rng: Rng, tier: Tier): DrillItem {
  const useTri = tier === 3 && rng.bool(0.6);
  if (useTri) {
    for (let i = 0; i < 300; i++) {
      const [A0, B0, C0] = rng.pick(TRIPLES);
      const t = rng.pick([1, 1, 2]);
      const L1 = A0 * t, L2 = B0 * t, H = C0 * t;
      const X = rng.int(2, Math.min(L1, L2) + 3);
      const p = L1 - X, q = L2 - X, r = H - X;
      if (p === q) continue;
      const B = 2 * (p + q - r), C = p * p + q * q - r * r;
      const other = -B - X;
      if (other === X) continue;
      if (other + Math.min(p, q, r) > 0) continue; // other root must give an impossible side
      const unit = rng.pick(["cm", "m"]);
      const askArea = rng.bool(0.5);
      const l1 = lbl(lin(1, p)), l2 = lbl(lin(1, q)), hy = lbl(lin(1, r));
      const area = (L1 * L2) / 2;
      const e = B + X; // (x − X)(x + e)
      const steps = [
        `Pythagoras: ${M(`${sqr(p)} + ${sqr(q)} = ${sqr(r)}`)}.`,
        `Expand and collect: ${M(`${quad(2, 2 * (p + q), p * p + q * q)} = ${quad(1, 2 * r, r * r)}`)}, so ${M(`${quad(1, B, C)} = 0`)}.`,
        `Factorise: ${M(`${fac(X)}${fac(-e)} = 0`)}, so x = ${X} or x = ${num(-e)}.`,
        `x = ${num(-e)} would make a side ${num(-e + Math.min(p, q, r))} ${unit} — impossible. So x = ${X}${askArea ? `, the shorter sides are ${L1} ${unit} and ${L2} ${unit}, and the area is {{1/2}} × ${L1} × ${L2} = ${num(area)} ${unit}²` : ""}.`,
      ];
      return {
        prompt: `The diagram shows a right-angled triangle. The lengths, in ${unit}, are ${M(lin(1, p))}, ${M(lin(1, q))} and the hypotenuse ${M(lin(1, r))}.\n\n${askArea ? `Work out the area of the triangle. Give your answer in ${unit}².` : "Work out the value of x."}`,
        answer: { type: "number", value: askArea ? area : X },
        solution: steps,
        hint: "Use Pythagoras to form an equation, expand all three brackets and collect everything on one side.",
        traps: askArea ? [numTrap(L1 * L2, "The area of a triangle is half of base × height.")] : [numTrap(-e, `x = ${num(-e)} makes a length negative — reject it.`)],
        diagram: triSvg(L1, L2, l1 + " " + unit, l2 + " " + unit, hy + " " + unit, unit),
      };
    }
  }
  // Rectangle (kx + p)(x + q) = A, k = 1 or 2.
  const k = tier === 1 ? 1 : rng.pick(tier === 2 ? [1, 1, 2] : [1, 2, 2]);
  let X = 5, p = 3, q = -2, other = -6;
  for (let i = 0; i < 300; i++) {
    X = rng.int(tier === 1 ? 2 : 3, tier === 1 ? 10 : 14);
    p = rng.nonZero(-6, 9);
    q = rng.nonZero(-6, 9);
    if (k === 1 && p === q) continue;
    const len = k * X + p, wid = X + q;
    if (len <= 0 || wid <= 0) continue;
    if (len <= wid) continue;
    // other root of kx² + (p + kq)x + (pq − A) = 0: sum of roots = −(p + kq)/k
    other = clean(-(p + k * q) / k - X);
    if (other === X) continue;
    if (k * other + p > 0 && other + q > 0) continue; // must be impossible
    break;
  }
  const len = k * X + p, wid = X + q;
  const A = len * wid;
  const unit = rng.pick(["cm", "m"]);
  const ctx = rng.pick(unit === "cm" ? ["A rectangular photo", "A rectangular tile", "A rectangular notice board"] : ["A rectangular garden plot", "A rectangular HDB balcony floor", "A rectangular classroom"]);
  const askPerim = tier >= 2 && rng.bool(0.4);
  const Bc = p + k * q, Cc = p * q - A;
  const e = Bc + k * X; // (x − X)(kx + e)
  const lenS = lin(k, p), widS = lin(1, q);
  const steps = [
    `Area = length × width: ${M(`(${lenS})(${widS}) = ${A}`)}.`,
    `Expand: ${M(`${quad(k, Bc, p * q)} = ${A}`)}, so ${M(`${quad(k, Bc, Cc)} = 0`)}.`,
    `Factorise: ${M(`${e % k === 0 && k > 1 ? `${k}${fac(X)}${fac(-e / k)}` : `${fac(X)}(${lin(k, e)})`} = 0`)}, so x = ${X} or x = ${rt(-e, k)}.`,
  ];
  const badDim = k * other + p <= 0 ? clean(k * other + p) : clean(other + q);
  steps.push(`x = ${rt(-e, k)} would give a ${k * other + p <= 0 ? "length" : "width"} of ${num(badDim)} ${unit} — impossible, so x = ${X}.`);
  if (askPerim) steps.push(`The rectangle is ${len} ${unit} by ${wid} ${unit}, so the perimeter is 2 × (${len} + ${wid}) = ${2 * (len + wid)} ${unit}.`);
  const traps: Trap[] = [];
  if (!askPerim && other !== X) traps.push(numTrap(other, `x = ${rt(-e, k)} gives a negative or zero side — a length can't be negative, so reject it.`));
  if (askPerim) traps.push(numTrap(X, "That's x. The question asks for the perimeter — substitute x back into the length and width."));
  return {
    prompt: `${ctx} is ${M(lenS)} ${unit} long and ${M(widS)} ${unit} wide. Its area is ${A} ${unit}².\n\n${askPerim ? `Work out the perimeter of the rectangle, in ${unit}.` : "Form and solve an equation to find the value of x."}`,
    answer: { type: "number", value: askPerim ? 2 * (len + wid) : X },
    solution: steps,
    hint: "Area = length × width. Expand, rearrange to = 0 and factorise — then ask which solution makes sense.",
    traps,
    diagram: rectSvg(len, wid, lbl(lenS), lbl(widS), unit),
  };
}

// ===========================================================================
// 7. Linear–quadratic simultaneous equations (parabola or circle)
// ===========================================================================
const CIRCLE_R2 = [5, 10, 13, 17, 20, 25, 26, 29, 34, 40, 45, 50, 52, 65, 85, 100];
function latticePoints(r2: number): Array<[number, number]> {
  const out: Array<[number, number]> = [];
  const r = Math.floor(Math.sqrt(r2));
  for (let x = -r; x <= r; x++) {
    const y2 = r2 - x * x;
    if (isSquare(y2)) {
      const y = Math.sqrt(y2);
      out.push([x, y]);
      if (y !== 0) out.push([x, -y]);
    }
  }
  return out;
}

function linearQuadratic(rng: Rng, tier: Tier): DrillItem {
  const useCircle = tier === 1 ? false : tier === 2 ? rng.bool(0.6) : rng.bool(0.75);
  const pairStr = (x1: number, y1: number, x2: number, y2: number) => `x = ${num(x1)}, y = ${num(y1)} and x = ${num(x2)}, y = ${num(y2)}`;
  const askText = "\n\nGive both pairs of solutions as x, y, x, y — the pair with the smaller value of x first.";
  if (!useCircle) {
    let x1 = -1, x2 = 3, m = 2, c = 1, p = 0, q = 0;
    for (let i = 0; i < 200; i++) {
      x1 = rng.int(-5, 5);
      x2 = rng.int(-5, 5);
      if (x1 >= x2) continue;
      m = rng.nonZero(-4, 4);
      c = rng.int(-8, 8);
      p = m - (x1 + x2);
      q = c + x1 * x2;
      if (p === 0 && q === 0) continue;
      break;
    }
    const y1 = m * x1 + c, y2 = m * x2 + c;
    const lineEq = tier >= 2 && rng.bool(0.5) ? `y ${m > 0 ? "-" : "+"} ${term(Math.abs(m), "x")} = ${c}` : `y = ${lin(m, c)}`;
    const B = p - m, C = q - c;
    return {
      prompt: `Solve the simultaneous equations\n\n${M(`y = ${quad(1, p, q)}`)}\n\n${M(lineEq)}${askText}`,
      answer: { type: "list", values: [x1, y1, x2, y2], ordered: true, display: pairStr(x1, y1, x2, y2) },
      solution: [
        `Substitute y = ${M(lin(m, c))} into the quadratic: ${M(`${lin(m, c)} = ${quad(1, p, q)}`)}.`,
        `Rearrange: ${M(`${quad(1, B, C)} = 0`)}, so ${M(`${fac(x1)}${fac(x2)} = 0`)} and x = ${num(x1)} or x = ${num(x2)}.`,
        `Use the **linear** equation for y: x = ${num(x1)} gives y = ${num(y1)}; x = ${num(x2)} gives y = ${num(y2)}.`,
      ],
      hint: "Make y the subject of the linear equation, substitute it into the quadratic and solve. Then find each y from the linear equation.",
      traps: [listTrap([x1, y2, x2, y1], "The pairs are mixed up — each x goes with the y you get by substituting *that* x into the line.", true)],
    };
  }
  // Circle x² + y² = r² with a line through two lattice points (integer gradient or integer inverse gradient).
  for (let i = 0; i < 400; i++) {
    const r2 = rng.pick(tier === 2 ? CIRCLE_R2.slice(0, 10) : CIRCLE_R2);
    const pts = latticePoints(r2);
    const [P1, P2] = rng.shuffle(pts).slice(0, 2);
    const dx = P2[0] - P1[0], dy = P2[1] - P1[1];
    if (dx === 0 || dy === 0) continue;
    const yForm = dy % dx === 0;
    const xForm = !yForm && dx % dy === 0;
    if (!yForm && !xForm) continue;
    const [[x1, y1], [x2, y2]] = P1[0] < P2[0] ? [P1, P2] : [P2, P1];
    if (yForm) {
      const m = dy / dx, c = P1[1] - m * P1[0];
      if (Math.abs(m) > 3 || Math.abs(c) > 15) continue;
      const A = 1 + m * m, B = 2 * m * c, C = c * c - r2;
      const g = gcd(gcd(A, B), C) || 1;
      const lineEq = tier === 3 ? rng.pick([`y ${m > 0 ? "-" : "+"} ${term(Math.abs(m), "x")} = ${c}`, `${lin(m, 0)} - y = ${-c}`, `y = ${lin(m, c)}`]) : `y = ${lin(m, c)}`;
      const lead = A / g;
      return {
        prompt: `Solve the simultaneous equations\n\n${M(`x^2 + y^2 = ${r2}`)}\n\n${M(lineEq)}${askText}`,
        answer: { type: "list", values: [x1, y1, x2, y2], ordered: true, display: pairStr(x1, y1, x2, y2) },
        solution: [
          `Make y the subject: y = ${M(lin(m, c))}. Substitute: ${M(`x^2 + (${lin(m, c)})^2 = ${r2}`)}.`,
          `Expand and collect: ${M(`${quad(A, B, C)} = 0`)}${g > 1 ? `; divide by ${g}: ${M(`${quad(A / g, B / g, C / g)} = 0`)}` : ""}.`,
          `Factorise: ${M(`${lead === 1 ? "" : lead}${fac(x1)}${fac(x2)} = 0`)}, so x = ${num(x1)} or x = ${num(x2)}.`,
          `y = ${M(lin(m, c))}: x = ${num(x1)} gives y = ${num(y1)}; x = ${num(x2)} gives y = ${num(y2)}. (The line cuts the circle at these two points.)`,
        ],
        hint: "Rearrange the linear equation to y = …, substitute into the circle, expand the squared bracket carefully, and solve the quadratic.",
        traps: [listTrap([x1, y2, x2, y1], "The pairs are mixed up — find each y by putting *that* x into the linear equation (not the circle, which gives ± two y-values).", true)],
      };
    }
    // x = ny + d
    const n = dx / dy, d = P1[0] - n * P1[1];
    if (Math.abs(n) > 3 || Math.abs(d) > 15) continue;
    const A = 1 + n * n, B = 2 * n * d, C = d * d - r2;
    const g = gcd(gcd(A, B), C) || 1;
    const lineEq = rng.pick([`x = ${lin(n, d, "y")}`, `x ${n > 0 ? "-" : "+"} ${term(Math.abs(n), "y")} = ${d}`]);
    const lead = A / g;
    const ya = P1[0] < P2[0] ? P1[1] : P2[1], yb = P1[0] < P2[0] ? P2[1] : P1[1];
    return {
      prompt: `Solve the simultaneous equations\n\n${M(`x^2 + y^2 = ${r2}`)}\n\n${M(lineEq)}${askText}`,
      answer: { type: "list", values: [x1, y1, x2, y2], ordered: true, display: pairStr(x1, y1, x2, y2) },
      solution: [
        `Here it is easier to make x the subject: x = ${M(lin(n, d, "y"))}. Substitute: ${M(`(${lin(n, d, "y")})^2 + y^2 = ${r2}`)}.`,
        `Expand and collect: ${M(`${quad(A, B, C, "y")} = 0`)}${g > 1 ? `; divide by ${g}: ${M(`${quad(A / g, B / g, C / g, "y")} = 0`)}` : ""}.`,
        `Factorise: ${M(`${lead === 1 ? "" : lead}${fac(ya, "y")}${fac(yb, "y")} = 0`)}, so y = ${num(ya)} or y = ${num(yb)}.`,
        `x = ${M(lin(n, d, "y"))}: y = ${num(ya)} gives x = ${num(x1)}; y = ${num(yb)} gives x = ${num(x2)}.`,
      ],
      hint: "Make x the subject of the linear equation (no fractions that way), substitute into the circle and solve for y first.",
      traps: [listTrap([x1, y2, x2, y1], "The pairs are mixed up — each y goes with the x you get from the linear equation.", true)],
    };
  }
  // Fallback (practically unreachable).
  return {
    prompt: `Solve the simultaneous equations\n\n{{x^2 + y^2 = 25}}\n\n{{y = x + 1}}${askText}`,
    answer: { type: "list", values: [-4, -3, 3, 4], ordered: true, display: pairStr(-4, -3, 3, 4) },
    solution: ["Substitute: {{x^2 + (x + 1)^2 = 25}}, so {{2x^2 + 2x - 24 = 0}}, i.e. {{x^2 + x - 12 = 0}}.", "{{(x + 4)(x - 3) = 0}}, so x = −4 or x = 3.", "y = x + 1 gives y = −3 and y = 4."],
  };
}

// ===========================================================================
// 8. Equations with algebraic fractions
// ===========================================================================
const den = (p: number): string => (p === 0 ? "x" : `(${lin(1, p)})`);
/** Product of the two denominators, with a bare x written first. */
const dprod = (p: number, q: number): string => (q === 0 ? `${den(q)}${den(p)}` : `${den(p)}${den(q)}`);
function fracTerm(coef: number, p: number, first: boolean): string {
  const body = `${Math.abs(coef)}/${den(p)}`;
  if (first) return coef < 0 ? `-${body}` : body;
  return coef < 0 ? ` - ${body}` : ` + ${body}`;
}

function algebraicFractions(rng: Rng, tier: Tier): DrillItem {
  // Variant with an excluded value: x/(x − k) + v/(x + t) = W/((x − k)(x + t)).
  if (tier >= 2 && rng.bool(0.35)) {
    for (let i = 0; i < 300; i++) {
      const k = rng.nonZero(-6, 6), t = rng.nonZero(-6, 6), r = rng.nonZero(-8, 8);
      if (k === -t || r === k || r === -t) continue;
      const v = -(t + k + r), W = -v * k - k * r;
      if (v === 0 || W === 0 || Math.abs(v) > 12 || Math.abs(W) > 60) continue;
      const B = t + v, C = -v * k - W; // x² + Bx + C = 0, roots k and r
      const eq = `x/(${lin(1, -k)})${fracTerm(v, t, false)} = ${W}/((${lin(1, -k)})(${lin(1, t)}))`;
      return {
        prompt: `Solve ${M(eq)}.`,
        answer: { type: "list", values: [r], display: `x = ${num(r)} only` },
        solution: [
          `Multiply every term by ${M(`(${lin(1, -k)})(${lin(1, t)})`)}: ${M(`x(${lin(1, t)}) ${v < 0 ? "-" : "+"} ${Math.abs(v)}(${lin(1, -k)}) = ${W}`)}.`,
          `Expand and rearrange: ${M(`${quad(1, B, C)} = 0`)}, so ${M(`${fac(k)}${fac(r)} = 0`)}: x = ${num(k)} or x = ${num(r)}.`,
          `But x = ${num(k)} makes ${M(lin(1, -k))} = 0 — you can't divide by zero, so it is **not** a solution. Answer: x = ${num(r)} only.`,
        ],
        hint: "Multiply through by the common denominator — then check each answer against the original denominators.",
        traps: [listTrap([k, r], `x = ${num(k)} makes a denominator zero, so it must be rejected.`)],
      };
    }
  }
  const half = tier === 3;
  const c = half ? 2 : tier === 1 ? 1 : rng.pick([1, 1, 2, 3]);
  for (let i = 0; i < 400; i++) {
    const p = rng.int(-6, 6), q = rng.int(-6, 6);
    if (p === q || p > q) continue;
    let r1: number, r2: number, n2 = 0;
    if (half) {
      r1 = rng.nonZero(-7, 7);
      n2 = rng.pick([-9, -7, -5, -3, -1, 1, 3, 5, 7, 9]);
      r2 = n2 / 2;
    } else {
      r1 = rng.int(-8, 8);
      r2 = rng.int(-8, 8);
      if (r1 >= r2) continue;
    }
    if ([r1, r2].some((r) => r === -p || r === -q)) continue;
    const S = r1 + r2, P = r1 * r2;
    const sum = c * (p + q + S); // a + b
    const rhs = c * (p * q - P); // aq + bp
    // a(q − p) = rhs − p·sum
    const num1 = rhs - p * sum;
    if (num1 % (q - p) !== 0) continue;
    const a = num1 / (q - p), b = sum - a;
    if (!Number.isInteger(a) || !Number.isInteger(b) || a === 0 || b === 0 || Math.abs(a) > 15 || Math.abs(b) > 15) continue;
    const B = c * (p + q) - a - b, C = c * p * q - a * q - b * p;
    const eq = `${fracTerm(a, p, true)}${fracTerm(b, q, false)} = ${c}`;
    const lhsExp = `${a === 1 ? "" : a === -1 ? "-" : a}${den(q)} ${b < 0 ? "-" : "+"} ${Math.abs(b) === 1 ? "" : Math.abs(b)}${den(p)}`;
    const factored = half ? `${fac(r1)}(${lin(2, -n2)})` : `${c === 1 ? "" : c}${fac(r1)}${fac(r2)}`;
    const vals = half ? [r1, clean(r2)] : [r1, r2];
    const shows = half ? [num(r1), rt(n2, 2)] : [num(r1), num(r2)];
    const excl = [p, q].map((z) => `x ≠ ${num(-z)}`).join(", ");
    const traps: Trap[] = [];
    if (!sameSet(vals.map((v) => -v), vals)) traps.push(listTrap(vals.map((v) => clean(-v)), "Sign slip when solving the brackets — each bracket = 0 gives x = the *opposite* of its number."));
    return {
      prompt: `${rng.pick(["Solve", "Solve the equation", "Find the values of x that satisfy"])} ${M(eq)}.${half ? "\n\nGive any answer that is not a whole number as a fraction or exact decimal." : ""}`,
      answer: { type: "list", values: vals, display: orList(shows) },
      solution: [
        `Multiply every term by ${M(dprod(p, q))}: ${M(`${lhsExp} = ${c === 1 ? "" : c}${dprod(p, q)}`)}.`,
        `Expand: ${M(`${lin(a + b, a * q + b * p)} = ${quad(c, c * (p + q), c * p * q)}`)}.`,
        `Rearrange: ${M(`${quad(c, B, C)} = 0`)}, so ${M(`${factored} = 0`)}.`,
        `${orList(shows)}. Check: neither makes a denominator zero (${excl}), so both are valid.`,
      ],
      hint: "Multiply EVERY term (including the right-hand side) by both denominators to clear the fractions.",
      traps,
    };
  }
  return {
    prompt: "Solve {{2/x + 3/(x + 2) = 1}}.",
    answer: { type: "list", values: [4, -1], display: "x = 4 or x = −1" },
    solution: ["Multiply every term by {{x(x + 2)}}: {{2(x + 2) + 3x = x(x + 2)}}.", "{{5x + 4 = x^2 + 2x}}, so {{x^2 - 3x - 4 = 0}}, i.e. {{(x - 4)(x + 1) = 0}}.", "x = 4 or x = −1; neither makes a denominator zero."],
  };
}

// ===========================================================================
// 9. Equal roots: find k using the discriminant
// ===========================================================================
function equalRoots(rng: Rng, tier: Tier): DrillItem {
  const phr = rng.pick(["has equal roots", "has exactly one (repeated) real root", "has two equal real roots"]);
  const kind = tier === 1 ? rng.pick(["const", "middle"] as const) : tier === 2 ? rng.pick(["const", "middle", "lead"] as const) : rng.pick(["lin", "both"] as const);
  if (kind === "const") {
    // ax² + bx + k = 0 with b = 2am → k = am²
    const a = tier === 1 ? 1 : rng.pick([1, 2, 3, 4]);
    const m = rng.nonZero(-7, 7);
    const b = 2 * a * m, k = a * m * m;
    const traps: Trap[] = [numTrap(b * b, `Set ${M("b^2 - 4ac = 0")}: ${M(`${b * b} - ${4 * a}k = 0`)}, so you still need to divide by ${4 * a}.`)];
    if (a > 1 && b * b / 4 !== k) traps.push(numTrap(clean((b * b) / 4), `Here a = ${a}, so ${M("4ac")} = ${4 * a}k, not 4k.`));
    return {
      prompt: `The equation ${M(`${quad(a, b, 0)} + k = 0`)} ${phr}. Find the value of k.`,
      answer: { type: "number", value: k },
      solution: [
        `Equal roots ⇔ ${M("b^2 - 4ac = 0")}, with a = ${a}, b = ${num(b)}, c = k.`,
        `${M(`${mb(b)}^2 - 4 * ${a} * k = 0`)}, so ${M(`${b * b} = ${4 * a}k`)}.`,
        `k = ${num(k)}. (Check: the equation is ${M(`${a === 1 ? "" : a}(${lin(1, m)})^2 = 0`)}.)`,
      ],
      hint: "Equal roots means the discriminant b² − 4ac is exactly 0.",
      traps,
    };
  }
  if (kind === "middle") {
    // ax² + kx + c = 0 with ac a perfect square → k = ±2√(ac)
    const a = tier === 1 ? 1 : rng.pick([1, 4, 9]);
    const s = rng.int(2, tier === 1 ? 9 : 6);
    const c = s * s; // c > 0 so that real values of k exist
    const K = 2 * Math.sqrt(a) * s;
    return {
      prompt: `The equation ${M(`${term(a, "x^2")} + kx + ${c} = 0`)} ${phr}. Find the possible values of k.`,
      answer: { type: "list", values: [K, -K], display: `k = ${K} or k = −${K}` },
      solution: [
        `Equal roots ⇔ ${M("b^2 - 4ac = 0")}: ${M(`k^2 - 4 * ${a} * ${c} = 0`)}.`,
        `${M(`k^2 = ${4 * a * c}`)}, so ${M(`k = +- ${K}`)}.`,
        `Both work: the equation becomes ${M(`(${lin(Math.sqrt(a), s)})^2 = 0`)} or ${M(`(${lin(Math.sqrt(a), -s)})^2 = 0`)}.`,
      ],
      hint: "Set b² − 4ac = 0. When you square-root, remember there are two values.",
      traps: [listTrap([K], `There are two values: ${M(`k^2 = ${K * K}`)} gives k = ${K} **or** k = −${K}.`)],
    };
  }
  if (kind === "lead") {
    // kx² + bx + c = 0, b = 2s, s² = kc
    for (let i = 0; i < 100; i++) {
      const s = rng.int(2, 6);
      const divs = [] as number[];
      for (let d = 2; d <= s * s; d++) if ((s * s) % d === 0) divs.push(d);
      const k = rng.pick(divs) * (rng.bool(0.3) ? -1 : 1);
      const c = (s * s) / k;
      if (!Number.isInteger(c) || Math.abs(c) > 36) continue;
      const b = 2 * s * (rng.bool() ? 1 : -1);
      return {
        prompt: `The equation ${M(`kx^2 ${b < 0 ? "-" : "+"} ${Math.abs(b)}x ${c < 0 ? "-" : "+"} ${Math.abs(c)} = 0`)} ${phr}. Find the value of k.`,
        answer: { type: "number", value: k },
        solution: [
          `Equal roots ⇔ ${M("b^2 - 4ac = 0")}, with a = k, b = ${num(b)}, c = ${num(c)}.`,
          `${M(`${mb(b)}^2 - 4 * k * ${mb(c)} = 0`)}: ${M(`${b * b} ${c < 0 ? "+" : "-"} ${Math.abs(4 * c)}k = 0`)}.`,
          `k = ${num(k)}.`,
        ],
        hint: "Here k is the coefficient a. Substitute a = k into b² − 4ac = 0.",
        traps: [numTrap(-k, "Check the sign — substitute your k back into b² − 4ac and make sure you get 0.")],
      };
    }
  }
  if (kind === "both") {
    // (k + α)x² + 2βx + (k + γ) = 0 → β² = (k + α)(k + γ) → k² + (α+γ)k + αγ − β² = 0 with roots r1, r2
    for (let i = 0; i < 500; i++) {
      const beta = rng.int(1, 4);
      const r1 = rng.int(-6, 6), r2 = rng.int(-6, 6);
      if (r1 >= r2) continue;
      const disc = (r1 - r2) * (r1 - r2) - 4 * beta * beta;
      if (disc < 0 || !isSquare(disc)) continue;
      const sq = Math.sqrt(disc);
      const al = (-(r1 + r2) + sq) / 2, ga = (-(r1 + r2) - sq) / 2;
      if (!Number.isInteger(al) || !Number.isInteger(ga) || al === ga) continue;
      if (al === 0 && ga === 0) continue;
      if (r1 === -al || r2 === -al) continue; // leading coefficient must not vanish
      const lead = al === 0 ? "kx^2" : `(${lin(1, al, "k")})x^2`;
      const cst = ga === 0 ? "k" : `(${lin(1, ga, "k")})`;
      const eq = `${lead} + ${2 * beta}x + ${cst} = 0`;
      const q1 = al + ga, q0 = al * ga - beta * beta;
      return {
        prompt: `The equation ${M(eq)} ${phr}. Find the possible values of k.`,
        answer: { type: "list", values: [r1, r2], display: `k = ${num(r1)} or k = ${num(r2)}` },
        solution: [
          `Equal roots ⇔ ${M("b^2 - 4ac = 0")}: ${M(`${2 * beta}^2 - 4(${lin(1, al, "k")})(${lin(1, ga, "k")}) = 0`)}.`,
          `Divide by 4: ${M(`(${lin(1, al, "k")})(${lin(1, ga, "k")}) = ${beta * beta}`)}, so ${M(`${quad(1, q1, q0, "k")} = 0`)}.`,
          `${M(`${fac(r1, "k")}${fac(r2, "k")} = 0`)}, so k = ${num(r1)} or k = ${num(r2)} (neither makes the ${M("x^2")} coefficient zero).`,
        ],
        hint: "Write down a, b and c — two of them contain k. Set b² − 4ac = 0 and you get a quadratic in k.",
        traps: sameSet([-r1, -r2], [r1, r2]) ? [] : [listTrap([-r1, -r2], "Sign slip when solving the quadratic in k.")],
      };
    }
  }
  // "lin": x² + 2kx + (mk + n) = 0 → k² − mk − n = 0 with roots r1, r2
  let r1 = -2, r2 = 3;
  for (let i = 0; i < 100; i++) {
    r1 = rng.nonZero(-7, 7);
    r2 = rng.nonZero(-7, 7);
    if (r1 < r2 && r1 + r2 !== 0) break;
  }
  const m = r1 + r2, n = -r1 * r2;
  const eq = `${poly([[1, "x^2"], [2, "kx"], [m, "k"], [n, ""]])} = 0`;
  return {
    prompt: `The equation ${M(eq)} ${phr}. Find the possible values of k.`,
    answer: { type: "list", values: [r1, r2], display: `k = ${num(r1)} or k = ${num(r2)}` },
    solution: [
      `a = 1, b = 2k, c = ${M(lin(m, n, "k"))}. Equal roots ⇔ ${M("b^2 - 4ac = 0")}: ${M(`(2k)^2 - 4(${lin(m, n, "k")}) = 0`)}.`,
      `Divide by 4: ${M(`${quad(1, -m, -n, "k")} = 0`)}.`,
      `${M(`${fac(r1, "k")}${fac(r2, "k")} = 0`)}, so k = ${num(r1)} or k = ${num(r2)}.`,
    ],
    hint: "Identify a, b and c (c contains k), then set b² − 4ac = 0 — that's a quadratic in k.",
    traps: [listTrap([-r1, -r2], "Sign slip when solving the quadratic in k — check by substituting back.")],
  };
}

// ===========================================================================
// 10. Disguised quadratics (H+)
// ===========================================================================
function disguised(rng: Rng, tier: Tier): DrillItem {
  const kind = rng.pick(tier === 1 ? (["quartic", "root"] as const) : (["quartic", "root", "exp"] as const));
  if (kind === "quartic") {
    // x⁴ + Bx² + C = 0, u = x²
    const sq = [1, 4, 9, 16, 25, 36];
    let u1 = 1, u2 = 4;
    for (let i = 0; i < 100; i++) {
      u1 = rng.pick(sq);
      u2 = tier >= 2 && rng.bool(0.4) ? -rng.int(1, 9) : rng.pick(sq);
      if (u1 !== u2) break;
    }
    const B = -(u1 + u2), C = u1 * u2;
    const xs: number[] = [];
    const shows: string[] = [];
    for (const u of [u1, u2]) if (u > 0) {
      const r = Math.sqrt(u);
      xs.push(r, -r);
      shows.push(num(r), num(-r));
    }
    const neg = [u1, u2].find((u) => u < 0);
    return {
      prompt: `${rng.pick(["Solve", "Find all the real solutions of"])} ${M(`${poly([[1, "x^4"], [B, "x^2"], [C, ""]])} = 0`)}.`,
      answer: { type: "list", values: xs, display: orList(shows) },
      solution: [
        `Let ${M("u = x^2")}, so ${M("x^4 = u^2")}: ${M(`${quad(1, B, C, "u")} = 0`)}.`,
        `${M(`${fac(u1, "u")}${fac(u2, "u")} = 0`)}, so u = ${num(u1)} or u = ${num(u2)}.`,
        neg !== undefined ? `${M(`x^2 = ${neg}`)} has no real solutions — reject it. ${M(`x^2 = ${Math.max(u1, u2)}`)} gives ${M(`x = +- ${Math.sqrt(Math.max(u1, u2))}`)}.` : `${M(`x^2 = ${u1}`)} or ${M(`x^2 = ${u2}`)}, so ${M(`x = +- ${Math.sqrt(u1)}`)} or ${M(`x = +- ${Math.sqrt(u2)}`)}.`,
      ],
      hint: "Substitute u = x². Solve for u, then remember x² = u gives two values of x (if u > 0).",
      traps: [listTrap(xs.filter((x) => x > 0), "Don't forget the negative square roots: x² = 4 gives x = 2 or x = −2.")],
    };
  }
  if (kind === "root") {
    // x + B√x + C = 0, u = √x ≥ 0
    let u1 = 2, u2 = 3;
    for (let i = 0; i < 100; i++) {
      u1 = rng.int(1, 9);
      u2 = tier >= 2 && rng.bool(0.5) ? -rng.int(1, 9) : rng.int(1, 9);
      if (u1 !== u2) break;
    }
    const B = -(u1 + u2), C = u1 * u2;
    const xs = [u1, u2].filter((u) => u > 0).map((u) => u * u);
    const neg = [u1, u2].find((u) => u < 0);
    const traps: Trap[] = [];
    const us = [u1, u2].filter((u) => u > 0);
    if (!sameSet(us, xs)) traps.push(listTrap(us, "Those are the values of √x. You want x, so square them."));
    if (neg !== undefined) traps.push(listTrap([...xs, neg * neg], `√x can't be negative, so √x = ${num(neg)} is impossible — reject it. (Check: it doesn't satisfy the original equation.)`));
    return {
      prompt: `${rng.pick(["Solve", "Find all values of x for which"])} ${M(`${poly([[1, "x"], [B, "sqrt(x)"], [C, ""]])} = 0`)}.`,
      answer: { type: "list", values: xs, display: orList(xs.map(num)) },
      solution: [
        `Let ${M("u = sqrt(x)")}, so ${M("x = u^2")}: ${M(`${quad(1, B, C, "u")} = 0`)}.`,
        `${M(`${fac(u1, "u")}${fac(u2, "u")} = 0`)}, so u = ${num(u1)} or u = ${num(u2)}.`,
        neg !== undefined ? `${M("sqrt(x)")} can't be negative, so reject u = ${num(neg)}. ${M(`sqrt(x) = ${Math.max(u1, u2)}`)} gives x = ${xs[0]}.` : `${M(`sqrt(x) = ${u1}`)} gives x = ${u1 * u1}; ${M(`sqrt(x) = ${u2}`)} gives x = ${u2 * u2}.`,
      ],
      hint: "Notice x = (√x)². Let u = √x and you have a normal quadratic in u.",
      traps,
    };
  }
  // exponential: base^(2x) + B·base^x + C = 0 with u = base^x > 0
  const base = rng.pick([2, 2, 3]);
  const maxE = base === 2 ? 5 : 3;
  let e1 = 1, e2 = 2, neg = 0;
  for (let i = 0; i < 100; i++) {
    e1 = rng.int(0, maxE);
    e2 = rng.int(0, maxE);
    neg = tier === 3 && rng.bool(0.4) ? -rng.int(1, 6) : 0;
    if (neg !== 0 || e1 !== e2) break;
  }
  const u1 = base ** e1, u2 = neg !== 0 ? neg : base ** e2;
  const B = -(u1 + u2), C = u1 * u2;
  const sq = base * base;
  const lead = tier === 3 && rng.bool(0.5) ? `${sq}^x` : `${base}^(2x)`;
  const mid = B === 0 ? "" : ` ${B < 0 ? "-" : "+"} ${Math.abs(B) === 1 ? "" : `${Math.abs(B)} * `}${base}^x`;
  const eq = `${lead}${mid} ${C < 0 ? "-" : "+"} ${Math.abs(C)} = 0`;
  const xs = neg !== 0 ? [e1] : [e1, e2];
  const us = neg !== 0 ? [u1] : [u1, u2];
  const traps: Trap[] = [];
  if (!sameSet(us, xs)) traps.push(listTrap(us, `Those are the values of ${M(`${base}^x`)}. Now solve ${M(`${base}^x = ${u1}`)} for x.`));
  return {
    prompt: `Solve ${M(eq)}.`,
    answer: { type: "list", values: xs, display: orList(xs.map(num)) },
    solution: [
      `${lead === `${sq}^x` ? `${M(`${sq}^x = (${base}^2)^x = (${base}^x)^2`)}. ` : `${M(`${base}^(2x) = (${base}^x)^2`)}. `}Let ${M(`u = ${base}^x`)}: ${M(`${quad(1, B, C, "u")} = 0`)}.`,
      `${M(`${fac(u1, "u")}${fac(u2, "u")} = 0`)}, so u = ${num(u1)} or u = ${num(u2)}.`,
      neg !== 0
        ? `${M(`${base}^x`)} is always positive, so reject u = ${num(neg)}. ${M(`${base}^x = ${u1} = ${base}^${e1}`)}, so x = ${e1}.`
        : `${M(`${base}^x = ${u1} = ${base}^${e1}`)} gives x = ${e1}; ${M(`${base}^x = ${u2} = ${base}^${e2}`)} gives x = ${e2}.`,
    ],
    hint: `Spot that ${M(`${base}^(2x)`)} is the square of ${M(`${base}^x`)}. Substitute u = ${M(`${base}^x`)}.`,
    traps,
  };
}

// ===========================================================================
export const drills: Drill[] = [
  { id: `${TOPIC}.factorise-solve`, topicId: TOPIC, title: "Solve a quadratic by factorising", level: 1, guideRef: "solve-by-factorising", generate: factoriseSolve },
  { id: `${TOPIC}.discriminant`, topicId: TOPIC, title: "Use the discriminant to count the roots", level: 1, guideRef: "quadratic-formula", generate: discriminant },
  { id: `${TOPIC}.factorise-a-not-1`, topicId: TOPIC, title: "Solve by factorising when a ≠ 1", level: 2, guideRef: "solve-by-factorising", generate: factoriseANot1 },
  { id: `${TOPIC}.complete-square`, topicId: TOPIC, title: "Solve by completing the square (exact answers)", level: 2, guideRef: "solve-completing-square", generate: completeSquare },
  { id: `${TOPIC}.formula-3sf`, topicId: TOPIC, title: "Use the quadratic formula (answers to 3 s.f.)", level: 2, guideRef: "quadratic-formula", generate: formula3sf },
  { id: `${TOPIC}.area-problem`, topicId: TOPIC, title: "Form and solve a quadratic from a shape", level: 2, guideRef: "solve-by-factorising", generate: areaProblem },
  { id: `${TOPIC}.linear-quadratic`, topicId: TOPIC, title: "Solve a linear and a quadratic simultaneously", level: 3, guideRef: "linear-quadratic-simultaneous", generate: linearQuadratic },
  { id: `${TOPIC}.algebraic-fractions`, topicId: TOPIC, title: "Solve an equation with algebraic fractions", level: 3, guideRef: "algebraic-fraction-equations", generate: algebraicFractions },
  { id: `${TOPIC}.equal-roots`, topicId: TOPIC, title: "Find k so the equation has equal roots", level: 3, guideRef: "quadratic-formula", generate: equalRoots },
  { id: `${TOPIC}.disguised`, topicId: TOPIC, title: "Solve a disguised quadratic", level: 3, guideRef: "disguised-quadratics", generate: disguised },
];
