// ---------------------------------------------------------------------------
// Graphs of Functions — Practice Papers 3 and 4.
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
    id: "graphs-of-functions-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "graphs-of-functions-p3-q01",
        question:
          "Here is part of a table of values for the cubic {{y = x^3 - 2x + 1}}.\n\n| x | −2 | −1 | 0 | 1 | 1.5 |\n|---|---|---|---|---|---|\n| y |  | 2 | 1 | 0 |  |\n\nWork out the value of y when x = −2 and the value of y when x = 1.5. Give the value for x = −2 first.",
        answer: { type: "list", values: [-3, 1.375], ordered: true, display: "−3 and 1.375" },
        traps: [
          {
            spec: { type: "list", values: [13, 1.375], ordered: true },
            feedback: "The cube of a negative number is negative: {{(-2)^3 = -8}}, not +8. So y = −8 + 4 + 1 = −3.",
          },
          {
            spec: { type: "list", values: [-11, 1.375], ordered: true },
            feedback: "Sign slip in the middle term: −2 × (−2) = **+4**, not −4. So y = −8 + 4 + 1 = −3.",
          },
        ],
        solution: [
          "x = −2: {{(-2)^3 - 2(-2) + 1 = -8 + 4 + 1 = -3}}.",
          "x = 1.5: {{1.5^3 - 2(1.5) + 1 = 3.375 - 3 + 1 = 1.375}}.",
          "A cubic table has no symmetry to check against, so substitute each value twice. The y-values −3, 2, 1, 0, 1.375 rise, fall, then rise again — the S-shape of a positive cubic.",
        ],
        commonError: "Typing −2³ or (−2)³ carelessly and getting +8: an odd power of a negative number stays negative.",
        difficulty: "warmup",
        guideRef: "recognising-graphs",
        hints: [
          "Substitute carefully, putting negative numbers in brackets: {{(-2)^3 - 2(-2) + 1}}.",
          "{{(-2)^3 = -8}} and −2 × (−2) = +4.",
        ],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "mcq",
        id: "graphs-of-functions-p3-q02",
        question: "The sketch shows a curve. Which of these could be the equation of the curve?",
        diagram: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch of a curve in two separate pieces: one in the top-right quadrant and one in the bottom-left quadrant, each approaching both axes but never touching them"><rect x="0" y="0" width="300" height="240" fill="#ffffff"/><line x1="20" y1="120" x2="286" y2="120" stroke="#334155" stroke-width="1.5"/><line x1="150" y1="220" x2="150" y2="14" stroke="#334155" stroke-width="1.5"/><text x="288" y="124" font-size="13" font-family="sans-serif" fill="#1f2937">x</text><text x="155" y="14" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><text x="143.5" y="130" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">O</text><path d="M160.8 20 L162.3 32.1 L163.8 41.6 L165.3 49.2 L166.8 55.5 L168.3 60.7 L169.8 65.2 L171.3 69 L172.8 72.4 L174.2 75.3 L175.7 77.9 L177.2 80.2 L178.7 82.3 L180.2 84.1 L181.7 85.8 L183.2 87.3 L184.7 88.8 L186.2 90 L187.6 91.2 L189.1 92.3 L190.6 93.3 L192.1 94.3 L193.6 95.2 L195.1 96 L196.6 96.7 L198.1 97.5 L199.6 98.1 L201.1 98.8 L202.5 99.4 L204 99.9 L205.5 100.5 L207 101 L208.5 101.5 L210 101.9 L211.5 102.4 L213 102.8 L214.5 103.2 L215.9 103.6 L217.4 103.9 L218.9 104.3 L220.4 104.6 L221.9 104.9 L223.4 105.2 L224.9 105.5 L226.4 105.8 L227.9 106.1 L229.4 106.3 L230.8 106.6 L232.3 106.8 L233.8 107.1 L235.3 107.3 L236.8 107.5 L238.3 107.7 L239.8 107.9 L241.3 108.1 L242.8 108.3 L244.2 108.5 L245.7 108.7 L247.2 108.9 L248.7 109 L250.2 109.2 L251.7 109.3 L253.2 109.5 L254.7 109.7 L256.2 109.8 L257.7 109.9 L259.1 110.1 L260.6 110.2 L262.1 110.3 L263.6 110.5 L265.1 110.6 L266.6 110.7 L268.1 110.8 L269.6 110.9 L271.1 111.1 L272.6 111.2 L274 111.3 L275.5 111.4 L277 111.5 L278.5 111.6 L280 111.7" stroke="#1d4ed8" stroke-width="2" fill="none"/><path d="M20 128.3 L21.5 128.4 L23 128.5 L24.5 128.6 L26 128.7 L27.4 128.8 L28.9 128.9 L30.4 129.1 L31.9 129.2 L33.4 129.3 L34.9 129.4 L36.4 129.5 L37.9 129.7 L39.4 129.8 L40.9 129.9 L42.3 130.1 L43.8 130.2 L45.3 130.3 L46.8 130.5 L48.3 130.7 L49.8 130.8 L51.3 131 L52.8 131.1 L54.3 131.3 L55.8 131.5 L57.2 131.7 L58.7 131.9 L60.2 132.1 L61.7 132.3 L63.2 132.5 L64.7 132.7 L66.2 132.9 L67.7 133.2 L69.2 133.4 L70.6 133.7 L72.1 133.9 L73.6 134.2 L75.1 134.5 L76.6 134.8 L78.1 135.1 L79.6 135.4 L81.1 135.7 L82.6 136.1 L84.1 136.4 L85.5 136.8 L87 137.2 L88.5 137.6 L90 138.1 L91.5 138.5 L93 139 L94.5 139.5 L96 140.1 L97.5 140.6 L98.9 141.2 L100.4 141.9 L101.9 142.5 L103.4 143.3 L104.9 144 L106.4 144.8 L107.9 145.7 L109.4 146.7 L110.9 147.7 L112.4 148.8 L113.8 150 L115.3 151.2 L116.8 152.7 L118.3 154.2 L119.8 155.9 L121.3 157.7 L122.8 159.8 L124.3 162.1 L125.8 164.7 L127.3 167.6 L128.7 171 L130.2 174.8 L131.7 179.3 L133.2 184.5 L134.7 190.8 L136.2 198.4 L137.7 207.9 L139.2 220" stroke="#1d4ed8" stroke-width="2" fill="none"/></svg>`,
        options: ["{{y = -3/x}}", "{{y = 3/x}}", "{{y = 3^x}}", "{{y = x^3}}"],
        answerIndex: 1,
        explanation:
          "The curve has two separate branches that hug both axes without touching them — the signature of a reciprocal graph {{y = k/x}}. The branches are in the top-right and bottom-left quadrants, so k is positive: {{y = 3/x}} (e.g. x = 1 gives y = 3). {{y = -3/x}} has its branches in the top-left and bottom-right. {{y = 3^x}} is one unbroken curve that crosses the y-axis at 1. {{y = x^3}} is one unbroken curve through the origin.",
        difficulty: "warmup",
        guideRef: "recognising-graphs",
        hints: [
          "Is the curve one piece or two? Does it ever touch an axis?",
          "Two branches that approach both axes means a reciprocal graph. Which quadrants are the branches in?",
        ],
        strategy: "Eliminate options",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "graphs-of-functions-p3-q03",
        question: "Write down the coordinates of the turning point of the curve with equation {{y = (x - 4)^2 - 7}}. Give your answer as (x, y).",
        answer: { type: "list", values: [4, -7], ordered: true, display: "(4, −7)" },
        traps: [
          {
            spec: { type: "list", values: [-4, -7], ordered: true },
            feedback:
              "Sign slip on the x-coordinate. The bracket {{(x - 4)^2}} is smallest (zero) when x = **4**, not −4. The x-coordinate is the value that makes the bracket zero.",
          },
          {
            spec: { type: "list", values: [4, 7], ordered: true },
            feedback: "When x = 4 the bracket is 0, so y = 0 − 7 = **−7**. The q in {{(x + p)^2 + q}} keeps its own sign.",
          },
        ],
        solution: [
          "{{(x - 4)^2 >= 0}}, and it equals 0 only when x = 4.",
          "So the least value of y is 0 − 7 = −7, when x = 4.",
          "Turning point (a minimum) = (4, −7).",
        ],
        commonError: "Writing (−4, −7): the x-coordinate is the value that makes the bracket zero, so its sign flips from the one in the bracket.",
        difficulty: "warmup",
        guideRef: "sketching-quadratics",
        hints: ["What value of x makes {{(x - 4)^2}} as small as possible?", "The smallest a square can be is 0."],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "graphs-of-functions-p3-q04",
        question: "The point P(2, 6) lies on the curve y = f(x).\n\nWrite down the coordinates of the image of P on the curve {{y = 1/2 f(x)}}. Give your answer as (x, y).",
        answer: { type: "list", values: [2, 3], ordered: true, display: "(2, 3)" },
        traps: [
          {
            spec: { type: "list", values: [1, 6], ordered: true },
            feedback: "The {{1/2}} is *outside* the bracket, so it acts on y, not x. Halve the y-coordinate: 6 → 3.",
          },
          {
            spec: { type: "list", values: [2, 12], ordered: true },
            feedback: "Multiplying by {{1/2}} halves the y-values — doubling would be y = 2f(x).",
          },
        ],
        solution: [
          "{{y = 1/2 f(x)}} is a stretch parallel to the y-axis with scale factor {{1/2}}: every y-coordinate is halved and x stays the same.",
          "P(2, 6) → (2, {{1/2}} × 6) = (2, 3).",
          "Check: at x = 2, {{1/2 f(2) = 1/2 * 6 = 3}}. ✓",
        ],
        commonError: "Changing the x-coordinate for a number outside the bracket.",
        difficulty: "warmup",
        guideRef: "graph-transformations",
        hints: [
          "Is the {{1/2}} inside or outside the bracket? So does it change x or y?",
          "At x = 2, what is {{1/2}} × f(2)?",
        ],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "graphs-of-functions-p3-q05",
        question:
          "By writing {{x^2 + 6x + 11}} in the form {{(x + p)^2 + q}}, find the minimum value of {{x^2 + 6x + 11}} and the value of x at which it occurs.\n\nGive the minimum value first, then the value of x.",
        answer: { type: "list", values: [2, -3], ordered: true, display: "minimum value 2, when x = −3" },
        traps: [
          {
            spec: { type: "list", values: [-3, 2], ordered: true },
            feedback: "Right numbers, wrong order: the question asks for the minimum *value* (the y-value, 2) first, then x = −3.",
          },
          {
            spec: { type: "list", values: [2, 3], ordered: true },
            feedback: "The bracket {{(x + 3)^2}} is zero when x = **−3**, not 3.",
          },
          {
            spec: { type: "list", values: [20, -3], ordered: true },
            feedback: "Halve 6 to get 3, then *subtract* 3² = 9: {{(x + 3)^2 - 9 + 11 = (x + 3)^2 + 2}}. You added the 9.",
          },
        ],
        solution: [
          "Half of 6 is 3, so start with {{(x + 3)^2 = x^2 + 6x + 9}}.",
          "{{x^2 + 6x + 11 = (x + 3)^2 - 9 + 11 = (x + 3)^2 + 2}}.",
          "{{(x + 3)^2 >= 0}}, so the expression is at least 2, with equality when x + 3 = 0, i.e. x = −3.",
          "Minimum value 2, when x = −3.",
        ],
        commonError: "Adding the 9 instead of subtracting it when completing the square.",
        difficulty: "core",
        guideRef: "sketching-quadratics",
        hints: [
          "Halve the coefficient of x to get the number in the bracket.",
          "{{(x + 3)^2}} gives you an extra +9 that you must take away again.",
          "A square is never negative, so the least it can be is 0. When does that happen?",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "graphs-of-functions-p3-q06",
        question:
          "Arjun has drawn the graph of {{y = x^2 - 3x}}.\n\nHe wants to solve the equation {{x^2 + x - 4 = 0}} by drawing a straight line on the same axes.\n\nFind the equation of the straight line he should draw. Give your answer in the form y = mx + c.",
        answer: { type: "equation", eq: "y=-4x+4", display: "y = −4x + 4" },
        traps: [
          {
            spec: { type: "equation", eq: "y=4x-4" },
            feedback: "Sign slip. You need {{x^2 - 3x}} on the left, so *subtract* 4x and *add* 4 on both sides of {{x^2 + x - 4 = 0}}: {{x^2 - 3x = -4x + 4}}.",
          },
          {
            spec: { type: "equation", eq: "y=-x+4" },
            feedback: "That rearranges {{x^2 = -x + 4}}, which needs the graph of {{y = x^2}}. Arjun's curve is {{y = x^2 - 3x}}, so the left side must be {{x^2 - 3x}}.",
          },
        ],
        solution: [
          "Rearrange the equation so one side is exactly the curve, {{x^2 - 3x}}.",
          "{{x^2 + x - 4 = 0}} ⟹ {{x^2 - 3x = -4x + 4}} (subtract 4x and add 4 on both sides).",
          "So draw y = −4x + 4; the x-coordinates where it crosses the curve are the solutions.",
        ],
        solutions: [
          {
            label: "Subtract the equations",
            steps: [
              "Line = curve − (equation): {{(x^2 - 3x) - (x^2 + x - 4) = -4x + 4}}.",
              "So y = −4x + 4.",
            ],
          },
        ],
        commonError: "Rearranging to make y equal to something other than the curve already drawn.",
        difficulty: "core",
        guideRef: "graphical-solutions",
        hints: [
          "You want an equation of the form {{x^2 - 3x = (something)}}.",
          "Starting from {{x^2 + x - 4 = 0}}, what do you do to both sides to turn +x into −3x?",
          "Subtract 4x and add 4 on both sides.",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "graphs-of-functions-p3-q07",
        question:
          "The speed–time graph shows Mei's MRT train between two stations.\n\nWork out the total distance the train travels. Give your answer in metres.",
        diagram: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Speed-time graph: speed rises steadily from 0 to 12 m/s between t = 0 and t = 8 seconds, stays at 12 m/s until t = 28 seconds, then falls steadily to 0 at t = 34 seconds"><rect x="0" y="0" width="400" height="260" fill="#ffffff"/><path d="M45 25V220M62.5 25V220M80 25V220M97.5 25V220M115 25V220M132.5 25V220M150 25V220M167.5 25V220M185 25V220M202.5 25V220M220 25V220M237.5 25V220M255 25V220M272.5 25V220M290 25V220M307.5 25V220M325 25V220M342.5 25V220M360 25V220M45 220H360M45 192.1H360M45 164.3H360M45 136.4H360M45 108.6H360M45 80.7H360M45 52.9H360M45 25H360" stroke="#e2e8f0" stroke-width="1" fill="none"/><line x1="45" y1="220" x2="366" y2="220" stroke="#334155" stroke-width="1.5"/><line x1="45" y1="220" x2="45" y2="19" stroke="#334155" stroke-width="1.5"/><text x="368" y="224" font-size="13" font-family="sans-serif" fill="#1f2937">t (s)</text><text x="50" y="19" font-size="13" font-family="sans-serif" fill="#1f2937">v (m/s)</text><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="45" y="234">0</text><text x="80" y="234">4</text><text x="115" y="234">8</text><text x="150" y="234">12</text><text x="185" y="234">16</text><text x="220" y="234">20</text><text x="255" y="234">24</text><text x="290" y="234">28</text><text x="325" y="234">32</text><text x="360" y="234">36</text></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="end"><text x="41" y="196.1">2</text><text x="41" y="168.3">4</text><text x="41" y="140.4">6</text><text x="41" y="112.6">8</text><text x="41" y="84.7">10</text><text x="41" y="56.9">12</text><text x="41" y="29">14</text></g><path d="M45 220 L115 52.9 L290 52.9 L342.5 220" stroke="#1d4ed8" stroke-width="2" fill="none"/></svg>`,
        answer: { type: "number", value: 324, display: "324 m" },
        traps: [
          {
            spec: { type: "number", value: 408 },
            feedback: "12 × 34 treats the whole journey as a rectangle at full speed. The speeding-up and slowing-down parts are triangles: halve them.",
          },
          {
            spec: { type: "number", value: 240 },
            feedback: "That's only the constant-speed part. Add the areas of the two triangles (48 m and 36 m) too.",
          },
        ],
        solution: [
          "Distance = area under a speed–time graph.",
          "Speeding up (triangle): {{1/2 * 8 * 12 = 48}} m.",
          "Constant speed (rectangle): 20 × 12 = 240 m (from t = 8 to t = 28).",
          "Slowing down (triangle): {{1/2 * 6 * 12 = 36}} m.",
          "Total = 48 + 240 + 36 = 324 m.",
        ],
        solutions: [
          {
            label: "One trapezium",
            steps: [
              "The whole shape is a trapezium with parallel sides 20 (top) and 34 (bottom), height 12.",
              "Area = {{1/2 (20 + 34) * 12 = 27 * 12 = 324}} m. Quicker — one calculation.",
            ],
          },
        ],
        commonError: "Treating the sloping sections as if the train were at full speed throughout.",
        difficulty: "core",
        guideRef: "real-life-graphs",
        hints: [
          "What does the area under a speed–time graph represent?",
          "Split the area into two triangles and a rectangle — or spot that it is one trapezium.",
          "The top side runs from t = 8 to t = 28, which is 20 s long.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "graphs-of-functions-p3-q08",
        question:
          "Zara says: \"The graph of {{y = 2^x}} must cross the x-axis somewhere to the left of the y-axis, because the values keep getting smaller.\"\n\nExplain why Zara is wrong. State the equation of the asymptote of {{y = 2^x}} and the point where every graph {{y = a^x}} (a > 0) crosses the y-axis.",
        marks: 3,
        modelAnswer:
          "For negative x, {{2^x}} is a fraction: {{2^(-1) = 1/2}}, {{2^(-2) = 1/4}}, {{2^(-10) = 1/1024}}, and so on. Each value is half the one before, so it gets closer and closer to 0 — but halving a positive number always leaves a positive number, so {{2^x}} is never 0 (or negative). The graph never reaches the x-axis: the x-axis, y = 0, is an asymptote, so Zara is wrong. Every graph {{y = a^x}} crosses the y-axis at (0, 1), because {{a^0 = 1}} for any a > 0.",
        markScheme: [
          { point: "For negative x, 2^x = 1/2^n is a positive fraction (e.g. 2^(−1) = 1/2), so it is always positive / never 0", keywords: ["positive", "never 0", "never zero", "1/2", "fraction", "halving", "always above"] },
          { point: "So it approaches but never reaches the x-axis: the asymptote is y = 0", keywords: ["asymptote", "y = 0", "y=0", "never reaches", "never touches", "closer"] },
          { point: "Every y = a^x passes through (0, 1) because a^0 = 1", keywords: ["(0, 1)", "(0,1)", "a^0 = 1", "a^0=1", "2^0 = 1", "y = 1"] },
        ],
        commonError: "Saying 'it gets very small so it must reach 0' — small positive numbers are still positive.",
        difficulty: "core",
        guideRef: "recognising-graphs",
        hints: [
          "Work out {{2^(-1)}}, {{2^(-2)}} and {{2^(-3)}}. What sort of numbers are they?",
          "Can halving a positive number ever give 0 or a negative number?",
          "What is {{a^0}} for any positive a?",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "graphs-of-functions-p3-q09",
        question:
          "{{f(x) = x^2 + 4x}}. The curve y = f(x) has a turning point at (−2, −4).\n\nFind the coordinates of the turning point of the curve y = f(x − 3) + 2. Give your answer as (x, y).",
        answer: { type: "list", values: [1, -2], ordered: true, display: "(1, −2)" },
        traps: [
          {
            spec: { type: "list", values: [-5, -2], ordered: true },
            feedback: "f(x − 3) moves the curve 3 to the **right**, not the left: −2 + 3 = 1.",
          },
          {
            spec: { type: "list", values: [1, -4], ordered: true },
            feedback: "You did the horizontal move but forgot the +2 outside the bracket, which moves the curve up 2.",
          },
        ],
        solution: [
          "f(x − 3): translate 3 units right → (−2 + 3, −4) = (1, −4).",
          "+ 2: translate 2 units up → (1, −4 + 2) = (1, −2).",
          "The translation is by the vector with components 3 and 2.",
        ],
        solutions: [
          {
            label: "Complete the square",
            steps: [
              "{{f(x) = (x + 2)^2 - 4}}.",
              "{{f(x - 3) + 2 = (x - 3 + 2)^2 - 4 + 2 = (x - 1)^2 - 2}}.",
              "Turning point (1, −2). ✓",
            ],
          },
        ],
        commonError: "Moving left for f(x − 3) because of the minus sign.",
        difficulty: "core",
        guideRef: "graph-transformations",
        hints: [
          "Deal with the two changes separately: inside the bracket, then outside.",
          "Inside: x − 3 moves the graph horizontally. Which way?",
          "Outside: + 2 moves every point up 2.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "graphs-of-functions-p3-q10",
        question:
          "The graph of {{y = x^2 - 2x - 3}} is drawn below.\n\nUse the graph to solve the equation {{x^2 - 2x - 8 = 0}}. Give both solutions.",
        diagram: `<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y = x squared minus 2x minus 3 drawn for x from -3 to 5 on a 1-unit grid; it crosses the x-axis at -1 and 3 and has its lowest point at (1, -4)"><rect x="0" y="0" width="400" height="320" fill="#ffffff"/><path d="M40 20V295M80 20V295M120 20V295M160 20V295M200 20V295M240 20V295M280 20V295M320 20V295M360 20V295M40 295H360M40 279.7H360M40 264.4H360M40 249.2H360M40 233.9H360M40 218.6H360M40 203.3H360M40 188.1H360M40 172.8H360M40 157.5H360M40 142.2H360M40 126.9H360M40 111.7H360M40 96.4H360M40 81.1H360M40 65.8H360M40 50.6H360M40 35.3H360M40 20H360" stroke="#e2e8f0" stroke-width="1" fill="none"/><line x1="40" y1="218.6" x2="366" y2="218.6" stroke="#334155" stroke-width="1.5"/><line x1="160" y1="295" x2="160" y2="14" stroke="#334155" stroke-width="1.5"/><text x="368" y="222.6" font-size="13" font-family="sans-serif" fill="#1f2937">x</text><text x="165" y="14" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="40" y="232.6">−3</text><text x="80" y="232.6">−2</text><text x="117" y="232.6" text-anchor="end">−1</text><text x="200" y="232.6">1</text><text x="240" y="232.6">2</text><text x="280" y="232.6">3</text><text x="320" y="232.6">4</text><text x="360" y="232.6">5</text></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="end"><text x="156" y="283.7">−4</text><text x="156" y="253.2">−2</text><text x="156" y="192.1">2</text><text x="156" y="161.5">4</text><text x="156" y="130.9">6</text><text x="156" y="100.4">8</text><text x="156" y="69.8">10</text><text x="156" y="39.3">12</text></g><path d="M40 35.3 L44 47.3 L48 59.1 L52 70.6 L56 81.7 L60 92.6 L64 103.1 L68 113.3 L72 123.3 L76 132.9 L80 142.2 L84 151.2 L88 159.9 L92 168.3 L96 176.4 L100 184.2 L104 191.7 L108 198.9 L112 205.8 L116 212.3 L120 218.6 L124 224.6 L128 230.2 L132 235.6 L136 240.6 L140 245.3 L144 249.8 L148 253.9 L152 257.7 L156 261.2 L160 264.4 L164 267.3 L168 269.9 L172 272.2 L176 274.2 L180 275.9 L184 277.3 L188 278.3 L192 279.1 L196 279.6 L200 279.7 L204 279.6 L208 279.1 L212 278.3 L216 277.3 L220 275.9 L224 274.2 L228 272.2 L232 269.9 L236 267.3 L240 264.4 L244 261.2 L248 257.7 L252 253.9 L256 249.8 L260 245.3 L264 240.6 L268 235.6 L272 230.2 L276 224.6 L280 218.6 L284 212.3 L288 205.8 L292 198.9 L296 191.7 L300 184.2 L304 176.4 L308 168.3 L312 159.9 L316 151.2 L320 142.2 L324 132.9 L328 123.3 L332 113.3 L336 103.1 L340 92.6 L344 81.7 L348 70.6 L352 59.1 L356 47.3 L360 35.3" stroke="#1d4ed8" stroke-width="2" fill="none"/><text x="332" y="75" font-size="12" font-family="sans-serif" fill="#1d4ed8" text-anchor="end">y = x² − 2x − 3</text></svg>`,
        answer: { type: "list", values: [-2, 4], ordered: false, display: "x = −2 or x = 4" },
        traps: [
          {
            spec: { type: "list", values: [-1, 3], ordered: false },
            feedback:
              "Those are the solutions of {{x^2 - 2x - 3 = 0}} (where the curve crosses the x-axis). Rewrite the equation as {{x^2 - 2x - 3 = 5}} and read where the curve meets y = 5.",
          },
        ],
        solution: [
          "Make the left side match the curve: {{x^2 - 2x - 8 = 0}} ⟹ {{x^2 - 2x - 3 = 5}} (add 5 to both sides).",
          "Draw the horizontal line y = 5.",
          "It meets the curve at x = −2 and x = 4.",
          "Check: {{(-2)^2 - 2(-2) - 8 = 4 + 4 - 8 = 0}} ✓ and {{16 - 8 - 8 = 0}} ✓.",
        ],
        commonError: "Reading off the x-intercepts of the drawn curve instead of drawing the extra line.",
        difficulty: "core",
        guideRef: "graphical-solutions",
        hints: [
          "The curve is {{y = x^2 - 2x - 3}}. How do you turn {{x^2 - 2x - 8 = 0}} into '{{x^2 - 2x - 3 =}} something'?",
          "Add 5 to both sides.",
          "Draw y = 5 and read the x-coordinates where it meets the curve.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "graphs-of-functions-p3-q11",
        question:
          "A ball rolls down a ramp. The graph shows its distance d metres from the top after t seconds.\n\nA tangent has been drawn to the curve at P, where t = 2. It passes through the points (1, 0) and (4, 12).\n\nUse the tangent to estimate the speed of the ball at t = 2. Give your answer in m/s.",
        diagram: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Distance–time curve d = t squared for t from 0 to 5 seconds. A tangent is drawn at the point (2, 4); it passes through (1, 0) and (4, 12)."><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><line x1="44" y1="30" x2="44" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="82" y1="30" x2="82" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="120" y1="30" x2="120" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="158" y1="30" x2="158" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="196" y1="30" x2="196" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="234" y1="30" x2="234" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="272" y1="30" x2="272" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="310" y1="30" x2="310" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="348" y1="30" x2="348" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="386" y1="30" x2="386" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="424" y1="30" x2="424" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="260" x2="424" y2="260" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="237" x2="424" y2="237" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="214" x2="424" y2="214" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="191" x2="424" y2="191" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="168" x2="424" y2="168" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="145" x2="424" y2="145" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="122" x2="424" y2="122" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="99" x2="424" y2="99" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="76" x2="424" y2="76" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="53" x2="424" y2="53" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="30" x2="424" y2="30" stroke="#cbd5e1" stroke-width="0.8"/><line x1="44" y1="260" x2="424" y2="260" stroke="#1f2937" stroke-width="1.4"/><line x1="44" y1="30" x2="44" y2="260" stroke="#1f2937" stroke-width="1.4"/><polyline points="44,260 46.4,260 48.8,260 51.1,259.9 53.5,259.9 55.9,259.8 58.3,259.7 60.6,259.6 63,259.4 65.4,259.3 67.8,259.1 70.1,258.9 72.5,258.7 74.9,258.5 77.3,258.2 79.6,258 82,257.7 84.4,257.4 86.8,257.1 89.1,256.8 91.5,256.4 93.9,256 96.3,255.7 98.6,255.2 101,254.8 103.4,254.4 105.8,253.9 108.1,253.5 110.5,253 112.9,252.4 115.3,251.9 117.6,251.4 120,250.8 122.4,250.2 124.8,249.6 127.1,249 129.5,248.4 131.9,247.7 134.3,247 136.6,246.3 139,245.6 141.4,244.9 143.8,244.2 146.1,243.4 148.5,242.6 150.9,241.8 153.3,241 155.6,240.2 158,239.3 160.4,238.4 162.8,237.5 165.1,236.6 167.5,235.7 169.9,234.8 172.3,233.8 174.6,232.8 177,231.8 179.4,230.8 181.8,229.8 184.1,228.7 186.5,227.7 188.9,226.6 191.3,225.5 193.6,224.3 196,223.2 198.4,222 200.8,220.9 203.1,219.7 205.5,218.5 207.9,217.2 210.3,216 212.6,214.7 215,213.4 217.4,212.1 219.8,210.8 222.1,209.5 224.5,208.1 226.9,206.7 229.3,205.3 231.6,203.9 234,202.5 236.4,201.1 238.7,199.6 241.1,198.1 243.5,196.6 245.9,195.1 248.3,193.6 250.6,192 253,190.4 255.4,188.8 257.8,187.2 260.1,185.6 262.5,184 264.9,182.3 267.3,180.6 269.6,178.9 272,177.2 274.4,175.5 276.8,173.7 279.1,171.9 281.5,170.2 283.9,168.4 286.3,166.5 288.6,164.7 291,162.8 293.4,160.9 295.8,159.1 298.1,157.1 300.5,155.2 302.9,153.3 305.3,151.3 307.6,149.3 310,147.3 312.4,145.3 314.8,143.2 317.1,141.2 319.5,139.1 321.9,137 324.3,134.9 326.6,132.8 329,130.6 331.4,128.5 333.8,126.3 336.1,124.1 338.5,121.9 340.9,119.6 343.3,117.4 345.6,115.1 348,112.8 350.4,110.5 352.8,108.2 355.1,105.8 357.5,103.5 359.9,101.1 362.3,98.7 364.6,96.3 367,93.8 369.4,91.4 371.8,88.9 374.1,86.4 376.5,83.9 378.9,81.4 381.3,78.8 383.6,76.3 386,73.7 388.4,71.1 390.8,68.5 393.1,65.9 395.5,63.2 397.9,60.5 400.3,57.9 402.6,55.1 405,52.4 407.4,49.7 409.8,46.9 412.1,44.2 414.5,41.4 416.9,38.5 419.3,35.7 421.6,32.9 424,30" fill="none" stroke="#2563eb" stroke-width="2.4"/><polyline points="120,260 121.9,259.1 123.8,258.2 125.7,257.2 127.6,256.3 129.5,255.4 131.4,254.5 133.3,253.6 135.2,252.6 137.1,251.7 139,250.8 140.9,249.9 142.8,249 144.7,248 146.6,247.1 148.5,246.2 150.4,245.3 152.3,244.4 154.2,243.4 156.1,242.5 158,241.6 159.9,240.7 161.8,239.8 163.7,238.8 165.6,237.9 167.5,237 169.4,236.1 171.3,235.2 173.2,234.2 175.1,233.3 177,232.4 178.9,231.5 180.8,230.6 182.7,229.6 184.6,228.7 186.5,227.8 188.4,226.9 190.3,226 192.2,225 194.1,224.1 196,223.2 197.9,222.3 199.8,221.4 201.7,220.4 203.6,219.5 205.5,218.6 207.4,217.7 209.3,216.8 211.2,215.8 213.1,214.9 215,214 216.9,213.1 218.8,212.2 220.7,211.2 222.6,210.3 224.5,209.4 226.4,208.5 228.3,207.6 230.2,206.6 232.1,205.7 234,204.8 235.9,203.9 237.8,203 239.7,202 241.6,201.1 243.5,200.2 245.4,199.3 247.3,198.4 249.2,197.4 251.1,196.5 253,195.6 254.9,194.7 256.8,193.8 258.7,192.8 260.6,191.9 262.5,191 264.4,190.1 266.3,189.2 268.2,188.2 270.1,187.3 272,186.4 273.9,185.5 275.8,184.6 277.7,183.6 279.6,182.7 281.5,181.8 283.4,180.9 285.3,180 287.2,179 289.1,178.1 291,177.2 292.9,176.3 294.8,175.4 296.7,174.4 298.6,173.5 300.5,172.6 302.4,171.7 304.3,170.8 306.2,169.8 308.1,168.9 310,168 311.9,167.1 313.8,166.2 315.7,165.2 317.6,164.3 319.5,163.4 321.4,162.5 323.3,161.6 325.2,160.6 327.1,159.7 329,158.8 330.9,157.9 332.8,157 334.7,156 336.6,155.1 338.5,154.2 340.4,153.3 342.3,152.4 344.2,151.4 346.1,150.5 348,149.6 349.9,148.7 351.8,147.8 353.7,146.8 355.6,145.9 357.5,145 359.4,144.1 361.3,143.2 363.2,142.2 365.1,141.3 367,140.4 368.9,139.5 370.8,138.6 372.7,137.6 374.6,136.7 376.5,135.8 378.4,134.9 380.3,134 382.2,133 384.1,132.1 386,131.2 387.9,130.3 389.8,129.4 391.7,128.4 393.6,127.5 395.5,126.6 397.4,125.7 399.3,124.8 401.2,123.8 403.1,122.9 405,122 406.9,121.1 408.8,120.2 410.7,119.2 412.6,118.3 414.5,117.4 416.4,116.5 418.3,115.6 420.2,114.6 422.1,113.7 424,112.8" fill="none" stroke="#b91c1c" stroke-width="2"/><text x="120" y="274" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">1</text><text x="196" y="274" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><text x="272" y="274" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">3</text><text x="348" y="274" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">4</text><text x="424" y="274" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">5</text><text x="39" y="218" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">5</text><text x="39" y="172" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">10</text><text x="39" y="126" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">15</text><text x="39" y="80" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">20</text><text x="39" y="34" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">25</text><text x="424" y="254" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">t (s)</text><text x="44" y="274" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">0</text><text x="50" y="40" font-size="12" font-family="sans-serif" fill="#1f2937">d (m)</text><circle cx="196" cy="223.2" r="3.5" fill="#1f2937"/><circle cx="120" cy="260" r="3.5" fill="#b91c1c"/><circle cx="348" cy="149.6" r="3.5" fill="#b91c1c"/><text x="112" y="274" font-size="12" font-family="sans-serif" text-anchor="end" fill="#b91c1c" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">(1, 0)</text><text x="356" y="163.6" font-size="12" font-family="sans-serif" fill="#b91c1c" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">(4, 12)</text><text x="190" y="217.2" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">P</text></svg>`,
        answer: { type: "number", value: 4, display: "4 m/s" },
        traps: [
          {
            spec: { type: "number", value: 2 },
            feedback:
              "4 ÷ 2 = 2 is the *average* speed over the first 2 seconds (gradient of the chord from the origin to P). The speed *at* t = 2 is the gradient of the tangent.",
          },
          {
            spec: { type: "number", value: 3 },
            feedback: "12 ÷ 4 uses only one point of the tangent with the origin, but the tangent doesn't pass through the origin. Use both points on the tangent.",
          },
        ],
        solution: [
          "On a distance–time graph, speed = gradient. At an instant on a curve, that is the gradient of the tangent.",
          "Gradient = {{(12 - 0)/(4 - 1) = 12/3 = 4}}.",
          "Speed at t = 2 ≈ 4 m/s.",
        ],
        commonError: "Dividing the distance at t = 2 by 2, which gives the average speed, not the instantaneous speed.",
        difficulty: "core",
        guideRef: "real-life-graphs",
        hints: [
          "What does the gradient of a distance–time graph represent?",
          "Find the gradient of the red tangent line using its two marked points.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "graphs-of-functions-p3-q12",
        question:
          "The curve C has equation {{y = x^2 - 4x + 1}}. The line L has equation y = 2x − 7.\n\n(a) Show that the x-coordinates of the points where L meets C satisfy {{x^2 - 6x + 8 = 0}}.\n\n(b) Hence find the coordinates of the points where L meets C.",
        marks: 4,
        modelAnswer:
          "(a) At the intersection the y-values are equal: {{x^2 - 4x + 1 = 2x - 7}}. Subtract 2x and add 7 to both sides: {{x^2 - 6x + 8 = 0}}, as required.\n\n(b) Factorise: (x − 2)(x − 4) = 0, so x = 2 or x = 4. Substitute into the line: x = 2 gives y = 2(2) − 7 = −3; x = 4 gives y = 2(4) − 7 = 1. The points are (2, −3) and (4, 1). Check on C: 4 − 8 + 1 = −3 ✓, 16 − 16 + 1 = 1 ✓.",
        markScheme: [
          { point: "Sets the two expressions equal: x² − 4x + 1 = 2x − 7", keywords: ["x^2 - 4x + 1 = 2x - 7", "x² − 4x + 1 = 2x − 7", "= 2x - 7", "equal"] },
          { point: "Rearranges correctly to x² − 6x + 8 = 0", keywords: ["x^2 - 6x + 8 = 0", "x² − 6x + 8 = 0", "-6x + 8", "−6x + 8"] },
          { point: "Solves: (x − 2)(x − 4) = 0, so x = 2 or 4", keywords: ["(x - 2)(x - 4)", "(x−2)(x−4)", "x = 2", "x = 4"] },
          { point: "Both points correct: (2, −3) and (4, 1)", keywords: ["(2, -3)", "(2, −3)", "(4, 1)", "(4,1)"] },
        ],
        commonError: "Stopping at x = 2 and x = 4 — the question asks for coordinates, so find the y-values too.",
        difficulty: "core",
        guideRef: "graphical-solutions",
        hints: [
          "At a point where the graphs meet, both equations give the same y. Set them equal.",
          "Move everything to one side and tidy up.",
          "Factorise, then put each x into the (simpler) line equation to get y.",
        ],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "graphs-of-functions-p3-q13",
        question:
          "The curve {{y = k a^x}}, where k and a are positive constants, passes through the points (1, 10) and (3, 250).\n\nFind the value of k and the value of a. Give k first.",
        answer: { type: "list", values: [2, 5], ordered: true, display: "k = 2, a = 5" },
        traps: [
          {
            spec: { type: "list", values: [0.4, 25], ordered: true, tolerance: 0.01 },
            feedback:
              "250 ÷ 10 = 25 is {{a^2}}, not a: going from x = 1 to x = 3 multiplies by a **twice**. So a = 5, then k = 10 ÷ 5 = 2.",
          },
          {
            spec: { type: "list", values: [5, 2], ordered: true },
            feedback: "Right values, wrong order — the question asks for k first.",
          },
        ],
        solution: [
          "(1, 10): {{k a = 10}}.  (3, 250): {{k a^3 = 250}}.",
          "Divide: {{(k a^3)/(k a) = a^2 = 250/10 = 25}}, so a = 5 (a > 0).",
          "Then k = 10 ÷ 5 = 2.",
          "Check: {{2 * 5^3 = 2 * 125 = 250}} ✓.",
        ],
        solutions: [
          {
            label: "Think multiplicatively",
            steps: [
              "Each step of +1 in x multiplies y by a. From x = 1 to x = 3 is two steps: 10 × a × a = 250, so {{a^2 = 25}}, a = 5.",
              "Step back from x = 1 to x = 0: 10 ÷ 5 = 2, and y at x = 0 is k. So k = 2.",
            ],
          },
        ],
        commonError: "Taking 250 ÷ 10 = 25 as the value of a.",
        difficulty: "challenge",
        guideRef: "exponential-functions",
        hints: [
          "Substitute each point to get two equations in k and a.",
          "Divide one equation by the other — what cancels?",
          "{{a^2 = 25}}. Now use {{k a = 10}}.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "graphs-of-functions-p3-q14",
        question:
          "The curve y = f(x) has exactly one turning point, a maximum at (4, 6).\n\nFind the coordinates of the turning point of the curve {{y = 3 - f(1/2 x)}}. Give your answer as (x, y).",
        answer: { type: "list", values: [8, -3], ordered: true, display: "(8, −3) — a minimum" },
        traps: [
          {
            spec: { type: "list", values: [2, -3], ordered: true },
            feedback:
              "f(ax) stretches horizontally by scale factor {{1/a}}. Here a = {{1/2}}, so the x-coordinate is **multiplied** by 2: 4 → 8, not halved.",
          },
          {
            spec: { type: "list", values: [8, 9], ordered: true },
            feedback: "You forgot the minus sign in front of f, which reflects the curve in the x-axis: 6 → −6, then + 3 gives −3.",
          },
        ],
        solution: [
          "Write it as {{y = -f(1/2 x) + 3}} and apply the transformations to (4, 6) in order.",
          "{{f(1/2 x)}}: stretch parallel to the x-axis, scale factor 2 → (8, 6).",
          "{{-f(1/2 x)}}: reflect in the x-axis → (8, −6). The maximum becomes a minimum.",
          "{{-f(1/2 x) + 3}}: translate up 3 → (8, −3).",
        ],
        solutions: [
          {
            label: "Ask 'where is the same input?'",
            steps: [
              "The new curve 'uses' the old turning point when {{1/2 x = 4}}, i.e. x = 8.",
              "Then y = 3 − f(4) = 3 − 6 = −3. And since we subtract f, the old maximum of f gives the least value of y: a minimum at (8, −3).",
            ],
          },
        ],
        commonError: "Halving instead of doubling the x-coordinate for f(½x), or ignoring the reflection.",
        difficulty: "challenge",
        guideRef: "graph-transformations",
        hints: [
          "Rewrite {{3 - f(1/2 x)}} as {{-f(1/2 x) + 3}}. Three transformations: which acts on x, which on y?",
          "For the x-coordinate: which x makes {{1/2 x}} equal to 4?",
          "For the y-coordinate: start from 6, apply the minus sign, then add 3.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "graphs-of-functions-p3-q15",
        question:
          "The curve C has equation {{y = x^2 - 4x + 5}} and the line L has equation y = 2x − 5.\n\n(a) Show that L and C never meet.\n\n(b) Find the least possible vertical distance between C and L, and the value of x at which it occurs.",
        marks: 4,
        modelAnswer:
          "(a) If they met, {{x^2 - 4x + 5 = 2x - 5}}, i.e. {{x^2 - 6x + 10 = 0}}. Completing the square: {{x^2 - 6x + 10 = (x - 3)^2 + 1}}. Since {{(x - 3)^2 >= 0}}, the left side is at least 1, so it can never equal 0. There are no solutions, so L and C never meet. (Equivalently the discriminant is 36 − 40 = −4 < 0.)\n\n(b) The vertical distance from L up to C at any x is {{(x^2 - 4x + 5) - (2x - 5) = x^2 - 6x + 10 = (x - 3)^2 + 1}}. This is always positive (so C is always above L) and is smallest when x = 3, where it equals 1. The least vertical distance is 1 unit, at x = 3.",
        markScheme: [
          { point: "Forms x² − 6x + 10 = 0 (or the difference x² − 6x + 10)", keywords: ["x^2 - 6x + 10", "x² − 6x + 10", "-6x + 10", "−6x + 10"] },
          { point: "Completes the square (x − 3)² + 1 or finds discriminant −4", keywords: ["(x - 3)^2 + 1", "(x − 3)² + 1", "(x-3)^2+1", "-4", "−4", "discriminant"] },
          { point: "Concludes no real solutions since (x − 3)² + 1 ≥ 1 > 0 / discriminant < 0, so they never meet", keywords: ["never", "no solution", "no real", ">= 1", "≥ 1", "> 0", "< 0"] },
          { point: "Least vertical distance 1 when x = 3", keywords: ["1 unit", "distance 1", "= 1", "x = 3", "x=3"] },
        ],
        solutions: [
          {
            label: "Discriminant for (a)",
            steps: ["{{x^2 - 6x + 10 = 0}}: {{b^2 - 4ac = 36 - 40 = -4 < 0}}.", "No real roots, so no intersection. Quick, but completing the square also gives part (b) for free."],
          },
        ],
        commonError: "Using the discriminant for (a) and then not realising the same expression, x² − 6x + 10, *is* the vertical gap in (b).",
        difficulty: "challenge",
        guideRef: "graphical-solutions",
        hints: [
          "If they met, the two y-values would be equal. Write that equation and tidy it.",
          "Can {{x^2 - 6x + 10}} ever be 0? Complete the square to see its smallest value.",
          "The vertical gap at a given x is (curve's y) − (line's y). You've already simplified that expression.",
        ],
        strategy: "Consider extremes",
      },
    ],
  },
  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "graphs-of-functions-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "graphs-of-functions-p4-q01",
        question:
          "Here is a table of values for {{y = 4 + 3x - x^2}}.\n\n| x | −2 | −1 | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|---|---|\n| y |  | 0 | 4 |  | 6 | 4 |  |\n\nComplete the table: work out y when x = −2, x = 1 and x = 4. Give the three values in that order.",
        answer: { type: "list", values: [-6, 6, 0], ordered: true, display: "−6, 6, 0" },
        traps: [
          {
            spec: { type: "list", values: [2, 8, 32], ordered: true },
            feedback: "{{-x^2}} means −(x²), and x² is never negative. At x = −2: {{-x^2 = -(4) = -4}}, so y = 4 − 6 − 4 = −6.",
          },
          {
            spec: { type: "list", values: [-6, 6, 32], ordered: true },
            feedback: "At x = 4, {{-x^2 = -16}}, so y = 4 + 12 − 16 = 0. Use symmetry to check: y = 0 at x = −1, so y = 0 at x = 4 as well.",
          },
        ],
        solution: [
          "x = −2: {{4 + 3(-2) - (-2)^2 = 4 - 6 - 4 = -6}}.",
          "x = 1: {{4 + 3 - 1 = 6}}.",
          "x = 4: {{4 + 12 - 16 = 0}}.",
          "Check: the completed row −6, 0, 4, 6, 6, 4, 0 is symmetrical about x = 1.5, the line of symmetry of this ∩-shaped curve (y = 6 at both x = 1 and x = 2). ✓",
        ],
        commonError: "Treating −x² as (−x)², which makes it positive.",
        difficulty: "warmup",
        guideRef: "plotting-quadratics",
        hints: [
          "{{-x^2}} means 'square x, then make it negative'.",
          "Use symmetry to check: here the equal values come in pairs either side of x = 1.5.",
        ],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "graphs-of-functions-p4-q02",
        question:
          "Wei Ling cycled from her home to East Coast Park, stayed there for a while, then cycled home. The distance–time graph shows her journey.\n\nWork out her average speed on the journey home. Give your answer in km/h.",
        diagram: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Distance-time graph: distance from home rises from 0 at 09:00 to 12 km at 09:40, stays at 12 km until 10:00, then falls back to 0 at 10:30. Each small square across is 10 minutes"><rect x="0" y="0" width="400" height="260" fill="#ffffff"/><path d="M45 25V220M81.1 25V220M117.2 25V220M153.3 25V220M189.4 25V220M225.6 25V220M261.7 25V220M297.8 25V220M333.9 25V220M370 25V220M45 220H370M45 192.1H370M45 164.3H370M45 136.4H370M45 108.6H370M45 80.7H370M45 52.9H370M45 25H370" stroke="#e2e8f0" stroke-width="1" fill="none"/><line x1="45" y1="220" x2="376" y2="220" stroke="#334155" stroke-width="1.5"/><line x1="45" y1="220" x2="45" y2="19" stroke="#334155" stroke-width="1.5"/><text x="207.5" y="252" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Time</text><text x="50" y="19" font-size="13" font-family="sans-serif" fill="#1f2937">Distance from home (km)</text><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="45" y="234">09:00</text><text x="153.3" y="234">09:30</text><text x="261.7" y="234">10:00</text><text x="370" y="234">10:30</text></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="end"><text x="41" y="196.1">2</text><text x="41" y="168.3">4</text><text x="41" y="140.4">6</text><text x="41" y="112.6">8</text><text x="41" y="84.7">10</text><text x="41" y="56.9">12</text><text x="41" y="29">14</text></g><path d="M45 220 L189.4 52.9 L261.7 52.9 L370 220" stroke="#1d4ed8" stroke-width="2" fill="none"/></svg>`,
        answer: { type: "number", value: 24, display: "24 km/h" },
        traps: [
          {
            spec: { type: "number", value: 0.4 },
            feedback: "0.4 is in km per **minute** (12 ÷ 30). Convert: 30 minutes is 0.5 hours, so 12 ÷ 0.5 = 24 km/h.",
          },
          {
            spec: { type: "number", value: 16 },
            feedback: "16 km/h is the average for the whole 1.5 hours (24 km ÷ 1.5 h). The question asks only about the journey home, 10:00 to 10:30.",
          },
        ],
        solution: [
          "Journey home: from 10:00 to 10:30, distance falls from 12 km to 0 km.",
          "Distance 12 km, time 30 minutes = 0.5 hours.",
          "Speed = {{12/0.5 = 24}} km/h.",
          "The line home is steeper than the line out (12 km in 40 min = 18 km/h), so she was faster on the way back. ✓",
        ],
        commonError: "Dividing by 30 (minutes) and giving the answer as km/h.",
        difficulty: "warmup",
        guideRef: "real-life-graphs",
        hints: ["Which part of the graph is the journey home? Read its start and end times.", "Convert the time to hours before dividing."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "mcq",
        id: "graphs-of-functions-p4-q03",
        question: "Here is a sketch of a curve. It crosses the x-axis at −2, 0 and 2.\n\nWhich could be the equation of the curve?",
        diagram: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch of a curve that falls from the top left, crosses the x-axis at −2, turns at a minimum, passes through the origin, turns at a maximum, crosses the x-axis at 2 and falls to the bottom right"><rect x="0" y="0" width="300" height="240" fill="#ffffff"/><line x1="20" y1="120" x2="286" y2="120" stroke="#334155" stroke-width="1.5"/><line x1="150" y1="220" x2="150" y2="14" stroke="#334155" stroke-width="1.5"/><text x="288" y="124" font-size="13" font-family="sans-serif" fill="#1f2937">x</text><text x="155" y="14" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="65.8" y="134" text-anchor="end">−2</text><text x="228.2" y="134" text-anchor="end">2</text></g><text x="154" y="135" font-size="11" font-family="sans-serif" fill="#1f2937">O</text><path d="M44.4 239.6 L47 222.5 L49.7 206.5 L52.3 191.5 L54.9 177.5 L57.6 164.6 L60.2 152.6 L62.9 141.5 L65.5 131.3 L68.1 122 L70.8 113.6 L73.4 106 L76.1 99.1 L78.7 93.1 L81.3 87.8 L84 83.2 L86.6 79.3 L89.3 76 L91.9 73.4 L94.5 71.4 L97.2 70 L99.8 69.1 L102.5 68.7 L105.1 68.8 L107.8 69.4 L110.4 70.4 L113 71.9 L115.7 73.7 L118.3 75.9 L121 78.4 L123.6 81.2 L126.2 84.3 L128.9 87.7 L131.5 91.2 L134.2 95 L136.8 98.9 L139.4 103 L142.1 107.1 L144.7 111.4 L147.4 115.7 L150 120 L152.6 124.3 L155.3 128.6 L157.9 132.9 L160.6 137 L163.2 141.1 L165.8 145 L168.5 148.8 L171.1 152.3 L173.8 155.7 L176.4 158.8 L179 161.6 L181.7 164.1 L184.3 166.3 L187 168.1 L189.6 169.6 L192.2 170.6 L194.9 171.2 L197.5 171.3 L200.2 170.9 L202.8 170.1 L205.5 168.6 L208.1 166.6 L210.7 164 L213.4 160.7 L216 156.8 L218.7 152.2 L221.3 146.9 L223.9 140.9 L226.6 134 L229.2 126.4 L231.9 118 L234.5 108.7 L237.1 98.5 L239.8 87.4 L242.4 75.4 L245.1 62.5 L247.7 48.5 L250.3 33.5 L253 17.5 L255.6 0.4" stroke="#1d4ed8" stroke-width="2" fill="none" transform="matrix(-1 0 0 1 300 0)"/></svg>`,
        options: ["{{y = x^3 - 4x}}", "{{y = x^2 - 4}}", "{{y = 4x - x^3}}", "{{y = 4/x}}"],
        answerIndex: 2,
        explanation:
          "The curve has two turning points and goes from top-left to bottom-right, so it is a cubic with a **negative** {{x^3}} term. {{4x - x^3 = x(2 - x)(2 + x)}} is zero at −2, 0 and 2, and for large positive x the {{-x^3}} wins, so y is large and negative ✓. {{y = x^3 - 4x}} has the same roots but a positive {{x^3}} term, so it would go from bottom-left to top-right. {{y = x^2 - 4}} is a ∪-shaped parabola with only two roots, and {{y = 4/x}} never touches the axes.",
        difficulty: "warmup",
        guideRef: "recognising-graphs",
        hints: [
          "How many turning points does the curve have? Which family of graphs is that?",
          "As x gets large and positive, does y go up or down? That tells you the sign of the {{x^3}} term.",
        ],
        strategy: "Eliminate options",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "graphs-of-functions-p4-q04",
        question: "The point A(3, −2) lies on the graph of y = f(x).\n\nWrite down the coordinates of the image of A on the graph of y = f(−x). Give your answer as (x, y).",
        answer: { type: "list", values: [-3, -2], ordered: true, display: "(−3, −2)" },
        traps: [
          {
            spec: { type: "list", values: [3, 2], ordered: true },
            feedback: "That is the image on y = −f(x) (reflection in the x-axis). The minus *inside* the bracket, f(−x), reflects in the **y-axis**: x changes sign.",
          },
          {
            spec: { type: "list", values: [-3, 2], ordered: true },
            feedback: "Only one coordinate changes. f(−x) reflects in the y-axis, so the y-coordinate stays −2.",
          },
        ],
        solution: [
          "y = f(−x) is the reflection of y = f(x) in the y-axis.",
          "x-coordinates change sign; y-coordinates stay the same.",
          "A(3, −2) → (−3, −2).",
          "Check: on y = f(−x) at x = −3, y = f(3) = −2. ✓",
        ],
        commonError: "Confusing f(−x) (reflect in y-axis) with −f(x) (reflect in x-axis).",
        difficulty: "warmup",
        guideRef: "graph-transformations",
        hints: ["Inside the bracket → acts on x. Outside → acts on y.", "Which x-value makes −x equal to 3?"],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "graphs-of-functions-p4-q05",
        question:
          "Write {{3x^2 + 12x + 5}} in the form {{a(x + b)^2 + c}}, where a, b and c are integers.\n\nGive the values of a, b and c in that order.",
        answer: { type: "list", values: [3, 2, -7], ordered: true, display: "a = 3, b = 2, c = −7, so {{3(x + 2)^2 - 7}}" },
        traps: [
          {
            spec: { type: "list", values: [3, 2, 1], ordered: true },
            feedback:
              "Inside the bracket you subtract 4, but that −4 is multiplied by the 3 outside: {{3[(x + 2)^2 - 4] + 5 = 3(x + 2)^2 - 12 + 5}}. So c = −7.",
          },
          {
            spec: { type: "list", values: [3, -2, -7], ordered: true },
            feedback: "In the form {{a(x + b)^2}}, the bracket is (x + 2), so b = **2** (the form already has the plus sign).",
          },
        ],
        solution: [
          "Take out the factor 3 from the x terms: {{3(x^2 + 4x) + 5}}.",
          "Complete the square inside: {{x^2 + 4x = (x + 2)^2 - 4}}.",
          "{{3[(x + 2)^2 - 4] + 5 = 3(x + 2)^2 - 12 + 5 = 3(x + 2)^2 - 7}}.",
          "a = 3, b = 2, c = −7. Check at x = 0: 3(4) − 7 = 5 ✓.",
        ],
        solutions: [
          {
            label: "Compare coefficients",
            steps: [
              "{{a(x + b)^2 + c = a x^2 + 2ab x + (a b^2 + c)}}.",
              "{{x^2}}: a = 3. x: 2(3)b = 12, so b = 2. Constant: 3(4) + c = 5, so c = −7.",
            ],
          },
        ],
        commonError: "Forgetting to multiply the −4 by the factor 3 outside the bracket.",
        difficulty: "core",
        guideRef: "sketching-quadratics",
        hints: [
          "Factor 3 out of the first two terms only.",
          "Complete the square on {{x^2 + 4x}}.",
          "Multiply out the outer bracket carefully: the −4 becomes −12.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "graphs-of-functions-p4-q06",
        question:
          "The graph of {{y = x^3 - 3x}} is drawn for −2.5 ≤ x ≤ 2.5.\n\nBy drawing a suitable straight line on the grid, the equation {{x^3 - 4x + 1 = 0}} can be solved.\n\nFind the equation of the straight line. Give your answer in the form y = mx + c.",
        diagram: `<svg viewBox="0 0 380 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y = x cubed minus 3x for x from -2.5 to 2.5, with a maximum at (-1, 2) and a minimum at (1, -2)"><rect x="0" y="0" width="380" height="320" fill="#ffffff"/><path d="M40 20V295M70 20V295M100 20V295M130 20V295M160 20V295M190 20V295M220 20V295M250 20V295M280 20V295M310 20V295M340 20V295M40 295H340M40 277.8H340M40 260.6H340M40 243.4H340M40 226.2H340M40 209.1H340M40 191.9H340M40 174.7H340M40 157.5H340M40 140.3H340M40 123.1H340M40 105.9H340M40 88.8H340M40 71.6H340M40 54.4H340M40 37.2H340M40 20H340" stroke="#e2e8f0" stroke-width="1" fill="none"/><line x1="40" y1="157.5" x2="346" y2="157.5" stroke="#334155" stroke-width="1.5"/><line x1="190" y1="295" x2="190" y2="14" stroke="#334155" stroke-width="1.5"/><text x="348" y="161.5" font-size="13" font-family="sans-serif" fill="#1f2937">x</text><text x="195" y="14" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="66" y="171.5" text-anchor="end">−2</text><text x="130" y="171.5">−1</text><text x="250" y="171.5">1</text><text x="310" y="171.5">2</text></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="end"><text x="186" y="299">−8</text><text x="186" y="264.6">−6</text><text x="186" y="230.2">−4</text><text x="186" y="195.9">−2</text><text x="186" y="127.1">2</text><text x="186" y="92.8">4</text><text x="186" y="58.4">6</text><text x="186" y="24">8</text></g><path d="M40 297.1 L43.8 280.7 L47.5 265.3 L51.2 250.8 L55 237.3 L58.8 224.6 L62.5 212.9 L66.2 201.9 L70 191.9 L73.8 182.6 L77.5 174.1 L81.2 166.4 L85 159.4 L88.8 153.1 L92.5 147.5 L96.2 142.5 L100 138.2 L103.8 134.4 L107.5 131.3 L111.2 128.7 L115 126.6 L118.8 125.1 L122.5 124 L126.2 123.3 L130 123.1 L133.8 123.3 L137.5 123.9 L141.2 124.8 L145 126.1 L148.8 127.6 L152.5 129.5 L156.2 131.6 L160 133.9 L163.8 136.4 L167.5 139.1 L171.2 141.9 L175 144.9 L178.8 147.9 L182.5 151.1 L186.2 154.3 L190 157.5 L193.8 160.7 L197.5 163.9 L201.2 167.1 L205 170.1 L208.8 173.1 L212.5 175.9 L216.2 178.6 L220 181.1 L223.8 183.4 L227.5 185.5 L231.2 187.4 L235 188.9 L238.8 190.2 L242.5 191.1 L246.2 191.7 L250 191.9 L253.8 191.7 L257.5 191 L261.2 189.9 L265 188.4 L268.8 186.3 L272.5 183.7 L276.2 180.6 L280 176.8 L283.8 172.5 L287.5 167.5 L291.2 161.9 L295 155.6 L298.8 148.6 L302.5 140.9 L306.2 132.4 L310 123.1 L313.8 113.1 L317.5 102.1 L321.2 90.4 L325 77.7 L328.8 64.2 L332.5 49.7 L336.2 34.3 L340 17.9" stroke="#1d4ed8" stroke-width="2" fill="none"/><text x="319" y="44.1" font-size="12" font-family="sans-serif" fill="#1d4ed8" text-anchor="end">y = x³ − 3x</text></svg>`,
        answer: { type: "equation", eq: "y=x-1", display: "y = x − 1" },
        traps: [
          {
            spec: { type: "equation", eq: "y=1-x" },
            feedback:
              "Sign slip. From {{x^3 - 4x + 1 = 0}}, add x and subtract 1 on both sides: {{x^3 - 3x = x - 1}}.",
          },
          {
            spec: { type: "equation", eq: "y=4x-1" },
            feedback: "That rearranges to {{x^3 = 4x - 1}}, which needs the graph of {{y = x^3}}. The drawn curve is {{y = x^3 - 3x}}, so keep {{x^3 - 3x}} on the left.",
          },
        ],
        solution: [
          "Rearrange so the left side is the drawn curve, {{x^3 - 3x}}.",
          "{{x^3 - 4x + 1 = 0}} ⟹ {{x^3 - 3x = x - 1}}.",
          "Draw y = x − 1. It crosses the curve three times (near x = −2.1, 0.3 and 1.9), so the equation has three real solutions.",
        ],
        commonError: "Choosing the line from a rearrangement that doesn't match the curve on the grid.",
        difficulty: "core",
        guideRef: "graphical-solutions",
        hints: [
          "You want an equation that starts '{{x^3 - 3x =}} …'.",
          "What must you add to −4x to get −3x? Do the same to the other side.",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "graphs-of-functions-p4-q07",
        question:
          "The graph of {{y = x^2 - x - 4}} is drawn below.\n\nUse the graph to find estimates for the solutions of {{x^2 - x - 4 = 0}}. Give each solution correct to 1 decimal place.",
        diagram: `<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y = x squared minus x minus 4 for x from -3 to 4 on a fine grid with small squares of 0.2 across and 0.5 up; the lowest point is at (0.5, -4.25)"><rect x="0" y="0" width="400" height="320" fill="#ffffff"/><path d="M40 20V295M49.1 20V295M58.3 20V295M67.4 20V295M76.6 20V295M85.7 20V295M94.9 20V295M104 20V295M113.1 20V295M122.3 20V295M131.4 20V295M140.6 20V295M149.7 20V295M158.9 20V295M168 20V295M177.1 20V295M186.3 20V295M195.4 20V295M204.6 20V295M213.7 20V295M222.9 20V295M232 20V295M241.1 20V295M250.3 20V295M259.4 20V295M268.6 20V295M277.7 20V295M286.9 20V295M296 20V295M305.1 20V295M314.3 20V295M323.4 20V295M332.6 20V295M341.7 20V295M350.9 20V295M360 20V295M40 295H360M40 285.2H360M40 275.4H360M40 265.5H360M40 255.7H360M40 245.9H360M40 236.1H360M40 226.2H360M40 216.4H360M40 206.6H360M40 196.8H360M40 187H360M40 177.1H360M40 167.3H360M40 157.5H360M40 147.7H360M40 137.9H360M40 128H360M40 118.2H360M40 108.4H360M40 98.6H360M40 88.8H360M40 78.9H360M40 69.1H360M40 59.3H360M40 49.5H360M40 39.6H360M40 29.8H360M40 20H360" stroke="#f1f5f9" stroke-width="1" fill="none"/><path d="M40 20V295M85.7 20V295M131.4 20V295M177.1 20V295M222.9 20V295M268.6 20V295M314.3 20V295M360 20V295M40 295H360M40 275.4H360M40 255.7H360M40 236.1H360M40 216.4H360M40 196.8H360M40 177.1H360M40 157.5H360M40 137.9H360M40 118.2H360M40 98.6H360M40 78.9H360M40 59.3H360M40 39.6H360M40 20H360" stroke="#e2e8f0" stroke-width="1" fill="none"/><line x1="40" y1="196.8" x2="366" y2="196.8" stroke="#334155" stroke-width="1.5"/><line x1="177.1" y1="295" x2="177.1" y2="14" stroke="#334155" stroke-width="1.5"/><text x="368" y="200.8" font-size="13" font-family="sans-serif" fill="#1f2937">x</text><text x="182.1" y="14" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="40" y="210.8">−3</text><text x="85.7" y="210.8">−2</text><text x="131.4" y="210.8">−1</text><text x="222.9" y="210.8">1</text><text x="268.6" y="210.8">2</text><text x="314.3" y="210.8">3</text><text x="360" y="210.8">4</text></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="end"><text x="173.1" y="240.1">−2</text><text x="173.1" y="161.5">2</text><text x="173.1" y="122.2">4</text><text x="173.1" y="82.9">6</text><text x="173.1" y="43.6">8</text></g><path d="M40 39.6 L44 51.5 L48 63.1 L52 74.4 L56 85.4 L60 96 L64 106.4 L68 116.5 L72 126.3 L76 135.7 L80 144.9 L84 153.8 L88 162.4 L92 170.6 L96 178.6 L100 186.3 L104 193.6 L108 200.7 L112 207.5 L116 213.9 L120 220.1 L124 226 L128 231.5 L132 236.8 L136 241.8 L140 246.4 L144 250.8 L148 254.9 L152 258.6 L156 262.1 L160 265.2 L164 268.1 L168 270.6 L172 272.9 L176 274.9 L180 276.5 L184 277.9 L188 278.9 L192 279.7 L196 280.1 L200 280.3 L204 280.1 L208 279.7 L212 278.9 L216 277.9 L220 276.5 L224 274.9 L228 272.9 L232 270.6 L236 268.1 L240 265.2 L244 262.1 L248 258.6 L252 254.9 L256 250.8 L260 246.4 L264 241.8 L268 236.8 L272 231.5 L276 226 L280 220.1 L284 213.9 L288 207.5 L292 200.7 L296 193.6 L300 186.3 L304 178.6 L308 170.6 L312 162.4 L316 153.8 L320 144.9 L324 135.7 L328 126.3 L332 116.5 L336 106.4 L340 96 L344 85.4 L348 74.4 L352 63.1 L356 51.5 L360 39.6" stroke="#1d4ed8" stroke-width="2" fill="none"/><text x="341.7" y="69.1" font-size="12" font-family="sans-serif" fill="#1d4ed8" text-anchor="end">y = x² − x − 4</text></svg>`,
        answer: { type: "list", values: [-1.6, 2.6], ordered: false, tolerance: 0.15, display: "x ≈ −1.6 or x ≈ 2.6" },
        traps: [
          {
            spec: { type: "list", values: [0.5, -4.25], ordered: false, tolerance: 0.1 },
            feedback: "That's the turning point. The solutions of {{x^2 - x - 4 = 0}} are where the curve crosses the x-axis (y = 0).",
          },
        ],
        solution: [
          "The solutions of {{x^2 - x - 4 = 0}} are the x-coordinates where the curve meets y = 0 (the x-axis).",
          "Reading carefully from the fine grid: x ≈ −1.6 and x ≈ 2.6.",
          "Check with symmetry: the line of symmetry is x = 0.5, and −1.6 and 2.6 are both 2.1 away from it ✓. (Exactly, {{x = (1 +- sqrt(17))/2}} ≈ −1.56, 2.56.)",
        ],
        commonError: "Reading the y-intercept (−4) or the turning point instead of the x-intercepts.",
        difficulty: "core",
        guideRef: "graphical-solutions",
        hints: [
          "The equation says y = 0. Which line on the grid is y = 0?",
          "Each small square across is 0.2. Read both crossing points.",
        ],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "graphs-of-functions-p4-q08",
        question:
          "The diagram shows the speed–time graph for a car's journey (not accurately drawn).\n\nThe car accelerates steadily from rest to 16 m/s in 20 seconds, travels at 16 m/s for T seconds, then decelerates steadily to rest in 30 seconds.\n\nThe total distance travelled is 1.2 km. Work out the value of T.",
        diagram: `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Speed-time graph: speed rises steadily from 0 to 16 m/s in the first 20 seconds, stays at 16 m/s for T seconds, then falls steadily to 0 over the final 30 seconds"><rect x="0" y="0" width="420" height="240" fill="#ffffff"/><line x1="45" y1="200" x2="386" y2="200" stroke="#334155" stroke-width="1.5"/><line x1="45" y1="200" x2="45" y2="19" stroke="#334155" stroke-width="1.5"/><text x="388" y="204" font-size="13" font-family="sans-serif" fill="#1f2937">t (s)</text><text x="50" y="19" font-size="13" font-family="sans-serif" fill="#1f2937">v (m/s)</text><path d="M45 200 L105.9 60 L227.7 60 L319.1 200" stroke="#1d4ed8" stroke-width="2" fill="none"/><path d="M105.9 200 L105.9 60" stroke="#94a3b8" stroke-width="1" fill="none" stroke-dasharray="4 3"/><path d="M227.7 200 L227.7 60" stroke="#94a3b8" stroke-width="1" fill="none" stroke-dasharray="4 3"/><path d="M45 60 L105.9 60" stroke="#94a3b8" stroke-width="1" fill="none" stroke-dasharray="4 3"/><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="105.9" y="214">20</text></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="end"><text x="41" y="64">16</text></g><text x="42" y="221.9" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">O</text><text x="166.8" y="49.5" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">T seconds</text><text x="288.6" y="112.5" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">30 s</text></svg>`,
        answer: { type: "number", value: 50, display: "T = 50" },
        traps: [
          {
            spec: { type: "number", value: 25 },
            feedback: "You used 20 × 16 and 30 × 16 for the sloping parts. They are triangles, so halve: 160 m and 240 m.",
          },
          {
            spec: { type: "number", value: 75 },
            feedback: "1200 ÷ 16 = 75 treats the whole journey as constant speed. Subtract the distances for speeding up (160 m) and slowing down (240 m) first.",
          },
        ],
        solution: [
          "Distance = area under the graph; 1.2 km = 1200 m.",
          "Accelerating: {{1/2 * 20 * 16 = 160}} m. Decelerating: {{1/2 * 30 * 16 = 240}} m.",
          "Constant speed: 16T m.",
          "160 + 16T + 240 = 1200 ⟹ 16T = 800 ⟹ T = 50.",
        ],
        solutions: [
          {
            label: "Trapezium",
            steps: [
              "Parallel sides T and 20 + T + 30 = T + 50, height 16.",
              "{{1/2 (T + T + 50) * 16 = 1200}} ⟹ 8(2T + 50) = 1200 ⟹ 2T + 50 = 150 ⟹ T = 50.",
            ],
          },
        ],
        commonError: "Forgetting to convert 1.2 km to 1200 m, or not halving the triangle areas.",
        difficulty: "core",
        guideRef: "real-life-graphs",
        hints: [
          "Distance = area under a speed–time graph. Use metres throughout.",
          "Write the total area in terms of T: two triangles and a rectangle.",
          "Set your expression equal to 1200 and solve.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "graphs-of-functions-p4-q09",
        question:
          "Priya records the speed of a cyclist at 2-second intervals.\n\n| Time t (s) | 0 | 2 | 4 | 6 | 8 |\n|---|---|---|---|---|---|\n| Speed v (m/s) | 0 | 6 | 10 | 12 | 13 |\n\nThe points are joined with a smooth curve. Use 4 strips of equal width to estimate the area under the speed–time curve from t = 0 to t = 8, and so estimate the distance the cyclist travels. Give your answer in metres.",
        answer: { type: "number", value: 69, display: "69 m" },
        traps: [
          {
            spec: { type: "number", value: 138 },
            feedback: "Each trapezium is {{1/2 (a + b) h}}. With h = 2, that's just (a + b) — you've forgotten the half.",
          },
          {
            spec: { type: "number", value: 41 },
            feedback: "You added the speeds and stopped. Each strip's area is {{1/2 (a + b) * 2}}: 6 + 16 + 22 + 25.",
          },
        ],
        solution: [
          "Strip width h = 2. Area of each trapezium = {{1/2 (a + b) * 2 = a + b}}.",
          "0–2: 0 + 6 = 6. 2–4: 6 + 10 = 16. 4–6: 10 + 12 = 22. 6–8: 12 + 13 = 25.",
          "Total ≈ 6 + 16 + 22 + 25 = 69 m.",
          "The curve bends downwards (its gradient decreases), so the straight tops of the trapezia lie below the curve: 69 m is an **underestimate**.",
        ],
        commonError: "Forgetting the ½ in the trapezium formula.",
        difficulty: "core",
        guideRef: "real-life-graphs",
        hints: [
          "Split the area into 4 trapezia, each 2 seconds wide.",
          "Area of a trapezium = {{1/2 (a + b) h}}, where a and b are the speeds at each end.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "written",
        id: "graphs-of-functions-p4-q10",
        question:
          "(a) Show that the curve {{y = x^2 - 10x + 31}} has a minimum point at (5, 6).\n\n(b) Hence explain why the curve does not cross the x-axis.",
        marks: 3,
        modelAnswer:
          "(a) Complete the square: {{x^2 - 10x + 31 = (x - 5)^2 - 25 + 31 = (x - 5)^2 + 6}}. Since {{(x - 5)^2 >= 0}}, the least value of y is 6, when x − 5 = 0, i.e. x = 5. So the minimum point is (5, 6).\n\n(b) The minimum value of y is 6, so y ≥ 6 > 0 for every x. The curve never reaches y = 0, so it does not cross (or touch) the x-axis.",
        markScheme: [
          { point: "Completes the square: (x − 5)² + 6", keywords: ["(x - 5)^2 + 6", "(x − 5)² + 6", "(x-5)^2+6", "- 25 + 31"] },
          { point: "Explains minimum: square ≥ 0, least value 6 when x = 5, so minimum (5, 6)", keywords: [">= 0", "≥ 0", "never negative", "x = 5", "(5, 6)", "least"] },
          { point: "Minimum y-value is 6 > 0, so y is never 0: no x-intercepts", keywords: ["6 > 0", "positive", "above", "never 0", "never zero", "y ≥ 6", "does not cross"] },
        ],
        solutions: [
          {
            label: "Symmetry for (a)",
            steps: [
              "Line of symmetry {{x = -b/(2a) = 10/2 = 5}}.",
              "y at x = 5: 25 − 50 + 31 = 6. The {{x^2}} coefficient is positive, so this is a minimum: (5, 6).",
            ],
          },
        ],
        commonError: "Just substituting x = 5 to get y = 6 without showing why that point is the minimum.",
        difficulty: "core",
        guideRef: "sketching-quadratics",
        hints: [
          "Complete the square: halve −10.",
          "What is the smallest value a squared bracket can take?",
          "If the lowest point of a ∪-shaped curve is above the x-axis, what can you say about the whole curve?",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "graphs-of-functions-p4-q11",
        question:
          "The curve with equation {{y = x^2 - 6x + 5}} is translated 2 units to the left and 3 units up (by the vector with components −2 and 3).\n\nFind the equation of the new curve. Give your answer in the form {{y = x^2 + bx + c}}.",
        answer: { type: "expression", expr: "x^2-2x", form: "expanded", display: "{{y = x^2 - 2x}}" },
        traps: [
          {
            spec: { type: "expression", expr: "x^2-10x+24" },
            feedback:
              "That moved the curve 2 to the *right*. A move of 2 to the **left** replaces x with (x + 2): {{(x + 2)^2 - 6(x + 2) + 5 + 3}}.",
          },
          {
            spec: { type: "expression", expr: "x^2-6x+8" },
            feedback: "You did the +3 (up) but not the move left. Replace x with (x + 2) as well.",
          },
        ],
        solution: [
          "Let f(x) = {{x^2 - 6x + 5}}. Left 2 and up 3 gives y = f(x + 2) + 3.",
          "{{(x + 2)^2 - 6(x + 2) + 5 + 3 = x^2 + 4x + 4 - 6x - 12 + 8}}.",
          "= {{x^2 - 2x}}.",
        ],
        solutions: [
          {
            label: "Move the turning point",
            steps: [
              "{{x^2 - 6x + 5 = (x - 3)^2 - 4}}: turning point (3, −4).",
              "Moved left 2, up 3 → (1, −1). Same shape: {{y = (x - 1)^2 - 1 = x^2 - 2x}}. ✓",
            ],
          },
        ],
        commonError: "Replacing x with (x − 2) for a move to the left.",
        difficulty: "core",
        guideRef: "graph-transformations",
        hints: [
          "Write the new curve as y = f(x + a) + b. What are a and b?",
          "Left 2 means f(x + 2). Up 3 means + 3 on the end.",
          "Expand and collect like terms.",
        ],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "graphs-of-functions-p4-q12",
        question:
          "Ravi's family buys a car for $48 000. Its value, $V, t years after it is bought is modelled by {{V = 48000 * 0.82^t}}.\n\nWork out the number of whole years after which the value of the car first falls below $20 000.",
        answer: { type: "number", value: 5, display: "5 years" },
        traps: [
          {
            spec: { type: "number", value: 4 },
            feedback: "After 4 years, V = 48 000 × 0.82⁴ ≈ $21 702, which is still **above** $20 000. Try t = 5.",
          },
          {
            spec: { type: "number", value: 4.41, tolerance: 0.05 },
            feedback: "That's when V equals $20 000 exactly, but the question asks for whole years — after 4 years it hasn't yet dropped below, after 5 it has.",
          },
        ],
        solution: [
          "Each year the value is multiplied by 0.82 (an 18% decrease).",
          "t = 4: 48 000 × {{0.82^4}} ≈ 48 000 × 0.4521 ≈ $21 702 (still above $20 000).",
          "t = 5: 48 000 × {{0.82^5}} ≈ 48 000 × 0.3707 ≈ $17 796 (below $20 000).",
          "So the value first falls below $20 000 after 5 years.",
        ],
        commonError: "Stopping at the last year *above* $20 000, or using 48 000 × (1 − 0.18t), which is linear decay.",
        difficulty: "core",
        guideRef: "exponential-functions",
        hints: [
          "Each year, multiply the value by 0.82. Try a sensible value of t first.",
          "Work out V for t = 4 and t = 5 and compare with $20 000.",
        ],
        strategy: "Try small cases",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "graphs-of-functions-p4-q13",
        question:
          "The line with equation y = 2x + k is a tangent to the curve with equation {{y = x^2 + 4x + 2}}.\n\n(a) Show that k = 1.\n\n(b) Find the coordinates of the point where the line touches the curve.",
        marks: 4,
        modelAnswer:
          "(a) Where they meet, {{x^2 + 4x + 2 = 2x + k}}, so {{x^2 + 2x + (2 - k) = 0}}. A tangent touches the curve at exactly one point, so this quadratic has a repeated root: discriminant {{b^2 - 4ac = 0}}, i.e. {{2^2 - 4(1)(2 - k) = 0}}, so 4 − 8 + 4k = 0, 4k = 4 and k = 1.\n\n(b) With k = 1: {{x^2 + 2x + 1 = 0}}, so {{(x + 1)^2 = 0}} and x = −1. Then y = 2(−1) + 1 = −1. Check on the curve: 1 − 4 + 2 = −1 ✓. The point of contact is (−1, −1).",
        markScheme: [
          { point: "Equates and rearranges: x² + 2x + 2 − k = 0", keywords: ["x^2 + 2x + 2 - k", "x² + 2x + 2 − k", "x^2 + 2x + (2 - k)", "2 - k", "2 − k"] },
          { point: "Uses one point of contact ⟹ discriminant = 0 (repeated root)", keywords: ["discriminant", "b^2 - 4ac = 0", "b² − 4ac = 0", "repeated root", "one solution", "equal roots"] },
          { point: "Solves 4 − 4(2 − k) = 0 to get k = 1", keywords: ["4 - 4(2 - k)", "4k = 4", "k = 1", "k=1"] },
          { point: "Point of contact (−1, −1)", keywords: ["(-1, -1)", "(−1, −1)", "x = -1", "x = −1", "(x + 1)^2"] },
        ],
        solutions: [
          {
            label: "Gradient approach (calculus preview)",
            steps: [
              "The curve's gradient is 2x + 4. The tangent has gradient 2, so 2x + 4 = 2 and x = −1.",
              "On the curve, y = 1 − 4 + 2 = −1. The line passes through (−1, −1): −1 = −2 + k, so k = 1.",
            ],
          },
        ],
        commonError: "Setting the discriminant > 0 (two intersections) instead of = 0 for a tangent.",
        difficulty: "challenge",
        guideRef: "graphical-solutions",
        hints: [
          "At any meeting point the y-values are equal. Form a quadratic in x.",
          "A tangent meets the curve at exactly one point. What does that mean for the quadratic's roots?",
          "Repeated root ⟺ {{b^2 - 4ac = 0}}. Here a = 1, b = 2, c = 2 − k.",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "written",
        id: "graphs-of-functions-p4-q14",
        question:
          "Kenji translates the graph of {{y = 2^x}} by 3 units to the left. Hana stretches the graph of {{y = 2^x}} parallel to the y-axis with scale factor 8.\n\nShow that Kenji and Hana end up with exactly the same graph, and write down where it crosses the y-axis.",
        marks: 3,
        modelAnswer:
          "Kenji's graph: a translation 3 units left replaces x with x + 3, giving {{y = 2^(x + 3)}}. Using the index law {{a^(m + n) = a^m * a^n}}: {{2^(x + 3) = 2^x * 2^3 = 8 * 2^x}}. Hana's graph: a stretch parallel to the y-axis, scale factor 8, multiplies every y-value by 8, giving {{y = 8 * 2^x}}. The two equations are identical for every x, so the graphs are the same. It crosses the y-axis where x = 0: {{y = 8 * 2^0 = 8}}, i.e. at (0, 8).",
        markScheme: [
          { point: "Kenji's equation y = 2^(x + 3) (and/or Hana's y = 8 × 2^x)", keywords: ["2^(x + 3)", "2^(x+3)", "8 × 2^x", "8 * 2^x", "8(2^x)"] },
          { point: "Index law: 2^(x + 3) = 2^x × 2³ = 8 × 2^x, so the equations are identical", keywords: ["2^3", "2³", "= 8", "index law", "identical", "same"] },
          { point: "y-intercept at (0, 8)", keywords: ["(0, 8)", "(0,8)", "y = 8", "2^3 = 8"] },
        ],
        commonError: "Writing 2^(x − 3) for a move to the left, or claiming the graphs are different because one transformation is horizontal and the other vertical.",
        difficulty: "challenge",
        guideRef: "graph-transformations",
        hints: [
          "Write down the equation of each new graph.",
          "Use an index law to split {{2^(x + 3)}} into a product.",
          "Put x = 0 into either equation for the y-intercept.",
        ],
        strategy: "Look for an invariant",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "graphs-of-functions-p4-q15",
        question:
          "Siti is growing bacteria in a school laboratory. The number of bacteria, N, after t hours is modelled by {{N = k a^t}}.\n\nAfter 1 hour there are 1500 bacteria. After 4 hours there are 2592 bacteria.\n\nUse the model to work out the number of bacteria after 7 hours. Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 4480, tolerance: 5, display: "4480 (3 s.f.)" },
        traps: [
          {
            spec: { type: "number", value: 3684, tolerance: 5 },
            feedback: "That's linear growth (adding 364 per hour). The model multiplies by the same factor a each hour: find a from {{a^3 = 2592/1500}}.",
          },
        ],
        solution: [
          "{{k a = 1500}} and {{k a^4 = 2592}}.",
          "Divide: {{a^3 = 2592/1500 = 1.728}}, so {{a = cbrt(1.728) = 1.2}}.",
          "{{k = 1500/1.2 = 1250}}.",
          "t = 7: {{N = 1250 * 1.2^7 = 1250 * 3.5831808 = 4478.976}}.",
          "N ≈ 4480 (3 s.f.).",
        ],
        solutions: [
          {
            label: "Skip k entirely",
            steps: [
              "From t = 4 to t = 7 is another 3 hours, so N is multiplied by {{a^3 = 1.728}} again.",
              "2592 × 1.728 = 4478.976 ≈ 4480. Much quicker!",
            ],
          },
        ],
        commonError: "Using a² instead of a³ because the times are 1 and 4, or treating the growth as linear.",
        difficulty: "challenge",
        guideRef: "exponential-functions",
        hints: [
          "Write two equations using the two data points.",
          "Divide them to eliminate k. How many hours apart are the readings?",
          "Notice that 7 − 4 = 4 − 1. Is there a shortcut?",
        ],
        strategy: "Look for an invariant",
      },
    ],
  },
];
