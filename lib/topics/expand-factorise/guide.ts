import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "expand-factorise",
  title: "Expanding, Factorising & Substitution",
  strand: "Algebra",
  icon: "🧮",
  summary: "The two directions of algebra — multiply out and factorise back — plus substitution and f(x) done without slips.",
  intro:
    "Almost every Higher question on quadratics, algebraic fractions, proof and graphs starts with one of the moves in this chapter: expand, factorise, complete the square or substitute. On 4MA1 papers they are rarely worth many marks on their own, but a single sign slip here costs you the whole of a 5-mark question later. Learn to do them fast, accurately, and with a check built in — and you free up your thinking for the hard part of every question.",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "expanding-brackets",
      heading: "Expanding two and three brackets",
      discovery: {
        problem:
          "Marcus says {{(x + 3)^2 = x^2 + 9}}. Test his claim with x = 1, then with x = 10. Then work out 23 × 24 by thinking of it as {{(20 + 3)(20 + 4)}} and splitting both numbers into tens and units. How many separate products do you need?",
        idea:
          "With x = 1: {{(1 + 3)^2 = 16}}, but {{1^2 + 9 = 10}}. Marcus has lost something. For 23 × 24 you need **four** products: 20 × 20 + 20 × 4 + 3 × 20 + 3 × 4 = 400 + 80 + 60 + 12 = 552. Every term in the first bracket meets every term in the second. So {{(x + 3)^2 = (x + 3)(x + 3) = x^2 + 3x + 3x + 9 = x^2 + 6x + 9}}. The missing 6x is the two middle rectangles.",
      },
      body:
        "**Expanding** means multiplying out brackets to write an expression as a sum of terms. The rule underneath it all is the distributive law: {{a(b + c) = ab + ac}}.\n\n**Single brackets.** Multiply everything inside by the term outside — and the sign goes with the term.\n\n    {{-3x(2x - 5) = -6x^2 + 15x}}\n\n**Two brackets.** Every term in the first bracket multiplies every term in the second. With two terms each, that is 2 × 2 = 4 products, then you collect like terms. A grid keeps you honest:\n\n| × | 3x | −5 |\n|---|---|---|\n| 2x | {{6x^2}} | −10x |\n| +1 | 3x | −5 |\n\nso {{(2x + 1)(3x - 5) = 6x^2 - 10x + 3x - 5 = 6x^2 - 7x - 5}}.\n\n**Squared brackets.** {{(a + b)^2}} means {{(a + b)(a + b)}} — write it out twice. The result always has a middle term:\n\n    {{(a + b)^2 = a^2 + 2ab + b^2}}\n    {{(a - b)^2 = a^2 - 2ab + b^2}}\n\nSo {{(2x - 3)^2 = 4x^2 - 12x + 9}}: square the first, double the product, square the last. Notice the last term is +9, never −9 — a negative times a negative.\n\n**Three brackets.** Multiply any two together first and simplify, then multiply that answer by the third bracket. A quadratic (3 terms) times a bracket (2 terms) gives 6 products before collecting.\n\n    {{(x + 1)(x - 2) = x^2 - x - 2}}\n    {{(x^2 - x - 2)(2x + 3) = 2x^3 + 3x^2 - 2x^2 - 3x - 4x - 6}}\n    {{= 2x^3 + x^2 - 7x - 6}}\n\n**Built-in checks** (use them every time):\n\n- **Highest term:** multiply the first terms of every bracket — here {{x * x * 2x = 2x^3}}.\n- **Constant term:** multiply the constants — here 1 × (−2) × 3 = −6.\n- **Substitute x = 1:** the original gives 2 × (−1) × 5 = −10, and {{2 + 1 - 7 - 6 = -10}}. If they disagree, you have slipped.\n\nWhen a question says **expand and simplify**, it wants like terms collected, in descending powers of x.",
      diagram: `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Area model for (2x + 3)(x + 4): a rectangle split into four parts 2x squared, 3x, 8x and 12"><rect x="0" y="0" width="440" height="260" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><rect x="80" y="40" width="180" height="100" fill="#c7d2fe"/><rect x="260" y="40" width="70" height="100" fill="#fde68a"/><rect x="80" y="140" width="180" height="60" fill="#fde68a"/><rect x="260" y="140" width="70" height="60" fill="#bbf7d0"/></g><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="170" y="30" font-size="14">2x</text><text x="295" y="30" font-size="14">+3</text><text x="62" y="95" font-size="14">x</text><text x="62" y="175" font-size="14">+4</text><text x="170" y="96" font-size="16">2x²</text><text x="295" y="96" font-size="16">3x</text><text x="170" y="176" font-size="16">8x</text><text x="295" y="176" font-size="16">12</text><text x="220" y="232" font-size="14">(2x + 3)(x + 4) = 2x² + 3x + 8x + 12 = 2x² + 11x + 12</text></g></svg>`,
      diagramCaption: "Each term of one bracket meets each term of the other: four rectangles, then the two x-terms combine.",
      workedExamples: [
        {
          title: "Squares and a subtraction",
          problem: "Expand and simplify {{(2x - 3)^2 - (x + 4)(x - 5)}}.",
          steps: [
            "Write the square as two brackets: {{(2x - 3)(2x - 3) = 4x^2 - 6x - 6x + 9 = 4x^2 - 12x + 9}}.",
            "Expand the second product: {{(x + 4)(x - 5) = x^2 - 5x + 4x - 20 = x^2 - x - 20}}.",
            "Keep that answer in a bracket while you subtract: {{4x^2 - 12x + 9 - (x^2 - x - 20)}}.",
            "The minus changes every sign: {{4x^2 - 12x + 9 - x^2 + x + 20}}.",
            "Collect like terms: {{3x^2 - 11x + 29}}.",
            "Check with x = 1: original {{(-1)^2 - (5)(-4) = 1 + 20 = 21}}; answer {{3 - 11 + 29 = 21}}. ✓",
          ],
          answer: "{{3x^2 - 11x + 29}}",
          yourTurn: {
            question: "Your turn: expand and simplify {{(3x + 2)(2x - 5)}}.",
            answer: { type: "expression", expr: "6x^2-11x-10", form: "expanded" },
            solution: "Four products: {{6x^2 - 15x + 4x - 10 = 6x^2 - 11x - 10}}. Check x = 1: 5 × (−3) = −15 and 6 − 11 − 10 = −15. ✓",
          },
        },
        {
          title: "Three brackets (exam style)",
          problem: "Show that {{(x + 2)(x - 3)(2x + 1)}} can be written in the form {{ax^3 + bx^2 + cx + d}}, where a, b, c and d are integers.",
          steps: [
            "Multiply the first two brackets: {{(x + 2)(x - 3) = x^2 - 3x + 2x - 6 = x^2 - x - 6}}.",
            "Multiply each of the three terms by 2x and then by +1:",
            "    {{2x(x^2 - x - 6) = 2x^3 - 2x^2 - 12x}}",
            "    {{1(x^2 - x - 6) = x^2 - x - 6}}",
            "Add and collect: {{2x^3 - x^2 - 13x - 6}}.",
            "Checks: highest term {{x * x * 2x = 2x^3}} ✓; constant 2 × (−3) × 1 = −6 ✓; x = 1: 3 × (−2) × 3 = −18 and 2 − 1 − 13 − 6 = −18 ✓.",
          ],
          answer: "{{2x^3 - x^2 - 13x - 6}}, so a = 2, b = −1, c = −13, d = −6",
          yourTurn: {
            question: "Your turn: expand and simplify {{(x + 2)(x - 3)(x + 1)}}.",
            answer: { type: "expression", expr: "x^3-7x-6", form: "expanded" },
            solution: "{{(x + 2)(x - 3) = x^2 - x - 6}}. Then {{(x^2 - x - 6)(x + 1) = x^3 + x^2 - x^2 - x - 6x - 6 = x^3 - 7x - 6}}. The {{x^2}} terms cancel. Check x = 1: 3 × (−2) × 2 = −12 and 1 − 7 − 6 = −12. ✓",
          },
        },
      ],
      keyPoints: [
        "Every term in one bracket multiplies every term in the other: 2 × 2 = 4 products, then collect.",
        "{{(a + b)^2 = a^2 + 2ab + b^2}} — never just {{a^2 + b^2}}.",
        "For three brackets: multiply two, simplify, then multiply by the third.",
        "Put a subtracted product in a bracket before you remove it: the minus changes every sign.",
        "Check: leading term, constant term, and substitute x = 1.",
      ],
      whyItWorks:
        "Brackets are lengths and expanding is finding an area. A rectangle that is {{(2x + 3)}} wide and {{(x + 4)}} tall can be cut into four smaller rectangles — one for each pair of terms — and the total area doesn't change when you cut it. Three brackets are the volume of a box, cut into 8 smaller boxes. The x = 1 check works because an identity is true for *every* value of x, so it must be true for x = 1 in particular.",
      strategies: ["Draw a diagram", "Check by substituting", "Make it simpler"],
      thinkDeeper:
        "Without expanding fully, find the coefficient of {{x^2}} in {{(x + 1)(x + 2)(x + 3)}}. Which products of one term from each bracket give an {{x^2}}? Now predict the coefficient of {{x^2}} in {{(x + 1)(x + 2)(x + 3)(x + 4)}} — and check by a cleverer route.",
    },
    // ------------------------------------------------------------------
    {
      id: "factorising-quadratics",
      heading: "Factorising quadratics",
      discovery: {
        problem:
          "Expand {{(x + 3)(x + 4)}}, {{(x - 3)(x + 4)}} and {{(x - 3)(x - 4)}}. Look at the number in front of x and the constant in each answer. How are they made from 3 and 4? Now run it backwards: which two brackets multiply to give {{x^2 + 9x + 20}}?",
        idea:
          "{{(x + 3)(x + 4) = x^2 + 7x + 12}}, {{(x - 3)(x + 4) = x^2 + x - 12}}, {{(x - 3)(x - 4) = x^2 - 7x + 12}}. The two numbers in the brackets **add** to the x-coefficient and **multiply** to the constant. For {{x^2 + 9x + 20}} you want a pair with product 20 and sum 9: 4 and 5. So {{x^2 + 9x + 20 = (x + 4)(x + 5)}}. Factorising is expanding in reverse.",
      },
      body:
        "**Factorising** means writing an expression as a product. Always check in this order:\n\n1. **Common factor first.** Take out the HCF of every term. {{6x^2 - 15x = 3x(2x - 5)}}. *Factorise fully* means nothing else can come out.\n2. **Two terms, both squares, minus sign?** Difference of two squares: {{a^2 - b^2 = (a - b)(a + b)}}. So {{9x^2 - 25 = (3x - 5)(3x + 5)}}.\n3. **Three terms, {{x^2 + bx + c}}?** Find two numbers that multiply to c and add to b.\n4. **Three terms, {{ax^2 + bx + c}} with a ≠ 1?** Split the middle term (below).\n\n**Signs for {{x^2 + bx + c}}** — read them before you search:\n\n| c is… | b is… | the two numbers are… | example |\n|---|---|---|---|\n| + | + | both positive | {{x^2 + 7x + 10 = (x + 2)(x + 5)}} |\n| + | − | both negative | {{x^2 - 7x + 10 = (x - 2)(x - 5)}} |\n| − | either | opposite signs; the bigger one takes b's sign | {{x^2 - 3x - 10 = (x - 5)(x + 2)}} |\n\n**When a ≠ 1: splitting the middle term.** For {{6x^2 + x - 12}}:\n\n- Multiply a × c: 6 × (−12) = −72.\n- Find two numbers with product −72 and sum b = 1: **9 and −8**.\n- Split the middle term: {{6x^2 + 9x - 8x - 12}}.\n- Factorise in pairs: {{3x(2x + 3) - 4(2x + 3)}}.\n- The bracket is now a common factor: {{(2x + 3)(3x - 4)}}.\n\nIf the two brackets after grouping don't match, you have a sign slip — fix it before carrying on. A matching bracket is the method's own check.\n\n**Not every quadratic factorises** with whole numbers. {{x^2 + x + 1}} has no integer pair with product 1 and sum 1. That's a signal: in an equation you'd use the formula or complete the square instead.",
      diagram: `<svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Algebra tiles: one x-squared tile, five x tiles and six unit tiles arranged into a rectangle measuring x plus 3 by x plus 2"><rect x="0" y="0" width="420" height="270" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><rect x="70" y="40" width="120" height="120" fill="#c7d2fe"/><rect x="190" y="40" width="30" height="120" fill="#fde68a"/><rect x="220" y="40" width="30" height="120" fill="#fde68a"/><rect x="250" y="40" width="30" height="120" fill="#fde68a"/><rect x="70" y="160" width="120" height="30" fill="#fde68a"/><rect x="70" y="190" width="120" height="30" fill="#fde68a"/><rect x="190" y="160" width="30" height="30" fill="#bbf7d0"/><rect x="220" y="160" width="30" height="30" fill="#bbf7d0"/><rect x="250" y="160" width="30" height="30" fill="#bbf7d0"/><rect x="190" y="190" width="30" height="30" fill="#bbf7d0"/><rect x="220" y="190" width="30" height="30" fill="#bbf7d0"/><rect x="250" y="190" width="30" height="30" fill="#bbf7d0"/></g><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="130" y="30" font-size="14">x</text><text x="235" y="30" font-size="14">+3</text><text x="52" y="105" font-size="14">x</text><text x="52" y="195" font-size="14">+2</text><text x="130" y="106" font-size="16">x²</text><text x="235" y="106" font-size="13">3 lots of x</text><text x="130" y="186" font-size="13">2 lots of x</text><text x="235" y="244" font-size="13">6 ones</text><text x="345" y="100" font-size="14">x² + 5x + 6</text><text x="345" y="124" font-size="14">= (x + 2)(x + 3)</text></g><line x1="235" y1="232" x2="235" y2="222" stroke="#334155"/></svg>`,
      diagramCaption: "Factorising is rearranging the pieces of {{x^2 + 5x + 6}} into a rectangle. Its sides are the factors.",
      workedExamples: [
        {
          title: "Common factor, then a quadratic",
          problem: "Factorise fully {{3x^2 - 12x - 36}}.",
          steps: [
            "Every term is divisible by 3: {{3(x^2 - 4x - 12)}}.",
            "Inside: product −12, sum −4. The constant is negative, so the signs differ; the bigger number is negative.",
            "Pairs for 12: 1 & 12, 2 & 6, 3 & 4. The pair −6 and +2 adds to −4. ✓",
            "So {{x^2 - 4x - 12 = (x - 6)(x + 2)}}.",
            "Don't drop the 3: {{3(x - 6)(x + 2)}}.",
            "Check by expanding: {{(x - 6)(x + 2) = x^2 - 4x - 12}}, then times 3 gives {{3x^2 - 12x - 36}}. ✓",
          ],
          answer: "{{3(x - 6)(x + 2)}}",
          yourTurn: {
            question: "Your turn: factorise {{x^2 - 3x - 28}}.",
            answer: { type: "expression", expr: "(x-7)(x+4)", form: "factorised" },
            solution: "Product −28, sum −3: −7 and +4. So {{(x - 7)(x + 4)}}. Check: {{x^2 + 4x - 7x - 28 = x^2 - 3x - 28}}. ✓",
          },
        },
        {
          title: "a ≠ 1 by splitting the middle term",
          problem: "Factorise {{6x^2 + x - 12}}.",
          steps: [
            "a × c = 6 × (−12) = −72. You want a product of −72 and a sum of +1.",
            "Pairs of 72: 8 & 9 differ by 1, so use +9 and −8.",
            "Split the middle term: {{6x^2 + 9x - 8x - 12}}.",
            "Factorise the first pair and the second pair: {{3x(2x + 3) - 4(2x + 3)}}. Both brackets match. ✓",
            "Take out the common bracket: {{(2x + 3)(3x - 4)}}.",
            "Check: {{6x^2 - 8x + 9x - 12 = 6x^2 + x - 12}}. ✓",
          ],
          answer: "{{(2x + 3)(3x - 4)}}",
          yourTurn: {
            question: "Your turn: factorise {{3x^2 - 10x - 8}}.",
            answer: { type: "expression", expr: "(3x+2)(x-4)", form: "factorised" },
            solution: "a × c = −24; product −24 and sum −10 gives −12 and +2. {{3x^2 - 12x + 2x - 8 = 3x(x - 4) + 2(x - 4) = (3x + 2)(x - 4)}}.",
          },
        },
      ],
      keyPoints: [
        "Always look for a common factor first — then check the bracket for more.",
        "{{x^2 + bx + c}}: two numbers that multiply to c and add to b.",
        "{{a^2 - b^2 = (a - b)(a + b)}}; there is no such rule for {{a^2 + b^2}}.",
        "a ≠ 1: find two numbers with product ac and sum b, split the middle term, group in pairs.",
        "Check every factorisation by expanding it back.",
      ],
      whyItWorks:
        "Expand {{(x + p)(x + q)}} and you get {{x^2 + (p + q)x + pq}}: the x-coefficient is the sum and the constant is the product, so factorising is just finding p and q. For a ≠ 1 the product ac works because {{(mx + p)(nx + q) = mnx^2 + (mq + np)x + pq}}. The two parts of the middle term, mq and np, multiply to {{mnpq}} — which is exactly a × c. So the right split always exists when the quadratic factorises.",
      strategies: ["Use the inverse", "Check by expanding", "Eliminate options", "Try small cases"],
      thinkDeeper:
        "For which whole numbers k does {{x^2 + kx + 24}} factorise into two brackets with integers? List every k. Why are there exactly as many positive values as negative values?",
    },
    // ------------------------------------------------------------------
    {
      id: "completing-the-square",
      heading: "Completing the square",
      discovery: {
        problem:
          "Draw a square of side x. Attach two strips, each x long and 3 wide, to two neighbouring sides. The total area is {{x^2 + 6x}}. What piece is missing to make a complete bigger square, and what is the side of that bigger square? Use your answer to rewrite {{x^2 + 6x + 5}}. What is the smallest value it can ever take?",
        idea:
          "The missing corner is a 3 × 3 square, area 9. The big square has side {{x + 3}}, so {{x^2 + 6x + 9 = (x + 3)^2}}, which means {{x^2 + 6x = (x + 3)^2 - 9}}. Then {{x^2 + 6x + 5 = (x + 3)^2 - 4}}. A square is never negative, so the smallest value is −4, when {{x + 3 = 0}}, i.e. x = −3.",
      },
      body:
        "**Completing the square** rewrites a quadratic as *(a square) + (a number)*:\n\n    {{x^2 + bx + c = (x + b/2)^2 - (b/2)^2 + c}}\n\n**Method for {{x^2 + bx + c}}:**\n\n1. Halve the coefficient of x: that goes in the bracket.\n2. Subtract the square of that half (the bracket squared adds it on, so take it back off).\n3. Add the constant and simplify.\n\n    {{x^2 - 8x + 3 = (x - 4)^2 - 16 + 3 = (x - 4)^2 - 13}}\n\n**Odd b gives fractions — keep them exact:**\n\n    {{x^2 + 5x + 1 = (x + 5/2)^2 - 25/4 + 1 = (x + 5/2)^2 - 21/4}}\n\n**When a ≠ 1, factor out a from the x-terms first:**\n\n    {{2x^2 - 12x + 7 = 2(x^2 - 6x) + 7}}\n    {{= 2[(x - 3)^2 - 9] + 7}}\n    {{= 2(x - 3)^2 - 18 + 7 = 2(x - 3)^2 - 11}}\n\nThe −9 is inside the bracket, so it gets multiplied by 2 — the most common slip in this topic.\n\n**What the form tells you.** In {{a(x + p)^2 + q}} with a > 0:\n\n- {{(x + p)^2 >= 0}}, so the **minimum value** is q, when x = −p.\n- The graph {{y = a(x + p)^2 + q}} has its **turning point** at (−p, q) and is symmetric about x = −p.\n- If q > 0 the quadratic is always positive, so {{y = 0}} has no real solutions.\n\nWith a < 0 (e.g. {{9 - (x - 2)^2}}) the square is *subtracted*, so you get a **maximum** instead: here 9, at x = 2.\n\n| Form | Turning point | Min or max |\n|---|---|---|\n| {{(x - 4)^2 - 13}} | (4, −13) | minimum −13 |\n| {{2(x + 1)^2 + 5}} | (−1, 5) | minimum 5 |\n| {{9 - (x - 2)^2}} | (2, 9) | maximum 9 |\n\nCompleting the square is also how you solve quadratics exactly and how the quadratic formula is derived — see *Quadratic Equations*.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: an x by x square with two 3 by x strips and a missing 3 by 3 corner. Right: the graph of y equals x squared plus 6x plus 5 with its minimum point at (−3, −4)"><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><rect x="50" y="50" width="140" height="140" fill="#c7d2fe"/><rect x="190" y="50" width="60" height="140" fill="#fde68a"/><rect x="50" y="190" width="140" height="60" fill="#fde68a"/><rect x="190" y="190" width="60" height="60" fill="#fecaca" stroke-dasharray="5 4"/></g><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="120" y="40" font-size="14">x</text><text x="220" y="40" font-size="14">3</text><text x="36" y="125" font-size="14">x</text><text x="36" y="225" font-size="14">3</text><text x="120" y="126" font-size="16">x²</text><text x="220" y="126" font-size="14">3x</text><text x="120" y="226" font-size="14">3x</text><text x="220" y="218" font-size="12">9</text><text x="220" y="234" font-size="11">missing</text><text x="150" y="278" font-size="13">x² + 6x = (x + 3)² − 9</text></g><g stroke="#334155" stroke-width="1.2"><line x1="300" y1="200" x2="472" y2="200"/><line x1="460" y1="105" x2="460" y2="285"/></g><g font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle"><text x="310" y="214">−6</text><text x="385" y="214">−3</text><text x="472" y="214">x</text><text x="468" y="112">y</text><text x="450" y="124">5</text></g><polyline fill="none" stroke="#2563eb" stroke-width="2" points="310,120 322.5,164 335,200 347.5,228 360,248 372.5,260 385,264 397.5,260 410,248 422.5,228 435,200 447.5,164 460,120"/><line x1="385" y1="200" x2="385" y2="264" stroke="#334155" stroke-dasharray="3 3"/><circle cx="385" cy="264" r="4" fill="#dc2626"/><text x="385" y="284" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">(−3, −4)</text></svg>`,
      diagramCaption: "Left: the 'missing corner' is {{(b/2)^2}}. Right: {{y = x^2 + 6x + 5 = (x + 3)^2 - 4}} has its minimum at (−3, −4).",
      workedExamples: [
        {
          title: "Form (x + p)² + q and the minimum",
          problem: "(a) Write {{x^2 - 8x + 3}} in the form {{(x + p)^2 + q}}. (b) Hence write down the minimum value of {{x^2 - 8x + 3}} and the value of x where it occurs.",
          steps: [
            "Half of −8 is −4, so start with {{(x - 4)^2}}.",
            "{{(x - 4)^2 = x^2 - 8x + 16}}, which is 16 too many, so subtract 16: {{x^2 - 8x = (x - 4)^2 - 16}}.",
            "Add the constant: {{(x - 4)^2 - 16 + 3 = (x - 4)^2 - 13}}. So p = −4, q = −13.",
            "(b) {{(x - 4)^2}} is never negative and equals 0 when x = 4.",
            "So the minimum value is −13, when x = 4.",
          ],
          answer: "{{(x - 4)^2 - 13}}; minimum −13 at x = 4",
          yourTurn: {
            question: "Your turn: write {{x^2 + 10x + 7}} in the form {{(x + p)^2 + q}}. Give p then q.",
            answer: { type: "list", values: [5, -18], ordered: true, display: "p = 5, q = −18" },
            solution: "Half of 10 is 5: {{(x + 5)^2 - 25 + 7 = (x + 5)^2 - 18}}. So p = 5 and q = −18.",
          },
        },
        {
          title: "a ≠ 1 (exam style)",
          problem: "Express {{2x^2 + 12x + 5}} in the form {{a(x + b)^2 + c}}, where a, b and c are integers.",
          steps: [
            "Factor 2 out of the x-terms only: {{2(x^2 + 6x) + 5}}.",
            "Complete the square inside: {{x^2 + 6x = (x + 3)^2 - 9}}.",
            "Substitute, keeping the square brackets: {{2[(x + 3)^2 - 9] + 5}}.",
            "Multiply out the 2: {{2(x + 3)^2 - 18 + 5}}.",
            "Simplify: {{2(x + 3)^2 - 13}}.",
            "Check with x = 0: original gives 5; {{2(9) - 13 = 5}}. ✓",
          ],
          answer: "{{2(x + 3)^2 - 13}}: a = 2, b = 3, c = −13",
          yourTurn: {
            question: "Your turn: write {{3x^2 - 6x + 10}} in the form {{a(x + b)^2 + c}}. Give a, b, c in that order.",
            answer: { type: "list", values: [3, -1, 7], ordered: true, display: "a = 3, b = −1, c = 7" },
            solution: "{{3(x^2 - 2x) + 10 = 3[(x - 1)^2 - 1] + 10 = 3(x - 1)^2 - 3 + 10 = 3(x - 1)^2 + 7}}. Check x = 0: 10 and 3 + 7 = 10. ✓",
          },
        },
      ],
      keyPoints: [
        "Halve b for the bracket, then subtract the square of that half.",
        "Keep fractions exact: {{(x + 5/2)^2 - 25/4 + 1}}.",
        "a ≠ 1: factor a out of the x-terms, complete the square inside, then multiply the subtracted number by a.",
        "{{(x + p)^2 + q}} has minimum q at x = −p; the turning point is (−p, q).",
        "Check by expanding back, or by substituting x = 0.",
      ],
      whyItWorks:
        "Expanding {{(x + k)^2}} gives {{x^2 + 2kx + k^2}}: the x-coefficient is 2k, so to match {{x^2 + bx}} you need {{k = b/2}}. But that brings an unwanted {{k^2}} with it, so you take it straight back off. In the picture, {{x^2 + bx}} is a square with two strips of width {{b/2}} — an L-shape that is one {{(b/2)^2}} corner short of a full square of side {{x + b/2}}.",
      strategies: ["Draw a diagram", "Work backwards", "Check by substituting", "Consider extremes"],
      thinkDeeper:
        "Use completing the square to prove that {{x^2 - 6x + 11}} is positive for every value of x. Then find all values of k for which {{x^2 - 6x + k}} is positive for every x. What is special about the boundary value of k?",
    },
    // ------------------------------------------------------------------
    {
      id: "substitution-formulae",
      heading: "Substitution into expressions & formulae",
      discovery: {
        problem:
          "Let a = −3. Priya says {{-a^2 = 9}}. Ravi says {{-a^2 = -9}}. Wei Ling types −3² into her calculator and gets −9, then types (−3)² and gets 9. Who is right about {{-a^2}}, and what should you type to evaluate {{2a^2}} correctly?",
        idea:
          "Powers are done **before** the minus sign in front: {{-a^2}} means {{-(a^2)}}. With a = −3, {{a^2 = (-3)^2 = 9}}, so {{-a^2 = -9}} — Ravi is right. But you only get that if you put the −3 in a bracket: {{2a^2 = 2 * (-3)^2 = 18}}, while typing 2 × −3² gives −18. **Every substituted value goes in a bracket.**",
      },
      body:
        "**Substitution** means replacing each letter with its value and then evaluating, following the order of operations (BIDMAS: Brackets, Indices, Division and Multiplication, Addition and Subtraction).\n\n**Golden rule: replace each letter with a bracket containing its value.** Then the order of operations does the right thing automatically.\n\n| Expression | a = −3 | Value |\n|---|---|---|\n| {{a^2}} | {{(-3)^2}} | 9 |\n| {{-a^2}} | {{-(-3)^2}} | −9 |\n| {{a^3}} | {{(-3)^3}} | −27 |\n| {{2a^2}} | {{2(-3)^2}} | 18 (not 36) |\n| {{(2a)^2}} | {{(2 * -3)^2}} | 36 |\n| {{5 - a}} | {{5 - (-3)}} | 8 |\n\n**Fractions as values.** Use the fraction key or keep exact fractions: with {{x = 2/3}}, {{9x^2 = 9 * 4/9 = 4}}.\n\n**Fraction lines act like brackets.** In {{(u + v)/(2t)}}, work out the whole top and the whole bottom first. On a calculator, use the fraction template or put brackets round both.\n\n**Formulae from science.** Exam questions often give a physics formula and ask you to use it. You don't need to know any physics — just substitute carefully:\n\n- {{v^2 = u^2 + 2as}} (final speed, initial speed, acceleration, distance)\n- {{E = 1/2 m v^2}} (kinetic energy: only v is squared, not m)\n- {{s = ut + 1/2 a t^2}} (distance travelled)\n\nWhen the formula gives {{v^2}}, find {{v^2}} first, then square root. If v must be a speed, take the positive root.\n\n**Accuracy.** Don't round in the middle. Keep the full calculator value (or exact form) until the last line, then round as the question asks — usually 3 significant figures.",
      diagram: `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Substituting u = 12, a = −2.5 and s = 20 into v squared = u squared + 2as, each value placed inside a bracket"><rect x="0" y="0" width="460" height="210" fill="#ffffff"/><rect x="158" y="118" width="50" height="32" rx="4" fill="#bae6fd" stroke="#334155"/><rect x="246" y="118" width="60" height="32" rx="4" fill="#fde68a" stroke="#334155"/><rect x="312" y="118" width="48" height="32" rx="4" fill="#bbf7d0" stroke="#334155"/><g font-family="sans-serif" font-size="20" fill="#1f2937" text-anchor="middle"><text x="150" y="40" text-anchor="end">v² =</text><text x="183" y="40">u²</text><text x="228" y="40">+ 2</text><text x="276" y="40">a</text><text x="336" y="40">s</text><text x="150" y="141" text-anchor="end">v² =</text><text x="183" y="141">(12)²</text><text x="228" y="141">+ 2</text><text x="276" y="141">(−2.5)</text><text x="336" y="141">(20)</text></g><g stroke="#334155" stroke-width="1.3"><line x1="183" y1="48" x2="183" y2="112"/><line x1="276" y1="48" x2="276" y2="112"/><line x1="336" y1="48" x2="336" y2="112"/></g><g fill="#334155"><polygon points="183,116 179,108 187,108"/><polygon points="276,116 272,108 280,108"/><polygon points="336,116 332,108 340,108"/></g><g font-family="sans-serif" font-size="12" fill="#334155"><text x="190" y="86">u = 12</text><text x="283" y="86">a = −2.5</text><text x="343" y="86">s = 20</text></g><text x="230" y="188" font-family="sans-serif" font-size="15" fill="#1f2937" text-anchor="middle">= 144 − 100 = 44,  so v = √44 ≈ 6.63</text></svg>`,
      diagramCaption: "Each letter becomes a bracket holding its value — then the order of operations takes care of the signs.",
      workedExamples: [
        {
          title: "A formula with a negative value",
          problem: "{{v^2 = u^2 + 2as}}. Work out the value of v when u = 12, a = −2.5 and s = 20. Give your answer correct to 3 significant figures.",
          steps: [
            "Substitute in brackets: {{v^2 = (12)^2 + 2(-2.5)(20)}}.",
            "Indices first: {{(12)^2 = 144}}.",
            "Multiply: 2 × (−2.5) × 20 = −100.",
            "So {{v^2 = 144 - 100 = 44}}.",
            "Square root: {{v = sqrt(44) = 6.6332...}}.",
            "To 3 s.f.: v = 6.63.",
          ],
          answer: "v = 6.63 (3 s.f.)",
          yourTurn: {
            question: "Your turn: {{E = 1/2 m v^2}}. Work out E when m = 2.4 and v = −5.",
            answer: { type: "number", value: 30 },
            solution: "{{E = 1/2 * 2.4 * (-5)^2 = 1.2 * 25 = 30}}. Only v is squared, and {{(-5)^2 = 25}} is positive.",
          },
        },
        {
          title: "Fractions and negatives together",
          problem: "Work out the exact value of {{p = (x^2 - y)/(x + 2y)}} when x = −3 and {{y = 1/2}}.",
          steps: [
            "Top: {{(-3)^2 - 1/2 = 9 - 1/2 = 17/2}}.",
            "Bottom: {{-3 + 2(1/2) = -3 + 1 = -2}}.",
            "Divide: {{17/2 ÷ (-2) = -17/4}}.",
          ],
          answer: "{{p = -17/4}} (or −4.25)",
          yourTurn: {
            question: "Your turn: work out the value of {{(3a^2 - b)/(2c)}} when a = −2, b = 5 and {{c = -1/4}}.",
            answer: { type: "number", value: -14 },
            solution: "Top: {{3(-2)^2 - 5 = 12 - 5 = 7}}. Bottom: {{2(-1/4) = -1/2}}. So {{7 ÷ (-1/2) = -14}}.",
          },
        },
      ],
      keyPoints: [
        "Put every substituted value in a bracket, especially negatives.",
        "Powers come before the minus sign in front: {{-a^2 = -(a^2)}}.",
        "In {{2a^2}} only a is squared; in {{(2a)^2}} the 2 is squared too.",
        "A fraction line groups the whole top and the whole bottom.",
        "Round only at the end, to the accuracy the question asks for.",
      ],
      whyItWorks:
        "A letter stands for a single number. Writing it as a bracket keeps that number in one piece, so the order of operations can't break it up. {{a^2}} means {{a * a}}: with a = −3 that is {{(-3) * (-3) = 9}}. Typing −3² makes the calculator square 3 first and then apply the minus, which is a different calculation.",
      strategies: ["Use brackets for every substitution", "Estimate first", "Check by substituting"],
      thinkDeeper:
        "Find a value of x for which {{x^2 < x}}, and one for which {{x^3 < x^2 < x}} fails. Can you describe *all* the values of x for which {{x^3 < x}}? (Try negatives, fractions and numbers bigger than 1.)",
    },
    // ------------------------------------------------------------------
    {
      id: "function-notation-basics",
      heading: "Function notation f(x)",
      discovery: {
        problem:
          "A machine takes a number, squares it, doubles the result and subtracts 3. We call it f, and write {{f(x) = 2x^2 - 3}}. What comes out when you put in 3? What comes out for −2? Now work backwards: what could you have put in to get 47 out? Is there only one answer?",
        idea:
          "{{f(3) = 2(3)^2 - 3 = 15}} and {{f(-2) = 2(-2)^2 - 3 = 5}}. For the output 47: {{2x^2 - 3 = 47}}, so {{x^2 = 25}} and x = 5 **or** x = −5. Two different inputs can give the same output. **f(3) means 'the output when the input is 3'** — it is not f × 3.",
      },
      body:
        "A **function** is a rule that turns each input into exactly one output. **Function notation** names the rule:\n\n- {{f(x) = 3x - 7}} reads *f of x equals three x minus seven*.\n- **f(4)** is the output when x = 4: {{f(4) = 3(4) - 7 = 5}}.\n- f(x) is a value, so you can do arithmetic with it: {{2f(4) = 10}} and {{f(4) + 1 = 6}}.\n\n**Three question types you must recognise:**\n\n| You are given… | You are asked… | What to do |\n|---|---|---|\n| an input, e.g. f(−2) | the output | substitute x = −2 (in a bracket!) |\n| an output, e.g. f(x) = 11 | the input x | form an equation and **solve** it |\n| an expression, e.g. f(a + 1) | an expression | replace **every** x with (a + 1) and simplify |\n\n**Finding x from f(x).** Write the equation and solve. A quadratic function may give two answers: if {{g(x) = x^2 - 3x}} and g(x) = 10, then {{x^2 - 3x - 10 = 0}}, {{(x - 5)(x + 2) = 0}}, so x = 5 or x = −2.\n\n**Substituting an expression.** If {{f(x) = x^2 - 3x}}, then\n\n    {{f(a + 1) = (a + 1)^2 - 3(a + 1)}}\n    {{= a^2 + 2a + 1 - 3a - 3 = a^2 - a - 2}}\n\nNotice that {{f(a + 1)}} is **not** {{f(a) + 1}} and not {{f(a) + f(1)}}.\n\n**Other letters.** Functions can be called g, h, p…, and the input letter can change: {{g(t) = 5t + 1}} is the same kind of rule. Composite functions fg(x) and inverses {{f^(-1)(x)}} are in the *Functions* topic.",
      diagram: `<svg viewBox="0 0 470 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Function machine for f(x) = 2x squared minus 3: square, then times 2, then minus 3. Input 3 gives 15; input −2 gives 5"><rect x="0" y="0" width="470" height="200" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><rect x="80" y="30" width="80" height="44" rx="6" fill="#c7d2fe"/><rect x="200" y="30" width="80" height="44" rx="6" fill="#fde68a"/><rect x="320" y="30" width="80" height="44" rx="6" fill="#bbf7d0"/><line x1="44" y1="52" x2="78" y2="52"/><line x1="160" y1="52" x2="198" y2="52"/><line x1="280" y1="52" x2="318" y2="52"/><line x1="400" y1="52" x2="430" y2="52"/></g><g fill="#334155"><polygon points="78,52 70,48 70,56"/><polygon points="198,52 190,48 190,56"/><polygon points="318,52 310,48 310,56"/><polygon points="430,52 422,48 422,56"/></g><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="26" y="57" font-size="15">x</text><text x="120" y="57" font-size="15">square</text><text x="240" y="57" font-size="15">× 2</text><text x="360" y="57" font-size="15">− 3</text><text x="448" y="57" font-size="15">f(x)</text><text x="26" y="122" font-size="15">3</text><text x="180" y="122" font-size="15">9</text><text x="300" y="122" font-size="15">18</text><text x="448" y="122" font-size="15">15</text><text x="26" y="162" font-size="15">−2</text><text x="180" y="162" font-size="15">4</text><text x="300" y="162" font-size="15">8</text><text x="448" y="162" font-size="15">5</text><text x="240" y="194" font-size="13">f(3) = 15    f(−2) = 5</text></g></svg>`,
      diagramCaption: "{{f(x) = 2x^2 - 3}} as a machine. Running it backwards (+3, ÷2, square root) finds x from f(x) — and the square root gives two inputs.",
      workedExamples: [
        {
          title: "Outputs and inputs",
          problem: "{{f(x) = 3x - 7}} and {{g(x) = x^2 + 1}}. (a) Find f(−2). (b) Find g(−3). (c) Solve f(x) = 11. (d) Work out {{f(2) + g(2)}}.",
          steps: [
            "(a) {{f(-2) = 3(-2) - 7 = -6 - 7 = -13}}.",
            "(b) {{g(-3) = (-3)^2 + 1 = 9 + 1 = 10}}.",
            "(c) This gives an output, so solve: {{3x - 7 = 11}}, {{3x = 18}}, x = 6.",
            "(d) {{f(2) = 6 - 7 = -1}} and {{g(2) = 4 + 1 = 5}}, so the sum is 4.",
          ],
          answer: "(a) −13 (b) 10 (c) x = 6 (d) 4",
          yourTurn: {
            question: "Your turn: {{f(x) = 5 - 2x}}. Find the value of x for which f(x) = −9.",
            answer: { type: "number", value: 7 },
            solution: "{{5 - 2x = -9}}, so {{-2x = -14}} and x = 7. Check: {{f(7) = 5 - 14 = -9}}. ✓",
          },
        },
        {
          title: "f(a + 1) and solving f(x) = k",
          problem: "{{f(x) = x^2 - 3x}}. (a) Find and simplify f(a + 1). (b) Solve f(x) = 10.",
          steps: [
            "(a) Replace every x with (a + 1): {{(a + 1)^2 - 3(a + 1)}}.",
            "Expand: {{a^2 + 2a + 1 - 3a - 3}}.",
            "Simplify: {{a^2 - a - 2}}.",
            "(b) {{x^2 - 3x = 10}}, so {{x^2 - 3x - 10 = 0}}.",
            "Factorise: {{(x - 5)(x + 2) = 0}}, so x = 5 or x = −2.",
            "Check: {{f(5) = 25 - 15 = 10}} ✓ and {{f(-2) = 4 + 6 = 10}} ✓.",
          ],
          answer: "(a) {{a^2 - a - 2}} (b) x = 5 or x = −2",
          yourTurn: {
            question: "Your turn: {{h(x) = x^2 + 4x}}. Find and simplify h(t − 2).",
            answer: { type: "expression", expr: "t^2-4", form: "simplified" },
            solution: "{{h(t - 2) = (t - 2)^2 + 4(t - 2) = t^2 - 4t + 4 + 4t - 8 = t^2 - 4}}.",
          },
        },
      ],
      keyPoints: [
        "f(3) is the output when the input is 3 — not f × 3.",
        "Given the input: substitute. Given the output: form an equation and solve.",
        "To find f(a + 1), replace every x with (a + 1) in brackets, then expand and simplify.",
        "{{f(a + 1)}} is not {{f(a) + 1}}.",
        "A quadratic function can give the same output for two different inputs.",
      ],
      whyItWorks:
        "The x in {{f(x) = x^2 - 3x}} is only a placeholder that marks where the input goes. Whatever you put in the brackets on the left — a number, a letter, a whole expression — goes into **every** placeholder on the right. That is why {{f(a + 1)}} needs {{(a + 1)}} in a bracket each time: it is one input, so it must stay in one piece.",
      strategies: ["Use the inverse", "Introduce a variable", "Check by substituting"],
      thinkDeeper:
        "Find a function f, other than f(x) = x, for which {{f(a + b) = f(a) + f(b)}} for all a and b. Then show that {{f(x) = x^2}} does *not* have this property. What do all the functions that work have in common?",
    },
    // ------------------------------------------------------------------
    {
      id: "harder-algebra",
      heading: "Harder expanding & factorising",
      discovery: {
        problem:
          "Without a calculator, work out {{101^2 - 99^2}}. Then work out {{1000^2 - 999^2}}. Is there a quick way? Finally, is {{(n + 1)^2 - n^2}} always odd? Why?",
        idea:
          "Use the difference of two squares: {{101^2 - 99^2 = (101 - 99)(101 + 99) = 2 × 200 = 400}}, and {{1000^2 - 999^2 = 1 × 1999 = 1999}}. In general {{(n + 1)^2 - n^2 = (1)(2n + 1) = 2n + 1}}, which is always odd. The pattern {{a^2 - b^2 = (a - b)(a + b)}} works whatever a and b are — numbers, letters or whole brackets.",
      },
      body:
        "Higher and H+ questions disguise the standard patterns. Your job is to *see through the disguise*.\n\n**1. Common factor, then difference of two squares.**\n\n    {{2x^2 - 50 = 2(x^2 - 25) = 2(x - 5)(x + 5)}}\n\n**2. Brackets as the 'a' and 'b'.** In {{(x + 3)^2 - (x - 1)^2}}, let A = x + 3 and B = x − 1:\n\n    {{A^2 - B^2 = (A - B)(A + B)}}\n    {{= [(x + 3) - (x - 1)][(x + 3) + (x - 1)] = (4)(2x + 2) = 8(x + 1)}}\n\n**3. Repeated difference of two squares.**\n\n    {{x^4 - 16 = (x^2 - 4)(x^2 + 4) = (x - 2)(x + 2)(x^2 + 4)}}\n\nThe {{x^2 + 4}} doesn't factorise any further (a sum of squares never does with real numbers).\n\n**4. Quadratics in disguise.** If you can spot a 'u' that turns the expression into a normal quadratic, factorise in u, then put it back:\n\n- {{x^4 - 5x^2 + 4}}: with {{u = x^2}} it is {{u^2 - 5u + 4 = (u - 1)(u - 4)}}, so {{(x^2 - 1)(x^2 - 4) = (x - 1)(x + 1)(x - 2)(x + 2)}}.\n- {{(x + 1)^2 + 5(x + 1) + 6}}: with u = x + 1 it is {{(u + 2)(u + 3) = (x + 3)(x + 4)}}.\n\n**5. Grouping four terms.**\n\n    {{x^3 + 2x^2 - 9x - 18 = x^2(x + 2) - 9(x + 2)}}\n    {{= (x + 2)(x^2 - 9) = (x + 2)(x - 3)(x + 3)}}\n\n**6. Algebraic proof.** To prove a statement about *every* integer, use letters:\n\n| Object | Write it as |\n|---|---|\n| any integer | n |\n| an even number | 2n |\n| an odd number | 2n + 1 |\n| consecutive integers | n, n + 1, n + 2 |\n| consecutive odd numbers | 2n + 1, 2n + 3 |\n\nThen expand/factorise to show the result is, e.g., **4 × (an integer)**. Finish with a sentence: *\"…which is a multiple of 4 because n + 4 is an integer.\"* Checking examples is **not** a proof — it only shows some cases work.",
      diagram: `<svg viewBox="0 0 470 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square of side a with a square of side b removed from its corner. The remaining L-shape is cut into two rectangles that rearrange into a rectangle a plus b long and a minus b wide"><rect x="0" y="0" width="470" height="260" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><rect x="40" y="50" width="80" height="140" fill="#c7d2fe"/><rect x="120" y="110" width="60" height="80" fill="#fde68a"/><rect x="120" y="50" width="60" height="60" fill="#ffffff" stroke-dasharray="5 4"/><rect x="260" y="90" width="140" height="80" fill="#c7d2fe"/><rect x="400" y="90" width="60" height="80" fill="#fde68a"/></g><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="110" y="38" font-size="14">a</text><text x="150" y="84" font-size="13">b²</text><text x="150" y="100" font-size="11">removed</text><text x="196" y="84" font-size="14">b</text><text x="24" y="124" font-size="14">a</text><text x="110" y="222" font-size="14">a² − b²</text><text x="80" y="124" font-size="12">A</text><text x="150" y="154" font-size="12">B</text><text x="330" y="134" font-size="12">A (turned)</text><text x="430" y="134" font-size="12">B</text><text x="360" y="78" font-size="14">a + b</text><text x="238" y="134" font-size="14">a − b</text><text x="360" y="200" font-size="14">(a − b)(a + b)</text></g><path d="M195 160 L246 160" stroke="#334155" stroke-width="1.5" fill="none"/><polygon points="252,160 244,156 244,164" fill="#334155"/></svg>`,
      diagramCaption: "Why {{a^2 - b^2 = (a - b)(a + b)}}: the L-shape left after removing {{b^2}} rearranges into an {{(a - b)}} by {{(a + b)}} rectangle.",
      workedExamples: [
        {
          title: "Difference of two squares, twice",
          problem: "Factorise fully {{x^4 - 81}}.",
          steps: [
            "{{x^4 = (x^2)^2}} and {{81 = 9^2}}, so it is a difference of two squares: {{(x^2 - 9)(x^2 + 9)}}.",
            "{{x^2 - 9}} is again a difference of two squares: {{(x - 3)(x + 3)}}.",
            "{{x^2 + 9}} is a sum of squares and does not factorise.",
            "So {{x^4 - 81 = (x - 3)(x + 3)(x^2 + 9)}}.",
            "Check x = 2: {{16 - 81 = -65}}; {{(-1)(5)(13) = -65}}. ✓",
          ],
          answer: "{{(x - 3)(x + 3)(x^2 + 9)}}",
          yourTurn: {
            question: "Your turn: factorise fully {{3x^2 - 75}}.",
            answer: { type: "expression", expr: "3(x-5)(x+5)", form: "factorised" },
            solution: "Common factor first: {{3(x^2 - 25)}}. Then difference of two squares: {{3(x - 5)(x + 5)}}.",
          },
        },
        {
          title: "Algebraic proof",
          problem: "Prove that {{(2n + 3)^2 - (2n - 1)^2}} is a multiple of 8 for all integer values of n.",
          steps: [
            "Use the difference of two squares with A = 2n + 3 and B = 2n − 1.",
            "{{A - B = (2n + 3) - (2n - 1) = 4}}.",
            "{{A + B = (2n + 3) + (2n - 1) = 4n + 2}}.",
            "So the expression equals {{4(4n + 2) = 16n + 8 = 8(2n + 1)}}.",
            "Since n is an integer, 2n + 1 is an integer, so the expression is 8 × (an integer): a multiple of 8.",
            "Alternative: expand both squares: {{4n^2 + 12n + 9 - (4n^2 - 4n + 1) = 16n + 8}}. Same result.",
          ],
          answer: "{{(2n + 3)^2 - (2n - 1)^2 = 8(2n + 1)}}, a multiple of 8.",
          yourTurn: {
            question: "Your turn: factorise fully {{(x + 5)^2 - (x - 1)^2}}.",
            answer: { type: "expression", expr: "12(x+2)", form: "factorised" },
            solution: "{{[(x + 5) - (x - 1)][(x + 5) + (x - 1)] = (6)(2x + 4) = 12(x + 2)}}. Check by expanding: {{x^2 + 10x + 25 - x^2 + 2x - 1 = 12x + 24}}. ✓",
          },
        },
      ],
      keyPoints: [
        "Common factor first, then look for {{a^2 - b^2}}.",
        "A bracket can be the a or the b: {{(A - B)(A + B)}} with A and B whole brackets.",
        "Keep factorising until every factor is irreducible — {{x^2 + 9}} stops; {{x^2 - 9}} doesn't.",
        "Spot disguised quadratics with a substitution such as {{u = x^2}} or u = x + 1.",
        "Proof: use n, 2n, 2n + 1; show the result is k × (integer); finish with a sentence.",
      ],
      whyItWorks:
        "{{(a - b)(a + b) = a^2 + ab - ab - b^2 = a^2 - b^2}}: the two middle terms cancel. That cancellation doesn't care what a and b are, so it works when they are numbers, letters, or entire brackets. The diagram shows the same fact as areas: cut the L-shape and rearrange — the area is unchanged.",
      strategies: ["Introduce a variable", "Look for structure", "Use symmetry", "Make it simpler"],
      thinkDeeper:
        "Prove that the product of two consecutive odd numbers is always one less than a multiple of 4. Then find every way to write 45 as a difference of two square numbers {{a^2 - b^2}} with a and b whole numbers. (Hint: 45 = (a − b)(a + b).)",
    },
  ],
  learn: {
    flashcards: [
      { front: "Expand {{(a + b)^2}}", back: "{{a^2 + 2ab + b^2}} — square, double the product, square." },
      { front: "Expand {{(a - b)^2}}", back: "{{a^2 - 2ab + b^2}} — the last term is always positive." },
      { front: "Difference of two squares", back: "{{a^2 - b^2 = (a - b)(a + b)}}" },
      { front: "How many products before collecting in {{(x + a)(x + b)(x + c)}}?", back: "2 × 2 × 2 = 8 (or 6 once you've combined the first two into a 3-term quadratic and multiplied by the third)." },
      { front: "Quick check for an expansion?", back: "Substitute x = 1 (or x = 0) into both the original and your answer — they must match." },
      { front: "Factorise {{x^2 + bx + c}}", back: "Find two numbers that **multiply to c** and **add to b**." },
      { front: "Factorise {{ax^2 + bx + c}} (a ≠ 1)", back: "Find two numbers with product ac and sum b, split the middle term, factorise in pairs." },
      { front: "First step in any 'factorise fully'?", back: "Take out the highest common factor." },
      { front: "Complete the square: {{x^2 + bx + c}}", back: "{{(x + b/2)^2 - (b/2)^2 + c}}" },
      { front: "Turning point of {{y = (x + p)^2 + q}}", back: "(−p, q) — a minimum, because the square is never negative." },
      { front: "{{2x^2 + 8x + 1}} in the form {{a(x + b)^2 + c}}", back: "{{2(x + 2)^2 - 7}}: {{2[(x + 2)^2 - 4] + 1}}." },
      { front: "With a = −4, what are {{a^2}} and {{-a^2}}?", back: "{{a^2 = 16}}, {{-a^2 = -16}}. Powers before the minus in front." },
      { front: "What does f(5) mean?", back: "The output of function f when the input is 5." },
      { front: "{{f(x) = 4x + 1}}. Solve f(x) = 21.", back: "{{4x + 1 = 21}}, so x = 5." },
      { front: "{{f(x) = x^2}}. Find f(a + 2).", back: "{{(a + 2)^2 = a^2 + 4a + 4}} — not {{a^2 + 2}}." },
      { front: "Factorise fully {{x^4 - 1}}", back: "{{(x - 1)(x + 1)(x^2 + 1)}}" },
      { front: "Algebraic form of an odd number", back: "2n + 1 (n an integer). Consecutive odds: 2n + 1, 2n + 3." },
    ],
    mustKnow: [
      "Can I expand and fully simplify two brackets, including squares like {{(2x - 3)^2}}?",
      "Can I factorise expressions in the form {{x^2 + bx + c}}, including the difference of two squares?",
      "Can I expand and fully simplify up to three brackets, and check my answer by substituting?",
      "Can I factorise quadratic expressions where a ≠ 1, such as {{6x^2 + x - 12}}?",
      "Can I complete the square, including when a ≠ 1, and use it to find a minimum value or turning point?",
      "Can I expand and factorise harder algebraic expressions, such as {{x^4 - 16}} and {{(x + 3)^2 - (x - 1)^2}}?",
      "Can I substitute positive and negative integers, decimals and fractions into expressions and formulae?",
      "Can I explain function notation, calculate f(x) for a given x, and find x given the value of f(x)?",
      "Can I find and simplify expressions such as f(a + 1)?",
      "Can I write an algebraic proof that an expression is always odd, or always a multiple of a number?",
    ],
    misconceptions: [
      { wrong: "{{(x + 5)^2 = x^2 + 25}}", right: "{{(x + 5)^2 = (x + 5)(x + 5) = x^2 + 10x + 25}}. Don't lose the middle term." },
      { wrong: "{{-(x^2 - x - 20) = -x^2 - x - 20}}", right: "The minus changes **every** sign: {{-x^2 + x + 20}}." },
      { wrong: "{{x^2 + 9 = (x + 3)(x - 3)}}", right: "{{(x + 3)(x - 3) = x^2 - 9}}. A sum of two squares doesn't factorise; only a *difference* does." },
      { wrong: "{{2x^2 - 12x + 7 = 2(x - 3)^2 - 9 + 7}}", right: "The −9 is inside the bracket, so it is doubled: {{2[(x - 3)^2 - 9] + 7 = 2(x - 3)^2 - 11}}." },
      { wrong: "If a = −3, then {{2a^2 = (2 * -3)^2 = 36}}.", right: "Only a is squared: {{2 * (-3)^2 = 2 * 9 = 18}}." },
      { wrong: "f(3) means f × 3.", right: "f(3) is the output when 3 is put into the function f." },
      { wrong: "{{f(a + 1) = f(a) + 1}}", right: "Replace every x with (a + 1): for {{f(x) = x^2}}, {{f(a + 1) = a^2 + 2a + 1}}, not {{a^2 + 1}}." },
      { wrong: "Testing n = 1, 2, 3 proves the statement for all n.", right: "Examples can only disprove. A proof uses a general integer n." },
    ],
    examMistakes: [
      "Writing {{(2x - 3)^2 = 4x^2 + 9}} or {{4x^2 - 9}} — the middle term {{-12x}} goes missing and the method mark is lost.",
      "Expanding three brackets correctly but then making an arithmetic slip collecting like terms — candidates who don't check with x = 1 lose the accuracy mark.",
      "Not factorising fully: writing {{(2x - 10)(x + 3)}} instead of {{2(x - 5)(x + 3)}}, or stopping at {{(x^2 - 4)(x^2 + 4)}}.",
      "In {{a(x + b)^2 + c}} questions, forgetting to multiply the subtracted square by a, so c is wrong.",
      "Typing −3² instead of (−3)² on the calculator when substituting a negative, giving −9 instead of 9.",
      "In algebraic proof, expanding correctly but never concluding — e.g. showing {{8n + 4}} without writing it as {{4(2n + 1)}} and saying 'which is a multiple of 4'.",
    ],
    mnemonics: [
      {
        topic: "Expanding two brackets",
        device: "FOIL — First, Outer, Inner, Last",
        explanation: "For {{(x + 2)(x - 5)}}: First {{x * x}}, Outer {{x * -5}}, Inner {{2 * x}}, Last {{2 * -5}}. Only for two 2-term brackets; use a grid for anything bigger.",
      },
      {
        topic: "Completing the square",
        device: "Halve it, square it, take it away",
        explanation: "Halve the x-coefficient for the bracket, square that half, and subtract it: {{x^2 + 6x = (x + 3)^2 - 9}}.",
      },
      {
        topic: "Factorising fully",
        device: "HCF, DOTS, then pairs",
        explanation: "Highest common factor first; then the Difference Of Two Squares; then find the pair of numbers for the quadratic. Repeat until nothing more comes out.",
      },
    ],
    realWorld: [
      { title: "Projectile and braking formulae", detail: "Engineers use {{v^2 = u^2 + 2as}} to work out stopping distances on roads such as the PIE — substituting a negative deceleration is exactly the sign skill in this chapter.", emoji: "🚗" },
      { title: "Maximum profit", detail: "A hawker stall's daily profit modelled as {{P = -2x^2 + 40x - 50}} (x = price in $) is maximised by completing the square: {{P = 150 - 2(x - 10)^2}}, so charge $10.", emoji: "🍜" },
      { title: "Mental arithmetic tricks", detail: "{{49 × 51 = (50 - 1)(50 + 1) = 2500 - 1 = 2499}}. The difference of two squares turns hard products into easy ones.", emoji: "🧠" },
      { title: "Spreadsheets and code", detail: "A spreadsheet formula like =A2^2-3*A2 is function notation in disguise: the cell is the input x and the formula is f. Programmers call it a function for the same reason.", emoji: "💻" },
    ],
    videos: [
      { title: "Expanding triple brackets", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+expanding+three+brackets" },
      { title: "Factorising quadratics where a is not 1", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+factorising+harder+quadratics" },
      { title: "Completing the square", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+completing+the+square+gcse" },
      { title: "Function notation", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+function+notation+gcse" },
    ],
    formulas: [
      { name: "Perfect square (plus)", formula: "{{(a + b)^2 = a^2 + 2ab + b^2}}", note: "Learn this — not given" },
      { name: "Perfect square (minus)", formula: "{{(a - b)^2 = a^2 - 2ab + b^2}}", note: "Learn this — not given" },
      { name: "Difference of two squares", formula: "{{a^2 - b^2 = (a - b)(a + b)}}", note: "Learn this — not given" },
      { name: "Factorising pattern", formula: "{{(x + p)(x + q) = x^2 + (p + q)x + pq}}", note: "Learn this — not given" },
      { name: "Completing the square", formula: "{{x^2 + bx + c = (x + b/2)^2 - (b/2)^2 + c}}", note: "Learn this — not given" },
      { name: "Turning point", formula: "{{y = a(x + p)^2 + q}} has turning point (−p, q)", note: "Learn this — not given" },
      { name: "Quadratic formula (derived by completing the square)", formula: "{{x = (-b +- sqrt(b^2 - 4ac))/(2a)}}", note: "On the formula sheet" },
      { name: "Kinematics (substitution practice)", formula: "{{v^2 = u^2 + 2as}}, {{s = ut + 1/2 a t^2}}", note: "Given in the question when needed" },
      { name: "Kinetic energy (substitution practice)", formula: "{{E = 1/2 m v^2}}", note: "Given in the question when needed" },
    ],
  },
};
