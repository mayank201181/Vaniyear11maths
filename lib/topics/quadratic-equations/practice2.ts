// ---------------------------------------------------------------------------
// Quadratic Equations — Practice Papers 3 and 4.
// Paper 3: mixed practice — fluency, spot-the-error, discriminant reasoning, proof.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher questions.
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "quadratic-equations-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "quadratic-equations-p3-q01",
        question: "Solve {{(x - 5)(2x + 3) = 0}}.\n\nGive both solutions as decimals or fractions, separated by a comma.",
        answer: { type: "list", values: [5, -1.5], display: "x = 5, x = −1.5" },
        traps: [
          { spec: { type: "list", values: [-5, 1.5] }, feedback: "Signs flipped. Set each bracket equal to zero: x − 5 = 0 gives x = +5, and 2x + 3 = 0 gives x = −1.5." },
          { spec: { type: "list", values: [5, -3] }, feedback: "2x + 3 = 0 gives 2x = −3, so x = −1.5. Don't forget to divide by the 2." },
        ],
        solution: [
          "If a product is zero, one of the factors must be zero.",
          "x − 5 = 0 gives x = 5.",
          "2x + 3 = 0 gives 2x = −3, so {{x = -3/2 = -1.5}}.",
        ],
        commonError: "Reading the root straight off the bracket as −3 instead of solving 2x + 3 = 0 properly.",
        difficulty: "warmup",
        guideRef: "solve-by-factorising",
        hints: ["Two things multiply to give 0. What must be true about one of them?", "Solve x − 5 = 0 and 2x + 3 = 0 separately."],
        strategy: "Zero product rule",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "quadratic-equations-p3-q02",
        question: "Solve {{x^2 + 2x - 24 = 0}}.",
        answer: { type: "list", values: [-6, 4], display: "x = −6, x = 4" },
        traps: [
          { spec: { type: "list", values: [6, -4] }, feedback: "(x + 6)(x − 4) = 0 is right, but the solutions come from x + 6 = 0 and x − 4 = 0: x = −6 and x = 4." },
        ],
        solution: [
          "Find two numbers with product −24 and sum +2: +6 and −4.",
          "(x + 6)(x − 4) = 0.",
          "x = −6 or x = 4.",
          "Check x = 4: 16 + 8 − 24 = 0 ✓.",
        ],
        commonError: "Writing the numbers in the brackets as the answers, which flips both signs.",
        difficulty: "warmup",
        guideRef: "solve-by-factorising",
        hints: ["Factorise first: product −24, sum +2.", "Then set each bracket equal to zero."],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "quadratic-equations-p3-q03",
        question: "How many real solutions does the equation {{3x^2 - 5x + 4 = 0}} have?\n\nUse the discriminant to decide.",
        answer: { type: "number", value: 0 },
        traps: [
          { spec: { type: "number", value: 2 }, feedback: "Recompute {{b^2 - 4ac}}: (−5)² = 25 and 4 × 3 × 4 = 48, so 25 − 48 = −23. A negative discriminant means no real roots." },
          { spec: { type: "number", value: 1 }, feedback: "One (repeated) root needs {{b^2 - 4ac = 0}}. Here it is 25 − 48 = −23." },
        ],
        solution: [
          "a = 3, b = −5, c = 4.",
          "{{b^2 - 4ac = (-5)^2 - 4 * 3 * 4 = 25 - 48 = -23}}.",
          "The discriminant is negative, so there is no real square root of it: **0 real solutions**.",
        ],
        commonError: "Writing {{-5^2 = -25}} or adding 4ac instead of subtracting it.",
        difficulty: "warmup",
        guideRef: "quadratic-formula",
        hints: ["Work out {{b^2 - 4ac}} with a = 3, b = −5, c = 4.", "Positive → 2 roots, zero → 1 repeated root, negative → no real roots."],
        strategy: "Use the discriminant",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "quadratic-equations-p3-q04",
        question: "{{x^2 + 12x + 7}} can be written in the form {{(x + a)^2 + b}}.\n\nFind the values of a and b. Give a first, then b.",
        answer: { type: "list", values: [6, -29], ordered: true, display: "a = 6, b = −29" },
        traps: [
          { spec: { type: "list", values: [6, 43], ordered: true }, feedback: "{{(x + 6)^2 = x^2 + 12x + 36}} has 36 too many, so you must *subtract* 36: 7 − 36 = −29." },
          { spec: { type: "list", values: [12, -137], ordered: true }, feedback: "Halve the coefficient of x: 12 ÷ 2 = 6, so the bracket is (x + 6)." },
        ],
        solution: [
          "Halve the x-coefficient: 12 ÷ 2 = 6, so start with {{(x + 6)^2 = x^2 + 12x + 36}}.",
          "{{x^2 + 12x + 7 = (x + 6)^2 - 36 + 7 = (x + 6)^2 - 29}}.",
          "a = 6, b = −29.",
        ],
        commonError: "Adding the 36 instead of subtracting it.",
        difficulty: "warmup",
        guideRef: "solve-completing-square",
        hints: ["What number goes in the bracket? Halve the 12.", "Expand {{(x + 6)^2}}. How far is it from {{x^2 + 12x + 7}}?"],
        strategy: "Complete the square",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "quadratic-equations-p3-q05",
        question: "Solve {{5x^2 + 13x - 6 = 0}}.\n\nGive any non-integer solution as a fraction or decimal.",
        answer: { type: "list", values: [0.4, -3], tolerance: 0.005, display: "{{x = 2/5}}, x = −3" },
        traps: [
          { spec: { type: "list", values: [-0.4, 3], tolerance: 0.005 }, feedback: "Check your signs: (5x − 2)(x + 3) = 0 gives 5x = 2 and x = −3." },
          { spec: { type: "list", values: [2, -3] }, feedback: "5x − 2 = 0 gives {{x = 2/5}}, not 2. Divide by the 5." },
        ],
        solution: [
          "ac = 5 × (−6) = −30. Two numbers with product −30 and sum +13: +15 and −2.",
          "Split the middle: {{5x^2 + 15x - 2x - 6 = 5x(x + 3) - 2(x + 3) = (5x - 2)(x + 3)}}.",
          "(5x − 2)(x + 3) = 0, so {{x = 2/5}} or x = −3.",
          "Check x = −3: 45 − 39 − 6 = 0 ✓.",
        ],
        solutions: [
          { label: "Factorise (split the middle term)", steps: ["(5x − 2)(x + 3) = 0 → {{x = 2/5}} or −3. Quickest when ac has a friendly factor pair."] },
          { label: "Quadratic formula", steps: ["{{x = (-13 +- sqrt(169 + 120))/10 = (-13 +- 17)/10}}.", "{{x = 4/10 = 2/5}} or x = −3. The perfect-square discriminant (289) tells you it would have factorised."] },
        ],
        commonError: "With a ≠ 1, looking for numbers that multiply to −6 instead of ac = −30.",
        difficulty: "core",
        guideRef: "solve-by-factorising",
        hints: ["a ≠ 1, so work with ac = −30.", "You need two numbers with product −30 and sum +13.", "Split 13x into 15x − 2x and factorise in pairs."],
        strategy: "Split the middle term",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "quadratic-equations-p3-q06",
        question:
          "By completing the square, solve {{x^2 - 4x - 1 = 0}}.\n\nYour solutions can be written in the form {{p +- sqrt(q)}}, where p and q are integers. Write down p and then q.",
        answer: { type: "list", values: [2, 5], ordered: true, display: "p = 2, q = 5 (x = {{2 +- sqrt(5)}})" },
        traps: [
          { spec: { type: "list", values: [-2, 5], ordered: true }, feedback: "{{(x - 2)^2 = 5}} gives x − 2 = ±√5, so x = 2 ± √5. Add 2 to both sides — p is +2." },
          { spec: { type: "list", values: [2, 3], ordered: true }, feedback: "{{(x - 2)^2 = x^2 - 4x + 4}}, so {{x^2 - 4x - 1 = (x - 2)^2 - 4 - 1 = (x - 2)^2 - 5}}. You need −4 − 1 = −5, not 4 − 1." },
        ],
        solution: [
          "{{x^2 - 4x - 1 = (x - 2)^2 - 4 - 1 = (x - 2)^2 - 5}}.",
          "So {{(x - 2)^2 - 5 = 0}}, i.e. {{(x - 2)^2 = 5}}.",
          "Square root both sides (both signs!): {{x - 2 = +- sqrt(5)}}.",
          "{{x = 2 +- sqrt(5)}}, so p = 2 and q = 5.",
        ],
        commonError: "Taking only the positive square root and losing the second solution.",
        difficulty: "core",
        guideRef: "solve-completing-square",
        hints: ["Halve −4 to get the bracket (x − 2).", "{{(x - 2)^2 = x^2 - 4x + 4}}. Adjust the constant so it matches −1.", "Rearrange so {{(x - 2)^2}} is on its own, then square root — remember ±."],
        strategy: "Complete the square",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "quadratic-equations-p3-q07",
        question: "Solve {{3x^2 - 2x - 7 = 0}}.\n\nGive your solutions correct to 3 significant figures.",
        answer: { type: "list", values: [1.90, -1.23], tolerance: 0.002, display: "x = 1.90, x = −1.23" },
        traps: [
          { spec: { type: "list", values: [-1.90, 1.23], tolerance: 0.002 }, feedback: "The formula starts with −b. Here b = −2, so −b = +2: {{x = (2 +- sqrt(88))/6}}." },
          { spec: { type: "list", values: [5.69, -3.69], tolerance: 0.01 }, feedback: "Divide by 2a = 6, not by 2." },
        ],
        solution: [
          "a = 3, b = −2, c = −7.",
          "{{b^2 - 4ac = 4 - 4 * 3 * (-7) = 4 + 84 = 88}}.",
          "{{x = (2 +- sqrt(88))/6}}, and √88 = 9.3808…",
          "{{x = 11.3808.../6 = 1.8968...}} → 1.90, or {{x = -7.3808.../6 = -1.2301...}} → −1.23.",
        ],
        commonError: "Losing the sign of c: −4ac = −4 × 3 × (−7) = +84, not −84.",
        difficulty: "core",
        guideRef: "quadratic-formula",
        hints: ["It doesn't factorise — use the formula with a = 3, b = −2, c = −7.", "Find {{b^2 - 4ac}} first. Watch the double negative.", "Divide the whole of −b ± √(…) by 2a = 6. Give 1.90 to 3 s.f. — the final zero counts."],
        strategy: "Use the formula",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "quadratic-equations-p3-q08",
        question:
          "The line {{y = x + 3}} meets the curve {{y = x^2 - x}} at two points.\n\nFind the coordinates of both points. Give the point with the smaller x-coordinate first, as x, y, x, y.",
        answer: { type: "list", values: [-1, 2, 3, 6], ordered: true, display: "(−1, 2) and (3, 6)" },
        traps: [
          { spec: { type: "list", values: [-1, 6, 3, 2], ordered: true }, feedback: "The y-values are paired the wrong way round. Substitute each x into y = x + 3: x = −1 gives y = 2, x = 3 gives y = 6." },
          { spec: { type: "list", values: [-3, 0, 1, 4], ordered: true }, feedback: "Check the factorising: {{x^2 - 2x - 3 = (x - 3)(x + 1)}}, so x = 3 or x = −1." },
        ],
        solution: [
          "At the intersections the y-values are equal: {{x^2 - x = x + 3}}.",
          "Rearrange: {{x^2 - 2x - 3 = 0}}, so (x − 3)(x + 1) = 0.",
          "x = −1 → y = −1 + 3 = 2; x = 3 → y = 3 + 3 = 6.",
          "Points (−1, 2) and (3, 6). Check (−1, 2) on the curve: 1 + 1 = 2 ✓.",
        ],
        commonError: "Finding the x-values and stopping, or pairing x-values with the wrong y-values.",
        difficulty: "core",
        guideRef: "linear-quadratic-simultaneous",
        hints: ["Both equations give y. What can you say about the two expressions where they meet?", "Set {{x^2 - x = x + 3}} and rearrange to = 0.", "Use the *linear* equation to get each y — it's quicker."],
        strategy: "Substitute",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "written",
        id: "quadratic-equations-p3-q09",
        question:
          "Priya solves {{2x^2 = 8x}}. Here is her working.\n\n    Divide both sides by 2x:   x = 4\n    So the solution is x = 4.\n\nExplain what is wrong with Priya's method, and solve the equation correctly.",
        marks: 3,
        modelAnswer:
          "Dividing by 2x assumes x ≠ 0 — you cannot divide by zero — so the solution x = 0 is lost.\n\nCorrect method: {{2x^2 - 8x = 0}}, so 2x(x − 4) = 0.\n\nEither 2x = 0, giving x = 0, or x − 4 = 0, giving x = 4. So x = 0 or x = 4.",
        markScheme: [
          { point: "Explains that dividing by x (2x) loses a solution because x could be 0 (can't divide by zero)", keywords: ["divide by zero", "x = 0", "x=0", "loses", "lost", "could be 0", "could be zero"] },
          { point: "Rearranges to = 0 and factorises: 2x(x − 4) = 0", keywords: ["2x(x - 4)", "2x(x-4)", "= 0", "factorise", "2x^2 - 8x"] },
          { point: "States both solutions x = 0 and x = 4", keywords: ["x = 0", "x=0", "x = 4", "x=4", "0 and 4", "0 or 4"] },
        ],
        commonError: "Dividing through by x — the single most common way to lose a root.",
        difficulty: "core",
        guideRef: "solve-by-factorising",
        hints: ["Try x = 0 in the original equation. Does it work?", "When is dividing by 2x not allowed?", "Bring everything to one side and take out the common factor."],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "quadratic-equations-p3-q10",
        question: "Solve {{12/x - 12/(x + 2) = 1}}.",
        answer: { type: "list", values: [4, -6], display: "x = 4, x = −6" },
        traps: [
          { spec: { type: "list", values: [-4, 6] }, feedback: "{{x^2 + 2x - 24 = (x + 6)(x - 4)}}, so x = −6 or x = 4. Check the signs from each bracket." },
        ],
        solution: [
          "Multiply every term by the common denominator x(x + 2) (x ≠ 0, x ≠ −2).",
          "12(x + 2) − 12x = x(x + 2).",
          "24 = {{x^2 + 2x}}, so {{x^2 + 2x - 24 = 0}}.",
          "(x + 6)(x − 4) = 0, so x = −6 or x = 4. Neither is an excluded value.",
          "Check x = 4: 3 − 2 = 1 ✓. Check x = −6: −2 − (−3) = 1 ✓.",
        ],
        commonError: "Multiplying only the fractions by x(x + 2) and leaving the right-hand side as 1.",
        difficulty: "core",
        guideRef: "algebraic-fraction-equations",
        hints: ["What single expression clears both denominators?", "Multiply *every* term, including the 1 on the right, by x(x + 2).", "You should reach {{x^2 + 2x - 24 = 0}}."],
        strategy: "Clear the fractions",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "quadratic-equations-p3-q11",
        question:
          "The line {{x + 2y = 5}} meets the circle {{x^2 + y^2 = 25}} at the points A and B.\n\nFind the exact length of AB. Give your answer as a simplified surd.",
        answer: { type: "expression", expr: "4sqrt(5)", form: "surd", display: "{{4 sqrt(5)}}" },
        traps: [
          { spec: { type: "number", value: 8 }, feedback: "8 is only the horizontal distance between A and B. Use Pythagoras with the vertical distance too." },
        ],
        solution: [
          "Make x the subject of the linear equation: x = 5 − 2y.",
          "Substitute: {{(5 - 2y)^2 + y^2 = 25}} → {{25 - 20y + 4y^2 + y^2 = 25}} → {{5y^2 - 20y = 0}}.",
          "5y(y − 4) = 0, so y = 0 or y = 4. Then x = 5 or x = −3.",
          "A(5, 0) and B(−3, 4).",
          "{{AB = sqrt(8^2 + 4^2) = sqrt(80) = sqrt(16 * 5) = 4 sqrt(5)}}.",
        ],
        commonError: "Making y the subject (y = (5 − x)/2) works but brings fractions — rearranging for x keeps it clean.",
        difficulty: "core",
        guideRef: "linear-quadratic-simultaneous",
        hints: ["Rearrange the line so one letter is the subject — which avoids fractions?", "Substitute x = 5 − 2y into the circle and solve for y.", "With A and B found, use Pythagoras for the distance and simplify √80."],
        strategy: "Substitute",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "quadratic-equations-p3-q12",
        question:
          "Aisha designs a rectangular mural for a void deck. It is (x + 3) m long and (x − 1) m high. Its area is 45 m².\n\n(a) Show that {{x^2 + 2x - 48 = 0}}.\n\n(b) Solve the equation and hence find the perimeter of the mural. Explain why you reject one solution.",
        diagram: `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangle labelled x plus 3 metres long and x minus 1 metres high"><rect x="0" y="0" width="400" height="230" fill="#ffffff"/><rect x="80" y="50" width="240" height="100" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><text x="200" y="38" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(x + 3) m</text><text x="330" y="105" font-size="14" font-family="sans-serif" fill="#1f2937">(x − 1) m</text><text x="200" y="105" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">Area 45 m²</text><text x="200" y="210" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        marks: 4,
        modelAnswer:
          "(a) Area = (x + 3)(x − 1) = {{x^2 - x + 3x - 3 = x^2 + 2x - 3}}. Setting this equal to 45: {{x^2 + 2x - 3 = 45}}, so {{x^2 + 2x - 48 = 0}}.\n\n(b) (x + 8)(x − 6) = 0, so x = −8 or x = 6. Reject x = −8 because the height x − 1 would be −9 m, and a length can't be negative. So x = 6: the mural is 9 m by 5 m, and the perimeter is 2(9 + 5) = 28 m.",
        markScheme: [
          { point: "Expands (x + 3)(x − 1) = x² + 2x − 3 and sets equal to 45 to reach the given equation", keywords: ["x^2 + 2x - 3", "x^2+2x-3", "= 45", "=45"] },
          { point: "Factorises (x + 8)(x − 6) = 0 giving x = 6 or x = −8", keywords: ["(x + 8)(x - 6)", "(x+8)(x-6)", "x = 6", "x=6", "-8"] },
          { point: "Rejects x = −8 because a length cannot be negative", keywords: ["negative", "reject", "can't", "cannot", "length"] },
          { point: "Perimeter 28 m (9 m by 5 m)", keywords: ["28", "9", "5"] },
        ],
        commonError: "Giving x = 6 as the final answer — the question asks for the perimeter.",
        difficulty: "core",
        guideRef: "solve-by-factorising",
        hints: ["Area = length × height. Expand the brackets.", "Set the expansion equal to 45 and move 45 across.", "Of your two roots, which one gives sensible lengths?"],
        strategy: "Form an equation",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "quadratic-equations-p3-q13",
        question:
          "Prove that the equation {{x^2 + (k - 2)x - k = 0}} has two distinct real roots for **every** real value of k.",
        marks: 3,
        modelAnswer:
          "Here a = 1, b = k − 2, c = −k.\n\nDiscriminant {{b^2 - 4ac = (k - 2)^2 - 4(1)(-k) = k^2 - 4k + 4 + 4k = k^2 + 4}}.\n\nSince {{k^2 >= 0}} for every real k, {{k^2 + 4 >= 4 > 0}}. The discriminant is always positive, so the equation always has two distinct real roots.",
        markScheme: [
          { point: "Writes the discriminant with b = k − 2 and c = −k: (k − 2)² − 4(1)(−k)", keywords: ["(k - 2)^2", "(k-2)^2", "b^2 - 4ac", "-4(1)(-k)", "+ 4k"] },
          { point: "Simplifies to k² + 4", keywords: ["k^2 + 4", "k^2+4", "k² + 4"] },
          { point: "Argues k² ≥ 0 so k² + 4 > 0 (always positive), hence two distinct real roots", keywords: ["k^2 >= 0", "never negative", "always positive", "> 0", "two distinct", "positive"] },
        ],
        commonError: "Trying a few values of k — examples are not a proof. You need an argument that works for every k.",
        difficulty: "challenge",
        guideRef: "quadratic-formula",
        hints: ["What condition on {{b^2 - 4ac}} gives two distinct real roots?", "Identify b = k − 2 and c = −k carefully (c is negative k).", "Expand and simplify. Can a square plus 4 ever be zero or negative?"],
        strategy: "Use the discriminant",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "quadratic-equations-p3-q14",
        question: "The equation {{x^2 - 2kx + 3k + 4 = 0}} has equal roots.\n\nFind the two possible values of k.",
        answer: { type: "list", values: [4, -1], display: "k = 4, k = −1" },
        traps: [
          { spec: { type: "list", values: [-4, 1] }, feedback: "{{k^2 - 3k - 4 = (k - 4)(k + 1)}}, giving k = 4 or k = −1. Check the signs." },
        ],
        solution: [
          "Equal roots means {{b^2 - 4ac = 0}}, with a = 1, b = −2k, c = 3k + 4.",
          "{{(-2k)^2 - 4(1)(3k + 4) = 0}} → {{4k^2 - 12k - 16 = 0}}.",
          "Divide by 4: {{k^2 - 3k - 4 = 0}} → (k − 4)(k + 1) = 0.",
          "k = 4 or k = −1.",
          "Check k = 4: {{x^2 - 8x + 16 = (x - 4)^2}} ✓. k = −1: {{x^2 + 2x + 1 = (x + 1)^2}} ✓.",
        ],
        commonError: "Writing {{(-2k)^2 = -4k^2}} — squaring makes it positive.",
        difficulty: "challenge",
        guideRef: "quadratic-formula",
        hints: ["'Equal roots' is a statement about the discriminant. Which one?", "b = −2k and c = 3k + 4. Substitute into {{b^2 - 4ac = 0}}.", "You get a quadratic in k — solve that."],
        strategy: "Use the discriminant",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "quadratic-equations-p3-q15",
        question: "Solve {{3^(2x + 1) - 10 * 3^x + 3 = 0}}.",
        answer: { type: "list", values: [-1, 1], display: "x = −1, x = 1" },
        traps: [
          { spec: { type: "list", values: [1 / 3, 3], tolerance: 0.005 }, feedback: "Those are the values of u = {{3^x}}. Now solve {{3^x = 1/3}} and {{3^x = 3}} for x." },
        ],
        solution: [
          "{{3^(2x + 1) = 3 * 3^(2x) = 3(3^x)^2}}.",
          "Let u = {{3^x}}: {{3u^2 - 10u + 3 = 0}}.",
          "(3u − 1)(u − 3) = 0, so {{u = 1/3}} or u = 3.",
          "{{3^x = 1/3 = 3^(-1)}} gives x = −1; {{3^x = 3}} gives x = 1.",
        ],
        commonError: "Treating {{3^(2x + 1)}} as {{(3^x)^2 + 1}} — the +1 in the power multiplies by 3.",
        difficulty: "challenge",
        guideRef: "disguised-quadratics",
        hints: ["Split the power: {{3^(2x + 1) = 3^1 * 3^(2x)}}.", "{{3^(2x)}} is {{(3^x)^2}}. Let u = {{3^x}}.", "Solve the quadratic in u, then turn each u back into x."],
        strategy: "Introduce a variable",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "quadratic-equations-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "quadratic-equations-p4-q01",
        question: "Solve {{3x^2 + 5x = 12}}.\n\nShow clear algebraic working.",
        answer: { type: "list", values: [4 / 3, -3], tolerance: 0.001, display: "{{x = 4/3}}, x = −3" },
        traps: [
          { spec: { type: "list", values: [-4 / 3, 3], tolerance: 0.001 }, feedback: "(3x − 4)(x + 3) = 0 gives 3x = 4 and x = −3. Check the signs." },
          { spec: { type: "list", values: [4, -3] }, feedback: "3x − 4 = 0 gives {{x = 4/3}}. Divide by the 3." },
        ],
        solution: [
          "Rearrange to = 0 first: {{3x^2 + 5x - 12 = 0}}.",
          "ac = −36: two numbers with product −36 and sum +5 are 9 and −4.",
          "{{3x^2 + 9x - 4x - 12 = 3x(x + 3) - 4(x + 3) = (3x - 4)(x + 3)}}.",
          "(3x − 4)(x + 3) = 0, so {{x = 4/3}} or x = −3.",
        ],
        commonError: "Trying to factorise before moving the 12 across — the zero product rule only works when one side is 0.",
        difficulty: "warmup",
        guideRef: "solve-by-factorising",
        hints: ["Get 0 on one side first.", "Factorise {{3x^2 + 5x - 12}} using ac = −36."],
        strategy: "Rearrange to = 0",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "quadratic-equations-p4-q02",
        question: "Solve {{3x^2 + 4x - 2 = 0}}.\n\nShow your working clearly. Give your solutions correct to 3 significant figures.",
        answer: { type: "list", values: [0.387, -1.72], tolerance: 0.001, display: "x = 0.387, x = −1.72" },
        traps: [
          { spec: { type: "list", values: [-0.387, 1.72], tolerance: 0.001 }, feedback: "The formula starts with −b = −4, not +4." },
          { spec: { type: "list", values: [1.16, -5.16], tolerance: 0.01 }, feedback: "The denominator is 2a = 6, and the whole numerator −4 ± √40 is divided by it." },
        ],
        solution: [
          "a = 3, b = 4, c = −2.",
          "{{b^2 - 4ac = 16 - 4 * 3 * (-2) = 16 + 24 = 40}}.",
          "{{x = (-4 +- sqrt(40))/6}}, and √40 = 6.3245…",
          "{{x = 2.3245.../6 = 0.38743...}} → 0.387, or {{x = -10.3245.../6 = -1.72075...}} → −1.72.",
        ],
        commonError: "Dividing only the square root by 2a, or using 2 instead of 2a = 6.",
        difficulty: "warmup",
        guideRef: "quadratic-formula",
        hints: ["Write down a, b and c, including the sign of c.", "Work out {{b^2 - 4ac}}, then {{x = (-b +- sqrt(b^2 - 4ac))/(2a)}}."],
        strategy: "Use the formula",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "quadratic-equations-p4-q03",
        question: "Solve {{(x + 3)^2 = 2x + 14}}.",
        answer: { type: "list", values: [1, -5], display: "x = 1, x = −5" },
        traps: [
          { spec: { type: "list", values: [-1, 5] }, feedback: "{{x^2 + 4x - 5 = (x + 5)(x - 1)}}, so x = −5 or x = 1. Check the signs." },
        ],
        solution: [
          "Expand: {{x^2 + 6x + 9 = 2x + 14}}.",
          "Rearrange: {{x^2 + 4x - 5 = 0}}.",
          "(x + 5)(x − 1) = 0, so x = −5 or x = 1.",
          "Check x = 1: 4² = 16 and 2 + 14 = 16 ✓.",
        ],
        commonError: "Expanding {{(x + 3)^2}} as {{x^2 + 9}} — the middle term 6x is missing.",
        difficulty: "warmup",
        guideRef: "solve-by-factorising",
        hints: ["Expand the bracket properly: (x + 3)(x + 3).", "Collect everything on one side so it equals 0, then factorise."],
        strategy: "Rearrange to = 0",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "quadratic-equations-p4-q04",
        question:
          "(a) Write {{x^2 + 14x + 30}} in the form {{(x + p)^2 + q}}.\n\n(b) Hence solve {{x^2 + 14x + 30 = 0}}, giving your solutions in the form {{a +- sqrt(b)}} where a and b are integers.\n\nWrite down the values of a and b, a first.",
        answer: { type: "list", values: [-7, 19], ordered: true, display: "a = −7, b = 19 (x = {{-7 +- sqrt(19)}})" },
        traps: [
          { spec: { type: "list", values: [7, 19], ordered: true }, feedback: "{{(x + 7)^2 = 19}} gives x + 7 = ±√19, so x = −7 ± √19. Subtract 7." },
          { spec: { type: "list", values: [-7, 79], ordered: true }, feedback: "{{(x + 7)^2 = x^2 + 14x + 49}}, so you must subtract 49: 30 − 49 = −19, giving {{(x + 7)^2 = 19}}." },
        ],
        solution: [
          "(a) {{x^2 + 14x + 30 = (x + 7)^2 - 49 + 30 = (x + 7)^2 - 19}}.",
          "(b) {{(x + 7)^2 - 19 = 0}} → {{(x + 7)^2 = 19}}.",
          "{{x + 7 = +- sqrt(19)}} → {{x = -7 +- sqrt(19)}}.",
          "a = −7, b = 19.",
        ],
        commonError: "Writing x = 7 ± √19 — the sign inside the bracket flips when you move it across.",
        difficulty: "warmup",
        guideRef: "solve-completing-square",
        hints: ["Halve 14 for the bracket.", "Subtract 49 to compensate, then set the completed square equal to 0 and square root (±)."],
        strategy: "Complete the square",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "quadratic-equations-p4-q05",
        question:
          "Solve the simultaneous equations\n\n    {{x^2 + y^2 = 34}}\n    y = x + 2\n\nShow clear algebraic working. Give both solutions as x, y, x, y with the negative x-value first.",
        answer: { type: "list", values: [-5, -3, 3, 5], ordered: true, display: "x = −5, y = −3 and x = 3, y = 5" },
        traps: [
          { spec: { type: "list", values: [-5, 5, 3, -3], ordered: true }, feedback: "The y-values are attached to the wrong x. Use y = x + 2: x = −5 gives y = −3; x = 3 gives y = 5." },
        ],
        solution: [
          "Substitute y = x + 2 into the circle: {{x^2 + (x + 2)^2 = 34}}.",
          "{{x^2 + x^2 + 4x + 4 = 34}} → {{2x^2 + 4x - 30 = 0}} → {{x^2 + 2x - 15 = 0}}.",
          "(x + 5)(x − 3) = 0, so x = −5 or x = 3.",
          "y = x + 2: x = −5 → y = −3; x = 3 → y = 5.",
          "Check (3, 5): 9 + 25 = 34 ✓. Check (−5, −3): 25 + 9 = 34 ✓.",
        ],
        commonError: "Writing {{(x + 2)^2 = x^2 + 4}}. In an exam this loses every mark after the substitution.",
        difficulty: "core",
        guideRef: "linear-quadratic-simultaneous",
        hints: ["Substitute the linear equation into the quadratic one.", "Expand {{(x + 2)^2}} fully — three terms.", "Solve for x, then use y = x + 2 to pair each x with its y."],
        strategy: "Substitute",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "quadratic-equations-p4-q06",
        question: "Solve {{3/(x + 2) + 2/(x - 1) = 1}}.\n\nGive your solutions correct to 3 significant figures.",
        answer: { type: "list", values: [4.65, -0.646], tolerance: 0.001, display: "x = 4.65, x = −0.646" },
        traps: [
          { spec: { type: "list", values: [-4.65, 0.646], tolerance: 0.001 }, feedback: "From {{x^2 - 4x - 3 = 0}}, −b = +4, so {{x = (4 +- sqrt(28))/2}}." },
        ],
        solution: [
          "Multiply every term by (x + 2)(x − 1), where x ≠ −2, x ≠ 1.",
          "3(x − 1) + 2(x + 2) = (x + 2)(x − 1).",
          "{{5x + 1 = x^2 + x - 2}} → {{x^2 - 4x - 3 = 0}}.",
          "{{x = (4 +- sqrt(16 + 12))/2 = (4 +- sqrt(28))/2 = 2 +- sqrt(7)}}.",
          "x = 4.6457… → 4.65 or x = −0.6457… → −0.646. Neither is an excluded value.",
        ],
        commonError: "Forgetting to multiply the 1 on the right-hand side by (x + 2)(x − 1).",
        difficulty: "core",
        guideRef: "algebraic-fraction-equations",
        hints: ["What is the common denominator?", "Multiply all three terms by (x + 2)(x − 1) and simplify each side.", "You should get a 3-term quadratic that doesn't factorise — use the formula."],
        strategy: "Clear the fractions",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "quadratic-equations-p4-q07",
        question:
          "Jun throws a ball upwards on the school field. Its height, h metres, above the ground t seconds after it is thrown is\n\n{{h = 1.5 + 18t - 5t^2}}\n\nFind the two times when the ball is 10 m above the ground. Give your answers in seconds, correct to 3 significant figures.",
        answer: { type: "list", values: [0.559, 3.04], tolerance: 0.001, display: "t = 0.559 s and t = 3.04 s" },
        traps: [
          { spec: { type: "list", values: [0.686, 2.91], tolerance: 0.001 }, feedback: "You've dropped the 1.5 m starting height. Set the whole expression equal to 10: {{1.5 + 18t - 5t^2 = 10}} gives {{5t^2 - 18t + 8.5 = 0}}." },
        ],
        solution: [
          "Set h = 10: {{1.5 + 18t - 5t^2 = 10}}.",
          "Rearrange: {{5t^2 - 18t + 8.5 = 0}}, or dividing by 5, {{t^2 - 3.6t + 1.7 = 0}}.",
          "{{t = (3.6 +- sqrt(12.96 - 6.8))/2 = (3.6 +- sqrt(6.16))/2}}, and √6.16 = 2.4819…",
          "t = 0.5590… → 0.559 s (on the way up) or t = 3.0409… → 3.04 s (on the way down).",
        ],
        solutions: [
          { label: "Quadratic formula", steps: ["{{t = (18 +- sqrt(324 - 170))/10 = (18 +- sqrt(154))/10}} → 0.559 or 3.04."] },
          { label: "Complete the square", steps: ["{{t^2 - 3.6t + 1.7 = (t - 1.8)^2 - 1.54 = 0}}, so {{t = 1.8 +- sqrt(1.54)}}.", "The two times are symmetric about t = 1.8, when the ball is highest — a nice check."] },
        ],
        commonError: "Setting h = 0 instead of 10, or giving only one time.",
        difficulty: "core",
        guideRef: "quadratic-formula",
        hints: ["Which variable do you know? Substitute h = 10.", "Rearrange so one side is 0. Dividing by 5 makes the leading coefficient 1.", "Two answers make sense here: one on the way up, one on the way down."],
        strategy: "Form an equation",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "quadratic-equations-p4-q08",
        question:
          "The diagram shows a right-angled triangle.\n\nThe two shorter sides are x cm and (x + 1) cm. The hypotenuse is (x + 9) cm.\n\n(a) Show that {{x^2 - 16x - 80 = 0}}.\n\n(b) Work out the area of the triangle.",
        diagram: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A right-angled triangle with shorter sides x centimetres and x plus 1 centimetres and hypotenuse x plus 9 centimetres"><rect x="0" y="0" width="420" height="280" fill="#ffffff"/><polygon points="100,40 100,230 300,230" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><path d="M100,216 L114,216 L114,230" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="90" y="140" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">x cm</text><text x="200" y="252" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(x + 1) cm</text><text x="212" y="126" font-size="14" font-family="sans-serif" fill="#1f2937">(x + 9) cm</text><text x="210" y="272" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        marks: 4,
        modelAnswer:
          "(a) By Pythagoras, {{x^2 + (x + 1)^2 = (x + 9)^2}}.\n\n{{x^2 + x^2 + 2x + 1 = x^2 + 18x + 81}}\n\n{{2x^2 + 2x + 1 - x^2 - 18x - 81 = 0}}, so {{x^2 - 16x - 80 = 0}}.\n\n(b) (x − 20)(x + 4) = 0, so x = 20 or x = −4. A length can't be negative, so x = 20. The shorter sides are 20 cm and 21 cm (hypotenuse 29 cm: 400 + 441 = 841 = 29² ✓), so the area is {{1/2}} × 20 × 21 = 210 cm².",
        markScheme: [
          { point: "Uses Pythagoras: x² + (x + 1)² = (x + 9)²", keywords: ["pythagoras", "(x + 1)^2", "(x+1)^2", "(x + 9)^2", "(x+9)^2"] },
          { point: "Expands both brackets correctly and simplifies to x² − 16x − 80 = 0", keywords: ["2x + 1", "18x + 81", "x^2 + 2x + 1", "x^2 + 18x + 81"] },
          { point: "Solves to get x = 20 (rejecting x = −4)", keywords: ["(x - 20)(x + 4)", "(x-20)(x+4)", "x = 20", "x=20", "-4"] },
          { point: "Area = ½ × 20 × 21 = 210 cm²", keywords: ["210", "20 × 21", "20 x 21", "1/2"] },
        ],
        commonError: "Writing {{(x + 9)^2 = x^2 + 81}}, or putting the hypotenuse on the wrong side of Pythagoras.",
        difficulty: "core",
        guideRef: "solve-by-factorising",
        hints: ["Which theorem links the three sides of a right-angled triangle?", "The hypotenuse (x + 9) goes on its own side of the equation.", "For (b), factor pairs of −80 that add to −16; reject the impossible root, then use ½ × base × height."],
        strategy: "Draw on known facts",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "quadratic-equations-p4-q09",
        question: "The sum of the squares of two consecutive positive integers is 365.\n\nFind the two integers.",
        answer: { type: "list", values: [13, 14], display: "13 and 14" },
        traps: [
          { spec: { type: "list", values: [-14, -13] }, feedback: "These do satisfy the equation, but the question says *positive* integers — reject them." },
        ],
        solution: [
          "Let the integers be n and n + 1.",
          "{{n^2 + (n + 1)^2 = 365}} → {{2n^2 + 2n + 1 = 365}} → {{2n^2 + 2n - 364 = 0}}.",
          "Divide by 2: {{n^2 + n - 182 = 0}} → (n + 14)(n − 13) = 0.",
          "n = 13 (n = −14 is rejected as not positive). The integers are 13 and 14.",
          "Check: 169 + 196 = 365 ✓.",
        ],
        commonError: "Writing {{(n + 1)^2 = n^2 + 1}}.",
        difficulty: "core",
        guideRef: "solve-by-factorising",
        hints: ["Call the smaller integer n. What is the next one?", "Form the equation, expand, and divide through by 2.", "Factor pairs of 182 that differ by 1: try 13 and 14."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "written",
        id: "quadratic-equations-p4-q10",
        question:
          "Arjun cycles 30 km from home to East Coast Park at an average speed of x km/h.\n\nOn the way back he is tired: his average speed is 5 km/h less, and the journey takes 30 minutes longer.\n\n(a) Show that {{x^2 - 5x - 300 = 0}}.\n\n(b) Find Arjun's average speed on the way to the park.",
        marks: 4,
        modelAnswer:
          "(a) Time = distance ÷ speed. Outward time = {{30/x}} hours; return time = {{30/(x - 5)}} hours. The return takes {{1/2}} hour longer:\n\n{{30/(x - 5) - 30/x = 1/2}}.\n\nMultiply by 2x(x − 5): 60x − 60(x − 5) = x(x − 5), so 300 = {{x^2 - 5x}}, i.e. {{x^2 - 5x - 300 = 0}}.\n\n(b) (x − 20)(x + 15) = 0, so x = 20 or x = −15. A speed can't be negative, so the outward speed is 20 km/h. (Check: 30 ÷ 20 = 1.5 h, 30 ÷ 15 = 2 h — a difference of 30 minutes ✓.)",
        markScheme: [
          { point: "Writes the two times as 30/x and 30/(x − 5) hours", keywords: ["30/x", "30/(x - 5)", "30/(x-5)", "time"] },
          { point: "Forms the equation 30/(x − 5) − 30/x = 1/2 (30 minutes as ½ hour)", keywords: ["1/2", "0.5", "= 1/2", "half"] },
          { point: "Clears fractions correctly to reach x² − 5x − 300 = 0", keywords: ["2x(x - 5)", "x(x - 5)", "300", "60x"] },
          { point: "Solves to give 20 km/h, rejecting −15", keywords: ["20", "(x - 20)(x + 15)", "(x-20)(x+15)", "-15"] },
        ],
        commonError: "Using 30 instead of {{1/2}} for the extra time — the speeds are in km per *hour*, so the time must be in hours.",
        difficulty: "core",
        guideRef: "algebraic-fraction-equations",
        hints: ["Time = distance ÷ speed. Write each journey's time in terms of x.", "Which journey is longer? Their difference is 30 minutes — in hours?", "Multiply through by 2x(x − 5) to clear all the fractions."],
        strategy: "Form an equation",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "quadratic-equations-p4-q11",
        question:
          "Siti's rectangular vegetable garden is 4 m longer than it is wide. Its area is 50 m².\n\nWork out the width of the garden. Give your answer in metres, correct to 3 significant figures.",
        answer: { type: "number", value: 5.35, tolerance: 0.001, display: "5.35 m" },
        traps: [
          { spec: { type: "number", value: -9.35, tolerance: 0.001 }, feedback: "That's the negative root of the quadratic. A width must be positive — take the other solution." },
          { spec: { type: "number", value: 9.35, tolerance: 0.001 }, feedback: "Check that solution: a width of 9.35 m would give area 9.35 × 13.35 ≈ 125 m². The positive root is {{-2 + sqrt(54)}}." },
        ],
        solution: [
          "Let the width be x m, so the length is (x + 4) m.",
          "x(x + 4) = 50 → {{x^2 + 4x - 50 = 0}}.",
          "{{x = (-4 +- sqrt(16 + 200))/2 = (-4 +- sqrt(216))/2}}, and √216 = 14.6969…",
          "x = 10.6969… ÷ 2 = 5.3484… → 5.35 m (the negative root −9.35 is rejected).",
          "Check: 5.348 × 9.348 ≈ 50.0 ✓.",
        ],
        solutions: [
          { label: "Quadratic formula", steps: ["{{x = (-4 + sqrt(216))/2 = 5.35}} (3 s.f.)."] },
          { label: "Complete the square", steps: ["{{(x + 2)^2 - 4 - 50 = 0}} → {{(x + 2)^2 = 54}}.", "{{x = -2 + sqrt(54) = 5.35}}. Quicker here because b = 4 is even."] },
        ],
        commonError: "Giving both roots: in context, a negative width makes no sense.",
        difficulty: "core",
        guideRef: "quadratic-formula",
        hints: ["Let the width be x. What is the length?", "Area = width × length. Form an equation and rearrange to = 0.", "It won't factorise — use the formula or complete the square, then reject the negative root."],
        strategy: "Form an equation",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "quadratic-equations-p4-q12",
        question:
          "By completing the square, solve {{2x^2 - 8x + 3 = 0}}.\n\nGive the **larger** solution in exact simplified form, for example {{(a + sqrt(b))/c}}.",
        answer: { type: "expression", expr: "(4+sqrt(10))/2", form: "surd", display: "{{(4 + sqrt(10))/2}} (= {{2 + sqrt(10)/2}})" },
        traps: [
          { spec: { type: "expression", expr: "2+sqrt(5)/2" }, feedback: "{{sqrt(5/2)}} is not {{sqrt(5)/2}} — the 2 is inside the root too. Rationalise: {{sqrt(5/2) = sqrt(5)/sqrt(2) = sqrt(10)/2}}." },
          { spec: { type: "number", value: 3 }, feedback: "Divide *every* term by 2 first: {{x^2 - 4x + 3/2 = 0}}, so the constant is {{3/2}}, not 3." },
        ],
        solution: [
          "Divide by 2: {{x^2 - 4x + 3/2 = 0}}.",
          "Complete the square: {{(x - 2)^2 - 4 + 3/2 = 0}}, so {{(x - 2)^2 = 5/2}}.",
          "{{x = 2 +- sqrt(5/2)}}.",
          "Rationalise: {{sqrt(5/2) = sqrt(10)/2}}, so {{x = 2 +- sqrt(10)/2 = (4 +- sqrt(10))/2}}.",
          "The larger solution is {{(4 + sqrt(10))/2}} ≈ 3.58.",
        ],
        commonError: "Completing the square without first dividing through by a = 2.",
        difficulty: "core",
        guideRef: "solve-completing-square",
        hints: ["Completing the square works best when the {{x^2}} coefficient is 1. What should you do first?", "After dividing by 2, halve −4 for the bracket: {{(x - 2)^2}}.", "{{sqrt(5/2) = sqrt(5)/sqrt(2)}}. Multiply top and bottom by √2."],
        strategy: "Complete the square",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "quadratic-equations-p4-q13",
        question:
          "The line L has equation y = x + 4. The circle C has equation {{x^2 + y^2 = 8}}.\n\nShow that L is a tangent to C, and find the coordinates of the point where L touches C.",
        marks: 3,
        modelAnswer:
          "Substitute y = x + 4 into the circle: {{x^2 + (x + 4)^2 = 8}} → {{2x^2 + 8x + 16 = 8}} → {{2x^2 + 8x + 8 = 0}} → {{x^2 + 4x + 4 = 0}}.\n\nThis is {{(x + 2)^2 = 0}} (discriminant 16 − 16 = 0), so there is exactly one (repeated) solution. The line meets the circle at only one point, so it is a tangent.\n\nx = −2, so y = −2 + 4 = 2. The point of contact is (−2, 2).",
        markScheme: [
          { point: "Substitutes and simplifies to x² + 4x + 4 = 0 (or 2x² + 8x + 8 = 0)", keywords: ["x^2 + 4x + 4", "x^2+4x+4", "2x^2 + 8x + 8", "(x + 4)^2"] },
          { point: "Shows a repeated root (discriminant 0 or (x + 2)² = 0) and concludes one point of contact, so tangent", keywords: ["(x + 2)^2", "(x+2)^2", "discriminant", "= 0", "repeated", "one point", "tangent"] },
          { point: "Point of contact (−2, 2)", keywords: ["(-2, 2)", "(-2,2)", "x = -2", "y = 2"] },
        ],
        commonError: "Finding x = −2 and stopping without explaining *why* one solution means a tangent, or without finding y.",
        difficulty: "challenge",
        guideRef: "linear-quadratic-simultaneous",
        hints: ["What does it mean geometrically for a line to be a tangent? How many intersection points?", "Substitute the line into the circle and simplify to a quadratic in x.", "Look at the discriminant of that quadratic — or try to write it as a perfect square."],
        strategy: "Use the discriminant",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "quadratic-equations-p4-q14",
        question: "Solve {{4^x - 9 * 2^x + 8 = 0}}.",
        answer: { type: "list", values: [0, 3], display: "x = 0, x = 3" },
        traps: [
          { spec: { type: "list", values: [1, 8] }, feedback: "Those are the values of u = {{2^x}}. Now solve {{2^x = 1}} and {{2^x = 8}}." },
        ],
        solution: [
          "{{4^x = (2^2)^x = (2^x)^2}}.",
          "Let u = {{2^x}}: {{u^2 - 9u + 8 = 0}}.",
          "(u − 1)(u − 8) = 0, so u = 1 or u = 8.",
          "{{2^x = 1}} gives x = 0; {{2^x = 8 = 2^3}} gives x = 3.",
        ],
        commonError: "Stopping at u = 1 and u = 8, or thinking {{2^x = 1}} has no solution (it is x = 0).",
        difficulty: "challenge",
        guideRef: "disguised-quadratics",
        hints: ["Can you write {{4^x}} using a power of 2?", "{{4^x = (2^x)^2}}. Substitute u = {{2^x}}.", "Solve for u, then convert each u back to x. What power of 2 equals 1?"],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "quadratic-equations-p4-q15",
        question:
          "Solve {{2/(x - 3) - 5/(x^2 - 9) = 1}}.\n\nGive your solutions in the form {{a +- sqrt(b)}}, where a and b are integers. Write down a and then b.",
        answer: { type: "list", values: [1, 11], ordered: true, display: "a = 1, b = 11 (x = {{1 +- sqrt(11)}})" },
        traps: [
          { spec: { type: "list", values: [2, 44], ordered: true }, feedback: "{{(2 +- sqrt(44))/2}} simplifies: {{sqrt(44) = 2 sqrt(11)}}, so x = 1 ± √11." },
          { spec: { type: "list", values: [-1, 11], ordered: true }, feedback: "For {{x^2 - 2x - 10 = 0}}, −b = +2, so x = 1 ± √11." },
        ],
        solution: [
          "Factorise the second denominator: {{x^2 - 9 = (x - 3)(x + 3)}}. So the common denominator is (x − 3)(x + 3), with x ≠ ±3.",
          "Multiply every term by (x − 3)(x + 3): 2(x + 3) − 5 = {{x^2 - 9}}.",
          "{{2x + 1 = x^2 - 9}} → {{x^2 - 2x - 10 = 0}}.",
          "{{x = (2 +- sqrt(4 + 40))/2 = (2 +- 2 sqrt(11))/2 = 1 +- sqrt(11)}}.",
          "Neither 1 + √11 ≈ 4.32 nor 1 − √11 ≈ −2.32 is an excluded value, so a = 1, b = 11.",
        ],
        solutions: [
          { label: "Quadratic formula", steps: ["{{x = (2 +- sqrt(44))/2 = 1 +- sqrt(11)}}."] },
          { label: "Complete the square", steps: ["{{(x - 1)^2 - 1 - 10 = 0}} → {{(x - 1)^2 = 11}} → {{x = 1 +- sqrt(11)}}. Quicker — no surd to simplify."] },
        ],
        commonError: "Using (x − 3)(x² − 9) as the common denominator — spot that x² − 9 already contains (x − 3).",
        difficulty: "challenge",
        guideRef: "algebraic-fraction-equations",
        hints: ["Look at {{x^2 - 9}}. Can it be factorised?", "The lowest common denominator is (x − 3)(x + 3). Multiply every term by it.", "Reach {{x^2 - 2x - 10 = 0}}, then complete the square for an exact answer — and check for excluded values."],
        strategy: "Clear the fractions",
      },
    ],
  },
];
