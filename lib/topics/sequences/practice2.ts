// ---------------------------------------------------------------------------
// Sequences & Series — Practice Papers 3 and 4.
// Paper 3: mixed practice across every section (mostly auto-marked, 3 written).
// Paper 4: exam style, modelled on Edexcel 4MA1 Higher questions — contexts,
//          multi-step, "show that", exact-form answers.
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "sequences-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "sequences-p3-q01",
        question: "Here are the first four terms of a sequence:\n\n    7,   11,   15,   19\n\nFind an expression, in terms of n, for the nth term of the sequence.",
        answer: { type: "expression", expr: "4n+3", display: "4n + 3" },
        traps: [
          {
            spec: { type: "expression", expr: "n+4" },
            feedback: "You wrote the term-to-term rule as if it were the constant. The difference 4 is the **coefficient** of n: start from 4n (4, 8, 12, 16) and adjust by +3.",
          },
          {
            spec: { type: "expression", expr: "4n+7" },
            feedback: "Check n = 1: 4 + 7 = 11, not 7. The constant is the 'zero term' — one step *back* from the first term: 7 − 4 = 3.",
          },
        ],
        solution: [
          "The terms go up by 4 each time, so the nth term starts 4n.",
          "4n gives 4, 8, 12, 16 — each actual term is 3 more.",
          "nth term = 4n + 3.",
          "Check: n = 4 gives 16 + 3 = 19. ✓",
        ],
        commonError: "Using the first term as the constant (4n + 7) instead of the zeroth term.",
        difficulty: "warmup",
        guideRef: "linear-nth-term",
        hints: ["What is the common difference? That's the number in front of n.", "Compare the terms with the 4 times table."],
        strategy: "Find a pattern",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "sequences-p3-q02",
        question: "The nth term of a sequence is 50 − 3n.\n\nWork out the 12th term of the sequence.",
        answer: { type: "number", value: 14 },
        traps: [
          {
            spec: { type: "number", value: 564 },
            feedback: "You worked out (50 − 3) × 12. Substitute n = 12 into the rule: 50 − 3 × 12 — multiply before you subtract.",
          },
        ],
        solution: ["Substitute n = 12: 50 − 3 × 12.", "= 50 − 36 = 14."],
        commonError: "Doing 50 − 3 first and then multiplying by 12.",
        difficulty: "warmup",
        guideRef: "linear-nth-term",
        hints: ["Replace n with 12.", "Remember BIDMAS: 3 × 12 first."],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "sequences-p3-q03",
        question: "An arithmetic sequence has first term −8 and common difference 2.5.\n\nWork out the 21st term.",
        answer: { type: "number", value: 42 },
        traps: [
          {
            spec: { type: "number", value: 44.5 },
            feedback: "You added 21 lots of d. From the 1st term to the 21st term there are only **20** steps: −8 + 20 × 2.5.",
          },
        ],
        solution: ["Use a + (n − 1)d with a = −8, d = 2.5, n = 21.", "−8 + 20 × 2.5 = −8 + 50 = 42."],
        commonError: "Using nd instead of (n − 1)d.",
        difficulty: "warmup",
        guideRef: "arithmetic-sequences",
        hints: ["How many jumps of 2.5 take you from the 1st term to the 21st term?"],
        strategy: "Count the gaps",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "sequences-p3-q04",
        question: "Work out the sum of the first 30 terms of the arithmetic series\n\n    4 + 9 + 14 + 19 + …",
        answer: { type: "number", value: 2295 },
        traps: [
          {
            spec: { type: "number", value: 2370 },
            feedback: "You used nd instead of (n − 1)d inside the bracket. {{S_n = n/2 (2a + (n - 1)d)}}, so the bracket is 8 + 29 × 5.",
          },
          {
            spec: { type: "number", value: 149 },
            feedback: "149 is the 30th **term**. The question asks for the **sum** of 30 terms.",
          },
        ],
        solution: [
          "a = 4, d = 5, n = 30.",
          "{{S_30 = 30/2 (2 * 4 + 29 * 5)}}",
          "= 15 × (8 + 145) = 15 × 153 = 2295.",
        ],
        solutions: [
          {
            label: "Average of first and last",
            steps: ["Last term = 4 + 29 × 5 = 149.", "{{S_30 = 30/2 (4 + 149) = 15 * 153 = 2295}}."],
          },
        ],
        commonError: "Writing 30 × 5 instead of 29 × 5.",
        difficulty: "warmup",
        guideRef: "arithmetic-series",
        hints: ["Identify a, d and n.", "Use {{S_n = n/2 (2a + (n - 1)d)}}."],
        strategy: "Use a formula",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "sequences-p3-q05",
        question: "Here are the first four terms of an arithmetic sequence:\n\n    5,   13,   21,   29\n\nWork out the value of the first term of the sequence that is greater than 300.",
        answer: { type: "number", value: 301 },
        traps: [
          {
            spec: { type: "number", value: 38 },
            feedback: "38 is the **position** of the term. The question asks for the term itself: 8 × 38 − 3.",
          },
          {
            spec: { type: "number", value: 293 },
            feedback: "293 is the 37th term — it is still below 300. Round n **up**, not down.",
          },
        ],
        solution: [
          "nth term = 8n − 3.",
          "Solve 8n − 3 > 300: 8n > 303, so n > 37.875.",
          "n must be a whole number, so n = 38.",
          "38th term = 8 × 38 − 3 = 301.",
        ],
        commonError: "Rounding n down to 37 (which gives 293, below 300) or giving n instead of the term.",
        difficulty: "core",
        guideRef: "linear-nth-term",
        hints: ["Start by finding the nth term.", "Set up an inequality: nth term > 300.", "n must be an integer — which way do you round?"],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "sequences-p3-q06",
        question: "The 5th term of an arithmetic sequence is 23.\nThe 12th term of the same sequence is 58.\n\nFind an expression, in terms of n, for the nth term of the sequence.",
        answer: { type: "expression", expr: "5n-2", display: "5n − 2" },
        traps: [
          {
            spec: { type: "expression", expr: "5n+3" },
            feedback: "You found a = 3 correctly but then wrote a + dn. The nth term is a + (n − 1)d = 3 + 5(n − 1) = 5n − 2.",
          },
          {
            spec: { type: "expression", expr: "35n/7" },
            feedback: "Check n = 5: your rule doesn't give 23. Find d first (58 − 23 over 7 gaps), then the first term.",
          },
        ],
        solution: [
          "From the 5th to the 12th term is 7 steps: 7d = 58 − 23 = 35, so d = 5.",
          "a + 4d = 23, so a = 23 − 20 = 3.",
          "nth term = 3 + 5(n − 1) = 5n − 2.",
          "Check: 12th term = 60 − 2 = 58. ✓",
        ],
        solutions: [
          {
            label: "Simultaneous equations",
            steps: ["a + 4d = 23 and a + 11d = 58.", "Subtract: 7d = 35, d = 5; then a = 3.", "nth term = 5n − 2."],
          },
        ],
        commonError: "Dividing 35 by 12 − 5 + 1 = 8 instead of by the 7 gaps.",
        difficulty: "core",
        guideRef: "arithmetic-sequences",
        hints: ["How many steps of d separate the 5th and 12th terms?", "7d = 35. Now use the 5th term to find a.", "nth term = a + (n − 1)d — then simplify."],
        strategy: "Count the gaps",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "sequences-p3-q07",
        question: "The first three terms of an arithmetic sequence are\n\n    2x + 1,   5x − 2,   6x + 3\n\nFind the value of x and the 10th term of the sequence. Give x first.",
        answer: { type: "list", values: [4, 90], ordered: true, display: "x = 4, 10th term = 90" },
        traps: [
          {
            spec: { type: "list", values: [4, 99], ordered: true },
            feedback: "x = 4 is right, giving 9, 18, 27, … — but the 10th term is 9 + 9 × 9 = 90 (nine steps, not ten).",
          },
        ],
        solution: [
          "In an arithmetic sequence the differences are equal:",
          "(5x − 2) − (2x + 1) = (6x + 3) − (5x − 2)",
          "3x − 3 = x + 5, so 2x = 8, x = 4.",
          "Terms: 9, 18, 27 — so a = 9, d = 9.",
          "10th term = 9 + 9 × 9 = 90.",
        ],
        solutions: [
          {
            label: "Middle term is the mean",
            steps: ["The middle term of three consecutive terms is the average of the outer two.", "2(5x − 2) = (2x + 1) + (6x + 3) → 10x − 4 = 8x + 4 → x = 4."],
          },
        ],
        commonError: "Setting the terms equal to each other instead of setting the differences equal.",
        difficulty: "core",
        guideRef: "arithmetic-sequences",
        hints: ["What is the same about consecutive differences in an arithmetic sequence?", "Write the 2nd − 1st and the 3rd − 2nd, and set them equal.", "Once x = 4, list the terms and find a and d."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "sequences-p3-q08",
        question: "Here are the first four terms of an arithmetic sequence:\n\n    6,   13,   20,   27\n\nPriya says that 2025 is a term of this sequence.\n\nShow that Priya is wrong.",
        marks: 3,
        modelAnswer:
          "The common difference is 7, and 7n gives 7, 14, 21, 28, so the nth term is 7n − 1. If 2025 were a term then 7n − 1 = 2025, so 7n = 2026 and n = 2026 ÷ 7 = 289.43… This is not a whole number, so 2025 is not a term. (Check: the 289th term is 2022 and the 290th term is 2029.)",
        markScheme: [
          { point: "nth term 7n − 1", keywords: ["7n - 1", "7n-1", "7n − 1", "7n"] },
          { point: "Sets up 7n − 1 = 2025 and solves to n = 289.4…", keywords: ["2026", "289.4", "289.43", "= 2025"] },
          { point: "Concludes n is not an integer so 2025 is not a term", keywords: ["not a whole number", "not an integer", "not a term", "2022", "2029"] },
        ],
        commonError: "Showing only that 2025 is odd or 'doesn't look right' — you need the nth term and a non-integer n (or the two terms either side).",
        difficulty: "core",
        guideRef: "linear-nth-term",
        hints: ["Find the nth term first.", "Set the nth term equal to 2025 and solve for n.", "What kind of number must n be for a term to exist?"],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "sequences-p3-q09",
        question:
          "Wei Ling saves money each month for her university fund.\n\nShe saves $40 in the first month. Each month after that she saves $15 more than the month before.\n\nWork out the total amount she has saved after 2 years. Give your answer in dollars.",
        answer: { type: "number", value: 5100, display: "$5100" },
        traps: [
          {
            spec: { type: "number", value: 385 },
            feedback: "$385 is what she saves in the 24th month alone. The question asks for the **total** over 24 months — use the sum formula.",
          },
          {
            spec: { type: "number", value: 5280 },
            feedback: "You used 24 × 15 inside the bracket. The bracket is 2a + (n − 1)d = 80 + 23 × 15.",
          },
          {
            spec: { type: "number", value: 300 },
            feedback: "2 years is 24 months, not 2 terms. n = 24.",
          },
        ],
        solution: [
          "This is an arithmetic series with a = 40, d = 15, n = 24 (months in 2 years).",
          "{{S_24 = 24/2 (2 * 40 + 23 * 15)}}",
          "= 12 × (80 + 345) = 12 × 425 = $5100.",
        ],
        commonError: "Taking n = 2 (years) instead of n = 24 (months).",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: ["Is this asking for one term or a total?", "What are a, d and n? Watch the units of time.", "Use {{S_n = n/2 (2a + (n - 1)d)}} with n = 24."],
        strategy: "Use a formula",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "sequences-p3-q10",
        question: "The arithmetic series 7 + 11 + 15 + 19 + … is continued.\n\nHow many terms must be added for the sum to be exactly 900?",
        answer: { type: "number", value: 20 },
        traps: [
          {
            spec: { type: "number", value: -22.5 },
            feedback: "That root of the quadratic is negative — n counts terms, so it must be a positive whole number.",
          },
        ],
        solution: [
          "a = 7, d = 4: {{S_n = n/2 (14 + 4(n - 1)) = n/2 (4n + 10) = n(2n + 5)}}.",
          "n(2n + 5) = 900 → 2n² + 5n − 900 = 0.",
          "Factorise: (2n + 45)(n − 20) = 0, so n = 20 (n = −22.5 is impossible).",
          "Check: 20 × 45 = 900. ✓",
        ],
        solutions: [
          {
            label: "Quadratic formula",
            steps: ["{{n = (-5 + sqrt(25 + 7200))/4 = (-5 + 85)/4 = 20}}."],
          },
        ],
        commonError: "Trying to divide 900 by the common difference — the sum isn't linear in n.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: ["Write {{S_n}} in terms of n and set it equal to 900.", "You get a quadratic in n.", "2n² + 5n − 900 = 0 — factorise or use the formula, and reject the negative root."],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "sequences-p3-q11",
        question: "Here are the first four terms of a sequence:\n\n    {{3/5}},   {{5/8}},   {{7/11}},   {{9/14}}\n\nFind an expression, in terms of n, for the nth term of the sequence.",
        answer: { type: "expression", expr: "(2n+1)/(3n+2)", display: "{{(2n + 1)/(3n + 2)}}" },
        traps: [
          {
            spec: { type: "expression", expr: "(2n+3)/(3n+5)" },
            feedback: "Check n = 1: that gives {{5/8}}, the second term. The constants are the 'zero terms': numerator 3 − 2 = 1, denominator 5 − 3 = 2.",
          },
        ],
        solution: [
          "Numerators 3, 5, 7, 9: nth term 2n + 1.",
          "Denominators 5, 8, 11, 14: nth term 3n + 2.",
          "nth term = {{(2n + 1)/(3n + 2)}}.",
          "Check n = 4: {{9/14}}. ✓",
        ],
        commonError: "Trying to find one rule for the fraction's value instead of treating numerator and denominator as two separate linear sequences.",
        difficulty: "core",
        guideRef: "quadratic-sequences",
        hints: ["Treat the numerators and the denominators as two separate sequences.", "Each is linear — find each nth term.", "Put them together as a fraction."],
        strategy: "Split into cases",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "sequences-p3-q12",
        question: "The odd numbers 1, 3, 5, 7, … form an arithmetic sequence.\n\nProve that the sum of the first n odd numbers is n².",
        marks: 3,
        modelAnswer:
          "The sequence has first term a = 1 and common difference d = 2. Using {{S_n = n/2 (2a + (n - 1)d)}}: {{S_n = n/2 (2 + 2(n - 1)) = n/2 (2n) = n^2}}. So the sum of the first n odd numbers is n² for every positive integer n.",
        markScheme: [
          { point: "Identifies a = 1 and d = 2", keywords: ["a = 1", "d = 2", "a=1", "d=2"] },
          { point: "Substitutes into the sum formula: n/2(2 + 2(n − 1))", keywords: ["n/2", "2 + 2(n - 1)", "2(n-1)", "2n - 2"] },
          { point: "Simplifies to n/2 × 2n = n²", keywords: ["2n", "n^2", "n²", "n squared"] },
        ],
        solutions: [
          {
            label: "Gauss pairing",
            steps: [
              "The nth odd number is 2n − 1.",
              "Pair the first with the last: 1 + (2n − 1) = 2n; every pair adds to 2n.",
              "There are {{n/2}} pairs, so the sum is {{n/2 * 2n = n^2}}.",
            ],
          },
        ],
        commonError: "Checking a few values (1, 4, 9, 16) — that shows a pattern but is not a proof.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: ["What are a and d for the odd numbers?", "Substitute into {{S_n = n/2 (2a + (n - 1)d)}}.", "Simplify the bracket first: 2 + 2n − 2."],
        strategy: "Use a formula",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "sequences-p3-q13",
        question:
          "The nth term of a quadratic sequence is an² + bn + c.\n\nThe 1st term is 2, the 2nd term is 9 and the 5th term is 54.\n\nFind the values of a, b and c. Give them in the order a, b, c.",
        answer: { type: "list", values: [2, 1, -1], ordered: true, display: "a = 2, b = 1, c = −1" },
        traps: [
          {
            spec: { type: "list", values: [2, 1, 1], ordered: true },
            feedback: "Check the 1st term: 2 + 1 + 1 = 4, not 2. Re-solve for c using a + b + c = 2.",
          },
        ],
        solution: [
          "n = 1: a + b + c = 2 … (1)",
          "n = 2: 4a + 2b + c = 9 … (2)",
          "n = 5: 25a + 5b + c = 54 … (3)",
          "(2) − (1): 3a + b = 7. (3) − (2): 21a + 3b = 45, i.e. 7a + b = 15.",
          "Subtract: 4a = 8, so a = 2; then b = 7 − 6 = 1; c = 2 − 2 − 1 = −1.",
          "Check: n = 5 gives 50 + 5 − 1 = 54. ✓",
        ],
        commonError: "Assuming the terms are consecutive and using second differences — the 3rd and 4th terms are missing, so differences won't work directly.",
        difficulty: "challenge",
        guideRef: "quadratic-sequences",
        hints: [
          "You can't use second differences — the terms aren't consecutive. What *can* you write down?",
          "Substitute n = 1, 2 and 5 to get three equations in a, b, c.",
          "Subtract pairs of equations to eliminate c.",
          "3a + b = 7 and 7a + b = 15 — subtract again.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "sequences-p3-q14",
        question: "Work out the sum of all the whole numbers from 1 to 300 inclusive that are **not** multiples of 4.",
        answer: { type: "number", value: 33750 },
        traps: [
          {
            spec: { type: "number", value: 45150 },
            feedback: "That's the sum of **all** the numbers 1 to 300. Now subtract the multiples of 4.",
          },
          {
            spec: { type: "number", value: 11400 },
            feedback: "That's the sum of the multiples of 4 — the numbers you want to *exclude*. Subtract it from the total.",
          },
        ],
        solution: [
          "Sum of 1 to 300: {{300/2 (1 + 300) = 150 * 301 = 45150}}.",
          "Multiples of 4: 4, 8, …, 300 — that is 75 terms.",
          "Their sum: {{75/2 (4 + 300) = 75 * 152 = 11400}}.",
          "Required sum = 45150 − 11400 = 33750.",
        ],
        solutions: [
          {
            label: "Group in fours",
            steps: [
              "Each block 4k + 1, 4k + 2, 4k + 3 (k = 0 to 74) contributes 12k + 6.",
              "Sum = {{12 * (0 + 1 + ... + 74) + 6 * 75 = 12 * 2775 + 450 = 33750}}.",
            ],
          },
        ],
        commonError: "Miscounting the multiples of 4 (there are 300 ÷ 4 = 75).",
        difficulty: "challenge",
        guideRef: "arithmetic-series",
        hints: ["Is it easier to add the numbers you want, or to subtract the ones you don't?", "Find the sum of 1 to 300, then the sum of 4 + 8 + … + 300.", "How many multiples of 4 are there up to 300?"],
        strategy: "Use the complement",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "sequences-p3-q15",
        question:
          "The nth term of a sequence is {{u_n = (5n - 2)/(2n + 3)}}.\n\n(a) Find the limiting value L of {{u_n}} as n → ∞, showing your method.\n\n(b) Prove that every term of the sequence is less than L.",
        marks: 4,
        modelAnswer:
          "(a) Divide the numerator and denominator by n: {{u_n = (5 - 2/n)/(2 + 3/n)}}. As n → ∞, {{2/n}} → 0 and {{3/n}} → 0, so {{u_n}} → {{5/2}}. L = {{5/2}}.\n\n(b) {{5/2 - u_n = (5(2n + 3) - 2(5n - 2))/(2(2n + 3)) = (10n + 15 - 10n + 4)/(2(2n + 3)) = 19/(2(2n + 3))}}. For every positive integer n, 2(2n + 3) > 0, so this difference is positive. Hence {{u_n < 5/2}} for every n.",
        markScheme: [
          { point: "Divides through by n: (5 − 2/n)/(2 + 3/n)", keywords: ["divide by n", "2/n", "3/n", "÷ n"] },
          { point: "Limit 5/2 (2/n and 3/n tend to 0)", keywords: ["5/2", "2.5", "tends to 0", "→ 0"] },
          { point: "Forms 5/2 − u_n over a common denominator = 19/(2(2n + 3))", keywords: ["19", "2(2n + 3)", "4n + 6", "common denominator"] },
          { point: "Argues numerator and denominator positive, so u_n < 5/2", keywords: ["positive", "> 0", "less than", "always"] },
        ],
        commonError: "Substituting a big value like n = 1000 and stopping — that suggests the limit but does not prove anything.",
        difficulty: "challenge",
        guideRef: "limiting-values",
        hints: [
          "What happens to each term when n is huge? Which parts dominate?",
          "Divide every term on top and bottom by n.",
          "For (b), look at {{5/2 - u_n}} and write it as one fraction.",
          "Is the fraction you get positive for every n ≥ 1?",
        ],
        strategy: "Consider extremes",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "sequences-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "sequences-p4-q01",
        question: "Here are the first five terms of an arithmetic sequence:\n\n    41,   35,   29,   23,   17\n\nFind an expression, in terms of n, for the nth term of this sequence.",
        answer: { type: "expression", expr: "47-6n", display: "47 − 6n" },
        traps: [
          {
            spec: { type: "expression", expr: "6n+35" },
            feedback: "The sequence is *decreasing*, so the coefficient of n is negative: −6n. Check n = 1: 6 + 35 = 41 but n = 2 gives 47, not 35.",
          },
          {
            spec: { type: "expression", expr: "41-6n" },
            feedback: "Check n = 1: 41 − 6 = 35, which is the 2nd term. The constant is the zero term: 41 + 6 = 47.",
          },
        ],
        solution: ["The terms go down by 6, so the nth term starts −6n.", "−6n gives −6, −12, −18, …; add 47 to get 41, 35, 29, …", "nth term = 47 − 6n."],
        commonError: "Writing +6n for a decreasing sequence.",
        difficulty: "warmup",
        guideRef: "linear-nth-term",
        hints: ["The difference is −6, so the rule contains −6n.", "What is the term before 41 (the zeroth term)?"],
        strategy: "Find a pattern",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "sequences-p4-q02",
        question:
          "Here are the first three patterns in a sequence made from matchsticks.\n\nPattern number n has 3n + 1 matchsticks.\n\nHana has 100 matchsticks. What is the largest pattern number she can make with them?",
        diagram: `<svg viewBox="0 0 330 110" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pattern 1 is one square of 4 matchsticks, pattern 2 is two joined squares of 7 matchsticks, pattern 3 is three joined squares of 10 matchsticks"><rect width="330" height="110" fill="#ffffff"/><g fill="none" stroke="#334155" stroke-width="3" stroke-linecap="round"><rect x="20" y="30" width="36" height="36"/><rect x="90" y="30" width="36" height="36"/><rect x="126" y="30" width="36" height="36"/><rect x="196" y="30" width="36" height="36"/><rect x="232" y="30" width="36" height="36"/><rect x="268" y="30" width="36" height="36"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="38" y="88">Pattern 1</text><text x="126" y="88">Pattern 2</text><text x="250" y="88">Pattern 3</text><text x="38" y="102">4 sticks</text><text x="126" y="102">7 sticks</text><text x="250" y="102">10 sticks</text></g></svg>`,
        answer: { type: "number", value: 33 },
        traps: [
          {
            spec: { type: "number", value: 25 },
            feedback: "You divided 100 by 4, as if every square needed 4 new sticks. Joined squares share a side, so each new square needs only 3: solve 3n + 1 ≤ 100.",
          },
          {
            spec: { type: "number", value: 100 },
            feedback: "100 is the number of matchsticks. Solve 3n + 1 ≤ 100 for the pattern number n.",
          },
        ],
        solution: ["Need 3n + 1 ≤ 100.", "3n ≤ 99, so n ≤ 33.", "Pattern 33 uses 3 × 33 + 1 = 100 sticks exactly, so the largest is pattern 33."],
        commonError: "Counting 4 sticks per square and ignoring the shared sides.",
        difficulty: "warmup",
        guideRef: "linear-nth-term",
        hints: ["Set up an inequality: sticks needed ≤ 100.", "Solve 3n + 1 ≤ 100."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "sequences-p4-q03",
        question:
          "The first two terms of an arithmetic sequence are\n\n    {{2 + sqrt(3)}}   and   {{5 + 3sqrt(3)}}\n\nFind the 10th term of the sequence. Give your answer in the form {{a + b sqrt(3)}}, where a and b are integers.",
        answer: { type: "expression", expr: "29+19sqrt(3)", form: "surd", display: "{{29 + 19 sqrt(3)}}" },
        traps: [
          {
            spec: { type: "expression", expr: "32+21sqrt(3)" },
            feedback: "That's 10 steps of d. From the 1st to the 10th term there are 9 steps: {{2 + sqrt(3) + 9(3 + 2sqrt(3))}}.",
          },
        ],
        solution: [
          "d = {{(5 + 3sqrt(3)) - (2 + sqrt(3)) = 3 + 2sqrt(3)}}.",
          "10th term = a + 9d = {{2 + sqrt(3) + 9(3 + 2sqrt(3))}}",
          "= {{2 + sqrt(3) + 27 + 18sqrt(3) = 29 + 19sqrt(3)}}.",
        ],
        commonError: "Using 10d instead of 9d, or treating the surd parts and whole-number parts inconsistently.",
        difficulty: "warmup",
        guideRef: "arithmetic-sequences",
        hints: ["Find d by subtracting the first term from the second.", "Use a + 9d, collecting the whole numbers and the {{sqrt(3)}} terms separately."],
        strategy: "Use a formula",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "sequences-p4-q04",
        question:
          "A concert hall has 25 rows of seats.\n\nThere are 18 seats in the first row. Each row after the first has 2 more seats than the row in front of it.\n\nWork out the total number of seats in the hall.",
        answer: { type: "number", value: 1050 },
        traps: [
          {
            spec: { type: "number", value: 66 },
            feedback: "66 is the number of seats in the **last row**. Add up all 25 rows.",
          },
          {
            spec: { type: "number", value: 1100 },
            feedback: "You used 25 × 2 inside the bracket. The last row is 18 + 24 × 2 = 66, so the total is {{25/2 (18 + 66)}}.",
          },
        ],
        solution: [
          "a = 18, d = 2, n = 25.",
          "Last row: 18 + 24 × 2 = 66 seats.",
          "Total = {{25/2 (18 + 66) = 25/2 * 84 = 1050}}.",
        ],
        commonError: "Giving the number of seats in the last row instead of the total.",
        difficulty: "warmup",
        guideRef: "arithmetic-series",
        hints: ["Is this one term or a sum?", "Find the seats in row 25, then use {{S_n = n/2 (a + l)}}."],
        strategy: "Use a formula",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "written",
        id: "sequences-p4-q05",
        question: "An arithmetic series has first term 5 and common difference 3.\n\nShow that the sum of the first n terms of the series is {{n/2 (3n + 7)}}.",
        marks: 3,
        modelAnswer:
          "Using {{S_n = n/2 (2a + (n - 1)d)}} with a = 5 and d = 3: {{S_n = n/2 (10 + 3(n - 1))}} = {{n/2 (10 + 3n - 3)}} = {{n/2 (3n + 7)}}, as required.",
        markScheme: [
          { point: "Correct formula with a = 5 and d = 3 substituted", keywords: ["2a", "10", "a = 5", "d = 3", "n/2"] },
          { point: "Expands 3(n − 1) = 3n − 3", keywords: ["3n - 3", "3n − 3", "3(n - 1)"] },
          { point: "Simplifies to n/2(3n + 7)", keywords: ["3n + 7", "3n+7"] },
        ],
        commonError: "Writing 2a + nd, which gives n/2(3n + 10).",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: ["Start from {{S_n = n/2 (2a + (n - 1)d)}}.", "Substitute a = 5 and d = 3, then expand the bracket.", "10 + 3n − 3 = ?"],
        strategy: "Use a formula",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "sequences-p4-q06",
        question: "The sum of the first n terms of the arithmetic series\n\n    5 + 8 + 11 + 14 + …\n\nis 1455.\n\nFind the value of n.",
        answer: { type: "number", value: 30 },
        traps: [
          {
            spec: { type: "number", value: -32.33 },
            feedback: "That root is negative — n counts terms, so reject it.",
          },
        ],
        solution: [
          "a = 5, d = 3, so {{S_n = n/2 (3n + 7)}}.",
          "{{n/2 (3n + 7) = 1455}} → n(3n + 7) = 2910 → 3n² + 7n − 2910 = 0.",
          "Factorise: (n − 30)(3n + 97) = 0, so n = 30 (the other root is negative).",
          "Check: {{30/2 * 97 = 15 * 97 = 1455}}. ✓",
        ],
        solutions: [
          {
            label: "Quadratic formula",
            steps: ["{{n = (-7 + sqrt(49 + 34920))/6 = (-7 + 187)/6 = 30}}."],
          },
        ],
        commonError: "Forgetting to multiply both sides by 2 before forming the quadratic.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: ["Write {{S_n}} in terms of n (you may have just done this!).", "Set it equal to 1455 and clear the fraction.", "Solve 3n² + 7n − 2910 = 0 and reject the negative root."],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "sequences-p4-q07",
        question:
          "The 3rd term of an arithmetic sequence is 19.\nThe sum of the 6th term and the 8th term is 74.\n\nFind the first term and the common difference. Give the first term first.",
        answer: { type: "list", values: [10, 4.5], ordered: true, display: "a = 10, d = 4.5" },
        traps: [
          {
            spec: { type: "list", values: [4.5, 10], ordered: true },
            feedback: "Right numbers, wrong order — the first term is 10 and the common difference is 4.5.",
          },
        ],
        solution: [
          "3rd term: a + 2d = 19 … (1)",
          "6th + 8th: (a + 5d) + (a + 7d) = 74, so 2a + 12d = 74, i.e. a + 6d = 37 … (2)",
          "(2) − (1): 4d = 18, so d = 4.5.",
          "a = 19 − 9 = 10.",
          "Check: 6th = 32.5, 8th = 41.5, sum 74. ✓",
        ],
        solutions: [
          {
            label: "Use the 7th term",
            steps: ["The 7th term is the mean of the 6th and 8th: 74 ÷ 2 = 37.", "From the 3rd to the 7th term: 4d = 37 − 19 = 18, d = 4.5.", "a = 19 − 2 × 4.5 = 10."],
          },
        ],
        commonError: "Writing the 6th term as a + 6d (it is a + 5d).",
        difficulty: "core",
        guideRef: "arithmetic-sequences",
        hints: ["Write each term in the form a + (n − 1)d.", "You get two equations in a and d.", "a + 2d = 19 and a + 6d = 37 — subtract."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "sequences-p4-q08",
        question:
          "A tunnel-boring machine is digging a new MRT tunnel.\n\nOn day 1 it bores 12 m of tunnel. Each day it bores 1.5 m more than the day before.\n\nOn which day does it first bore more than 50 m in a single day?",
        answer: { type: "number", value: 27 },
        traps: [
          {
            spec: { type: "number", value: 26 },
            feedback: "On day 26 it bores 12 + 25 × 1.5 = 49.5 m — not yet more than 50 m. Round n **up**.",
          },
          {
            spec: { type: "number", value: 51 },
            feedback: "51 m is how much it bores on that day. The question asks *which day*.",
          },
        ],
        solution: [
          "Day n: 12 + 1.5(n − 1) metres.",
          "12 + 1.5(n − 1) > 50 → 1.5(n − 1) > 38 → n − 1 > 25.33…",
          "n > 26.33…, so the first such day is day 27.",
          "Check: day 26 → 49.5 m; day 27 → 51 m. ✓",
        ],
        commonError: "Using 1.5n instead of 1.5(n − 1), or rounding down.",
        difficulty: "core",
        guideRef: "arithmetic-sequences",
        hints: ["Write an expression for the distance bored on day n.", "Set up the inequality: day-n distance > 50.", "n must be a whole number — check the days either side."],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "sequences-p4-q09",
        question:
          "Kenji is training for a marathon.\n\nIn week 1 he runs a total of 5 km. Each week he runs 0.8 km more than in the week before.\n\nIn which week does his **total** distance, since the start of training, first exceed 200 km?",
        answer: { type: "number", value: 18 },
        traps: [
          {
            spec: { type: "number", value: 17 },
            feedback: "After 17 weeks the total is 193.8 km — not yet over 200. Round n **up**.",
          },
          {
            spec: { type: "number", value: 245 },
            feedback: "That's the week when a *single week's* run would exceed 200 km. The question asks about the running total — use {{S_n}}.",
          },
        ],
        solution: [
          "a = 5, d = 0.8: {{S_n = n/2 (10 + 0.8(n - 1)) = n(4.6 + 0.4n)}}.",
          "0.4n² + 4.6n > 200 → n² + 11.5n − 500 > 0.",
          "Positive root: {{n = (-11.5 + sqrt(132.25 + 2000))/2 = 17.34...}}",
          "So the first whole week is week 18.",
          "Check: {{S_17 = 193.8}} km, {{S_18 = 212.4}} km. ✓",
        ],
        commonError: "Solving for the week when a single week's distance passes 200 km instead of the cumulative sum.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: ["'Total distance' means you need a sum, not a term.", "Write {{S_n}} in terms of n and set {{S_n > 200}}.", "Solve the quadratic, then round to the right whole week and check both neighbours."],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "sequences-p4-q10",
        question: "Here are the first five terms of a quadratic sequence:\n\n    0,   5,   12,   21,   32\n\nWhich term of the sequence is equal to 140?",
        answer: { type: "number", value: 11 },
        traps: [
          {
            spec: { type: "number", value: -13 },
            feedback: "n is a position in the sequence, so it must be a positive integer. Reject n = −13.",
          },
        ],
        solution: [
          "First differences: 5, 7, 9, 11. Second differences: 2, so the nth term starts n².",
          "Sequence − n²: 0 − 1, 5 − 4, 12 − 9, 21 − 16, 32 − 25 = −1, 1, 3, 5, 7, which is 2n − 3.",
          "nth term = n² + 2n − 3.",
          "n² + 2n − 3 = 140 → n² + 2n − 143 = 0 → (n + 13)(n − 11) = 0.",
          "n = 11 (reject −13). The 11th term is 140.",
        ],
        solutions: [
          {
            label: "Spot the factorisation",
            steps: ["n² + 2n − 3 = (n − 1)(n + 3).", "Look for consecutive-ish factors of 140 that differ by 4: 10 × 14 = 140, so n − 1 = 10, n = 11."],
          },
        ],
        commonError: "Using half the second difference wrongly (coefficient of n² is second difference ÷ 2 = 1, not 2).",
        difficulty: "core",
        guideRef: "quadratic-sequences",
        hints: ["Find the second difference — what does it tell you about the n² term?", "Subtract n² from each term and find the linear part.", "Set your nth term equal to 140 and solve."],
        strategy: "Find a pattern",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "sequences-p4-q11",
        question: "Here are the first four terms of a sequence:\n\n    {{1/4}},   {{4/7}},   {{9/10}},   {{16/13}}\n\nFind an expression, in terms of n, for the nth term of the sequence.",
        answer: { type: "expression", expr: "n^2/(3n+1)", display: "{{n^2/(3n + 1)}}" },
        traps: [
          {
            spec: { type: "expression", expr: "n^2/(3n+4)" },
            feedback: "Check n = 1: {{1/7}}, not {{1/4}}. The denominators 4, 7, 10, 13 have nth term 3n + 1.",
          },
          {
            spec: { type: "expression", expr: "(2n-1)/(3n+1)" },
            feedback: "The numerators 1, 4, 9, 16 are not linear — their differences are 3, 5, 7. They are the square numbers, n².",
          },
        ],
        solution: [
          "Numerators 1, 4, 9, 16 are the square numbers: n².",
          "Denominators 4, 7, 10, 13 go up by 3: 3n + 1.",
          "nth term = {{n^2/(3n + 1)}}.",
        ],
        commonError: "Assuming the numerators are linear because the denominators are.",
        difficulty: "core",
        guideRef: "quadratic-sequences",
        hints: ["Split into numerators and denominators.", "Do the numerators have a constant first difference? If not, recognise them.", "Combine the two nth terms into a fraction."],
        strategy: "Split into cases",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "sequences-p4-q12",
        question: "Prove that the sum of any five consecutive terms of an arithmetic sequence is equal to 5 times the middle term of the five.",
        marks: 3,
        modelAnswer:
          "Let the middle term be m and the common difference be d. Then the five consecutive terms are m − 2d, m − d, m, m + d, m + 2d. Their sum is (m − 2d) + (m − d) + m + (m + d) + (m + 2d) = 5m, because the d terms cancel (−2d − d + d + 2d = 0). So the sum is 5 times the middle term.",
        markScheme: [
          { point: "Writes five general consecutive terms (e.g. m − 2d, …, m + 2d or a, a + d, …, a + 4d)", keywords: ["m - 2d", "m − 2d", "a + 4d", "a+4d", "m + 2d"] },
          { point: "Adds them correctly to get 5m (or 5a + 10d)", keywords: ["5m", "5a + 10d", "5a+10d"] },
          { point: "Links to middle term: 5m, or 5(a + 2d) where a + 2d is the middle term", keywords: ["5(a + 2d)", "5(a+2d)", "middle term", "a + 2d"] },
        ],
        solutions: [
          {
            label: "Start from the first term",
            steps: ["Terms a, a + d, a + 2d, a + 3d, a + 4d.", "Sum = 5a + 10d = 5(a + 2d).", "The middle (3rd) term is a + 2d, so the sum is 5 × middle term."],
          },
        ],
        commonError: "Using a numerical example such as 1, 2, 3, 4, 5 — an example is not a proof.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: ["Use letters, not numbers: call the common difference d.", "Centring on the middle term makes the algebra neatest: m − 2d, m − d, m, …", "What happens to the d terms when you add?"],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "sequences-p4-q13",
        question:
          "Here are the first five terms of a quadratic sequence:\n\n    6,   15,   28,   45,   66\n\n(a) Show that the nth term of the sequence is 2n² + 3n + 1.\n\n(b) Hence prove that no term of the sequence is a prime number.",
        marks: 4,
        modelAnswer:
          "(a) First differences: 9, 13, 17, 21. Second differences: 4, 4, 4. Half of 4 is 2, so the nth term starts 2n². 2n² gives 2, 8, 18, 32, 50. Subtracting: 6 − 2 = 4, 15 − 8 = 7, 28 − 18 = 10, 45 − 32 = 13, 66 − 50 = 16, which is 3n + 1. So the nth term is 2n² + 3n + 1.\n\n(b) 2n² + 3n + 1 = (2n + 1)(n + 1). For every positive integer n, 2n + 1 ≥ 3 and n + 1 ≥ 2, so every term is the product of two whole numbers each greater than 1. Therefore no term is prime.",
        markScheme: [
          { point: "Second difference 4, so coefficient of n² is 2", keywords: ["second difference", "4", "2n^2", "2n²"] },
          { point: "Remaining linear part 4, 7, 10, … = 3n + 1", keywords: ["3n + 1", "3n+1", "4, 7, 10"] },
          { point: "Factorises 2n² + 3n + 1 = (2n + 1)(n + 1)", keywords: ["(2n + 1)(n + 1)", "(2n+1)(n+1)", "factorise"] },
          { point: "Both factors greater than 1 for n ≥ 1, so never prime", keywords: ["greater than 1", "both factors", "not prime", "never prime", "> 1"] },
        ],
        commonError: "In (b), checking the five listed terms only — you must show it for *every* n, which the factorisation does.",
        difficulty: "challenge",
        guideRef: "quadratic-sequences",
        hints: [
          "For (a), find the second difference and halve it.",
          "Subtract 2n² from each term — what linear sequence is left?",
          "For (b), a prime has only two factors. Can 2n² + 3n + 1 be factorised?",
          "(2n + 1)(n + 1): how big is each factor when n ≥ 1?",
        ],
        strategy: "Find a pattern",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "sequences-p4-q14",
        question:
          "The nth term of a sequence is {{u_n = (6n + 1)/(3n - 1)}}.\n\nAs n gets large, {{u_n}} approaches the limiting value 2.\n\nFind the smallest value of n for which {{u_n}} is less than 2.01.",
        answer: { type: "number", value: 101 },
        traps: [
          {
            spec: { type: "number", value: 100 },
            feedback: "Check n = 100: {{u_100 - 2 = 3/299}} ≈ 0.01003, which is still more than 0.01. n must be **greater** than 100.33…",
          },
        ],
        solution: [
          "{{u_n - 2 = (6n + 1 - 2(3n - 1))/(3n - 1) = 3/(3n - 1)}}.",
          "Need {{3/(3n - 1) < 0.01}}, i.e. 3n − 1 > 300.",
          "3n > 301, so n > 100.33…",
          "Smallest integer: n = 101. (Check: {{3/302}} ≈ 0.00993 < 0.01 ✓; {{3/299}} ≈ 0.01003 ✗.)",
        ],
        solutions: [
          {
            label: "Solve the inequality directly",
            steps: [
              "{{(6n + 1)/(3n - 1) < 2.01}} with 3n − 1 > 0:",
              "6n + 1 < 2.01(3n − 1) = 6.03n − 2.01",
              "3.01 < 0.03n, so n > 100.33…, giving n = 101.",
            ],
          },
        ],
        commonError: "Rounding 100.33 down to 100.",
        difficulty: "challenge",
        guideRef: "limiting-values",
        hints: [
          "How far is {{u_n}} from 2? Work out {{u_n - 2}} as a single fraction.",
          "You should get {{3/(3n - 1)}}. When is this less than 0.01?",
          "Solve for n and remember n is a whole number.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "sequences-p4-q15",
        question:
          "An arithmetic series has first term 11 and common difference d.\n\nThe sum of the first 20 terms of the series is 3 times the sum of the first 10 terms.\n\nFind the value of d.",
        answer: { type: "number", value: 2 },
        traps: [
          {
            spec: { type: "number", value: 0 },
            feedback: "If d = 0 then {{S_20 = 220}} and {{S_10 = 110}} — only twice, not 3 times. Set up {{S_20 = 3S_10}} with the formula.",
          },
        ],
        solution: [
          "{{S_20 = 20/2 (22 + 19d) = 10(22 + 19d) = 220 + 190d}}.",
          "{{S_10 = 10/2 (22 + 9d) = 5(22 + 9d) = 110 + 45d}}.",
          "220 + 190d = 3(110 + 45d) = 330 + 135d.",
          "55d = 110, so d = 2.",
          "Check: {{S_10 = 200}}, {{S_20 = 600}} = 3 × 200. ✓",
        ],
        commonError: "Writing 3 × S₁₀ as 3 × 10 × … instead of multiplying the whole sum by 3.",
        difficulty: "challenge",
        guideRef: "arithmetic-series",
        hints: [
          "Write {{S_20}} and {{S_10}} in terms of d.",
          "Form the equation {{S_20 = 3S_10}}.",
          "Expand and collect the d terms.",
        ],
        strategy: "Introduce a variable",
      },
    ],
  },
];
