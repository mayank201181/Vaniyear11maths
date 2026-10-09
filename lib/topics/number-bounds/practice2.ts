// ---------------------------------------------------------------------------
// Number, Accuracy & Bounds — Practice Papers 3 and 4.
// Paper 3: mixed practice across every section, mostly auto-marked.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher questions
// (contexts, multi-step, "show that", suitable degree of accuracy, 3 s.f.).
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "number-bounds-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "number-bounds-p3-q01",
        question:
          "Write 588 as a product of its prime factors in index form, {{588 = 2^a * 3^b * 7^c}}.\n\nGive the values of a, b and c in that order.",
        answer: { type: "list", values: [2, 1, 2], ordered: true, display: "a = 2, b = 1, c = 2  (588 = 2² × 3 × 7²)" },
        traps: [
          {
            spec: { type: "list", values: [2, 0, 2], ordered: true },
            feedback: "Check by multiplying back: {{2^2 * 7^2 = 196}}, not 588. You've lost the factor of 3 — 588 = 196 × 3.",
          },
          {
            spec: { type: "list", values: [1, 1, 2], ordered: true },
            feedback: "{{2 * 3 * 7^2 = 294}}, which is only half of 588. 588 is divisible by 4, so there are two factors of 2.",
          },
        ],
        solution: [
          "Keep dividing by primes: 588 ÷ 2 = 294, 294 ÷ 2 = 147, 147 ÷ 3 = 49, 49 ÷ 7 = 7, 7 ÷ 7 = 1.",
          "So {{588 = 2 * 2 * 3 * 7 * 7 = 2^2 * 3 * 7^2}}.",
          "a = 2, b = 1, c = 2. Check: 4 × 3 × 49 = 588 ✓.",
        ],
        commonError: "Stopping at 49 and forgetting that 49 = 7 × 7, or missing the second factor of 2.",
        difficulty: "warmup",
        guideRef: "prime-factors-hcf-lcm",
        hints: ["Start dividing by the smallest prime, 2, as many times as you can.", "When 2 no longer divides, try 3, then 5, then 7."],
        strategy: "Factor tree",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "number-bounds-p3-q02",
        question: "Round 0.0060496 to 3 significant figures.",
        answer: { type: "number", value: 0.00605, allowFraction: false, display: "0.00605" },
        traps: [
          { spec: { type: "number", value: 0.006 }, feedback: "That's 3 *decimal places*. Significant figures start at the first non-zero digit, the 6." },
          { spec: { type: "number", value: 0.00604 }, feedback: "Look at the 4th significant figure: 0.00604**9**6. A 9 means round the 4 up to 5." },
        ],
        solution: [
          "The first significant figure is the 6 (leading zeros don't count).",
          "The first three significant figures are 6, 0, 4; the next digit is 9.",
          "9 ≥ 5, so round up: 0.00605.",
        ],
        commonError: "Counting the leading zeros as significant figures and writing 0.006.",
        difficulty: "warmup",
        guideRef: "rounding-estimation",
        hints: ["Which digit is the first significant figure?", "Look at the digit straight after the third significant figure to decide whether to round up."],
        strategy: "Look at the next digit",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "number-bounds-p3-q03",
        question:
          "A bag of durian pulp has a mass of 2400 g, correct to the nearest 100 g.\n\nWrite down the lower bound and the upper bound of the mass, in grams. Give the lower bound first.",
        answer: { type: "list", values: [2350, 2450], ordered: true, display: "2350 g, 2450 g" },
        traps: [
          {
            spec: { type: "list", values: [2300, 2500], ordered: true },
            feedback: "You've gone a whole 100 g each way. The bounds are only *half* the unit away: 100 ÷ 2 = 50 g.",
          },
          {
            spec: { type: "list", values: [2350, 2449], ordered: true },
            feedback: "Mass is continuous, so the upper bound is 2450 g (the mass can be anything just below it). 2449 would only work for whole-number counts.",
          },
        ],
        solution: [
          "Rounded to the nearest 100 g, so the error is at most half of 100 = 50 g.",
          "Lower bound = 2400 − 50 = 2350 g.",
          "Upper bound = 2400 + 50 = 2450 g.",
        ],
        difficulty: "warmup",
        guideRef: "error-intervals",
        hints: ["What is half of the rounding unit?", "Go that far below and above 2400."],
        strategy: "Halve the unit",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "number-bounds-p3-q04",
        question:
          "By rounding each number to 1 significant figure, work out an estimate for\n\n{{(48.7 * 0.312)/0.0198}}",
        answer: { type: "number", value: 750, display: "750" },
        traps: [
          { spec: { type: "number", value: 767.39, tolerance: 0.5 }, feedback: "That's the calculator value. An *estimate* uses 1 s.f. values: 50, 0.3 and 0.02." },
          { spec: { type: "number", value: 7.5 }, feedback: "Dividing by 0.02 makes a number bigger, not smaller: 15 ÷ 0.02 = 1500 ÷ 2 = 750." },
        ],
        solution: [
          "48.7 ≈ 50, 0.312 ≈ 0.3, 0.0198 ≈ 0.02.",
          "Numerator ≈ 50 × 0.3 = 15.",
          "15 ÷ 0.02 = 1500 ÷ 2 = 750.",
        ],
        commonError: "Multiplying by 0.02 instead of dividing, or rounding 0.0198 to 0.01.",
        difficulty: "warmup",
        guideRef: "rounding-estimation",
        hints: ["Round each number to its first significant figure.", "To divide by 0.02, multiply top and bottom by 100 first."],
        strategy: "Estimate first",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "number-bounds-p3-q05",
        question:
          "Find (i) the highest common factor (HCF) and (ii) the lowest common multiple (LCM) of 252 and 360.\n\nGive the HCF first.",
        answer: { type: "list", values: [36, 2520], ordered: true, display: "HCF = 36, LCM = 2520" },
        traps: [
          { spec: { type: "list", values: [2520, 36], ordered: true }, feedback: "Right numbers, wrong order — the HCF is the smaller one and should come first." },
          {
            spec: { type: "list", values: [36, 90720], ordered: true },
            feedback: "90 720 is 252 × 360, a common multiple but not the *lowest*. Divide by the HCF: 90 720 ÷ 36 = 2520.",
          },
        ],
        solution: [
          "{{252 = 2^2 * 3^2 * 7}} and {{360 = 2^3 * 3^2 * 5}}.",
          "HCF: take the lower power of each shared prime: {{2^2 * 3^2 = 36}}.",
          "LCM: take the higher power of every prime that appears: {{2^3 * 3^2 * 5 * 7 = 2520}}.",
        ],
        solutions: [
          {
            label: "HCF × LCM = product",
            steps: ["Once you have the HCF, use HCF × LCM = 252 × 360.", "LCM = 252 × 360 ÷ 36 = 7 × 360 = 2520."],
          },
        ],
        commonError: "For the LCM, multiplying the highest powers but leaving out a prime that appears in only one number (forgetting the 5 or the 7).",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "Write each number as a product of prime factors.",
          "A Venn diagram helps: shared primes go in the overlap.",
          "HCF = product of the overlap; LCM = product of everything in the diagram.",
        ],
        strategy: "Draw a Venn diagram",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "number-bounds-p3-q06",
        question:
          "Three feeder buses leave an MRT interchange together at 07:00.\n\n- Bus A leaves every 12 minutes.\n- Bus B leaves every 18 minutes.\n- Bus C leaves every 30 minutes.\n\nAt what time will all three next leave together? Give your answer in 24-hour time, e.g. 09:45.",
        answer: { type: "text", accept: ["10:00", "10.00", "1000", "10:00am", "10am", "10:00 am", "10 am", "10.00am", "10 o'clock"], display: "10:00" },
        traps: [
          {
            spec: { type: "text", accept: ["07:36", "7:36", "0736", "7.36", "07.36"] },
            feedback: "36 minutes is the LCM of 12 and 18 only. Bus C (every 30 minutes) isn't leaving at 07:36 — include all three numbers.",
          },
          {
            spec: { type: "text", accept: ["07:06", "7:06", "0706", "7.06"] },
            feedback: "6 is the HCF. Times when *all* buses leave are common **multiples**, so you need the LCM.",
          },
        ],
        solution: [
          "They leave together at common multiples of 12, 18 and 30 minutes, so find the LCM.",
          "{{12 = 2^2 * 3}}, {{18 = 2 * 3^2}}, {{30 = 2 * 3 * 5}}.",
          "LCM = {{2^2 * 3^2 * 5 = 180}} minutes = 3 hours.",
          "07:00 + 3 hours = 10:00.",
        ],
        commonError: "Using the HCF instead of the LCM, or finding the LCM of only two of the three numbers.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "Will the answer be a common factor or a common multiple of 12, 18 and 30?",
          "Write each number as a product of primes and take the highest power of each prime.",
          "Convert the LCM in minutes into hours and add it to 07:00.",
        ],
        strategy: "Use prime factors",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "number-bounds-p3-q07",
        question:
          "Ethan's calculator shows a value x. He **truncates** it to 1 decimal place and writes 4.7\n\nWrite down the error interval for x. Use x and the inequality signs < and ≤ (you may type <= for ≤).",
        answer: { type: "text", accept: ["4.7<=x<4.8", "4.7≤x<4.8", "x>=4.7 and x<4.8", "4.70<=x<4.80"], display: "4.7 ≤ x < 4.8" },
        traps: [
          {
            spec: { type: "text", accept: ["4.65<=x<4.75", "4.65≤x<4.75"] },
            feedback: "That's the error interval for *rounding*. Truncating just chops off digits, so 4.79… also becomes 4.7 — x can be anything from 4.7 up to (not including) 4.8.",
          },
          {
            spec: { type: "text", accept: ["4.7<=x<=4.8", "4.7≤x≤4.8", "4.7<=x<=4.79", "4.7≤x≤4.79"] },
            feedback: "Close — but 4.8 itself truncates to 4.8, not 4.7, so the upper end must be strict: x < 4.8.",
          },
        ],
        solution: [
          "Truncating to 1 d.p. removes every digit after the first decimal place.",
          "Smallest x giving 4.7 is 4.7 itself; anything up to 4.7999… also gives 4.7.",
          "4.8 truncates to 4.8, so it is excluded: 4.7 ≤ x < 4.8.",
        ],
        commonError: "Treating truncation like rounding and going half a unit each way.",
        difficulty: "core",
        guideRef: "error-intervals",
        hints: ["What does truncating 4.76 to 1 d.p. give? What about 4.69?", "Truncation never rounds up — so 4.7 is the *lowest* possible value.", "Find the first number that would truncate to 4.8 instead."],
        strategy: "Try small cases",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "number-bounds-p3-q08",
        question:
          "A rectangular noticeboard is 8.3 m long and 5.6 m wide. Both measurements are correct to 1 decimal place.\n\nWork out the upper bound for the area of the noticeboard. Give your answer exactly, in m².",
        answer: { type: "number", value: 47.1775, display: "47.1775 m²" },
        traps: [
          { spec: { type: "number", value: 46.48 }, feedback: "46.48 m² uses the measured values. The upper bound of a product uses both upper bounds: 8.35 and 5.65." },
          { spec: { type: "number", value: 45.7975 }, feedback: "That's the *lower* bound (8.25 × 5.55). For the largest area, use the largest length and the largest width." },
        ],
        solution: [
          "Upper bound of length = 8.3 + 0.05 = 8.35 m.",
          "Upper bound of width = 5.6 + 0.05 = 5.65 m.",
          "Upper bound of area = 8.35 × 5.65 = 47.1775 m².",
        ],
        commonError: "Calculating the area first (46.48) and then adding half a unit to the answer.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: ["To make a product as large as possible, what should each factor be?", "Find the upper bound of each measurement: half of 0.1 is 0.05."],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "number-bounds-p3-q09",
        question:
          "Aisha runs 400 m, correct to the nearest 10 m. Her time is 52.3 seconds, correct to the nearest 0.1 second.\n\nWork out the lower bound for her average speed. Give your answer in m/s correct to 3 significant figures.",
        answer: { type: "number", value: 7.55, tolerance: 0.005, display: "7.55 m/s" },
        traps: [
          {
            spec: { type: "number", value: 7.56, tolerance: 0.005 },
            feedback: "You've used the lower bound of the distance with the lower bound of the time (395 ÷ 52.25). To make a quotient small, divide the smallest distance by the *largest* time.",
          },
          { spec: { type: "number", value: 7.65, tolerance: 0.005 }, feedback: "7.65 is the measured speed, 400 ÷ 52.3. You need the lower bound: 395 ÷ 52.35." },
        ],
        solution: [
          "Distance bounds: 395 m to 405 m. Time bounds: 52.25 s to 52.35 s.",
          "Speed = distance ÷ time. To make it as small as possible: smallest distance ÷ largest time.",
          "Lower bound = 395 ÷ 52.35 = 7.5453… = 7.55 m/s (3 s.f.).",
        ],
        commonError: "Pairing lower bound with lower bound for a division.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "Write down the bounds for the distance and for the time.",
          "Does a bigger time make the speed bigger or smaller?",
          "Lower bound of speed = lower bound of distance ÷ upper bound of time.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "written",
        id: "number-bounds-p3-q10",
        question:
          "Olivia wants to estimate the value of\n\n{{(2.76 * 19.4)/4.12}}\n\n(a) Round each number to 1 significant figure to work out an estimate.\n\n(b) Without working out the exact value, explain whether your estimate is an overestimate or an underestimate.",
        marks: 3,
        modelAnswer:
          "(a) 2.76 ≈ 3, 19.4 ≈ 20, 4.12 ≈ 4, so the estimate is {{(3 * 20)/4 = 60/4 = 15}}.\n\n(b) It is an **overestimate**. Both numbers on the top were rounded up (2.76 → 3 and 19.4 → 20), which makes the numerator bigger. The number on the bottom was rounded down (4.12 → 4), and dividing by a smaller number makes the answer bigger. Every change pushes the answer up, so 15 is larger than the true value (which is about 13.0).",
        markScheme: [
          { point: "Correct 1 s.f. values 3, 20 and 4 used, giving 15", keywords: ["15", "60/4", "3 × 20", "3 x 20"] },
          { point: "States it is an overestimate", keywords: ["overestimate", "over estimate", "too big", "too high", "bigger than"] },
          { point: "Reason: both numerator values rounded up AND the denominator rounded down (dividing by a smaller number gives a larger answer)", keywords: ["rounded up", "rounded down", "denominator", "dividing by a smaller", "numerator"] },
        ],
        commonError: "Saying 'overestimate because 4.12 was rounded down' as if rounding down always lowers the answer — in the denominator it does the opposite.",
        difficulty: "core",
        guideRef: "rounding-estimation",
        hints: [
          "For each number, did you round it up or down?",
          "Rounding a number on the top up makes the answer bigger. What about rounding a number on the bottom down?",
          "If every rounding pushes the answer the same way, you can be sure of the direction.",
        ],
        strategy: "Estimate first",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "written",
        id: "number-bounds-p3-q11",
        question:
          "A water tank holds 85 litres of water, correct to the nearest litre. Jun pours out 23.6 litres, correct to 1 decimal place.\n\nMarcus works out the greatest possible amount of water left in the tank:\n\n    Greatest amount left = 85.5 − 23.65 = 61.85 litres\n\nMarcus is wrong. Explain the mistake he has made and work out the correct greatest amount.",
        marks: 3,
        modelAnswer:
          "Marcus has subtracted the **upper** bound of the amount poured out. To make a difference as large as possible you take the largest first value and subtract the **smallest** second value.\n\nThe bounds of the amount poured out are 23.55 and 23.65 litres, so\n\n    Greatest amount left = 85.5 − 23.55 = 61.95 litres.",
        markScheme: [
          { point: "Identifies that he used the upper bound (23.65) of the amount poured out", keywords: ["23.65", "upper bound", "largest amount poured"] },
          { point: "Explains that a difference is greatest with upper − lower (subtract the smallest possible amount)", keywords: ["lower bound", "smallest", "23.55", "upper − lower", "upper - lower"] },
          { point: "Correct answer 61.95 litres", keywords: ["61.95"] },
        ],
        commonError: "Thinking 'upper bound of the answer = upper bounds of everything', which only works for sums and products.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "To leave as much water as possible, do you want to pour out a lot or a little?",
          "What is the smallest amount that rounds to 23.6 litres?",
          "Greatest difference = upper bound − lower bound.",
        ],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "number-bounds-p3-q12",
        question:
          "A locker uses a 4-digit code made from the digits 0 to 9.\n\n- The first digit cannot be 0.\n- No digit can be used more than once.\n\nHow many different codes are possible?",
        answer: { type: "number", value: 4536, display: "4536" },
        traps: [
          { spec: { type: "number", value: 5040 }, feedback: "5040 = 10 × 9 × 8 × 7 allows 0 as the first digit. Start with only 9 choices for the first digit." },
          { spec: { type: "number", value: 3024 }, feedback: "3024 = 9 × 8 × 7 × 6. After the first digit (1–9), 0 becomes available again, so the second digit still has 9 choices." },
          { spec: { type: "number", value: 9000 }, feedback: "9000 allows repeated digits. With no repeats, each position has one fewer choice than the one before." },
        ],
        solution: [
          "First digit: 1–9, so 9 choices.",
          "Second digit: any of 0–9 except the first digit, so 9 choices.",
          "Third digit: 8 choices. Fourth digit: 7 choices.",
          "Total = 9 × 9 × 8 × 7 = 4536.",
        ],
        commonError: "Giving the second digit only 8 choices — forgetting that 0 is now allowed.",
        difficulty: "core",
        guideRef: "number-problems",
        hints: [
          "Deal with the most restricted position first.",
          "How many digits can go second, now that 0 is allowed but one digit has been used?",
          "Multiply the number of choices for each position (the product rule).",
        ],
        strategy: "Deal with restrictions first",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "number-bounds-p3-q13",
        question:
          "A remote-control car travels 63.4 m, correct to 1 decimal place, in a time of 12.6 seconds, correct to 1 decimal place.\n\nWork out the average speed of the car **to a suitable degree of accuracy**. You must show all your working and give a reason for your final answer.",
        marks: 4,
        modelAnswer:
          "Distance: 63.35 ≤ d < 63.45. Time: 12.55 ≤ t < 12.65.\n\nUpper bound of speed = {{63.45/12.55}} = 5.0557… m/s.\n\nLower bound of speed = {{63.35/12.65}} = 5.0079… m/s.\n\nTo 2 s.f. these are 5.1 and 5.0 — they don't agree. To 1 s.f. they are both 5.\n\nSo the speed is **5 m/s** to a suitable degree of accuracy, because both bounds round to 5 to 1 significant figure.",
        markScheme: [
          { point: "Correct bounds used: 63.35, 63.45, 12.55, 12.65", keywords: ["63.35", "63.45", "12.55", "12.65"] },
          { point: "Upper bound of speed = 63.45 ÷ 12.55 = 5.055… (largest ÷ smallest)", keywords: ["5.05", "5.06", "63.45/12.55", "63.45 ÷ 12.55"] },
          { point: "Lower bound of speed = 63.35 ÷ 12.65 = 5.007… (smallest ÷ largest)", keywords: ["5.00", "5.01", "63.35/12.65", "63.35 ÷ 12.65"] },
          { point: "Answer 5 m/s with reason: both bounds round to 5 to 1 s.f. (they differ at 2 s.f.)", keywords: ["5 m/s", "1 s.f", "1 significant figure", "both round", "agree"] },
        ],
        commonError: "Giving 5.0 m/s: the upper bound 5.0557… rounds to 5.1 to 2 s.f., so 2 s.f. is not justified.",
        difficulty: "challenge",
        guideRef: "bounds-calculations",
        hints: [
          "Find the upper and lower bounds of the speed first.",
          "Upper bound of a quotient = upper ÷ lower; lower bound = lower ÷ upper.",
          "Round both bounds to 3 s.f., then 2 s.f., then 1 s.f. Stop at the first accuracy where they agree.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "number-bounds-p3-q14",
        question: "Find the smallest positive integer n such that 540n is a cube number.",
        answer: { type: "number", value: 50, display: "50" },
        traps: [
          { spec: { type: "number", value: 10 }, feedback: "540 × 10 = 5400 = {{2^3 * 3^3 * 5^2}} — the 5 only has power 2. Every prime's power must be a multiple of 3." },
          { spec: { type: "number", value: 15 }, feedback: "540 × 15 = 8100 is a square ({{90^2}}), not a cube. For a cube, every prime power must be a multiple of 3." },
        ],
        solution: [
          "{{540 = 2^2 * 3^3 * 5}}.",
          "In a cube number, the power of every prime is a multiple of 3.",
          "The 3s are fine ({{3^3}}). The 2 needs one more factor of 2; the 5 needs two more factors of 5.",
          "n = {{2 * 5^2 = 50}}. Check: 540 × 50 = 27 000 = {{30^3}} ✓.",
        ],
        commonError: "Making the powers even (the rule for square numbers) instead of multiples of 3.",
        difficulty: "challenge",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "Write 540 as a product of prime factors.",
          "What is special about the prime factorisation of a cube number, e.g. {{216 = 2^3 * 3^3}}?",
          "Find the smallest extra factors that make every power a multiple of 3.",
        ],
        strategy: "Use prime factors",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "number-bounds-p3-q15",
        question:
          "a = 9.6 and b = 7.4, both correct to 1 decimal place.\n\nWork out the upper bound for {{a/(a - b)}}. Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 4.55, tolerance: 0.005, display: "4.55" },
        traps: [
          { spec: { type: "number", value: 4.2, tolerance: 0.005 }, feedback: "4.20 (= 9.65 ÷ 2.3) is the *lower* bound. The fraction gets bigger when its denominator a − b gets smaller." },
          {
            spec: { type: "number", value: 4.39, tolerance: 0.005 },
            feedback: "You've used a = 9.65 everywhere. But a appears on top *and* bottom — a bigger a also makes a − b bigger. Test both a values, or rewrite as {{1/(1 - b/a)}}.",
          },
        ],
        solution: [
          "Rewrite: {{a/(a - b) = 1/(1 - b/a)}}. This is largest when {{b/a}} is largest.",
          "{{b/a}} is largest with the biggest b and the smallest a: b = 7.45, a = 9.55.",
          "Upper bound = {{9.55/(9.55 - 7.45) = 9.55/2.1}} = 4.5476… = 4.55 (3 s.f.).",
        ],
        solutions: [
          {
            label: "Test the corner values",
            steps: [
              "With b = 7.45: a = 9.55 gives {{9.55/2.1}} = 4.548; a = 9.65 gives {{9.65/2.2}} = 4.386.",
              "With b = 7.35 the denominators are bigger, so the values are smaller (4.20 and 4.34).",
              "Largest = 4.548 → 4.55. Quick to do, but the rewrite tells you *why* without trying all four.",
            ],
          },
        ],
        commonError: "Using the upper bound of a in both the numerator and denominator.",
        difficulty: "challenge",
        guideRef: "bounds-calculations",
        hints: [
          "a is on the top and the bottom. Does making a bigger make the fraction bigger or smaller? Try it.",
          "Divide top and bottom by a: {{a/(a - b) = 1/(1 - b/a)}}.",
          "To make {{1/(1 - b/a)}} big, make {{b/a}} as big as possible.",
        ],
        strategy: "Consider extremes",
      },
    ],
  },
  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "number-bounds-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "number-bounds-p4-q01",
        question:
          "{{1260 = 2^2 * 3^2 * 5 * 7}} and {{1050 = 2 * 3 * 5^2 * 7}}.\n\nFind the highest common factor (HCF) of 1260 and 1050.",
        answer: { type: "number", value: 210, display: "210" },
        traps: [
          { spec: { type: "number", value: 6300 }, feedback: "6300 is the LCM (highest powers of every prime). The HCF uses only the shared primes, each to its *lowest* power." },
          { spec: { type: "number", value: 30 }, feedback: "Don't forget the 7 — it's a factor of both numbers." },
        ],
        solution: [
          "Shared primes: 2, 3, 5 and 7.",
          "Lowest powers: {{2^1}}, {{3^1}}, {{5^1}}, {{7^1}}.",
          "HCF = 2 × 3 × 5 × 7 = 210.",
        ],
        difficulty: "warmup",
        guideRef: "prime-factors-hcf-lcm",
        hints: ["Which primes appear in both factorisations?", "For each shared prime, take the smaller power."],
        strategy: "Use prime factors",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "number-bounds-p4-q02",
        question:
          "Use your calculator to work out the value of\n\n{{(sqrt(17.8) + 2.3^2)/(4.1 * 0.65)}}\n\nGive your answer correct to 3 significant figures.",
        answer: { type: "number", value: 3.57, tolerance: 0.005, display: "3.57 (3.5681067…)" },
        traps: [
          {
            spec: { type: "number", value: 1.51, tolerance: 0.005 },
            feedback: "You divided by 4.1 and then *multiplied* by 0.65. The whole denominator 4.1 × 0.65 needs brackets: divide by 2.665.",
          },
          {
            spec: { type: "number", value: 1.8, tolerance: 0.005 },
            feedback: "Check the square root: it covers 17.8 only, not 17.8 + {{2.3^2}}. Close the root bracket straight after 17.8.",
          },
        ],
        solution: [
          "Numerator: {{sqrt(17.8)}} = 4.2190… and {{2.3^2}} = 5.29, total 9.5090…",
          "Denominator: 4.1 × 0.65 = 2.665.",
          "9.5090… ÷ 2.665 = 3.5681067… = 3.57 (3 s.f.).",
        ],
        commonError: "Typing it in without brackets so the calculator divides only part of the numerator.",
        difficulty: "warmup",
        guideRef: "rounding-estimation",
        hints: ["Work out the top and the bottom separately (or use brackets / the fraction key).", "Write down the full display before rounding."],
        strategy: "Use brackets",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "number-bounds-p4-q03",
        question:
          "The length, L cm, of a pencil is 14 cm, correct to the nearest centimetre.\n\nComplete the error interval for L. Write it in the form a ≤ L < b (you may type <= for ≤).",
        answer: { type: "text", accept: ["13.5<=L<14.5", "13.5≤L<14.5", "L>=13.5 and L<14.5", "13.5cm<=L<14.5cm"], display: "13.5 ≤ L < 14.5" },
        traps: [
          { spec: { type: "text", accept: ["13.5<=L<=14.5", "13.5≤L≤14.5", "13.5<=L<=14.4", "13.5≤L≤14.4", "13.5<=L<=14.49", "13.5≤L≤14.49"] }, feedback: "14.5 rounds up to 15, so it can't be included — but every value just below it can. The upper end is strict: L < 14.5." },
          { spec: { type: "text", accept: ["13<=L<15", "13≤L<15"] }, feedback: "Go only half a centimetre each side of 14, not a whole one." },
        ],
        solution: [
          "Half of 1 cm is 0.5 cm.",
          "Lower bound = 13.5 (included: 13.5 rounds up to 14).",
          "Upper bound = 14.5 (excluded: 14.5 rounds up to 15).",
          "13.5 ≤ L < 14.5.",
        ],
        difficulty: "warmup",
        guideRef: "error-intervals",
        hints: ["What is half of the unit you rounded to?", "Which end is included: does 14.5 round to 14 or 15?"],
        strategy: "Halve the unit",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "number-bounds-p4-q04",
        question:
          "Work out an estimate for the value of\n\n{{(5.98 * 403)/0.198}}\n\nShow how you rounded each number.",
        answer: { type: "number", value: 12000, display: "12 000" },
        traps: [
          { spec: { type: "number", value: 480 }, feedback: "You multiplied by 0.2 instead of dividing. Dividing by 0.2 is the same as multiplying by 5." },
          { spec: { type: "number", value: 12171.41, tolerance: 0.5 }, feedback: "That's the exact calculator value. An estimate uses each number rounded to 1 s.f.: 6, 400 and 0.2." },
        ],
        solution: [
          "5.98 ≈ 6, 403 ≈ 400, 0.198 ≈ 0.2.",
          "6 × 400 = 2400.",
          "2400 ÷ 0.2 = 24 000 ÷ 2 = 12 000.",
        ],
        difficulty: "warmup",
        guideRef: "rounding-estimation",
        hints: ["Round each number to 1 significant figure.", "To divide by 0.2, multiply top and bottom by 10."],
        strategy: "Estimate first",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "number-bounds-p4-q05",
        question:
          "{{A = 2^3 * 3^2 * 5}} and {{B = 2 * 3^4 * 7}}.\n\nFind the lowest common multiple (LCM) of A and B. Give your answer as an ordinary number.",
        answer: { type: "number", value: 22680, display: "22 680  (= 2³ × 3⁴ × 5 × 7)" },
        traps: [
          { spec: { type: "number", value: 18 }, feedback: "18 = 2 × 3² is the HCF. The LCM takes the *highest* power of every prime in either number." },
          { spec: { type: "number", value: 408240 }, feedback: "408 240 is A × B. That's a common multiple, but not the lowest — divide by the HCF (18)." },
          { spec: { type: "number", value: 2520 }, feedback: "You've used {{3^2}}, but B contains {{3^4}}. Take the higher power." },
        ],
        solution: [
          "Take the highest power of each prime that appears: {{2^3}}, {{3^4}}, {{5^1}}, {{7^1}}.",
          "LCM = {{2^3 * 3^4 * 5 * 7}} = 8 × 81 × 35 = 22 680.",
        ],
        commonError: "Taking the lowest powers (that gives the HCF) or leaving out the primes that appear in only one number.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "The LCM must be divisible by both A and B. Which powers of 2 must it contain?",
          "Take the highest power of each prime, including primes that appear in only one number.",
        ],
        strategy: "Use prime factors",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "number-bounds-p4-q06",
        question:
          "Siti has 84 lychee jellies and 126 mango puddings for a CCA bake sale. She packs all of them into identical boxes, so that every box has the same number of jellies and the same number of puddings, with none left over.\n\nWork out the greatest number of boxes she can make, and the number of mango puddings in each box. Give the number of boxes first.",
        answer: { type: "list", values: [42, 3], ordered: true, display: "42 boxes, 3 puddings in each" },
        traps: [
          { spec: { type: "list", values: [42, 2], ordered: true }, feedback: "42 boxes is right, but 84 ÷ 42 = 2 is the number of *jellies* per box. Puddings: 126 ÷ 42." },
          { spec: { type: "list", values: [252, 1], ordered: true }, feedback: "252 is the LCM. The number of boxes must *divide* both 84 and 126, so you need the HCF." },
        ],
        solution: [
          "The number of boxes must divide 84 and 126 exactly, so find the HCF.",
          "{{84 = 2^2 * 3 * 7}}, {{126 = 2 * 3^2 * 7}}.",
          "HCF = 2 × 3 × 7 = 42 boxes.",
          "Puddings per box = 126 ÷ 42 = 3 (and 84 ÷ 42 = 2 jellies).",
        ],
        commonError: "Using the LCM because the question says 'greatest'. 'Greatest number that divides both' is the HCF.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "The number of boxes must go exactly into both 84 and 126. Is that a factor or a multiple?",
          "Find the HCF of 84 and 126.",
          "Divide 126 by the number of boxes.",
        ],
        strategy: "Use prime factors",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "number-bounds-p4-q07",
        question:
          "The number of people living in a village is 3700, correct to 2 significant figures.\n\nWrite down the least possible number and the greatest possible number of people living in the village. Give the least number first.",
        answer: { type: "list", values: [3650, 3749], ordered: true, display: "3650 and 3749" },
        traps: [
          {
            spec: { type: "list", values: [3650, 3750], ordered: true },
            feedback: "3750 would round to 3800, and a number of people has to be a whole number. The greatest possible number is 3749.",
          },
          { spec: { type: "list", values: [3695, 3705], ordered: true }, feedback: "2 s.f. here means the nearest 100, not the nearest 10. Go 50 either side." },
        ],
        solution: [
          "3700 to 2 s.f. means rounded to the nearest 100, so the bounds are 3650 and 3750.",
          "3650 rounds up to 3700, so 3650 is possible.",
          "People are counted in whole numbers, and 3750 would round to 3800 — so the greatest is 3749.",
        ],
        commonError: "Giving 3750 as the greatest possible number of people — fine for a continuous measurement, wrong for a count.",
        difficulty: "core",
        guideRef: "error-intervals",
        hints: [
          "With 2 significant figures, what place value is 3700 rounded to?",
          "Find the bounds as if it were a measurement.",
          "People come in whole numbers. Is the upper bound itself possible?",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "number-bounds-p4-q08",
        question:
          "A brass block has a mass of 1.36 kg, correct to 3 significant figures. Its volume is 172 cm³, correct to 3 significant figures.\n\nWork out the upper bound for the density of the block. Give your answer in g/cm³, correct to 3 significant figures.",
        answer: { type: "number", value: 7.96, tolerance: 0.005, display: "7.96 g/cm³" },
        traps: [
          { spec: { type: "number", value: 0.00796, tolerance: 0.00001 }, feedback: "Convert the mass to grams first: 1.36 kg = 1360 g, so the bounds are 1355 g and 1365 g." },
          { spec: { type: "number", value: 7.91, tolerance: 0.005 }, feedback: "That's 1365 ÷ 172.5 — upper ÷ upper. For the biggest density, divide by the *smallest* volume, 171.5 cm³." },
          { spec: { type: "number", value: 7.86, tolerance: 0.005 }, feedback: "That's the lower bound (1355 ÷ 172.5). The upper bound is largest mass ÷ smallest volume." },
        ],
        solution: [
          "Mass = 1360 g to 3 s.f., so 1355 ≤ m < 1365 (half of 10 g each side).",
          "Volume: 171.5 ≤ V < 172.5.",
          "Density = mass ÷ volume. Upper bound = 1365 ÷ 171.5 = 7.9591… = 7.96 g/cm³.",
        ],
        commonError: "Forgetting to convert kg to g, or dividing upper bound by upper bound.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "Change 1.36 kg into grams. What is it correct to now?",
          "Write down the bounds of the mass and of the volume.",
          "Upper bound of density = upper bound of mass ÷ lower bound of volume.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "number-bounds-p4-q09",
        question:
          "The radius of a circular pond is 4.6 m, correct to 1 decimal place.\n\nWork out the lower bound for the area of the pond. Give your answer in m², correct to 3 significant figures.",
        answer: { type: "number", value: 65.0, tolerance: 0.05, display: "65.0 m²" },
        traps: [
          { spec: { type: "number", value: 66.5, tolerance: 0.05 }, feedback: "66.5 m² uses r = 4.6. The lower bound of the area uses the lower bound of the radius, 4.55 m." },
          { spec: { type: "number", value: 28.6, tolerance: 0.05 }, feedback: "That's the circumference ({{2 pi r}}). Area = {{pi r^2}}." },
          { spec: { type: "number", value: 67.9, tolerance: 0.05 }, feedback: "That's the upper bound (r = 4.65). For the smallest area, use the smallest radius." },
        ],
        solution: [
          "Lower bound of radius = 4.6 − 0.05 = 4.55 m.",
          "Area = {{pi r^2 = pi * 4.55^2}} = 65.038… m².",
          "= 65.0 m² (3 s.f.).",
        ],
        commonError: "Rounding to 65 and losing the third significant figure (65.0).",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: ["What is the smallest possible radius?", "Square the smallest radius and multiply by π."],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "written",
        id: "number-bounds-p4-q10",
        question:
          "Ravi drives 115 km, correct to the nearest 5 km. The journey takes 1.5 hours, correct to the nearest 0.1 hour.\n\nRavi says, \"My average speed was definitely no more than 80 km/h.\"\n\nShow that Ravi could be wrong.",
        marks: 3,
        modelAnswer:
          "Distance: 112.5 ≤ d < 117.5 km. Time: 1.45 ≤ t < 1.55 hours.\n\nThe greatest possible speed is upper bound of distance ÷ lower bound of time:\n\n    {{117.5/1.45}} = 81.03… km/h\n\n81.03 > 80, so his average speed could have been more than 80 km/h — Ravi could be wrong.",
        markScheme: [
          { point: "Correct bounds: 117.5 km (upper distance) and 1.45 h (lower time)", keywords: ["117.5", "1.45"] },
          { point: "Upper bound of speed = 117.5 ÷ 1.45 = 81.0…", keywords: ["81", "81.0", "81.03", "117.5/1.45", "117.5 ÷ 1.45"] },
          { point: "Conclusion: 81.0 > 80 so the speed could exceed 80 km/h", keywords: ["> 80", "greater than 80", "more than 80", "could be", "wrong"] },
        ],
        commonError: "Working out 115 ÷ 1.5 = 76.7 km/h and concluding Ravi is right — the question is about the extreme case.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "To prove Ravi *could* be wrong you need the greatest possible speed.",
          "Half of 5 km is 2.5 km; half of 0.1 h is 0.05 h.",
          "Greatest speed = greatest distance ÷ smallest time. Compare it with 80.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "number-bounds-p4-q11",
        question:
          "A car registration plate is made of 2 letters followed by 3 digits, for example SG 507.\n\n- Each letter can be any of the 26 letters A to Z (letters may repeat).\n- The first digit cannot be 0. Digits may repeat.\n\nWork out the number of different registration plates that are possible.",
        answer: { type: "number", value: 608400, display: "608 400" },
        traps: [
          { spec: { type: "number", value: 676000 }, feedback: "676 000 lets the first digit be 0. The first digit has only 9 choices (1–9)." },
          { spec: { type: "number", value: 140 }, feedback: "You've added the choices. For successive choices, multiply them (the product rule)." },
          { spec: { type: "number", value: 585000 }, feedback: "Letters can repeat, so the second letter still has 26 choices, not 25." },
        ],
        solution: [
          "Letters: 26 × 26 = 676 choices.",
          "Digits: 9 × 10 × 10 = 900 choices.",
          "Total = 676 × 900 = 608 400.",
        ],
        commonError: "Adding the numbers of choices instead of multiplying.",
        difficulty: "core",
        guideRef: "number-problems",
        hints: ["How many choices are there for each of the 5 positions?", "Multiply the numbers of choices together."],
        strategy: "Product rule",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "number-bounds-p4-q12",
        question:
          "The four-digit number 7a2b, where a and b are digits, is divisible by 45.\n\nFind all the possible four-digit numbers. List them all.",
        answer: { type: "list", values: [7020, 7425, 7920], ordered: false, display: "7020, 7425, 7920" },
        traps: [
          { spec: { type: "list", values: [7425], ordered: false }, feedback: "7425 works, but b can also be 0. With b = 0 there are two possible values of a." },
          { spec: { type: "list", values: [7020, 7920], ordered: false }, feedback: "Those work, but don't forget b = 5: then 7 + a + 2 + 5 must be a multiple of 9." },
        ],
        solution: [
          "45 = 9 × 5, and 9 and 5 share no factor, so the number must be divisible by both 9 and 5.",
          "Divisible by 5 ⇒ b = 0 or b = 5.",
          "Divisible by 9 ⇒ digit sum 7 + a + 2 + b is a multiple of 9.",
          "b = 0: 9 + a is a multiple of 9 ⇒ a = 0 or 9 ⇒ 7020, 7920.",
          "b = 5: 14 + a is a multiple of 9 ⇒ a = 4 ⇒ 7425.",
          "Check: 7020 = 45 × 156, 7425 = 45 × 165, 7920 = 45 × 176 ✓.",
        ],
        commonError: "Splitting 45 as 3 × 15 (they share a factor 3, so that test isn't enough), or missing a = 0.",
        difficulty: "core",
        guideRef: "number-problems",
        hints: [
          "Split 45 into two co-prime factors whose divisibility tests you know.",
          "What must the last digit be for divisibility by 5?",
          "For each value of b, use the digit-sum test for 9 to find a.",
        ],
        strategy: "Split into cases",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "number-bounds-p4-q13",
        question:
          "A rectangular field measures 120 m by 85 m. Both measurements are correct to the nearest 5 m.\n\nOne bag of fertiliser covers 250 m² of field, correct to the nearest 10 m².\n\nMei says, \"42 bags will definitely be enough to cover the whole field.\"\n\nIs Mei correct? You must show all your working.",
        marks: 4,
        modelAnswer:
          "Length: 117.5 ≤ l < 122.5; width: 82.5 ≤ w < 87.5; coverage per bag: 245 ≤ c < 255.\n\nThe most bags could be needed when the field is as large as possible and each bag covers as little as possible.\n\n    Upper bound of area = 122.5 × 87.5 = 10 718.75 m²\n    Greatest number of bags = 10 718.75 ÷ 245 = 43.75\n\nSo up to 44 bags might be needed. Mei is **not** correct: 42 bags might not be enough.",
        markScheme: [
          { point: "Uses upper bounds of length and width, 122.5 and 87.5", keywords: ["122.5", "87.5"] },
          { point: "Upper bound of area = 10 718.75 m²", keywords: ["10718.75", "10 718.75", "10718"] },
          { point: "Divides by the lower bound of the coverage, 245, to get 43.75", keywords: ["245", "43.75", "43.7"] },
          { point: "Conclusion: 44 bags may be needed, so Mei is not correct", keywords: ["44", "not correct", "not enough", "wrong", "incorrect", "no"] },
        ],
        commonError: "Using 120 × 85 ÷ 250 = 40.8 and saying 42 bags is plenty, or dividing by the upper bound 255 of the coverage.",
        difficulty: "challenge",
        guideRef: "bounds-calculations",
        hints: [
          "When would the most bags be needed? Think about the size of the field and how much each bag covers.",
          "Largest field: use the upper bound of each side. Weakest bag: use the lower bound of the coverage.",
          "Greatest number of bags = upper bound of area ÷ lower bound of coverage. Compare with 42.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "written",
        id: "number-bounds-p4-q14",
        question:
          "A ball is dropped from a height of h metres. The time, t seconds, it takes to reach the ground is given by\n\n{{t = sqrt((2h)/g)}}\n\nh = 45.0 correct to 3 significant figures, and g = 9.81 correct to 3 significant figures.\n\nWork out the value of t to a suitable degree of accuracy. You must show all your working and give a reason for your answer.",
        marks: 4,
        modelAnswer:
          "Bounds: 44.95 ≤ h < 45.05 and 9.805 ≤ g < 9.815.\n\nt is largest when h is largest and g is smallest:\n\n    Upper bound of t = {{sqrt((2 * 45.05)/9.805)}} = 3.0313… s\n\nt is smallest when h is smallest and g is largest:\n\n    Lower bound of t = {{sqrt((2 * 44.95)/9.815)}} = 3.0264… s\n\nTo 3 s.f. both bounds are 3.03 (to 4 s.f. they are 3.031 and 3.026, which differ).\n\nSo **t = 3.03 seconds** to 3 significant figures, because the upper and lower bounds both round to 3.03.",
        markScheme: [
          { point: "Correct bounds of h (44.95, 45.05) and g (9.805, 9.815)", keywords: ["44.95", "45.05", "9.805", "9.815"] },
          { point: "Upper bound of t using largest h and smallest g: 3.031…", keywords: ["3.031", "3.0313", "45.05", "9.805"] },
          { point: "Lower bound of t using smallest h and largest g: 3.026…", keywords: ["3.026", "3.0264", "44.95", "9.815"] },
          { point: "Answer 3.03 s with reason: both bounds round to 3.03 to 3 s.f.", keywords: ["3.03", "both round", "3 s.f", "3 significant figures", "agree"] },
        ],
        commonError: "Pairing upper h with upper g. Since g is in the denominator, the largest t comes from the smallest g.",
        difficulty: "challenge",
        guideRef: "bounds-calculations",
        hints: [
          "Write down the bounds of h and g — each is correct to 3 s.f.",
          "g is in the denominator. Does a bigger g make t bigger or smaller?",
          "Work out both bounds of t, then round them to 4 s.f., 3 s.f., … until they agree.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "number-bounds-p4-q15",
        question:
          "ABC is a right-angled triangle with the right angle at B.\n\nAC = 12.4 cm, correct to 1 decimal place.\nBC = 7.6 cm, correct to 1 decimal place.\n\nWork out the lower bound for the size of angle BAC. Give your answer in degrees, correct to 1 decimal place.",
        diagram: `<svg viewBox="0 0 380 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at B, hypotenuse AC 12.4 cm and side BC 7.6 cm opposite angle A"><rect width="380" height="290" fill="#ffffff"/><polygon points="60,250 320,250 320,48" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><polyline points="305,250 305,235 320,235" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 100 250 A 40 40 0 0 0 91.6 225.5" fill="none" stroke="#334155" stroke-width="1.5"/><text x="48" y="266" font-size="14" font-family="sans-serif" fill="#1f2937">A</text><text x="326" y="266" font-size="14" font-family="sans-serif" fill="#1f2937">B</text><text x="326" y="46" font-size="14" font-family="sans-serif" fill="#1f2937">C</text><text x="106" y="240" font-size="13" font-family="sans-serif" fill="#1f2937">x</text><text x="330" y="154" font-size="13" font-family="sans-serif" fill="#1f2937">7.6 cm</text><text x="150" y="135" font-size="13" font-family="sans-serif" fill="#1f2937">12.4 cm</text></svg>`,
        answer: { type: "number", value: 37.3, tolerance: 0.05, display: "37.3°" },
        traps: [
          { spec: { type: "number", value: 37.8, tolerance: 0.05 }, feedback: "37.8° uses the measured lengths. For the lower bound you need the smallest possible value of {{BC/AC}}." },
          { spec: { type: "number", value: 37.7, tolerance: 0.05 }, feedback: "That pairs lower with lower (7.55 ÷ 12.35). To make {{sin x}} smallest, divide the smallest BC by the *largest* AC." },
          { spec: { type: "number", value: 38.3, tolerance: 0.05 }, feedback: "That's the upper bound (7.65 ÷ 12.35). The lower bound uses 7.55 ÷ 12.45." },
        ],
        solution: [
          "{{sin x = BC/AC}} (opposite over hypotenuse).",
          "x is smallest when {{sin x}} is smallest: smallest BC ÷ largest AC.",
          "{{sin x = 7.55/12.45}} = 0.60642…",
          "x = {{sin^(-1)}}(0.60642…) = 37.33…° = 37.3° (1 d.p.).",
        ],
        commonError: "Using lower bound ÷ lower bound, giving 37.7°.",
        difficulty: "challenge",
        guideRef: "bounds-calculations",
        hints: [
          "Which trig ratio links BC, AC and angle x?",
          "As {{sin x}} gets bigger (for acute angles), does x get bigger or smaller?",
          "To make {{BC/AC}} as small as possible, use the lower bound of BC and the upper bound of AC.",
        ],
        strategy: "Consider extremes",
      },
    ],
  },
];
