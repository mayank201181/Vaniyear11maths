import type { TopicGuide } from "../../types.ts";

// ---------------------------------------------------------------------------
// Pythagoras & Right-Angled Trigonometry — guide (textbook chapter + learn-smart).
// School Unit 8 · Edexcel IGCSE 4MA1 Higher 4.8 + school H+ (triples, exact values).
// ---------------------------------------------------------------------------

export const guide: TopicGuide = {
  id: "pythagoras-trigonometry",
  title: "Pythagoras & Right-Angled Trigonometry",
  strand: "Geometry & Measure",
  icon: "📐",
  summary: "Every right-angled triangle hides one equation and three ratios — find the triangle, then pick the tool.",
  intro:
    "Right-angled triangles are everywhere on 4MA1 Higher: in bearings, heights of buildings, 3D boxes and pyramids, coordinate geometry, and inside the sine and cosine rules later on. Almost every one of those questions comes down to two tools — Pythagoras when you know or want sides, SOH CAH TOA when an angle is involved. The real skill is *spotting* the right-angled triangle hidden in the problem and drawing it on its own; the calculation is then routine. This chapter also covers the H+ extras: Pythagorean triples and the exact trig values you are expected to know without a calculator.",
  guide: [
    // -----------------------------------------------------------------------
    {
      id: "pythagoras",
      heading: "Pythagoras' theorem",
      discovery: {
        problem:
          "Draw right-angled triangles with shorter sides 3 and 4, then 5 and 12, then 6 and 8 (on squared paper or with a ruler). Measure the longest side each time. Now square all three side lengths of each triangle. What do you notice? Does the same thing happen in a triangle *without* a right angle — say sides 4, 5 and 6?",
        idea:
          "The longest sides come out as 5, 13 and 10. Squaring: 9 + 16 = 25, 25 + 144 = 169, 36 + 64 = 100 — every time, the two smaller squares add up exactly to the biggest square. In the 4, 5, 6 triangle, 16 + 25 = 41, which is *not* 36: the pattern belongs to right angles only. That is **Pythagoras' theorem**: {{a^2 + b^2 = c^2}}, where c is the side opposite the right angle.",
      },
      body:
        "In a right-angled triangle the longest side is opposite the right angle. It is called the **hypotenuse** (c). The other two sides (a and b) are the shorter sides or *legs*.\n\n    {{a^2 + b^2 = c^2}}\n\nBefore you calculate, ask one question: **am I finding the hypotenuse or a shorter side?**\n\n| Finding… | Do this | Example |\n|---|---|---|\n| the hypotenuse | square, **add**, square root | {{c = sqrt(6^2 + 8^2) = sqrt(100) = 10}} |\n| a shorter side | square, **subtract**, square root | {{a = sqrt(13^2 - 5^2) = sqrt(144) = 12}} |\n\nA quick sense check: the hypotenuse must be the **longest** side. If you are finding a shorter side and your answer is bigger than the hypotenuse, you added when you should have subtracted.\n\n**Exact (surd) answers.** If a question says *give your answer as a surd* or *in the form {{a sqrt(b)}}*, don't press the square-root button. Simplify instead:\n\n    {{x^2 = 9^2 - 5^2 = 81 - 25 = 56}}\n    {{x = sqrt(56) = sqrt(4 * 14) = 2 sqrt(14)}} cm\n\n**Isosceles triangles.** Drop a line from the apex to the middle of the base. It cuts the triangle into **two congruent right-angled triangles**, each with half the base. That is how you find the height — and so the area — of an isosceles or equilateral triangle.\n\n**Distance between two points.** The line from (1, 2) to (7, 10) is the hypotenuse of a right-angled triangle with horizontal side 7 − 1 = 6 and vertical side 10 − 2 = 8, so its length is {{sqrt(6^2 + 8^2) = 10}}. In general, {{d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)}}.\n\n**The converse: testing for a right angle.** If the sides of a triangle satisfy {{a^2 + b^2 = c^2}} (c the longest), the triangle *is* right-angled; if not, it isn't. For sides 7, 24, 25: 49 + 576 = 625 = {{25^2}}, so yes. For 6, 9, 11: 36 + 81 = 117 ≠ 121, so no — and since 117 < 121 the largest angle is slightly *more* than 90°.\n\n> Always label the hypotenuse first. Almost every Pythagoras mistake comes from treating a shorter side as c.",
      diagram: `<svg viewBox="0 0 400 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A right-angled triangle with shorter sides 3 and 4 and hypotenuse 5. A square is drawn on each side: area 9 on the side of length 3, area 16 on the side of length 4 and area 25 on the hypotenuse."><rect x="0" y="0" width="400" height="320" fill="#ffffff"/><rect x="30" y="130" width="90" height="90" fill="#c7d2fe" stroke="#334155" stroke-width="1.5"/><rect x="120" y="220" width="120" height="90" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><polygon points="120,130 240,220 330,100 210,10" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><polygon points="120,130 240,220 120,220" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><path d="M120,208 L132,208 L132,220" fill="none" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle"><text x="75" y="180">a² = 9</text><text x="180" y="270">b² = 16</text><text x="236" y="96">c² = 25</text></g><g font-family="sans-serif" font-size="13" fill="#334155" font-style="italic"><text x="127" y="182">a = 3</text><text x="168" y="213">b = 4</text><text x="198" y="162">c = 5</text></g></svg>`,
      diagramCaption:
        "The squares on the two shorter sides (9 + 16) have exactly the same total area as the square on the hypotenuse (25).",
      workedExamples: [
        {
          title: "A shorter side, as an exact surd",
          problem:
            "Triangle PQR has a right angle at Q. PR = 9 cm and PQ = 5 cm. Work out the length of QR. Give your answer in the form {{a sqrt(b)}}, where a and b are integers.",
          steps: [
            "The right angle is at Q, so the hypotenuse is the side opposite Q: PR = 9 cm. We want a **shorter** side, so subtract.",
            "{{QR^2 = PR^2 - PQ^2 = 9^2 - 5^2 = 81 - 25 = 56}}.",
            "{{QR = sqrt(56)}}. The largest square factor of 56 is 4: {{sqrt(56) = sqrt(4) * sqrt(14) = 2 sqrt(14)}}.",
            "Check: {{2 sqrt(14)}} ≈ 7.48, which is less than the hypotenuse 9. ✓",
          ],
          answer: "QR = {{2 sqrt(14)}} cm",
          yourTurn: {
            question:
              "Your turn: a right-angled triangle has hypotenuse 7 cm and one other side 3 cm. Find the third side. Give your answer as a surd in its simplest form.",
            answer: { type: "expression", expr: "2sqrt(10)", form: "surd", display: "{{2 sqrt(10)}} cm" },
            solution:
              "Shorter side, so subtract: {{x^2 = 7^2 - 3^2 = 49 - 9 = 40}}. {{x = sqrt(40) = sqrt(4 * 10) = 2 sqrt(10)}} cm.",
          },
        },
        {
          title: "Isosceles triangle: height and area",
          problem: "An isosceles triangle has sides 13 cm, 13 cm and 10 cm. Work out its area.",
          steps: [
            "Draw the line of symmetry from the apex to the midpoint of the 10 cm base. It meets the base at 90° and splits it into 5 cm + 5 cm.",
            "Each half is a right-angled triangle with hypotenuse 13 cm and base 5 cm. The height h is a shorter side.",
            "{{h^2 = 13^2 - 5^2 = 169 - 25 = 144}}, so h = 12 cm. (A 5-12-13 triangle.)",
            "Area = {{1/2 * \"base\" * \"height\" = 1/2 * 10 * 12 = 60}} {{cm^2}}.",
          ],
          answer: "60 {{cm^2}}",
          yourTurn: {
            question: "Your turn: an isosceles triangle has sides 17 cm, 17 cm and 16 cm. Work out its area in {{cm^2}}.",
            answer: { type: "number", value: 120, display: "120 {{cm^2}}" },
            solution:
              "Half the base is 8 cm. Height: {{h = sqrt(17^2 - 8^2) = sqrt(289 - 64) = sqrt(225) = 15}} cm. Area = {{1/2 * 16 * 15 = 120}} {{cm^2}}.",
          },
        },
      ],
      keyPoints: [
        "{{a^2 + b^2 = c^2}} only works in a right-angled triangle, with c the hypotenuse (opposite the right angle).",
        "Finding the hypotenuse: square, add, root. Finding a shorter side: square, subtract, root.",
        "The hypotenuse is always the longest side — use that as a check.",
        "For an exact answer, leave the root as a simplified surd: {{sqrt(56) = 2 sqrt(14)}}.",
        "Isosceles and equilateral triangles split into two right-angled triangles along the line of symmetry.",
        "Converse: if {{a^2 + b^2 = c^2}}, the angle opposite c is exactly 90°.",
      ],
      whyItWorks:
        "Take four copies of a right-angled triangle (legs a, b, hypotenuse c) and arrange them inside a big square of side a + b, so that their hypotenuses enclose a tilted square of side c in the middle.\n\nCount the area of the big square two ways:\n\n    {{(a + b)^2 = 4 * 1/2 ab + c^2}}\n    {{a^2 + 2ab + b^2 = 2ab + c^2}}\n    {{a^2 + b^2 = c^2}}\n\nThe 2ab cancels and the theorem drops out. Nothing in the argument depends on particular numbers, so it holds for **every** right-angled triangle.",
      strategies: ["Draw a diagram", "Label the hypotenuse first", "Estimate first", "Use symmetry"],
      thinkDeeper:
        "A triangle has sides 6 cm, 8 cm and x cm, and it is right-angled. There are **two** possible values of x — find both, exactly. Then: for which values of x is the triangle *obtuse*?",
    },
    // -----------------------------------------------------------------------
    {
      id: "pythagorean-triples",
      heading: "Pythagorean triples",
      discovery: {
        problem:
          "3, 4, 5 works because 9 + 16 = 25. Look at the gaps between consecutive square numbers: 1, 4, 9, 16, 25, 36, 49 … The gaps are 3, 5, 7, 9, 11, 13 … Some of those gaps are themselves square numbers (9 is a gap, and 9 = {{3^2}}). Find the next gap that is a perfect square. Which triple does it give you? And the one after that?",
        idea:
          "The gap between {{n^2}} and {{(n + 1)^2}} is 2n + 1 — every odd number appears exactly once. The odd squares are 9, 25, 49, 81 … The gap 25 sits between 144 and 169, so {{5^2 + 12^2 = 13^2}}. The gap 49 sits between 576 and 625: {{7^2 + 24^2 = 25^2}}. Every odd square gives a triple, so there are **infinitely many** Pythagorean triples.",
      },
      body:
        "A **Pythagorean triple** is three whole numbers a, b, c with {{a^2 + b^2 = c^2}} — the sides of a right-angled triangle with all sides whole numbers. Knowing the common ones saves time and gives you an instant check.\n\n| Primitive triple | Check | Some multiples |\n|---|---|---|\n| 3, 4, 5 | 9 + 16 = 25 | 6, 8, 10 · 9, 12, 15 · 30, 40, 50 |\n| 5, 12, 13 | 25 + 144 = 169 | 10, 24, 26 · 15, 36, 39 |\n| 8, 15, 17 | 64 + 225 = 289 | 16, 30, 34 · 24, 45, 51 |\n| 7, 24, 25 | 49 + 576 = 625 | 14, 48, 50 · 0.7, 2.4, 2.5 |\n| 20, 21, 29 | 400 + 441 = 841 | 40, 42, 58 |\n\n**Multiples work.** If (a, b, c) is a triple then so is (ka, kb, kc), because {{(ka)^2 + (kb)^2 = k^2 (a^2 + b^2) = k^2 c^2 = (kc)^2}}. The triangle is just enlarged. So a ladder problem with 0.7 m and 2.5 m is secretly 7-24-25 scaled by {{1/10}}.\n\nA **primitive** triple is one with no common factor (3, 4, 5 is primitive; 6, 8, 10 is not).\n\n**Generating triples (Euclid's formula).** Pick whole numbers m > n > 0. Then\n\n    {{a = m^2 - n^2}},  {{b = 2mn}},  {{c = m^2 + n^2}}\n\nalways form a triple. m = 2, n = 1 gives 3, 4, 5; m = 3, n = 2 gives 5, 12, 13; m = 4, n = 1 gives 15, 8, 17.\n\n**The odd-number trick.** For any odd number a, take {{b = (a^2 - 1)/2}} and c = b + 1. So 9 gives b = 40, c = 41: (9, 40, 41). This is exactly the 'gap between consecutive squares' idea from the discovery.\n\n> Spotting a triple is a shortcut, not a method. In a written answer, still show the Pythagoras line — e.g. {{sqrt(25^2 - 7^2) = sqrt(576) = 24}}.",
      diagram: `<svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: a 5 by 5 square of unit squares with a 4 by 4 block shaded blue and an L-shaped strip of 9 yellow squares. Right: a 13 by 13 square with a 12 by 12 blue block and an L-shaped strip of 25 yellow squares."><rect x="0" y="0" width="420" height="270" fill="#ffffff"/><rect x="30" y="40" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="56" y="40" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="82" y="40" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="108" y="40" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="134" y="40" width="26" height="26" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="30" y="66" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="56" y="66" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="82" y="66" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="108" y="66" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="134" y="66" width="26" height="26" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="30" y="92" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="56" y="92" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="82" y="92" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="108" y="92" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="134" y="92" width="26" height="26" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="30" y="118" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="56" y="118" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="82" y="118" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="108" y="118" width="26" height="26" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="134" y="118" width="26" height="26" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="30" y="144" width="26" height="26" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="56" y="144" width="26" height="26" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="82" y="144" width="26" height="26" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="108" y="144" width="26" height="26" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="134" y="144" width="26" height="26" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="30" y="40" width="130" height="130" fill="none" stroke="#1f2937" stroke-width="1.6"/><rect x="230" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="30" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="30" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="42" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="42" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="54" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="54" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="66" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="66" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="78" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="78" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="90" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="90" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="102" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="102" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="114" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="114" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="126" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="126" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="138" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="138" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="150" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="150" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="242" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="254" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="266" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="278" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="290" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="302" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="314" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="326" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="338" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="350" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="362" y="162" width="12" height="12" fill="#c7d2fe" stroke="#334155" stroke-width="0.6"/><rect x="374" y="162" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="242" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="254" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="266" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="278" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="290" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="302" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="314" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="326" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="338" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="350" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="362" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="374" y="174" width="12" height="12" fill="#fde68a" stroke="#334155" stroke-width="0.6"/><rect x="230" y="30" width="156" height="156" fill="none" stroke="#1f2937" stroke-width="1.6"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="95" y="22">5 × 5</text><text x="95" y="196">yellow strip = 25 − 16 = 9 = 3²</text><text x="95" y="216" font-weight="bold">triple 3, 4, 5</text><text x="308" y="22">13 × 13</text><text x="308" y="214">yellow strip = 169 − 144 = 25 = 5²</text><text x="308" y="234" font-weight="bold">triple 5, 12, 13</text><text x="210" y="260" fill="#334155">The strip round an n × n block always holds 2n + 1 squares.</text></g></svg>`,
      diagramCaption:
        "Wrap an L-shaped strip around an n × n square to make an (n + 1) × (n + 1) square: the strip holds 2n + 1 unit squares. When that odd number is itself a square, you have found a Pythagorean triple.",
      workedExamples: [
        {
          title: "Spot the scaled triple",
          problem:
            "A ladder 2.5 m long leans against a vertical wall. Its foot is 0.7 m from the wall on horizontal ground. How far up the wall does the ladder reach?",
          steps: [
            "The ladder is the hypotenuse (opposite the right angle between wall and ground).",
            "0.7 and 2.5 are 7 and 25 divided by 10 — this is the 7-24-25 triple scaled by {{1/10}}, so expect 2.4 m.",
            "Confirm with Pythagoras: {{h = sqrt(2.5^2 - 0.7^2) = sqrt(6.25 - 0.49) = sqrt(5.76) = 2.4}}.",
          ],
          answer: "2.4 m",
          yourTurn: {
            question:
              "Your turn: the two shorter sides of a right-angled triangle are 16 cm and 30 cm. Work out the hypotenuse in cm (look for a triple first).",
            answer: { type: "number", value: 34, display: "34 cm" },
            solution:
              "16 and 30 are 2 × 8 and 2 × 15, so this is 8-15-17 doubled: 34 cm. Check: {{sqrt(256 + 900) = sqrt(1156) = 34}}.",
          },
        },
        {
          title: "Generate a new triple",
          problem: "Use Euclid's formula with m = 5 and n = 2 to generate a Pythagorean triple, and verify it.",
          steps: [
            "{{a = m^2 - n^2 = 25 - 4 = 21}}.",
            "{{b = 2mn = 2 * 5 * 2 = 20}}.",
            "{{c = m^2 + n^2 = 25 + 4 = 29}}.",
            "Verify: {{21^2 + 20^2 = 441 + 400 = 841 = 29^2}}. ✓ The triple is (20, 21, 29) — primitive, because 20, 21, 29 have no common factor.",
          ],
          answer: "20, 21, 29",
          yourTurn: {
            question:
              "Your turn: use Euclid's formula with m = 4 and n = 3. Write down the hypotenuse c = {{m^2 + n^2}} of the triple you get.",
            answer: { type: "number", value: 25 },
            solution:
              "a = 16 − 9 = 7, b = 2 × 4 × 3 = 24, c = 16 + 9 = 25. The triple is 7, 24, 25.",
          },
        },
      ],
      keyPoints: [
        "Learn 3-4-5, 5-12-13, 8-15-17 and 7-24-25 — and recognise their multiples (including decimals like 0.6, 0.8, 1).",
        "Any multiple of a triple is a triple: it is the same triangle enlarged.",
        "Euclid: {{(m^2 - n^2, 2mn, m^2 + n^2)}} is a triple for whole numbers m > n > 0.",
        "Odd a: {{b = (a^2 - 1)/2}}, c = b + 1 gives a triple (3-4-5, 5-12-13, 7-24-25, 9-40-41 …).",
        "A spotted triple is a check or a shortcut — still show the Pythagoras working in an exam.",
      ],
      whyItWorks:
        "Expand Euclid's formula and the identity appears:\n\n    {{(m^2 - n^2)^2 + (2mn)^2 = m^4 - 2m^2 n^2 + n^4 + 4m^2 n^2}}\n    {{= m^4 + 2m^2 n^2 + n^4 = (m^2 + n^2)^2}}\n\nThe middle terms −2 and +4 combine to +2, which is exactly the middle term of a perfect square. So for **any** whole numbers m > n the three numbers fit {{a^2 + b^2 = c^2}}. (In fact every primitive triple arises this way for a suitable choice of m and n.)",
      strategies: ["Find a pattern", "Try small cases", "Spot a scaled triple", "Check by substituting"],
      thinkDeeper:
        "How many right-angled triangles with whole-number sides have a shorter side of length 12? (Hint: {{12^2 = c^2 - b^2 = (c - b)(c + b)}}. Which factor pairs of 144 can you use?) Can 12 ever be the hypotenuse?",
    },
    // -----------------------------------------------------------------------
    {
      id: "sohcahtoa",
      heading: "SOH CAH TOA",
      discovery: {
        problem:
          "Draw three right-angled triangles, all with a 35° angle: one with hypotenuse 5 cm, one with 10 cm, one with 15 cm. For each, measure the side opposite the 35° angle and work out {{\"opposite\"/\"hypotenuse\"}}. What do you notice? Now repeat with a 50° angle.",
        idea:
          "For 35° the ratio comes out at about 0.57 every time; for 50° it is about 0.77. All right-angled triangles with a 35° angle are **similar** (same shape, different size), so the ratio of any two of their sides is fixed. That fixed ratio depends only on the angle — your calculator stores it as **sin 35°** ≈ 0.574.",
      },
      body:
        "**Label the sides relative to the angle you care about (θ):**\n\n- **Hypotenuse (H)** — opposite the right angle; the longest side. It never changes.\n- **Opposite (O)** — across from θ; it does not touch θ.\n- **Adjacent (A)** — next to θ, but not the hypotenuse.\n\nThe three ratios:\n\n    {{sin theta = O/H}}    {{cos theta = A/H}}    {{tan theta = O/A}}\n\n**SOH CAH TOA.** To choose: tick the two sides involved (the one you know and the one you want). The ratio that uses those two letters is the one to use.\n\n**Finding a side.** Write the ratio, substitute, rearrange.\n\n- Unknown on **top**: multiply. {{sin 38° = x/12}} → {{x = 12 sin 38°}} = 7.39 cm.\n- Unknown on the **bottom**: divide. {{cos 34° = 8.5/x}} → {{x = 8.5/(cos 34°)}} = 10.3 cm.\n\nA formula triangle (O over S × H, etc.) does the same rearranging, but the algebra is more reliable — and you need it anyway for multi-step problems.\n\n**Finding an angle.** Work out the ratio, then use the inverse function ({{sin^(-1)}}, {{cos^(-1)}}, {{tan^(-1)}}, the SHIFT key):\n\n    {{tan theta = 5/8}} → {{theta = tan^(-1)(5/8)}} = 32.0°\n\n**Calculator in degrees.** Check the D on the screen. In radians {{sin 30}} gives −0.988 instead of 0.5.\n\n**Multi-step problems.** When two right-angled triangles share a side, work out the shared side in the first triangle, then use it in the second. **Keep the full calculator value** (use ANS or store it) — rounding the shared side early can change your final 3 s.f. answer.\n\n| You know | You want | Use |\n|---|---|---|\n| two sides | the third side | Pythagoras |\n| a side and an angle | another side | SOH CAH TOA |\n| two sides | an angle | inverse SOH CAH TOA |\n\n> Sides to 3 s.f., angles to 1 d.p. — unless the question says otherwise.",
      diagram: `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A right-angled triangle with angle theta at the bottom left. The longest side, opposite the right angle, is labelled hypotenuse H. The vertical side across from theta is labelled opposite O. The horizontal side next to theta is labelled adjacent A."><rect x="0" y="0" width="480" height="290" fill="#ffffff"/><polygon points="80,240 360,240 360,80" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><path d="M348,240 L348,228 L360,228" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M120,240 A40,40 0 0 0 114.75,220.19" fill="none" stroke="#b91c1c" stroke-width="2"/><g font-family="sans-serif" font-size="14" fill="#1f2937"><text x="128" y="234" fill="#b91c1c" font-weight="bold">θ</text><text x="68" y="256">P</text><text x="364" y="256">Q</text><text x="364" y="76">R</text><text x="196" y="146" text-anchor="middle" transform="rotate(-29.7 196 146)" font-weight="bold">hypotenuse (H)</text><text x="370" y="165" font-weight="bold">opposite (O)</text><text x="220" y="264" text-anchor="middle" font-weight="bold">adjacent (A)</text></g><g font-family="sans-serif" font-size="12" fill="#334155"><text x="370" y="182">across from θ</text><text x="220" y="280" text-anchor="middle">touches θ, not the hypotenuse</text></g></svg>`,
      diagramCaption:
        "Label from the angle: H is opposite the right angle, O is across from θ, A is the other side touching θ. Move θ to the other acute angle and O and A swap.",
      workedExamples: [
        {
          title: "Unknown on the bottom",
          problem:
            "Triangle PQR has a right angle at Q. Angle QPR = 34° and PQ = 8.5 cm. Work out the length of PR. Give your answer correct to 3 significant figures.",
          steps: [
            "Label from the 34° angle at P: PR is opposite the right angle, so it is H (wanted). PQ touches P, so it is A = 8.5 (known).",
            "A and H → **CAH**: {{cos 34° = 8.5/(PR)}}.",
            "The unknown is on the bottom, so multiply both sides by PR and divide by cos 34°: {{PR = 8.5/(cos 34°)}}.",
            "{{PR = 8.5 ÷ 0.82903…}} = 10.2528… = 10.3 cm (3 s.f.).",
            "Check: the hypotenuse (10.3) is longer than the adjacent (8.5). ✓",
          ],
          answer: "PR = 10.3 cm",
          yourTurn: {
            question:
              "Your turn: in a right-angled triangle, the side opposite a 52° angle is 6.4 cm. Work out the length of the hypotenuse in cm, correct to 3 significant figures.",
            answer: { type: "number", value: 8.12, tolerance: 0.005, display: "8.12 cm" },
            solution:
              "O and H → SOH: {{sin 52° = 6.4/x}}, so {{x = 6.4/(sin 52°) = 6.4 ÷ 0.78801…}} = 8.1217… = 8.12 cm.",
          },
        },
        {
          title: "Two triangles sharing a side",
          problem:
            "A, D and C lie on a straight horizontal line, with D between A and C. B is vertically above D, so angle ADB = angle CDB = 90°. AB = 10 cm, angle BAD = 35° and DC = 4 cm. Work out the size of angle BCD. Give your answer correct to 1 decimal place.",
          steps: [
            "The shared side is BD. Find it in triangle ABD first.",
            "In ABD, from the 35° angle: AB is H = 10, BD is O (wanted). SOH: {{BD = 10 sin 35°}} = 5.7357… cm. **Keep this value in the calculator.**",
            "In BCD, from angle C: BD is O = 5.7357…, DC is A = 4. TOA: {{tan C = (5.7357…)/4}} = 1.4339…",
            "{{C = tan^(-1)(1.4339…)}} = 55.108…° = 55.1° (1 d.p.).",
          ],
          answer: "Angle BCD = 55.1°",
          yourTurn: {
            question:
              "Your turn: in a right-angled triangle, the side adjacent to angle x is 7.2 cm and the hypotenuse is 11.5 cm. Work out x in degrees, correct to 1 decimal place.",
            answer: { type: "number", value: 51.2, tolerance: 0.05, display: "51.2°" },
            solution:
              "A and H → CAH: {{cos x = 7.2/11.5}} = 0.62608…, so {{x = cos^(-1)(0.62608…)}} = 51.24…° = 51.2°.",
          },
        },
      ],
      keyPoints: [
        "Label H first (opposite the right angle), then O (across from θ) and A (touching θ).",
        "{{sin theta = O/H}}, {{cos theta = A/H}}, {{tan theta = O/A}}: pick the ratio that links the two sides in play.",
        "Unknown side on top → multiply; unknown side on the bottom → divide.",
        "Finding an angle → inverse trig ({{sin^(-1)}}, {{cos^(-1)}}, {{tan^(-1)}}). Calculator in degrees.",
        "In multi-step problems keep full accuracy for intermediate values; round only the final answer.",
        "No angle given or wanted? Then it's Pythagoras, not trig.",
      ],
      whyItWorks:
        "Every right-angled triangle with an angle θ has angles θ, 90° and 90° − θ, so any two of them are **similar** — one is an enlargement of the other. Enlarging multiplies every side by the same scale factor k, so a ratio such as {{O/H}} becomes {{(kO)/(kH) = O/H}}: unchanged. The ratio therefore depends on the angle alone, which is why it can be stored on a calculator as a single number, sin θ. The same argument works for cos and tan.",
      strategies: ["Label the sides first", "Draw a diagram", "Work through a shared side", "Estimate first"],
      thinkDeeper:
        "sin θ can never be bigger than 1 — why not? Yet tan θ can be as large as you like: what happens to the triangle as θ gets close to 90°? Finally, for which angle is sin θ = cos θ, and why must it be that one?",
    },
    // -----------------------------------------------------------------------
    {
      id: "bearings-elevation",
      heading: "Bearings, elevation & depression",
      discovery: {
        problem:
          "Marcus walks from his HDB block to the MRT station on a bearing of 060°. On the way home, what bearing does he walk on? Sketch it with a North line at each end. Then: a lighthouse keeper looks *down* at a boat at 25° below the horizontal. The sailor looks *up* at the keeper. At what angle above the horizontal does the sailor look?",
        idea:
          "The two North lines are parallel, so the angle at the station between North and the path home is 60° + 180° = 240° (co-interior angles add to 180°). The return bearing is **240°** — always add or subtract 180°. And the two horizontals (at the lighthouse top and at sea level) are parallel too, so the angle of depression and the angle of elevation are **alternate angles**: both 25°.",
      },
      body:
        "**Three-figure bearings** describe a direction:\n\n1. Start facing **North**.\n2. Turn **clockwise**.\n3. Write the angle with **three figures**: 060°, 145°, 008°, 270°.\n\n'The bearing of B **from** A' means: stand at A, draw North at A, measure clockwise to B.\n\n**Back bearings.** The bearing of A from B differs from the bearing of B from A by exactly 180°:\n\n- if the bearing is less than 180°, **add** 180° (060° → 240°);\n- if it is 180° or more, **subtract** 180° (295° → 115°).\n\nThe reason is the parallel North lines: the angles on the same side of the path between them are co-interior and add to 180°.\n\n**Bearings + Pythagoras + trig.** A journey on a bearing θ for d km moves you\n\n    East: {{d sin theta}}    North: {{d cos theta}}\n\n(for θ between 0° and 90°; in other quadrants draw the triangle and read off the directions). Two legs at **right angles** to each other — like 070° then 160° — form a right-angled triangle directly: use Pythagoras for the distance and {{tan^(-1)}} for the angle, then **convert the angle into a bearing** by adding or subtracting from the known bearing.\n\n**Angles of elevation and depression** are always measured from the **horizontal**:\n\n- **Elevation** — looking *up* from the horizontal.\n- **Depression** — looking *down* from the horizontal.\n\nThe angle of depression from P to Q equals the angle of elevation from Q to P (alternate angles between parallel horizontals). Put it at the **bottom** of the triangle, where the right angle is easy to see.\n\n> Exam technique: draw a big sketch, put a North arrow at **every** point where a bearing is measured, and mark the right angle before using any trig.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: points A and B with North lines at each. The bearing of B from A is 060 degrees, measured clockwise from North at A. The bearing of A from B is 240 degrees, measured clockwise from North at B. Right: a cliff top P and a boat Q. The angle of depression from P, below the horizontal, equals the angle of elevation from Q, above the ground."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><line x1="278" y1="20" x2="278" y2="285" stroke="#cbd5e1" stroke-width="1"/><g stroke="#334155" stroke-width="1.5"><line x1="60" y1="250" x2="60" y2="130"/><polygon points="60,122 55,134 65,134" fill="#334155"/><line x1="224.54" y1="155" x2="224.54" y2="40"/><polygon points="224.54,32 219.54,44 229.54,44" fill="#334155"/></g><line x1="60" y1="250" x2="224.54" y2="155" stroke="#1f2937" stroke-width="2"/><path d="M60,210 A40,40 0 0 1 94.64,230" fill="none" stroke="#b91c1c" stroke-width="2"/><path d="M224.54,125 A30,30 0 1 1 198.56,170" fill="none" stroke="#2563eb" stroke-width="2"/><circle cx="60" cy="250" r="3" fill="#1f2937"/><circle cx="224.54" cy="155" r="3" fill="#1f2937"/><g font-family="sans-serif" font-size="13" fill="#1f2937"><text x="55" y="118" text-anchor="middle">N</text><text x="224.54" y="28" text-anchor="middle">N</text><text x="48" y="266">A</text><text x="210" y="150">B</text><text x="84" y="206" fill="#b91c1c" font-weight="bold">060°</text><text x="244" y="184" fill="#2563eb" font-weight="bold">240°</text></g><rect x="285" y="90" width="25" height="170" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><line x1="280" y1="260" x2="475" y2="260" stroke="#334155" stroke-width="1.5"/><line x1="310" y1="90" x2="472" y2="90" stroke="#334155" stroke-width="1.2" stroke-dasharray="5 4"/><line x1="310" y1="90" x2="460" y2="260" stroke="#1f2937" stroke-width="2"/><path d="M345,90 A35,35 0 0 1 333.16,116.24" fill="none" stroke="#b91c1c" stroke-width="2"/><path d="M425,260 A35,35 0 0 1 436.84,233.76" fill="none" stroke="#b91c1c" stroke-width="2"/><polygon points="448,260 472,260 467,268 453,268" fill="#bae6fd" stroke="#334155"/><g font-family="sans-serif" font-size="13" fill="#1f2937"><text x="302" y="82">P</text><text x="462" y="284">Q</text><text x="350" y="108" fill="#b91c1c">depression</text><text x="418" y="252" fill="#b91c1c" text-anchor="end">elevation</text><text x="440" y="84" fill="#334155" font-size="11">horizontal</text></g></svg>`,
      diagramCaption:
        "Left: a bearing and its back bearing differ by 180°. Right: the angle of depression from P equals the angle of elevation from Q — they are alternate angles between parallel horizontals.",
      workedExamples: [
        {
          title: "Two legs at right angles",
          problem:
            "A ship sails 12 km from port A on a bearing of 070° to a buoy B. It then sails 9 km on a bearing of 160° to a lighthouse C. (a) Work out the distance AC. (b) Work out the bearing of A from C, correct to 1 decimal place.",
          steps: [
            "Sketch with North lines at A and B. The back bearing of A from B is 070° + 180° = 250°. The ship leaves B on 160°, so angle ABC = 250° − 160° = 90°. A right-angled triangle!",
            "(a) {{AC = sqrt(12^2 + 9^2) = sqrt(144 + 81) = sqrt(225) = 15}} km (a 3-4-5 triangle scaled by 3).",
            "(b) First the bearing of C from A. Angle BAC: {{tan(BAC) = 9/12}}, so {{BAC = tan^(-1)(0.75)}} = 36.869…°.",
            "C is clockwise of B as seen from A, so the bearing of C from A is 070° + 36.869…° = 106.869…°.",
            "Back bearing: 106.869…° + 180° = 286.869…° = **286.9°**.",
          ],
          answer: "(a) 15 km  (b) 286.9°",
          yourTurn: {
            question: "Your turn: the bearing of B from A is 118°. Work out the bearing of A from B, in degrees.",
            answer: { type: "number", value: 298, display: "298°" },
            solution: "118° is less than 180°, so add 180°: 118° + 180° = 298°.",
          },
        },
        {
          title: "Elevation and depression",
          problem:
            "Wei Ling stands on horizontal ground 40 m from the foot of a vertical tower. The angle of elevation of the top of the tower from her position on the ground is 27°. Work out the height of the tower, correct to 3 significant figures.",
          steps: [
            "Sketch: horizontal ground 40 m, vertical tower h, right angle at the foot, 27° at Wei Ling measured up from the horizontal.",
            "From the 27° angle: h is O (wanted), 40 m is A (known). TOA: {{tan 27° = h/40}}.",
            "{{h = 40 tan 27°}} = 20.381… = 20.4 m (3 s.f.).",
          ],
          answer: "20.4 m",
          yourTurn: {
            question:
              "Your turn: from the top of a vertical cliff 65 m high, the angle of depression of a boat at sea level is 18°. How far is the boat from the foot of the cliff? Give your answer in metres, correct to 3 significant figures.",
            answer: { type: "number", value: 200, tolerance: 0.5, display: "200 m" },
            solution:
              "The angle of elevation from the boat is also 18° (alternate angles). TOA: {{tan 18° = 65/d}}, so {{d = 65/(tan 18°)}} = 200.049… = 200 m (3 s.f.).",
          },
        },
      ],
      keyPoints: [
        "Bearings: from North, clockwise, three figures (045°, not 45°).",
        "'Bearing of B from A' → North line and protractor at A.",
        "Back bearing = bearing ± 180°.",
        "North lines are parallel: use co-interior (sum 180°) and alternate angles to find angles inside the triangle.",
        "Elevation and depression are measured from the horizontal, never the vertical.",
        "Angle of depression from P to Q = angle of elevation from Q to P.",
      ],
      whyItWorks:
        "All North lines point the same way, so they are **parallel**. The path AB is a transversal crossing two parallel lines. At A the bearing θ is the angle from North clockwise to AB. At B, the angle from North (going anticlockwise) round to BA is co-interior with θ, so it is 180° − θ — which makes the clockwise angle from North at B to BA equal to 360° − (180° − θ) = θ + 180°. Elevation and depression work the same way: the horizontal at the observer and the horizontal at sea level are parallel, and the line of sight is a transversal, so the two angles are alternate and equal.",
      strategies: ["Draw a diagram", "Use parallel-line angle facts", "Split into components", "Work backwards"],
      thinkDeeper:
        "Three towns form an equilateral triangle. The bearing of Q from P is 040°, and R is east of the line PQ. Find the bearing of R from P, of R from Q and of P from R. Does the answer change if R is on the other side?",
    },
    // -----------------------------------------------------------------------
    {
      id: "three-d",
      heading: "Pythagoras and trigonometry in 3D",
      discovery: {
        problem:
          "A shoebox measures 8 cm by 6 cm by 5 cm. What is the longest straight chopstick that will fit inside it, lying from one bottom corner to the opposite top corner? You only know how to use Pythagoras in flat triangles — can you find two flat triangles that do the job?",
        idea:
          "First go across the base: the base diagonal is {{sqrt(8^2 + 6^2) = 10}} cm. That diagonal, the vertical edge (5 cm) and the chopstick make a right-angled triangle standing up inside the box. So the chopstick is {{sqrt(10^2 + 5^2) = sqrt(125)}} ≈ 11.2 cm. Two flat right-angled triangles solved a 3D problem — and combining them gives {{sqrt(8^2 + 6^2 + 5^2)}}.",
      },
      body:
        "3D questions are 2D questions in disguise. The method:\n\n1. Find the **right-angled triangle** that contains what you want.\n2. **Redraw it flat**, on its own, with the right angle marked.\n3. Work out any missing side you need (often a base diagonal) from **another** right-angled triangle first.\n4. Use Pythagoras or SOH CAH TOA.\n\n**Space diagonal of a cuboid** (length a, width b, height c):\n\n    {{d = sqrt(a^2 + b^2 + c^2)}}\n\nIt is just Pythagoras twice: base diagonal {{sqrt(a^2 + b^2)}}, then with the height.\n\n**The angle between a line and a plane.** Imagine a light directly overhead: the line casts a *shadow* (its **projection**) on the plane. The angle between the line and the plane is the angle between the line and its shadow. For the space diagonal AG of a cuboid on its base ABCD, the shadow of AG is the base diagonal AC, and the angle is GAC — in triangle ACG, which has its right angle at C (because the edge CG is vertical).\n\n**Pyramids.** For a right pyramid with apex V above the centre M of the base:\n\n- the height VM meets the base at 90°;\n- on a square base of side s, the distance from a corner to M is **half the diagonal**: {{(s sqrt(2))/2}};\n- the angle between a slant edge VA and the base is angle VAM;\n- the angle between a sloping face and the base uses the midpoint of a base edge instead (distance {{s/2}} from M).\n\n**Cones** work the same way: radius, height and slant height form a right-angled triangle, {{l^2 = r^2 + h^2}}.\n\n> The angle you want is almost never at the right angle, and it must be in a triangle whose right angle you can *justify* (a vertical edge meeting a horizontal face).",
      diagram: `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cuboid ABCDEFGH, 8 cm long, 6 cm deep and 5 cm high. The space diagonal AG is drawn from a front bottom corner to the back top corner. The base diagonal AC is dashed. Triangle ACG is shaded with a right angle at C, and the angle theta at A between AG and AC is the angle between the diagonal and the base."><rect x="0" y="0" width="480" height="290" fill="#ffffff"/><polygon points="80,250 380,190 380,60" fill="#fecaca" fill-opacity="0.55" stroke="none"/><g stroke="#334155" stroke-width="1.8" fill="none"><line x1="80" y1="250" x2="300" y2="250"/><line x1="300" y1="250" x2="300" y2="120"/><line x1="300" y1="120" x2="80" y2="120"/><line x1="80" y1="120" x2="80" y2="250"/><line x1="300" y1="250" x2="380" y2="190"/><line x1="380" y1="190" x2="380" y2="60"/><line x1="380" y1="60" x2="300" y2="120"/><line x1="80" y1="120" x2="160" y2="60"/><line x1="160" y1="60" x2="380" y2="60"/></g><g stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="5 4" fill="none"><line x1="80" y1="250" x2="160" y2="190"/><line x1="160" y1="190" x2="380" y2="190"/><line x1="160" y1="190" x2="160" y2="60"/></g><line x1="80" y1="250" x2="380" y2="190" stroke="#2563eb" stroke-width="2" stroke-dasharray="7 4"/><line x1="80" y1="250" x2="380" y2="60" stroke="#b91c1c" stroke-width="2.4"/><path d="M370.19,191.96 L370.19,181.96 L380,180" fill="none" stroke="#1f2937" stroke-width="1.3"/><path d="M119.23,242.16 A40,40 0 0 0 113.79,228.6" fill="none" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="13" fill="#1f2937"><text x="66" y="266">A</text><text x="298" y="268">B</text><text x="388" y="200">C</text><text x="146" y="186">D</text><text x="66" y="118">E</text><text x="304" y="136">F</text><text x="386" y="56">G</text><text x="150" y="54">H</text><text x="124" y="240" font-weight="bold">θ</text><text x="190" y="268" text-anchor="middle">8 cm</text><text x="346" y="236">6 cm</text><text x="388" y="128">5 cm</text><text x="214" y="142" fill="#b91c1c" font-weight="bold">AG</text><text x="236" y="236" fill="#2563eb">AC</text></g></svg>`,
      diagramCaption:
        "The space diagonal AG, the base diagonal AC (its shadow on the base) and the vertical edge CG form a right-angled triangle with the right angle at C. The angle θ between AG and the base is angle GAC.",
      workedExamples: [
        {
          title: "Space diagonal and its angle with the base",
          problem:
            "The diagram shows a cuboid ABCDEFGH with AB = 8 cm, BC = 6 cm and CG = 5 cm. (a) Work out the length of AG, giving your answer as a surd in its simplest form. (b) Work out the angle between AG and the base ABCD, correct to 1 decimal place.",
          steps: [
            "(a) Base triangle ABC (right angle at B): {{AC^2 = 8^2 + 6^2 = 100}}, so AC = 10 cm.",
            "Triangle ACG (right angle at C, since CG is vertical): {{AG^2 = AC^2 + CG^2 = 100 + 25 = 125}}.",
            "{{AG = sqrt(125) = sqrt(25 * 5) = 5 sqrt(5)}} cm (≈ 11.2 cm).",
            "(b) The projection of AG on the base is AC, so the angle is GAC. In triangle ACG: CG is O = 5, AC is A = 10.",
            "{{tan(GAC) = 5/10}}, so {{GAC = tan^(-1)(0.5)}} = 26.565…° = 26.6°.",
          ],
          answer: "(a) {{5 sqrt(5)}} cm  (b) 26.6°",
          yourTurn: {
            question:
              "Your turn: a cuboid measures 12 cm by 4 cm by 3 cm. Work out the length of its space diagonal, in cm.",
            answer: { type: "number", value: 13, display: "13 cm" },
            solution:
              "{{d = sqrt(12^2 + 4^2 + 3^2) = sqrt(144 + 16 + 9) = sqrt(169) = 13}} cm. (Base diagonal {{sqrt(160)}}, then with height 3.)",
          },
        },
        {
          title: "Square-based pyramid",
          problem:
            "VABCD is a right pyramid with a square base ABCD of side 10 cm. The apex V is vertically above the centre M of the base, and each slant edge (VA, VB, VC, VD) is 13 cm. Work out (a) the height VM, (b) the angle between VA and the base. Give your answers correct to 3 s.f. and 1 d.p. respectively.",
          steps: [
            "The base diagonal: {{AC = sqrt(10^2 + 10^2) = sqrt(200) = 10 sqrt(2)}} cm. M is its midpoint, so {{AM = 5 sqrt(2)}} cm (≈ 7.07 cm).",
            "(a) Triangle VAM has its right angle at M. {{VM^2 = VA^2 - AM^2 = 169 - 50 = 119}}.",
            "{{VM = sqrt(119)}} = 10.908… = 10.9 cm (3 s.f.).",
            "(b) The shadow of VA on the base is AM, so the angle is VAM. AM is A, VA is H: {{cos(VAM) = (5 sqrt(2))/13}} = 0.54392…",
            "{{VAM = cos^(-1)(0.54392…)}} = 57.048…° = 57.0°.",
          ],
          answer: "(a) 10.9 cm  (b) 57.0°",
        },
      ],
      keyPoints: [
        "Find the right-angled triangle, redraw it flat, mark the right angle.",
        "Space diagonal of a cuboid: {{sqrt(a^2 + b^2 + c^2)}}.",
        "Angle between a line and a plane = angle between the line and its projection (shadow) on the plane.",
        "Right pyramid: apex above the centre; corner-to-centre on a square base = half the diagonal.",
        "Often you need one triangle to find a side (a base diagonal) before the triangle you actually want.",
        "Keep exact or full calculator values between the two steps.",
      ],
      whyItWorks:
        "Why is the angle at C a right angle? The edge CG is vertical, so it is perpendicular to **every** line in the horizontal base through C — not just the edges BC and CD, but the diagonal AC too. That is what makes triangle ACG right-angled, and it is why we can use Pythagoras twice:\n\n    {{AG^2 = AC^2 + CG^2 = (a^2 + b^2) + c^2}}\n\nThe 'shadow' definition of the angle with a plane is the natural one: of all the angles AG makes with lines in the base through A, the angle with its own projection AC is the **smallest**.",
      strategies: ["Draw a diagram", "Redraw the 2D triangle", "Work in stages", "Use symmetry"],
      thinkDeeper:
        "In a cube, find the angle between a space diagonal and the base, and the angle between a space diagonal and an edge that meets it. (Exact answers: one is {{tan^(-1)(1/sqrt(2))}}, the other {{cos^(-1)(1/sqrt(3))}}.) Do the two angles add up to 90°? Why or why not?",
    },
    // -----------------------------------------------------------------------
    {
      id: "exact-values",
      heading: "Exact trig values",
      discovery: {
        problem:
          "Take a square of side 1 and cut it along a diagonal. What are the angles and the sides of each half? Now take an equilateral triangle of side 2 and cut it down its line of symmetry. What are the angles and sides of each half? Use your two triangles to write down sin 45°, cos 60° and tan 30° as exact numbers — no calculator.",
        idea:
          "Half a square is a 45°-45°-90° triangle with legs 1 and 1, so the hypotenuse is {{sqrt(2)}}: {{sin 45° = 1/sqrt(2) = sqrt(2)/2}}. Half the equilateral triangle has angles 30°, 60°, 90°, hypotenuse 2, short side 1 and height {{sqrt(2^2 - 1^2) = sqrt(3)}}. So {{cos 60° = 1/2}} and {{tan 30° = 1/sqrt(3) = sqrt(3)/3}}. Two triangles hold every exact value you need.",
      },
      body:
        "Your calculator gives {{sin 60°}} = 0.866025…, but the **exact** value is {{sqrt(3)/2}}. H+ questions, and any question that says *exact value* or *without a calculator*, expect the surd.\n\n**The two triangles** (learn to *draw* them, not just the table):\n\n- **45°-45°-90°**: sides 1, 1, {{sqrt(2)}}.\n- **30°-60°-90°**: sides 1, {{sqrt(3)}}, 2 — the 1 is opposite 30°, the {{sqrt(3)}} is opposite 60°.\n\n| | 0° | 30° | 45° | 60° | 90° |\n|---|---|---|---|---|---|\n| sin | 0 | {{1/2}} | {{sqrt(2)/2}} | {{sqrt(3)/2}} | 1 |\n| cos | 1 | {{sqrt(3)/2}} | {{sqrt(2)/2}} | {{1/2}} | 0 |\n| tan | 0 | {{sqrt(3)/3}} | 1 | {{sqrt(3)}} | no value |\n\n**Patterns that help you remember:**\n\n- The sin row is {{sqrt(0)/2}}, {{sqrt(1)/2}}, {{sqrt(2)/2}}, {{sqrt(3)/2}}, {{sqrt(4)/2}}; the cos row is the same list backwards.\n- {{sin theta = cos(90° - theta)}}: sin 30° = cos 60°, sin 60° = cos 30°.\n- tan 90° has no value: the 'opposite' side would be infinitely long compared with the adjacent.\n- {{1/sqrt(2) = sqrt(2)/2}} and {{1/sqrt(3) = sqrt(3)/3}} — rationalised forms are the ones to give.\n\n**Exact-answer problems.** Replace the trig value by its surd and simplify:\n\n    {{x = 7 tan 60° = 7 sqrt(3)}}\n    {{y = 6 tan 30° = 6 * sqrt(3)/3 = 2 sqrt(3)}}\n\nAnd you can *work backwards*: if {{cos theta = sqrt(3)/2}} with θ acute, then θ = 30°.\n\n> {{sin^2 60°}} means {{(sin 60°)^2 = (sqrt(3)/2)^2 = 3/4}} — square the value, not the angle.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: a right-angled isosceles triangle with legs 1 and 1, hypotenuse root 2, and two 45 degree angles. Right: an equilateral triangle of side 2 split by its height into two halves; the shaded half has sides 1, root 3 and 2 and angles 30, 60 and 90 degrees."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><polygon points="40,250 40,110 180,250" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><path d="M40,238 L52,238 L52,250" fill="none" stroke="#1f2937" stroke-width="1.5"/><polygon points="260,270 360,96.8 360,270" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><polygon points="360,96.8 460,270 360,270" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><line x1="360" y1="96.8" x2="360" y2="270" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="6 4"/><path d="M372,270 L372,258 L360,258" fill="none" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="14" fill="#1f2937"><text x="110" y="60" text-anchor="middle" font-weight="bold">45°–45°–90°</text><text x="360" y="60" text-anchor="middle" font-weight="bold">half an equilateral triangle</text><text x="26" y="185">1</text><text x="110" y="270" text-anchor="middle">1</text><text x="122" y="172">√2</text><text x="43" y="148" font-size="12">45°</text><text x="140" y="244">45°</text><text x="296" y="180" text-anchor="end">2</text><text x="424" y="180">2</text><text x="410" y="288" text-anchor="middle">1</text><text x="310" y="288" text-anchor="middle">1</text><text x="352" y="200" text-anchor="end">√3</text><text x="363" y="152" font-size="12">30°</text><text x="440" y="262" text-anchor="end">60°</text></g></svg>`,
      diagramCaption:
        "The two triangles behind every exact value. Halving a square gives 1, 1, {{sqrt(2)}}; halving an equilateral triangle of side 2 gives 1, {{sqrt(3)}}, 2.",
      workedExamples: [
        {
          title: "An exact side",
          problem:
            "Triangle ABC has a right angle at B. Angle BAC = 60° and AB = 7 cm. Work out the exact length of BC.",
          steps: [
            "From the 60° angle at A: BC is O (wanted), AB is A = 7. TOA: {{tan 60° = (BC)/7}}.",
            "{{BC = 7 tan 60°}}.",
            "{{tan 60° = sqrt(3)}} (from the 30-60-90 triangle: opposite {{sqrt(3)}}, adjacent 1).",
            "So {{BC = 7 sqrt(3)}} cm.",
          ],
          answer: "{{7 sqrt(3)}} cm",
          yourTurn: {
            question:
              "Your turn: in a right-angled triangle, the side adjacent to a 30° angle is 6 cm. Find the exact length of the side opposite the 30° angle. Give your answer as a simplified surd.",
            answer: { type: "expression", expr: "2sqrt(3)", form: "surd", display: "{{2 sqrt(3)}} cm" },
            solution:
              "{{x = 6 tan 30° = 6 * sqrt(3)/3 = 2 sqrt(3)}} cm. (Or {{6/sqrt(3)}}, rationalised to {{2 sqrt(3)}}.)",
          },
        },
        {
          title: "Evaluate exactly",
          problem: "Without a calculator, show that {{sin 60° * cos 30° + tan^2 45° = 7/4}}.",
          steps: [
            "{{sin 60° = sqrt(3)/2}} and {{cos 30° = sqrt(3)/2}}, so their product is {{(sqrt(3) * sqrt(3))/(2 * 2) = 3/4}}.",
            "{{tan 45° = 1}}, so {{tan^2 45° = 1^2 = 1}}.",
            "Total: {{3/4 + 1 = 7/4}}, as required.",
          ],
          answer: "{{7/4}}",
          yourTurn: {
            question: "Your turn: work out the exact value of {{cos^2 30° - sin^2 30°}}. Give your answer as a fraction.",
            answer: { type: "fraction", n: 1, d: 2, display: "{{1/2}}" },
            solution:
              "{{cos^2 30° = (sqrt(3)/2)^2 = 3/4}} and {{sin^2 30° = (1/2)^2 = 1/4}}. {{3/4 - 1/4 = 1/2}}.",
          },
        },
      ],
      keyPoints: [
        "Draw the 1, 1, {{sqrt(2)}} triangle (45°) and the 1, {{sqrt(3)}}, 2 triangle (30°, 60°) — read every value off them.",
        "{{sin 30° = cos 60° = 1/2}}; {{sin 60° = cos 30° = sqrt(3)/2}}; {{sin 45° = cos 45° = sqrt(2)/2}}.",
        "{{tan 30° = sqrt(3)/3}}, {{tan 45° = 1}}, {{tan 60° = sqrt(3)}}; tan 90° has no value.",
        "Give rationalised forms: {{sqrt(2)/2}}, not {{1/sqrt(2)}}.",
        "{{sin^2 theta}} means {{(sin theta)^2}}.",
        "Work backwards: an exact ratio like {{sqrt(3)/2}} tells you the angle.",
      ],
      whyItWorks:
        "In the 45° triangle the legs are equal, so with legs 1 the hypotenuse is {{sqrt(1^2 + 1^2) = sqrt(2)}}. For 30° and 60°: every angle of an equilateral triangle is 60°, and the line of symmetry bisects the top angle (30°) and the base (side 2 → 1). Pythagoras gives the height {{sqrt(2^2 - 1^2) = sqrt(3)}}. Then each value is just a ratio of two of these sides — for example {{sin 60° = \"opposite\"/\"hypotenuse\" = sqrt(3)/2}}. Because trig ratios don't depend on the size of the triangle, these values are true for every triangle with those angles.",
      strategies: ["Draw a diagram", "Use symmetry", "Work backwards", "Rationalise the denominator"],
      thinkDeeper:
        "Extend the base of a 30-60-90 triangle (sides 1, {{sqrt(3)}}, 2) beyond the 30° vertex by 2 units, and join the new end to the top vertex. Use the isosceles triangle you have created to show that {{tan 15° = 1/(2 + sqrt(3)) = 2 - sqrt(3)}}.",
    },
  ],
  learn: {
    flashcards: [
      { front: "State Pythagoras' theorem.", back: "In a right-angled triangle with hypotenuse c: {{a^2 + b^2 = c^2}}." },
      { front: "Which side is the hypotenuse?", back: "The side opposite the right angle — always the longest side." },
      { front: "Finding a shorter side with Pythagoras: add or subtract?", back: "Subtract: {{a = sqrt(c^2 - b^2)}}." },
      { front: "How do you test whether a triangle with sides 9, 12, 15 is right-angled?", back: "Check if the two smaller squares add to the largest: 81 + 144 = 225 = {{15^2}}. Yes, so it is right-angled." },
      { front: "Distance between {{(x_1, y_1)}} and {{(x_2, y_2)}}?", back: "{{sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)}} — Pythagoras on the horizontal and vertical gaps." },
      { front: "Four primitive Pythagorean triples to know.", back: "3-4-5, 5-12-13, 8-15-17, 7-24-25 (and their multiples)." },
      { front: "Euclid's formula for triples?", back: "For m > n > 0: {{(m^2 - n^2, 2mn, m^2 + n^2)}}." },
      { front: "SOH CAH TOA in full.", back: "{{sin theta = O/H}}, {{cos theta = A/H}}, {{tan theta = O/A}}." },
      { front: "Unknown side on the bottom, e.g. {{cos 40° = 9/x}}. What next?", back: "Divide: {{x = 9/(cos 40°)}}." },
      { front: "How do you find an angle from two sides?", back: "Work out the ratio, then use the inverse: {{sin^(-1)}}, {{cos^(-1)}} or {{tan^(-1)}}." },
      { front: "Three rules for a bearing.", back: "From North, clockwise, three figures (e.g. 075°)." },
      { front: "Bearing of B from A is 230°. Bearing of A from B?", back: "230° − 180° = 050°." },
      { front: "Angle of depression from P to Q = ?", back: "The angle of elevation from Q to P (alternate angles)." },
      { front: "Space diagonal of an a × b × c cuboid?", back: "{{sqrt(a^2 + b^2 + c^2)}}." },
      { front: "Angle between a line and a plane?", back: "The angle between the line and its projection (shadow) on the plane." },
      { front: "sin, cos, tan of 30°?", back: "{{1/2}}, {{sqrt(3)/2}}, {{sqrt(3)/3}}." },
      { front: "sin, cos, tan of 60°?", back: "{{sqrt(3)/2}}, {{1/2}}, {{sqrt(3)}}." },
      { front: "sin, cos, tan of 45°?", back: "{{sqrt(2)/2}}, {{sqrt(2)/2}}, 1." },
    ],
    mustKnow: [
      "Can I use Pythagoras' theorem to find a missing length — the hypotenuse or a shorter side?",
      "Can I use Pythagoras with surds, giving an exact answer such as {{2 sqrt(14)}}?",
      "Can I use Pythagoras in 3 dimensions, e.g. the space diagonal of a cuboid or the height of a pyramid?",
      "Can I use Pythagorean triples (3-4-5, 5-12-13, 8-15-17, 7-24-25) and their simple multiples as shortcuts (H+)?",
      "Can I use right-angled trigonometry (SOH CAH TOA) to find missing angles and lengths?",
      "Can I solve problems involving three-figure bearings, including back bearings?",
      "Can I solve problems involving angles of elevation and depression?",
      "Can I use trigonometry in 3 dimensions, including the angle between a line and a plane?",
      "Can I recall and use the exact values of sin, cos and tan for 0°, 30°, 45°, 60° and 90° from the 30-60-90 and 45-45-90 triangles (H+)?",
      "Can I find the height and area of an isosceles or equilateral triangle by splitting it into two right-angled triangles?",
      "Can I use the converse of Pythagoras to decide whether a triangle is right-angled?",
      "Can I solve multi-step problems through a shared side, keeping full accuracy until the end?",
    ],
    misconceptions: [
      { wrong: "{{a^2 + b^2 = c^2}} works for any triangle.", right: "Only for right-angled triangles. For other triangles you need the cosine rule." },
      { wrong: "To find a shorter side, square and add the two sides you know.", right: "Adding always gives the hypotenuse. For a shorter side, subtract the smaller square from the hypotenuse squared." },
      { wrong: "{{sqrt(9^2 + 12^2) = 9 + 12 = 21}}.", right: "You can't square-root term by term: {{sqrt(81 + 144) = sqrt(225) = 15}}." },
      { wrong: "The hypotenuse is the side opposite the angle I'm using.", right: "The hypotenuse is always opposite the **right angle**. Opposite and adjacent change with θ; the hypotenuse never does." },
      { wrong: "{{sin^(-1)}} means {{1/(sin)}}.", right: "{{sin^(-1) x}} is the *inverse*: the angle whose sine is x. It is not the reciprocal." },
      { wrong: "A bearing of 45° is fine.", right: "Bearings have three figures: 045°. And they are measured clockwise from North, not from East or anticlockwise." },
      { wrong: "The angle of depression is measured from the vertical cliff face.", right: "Both elevation and depression are measured from the **horizontal**." },
      { wrong: "The angle between AG and the base is angle GAB (using an edge of the base).", right: "Use the projection of AG on the base, which is the diagonal AC: the angle is GAC." },
    ],
    examMistakes: [
      "Calculator left in radians (or gradians), so {{sin 30°}} comes out as −0.988 and every trig answer is wrong.",
      "Rounding an intermediate length (e.g. BD = 5.7) and then losing the accuracy mark on the final answer — keep the full value in the calculator.",
      "Adding instead of subtracting when finding a shorter side, giving an answer longer than the hypotenuse without noticing.",
      "Measuring a bearing from the wrong point: 'the bearing of B from A' needs the North line at A.",
      "Writing {{x = 9 * cos 40°}} when the unknown is on the bottom of the ratio ({{cos 40° = 9/x}} gives {{x = 9/(cos 40°)}}).",
      "In 3D, using the edge AB or BC instead of the base diagonal AC as the side of the triangle, or giving a decimal when the question asks for an exact surd.",
    ],
    mnemonics: [
      {
        topic: "Trig ratios",
        device: "SOH CAH TOA (or: Some Old Horses Can Always Hear Their Owners Approach)",
        explanation: "Sin = Opposite ÷ Hypotenuse, Cos = Adjacent ÷ Hypotenuse, Tan = Opposite ÷ Adjacent.",
      },
      {
        topic: "Bearings",
        device: "N.C.3 — North, Clockwise, 3 figures",
        explanation: "Every bearing starts on a North line at the 'from' point, turns clockwise, and is written with three digits.",
      },
      {
        topic: "Exact sin values",
        device: "Root 0, 1, 2, 3, 4 — all over 2",
        explanation: "sin 0°, 30°, 45°, 60°, 90° = {{sqrt(0)/2}}, {{sqrt(1)/2}}, {{sqrt(2)/2}}, {{sqrt(3)/2}}, {{sqrt(4)/2}}. Read the same list backwards for cos.",
      },
    ],
    realWorld: [
      {
        title: "Building an HDB block",
        detail: "Builders check corners are square with the 3-4-5 rule: mark 3 m along one wall and 4 m along the other — if the diagonal is exactly 5 m, the corner is 90°.",
        emoji: "🏗️",
      },
      {
        title: "Navigation in the Singapore Strait",
        detail: "Ships and ferries plot courses as three-figure bearings; splitting a journey into North and East components with sin and cos is exactly how a position is worked out by dead reckoning.",
        emoji: "🚢",
      },
      {
        title: "Wheelchair ramps and roads",
        detail: "Building codes limit the angle of a ramp (about 1 in 12, roughly 4.8°). Designers use tan to turn a height into a ramp length — the same maths sets the gradient of roads up Mount Faber.",
        emoji: "♿",
      },
      {
        title: "Screens and phones",
        detail: "A '6.1-inch' phone or '55-inch' TV is measured along the diagonal. With the aspect ratio you can use Pythagoras to find the actual width and height.",
        emoji: "📱",
      },
    ],
    videos: [
      { title: "Pythagoras (including 3D)", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+pythagoras+3d" },
      { title: "Right-angled trigonometry: SOH CAH TOA", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+trigonometry+sohcahtoa" },
      { title: "Bearings and angles of elevation", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+bearings+angles+of+elevation+depression" },
      { title: "Exact trig values from special triangles", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+exact+trig+values+30+45+60" },
    ],
    formulas: [
      { name: "Pythagoras' theorem", formula: "{{a^2 + b^2 = c^2}} (c the hypotenuse)", note: "Learn this — not given" },
      { name: "Converse of Pythagoras", formula: "If {{a^2 + b^2 = c^2}}, the angle opposite c is 90°", note: "Learn this — not given" },
      { name: "Distance between two points", formula: "{{d = sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2)}}", note: "Learn this — not given" },
      { name: "Space diagonal of a cuboid", formula: "{{d = sqrt(a^2 + b^2 + c^2)}}", note: "Learn this — not given" },
      { name: "Sine ratio", formula: "{{sin theta = \"opp\"/\"hyp\"}}", note: "Learn this — not given" },
      { name: "Cosine ratio", formula: "{{cos theta = \"adj\"/\"hyp\"}}", note: "Learn this — not given" },
      { name: "Tangent ratio", formula: "{{tan theta = \"opp\"/\"adj\"}}", note: "Learn this — not given" },
      { name: "Euclid's formula for triples (H+)", formula: "{{(m^2 - n^2, 2mn, m^2 + n^2)}} for m > n > 0", note: "Learn this — not given" },
      { name: "Back bearing", formula: "bearing ± 180°", note: "Learn this — not given" },
      { name: "Journey on bearing θ for distance d", formula: "East {{d sin theta}}, North {{d cos theta}} (0° < θ < 90°)", note: "Learn this — not given" },
      { name: "Exact values: 30°", formula: "{{sin 30° = 1/2}}, {{cos 30° = sqrt(3)/2}}, {{tan 30° = sqrt(3)/3}}", note: "Learn this — not given" },
      { name: "Exact values: 45°", formula: "{{sin 45° = cos 45° = sqrt(2)/2}}, {{tan 45° = 1}}", note: "Learn this — not given" },
      { name: "Exact values: 60°", formula: "{{sin 60° = sqrt(3)/2}}, {{cos 60° = 1/2}}, {{tan 60° = sqrt(3)}}", note: "Learn this — not given" },
      { name: "Cone slant height", formula: "{{l^2 = r^2 + h^2}}", note: "Learn this — not given" },
    ],
  },
};
