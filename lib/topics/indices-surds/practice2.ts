// ---------------------------------------------------------------------------
// Indices, Standard Form & Surds — Practice Papers 3 and 4.
// Paper 3: mixed practice across every section, with three written proofs.
// Paper 4: exam style, modelled on Edexcel 4MA1 Higher questions.
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "indices-surds-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "indices-surds-p3-q01",
        question: "Simplify {{p^7 * p^4 / p^3}}.",
        answer: { type: "expression", expr: "p^8", form: "simplified", display: "{{p^8}}" },
        traps: [
          {
            spec: { type: "expression", expr: "p^25" },
            feedback: "{{p^7 * p^4}} is {{p^11}}, not {{p^28}}. When you **multiply** powers of the same base you **add** the indices.",
          },
          {
            spec: { type: "expression", expr: "p^14" },
            feedback: "When you **divide** powers of the same base you **subtract** the indices: {{p^11 / p^3 = p^8}}.",
          },
        ],
        solution: [
          "Multiplying: add the indices. {{p^7 * p^4 = p^(7+4) = p^11}}.",
          "Dividing: subtract the indices. {{p^11 / p^3 = p^(11-3) = p^8}}.",
        ],
        commonError: "Multiplying the indices (7 × 4 = 28) instead of adding them.",
        difficulty: "warmup",
        guideRef: "index-laws",
        hints: ["Same base: multiplying means add the powers, dividing means subtract them.", "{{p^7 * p^4 = p^11}}. Now divide by {{p^3}}."],
        strategy: "Use the index laws",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "indices-surds-p3-q02",
        question: "Find the value of {{1000^(-1/3)}}. Give your answer as a fraction.",
        answer: { type: "fraction", n: 1, d: 10, simplest: true, allowDecimal: true, display: "{{1/10}}" },
        traps: [
          { spec: { type: "number", value: -10 }, feedback: "A negative index does **not** make the answer negative. It means *one over*: {{1000^(-1/3) = 1/1000^(1/3)}}." },
          { spec: { type: "number", value: -333.3, tolerance: 0.5 }, feedback: "An index is not a multiplier. The power {{1/3}} means *cube root*, and the minus sign means *reciprocal*." },
        ],
        solution: [
          "The minus sign means reciprocal: {{1000^(-1/3) = 1/1000^(1/3)}}.",
          "The power {{1/3}} means cube root: {{1000^(1/3) = cbrt(1000) = 10}}.",
          "So {{1000^(-1/3) = 1/10}}.",
        ],
        commonError: "Treating the negative index as a negative number, giving −10.",
        difficulty: "warmup",
        guideRef: "negative-fractional-indices",
        hints: ["Deal with the two parts of the index separately: the minus sign and the {{1/3}}.", "Minus → one over. A third → cube root."],
        strategy: "Split the index into parts",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "indices-surds-p3-q03",
        question:
          "A strand of spider silk is about 0.0000035 m thick. Write 0.0000035 in standard form.",
        answer: { type: "number", value: 3.5e-6, standardForm: true, display: "{{3.5 * 10^(-6)}} m" },
        traps: [
          { spec: { type: "number", value: 3.5e-7, standardForm: true }, feedback: "Count the jumps carefully: the decimal point moves 6 places right to get from 0.0000035 to 3.5, so the power is −6." },
          { spec: { type: "number", value: 3.5e6, standardForm: true }, feedback: "The number is much smaller than 1, so the power of 10 must be **negative**." },
        ],
        solution: [
          "Put the decimal point after the first non-zero digit: 3.5.",
          "From 0.0000035 to 3.5 the point moves 6 places to the right.",
          "So 0.0000035 = {{3.5 * 10^(-6)}}.",
        ],
        commonError: "Counting the zeros (5 of them after the point) instead of the number of places the point moves.",
        difficulty: "warmup",
        guideRef: "standard-form",
        hints: ["Is the number bigger or smaller than 1? That decides the sign of the power.", "How many places must the decimal point move to give 3.5?"],
        strategy: "Count the jumps",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "indices-surds-p3-q04",
        question: "Find the value of n such that {{3^n = 1/81}}.",
        answer: { type: "number", value: -4, display: "n = −4" },
        traps: [
          { spec: { type: "number", value: 4 }, feedback: "{{3^4 = 81}}, but you want {{1/81}} — the reciprocal. Reciprocals come from **negative** indices." },
          { spec: { type: "number", value: -27 }, feedback: "81 is {{3^4}}, not 3 × 27 as a power. Write 81 as a power of 3 first." },
        ],
        solution: ["{{81 = 3^4}}.", "{{1/81 = 1/3^4 = 3^(-4)}}.", "So n = −4."],
        commonError: "Writing n = 4 and forgetting that one over means a negative power.",
        difficulty: "warmup",
        guideRef: "index-equations",
        hints: ["Write 81 as a power of 3.", "How do you write {{1/3^4}} as a single power of 3?"],
        strategy: "Write both sides with the same base",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "indices-surds-p3-q05",
        question: "Simplify fully {{(3m^2 n^3)^3 / (9m^4 n)}}.",
        answer: { type: "expression", expr: "3m^2n^8", form: "simplified", display: "{{3m^2 n^8}}" },
        traps: [
          {
            spec: { type: "expression", expr: "m^2n^8/3" },
            feedback: "The power 3 applies to **everything** inside the bracket, including the 3: {{3^3 = 27}}, so the top is {{27m^6 n^9}}.",
          },
          { spec: { type: "expression", expr: "3mn^5" }, feedback: "Power of a power: **multiply** the indices. {{(m^2)^3 = m^6}}, not {{m^5}}; {{(n^3)^3 = n^9}}, not {{n^6}}." },
        ],
        solution: [
          "Raise every factor in the bracket to the power 3: {{(3m^2 n^3)^3 = 3^3 m^6 n^9 = 27m^6 n^9}}.",
          "Divide the numbers: 27 ÷ 9 = 3.",
          "Subtract the indices: {{m^(6-4) = m^2}} and {{n^(9-1) = n^8}}.",
          "Answer: {{3m^2 n^8}}.",
        ],
        commonError: "Forgetting to raise the coefficient 3 to the power 3, or adding indices instead of multiplying them.",
        difficulty: "core",
        guideRef: "index-laws",
        hints: [
          "Deal with the bracket first. What happens to each of 3, {{m^2}} and {{n^3}}?",
          "Power of a power: multiply the indices, so {{(m^2)^3 = m^6}}. And {{3^3 = 27}}.",
          "Now divide: numbers with numbers, m's with m's, n's with n's. Remember n means {{n^1}}.",
        ],
        strategy: "Numbers, then each letter",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "indices-surds-p3-q06",
        question:
          "A grain of sand from a Sentosa beach has a mass of about {{6.7 * 10^(-4)}} g. Ethan fills a bucket with 2.5 kg of this sand.\n\nEstimate the number of grains of sand in the bucket. Give your answer in standard form, correct to 3 significant figures.",
        answer: { type: "number", value: 3730000, standardForm: true, display: "{{3.73 * 10^6}} grains" },
        traps: [
          { spec: { type: "number", value: 3730, standardForm: true }, feedback: "Check the units: the grain's mass is in **grams**, so change 2.5 kg into 2500 g first." },
          { spec: { type: "number", value: 1.675, tolerance: 0.001 }, feedback: "You've multiplied. To find how many grains, divide the total mass by the mass of one grain." },
        ],
        solution: [
          "Same units first: 2.5 kg = 2500 g = {{2.5 * 10^3}} g.",
          "Number of grains = {{(2.5 * 10^3) / (6.7 * 10^(-4))}}.",
          "= 3 731 343… ≈ {{3.73 * 10^6}} grains (3 s.f.).",
        ],
        commonError: "Forgetting to convert kilograms to grams, which makes the answer 1000 times too small.",
        difficulty: "core",
        guideRef: "standard-form",
        hints: ["Are the two masses in the same units?", "How many grains? Divide the total mass by the mass of one grain.", "Dividing by {{10^(-4)}} is the same as multiplying by {{10^4}}."],
        strategy: "Check the units",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "written",
        id: "indices-surds-p3-q07",
        question: "Without using a calculator, show that {{16^(3/4) - 8^(-2/3) = 31/4}}.\n\nShow your working clearly.",
        marks: 3,
        modelAnswer:
          "{{16^(3/4) = (root4(16))^3}}: the fourth root of 16 is 2, and {{2^3 = 8}}.\n\n{{8^(-2/3) = 1/8^(2/3)}}. The cube root of 8 is 2, and {{2^2 = 4}}, so {{8^(-2/3) = 1/4}}.\n\n{{8 - 1/4 = 32/4 - 1/4 = 31/4}}, as required.",
        markScheme: [
          { point: "16^(3/4) = 8 (fourth root of 16 is 2, then cubed)", keywords: ["8", "2^3", "fourth root", "2 cubed"] },
          { point: "8^(−2/3) = 1/4 (cube root 2, squared 4, reciprocal)", keywords: ["1/4", "0.25", "reciprocal", "cube root", "one over"] },
          { point: "8 − 1/4 = 31/4 with working shown", keywords: ["32/4", "31/4", "7.75", "7 3/4"] },
        ],
        commonError: "Calculating {{16^(3/4)}} as 16 × {{3/4}} = 12. A fractional index is a root and a power, not a multiplier.",
        difficulty: "core",
        guideRef: "negative-fractional-indices",
        hints: [
          "For {{a^(m/n)}}: take the nth root first (to keep the numbers small), then raise to the power m.",
          "What is the fourth root of 16? What is the cube root of 8?",
          "The minus sign in {{8^(-2/3)}} means you take the reciprocal at the end.",
        ],
        strategy: "Root first, then power",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "indices-surds-p3-q08",
        question: "Solve {{8^(x+1) = 16^(x-1)}}.",
        answer: { type: "number", value: 7, display: "x = 7" },
        traps: [
          {
            spec: { type: "number", value: 4 },
            feedback: "{{16^(x-1) = 2^(4(x-1)) = 2^(4x-4)}}. The 4 multiplies **both** terms in the bracket — check you didn't write 4x − 1.",
          },
        ],
        solution: [
          "Both 8 and 16 are powers of 2: {{8 = 2^3}}, {{16 = 2^4}}.",
          "{{8^(x+1) = 2^(3(x+1)) = 2^(3x+3)}} and {{16^(x-1) = 2^(4(x-1)) = 2^(4x-4)}}.",
          "Same base, so the indices are equal: 3x + 3 = 4x − 4.",
          "x = 7.",
          "Check: {{8^8 = 2^24}} and {{16^6 = 2^24}}. ✓",
        ],
        commonError: "Writing {{2^(4x-1)}} instead of {{2^(4x-4)}} — the power of a power multiplies the whole index.",
        difficulty: "core",
        guideRef: "index-equations",
        hints: [
          "8 and 16 are both powers of the same number. Which one?",
          "Write each side as a power of 2. Remember {{(2^3)^(x+1) = 2^(3(x+1))}}.",
          "Once the bases match, set the indices equal and solve the linear equation.",
        ],
        strategy: "Write both sides with the same base",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "indices-surds-p3-q09",
        question: "Simplify {{sqrt(98) - sqrt(32) + sqrt(18)}}. Give your answer in the form {{k sqrt(2)}}, where k is an integer. Write down the value of k.",
        answer: { type: "number", value: 6, display: "k = 6, so {{6 sqrt(2)}}" },
        traps: [
          { spec: { type: "number", value: 14 }, feedback: "Watch the sign: it is **minus** {{sqrt(32)}}. So 7 − 4 + 3." },
          { spec: { type: "number", value: 2 }, feedback: "You can't subtract and add inside the roots ({{sqrt(98 - 32 + 18) = sqrt(84)}} is wrong). Simplify each surd to a multiple of {{sqrt(2)}} first." },
        ],
        solution: [
          "{{sqrt(98) = sqrt(49 * 2) = 7 sqrt(2)}}.",
          "{{sqrt(32) = sqrt(16 * 2) = 4 sqrt(2)}}.",
          "{{sqrt(18) = sqrt(9 * 2) = 3 sqrt(2)}}.",
          "{{7 sqrt(2) - 4 sqrt(2) + 3 sqrt(2) = 6 sqrt(2)}}, so k = 6.",
        ],
        commonError: "Combining the numbers under the root signs: {{sqrt(a) + sqrt(b)}} is not {{sqrt(a + b)}}.",
        difficulty: "core",
        guideRef: "simplifying-surds",
        hints: [
          "You can only collect *like* surds. Make each one a multiple of {{sqrt(2)}}.",
          "Find the biggest square factor of each number: 98 = 49 × 2, 32 = 16 × 2, 18 = 9 × 2.",
          "Now collect them like algebra: 7x − 4x + 3x.",
        ],
        strategy: "Find the largest square factor",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "indices-surds-p3-q10",
        question:
          "Expand and simplify {{(2 sqrt(3) + 1)(sqrt(3) - 4)}}. Give your answer in the form {{a + b sqrt(3)}}, where a and b are integers. Type a, then b, separated by a comma.",
        answer: { type: "list", values: [2, -7], ordered: true, display: "a = 2, b = −7, so {{2 - 7 sqrt(3)}}" },
        traps: [
          { spec: { type: "list", values: [-2, -7], ordered: true }, feedback: "{{2 sqrt(3) * sqrt(3) = 2 * 3 = 6}}, not 2. The two root 3s make 3, and the 2 stays." },
          { spec: { type: "list", values: [6, -7], ordered: true }, feedback: "Four products, not three: you've missed 1 × (−4) = −4." },
        ],
        solution: [
          "Multiply every term by every term:",
          "{{2 sqrt(3) * sqrt(3) = 6}}; {{2 sqrt(3) * (-4) = -8 sqrt(3)}}; {{1 * sqrt(3) = sqrt(3)}}; 1 × (−4) = −4.",
          "Collect: (6 − 4) + {{(-8 sqrt(3) + sqrt(3))}} = {{2 - 7 sqrt(3)}}.",
          "So a = 2 and b = −7.",
        ],
        commonError: "Writing {{2 sqrt(3) * sqrt(3) = 2}} — the 2 multiplies the 3 that the two roots make.",
        difficulty: "core",
        guideRef: "surd-brackets",
        hints: [
          "Treat {{sqrt(3)}} like a letter, x, and expand as you would (2x + 1)(x − 4).",
          "There are four products. What is {{2 sqrt(3) * sqrt(3)}}?",
          "Collect the whole numbers together and the {{sqrt(3)}} terms together.",
        ],
        strategy: "Treat the surd like a letter",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "indices-surds-p3-q11",
        question:
          "Rationalise the denominator of {{22/(4 + sqrt(5))}}. Give your answer in the form {{a + b sqrt(5)}}, where a and b are integers. Type a, then b, separated by a comma.",
        answer: { type: "list", values: [8, -2], ordered: true, display: "{{8 - 2 sqrt(5)}}" },
        traps: [
          { spec: { type: "list", values: [8, 2], ordered: true }, feedback: "The conjugate of {{4 + sqrt(5)}} is {{4 - sqrt(5)}}, so the surd term in the answer is **negative**." },
          { spec: { type: "list", values: [88, -22], ordered: true }, feedback: "You've multiplied the top by {{4 - sqrt(5)}} but not divided by the new denominator, {{16 - 5 = 11}}." },
        ],
        solution: [
          "Multiply top and bottom by the conjugate {{4 - sqrt(5)}}.",
          "Bottom: {{(4 + sqrt(5))(4 - sqrt(5)) = 16 - 5 = 11}} (difference of two squares).",
          "Top: {{22(4 - sqrt(5)) = 88 - 22 sqrt(5)}}.",
          "{{(88 - 22 sqrt(5))/11 = 8 - 2 sqrt(5)}}, so a = 8 and b = −2.",
        ],
        commonError: "Multiplying by {{4 + sqrt(5)}} (the same bracket), which leaves a surd in the denominator.",
        difficulty: "core",
        guideRef: "rationalising",
        hints: [
          "What can you multiply {{4 + sqrt(5)}} by to get a whole number?",
          "Use the conjugate {{4 - sqrt(5)}}: the difference of two squares kills the surd.",
          "Whatever you do to the bottom, do to the top. Then cancel the common factor.",
        ],
        strategy: "Multiply by the conjugate",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "indices-surds-p3-q12",
        question:
          "Priya writes:\n\n    {{(sqrt(3) + sqrt(5))^2 = 3 + 5 = 8}}\n\n(a) Explain the mistake Priya has made.\n\n(b) Show that {{(sqrt(3) + sqrt(5))^2 = 8 + 2 sqrt(15)}}.",
        marks: 3,
        modelAnswer:
          "(a) Priya has squared each term separately. {{(a + b)^2}} is not {{a^2 + b^2}}: squaring a bracket means multiplying it by itself, which also gives two middle terms, 2ab.\n\n(b) {{(sqrt(3) + sqrt(5))(sqrt(3) + sqrt(5)) = 3 + sqrt(15) + sqrt(15) + 5}}\n\n{{= 8 + 2 sqrt(15)}}, as required.",
        markScheme: [
          { point: "Explains she squared each term separately / missed the middle terms 2ab", keywords: ["middle", "2ab", "each term", "separately", "not a^2 + b^2", "missed", "forgot"] },
          { point: "Writes as two brackets and finds the cross terms √3 × √5 = √15 (twice)", keywords: ["√15", "sqrt15", "sqrt(15)", "root 15", "√3 × √5"] },
          { point: "Collects to 8 + 2√15", keywords: ["8 + 2√15", "8 + 2sqrt15", "2√15", "3 + 5"] },
        ],
        solutions: [
          { label: "Use the identity", steps: ["{{(a + b)^2 = a^2 + 2ab + b^2}} with {{a = sqrt(3)}}, {{b = sqrt(5)}}.", "{{3 + 2 sqrt(15) + 5 = 8 + 2 sqrt(15)}}."] },
        ],
        commonError: "Writing the middle term as {{2 sqrt(8)}} by adding 3 + 5 under the root. The cross term is {{sqrt(3) * sqrt(5) = sqrt(15)}}.",
        difficulty: "core",
        guideRef: "surd-brackets",
        hints: [
          "Test Priya's rule with ordinary numbers: is {{(1 + 2)^2}} equal to {{1^2 + 2^2}}?",
          "Write the square as {{(sqrt(3) + sqrt(5))(sqrt(3) + sqrt(5))}} and multiply every term by every term.",
          "{{sqrt(3) * sqrt(5) = sqrt(15)}}, and it appears twice.",
        ],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "indices-surds-p3-q13",
        question: "Solve {{2x^(5/2) = 486}}.",
        answer: { type: "number", value: 9, display: "x = 9" },
        traps: [
          { spec: { type: "number", value: 97.2, tolerance: 0.05 }, feedback: "You can't undo a power by multiplying by {{2/5}}. Raise both sides to the power {{2/5}} instead." },
          { spec: { type: "number", value: 3 }, feedback: "{{243^(1/5) = 3}} — that's only the fifth root. The index {{2/5}} means fifth root, **then square**." },
        ],
        solution: [
          "Divide by 2: {{x^(5/2) = 243}}.",
          "Raise both sides to the power {{2/5}}: {{x = 243^(2/5)}}.",
          "Fifth root first: {{root5(243) = 3}} (since {{3^5 = 243}}). Then square: {{3^2 = 9}}.",
          "Check: {{9^(5/2) = (sqrt(9))^5 = 3^5 = 243}}, and 2 × 243 = 486 ✓.",
        ],
        solutions: [
          { label: "Same base", steps: ["{{243 = 3^5}}, so {{x^(5/2) = 3^5}}.", "Write {{x = 3^k}}: {{3^(5k/2) = 3^5}}, so k = 2 and x = 9."] },
        ],
        commonError: "Raising 243 to the power {{5/2}} instead of {{2/5}}.",
        difficulty: "challenge",
        guideRef: "harder-index-equations",
        hints: [
          "First get {{x^(5/2)}} on its own.",
          "What power undoes {{5/2}}? (Power of a power: {{(x^(5/2))^k = x^1}}.)",
          "243 is a power of 3. Use that to work out {{243^(2/5)}} without a calculator.",
        ],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "indices-surds-p3-q14",
        question:
          "A rectangular solar panel has area {{(13 + 7 sqrt(3))}} m². Its width is {{(2 + sqrt(3))}} m.\n\nFind its length. Give your answer in the form {{a + b sqrt(3)}}, where a and b are integers. Type a, then b, separated by a comma.",
        answer: { type: "list", values: [5, 1], ordered: true, display: "{{5 + sqrt(3)}} m" },
        traps: [
          { spec: { type: "list", values: [0.714, 0.143], ordered: true, tolerance: 0.01 }, feedback: "{{(2 + sqrt(3))(2 - sqrt(3)) = 4 - 3 = 1}}, not 7. The surd squared is **subtracted**." },
          { spec: { type: "list", values: [47, 1], ordered: true }, feedback: "Check the last product: {{7 sqrt(3) * (-sqrt(3)) = -21}}, so the whole-number part is 26 − 21." },
        ],
        solution: [
          "Length = area ÷ width = {{(13 + 7 sqrt(3))/(2 + sqrt(3))}}.",
          "Multiply top and bottom by {{2 - sqrt(3)}}. Bottom: {{4 - 3 = 1}}.",
          "Top: {{(13 + 7 sqrt(3))(2 - sqrt(3)) = 26 - 13 sqrt(3) + 14 sqrt(3) - 21 = 5 + sqrt(3)}}.",
          "Length = {{5 + sqrt(3)}} m, so a = 5 and b = 1.",
          "Check: {{(2 + sqrt(3))(5 + sqrt(3)) = 10 + 2 sqrt(3) + 5 sqrt(3) + 3 = 13 + 7 sqrt(3)}} ✓.",
        ],
        solutions: [
          {
            label: "Introduce unknowns",
            steps: [
              "Let the length be {{a + b sqrt(3)}}. Then {{(2 + sqrt(3))(a + b sqrt(3)) = (2a + 3b) + (a + 2b) sqrt(3)}}.",
              "Match parts: 2a + 3b = 13 and a + 2b = 7.",
              "Solve: b = 1, a = 5. Rationalising is quicker; matching parts shows *why* the answer has this form.",
            ],
          },
        ],
        commonError: "Forgetting that {{7 sqrt(3) * (-sqrt(3)) = -21}}.",
        difficulty: "challenge",
        guideRef: "rationalising",
        hints: [
          "Length × width = area. So how do you find the length?",
          "You need to divide by a surd expression — rationalise with the conjugate.",
          "The conjugate of {{2 + sqrt(3)}} is {{2 - sqrt(3)}}, and their product is 1.",
        ],
        strategy: "Multiply by the conjugate",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "indices-surds-p3-q15",
        question: "n is a positive integer. Prove that {{2^(n+3) - 2^n}} is always a multiple of 7.",
        marks: 3,
        modelAnswer:
          "Using the index law {{a^(m+n) = a^m * a^n}}: {{2^(n+3) = 2^n * 2^3 = 8 * 2^n}}.\n\nSo {{2^(n+3) - 2^n = 8 * 2^n - 2^n = 2^n(8 - 1) = 7 * 2^n}}.\n\nSince n is a positive integer, {{2^n}} is an integer, so {{7 * 2^n}} is a multiple of 7.",
        markScheme: [
          { point: "Writes 2^(n+3) as 2^n × 2^3 or 8 × 2^n", keywords: ["2^n × 2^3", "8 × 2^n", "8(2^n)", "2^3", "8"] },
          { point: "Factorises to 2^n(8 − 1) = 7 × 2^n", keywords: ["7 × 2^n", "7(2^n)", "2^n(8 - 1)", "2^n(8 − 1)", "factor"] },
          { point: "Concludes: 2^n is an integer so 7 × 2^n is a multiple of 7", keywords: ["integer", "whole number", "multiple of 7", "divisible by 7"] },
        ],
        commonError: "Checking a few values of n (n = 1 gives 14, n = 2 gives 28) and stopping. Examples are not a proof — you need an argument that works for every n.",
        difficulty: "challenge",
        guideRef: "index-laws",
        hints: [
          "Try n = 1, 2, 3 to see the pattern — then find a reason that works for every n.",
          "Split {{2^(n+3)}} into {{2^n}} times a number.",
          "Take out {{2^n}} as a common factor. What is left in the bracket?",
        ],
        strategy: "Look for a common factor",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "indices-surds-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "indices-surds-p4-q01",
        question: "Simplify {{5x^4 y^3 * 3x^2 y}}.",
        answer: { type: "expression", expr: "15x^6y^4", form: "simplified", display: "{{15x^6 y^4}}" },
        traps: [
          { spec: { type: "expression", expr: "15x^8y^3" }, feedback: "Add the indices when multiplying: {{x^4 * x^2 = x^6}}. And y means {{y^1}}, so {{y^3 * y = y^4}}." },
          { spec: { type: "expression", expr: "8x^6y^4" }, feedback: "The numbers multiply: 5 × 3 = 15." },
        ],
        solution: ["Numbers: 5 × 3 = 15.", "{{x^4 * x^2 = x^6}}.", "{{y^3 * y^1 = y^4}}.", "Answer: {{15x^6 y^4}}."],
        commonError: "Forgetting that y on its own is {{y^1}}.",
        difficulty: "warmup",
        guideRef: "index-laws",
        hints: ["Multiply the numbers, then deal with each letter separately.", "y on its own means {{y^1}}."],
        strategy: "Numbers, then each letter",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "indices-surds-p4-q02",
        question: "Find the value of {{81^(3/4)}}.",
        answer: { type: "number", value: 27 },
        traps: [
          { spec: { type: "number", value: 60.75 }, feedback: "A fractional index isn't a multiplier. {{81^(3/4)}} means the fourth root of 81, cubed." },
          { spec: { type: "number", value: 729 }, feedback: "That is {{81^(3/2)}}. The denominator 4 means the **fourth** root: {{root4(81) = 3}}." },
        ],
        solution: ["The denominator 4 means fourth root: {{root4(81) = 3}} (since {{3^4 = 81}}).", "The numerator 3 means cube: {{3^3 = 27}}."],
        commonError: "Multiplying 81 by {{3/4}}.",
        difficulty: "warmup",
        guideRef: "negative-fractional-indices",
        hints: ["The bottom of the fraction is the root, the top is the power.", "Which number to the power 4 makes 81?"],
        strategy: "Root first, then power",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "indices-surds-p4-q03",
        question: "Write {{4.03 * 10^(-3)}} as an ordinary number.",
        answer: { type: "number", value: 0.00403, allowFraction: false, display: "0.00403" },
        traps: [
          { spec: { type: "number", value: 4030 }, feedback: "A **negative** power of 10 gives a number smaller than 1. Move the point 3 places to the **left**." },
          { spec: { type: "number", value: 0.000403 }, feedback: "Move the decimal point exactly 3 places left: 4.03 → 0.403 → 0.0403 → 0.00403." },
        ],
        solution: ["{{10^(-3)}} means divide by 1000.", "4.03 ÷ 1000 = 0.00403."],
        difficulty: "warmup",
        guideRef: "standard-form",
        hints: ["Is the answer bigger or smaller than 1?", "Dividing by 1000 moves the decimal point 3 places left."],
        strategy: "Count the jumps",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "indices-surds-p4-q04",
        question: "{{sqrt(8) * sqrt(6)}} can be written in the form {{a sqrt(3)}}, where a is an integer. Find the value of a.",
        answer: { type: "number", value: 4, display: "a = 4, so {{4 sqrt(3)}}" },
        traps: [
          { spec: { type: "number", value: 16 }, feedback: "{{sqrt(48) = sqrt(16 * 3) = sqrt(16) * sqrt(3)}}. The 16 comes out of the root as 4." },
        ],
        solution: [
          "{{sqrt(8) * sqrt(6) = sqrt(48)}}.",
          "48 = 16 × 3 and 16 is a square number.",
          "{{sqrt(48) = sqrt(16) * sqrt(3) = 4 sqrt(3)}}, so a = 4.",
        ],
        solutions: [
          { label: "Simplify first", steps: ["{{sqrt(8) = 2 sqrt(2)}} and {{sqrt(6) = sqrt(2) * sqrt(3)}}.", "{{2 sqrt(2) * sqrt(2) * sqrt(3) = 2 * 2 * sqrt(3) = 4 sqrt(3)}}."] },
        ],
        difficulty: "warmup",
        guideRef: "simplifying-surds",
        hints: ["{{sqrt(a) * sqrt(b) = sqrt(ab)}}.", "Look for a square factor of 48."],
        strategy: "Find the largest square factor",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "indices-surds-p4-q05",
        question:
          "The mass of the Earth is {{5.97 * 10^24}} kg. The mass of the Moon is {{7.35 * 10^22}} kg.\n\nHow many times heavier is the Earth than the Moon? Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 81.2, display: "81.2" },
        traps: [
          { spec: { type: "number", value: 0.0123, tolerance: 0.00005 }, feedback: "That is how many times heavier the **Moon** is than the Earth. Divide the Earth's mass by the Moon's." },
          { spec: { type: "number", value: 0.812, tolerance: 0.0005 }, feedback: "Check the powers of 10: {{10^24 / 10^22 = 10^2}}." },
        ],
        solution: [
          "Times heavier = Earth's mass ÷ Moon's mass = {{(5.97 * 10^24) / (7.35 * 10^22)}}.",
          "Numbers: 5.97 ÷ 7.35 = 0.81224…; powers: {{10^24 / 10^22 = 10^2}}.",
          "0.81224… × 100 = 81.224… ≈ 81.2 (3 s.f.).",
        ],
        commonError: "Dividing the wrong way round.",
        difficulty: "core",
        guideRef: "standard-form",
        hints: ["“How many times heavier” means divide. Which mass goes on top?", "Divide the number parts and subtract the powers of 10 (or use the {{* 10^x}} key).", "Round to 3 significant figures at the end."],
        strategy: "Estimate first",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "indices-surds-p4-q06",
        question: "Solve {{2^(3x) * 4^(x+1) = 8^(x+3)}}.",
        answer: { type: "number", value: 3.5, display: "x = 3.5" },
        traps: [
          { spec: { type: "number", value: 4 }, feedback: "{{4^(x+1) = 2^(2(x+1)) = 2^(2x+2)}}. The 2 multiplies both terms in the bracket." },
          { spec: { type: "number", value: 0.5 }, feedback: "{{8^(x+3) = 2^(3(x+3)) = 2^(3x+9)}}, not {{2^(3x+3)}}." },
        ],
        solution: [
          "Write everything as a power of 2: {{4^(x+1) = 2^(2x+2)}} and {{8^(x+3) = 2^(3x+9)}}.",
          "Left side: {{2^(3x) * 2^(2x+2) = 2^(5x+2)}}.",
          "Equate indices: 5x + 2 = 3x + 9, so 2x = 7 and x = 3.5.",
          "Check: left index 5(3.5) + 2 = 19.5; right index 3(3.5) + 9 = 19.5 ✓.",
        ],
        commonError: "Only multiplying the first term of the bracket by the new index, e.g. {{2^(2x+1)}}.",
        difficulty: "core",
        guideRef: "index-equations",
        hints: [
          "2, 4 and 8 are all powers of 2.",
          "{{4^(x+1) = (2^2)^(x+1)}}. Multiply the indices — the whole bracket.",
          "Multiplying powers of 2 means adding indices. Then set the two indices equal.",
        ],
        strategy: "Write both sides with the same base",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "indices-surds-p4-q07",
        question:
          "Expand and simplify {{(sqrt(7) - 2)^2}}. Give your answer in the form {{a - b sqrt(7)}}, where a and b are positive integers. Type a, then b, separated by a comma.",
        answer: { type: "list", values: [11, 4], ordered: true, display: "{{11 - 4 sqrt(7)}}" },
        traps: [
          { spec: { type: "list", values: [11, 2], ordered: true }, feedback: "There are **two** middle terms: {{-2 sqrt(7)}} and {{-2 sqrt(7)}}, giving {{-4 sqrt(7)}}." },
          { spec: { type: "list", values: [3, 4], ordered: true }, feedback: "{{(-2) * (-2) = +4}}, so the whole-number part is 7 + 4 = 11." },
          { spec: { type: "list", values: [11, 0], ordered: true }, feedback: "{{(a - b)^2}} is not {{a^2 + b^2}} — write it as {{(sqrt(7) - 2)(sqrt(7) - 2)}} and expand all four terms." },
        ],
        solution: [
          "{{(sqrt(7) - 2)^2 = (sqrt(7) - 2)(sqrt(7) - 2)}}.",
          "= {{7 - 2 sqrt(7) - 2 sqrt(7) + 4}}.",
          "= {{11 - 4 sqrt(7)}}, so a = 11 and b = 4.",
        ],
        commonError: "Squaring each term separately and missing the middle terms.",
        difficulty: "core",
        guideRef: "surd-brackets",
        hints: [
          "Write the square as two brackets multiplied together.",
          "There are four products. What is {{sqrt(7) * sqrt(7)}}? What is (−2) × (−2)?",
          "Collect the whole numbers and the {{sqrt(7)}} terms.",
        ],
        strategy: "Treat the surd like a letter",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "indices-surds-p4-q08",
        question:
          "Show your working clearly. Write {{15/sqrt(3) + sqrt(12)}} in the form {{a sqrt(3)}}, where a is an integer. Find the value of a.",
        answer: { type: "number", value: 7, display: "a = 7, so {{7 sqrt(3)}}" },
        traps: [
          { spec: { type: "number", value: 17 }, feedback: "{{15/sqrt(3) = (15 sqrt(3))/3}} — don't forget to divide by 3. That gives {{5 sqrt(3)}}." },
          { spec: { type: "number", value: 9 }, feedback: "{{sqrt(12) = sqrt(4 * 3) = 2 sqrt(3)}}, not {{4 sqrt(3)}}." },
        ],
        solution: [
          "Rationalise: {{15/sqrt(3) = (15 sqrt(3))/(sqrt(3) sqrt(3)) = (15 sqrt(3))/3 = 5 sqrt(3)}}.",
          "Simplify: {{sqrt(12) = sqrt(4 * 3) = 2 sqrt(3)}}.",
          "{{5 sqrt(3) + 2 sqrt(3) = 7 sqrt(3)}}, so a = 7.",
        ],
        solutions: [
          { label: "Spot that 15 = 5 × 3", steps: ["{{15 = 5 * sqrt(3) * sqrt(3)}}, so {{15/sqrt(3) = 5 sqrt(3)}} straight away.", "Then add {{2 sqrt(3)}}: {{7 sqrt(3)}}."] },
        ],
        commonError: "Multiplying the top by {{sqrt(3)}} but not dividing by 3.",
        difficulty: "core",
        guideRef: "rationalising",
        hints: [
          "Get rid of the surd in the denominator first: multiply top and bottom by {{sqrt(3)}}.",
          "Then write {{sqrt(12)}} as a multiple of {{sqrt(3)}}.",
          "Collect the like surds.",
        ],
        strategy: "Make like surds",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "written",
        id: "indices-surds-p4-q09",
        question:
          "A square garden bed has sides of length {{(sqrt(18) + sqrt(8))}} m.\n\nShow that the area of the garden bed is 50 m².\n\nShow each stage of your working clearly.",
        marks: 3,
        modelAnswer:
          "{{sqrt(18) = sqrt(9 * 2) = 3 sqrt(2)}} and {{sqrt(8) = sqrt(4 * 2) = 2 sqrt(2)}}.\n\nSo the side is {{3 sqrt(2) + 2 sqrt(2) = 5 sqrt(2)}} m.\n\nArea = {{(5 sqrt(2))^2 = 25 * 2 = 50}} m².",
        markScheme: [
          { point: "Simplifies √18 = 3√2 and √8 = 2√2", keywords: ["3√2", "2√2", "3sqrt2", "2sqrt2", "9 × 2", "4 × 2"] },
          { point: "Side = 5√2", keywords: ["5√2", "5sqrt2", "5 root 2"] },
          { point: "Area = (5√2)² = 25 × 2 = 50", keywords: ["25 × 2", "25 x 2", "50", "25(2)"] },
        ],
        solutions: [
          { label: "Expand the square directly", steps: ["{{(sqrt(18) + sqrt(8))^2 = 18 + 2 sqrt(144) + 8}}.", "{{= 18 + 2 * 12 + 8 = 50}}."] },
        ],
        commonError: "Writing {{sqrt(18) + sqrt(8) = sqrt(26)}}, so the area is 26. Surds can't be added by adding the numbers inside.",
        difficulty: "core",
        guideRef: "simplifying-surds",
        hints: [
          "Simplify each surd so they are both multiples of {{sqrt(2)}}.",
          "Collect them to get a single surd for the side length.",
          "Area of a square = side². What is {{(sqrt(2))^2}}?",
        ],
        strategy: "Make like surds",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "indices-surds-p4-q10",
        question: "Simplify fully {{((16x^8)/(y^4))^(-1/2)}}.\n\nWhen you type a fraction, put brackets round the whole denominator, e.g. 3/(2a^2).",
        answer: { type: "expression", expr: "y^2/(4x^4)", form: "simplified", display: "{{y^2/(4x^4)}}" },
        traps: [
          { spec: { type: "expression", expr: "4x^4/y^2" }, feedback: "The minus sign in the index means **flip** the fraction. Your answer is upside down." },
          { spec: { type: "expression", expr: "y^2/(8x^4)" }, feedback: "The power {{1/2}} means square root: {{sqrt(16) = 4}}, not 16 ÷ 2." },
          { spec: { type: "expression", expr: "y^2/(4x^6)" }, feedback: "Power of a power: multiply the indices. {{(x^8)^(1/2) = x^(8 * 1/2) = x^4}}." },
        ],
        solution: [
          "Negative index: flip the fraction. {{((16x^8)/(y^4))^(-1/2) = ((y^4)/(16x^8))^(1/2)}}.",
          "Power {{1/2}}: square-root every factor. {{sqrt(y^4) = y^2}}, {{sqrt(16) = 4}}, {{sqrt(x^8) = x^4}}.",
          "Answer: {{y^2/(4x^4)}}.",
        ],
        commonError: "Halving the 16 instead of square-rooting it.",
        difficulty: "core",
        guideRef: "negative-fractional-indices",
        hints: [
          "Deal with the minus sign first. What does a negative index do to a fraction?",
          "The power {{1/2}} means square root. Apply it to every part: 16, {{x^8}} and {{y^4}}.",
          "For the letters, multiply each index by {{1/2}}.",
        ],
        strategy: "Split the index into parts",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "indices-surds-p4-q11",
        question: "{{sqrt(x) + sqrt(50) = sqrt(98)}}. Find the value of x.",
        answer: { type: "number", value: 8, display: "x = 8" },
        traps: [
          { spec: { type: "number", value: 48 }, feedback: "{{sqrt(48) + sqrt(50)}} is not {{sqrt(98)}} — you can't add the numbers inside square roots. Simplify the surds first." },
          { spec: { type: "number", value: 2 }, feedback: "You've found {{sqrt(x) = 2 sqrt(2)}} — so x is the square of that: {{(2 sqrt(2))^2}}." },
        ],
        solution: [
          "{{sqrt(50) = 5 sqrt(2)}} and {{sqrt(98) = 7 sqrt(2)}}.",
          "{{sqrt(x) = 7 sqrt(2) - 5 sqrt(2) = 2 sqrt(2)}}.",
          "{{x = (2 sqrt(2))^2 = 4 * 2 = 8}}.",
          "Check: {{sqrt(8) + sqrt(50) = 2 sqrt(2) + 5 sqrt(2) = 7 sqrt(2) = sqrt(98)}} ✓.",
        ],
        commonError: "Subtracting under the root: 98 − 50 = 48.",
        difficulty: "core",
        guideRef: "simplifying-surds",
        hints: [
          "Write {{sqrt(50)}} and {{sqrt(98)}} as multiples of {{sqrt(2)}}.",
          "Make {{sqrt(x)}} the subject.",
          "Square both sides to find x.",
        ],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "indices-surds-p4-q12",
        question:
          "Marcus has an external hard drive that can store {{2 * 10^12}} bytes. Each photo from his camera uses {{4.8 * 10^6}} bytes.\n\nMarcus says, \"I can store more than 400 000 photos on this drive.\"\n\nShow that Marcus is correct. Write the maximum number of photos in standard form, correct to 3 significant figures.",
        marks: 3,
        modelAnswer:
          "Number of photos = {{(2 * 10^12) / (4.8 * 10^6)}}.\n\n2 ÷ 4.8 = 0.41666… and {{10^12 / 10^6 = 10^6}}, so the number is {{0.41666... * 10^6 = 416 666.6...}}\n\nHe can store 416 666 whole photos, which is {{4.17 * 10^5}} to 3 s.f. This is more than 400 000 ({{4 * 10^5}}), so Marcus is correct.",
        markScheme: [
          { point: "Divides capacity by photo size: (2 × 10^12) ÷ (4.8 × 10^6)", keywords: ["÷", "divide", "2 × 10^12", "4.8 × 10^6", "/"] },
          { point: "Gets 416 666 (or 4.17 × 10^5)", keywords: ["416666", "416 666", "4.17", "416667", "416 667"] },
          { point: "Compares with 400 000 and concludes he is correct", keywords: ["400000", "400 000", "4 × 10^5", "more than", "greater", "correct"] },
        ],
        commonError: "Subtracting the powers but dividing 4.8 by 2 instead of 2 by 4.8.",
        difficulty: "core",
        guideRef: "standard-form",
        hints: [
          "How many photos fit? Divide the total storage by the size of one photo.",
          "Divide the number parts (2 ÷ 4.8) and subtract the powers of 10.",
          "Compare your answer with 400 000 and say clearly what it shows.",
        ],
        strategy: "Split into number part and power part",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "indices-surds-p4-q13",
        question:
          "{{a = 2^x}} and {{b = 2^y}}.\n\nExpress {{32^x / 4^(y-1)}} in terms of a and b. Give your answer as simply as possible.",
        answer: { type: "expression", expr: "4a^5/b^2", form: "simplified", display: "{{(4a^5)/(b^2)}}" },
        traps: [
          { spec: { type: "expression", expr: "a^5/(4b^2)" }, feedback: "{{4^(y-1) = 2^(2y-2)}}. Dividing by {{2^(-2)}} **multiplies** by 4 — check the sign." },
          { spec: { type: "expression", expr: "a^5/b^2" }, feedback: "Don't lose the −1 in {{4^(y-1)}}: {{4^(y-1) = 4^y / 4}}." },
        ],
        solution: [
          "{{32^x = (2^5)^x = (2^x)^5 = a^5}}.",
          "{{4^(y-1) = 4^y / 4 = (2^2)^y / 4 = (2^y)^2 / 4 = b^2 / 4}}.",
          "{{a^5 / (b^2/4) = (4a^5)/(b^2)}}.",
        ],
        solutions: [
          { label: "Everything as a power of 2", steps: ["{{32^x / 4^(y-1) = 2^(5x) / 2^(2y-2) = 2^(5x - 2y + 2)}}.", "{{= (2^x)^5 * 2^2 / (2^y)^2 = (4a^5)/(b^2)}}."] },
        ],
        commonError: "Writing {{4^(y-1) = 4b - 1}} or dropping the −1 altogether.",
        difficulty: "challenge",
        guideRef: "index-laws",
        hints: [
          "Write 32 and 4 as powers of 2.",
          "{{32^x = (2^5)^x}}. Can you rearrange that to use {{2^x}}?",
          "{{4^(y-1) = 4^y * 4^(-1)}}. Write {{4^y}} in terms of b.",
        ],
        strategy: "Write everything with the same base",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "indices-surds-p4-q14",
        question: "Solve {{5^(x+1) + 5^x = 750}}.",
        answer: { type: "number", value: 3, display: "x = 3" },
        traps: [
          { spec: { type: "number", value: 125 }, feedback: "125 is the value of {{5^x}}. Now solve {{5^x = 125}} for x." },
          { spec: { type: "number", value: 3.5 }, feedback: "{{5^(x+1) + 5^x}} is not {{5^(2x+1)}} — you can't add powers by adding indices. Factorise out {{5^x}} instead." },
        ],
        solution: [
          "{{5^(x+1) = 5 * 5^x}}, so the left side is {{5 * 5^x + 5^x = 6 * 5^x}}.",
          "{{6 * 5^x = 750}}, so {{5^x = 125 = 5^3}}.",
          "x = 3.",
          "Check: {{5^4 + 5^3 = 625 + 125 = 750}} ✓.",
        ],
        solutions: [
          { label: "Introduce a variable", steps: ["Let {{y = 5^x}}. Then {{5^(x+1) = 5y}}.", "5y + y = 750, so y = 125 and {{5^x = 125}}, giving x = 3."] },
        ],
        commonError: "Adding the indices of {{5^(x+1)}} and {{5^x}} as if the terms were multiplied.",
        difficulty: "challenge",
        guideRef: "harder-index-equations",
        hints: [
          "Can you write {{5^(x+1)}} in terms of {{5^x}}?",
          "{{5^(x+1) = 5 * 5^x}}. Now both terms contain {{5^x}} — take it out as a common factor.",
          "You should get {{6 * 5^x = 750}}. Solve for {{5^x}}, then for x.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "indices-surds-p4-q15",
        question: "Show that {{(6 - sqrt(8))/(sqrt(2) - 1)}} can be written as {{2 + 4 sqrt(2)}}.\n\nShow each stage of your working clearly.",
        marks: 4,
        modelAnswer:
          "{{sqrt(8) = 2 sqrt(2)}}, so the fraction is {{(6 - 2 sqrt(2))/(sqrt(2) - 1)}}.\n\nMultiply top and bottom by {{sqrt(2) + 1}}.\n\nDenominator: {{(sqrt(2) - 1)(sqrt(2) + 1) = 2 - 1 = 1}}.\n\nNumerator: {{(6 - 2 sqrt(2))(sqrt(2) + 1) = 6 sqrt(2) + 6 - 2 * 2 - 2 sqrt(2) = 2 + 4 sqrt(2)}}.\n\nSo the fraction equals {{(2 + 4 sqrt(2))/1 = 2 + 4 sqrt(2)}}.",
        markScheme: [
          { point: "Simplifies √8 = 2√2", keywords: ["2√2", "2sqrt2", "2 root 2", "4 × 2"] },
          { point: "Multiplies top and bottom by the conjugate √2 + 1", keywords: ["√2 + 1", "sqrt2 + 1", "conjugate", "root 2 + 1"] },
          { point: "Denominator (√2 − 1)(√2 + 1) = 1", keywords: ["2 - 1", "2 − 1", "= 1", "difference of two squares"] },
          { point: "Numerator expands to 6√2 + 6 − 4 − 2√2 = 2 + 4√2", keywords: ["6√2", "6sqrt2", "- 4", "− 4", "2 + 4√2", "2 + 4sqrt2"] },
        ],
        solutions: [
          { label: "Work backwards", steps: ["Check {{(2 + 4 sqrt(2))(sqrt(2) - 1) = 2 sqrt(2) - 2 + 8 - 4 sqrt(2) = 6 - 2 sqrt(2) = 6 - sqrt(8)}} ✓.", "This verifies the result, but in the exam rationalising is the expected method."] },
        ],
        commonError: "Writing {{2 sqrt(2) * sqrt(2) = 2}} instead of 4, so the numerator comes out as {{4 + 4 sqrt(2)}}.",
        difficulty: "challenge",
        guideRef: "rationalising",
        hints: [
          "Can {{sqrt(8)}} be simplified first?",
          "To clear {{sqrt(2) - 1}} from the denominator, multiply top and bottom by {{sqrt(2) + 1}}.",
          "The denominator becomes 2 − 1 = 1. Expand the numerator carefully: {{2 sqrt(2) * sqrt(2) = 4}}.",
        ],
        strategy: "Multiply by the conjugate",
      },
    ],
  },
];
