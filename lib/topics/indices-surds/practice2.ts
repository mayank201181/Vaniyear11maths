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
        question: "Find the value of {{25^(-1/2)}}. Give your answer as a fraction.",
        answer: { type: "fraction", n: 1, d: 5, simplest: true, allowDecimal: true, display: "{{1/5}}" },
        traps: [
          { spec: { type: "number", value: -5 }, feedback: "A negative index does **not** make the answer negative. It means *one over*: {{25^(-1/2) = 1/25^(1/2)}}." },
          { spec: { type: "number", value: -12.5 }, feedback: "An index is not a multiplier. The power {{1/2}} means *square root*, and the minus sign means *reciprocal*." },
        ],
        solution: [
          "The minus sign means reciprocal: {{25^(-1/2) = 1/25^(1/2)}}.",
          "The power {{1/2}} means square root: {{25^(1/2) = sqrt(25) = 5}}.",
          "So {{25^(-1/2) = 1/5}}.",
        ],
        commonError: "Treating the negative index as a negative number, giving −5.",
        difficulty: "warmup",
        guideRef: "negative-fractional-indices",
        hints: ["Deal with the two parts of the index separately: the minus sign and the {{1/2}}.", "Minus → one over. Half → square root."],
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
        question: "Simplify fully {{(2a^3 b)^4 / (4a^5 b^2)}}.",
        answer: { type: "expression", expr: "4a^7b^2", form: "simplified", display: "{{4a^7 b^2}}" },
        traps: [
          {
            spec: { type: "expression", expr: "a^7b^2/2" },
            feedback: "The power 4 applies to **everything** inside the bracket, including the 2: {{2^4 = 16}}, so the top is {{16a^12 b^4}}.",
          },
          { spec: { type: "expression", expr: "2a^7b^2" }, feedback: "{{2^4}} is 16, not 8. Then {{16 / 4 = 4}}." },
        ],
        solution: [
          "Raise every factor in the bracket to the power 4: {{(2a^3 b)^4 = 2^4 a^(12) b^4 = 16a^12 b^4}}.",
          "Divide the numbers: 16 ÷ 4 = 4.",
          "Subtract the indices: {{a^(12-5) = a^7}} and {{b^(4-2) = b^2}}.",
          "Answer: {{4a^7 b^2}}.",
        ],
        commonError: "Forgetting to raise the coefficient 2 to the power 4.",
        difficulty: "core",
        guideRef: "index-laws",
        hints: [
          "Deal with the bracket first. What happens to each of 2, {{a^3}} and b?",
          "Power of a power: multiply the indices, so {{(a^3)^4 = a^12}}. And {{2^4 = 16}}.",
          "Now divide: numbers with numbers, a's with a's, b's with b's.",
        ],
        strategy: "Numbers, then each letter",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "indices-surds-p3-q06",
        question:
          "Light travels at {{3.0 * 10^8}} m/s. At one point in its orbit, Mars is {{2.28 * 10^11}} m from the Sun. How many seconds does sunlight take to reach Mars at that point? Give your answer in standard form.",
        answer: { type: "number", value: 760, standardForm: true, display: "{{7.6 * 10^2}} s" },
        traps: [
          { spec: { type: "number", value: 7.6e19, standardForm: true }, feedback: "When you **divide** powers of 10 you **subtract** the indices: {{10^11 / 10^8 = 10^3}}." },
          { spec: { type: "number", value: 6.84e19, standardForm: true }, feedback: "You've multiplied. Time = distance ÷ speed." },
        ],
        solution: [
          "Time = distance ÷ speed = {{(2.28 * 10^11) / (3.0 * 10^8)}}.",
          "Numbers: 2.28 ÷ 3.0 = 0.76. Powers: {{10^11 / 10^8 = 10^3}}.",
          "{{0.76 * 10^3 = 7.6 * 10^2}} seconds (about 12.7 minutes).",
        ],
        commonError: "Leaving the answer as {{0.76 * 10^3}}, which is not standard form because 0.76 < 1.",
        difficulty: "core",
        guideRef: "standard-form",
        hints: ["Which formula links distance, speed and time?", "Divide the number parts, then subtract the powers of 10.", "Check that the front number is between 1 and 10."],
        strategy: "Split into number part and power part",
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
        question: "Solve {{9^(x+1) = 27^(x-1)}}.",
        answer: { type: "number", value: 5, display: "x = 5" },
        traps: [
          {
            spec: { type: "number", value: 3 },
            feedback: "{{27^(x-1) = 3^(3(x-1)) = 3^(3x-3)}}. The 3 multiplies **both** terms in the bracket — check you didn't write 3x − 1.",
          },
        ],
        solution: [
          "Both 9 and 27 are powers of 3: {{9 = 3^2}}, {{27 = 3^3}}.",
          "{{9^(x+1) = 3^(2(x+1)) = 3^(2x+2)}} and {{27^(x-1) = 3^(3(x-1)) = 3^(3x-3)}}.",
          "Same base, so the indices are equal: 2x + 2 = 3x − 3.",
          "x = 5.",
          "Check: {{9^6 = 3^12}} and {{27^4 = 3^12}}. ✓",
        ],
        commonError: "Writing {{3^(3x-1)}} instead of {{3^(3x-3)}} — the power of a power multiplies the whole index.",
        difficulty: "core",
        guideRef: "index-equations",
        hints: [
          "9 and 27 are both powers of the same number. Which one?",
          "Write each side as a power of 3. Remember {{(3^2)^(x+1) = 3^(2(x+1))}}.",
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
          "Expand and simplify {{(3 + sqrt(5))(2 - sqrt(5))}}. Give your answer in the form {{a + b sqrt(5)}}, where a and b are integers. Type a, then b, separated by a comma.",
        answer: { type: "list", values: [1, -1], ordered: true, display: "a = 1, b = −1, so {{1 - sqrt(5)}}" },
        traps: [
          { spec: { type: "list", values: [11, -1], ordered: true }, feedback: "{{sqrt(5) * (-sqrt(5)) = -5}}, not +5. Check the sign of that last term." },
          { spec: { type: "list", values: [-19, -1], ordered: true }, feedback: "{{sqrt(5) * sqrt(5) = 5}}, not 25. Multiplying a square root by itself undoes the root." },
        ],
        solution: [
          "Multiply every term by every term:",
          "3 × 2 = 6; {{3 * (-sqrt(5)) = -3 sqrt(5)}}; {{sqrt(5) * 2 = 2 sqrt(5)}}; {{sqrt(5) * (-sqrt(5)) = -5}}.",
          "Collect: (6 − 5) + {{(-3 sqrt(5) + 2 sqrt(5))}} = {{1 - sqrt(5)}}.",
          "So a = 1 and b = −1.",
        ],
        commonError: "Getting the sign of {{sqrt(5) * (-sqrt(5))}} wrong, or writing it as 25.",
        difficulty: "core",
        guideRef: "surd-brackets",
        hints: [
          "Treat {{sqrt(5)}} like a letter, x, and expand as you would (3 + x)(2 − x).",
          "There are four products. What is {{sqrt(5) * sqrt(5)}}?",
          "Collect the whole numbers together and the {{sqrt(5)}} terms together.",
        ],
        strategy: "Treat the surd like a letter",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "indices-surds-p3-q11",
        question:
          "Rationalise the denominator of {{6/(3 - sqrt(3))}}. Give your answer in the form {{a + b sqrt(3)}}, where a and b are integers. Type a, then b, separated by a comma.",
        answer: { type: "list", values: [3, 1], ordered: true, display: "{{3 + sqrt(3)}}" },
        traps: [
          { spec: { type: "list", values: [1.5, 0.5], ordered: true }, feedback: "The denominator is {{(3 - sqrt(3))(3 + sqrt(3)) = 9 - 3 = 6}}, not 12. The middle terms cancel and {{sqrt(3) * sqrt(3) = 3}} is **subtracted**." },
          { spec: { type: "list", values: [-3, -1], ordered: true }, feedback: "Check the sign of the denominator: {{3^2 - (sqrt(3))^2 = 9 - 3 = +6}}." },
        ],
        solution: [
          "Multiply top and bottom by the conjugate {{3 + sqrt(3)}}.",
          "Bottom: {{(3 - sqrt(3))(3 + sqrt(3)) = 9 - 3 = 6}} (difference of two squares).",
          "Top: {{6(3 + sqrt(3))}}.",
          "{{(6(3 + sqrt(3)))/6 = 3 + sqrt(3)}}, so a = 3 and b = 1.",
        ],
        commonError: "Multiplying by {{3 - sqrt(3)}} (the same bracket), which leaves a surd in the denominator.",
        difficulty: "core",
        guideRef: "rationalising",
        hints: [
          "What can you multiply {{3 - sqrt(3)}} by to get a whole number?",
          "Use the conjugate {{3 + sqrt(3)}}: the difference of two squares kills the surd.",
          "Whatever you do to the bottom, do to the top. Then cancel the common factor.",
        ],
        strategy: "Multiply by the conjugate",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "indices-surds-p3-q12",
        question:
          "A rectangular tile is {{(4 + sqrt(2))}} cm long and {{(4 - sqrt(2))}} cm wide.\n\n(a) Show that the area of the tile is a whole number of square centimetres.\n\n(b) Show that the diagonal of the tile is exactly 6 cm long.",
        marks: 4,
        modelAnswer:
          "(a) Area = {{(4 + sqrt(2))(4 - sqrt(2)) = 16 - 4 sqrt(2) + 4 sqrt(2) - 2 = 14}} cm², a whole number.\n\n(b) By Pythagoras, diagonal² = {{(4 + sqrt(2))^2 + (4 - sqrt(2))^2}}.\n\n{{(4 + sqrt(2))^2 = 16 + 8 sqrt(2) + 2 = 18 + 8 sqrt(2)}}\n\n{{(4 - sqrt(2))^2 = 16 - 8 sqrt(2) + 2 = 18 - 8 sqrt(2)}}\n\nSum = 36, so the diagonal = {{sqrt(36) = 6}} cm.",
        markScheme: [
          { point: "Area: expands to 16 − 2 = 14 (middle terms cancel)", keywords: ["14", "16 - 2", "16 − 2", "difference of two squares"] },
          { point: "Uses Pythagoras: diagonal² = length² + width²", keywords: ["pythagoras", "squared", "d^2", "d²", "diagonal²"] },
          { point: "Correct squares 18 + 8√2 and 18 − 8√2", keywords: ["18", "8√2", "8sqrt2", "8 root 2"] },
          { point: "Sum 36, so diagonal = 6", keywords: ["36", "= 6", "sqrt 36", "√36"] },
        ],
        commonError: "Writing {{(4 + sqrt(2))^2 = 16 + 2 = 18}}, missing the middle term {{8 sqrt(2)}}. Here the slip happens to cancel, but it loses the method marks.",
        difficulty: "core",
        guideRef: "surd-brackets",
        hints: [
          "Area of a rectangle = length × width. Spot the difference of two squares.",
          "For the diagonal, the length, width and diagonal form a right-angled triangle.",
          "Square each bracket carefully: {{(a + b)^2 = a^2 + 2ab + b^2}}. What happens to the surd terms when you add?",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "indices-surds-p3-q13",
        question: "Solve {{3^(2x) - 12 * 3^x + 27 = 0}}. Give both solutions, separated by a comma.",
        answer: { type: "list", values: [1, 2], ordered: false, display: "x = 1 or x = 2" },
        traps: [
          { spec: { type: "list", values: [3, 9], ordered: false }, feedback: "3 and 9 are the values of {{y = 3^x}}. Now solve {{3^x = 3}} and {{3^x = 9}} to find x." },
        ],
        solution: [
          "Notice {{3^(2x) = (3^x)^2}}. Let {{y = 3^x}}.",
          "The equation becomes {{y^2 - 12y + 27 = 0}}.",
          "Factorise: (y − 3)(y − 9) = 0, so y = 3 or y = 9.",
          "{{3^x = 3}} gives x = 1; {{3^x = 9}} gives x = 2.",
        ],
        solutions: [
          { label: "Check by substituting", steps: ["x = 1: 9 − 36 + 27 = 0 ✓", "x = 2: 81 − 108 + 27 = 0 ✓"] },
        ],
        commonError: "Stopping at y = 3 and y = 9 — those are values of {{3^x}}, not of x.",
        difficulty: "challenge",
        guideRef: "harder-index-equations",
        hints: [
          "Is there a way to write {{3^(2x)}} using {{3^x}}?",
          "{{3^(2x) = (3^x)^2}}. Substitute {{y = 3^x}}. What kind of equation do you get?",
          "Solve the quadratic in y, then turn each y back into an x.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "indices-surds-p3-q14",
        question:
          "Work out the exact value of\n\n    {{1/(sqrt(1) + sqrt(2)) + 1/(sqrt(2) + sqrt(3)) + 1/(sqrt(3) + sqrt(4)) + ... + 1/(sqrt(99) + sqrt(100))}}\n\nThere are 99 fractions in the sum.",
        answer: { type: "number", value: 9, display: "9" },
        traps: [
          { spec: { type: "number", value: 10 }, feedback: "Close! Each fraction becomes {{sqrt(n+1) - sqrt(n)}}. Almost everything cancels — but the first term leaves {{-sqrt(1)}}, so the total is 10 − 1." },
          { spec: { type: "number", value: 11 }, feedback: "Check the sign of what is left at the start: the sum is {{sqrt(100) - sqrt(1)}}." },
        ],
        solution: [
          "Rationalise one general term: {{1/(sqrt(n) + sqrt(n+1)) * (sqrt(n+1) - sqrt(n))/(sqrt(n+1) - sqrt(n)) = (sqrt(n+1) - sqrt(n))/((n+1) - n)}}.",
          "The denominator is 1, so each term is {{sqrt(n+1) - sqrt(n)}}.",
          "The sum is {{(sqrt(2) - sqrt(1)) + (sqrt(3) - sqrt(2)) + ... + (sqrt(100) - sqrt(99))}}.",
          "Every middle surd cancels (it telescopes), leaving {{sqrt(100) - sqrt(1) = 10 - 1 = 9}}.",
        ],
        commonError: "Trying to add the fractions directly — the trick is to rationalise first and watch the cancelling.",
        difficulty: "challenge",
        guideRef: "rationalising",
        hints: [
          "Try small cases: rationalise just {{1/(sqrt(1) + sqrt(2))}}. What do you get?",
          "Multiply by the conjugate. The denominator {{(sqrt(n+1))^2 - (sqrt(n))^2}} is always 1.",
          "Write out the first few terms and the last one. What cancels?",
        ],
        strategy: "Try small cases",
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
          "In 2024 the population of Singapore was about {{6.04 * 10^6}}. The land area of Singapore is about {{7.35 * 10^2}} km².\n\nWork out the population density of Singapore, in people per km². Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 8220, display: "8220 people per km²" },
        traps: [
          { spec: { type: "number", value: 0.000122, tolerance: 0.0000006 }, feedback: "That is km² per person. Density = population ÷ area." },
          { spec: { type: "number", value: 821.8, tolerance: 0.1 }, feedback: "Check the powers of 10: {{10^6 / 10^2 = 10^4}}, so the answer is in the thousands." },
        ],
        solution: [
          "Density = population ÷ area = {{(6.04 * 10^6) / (7.35 * 10^2)}}.",
          "= 8217.68… people per km².",
          "To 3 s.f.: 8220 people per km² (or {{8.22 * 10^3}}).",
        ],
        commonError: "Dividing the wrong way round.",
        difficulty: "core",
        guideRef: "standard-form",
        hints: ["Population density means people per km². Which quantity goes on top?", "Use the {{* 10^x}} button on your calculator, or divide 6.04 by 7.35 and the powers separately.", "Round to 3 significant figures at the end."],
        strategy: "Estimate first",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "indices-surds-p4-q06",
        question:
          "{{2^x * 4^y = 32}} and {{3^x / 9^y = 1/3}}.\n\nFind the value of x and the value of y. Type x, then y, separated by a comma.",
        answer: { type: "list", values: [2, 1.5], ordered: true, display: "x = 2, y = 1.5" },
        traps: [
          { spec: { type: "list", values: [3, 1], ordered: true }, feedback: "Check {{1/3 = 3^(-1)}}, so the second equation is x − 2y = −1, not +1." },
        ],
        solution: [
          "{{4^y = 2^(2y)}}, so {{2^(x+2y) = 2^5}}: x + 2y = 5.",
          "{{9^y = 3^(2y)}} and {{1/3 = 3^(-1)}}, so {{3^(x-2y) = 3^(-1)}}: x − 2y = −1.",
          "Add the equations: 2x = 4, so x = 2.",
          "Then 2 + 2y = 5, so y = 1.5.",
          "Check: {{2^2 * 4^1.5 = 4 * 8 = 32}} ✓ and {{3^2 / 9^1.5 = 9/27 = 1/3}} ✓.",
        ],
        commonError: "Writing {{1/3}} as {{3^1}} instead of {{3^(-1)}}.",
        difficulty: "core",
        guideRef: "index-equations",
        hints: [
          "Write each equation using a single base: base 2 for the first, base 3 for the second.",
          "{{2^x * 2^(2y) = 2^(x+2y)}}. And how do you write {{1/3}} as a power of 3?",
          "Equate indices to get two linear simultaneous equations.",
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
        question: "Simplify fully {{((16x^8)/(y^4))^(-1/2)}}.",
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
        question: "Solve {{x^(-2/3) = 1/16}}, where x > 0.",
        answer: { type: "number", value: 64, display: "x = 64" },
        traps: [
          { spec: { type: "fraction", n: 1, d: 64 }, feedback: "Check: {{(1/64)^(-2/3) = 64^(2/3) = 16}}, not {{1/16}}. Flip first: {{x^(2/3) = 16}}." },
          { spec: { type: "number", value: 24 }, feedback: "Undo a power with the reciprocal **power**, not by multiplying: {{x = 16^(3/2)}}." },
          { spec: { type: "number", value: 4096 }, feedback: "{{16^(3/2)}} is the square root of 16, cubed: {{4^3 = 64}}." },
        ],
        solution: [
          "Take reciprocals of both sides: {{x^(2/3) = 16}}.",
          "Raise both sides to the power {{3/2}}: {{x = 16^(3/2)}}.",
          "{{16^(3/2) = (sqrt(16))^3 = 4^3 = 64}}.",
          "Check: {{64^(-2/3) = 1/(cbrt(64))^2 = 1/16}} ✓.",
        ],
        commonError: "Multiplying 16 by {{3/2}} instead of raising it to the power {{3/2}}.",
        difficulty: "challenge",
        guideRef: "harder-index-equations",
        hints: [
          "Get rid of the negative index first by taking reciprocals of both sides.",
          "To undo the power {{2/3}}, raise both sides to the power {{3/2}}.",
          "{{16^(3/2)}}: square root first, then cube.",
        ],
        strategy: "Use the inverse",
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
