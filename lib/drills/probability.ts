// Procedural skill drills for "probability" (Year 11, Edexcel 4MA1 Higher — Unit 9).
//
// Every probability is built from integers (tenths, hundredths or counts), so
// decimal answers are exact and fraction answers are exact rationals. Fraction
// answers accept any equivalent fraction or the exact decimal, as in the exam.
import type { Drill, DrillItem, Rng } from "./types.ts";
import type { AnswerSpec, Trap } from "../types.ts";
import { frac, num, clean, simplify, big } from "./helpers.ts";
import { makeRng } from "./rng.ts";

const T = "probability";
const NAMES = ["Aisha", "Wei Ling", "Arjun", "Priya", "Marcus", "Siti", "Ethan", "Mei", "Ravi", "Hana", "Jun", "Zara", "Kenji", "Olivia"] as const;

// ---------------------------------------------------------------------------
// Local helpers
// ---------------------------------------------------------------------------

/** Bounded rejection loop; falls back to fixed seeds so it is always deterministic. */
function attempt(make: (r: Rng) => DrillItem | null, rng: Rng): DrillItem {
  for (let i = 0; i < 800; i++) {
    const x = make(rng);
    if (x) return x;
  }
  for (let s = 1; s < 5000; s++) {
    const x = make(makeRng(s));
    if (x) return x;
  }
  throw new Error("probability drill: no valid item");
}

/** Unsimplified fraction markup. */
const P = (n: number, d: number) => frac(n, d, { simplify: false });
/** Simplified fraction markup. */
const F = (n: number, d: number) => frac(n, d);
/** "= {{10/12}} = {{5/6}}" or just "= {{5/6}}" when already simplest. */
function eqF(n: number, d: number): string {
  const [a, b] = simplify(n, d);
  return a === n && b === d ? `= ${F(n, d)}` : `= ${P(n, d)} = ${F(a, b)}`;
}
/** k hundredths (or 10^dp-ths) as a decimal string. */
const dec = (k: number, dp = 2) => num(clean(k / 10 ** dp));

function fAns(n: number, d: number): AnswerSpec {
  const [a, b] = simplify(n, d);
  return { type: "fraction", n: a, d: b, allowDecimal: true, display: F(a, b) };
}

/** Fraction traps: dropped if invalid, equal to the answer or repeated. */
function fTraps(n: number, d: number, cands: Array<[number, number, string] | null>): Trap[] {
  const out: Trap[] = [];
  const used: number[] = [n / d];
  for (const c of cands) {
    if (!c) continue;
    const [tn, td, feedback] = c;
    if (!Number.isInteger(tn) || !Number.isInteger(td) || td <= 0 || tn < 0) continue;
    const v = tn / td;
    if (used.some((u) => Math.abs(u - v) < 1e-12)) continue;
    used.push(v);
    const [a, b] = simplify(tn, td);
    out.push({ spec: { type: "fraction", n: a, d: b, allowDecimal: true }, feedback });
  }
  return out;
}

/** Number traps: dropped if missing, negative, equal to the answer or repeated. */
function nTraps(answer: number, cands: Array<[number | null, string]>): Trap[] {
  const out: Trap[] = [];
  const used: number[] = [answer];
  for (const [raw, feedback] of cands) {
    if (raw === null || !Number.isFinite(raw) || raw < 0) continue;
    const v = clean(raw);
    if (used.some((u) => Math.abs(u - v) < 1e-9)) continue;
    used.push(v);
    out.push({ spec: { type: "number", value: v }, feedback });
  }
  return out;
}

function isPrimeN(n: number): boolean {
  if (n < 2) return false;
  for (let p = 2; p * p <= n; p++) if (n % p === 0) return false;
  return true;
}

function fact(n: number): number {
  let f = 1;
  for (let i = 2; i <= n; i++) f *= i;
  return f;
}

function nCr(n: number, r: number): number {
  if (r < 0 || r > n) return 0;
  let c = 1;
  for (let i = 1; i <= r; i++) c = (c * (n - r + i)) / i;
  return Math.round(c);
}

/** "a fair six-sided dice" / "a fair 5-sided spinner numbered 1 to 5". */
const device = (n: number) => (n === 6 ? "a fair six-sided dice" : `a fair ${n}-sided spinner numbered 1 to ${n}`);

// ---------------------------------------------------------------------------
// 1. Missing probability in a table
// ---------------------------------------------------------------------------

interface MissCtx {
  intro: (who: string) => string;
  head: string;
  labels: string[];
  ask: (label: string) => string;
}
const MISS: MissCtx[] = [
  {
    intro: () => "A biased spinner can land on red, blue, green, yellow or white. The table shows the probabilities.",
    head: "Colour",
    labels: ["Red", "Blue", "Green", "Yellow", "White"],
    ask: (l) => `the spinner lands on ${l.toLowerCase()}`,
  },
  {
    intro: () => "A biased four-sided dice is numbered 1, 2, 3 and 4. The table shows the probability of each score.",
    head: "Score",
    labels: ["1", "2", "3", "4"],
    ask: (l) => `the score is ${l}`,
  },
  {
    intro: (w) => `At a hawker centre, each customer buys exactly one drink. ${w} records the probability of each choice.`,
    head: "Drink",
    labels: ["Kopi", "Teh", "Bandung", "Lime juice", "Water"],
    ask: (l) => `the next customer buys ${l.toLowerCase()}`,
  },
  {
    intro: (w) => `${w} takes a counter at random from a bag of red, blue, green and yellow counters. The table shows the probabilities.`,
    head: "Colour",
    labels: ["Red", "Blue", "Green", "Yellow"],
    ask: (l) => `the counter is ${l.toLowerCase()}`,
  },
];

const missingProbability: Drill = {
  id: "probability.missing-probability",
  topicId: T,
  title: "Find a missing probability in a table",
  level: 1,
  guideRef: "basic-probability",
  generate(rng, tier) {
    return attempt((r) => {
      const ctx = r.pick(MISS);
      const m = ctx.labels.length;
      const coefs: number[] =
        tier === 1 ? [1] : tier === 2 ? r.pick([[1, 1], [1, 2], [1, 3], [2, 1]]) : r.pick([[1, 2], [1, 3], [2, 3], [1, 1, 2], [1, 2, 3], [3, 1]]);
      const u = coefs.length;
      if (m - u < 1) return null;
      const known: number[] = [];
      for (let i = 0; i < m - u; i++) known.push(tier === 1 ? 5 * r.int(1, 7) : r.int(4, 35));
      const R = 100 - known.reduce((a, b) => a + b, 0);
      const S = coefs.reduce((a, b) => a + b, 0);
      if (R <= 0 || R % S !== 0) return null;
      const x = R / S;
      if (x < 3) return null;
      const cell = (c: number) => (c === 1 ? "x" : `${c}x`);
      const vals = [...known.map((k) => dec(k)), ...coefs.map(cell)];
      const table = `| ${ctx.head} | ${ctx.labels.join(" | ")} |\n|${"---|".repeat(m + 1)}\n| Probability | ${vals.join(" | ")} |`;
      const askBig = tier === 3;
      const bigI = coefs.indexOf(Math.max(...coefs));
      const bigC = coefs[bigI];
      const bigLabel = ctx.labels[m - u + bigI];
      const answer = askBig ? bigC * x : x;
      const sumKnown = 100 - R;
      const prompt = `${ctx.intro(r.pick(NAMES))}\n\n${table}\n\n${askBig ? `Work out the probability that ${ctx.ask(bigLabel)}.` : "Work out the value of x."}`;
      const solution = [
        "The probabilities of all the possible outcomes add up to 1.",
        `Known probabilities: ${known.map((k) => dec(k)).join(" + ")} = ${dec(sumKnown)}`,
        `${S === 1 ? "x" : `${S}x`} = 1 − ${dec(sumKnown)} = ${dec(R)}${S > 1 ? `, so x = ${dec(R)} ÷ ${S} = ${dec(x)}` : ""}`,
      ];
      if (askBig) solution.push(`P(${bigLabel.toLowerCase()}) = ${bigC}x = ${bigC} × ${dec(x)} = ${dec(bigC * x)}`);
      return {
        prompt,
        answer: { type: "number", value: clean(answer / 100), display: dec(answer) },
        solution,
        hint: "All the probabilities in the table must add up to 1 — write that as an equation in x.",
        traps: nTraps(clean(answer / 100), [
          [S > 1 ? clean(R / 100) : null, `That is the total of the unknown probabilities (${S === 1 ? "x" : `${S}x`}). Divide to find ${askBig ? "x first" : "x"}.`],
          [askBig ? clean(x / 100) : null, `That is x — the question asks for the probability of ${bigLabel.toLowerCase()}, which is ${bigC}x.`],
          [clean(sumKnown / 100), "That is the total of the probabilities you were given. Subtract it from 1."],
        ]),
      };
    }, rng);
  },
};

// ---------------------------------------------------------------------------
// 2. Expected frequency / relative frequency
// ---------------------------------------------------------------------------

