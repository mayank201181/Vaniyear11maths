import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "quadratic-equations",
  title: "Quadratic Equations",
  strand: "Algebra",
  icon: "🪃",
  summary: "Four ways to crack ax² + bx + c = 0 — and how to choose the quickest one under exam pressure.",
  intro:
    "Quadratic equations turn up on every 4MA1 Higher paper — on their own, inside area and speed problems, where a line meets a curve or circle, and hidden inside algebraic fractions. You need four solving methods (inspection, factorising, completing the square and the formula) and, just as importantly, the judgement to pick the right one and to throw away answers that make no sense in context. The discriminant tells you how many solutions to expect before you start, and the H+ section shows how equations in {{x^4}}, {{sqrt(x)}} or {{2^x}} are often quadratics in disguise.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "solve-by-factorising",
      heading: "Solving by factorising",
      discovery: {
        problem:
          "Ethan solves {{x^2 = 5x}} like this: 'Divide both sides by x, so x = 5.'\n\nCheck his answer — it works. Now try x = 0 in the original equation. What happened? Which step lost a solution, and how could you solve it without that step?",
        idea:
          "x = 0 also works: {{0^2 = 5 * 0}}. Dividing by x is only allowed when x ≠ 0 — so Ethan silently threw that case away.\n\nThe safe move is to **rearrange to = 0 and factorise**:\n\n    {{x^2 - 5x = 0}}\n    {{x(x - 5) = 0}}\n\nA product is zero only if one of its factors is zero, so x = 0 **or** x − 5 = 0. Two solutions: **x = 0 or x = 5**.",
      },
      body:
        "A **quadratic equation** can be written as {{ax^2 + bx + c = 0}} with a ≠ 0. It has at most **two** solutions (also called **roots**).\n\n**The key fact — the zero-product rule.** If {{A * B = 0}} then A = 0 or B = 0. That is the only reason factorising solves equations — so the other side **must be 0**. From {{(x - 2)(x - 3) = 6}} you can conclude nothing about either bracket.\n\n**No factorising needed.** If there is no x-term, isolate the square and square-root — remembering **±**:\n\n    {{x^2 = 49}}  ⇒  x = ±7\n    {{2x^2 - 18 = 0}}  ⇒  {{x^2 = 9}}  ⇒  x = ±3\n    {{(x - 3)^2 = 16}}  ⇒  x − 3 = ±4  ⇒  x = 7 or x = −1\n\n**The method for everything else**\n\n1. **Rearrange** so one side is 0 (expand any brackets first). Keep the {{x^2}} term positive if you can.\n2. **Factorise** fully.\n3. Set **each factor** equal to 0 and solve.\n4. **Check** in the original equation — and in context, reject any root that is impossible.\n\n**Four patterns to recognise**\n\n| Type | Example | Factorised | Solutions |\n|---|---|---|---|\n| No constant term | {{x^2 - 5x = 0}} | {{x(x - 5) = 0}} | 0, 5 |\n| Difference of two squares | {{x^2 - 25 = 0}} | {{(x - 5)(x + 5) = 0}} | ±5 |\n| Trinomial, a = 1 | {{x^2 + 3x - 10 = 0}} | {{(x + 5)(x - 2) = 0}} | −5, 2 |\n| Trinomial, a ≠ 1 | {{3x^2 - 10x - 8 = 0}} | {{(3x + 2)(x - 4) = 0}} | {{-2/3}}, 4 |\n\n**When a ≠ 1** split the middle term: find two numbers that **multiply to ac** and **add to b**, rewrite bx with them, then factorise in pairs. Careful with the solution: {{3x + 2 = 0}} gives {{x = -2/3}}, *not* −2.\n\n**Rearrange first.** {{x(x + 3) = 10}} is not ready: expand to {{x^2 + 3x - 10 = 0}}, then {{(x + 5)(x - 2) = 0}}, so x = −5 or x = 2.\n\n**Forming quadratics from a context.** Area problems are the classic: write the area as a product of the sides, set it equal to the given area, rearrange to = 0 and solve. One root is usually **impossible** (a negative length, a negative time, a non-whole number of people) — state that you reject it and why. The diagram shows a full example.",
      diagram: `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangular garden with length x plus 6 metres and width x minus 2 metres and area 48 square metres, drawn to scale with x equal to 6, so it is 12 metres by 4 metres."><rect width="400" height="220" fill="#ffffff"/><rect x="60" y="60" width="264" height="88" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><text x="192" y="48" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(x + 6) m</text><text x="334" y="109" font-size="13" font-family="sans-serif" fill="#1f2937">(x − 2) m</text><text x="192" y="109" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Area = 48 m²</text><text x="200" y="188" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">(x + 6)(x − 2) = 48  →  x² + 4x − 60 = 0  →  (x + 10)(x − 6) = 0</text><text x="200" y="210" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">x = 6 (x = −10 rejected: width would be −12 m)</text></svg>`,
      diagramCaption:
        "A rectangle {{(x + 6)}} m by {{(x - 2)}} m with area 48 m², drawn to scale for x = 6. The root x = −10 is rejected because it would make the width −12 m.",
      workedExamples: [
        {
          title: "Factorising when a ≠ 1",
          problem: "Solve {{3x^2 - 10x - 8 = 0}}.",
          steps: [
            "ac = 3 × (−8) = −24. Two numbers that multiply to −24 and add to −10: −12 and +2.",
            "Split the middle term: {{3x^2 - 12x + 2x - 8 = 0}}.",
            "Factorise in pairs: {{3x(x - 4) + 2(x - 4) = 0}}, so {{(3x + 2)(x - 4) = 0}}.",
            "Either {{3x + 2 = 0}}, giving {{x = -2/3}}, or {{x - 4 = 0}}, giving x = 4.",
            "Check x = 4: 3(16) − 40 − 8 = 48 − 48 = 0 ✓.",
          ],
          answer: "{{x = -2/3}} or x = 4",
          yourTurn: {
            question: "Your turn: solve {{2x^2 + 7x - 15 = 0}}. Give both solutions.",
            answer: { type: "list", values: [1.5, -5], ordered: false, display: "{{x = 3/2}} or x = −5" },
            solution:
              "ac = −30; −3 and 10 multiply to −30 and add to 7. {{2x^2 + 10x - 3x - 15 = 2x(x + 5) - 3(x + 5) = (2x - 3)(x + 5)}}. So {{x = 3/2}} or x = −5. Check x = −5: 50 − 35 − 15 = 0 ✓.",
          },
        },
        {
          title: "Forming a quadratic from an area",
          problem:
            "Wei Ling's vegetable garden is a rectangle of length {{(x + 6)}} m and width {{(x - 2)}} m. Its area is 48 m². Work out the length and width of the garden.",
          steps: [
            "Area = length × width: {{(x + 6)(x - 2) = 48}}.",
            "Expand: {{x^2 + 4x - 12 = 48}}. Rearrange to = 0: {{x^2 + 4x - 60 = 0}}.",
            "Two numbers multiplying to −60 and adding to 4: +10 and −6. So {{(x + 10)(x - 6) = 0}}.",
            "x = −10 or x = 6. If x = −10 the width would be −12 m, which is impossible, so reject it.",
            "x = 6: the garden is 12 m long and 4 m wide. Check: 12 × 4 = 48 ✓.",
          ],
          answer: "12 m by 4 m",
          yourTurn: {
            question:
              "Your turn: a rectangular photo is {{(2x + 1)}} cm long and x cm wide. Its area is 36 cm². Work out the value of x.",
            answer: { type: "number", value: 4 },
            solution:
              "{{x(2x + 1) = 36}}, so {{2x^2 + x - 36 = 0}}. ac = −72: use 9 and −8. {{2x^2 + 9x - 8x - 36 = x(2x + 9) - 4(2x + 9) = (x - 4)(2x + 9)}}. x = 4 or {{x = -9/2}}; a width cannot be negative, so x = 4. Check: 9 × 4 = 36 ✓.",
          },
        },
      ],
      keyPoints: [
        "Rearrange to **= 0** before you factorise — the zero-product rule needs a zero.",
        "Never divide both sides by x (or by a bracket containing x): you can lose the solution x = 0.",
        "No x-term? Square-root both sides and write **±**.",
        "a ≠ 1: find two numbers with product ac and sum b, split the middle term, factorise in pairs.",
        "{{(3x + 2) = 0}} gives {{x = -2/3}}, not −2 — finish the solving.",
        "In context, reject roots that give negative lengths, times or counts, and say why.",
      ],
      whyItWorks:
        "The real numbers have a special property: if {{A * B = 0}}, then A = 0 or B = 0. (If A ≠ 0 you could divide by A and get B = 0.) Factorising rewrites a quadratic as a product, so this property splits one hard equation into two easy linear ones.\n\nIt only works with 0. If {{A * B = 6}}, there are infinitely many possibilities (2 × 3, 1 × 6, 0.5 × 12, …), so knowing the product tells you nothing about each factor.\n\nDividing by x is a disguised version of the same mistake: from {{x * x = 5 * x}} you may cancel x **only if x ≠ 0**, so you must treat x = 0 as a separate case — which factorising does automatically.",
      strategies: ["Rearrange to = 0", "Check by substituting", "Split into cases", "Draw a diagram"],
      thinkDeeper:
        "Write down a quadratic equation, with integer coefficients and the {{x^2}} coefficient positive, whose solutions are {{x = 2/3}} and x = −5. How many such equations are there? What do they all have in common?",
    },

    // ------------------------------------------------------------------ 2
    {
      id: "solve-completing-square",
      heading: "Solving by completing the square",
      discovery: {
        problem:
          "Solve {{x^2 + 6x = 16}} by adding the **same number** to both sides so that the left-hand side becomes a perfect square {{(x + ?)^2}}.\n\nNow try the same trick on {{x^2 + 6x = 4}}. Can factorising solve this one?",
        idea:
          "Add 9 to both sides: {{x^2 + 6x + 9 = 25}}, so {{(x + 3)^2 = 25}}. Square-root: x + 3 = ±5, so **x = 2 or x = −8**.\n\nThe same move works on the second equation: {{(x + 3)^2 = 13}}, so {{x + 3 = +- sqrt(13)}} and {{x = -3 +- sqrt(13)}}. These are irrational, so factorising with whole numbers could never find them — but completing the square always can.",
      },
      body:
        "**Completing the square** rewrites {{x^2 + bx}} using a perfect square:\n\n    {{x^2 + bx = (x + b/2)^2 - (b/2)^2}}\n\nIn words: **halve the coefficient of x, put it in the bracket, then subtract its square.** The subtraction cancels the extra number the bracket creates when you expand it.\n\n| Expression | Half of b | Completed square |\n|---|---|---|\n| {{x^2 + 6x}} | 3 | {{(x + 3)^2 - 9}} |\n| {{x^2 - 8x + 3}} | −4 | {{(x - 4)^2 - 16 + 3 = (x - 4)^2 - 13}} |\n| {{x^2 + 5x}} | {{5/2}} | {{(x + 5/2)^2 - 25/4}} |\n\n**Solving with it**\n\n1. Make the coefficient of {{x^2}} equal to 1 (divide every term by a).\n2. Complete the square on the x-terms.\n3. Rearrange to {{(x + p)^2 = q}}.\n4. Square-root both sides with **±**, then solve for x.\n\nThe result is **exact**, usually in surd form {{x = -p +- sqrt(q)}}. Edexcel often asks 'give your answers in the form {{a +- sqrt(b)}}' — that is a strong hint to complete the square. Simplify the surd if you can: {{sqrt(12) = 2 sqrt(3)}}.\n\n**What q tells you.** If q > 0 there are two roots; if q = 0 there is one (repeated) root; if q < 0 there are **no real roots**, because no real number squares to a negative.\n\n**A bonus: the turning point.** {{y = (x + p)^2 + r}} has its minimum point at {{(-p, r)}}, because the square is never negative and is 0 when x = −p. So the same working sketches the graph (see *Graphs of functions*).\n\n**Why bother when there is a formula?** Completing the square *is* the formula — the next section derives the formula by completing the square on {{ax^2 + bx + c = 0}} in general. If you understand this method, you never need to worry about misremembering the formula.",
      diagram: `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Completing the square as a picture. An x by x square plus two strips each 3 by x make x squared plus 6x. The missing 3 by 3 corner, area 9, is dashed. Adding it completes a square of side x plus 3."><rect width="440" height="250" fill="#ffffff"/><rect x="40" y="40" width="130" height="130" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.8"/><rect x="170" y="40" width="55" height="130" fill="#bae6fd" stroke="#1f2937" stroke-width="1.8"/><rect x="40" y="170" width="130" height="55" fill="#bae6fd" stroke="#1f2937" stroke-width="1.8"/><rect x="170" y="170" width="55" height="55" fill="#fde68a" stroke="#1f2937" stroke-width="1.8" stroke-dasharray="5 4"/><text x="105" y="110" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x²</text><text x="197.5" y="110" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">3x</text><text x="105" y="202.5" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">3x</text><text x="197.5" y="202.5" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">9</text><text x="105" y="32" font-size="13" font-family="sans-serif" text-anchor="middle" font-style="italic" fill="#1f2937">x</text><text x="197.5" y="32" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">3</text><text x="30" y="109" font-size="13" font-family="sans-serif" text-anchor="end" font-style="italic" fill="#1f2937">x</text><text x="30" y="201.5" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">3</text><text x="270" y="70" font-size="13" font-family="sans-serif" fill="#1f2937">x² + 6x</text><text x="270" y="88" font-size="12" font-family="sans-serif" fill="#334155">= square + two strips</text><text x="270" y="120" font-size="12" font-family="sans-serif" fill="#334155">Add the missing corner:</text><text x="270" y="138" font-size="13" font-family="sans-serif" fill="#1f2937">x² + 6x + 9 = (x + 3)²</text><text x="270" y="170" font-size="13" font-family="sans-serif" fill="#1f2937">So x² + 6x = (x + 3)² − 9</text><text x="270" y="188" font-size="12" font-family="sans-serif" fill="#334155">half of 6 is 3; 3² = 9</text></svg>`,
      diagramCaption:
        "Completing the square, literally: {{x^2 + 6x}} is a square plus two strips; adding the 3 × 3 corner (area 9) makes a full square of side {{x + 3}}.",
      workedExamples: [
        {
          title: "Exact answers in surd form",
          problem: "Solve {{x^2 - 8x + 3 = 0}}. Give your answers in the form {{a +- sqrt(b)}}.",
          steps: [
            "Half of −8 is −4, so {{x^2 - 8x = (x - 4)^2 - 16}}.",
            "The equation becomes {{(x - 4)^2 - 16 + 3 = 0}}, i.e. {{(x - 4)^2 = 13}}.",
            "Square-root both sides: {{x - 4 = +- sqrt(13)}}.",
            "So {{x = 4 +- sqrt(13)}}.",
            "Sense-check: {{4 + sqrt(13)}} ≈ 7.61 and {{4 - sqrt(13)}} ≈ 0.394; their sum is 8 and product ≈ 3, matching −b and c ✓.",
          ],
          answer: "{{x = 4 + sqrt(13)}} or {{x = 4 - sqrt(13)}}",
          yourTurn: {
            question:
              "Your turn: solve {{x^2 + 10x + 18 = 0}}. Give the **larger** solution in the form {{a + sqrt(b)}}. (Type sqrt( ) for a root.)",
            answer: { type: "expression", expr: "-5+sqrt(7)", form: "surd", display: "{{-5 + sqrt(7)}}" },
            solution:
              "{{x^2 + 10x = (x + 5)^2 - 25}}, so {{(x + 5)^2 - 25 + 18 = 0}} and {{(x + 5)^2 = 7}}. Then {{x = -5 +- sqrt(7)}}. The larger is {{-5 + sqrt(7)}} ≈ −2.35.",
          },
        },
        {
          title: "When a ≠ 1",
          problem: "Solve {{2x^2 + 12x - 5 = 0}}, giving your answers in exact form.",
          steps: [
            "Divide every term by 2: {{x^2 + 6x - 5/2 = 0}}.",
            "Complete the square: {{(x + 3)^2 - 9 - 5/2 = 0}}, so {{(x + 3)^2 = 23/2}}.",
            "Square-root: {{x + 3 = +- sqrt(23/2)}}.",
            "Tidy the surd: {{sqrt(23/2) = sqrt(46)/2}} (multiply top and bottom inside by 2).",
            "So {{x = -3 +- sqrt(46)/2}}, i.e. {{x = (-6 +- sqrt(46))/2}} (≈ 0.391 or −6.39).",
          ],
          answer: "{{x = -3 +- sqrt(46)/2}}",
          yourTurn: {
            question:
              "Your turn: write {{x^2 - 6x + 2 = 0}} in the form {{(x - p)^2 = q}}. What is the value of q?",
            answer: { type: "number", value: 7 },
            solution: "{{x^2 - 6x = (x - 3)^2 - 9}}, so {{(x - 3)^2 - 9 + 2 = 0}} and {{(x - 3)^2 = 7}}. q = 7, giving {{x = 3 +- sqrt(7)}}.",
          },
        },
      ],
      keyPoints: [
        "{{x^2 + bx = (x + b/2)^2 - (b/2)^2}}: halve b, square it, subtract it.",
        "Make the {{x^2}} coefficient 1 first (divide every term by a).",
        "Square-root with **±** — two roots, not one.",
        "Leave answers exact ({{4 +- sqrt(13)}}) unless the question asks for decimals.",
        "{{(x + p)^2 = q}} with q < 0 has no real solutions.",
        "'In the form {{a +- sqrt(b)}}' is the exam's signal to complete the square.",
      ],
      whyItWorks:
        "Expand {{(x + b/2)^2}}: you get {{x^2 + bx + b^2/4}}. The first two terms are exactly what you started with, plus an unwanted {{b^2/4}} — so subtract it straight back off. The diagram shows the same thing in area: {{x^2 + bx}} is a square with two strips of width {{b/2}}, missing one small corner square of area {{(b/2)^2}}.\n\nWhy is this so useful? A perfect square has x in **one** place, so you can undo it with a square root — the 'x appears twice' problem disappears.",
      strategies: ["Draw a diagram", "Make it simpler", "Use the inverse", "Check by substituting"],
      thinkDeeper:
        "Without solving, explain why {{x^2 + 4x + 7 = 0}} has no real solutions. Then find the smallest whole number c for which {{x^2 + 4x + c = 0}} has no real solutions, and the value of c that gives exactly one solution.",
    },

    // ------------------------------------------------------------------ 3
    {
      id: "quadratic-formula",
      heading: "The quadratic formula",
      discovery: {
        problem:
          "Try completing the square on {{3x^2 - 7x + 1 = 0}}. It works, but the thirds get messy.\n\nInstead, do it **once, in general**: complete the square on {{ax^2 + bx + c = 0}}, keeping a, b and c as letters. What formula for x drops out at the end?",
        idea:
          "Divide by a, then complete the square:\n\n    {{x^2 + b/a x + c/a = 0}}\n    {{(x + b/(2a))^2 - b^2/(4a^2) + c/a = 0}}\n    {{(x + b/(2a))^2 = (b^2 - 4ac)/(4a^2)}}\n    {{x + b/(2a) = +- sqrt(b^2 - 4ac)/(2a)}}\n    {{x = (-b +- sqrt(b^2 - 4ac))/(2a)}}\n\nThat is the **quadratic formula** — completing the square, done once for every quadratic. For {{3x^2 - 7x + 1 = 0}} it gives {{x = (7 +- sqrt(37))/6}}.",
      },
      body:
        "For {{ax^2 + bx + c = 0}} (a ≠ 0):\n\n    {{x = (-b +- sqrt(b^2 - 4ac))/(2a)}}\n\nIt is on the Edexcel formula sheet, but you should know it — and how it comes from completing the square.\n\n**Using it without slips**\n\n1. Rearrange to {{ax^2 + bx + c = 0}} first.\n2. Write down a, b and c **with their signs**.\n3. Substitute with brackets: for b = −7, {{-b = 7}} and {{b^2 = (-7)^2 = 49}}.\n4. Work out {{b^2 - 4ac}} first (it is a single number), then its square root.\n5. Divide the **whole** numerator by 2a — the fraction line covers {{-b}} too.\n6. Round only at the end, normally to **3 significant figures**.\n\n> 'Give your answers correct to 3 significant figures' (or '2 decimal places') almost always means: use the formula — the quadratic will not factorise.\n\n**The discriminant {{b^2 - 4ac}}.** It is the part under the square root, and it decides how many real roots there are:\n\n| {{b^2 - 4ac}} | Roots | Graph of {{y = ax^2 + bx + c}} |\n|---|---|---|\n| > 0 | two distinct real roots | crosses the x-axis twice |\n| = 0 | one repeated root | touches the x-axis |\n| < 0 | no real roots | never meets the x-axis |\n\nIf {{b^2 - 4ac}} is a **perfect square** (0, 1, 4, 9, 16, …) the roots are rational and the quadratic factorises — you could have factorised instead.\n\n**Choosing a method**\n\n| The question says / looks like | Best method |\n|---|---|\n| No x-term ({{x^2 = 20}}) | square-root, ± |\n| Factorises easily | factorising |\n| 'in the form {{a +- sqrt(b)}}' | completing the square (or formula, then simplify) |\n| '3 s.f.' or '2 d.p.' | formula |\n| 'how many solutions?', 'equal roots', 'no real roots' | discriminant |",
      diagram: `<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three parabolas. Left: y equals x squared minus 2x minus 3 crosses the x-axis at minus 1 and 3, discriminant 16, two roots. Middle: y equals x squared minus 2x plus 1 touches the x-axis at 1, discriminant 0, one repeated root. Right: y equals x squared minus 2x plus 3 stays above the x-axis, discriminant minus 8, no real roots."><rect width="480" height="230" fill="#ffffff"/><rect x="12" y="8" width="146" height="214" rx="8" fill="#bbf7d0" fill-opacity="0.35" stroke="#cbd5e1"/><line x1="17" y1="112" x2="143" y2="112" stroke="#334155" stroke-width="1.2"/><line x1="59" y1="28" x2="59" y2="168" stroke="#334155" stroke-width="1.2"/><line x1="38" y1="109" x2="38" y2="115" stroke="#334155"/><text x="38" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">−1</text><line x1="80" y1="109" x2="80" y2="115" stroke="#334155"/><text x="80" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">1</text><line x1="101" y1="109" x2="101" y2="115" stroke="#334155"/><text x="101" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><line x1="122" y1="109" x2="122" y2="115" stroke="#334155"/><text x="122" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">3</text><polyline points="17,42 18.1,46.2 19.1,50.3 20.2,54.3 21.2,58.2 22.3,62.1 23.3,65.9 24.4,69.7 25.4,73.4 26.5,77 27.5,80.5 28.6,84 29.6,87.4 30.7,90.7 31.7,93.9 32.8,97.1 33.8,100.2 34.9,103.3 35.9,106.3 37,109.2 38,112 39.1,114.8 40.1,117.5 41.2,120.1 42.2,122.6 43.3,125.1 44.3,127.5 45.4,129.9 46.4,132.2 47.5,134.4 48.5,136.5 49.6,138.6 50.6,140.6 51.7,142.5 52.7,144.3 53.8,146.1 54.8,147.8 55.9,149.5 56.9,151.1 58,152.6 59,154 60.1,155.4 61.1,156.7 62.2,157.9 63.2,159 64.3,160.1 65.3,161.1 66.4,162.1 67.4,163 68.5,163.8 69.5,164.5 70.6,165.2 71.6,165.8 72.7,166.3 73.7,166.7 74.8,167.1 75.8,167.4 76.9,167.7 77.9,167.9 79,168 80,168 81.1,168 82.1,167.9 83.2,167.7 84.2,167.4 85.3,167.1 86.3,166.7 87.4,166.3 88.4,165.8 89.5,165.2 90.5,164.5 91.6,163.8 92.6,163 93.7,162.1 94.7,161.1 95.8,160.1 96.8,159 97.9,157.9 98.9,156.7 100,155.4 101,154 102.1,152.6 103.1,151.1 104.2,149.5 105.2,147.8 106.3,146.1 107.3,144.3 108.4,142.5 109.4,140.6 110.5,138.6 111.5,136.5 112.6,134.4 113.6,132.2 114.7,129.9 115.7,127.5 116.8,125.1 117.8,122.6 118.9,120.1 119.9,117.5 121,114.8 122,112 123,109.2 124.1,106.3 125.1,103.3 126.2,100.2 127.2,97.1 128.3,93.9 129.3,90.7 130.4,87.4 131.4,84 132.5,80.5 133.5,77 134.6,73.4 135.6,69.7 136.7,65.9 137.7,62.1 138.8,58.2 139.8,54.3 140.9,50.3 141.9,46.2 143,42" fill="none" stroke="#4f46e5" stroke-width="2.2"/><circle cx="38" cy="112" r="4" fill="#1f2937"/><circle cx="122" cy="112" r="4" fill="#1f2937"/><text x="85" y="170" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">y = x² − 2x − 3</text><text x="85" y="184" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">b² − 4ac = 16 > 0</text><text x="85" y="198" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">two roots</text><rect x="170" y="8" width="146" height="214" rx="8" fill="#fde68a" fill-opacity="0.35" stroke="#cbd5e1"/><line x1="175" y1="112" x2="301" y2="112" stroke="#334155" stroke-width="1.2"/><line x1="217" y1="28" x2="217" y2="168" stroke="#334155" stroke-width="1.2"/><line x1="196" y1="109" x2="196" y2="115" stroke="#334155"/><text x="196" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">−1</text><line x1="238" y1="109" x2="238" y2="115" stroke="#334155"/><text x="238" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">1</text><line x1="259" y1="109" x2="259" y2="115" stroke="#334155"/><text x="259" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><line x1="280" y1="109" x2="280" y2="115" stroke="#334155"/><text x="280" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">3</text><polyline points="186.6,28 187.6,31.4 188.7,34.7 189.7,37.9 190.8,41.1 191.8,44.2 192.9,47.3 193.9,50.3 195,53.2 196,56 197.1,58.8 198.1,61.5 199.2,64.1 200.2,66.6 201.3,69.1 202.3,71.5 203.4,73.9 204.4,76.2 205.5,78.4 206.5,80.5 207.6,82.6 208.6,84.6 209.7,86.5 210.7,88.3 211.8,90.1 212.8,91.8 213.9,93.5 214.9,95.1 216,96.6 217,98 218.1,99.4 219.1,100.7 220.2,101.9 221.2,103 222.3,104.1 223.3,105.1 224.4,106.1 225.4,107 226.5,107.8 227.5,108.5 228.6,109.2 229.6,109.8 230.7,110.3 231.7,110.7 232.8,111.1 233.8,111.4 234.9,111.7 235.9,111.9 237,112 238,112 239.1,112 240.1,111.9 241.2,111.7 242.2,111.4 243.3,111.1 244.3,110.7 245.4,110.3 246.4,109.8 247.5,109.2 248.5,108.5 249.6,107.8 250.6,107 251.7,106.1 252.7,105.1 253.8,104.1 254.8,103 255.9,101.9 256.9,100.7 258,99.4 259,98 260.1,96.6 261.1,95.1 262.2,93.5 263.2,91.8 264.3,90.1 265.3,88.3 266.4,86.5 267.4,84.6 268.5,82.6 269.5,80.5 270.6,78.4 271.6,76.2 272.7,73.9 273.7,71.5 274.8,69.1 275.8,66.6 276.9,64.1 277.9,61.5 279,58.8 280,56 281,53.2 282.1,50.3 283.2,47.3 284.2,44.2 285.2,41.1 286.3,37.9 287.3,34.7 288.4,31.4 289.4,28" fill="none" stroke="#4f46e5" stroke-width="2.2"/><circle cx="238" cy="112" r="4" fill="#1f2937"/><text x="243" y="170" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">y = x² − 2x + 1</text><text x="243" y="184" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">b² − 4ac = 0</text><text x="243" y="198" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">one repeated root</text><rect x="328" y="8" width="146" height="214" rx="8" fill="#fecaca" fill-opacity="0.35" stroke="#cbd5e1"/><line x1="333" y1="112" x2="459" y2="112" stroke="#334155" stroke-width="1.2"/><line x1="375" y1="28" x2="375" y2="168" stroke="#334155" stroke-width="1.2"/><line x1="354" y1="109" x2="354" y2="115" stroke="#334155"/><text x="354" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">−1</text><line x1="396" y1="109" x2="396" y2="115" stroke="#334155"/><text x="396" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">1</text><line x1="417" y1="109" x2="417" y2="115" stroke="#334155"/><text x="417" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><line x1="438" y1="109" x2="438" y2="115" stroke="#334155"/><text x="438" y="126" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">3</text><polyline points="354,28 355.1,30.8 356.1,33.5 357.2,36.1 358.2,38.6 359.3,41.1 360.3,43.5 361.4,45.9 362.4,48.2 363.5,50.4 364.5,52.5 365.6,54.6 366.6,56.6 367.7,58.5 368.7,60.3 369.8,62.1 370.8,63.8 371.9,65.5 372.9,67.1 374,68.6 375,70 376.1,71.4 377.1,72.7 378.2,73.9 379.2,75 380.3,76.1 381.3,77.1 382.4,78.1 383.4,79 384.5,79.8 385.5,80.5 386.6,81.2 387.6,81.8 388.7,82.3 389.7,82.7 390.8,83.1 391.8,83.4 392.9,83.7 393.9,83.9 395,84 396,84 397.1,84 398.1,83.9 399.2,83.7 400.2,83.4 401.3,83.1 402.3,82.7 403.4,82.3 404.4,81.8 405.5,81.2 406.5,80.5 407.6,79.8 408.6,79 409.7,78.1 410.7,77.1 411.8,76.1 412.8,75 413.9,73.9 414.9,72.7 416,71.4 417,70 418.1,68.6 419.1,67.1 420.2,65.5 421.2,63.8 422.3,62.1 423.3,60.3 424.4,58.5 425.4,56.6 426.5,54.6 427.5,52.5 428.6,50.4 429.6,48.2 430.7,45.9 431.7,43.5 432.8,41.1 433.8,38.6 434.9,36.1 435.9,33.5 437,30.8 438,28" fill="none" stroke="#4f46e5" stroke-width="2.2"/><text x="401" y="170" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">y = x² − 2x + 3</text><text x="401" y="184" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">b² − 4ac = −8 < 0</text><text x="401" y="198" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">no real roots</text></svg>`,
      diagramCaption:
        "Same a and b, different c. The discriminant {{b^2 - 4ac}} predicts whether {{y = x^2 - 2x + c}} crosses, touches or misses the x-axis.",
      workedExamples: [
        {
          title: "Answers to 3 significant figures",
          problem: "Solve {{3x^2 - 7x + 1 = 0}}. Give your answers correct to 3 significant figures.",
          steps: [
            "a = 3, b = −7, c = 1.",
            "Discriminant: {{(-7)^2 - 4 * 3 * 1 = 49 - 12 = 37}}.",
            "{{x = (7 +- sqrt(37))/6}}, and {{sqrt(37) = 6.08276...}}",
            "{{x = 13.08276.../6 = 2.18046...}} or {{x = 0.91724.../6 = 0.15287...}}",
            "To 3 s.f.: x = 2.18 or x = 0.153.",
          ],
          answer: "x = 2.18 or x = 0.153",
          yourTurn: {
            question: "Your turn: solve {{2x^2 + 5x - 4 = 0}}. Give both answers correct to 3 significant figures.",
            answer: { type: "list", values: [0.637, -3.14], ordered: false, tolerance: 0.006, display: "x = 0.637 or x = −3.14" },
            solution:
              "a = 2, b = 5, c = −4. {{b^2 - 4ac = 25 + 32 = 57}}. {{x = (-5 +- sqrt(57))/4}} with {{sqrt(57) = 7.5498...}}, so x = 2.5498…/4 = 0.637 or x = −12.5498…/4 = −3.14 (3 s.f.).",
          },
        },
        {
          title: "Using the discriminant",
          problem: "The equation {{4x^2 + kx + 9 = 0}} has equal roots. Find the possible values of k.",
          steps: [
            "Equal (repeated) roots means {{b^2 - 4ac = 0}}.",
            "a = 4, b = k, c = 9: {{k^2 - 4 * 4 * 9 = 0}}, so {{k^2 = 144}}.",
            "k = 12 or k = −12 (don't forget the negative).",
            "Check k = 12: {{4x^2 + 12x + 9 = (2x + 3)^2}}, a perfect square ✓.",
          ],
          answer: "k = 12 or k = −12",
          yourTurn: {
            question: "Your turn: {{x^2 - 10x + k = 0}} has exactly one (repeated) root. Find k.",
            answer: { type: "number", value: 25 },
            solution: "{{b^2 - 4ac = 100 - 4k = 0}}, so k = 25. Check: {{x^2 - 10x + 25 = (x - 5)^2}} ✓.",
          },
        },
      ],
      keyPoints: [
        "{{x = (-b +- sqrt(b^2 - 4ac))/(2a)}} — the whole numerator is over 2a.",
        "Rearrange to = 0 and read off a, b, c **with signs** before substituting.",
        "Use brackets for negatives: {{(-7)^2 = 49}}, and {{-b}} for b = −7 is +7.",
        "{{b^2 - 4ac}} > 0: two roots; = 0: one repeated root; < 0: no real roots.",
        "A perfect-square discriminant means the quadratic factorises.",
        "Keep full accuracy until the final answer, then round (usually 3 s.f.).",
      ],
      whyItWorks:
        "The formula is the general completed square (see the Discovery). Reading it backwards explains the discriminant: the roots are {{-b/(2a)}} (the x-coordinate of the turning point — the axis of symmetry) plus or minus a distance {{sqrt(b^2 - 4ac)/(2a)}}. If the discriminant is positive the two roots sit symmetrically either side of the axis; if it is 0 the distance is 0 and they merge at the vertex; if it is negative the square root does not exist in the real numbers — the parabola never reaches the x-axis.\n\nA bonus pattern: adding the two roots, the ± parts cancel, so the **sum of the roots is {{-b/a}}**; multiplying them gives {{c/a}}. Great for checking answers.",
      strategies: ["Make it simpler", "Check by substituting", "Use symmetry", "Eliminate options"],
      thinkDeeper:
        "If a and c have **opposite signs** (one positive, one negative), explain why {{ax^2 + bx + c = 0}} must have two real roots, whatever b is. Is the converse true — if there are two real roots, must a and c have opposite signs?",
    },

    // ------------------------------------------------------------------ 4
    {
      id: "linear-quadratic-simultaneous",
      heading: "Linear–quadratic simultaneous equations",
      discovery: {
        problem:
          "The line {{y = x + 1}} and the curve {{y = x^2 - 1}} cross. At a crossing point both equations are true for the **same** x and y.\n\nUse that to write one equation in x only, and find the crossing points. How many could there be — could a straight line ever cross a parabola three times?",
        idea:
          "At a crossing, the two y-values are equal: {{x^2 - 1 = x + 1}}, so {{x^2 - x - 2 = 0}} and {{(x - 2)(x + 1) = 0}}. x = 2 gives y = 3; x = −1 gives y = 0. The points are **(2, 3) and (−1, 0)**.\n\nSubstituting gave a **quadratic**, which has at most two roots — so a line meets a parabola at most **twice**.",
      },
      body:
        "When one equation is linear and the other has squared terms, elimination by adding and subtracting does not work. Use **substitution**.\n\n**Method**\n\n1. Rearrange the **linear** equation to make x or y the subject (choose whichever avoids fractions).\n2. **Substitute** into the quadratic equation. Use brackets: {{y = 2x - 3}} makes {{y^2}} into {{(2x - 3)^2}}.\n3. Expand, rearrange to = 0, and solve the quadratic.\n4. Substitute each value back into the **linear** equation to find its partner.\n5. Write the answers as **pairs**: x = 3, y = 1 **and** x = −1, y = 3.\n\n**Circles.** {{x^2 + y^2 = r^2}} is a circle, centre the origin, radius r. To find where {{y = x + 1}} meets {{x^2 + y^2 = 25}}:\n\n    {{x^2 + (x + 1)^2 = 25}}\n    {{2x^2 + 2x + 1 = 25}}\n    {{x^2 + x - 12 = 0}}  ⇒  {{(x + 4)(x - 3) = 0}}\n\nx = 3 gives y = 4; x = −4 gives y = −3. The points are (3, 4) and (−4, −3) — see the diagram.\n\n**Geometric meaning.** The solutions are the **intersection points** of the line and the curve. The discriminant of the quadratic you form tells you the picture:\n\n| Discriminant | Line and curve |\n|---|---|\n| > 0 | meet at two points |\n| = 0 | the line is a **tangent** (touches once) |\n| < 0 | do not meet |\n\n**Pairing matters.** Substituting back into the *quadratic* can give extra, wrong partners: {{x^2 + y^2 = 25}} with x = 3 gives y = ±4, but only (3, 4) is on the line. Always go back to the linear equation.",
      diagram: `<svg viewBox="0 0 340 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The circle x squared plus y squared equals 25, centre the origin, radius 5, and the straight line y equals x plus 1. They intersect at the points (3, 4) and (minus 4, minus 3)."><rect width="340" height="300" fill="#ffffff"/><line x1="40" y1="20" x2="40" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="270" x2="290" y2="270" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="20" x2="60" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="250" x2="290" y2="250" stroke="#e2e8f0" stroke-width="1"/><line x1="80" y1="20" x2="80" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="230" x2="290" y2="230" stroke="#e2e8f0" stroke-width="1"/><line x1="100" y1="20" x2="100" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="210" x2="290" y2="210" stroke="#e2e8f0" stroke-width="1"/><line x1="120" y1="20" x2="120" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="190" x2="290" y2="190" stroke="#e2e8f0" stroke-width="1"/><line x1="140" y1="20" x2="140" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="170" x2="290" y2="170" stroke="#e2e8f0" stroke-width="1"/><line x1="160" y1="20" x2="160" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="150" x2="290" y2="150" stroke="#e2e8f0" stroke-width="1"/><line x1="180" y1="20" x2="180" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="130" x2="290" y2="130" stroke="#e2e8f0" stroke-width="1"/><line x1="200" y1="20" x2="200" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="110" x2="290" y2="110" stroke="#e2e8f0" stroke-width="1"/><line x1="220" y1="20" x2="220" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="90" x2="290" y2="90" stroke="#e2e8f0" stroke-width="1"/><line x1="240" y1="20" x2="240" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="70" x2="290" y2="70" stroke="#e2e8f0" stroke-width="1"/><line x1="260" y1="20" x2="260" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="50" x2="290" y2="50" stroke="#e2e8f0" stroke-width="1"/><line x1="280" y1="20" x2="280" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="30" x2="290" y2="30" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="150" x2="290" y2="150" stroke="#334155" stroke-width="1.3"/><line x1="160" y1="14" x2="160" y2="286" stroke="#334155" stroke-width="1.3"/><text x="60" y="164" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">−5</text><text x="154" y="254" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">−5</text><text x="260" y="164" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">5</text><text x="154" y="54" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">5</text><text x="294" y="154" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937">x</text><text x="165" y="18" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937">y</text><circle cx="160" cy="150" r="100" fill="#c7d2fe" fill-opacity="0.35" stroke="#4f46e5" stroke-width="2.2"/><line x1="30" y1="260" x2="270" y2="20" stroke="#dc2626" stroke-width="2.2"/><circle cx="220" cy="70" r="4.5" fill="#1f2937"/><circle cx="80" cy="210" r="4.5" fill="#1f2937"/><text x="228" y="74" font-size="12" font-family="sans-serif" fill="#1f2937">(3, 4)</text><text x="88" y="224" font-size="12" font-family="sans-serif" fill="#1f2937">(−4, −3)</text><text x="232" y="242" font-size="12" font-family="sans-serif" fill="#4338ca">x² + y² = 25</text><text x="252" y="30" font-size="12" font-family="sans-serif" text-anchor="end" fill="#b91c1c">y = x + 1</text></svg>`,
      diagramCaption:
        "The circle {{x^2 + y^2 = 25}} and the line {{y = x + 1}} meet at the two solutions, (3, 4) and (−4, −3).",
      workedExamples: [
        {
          title: "A line and a parabola",
          problem: "Solve the simultaneous equations {{y = x^2 - 3x + 2}} and {{y = 2x - 4}}.",
          steps: [
            "Both equal y, so set them equal: {{x^2 - 3x + 2 = 2x - 4}}.",
            "Rearrange: {{x^2 - 5x + 6 = 0}}, so {{(x - 2)(x - 3) = 0}}.",
            "x = 2: y = 2(2) − 4 = 0. x = 3: y = 2(3) − 4 = 2.",
            "Check (3, 2) in the curve: 9 − 9 + 2 = 2 ✓.",
          ],
          answer: "x = 2, y = 0 and x = 3, y = 2",
          yourTurn: {
            question:
              "Your turn: solve {{y = x^2 + 2x - 5}} and {{y = 3x + 1}}. Give the coordinates of the solution with the **positive** x-coordinate, as (x, y).",
            answer: { type: "list", values: [3, 10], ordered: true, display: "(3, 10)" },
            solution:
              "{{x^2 + 2x - 5 = 3x + 1}} ⇒ {{x^2 - x - 6 = 0}} ⇒ {{(x - 3)(x + 2) = 0}}. x = 3 gives y = 10; x = −2 gives y = −5. The positive one is (3, 10).",
          },
        },
        {
          title: "A line and a circle",
          problem: "Solve the simultaneous equations {{x^2 + y^2 = 10}} and {{x + 2y = 5}}.",
          steps: [
            "Make x the subject of the linear equation (no fractions): {{x = 5 - 2y}}.",
            "Substitute: {{(5 - 2y)^2 + y^2 = 10}}, so {{25 - 20y + 4y^2 + y^2 = 10}}.",
            "Rearrange: {{5y^2 - 20y + 15 = 0}}. Divide by 5: {{y^2 - 4y + 3 = 0}}, so {{(y - 1)(y - 3) = 0}}.",
            "y = 1: x = 5 − 2 = 3. y = 3: x = 5 − 6 = −1.",
            "Check: {{3^2 + 1^2 = 10}} ✓ and {{(-1)^2 + 3^2 = 10}} ✓.",
          ],
          answer: "x = 3, y = 1 and x = −1, y = 3",
          yourTurn: {
            question:
              "Your turn: solve {{x^2 + y^2 = 25}} and {{x + y = 7}}. Give the solution with the **larger** x-coordinate, as (x, y).",
            answer: { type: "list", values: [4, 3], ordered: true, display: "(4, 3)" },
            solution:
              "y = 7 − x, so {{x^2 + (7 - x)^2 = 25}} ⇒ {{2x^2 - 14x + 24 = 0}} ⇒ {{x^2 - 7x + 12 = 0}} ⇒ x = 3 or 4. Partners from y = 7 − x: (3, 4) and (4, 3). Larger x: (4, 3).",
          },
        },
      ],
      keyPoints: [
        "Substitute the **linear** equation into the quadratic one.",
        "Bracket what you substitute: {{(5 - 2y)^2}}, not {{5 - 2y^2}}.",
        "Find partners using the **linear** equation, then give answers as pairs.",
        "Usually two solutions; one if the line is a tangent; none if they miss.",
        "{{x^2 + y^2 = r^2}} is a circle, centre (0, 0), radius r.",
        "Check each pair in **both** original equations.",
      ],
      whyItWorks:
        "A solution of the pair is a point (x, y) that lies on both graphs. Substituting the line into the curve asks: 'for which x is the curve's height the same as the line's?' — a single equation in one unknown. Because the line is degree 1 and the curve degree 2, the result is (at most) a quadratic, so there are at most two crossing points.\n\nThe discriminant then has a geometric meaning: two, one or no crossing points. When it is exactly 0 the two crossings have merged into one — the line just grazes the curve, which is precisely what a tangent is.",
      strategies: ["Introduce a variable", "Draw a diagram", "Check by substituting", "Split into cases"],
      thinkDeeper:
        "For which values of c is the line {{y = x + c}} a tangent to the circle {{x^2 + y^2 = 18}}? Form the quadratic, set its discriminant to 0, and then check your answer with a sketch: how far is the tangent line from the centre?",
    },

    // ------------------------------------------------------------------ 5
    {
      id: "algebraic-fraction-equations",
      heading: "Equations with algebraic fractions",
      discovery: {
        problem:
          "Solve {{6/x - 6/(x + 1) = 1}}.\n\nWhat single expression could you multiply **every** term by so that no fractions are left? Are there any values that x is **not allowed** to be?",
        idea:
          "Multiply every term by {{x(x + 1)}}:\n\n    {{6(x + 1) - 6x = x(x + 1)}}\n    {{6 = x^2 + x}}\n    {{x^2 + x - 6 = 0}}  ⇒  {{(x + 3)(x - 2) = 0}}\n\nSo x = 2 or x = −3. Check: {{6/2 - 6/3 = 3 - 2 = 1}} ✓ and {{6/(-3) - 6/(-2) = -2 + 3 = 1}} ✓.\n\nx can never be 0 or −1 (you would divide by zero) — neither answer is one of those, so both stand.",
      },
      body:
        "These are the fraction equations from *Linear & Simultaneous Equations*, except that x is now in the **denominators** — and clearing them usually produces a quadratic.\n\n**Method**\n\n1. Note the **excluded values**: anything that makes a denominator 0.\n2. Find the **lowest common denominator** (LCD). Factorise denominators first if you can — {{x^2 - 4 = (x - 2)(x + 2)}} — so you do not use a bigger LCD than you need.\n3. Multiply **every term on both sides** by the LCD and cancel. Each fraction becomes a polynomial; whole-number terms get multiplied by the full LCD.\n4. Expand, rearrange to = 0, and solve the quadratic.\n5. **Reject** any solution that is an excluded value, then check the rest in the original equation.\n\n**Why excluded values matter.** Multiplying by an expression that could be zero can create *fake* solutions. Example:\n\n    {{x^2/(x - 2) = 4/(x - 2)}}\n    Multiply by {{(x - 2)}}: {{x^2 = 4}}, so x = ±2\n\nBut x = 2 makes the original denominators 0, so it is **not** a solution. The only solution is **x = −2**.\n\n**An alternative: combine first.** You can also add the fractions over a common denominator and then cross-multiply. Same result — choose whichever you find less error-prone. Exam questions often say 'Show that the equation can be written as {{2x^2 - 3x - 5 = 0}}' — then combining step by step is the clearer way to show every line.\n\n**Context problems: speed, time, price.** Time = {{distance/speed}} and unit price = {{cost/quantity}} put the unknown in a denominator. Typical set-up:\n\n| | Speed | Distance | Time |\n|---|---|---|---|\n| Normal ride | x km/h | 30 km | {{30/x}} h |\n| Faster ride | {{(x + 5)}} km/h | 30 km | {{30/(x + 5)}} h |\n\n'One hour quicker' then gives the equation {{30/x - 30/(x + 5) = 1}}.",
      workedExamples: [
        {
          title: "Clearing two denominators",
          problem: "Solve {{3/(x + 1) + 2/(x - 2) = 1}}. Give your answers correct to 3 significant figures.",
          steps: [
            "Excluded values: x ≠ −1 and x ≠ 2. LCD = {{(x + 1)(x - 2)}}.",
            "Multiply every term by the LCD: {{3(x - 2) + 2(x + 1) = (x + 1)(x - 2)}}.",
            "Expand: {{3x - 6 + 2x + 2 = x^2 - x - 2}}, so {{5x - 4 = x^2 - x - 2}}.",
            "Rearrange: {{x^2 - 6x + 2 = 0}}. This does not factorise, so use the formula: {{x = (6 +- sqrt(36 - 8))/2 = 3 +- sqrt(7)}}.",
            "{{3 + sqrt(7)}} = 5.6457… and {{3 - sqrt(7)}} = 0.35424…; neither is excluded.",
            "To 3 s.f.: x = 5.65 or x = 0.354.",
          ],
          answer: "x = 5.65 or x = 0.354",
          yourTurn: {
            question: "Your turn: solve {{2/x + 3/(x + 2) = 1}}. Give both solutions.",
            answer: { type: "list", values: [4, -1], ordered: false, display: "x = 4 or x = −1" },
            solution:
              "Multiply by {{x(x + 2)}}: {{2(x + 2) + 3x = x(x + 2)}}, so {{5x + 4 = x^2 + 2x}} and {{x^2 - 3x - 4 = 0}}. {{(x - 4)(x + 1) = 0}}: x = 4 or x = −1 (neither is 0 or −2). Check x = −1: −2 + 3 = 1 ✓.",
          },
        },
        {
          title: "Forming the equation from a context",
          problem:
            "Priya cycles 30 km along the Park Connector at an average speed of x km/h. If she cycled 5 km/h faster, the trip would take 1 hour less. Find x.",
          steps: [
            "Time = distance ÷ speed. Normal: {{30/x}} hours. Faster: {{30/(x + 5)}} hours.",
            "The faster time is 1 hour less: {{30/x - 30/(x + 5) = 1}}.",
            "Multiply by {{x(x + 5)}}: {{30(x + 5) - 30x = x(x + 5)}}, so {{150 = x^2 + 5x}}.",
            "Rearrange: {{x^2 + 5x - 150 = 0}}, so {{(x + 15)(x - 10) = 0}}.",
            "x = −15 is impossible for a speed, so x = 10. Check: 30 ÷ 10 = 3 h and 30 ÷ 15 = 2 h — one hour less ✓.",
          ],
          answer: "x = 10 (km/h)",
          yourTurn: {
            question:
              "Your turn: Marcus pays $60 for some books, each costing the same. If each book cost $1 less, he could buy 3 more books for the same $60. How many books did he buy?",
            answer: { type: "number", value: 12 },
            solution:
              "Let n books: price {{60/n}}. With n + 3 books the price is {{60/(n + 3)}}, which is $1 less: {{60/n - 60/(n + 3) = 1}}. Multiply by {{n(n + 3)}}: {{180 = n^2 + 3n}}, so {{n^2 + 3n - 180 = 0}} and {{(n + 15)(n - 12) = 0}}. n = 12 (reject −15). Check: $5 each, then 15 books at $4 ✓.",
          },
        },
      ],
      keyPoints: [
        "Write down the excluded values (denominators ≠ 0) first.",
        "Factorise denominators to find the lowest common denominator.",
        "Multiply **every** term by the LCD — including whole numbers on either side.",
        "The result is usually a quadratic: rearrange to = 0 and solve.",
        "Reject excluded values and impossible context answers; check the rest.",
        "Speed/time/price contexts: write each quantity as a fraction in terms of x.",
      ],
      whyItWorks:
        "Multiplying both sides of an equation by the same non-zero quantity keeps exactly the same solutions. The LCD is non-zero for every *allowed* x, so for those x nothing changes. But at an excluded value the LCD **is** zero — and multiplying by 0 turns any equation into the true statement 0 = 0. That is how fake solutions sneak in, and why you must check them against the excluded values.\n\nThe quadratic appears because each denominator contributes a factor of x: clearing two of them leaves x multiplied by x somewhere.",
      strategies: ["Introduce a variable", "Make it simpler", "Check by substituting", "Use a table"],
      thinkDeeper:
        "Solve {{x/(x - 3) - 2/(x + 1) = 12/((x - 3)(x + 1))}}. What happens to one of the roots, and why? Invent an equation of your own that has **no** solutions for the same reason.",
    },

    // ------------------------------------------------------------------ 6 (H+)
    {
      id: "disguised-quadratics",
      heading: "Disguised quadratics",
      discovery: {
        problem:
          "Solve {{x^4 - 5x^2 + 4 = 0}}.\n\nIt has an {{x^4}} term, so the quadratic methods seem not to apply. But look at the powers: 4, 2 and 0. If you wrote **u** for {{x^2}}, what would {{x^4}} be? How many solutions do you expect?",
        idea:
          "Let {{u = x^2}}, so {{x^4 = u^2}}:\n\n    {{u^2 - 5u + 4 = 0}}  ⇒  {{(u - 1)(u - 4) = 0}}  ⇒  u = 1 or u = 4\n\nNow go back to x: {{x^2 = 1}} gives x = ±1 and {{x^2 = 4}} gives x = ±2. **Four** solutions: −2, −1, 1, 2 — exactly where the W-shaped graph crosses the x-axis.",
      },
      body:
        "A **disguised quadratic** has the shape {{a u^2 + b u + c = 0}}, where u stands for some expression in x. Spot it by looking for **one power that is double another**:\n\n| You see | Substitute | Becomes |\n|---|---|---|\n| {{x^4}} and {{x^2}} | {{u = x^2}} | {{u^2}} and u |\n| x and {{sqrt(x)}} | {{u = sqrt(x)}} | {{u^2}} and u |\n| {{2^(2x)}} (= {{4^x}}) and {{2^x}} | {{u = 2^x}} | {{u^2}} and u |\n| {{1/x^2}} and {{1/x}} | {{u = 1/x}} | {{u^2}} and u |\n| {{(2x - 1)^2}} and {{(2x - 1)}} | {{u = 2x - 1}} | {{u^2}} and u |\n\n**Method**\n\n1. Choose the substitution and rewrite the whole equation in u.\n2. Solve the quadratic in u (any method).\n3. **Substitute back** — the question wants x, not u.\n4. **Reject impossible values** and say why:\n    {{x^2 = -3}}: no real solution (a square is never negative)\n    {{sqrt(x) = -2}}: impossible ({{sqrt(x)}} means the positive root)\n    {{2^x = -1}} or {{2^x = 0}}: impossible ({{2^x}} is always positive)\n5. Check in the original equation.\n\n**Rewriting exponentials.** Use the index laws to expose {{2^x}}: {{2^(2x) = (2^x)^2 = u^2}}, {{2^(x+1) = 2 * 2^x = 2u}}, {{2^(2x+1) = 2 * (2^x)^2 = 2u^2}}.\n\n**Hidden by fractions.** {{x + 6/x = 5}} becomes a quadratic after multiplying by x: {{x^2 - 5x + 6 = 0}}, so x = 2 or 3.\n\n**How many solutions?** Each value of u can give 0, 1 or 2 values of x. So {{x^4 - 5x^2 + 4 = 0}} has four solutions, {{x^4 + x^2 - 12 = 0}} only two (u = 3 gives {{x = +- sqrt(3)}}; u = −4 is impossible), and {{x - 5 sqrt(x) + 6 = 0}} has two (u = 2, 3 gives x = 4, 9).",
      diagram: `<svg viewBox="0 0 380 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y equals x to the fourth minus 5 x squared plus 4, a W shape crossing the x-axis at minus 2, minus 1, 1 and 2, with a maximum at (0, 4) and two minimum points at y equals minus 2.25."><rect width="380" height="290" fill="#ffffff"/><line x1="16.400000000000006" y1="200" x2="363.6" y2="200" stroke="#334155" stroke-width="1.3"/><line x1="190" y1="10.800000000000011" x2="190" y2="274.8" stroke="#334155" stroke-width="1.3"/><line x1="66" y1="197" x2="66" y2="203" stroke="#334155"/><text x="66" y="216" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">−2</text><line x1="128" y1="197" x2="128" y2="203" stroke="#334155"/><text x="128" y="216" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">−1</text><line x1="252" y1="197" x2="252" y2="203" stroke="#334155"/><text x="252" y="216" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">1</text><line x1="314" y1="197" x2="314" y2="203" stroke="#334155"/><text x="314" y="216" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><line x1="187" y1="244" x2="193" y2="244" stroke="#334155"/><text x="184" y="248" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">−2</text><line x1="187" y1="156" x2="193" y2="156" stroke="#334155"/><text x="184" y="160" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">2</text><line x1="187" y1="112" x2="193" y2="112" stroke="#334155"/><text x="184" y="116" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">4</text><line x1="187" y1="68" x2="193" y2="68" stroke="#334155"/><text x="184" y="72" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">6</text><line x1="187" y1="24" x2="193" y2="24" stroke="#334155"/><text x="184" y="28" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">8</text><text x="367.6" y="204" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937">x</text><text x="196" y="14.8" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937">y</text><polyline points="41.2,15.7 42.7,32.5 44.3,48.5 45.8,63.8 47.4,78.2 48.9,92 50.5,105 52,117.4 53.6,129 55.1,140 56.7,150.4 58.2,160.1 59.8,169.2 61.3,177.8 62.9,185.7 64.4,193.1 66,200 67.5,206.3 69.1,212.2 70.6,217.5 72.2,222.4 73.7,226.8 75.3,230.8 76.8,234.3 78.4,237.5 79.9,240.2 81.5,242.5 83,244.5 84.6,246.2 86.1,247.4 87.7,248.4 89.2,249.1 90.8,249.4 92.3,249.5 93.9,249.3 95.4,248.8 97,248.1 98.5,247.2 100.1,246 101.6,244.7 103.2,243.1 104.7,241.3 106.3,239.4 107.8,237.3 109.4,235.1 110.9,232.7 112.5,230.2 114,227.5 115.6,224.8 117.1,221.9 118.7,219 120.2,216 121.8,212.9 123.3,209.7 124.9,206.5 126.4,203.3 128,200 129.5,196.7 131.1,193.4 132.6,190 134.2,186.7 135.7,183.3 137.3,180 138.8,176.7 140.4,173.4 141.9,170.1 143.5,166.9 145,163.7 146.6,160.6 148.1,157.6 149.7,154.5 151.2,151.6 152.8,148.7 154.3,146 155.9,143.3 157.4,140.6 159,138.1 160.5,135.7 162.1,133.4 163.6,131.2 165.2,129 166.7,127 168.3,125.1 169.8,123.4 171.4,121.7 172.9,120.2 174.5,118.8 176,117.5 177.6,116.4 179.1,115.3 180.7,114.5 182.2,113.7 183.8,113.1 185.3,112.6 186.9,112.3 188.4,112.1 190,112 191.5,112.1 193.1,112.3 194.6,112.6 196.2,113.1 197.7,113.7 199.3,114.5 200.8,115.3 202.4,116.4 203.9,117.5 205.5,118.8 207,120.2 208.6,121.7 210.1,123.4 211.7,125.1 213.2,127 214.8,129 216.3,131.2 217.9,133.4 219.4,135.7 221,138.1 222.5,140.6 224.1,143.3 225.6,146 227.2,148.7 228.7,151.6 230.3,154.5 231.8,157.6 233.4,160.6 234.9,163.7 236.5,166.9 238,170.1 239.6,173.4 241.1,176.7 242.7,180 244.2,183.3 245.8,186.7 247.3,190 248.9,193.4 250.4,196.7 252,200 253.5,203.3 255.1,206.5 256.6,209.7 258.2,212.9 259.7,216 261.3,219 262.8,221.9 264.4,224.8 265.9,227.5 267.5,230.2 269,232.7 270.6,235.1 272.1,237.3 273.7,239.4 275.2,241.3 276.8,243.1 278.3,244.7 279.9,246 281.4,247.2 283,248.1 284.5,248.8 286.1,249.3 287.6,249.5 289.2,249.4 290.7,249.1 292.3,248.4 293.8,247.4 295.4,246.2 296.9,244.5 298.5,242.5 300,240.2 301.6,237.5 303.1,234.3 304.7,230.8 306.2,226.8 307.8,222.4 309.3,217.5 310.9,212.2 312.4,206.3 314,200 315.5,193.1 317.1,185.7 318.6,177.8 320.2,169.2 321.7,160.1 323.3,150.4 324.8,140 326.4,129 327.9,117.4 329.5,105 331,92 332.6,78.2 334.1,63.8 335.7,48.5 337.2,32.5 338.8,15.7" fill="none" stroke="#4f46e5" stroke-width="2.2"/><circle cx="66" cy="200" r="4" fill="#1f2937"/><circle cx="128" cy="200" r="4" fill="#1f2937"/><circle cx="252" cy="200" r="4" fill="#1f2937"/><circle cx="314" cy="200" r="4" fill="#1f2937"/><text x="261.3" y="28" font-size="12" font-family="sans-serif" fill="#4338ca">y = x⁴ − 5x² + 4</text><text x="190" y="282" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">u = x²:  u² − 5u + 4 = 0, so u = 1 or 4, so x = ±1, ±2</text></svg>`,
      diagramCaption:
        "{{y = x^4 - 5x^2 + 4}} crosses the x-axis four times — one pair of roots for u = 1 and another for u = 4.",
      workedExamples: [
        {
          title: "A quartic with an impossible value",
          problem: "Solve {{x^4 - 7x^2 - 18 = 0}}. Give exact answers.",
          steps: [
            "Let {{u = x^2}}: {{u^2 - 7u - 18 = 0}}.",
            "Factorise: {{(u - 9)(u + 2) = 0}}, so u = 9 or u = −2.",
            "{{x^2 = 9}} gives x = 3 or x = −3.",
            "{{x^2 = -2}} has no real solutions, because a square cannot be negative — reject it.",
            "Check x = 3: 81 − 63 − 18 = 0 ✓.",
          ],
          answer: "x = 3 or x = −3",
          yourTurn: {
            question: "Your turn: solve {{x - 7 sqrt(x) + 10 = 0}}. Give both solutions.",
            answer: { type: "list", values: [4, 25], ordered: false, display: "x = 4 or x = 25" },
            solution:
              "Let {{u = sqrt(x)}}, so x = {{u^2}}: {{u^2 - 7u + 10 = 0}}, so (u − 2)(u − 5) = 0 and u = 2 or 5. Then x = {{2^2 = 4}} or {{5^2 = 25}}. Check x = 25: 25 − 35 + 10 = 0 ✓.",
          },
        },
        {
          title: "An exponential equation",
          problem: "Solve {{2^(2x+1) - 9 * 2^x + 4 = 0}}.",
          steps: [
            "Let {{u = 2^x}}. Then {{2^(2x+1) = 2 * 2^(2x) = 2u^2}}.",
            "The equation becomes {{2u^2 - 9u + 4 = 0}}. ac = 8; use −8 and −1: {{(2u - 1)(u - 4) = 0}}.",
            "{{u = 1/2}} or u = 4. Both are positive, so both are possible.",
            "{{2^x = 1/2 = 2^(-1)}} gives x = −1; {{2^x = 4 = 2^2}} gives x = 2.",
            "Check x = 2: {{2^5 - 9 * 4 + 4 = 32 - 36 + 4 = 0}} ✓.",
          ],
          answer: "x = −1 or x = 2",
          yourTurn: {
            question: "Your turn: solve {{3^(2x) - 12 * 3^x + 27 = 0}}. Give both solutions.",
            answer: { type: "list", values: [1, 2], ordered: false, display: "x = 1 or x = 2" },
            solution:
              "Let {{u = 3^x}}: {{u^2 - 12u + 27 = 0}}, so (u − 3)(u − 9) = 0. {{3^x = 3}} gives x = 1; {{3^x = 9}} gives x = 2. Check x = 2: 81 − 108 + 27 = 0 ✓.",
          },
        },
      ],
      keyPoints: [
        "Look for one power that is the square of another: {{x^4}} & {{x^2}}, x & {{sqrt(x)}}, {{2^(2x)}} & {{2^x}}.",
        "Substitute, solve for u, then **go back to x**.",
        "Reject impossible values: {{x^2 < 0}}, {{sqrt(x) < 0}}, {{2^x <= 0}} — and say why.",
        "Each u can give two, one or no values of x — count your solutions.",
        "Use index laws: {{2^(2x+1) = 2(2^x)^2}}, {{2^(x+2) = 4 * 2^x}}.",
        "Always check in the original equation.",
      ],
      whyItWorks:
        "The methods for quadratics never needed the unknown to be x — they work for any quantity that appears squared and to the first power. Substitution simply gives that quantity a name, u, so you can see the familiar shape. Solving for u tells you what the 'inner' quantity must equal; then you undo the inner operation (square root, squaring, or 'which power of 2?') to get x.\n\nThe rejections come from the inner operation's range: {{x^2}}, {{sqrt(x)}} and {{2^x}} can never be negative, so a negative u is a value they can never take.",
      strategies: ["Introduce a variable", "Find a pattern", "Check by substituting", "Split into cases"],
      thinkDeeper:
        "Find all real solutions of {{(x^2 + 2x)^2 - (x^2 + 2x) - 6 = 0}}. (Hint: what should u be?) How many real solutions are there, and why is it not four? Can {{x^2 + 2x}} take every value?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Why must a quadratic be '= 0' before you factorise?", back: "The zero-product rule: if {{A * B = 0}} then A = 0 or B = 0. It only works with 0." },
      { front: "Solve {{x^2 = 5x}}", back: "{{x^2 - 5x = 0}}, {{x(x - 5) = 0}}, so x = 0 or x = 5. Never divide by x." },
      { front: "Solve {{(x - 3)^2 = 16}}", back: "x − 3 = ±4, so x = 7 or x = −1." },
      { front: "Factorising {{ax^2 + bx + c}} with a ≠ 1", back: "Find two numbers with product ac and sum b; split bx; factorise in pairs." },
      { front: "Solve {{(3x + 2)(x - 4) = 0}}", back: "{{x = -2/3}} or x = 4." },
      { front: "Complete the square: {{x^2 + bx}}", back: "{{(x + b/2)^2 - (b/2)^2}}" },
      { front: "Solve {{(x + p)^2 = q}}", back: "{{x = -p +- sqrt(q)}} (no real roots if q < 0)." },
      { front: "The quadratic formula", back: "{{x = (-b +- sqrt(b^2 - 4ac))/(2a)}} for {{ax^2 + bx + c = 0}}." },
      { front: "Where does the quadratic formula come from?", back: "Completing the square on {{ax^2 + bx + c = 0}} in general." },
      { front: "Discriminant > 0, = 0, < 0", back: "Two distinct real roots; one repeated root; no real roots." },
      { front: "{{b^2 - 4ac}} is a perfect square. So what?", back: "The roots are rational — the quadratic factorises." },
      { front: "'Give your answers to 3 s.f.' signals…", back: "Use the formula — it won't factorise." },
      { front: "Linear–quadratic pair: the method", back: "Substitute the linear into the quadratic, solve, find partners from the **linear** equation, give pairs." },
      { front: "What is {{x^2 + y^2 = r^2}}?", back: "A circle, centre (0, 0), radius r." },
      { front: "Line meets curve: discriminant = 0 means…", back: "The line is a tangent (one point of contact)." },
      { front: "First step for {{3/(x + 1) + 2/(x - 2) = 1}}", back: "Note x ≠ −1, 2; multiply every term by {{(x + 1)(x - 2)}}." },
      { front: "H+: substitution for {{x - 5 sqrt(x) + 6 = 0}}", back: "{{u = sqrt(x)}}: {{u^2 - 5u + 6 = 0}}, u = 2, 3, so x = 4, 9." },
      { front: "H+: {{2^x = -1}} from a disguised quadratic?", back: "Reject — {{2^x}} is always positive." },
    ],
    mustKnow: [
      "Can I solve a quadratic with no factorising required, such as {{2x^2 = 50}} or {{(x - 3)^2 = 16}}, remembering ±?",
      "Can I solve a quadratic equation by factorising, after rearranging it to = 0 (and without dividing by x)?",
      "Can I solve quadratics where a ≠ 1 by factorising, e.g. {{3x^2 - 10x - 8 = 0}}?",
      "Can I form a quadratic equation from a context (area, speed, price), solve it and reject impossible roots?",
      "Can I solve a quadratic by completing the square, giving exact answers in surd form?",
      "Can I solve a quadratic using the formula, giving answers to 3 significant figures, and explain how the formula comes from completing the square?",
      "Can I use the discriminant {{b^2 - 4ac}} to decide how many real roots a quadratic has, and find unknowns for equal roots?",
      "Can I choose the most efficient method for a given quadratic?",
      "Can I solve a pair of simultaneous equations where one is linear and one is quadratic (including a circle {{x^2 + y^2 = r^2}}), pairing the solutions correctly?",
      "Can I explain the solutions of a linear–quadratic pair as the intersection points of a line and a curve?",
      "Can I solve equations involving algebraic fractions that lead to a quadratic, checking for excluded values?",
      "(H+) Can I solve harder 'disguised' quadratics in {{x^2}}, {{sqrt(x)}} or {{2^x}} by substitution, rejecting impossible values?",
    ],
    misconceptions: [
      { wrong: "{{x^2 = 5x}}, so divide by x: x = 5.", right: "Rearrange and factorise: {{x(x - 5) = 0}}, so x = 0 or x = 5. Dividing by x loses x = 0." },
      { wrong: "{{x^2 = 49}} means x = 7.", right: "x = ±7: {{(-7)^2 = 49}} as well." },
      { wrong: "{{(x - 2)(x - 3) = 6}}, so x − 2 = 6 or x − 3 = 6.", right: "The zero-product rule needs 0. Expand: {{x^2 - 5x + 6 = 6}}, so {{x^2 - 5x = 0}}, x = 0 or 5." },
      { wrong: "{{(2x + 5)(x - 1) = 0}} gives x = −5 or x = 1.", right: "Solve {{2x + 5 = 0}} properly: {{x = -5/2}}." },
      { wrong: "In the formula, {{x = -b +- sqrt(b^2 - 4ac)/(2a)}} — only the root is divided by 2a.", right: "The **whole** numerator {{-b +- sqrt(b^2 - 4ac)}} is divided by 2a." },
      { wrong: "For b = −3, {{b^2 = -9}} on the calculator.", right: "{{(-3)^2 = 9}}. Type brackets: (−3)², or the calculator squares 3 and then negates." },
      { wrong: "Completing the square: {{x^2 + 6x + 2 = (x + 6)^2 + 2}}.", right: "Halve the coefficient: {{(x + 3)^2 - 9 + 2 = (x + 3)^2 - 7}}." },
      { wrong: "Simultaneous equations: find y by substituting x into {{x^2 + y^2 = 25}}.", right: "That gives y = ±4 for x = 3 — one of them is fake. Use the **linear** equation to find each partner." },
    ],
    examMistakes: [
      "Factorising a quadratic that is not equal to zero, e.g. solving {{x(x + 3) = 10}} by writing x = 10 or x + 3 = 10.",
      "Losing marks on 'give your answers correct to 3 significant figures' by rounding the discriminant or the square root too early, or giving only one of the two roots.",
      "Sign errors substituting into the formula: writing {{-b}} as −7 when b = −7, or typing {{-7^2}} instead of {{(-7)^2}} on the calculator.",
      "In linear–quadratic questions, expanding {{(5 - 2y)^2}} as {{25 - 4y^2}} (or {{25 + 4y^2}}), and then not pairing the x- and y-values in the final answer.",
      "In algebraic fraction equations, multiplying only the fractions by the common denominator and leaving the '= 1' unchanged, or not checking whether a root makes a denominator zero.",
      "Forming the quadratic in a context question correctly but not rejecting the negative root, or giving x when the question asked for a length, speed or number of items.",
    ],
    mnemonics: [
      {
        topic: "The quadratic formula",
        device: "Sing it to 'Pop Goes the Weasel': 'x equals minus b, plus or minus the square root, of b squared minus four a c, all over two a.'",
        explanation: "The tune keeps the order fixed and the words 'all over' remind you that the whole numerator is divided by 2a.",
      },
      {
        topic: "Completing the square",
        device: "Halve it, square it, take it away",
        explanation: "Halve the x-coefficient for the bracket, square that number, and subtract it to balance: {{x^2 + 6x = (x + 3)^2 - 9}}.",
      },
      {
        topic: "The discriminant",
        device: "Plus: pair. Zero: one. Minus: none.",
        explanation: "{{b^2 - 4ac}} positive gives a pair of roots, zero gives one repeated root, negative gives no real roots.",
      },
    ],
    realWorld: [
      {
        title: "Projectiles and fountains",
        detail:
          "The height of a thrown netball or a jet in the Marina Bay fountain show follows {{h = ut - 4.9t^2}}. Solving h = 0 with the formula tells you when it lands; the negative root (before it was thrown) is rejected — just like in exam contexts.",
        emoji: "⛲",
      },
      {
        title: "Ray tracing in games and films",
        detail:
          "To draw a shiny sphere, a graphics engine fires a straight 'ray' from the camera and solves a linear–quadratic system for where it hits the sphere. The discriminant decides hit (two points), graze (tangent) or miss — billions of times per second on a games console.",
        emoji: "🎮",
      },
      {
        title: "The golden ratio",
        detail:
          "A rectangle is 'golden' if removing a square leaves a smaller rectangle of the same shape. That condition gives {{x^2 = x + 1}}, whose positive root is {{(1 + sqrt(5))/2}} ≈ 1.618 — used in architecture, design and photography layouts.",
        emoji: "🌀",
      },
      {
        title: "Stopping distances",
        detail:
          "Road engineers model a car's stopping distance as thinking distance plus braking distance, {{d = av + bv^2}}. Setting a speed limit for a junction where drivers can see only d metres ahead means solving a quadratic for v and keeping the positive root.",
        emoji: "🚗",
      },
    ],
    videos: [
      { title: "Solving quadratics by factorising", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+solving+quadratics+by+factorising" },
      { title: "Completing the square and the quadratic formula", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+solving+quadratics+completing+the+square+quadratic+formula" },
      { title: "Linear and quadratic simultaneous equations (incl. circles)", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+quadratic+simultaneous+equations" },
      { title: "Hidden (disguised) quadratic equations", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+hidden+quadratic+equations+substitution" },
    ],
    formulas: [
      { name: "Quadratic formula", formula: "{{x = (-b +- sqrt(b^2 - 4ac))/(2a)}} for {{ax^2 + bx + c = 0}}", note: "On the formula sheet" },
      { name: "Discriminant", formula: "{{b^2 - 4ac}}: > 0 two real roots, = 0 one repeated root, < 0 no real roots", note: "Learn this — not given" },
      { name: "Completing the square", formula: "{{x^2 + bx + c = (x + b/2)^2 - (b/2)^2 + c}}", note: "Learn this — not given" },
      { name: "Zero-product rule", formula: "If {{A * B = 0}} then A = 0 or B = 0", note: "Learn this — not given" },
      { name: "Difference of two squares", formula: "{{x^2 - a^2 = (x - a)(x + a)}}, so {{x^2 = a^2}} gives x = ±a", note: "Learn this — not given" },
      { name: "Circle centre the origin", formula: "{{x^2 + y^2 = r^2}} (radius r)", note: "Learn this — not given" },
      { name: "Sum and product of roots", formula: "Roots of {{ax^2 + bx + c = 0}}: sum {{-b/a}}, product {{c/a}}", note: "Learn this — not given (useful for checking)" },
    ],
  },
};
