// ---------------------------------------------------------------------------
// Inequalities — Practice Papers 3 and 4.
// Paper 3: mixed practice — fluency, spot-the-error, boundary reasoning, proof.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher inequality questions.
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "inequalities-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "inequalities-p3-q01",
        question: "Solve {{5x - 7 > 18}}.\n\nType your answer as an inequality, e.g. x > 1.",
        answer: { type: "inequality", ineq: "x>5", display: "x > 5" },
        traps: [
          { spec: { type: "inequality", ineq: "x>11/5" }, feedback: "Add 7 to both sides (don't subtract it): 5x > 25, so x > 5." },
        ],
        solution: ["Add 7 to both sides: 5x > 25.", "Divide both sides by 5 (positive, so the sign stays): x > 5."],
        commonError: "Writing x = 5 — the answer to an inequality is a range of values, not a single number.",
        difficulty: "warmup",
        guideRef: "linear-inequalities",
        hints: ["Treat it like an equation: undo the − 7 first.", "Then divide by 5. Does the sign need to change?"],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "inequalities-p3-q02",
        question: "n is an integer and {{-3 <= 3n - 6 < 10}}.\n\nList all the possible values of n, separated by commas.",
        answer: { type: "list", values: [1, 2, 3, 4, 5], display: "1, 2, 3, 4, 5" },
        traps: [
          { spec: { type: "list", values: [1, 2, 3, 4] }, feedback: "16 ÷ 3 = 5.33…, and 5 < 5.33…, so n = 5 is allowed too." },
          { spec: { type: "list", values: [2, 3, 4, 5] }, feedback: "The left sign is ≤, so n = 1 is included: 3(1) − 6 = −3 and −3 ≤ −3 is true." },
        ],
        solution: [
          "Add 6 to all three parts: {{3 <= 3n < 16}}.",
          "Divide all three parts by 3: {{1 <= n < 16/3}}, i.e. 1 ≤ n < 5.33…",
          "Integers: n = 1, 2, 3, 4, 5.",
        ],
        commonError: "Leaving out the end value n = 1 even though the sign is ≤.",
        difficulty: "warmup",
        guideRef: "linear-inequalities",
        hints: ["Do the same thing to all three parts at once.", "Add 6 everywhere, then divide everywhere by 3.", "Check each end: is it ≤ (included) or < (not included)?"],
        strategy: "Check the end points",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "mcq",
        id: "inequalities-p3-q03",
        question: "Which inequality is shown on the number line?",
        diagram: `<svg viewBox="0 0 480 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line from -4 to 5 with a filled circle at -3, an open circle at 2 and a bar joining them"><rect x="0" y="0" width="480" height="90" fill="#ffffff"/><line x1="20" y1="60" x2="460" y2="60" stroke="#334155" stroke-width="2"/><g stroke="#334155" stroke-width="2"><line x1="40" y1="54" x2="40" y2="66"/><line x1="84" y1="54" x2="84" y2="66"/><line x1="128" y1="54" x2="128" y2="66"/><line x1="172" y1="54" x2="172" y2="66"/><line x1="216" y1="54" x2="216" y2="66"/><line x1="260" y1="54" x2="260" y2="66"/><line x1="304" y1="54" x2="304" y2="66"/><line x1="348" y1="54" x2="348" y2="66"/><line x1="392" y1="54" x2="392" y2="66"/><line x1="436" y1="54" x2="436" y2="66"/></g><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="40" y="82">−4</text><text x="84" y="82">−3</text><text x="128" y="82">−2</text><text x="172" y="82">−1</text><text x="216" y="82">0</text><text x="260" y="82">1</text><text x="304" y="82">2</text><text x="348" y="82">3</text><text x="392" y="82">4</text><text x="436" y="82">5</text></g><line x1="90" y1="32" x2="298" y2="32" stroke="#1f2937" stroke-width="3"/><circle cx="84" cy="32" r="6" fill="#1f2937" stroke="#1f2937" stroke-width="2"/><circle cx="304" cy="32" r="6" fill="#ffffff" stroke="#1f2937" stroke-width="2"/></svg>`,
        options: ["{{-3 < x <= 2}}", "{{-3 < x < 2}}", "{{-3 <= x < 2}}", "{{-3 <= x <= 2}}"],
        answerIndex: 2,
        explanation:
          "An open circle means the value is **not** included (<); a filled circle means it **is** included (≤). The circle at −3 is filled and the one at 2 is open, so {{-3 <= x < 2}}. {{-3 < x <= 2}} swaps the meaning of the two circles.",
        difficulty: "warmup",
        guideRef: "linear-inequalities",
        hints: ["Look at each circle separately.", "Open circle: not included. Filled circle: included."],
        strategy: "Read the diagram carefully",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "inequalities-p3-q04",
        question: "The point (2, y) lies in the region {{y < 3x - 1}}.\n\ny is an integer. Find the greatest possible value of y.",
        answer: { type: "number", value: 4 },
        traps: [
          { spec: { type: "number", value: 5 }, feedback: "At x = 2 the line gives y = 5, but the sign is strictly <, so y = 5 is on the (dashed) boundary and not in the region. The greatest integer is 4." },
        ],
        solution: ["Substitute x = 2: y < 3(2) − 1 = 5.", "y must be strictly less than 5, so the greatest integer is y = 4."],
        commonError: "Giving 5, which lies on the boundary line — excluded because the inequality is strict.",
        difficulty: "warmup",
        guideRef: "graphical-regions",
        hints: ["Put x = 2 into the right-hand side.", "Is the boundary value itself allowed when the sign is < ?"],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "inequalities-p3-q05",
        question: "Solve {{3(2x - 5) >= 7x - 11}}.\n\nType your answer as an inequality.",
        answer: { type: "inequality", ineq: "x<=-4", display: "x ≤ −4" },
        traps: [
          { spec: { type: "inequality", ineq: "x>=-4" }, feedback: "You divided by −1 without reversing the sign. From −x ≥ 4, multiplying by −1 flips the sign: x ≤ −4. (Or move the x terms to the right to avoid negatives: −4 ≥ x.)" },
          { spec: { type: "inequality", ineq: "x<=6" }, feedback: "Expand carefully: 3(2x − 5) = 6x − 15, not 6x − 5." },
        ],
        solution: [
          "Expand: 6x − 15 ≥ 7x − 11.",
          "Subtract 6x from both sides: −15 ≥ x − 11.",
          "Add 11: −4 ≥ x, i.e. x ≤ −4.",
          "Check x = −5: 3(−15) = −45 and 7(−5) − 11 = −46; −45 ≥ −46 ✓.",
        ],
        solutions: [
          { label: "Keep x positive", steps: ["Collect x on the side with the larger x-coefficient (the right): −15 + 11 ≥ 7x − 6x.", "−4 ≥ x. No division by a negative needed."] },
          { label: "Divide by a negative", steps: ["6x − 7x ≥ −11 + 15, so −x ≥ 4.", "Multiply by −1 and reverse the sign: x ≤ −4."] },
        ],
        commonError: "Collecting x on the left to get −x ≥ 4 and then writing x ≥ −4 without flipping the sign.",
        difficulty: "core",
        guideRef: "linear-inequalities",
        hints: ["Expand the bracket first.", "Which side has more x? Collecting x terms there avoids a negative coefficient.", "You should reach −4 ≥ x. Read it from the x side."],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "inequalities-p3-q06",
        question: "Solve {{(2x + 1)/3 - (x - 2)/4 < 2}}.\n\nType your answer as an inequality. Give the number as a decimal or a fraction.",
        answer: { type: "inequality", ineq: "x<14/5", display: "x < 2.8" },
        traps: [
          { spec: { type: "inequality", ineq: "x<26/5" }, feedback: "Careful with the minus in front of the second fraction: −3(x − 2) = −3x + 6, not −3x − 6." },
          { spec: { type: "inequality", ineq: "x<-8/5" }, feedback: "Multiply the 2 on the right by 12 too: the right-hand side becomes 24." },
        ],
        solution: [
          "Multiply every term by 12 (the LCM of 3 and 4): {{4(2x + 1) - 3(x - 2) < 24}}.",
          "Expand: 8x + 4 − 3x + 6 < 24.",
          "Simplify: 5x + 10 < 24, so 5x < 14.",
          "x < 2.8.",
          "Check the boundary x = 2.8: {{6.6/3 - 0.8/4 = 2.2 - 0.2 = 2}} ✓.",
        ],
        commonError: "Writing −3(x − 2) as −3x − 6: the minus sign multiplies both terms in the bracket.",
        difficulty: "core",
        guideRef: "linear-inequalities",
        hints: ["Clear the fractions: what number do 3 and 4 both divide into?", "Multiply *every* term, including the 2, by 12.", "Watch the sign when you expand −3(x − 2)."],
        strategy: "Clear the fractions",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "written",
        id: "inequalities-p3-q07",
        question:
          "Ravi solves the inequality {{5 - 4x <= 21}}. Here is his working:\n\n    {{-4x <= 16}}\n    {{x <= -4}}\n\nRavi has made a mistake. Explain the mistake, give the correct solution and use a value of x to show that his answer cannot be right.",
        marks: 3,
        modelAnswer:
          "Ravi divided both sides by −4 but did not reverse the inequality sign. Dividing (or multiplying) by a negative number reverses the order, so −4x ≤ 16 gives x ≥ −4. Check: x = 0 satisfies the original inequality (5 − 0 = 5 ≤ 21) but 0 is not ≤ −4, so Ravi's answer leaves out values that work. (And x = −5 is in his answer but gives 5 + 20 = 25, which is not ≤ 21.)",
        markScheme: [
          { point: "Identifies that dividing by a negative (−4) must reverse the sign", keywords: ["negative", "reverse", "flip", "-4", "−4", "sign"] },
          { point: "Correct solution x ≥ −4", keywords: ["x>=-4", "x >= -4", "x ≥ −4", "x ≥ -4", "-4<=x", "greater than or equal to"] },
          { point: "Uses a test value, e.g. x = 0 works in 5 − 4x ≤ 21 but is not ≤ −4", keywords: ["x=0", "x = 0", "5<=21", "5 ≤ 21", "x = -5", "test", "substitute"] },
        ],
        commonError: "Saying 'he should have subtracted' — the first step is fine; the error is in the division step.",
        difficulty: "core",
        guideRef: "linear-inequalities",
        hints: ["Which step involves dividing by a negative number?", "Try x = 0 in the original inequality. Is it true? Is 0 ≤ −4?", "What happens to the order of two numbers when you multiply both by −1?"],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "inequalities-p3-q08",
        question:
          "The shaded region R satisfies all three inequalities\n\n    {{y >= 1}},  {{y < x}},  {{x + y <= 6}}\n\nThe line y = x is dashed. How many points with integer coordinates lie in R?",
        diagram: `<svg viewBox="0 0 320 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid from 0 to 7 with lines y = 1 (solid), y = x (dashed) and x + y = 6 (solid); the triangle with vertices (1,1), (5,1) and (3,3) is shaded"><rect x="0" y="0" width="320" height="310" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="74" y1="42" x2="74" y2="280"/><line x1="108" y1="42" x2="108" y2="280"/><line x1="142" y1="42" x2="142" y2="280"/><line x1="176" y1="42" x2="176" y2="280"/><line x1="210" y1="42" x2="210" y2="280"/><line x1="244" y1="42" x2="244" y2="280"/><line x1="278" y1="42" x2="278" y2="280"/><line x1="40" y1="246" x2="278" y2="246"/><line x1="40" y1="212" x2="278" y2="212"/><line x1="40" y1="178" x2="278" y2="178"/><line x1="40" y1="144" x2="278" y2="144"/><line x1="40" y1="110" x2="278" y2="110"/><line x1="40" y1="76" x2="278" y2="76"/><line x1="40" y1="42" x2="278" y2="42"/></g><polygon points="74,246 210,246 142,178" fill="#c7d2fe" stroke="none"/><line x1="40" y1="280" x2="290" y2="280" stroke="#334155" stroke-width="1.5"/><line x1="40" y1="280" x2="40" y2="30" stroke="#334155" stroke-width="1.5"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="40" y="295">0</text><text x="74" y="295">1</text><text x="108" y="295">2</text><text x="142" y="295">3</text><text x="176" y="295">4</text><text x="210" y="295">5</text><text x="244" y="295">6</text><text x="278" y="295">7</text><text x="298" y="284">x</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="34" y="250">1</text><text x="34" y="216">2</text><text x="34" y="182">3</text><text x="34" y="148">4</text><text x="34" y="114">5</text><text x="34" y="80">6</text><text x="34" y="46">7</text><text x="44" y="24">y</text></g><line x1="40" y1="246" x2="278" y2="246" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="280" x2="278" y2="42" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><line x1="40" y1="76" x2="244" y2="280" stroke="#1f2937" stroke-width="2"/><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="282" y="242">y = 1</text><text x="250" y="60">y = x</text><text x="56" y="70">x + y = 6</text><text x="130" y="232">R</text></g></svg>`,
        answer: { type: "number", value: 6 },
        traps: [
          { spec: { type: "number", value: 7 }, feedback: "(1, 1) lies on the dashed line y = x, so it is not in R (y < x needs 1 < 1, which is false)." },
          { spec: { type: "number", value: 4 }, feedback: "Points on the solid lines count: (5, 1) and (4, 2) satisfy x + y ≤ 6 with equality, so they are in R." },
        ],
        solution: [
          "Go row by row.",
          "y = 1: need x > 1 and x ≤ 5, so x = 2, 3, 4, 5 → 4 points.",
          "y = 2: need x > 2 and x ≤ 4, so x = 3, 4 → 2 points.",
          "y = 3: need x > 3 and x ≤ 3 — impossible → 0 points.",
          "Total: 4 + 2 = 6 points.",
        ],
        commonError: "Counting points on the dashed line, or leaving out points on the solid lines.",
        difficulty: "core",
        guideRef: "graphical-regions",
        hints: ["Work along one row (one value of y) at a time.", "Solid line: points on it count. Dashed line: they don't.", "For y = 1, which x values satisfy both x > 1 and x + 1 ≤ 6?"],
        strategy: "Be systematic",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "mcq",
        id: "inequalities-p3-q09",
        question: "Which three inequalities define the shaded region? (The line x + y = 6 is dashed; the other boundaries are solid.)",
        diagram: `<svg viewBox="0 0 320 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid from 0 to 7 with lines y = 2x (solid) and x + y = 6 (dashed); the triangle with vertices (0,0), (6,0) and (2,4) is shaded"><rect x="0" y="0" width="320" height="310" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="74" y1="42" x2="74" y2="280"/><line x1="108" y1="42" x2="108" y2="280"/><line x1="142" y1="42" x2="142" y2="280"/><line x1="176" y1="42" x2="176" y2="280"/><line x1="210" y1="42" x2="210" y2="280"/><line x1="244" y1="42" x2="244" y2="280"/><line x1="278" y1="42" x2="278" y2="280"/><line x1="40" y1="246" x2="278" y2="246"/><line x1="40" y1="212" x2="278" y2="212"/><line x1="40" y1="178" x2="278" y2="178"/><line x1="40" y1="144" x2="278" y2="144"/><line x1="40" y1="110" x2="278" y2="110"/><line x1="40" y1="76" x2="278" y2="76"/><line x1="40" y1="42" x2="278" y2="42"/></g><polygon points="40,280 244,280 108,144" fill="#bbf7d0" stroke="none"/><line x1="40" y1="280" x2="290" y2="280" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="280" x2="40" y2="30" stroke="#334155" stroke-width="1.5"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="40" y="295">0</text><text x="74" y="295">1</text><text x="108" y="295">2</text><text x="142" y="295">3</text><text x="176" y="295">4</text><text x="210" y="295">5</text><text x="244" y="295">6</text><text x="278" y="295">7</text><text x="298" y="284">x</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="34" y="250">1</text><text x="34" y="216">2</text><text x="34" y="182">3</text><text x="34" y="148">4</text><text x="34" y="114">5</text><text x="34" y="80">6</text><text x="34" y="46">7</text><text x="44" y="24">y</text></g><line x1="40" y1="280" x2="159" y2="42" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="76" x2="244" y2="280" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="164" y="52">y = 2x</text><text x="196" y="210">x + y = 6</text></g></svg>`,
        options: [
          "{{y >= 0}},  {{y >= 2x}},  {{x + y < 6}}",
          "{{y >= 0}},  {{y <= 2x}},  {{x + y <= 6}}",
          "{{y > 0}},  {{y < 2x}},  {{x + y < 6}}",
          "{{y >= 0}},  {{y <= 2x}},  {{x + y < 6}}",
        ],
        answerIndex: 3,
        explanation:
          "Test a point inside, e.g. (2, 1): 1 ≥ 0 ✓, 1 ≤ 4 so it is *below* y = 2x ✓, and 2 + 1 = 3 < 6 ✓. Solid lines take ≤/≥ and the dashed line takes <, giving {{y >= 0}}, {{y <= 2x}}, {{x + y < 6}}. The option with {{y >= 2x}} picks the wrong side of y = 2x; the one with {{x + y <= 6}} ignores the dashed line; making everything strict ignores the solid lines.",
        difficulty: "core",
        guideRef: "graphical-regions",
        hints: ["Pick a point clearly inside the region, e.g. (2, 1), and test each line.", "Solid boundary → ≤ or ≥. Dashed boundary → < or >."],
        strategy: "Test a point",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "inequalities-p3-q10",
        question: "Solve {{x^2 - 2x - 15 < 0}}.\n\nType your answer as an inequality, e.g. −1 < x < 4.",
        answer: { type: "inequality", ineq: "-3<x<5", display: "−3 < x < 5" },
        traps: [
          { spec: { type: "inequality", ineq: "x<-3 or x>5" }, feedback: "Those are the values where the parabola is *above* the x-axis. You want < 0, i.e. below the axis — between the roots." },
          { spec: { type: "inequality", ineq: "-5<x<3" }, feedback: "Factorise carefully: (x − 5)(x + 3) gives critical values 5 and −3, and < 0 means x lies between them." },
          { spec: { type: "inequality", ineq: "x<5" }, feedback: "Each bracket can't be treated separately. The product (x − 5)(x + 3) is negative only between the critical values: −3 < x < 5." },
          { spec: { type: "inequality", ineq: "x<-3" }, feedback: "Each bracket can't be treated separately. The product (x − 5)(x + 3) is negative only between the critical values: −3 < x < 5." },
        ],
        solution: [
          "Factorise: (x − 5)(x + 3) < 0.",
          "Critical values: x = 5 and x = −3.",
          "The graph of {{y = x^2 - 2x - 15}} is a ∪-shape crossing the x-axis at −3 and 5. It is below the axis (y < 0) between the roots.",
          "−3 < x < 5.",
        ],
        commonError: "Writing x < 5 and x < −3 by treating each bracket like an equation's solution.",
        difficulty: "core",
        guideRef: "quadratic-inequalities",
        hints: ["Find the critical values by solving {{x^2 - 2x - 15 = 0}}.", "Sketch the ∪-shaped curve through those two points.", "Where is the curve *below* the x-axis?"],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "inequalities-p3-q11",
        question: "Solve {{3x^2 + 5x - 2 > 0}}.\n\nType your answer as two inequalities joined by \"or\", e.g. x < −1 or x > 4.",
        answer: { type: "inequality", ineq: "x<-2 or x>1/3", display: "x < −2 or x > {{1/3}}" },
        traps: [
          { spec: { type: "inequality", ineq: "-2<x<1/3" }, feedback: "That's where the expression is *negative*. You want > 0: the parts of the ∪-shaped graph above the axis, outside the roots." },
          { spec: { type: "inequality", ineq: "x<-1/3 or x>2" }, feedback: "Check the signs: (3x − 1)(x + 2) expands to {{3x^2 + 5x - 2}}, so the critical values are {{1/3}} and −2." },
          { spec: { type: "inequality", ineq: "x<-2 or x>1" }, feedback: "3x − 1 = 0 gives {{x = 1/3}}, not 1." },
        ],
        solution: [
          "Factorise: (3x − 1)(x + 2) > 0. Check: {{3x^2 + 6x - x - 2 = 3x^2 + 5x - 2}} ✓.",
          "Critical values: {{x = 1/3}} and x = −2.",
          "The coefficient of {{x^2}} is positive, so the graph is ∪-shaped; it is above the axis outside the roots.",
          "x < −2 or {{x > 1/3}}.",
        ],
        commonError: "Writing −2 > x > ⅓, which is impossible — a two-part answer must be written with \"or\".",
        difficulty: "core",
        guideRef: "quadratic-inequalities",
        hints: ["Factorise: you need two brackets that multiply to give {{3x^2}} and −2.", "Critical values come from (3x − 1)(x + 2) = 0.", "For > 0 on a ∪-shape, are you between or outside the roots?"],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "inequalities-p3-q12",
        question:
          "A region is defined by\n\n    {{y > x + 1}}  and  {{2x + y <= 8}}\n\nZara says that the point (2, 3) lies in the region. Is Zara correct? Show how you decide.",
        marks: 3,
        modelAnswer:
          "Substitute x = 2, y = 3. Second inequality: 2(2) + 3 = 7 and 7 ≤ 8, so that one is satisfied. First inequality: x + 1 = 3, so we would need 3 > 3, which is false. The point lies exactly on the line y = x + 1, which is a dashed (strict) boundary, so the point is **not** in the region. Zara is wrong.",
        markScheme: [
          { point: "Checks 2x + y ≤ 8: 7 ≤ 8 true", keywords: ["7", "7<=8", "7 ≤ 8", "true"] },
          { point: "Checks y > x + 1: 3 > 3 is false / point is on the boundary", keywords: ["3>3", "3 > 3", "false", "on the line", "boundary", "equal"] },
          { point: "Concludes Zara is wrong because the boundary is strict (dashed)", keywords: ["not", "wrong", "incorrect", "dashed", "strict", "no"] },
        ],
        commonError: "Treating 3 > 3 as true — a point on a strict (dashed) boundary is not in the region.",
        difficulty: "core",
        guideRef: "graphical-regions",
        hints: ["Substitute x = 2 and y = 3 into each inequality.", "Is 3 > 3 true?", "What does a strict inequality mean for points on the boundary line?"],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "inequalities-p3-q13",
        question: "Prove that {{x^2 + 8x + 20 > 0}} for all values of x.",
        marks: 3,
        modelAnswer:
          "Complete the square: {{x^2 + 8x + 20 = (x + 4)^2 - 16 + 20 = (x + 4)^2 + 4}}. A square is never negative, so {{(x + 4)^2 >= 0}} for all x. Therefore {{(x + 4)^2 + 4 >= 4 > 0}} for all x.",
        markScheme: [
          { point: "Completes the square to (x + 4)² + 4", keywords: ["(x+4)^2+4", "(x + 4)^2 + 4", "(x+4)²+4", "(x + 4)² + 4", "complete the square"] },
          { point: "States (x + 4)² ≥ 0 for all x (a square is never negative)", keywords: [">=0", "≥ 0", "≥0", "never negative", "square", "not negative"] },
          { point: "Concludes the expression is at least 4, so always positive", keywords: [">=4", "≥ 4", "≥4", "minimum", "always positive", "> 0", ">0"] },
        ],
        solutions: [
          { label: "Completing the square", steps: ["{{(x + 4)^2 + 4}}: the minimum value is 4, at x = −4."] },
          { label: "Discriminant", steps: ["{{b^2 - 4ac = 64 - 80 = -16 < 0}}, so the graph never meets the x-axis.", "The {{x^2}} coefficient is positive, so the ∪-shape sits entirely above the axis."] },
        ],
        commonError: "Testing a few values of x (x = 0, 1, 2 …) — examples are not a proof for *all* x.",
        difficulty: "challenge",
        guideRef: "quadratic-inequalities",
        hints: ["Trying values can't cover every x. What form makes the minimum obvious?", "Complete the square: halve the 8.", "What is the smallest value a square can take?"],
        strategy: "Complete the square",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "inequalities-p3-q14",
        question:
          "Solve {{x(x - 4) > 2(x - 4)}}.\n\nType your answer as two inequalities joined by \"or\".",
        answer: { type: "inequality", ineq: "x<2 or x>4", display: "x < 2 or x > 4" },
        traps: [
          { spec: { type: "inequality", ineq: "x>2" }, feedback: "You divided both sides by (x − 4). That's only safe when x − 4 is positive — when it is negative the sign must flip, and when it is 0 you can't divide at all. Bring everything to one side and factorise instead." },
          { spec: { type: "inequality", ineq: "2<x<4" }, feedback: "(x − 4)(x − 2) > 0 means the product is positive: outside the roots, not between them." },
        ],
        solution: [
          "Bring everything to one side: x(x − 4) − 2(x − 4) > 0.",
          "Factor out (x − 4): (x − 4)(x − 2) > 0.",
          "Critical values 2 and 4; the ∪-shaped graph is positive outside them.",
          "x < 2 or x > 4.",
          "Check x = 0: 0 > −8 ✓ (so dividing by (x − 4) to get x > 2 must have been wrong).",
        ],
        commonError: "Cancelling (x − 4) from both sides — you cannot divide an inequality by an expression whose sign is unknown.",
        difficulty: "challenge",
        guideRef: "quadratic-inequalities",
        hints: [
          "Tempting: divide by (x − 4). But is (x − 4) positive or negative?",
          "Test x = 0 in the original. Does the 'cancelled' answer x > 2 include it?",
          "Move everything to one side and spot the common factor (x − 4).",
          "(x − 4)(x − 2) > 0 — between or outside the roots?",
        ],
        strategy: "Spot the trap",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "inequalities-p3-q15",
        question:
          "Find the integer value of x that satisfies **both**\n\n    {{2x^2 - 7x - 4 < 0}}  and  {{3x - 5 > x}}",
        answer: { type: "number", value: 3 },
        traps: [
          { spec: { type: "list", values: [3, 4] }, feedback: "x = 4 is a critical value of the quadratic: {{2(16) - 28 - 4 = 0}}, and 0 < 0 is false." },
          { spec: { type: "list", values: [0, 1, 2, 3] }, feedback: "Those satisfy the quadratic inequality only. The linear one needs x > 2.5." },
        ],
        solution: [
          "Quadratic: (2x + 1)(x − 4) < 0, critical values {{-1/2}} and 4, so {{-1/2 < x < 4}}.",
          "Linear: 3x − 5 > x gives 2x > 5, so x > 2.5.",
          "Both together: 2.5 < x < 4.",
          "The only integer is x = 3. Check: {{2(9) - 21 - 4 = -7 < 0}} ✓ and 9 − 5 = 4 > 3 ✓.",
        ],
        commonError: "Including x = 4, where the quadratic equals 0 (not < 0).",
        difficulty: "challenge",
        guideRef: "quadratic-inequalities",
        hints: ["Solve each inequality on its own first.", "Factorise {{2x^2 - 7x - 4}}: try (2x + 1)(x − 4).", "Draw both solution sets on one number line. Where do they overlap?"],
        strategy: "Draw a number line",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "inequalities-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "inequalities-p4-q01",
        question: "Write down the inequality shown on the number line.\n\nUse x as the variable, e.g. −2 < x ≤ 1.",
        diagram: `<svg viewBox="0 0 480 90" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line from -3 to 6 with a filled circle at -1, an open circle at 4 and a bar joining them"><rect x="0" y="0" width="480" height="90" fill="#ffffff"/><line x1="20" y1="60" x2="460" y2="60" stroke="#334155" stroke-width="2"/><g stroke="#334155" stroke-width="2"><line x1="40" y1="54" x2="40" y2="66"/><line x1="84" y1="54" x2="84" y2="66"/><line x1="128" y1="54" x2="128" y2="66"/><line x1="172" y1="54" x2="172" y2="66"/><line x1="216" y1="54" x2="216" y2="66"/><line x1="260" y1="54" x2="260" y2="66"/><line x1="304" y1="54" x2="304" y2="66"/><line x1="348" y1="54" x2="348" y2="66"/><line x1="392" y1="54" x2="392" y2="66"/><line x1="436" y1="54" x2="436" y2="66"/></g><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="40" y="82">−3</text><text x="84" y="82">−2</text><text x="128" y="82">−1</text><text x="172" y="82">0</text><text x="216" y="82">1</text><text x="260" y="82">2</text><text x="304" y="82">3</text><text x="348" y="82">4</text><text x="392" y="82">5</text><text x="436" y="82">6</text></g><line x1="128" y1="32" x2="342" y2="32" stroke="#1f2937" stroke-width="3"/><circle cx="128" cy="32" r="6" fill="#1f2937" stroke="#1f2937" stroke-width="2"/><circle cx="348" cy="32" r="6" fill="#ffffff" stroke="#1f2937" stroke-width="2"/></svg>`,
        answer: { type: "inequality", ineq: "-1<=x<4", display: "−1 ≤ x < 4" },
        traps: [
          { spec: { type: "inequality", ineq: "-1<x<=4" }, feedback: "Filled circle = included (≤), open circle = not included (<). Here −1 is filled and 4 is open: −1 ≤ x < 4." },
        ],
        solution: ["Filled circle at −1: −1 is included, so −1 ≤ x.", "Open circle at 4: 4 is not included, so x < 4.", "−1 ≤ x < 4."],
        commonError: "Mixing up which circle means 'included'.",
        difficulty: "warmup",
        guideRef: "linear-inequalities",
        hints: ["A filled-in circle means the end value is included."],
        strategy: "Read the diagram carefully",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "inequalities-p4-q02",
        question: "Solve {{7y + 4 <= 3y - 10}}.\n\nType your answer as an inequality.",
        answer: { type: "inequality", ineq: "y<=-7/2", display: "y ≤ −3.5" },
        traps: [
          { spec: { type: "inequality", ineq: "y>=-7/2" }, feedback: "You divided by +4, which is positive, so the sign does **not** change: y ≤ −3.5." },
          { spec: { type: "inequality", ineq: "y<=-3/2" }, feedback: "Move the 4 across by subtracting it: 4y ≤ −10 − 4 = −14." },
        ],
        solution: ["Subtract 3y from both sides: 4y + 4 ≤ −10.", "Subtract 4: 4y ≤ −14.", "Divide by 4: y ≤ −3.5."],
        commonError: "Reversing the sign because the answer is negative — the sign only flips when you multiply or divide by a negative number.",
        difficulty: "warmup",
        guideRef: "linear-inequalities",
        hints: ["Collect the y terms on the left.", "You are dividing by a positive number at the end — does the sign change?"],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "inequalities-p4-q03",
        question:
          "A lift can carry a maximum load of 1000 kg. A technician of mass 85 kg loads n boxes into the lift and rides up with them. Each box has a mass of 42 kg.\n\nWrite an inequality in n and solve it to find the greatest number of boxes the technician can take in one trip.",
        answer: { type: "number", value: 21 },
        traps: [
          { spec: { type: "number", value: 22 }, feedback: "{{915/42 = 21.7…}}, but 22 boxes would make the load 85 + 924 = 1009 kg — over the limit. Round *down*." },
          { spec: { type: "number", value: 23 }, feedback: "Don't forget the technician: only 1000 − 85 = 915 kg is left for boxes." },
        ],
        solution: [
          "Inequality: 85 + 42n ≤ 1000.",
          "42n ≤ 915.",
          "{{n <= 915/42 = 21.7…}}",
          "n must be a whole number, so the greatest is n = 21. Check: 85 + 42 × 21 = 967 kg ≤ 1000 kg ✓; 22 boxes give 1009 kg ✗.",
        ],
        commonError: "Rounding 21.7 to the nearest whole number (22) — with a maximum load you must always round *down*.",
        difficulty: "warmup",
        guideRef: "linear-inequalities",
        hints: ["Total load = technician + boxes. It must be at most 1000 kg.", "Solve 85 + 42n ≤ 1000, then think about whole numbers."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "inequalities-p4-q04",
        question: "n is an integer.\n\n{{-6 <= 2n < 7}}\n\nWrite down all the possible values of n, separated by commas.",
        answer: { type: "list", values: [-3, -2, -1, 0, 1, 2, 3], display: "−3, −2, −1, 0, 1, 2, 3" },
        traps: [
          { spec: { type: "list", values: [-2, -1, 0, 1, 2, 3] }, feedback: "2n ≥ −6 means n ≥ −3, and −3 is included because the sign is ≤." },
          { spec: { type: "list", values: [-6, -5, -4, -3, -2, -1, 0, 1, 2, 3, 4, 5, 6] }, feedback: "Those are values of 2n, not n. Divide all parts by 2 first: −3 ≤ n < 3.5." },
        ],
        solution: ["Divide all three parts by 2: −3 ≤ n < 3.5.", "Integers: −3, −2, −1, 0, 1, 2, 3."],
        commonError: "Leaving out −3 or 0.",
        difficulty: "warmup",
        guideRef: "linear-inequalities",
        hints: ["Divide every part by 2.", "Which end is included? Don't forget zero."],
        strategy: "Check the end points",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "inequalities-p4-q05",
        question: "Solve {{5(x + 2) > 2(4 - x) - 3}}.\n\nGive your answer as an inequality with an exact fraction.",
        answer: { type: "inequality", ineq: "x>-5/7", display: "x > {{-5/7}}" },
        traps: [
          { spec: { type: "inequality", ineq: "x>-5/3" }, feedback: "Expand: 5x + 10 > 8 − 2x − 3 = 5 − 2x. **Adding** 2x to both sides gives 7x > −5, so x > {{-5/7}}." },
          { spec: { type: "inequality", ineq: "x<-5/7" }, feedback: "7x > −5: you are dividing by +7, which is positive, so the sign stays: x > {{-5/7}}." },
          { spec: { type: "inequality", ineq: "x>5/7" }, feedback: "Check the sign of the constant: 5 − 10 = −5, so 7x > −5 and x > {{-5/7}}." },
        ],
        solution: [
          "Expand both sides: 5x + 10 > 8 − 2x − 3.",
          "Simplify the right: 5x + 10 > 5 − 2x.",
          "Add 2x and subtract 10: 7x > −5.",
          "{{x > -5/7}}.",
        ],
        commonError: "Writing 2(4 − x) as 8 − x, or 8 + 2x.",
        difficulty: "core",
        guideRef: "linear-inequalities",
        hints: ["Expand both brackets carefully — watch the −x inside the second one.", "Collect the x terms on the left: add 2x to both sides.", "7x > −5. Divide by a positive number."],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "written",
        id: "inequalities-p4-q06",
        question:
          "A rectangle has length (3x − 1) cm and width (x + 4) cm.\n\nAn equilateral triangle has sides of length (2x + 5) cm.\n\nThe perimeter of the rectangle is greater than the perimeter of the triangle.\n\nShow that x > 4.5",
        marks: 3,
        modelAnswer:
          "Perimeter of rectangle = 2(3x − 1) + 2(x + 4) = 6x − 2 + 2x + 8 = 8x + 6.\n\nPerimeter of triangle = 3(2x + 5) = 6x + 15.\n\n8x + 6 > 6x + 15, so 2x > 9, so x > 4.5.",
        markScheme: [
          { point: "Rectangle perimeter 8x + 6", keywords: ["8x+6", "8x + 6", "2(3x-1)+2(x+4)", "2(4x+3)"] },
          { point: "Triangle perimeter 6x + 15", keywords: ["6x+15", "6x + 15", "3(2x+5)"] },
          { point: "Forms 8x + 6 > 6x + 15 and reaches 2x > 9, x > 4.5", keywords: ["2x>9", "2x > 9", ">", "4.5", "9/2"] },
        ],
        commonError: "Adding just one length and one width for the rectangle (forgetting there are two of each side).",
        difficulty: "core",
        guideRef: "linear-inequalities",
        hints: ["Write an expression for each perimeter.", "A rectangle has two lengths and two widths; an equilateral triangle has three equal sides.", "Set rectangle > triangle and solve."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "inequalities-p4-q07",
        question:
          "The region R, shaded on the grid, satisfies\n\n    {{x >= 1}},  {{y > x - 2}},  {{x + 2y <= 10}}\n\nThe line y = x − 2 is dashed; the other two boundaries are solid.\n\nHow many points with integer coordinates lie in R?",
        diagram: `<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid from x = -1 to 7 and y = -2 to 6 with lines x = 1 (solid), y = x - 2 (dashed) and x + 2y = 10 (solid); the triangle with vertices (1,-1), (1,4.5) and (14/3, 8/3) is shaded"><rect x="0" y="0" width="320" height="300" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="40" y1="30" x2="40" y2="270"/><line x1="100" y1="30" x2="100" y2="270"/><line x1="130" y1="30" x2="130" y2="270"/><line x1="160" y1="30" x2="160" y2="270"/><line x1="190" y1="30" x2="190" y2="270"/><line x1="220" y1="30" x2="220" y2="270"/><line x1="250" y1="30" x2="250" y2="270"/><line x1="280" y1="30" x2="280" y2="270"/><line x1="40" y1="270" x2="280" y2="270"/><line x1="40" y1="240" x2="280" y2="240"/><line x1="40" y1="180" x2="280" y2="180"/><line x1="40" y1="150" x2="280" y2="150"/><line x1="40" y1="120" x2="280" y2="120"/><line x1="40" y1="90" x2="280" y2="90"/><line x1="40" y1="60" x2="280" y2="60"/><line x1="40" y1="30" x2="280" y2="30"/></g><polygon points="100,240 100,75 210,130" fill="#fde68a" stroke="none"/><line x1="40" y1="210" x2="292" y2="210" stroke="#334155" stroke-width="1.5"/><line x1="70" y1="275" x2="70" y2="22" stroke="#334155" stroke-width="1.5"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="40" y="224">−1</text><text x="100" y="224">1</text><text x="130" y="224">2</text><text x="160" y="224">3</text><text x="190" y="224">4</text><text x="220" y="224">5</text><text x="250" y="224">6</text><text x="280" y="224">7</text><text x="300" y="214">x</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="65" y="274">−2</text><text x="65" y="244">−1</text><text x="65" y="184">1</text><text x="65" y="154">2</text><text x="65" y="124">3</text><text x="65" y="94">4</text><text x="65" y="64">5</text><text x="65" y="34">6</text><text x="80" y="18">y</text></g><line x1="100" y1="270" x2="100" y2="30" stroke="#1f2937" stroke-width="2"/><line x1="70" y1="270" x2="280" y2="60" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><line x1="40" y1="45" x2="280" y2="165" stroke="#1f2937" stroke-width="2"/><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="104" y="42">x = 1</text><text x="236" y="56">y = x − 2</text><text x="232" y="190">x + 2y = 10</text><text x="126" y="132">R</text></g></svg>`,
        answer: { type: "number", value: 12 },
        traps: [
          { spec: { type: "number", value: 13 }, feedback: "(3, 1) lies on the dashed line y = x − 2, so it is not in R (1 > 1 is false)." },
          { spec: { type: "number", value: 10 }, feedback: "Points on the solid line x + 2y = 10 are included: (2, 4) and (4, 3) both give exactly 10." },
        ],
        solution: [
          "Work column by column (each value of x from 1 upwards).",
          "x = 1: y > −1 and 2y ≤ 9 → y = 0, 1, 2, 3, 4 → 5 points.",
          "x = 2: y > 0 and 2y ≤ 8 → y = 1, 2, 3, 4 → 4 points.",
          "x = 3: y > 1 and 2y ≤ 7 → y = 2, 3 → 2 points.",
          "x = 4: y > 2 and 2y ≤ 6 → y = 3 → 1 point.",
          "x = 5: y > 3 and 2y ≤ 5 — impossible.",
          "Total: 5 + 4 + 2 + 1 = 12.",
        ],
        commonError: "Counting (3, 1), which is on the dashed line, or missing (2, 4) and (4, 3) on the solid line.",
        difficulty: "core",
        guideRef: "graphical-regions",
        hints: ["Go one column at a time, starting at x = 1.", "For each x, find the range of y from the other two inequalities.", "Solid boundary points count; dashed boundary points don't."],
        strategy: "Be systematic",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "inequalities-p4-q08",
        question: "Write down the three inequalities that define the shaded region. All the boundary lines are solid.",
        diagram: `<svg viewBox="0 0 390 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid from x = -5 to 6 and y = -1 to 6 with lines y = 1, x = 4 and a line through (-4, 1) and (4, 5); the triangle with vertices (-4,1), (4,1) and (4,5) is shaded"><rect x="0" y="0" width="390" height="280" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="30" y1="40" x2="30" y2="250"/><line x1="60" y1="40" x2="60" y2="250"/><line x1="90" y1="40" x2="90" y2="250"/><line x1="120" y1="40" x2="120" y2="250"/><line x1="150" y1="40" x2="150" y2="250"/><line x1="210" y1="40" x2="210" y2="250"/><line x1="240" y1="40" x2="240" y2="250"/><line x1="270" y1="40" x2="270" y2="250"/><line x1="300" y1="40" x2="300" y2="250"/><line x1="330" y1="40" x2="330" y2="250"/><line x1="360" y1="40" x2="360" y2="250"/><line x1="30" y1="250" x2="360" y2="250"/><line x1="30" y1="190" x2="360" y2="190"/><line x1="30" y1="160" x2="360" y2="160"/><line x1="30" y1="130" x2="360" y2="130"/><line x1="30" y1="100" x2="360" y2="100"/><line x1="30" y1="70" x2="360" y2="70"/><line x1="30" y1="40" x2="360" y2="40"/></g><polygon points="60,190 300,190 300,70" fill="#bae6fd" stroke="none"/><line x1="30" y1="220" x2="372" y2="220" stroke="#334155" stroke-width="1.5"/><line x1="180" y1="255" x2="180" y2="30" stroke="#334155" stroke-width="1.5"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="30" y="234">−5</text><text x="60" y="234">−4</text><text x="90" y="234">−3</text><text x="120" y="234">−2</text><text x="150" y="234">−1</text><text x="210" y="234">1</text><text x="240" y="234">2</text><text x="270" y="234">3</text><text x="300" y="234">4</text><text x="330" y="234">5</text><text x="360" y="234">6</text><text x="380" y="224">x</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="175" y="254">−1</text><text x="175" y="194">1</text><text x="175" y="164">2</text><text x="175" y="134">3</text><text x="175" y="104">4</text><text x="175" y="74">5</text><text x="175" y="44">6</text><text x="190" y="26">y</text></g><line x1="30" y1="190" x2="360" y2="190" stroke="#1f2937" stroke-width="2"/><line x1="300" y1="250" x2="300" y2="40" stroke="#1f2937" stroke-width="2"/><line x1="30" y1="205" x2="360" y2="40" stroke="#1f2937" stroke-width="2"/><g font-family="sans-serif" font-size="12" fill="#1f2937"><text x="240" y="182">R</text></g></svg>`,
        marks: 3,
        modelAnswer:
          "The horizontal line is y = 1 and the region is above it: y ≥ 1.\n\nThe vertical line is x = 4 and the region is to its left: x ≤ 4.\n\nThe sloping line passes through (−4, 1) and (4, 5): gradient {{4/8 = 1/2}}, and at x = 0 it gives y = 3, so it is {{y = 1/2 x + 3}}. The region is below it: {{y <= 1/2 x + 3}} (equivalently 2y ≤ x + 6).",
        markScheme: [
          { point: "y ≥ 1", keywords: ["y>=1", "y ≥ 1", "y≥1", "1<=y"] },
          { point: "x ≤ 4", keywords: ["x<=4", "x ≤ 4", "x≤4", "4>=x"] },
          { point: "y ≤ ½x + 3 (or 2y ≤ x + 6)", keywords: ["1/2x+3", "0.5x+3", "½x + 3", "2y<=x+6", "2y ≤ x + 6", "x/2+3"] },
        ],
        commonError: "Finding the gradient as {{8/4 = 2}} (run over rise) instead of rise over run.",
        difficulty: "core",
        guideRef: "graphical-regions",
        hints: [
          "Find the equation of each boundary line first.",
          "For the sloping line, read two points such as (−4, 1) and (4, 5). Gradient = rise ÷ run.",
          "Then test a point inside, e.g. (2, 2), to choose ≤ or ≥ for each line.",
        ],
        strategy: "Test a point",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "inequalities-p4-q09",
        question: "Solve {{x^2 > 2x + 24}}.\n\nType your answer as two inequalities joined by \"or\".",
        answer: { type: "inequality", ineq: "x<-4 or x>6", display: "x < −4 or x > 6" },
        traps: [
          { spec: { type: "inequality", ineq: "-4<x<6" }, feedback: "{{x^2 - 2x - 24 > 0}} needs the ∪-shaped graph *above* the axis — outside the roots, not between them." },
          { spec: { type: "inequality", ineq: "x<-6 or x>4" }, feedback: "(x − 6)(x + 4) = 0 gives x = 6 and x = −4 — check the signs." },
        ],
        solution: [
          "Rearrange so one side is 0: {{x^2 - 2x - 24 > 0}}.",
          "Factorise: (x − 6)(x + 4) > 0. Critical values 6 and −4.",
          "∪-shaped graph, positive outside the roots.",
          "x < −4 or x > 6.",
        ],
        commonError: "Taking the square root of both sides or dividing by x — always rearrange to (quadratic) > 0 first.",
        difficulty: "core",
        guideRef: "quadratic-inequalities",
        hints: ["Get everything on one side so the other side is 0.", "Factorise {{x^2 - 2x - 24}}.", "Sketch: where is the graph above the x-axis?"],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "inequalities-p4-q10",
        question: "Solve {{3x^2 - 11x - 4 <= 0}}.\n\nType your answer as an inequality, using fractions where needed.",
        answer: { type: "inequality", ineq: "-1/3<=x<=4", display: "{{-1/3}} ≤ x ≤ 4" },
        traps: [
          { spec: { type: "inequality", ineq: "-1/3<x<4" }, feedback: "The sign is ≤, so the critical values themselves are included: use ≤ at both ends." },
          { spec: { type: "inequality", ineq: "-4<=x<=1/3" }, feedback: "(3x + 1)(x − 4) ≤ 0: critical values {{-1/3}} and 4 — check the signs." },
          { spec: { type: "inequality", ineq: "x<=-1/3 or x>=4" }, feedback: "(3x + 1)(x − 4) ≤ 0: critical values {{-1/3}} and 4, and ≤ 0 means *between* them." },
        ],
        solution: [
          "Factorise: (3x + 1)(x − 4) ≤ 0. Check: {{3x^2 - 12x + x - 4 = 3x^2 - 11x - 4}} ✓.",
          "Critical values: {{x = -1/3}} and x = 4.",
          "∪-shaped graph is on or below the axis between (and at) the roots.",
          "{{-1/3 <= x <= 4}}.",
        ],
        commonError: "Writing x ≤ −⅓ from 3x + 1 ≤ 0 alone — you need the sign of the whole product.",
        difficulty: "core",
        guideRef: "quadratic-inequalities",
        hints: ["Factorise: the brackets start (3x …)(x …).", "Critical values from each bracket = 0.", "≤ 0 → on or below the axis. Between or outside?"],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "inequalities-p4-q11",
        question:
          "Solve {{x^2 + 4x - 21 >= 0}}.\n\nGive your answer using set notation, e.g. {x : x < 1} ∪ {x : x > 6}. (You may type U for ∪.)",
        answer: {
          type: "text",
          accept: [
            "{x:x<=-7}∪{x:x>=3}",
            "{x:x>=3}∪{x:x<=-7}",
            "{x:x<=-7}u{x:x>=3}",
            "{x:x>=3}u{x:x<=-7}",
            "{x:x<=-7 or x>=3}",
            "{x:x>=3 or x<=-7}",
            "{x|x<=-7}∪{x|x>=3}",
            "{x|x<=-7}u{x|x>=3}",
          ],
          display: "{x : x ≤ −7} ∪ {x : x ≥ 3}",
        },
        traps: [
          { spec: { type: "text", accept: ["x<=-7 or x>=3", "x>=3 or x<=-7"] }, feedback: "Correct values — now write them in set notation: {x : x ≤ −7} ∪ {x : x ≥ 3}." },
          { spec: { type: "text", accept: ["{x:-7<=x<=3}", "-7<=x<=3"] }, feedback: "≥ 0 means the graph is on or above the axis — outside the roots, not between them." },
          { spec: { type: "text", accept: ["{x:x<=-7}∩{x:x>=3}", "{x:x<=-7}n{x:x>=3}"] }, feedback: "∩ (intersection) would need x ≤ −7 *and* x ≥ 3 at once — impossible. Use ∪ (union) for \"or\"." },
        ],
        solution: [
          "Factorise: (x + 7)(x − 3) ≥ 0.",
          "Critical values −7 and 3.",
          "∪-shaped graph, on or above the axis outside the roots: x ≤ −7 or x ≥ 3.",
          "Set notation: {x : x ≤ −7} ∪ {x : x ≥ 3}.",
        ],
        commonError: "Using ∩ (and) instead of ∪ (or) to join the two parts.",
        difficulty: "core",
        guideRef: "quadratic-inequalities",
        hints: ["Solve it as usual first: factorise and find the critical values.", "≥ 0 → outside the roots, with the ends included.", "\"Or\" between two sets is a union, ∪."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "inequalities-p4-q12",
        question:
          "A rectangular planter at a hawker centre has length (x + 5) m and width (x − 1) m.\n\nIts area is less than 40 m².\n\nFind the set of possible values of x. Type your answer as an inequality.",
        answer: { type: "inequality", ineq: "1<x<5", display: "1 < x < 5" },
        traps: [
          { spec: { type: "inequality", ineq: "-9<x<5" }, feedback: "Right algebra, but the width x − 1 must be positive, so x > 1. That cuts the interval down to 1 < x < 5." },
          { spec: { type: "inequality", ineq: "x<5" }, feedback: "Also need x − 1 > 0 for a real width: 1 < x < 5." },
        ],
        solution: [
          "Area: (x + 5)(x − 1) < 40.",
          "Expand: {{x^2 + 4x - 5 < 40}}, so {{x^2 + 4x - 45 < 0}}.",
          "Factorise: (x + 9)(x − 5) < 0, so −9 < x < 5.",
          "Lengths must be positive: x − 1 > 0 gives x > 1 (and then x + 5 > 0 automatically).",
          "Combine: 1 < x < 5.",
        ],
        commonError: "Forgetting the physical restriction that the width x − 1 must be positive.",
        difficulty: "core",
        guideRef: "quadratic-inequalities",
        hints: ["Write an inequality for the area.", "Rearrange to a quadratic < 0 and factorise.", "Which values of x make the width negative or zero? Remove them."],
        strategy: "Check it makes sense",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "inequalities-p4-q13",
        question:
          "The solution of {{x^2 - 6x + 4 < 0}} is p < x < q.\n\nFind p and q, giving each correct to 3 significant figures. Give p first, then q.",
        answer: { type: "list", values: [0.764, 5.24], ordered: true, tolerance: 0.001, display: "p = 0.764, q = 5.24" },
        traps: [
          { spec: { type: "list", values: [5.24, 0.764], ordered: true, tolerance: 0.001 }, feedback: "Right values, wrong order: p is the smaller one, so p = 0.764 and q = 5.24." },
          { spec: { type: "list", values: [-0.764, -5.24], ordered: false, tolerance: 0.001 }, feedback: "With b = −6, −b = +6: {{x = (6 ± sqrt(20))/2}}, which gives two positive values." },
        ],
        solution: [
          "Critical values from {{x^2 - 6x + 4 = 0}}. It doesn't factorise.",
          "Complete the square: {{(x - 3)^2 - 5 = 0}}, so {{x = 3 ± sqrt(5)}}.",
          "{{3 - sqrt(5) = 0.7639…}} and {{3 + sqrt(5) = 5.2360…}}.",
          "The ∪-shaped graph is below the axis between them: 0.764 < x < 5.24 (3 s.f.).",
        ],
        solutions: [
          { label: "Quadratic formula", steps: ["{{x = (6 ± sqrt(36 - 16))/2 = (6 ± sqrt(20))/2 = 3 ± sqrt(5)}}."] },
          { label: "Completing the square", steps: ["{{x^2 - 6x + 4 = (x - 3)^2 - 5}}, so the roots are {{3 ± sqrt(5)}}. Quicker here because b is even."] },
        ],
        commonError: "Rounding 5.236 to 5.23, or giving 0.76 (2 s.f.).",
        difficulty: "challenge",
        guideRef: "quadratic-inequalities",
        hints: ["The critical values solve {{x^2 - 6x + 4 = 0}}. Does it factorise?", "Use the formula or complete the square: halve the −6.", "{{x = 3 ± sqrt(5)}}. Which is smaller?"],
        strategy: "Complete the square",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "written",
        id: "inequalities-p4-q14",
        question:
          "The equation {{x^2 + (k - 3)x + k = 0}} has two distinct real roots.\n\n(a) Show that {{k^2 - 10k + 9 > 0}}.\n\n(b) Hence find the set of possible values of k.",
        marks: 4,
        modelAnswer:
          "(a) Two distinct real roots need {{b^2 - 4ac > 0}}. Here a = 1, b = k − 3, c = k, so {{(k - 3)^2 - 4(1)(k) > 0}}, i.e. {{k^2 - 6k + 9 - 4k > 0}}, which gives {{k^2 - 10k + 9 > 0}}.\n\n(b) Factorise: (k − 1)(k − 9) > 0. Critical values 1 and 9. The ∪-shaped graph in k is positive outside the roots, so k < 1 or k > 9.",
        markScheme: [
          { point: "Uses b² − 4ac > 0 for two distinct real roots", keywords: ["b^2-4ac", "b²-4ac", "b² − 4ac", "discriminant", ">0", "> 0"] },
          { point: "Substitutes correctly: (k − 3)² − 4k and expands to k² − 10k + 9", keywords: ["(k-3)^2", "(k-3)²", "(k − 3)²", "-4k", "k^2-6k+9", "k²-6k+9", "k^2-10k+9"] },
          { point: "Factorises to (k − 1)(k − 9) with critical values 1 and 9", keywords: ["(k-1)(k-9)", "(k − 1)(k − 9)", "1 and 9", "k=1", "k=9"] },
          { point: "Correct set: k < 1 or k > 9", keywords: ["k<1", "k < 1", "k>9", "k > 9", "or"] },
        ],
        solutions: [
          { label: "Discriminant then sketch", steps: ["{{(k - 3)^2 - 4k = k^2 - 10k + 9 = (k - 1)(k - 9)}}.", "Positive outside the roots: k < 1 or k > 9."] },
          { label: "Sanity check", steps: ["k = 0: {{x^2 - 3x = 0}} has roots 0 and 3 — two distinct roots ✓ (0 < 1).", "k = 4: {{x^2 + x + 4}} has discriminant 1 − 16 < 0 — no real roots ✓ (4 is between 1 and 9)."] },
        ],
        commonError: "Writing 1 < k < 9 — that's where the discriminant is negative (no real roots).",
        difficulty: "challenge",
        guideRef: "quadratic-inequalities",
        hints: [
          "Which condition on {{b^2 - 4ac}} gives two distinct real roots?",
          "Here b = k − 3 and c = k. Square (k − 3) carefully.",
          "Part (b) is a quadratic inequality in k: factorise {{k^2 - 10k + 9}}.",
          "> 0 means outside the critical values.",
        ],
        strategy: "Use the discriminant",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "inequalities-p4-q15",
        question:
          "The region R is defined by\n\n    {{y >= 0}},  {{y <= x + 2}},  {{2x + y <= 11}}\n\nThe point (x, y) lies in R. Find the greatest possible value of {{2x + 3y}}.",
        answer: { type: "number", value: 21 },
        traps: [
          { spec: { type: "number", value: 11 }, feedback: "(5.5, 0) gives 11, but it's not the best corner. Check the vertex where y = x + 2 meets 2x + y = 11." },
          { spec: { type: "number", value: 26 }, feedback: "(5.5, 0) and (3, 5) are separate corners — you can't take the biggest x (5.5) from one and the biggest y (5) from another. Evaluate 2x + 3y at each vertex." },
        ],
        solution: [
          "R is a triangle. Find its vertices.",
          "y = 0 and y = x + 2 meet at (−2, 0).",
          "y = 0 and 2x + y = 11 meet at (5.5, 0).",
          "y = x + 2 and 2x + y = 11: 2x + x + 2 = 11, so x = 3, y = 5 → (3, 5).",
          "Evaluate 2x + 3y: (−2, 0) → −4; (5.5, 0) → 11; (3, 5) → 6 + 15 = 21.",
          "The greatest value is 21, at (3, 5).",
        ],
        solutions: [
          { label: "Check the corners", steps: ["A linear expression like 2x + 3y takes its largest value on a polygon at a vertex.", "Test all three vertices: the maximum is 21."] },
          { label: "Slide a line", steps: ["Draw 2x + 3y = c for increasing c — parallel lines of gradient {{-2/3}}.", "The last point of R the line touches as c grows is (3, 5), giving c = 21."] },
        ],
        commonError: "Taking the largest x and the largest y from different points of the region.",
        difficulty: "challenge",
        guideRef: "graphical-regions",
        hints: [
          "Sketch R. What shape is it?",
          "Find where each pair of boundary lines meet.",
          "The maximum of 2x + 3y over a polygon happens at a corner.",
        ],
        strategy: "Consider extremes",
      },
    ],
  },
];