const expectedFrequency: Drill = {
  id: "probability.expected-frequency",
  topicId: T,
  title: "Expected frequency and relative frequency",
  level: 1,
  guideRef: "basic-probability",
  generate(rng, tier) {
    return attempt((r) => {
      const name = r.pick(NAMES);
      const kind = tier === 1 ? r.pick(["fair", "given"]) : tier === 2 ? r.pick(["fair", "given", "relative"]) : r.pick(["relative", "reverse", "complement"]);
      if (kind === "fair") {
        const s = r.pick([4, 5, 6, 8, 10]);
        const evs = s === 6
          ? [{ t: "a number greater than 4", k: 2 }, { t: "a prime number", k: 3 }, { t: "a multiple of 3", k: 2 }, { t: "a 6", k: 1 }, { t: "a square number", k: 2 }]
          : [{ t: "an even number", k: Math.floor(s / 2) }, { t: `a number less than 3`, k: 2 }, { t: "a prime number", k: Array.from({ length: s }, (_, i) => i + 1).filter(isPrimeN).length }, { t: `a ${s}`, k: 1 }];
        const ev = r.pick(evs);
        const n = s * r.int(tier === 1 ? 5 : 8, tier === 1 ? 20 : 45);
        const thing = s === 6 ? "a fair six-sided dice" : `a fair ${s}-sided spinner numbered 1 to ${s}`;
        const verb = s === 6 ? "rolls" : "spins";
        const ans = (n * ev.k) / s;
        return {
          prompt: `${name} ${verb} ${thing} ${big(n)} times. Work out an estimate for the number of times it lands on ${ev.t}.`,
          answer: { type: "number", value: ans },
          solution: [`P(${ev.t}) = ${P(ev.k, s)}`, `Expected frequency = number of trials × probability = ${big(n)} × ${P(ev.k, s)} = ${big(ans)}`],
          hint: "Expected frequency = number of trials × probability.",
          traps: nTraps(ans, [[clean(n / s), `That is the expected number for just one face — how many faces count as ${ev.t}?`], [ev.k, "That is the number of favourable faces, not the expected number of times."]]),
        };
      }
      if (kind === "given" || kind === "complement") {
        const ctx = r.pick([
          { p: "a train on the North–South MRT line is late", pop: (n: string) => `${n} trains run on the line one week.`, q: "are late", notQ: "are not late", per: "trains" },
          { p: "a sunflower seed germinates", pop: (n: string) => `A farmer plants ${n} seeds.`, q: "germinate", notQ: "do not germinate", per: "seeds" },
          { p: "a customer at a bubble tea shop orders less sugar", pop: (n: string) => `${n} customers visit the shop on Saturday.`, q: "order less sugar", notQ: "do not order less sugar", per: "customers" },
          { p: "a visitor to Sentosa goes on the cable car", pop: (n: string) => `${n} people visit Sentosa one morning.`, q: "go on the cable car", notQ: "do not go on the cable car", per: "visitors" },
        ]);
        const ph = tier === 1 ? 5 * r.int(1, 18) : r.int(3, 97);
        const n = tier === 1 ? 20 * r.int(3, 25) : r.pick([100, 200, 250, 300, 400, 500, 600, 800, 1200, 1500]);
        if ((ph * n) % 100 !== 0) return null;
        const comp = kind === "complement";
        const ans = comp ? ((100 - ph) * n) / 100 : (ph * n) / 100;
        const verbN = ctx.per;
        return {
          prompt: `The probability that ${ctx.p} is ${dec(ph)}. ${ctx.pop(big(n))} Work out an estimate for the number of ${ctx.per} that ${comp ? ctx.notQ : ctx.q}.`,
          answer: { type: "number", value: ans },
          solution: comp
            ? [`P(${ctx.notQ}) = 1 − ${dec(ph)} = ${dec(100 - ph)}`, `Expected number = ${big(n)} × ${dec(100 - ph)} = ${big(ans)}`]
            : [`Expected number = ${big(n)} × ${dec(ph)} = ${big(ans)}`],
          hint: comp ? "First find the probability of the event NOT happening." : "Multiply the number of " + verbN + " by the probability.",
          traps: nTraps(ans, [[comp ? (ph * n) / 100 : null, `That is the number that ${ctx.q} — the question asks for those that ${ctx.notQ}.`], [clean(n / (ph / 100)), "You divided by the probability — multiply instead."]]),
        };
      }
      // relative frequency (and reverse)
      const ctx = r.pick([
        { act: "drops a drawing pin", out: "lands point up", noun: "drops" },
        { act: "spins a biased coin", out: "lands on heads", noun: "spins" },
        { act: "rolls a biased dice", out: "lands on a 6", noun: "rolls" },
        { act: "flips a plastic bottle", out: "lands upright", noun: "flips" },
      ]);
      const trials = r.pick([20, 25, 40, 50, 80, 100, 200]);
      const hits = r.int(Math.ceil(trials * 0.1), Math.floor(trials * 0.9));
      const newN = r.pick([100, 150, 200, 300, 400, 500, 600, 750, 1000]);
      if ((hits * newN) % trials !== 0) return null;
      const est = (hits * newN) / trials;
      const [rn, rd] = simplify(hits, trials);
      if (kind === "reverse") {
        // Given relative frequency and expected number, find the number of trials.
        return {
          prompt: `${name} ${ctx.act} ${trials} times and it ${ctx.out} ${hits} times. ${name} repeats the experiment many more times and expects it to ${ctx.out.replace(/^lands/, "land")} about ${big(est)} times. Using the relative frequency, estimate how many times the experiment is repeated.`,
          answer: { type: "number", value: newN },
          solution: [`Relative frequency = ${P(hits, trials)}${rn !== hits ? ` = ${F(rn, rd)}` : ""}`, `Number of trials × ${F(rn, rd)} = ${big(est)}`, `Number of trials = ${big(est)} ÷ ${F(rn, rd)} = ${big(newN)}`],
          hint: "Expected number = trials × relative frequency. Work backwards.",
          traps: nTraps(newN, [[clean((est * hits) / trials), "You multiplied by the relative frequency — here you need to divide."]]),
        };
      }
      return {
        prompt: `${name} ${ctx.act} ${trials} times and it ${ctx.out} ${hits} times. ${name} then does it ${big(newN)} more times. Use the relative frequency to estimate the number of these times it ${ctx.out}.`,
        answer: { type: "number", value: est },
        solution: [`Relative frequency = ${P(hits, trials)}${rn !== hits ? ` = ${F(rn, rd)}` : ""}`, `Estimate = ${big(newN)} × ${F(rn, rd)} = ${big(est)}`],
        hint: "Relative frequency = successes ÷ trials. Use it as the probability.",
        traps: nTraps(est, [[hits, "That is what happened in the first experiment — scale it up to the new number of trials."], [clean(est + hits), "Only the new trials are asked about."]]),
      };
    }, rng);
  },
};

// ---------------------------------------------------------------------------
// 3. Sample space diagrams
// ---------------------------------------------------------------------------

interface Ev {
  text: string;
  test: (x: number, y: number) => boolean;
}

