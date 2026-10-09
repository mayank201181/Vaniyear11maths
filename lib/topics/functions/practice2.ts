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
        question: "g(x) = 6 − 3x\n\nFind g(−5).",
        answer: { type: "number", value: 21 },
        traps: [
          { spec: { type: "number", value: -9 }, feedback: "−3 × (−5) = +15, not −15. Two negatives multiply to a positive, so g(−5) = 6 + 15." },
        ],
        solution: ["g(−5) means replace every x with −5.", "g(−5) = 6 − 3 × (−5) = 6 + 15 = 21."],
        commonError: "Losing the double negative: 6 − 3 × (−5) is 6 + 15, not 6 − 15.",
        difficulty: "warmup",
        guideRef: "functions-as-mappings",
        hints: ["g(−5) is the output when the input is −5.", "Put −5 in brackets: 6 − 3 × (−5)."],
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
        question: "f(x) = 3x + 8\n\nGiven that f(x) = 2, find the value of x.",
        answer: { type: "number", value: -2 },
        traps: [
          { spec: { type: "number", value: 14 }, feedback: "14 is f(2). Here 2 is the *output*: solve 3x + 8 = 2 to find the input." },
          { spec: { type: "number", value: 3.3333333333, tolerance: 0.01 }, feedback: "Undo the +8 by *subtracting* 8: 3x = 2 − 8 = −6." },
        ],
        solution: ["f(x) = 2 means 3x + 8 = 2.", "3x = −6.", "x = −2. Check: f(−2) = −6 + 8 = 2. ✓"],
        commonError: "Working out f(2) instead of solving f(x) = 2.",
        difficulty: "warmup",
        guideRef: "functions-as-mappings",
        hints: ["Is 2 the input or the output?", "Set up the equation 3x + 8 = 2 and solve it."],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "functions-p3-q04",
        question: "h(x) = {{(x + 1)/(x^2 + 6x + 9)}}\n\nState the value of x that must be excluded from the domain of h.",
        answer: { type: "number", value: -3 },
        traps: [
          { spec: { type: "number", value: -1 }, feedback: "x = −1 makes the *numerator* zero, which is fine: h(−1) = 0. Only a zero denominator is forbidden." },
          { spec: { type: "number", value: 3 }, feedback: "Check: {{3^2 + 6 * 3 + 9 = 36}}, not 0. Factorise the denominator: {{(x + 3)^2}}." },
        ],
        solution: [
          "You cannot divide by zero, so exclude any x with {{x^2 + 6x + 9 = 0}}.",
          "Factorise: {{(x + 3)^2 = 0}}, so x = −3 (a repeated root — just one value).",
        ],
        commonError: "Excluding the value that makes the numerator zero.",
        difficulty: "warmup",
        guideRef: "domain-range",
        hints: ["Which operation is impossible?", "Factorise the denominator and set it equal to 0."],
        strategy: "Look for the forbidden operation",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "functions-p3-q05",
        question: "f(x) = 5 − 2x and g(x) = {{x^2 - 3}}\n\nFind fg(−2).",
        answer: { type: "number", value: 3 },
        traps: [
          { spec: { type: "number", value: 78 }, feedback: "78 is gf(−2) — you applied f first (f(−2) = 9, then g(9) = 78). In fg(−2) the function next to the input, g, acts first." },
          { spec: { type: "number", value: 9 }, feedback: "fg(−2) is not f(−2) × g(−2) = 9 × 1. It means f of g(−2): put −2 into g, then the result into f." },
          { spec: { type: "number", value: 19 }, feedback: "g(−2) = 4 − 3 = 1, not −7: {{(-2)^2 = +4}}. Then f(1) = 5 − 2 = 3." },
        ],
        solution: ["fg(−2) = f(g(−2)) — do g first.", "g(−2) = {{(-2)^2 - 3 = 1}}.", "f(1) = 5 − 2 × 1 = 3."],
        commonError: "Applying f first (giving gf), or multiplying f(−2) by g(−2).",
        difficulty: "core",
        guideRef: "composite-functions",
        hints: ["Which function is closest to the (−2)? That one acts first.", "Find g(−2) first — bracket the −2 before squaring.", "Now feed g(−2) = 1 into f."],
        strategy: "Work from the inside out",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "functions-p3-q06",
        question: "f(x) = {{(8 - 3x)/2}}\n\nFind {{f^(-1)(x)}}.",
        answer: { type: "expression", expr: "(8-2x)/3", display: "{{(8 - 2x)/3}}" },
        traps: [
          { spec: { type: "expression", expr: "(2x-8)/3" }, feedback: "Sign slip. From 2x = 8 − 3y, add 3y and subtract 2x: 3y = 8 − 2x." },
          { spec: { type: "expression", expr: "2/(8-3x)" }, feedback: "That is {{1/f(x)}}, the reciprocal. {{f^(-1)}} undoes f: swap x and y, then make y the subject." },
          { spec: { type: "expression", expr: "(8+2x)/3" }, feedback: "Check by substituting: f(0) = 4, so {{f^(-1)(4)}} must be 0. Rearrange 2x = 8 − 3y carefully." },
        ],
        solution: [
          "Write y = {{(8 - 3x)/2}} and swap x and y: x = {{(8 - 3y)/2}}.",
          "Multiply by 2: 2x = 8 − 3y.",
          "Rearrange: 3y = 8 − 2x.",
          "Divide by 3: {{f^(-1)(x) = (8 - 2x)/3}}. Check: f(0) = 4 and {{f^(-1)(4) = 0/3 = 0}}. ✓",
        ],
        solutions: [
          { label: "Swap and rearrange", steps: ["x = {{(8 - 3y)/2}} → 2x = 8 − 3y → 3y = 8 − 2x → y = {{(8 - 2x)/3}}."] },
          { label: "Reverse the flowchart", steps: ["f: × (−3) → + 8 → ÷ 2.", "Inverse, backwards: × 2 → − 8 → ÷ (−3), giving {{(2x - 8)/(-3) = (8 - 2x)/3}}."] },
        ],
        commonError: "Confusing {{f^(-1)(x)}} with {{1/f(x)}}, or losing the minus sign on the 3y term.",
        difficulty: "core",
        guideRef: "inverse-functions",
        hints: ["Write y = f(x), then swap x and y.", "Clear the fraction by multiplying both sides by 2.", "Move the 3y term to the other side so it is positive, then divide by 3."],
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
          { spec: { type: "number", value: 44.857, tolerance: 0.01 }, feedback: "You divided 157 by 3.5 without first taking off the fixed $45 hire charge." },
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
          "f(x) = {{x^2 + 10x + 18}}, where x can be any real number.\n\nFind the range of f. Give your answer as an inequality, using y for the output.",
        answer: { type: "inequality", ineq: "y>=-7", display: "f(x) ≥ −7" },
        traps: [
          { spec: { type: "inequality", ineq: "y>=-5" }, feedback: "x = −5 is *where* the minimum happens. The range is about outputs: find f(−5)." },
          { spec: { type: "inequality", ineq: "y>=18" }, feedback: "18 is f(0), the y-intercept. The curve dips lower than that — complete the square to find the minimum." },
          { spec: { type: "inequality", ineq: "x>=-7" }, feedback: "Right number, but a range describes **outputs** — write it with y (or f(x)), not x." },
        ],
        solution: [
          "Complete the square: {{x^2 + 10x + 18 = (x + 5)^2 - 25 + 18 = (x + 5)^2 - 7}}.",
          "{{(x + 5)^2 >= 0}}, so f(x) ≥ −7, with equality at x = −5.",
          "Range: f(x) ≥ −7.",
        ],
        solutions: [
          { label: "Complete the square", steps: ["{{(x + 5)^2 - 7}} — a square is never negative, so the least value is −7."] },
          { label: "Symmetry of the parabola", steps: ["The axis of symmetry is x = {{-10/2 = -5}}.", "f(−5) = 25 − 50 + 18 = −7."] },
        ],
        commonError: "Giving the x-coordinate of the turning point instead of the y-value.",
        difficulty: "core",
        guideRef: "domain-range",
        hints: ["The range is the set of possible *outputs*. What is the lowest point of this U-shaped graph?", "Complete the square.", "{{(x + 5)^2}} is never negative, so what is the smallest value of {{(x + 5)^2 - 7}}?"],
        strategy: "Complete the square",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "functions-p3-q09",
        question: "f(x) = 2x − 5 and g(x) = {{x/3 + 1}}\n\nSolve fg(x) = g(x).",
        answer: { type: "number", value: 12 },
        traps: [
          { spec: { type: "number", value: 5 }, feedback: "x = 5 solves gf(x) = g(x). In fg(x), g acts first: fg(x) = {{2(x/3 + 1) - 5}}." },
          { spec: { type: "number", value: 4 }, feedback: "You've found {{x/3 = 4}} — now multiply by 3." },
        ],
        solution: [
          "fg(x) = f({{x/3 + 1}}) = {{2(x/3 + 1) - 5 = (2x)/3 - 3}}.",
          "Solve {{(2x)/3 - 3 = x/3 + 1}}.",
          "{{x/3 = 4}}, so x = 12.",
          "Check: g(12) = 5 and fg(12) = f(5) = 5. ✓",
        ],
        solutions: [
          { label: "Algebra", steps: ["{{(2x)/3 - 3 = x/3 + 1}} → {{x/3 = 4}} → x = 12."] },
          { label: "Substitute u = g(x)", steps: ["The equation says f(u) = u where u = g(x).", "2u − 5 = u gives u = 5, so {{x/3 + 1 = 5}} and x = 12. Neater — it spots the structure."] },
        ],
        commonError: "Applying f first (finding gf instead of fg).",
        difficulty: "core",
        guideRef: "composite-functions",
        hints: ["Find fg(x) as an expression first: g acts first.", "fg(x) = {{2(x/3 + 1) - 5}}. Simplify it.", "Multiply every term by 3 to clear the fractions."],
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
          "f(x) = {{5/(x^2 - 4x)}}\n\nPriya says, \"The only value that must be excluded from the domain of f is x = 4.\"\n\nExplain why Priya is wrong, and state the values that must be excluded.",
        marks: 3,
        modelAnswer:
          "f has no value when the denominator is zero: {{x^2 - 4x = 0}}. Factorising gives x(x − 4) = 0, so x = 0 **or** x = 4. Priya has missed x = 0 (probably by dividing both sides by x, which loses that root). Both x = 0 and x = 4 must be excluded.",
        markScheme: [
          { point: "Sets the denominator equal to zero", keywords: ["denominator", "x^2 - 4x = 0", "divide by zero", "zero"] },
          { point: "Factorises to x(x − 4) = 0", keywords: ["x(x - 4)", "x(x-4)", "x(x − 4)", "factorise"] },
          { point: "States x = 0 and x = 4 are excluded", keywords: ["x = 0", "0 and 4", "x ≠ 0", "both"] },
        ],
        commonError: "Dividing {{x^2 = 4x}} by x, which throws away the solution x = 0.",
        difficulty: "core",
        guideRef: "domain-range",
        hints: ["When does f fail to give an output?", "Solve {{x^2 - 4x = 0}} by factorising. How many solutions does it have?"],
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
          "f(x) = {{1 + 2/x}}, x ≠ 0\n\n(a) Find {{f^(-1)(x)}}.\n\n(b) Show that the equation f(x) = {{f^(-1)(x)}} has solutions x = 2 and x = −1.",
        marks: 4,
        modelAnswer:
          "(a) Swap: x = {{1 + 2/y}}, so x − 1 = {{2/y}} and y = {{2/(x - 1)}}. So {{f^(-1)(x) = 2/(x - 1)}}, x ≠ 1.\n\n(b) {{1 + 2/x = 2/(x - 1)}}. Multiply by x(x − 1): x(x − 1) + 2(x − 1) = 2x, so {{x^2 + x - 2 = 2x}}, i.e. {{x^2 - x - 2 = 0}}. Factorise: (x − 2)(x + 1) = 0, so x = 2 or x = −1, as required. (Check: f(2) = 2 and f(−1) = −1 — both points lie on y = x, where a graph and its reflection must meet.)",
        markScheme: [
          { point: "f⁻¹(x) = 2/(x − 1)", keywords: ["2/(x-1)", "2/(x - 1)", "2/(x−1)"] },
          { point: "Sets 1 + 2/x = 2/(x − 1) and clears fractions by multiplying by x(x − 1)", keywords: ["x(x-1)", "x(x - 1)", "multiply", "clear"] },
          { point: "Obtains x² − x − 2 = 0", keywords: ["x^2 - x - 2", "x²−x−2", "x^2-x-2"] },
          { point: "Factorises (x − 2)(x + 1) = 0 to give x = 2 and x = −1", keywords: ["(x-2)(x+1)", "(x - 2)(x + 1)", "x = 2", "x = -1", "x = −1"] },
        ],
        solutions: [
          { label: "Algebra", steps: ["{{1 + 2/x = 2/(x - 1)}} → {{x^2 - x - 2 = 0}} → x = 2 or −1."] },
          { label: "Use the line y = x", steps: ["Points where y = f(x) meets the line y = x are always on y = {{f^(-1)(x)}} too, so try f(x) = x.", "{{1 + 2/x = x}} → {{x^2 - x - 2 = 0}} → x = 2 or −1, the same two solutions with less algebra. (Careful: for decreasing functions like this one, f and {{f^(-1)}} can sometimes also meet off y = x — the full algebra in (b) confirms there are no others here.)"] },
        ],
        commonError: "Multiplying only some terms by x(x − 1) when clearing the fractions.",
        difficulty: "challenge",
        guideRef: "inverse-functions",
        hints: [
          "For (a), swap x and y and isolate the fraction {{2/y}}.",
          "For (b), set {{1 + 2/x}} equal to your answer to (a).",
          "Multiply every term by x(x − 1) to clear the fractions.",
          "Rearrange to a quadratic = 0 and factorise.",
        ],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "functions-p3-q14",
        question:
          "f(x) = {{(5x + 2)/(x - 1)}}, x ≠ 1\n\nThere is exactly one real number that f(x) can never equal. Find it.",
        answer: { type: "number", value: 5 },
        traps: [
          { spec: { type: "number", value: 1 }, feedback: "1 is excluded from the *domain* (the input). The question asks about the *range* — the output f(x) can never take." },
          { spec: { type: "number", value: 0 }, feedback: "f(−0.4) = 0, so 0 is a possible output. Look for the output that makes the rearranged equation impossible." },
        ],
        solution: [
          "Let y = {{(5x + 2)/(x - 1)}} and try to solve for x.",
          "y(x − 1) = 5x + 2 → xy − y = 5x + 2 → xy − 5x = y + 2 → x(y − 5) = y + 2.",
          "x = {{(y + 2)/(y - 5)}}, which has a value for every y except y = 5.",
          "So f(x) can never equal 5. (If it did, x × 0 = 7, impossible.)",
        ],
        solutions: [
          { label: "Rearrange for x", steps: ["x = {{(y + 2)/(y - 5)}} fails only at y = 5."] },
          { label: "Split the fraction", steps: ["{{(5x + 2)/(x - 1) = 5 + 7/(x - 1)}}.", "{{7/(x - 1)}} is never 0, so f(x) is never 5 — the horizontal asymptote is y = 5."] },
        ],
        commonError: "Mixing up the excluded input (x = 1) with the excluded output (y = 5).",
        difficulty: "challenge",
        guideRef: "domain-range",
        hints: [
          "Suppose f(x) = y. Can you always find x?",
          "Rearrange y = {{(5x + 2)/(x - 1)}} to make x the subject.",
          "Which value of y makes your expression for x impossible?",
        ],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "functions-p3-q15",
        question:
          "f(x) = 2x − 1\n\nThe function g is such that gf(x) = {{4x^2 - 4x + 3}} for every value of x.\n\nFind g(x).",
        answer: { type: "expression", expr: "x^2+2", display: "g(x) = {{x^2 + 2}}" },
        traps: [
          { spec: { type: "expression", expr: "2x^2-2x+2" }, feedback: "That g satisfies fg(x) = {{4x^2 - 4x + 3}}: you put g inside f. In gf(x), f acts first, so g must act on the output 2x − 1." },
          { spec: { type: "expression", expr: "4x^2-4x+3" }, feedback: "That is gf(x) itself. g acts on the **output** of f, so rewrite {{4x^2 - 4x + 3}} in terms of t = 2x − 1." },
        ],
        solution: [
          "gf(x) = g(2x − 1). Let t = 2x − 1, so x = {{(t + 1)/2}}.",
          "Then g(t) = {{4((t + 1)/2)^2 - 4((t + 1)/2) + 3 = (t + 1)^2 - 2(t + 1) + 3}}.",
          "{{= t^2 + 2t + 1 - 2t - 2 + 3 = t^2 + 2}}.",
          "So g(x) = {{x^2 + 2}}. Check: gf(x) = {{(2x - 1)^2 + 2 = 4x^2 - 4x + 1 + 2 = 4x^2 - 4x + 3}} ✓.",
        ],
        solutions: [
          { label: "Substitute t = 2x − 1", steps: ["x = {{(t + 1)/2}}; substitute and simplify to get g(t) = {{t^2 + 2}}."] },
          { label: "Spot the square", steps: ["{{4x^2 - 4x + 3 = (4x^2 - 4x + 1) + 2 = (2x - 1)^2 + 2}}.", "So g(something) = something² + 2, i.e. g(x) = {{x^2 + 2}}. Quicker if you recognise {{(2x - 1)^2}}."] },
        ],
        commonError: "Solving fg(x) = … instead of gf(x) = … — the order decides which function you are finding inside which.",
        difficulty: "challenge",
        guideRef: "composite-functions",
        hints: [
          "gf(x) = g(2x − 1). So g acts on the expression 2x − 1.",
          "Can you write {{4x^2 - 4x + 3}} using (2x − 1)? Expand {{(2x - 1)^2}}.",
          "{{(2x - 1)^2 = 4x^2 - 4x + 1}}. How much is left over?",
          "So g(input) = input² + 2.",
        ],
        strategy: "Introduce a variable",
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
          { spec: { type: "number", value: 1.8 }, feedback: "{{3^2 = 9}}, not 6: the numerator is 9 + 3 = 12, not 6 + 3 = 9." },
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
          "g is the function such that g(x) = {{1/sqrt(x + 3)}}\n\nWrite down the domain of g, using an inequality for x.",
        answer: { type: "inequality", ineq: "x>-3", display: "x > −3" },
        traps: [
          { spec: { type: "inequality", ineq: "x>3" }, feedback: "Solve x + 3 > 0 carefully: subtract 3 to get x > −3." },
          { spec: { type: "inequality", ineq: "x<-3" }, feedback: "Test x = −4: {{sqrt(-1)}} is not real. The allowed inputs are the ones **above** −3." },
        ],
        solution: [
          "You can't square-root a negative number, so x + 3 ≥ 0.",
          "You also can't divide by zero, so {{sqrt(x + 3) != 0}}, which rules out x = −3.",
          "Together: x + 3 > 0, so the domain is x > −3.",
        ],
        commonError: "Writing x ≥ −3 — forgetting the root is in the denominator.",
        difficulty: "warmup",
        guideRef: "domain-range",
        hints: ["Two things can go wrong here: a negative under the root, and dividing by zero.", "Solve x + 3 > 0. At x = −3 itself, what goes wrong?"],
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
          "f(x) = {{(4x + 3)/(2x - 1)}}, x ≠ {{1/2}}\n\nExpress the inverse function {{f^(-1)}} in the form {{f^(-1)(x) = ...}}",
        answer: { type: "expression", expr: "(x+3)/(2x-4)", display: "{{(x + 3)/(2x - 4)}}" },
        traps: [
          { spec: { type: "expression", expr: "(2x-1)/(4x+3)" }, feedback: "That is {{1/f(x)}}, the reciprocal. The inverse undoes f: swap x and y, then make y the subject." },
          { spec: { type: "expression", expr: "(x-3)/(2x-4)" }, feedback: "Check the signs when you collect: 2xy − x = 4y + 3 → 2xy − 4y = x + 3, so the numerator is x + 3." },
        ],
        solution: [
          "Let x = {{(4y + 3)/(2y - 1)}} (swap x and y).",
          "x(2y − 1) = 4y + 3 → 2xy − x = 4y + 3.",
          "Collect the y terms: 2xy − 4y = x + 3 → y(2x − 4) = x + 3.",
          "{{f^(-1)(x) = (x + 3)/(2x - 4)}}, x ≠ 2. Check: f(1) = {{7/1}} = 7 and {{f^(-1)(7) = 10/10 = 1}}. ✓",
        ],
        commonError: "Not factorising out y after collecting the y terms, so y is left on both sides.",
        difficulty: "core",
        guideRef: "inverse-functions",
        hints: [
          "Swap x and y, then multiply both sides by (2y − 1).",
          "x appears in two places, so a flowchart won't work. Get all the y terms on one side.",
          "Factorise y out: y(2x − 4) = …",
        ],
        strategy: "Collect and factorise",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "functions-p4-q07",
        question:
          "f(x) = {{x^2 - 2x}} with domain −1 ≤ x ≤ 4.\n\nFind the range of f. Give your answer as an inequality, using y for the output.",
        answer: { type: "inequality", ineq: "-1<=y<=8", display: "−1 ≤ f(x) ≤ 8" },
        traps: [
          { spec: { type: "inequality", ineq: "3<=y<=8" }, feedback: "f(−1) = 3 and f(4) = 8 are the end values, but the curve dips lower in between. Find the turning point." },
          { spec: { type: "inequality", ineq: "-1<=y<=4" }, feedback: "−1 ≤ x ≤ 4 is the domain (inputs). The range is the outputs." },
          { spec: { type: "inequality", ineq: "-1<=x<=8" }, feedback: "Right numbers, but a range describes **outputs** — write it with y (or f(x)), not x." },
        ],
        solution: [
          "Complete the square: {{x^2 - 2x = (x - 1)^2 - 1}}. Minimum −1 at x = 1, which is inside the domain.",
          "End values: f(−1) = 1 + 2 = 3 and f(4) = 16 − 8 = 8.",
          "Greatest output is 8; least is −1. Range: −1 ≤ f(x) ≤ 8.",
        ],
        commonError: "Only checking the endpoints of the domain and missing the turning point.",
        difficulty: "core",
        guideRef: "domain-range",
        hints: ["Range = outputs. Is the graph a straight line, or does it turn?", "Find the turning point by completing the square. Is it inside the domain?", "Compare the turning-point value with f(−1) and f(4)."],
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
          { spec: { type: "number", value: 25.78, tolerance: 0.05 }, feedback: "You divided by 1.8 first and then subtracted 32. Undo in reverse order — subtract 32 *before* dividing by 1.8: (104 − 32) ÷ 1.8." },
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
          "f(x) = {{(2x)/(x + 3)}}, x ≠ −3\n\nShow that {{f^(-1)(x) = (3x)/(2 - x)}}.",
        marks: 3,
        modelAnswer:
          "Let y = {{(2x)/(x + 3)}} and swap: x = {{(2y)/(y + 3)}}.\n\nMultiply by (y + 3): xy + 3x = 2y.\n\nCollect the y terms: 3x = 2y − xy = y(2 − x).\n\nSo y = {{(3x)/(2 - x)}}, i.e. {{f^(-1)(x) = (3x)/(2 - x)}}, as required.",
        markScheme: [
          { point: "Swaps x and y (or rearranges y = f(x)) and multiplies out: xy + 3x = 2y", keywords: ["xy + 3x = 2y", "xy+3x=2y", "x(y+3)", "x(y + 3)"] },
          { point: "Collects y terms on one side", keywords: ["2y - xy", "2y − xy", "3x = 2y - xy", "collect"] },
          { point: "Factorises y(2 − x) and divides to reach 3x/(2 − x)", keywords: ["y(2 - x)", "y(2−x)", "y(2-x)", "3x/(2-x)", "factorise"] },
        ],
        solutions: [
          { label: "Swap and rearrange", steps: ["x(y + 3) = 2y → 3x = y(2 − x) → y = {{(3x)/(2 - x)}}."] },
          { label: "Check by composing", steps: ["f(1) = {{2/4 = 0.5}}; {{f^(-1)(0.5) = 1.5/1.5 = 1}}. ✓ (A check supports the result but is not a proof.)"] },
        ],
        commonError: "Leaving y on both sides — you must factorise y out after collecting the y terms.",
        difficulty: "core",
        guideRef: "inverse-functions",
        hints: ["Write x = {{(2y)/(y + 3)}} and multiply both sides by (y + 3).", "y appears twice. Get both y terms on the same side.", "Factorise y out."],
        strategy: "Collect and factorise",
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
