// ---------------------------------------------------------------------------
// Straight-Line Graphs & Coordinate Geometry — Practice Papers 3 and 4.
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
    id: "linear-graphs-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "linear-graphs-p3-q01",
        question: "Work out the gradient of the straight line that passes through the points (−2, 7) and (4, −5).",
        answer: { type: "number", value: -2, display: "−2" },
        traps: [
          {
            spec: { type: "number", value: 2 },
            feedback:
              "Sign slip. You probably took the y-values in one order and the x-values in the other. Keep the same point first in both: {{(-5 - 7)/(4 - (-2)) = (-12)/6}}.",
          },
          {
            spec: { type: "number", value: -0.5 },
            feedback: "That's run ÷ rise. Gradient is the change in y divided by the change in x: {{(-12)/6}}.",
          },
        ],
        solution: [
          "Change in y: −5 − 7 = −12.",
          "Change in x: 4 − (−2) = 6.",
          "Gradient = {{(-12)/6 = -2}}.",
          "Sense check: as x increases, y goes down, so the gradient must be negative. ✓",
        ],
        commonError: "Subtracting the coordinates in different orders on the top and bottom, which flips the sign.",
        difficulty: "warmup",
        guideRef: "y-mx-c",
        hints: ["Gradient = {{(change in y)/(change in x)}}.", "Do (second − first) on both the top and the bottom."],
        strategy: "Estimate first",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "linear-graphs-p3-q02",
        question:
          "The line L has equation 5x + 2y = 20.\n\nWrite down the gradient of L and the y-coordinate of the point where L crosses the y-axis. Give the gradient first.",
        answer: { type: "list", values: [-2.5, 10], ordered: true, display: "gradient −2.5, y-intercept 10" },
        traps: [
          {
            spec: { type: "list", values: [5, 20], ordered: true },
            feedback: "You read the numbers straight off 5x + 2y = 20. First make y the subject: 2y = −5x + 20, so y = −2.5x + 10.",
          },
          {
            spec: { type: "list", values: [-5, 20], ordered: true },
            feedback: "You rearranged to 2y = −5x + 20 but stopped there. Divide **every** term by 2 to get y on its own.",
          },
        ],
        solution: [
          "Subtract 5x: 2y = −5x + 20.",
          "Divide every term by 2: y = −2.5x + 10.",
          "Compare with y = mx + c: gradient m = −2.5 (that is {{-5/2}}), y-intercept c = 10.",
        ],
        solutions: [
          {
            label: "Cover-up check",
            steps: [
              "Put x = 0: 2y = 20, so y = 10 — the y-intercept.",
              "Put y = 0: 5x = 20, so x = 4 — the x-intercept.",
              "Gradient from (0, 10) to (4, 0): {{(0 - 10)/(4 - 0) = -2.5}}.",
            ],
          },
        ],
        commonError: "Reading the gradient as the coefficient of x before y is the subject.",
        difficulty: "warmup",
        guideRef: "y-mx-c",
        hints: ["Rearrange into the form y = mx + c.", "After 2y = −5x + 20, divide every term by 2."],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "linear-graphs-p3-q03",
        question: "A is the point (−3, 8) and B is the point (7, −2).\n\nFind the coordinates of the midpoint of AB. Give your answer as (x, y).",
        answer: { type: "list", values: [2, 3], ordered: true, display: "(2, 3)" },
        traps: [
          {
            spec: { type: "list", values: [5, -5], ordered: true },
            feedback:
              "You halved the *differences* of the coordinates. The midpoint is the *average* of the endpoints: add, then halve. {{(-3 + 7)/2 = 2}}.",
          },
        ],
        solution: ["x: {{(-3 + 7)/2 = 4/2 = 2}}.", "y: {{(8 + (-2))/2 = 6/2 = 3}}.", "Midpoint = (2, 3)."],
        commonError: "Subtracting the coordinates instead of adding them.",
        difficulty: "warmup",
        guideRef: "midpoint-distance",
        hints: ["The midpoint's coordinates are the averages of the endpoints' coordinates."],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "linear-graphs-p3-q04",
        question: "A straight line has gradient 4 and passes through the point (3, −1).\n\nFind the equation of the line. Give your answer in the form y = mx + c.",
        answer: { type: "equation", eq: "y=4x-13", display: "y = 4x − 13" },
        traps: [
          {
            spec: { type: "equation", eq: "y=4x-11" },
            feedback:
              "Sign slip with y₁. The point has y₁ = −1, so y − y₁ = y − (−1) = y + 1. Then y + 1 = 4(x − 3) gives y = 4x − 13.",
          },
          {
            spec: { type: "equation", eq: "y=4x+11" },
            feedback: "Check by substituting x = 3: 4(3) + 11 = 23, not −1. In y − y₁ = m(x − x₁), use x − 3, not x + 3.",
          },
        ],
        solution: [
          "Use y − y₁ = m(x − x₁) with m = 4, (x₁, y₁) = (3, −1).",
          "y − (−1) = 4(x − 3), so y + 1 = 4x − 12.",
          "y = 4x − 13.",
          "Check: at x = 3, y = 12 − 13 = −1. ✓",
        ],
        solutions: [
          {
            label: "Substitute into y = mx + c",
            steps: ["y = 4x + c passes through (3, −1).", "−1 = 4(3) + c, so c = −13.", "y = 4x − 13."],
          },
        ],
        commonError: "Writing y − 1 instead of y + 1 when y₁ is negative.",
        difficulty: "warmup",
        guideRef: "point-gradient-form",
        hints: ["Use y − y₁ = m(x − x₁), or put the point into y = 4x + c.", "y₁ = −1, so y − y₁ becomes y + 1."],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "linear-graphs-p3-q05",
        question:
          "P is the point (−1, 4) and Q is the point (5, 1).\n\nFind the exact length of PQ. Give your answer in the form {{a sqrt(5)}}, where a is an integer.",
        answer: { type: "expression", expr: "3sqrt(5)", form: "surd", display: "{{3 sqrt(5)}}" },
        traps: [
          {
            spec: { type: "number", value: 9 },
            feedback: "You added the horizontal and vertical distances (6 + 3). PQ is the hypotenuse of a right-angled triangle — use Pythagoras: {{sqrt(6^2 + 3^2)}}.",
          },
        ],
        solution: [
          "Horizontal change: 5 − (−1) = 6. Vertical change: 1 − 4 = −3.",
          "{{PQ^2 = 6^2 + (-3)^2 = 36 + 9 = 45}}.",
          "{{PQ = sqrt(45) = sqrt(9 * 5) = 3 sqrt(5)}}.",
        ],
        commonError: "Leaving the answer as √45 — the question asks for the simplified surd.",
        difficulty: "core",
        guideRef: "midpoint-distance",
        hints: [
          "Sketch P and Q and draw the right-angled triangle underneath PQ.",
          "The legs are 6 and 3. Use Pythagoras.",
          "Simplify √45 by finding a square factor.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "linear-graphs-p3-q06",
        question:
          "The point M(1, −2) is the midpoint of the line segment AB. A is the point (−5, 3).\n\nFind the coordinates of B. Give your answer as (x, y).",
        answer: { type: "list", values: [7, -7], ordered: true, display: "(7, −7)" },
        traps: [
          {
            spec: { type: "list", values: [-2, 0.5], ordered: true },
            feedback: "That's the midpoint of A and M. M is the *middle*, so B is as far beyond M as A is before it.",
          },
          {
            spec: { type: "list", values: [6, -5], ordered: true },
            feedback: "(6, −5) is the step from A to M. Add that step on again, starting from M: (1 + 6, −2 − 5).",
          },
        ],
        solution: [
          "Step from A to M: x goes from −5 to 1 (+6); y goes from 3 to −2 (−5).",
          "Repeat the same step from M: B = (1 + 6, −2 − 5) = (7, −7).",
          "Check: midpoint of (−5, 3) and (7, −7) is {{((-5 + 7)/2, (3 - 7)/2) = (1, -2)}}. ✓",
        ],
        solutions: [
          {
            label: "Equations",
            steps: ["{{(-5 + x)/2 = 1}} gives x = 7.", "{{(3 + y)/2 = -2}} gives y = −7."],
          },
          { label: "Shortcut", steps: ["B = 2M − A = (2 − (−5), −4 − 3) = (7, −7)."] },
        ],
        commonError: "Averaging A and M instead of extending past M.",
        difficulty: "core",
        guideRef: "midpoint-distance",
        hints: [
          "Draw it: A, then M in the middle, then B. How do you get from A to M?",
          "From A to M, x increases by 6 and y decreases by 5.",
          "Do the same step again starting from M.",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "linear-graphs-p3-q07",
        question:
          "The line L has equation 2x − 3y = 6.\n\nFind the equation of the line that is perpendicular to L and passes through the point (4, 1). Give your answer in the form y = mx + c.",
        answer: { type: "equation", eq: "y=-1.5x+7", display: "{{y = -3/2 x + 7}}" },
        traps: [
          {
            spec: { type: "equation", eq: "y=2x/3-5/3" },
            feedback: "That line has gradient {{2/3}} — it is *parallel* to L. A perpendicular gradient is the negative reciprocal: {{-3/2}}.",
          },
          {
            spec: { type: "equation", eq: "y=-2x/3+11/3" },
            feedback: "You changed the sign but didn't flip the fraction. The negative reciprocal of {{2/3}} is {{-3/2}}.",
          },
        ],
        solution: [
          "Rearrange L: 3y = 2x − 6, so {{y = 2/3 x - 2}}. Gradient of L = {{2/3}}.",
          "Perpendicular gradient = {{-3/2}} (since {{2/3 * (-3/2) = -1}}).",
          "{{y - 1 = -3/2 (x - 4)}}.",
          "{{y = -3/2 x + 6 + 1 = -3/2 x + 7}}.",
          "Check: at x = 4, y = −6 + 7 = 1. ✓",
        ],
        commonError: "Taking the gradient of L as 2 (the coefficient of x) instead of rearranging first.",
        difficulty: "core",
        guideRef: "parallel-perpendicular",
        hints: [
          "First find the gradient of L — get y on its own.",
          "L has gradient {{2/3}}. What multiplies by {{2/3}} to give −1?",
          "Use y − 1 = m(x − 4) with m = {{-3/2}}.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "linear-graphs-p3-q08",
        question:
          "The points A(0, 1), B(6, 4), C(5, 7) and D(1, 5) are the vertices of the quadrilateral ABCD.\n\nShow that ABCD is a trapezium but not a parallelogram.",
        marks: 3,
        modelAnswer:
          "Gradient of AB = {{(4 - 1)/(6 - 0) = 3/6 = 1/2}}. Gradient of DC = {{(7 - 5)/(5 - 1) = 2/4 = 1/2}}. AB and DC have equal gradients, so AB is parallel to DC. Gradient of AD = {{(5 - 1)/(1 - 0) = 4}}. Gradient of BC = {{(7 - 4)/(5 - 6) = 3/(-1) = -3}}. These are different, so AD is not parallel to BC. ABCD has exactly one pair of parallel sides, so it is a trapezium and not a parallelogram.",
        markScheme: [
          { point: "Gradients of AB and DC both 1/2, so AB ∥ DC", keywords: ["1/2", "0.5", "parallel"] },
          { point: "Gradients of AD and BC: 4 and −3 (not equal)", keywords: ["4", "-3", "−3", "not equal", "different"] },
          { point: "Conclusion: exactly one pair of parallel sides, so trapezium not parallelogram", keywords: ["one pair", "trapezium", "not a parallelogram", "only one"] },
        ],
        commonError: "Checking only one pair of sides — a parallelogram also has one pair of parallel sides, so you must show the other pair is NOT parallel.",
        difficulty: "core",
        guideRef: "parallel-perpendicular",
        hints: [
          "What's the definition of a trapezium? Of a parallelogram?",
          "Parallel sides have equal gradients. Find the gradient of each of the four sides.",
          "You need one pair equal and the other pair different.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "linear-graphs-p3-q09",
        question:
          "The lines y = 3x − 7 and 2x + 5y = 16 intersect at the point P.\n\nFind the coordinates of P. Give your answer as (x, y).",
        answer: { type: "list", values: [3, 2], ordered: true, display: "(3, 2)" },
        traps: [
          {
            spec: { type: "list", values: [2, 3], ordered: true },
            feedback: "Right numbers, wrong order — the x-coordinate comes first: x = 3, y = 2.",
          },
        ],
        solution: [
          "Substitute y = 3x − 7 into 2x + 5y = 16: 2x + 5(3x − 7) = 16.",
          "2x + 15x − 35 = 16, so 17x = 51 and x = 3.",
          "y = 3(3) − 7 = 2.",
          "Check in the other line: 2(3) + 5(2) = 16. ✓  P = (3, 2).",
        ],
        commonError: "Expanding 5(3x − 7) as 15x − 7.",
        difficulty: "core",
        guideRef: "intersections",
        hints: [
          "At P, both equations are true at the same time.",
          "One equation already gives y in terms of x — substitute it into the other.",
          "You should reach 17x − 35 = 16.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "mcq",
        id: "linear-graphs-p3-q10",
        question: "Which of these lines is parallel to the line 4x − 2y = 7?",
        options: ["y = 4x + 1", "y = −2x + 3", "y = 2x − 5", "{{y = -1/2 x + 7}}"],
        answerIndex: 2,
        explanation:
          "Rearrange: 2y = 4x − 7, so {{y = 2x - 7/2}}. The gradient is 2, and parallel lines have equal gradients, so y = 2x − 5 is parallel. y = 4x + 1 comes from reading the coefficient of x before making y the subject; y = −2x + 3 is a sign slip when dividing by −2; {{y = -1/2 x + 7}} is *perpendicular* (negative reciprocal), not parallel.",
        difficulty: "core",
        guideRef: "y-mx-c",
        hints: ["Get 4x − 2y = 7 into the form y = mx + c.", "−2y = −4x + 7. Divide every term by −2."],
        strategy: "Eliminate options",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "linear-graphs-p3-q11",
        question:
          "A straight line passes through the points (−2, 3) and (4, −1).\n\nFind an equation of the line in the form ax + by + c = 0, where a, b and c are integers.",
        answer: { type: "equation", eq: "2x+3y-5=0", form: "general", display: "2x + 3y − 5 = 0" },
        traps: [
          {
            spec: { type: "equation", eq: "2x+3y+5=0" },
            feedback: "Check by substituting (−2, 3): 2(−2) + 3(3) + 5 = 10, not 0. Look again at the sign of c.",
          },
          {
            spec: { type: "equation", eq: "3x+2y=0" },
            feedback: "Check (4, −1): 3(4) + 2(−1) = 10 ≠ 0. It looks like the gradient was inverted — gradient = change in y ÷ change in x, {{-4/6 = -2/3}}.",
          },
        ],
        solution: [
          "Gradient = {{(-1 - 3)/(4 - (-2)) = (-4)/6 = -2/3}}.",
          "{{y - 3 = -2/3 (x + 2)}}.",
          "Multiply by 3: 3y − 9 = −2x − 4.",
          "Collect on one side: 2x + 3y − 5 = 0.",
          "Check (4, −1): 8 − 3 − 5 = 0. ✓",
        ],
        commonError: "Losing a sign when moving terms to one side, or not clearing the fraction before collecting.",
        difficulty: "core",
        guideRef: "point-gradient-form",
        hints: [
          "Find the gradient first.",
          "Use y − y₁ = m(x − x₁) with m = {{-2/3}}.",
          "Multiply through by 3 to clear the fraction, then move everything to one side so the x-term is positive.",
        ],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "linear-graphs-p3-q12",
        question:
          "A is the point (−3, 2) and B is the point (5, 6).\n\nShow that the perpendicular bisector of AB has equation 2x + y = 6.",
        marks: 4,
        modelAnswer:
          "Midpoint of AB = {{((-3 + 5)/2, (2 + 6)/2) = (1, 4)}}. Gradient of AB = {{(6 - 2)/(5 - (-3)) = 4/8 = 1/2}}. The perpendicular gradient is −2, since {{1/2 * (-2) = -1}}. The perpendicular bisector passes through (1, 4) with gradient −2: y − 4 = −2(x − 1), so y = −2x + 6, which rearranges to 2x + y = 6.",
        markScheme: [
          { point: "Midpoint (1, 4)", keywords: ["(1, 4)", "(1,4)", "1, 4", "midpoint"] },
          { point: "Gradient of AB = 1/2", keywords: ["1/2", "0.5", "4/8"] },
          { point: "Perpendicular gradient −2", keywords: ["-2", "−2", "negative reciprocal"] },
          { point: "Line through (1, 4) rearranged to 2x + y = 6", keywords: ["2x + y = 6", "2x+y=6", "y = -2x + 6", "y = −2x + 6", "y - 4"] },
        ],
        commonError: "Using the gradient of AB ({{1/2}}) instead of the perpendicular gradient, or passing the line through A instead of the midpoint.",
        difficulty: "core",
        guideRef: "parallel-perpendicular",
        hints: [
          "A perpendicular bisector cuts AB in half at right angles. Which point must it pass through?",
          "Find the midpoint of AB and the gradient of AB.",
          "Use the negative reciprocal gradient through the midpoint, then rearrange.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "linear-graphs-p3-q13",
        question:
          "The lines y = 2x + 3, x + 2y = 16 and y = 1 enclose a triangle.\n\nWork out the area of the triangle.",
        answer: { type: "number", value: 45 },
        traps: [
          { spec: { type: "number", value: 90 }, feedback: "You found base × height. The area of a triangle is {{1/2}} × base × height." },
        ],
        solution: [
          "y = 2x + 3 meets y = 1 when 2x + 3 = 1, so x = −1: vertex (−1, 1).",
          "x + 2y = 16 meets y = 1 when x + 2 = 16, so x = 14: vertex (14, 1).",
          "y = 2x + 3 meets x + 2y = 16: x + 2(2x + 3) = 16, so 5x = 10, x = 2, y = 7: vertex (2, 7).",
          "Base along y = 1: from x = −1 to x = 14, length 15. Height: from y = 1 up to y = 7, which is 6.",
          "Area = {{1/2 * 15 * 6 = 45}}.",
        ],
        solutions: [
          {
            label: "Base on the horizontal line",
            steps: ["Base 15 on y = 1, perpendicular height 6.", "Area = {{1/2 * 15 * 6 = 45}}."],
          },
          {
            label: "Spot the right angle",
            steps: [
              "Gradients 2 and {{-1/2}} multiply to −1, so the triangle has a right angle at (2, 7).",
              "Legs: {{sqrt(3^2 + 6^2) = sqrt(45)}} and {{sqrt(12^2 + 6^2) = sqrt(180)}}.",
              "Area = {{1/2 * sqrt(45) * sqrt(180) = 1/2 * sqrt(8100) = 1/2 * 90 = 45}}.",
            ],
          },
        ],
        commonError: "Using the y-intercepts of the lines as vertices — the vertices are where the lines meet *each other*.",
        difficulty: "challenge",
        guideRef: "intersections",
        hints: [
          "Sketch the three lines. The vertices are where each pair meets.",
          "Two vertices lie on y = 1 — find them first. That gives you a horizontal base.",
          "The third vertex is where y = 2x + 3 meets x + 2y = 16. Its height above y = 1 is the triangle's height.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "linear-graphs-p3-q14",
        question:
          "A is the point (−6, 8). The point P(3, 2) lies on the line segment AB such that AP : PB = 3 : 1.\n\nFind the coordinates of B. Give your answer as (x, y).",
        answer: { type: "list", values: [6, 0], ordered: true, display: "(6, 0)" },
        traps: [
          {
            spec: { type: "list", values: [12, -4], ordered: true },
            feedback: "That would make P the *midpoint* of AB (ratio 1 : 1). Here AP is 3 parts and PB is only 1 part, so B is a third of the A-to-P step beyond P.",
          },
          {
            spec: { type: "list", values: [30, -16], ordered: true },
            feedback: "You treated AP as {{1/4}} of AB. With AP : PB = 3 : 1, AP is {{3/4}} of AB.",
          },
        ],
        solution: [
          "AP : PB = 3 : 1, so AP is {{3/4}} of AB and PB is {{1/3}} of AP.",
          "Step from A to P: (3 − (−6), 2 − 8) = (9, −6). That is 3 parts.",
          "One part = (3, −2).",
          "B = P + one part = (3 + 3, 2 − 2) = (6, 0).",
          "Check: A + {{3/4}}(B − A) = (−6, 8) + {{3/4}}(12, −8) = (−6 + 9, 8 − 6) = (3, 2). ✓",
        ],
        solutions: [
          {
            label: "Count the parts",
            steps: ["A → P is 3 parts = (9, −6), so 1 part = (3, −2).", "B = P + 1 part = (6, 0)."],
          },
          {
            label: "Section formula in reverse",
            steps: [
              "P = A + {{3/4}}(B − A), so B − A = {{4/3}}(P − A) = {{4/3}}(9, −6) = (12, −8).",
              "B = (−6 + 12, 8 − 8) = (6, 0).",
            ],
          },
        ],
        commonError: "Treating the ratio 3 : 1 as P being {{1/3}} or {{1/4}} of the way along.",
        difficulty: "challenge",
        guideRef: "dividing-a-line",
        hints: [
          "Draw AB as 4 equal parts. Where is P?",
          "A to P covers 3 of those parts. What vector is that?",
          "One part is a third of (9, −6). Add one part to P.",
        ],
        strategy: "Use a bar model",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "linear-graphs-p3-q15",
        question:
          "The points A(−2, 1), B(2, 4), C(5, 0) and D(1, −3) are the vertices of the quadrilateral ABCD.\n\nProve that ABCD is a square, and find its area.",
        marks: 4,
        modelAnswer:
          "AB: change (4, 3), length {{sqrt(16 + 9) = 5}}. BC: change (3, −4), length 5. CD: change (−4, −3), length 5. DA: change (−3, 4), length 5. So all four sides are equal (ABCD is a rhombus). Gradient of AB = {{3/4}} and gradient of BC = {{-4/3}}; their product is −1, so AB ⟂ BC and angle ABC = 90°. A rhombus with a right angle is a square. Area = 5² = 25 square units.",
        markScheme: [
          { point: "All four side lengths shown to be 5", keywords: ["5", "sqrt(25)", "√25", "all sides equal", "rhombus"] },
          { point: "Gradients of two adjacent sides, e.g. 3/4 and −4/3", keywords: ["3/4", "-4/3", "−4/3", "0.75"] },
          { point: "Product −1, so adjacent sides perpendicular (right angle)", keywords: ["-1", "−1", "perpendicular", "right angle", "90"] },
          { point: "Conclusion: square, area 25", keywords: ["square", "25"] },
        ],
        solutions: [
          {
            label: "Sides and one angle",
            steps: ["Four sides of length 5 ⟹ rhombus.", "m(AB) × m(BC) = −1 ⟹ right angle ⟹ square."],
          },
          {
            label: "Diagonals",
            steps: [
              "Diagonal AC: midpoint (1.5, 0.5), length {{sqrt(49 + 1) = sqrt(50)}}, gradient {{-1/7}}.",
              "Diagonal BD: midpoint (1.5, 0.5), length {{sqrt(1 + 49) = sqrt(50)}}, gradient 7.",
              "Diagonals bisect each other, are equal and are perpendicular ({{-1/7 * 7 = -1}}) ⟹ square.",
              "Area = {{1/2 * d^2 = 1/2 * 50 = 25}}.",
            ],
          },
        ],
        commonError: "Showing only that the sides are equal — a rhombus has equal sides but need not be a square.",
        difficulty: "challenge",
        guideRef: "midpoint-distance",
        hints: [
          "What two facts together prove a quadrilateral is a square?",
          "Equal sides alone give a rhombus. You also need one right angle.",
          "Find all four lengths, then the gradients of AB and BC.",
        ],
        strategy: "Split into cases",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "linear-graphs-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "linear-graphs-p4-q01",
        question: "The graph shows the straight line L.\n\nFind an equation of L. Give your answer in the form y = mx + c.",
        diagram: `<svg viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid from x = -1 to 7 and y = -1 to 5 with a straight line L passing through (0, 3), (2, 2), (4, 1) and (6, 0)"><rect x="0" y="0" width="360" height="280" fill="#ffffff"/><path d="M20 20V260M60 20V260M100 20V260M140 20V260M180 20V260M220 20V260M260 20V260M300 20V260M340 20V260M20 20H340M20 60H340M20 100H340M20 140H340M20 180H340M20 220H340M20 260H340" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="220" x2="345" y2="220" stroke="#334155" stroke-width="1.5"/><line x1="60" y1="265" x2="60" y2="15" stroke="#334155" stroke-width="1.5"/><text x="350" y="224" font-size="13" font-family="sans-serif" fill="#1f2937">x</text><text x="56" y="12" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="20" y="234">−1</text><text x="100" y="234">1</text><text x="140" y="234">2</text><text x="180" y="234">3</text><text x="220" y="234">4</text><text x="260" y="234">5</text><text x="300" y="234">6</text><text x="340" y="234">7</text></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="end"><text x="54" y="264">−1</text><text x="54" y="184">1</text><text x="54" y="144">2</text><text x="54" y="104">3</text><text x="54" y="64">4</text><text x="54" y="24">5</text><text x="54" y="234">O</text></g><line x1="20" y1="80" x2="340" y2="240" stroke="#1d4ed8" stroke-width="2.5"/><circle cx="60" cy="100" r="3.5" fill="#1d4ed8"/><circle cx="300" cy="220" r="3.5" fill="#1d4ed8"/><text x="318" y="252" font-size="13" font-family="sans-serif" fill="#1d4ed8">L</text></svg>`,
        answer: { type: "equation", eq: "y=-0.5x+3", display: "{{y = -1/2 x + 3}}" },
        traps: [
          {
            spec: { type: "equation", eq: "y=-2x+3" },
            feedback: "That's run ÷ rise. From (0, 3) to (6, 0), y drops 3 while x goes up 6, so the gradient is {{(-3)/6 = -1/2}}.",
          },
          {
            spec: { type: "equation", eq: "y=0.5x+3" },
            feedback: "The line goes *down* from left to right, so its gradient is negative.",
          },
          {
            spec: { type: "equation", eq: "y=-0.5x+6" },
            feedback: "c is where the line crosses the **y**-axis (at 3), not the x-axis (at 6).",
          },
        ],
        solution: [
          "L crosses the y-axis at (0, 3), so c = 3.",
          "L also passes through (6, 0). Gradient = {{(0 - 3)/(6 - 0) = -3/6 = -1/2}}.",
          "{{y = -1/2 x + 3}}.",
        ],
        commonError: "Using the x-intercept as c, or getting the gradient upside down.",
        difficulty: "warmup",
        guideRef: "y-mx-c",
        hints: ["Read off where L crosses the y-axis — that's c.", "Pick two points exactly on grid crossings, e.g. (0, 3) and (6, 0), and find rise ÷ run."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "linear-graphs-p4-q02",
        question:
          "The line with equation 3x + 4y = 24 crosses the x-axis at the point A and the y-axis at the point B. O is the origin.\n\nWork out the area of triangle OAB.",
        answer: { type: "number", value: 24 },
        traps: [
          { spec: { type: "number", value: 48 }, feedback: "Base × height gives a rectangle. Halve it for the triangle." },
          { spec: { type: "number", value: 10 }, feedback: "10 is the length AB, not the area. Area of the right-angled triangle OAB = {{1/2}} × OA × OB." },
        ],
        solution: [
          "On the x-axis y = 0: 3x = 24, so A = (8, 0).",
          "On the y-axis x = 0: 4y = 24, so B = (0, 6).",
          "Triangle OAB is right-angled at O with legs 8 and 6.",
          "Area = {{1/2 * 8 * 6 = 24}}.",
        ],
        commonError: "Mixing up which variable is set to zero for each axis.",
        difficulty: "warmup",
        guideRef: "y-mx-c",
        hints: ["On the x-axis, y = 0. On the y-axis, x = 0.", "OAB has a right angle at O."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "linear-graphs-p4-q03",
        question:
          "A is the point (−3, 2) and B is the point (4, −3).\n\nCalculate the length of AB. Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 8.6, tolerance: 0.005, display: "8.60" },
        traps: [
          { spec: { type: "number", value: 12 }, feedback: "You added the horizontal and vertical changes (7 + 5). Use Pythagoras: {{sqrt(7^2 + 5^2)}}." },
          {
            spec: { type: "number", value: 1.41, tolerance: 0.01 },
            feedback: "It looks like you added the coordinates, (−3 + 4, 2 + (−3)). For a length you need the *differences*: 7 and −5.",
          },
        ],
        solution: [
          "Horizontal change: 4 − (−3) = 7. Vertical change: −3 − 2 = −5.",
          "{{AB^2 = 7^2 + (-5)^2 = 49 + 25 = 74}}.",
          "{{AB = sqrt(74) = 8.602...}} = 8.60 (3 s.f.).",
        ],
        commonError: "Squaring −5 as −25, or rounding to 8.6 and losing the significant zero (8.60 is 3 s.f.).",
        difficulty: "warmup",
        guideRef: "midpoint-distance",
        hints: ["Draw the right-angled triangle with AB as the hypotenuse.", "The legs are 7 and 5."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "linear-graphs-p4-q04",
        question:
          "A Singapore taxi charges a fixed flag-down fare plus a fixed amount for each kilometre travelled. The total cost $C for a journey of d km is given by a formula of the form C = md + c.\n\nA 4 km journey costs $9.10. A 10 km journey costs $16.30.\n\nFind the charge per kilometre and the flag-down fare, in dollars. Give the charge per kilometre first.",
        answer: { type: "list", values: [1.2, 4.3], ordered: true, display: "$1.20 per km, flag-down $4.30" },
        traps: [
          {
            spec: { type: "list", values: [4.3, 1.2], ordered: true },
            feedback: "Right values, wrong order — the charge per kilometre ($1.20) comes first.",
          },
        ],
        solution: [
          "The per-km charge is the gradient: {{(16.30 - 9.10)/(10 - 4) = 7.20/6 = 1.20}}, so $1.20 per km.",
          "Substitute (4, 9.10): 9.10 = 1.20 × 4 + c = 4.80 + c, so c = 4.30.",
          "Flag-down fare = $4.30. Check: 4.30 + 1.20 × 10 = 16.30. ✓",
        ],
        commonError: "Dividing one total cost by its distance, which ignores the fixed fare.",
        difficulty: "warmup",
        guideRef: "y-mx-c",
        hints: ["The cost per km is the gradient of the line through (4, 9.10) and (10, 16.30).", "Then substitute one point into C = md + c to find c."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "linear-graphs-p4-q05",
        question:
          "The line L passes through the points (−1, −4) and (5, 4).\n\nFind an equation for L in the form ax + by + c = 0, where a, b and c are integers.",
        answer: { type: "equation", eq: "4x-3y-8=0", form: "general", display: "4x − 3y − 8 = 0" },
        traps: [
          {
            spec: { type: "equation", eq: "3x-4y+1=0" },
            feedback: "Check (−1, −4): your line misses it. The gradient is {{8/6 = 4/3}} (change in y over change in x), not {{3/4}}.",
          },
          {
            spec: { type: "equation", eq: "4x+3y-32=0" },
            feedback: "Check (−1, −4): your line misses it. The line has a positive gradient, so the x and y terms must have opposite signs in ax + by + c = 0.",
          },
        ],
        solution: [
          "Gradient = {{(4 - (-4))/(5 - (-1)) = 8/6 = 4/3}}.",
          "{{y - 4 = 4/3 (x - 5)}}.",
          "Multiply by 3: 3y − 12 = 4x − 20.",
          "Rearrange: 4x − 3y − 8 = 0.",
          "Check (−1, −4): −4 + 12 − 8 = 0. ✓",
        ],
        commonError: "Rearranging with a sign error when moving the y-term across.",
        difficulty: "core",
        guideRef: "point-gradient-form",
        hints: [
          "Start with the gradient.",
          "Use y − y₁ = m(x − x₁) with either point.",
          "Clear the fraction by multiplying by 3, then collect x and y on one side.",
        ],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "linear-graphs-p4-q06",
        question:
          "A is the point (2, 3) and B is the point (8, −5).\n\nFind an equation of the perpendicular bisector of AB. Give your answer in the form y = mx + c.",
        answer: { type: "equation", eq: "y=3x/4-19/4", display: "{{y = 3/4 x - 19/4}}" },
        traps: [
          {
            spec: { type: "equation", eq: "y=-4x/3+17/3" },
            feedback: "That line has the same gradient as AB. The perpendicular bisector needs the negative reciprocal of {{-4/3}}, which is {{3/4}}.",
          },
          {
            spec: { type: "equation", eq: "y=3x/4+3/2" },
            feedback: "Right gradient, but your line goes through A. A *bisector* passes through the midpoint of AB, (5, −1).",
          },
        ],
        solution: [
          "Midpoint of AB = {{((2 + 8)/2, (3 + (-5))/2) = (5, -1)}}.",
          "Gradient of AB = {{(-5 - 3)/(8 - 2) = -8/6 = -4/3}}.",
          "Perpendicular gradient = {{3/4}}.",
          "{{y - (-1) = 3/4 (x - 5)}}, so {{y = 3/4 x - 15/4 - 1 = 3/4 x - 19/4}}.",
          "(Equivalently 3x − 4y = 19.)",
        ],
        commonError: "Using point A or B instead of the midpoint.",
        difficulty: "core",
        guideRef: "parallel-perpendicular",
        hints: [
          "The perpendicular bisector goes through the midpoint of AB at right angles to AB.",
          "Midpoint (5, −1); gradient of AB is {{-4/3}}.",
          "Use gradient {{3/4}} through (5, −1).",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "linear-graphs-p4-q07",
        question:
          "The line L has equation y = 4 − 2x. The point P(3, −2) lies on L.\n\nFind an equation of the normal to L at P. Give your answer in the form y = mx + c.",
        answer: { type: "equation", eq: "y=0.5x-3.5", display: "{{y = 1/2 x - 7/2}}" },
        traps: [
          {
            spec: { type: "equation", eq: "y=2x-8" },
            feedback: "A normal is perpendicular to L. The gradient of L is −2, so the normal's gradient is the negative reciprocal, {{1/2}}, not 2.",
          },
          {
            spec: { type: "equation", eq: "y=-0.5x-0.5" },
            feedback: "You flipped −2 to {{-1/2}} but kept the negative sign. Negative reciprocal: flip *and* change sign, giving {{+1/2}}.",
          },
        ],
        solution: [
          "y = 4 − 2x has gradient −2 (the coefficient of x — careful with the order of the terms).",
          "The normal is perpendicular, so its gradient is {{1/2}} (since −2 × {{1/2}} = −1).",
          "{{y - (-2) = 1/2 (x - 3)}}, so {{y = 1/2 x - 3/2 - 2 = 1/2 x - 7/2}}.",
          "Check: at x = 3, y = 1.5 − 3.5 = −2. ✓",
        ],
        commonError: "Reading the gradient of y = 4 − 2x as 4.",
        difficulty: "core",
        guideRef: "parallel-perpendicular",
        hints: [
          "The normal at a point on a line is perpendicular to the line at that point.",
          "What is the gradient of y = 4 − 2x? (It's the number multiplying x.)",
          "Use the negative reciprocal gradient through P(3, −2).",
        ],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "linear-graphs-p4-q08",
        question:
          "The points A(−1, 1), B(5, 3), C(6, 7) and D(0, 5) are the vertices of the quadrilateral ABCD.\n\nBy finding the midpoints of the diagonals AC and BD, show that ABCD is a parallelogram.",
        marks: 3,
        modelAnswer:
          "Midpoint of AC = {{((-1 + 6)/2, (1 + 7)/2) = (2.5, 4)}}. Midpoint of BD = {{((5 + 0)/2, (3 + 5)/2) = (2.5, 4)}}. The diagonals have the same midpoint, so they bisect each other. A quadrilateral whose diagonals bisect each other is a parallelogram.",
        markScheme: [
          { point: "Midpoint of AC = (2.5, 4)", keywords: ["(2.5, 4)", "(2.5,4)", "2.5", "5/2"] },
          { point: "Midpoint of BD = (2.5, 4)", keywords: ["(2.5, 4)", "(2.5,4)", "2.5", "5/2"] },
          { point: "Same midpoint, so diagonals bisect each other, hence parallelogram", keywords: ["same midpoint", "bisect", "parallelogram", "same point"] },
        ],
        solutions: [
          {
            label: "Diagonals bisect each other",
            steps: ["Both diagonals have midpoint (2.5, 4) ⟹ they bisect each other ⟹ parallelogram."],
          },
          {
            label: "Opposite sides parallel",
            steps: [
              "Gradient AB = {{2/6 = 1/3}} and gradient DC = {{2/6 = 1/3}}, so AB ∥ DC.",
              "Gradient AD = {{4/1 = 4}} and gradient BC = {{4/1 = 4}}, so AD ∥ BC.",
              "Two pairs of parallel sides ⟹ parallelogram.",
            ],
          },
        ],
        commonError: "Finding only one midpoint, or not stating the property (diagonals bisect each other) that links equal midpoints to a parallelogram.",
        difficulty: "core",
        guideRef: "midpoint-distance",
        hints: [
          "Which pairs of vertices are opposite each other? Those give the diagonals.",
          "Find the midpoint of AC and the midpoint of BD.",
          "What does it mean for the diagonals if their midpoints coincide?",
        ],
        strategy: "Look for an invariant",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "linear-graphs-p4-q09",
        question:
          "Priya compares two mobile phone plans for overseas calls.\n\n| Plan | Monthly fee | Cost per minute |\n|---|---|---|\n| A | $18 | 5 cents |\n| B | $10 | 9 cents |\n\nThe graphs of monthly cost against minutes used are straight lines. Find the number of minutes for which both plans cost the same, and that cost in dollars. Give the number of minutes first.",
        answer: { type: "list", values: [200, 28], ordered: true, display: "200 minutes, $28" },
        traps: [
          {
            spec: { type: "list", values: [200, 18], ordered: true },
            feedback: "200 minutes is right. The cost at that point is 18 + 0.05 × 200 = $28, not just the monthly fee.",
          },
        ],
        solution: [
          "Cost in dollars for m minutes: Plan A: C = 18 + 0.05m; Plan B: C = 10 + 0.09m.",
          "Same cost where the lines intersect: 18 + 0.05m = 10 + 0.09m.",
          "8 = 0.04m, so m = 200.",
          "C = 18 + 0.05 × 200 = 18 + 10 = $28. Check Plan B: 10 + 18 = $28. ✓",
        ],
        commonError: "Using 5 and 9 (cents) with 18 and 10 (dollars) in the same equation.",
        difficulty: "core",
        guideRef: "intersections",
        hints: [
          "Write an equation for the cost of each plan in dollars.",
          "The plans cost the same where the two lines meet — set the costs equal.",
          "18 + 0.05m = 10 + 0.09m.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "linear-graphs-p4-q10",
        question:
          "A is the point (k, 2) and B is the point (3, −10). The length of AB is 13 units.\n\nFind the two possible values of k.",
        answer: { type: "list", values: [-2, 8], ordered: false, display: "k = −2 or k = 8" },
        traps: [
          {
            spec: { type: "list", values: [8], ordered: false },
            feedback: "One value is right. When you square-root (3 − k)² = 25, remember both +5 and −5 — A could be to the left or the right of B.",
          },
          {
            spec: { type: "list", values: [-2], ordered: false },
            feedback: "One value is right. When you square-root (3 − k)² = 25, remember both +5 and −5 — A could be to the left or the right of B.",
          },
        ],
        solution: [
          "Vertical change: 2 − (−10) = 12. Horizontal change: 3 − k.",
          "Pythagoras: {{(3 - k)^2 + 12^2 = 13^2}}, so {{(3 - k)^2 = 169 - 144 = 25}}.",
          "3 − k = 5 or 3 − k = −5.",
          "k = −2 or k = 8.",
          "Check: from (8, 2) to (3, −10) the changes are 5 and 12, giving 13. ✓",
        ],
        commonError: "Taking only the positive square root, which loses one of the two points.",
        difficulty: "core",
        guideRef: "midpoint-distance",
        hints: [
          "Write AB² using Pythagoras with k in it.",
          "The vertical change is 12, so (3 − k)² + 144 = 169.",
          "(3 − k)² = 25 has two solutions. Why does that make sense on a diagram?",
        ],
        strategy: "Split into cases",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "linear-graphs-p4-q11",
        question: "The lines kx + 3y = 7 and 2x − 4y = 1 are perpendicular.\n\nFind the value of k.",
        answer: { type: "number", value: 6, display: "k = 6" },
        traps: [
          {
            spec: { type: "number", value: -6 },
            feedback: "Check the gradient of kx + 3y = 7: it is {{-k/3}}, not {{k/3}}. Then {{(-k/3) * 1/2 = -1}} gives k = 6.",
          },
          {
            spec: { type: "number", value: -1.5 },
            feedback: "That value makes the lines *parallel* (equal gradients). Perpendicular gradients multiply to −1.",
          },
        ],
        solution: [
          "kx + 3y = 7 ⟹ {{y = -k/3 x + 7/3}}, gradient {{-k/3}}.",
          "2x − 4y = 1 ⟹ {{y = 1/2 x - 1/4}}, gradient {{1/2}}.",
          "Perpendicular: {{(-k/3) * 1/2 = -1}}, so {{-k/6 = -1}} and k = 6.",
        ],
        commonError: "Losing the minus sign when finding the gradient {{-k/3}}.",
        difficulty: "core",
        guideRef: "parallel-perpendicular",
        hints: [
          "Find each gradient in terms of k by making y the subject.",
          "Gradients are {{-k/3}} and {{1/2}}.",
          "Perpendicular means the product of the gradients is −1.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "linear-graphs-p4-q12",
        question:
          "The line L₁ has equation 2y = x + 6.\nThe line L₂ passes through the points (4, 1) and (2, 5).\n\n(a) Show that L₁ and L₂ are perpendicular.\n(b) Find the coordinates of the point where L₁ and L₂ intersect.",
        marks: 4,
        modelAnswer:
          "(a) L₁: {{y = 1/2 x + 3}}, gradient {{1/2}}. L₂: gradient {{(5 - 1)/(2 - 4) = 4/(-2) = -2}}. Since {{1/2 * (-2) = -1}}, the lines are perpendicular.\n\n(b) L₂: y − 1 = −2(x − 4), so y = −2x + 9. At the intersection: {{1/2 x + 3 = -2x + 9}}, so x + 6 = −4x + 18, 5x = 12, x = 2.4. Then y = −2(2.4) + 9 = 4.2. Intersection at (2.4, 4.2).",
        markScheme: [
          { point: "Gradient of L₁ = 1/2 and gradient of L₂ = −2", keywords: ["1/2", "0.5", "-2", "−2"] },
          { point: "Product of gradients = −1, so perpendicular", keywords: ["-1", "−1", "perpendicular"] },
          { point: "Equation of L₂: y = −2x + 9 (or 2x + y = 9)", keywords: ["-2x + 9", "−2x + 9", "2x + y = 9", "y = 9 - 2x"] },
          { point: "Intersection (2.4, 4.2)", keywords: ["2.4", "4.2", "12/5", "21/5"] },
        ],
        solutions: [
          {
            label: "Substitution",
            steps: ["Put y = −2x + 9 into 2y = x + 6: −4x + 18 = x + 6, so x = 2.4.", "y = 4.2."],
          },
          {
            label: "Elimination",
            steps: ["L₁: x − 2y = −6. L₂: 2x + y = 9 ⟹ 4x + 2y = 18.", "Add: 5x = 12, x = 2.4; then y = 9 − 4.8 = 4.2."],
          },
        ],
        commonError: "Reading the gradient of 2y = x + 6 as 1 instead of dividing by 2 first.",
        difficulty: "core",
        guideRef: "intersections",
        hints: [
          "For (a), find both gradients — rearrange L₁ into y = mx + c first.",
          "For (b), you need an equation for L₂: use gradient −2 through (4, 1).",
          "Solve the two equations simultaneously.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "linear-graphs-p4-q13",
        question:
          "A is the point (−3, −2) and B is the point (9, 7). The point P lies on AB such that AP : PB = 2 : 1.\n\nThe line N passes through P and is perpendicular to AB. Find an equation of N. Give your answer in the form y = mx + c.",
        answer: { type: "equation", eq: "y=-4x/3+32/3", display: "{{y = -4/3 x + 32/3}} (or 4x + 3y = 32)" },
        traps: [
          {
            spec: { type: "equation", eq: "y=-4x/3+7/3" },
            feedback: "Your line goes through (1, 1), which is the point with AP : PB = 1 : 2. P is {{2/3}} of the way from A to B: (5, 4).",
          },
          {
            spec: { type: "equation", eq: "y=-4x/3+6.5" },
            feedback: "Your line goes through the midpoint of AB, (3, 2.5). P divides AB in the ratio 2 : 1, so P is {{2/3}} of the way from A: (5, 4).",
          },
          {
            spec: { type: "equation", eq: "y=3x/4+1/4" },
            feedback: "That line has the same gradient as AB. N is *perpendicular* to AB, so its gradient is {{-4/3}}.",
          },
        ],
        solution: [
          "AB vector = (9 − (−3), 7 − (−2)) = (12, 9).",
          "P = A + {{2/3}}(12, 9) = (−3 + 8, −2 + 6) = (5, 4).",
          "Gradient of AB = {{9/12 = 3/4}}, so the gradient of N is {{-4/3}}.",
          "{{y - 4 = -4/3 (x - 5)}}, so {{y = -4/3 x + 20/3 + 4 = -4/3 x + 32/3}}.",
          "Check: at x = 5, y = {{-20/3 + 32/3 = 4}}. ✓",
        ],
        solutions: [
          {
            label: "Section formula",
            steps: ["P = A + {{2/(2 + 1)}}(B − A) = (5, 4)."],
          },
          {
            label: "Weighted average",
            steps: ["P = {{(1 * A + 2 * B)/3}} = {{((-3 + 18)/3, (-2 + 14)/3)}} = (5, 4) — note B gets the weight 2 because P is closer to B."],
          },
        ],
        commonError: "Putting P {{2/3}} of the way from B instead of from A, or using the gradient of AB for N.",
        difficulty: "challenge",
        guideRef: "dividing-a-line",
        hints: [
          "AP : PB = 2 : 1 means P is {{2/3}} of the way from A to B.",
          "Find the vector from A to B and take {{2/3}} of it.",
          "P = (5, 4). Now you need a line through P with the negative reciprocal of AB's gradient.",
        ],
        strategy: "Use a bar model",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "linear-graphs-p4-q14",
        question:
          "A is the point (0, 5) and B is the point (6, 1).\n\nThe point C lies on the line y = x + 1 and is the same distance from A as it is from B.\n\nFind the coordinates of C. Give your answer as (x, y).",
        answer: { type: "list", values: [5, 6], ordered: true, display: "(5, 6)" },
        traps: [
          {
            spec: { type: "list", values: [3, 3], ordered: true },
            feedback: "(3, 3) is the midpoint of AB — it is equidistant from A and B, but it does not lie on y = x + 1.",
          },
        ],
        solution: [
          "Points equidistant from A and B lie on the perpendicular bisector of AB.",
          "Midpoint of AB = (3, 3). Gradient of AB = {{(1 - 5)/(6 - 0) = -2/3}}, so the perpendicular gradient is {{3/2}}.",
          "Perpendicular bisector: {{y - 3 = 3/2 (x - 3)}}, i.e. {{y = 3/2 x - 3/2}}.",
          "Intersect with y = x + 1: {{3/2 x - 3/2 = x + 1}}, so {{1/2 x = 5/2}} and x = 5, y = 6.",
          "Check: CA² = 5² + 1² = 26 and CB² = 1² + 5² = 26. ✓",
        ],
        solutions: [
          {
            label: "Perpendicular bisector",
            steps: ["Perpendicular bisector of AB: {{y = 3/2 x - 3/2}}.", "Meet y = x + 1 at (5, 6)."],
          },
          {
            label: "Equal distances directly",
            steps: [
              "Let C = (x, x + 1). CA² = CB²: {{x^2 + (x - 4)^2 = (x - 6)^2 + x^2}}.",
              "{{x^2 - 8x + 16 = x^2 - 12x + 36}}, so 4x = 20 and x = 5.",
              "C = (5, 6).",
            ],
          },
        ],
        commonError: "Stopping at the midpoint of AB — the midpoint is only one of infinitely many points equidistant from A and B.",
        difficulty: "challenge",
        guideRef: "intersections",
        hints: [
          "Where are *all* the points that are the same distance from A and B?",
          "They lie on the perpendicular bisector of AB.",
          "Find its equation, then intersect it with y = x + 1.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "linear-graphs-p4-q15",
        question:
          "The line L has equation x + 2y = 4. The point P has coordinates (8, 8).\n\nThe point F lies on L such that PF is perpendicular to L.\n\nShow that the shortest distance from P to L is {{4 sqrt(5)}}.",
        marks: 4,
        modelAnswer:
          "L: {{y = -1/2 x + 2}}, gradient {{-1/2}}, so PF has gradient 2. Line PF: y − 8 = 2(x − 8), i.e. y = 2x − 8. F is where this meets L: x + 2(2x − 8) = 4, so 5x − 16 = 4, 5x = 20, x = 4 and y = 0. F = (4, 0). PF = {{sqrt((8 - 4)^2 + (8 - 0)^2) = sqrt(16 + 64) = sqrt(80) = sqrt(16 * 5) = 4 sqrt(5)}}. The perpendicular is the shortest distance from a point to a line, so the shortest distance is {{4 sqrt(5)}}.",
        markScheme: [
          { point: "Gradient of L = −1/2, so gradient of PF = 2; PF: y = 2x − 8", keywords: ["-1/2", "−1/2", "2x - 8", "2x − 8", "gradient 2"] },
          { point: "Solves simultaneously to find F = (4, 0)", keywords: ["(4, 0)", "(4,0)", "x = 4", "y = 0"] },
          { point: "PF² = 4² + 8² = 80", keywords: ["16 + 64", "80", "sqrt(80)", "√80"] },
          { point: "√80 simplified to 4√5", keywords: ["4√5", "4sqrt(5)", "4 sqrt(5)", "16 × 5", "16*5"] },
        ],
        solutions: [
          {
            label: "Foot of the perpendicular",
            steps: ["Normal through P: y = 2x − 8.", "F = (4, 0).", "PF = {{sqrt(80) = 4 sqrt(5)}}."],
          },
          {
            label: "Area of a triangle (check)",
            steps: [
              "L meets the axes at A(4, 0) and C(0, 2): AC = {{sqrt(16 + 4) = sqrt(20) = 2 sqrt(5)}}.",
              "Triangle APC: AP = (4, 8) and AC = (−4, 2), so area = {{1/2 * (4 * 2 - 8 * (-4)) = 1/2 * 40 = 20}}.",
              "Height from P to L = {{(2 * 20)/(2 sqrt(5)) = 20/sqrt(5) = 4 sqrt(5)}}. ✓",
            ],
          },
        ],
        commonError: "Measuring the distance from P to a convenient point on L (such as an intercept) instead of the foot of the perpendicular — or using gradient −2 for PF instead of 2.",
        difficulty: "challenge",
        guideRef: "parallel-perpendicular",
        hints: [
          "The shortest route from a point to a line meets the line at right angles.",
          "Rearrange L to find its gradient, then find the equation of the line through P perpendicular to L.",
          "Intersect it with L to find F, then use Pythagoras for PF.",
          "Simplify √80 by taking out the square factor 16.",
        ],
        strategy: "Draw a diagram",
      },
    ],
  },
];