const sampleSpace: Drill = {
  id: "probability.sample-space",
  topicId: T,
  title: "Probability from a sample space diagram",
  level: 1,
  guideRef: "basic-probability",
  generate(rng, tier) {
    return attempt((r) => {
      const name = r.pick(NAMES);
      const a = tier === 1 ? r.pick([4, 5, 6]) : r.pick([3, 4, 5, 6, 8]);
      const b = r.pick([4, 5, 6]);
      const op = tier === 1 ? r.pick(["sum", "sum", "product"]) : r.pick(["sum", "product", "difference"]);
      const s = r.int(3, op === "product" ? 15 : 9);
      const evs: Ev[] =
        op === "sum"
          ? [
              { text: `the total is ${s}`, test: (x, y) => x + y === s },
              { text: `the total is greater than ${s}`, test: (x, y) => x + y > s },
              { text: "the total is a prime number", test: (x, y) => isPrimeN(x + y) },
              { text: "the total is a multiple of 3", test: (x, y) => (x + y) % 3 === 0 },
            ]
          : op === "product"
            ? [
                { text: "the product is an odd number", test: (x, y) => (x * y) % 2 === 1 },
                { text: `the product is greater than ${s}`, test: (x, y) => x * y > s },
                { text: "the product is a square number", test: (x, y) => Number.isInteger(Math.sqrt(x * y)) },
                { text: "the product is a multiple of 4", test: (x, y) => (x * y) % 4 === 0 },
              ]
            : [
                { text: `the difference is ${s % 4}`, test: (x, y) => Math.abs(x - y) === s % 4 },
                { text: "the difference is at least 2", test: (x, y) => Math.abs(x - y) >= 2 },
                { text: "the difference is an odd number", test: (x, y) => Math.abs(x - y) % 2 === 1 },
              ];
      const ev = r.pick(evs);
      const N = a * b;
      const both6 = a === 6 && b === 6;
      const pairDev = a === b ? (both6 ? "two fair six-sided dice" : `two fair ${a}-sided spinners, each numbered 1 to ${a}`) : `${device(a)} and ${device(b)}`;
      const intro = both6 ? `${name} rolls two fair six-sided dice` : `${name} uses ${pairDev}`;
      const opText = op === "sum" ? "adds the two scores" : op === "product" ? "multiplies the two scores" : "finds the difference between the two scores (larger − smaller)";
      const pairs: Array<[number, number]> = [];
      for (let x = 1; x <= a; x++) for (let y = 1; y <= b; y++) pairs.push([x, y]);
      if (tier === 3) {
        const conds: Ev[] = [
          { text: `the total is greater than ${s}`, test: (x, y) => x + y > s },
          { text: "at least one of the scores is even", test: (x, y) => x % 2 === 0 || y % 2 === 0 },
          { text: "the two scores are different", test: (x, y) => x !== y },
        ];
        const targets: Ev[] = [
          { text: "both scores are odd", test: (x, y) => x % 2 === 1 && y % 2 === 1 },
          { text: `at least one score is a ${Math.min(a, b)}`, test: (x, y) => x === Math.min(a, b) || y === Math.min(a, b) },
          { text: "the product is a multiple of 3", test: (x, y) => (x * y) % 3 === 0 },
          { text: "the total is even", test: (x, y) => (x + y) % 2 === 0 },
        ];
        const c = r.pick(conds);
        const t = r.pick(targets);
        const cPairs = pairs.filter(([x, y]) => c.test(x, y));
        const both = cPairs.filter(([x, y]) => t.test(x, y));
        if (cPairs.length < 5 || cPairs.length > N - 3 || both.length < 1 || both.length >= cPairs.length) return null;
        const intro3 = both6 ? `${name} rolls two fair six-sided dice.` : `${name} uses ${pairDev}, recording one score from each.`;
        return {
          prompt: `${intro3} Given that ${c.text}, work out the probability that ${t.text}. Give your answer as a fraction.`,
          answer: fAns(both.length, cPairs.length),
          solution: [
            `Draw the ${a} × ${b} sample space grid: ${N} equally likely outcomes.`,
            `"Given that ${c.text}" restricts you to the ${cPairs.length} outcomes where this happens.`,
            `Of these, the outcomes where ${t.text}: ${both.length <= 8 ? `${both.map(([x, y]) => `(${x}, ${y})`).join(", ")} — ` : ""}${both.length} of them.`,
            `P = ${P(both.length, cPairs.length)}${simplify(both.length, cPairs.length)[1] !== cPairs.length ? ` = ${F(both.length, cPairs.length)}` : ""}`,
          ],
          hint: "\"Given that\" shrinks the sample space — count only the outcomes where the given event happens.",
          traps: fTraps(both.length, cPairs.length, [[both.length, N, `You divided by all ${N} outcomes — "given that" means divide by the ${cPairs.length} outcomes where ${c.text}.`]]),
        };
      }
      const fav = pairs.filter(([x, y]) => ev.test(x, y));
      if (fav.length < 2 || fav.length > N - 2) return null;
      return {
        prompt: `${intro} and ${opText}. Work out the probability that ${ev.text}. Give your answer as a fraction.`,
        answer: fAns(fav.length, N),
        solution: [
          `Draw a sample space grid: ${a} × ${b} = ${N} equally likely outcomes.`,
          `Outcomes where ${ev.text}: ${fav.length <= 8 ? fav.map(([x, y]) => `(${x}, ${y})`).join(", ") + " — " : ""}${fav.length} of them.`,
          `P ${eqF(fav.length, N)}`,
        ],
        hint: `Make a ${a} by ${b} grid and fill in each cell, then count the cells that work.`,
        traps: fTraps(fav.length, N, [fav.length < a + b ? [fav.length, a + b, `There are ${a} × ${b} = ${N} outcomes, not ${a} + ${b}.`] : null]),
      };
    }, rng);
  },
};

// ---------------------------------------------------------------------------
// 4. OR rule (mutually exclusive) and AND rule (independent)
// ---------------------------------------------------------------------------

interface AndCtx {
  a: string;
  b: string;
  both: string;
  aNotB: string;
  neither: string;
  one: string;
}
const AND_CTX: AndCtx[] = [
  {
    a: "Marcus passes his piano exam", b: "Marcus passes his swimming test",
    both: "Marcus passes both", aNotB: "Marcus passes the piano exam but fails the swimming test", neither: "Marcus passes neither", one: "Marcus passes exactly one of them",
  },
  {
    a: "Priya's bus is late on Monday", b: "it rains in Singapore on Monday",
    both: "the bus is late and it rains", aNotB: "the bus is late and it does not rain", neither: "the bus is not late and it does not rain", one: "exactly one of these two things happens",
  },
  {
    a: "Arjun scores a goal in a football match", b: "Zara scores a goal in a netball match on the same day",
    both: "both of them score", aNotB: "Arjun scores but Zara does not", neither: "neither of them scores", one: "exactly one of them scores",
  },
  {
    a: "a seed from packet A germinates", b: "a seed from packet B germinates",
    both: "both seeds germinate", aNotB: "the seed from A germinates but the seed from B does not", neither: "neither seed germinates", one: "exactly one of the seeds germinates",
  },
];

const orAndRules: Drill = {
  id: "probability.or-and-rules",
  topicId: T,
  title: "Use the OR rule and the AND rule",
  level: 2,
  guideRef: "or-and-rules",
  generate(rng, tier) {
    return attempt((r) => {
      const mode = r.pick(tier === 1 ? ["or", "and", "and"] : ["or", "and", "and", "and"]);
      if (mode === "or") {
        const name = r.pick(NAMES);
        if (tier === 1 || r.bool()) {
          const p = r.int(8, 50), q = r.int(8, 50);
          if (p + q >= 95 || p === q) return null;
          const ans = p + q;
          const ways = r.pick([["takes the MRT", "takes the bus", "walks"], ["has noodles", "has rice", "has roti prata"], ["plays badminton", "goes swimming", "goes to the library"]]);
          return {
            prompt: `Each day ${name} either ${ways[0]}, ${ways[1]} or ${ways[2]}. P(${ways[0]}) = ${dec(p)} and P(${ways[1]}) = ${dec(q)}. Work out the probability that on a given day ${name} ${ways[0]} or ${ways[1]}.`,
            answer: { type: "number", value: clean(ans / 100) },
            solution: [`The events cannot happen together (mutually exclusive), so add.`, `P(${ways[0]} or ${ways[1]}) = ${dec(p)} + ${dec(q)} = ${dec(ans)}`],
            hint: "Can both happen on the same day? If not, use the OR rule.",
            traps: nTraps(clean(ans / 100), [[clean((p * q) / 10000), "You multiplied — for OR with mutually exclusive events, add."], [clean(1 - ans / 100), "That is the probability of the third option."]]),
          };
        }
        // fractions
        const dA = r.pick([3, 4, 5, 6, 8, 10, 12]), dB = r.pick([3, 4, 5, 6, 8, 9, 10, 12]);
        const nA = r.int(1, dA - 1), nB = r.int(1, dB - 1);
        if (simplify(nA, dA)[1] !== dA || simplify(nB, dB)[1] !== dB) return null;
        const sumN = nA * dB + nB * dA, sumD = dA * dB;
        if (sumN >= sumD || dA === dB) return null;
        const outs = r.pick([["red", "blue"], ["a 1", "a 2"], ["strawberry", "mango"]]);
        const thing = outs[0] === "a 1" ? "a biased spinner lands on" : outs[0] === "red" ? "a counter taken at random from a bag is" : "a sweet taken at random from a jar is";
        return {
          prompt: `The probability that ${thing} ${outs[0]} is ${F(nA, dA)}. The probability that it is ${outs[1]} is ${F(nB, dB)}. Work out the probability that it is ${outs[0]} or ${outs[1]}. Give your answer as a fraction.`,
          answer: fAns(sumN, sumD),
          solution: ["The outcomes are mutually exclusive, so add the probabilities.", `${F(nA, dA)} + ${F(nB, dB)} = ${P(sumN, sumD)}${simplify(sumN, sumD)[1] !== sumD ? ` = ${F(sumN, sumD)}` : ""}`],
          hint: "Add fractions using a common denominator.",
          traps: fTraps(sumN, sumD, [[nA + nB, dA + dB, "You added the tops and the bottoms — use a common denominator."], [nA * nB, dA * dB, "You multiplied — for OR with mutually exclusive outcomes, add."]]),
        };
      }
      // AND with independent events
      const ctx = r.pick(AND_CTX);
      const p = tier === 1 ? r.int(1, 9) * 10 : r.int(1, 9) * 10;
      const q = tier === 1 ? r.int(1, 9) * 10 : 5 * r.int(1, 19);
      if (p === q) return null;
      const ask = tier === 1 ? "both" : tier === 2 ? r.pick(["both", "aNotB", "neither"]) : r.pick(["one", "neither", "aNotB", "one"]);
      const pp = p / 100, qq = q / 100;
      let ans = 0;
      const sol: string[] = ["The events are independent, so multiply along for AND."];
      let traps: Trap[] = [];
      if (ask === "both") {
        ans = clean(pp * qq);
        sol.push(`P = ${dec(p)} × ${dec(q)} = ${num(ans)}`);
        traps = nTraps(ans, [[clean((p + q) / 100), "You added — for AND with independent events, multiply."]]);
      } else if (ask === "aNotB") {
        ans = clean(pp * (1 - qq));
        sol.push(`P(second event does not happen) = 1 − ${dec(q)} = ${dec(100 - q)}`, `P = ${dec(p)} × ${dec(100 - q)} = ${num(ans)}`);
        traps = nTraps(ans, [[clean(pp * qq), "That is the probability that both happen. You need the second one NOT to happen."], [p > q ? clean((p - q) / 100) : null, "Subtracting the probabilities does not give 'A and not B' — multiply P(A) by P(not B)."]]);
      } else if (ask === "neither") {
        ans = clean((1 - pp) * (1 - qq));
        sol.push(`P(neither) = ${dec(100 - p)} × ${dec(100 - q)} = ${num(ans)}`);
        traps = nTraps(ans, [[clean(1 - pp * qq), "That is 1 − P(both), which is P(not both) — not the same as 'neither'."], [p + q < 100 ? clean((100 - p - q) / 100) : null, "These events can both happen, so you cannot just subtract both from 1. Multiply the 'not' probabilities."]]);
      } else {
        ans = clean(pp * (1 - qq) + (1 - pp) * qq);
        sol.push(
          `Two ways: first only, or second only.`,
          `${dec(p)} × ${dec(100 - q)} + ${dec(100 - p)} × ${dec(q)} = ${num(clean(pp * (1 - qq)))} + ${num(clean((1 - pp) * qq))} = ${num(ans)}`,
        );
        traps = nTraps(ans, [[clean(pp * (1 - qq)), "That is only one of the two ways — add the other way too."], [clean((p + q) / 100), "Adding P(A) and P(B) counts 'both' in as well, and these are not mutually exclusive."]]);
      }
      const target = ask === "both" ? ctx.both : ask === "aNotB" ? ctx.aNotB : ask === "neither" ? ctx.neither : ctx.one;
      return {
        prompt: `The probability that ${ctx.a} is ${dec(p)}. The probability that ${ctx.b} is ${dec(q)}. These events are independent. Work out the probability that ${target}.`,
        answer: { type: "number", value: ans },
        solution: sol,
        hint: ask === "one" ? "Exactly one can happen in two different ways — find each and add." : "Independent events: multiply the probabilities. Use 1 − p for 'does not happen'.",
        traps,
      };
    }, rng);
  },
};

