import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "linear-graphs",
  title: "Straight-Line Graphs & Coordinate Geometry",
  strand: "Algebra",
  icon: "📈",
  summary: "Gradients, equations, midpoints, lengths and crossing points — the coordinate toolkit behind every straight-line question.",
  intro:
    "Coordinate geometry turns pictures into algebra: a line becomes an equation, a length becomes Pythagoras and a crossing point becomes a pair of simultaneous equations. Every 4MA1 Higher paper has at least one question here — find the equation of a line, a perpendicular bisector or a normal, work out a midpoint or an exact length, or find where two lines meet and the area they enclose. This chapter builds each tool from one idea, the gradient, so you can see why the formulas work and combine them in multi-step questions. The H+ section then divides a line in any ratio.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "y-mx-c",
      heading: "Gradient and y = mx + c",
      discovery: {
        problem:
          "Wei Ling plots the points A(1, 3), B(5, 11) and C(−2, −3).\n\nWithout drawing anything, decide whether the three points lie on **one** straight line. If they do, find the equation of that line. What single number tells you how steep a line is — and how could you compare it for AB and for AC?",
        idea:
          "Measure steepness by the **gradient** — how far you go up for each 1 you go across:\n\n    AB: {{(11 - 3)/(5 - 1) = 8/4 = 2}}      AC: {{(-3 - 3)/(-2 - 1) = (-6)/(-3) = 2}}\n\nAB and AC have the same gradient **and** share the point A, so all three points are on one line. Every point on it satisfies {{y = 2x + c}}; using A: {{3 = 2(1) + c}}, so {{c = 1}} and the line is {{y = 2x + 1}}.\n\nCheck with B: {{2(5) + 1 = 11}} ✓. With C: {{2(-2) + 1 = -3}} ✓.",
      },
      body:
        "**Gradient.** The gradient m of a straight line measures its steepness: the change in y for every 1 unit increase in x. From any two points {{(x_1, y_1)}} and {{(x_2, y_2)}} on the line,\n\n    {{m = (y_2 - y_1)/(x_2 - x_1)}}   (change in y ÷ change in x, 'rise over run')\n\nSubtract in the **same order** on top and bottom. It does not matter which point you call the first, as long as you are consistent.\n\n| Gradient | Line goes … |\n|---|---|\n| positive | uphill from left to right |\n| negative | downhill from left to right |\n| 0 | horizontal: {{y = k}} |\n| undefined (run = 0) | vertical: {{x = k}} |\n\nA bigger size of gradient means a steeper line: gradient −5 is steeper than gradient 2.\n\n**The equation y = mx + c.** Every non-vertical straight line can be written as {{y = mx + c}}, where m is the gradient and c is the **y-intercept** — the line crosses the y-axis at {{(0, c)}}.\n\n**Equation through two points — the recipe**\n\n1. Work out the gradient m from the two points.\n2. Substitute m and **one** of the points into {{y = mx + c}} and solve for c.\n3. Write the full equation, then check it with the *other* point.\n\n**Implicit equations.** An exam may give the line as {{3x + 2y = 12}}. You cannot read the gradient off directly — the 3 is **not** the gradient. Rearrange to make y the subject:\n\n    {{2y = -3x + 12}}   so   {{y = -3/2 x + 6}}\n\nNow {{m = -3/2}} and {{c = 6}}. In general {{ax + by = d}} has gradient {{-a/b}}.\n\n**Intercepts for a quick sketch.** Put {{x = 0}} to find where the line crosses the y-axis and {{y = 0}} for the x-axis. For {{3x + 2y = 12}}: {{x = 0}} gives {{y = 6}}; {{y = 0}} gives {{x = 4}}. Two points are enough to draw a straight line.\n\n**Is a point on the line?** Substitute its coordinates. A point lies on a line **exactly when** its coordinates make the equation true. Is {{(-2, 9)}} on {{3x + 2y = 12}}? {{3(-2) + 2(9) = -6 + 18 = 12}} ✓ — yes.\n\n**Gradient as a rate.** On a real-life graph the gradient has units: on a cost–distance graph for a taxi, the gradient is the cost per kilometre and c is the fixed flag-down charge. Always read gradients from the **scales on the axes**, not by counting squares.",
      diagram: `<svg viewBox="0 0 256 312" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid from x = −4 to 4 and y = −5 to 7. The line y = 2x + 1 passes through A(−2, −3) and B(2, 5). A shaded gradient triangle from A goes 4 across and 8 up to B, so the gradient is 8 ÷ 4 = 2. The line crosses the y-axis at (0, 1), marked c = 1."><rect x="0" y="0" width="256" height="312" fill="#ffffff"/><line x1="30" y1="286" x2="30" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="52" y1="286" x2="52" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="74" y1="286" x2="74" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="96" y1="286" x2="96" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="118" y1="286" x2="118" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="140" y1="286" x2="140" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="162" y1="286" x2="162" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="184" y1="286" x2="184" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="286" x2="206" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="286" x2="206" y2="286" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="264" x2="206" y2="264" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="242" x2="206" y2="242" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="220" x2="206" y2="220" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="198" x2="206" y2="198" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="176" x2="206" y2="176" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="154" x2="206" y2="154" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="132" x2="206" y2="132" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="110" x2="206" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="88" x2="206" y2="88" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="66" x2="206" y2="66" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="44" x2="206" y2="44" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="22" x2="206" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="176" x2="214" y2="176" stroke="#334155" stroke-width="1.5"/><line x1="118" y1="286" x2="118" y2="14" stroke="#334155" stroke-width="1.5"/><text x="216" y="180" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">x</text><text x="114" y="11" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">y</text><text x="30" y="190" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−4</text><text x="52" y="190" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−3</text><text x="74" y="190" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−2</text><text x="96" y="190" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−1</text><text x="140" y="190" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">1</text><text x="162" y="190" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">2</text><text x="184" y="190" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">3</text><text x="206" y="190" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">4</text><text x="113" y="290" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−5</text><text x="113" y="268" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−4</text><text x="113" y="246" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−3</text><text x="113" y="224" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−2</text><text x="113" y="202" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−1</text><text x="113" y="158" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">1</text><text x="113" y="136" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">2</text><text x="113" y="114" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">3</text><text x="113" y="92" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">4</text><text x="113" y="70" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">5</text><text x="113" y="48" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">6</text><text x="113" y="26" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">7</text><polygon points="74,242 162,242 162,66" fill="#fde68a" fill-opacity="0.55" stroke="none"/><line x1="52" y1="286" x2="184" y2="22" stroke="#2563eb" stroke-width="2.4"/><line x1="74" y1="242" x2="162" y2="242" stroke="#ea580c" stroke-width="2"/><line x1="162" y1="242" x2="162" y2="66" stroke="#16a34a" stroke-width="2"/><text x="118" y="257" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#ea580c" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">run = 4</text><text x="169" y="154" font-size="12" text-anchor="start" font-family="sans-serif" fill="#16a34a" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">rise = 8</text><circle cx="74" cy="242" r="3.5" fill="#1f2937"/><circle cx="162" cy="66" r="3.5" fill="#1f2937"/><circle cx="118" cy="154" r="3.5" fill="#dc2626"/><text x="68" y="236" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">A(−2, −3)</text><text x="154" y="62" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">B(2, 5)</text><text x="110" y="150" font-size="12" text-anchor="end" font-family="sans-serif" fill="#dc2626" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">c = 1</text><text x="34.4" y="77" font-size="13" text-anchor="start" font-family="sans-serif" fill="#2563eb" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">y = 2x + 1</text><text x="169" y="136" font-size="12" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">m = 8 ÷ 4 = 2</text></svg>`,
      diagramCaption:
        "The gradient triangle from A to B goes 4 across and 8 up, so {{m = 8/4 = 2}}. The line crosses the y-axis at {{(0, 1)}}, so {{c = 1}}: the line is {{y = 2x + 1}}.",
      workedExamples: [
        {
          title: "Equation through two points",
          problem: "Find the equation of the straight line through {{(-1, 7)}} and {{(3, -5)}}. Give your answer in the form {{y = mx + c}}.",
          steps: [
            "Gradient: {{m = (-5 - 7)/(3 - (-1)) = (-12)/4 = -3}}.",
            "So {{y = -3x + c}}. Substitute {{(-1, 7)}}: {{7 = -3(-1) + c = 3 + c}}, so {{c = 4}}.",
            "Equation: {{y = -3x + 4}}.",
            "Check with the other point {{(3, -5)}}: {{-3(3) + 4 = -9 + 4 = -5}} ✓.",
          ],
          answer: "{{y = -3x + 4}}",
          yourTurn: {
            question: "Your turn: find the equation of the line through {{(2, 1)}} and {{(6, 9)}}. Give your answer in the form {{y = mx + c}}.",
            answer: { type: "expression", expr: "2x-3", display: "{{y = 2x - 3}}" },
            solution:
              "{{m = (9 - 1)/(6 - 2) = 8/4 = 2}}. Then {{1 = 2(2) + c}}, so {{c = -3}} and {{y = 2x - 3}}. Check {{(6, 9)}}: {{12 - 3 = 9}} ✓.",
          },
        },
        {
          title: "Reading an implicit equation",
          problem:
            "The line L has equation {{3x + 2y = 12}}.\n\n(a) Find the gradient of L and its y-intercept.\n(b) Does the point {{(-2, 9)}} lie on L?\n(c) Find the coordinates of the point where L crosses the x-axis.",
          steps: [
            "(a) Make y the subject: {{2y = -3x + 12}}, so {{y = -3/2 x + 6}}. Gradient {{-3/2}}, y-intercept 6.",
            "(b) Substitute: {{3(-2) + 2(9) = -6 + 18 = 12}}. The equation is satisfied, so yes, {{(-2, 9)}} lies on L.",
            "(c) On the x-axis {{y = 0}}: {{3x = 12}}, so {{x = 4}}. The point is {{(4, 0)}}.",
          ],
          answer: "(a) gradient {{-3/2}}, y-intercept 6   (b) yes   (c) {{(4, 0)}}",
          yourTurn: {
            question: "Your turn: find the gradient of the line {{5x - 4y = 20}}. Give your answer as a fraction.",
            answer: { type: "fraction", n: 5, d: 4, display: "{{5/4}}" },
            solution:
              "Make y the subject: {{-4y = -5x + 20}}, so {{y = 5/4 x - 5}}. The gradient is {{5/4}} — not 5, and not {{-5/4}}: dividing by −4 changes both signs.",
          },
        },
      ],
      keyPoints: [
        "{{m = (y_2 - y_1)/(x_2 - x_1)}}: change in y over change in x, subtracting in the same order.",
        "In {{y = mx + c}}, m is the gradient and {{(0, c)}} is the y-intercept.",
        "Rearrange implicit equations like {{3x + 2y = 12}} into {{y = mx + c}} before reading m and c.",
        "A point is on a line exactly when its coordinates satisfy the equation — substitute to check.",
        "Horizontal lines are {{y = k}} (gradient 0); vertical lines are {{x = k}} (gradient undefined).",
        "On real-life graphs, use the axis scales (and units) to find the gradient, never the number of squares.",
      ],
      whyItWorks:
        "Why is the gradient the same wherever you measure it? Take any two gradient triangles on the same straight line. Their hypotenuses lie along the line, their bases are horizontal and their heights vertical, so the triangles have the same angles — they are **similar**. Similar triangles have the same ratio of height to base, so rise ÷ run is the same everywhere. That is what makes a line *straight*.\n\nWhy {{y = mx + c}}? Start on the y-axis at {{(0, c)}}. Each step of 1 to the right raises y by m. After x steps you have risen mx, so you are at height {{c + mx}}. Every point on the line therefore satisfies {{y = mx + c}}, and every point satisfying it is on the line.",
      strategies: ["Draw a diagram", "Check by substituting", "Make it simpler"],
      thinkDeeper:
        "The line {{ax + by = d}} has gradient {{-a/b}}. Use this to explain, without solving anything, why {{4x + 6y = 5}} and {{2x + 3y = 9}} never meet. Then find the value of k for which {{kx + 3y = 9}} is parallel to {{y = 4x - 1}}.",
    },

    // ------------------------------------------------------------------ 2
    {
      id: "point-gradient-form",
      heading: "Using y − y₁ = m(x − x₁)",
      discovery: {
        problem:
          "A line has gradient 3 and passes through the point {{(4, 5)}}.\n\nLet {{(x, y)}} be **any other** point on the line. Write down the gradient between {{(4, 5)}} and {{(x, y)}} as a fraction, and set it equal to 3. Tidy up what you get. Have you just written the equation of the line?",
        idea:
          "The gradient between {{(4, 5)}} and {{(x, y)}} is {{(y - 5)/(x - 4)}}. On this line it must equal 3:\n\n    {{(y - 5)/(x - 4) = 3}}   so   {{y - 5 = 3(x - 4)}}\n\nYes — that *is* the equation of the line, and you never had to find c. Expanding gives {{y = 3x - 12 + 5 = 3x - 7}}. Check: {{3(4) - 7 = 5}} ✓.",
      },
      body:
        "If a line has gradient m and passes through the point {{(x_1, y_1)}}, its equation is\n\n    {{y - y_1 = m(x - x_1)}}\n\nThis is the **point–gradient form**. It is the quickest route whenever you know one point and the gradient — which is exactly what you have in perpendicular-bisector and normal questions — and it is especially tidy when the gradient is a fraction.\n\n**Watch the signs.** Substitute the coordinates *with* their signs. Through {{(-2, 5)}} with gradient 4:\n\n    {{y - 5 = 4(x - (-2))}}   so   {{y - 5 = 4(x + 2)}}\n\n**Through two points.** Work out m first, then use *either* point in the formula — both give the same line.\n\n**The form ax + by + c = 0.** Edexcel often asks for the answer 'in the form {{ax + by + c = 0}} where a, b and c are integers'. To get there:\n\n1. Multiply through by any denominator to clear fractions.\n2. Collect **every** term on one side so the other side is 0.\n3. It is usual (not compulsory) to make the x-coefficient positive and to cancel any common factor.\n\nFor gradient {{1/2}} through {{(-2, 1)}} (the line in the diagram):\n\n    {{y - 1 = 1/2 (x + 2)}}\n    {{2y - 2 = x + 2}}\n    {{0 = x - 2y + 4}}, so {{x - 2y + 4 = 0}}\n\nIn the form {{y = mx + c}} the same line is {{y = 1/2 x + 2}} — it crosses the y-axis at 2, as the diagram shows.\n\n**Always check** by substituting the given point into your final equation: {{(-2) - 2(1) + 4 = 0}} ✓.\n\n| You know … | Fastest route |\n|---|---|\n| m and c | write {{y = mx + c}} |\n| m and one point | {{y - y_1 = m(x - x_1)}} |\n| two points | find m, then {{y - y_1 = m(x - x_1)}} |\n| a parallel/perpendicular line and a point | get m from the line, then {{y - y_1 = m(x - x_1)}} |",
      diagram: `<svg viewBox="0 0 290 216" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid from x = −4 to 6 and y = −1 to 6. A line with gradient one half passes through the fixed point P(x₁, y₁) = (−2, 1) and a general point Q(x, y) at (4, 4). A shaded triangle shows the horizontal step x − x₁ = 6 and the vertical step y − y₁ = 3, and their ratio is the gradient."><rect x="0" y="0" width="290" height="216" fill="#ffffff"/><line x1="30" y1="190" x2="30" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="54" y1="190" x2="54" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="78" y1="190" x2="78" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="102" y1="190" x2="102" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="126" y1="190" x2="126" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="190" x2="150" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="174" y1="190" x2="174" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="198" y1="190" x2="198" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="222" y1="190" x2="222" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="246" y1="190" x2="246" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="270" y1="190" x2="270" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="190" x2="270" y2="190" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="166" x2="270" y2="166" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="142" x2="270" y2="142" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="118" x2="270" y2="118" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="94" x2="270" y2="94" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="70" x2="270" y2="70" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="46" x2="270" y2="46" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="22" x2="270" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="166" x2="278" y2="166" stroke="#334155" stroke-width="1.5"/><line x1="126" y1="190" x2="126" y2="14" stroke="#334155" stroke-width="1.5"/><text x="280" y="170" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">x</text><text x="122" y="11" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">y</text><text x="30" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−4</text><text x="54" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−3</text><text x="78" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−2</text><text x="102" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−1</text><text x="150" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">1</text><text x="174" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">2</text><text x="198" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">3</text><text x="222" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">4</text><text x="246" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">5</text><text x="270" y="180" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">6</text><text x="121" y="194" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−1</text><text x="121" y="146" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">1</text><text x="121" y="122" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">2</text><text x="121" y="98" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">3</text><text x="121" y="74" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">4</text><text x="121" y="50" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">5</text><text x="121" y="26" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">6</text><polygon points="78,142 222,142 222,70" fill="#c7d2fe" fill-opacity="0.6" stroke="none"/><line x1="30" y1="166" x2="270" y2="46" stroke="#2563eb" stroke-width="2.4"/><line x1="78" y1="142" x2="222" y2="142" stroke="#ea580c" stroke-width="2"/><line x1="222" y1="142" x2="222" y2="70" stroke="#16a34a" stroke-width="2"/><circle cx="78" cy="142" r="3.5" fill="#1f2937"/><circle cx="222" cy="70" r="3.5" fill="#1f2937"/><text x="78" y="112" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">P(x₁, y₁)</text><text x="78" y="127" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">= (−2, 1)</text><text x="216" y="62" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">Q(x, y)</text><text x="150" y="158" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#ea580c" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">x − x₁</text><text x="228" y="110" font-size="12" text-anchor="start" font-family="sans-serif" fill="#16a34a" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">y − y₁</text><text x="268" y="34" font-size="12" text-anchor="end" font-family="sans-serif" fill="#2563eb" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">gradient m = ½</text></svg>`,
      diagramCaption:
        "For any point Q(x, y) on the line, the gradient from {{P(x_1, y_1)}} is {{(y - y_1)/(x - x_1)}}. Setting it equal to m gives {{y - y_1 = m(x - x_1)}}. Here {{m = 1/2}} and the line is {{y = 1/2 x + 2}}.",
      workedExamples: [
        {
          title: "A fractional gradient, integer form",
          problem:
            "Find the equation of the line with gradient {{-2/3}} that passes through {{(3, -1)}}. Give your answer in the form {{ax + by + c = 0}}, where a, b and c are integers.",
          steps: [
            "Point–gradient form: {{y - (-1) = -2/3 (x - 3)}}, so {{y + 1 = -2/3 (x - 3)}}.",
            "Multiply both sides by 3 to clear the fraction: {{3y + 3 = -2(x - 3) = -2x + 6}}.",
            "Collect everything on the left: {{2x + 3y + 3 - 6 = 0}}, so {{2x + 3y - 3 = 0}}.",
            "Check with {{(3, -1)}}: {{2(3) + 3(-1) - 3 = 6 - 3 - 3 = 0}} ✓.",
          ],
          answer: "{{2x + 3y - 3 = 0}}",
          yourTurn: {
            question:
              "Your turn: the line through {{(-2, 5)}} with gradient {{3/4}} can be written as {{3x + by + c = 0}}, where b and c are integers. Find b and c. Give b first, then c.",
            answer: { type: "list", values: [-4, 26], ordered: true, display: "b = −4, c = 26" },
            solution:
              "{{y - 5 = 3/4 (x + 2)}}. Multiply by 4: {{4y - 20 = 3x + 6}}. Collect on the right: {{0 = 3x - 4y + 26}}. So {{3x - 4y + 26 = 0}}: b = −4, c = 26. Check {{(-2, 5)}}: {{-6 - 20 + 26 = 0}} ✓.",
          },
        },
        {
          title: "Through two points",
          problem:
            "Find the equation of the line through {{A(-3, 4)}} and {{B(5, 0)}}. Give your answer (i) in the form {{y = mx + c}} and (ii) in the form {{ax + by + c = 0}} with integers.",
          steps: [
            "Gradient: {{m = (0 - 4)/(5 - (-3)) = (-4)/8 = -1/2}}.",
            "Use B, the point with a zero: {{y - 0 = -1/2 (x - 5)}}, so {{y = -1/2 x + 5/2}}.",
            "(ii) Multiply by 2: {{2y = -x + 5}}, so {{x + 2y - 5 = 0}}.",
            "Check with A: {{-3 + 2(4) - 5 = 0}} ✓.",
          ],
          answer: "(i) {{y = -1/2 x + 5/2}}   (ii) {{x + 2y - 5 = 0}}",
          yourTurn: {
            question: "Your turn: find the equation of the line through {{(1, -2)}} and {{(4, 7)}}. Give your answer in the form {{y = mx + c}}.",
            answer: { type: "expression", expr: "3x-5", display: "{{y = 3x - 5}}" },
            solution:
              "{{m = (7 - (-2))/(4 - 1) = 9/3 = 3}}. Then {{y + 2 = 3(x - 1)}}, so {{y = 3x - 3 - 2 = 3x - 5}}. Check {{(4, 7)}}: {{12 - 5 = 7}} ✓.",
          },
        },
      ],
      keyPoints: [
        "{{y - y_1 = m(x - x_1)}}: one point plus the gradient gives the line directly.",
        "Substitute negative coordinates with brackets: through {{(-2, 5)}} gives {{y - 5 = m(x + 2)}}.",
        "For {{ax + by + c = 0}}: clear fractions, then move every term to one side.",
        "Expanding {{y - y_1 = m(x - x_1)}} gives {{y = mx + c}} with {{c = y_1 - m x_1}}.",
        "Finish by substituting the given point(s) into your final equation.",
      ],
      whyItWorks:
        "Fix the known point {{(x_1, y_1)}} and let {{(x, y)}} be any other point. The two are on the line exactly when the gradient between them is m:\n\n    {{(y - y_1)/(x - x_1) = m}}\n\nMultiplying both sides by {{(x - x_1)}} gives {{y - y_1 = m(x - x_1)}}. The multiplied-out version is even better than the fraction: it is also true at the point {{(x_1, y_1)}} itself (both sides are 0), where the fraction would be {{0/0}}.\n\nIt is the same line as {{y = mx + c}} in disguise: expanding gives {{y = mx + (y_1 - m x_1)}}, so {{c = y_1 - m x_1}}.",
      strategies: ["Introduce a variable", "Check by substituting", "Work backwards"],
      thinkDeeper:
        "Every line through {{(2, 3)}} — except one — can be written as {{y - 3 = m(x - 2)}} for some number m. Which line through {{(2, 3)}} is the exception, and why can no value of m produce it?",
    },

    // ------------------------------------------------------------------ 3
    {
      id: "midpoint-distance",
      heading: "Midpoint and distance",
      discovery: {
        problem:
          "A is {{(-3, 2)}} and B is {{(5, 8)}}.\n\n1. Find the point exactly halfway between A and B.\n2. Find the exact length of AB — without a ruler.\n\nHint for 2: what shape do you get if you go from A to B by moving across first and then up?",
        idea:
          "**Halfway** means halfway in x *and* halfway in y. The x-coordinates −3 and 5 have mean {{(-3 + 5)/2 = 1}}; the y-coordinates 2 and 8 have mean 5. So the midpoint is {{M(1, 5)}}.\n\nFor the **length**, go 8 across and 6 up: that makes a right-angled triangle with AB as the hypotenuse. By Pythagoras, {{AB = sqrt(8^2 + 6^2) = sqrt(100) = 10}}.",
      },
      body:
        "**Midpoint.** The midpoint of {{(x_1, y_1)}} and {{(x_2, y_2)}} is the **mean** of the coordinates:\n\n    {{M = ((x_1 + x_2)/2, (y_1 + y_2)/2)}}\n\nAdd, then halve — do not subtract. (Subtracting gives half the *step*, not the midpoint.)\n\n**Distance (length of a line segment).** Draw the right-angled triangle with horizontal and vertical sides. Its legs are the change in x and the change in y, so by Pythagoras\n\n    {{d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)}}\n\nThe signs of the differences do not matter, because squaring makes them positive. Be careful on a calculator: {{(-6)^2 = 36}}, but typing −6² gives −36.\n\n**Exact answers.** Questions often say 'give your answer as a surd in its simplest form': {{sqrt(72) = sqrt(36 * 2) = 6 sqrt(2)}}. Otherwise give 3 significant figures.\n\n**Finding an endpoint from the midpoint.** If M is the midpoint of AB, the step from A to M is the same as the step from M to B. So *repeat the step*: B = M + (M − A), i.e. {{x_B = 2x_M - x_A}} and {{y_B = 2y_M - y_A}}.\n\n**Where these turn up**\n\n- **Circles:** the centre of a circle is the midpoint of any diameter; the radius is the distance from the centre to any point on the circle.\n- **Isosceles triangles:** show two sides have the same length.\n- **Right angles:** if {{AB^2 + BC^2 = AC^2}}, the angle at B is 90° (converse of Pythagoras). You can also check gradients — see the next section.\n- **Perpendicular bisectors** start with the midpoint.\n\n| | Midpoint | Distance |\n|---|---|---|\n| Operation | add, halve | subtract, square, add, square root |\n| Result | a point (two coordinates) | a single positive length |",
      diagram: `<svg viewBox="0 0 270 268" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid from x = −4 to 6 and y = −1 to 9. Segment AB joins A(−3, 2) to B(5, 8). Its midpoint M is (1, 5). A dashed right-angled triangle under AB has a horizontal side of 8 and a vertical side of 6, so AB = √(8² + 6²) = 10."><rect x="0" y="0" width="270" height="268" fill="#ffffff"/><line x1="30" y1="242" x2="30" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="52" y1="242" x2="52" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="74" y1="242" x2="74" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="96" y1="242" x2="96" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="118" y1="242" x2="118" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="140" y1="242" x2="140" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="162" y1="242" x2="162" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="184" y1="242" x2="184" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="242" x2="206" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="228" y1="242" x2="228" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="250" y1="242" x2="250" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="242" x2="250" y2="242" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="220" x2="250" y2="220" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="198" x2="250" y2="198" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="176" x2="250" y2="176" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="154" x2="250" y2="154" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="132" x2="250" y2="132" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="110" x2="250" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="88" x2="250" y2="88" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="66" x2="250" y2="66" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="44" x2="250" y2="44" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="22" x2="250" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="220" x2="258" y2="220" stroke="#334155" stroke-width="1.5"/><line x1="118" y1="242" x2="118" y2="14" stroke="#334155" stroke-width="1.5"/><text x="260" y="224" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">x</text><text x="114" y="11" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">y</text><text x="30" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−4</text><text x="52" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−3</text><text x="74" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−2</text><text x="96" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−1</text><text x="140" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">1</text><text x="162" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">2</text><text x="184" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">3</text><text x="206" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">4</text><text x="228" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">5</text><text x="250" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">6</text><text x="113" y="246" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−1</text><text x="113" y="202" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">1</text><text x="113" y="180" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">2</text><text x="113" y="158" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">3</text><text x="113" y="136" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">4</text><text x="113" y="114" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">5</text><text x="113" y="92" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">6</text><text x="113" y="70" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">7</text><text x="113" y="48" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">8</text><text x="113" y="26" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">9</text><polygon points="52,176 228,176 228,44" fill="#bbf7d0" fill-opacity="0.6" stroke="none"/><line x1="52" y1="176" x2="228" y2="44" stroke="#2563eb" stroke-width="2.4"/><line x1="52" y1="176" x2="228" y2="176" stroke="#ea580c" stroke-width="2" stroke-dasharray="5 3"/><line x1="228" y1="176" x2="228" y2="44" stroke="#16a34a" stroke-width="2" stroke-dasharray="5 3"/><polyline points="219.2,176 219.2,167.2 228,167.2" fill="none" stroke="#1f2937" stroke-width="1.3"/><circle cx="52" cy="176" r="3.5" fill="#1f2937"/><circle cx="228" cy="44" r="3.5" fill="#1f2937"/><circle cx="140" cy="110" r="3.5" fill="#dc2626"/><text x="50" y="167" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">A(−3, 2)</text><text x="220" y="40" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">B(5, 8)</text><text x="132" y="104" font-size="12" text-anchor="end" font-family="sans-serif" fill="#dc2626" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">M(1, 5)</text><text x="162" y="171" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#ea580c" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">8</text><text x="236" y="114" font-size="12" text-anchor="start" font-family="sans-serif" fill="#16a34a" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">6</text><text x="248" y="202.4" font-size="12" text-anchor="end" font-family="sans-serif" fill="#2563eb" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">AB = √(8² + 6²) = 10</text></svg>`,
      diagramCaption:
        "M(1, 5) is halfway across and halfway up. AB is the hypotenuse of a right-angled triangle with legs 8 and 6, so {{AB = sqrt(8^2 + 6^2) = 10}}.",
      workedExamples: [
        {
          title: "An exact length",
          problem:
            "P is the point {{(-1, 4)}} and Q is the point {{(5, -2)}}. Find (a) the coordinates of the midpoint of PQ, (b) the length of PQ, giving your answer as a surd in its simplest form.",
          steps: [
            "(a) Midpoint: {{((-1 + 5)/2, (4 + (-2))/2) = (2, 1)}}.",
            "(b) Change in x: {{5 - (-1) = 6}}. Change in y: {{-2 - 4 = -6}}.",
            "{{PQ = sqrt(6^2 + (-6)^2) = sqrt(36 + 36) = sqrt(72)}}.",
            "Simplify: {{sqrt(72) = sqrt(36 * 2) = 6 sqrt(2)}}.",
          ],
          answer: "(a) {{(2, 1)}}   (b) {{6 sqrt(2)}}",
          yourTurn: {
            question:
              "Your turn: find the distance between {{(2, -3)}} and {{(-4, 1)}}. Give your answer as a surd in its simplest form.",
            answer: { type: "expression", expr: "2sqrt(13)", form: "surd", display: "{{2 sqrt(13)}}" },
            solution:
              "Changes: {{-4 - 2 = -6}} and {{1 - (-3) = 4}}. Distance {{= sqrt(36 + 16) = sqrt(52) = sqrt(4 * 13) = 2 sqrt(13)}}.",
          },
        },
        {
          title: "Finding the other end",
          problem: "{{M(3, -1)}} is the midpoint of the line segment AB. A is the point {{(-2, 4)}}. Find the coordinates of B.",
          steps: [
            "Step from A to M: x goes from −2 to 3 (+5); y goes from 4 to −1 (−5).",
            "B is the same step again from M: {{(3 + 5, -1 - 5) = (8, -6)}}.",
            "Or use {{x_B = 2x_M - x_A = 6 - (-2) = 8}} and {{y_B = 2y_M - y_A = -2 - 4 = -6}}.",
            "Check: midpoint of {{(-2, 4)}} and {{(8, -6)}} is {{(6/2, (-2)/2) = (3, -1)}} ✓.",
          ],
          answer: "{{B(8, -6)}}",
          yourTurn: {
            question:
              "Your turn: {{M(1, 2)}} is the midpoint of AB, where A is {{(5, -3)}}. Find the coordinates of B. Give the x-coordinate first, then the y-coordinate.",
            answer: { type: "list", values: [-3, 7], ordered: true, display: "(−3, 7)" },
            solution:
              "Step A to M: x −4, y +5. Repeat from M: {{(1 - 4, 2 + 5) = (-3, 7)}}. Check: {{((5 - 3)/2, (-3 + 7)/2) = (1, 2)}} ✓.",
          },
        },
      ],
      keyPoints: [
        "Midpoint = mean of the coordinates: {{((x_1 + x_2)/2, (y_1 + y_2)/2)}}.",
        "Distance = {{sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)}} — Pythagoras on the change in x and change in y.",
        "Squaring removes signs, but bracket negatives on a calculator: {{(-6)^2 = 36}}.",
        "Missing endpoint: repeat the step from A to M, or use {{x_B = 2x_M - x_A}}.",
        "Give exact lengths as simplified surds when asked; otherwise 3 s.f.",
      ],
      whyItWorks:
        "**Midpoint.** The segment AB is the hypotenuse of a right-angled triangle. Cut the hypotenuse in half and draw the smaller triangle from A to the halfway point: it is similar to the big one with scale factor {{1/2}}, so it goes exactly half the distance across and half the distance up. Half the way from {{x_1}} to {{x_2}} is {{x_1 + 1/2 (x_2 - x_1) = (x_1 + x_2)/2}} — the mean.\n\n**Distance.** Horizontal and vertical lines meet at 90°, so the change in x and the change in y are the two shorter sides of a right-angled triangle whose hypotenuse is the segment. The distance formula is just Pythagoras written in coordinates.",
      strategies: ["Draw a diagram", "Use symmetry", "Work backwards"],
      thinkDeeper:
        "Triangle ABC has vertices {{A(1, 1)}}, {{B(7, 3)}} and {{C(5, 9)}}. Using **lengths only**, decide whether the triangle is right-angled, and whether it is isosceles. Then check the right angle a second way using gradients. Which method was quicker?",
    },

    // ------------------------------------------------------------------ 4
    {
      id: "parallel-perpendicular",
      heading: "Parallel lines, perpendicular lines & normals",
      discovery: {
        problem:
          "Draw a gradient triangle for a line with gradient {{2/3}}: 3 across, 2 up.\n\nNow rotate the whole triangle through 90° anticlockwise about the corner that sits on the line. How far across and how far up does the rotated hypotenuse go? What is the gradient of the rotated line? Multiply the two gradients together — what do you notice? Try it again with a gradient of 4.",
        idea:
          "Rotating 90° anticlockwise turns '3 right, 2 up' into '2 **left**, 3 up'. The new gradient is {{3/(-2) = -3/2}}: the fraction has **flipped** and the sign has **changed**.\n\n    {{2/3 * (-3/2) = -1}}     and with 4:   {{4 * (-1/4) = -1}}\n\nPerpendicular gradients always multiply to −1.",
      },
      body:
        "**Parallel lines** have the **same gradient**. {{y = 3x + 1}} and {{y = 3x - 7}} are parallel; their different c values just shift one line up or down. (Same gradient *and* same c means it is the same line.)\n\n**Perpendicular lines** (meeting at 90°) have gradients that multiply to −1:\n\n    {{m_1 * m_2 = -1}}   so   {{m_2 = -1/m_1}}\n\nThe perpendicular gradient is the **negative reciprocal**: flip the fraction and change the sign.\n\n| Gradient | Perpendicular gradient |\n|---|---|\n| 3 | {{-1/3}} |\n| {{-1/4}} | 4 |\n| {{2/5}} | {{-5/2}} |\n| −1 | 1 |\n| 0 (horizontal) | undefined (vertical) |\n\nThe last row is the exception to {{m_1 m_2 = -1}}: a horizontal line {{y = k}} is perpendicular to every vertical line {{x = h}}.\n\n**Testing lines.** Put each equation into {{y = mx + c}} form first. Are {{2x + 3y = 6}} and {{3x - 2y = 1}} perpendicular? Gradients {{-2/3}} and {{3/2}}; product {{-1}}, so yes.\n\n**Equation of a parallel or perpendicular line through a point**\n\n1. Find the gradient of the given line (rearrange if needed).\n2. Keep it (parallel) or take the negative reciprocal (perpendicular).\n3. Use {{y - y_1 = m(x - x_1)}} with the given point.\n\n**Perpendicular bisector of AB** — the line that cuts AB in half at right angles. Every point on it is the same distance from A as from B.\n\n1. Midpoint M of AB (the bisector passes through M).\n2. Gradient of AB, then the negative reciprocal.\n3. Line through M with that gradient.\n\n**The normal to a line at a point** is the line through that point perpendicular to the given line. (You will meet normals to *curves* in differentiation — same idea.) It is also how you find the shortest distance from a point to a line: drop the perpendicular, find where it meets the line, then use the distance formula.",
      diagram: `<svg viewBox="0 0 284 204" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Equal-scale grid from x = −4 to 5 and y = −2 to 4. A blue line through the origin with gradient two thirds has a gradient triangle 3 across and 2 up. Rotating that triangle 90 degrees anticlockwise gives a triangle 2 to the left and 3 up, on an orange line with gradient minus three halves. The two lines meet at a right angle at the origin, and the product of the gradients is −1."><rect x="0" y="0" width="284" height="204" fill="#ffffff"/><line x1="30" y1="178" x2="30" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="56" y1="178" x2="56" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="82" y1="178" x2="82" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="108" y1="178" x2="108" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="134" y1="178" x2="134" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="160" y1="178" x2="160" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="186" y1="178" x2="186" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="212" y1="178" x2="212" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="238" y1="178" x2="238" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="264" y1="178" x2="264" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="178" x2="264" y2="178" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="152" x2="264" y2="152" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="126" x2="264" y2="126" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="100" x2="264" y2="100" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="74" x2="264" y2="74" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="48" x2="264" y2="48" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="22" x2="264" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="126" x2="272" y2="126" stroke="#334155" stroke-width="1.5"/><line x1="134" y1="178" x2="134" y2="14" stroke="#334155" stroke-width="1.5"/><text x="274" y="130" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">x</text><text x="130" y="11" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">y</text><text x="30" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−4</text><text x="56" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−3</text><text x="82" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−2</text><text x="108" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−1</text><text x="160" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">1</text><text x="186" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">2</text><text x="212" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">3</text><text x="238" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">4</text><text x="264" y="140" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">5</text><text x="129" y="182" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−2</text><text x="129" y="156" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−1</text><text x="129" y="104" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">1</text><text x="129" y="78" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">2</text><text x="129" y="52" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">3</text><text x="129" y="26" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">4</text><polygon points="134,126 212,126 212,74" fill="#c7d2fe" fill-opacity="0.65" stroke="none"/><polygon points="134,126 134,48 82,48" fill="#fde68a" fill-opacity="0.65" stroke="none"/><line x1="56" y1="178" x2="264" y2="39.3" stroke="#2563eb" stroke-width="2.4"/><line x1="64.7" y1="22" x2="168.7" y2="178" stroke="#ea580c" stroke-width="2.4"/><line x1="134" y1="126" x2="212" y2="126" stroke="#1f2937" stroke-width="1.6"/><line x1="212" y1="126" x2="212" y2="74" stroke="#1f2937" stroke-width="1.6"/><line x1="134" y1="126" x2="134" y2="48" stroke="#1f2937" stroke-width="1.6"/><line x1="134" y1="48" x2="82" y2="48" stroke="#1f2937" stroke-width="1.6"/><polyline points="143.7,119.5 137.2,109.8 127.5,116.3" fill="none" stroke="#1f2937" stroke-width="1.3"/><text x="186" y="121" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">3</text><text x="218" y="104" font-size="12" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">2</text><text x="140" y="91" font-size="12" text-anchor="start" font-family="sans-serif" fill="#1f2937" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">3</text><text x="108" y="42" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">2</text><text x="251.6" y="38.2" font-size="12" text-anchor="end" font-family="sans-serif" fill="#2563eb" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">m₁ = ⅔</text><text x="62.4" y="30.6" font-size="12" text-anchor="end" font-family="sans-serif" fill="#ea580c" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">m₂ = −3⁄2</text><text x="262" y="165" font-size="13" text-anchor="end" font-family="sans-serif" fill="#1f2937" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">m₁ × m₂ = −1</text></svg>`,
      diagramCaption:
        "Rotating the gradient triangle '3 across, 2 up' through 90° gives '2 back, 3 up'. The gradients {{2/3}} and {{-3/2}} multiply to −1. (Equal scales on both axes, so the right angle is a true right angle.)",
      workedExamples: [
        {
          title: "Perpendicular bisector",
          problem:
            "A is the point {{(-1, 2)}} and B is the point {{(5, 6)}}. Find the equation of the perpendicular bisector of AB. Give your answer in the form {{ax + by + c = 0}}, where a, b and c are integers.",
          steps: [
            "Midpoint of AB: {{((-1 + 5)/2, (2 + 6)/2) = (2, 4)}}.",
            "Gradient of AB: {{(6 - 2)/(5 - (-1)) = 4/6 = 2/3}}. Perpendicular gradient: {{-3/2}}.",
            "Line through {{(2, 4)}}: {{y - 4 = -3/2 (x - 2)}}.",
            "Multiply by 2: {{2y - 8 = -3x + 6}}, so {{3x + 2y - 14 = 0}}.",
            "Check: {{(0, 7)}} is on it ({{0 + 14 - 14 = 0}}) and is {{sqrt(1 + 25) = sqrt(26)}} from A and {{sqrt(25 + 1) = sqrt(26)}} from B ✓ — equidistant, as it should be.",
          ],
          answer: "{{3x + 2y - 14 = 0}}",
          yourTurn: {
            question:
              "Your turn: find the equation of the line that is parallel to {{3x + y = 7}} and passes through {{(-1, 4)}}. Give your answer in the form {{y = mx + c}}.",
            answer: { type: "expression", expr: "-3x+1", display: "{{y = -3x + 1}}" },
            solution:
              "{{3x + y = 7}} is {{y = -3x + 7}}, gradient −3. Parallel line: {{y - 4 = -3(x + 1)}}, so {{y = -3x - 3 + 4 = -3x + 1}}.",
          },
        },
        {
          title: "The normal to a line",
          problem:
            "The point {{P(3, 2)}} lies on the line L with equation {{4x - 3y = 6}}. Find the equation of the normal to L at P, in the form {{ax + by + c = 0}} with integers. Hence find where the normal crosses the y-axis.",
          steps: [
            "Check P is on L: {{4(3) - 3(2) = 12 - 6 = 6}} ✓.",
            "Gradient of L: {{-3y = -4x + 6}}, so {{y = 4/3 x - 2}}; gradient {{4/3}}.",
            "Normal gradient: {{-3/4}}. Line through P: {{y - 2 = -3/4 (x - 3)}}.",
            "Multiply by 4: {{4y - 8 = -3x + 9}}, so {{3x + 4y - 17 = 0}}.",
            "y-axis: put {{x = 0}}: {{4y = 17}}, so {{y = 17/4}}. The normal crosses at {{(0, 17/4)}}.",
          ],
          answer: "{{3x + 4y - 17 = 0}}; crosses the y-axis at {{(0, 17/4)}}",
          yourTurn: {
            question:
              "Your turn: the point {{(1, 3)}} lies on the line {{x + 2y = 7}}. Find the equation of the normal to this line at {{(1, 3)}}. Give your answer in the form {{y = mx + c}}.",
            answer: { type: "expression", expr: "2x+1", display: "{{y = 2x + 1}}" },
            solution:
              "{{x + 2y = 7}} gives {{y = -1/2 x + 7/2}}, gradient {{-1/2}}. Normal gradient 2. {{y - 3 = 2(x - 1)}}, so {{y = 2x + 1}}.",
          },
        },
      ],
      keyPoints: [
        "Parallel: equal gradients. Perpendicular: {{m_1 * m_2 = -1}}.",
        "Perpendicular gradient = negative reciprocal: flip the fraction and change the sign.",
        "Always rearrange to {{y = mx + c}} before comparing gradients.",
        "Perpendicular bisector: midpoint + perpendicular gradient.",
        "Normal at a point: through that point, perpendicular to the line.",
        "Horizontal and vertical lines are perpendicular, even though {{m_1 m_2 = -1}} cannot be used.",
      ],
      whyItWorks:
        "A gradient triangle for gradient {{a/b}} goes b across and a up. Rotate it 90° anticlockwise: 'across' becomes 'up' and 'up' becomes 'backwards', so the new triangle goes −a across and b up, giving gradient {{b/(-a) = -b/a}}. The rotated line is perpendicular to the original (we turned it through 90°), and\n\n    {{a/b * (-b/a) = -1}}\n\nThe argument fails only when a or b is 0 — the horizontal and vertical lines — which is why that pair is the one exception.",
      strategies: ["Draw a diagram", "Use symmetry", "Check by substituting"],
      thinkDeeper:
        "Find the shortest distance from the point {{(7, 1)}} to the line {{y = 2x}}. Plan it first: which line do you need, where does it meet {{y = 2x}}, and what do you measure? Give your answer as a surd.",
    },

    // ------------------------------------------------------------------ 5
    {
      id: "intersections",
      heading: "Intersections and simultaneous equations",
      discovery: {
        problem:
          "Without drawing anything, find the exact point where the lines {{y = 2x - 1}} and {{x + y = 8}} cross.\n\nWhat do the coordinates of the crossing point have to satisfy? Then look at the diagram: does your answer match the picture? Bonus: what is the area of the triangle these two lines make with the x-axis?",
        idea:
          "The crossing point lies on **both** lines, so its coordinates satisfy **both** equations at once — they are simultaneous equations. Substitute {{y = 2x - 1}} into {{x + y = 8}}:\n\n    {{x + 2x - 1 = 8}}   so   {{3x = 9}},   {{x = 3}},   {{y = 2(3) - 1 = 5}}\n\nThe lines cross at {{(3, 5)}} — exactly where the diagram shows it. (The triangle is Worked example 2.)",
      },
      body:
        "A point lies on a line exactly when its coordinates satisfy the line's equation. So the point where two lines meet is the **solution of their simultaneous equations**.\n\n**Algebraic methods** — pick the one that suits the form:\n\n| Equations look like | Use |\n|---|---|\n| {{y = 2x - 1}} and {{x + y = 8}} | **substitution** — replace y in the second |\n| {{y = 3x - 2}} and {{y = -x + 6}} | **equate** the right-hand sides: {{3x - 2 = -x + 6}} |\n| {{2x + 3y = 13}} and {{5x - 3y = 1}} | **elimination** — add or subtract |\n\nAlways find **both** coordinates and give the point.\n\n**Graphical method.** Draw both lines accurately; the crossing point is the solution. A graph usually only gives an *estimate* (to the nearest half-square, say), which is why exam questions say 'use the graph to estimate…' and then ask for an exact answer by algebra.\n\n**How many solutions?**\n\n- Different gradients → the lines cross once → exactly one solution.\n- Same gradient, different intercepts → parallel → **no solution**.\n- Same gradient, same intercept → the same line → infinitely many solutions.\n\n**Intercepts are intersections too.** Crossing the x-axis means meeting {{y = 0}}; crossing the y-axis means meeting {{x = 0}}.\n\n**Area of a triangle formed by lines**\n\n1. Find all three vertices — each is the intersection of two of the lines.\n2. Sketch it.\n3. If one side lies along an axis (or is horizontal or vertical), use it as the **base**; the **height** is the perpendicular distance of the third vertex from that side, read straight from its coordinates. Area = {{1/2 * base * height}}.\n4. If no side is horizontal or vertical, draw a rectangle round the triangle and subtract the right-angled triangles at the corners.",
      diagram: `<svg viewBox="0 0 290 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid from x = −1 to 9 and y = −2 to 9. The line y = 2x − 1 and the line x + y = 8 cross at (3, 5). With the x-axis they form a shaded triangle with vertices (½, 0), (8, 0) and (3, 5); a dashed vertical line from (3, 5) to the x-axis shows the height of 5."><rect x="0" y="0" width="290" height="290" fill="#ffffff"/><line x1="30" y1="264" x2="30" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="52" y1="264" x2="52" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="74" y1="264" x2="74" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="96" y1="264" x2="96" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="118" y1="264" x2="118" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="140" y1="264" x2="140" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="162" y1="264" x2="162" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="184" y1="264" x2="184" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="206" y1="264" x2="206" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="228" y1="264" x2="228" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="250" y1="264" x2="250" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="264" x2="250" y2="264" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="242" x2="250" y2="242" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="220" x2="250" y2="220" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="198" x2="250" y2="198" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="176" x2="250" y2="176" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="154" x2="250" y2="154" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="132" x2="250" y2="132" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="110" x2="250" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="88" x2="250" y2="88" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="66" x2="250" y2="66" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="44" x2="250" y2="44" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="22" x2="250" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="220" x2="258" y2="220" stroke="#334155" stroke-width="1.5"/><line x1="52" y1="264" x2="52" y2="14" stroke="#334155" stroke-width="1.5"/><text x="260" y="224" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">x</text><text x="48" y="11" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">y</text><text x="30" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−1</text><text x="74" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">1</text><text x="96" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">2</text><text x="118" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">3</text><text x="140" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">4</text><text x="162" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">5</text><text x="184" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">6</text><text x="206" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">7</text><text x="228" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">8</text><text x="250" y="234" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">9</text><text x="47" y="268" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−2</text><text x="47" y="246" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−1</text><text x="47" y="202" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">1</text><text x="47" y="180" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">2</text><text x="47" y="158" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">3</text><text x="47" y="136" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">4</text><text x="47" y="114" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">5</text><text x="47" y="92" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">6</text><text x="47" y="70" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">7</text><text x="47" y="48" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">8</text><text x="47" y="26" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">9</text><polygon points="63,220 228,220 118,110" fill="#fecaca" fill-opacity="0.55" stroke="none"/><line x1="41" y1="264" x2="162" y2="22" stroke="#2563eb" stroke-width="2.4"/><line x1="30" y1="22" x2="250" y2="242" stroke="#16a34a" stroke-width="2.4"/><line x1="118" y1="110" x2="118" y2="220" stroke="#1f2937" stroke-width="1.4" stroke-dasharray="4 3"/><circle cx="118" cy="110" r="3.5" fill="#dc2626"/><circle cx="63" cy="220" r="3.5" fill="#1f2937"/><circle cx="228" cy="220" r="3.5" fill="#1f2937"/><text x="127" y="107" font-size="12" text-anchor="start" font-family="sans-serif" fill="#dc2626" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">(3, 5)</text><text x="75" y="213" font-size="12" text-anchor="start" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">(½, 0)</text><text x="234" y="214" font-size="12" text-anchor="start" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">(8, 0)</text><text x="151.6" y="30.8" font-size="12" text-anchor="end" font-family="sans-serif" fill="#2563eb" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">y = 2x − 1</text><text x="70.8" y="52.8" font-size="12" text-anchor="start" font-family="sans-serif" fill="#16a34a" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">x + y = 8</text><text x="123" y="167.2" font-size="11" text-anchor="start" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">height 5</text></svg>`,
      diagramCaption:
        "{{y = 2x - 1}} and {{x + y = 8}} cross at {{(3, 5)}}. With the x-axis they form a triangle with base from {{(1/2, 0)}} to {{(8, 0)}} and height 5.",
      workedExamples: [
        {
          title: "Intersection, then a triangle on the y-axis",
          problem:
            "The lines {{y = x + 1}} and {{2x + 3y = 18}} meet at the point P.\n\n(a) Find the coordinates of P.\n(b) Find the area of the triangle formed by the two lines and the y-axis.",
          steps: [
            "(a) Substitute {{y = x + 1}}: {{2x + 3(x + 1) = 18}}, so {{5x + 3 = 18}}, {{x = 3}}, {{y = 4}}. P is {{(3, 4)}}.",
            "(b) y-intercepts: {{y = x + 1}} meets the y-axis at {{(0, 1)}}; {{2x + 3y = 18}} at {{(0, 6)}}.",
            "Base along the y-axis: {{6 - 1 = 5}}. Height: the horizontal distance from the y-axis to P, which is its x-coordinate, 3.",
            "Area {{= 1/2 * 5 * 3 = 7.5}} square units.",
          ],
          answer: "(a) {{P(3, 4)}}   (b) 7.5 square units",
          yourTurn: {
            question:
              "Your turn: the lines {{y = 3x - 2}} and {{y = -x + 6}} meet at P. Find the coordinates of P. Give the x-coordinate first, then the y-coordinate.",
            answer: { type: "list", values: [2, 4], ordered: true, display: "(2, 4)" },
            solution: "Equate: {{3x - 2 = -x + 6}}, so {{4x = 8}}, {{x = 2}}, and {{y = -2 + 6 = 4}}. P is {{(2, 4)}}. Check: {{3(2) - 2 = 4}} ✓.",
          },
        },
        {
          title: "A triangle on the x-axis",
          problem: "Find the area of the triangle bounded by the lines {{y = 2x - 1}}, {{x + y = 8}} and the x-axis (shown in the diagram).",
          steps: [
            "The two lines meet at {{(3, 5)}} (from the Discovery).",
            "{{y = 2x - 1}} meets the x-axis when {{2x - 1 = 0}}: {{(1/2, 0)}}. {{x + y = 8}} meets it at {{(8, 0)}}.",
            "Base along the x-axis: {{8 - 1/2 = 7.5}}. Height: the y-coordinate of {{(3, 5)}}, which is 5.",
            "Area {{= 1/2 * 7.5 * 5 = 18.75}} square units.",
          ],
          answer: "18.75 square units",
          yourTurn: {
            question:
              "Your turn: find the area of the triangle bounded by {{y = x + 2}}, {{y = -2x + 8}} and the x-axis. Give your answer in square units.",
            answer: { type: "number", value: 12 },
            solution:
              "x-intercepts: {{(-2, 0)}} and {{(4, 0)}}, so the base is 6. The lines meet where {{x + 2 = -2x + 8}}: {{x = 2}}, {{y = 4}}, so the height is 4. Area {{= 1/2 * 6 * 4 = 12}} square units.",
          },
        },
      ],
      keyPoints: [
        "The intersection of two lines satisfies both equations — solve them simultaneously.",
        "Substitute when one equation is {{y = ...}}; equate when both are; eliminate when both are {{ax + by = c}}.",
        "Give both coordinates of an intersection point.",
        "Parallel lines (equal gradients, different c) never meet: no solution.",
        "Graph readings are estimates; algebra gives exact values.",
        "Triangle area: find all three vertices, use a side on an axis as the base.",
      ],
      whyItWorks:
        "An equation is a membership test: the line {{y = 2x - 1}} is the set of all points whose coordinates pass the test. A point on two lines must pass both tests, so finding it is the same as solving the two equations together.\n\nTwo straight lines with different gradients cannot stay apart — one is rising faster than the other, so the gap between them changes steadily and must pass through zero exactly once. That is why two linear equations with different gradients always have exactly one solution, and equal gradients give either none or infinitely many.",
      strategies: ["Draw a diagram", "Split into cases", "Check by substituting"],
      thinkDeeper:
        "For which value of k do the lines {{y = kx + 3}} and {{2x + y = 5}} never meet? For which value of k do they meet on the x-axis? Explain how you could answer the first question without solving any equations.",
    },

    // ------------------------------------------------------------------ 6 (H+)
    {
      id: "dividing-a-line",
      heading: "Dividing a line in a given ratio",
      discovery: {
        problem:
          "A is {{(-2, 1)}} and B is {{(7, 7)}}. The point P lies on AB so that {{AP : PB = 1 : 2}}.\n\nWhere is P? Think of walking from A to B in equal steps. How many equal steps does the ratio 1 : 2 suggest, and how many of them do you take to reach P?",
        idea:
          "The ratio {{1 : 2}} splits AB into {{1 + 2 = 3}} equal parts, and P is **1 part** from A — one third of the way.\n\nThe whole journey is 9 across and 6 up, so one third of it is 3 across and 2 up:\n\n    {{P = (-2 + 3, 1 + 2) = (1, 3)}}\n\nThe midpoint is just the special case {{1 : 1}}.",
      },
      body:
        "If P lies on AB with {{AP : PB = m : n}}, then AB is split into {{m + n}} equal parts and P is m of them from A. So P is the fraction {{m/(m + n)}} of the way from A to B:\n\n    {{P = A + m/(m + n) (B - A)}}\n\ncoordinate by coordinate:\n\n    {{x_P = x_A + m/(m + n) (x_B - x_A)}},   {{y_P = y_A + m/(m + n) (y_B - y_A)}}\n\n**Careful with the fraction.** {{AP : PB = 2 : 3}} means P is {{2/5}} of the way along, **not** {{2/3}}. The denominator is the total number of parts.\n\n**The section formula (weighted average).** Rearranging gives\n\n    {{P = (nA + mB)/(m + n)}}\n\nThe weights look swapped: the endpoint P is *closer* to gets the *bigger* weight. With {{m = n = 1}} it is the midpoint formula.\n\n**Using it in reverse.** If you know A, P and the ratio, find the step for **one part**, then count parts. For {{AP : PB = 2 : 1}}, the step from A to P is 2 parts; halve it to get one part; B is one more part beyond P.\n\n**Other ratios you might be given.** {{AP : AB = 1 : 4}} means P is {{1/4}} of the way along, so {{AP : PB = 1 : 3}}. Convert to a 'fraction of the way' before you start.\n\n**Collinearity check.** Three points are on one line if the steps between them are in proportion (equivalently, the gradients match). That is also how you can find the ratio in which a point divides a segment: compare the x-steps (or y-steps).",
      diagram: `<svg viewBox="0 0 314 264" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid from x = −3 to 8 and y = −1 to 8. Segment AB runs from A(−2, 1) to B(7, 7). The step from A to B is 9 across and 6 up, split into three equal steps of 3 across and 2 up, shown as dashed staircases. P(1, 3) is one step from A, so AP : PB = 1 : 2; the second division point is (4, 5)."><rect x="0" y="0" width="314" height="264" fill="#ffffff"/><line x1="30" y1="238" x2="30" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="54" y1="238" x2="54" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="78" y1="238" x2="78" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="102" y1="238" x2="102" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="126" y1="238" x2="126" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="150" y1="238" x2="150" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="174" y1="238" x2="174" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="198" y1="238" x2="198" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="222" y1="238" x2="222" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="246" y1="238" x2="246" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="270" y1="238" x2="270" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="294" y1="238" x2="294" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="238" x2="294" y2="238" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="214" x2="294" y2="214" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="190" x2="294" y2="190" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="166" x2="294" y2="166" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="142" x2="294" y2="142" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="118" x2="294" y2="118" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="94" x2="294" y2="94" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="70" x2="294" y2="70" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="46" x2="294" y2="46" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="22" x2="294" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="30" y1="214" x2="302" y2="214" stroke="#334155" stroke-width="1.5"/><line x1="102" y1="238" x2="102" y2="14" stroke="#334155" stroke-width="1.5"/><text x="304" y="218" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">x</text><text x="98" y="11" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">y</text><text x="30" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−3</text><text x="54" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−2</text><text x="78" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">−1</text><text x="126" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">1</text><text x="150" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">2</text><text x="174" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">3</text><text x="198" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">4</text><text x="222" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">5</text><text x="246" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">6</text><text x="270" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">7</text><text x="294" y="228" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#475569">8</text><text x="97" y="242" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">−1</text><text x="97" y="194" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">1</text><text x="97" y="170" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">2</text><text x="97" y="146" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">3</text><text x="97" y="122" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">4</text><text x="97" y="98" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">5</text><text x="97" y="74" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">6</text><text x="97" y="50" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">7</text><text x="97" y="26" font-size="11" text-anchor="end" font-family="sans-serif" fill="#475569">8</text><line x1="54" y1="190" x2="270" y2="46" stroke="#2563eb" stroke-width="2.4"/><line x1="54" y1="190" x2="126" y2="190" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="4 3"/><line x1="126" y1="142" x2="198" y2="142" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="4 3"/><line x1="198" y1="94" x2="270" y2="94" stroke="#ea580c" stroke-width="1.8" stroke-dasharray="4 3"/><line x1="126" y1="190" x2="126" y2="142" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4 3"/><line x1="198" y1="142" x2="198" y2="94" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4 3"/><line x1="270" y1="94" x2="270" y2="46" stroke="#16a34a" stroke-width="1.8" stroke-dasharray="4 3"/><text x="90" y="205" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#ea580c" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">3</text><text x="132" y="170" font-size="12" text-anchor="start" font-family="sans-serif" fill="#16a34a" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">2</text><circle cx="54" cy="190" r="3.5" fill="#1f2937"/><circle cx="270" cy="46" r="3.5" fill="#1f2937"/><circle cx="126" cy="142" r="3.5" fill="#dc2626"/><circle cx="198" cy="94" r="3.5" fill="#64748b"/><text x="54" y="181" font-size="12" text-anchor="middle" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">A(−2, 1)</text><text x="262" y="42" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" paint-order="stroke">B(7, 7)</text><text x="118" y="138" font-size="12" text-anchor="end" font-family="sans-serif" fill="#dc2626" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">P(1, 3)</text><text x="190" y="90" font-size="12" text-anchor="end" font-family="sans-serif" fill="#475569" stroke="#ffffff" stroke-width="3" paint-order="stroke">(4, 5)</text><text x="292" y="204.4" font-size="13" text-anchor="end" font-family="sans-serif" fill="#1f2937" font-weight="bold" stroke="#ffffff" stroke-width="3" paint-order="stroke">AP : PB = 1 : 2</text></svg>`,
      diagramCaption:
        "The journey from A to B (9 across, 6 up) splits into three equal steps of 3 across and 2 up. P(1, 3) is one step from A, so {{AP : PB = 1 : 2}}.",
      workedExamples: [
        {
          title: "Finding the dividing point",
          problem: "A is {{(2, -3)}} and B is {{(12, 7)}}. P lies on AB with {{AP : PB = 2 : 3}}. Find the coordinates of P.",
          steps: [
            "Total parts: {{2 + 3 = 5}}, so P is {{2/5}} of the way from A to B.",
            "Step from A to B: {{(12 - 2, 7 - (-3)) = (10, 10)}}. Two fifths of it: {{(4, 4)}}.",
            "{{P = (2 + 4, -3 + 4) = (6, 1)}}.",
            "Check with the section formula: {{(3A + 2B)/5 = ((6 + 24)/5, (-9 + 14)/5) = (6, 1)}} ✓.",
          ],
          answer: "{{P(6, 1)}}",
          yourTurn: {
            question:
              "Your turn: A is {{(-1, 4)}} and B is {{(11, -4)}}. P lies on AB with {{AP : PB = 3 : 1}}. Find the coordinates of P. Give the x-coordinate first, then the y-coordinate.",
            answer: { type: "list", values: [8, -2], ordered: true, display: "(8, −2)" },
            solution:
              "P is {{3/4}} of the way. Step A to B: {{(12, -8)}}; three quarters is {{(9, -6)}}. {{P = (-1 + 9, 4 - 6) = (8, -2)}}.",
          },
        },
        {
          title: "Working backwards to an endpoint",
          problem: "A is {{(-1, 5)}}. The point {{P(5, 1)}} lies on AB with {{AP : PB = 2 : 1}}. Find the coordinates of B.",
          steps: [
            "Step from A to P: {{(5 - (-1), 1 - 5) = (6, -4)}}. That is 2 parts.",
            "One part: {{(3, -2)}}.",
            "PB is 1 part, so {{B = (5 + 3, 1 - 2) = (8, -1)}}.",
            "Check: A to B is {{(9, -6)}}; {{2/3}} of it is {{(6, -4)}}, which takes A to {{(5, 1)}} = P ✓.",
          ],
          answer: "{{B(8, -1)}}",
          yourTurn: {
            question:
              "Your turn: A is {{(1, 5)}} and {{P(3, 2)}} lies on AB with {{AP : PB = 1 : 3}}. Find the coordinates of B. Give the x-coordinate first, then the y-coordinate.",
            answer: { type: "list", values: [9, -7], ordered: true, display: "(9, −7)" },
            solution:
              "A to P is {{(2, -3)}}: that is 1 part. PB is 3 parts: {{(6, -9)}}. {{B = (3 + 6, 2 - 9) = (9, -7)}}.",
          },
        },
      ],
      keyPoints: [
        "{{AP : PB = m : n}} means P is {{m/(m + n)}} of the way from A to B.",
        "{{P = A + m/(m + n)(B - A)}}, applied to x and y separately.",
        "Section formula: {{P = (nA + mB)/(m + n)}} — the nearer endpoint gets the bigger weight.",
        "In reverse: find the step for one part, then count parts.",
        "Convert ratios like {{AP : AB}} into {{AP : PB}} (or a fraction of the way) first.",
      ],
      whyItWorks:
        "Along a straight line, the change in x and the change in y stay in the same proportion (the gradient is constant — similar triangles again). So going a fraction t of the way along AB means making a fraction t of the x-change **and** a fraction t of the y-change:\n\n    {{P = A + t(B - A)}}\n\nWith {{t = m/(m + n)}} that is the formula. Expanding, {{A + t(B - A) = (1 - t)A + tB}}, and {{1 - t = n/(m + n)}}, which gives the weighted-average form {{(nA + mB)/(m + n)}}.",
      strategies: ["Use a bar model", "Work backwards", "Draw a diagram"],
      thinkDeeper:
        "A is {{(0, 0)}} and B is {{(4, 2)}}. Point Q lies on the line AB **extended beyond B** so that {{AQ : QB = 3 : 1}}. Find Q by counting parts. Then try the formula {{A + m/(m + n)(B - A)}} with {{m = 3}} and {{n = -1}}. Why might a negative part make sense?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Gradient from two points {{(x_1, y_1)}} and {{(x_2, y_2)}}", back: "{{m = (y_2 - y_1)/(x_2 - x_1)}} — change in y over change in x, subtracting in the same order." },
      { front: "In {{y = mx + c}}, what do m and c tell you?", back: "m is the gradient; the line crosses the y-axis at {{(0, c)}}." },
      { front: "Gradient and y-intercept of {{3x + 2y = 12}}", back: "Rearrange: {{y = -3/2 x + 6}}. Gradient {{-3/2}}, y-intercept 6." },
      { front: "Gradient of {{ax + by = d}}", back: "{{-a/b}} (rearrange to {{y = -a/b x + d/b}})." },
      { front: "Equation of a line with gradient m through {{(x_1, y_1)}}", back: "{{y - y_1 = m(x - x_1)}}" },
      { front: "Line with gradient 3 through {{(4, 5)}}", back: "{{y - 5 = 3(x - 4)}}, so {{y = 3x - 7}}." },
      { front: "How do you write a line 'in the form {{ax + by + c = 0}} with integers'?", back: "Clear fractions by multiplying through, then move every term to one side." },
      { front: "Midpoint of {{(-3, 2)}} and {{(5, 8)}}", back: "Mean of the coordinates: {{(1, 5)}}." },
      { front: "Distance between {{(x_1, y_1)}} and {{(x_2, y_2)}}", back: "{{sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)}} — Pythagoras." },
      { front: "M is the midpoint of AB. How do you find B from A and M?", back: "Repeat the step from A to M: {{x_B = 2x_M - x_A}}, {{y_B = 2y_M - y_A}}." },
      { front: "Parallel lines — gradients?", back: "Equal." },
      { front: "Gradient perpendicular to {{2/5}}", back: "{{-5/2}}: flip and change sign, since {{m_1 * m_2 = -1}}." },
      { front: "Perpendicular bisector of AB — recipe", back: "Midpoint of AB; negative reciprocal of AB's gradient; line through the midpoint with that gradient." },
      { front: "Normal to a line at a point P", back: "The line through P perpendicular to the given line." },
      { front: "How do you find where two lines meet?", back: "Solve their equations simultaneously (substitute, equate or eliminate). Give both coordinates." },
      { front: "Two linear equations with no solution — what do the lines look like?", back: "Parallel: same gradient, different intercepts." },
      { front: "H+: P divides AB with {{AP : PB = m : n}}", back: "{{P = A + m/(m + n)(B - A)}} — P is {{m/(m + n)}} of the way from A." },
      { front: "H+: section formula", back: "{{P = (nA + mB)/(m + n)}} — the nearer endpoint gets the bigger weight." },
    ],
    mustKnow: [
      "Can I find the gradient of a line from two points and write its equation in the form y = mx + c?",
      "Can I find the gradient, intercepts and equation of a line where y is implicit, such as 3x + 2y = 12?",
      "Can I use y − y₁ = m(x − x₁) to find the equation of a line from a point and a gradient, or from two points?",
      "Can I write the equation of a line in the form ax + by + c = 0 with integer coefficients?",
      "Can I find the midpoint of a line segment from the coordinates of its ends?",
      "Can I find the distance between two coordinates using Pythagoras, giving an exact surd where asked?",
      "Can I find a missing endpoint when I know the midpoint and the other end?",
      "Can I recognise parallel lines from equal gradients and use m₁ × m₂ = −1 for perpendicular lines?",
      "Can I find the equation of a perpendicular bisector and of the normal to a line at a given point?",
      "Can I explain that the point of intersection of two lines is the solution of their simultaneous equations, and find it algebraically and graphically?",
      "Can I find the area of a triangle formed by straight lines and the axes?",
      "(H+) Can I find the point that divides a line segment in a given ratio, and work backwards to a missing endpoint?",
    ],
    misconceptions: [
      {
        wrong: "Gradient {{= (x_2 - x_1)/(y_2 - y_1)}} — across over up.",
        right: "Gradient is change in **y** over change in **x** (rise over run). Through {{(0, 0)}} and {{(1, 3)}} the line is steep, so the gradient is 3, not {{1/3}}.",
      },
      {
        wrong: "Through {{(1, 2)}} and {{(4, 8)}}: {{m = (8 - 2)/(1 - 4) = -2}}.",
        right: "Subtract in the **same order** top and bottom: {{(8 - 2)/(4 - 1) = 2}}. Mixing the order flips the sign.",
      },
      {
        wrong: "The line {{3x + 2y = 12}} has gradient 3.",
        right: "Only {{y = mx + c}} shows the gradient directly. Rearrange: {{y = -3/2 x + 6}}, so the gradient is {{-3/2}}.",
      },
      {
        wrong: "The line perpendicular to gradient 2 has gradient −2 (or {{1/2}}).",
        right: "You must flip **and** change the sign: {{-1/2}}. Check: {{2 * (-1/2) = -1}}.",
      },
      {
        wrong: "Midpoint of {{(2, 3)}} and {{(8, 11)}} is {{((8 - 2)/2, (11 - 3)/2) = (3, 4)}}.",
        right: "That is half the step, not the midpoint. Add, then halve: {{((2 + 8)/2, (3 + 11)/2) = (5, 7)}}.",
      },
      {
        wrong: "Distance from {{(0, 0)}} to {{(3, 4)}} is {{3 + 4 = 7}} (or {{sqrt(3 + 4)}}).",
        right: "Square the differences before adding, then square-root: {{sqrt(9 + 16) = 5}}.",
      },
      {
        wrong: "Line through {{(-2, 5)}} with gradient 4: {{y - 5 = 4(x - 2)}}.",
        right: "{{x - x_1 = x - (-2) = x + 2}}, so {{y - 5 = 4(x + 2)}}. Substitute the point to check: it must give {{0 = 0}}.",
      },
      {
        wrong: "(H+) {{AP : PB = 2 : 3}}, so P is {{2/3}} of the way from A to B.",
        right: "There are {{2 + 3 = 5}} parts and P is 2 of them along: {{2/5}} of the way.",
      },
    ],
    examMistakes: [
      "Reading the gradient straight off an implicit equation: writing m = 3 for {{3x + 2y = 12}} instead of rearranging to {{y = -3/2 x + 6}}.",
      "Finding a gradient on a graph by counting squares when the axes have different scales — always use the values on the axes.",
      "Perpendicular bisector: using the perpendicular gradient through A (instead of the midpoint), or the gradient of AB itself through the midpoint.",
      "Sign slips with negative coordinates: {{y - 5 = 4(x - 2)}} for the point {{(-2, 5)}}, or subtracting the coordinates in different orders in the gradient.",
      "Giving a decimal (8.49) when the question asks for the length 'as a surd in its simplest form', or leaving {{sqrt(72)}} unsimplified instead of {{6 sqrt(2)}}.",
      "Incomplete final answers: giving only the x-coordinate of an intersection, writing '2x + 1' or 'm = 2, c = 1' instead of the equation {{y = 2x + 1}}, or leaving fractions when integers a, b and c were asked for.",
    ],
    mnemonics: [
      {
        topic: "Gradient",
        device: "Rise over run — you have to get up before you can run",
        explanation: "Change in y (up) goes on top; change in x (across) goes underneath.",
      },
      {
        topic: "Perpendicular gradients",
        device: "Flip it and switch it",
        explanation: "Flip the fraction upside down and switch the sign. {{3/4}} becomes {{-4/3}}; −5 becomes {{1/5}}. The two gradients then multiply to −1.",
      },
      {
        topic: "Midpoint vs distance",
        device: "Midpoint: Add and Halve. Distance: Subtract, Square, Sum, Square-root",
        explanation: "The midpoint is an average (a point); the distance is Pythagoras on the differences (a length). Mixing them up is the classic slip.",
      },
    ],
    realWorld: [
      {
        title: "Ramps and road gradients",
        detail:
          "A wheelchair ramp with gradient 1 : 12 rises 1 cm for every 12 cm across — that is a gradient of {{1/12}}. Accessibility codes, including Singapore's, cap ramp gradients like this; road signs show the same idea as a percentage, so a '10% hill' has gradient {{1/10}}.",
        emoji: "♿",
      },
      {
        title: "Taxi fares and phone plans",
        detail:
          "A taxi fare is roughly a fixed flag-down charge plus a rate per kilometre: {{C = mx + c}}. The gradient m is the cost per km, c is the starting fare, and the intersection of two companies' fare lines tells you the trip length at which they cost the same.",
        emoji: "🚕",
      },
      {
        title: "Which MRT station is nearest?",
        detail:
          "The perpendicular bisector of two stations splits a map into the region closer to each. Doing this for every pair of stations gives a Voronoi diagram — used by planners to decide catchment areas for stations, schools and clinics.",
        emoji: "🚇",
      },
      {
        title: "Animation and game engines",
        detail:
          "When a character slides smoothly from point A to point B, the computer works out {{A + t(B - A)}} for t going from 0 to 1 — dividing the line in a ratio, many times a second. Programmers call it 'lerp' (linear interpolation). Distances between objects use the distance formula for collision checks.",
        emoji: "🎮",
      },
    ],
    videos: [
      { title: "Equation of a line through two points", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+equation+of+a+line+given+two+points" },
      { title: "Perpendicular lines and perpendicular bisectors", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+perpendicular+lines+gcse" },
      { title: "Midpoint and length of a line segment", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+midpoint+and+length+of+a+line+segment" },
      { title: "Dividing a line segment in a given ratio", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+dividing+a+line+segment+in+a+given+ratio" },
    ],
    formulas: [
      { name: "Gradient", formula: "{{m = (y_2 - y_1)/(x_2 - x_1)}}", note: "Learn this — not given" },
      { name: "Equation of a straight line", formula: "{{y = mx + c}} (gradient m, y-intercept c)", note: "Learn this — not given" },
      { name: "Point–gradient form", formula: "{{y - y_1 = m(x - x_1)}}", note: "Learn this — not given" },
      { name: "Gradient of an implicit line", formula: "{{ax + by = d}} has gradient {{-a/b}}", note: "Learn this — not given" },
      { name: "Midpoint", formula: "{{M = ((x_1 + x_2)/2, (y_1 + y_2)/2)}}", note: "Learn this — not given" },
      { name: "Distance between two points", formula: "{{d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)}}", note: "Learn this — not given" },
      { name: "Parallel lines", formula: "{{m_1 = m_2}}", note: "Learn this — not given" },
      { name: "Perpendicular lines", formula: "{{m_1 * m_2 = -1}}, so {{m_2 = -1/m_1}}", note: "Learn this — not given" },
      { name: "Area of a triangle", formula: "{{1/2 * base * height}}", note: "Learn this — not given" },
      { name: "(H+) Dividing AB in the ratio m : n", formula: "{{P = A + m/(m + n)(B - A) = (nA + mB)/(m + n)}}", note: "Learn this — not given" },
    ],
  },
};
