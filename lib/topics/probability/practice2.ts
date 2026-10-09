// ---------------------------------------------------------------------------
// Probability — Practice Papers 3 and 4.
// Paper 3: mixed practice in fresh contexts (mostly short, 3 written).
// Paper 4: exam style, modelled on Edexcel 4MA1 Higher probability questions —
//          linked parts, tree diagrams, "show that", algebraic probability,
//          plus the H+ counting and binomial-expansion extension.
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

// Tree diagram: rain on Saturday then Sunday (dependent events).
const RAIN_TREE = `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree diagram. Saturday: rain 0.3, no rain 0.7. After rain on Saturday, Sunday: rain 0.6, no rain 0.4. After no rain on Saturday, Sunday: rain 0.25, no rain 0.75."><rect x="0" y="0" width="440" height="240" fill="#ffffff"/><text x="120" y="18" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Saturday</text><text x="320" y="18" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Sunday</text><line x1="20" y1="125" x2="140" y2="70" stroke="#334155" stroke-width="1.5"/><line x1="20" y1="125" x2="140" y2="185" stroke="#334155" stroke-width="1.5"/><text x="70" y="88" font-size="13" font-family="sans-serif" fill="#4338ca">0.3</text><text x="70" y="172" font-size="13" font-family="sans-serif" fill="#4338ca">0.7</text><text x="146" y="74" font-size="13" font-family="sans-serif" fill="#1f2937">Rain</text><text x="146" y="189" font-size="13" font-family="sans-serif" fill="#1f2937">No rain</text><line x1="210" y1="70" x2="330" y2="42" stroke="#334155" stroke-width="1.5"/><line x1="210" y1="70" x2="330" y2="98" stroke="#334155" stroke-width="1.5"/><line x1="210" y1="185" x2="330" y2="157" stroke="#334155" stroke-width="1.5"/><line x1="210" y1="185" x2="330" y2="213" stroke="#334155" stroke-width="1.5"/><text x="258" y="46" font-size="13" font-family="sans-serif" fill="#4338ca">0.6</text><text x="258" y="104" font-size="13" font-family="sans-serif" fill="#4338ca">0.4</text><text x="254" y="161" font-size="13" font-family="sans-serif" fill="#4338ca">0.25</text><text x="254" y="219" font-size="13" font-family="sans-serif" fill="#4338ca">0.75</text><text x="336" y="46" font-size="13" font-family="sans-serif" fill="#1f2937">Rain</text><text x="336" y="102" font-size="13" font-family="sans-serif" fill="#1f2937">No rain</text><text x="336" y="161" font-size="13" font-family="sans-serif" fill="#1f2937">Rain</text><text x="336" y="217" font-size="13" font-family="sans-serif" fill="#1f2937">No rain</text></svg>`;