// ---------------------------------------------------------------------------
// 5. At least one
// ---------------------------------------------------------------------------

const atLeastOne: Drill = {
  id: "probability.at-least-one",
  topicId: T,
  title: "\"At least one\" using 1 − P(none)",
  level: 2,
  guideRef: "or-and-rules",
  generate(rng, tier) {
    return attempt((r) => {
      const name = r.pick(NAMES);
      const kind = tier === 1 ? "repeat" : r.pick(tier === 2 ? ["repeat", "dice", "three"] : ["dice", "three", "repeat"]);
      if (kind === "repeat") {
        const p = r.int(1, 9);
        const n = tier === 1 ? 2 : tier === 2 ? 3 : r.pick([3, 4]);
        const ctx = r.pick([
          { s: "a basketball shot by", e: "scores", pl: "shots", act: `takes ${n} shots`, rest: "one shot scores" },
          { s: "a seed planted by", e: "germinates", pl: "seeds", act: `plants ${n} seeds`, rest: "one seed germinates" },
          { s: "a free throw taken by", e: "goes in", pl: "throws", act: `takes ${n} free throws`, rest: "one free throw goes in" },
        ]);
        const qn = 10 - p;
        const none = clean((qn / 10) ** n);
        const ans = clean(1 - none);
        return {
          prompt: `The probability that ${ctx.s} ${name} ${ctx.e} is ${dec(p, 1)}. ${name} ${ctx.act}. The ${ctx.pl} are independent. Work out the probability that at least ${ctx.rest}.`,
          answer: { type: "number", value: ans },
          solution: [`P(fails once) = 1 − ${dec(p, 1)} = ${dec(qn, 1)}`, `P(none) = ${dec(qn, 1)}^${n} = ${num(none)}`.replace(`^${n}`, `${n === 2 ? "²" : n === 3 ? "³" : "⁴"}`), `P(at least one) = 1 − ${num(none)} = ${num(ans)}`],
          hint: "The opposite of 'at least one' is 'none'. Find P(none) and take it away from 1.",
          traps: nTraps(ans, [[none, "That is P(none). The answer is 1 minus this."], [clean((p / 10) ** n), "That is the probability that ALL of them succeed."], [n * p < 10 ? clean((n * p) / 10) : null, "Adding the probabilities double-counts the cases where more than one succeeds."]]),
        };
      }
      if (kind === "dice") {
        const n = tier === 2 ? r.pick([2, 3]) : r.pick([3, 4]);
        const face = r.int(1, 6);
        const d = 6 ** n, none = 5 ** n;
        return {
          prompt: `${name} rolls a fair six-sided dice ${n} times. Work out the probability that ${name} gets at least one ${face}. Give your answer as a fraction.`,
          answer: fAns(d - none, d),
          solution: [`P(not a ${face}) = ${P(5, 6)} on each roll.`, `P(no ${face}s in ${n} rolls) = ${n === 2 ? `{{(5/6)^2}}` : n === 3 ? `{{(5/6)^3}}` : `{{(5/6)^4}}`} = ${P(none, d)}`, `P(at least one ${face}) = 1 − ${P(none, d)} ${eqF(d - none, d)}`],
          hint: "Work out the chance of NO " + face + "s first.",
          traps: fTraps(d - none, d, [[n, 6, `Adding ${F(1, 6)} ${n} times double-counts the rolls with more than one ${face}.`], [none, d, `That is P(no ${face}s). Subtract it from 1.`]]),
        };
      }
      // three different independent events
      const ps = [r.int(1, 9), r.int(1, 9), r.int(1, 9)];
      if (new Set(ps).size < 2) return null;
      const people = r.shuffle(NAMES).slice(0, 3);
      const ask = tier === 3 ? r.pick(["least", "exactly"]) : "least";
      const qs = ps.map((p) => 10 - p);
      const none = clean((qs[0] * qs[1] * qs[2]) / 1000);
      let ans: number;
      const sol = [`P(each misses): ${qs.map((q) => dec(q, 1)).join(", ")}`];
      let traps: Trap[];
      if (ask === "least") {
        ans = clean(1 - none);
        sol.push(`P(none hit) = ${qs.map((q) => dec(q, 1)).join(" × ")} = ${num(none)}`, `P(at least one hits) = 1 − ${num(none)} = ${num(ans)}`);
        traps = nTraps(ans, [[none, "That is P(none hit). Subtract it from 1."], [clean((ps[0] * ps[1] * ps[2]) / 1000), "That is P(all three hit)."]]);
      } else {
        const t1 = ps[0] * qs[1] * qs[2], t2 = qs[0] * ps[1] * qs[2], t3 = qs[0] * qs[1] * ps[2];
        ans = clean((t1 + t2 + t3) / 1000);
        sol.push(
          `Exactly one hits: three cases.`,
          `${dec(ps[0], 1)} × ${dec(qs[1], 1)} × ${dec(qs[2], 1)} + ${dec(qs[0], 1)} × ${dec(ps[1], 1)} × ${dec(qs[2], 1)} + ${dec(qs[0], 1)} × ${dec(qs[1], 1)} × ${dec(ps[2], 1)}`,
          `= ${dec(t1, 3)} + ${dec(t2, 3)} + ${dec(t3, 3)} = ${num(ans)}`,
        );
        traps = nTraps(ans, [[clean(t1 / 1000), "That is only one of the three cases — who hits could be any of the three."], [clean(1 - none), "That is P(at least one), which also includes two or three hitting."]]);
      }
      return {
        prompt: `${people[0]}, ${people[1]} and ${people[2]} each take one shot at a target. Their probabilities of hitting it are ${dec(ps[0], 1)}, ${dec(ps[1], 1)} and ${dec(ps[2], 1)}, independently. Work out the probability that ${ask === "least" ? "at least one of them hits the target" : "exactly one of them hits the target"}.`,
        answer: { type: "number", value: ans },
        solution: sol,
        hint: ask === "least" ? "At least one = 1 − P(none)." : "List the three ways exactly one person can hit, and add them.",
        traps,
      };
    }, rng);
  },
};

// ---------------------------------------------------------------------------
// 6. Tree diagrams: two (or three) draws, with or without replacement
// ---------------------------------------------------------------------------

const BAGS = [
  { item: "sweets", c1: "strawberry", c2: "lime", where: "a bag" },
  { item: "counters", c1: "red", c2: "blue", where: "a bag" },
  { item: "pens", c1: "black", c2: "green", where: "a box" },
  { item: "marbles", c1: "yellow", c2: "white", where: "a jar" },
];

