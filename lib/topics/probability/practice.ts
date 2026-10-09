// Probability — quick-check quiz, Practice Papers 1–2 and the challenge set.
import type { TopicPractice } from "../../types.ts";

const twoSpinners = `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two fair spinners. Spinner A has three equal sectors numbered 1, 2 and 3. Spinner B has four equal sectors numbered 1, 2, 3 and 4."><rect x="0" y="0" width="400" height="220" fill="#ffffff"/><circle cx="100" cy="110" r="70" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><line x1="100" y1="110" x2="100" y2="40" stroke="#1f2937" stroke-width="1.5"/><line x1="100" y1="110" x2="160.62" y2="145" stroke="#1f2937" stroke-width="1.5"/><line x1="100" y1="110" x2="39.38" y2="145" stroke="#1f2937" stroke-width="1.5"/><text x="134.6" y="95" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1</text><text x="100" y="160" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2</text><text x="65.4" y="95" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3</text><text x="100" y="205" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Spinner A</text><circle cx="300" cy="110" r="70" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><line x1="300" y1="40" x2="300" y2="180" stroke="#1f2937" stroke-width="1.5"/><line x1="230" y1="110" x2="370" y2="110" stroke="#1f2937" stroke-width="1.5"/><text x="325" y="90" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1</text><text x="325" y="140" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2</text><text x="275" y="140" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3</text><text x="275" y="90" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">4</text><text x="300" y="205" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Spinner B</text></svg>`;

const treeMarcus = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree diagram. First branches: MRT 0.6, bus 0.4. After MRT: late 0.05, on time 0.95. After bus: late 0.2, on time 0.8."><rect x="0" y="0" width="420" height="220" fill="#ffffff"/><line x1="20" y1="110" x2="140" y2="55" stroke="#1f2937" stroke-width="1.5"/><line x1="20" y1="110" x2="140" y2="165" stroke="#1f2937" stroke-width="1.5"/><text x="70" y="72" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.6</text><text x="70" y="160" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.4</text><text x="145" y="59" font-size="13" font-family="sans-serif" fill="#1f2937">MRT</text><text x="145" y="169" font-size="13" font-family="sans-serif" fill="#1f2937">Bus</text><line x1="180" y1="55" x2="300" y2="25" stroke="#1f2937" stroke-width="1.5"/><line x1="180" y1="55" x2="300" y2="85" stroke="#1f2937" stroke-width="1.5"/><line x1="180" y1="165" x2="300" y2="135" stroke="#1f2937" stroke-width="1.5"/><line x1="180" y1="165" x2="300" y2="195" stroke="#1f2937" stroke-width="1.5"/><text x="235" y="32" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.05</text><text x="235" y="88" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.95</text><text x="235" y="142" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.2</text><text x="235" y="198" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.8</text><text x="306" y="29" font-size="13" font-family="sans-serif" fill="#1f2937">Late</text><text x="306" y="89" font-size="13" font-family="sans-serif" fill="#1f2937">On time</text><text x="306" y="139" font-size="13" font-family="sans-serif" fill="#1f2937">Late</text><text x="306" y="199" font-size="13" font-family="sans-serif" fill="#1f2937">On time</text></svg>`;

const treeMatch = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree diagram. First branches: rain 0.3, no rain 0.7. After rain: match goes ahead 0.4, cancelled 0.6. After no rain: goes ahead 0.9, cancelled 0.1."><rect x="0" y="0" width="420" height="220" fill="#ffffff"/><line x1="20" y1="110" x2="140" y2="55" stroke="#1f2937" stroke-width="1.5"/><line x1="20" y1="110" x2="140" y2="165" stroke="#1f2937" stroke-width="1.5"/><text x="70" y="72" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.3</text><text x="70" y="160" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.7</text><text x="145" y="59" font-size="13" font-family="sans-serif" fill="#1f2937">Rain</text><text x="145" y="169" font-size="13" font-family="sans-serif" fill="#1f2937">No rain</text><line x1="200" y1="55" x2="300" y2="25" stroke="#1f2937" stroke-width="1.5"/><line x1="200" y1="55" x2="300" y2="85" stroke="#1f2937" stroke-width="1.5"/><line x1="200" y1="165" x2="300" y2="135" stroke="#1f2937" stroke-width="1.5"/><line x1="200" y1="165" x2="300" y2="195" stroke="#1f2937" stroke-width="1.5"/><text x="248" y="32" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.4</text><text x="248" y="88" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.6</text><text x="248" y="142" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.9</text><text x="248" y="198" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0.1</text><text x="306" y="29" font-size="13" font-family="sans-serif" fill="#1f2937">Goes ahead</text><text x="306" y="89" font-size="13" font-family="sans-serif" fill="#1f2937">Cancelled</text><text x="306" y="139" font-size="13" font-family="sans-serif" fill="#1f2937">Goes ahead</text><text x="306" y="199" font-size="13" font-family="sans-serif" fill="#1f2937">Cancelled</text></svg>`;

