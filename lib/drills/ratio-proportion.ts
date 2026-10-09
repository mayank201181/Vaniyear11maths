// Procedural skill drills for "ratio-proportion" (Year 11, Edexcel 4MA1 Higher).
// Every value is built from whole numbers first (cents, tenths, minutes …) and
// rounded with exact integer / BigInt arithmetic, so answers carry no float noise.
import type { Drill, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { frac, gcd, lcm, num, big, clean, roundTo } from "./helpers.ts";

const TOPIC = "ratio-proportion";

const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara", "Kenji", "Olivia"] as const;

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

/** Inline maths markup. */
function M(s: string): string {
  return `{{${s}}}`;
}

/** "3 : 4 : 5" */
function rs(parts: number[]): string {
  return parts.map((p) => big(p)).join(" : ");
}

function hcfAll(xs: number[]): number {
  return xs.reduce((g, x) => gcd(g, x), 0);
}

function simplifyParts(xs: number[]): number[] {
  const g = hcfAll(xs) || 1;
  return xs.map((x) => x / g);
}

/** Are two ratios proportional (same direction)? */
function proportional(x: number[], y: number[]): boolean {
  return x.length === y.length && x.every((v, i) => Math.abs(v * y[0] - y[i] * x[0]) < 1e-9 * Math.max(1, Math.abs(v * y[0])));
}

function sum(xs: number[]): number {
  return xs.reduce((a, b) => a + b, 0);
}

function people(rng: Rng, k: number): string[] {
  return rng.shuffle(NAMES).slice(0, k);
}

function listAnd(xs: string[]): string {
  return xs.length < 2 ? xs.join("") : `${xs.slice(0, -1).join(", ")} and ${xs[xs.length - 1]}`;
}

/** Money from whole cents: 8000 → "$80", 1250 → "$12.50". */
function cash(cents: number): string {
  const c = Math.round(Math.abs(cents));
  const d = Math.floor(c / 100);
  const r = c % 100;
  return (cents < 0 ? "−" : "") + "$" + big(d) + (r ? "." + String(r).padStart(2, "0") : "");
}

/** k distinct numbers from 1..max with HCF 1. */
function coprimeSet(rng: Rng, k: number, max: number): number[] {
  for (let i = 0; i < 300; i++) {
    const xs = Array.from({ length: k }, () => rng.int(1, max));
    if (new Set(xs).size === k && hcfAll(xs) === 1) return xs;
  }
  return k === 2 ? [2, 3] : [2, 3, 5];
}

/** Round the positive rational N/D to dp decimal places (half up), exactly. */
function roundQ(N: number, D: number, dp: number): number {
  const f = 10n ** BigInt(dp);
  const n = BigInt(Math.round(N)), d = BigInt(Math.round(D));
  const q = (2n * n * f + d) / (2n * d);
  return clean(Number(q) / 10 ** dp);
}

/** Round the positive rational N/D to `sig` significant figures, exactly. */
function sigQ(N: number, D: number, sig = 3): number {
  const n = BigInt(Math.round(N)), d = BigInt(Math.round(D));
  let e = 0;
  if (n >= d) {
    while (n >= d * 10n ** BigInt(e + 1)) e++;
  } else {
    e = -1;
    while (n * 10n ** BigInt(-e) < d) e--;
  }
  const dp = sig - 1 - e;
  if (dp >= 0) return roundQ(N, D, dp);
  const f = 10n ** BigInt(-dp);
  const q = (2n * n + d * f) / (2n * d * f);
  return clean(Number(q * f));
}

/** Is N/D exactly equal to its 3 s.f. rounding? */
function exactSig(N: number, D: number, sig = 3): boolean {
  const r = sigQ(N, D, sig);
  return Math.abs(r * D - N) < 1e-9 * Math.max(1, Math.abs(N));
}

/** Does N/D terminate within dp decimal places? */
function exactDp(N: number, D: number, dp: number): boolean {
  return Math.round(N * 10 ** dp) % Math.round(D) === 0;
}

/** "= 52.3 (3 s.f.)" or "= 52.5" */
function eqSig(N: number, D: number, unit = ""): string {
  const r = sigQ(N, D);
  return exactSig(N, D) ? `= ${num(r)}${unit}` : `= ${num(clean(N / D, 7))}… ≈ ${num(r)}${unit} (3 s.f.)`;
}

/** Minutes → "2 hours 15 minutes" / "45 minutes" / "1 hour". */
function hm(min: number): string {
  const h = Math.floor(min / 60), m = min % 60;
  const hs = h ? `${h} hour${h === 1 ? "" : "s"}` : "";
  const ms = m ? `${m} minute${m === 1 ? "" : "s"}` : "";
  return [hs, ms].filter(Boolean).join(" ");
}

function numTrap(value: number, answer: number, feedback: string, out: Trap[]) {
  const dup = out.some((t) => t.spec.type === "number" && Math.abs(t.spec.value - value) < 1e-9);
  if (!dup && Number.isFinite(value) && value > 0 && Math.abs(value - answer) > 1e-6 * Math.max(1, Math.abs(answer))) {
    out.push({ spec: { type: "number", value: clean(value, 10) }, feedback });
  }
}

// ---------------------------------------------------------------------------
// Drills
// ---------------------------------------------------------------------------

interface UnitPair {
  s: string;
  b: string;
  f: number;
  noun: string;
}

const UNIT_PAIRS: UnitPair[] = [
  { s: "cm", b: "m", f: 100, noun: "two lengths of bamboo" },
  { s: "g", b: "kg", f: 1000, noun: "the masses of two bags of rice" },
  { s: "ml", b: "litres", f: 1000, noun: "two volumes of soya milk" },
  { s: "minutes", b: "hours", f: 60, noun: "two revision sessions" },
  { s: "m", b: "km", f: 1000, noun: "two walking routes" },
];

export const drills: Drill[] = [
  // 1 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.simplify-ratio`,
    topicId: TOPIC,
    title: "Simplify a ratio (and write it as 1 : n)",
    level: 1,
    guideRef: "ratio-basics",
    generate(rng, tier) {
      const kind = rng.pick(
        tier === 1 ? (["int", "int", "unit", "units"] as const) : tier === 2 ? (["int", "units", "dec", "frac", "unit"] as const) : (["int", "units", "dec", "frac", "frac", "unit"] as const),
      );

      if (kind === "unit") {
        // a : b → 1 : n with n terminating.
        let a = 4, b = 10;
        for (let i = 0; i < 200; i++) {
          a = rng.pick(tier === 1 ? [2, 4, 5, 10] : [4, 5, 8, 20, 25, 40]);
          b = rng.int(a + 1, tier === 1 ? 6 * a : 9 * a);
          if (b % a !== 0 && exactDp(b, a, 3)) break;
        }
        const n = clean(b / a);
        const A = rng.pick(NAMES);
        const ctx = rng.pick([
          `Write the ratio ${rs([a, b])} in the form 1 : n.`,
          `On a school trip there are ${a} teachers and ${b} students. Write the ratio teachers : students in the form 1 : n.`,
          `${A} mixes ${a * 10} ml of cordial with ${b * 10} ml of water. Write the ratio cordial : water in the form 1 : n.`,
          `A model is built to scale: ${a} cm on the model represents ${b} cm on the real object. Write the ratio model : real in the form 1 : n.`,
        ]);
        const traps: Trap[] = [];
        if (exactDp(a, b, 4)) numTrap(clean(a / b), n, "You divided the wrong way round. Divide both parts by the FIRST part so it becomes 1.", traps);
        return {
          prompt: `${ctx} Give the value of n.`,
          answer: { type: "number", value: n, display: `1 : ${num(n)}` },
          solution: [`To make the first part 1, divide both parts by ${a}.`, `${rs([a, b])} = ${M(`${a}/${a}`)} : ${M(`${b}/${a}`)} = 1 : ${num(n)}.`, `So n = ${num(n)}.`],
          hint: "What do you divide the first part by to make it 1? Do the same to the other part.",
          traps,
        };
      }

      if (kind === "units") {
        let u = UNIT_PAIRS[0], p = 2, q = 3, k = 10;
        for (let i = 0; i < 400; i++) {
          u = rng.pick(UNIT_PAIRS);
          [p, q] = coprimeSet(rng, 2, tier === 1 ? 9 : 15);
          k = rng.int(2, 200);
          const bigSmall = q * k; // big quantity, measured in small units
          if ((bigSmall * 100) % u.f !== 0) continue; // at most 2 dp in big units
          if (bigSmall < u.f / 5 || p * k > 3 * u.f) continue;
          if (tier === 1 && (bigSmall * 10) % u.f !== 0) continue;
          break;
        }
        const smallVal = p * k, bigVal = clean((q * k) / u.f);
        const smallFirst = rng.bool();
        const ans = smallFirst ? [p, q] : [q, p];
        const shown = smallFirst ? `${big(smallVal)} ${u.s} : ${num(bigVal)} ${u.b}` : `${num(bigVal)} ${u.b} : ${big(smallVal)} ${u.s}`;
        const raw = smallFirst ? [smallVal, bigVal] : [bigVal, smallVal];
        const traps: Trap[] = [];
        if (!proportional(raw, ans)) traps.push({ spec: { type: "ratio", parts: raw }, feedback: `The units are different. Convert both to ${u.s} before simplifying.` });
        return {
          prompt: `${rng.pick(["Write the ratio", "Simplify the ratio", `Here are ${u.noun}. Write`])} ${shown} in its simplest form.`,
          answer: { type: "ratio", parts: ans, simplest: true },
          solution: [
            `Make the units the same: ${num(bigVal)} ${u.b} = ${num(bigVal)} × ${u.f} = ${big(q * k)} ${u.s}.`,
            `The ratio is ${rs(smallFirst ? [smallVal, q * k] : [q * k, smallVal])}.`,
            `Divide both parts by the HCF, ${k}: ${rs(ans)}.`,
          ],
          hint: "A ratio compares like with like — put both quantities in the same unit first.",
          traps,
        };
      }

      if (kind === "dec") {
        let p = 3, q = 2, k = 4, scale = 10;
        for (let i = 0; i < 300; i++) {
          [p, q] = coprimeSet(rng, 2, 12);
          scale = tier === 3 && rng.bool() ? 100 : 10;
          k = rng.int(2, scale === 10 ? 9 : 40);
          if ((p * k) % scale !== 0 || (q * k) % scale !== 0) break;
        }
        const a = clean((p * k) / scale), b = clean((q * k) / scale);
        return {
          prompt: `Write the ratio ${num(a)} : ${num(b)} in its simplest form, using whole numbers.`,
          answer: { type: "ratio", parts: [p, q], simplest: true },
          solution: [`Multiply both parts by ${scale} to clear the decimals: ${rs([p * k, q * k])}.`, `The HCF of ${p * k} and ${q * k} is ${k}. Divide: ${rs([p, q])}.`],
          hint: "Multiply both parts by 10 (or 100) to get whole numbers, then divide by the HCF.",
        };
      }

      if (kind === "frac") {
        let a = 1, b = 2, c = 2, d = 3, res = [3, 4];
        for (let i = 0; i < 300; i++) {
          b = rng.int(2, tier === 3 ? 12 : 9);
          d = rng.int(2, tier === 3 ? 12 : 9);
          if (b === d) continue;
          a = rng.int(1, tier === 3 ? 2 * b : b - 1);
          c = rng.int(1, tier === 3 ? 2 * d : d - 1);
          if (gcd(a, b) !== 1 || gcd(c, d) !== 1 || a * d === c * b) continue;
          const L = lcm(b, d);
          res = simplifyParts([(a * L) / b, (c * L) / d]);
          if (Math.max(...res) <= 40) break;
        }
        const L = lcm(b, d);
        const f1 = frac(a, b, { mixed: true }), f2 = frac(c, d, { mixed: true });
        const imp = a > b || c > d;
        return {
          prompt: `Write the ratio ${f1} : ${f2} in its simplest form, using whole numbers.`,
          answer: { type: "ratio", parts: res, simplest: true },
          solution: [
            ...(imp ? [`As improper fractions: ${frac(a, b)} : ${frac(c, d)}.`] : []),
            `Multiply both parts by the LCM of the denominators, ${L}: ${rs([(a * L) / b, (c * L) / d])}.`,
            `Simplify: ${rs(res)}.`,
          ],
          hint: "Multiply both fractions by a number that clears both denominators.",
        };
      }

      // int
      const k3 = tier === 1 ? 2 : rng.pick([2, 3]);
      let base = [2, 3], k = 4;
      for (let i = 0; i < 100; i++) {
        base = coprimeSet(rng, k3, tier === 1 ? 9 : 12);
        k = rng.int(2, tier === 1 ? 12 : tier === 2 ? 25 : 45);
        if (Math.max(...base) * k <= (tier === 1 ? 100 : 600)) break;
      }
      const shown = base.map((x) => x * k);
      const names = people(rng, 3);
      const ctx =
        k3 === 2
          ? rng.pick([
              `Write the ratio ${rs(shown)} in its simplest form.`,
              `A CCA has ${shown[0]} Year 10 members and ${shown[1]} Year 11 members. Write the ratio Year 10 : Year 11 in its simplest form.`,
              `${names[0]} has ${shown[0]} stickers and ${names[1]} has ${shown[1]}. Write the ratio of ${names[0]}'s stickers to ${names[1]}'s stickers in its simplest form.`,
            ])
          : rng.pick([
              `Write the ratio ${rs(shown)} in its simplest form.`,
              `A hawker stall sells ${shown[0]} plates of vegetable fried rice, ${shown[1]} bowls of laksa (vegetarian) and ${shown[2]} portions of roti prata. Write the ratio rice : laksa : prata in its simplest form.`,
              `${listAnd(names)} collect ${shown.join(", ").replace(/, (\d+)$/, " and $1")} shells. Write the ratio ${names.join(" : ")} in its simplest form.`,
            ]);
      return {
        prompt: ctx,
        answer: { type: "ratio", parts: base, simplest: true },
        solution: [`The highest common factor of ${shown.join(", ")} is ${k}.`, `Divide every part by ${k}: ${rs(shown)} = ${rs(base)}.`],
        hint: "Find the HCF of all the parts and divide every part by it.",
      };
    },
  },

  // 2 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.share-in-ratio`,
    topicId: TOPIC,
    title: "Share in a ratio (given the total, a difference or one share)",
    level: 1,
    guideRef: "ratio-basics",
    generate(rng, tier) {
      const kind = rng.pick(tier === 1 ? (["total", "total", "one"] as const) : (["total", "diff", "one"] as const));
      const m = tier === 1 ? 2 : rng.pick([2, 3]);
      const parts = coprimeSet(rng, m, tier === 1 ? 7 : 11);
      const names = people(rng, m);
      // value of one part, in cents
      const u = tier === 1 ? rng.int(2, 30) * 100 : tier === 2 ? rng.int(4, 80) * 50 : rng.int(10, 400) * 25;
      const shares = parts.map((p) => p * u);
      const T = sum(shares);

      if (kind === "total") {
        const money = rng.bool(0.7);
        if (money || u % 100 !== 0) {
          const ctx = rng.pick([
            `${listAnd(names)} share ${cash(T)} in the ratio ${rs(parts)}.`,
            `${listAnd(names)} win a prize of ${cash(T)} in a quiz and split it in the ratio ${rs(parts)}.`,
            `${listAnd(names)} pay ${cash(T)} for a group gift in the ratio ${rs(parts)}.`,
          ]);
          const traps: Trap[] = [];
          const rev = [...shares].reverse();
          if (rev.some((v, i) => v !== shares[i])) traps.push({ spec: { type: "list", values: rev.map((c) => c / 100), ordered: true }, feedback: "Right amounts, wrong order — match each share to its part of the ratio." });
          return {
            prompt: `${ctx} Work out how much each person gets. Give the amounts in dollars, in the order ${names.join(", ")}.`,
            answer: { type: "list", values: shares.map((c) => c / 100), ordered: true, display: shares.map(cash).join(", ") },
            solution: [`Total number of parts: ${parts.join(" + ")} = ${sum(parts)}.`, `One part: ${cash(T)} ÷ ${sum(parts)} = ${cash(u)}.`, `Shares: ${parts.map((p, i) => `${names[i]} ${p} × ${cash(u)} = ${cash(shares[i])}`).join("; ")}.`],
            hint: "Add the parts of the ratio to find how many equal parts the total is split into.",
            traps,
          };
        }
        const n = u / 100;
        const sh = parts.map((p) => p * n);
        const subj = m === 2 ? ["French", "Spanish"] : ["French", "Spanish", "Mandarin"];
        return {
          prompt: `There are ${sum(sh)} students in Year 11. Each studies one of ${listAnd(subj)}, in the ratio ${subj.join(" : ")} = ${rs(parts)}. How many study each language? Give the numbers in the order ${subj.join(", ")}.`,
          answer: { type: "list", values: sh, ordered: true },
          solution: [`Total parts: ${sum(parts)}.`, `One part: ${sum(sh)} ÷ ${sum(parts)} = ${n} students.`, `${subj.map((s, i) => `${s}: ${parts[i]} × ${n} = ${sh[i]}`).join("; ")}.`],
          hint: "How many students make up one part of the ratio?",
        };
      }

      if (kind === "diff") {
        // Two people: B has more than A.
        let [a, b] = coprimeSet(rng, 2, 11).sort((x, y) => x - y);
        if (a === b) b = a + 1;
        const [A, B] = people(rng, 2);
        const d = (b - a) * u;
        const ask = rng.pick(["total", "A", "B"] as const);
        const ans = ask === "total" ? (a + b) * u : ask === "A" ? a * u : b * u;
        const askText = ask === "total" ? "How much do they have altogether?" : `How much does ${ask === "A" ? A : B} have?`;
        const traps: Trap[] = [];
        numTrap(u / 100, ans / 100, `That is the value of ONE part. Now multiply by the number of parts you need.`, traps);
        return {
          prompt: `The ratio of ${A}'s savings to ${B}'s savings is ${rs([a, b])}. ${B} has ${cash(d)} more than ${A}. ${askText}`,
          answer: { type: "number", value: ans / 100, display: cash(ans) },
          solution: [`The difference in parts is ${b} − ${a} = ${b - a}.`, `${b - a} part${b - a === 1 ? "" : "s"} = ${cash(d)}, so one part = ${cash(u)}.`, `${ask === "total" ? `Total = ${a + b}` : ask === "A" ? `${A} = ${a}` : `${B} = ${b}`} × ${cash(u)} = ${cash(ans)}.`],
          hint: "The difference in money matches the difference in the number of parts.",
          traps,
        };
      }

      // one share known
      const known = rng.int(0, m - 1);
      let target = rng.int(0, m);
      if (target === known) target = m; // m means "total"
      const items = m === 2 ? ["white", "blue"] : ["white", "blue", "yellow"];
      const mlU = (u / 100) * (tier === 1 ? 10 : 5);
      const ml = parts.map((p) => p * mlU);
      const ans = target === m ? sum(ml) : ml[target];
      const traps: Trap[] = [];
      numTrap(ml[known] * (target === m ? sum(parts) : parts[target]), ans, `Find ONE part first: divide ${big(ml[known])} ml by ${parts[known]}.`, traps);
      return {
        prompt: `A paint colour is made by mixing ${listAnd(items)} paint in the ratio ${rs(parts)}. ${big(ml[known])} ml of ${items[known]} paint is used. How much ${target === m ? "paint is made altogether" : `${items[target]} paint is needed`}? Give your answer in ml.`,
        answer: { type: "number", value: ans },
        solution: [`${cap(items[known])} is ${parts[known]} part${parts[known] === 1 ? "" : "s"}: one part = ${big(ml[known])} ÷ ${parts[known]} = ${big(mlU)} ml.`, target === m ? `Total parts: ${sum(parts)}, so the total is ${sum(parts)} × ${big(mlU)} = ${big(ans)} ml.` : `${cap(items[target])} is ${plural(parts[target], "part")}: ${parts[target]} × ${big(mlU)} = ${big(ans)} ml.`],
        hint: "Use the share you know to find the size of one part.",
        traps,
      };
    },
  },

  // 3 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.combine-ratios`,
    topicId: TOPIC,
    title: "Combine two ratios a : b and b : c",
    level: 2,
    guideRef: "ratio-basics",
    generate(rng, tier) {
      let a = 2, b = 3, c = 4, d = 5;
      for (let i = 0; i < 300; i++) {
        [a, b] = coprimeSet(rng, 2, tier === 1 ? 7 : 11);
        [c, d] = coprimeSet(rng, 2, tier === 1 ? 7 : 11);
        if (b !== c && lcm(b, c) <= (tier === 1 ? 24 : 60)) break;
      }
      const L = lcm(b, c);
      const three = simplifyParts([(a * L) / b, L, (d * L) / c]);
      const ctxs = [
        { x: "roses", y: "tulips", z: "daisies", where: "In a garden" },
        { x: "red counters", y: "blue counters", z: "green counters", where: "In a bag" },
        { x: "Year 9 students", y: "Year 10 students", z: "Year 11 students", where: "In a chess club" },
        { x: "paperbacks", y: "hardbacks", z: "magazines", where: "On a shelf" },
      ];
      const t = rng.pick(ctxs);
      const askAC = tier > 1 && rng.bool(0.4);
      const useFrac = tier === 3 && rng.bool(0.5) && a < b;
      const first = useFrac
        ? `the number of ${t.x} is ${frac(a, b)} of the number of ${t.y}`
        : `the ratio ${t.x} : ${t.y} is ${rs([a, b])}`;
      const ans = askAC ? simplifyParts([three[0], three[2]]) : three;
      const traps: Trap[] = [];
      const naive = askAC ? [a, d] : [a, b, d];
      if (!proportional(naive, ans)) traps.push({ spec: { type: "ratio", parts: naive }, feedback: `The ${t.y} must be the SAME number of parts in both ratios. Scale them so ${t.y} = ${L} first.` });
      return {
        prompt: `${t.where}, ${first}, and the ratio ${t.y} : ${t.z} is ${rs([c, d])}. Find the ratio ${askAC ? `${t.x} : ${t.z}` : `${t.x} : ${t.y} : ${t.z}`} in its simplest form.`,
        answer: { type: "ratio", parts: ans, simplest: true },
        solution: [
          ...(useFrac ? [`"${frac(a, b)} of" means ${t.x} : ${t.y} = ${rs([a, b])}.`] : []),
          `The ${t.y} are ${plural(b, "part")} in one ratio and ${plural(c, "part")} in the other. Make them both ${L} (the LCM).`,
          `${rs([a, b])} = ${rs([(a * L) / b, L])} and ${rs([c, d])} = ${rs([L, (d * L) / c])}.`,
          `So ${t.x} : ${t.y} : ${t.z} = ${rs([(a * L) / b, L, (d * L) / c])}${hcfAll([(a * L) / b, L, (d * L) / c]) > 1 ? ` = ${rs(three)}` : ""}.`,
          ...(askAC ? [`Leave out the ${t.y}: ${t.x} : ${t.z} = ${rs(ans)}.`] : []),
        ],
        hint: "Which quantity appears in both ratios? Make its number of parts the same in both.",
        traps,
      };
    },
  },

  // 4 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.context-ratio`,
    topicId: TOPIC,
    title: "Ratio in context: maps, exchange rates, recipes, best buys, mixtures",
    level: 2,
    guideRef: "ratio-problems",
    generate(rng, tier) {
      const kind = rng.pick(tier === 1 ? (["map", "fx", "recipe", "best"] as const) : (["map", "fx", "recipe", "best", "mix"] as const));
      const name = rng.pick(NAMES);

      if (kind === "map") {
        const s = rng.pick(tier === 1 ? [10000, 20000, 25000, 50000, 100000] : [25000, 40000, 50000, 75000, 200000, 250000, 500000]);
        const toReal = rng.bool(0.6);
        if (toReal) {
          let mt = 30;
          for (let i = 0; i < 100; i++) {
            mt = tier === 1 ? rng.int(2, 20) * 5 : rng.int(12, 250); // tenths of a cm
            if (exactDp(mt * s, 1e6, 3)) break;
          }
          const km = clean((mt * s) / 1e6);
          const traps: Trap[] = [];
          numTrap(clean((mt * s) / 1000), km, "That's in metres — divide by 1000 to get kilometres.", traps);
          numTrap(clean((mt * s) / 10), km, "That's in centimetres — there are 100 000 cm in 1 km.", traps);
          return {
            prompt: `A map has a scale of 1 : ${big(s)}. On the map, ${name}'s route to the MRT station is ${num(mt / 10)} cm long. Work out the real length of the route in kilometres.`,
            answer: { type: "number", value: km },
            solution: [`Real length = ${num(mt / 10)} × ${big(s)} = ${big(clean((mt * s) / 10))} cm.`, `1 km = 100 000 cm, so ${big(clean((mt * s) / 10))} ÷ 100 000 = ${num(km)} km.`],
            hint: "1 cm on the map is the scale number of centimetres in real life. Then convert cm → km.",
            traps,
          };
        }
        let km = 3, mapCm = 6;
        for (let i = 0; i < 200; i++) {
          km = tier === 1 ? rng.int(1, 20) : rng.int(3, 120) / 2;
          if (exactDp(km * 1e5, s, 1)) {
            mapCm = clean((km * 1e5) / s);
            if (mapCm >= 1 && mapCm <= 40) break;
          }
        }
        return {
          prompt: `A map has a scale of 1 : ${big(s)}. Two villages are ${num(km)} km apart in real life. How far apart are they on the map? Give your answer in centimetres.`,
          answer: { type: "number", value: mapCm },
          solution: [`${num(km)} km = ${num(km)} × 100 000 = ${big(km * 1e5)} cm.`, `Map distance = ${big(km * 1e5)} ÷ ${big(s)} = ${num(mapCm)} cm.`],
          hint: "Convert the real distance to cm, then divide by the scale number.",
        };
      }

      if (kind === "fx") {
        const rates = [
          { cur: "euros", sym: "€", r: 68, dp: 2 },
          { cur: "pounds", sym: "£", r: 58, dp: 2 },
          { cur: "US dollars", sym: "US$", r: 75, dp: 2 },
          { cur: "Malaysian ringgit", sym: "RM", r: 340, dp: 2 },
          { cur: "Japanese yen", sym: "¥", r: 11300, dp: 0 },
          { cur: "Indian rupees", sym: "₹", r: 6400, dp: 0 },
          { cur: "Australian dollars", sym: "A$", r: 115, dp: 2 },
          { cur: "Thai baht", sym: "฿", r: 2550, dp: 0 },
        ];
        const R = rng.pick(rates);
        const rateText = num(R.r / 100);
        const toForeign = rng.bool();
        if (toForeign) {
          const A = tier === 1 ? rng.int(2, 40) * 10 : rng.int(15, 900);
          const N = A * R.r, D = 100;
          const ans = R.dp === 0 ? roundQ(N, D, 0) : roundQ(N, D, 2);
          const traps: Trap[] = [];
          numTrap(roundQ(A * 100, R.r, 2), ans, `You divided by the rate. Each S$1 is worth ${rateText} ${R.cur}, so you get MORE ${R.cur} — multiply.`, traps);
          return {
            prompt: `The exchange rate is S$1 = ${R.sym}${rateText}. ${name} changes S$${big(A)} into ${R.cur}. How many ${R.cur} does ${name} get?${R.dp === 0 ? " Give your answer to the nearest whole number." : ""}`,
            answer: { type: "number", value: ans },
            solution: [`Each S$1 gives ${R.sym}${rateText}.`, `${big(A)} × ${rateText} = ${R.sym}${big(clean(N / D))}${clean(N / D) !== ans ? ` ≈ ${R.sym}${big(ans)}` : ""}.`],
            hint: "Will you get more or fewer of the other currency than you put in? Multiply or divide accordingly.",
            traps,
          };
        }
        const F = R.dp === 0 ? rng.int(5, 200) * 100 : tier === 1 ? rng.int(2, 40) * 10 : rng.int(12, 600);
        const ans = roundQ(F * 100 * 100, R.r * 100, 2);
        const traps: Trap[] = [];
        numTrap(roundQ(F * R.r, 100, 2), ans, `You multiplied by the rate. To go back to Singapore dollars, divide by ${rateText}.`, traps);
        return {
          prompt: `The exchange rate is S$1 = ${R.sym}${rateText}. A ${rng.pick(["jacket", "pair of trainers", "concert ticket", "set of books"])} costs ${R.sym}${big(F)}. Work out its cost in Singapore dollars. Give your answer to the nearest cent.`,
          answer: { type: "number", value: ans, display: `S$${ans.toFixed(2)}` },
          solution: [`Number of S$ = ${R.sym}${big(F)} ÷ ${rateText}.`, `= ${num(clean((F * 100) / R.r, 9))}… ≈ S$${ans.toFixed(2)}.`],
          hint: "S$1 buys the rate's worth of foreign money. How many lots of the rate fit into the price?",
          traps,
        };
      }

      if (kind === "recipe") {
        const ingr = [
          { n: "red lentils", u: "g" },
          { n: "basmati rice", u: "g" },
          { n: "coconut milk", u: "ml" },
          { n: "plain flour", u: "g" },
          { n: "chickpeas", u: "g" },
          { n: "vegetable stock", u: "ml" },
        ];
        if (tier >= 2 && rng.bool(0.5)) {
          // Max number of people with two ingredients.
          const [i1, i2] = rng.shuffle(ingr).slice(0, 2);
          let p = 4, q1 = 300, q2 = 200, h1 = 1000, h2 = 900, best = 1, lim1 = 1, lim2 = 1;
          for (let i = 0; i < 300; i++) {
            p = rng.pick([4, 6, 8]);
            q1 = rng.int(3, 16) * 25;
            q2 = rng.int(2, 16) * 25;
            h1 = rng.int(8, 60) * 50;
            h2 = rng.int(8, 60) * 50;
            lim1 = Math.floor((h1 * p) / q1);
            lim2 = Math.floor((h2 * p) / q2);
            best = Math.min(lim1, lim2);
            if (exactDp(q1, p, 2) && exactDp(q2, p, 2) && lim1 !== lim2 && best >= 3 && best <= 40 && Math.abs(lim1 - lim2) >= 2) break;
          }
          const traps: Trap[] = [];
          numTrap(Math.max(lim1, lim2), best, "That ingredient would run out first for the other one — the SMALLER limit decides.", traps);
          return {
            prompt: `A dhal recipe for ${p} people uses ${q1} ${i1.u} of ${i1.n} and ${q2} ${i2.u} of ${i2.n}. ${name} has ${big(h1)} ${i1.u} of ${i1.n} and ${big(h2)} ${i2.u} of ${i2.n}, and plenty of everything else. What is the greatest number of people ${name} can make the dhal for?`,
            answer: { type: "number", value: best },
            solution: [
              `Per person: ${M(`${q1}/${p}`)} = ${num(clean(q1 / p))} ${i1.u} of ${i1.n} and ${M(`${q2}/${p}`)} = ${num(clean(q2 / p))} ${i2.u} of ${i2.n}.`,
              `${i1.n}: ${big(h1)} ÷ ${num(clean(q1 / p))} = ${num(roundTo((h1 * p) / q1, 2))}${(h1 * p) % q1 ? "…" : ""} → ${lim1} people.`,
              `${i2.n}: ${big(h2)} ÷ ${num(clean(q2 / p))} = ${num(roundTo((h2 * p) / q2, 2))}${(h2 * p) % q2 ? "…" : ""} → ${lim2} people.`,
              `The smaller limit wins: ${best} people (round DOWN — you can't feed part of a person).`,
            ],
            hint: "Work out how many people each ingredient could feed on its own. Which runs out first?",
            traps,
          };
        }
        const it = rng.pick(ingr);
        let p = 4, p2 = 6, q = 300;
        for (let i = 0; i < 200; i++) {
          p = rng.pick([2, 3, 4, 5, 6, 8]);
          p2 = rng.int(2, tier === 1 ? 12 : 30);
          q = rng.int(2, 24) * (tier === 1 ? 50 : 15);
          if (p2 !== p && q % p === 0) break;
        }
        const ans = (q * p2) / p;
        const traps: Trap[] = [];
        numTrap(q + (p2 - p), ans, "Adding the extra number of people doesn't scale the amount. Find the amount for ONE person first.", traps);
        return {
          prompt: `A recipe for ${p} people uses ${q} ${it.u} of ${it.n}. How much ${it.n} is needed for ${p2} people? Give your answer in ${it.u}.`,
          answer: { type: "number", value: ans },
          solution: [`For 1 person: ${q} ÷ ${p} = ${num(clean(q / p))} ${it.u}.`, `For ${p2} people: ${num(clean(q / p))} × ${p2} = ${big(ans)} ${it.u}.`],
          hint: "Find the amount for one person (unitary method), then multiply.",
          traps,
        };
      }

      if (kind === "best") {
        const goods = [
          { n: "rice", u: "g" },
          { n: "oat milk", u: "ml" },
          { n: "muesli", u: "g" },
          { n: "laundry liquid", u: "ml" },
          { n: "peanut butter", u: "g" },
        ];
        const g = rng.pick(goods);
        const sizes = [200, 250, 300, 400, 500, 600, 750, 800, 1000, 1200, 1500, 2000];
        let s1 = 500, s2 = 1000, c1 = 40, c2 = 35;
        for (let i = 0; i < 400; i++) {
          [s1, s2] = rng.shuffle(sizes).slice(0, 2);
          c1 = rng.int(20, tier === 1 ? 90 : 160); // cents per 100 units
          c2 = c1 + rng.pick([-6, -5, -4, -3, -2, 2, 3, 4, 5, 6]) * (tier === 1 ? 2 : 1);
          if (c2 > 5 && (s1 * c1) % 100 === 0 && (s2 * c2) % 100 === 0 && s1 !== s2) break;
        }
        const pr1 = (s1 * c1) / 100, pr2 = (s2 * c2) / 100; // cents
        const better = Math.min(c1, c2), worse = Math.max(c1, c2);
        const traps: Trap[] = [];
        numTrap(worse / 100, better / 100, "That is the cost per 100 of the WORSE deal. The better value pack is the one that costs less per 100.", traps);
        return {
          prompt: `A shop sells ${g.n} in two sizes: ${big(s1)} ${g.u} for ${cash(pr1)} and ${big(s2)} ${g.u} for ${cash(pr2)}. Find the cost of 100 ${g.u} in the pack that is better value. Give your answer in dollars.`,
          answer: { type: "number", value: better / 100, display: cash(better) },
          solution: [
            `Pack A: ${cash(pr1)} ÷ ${clean(s1 / 100)} = ${cash(c1)} per 100 ${g.u}.`,
            `Pack B: ${cash(pr2)} ÷ ${clean(s2 / 100)} = ${cash(c2)} per 100 ${g.u}.`,
            `The ${big(c1 < c2 ? s1 : s2)} ${g.u} pack is better value at ${cash(better)} per 100 ${g.u}.`,
          ],
          hint: "Compare like with like: work out the price of the same amount (100 units) for each pack.",
          traps,
        };
      }

      // mix: two drinks combined
      let a1 = 1, b1 = 4, a2 = 2, b2 = 3, V1 = 500, V2 = 300, conc = 1, wat = 1;
      for (let i = 0; i < 300; i++) {
        [a1, b1] = coprimeSet(rng, 2, 9);
        [a2, b2] = coprimeSet(rng, 2, 9);
        if (a1 * b2 === a2 * b1) continue;
        V1 = (a1 + b1) * rng.int(2, 12) * 10;
        V2 = (a2 + b2) * rng.int(2, 12) * 10;
        if (V1 > 1500 || V2 > 1500) continue;
        conc = (V1 * a1) / (a1 + b1) + (V2 * a2) / (a2 + b2);
        wat = V1 + V2 - conc;
        const [x, y] = simplifyParts([conc, wat]);
        if (x <= 60 && y <= 60 && !proportional([a1 + a2, b1 + b2], [x, y])) break;
      }
      const ans = simplifyParts([conc, wat]);
      const traps: Trap[] = [];
      if (!proportional([a1 + a2, b1 + b2], ans)) traps.push({ spec: { type: "ratio", parts: [a1 + a2, b1 + b2] }, feedback: "You can't just add the ratios — the jugs hold different amounts. Find the actual ml of concentrate and water in each." });
      return {
        prompt: `Jug A holds ${V1} ml of squash mixed as concentrate : water = ${rs([a1, b1])}. Jug B holds ${V2} ml mixed as ${rs([a2, b2])}. ${name} pours both jugs into one bowl. Find the ratio concentrate : water in the bowl, in its simplest form.`,
        answer: { type: "ratio", parts: ans, simplest: true },
        solution: [
          `Jug A: concentrate = ${M(`${a1}/${a1 + b1}`)} × ${V1} = ${num((V1 * a1) / (a1 + b1))} ml, water = ${num((V1 * b1) / (a1 + b1))} ml.`,
          `Jug B: concentrate = ${M(`${a2}/${a2 + b2}`)} × ${V2} = ${num((V2 * a2) / (a2 + b2))} ml, water = ${num((V2 * b2) / (a2 + b2))} ml.`,
          `Total: ${num(conc)} : ${num(wat)} = ${rs(ans)}.`,
        ],
        hint: "Turn each ratio into actual amounts of concentrate and water, then add.",
        traps,
      };
    },
  },

  // 5 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.ratio-change`,
    topicId: TOPIC,
    title: "Ratio changes after a transfer",
    level: 3,
    guideRef: "ratio-problems",
    generate(rng, tier) {
      const transfer = rng.bool(0.55);
      const [A, B] = people(rng, 2);
      if (transfer) {
        let a = 3, b = 2, k = 10, t = 5, c = 1, d = 1;
        for (let i = 0; i < 500; i++) {
          [a, b] = coprimeSet(rng, 2, tier === 1 ? 7 : 9);
          k = rng.int(2, tier === 1 ? 12 : 30);
          t = rng.int(1, a * k - 1);
          [c, d] = simplifyParts([a * k - t, b * k + t]);
          if (c <= (tier === 1 ? 9 : 15) && d <= (tier === 1 ? 9 : 15) && c * b !== a * d) break;
        }
        const money = rng.bool(0.5);
        const what = money ? "dollars" : rng.pick(["stickers", "marbles", "trading cards"]);
        const amt = (v: number) => (money ? `$${big(v)}` : `${big(v)} ${what}`);
        const ask = tier === 1 ? "A" : rng.pick(["A", "B", "total"] as const);
        const ans = ask === "A" ? a * k : ask === "B" ? b * k : (a + b) * k;
        const traps: Trap[] = [];
        numTrap(k, ans, "That's the value of x (one part) — multiply by the number of parts.", traps);
        numTrap(ask === "A" ? b * k : a * k, ans, `Check whose amount the question asks for.`, traps);
        return {
          prompt: `${A} and ${B} have ${money ? "money" : what} in the ratio ${rs([a, b])}. ${A} gives ${amt(t)} to ${B}. The ratio is now ${rs([c, d])}. How ${money ? "much money" : "many " + what} ${ask === "total" ? "do they have altogether" : `did ${ask === "A" ? A : B} have at the start`}?`,
          answer: { type: "number", value: ans },
          solution: [
            `Let ${A} = ${cx(a)} and ${B} = ${cx(b)}. The total stays the same.`,
            `After: ${M(`(${cx(a)} - ${t}) / (${cx(b)} + ${t}) = ${c}/${d}`)}, so ${d}(${cx(a)} − ${t}) = ${c}(${cx(b)} + ${t}).`,
            `${cx(d * a)} − ${d * t} = ${cx(c * b)} + ${c * t} → ${cx(d * a - c * b)} = ${c * t + d * t} → x = ${k}.`,
            `${ask === "A" ? `${A} had ${a} × ${k}` : ask === "B" ? `${B} had ${b} × ${k}` : `Total = ${a + b} × ${k}`} = ${amt(ans)}.`,
          ],
          hint: "Write the starting amounts as multiples of x (like 3x and 2x), then write an equation for the new ratio.",
          traps,
        };
      }
      // add counters of one colour
      let a = 3, b = 5, k = 6, t = 4, c = 1, d = 1;
      const addRed = rng.bool();
      for (let i = 0; i < 500; i++) {
        [a, b] = coprimeSet(rng, 2, tier === 1 ? 7 : 9);
        k = rng.int(2, tier === 1 ? 10 : 20);
        t = rng.int(2, tier === 1 ? 20 : 40);
        [c, d] = simplifyParts(addRed ? [a * k + t, b * k] : [a * k, b * k + t]);
        if (c <= (tier === 1 ? 9 : 15) && d <= (tier === 1 ? 9 : 15) && c * b !== a * d) break;
      }
      const askRed = rng.bool();
      const ans = askRed ? a * k : b * k;
      const traps: Trap[] = [];
      numTrap(k, ans, "That's one part (x). Multiply by the number of parts.", traps);
      numTrap(askRed ? a * k + (addRed ? t : 0) : b * k + (addRed ? 0 : t), ans, "That's the number AFTER the extra counters were added — the question asks about the start.", traps);
      return {
        prompt: `A bag contains red and blue counters in the ratio ${rs([a, b])}. ${B} adds ${t} ${addRed ? "red" : "blue"} counters to the bag. The ratio of red to blue counters is now ${rs([c, d])}. How many ${askRed ? "red" : "blue"} counters were in the bag at the start?`,
        answer: { type: "number", value: ans },
        solution: [
          `Let red = ${cx(a)} and blue = ${cx(b)} at the start.`,
          addRed ? `After: ${M(`(${cx(a)} + ${t}) / (${cx(b)}) = ${c}/${d}`)}, so ${d}(${cx(a)} + ${t}) = ${cx(c * b)}.` : `After: ${M(`(${cx(a)}) / (${cx(b)} + ${t}) = ${c}/${d}`)}, so ${cx(d * a)} = ${c}(${cx(b)} + ${t}).`,
          addRed ? `${cx(d * a)} + ${d * t} = ${cx(c * b)} → ${cx(c * b - d * a)} = ${d * t} → x = ${k}.` : `${cx(d * a)} = ${cx(c * b)} + ${c * t} → ${cx(d * a - c * b)} = ${c * t} → x = ${k}.`,
          `${askRed ? "Red" : "Blue"} at the start = ${askRed ? a : b} × ${k} = ${ans}.`,
        ],
        hint: "Call the starting numbers ax and bx. Only one colour changes — write the new ratio as an equation.",
        traps,
      };
    },
  },

  // 6 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.compound-measures`,
    topicId: TOPIC,
    title: "Speed, density and pressure (with unit conversions)",
    level: 2,
    guideRef: "compound-measures",
    generate(rng, tier) {
      const kind = rng.pick(tier === 1 ? (["speed", "density", "pressure"] as const) : (["speed", "convert", "density", "pressure"] as const));
      const name = rng.pick(NAMES);

      if (kind === "speed") {
        let s = 60, tmin = 90, d = 90;
        for (let i = 0; i < 200; i++) {
          s = tier === 1 ? rng.int(2, 16) * 5 : rng.int(8, 110);
          tmin = tier === 1 ? rng.int(1, 8) * 30 : rng.int(2, 20) * 15;
          if ((s * tmin) % 60 === 0) break;
        }
        d = (s * tmin) / 60;
        const find = rng.pick(["s", "d", "t"] as const);
        const veh = rng.pick(["a car", "a coach", "a cyclist", "a train", "a ferry to Batam"]);
        if (find === "s") {
          const traps: Trap[] = [];
          numTrap(clean(d / tmin), s, "You divided by the time in minutes. Change the time to hours first.", traps);
          numTrap(clean(d * (tmin / 60)), s, "Speed = distance ÷ time, not distance × time.", traps);
          return {
            prompt: `${cap(veh)} travels ${big(d)} km in ${hm(tmin)}. Work out its average speed in km/h.`,
            answer: { type: "number", value: s },
            solution: [`${hm(tmin)} = ${num(tmin / 60)} hours.`, `Speed = ${M("d/t")} = ${big(d)} ÷ ${num(tmin / 60)} = ${s} km/h.`],
            hint: "Speed = distance ÷ time — with the time in hours.",
            traps,
          };
        }
        if (find === "d") {
          const traps: Trap[] = [];
          numTrap(s * tmin, d, "The speed is per HOUR — convert the time to hours before multiplying.", traps);
          return {
            prompt: `${cap(veh)} travels at an average speed of ${s} km/h for ${hm(tmin)}. How far does it travel? Give your answer in km.`,
            answer: { type: "number", value: d },
            solution: [`${hm(tmin)} = ${num(tmin / 60)} hours.`, `Distance = speed × time = ${s} × ${num(tmin / 60)} = ${big(d)} km.`],
            hint: "Distance = speed × time. Is the time in hours?",
            traps,
          };
        }
        const traps: Trap[] = [];
        numTrap(clean((s * 60) / d), tmin, "Time = distance ÷ speed — you divided the wrong way round.", traps);
        numTrap(clean(tmin / 60), tmin, "That's the time in hours. The question asks for minutes.", traps);
        return {
          prompt: `${name} drives ${big(d)} km at an average speed of ${s} km/h. How long does the journey take? Give your answer in minutes.`,
          answer: { type: "number", value: tmin },
          solution: [`Time = ${M("d/s")} = ${big(d)} ÷ ${s} = ${num(tmin / 60)} hours.`, `${num(tmin / 60)} × 60 = ${tmin} minutes.`],
          hint: "Time = distance ÷ speed gives hours. Then × 60.",
          traps,
        };
      }

      if (kind === "convert") {
        const toMs = rng.bool();
        if (toMs) {
          const v = rng.int(2, tier === 3 ? 40 : 20) * 18;
          const ans = v / 3.6;
          const traps: Trap[] = [];
          numTrap(clean(v * 3.6), ans, "Metres per second is a SMALLER number than km per hour — divide by 3.6, don't multiply.", traps);
          return {
            prompt: `${rng.pick(["A high-speed train", "A racing car", "A cheetah", "A car on the expressway", "A falcon in a dive"])} moves at ${v} km/h. Convert this speed to metres per second (m/s).`,
            answer: { type: "number", value: clean(ans) },
            solution: [`${v} km/h = ${big(v * 1000)} m in 3600 s.`, `${big(v * 1000)} ÷ 3600 = ${num(clean(ans))} m/s.`, `(Shortcut: km/h ÷ 3.6 = m/s.)`],
            hint: "1 km = 1000 m and 1 hour = 3600 s.",
            traps,
          };
        }
        const w = rng.int(2, tier === 3 ? 90 : 40);
        const ans = clean(w * 3.6);
        const traps: Trap[] = [];
        numTrap(clean(roundTo(w / 3.6, 4)), ans, "km/h is a BIGGER number than m/s — multiply by 3.6.", traps);
        return {
          prompt: `${rng.pick(["A sprinter", "A drone", "A cyclist", "A lift in a tall building"])} moves at ${w} m/s. Convert this speed to km/h.`,
          answer: { type: "number", value: ans },
          solution: [`In one hour it goes ${w} × 3600 = ${big(w * 3600)} m.`, `${big(w * 3600)} m = ${num(ans)} km, so ${num(ans)} km/h.`],
          hint: "How many metres in an hour (3600 s)? Then change metres to km.",
          traps,
        };
      }

      if (kind === "density") {
        const mats = [
          { n: "aluminium", d: 27 },
          { n: "iron", d: 79 },
          { n: "copper", d: 89 },
          { n: "glass", d: 25 },
          { n: "oak wood", d: 7 },
          { n: "ice", d: 9 },
          { n: "silver", d: 105 },
          { n: "gold", d: 193 },
        ]; // tenths of g/cm³
        const mt = rng.pick(mats);
        const dens = mt.d / 10;
        const find = rng.pick(tier === 3 ? (["m", "V", "d", "kgm3"] as const) : (["m", "V", "d"] as const));
        const V = tier === 1 ? rng.int(1, 30) * 10 : rng.int(12, 600);
        const mass = clean((mt.d * V) / 10);
        const shape = tier >= 2 && rng.bool(0.4);
        let Vtext = `${big(V)} cm³`;
        let Vstep = "";
        if (shape) {
          // cuboid dimensions whose product is V
          const fs: number[][] = [];
          for (let x = 2; x <= 30; x++) for (let y = x; y <= 30; y++) if (V % (x * y) === 0 && V / (x * y) >= 2 && V / (x * y) <= 40) fs.push([x, y, V / (x * y)]);
          if (fs.length) {
            const [x, y, z] = rng.pick(fs);
            Vtext = `a cuboid measuring ${x} cm by ${y} cm by ${z} cm`;
            Vstep = `Volume = ${x} × ${y} × ${z} = ${big(V)} cm³.`;
          }
        }
        if (find === "m") {
          const traps: Trap[] = [];
          numTrap(clean(V / dens), mass, "Mass = density × volume — you divided.", traps);
          return {
            prompt: `The density of ${mt.n} is ${num(dens)} g/cm³. A block of ${mt.n} is ${Vtext}${Vtext.startsWith("a ") ? "" : " in volume"}. Work out its mass in grams.`,
            answer: { type: "number", value: mass },
            solution: [...(Vstep ? [Vstep] : []), `Mass = density × volume = ${num(dens)} × ${big(V)} = ${num(mass)} g.`],
            hint: "Density is mass per cm³. So mass = density × volume.",
            traps,
          };
        }
        if (find === "V") {
          const traps: Trap[] = [];
          numTrap(clean(mass * dens), V, "Volume = mass ÷ density — you multiplied.", traps);
          return {
            prompt: `A piece of ${mt.n} has a mass of ${num(mass)} g. The density of ${mt.n} is ${num(dens)} g/cm³. Work out the volume of the piece in cm³.`,
            answer: { type: "number", value: V },
            solution: [`Volume = ${M("m/d")} = ${num(mass)} ÷ ${num(dens)} = ${big(V)} cm³.`],
            hint: "How many lots of the density fit into the mass?",
            traps,
          };
        }
        if (find === "kgm3") {
          const ans = mt.d * 100;
          const traps: Trap[] = [];
          numTrap(dens, ans, "That's in g/cm³. 1 m³ = 1 000 000 cm³ and 1 kg = 1000 g, so multiply by 1000.", traps);
          numTrap(clean(dens * 1e6), ans, "You converted cm³ → m³ but forgot g → kg (÷ 1000).", traps);
          return {
            prompt: `A block of ${mt.n} with a volume of ${big(V)} cm³ has a mass of ${num(mass)} g. Work out the density of ${mt.n} in kg/m³.`,
            answer: { type: "number", value: ans },
            solution: [`Density = ${num(mass)} ÷ ${big(V)} = ${num(dens)} g/cm³.`, `1 m³ = 1 000 000 cm³, so 1 m³ has mass ${num(dens)} × 1 000 000 g = ${big(dens * 1e6)} g = ${big(ans)} kg.`, `Density = ${big(ans)} kg/m³ (g/cm³ × 1000).`],
            hint: "Find the density in g/cm³ first. How many grams in 1 000 000 cm³, and how many kg is that?",
            traps,
          };
        }
        const traps: Trap[] = [];
        numTrap(roundTo(V / mass, 4), dens, "Density = mass ÷ volume — you divided the wrong way round.", traps);
        return {
          prompt: `A block of ${rng.pick(["metal", "material", "a mystery substance"])} is ${Vtext}${Vtext.startsWith("a ") ? "" : " in volume"} and has a mass of ${num(mass)} g. Work out its density in g/cm³.`,
          answer: { type: "number", value: dens },
          solution: [...(Vstep ? [Vstep] : []), `Density = ${M("m/V")} = ${num(mass)} ÷ ${big(V)} = ${num(dens)} g/cm³.`],
          hint: "The units g/cm³ tell you: grams ÷ cm³.",
          traps,
        };
      }

      // pressure
      const cm2 = tier === 3 && rng.bool(0.5);
      if (cm2) {
        const Acm = rng.pick([20, 25, 40, 50, 80, 100, 125, 200, 250, 400, 500]);
        let F = 100;
        for (let i = 0; i < 100; i++) {
          F = rng.int(4, 120) * 5;
          if ((F * 10000) % Acm === 0) break;
        }
        const P = (F * 10000) / Acm;
        const traps: Trap[] = [];
        numTrap(clean(F / Acm), P, "That's in N/cm². 1 m² = 10 000 cm², so convert the area to m² first.", traps);
        return {
          prompt: `A ${rng.pick(["box", "statue", "speaker", "plant pot"])} exerts a force of ${F} N on the floor. The area in contact with the floor is ${Acm} cm². Work out the pressure in N/m².`,
          answer: { type: "number", value: P },
          solution: [`${Acm} cm² = ${Acm} ÷ 10 000 = ${num(Acm / 10000)} m².`, `P = ${M("F/A")} = ${F} ÷ ${num(Acm / 10000)} = ${big(P)} N/m².`],
          hint: "1 m = 100 cm, so 1 m² = 100 × 100 cm².",
          traps,
        };
      }
      const areas = tier === 1 ? [2, 4, 5, 0.5, 0.25] : [0.2, 0.25, 0.4, 0.5, 0.8, 1.5, 2.5, 1.25, 0.6];
      let A = 0.5, F = 100, P = 200;
      for (let i = 0; i < 200; i++) {
        A = rng.pick(areas);
        P = tier === 1 ? rng.int(2, 40) * 10 : rng.int(5, 400) * 5;
        F = clean(P * A);
        if (Number.isInteger(F)) break;
      }
      const find = rng.pick(["P", "F", "A"] as const);
      if (find === "P") {
        const traps: Trap[] = [];
        numTrap(clean(F * A), P, "Pressure = force ÷ area — you multiplied.", traps);
        return {
          prompt: `A force of ${big(F)} N acts on an area of ${num(A)} m². Work out the pressure in N/m².`,
          answer: { type: "number", value: P },
          solution: [`P = ${M("F/A")} = ${big(F)} ÷ ${num(A)} = ${big(P)} N/m².`],
          hint: "N/m² means newtons ÷ square metres.",
          traps,
        };
      }
      if (find === "F") {
        const traps: Trap[] = [];
        numTrap(clean(roundTo(P / A, 4)), F, "Force = pressure × area — you divided.", traps);
        return {
          prompt: `A crate exerts a pressure of ${big(P)} N/m² on the ground. The base of the crate has an area of ${num(A)} m². Work out the force the crate exerts, in newtons.`,
          answer: { type: "number", value: F },
          solution: [`F = P × A = ${big(P)} × ${num(A)} = ${big(F)} N.`],
          hint: "Rearrange P = F ÷ A to make F the subject.",
          traps,
        };
      }
      const traps: Trap[] = [];
      numTrap(clean(roundTo(P / F, 6)), A, "Area = force ÷ pressure — you divided the wrong way round.", traps);
      return {
        prompt: `A force of ${big(F)} N produces a pressure of ${big(P)} N/m². Work out the area it acts on, in m².`,
        answer: { type: "number", value: A },
        solution: [`A = ${M("F/P")} = ${big(F)} ÷ ${big(P)} = ${num(A)} m².`],
        hint: "Rearrange P = F ÷ A to make A the subject.",
        traps,
      };
    },
  },

  // 7 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.average-speed`,
    topicId: TOPIC,
    title: "Average speed for a journey in several parts",
    level: 3,
    guideRef: "compound-measures",
    generate(rng, tier) {
      const kind = rng.pick(tier === 1 ? (["legs", "legs", "round"] as const) : tier === 2 ? (["legs", "round", "legs"] as const) : (["legs", "round", "needed"] as const));
      const name = rng.pick(NAMES);

      if (kind === "round") {
        let v1 = 60, v2 = 40, d = 120;
        for (let i = 0; i < 200; i++) {
          v1 = rng.int(3, 20) * (tier === 1 ? 10 : 5);
          v2 = rng.int(3, 20) * (tier === 1 ? 10 : 5);
          if (v1 === v2) continue;
          d = lcm(v1, v2) * rng.int(1, 3);
          if (d <= 600 && (tier > 1 || exactSig(2 * v1 * v2, v1 + v2))) break;
        }
        const T = d / v1 + d / v2;
        const N = 2 * v1 * v2, D = v1 + v2; // average = 2d/T = 2v1v2/(v1+v2)
        const ans = sigQ(N, D);
        const traps: Trap[] = [];
        numTrap(sigQ(v1 + v2, 2), ans, "Averaging the two speeds only works if you spend the SAME TIME at each. Use total distance ÷ total time.", traps);
        return {
          prompt: `${name} cycles ${d} km to a campsite at an average speed of ${v1} km/h and returns along the same route at ${v2} km/h. Work out the average speed for the whole journey in km/h. Give your answer correct to 3 significant figures.`,
          answer: { type: "number", value: ans },
          solution: [`Times: ${d} ÷ ${v1} = ${num(d / v1)} h and ${d} ÷ ${v2} = ${num(d / v2)} h, total ${num(clean(T))} h.`, `Total distance = ${2 * d} km.`, `Average speed = ${2 * d} ÷ ${num(clean(T))} ${eqSig(N, D, " km/h")}.`],
          hint: "Average speed = TOTAL distance ÷ TOTAL time. Find each time separately.",
          traps,
        };
      }

      if (kind === "needed") {
        // Leg 1 known; what speed is needed on leg 2 for an overall average V?
        let d1 = 40, v1 = 80, d2 = 60, V = 60, t1 = 30, Ttot = 100;
        for (let i = 0; i < 400; i++) {
          v1 = rng.int(6, 24) * 5;
          t1 = rng.int(2, 8) * 10; // minutes
          if ((v1 * t1) % 60) continue;
          d1 = (v1 * t1) / 60;
          d2 = rng.int(4, 30) * 5;
          V = rng.int(6, 20) * 5;
          if (((d1 + d2) * 60) % V) continue;
          Ttot = ((d1 + d2) * 60) / V;
          if (Ttot - t1 >= 15) break;
        }
        const t2 = Ttot - t1; // minutes
        const N = d2 * 60, D = t2;
        const ans = sigQ(N, D);
        return {
          prompt: `${name} drives ${d1} km at an average speed of ${v1} km/h, then has ${d2} km still to go. ${name} wants the average speed for the whole ${d1 + d2} km to be exactly ${V} km/h. At what average speed must the rest of the journey be driven? Give your answer in km/h, correct to 3 significant figures.`,
          answer: { type: "number", value: ans },
          solution: [
            `Time allowed in total: ${d1 + d2} ÷ ${V} h = ${Ttot} minutes.`,
            `Time used: ${d1} ÷ ${v1} h = ${t1} minutes, so ${t2} minutes = ${M(`${t2}/60`)} h remain.`,
            `Speed needed = ${d2} ÷ ${M(`${t2}/60`)} ${eqSig(N, D, " km/h")}.`,
          ],
          hint: "Work backwards: how much time does the target average allow in total? How much is left?",
          traps: 2 * V - v1 > 0 ? (() => {
            const tr: Trap[] = [];
            numTrap(2 * V - v1, ans, `Speeds don't average like that (${V} is not halfway between ${v1} and your answer) — work with total distance and total time.`, tr);
            return tr;
          })() : [],
        };
      }

      // legs
      let v1 = 60, t1 = 30, d2 = 40, t2 = 45;
      for (let i = 0; i < 300; i++) {
        v1 = rng.int(4, 24) * 5;
        t1 = rng.int(1, tier === 1 ? 6 : 12) * (tier === 1 ? 30 : 10);
        t2 = rng.int(1, tier === 1 ? 6 : 12) * (tier === 1 ? 30 : 10);
        if ((v1 * t1) % 60) continue;
        d2 = rng.int(2, 40) * 5;
        if (tier === 1 && !exactSig(((v1 * t1) / 60 + d2) * 60, t1 + t2)) continue;
        if ((d2 * 60) % t2 && tier === 1) continue;
        break;
      }
      const d1 = (v1 * t1) / 60;
      const D = d1 + d2, T = t1 + t2;
      const ans = sigQ(D * 60, T);
      const v2N = d2 * 60, v2D = t2;
      const traps: Trap[] = [];
      numTrap(sigQ(v1 * v2D + v2N, 2 * v2D), ans, "Averaging the two speeds ignores how long each part took. Use total distance ÷ total time.", traps);
      numTrap(sigQ(D, T), ans, "You divided by minutes. Convert the total time to hours to get km/h.", traps);
      return {
        prompt: `${name} travels by ${rng.pick(["car", "coach", "motorbike"])}. For the first ${hm(t1)} the average speed is ${v1} km/h. ${name} then travels a further ${d2} km in ${hm(t2)}. Work out the average speed for the whole journey in km/h.${tier === 1 ? "" : " Give your answer correct to 3 significant figures."}`,
        answer: { type: "number", value: ans },
        solution: [`First part: ${v1} × ${M(`${t1}/60`)} = ${d1} km.`, `Total distance = ${d1} + ${d2} = ${D} km; total time = ${hm(T)} = ${M(`${T}/60`)} h.`, `Average speed = ${D} ÷ ${M(`${T}/60`)} ${eqSig(D * 60, T, " km/h")}.`],
        hint: "Average speed = total distance ÷ total time. Find the missing distance first.",
        traps,
      };
    },
  },

  // 8 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.direct-proportion`,
    topicId: TOPIC,
    title: "Direct proportion: y = kxⁿ",
    level: 2,
    guideRef: "direct-proportion",
    generate(rng, tier) {
      type P = 1 | 2 | 3 | 0.5;
      const n: P = rng.pick(tier === 1 ? ([1, 2, 2] as const) : tier === 2 ? ([1, 2, 3, 0.5] as const) : ([2, 3, 0.5, 2] as const));
      const ctxs: Record<string, { y: string; x: string; yu: string; xu: string; text: string }[]> = {
        "1": [
          { y: "C", x: "w", yu: "$", xu: "kg", text: "The cost, $C, of some mangoes is directly proportional to their mass, w kg." },
          { y: "E", x: "h", yu: "m", xu: "N", text: "The extension, E mm, of a spring is directly proportional to the load, h N, hung on it." },
        ],
        "2": [
          { y: "d", x: "t", yu: "m", xu: "s", text: "The distance, d metres, that a ball rolls down a slope is directly proportional to the square of the time, t seconds." },
          { y: "C", x: "r", yu: "$", xu: "cm", text: "The cost, $C, of a round vegetarian pizza is directly proportional to the square of its radius, r cm." },
          { y: "E", x: "v", yu: "J", xu: "m/s", text: "The kinetic energy, E joules, of a cyclist is directly proportional to the square of the speed, v m/s." },
        ],
        "3": [
          { y: "m", x: "r", yu: "g", xu: "cm", text: "The mass, m grams, of a metal ball is directly proportional to the cube of its radius, r cm." },
          { y: "P", x: "v", yu: "W", xu: "m/s", text: "The power, P watts, from a wind turbine is directly proportional to the cube of the wind speed, v m/s." },
        ],
        "0.5": [
          { y: "T", x: "L", yu: "s", xu: "cm", text: "The time, T seconds, for one swing of a pendulum is directly proportional to the square root of its length, L cm." },
          { y: "v", x: "h", yu: "m/s", xu: "m", text: "The speed, v m/s, of water leaving a tank is directly proportional to the square root of the depth, h m." },
        ],
      };
      const useAbstract = rng.bool(0.35);
      const c = useAbstract ? null : rng.pick(ctxs[String(n)]);
      const Y = c ? c.y : "y", X = c ? c.x : "x";
      const pw = (s: string) => (n === 1 ? s : n === 0.5 ? `sqrt(${s})` : `${s}^${n}`);
      const xn = (x: number) => (n === 0.5 ? Math.sqrt(x) : x ** n);
      const relWord = n === 1 ? X : n === 2 ? `the square of ${X}` : n === 3 ? `the cube of ${X}` : `the square root of ${X}`;
      const xPool = n === 0.5 ? [4, 9, 16, 25, 36, 49, 64, 81, 100, 121, 144, 196, 225, 400] : n === 3 ? [2, 3, 4, 5, 6, 10] : tier === 1 ? [2, 3, 4, 5, 6, 8, 10] : [2, 3, 4, 5, 6, 7, 8, 9, 10, 12, 15, 20];
      // k = kn/kd
      let kn = 3, kd = 1, x1 = 4, x2 = 6, y1 = 48, y2 = 108;
      for (let i = 0; i < 400; i++) {
        kd = tier === 1 ? 1 : rng.pick([1, 1, 2, 4, 5]);
        kn = rng.int(1, tier === 1 ? 9 : 20);
        if (gcd(kn, kd) !== 1 || (kn === 1 && kd === 1)) continue;
        [x1, x2] = rng.shuffle(xPool).slice(0, 2);
        const Y1 = (kn * xn(x1)) / kd, Y2 = (kn * xn(x2)) / kd;
        if (!exactDp(kn * xn(x1), kd, 2) || !exactDp(kn * xn(x2), kd, 2)) continue;
        if (Y1 > 5000 || Y2 > 5000) continue;
        y1 = clean(Y1);
        y2 = clean(Y2);
        break;
      }
      const kText = kd === 1 ? `${kn}` : `${num(kn / kd)}`;
      const lead = c ? c.text : `${Y} is directly proportional to ${relWord}.`;
      const given = `When ${X} = ${x1}, ${Y} = ${num(y1)}.`;
      const steps = [`${M(`${Y} = k${pw(X)}`)}. Substitute: ${num(y1)} = k × ${M(pw(String(x1)))} = ${num(xn(x1))}k, so k = ${kText}.`];
      const ask = tier >= 2 && n !== 0.5 && rng.bool(0.3) ? "formula" : rng.pick(["y", "y", "x"] as const);
      if (ask === "formula") {
        const expr = `${kd === 1 ? kn : `(${kn}/${kd})`}${pw(X)}`;
        return {
          prompt: `${lead} ${given} Find a formula for ${Y} in terms of ${X}.`,
          answer: { type: "expression", expr: expr.replace(/\b([A-Za-z])\b/g, "$1"), display: `{{${Y} = ${kText}${pw(X)}}}` },
          solution: [...steps, `So ${M(`${Y} = ${kText}${pw(X)}`)}.`],
          hint: `Write ${Y} = k × ${relWord.replace("the ", "")}, then substitute the pair of values to find k.`,
        };
      }
      const traps: Trap[] = [];
      if (ask === "y") {
        if (n !== 1 && exactDp(y1 * x2 * 100, x1 * 100, 2)) numTrap(clean((y1 * x2) / x1), y2, `${Y} is proportional to ${relWord}, not to ${X} itself — use the power in the formula.`, traps);
        return {
          prompt: `${lead} ${given} Work out the value of ${Y} when ${X} = ${x2}.`,
          answer: { type: "number", value: y2 },
          solution: [...steps, `When ${X} = ${x2}: ${Y} = ${kText} × ${M(pw(String(x2)))} = ${kText} × ${num(xn(x2))} = ${num(y2)}.`],
          hint: `Write ${Y} = k${n === 1 ? X : n === 0.5 ? `√${X}` : X + (n === 2 ? "²" : "³")} and use the given pair to find k first.`,
          traps,
        };
      }
      if (n !== 1 && exactDp(y2 * x1 * 100, y1 * 100, 2)) numTrap(clean((y2 * x1) / y1), x2, `${Y} is proportional to ${relWord} — after dividing by k you still need to ${n === 2 ? "square root" : n === 3 ? "cube root" : "square"}.`, traps);
      return {
        prompt: `${lead} ${given} Work out the value of ${X} when ${Y} = ${num(y2)}.`,
        answer: { type: "number", value: x2 },
        solution: [
          ...steps,
          `${num(y2)} = ${kText}${M(pw(X))}, so ${M(pw(X))} = ${num(y2)} ÷ ${kText} = ${num(xn(x2))}.`,
          `${X} = ${n === 1 ? num(x2) : n === 2 ? `${M(`sqrt(${num(xn(x2))})`)} = ${x2}` : n === 3 ? `${M(`cbrt(${num(xn(x2))})`)} = ${x2}` : `${num(xn(x2))}² = ${x2}`}.`,
        ],
        hint: "Find k first, then substitute the known value and undo the power.",
        traps,
      };
    },
  },

  // 9 ------------------------------------------------------------------------
  {
    id: `${TOPIC}.inverse-proportion`,
    topicId: TOPIC,
    title: "Inverse proportion: y = k ÷ xⁿ",
    level: 2,
    guideRef: "inverse-proportion",
    generate(rng, tier) {
      const n = rng.pick(tier === 1 ? ([1, 1, 2] as const) : ([1, 2, 2] as const));
      const kind = n === 1 ? rng.pick(["workers", "abstract", "speed"] as const) : rng.pick(["light", "abstract", "magnet"] as const);
      const xPool = tier === 1 ? [2, 3, 4, 5, 6, 8, 10, 12] : [2, 3, 4, 5, 6, 8, 10, 12, 15, 16, 20, 25];
      let x1 = 4, x2 = 5, k = 400, y1 = 100, y2 = 80;
      for (let i = 0; i < 400; i++) {
        [x1, x2] = rng.shuffle(xPool).slice(0, 2);
        k = x1 ** n * rng.int(2, tier === 1 ? 15 : 60);
        y1 = k / x1 ** n;
        if (exactDp(k, x2 ** n, tier === 1 ? 0 : 2) && k / x2 ** n >= 0.1) {
          y2 = clean(k / x2 ** n);
          if (kind === "workers" && !Number.isInteger(y2)) continue;
          break;
        }
      }
      const askX = tier >= 2 && rng.bool(0.35) && kind !== "workers";
      const askFormula = tier >= 2 && !askX && rng.bool(0.25) && kind === "abstract";
      const traps: Trap[] = [];

      if (kind === "workers") {
        const job = rng.pick(["paint a school hall", "build a garden wall", "pack the boxes for a charity drive", "harvest a field of sweet potatoes"]);
        numTrap(clean((y1 * x2) / x1), y2, "More workers means LESS time — this is inverse proportion, not direct.", traps);
        return {
          prompt: `It takes ${x1} people ${y1} hours to ${job}. Everyone works at the same rate. How long would it take ${x2} people? Give your answer in hours.`,
          answer: { type: "number", value: y2 },
          solution: [`Total work = ${x1} × ${y1} = ${k} person-hours (this stays the same).`, `Time for ${x2} people = ${k} ÷ ${x2} = ${num(y2)} hours.`],
          hint: "Work out the total amount of work in person-hours first.",
          traps,
        };
      }
      const info =
        kind === "speed"
          ? { Y: "t", X: "v", text: `The time, t hours, a journey takes is inversely proportional to the average speed, v km/h.` }
          : kind === "light"
            ? { Y: "I", X: "d", text: `The intensity of light, I lux, from a lamp is inversely proportional to the square of the distance, d metres, from the lamp.` }
            : kind === "magnet"
              ? { Y: "F", X: "d", text: `The force, F newtons, between two magnets is inversely proportional to the square of the distance, d cm, between them.` }
              : { Y: "y", X: "x", text: `${"y"} is inversely proportional to ${n === 1 ? "x" : "the square of x"}.` };
      const { Y, X } = info;
      const xp = (s: string) => (n === 1 ? s : `${s}^2`);
      const scale = kind === "speed" ? 10 : 1; // speeds as multiples of 10
      const X1 = x1 * scale, X2 = x2 * scale, K = k * scale ** n;
      const steps = [`${M(`${Y} = k/${xp(X)}`)}. Substitute: ${num(y1)} = ${M(`k/${xp(String(X1))}`)}, so k = ${num(y1)} × ${big(X1 ** n)} = ${big(K)}.`];
      if (askFormula) {
        return {
          prompt: `${info.text} When ${X} = ${X1}, ${Y} = ${num(y1)}. Find a formula for ${Y} in terms of ${X}.`,
          answer: { type: "expression", expr: `${K}/${n === 1 ? X : `(${X}^2)`}`, display: `{{${Y} = ${K}/${xp(X)}}}` },
          solution: [...steps, `So ${M(`${Y} = ${K}/${xp(X)}`)}.`],
          hint: `Inverse proportion: ${Y} = k ÷ ${n === 1 ? X : `${X}²`}. Substitute to find k.`,
        };
      }
      if (askX) {
        if (n === 2) numTrap(clean(K / y2), X2, "That's the value of the square — take the square root.", traps);
        return {
          prompt: `${info.text} When ${X} = ${X1}, ${Y} = ${num(y1)}. Work out the value of ${X} when ${Y} = ${num(y2)}.`,
          answer: { type: "number", value: X2 },
          solution: [...steps, `${num(y2)} = ${M(`${big(K)}/${xp(X)}`)}, so ${M(xp(X))} = ${big(K)} ÷ ${num(y2)} = ${big(X2 ** n)}.`, ...(n === 2 ? [`${X} = ${M(`sqrt(${X2 ** 2})`)} = ${X2}.`] : [])],
          hint: "Find k, then rearrange to get the power of the unknown on its own.",
          traps,
        };
      }
      numTrap(clean(roundTo((y1 * X2) / X1, 6)), y2, "As one quantity goes up the other goes DOWN — this is inverse, not direct, proportion.", traps);
      if (n === 2) numTrap(clean(roundTo(K / X2, 6)), y2, `Remember to square ${X}: divide k by ${X}², not ${X}.`, traps);
      return {
        prompt: `${info.text} When ${X} = ${X1}, ${Y} = ${num(y1)}. Work out the value of ${Y} when ${X} = ${X2}.`,
        answer: { type: "number", value: y2 },
        solution: [...steps, `When ${X} = ${X2}: ${Y} = ${M(`${big(K)}/${xp(String(X2))}`)} = ${big(K)} ÷ ${big(X2 ** n)} = ${num(y2)}.`],
        hint: `Write ${Y} = k ÷ ${n === 1 ? X : `${X}²`}, find k from the pair you know, then substitute.`,
        traps,
      };
    },
  },

  // 10 -----------------------------------------------------------------------
  {
    id: `${TOPIC}.proportion-change`,
    topicId: TOPIC,
    title: "What happens to y when x changes? (percentage and scale-factor effects)",
    level: 3,
    guideRef: "inverse-proportion",
    generate(rng, tier) {
      const inverse = rng.bool(0.55);
      const n = rng.pick(tier === 1 ? ([1, 2] as const) : ([1, 2, 3, 0.5] as const));
      const rel = `${inverse ? "inversely" : "directly"} proportional to ${n === 1 ? "x" : n === 2 ? "the square of x" : n === 3 ? "the cube of x" : "the square root of x"}`;
      const formula = inverse ? (n === 1 ? "y = k/x" : n === 0.5 ? "y = k/sqrt(x)" : `y = k/x^${n}`) : n === 1 ? "y = kx" : n === 0.5 ? "y = k sqrt(x)" : `y = kx^${n}`;
      const mode = rng.pick(tier === 1 ? (["factor", "percent"] as const) : tier === 2 ? (["factor", "percent", "percent"] as const) : (["percent", "reverse", "percent"] as const));

      if (mode === "factor") {
        const f = n === 0.5 ? rng.pick([4, 9, 16, 25]) : rng.pick(n === 3 ? [2, 3] : [2, 3, 4, 5]);
        const halve = n !== 0.5 && rng.bool(0.3);
        const word = halve ? (f === 2 ? "halved" : `divided by ${f}`) : f === 2 ? "doubled" : f === 3 ? "trebled" : `multiplied by ${f}`;
        const xf = n === 0.5 ? Math.sqrt(f) : f ** n; // effect size
        // y multiplied by xf (direct, ×) / 1/xf (inverse, ×); halving flips.
        const up = inverse === halve;
        const ans: AnswerSpec = up ? { type: "number", value: xf } : { type: "fraction", n: 1, d: xf, allowDecimal: true };
        const traps: Trap[] = [];
        if (xf !== f) traps.push({ spec: up ? { type: "number", value: f } : { type: "fraction", n: 1, d: f, allowDecimal: true }, feedback: `Don't forget the power: ${M(formula)}, so the factor ${f} is ${n === 0.5 ? "square-rooted" : n === 2 ? "squared" : "cubed"}.` });
        traps.push({ spec: up ? { type: "fraction", n: 1, d: xf, allowDecimal: true } : { type: "number", value: xf }, feedback: inverse ? "Inverse proportion: when x goes up, y goes DOWN (and vice versa)." : "Direct proportion: y moves the same way as x." });
        return {
          prompt: `y is ${rel}. x is ${word}. What number is y multiplied by? (Give a fraction if y gets smaller.)`,
          answer: ans,
          solution: [`${M(formula)}.`, `Replace x by ${halve ? M(`x/${f}`) : `${f}x`}: the factor ${halve ? M(`1/${f}`) : f} becomes ${halve ? M(`1/${f}`) : f}${n === 1 ? "" : n === 0.5 ? " square-rooted" : n === 2 ? " squared" : " cubed"} = ${halve ? M(`1/${xf}`) : xf}.`, inverse ? `Inverse, so flip it: y is multiplied by ${up ? xf : M(`1/${xf}`)}.` : `So y is multiplied by ${up ? xf : M(`1/${xf}`)}.`],
          hint: "Try a number: let x = 1 and then the new x. What happens to the formula?",
          traps,
        };
      }

      // percent change in x (or reverse)
      const pOpts = n === 0.5 ? [21, 44, 69, 125, -19, -36, -51, -75] : tier === 1 ? [10, 20, 25, 50, 100, -10, -20, -50] : [10, 20, 25, 30, 40, 50, -10, -20, -25, -40];
      let p = rng.pick(pOpts);
      if (mode === "reverse" && n === 0.5) p = rng.pick([10, 20, 30, 50, -10, -20, -30]);
      // multiplier for x: (100+p)/100 ; for y: ((100+p)/100)^±n
      const sq = (v: number) => (n === 0.5 ? Math.round(Math.sqrt(v)) : v ** n);
      const base = 100 + p;
      let N: number, D: number;
      if (n === 0.5) {
        N = Math.round(Math.sqrt(base) * 10);
        D = 100;
        // √(base/100) = √base / 10 → as /100: √base*10/100
      } else {
        N = sq(base);
        D = 100 ** n;
      }
      if (inverse) [N, D] = [D, N];
      const yUp = N > D;
      const pctN = Math.abs(N - D) * 100, pctD = D;
      const ans = sigQ(pctN, pctD);
      const xWord = p > 0 ? `increased by ${p}%` : `decreased by ${-p}%`;
      if (mode === "reverse") {
        // y changes by a given percentage; find % change in x. Use direct, n = 2 or 3 with nice numbers.
        const rp = rng.pick(n === 3 ? [10, 20, 50, -10, -20, -50] : [10, 20, 30, 40, 50, -10, -20, -30, -40]);
        const xb = 100 + rp;
        const nn = n === 0.5 ? 2 : n === 1 ? 2 : n;
        const yb = xb ** nn; // y multiplier × 100^nn
        const yPct = (yb - 100 ** nn) / 100 ** (nn - 1); // exact percent
        const traps: Trap[] = [];
        numTrap(Math.abs(yPct) / nn, Math.abs(rp), "Percentages don't divide by the power — use multipliers and take the root.", traps);
        return {
          prompt: `A is directly proportional to the ${nn === 2 ? "square" : "cube"} of r. A ${yPct > 0 ? "increases" : "decreases"} by ${num(Math.abs(clean(yPct)))}%. Work out the percentage ${rp > 0 ? "increase" : "decrease"} in r.`,
          answer: { type: "number", value: Math.abs(rp) },
          solution: [
            `A multiplier for A: ${num(clean(yb / 100 ** nn))}.`,
            `${M(`A = kr^${nn}`)}, so the multiplier for r is ${M(nn === 2 ? `sqrt(${num(clean(yb / 100 ** nn))})` : `cbrt(${num(clean(yb / 100 ** nn))})`)} = ${num(xb / 100)}.`,
            `So r ${rp > 0 ? "increases" : "decreases"} by ${Math.abs(rp)}%.`,
          ],
          hint: "Turn the percentage change into a multiplier, then undo the power.",
          traps,
        };
      }
      const traps: Trap[] = [];
      numTrap(Math.abs(p) * (n === 0.5 ? 0.5 : n), ans, `Percentages don't simply multiply by the power. Use the multiplier ${num(base / 100)} and raise it to the power${inverse ? " (then take the reciprocal)" : ""}.`, traps);
      if (inverse) numTrap(Math.abs(p), ans, "For inverse proportion the percentage change in y is NOT the same as in x. Use the reciprocal of the multiplier.", traps);
      const xm = num(base / 100);
      const effect = n === 0.5 ? clean(Math.sqrt(base) / 10) : clean(base ** n / 100 ** n);
      const effectText = n === 1 ? xm : n === 0.5 ? `${M(`sqrt(${xm})`)} = ${num(effect)}` : `${M(`${xm}^${n}`)} = ${num(effect)}`;
      const yExact = exactDp(N, D, 6);
      const yMul = yExact ? num(clean(N / D)) : `${num(clean(N / D, 6))}…`;
      return {
        prompt: `y is ${rel}. x is ${xWord}. Work out the percentage ${yUp ? "increase" : "decrease"} in y.${exactSig(pctN, pctD) ? "" : " Give your answer correct to 3 significant figures."}`,
        answer: { type: "number", value: ans },
        solution: [
          `${M(formula)}. The multiplier for x is ${xm}.`,
          inverse ? `The power of x changes by ${effectText}, and y is inversely proportional, so y is multiplied by 1 ÷ ${num(effect)} = ${yMul}.` : `So y is multiplied by ${effectText}.`,
          `Percentage ${yUp ? "increase" : "decrease"} = ${yUp ? `(${yMul} − 1)` : `(1 − ${yMul})`} × 100 ${eqSig(pctN, pctD, "%")}.`,
        ],
        hint: "Change the percentage into a multiplier for x, then work out what that does to the formula.",
        traps,
      };
    },
  },
];

/** Coefficient of x for display: 1 → "x", 3 → "3x". */
function cx(c: number): string {
  return c === 1 ? "x" : `${c}x`;
}

function plural(n: number, one: string): string {
  return `${big(n)} ${one}${n === 1 ? "" : "s"}`;
}

function cap(s: string): string {
  return s.charAt(0).toUpperCase() + s.slice(1);
}