const treeDraws: Drill = {
  id: "probability.tree-draws",
  topicId: T,
  title: "Tree diagrams: with and without replacement",
  level: 2,
  guideRef: "tree-diagrams",
  generate(rng, tier) {
    return attempt((r) => {
      const name = r.pick(NAMES);
      const bag = r.pick(BAGS);
      const one = bag.item.slice(0, -1);
      if (tier === 3) {
        const a = r.int(3, 8), b = r.int(3, 8);
        const t = a + b;
        if (t > 14) return null;
        const D = t * (t - 1) * (t - 2);
        const ask = r.pick(["same", "two", "atleast"]);
        const allA = a * (a - 1) * (a - 2), allB = b * (b - 1) * (b - 2);
        let n: number;
        let sol: string[];
        let traps: Trap[];
        let text: string;
        if (ask === "same") {
          n = allA + allB;
          text = "all three are the same colour";
          sol = [`P(all ${bag.c1}) = ${P(a, t)} × ${P(a - 1, t - 1)} × ${P(a - 2, t - 2)} = ${P(allA, D)}`, `P(all ${bag.c2}) = ${P(b, t)} × ${P(b - 1, t - 1)} × ${P(b - 2, t - 2)} = ${P(allB, D)}`, `Add: ${P(allA, D)} + ${P(allB, D)} ${eqF(n, D)}`];
          traps = fTraps(n, D, [[a ** 3 + b ** 3, t ** 3, "That would be with replacement — each pick changes what is left in the bag."], [allA, D, `That is only all ${bag.c1}. All ${bag.c2} is also 'the same colour'.`]]);
        } else if (ask === "two") {
          n = 3 * a * (a - 1) * b;
          text = `exactly two are ${bag.c1}`;
          sol = [`One order: ${bag.c1}, ${bag.c1}, ${bag.c2}: ${P(a, t)} × ${P(a - 1, t - 1)} × ${P(b, t - 2)} = ${P(a * (a - 1) * b, D)}`, `The ${bag.c2} one can come 1st, 2nd or 3rd — 3 orders, each with the same probability.`, `3 × ${P(a * (a - 1) * b, D)} ${eqF(n, D)}`];
          traps = fTraps(n, D, [[a * (a - 1) * b, D, "That is one order only — there are 3 positions for the odd one out."], [3 * a * a * b, t ** 3, "That would be with replacement."]]);
        } else {
          n = D - allA;
          text = `at least one is ${bag.c2}`;
          sol = [`Opposite event: all three are ${bag.c1}.`, `P(all ${bag.c1}) = ${P(a, t)} × ${P(a - 1, t - 1)} × ${P(a - 2, t - 2)} = ${P(allA, D)}`, `P(at least one ${bag.c2}) = 1 − ${P(allA, D)} ${eqF(n, D)}`];
          traps = fTraps(n, D, [[allA, D, `That is P(all ${bag.c1}). Subtract it from 1.`], [t ** 3 - a ** 3, t ** 3, "That would be with replacement."]]);
        }
        return {
          prompt: `There are ${a} ${bag.c1} ${bag.item} and ${b} ${bag.c2} ${bag.item} in ${bag.where}. ${name} takes three ${bag.item} at random, one after another, without replacement. Work out the probability that ${text}. Give your answer as a fraction.`,
          answer: fAns(n, D),
          solution: sol,
          hint: "Without replacement, both the top and the bottom of each fraction go down by 1 after each pick.",
          traps,
        };
      }
      const a = r.int(2, tier === 1 ? 6 : 9), b = r.int(2, tier === 1 ? 6 : 9);
      if (a === b && r.bool(0.7)) return null;
      const t = a + b;
      if (t > (tier === 1 ? 10 : 15)) return null;
      const repl = tier === 1 ? r.bool(0.6) : r.bool(0.4);
      const D = repl ? t * t : t * (t - 1);
      const Dalt = repl ? t * (t - 1) : t * t;
      const aa = repl ? a * a : a * (a - 1), bb = repl ? b * b : b * (b - 1);
      const aaAlt = repl ? a * (a - 1) : a * a, bbAlt = repl ? b * (b - 1) : b * b;
      const s2a = repl ? a : a - 1, s2b = repl ? b : b - 1, s2t = repl ? t : t - 1;
      const ask = r.pick(tier === 1 ? ["both", "same", "diff"] : ["both", "same", "diff", "atleast"]);
      let n: number, nAlt: number, text: string;
      const sol: string[] = [
        repl
          ? `With replacement the second pick is the same as the first: P(${bag.c1}) = ${P(a, t)}, P(${bag.c2}) = ${P(b, t)} both times.`
          : `Without replacement there is one fewer ${one} for the second pick, so the second-pick denominators are ${t - 1}.`,
      ];
      const extra: Array<[number, number, string] | null> = [];
      if (ask === "both") {
        n = aa; nAlt = aaAlt; text = `both ${bag.item} are ${bag.c1}`;
        sol.push(`P(${bag.c1}, ${bag.c1}) = ${P(a, t)} × ${P(s2a, s2t)} ${eqF(n, D)}`);
        extra.push([a + s2a, t + s2t, "Multiply along the branches — don't add."]);
      } else if (ask === "same") {
        n = aa + bb; nAlt = aaAlt + bbAlt; text = `both ${bag.item} are the same colour`;
        sol.push(`P(${bag.c1}, ${bag.c1}) = ${P(a, t)} × ${P(s2a, s2t)} = ${P(aa, D)}`, `P(${bag.c2}, ${bag.c2}) = ${P(b, t)} × ${P(s2b, s2t)} = ${P(bb, D)}`, `Add the two paths: ${P(n, D)}${simplify(n, D)[1] !== D ? ` = ${F(n, D)}` : ""}`);
        extra.push([aa, D, `That is only both ${bag.c1} — both ${bag.c2} is the same colour too.`]);
      } else if (ask === "diff") {
        n = 2 * a * b; nAlt = 2 * a * b; text = `the two ${bag.item} are different colours`;
        sol.push(`P(${bag.c1}, ${bag.c2}) = ${P(a, t)} × ${P(b, s2t)} = ${P(a * b, D)}`, `P(${bag.c2}, ${bag.c1}) = ${P(b, t)} × ${P(a, s2t)} = ${P(a * b, D)}`, `Add: ${P(n, D)}${simplify(n, D)[1] !== D ? ` = ${F(n, D)}` : ""}`);
        extra.push([a * b, D, "That is one order only — the other colour could come first."]);
      } else {
        n = D - aa; nAlt = Dalt - aaAlt; text = `at least one ${one} is ${bag.c2}`;
        sol.push(`Opposite: both ${bag.c1}. P(${bag.c1}, ${bag.c1}) = ${P(a, t)} × ${P(s2a, s2t)} = ${P(aa, D)}`, `P(at least one ${bag.c2}) = 1 − ${P(aa, D)} ${eqF(n, D)}`);
        extra.push([bb, D, `That is both ${bag.c2}. 'At least one' also includes one of each.`]);
      }
      return {
        prompt: `${bag.where[0].toUpperCase() + bag.where.slice(1)} contains ${a} ${bag.c1} ${bag.item} and ${b} ${bag.c2} ${bag.item}. ${name} takes a ${one} at random${repl ? ", notes its colour and puts it back" : " and does not put it back"}. ${name} then takes a second ${one} at random. Work out the probability that ${text}. Give your answer as a fraction.`,
        answer: fAns(n, D),
        solution: sol,
        hint: repl ? "Draw a tree: the second set of branches has the same probabilities as the first." : "Draw a tree: on the second branches, one " + one + " has gone, so the total is " + (t - 1) + ".",
        traps: fTraps(n, D, [[nAlt, Dalt, repl ? "The first one is put back, so the bag is unchanged for the second pick." : "The first one is NOT put back — the second pick is out of " + (t - 1) + "."], ...extra]),
      };
    }, rng);
  },
};

// ---------------------------------------------------------------------------
// 7. Conditional probability from a tree
// ---------------------------------------------------------------------------

interface CondCtx {
  setup: (a: string, b: string, c: string) => string;
  A: string;
  notA: string;
  B: string;
  notB: string;
  askB: string;
  askAgivenB: string;
  askNotAgivenB: string;
  askAgivenNotB: string;
}
const COND: CondCtx[] = [
  {
    setup: (a, b, c) => `The probability that it rains on a school day is ${a}. If it rains, the probability that Mei is late for school is ${b}. If it does not rain, the probability that Mei is late is ${c}.`,
    A: "rain", notA: "no rain", B: "late", notB: "not late",
    askB: "Mei is late on a randomly chosen school day",
    askAgivenB: "it rained, given that Mei was late",
    askNotAgivenB: "it did not rain, given that Mei was late",
    askAgivenNotB: "it rained, given that Mei was not late",
  },
  {
    setup: (a, b, c) => `A plant nursery tests its plants for a leaf disease. The probability that a plant has the disease is ${a}. If a plant has the disease, the probability that the test is positive is ${b}. If a plant does not have the disease, the probability that the test is positive is ${c}.`,
    A: "disease", notA: "no disease", B: "positive", notB: "negative",
    askB: "the test on a randomly chosen plant is positive",
    askAgivenB: "a plant has the disease, given that its test is positive",
    askNotAgivenB: "a plant does not have the disease, given that its test is positive",
    askAgivenNotB: "a plant has the disease, given that its test is negative",
  },
  {
    setup: (a, b, c) => `Arjun travels to school by MRT or by bus. The probability that he takes the MRT is ${a}. If he takes the MRT, the probability that he arrives early is ${b}. If he takes the bus, the probability that he arrives early is ${c}.`,
    A: "MRT", notA: "bus", B: "early", notB: "not early",
    askB: "Arjun arrives early on a randomly chosen day",
    askAgivenB: "Arjun took the MRT, given that he arrived early",
    askNotAgivenB: "Arjun took the bus, given that he arrived early",
    askAgivenNotB: "Arjun took the MRT, given that he did not arrive early",
  },
];

