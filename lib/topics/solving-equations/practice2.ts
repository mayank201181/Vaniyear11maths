// ---------------------------------------------------------------------------
// Linear & Simultaneous Equations — Practice Papers 3 and 4.
// Paper 3: mixed practice across every section (mostly auto-marked, 3 written).
// Paper 4: exam style, modelled on Edexcel 4MA1 Higher questions — contexts,
//          multi-step, "show that", exact and 3 s.f. answers.
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "solving-equations-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "solving-equations-p3-q01",
        question: "Solve 7x − 4 = 3x + 18.\n\nGive your answer as a decimal or a fraction.",
        answer: { type: "number", value: 5.5, display: "x = 5.5" },
        traps: [
          {
            spec: { type: "number", value: 3.5 },
            feedback:
              "You got 4x = 14, so the −4 went across as −4 instead of +4. Undo −4 by **adding** 4 to both sides: 4x = 22.",
          },
          {
            spec: { type: "number", value: 2.2 },
            feedback:
              "You added 3x to both sides, giving 10x. To remove +3x from the right you must **subtract** 3x from both sides: 4x − 4 = 18.",
          },
        ],
        solution: [
          "Subtract 3x from both sides: 4x − 4 = 18.",
          "Add 4 to both sides: 4x = 22.",
          "Divide by 4: x = 5.5 (or {{11/2}}).",
          "Check: 7 × 5.5 − 4 = 34.5 and 3 × 5.5 + 18 = 34.5. ✓",
        ],
        commonError: "Changing the sign of a term when it doesn't move, or keeping it when it does. Do the same operation to both sides and write it down.",
        difficulty: "warmup",
        guideRef: "linear-equations",
        hints: ["Get all the x terms on one side first — take 3x away from both sides.", "You should reach 4x − 4 = 18. Now undo the −4."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "solving-equations-p3-q02",
        question: "Solve 5(2y − 3) = 4(y + 6).",
        answer: { type: "number", value: 6.5, display: "y = 6.5" },
        traps: [
          {
            spec: { type: "number", value: 1.5 },
            feedback:
              "It looks like only the first term in each bracket was multiplied: 10y − 3 = 4y + 6. The number outside multiplies **every** term inside: 5 × (−3) = −15 and 4 × 6 = 24.",
          },
        ],
        solution: [
          "Expand both brackets: 10y − 15 = 4y + 24.",
          "Subtract 4y: 6y − 15 = 24.",
          "Add 15: 6y = 39.",
          "Divide by 6: y = 6.5.",
          "Check: 5(13 − 3) = 50 and 4(6.5 + 6) = 50. ✓",
        ],
        solutions: [
          {
            label: "Expand first (standard)",
            steps: ["10y − 15 = 4y + 24", "6y = 39, so y = 6.5."],
          },
          {
            label: "Check by substituting",
            steps: ["Whatever method you use, put y = 6.5 back in: both sides equal 50, so the answer is right."],
          },
        ],
        commonError: "Multiplying only the first term inside the bracket.",
        difficulty: "warmup",
        guideRef: "linear-equations",
        hints: ["Multiply out both brackets first.", "5 × 2y = 10y and 5 × (−3) = −15. Do the same on the right."],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "solving-equations-p3-q03",
        question:
          "The perimeter P of a rectangle with length l and width w is given by P = 2(l + w).\n\nMake w the subject of the formula.",
        answer: { type: "expression", expr: "P/2-l", display: "{{w = P/2 - l}} (or {{w = (P - 2l)/2}})" },
        traps: [
          {
            spec: { type: "expression", expr: "(P-l)/2" },
            feedback:
              "You subtracted l before dealing with the 2 — but the 2 multiplies l as well. Divide both sides by 2 first ({{P/2 = l + w}}), then subtract l.",
          },
          {
            spec: { type: "expression", expr: "P/2+l" },
            feedback: "Sign slip: to remove +l from the right-hand side, subtract l from both sides, so {{w = P/2 - l}}.",
          },
        ],
        solution: [
          "Divide both sides by 2: {{P/2 = l + w}}.",
          "Subtract l from both sides: {{w = P/2 - l}}.",
          "Equivalent form: {{w = (P - 2l)/2}}.",
        ],
        solutions: [
          { label: "Divide first", steps: ["{{P/2 = l + w}}", "{{w = P/2 - l}}"] },
          { label: "Expand first", steps: ["P = 2l + 2w", "P − 2l = 2w", "{{w = (P - 2l)/2}}"] },
        ],
        commonError: "Forgetting that the 2 multiplies both l and w.",
        difficulty: "warmup",
        guideRef: "rearranging-once",
        hints: ["What is the last thing done to w? Undo the operations in reverse order.", "The bracket is multiplied by 2 — undo that first by dividing both sides by 2."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "solving-equations-p3-q04",
        question:
          "Solve the simultaneous equations\n\n    3x + 2y = 16\n    5x − 2y = 16\n\nGive your answer as x, y (x first).",
        answer: { type: "list", values: [4, 2], ordered: true, display: "x = 4, y = 2" },
        traps: [
          {
            spec: { type: "list", values: [4, -2], ordered: true },
            feedback: "x = 4 is right. Substitute carefully: 3(4) + 2y = 16 gives 2y = 4, so y = +2. Check it in the second equation too.",
          },
        ],
        solution: [
          "The y terms are +2y and −2y, so **add** the equations to eliminate y: 8x = 32.",
          "x = 4.",
          "Substitute into the first equation: 12 + 2y = 16, so 2y = 4 and y = 2.",
          "Check in the second: 5(4) − 2(2) = 20 − 4 = 16. ✓",
        ],
        commonError: "Subtracting the equations when the coefficients have opposite signs — that doubles the y terms instead of removing them.",
        difficulty: "warmup",
        guideRef: "simultaneous-linear",
        hints: ["Look at the y terms: +2y and −2y. What happens if you add the equations?", "Adding gives 8x = 32. Find x, then substitute back."],
        strategy: "Eliminate a variable",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "solving-equations-p3-q05",
        question: "Solve {{(2x + 1)/3 - (x - 2)/4 = 2}}.\n\nShow clear algebraic working. Give your answer as a decimal.",
        answer: { type: "number", value: 2.8, allowFraction: false, display: "x = 2.8" },
        traps: [
          {
            spec: { type: "number", value: 5.2 },
            feedback:
              "Sign slip on the second fraction: −3(x − 2) = −3x **+ 6**, not −3x − 6. The minus in front of a fraction applies to its whole numerator.",
          },
          {
            spec: { type: "number", value: 0.4 },
            feedback: "You cleared the fractions but left the right-hand side as 2. Every term gets multiplied by 12, so the right-hand side becomes 24.",
          },
        ],
        solution: [
          "The LCD of 3 and 4 is 12. Multiply **every** term by 12: 4(2x + 1) − 3(x − 2) = 24.",
          "Expand: 8x + 4 − 3x + 6 = 24.",
          "Collect: 5x + 10 = 24, so 5x = 14.",
          "x = 2.8.",
          "Check: {{(6.6)/3 - (0.8)/4 = 2.2 - 0.2 = 2}}. ✓",
        ],
        commonError: "Writing −3(x − 2) as −3x − 6, or forgetting to multiply the right-hand side by 12.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "What single number could you multiply everything by to get rid of both denominators?",
          "Multiply every term — including the 2 on the right — by 12.",
          "You should get 4(2x + 1) − 3(x − 2) = 24. Be careful with −3 × −2.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "solving-equations-p3-q06",
        question:
          "The four interior angles of a quadrilateral are\n\n(2x + 15)°, (3x − 10)°, (x + 40)° and (4x − 5)°.\n\nWork out the size of the **largest** angle. Give your answer in degrees.",
        answer: { type: "number", value: 123, display: "123°" },
        traps: [
          {
            spec: { type: "number", value: 32 },
            feedback: "x = 32 is the value of x, not an angle. Substitute it into each expression and pick the largest.",
          },
          {
            spec: { type: "number", value: 50 },
            feedback:
              "It looks like you used 180° as the angle sum — that's a triangle. The interior angles of a quadrilateral add up to 360°.",
          },
        ],
        solution: [
          "Angles in a quadrilateral add to 360°: (2x + 15) + (3x − 10) + (x + 40) + (4x − 5) = 360.",
          "Collect: 10x + 40 = 360, so 10x = 320 and x = 32.",
          "The angles are 79°, 86°, 72° and 123°.",
          "Check: 79 + 86 + 72 + 123 = 360. ✓ The largest angle is 123°.",
        ],
        commonError: "Stopping at x = 32 instead of answering the question that was asked.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "What do the interior angles of any quadrilateral add up to?",
          "Write the four expressions added together = 360 and collect like terms.",
          "Once you have x, work out all four angles — the question asks for the largest.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "solving-equations-p3-q07",
        question:
          "The volume V of a cone with base radius r and height h is {{V = 1/3 pi r^2 h}}.\n\nMake r the subject of the formula. (r is positive.)",
        answer: { type: "expression", expr: "sqrt((3V)/(pi*h))", display: "{{r = sqrt((3V)/(pi h))}}" },
        traps: [
          {
            spec: { type: "expression", expr: "(3V)/(pi*h)" },
            feedback: "That's {{r^2}}, not r. The last step is to undo the square: take the square root of the whole right-hand side.",
          },
          {
            spec: { type: "expression", expr: "sqrt(V/(3*pi*h))" },
            feedback: "To undo multiplying by {{1/3}} you multiply by 3, so the 3 goes on **top**: {{r^2 = (3V)/(pi h)}}.",
          },
        ],
        solution: [
          "Multiply both sides by 3: {{3V = pi r^2 h}}.",
          "Divide both sides by πh: {{r^2 = (3V)/(pi h)}}.",
          "Square root (r > 0): {{r = sqrt((3V)/(pi h))}}.",
        ],
        commonError: "Dividing by 3 instead of multiplying, or forgetting the square root at the end.",
        difficulty: "core",
        guideRef: "rearranging-once",
        hints: [
          "List what happens to r: square it, multiply by π, h and {{1/3}}. Undo in reverse.",
          "First clear the fraction by multiplying both sides by 3.",
          "Get {{r^2}} on its own, then square root both sides.",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "solving-equations-p3-q08",
        question:
          "Siti solves the equation {{(x + 3)/2 - (x - 1)/5 = 2}}. Here is her working.\n\n    Line 1:  5(x + 3) − 2(x − 1) = 20\n    Line 2:  5x + 15 − 2x − 2 = 20\n    Line 3:  3x + 13 = 20\n    Line 4:  x = 7/3\n\nSiti has made one mistake. Identify the line with the mistake, explain what she did wrong, and solve the equation correctly.",
        marks: 3,
        modelAnswer:
          "The mistake is in Line 2. Siti expanded −2(x − 1) as −2x − 2, but −2 × −1 = +2, so it should be −2x + 2. Line 1 is correct (each term multiplied by 10). Correct working: 5x + 15 − 2x + 2 = 20, so 3x + 17 = 20, so 3x = 3 and x = 1. Check: {{4/2 - 0/5 = 2}}. ✓",
        markScheme: [
          { point: "Identifies Line 2 as the line with the mistake", keywords: ["line 2", "second line", "line two"] },
          { point: "Explains the sign error: −2 × −1 = +2, so −2(x − 1) = −2x + 2", keywords: ["+2", "+ 2", "-2x + 2", "−2x + 2", "negative times negative", "sign"] },
          { point: "Correct solution x = 1 (via 3x + 17 = 20)", keywords: ["x = 1", "x=1", "3x + 17", "3x = 3"] },
        ],
        commonError: "Blaming Line 1 — multiplying by 10 is correct; 10 ÷ 2 = 5 and 10 ÷ 5 = 2.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "Check each line separately. Is Line 1 what you get when you multiply every term by 10?",
          "Look closely at how −2(x − 1) was expanded.",
          "What is −2 × −1?",
        ],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "solving-equations-p3-q09",
        question: "Make x the subject of 3x + a = bx − 5.",
        answer: { type: "expression", expr: "(a+5)/(b-3)", display: "{{x = (a + 5)/(b - 3)}} (or {{(-a - 5)/(3 - b)}})" },
        traps: [
          {
            spec: { type: "expression", expr: "(a-5)/(b-3)" },
            feedback:
              "Sign slip with the constants. From 3x − bx = −5 − a, the top is −5 − a = −(a + 5), so {{x = (a + 5)/(b - 3)}}.",
          },
          {
            spec: { type: "expression", expr: "(-5-a)/3-b" },
            feedback:
              "Nearly — but the whole of (3 − b) is the divisor. Write it in brackets: {{x = (-5 - a)/(3 - b)}}.",
          },
        ],
        solution: [
          "x appears twice, so collect the x terms on one side: 3x − bx = −5 − a.",
          "Factorise: x(3 − b) = −5 − a.",
          "Divide: {{x = (-5 - a)/(3 - b)}}.",
          "Multiply top and bottom by −1 for a tidier form: {{x = (a + 5)/(b - 3)}}.",
        ],
        commonError: "Trying to divide by 3 before collecting both x terms — you can't isolate x while it is in two places.",
        difficulty: "core",
        guideRef: "rearranging-twice",
        hints: [
          "x appears twice. Get both x terms on the same side and everything else on the other.",
          "You should get 3x − bx = −5 − a. How can you write the left side with x only once?",
          "Factorise: x(3 − b). Now divide.",
        ],
        strategy: "Collect, factorise, divide",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "solving-equations-p3-q10",
        question: "Make y the subject of {{x = (2y + 3)/(y - 4)}}.",
        answer: { type: "expression", expr: "(4x+3)/(x-2)", display: "{{y = (4x + 3)/(x - 2)}}" },
        traps: [
          {
            spec: { type: "expression", expr: "7/(x-2)" },
            feedback:
              "When you multiplied by (y − 4), the 4 must be multiplied by x too: x(y − 4) = xy − **4x**, not xy − 4.",
          },
          {
            spec: { type: "expression", expr: "(4x-3)/(x-2)" },
            feedback: "Check the constant: from xy − 4x = 2y + 3 you get xy − 2y = 4x **+ 3**.",
          },
        ],
        solution: [
          "Multiply both sides by (y − 4): x(y − 4) = 2y + 3.",
          "Expand: xy − 4x = 2y + 3.",
          "Collect the y terms on the left: xy − 2y = 4x + 3.",
          "Factorise: y(x − 2) = 4x + 3.",
          "Divide: {{y = (4x + 3)/(x - 2)}}.",
        ],
        commonError: "Expanding x(y − 4) as xy − 4.",
        difficulty: "core",
        guideRef: "rearranging-twice",
        hints: [
          "Clear the fraction first. What do you multiply both sides by?",
          "After expanding you have y in two terms: xy and 2y. Get them on the same side.",
          "Factorise out y, then divide by the bracket.",
        ],
        strategy: "Collect, factorise, divide",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "solving-equations-p3-q11",
        question:
          "At a hawker centre, 3 vegetarian popiah and 2 cups of kopi cost $13.10.\n\n2 vegetarian popiah and 5 cups of kopi cost $13.50.\n\nWork out the cost of one popiah and the cost of one kopi. Give your answer as: popiah, kopi (in dollars).",
        answer: { type: "list", values: [3.5, 1.3], ordered: true, display: "popiah $3.50, kopi $1.30" },
        solution: [
          "Let p = cost of a popiah and k = cost of a kopi (in $).",
          "3p + 2k = 13.10 … (1)",
          "2p + 5k = 13.50 … (2)",
          "(1) × 2: 6p + 4k = 26.20. (2) × 3: 6p + 15k = 40.50.",
          "Subtract: 11k = 14.30, so k = 1.30.",
          "In (1): 3p + 2.60 = 13.10, so 3p = 10.50 and p = 3.50.",
          "Check in (2): 7.00 + 6.50 = 13.50. ✓",
        ],
        solutions: [
          {
            label: "Elimination (match the p terms)",
            steps: ["Multiply (1) by 2 and (2) by 3, subtract: 11k = 14.30, k = 1.30.", "Then p = 3.50."],
          },
          {
            label: "Substitution",
            steps: ["From (1): {{p = (13.10 - 2k)/3}}.", "Substitute into (2) and multiply by 3: 26.20 − 4k + 15k = 40.50, so 11k = 14.30 and k = 1.30."],
          },
        ],
        commonError: "Multiplying only one side of an equation when scaling it.",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "Choose letters for the two unknown prices and write two equations.",
          "Neither variable has matching coefficients. Scale both equations so the p terms match (6p).",
          "Subtract to get 11k = 14.30.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "solving-equations-p3-q12",
        question:
          "Solve the simultaneous equations\n\n    4x − 3y = 23\n    6x + 5y = −13\n\nShow clear algebraic working. Give your answer as x, y (x first).",
        answer: { type: "list", values: [2, -5], ordered: true, display: "x = 2, y = −5" },
        traps: [
          {
            spec: { type: "list", values: [2, 5], ordered: true },
            feedback: "x = 2 is right, but check y: 4(2) − 3y = 23 gives −3y = 15, so y = −5.",
          },
        ],
        solution: [
          "Make the x coefficients equal: (1) × 3 gives 12x − 9y = 69; (2) × 2 gives 12x + 10y = −26.",
          "Subtract: (12x + 10y) − (12x − 9y) = −26 − 69, so 19y = −95 and y = −5.",
          "Substitute into (1): 4x + 15 = 23, so 4x = 8 and x = 2.",
          "Check in (2): 12 − 25 = −13. ✓",
        ],
        solutions: [
          {
            label: "Eliminate x (×3 and ×2)",
            steps: ["12x − 9y = 69 and 12x + 10y = −26.", "Subtract: 19y = −95, y = −5; then x = 2."],
          },
          {
            label: "Eliminate y (×5 and ×3)",
            steps: ["20x − 15y = 115 and 18x + 15y = −39.", "Add: 38x = 76, x = 2; then y = −5. The signs are opposite, so adding is less error-prone here."],
          },
        ],
        commonError: "Sign errors when subtracting: −9y − (+10y) and 69 − (−26) are easy to slip on. Eliminating y by adding avoids subtracting negatives.",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "No coefficients match. Which variable can you make match by scaling **both** equations?",
          "For y: multiply the first by 5 and the second by 3 — the y terms become −15y and +15y.",
          "Add the new equations to get 38x = 76.",
        ],
        strategy: "Eliminate a variable",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "solving-equations-p3-q13",
        question:
          "Consider the simultaneous equations\n\n    kx + 2y = 5\n    3x + y = 1\n\nwhere k is a constant.\n\nShow that the equations have exactly one solution unless k = 6, and explain what happens when k = 6.",
        marks: 3,
        modelAnswer:
          "From the second equation, y = 1 − 3x. Substituting into the first: kx + 2(1 − 3x) = 5, so kx − 6x = 3, i.e. (k − 6)x = 3. If k ≠ 6 we can divide: {{x = 3/(k - 6)}}, and then y = 1 − 3x is also fixed, so there is exactly one solution. If k = 6 the equation becomes 0x = 3, i.e. 0 = 3, which is impossible, so there is **no** solution. Graphically, when k = 6 the lines 6x + 2y = 5 and 3x + y = 1 both have gradient −3 but different y-intercepts ({{5/2}} and 1): they are parallel and never meet.",
        markScheme: [
          { point: "Eliminates a variable to reach (k − 6)x = 3 (or equivalent)", keywords: ["(k - 6)x = 3", "(k-6)x=3", "kx - 6x = 3", "k - 6", "k-6"] },
          { point: "States that for k ≠ 6, x = 3/(k − 6) gives a unique x (and hence unique y)", keywords: ["3/(k-6)", "3/(k - 6)", "unique", "one solution", "divide"] },
          { point: "For k = 6: 0 = 3 is impossible / lines are parallel, so no solution", keywords: ["0 = 3", "0=3", "parallel", "no solution", "same gradient", "contradiction"] },
        ],
        solutions: [
          {
            label: "Algebra (substitution)",
            steps: ["y = 1 − 3x ⟹ kx + 2 − 6x = 5 ⟹ (k − 6)x = 3."],
          },
          {
            label: "Gradients",
            steps: [
              "Line 1: {{y = 5/2 - k/2 x}}, gradient {{-k/2}}. Line 2: y = 1 − 3x, gradient −3.",
              "Two straight lines meet exactly once unless they are parallel: {{-k/2 = -3}} ⟹ k = 6. The intercepts differ, so at k = 6 they never meet.",
            ],
          },
        ],
        commonError: "Saying 'when k = 6 there are infinitely many solutions'. That would need the lines to be identical; here the constants (5 and 2) don't match after scaling.",
        difficulty: "challenge",
        guideRef: "simultaneous-linear",
        hints: [
          "Solve as normal, keeping k as a letter. Which variable is easiest to substitute for?",
          "Substitute y = 1 − 3x into the first equation and collect the x terms.",
          "You reach (k − 6)x = 3. When can you divide by (k − 6), and when can't you?",
          "Think about the two equations as straight lines. What do lines with the same gradient do?",
        ],
        strategy: "Split into cases",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "written",
        id: "solving-equations-p3-q14",
        question:
          "For a thin lens, the object distance u, the image distance v and the focal length f are connected by\n\n{{1/u + 1/v = 1/f}}\n\n(a) Show that {{v = (uf)/(u - f)}}.\n\n(b) Hence find v when u = 12 cm and f = 8 cm.",
        marks: 4,
        modelAnswer:
          "(a) Multiply every term by uvf: vf + uf = uv. Collect the v terms on one side: uf = uv − vf. Factorise: uf = v(u − f). Divide by (u − f): {{v = (uf)/(u - f)}}, as required.\n\n(b) {{v = (12 * 8)/(12 - 8) = 96/4 = 24}} cm.",
        markScheme: [
          { point: "Clears the fractions correctly, e.g. vf + uf = uv", keywords: ["uvf", "vf + uf = uv", "fv + fu = uv", "multiply"] },
          { point: "Collects the v terms on one side: uf = uv − vf", keywords: ["uf = uv - vf", "uv - vf", "uv − vf", "collect"] },
          { point: "Factorises and divides: v(u − f) = uf, so v = uf/(u − f)", keywords: ["v(u - f)", "v(u-f)", "factorise", "factorize", "uf/(u - f)"] },
          { point: "(b) v = 24 cm", keywords: ["24", "96/4"] },
        ],
        solutions: [
          {
            label: "Clear all fractions at once",
            steps: ["× uvf: vf + uf = uv", "uf = v(u − f)", "{{v = (uf)/(u - f)}}"],
          },
          {
            label: "Isolate 1/v first",
            steps: ["{{1/v = 1/f - 1/u = (u - f)/(uf)}}", "Take reciprocals of both sides: {{v = (uf)/(u - f)}}."],
          },
        ],
        commonError: "Writing {{1/v = 1/f - 1/u}} and then 'flipping each term' to get v = f − u. The reciprocal of a difference is not the difference of reciprocals.",
        difficulty: "challenge",
        guideRef: "rearranging-twice",
        hints: [
          "Three fractions — what single expression could you multiply every term by to clear them all?",
          "After multiplying by uvf you get vf + uf = uv. v appears twice.",
          "Get both v terms on one side, factorise out v, then divide.",
        ],
        strategy: "Collect, factorise, divide",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "solving-equations-p3-q15",
        question:
          "Solve the simultaneous equations\n\n    x + y + z = 6\n    2x − y + z = 3\n    x + 2y − z = 2\n\nGive your answer as x, y, z (in that order).",
        answer: { type: "list", values: [1, 2, 3], ordered: true, display: "x = 1, y = 2, z = 3" },
        traps: [
          {
            spec: { type: "list", values: [3, 2, 1], ordered: true },
            feedback: "Right numbers, but check which is which: give x first, then y, then z. Substitute into all three equations to confirm.",
          },
        ],
        solution: [
          "Label the equations (1), (2), (3). Eliminate z twice.",
          "(1) + (3): 2x + 3y = 8 … (4)",
          "(2) + (3): 3x + y = 5 … (5)",
          "(5) × 3: 9x + 3y = 15. Subtract (4): 7x = 7, so x = 1.",
          "In (5): 3 + y = 5, so y = 2.",
          "In (1): 1 + 2 + z = 6, so z = 3.",
          "Check (2): 2 − 2 + 3 = 3 ✓; (3): 1 + 4 − 3 = 2 ✓.",
        ],
        solutions: [
          {
            label: "Eliminate z (it has ±1 coefficients)",
            steps: ["(1) + (3) and (2) + (3) remove z at once.", "Solve the 2 × 2 system 2x + 3y = 8, 3x + y = 5."],
          },
          {
            label: "Eliminate y first",
            steps: ["(1) + (2): 3x + 2z = 9.", "2 × (2) + (3): 5x + z = 8.", "Solve: z = 8 − 5x, so 3x + 16 − 10x = 9, x = 1, z = 3, then y = 2."],
          },
        ],
        commonError: "Eliminating a different variable in each pair, which leaves three unknowns instead of two.",
        difficulty: "challenge",
        guideRef: "simultaneous-three",
        hints: [
          "Pick one variable to eliminate from **two different pairs** of equations. Which has the easiest coefficients?",
          "z has coefficients +1, +1 and −1. Add (3) to (1), and add (3) to (2).",
          "You now have 2x + 3y = 8 and 3x + y = 5 — an ordinary pair of simultaneous equations.",
          "Back-substitute to find z, then check all three original equations.",
        ],
        strategy: "Make it simpler",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "solving-equations-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "solving-equations-p4-q01",
        question: "Solve 4(3 − 2x) = 2(x + 1) − 5.\n\nShow clear algebraic working.",
        answer: { type: "number", value: 1.5, display: "x = 1.5" },
        traps: [
          {
            spec: { type: "number", value: -2.5 },
            feedback: "Check the first bracket: 4 × (−2x) = −8x, so the left side is 12 − 8x, not 12 + 8x.",
          },
          {
            spec: { type: "number", value: 1.1 },
            feedback: "The −5 is outside the bracket, so it is not multiplied by 2. The right side is 2x + 2 − 5 = 2x − 3.",
          },
        ],
        solution: [
          "Expand: 12 − 8x = 2x + 2 − 5.",
          "Simplify the right: 12 − 8x = 2x − 3.",
          "Add 8x and add 3: 15 = 10x.",
          "x = 1.5.",
          "Check: 4(3 − 3) = 0 and 2(2.5) − 5 = 0. ✓",
        ],
        commonError: "Multiplying the −5 by 2 as well, or losing the minus sign in 4 × (−2x).",
        difficulty: "warmup",
        guideRef: "linear-equations",
        hints: ["Expand both brackets — only the bracket is multiplied by 2, not the −5.", "You should get 12 − 8x = 2x − 3. Move the x terms to the side where they stay positive."],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "solving-equations-p4-q02",
        question: "{{v^2 = u^2 + 2as}}\n\nMake a the subject of the formula.",
        answer: { type: "expression", expr: "(v^2-u^2)/(2s)", display: "{{a = (v^2 - u^2)/(2s)}}" },
        traps: [
          {
            spec: { type: "expression", expr: "v^2-u^2-2s" },
            feedback: "2s **multiplies** a, so undo it by dividing by 2s — not by subtracting it.",
          },
          {
            spec: { type: "expression", expr: "(v^2+u^2)/(2s)" },
            feedback: "To move {{u^2}} across you subtract it from both sides: {{2as = v^2 - u^2}}.",
          },
        ],
        solution: [
          "Subtract {{u^2}} from both sides: {{2as = v^2 - u^2}}.",
          "Divide both sides by 2s: {{a = (v^2 - u^2)/(2s)}}.",
        ],
        commonError: "Writing the answer as v² − u²/2s without a fraction bar or brackets — that only divides u² by 2s.",
        difficulty: "warmup",
        guideRef: "rearranging-once",
        hints: ["The term containing a is 2as. Get that term on its own first.", "Then divide by everything multiplying a."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "solving-equations-p4-q03",
        question:
          "Solve the simultaneous equations\n\n    5x + 2y = 11\n    4x − 3y = 18\n\nShow clear algebraic working. Give your answer as x, y (x first).",
        answer: { type: "list", values: [3, -2], ordered: true, display: "x = 3, y = −2" },
        traps: [
          {
            spec: { type: "list", values: [3, 2], ordered: true },
            feedback: "x = 3 is right. In 5x + 2y = 11: 15 + 2y = 11 gives 2y = −4, so y = −2.",
          },
        ],
        solution: [
          "Match the y terms: (1) × 3 gives 15x + 6y = 33; (2) × 2 gives 8x − 6y = 36.",
          "Add (the signs are opposite): 23x = 69, so x = 3.",
          "Substitute into (1): 15 + 2y = 11, so 2y = −4 and y = −2.",
          "Check in (2): 12 + 6 = 18. ✓",
        ],
        commonError: "Multiplying only the left-hand side of an equation by the scale factor.",
        difficulty: "warmup",
        guideRef: "simultaneous-linear",
        hints: ["Scale both equations so the y coefficients become 6 and −6.", "Add the scaled equations to eliminate y."],
        strategy: "Eliminate a variable",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "solving-equations-p4-q04",
        question:
          "The diagram shows a rectangle. All measurements are in centimetres.\n\nThe perimeter of the rectangle is 60 cm.\n\nWork out the area of the rectangle. Give your answer in cm².",
        diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangle with length 3x minus 2 centimetres and width x plus 4 centimetres"><rect x="0" y="0" width="400" height="250" fill="#ffffff"/><rect x="70" y="50" width="260" height="150" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><text x="200" y="38" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(3x − 2) cm</text><text x="340" y="130" font-size="14" font-family="sans-serif" fill="#1f2937">(x + 4) cm</text><text x="200" y="232" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        answer: { type: "number", value: 209, display: "209 cm²" },
        traps: [
          {
            spec: { type: "number", value: 7 },
            feedback: "x = 7 is the value of x. Now find the length and width, then multiply for the area.",
          },
          {
            spec: { type: "number", value: 767.75 },
            feedback:
              "It looks like you set length + width = 60. The perimeter goes all the way round: 2 × length + 2 × width = 60.",
          },
        ],
        solution: [
          "Perimeter: 2(3x − 2) + 2(x + 4) = 60.",
          "Expand: 6x − 4 + 2x + 8 = 60, so 8x + 4 = 60.",
          "8x = 56, so x = 7.",
          "Length = 3(7) − 2 = 19 cm; width = 7 + 4 = 11 cm. (Check: 2(19 + 11) = 60 ✓)",
          "Area = 19 × 11 = 209 cm².",
        ],
        commonError: "Using only one length and one width in the perimeter, or stopping at x = 7.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "Write an expression for the perimeter — remember there are two lengths and two widths.",
          "Set your perimeter expression equal to 60 and solve for x.",
          "With x = 7, work out the actual length and width, then the area.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "solving-equations-p4-q05",
        question:
          "Solve {{(3x - 2)/4 - (2x + 5)/3 = 1 - x}}.\n\nShow clear algebraic working. Give your answer as a fraction in its simplest form.",
        answer: { type: "fraction", n: 38, d: 13, simplest: true, display: "{{x = 38/13}}" },
        traps: [
          {
            spec: { type: "fraction", n: -2, d: 13 },
            feedback:
              "Sign slip: −4(2x + 5) = −8x **− 20**. The minus in front of the second fraction applies to its whole numerator.",
          },
          {
            spec: { type: "fraction", n: 28, d: 13 },
            feedback: "You multiplied the left-hand side by 12 but only part of the right. Both 1 and −x must be multiplied by 12: 12 − 12x.",
          },
        ],
        solution: [
          "Multiply every term by 12 (the LCD of 4 and 3): 3(3x − 2) − 4(2x + 5) = 12(1 − x).",
          "Expand: 9x − 6 − 8x − 20 = 12 − 12x.",
          "Simplify: x − 26 = 12 − 12x.",
          "Add 12x and 26: 13x = 38.",
          "{{x = 38/13}} (which is {{2 12/13}}).",
        ],
        commonError: "Writing −4(2x + 5) as −8x + 20, or multiplying only the 1 on the right by 12.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "What is the lowest common multiple of 4 and 3?",
          "Multiply **every** term on both sides by 12, keeping each numerator in brackets.",
          "Expand carefully: −4 × +5 = −20. You should reach 13x = 38.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "written",
        id: "solving-equations-p4-q06",
        question:
          "The diagram shows triangle ABC.\n\nAngle BAC = (4x − 10)°, angle ABC = (x + 30)° and angle ACB = (2x − 15)°.\n\nShow that triangle ABC is a right-angled triangle.",
        diagram: `<svg viewBox="0 0 440 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with angle A marked 4x minus 10 degrees, angle B marked x plus 30 degrees and angle C marked 2x minus 15 degrees"><rect x="0" y="0" width="440" height="290" fill="#ffffff"/><polygon points="158.4,80.8 40,250 400,250" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><text x="158" y="68" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="26" y="266" font-size="14" font-family="sans-serif" fill="#1f2937">B</text><text x="404" y="266" font-size="14" font-family="sans-serif" fill="#1f2937">C</text><text x="168" y="118" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">(4x − 10)°</text><text x="100" y="240" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">(x + 30)°</text><text x="320" y="240" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">(2x − 15)°</text><text x="220" y="282" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        marks: 3,
        modelAnswer:
          "Angles in a triangle add up to 180°, so (4x − 10) + (x + 30) + (2x − 15) = 180. Collecting terms: 7x + 5 = 180, so 7x = 175 and x = 25. Then angle BAC = 4(25) − 10 = 90°, angle ABC = 25 + 30 = 55° and angle ACB = 2(25) − 15 = 35° (check: 90 + 55 + 35 = 180). Since angle BAC = 90°, triangle ABC is right-angled (at A).",
        markScheme: [
          { point: "Forms the equation (4x − 10) + (x + 30) + (2x − 15) = 180, i.e. 7x + 5 = 180", keywords: ["180", "7x + 5", "7x+5", "angles in a triangle"] },
          { point: "Solves to get x = 25", keywords: ["x = 25", "x=25", "7x = 175", "175"] },
          { point: "Shows angle BAC = 90° and concludes the triangle is right-angled", keywords: ["90", "right angle", "right-angled", "angle a"] },
        ],
        commonError: "Stopping at x = 25. A 'show that' needs the final link: substitute to show one angle is exactly 90°, and say so.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "What do the angles in any triangle add up to?",
          "Add the three expressions, set equal to 180 and solve for x.",
          "Substitute x into each angle. What would make the triangle right-angled?",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "solving-equations-p4-q07",
        question:
          "{{s = ut + 1/2 a t^2}}\n\nMake a the subject of the formula, and hence work out the value of a when s = 50, u = 4 and t = 3.2.\n\nGive your value of a correct to 3 significant figures.",
        answer: { type: "number", value: 7.27, display: "a = 7.27" },
        traps: [
          {
            spec: { type: "number", value: 3.63 },
            feedback:
              "You've lost the factor of 2. To undo multiplying by {{1/2}}, multiply by 2: {{a = (2(s - ut))/t^2}}.",
          },
          {
            spec: { type: "number", value: 0.0566 },
            feedback: "The {{t^2}} goes on the bottom: a = 2(s − ut) ÷ {{t^2}}, not × {{t^2}} ÷ something else. Recheck your rearrangement.",
          },
        ],
        solution: [
          "Subtract ut: {{s - ut = 1/2 a t^2}}.",
          "Multiply by 2: {{2(s - ut) = a t^2}}.",
          "Divide by {{t^2}}: {{a = (2(s - ut))/t^2}}.",
          "Substitute: {{a = (2(50 - 4 * 3.2))/(3.2^2) = (2 * 37.2)/10.24 = 74.4/10.24 = 7.265625...}}",
          "a = 7.27 (3 s.f.).",
        ],
        commonError: "Forgetting to double after removing the {{1/2}}, or squaring 3.2 incorrectly (3.2² = 10.24, not 6.4).",
        difficulty: "core",
        guideRef: "rearranging-once",
        hints: [
          "a only appears in the term {{1/2 a t^2}}. Isolate that term first.",
          "Undo the {{1/2}} by multiplying both sides by 2, then divide by {{t^2}}.",
          "Substitute the values into {{a = (2(s - ut))/t^2}}. Work out the top and bottom separately.",
        ],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "solving-equations-p4-q08",
        question: "Make p the subject of 3(p − 2q) = 2(5 + qp).",
        answer: { type: "expression", expr: "(10+6q)/(3-2q)", display: "{{p = (10 + 6q)/(3 - 2q)}}" },
        traps: [
          {
            spec: { type: "expression", expr: "(10+6q)/(3+2q)" },
            feedback: "Sign slip when collecting p terms: subtracting 2qp from both sides gives 3p − 2qp, so the bracket is (3 − 2q).",
          },
          {
            spec: { type: "expression", expr: "(10+2q)/(3-2q)" },
            feedback: "Check your expansion: 3 × (−2q) = −6q, so moving it across gives +6q, not +2q.",
          },
        ],
        solution: [
          "Expand: 3p − 6q = 10 + 2qp.",
          "Collect p terms on the left, others on the right: 3p − 2qp = 10 + 6q.",
          "Factorise: p(3 − 2q) = 10 + 6q.",
          "Divide: {{p = (10 + 6q)/(3 - 2q)}}.",
        ],
        commonError: "Leaving p on both sides of the answer — the subject must appear only once, on its own.",
        difficulty: "core",
        guideRef: "rearranging-twice",
        hints: [
          "Expand both brackets first. How many terms contain p?",
          "Get 3p and 2qp on the same side, everything else on the other.",
          "Factorise p out, then divide by the bracket.",
        ],
        strategy: "Collect, factorise, divide",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "solving-equations-p4-q09",
        question:
          "At an attraction on Sentosa, 2 adult tickets and 3 child tickets cost $166 in total.\n\n3 adult tickets and 2 child tickets cost $184 in total.\n\nThe Tan family buys 2 adult tickets and 4 child tickets. Work out the total cost, in dollars.",
        answer: { type: "number", value: 192, display: "$192" },
        traps: [
          {
            spec: { type: "number", value: 228 },
            feedback: "You've swapped the prices. An adult ticket is $44 and a child ticket is $26 — check by substituting into 2a + 3c = 166.",
          },
          {
            spec: { type: "number", value: 70 },
            feedback: "$70 is the cost of one adult plus one child ticket. Keep going: find each price separately, then 2 adults + 4 children.",
          },
        ],
        solution: [
          "Let a = adult price, c = child price: 2a + 3c = 166 … (1), 3a + 2c = 184 … (2).",
          "(1) × 3: 6a + 9c = 498. (2) × 2: 6a + 4c = 368.",
          "Subtract: 5c = 130, so c = 26.",
          "In (1): 2a + 78 = 166, so a = 44.",
          "Total = 2 × 44 + 4 × 26 = 88 + 104 = $192.",
        ],
        solutions: [
          {
            label: "Standard elimination",
            steps: ["Match the a coefficients (× 3 and × 2), subtract: c = 26, then a = 44.", "2(44) + 4(26) = 192."],
          },
          {
            label: "Add and subtract (symmetry)",
            steps: [
              "Add (1) and (2): 5a + 5c = 350, so a + c = 70.",
              "Subtract (1) from (2): a − c = 18.",
              "So a = 44, c = 26. This is quicker because the coefficients are 'swapped' between the equations.",
            ],
          },
        ],
        commonError: "Finding a and c correctly, then giving one of them as the answer instead of the cost of the Tan family's tickets.",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "Use a and c for the two prices and write two equations.",
          "Notice the coefficients are swapped (2, 3 and 3, 2). Try adding the equations — what do you learn?",
          "Once you know a and c, answer the actual question: 2a + 4c.",
        ],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "written",
        id: "solving-equations-p4-q10",
        question:
          "The straight lines with equations 3x + 4y = 7 and y = 2x − 1 intersect at the point P.\n\nShow that P lies on the line 5x − 2y = 3.",
        marks: 3,
        modelAnswer:
          "At P both equations hold. Substitute y = 2x − 1 into 3x + 4y = 7: 3x + 4(2x − 1) = 7, so 3x + 8x − 4 = 7, 11x = 11 and x = 1. Then y = 2(1) − 1 = 1, so P is (1, 1). Check 5x − 2y at P: 5(1) − 2(1) = 3, which equals the right-hand side, so P lies on the line 5x − 2y = 3.",
        markScheme: [
          { point: "Substitutes to eliminate a variable: 3x + 4(2x − 1) = 7", keywords: ["3x + 4(2x - 1)", "3x+4(2x-1)", "11x", "substitute"] },
          { point: "Finds P = (1, 1)", keywords: ["(1, 1)", "(1,1)", "x = 1", "y = 1"] },
          { point: "Substitutes P into 5x − 2y to get 3 and concludes P lies on the line", keywords: ["5(1) - 2(1)", "5 - 2 = 3", "= 3", "lies on"] },
        ],
        commonError: "Solving correctly but not finishing: a 'show that' must substitute into 5x − 2y and state the conclusion.",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "The point where two lines meet satisfies both equations — solve them simultaneously.",
          "One equation already gives y in terms of x. Substitute it into the other.",
          "With P's coordinates, test whether 5x − 2y really equals 3.",
        ],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "solving-equations-p4-q11",
        question:
          "Ravi cycles for 2 hours at a constant speed of x km/h. He then walks for 1.5 hours at a constant speed of (x − 12) km/h.\n\nHe travels 45 km altogether.\n\nWork out the value of x.",
        answer: { type: "number", value: 18, display: "x = 18" },
        traps: [
          {
            spec: { type: "number", value: 6 },
            feedback: "6 km/h is Ravi's walking speed (x − 12). The question asks for x, his cycling speed.",
          },
        ],
        solution: [
          "Distance = speed × time.",
          "Cycling: 2x km. Walking: 1.5(x − 12) km.",
          "2x + 1.5(x − 12) = 45.",
          "Expand: 2x + 1.5x − 18 = 45, so 3.5x = 63.",
          "x = 18. (Check: 36 km + 1.5 × 6 = 9 km, total 45 km ✓)",
        ],
        commonError: "Writing 1.5x − 12 instead of 1.5(x − 12) — the 1.5 hours multiplies the whole speed.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "Distance = speed × time. Write the distance for each part of the journey.",
          "The walking distance is 1.5 × (x − 12) — keep the bracket.",
          "Add the two distances and set equal to 45.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "solving-equations-p4-q12",
        question:
          "Solve the simultaneous equations\n\n    y = 3x − 7\n    5x − 2y = 9\n\nShow clear algebraic working. Give your answer as x, y (x first).",
        answer: { type: "list", values: [5, 8], ordered: true, display: "x = 5, y = 8" },
        traps: [
          {
            spec: { type: "list", values: [-23, -76], ordered: true },
            feedback: "Sign slip in −2(3x − 7): −2 × −7 = **+14**, so 5x − 6x + 14 = 9.",
          },
        ],
        solution: [
          "Substitute y = 3x − 7 into the second equation: 5x − 2(3x − 7) = 9.",
          "Expand: 5x − 6x + 14 = 9, so −x = −5 and x = 5.",
          "y = 3(5) − 7 = 8.",
          "Check: 5(5) − 2(8) = 25 − 16 = 9. ✓",
        ],
        commonError: "Forgetting the bracket: 5x − 2 × 3x − 7 instead of 5x − 2(3x − 7).",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "One equation tells you exactly what y equals. Use it.",
          "Replace y in 5x − 2y = 9 with (3x − 7) — in brackets.",
          "Expand carefully: −2 × −7 = +14.",
        ],
        strategy: "Substitute",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "solving-equations-p4-q13",
        question: "Make x the subject of {{y = sqrt((x + 1)/(x - 2))}}.",
        answer: { type: "expression", expr: "(2y^2+1)/(y^2-1)", display: "{{x = (2y^2 + 1)/(y^2 - 1)}}" },
        traps: [
          {
            spec: { type: "expression", expr: "(2y+1)/(y-1)" },
            feedback: "You need to remove the square root first: square both sides to get {{y^2 = (x + 1)/(x - 2)}}. Then every y becomes {{y^2}}.",
          },
          {
            spec: { type: "expression", expr: "(2y^2-1)/(y^2-1)" },
            feedback: "Check the constant: from {{x y^2 - 2y^2 = x + 1}} you get {{x y^2 - x = 2y^2 + 1}}.",
          },
        ],
        solution: [
          "Square both sides: {{y^2 = (x + 1)/(x - 2)}}.",
          "Multiply by (x − 2): {{y^2 (x - 2) = x + 1}}, so {{x y^2 - 2y^2 = x + 1}}.",
          "Collect the x terms: {{x y^2 - x = 2y^2 + 1}}.",
          "Factorise: {{x(y^2 - 1) = 2y^2 + 1}}.",
          "Divide: {{x = (2y^2 + 1)/(y^2 - 1)}}.",
        ],
        commonError: "Square-rooting or squaring term by term, e.g. writing {{y^2 = (x^2 + 1)/(x^2 - 4)}}.",
        difficulty: "challenge",
        guideRef: "rearranging-twice",
        hints: [
          "What is the outermost operation on x? Undo that first.",
          "Square both sides, then clear the fraction by multiplying by (x − 2).",
          "Now x appears twice. Collect the x terms, factorise and divide.",
        ],
        strategy: "Collect, factorise, divide",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "solving-equations-p4-q14",
        question:
          "At a kopitiam, Kenji, Mei and Zara each buy breakfast. A kaya toast costs $t, a kopi costs $k and a potato curry puff costs $p.\n\n| | Kaya toast | Kopi | Curry puff | Total |\n|---|---|---|---|---|\n| Kenji | 1 | 2 | 1 | $6.10 |\n| Mei | 2 | 1 | 2 | $8.60 |\n| Zara | 1 | 1 | 3 | $8.70 |\n\nWork out the price of each item. Give your answer as t, k, p (in that order, in dollars).",
        answer: { type: "list", values: [1.8, 1.2, 1.9], ordered: true, display: "toast $1.80, kopi $1.20, curry puff $1.90" },
        traps: [
          {
            spec: { type: "list", values: [1.2, 1.8, 1.9], ordered: true },
            feedback: "Right prices, wrong order — the question asks for t (toast) first, then k (kopi), then p (curry puff).",
          },
        ],
        solution: [
          "Equations: t + 2k + p = 6.10 … (1); 2t + k + 2p = 8.60 … (2); t + k + 3p = 8.70 … (3).",
          "(2) − 2 × (1): (2t − 2t) + (k − 4k) + (2p − 2p) = 8.60 − 12.20, so −3k = −3.60 and k = 1.20.",
          "(3) − (1): −k + 2p = 2.60, so 2p = 3.80 and p = 1.90.",
          "In (1): t + 2.40 + 1.90 = 6.10, so t = 1.80.",
          "Check (2): 3.60 + 1.20 + 3.80 = 8.60 ✓; (3): 1.80 + 1.20 + 5.70 = 8.70 ✓.",
        ],
        solutions: [
          {
            label: "Spot a double elimination",
            steps: ["(2) − 2 × (1) removes t **and** p at once, giving k = 1.20 immediately.", "Then (3) − (1) gives p, and (1) gives t."],
          },
          {
            label: "Systematic: eliminate t twice",
            steps: [
              "(2) − 2(1): −3k = −3.60. (3) − (1): −k + 2p = 2.60.",
              "Solve this pair: k = 1.20, p = 1.90, then t = 1.80.",
            ],
          },
        ],
        commonError: "Losing track of which equation was combined with which — label them and write each step.",
        difficulty: "challenge",
        guideRef: "simultaneous-three",
        hints: [
          "Write one equation per person using t, k and p.",
          "Compare Mei's order with double Kenji's order. What's the difference?",
          "(2) − 2 × (1) leaves only k. Then use (3) − (1) to find p.",
          "Back-substitute into Kenji's equation for t, and check all three.",
        ],
        strategy: "Look for an invariant",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "solving-equations-p4-q15",
        question:
          "Hana tries to solve the simultaneous equations\n\n    x + y + z = 4\n    x − y + 2z = 3\n    2x + 3z = 5\n\nExplain why these equations have no solution.",
        marks: 3,
        modelAnswer:
          "Adding the first two equations eliminates y: (x + y + z) + (x − y + 2z) = 4 + 3, so 2x + 3z = 7. But the third equation says 2x + 3z = 5. The same expression 2x + 3z cannot equal both 7 and 5 (that would mean 7 = 5), so the equations are inconsistent: there are no values of x, y and z that satisfy all three, and the system has no solution.",
        markScheme: [
          { point: "Combines the first two equations to eliminate y: 2x + 3z = 7", keywords: ["2x + 3z = 7", "2x+3z=7", "add", "eliminate y"] },
          { point: "Compares with the third equation 2x + 3z = 5", keywords: ["2x + 3z = 5", "third equation", "= 5"] },
          { point: "Concludes contradiction (7 ≠ 5 / 7 = 5 impossible), so no solution / inconsistent", keywords: ["contradiction", "7 = 5", "7 ≠ 5", "impossible", "inconsistent", "no solution"] },
        ],
        commonError: "Saying 'there are infinitely many solutions'. That happens when one equation is a combination of the others with the **same** constant; here the constants disagree.",
        difficulty: "challenge",
        guideRef: "simultaneous-three",
        hints: [
          "The third equation has no y. Can you make 'no y' from the first two?",
          "Add the first two equations. What do you get?",
          "Compare 2x + 3z from your sum with the third equation. Can both be true?",
        ],
        strategy: "Look for an invariant",
      },
    ],
  },
];
