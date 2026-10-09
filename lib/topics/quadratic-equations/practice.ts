import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // Quick-check quiz — 10 questions (3 mcq, 7 short) across the main sections
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "quadratic-equations-quiz-q01",
      question: "Solve {{x^2 - 7x + 12 = 0}}.",
      answer: { type: "list", values: [3, 4], display: "x = 3 or x = 4" },
      solution: [
        "Find two numbers that multiply to +12 and add to −7: −3 and −4.",
        "Factorise: (x − 3)(x − 4) = 0.",
        "So x − 3 = 0 or x − 4 = 0, giving x = 3 or x = 4.",
        "Check: 9 − 21 + 12 = 0 ✓ and 16 − 28 + 12 = 0 ✓.",
      ],
      traps: [
        { spec: { type: "list", values: [-3, -4] }, feedback: "Those are the numbers in the brackets. If (x − 3) = 0 then x = **+3** — flip the sign when you set each bracket to zero." },
      ],
      commonError: "Reading the solutions straight out of the brackets: (x − 3)(x − 4) = 0 gives x = 3 and 4, not −3 and −4.",
      difficulty: "warmup",
      guideRef: "solve-by-factorising",
      hints: ["Which two numbers multiply to 12 and add to −7?", "−3 and −4. Write the brackets, then set each one equal to zero."],
      strategy: "Check by substituting",
    },
    {
      kind: "mcq",
      id: "quadratic-equations-quiz-q02",
      question: "Solve {{3x^2 = 12x}}.",
      options: ["x = 0 or x = 4", "x = 4", "x = 2 or x = −2", "x = 0 or x = −4"],
      answerIndex: 0,
      explanation:
        "Rearrange to zero: {{3x^2 - 12x = 0}}, so 3x(x − 4) = 0, giving x = 0 or x = 4. The answer x = 4 alone comes from dividing both sides by 3x — that throws away the solution x = 0 (you can't divide by something that might be zero). x = ±2 comes from treating the equation as {{3x^2 = 12}}; x = −4 is a sign slip when reading x − 4 = 0.",
      difficulty: "warmup",
      guideRef: "solve-by-factorising",
      hints: ["Get everything on one side so the equation equals 0.", "{{3x^2 - 12x = 0}} — what is the common factor?"],
      strategy: "Rearrange to = 0 first",
    },
    {
      kind: "short",
      id: "quadratic-equations-quiz-q03",
      question: "Solve {{2x^2 + 5x - 12 = 0}}.\n\nGive both solutions (fractions or decimals are fine).",
      answer: { type: "list", values: [1.5, -4], tolerance: 0.001, display: "{{x = 3/2}} or x = −4" },
      solution: [
        "a × c = 2 × (−12) = −24. Find two numbers that multiply to −24 and add to +5: +8 and −3.",
        "Split the middle term: {{2x^2 + 8x - 3x - 12 = 0}}.",
        "Factorise in pairs: 2x(x + 4) − 3(x + 4) = 0, so (2x − 3)(x + 4) = 0.",
        "2x − 3 = 0 gives {{x = 3/2}}; x + 4 = 0 gives x = −4.",
        "Check x = −4: 32 − 20 − 12 = 0 ✓.",
      ],
      traps: [
        { spec: { type: "list", values: [3, -4] }, feedback: "Close: 2x − 3 = 0 means 2x = 3, so {{x = 3/2}}, not 3. The coefficient of x matters when a ≠ 1." },
        { spec: { type: "list", values: [-1.5, 4], tolerance: 0.001 }, feedback: "Both signs are flipped. Set each bracket to zero: (2x − 3) = 0 gives x = +{{3/2}}; (x + 4) = 0 gives x = −4." },
      ],
      commonError: "Setting 2x − 3 = 0 and writing x = 3 instead of {{x = 3/2}}.",
      difficulty: "core",
      guideRef: "solve-by-factorising",
      hints: [
        "When a ≠ 1, multiply a × c first. What is 2 × (−12)?",
        "Find two numbers multiplying to −24 and adding to 5.",
        "Split 5x into 8x − 3x and factorise in pairs.",
      ],
      strategy: "Split the middle term",
    },
    {
      kind: "short",
      id: "quadratic-equations-quiz-q04",
      question:
        "Solve {{x^2 + 6x - 5 = 0}} by completing the square.\n\nGive your solutions in the form {{x = p +- sqrt(q)}}, where p and q are integers. Write the value of p, then the value of q.",
      answer: { type: "list", values: [-3, 14], ordered: true, display: "p = −3, q = 14 (so {{x = -3 +- sqrt(14)}})" },
      solution: [
        "Halve the coefficient of x: 6 ÷ 2 = 3, so {{x^2 + 6x = (x + 3)^2 - 9}}.",
        "The equation becomes {{(x + 3)^2 - 9 - 5 = 0}}, i.e. {{(x + 3)^2 = 14}}.",
        "Square root both sides (both signs!): {{x + 3 = +- sqrt(14)}}.",
        "So {{x = -3 +- sqrt(14)}}: p = −3 and q = 14.",
      ],
      traps: [
        { spec: { type: "list", values: [3, 14], ordered: true }, feedback: "(x + 3)² = 14 means x + 3 = ±√14, so x = **−3** ± √14. The number in the bracket changes sign when you move it across." },
        { spec: { type: "list", values: [-3, 4], ordered: true }, feedback: "Check the constants: {{(x + 3)^2 - 9 - 5 = 0}}, so both the 9 and the 5 move across: {{(x + 3)^2 = 9 + 5 = 14}}." },
      ],
      commonError: "Mishandling the constants: from {{(x + 3)^2 - 9 - 5 = 0}} you get {{(x + 3)^2 = 14}}, not 4.",
      difficulty: "core",
      guideRef: "solve-completing-square",
      hints: [
        "Halve the 6. Which bracket squared starts {{x^2 + 6x}}?",
        "{{(x + 3)^2 = x^2 + 6x + 9}}, so {{x^2 + 6x = (x + 3)^2 - 9}}.",
        "Get {{(x + 3)^2}} on its own, then square root — remember ±.",
      ],
      strategy: "Make it a perfect square",
    },
    {
      kind: "mcq",
      id: "quadratic-equations-quiz-q05",
      question: "How many real solutions does the equation {{2x^2 + 3x - 6 = 0}} have?",
      options: ["Two distinct real solutions", "Exactly one (repeated) real solution", "No real solutions", "Two real solutions, both negative"],
      answerIndex: 0,
      explanation:
        "The discriminant is {{b^2 - 4ac = 3^2 - 4(2)(-6) = 9 + 48 = 57}}. It is positive, so there are **two distinct real solutions** — the parabola crosses the x-axis twice. \"No real solutions\" comes from computing 9 − 48 (losing the sign of c); \"one repeated\" would need the discriminant to be exactly 0. They are not both negative: the product of the roots is {{c/a = -3}}, so one root is positive and one is negative.",
      difficulty: "core",
      guideRef: "quadratic-formula",
      hints: ["Which part of the quadratic formula decides how many solutions there are?", "Work out {{b^2 - 4ac}} with a = 2, b = 3, c = −6. Watch the double negative."],
      strategy: "Use the discriminant",
    },
    {
      kind: "short",
      id: "quadratic-equations-quiz-q06",
      question: "Solve {{2x^2 - 3x - 4 = 0}}.\n\nGive your solutions correct to 3 significant figures.",
      answer: { type: "list", values: [2.35, -0.851], tolerance: 0.002, display: "x = 2.35 or x = −0.851" },
      solution: [
        "a = 2, b = −3, c = −4. It doesn't factorise, so use the formula.",
        "{{x = (3 +- sqrt((-3)^2 - 4(2)(-4)))/(2 * 2) = (3 +- sqrt(41))/4}}.",
        "{{sqrt(41) = 6.4031...}}",
        "x = 9.4031… ÷ 4 = 2.3507… ≈ 2.35, or x = −3.4031… ÷ 4 = −0.85078… ≈ −0.851.",
      ],
      traps: [
        { spec: { type: "list", values: [-2.35, 0.851], tolerance: 0.002 }, feedback: "Sign slip: the formula starts with **−b**. Here b = −3, so −b = +3." },
        { spec: { type: "list", values: [4.70, -1.70], tolerance: 0.005 }, feedback: "Divide by **2a** = 4, not by 2: {{x = (3 +- sqrt(41))/4}}." },
      ],
      commonError: "Using b = 3 instead of b = −3, which flips the signs of both answers.",
      difficulty: "core",
      guideRef: "quadratic-formula",
      hints: [
        "Write down a, b and c — with their signs.",
        "Discriminant: {{(-3)^2 - 4 * 2 * (-4)}}. Two negatives multiply to a positive.",
        "{{x = (3 +- sqrt(41))/4}}. Work out each sign separately and round at the end.",
      ],
      strategy: "Write down a, b, c first",
    },
    {
      kind: "short",
      id: "quadratic-equations-quiz-q07",
      question:
        "Solve the simultaneous equations\n\n    y = x + 1\n    {{x^2 + y^2 = 13}}\n\nGive the coordinates (x, y) of the solution with **positive** x.",
      answer: { type: "list", values: [2, 3], ordered: true, display: "(2, 3)" },
      solution: [
        "Substitute y = x + 1 into the circle: {{x^2 + (x + 1)^2 = 13}}.",
        "Expand: {{x^2 + x^2 + 2x + 1 = 13}}, so {{2x^2 + 2x - 12 = 0}}, i.e. {{x^2 + x - 6 = 0}}.",
        "Factorise: (x + 3)(x − 2) = 0, so x = 2 or x = −3.",
        "Pair each x with its own y using y = x + 1: (2, 3) and (−3, −2). The one with positive x is (2, 3).",
      ],
      traps: [
        { spec: { type: "list", values: [3, 2], ordered: true }, feedback: "Right point, wrong order: give x first, then y." },
      ],
      commonError: "Writing {{(x + 1)^2 = x^2 + 1}} — the middle term 2x goes missing.",
      difficulty: "core",
      guideRef: "linear-quadratic-simultaneous",
      hints: [
        "The linear equation tells you y in terms of x. Where can you put it?",
        "Substitute into the circle and expand {{(x + 1)^2}} properly — three terms.",
        "Solve the quadratic for x, then use y = x + 1 to get the matching y.",
      ],
      strategy: "Substitute the linear into the quadratic",
    },
    {
      kind: "mcq",
      id: "quadratic-equations-quiz-q08",
      question: "Solve the simultaneous equations {{y = x^2 - 4}} and y = 3x.",
      options: ["(4, 12) and (−1, 3)", "(4, 12) and (−1, −3)", "(−4, −12) and (1, 3)", "(12, 4) and (−3, −1)"],
      answerIndex: 1,
      explanation:
        "Set the two expressions for y equal: {{x^2 - 4 = 3x}}, so {{x^2 - 3x - 4 = 0}} and (x − 4)(x + 1) = 0, giving x = 4 or x = −1. Then y = 3x gives y = 12 and y = −3, so (4, 12) and (−1, −3). The pair with (−1, 3) slips a sign working out 3 × (−1); (−4, −12) and (1, 3) come from factorising as (x + 4)(x − 1); (12, 4) and (−3, −1) have the coordinates swapped.",
      difficulty: "core",
      guideRef: "linear-quadratic-simultaneous",
      hints: ["Both equations say what y is — so set them equal.", "{{x^2 - 3x - 4 = 0}}. Factorise, then find each matching y from y = 3x."],
      strategy: "Check by substituting",
    },
    {
      kind: "short",
      id: "quadratic-equations-quiz-q09",
      question: "Solve {{4/x + 5/(x + 2) = 1}}.",
      answer: { type: "list", values: [8, -1], display: "x = 8 or x = −1" },
      solution: [
        "Multiply every term by x(x + 2): 4(x + 2) + 5x = x(x + 2).",
        "Expand: {{4x + 8 + 5x = x^2 + 2x}}, so {{9x + 8 = x^2 + 2x}}.",
        "Rearrange to zero: {{x^2 - 7x - 8 = 0}}, so (x − 8)(x + 1) = 0.",
        "x = 8 or x = −1. Neither makes a denominator zero (the excluded values are 0 and −2), so both stand.",
        "Check x = 8: {{4/8 + 5/10 = 1}} ✓. Check x = −1: −4 + 5 = 1 ✓.",
      ],
      traps: [
        { spec: { type: "list", values: [-8, 1] }, feedback: "Signs swapped: (x − 8)(x + 1) = 0 gives x = 8 or x = −1." },
      ],
      commonError: "Forgetting to multiply the 1 on the right-hand side by x(x + 2).",
      difficulty: "core",
      guideRef: "algebraic-fraction-equations",
      hints: [
        "What could you multiply every term by to clear both denominators?",
        "Multiply by x(x + 2) — including the 1 on the right.",
        "You should reach {{x^2 - 7x - 8 = 0}}.",
      ],
      strategy: "Clear the fractions",
    },
    {
      kind: "short",
      id: "quadratic-equations-quiz-q10",
      question: "Solve {{x^4 - 13x^2 + 36 = 0}}.\n\nGive all four solutions.",
      answer: { type: "list", values: [2, -2, 3, -3], display: "x = ±2 or x = ±3" },
      solution: [
        "Let {{u = x^2}}. Then {{x^4 = u^2}} and the equation is {{u^2 - 13u + 36 = 0}}.",
        "Factorise: (u − 4)(u − 9) = 0, so u = 4 or u = 9.",
        "Go back to x: {{x^2 = 4}} gives x = ±2; {{x^2 = 9}} gives x = ±3.",
      ],
      traps: [
        { spec: { type: "list", values: [4, 9] }, feedback: "Those are the values of {{u = x^2}}. One more step: square root each (both signs)." },
        { spec: { type: "list", values: [2, 3] }, feedback: "Don't forget the negative roots: {{x^2 = 4}} gives x = 2 **or** x = −2." },
      ],
      commonError: "Stopping at u = 4 and u = 9, or forgetting the negative square roots.",
      difficulty: "core",
      guideRef: "disguised-quadratics",
      hints: [
        "Notice {{x^4 = (x^2)^2}}. Could you rename {{x^2}}?",
        "With {{u = x^2}}: {{u^2 - 13u + 36 = 0}}. Solve for u.",
        "Now undo the substitution — each u gives two values of x.",
      ],
      strategy: "Introduce a variable",
    },
  ],

  // =========================================================================
  // Practice papers
  // =========================================================================
  papers: [
    {
      id: "quadratic-equations-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "quadratic-equations-p1-q01",
          question: "Solve {{x^2 + 2x - 15 = 0}}.",
          answer: { type: "list", values: [3, -5], display: "x = 3 or x = −5" },
          solution: [
            "Two numbers that multiply to −15 and add to +2: +5 and −3.",
            "(x + 5)(x − 3) = 0.",
            "x = −5 or x = 3.",
          ],
          traps: [{ spec: { type: "list", values: [-3, 5] }, feedback: "Signs flipped: x + 5 = 0 gives x = −5, and x − 3 = 0 gives x = 3." }],
          commonError: "Copying the numbers from the brackets without changing their signs.",
          difficulty: "warmup",
          guideRef: "solve-by-factorising",
          hints: ["Two numbers: product −15, sum +2.", "+5 and −3. Set each bracket equal to zero."],
          strategy: "Check by substituting",
        },
        {
          kind: "short",
          id: "quadratic-equations-p1-q02",
          question: "Solve {{2x^2 = 18x}}.",
          answer: { type: "list", values: [0, 9], display: "x = 0 or x = 9" },
          solution: [
            "Rearrange to zero: {{2x^2 - 18x = 0}}.",
            "Factorise: 2x(x − 9) = 0.",
            "So 2x = 0 (x = 0) or x − 9 = 0 (x = 9).",
          ],
          traps: [
            { spec: { type: "list", values: [9] }, feedback: "You've lost a solution — probably by dividing both sides by x. Since x could be 0, factorise instead: 2x(x − 9) = 0 gives x = 0 **or** x = 9." },
            { spec: { type: "list", values: [3, -3] }, feedback: "Square-rooting doesn't work here — there's an x on the right too. Rearrange to {{2x^2 - 18x = 0}} and factorise." },
          ],
          commonError: "Dividing both sides by x and losing the solution x = 0.",
          difficulty: "warmup",
          guideRef: "solve-by-factorising",
          hints: ["Never divide by x — it might be 0. Bring everything to one side instead.", "Take out the common factor 2x."],
          strategy: "Rearrange to = 0 first",
        },
        {
          kind: "short",
          id: "quadratic-equations-p1-q03",
          question: "Work out the value of the discriminant of {{3x^2 - 4x - 2 = 0}}, and hence say how many real solutions it has. Type the value of the discriminant.",
          answer: { type: "number", value: 40, display: "{{b^2 - 4ac = 40}} (positive, so two distinct real solutions)" },
          solution: [
            "a = 3, b = −4, c = −2.",
            "{{b^2 - 4ac = (-4)^2 - 4(3)(-2) = 16 + 24 = 40}}.",
            "40 > 0, so there are two distinct real solutions (and since 40 isn't a square number, they are irrational — the quadratic won't factorise nicely).",
          ],
          traps: [
            { spec: { type: "number", value: -8 }, feedback: "−4 × 3 × (−2) = **+24**: two negatives make a positive. So 16 + 24 = 40." },
            { spec: { type: "number", value: 8 }, feedback: "{{(-4)^2 = +16}}, not −16 — squaring a negative gives a positive." },
          ],
          commonError: "Treating −4ac as −24 when c is negative.",
          difficulty: "warmup",
          guideRef: "quadratic-formula",
          hints: ["The discriminant is {{b^2 - 4ac}}. Write down a, b and c with their signs.", "{{(-4)^2 = 16}} and {{-4 * 3 * (-2) = +24}}."],
          strategy: "Use the discriminant",
        },
        {
          kind: "short",
          id: "quadratic-equations-p1-q04",
          question: "Solve {{(x - 4)^2 = 9}}.",
          answer: { type: "list", values: [7, 1], display: "x = 7 or x = 1" },
          solution: [
            "Square root both sides, remembering both signs: x − 4 = 3 or x − 4 = −3.",
            "x = 7 or x = 1.",
            "Check: {{(7 - 4)^2 = 9}} ✓ and {{(1 - 4)^2 = 9}} ✓.",
          ],
          traps: [
            { spec: { type: "list", values: [7] }, feedback: "Square roots come in pairs: x − 4 could be +3 **or** −3. You're missing x = 1." },
            { spec: { type: "list", values: [-1, -7] }, feedback: "Add 4 to both sides (don't subtract): x = 4 ± 3." },
          ],
          commonError: "Taking only the positive square root and losing x = 1.",
          difficulty: "warmup",
          guideRef: "solve-completing-square",
          hints: ["No need to expand — the square is already done for you.", "If (something)² = 9, the something is +3 or −3."],
          strategy: "Use the inverse",
        },
        {
          kind: "short",
          id: "quadratic-equations-p1-q05",
          question:
            "A rectangular floor tile has length (x + 8) cm and width (x − 2) cm. Its area is 144 cm².\n\nForm and solve a quadratic equation to find the value of x.",
          diagram: `<svg viewBox="0 0 300 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangle with length x plus 8 centimetres and width x minus 2 centimetres, area 144 square centimetres"><rect x="0" y="0" width="300" height="170" fill="#ffffff"/><rect x="50" y="30" width="200" height="90" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><text x="150" y="80" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Area = 144 cm²</text><text x="150" y="145" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(x + 8) cm</text><text x="262" y="80" font-size="13" font-family="sans-serif" fill="#1f2937">(x − 2) cm</text></svg>`,
          answer: { type: "number", value: 10, display: "x = 10" },
          solution: [
            "Area = length × width: (x + 8)(x − 2) = 144.",
            "Expand: {{x^2 + 6x - 16 = 144}}, so {{x^2 + 6x - 160 = 0}}.",
            "Two numbers that multiply to −160 and add to 6: +16 and −10. Factorise: (x + 16)(x − 10) = 0, so x = −16 or x = 10.",
            "x = −16 would make the width −18 cm — impossible — so reject it. x = 10.",
            "Check: 18 cm × 8 cm = 144 cm² ✓.",
          ],
          traps: [
            { spec: { type: "number", value: -16 }, feedback: "x = −16 solves the equation, but gives a width of −18 cm. A length can't be negative, so reject it." },
            { spec: { type: "number", value: 8 }, feedback: "8 cm is the width, x − 2. The question asks for the value of x." },
          ],
          commonError: "Giving both roots without rejecting the one that makes a length negative.",
          difficulty: "core",
          guideRef: "solve-by-factorising",
          hints: [
            "Write length × width = 144.",
            "Expand and rearrange so one side is 0: you should get {{x^2 + 6x - 160 = 0}}.",
            "Factorise. Then ask: which root gives sensible (positive) lengths?",
          ],
          strategy: "Check the answer makes sense",
        },
        {
          kind: "short",
          id: "quadratic-equations-p1-q06",
          question: "Solve {{6x^2 + 7x - 3 = 0}}.\n\nGive both solutions (fractions are fine).",
          answer: { type: "list", values: [1 / 3, -3 / 2], tolerance: 0.001, display: "{{x = 1/3}} or {{x = -3/2}}" },
          solution: [
            "a × c = 6 × (−3) = −18. Two numbers multiplying to −18 and adding to +7: +9 and −2.",
            "Split: {{6x^2 + 9x - 2x - 3 = 0}}.",
            "Pairs: 3x(2x + 3) − 1(2x + 3) = 0, so (3x − 1)(2x + 3) = 0.",
            "{{x = 1/3}} or {{x = -3/2}}.",
          ],
          solutions: [
            {
              label: "Quadratic formula (a safe fallback)",
              steps: [
                "{{x = (-7 +- sqrt(49 + 72))/12 = (-7 +- 11)/12}}.",
                "{{x = 4/12 = 1/3}} or {{x = -18/12 = -3/2}}. The discriminant 121 is a perfect square — a sign the quadratic factorises.",
              ],
            },
          ],
          traps: [
            { spec: { type: "list", values: [-1 / 3, 3 / 2], tolerance: 0.001 }, feedback: "Both signs are flipped. 3x − 1 = 0 gives {{x = +1/3}}; 2x + 3 = 0 gives {{x = -3/2}}." },
            { spec: { type: "list", values: [1, -3] }, feedback: "Divide by the coefficient of x: 3x = 1 means {{x = 1/3}}, and 2x = −3 means {{x = -3/2}}." },
          ],
          commonError: "Forgetting to divide by the coefficient of x when solving 3x − 1 = 0.",
          difficulty: "core",
          guideRef: "solve-by-factorising",
          hints: [
            "a ≠ 1, so find a × c first.",
            "Two numbers with product −18 and sum +7.",
            "+9 and −2: split 7x into 9x − 2x and factorise in pairs.",
          ],
          strategy: "Split the middle term",
        },
        {
          kind: "short",
          id: "quadratic-equations-p1-q07",
          question:
            "Solve {{x^2 - 12x + 31 = 0}} by completing the square.\n\nGive your solutions in the form {{x = p +- sqrt(q)}}, where p and q are integers. Write the value of p, then the value of q.",
          answer: { type: "list", values: [6, 5], ordered: true, display: "p = 6, q = 5 (so {{x = 6 +- sqrt(5)}})" },
          solution: [
            "Half of −12 is −6: {{x^2 - 12x = (x - 6)^2 - 36}}.",
            "So {{(x - 6)^2 - 36 + 31 = 0}}, i.e. {{(x - 6)^2 = 5}}.",
            "{{x - 6 = +- sqrt(5)}}, so {{x = 6 +- sqrt(5)}}.",
          ],
          traps: [
            { spec: { type: "list", values: [-6, 5], ordered: true }, feedback: "From (x − 6)² = 5 you add 6 to both sides, so p = **+6**." },
            { spec: { type: "list", values: [6, 67], ordered: true }, feedback: "{{(x - 6)^2 - 36 + 31 = 0}} gives {{(x - 6)^2 = 36 - 31 = 5}}. The +31 moves across as −31." },
          ],
          commonError: "Getting the sign of p wrong: the bracket (x − 6) gives x = 6 ± …",
          difficulty: "core",
          guideRef: "solve-completing-square",
          hints: [
            "Halve the coefficient of x (keep its sign).",
            "{{x^2 - 12x = (x - 6)^2 - 36}}. Substitute that in.",
            "Isolate {{(x - 6)^2}}, then square root with ±.",
          ],
          strategy: "Make it a perfect square",
        },
        {
          kind: "written",
          id: "quadratic-equations-p1-q08",
          question:
            "Show, by completing the square, that the solutions of {{x^2 + 10x + 7 = 0}} are {{x = -5 +- 3 sqrt(2)}}.",
          marks: 3,
          modelAnswer:
            "Half of 10 is 5, so {{x^2 + 10x = (x + 5)^2 - 25}}.\n\nThe equation becomes {{(x + 5)^2 - 25 + 7 = 0}}, so {{(x + 5)^2 = 18}}.\n\nSquare root both sides: {{x + 5 = +- sqrt(18)}}. Since {{sqrt(18) = sqrt(9 * 2) = 3 sqrt(2)}}, this gives {{x = -5 +- 3 sqrt(2)}}, as required.",
          markScheme: [
            { point: "Completes the square correctly: (x + 5)² − 25 + 7 = 0 or (x + 5)² − 18 = 0", keywords: ["(x+5)^2", "(x + 5)²", "(x+5)²", "-25", "− 25", "-18"] },
            { point: "Isolates and square roots with ±: x + 5 = ±√18", keywords: ["18", "±", "+-", "sqrt(18)", "√18"] },
            { point: "Simplifies √18 = 3√2 to reach x = −5 ± 3√2", keywords: ["3√2", "3sqrt(2)", "9 × 2", "9x2", "sqrt(9)", "-5"] },
          ],
          commonError: "Leaving the answer as −5 ± √18 without simplifying the surd — in a 'show that' you must reach exactly the given form.",
          solutions: [
            {
              label: "Check with the formula",
              steps: [
                "{{x = (-10 +- sqrt(100 - 28))/2 = (-10 +- sqrt(72))/2}}.",
                "{{sqrt(72) = 6 sqrt(2)}}, so {{x = (-10 +- 6 sqrt(2))/2 = -5 +- 3 sqrt(2)}}. Same answer — but the question says *by completing the square*, so this method alone would not score.",
              ],
            },
          ],
          difficulty: "core",
          guideRef: "solve-completing-square",
          hints: [
            "Halve 10. Which bracket squared gives {{x^2 + 10x + …}}?",
            "{{(x + 5)^2 = x^2 + 10x + 25}}, so subtract 25 to compensate.",
            "You'll reach {{(x + 5)^2 = 18}}. How do you simplify {{sqrt(18)}}?",
          ],
          strategy: "Make it a perfect square",
        },
        {
          kind: "short",
          id: "quadratic-equations-p1-q09",
          question: "Solve {{3x^2 + 7x - 2 = 0}}.\n\nGive your solutions correct to 3 significant figures.",
          answer: { type: "list", values: [0.257, -2.59], tolerance: 0.002, display: "x = 0.257 or x = −2.59" },
          solution: [
            "a = 3, b = 7, c = −2.",
            "{{x = (-7 +- sqrt(49 - 4(3)(-2)))/(2 * 3) = (-7 +- sqrt(73))/6}}.",
            "{{sqrt(73) = 8.5440...}}",
            "x = 1.5440… ÷ 6 = 0.25733… ≈ 0.257, or x = −15.5440… ÷ 6 = −2.5906… ≈ −2.59.",
          ],
          traps: [
            { spec: { type: "list", values: [-0.257, 2.59], tolerance: 0.002 }, feedback: "The formula begins with **−b** = −7. Both your signs are flipped." },
            { spec: { type: "list", values: [0.515, -5.18], tolerance: 0.005 }, feedback: "Divide by **2a** = 6, not by a = 3." },
          ],
          commonError: "Dividing only the square root by 2a, instead of the whole numerator −b ± √(b² − 4ac).",
          difficulty: "core",
          guideRef: "quadratic-formula",
          hints: [
            "Does it factorise? Check the discriminant: is it a perfect square?",
            "{{b^2 - 4ac = 49 + 24 = 73}} — not a square, so use the formula.",
            "{{x = (-7 +- sqrt(73))/6}}. Calculate both, then round to 3 s.f.",
          ],
          strategy: "Write down a, b, c first",
        },
        {
          kind: "written",
          id: "quadratic-equations-p1-q10",
          question:
            "(a) Use the discriminant to show that {{x^2 + 6x + 11 = 0}} has no real solutions.\n\n(b) Explain what this tells you about the graph of {{y = x^2 + 6x + 11}}.",
          marks: 3,
          modelAnswer:
            "(a) a = 1, b = 6, c = 11, so {{b^2 - 4ac = 36 - 44 = -8}}.\n\nThe discriminant is negative, and a negative number has no real square root, so the formula gives no real values of x: there are no real solutions.\n\n(b) The graph never meets (or touches) the x-axis. Since a > 0 it is a ∪-shaped parabola sitting entirely above the x-axis (completing the square gives {{(x + 3)^2 + 2}}, so its minimum point is (−3, 2)).",
          markScheme: [
            { point: "Correct discriminant: 36 − 44 = −8", keywords: ["-8", "−8", "36 - 44", "36-44", "b^2-4ac", "b²-4ac"] },
            { point: "States discriminant < 0 so no real (square) root, hence no real solutions", keywords: ["negative", "< 0", "<0", "no real", "cannot square root", "can't square root"] },
            { point: "Graph does not cross or touch the x-axis (lies above it)", keywords: ["x-axis", "does not cross", "doesn't cross", "never", "above", "touch"] },
          ],
          commonError: "Writing \"b² − 4ac = 6 − 44\" (forgetting to square b), or computing 36 + 44.",
          difficulty: "core",
          guideRef: "quadratic-formula",
          hints: [
            "The discriminant is {{b^2 - 4ac}}. What are a, b and c?",
            "What happens in the formula when the number under the square root is negative?",
            "Solutions of {{x^2 + 6x + 11 = 0}} are where the graph meets which line?",
          ],
          strategy: "Use the discriminant",
        },
        {
          kind: "short",
          id: "quadratic-equations-p1-q11",
          question:
            "Solve the simultaneous equations\n\n    y = 2x − 1\n    {{y = x^2 - 2x + 2}}\n\nGive the coordinates (x, y) of the solution with the **larger** value of x.",
          answer: { type: "list", values: [3, 5], ordered: true, display: "(3, 5)" },
          solution: [
            "Set the right-hand sides equal: {{x^2 - 2x + 2 = 2x - 1}}.",
            "Rearrange: {{x^2 - 4x + 3 = 0}}, so (x − 1)(x − 3) = 0.",
            "x = 1 gives y = 2(1) − 1 = 1; x = 3 gives y = 2(3) − 1 = 5.",
            "The solutions are (1, 1) and (3, 5); the larger x is (3, 5).",
          ],
          traps: [
            { spec: { type: "list", values: [1, 1], ordered: true }, feedback: "(1, 1) is a solution — but the question asks for the one with the **larger** x." },
            { spec: { type: "list", values: [5, 3], ordered: true }, feedback: "Right point, wrong order: x first, then y." },
          ],
          commonError: "Pairing an x-value with the wrong y-value — always substitute each x back into the linear equation.",
          difficulty: "core",
          guideRef: "linear-quadratic-simultaneous",
          hints: [
            "Both equations give y. Set them equal to each other.",
            "Rearrange to {{x^2 - 4x + 3 = 0}} and factorise.",
            "Use the *linear* equation to find each y — it's quicker and safer.",
          ],
          strategy: "Substitute the linear into the quadratic",
        },
        {
          kind: "short",
          id: "quadratic-equations-p1-q12",
          question: "Solve {{2/(x - 1) + 3/(x + 1) = 1}}.",
          answer: { type: "list", values: [0, 5], display: "x = 0 or x = 5" },
          solution: [
            "Multiply every term by (x − 1)(x + 1): 2(x + 1) + 3(x − 1) = (x − 1)(x + 1).",
            "Expand: 2x + 2 + 3x − 3 = {{x^2 - 1}}, so {{5x - 1 = x^2 - 1}}.",
            "Rearrange: {{x^2 - 5x = 0}}, so x(x − 5) = 0, giving x = 0 or x = 5.",
            "Excluded values are 1 and −1; neither 0 nor 5 is excluded.",
            "Check x = 0: −2 + 3 = 1 ✓. Check x = 5: {{2/4 + 3/6 = 1}} ✓.",
          ],
          traps: [
            { spec: { type: "list", values: [5] }, feedback: "x = 0 is a genuine solution too: substitute it — {{2/(-1) + 3/1 = 1}} ✓. Don't divide by x when solving {{x^2 = 5x}}." },
          ],
          commonError: "Forgetting to multiply the right-hand side 1 by (x − 1)(x + 1).",
          difficulty: "core",
          guideRef: "algebraic-fraction-equations",
          hints: [
            "What is the common denominator of the two fractions?",
            "Multiply **every** term (including the 1) by (x − 1)(x + 1).",
            "You'll reach {{x^2 - 5x = 0}}. Factorise — don't divide by x.",
          ],
          strategy: "Clear the fractions",
        },
        {
          kind: "short",
          id: "quadratic-equations-p1-q13",
          question:
            "The line y = 2x + k is a tangent to the circle {{x^2 + y^2 = 20}}, where k > 0.\n\nFind the value of k.",
          answer: { type: "number", value: 10, display: "k = 10" },
          solution: [
            "Substitute: {{x^2 + (2x + k)^2 = 20}}, so {{5x^2 + 4kx + k^2 - 20 = 0}}.",
            "A tangent meets the circle at exactly one point, so this quadratic has one repeated root: discriminant = 0.",
            "{{(4k)^2 - 4(5)(k^2 - 20) = 0}} → {{16k^2 - 20k^2 + 400 = 0}} → {{4k^2 = 400}} → {{k^2 = 100}}.",
            "k > 0, so k = 10. (The repeated root is {{x = -(4k)/(2 * 5) = -4}}, so the point of contact is (−4, 2).)",
          ],
          solutions: [
            {
              label: "Geometry: perpendicular distance",
              steps: [
                "A tangent is perpendicular to the radius at the point of contact.",
                "The line has gradient 2, so the radius to the contact point has gradient {{-1/2}}: it lies on {{y = -1/2 x}}.",
                "Contact point (−2t, t) with {{4t^2 + t^2 = 20}}, so t = 2 (t > 0 for k > 0): the point (−4, 2). Then 2 = 2(−4) + k gives k = 10.",
              ],
            },
          ],
          traps: [
            { spec: { type: "number", value: -10 }, feedback: "k = −10 also gives a tangent, but the question says k > 0." },
            { spec: { type: "number", value: 20 }, feedback: "Check the discriminant: {{16k^2 - 20(k^2 - 20) = 400 - 4k^2}}, so {{k^2 = 100}}." },
          ],
          commonError: "Setting the discriminant > 0 (two intersection points) instead of = 0 for a tangent.",
          difficulty: "challenge",
          guideRef: "linear-quadratic-simultaneous",
          hints: [
            "Substitute the line into the circle. What kind of equation do you get?",
            "A tangent touches at exactly one point. What does that say about the number of roots?",
            "One repeated root means {{b^2 - 4ac = 0}}. Here a = 5, b = 4k, c = {{k^2 - 20}}.",
          ],
          strategy: "Use the discriminant",
        },
        {
          kind: "short",
          id: "quadratic-equations-p1-q14",
          question: "Solve {{9^x - 4 * 3^x + 3 = 0}}.",
          answer: { type: "list", values: [0, 1], display: "x = 0 or x = 1" },
          solution: [
            "Notice {{9^x = (3^2)^x = (3^x)^2}}. Let {{u = 3^x}}.",
            "The equation becomes {{u^2 - 4u + 3 = 0}}, so (u − 1)(u − 3) = 0: u = 1 or u = 3.",
            "{{3^x = 1}} gives x = 0; {{3^x = 3}} gives x = 1.",
          ],
          traps: [
            { spec: { type: "list", values: [1, 3] }, feedback: "Those are the values of {{u = 3^x}}. Now solve {{3^x = 1}} and {{3^x = 3}}." },
          ],
          commonError: "Forgetting that {{3^x = 1}} has the solution x = 0 (anything to the power 0 is 1).",
          difficulty: "challenge",
          guideRef: "disguised-quadratics",
          hints: [
            "Write 9 as a power of 3. What is {{9^x}} in terms of {{3^x}}?",
            "{{9^x = (3^x)^2}}. Let {{u = 3^x}} and rewrite the equation.",
            "Solve for u, then ask: what power of 3 gives each u?",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "written",
          id: "quadratic-equations-p1-q15",
          question:
            "The sides of a right-angled triangle are x cm, (2x − 1) cm and (2x + 1) cm, where (2x + 1) cm is the hypotenuse.\n\n(a) Show that {{x^2 - 8x = 0}}.\n\n(b) Hence find the perimeter of the triangle.",
          diagram: `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle with shorter sides x and 2x minus 1 and hypotenuse 2x plus 1"><rect x="0" y="0" width="300" height="200" fill="#ffffff"/><polygon points="50,160 230,160 50,64" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polyline points="50,148 62,148 62,160" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="140" y="180" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(2x − 1) cm</text><text x="44" y="116" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">x cm</text><text x="150" y="100" font-size="13" font-family="sans-serif" fill="#1f2937">(2x + 1) cm</text></svg>`,
          marks: 4,
          modelAnswer:
            "(a) By Pythagoras: {{x^2 + (2x - 1)^2 = (2x + 1)^2}}.\n\nExpand: {{x^2 + 4x^2 - 4x + 1 = 4x^2 + 4x + 1}}.\n\nSubtract {{4x^2 + 4x + 1}} from both sides: {{x^2 - 8x = 0}}, as required.\n\n(b) Factorise: x(x − 8) = 0, so x = 0 or x = 8. A side of length 0 is impossible (and 2x − 1 would be negative), so x = 8. Do **not** divide by x — that hides the root you have to reject and explain.\n\nThe sides are 8 cm, 15 cm and 17 cm (check: 64 + 225 = 289 ✓), so the perimeter is 8 + 15 + 17 = 40 cm.",
          markScheme: [
            { point: "Sets up Pythagoras correctly: x² + (2x − 1)² = (2x + 1)²", keywords: ["pythagoras", "x^2 + (2x-1)^2", "x² + (2x − 1)²", "(2x+1)^2", "(2x + 1)²"] },
            { point: "Expands both brackets correctly (4x² − 4x + 1 and 4x² + 4x + 1) and simplifies to x² − 8x = 0", keywords: ["4x^2 - 4x + 1", "4x^2 + 4x + 1", "-4x", "x^2-8x", "x² − 8x"] },
            { point: "Solves x(x − 8) = 0 and rejects x = 0 because a length must be positive", keywords: ["x(x-8)", "x(x − 8)", "x = 8", "x=8", "reject", "x = 0"] },
            { point: "Perimeter = 8 + 15 + 17 = 40 cm", keywords: ["40", "8 + 15 + 17", "15", "17"] },
          ],
          commonError: "Expanding (2x − 1)² as 4x² + 1, losing the −4x middle term.",
          solutions: [
            {
              label: "Perimeter shortcut",
              steps: [
                "Perimeter = x + (2x − 1) + (2x + 1) = 5x.",
                "With x = 8: 5 × 8 = 40 cm.",
              ],
            },
          ],
          difficulty: "challenge",
          guideRef: "solve-by-factorising",
          hints: [
            "Which side goes on its own in Pythagoras' theorem?",
            "{{x^2 + (2x - 1)^2 = (2x + 1)^2}}. Expand each square carefully — three terms each.",
            "After simplifying, factorise x² − 8x. One root is impossible for a length. Which one?",
          ],
          strategy: "Draw a diagram",
        },
      ],
    },
    {
      id: "quadratic-equations-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "written",
          id: "quadratic-equations-p2-q01",
          question:
            "Siti solves {{(x - 2)(x + 1) = 4}} like this:\n\n    x − 2 = 4  or  x + 1 = 4\n    x = 6  or  x = 3\n\nExplain her mistake, and solve the equation correctly.",
          marks: 3,
          modelAnswer:
            "The \"set each bracket equal to …\" step only works when the product equals **zero**: if two numbers multiply to 0, one of them must be 0. Two numbers can multiply to 4 in infinitely many ways (1 × 4, 0.5 × 8, …), so Siti's step is not valid. (Check: x = 6 gives 4 × 7 = 28, not 4.)\n\nCorrectly: expand {{x^2 - x - 2 = 4}}, so {{x^2 - x - 6 = 0}}, which factorises as (x − 3)(x + 2) = 0.\n\nSo x = 3 or x = −2. Check: 1 × 4 = 4 ✓ and (−4) × (−1) = 4 ✓.",
          markScheme: [
            { point: "Explains the method only works when the product is 0 (zero-product rule)", keywords: ["zero", "= 0", "=0", "only works", "multiply to 0", "equal to 0"] },
            { point: "Expands and rearranges to x² − x − 6 = 0", keywords: ["x^2 - x - 6", "x² − x − 6", "x^2-x-6", "-6", "x^2 - x - 2"] },
            { point: "Correct solutions x = 3 and x = −2", keywords: ["3", "-2", "−2", "(x-3)(x+2)", "(x − 3)(x + 2)"] },
          ],
          commonError: "Thinking any product can be split into 'bracket = number' — only a product equal to 0 can.",
          difficulty: "warmup",
          guideRef: "solve-by-factorising",
          hints: [
            "Test Siti's answer: what is (6 − 2)(6 + 1)?",
            "Why does \"one of the brackets must be 0\" work when the right-hand side is 0, but not when it's 4?",
            "Expand the left-hand side and rearrange so the right-hand side is 0.",
          ],
          strategy: "Spot the error",
        },
        {
          kind: "short",
          id: "quadratic-equations-p2-q02",
          question: "Solve {{9x^2 - 25 = 0}}.\n\nGive both solutions as fractions.",
          answer: { type: "list", values: [5 / 3, -5 / 3], tolerance: 0.001, display: "{{x = 5/3}} or {{x = -5/3}}" },
          solution: [
            "Difference of two squares: (3x − 5)(3x + 5) = 0.",
            "{{x = 5/3}} or {{x = -5/3}}.",
          ],
          solutions: [
            { label: "Rearrange and square root", steps: ["{{9x^2 = 25}}, so {{x^2 = 25/9}}.", "{{x = +- sqrt(25/9) = +- 5/3}}."] },
          ],
          traps: [
            { spec: { type: "list", values: [5 / 3], tolerance: 0.001 }, feedback: "There are two solutions: the square root can be positive or negative." },
            { spec: { type: "list", values: [5, -5] }, feedback: "3x = 5 means {{x = 5/3}}. Don't forget to divide by 3." },
          ],
          commonError: "Giving only the positive root.",
          difficulty: "warmup",
          guideRef: "solve-by-factorising",
          hints: ["{{9x^2}} and 25 are both perfect squares. Which factorising pattern fits?", "(3x − 5)(3x + 5) = 0."],
          strategy: "Spot a pattern",
        },
        {
          kind: "short",
          id: "quadratic-equations-p2-q03",
          question: "Solve {{x^2 + 6x - 3 = 0}}.\n\nGive your solutions correct to 2 decimal places.",
          answer: { type: "list", values: [0.46, -6.46], tolerance: 0.005, display: "x = 0.46 or x = −6.46" },
          solution: [
            "a = 1, b = 6, c = −3.",
            "{{x = (-6 +- sqrt(36 + 12))/2 = (-6 +- sqrt(48))/2}}.",
            "{{sqrt(48) = 6.9282...}}",
            "x = 0.9282… ÷ 2 = 0.4641… ≈ 0.46, or x = −12.9282… ÷ 2 = −6.4641… ≈ −6.46.",
          ],
          traps: [
            { spec: { type: "list", values: [-0.46, 6.46], tolerance: 0.005 }, feedback: "Start the formula with **−b** = −6." },
            { spec: { type: "list", values: [0.24, -6.24], tolerance: 0.005 }, feedback: "c = −3, so {{-4ac = +12}} and the discriminant is 36 + 12 = 48, not 36 − 12 = 24." },
          ],
          commonError: "Writing 36 − 12 instead of 36 + 12 for the discriminant (c is negative).",
          difficulty: "warmup",
          guideRef: "quadratic-formula",
          hints: ["Write down a, b, c, then substitute into {{x = (-b +- sqrt(b^2 - 4ac))/(2a)}}.", "{{b^2 - 4ac = 36 - 4(1)(-3) = 48}}."],
          strategy: "Write down a, b, c first",
        },
        {
          kind: "short",
          id: "quadratic-equations-p2-q04",
          question:
            "The curve {{y = x^2}} and the line y = x + 6 intersect at two points.\n\nFind the x-coordinates of the two points of intersection.",
          answer: { type: "list", values: [3, -2], display: "x = 3 and x = −2" },
          solution: [
            "At an intersection both y-values are equal: {{x^2 = x + 6}}.",
            "{{x^2 - x - 6 = 0}}, so (x − 3)(x + 2) = 0.",
            "x = 3 or x = −2. (The points are (3, 9) and (−2, 4).)",
          ],
          traps: [{ spec: { type: "list", values: [-3, 2] }, feedback: "Signs swapped: (x − 3)(x + 2) = 0 gives x = 3 or x = −2." }],
          commonError: "Rearranging {{x^2 = x + 6}} to {{x^2 + x - 6 = 0}} (sign slip on the x term).",
          difficulty: "warmup",
          guideRef: "linear-quadratic-simultaneous",
          hints: ["At an intersection, the two y-values are the same.", "Set {{x^2 = x + 6}} and rearrange to = 0."],
          strategy: "Substitute the linear into the quadratic",
        },
        {
          kind: "short",
          id: "quadratic-equations-p2-q05",
          question: "Solve {{4x^2 - 4x - 15 = 0}}.",
          answer: { type: "list", values: [2.5, -1.5], display: "x = 2.5 or x = −1.5" },
          solution: [
            "a × c = 4 × (−15) = −60. Two numbers multiplying to −60 and adding to −4: −10 and +6.",
            "Split: {{4x^2 - 10x + 6x - 15 = 0}}.",
            "2x(2x − 5) + 3(2x − 5) = 0, so (2x − 5)(2x + 3) = 0.",
            "{{x = 5/2 = 2.5}} or {{x = -3/2 = -1.5}}.",
          ],
          traps: [
            { spec: { type: "list", values: [5, -3] }, feedback: "2x − 5 = 0 gives {{x = 5/2}}, not 5. Divide by the 2." },
            { spec: { type: "list", values: [-2.5, 1.5] }, feedback: "Both signs are flipped: 2x − 5 = 0 gives x = +2.5." },
          ],
          commonError: "Not dividing by the coefficient of x after setting each bracket to zero.",
          difficulty: "core",
          guideRef: "solve-by-factorising",
          hints: [
            "Find a × c.",
            "Two numbers: product −60, sum −4.",
            "−10 and +6. Split the middle term and factorise in pairs.",
          ],
          strategy: "Split the middle term",
        },
        {
          kind: "short",
          id: "quadratic-equations-p2-q06",
          question:
            "Two consecutive **odd** positive integers have a product of 143.\n\nLet the smaller one be n. Form and solve a quadratic equation, and write down the **larger** integer.",
          answer: { type: "number", value: 13 },
          solution: [
            "Consecutive odd integers differ by 2, so they are n and n + 2.",
            "n(n + 2) = 143, so {{n^2 + 2n - 143 = 0}}.",
            "Factorise: (n + 13)(n − 11) = 0. n is positive, so n = 11.",
            "The integers are 11 and 13; the larger is 13. Check: 11 × 13 = 143 ✓.",
          ],
          traps: [
            { spec: { type: "number", value: 11 }, feedback: "11 is n, the smaller integer. The question asks for the larger one, n + 2." },
            { spec: { type: "number", value: 12 }, feedback: "Odd integers go up in 2s: n and n + 2, not n and n + 1." },
          ],
          commonError: "Using n and n + 1 for consecutive odd numbers.",
          difficulty: "core",
          guideRef: "solve-by-factorising",
          hints: [
            "If n is odd, what is the next odd number?",
            "n(n + 2) = 143. Rearrange to = 0.",
            "Which two numbers multiply to −143 and add to 2? Try factors of 143 = 11 × 13.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "quadratic-equations-p2-q07",
          question:
            "Solve {{x^2 - 2x - 11 = 0}} by completing the square.\n\nGive the **larger** solution in the form {{a + b sqrt(3)}}, where a and b are integers.",
          answer: { type: "expression", expr: "1+2sqrt(3)", form: "surd", display: "{{x = 1 + 2 sqrt(3)}}" },
          solution: [
            "Half of −2 is −1: {{x^2 - 2x = (x - 1)^2 - 1}}.",
            "So {{(x - 1)^2 - 1 - 11 = 0}}, i.e. {{(x - 1)^2 = 12}}.",
            "{{x - 1 = +- sqrt(12) = +- 2 sqrt(3)}}.",
            "{{x = 1 +- 2 sqrt(3)}}; the larger is {{1 + 2 sqrt(3)}} (≈ 4.46).",
          ],
          traps: [
            { spec: { type: "expression", expr: "1-2sqrt(3)" }, feedback: "That's the smaller solution (it's negative). The question asks for the larger one." },
            { spec: { type: "expression", expr: "-1+2sqrt(3)" }, feedback: "From (x − 1)² = 12, add 1 to both sides: x = **1** ± 2√3." },
          ],
          commonError: "Leaving the answer as {{1 + sqrt(12)}} — simplify the surd: {{sqrt(12) = 2 sqrt(3)}}.",
          difficulty: "core",
          guideRef: "solve-completing-square",
          hints: [
            "Halve −2. Which bracket squared starts {{x^2 - 2x}}?",
            "You should reach {{(x - 1)^2 = 12}}.",
            "Simplify {{sqrt(12)}}: what square number is a factor of 12?",
          ],
          strategy: "Make it a perfect square",
        },
        {
          kind: "mcq",
          id: "quadratic-equations-p2-q08",
          question: "The equation {{x^2 + 6x + k = 0}} has exactly one (repeated) real solution.\n\nWhat is the value of k?",
          options: ["36", "−9", "9", "3"],
          answerIndex: 2,
          explanation:
            "One repeated root means the discriminant is zero: {{6^2 - 4(1)(k) = 0}}, so 36 = 4k and k = 9. Then {{x^2 + 6x + 9 = (x + 3)^2}} — a perfect square, as expected. 36 comes from setting {{b^2 = k}} and forgetting the 4a; 3 is half of b (the number in the bracket, not k); −9 is a sign slip solving 36 − 4k = 0.",
          difficulty: "core",
          guideRef: "quadratic-formula",
          hints: [
            "What must the discriminant be for exactly one repeated root?",
            "{{b^2 - 4ac = 0}} with a = 1, b = 6, c = k.",
          ],
          strategy: "Use the discriminant",
        },
        {
          kind: "short",
          id: "quadratic-equations-p2-q09",
          question:
            "Jun kicks a ball at the Padang. Its height, h metres, after t seconds is\n\n    {{h = 2 + 20t - 5t^2}}\n\nFind the two times at which the ball is 12 m above the ground. Give your answers in seconds, correct to 3 significant figures.",
          answer: { type: "list", values: [0.586, 3.41], tolerance: 0.002, display: "t = 0.586 s and t = 3.41 s" },
          solution: [
            "Set h = 12: {{2 + 20t - 5t^2 = 12}}.",
            "Rearrange: {{5t^2 - 20t + 10 = 0}}, and divide by 5: {{t^2 - 4t + 2 = 0}}.",
            "{{t = (4 +- sqrt(16 - 8))/2 = (4 +- sqrt(8))/2 = 2 +- sqrt(2)}}.",
            "t = 2 − 1.4142… = 0.5857… ≈ 0.586 s (on the way up) and t = 3.4142… ≈ 3.41 s (on the way down).",
          ],
          solutions: [
            {
              label: "Complete the square",
              steps: [
                "{{t^2 - 4t + 2 = (t - 2)^2 - 2 = 0}}, so {{(t - 2)^2 = 2}}.",
                "{{t = 2 +- sqrt(2)}}. This also shows the symmetry: both times are {{sqrt(2)}} s either side of t = 2, when the ball is highest.",
              ],
            },
          ],
          traps: [
            { spec: { type: "list", values: [-0.0976, 4.10], tolerance: 0.005 }, feedback: "You've solved h = 0 instead of h = 12. Set the expression equal to 12 first." },
          ],
          commonError: "Forgetting to subtract 12 before using the formula (solving h = 0 instead).",
          difficulty: "core",
          guideRef: "quadratic-formula",
          hints: [
            "Replace h with 12 and rearrange so one side is 0.",
            "Every term in {{5t^2 - 20t + 10 = 0}} divides by 5 — simplify first.",
            "{{t^2 - 4t + 2 = 0}} doesn't factorise. Use the formula or complete the square.",
          ],
          strategy: "Make it simpler",
        },
        {
          kind: "written",
          id: "quadratic-equations-p2-q10",
          question:
            "Arjun says: \"The equation {{x^2 - 2kx + k^2 + 1 = 0}} has no real solutions, whatever the value of k.\"\n\nShow that Arjun is correct.",
          marks: 3,
          modelAnswer:
            "Here a = 1, b = −2k and c = {{k^2 + 1}}.\n\nDiscriminant: {{b^2 - 4ac = (-2k)^2 - 4(1)(k^2 + 1) = 4k^2 - 4k^2 - 4 = -4}}.\n\nThe discriminant is −4 for every value of k, which is always negative, so the equation never has real solutions — Arjun is correct.\n\n(Alternatively, complete the square: {{(x - k)^2 + 1 = 0}}. A square is never negative, so the left-hand side is at least 1 and can never be 0.)",
          markScheme: [
            { point: "Identifies a = 1, b = −2k, c = k² + 1 and substitutes into b² − 4ac (or completes the square to (x − k)² + 1)", keywords: ["-2k", "−2k", "k^2 + 1", "k² + 1", "(x - k)^2", "(x − k)²", "b^2 - 4ac", "b² − 4ac"] },
            { point: "Simplifies the discriminant to −4 (the k² terms cancel)", keywords: ["-4", "−4", "4k^2 - 4k^2", "4k² − 4k²", "cancel"] },
            { point: "Concludes: always negative (or square ≥ 0 so LHS ≥ 1) so no real solutions for any k", keywords: ["always negative", "negative", "< 0", "no real", "any value of k", "for all k", "at least 1"] },
          ],
          commonError: "Testing a few values of k (k = 0, 1, 2) — examples don't prove it for *every* k.",
          solutions: [
            {
              label: "Completing the square",
              steps: [
                "{{x^2 - 2kx + k^2 = (x - k)^2}}, so the equation is {{(x - k)^2 + 1 = 0}}.",
                "{{(x - k)^2 >= 0}}, so {{(x - k)^2 + 1 >= 1}} — it can never equal 0. Neater, and it shows *why*.",
              ],
            },
          ],
          difficulty: "core",
          guideRef: "quadratic-formula",
          hints: [
            "Trying values of k won't prove it for all k. What tool tells you the number of real solutions?",
            "Write down a, b and c — b and c involve k.",
            "Expand {{(-2k)^2 - 4(k^2 + 1)}}. What happens to the {{k^2}} terms?",
          ],
          strategy: "Use the discriminant",
        },
        {
          kind: "short",
          id: "quadratic-equations-p2-q11",
          question:
            "Solve the simultaneous equations\n\n    y = 3x − 10\n    {{x^2 + y^2 = 10}}\n\nGive your answer as coordinates (x, y).",
          answer: { type: "list", values: [3, -1], ordered: true, display: "(3, −1)" },
          solution: [
            "Substitute: {{x^2 + (3x - 10)^2 = 10}}.",
            "Expand: {{x^2 + 9x^2 - 60x + 100 = 10}}, so {{10x^2 - 60x + 90 = 0}}.",
            "Divide by 10: {{x^2 - 6x + 9 = 0}}, so {{(x - 3)^2 = 0}} and x = 3 (a repeated root).",
            "y = 3(3) − 10 = −1. There is only one solution, (3, −1): the line is a **tangent** to the circle.",
          ],
          traps: [
            { spec: { type: "list", values: [-1, 3], ordered: true }, feedback: "Right point, wrong order: give x first, then y." },
          ],
          commonError: "Expanding {{(3x - 10)^2}} as {{9x^2 + 100}}, missing the −60x.",
          difficulty: "core",
          guideRef: "linear-quadratic-simultaneous",
          hints: [
            "Substitute y = 3x − 10 into the circle equation.",
            "{{(3x - 10)^2 = 9x^2 - 60x + 100}}. Collect terms and simplify.",
            "The quadratic is a perfect square — what does a repeated root mean geometrically?",
          ],
          strategy: "Substitute the linear into the quadratic",
        },
        {
          kind: "written",
          id: "quadratic-equations-p2-q12",
          question:
            "(a) Show that the equation {{5/(x + 2) + 3/(x - 1) = 2}} can be written as {{2x^2 - 6x - 5 = 0}}.\n\n(b) Hence solve {{5/(x + 2) + 3/(x - 1) = 2}}, giving your solutions correct to 3 significant figures.",
          marks: 4,
          modelAnswer:
            "(a) Multiply every term by (x + 2)(x − 1):\n\n    5(x − 1) + 3(x + 2) = 2(x + 2)(x − 1)\n\nLeft: 5x − 5 + 3x + 6 = 8x + 1. Right: {{2(x^2 + x - 2) = 2x^2 + 2x - 4}}.\n\nSo {{8x + 1 = 2x^2 + 2x - 4}}, which rearranges to {{2x^2 - 6x - 5 = 0}}, as required.\n\n(b) {{x = (6 +- sqrt(36 + 40))/4 = (6 +- sqrt(76))/4}}.\n\nx = 3.68 or x = −0.679 (3 s.f.). Neither is an excluded value (−2 or 1), so both are valid.",
          markScheme: [
            { point: "Multiplies through by (x + 2)(x − 1) to get 5(x − 1) + 3(x + 2) = 2(x + 2)(x − 1)", keywords: ["(x+2)(x-1)", "(x + 2)(x − 1)", "5(x-1)", "5(x − 1)", "3(x+2)", "3(x + 2)"] },
            { point: "Expands correctly (8x + 1 and 2x² + 2x − 4) and rearranges to 2x² − 6x − 5 = 0", keywords: ["8x + 1", "8x+1", "2x^2 + 2x - 4", "2x² + 2x − 4", "2x^2-6x-5"] },
            { point: "Correct substitution into the formula: (6 ± √76)/4", keywords: ["76", "sqrt(76)", "√76", "36 + 40", "(6 ±"] },
            { point: "Both solutions: 3.68 and −0.679", keywords: ["3.68", "-0.679", "−0.679", "0.679"] },
          ],
          commonError: "Multiplying the 2 on the right by only one of the denominators.",
          difficulty: "core",
          guideRef: "algebraic-fraction-equations",
          hints: [
            "What single expression can you multiply every term by to clear both fractions?",
            "Multiply by (x + 2)(x − 1) — including the 2 on the right.",
            "For (b), use the formula with a = 2, b = −6, c = −5.",
          ],
          strategy: "Clear the fractions",
        },
        {
          kind: "short",
          id: "quadratic-equations-p2-q13",
          question: "Solve {{x/(x - 2) - 1/(x + 2) = 8/(x^2 - 4)}}.",
          answer: { type: "number", value: -3, display: "x = −3" },
          solution: [
            "Notice {{x^2 - 4 = (x - 2)(x + 2)}}, so the common denominator is (x − 2)(x + 2). Excluded values: x ≠ 2 and x ≠ −2.",
            "Multiply every term by (x − 2)(x + 2): x(x + 2) − (x − 2) = 8.",
            "Expand: {{x^2 + 2x - x + 2 = 8}}, so {{x^2 + x - 6 = 0}}.",
            "(x + 3)(x − 2) = 0, so x = −3 or x = 2.",
            "But x = 2 makes the denominators zero — it is **excluded**. The only solution is x = −3.",
            "Check: {{-3/(-5) - 1/(-1) = 3/5 + 1 = 8/5}} and {{8/(9 - 4) = 8/5}} ✓.",
          ],
          traps: [
            { spec: { type: "number", value: 2 }, feedback: "Substitute x = 2: the denominator x − 2 becomes 0, so the fractions are not defined there. x = 2 must be rejected." },
            { spec: { type: "list", values: [-3, 2] }, feedback: "x = 2 makes a denominator zero, so it is not a solution. Only one value survives." },
          ],
          commonError: "Keeping x = 2, which makes the original denominators zero.",
          difficulty: "challenge",
          guideRef: "algebraic-fraction-equations",
          hints: [
            "Factorise {{x^2 - 4}}. What is the lowest common denominator?",
            "Before you start, note which values of x are not allowed.",
            "Multiply through by (x − 2)(x + 2) — watch the minus sign in front of the second fraction.",
            "Solve, then check each root against your excluded values.",
          ],
          strategy: "Check the answer makes sense",
        },
        {
          kind: "short",
          id: "quadratic-equations-p2-q14",
          question: "Solve {{2x - 7 sqrt(x) + 3 = 0}}.",
          answer: { type: "list", values: [0.25, 9], display: "{{x = 1/4}} or x = 9" },
          solution: [
            "Let {{u = sqrt(x)}}, so {{x = u^2}}. The equation becomes {{2u^2 - 7u + 3 = 0}}.",
            "Factorise: (2u − 1)(u − 3) = 0, so {{u = 1/2}} or u = 3.",
            "{{sqrt(x) = 1/2}} gives {{x = 1/4}}; {{sqrt(x) = 3}} gives x = 9.",
            "Both u-values are positive, so both are allowed ({{sqrt(x)}} can't be negative). Check x = 9: 18 − 21 + 3 = 0 ✓.",
          ],
          traps: [
            { spec: { type: "list", values: [0.5, 3] }, feedback: "Those are the values of {{u = sqrt(x)}}. Square them to get x." },
          ],
          commonError: "Forgetting to square the u-values to get back to x.",
          difficulty: "challenge",
          guideRef: "disguised-quadratics",
          hints: [
            "If {{u = sqrt(x)}}, what is x in terms of u?",
            "{{2u^2 - 7u + 3 = 0}}. Factorise (a ≠ 1).",
            "Undo the substitution: {{x = u^2}}. Should you reject any value of u?",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "quadratic-equations-p2-q15",
          question:
            "The equation {{x^2 - (k + 3)x + 4k = 0}} has equal roots.\n\nFind the two possible values of k.",
          answer: { type: "list", values: [1, 9], display: "k = 1 or k = 9" },
          solution: [
            "Equal roots means the discriminant is 0. Here a = 1, b = −(k + 3), c = 4k.",
            "{{(k + 3)^2 - 4(1)(4k) = 0}}, so {{k^2 + 6k + 9 - 16k = 0}}, i.e. {{k^2 - 10k + 9 = 0}}.",
            "(k − 1)(k − 9) = 0, so k = 1 or k = 9.",
            "Check k = 1: {{x^2 - 4x + 4 = (x - 2)^2}} ✓. k = 9: {{x^2 - 12x + 36 = (x - 6)^2}} ✓.",
          ],
          traps: [
            { spec: { type: "list", values: [-1, -9] }, feedback: "(k − 1)(k − 9) = 0 gives k = **+1** or k = **+9**." },
          ],
          commonError: "Squaring (k + 3) as {{k^2 + 9}}, losing the 6k.",
          difficulty: "challenge",
          guideRef: "quadratic-formula",
          hints: [
            "What does \"equal roots\" tell you about {{b^2 - 4ac}}?",
            "b = −(k + 3), so {{b^2 = (k + 3)^2}}.",
            "You get a *new* quadratic — in k this time. Solve it.",
          ],
          strategy: "Use the discriminant",
        },
      ],
    },
  ],

  // =========================================================================
  // Challenge set — 10 grade-9 / H+ problems
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "quadratic-equations-ch-q01",
      question:
        "The equation {{kx^2 + 4x + (k - 3) = 0}} has exactly one real solution, and k > 0.\n\nFind k and the solution. Write k first, then x.",
      answer: { type: "list", values: [4, -0.5], ordered: true, display: "k = 4, {{x = -1/2}}" },
      solution: [
        "One (repeated) solution: discriminant = 0. Here a = k, b = 4, c = k − 3.",
        "{{16 - 4k(k - 3) = 0}}, so {{16 - 4k^2 + 12k = 0}}, i.e. {{k^2 - 3k - 4 = 0}}.",
        "(k − 4)(k + 1) = 0, so k = 4 or k = −1. k > 0, so k = 4.",
        "Then {{4x^2 + 4x + 1 = (2x + 1)^2 = 0}}, so {{x = -1/2}}.",
      ],
      solutions: [
        {
          label: "Use the repeated-root formula",
          steps: [
            "A repeated root sits at the vertex: {{x = -b/(2a) = -4/(2k)}}.",
            "With k = 4 that is {{x = -4/8 = -1/2}} — no need to factorise the quadratic in x at all.",
          ],
        },
      ],
      traps: [
        { spec: { type: "list", values: [4, 0.5], ordered: true }, feedback: "k = 4 is right. But {{(2x + 1)^2 = 0}} gives 2x = −1, so x = **−{{1/2}}**." },
        { spec: { type: "list", values: [-1, 2], ordered: true }, feedback: "k = −1 does give a repeated root (x = 2), but the question says k > 0." },
      ],
      difficulty: "challenge",
      guideRef: "quadratic-formula",
      hints: [
        "\"Exactly one real solution\" — what must be true of {{b^2 - 4ac}}?",
        "a = k and c = k − 3, so {{4^2 - 4k(k - 3) = 0}}. This is a quadratic in k.",
        "Solve for k and use k > 0.",
        "Once you know k, the quadratic in x is a perfect square. Which one?",
      ],
      strategy: "Use the discriminant",
    },
    {
      kind: "short",
      id: "quadratic-equations-ch-q02",
      question:
        "The equation {{x^2 - 7x + 3 = 0}} has roots α and β.\n\nWithout finding α and β, work out the value of {{alpha^2 + beta^2}}.",
      answer: { type: "number", value: 43 },
      solution: [
        "If α and β are the roots, then {{x^2 - 7x + 3 = (x - alpha)(x - beta) = x^2 - (alpha + beta)x + alpha beta}}.",
        "Compare coefficients: α + β = 7 and αβ = 3.",
        "{{alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta = 49 - 6 = 43}}.",
      ],
      solutions: [
        {
          label: "Brute force with the formula",
          steps: [
            "{{x = (7 +- sqrt(37))/2}}.",
            "{{((7 + sqrt(37))/2)^2 + ((7 - sqrt(37))/2)^2 = (49 + 14 sqrt(37) + 37 + 49 - 14 sqrt(37) + 37)/4 = 172/4 = 43}}.",
            "Same answer, but much messier — the sum-and-product trick avoids surds entirely.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 49 }, feedback: "{{(alpha + beta)^2 = alpha^2 + 2 alpha beta + beta^2}} — you still need to subtract {{2 alpha beta}}." },
        { spec: { type: "number", value: 55 }, feedback: "You added {{2 alpha beta}} instead of subtracting it: {{alpha^2 + beta^2 = (alpha + beta)^2 - 2 alpha beta}}." },
      ],
      difficulty: "challenge",
      guideRef: "quadratic-formula",
      hints: [
        "Expand (x − α)(x − β) and compare it with {{x^2 - 7x + 3}}. What do you learn?",
        "α + β = 7 and αβ = 3.",
        "How can you build {{alpha^2 + beta^2}} from {{(alpha + beta)^2}}?",
      ],
      strategy: "Look for an invariant",
    },
    {
      kind: "short",
      id: "quadratic-equations-ch-q03",
      question:
        "The line y = 2x + c meets the curve {{y = x^2 - 4x + 10}} at exactly one point.\n\nFind the value of c and the coordinates of that point. Write c, then x, then y.",
      answer: { type: "list", values: [1, 3, 7], ordered: true, display: "c = 1, point (3, 7)" },
      solution: [
        "Set equal: {{x^2 - 4x + 10 = 2x + c}}, so {{x^2 - 6x + (10 - c) = 0}}.",
        "Exactly one point means one repeated root: {{36 - 4(10 - c) = 0}}, so 36 − 40 + 4c = 0 and c = 1.",
        "Then {{x^2 - 6x + 9 = (x - 3)^2 = 0}}, so x = 3.",
        "y = 2(3) + 1 = 7. Check on the curve: 9 − 12 + 10 = 7 ✓. The line is the tangent at (3, 7).",
      ],
      solutions: [
        {
          label: "Complete the square",
          steps: [
            "{{x^2 - 6x + 10 - c = (x - 3)^2 + 1 - c}}.",
            "This is 0 for exactly one x only when 1 − c = 0, i.e. c = 1, and then x = 3.",
          ],
        },
      ],
      traps: [
        { spec: { type: "list", values: [-1, 3, 5], ordered: true }, feedback: "Recheck the discriminant: {{36 - 4(10 - c) = -4 + 4c}}, which is 0 when c = **+1**." },
      ],
      difficulty: "challenge",
      guideRef: "linear-quadratic-simultaneous",
      hints: [
        "Set the line equal to the curve and rearrange to a quadratic = 0.",
        "\"Exactly one point\" — what does that say about the discriminant?",
        "{{x^2 - 6x + (10 - c) = 0}}: set {{b^2 - 4ac = 0}} and solve for c.",
        "Find the repeated root, then use the line to get y.",
      ],
      strategy: "Use the discriminant",
    },
    {
      kind: "short",
      id: "quadratic-equations-ch-q04",
      question:
        "The line y = x + 2 meets the circle {{x^2 + y^2 = 20}} at the points A and B.\n\nFind the exact length of AB. Give your answer as a simplified surd.",
      answer: { type: "expression", expr: "6sqrt(2)", form: "surd", display: "{{AB = 6 sqrt(2)}}" },
      solution: [
        "Substitute: {{x^2 + (x + 2)^2 = 20}}, so {{2x^2 + 4x - 16 = 0}}, i.e. {{x^2 + 2x - 8 = 0}}.",
        "(x + 4)(x − 2) = 0, so x = 2 or x = −4.",
        "Matching y = x + 2: A(2, 4) and B(−4, −2).",
        "{{AB = sqrt((2 - (-4))^2 + (4 - (-2))^2) = sqrt(36 + 36) = sqrt(72) = 6 sqrt(2)}}.",
      ],
      solutions: [
        {
          label: "Use the gradient",
          steps: [
            "The line has gradient 1, so between A and B the x-change equals the y-change.",
            "The x-change is 2 − (−4) = 6, so AB is the diagonal of a 6 × 6 square: {{6 sqrt(2)}}. No need to find the y-values at all.",
          ],
        },
      ],
      traps: [
        { spec: { type: "expression", expr: "6" }, feedback: "6 is the horizontal distance only. AB is slanted — use Pythagoras with the vertical distance too." },
      ],
      difficulty: "challenge",
      guideRef: "linear-quadratic-simultaneous",
      hints: [
        "First find A and B: substitute the line into the circle.",
        "{{x^2 + 2x - 8 = 0}} gives two x-values. Find each y from the line.",
        "Use Pythagoras on the differences in x and y.",
        "Simplify {{sqrt(72)}}: 72 = 36 × 2.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "quadratic-equations-ch-q05",
      question: "Solve {{x^(2/3) - 5x^(1/3) + 4 = 0}}.",
      answer: { type: "list", values: [1, 64], display: "x = 1 or x = 64" },
      solution: [
        "Notice {{x^(2/3) = (x^(1/3))^2}}. Let {{u = x^(1/3)}}.",
        "Then {{u^2 - 5u + 4 = 0}}, so (u − 1)(u − 4) = 0: u = 1 or u = 4.",
        "{{x^(1/3) = 1}} gives x = 1; {{x^(1/3) = 4}} gives {{x = 4^3 = 64}}.",
        "Check x = 64: {{64^(2/3) = 16}}, {{64^(1/3) = 4}}: 16 − 20 + 4 = 0 ✓.",
      ],
      traps: [
        { spec: { type: "list", values: [1, 4] }, feedback: "u = 1 and u = 4 are the cube roots of x. Cube them to find x." },
        { spec: { type: "list", values: [1, 16] }, feedback: "{{u = x^(1/3)}}, so {{x = u^3}}, not {{u^2}}: {{4^3 = 64}}." },
      ],
      difficulty: "challenge",
      guideRef: "disguised-quadratics",
      hints: [
        "How are the powers {{2/3}} and {{1/3}} related?",
        "{{x^(2/3) = (x^(1/3))^2}}. Let {{u = x^(1/3)}}.",
        "Solve the quadratic in u, then undo: if {{x^(1/3) = u}}, then x = ?",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "quadratic-equations-ch-q06",
      question: "Solve {{(x^2 + 3x)^2 - 14(x^2 + 3x) + 40 = 0}}.\n\nGive all four solutions.",
      answer: { type: "list", values: [1, -4, 2, -5], display: "x = 1, −4, 2 or −5" },
      solution: [
        "Let {{u = x^2 + 3x}}. Then {{u^2 - 14u + 40 = 0}}, so (u − 4)(u − 10) = 0: u = 4 or u = 10.",
        "{{x^2 + 3x = 4}}: {{x^2 + 3x - 4 = 0}}, (x + 4)(x − 1) = 0, so x = 1 or x = −4.",
        "{{x^2 + 3x = 10}}: {{x^2 + 3x - 10 = 0}}, (x + 5)(x − 2) = 0, so x = 2 or x = −5.",
        "Four solutions: x = −5, −4, 1, 2.",
      ],
      solutions: [
        {
          label: "Why not expand?",
          steps: [
            "Expanding gives {{x^4 + 6x^3 - 5x^2 - 42x + 40 = 0}} — a quartic with no easy route.",
            "Spotting the repeated block {{x^2 + 3x}} turns one hard problem into three easy quadratics.",
          ],
        },
      ],
      traps: [
        { spec: { type: "list", values: [4, 10] }, feedback: "Those are the values of {{u = x^2 + 3x}}. Each gives its own quadratic in x — solve both." },
      ],
      difficulty: "challenge",
      guideRef: "disguised-quadratics",
      hints: [
        "Don't expand! Which expression appears twice?",
        "Let {{u = x^2 + 3x}}. Solve the quadratic in u.",
        "Each value of u gives a new quadratic: {{x^2 + 3x = u}}.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "quadratic-equations-ch-q07",
      question:
        "A river ferry travels 12 km upstream and then 12 km back downstream. In still water the ferry travels at 8 km/h, and the river flows at a steady c km/h.\n\nThe round trip takes 3 hours 12 minutes. Find c.",
      answer: { type: "number", value: 2, display: "c = 2 km/h" },
      solution: [
        "Upstream speed = (8 − c) km/h; downstream speed = (8 + c) km/h. Time = distance ÷ speed.",
        "3 h 12 min = 3.2 h, so {{12/(8 - c) + 12/(8 + c) = 3.2}}.",
        "Multiply by (8 − c)(8 + c): {{12(8 + c) + 12(8 - c) = 3.2(64 - c^2)}}, so {{192 = 204.8 - 3.2c^2}}.",
        "{{3.2c^2 = 12.8}}, so {{c^2 = 4}} and c = ±2. A flow speed must be positive, so c = 2.",
        "Check: 12 ÷ 6 = 2 h upstream and 12 ÷ 10 = 1.2 h downstream; 2 + 1.2 = 3.2 h = 3 h 12 min ✓.",
      ],
      solutions: [
        {
          label: "Spot the symmetry first",
          steps: [
            "Add the fractions: {{12/(8 - c) + 12/(8 + c) = (12(8 + c) + 12(8 - c))/(64 - c^2) = 192/(64 - c^2)}} — the c terms cancel.",
            "{{192/(64 - c^2) = 3.2}} gives {{64 - c^2 = 60}}, so {{c^2 = 4}}. A 'quadratic' with no c-term: just square-root.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 4 }, feedback: "4 is {{c^2}}. Square-root to find c." },
        { spec: { type: "number", value: 2.8 }, feedback: "3 hours 12 minutes is 3 + {{12/60}} = 3.2 hours, not 3.12 hours." },
      ],
      difficulty: "challenge",
      guideRef: "algebraic-fraction-equations",
      hints: [
        "Going upstream the current slows the ferry; downstream it helps. Write both speeds in terms of c.",
        "Write each time as distance ÷ speed, and convert 3 h 12 min to hours.",
        "{{12/(8 - c) + 12/(8 + c) = 3.2}}. Multiply through by (8 − c)(8 + c) = {{64 - c^2}}.",
        "The c terms cancel on the left. Solve for {{c^2}} and reject the negative root.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "quadratic-equations-ch-q08",
      question:
        "A rectangle has width 1 and length x (x > 1). Cutting a 1 × 1 square off one end leaves a smaller rectangle that is **similar** to the original.\n\nFind the exact value of x.",
      answer: { type: "expression", expr: "(1+sqrt(5))/2", form: "surd", display: "{{x = (1 + sqrt(5))/2}}" },
      solution: [
        "The leftover rectangle is 1 by (x − 1). Similar means the long side ÷ short side is the same: {{x/1 = 1/(x - 1)}}.",
        "So x(x − 1) = 1, i.e. {{x^2 - x - 1 = 0}}.",
        "Complete the square: {{(x - 1/2)^2 - 1/4 - 1 = 0}}, so {{(x - 1/2)^2 = 5/4}}.",
        "{{x - 1/2 = +- sqrt(5)/2}}, so {{x = (1 +- sqrt(5))/2}}.",
        "x > 1, so {{x = (1 + sqrt(5))/2}} ≈ 1.618 — the golden ratio.",
      ],
      solutions: [
        {
          label: "Quadratic formula",
          steps: [
            "{{x = (1 +- sqrt(1 + 4))/2 = (1 +- sqrt(5))/2}}.",
            "The negative root ≈ −0.618 is rejected. Quicker here, but completing the square shows where the {{sqrt(5)}} comes from.",
          ],
        },
      ],
      traps: [
        { spec: { type: "expression", expr: "(1-sqrt(5))/2" }, feedback: "That root is negative (≈ −0.618) — a length must be greater than 1 here." },
        { spec: { type: "expression", expr: "(-1+sqrt(5))/2" }, feedback: "≈ 0.618 is the leftover piece's short-to-long ratio, x − 1. The question wants x itself." },
      ],
      difficulty: "challenge",
      guideRef: "solve-completing-square",
      hints: [
        "Draw it. What are the dimensions of the leftover rectangle?",
        "Similar rectangles: long ÷ short is the same for both. Write {{x/1 = 1/(x - 1)}}.",
        "Rearrange to {{x^2 - x - 1 = 0}}, then complete the square (half of −1 is {{-1/2}}).",
        "Which root fits x > 1?",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "quadratic-equations-ch-q09",
      question:
        "The equation {{x^2 + bx + 24 = 0}} has two integer solutions (they may be equal or different).\n\nHow many different integer values of b are possible?",
      answer: { type: "number", value: 8 },
      solution: [
        "If the roots are integers p and q, then {{x^2 + bx + 24 = (x - p)(x - q)}}, so pq = 24 and b = −(p + q).",
        "pq = 24 > 0, so p and q have the same sign. Positive pairs: {1, 24}, {2, 12}, {3, 8}, {4, 6} with sums 25, 14, 11, 10.",
        "Negative pairs give sums −25, −14, −11, −10.",
        "So b ∈ {±10, ±11, ±14, ±25}: **8** values. (24 isn't a square number, so equal integer roots are impossible.)",
      ],
      traps: [
        { spec: { type: "number", value: 4 }, feedback: "You've counted the positive factor pairs only. Two negative integers also multiply to 24 — e.g. (−4)(−6)." },
        { spec: { type: "number", value: 16 }, feedback: "Each unordered pair {p, q} gives one value of b — don't count (4, 6) and (6, 4) separately." },
      ],
      difficulty: "challenge",
      guideRef: "solve-by-factorising",
      hints: [
        "If the roots are p and q, the quadratic is (x − p)(x − q). Expand it.",
        "So pq = 24 and b = −(p + q). List the ways to make 24.",
        "Don't forget negative pairs — and don't double-count.",
      ],
      strategy: "Split into cases",
    },
    {
      kind: "written",
      id: "quadratic-equations-ch-q10",
      question:
        "Prove that, for every real value of k, the equation {{x^2 + kx + k - 2 = 0}} has two distinct real solutions.",
      marks: 3,
      modelAnswer:
        "Here a = 1, b = k, c = k − 2.\n\nDiscriminant: {{b^2 - 4ac = k^2 - 4(k - 2) = k^2 - 4k + 8}}.\n\nComplete the square: {{k^2 - 4k + 8 = (k - 2)^2 + 4}}.\n\nSince {{(k - 2)^2 >= 0}} for every real k, the discriminant is at least 4, so it is always strictly positive. Therefore the equation always has two distinct real solutions.",
      markScheme: [
        { point: "Discriminant in terms of k: k² − 4(k − 2) = k² − 4k + 8", keywords: ["k^2 - 4k + 8", "k² − 4k + 8", "k^2-4k+8", "k^2 - 4(k - 2)", "b^2 - 4ac"] },
        { point: "Completes the square: (k − 2)² + 4", keywords: ["(k-2)^2 + 4", "(k − 2)² + 4", "(k-2)^2+4", "complete the square", "(k - 2)"] },
        { point: "Argues (k − 2)² ≥ 0 so discriminant ≥ 4 > 0 for all k, hence two distinct real solutions", keywords: ["≥ 0", ">= 0", "always positive", "> 0", "at least 4", "for all k", "never negative"] },
      ],
      commonError: "Substituting a few values of k — that checks examples, it doesn't prove the statement for every k.",
      solutions: [
        {
          label: "Discriminant of the discriminant",
          steps: [
            "Think of {{D(k) = k^2 - 4k + 8}} as a quadratic in k. Its own discriminant is 16 − 32 = −16 < 0, so D(k) is never zero.",
            "D(0) = 8 > 0 and D(k) never changes sign (it has no roots), so D(k) > 0 for every k.",
          ],
        },
      ],
      difficulty: "challenge",
      guideRef: "quadratic-formula",
      hints: [
        "Which quantity decides the number of real solutions?",
        "Find {{b^2 - 4ac}} in terms of k.",
        "You need to show {{k^2 - 4k + 8}} is always positive. Try completing the square.",
        "{{(k - 2)^2 + 4}} — what is the smallest it can be?",
      ],
      strategy: "Make it a perfect square",
    },
  ],
};