const conditional: Drill = {
  id: "probability.conditional",
  topicId: T,
  title: "Conditional probability: \"given that\"",
  level: 3,
  guideRef: "tree-diagrams",
  generate(rng, tier) {
    return attempt((r) => {
      if (tier === 3 && r.bool(0.4)) {
        const bag = r.pick(BAGS);
        const a = r.int(3, 9), b = r.int(3, 9);
        if (a === b) return null;
        const t = a + b;
        const aa = a * (a - 1), bb = b * (b - 1);
        const name = r.pick(NAMES);
        return {
          prompt: `${bag.where[0].toUpperCase() + bag.where.slice(1)} contains ${a} ${bag.c1} ${bag.item} and ${b} ${bag.c2} ${bag.item}. ${name} takes two at random without replacement. Given that the two ${bag.item} are the same colour, work out the probability that they are both ${bag.c1}. Give your answer as a fraction.`,
          answer: fAns(aa, aa + bb),
          solution: [
            `P(both ${bag.c1}) = ${P(a, t)} × ${P(a - 1, t - 1)} = ${P(aa, t * (t - 1))}`,
            `P(both ${bag.c2}) = ${P(b, t)} × ${P(b - 1, t - 1)} = ${P(bb, t * (t - 1))}`,
            `P(same colour) = ${P(aa + bb, t * (t - 1))}`,
            `P(both ${bag.c1} | same) = ${P(aa, t * (t - 1))} ÷ ${P(aa + bb, t * (t - 1))} ${eqF(aa, aa + bb)}`,
          ],
          hint: "P(A given B) = P(A and B) ÷ P(B). Here 'both " + bag.c1 + "' already means 'same colour'.",
          traps: fTraps(aa, aa + bb, [[aa, t * (t - 1), "That is P(both " + bag.c1 + ") out of everything — 'given that' means divide by P(same colour)."]]),
        };
      }
      const ctx = r.pick(COND);
      const a = r.int(1, 9), b = r.int(1, 9), c = r.int(1, 9);
      if (b === c) return null;
      const AB = a * b, nAB = (10 - a) * c, B = AB + nAB;
      const ask = tier === 1 ? "B" : tier === 2 ? r.pick(["AgB", "AgB", "nAgB"]) : r.pick(["AgB", "nAgB", "AgnB"]);
      const setup = ctx.setup(dec(a, 1), dec(b, 1), dec(c, 1));
      const sol = [
        `Tree: P(${ctx.A}) = ${dec(a, 1)}, P(${ctx.notA}) = ${dec(10 - a, 1)}; then P(${ctx.B}) = ${dec(b, 1)} after ${ctx.A} and ${dec(c, 1)} after ${ctx.notA}.`,
        `P(${ctx.A} and ${ctx.B}) = ${dec(a, 1)} × ${dec(b, 1)} = ${dec(AB)}`,
        `P(${ctx.notA} and ${ctx.B}) = ${dec(10 - a, 1)} × ${dec(c, 1)} = ${dec(nAB)}`,
        `P(${ctx.B}) = ${dec(AB)} + ${dec(nAB)} = ${dec(B)}`,
      ];
      if (ask === "B") {
        return {
          prompt: `${setup} Work out the probability that ${ctx.askB}.`,
          answer: { type: "number", value: clean(B / 100) },
          solution: sol,
          hint: "Two branches end in '" + ctx.B + "'. Find each one and add.",
          traps: nTraps(clean(B / 100), [[clean(AB / 100), "That is just one branch — '" + ctx.B + "' can also happen after '" + ctx.notA + "'."], [clean((b + c) / 10), "Multiply along each branch before adding."]]),
        };
      }
      if (ask === "AgB" || ask === "nAgB") {
        const top = ask === "AgB" ? AB : nAB;
        if (top === 0) return null;
        sol.push(`P(${ask === "AgB" ? ctx.A : ctx.notA} | ${ctx.B}) = ${dec(top)} ÷ ${dec(B)} = ${P(top, B)}${simplify(top, B)[1] !== B ? ` = ${F(top, B)}` : ""}`);
        return {
          prompt: `${setup} Work out the probability that ${ask === "AgB" ? ctx.askAgivenB : ctx.askNotAgivenB}. Give your answer as a fraction.`,
          answer: fAns(top, B),
          solution: sol,
          hint: "P(X given Y) = P(X and Y) ÷ P(Y). Find P(" + ctx.B + ") from both branches first.",
          traps: fTraps(top, B, [[top, 100, "That is P(both things happen). 'Given that' means divide by P(" + ctx.B + ")."], ask === "AgB" ? [b, 10, "That is P(" + ctx.B + " given " + ctx.A + ") — the other way round."] : null]),
        };
      }
      const top = a * (10 - b), nB = top + (10 - a) * (10 - c);
      if (top === 0) return null;
      return {
        prompt: `${setup} Work out the probability that ${ctx.askAgivenNotB}. Give your answer as a fraction.`,
        answer: fAns(top, nB),
        solution: [
          sol[0],
          `P(${ctx.A} and ${ctx.notB}) = ${dec(a, 1)} × ${dec(10 - b, 1)} = ${dec(top)}`,
          `P(${ctx.notA} and ${ctx.notB}) = ${dec(10 - a, 1)} × ${dec(10 - c, 1)} = ${dec((10 - a) * (10 - c))}`,
          `P(${ctx.notB}) = ${dec(nB)}, so P(${ctx.A} | ${ctx.notB}) = ${dec(top)} ÷ ${dec(nB)} = ${P(top, nB)}${simplify(top, nB)[1] !== nB ? ` = ${F(top, nB)}` : ""}`,
        ],
        hint: "Use the '" + ctx.notB + "' branches: P(X given Y) = P(X and Y) ÷ P(Y).",
        traps: fTraps(top, nB, [[top, 100, "That is P(both). Divide by P(" + ctx.notB + ")."]]),
      };
    }, rng);
  },
};

// ---------------------------------------------------------------------------
// 8. Probability with algebra (sweets in a bag → quadratic)
// ---------------------------------------------------------------------------

/** "n² − n − 90 = 0" style quadratic with integer coefficients A n² + B n + C. */
function quad(A: number, B: number, C: number, v: string): string {
  const t = (c: number, s: string, first: boolean) => {
    if (c === 0) return "";
    const sign = c < 0 ? (first ? "−" : " − ") : first ? "" : " + ";
    const m = Math.abs(c);
    return sign + (s && m === 1 ? "" : String(m)) + s;
  };
  return `{{${(t(A, `${v}^2`, true) + t(B, v, false) + t(C, "", false)).replace(/−/g, "-")} = 0}}`;
}
function gcd3(a: number, b: number, c: number): number {
  const g = (x: number, y: number): number => (y ? g(y, x % y) : Math.abs(x));
  return g(g(a, b), c) || 1;
}

