// ---------------------------------------------------------------------------
// Expanding, Factorising & Substitution — Practice Papers 3 and 4.
// Paper 3: mixed practice — fluency, context, spot-the-error, proof.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher questions.
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "expand-factorise-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "expand-factorise-p3-q01",
        question:
          "Wei Ling designs a rectangular planter box for an HDB corridor. Its length is (x + 7) cm and its width is (x − 4) cm.\n\nWrite an expression for the area of the base in cm². Expand and simplify your answer.",
        answer: { type: "expression", expr: "x^2+3x-28", form: "expanded", display: "{{x^2 + 3x - 28}}" },
        traps: [
          { spec: { type: "expression", expr: "x^2-28" }, feedback: "You've multiplied the firsts and the lasts but missed the middle terms 7x and −4x. Use a grid: four products, then collect." },
          { spec: { type: "expression", expr: "x^2+11x-28" }, feedback: "Check the sign of x × (−4): it is −4x, so the middle terms are 7x − 4x = 3x." },
        ],
        solution: [
          "Area = (x + 7)(x − 4).",
          "Grid: x × x = {{x^2}}, x × (−4) = −4x, 7 × x = 7x, 7 × (−4) = −28.",
          "Collect: {{x^2 - 4x + 7x - 28 = x^2 + 3x - 28}}.",
        ],
        commonError: "Writing only {{x^2 - 28}} — two brackets always give four products before you collect.",
        difficulty: "warmup",
        guideRef: "expanding-brackets",
        hints: ["Area of a rectangle = length × width, so multiply the two brackets.", "Every term in the first bracket multiplies every term in the second: four products."],
        strategy: "Use a grid",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "expand-factorise-p3-q02",
        question: "Factorise {{x^2 - 2x - 35}}.",
        answer: { type: "expression", expr: "(x-7)(x+5)", form: "factorised", display: "(x − 7)(x + 5)" },
        traps: [
          { spec: { type: "expression", expr: "(x+7)(x-5)" }, feedback: "Expand to check: (x + 7)(x − 5) gives +2x, not −2x. Swap the signs." },
          { spec: { type: "expression", expr: "(x-5)(x-7)" }, feedback: "−5 × −7 = +35, but you need −35. One number must be positive and one negative." },
        ],
        solution: [
          "Find two numbers that multiply to −35 and add to −2.",
          "Factor pairs of 35: 1 and 35, 5 and 7. With opposite signs: −7 and +5 give −7 + 5 = −2. ✓",
          "So {{x^2 - 2x - 35 = (x - 7)(x + 5)}}.",
          "Check: {{x^2 + 5x - 7x - 35 = x^2 - 2x - 35}}. ✓",
        ],
        commonError: "Getting the right pair of numbers but the signs the wrong way round. Always expand to check.",
        difficulty: "warmup",
        guideRef: "factorising-quadratics",
        hints: ["Product −35, sum −2.", "The product is negative, so the two numbers have opposite signs — and the bigger one is negative."],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "expand-factorise-p3-q03",
        question: "Work out the value of {{2a^2 - ab}} when a = −3 and b = 5.",
        answer: { type: "number", value: 33 },
        traps: [
          { spec: { type: "number", value: 51 }, feedback: "You've worked out {{(2a)^2 = 36}}. The power applies only to a: {{2a^2 = 2 * 9 = 18}}." },
          { spec: { type: "number", value: -3 }, feedback: "{{(-3)^2 = 9}}, not −9: squaring a negative gives a positive. So {{2a^2 = 18}}." },
          { spec: { type: "number", value: 3 }, feedback: "ab = (−3) × 5 = −15, so subtracting it means 18 − (−15) = 18 + 15." },
        ],
        solution: [
          "{{a^2 = (-3)^2 = 9}}, so {{2a^2 = 18}}.",
          "ab = (−3) × 5 = −15.",
          "{{2a^2 - ab = 18 - (-15) = 18 + 15 = 33}}.",
        ],
        commonError: "Squaring 2a instead of a, or typing −3² into a calculator without brackets (which gives −9).",
        difficulty: "warmup",
        guideRef: "substitution-formulae",
        hints: ["Indices first: work out {{a^2}} before multiplying by 2.", "Put negative numbers in brackets: {{(-3)^2}}, and watch the double negative at the end."],
        strategy: "Use brackets for negatives",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "expand-factorise-p3-q04",
        question: "{{f(x) = 3x^2 - 5}}\n\nFind f(−2).",
        answer: { type: "number", value: 7 },
        traps: [
          { spec: { type: "number", value: 31 }, feedback: "You've squared 3 × (−2). Only x is squared: {{3 * (-2)^2 = 3 * 4 = 12}}." },
          { spec: { type: "number", value: -17 }, feedback: "{{(-2)^2 = +4}}, not −4. Squaring removes the negative." },
        ],
        solution: ["f(−2) means replace every x with −2.", "{{3 * (-2)^2 - 5 = 3 * 4 - 5 = 12 - 5 = 7}}."],
        commonError: "Treating {{3x^2}} as {{(3x)^2}}.",
        difficulty: "warmup",
        guideRef: "function-notation-basics",
        hints: ["f(−2) is the output when the input x is −2.", "Square −2 first (in brackets), then multiply by 3, then subtract 5."],
        strategy: "Substitute carefully",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "expand-factorise-p3-q05",
        question: "Expand and simplify {{(3x - 2)^2}}.",
        answer: { type: "expression", expr: "9x^2-12x+4", form: "expanded", display: "{{9x^2 - 12x + 4}}" },
        traps: [
          { spec: { type: "expression", expr: "9x^2+4" }, feedback: "{{(3x - 2)^2}} means (3x − 2)(3x − 2). You've squared each term but missed the two middle terms, each −6x." },
          { spec: { type: "expression", expr: "9x^2-4" }, feedback: "That's the difference of two squares, which comes from (3x − 2)(3x + 2) — not from squaring one bracket." },
          { spec: { type: "expression", expr: "3x^2-12x+4" }, feedback: "{{(3x)^2 = 9x^2}}: the 3 is squared too." },
        ],
        solution: [
          "Write it as two brackets: (3x − 2)(3x − 2).",
          "{{3x * 3x = 9x^2}}, 3x × (−2) = −6x, (−2) × 3x = −6x, (−2) × (−2) = +4.",
          "{{9x^2 - 12x + 4}}.",
        ],
        solutions: [
          { label: "Write out the brackets", steps: ["(3x − 2)(3x − 2) = {{9x^2 - 6x - 6x + 4 = 9x^2 - 12x + 4}}."] },
          { label: "Use the pattern", steps: ["{{(a - b)^2 = a^2 - 2ab + b^2}} with a = 3x, b = 2.", "{{9x^2 - 2(3x)(2) + 4 = 9x^2 - 12x + 4}}. Quicker once the pattern is secure."] },
        ],
        commonError: "{{(3x - 2)^2 = 9x^2 + 4}} — squaring is not distributive over subtraction.",
        difficulty: "core",
        guideRef: "expanding-brackets",
        hints: ["What does 'squared' mean? Write the bracket out twice.", "There should be four products, two of which are the same.", "The middle term is 2 × (3x) × (−2)."],
        strategy: "Write it out in full",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "expand-factorise-p3-q06",
        question: "Expand and simplify {{(x + 2)(x - 3)(2x + 1)}}.",
        answer: { type: "expression", expr: "2x^3-x^2-13x-6", form: "expanded", display: "{{2x^3 - x^2 - 13x - 6}}" },
        traps: [
          { spec: { type: "expression", expr: "2x^3-x^2-11x-6" }, feedback: "Close — recheck the x terms: −x × 1 = −x and −6 × 2x = −12x, so the x-term is −13x." },
          { spec: { type: "expression", expr: "2x^3+3x^2-13x-6" }, feedback: "Check the {{x^2}} terms: {{x^2 * 1 = x^2}} and −x × 2x = {{-2x^2}}, giving {{-x^2}}." },
        ],
        solution: [
          "First two brackets: {{(x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6}}.",
          "Now multiply by (2x + 1): {{2x(x^2 - x - 6) = 2x^3 - 2x^2 - 12x}} and {{1(x^2 - x - 6) = x^2 - x - 6}}.",
          "Add: {{2x^3 - 2x^2 + x^2 - 12x - x - 6 = 2x^3 - x^2 - 13x - 6}}.",
          "Check with x = 1: (3)(−2)(3) = −18 and 2 − 1 − 13 − 6 = −18. ✓",
        ],
        commonError: "Losing a term when multiplying the trinomial by the third bracket — there should be 6 products before collecting.",
        difficulty: "core",
        guideRef: "expanding-brackets",
        hints: ["Expand two of the brackets first, and simplify.", "Multiply each of the 3 terms of your quadratic by 2x, then by 1.", "Check by substituting x = 1 into the original and your answer."],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "expand-factorise-p3-q07",
        question: "Factorise {{6x^2 + x - 15}}.",
        answer: { type: "expression", expr: "(2x-3)(3x+5)", form: "factorised", display: "(2x − 3)(3x + 5)" },
        traps: [
          { spec: { type: "expression", expr: "(2x+3)(3x-5)" }, feedback: "Expand to check: this gives −x, not +x. Swap the signs." },
          { spec: { type: "expression", expr: "(6x-9)(x+5)" }, feedback: "Expand to check: (6x − 9)(x + 5) gives {{6x^2 + 21x - 45}}. Use ac = −90 and split the middle term." },
        ],
        solution: [
          "ac = 6 × (−15) = −90. Find two numbers with product −90 and sum +1: 10 and −9.",
          "Split the middle term: {{6x^2 + 10x - 9x - 15}}.",
          "Group: 2x(3x + 5) − 3(3x + 5).",
          "= (2x − 3)(3x + 5).",
          "Check: {{6x^2 + 10x - 9x - 15 = 6x^2 + x - 15}}. ✓",
        ],
        commonError: "Looking for numbers that multiply to −15 (as if a = 1). With a ≠ 1 use the product ac = −90.",
        difficulty: "core",
        guideRef: "factorising-quadratics",
        hints: ["a ≠ 1, so work out ac first.", "You need two numbers that multiply to −90 and add to +1.", "Split +x into 10x − 9x, then factorise in pairs."],
        strategy: "Split the middle term",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "expand-factorise-p3-q08",
        question:
          "Zara says: \"{{x^2 - 6x + 14}} is positive for every value of x, even negative ones and even when x is 3.\"\n\nBy completing the square, show that Zara is right. State the smallest value the expression can take, and the value of x where it happens.",
        marks: 3,
        modelAnswer:
          "{{x^2 - 6x + 14 = (x - 3)^2 - 9 + 14 = (x - 3)^2 + 5}}.\n\nA square is never negative, so {{(x - 3)^2 >= 0}} for every x. Therefore {{(x - 3)^2 + 5 >= 5}}, which is always positive.\n\nThe smallest value is 5, when x − 3 = 0, i.e. when x = 3.",
        markScheme: [
          { point: "Completes the square correctly: {{(x - 3)^2 + 5}}", keywords: ["(x - 3)^2", "(x-3)^2", "+ 5", "+5", "-9 + 14"] },
          { point: "Argues a square is never negative, so the expression is at least 5 (> 0)", keywords: ["never negative", ">= 0", "≥ 0", "at least 5", "always positive", "square"] },
          { point: "Minimum value 5 when x = 3", keywords: ["minimum", "smallest", "5", "x = 3", "x=3"] },
        ],
        commonError: "Testing a few values of x and calling that a proof — substitution can only check examples, not every x.",
        difficulty: "core",
        guideRef: "completing-the-square",
        hints: ["Half of −6 is −3. Start from {{(x - 3)^2}}.", "{{(x - 3)^2 = x^2 - 6x + 9}}. What do you add to get +14?", "What is the smallest possible value of a square?"],
        strategy: "Complete the square",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "expand-factorise-p3-q09",
        question:
          "{{P = (2x^2 - y)/(x + y)}}\n\nWork out the value of P when {{x = -1/2}} and {{y = 3/4}}. Show your working clearly — don't just use a calculator.",
        answer: { type: "number", value: -1 },
        traps: [
          { spec: { type: "number", value: -5 }, feedback: "{{(-1/2)^2 = +1/4}}, not {{-1/4}}. So {{2x^2 = 1/2}}." },
          { spec: { type: "number", value: -0.25 }, feedback: "That's only the numerator. Now divide by x + y = {{1/4}}." },
        ],
        solution: [
          "{{x^2 = (-1/2)^2 = 1/4}}, so {{2x^2 = 1/2}}.",
          "Numerator: {{1/2 - 3/4 = 2/4 - 3/4 = -1/4}}.",
          "Denominator: {{-1/2 + 3/4 = -2/4 + 3/4 = 1/4}}.",
          "{{P = (-1/4) / (1/4) = -1}}.",
        ],
        commonError: "Squaring a negative fraction and keeping the negative sign.",
        difficulty: "core",
        guideRef: "substitution-formulae",
        hints: ["Work out the top and the bottom separately.", "Use a common denominator of 4 throughout.", "Dividing by {{1/4}} is the same as multiplying by 4."],
        strategy: "Split into parts",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "expand-factorise-p3-q10",
        question: "{{f(x) = (x + 4)/3}}\n\nFind the value of x for which f(x) = −2.",
        answer: { type: "number", value: -10 },
        traps: [
          { spec: { type: "fraction", n: 2, d: 3 }, feedback: "That's f(−2) — the output when the input is −2. Here −2 is the *output*: solve {{(x + 4)/3 = -2}}." },
          { spec: { type: "number", value: -2 }, feedback: "Solve {{(x + 4)/3 = -2}}: multiply by 3 first, giving x + 4 = −6." },
        ],
        solution: ["f(x) = −2 means {{(x + 4)/3 = -2}}.", "Multiply both sides by 3: x + 4 = −6.", "x = −10.", "Check: f(−10) = {{(-6)/3 = -2}}. ✓"],
        commonError: "Confusing 'f(x) = −2' (output is −2) with 'f(−2)' (input is −2).",
        difficulty: "core",
        guideRef: "function-notation-basics",
        hints: ["Is −2 the input or the output here?", "Set up an equation: {{(x + 4)/3 = -2}}, and solve it."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "expand-factorise-p3-q11",
        question: "{{f(x) = x^2 - 3x}}\n\nFind f(a + 2). Give your answer as an expression in a, expanded and simplified.",
        answer: { type: "expression", expr: "a^2+a-2", form: "expanded", display: "{{a^2 + a - 2}}" },
        traps: [
          { spec: { type: "expression", expr: "a^2-3a+2" }, feedback: "That's f(a) + 2. f(a + 2) means replace *every* x with the whole bracket (a + 2)." },
          { spec: { type: "expression", expr: "a^2+a+10" }, feedback: "Check −3(a + 2) = −3a − 6, not −3a + 6." },
        ],
        solution: [
          "Replace x with (a + 2): {{f(a + 2) = (a + 2)^2 - 3(a + 2)}}.",
          "{{(a + 2)^2 = a^2 + 4a + 4}}.",
          "−3(a + 2) = −3a − 6.",
          "{{a^2 + 4a + 4 - 3a - 6 = a^2 + a - 2}}.",
          "Check with a = 1: f(3) = 9 − 9 = 0 and 1 + 1 − 2 = 0. ✓",
        ],
        commonError: "Writing f(a) + 2 instead of substituting the whole of (a + 2).",
        difficulty: "core",
        guideRef: "function-notation-basics",
        hints: ["Every x becomes (a + 2) — keep the brackets.", "Expand {{(a + 2)^2}} and −3(a + 2) separately, then collect."],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "expand-factorise-p3-q12",
        question:
          "Jun factorises {{3x^2 - 10x - 8}} and writes\n\n    {{3x^2 - 10x - 8 = (3x - 2)(x + 4)}}\n\n(a) Show that Jun is wrong.\n\n(b) Explain what his mistake was and factorise {{3x^2 - 10x - 8}} correctly.",
        marks: 3,
        modelAnswer:
          "(a) Expanding Jun's answer: {{(3x - 2)(x + 4) = 3x^2 + 12x - 2x - 8 = 3x^2 + 10x - 8}}. This has +10x, not −10x, so it is wrong.\n\n(b) He chose the right numbers but the wrong signs. ac = 3 × (−8) = −24; we need product −24 and sum −10: −12 and +2. {{3x^2 - 12x + 2x - 8 = 3x(x - 4) + 2(x - 4) = (3x + 2)(x - 4)}}.",
        markScheme: [
          { point: "Expands Jun's brackets to {{3x^2 + 10x - 8}} (middle term has the wrong sign)", keywords: ["3x^2 + 10x - 8", "+10x", "10x", "expand", "wrong sign"] },
          { point: "Identifies the mistake: signs the wrong way round", keywords: ["sign", "signs", "swap", "wrong way", "positive", "negative"] },
          { point: "Correct factorisation (3x + 2)(x − 4)", keywords: ["(3x + 2)(x - 4)", "(3x+2)(x-4)", "(x - 4)(3x + 2)", "-12", "-12x"] },
        ],
        commonError: "Saying 'it's wrong' without expanding to show it — in a 'show that' you must demonstrate it.",
        difficulty: "core",
        guideRef: "factorising-quadratics",
        hints: ["Expand Jun's brackets. Do you get back to the original?", "Which term is different?", "Use ac = −24: which pair adds to −10?"],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "expand-factorise-p3-q13",
        question: "Factorise fully {{(x + 4)^2 - (x - 2)^2}}.",
        answer: { type: "expression", expr: "12(x+1)", form: "factorised", display: "12(x + 1)" },
        traps: [
          { spec: { type: "expression", expr: "4(x+5)" }, feedback: "Careful with the minus in front of the second bracket: {{-(x^2 - 4x + 4) = -x^2 + 4x - 4}}. Every sign flips." },
          { spec: { type: "expression", expr: "4(x+3)" }, feedback: "Check {{(x + 4)^2 = x^2 + 8x + 16}} and {{(x - 2)^2 = x^2 - 4x + 4}} — then subtract the whole of the second." },
        ],
        solution: [
          "Difference of two squares: {{A^2 - B^2 = (A - B)(A + B)}} with A = x + 4, B = x − 2.",
          "A − B = (x + 4) − (x − 2) = 6.",
          "A + B = (x + 4) + (x − 2) = 2x + 2.",
          "So the expression is 6(2x + 2) = 12(x + 1).",
        ],
        solutions: [
          { label: "Difference of two squares", steps: ["(A − B)(A + B) = 6(2x + 2) = 12(x + 1). No squaring needed — quicker and fewer sign slips."] },
          { label: "Expand then factorise", steps: ["{{x^2 + 8x + 16 - (x^2 - 4x + 4) = 12x + 12}}.", "= 12(x + 1)."] },
        ],
        commonError: "Not distributing the minus over all of {{(x - 2)^2}}, or stopping at 6(2x + 2), which still has a common factor 2.",
        difficulty: "challenge",
        guideRef: "harder-algebra",
        hints: ["This is something squared minus something squared.", "Let A = x + 4 and B = x − 2. Then it's {{A^2 - B^2}}.", "Simplify A − B and A + B, then look for any common factor left."],
        strategy: "Spot the structure",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "written",
        id: "expand-factorise-p3-q14",
        question:
          "n is an integer, so 2n − 1 and 2n + 1 are consecutive odd numbers.\n\nProve that the difference between the squares of any two consecutive odd numbers is always a multiple of 8.",
        marks: 3,
        modelAnswer:
          "{{(2n + 1)^2 - (2n - 1)^2 = (4n^2 + 4n + 1) - (4n^2 - 4n + 1)}}\n\n{{= 4n^2 + 4n + 1 - 4n^2 + 4n - 1 = 8n}}.\n\n8n = 8 × n and n is an integer, so the difference is always a multiple of 8.",
        markScheme: [
          { point: "Expands both squares correctly: {{4n^2 + 4n + 1}} and {{4n^2 - 4n + 1}}", keywords: ["4n^2 + 4n + 1", "4n^2 - 4n + 1", "4n^2"] },
          { point: "Subtracts correctly to get 8n", keywords: ["8n"] },
          { point: "Concludes: 8 × an integer, so a multiple of 8", keywords: ["multiple of 8", "8 x n", "8 × n", "integer", "divisible by 8"] },
        ],
        commonError: "Checking a few examples (3² − 1² = 8, 5² − 3² = 16) — examples support a claim but don't prove it for every n.",
        solutions: [
          { label: "Expand and subtract", steps: ["{{(4n^2 + 4n + 1) - (4n^2 - 4n + 1) = 8n}}."] },
          { label: "Difference of two squares", steps: ["{{(2n + 1)^2 - (2n - 1)^2 = [(2n + 1) - (2n - 1)][(2n + 1) + (2n - 1)] = 2 * 4n = 8n}}. Quicker — no squaring."] },
        ],
        difficulty: "challenge",
        guideRef: "harder-algebra",
        hints: ["Write the larger square minus the smaller square in terms of n.", "Expand each square carefully and subtract the whole of the second.", "Write your answer as 8 × (something) and say why that something is an integer."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "expand-factorise-p3-q15",
        question:
          "Write {{2x^2 - 12x + 23}} in the form {{a(x + b)^2 + c}}, where a, b and c are integers.\n\nGive a, b and c in that order, separated by commas.",
        answer: { type: "list", values: [2, -3, 5], ordered: true, display: "a = 2, b = −3, c = 5 so {{2(x - 3)^2 + 5}}" },
        traps: [
          { spec: { type: "list", values: [2, -3, 14], ordered: true }, feedback: "Inside the bracket you subtract 9, but the bracket is multiplied by 2, so you are really subtracting 2 × 9 = 18: 23 − 18 = 5." },
          { spec: { type: "list", values: [2, -6, -49], ordered: true }, feedback: "After taking out 2 you have {{x^2 - 6x}}: half of −6 is −3, so b = −3." },
        ],
        solution: [
          "Take out 2 from the x terms: {{2(x^2 - 6x) + 23}}.",
          "Complete the square inside: {{x^2 - 6x = (x - 3)^2 - 9}}.",
          "{{2[(x - 3)^2 - 9] + 23 = 2(x - 3)^2 - 18 + 23 = 2(x - 3)^2 + 5}}.",
          "a = 2, b = −3, c = 5.",
          "Check x = 0: 2 × 9 + 5 = 23. ✓",
        ],
        commonError: "Forgetting to multiply the −9 by the 2 outside the bracket.",
        difficulty: "challenge",
        guideRef: "completing-the-square",
        hints: ["Factor 2 out of the first two terms only.", "Complete the square on {{x^2 - 6x}}.", "When you expand the outer bracket, the −9 becomes −18."],
        strategy: "Make it simpler",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "expand-factorise-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "expand-factorise-p4-q01",
        question: "Expand and simplify {{(2y - 5)(y + 3)}}.",
        answer: { type: "expression", expr: "2y^2+y-15", form: "expanded", display: "{{2y^2 + y - 15}}" },
        traps: [
          { spec: { type: "expression", expr: "2y^2-y-15" }, feedback: "The y terms are 2y × 3 = +6y and −5 × y = −5y, so +6y − 5y = +y." },
          { spec: { type: "expression", expr: "2y^2-15" }, feedback: "You've missed the middle terms. There are four products: {{2y^2}}, +6y, −5y and −15." },
        ],
        solution: ["{{2y * y = 2y^2}}, 2y × 3 = 6y, −5 × y = −5y, −5 × 3 = −15.", "{{2y^2 + 6y - 5y - 15 = 2y^2 + y - 15}}."],
        commonError: "Collecting 6y − 5y as −y, or dropping the middle terms.",
        difficulty: "warmup",
        guideRef: "expanding-brackets",
        hints: ["Four products: firsts, outers, inners, lasts.", "Collect the two y terms carefully."],
        strategy: "Use a grid",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "expand-factorise-p4-q02",
        question: "Factorise fully {{12x^3y^2 + 18xy^4}}.",
        answer: { type: "expression", expr: "6xy^2(2x^2+3y^2)", form: "factorised", display: "{{6xy^2(2x^2 + 3y^2)}}" },
        traps: [
          { spec: { type: "expression", expr: "6xy^2(2x^2+3y)" }, feedback: "Check by expanding: {{6xy^2 * 3y = 18xy^3}}, not {{18xy^4}}. The bracket needs {{3y^2}}." },
          { spec: { type: "expression", expr: "6xy(2x^2y+3y^3)" }, feedback: "Factorised, but not *fully*: both terms in the bracket still contain y. The HCF is {{6xy^2}}." },
        ],
        solution: [
          "HCF of 12 and 18 is 6.",
          "Lowest power of x in both terms: {{x^1}}. Lowest power of y: {{y^2}}.",
          "HCF = {{6xy^2}}.",
          "{{12x^3y^2 / (6xy^2) = 2x^2}} and {{18xy^4 / (6xy^2) = 3y^2}}.",
          "{{6xy^2(2x^2 + 3y^2)}}.",
        ],
        commonError: "Taking out only part of the HCF (e.g. 6xy or 3xy²) — 'fully' means the biggest common factor.",
        difficulty: "warmup",
        guideRef: "factorising-quadratics",
        hints: ["Find the HCF of the numbers, then the lowest power of each letter that appears in both terms."],
        strategy: "Common factor first",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "expand-factorise-p4-q03",
        question:
          "The formula to change a temperature in degrees Fahrenheit, F, to degrees Celsius, C, is\n\n    {{C = (5(F - 32))/9}}\n\nOn a winter night in Toronto the temperature is −4 °F. Work out the temperature in °C.",
        answer: { type: "number", value: -20, display: "−20 °C" },
        traps: [
          { spec: { type: "number", value: 15.55555555555556, tolerance: 0.01 }, feedback: "You've worked out −4 + 32 = 28. It's F − 32, so −4 − 32 = −36." },
          { spec: { type: "fraction", n: -52, d: 9 }, feedback: "The 5 multiplies the whole bracket (F − 32): 5 × (−36) = −180, then ÷ 9." },
        ],
        solution: ["F − 32 = −4 − 32 = −36.", "5 × (−36) = −180.", "−180 ÷ 9 = −20, so C = −20 °C."],
        commonError: "Treating −4 − 32 as −28 or 28.",
        difficulty: "warmup",
        guideRef: "substitution-formulae",
        hints: ["Bracket first: F − 32 with F = −4."],
        strategy: "Substitute carefully",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "expand-factorise-p4-q04",
        question: "{{f(x) = 2x + k}}, where k is a constant.\n\nGiven that f(3) = 11, find f(−4).",
        answer: { type: "number", value: -3 },
        traps: [
          { spec: { type: "number", value: 5 }, feedback: "5 is the value of k. Now use it: f(−4) = 2 × (−4) + 5." },
          { spec: { type: "number", value: -19 }, feedback: "Check k: 2 × 3 + k = 11 gives k = 5, not −11." },
        ],
        solution: ["f(3) = 2 × 3 + k = 6 + k = 11, so k = 5.", "f(x) = 2x + 5.", "f(−4) = 2 × (−4) + 5 = −8 + 5 = −3."],
        commonError: "Stopping after finding k.",
        difficulty: "warmup",
        guideRef: "function-notation-basics",
        hints: ["Use f(3) = 11 to write an equation for k.", "Once you know k, substitute x = −4."],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "expand-factorise-p4-q05",
        question:
          "A storage box for Marcus's CCA robotics kit is a cuboid measuring (x + 4) cm by (x − 1) cm by (3x + 2) cm.\n\nFind an expression for the volume of the box in cm³. Give your answer in the form {{ax^3 + bx^2 + cx + d}}.",
        answer: { type: "expression", expr: "3x^3+11x^2-6x-8", form: "expanded", display: "{{3x^3 + 11x^2 - 6x - 8}}" },
        traps: [
          { spec: { type: "expression", expr: "3x^3+11x^2+6x-8" }, feedback: "Check the x terms: 3x × (−4) = −12x and 2 × 3x = +6x, giving −6x." },
          { spec: { type: "expression", expr: "3x^3+11x^2-6x+8" }, feedback: "The constant is 2 × (−4) = −8." },
        ],
        solution: [
          "{{(x + 4)(x - 1) = x^2 - x + 4x - 4 = x^2 + 3x - 4}}.",
          "{{(x^2 + 3x - 4)(3x + 2) = 3x^3 + 2x^2 + 9x^2 + 6x - 12x - 8}}.",
          "{{= 3x^3 + 11x^2 - 6x - 8}}.",
          "Check x = 2: 6 × 1 × 8 = 48 and 24 + 44 − 12 − 8 = 48. ✓",
        ],
        commonError: "Missing one of the six products when multiplying a three-term expression by a two-term bracket.",
        difficulty: "core",
        guideRef: "expanding-brackets",
        hints: ["Volume = length × width × height.", "Expand two brackets first, then multiply by the third.", "You should have 6 products before collecting. Check by substituting x = 2."],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "written",
        id: "expand-factorise-p4-q06",
        question: "Show that {{(x + 3)(2x - 1)(x - 4)}} can be written as {{2x^3 - 3x^2 - 23x + 12}}.\n\nShow your working clearly.",
        marks: 3,
        modelAnswer:
          "{{(x + 3)(x - 4) = x^2 - 4x + 3x - 12 = x^2 - x - 12}}.\n\n{{(x^2 - x - 12)(2x - 1) = 2x^3 - x^2 - 2x^2 + x - 24x + 12}}\n\n{{= 2x^3 - 3x^2 - 23x + 12}} as required.",
        markScheme: [
          { point: "Correct expansion of two brackets, e.g. {{x^2 - x - 12}} (or {{2x^2 + 5x - 3}}, or {{2x^2 - 9x + 4}})", keywords: ["x^2 - x - 12", "2x^2 + 5x - 3", "2x^2 - 9x + 4"] },
          { point: "Six correct terms from multiplying by the third bracket (at most one sign error)", keywords: ["2x^3", "-x^2", "-2x^2", "+x", "-24x", "+12"] },
          { point: "Collects correctly to {{2x^3 - 3x^2 - 23x + 12}}", keywords: ["2x^3 - 3x^2 - 23x + 12", "-3x^2", "-23x"] },
        ],
        commonError: "Jumping straight to the given answer without showing the intermediate product — in a 'show that' every step must be visible.",
        difficulty: "core",
        guideRef: "expanding-brackets",
        hints: ["Choose two brackets to expand first.", "Multiply each term of your quadratic by 2x and then by −1.", "Collect the {{x^2}} terms and the x terms carefully."],
        strategy: "Show every step",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "expand-factorise-p4-q07",
        question: "Simplify fully {{(x^2 - 9)/(2x^2 + 5x - 3)}}.",
        answer: { type: "expression", expr: "(x-3)/(2x-1)", form: "simplified", display: "{{(x - 3)/(2x - 1)}}" },
        traps: [
          { spec: { type: "expression", expr: "(x+3)/(2x-1)" }, feedback: "Factorise the top properly: {{x^2 - 9 = (x - 3)(x + 3)}}. The (x + 3) cancels, leaving (x − 3) on top." },
          { spec: { type: "expression", expr: "(x-3)/(2x+1)" }, feedback: "Check the bottom: {{(2x + 1)(x + 3) = 2x^2 + 7x + 3}}. You need (2x − 1)(x + 3)." },
        ],
        solution: [
          "Top: difference of two squares, {{x^2 - 9 = (x - 3)(x + 3)}}.",
          "Bottom: ac = −6, product −6 sum 5: 6 and −1. {{2x^2 + 6x - x - 3 = 2x(x + 3) - 1(x + 3) = (2x - 1)(x + 3)}}.",
          "Cancel the common factor (x + 3): {{(x - 3)/(2x - 1)}}.",
        ],
        commonError: "Cancelling individual terms (like the {{x^2}}s) instead of whole bracketed factors.",
        difficulty: "core",
        guideRef: "factorising-quadratics",
        hints: ["You can only cancel *factors*, so factorise top and bottom first.", "The top is a difference of two squares.", "The bottom has a = 2: use ac = −6."],
        strategy: "Factorise first",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "expand-factorise-p4-q08",
        question:
          "{{v = sqrt(u^2 + 2as)}}\n\nu = 6.4, a = −2.5 and s = 3.2\n\nWork out the value of v. Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 5, tolerance: 0.005, allowFraction: false, display: "5.00" },
        traps: [
          { spec: { type: "number", value: 7.55, tolerance: 0.005 }, feedback: "You've used +2.5 for a. 2as = 2 × (−2.5) × 3.2 = −16." },
          { spec: { type: "number", value: 24.96 }, feedback: "24.96 is the value under the square root. Take the square root to find v." },
        ],
        solution: [
          "{{u^2 = 6.4^2 = 40.96}}.",
          "2as = 2 × (−2.5) × 3.2 = −16.",
          "{{u^2 + 2as = 40.96 - 16 = 24.96}}.",
          "{{v = sqrt(24.96) = 4.99599...}} = 5.00 (3 s.f.).",
        ],
        commonError: "Truncating to 4.99 — to 3 s.f. 4.99599… rounds up to 5.00.",
        difficulty: "core",
        guideRef: "substitution-formulae",
        hints: ["Work out {{u^2}} and 2as separately, keeping the sign of a.", "Square root the total. Then round to 3 significant figures — the zeros count."],
        strategy: "Substitute carefully",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "expand-factorise-p4-q09",
        question:
          "The time, T seconds, for one swing of a pendulum of length l metres is\n\n    {{T = 2pi sqrt(l/g)}}\n\nTake g = 9.8 and l = 0.8. Find the exact value of T. Give your answer as a fraction in terms of π.",
        answer: { type: "expression", expr: "4pi/7", display: "{{(4pi)/7}}" },
        traps: [
          { spec: { type: "expression", expr: "2pi/7" }, feedback: "{{sqrt(4/49) = 2/7}} — now multiply by 2π: {{2pi * 2/7 = (4pi)/7}}." },
          { spec: { type: "expression", expr: "8pi/49" }, feedback: "You haven't taken the square root: {{sqrt(4/49) = 2/7}}, not {{4/49}}." },
        ],
        solution: [
          "{{l/g = 0.8/9.8 = 8/98 = 4/49}}.",
          "{{sqrt(4/49) = 2/7}}.",
          "{{T = 2pi * 2/7 = (4pi)/7}} seconds (about 1.80 s).",
        ],
        commonError: "Typing it all into a calculator and giving 1.80 — the question asks for an exact answer in terms of π.",
        difficulty: "core",
        guideRef: "substitution-formulae",
        hints: ["Write {{0.8/9.8}} as a fraction in its simplest form.", "Multiply top and bottom by 10: {{8/98}}. Now simplify.", "{{4/49}} is a perfect square over a perfect square."],
        strategy: "Keep it exact",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "expand-factorise-p4-q10",
        question:
          "{{f(x) = x^2 - 4x + 1}}\n\nf(1) = f(k) where k is a number other than 1. Find k.",
        answer: { type: "number", value: 3 },
        traps: [
          { spec: { type: "number", value: -2 }, feedback: "−2 is the value of f(1). You need the *other input* that gives −2." },
          { spec: { type: "number", value: -3 }, feedback: "Check the factorisation: {{k^2 - 4k + 3 = (k - 1)(k - 3)}}, so k = 3." },
        ],
        solution: [
          "f(1) = 1 − 4 + 1 = −2.",
          "Solve {{k^2 - 4k + 1 = -2}}: {{k^2 - 4k + 3 = 0}}.",
          "(k − 1)(k − 3) = 0, so k = 1 or k = 3.",
          "k ≠ 1, so k = 3.",
        ],
        solutions: [
          { label: "Algebra", steps: ["Set f(k) = −2 and solve the quadratic: k = 1 or 3."] },
          { label: "Symmetry", steps: ["{{x^2 - 4x + 1 = (x - 2)^2 - 3}}, so the graph is symmetrical about x = 2.", "1 is 1 unit left of 2, so the matching input is 1 unit right: k = 3. Quicker once you see it."] },
        ],
        commonError: "Giving the output −2 instead of the input k.",
        difficulty: "core",
        guideRef: "function-notation-basics",
        hints: ["Work out f(1) first.", "Now solve f(k) = that value — it's a quadratic in k.", "One root is k = 1 (you knew that). What's the other?"],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "written",
        id: "expand-factorise-p4-q11",
        question:
          "(a) Write {{x^2 - 8x + 21}} in the form {{(x - a)^2 + b}}, where a and b are integers.\n\n(b) Hence explain why the equation {{x^2 - 8x + 21 = 0}} has no real solutions.\n\n(c) Write down the coordinates of the turning point of the graph of {{y = x^2 - 8x + 21}}.",
        marks: 4,
        modelAnswer:
          "(a) {{x^2 - 8x + 21 = (x - 4)^2 - 16 + 21 = (x - 4)^2 + 5}}, so a = 4, b = 5.\n\n(b) {{(x - 4)^2 >= 0}} for all x, so {{(x - 4)^2 + 5 >= 5}}. The expression is never less than 5, so it can never equal 0 — there are no real solutions.\n\n(c) The minimum is at x = 4, where y = 5: turning point (4, 5).",
        markScheme: [
          { point: "{{(x - 4)^2}} seen (a = 4)", keywords: ["(x - 4)^2", "(x-4)^2", "a = 4", "a=4"] },
          { point: "b = 5, i.e. {{(x - 4)^2 + 5}}", keywords: ["+ 5", "+5", "b = 5", "b=5", "-16 + 21"] },
          { point: "Explains: a square is ≥ 0 so the expression is ≥ 5, never 0", keywords: ["never", ">= 0", "≥ 0", "at least 5", "positive", "cannot be 0", "no real"] },
          { point: "Turning point (4, 5)", keywords: ["(4, 5)", "(4,5)"] },
        ],
        commonError: "Giving the turning point as (−4, 5) — the bracket (x − 4) is zero when x = +4.",
        difficulty: "core",
        guideRef: "completing-the-square",
        hints: ["Half of −8 is −4.", "{{(x - 4)^2 = x^2 - 8x + 16}}. Adjust the constant.", "What is the smallest value a square can take? So what is the smallest value of the whole expression?"],
        strategy: "Complete the square",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "expand-factorise-p4-q12",
        question:
          "Given that {{3x^2 + 12x + 5 = a(x + b)^2 + c}} for all values of x, find the values of a, b and c.\n\nGive a, b and c in that order, separated by commas.",
        answer: { type: "list", values: [3, 2, -7], ordered: true, display: "a = 3, b = 2, c = −7" },
        traps: [
          { spec: { type: "list", values: [3, 2, 1], ordered: true }, feedback: "{{3(x + 2)^2 = 3x^2 + 12x + 12}}, so you subtract 12 (not 4): 5 − 12 = −7." },
          { spec: { type: "list", values: [3, 6, -103], ordered: true }, feedback: "Factor 3 out first: {{3(x^2 + 4x)}}. Then b is half of 4, which is 2." },
        ],
        solution: [
          "{{3x^2 + 12x + 5 = 3(x^2 + 4x) + 5}}.",
          "{{x^2 + 4x = (x + 2)^2 - 4}}.",
          "{{3[(x + 2)^2 - 4] + 5 = 3(x + 2)^2 - 12 + 5 = 3(x + 2)^2 - 7}}.",
          "a = 3, b = 2, c = −7.",
        ],
        solutions: [
          { label: "Factor out a", steps: ["As above: {{3(x + 2)^2 - 7}}."] },
          { label: "Compare coefficients", steps: ["{{a(x + b)^2 + c = ax^2 + 2abx + ab^2 + c}}.", "{{x^2}}: a = 3. x: 2ab = 12, so 6b = 12 and b = 2.", "Constant: {{ab^2 + c = 12 + c = 5}}, so c = −7."] },
        ],
        commonError: "Subtracting {{2^2 = 4}} instead of 3 × 4 = 12 — the 3 outside multiplies everything in the bracket.",
        difficulty: "challenge",
        guideRef: "completing-the-square",
        hints: ["Take 3 out of the first two terms.", "Complete the square on {{x^2 + 4x}}.", "Multiply out the 3 carefully — it multiplies the −4 too."],
        strategy: "Compare coefficients",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "expand-factorise-p4-q13",
        question:
          "A rectangular courtyard measures (2x + 5) m by (x + 3) m. A square reflecting pool of side (x + 1) m is built in one corner. The rest of the courtyard is paved.\n\n(a) Show that the paved area, in m², is {{x^2 + 9x + 14}}.\n\n(b) Factorise {{x^2 + 9x + 14}}.",
        marks: 3,
        modelAnswer:
          "(a) Courtyard: {{(2x + 5)(x + 3) = 2x^2 + 6x + 5x + 15 = 2x^2 + 11x + 15}}.\n\nPool: {{(x + 1)^2 = x^2 + 2x + 1}}.\n\nPaved area: {{2x^2 + 11x + 15 - (x^2 + 2x + 1) = x^2 + 9x + 14}}.\n\n(b) Product 14, sum 9: 2 and 7. {{x^2 + 9x + 14 = (x + 2)(x + 7)}}.",
        markScheme: [
          { point: "Courtyard area {{2x^2 + 11x + 15}} and pool area {{x^2 + 2x + 1}}", keywords: ["2x^2 + 11x + 15", "x^2 + 2x + 1"] },
          { point: "Subtracts the whole pool area to reach {{x^2 + 9x + 14}}", keywords: ["x^2 + 9x + 14", "subtract", "minus", "- (x^2 + 2x + 1)"] },
          { point: "(x + 2)(x + 7)", keywords: ["(x + 2)(x + 7)", "(x+2)(x+7)", "(x + 7)(x + 2)"] },
        ],
        commonError: "Writing {{(x + 1)^2 = x^2 + 1}}, or subtracting only the {{x^2}} term of the pool area.",
        difficulty: "core",
        guideRef: "expanding-brackets",
        hints: ["Paved area = courtyard area − pool area.", "Expand both, then subtract the whole of the pool area (bracket it).", "For (b), find two numbers with product 14 and sum 9."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "expand-factorise-p4-q14",
        question:
          "{{x^4 - 81}} can be factorised fully as {{(x^2 + a)(x + b)(x - b)}}, where a and b are positive integers.\n\nFind a and b. Give a and then b, separated by a comma.",
        answer: { type: "list", values: [9, 3], ordered: true, display: "a = 9, b = 3: {{(x^2 + 9)(x + 3)(x - 3)}}" },
        traps: [
          { spec: { type: "list", values: [9, 9], ordered: true }, feedback: "{{x^2 - 9}} is itself a difference of two squares: (x + 3)(x − 3). So b = 3." },
          { spec: { type: "list", values: [81, 9], ordered: true }, feedback: "{{x^4 = (x^2)^2}} and 81 = {{9^2}}, so the first step gives {{(x^2 + 9)(x^2 - 9)}}: a = 9." },
        ],
        solution: [
          "{{x^4 - 81 = (x^2)^2 - 9^2 = (x^2 + 9)(x^2 - 9)}}.",
          "{{x^2 - 9 = (x + 3)(x - 3)}}.",
          "{{x^2 + 9}} doesn't factorise (a sum of squares, always positive).",
          "So a = 9, b = 3.",
        ],
        commonError: "Stopping at {{(x^2 + 9)(x^2 - 9)}}, or trying to factorise {{x^2 + 9}} as (x + 3)(x + 3).",
        difficulty: "challenge",
        guideRef: "harder-algebra",
        hints: ["Think of {{x^4}} as {{(x^2)^2}}.", "Use the difference of two squares once — then look again.", "One of your brackets is another difference of two squares."],
        strategy: "Spot the structure",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "expand-factorise-p4-q15",
        question:
          "Prove that the sum of the squares of any two consecutive odd numbers is always 2 more than a multiple of 8.",
        marks: 4,
        modelAnswer:
          "Let the odd numbers be 2n + 1 and 2n + 3, where n is an integer.\n\n{{(2n + 1)^2 + (2n + 3)^2 = 4n^2 + 4n + 1 + 4n^2 + 12n + 9 = 8n^2 + 16n + 10}}.\n\n{{8n^2 + 16n + 10 = 8(n^2 + 2n + 1) + 2}}.\n\n{{n^2 + 2n + 1}} is an integer, so the sum is 2 more than a multiple of 8.",
        markScheme: [
          { point: "Uses algebraic consecutive odd numbers, e.g. 2n + 1 and 2n + 3", keywords: ["2n + 1", "2n+1", "2n + 3", "2n+3", "2n - 1"] },
          { point: "Expands both squares correctly", keywords: ["4n^2 + 4n + 1", "4n^2 + 12n + 9", "4n^2"] },
          { point: "Sum {{8n^2 + 16n + 10}}", keywords: ["8n^2 + 16n + 10", "8n^2"] },
          { point: "Writes as {{8(n^2 + 2n + 1) + 2}} and concludes", keywords: ["8(n^2 + 2n + 1) + 2", "+ 2", "multiple of 8", "8(n + 1)^2 + 2"] },
        ],
        commonError: "Using n and n + 2 (not necessarily odd), or 2n + 1 and 2n + 2 (one is even).",
        solutions: [
          { label: "Start from 2n + 1", steps: ["Sum = {{8n^2 + 16n + 10 = 8(n + 1)^2 + 2}}."] },
          { label: "Start symmetrically", steps: ["Use 2n − 1 and 2n + 1: {{(2n - 1)^2 + (2n + 1)^2 = 8n^2 + 2}}. The middle terms cancel — neater algebra."] },
        ],
        difficulty: "challenge",
        guideRef: "harder-algebra",
        hints: ["How do you write any odd number using an integer n? What is the next odd number?", "Square both and add.", "Write the result as 8 × (something) + 2."],
        strategy: "Introduce a variable",
      },
    ],
  },
];
