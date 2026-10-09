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
            spec: { type: "number", value: -1.6 },
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
          "Priya has three times as much money as Jun.\n\nPriya gives Jun $24. They now have the same amount of money.\n\nHow much money did Priya have at the start? Give your answer in dollars.",
        answer: { type: "number", value: 72, display: "$72" },
        traps: [
          {
            spec: { type: "number", value: 24 },
            feedback: "x = 24 is the amount **Jun** started with. Priya had three times as much.",
          },
          {
            spec: { type: "number", value: 36 },
            feedback:
              "It looks like you wrote 3x − 24 = x. When Priya gives $24 away, Jun **gains** $24 — so the right-hand side is x + 24.",
          },
        ],
        solution: [
          "Let Jun start with $x, so Priya starts with $3x.",
          "After the gift: Priya has 3x − 24 and Jun has x + 24.",
          "They are equal: 3x − 24 = x + 24.",
          "Subtract x and add 24: 2x = 48, so x = 24.",
          "Priya started with 3 × 24 = $72. Check: 72 − 24 = 48 and 24 + 24 = 48. ✓",
        ],
        solutions: [
          {
            label: "Form an equation",
            steps: ["3x − 24 = x + 24 ⟹ x = 24, so Priya had $72."],
          },
          {
            label: "Bar model",
            steps: [
              "Priya is 3 bars, Jun is 1 bar. To equalise, Priya must hand over the difference split in half: 1 bar.",
              "So 1 bar = $24 and Priya had 3 bars = $72.",
            ],
          },
        ],
        commonError: "Forgetting that the transfer changes **both** amounts: one goes down by 24, the other goes up by 24.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "Let Jun's starting amount be x. What is Priya's?",
          "Write expressions for how much each has **after** the $24 changes hands.",
          "Set those two expressions equal and solve — then answer for Priya, not Jun.",
        ],
        strategy: "Use a bar model",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "solving-equations-p3-q07",
        question: "Make x the subject of {{y = 3 - sqrt(x + 2)}}.",
        answer: { type: "expression", expr: "(3-y)^2-2", display: "{{x = (3 - y)^2 - 2}}" },
        traps: [
          {
            spec: { type: "expression", expr: "7-y^2" },
            feedback:
              "You squared term by term ({{x + 2 = 9 - y^2}}). Get the square root on its own first, then square the **whole** side: {{(3 - y)^2}}.",
          },
          {
            spec: { type: "expression", expr: "(3-y)^2+2" },
            feedback: "Last step: from {{x + 2 = (3 - y)^2}} you subtract 2, not add it.",
          },
        ],
        solution: [
          "Get the square root on its own: {{sqrt(x + 2) = 3 - y}}.",
          "Square both sides: {{x + 2 = (3 - y)^2}}.",
          "Subtract 2: {{x = (3 - y)^2 - 2}}.",
          "(Writing {{(y - 3)^2 - 2}} is also correct: a number and its negative have the same square.)",
        ],
        commonError: "Squaring before isolating the root — {{(3 - sqrt(x + 2))^2}} is **not** {{9 - (x + 2)}}.",
        difficulty: "core",
        guideRef: "rearranging-once",
        hints: [
          "x is buried inside a square root. What do you need to get on its own before you can undo the root?",
          "Rearrange to {{sqrt(x + 2) = 3 - y}}.",
          "Now square both sides — the whole of 3 − y — then subtract 2.",
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
        question: "Make t the subject of {{k = (at - 1)/t}}.",
        answer: { type: "expression", expr: "1/(a-k)", display: "{{t = 1/(a - k)}}" },
        traps: [
          {
            spec: { type: "expression", expr: "1/(k-a)" },
            feedback:
              "Sign slip when collecting the t terms. From kt = at − 1, subtract kt and add 1: 1 = at − kt = t(a − k).",
          },
          {
            spec: { type: "expression", expr: "(k+1)/a" },
            feedback:
              "t is on the bottom as well as the top, so you can't just 'multiply out' the 1. Multiply both sides by t first: kt = at − 1.",
          },
        ],
        solution: [
          "Multiply both sides by t: kt = at − 1.",
          "t appears twice. Collect the t terms on one side: 1 = at − kt.",
          "Factorise: 1 = t(a − k).",
          "Divide: {{t = 1/(a - k)}}.",
        ],
        solutions: [
          { label: "Clear the fraction", steps: ["kt = at − 1 ⟹ 1 = t(a − k) ⟹ {{t = 1/(a - k)}}."] },
          {
            label: "Split the fraction first",
            steps: ["{{k = (at)/t - 1/t = a - 1/t}}.", "{{1/t = a - k}}, so {{t = 1/(a - k)}}. Quicker, and it explains why the answer is so simple."],
          },
        ],
        commonError: "Trying to isolate t without first clearing the t in the denominator.",
        difficulty: "core",
        guideRef: "rearranging-twice",
        hints: [
          "t is in the numerator **and** the denominator. Clear the fraction first.",
          "You get kt = at − 1. Collect both t terms on the same side.",
          "Factorise out t and divide by the bracket.",
        ],
        strategy: "Collect, factorise, divide",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "solving-equations-p3-q10",
        question:
          "Mei's mean mark over n quizzes is 80. She then scores x marks in one more quiz, and her new mean mark is M, where\n\n{{M = (80n + x)/(n + 1)}}\n\nMake n the subject of the formula.",
        answer: { type: "expression", expr: "(x-M)/(M-80)", display: "{{n = (x - M)/(M - 80)}}" },
        traps: [
          {
            spec: { type: "expression", expr: "(x-M)/(80-M)" },
            feedback:
              "Sign slip. From Mn + M = 80n + x: Mn − 80n = x − M, so the divisor is (M − 80).",
          },
          {
            spec: { type: "expression", expr: "(x-1)/(M-80)" },
            feedback: "When you multiply by (n + 1), the M multiplies the 1 too: M(n + 1) = Mn **+ M**.",
          },
        ],
        solution: [
          "Multiply both sides by (n + 1): M(n + 1) = 80n + x.",
          "Expand: Mn + M = 80n + x.",
          "Collect the n terms: Mn − 80n = x − M.",
          "Factorise: n(M − 80) = x − M.",
          "Divide: {{n = (x - M)/(M - 80)}}.",
          "Sanity check: if she was averaging 80 and scored x = 100 to reach M = 84, then {{n = 16/4 = 4}} quizzes before. (Check: (320 + 100) ÷ 5 = 84 ✓)",
        ],
        commonError: "Expanding M(n + 1) as Mn + 1.",
        difficulty: "core",
        guideRef: "rearranging-twice",
        hints: [
          "Clear the fraction by multiplying both sides by (n + 1).",
          "After expanding, n appears in Mn and in 80n. Get both on the same side.",
          "Factorise out n, then divide.",
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
          "(a) Show that if {{(x + a)/(x - a) = b}}, then {{x = (a(b + 1))/(b - 1)}}.\n\n(b) Explain what goes wrong when b = 1, and why (for a ≠ 0) the equation {{(x + a)/(x - a) = 1}} has no solution.",
        marks: 4,
        modelAnswer:
          "(a) Multiply both sides by (x − a): x + a = b(x − a) = bx − ab. Collect the x terms on one side: a + ab = bx − x. Factorise both sides: a(1 + b) = x(b − 1). Divide by (b − 1): {{x = (a(b + 1))/(b - 1)}}, as required.\n\n(b) When b = 1 the formula would divide by b − 1 = 0, so it gives no value. Directly: {{(x + a)/(x - a) = 1}} means x + a = x − a, so a = −a, i.e. 2a = 0. If a ≠ 0 this is impossible, so there is no solution (the top is always 2a bigger than the bottom, so the fraction can never equal 1).",
        markScheme: [
          { point: "Clears the fraction: x + a = bx − ab", keywords: ["x + a = bx - ab", "b(x - a)", "bx - ab", "multiply"] },
          { point: "Collects x terms and factorises: x(b − 1) = a(b + 1)", keywords: ["x(b - 1)", "x(b-1)", "a(b + 1)", "a(1 + b)", "factorise"] },
          { point: "Divides to reach x = a(b + 1)/(b − 1)", keywords: ["a(b + 1)/(b - 1)", "divide", "b - 1"] },
          { point: "(b) b = 1 gives division by zero / x + a = x − a ⟹ a = 0, impossible for a ≠ 0", keywords: ["divide by zero", "division by zero", "a = -a", "2a = 0", "no solution", "impossible"] },
        ],
        solutions: [
          {
            label: "Collect and factorise",
            steps: ["x + a = bx − ab", "a + ab = bx − x", "a(b + 1) = x(b − 1)"],
          },
          {
            label: "Componendo trick (for interest)",
            steps: [
              "Write {{(x + a)/(x - a) = 1 + (2a)/(x - a)}}.",
              "So {{(2a)/(x - a) = b - 1}}, giving {{x - a = (2a)/(b - 1)}} and {{x = a + (2a)/(b - 1) = (a(b + 1))/(b - 1)}}.",
              "This form shows instantly why b = 1 is impossible: {{(2a)/(x - a)}} is never 0 when a ≠ 0.",
            ],
          },
        ],
        commonError: "Writing x + a = bx − a (multiplying only the x by b) — the whole bracket (x − a) is multiplied by b.",
        difficulty: "challenge",
        guideRef: "rearranging-twice",
        hints: [
          "Clear the fraction first. Multiply both sides by (x − a).",
          "x now appears on both sides. Collect the x terms together.",
          "Factorise x out — the bracket you get is the denominator of the answer.",
          "For (b), what does your formula do when b − 1 = 0? Then try solving the b = 1 equation directly.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "solving-equations-p3-q15",
        question:
          "The curve {{y = ax^2 + bx + c}} passes through the points (1, 3), (−1, 9) and (2, 6).\n\nFind the values of a, b and c. Give your answer as a, b, c (in that order).",
        answer: { type: "list", values: [2, -3, 4], ordered: true, display: "a = 2, b = −3, c = 4" },
        traps: [
          {
            spec: { type: "list", values: [2, 3, 4], ordered: true },
            feedback: "Check the sign of b: subtracting the second equation from the first gives 2b = 3 − 9 = −6, so b = −3.",
          },
        ],
        solution: [
          "Substitute each point into {{y = ax^2 + bx + c}}:",
          "(1, 3): a + b + c = 3 … (1)",
          "(−1, 9): a − b + c = 9 … (2)",
          "(2, 6): 4a + 2b + c = 6 … (3)",
          "(1) − (2): 2b = −6, so b = −3.",
          "Then (1) gives a + c = 6, and (3) gives 4a + c = 12.",
          "Subtract: 3a = 6, so a = 2, and c = 4.",
          "Check (2, 6): 2(4) − 3(2) + 4 = 8 − 6 + 4 = 6. ✓ So {{y = 2x^2 - 3x + 4}}.",
        ],
        solutions: [
          {
            label: "Use the symmetric pair first",
            steps: ["x = 1 and x = −1 give equations that differ only in the sign of b, so subtracting finds b at once.", "Then solve the remaining 2 × 2 system for a and c."],
          },
          {
            label: "Eliminate c twice",
            steps: ["(1) − (2): 2b = −6. (3) − (1): 3a + b = 3.", "So b = −3, 3a = 6, a = 2; then c = 3 − a − b = 4."],
          },
        ],
        commonError: "Substituting (−1)² as −1, which gives −a instead of +a in equation (2).",
        difficulty: "challenge",
        guideRef: "simultaneous-three",
        hints: [
          "Each point gives you one equation in a, b and c. Substitute x and y for each.",
          "Careful: at x = −1, {{x^2 = 1}}, so the equation is a − b + c = 9.",
          "Compare the equations for x = 1 and x = −1 — subtracting kills a and c at once.",
          "With b known, you have two equations left in a and c.",
        ],
        strategy: "Use symmetry",
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
            spec: { type: "number", value: 2 },
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
        question: "{{s = ((u + v)t)/2}}\n\nMake u the subject of the formula.",
        answer: { type: "expression", expr: "2s/t-v", display: "{{u = (2s)/t - v}} (or {{(2s - vt)/t}})" },
        traps: [
          {
            spec: { type: "expression", expr: "s/(2t)-v" },
            feedback: "To undo dividing by 2 you **multiply** by 2: 2s = (u + v)t.",
          },
          {
            spec: { type: "expression", expr: "2s/t+v" },
            feedback: "Sign slip: from {{(2s)/t = u + v}}, subtract v to get u on its own.",
          },
        ],
        solution: [
          "Multiply both sides by 2: 2s = (u + v)t.",
          "Divide both sides by t: {{(2s)/t = u + v}}.",
          "Subtract v: {{u = (2s)/t - v}}.",
        ],
        commonError: "Dividing by 2 instead of multiplying, or subtracting v before dividing by t.",
        difficulty: "warmup",
        guideRef: "rearranging-once",
        hints: ["Undo the operations on u in reverse order: the last thing done was dividing by 2.", "After multiplying by 2 and dividing by t you have u + v on its own."],
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
          "The diagram shows an isosceles triangle ABC with AB = AC. All lengths are in centimetres.\n\nThe perimeter of the triangle is 48 cm.\n\nWork out the area of the triangle. Give your answer in cm².",
        diagram: `<svg viewBox="0 0 430 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Isosceles triangle ABC with AB and AC each x plus 5 centimetres and base BC 2x minus 2 centimetres"><rect x="0" y="0" width="430" height="280" fill="#ffffff"/><polygon points="215,60 80,240 350,240" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><line x1="141" y1="148" x2="153" y2="157" stroke="#1f2937" stroke-width="2"/><line x1="289" y1="148" x2="277" y2="157" stroke="#1f2937" stroke-width="2"/><text x="215" y="50" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="64" y="252" font-size="14" font-family="sans-serif" fill="#1f2937">B</text><text x="356" y="252" font-size="14" font-family="sans-serif" fill="#1f2937">C</text><text x="120" y="140" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">(x + 5) cm</text><text x="310" y="140" font-size="13" font-family="sans-serif" fill="#1f2937">(x + 5) cm</text><text x="215" y="262" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(2x − 2) cm</text></svg>`,
        answer: { type: "number", value: 108, display: "108 cm²" },
        traps: [
          {
            spec: { type: "number", value: 10 },
            feedback: "x = 10 is only the first step. Find the side lengths (15, 15, 18), then the height, then the area.",
          },
          {
            spec: { type: "number", value: 135 },
            feedback:
              "You used the sloping side (15 cm) as the height. The height must be perpendicular to the base: use Pythagoras, {{sqrt(15^2 - 9^2) = 12}} cm.",
          },
        ],
        solution: [
          "Perimeter: (x + 5) + (x + 5) + (2x − 2) = 48.",
          "Collect: 4x + 8 = 48, so 4x = 40 and x = 10.",
          "Sides: AB = AC = 15 cm, BC = 18 cm. (Check: 15 + 15 + 18 = 48 ✓)",
          "The height from A bisects BC, so half the base is 9 cm. Height = {{sqrt(15^2 - 9^2) = sqrt(144) = 12}} cm.",
          "Area = {{1/2}} × 18 × 12 = 108 cm².",
        ],
        commonError: "Using the slant side as the height. In an isosceles triangle, drop the perpendicular from the apex to the midpoint of the base.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "Add the three side expressions and set the total equal to 48.",
          "With x = 10, write down all three side lengths.",
          "For the area you need the perpendicular height. Split the triangle down the middle and use Pythagoras.",
        ],
        strategy: "Draw a diagram",
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
            spec: { type: "number", value: 19 },
            feedback: "You multiplied the 1 on the right by 12 but not the −x. Every term gets multiplied by 12, so the right-hand side is 12 − 12x.",
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
          "For Sports Day, a CCA orders T-shirts and caps.\n\n4 T-shirts and 3 caps cost $133 in total.\n\n3 T-shirts and 4 caps cost $126 in total.\n\nThe CCA then orders 5 more T-shirts and 2 more caps at the same prices. Work out the cost of this extra order, in dollars.",
        answer: { type: "number", value: 140, display: "$140" },
        traps: [
          {
            spec: { type: "number", value: 119 },
            feedback: "You've swapped the prices. A T-shirt is $22 and a cap is $15 — check by substituting into 4t + 3c = 133.",
          },
          {
            spec: { type: "number", value: 37 },
            feedback: "$37 is the cost of one T-shirt plus one cap. Keep going: find each price, then 5 T-shirts + 2 caps.",
          },
        ],
        solution: [
          "Let t = price of a T-shirt and c = price of a cap: 4t + 3c = 133 … (1), 3t + 4c = 126 … (2).",
          "(1) × 4: 16t + 12c = 532. (2) × 3: 9t + 12c = 378.",
          "Subtract: 7t = 154, so t = 22.",
          "In (1): 88 + 3c = 133, so 3c = 45 and c = 15.",
          "Extra order: 5 × 22 + 2 × 15 = 110 + 30 = $140.",
        ],
        solutions: [
          {
            label: "Standard elimination",
            steps: ["Match the c coefficients (× 4 and × 3), subtract: t = 22, then c = 15.", "5(22) + 2(15) = 140."],
          },
          {
            label: "Add and subtract (symmetry)",
            steps: [
              "Add (1) and (2): 7t + 7c = 259, so t + c = 37.",
              "Subtract (2) from (1): t − c = 7.",
              "So t = 22, c = 15. Quicker, because the coefficients are swapped between the equations.",
            ],
          },
        ],
        commonError: "Finding t and c correctly, then giving one of them as the final answer instead of the cost of the new order.",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "Use t and c for the two prices and write two equations.",
          "The coefficients are swapped (4, 3 and 3, 4). What happens if you add the equations? Subtract them?",
          "Once you know t and c, answer the actual question: 5t + 2c.",
        ],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "written",
        id: "solving-equations-p4-q10",
        question:
          "The straight lines with equations x = 2y + 5 and 3x − 4y = 13 intersect at the point P.\n\nShow that P lies on the line 2x + 3y = 3.",
        marks: 3,
        modelAnswer:
          "At P both equations hold. Substitute x = 2y + 5 into 3x − 4y = 13: 3(2y + 5) − 4y = 13, so 6y + 15 − 4y = 13, 2y = −2 and y = −1. Then x = 2(−1) + 5 = 3, so P is (3, −1). Check 2x + 3y at P: 2(3) + 3(−1) = 6 − 3 = 3, which equals the right-hand side, so P lies on the line 2x + 3y = 3.",
        markScheme: [
          { point: "Substitutes to eliminate a variable: 3(2y + 5) − 4y = 13", keywords: ["3(2y + 5)", "3(2y+5)", "6y + 15", "2y = -2", "substitute"] },
          { point: "Finds P = (3, −1)", keywords: ["(3, -1)", "(3,-1)", "(3, −1)", "x = 3", "y = -1", "y = −1"] },
          { point: "Substitutes P into 2x + 3y to get 3 and concludes P lies on the line", keywords: ["2(3) + 3(-1)", "6 - 3 = 3", "6 − 3 = 3", "= 3", "lies on"] },
        ],
        commonError: "Solving correctly but not finishing: a 'show that' must substitute into 2x + 3y and state the conclusion.",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "The point where two lines meet satisfies both equations — solve them simultaneously.",
          "One equation already gives x in terms of y. Substitute it into the other (in brackets).",
          "With P's coordinates, test whether 2x + 3y really equals 3.",
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
        question: "Make x the subject of {{y = (x^2 + 3)/(2x^2 - 1)}}, where x > 0.",
        answer: { type: "expression", expr: "sqrt((y+3)/(2y-1))", display: "{{x = sqrt((y + 3)/(2y - 1))}}" },
        traps: [
          {
            spec: { type: "expression", expr: "(y+3)/(2y-1)" },
            feedback: "That's {{x^2}}. Finish by taking the (positive) square root of the whole fraction.",
          },
          {
            spec: { type: "expression", expr: "sqrt((y-3)/(2y-1))" },
            feedback: "Check the constants: from {{2x^2 y - y = x^2 + 3}} you get {{2x^2 y - x^2 = y + 3}}.",
          },
        ],
        solution: [
          "Multiply by {{(2x^2 - 1)}}: {{y(2x^2 - 1) = x^2 + 3}}.",
          "Expand: {{2x^2 y - y = x^2 + 3}}.",
          "Collect the {{x^2}} terms: {{2x^2 y - x^2 = y + 3}}.",
          "Factorise: {{x^2(2y - 1) = y + 3}}, so {{x^2 = (y + 3)/(2y - 1)}}.",
          "Square root (x > 0): {{x = sqrt((y + 3)/(2y - 1))}}.",
        ],
        solutions: [
          {
            label: "Treat x² as one unknown",
            steps: ["Let {{w = x^2}}: {{y = (w + 3)/(2w - 1)}} — a standard 'appears twice' rearrangement.", "{{w = (y + 3)/(2y - 1)}}, then {{x = sqrt(w)}}."],
          },
        ],
        commonError: "Square-rooting too early, or trying to take the square root of each term separately.",
        difficulty: "challenge",
        guideRef: "rearranging-twice",
        hints: [
          "x only ever appears as {{x^2}}. Could you treat {{x^2}} as a single 'block'?",
          "Clear the fraction, then collect the {{x^2}} terms on one side.",
          "Factorise out {{x^2}}, divide, and only then take the square root.",
        ],
        strategy: "Make it simpler",
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