const sweetsEquation: Drill = {
  id: "probability.sweets-equation",
  topicId: T,
  title: "Form and solve an equation from a probability",
  level: 3,
  guideRef: "algebraic-probability",
  generate(rng, tier) {
    return attempt((r) => {
      const name = r.pick(NAMES);
      const bag = r.pick(BAGS);
      const kind = tier === 1 ? "total" : tier === 2 ? r.pick(["total", "count"]) : r.pick(["count", "other"]);
      if (kind === "total") {
        // k of colour c1, n in total (unknown); P(both c1) = k(k−1)/(n(n−1)).
        const k = r.int(3, tier === 1 ? 6 : 9);
        const N = r.int(k + 2, k + (tier === 1 ? 8 : 14));
        const [p, q] = simplify(k * (k - 1), N * (N - 1));
        const M = N * (N - 1);
        return {
          prompt: `There are n ${bag.item} in ${bag.where}. ${k} of them are ${bag.c1}. ${name} takes two ${bag.item} at random without replacement. The probability that both are ${bag.c1} is ${F(p, q)}. Work out the value of n.`,
          answer: { type: "number", value: N },
          solution: [
            `P(both ${bag.c1}) = {{${k}/n}} × {{${k - 1}/(n-1)}} = {{${k * (k - 1)}/(n(n-1))}}`,
            `So {{${k * (k - 1)}/(n(n-1))}} = ${F(p, q)}, giving n(n − 1) = ${k * (k - 1)} × ${F(q, p)} = ${M}`,
            `${quad(1, -1, -M, "n")} → (n − ${N})(n + ${N - 1}) = 0`,
            `n = ${N} (n cannot be negative)`,
          ],
          hint: "Write P(both) with n in it, set it equal to the given fraction, and you will get a quadratic.",
          traps: nTraps(N, [[N - 1, "Check: n(n − 1) uses n for the total. Substitute your answer back in."]]),
        };
      }
      if (kind === "count") {
        // N total (known), x of colour c1 (unknown); P(both c1) given.
        const N = r.int(8, tier === 2 ? 15 : 20);
        const X = r.int(3, N - 2);
        const [p, q] = simplify(X * (X - 1), N * (N - 1));
        const M = X * (X - 1);
        return {
          prompt: `${bag.where[0].toUpperCase() + bag.where.slice(1)} contains ${N} ${bag.item}. x of them are ${bag.c1} and the rest are ${bag.c2}. ${name} takes two ${bag.item} at random without replacement. The probability that both are ${bag.c1} is ${F(p, q)}. Work out the value of x.`,
          answer: { type: "number", value: X },
          solution: [
            `P(both ${bag.c1}) = {{x/${N}}} × {{(x-1)/${N - 1}}} = {{x(x-1)/${N * (N - 1)}}}`,
            `So x(x − 1) = ${N * (N - 1)} × ${F(p, q)} = ${M}`,
            `${quad(1, -1, -M, "x")} → (x − ${X})(x + ${X - 1}) = 0`,
            `x = ${X} (x cannot be negative)`,
          ],
          hint: "The second fraction has one fewer " + bag.c1 + " and one fewer in total.",
          traps: nTraps(X, [[N - X, `That is the number of ${bag.c2} ${bag.item}.`]]),
        };
      }
      // other: r of colour c1 known, n of colour c2 unknown; P(both c2) given.
      const rr = r.int(2, 8);
      const N = r.int(3, 14);
      const tot = N + rr;
      const [p, q] = simplify(N * (N - 1), tot * (tot - 1));
      // q n(n−1) = p (n + rr)(n + rr − 1) → (q − p) n² + (−q − p(2rr − 1)) n − p rr(rr − 1) = 0
      let A = q - p, B = -q - p * (2 * rr - 1), C = -p * rr * (rr - 1);
      const g = gcd3(A, B, C);
      A /= g; B /= g; C /= g;
      if (A * N * N + B * N + C !== 0) return null;
      // other root = C / (A N): negative since C ≤ 0 < A.
      const other = C / (A * N);
      if (other >= 0) return null;
      const [on, od] = simplify(C, A * N);
      return {
        prompt: `${bag.where[0].toUpperCase() + bag.where.slice(1)} contains ${rr} ${bag.c1} ${bag.item} and n ${bag.c2} ${bag.item}. ${name} takes two ${bag.item} at random without replacement. The probability that both are ${bag.c2} is ${F(p, q)}. Work out the value of n.`,
        answer: { type: "number", value: N },
        solution: [
          `P(both ${bag.c2}) = {{n/(n+${rr})}} × {{(n-1)/(n+${rr - 1})}} = ${F(p, q)}`,
          `Cross-multiply: ${q}n(n − 1) = ${p}(n + ${rr})(n + ${rr - 1})`,
          `Expand and collect: ${quad(A, B, C, "n")}`,
          `Solve (factorise or use the formula): n = ${N} or n = ${on < 0 ? "−" : ""}${od === 1 ? Math.abs(on) : `{{${Math.abs(on)}/${od}}}`}. n must be a positive whole number, so n = ${N}.`,
        ],
        hint: "The total is n + " + rr + ". Write P(both) in terms of n, cross-multiply and collect into a quadratic.",
        traps: nTraps(N, [[tot, `That is the total number of ${bag.item}, n + ${rr}.`]]),
      };
    }, rng);
  },
};

// ---------------------------------------------------------------------------
// 9. Product rule for counting (H+)
// ---------------------------------------------------------------------------

const productRule: Drill = {
  id: "probability.product-rule",
  topicId: T,
  title: "Count outcomes with the product rule",
  level: 2,
  guideRef: "counting",
  generate(rng, tier) {
    return attempt((r) => {
      const name = r.pick(NAMES);
      const kind = r.pick(tier === 1 ? ["menu", "pin", "arrange"] : tier === 2 ? ["pin", "arrange", "digits", "menu"] : ["pin", "arrange", "digits"]);
      if (kind === "menu") {
        const m = r.int(3, 8), d = r.int(2, 6), s = r.int(2, 5);
        const skip = tier >= 2 && r.bool();
        const ans = m * d * (skip ? s + 1 : s);
        return {
          prompt: `A vegetarian café offers a set lunch: one of ${m} mains, one of ${d} drinks and ${skip ? `either one of ${s} desserts or no dessert` : `one of ${s} desserts`}. ${name} chooses a set lunch. How many different set lunches are possible?`,
          answer: { type: "number", value: ans },
          solution: [`Product rule: multiply the number of choices at each stage.`, `${m} × ${d} × ${skip ? `${s + 1} (${s} desserts or none)` : s} = ${big(ans)}`],
          hint: "Each main can go with each drink and each dessert — multiply, don't add.",
          traps: nTraps(ans, [[m + d + (skip ? s + 1 : s), "Adding counts the separate items, not the combinations. Multiply."], [skip ? m * d * s : null, "'No dessert' is one more choice at the dessert stage."]]),
        };
      }
      if (kind === "pin") {
        const L = tier === 1 ? 4 : r.pick([4, 5]);
        const rule = tier === 1 ? r.pick(["rep", "norep"]) : tier === 2 ? r.pick(["norep", "first", "norep-first"]) : r.pick(["norep-even", "norep-first", "first-odd"]);
        let ans: number;
        let text: string;
        let calc: string;
        const fall = (top: number, k: number) => { let p = 1; const f: number[] = []; for (let i = 0; i < k; i++) { p *= top - i; f.push(top - i); } return { p, f }; };
        if (rule === "rep") {
          ans = 10 ** L; text = "Digits can be repeated."; calc = `${Array(L).fill(10).join(" × ")} = ${big(ans)}`;
        } else if (rule === "norep") {
          const x = fall(10, L); ans = x.p; text = "No digit can be used more than once."; calc = `${x.f.join(" × ")} = ${big(ans)}`;
        } else if (rule === "first") {
          ans = 9 * 10 ** (L - 1); text = "Digits can be repeated, but the first digit cannot be 0."; calc = `9 × ${Array(L - 1).fill(10).join(" × ")} = ${big(ans)}`;
        } else if (rule === "norep-first") {
          const x = fall(9, L - 1); ans = 9 * x.p; text = "No digit can be repeated and the first digit cannot be 0."; calc = `9 × ${x.f.join(" × ")} = ${big(ans)} (the second digit may be 0, so it still has 9 choices)`;
        } else if (rule === "norep-even") {
          const x = fall(9, L - 1); ans = 5 * x.p; text = "No digit can be repeated and the last digit must be even."; calc = `Last digit first: 5 choices (0, 2, 4, 6, 8). Then ${x.f.join(" × ")} for the others: 5 × ${x.f.join(" × ")} = ${big(ans)}`;
        } else {
          ans = 9 * 10 ** (L - 2) * 5; text = "Digits can be repeated, the first digit cannot be 0 and the last digit must be odd."; calc = `9 × ${Array(L - 2).fill(10).join(" × ")} × 5 = ${big(ans)}`;
        }
        return {
          prompt: `${name} sets a ${L}-digit code for a locker, using the digits 0 to 9. ${text} How many different codes are possible?`,
          answer: { type: "number", value: ans },
          solution: [`Fill the ${L} positions one at a time; multiply the number of choices for each.`, calc],
          hint: "Deal with the restricted position(s) first, then fill the rest.",
          traps: nTraps(ans, [[rule === "rep" ? null : 10 ** L, "That allows every digit in every position — apply the restriction."], [10 * L, "Multiply the choices for each position — don't multiply 10 by the length."]]),
        };
      }
      if (kind === "arrange") {
        const n = tier === 1 ? r.int(4, 6) : r.int(5, 8);
        const people = r.shuffle(NAMES).slice(0, 2);
        const rule = tier === 1 ? "all" : tier === 2 ? r.pick(["end", "ends"]) : r.pick(["together", "apart"]);
        let ans: number, text: string, sol: string[];
        if (rule === "all") {
          ans = fact(n); text = "";
          sol = [`${n} choices for the first place, ${n - 1} for the second, and so on.`, `${Array.from({ length: n }, (_, i) => n - i).join(" × ")} = ${big(ans)}`];
        } else if (rule === "end") {
          ans = fact(n - 1); text = ` ${people[0]} must sit at the left-hand end.`;
          sol = [`${people[0]}'s place is fixed: 1 way.`, `The other ${n - 1} people: ${Array.from({ length: n - 1 }, (_, i) => n - 1 - i).join(" × ")} = ${big(ans)}`];
        } else if (rule === "ends") {
          ans = 2 * fact(n - 2); text = ` ${people[0]} and ${people[1]} must sit at the two ends.`;
          sol = [`${people[0]} and ${people[1]} at the ends: 2 ways (either way round).`, `The other ${n - 2} people in the middle: ${fact(n - 2)} ways.`, `2 × ${fact(n - 2)} = ${big(ans)}`];
        } else if (rule === "together") {
          ans = 2 * fact(n - 1); text = ` ${people[0]} and ${people[1]} must sit next to each other.`;
          sol = [`Glue ${people[0]} and ${people[1]} into one block: now ${n - 1} items, ${big(fact(n - 1))} arrangements.`, `The block can be either way round: × 2.`, `2 × ${big(fact(n - 1))} = ${big(ans)}`];
        } else {
          ans = fact(n) - 2 * fact(n - 1); text = ` ${people[0]} and ${people[1]} must NOT sit next to each other.`;
          sol = [`All arrangements: ${n}! = ${big(fact(n))}`, `Together: 2 × ${n - 1}! = ${big(2 * fact(n - 1))}`, `Not together: ${big(fact(n))} − ${big(2 * fact(n - 1))} = ${big(ans)}`];
        }
        return {
          prompt: `${n} friends, including ${people[0]} and ${people[1]}, sit in a row of ${n} seats at the cinema.${text} In how many different ways can they sit?`,
          answer: { type: "number", value: ans },
          solution: sol,
          hint: rule === "together" ? "Treat the two friends as one block, then remember the block can be either way round." : rule === "apart" ? "Count all arrangements, then subtract the ones where they ARE together." : "Fill the seats one by one and multiply the choices.",
          traps: nTraps(ans, [[rule === "together" ? fact(n - 1) : null, "The two friends can swap places inside their block — multiply by 2."], [rule !== "all" ? fact(n) : null, "That ignores the condition."], [rule === "all" ? n * n : null, "Each seat has one fewer choice than the one before."]]),
        };
      }
      // digits: brute-force count of 3-digit numbers from a digit set, no repeats, with a condition.
      const set = r.shuffle([1, 2, 3, 4, 5, 6, 7, 8, 9]).slice(0, tier === 2 ? 5 : r.int(5, 7)).sort((x, y) => x - y);
      const conds = [
        { t: "even", f: (v: number) => v % 2 === 0 },
        { t: "odd", f: (v: number) => v % 2 === 1 },
        { t: `greater than ${set[2]}00`, f: (v: number) => v > set[2] * 100 },
        { t: "a multiple of 5", f: (v: number) => v % 5 === 0 },
      ];
      const c1 = r.pick(conds);
      const c2 = tier === 3 ? r.pick(conds.filter((c) => c !== c1 && !(c.t === "even" && c1.t === "odd") && !(c.t === "odd" && c1.t === "even"))) : null;
      let count = 0, all = 0;
      for (const x of set) for (const y of set) for (const z of set) {
        if (x === y || y === z || x === z) continue;
        all++;
        const v = 100 * x + 10 * y + z;
        if (c1.f(v) && (!c2 || c2.f(v))) count++;
      }
      if (count < 4 || count === all) return null;
      const cText = c2 ? `${c1.t} and ${c2.t}` : c1.t;
      const lastOk = set.filter((z) => c1.f(z));
      const byFirst = set
        .map((x) => {
          let k = 0;
          for (const y of set) for (const z of set) if (x !== y && y !== z && x !== z && c1.f(100 * x + 10 * y + z) && (!c2 || c2.f(100 * x + 10 * y + z))) k++;
          return [x, k] as const;
        })
        .filter(([, k]) => k > 0);
      return {
        prompt: `${name} makes 3-digit numbers using the digits ${set.join(", ")}. Each digit can be used at most once in a number. How many of the numbers are ${cText}?`,
        answer: { type: "number", value: count },
        solution: [
          "Fill the most restricted position first, then the others with the digits that are left.",
          c2 || c1.t.startsWith("greater")
            ? `Split into cases by the first digit: ${byFirst.map(([x, k]) => `first digit ${x}: ${k}`).join("; ")}. Total = ${byFirst.map(([, k]) => k).join(" + ")} = ${count}.`
            : `Last digit: ${lastOk.length} choice${lastOk.length === 1 ? "" : "s"} (${lastOk.join(", ")}). Then ${set.length - 1} choices for the first digit and ${set.length - 2} for the middle: ${lastOk.length} × ${set.length - 1} × ${set.length - 2} = ${count}`,
          `(For comparison, with no condition there are ${set.length} × ${set.length - 1} × ${set.length - 2} = ${all} numbers.)`,
        ],
        hint: "Which digit position has a restriction? Choose that one first.",
        traps: nTraps(count, [[all, "That counts every 3-digit number — apply the condition."]]),
      };
    }, rng);
  },
};

