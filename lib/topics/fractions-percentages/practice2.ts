// ---------------------------------------------------------------------------
// Fractions, Decimals & Percentages — Practice Papers 3 and 4.
// Paper 3: mixed practice across every section, mostly auto-marked.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher questions
// (contexts, multi-step, "show that", exact and 3 s.f. answers).
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "fractions-percentages-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "fractions-percentages-p3-q01",
        question:
          "Work out {{2 2/5 * 1 7/8}}. Give your answer as a mixed number in its simplest form.",
        answer: { type: "fraction", n: 9, d: 2, simplest: true, form: "mixed", display: "{{4 1/2}}" },
        traps: [
          {
            spec: { type: "fraction", n: 47, d: 20 },
            feedback:
              "You've multiplied the whole numbers (2 × 1) and the fractions ({{2/5 * 7/8}}) separately. That misses the cross terms — convert to improper fractions first.",
          },
        ],
        solution: [
          "Convert to improper fractions: {{2 2/5 = 12/5}} and {{1 7/8 = 15/8}}.",
          "Cancel before multiplying: 12 and 8 share 4, 15 and 5 share 5, so {{12/5 * 15/8 = 3/1 * 3/2}}.",
          "{{3/1 * 3/2 = 9/2 = 4 1/2}}.",
        ],
        commonError: "Multiplying the whole-number parts and the fraction parts separately: 2 × 1 = 2 and {{2/5 * 7/8 = 7/20}}, giving {{2 7/20}}.",
        difficulty: "warmup",
        guideRef: "fraction-operations",
        hints: ["Turn each mixed number into an improper fraction first.", "Cancel common factors across the diagonal before you multiply."],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "fractions-percentages-p3-q02",
        question:
          "Here are four fractions:\n\n{{3/14}}   {{7/40}}   {{4/15}}   {{5/18}}\n\nExactly one of them is a terminating decimal. Write that fraction as a decimal.",
        answer: { type: "number", value: 0.175, allowFraction: false, display: "0.175" },
        traps: [
          {
            spec: { type: "number", value: 0.2142857142857143, tolerance: 0.001 },
            feedback: "{{3/14}} doesn't terminate: 14 = 2 × 7, and the factor 7 makes the decimal recur. Look for a denominator built only from 2s and 5s.",
          },
        ],
        solution: [
          "A fraction in its simplest form terminates exactly when its denominator has no prime factors other than 2 and 5.",
          "14 = 2 × 7 ✗, 40 = {{2^3 * 5}} ✓, 15 = 3 × 5 ✗, 18 = {{2 * 3^2}} ✗.",
          "{{7/40 = 175/1000}} (multiply top and bottom by 25) = 0.175.",
        ],
        commonError: "Thinking any even denominator terminates. 14 and 18 are even but contain 7 and 3.",
        difficulty: "warmup",
        guideRef: "recurring-decimals",
        hints: ["Write each denominator as a product of primes.", "Only denominators made from 2s and 5s give terminating decimals."],
        strategy: "Look at the prime factors",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "fractions-percentages-p3-q03",
        question:
          "A plate of chendol at a hawker centre went up in price from $4.50 to $5.40. Work out the percentage increase.",
        answer: { type: "number", value: 20, display: "20%" },
        traps: [
          {
            spec: { type: "number", value: 16.666666666666668, tolerance: 0.05 },
            feedback: "You've divided the increase by the *new* price. Percentage change always compares with the *original* amount: {{0.90/4.50}}.",
          },
          { spec: { type: "number", value: 120 }, feedback: "120% is the new price as a percentage of the old one. The *increase* is 120% − 100%." },
        ],
        solution: ["Increase = 5.40 − 4.50 = $0.90.", "Percentage increase = {{0.90/4.50 * 100 = 20}}%."],
        solutions: [
          { label: "Multiplier", steps: ["{{5.40/4.50 = 1.2}}.", "A multiplier of 1.2 means +20%."] },
        ],
        commonError: "Dividing by the new price instead of the original.",
        difficulty: "warmup",
        guideRef: "percentage-change",
        hints: ["Find the actual increase first.", "Divide the increase by the original price, then × 100."],
        strategy: "Use a multiplier",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "fractions-percentages-p3-q04",
        question:
          "A laptop is advertised at $1450 before GST. GST of 9% is added. Work out the price including GST. Give your answer in dollars.",
        answer: { type: "number", value: 1580.5, display: "$1580.50" },
        traps: [
          { spec: { type: "number", value: 130.5 }, feedback: "$130.50 is just the GST. The question asks for the total price including GST." },
          { spec: { type: "number", value: 1319.5 }, feedback: "You've subtracted the GST. GST is *added* to the price: multiply by 1.09." },
        ],
        solution: ["Multiplier for a 9% increase = 1 + 0.09 = 1.09.", "1450 × 1.09 = $1580.50."],
        difficulty: "warmup",
        guideRef: "percentage-change",
        hints: ["What single number do you multiply by to add 9%?", "100% + 9% = 109% = 1.09."],
        strategy: "Use a multiplier",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "fractions-percentages-p3-q05",
        question:
          "In a sale, all prices are reduced by 15%. Zara pays $119 for a pair of trainers in the sale. Work out the price of the trainers before the sale. Give your answer in dollars.",
        answer: { type: "number", value: 140, display: "$140" },
        traps: [
          {
            spec: { type: "number", value: 136.85, tolerance: 0.01 },
            feedback:
              "You've added 15% of $119. But the 15% was taken off the *original* price, not the sale price — so $119 is 85% of the original. Divide by 0.85.",
          },
        ],
        solution: [
          "The sale price is 100% − 15% = 85% of the original.",
          "So original × 0.85 = 119.",
          "Original = 119 ÷ 0.85 = $140.",
          "Check: 140 × 0.85 = 119 ✓.",
        ],
        commonError: "Adding 15% of the sale price back on ($136.85).",
        difficulty: "core",
        guideRef: "reverse-percentages",
        hints: ["What percentage of the original price is $119?", "Write it as an equation: original × 0.85 = 119.", "Undo the × 0.85 by dividing."],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "fractions-percentages-p3-q06",
        question:
          "Hana invests $8000 in a savings account that pays 2.6% compound interest per year. Work out the value of her investment after 5 years. Give your answer to the nearest cent.",
        answer: { type: "number", value: 9095.5, tolerance: 0.005, display: "$9095.50" },
        traps: [
          { spec: { type: "number", value: 9040, tolerance: 0.005 }, feedback: "$9040 is *simple* interest (5 × $208). Compound interest earns interest on the interest: multiply by 1.026 five times." },
          { spec: { type: "number", value: 1095.5, tolerance: 0.01 }, feedback: "That's the interest earned. The question asks for the total value of the investment." },
        ],
        solution: [
          "Multiplier for +2.6% = 1.026.",
          "Value = {{8000 * 1.026^5}}.",
          "= 9095.504… = $9095.50 to the nearest cent.",
        ],
        commonError: "Using simple interest: 8000 + 5 × 208 = $9040.",
        difficulty: "core",
        guideRef: "compound-growth",
        hints: ["What is the multiplier for one year?", "Each year the whole amount is multiplied by that — how many times?", "{{8000 * 1.026^5}}."],
        strategy: "Use a multiplier",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "fractions-percentages-p3-q07",
        question:
          "A delivery van is bought for $96 000. Its value depreciates by 12% per year. Work out its value after 3 years. Give your answer to the nearest cent.",
        answer: { type: "number", value: 65421.31, tolerance: 0.005, display: "$65 421.31" },
        traps: [
          { spec: { type: "number", value: 61440 }, feedback: "$61 440 takes off 36% of the original in one go (3 × 12%). Each year's 12% comes off the *new, smaller* value, so use {{0.88^3}}." },
          { spec: { type: "number", value: 30578.69, tolerance: 0.01 }, feedback: "That's the total depreciation (the amount lost), not the value after 3 years." },
        ],
        solution: [
          "Multiplier for −12% = 0.88.",
          "Value = {{96000 * 0.88^3}} = 96 000 × 0.681472.",
          "= $65 421.31 (to the nearest cent; exactly 65 421.312).",
        ],
        commonError: "Subtracting 3 × 12% = 36% of the original price.",
        difficulty: "core",
        guideRef: "compound-growth",
        hints: ["Depreciation is a percentage *decrease* each year.", "Multiplier = 1 − 0.12.", "Apply it three times: {{0.88^3}}."],
        strategy: "Use a multiplier",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "fractions-percentages-p3-q08",
        question: "Show that {{2 3/4 - 1 5/6 = 11/12}}.\n\nShow every step of your working — do not use a calculator.",
        marks: 3,
        modelAnswer:
          "{{2 3/4 = 11/4}} and {{1 5/6 = 11/6}}.\n\nThe LCM of 4 and 6 is 12, so {{11/4 = 33/12}} and {{11/6 = 22/12}}.\n\n{{33/12 - 22/12 = 11/12}} as required.",
        markScheme: [
          { point: "Converts both mixed numbers to improper fractions (11/4 and 11/6), or splits into whole numbers and fractions correctly", keywords: ["11/4", "11/6", "improper"] },
          { point: "Writes both fractions over a common denominator, e.g. 33/12 and 22/12", keywords: ["33/12", "22/12", "12", "common denominator"] },
          { point: "Completes to 11/12 with all working shown", keywords: ["11/12"] },
        ],
        solutions: [
          {
            label: "Whole numbers and fractions separately",
            steps: [
              "{{2 3/4 - 1 5/6 = (2 - 1) + (3/4 - 5/6)}}.",
              "{{3/4 - 5/6 = 9/12 - 10/12 = -1/12}}.",
              "{{1 - 1/12 = 11/12}}. This route works but the negative fraction is easy to fumble — the improper-fraction route is safer.",
            ],
          },
        ],
        commonError: "Subtracting {{3/4 - 5/6}} as {{5/6 - 3/4}} because 'the bigger goes first', giving {{1 1/12}}.",
        difficulty: "core",
        guideRef: "fraction-operations",
        hints: ["Write both mixed numbers as improper fractions.", "Find the lowest common multiple of 4 and 6.", "Rewrite both fractions in twelfths and subtract."],
        strategy: "Find a common denominator",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "written",
        id: "fractions-percentages-p3-q09",
        question: "Prove algebraically that the recurring decimal 0.4̇5̇ (= 0.454545…) can be written as {{5/11}}.",
        marks: 3,
        modelAnswer:
          "Let x = 0.454545…\n\nThen 100x = 45.454545…\n\nSubtract: 100x − x = 45.4545… − 0.4545…, so 99x = 45.\n\n{{x = 45/99 = 5/11}} (dividing top and bottom by 9).",
        markScheme: [
          { point: "Sets x = 0.4545… and writes 100x = 45.4545… (two recurring decimals with the same tail)", keywords: ["100x", "45.45", "x ="] },
          { point: "Subtracts to get 99x = 45", keywords: ["99x", "99x = 45", "45/99"] },
          { point: "Simplifies 45/99 to 5/11", keywords: ["5/11", "45/99", "÷ 9", "divide by 9"] },
        ],
        commonError: "Using 10x = 4.5454…, whose decimal tail does not match x, so subtracting doesn't cancel the recurring part.",
        difficulty: "core",
        guideRef: "recurring-decimals",
        hints: [
          "Call the decimal x. How many digits repeat?",
          "Two digits repeat, so multiply by 100 to shift one whole block.",
          "Subtract x from 100x — the recurring tails cancel.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "fractions-percentages-p3-q10",
        question: "Simplify fully {{(x^2 - 9)/(x^2 + x - 6)}}.",
        answer: { type: "expression", expr: "(x-3)/(x-2)", form: "simplified", display: "{{(x - 3)/(x - 2)}}" },
        traps: [
          { spec: { type: "expression", expr: "(x+3)/(x+2)" }, feedback: "Check your factorisation of {{x^2 + x - 6}}: you need two numbers that multiply to −6 and add to +1, so it's (x + 3)(x − 2). Cancel the (x + 3)." },
          { spec: { type: "expression", expr: "(x-3)/(x+2)" }, feedback: "Close — but check the signs in {{x^2 + x - 6 = (x + 3)(x - 2)}}. Expand your bracket to test it." },
        ],
        solution: [
          "Numerator: difference of two squares, {{x^2 - 9 = (x - 3)(x + 3)}}.",
          "Denominator: {{x^2 + x - 6 = (x + 3)(x - 2)}} (3 × −2 = −6, 3 + (−2) = 1).",
          "{{((x - 3)(x + 3))/((x + 3)(x - 2)) = (x - 3)/(x - 2)}}.",
        ],
        commonError: "Cancelling the {{x^2}} terms: you can only cancel common *factors*, never individual terms.",
        difficulty: "core",
        guideRef: "algebraic-fractions",
        hints: ["Factorise the top and the bottom separately.", "The top is a difference of two squares.", "Cancel the bracket that appears on both top and bottom."],
        strategy: "Factorise first",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "fractions-percentages-p3-q11",
        question: "Write {{3/(x + 2) + 2/(x - 1)}} as a single fraction in its simplest form.",
        answer: { type: "expression", expr: "(5x+1)/((x+2)(x-1))", form: "simplified", display: "{{(5x + 1)/((x + 2)(x - 1))}}" },
        traps: [
          { spec: { type: "expression", expr: "5/(2x+1)" }, feedback: "You've added the tops and added the bottoms. Algebraic fractions work just like number fractions: you need a common denominator, (x + 2)(x − 1)." },
          { spec: { type: "expression", expr: "(5x+7)/((x+2)(x-1))" }, feedback: "Check the expansion 3(x − 1) = 3x − 3 (not 3x + 3)." },
        ],
        solution: [
          "Common denominator: (x + 2)(x − 1).",
          "{{3/(x + 2) = (3(x - 1))/((x + 2)(x - 1))}} and {{2/(x - 1) = (2(x + 2))/((x + 2)(x - 1))}}.",
          "Numerator: 3(x − 1) + 2(x + 2) = 3x − 3 + 2x + 4 = 5x + 1.",
          "Answer: {{(5x + 1)/((x + 2)(x - 1))}}.",
        ],
        commonError: "Sign slip when expanding 3(x − 1).",
        difficulty: "core",
        guideRef: "algebraic-fractions",
        hints: ["What is the common denominator?", "Multiply each numerator by the bracket it is missing.", "Expand and collect the numerator: 3(x − 1) + 2(x + 2)."],
        strategy: "Find a common denominator",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "fractions-percentages-p3-q12",
        question:
          "Use algebra to write the recurring decimal 0.208̇ (= 0.208333…) as a fraction in its simplest form.",
        answer: { type: "fraction", n: 5, d: 24, simplest: true, display: "{{5/24}}" },
        traps: [
          { spec: { type: "fraction", n: 208, d: 999 }, feedback: "{{208/999}} would be 0.208208208… — all three digits repeating. Here only the 3 repeats, so shift by 1000 and by 100 and subtract." },
        ],
        solution: [
          "Let x = 0.208333…",
          "1000x = 208.333… and 100x = 20.8333…",
          "Subtract: 900x = 187.5, so {{x = 187.5/900 = 1875/9000}}.",
          "Divide by 375: {{x = 5/24}}.",
        ],
        solutions: [
          {
            label: "Split off the non-recurring part",
            steps: [
              "0.208333… = 0.2 + 0.008333…",
              "0.008333… = {{1/120}} (because 0.08333… = {{1/12}}).",
              "{{1/5 + 1/120 = 24/120 + 1/120 = 25/120 = 5/24}}.",
            ],
          },
        ],
        commonError: "Putting all the digits over 999 when only the last digit recurs.",
        difficulty: "core",
        guideRef: "recurring-decimals",
        hints: [
          "Let x = 0.208333… Which digit repeats?",
          "Find two multiples of x with the same recurring tail: 100x and 1000x both end …333…",
          "1000x − 100x = 900x. Clear the decimal and simplify.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "fractions-percentages-p3-q13",
        question:
          "A colony of 4800 bees grows by 7% each year. After how many whole years will the colony first be bigger than 8000 bees?",
        answer: { type: "number", value: 8, display: "8 years" },
        traps: [
          { spec: { type: "number", value: 7 }, feedback: "After 7 years there are {{4800 * 1.07^7}} ≈ 7708 bees — not yet over 8000. Try one more year." },
          { spec: { type: "number", value: 10 }, feedback: "10 years comes from simple growth (336 bees a year). The growth compounds: use {{4800 * 1.07^n}}." },
        ],
        solution: [
          "Number after n years = {{4800 * 1.07^n}}. We need this to exceed 8000, i.e. {{1.07^n > 8000/4800 = 1.666…}}",
          "Try values: {{1.07^7 = 1.6058…}} → 4800 × 1.6058 ≈ 7708 (too small).",
          "{{1.07^8 = 1.7182…}} → 4800 × 1.7182 ≈ 8247 (over 8000).",
          "So the colony first exceeds 8000 after 8 years.",
        ],
        commonError: "Stopping at the year that gets *closest* to 8000 rather than the first year that is *over* 8000.",
        difficulty: "challenge",
        guideRef: "compound-growth",
        hints: [
          "Write a formula for the number of bees after n years.",
          "You need {{4800 * 1.07^n > 8000}}. Divide both sides by 4800.",
          "Use trial and improvement: try n = 7 and n = 8.",
        ],
        strategy: "Trial and improvement",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "fractions-percentages-p3-q14",
        question:
          "The price of a concert ticket was increased by 20%. Later, the new price was decreased by 15%. The ticket now costs $255. Work out the original price of the ticket. Give your answer in dollars.",
        answer: { type: "number", value: 250, display: "$250" },
        traps: [
          { spec: { type: "number", value: 242.86, tolerance: 0.01 }, feedback: "You've treated it as a single 5% increase (20 − 15). The two changes multiply: 1.2 × 0.85 = 1.02, a 2% increase overall." },
          { spec: { type: "number", value: 260.1, tolerance: 0.01 }, feedback: "You've worked forwards from $255. $255 is the price *after* both changes — divide by the combined multiplier." },
        ],
        solution: [
          "Combined multiplier = 1.20 × 0.85 = 1.02.",
          "Original × 1.02 = 255.",
          "Original = 255 ÷ 1.02 = $250.",
          "Check: 250 × 1.2 = 300; 300 × 0.85 = 255 ✓.",
        ],
        solutions: [
          {
            label: "Undo one step at a time",
            steps: ["Before the 15% decrease: 255 ÷ 0.85 = 300.", "Before the 20% increase: 300 ÷ 1.2 = 250."],
          },
        ],
        commonError: "Combining 20% up and 15% down into a single 5% increase.",
        difficulty: "challenge",
        guideRef: "reverse-percentages",
        hints: [
          "Work out the single multiplier for 'up 20% then down 15%'.",
          "The changes multiply, they don't add: 1.2 × 0.85.",
          "Original × 1.02 = 255 — now work backwards.",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "fractions-percentages-p3-q15",
        question: "Show that {{x/(x - 2) - 8/(x^2 - 4)}} simplifies to {{(x + 4)/(x + 2)}}.",
        marks: 4,
        modelAnswer:
          "Factorise: {{x^2 - 4 = (x - 2)(x + 2)}}, so the common denominator is (x − 2)(x + 2).\n\n{{x/(x - 2) = (x(x + 2))/((x - 2)(x + 2))}}.\n\nSo the expression is {{(x(x + 2) - 8)/((x - 2)(x + 2)) = (x^2 + 2x - 8)/((x - 2)(x + 2))}}.\n\nFactorise the numerator: {{x^2 + 2x - 8 = (x + 4)(x - 2)}}.\n\n{{((x + 4)(x - 2))/((x - 2)(x + 2)) = (x + 4)/(x + 2)}} as required.",
        markScheme: [
          { point: "Factorises x² − 4 as (x − 2)(x + 2) and uses it as the common denominator", keywords: ["(x-2)(x+2)", "(x+2)(x-2)", "difference of two squares", "common denominator"] },
          { point: "Correct single fraction (x(x + 2) − 8)/((x − 2)(x + 2)) or (x² + 2x − 8)/…", keywords: ["x^2+2x-8", "x² + 2x − 8", "x(x+2)", "x(x + 2) − 8"] },
          { point: "Factorises the numerator as (x + 4)(x − 2)", keywords: ["(x+4)(x-2)", "(x + 4)(x − 2)"] },
          { point: "Cancels (x − 2) to reach (x + 4)/(x + 2)", keywords: ["cancel", "(x+4)/(x+2)", "x + 4"] },
        ],
        commonError: "Using (x − 2)(x² − 4) as the denominator, which works but makes the cubic numerator far harder to factorise.",
        difficulty: "challenge",
        guideRef: "algebraic-fractions",
        hints: [
          "Factorise {{x^2 - 4}} — what do you notice about the two denominators?",
          "The lowest common denominator is (x − 2)(x + 2), not (x − 2)({{x^2 - 4}}).",
          "After subtracting, factorise the numerator — one bracket should cancel.",
        ],
        strategy: "Factorise first",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "fractions-percentages-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "written",
        id: "fractions-percentages-p4-q01",
        question: "Show that {{1 2/3 * 2 4/5 = 4 2/3}}.",
        marks: 3,
        modelAnswer:
          "{{1 2/3 = 5/3}} and {{2 4/5 = 14/5}}.\n\n{{5/3 * 14/5 = 70/15}} (or cancel the 5s first: {{1/3 * 14/1 = 14/3}}).\n\n{{70/15 = 14/3 = 4 2/3}} as required.",
        markScheme: [
          { point: "Converts both to improper fractions 5/3 and 14/5", keywords: ["5/3", "14/5"] },
          { point: "Multiplies correctly to 70/15 or 14/3 (cancelling shown)", keywords: ["70/15", "14/3", "cancel"] },
          { point: "Converts to 4 2/3 with working shown", keywords: ["4 2/3", "14/3 = 4 2/3", "12/3"] },
        ],
        commonError: "Writing only '= 4 2/3' with no improper fractions shown — in a 'show that' question the working *is* the answer.",
        difficulty: "warmup",
        guideRef: "fraction-operations",
        hints: ["Change both mixed numbers to improper fractions.", "Cancel the 5s, then multiply."],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "fractions-percentages-p4-q02",
        question:
          "Mei earns $3850 per month. Her pay increases by 3.2%. Work out her new monthly pay. Give your answer in dollars.",
        answer: { type: "number", value: 3973.2, display: "$3973.20" },
        traps: [
          { spec: { type: "number", value: 123.2 }, feedback: "$123.20 is the pay rise. Add it on — or multiply by 1.032 in one step." },
          { spec: { type: "number", value: 4973.2 }, feedback: "Check the multiplier: a 3.2% increase is × 1.032, not × 1.32 or + 1000." },
        ],
        solution: ["Multiplier = 1 + 0.032 = 1.032.", "3850 × 1.032 = $3973.20."],
        commonError: "Using 1.32 as the multiplier for 3.2%.",
        difficulty: "warmup",
        guideRef: "percentage-change",
        hints: ["3.2% as a decimal is 0.032.", "Multiply by 1.032."],
        strategy: "Use a multiplier",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "fractions-percentages-p4-q03",
        question:
          "Arjun buys 40 durians for a total of $260. He sells all 40 durians for $8.50 each. Work out his percentage profit. Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 30.8, tolerance: 0.05, display: "30.8%" },
        traps: [
          { spec: { type: "number", value: 23.5, tolerance: 0.05 }, feedback: "You've divided the profit by the selling total ($340). Percentage profit compares with what he *paid*: {{80/260}}." },
          { spec: { type: "number", value: 80 }, feedback: "$80 is the profit in dollars. Now write it as a percentage of the cost price." },
        ],
        solution: [
          "Income = 40 × 8.50 = $340.",
          "Profit = 340 − 260 = $80.",
          "Percentage profit = {{80/260 * 100 = 30.769…}}% = 30.8% (3 s.f.).",
        ],
        commonError: "Dividing by the selling price instead of the cost price.",
        difficulty: "warmup",
        guideRef: "percentage-change",
        hints: ["Work out how much he receives altogether.", "Profit as a percentage of the *cost*."],
        strategy: "Break it into steps",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "fractions-percentages-p4-q04",
        question:
          "The price of a television is $1308. This price includes GST at 9%. Work out the price of the television before GST was added. Give your answer in dollars.",
        answer: { type: "number", value: 1200, display: "$1200" },
        traps: [
          { spec: { type: "number", value: 1190.28, tolerance: 0.01 }, feedback: "You've taken 9% of $1308 away. But the 9% was calculated on the price *before* GST — $1308 is 109% of that. Divide by 1.09." },
        ],
        solution: [
          "$1308 is 100% + 9% = 109% of the pre-GST price.",
          "Price before GST = 1308 ÷ 1.09 = $1200.",
          "Check: 1200 × 1.09 = 1308 ✓.",
        ],
        commonError: "Subtracting 9% of $1308 to get $1190.28.",
        difficulty: "warmup",
        guideRef: "reverse-percentages",
        hints: ["$1308 is what percentage of the original price?", "Divide by the multiplier 1.09."],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "fractions-percentages-p4-q05",
        question:
          "Priya has $6000 to invest for 4 years. She can choose:\n\n- **Account A:** 3% per year simple interest\n- **Account B:** 2.8% per year compound interest\n\nWork out how much more interest the better account pays over the 4 years. Give your answer to the nearest cent.",
        answer: { type: "number", value: 19.25, tolerance: 0.005, display: "$19.25 (Account A is better)" },
        traps: [
          { spec: { type: "number", value: 48, tolerance: 0.005 }, feedback: "$48 compares 3% and 2.8% *simple* interest. Account B compounds: work out {{6000 * 1.028^4}}." },
        ],
        solution: [
          "Account A: interest = 4 × 3% of 6000 = 4 × 180 = $720.",
          "Account B: value = {{6000 * 1.028^4}} = 6700.754…, so interest = $700.75.",
          "Account A pays more by 720 − 700.75 = $19.25 (19.245… → $19.25).",
        ],
        commonError: "Assuming compound always beats simple. Over a short time, a higher simple rate can win.",
        difficulty: "core",
        guideRef: "compound-growth",
        hints: [
          "Work out the interest from each account separately.",
          "Simple: the same $180 every year. Compound: multiply by 1.028 four times.",
          "Subtract the smaller interest from the larger.",
        ],
        strategy: "Compare both",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "fractions-percentages-p4-q06",
        question:
          "n is an integer with 30 < n < 40. The fraction {{7/n}} can be written as a terminating decimal. Find all the possible values of n.",
        answer: { type: "list", values: [32, 35], ordered: false, display: "32 and 35" },
        traps: [
          { spec: { type: "list", values: [32], ordered: false }, feedback: "32 = {{2^5}} works — but don't forget to simplify {{7/n}} first. Is there a value of n that cancels with the 7?" },
        ],
        solution: [
          "{{7/n}} terminates exactly when, in its simplest form, the denominator has only 2s and 5s as prime factors.",
          "If n has no factor 7, the fraction can't simplify, so n itself must be of the form {{2^a 5^b}}: between 31 and 39 only 32 = {{2^5}} works.",
          "If n is a multiple of 7: n = 35 gives {{7/35 = 1/5}} = 0.2 ✓.",
          "So n = 32 or n = 35.",
        ],
        commonError: "Forgetting that {{7/35}} simplifies to {{1/5}}, so missing n = 35.",
        difficulty: "core",
        guideRef: "recurring-decimals",
        hints: [
          "Which denominators give terminating decimals?",
          "Check each n from 31 to 39 — but simplify {{7/n}} first.",
          "Is any n between 30 and 40 a multiple of 7?",
        ],
        strategy: "Split into cases",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "written",
        id: "fractions-percentages-p4-q07",
        question: "Prove algebraically that the recurring decimal 0.12̇7̇ (= 0.1272727…) can be written as {{7/55}}.",
        marks: 3,
        modelAnswer:
          "Let x = 0.1272727…\n\nThen 10x = 1.272727… and 1000x = 127.272727…\n\nSubtract: 1000x − 10x = 127.2727… − 1.2727…, so 990x = 126.\n\n{{x = 126/990 = 7/55}} (dividing top and bottom by 18).",
        markScheme: [
          { point: "Two correct multiples of x with the same recurring tail, e.g. 10x = 1.2727… and 1000x = 127.2727…", keywords: ["10x", "1000x", "1.2727", "127.2727"] },
          { point: "Subtracts to get 990x = 126 (or equivalent, e.g. 99y = 126 with y = 10x)", keywords: ["990x", "990x = 126", "126/990", "126"] },
          { point: "Simplifies 126/990 to 7/55", keywords: ["7/55", "126/990", "÷ 18", "divide by 18"] },
        ],
        solutions: [
          {
            label: "Subtract 100x − x",
            steps: [
              "100x = 12.727272…, x = 0.1272727…",
              "99x = 12.6, so {{x = 12.6/99 = 126/990 = 7/55}}. Also valid — the 'decimal on the right' just needs clearing.",
            ],
          },
        ],
        commonError: "Using 100x and x and then stopping at 99x = 12.6 without clearing the decimal and simplifying.",
        difficulty: "core",
        guideRef: "recurring-decimals",
        hints: [
          "Let x = 0.1272727… The 1 does not repeat; 27 does.",
          "Find two multiples of x whose digits after the point are identical — try 10x and 1000x.",
          "Subtract, then divide and simplify.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "fractions-percentages-p4-q08",
        question:
          "Kenji buys a car for $142 000. In the first year, the car depreciates by 18%. In each of the following years it depreciates by 11% of its value at the start of that year. Work out the value of the car at the end of 4 years. Give your answer to the nearest dollar.",
        answer: { type: "number", value: 82087, tolerance: 0.5, display: "$82 087" },
        traps: [
          { spec: { type: "number", value: 64201, tolerance: 0.5 }, feedback: "That uses 18% depreciation for every year. Only the first year is 18%; the next three years are 11% each: {{0.82 * 0.89^3}}." },
          { spec: { type: "number", value: 69580, tolerance: 0.5 }, feedback: "You've subtracted 18% + 3 × 11% = 51% of the original price. Each year's depreciation is a percentage of the *current* value, so multiply." },
        ],
        solution: [
          "End of year 1: 142 000 × 0.82 = $116 440.",
          "Years 2, 3 and 4: multiply by 0.89 three times: {{116440 * 0.89^3}}.",
          "{{0.89^3 = 0.704969}}, so value = 116 440 × 0.704969 = 82 086.59…",
          "Value after 4 years ≈ $82 087.",
        ],
        commonError: "Applying 11% for four years, or 18% every year.",
        difficulty: "core",
        guideRef: "compound-growth",
        hints: [
          "What is the multiplier for the first year? And for each later year?",
          "There are 3 years at the second rate.",
          "Value = {{142000 * 0.82 * 0.89^3}}.",
        ],
        strategy: "Use a multiplier",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "fractions-percentages-p4-q09",
        question: "Simplify fully {{(6x^2 - 15x)/(4x^2 - 25)}}.",
        answer: { type: "expression", expr: "3x/(2x+5)", form: "simplified", display: "{{(3x)/(2x + 5)}}" },
        traps: [
          { spec: { type: "expression", expr: "3x/(2x-5)" }, feedback: "You've cancelled the wrong bracket. {{4x^2 - 25 = (2x - 5)(2x + 5)}}; the (2x − 5) cancels with the numerator, leaving (2x + 5) on the bottom." },
        ],
        solution: [
          "Numerator: {{6x^2 - 15x = 3x(2x - 5)}}.",
          "Denominator: difference of two squares, {{4x^2 - 25 = (2x - 5)(2x + 5)}}.",
          "Cancel (2x − 5): {{(3x(2x - 5))/((2x - 5)(2x + 5)) = (3x)/(2x + 5)}}.",
        ],
        commonError: "Factorising the numerator as x(6x − 15) — not fully factorised, so the common bracket (2x − 5) is hidden.",
        difficulty: "core",
        guideRef: "algebraic-fractions",
        hints: ["Factorise the numerator fully — what is the HCF of {{6x^2}} and 15x?", "The denominator is a difference of two squares.", "Cancel the common bracket."],
        strategy: "Factorise first",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "fractions-percentages-p4-q10",
        question: "Simplify fully {{(x^2 - 4)/(3x + 9) ÷ (x - 2)/(x^2 + 3x)}}.",
        answer: { type: "expression", expr: "x(x+2)/3", form: "simplified", display: "{{(x(x + 2))/3}}" },
        traps: [
          { spec: { type: "expression", expr: "(x-2)^2*(x+2)/(3x*(x+3)^2)" }, feedback: "You've multiplied by the second fraction instead of dividing. Dividing means multiplying by the *reciprocal*: flip {{(x - 2)/(x^2 + 3x)}}." },
        ],
        solution: [
          "Flip the second fraction and multiply: {{(x^2 - 4)/(3x + 9) * (x^2 + 3x)/(x - 2)}}.",
          "Factorise everything: {{((x - 2)(x + 2))/(3(x + 3)) * (x(x + 3))/(x - 2)}}.",
          "Cancel (x − 2) and (x + 3): {{(x(x + 2))/3}}, which can also be written {{(x^2 + 2x)/3}}.",
        ],
        commonError: "Cancelling before flipping the second fraction.",
        difficulty: "core",
        guideRef: "algebraic-fractions",
        hints: ["Dividing by a fraction = multiplying by its reciprocal.", "Factorise all four parts: {{x^2 - 4}}, 3x + 9, {{x^2 + 3x}}.", "Cancel every bracket that appears on the top and the bottom."],
        strategy: "Factorise first",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "fractions-percentages-p4-q11",
        question:
          "Ravi has a ribbon {{4 2/3}} m long. He cuts as many pieces of length {{3/8}} m as he can. Work out the length of ribbon left over. Give your answer as a fraction of a metre. Do not use a calculator.",
        answer: { type: "fraction", n: 1, d: 6, simplest: true, display: "{{1/6}} m" },
        traps: [
          { spec: { type: "fraction", n: 112, d: 9 }, feedback: "{{112/9 = 12 4/9}} is the number of pieces (12 whole pieces). The question asks for the length *left over* after cutting 12 pieces." },
          { spec: { type: "fraction", n: 4, d: 9 }, feedback: "{{4/9}} is the left-over fraction *of a piece*, not of a metre. Multiply by {{3/8}} m — or subtract 12 pieces from the total." },
        ],
        solution: [
          "{{4 2/3 ÷ 3/8 = 14/3 * 8/3 = 112/9 = 12 4/9}}, so he can cut 12 whole pieces.",
          "12 pieces use {{12 * 3/8 = 36/8 = 9/2 = 4 1/2}} m.",
          "Left over: {{4 2/3 - 4 1/2 = 4/6 - 3/6 = 1/6}} m.",
        ],
        commonError: "Giving {{4/9}} — the remainder as a fraction of one piece rather than in metres.",
        difficulty: "core",
        guideRef: "fraction-operations",
        hints: [
          "How many pieces fit? Divide {{4 2/3}} by {{3/8}}.",
          "He can only cut whole pieces — how much ribbon do they use?",
          "Subtract that length from {{4 2/3}}.",
        ],
        strategy: "Break it into steps",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "fractions-percentages-p4-q12",
        question:
          "Siti's phone contract went up by 12%. She now pays $50.40 per month.\n\nSiti says, \"Before the increase I paid 50.40 − 12% of 50.40 = $44.35.\"\n\nExplain what is wrong with Siti's method and work out the correct monthly cost before the increase.",
        marks: 3,
        modelAnswer:
          "The 12% was calculated on the *old* price, not on $50.40, so taking 12% of $50.40 is wrong. $50.40 is 112% of the old price.\n\nOld price × 1.12 = 50.40, so old price = 50.40 ÷ 1.12 = $45.\n\nCheck: 45 × 1.12 = 50.40 ✓ (whereas 44.35 × 1.12 = 49.67 ✗).",
        markScheme: [
          { point: "Explains the 12% is of the original price, not of $50.40 (so $50.40 represents 112%)", keywords: ["original", "112%", "old price", "not of 50.40", "before"] },
          { point: "Divides by 1.12 (or finds 1% = 50.40 ÷ 112)", keywords: ["÷ 1.12", "/1.12", "1.12", "112"] },
          { point: "Correct answer $45", keywords: ["45"] },
        ],
        commonError: "Agreeing with Siti, or 'fixing' it by adding 12% instead.",
        difficulty: "core",
        guideRef: "reverse-percentages",
        hints: [
          "12% of *which* amount was added?",
          "So $50.40 is what percentage of the old price?",
          "Divide by the multiplier 1.12.",
        ],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "fractions-percentages-p4-q13",
        question:
          "Olivia invests $5000 in an account paying compound interest at r% per year. After 3 years the investment is worth $5955.08. Find the value of r.",
        answer: { type: "number", value: 6, display: "r = 6" },
        traps: [
          { spec: { type: "number", value: 6.37, tolerance: 0.01 }, feedback: "6.37% is the *simple* interest rate ({{955.08/5000}} ÷ 3). With compounding, find the multiplier m from {{m^3 = 5955.08/5000}}." },
          { spec: { type: "number", value: 1.06 }, feedback: "1.06 is the multiplier. The interest rate is the part above 1, written as a percentage." },
        ],
        solution: [
          "Let the multiplier be m: {{5000 * m^3 = 5955.08}}.",
          "{{m^3 = 5955.08/5000 = 1.191016}}.",
          "{{m = cbrt(1.191016) = 1.06}}.",
          "m = 1.06 means an increase of 6% per year, so r = 6.",
        ],
        commonError: "Dividing the total growth (19.1%) by 3 to get about 6.37%.",
        difficulty: "challenge",
        guideRef: "compound-growth",
        hints: [
          "Write the formula {{5000 * m^3 = 5955.08}}, where m is the yearly multiplier.",
          "Divide by 5000 to find {{m^3}}.",
          "Undo the cube with a cube root, then turn the multiplier into a percentage.",
        ],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "fractions-percentages-p4-q14",
        question: "Write {{3/(x - 3) - (x + 15)/(x^2 - 9)}} as a single fraction in its simplest form.",
        answer: { type: "expression", expr: "2/(x+3)", form: "simplified", display: "{{2/(x + 3)}}" },
        traps: [
          { spec: { type: "expression", expr: "(4x+24)/(x^2-9)" }, feedback: "Watch the minus sign in front of the second fraction: −(x + 15) = −x − 15. So the numerator is 3x + 9 − x − 15." },
        ],
        solution: [
          "{{x^2 - 9 = (x - 3)(x + 3)}}, so the common denominator is (x − 3)(x + 3).",
          "{{3/(x - 3) = (3(x + 3))/((x - 3)(x + 3))}}.",
          "Numerator: 3(x + 3) − (x + 15) = 3x + 9 − x − 15 = 2x − 6 = 2(x − 3).",
          "{{(2(x - 3))/((x - 3)(x + 3)) = 2/(x + 3)}}.",
        ],
        commonError: "Stopping at {{(2x - 6)/(x^2 - 9)}} without factorising and cancelling — 'simplest form' means check for a common factor at the end.",
        difficulty: "challenge",
        guideRef: "algebraic-fractions",
        hints: [
          "Factorise {{x^2 - 9}}.",
          "Use (x − 3)(x + 3) as the common denominator; take care with the minus sign in front of (x + 15).",
          "Factorise the final numerator — does anything cancel?",
        ],
        strategy: "Factorise first",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "fractions-percentages-p4-q15",
        question:
          "The length of a rectangular solar panel is increased by 15% and its width is decreased by 15%. Work out the percentage decrease in the area of the panel.",
        answer: { type: "number", value: 2.25, display: "2.25%" },
        traps: [
          { spec: { type: "number", value: 0 }, feedback: "+15% and −15% don't cancel. Area = length × width, so the multipliers *multiply*: 1.15 × 0.85." },
          { spec: { type: "number", value: 97.75 }, feedback: "97.75% is the *new* area as a percentage of the old area. The decrease is 100% − 97.75%." },
        ],
        solution: [
          "Let the original length be l and width w, so the area is lw.",
          "New area = (1.15l)(0.85w) = 0.9775lw.",
          "0.9775 = 97.75%, so the area decreases by 100 − 97.75 = 2.25%.",
        ],
        solutions: [
          {
            label: "Difference of two squares",
            steps: [
              "1.15 × 0.85 = (1 + 0.15)(1 − 0.15) = {{1 - 0.15^2 = 1 - 0.0225}}.",
              "So the area always drops by {{0.15^2}} = 2.25% — whatever the original dimensions. A rise and fall of p% always gives a fall of {{p^2/100}}%.",
            ],
          },
        ],
        commonError: "Assuming a 15% increase and a 15% decrease cancel out.",
        difficulty: "challenge",
        guideRef: "percentage-change",
        hints: [
          "Call the original length l and width w. What are the new length and width?",
          "Multiply the two multipliers to get the area multiplier.",
          "Compare 1.15 × 0.85 with 1.",
        ],
        strategy: "Introduce a variable",
      },
    ],
  },
];
