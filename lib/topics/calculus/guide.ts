import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "calculus",
  title: "Differentiation",
  strand: "Algebra",
  icon: "∂",
  summary: "The gradient of a curve at every point — then use it to find tangents, maximums and how fast things move.",
  intro:
    "Differentiation answers one question: how steep is a curve at a single point? On 4MA1 Higher it is worth a reliable 5–8 marks every paper — differentiate a polynomial, find a gradient, write a tangent, locate and classify turning points, optimise a box or a fence, and turn displacement into velocity and acceleration. The rule itself takes a minute to learn; the marks come from preparing the expression first (expand, split, use negative powers) and from setting up the right equation afterwards. The H+ section adds normals, the perpendicular partner of the tangent.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "gradient-of-a-curve",
      heading: "The gradient of a curve",
      discovery: {
        problem:
          "A straight line has one gradient everywhere. The curve {{y = x^2}} does not — it gets steeper as x grows.\n\nTake the point P(1, 1). Work out the gradient of the straight line (a **chord**) from P to each of these points on the curve: (3, 9), (2, 4), (1.5, 2.25), (1.1, 1.21), (1.01, 1.0201).\n\nWhat number are your gradients heading towards?",
        idea:
          "Gradient = {{(change in y)/(change in x)}}:\n\n| Second point | Gradient of chord |\n|---|---|\n| (3, 9) | {{8/2 = 4}} |\n| (2, 4) | {{3/1 = 3}} |\n| (1.5, 2.25) | {{1.25/0.5 = 2.5}} |\n| (1.1, 1.21) | {{0.21/0.1 = 2.1}} |\n| (1.01, 1.0201) | {{0.0201/0.01 = 2.01}} |\n\nThe chords swing round towards the **tangent** at P, and their gradients close in on **2**. So the gradient of the curve at P is 2. Try the same at P(3, 9) and you will close in on 6 — the gradient at x seems to be **2x**.",
      },
      body:
        "The **gradient of a curve at a point** is the gradient of the **tangent** there — the straight line that just touches the curve at that point and runs in the same direction as it.\n\nYou cannot find a tangent's gradient from two points on the curve directly (you only know one point), so you **approach it with chords**. Join P to a nearby point Q on the curve; as Q slides towards P, the chord PQ turns into the tangent, and its gradient settles on a single value.\n\n**The gradient function.** For {{y = x^2}} the chord experiment gives gradient 2 at x = 1, 4 at x = 2, 6 at x = 3, −2 at x = −1 … always **2x**. A formula that gives the gradient at *any* x is called the **gradient function** or **derivative**, written\n\n    {{dy/dx}}   (say \"dee y by dee x\")\n\nSo for {{y = x^2}}, {{dy/dx = 2x}}. Finding it is called **differentiating**.\n\n**What {{dy/dx}} means.** It is \"the rate of change of y with respect to x\": how many units y goes up for each unit x goes up, *right at that instant*. The d stands for a tiny difference — {{dy/dx}} is not d × y ÷ d × x, and you must not cancel the d's.\n\n**Reading the sign**\n\n| {{dy/dx}} | What the curve is doing at that point |\n|---|---|\n| positive | going **up** (increasing) left to right |\n| negative | going **down** (decreasing) |\n| zero | **flat** — a turning point or a stationary point |\n| large | steep |\n\n**Before calculus: estimating from a drawn graph.** On Paper 1H/2H you may be asked to *estimate* the gradient of a curve at a point. Draw a tangent carefully with a ruler, pick two points far apart **on your tangent** (not on the curve), and work out {{(rise)/(run)}}. In context the gradient is a **rate**: on a distance–time graph it is a speed, on a volume–time graph it is a flow rate — give units.\n\n**Other notation.** If the curve is written {{f(x) = x^2}}, the gradient function is written {{f'(x) = 2x}} (\"f dash of x\"). Same idea, different label.",
      diagram: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y equals x squared with point P at (1, 1). Chords from P to (3, 9) and (2, 4) have gradients 4 and 3. The dashed tangent at P has gradient 2."><rect width="440" height="300" fill="#ffffff"/><line x1="40.0" y1="243.2" x2="420.0" y2="243.2" stroke="#334155" stroke-width="1.5"/><line x1="94.3" y1="270.0" x2="94.3" y2="20.0" stroke="#334155" stroke-width="1.5"/><line x1="184.8" y1="240.2" x2="184.8" y2="246.2" stroke="#334155"/><text x="184.8" y="258.2" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">1</text><line x1="275.2" y1="240.2" x2="275.2" y2="246.2" stroke="#334155"/><text x="275.2" y="258.2" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><line x1="365.7" y1="240.2" x2="365.7" y2="246.2" stroke="#334155"/><text x="365.7" y="258.2" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">3</text><line x1="91.3" y1="198.6" x2="97.3" y2="198.6" stroke="#334155"/><text x="88.3" y="202.6" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">2</text><line x1="91.3" y1="153.9" x2="97.3" y2="153.9" stroke="#334155"/><text x="88.3" y="157.9" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">4</text><line x1="91.3" y1="109.3" x2="97.3" y2="109.3" stroke="#334155"/><text x="88.3" y="113.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">6</text><line x1="91.3" y1="64.6" x2="97.3" y2="64.6" stroke="#334155"/><text x="88.3" y="68.6" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">8</text><text x="416.0" y="237.2" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">x</text><text x="100.3" y="32.0" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><line x1="121.4" y1="283.4" x2="392.9" y2="15.5" stroke="#93c5fd" stroke-width="1.6"/><line x1="112.4" y1="274.5" x2="392.9" y2="66.9" stroke="#60a5fa" stroke-width="1.6"/><line x1="85.2" y1="270.0" x2="392.9" y2="118.2" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/><path d="M40.0 235.2L42.8 236.0L45.7 236.8L48.5 237.5L51.3 238.2L54.1 238.8L57.0 239.4L59.8 240.0L62.6 240.5L65.4 240.9L68.3 241.4L71.1 241.7L73.9 242.1L76.8 242.4L79.6 242.6L82.4 242.8L85.2 243.0L88.1 243.1L90.9 243.2L93.7 243.2L96.5 243.2L99.4 243.1L102.2 243.0L105.0 242.9L107.9 242.7L110.7 242.5L113.5 242.2L116.3 241.9L119.2 241.5L122.0 241.1L124.8 240.7L127.6 240.2L130.5 239.6L133.3 239.1L136.1 238.4L139.0 237.8L141.8 237.1L144.6 236.3L147.4 235.5L150.3 234.7L153.1 233.8L155.9 232.9L158.8 231.9L161.6 230.9L164.4 229.8L167.2 228.7L170.1 227.6L172.9 226.4L175.7 225.1L178.5 223.9L181.4 222.5L184.2 221.2L187.0 219.8L189.9 218.3L192.7 216.8L195.5 215.3L198.3 213.7L201.2 212.1L204.0 210.4L206.8 208.7L209.6 206.9L212.5 205.1L215.3 203.3L218.1 201.4L221.0 199.5L223.8 197.5L226.6 195.5L229.4 193.4L232.3 191.3L235.1 189.2L237.9 187.0L240.7 184.7L243.6 182.4L246.4 180.1L249.2 177.8L252.1 175.3L254.9 172.9L257.7 170.4L260.5 167.8L263.4 165.3L266.2 162.6L269.0 160.0L271.8 157.2L274.7 154.5L277.5 151.7L280.3 148.8L283.2 145.9L286.0 143.0L288.8 140.0L291.6 137.0L294.5 133.9L297.3 130.8L300.1 127.7L302.9 124.5L305.8 121.3L308.6 118.0L311.4 114.6L314.3 111.3L317.1 107.9L319.9 104.4L322.7 100.9L325.6 97.4L328.4 93.8L331.2 90.1L334.0 86.5L336.9 82.7L339.7 79.0L342.5 75.2L345.4 71.3L348.2 67.4L351.0 63.5L353.8 59.5L356.7 55.5L359.5 51.4L362.3 47.3L365.1 43.2L368.0 39.0L370.8 34.7L373.6 30.4L376.5 26.1L379.3 21.7" fill="none" stroke="#1f2937" stroke-width="2.2"/><circle cx="184.8" cy="220.9" r="4" fill="#fde68a" stroke="#1f2937"/><circle cx="275.2" cy="153.9" r="4" fill="#bae6fd" stroke="#1f2937"/><circle cx="365.7" cy="42.3" r="4" fill="#bae6fd" stroke="#1f2937"/><text x="192.8" y="236.9" font-size="12" font-family="sans-serif" fill="#1f2937">P(1, 1)</text><text x="262.0" y="140.0" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">(2, 4)</text><text x="315.7" y="44.3" font-size="12" font-family="sans-serif" fill="#1f2937">(3, 9)</text><text x="394.9" y="29.5" font-size="11" font-family="sans-serif" fill="#2563eb">4</text><text x="394.9" y="70.9" font-size="11" font-family="sans-serif" fill="#2563eb">3</text><text x="394.9" y="122.2" font-size="11" font-family="sans-serif" fill="#dc2626">2</text><text x="250.0" y="40.0" font-size="13" font-family="sans-serif" fill="#1f2937">y = x²</text><text x="250.0" y="268.0" font-size="11" font-family="sans-serif" fill="#334155">chord gradients 4, 3, … → tangent gradient 2</text></svg>`,
      diagramCaption:
        "Chords from P(1, 1) to (3, 9) and to (2, 4) have gradients 4 and 3. As the second point slides towards P, the chord becomes the dashed tangent, gradient 2.",
      workedExamples: [
        {
          title: "Chords closing in on a tangent",
          problem:
            "The curve {{y = x^2}} passes through P(3, 9).\n\n(a) Work out the gradient of the chord from P to Q(3.1, 9.61).\n(b) Work out the gradient of the chord from P to R(3.01, 9.0601).\n(c) Use your answers to suggest the gradient of the curve at P.",
          steps: [
            "(a) Gradient PQ = {{(9.61 - 9)/(3.1 - 3) = 0.61/0.1 = 6.1}}.",
            "(b) Gradient PR = {{(9.0601 - 9)/(3.01 - 3) = 0.0601/0.01 = 6.01}}.",
            "(c) As the second point gets closer to P the gradients go 6.1, 6.01, … — they are approaching 6.",
            "Check with the gradient function: {{dy/dx = 2x = 2 * 3 = 6}} ✓.",
          ],
          answer: "(a) 6.1  (b) 6.01  (c) 6",
          yourTurn: {
            question:
              "Your turn: the curve {{y = x^2}} passes through (2, 4) and (2.1, 4.41). Work out the gradient of the chord joining these two points.",
            answer: { type: "number", value: 4.1 },
            solution: "{{(4.41 - 4)/(2.1 - 2) = 0.41/0.1 = 4.1}} — just above the true gradient {{2 * 2 = 4}}, as the chord is slightly steeper than the tangent.",
          },
        },
        {
          title: "Estimating a rate from a tangent",
          problem:
            "Siti fills a vase. The graph of the depth of water, d cm, against time, t seconds, is a curve. She draws the tangent at t = 10. It passes through (4, 5) and (16, 14). Estimate the rate at which the depth is increasing at t = 10 seconds.",
          steps: [
            "The rate of change is the gradient of the tangent at t = 10.",
            "Use the two points on the **tangent**, not on the curve: gradient = {{(14 - 5)/(16 - 4) = 9/12 = 0.75}}.",
            "Give the units: depth (cm) per time (s).",
          ],
          answer: "About 0.75 cm/s",
          yourTurn: {
            question:
              "Your turn: on a distance–time graph Marcus draws the tangent at t = 30 s. It passes through (10, 20) and (50, 140), where distance is in metres. Estimate his speed at t = 30 s, in m/s.",
            answer: { type: "number", value: 3 },
            solution: "Speed = gradient of the tangent = {{(140 - 20)/(50 - 10) = 120/40 = 3}} m/s.",
          },
        },
      ],
      keyPoints: [
        "Gradient of a curve at a point = gradient of the **tangent** at that point.",
        "Chords from P to nearer and nearer points have gradients that approach the tangent's gradient.",
        "{{dy/dx}} is the **gradient function**: put in an x-value, get the gradient there.",
        "{{dy/dx > 0}}: increasing; {{dy/dx < 0}}: decreasing; {{dy/dx = 0}}: flat (stationary).",
        "Estimating from a drawn graph: draw a tangent, use two far-apart points **on the tangent**, include units.",
        "{{f'(x)}} means the same as {{dy/dx}} when the curve is {{y = f(x)}}.",
      ],
      whyItWorks:
        "Take P(x, {{x^2}}) and a nearby point Q a tiny distance h to the right: Q(x + h, {{(x + h)^2}}).\n\n    gradient PQ = {{((x + h)^2 - x^2)/h}}\n                = {{(x^2 + 2xh + h^2 - x^2)/h}}\n                = {{(2xh + h^2)/h}}\n                = 2x + h\n\nAs Q slides onto P, h shrinks towards 0, so the chord gradient 2x + h settles on **2x**. That is exactly what the table showed at x = 1 (2.1, 2.01, …) — the extra bit was h. This \"differentiation from first principles\" is where every rule in this topic comes from.",
      strategies: ["Try small cases", "Find a pattern", "Draw a diagram", "Make it simpler"],
      thinkDeeper:
        "Repeat the first-principles argument for {{y = x^3}}. Expand {{(x + h)^3}} and find the chord gradient in terms of x and h. What does it approach as h → 0? What do you predict for {{y = x^4}}?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "differentiating-powers",
      heading: "Differentiating ax^n",
      discovery: {
        problem:
          "From the chord experiments: {{y = x^2}} has gradient function 2x, and {{y = x^3}} has gradient function {{3x^2}}. A straight line y = x has gradient 1 everywhere, and a horizontal line y = 5 has gradient 0.\n\nSpot the pattern. Predict the gradient function of {{y = x^4}}, of {{y = x^10}} and of {{y = 7x^4}}.",
        idea:
          "The power comes down in front and the power drops by one:\n\n    {{x^2 → 2x^1}}, {{x^3 → 3x^2}}, {{x^1 → 1x^0 = 1}}\n\nSo {{x^4 → 4x^3}} and {{x^10 → 10x^9}}. Multiplying the curve by 7 stretches it vertically, so every gradient is 7 times as big: {{7x^4 → 28x^3}}.",
      },
      body:
        "**The power rule**\n\n    If {{y = ax^n}}, then {{dy/dx = nax^(n-1)}}\n\n\"Multiply by the power, then reduce the power by one.\" It works for **any** whole-number power n — positive, zero or negative.\n\n**Three special cases**\n\n- {{y = kx}} (a straight line): {{dy/dx = k}}. The gradient is the coefficient of x — just as in y = mx + c.\n- {{y = k}} (a constant): {{dy/dx = 0}}. A horizontal line has zero gradient. Constants **disappear**.\n- {{y = x^n}} with n negative, e.g. {{x^(-2)}}: the rule still works, but the power gets **more negative**: −2 − 1 = −3.\n\n**Sums and differences.** Differentiate term by term:\n\n    {{y = 4x^3 - 5x^2 + 7x - 9}}\n    {{dy/dx = 12x^2 - 10x + 7}}\n\n**Get it into the form {{ax^n}} first.** The rule only works on single powers of x added together. Exam questions deliberately hide them:\n\n| Given | Rewrite as | Then {{dy/dx}} |\n|---|---|---|\n| {{(2x + 3)(x - 4)}} | **expand**: {{2x^2 - 5x - 12}} | {{4x - 5}} |\n| {{(x^3 + 6x)/x}} | **split**: {{x^2 + 6}} | 2x |\n| {{5/x}} | {{5x^(-1)}} | {{-5x^(-2) = -5/x^2}} |\n| {{3/x^2}} | {{3x^(-2)}} | {{-6x^(-3) = -6/x^3}} |\n| {{1/(2x)}} | {{1/2 x^(-1)}} | {{-1/2 x^(-2) = -1/(2x^2)}} |\n\nTwo traps in that table:\n\n- **You cannot differentiate a product by differentiating each bracket.** {{(2x + 3)(x - 4)}} does *not* differentiate to 2 × 1 = 2. Expand first.\n- **{{1/(2x)}} is not {{2x^(-1)}}.** Only the x moves up: {{1/(2x) = 1/2 * 1/x = 1/2 x^(-1)}}.\n\n**Higher powers and notation.** Differentiating {{dy/dx}} again gives the **second derivative**, {{(d^2 y)/(dx^2)}} — the rate at which the gradient itself is changing. You will use it to classify turning points. For {{y = x^4 - 3x^2}}: {{dy/dx = 4x^3 - 6x}} and {{(d^2 y)/(dx^2) = 12x^2 - 6}}.",
      diagram: `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The power rule: a x to the n differentiates to n a x to the n minus 1, with a table of examples: 5x cubed gives 15x squared, 7x gives 7, a constant 9 gives 0, and 4 over x squared gives minus 8 over x cubed."><rect width="440" height="250" fill="#ffffff"/><rect x="20" y="16" width="110" height="44" rx="8" fill="#c7d2fe" stroke="#334155"/><rect x="310" y="16" width="110" height="44" rx="8" fill="#bbf7d0" stroke="#334155"/><text x="75.0" y="44.0" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#1f2937">a xⁿ</text><text x="365.0" y="44.0" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#1f2937">n a xⁿ⁻¹</text><line x1="135" y1="38" x2="300" y2="38" stroke="#334155" stroke-width="2"/><path d="M300 32 L310 38 L300 44 Z" fill="#334155"/><text x="220.0" y="30.0" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">power down in front,</text><text x="220.0" y="56.0" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">then power − 1</text><rect x="20" y="76" width="400" height="28" fill="#fde68a"/><text x="30.0" y="96.0" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><text x="150.0" y="96.0" font-size="13" font-family="sans-serif" fill="#1f2937">dy/dx</text><text x="265.0" y="96.0" font-size="11" font-family="sans-serif" fill="#334155">why</text><line x1="20" y1="110" x2="420" y2="110" stroke="#cbd5e1"/><text x="30.0" y="130.0" font-size="13" font-family="sans-serif" fill="#1f2937">5x³</text><text x="150.0" y="130.0" font-size="13" font-family="sans-serif" fill="#1f2937">15x²</text><text x="265.0" y="130.0" font-size="11" font-family="sans-serif" fill="#334155">3 × 5 = 15, power 3 → 2</text><line x1="20" y1="144" x2="420" y2="144" stroke="#cbd5e1"/><text x="30.0" y="164.0" font-size="13" font-family="sans-serif" fill="#1f2937">7x</text><text x="150.0" y="164.0" font-size="13" font-family="sans-serif" fill="#1f2937">7</text><text x="265.0" y="164.0" font-size="11" font-family="sans-serif" fill="#334155">x¹ → 1 × 7x⁰ = 7</text><line x1="20" y1="178" x2="420" y2="178" stroke="#cbd5e1"/><text x="30.0" y="198.0" font-size="13" font-family="sans-serif" fill="#1f2937">9</text><text x="150.0" y="198.0" font-size="13" font-family="sans-serif" fill="#1f2937">0</text><text x="265.0" y="198.0" font-size="11" font-family="sans-serif" fill="#334155">constant: flat, gradient 0</text><line x1="20" y1="212" x2="420" y2="212" stroke="#cbd5e1"/><text x="30.0" y="232.0" font-size="13" font-family="sans-serif" fill="#1f2937">4/x² = 4x⁻²</text><text x="150.0" y="232.0" font-size="13" font-family="sans-serif" fill="#1f2937">−8x⁻³ = −8/x³</text><text x="265.0" y="232.0" font-size="11" font-family="sans-serif" fill="#334155">−2 × 4 = −8, power −2 → −3</text></svg>`,
      diagramCaption: "The power rule as a machine: bring the power down as a multiplier, then reduce the power by one. Constants vanish; negative powers become more negative.",
      workedExamples: [
        {
          title: "A polynomial, term by term",
          problem: "{{y = 4x^3 - 5x^2 + 7x - 9}}. Find {{dy/dx}}.",
          steps: [
            "{{4x^3}}: 3 × 4 = 12, power 3 − 1 = 2, giving {{12x^2}}.",
            "{{-5x^2}}: 2 × (−5) = −10, power 1, giving −10x.",
            "7x: the coefficient of x, giving 7.",
            "−9: a constant, giving 0.",
          ],
          answer: "{{dy/dx = 12x^2 - 10x + 7}}",
          yourTurn: {
            question: "Your turn: {{y = 2x^4 - 3x^2 + 6x - 1}}. Find {{dy/dx}}.",
            answer: { type: "expression", expr: "8x^3-6x+6" },
            solution: "{{2x^4 → 8x^3}}, {{-3x^2 → -6x}}, 6x → 6, −1 → 0. So {{dy/dx = 8x^3 - 6x + 6}}.",
          },
        },
        {
          title: "Rewrite before you differentiate",
          problem: "{{y = (3x^4 + 2x)/x^2 + 6/x}}. Find {{dy/dx}}.",
          steps: [
            "Split the fraction: {{(3x^4)/x^2 + (2x)/x^2 = 3x^2 + 2/x}}.",
            "So {{y = 3x^2 + 2/x + 6/x = 3x^2 + 8/x}}.",
            "Write with a negative power: {{y = 3x^2 + 8x^(-1)}}.",
            "Differentiate: {{dy/dx = 6x + 8 * (-1)x^(-2) = 6x - 8x^(-2)}}.",
            "Tidy: {{dy/dx = 6x - 8/x^2}}.",
          ],
          answer: "{{dy/dx = 6x - 8/x^2}}",
          yourTurn: {
            question: "Your turn: {{y = (2x + 3)(x - 4)}}. Find {{dy/dx}}.",
            answer: { type: "expression", expr: "4x-5" },
            solution: "Expand first: {{y = 2x^2 - 8x + 3x - 12 = 2x^2 - 5x - 12}}. Then {{dy/dx = 4x - 5}}.",
          },
        },
      ],
      keyPoints: [
        "{{y = ax^n}} ⇒ {{dy/dx = nax^(n-1)}}.",
        "kx differentiates to k; a constant differentiates to 0.",
        "Differentiate a sum term by term.",
        "**Expand** brackets and **split** fractions before differentiating.",
        "Write {{k/x^n}} as {{kx^(-n)}}; the new power is one **more negative**.",
        "{{(d^2 y)/(dx^2)}} means differentiate twice.",
      ],
      whyItWorks:
        "Why does the power come down? Expand {{(x + h)^n}}: it starts {{x^n + nx^(n-1) h + (terms with h^2, h^3, …)}}. In the chord gradient {{((x + h)^n - x^n)/h}} the {{x^n}} cancels, dividing by h leaves {{nx^(n-1)}} plus terms that still contain h, and those vanish as h → 0. There are exactly n ways to pick one h from n brackets — that is where the multiplier n comes from.\n\nWhy does a constant vanish? Adding 9 to a curve slides it straight up: every point moves, but no slope changes. And multiplying by a stretches every rise by a while the runs stay the same, so every gradient is multiplied by a.",
      strategies: ["Make it simpler", "Find a pattern", "Check by substituting", "Introduce a variable"],
      thinkDeeper:
        "The power rule also works for fractional powers (beyond the 4MA1 syllabus, but true). Write {{sqrt(x)}} as {{x^(1/2)}} and differentiate it. Check your answer by estimating the gradient of {{y = sqrt(x)}} at x = 4 with a chord from (4, 2) to (4.01, {{sqrt(4.01)}}).",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "tangents",
      heading: "Gradients and tangents",
      discovery: {
        problem:
          "The curve {{y = x^3 - 2x^2 + 1}} passes through (2, 1).\n\nYou already know how to find the equation of a straight line if you know **one point** on it and its **gradient**. What extra piece of information do you need to write the equation of the tangent at (2, 1) — and how can you get it?",
        idea:
          "You have the point (2, 1); you need the **gradient** there — and that is exactly what {{dy/dx}} gives.\n\n    {{dy/dx = 3x^2 - 4x}}, so at x = 2 the gradient is 12 − 8 = 4.\n\nNow use the point and the gradient: {{y - 1 = 4(x - 2)}}, so **y = 4x − 7**.",
      },
      body:
        "**Gradient at a point.** Differentiate, then **substitute the x-coordinate** into {{dy/dx}}. (Never substitute into y — that gives a height, not a gradient.)\n\n**Equation of the tangent at a point**\n\n1. If you are only given x, substitute into **y** to get the y-coordinate.\n2. Differentiate and substitute x into {{dy/dx}} to get the gradient m.\n3. Use {{y - y_1 = m(x - x_1)}} (or y = mx + c and find c).\n4. Rearrange into the form the question asks for, e.g. y = mx + c or ax + by + c = 0 with integers.\n\n**Working backwards: where is the gradient equal to k?** Now you know the gradient and want x. Set {{dy/dx = k}} and **solve the equation**. With a cubic curve this is a quadratic, so there are usually **two** points. Then substitute each x into **y** to get the coordinates.\n\n    {{y = x^3 - 6x^2 + 4}}, gradient −9:\n    {{3x^2 - 12x = -9}}  ⇒  {{x^2 - 4x + 3 = 0}}  ⇒  x = 1 or x = 3\n    Points (1, −1) and (3, −23).\n\n**Parallel tangents and lines.** \"The tangent is parallel to y = 5x + 2\" means the gradient is 5: solve {{dy/dx = 5}}.\n\n**Finding an unknown coefficient.** If {{y = ax^2 + bx}} and the gradient at x = 1 is 7, that gives one equation in a and b ({{2a + b = 7}}). A second fact (a point on the curve, another gradient) gives the second equation — then solve simultaneously.\n\n**Summary of what to substitute where**\n\n| You want | Use |\n|---|---|\n| a y-coordinate | the curve's equation, y = … |\n| a gradient | {{dy/dx}} |\n| an x where the gradient is k | solve {{dy/dx = k}} |",
      diagram: `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y equals x cubed minus 2x squared plus 1 with the dashed tangent y equals 4x minus 7 touching the curve at (2, 1)."><rect width="420" height="300" fill="#ffffff"/><line x1="40.0" y1="195.0" x2="400.0" y2="195.0" stroke="#334155" stroke-width="1.5"/><line x1="133.9" y1="270.0" x2="133.9" y2="20.0" stroke="#334155" stroke-width="1.5"/><line x1="55.7" y1="192.0" x2="55.7" y2="198.0" stroke="#334155"/><text x="55.7" y="210.0" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">−1</text><line x1="212.2" y1="192.0" x2="212.2" y2="198.0" stroke="#334155"/><text x="212.2" y="210.0" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">1</text><line x1="290.4" y1="192.0" x2="290.4" y2="198.0" stroke="#334155"/><text x="290.4" y="210.0" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><line x1="368.7" y1="192.0" x2="368.7" y2="198.0" stroke="#334155"/><text x="368.7" y="210.0" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">3</text><line x1="130.9" y1="261.7" x2="136.9" y2="261.7" stroke="#334155"/><text x="127.9" y="265.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">−4</text><line x1="130.9" y1="228.3" x2="136.9" y2="228.3" stroke="#334155"/><text x="127.9" y="232.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">−2</text><line x1="130.9" y1="161.7" x2="136.9" y2="161.7" stroke="#334155"/><text x="127.9" y="165.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">2</text><line x1="130.9" y1="128.3" x2="136.9" y2="128.3" stroke="#334155"/><text x="127.9" y="132.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">4</text><line x1="130.9" y1="95.0" x2="136.9" y2="95.0" stroke="#334155"/><text x="127.9" y="99.0" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">6</text><line x1="130.9" y1="61.7" x2="136.9" y2="61.7" stroke="#334155"/><text x="127.9" y="65.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">8</text><line x1="130.9" y1="28.3" x2="136.9" y2="28.3" stroke="#334155"/><text x="127.9" y="32.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">10</text><text x="396.0" y="189.0" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">x</text><text x="139.9" y="32.0" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><line x1="184.8" y1="268.3" x2="392.2" y2="91.7" stroke="#dc2626" stroke-width="2" stroke-dasharray="6 4"/><path d="M51.7 234.4L54.4 230.2L57.0 226.3L59.7 222.5L62.4 218.9L65.0 215.5L67.7 212.3L70.3 209.3L73.0 206.4L75.6 203.7L78.3 201.2L80.9 198.8L83.6 196.5L86.2 194.5L88.9 192.5L91.6 190.7L94.2 189.1L96.9 187.6L99.5 186.2L102.2 184.9L104.8 183.8L107.5 182.8L110.1 181.9L112.8 181.1L115.4 180.4L118.1 179.8L120.8 179.4L123.4 179.0L126.1 178.7L128.7 178.5L131.4 178.4L134.0 178.3L136.7 178.4L139.3 178.5L142.0 178.7L144.6 178.9L147.3 179.2L149.9 179.6L152.6 180.0L155.3 180.5L157.9 181.0L160.6 181.5L163.2 182.1L165.9 182.8L168.5 183.4L171.2 184.1L173.8 184.8L176.5 185.5L179.1 186.3L181.8 187.0L184.5 187.7L187.1 188.5L189.8 189.3L192.4 190.0L195.1 190.7L197.7 191.5L200.4 192.2L203.0 192.9L205.7 193.5L208.3 194.1L211.0 194.7L213.7 195.3L216.3 195.8L219.0 196.3L221.6 196.7L224.3 197.1L226.9 197.4L229.6 197.7L232.2 197.9L234.9 198.0L237.5 198.1L240.2 198.1L242.9 198.0L245.5 197.8L248.2 197.5L250.8 197.2L253.5 196.7L256.1 196.2L258.8 195.5L261.4 194.7L264.1 193.9L266.7 192.9L269.4 191.8L272.0 190.5L274.7 189.2L277.4 187.7L280.0 186.1L282.7 184.3L285.3 182.4L288.0 180.4L290.6 178.2L293.3 175.8L295.9 173.3L298.6 170.6L301.2 167.8L303.9 164.8L306.6 161.6L309.2 158.3L311.9 154.7L314.5 151.0L317.2 147.1L319.8 143.0L322.5 138.7L325.1 134.2L327.8 129.5L330.4 124.6L333.1 119.5L335.8 114.1L338.4 108.6L341.1 102.8L343.7 96.8L346.4 90.5L349.0 84.1L351.7 77.3L354.3 70.4L357.0 63.2L359.6 55.7L362.3 48.0L365.0 40.0L367.6 31.8L370.3 23.3" fill="none" stroke="#1f2937" stroke-width="2.2"/><circle cx="290.4" cy="178.3" r="4" fill="#fde68a" stroke="#1f2937"/><text x="300.4" y="192.3" font-size="12" font-family="sans-serif" fill="#1f2937">(2, 1)</text><text x="155.0" y="45.0" font-size="13" font-family="sans-serif" fill="#1f2937">y = x³ − 2x² + 1</text><text x="155.0" y="68.3" font-size="12" font-family="sans-serif" fill="#dc2626">tangent at x = 2:</text><text x="155.0" y="88.3" font-size="12" font-family="sans-serif" fill="#dc2626">y = 4x − 7</text></svg>`,
      diagramCaption: "The tangent to {{y = x^3 - 2x^2 + 1}} at (2, 1) has gradient {{dy/dx = 3(2)^2 - 4(2) = 4}}, giving y = 4x − 7.",
      workedExamples: [
        {
          title: "Equation of a tangent",
          problem: "Find the equation of the tangent to the curve {{y = x^3 - 2x^2 + 1}} at the point where x = 2. Give your answer in the form y = mx + c.",
          steps: [
            "y-coordinate: {{y = 2^3 - 2(2)^2 + 1 = 8 - 8 + 1 = 1}}. The point is (2, 1).",
            "{{dy/dx = 3x^2 - 4x}}.",
            "Gradient at x = 2: {{3(4) - 4(2) = 12 - 8 = 4}}.",
            "{{y - 1 = 4(x - 2)}}, so {{y - 1 = 4x - 8}}.",
            "y = 4x − 7.",
          ],
          answer: "y = 4x − 7",
          yourTurn: {
            question: "Your turn: find the equation of the tangent to {{y = x^2 - 5x + 8}} at the point where x = 3.",
            answer: { type: "equation", eq: "y=x-1", display: "y = x − 1" },
            solution: "y = 9 − 15 + 8 = 2, so the point is (3, 2). {{dy/dx = 2x - 5 = 1}} at x = 3. {{y - 2 = 1(x - 3)}}, so y = x − 1.",
          },
        },
        {
          title: "Where the gradient has a given value",
          problem: "The curve C has equation {{y = 2x^2 - 7x + 3}}. Find the coordinates of the point on C where the gradient is 5.",
          steps: [
            "{{dy/dx = 4x - 7}}.",
            "Set it equal to 5: {{4x - 7 = 5}}, so 4x = 12 and x = 3.",
            "Substitute x = 3 into the **curve**: {{y = 2(9) - 21 + 3 = 0}}.",
          ],
          answer: "(3, 0)",
          yourTurn: {
            question: "Your turn: the curve {{y = x^3 - 12x + 5}} has gradient 0 at two points. Find the x-coordinates of these points.",
            answer: { type: "list", values: [2, -2], ordered: false, display: "x = 2 and x = −2" },
            solution: "{{dy/dx = 3x^2 - 12 = 0}} ⇒ {{x^2 = 4}} ⇒ x = 2 or x = −2.",
          },
        },
      ],
      keyPoints: [
        "Gradient at a point: substitute x into {{dy/dx}}, not into y.",
        "Tangent: point (from y) + gradient (from {{dy/dx}}) + {{y - y_1 = m(x - x_1)}}.",
        "Gradient equals k: solve {{dy/dx = k}}, then use **y** to finish the coordinates.",
        "Parallel lines share a gradient.",
        "Two unknown coefficients need two facts — set up simultaneous equations.",
      ],
      whyItWorks:
        "Close to the point of contact, a smooth curve and its tangent are almost indistinguishable — zoom in far enough on any smooth graph and it looks straight. That straight line is the tangent, so its gradient must be the curve's gradient at that point, which is what {{dy/dx}} measures. Once you know a point and a gradient, a straight line is completely fixed, which is why {{y - y_1 = m(x - x_1)}} finishes the job: it literally says \"rise = gradient × run\" measured from the known point.",
      strategies: ["Work backwards", "Check by substituting", "Draw a diagram", "Introduce a variable"],
      thinkDeeper:
        "The tangent to {{y = x^3 - 2x^2 + 1}} at (2, 1) is y = 4x − 7. Solve {{x^3 - 2x^2 + 1 = 4x - 7}} to find **every** point where this tangent meets the curve. (Hint: you already know one root — and it appears twice. Why?)",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "turning-points",
      heading: "Turning points",
      discovery: {
        problem:
          "Ravi has 40 m of fencing to make a rectangular vegetable plot against a long wall (the wall is one side, so the fence only covers three sides).\n\nTry widths (the two sides that stick out from the wall) of 5 m, 8 m, 10 m, 12 m and 15 m. Which gives the biggest area? Is there a way to be **sure** you've found the very best width, not just the best of the ones you tried?",
        idea:
          "With width x, the length is 40 − 2x, so the area is {{A = x(40 - 2x) = 40x - 2x^2}}. Trying values gives 150, 192, **200**, 192, 150 m² — it rises and then falls.\n\nAt the very top the graph is momentarily **flat**, so its gradient is zero:\n\n    {{(dA)/(dx) = 40 - 4x = 0}}  ⇒  x = 10\n\nThat proves the best width is 10 m and the maximum area is 200 m².",
      },
      body:
        "A **turning point** (or **stationary point**) is where the curve is momentarily flat — the gradient is zero.\n\n    At a turning point, {{dy/dx = 0}}.\n\n**Finding turning points**\n\n1. Differentiate.\n2. Set {{dy/dx = 0}} and solve (often a quadratic — factorise or use the formula).\n3. Substitute each x into **y** to get the coordinates.\n4. Decide whether each is a **maximum** or a **minimum**.\n\n**Method A — the sign of the gradient either side.** Pick an x a little left and a little right of the turning point and work out {{dy/dx}}.\n\n| Gradient: left, at, right | Shape | Type |\n|---|---|---|\n| +, 0, − | up, flat, down | **maximum** |\n| −, 0, + | down, flat, up | **minimum** |\n\n**Method B — the second derivative.** Work out {{(d^2 y)/(dx^2)}} at the turning point.\n\n- {{(d^2 y)/(dx^2) < 0}}: the gradient is decreasing (going from + to −), so it is a **maximum**.\n- {{(d^2 y)/(dx^2) > 0}}: the gradient is increasing (− to +), so it is a **minimum**.\n- {{(d^2 y)/(dx^2) = 0}}: the test fails — go back to Method A.\n\nMethod B is usually quicker; Method A always works. Exam questions say \"Show that…\" or \"Determine the nature\": either method earns the marks if you **state the conclusion with a reason**.\n\n**Shape shortcut.** A positive {{x^2}} quadratic has one minimum; a negative one has one maximum. A positive {{x^3}} cubic with two turning points has the **maximum on the left** and the minimum on the right (see the diagram). Use this to check your answer, but still show a test.\n\n**Optimisation in context**\n\n1. Introduce a variable (usually given) and write the quantity to be maximised or minimised as a **single-variable** formula. If there are two variables, use the constraint (fixed perimeter, fixed volume) to eliminate one.\n2. Differentiate, set equal to 0, solve.\n3. Reject impossible values (negative lengths, lengths that make a side zero).\n4. Show it is a max/min.\n5. Answer the question asked — often the maximum **value** (the area or volume), not x.",
      diagram: `<svg viewBox="0 0 440 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y equals x cubed minus 3x squared minus 9x plus 5 with a maximum at (−1, 10) and a minimum at (3, −22), horizontal tangents at both, and the gradient signs plus, minus, plus marked along the curve."><rect width="440" height="310" fill="#ffffff"/><line x1="40.0" y1="115.1" x2="420.0" y2="115.1" stroke="#334155" stroke-width="1.5"/><line x1="181.4" y1="280.0" x2="181.4" y2="20.0" stroke="#334155" stroke-width="1.5"/><line x1="93.0" y1="112.1" x2="93.0" y2="118.1" stroke="#334155"/><text x="93.0" y="130.1" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">−2</text><line x1="137.2" y1="112.1" x2="137.2" y2="118.1" stroke="#334155"/><text x="137.2" y="130.1" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">−1</text><line x1="225.6" y1="112.1" x2="225.6" y2="118.1" stroke="#334155"/><text x="225.6" y="130.1" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">1</text><line x1="269.8" y1="112.1" x2="269.8" y2="118.1" stroke="#334155"/><text x="269.8" y="130.1" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><line x1="314.0" y1="112.1" x2="314.0" y2="118.1" stroke="#334155"/><text x="314.0" y="130.1" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">3</text><line x1="358.1" y1="112.1" x2="358.1" y2="118.1" stroke="#334155"/><text x="358.1" y="130.1" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">4</text><line x1="402.3" y1="112.1" x2="402.3" y2="118.1" stroke="#334155"/><text x="402.3" y="130.1" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">5</text><line x1="178.4" y1="242.0" x2="184.4" y2="242.0" stroke="#334155"/><text x="175.4" y="246.0" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">−20</text><line x1="178.4" y1="178.5" x2="184.4" y2="178.5" stroke="#334155"/><text x="175.4" y="182.5" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">−10</text><line x1="178.4" y1="51.7" x2="184.4" y2="51.7" stroke="#334155"/><text x="175.4" y="55.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">10</text><text x="416.0" y="109.1" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">x</text><text x="187.4" y="32.0" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><path d="M59.9 202.2L62.8 190.1L65.6 178.5L68.5 167.6L71.4 157.2L74.2 147.3L77.1 138.0L80.0 129.3L82.9 121.1L85.7 113.4L88.6 106.2L91.5 99.5L94.3 93.3L97.2 87.6L100.1 82.3L103.0 77.5L105.8 73.2L108.7 69.2L111.6 65.7L114.5 62.7L117.3 60.0L120.2 57.7L123.1 55.8L125.9 54.3L128.8 53.1L131.7 52.3L134.6 51.8L137.4 51.7L140.3 51.9L143.2 52.4L146.0 53.2L148.9 54.3L151.8 55.6L154.7 57.3L157.5 59.1L160.4 61.3L163.3 63.6L166.2 66.2L169.0 69.1L171.9 72.1L174.8 75.3L177.6 78.7L180.5 82.3L183.4 86.0L186.3 89.9L189.1 94.0L192.0 98.1L194.9 102.4L197.7 106.8L200.6 111.3L203.5 115.9L206.4 120.6L209.2 125.3L212.1 130.1L215.0 135.0L217.8 139.9L220.7 144.8L223.6 149.7L226.5 154.7L229.3 159.6L232.2 164.6L235.1 169.5L238.0 174.3L240.8 179.2L243.7 183.9L246.6 188.6L249.4 193.3L252.3 197.8L255.2 202.2L258.1 206.6L260.9 210.8L263.8 214.9L266.7 218.8L269.5 222.6L272.4 226.3L275.3 229.8L278.2 233.0L281.0 236.1L283.9 239.0L286.8 241.7L289.7 244.2L292.5 246.4L295.4 248.4L298.3 250.1L301.1 251.6L304.0 252.8L306.9 253.7L309.8 254.3L312.6 254.6L315.5 254.6L318.4 254.2L321.2 253.6L324.1 252.5L327.0 251.2L329.9 249.4L332.7 247.3L335.6 244.8L338.5 241.8L341.3 238.5L344.2 234.7L347.1 230.6L350.0 225.9L352.8 220.8L355.7 215.3L358.6 209.3L361.5 202.8L364.3 195.8L367.2 188.3L370.1 180.3L372.9 171.7L375.8 162.7L378.7 153.0L381.6 142.9L384.4 132.1L387.3 120.8L390.2 108.9L393.0 96.4L395.9 83.2L398.8 69.5L401.7 55.1L404.5 40.1" fill="none" stroke="#1f2937" stroke-width="2.2"/><line x1="112.0" y1="51.7" x2="160.0" y2="51.7" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="4 3"/><line x1="274.2" y1="254.6" x2="353.7" y2="254.6" stroke="#dc2626" stroke-width="1.6" stroke-dasharray="4 3"/><circle cx="137.2" cy="51.7" r="4" fill="#fecaca" stroke="#1f2937"/><circle cx="314.0" cy="254.6" r="4" fill="#bbf7d0" stroke="#1f2937"/><text x="137.2" y="41.7" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">max (−1, 10)</text><text x="314.0" y="274.6" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">min (3, −22)</text><text x="79.8" y="165.9" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#16a34a">+</text><text x="225.6" y="191.2" font-size="18" font-family="sans-serif" text-anchor="middle" fill="#dc2626">−</text><text x="375.8" y="153.2" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#16a34a">+</text><text x="428.0" y="22.0" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">y = x³ − 3x² − 9x + 5</text><text x="428.0" y="300.0" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">signs show dy/dx</text></svg>`,
      diagramCaption: "{{y = x^3 - 3x^2 - 9x + 5}}: the gradient is positive, then zero at the maximum (−1, 10), negative, zero at the minimum (3, −22), then positive again.",
      workedExamples: [
        {
          title: "Find and classify the turning points",
          problem: "Find the coordinates of the turning points of {{y = x^3 - 3x^2 - 9x + 5}} and determine the nature of each.",
          steps: [
            "{{dy/dx = 3x^2 - 6x - 9}}.",
            "Set to 0: {{3x^2 - 6x - 9 = 0}} ⇒ {{x^2 - 2x - 3 = 0}} ⇒ {{(x - 3)(x + 1) = 0}}, so x = 3 or x = −1.",
            "x = −1: {{y = -1 - 3 + 9 + 5 = 10}}. x = 3: {{y = 27 - 27 - 27 + 5 = -22}}.",
            "{{(d^2 y)/(dx^2) = 6x - 6}}.",
            "At x = −1: 6(−1) − 6 = −12 < 0, so (−1, 10) is a **maximum**.",
            "At x = 3: 18 − 6 = 12 > 0, so (3, −22) is a **minimum**.",
            "Sign check at x = 0 (between them): {{dy/dx = -9 < 0}}, so the curve goes down from the max to the min ✓.",
          ],
          answer: "Maximum (−1, 10); minimum (3, −22)",
          yourTurn: {
            question: "Your turn: the curve {{y = 2x^3 - 6x + 1}} has a minimum point. Find its coordinates.",
            answer: { type: "list", values: [1, -3], ordered: true, display: "(1, −3)" },
            solution: "{{dy/dx = 6x^2 - 6 = 0}} ⇒ x = ±1. {{(d^2 y)/(dx^2) = 12x}}: at x = 1 it is 12 > 0, a minimum. y = 2 − 6 + 1 = −3. Minimum (1, −3). (At x = −1 it is −12 < 0: the maximum (−1, 5).)",
          },
        },
        {
          title: "Optimisation: the open box",
          problem:
            "Jun cuts a square of side x cm from each corner of a 24 cm by 24 cm sheet of card and folds up the sides to make an open box.\n\n(a) Show that the volume is {{V = x(24 - 2x)^2}} cm³.\n(b) Find the value of x that gives the maximum volume, and the maximum volume.",
          steps: [
            "(a) The base is a square of side 24 − 2x (x is removed at each end) and the height is x, so {{V = x(24 - 2x)^2}}.",
            "(b) Expand: {{V = x(576 - 96x + 4x^2) = 4x^3 - 96x^2 + 576x}}.",
            "{{(dV)/(dx) = 12x^2 - 192x + 576 = 12(x^2 - 16x + 48) = 12(x - 4)(x - 12)}}.",
            "{{(dV)/(dx) = 0}} gives x = 4 or x = 12. x = 12 makes the base 0 cm wide (V = 0), so reject it; also x must be between 0 and 12.",
            "{{(d^2 V)/(dx^2) = 24x - 192}}; at x = 4 this is −96 < 0, so a maximum.",
            "{{V = 4 * (24 - 8)^2 = 4 * 256 = 1024}} cm³.",
          ],
          answer: "x = 4 cm; maximum volume 1024 cm³",
          yourTurn: {
            question:
              "Your turn: Ravi now has 48 m of fencing for three sides of a rectangular plot against a wall. With width x m, the area is {{A = x(48 - 2x)}} m². Work out the maximum area, in m².",
            answer: { type: "number", value: 288 },
            solution: "{{A = 48x - 2x^2}}, {{(dA)/(dx) = 48 - 4x = 0}} ⇒ x = 12. {{(d^2 A)/(dx^2) = -4 < 0}}, so a maximum. A = 12 × 24 = 288 m².",
          },
        },
      ],
      keyPoints: [
        "Turning point ⇔ {{dy/dx = 0}}. Solve, then find y from the curve.",
        "Max: gradient +, 0, −, or {{(d^2 y)/(dx^2) < 0}}. Min: −, 0, +, or {{(d^2 y)/(dx^2) > 0}}.",
        "Always state the nature **with a reason** — \"maximum because {{(d^2 y)/(dx^2) = -12 < 0}}\".",
        "Optimisation: one-variable formula → differentiate → = 0 → reject silly roots → test → answer the question.",
        "\"Maximum volume\" wants V, not x.",
      ],
      whyItWorks:
        "Walk along the curve from left to right. Just before a maximum you are climbing (gradient positive); just after it you are descending (gradient negative). A smooth gradient cannot jump from positive to negative without passing through **zero** — that zero is the top.\n\nThe second derivative is the gradient *of the gradient*. At a maximum the gradient goes from + to −, so it is **decreasing**: {{(d^2 y)/(dx^2) < 0}}. At a minimum it goes − to +, increasing: {{(d^2 y)/(dx^2) > 0}}. Think of {{(d^2 y)/(dx^2) > 0}} as a cup that holds water (∪, a minimum) and {{(d^2 y)/(dx^2) < 0}} as a cap that spills it (∩, a maximum).",
      strategies: ["Introduce a variable", "Consider extremes", "Check by substituting", "Draw a diagram"],
      thinkDeeper:
        "{{y = x^3}} has {{dy/dx = 3x^2}}, which is 0 at x = 0 — but the curve does not turn there. What are the signs of the gradient either side of x = 0? What does {{(d^2 y)/(dx^2)}} tell you at x = 0? (This is a **point of inflection**.)",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "kinematics",
      heading: "Kinematics: displacement, velocity, acceleration",
      discovery: {
        problem:
          "A particle moves along a straight line. Its displacement from a fixed point O after t seconds is {{s = t^3 - 6t^2 + 9t}} metres.\n\nWork out s at t = 0, 1, 2, 3 and 4. Describe the journey in words. When do you think the particle stopped?",
        idea:
          "s = 0, 4, 2, 0, 4. It goes out to 4 m, comes **back** to O, then goes out again. To turn round it must stop, momentarily, somewhere near t = 1 and t = 3.\n\nVelocity is the rate of change of displacement — the gradient of the s–t graph:\n\n    {{v = (ds)/(dt) = 3t^2 - 12t + 9 = 3(t - 1)(t - 3)}}\n\nso v = 0 exactly at **t = 1** and **t = 3**.",
      },
      body:
        "For a particle moving in a straight line:\n\n| Quantity | Symbol | Unit | Link |\n|---|---|---|---|\n| displacement from O | s | m | — |\n| velocity | v | m/s | {{v = (ds)/(dt)}} |\n| acceleration | a | m/s² | {{a = (dv)/(dt)}} |\n\nSo you **differentiate once** to go from s to v, and **once more** to go from v to a. (Going the other way needs integration, which is not on 4MA1.)\n\n**Displacement is not distance.** s measures position from O, with a sign: s < 0 means on the other side of O. Velocity has a sign too: v > 0 means moving in the positive direction, v < 0 means moving backwards (towards or past O in the negative direction).\n\n**Standard questions**\n\n- *Velocity / acceleration at time t*: differentiate, substitute t.\n- *Initial* anything: substitute t = 0.\n- *When is the particle at rest?* Solve **v = 0**.\n- *When is the acceleration zero?* Solve **a = 0** — this is when the velocity is at a maximum or minimum.\n- *Maximum velocity*: a = 0 (that is {{(dv)/(dt) = 0}}), then substitute that t into v.\n- *Where is the particle when …?* Substitute t into **s**.\n\n**Interpreting signs**\n\n| v | a | What's happening |\n|---|---|---|\n| + | + | moving forwards, speeding up |\n| + | − | moving forwards, slowing down |\n| − | − | moving backwards, speeding up |\n| − | + | moving backwards, slowing down |\n\nSpeeding up means v and a have the **same** sign.\n\n**Distance travelled** when the particle turns round: find the times it is at rest, work out s at each, and add up the lengths of the separate legs. For {{s = t^3 - 6t^2 + 9t}} from t = 0 to t = 4: out 0 → 4 (4 m), back 4 → 0 (4 m), out 0 → 4 (4 m): **12 m** travelled, although the final displacement is only 4 m.",
      diagram: `<svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Velocity-time graph of v equals 3t squared minus 12t plus 9 for t from 0 to about 4.5 seconds. It crosses zero at t equals 1 and t equals 3, where the particle is at rest; between them v is negative, shaded, meaning the particle moves backwards."><rect width="420" height="290" fill="#ffffff"/><line x1="40.0" y1="205.5" x2="400.0" y2="205.5" stroke="#334155" stroke-width="1.5"/><line x1="61.2" y1="260.0" x2="61.2" y2="20.0" stroke="#334155" stroke-width="1.5"/><line x1="131.8" y1="202.5" x2="131.8" y2="208.5" stroke="#334155"/><text x="131.8" y="220.5" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">1</text><line x1="202.4" y1="202.5" x2="202.4" y2="208.5" stroke="#334155"/><text x="202.4" y="220.5" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><line x1="272.9" y1="202.5" x2="272.9" y2="208.5" stroke="#334155"/><text x="272.9" y="220.5" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">3</text><line x1="343.5" y1="202.5" x2="343.5" y2="208.5" stroke="#334155"/><text x="343.5" y="220.5" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">4</text><line x1="58.2" y1="238.2" x2="64.2" y2="238.2" stroke="#334155"/><text x="55.2" y="242.2" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">−3</text><line x1="58.2" y1="172.7" x2="64.2" y2="172.7" stroke="#334155"/><text x="55.2" y="176.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">3</text><line x1="58.2" y1="140.0" x2="64.2" y2="140.0" stroke="#334155"/><text x="55.2" y="144.0" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">6</text><line x1="58.2" y1="107.3" x2="64.2" y2="107.3" stroke="#334155"/><text x="55.2" y="111.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">9</text><line x1="58.2" y1="74.5" x2="64.2" y2="74.5" stroke="#334155"/><text x="55.2" y="78.5" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">12</text><line x1="58.2" y1="41.8" x2="64.2" y2="41.8" stroke="#334155"/><text x="55.2" y="45.8" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">15</text><text x="396.0" y="199.5" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">t (s)</text><text x="67.2" y="32.0" font-size="13" font-family="sans-serif" fill="#1f2937">v (m/s)</text><path d="M131.8 205.5L131.8 205.5L135.3 208.6L138.8 211.7L142.4 214.5L145.9 217.2L149.4 219.8L152.9 222.1L156.5 224.4L160.0 226.4L163.5 228.3L167.1 230.0L170.6 231.6L174.1 232.9L177.6 234.2L181.2 235.2L184.7 236.1L188.2 236.9L191.8 237.4L195.3 237.9L198.8 238.1L202.4 238.2L205.9 238.1L209.4 237.9L212.9 237.4L216.5 236.9L220.0 236.1L223.5 235.2L227.1 234.2L230.6 232.9L234.1 231.6L237.6 230.0L241.2 228.3L244.7 226.4L248.2 224.4L251.8 222.1L255.3 219.8L258.8 217.2L262.4 214.5L265.9 211.7L269.4 208.6L272.9 205.5Z" fill="#fecaca" stroke="none"/><path d="M61.2 107.3L63.8 112.1L66.4 116.8L69.0 121.4L71.6 126.0L74.3 130.4L76.9 134.8L79.5 139.0L82.1 143.2L84.7 147.3L87.4 151.3L90.0 155.2L92.6 159.0L95.2 162.8L97.8 166.4L100.4 170.0L103.1 173.4L105.7 176.8L108.3 180.1L110.9 183.3L113.5 186.4L116.1 189.4L118.8 192.3L121.4 195.1L124.0 197.9L126.6 200.5L129.2 203.1L131.9 205.5L134.5 207.9L137.1 210.2L139.7 212.4L142.3 214.5L144.9 216.5L147.6 218.5L150.2 220.3L152.8 222.0L155.4 223.7L158.0 225.3L160.6 226.8L163.3 228.1L165.9 229.4L168.5 230.7L171.1 231.8L173.7 232.8L176.4 233.7L179.0 234.6L181.6 235.3L184.2 236.0L186.8 236.6L189.4 237.1L192.1 237.5L194.7 237.8L197.3 238.0L199.9 238.1L202.5 238.2L205.1 238.1L207.8 238.0L210.4 237.8L213.0 237.4L215.6 237.0L218.2 236.5L220.9 235.9L223.5 235.3L226.1 234.5L228.7 233.6L231.3 232.7L233.9 231.6L236.6 230.5L239.2 229.3L241.8 228.0L244.4 226.6L247.0 225.1L249.6 223.5L252.3 221.8L254.9 220.1L257.5 218.2L260.1 216.3L262.7 214.2L265.4 212.1L268.0 209.9L270.6 207.6L273.2 205.2L275.8 202.7L278.4 200.2L281.1 197.5L283.7 194.7L286.3 191.9L288.9 189.0L291.5 185.9L294.1 182.8L296.8 179.6L299.4 176.3L302.0 173.0L304.6 169.5L307.2 165.9L309.9 162.3L312.5 158.5L315.1 154.7L317.7 150.8L320.3 146.8L322.9 142.7L325.6 138.5L328.2 134.2L330.8 129.8L333.4 125.4L336.0 120.8L338.6 116.2L341.3 111.4L343.9 106.6L346.5 101.7L349.1 96.7L351.7 91.6L354.4 86.4L357.0 81.2L359.6 75.8L362.2 70.3L364.8 64.8L367.4 59.2L370.1 53.4L372.7 47.6L375.3 41.7" fill="none" stroke="#1f2937" stroke-width="2.2"/><circle cx="131.8" cy="205.5" r="4" fill="#fde68a" stroke="#1f2937"/><circle cx="272.9" cy="205.5" r="4" fill="#fde68a" stroke="#1f2937"/><text x="127.8" y="232.0" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">at rest</text><text x="278.9" y="232.0" font-size="11" font-family="sans-serif" fill="#1f2937">at rest</text><text x="202.4" y="256.2" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#b91c1c">v < 0: moving backwards</text><text x="223.5" y="41.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">v = 3t² − 12t + 9</text></svg>`,
      diagramCaption: "The velocity–time graph for {{v = 3t^2 - 12t + 9}}. The particle is at rest at t = 1 and t = 3; in between (shaded) v < 0 and it moves backwards.",
      workedExamples: [
        {
          title: "At rest, and acceleration",
          problem:
            "A particle moves in a straight line. Its displacement from O after t seconds is {{s = t^3 - 6t^2 + 9t}} metres.\n\n(a) Find an expression for the velocity.\n(b) Find the times when the particle is at rest.\n(c) Find the acceleration when t = 4.",
          steps: [
            "(a) {{v = (ds)/(dt) = 3t^2 - 12t + 9}} m/s.",
            "(b) At rest: v = 0. {{3t^2 - 12t + 9 = 0}} ⇒ {{t^2 - 4t + 3 = 0}} ⇒ {{(t - 1)(t - 3) = 0}}.",
            "So t = 1 s and t = 3 s.",
            "(c) {{a = (dv)/(dt) = 6t - 12}}. At t = 4: a = 24 − 12 = 12 m/s².",
          ],
          answer: "(a) {{v = 3t^2 - 12t + 9}}  (b) t = 1 and t = 3  (c) 12 m/s²",
          yourTurn: {
            question: "Your turn: a particle's displacement is {{s = 2t^3 - 15t^2 + 36t}} metres after t seconds. Find both times, in seconds, when it is at rest.",
            answer: { type: "list", values: [2, 3], ordered: false, display: "t = 2 and t = 3" },
            solution: "{{v = 6t^2 - 30t + 36 = 6(t^2 - 5t + 6) = 6(t - 2)(t - 3)}}. v = 0 at t = 2 and t = 3.",
          },
        },
        {
          title: "Maximum velocity",
          problem:
            "A cyclist starts from rest. For 0 ≤ t ≤ 4, her velocity after t seconds is {{v = 12t - 3t^2}} m/s.\n\n(a) Work out her acceleration at t = 1.\n(b) Find her maximum velocity in this interval.",
          steps: [
            "(a) {{a = (dv)/(dt) = 12 - 6t}}. At t = 1: a = 6 m/s².",
            "(b) Maximum velocity when {{(dv)/(dt) = 0}}: 12 − 6t = 0, so t = 2.",
            "{{(d^2 v)/(dt^2) = -6 < 0}}, so this is a maximum.",
            "{{v = 12(2) - 3(2)^2 = 24 - 12 = 12}} m/s.",
            "Check the ends: v(0) = 0 and v(4) = 48 − 48 = 0, both smaller ✓.",
          ],
          answer: "(a) 6 m/s²  (b) 12 m/s",
          yourTurn: {
            question: "Your turn: a particle has velocity {{v = 5 + 8t - 2t^2}} m/s at time t seconds. Work out its maximum velocity, in m/s.",
            answer: { type: "number", value: 13 },
            solution: "{{a = 8 - 4t = 0}} ⇒ t = 2. v = 5 + 16 − 8 = 13 m/s (a maximum, since {{(da)/(dt) = -4 < 0}}).",
          },
        },
      ],
      keyPoints: [
        "{{v = (ds)/(dt)}}, {{a = (dv)/(dt)}} — differentiate to go s → v → a.",
        "At rest: v = 0. Initially: t = 0.",
        "Maximum or minimum velocity: a = 0, then substitute back into **v**.",
        "Signs matter: v < 0 means moving in the negative direction.",
        "Units: m, m/s, m/s².",
        "Distance travelled ≠ displacement when the particle turns round.",
      ],
      whyItWorks:
        "Velocity is the rate of change of displacement: metres gained per second, at an instant. On a displacement–time graph that is the gradient of the tangent — which is exactly {{(ds)/(dt)}}. In the same way acceleration is how fast the velocity changes, the gradient of the velocity–time graph, {{(dv)/(dt)}}. When the particle turns round, its displacement graph has a turning point — so its gradient, the velocity, is zero. \"At rest\" and \"turning point\" are the same idea in two languages.",
      strategies: ["Draw a diagram", "Split into cases", "Check by substituting", "Use the inverse"],
      thinkDeeper:
        "For {{s = t^3 - 6t^2 + 9t}}, between which times is the particle **speeding up**? (Find where v and a have the same sign — split the time line at t = 1, 2 and 3.)",
    },
    // ------------------------------------------------------------------ 6 (H+)
    {
      id: "normals",
      heading: "Normals to curves",
      discovery: {
        problem:
          "The tangent to {{y = x^2}} at (1, 1) has gradient 2.\n\nThe **normal** at (1, 1) is the line through the same point at **right angles** to the tangent. Recall: what do the gradients of two perpendicular lines multiply to? So what is the gradient of the normal, and what is its equation?",
        idea:
          "Perpendicular gradients multiply to −1, so the normal's gradient is {{-1/2}} (the **negative reciprocal** of 2).\n\n    {{y - 1 = -1/2 (x - 1)}}  ⇒  2y − 2 = −x + 1  ⇒  **x + 2y − 3 = 0**",
      },
      body:
        "The **normal** to a curve at a point is the straight line through that point **perpendicular to the tangent**.\n\n    gradient of normal = {{-1/(dy/dx)}}   (negative reciprocal)\n\n**Method**\n\n1. Find the point (substitute x into y if needed).\n2. Find the tangent's gradient {{m_T}} from {{dy/dx}}.\n3. Normal gradient {{m_N = -1/m_T}}: flip it and change the sign. 3 → {{-1/3}}; {{-2/5 → 5/2}}; −1 → 1.\n4. {{y - y_1 = m_N(x - x_1)}}, then rearrange — exam questions often want integers: ax + by + c = 0.\n\n**Special cases.** If {{dy/dx = 0}} the tangent is horizontal, so the normal is **vertical**: x = (the x-coordinate). If the tangent is vertical, the normal is horizontal.\n\n**Where tangents and normals meet the axes.** Typical follow-ups: find where the normal crosses the x-axis (put y = 0) or the y-axis (put x = 0), then find the **area of a triangle** made by the tangent, the normal and an axis. Sketch it — the right angle is at the point on the curve, so the tangent and normal make the two shorter sides, or one side lies on an axis and you use ½ × base × height.\n\n**Where the normal meets the curve again.** Set the curve equal to the normal's equation and solve. You already know one root (the original x), so you can factorise it out.\n\n**Integer form trap.** {{y = -1/3 x - 1/3}} becomes x + 3y + 1 = 0 after multiplying by 3 — multiply **every** term, including the constant.",
      diagram: `<svg viewBox="0 0 340 340" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y equals x squared, drawn to equal scales, with the tangent of gradient 2 and the dashed normal of gradient minus one half crossing at right angles at the point (1, 1)."><rect width="340" height="340" fill="#ffffff"/><line x1="30.0" y1="273.8" x2="320.0" y2="273.8" stroke="#334155" stroke-width="1.5"/><line x1="120.6" y1="310.0" x2="120.6" y2="20.0" stroke="#334155" stroke-width="1.5"/><line x1="60.2" y1="270.8" x2="60.2" y2="276.8" stroke="#334155"/><text x="60.2" y="288.8" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">−1</text><line x1="181.0" y1="270.8" x2="181.0" y2="276.8" stroke="#334155"/><text x="181.0" y="288.8" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">1</text><line x1="241.5" y1="270.8" x2="241.5" y2="276.8" stroke="#334155"/><text x="241.5" y="288.8" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><line x1="301.9" y1="270.8" x2="301.9" y2="276.8" stroke="#334155"/><text x="301.9" y="288.8" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">3</text><line x1="117.6" y1="213.3" x2="123.6" y2="213.3" stroke="#334155"/><text x="114.6" y="217.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">1</text><line x1="117.6" y1="152.9" x2="123.6" y2="152.9" stroke="#334155"/><text x="114.6" y="156.9" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">2</text><line x1="117.6" y1="92.5" x2="123.6" y2="92.5" stroke="#334155"/><text x="114.6" y="96.5" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">3</text><line x1="117.6" y1="32.1" x2="123.6" y2="32.1" stroke="#334155"/><text x="114.6" y="36.1" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">4</text><text x="316.0" y="267.8" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">x</text><text x="126.6" y="32.0" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><line x1="105.5" y1="364.4" x2="265.6" y2="44.2" stroke="#2563eb" stroke-width="1.8"/><line x1="36.0" y1="140.8" x2="314.0" y2="279.8" stroke="#dc2626" stroke-width="1.8" stroke-dasharray="6 4"/><path d="M30.0 137.8L31.8 143.1L33.6 148.3L35.4 153.4L37.1 158.4L38.9 163.3L40.7 168.1L42.5 172.8L44.3 177.3L46.1 181.8L47.9 186.1L49.7 190.4L51.4 194.5L53.2 198.6L55.0 202.5L56.8 206.3L58.6 210.1L60.4 213.7L62.2 217.2L64.0 220.6L65.7 223.9L67.5 227.1L69.3 230.2L71.1 233.2L72.9 236.0L74.7 238.8L76.5 241.5L78.3 244.0L80.0 246.5L81.8 248.8L83.6 251.1L85.4 253.2L87.2 255.3L89.0 257.2L90.8 259.0L92.6 260.7L94.3 262.3L96.1 263.8L97.9 265.2L99.7 266.5L101.5 267.7L103.3 268.8L105.1 269.7L106.9 270.6L108.6 271.4L110.4 272.0L112.2 272.6L114.0 273.0L115.8 273.4L117.6 273.6L119.4 273.7L121.2 273.7L122.9 273.7L124.7 273.5L126.5 273.2L128.3 272.8L130.1 272.3L131.9 271.7L133.7 270.9L135.5 270.1L137.2 269.2L139.0 268.1L140.8 267.0L142.6 265.8L144.4 264.4L146.2 262.9L148.0 261.4L149.8 259.7L151.5 257.9L153.3 256.1L155.1 254.1L156.9 252.0L158.7 249.8L160.5 247.5L162.3 245.1L164.0 242.5L165.8 239.9L167.6 237.2L169.4 234.4L171.2 231.4L173.0 228.4L174.8 225.2L176.6 222.0L178.3 218.6L180.1 215.1L181.9 211.6L183.7 207.9L185.5 204.1L187.3 200.2L189.1 196.2L190.9 192.1L192.6 187.9L194.4 183.6L196.2 179.2L198.0 174.6L199.8 170.0L201.6 165.3L203.4 160.4L205.2 155.5L206.9 150.4L208.7 145.3L210.5 140.0L212.3 134.6L214.1 129.1L215.9 123.6L217.7 117.9L219.5 112.1L221.2 106.2L223.0 100.2L224.8 94.1L226.6 87.8L228.4 81.5L230.2 75.1L232.0 68.6L233.8 61.9L235.5 55.2L237.3 48.3L239.1 41.4L240.9 34.3L242.7 27.1L244.5 19.8" fill="none" stroke="#1f2937" stroke-width="2.2"/><path d="M185.9 203.6 L176.2 198.7 L171.3 208.5" fill="none" stroke="#1f2937" stroke-width="1.3"/><circle cx="181.0" cy="213.3" r="4" fill="#fde68a" stroke="#1f2937"/><text x="197.0" y="207.0" font-size="12" font-family="sans-serif" fill="#1f2937">(1, 1)</text><text x="270.0" y="56.2" font-size="12" font-family="sans-serif" fill="#2563eb">tangent</text><text x="270.0" y="71.2" font-size="11" font-family="sans-serif" fill="#2563eb">gradient 2</text><text x="36.0" y="105.0" font-size="12" font-family="sans-serif" fill="#dc2626">normal</text><text x="36.0" y="120.0" font-size="11" font-family="sans-serif" fill="#dc2626">gradient −½</text><text x="33.0" y="32.1" font-size="13" font-family="sans-serif" fill="#1f2937">y = x²</text></svg>`,
      diagramCaption: "Drawn to equal scales: at (1, 1) on {{y = x^2}} the tangent has gradient 2 and the normal has gradient {{-1/2}}. 2 × {{(-1/2)}} = −1, so they meet at right angles.",
      workedExamples: [
        {
          title: "Equation of a normal with integer coefficients",
          problem:
            "Find the equation of the normal to the curve {{y = 2x^2 - 5x + 1}} at the point where x = 2. Give your answer in the form ax + by + c = 0, where a, b and c are integers.",
          steps: [
            "Point: y = 8 − 10 + 1 = −1, so (2, −1).",
            "{{dy/dx = 4x - 5}}; at x = 2 the tangent gradient is 3.",
            "Normal gradient {{= -1/3}}.",
            "{{y - (-1) = -1/3 (x - 2)}}, so {{y + 1 = -1/3 (x - 2)}}.",
            "Multiply by 3: 3y + 3 = −x + 2.",
            "x + 3y + 1 = 0.",
          ],
          answer: "x + 3y + 1 = 0",
          yourTurn: {
            question:
              "Your turn: find the equation of the normal to {{y = x^2 + 2}} at the point where x = 1. Give your answer in the form ax + by + c = 0, where a, b and c are integers.",
            answer: { type: "equation", eq: "x+2y-7=0", form: "general", display: "x + 2y − 7 = 0" },
            solution: "Point (1, 3). {{dy/dx = 2x = 2}}, so the normal gradient is {{-1/2}}. {{y - 3 = -1/2 (x - 1)}} ⇒ 2y − 6 = −x + 1 ⇒ x + 2y − 7 = 0.",
          },
        },
        {
          title: "Tangent, normal and a triangle",
          problem:
            "The point P(1, −3) lies on the curve {{y = x^3 - 4x}}. The tangent and the normal at P meet the y-axis at A and B. Find the area of triangle PAB.",
          steps: [
            "{{dy/dx = 3x^2 - 4}}; at x = 1 the gradient is −1.",
            "Tangent: {{y + 3 = -1(x - 1)}}, so y = −x − 2. It meets the y-axis at A(0, −2).",
            "Normal gradient {{= -1/(-1) = 1}}. Normal: {{y + 3 = 1(x - 1)}}, so y = x − 4. It meets the y-axis at B(0, −4).",
            "AB lies along the y-axis: length −2 − (−4) = 2.",
            "The height is the horizontal distance from P to the y-axis: 1.",
            "Area {{= 1/2 * 2 * 1 = 1}}.",
          ],
          answer: "1 square unit",
          yourTurn: {
            question: "Your turn: the normal to {{y = x^2}} at the point (3, 9) crosses the y-axis at (0, k). Find k.",
            answer: { type: "number", value: 9.5 },
            solution: "{{dy/dx = 2x = 6}}, so the normal gradient is {{-1/6}}. {{y - 9 = -1/6 (x - 3)}}; put x = 0: {{y = 9 + 1/2 = 9.5}}. So k = 9.5.",
          },
        },
      ],
      keyPoints: [
        "Normal ⟂ tangent: {{m_N = -1/m_T}}, so {{m_T * m_N = -1}}.",
        "Use the same point as the tangent — only the gradient changes.",
        "{{dy/dx = 0}} ⇒ the normal is vertical: x = constant.",
        "Axes: y = 0 for the x-intercept, x = 0 for the y-intercept.",
        "Integer form: multiply **every** term to clear fractions, then collect on one side.",
      ],
      whyItWorks:
        "Rotate a line of gradient m by 90°. A step of 1 across and m up becomes a step of m across and 1 **back** (the run and rise swap and one changes sign). So the new gradient is {{-1/m}}, and {{m * (-1/m) = -1}}. The normal is the direction a ball would bounce straight back along if it hit the curve head-on — perpendicular to the surface — which is why physicists, game designers and lens makers all use normals.",
      strategies: ["Draw a diagram", "Use the inverse", "Check by substituting", "Work backwards"],
      thinkDeeper:
        "The normal to {{y = x^2}} at (1, 1) is x + 2y − 3 = 0. It meets the parabola again at another point. Find it. Is there any point on {{y = x^2}} whose normal does **not** meet the curve again?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What does {{dy/dx}} measure?", back: "The gradient of the curve (of its tangent) at a point — the rate of change of y with respect to x." },
      { front: "Gradient of a curve at P, without calculus?", back: "Draw the tangent at P; use two far-apart points on the tangent: {{(rise)/(run)}}." },
      { front: "Differentiate {{ax^n}}", back: "{{nax^(n-1)}} — power down in front, reduce the power by one." },
      { front: "Differentiate 7x and 7", back: "7x → 7; 7 → 0 (a constant vanishes)." },
      { front: "Differentiate {{5/x^2}}", back: "{{5x^(-2) → -10x^(-3) = -10/x^3}}." },
      { front: "First step for {{y = (x + 3)(2x - 1)}}?", back: "Expand: {{2x^2 + 5x - 3}}, then {{dy/dx = 4x + 5}}." },
      { front: "First step for {{y = (x^3 - 4x)/x}}?", back: "Split: {{x^2 - 4}}, so {{dy/dx = 2x}}." },
      { front: "Gradient of {{y = x^3 - 2x^2 + 1}} at x = 2", back: "{{dy/dx = 3x^2 - 4x}} = 12 − 8 = 4." },
      { front: "Equation of a tangent: three ingredients", back: "Point (from y), gradient (from {{dy/dx}}), then {{y - y_1 = m(x - x_1)}}." },
      { front: "Where is the gradient equal to 5?", back: "Solve {{dy/dx = 5}}, then substitute x into y for the coordinates." },
      { front: "Condition for a turning point", back: "{{dy/dx = 0}}." },
      { front: "{{(d^2 y)/(dx^2) < 0}} at a turning point means…", back: "A maximum (∩)." },
      { front: "{{(d^2 y)/(dx^2) > 0}} at a turning point means…", back: "A minimum (∪)." },
      { front: "Velocity and acceleration from s", back: "{{v = (ds)/(dt)}}, {{a = (dv)/(dt)}}." },
      { front: "\"The particle is at rest\" means…", back: "v = 0." },
      { front: "Maximum velocity: the method", back: "Solve a = 0, then substitute that t into v." },
      { front: "H+: gradient of the normal", back: "{{-1/(dy/dx)}} — the negative reciprocal of the tangent gradient." },
      { front: "H+: normal where {{dy/dx = 0}}", back: "Vertical line: x = the x-coordinate of the point." },
    ],
    mustKnow: [
      "Can I explain that the gradient of a curve at a point is the gradient of its tangent, and estimate it by drawing a tangent or using chords?",
      "Can I explain {{dy/dx}} as the gradient function (rate of change) and read the sign of the gradient?",
      "Can I differentiate {{ax^n}} for any integer n, including constants, kx and negative powers?",
      "Can I expand brackets or split fractions into powers of x before differentiating?",
      "Can I find the gradient of a curve at a given point?",
      "Can I find the point(s) on a curve where the gradient has a given value (including parallel to a given line)?",
      "Can I find the equation of the tangent to a curve at a given point?",
      "Can I find the turning points of a curve by solving {{dy/dx = 0}}?",
      "Can I decide whether a turning point is a maximum or a minimum, using the sign of the gradient or the second derivative?",
      "Can I set up and solve an optimisation problem in context (boxes, fences, costs)?",
      "Can I use {{v = (ds)/(dt)}} and {{a = (dv)/(dt)}} to find velocity and acceleration, when a particle is at rest, and its maximum velocity?",
      "Can I interpret the signs of displacement, velocity and acceleration in context?",
      "(H+) Can I find the equation of the normal to a curve at a given point, in the form ax + by + c = 0?",
      "(H+) Can I find where a tangent or normal meets the axes or the curve again, and solve area problems with them?",
    ],
    misconceptions: [
      { wrong: "The gradient at x = 2 is found by putting x = 2 into y.", right: "That gives the y-coordinate. The gradient comes from putting x = 2 into {{dy/dx}}." },
      { wrong: "{{y = 5x^3}} gives {{dy/dx = 5 * 3x^2 = 15x^3}}.", right: "Reduce the power as well: {{dy/dx = 15x^2}}." },
      { wrong: "Constants stay: {{y = x^2 + 7}} gives {{dy/dx = 2x + 7}}.", right: "A constant differentiates to 0: {{dy/dx = 2x}}." },
      { wrong: "{{y = (2x + 3)(x - 4)}}: differentiate each bracket, so {{dy/dx = 2 * 1 = 2}}.", right: "Expand first: {{2x^2 - 5x - 12}}, so {{dy/dx = 4x - 5}}." },
      { wrong: "{{x^(-2)}} differentiates to {{-2x^(-1)}}.", right: "Subtract one from −2: −3. So {{-2x^(-3)}}." },
      { wrong: "{{1/(3x)}} = {{3x^(-1)}}.", right: "Only x moves up: {{1/(3x) = 1/3 x^(-1)}}." },
      { wrong: "{{dy/dx = 0}} always means a maximum.", right: "It means a stationary point — test it: it could be a maximum, a minimum or (like {{y = x^3}} at 0) neither." },
      { wrong: "The normal gradient is the reciprocal: tangent 3, normal {{1/3}}.", right: "Negative reciprocal: {{-1/3}}. Check: 3 × {{(-1/3)}} = −1." },
      { wrong: "For maximum velocity, solve v = 0.", right: "v = 0 means at rest. Maximum velocity needs {{a = (dv)/(dt) = 0}}." },
    ],
    examMistakes: [
      "Substituting the x-value into the original equation instead of into {{dy/dx}} when asked for the gradient — or into {{dy/dx}} when asked for the y-coordinate of the point.",
      "Differentiating a product of brackets or a fraction term by term without expanding or splitting first, e.g. treating {{(x^2 + 3)/x}} as {{2x/1}}.",
      "Writing {{4/x}} as {{4x^(-1)}} correctly but then differentiating to {{-4x^0}} or {{4x^(-2)}} instead of {{-4x^(-2)}}.",
      "Finding the x-coordinates of turning points but not the y-coordinates, or not stating which is the maximum and which is the minimum with a reason.",
      "In optimisation, stopping at x = 4 when the question asks for the maximum volume, or not rejecting a value of x that makes a length zero or negative.",
      "In kinematics, solving v = 0 when asked for the time of maximum velocity (or a = 0 when asked when the particle is at rest), and leaving out units (m/s, m/s²).",
    ],
    mnemonics: [
      {
        topic: "The power rule",
        device: "Bring it down, knock it down",
        explanation: "Bring the power down to multiply the front, then knock the power down by one: {{3x^4 → 12x^3}}.",
      },
      {
        topic: "Second derivative test",
        device: "Positive is a smile, negative is a frown",
        explanation: "{{(d^2 y)/(dx^2) > 0}}: ∪ smile, a minimum at the bottom. {{(d^2 y)/(dx^2) < 0}}: ∩ frown, a maximum at the top.",
      },
      {
        topic: "Kinematics",
        device: "S-V-A: Some Very Angry — differentiate going down the line",
        explanation: "Displacement → (differentiate) → velocity → (differentiate) → acceleration. To go back up you would need integration.",
      },
    ],
    realWorld: [
      {
        title: "Speedometers and speed cameras",
        detail:
          "A speedometer shows your instantaneous speed — {{(ds)/(dt)}} at this moment, not an average. Average-speed cameras on expressways measure the gradient of a chord instead: distance between two cameras ÷ time taken.",
        emoji: "🚗",
      },
      {
        title: "Packaging design",
        detail:
          "Manufacturers choose box and can dimensions to hold a fixed volume with the least material. Setting {{(dA)/(dx) = 0}} for the surface area is exactly the optimisation in this topic — and saves tonnes of card and aluminium a year.",
        emoji: "📦",
      },
      {
        title: "Rollercoasters and roads",
        detail:
          "Engineers check the gradient of a track or road at every point to keep it within safe limits, and use the second derivative (how quickly the gradient changes) to control the forces riders feel at the top and bottom of each hill.",
        emoji: "🎢",
      },
      {
        title: "Machine learning",
        detail:
          "AI models learn by \"gradient descent\": they compute the derivative of their error and step downhill until the gradient is zero — a minimum. Every chatbot and photo filter was trained by finding turning points, billions of times over.",
        emoji: "🤖",
      },
    ],
    videos: [
      { title: "Differentiation: the basics", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+differentiation+igcse" },
      { title: "Tangents and turning points (IGCSE)", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+igcse+differentiation+turning+points" },
      { title: "Kinematics with differentiation", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+differentiation+kinematics+velocity+acceleration" },
      { title: "The essence of calculus: derivatives", channel: "3Blue1Brown", url: "https://www.youtube.com/results?search_query=3blue1brown+essence+of+calculus+derivative" },
    ],
    formulas: [
      { name: "Power rule", formula: "{{y = ax^n}} ⇒ {{dy/dx = nax^(n-1)}}", note: "Learn this — not given" },
      { name: "Linear term and constant", formula: "{{y = kx}} ⇒ {{dy/dx = k}};  y = c ⇒ {{dy/dx = 0}}", note: "Learn this — not given" },
      { name: "Negative powers", formula: "{{a/x^n = ax^(-n)}} ⇒ {{dy/dx = -nax^(-n-1)}}", note: "Learn this — not given" },
      { name: "Equation of a tangent", formula: "{{y - y_1 = m(x - x_1)}} with {{m = dy/dx}} at {{x_1}}", note: "Learn this — not given" },
      { name: "Turning point", formula: "{{dy/dx = 0}}; maximum if {{(d^2 y)/(dx^2) < 0}}, minimum if {{(d^2 y)/(dx^2) > 0}}", note: "Learn this — not given" },
      { name: "Velocity and acceleration", formula: "{{v = (ds)/(dt)}}, {{a = (dv)/(dt)}}", note: "Learn this — not given" },
      { name: "Gradient of a normal (H+)", formula: "{{m_N = -1/(dy/dx)}}, so {{m_T * m_N = -1}}", note: "Learn this — not given" },
      { name: "Gradient from first principles", formula: "{{dy/dx}} = limit of {{(f(x + h) - f(x))/h}} as h → 0", note: "Learn this — not given (understanding only)" },
    ],
  },
};