// ---------------------------------------------------------------------------
// 10. Binomial expansion coefficient (H+)
// ---------------------------------------------------------------------------

/** Coefficient-and-power markup, e.g. (2 + 3x)^5. */
function binom(a: number, b: number, n: number, v = "x"): string {
  const bs = b === 1 ? v : b === -1 ? `-${v}` : `${b}${v}`;
  const first = a < 0 ? `${a}` : `${a}`;
  return b < 0 ? `{{(${first} - ${Math.abs(b) === 1 ? v : `${Math.abs(b)}${v}`})^${n}}}` : `{{(${first} + ${bs})^${n}}}`;
}

const binomialCoefficient: Drill = {
  id: "probability.binomial-coefficient",
  topicId: T,
  title: "Find a coefficient in a binomial expansion",
  level: 3,
  guideRef: "binomial-expansion",
  generate(rng, tier) {
    return attempt((r) => {
      if (tier === 3 && r.bool(0.5)) {
        // Constant term in (x + c/x)^n or (x^2 + c/x)^n.
        const sq = r.bool();
        const n = sq ? r.pick([3, 6]) : r.pick([4, 6, 8]);
        const c = r.pick([-3, -2, 2, 3]);
        const k = sq ? (2 * n) / 3 : n / 2;
        const coef = nCr(n, k) * c ** k;
        const base = sq ? `{{(x^2 ${c < 0 ? "-" : "+"} ${Math.abs(c)}/x)^${n}}}` : `{{(x ${c < 0 ? "-" : "+"} ${Math.abs(c)}/x)^${n}}}`;
        return {
          prompt: `Find the term independent of x (the constant term) in the expansion of ${base}.`,
          answer: { type: "number", value: coef },
          solution: [
            `General term: ${n}Cr × ${sq ? "{{(x^2)^(" + n + "-r)}}" : "{{x^(" + n + "-r)}}"} × {{(${c}/x)^r}}`,
            sq ? `Power of x: 2(${n} − r) − r = 0, so r = ${k}.` : `Power of x: (${n} − r) − r = 0, so r = ${k}.`,
            `Term = ${n}C${k} × {{(${c})^${k}}} = ${nCr(n, k)} × ${br2(c ** k)} = ${big(coef)}`,
          ],
          hint: "Write the general term and make the power of x equal to 0.",
          traps: nTraps(coef, [[coef < 0 ? -coef : null, "Check the sign: a negative number to an odd power is negative."], [c ** k, `You forgot the binomial coefficient ${n}C${k} = ${nCr(n, k)}.`]]),
        };
      }
      const n = tier === 1 ? r.int(3, 5) : r.int(4, tier === 2 ? 6 : 7);
      const a = tier === 1 ? r.pick([1, 1, 2, 3]) : r.pick([1, 2, 3]);
      const b = tier === 1 ? r.pick([2, 3, 4]) : r.pick([2, 3, 4, 5, -2, -3, -4]);
      if (tier === 1 && a !== 1 && b > 3) return null;
      const k = r.int(2, n - 1);
      const coef = nCr(n, k) * a ** (n - k) * b ** k;
      if (Math.abs(coef) > 100000) return null;
      const rowNote = n <= 6 ? ` (row ${n} of Pascal's triangle: ${Array.from({ length: n + 1 }, (_, i) => nCr(n, i)).join(", ")})` : "";
      return {
        prompt: `Find the coefficient of {{x^${k}}} in the expansion of ${binom(a, b, n)}.`,
        answer: { type: "number", value: coef },
        solution: [
          `The {{x^${k}}} term is ${n}C${k} × {{${pw(a, n - k)}}} × {{(${b}x)^${k}}}${rowNote}.`,
          `${n}C${k} = ${nCr(n, k)}, {{${pw(a, n - k)}}} = ${num(a ** (n - k))}, {{${pw(b, k)}}} = ${num(b ** k)}`,
          `Coefficient = ${nCr(n, k)} × ${br2(a ** (n - k))} × ${br2(b ** k)} = ${big(coef)}`,
        ],
        hint: `The {{x^${k}}} term uses ${n}C${k}, the first term to the power ${n - k} and the second term to the power ${k}.`,
        traps: nTraps(coef, [
          [coef !== 0 ? a ** (n - k) * b ** k : null, `You missed the binomial coefficient ${n}C${k} = ${nCr(n, k)} from Pascal's triangle.`],
          [nCr(n, k) * a ** (n - k) * b, `Raise the whole term ${b}x to the power ${k}, not just x.`],
          [-coef, "Check the sign — a negative number to an even power is positive, to an odd power negative."],
        ]),
      };
    }, rng);
  },
};

function pw(a: number, e: number): string {
  return a < 0 ? `(${a})^${e}` : `${a}^${e}`;
}

function br2(v: number): string {
  return v < 0 ? `(${num(v)})` : num(v);
}

export const drills: Drill[] = [
  missingProbability,
  expectedFrequency,
  sampleSpace,
  orAndRules,
  atLeastOne,
  treeDraws,
  productRule,
  conditional,
  sweetsEquation,
  binomialCoefficient,
];