export const practice: TopicPractice = {
  // ===========================================================================
  // QUICK-CHECK QUIZ — 3 mcq + 7 short; 3 warmup, 6 core, 1 challenge
  // ===========================================================================
  quiz: [
    {
      kind: "mcq",
      id: "probability-quiz-q01",
      question:
        "A dice is biased. The probability that it lands on 6 is 0.15. Olivia rolls the dice 200 times. Work out an estimate for the number of times it lands on 6.",
      options: ["30", "15", "33", "170"],
      answerIndex: 0,
      explanation:
        "Expected frequency = probability × number of trials = 0.15 × 200 = 30. 33 comes from treating the dice as fair (200 ÷ 6 ≈ 33), but this dice is biased. 170 is the expected number of rolls that are **not** 6, and 15 uses 100 trials instead of 200.",
      difficulty: "warmup",
      guideRef: "basic-probability",
      hints: ["Expected frequency = probability × number of trials."],
      strategy: "Use the formula",
    },
    {
      kind: "short",
      id: "probability-quiz-q02",
      question:
        "A biased spinner can land on red, blue, green or yellow.\n\n| Colour | Red | Blue | Green | Yellow |\n|---|---|---|---|---|\n| Probability | 0.15 | 0.3 | x | x |\n\nWork out the value of x.",
      answer: { type: "number", value: 0.275 },
      solution: [
        "The probabilities of all the outcomes add up to 1.",
        "0.15 + 0.3 + x + x = 1, so 2x = 1 − 0.45 = 0.55.",
        "x = 0.55 ÷ 2 = 0.275.",
      ],
      traps: [
        { spec: { type: "number", value: 0.55 }, feedback: "0.55 is green and yellow **together**. Each of them is x, so divide by 2." },
      ],
      commonError: "Forgetting that there are two x's in the table.",
      difficulty: "warmup",
      guideRef: "basic-probability",
      hints: ["What must all the probabilities in the table add up to?"],
      strategy: "Use the sum of probabilities",
    },
    {
      kind: "short",
      id: "probability-quiz-q03",
      question:
        "Ethan chooses one dish for lunch at a hawker centre. The probability that he chooses laksa is 0.35 and the probability that he chooses vegetable fried rice is 0.2. Work out the probability that he chooses neither laksa nor vegetable fried rice.",
      answer: { type: "number", value: 0.45 },
      solution: [
        "He chooses only one dish, so the two events are mutually exclusive.",
        "P(laksa or fried rice) = 0.35 + 0.2 = 0.55.",
        "P(neither) = 1 − 0.55 = 0.45.",
      ],
      traps: [
        { spec: { type: "number", value: 0.55 }, feedback: "0.55 is the probability that he chooses one of the two dishes. 'Neither' is the complement: 1 − 0.55." },
        { spec: { type: "number", value: 0.07 }, feedback: "Multiplying is the AND rule for independent events. He can't choose both dishes — these events are mutually exclusive, so add." },
      ],
      commonError: "Multiplying instead of adding for mutually exclusive events.",
      difficulty: "warmup",
      guideRef: "or-and-rules",
      hints: ["Can he choose both dishes? So do you add or multiply for 'laksa OR fried rice'?"],
      strategy: "Use the complement",
    },
    {
      kind: "short",
      id: "probability-quiz-q04",
      question:
        "The probability that Wei Ling's bus is late is 0.1. The probability that it rains on her way to school is 0.3. These events are independent. Work out the probability that, on a given morning, her bus is late **or** it rains **or** both.",
      answer: { type: "number", value: 0.37 },
      solution: [
        "'At least one' is easiest through the complement: 1 − P(neither).",
        "P(bus not late) = 0.9 and P(no rain) = 0.7.",
        "Independent, so P(neither) = 0.9 × 0.7 = 0.63.",
        "P(at least one) = 1 − 0.63 = 0.37.",
      ],
      solutions: [
        {
          label: "Add the three cases",
          steps: [
            "Late and rain: 0.1 × 0.3 = 0.03.",
            "Late, no rain: 0.1 × 0.7 = 0.07. Rain, not late: 0.9 × 0.3 = 0.27.",
            "Total: 0.03 + 0.07 + 0.27 = 0.37. Same answer, but three products instead of one.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 0.4 }, feedback: "Adding 0.1 + 0.3 counts the 'late and rain' mornings twice — the events are not mutually exclusive." },
        { spec: { type: "number", value: 0.03 }, feedback: "0.03 is P(late AND rain). The question asks for late OR rain OR both." },
      ],
      commonError: "Adding probabilities of events that can happen together.",
      difficulty: "core",
      guideRef: "or-and-rules",
      hints: [
        "Can the bus be late and it rain on the same morning? Then simply adding double-counts.",
        "What is the opposite of 'at least one of them happens'?",
        "Work out P(neither) using the AND rule, then subtract from 1.",
      ],
      strategy: "Use the complement",
    },
    {
      kind: "mcq",
      id: "probability-quiz-q05",
      question:
        "A bag contains 5 red counters and 3 blue counters. Priya takes two counters at random, without replacement. What is the probability that both counters are red?",
      options: ["{{25/64}}", "{{5/14}}", "{{5/16}}", "{{9/14}}"],
      answerIndex: 1,
      explanation:
        "{{5/8 * 4/7 = 20/56 = 5/14}}: after one red is taken there are 4 reds left out of 7 counters. {{25/64}} treats the draw as *with* replacement. {{5/16}} = {{20/64}} reduces the numerator but forgets the total also drops to 7. {{9/14}} is P(not both red).",
      difficulty: "core",
      guideRef: "tree-diagrams",
      hints: [
        "What is the probability the first counter is red?",
        "After a red has gone, how many reds and how many counters are left?",
      ],
      strategy: "Draw a tree diagram",
    },
    {
      kind: "short",
      id: "probability-quiz-q06",
      question:
        "A box contains 4 green pens and 6 yellow pens. Jun takes two pens at random without replacement. Work out the probability that the two pens are different colours. Give your answer as a fraction in its simplest form.",
      answer: { type: "fraction", n: 8, d: 15, simplest: true },
      solution: [
        "Two routes: green then yellow, or yellow then green.",
        "P(G then Y) = {{4/10 * 6/9 = 24/90}}. P(Y then G) = {{6/10 * 4/9 = 24/90}}.",
        "Add: {{48/90 = 8/15}}.",
      ],
      solutions: [
        {
          label: "Complement",
          steps: [
            "P(GG) = {{4/10 * 3/9 = 12/90}}, P(YY) = {{6/10 * 5/9 = 30/90}}.",
            "P(different) = 1 − {{42/90}} = {{48/90 = 8/15}}.",
          ],
        },
      ],
      traps: [
        { spec: { type: "fraction", n: 4, d: 15 }, feedback: "That's only green-then-yellow. Yellow-then-green also gives different colours — add both routes." },
        { spec: { type: "fraction", n: 12, d: 25 }, feedback: "{{12/25}} is the with-replacement answer. Without replacement, the second pen is chosen from 9." },
      ],
      commonError: "Counting only one order.",
      difficulty: "core",
      guideRef: "tree-diagrams",
      hints: [
        "In what orders can you get one of each colour?",
        "Multiply along each branch: the second pen is chosen from 9.",
        "Add the two routes.",
      ],
      strategy: "Draw a tree diagram",
    },
    {
      kind: "short",
      id: "probability-quiz-q07",
      question:
        "The probability that it rains on a school day is 0.4. If it rains, the probability that Priya is late is 0.3. If it does not rain, the probability that she is late is 0.1. Work out the probability that Priya is late on a randomly chosen school day.",
      answer: { type: "number", value: 0.18 },
      solution: [
        "Rain and late: 0.4 × 0.3 = 0.12.",
        "No rain and late: 0.6 × 0.1 = 0.06.",
        "P(late) = 0.12 + 0.06 = 0.18.",
      ],
      traps: [
        { spec: { type: "number", value: 0.4 }, feedback: "0.3 + 0.1 adds the two conditional probabilities. Each must first be multiplied by the chance of its branch (0.4 and 0.6)." },
        { spec: { type: "number", value: 0.12 }, feedback: "That's only the rainy-day route. She can also be late on a dry day: add 0.6 × 0.1." },
      ],
      commonError: "Ignoring the no-rain branch.",
      difficulty: "core",
      guideRef: "tree-diagrams",
      hints: [
        "Sketch a tree: rain / no rain first, then late / on time.",
        "Which two routes end in 'late'?",
        "Multiply along each route, then add.",
      ],
      strategy: "Draw a tree diagram",
    },
    {
      kind: "short",
      id: "probability-quiz-q08",
      question:
        "There are n sweets in a bag. 5 of the sweets are orange. Hana takes two sweets at random, without replacement. The probability that both sweets are orange is {{2/9}}. Work out the value of n.",
      answer: { type: "number", value: 10 },
      solution: [
        "P(both orange) = {{5/n * 4/(n-1) = 20/(n(n-1))}}.",
        "{{20/(n(n-1)) = 2/9}}, so 2n(n − 1) = 180, giving {{n^2 - n - 90 = 0}}.",
        "(n − 10)(n + 9) = 0, so n = 10 (n cannot be negative).",
      ],
      traps: [
        { spec: { type: "number", value: -9 }, feedback: "n counts sweets, so it can't be negative. Reject this root." },
      ],
      commonError: "Using {{4/n}} for the second sweet instead of {{4/(n-1)}}.",
      difficulty: "challenge",
      guideRef: "algebraic-probability",
      hints: [
        "Write the probability that the first sweet is orange in terms of n.",
        "After one orange has gone, how many oranges and how many sweets are left?",
        "Set the product equal to {{2/9}} and clear the fractions — you should get a quadratic.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "mcq",
      id: "probability-quiz-q09",
      question:
        "A phone PIN has 4 digits, each from 0 to 9. The first digit cannot be 0. Digits may repeat. How many different PINs are possible?",
      options: ["10 000", "5040", "4536", "9000"],
      answerIndex: 3,
      explanation:
        "Product rule: 9 choices for the first digit (1–9), then 10 for each of the others: 9 × 10 × 10 × 10 = 9000. 10 000 allows a leading 0. 5040 = 10 × 9 × 8 × 7 forbids repeats (which the question allows), and 4536 = 9 × 9 × 8 × 7 forbids repeats as well.",
      difficulty: "core",
      guideRef: "counting",
      hints: [
        "How many choices are there for the first digit?",
        "Repeats are allowed — how many choices for each later digit? Multiply.",
      ],
      strategy: "Use the product rule",
    },
    {
      kind: "short",
      id: "probability-quiz-q10",
      question: "Find the coefficient of {{x^2}} in the expansion of {{(1 + 2x)^5}}.",
      answer: { type: "number", value: 40 },
      solution: [
        "Row 5 of Pascal's triangle: 1, 5, 10, 10, 5, 1.",
        "The {{x^2}} term is {{10 * 1^3 * (2x)^2 = 10 * 4x^2 = 40x^2}}.",
        "Coefficient = 40.",
      ],
      traps: [
        { spec: { type: "number", value: 10 }, feedback: "10 is the Pascal's triangle number, but the term is {{(2x)^2 = 4x^2}} — multiply by 4." },
        { spec: { type: "number", value: 20 }, feedback: "Square the whole of 2x: {{(2x)^2 = 4x^2}}, not {{2x^2}}." },
      ],
      commonError: "Forgetting to square the 2 in {{(2x)^2}}.",
      difficulty: "core",
      guideRef: "binomial-expansion",
      hints: [
        "Write down row 5 of Pascal's triangle.",
        "The {{x^2}} term uses the third number in the row and {{(2x)^2}}.",
      ],
      strategy: "Use Pascal's triangle",
    },
  ],

  // ===========================================================================
  // PRACTICE PAPERS
  // ===========================================================================
  papers: [
    {
      id: "probability-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "probability-p1-q01",
          question:
            "Kenji spins the two fair spinners shown and multiplies the two numbers. Draw a sample space diagram, then work out the probability that the product is an even number. Give your answer as a fraction in its simplest form.",
          diagram: twoSpinners,
          answer: { type: "fraction", n: 2, d: 3, simplest: true },
          solution: [
            "Sample space: 3 × 4 = 12 equally likely outcomes.",
            "| × | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| 1 | 1 | 2 | 3 | 4 |\n| 2 | 2 | 4 | 6 | 8 |\n| 3 | 3 | 6 | 9 | 12 |",
            "Even products: 8 of the 12 cells.",
            "P(even) = {{8/12 = 2/3}}.",
          ],
          traps: [
            { spec: { type: "fraction", n: 1, d: 2 }, feedback: "A product is odd only when **both** numbers are odd, so odd is rarer than even. Count the cells." },
          ],
          commonError: "Assuming odd and even products are equally likely.",
          difficulty: "warmup",
          guideRef: "basic-probability",
          hints: ["Make a 3 by 4 grid of products and count the even ones."],
          strategy: "Draw a sample space diagram",
        },
        {
          kind: "short",
          id: "probability-p1-q02",
          question:
            "Arjun drops a drawing pin 250 times. It lands point up 95 times. He is going to drop the same pin 1000 times. Work out an estimate for the number of times it will land point up.",
          answer: { type: "number", value: 380 },
          solution: [
            "Relative frequency = {{95/250}} = 0.38.",
            "Estimate = 0.38 × 1000 = 380.",
          ],
          traps: [
            { spec: { type: "number", value: 500 }, feedback: "There is no reason the pin is equally likely to land each way. Use the experimental result: {{95/250}}." },
          ],
          difficulty: "warmup",
          guideRef: "basic-probability",
          hints: ["Estimate the probability with the relative frequency {{95/250}}, then multiply by 1000."],
          strategy: "Use relative frequency",
        },
        {
          kind: "short",
          id: "probability-p1-q03",
          question:
            "A biased dice is rolled. The table shows some of the probabilities.\n\n| Score | 1 | 2 | 3 | 4 | 5 | 6 |\n|---|---|---|---|---|---|---|\n| Probability | 0.1 | 0.15 | 0.2 | 0.1 | x | 2x |\n\nThe dice is rolled 300 times. Work out an estimate for the number of times it lands on 6.",
          answer: { type: "number", value: 90 },
          solution: [
            "0.1 + 0.15 + 0.2 + 0.1 = 0.55, so x + 2x = 0.45 and x = 0.15.",
            "P(6) = 2x = 0.3.",
            "Expected number of 6s = 0.3 × 300 = 90.",
          ],
          traps: [
            { spec: { type: "number", value: 45 }, feedback: "45 = 0.15 × 300 uses x. The probability of a 6 is 2x = 0.3." },
            { spec: { type: "number", value: 50 }, feedback: "300 ÷ 6 assumes the dice is fair — it's biased, so use the table." },
          ],
          commonError: "Using x instead of 2x for the probability of a 6.",
          difficulty: "warmup",
          guideRef: "basic-probability",
          hints: ["Find x first: all six probabilities add to 1. Then P(6) = 2x."],
          strategy: "Use the sum of probabilities",
        },
        {
          kind: "short",
          id: "probability-p1-q04",
          question:
            "The probability that Siti passes her swimming test is 0.65. The probability that she passes her piano exam is 0.8. The two events are independent. Work out the probability that she passes both.",
          answer: { type: "number", value: 0.52 },
          solution: ["Independent events: P(A and B) = P(A) × P(B).", "0.65 × 0.8 = 0.52."],
          traps: [
            { spec: { type: "number", value: 1.45 }, feedback: "A probability can never be more than 1. 'Both' means AND — multiply." },
          ],
          difficulty: "warmup",
          guideRef: "or-and-rules",
          hints: ["'Both' means AND. For independent events, multiply."],
          strategy: "Use the AND rule",
        },
        {
          kind: "short",
          id: "probability-p1-q05",
          question:
            "A fair six-sided dice is rolled three times. Work out the probability of getting at least one 6. Give your answer as a fraction.",
          answer: { type: "fraction", n: 91, d: 216 },
          solution: [
            "P(no 6 on one roll) = {{5/6}}.",
            "P(no 6 in three rolls) = {{(5/6)^3 = 125/216}}.",
            "P(at least one 6) = {{1 - 125/216 = 91/216}}.",
          ],
          traps: [
            { spec: { type: "fraction", n: 1, d: 2 }, feedback: "{{1/6 + 1/6 + 1/6}} double-counts rolls with two or three 6s. Use 1 − P(no 6s)." },
            { spec: { type: "fraction", n: 125, d: 216 }, feedback: "{{125/216}} is P(no 6s at all). Subtract it from 1." },
          ],
          commonError: "Adding {{1/6}} three times.",
          difficulty: "core",
          guideRef: "or-and-rules",
          hints: [
            "'At least one' has lots of cases. What is its opposite?",
            "Find P(no 6 in all three rolls).",
            "Subtract that from 1.",
          ],
          strategy: "Use the complement",
        },
        {
          kind: "written",
          id: "probability-p1-q06",
          question:
            "A fair six-sided dice is rolled once. Ravi says:\n\n> P(even) = {{1/2}} and P(greater than 3) = {{1/2}}, so P(even or greater than 3) = {{1/2 + 1/2}} = 1.\n\nExplain what Ravi has done wrong and work out the correct probability.",
          marks: 3,
          modelAnswer:
            "The events are not mutually exclusive: 4 and 6 are both even **and** greater than 3, so adding the probabilities counts them twice. The scores that are even or greater than 3 are 2, 4, 5 and 6, so the correct probability is {{4/6 = 2/3}}. (Check: {{1/2 + 1/2 - 2/6 = 2/3}}.)",
          markScheme: [
            { point: "States the events are not mutually exclusive / can happen together", keywords: ["mutually exclusive", "both", "same time", "overlap", "together"] },
            { point: "Identifies 4 and 6 as counted twice", keywords: ["4 and 6", "4, 6", "twice", "double", "counted"] },
            { point: "Correct probability 2/3 (from 2, 4, 5, 6)", keywords: ["2/3", "4/6", "2, 4, 5, 6", "2,4,5,6"] },
          ],
          commonError: "Saying 'a probability can't be 1' without explaining why the addition rule fails here.",
          difficulty: "core",
          guideRef: "or-and-rules",
          hints: [
            "List the even scores and the scores greater than 3. Do the lists overlap?",
            "When can you simply add probabilities for 'A or B'?",
            "Count the scores that are in at least one list.",
          ],
          strategy: "Spot the error",
        },
        {
          kind: "short",
          id: "probability-p1-q07",
          question:
            "A bag contains 7 red counters and 3 blue counters. Kenji takes a counter at random, notes its colour and puts it back. He then takes a second counter at random. Work out the probability that he takes one counter of each colour.",
          answer: { type: "number", value: 0.42 },
          solution: [
            "P(red) = 0.7, P(blue) = 0.3 on each draw (with replacement).",
            "P(R then B) = 0.7 × 0.3 = 0.21; P(B then R) = 0.3 × 0.7 = 0.21.",
            "P(one of each) = 0.21 + 0.21 = 0.42.",
          ],
          traps: [
            { spec: { type: "number", value: 0.21 }, feedback: "That's one order only. Blue-then-red is a different route on the tree — add it too." },
            { spec: { type: "number", value: 0.4667, tolerance: 0.001 }, feedback: "That uses 9 for the second draw. The first counter is put back, so there are still 10." },
          ],
          commonError: "Counting only one order.",
          difficulty: "core",
          guideRef: "tree-diagrams",
          hints: [
            "Draw a tree with two sets of branches. Does the second set change?",
            "Which routes give one red and one blue?",
            "Multiply along each route, then add.",
          ],
          strategy: "Draw a tree diagram",
        },
        {
          kind: "short",
          id: "probability-p1-q08",
          question:
            "A box of 12 mooncakes contains 5 lotus seed, 4 red bean and 3 durian mooncakes. Mei takes three mooncakes at random, without replacement. Work out the probability that all three are the same flavour. Give your answer as a fraction in its simplest form.",
          answer: { type: "fraction", n: 3, d: 44, simplest: true },
          solution: [
            "Lotus × 3: {{5/12 * 4/11 * 3/10 = 60/1320}}.",
            "Red bean × 3: {{4/12 * 3/11 * 2/10 = 24/1320}}.",
            "Durian × 3: {{3/12 * 2/11 * 1/10 = 6/1320}}.",
            "Total: {{90/1320 = 3/44}}.",
          ],
          traps: [
            { spec: { type: "fraction", n: 1, d: 8 }, feedback: "{{1/8}} is the with-replacement answer. Each mooncake taken reduces both the flavour count and the total." },
            { spec: { type: "fraction", n: 7, d: 110 }, feedback: "Close — but three durians is also 'all the same flavour'. Add {{6/1320}}." },
          ],
          commonError: "Forgetting one of the three flavours, or not reducing the total each time.",
          difficulty: "challenge",
          guideRef: "tree-diagrams",
          hints: [
            "'All the same' splits into three cases. What are they?",
            "For lotus: first {{5/12}}, then how many lotus out of how many?",
            "Work out each case's product, then add.",
          ],
          strategy: "Split into cases",
        },
        {
          kind: "short",
          id: "probability-p1-q09",
          question:
            "Marcus travels to school by MRT or by bus. The tree diagram shows the probabilities. Work out the probability that Marcus is on time on a randomly chosen day.",
          diagram: treeMarcus,
          answer: { type: "number", value: 0.89 },
          solution: [
            "MRT and on time: 0.6 × 0.95 = 0.57.",
            "Bus and on time: 0.4 × 0.8 = 0.32.",
            "P(on time) = 0.57 + 0.32 = 0.89.",
          ],
          solutions: [
            {
              label: "Complement",
              steps: ["P(late) = 0.6 × 0.05 + 0.4 × 0.2 = 0.03 + 0.08 = 0.11.", "P(on time) = 1 − 0.11 = 0.89."],
            },
          ],
          traps: [
            { spec: { type: "number", value: 0.11 }, feedback: "0.11 is the probability he is **late**. Subtract from 1 or add the on-time routes." },
            { spec: { type: "number", value: 1.75 }, feedback: "Adding 0.95 + 0.8 ignores how likely each route is. Multiply along the branches first." },
          ],
          commonError: "Adding the second-branch probabilities without multiplying by the first.",
          difficulty: "core",
          guideRef: "tree-diagrams",
          hints: [
            "Which routes end in 'On time'?",
            "Multiply along each route.",
            "Add the results.",
          ],
          strategy: "Multiply along, add down",
        },
        {
          kind: "written",
          id: "probability-p1-q10",
          question:
            "A bag contains 4 white beads and 6 black beads. Zara takes two beads at random, without replacement. Show that the probability that the two beads are the same colour is {{7/15}}.",
          marks: 3,
          modelAnswer:
            "P(white, white) = {{4/10 * 3/9 = 12/90}}. P(black, black) = {{6/10 * 5/9 = 30/90}}. These are mutually exclusive, so P(same colour) = {{12/90 + 30/90 = 42/90 = 7/15}}.",
          markScheme: [
            { point: "P(white, white) = 4/10 × 3/9 = 12/90", keywords: ["12/90", "4/10", "3/9", "2/15"] },
            { point: "P(black, black) = 6/10 × 5/9 = 30/90", keywords: ["30/90", "6/10", "5/9", "1/3"] },
            { point: "Adds to 42/90 and simplifies to 7/15", keywords: ["42/90", "7/15", "add", "+"] },
          ],
          commonError: "Using 10 as the denominator for the second bead.",
          difficulty: "core",
          guideRef: "tree-diagrams",
          hints: [
            "'Same colour' means two whites or two blacks.",
            "After one bead is taken, how many are left?",
            "Work out each product, then add.",
          ],
          strategy: "Draw a tree diagram",
        },
        {
          kind: "short",
          id: "probability-p1-q11",
          question:
            "A bag contains only red and blue counters. There are 5 more blue counters than red counters. A counter is taken at random. The probability that it is red is {{3/11}}. How many counters are in the bag?",
          answer: { type: "number", value: 11 },
          solution: [
            "Let there be x red counters, so x + 5 blue and 2x + 5 in total.",
            "{{x/(2x+5) = 3/11}}, so 11x = 6x + 15.",
            "5x = 15, x = 3. Total = 2(3) + 5 = 11.",
          ],
          traps: [
            { spec: { type: "number", value: 3 }, feedback: "3 is the number of **red** counters. The question asks for the total." },
            { spec: { type: "number", value: 8 }, feedback: "8 is the number of blue counters. Add the reds too." },
          ],
          commonError: "Giving the number of red counters (x) instead of the total (2x + 5).",
          difficulty: "core",
          guideRef: "algebraic-probability",
          hints: [
            "Let the number of red counters be x. Write the number of blue counters and the total.",
            "P(red) = red ÷ total. Set it equal to {{3/11}}.",
            "Cross-multiply and solve.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "probability-p1-q12",
          question:
            "Zara makes a locker code. It is one letter from A to Z followed by two **different** digits from 0 to 9. How many different codes can she make?",
          answer: { type: "number", value: 2340 },
          solution: ["26 choices for the letter.", "10 choices for the first digit, then 9 for the second (different).", "26 × 10 × 9 = 2340."],
          traps: [
            { spec: { type: "number", value: 2600 }, feedback: "26 × 10 × 10 allows the two digits to be the same. They must be different, so only 9 choices for the second." },
            { spec: { type: "number", value: 45 }, feedback: "Adding the choices (26 + 10 + 9) doesn't count combinations. Each choice pairs with every other — multiply." },
          ],
          difficulty: "core",
          guideRef: "counting",
          hints: [
            "How many choices for each position?",
            "The second digit can't match the first. How many choices are left?",
          ],
          strategy: "Use the product rule",
        },
        {
          kind: "written",
          id: "probability-p1-q13",
          question:
            "There are n counters in a bag. 4 of the counters are red. Aisha takes two counters at random, without replacement. The probability that both counters are red is {{1/11}}.\n\n(a) Show that {{n^2 - n - 132 = 0}}.\n\n(b) Hence find the number of counters in the bag.",
          marks: 4,
          modelAnswer:
            "P(both red) = {{4/n * 3/(n-1) = 12/(n(n-1))}}. So {{12/(n(n-1)) = 1/11}}, giving n(n − 1) = 132, so {{n^2 - n = 132}} and {{n^2 - n - 132 = 0}}. Factorising: (n − 12)(n + 11) = 0, so n = 12 or n = −11. n must be positive, so there are 12 counters.",
          markScheme: [
            { point: "Writes P(both red) as 4/n × 3/(n − 1)", keywords: ["4/n", "3/(n-1)", "3/(n − 1)", "12/n(n-1)"] },
            { point: "Sets equal to 1/11 and rearranges to n² − n − 132 = 0", keywords: ["132", "1/11", "n^2 - n", "n² − n"] },
            { point: "Factorises / solves: (n − 12)(n + 11) = 0", keywords: ["n-12", "n − 12", "n+11", "n + 11", "factorise"] },
            { point: "n = 12, rejecting −11", keywords: ["12", "reject", "negative", "-11", "−11"] },
          ],
          commonError: "Writing {{3/n}} for the second counter instead of {{3/(n-1)}}.",
          difficulty: "challenge",
          guideRef: "algebraic-probability",
          hints: [
            "Write the probability of a red first, in terms of n.",
            "After one red is removed, how many reds and how many counters are left?",
            "Multiply, set equal to {{1/11}}, then cross-multiply.",
            "Factorise the quadratic and decide which root makes sense.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "probability-p1-q14",
          question: "Expand and simplify {{(2 + x)^4}}. Give your answer in ascending powers of x.",
          answer: { type: "expression", expr: "16+32x+24x^2+8x^3+x^4", form: "expanded" },
          solution: [
            "Row 4 of Pascal's triangle: 1, 4, 6, 4, 1.",
            "{{1 * 2^4 + 4 * 2^3 x + 6 * 2^2 x^2 + 4 * 2 x^3 + x^4}}.",
            "= {{16 + 32x + 24x^2 + 8x^3 + x^4}}.",
          ],
          traps: [
            { spec: { type: "expression", expr: "2+4x+6x^2+4x^3+x^4" }, feedback: "The powers of 2 go down as the powers of x go up: {{2^4}}, {{2^3}}, {{2^2}}, … Multiply each coefficient by its power of 2." },
            { spec: { type: "expression", expr: "16+x^4" }, feedback: "{{(2 + x)^4}} is not {{2^4 + x^4}} — the middle terms matter. Use Pascal's triangle." },
          ],
          commonError: "Forgetting the powers of 2 on the middle terms.",
          difficulty: "core",
          guideRef: "binomial-expansion",
          hints: [
            "Write down row 4 of Pascal's triangle.",
            "Each term is (coefficient) × {{2^(something)}} × {{x^(something)}}; the powers add to 4.",
            "Work out each term and add.",
          ],
          strategy: "Use Pascal's triangle",
        },
        {
          kind: "short",
          id: "probability-p1-q15",
          question: "Find the coefficient of {{x^3}} in the expansion of {{(3 - 2x)^5}}.",
          answer: { type: "number", value: -720 },
          solution: [
            "Row 5 of Pascal's triangle: 1, 5, 10, 10, 5, 1.",
            "The {{x^3}} term: {{10 * 3^2 * (-2x)^3}}.",
            "= 10 × 9 × (−8){{x^3}} = {{-720x^3}}. Coefficient = −720.",
          ],
          traps: [
            { spec: { type: "number", value: 720 }, feedback: "{{(-2)^3}} is negative. Keep the sign inside the bracket." },
            { spec: { type: "number", value: -80 }, feedback: "You've left out {{3^2 = 9}}. Every term uses both parts of the bracket." },
          ],
          commonError: "Losing the minus sign: {{(-2x)^3 = -8x^3}}.",
          difficulty: "challenge",
          guideRef: "binomial-expansion",
          hints: [
            "Which coefficient from row 5 goes with {{x^3}}?",
            "If x is cubed, what power of 3 is in the same term?",
            "Cube −2 carefully, keeping the sign.",
          ],
          strategy: "Use Pascal's triangle",
        },
      ],
    },
    {
      id: "probability-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "probability-p2-q01",
          question:
            "Two fair six-sided dice are rolled and the scores are added. Work out the probability that the total is 9. Give your answer as a fraction in its simplest form.",
          answer: { type: "fraction", n: 1, d: 9, simplest: true },
          solution: [
            "There are 6 × 6 = 36 equally likely outcomes.",
            "Totals of 9: (3, 6), (4, 5), (5, 4), (6, 3) — 4 outcomes.",
            "P(9) = {{4/36 = 1/9}}.",
          ],
          traps: [
            { spec: { type: "fraction", n: 1, d: 11 }, feedback: "The 11 totals from 2 to 12 are not equally likely. Count cells in the 36-cell grid." },
            { spec: { type: "fraction", n: 1, d: 18 }, feedback: "(3, 6) and (6, 3) are different outcomes, as are (4, 5) and (5, 4). There are 4, not 2." },
          ],
          difficulty: "warmup",
          guideRef: "basic-probability",
          hints: ["Draw the 6 × 6 sample space grid and count the cells with total 9."],
          strategy: "Draw a sample space diagram",
        },
        {
          kind: "short",
          id: "probability-p2-q02",
          question:
            "The probability that a durian from a stall in Geylang is bad is 0.08. Mei's family buys 75 durians from the stall over the season. Work out an estimate for the number of bad durians.",
          answer: { type: "number", value: 6 },
          solution: ["Expected frequency = 0.08 × 75 = 6."],
          traps: [{ spec: { type: "number", value: 69 }, feedback: "69 is the expected number of **good** durians." }],
          difficulty: "warmup",
          guideRef: "basic-probability",
          hints: ["Expected frequency = probability × number of trials."],
          strategy: "Use the formula",
        },
        {
          kind: "short",
          id: "probability-p2-q03",
          question:
            "Jun spins a three-coloured spinner 50 times. His results are shown.\n\n| Colour | Red | Blue | Green |\n|---|---|---|---|\n| Frequency | 18 | 12 | 20 |\n\nHe spins the same spinner 400 more times. Work out an estimate for the number of times it lands on red.",
          answer: { type: "number", value: 144 },
          solution: ["Relative frequency of red = {{18/50}} = 0.36.", "Estimate = 0.36 × 400 = 144."],
          traps: [
            { spec: { type: "number", value: 133.33, tolerance: 0.5 }, feedback: "400 ÷ 3 assumes the spinner is fair. Use Jun's results to estimate P(red)." },
          ],
          difficulty: "warmup",
          guideRef: "basic-probability",
          hints: ["Estimate P(red) from the table, then multiply by 400."],
          strategy: "Use relative frequency",
        },
        {
          kind: "short",
          id: "probability-p2-q04",
          question:
            "Students at a school travel by exactly one of four methods.\n\n| Method | Walk | Cycle | Bus | MRT |\n|---|---|---|---|---|\n| Probability | 0.25 | 0.1 | 0.3 | |\n\nA student is chosen at random. Work out the probability that the student travels by MRT or walks.",
          answer: { type: "number", value: 0.6 },
          solution: [
            "P(MRT) = 1 − (0.25 + 0.1 + 0.3) = 0.35.",
            "Mutually exclusive, so P(MRT or walk) = 0.35 + 0.25 = 0.6.",
          ],
          traps: [
            { spec: { type: "number", value: 0.0875 }, feedback: "Multiplying is for AND. A student uses only one method, so for OR you add." },
            { spec: { type: "number", value: 0.35 }, feedback: "That's P(MRT) alone. Add P(walk) as well." },
          ],
          difficulty: "warmup",
          guideRef: "or-and-rules",
          hints: ["Find P(MRT) first, then use the OR rule for mutually exclusive events."],
          strategy: "Use the sum of probabilities",
        },
        {
          kind: "short",
          id: "probability-p2-q05",
          question:
            "Aisha and Ethan each take one penalty. The probability that Aisha scores is 0.8. The probability that Ethan scores is 0.6. The events are independent. Work out the probability that exactly one of them scores.",
          answer: { type: "number", value: 0.44 },
          solution: [
            "Aisha scores, Ethan misses: 0.8 × 0.4 = 0.32.",
            "Aisha misses, Ethan scores: 0.2 × 0.6 = 0.12.",
            "P(exactly one) = 0.32 + 0.12 = 0.44.",
          ],
          traps: [
            { spec: { type: "number", value: 0.48 }, feedback: "0.8 × 0.6 is P(both score). 'Exactly one' means one scores and the other misses." },
            { spec: { type: "number", value: 0.32 }, feedback: "That's only Aisha-scores-Ethan-misses. Add the other way round too." },
          ],
          commonError: "Finding only one of the two 'exactly one' routes.",
          difficulty: "core",
          guideRef: "or-and-rules",
          hints: [
            "'Exactly one' can happen in two ways. What are they?",
            "For each way, multiply (one scores AND the other misses).",
            "Add the two ways.",
          ],
          strategy: "Split into cases",
        },
        {
          kind: "written",
          id: "probability-p2-q06",
          question:
            "Priya flips a coin 20 times and gets 14 heads. She says, \"The coin is biased. The probability of getting heads with this coin is 0.7.\"\n\nComment on Priya's statement and explain how she could get a more reliable estimate.",
          marks: 2,
          modelAnswer:
            "20 flips is too few to be sure: a fair coin can easily give 14 heads in 20 flips by chance, so 0.7 is only an estimate and the coin may not be biased. She should flip the coin many more times (e.g. 500 or 1000); the relative frequency from a large number of trials is a more reliable estimate of the probability.",
          markScheme: [
            { point: "20 trials is too small a sample / result could be due to chance, so cannot conclude biased", keywords: ["20", "small", "few", "not enough", "chance", "luck", "estimate"] },
            { point: "More trials give a more reliable estimate (relative frequency)", keywords: ["more", "trials", "times", "flips", "reliable", "relative frequency", "100", "1000"] },
          ],
          commonError: "Agreeing that 14 out of 20 proves the coin is biased.",
          difficulty: "core",
          guideRef: "basic-probability",
          hints: [
            "Could a fair coin give 14 heads in 20 flips?",
            "What happens to relative frequency as the number of trials grows?",
          ],
          strategy: "Consider the sample size",
        },
        {
          kind: "short",
          id: "probability-p2-q07",
          question:
            "A bag contains 3 green and 5 yellow marbles. Ravi takes a marble at random, replaces it, then takes another. Work out the probability that at least one of the marbles is green. Give your answer as a fraction.",
          answer: { type: "fraction", n: 39, d: 64 },
          solution: [
            "P(yellow) = {{5/8}} each time.",
            "P(no green) = {{5/8 * 5/8 = 25/64}}.",
            "P(at least one green) = {{1 - 25/64 = 39/64}}.",
          ],
          traps: [
            { spec: { type: "fraction", n: 9, d: 64 }, feedback: "{{9/64}} is P(both green). 'At least one' also includes exactly one green." },
            { spec: { type: "fraction", n: 15, d: 32 }, feedback: "That's P(exactly one green). Add P(both green) — or use 1 − P(none)." },
          ],
          commonError: "Finding P(both green) instead of P(at least one).",
          difficulty: "core",
          guideRef: "tree-diagrams",
          hints: [
            "What is the opposite of 'at least one green'?",
            "Find P(yellow, yellow).",
            "Subtract from 1.",
          ],
          strategy: "Use the complement",
        },
        {
          kind: "short",
          id: "probability-p2-q08",
          question:
            "The tree diagram shows the probability of rain on the day of a CCA football match and the probability that the match goes ahead. Given that the match went ahead, work out the probability that it rained.",
          diagram: treeMatch,
          answer: { type: "number", value: 0.16 },
          solution: [
            "P(rain and goes ahead) = 0.3 × 0.4 = 0.12.",
            "P(no rain and goes ahead) = 0.7 × 0.9 = 0.63.",
            "P(goes ahead) = 0.12 + 0.63 = 0.75.",
            "P(rain given it went ahead) = {{0.12/0.75}} = 0.16.",
          ],
          solutions: [
            {
              label: "Imagine 100 match days",
              steps: [
                "Rain on 30 days; the match goes ahead on 0.4 × 30 = 12 of them.",
                "No rain on 70 days; it goes ahead on 0.9 × 70 = 63.",
                "The match goes ahead on 75 days, of which 12 were rainy: {{12/75}} = 0.16.",
              ],
            },
          ],
          traps: [
            { spec: { type: "number", value: 0.12 }, feedback: "0.12 is P(rain AND goes ahead). 'Given it went ahead' means divide by P(goes ahead)." },
            { spec: { type: "number", value: 0.4 }, feedback: "0.4 is P(goes ahead given rain) — the condition is the other way round." },
          ],
          commonError: "Confusing P(rain and ahead) with P(rain given ahead).",
          difficulty: "challenge",
          guideRef: "tree-diagrams",
          hints: [
            "We know the match went ahead. Which routes on the tree are still possible?",
            "Find P(goes ahead) by adding those routes.",
            "What fraction of P(goes ahead) comes from the rain route?",
          ],
          strategy: "Restrict the sample space",
        },
        {
          kind: "short",
          id: "probability-p2-q09",
          question:
            "A fair six-sided dice is rolled three times. Work out the probability of getting exactly two 6s. Give your answer as a fraction in its simplest form.",
          answer: { type: "fraction", n: 5, d: 72, simplest: true },
          solution: [
            "One order, e.g. 6, 6, not 6: {{1/6 * 1/6 * 5/6 = 5/216}}.",
            "The non-6 can be in any of 3 positions: 3 orders.",
            "P = {{3 * 5/216 = 15/216 = 5/72}}.",
          ],
          traps: [
            { spec: { type: "fraction", n: 5, d: 216 }, feedback: "That's one order only. The non-6 roll could be first, second or third — 3 routes." },
            { spec: { type: "fraction", n: 1, d: 36 }, feedback: "{{1/6 * 1/6}} ignores the third roll, which must **not** be a 6." },
          ],
          commonError: "Forgetting the three orders.",
          difficulty: "core",
          guideRef: "tree-diagrams",
          hints: [
            "Write one sequence that gives exactly two 6s, and find its probability.",
            "How many different sequences give exactly two 6s?",
            "Multiply.",
          ],
          strategy: "Count the routes",
        },
        {
          kind: "written",
          id: "probability-p2-q10",
          question:
            "Kenji's drawer contains 5 black socks and 3 white socks. He takes two socks at random in the dark, without replacement. Show that the probability he takes a matching pair is {{13/28}}.",
          marks: 3,
          modelAnswer:
            "P(black, black) = {{5/8 * 4/7 = 20/56}}. P(white, white) = {{3/8 * 2/7 = 6/56}}. P(matching pair) = {{20/56 + 6/56 = 26/56 = 13/28}}.",
          markScheme: [
            { point: "P(BB) = 5/8 × 4/7 = 20/56", keywords: ["20/56", "5/8", "4/7", "5/14"] },
            { point: "P(WW) = 3/8 × 2/7 = 6/56", keywords: ["6/56", "3/8", "2/7", "3/28"] },
            { point: "Adds to 26/56 = 13/28", keywords: ["26/56", "13/28", "add", "+"] },
          ],
          commonError: "Using 8 as the denominator for the second sock.",
          difficulty: "core",
          guideRef: "tree-diagrams",
          hints: [
            "A matching pair is two blacks or two whites.",
            "After the first sock, there are 7 socks left.",
            "Add the two cases.",
          ],
          strategy: "Draw a tree diagram",
        },
        {
          kind: "short",
          id: "probability-p2-q11",
          question:
            "A bag contains 4 white beads and some black beads. A bead is taken at random; the probability that it is black is 0.6. Wei Ling then adds 3 more white beads to the bag. Work out the new probability that a bead taken at random is white. Give your answer as a fraction.",
          answer: { type: "fraction", n: 7, d: 13 },
          solution: [
            "Let there be b black beads: {{b/(b+4) = 0.6}}, so b = 0.6b + 2.4, 0.4b = 2.4, b = 6.",
            "After adding 3 white: 7 white, 6 black, 13 beads.",
            "P(white) = {{7/13}}.",
          ],
          traps: [
            { spec: { type: "fraction", n: 2, d: 5 }, feedback: "0.4 was P(white) **before** the extra beads were added. Recount the bag." },
            { spec: { type: "fraction", n: 7, d: 10 }, feedback: "The total also goes up by 3: there are 13 beads now, not 10." },
          ],
          commonError: "Adding the 3 beads to the white count but not the total.",
          difficulty: "core",
          guideRef: "algebraic-probability",
          hints: [
            "Let the number of black beads be b. What is P(black) in terms of b?",
            "Solve {{b/(b+4) = 0.6}}.",
            "Now recount: how many white beads and how many in total?",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "probability-p2-q12",
          question:
            "The five letters of the word MANGO are arranged in a row. How many different arrangements begin with a vowel?",
          answer: { type: "number", value: 48 },
          solution: [
            "First letter: A or O — 2 choices.",
            "The other 4 letters fill the remaining places: 4 × 3 × 2 × 1 = 24 ways.",
            "Total: 2 × 24 = 48.",
          ],
          traps: [
            { spec: { type: "number", value: 120 }, feedback: "120 counts every arrangement. Restrict the first letter to a vowel first." },
            { spec: { type: "number", value: 24 }, feedback: "There are two vowels (A and O), so 2 choices for the first letter." },
          ],
          difficulty: "core",
          guideRef: "counting",
          hints: [
            "Deal with the restriction first: how many choices for the first letter?",
            "How many ways can the remaining 4 letters be arranged?",
          ],
          strategy: "Handle the restriction first",
        },
        {
          kind: "written",
          id: "probability-p2-q13",
          question:
            "A bag contains n counters. 5 of the counters are red and the rest are blue. Two counters are taken at random, without replacement. The probability of taking one counter of each colour is {{5/9}}.\n\n(a) Show that {{n^2 - 19n + 90 = 0}}.\n\n(b) Find the possible values of n.",
          marks: 4,
          modelAnswer:
            "There are n − 5 blue counters. P(one of each) = P(RB) + P(BR) = {{2 * 5/n * (n-5)/(n-1) = (10(n-5))/(n(n-1))}}. Setting this equal to {{5/9}}: 90(n − 5) = 5n(n − 1), so 18(n − 5) = n(n − 1), {{18n - 90 = n^2 - n}}, giving {{n^2 - 19n + 90 = 0}}. Factorising: (n − 9)(n − 10) = 0, so n = 9 or n = 10. Both work (5 red with 4 blue, or 5 red with 5 blue).",
          markScheme: [
            { point: "Uses n − 5 blue and writes the two routes 5/n × (n − 5)/(n − 1)", keywords: ["n-5", "n − 5", "(n-1)", "n − 1", "5/n"] },
            { point: "Doubles for two orders: 10(n − 5)/(n(n − 1))", keywords: ["2 ×", "two", "10(n-5)", "10(n − 5)", "both orders"] },
            { point: "Equates to 5/9 and rearranges to n² − 19n + 90 = 0", keywords: ["5/9", "90", "19n", "18"] },
            { point: "n = 9 or n = 10", keywords: ["9", "10", "n-9", "n-10"] },
          ],
          commonError: "Counting only one order (red then blue), which gives a different quadratic.",
          difficulty: "challenge",
          guideRef: "algebraic-probability",
          hints: [
            "How many blue counters are there, in terms of n?",
            "One of each can be red-then-blue or blue-then-red. Write both.",
            "Set the total equal to {{5/9}} and clear fractions.",
            "Factorise — do both roots make sense?",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "probability-p2-q14",
          question: "Expand and simplify {{(x - 3)^3}}.",
          answer: { type: "expression", expr: "x^3-9x^2+27x-27", form: "expanded" },
          solution: [
            "Row 3 of Pascal's triangle: 1, 3, 3, 1.",
            "{{x^3 + 3x^2(-3) + 3x(-3)^2 + (-3)^3}}.",
            "= {{x^3 - 9x^2 + 27x - 27}}.",
          ],
          traps: [
            { spec: { type: "expression", expr: "x^3-27" }, feedback: "{{(x - 3)^3 != x^3 - 27}}. The middle terms come from Pascal's triangle: 1, 3, 3, 1." },
            { spec: { type: "expression", expr: "x^3-9x^2-27x-27" }, feedback: "Check the sign of the x term: {{(-3)^2 = +9}}, so it's +27x." },
          ],
          commonError: "Sign errors: powers of −3 alternate in sign.",
          difficulty: "core",
          guideRef: "binomial-expansion",
          hints: [
            "Use row 3 of Pascal's triangle.",
            "Treat the second term as −3 and raise it to the powers 0, 1, 2, 3.",
          ],
          strategy: "Use Pascal's triangle",
        },
        {
          kind: "short",
          id: "probability-p2-q15",
          question: "Find the term independent of x (the constant term) in the expansion of {{(x + 2/x)^6}}.",
          answer: { type: "number", value: 160 },
          solution: [
            "A general term is (coefficient) × {{x^(6-k) (2/x)^k}}, which has power of x equal to 6 − 2k.",
            "Constant term: 6 − 2k = 0, so k = 3.",
            "Row 6 of Pascal's triangle: 1, 6, 15, 20, 15, 6, 1, so the coefficient is 20.",
            "Term = {{20 * x^3 * (2/x)^3 = 20 * 8 = 160}}.",
          ],
          traps: [
            { spec: { type: "number", value: 20 }, feedback: "20 is the Pascal's triangle number. Don't forget {{2^3 = 8}} from {{(2/x)^3}}." },
            { spec: { type: "number", value: 40 }, feedback: "Cube the 2 as well: {{(2/x)^3 = 8/x^3}}." },
          ],
          commonError: "Forgetting to cube the 2.",
          difficulty: "challenge",
          guideRef: "binomial-expansion",
          hints: [
            "Each term has some x's from the first part and some {{1/x}}'s from the second.",
            "For no x overall, how many of each do you need out of 6?",
            "Use row 6 of Pascal's triangle and include the power of 2.",
          ],
          strategy: "Look for an invariant",
        },
      ],
    },
  ],

  // ===========================================================================
  // CHALLENGE SET — grade 9 / H+ / olympiad flavour
  // ===========================================================================
  challenge: [
    {
      kind: "short",
      id: "probability-ch-q01",
      question:
        "Arjun and Mei take turns to roll a fair six-sided dice. Arjun rolls first. The first person to roll a 6 wins. Work out the probability that Arjun wins. Give your answer as a fraction.",
      answer: { type: "fraction", n: 6, d: 11 },
      solution: [
        "Let p = P(Arjun wins).",
        "Either Arjun wins on his first roll ({{1/6}}), or both miss ({{5/6 * 5/6 = 25/36}}) and the game restarts with Arjun to roll — he then wins with probability p.",
        "{{p = 1/6 + 25/36 p}}, so {{11/36 p = 1/6}}, giving {{p = 6/11}}.",
      ],
      solutions: [
        {
          label: "Infinite geometric series",
          steps: [
            "Arjun wins on roll 1, 3, 5, …: {{1/6 + (25/36)(1/6) + (25/36)^2 (1/6) + ...}}.",
            "Sum = {{(1/6)/(1 - 25/36) = (1/6)/(11/36) = 6/11}}.",
          ],
        },
        {
          label: "Ratio argument",
          steps: [
            "In each round, Arjun wins with {{1/6}} and Mei with {{5/6 * 1/6 = 5/36}}.",
            "So their chances are in the ratio {{6/36 : 5/36}} = 6 : 5, giving Arjun {{6/11}}. Quickest of all.",
          ],
        },
      ],
      traps: [
        { spec: { type: "fraction", n: 1, d: 2 }, feedback: "Going first is an advantage — Arjun can win before Mei even rolls." },
        { spec: { type: "fraction", n: 1, d: 6 }, feedback: "That's only P(Arjun wins on his very first roll). He can also win later." },
      ],
      commonError: "Thinking the game is fair because the dice is fair.",
      difficulty: "challenge",
      guideRef: "or-and-rules",
      hints: [
        "Who has the advantage, and why?",
        "If both miss their first rolls, what does the game look like?",
        "Let p = P(Arjun wins) and write an equation for p in terms of itself.",
        "Or compare: in one round, how likely is Arjun to win versus Mei?",
      ],
      strategy: "Use self-similarity",
    },
    {
      kind: "short",
      id: "probability-ch-q02",
      question:
        "A biased spinner lands on red with probability p and on blue otherwise, where p < 0.5. It is spun twice. The probability that both spins land on the same colour is 0.58. Find p.",
      answer: { type: "number", value: 0.3 },
      solution: [
        "{{p^2 + (1-p)^2 = 0.58}}.",
        "{{2p^2 - 2p + 1 = 0.58}}, so {{2p^2 - 2p + 0.42 = 0}}, i.e. {{p^2 - p + 0.21 = 0}}.",
        "(p − 0.3)(p − 0.7) = 0, so p = 0.3 or 0.7. Since p < 0.5, p = 0.3.",
      ],
      solutions: [
        {
          label: "Symmetry",
          steps: [
            "P(different) = 2p(1 − p) = 1 − 0.58 = 0.42, so p(1 − p) = 0.21.",
            "Two numbers adding to 1 with product 0.21: 0.3 and 0.7. Swapping p and 1 − p leaves the equation unchanged — that's why there are two roots.",
          ],
        },
      ],
      traps: [{ spec: { type: "number", value: 0.7 }, feedback: "0.7 also solves the equation, but the question says p < 0.5." }],
      commonError: "Writing {{(1-p)^2}} as {{1 - p^2}}.",
      difficulty: "challenge",
      guideRef: "algebraic-probability",
      hints: [
        "'Same colour' means red–red or blue–blue.",
        "Write {{p^2 + (1-p)^2 = 0.58}} and expand carefully.",
        "Solve the quadratic; which root fits p < 0.5?",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "probability-ch-q03",
      question:
        "How many four-digit **even** numbers (from 1000 to 9999) have four different digits?",
      answer: { type: "number", value: 2296 },
      solution: [
        "Split by the last digit, because 0 is special (it can't be first).",
        "Last digit 0: first digit 9 choices (1–9), then 8, then 7: 9 × 8 × 7 = 504.",
        "Last digit 2, 4, 6 or 8 (4 choices): first digit can't be 0 or the last digit, so 8 choices; then 8, then 7: 4 × 8 × 8 × 7 = 1792.",
        "Total: 504 + 1792 = 2296.",
      ],
      traps: [
        { spec: { type: "number", value: 2268 }, feedback: "Halving 4536 assumes exactly half are even — but the zero rule breaks the symmetry. Split by the last digit." },
        { spec: { type: "number", value: 2240 }, feedback: "5 × 8 × 8 × 7 treats 0 like the other even digits. When the last digit is 0, the first digit has 9 choices, not 8." },
      ],
      commonError: "Not separating the case where the last digit is 0.",
      difficulty: "challenge",
      guideRef: "counting",
      hints: [
        "Fill the most restricted places first: the last digit (even) and the first digit (not 0).",
        "Does it matter whether the last digit is 0? Why?",
        "Split into two cases: last digit 0, and last digit 2, 4, 6 or 8.",
      ],
      strategy: "Split into cases",
    },
    {
      kind: "short",
      id: "probability-ch-q04",
      question:
        "In a large school, 2% of students have a particular virus. A rapid test gives a positive result for 95% of students who have the virus, and also (wrongly) for 10% of students who do not. A student tests positive. Work out the probability that they actually have the virus. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 0.162, tolerance: 0.0005 },
      solution: [
        "P(virus and positive) = 0.02 × 0.95 = 0.019.",
        "P(no virus and positive) = 0.98 × 0.1 = 0.098.",
        "P(positive) = 0.019 + 0.098 = 0.117.",
        "P(virus given positive) = {{0.019/0.117}} = 0.162 (3 s.f.).",
      ],
      solutions: [
        {
          label: "Natural frequencies (1000 students)",
          steps: [
            "20 have the virus; 19 of them test positive.",
            "980 don't; 98 of them test positive.",
            "Of the 117 positives, only 19 have the virus: {{19/117}} ≈ 0.162. The false positives swamp the true ones because the virus is rare.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 0.95 }, feedback: "0.95 is P(positive given virus). The question reverses the condition: P(virus given positive)." },
        { spec: { type: "number", value: 0.019 }, feedback: "0.019 is P(virus AND positive). We know they tested positive, so divide by P(positive)." },
      ],
      commonError: "Confusing P(positive given virus) with P(virus given positive).",
      difficulty: "challenge",
      guideRef: "tree-diagrams",
      hints: [
        "Draw a tree: virus / no virus, then positive / negative.",
        "Which two routes end in 'positive'?",
        "Of all the positive probability, what fraction comes from the virus route?",
        "Try imagining 1000 students — it makes the numbers concrete.",
      ],
      strategy: "Imagine a population",
    },
    {
      kind: "short",
      id: "probability-ch-q05",
      question:
        "A bag contains only red and blue counters. There are 3 more red counters than blue counters. Two counters are taken at random without replacement. The probability that they are different colours is {{1/2}}. How many counters are in the bag?",
      answer: { type: "number", value: 9 },
      solution: [
        "Let there be b blue and b + 3 red, so 2b + 3 in total.",
        "P(different) = {{(2b(b+3))/((2b+3)(2b+2)) = 1/2}}.",
        "4b(b + 3) = (2b + 3)(2b + 2): {{4b^2 + 12b = 4b^2 + 10b + 6}}.",
        "The {{b^2}} terms cancel: 2b = 6, b = 3. Total = 9.",
      ],
      solutions: [
        {
          label: "A neat general fact",
          steps: [
            "With r red and b blue, P(different) = {{(2rb)/((r+b)(r+b-1))}}. Setting this to {{1/2}} rearranges to {{(r-b)^2 = r+b}}.",
            "Here r − b = 3, so r + b = 9. Check: 6 red, 3 blue gives {{(2 * 6 * 3)/(9 * 8) = 36/72 = 1/2}}.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 3 }, feedback: "3 is the number of blue counters. Find the total." },
        { spec: { type: "number", value: 6 }, feedback: "6 is the number of red counters. Add the blue ones." },
      ],
      commonError: "Counting only one order, which halves the probability.",
      difficulty: "challenge",
      guideRef: "algebraic-probability",
      hints: [
        "Use b for the number of blue counters. Write the red count and the total.",
        "Different colours can come in two orders.",
        "Set up the equation and expand — something surprising happens to the {{b^2}} terms.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "probability-ch-q06",
      question: "Find the coefficient of {{x^2}} in the expansion of {{(1 + x)^4 (1 - 2x)^3}}.",
      answer: { type: "number", value: -6 },
      solution: [
        "{{(1 + x)^4 = 1 + 4x + 6x^2 + ...}}",
        "{{(1 - 2x)^3 = 1 - 6x + 12x^2 - 8x^3}}",
        "{{x^2}} terms come from (constant × {{x^2}}) + (x × x) + ({{x^2}} × constant):",
        "1 × 12 + 4 × (−6) + 6 × 1 = 12 − 24 + 6 = −6.",
      ],
      traps: [
        { spec: { type: "number", value: 18 }, feedback: "You've added 12 + 6 but missed the cross term 4x × (−6x) = {{-24x^2}}." },
        { spec: { type: "number", value: 72 }, feedback: "Multiplying the two {{x^2}} coefficients gives an {{x^4}} term, not {{x^2}}." },
      ],
      commonError: "Missing the x × x cross term.",
      difficulty: "challenge",
      guideRef: "binomial-expansion",
      hints: [
        "You only need each bracket up to its {{x^2}} term.",
        "Which pairs of terms multiply to give {{x^2}}?",
        "There are three pairs: constant × {{x^2}}, x × x, {{x^2}} × constant.",
      ],
      strategy: "Only track what you need",
    },
    {
      kind: "short",
      id: "probability-ch-q07",
      question:
        "In the expansion of {{(1 + ax)^n}}, where n is a positive integer, the coefficient of x is 12 and the coefficient of {{x^2}} is 60. Find n and a. Give n first, then a.",
      answer: { type: "list", values: [6, 2], ordered: true, display: "n = 6, a = 2" },
      solution: [
        "Coefficient of x: na = 12.",
        "Coefficient of {{x^2}}: {{(n(n-1))/2 * a^2 = 60}}.",
        "Rewrite: {{1/2 * (na)(n-1)a = 60}}, so {{1/2 * 12 * (n-1)a = 60}}, giving (n − 1)a = 10.",
        "na − a = 10, so 12 − a = 10, a = 2 and n = 6.",
      ],
      solutions: [
        {
          label: "Divide the equations",
          steps: [
            "{{((n(n-1))/2 a^2)/(na) = 60/12}}, so {{((n-1)a)/2 = 5}}, (n − 1)a = 10.",
            "Subtract from na = 12: a = 2, so n = 6.",
          ],
        },
      ],
      traps: [{ spec: { type: "list", values: [2, 6], ordered: true }, feedback: "Give n first, then a." }],
      commonError: "Forgetting to square a in the {{x^2}} coefficient.",
      difficulty: "challenge",
      guideRef: "binomial-expansion",
      hints: [
        "Write the x and {{x^2}} terms of {{(1 + ax)^n}} in terms of n and a.",
        "You should get na = 12 and {{(n(n-1))/2 a^2 = 60}}.",
        "Spot na inside the second equation and substitute 12.",
      ],
      strategy: "Substitute what you know",
    },
    {
      kind: "short",
      id: "probability-ch-q08",
      question:
        "The nine letters of SINGAPORE are all different. In how many arrangements of these letters are the four vowels (I, A, O, E) all next to each other?",
      answer: { type: "number", value: 17280 },
      solution: [
        "Glue the four vowels into one block. Now arrange 6 units: the block and S, N, G, P, R.",
        "6 units: 6! = 720 ways.",
        "Inside the block the vowels can be arranged in 4! = 24 ways.",
        "Total: 720 × 24 = 17 280.",
      ],
      traps: [
        { spec: { type: "number", value: 720 }, feedback: "You've arranged the units, but the four vowels can be ordered inside the block too: × 4!." },
        { spec: { type: "number", value: 362880 }, feedback: "9! counts every arrangement — ignore the restriction at your peril." },
      ],
      commonError: "Forgetting to arrange the letters inside the block.",
      difficulty: "challenge",
      guideRef: "counting",
      hints: [
        "Treat the four vowels as one super-letter. How many things are you arranging now?",
        "How many ways can 6 different things be arranged?",
        "Don't forget: the vowels can be shuffled inside their block.",
      ],
      strategy: "Glue things together",
    },
    {
      kind: "short",
      id: "probability-ch-q09",
      question:
        "Five friends each write down the day of the week they were born. Assume each of the 7 days is equally likely and the friends are independent. Work out the probability that at least two of them were born on the same day of the week. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 0.85, tolerance: 0.0005, display: "0.850" },
      solution: [
        "Complement: all five on different days.",
        "P(all different) = {{7/7 * 6/7 * 5/7 * 4/7 * 3/7 = 2520/16807}} ≈ 0.150.",
        "P(at least two the same) = 1 − 0.14994… = 0.850 (3 s.f.).",
      ],
      traps: [
        { spec: { type: "number", value: 0.15, tolerance: 0.0005 }, feedback: "That's P(all on different days). Subtract from 1." },
      ],
      commonError: "Trying to add up all the 'pairs match' cases directly, which double-counts.",
      difficulty: "challenge",
      guideRef: "or-and-rules",
      hints: [
        "'At least two the same' has many cases. What is its complement?",
        "Line the friends up. What's the chance the second avoids the first's day? The third avoids both?",
        "Multiply, then subtract from 1.",
      ],
      strategy: "Use the complement",
    },
    {
      kind: "written",
      id: "probability-ch-q10",
      question:
        "A bag contains red and blue counters (at least one of each). A counter is taken at random, replaced, and a second counter is taken. Prove that the probability that both counters are the same colour is at least {{1/2}}, and state when it equals {{1/2}}.",
      marks: 3,
      modelAnswer:
        "Let P(red) = p, so P(blue) = 1 − p. P(same) = {{p^2 + (1-p)^2 = 2p^2 - 2p + 1}}. Completing the square: {{2p^2 - 2p + 1 = 2(p - 1/2)^2 + 1/2}}. Since {{(p - 1/2)^2 >= 0}}, P(same) ≥ {{1/2}}. Equality holds exactly when p = {{1/2}}, i.e. when there are equal numbers of red and blue counters.",
      markScheme: [
        { point: "Writes P(same) = p² + (1 − p)²", keywords: ["p^2", "p²", "(1-p)^2", "(1 − p)²", "1-p"] },
        { point: "Rewrites as 2(p − 1/2)² + 1/2 (or equivalent argument, e.g. 2p(1 − p) ≤ 1/2)", keywords: ["complete", "square", "2(p-1/2)", "(p − 1/2)", "+ 1/2", "≥ 0", ">= 0"] },
        { point: "Concludes ≥ 1/2 with equality when p = 1/2 (equal numbers of each colour)", keywords: ["1/2", "equal", "same number", "p = 1/2", "p=0.5", "0.5"] },
      ],
      solutions: [
        {
          label: "Via the complement",
          steps: [
            "P(different) = 2p(1 − p).",
            "By AM–GM (or since {{(p - (1-p))^2 >= 0}}), {{p(1-p) <= 1/4}}, so P(different) ≤ {{1/2}}.",
            "Hence P(same) = 1 − P(different) ≥ {{1/2}}.",
          ],
        },
      ],
      commonError: "Checking a few numerical examples instead of proving it for every p.",
      difficulty: "challenge",
      guideRef: "algebraic-probability",
      hints: [
        "Let P(red) = p. Write P(same colour) in terms of p.",
        "Expand. Does the quadratic remind you of completing the square?",
        "A square is never negative. Use that to finish.",
      ],
      strategy: "Complete the square",
    },
  ],
};
