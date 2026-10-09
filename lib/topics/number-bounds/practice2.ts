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
          "{{n = 2^2 * 3^4 * 7^2}}.\n\nWithout working out n, find the value of {{sqrt(n)}}.",
        answer: { type: "number", value: 126, display: "126" },
        traps: [
          { spec: { type: "number", value: 15876 }, feedback: "15 876 is n itself. Square-rooting halves every power: {{sqrt(2^2 * 3^4 * 7^2) = 2^1 * 3^2 * 7^1}}." },
          { spec: { type: "number", value: 378 }, feedback: "You've left the 3 as {{3^3}} or similar. Halving the power 4 gives {{3^2 = 9}}, so {{sqrt(n) = 2 * 9 * 7}}." },
        ],
        solution: [
          "A square root halves every power in the prime factorisation (because {{(2 * 3^2 * 7)^2 = 2^2 * 3^4 * 7^2}}).",
          "{{sqrt(n) = 2^1 * 3^2 * 7^1}}.",
          "= 2 × 9 × 7 = 126.",
        ],
        commonError: "Square-rooting the bases instead of halving the powers.",
        difficulty: "warmup",
        guideRef: "prime-factors-hcf-lcm",
        hints: ["Every power in n is even. What does that tell you about n?", "Halve each power to get {{sqrt(n)}} in index form, then multiply out."],
        strategy: "Use prime factors",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "number-bounds-p3-q02",
        question: "Round 0.99962 to 3 significant figures.",
        answer: { type: "number", value: 1, allowFraction: false, display: "1.00" },
        traps: [
          { spec: { type: "number", value: 0.999 }, feedback: "Look at the 4th significant figure: 0.999**6**2. A 6 means round up — and rounding 0.999 up carries all the way to 1.00." },
          { spec: { type: "number", value: 0.9996 }, feedback: "That's 4 significant figures. Keep only three: 9, 9, 9 — then decide whether to round up." },
        ],
        solution: [
          "The first significant figure is the first 9 (the leading zero doesn't count).",
          "To 3 s.f. you keep 0.999 and look at the next digit, 6.",
          "6 ≥ 5, so round up: 0.999 + 0.001 = 1.000, which is written 1.00 to 3 s.f.",
        ],
        commonError: "Writing 0.999 (not rounding up), or writing 1 without the zeros that show 3 s.f.",
        difficulty: "warmup",
        guideRef: "rounding-estimation",
        hints: ["Which digit is the first significant figure?", "Look at the digit after the third significant figure. What happens when you add 1 to the last 9?"],
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
          "Find (i) the highest common factor (HCF) and (ii) the lowest common multiple (LCM) of 168 and 180.\n\nGive the HCF first.",
        answer: { type: "list", values: [12, 2520], ordered: true, display: "HCF = 12, LCM = 2520" },
        traps: [
          { spec: { type: "list", values: [2520, 12], ordered: true }, feedback: "Right numbers, wrong order — the HCF is the smaller one and should come first." },
          {
            spec: { type: "list", values: [12, 30240], ordered: true },
            feedback: "30 240 is 168 × 180, a common multiple but not the *lowest*. Divide by the HCF: 30 240 ÷ 12 = 2520.",
          },
        ],
        solution: [
          "{{168 = 2^3 * 3 * 7}} and {{180 = 2^2 * 3^2 * 5}}.",
          "HCF: take the lower power of each shared prime: {{2^2 * 3 = 12}}.",
          "LCM: take the higher power of every prime that appears: {{2^3 * 3^2 * 5 * 7 = 2520}}.",
        ],
        solutions: [
          {
            label: "HCF × LCM = product",
            steps: ["Once you have the HCF, use HCF × LCM = 168 × 180.", "LCM = 168 × 180 ÷ 12 = 14 × 180 = 2520."],
          },
        ],
        commonError: "For the LCM, leaving out a prime that appears in only one number (the 5 or the 7).",
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
          "Three lights on a Marina Bay light show flash at regular intervals:\n\n- the red light every 16 seconds,\n- the green light every 24 seconds,\n- the blue light every 40 seconds.\n\nAll three flash together at exactly 20:00. How many more times will all three flash together, up to and including 21:00?",
        answer: { type: "number", value: 15, display: "15 times" },
        traps: [
          { spec: { type: "number", value: 75 }, feedback: "75 comes from 48 s, the LCM of 16 and 24 only. The blue light (every 40 s) must flash too — include all three numbers." },
          { spec: { type: "number", value: 16 }, feedback: "Close — but the question says *more* times after 20:00, so don't count the flash at 20:00 itself." },
        ],
        solution: [
          "They flash together at common multiples of 16, 24 and 40 seconds, so find the LCM.",
          "{{16 = 2^4}}, {{24 = 2^3 * 3}}, {{40 = 2^3 * 5}}.",
          "LCM = {{2^4 * 3 * 5 = 240}} seconds = 4 minutes.",
          "In 60 minutes after 20:00 they flash together 60 ÷ 4 = 15 more times (20:04, 20:08, …, 21:00).",
        ],
        commonError: "Using the HCF, or finding the LCM of only two of the three numbers.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "Are the times they flash together common factors or common multiples of 15, 20 and 36?",
          "Write each number as a product of primes and take the highest power of each prime.",
          "Convert the LCM into minutes. How many of those fit into one hour?",
        ],
        strategy: "Use prime factors",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "number-bounds-p3-q07",
        question:
          "Kenji says he is 15 years old. Ages are always **truncated** to a whole number of years (you don't say you are 16 until your birthday).\n\nWrite down the error interval for Kenji's exact age, A years. Use A and the inequality signs < and ≤ (you may type <= for ≤).",
        answer: { type: "inequality", ineq: "15<=A<16", display: "15 ≤ A < 16" },
        traps: [
          {
            spec: { type: "inequality", ineq: "14.5<=A<15.5" },
            feedback: "That's the error interval for *rounding*. Ages are truncated: someone aged 15 years 11 months still says 15, so A can be anything from 15 up to (not including) 16.",
          },
        ],
        solution: [
          "Truncating removes everything after the decimal point — it never rounds up.",
          "The smallest age that gives 15 is exactly 15 (included).",
          "Every age up to, but not including, 16 also gives 15. So 15 ≤ A < 16.",
        ],
        commonError: "Treating truncation like rounding and going half a unit each way.",
        difficulty: "core",
        guideRef: "error-intervals",
        hints: ["If Kenji is 15.9 years old, what age does he say?", "Truncation never rounds up — so 15 is the *lowest* possible value.", "At what exact age would he start saying 16?"],
        strategy: "Try small cases",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "number-bounds-p3-q08",
        question:
          "A cube-shaped storage box has edges of length 6.2 cm, correct to 1 decimal place.\n\nWork out the lower bound for the volume of the box. Give your answer in cm³, correct to 3 significant figures.",
        answer: { type: "number", value: 233, tolerance: 0.5, display: "233 cm³ (232.608…)" },
        traps: [
          { spec: { type: "number", value: 238, tolerance: 0.5 }, feedback: "238 cm³ uses the measured edge, 6.2 cm. The lower bound uses the smallest possible edge, 6.15 cm." },
          { spec: { type: "number", value: 244, tolerance: 0.5 }, feedback: "That's the *upper* bound (6.25³). For the smallest volume, use the smallest edge." },
        ],
        solution: [
          "Lower bound of the edge = 6.2 − 0.05 = 6.15 cm.",
          "Lower bound of the volume = {{6.15^3}} = 232.608… cm³.",
          "= 233 cm³ (3 s.f.).",
        ],
        commonError: "Working out 6.2³ and then adjusting the answer, instead of using the bound of the edge.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: ["What is the smallest edge length that rounds to 6.2 cm?", "Cube that smallest edge length."],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "number-bounds-p3-q09",
        question:
          "The distance between two MRT stations is 2.4 km, correct to 1 decimal place. A train travels between them at an average speed of 60 km/h, correct to the nearest 5 km/h.\n\nWork out the upper bound for the time the journey takes. Give your answer in **minutes**, correct to 3 significant figures.",
        answer: { type: "number", value: 2.56, tolerance: 0.005, display: "2.56 minutes" },
        traps: [
          {
            spec: { type: "number", value: 2.35, tolerance: 0.005 },
            feedback: "That's 2.45 ÷ 62.5 — upper ÷ upper. A *faster* train takes less time, so for the longest time divide by the *lowest* speed, 57.5 km/h.",
          },
          { spec: { type: "number", value: 0.0426, tolerance: 0.00005 }, feedback: "That's the time in hours. Multiply by 60 to get minutes." },
          { spec: { type: "number", value: 2.4, tolerance: 0.005 }, feedback: "2.4 minutes uses the measured values. You need the upper bound: 2.45 km ÷ 57.5 km/h." },
        ],
        solution: [
          "Distance bounds: 2.35 km to 2.45 km. Speed bounds: 57.5 km/h to 62.5 km/h.",
          "Time = distance ÷ speed. Longest time: greatest distance ÷ smallest speed.",
          "{{2.45/57.5}} = 0.042608… hours.",
          "× 60 = 2.5565… = 2.56 minutes (3 s.f.).",
        ],
        commonError: "Pairing upper with upper in a division, or forgetting to convert hours to minutes.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "Write down the bounds for the distance and for the speed. Half of 5 km/h is 2.5 km/h.",
          "Does a higher speed make the time longer or shorter?",
          "Upper bound of time = upper bound of distance ÷ lower bound of speed. Then convert hours to minutes.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "written",
        id: "number-bounds-p3-q10",
        question:
          "Hana says, \"If a whole number is divisible by 4 and divisible by 6, then it must be divisible by 4 × 6 = 24.\"\n\n(a) Give an example to show that Hana is wrong.\n\n(b) Explain why her reasoning fails, and state the largest number that such a number must always be divisible by.",
        marks: 3,
        modelAnswer:
          "(a) 12 is divisible by 4 and by 6, but 12 is not divisible by 24. (36 also works: 36 ÷ 24 = 1.5.)\n\n(b) 4 = 2² and 6 = 2 × 3 share a common factor of 2, so multiplying 4 by 6 counts that factor of 2 twice. A number divisible by both only has to contain the prime factors of the **LCM**, {{2^2 * 3 = 12}}. So the number must be divisible by **12**, but not necessarily by 24.",
        markScheme: [
          { point: "A correct counterexample, e.g. 12, 36, 60 or 84, with a check that it isn't divisible by 24", keywords: ["12", "36", "60", "84", "not divisible by 24"] },
          { point: "Explains that 4 and 6 share a common factor (2), so 4 × 6 double-counts it", keywords: ["common factor", "share", "factor of 2", "both even", "double"] },
          { point: "States the number must be divisible by the LCM, 12", keywords: ["lcm", "12", "lowest common multiple"] },
        ],
        commonError: "Testing only numbers like 24 or 48, which happen to work, and concluding Hana is right.",
        difficulty: "core",
        guideRef: "number-problems",
        hints: [
          "List the first few numbers that are divisible by both 4 and 6. Are they all multiples of 24?",
          "Write 4 and 6 as products of primes. What do they have in common?",
          "Being divisible by both means being a multiple of their lowest common multiple.",
        ],
        strategy: "Find a counterexample",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "written",
        id: "number-bounds-p3-q11",
        question:
          "A water tank holds 85 litres of water, correct to the nearest litre. Jun pours out 23.6 litres, correct to 1 decimal place.\n\nEthan works out the greatest possible amount of water left in the tank:\n\n    Greatest amount left = 85.5 − 23.65 = 61.85 litres\n\nEthan is wrong. Explain the mistake he has made and work out the correct greatest amount.",
        marks: 3,
        modelAnswer:
          "Ethan has subtracted the **upper** bound of the amount poured out. To make a difference as large as possible you take the largest first value and subtract the **smallest** second value.\n\nThe bounds of the amount poured out are 23.55 and 23.65 litres, so\n\n    Greatest amount left = 85.5 − 23.55 = 61.95 litres.",
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
          "How many **odd** three-digit numbers (100 to 999) have three different digits?",
        answer: { type: "number", value: 320, display: "320" },
        traps: [
          { spec: { type: "number", value: 360 }, feedback: "360 = 9 × 8 × 5 fills the first digit first and then gives the last digit all 5 odd choices — but one of those odd digits may already be used. Choose the last (most restricted) digit first." },
          { spec: { type: "number", value: 60 }, feedback: "60 = 5 × 4 × 3 counts numbers whose digits are *all* odd. Only the last digit has to be odd." },
          { spec: { type: "number", value: 450 }, feedback: "450 allows repeated digits (9 × 10 × 5). Each digit must be different." },
        ],
        solution: [
          "Fill the most restricted place first. Last digit (odd): 1, 3, 5, 7 or 9 — 5 choices.",
          "First digit: not 0 and not the last digit — 10 − 2 = 8 choices.",
          "Middle digit: any of the 10 digits except the two already used — 8 choices.",
          "Total = 5 × 8 × 8 = 320.",
        ],
        commonError: "Filling the places left to right, which makes the count for the last digit depend on earlier choices.",
        difficulty: "core",
        guideRef: "number-problems",
        hints: [
          "Which digit has the strongest restriction? Start there.",
          "After choosing an odd last digit, how many choices are left for the first digit (remember it can't be 0)?",
          "Multiply the numbers of choices for the three places (the product rule).",
        ],
        strategy: "Deal with restrictions first",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "number-bounds-p3-q13",
        question:
          "A rectangular patio has an area of 63.4 m², correct to 1 decimal place. Its length is 12.6 m, correct to 1 decimal place.\n\nWork out the width of the patio **to a suitable degree of accuracy**. You must show all your working and give a reason for your final answer.",
        marks: 4,
        modelAnswer:
          "Area: 63.35 ≤ A < 63.45. Length: 12.55 ≤ l < 12.65.\n\nWidth = area ÷ length.\n\nUpper bound of width = {{63.45/12.55}} = 5.0557… m.\n\nLower bound of width = {{63.35/12.65}} = 5.0079… m.\n\nTo 2 s.f. these are 5.1 and 5.0 — they don't agree. To 1 s.f. they are both 5.\n\nSo the width is **5 m** to a suitable degree of accuracy, because both bounds round to 5 to 1 significant figure.",
        markScheme: [
          { point: "Correct bounds used: 63.35, 63.45, 12.55, 12.65", keywords: ["63.35", "63.45", "12.55", "12.65"] },
          { point: "Upper bound of width = 63.45 ÷ 12.55 = 5.055… (largest ÷ smallest)", keywords: ["5.05", "5.06", "63.45/12.55", "63.45 ÷ 12.55"] },
          { point: "Lower bound of width = 63.35 ÷ 12.65 = 5.007… (smallest ÷ largest)", keywords: ["5.00", "5.01", "63.35/12.65", "63.35 ÷ 12.65"] },
          { point: "Answer 5 m with reason: both bounds round to 5 to 1 s.f. (they differ at 2 s.f.)", keywords: ["5 m", "1 s.f", "1 significant figure", "both round", "agree"] },
        ],
        commonError: "Giving 5.0 m: the upper bound 5.0557… rounds to 5.1 to 2 s.f., so 2 s.f. is not justified.",
        difficulty: "challenge",
        guideRef: "bounds-calculations",
        hints: [
          "Width = area ÷ length. Find the upper and lower bounds of the width first.",
          "Upper bound of a quotient = upper ÷ lower; lower bound = lower ÷ upper.",
          "Round both bounds to 3 s.f., then 2 s.f., then 1 s.f. Stop at the first accuracy where they agree.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "number-bounds-p3-q14",
        question:
          "{{N = 2^a * 3^b}}, where a and b are positive integers.\n\nN has exactly 12 factors (including 1 and N), and N is a multiple of 18.\n\nFind the smallest possible value of N.",
        answer: { type: "number", value: 72, display: "72  (= 2³ × 3²)" },
        traps: [
          { spec: { type: "number", value: 108 }, feedback: "108 = {{2^2 * 3^3}} works, but there's a smaller one. Try putting the bigger power on the smaller prime, 2." },
          { spec: { type: "number", value: 96 }, feedback: "96 = {{2^5 * 3}} has 12 factors but isn't a multiple of 18 — it needs at least {{3^2}}." },
          { spec: { type: "number", value: 36 }, feedback: "36 = {{2^2 * 3^2}} has (2 + 1)(2 + 1) = 9 factors, not 12." },
        ],
        solution: [
          "A factor of {{2^a * 3^b}} is {{2^i * 3^j}} with 0 ≤ i ≤ a and 0 ≤ j ≤ b, so there are (a + 1)(b + 1) factors.",
          "(a + 1)(b + 1) = 12 with a, b ≥ 1: (a, b) = (1, 5), (2, 3), (3, 2) or (5, 1).",
          "Multiple of 18 = {{2 * 3^2}} needs b ≥ 2, ruling out (5, 1).",
          "Candidates: {{2 * 3^5 = 486}}, {{2^2 * 3^3 = 108}}, {{2^3 * 3^2 = 72}}. Smallest is 72.",
        ],
        commonError: "Thinking the number of factors is a × b (or a + b) instead of (a + 1)(b + 1).",
        difficulty: "challenge",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "How many factors does {{2^3}} have? {{2^3 * 3}}? Spot the rule.",
          "Each factor is {{2^i * 3^j}}: there are a + 1 choices for i and b + 1 choices for j.",
          "Solve (a + 1)(b + 1) = 12, keep the pairs that make N a multiple of {{2 * 3^2}}, then compare.",
        ],
        strategy: "Split into cases",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "number-bounds-p3-q15",
        question:
          "x = 3.0, correct to 2 significant figures.\n\n{{y = x^2 - 6x + 10}}\n\nWork out the lower bound for y. Give your answer exactly.",
        answer: { type: "number", value: 1, display: "1" },
        traps: [
          {
            spec: { type: "number", value: 1.0025, tolerance: 0.00001 },
            feedback: "You've tried the two ends, x = 2.95 and x = 3.05. But y isn't increasing or decreasing on this interval — it has a minimum *inside* it. Complete the square.",
          },
          { spec: { type: "number", value: 0.9975, tolerance: 0.00001 }, feedback: "Check your substitution: {{2.95^2 - 6 * 2.95 + 10}} = 1.0025, not below 1. Then think about where the minimum of the curve is." },
        ],
        solution: [
          "x lies in the interval 2.95 ≤ x < 3.05.",
          "Complete the square: {{y = (x - 3)^2 + 1}}.",
          "{{(x - 3)^2 >= 0}}, with equality at x = 3, which is inside the interval.",
          "So the lowest possible value is y = 0 + 1 = 1 (at x = 3). The ends both give 1.0025, which is the upper bound.",
        ],
        solutions: [
          {
            label: "Sketch the curve",
            steps: [
              "{{y = x^2 - 6x + 10}} is a U-shaped parabola with its turning point at x = 3 (by symmetry: roots of {{x^2 - 6x}} are 0 and 6).",
              "The interval 2.95 to 3.05 straddles the turning point, so the minimum value of y is the turning-point value, {{9 - 18 + 10 = 1}}.",
            ],
          },
        ],
        commonError: "Assuming the extremes of y always occur at the ends of the interval for x.",
        difficulty: "challenge",
        guideRef: "bounds-calculations",
        hints: [
          "Find the bounds for x. Then try x = 2.95, 3 and 3.05 in y. Anything surprising?",
          "y is not always increasing. Where is its smallest value?",
          "Complete the square: {{x^2 - 6x + 10 = (x - 3)^2 + ...}}",
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
          "Use your calculator to work out the value of\n\n{{(3.7^3 - sqrt(52.9))/(2.6 + 1.85^2)}}\n\nGive your answer correct to 3 significant figures.",
        answer: { type: "number", value: 7.2, tolerance: 0.005, display: "7.20 (7.2029491…)" },
        traps: [
          {
            spec: { type: "number", value: 49.4, tolerance: 0.05 },
            feedback: "It looks as if only {{sqrt(52.9)}} was divided by the denominator. Put brackets round the whole numerator: {{(3.7^3 - sqrt(52.9))}}.",
          },
          {
            spec: { type: "number", value: 20.1, tolerance: 0.05 },
            feedback: "You divided by 2.6 and then added {{1.85^2}}. The whole denominator needs brackets: divide by (2.6 + 3.4225).",
          },
        ],
        solution: [
          "Numerator: {{3.7^3}} = 50.653 and {{sqrt(52.9)}} = 7.2732…, so 50.653 − 7.2732… = 43.3797…",
          "Denominator: 2.6 + {{1.85^2}} = 2.6 + 3.4225 = 6.0225.",
          "43.3797… ÷ 6.0225 = 7.2029491… = 7.20 (3 s.f.).",
        ],
        commonError: "Typing it in without brackets so the calculator divides only part of the numerator, or writing 7.2 (only 2 s.f.).",
        difficulty: "warmup",
        guideRef: "rounding-estimation",
        hints: ["Work out the top and the bottom separately (or use brackets / the fraction key).", "Write down the full display, then round — keep the zero in 7.20."],
        strategy: "Use brackets",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "number-bounds-p4-q03",
        question:
          "Priya swims 50 m in a time of T seconds. T = 38, correct to the nearest second.\n\nComplete the error interval for T. Write it in the form a ≤ T < b (you may type <= for ≤).",
        answer: { type: "text", accept: ["37.5<=T<38.5", "37.5≤T<38.5", "T>=37.5 and T<38.5", "37.5s<=T<38.5s"], display: "37.5 ≤ T < 38.5" },
        traps: [
          { spec: { type: "text", accept: ["37.5<=T<=38.5", "37.5≤T≤38.5", "37.5<=T<=38.4", "37.5≤T≤38.4", "37.5<=T<=38.49", "37.5≤T≤38.49"] }, feedback: "38.5 rounds up to 39, so it can't be included — but every value just below it can. The upper end is strict: T < 38.5." },
          { spec: { type: "text", accept: ["37<=T<39", "37≤T<39"] }, feedback: "Go only half a second each side of 38, not a whole one." },
        ],
        solution: [
          "Half of 1 second is 0.5 seconds.",
          "Lower bound = 37.5 (included: 37.5 rounds up to 38).",
          "Upper bound = 38.5 (excluded: 38.5 rounds up to 39).",
          "37.5 ≤ T < 38.5.",
        ],
        difficulty: "warmup",
        guideRef: "error-intervals",
        hints: ["What is half of the unit you rounded to?", "Which end is included: does 38.5 round to 38 or 39?"],
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
          "Find the lowest common multiple (LCM) of 24, 40 and 54.",
        answer: { type: "number", value: 1080, display: "1080  (= 2³ × 3³ × 5)" },
        traps: [
          { spec: { type: "number", value: 2 }, feedback: "2 is the HCF. The LCM takes the *highest* power of every prime in any of the numbers." },
          { spec: { type: "number", value: 51840 }, feedback: "51 840 is 24 × 40 × 54. That's a common multiple, but far from the lowest." },
          { spec: { type: "number", value: 120 }, feedback: "120 is the LCM of 24 and 40 only — 54 doesn't divide it. Include {{3^3}} from 54." },
        ],
        solution: [
          "{{24 = 2^3 * 3}}, {{40 = 2^3 * 5}}, {{54 = 2 * 3^3}}.",
          "Highest power of each prime: {{2^3}}, {{3^3}}, {{5^1}}.",
          "LCM = {{2^3 * 3^3 * 5}} = 8 × 27 × 5 = 1080.",
        ],
        commonError: "Taking the lowest powers (that gives the HCF) or forgetting a prime that appears in only one number.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "Write each number as a product of prime factors.",
          "The LCM must contain each number's prime factors. For each prime, which power do you need?",
          "Take the highest power of each prime, including primes that appear in only one number.",
        ],
        strategy: "Use prime factors",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "number-bounds-p4-q06",
        question:
          "Siti has 90 lychee jellies and 144 mango puddings for a CCA bake sale. She packs all of them into identical boxes, so that every box has the same number of jellies and the same number of puddings, with none left over.\n\nWork out the greatest number of boxes she can make, and the number of mango puddings in each box. Give the number of boxes first.",
        answer: { type: "list", values: [18, 8], ordered: true, display: "18 boxes, 8 puddings in each" },
        traps: [
          { spec: { type: "list", values: [18, 5], ordered: true }, feedback: "18 boxes is right, but 90 ÷ 18 = 5 is the number of *jellies* per box. Puddings: 144 ÷ 18." },
          { spec: { type: "list", values: [9, 16], ordered: true }, feedback: "9 boxes works, but it isn't the greatest. 9 is a common factor; the *highest* common factor of 90 and 144 is 18." },
        ],
        solution: [
          "The number of boxes must divide 90 and 144 exactly, so find the HCF.",
          "{{90 = 2 * 3^2 * 5}}, {{144 = 2^4 * 3^2}}.",
          "HCF = {{2 * 3^2}} = 18 boxes.",
          "Puddings per box = 144 ÷ 18 = 8 (and 90 ÷ 18 = 5 jellies).",
        ],
        commonError: "Using the LCM because the question says 'greatest'. 'Greatest number that divides both' is the HCF.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "The number of boxes must go exactly into both 90 and 144. Is that a factor or a multiple?",
          "Find the HCF of 90 and 144.",
          "Divide 144 by the number of boxes.",
        ],
        strategy: "Use prime factors",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "number-bounds-p4-q07",
        question:
          "The number of students at a school is 1400, correct to the nearest 50.\n\nWrite down the least possible number and the greatest possible number of students. Give the least number first.",
        answer: { type: "list", values: [1375, 1424], ordered: true, display: "1375 and 1424" },
        traps: [
          {
            spec: { type: "list", values: [1375, 1425], ordered: true },
            feedback: "1425 would round to 1450 (it's exactly halfway, and halves round up). Students are counted in whole numbers, so the greatest is 1424.",
          },
          { spec: { type: "list", values: [1350, 1450], ordered: true }, feedback: "You've gone a whole 50 each way. The bounds are half of 50 = 25 either side of 1400." },
        ],
        solution: [
          "Correct to the nearest 50 means the error is at most half of 50 = 25.",
          "Lower bound = 1400 − 25 = 1375, and 1375 rounds up to 1400, so 1375 is possible.",
          "Upper bound = 1425, but 1425 rounds to 1450. Students are whole numbers, so the greatest is 1424.",
        ],
        commonError: "Giving 1425 as the greatest possible number of students — fine for a continuous measurement, wrong for a count.",
        difficulty: "core",
        guideRef: "error-intervals",
        hints: [
          "What is half of 50?",
          "Find the bounds as if it were a measurement.",
          "Students come in whole numbers. Is the upper bound itself possible?",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "number-bounds-p4-q08",
        question:
          "Kenji's car travels 415 km, correct to the nearest 5 km, using 32 litres of petrol, correct to the nearest litre.\n\nWork out the upper bound for the car's fuel efficiency in kilometres per litre. Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 13.3, tolerance: 0.05, display: "13.3 km per litre" },
        traps: [
          { spec: { type: "number", value: 12.8, tolerance: 0.05 }, feedback: "That's 417.5 ÷ 32.5 — upper ÷ upper. For the best efficiency, the most distance comes from the *least* fuel, 31.5 litres." },
          { spec: { type: "number", value: 13.0, tolerance: 0.05 }, feedback: "13.0 is 415 ÷ 32 using the measured values. You need the upper bound: 417.5 ÷ 31.5." },
          { spec: { type: "number", value: 0.0754, tolerance: 0.0001 }, feedback: "That's litres per kilometre. Efficiency in km per litre is distance ÷ fuel." },
        ],
        solution: [
          "Distance: 412.5 ≤ d < 417.5 km. Fuel: 31.5 ≤ f < 32.5 litres.",
          "Efficiency = distance ÷ fuel. Upper bound = greatest distance ÷ least fuel.",
          "{{417.5/31.5}} = 13.2539… = 13.3 km per litre (3 s.f.).",
        ],
        commonError: "Dividing upper bound by upper bound.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "Write down the bounds of the distance and of the fuel used.",
          "Efficiency = km ÷ litres. Does using more fuel make the efficiency higher or lower?",
          "Upper bound = upper bound of distance ÷ lower bound of fuel.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "number-bounds-p4-q09",
        question:
          "A spherical ball has a radius of 3.2 cm, correct to 1 decimal place.\n\nWork out the upper bound for the volume of the ball. Give your answer in cm³, correct to 3 significant figures.\n\n(Volume of a sphere = {{4/3 pi r^3}}.)",
        answer: { type: "number", value: 144, tolerance: 0.5, display: "144 cm³ (143.79…)" },
        traps: [
          { spec: { type: "number", value: 137, tolerance: 0.5 }, feedback: "137 cm³ uses r = 3.2. The upper bound of the volume uses the upper bound of the radius, 3.25 cm." },
          { spec: { type: "number", value: 133, tolerance: 0.5 }, feedback: "That's the surface area ({{4 pi r^2}}). Volume = {{4/3 pi r^3}}." },
          { spec: { type: "number", value: 131, tolerance: 0.5 }, feedback: "That's the *lower* bound (r = 3.15). For the largest volume, use the largest radius." },
        ],
        solution: [
          "Upper bound of radius = 3.2 + 0.05 = 3.25 cm.",
          "Volume = {{4/3 pi * 3.25^3}} = 143.793… cm³.",
          "= 144 cm³ (3 s.f.).",
        ],
        commonError: "Working out the volume with r = 3.2 and then adding 0.05 to the answer.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: ["What is the largest possible radius?", "Cube the largest radius, then multiply by {{4/3 pi}}."],
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
          "ABC is a right-angled triangle with the right angle at B.\n\nAC = 12.4 cm, correct to 1 decimal place.\nBC = 7.6 cm, correct to 1 decimal place.\n\nWork out the upper bound for the length of AB. Give your answer in cm, correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 380 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at B, hypotenuse AC 12.4 cm, side BC 7.6 cm and side AB unknown"><rect width="380" height="290" fill="#ffffff"/><polygon points="60,250 320,250 320,48" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><polyline points="305,250 305,235 320,235" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="46" y="266" font-size="14" font-family="sans-serif" fill="#1f2937">A</text><text x="326" y="266" font-size="14" font-family="sans-serif" fill="#1f2937">B</text><text x="326" y="46" font-size="14" font-family="sans-serif" fill="#1f2937">C</text><text x="330" y="154" font-size="13" font-family="sans-serif" fill="#1f2937">7.6 cm</text><text x="150" y="135" font-size="13" font-family="sans-serif" fill="#1f2937">12.4 cm</text><text x="182" y="272" font-size="13" font-family="sans-serif" fill="#1f2937">AB</text></svg>`,
        answer: { type: "number", value: 9.9, tolerance: 0.005, display: "9.90 cm (9.8995…)" },
        traps: [
          { spec: { type: "number", value: 9.82, tolerance: 0.005 }, feedback: "That pairs upper with upper ({{sqrt(12.45^2 - 7.65^2)}}). Because BC is *subtracted*, the longest AB comes from the *shortest* BC, 7.55 cm." },
          { spec: { type: "number", value: 9.8, tolerance: 0.005 }, feedback: "9.80 uses the measured lengths. For the upper bound, use AC = 12.45 and BC = 7.55." },
          { spec: { type: "number", value: 14.6, tolerance: 0.05 }, feedback: "AC is the hypotenuse, so subtract: {{AB^2 = AC^2 - BC^2}}." },
        ],
        solution: [
          "By Pythagoras, {{AB^2 = AC^2 - BC^2}}.",
          "AB is largest when {{AC^2}} is as big as possible and the amount subtracted, {{BC^2}}, is as small as possible.",
          "Use AC = 12.45 and BC = 7.55: {{AB = sqrt(12.45^2 - 7.55^2) = sqrt(98)}} = 9.8994… cm.",
          "= 9.90 cm (3 s.f.).",
        ],
        commonError: "Using the upper bound of BC because 'upper bound means use all the upper bounds'.",
        difficulty: "challenge",
        guideRef: "bounds-calculations",
        hints: [
          "AC is the hypotenuse. Write AB in terms of AC and BC.",
          "BC is subtracted. To make AB as long as possible, should BC be large or small?",
          "Use the upper bound of AC and the lower bound of BC.",
        ],
        strategy: "Consider extremes",
      },
    ],
  },
];