export const morePapers: Paper[] = [
  // =========================================================================
  // Practice Paper 3
  // =========================================================================
  {
    id: "probability-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "probability-p3-q01",
        question:
          "A biased spinner can land on red, blue, green or yellow. The table shows some of the probabilities.\n\n| Colour | Red | Blue | Green | Yellow |\n|---|---|---|---|---|\n| Probability | 0.15 | 0.32 | | 0.21 |\n\nWork out the probability that the spinner lands on green. Give your answer as a decimal.",
        answer: { type: "number", value: 0.32, allowFraction: false },
        traps: [
          { spec: { type: "number", value: 0.68, allowFraction: false }, feedback: "0.68 is the total of the three given probabilities. The four probabilities must add to 1, so subtract that from 1." },
        ],
        solution: ["The probabilities of all the outcomes add up to 1.", "0.15 + 0.32 + 0.21 = 0.68", "P(green) = 1 − 0.68 = 0.32"],
        commonError: "Stopping at 0.68, the sum of the given probabilities.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["What must the four probabilities add up to?", "Add the three you know and take the total away from 1."],
        strategy: "Use the total of 1",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "probability-p3-q02",
        question:
          "Kenji has a biased six-sided dice. The probability that it lands on 6 is 0.22.\n\nKenji is going to throw the dice 250 times. Work out an estimate for the number of times it will land on 6.",
        answer: { type: "number", value: 55 },
        traps: [
          { spec: { type: "number", value: 41.666666666666664, tolerance: 0.1 }, feedback: "That is 250 ÷ 6 — what you would expect from a *fair* dice. This dice is biased: use the probability you are given." },
        ],
        solution: ["Expected frequency = number of trials × probability.", "250 × 0.22 = 55"],
        commonError: "Using {{1/6}} as though the dice were fair.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["Expected frequency = n × p.", "Multiply 250 by 0.22."],
        strategy: "Expected frequency = n × p",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "probability-p3-q03",
        question:
          "Spinner A is numbered 1, 2, 3, 4. Spinner B is numbered 1, 2, 3. Both spinners are fair. Mei spins both and adds the two numbers to get a total.\n\nWork out the probability that the total is a prime number. Give your answer as a fraction.",
        answer: { type: "fraction", n: 7, d: 12, display: "{{7/12}}" },
        traps: [
          { spec: { type: "fraction", n: 2, d: 3 }, feedback: "You may have listed the six possible *totals* (2 to 7) and counted the primes among them (4 of 6). The totals are not equally likely — count the 12 equally likely pairs in a sample space diagram instead." },
        ],
        solution: [
          "Draw a 4 × 3 sample space of totals:",
          "| + | 1 | 2 | 3 |\n|---|---|---|---|\n| 1 | 2 | 3 | 4 |\n| 2 | 3 | 4 | 5 |\n| 3 | 4 | 5 | 6 |\n| 4 | 5 | 6 | 7 |",
          "Primes (2, 3, 5, 7) appear 2 + 2 + 1 + 2 = 7 times.",
          "P(prime) = {{7/12}}",
        ],
        commonError: "Treating the six different totals as equally likely, or counting 1 as prime.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["How many equally likely pairs of results are there?", "Draw a grid with Spinner A down the side and Spinner B across the top, and fill in the totals."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "probability-p3-q04",
        question:
          "The probability that Ethan's school bus is late on a given day is 0.15. The probability that it rains on a given day is 0.4. These events are independent.\n\nWork out the probability that, on a given day, the bus is late **and** it does **not** rain.",
        answer: { type: "number", value: 0.09 },
        traps: [
          { spec: { type: "number", value: 0.06 }, feedback: "0.15 × 0.4 is P(late and rains). You need *not* raining: P(no rain) = 1 − 0.4 = 0.6." },
          { spec: { type: "number", value: 0.75 }, feedback: "Adding is the OR rule for mutually exclusive events. For two independent events happening together (AND), multiply." },
        ],
        solution: ["P(no rain) = 1 − 0.4 = 0.6", "Independent, so multiply: 0.15 × 0.6 = 0.09"],
        commonError: "Using 0.4 instead of 0.6, or adding instead of multiplying.",
        difficulty: "warmup",
        guideRef: "or-and-rules",
        hints: ["What is the probability that it does *not* rain?", "For independent events, P(A and B) = P(A) × P(B)."],
        strategy: "AND means multiply",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "probability-p3-q05",
        question:
          "In basketball practice, the probability that Arjun scores a free throw is 0.7. Each throw is independent of the others.\n\nArjun takes 3 free throws. Work out the probability that he scores **at least one** of them.",
        answer: { type: "number", value: 0.973 },
        traps: [
          { spec: { type: "number", value: 0.343 }, feedback: "0.343 = 0.7³ is the probability he scores *all three*. 'At least one' is everything except 'none'." },
          { spec: { type: "number", value: 0.027 }, feedback: "0.027 = 0.3³ is P(misses all three). You need 1 minus this." },
        ],
        solution: ["P(misses one throw) = 1 − 0.7 = 0.3", "P(misses all three) = 0.3³ = 0.027", "P(at least one) = 1 − 0.027 = 0.973"],
        solutions: [
          { label: "Add up the cases (slower)", steps: ["P(exactly 1) = 3 × 0.7 × 0.3² = 0.189", "P(exactly 2) = 3 × 0.7² × 0.3 = 0.441", "P(exactly 3) = 0.7³ = 0.343", "Total = 0.189 + 0.441 + 0.343 = 0.973 — the complement route needs one line instead of three."] },
        ],
        commonError: "Working out 3 × 0.7 = 2.1 (a 'probability' bigger than 1) or 0.7³.",
        difficulty: "core",
        guideRef: "or-and-rules",
        hints: ["'At least one' has lots of cases. What single event is its opposite?", "The opposite is 'misses all three'.", "P(at least one) = 1 − P(none)."],
        strategy: "Use the complement",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "probability-p3-q06",
        question:
          "A bag contains 5 mango sweets and 4 lychee sweets. Siti takes a sweet at random and eats it. She then takes a second sweet at random and eats it.\n\nWork out the probability that both sweets are the same flavour. Give your answer as a fraction in its simplest form.",
        answer: { type: "fraction", n: 4, d: 9, simplest: true, display: "{{4/9}}" },
        traps: [
          { spec: { type: "fraction", n: 41, d: 81 }, feedback: "That treats the sweets as replaced. Siti eats the first sweet, so the second pick is from 8 sweets." },
          { spec: { type: "fraction", n: 5, d: 18 }, feedback: "{{5/18}} is just P(both mango). 'Same flavour' also includes both lychee — add the two branches." },
        ],
        solution: [
          "P(mango, mango) = {{5/9 * 4/8 = 20/72}}",
          "P(lychee, lychee) = {{4/9 * 3/8 = 12/72}}",
          "These are mutually exclusive, so add: {{20/72 + 12/72 = 32/72 = 4/9}}",
        ],
        commonError: "Keeping the denominator as 9 on the second pick (forgetting the sweet was eaten).",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: ["After one sweet is eaten, how many are left in the bag?", "'Same flavour' means mango–mango OR lychee–lychee.", "Multiply along each branch, then add the two branches."],
        strategy: "Draw a tree diagram",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "written",
        id: "probability-p3-q07",
        question:
          "A box contains 3 red pens and 2 green pens. Marcus takes two pens at random **without replacement**.\n\nHe writes:\n\n    P(both red) = {{3/5 * 3/5 = 9/25}}\n\n(a) Explain the mistake Marcus has made.\n\n(b) Work out the correct probability that both pens are red.",
        marks: 3,
        modelAnswer:
          "(a) Marcus has treated the second pick as if the first pen were put back. Without replacement, after a red pen is taken there are only 2 red pens left out of 4 pens, so the second probability should be {{2/4}}, not {{3/5}}.\n\n(b) P(both red) = {{3/5 * 2/4 = 6/20 = 3/10}}.",
        markScheme: [
          { point: "Explains the pen is not replaced, so the second probability changes", keywords: ["not replaced", "without replacement", "replaced", "put back", "changes", "fewer"] },
          { point: "States the second probability is 2/4 (2 red left out of 4)", keywords: ["2/4", "4 pens", "2 red", "1/2"] },
          { point: "Correct answer 3/10 (or 6/20 or 0.3)", keywords: ["3/10", "6/20", "0.3"] },
        ],
        commonError: "Saying only 'he got it wrong' without explaining that both the numerator and denominator drop by 1.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: [
          "After Marcus takes one red pen, what is in the box now?",
          "How many red pens, and how many pens in total, are left?",
          "Multiply {{3/5}} by the *new* probability of red.",
        ],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "probability-p3-q08",
        question:
          "Priya plays two games of badminton. The probability that she wins the first game is 0.55.\n\nIf she wins a game, the probability that she wins the next game is 0.65. If she loses a game, the probability that she wins the next game is 0.3.\n\nWork out the probability that Priya wins **exactly one** of the two games.",
        answer: { type: "number", value: 0.3275 },
        traps: [
          { spec: { type: "number", value: 0.1925 }, feedback: "That is only P(win, then lose). 'Exactly one' can also happen as lose, then win — add that branch too." },
          { spec: { type: "number", value: 0.495 }, feedback: "Check the second-game probabilities depend on the first result: after a loss, P(win) = 0.3, and after a win, P(lose) = 1 − 0.65 = 0.35." },
        ],
        solution: [
          "P(win then lose) = 0.55 × (1 − 0.65) = 0.55 × 0.35 = 0.1925",
          "P(lose then win) = 0.45 × 0.3 = 0.135",
          "P(exactly one win) = 0.1925 + 0.135 = 0.3275",
        ],
        commonError: "Using the same probability for the second game on both branches (treating dependent events as independent).",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: [
          "Draw a tree. Do the second-game branches have the same probabilities on the 'win' and 'lose' sides?",
          "Which two routes through the tree give exactly one win?",
          "WL: 0.55 × 0.35. LW: 0.45 × 0.3. Add them.",
        ],
        strategy: "Draw a tree diagram",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "probability-p3-q09",
        question:
          "At a school, 40% of students cycle to school. The rest come by MRT.\n\nThe probability that a student who cycles is late is 0.1. The probability that a student who takes the MRT is late is 0.05.\n\nA student is chosen at random and is late. Work out the probability that this student cycled. Give your answer as a fraction.",
        answer: { type: "fraction", n: 4, d: 7, display: "{{4/7}}" },
        traps: [
          { spec: { type: "number", value: 0.04 }, feedback: "0.04 = P(cycles **and** late). You are told the student *is* late, so divide by the total probability of being late." },
          { spec: { type: "number", value: 0.1 }, feedback: "0.1 is P(late given cycles) — the condition the wrong way round. You need P(cycles given late)." },
        ],
        solution: [
          "P(cycle and late) = 0.4 × 0.1 = 0.04",
          "P(MRT and late) = 0.6 × 0.05 = 0.03",
          "P(late) = 0.04 + 0.03 = 0.07",
          "P(cycled given late) = {{0.04/0.07 = 4/7}}",
        ],
        solutions: [
          { label: "Imagine 1000 students", steps: ["400 cycle: 40 of them late. 600 take the MRT: 30 of them late.", "70 late students, 40 of whom cycled: {{40/70 = 4/7}}."] },
        ],
        commonError: "Giving P(cycle and late) = 0.04 — forgetting that 'given late' shrinks the sample space to the late students.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: [
          "Draw a tree: first cycle/MRT, then late/on time.",
          "Which branches end in 'late'? Find the total probability of being late.",
          "P(cycled given late) = P(cycled and late) ÷ P(late).",
        ],
        strategy: "Imagine a population",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "probability-p3-q10",
        question:
          "A bag contains n counters. 7 of the counters are blue. Zara takes two counters at random, without replacement.\n\nThe probability that both counters are blue is {{7/26}}.\n\nWork out the value of n.",
        answer: { type: "number", value: 13 },
        traps: [
          { spec: { type: "number", value: -12 }, feedback: "n counts counters, so it must be a positive whole number. Reject the negative root." },
          { spec: { type: "number", value: 26 }, feedback: "The denominator of the probability is not the number of counters. Form an equation: {{7/n * 6/(n-1) = 7/26}}." },
        ],
        solution: [
          "{{7/n * 6/(n-1) = 7/26}}",
          "{{42/(n(n-1)) = 7/26}}, so 7n(n − 1) = 42 × 26 = 1092, giving n(n − 1) = 156",
          "{{n^2 - n - 156 = 0}}",
          "(n − 13)(n + 12) = 0, so n = 13 or n = −12",
          "n must be positive, so n = 13. Check: {{7/13 * 6/12 = 42/156 = 7/26}} ✓",
        ],
        commonError: "Writing the second fraction as {{6/n}} (forgetting the total also drops by 1).",
        difficulty: "core",
        guideRef: "algebraic-probability",
        hints: [
          "Write P(blue then blue) using n.",
          "After one blue counter is taken: 6 blue out of n − 1.",
          "Set {{7/n * 6/(n-1)}} equal to {{7/26}} and cross-multiply to get a quadratic.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "written",
        id: "probability-p3-q11",
        question:
          "There are n sweets in a jar. 6 of the sweets are strawberry. The rest are lemon.\n\nOlivia takes a sweet at random and eats it. She then takes another sweet at random and eats it.\n\nThe probability that she eats two strawberry sweets is {{5/12}}.\n\n(a) Show that {{n^2 - n - 72 = 0}}.\n\n(b) Solve the equation to find how many sweets were in the jar.",
        marks: 3,
        modelAnswer:
          "(a) P(two strawberry) = {{6/n * 5/(n-1) = 30/(n(n-1))}}.\n\nSo {{30/(n(n-1)) = 5/12}}, giving 5n(n − 1) = 360, so n(n − 1) = 72, {{n^2 - n = 72}} and {{n^2 - n - 72 = 0}}.\n\n(b) (n − 9)(n + 8) = 0, so n = 9 or n = −8. The number of sweets cannot be negative, so there were 9 sweets. Check: {{6/9 * 5/8 = 30/72 = 5/12}}.",
        markScheme: [
          { point: "Forms the product 6/n × 5/(n − 1) for two strawberry sweets", keywords: ["6/n", "5/(n-1)", "5/n-1", "30"] },
          { point: "Sets equal to 5/12 and rearranges correctly to n² − n − 72 = 0", keywords: ["5/12", "72", "360", "n(n-1)", "n^2 - n", "n²"] },
          { point: "Solves to n = 9, rejecting n = −8", keywords: ["n = 9", "9", "(n-9)(n+8)", "-8", "negative"] },
        ],
        commonError: "Using 6/n × 6/n (as if with replacement), which gives 36/n² instead.",
        difficulty: "core",
        guideRef: "algebraic-probability",
        hints: [
          "Write the probability of a strawberry sweet first, then of a second strawberry sweet, in terms of n.",
          "After eating one strawberry sweet: 5 strawberry out of n − 1.",
          "Cross-multiply {{30/(n(n-1)) = 5/12}}, then factorise the quadratic.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "probability-p3-q12",
        question:
          "How many **even** numbers greater than 500 and less than 1000 have three different digits?",
        answer: { type: "number", value: 184 },
        traps: [
          { spec: { type: "number", value: 200 }, feedback: "5 × 8 × 5 assumes there are always 5 even digits left for the units. If the hundreds digit is 6 or 8, that even digit is already used — split into cases." },
          { spec: { type: "number", value: 250 }, feedback: "5 × 10 × 5 allows repeated digits. The three digits must all be different." },
        ],
        solution: [
          "The hundreds digit must be 5, 6, 7, 8 or 9, and the units digit must be even (0, 2, 4, 6, 8). These two restrictions interact (6 and 8 are on both lists), so split into cases.",
          "Case 1 — hundreds digit odd (5, 7 or 9): 3 choices; units 5 choices; tens any of the 8 digits left: 3 × 5 × 8 = 120.",
          "Case 2 — hundreds digit even (6 or 8): 2 choices; units even but not the hundreds digit: 4 choices; tens 8 choices: 2 × 4 × 8 = 64.",
          "Total = 120 + 64 = 184.",
        ],
        solutions: [
          { label: "Units digit first", steps: ["Units 0, 2 or 4 (3 choices): hundreds any of 5–9 (5 choices), tens 8 choices: 3 × 5 × 8 = 120.", "Units 6 or 8 (2 choices): hundreds from 5–9 but not the units digit (4 choices), tens 8: 2 × 4 × 8 = 64.", "Total 184 — whichever box you fill first, the overlap {6, 8} forces a case split."] },
        ],
        commonError: "Assuming the number of even units digits is always 5, ignoring that the hundreds digit may already have used one.",
        difficulty: "challenge",
        guideRef: "counting",
        hints: [
          "Which two positions have restrictions? Fill those first.",
          "Does it matter whether the hundreds digit is odd or even? Why?",
          "Split into 'hundreds digit 5, 7 or 9' and 'hundreds digit 6 or 8'.",
          "Odd hundreds: 3 × 5 × 8. Even hundreds: 2 × 4 × 8.",
        ],
        strategy: "Split into cases",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "probability-p3-q13",
        question: "Find the coefficient of {{x^3}} in the expansion of {{(2 + x)^5}}.",
        answer: { type: "number", value: 40 },
        traps: [
          { spec: { type: "number", value: 10 }, feedback: "10 is the binomial coefficient {{(5 choose 3)}} only. The term is {{10 * 2^2 * x^3}} — you must include the power of 2." },
          { spec: { type: "number", value: 80 }, feedback: "Check the power of 2: for the {{x^3}} term the 2 is raised to the power 5 − 3 = 2, not 3." },
        ],
        solution: [
          "Row 5 of Pascal's triangle: 1, 5, 10, 10, 5, 1.",
          "The {{x^3}} term is {{10 * 2^2 * x^3}} (powers of 2 and x add to 5).",
          "Coefficient = 10 × 4 = 40.",
        ],
        commonError: "Leaving out the power of 2, or raising 2 to the wrong power.",
        difficulty: "core",
        guideRef: "binomial-expansion",
        hints: [
          "Write down row 5 of Pascal's triangle.",
          "In each term the powers of 2 and of x add up to 5. What power of 2 goes with {{x^3}}?",
          "Multiply the Pascal number by {{2^2}}.",
        ],
        strategy: "Find a pattern",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "probability-p3-q14",
        question:
          "A bag contains 4 red, 3 yellow and 2 green beads. Wei Ling takes three beads at random, without replacement.\n\nWork out the probability that the three beads are all different colours. Give your answer as a fraction in its simplest form.",
        answer: { type: "fraction", n: 2, d: 7, simplest: true, display: "{{2/7}}" },
        traps: [
          { spec: { type: "fraction", n: 1, d: 21 }, feedback: "{{1/21}} is P(red, yellow, green) in that one order. The three colours can come out in 3! = 6 different orders." },
          { spec: { type: "fraction", n: 16, d: 81 }, feedback: "That is the answer *with* replacement. Here the beads are not replaced, so the denominators go 9, 8, 7." },
        ],
        solution: [
          "One order, e.g. red, yellow, green: {{4/9 * 3/8 * 2/7 = 24/504 = 1/21}}",
          "Every order has the same numerators (4, 3, 2) and denominators (9, 8, 7), so each has probability {{1/21}}.",
          "There are 3 × 2 × 1 = 6 orders.",
          "P(all different) = {{6 * 1/21 = 6/21 = 2/7}}",
        ],
        solutions: [
          { label: "Count selections", steps: ["Ways to choose one of each colour: 4 × 3 × 2 = 24.", "Ways to choose any 3 beads from 9 (order not mattering): {{(9 * 8 * 7)/6 = 84}}.", "P = {{24/84 = 2/7}}."] },
        ],
        commonError: "Finding one order only and forgetting the other five.",
        difficulty: "challenge",
        guideRef: "tree-diagrams",
        hints: [
          "Start with one particular order: red, then yellow, then green.",
          "Does the probability change if the order changes? Look at the numerators and denominators.",
          "How many different orders of three different colours are there?",
        ],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "probability-p3-q15",
        question:
          "In the 17th century, a gambler named the Chevalier de Méré compared two bets:\n\n- **Bet A:** get at least one six in 4 throws of a fair dice.\n- **Bet B:** get at least one double six in 24 throws of a pair of fair dice.\n\nHe thought the two bets were equally likely to win, since 4 : 6 = 24 : 36.\n\nShow that he was wrong, and say which bet is more likely to win.",
        marks: 3,
        modelAnswer:
          "Bet A: P(no six in one throw) = {{5/6}}, so P(no six in 4 throws) = {{(5/6)^4 = 0.4823}}. P(win A) = 1 − 0.4823 = 0.518 (3 s.f.).\n\nBet B: P(no double six in one throw of two dice) = {{35/36}}, so P(none in 24 throws) = {{(35/36)^24 = 0.5086}}. P(win B) = 1 − 0.5086 = 0.491 (3 s.f.).\n\n0.518 > 0.491, so the bets are not equally likely: Bet A is more likely to win (it wins more than half the time, Bet B less than half).",
        markScheme: [
          { point: "Bet A: 1 − (5/6)^4 = 0.518 (accept 0.5177)", keywords: ["(5/6)^4", "5/6", "0.518", "0.5177", "0.482"] },
          { point: "Bet B: 1 − (35/36)^24 = 0.491 (accept 0.4914)", keywords: ["35/36", "(35/36)^24", "0.491", "0.4914", "0.509"] },
          { point: "Conclusion: not equal, Bet A more likely", keywords: ["bet a", "more likely", "greater", "not equal", "a is"] },
        ],
        commonError: "Calculating 4 × {{1/6}} and 24 × {{1/36}} (both {{2/3}}) — adding probabilities of events that are not mutually exclusive.",
        solutions: [
          { label: "Why de Méré's ratio argument fails", steps: ["He effectively used 4 × {{1/6}} = {{2/3}} and 24 × {{1/36}} = {{2/3}}.", "But throws can produce a six more than once, so 'six on throw 1' and 'six on throw 2' are not mutually exclusive — you cannot just add.", "Going through 'none' (the complement) handles the overlaps automatically."] },
        ],
        difficulty: "challenge",
        guideRef: "or-and-rules",
        hints: [
          "'At least one' — what is the opposite event?",
          "For Bet A, what is P(no six) in one throw? In 4 independent throws?",
          "For Bet B, one throw of two dice gives a double six with probability {{1/36}}. What is P(no double six in 24 throws)?",
          "Compare 1 − {{(5/6)^4}} with 1 − {{(35/36)^24}}.",
        ],
        strategy: "Use the complement",
      },
    ],
  },
  // =========================================================================
  // Practice Paper 4 — Exam style
  // =========================================================================
  {
    id: "probability-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "probability-p4-q01",
        question:
          "A biased four-sided spinner is numbered 1, 2, 3 and 4. The table shows some of the probabilities.\n\n| Number | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| Probability | 0.25 | 0.3 | | |\n\nThe probability that the spinner lands on 4 is twice the probability that it lands on 3.\n\nWork out the probability that the spinner lands on 4.",
        answer: { type: "number", value: 0.3 },
        traps: [
          { spec: { type: "number", value: 0.15 }, feedback: "0.15 is P(3). The question asks for P(4), which is twice that." },
          { spec: { type: "number", value: 0.225 }, feedback: "Sharing 0.45 equally ignores the 'twice' condition. If P(3) = x then P(4) = 2x, so 3x = 0.45." },
        ],
        solution: ["0.25 + 0.3 = 0.55, so P(3) + P(4) = 1 − 0.55 = 0.45.", "Let P(3) = x, P(4) = 2x: 3x = 0.45, x = 0.15.", "P(4) = 2 × 0.15 = 0.3"],
        commonError: "Halving 0.45 instead of splitting it in the ratio 1 : 2.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["What do P(3) and P(4) add up to?", "Call P(3) = x. Then P(4) = 2x and x + 2x = 0.45."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "probability-p4-q02",
        question:
          "Olivia spins a spinner 200 times. It lands on red 36 times.\n\nShe is going to spin the spinner another 750 times. Use her results to work out an estimate for the number of times it will land on red.",
        answer: { type: "number", value: 135 },
        traps: [
          { spec: { type: "number", value: 171 }, feedback: "You have estimated for 950 spins in total. The question asks only about the next 750 spins." },
        ],
        solution: ["Relative frequency of red = {{36/200 = 0.18}}", "Estimate = 750 × 0.18 = 135"],
        commonError: "Scaling by 750 ÷ 36 or adding the 200 spins already done.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["Estimate P(red) from the experiment: red ÷ total spins.", "Multiply the relative frequency by 750."],
        strategy: "Expected frequency = n × p",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "probability-p4-q03",
        question:
          "Ravi travels to school by MRT, by bus or on foot. The probability that he travels by MRT is 0.45. The probability that he travels by bus is 0.3.\n\nRavi's choices on different days are independent. Work out the probability that he walks to school on both Monday and Tuesday.",
        answer: { type: "number", value: 0.0625 },
        traps: [
          { spec: { type: "number", value: 0.25 }, feedback: "0.25 is P(walks) on one day. For two independent days, multiply: 0.25 × 0.25." },
          { spec: { type: "number", value: 0.5 }, feedback: "Adding 0.25 + 0.25 is the OR rule. 'Monday AND Tuesday' for independent days means multiply." },
        ],
        solution: ["P(walks) = 1 − 0.45 − 0.3 = 0.25", "P(walks both days) = 0.25 × 0.25 = 0.0625"],
        commonError: "Adding the two probabilities instead of multiplying.",
        difficulty: "warmup",
        guideRef: "or-and-rules",
        hints: ["First find P(walks) on one day.", "Both days, independent: multiply."],
        strategy: "AND means multiply",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "probability-p4-q04",
        question:
          "Two fair six-sided dice are thrown. The **difference** between the two scores is recorded (larger minus smaller).\n\nWork out the probability that the difference is 2. Give your answer as a fraction in its simplest form.",
        answer: { type: "fraction", n: 2, d: 9, simplest: true, display: "{{2/9}}" },
        traps: [
          { spec: { type: "fraction", n: 1, d: 9 }, feedback: "You have counted (1, 3), (2, 4), (3, 5), (4, 6) but not the reverse orders (3, 1), (4, 2) … Each is a different outcome on the 6 × 6 grid." },
          { spec: { type: "fraction", n: 1, d: 6 }, feedback: "The six possible differences (0 to 5) are not equally likely. Count cells in the 36-cell sample space instead." },
        ],
        solution: [
          "There are 6 × 6 = 36 equally likely outcomes.",
          "Difference 2: (1, 3), (2, 4), (3, 5), (4, 6) and the reverses (3, 1), (4, 2), (5, 3), (6, 4) — 8 outcomes.",
          "P = {{8/36 = 2/9}}",
        ],
        commonError: "Forgetting the reversed pairs.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["Draw a 6 × 6 sample space of differences.", "Count every cell containing 2 — each pair appears in both orders."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "probability-p4-q05",
        question:
          "Wei Ling is taking her driving theory test and her practical driving test. The probability that she passes the theory test is 0.8. The probability that she passes the practical test is 0.65. The two results are independent.\n\nWork out the probability that she passes **exactly one** of the two tests.",
        answer: { type: "number", value: 0.41 },
        traps: [
          { spec: { type: "number", value: 0.28 }, feedback: "0.28 is P(passes theory only). 'Exactly one' also includes passing the practical only: 0.2 × 0.65." },
          { spec: { type: "number", value: 0.93 }, feedback: "0.93 is P(at least one). 'Exactly one' must exclude passing both." },
        ],
        solution: [
          "P(theory only) = 0.8 × (1 − 0.65) = 0.8 × 0.35 = 0.28",
          "P(practical only) = (1 − 0.8) × 0.65 = 0.2 × 0.65 = 0.13",
          "P(exactly one) = 0.28 + 0.13 = 0.41",
        ],
        solutions: [
          { label: "Subtract from the total", steps: ["P(both) = 0.8 × 0.65 = 0.52; P(neither) = 0.2 × 0.35 = 0.07.", "P(exactly one) = 1 − 0.52 − 0.07 = 0.41."] },
        ],
        commonError: "Only finding one of the two 'exactly one' branches.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: ["Draw a tree with theory first, then practical.", "Which two routes give exactly one pass?", "Pass–fail: 0.8 × 0.35. Fail–pass: 0.2 × 0.65. Add."],
        strategy: "Draw a tree diagram",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "probability-p4-q06",
        question:
          "A box contains 7 lemon sweets and 5 orange sweets. Jun takes two sweets at random from the box, without replacement.\n\nWork out the probability that he takes **at least one** orange sweet. Give your answer as a fraction in its simplest form.",
        answer: { type: "fraction", n: 15, d: 22, simplest: true, display: "{{15/22}}" },
        traps: [
          { spec: { type: "fraction", n: 7, d: 22 }, feedback: "{{7/22}} is P(no orange) = P(both lemon). 'At least one orange' is 1 minus this." },
          { spec: { type: "fraction", n: 95, d: 144 }, feedback: "That is the with-replacement answer: 1 − {{(7/12)^2}}. Jun keeps the first sweet, so the second pick is out of 11." },
        ],
        solution: [
          "P(no orange) = P(lemon, lemon) = {{7/12 * 6/11 = 42/132 = 7/22}}",
          "P(at least one orange) = {{1 - 7/22 = 15/22}}",
        ],
        solutions: [
          { label: "Add the three branches", steps: ["LO: {{7/12 * 5/11 = 35/132}}; OL: {{5/12 * 7/11 = 35/132}}; OO: {{5/12 * 4/11 = 20/132}}.", "Total = {{90/132 = 15/22}}. Same answer, but three branches instead of one."] },
        ],
        commonError: "Using 12 as the denominator for both picks.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: ["What is the opposite of 'at least one orange'?", "Find P(both lemon) without replacement: denominators 12 then 11.", "Subtract from 1."],
        strategy: "Use the complement",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "written",
        id: "probability-p4-q07",
        question:
          "A bag contains 3 red counters and 7 white counters. Aisha takes three counters at random from the bag, without replacement.\n\nShow that the probability that she takes exactly two red counters is {{7/40}}.",
        marks: 3,
        modelAnswer:
          "One order, red, red, white: {{3/10 * 2/9 * 7/8 = 42/720}}.\n\nThe white counter can be first, second or third (RRW, RWR, WRR), and each order has the same probability {{42/720}} (same numerators 3, 2, 7 and denominators 10, 9, 8).\n\nP(exactly two red) = {{3 * 42/720 = 126/720 = 7/40}}.",
        markScheme: [
          { point: "Correct product for one order without replacement, e.g. 3/10 × 2/9 × 7/8 (= 42/720)", keywords: ["3/10", "2/9", "7/8", "42/720", "42"] },
          { point: "Recognises 3 orders (RRW, RWR, WRR) / multiplies by 3", keywords: ["3 orders", "× 3", "x 3", "three ways", "rrw", "rwr", "wrr", "126"] },
          { point: "Completes to 126/720 = 7/40", keywords: ["126/720", "7/40"] },
        ],
        commonError: "Finding only P(R, R, W) = {{7/120}} and stopping, or using with-replacement fractions.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: [
          "Start with one order: red, red, white. What are the three fractions?",
          "In how many different orders could the one white counter appear?",
          "Check each order has the same probability, then multiply by the number of orders.",
        ],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "probability-p4-q08",
        question:
          "During the monsoon season, the probability that it rains on a Saturday is 0.3.\n\nIf it rains on Saturday, the probability that it rains on Sunday is 0.6. If it does not rain on Saturday, the probability that it rains on Sunday is 0.25. The tree diagram shows this information.\n\nWork out the probability that it rains on **at least one** of the two days.",
        diagram: RAIN_TREE,
        answer: { type: "number", value: 0.475 },
        traps: [
          { spec: { type: "number", value: 0.18 }, feedback: "0.18 is P(rain on both days). 'At least one' includes rain on just one of the days too." },
          { spec: { type: "number", value: 0.525 }, feedback: "0.525 = 0.7 × 0.75 is P(no rain on either day). Subtract it from 1." },
        ],
        solution: [
          "The only way to have no rain at all: no rain Saturday, then no rain Sunday.",
          "P(no rain on either day) = 0.7 × 0.75 = 0.525",
          "P(rain on at least one day) = 1 − 0.525 = 0.475",
        ],
        solutions: [
          { label: "Add the three rain branches", steps: ["RR: 0.3 × 0.6 = 0.18; RN: 0.3 × 0.4 = 0.12; NR: 0.7 × 0.25 = 0.175.", "Total = 0.18 + 0.12 + 0.175 = 0.475."] },
        ],
        commonError: "Using 0.3 + 0.25 or 0.3 + 0.6 — adding probabilities from different stages of the tree.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: [
          "How many routes through the tree have rain on at least one day? How many have none?",
          "Only one route has no rain at all.",
          "P(at least one) = 1 − P(no rain, no rain).",
        ],
        strategy: "Use the complement",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "written",
        id: "probability-p4-q09",
        question:
          "Use the information in the tree diagram.\n\nGiven that it rains on Sunday, show that the probability that it also rained on Saturday is {{36/71}}.",
        diagram: RAIN_TREE,
        marks: 3,
        modelAnswer:
          "P(rain Sat and rain Sun) = 0.3 × 0.6 = 0.18.\n\nP(rain Sun) = 0.3 × 0.6 + 0.7 × 0.25 = 0.18 + 0.175 = 0.355.\n\nP(rain Sat given rain Sun) = {{0.18/0.355 = 180/355 = 36/71}}.",
        markScheme: [
          { point: "P(rain on both days) = 0.18", keywords: ["0.18", "0.3 × 0.6", "0.3 x 0.6"] },
          { point: "P(rain on Sunday) = 0.18 + 0.175 = 0.355", keywords: ["0.355", "0.175", "0.7 × 0.25", "0.7 x 0.25"] },
          { point: "Divides: 0.18 ÷ 0.355 = 180/355 = 36/71", keywords: ["0.18/0.355", "180/355", "÷ 0.355", "36/71"] },
        ],
        commonError: "Answering 0.3 (P(rain Saturday) on its own) or 0.6 (P(rain Sunday given rain Saturday) — the condition the wrong way round).",
        solutions: [
          { label: "Imagine 1000 weekends", steps: ["300 rainy Saturdays → 180 of them have a rainy Sunday. 700 dry Saturdays → 175 have a rainy Sunday.", "355 rainy Sundays, of which 180 followed a rainy Saturday: {{180/355 = 36/71}}."] },
        ],
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: [
          "'Given that it rains on Sunday' — which branches end with rain on Sunday?",
          "Add those branches to find P(rain on Sunday).",
          "P(rain Sat given rain Sun) = P(rain both days) ÷ P(rain Sun).",
        ],
        strategy: "Imagine a population",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "probability-p4-q10",
        question:
          "A bag contains only red counters and blue counters. There are x red counters and there are 4 more blue counters than red counters.\n\nMarcus takes two counters at random from the bag, without replacement. The probability that both counters are red is {{1/8}}.\n\nWork out the number of red counters in the bag.",
        answer: { type: "number", value: 6 },
        traps: [
          { spec: { type: "number", value: 16 }, feedback: "16 is the total number of counters (6 red + 10 blue). The question asks for the red counters." },
          { spec: { type: "number", value: -0.5 }, feedback: "x is a number of counters, so it must be a positive whole number — reject x = {{-1/2}}." },
        ],
        solution: [
          "Total counters = x + (x + 4) = 2x + 4.",
          "{{x/(2x+4) * (x-1)/(2x+3) = 1/8}}",
          "8x(x − 1) = (2x + 4)(2x + 3)",
          "{{8x^2 - 8x = 4x^2 + 14x + 12}}",
          "{{4x^2 - 22x - 12 = 0}}, so {{2x^2 - 11x - 6 = 0}}",
          "(2x + 1)(x − 6) = 0, so x = 6 (x = {{-1/2}} is impossible).",
          "Check: 6 red, 10 blue: {{6/16 * 5/15 = 30/240 = 1/8}} ✓",
        ],
        commonError: "Writing the total as x + 4 instead of 2x + 4.",
        difficulty: "core",
        guideRef: "algebraic-probability",
        hints: [
          "Write the total number of counters in terms of x.",
          "Write P(red, red) as a product of two fractions; remember the second pick has one fewer red and one fewer counter.",
          "Cross-multiply to get a quadratic, then factorise.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "probability-p4-q11",
        question:
          "A website password is made of 2 capital letters followed by 3 digits, for example QH 507.\n\nThe two letters must be different. The digits can be any of 0 to 9, and digits may repeat.\n\nHow many different passwords are possible?",
        answer: { type: "number", value: 650000 },
        traps: [
          { spec: { type: "number", value: 676000 }, feedback: "676 000 = 26 × 26 × 1000 allows the two letters to be the same. Once the first letter is chosen, only 25 remain." },
          { spec: { type: "number", value: 468000 }, feedback: "The digits may repeat, so each digit has 10 choices — 10 × 10 × 10, not 10 × 9 × 8." },
        ],
        solution: ["Product rule: multiply the number of choices for each position.", "Letters: 26 × 25 = 650 (second letter differs from the first).", "Digits: 10 × 10 × 10 = 1000.", "Total = 650 × 1000 = 650 000"],
        commonError: "Adding the choices (26 + 25 + 10 + 10 + 10) instead of multiplying.",
        difficulty: "core",
        guideRef: "counting",
        hints: ["How many choices for each of the five positions?", "The second letter cannot repeat the first, but digits can repeat.", "Multiply: 26 × 25 × 10 × 10 × 10."],
        strategy: "Product rule",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "probability-p4-q12",
        question: "Expand and simplify {{(1 + 2x)^4}}. Give your answer in ascending powers of x.",
        answer: { type: "expression", expr: "1+8x+24x^2+32x^3+16x^4", form: "expanded", display: "{{1 + 8x + 24x^2 + 32x^3 + 16x^4}}" },
        traps: [
          { spec: { type: "expression", expr: "1+4x+6x^2+4x^3+x^4" }, feedback: "Those are the coefficients of {{(1 + x)^4}}. Each term needs the power of 2 too: {{(2x)^2 = 4x^2}}, {{(2x)^3 = 8x^3}} …" },
          { spec: { type: "expression", expr: "1+8x+12x^2+8x^3+2x^4" }, feedback: "You have multiplied by 2 instead of raising 2 to the power. {{(2x)^3 = 8x^3}}, not {{2x^3}}." },
        ],
        solution: [
          "Row 4 of Pascal's triangle: 1, 4, 6, 4, 1.",
          "{{1 + 4(2x) + 6(2x)^2 + 4(2x)^3 + (2x)^4}}",
          "{{= 1 + 8x + 6(4x^2) + 4(8x^3) + 16x^4}}",
          "{{= 1 + 8x + 24x^2 + 32x^3 + 16x^4}}",
        ],
        commonError: "Writing {{(2x)^2}} as {{2x^2}} instead of {{4x^2}}.",
        difficulty: "core",
        guideRef: "binomial-expansion",
        hints: ["Which row of Pascal's triangle do you need for power 4?", "Treat 2x as one block: {{(1 + b)^4}} with b = 2x.", "Bracket the 2x before raising it to a power."],
        strategy: "Find a pattern",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "probability-p4-q13",
        question:
          "There are n beads in a bag. 7 of the beads are blue and the rest are white.\n\nJess takes two beads at random from the bag, without replacement. The probability that she takes two beads of **different** colours is {{7/15}}.\n\n(a) Show that {{n^2 - 31n + 210 = 0}}.\n\n(b) Find the possible numbers of beads in the bag.",
        marks: 4,
        modelAnswer:
          "(a) There are n − 7 white beads.\n\nP(blue then white) = {{7/n * (n-7)/(n-1)}} and P(white then blue) = {{(n-7)/n * 7/(n-1)}}.\n\nSo P(different) = {{(14(n-7))/(n(n-1)) = 7/15}}.\n\nCross-multiplying: 15 × 14(n − 7) = 7n(n − 1), so 30(n − 7) = n(n − 1).\n\n{{30n - 210 = n^2 - n}}, so {{n^2 - 31n + 210 = 0}}.\n\n(b) (n − 10)(n − 21) = 0, so n = 10 or n = 21.\n\nBoth are possible (each gives at least 7 blue beads and at least one white): with 10 beads, {{2 * 7/10 * 3/9 = 42/90 = 7/15}}; with 21 beads, {{2 * 7/21 * 14/20 = 196/420 = 7/15}}.",
        markScheme: [
          { point: "Writes the number of white beads as n − 7 and a correct product for one order, e.g. 7/n × (n − 7)/(n − 1)", keywords: ["n-7", "n - 7", "7/n", "(n-7)/(n-1)", "n-1"] },
          { point: "Doubles for both orders (BW and WB) and sets equal to 7/15", keywords: ["2 ×", "2 x", "14", "both orders", "bw", "wb", "7/15"] },
          { point: "Rearranges correctly to n² − 31n + 210 = 0", keywords: ["30(n-7)", "30n", "210", "n^2 - 31n", "31n"] },
          { point: "Solves to n = 10 or n = 21 (both valid)", keywords: ["10", "21", "(n-10)(n-21)", "both"] },
        ],
        commonError: "Forgetting the white-then-blue order, so the product is not doubled.",
        difficulty: "challenge",
        guideRef: "algebraic-probability",
        hints: [
          "How many white beads are there, in terms of n?",
          "'Different colours' can happen in two orders. Are their probabilities equal?",
          "Set {{(14(n-7))/(n(n-1))}} equal to {{7/15}} and cross-multiply.",
          "When you solve, check *both* roots — does each make sense for a bag with 7 blue beads?",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "probability-p4-q14",
        question:
          "The coefficient of {{x^2}} in the expansion of {{(3 + kx)^5}} is 1080, where k is a positive constant.\n\nWork out the value of k.",
        answer: { type: "number", value: 2 },
        traps: [
          { spec: { type: "number", value: 4 }, feedback: "4 is {{k^2}}. The {{x^2}} term contains {{(kx)^2 = k^2 x^2}}, so take the square root." },
          { spec: { type: "number", value: 10.392, tolerance: 0.01 }, feedback: "Did you forget the power of 3? The term is {{10 * 3^3 * (kx)^2}}, not {{10 * (kx)^2}}." },
        ],
        solution: [
          "Row 5 of Pascal's triangle: 1, 5, 10, 10, 5, 1.",
          "The {{x^2}} term is {{10 * 3^3 * (kx)^2 = 270k^2 x^2}}.",
          "{{270k^2 = 1080}}, so {{k^2 = 4}}.",
          "k is positive, so k = 2.",
        ],
        commonError: "Writing {{(kx)^2}} as {{kx^2}}, which leads to k = 4.",
        difficulty: "challenge",
        guideRef: "binomial-expansion",
        hints: [
          "Write down the general shape of the {{x^2}} term: (Pascal number) × (power of 3) × {{(kx)^2}}.",
          "The powers of 3 and of kx add to 5. Which power of 3 goes with {{(kx)^2}}?",
          "Form an equation {{270k^2 = 1080}}.",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "probability-p4-q15",
        question:
          "Mei plays three games of chess against a computer. The probability that she wins the first game is 0.6.\n\nAfter a win, the probability that she wins the next game is 0.7. After a loss, the probability that she wins the next game is 0.4. There are no draws.\n\nWork out the probability that Mei wins **at least two** of the three games.",
        answer: { type: "number", value: 0.604 },
        traps: [
          { spec: { type: "number", value: 0.31 }, feedback: "0.31 is P(exactly two wins). 'At least two' also includes winning all three (0.294)." },
          { spec: { type: "number", value: 0.648 }, feedback: "0.648 is what you get if every game is won with probability 0.6 independently. Here each game depends on the result before it." },
        ],
        solution: [
          "List the routes with at least two wins:",
          "WWW: 0.6 × 0.7 × 0.7 = 0.294",
          "WWL: 0.6 × 0.7 × 0.3 = 0.126",
          "WLW: 0.6 × 0.3 × 0.4 = 0.072",
          "LWW: 0.4 × 0.4 × 0.7 = 0.112",
          "Total = 0.294 + 0.126 + 0.072 + 0.112 = 0.604",
        ],
        commonError: "Using 0.6 for every game, or using the 'after a win' probability on a branch that follows a loss.",
        difficulty: "challenge",
        guideRef: "tree-diagrams",
        hints: [
          "Draw a three-stage tree. On each branch, ask: what happened in the game *just before*?",
          "Which four routes give at least two wins?",
          "For WLW: 0.6 (win), then 0.3 (lose after a win), then 0.4 (win after a loss).",
          "Add the four route probabilities.",
        ],
        strategy: "Draw a tree diagram",
      },
    ],
  },
];
