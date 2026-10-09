import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "inequalities",
  title: "Inequalities",
  strand: "Algebra",
  icon: "↔️",
  summary: "Solve like an equation, flip for a negative, then read the answer off a number line, a region or a parabola.",
  intro:
    "An equation pins down one or two values; an inequality describes a whole **range** of values — the speeds that are legal, the budgets that work, the x-values where a curve sits above the axis. Edexcel 4MA1 Higher tests three linked skills: solving linear inequalities (including double inequalities and integer solutions), shading regions on a graph, and solving quadratic inequalities. Each is worth 3–4 marks and each has one classic trap — the flipped sign, the dashed line, the 'or' answer — that this chapter teaches you to spot.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "linear-inequalities",
      heading: "Solving linear inequalities",
      discovery: {
        problem:
          "Start with a true statement: {{-2 < 5}}.\n\n1. Add 4 to both sides. Still true?\n2. Multiply both sides by 3. Still true?\n3. Now multiply both sides of {{-2 < 5}} by {{-1}}. Is {{2 < -5}} true?\n\nWhat must you do to the inequality sign to keep the statement true after step 3 — and why?",
        idea:
          "Adding, subtracting and multiplying by a **positive** number keep the order: {{2 < 9}}, {{-6 < 15}}. But multiplying by {{-1}} gives 2 and −5, and now 2 is the **bigger** one: {{2 > -5}}.\n\nMultiplying by a negative number reflects every number in 0 on the number line, so the order of any two numbers swaps. That is the one new rule for inequalities: **multiply or divide by a negative → reverse the sign.**",
      },
      body:
        "An **inequality** compares two quantities using one of four signs:\n\n| Sign | Meaning | Number-line circle |\n|---|---|---|\n| {{x < 3}} | x is less than 3 | open ○ at 3 |\n| {{x <= 3}} | x is less than or equal to 3 | filled ● at 3 |\n| {{x > 3}} | x is greater than 3 | open ○ at 3 |\n| {{x >= 3}} | x is greater than or equal to 3 | filled ● at 3 |\n\nThe solution is not one number but a **set** of numbers — every value that makes the statement true.\n\n**Solve it like an equation.** You may:\n- add or subtract the same thing on both sides;\n- multiply or divide both sides by the same **positive** number.\n\nIf you multiply or divide by a **negative** number, you must **reverse the inequality sign**.\n\n    {{4 - 3x < 19}}\n    {{-3x < 15}}\n    {{x > -5}}      (÷ −3, so < becomes >)\n\n**Dodge the negative.** You can avoid dividing by a negative altogether by collecting the x-terms on the side where they stay positive: {{4 < 19 + 3x}} → {{-15 < 3x}} → {{-5 < x}}, which is the same as {{x > -5}}.\n\n**Double inequalities.** In {{-3 <= 2x + 1 < 7}}, do the same thing to **all three parts**:\n\n    {{-4 <= 2x < 6}}     (subtract 1 throughout)\n    {{-2 <= x < 3}}      (divide by 2 throughout)\n\nIf the middle has {{-x}}, dividing by −1 reverses **both** signs: {{-1 < -x <= 4}} becomes {{1 > x >= -4}}, which is neater written as {{-4 <= x < 1}}.\n\n**Fractions.** Multiply every term by the LCD (a positive number, so no flip): {{(x + 2)/3 > (x - 1)/2}} → {{2(x + 2) > 3(x - 1)}} → {{2x + 4 > 3x - 3}} → {{7 > x}}, i.e. {{x < 7}}.\n\n**Integer solutions.** Questions often say *'n is an integer. Write down all the possible values of n.'* Look hard at the ends: for {{-2 <= n < 3}}, −2 **is** allowed but 3 is **not**, so {{n = -2, -1, 0, 1, 2}}. Watch for the hidden rewrite: {{-5 < 3n + 1 <= 10}} gives {{-2 < n <= 3}}, so n = −1, 0, 1, 2, 3.\n\n**Two conditions at once.** If x must satisfy {{x > 1}} **and** {{x <= 5}}, the overlap is {{1 < x <= 5}}. Drawing both on one number line shows the overlap instantly.\n\n**Set notation.** Edexcel may ask for answers in set notation: {{-2 <= x < 3}} is written {x : −2 ≤ x < 3}, read 'the set of x such that −2 ≤ x < 3'. A list of integers is written {−2, −1, 0, 1, 2}.\n\n> Never multiply or divide by an expression whose sign you don't know (like x). If x could be negative, you don't know whether to flip.",
      diagram: `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two number lines from −4 to 5. Top: x &lt; 2, an open circle at 2 with an arrow pointing left. Bottom: −2 ≤ x &lt; 3, a filled circle at −2 and an open circle at 3 joined by a thick line, with the integers −2, −1, 0, 1 and 2 highlighted."><rect width="460" height="210" fill="#ffffff"/><text x="20" y="26" font-size="14" font-family="sans-serif" fill="#1f2937" font-weight="bold" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">x &lt; 2</text><text x="140" y="26" font-size="12" font-family="sans-serif" fill="#475569" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">open circle: 2 is NOT included</text><line x1="30" y1="62" x2="430" y2="62" stroke="#334155" stroke-width="1.5"/><polygon points="430,58 438,62 430,66" fill="#334155"/><polygon points="30,58 22,62 30,66" fill="#334155"/><line x1="50" y1="57" x2="50" y2="67" stroke="#334155" stroke-width="1.2"/><text x="50" y="82" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−4</text><line x1="90" y1="57" x2="90" y2="67" stroke="#334155" stroke-width="1.2"/><text x="90" y="82" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−3</text><line x1="130" y1="57" x2="130" y2="67" stroke="#334155" stroke-width="1.2"/><text x="130" y="82" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−2</text><line x1="170" y1="57" x2="170" y2="67" stroke="#334155" stroke-width="1.2"/><text x="170" y="82" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−1</text><line x1="210" y1="57" x2="210" y2="67" stroke="#334155" stroke-width="1.2"/><text x="210" y="82" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">0</text><line x1="250" y1="57" x2="250" y2="67" stroke="#334155" stroke-width="1.2"/><text x="250" y="82" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">1</text><line x1="290" y1="57" x2="290" y2="67" stroke="#334155" stroke-width="1.2"/><text x="290" y="82" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">2</text><line x1="330" y1="57" x2="330" y2="67" stroke="#334155" stroke-width="1.2"/><text x="330" y="82" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">3</text><line x1="370" y1="57" x2="370" y2="67" stroke="#334155" stroke-width="1.2"/><text x="370" y="82" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">4</text><line x1="410" y1="57" x2="410" y2="67" stroke="#334155" stroke-width="1.2"/><text x="410" y="82" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">5</text><line x1="283" y1="62" x2="36" y2="62" stroke="#2563eb" stroke-width="5"/><polygon points="36,54 24,62 36,70" fill="#2563eb"/><circle cx="290" cy="62" r="7" fill="#ffffff" stroke="#2563eb" stroke-width="2.5"/><text x="20" y="122" font-size="14" font-family="sans-serif" fill="#1f2937" font-weight="bold" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−2 ≤ x &lt; 3</text><text x="140" y="122" font-size="12" font-family="sans-serif" fill="#475569" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">filled circle at −2 (included), open circle at 3 (not)</text><line x1="30" y1="158" x2="430" y2="158" stroke="#334155" stroke-width="1.5"/><polygon points="430,154 438,158 430,162" fill="#334155"/><polygon points="30,154 22,158 30,162" fill="#334155"/><line x1="50" y1="153" x2="50" y2="163" stroke="#334155" stroke-width="1.2"/><text x="50" y="178" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−4</text><line x1="90" y1="153" x2="90" y2="163" stroke="#334155" stroke-width="1.2"/><text x="90" y="178" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−3</text><line x1="130" y1="153" x2="130" y2="163" stroke="#334155" stroke-width="1.2"/><text x="130" y="178" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−2</text><line x1="170" y1="153" x2="170" y2="163" stroke="#334155" stroke-width="1.2"/><text x="170" y="178" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−1</text><line x1="210" y1="153" x2="210" y2="163" stroke="#334155" stroke-width="1.2"/><text x="210" y="178" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">0</text><line x1="250" y1="153" x2="250" y2="163" stroke="#334155" stroke-width="1.2"/><text x="250" y="178" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">1</text><line x1="290" y1="153" x2="290" y2="163" stroke="#334155" stroke-width="1.2"/><text x="290" y="178" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">2</text><line x1="330" y1="153" x2="330" y2="163" stroke="#334155" stroke-width="1.2"/><text x="330" y="178" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">3</text><line x1="370" y1="153" x2="370" y2="163" stroke="#334155" stroke-width="1.2"/><text x="370" y="178" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">4</text><line x1="410" y1="153" x2="410" y2="163" stroke="#334155" stroke-width="1.2"/><text x="410" y="178" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">5</text><line x1="130" y1="158" x2="323" y2="158" stroke="#16a34a" stroke-width="5"/><circle cx="130" cy="158" r="7" fill="#16a34a" stroke="#16a34a" stroke-width="2.5"/><circle cx="330" cy="158" r="7" fill="#ffffff" stroke="#16a34a" stroke-width="2.5"/><circle cx="170" cy="158" r="4" fill="#fde68a" stroke="#1f2937" stroke-width="1.2"/><circle cx="210" cy="158" r="4" fill="#fde68a" stroke="#1f2937" stroke-width="1.2"/><circle cx="250" cy="158" r="4" fill="#fde68a" stroke="#1f2937" stroke-width="1.2"/><circle cx="290" cy="158" r="4" fill="#fde68a" stroke="#1f2937" stroke-width="1.2"/><text x="230" y="202" font-size="12" font-family="sans-serif" fill="#334155" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">Integer solutions: −2, −1, 0, 1, 2</text></svg>`,
      diagramCaption:
        "Open circle = the end value is not included (< or >). Filled circle = it is included (≤ or ≥). The integer solutions of {{-2 <= x < 3}} include −2 but stop at 2.",
      workedExamples: [
        {
          title: "Dividing by a negative",
          problem: "Solve {{4 - 3x < 19}}. Show your solution on a number line.",
          steps: [
            "Subtract 4 from both sides: {{-3x < 15}}.",
            "Divide both sides by −3. Dividing by a negative reverses the sign: {{x > -5}}.",
            "Check with a value that should work, say x = 0: {{4 - 0 = 4 < 19}} ✓. And one that shouldn't, x = −6: {{4 + 18 = 22}}, not less than 19 ✓.",
            "Number line: an **open** circle at −5 (−5 itself is not included) with an arrow pointing right.",
          ],
          answer: "{{x > -5}}",
          yourTurn: {
            question: "Your turn: solve {{11 - 2x >= 3}}. (Type ≤ as <= and ≥ as >=.)",
            answer: { type: "inequality", ineq: "x<=4", display: "{{x <= 4}}" },
            solution: "Subtract 11: {{-2x >= -8}}. Divide by −2 and reverse the sign: {{x <= 4}}. Check x = 0: {{11 >= 3}} ✓.",
          },
        },
        {
          title: "A double inequality with integer solutions",
          problem: "n is an integer such that {{-3 <= 2n + 1 < 7}}. Write down all the possible values of n.",
          steps: [
            "Subtract 1 from all three parts: {{-4 <= 2n < 6}}.",
            "Divide all three parts by 2 (positive, so no flip): {{-2 <= n < 3}}.",
            "Left end: ≤, so −2 is included. Right end: <, so 3 is not.",
            "Check the ends: n = −2 gives {{2(-2) + 1 = -3}}, and {{-3 <= -3}} ✓; n = 3 gives 7, and 7 < 7 is false ✓.",
          ],
          answer: "n = −2, −1, 0, 1, 2",
          yourTurn: {
            question: "Your turn: n is an integer such that {{-5 < 3n + 1 <= 10}}. List all the possible values of n.",
            answer: { type: "list", values: [-1, 0, 1, 2, 3], ordered: false, display: "−1, 0, 1, 2, 3" },
            solution: "Subtract 1: {{-6 < 3n <= 9}}. Divide by 3: {{-2 < n <= 3}}. So −2 is excluded and 3 is included: n = −1, 0, 1, 2, 3.",
          },
        },
      ],
      keyPoints: [
        "Solve an inequality exactly like an equation — with one extra rule.",
        "Multiply or divide by a **negative** → reverse the inequality sign.",
        "Or avoid the negative: collect x on the side where its coefficient is positive.",
        "Double inequality: do the same operation to all three parts.",
        "Number line: open circle for < and >, filled circle for ≤ and ≥.",
        "Integer solutions: check both ends — is each end value included or not?",
        "Set notation: {x : −2 ≤ x < 3}.",
      ],
      whyItWorks:
        "Think of the number line. Adding 4 slides every number 4 to the right, so their order is unchanged. Multiplying by 3 stretches the line away from 0 — again the order is unchanged. Multiplying by −1 **reflects** the line in 0: what was on the right is now on the left. So if a was to the left of b ({{a < b}}), then {{-a}} is to the right of {{-b}} ({{-a > -b}}). Multiplying by any negative number is a stretch followed by this reflection, so it always reverses the order.\n\nThat is also why the 'collect on the positive side' trick works: it never multiplies by a negative, so the question of flipping never arises.",
      strategies: ["Use the inverse", "Check by substituting", "Draw a diagram", "Consider extremes"],
      thinkDeeper:
        "Always, sometimes or never: *if {{a < b}} then {{1/a > 1/b}}*? Test a = 2, b = 5; then a = −5, b = −2; then a = −2, b = 5. When does taking reciprocals reverse an inequality, and why does it fail when a and b have different signs?",
    },

    // ------------------------------------------------------------------ 2
    {
      id: "graphical-regions",
      heading: "Regions on a graph",
      discovery: {
        problem:
          "Draw the line {{y = 2x + 1}}. Now test some points: (0, 5), (3, 2), (−1, 4), (2, 0).\n\nFor each point, is {{y > 2x + 1}} true or false? Mark the 'true' points in one colour and the 'false' points in another. What do you notice about where they sit?",
        idea:
          "(0, 5): 5 > 1 ✓. (−1, 4): 4 > −1 ✓. (3, 2): 2 > 7 ✗. (2, 0): 0 > 5 ✗.\n\nEvery ✓ point is **above** the line and every ✗ point is **below** it. A straight line cuts the plane into two halves: on one side the inequality is always true, on the other it is always false. So you only ever need to test **one** point to know which half you want.",
      },
      body:
        "An inequality in x and y describes a **region** of the coordinate plane. The edge of the region — the **boundary** — is the line you get by replacing the inequality sign with =.\n\n**Solid or dashed?**\n\n| Inequality | Boundary line | Points on the line |\n|---|---|---|\n| ≤ or ≥ | **solid** | included |\n| < or > | **dashed** | not included |\n\n**Simple regions.** These come straight from the picture:\n- {{x >= 2}}: the solid vertical line {{x = 2}} and everything to its **right**.\n- {{y < 3}}: the dashed horizontal line {{y = 3}} and everything **below** it.\n- {{-1 <= x < 4}}: a vertical strip between a solid line {{x = -1}} and a dashed line {{x = 4}}.\n- {{y > 2x + 1}}: everything **above** the dashed line {{y = 2x + 1}}. When y is the subject, > means above and < means below.\n\n**Method for any line.**\n1. Draw the boundary (solid or dashed). For lines like {{2x + 3y <= 12}} use the intercepts: x = 0 gives y = 4, y = 0 gives x = 6.\n2. Pick a **test point** not on the line — the origin (0, 0) is easiest.\n3. Substitute. If the test point makes the inequality true, you want its side; if false, you want the other side.\n\nFor {{2x + 3y <= 12}}: (0, 0) gives {{0 <= 12}} ✓, so the region is on the origin's side (below the line).\n\n**Several inequalities.** The region R that satisfies **all** of them is where the individual regions overlap. Edexcel usually says: *'Show, by shading, the region that satisfies all three inequalities. Label the region R.'* Shade the region you want (and read each question — if it asks you to shade the **unwanted** regions, do that instead).\n\n**Finding the inequalities from a region.** Work backwards, one boundary at a time:\n1. Find the equation of the boundary line ({{y = mx + c}}, or {{x = a}}, {{y = b}}).\n2. Choose a point clearly **inside** the region and substitute to decide the direction.\n3. Solid → ≤ or ≥; dashed → < or >.\n\n**Integer points.** To count points with integer coordinates in R, go **row by row** (y = 1, then y = 2, …) and list the x-values that fit every inequality. Points on a solid boundary count; points on a dashed boundary do not.\n\n**Biggest or smallest value.** To find, say, the greatest value of {{x + 2y}} for integer points in R, evaluate it at the likely candidates — the integer points nearest the corners furthest in the direction that increases {{x + 2y}}.",
      diagram: `<svg viewBox="0 0 400 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid from 0 to 7 on both axes. Solid line y = 1, solid line x + y = 6 and dashed line y = 2x. The triangular region R between them, with vertices at (0.5, 1), (5, 1) and (2, 4), is shaded. Ten points with integer coordinates inside R are marked."><rect width="400" height="330" fill="#ffffff"/><line x1="46" y1="296" x2="46" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="46" y1="296" x2="316" y2="296" stroke="#e5e7eb" stroke-width="1"/><line x1="82" y1="296" x2="82" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="46" y1="260" x2="316" y2="260" stroke="#e5e7eb" stroke-width="1"/><line x1="118" y1="296" x2="118" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="46" y1="224" x2="316" y2="224" stroke="#e5e7eb" stroke-width="1"/><line x1="154" y1="296" x2="154" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="46" y1="188" x2="316" y2="188" stroke="#e5e7eb" stroke-width="1"/><line x1="190" y1="296" x2="190" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="46" y1="152" x2="316" y2="152" stroke="#e5e7eb" stroke-width="1"/><line x1="226" y1="296" x2="226" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="46" y1="116" x2="316" y2="116" stroke="#e5e7eb" stroke-width="1"/><line x1="262" y1="296" x2="262" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="46" y1="80" x2="316" y2="80" stroke="#e5e7eb" stroke-width="1"/><line x1="298" y1="296" x2="298" y2="26" stroke="#e5e7eb" stroke-width="1"/><line x1="46" y1="44" x2="316" y2="44" stroke="#e5e7eb" stroke-width="1"/><polygon points="64,260 226,260 118,152" fill="#c7d2fe" fill-opacity="0.85"/><line x1="46" y1="296" x2="319.6" y2="296" stroke="#334155" stroke-width="1.8"/><line x1="46" y1="296" x2="46" y2="22.4" stroke="#334155" stroke-width="1.8"/><text x="323.6" y="300" font-size="13" font-family="sans-serif" fill="#1f2937" font-style="italic" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">x</text><text x="42" y="18.4" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-style="italic" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">y</text><text x="82" y="312" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">1</text><text x="38" y="264" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">1</text><text x="118" y="312" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">2</text><text x="38" y="228" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">2</text><text x="154" y="312" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">3</text><text x="38" y="192" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">3</text><text x="190" y="312" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">4</text><text x="38" y="156" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">4</text><text x="226" y="312" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">5</text><text x="38" y="120" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">5</text><text x="262" y="312" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">6</text><text x="38" y="84" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">6</text><text x="298" y="312" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">7</text><text x="38" y="48" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">7</text><text x="38" y="310" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">0</text><line x1="46" y1="260" x2="312.4" y2="260" stroke="#1f2937" stroke-width="2.2"/><line x1="46" y1="80" x2="262" y2="296" stroke="#1f2937" stroke-width="2.2"/><line x1="46" y1="296" x2="175.6" y2="36.8" stroke="#1f2937" stroke-width="2.2" stroke-dasharray="7 5"/><text x="312.4" y="254" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">y = 1</text><text x="71.2" y="89" font-size="12" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">x + y = 6</text><text x="181.6" y="46.8" font-size="12" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">y = 2x</text><circle cx="82" cy="260" r="3.6" fill="#1f2937"/><circle cx="118" cy="260" r="3.6" fill="#1f2937"/><circle cx="154" cy="260" r="3.6" fill="#1f2937"/><circle cx="190" cy="260" r="3.6" fill="#1f2937"/><circle cx="226" cy="260" r="3.6" fill="#1f2937"/><circle cx="118" cy="224" r="3.6" fill="#1f2937"/><circle cx="154" cy="224" r="3.6" fill="#1f2937"/><circle cx="190" cy="224" r="3.6" fill="#1f2937"/><circle cx="118" cy="188" r="3.6" fill="#1f2937"/><circle cx="154" cy="188" r="3.6" fill="#1f2937"/><text x="137.8" y="212.8" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">R</text><rect x="236" y="20" width="150" height="56" rx="6" fill="#ffffff" stroke="#94a3b8"/><line x1="246" y1="38" x2="276" y2="38" stroke="#1f2937" stroke-width="2.2"/><text x="282" y="42" font-size="11" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">solid: ≤ or ≥</text><line x1="246" y1="60" x2="276" y2="60" stroke="#1f2937" stroke-width="2.2" stroke-dasharray="7 5"/><text x="282" y="64" font-size="11" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">dashed: &lt; or &gt;</text></svg>`,
      diagramCaption:
        "R satisfies {{y >= 1}}, {{x + y <= 6}} and {{y < 2x}}. The line {{y = 2x}} is dashed because points on it are not in R. The 10 dots are the points with integer coordinates in R.",
      workedExamples: [
        {
          title: "Shade the region and count integer points",
          problem:
            "On a grid, show the region R that satisfies {{y >= 1}}, {{x + y <= 6}} and {{y < 2x}}. Find the number of points with integer coordinates in R.",
          steps: [
            "Boundaries: {{y = 1}} (solid, since ≥), {{x + y = 6}} (solid, through (0, 6) and (6, 0)), {{y = 2x}} (dashed, since <).",
            "Directions: {{y >= 1}} is above y = 1. For {{x + y <= 6}}, test (0, 0): {{0 <= 6}} ✓, so the origin's side. For {{y < 2x}}, test (1, 0): {{0 < 2}} ✓, so below/right of y = 2x.",
            "The overlap is the triangle with corners (0.5, 1), (5, 1) and (2, 4). Shade it and label it R.",
            "Count row by row. y = 1: need x > 0.5 and x ≤ 5 → x = 1, 2, 3, 4, 5 (5 points).",
            "y = 2: need x > 1 and x ≤ 4 → x = 2, 3, 4 (3 points). (1, 2) is on the dashed line, so it is out.",
            "y = 3: need x > 1.5 and x ≤ 3 → x = 2, 3 (2 points). y = 4: need x > 2 and x ≤ 2 — impossible. (2, 4) lies on the dashed line.",
            "Total: 5 + 3 + 2 = 10 points.",
          ],
          answer: "10 points with integer coordinates",
          yourTurn: {
            question:
              "Your turn: using the same region R, find the greatest value of {{x + 2y}} for a point (x, y) in R with integer coordinates.",
            answer: { type: "number", value: 9 },
            solution:
              "Check the candidates: (5, 1) gives 7; (4, 2) gives 8; (2, 3) gives 8; (3, 3) gives 9. The greatest value is 9, at (3, 3).",
          },
        },
        {
          title: "Find the inequalities that define a region",
          problem:
            "The region T is the triangle with vertices A(1, 2), B(5, 2) and C(1, 6), boundaries included. Write down the three inequalities that define T.",
          steps: [
            "AB is horizontal: the line {{y = 2}}. T is above it, so {{y >= 2}} (≥ because the boundary is included).",
            "AC is vertical: the line {{x = 1}}. T is to the right, so {{x >= 1}}.",
            "BC: gradient {{(6 - 2)/(1 - 5) = -1}}, so {{y = -x + c}}; through (5, 2): {{c = 7}}. The line is {{x + y = 7}}.",
            "Test a point inside T, say (2, 3): {{2 + 3 = 5}}, and {{5 <= 7}}. So {{x + y <= 7}}.",
          ],
          answer: "{{y >= 2}}, {{x >= 1}}, {{x + y <= 7}}",
          yourTurn: {
            question:
              "Your turn: a solid line passes through (0, 4) and (2, 0). A region lies on the same side of this line as the point (1, 1). Write down the inequality for this side of the line. (Type ≤ as <=.)",
            answer: {
              type: "text",
              accept: ["y<=-2x+4", "y<=4-2x", "2x+y<=4", "y+2x<=4", "-2x+4>=y", "4-2x>=y", "4>=2x+y", "4>=y+2x", "y≤-2x+4", "y≤4-2x", "2x+y≤4", "y+2x≤4"],
              display: "{{y <= -2x + 4}} (or {{2x + y <= 4}})",
            },
            solution:
              "Gradient {{(0 - 4)/(2 - 0) = -2}} and intercept 4, so the line is {{y = -2x + 4}}. Test (1, 1): {{1 <= -2 + 4 = 2}} ✓, and the line is solid, so {{y <= -2x + 4}}.",
          },
        },
      ],
      keyPoints: [
        "Boundary line: replace the inequality sign with =.",
        "≤ or ≥ → solid line; < or > → dashed line.",
        "When y is the subject: y > … is above the line, y < … is below.",
        "x > a is to the right of the vertical line x = a; y < b is below the horizontal line y = b.",
        "Use a test point (usually the origin) to choose the side.",
        "Several inequalities: R is the overlap. Shade what the question asks for and label R.",
        "Integer points: count row by row; exclude points on dashed lines.",
      ],
      whyItWorks:
        "Take {{y > 2x + 1}}. Fix any x-value, say x = 3: the line passes through (3, 7). Points directly above it have y > 7 = 2(3) + 1, so they satisfy the inequality; points directly below do not. The same is true for every x, so the whole half-plane above the line is the solution.\n\nMore generally, the expression {{y - (2x + 1)}} is zero on the line and can only change sign by crossing it (it changes smoothly as you move). So it has one sign throughout each half — which is exactly why testing a single point is enough.",
      strategies: ["Draw a diagram", "Check by substituting", "Work backwards", "Split into cases"],
      thinkDeeper:
        "The inequalities {{x >= 0}}, {{y >= 0}} and {{x + y <= n}} define a triangle. Count the integer points (including the boundary) for n = 1, 2, 3, 4. Find a formula in n and explain it using the rows of the triangle. How does the count change if the slanted line is dashed instead?",
    },

    // ------------------------------------------------------------------ 3
    {
      id: "quadratic-inequalities",
      heading: "Quadratic inequalities",
      discovery: {
        problem:
          "Priya says: 'If {{x^2 < 9}} then {{x < 3}}.'\n\nTest her claim with x = 2, x = −2 and x = −5. Then find **every** x for which {{x^2 < 9}} — and every x for which {{x^2 > 9}}.",
        idea:
          "x = −5 satisfies {{x < 3}} but {{(-5)^2 = 25}}, which is not less than 9 — so Priya is wrong. A square is small only when x is **close to 0**: {{x^2 < 9}} means {{-3 < x < 3}}.\n\nAnd {{x^2 > 9}} means x is **far from 0** on either side: {{x < -3}} or {{x > 3}}. Square roots give two critical values (±3), and the answer is either the gap **between** them or the two pieces **outside** them.",
      },
      body:
        "A quadratic inequality has an {{x^2}} term, like {{x^2 - 2x - 8 > 0}}. Don't try to 'solve it like an equation' and stop — use the graph.\n\n**The method.**\n1. **Rearrange** so one side is 0 (and, ideally, the {{x^2}} coefficient is positive).\n2. Find the **critical values** by solving the equation {{= 0}} (factorise, or use the quadratic formula).\n3. **Sketch** the parabola: U-shaped when the {{x^2}} coefficient is positive, crossing the x-axis at the critical values.\n4. **Read off** the x-values where the curve is above (> 0) or below (< 0) the x-axis.\n\nFor {{x^2 - 2x - 8 > 0}}: {{(x + 2)(x - 4) = 0}} gives critical values −2 and 4. The U-shaped curve is **above** the axis outside the roots and **below** it between them (see the diagram).\n\n| Inequality (U-shaped curve, roots a < b) | Solution | Number line |\n|---|---|---|\n| {{(x - a)(x - b) < 0}} | {{a < x < b}} — **one** inequality | a segment between open circles |\n| {{(x - a)(x - b) <= 0}} | {{a <= x <= b}} | a segment between filled circles |\n| {{(x - a)(x - b) > 0}} | {{x < a}} **or** {{x > b}} — **two** pieces | two arrows pointing outwards |\n| {{(x - a)(x - b) >= 0}} | {{x <= a}} or {{x >= b}} | two arrows from filled circles |\n\n> Less than 0 → **between** the roots. Greater than 0 → **outside** the roots (for a U-shaped curve).\n\nNever write {{-2 > x > 4}} for the 'outside' answer — no number is both less than −2 and greater than 4. It must be two separate statements joined by **or**.\n\n**Set notation.** {{-2 < x < 4}} is {x : −2 < x < 4}. The two-piece answer is {x : x < −2} ∪ {x : x > 4} (∪ means 'or', the union of the two sets).\n\n**Rearrange first.** For {{2x^2 + 5x >= 3}}, write {{2x^2 + 5x - 3 >= 0}}, factorise {{(2x - 1)(x + 3) >= 0}}, so the critical values are −3 and {{1/2}}.\n\n**Don't divide by x.** {{x^2 > 3x}} does **not** give {{x > 3}}: dividing by x loses the solutions where x is negative. Instead, {{x^2 - 3x > 0}}, {{x(x - 3) > 0}}, so {{x < 0}} or {{x > 3}}. (Try x = −1: {{1 > -3}} ✓.)\n\n**Negative {{x^2}} coefficient.** For {{12 + x - x^2 > 0}}, multiply by −1 **and flip**: {{x^2 - x - 12 < 0}}, so {{(x - 4)(x + 3) < 0}} and {{-3 < x < 4}}. (Or sketch the ∩-shaped curve directly — it is above the axis between the roots.)\n\n**Roots that aren't whole numbers.** For {{x^2 - 4x - 1 > 0}}, the quadratic formula gives {{x = 2 +- sqrt(5)}}, so {{x < 2 - sqrt(5)}} or {{x > 2 + sqrt(5)}} (about {{x < -0.236}} or {{x > 4.24}}). Give exact values unless the question asks for decimals.\n\n**No real roots.** {{x^2 + 2x + 5 = (x + 1)^2 + 4}} is always at least 4, so {{x^2 + 2x + 5 > 0}} is true for **all** x, and {{x^2 + 2x + 5 < 0}} has **no** solutions.",
      diagram: `<svg viewBox="0 0 420 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y = x squared minus 2x minus 8, crossing the x-axis at −2 and 4 with minimum point (1, −9). The parts of the curve above the x-axis, for x &lt; −2 and x &gt; 4, are green. The part below the x-axis, for −2 &lt; x &lt; 4, is red. Shaded bands on the x-axis show the solution sets."><rect width="420" height="320" fill="#ffffff"/><line x1="50" y1="60" x2="50" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="82" y1="60" x2="82" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="114" y1="60" x2="114" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="146" y1="60" x2="146" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="178" y1="60" x2="178" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="210" y1="60" x2="210" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="242" y1="60" x2="242" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="274" y1="60" x2="274" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="306" y1="60" x2="306" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="338" y1="60" x2="338" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="370" y1="60" x2="370" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="290" x2="370" y2="290" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="270" x2="370" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="250" x2="370" y2="250" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="230" x2="370" y2="230" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="210" x2="370" y2="210" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="190" x2="370" y2="190" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="170" x2="370" y2="170" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="150" x2="370" y2="150" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="130" x2="370" y2="130" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="110" x2="370" y2="110" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="90" x2="370" y2="90" stroke="#eef2f7" stroke-width="1"/><line x1="50" y1="70" x2="370" y2="70" stroke="#eef2f7" stroke-width="1"/><line x1="43.6" y1="190" x2="382.8" y2="190" stroke="#334155" stroke-width="1.8"/><line x1="178" y1="295" x2="178" y2="55" stroke="#334155" stroke-width="1.8"/><text x="386.8" y="194" font-size="13" font-family="sans-serif" fill="#1f2937" font-style="italic" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">x</text><text x="184" y="59" font-size="13" font-family="sans-serif" fill="#1f2937" font-style="italic" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">y</text><text x="50" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−4</text><text x="82" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−3</text><text x="146" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−1</text><text x="210" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">1</text><text x="242" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">2</text><text x="274" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">3</text><text x="338" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">5</text><text x="370" y="205" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">6</text><text x="172" y="274" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−8</text><text x="172" y="234" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−4</text><text x="172" y="154" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">4</text><text x="172" y="114" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">8</text><text x="172" y="74" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">12</text><path d="M59.9 60 L60.8 62.6 L61.7 65.3 L62.6 67.9 L63.5 70.4 L64.4 73 L65.3 75.6 L66.2 78.1 L67.1 80.6 L68 83.1 L68.9 85.6 L69.8 88.1 L70.7 90.6 L71.6 93 L72.5 95.4 L73.4 97.9 L74.3 100.3 L75.2 102.6 L76.1 105 L77 107.3 L77.9 109.7 L78.8 112 L79.7 114.3 L80.6 116.6 L81.5 118.9 L82.4 121.1 L83.3 123.4 L84.2 125.6 L85.2 127.8 L86.1 130 L87 132.1 L87.9 134.3 L88.8 136.4 L89.7 138.6 L90.6 140.7 L91.5 142.8 L92.4 144.9 L93.3 146.9 L94.2 149 L95.1 151 L96 153 L96.9 155 L97.8 157 L98.7 159 L99.6 160.9 L100.5 162.9 L101.4 164.8 L102.3 166.7 L103.2 168.6 L104.1 170.4 L105 172.3 L105.9 174.1 L106.8 176 L107.7 177.8 L108.6 179.6 L109.5 181.3 L110.4 183.1 L111.3 184.9 L112.2 186.6 L113.1 188.3 L114 190" fill="none" stroke="#16a34a" stroke-width="3.2"/><path d="M306 190 L306.9 188.3 L307.8 186.6 L308.7 184.9 L309.6 183.1 L310.5 181.3 L311.4 179.6 L312.3 177.8 L313.2 176 L314.1 174.1 L315 172.3 L315.9 170.4 L316.8 168.6 L317.7 166.7 L318.6 164.8 L319.5 162.9 L320.4 160.9 L321.3 159 L322.2 157 L323.1 155 L324 153 L324.9 151 L325.8 149 L326.7 146.9 L327.6 144.9 L328.5 142.8 L329.4 140.7 L330.3 138.6 L331.2 136.4 L332.1 134.3 L333 132.1 L333.9 130 L334.8 127.8 L335.8 125.6 L336.7 123.4 L337.6 121.1 L338.5 118.9 L339.4 116.6 L340.3 114.3 L341.2 112 L342.1 109.7 L343 107.3 L343.9 105 L344.8 102.6 L345.7 100.3 L346.6 97.9 L347.5 95.4 L348.4 93 L349.3 90.6 L350.2 88.1 L351.1 85.6 L352 83.1 L352.9 80.6 L353.8 78.1 L354.7 75.6 L355.6 73 L356.5 70.4 L357.4 67.9 L358.3 65.3 L359.2 62.6 L360.1 60" fill="none" stroke="#16a34a" stroke-width="3.2"/><path d="M114 190 L117.2 195.9 L120.4 201.6 L123.6 207.1 L126.8 212.4 L130 217.5 L133.2 222.4 L136.4 227.1 L139.6 231.6 L142.8 235.9 L146 240 L149.2 243.9 L152.4 247.6 L155.6 251.1 L158.8 254.4 L162 257.5 L165.2 260.4 L168.4 263.1 L171.6 265.6 L174.8 267.9 L178 270 L181.2 271.9 L184.4 273.6 L187.6 275.1 L190.8 276.4 L194 277.5 L197.2 278.4 L200.4 279.1 L203.6 279.6 L206.8 279.9 L210 280 L213.2 279.9 L216.4 279.6 L219.6 279.1 L222.8 278.4 L226 277.5 L229.2 276.4 L232.4 275.1 L235.6 273.6 L238.8 271.9 L242 270 L245.2 267.9 L248.4 265.6 L251.6 263.1 L254.8 260.4 L258 257.5 L261.2 254.4 L264.4 251.1 L267.6 247.6 L270.8 243.9 L274 240 L277.2 235.9 L280.4 231.6 L283.6 227.1 L286.8 222.4 L290 217.5 L293.2 212.4 L296.4 207.1 L299.6 201.6 L302.8 195.9 L306 190" fill="none" stroke="#dc2626" stroke-width="3.2"/><rect x="43.6" y="186" width="70.4" height="8" fill="#16a34a" fill-opacity="0.35"/><rect x="306" y="186" width="76.8" height="8" fill="#16a34a" fill-opacity="0.35"/><circle cx="114" cy="190" r="5" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><circle cx="306" cy="190" r="5" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><text x="114" y="210" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−2</text><text x="306" y="210" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">4</text><circle cx="210" cy="280" r="3.5" fill="#1f2937"/><text x="218" y="294" font-size="11" font-family="sans-serif" fill="#1f2937" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">(1, −9)</text><text x="85.2" y="75" font-size="12" font-family="sans-serif" fill="#15803d" font-weight="bold" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">y &gt; 0</text><text x="85.2" y="92" font-size="12" font-family="sans-serif" fill="#15803d" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">x &lt; −2</text><text x="334.8" y="75" font-size="12" font-family="sans-serif" fill="#15803d" text-anchor="end" font-weight="bold" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">y &gt; 0</text><text x="334.8" y="92" font-size="12" font-family="sans-serif" fill="#15803d" text-anchor="end" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">x &gt; 4</text><text x="226" y="220" font-size="12" font-family="sans-serif" fill="#b91c1c" text-anchor="middle" font-weight="bold" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">y &lt; 0</text><text x="226" y="237" font-size="12" font-family="sans-serif" fill="#b91c1c" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">−2 &lt; x &lt; 4</text><text x="210" y="314" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle" stroke="#ffffff" stroke-width="3" stroke-linejoin="round" paint-order="stroke">y = x² − 2x − 8 = (x + 2)(x − 4)</text></svg>`,
      diagramCaption:
        "{{y = x^2 - 2x - 8}} is above the x-axis (y > 0) for {{x < -2}} or {{x > 4}}, and below it (y < 0) for {{-2 < x < 4}}.",
      workedExamples: [
        {
          title: "Greater than zero: the 'outside' answer",
          problem: "Solve {{x^2 - 2x - 8 > 0}}. Give your answer in set notation.",
          steps: [
            "Critical values: {{x^2 - 2x - 8 = 0}} → {{(x + 2)(x - 4) = 0}} → x = −2 or x = 4.",
            "Sketch: the {{x^2}} coefficient is positive, so the curve is U-shaped and crosses the x-axis at −2 and 4.",
            "We want > 0: the parts of the curve **above** the axis — to the left of −2 and to the right of 4.",
            "Check x = 5: {{25 - 10 - 8 = 7 > 0}} ✓. Check x = 0: {{-8}}, not > 0 ✓ (0 is between the roots, so it should fail).",
            "Answer: {{x < -2}} or {{x > 4}}; in set notation {x : x < −2} ∪ {x : x > 4}.",
          ],
          answer: "{{x < -2}} or {{x > 4}}, i.e. {x : x < −2} ∪ {x : x > 4}",
          yourTurn: {
            question: "Your turn: solve {{x^2 - 5x + 4 <= 0}}. (Type ≤ as <=, e.g. 2<=x<=7.)",
            answer: { type: "inequality", ineq: "1<=x<=4", display: "{{1 <= x <= 4}}" },
            solution:
              "{{(x - 1)(x - 4) = 0}} gives critical values 1 and 4. The U-shaped curve is on or below the axis between them, and ≤ includes the ends: {{1 <= x <= 4}}.",
          },
        },
        {
          title: "Rearrange first, fractional critical value",
          problem: "Solve {{2x^2 + 5x >= 3}}.",
          steps: [
            "Make one side zero: {{2x^2 + 5x - 3 >= 0}}.",
            "Factorise: {{(2x - 1)(x + 3) >= 0}}. (Check: {{2x^2 + 6x - x - 3 = 2x^2 + 5x - 3}} ✓.)",
            "Critical values: {{x = 1/2}} and {{x = -3}}.",
            "U-shaped curve; we want ≥ 0, so on or above the axis: **outside** the roots, ends included.",
            "Check x = 0: {{0 >= 3}} is false ✓ (0 lies between −3 and {{1/2}}).",
          ],
          answer: "{{x <= -3}} or {{x >= 1/2}}",
          yourTurn: {
            question: "Your turn: how many integers n satisfy {{n^2 < 2n + 15}}?",
            answer: { type: "number", value: 7 },
            solution:
              "{{n^2 - 2n - 15 < 0}} → {{(n - 5)(n + 3) < 0}} → {{-3 < n < 5}} (between the roots, ends excluded). Integers: −2, −1, 0, 1, 2, 3, 4 — that is 7.",
          },
        },
      ],
      keyPoints: [
        "Rearrange to (quadratic) compared with 0 before doing anything else.",
        "Critical values come from solving the quadratic = 0.",
        "Always sketch the parabola — it makes the answer obvious.",
        "U-shaped: < 0 → between the roots (one inequality); > 0 → outside (two inequalities joined by 'or').",
        "{{x^2 < k^2}} → {{-k < x < k}}; {{x^2 > k^2}} → {{x < -k}} or {{x > k}}.",
        "Never divide both sides by x — you might be dividing by a negative.",
        "Set notation: {x : a < x < b} or {x : x < a} ∪ {x : x > b}.",
      ],
      whyItWorks:
        "Write the quadratic as a product, {{(x + 2)(x - 4)}}. A product of two numbers is negative only when the factors have **opposite** signs.\n\n| x | {{x + 2}} | {{x - 4}} | product |\n|---|---|---|---|\n| x < −2 | − | − | + |\n| −2 < x < 4 | + | − | − |\n| x > 4 | + | + | + |\n\nSo the product is negative exactly between the roots and positive outside them. The graph tells the same story: a parabola is a smooth curve, so it can only change from positive to negative by passing through zero — at a critical value. Between consecutive critical values the sign cannot change, so testing one point in each interval is enough.",
      strategies: ["Draw a diagram", "Split into cases", "Check by substituting", "Use symmetry"],
      thinkDeeper:
        "For which values of k does {{x^2 + kx + 9 = 0}} have **no** real solutions? (Hint: the discriminant {{b^2 - 4ac}} must be negative, which gives a quadratic inequality in k.) Then explain, using the graph, why {{x^2 + kx + 9 > 0}} for every x exactly when k is in that range.",
    },
  ],

  learn: {
    flashcards: [
      { front: "When must you reverse an inequality sign?", back: "When you multiply or divide both sides by a **negative** number." },
      { front: "Solve {{-2x > 6}}", back: "Divide by −2 and flip: {{x < -3}}." },
      { front: "Open circle or filled circle on a number line?", back: "Open ○ for < or > (end not included); filled ● for ≤ or ≥ (end included)." },
      { front: "How do you solve {{-3 <= 2x + 1 < 7}}?", back: "Do the same to all three parts: {{-4 <= 2x < 6}}, then {{-2 <= x < 3}}." },
      { front: "List the integers n with {{-3 < n <= 2}}", back: "−2, −1, 0, 1, 2 (−3 is excluded, 2 is included)." },
      { front: "Write {{-2 <= x < 3}} in set notation", back: "{x : −2 ≤ x < 3}" },
      { front: "Solid or dashed boundary line?", back: "Solid for ≤ or ≥ (line included); dashed for < or > (line not included)." },
      { front: "Which side of the line is {{y > 3x - 1}}?", back: "Above the line {{y = 3x - 1}} (y is the subject and the sign is >)." },
      { front: "Describe the region {{x <= 4}}", back: "The solid vertical line {{x = 4}} and everything to its left." },
      { front: "How do you choose the side for {{2x + 3y <= 12}}?", back: "Test a point not on the line, e.g. (0, 0): {{0 <= 12}} is true, so shade the origin's side." },
      { front: "Counting integer points in a region — method?", back: "Go row by row (y = 1, 2, …), list the x-values that fit every inequality; leave out points on dashed lines." },
      { front: "What are the critical values of {{x^2 - 2x - 8 > 0}}?", back: "The roots of {{x^2 - 2x - 8 = 0}}: x = −2 and x = 4." },
      { front: "{{(x - a)(x - b) < 0}} with a < b", back: "Between the roots: {{a < x < b}}." },
      { front: "{{(x - a)(x - b) > 0}} with a < b", back: "Outside the roots: {{x < a}} or {{x > b}}." },
      { front: "Solve {{x^2 < 25}}", back: "{{-5 < x < 5}} — not just {{x < 5}}." },
      { front: "Why not divide {{x^2 > 4x}} by x?", back: "x might be negative (or 0). Instead: {{x(x - 4) > 0}}, so {{x < 0}} or {{x > 4}}." },
      { front: "Set notation for {{x < -1}} or {{x > 3}}", back: "{x : x < −1} ∪ {x : x > 3}" },
    ],
    mustKnow: [
      "Can I solve linear inequalities, including ones with brackets, fractions and x on both sides?",
      "Can I reverse the inequality sign when I multiply or divide by a negative number — and explain why?",
      "Can I solve a double inequality such as {{-3 <= 2x + 1 < 7}} and list the integer solutions?",
      "Can I represent a solution on a number line using open and filled circles?",
      "Can I represent and identify simple inequalities (like {{x >= 2}}, {{y < 3}}, {{y > 2x + 1}}) as regions on a graph?",
      "Can I shade 'harder' regions defined by several linear inequalities, using solid and dashed lines correctly, and label the region R?",
      "Can I find the inequalities that define a given region, and count the integer points inside it?",
      "Can I solve quadratic inequalities by finding the critical values and sketching the parabola?",
      "Can I represent the solution set of a quadratic inequality on a number line, including the two-piece 'or' answer?",
      "Can I write solution sets in set notation, such as {x : x < −2} ∪ {x : x > 4}?",
    ],
    misconceptions: [
      { wrong: "{{-3x < 12}} gives {{x < -4}}.", right: "Dividing by −3 reverses the sign: {{x > -4}}. Check with x = 0: {{0 < 12}} ✓, and 0 > −4 ✓." },
      { wrong: "Subtracting a number from both sides means you flip the sign.", right: "Only **multiplying or dividing by a negative** flips it. {{x - 5 > -2}} gives {{x > 3}} — no flip." },
      { wrong: "{{-2 <= n < 3}} for integers gives −1, 0, 1, 2, 3.", right: "≤ includes −2 and < excludes 3: n = −2, −1, 0, 1, 2." },
      { wrong: "{{x^2 > 16}} means {{x > 4}}.", right: "x = −5 also works. The solution is {{x < -4}} or {{x > 4}}." },
      { wrong: "{{x^2 - 2x - 8 > 0}} gives {{-2 < x < 4}}.", right: "That is where the curve is **below** the axis. > 0 means above: {{x < -2}} or {{x > 4}}." },
      { wrong: "The 'outside' answer can be written {{-2 > x > 4}}.", right: "No number is both less than −2 and greater than 4. Write two inequalities joined by **or**: {{x < -2}} or {{x > 4}}." },
      { wrong: "A region for {{y < 2x}} is drawn with a solid line.", right: "Strict < or > means the boundary is **not** included, so the line is dashed." },
      { wrong: "{{y > 3}} is the region to the right of a line.", right: "{{y = 3}} is horizontal; {{y > 3}} is everything **above** it. It is {{x > 3}} that is to the right." },
    ],
    examMistakes: [
      "Forgetting to reverse the sign after dividing by a negative coefficient (e.g. writing {{x < -5}} from {{-3x < 15}}).",
      "Giving the final answer as an equation ({{x = 4}}) after working with an inequality, losing the final accuracy mark.",
      "Including an end value that is excluded (or vice versa) when listing integer solutions of a double inequality.",
      "Drawing a solid line for a strict inequality (or dashed for ≤), or shading the wrong side because no test point was used.",
      "Stopping at the critical values in a quadratic inequality (writing 'x = −2, x = 4') instead of giving the solution set.",
      "Choosing 'between' when the answer is 'outside' the roots — not sketching the parabola to check which part is wanted.",
    ],
    mnemonics: [
      { topic: "Flipping the sign", device: "Negative? Flip it!", explanation: "Only multiplying or dividing by a negative number reverses the sign. Adding, subtracting or using a positive number never does." },
      { topic: "Solid or dashed", device: "The extra line under ≤ means 'draw the line solid'", explanation: "≤ and ≥ have a line underneath (equal to), so the boundary is included and drawn solid. < and > have no line, so the boundary is dashed." },
      { topic: "Quadratic inequalities (U-shaped)", device: "Less is 'in-between', greater is 'go away'", explanation: "For a U-shaped parabola, < 0 is between the roots; > 0 is outside them, heading away in both directions." },
    ],
    realWorld: [
      { title: "Speed cameras and limits", detail: "A 70 km/h speed limit is {{v <= 70}}; a minimum speed on an expressway adds a lower bound — together a double inequality like {{40 <= v <= 70}}.", emoji: "🚗" },
      { title: "Planning on a budget", detail: "Buying x bubble teas at $4 and y kaya toasts at $2 with $20 gives {{4x + 2y <= 20}} — a region of affordable combinations, and you can only buy whole items, so you want its integer points.", emoji: "🧋" },
      { title: "Linear programming", detail: "Factories, airlines and delivery firms shade feasible regions defined by many inequalities, then find the corner that maximises profit or minimises cost — the same idea as your 'greatest value of x + 2y' questions.", emoji: "🏭" },
      { title: "Safe projectile heights", detail: "A ball's height {{h = 20t - 5t^2}} metres is above 15 m when {{5t^2 - 20t + 15 < 0}}, i.e. {{1 < t < 3}} seconds — a quadratic inequality gives the time window.", emoji: "⚽" },
    ],
    videos: [
      { title: "Solving inequalities", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+solving+inequalities" },
      { title: "Inequalities on graphs (regions)", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+inequalities+on+graphs+regions" },
      { title: "Quadratic inequalities", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+quadratic+inequalities" },
      { title: "Quadratic inequalities and set notation", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+quadratic+inequalities" },
    ],
    formulas: [
      { name: "Multiplying or dividing by a negative", formula: "If {{a < b}} and {{k < 0}}, then {{ka > kb}}", note: "Learn this — not given" },
      { name: "Double inequality", formula: "{{p < ax + b < q}} → subtract b and divide by a (a > 0) in all three parts", note: "Learn this — not given" },
      { name: "Region above or below a line", formula: "{{y > mx + c}}: above the line; {{y < mx + c}}: below. ≤/≥ solid, </> dashed", note: "Learn this — not given" },
      { name: "Quadratic inequality: between the roots", formula: "{{(x - a)(x - b) < 0}} with {{a < b}} ⇔ {{a < x < b}}", note: "Learn this — not given" },
      { name: "Quadratic inequality: outside the roots", formula: "{{(x - a)(x - b) > 0}} with {{a < b}} ⇔ {{x < a}} or {{x > b}}", note: "Learn this — not given" },
      { name: "Squares", formula: "{{x^2 < k^2}} ⇔ {{-k < x < k}};  {{x^2 > k^2}} ⇔ {{x < -k}} or {{x > k}}  (k > 0)", note: "Learn this — not given" },
      { name: "Quadratic formula (for critical values)", formula: "{{x = (-b +- sqrt(b^2 - 4ac))/(2a)}}", note: "On the formula sheet" },
      { name: "Set notation", formula: "{x : a < x < b};  {x : x < a} ∪ {x : x > b}", note: "Learn this — not given" },
    ],
  },
};
