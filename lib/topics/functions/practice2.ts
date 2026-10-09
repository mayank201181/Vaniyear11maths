// ---------------------------------------------------------------------------
// Functions — Practice Papers 3 and 4.
// Paper 3: mixed practice — fluency, context, spot-the-error, proof.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher function questions.
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "functions-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "functions-p3-q01",
        question: "g(x) = 5 − 2x\n\nFind g(−4).",
        answer: { type: "number", value: 13 },
        traps: [
          { spec: { type: "number", value: -3 }, feedback: "−2 × (−4) = +8, not −8. Two negatives multiply to a positive, so g(−4) = 5 + 8." },
        ],
        solution: ["g(−4) means replace every x with −4.", "g(−4) = 5 − 2 × (−4) = 5 + 8 = 13."],
        commonError: "Losing the double negative: 5 − 2 × (−4) is 5 + 8, not 5 − 8.",
        difficulty: "warmup",
        guideRef: "functions-as-mappings",
        hints: ["g(−4) is the output when the input is −4.", "Put −4 in brackets: 5 − 2 × (−4)."],
        strategy: "Substitute carefully",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "functions-p3-q02",
        question: "h(x) = {{(3x + 1)/(x - 2)}}\n\nFind h(5). Give your answer as a fraction.",
        answer: { type: "fraction", n: 16, d: 3, display: "{{16/3}}" },
        traps: [
          { spec: { type: "fraction", n: 16, d: 5 }, feedback: "The denominator is x − 2, so it becomes 5 − 2 = 3, not 5." },
        ],
        solution: ["Numerator: 3 × 5 + 1 = 16.", "Denominator: 5 − 2 = 3.", "h(5) = {{16/3}}."],
        commonError: "Substituting into the numerator only.",
        difficulty: "warmup",
        guideRef: "functions-as-mappings",
        hints: ["Replace every x — top and bottom — with 5.", "Work out the numerator and denominator separately."],
        strategy: "Substitute carefully",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "functions-p3-q03",
        question: "f(x) = 4x − 7\n\nGiven that f(x) = 13, find the value of x.",
        answer: { type: "number", value: 5 },
        traps: [
          { spec: { type: "number", value: 45 }, feedback: "45 is f(13). Here 13 is the *output*: solve 4x − 7 = 13 to find the input." },
          { spec: { type: "number", value: 1.5 }, feedback: "Undo the −7 by *adding* 7: 4x = 20, not 4x = 6." },
        ],
        solution: ["f(x) = 13 means 4x − 7 = 13.", "4x = 20.", "x = 5. Check: f(5) = 20 − 7 = 13. ✓"],
        commonError: "Working out f(13) instead of solving f(x) = 13.",
        difficulty: "warmup",
        guideRef: "functions-as-mappings",
        hints: ["Is 13 the input or the output?", "Set up the equation 4x − 7 = 13 and solve it."],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "functions-p3-q04",
        question: "f(x) = {{7/(2x + 5)}}\n\nState the value of x that must be excluded from the domain of f. Give your answer as a decimal.",
        answer: { type: "number", value: -2.5, allowFraction: false },
        traps: [
          { spec: { type: "number", value: 2.5 }, feedback: "Check: 2 × 2.5 + 5 = 10, which is fine. You need 2x + 5 = 0, so x is negative." },
          { spec: { type: "number", value: -5 }, feedback: "2 × (−5) + 5 = −5, not 0. Solve 2x + 5 = 0 fully: divide by 2 as well." },
        ],
        solution: ["You cannot divide by zero, so exclude the x that makes 2x + 5 = 0.", "2x = −5, so x = −2.5."],
        commonError: "Excluding x = 0 out of habit — the danger is the *denominator* being 0, not x.",
        difficulty: "warmup",
        guideRef: "domain-range",
        hints: ["Which operation is impossible?", "Solve denominator = 0."],
        strategy: "Look for the forbidden operation",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "functions-p3-q05",
        question: "f(x) = 3x − 1 and g(x) = {{x^2 + 2}}\n\nFind fg(−2).",
        answer: { type: "number", value: 17 },
        traps: [
          { spec: { type: "number", value: 51 }, feedback: "51 is gf(−2) — you applied f first. In fg(−2) the function next to the input, g, acts first." },
          { spec: { type: "number", value: -42 }, feedback: "fg(−2) is not f(−2) × g(−2). It means f of g(−2): put −2 into g, then the result into f." },
          { spec: { type: "number", value: -7 }, feedback: "g(−2) = 4 + 2 = 6, not −2: {{(-2)^2 = 4}}. Then f(6) = 17." },
        ],
        solution: ["fg(−2) = f(g(−2)) — do g first.", "g(−2) = {{(-2)^2 + 2 = 6}}.", "f(6) = 3 × 6 − 1 = 17."],
        commonError: "Applying f first (giving gf), or multiplying f(−2) by g(−2).",
        difficulty: "core",
        guideRef: "composite-functions",
        hints: ["Which function is closest to the (−2)? That one acts first.", "Find g(−2) first.", "Now feed g(−2) = 6 into f."],
        strategy: "Work from the inside out",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "functions-p3-q06",
        question: "f(x) = {{(2x + 3)/5}}\n\nFind {{f^(-1)(x)}}.",
        answer: { type: "expression", expr: "(5x-3)/2", display: "{{(5x - 3)/2}}" },
        traps: [
          { spec: { type: "expression", expr: "(5x+3)/2" }, feedback: "Undo +3 with −3. Reverse the flowchart: ×5, then −3, then ÷2." },
          { spec: { type: "expression", expr: "5/(2x+3)" }, feedback: "You've flipped the fraction — that is {{1/f(x)}}, the reciprocal. {{f^(-1)}} undoes f: reverse the steps ×2, +3, ÷5." },
          { spec: { type: "expression", expr: "5x/2-3" }, feedback: "Order matters: f did ×2, +3, ÷5, so the inverse does ×5, −3, ÷2 — subtract 3 *before* halving." },
        ],
        solution: [
          "Write y = {{(2x + 3)/5}} and swap x and y: x = {{(2y + 3)/5}}.",
          "Multiply by 5: 5x = 2y + 3.",
          "Subtract 3: 5x − 3 = 2y.",
          "Divide by 2: y = {{(5x - 3)/2}}, so {{f^(-1)(x) = (5x - 3)/2}}.",
        ],
        solutions: [
          { label: "Swap and rearrange", steps: ["x = {{(2y + 3)/5}} → 5x = 2y + 3 → y = {{(5x - 3)/2}}."] },
          { label: "Reverse the flowchart", steps: ["f: × 2 → + 3 → ÷ 5.", "Inverse, backwards: × 5 → − 3 → ÷ 2, giving {{(5x - 3)/2}}. Quicker when x appears only once."] },
        ],
        commonError: "Confusing {{f^(-1)(x)}} with {{1/f(x)}}.",
        difficulty: "core",
        guideRef: "inverse-functions",
        hints: ["Write y = f(x), then swap x and y.", "Clear the fraction by multiplying both sides by 5.", "Get 2y on its own, then divide by 2."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "functions-p3-q07",
        question:
          "A hawker centre hires out a stall for private events. The cost, in dollars, for n guests is given by the function C(n) = 45 + 3.5n.\n\nSiti pays $157 for her CCA's end-of-year party. Work out how many guests there were.",
        answer: { type: "number", value: 32 },
        traps: [
          { spec: { type: "number", value: 594.5 }, feedback: "That is C(157) — the cost for 157 guests. Here $157 is the *output*: solve 45 + 3.5n = 157." },
          { spec: { type: "number", value: 44.86 }, feedback: "You divided 157 by 3.5 without first taking off the fixed $45 hire charge." },
        ],
        solution: ["C(n) = 157, so 45 + 3.5n = 157.", "3.5n = 112.", "n = 112 ÷ 3.5 = 32 guests. Check: 45 + 3.5 × 32 = 45 + 112 = 157. ✓"],
        commonError: "Substituting 157 for n instead of setting the output equal to 157.",
        difficulty: "core",
        guideRef: "functions-as-mappings",
        hints: ["Is $157 an input or an output of C?", "Solve C(n) = 157.", "Take off the fixed 45 first, then divide by 3.5."],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "functions-p3-q08",
        question:
          "f(x) = {{x^2 - 6x + 11}}, where x can be any real number.\n\nThe range of f is f(x) ≥ k. Find the value of k.",
        answer: { type: "number", value: 2 },
        traps: [
          { spec: { type: "number", value: 3 }, feedback: "x = 3 is *where* the minimum happens. The range is about outputs: find f(3)." },
          { spec: { type: "number", value: 11 }, feedback: "11 is f(0), the y-intercept. The curve dips lower than that — complete the square to find the minimum." },
        ],
        solution: [
          "Complete the square: {{x^2 - 6x + 11 = (x - 3)^2 - 9 + 11 = (x - 3)^2 + 2}}.",
          "{{(x - 3)^2 >= 0}}, so f(x) ≥ 2, with equality at x = 3.",
          "Range: f(x) ≥ 2, so k = 2.",
        ],
        solutions: [
          { label: "Complete the square", steps: ["{{(x - 3)^2 + 2}} — a square is never negative, so the least value is 2."] },
          { label: "Symmetry of the parabola", steps: ["The axis of symmetry is x = {{-(-6)/2 = 3}}.", "f(3) = 9 − 18 + 11 = 2."] },
        ],
        commonError: "Giving the x-coordinate of the turning point instead of the y-value.",
        difficulty: "core",
        guideRef: "domain-range",
        hints: ["The range is the set of possible *outputs*. What is the lowest point of this U-shaped graph?", "Complete the square.", "{{(x - 3)^2}} is never negative, so what is the smallest value of {{(x - 3)^2 + 2}}?"],
        strategy: "Complete the square",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "functions-p3-q09",
        question: "f(x) = {{x^2}} and g(x) = x + 4\n\nSolve fg(x) = gf(x).",
        answer: { type: "number", value: -1.5 },
        traps: [
          { spec: { type: "number", value: -2 }, feedback: "Check your expansion: {{(x + 4)^2 = x^2 + 8x + 16}}, so 8x + 16 = 4 gives 8x = −12." },
          { spec: { type: "number", value: 1.5 }, feedback: "Sign slip: 8x = 4 − 16 = −12, so x is negative." },
        ],
        solution: [
          "fg(x) = f(x + 4) = {{(x + 4)^2 = x^2 + 8x + 16}}.",
          "gf(x) = g({{x^2}}) = {{x^2 + 4}}.",
          "{{x^2 + 8x + 16 = x^2 + 4}}, so 8x = −12.",
          "x = −1.5. Check: fg(−1.5) = {{2.5^2 = 6.25}}; gf(−1.5) = 2.25 + 4 = 6.25. ✓",
        ],
        commonError: "Writing {{(x + 4)^2 = x^2 + 16}}.",
        difficulty: "core",
        guideRef: "composite-functions",
        hints: ["Find fg(x) and gf(x) as expressions first.", "fg(x) = {{(x + 4)^2}} — expand it properly.", "The {{x^2}} terms cancel, leaving a linear equation."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "functions-p3-q10",
        question: "f(x) = {{1/(x + 3)}}, x ≠ −3\n\nFind {{f^(-1)(2)}}. Give your answer as a decimal.",
        answer: { type: "number", value: -2.5, allowFraction: false },
        traps: [
          { spec: { type: "number", value: 0.2 }, feedback: "0.2 is f(2). {{f^(-1)(2)}} asks: which input does f send to 2?" },
          { spec: { type: "number", value: 5 }, feedback: "{{1/f(2) = 5}}. {{f^(-1)}} is the inverse function, not the reciprocal of f." },
        ],
        solution: [
          "{{f^(-1)(2)}} is the value of x for which f(x) = 2.",
          "{{1/(x + 3) = 2}}, so x + 3 = {{1/2}}.",
          "x = 0.5 − 3 = −2.5. Check: f(−2.5) = {{1/0.5 = 2}}. ✓",
        ],
        solutions: [
          { label: "Solve f(x) = 2", steps: ["{{1/(x + 3) = 2}} → x = −2.5. No need for the full inverse."] },
          { label: "Find the inverse first", steps: ["x = {{1/(y + 3)}} → y + 3 = {{1/x}} → {{f^(-1)(x) = 1/x - 3}}.", "{{f^(-1)(2) = 1/2 - 3 = -2.5}}."] },
        ],
        commonError: "Working out f(2) instead.",
        difficulty: "core",
        guideRef: "inverse-functions",
        hints: ["{{f^(-1)(2)}} asks: what input gives an output of 2?", "Solve {{1/(x + 3) = 2}}.", "Take reciprocals of both sides."],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "written",
        id: "functions-p3-q11",
        question:
          "f(x) = {{1/(x^2 - 9)}}\n\nPriya says, \"The only value that must be excluded from the domain of f is x = 3.\"\n\nExplain why Priya is wrong, and state the values that must be excluded.",
        marks: 3,
        modelAnswer:
          "The function has no value when the denominator is zero: {{x^2 - 9 = 0}}. This gives {{x^2 = 9}}, so x = 3 **or** x = −3, because {{(-3)^2 = 9}} too. Priya has missed the negative square root. Both x = 3 and x = −3 must be excluded.",
        markScheme: [
          { point: "Sets the denominator equal to zero", keywords: ["denominator", "x^2 - 9 = 0", "divide by zero", "zero"] },
          { point: "Notes that (−3)² = 9 as well / a square has two roots", keywords: ["-3", "−3", "negative", "two", "both", "±3"] },
          { point: "States x = 3 and x = −3 are excluded", keywords: ["x ≠ ±3", "x = -3", "x = −3", "±3", "3 and -3", "3 and −3"] },
        ],
        commonError: "Forgetting the negative root when solving {{x^2 = 9}}.",
        difficulty: "core",
        guideRef: "domain-range",
        hints: ["When does f fail to give an output?", "Solve {{x^2 - 9 = 0}}. How many solutions does it have?"],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "functions-p3-q12",
        question:
          "f(x) = x + 2 and g(x) = 3x\n\nEthan works out fg(1) like this:\n\n    f(1) = 3, g(1) = 3, so fg(1) = 3 × 3 = 9\n\nExplain Ethan's mistake and work out the correct value of fg(1).",
        marks: 3,
        modelAnswer:
          "Ethan has multiplied f(1) by g(1). But fg(1) is a composite function: it means f(g(1)) — apply g first, then apply f to the result. g(1) = 3 × 1 = 3, then f(3) = 3 + 2 = 5. So fg(1) = 5.",
        markScheme: [
          { point: "Identifies that fg does not mean f × g (he multiplied)", keywords: ["multiplied", "multiply", "not times", "product", "not f(1) × g(1)"] },
          { point: "States fg(1) = f(g(1)), g applied first", keywords: ["f(g(1))", "g first", "first", "then f", "composite"] },
          { point: "Correct value 5 from g(1) = 3, f(3) = 5", keywords: ["5", "f(3)"] },
        ],
        commonError: "Reading fg(x) as a product. In function notation, fg(x) always means f(g(x)).",
        difficulty: "core",
        guideRef: "composite-functions",
        hints: ["What does fg(1) mean in function notation?", "Do g first, then feed the answer into f."],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "functions-p3-q13",
        question:
          "f(x) = {{(x + 4)/(x - 1)}}, x ≠ 1\n\n(a) Show that ff(x) = x.\n\n(b) Hence write down {{f^(-1)(x)}}, explaining your reasoning.",
        marks: 4,
        modelAnswer:
          "(a) ff(x) = {{((x + 4)/(x - 1) + 4) / ((x + 4)/(x - 1) - 1)}}. Multiply top and bottom by (x − 1): numerator = x + 4 + 4(x − 1) = 5x, denominator = x + 4 − (x − 1) = 5. So ff(x) = {{(5x)/5 = x}}.\n\n(b) Since f(f(x)) = x, applying f a second time undoes f. So f is its own inverse (self-inverse): {{f^(-1)(x) = (x + 4)/(x - 1)}}.",
        markScheme: [
          { point: "Substitutes f(x) into f correctly", keywords: ["(x+4)/(x-1) + 4", "f((x+4)/(x-1))", "substitute"] },
          { point: "Clears the inner fractions (× (x − 1)) to get numerator 5x", keywords: ["5x", "x - 1", "x−1", "multiply"] },
          { point: "Denominator simplifies to 5, giving ff(x) = x", keywords: ["5", "= x", "cancel"] },
          { point: "Concludes f is self-inverse so f⁻¹(x) = (x + 4)/(x − 1)", keywords: ["self-inverse", "own inverse", "(x+4)/(x-1)", "same"] },
        ],
        solutions: [
          { label: "Algebra", steps: ["Multiply numerator and denominator of ff(x) by (x − 1) to get {{(5x)/5 = x}}."] },
          { label: "Sanity check with a number", steps: ["f(2) = {{6/1 = 6}}; f(6) = {{10/5 = 2}}. Back to 2 — consistent with ff(x) = x (but a check is not a proof)."] },
        ],
        commonError: "Subtracting −(x − 1) as −x − 1: the denominator is x + 4 − x + 1 = 5.",
        difficulty: "challenge",
        guideRef: "inverse-functions",
        hints: [
          "Replace every x in f with {{(x + 4)/(x - 1)}}.",
          "You get a fraction inside a fraction. Multiply the top and bottom by (x − 1).",
          "Numerator: (x + 4) + 4(x − 1). Denominator: (x + 4) − (x − 1).",
          "If doing f twice gets you back to x, what does the second f do to the first?",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "functions-p3-q14",
        question:
          "f(x) = {{(3x - 2)/(x + 4)}}, x ≠ −4\n\nThere is exactly one real number that f(x) can never equal. Find it.",
        answer: { type: "number", value: 3 },
        traps: [
          { spec: { type: "number", value: -4 }, feedback: "−4 is excluded from the *domain* (the input). The question asks about the *range* — the output f(x) can never take." },
          { spec: { type: "number", value: 0 }, feedback: "f({{2/3}}) = 0, so 0 is a possible output. Look for the output that makes the rearranged equation impossible." },
        ],
        solution: [
          "Let y = {{(3x - 2)/(x + 4)}} and try to solve for x.",
          "y(x + 4) = 3x − 2 → xy + 4y = 3x − 2 → xy − 3x = −4y − 2 → x(y − 3) = −4y − 2.",
          "x = {{(-4y - 2)/(y - 3)}}, which has a value for every y except y = 3.",
          "So f(x) can never equal 3. (If it did, x × 0 = −14, impossible.)",
        ],
        solutions: [
          { label: "Rearrange for x", steps: ["x = {{(-4y - 2)/(y - 3)}} fails only at y = 3."] },
          { label: "Split the fraction", steps: ["{{(3x - 2)/(x + 4) = 3 - 14/(x + 4)}}.", "{{14/(x + 4)}} is never 0, so f(x) is never 3 — the horizontal asymptote is y = 3."] },
        ],
        commonError: "Mixing up the excluded input (x = −4) with the excluded output (y = 3).",
        difficulty: "challenge",
        guideRef: "domain-range",
        hints: [
          "Suppose f(x) = y. Can you always find x?",
          "Rearrange y = {{(3x - 2)/(x + 4)}} to make x the subject.",
          "Which value of y makes your expression for x impossible?",
        ],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "functions-p3-q15",
        question:
          "f(x) = 2x + 1\n\nThe function f is applied five times in a row, so that f(f(f(f(f(x))))) = 127.\n\nFind x.",
        answer: { type: "number", value: 3 },
        traps: [
          { spec: { type: "number", value: 63 }, feedback: "63 is the input to the *last* f only. Keep undoing: you need to reverse f five times." },
          { spec: { type: "number", value: 12.4 }, feedback: "Five applications don't give 10x + 5 — each f doubles everything so far, so the multiplier is {{2^5 = 32}}." },
        ],
        solution: [
          "Undo f five times. {{f^(-1)(x) = (x - 1)/2}}.",
          "127 → 63 → 31 → 15 → 7 → 3.",
          "So x = 3. Check: 3 → 7 → 15 → 31 → 63 → 127. ✓",
        ],
        solutions: [
          { label: "Work backwards", steps: ["Apply {{f^(-1)(x) = (x - 1)/2}} five times: 127, 63, 31, 15, 7, 3."] },
          { label: "Find the pattern", steps: ["ff(x) = 4x + 3, fff(x) = 8x + 7, … so applying f n times gives {{2^n x + 2^n - 1}}.", "n = 5: 32x + 31 = 127, so 32x = 96, x = 3."] },
        ],
        commonError: "Thinking five applications of 2x + 1 give 10x + 5.",
        difficulty: "challenge",
        guideRef: "composite-functions",
        hints: [
          "Try ff(x) and fff(x) as expressions. See a pattern?",
          "Or work backwards: what input does f send to 127?",
          "{{f^(-1)(x) = (x - 1)/2}}. Apply it five times.",
        ],
        strategy: "Work backwards",
      },
    ],
  },
  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "functions-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "functions-p4-q01",
        question: "f is the function such that f(x) = {{(x^2 + 3)/(2x - 1)}}\n\nFind f(3). Give your answer as a decimal.",
        answer: { type: "number", value: 2.4, allowFraction: false },
        traps: [
          { spec: { type: "number", value: 1.2 }, feedback: "{{3^2 = 9}}, not 6: the numerator is 9 + 3 = 12." },
          { spec: { type: "number", value: 2 }, feedback: "The denominator is 2 × 3 − 1 = 5, not 6." },
        ],
        solution: ["Numerator: {{3^2 + 3 = 12}}.", "Denominator: 2 × 3 − 1 = 5.", "f(3) = {{12/5}} = 2.4."],
        commonError: "Squaring 3 as 6.",
        difficulty: "warmup",
        guideRef: "functions-as-mappings",
        hints: ["Replace every x with 3.", "Work out the top and the bottom separately, then divide."],
        strategy: "Substitute carefully",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "functions-p4-q02",
        question:
          "g is the function such that g(x) = {{sqrt(2x - 5)}}\n\nWrite down the domain of g, using an inequality for x.",
        answer: {
          type: "text",
          accept: ["x>=2.5", "x≥2.5", "x>=5/2", "x≥5/2", "2.5<=x", "2.5≤x", "5/2<=x", "5/2≤x"],
          display: "x ≥ 2.5",
        },
        traps: [
          { spec: { type: "text", accept: ["x>2.5", "x>5/2", "2.5<x"] }, feedback: "Nearly: {{sqrt(0) = 0}} is fine, so x = 2.5 is allowed. Use ≥ (type >=)." },
          { spec: { type: "text", accept: ["x>=5", "x≥5", "x>=0", "x≥0"] }, feedback: "The whole expression under the root, 2x − 5, must be ≥ 0. Solve 2x − 5 ≥ 0." },
        ],
        solution: ["You can't square-root a negative number, so 2x − 5 ≥ 0.", "2x ≥ 5, so x ≥ 2.5.", "x = 2.5 is allowed, since {{sqrt(0) = 0}}."],
        commonError: "Using > instead of ≥ — the square root of 0 exists.",
        difficulty: "warmup",
        guideRef: "domain-range",
        hints: ["What can't you take the square root of?", "Solve 2x − 5 ≥ 0. (Type ≥ as >=.)"],
        strategy: "Look for the forbidden operation",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "functions-p4-q03",
        question: "f(x) = 3x − 2\n\nGiven that f(a) = 2a + 7, find the value of a.",
        answer: { type: "number", value: 9 },
        traps: [
          { spec: { type: "number", value: 1 }, feedback: "Collect the constants carefully: 3a − 2 = 2a + 7 gives a = 7 + 2 = 9." },
          { spec: { type: "number", value: 5 }, feedback: "a = 5 gives f(5) = 13, but 2 × 5 + 7 = 17. Solve 3a − 2 = 2a + 7." },
        ],
        solution: ["f(a) = 3a − 2.", "3a − 2 = 2a + 7.", "a = 9. Check: f(9) = 25 and 2 × 9 + 7 = 25. ✓"],
        commonError: "Moving −2 across without changing its sign.",
        difficulty: "warmup",
        guideRef: "functions-as-mappings",
        hints: ["Write f(a) by replacing x with a.", "Solve 3a − 2 = 2a + 7."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "functions-p4-q04",
        question:
          "f(x) = {{1/(x + 1)}}, x ≠ −1     g(x) = 2x − 3\n\nFind fg(4). Give your answer as a fraction.",
        answer: { type: "fraction", n: 1, d: 6, display: "{{1/6}}" },
        traps: [
          { spec: { type: "number", value: -2.6 }, feedback: "−2.6 is gf(4) — you used f first. In fg(4), g acts first." },
          { spec: { type: "fraction", n: 1, d: 5 }, feedback: "{{1/5}} is f(4). Put 4 into g first: g(4) = 5." },
        ],
        solution: ["fg(4) = f(g(4)).", "g(4) = 2 × 4 − 3 = 5.", "f(5) = {{1/(5 + 1) = 1/6}}."],
        commonError: "Applying the functions in the wrong order.",
        difficulty: "warmup",
        guideRef: "composite-functions",
        hints: ["Which function acts first in fg(4)?", "Work out g(4), then put it into f."],
        strategy: "Work from the inside out",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "functions-p4-q05",
        question: "f(x) = 4x − 1     g(x) = {{x^2 + 3}}\n\nFind fg(x). Simplify your answer.",
        answer: { type: "expression", expr: "4x^2+11", form: "simplified", display: "{{4x^2 + 11}}" },
        traps: [
          { spec: { type: "expression", expr: "16x^2-8x+4" }, feedback: "That is gf(x) = {{(4x - 1)^2 + 3}}. For fg(x), put g(x) *into* f." },
          { spec: { type: "expression", expr: "(4x-1)(x^2+3)" }, feedback: "fg(x) is not f(x) × g(x). Replace the x in f with {{x^2 + 3}}." },
          { spec: { type: "expression", expr: "4x^2+2" }, feedback: "Expand the bracket fully: {{4(x^2 + 3) = 4x^2 + 12}}, then subtract 1." },
        ],
        solution: ["fg(x) = f({{x^2 + 3}}).", "= {{4(x^2 + 3) - 1}}.", "= {{4x^2 + 12 - 1 = 4x^2 + 11}}."],
        commonError: "Writing {{4x^2 + 3 - 1}} — the 4 multiplies the whole of g(x).",
        difficulty: "core",
        guideRef: "composite-functions",
        hints: ["fg(x) = f(g(x)). What goes in place of x in f?", "Write f with a bracket: 4(  ) − 1, and put g(x) inside.", "Expand and collect."],
        strategy: "Work from the inside out",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "functions-p4-q06",
        question:
          "f(x) = {{(4x + 1)/(x - 3)}}, x ≠ 3\n\nExpress the inverse function {{f^(-1)}} in the form {{f^(-1)(x) = ...}}",
        answer: { type: "expression", expr: "(3x+1)/(x-4)", display: "{{(3x + 1)/(x - 4)}}" },
        traps: [
          { spec: { type: "expression", expr: "(x-3)/(4x+1)" }, feedback: "That is {{1/f(x)}}, the reciprocal. The inverse undoes f: swap x and y, then make y the subject." },
          { spec: { type: "expression", expr: "(3x-1)/(x-4)" }, feedback: "Check the sign when you collect: xy − 3x = 4y + 1 → xy − 4y = 3x + 1, so the numerator is 3x + 1." },
        ],
        solution: [
          "Let x = {{(4y + 1)/(y - 3)}} (swap x and y).",
          "x(y − 3) = 4y + 1 → xy − 3x = 4y + 1.",
          "Collect the y terms: xy − 4y = 3x + 1 → y(x − 4) = 3x + 1.",
          "{{f^(-1)(x) = (3x + 1)/(x - 4)}}. Check: f(0) = {{-1/3}} and {{f^(-1)(-1/3) = 0/(-13/3) = 0}}. ✓",
        ],
        commonError: "Not factorising out y after collecting the y terms, so y is left on both sides.",
        difficulty: "core",
        guideRef: "inverse-functions",
        hints: [
          "Swap x and y, then multiply both sides by (y − 3).",
          "x appears in two places, so a flowchart won't work. Get all the y terms on one side.",
          "Factorise y out: y(x − 4) = …",
        ],
        strategy: "Collect and factorise",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "functions-p4-q07",
        question:
          "f(x) = 2x − 1 with domain 1 ≤ x ≤ 6.\n\nThe range of f is a ≤ f(x) ≤ b. Find a and b. Give a first, then b.",
        answer: { type: "list", values: [1, 11], ordered: true, display: "a = 1, b = 11" },
        traps: [
          { spec: { type: "list", values: [1, 6], ordered: true }, feedback: "1 ≤ x ≤ 6 is the domain (inputs). The range is the outputs: find f(1) and f(6)." },
          { spec: { type: "list", values: [-1, 11], ordered: true }, feedback: "−1 is f(0), but 0 isn't in the domain. The smallest input is 1, so the smallest output is f(1) = 1." },
        ],
        solution: [
          "f is a straight line with positive gradient, so it is increasing.",
          "Least output: f(1) = 1. Greatest output: f(6) = 11.",
          "Range: 1 ≤ f(x) ≤ 11, so a = 1, b = 11.",
        ],
        commonError: "Copying the domain as the range.",
        difficulty: "core",
        guideRef: "domain-range",
        hints: ["Range = outputs. Is f increasing or decreasing?", "Find the outputs at the two ends of the domain."],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "functions-p4-q08",
        question: "f(x) = 3x − 1     g(x) = {{x^2}}\n\nSolve fg(x) = 26.",
        answer: { type: "list", values: [3, -3], ordered: false, display: "x = 3 or x = −3" },
        traps: [
          { spec: { type: "list", values: [3], ordered: false }, feedback: "{{x^2 = 9}} has two solutions. Don't forget x = −3." },
          { spec: { type: "list", values: [-4.33, 5], ordered: false, tolerance: 0.01 }, feedback: "You've solved gf(x) = 26. In fg(x), g acts first: fg(x) = {{3x^2 - 1}}." },
        ],
        solution: ["fg(x) = f({{x^2}}) = {{3x^2 - 1}}.", "{{3x^2 - 1 = 26}} → {{3x^2 = 27}} → {{x^2 = 9}}.", "x = 3 or x = −3."],
        commonError: "Giving only the positive square root.",
        difficulty: "core",
        guideRef: "composite-functions",
        hints: ["First find fg(x) as an expression.", "fg(x) = {{3x^2 - 1}}. Set it equal to 26.", "A square root has two signs."],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "functions-p4-q09",
        question:
          "The function f converts a temperature of x °C to °F, where f(x) = 1.8x + 32.\n\nOn a hot afternoon in Singapore, a thermometer shows 104 °F.\n\nWork out {{f^(-1)(104)}}, the temperature in °C.",
        answer: { type: "number", value: 40 },
        traps: [
          { spec: { type: "number", value: 219.2 }, feedback: "219.2 is f(104): converting 104 °C to °F. {{f^(-1)}} goes the other way." },
          { spec: { type: "number", value: 39.8 }, feedback: "Subtract 32 *before* dividing by 1.8: (104 − 32) ÷ 1.8." },
        ],
        solution: [
          "{{f^(-1)(x) = (x - 32)/1.8}} (undo ×1.8 then +32, in reverse order).",
          "{{f^(-1)(104) = (104 - 32)/1.8 = 72/1.8 = 40}}.",
          "So 104 °F = 40 °C.",
        ],
        commonError: "Undoing the operations in the wrong order.",
        difficulty: "core",
        guideRef: "inverse-functions",
        hints: ["{{f^(-1)(104)}} is the input that f sends to 104.", "Solve 1.8x + 32 = 104.", "Subtract 32 first, then divide by 1.8."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "written",
        id: "functions-p4-q10",
        question: "f(x) = {{x/(x + 1)}}, x ≠ −1\n\nShow that ff(x) = {{x/(2x + 1)}}.",
        marks: 3,
        modelAnswer:
          "ff(x) = f({{x/(x + 1)}}) = {{(x/(x + 1)) / (x/(x + 1) + 1)}}.\n\nThe denominator is {{x/(x + 1) + (x + 1)/(x + 1) = (2x + 1)/(x + 1)}}.\n\nSo ff(x) = {{x/(x + 1) * (x + 1)/(2x + 1) = x/(2x + 1)}}, as required.",
        markScheme: [
          { point: "Substitutes x/(x + 1) for x in f", keywords: ["x/(x+1) + 1", "f(x/(x+1))", "substitute"] },
          { point: "Combines the denominator into (2x + 1)/(x + 1)", keywords: ["2x + 1", "2x+1", "(x+1)/(x+1)", "common denominator"] },
          { point: "Cancels (x + 1) to reach x/(2x + 1)", keywords: ["cancel", "x/(2x+1)", "x+1"] },
        ],
        solutions: [
          { label: "Combine then divide", steps: ["Denominator: {{(2x + 1)/(x + 1)}}; dividing fractions, the (x + 1)s cancel."] },
          { label: "Multiply through", steps: ["Multiply top and bottom of ff(x) by (x + 1): {{x/(x + (x + 1)) = x/(2x + 1)}}. Quicker — one line."] },
        ],
        commonError: "Writing {{x/(x + 1) + 1}} as {{(x + 1)/(x + 1)}} — the 1 must be over (x + 1) as well before adding.",
        difficulty: "core",
        guideRef: "composite-functions",
        hints: ["Replace every x in f(x) with {{x/(x + 1)}}.", "Write 1 as {{(x + 1)/(x + 1)}} so you can add in the denominator.", "Or multiply the top and bottom of the big fraction by (x + 1)."],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "functions-p4-q11",
        question:
          "f(x) = {{x^2 + 3x}}\n\nSolve f(x) = 7. Give your solutions correct to 3 significant figures.",
        answer: { type: "list", values: [1.54, -4.54], ordered: false, tolerance: 0.005, display: "x = 1.54 or x = −4.54" },
        traps: [
          { spec: { type: "list", values: [-1.54, 4.54], ordered: false, tolerance: 0.005 }, feedback: "Signs reversed: b = +3, so −b = −3 in the formula." },
          { spec: { type: "list", values: [70], ordered: false }, feedback: "70 is f(7). Here 7 is the output: solve {{x^2 + 3x = 7}}." },
        ],
        solution: [
          "{{x^2 + 3x - 7 = 0}}, so a = 1, b = 3, c = −7.",
          "x = {{(-3 +- sqrt(9 + 28))/2 = (-3 +- sqrt(37))/2}}.",
          "{{sqrt(37) = 6.0827...}}, so x = 1.5413… or x = −4.5413…",
          "x = 1.54 or x = −4.54 (3 s.f.).",
        ],
        solutions: [
          { label: "Quadratic formula", steps: ["x = {{(-3 +- sqrt(37))/2}} → 1.54, −4.54."] },
          { label: "Complete the square", steps: ["{{(x + 1.5)^2 - 2.25 = 7}} → {{(x + 1.5)^2 = 9.25}} → x = −1.5 ± 3.041… → 1.54, −4.54."] },
        ],
        commonError: "Forgetting to rearrange to = 0 before using the formula (using c = 0 instead of c = −7).",
        difficulty: "core",
        guideRef: "functions-as-mappings",
        hints: ["Set {{x^2 + 3x = 7}} and rearrange to = 0.", "It doesn't factorise — use the quadratic formula.", "{{b^2 - 4ac = 9 + 28 = 37}}."],
        strategy: "Use the formula",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "functions-p4-q12",
        question:
          "f(x) = {{x^2 - 4x}}     g(x) = x + k, where k is a constant.\n\nGiven that x = 5 is a solution of fg(x) = 0, find the two possible values of k.",
        answer: { type: "list", values: [-5, -1], ordered: false, display: "k = −5 or k = −1" },
        traps: [
          { spec: { type: "list", values: [5, 1], ordered: false }, feedback: "Check: with k = 5, g(5) = 10 and f(10) = 60 ≠ 0. You need 5 + k = 0 or 5 + k = 4." },
          { spec: { type: "list", values: [0, 4], ordered: false }, feedback: "0 and 4 are the values g(5) must take (the roots of f). Now solve 5 + k = 0 and 5 + k = 4." },
        ],
        solution: [
          "fg(5) = f(5 + k) = 0.",
          "f(t) = t(t − 4) = 0 when t = 0 or t = 4.",
          "So 5 + k = 0 or 5 + k = 4, giving k = −5 or k = −1.",
          "Check k = −1: g(5) = 4, f(4) = 16 − 16 = 0. ✓  k = −5: g(5) = 0, f(0) = 0. ✓",
        ],
        solutions: [
          { label: "Use the roots of f", steps: ["f(t) = 0 ⇔ t = 0 or 4, so g(5) = 5 + k ∈ {0, 4}."] },
          { label: "Expand fully", steps: ["fg(x) = {{(x + k)^2 - 4(x + k)}}. At x = 5: {{(5 + k)^2 - 4(5 + k) = k^2 + 6k + 5 = 0}}.", "(k + 5)(k + 1) = 0, so k = −5 or −1. Longer, but works without spotting the shortcut."] },
        ],
        commonError: "Expanding fg(x) in general and getting lost, instead of substituting x = 5 straight away.",
        difficulty: "challenge",
        guideRef: "composite-functions",
        hints: [
          "fg(5) = f(g(5)). What is g(5) in terms of k?",
          "For which inputs t is f(t) = 0? Factorise {{t^2 - 4t}}.",
          "So 5 + k must equal one of those inputs.",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "functions-p4-q13",
        question:
          "h(x) = {{x^2}}, where x can be any real number. The graph of y = h(x) and the line y = 4 are shown.\n\n(a) Explain why h does not have an inverse function.\n\n(b) Suggest a restriction on the domain of h so that an inverse function exists, and write down {{h^(-1)(x)}} for your restricted domain.",
        diagram: `<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y equals x squared from x equals minus 3 to 3, with the horizontal line y equals 4 meeting the curve at x equals minus 2 and x equals 2"><rect x="0" y="0" width="320" height="230" fill="#ffffff"/><line x1="20" y1="200" x2="300" y2="200" stroke="#334155" stroke-width="1.5"/><line x1="160" y1="215" x2="160" y2="10" stroke="#334155" stroke-width="1.5"/><text x="304" y="204" font-size="12" font-family="sans-serif" fill="#1f2937">x</text><text x="165" y="16" font-size="12" font-family="sans-serif" fill="#1f2937">y</text><path d="M 40 20 Q 160 380 280 20" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="20" y1="120" x2="300" y2="120" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6 4"/><circle cx="80" cy="120" r="4" fill="#dc2626"/><circle cx="240" cy="120" r="4" fill="#dc2626"/><line x1="80" y1="196" x2="80" y2="204" stroke="#334155"/><line x1="240" y1="196" x2="240" y2="204" stroke="#334155"/><line x1="120" y1="196" x2="120" y2="204" stroke="#334155"/><line x1="200" y1="196" x2="200" y2="204" stroke="#334155"/><text x="80" y="218" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">−2</text><text x="120" y="218" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">−1</text><text x="200" y="218" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1</text><text x="240" y="218" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2</text><text x="150" y="116" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">4</text><text x="268" y="114" font-size="12" font-family="sans-serif" fill="#dc2626">y = 4</text><text x="250" y="40" font-size="12" font-family="sans-serif" fill="#1f2937">y = x²</text></svg>`,
        marks: 3,
        modelAnswer:
          "(a) h is many-to-one: two different inputs give the same output, e.g. h(2) = 4 and h(−2) = 4 (the line y = 4 meets the graph twice). An inverse would have to send 4 back to both 2 and −2, so it would not be a function.\n\n(b) Restrict the domain to x ≥ 0. Then h is one-to-one and {{h^(-1)(x) = sqrt(x)}}, x ≥ 0. (Alternatively x ≤ 0 with {{h^(-1)(x) = -sqrt(x)}}.)",
        markScheme: [
          { point: "Two inputs give the same output (many-to-one), with an example such as h(2) = h(−2) = 4", keywords: ["many-to-one", "two", "same output", "-2", "−2", "twice"] },
          { point: "So the inverse would map one input to two outputs — not a function", keywords: ["not a function", "two outputs", "one-to-one", "both"] },
          { point: "Restricts to x ≥ 0 with h⁻¹(x) = √x (or x ≤ 0 with −√x)", keywords: ["x ≥ 0", "x >= 0", "sqrt", "√x", "x ≤ 0"] },
        ],
        commonError: "Saying '{{x^2}} has no inverse because you can't square-root negatives' — the real issue is that two inputs share each output.",
        difficulty: "core",
        guideRef: "inverse-functions",
        hints: ["Where does the line y = 4 meet the graph?", "If {{h^(-1)(4)}} existed, what would it be — 2 or −2?", "Throw away half the parabola so each output comes from only one input."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "written",
        id: "functions-p4-q14",
        question:
          "f(x) = {{x^2 - 3}}     g(x) = 2x + 1\n\nShow that the equation fg(x) = gf(x) has no real solutions.",
        marks: 4,
        modelAnswer:
          "fg(x) = f(2x + 1) = {{(2x + 1)^2 - 3 = 4x^2 + 4x - 2}}.\n\ngf(x) = g({{x^2 - 3}}) = {{2(x^2 - 3) + 1 = 2x^2 - 5}}.\n\nSetting them equal: {{4x^2 + 4x - 2 = 2x^2 - 5}}, so {{2x^2 + 4x + 3 = 0}}.\n\nDiscriminant: {{b^2 - 4ac = 16 - 4 * 2 * 3 = 16 - 24 = -8}}. Since −8 < 0, there are no real solutions.",
        markScheme: [
          { point: "fg(x) = 4x² + 4x − 2", keywords: ["4x^2 + 4x - 2", "4x²+4x−2", "(2x+1)^2 - 3", "4x^2+4x-2"] },
          { point: "gf(x) = 2x² − 5", keywords: ["2x^2 - 5", "2x²−5", "2x^2-5"] },
          { point: "Forms 2x² + 4x + 3 = 0", keywords: ["2x^2 + 4x + 3", "2x²+4x+3", "2x^2+4x+3"] },
          { point: "Discriminant 16 − 24 = −8 < 0, so no real solutions", keywords: ["discriminant", "-8", "−8", "< 0", "negative", "no real"] },
        ],
        solutions: [
          { label: "Discriminant", steps: ["{{2x^2 + 4x + 3 = 0}}: {{b^2 - 4ac = -8 < 0}}."] },
          { label: "Complete the square", steps: ["{{2x^2 + 4x + 3 = 2(x + 1)^2 + 1}}, which is at least 1 for every x — never 0."] },
        ],
        commonError: "Expanding {{(2x + 1)^2}} as {{4x^2 + 1}}.",
        difficulty: "challenge",
        guideRef: "composite-functions",
        hints: [
          "Find fg(x) and gf(x) separately and simplify each.",
          "Set them equal and rearrange to a quadratic = 0.",
          "How can you tell a quadratic has no real roots without solving it?",
          "Work out {{b^2 - 4ac}}.",
        ],
        strategy: "Use the discriminant",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "functions-p4-q15",
        question:
          "f(x) = {{x^2 + 6x + 5}}, with domain x ≥ −3.\n\nFind {{f^(-1)(x)}}. Give your answer in the form {{a + sqrt(x + b)}}, where a and b are integers.",
        answer: { type: "expression", expr: "-3+sqrt(x+4)", display: "{{f^(-1)(x) = -3 + sqrt(x + 4)}}" },
        traps: [
          { spec: { type: "expression", expr: "-3-sqrt(x+4)" }, feedback: "The domain of f is x ≥ −3, so outputs of {{f^(-1)}} must be ≥ −3. Take the + square root." },
          { spec: { type: "expression", expr: "3+sqrt(x+4)" }, feedback: "{{(y + 3)^2 = x + 4}} gives y + 3 = {{sqrt(x + 4)}}, so y = −3 + {{sqrt(x + 4)}}." },
        ],
        solution: [
          "Complete the square: {{x^2 + 6x + 5 = (x + 3)^2 - 9 + 5 = (x + 3)^2 - 4}}.",
          "Swap: x = {{(y + 3)^2 - 4}}.",
          "{{(y + 3)^2 = x + 4}}, so y + 3 = {{sqrt(x + 4)}} (positive root, since y ≥ −3).",
          "{{f^(-1)(x) = -3 + sqrt(x + 4)}}, for x ≥ −4. Check: f(0) = 5 and {{f^(-1)(5) = -3 + 3 = 0}}. ✓",
        ],
        commonError: "Taking ± in the square root: the restricted domain tells you which sign to keep.",
        difficulty: "challenge",
        guideRef: "inverse-functions",
        hints: [
          "x appears twice, so you can't just swap and rearrange. How can you write the quadratic with x only once?",
          "Complete the square: {{(x + 3)^2 - ...}}",
          "Swap x and y, then square-root.",
          "Which sign of the root fits the domain x ≥ −3?",
        ],
        strategy: "Complete the square",
      },
    ],
  },
];
