import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "solving-equations",
  title: "Linear & Simultaneous Equations",
  strand: "Algebra",
  icon: "🟰",
  summary: "Balance, rearrange, eliminate — the three moves behind almost every algebra mark on the paper.",
  intro:
    "Nearly every 4MA1 Higher paper asks you to solve a linear equation with fractions, change the subject of a formula and solve a pair of simultaneous equations — and the same skills sit inside quadratics, graphs, proof and kinematics questions. This chapter makes those moves automatic and explains *why* each one is legal, so you can handle the awkward versions: the subject appearing twice, minus signs in front of fractions, and word problems you have to turn into algebra yourself. The H+ section then takes simultaneous equations up to three unknowns.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "linear-equations",
      heading: "Linear equations",
      discovery: {
        problem:
          "Solve {{(2x - 1)/3 - (x + 2)/4 = 1}}.\n\nBefore you start: is there **one** number you could multiply every term by so that no fractions are left at all? What happens to the minus sign in front of the second fraction when you do?",
        idea:
          "Multiply every term by 12, the lowest common denominator (LCD):\n\n    {{4(2x - 1) - 3(x + 2) = 12}}\n\nThe minus sign belongs to the **whole** second fraction, so it multiplies both terms of {{(x + 2)}}: {{8x - 4 - 3x - 6 = 12}}, so {{5x - 10 = 12}}, {{5x = 22}} and {{x = 22/5 = 4.4}}.\n\nCheck: {{(8.8 - 1)/3 = 2.6}} and {{(4.4 + 2)/4 = 1.6}}, and {{2.6 - 1.6 = 1}} ✓. One multiplication turned a fiddly fraction equation into a bracket equation you already know how to solve.",
      },
      body:
        "A **linear equation** has the unknown only to the power 1 — no {{x^2}}, no {{1/x}}, no {{sqrt(x)}}. It has exactly one solution (or, in odd cases, none or infinitely many — see below).\n\n**The balance rule.** You may add, subtract, multiply or divide both sides by the same thing (never divide by 0). Each move produces a simpler equation with the **same** solution. Your job is to choose moves that strip everything away from x.\n\n**A reliable order for any linear equation**\n\n1. **Clear fractions** — multiply *every term on both sides* by the LCD of all the denominators.\n2. **Expand brackets** — watch the signs, especially a minus in front of a bracket.\n3. **Collect x-terms on one side**, numbers on the other. Usually move the *smaller* x-term so the coefficient stays positive.\n4. **Divide** by the coefficient of x. Leave the answer as an exact fraction unless asked for a decimal.\n5. **Check** by substituting into the *original* equation.\n\n**Unknowns on both sides.** For {{7x - 4 = 3x + 10}}, subtract 3x from both sides: {{4x - 4 = 10}}, so {{4x = 14}} and {{x = 7/2}}.\n\n**A minus in front of a bracket** multiplies every term inside:\n\n    {{5 - 2(x - 3) = 5 - 2x + 6 = 11 - 2x}}   (not {{5 - 2x - 6}})\n\n**Fractions: the LCD trick.** In {{x/3 + x/5 = 8}}, multiply every term by 15: {{5x + 3x = 120}}, so {{x = 15}}. When the numerator has two terms, put it in a bracket *before* you multiply — that is what protects you from the sign slip in the Discovery problem. If the equation is just one fraction on each side, such as {{(x + 1)/4 = (2x - 3)/3}}, you can **cross-multiply**: {{3(x + 1) = 4(2x - 3)}}.\n\n**Forming equations.** Exam questions often hide the equation in a context. Choose a letter for the unknown, write each quantity in terms of it, then find the fact that gives an *equals*:\n\n| Context | The fact that gives the equation |\n|---|---|\n| Angles in a triangle | sum to 180° |\n| Angles in a quadrilateral / around a point | sum to 360° |\n| Perimeter | add every side |\n| Ages | both people age by the same number of years |\n| Consecutive integers | {{n}}, {{n + 1}}, {{n + 2}} (even: {{2n}}, {{2n + 2}}) |\n| Two shapes or two prices | 'equal', 'the same as' or 'twice as much as' |\n\n**Odd cases.** If the x-terms cancel and you are left with something false, such as {{0 = 5}}, there is **no solution**. If you are left with something always true, such as {{0 = 0}}, the two sides were the same expression all along — an **identity**, true for every x (written with ≡).",
      diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with angle A labelled x plus 20 degrees, angle B labelled 3x minus 20 degrees and angle C labelled 2x degrees. Drawn to scale with x equal to 30, so the angles are 50, 70 and 60 degrees."><rect width="400" height="300" fill="#ffffff"/><polygon points="60,260 300,260 227.4,60.5" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><path d="M85,260 A25,25 0 0,0 76.1,240.85" fill="none" stroke="#334155" stroke-width="1.5"/><path d="M275,260 A25,25 0 0,1 291.45,236.5" fill="none" stroke="#334155" stroke-width="1.5"/><path d="M213.3,77.4 A22,22 0 0,0 234.9,81.2" fill="none" stroke="#334155" stroke-width="1.5"/><text x="48" y="278" font-size="14" font-family="sans-serif" fill="#1f2937">A</text><text x="304" y="278" font-size="14" font-family="sans-serif" fill="#1f2937">B</text><text x="222" y="52" font-size="14" font-family="sans-serif" fill="#1f2937">C</text><text x="108" y="248" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(x + 20)°</text><text x="246" y="246" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(3x − 20)°</text><text x="221" y="110" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2x°</text><text x="200" y="292" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">(x + 20) + (3x − 20) + 2x = 180</text></svg>`,
      diagramCaption:
        "Angles in a triangle sum to 180°, so {{(x + 20) + (3x - 20) + 2x = 180}}, giving {{6x = 180}} and {{x = 30}}. The triangle is drawn to scale: 50°, 70° and 60°.",
      workedExamples: [
        {
          title: "Brackets and unknowns on both sides",
          problem: "Solve {{5(2x - 3) - 2(x - 4) = 3(x + 1)}}.",
          steps: [
            "Expand each bracket. The −2 multiplies both terms: {{-2(x - 4) = -2x + 8}}.",
            "Left side: {{10x - 15 - 2x + 8 = 8x - 7}}. Right side: {{3x + 3}}.",
            "So {{8x - 7 = 3x + 3}}. Subtract 3x from both sides: {{5x - 7 = 3}}.",
            "Add 7: {{5x = 10}}. Divide by 5: {{x = 2}}.",
            "Check in the original: left {{5(1) - 2(-2) = 5 + 4 = 9}}; right {{3(3) = 9}} ✓.",
          ],
          answer: "{{x = 2}}",
        },
        {
          title: "Two fractions with a minus between them",
          problem: "Solve {{(x + 3)/4 - (x - 2)/6 = 2}}.",
          steps: [
            "The LCD of 4 and 6 is 12. Multiply every term by 12: {{3(x + 3) - 2(x - 2) = 24}}.",
            "Expand carefully — the minus multiplies both terms of the second bracket: {{3x + 9 - 2x + 4 = 24}}.",
            "Simplify: {{x + 13 = 24}}, so {{x = 11}}.",
            "Check: {{14/4 = 3.5}} and {{9/6 = 1.5}}, and 3.5 − 1.5 = 2 ✓.",
          ],
          answer: "{{x = 11}}",
          yourTurn: {
            question: "Your turn: solve {{(x + 5)/3 - (x - 1)/2 = 1}}.",
            answer: { type: "number", value: 7 },
            solution:
              "Multiply every term by 6: {{2(x + 5) - 3(x - 1) = 6}}. Expand: {{2x + 10 - 3x + 3 = 6}}, so {{-x + 13 = 6}} and {{x = 7}}. Check: {{12/3 - 6/2 = 4 - 3 = 1}} ✓.",
          },
        },
        {
          title: "Forming an equation from a context",
          problem:
            "A rectangle has length {{(2x + 5)}} cm and width {{(x + 1)}} cm. An equilateral triangle has sides of {{(x + 9)}} cm. The rectangle and the triangle have the same perimeter. Work out the length of one side of the triangle.",
          steps: [
            "Rectangle perimeter: {{2(2x + 5) + 2(x + 1) = 6x + 12}}.",
            "Triangle perimeter: {{3(x + 9) = 3x + 27}}.",
            "Same perimeter, so {{6x + 12 = 3x + 27}}. Subtract 3x: {{3x + 12 = 27}}, so {{3x = 15}} and {{x = 5}}.",
            "The question asks for the triangle's side, not x: {{x + 9 = 14}} cm.",
            "Check: rectangle 15 cm by 6 cm has perimeter 42 cm; triangle 3 × 14 = 42 cm ✓.",
          ],
          answer: "14 cm",
          yourTurn: {
            question:
              "Your turn: Arjun is 3 times as old as his sister Hana. In 8 years' time he will be twice as old as she will be. How old is Hana now? Give your answer in years.",
            answer: { type: "number", value: 8 },
            solution:
              "Let Hana be h now, so Arjun is 3h. In 8 years: {{3h + 8 = 2(h + 8)}}, so {{3h + 8 = 2h + 16}} and {{h = 8}}. Check: now 8 and 24; in 8 years 16 and 32, and 32 = 2 × 16 ✓.",
          },
        },
      ],
      keyPoints: [
        "Order of attack: clear fractions → expand → collect → divide → check.",
        "Multiply **every** term (including whole-number terms) by the LCD.",
        "Put a two-term numerator in a bracket before multiplying, so a minus sign hits both terms.",
        "Collect x on the side with the larger x-coefficient to avoid negative coefficients.",
        "Leave answers as exact fractions ({{22/5}}) unless a decimal is asked for.",
        "In context questions, answer the question asked — often a length or an age, not x itself.",
      ],
      whyItWorks:
        "If {{A = B}} then {{A + k = B + k}} and {{kA = kB}} for any number k — you have changed both sides by exactly the same amount. Every step is **reversible** (as long as k ≠ 0), so the new equation is true for exactly the same values of x as the old one. That is why the final line {{x = 2}} really is the solution of the messy original, not just of the last tidy line.\n\nMultiplying by the LCD works because each denominator divides it exactly: {{12 * (x + 3)/4 = 3(x + 3)}} — the fraction cancels and leaves a whole-number multiple of the numerator.\n\nThe one forbidden move is multiplying or dividing by 0. From {{0 * 4 = 0 * 9}} you cannot conclude 4 = 9. Later (quadratics) you will meet the sneaky version: dividing by x when x could be 0.",
      strategies: ["Use the inverse", "Make it simpler", "Introduce a variable", "Check by substituting"],
      thinkDeeper:
        "Find a value of k for which {{3(x + 2) = kx + 6}} has **infinitely many** solutions, and a value of k for which {{3(x + 2) = kx + 5}} has **no** solution. Explain both using the idea that a linear equation is really asking where two straight lines {{y = 3(x + 2)}} and {{y = kx + c}} meet.",
    },

    // ------------------------------------------------------------------ 2
    {
      id: "rearranging-once",
      heading: "Changing the subject (appears once)",
      discovery: {
        problem:
          "The volume of a sphere is {{V = 4/3 pi r^3}}. Mei has three spherical stress balls with volumes 500 cm³, 900 cm³ and 1200 cm³. She wants the radius of each.\n\nShe could solve three separate equations. Can you find **one** formula, starting {{r = ...}}, that does all three jobs at once? Think about how r is turned into V, step by step — and then undo it.",
        idea:
          "Building V from r: **cube** it, then **multiply by {{4/3 pi}}**. To get back, undo the steps in reverse order with inverse operations:\n\n    {{V = 4/3 pi r^3}}  →  {{3V = 4pi r^3}}  →  {{r^3 = (3V)/(4pi)}}  →  {{r = cbrt((3V)/(4pi))}}\n\nNow each radius is one calculator line: V = 500 gives {{r = cbrt(1500/(4pi)) = 4.92}} cm (3 s.f.). Changing the subject is just solving an equation once, in general, instead of again and again with numbers.",
      },
      body:
        "The **subject** of a formula is the letter on its own on one side: in {{v = u + at}}, v is the subject. **Changing the subject** means rearranging so a different letter is on its own — for example {{a = (v - u)/t}}.\n\n**It is exactly like solving an equation.** Treat every other letter as if it were a number and use the same balance moves. A useful check while you learn: replace the other letters with simple numbers, solve, and compare with your general answer.\n\n**Undo in reverse order.** Ask: *starting from the new subject, what was done to it, in what order?* Then undo the last operation first. A function-machine picture (see the diagram) makes the order visible.\n\n| Operation done to the subject | Undo it by |\n|---|---|\n| + a | − a |\n| × a | ÷ a |\n| squared | square root (± unless the context says positive) |\n| square-rooted | squared |\n| cubed | cube root (only one real cube root) |\n| put under a fraction ({{k/x}}) | multiply up, then divide: {{x = k/y}} |\n\n**Powers and roots.** If {{A = pi r^2}} then {{r^2 = A/pi}} and {{r = sqrt(A/pi)}}. Mathematically {{r = ± sqrt(A/pi)}}, but a radius is a length, so we keep only the positive root. In a context-free question, write ± when the subject was squared.\n\n**Isolate the root before squaring.** In {{T = 2pi sqrt(L/g)}}, divide by {{2pi}} *first* so the square root is alone: {{T/(2pi) = sqrt(L/g)}}. Then square both sides: {{T^2/(4 pi^2) = L/g}}. Squaring {{2pi sqrt(L/g)}} directly is fine too, but you must square the {{2pi}} as well — a common slip.\n\n**A negative subject term.** For {{y = 5 - 2x}}, add 2x to both sides first: {{y + 2x = 5}}, then {{2x = 5 - y}}, so {{x = (5 - y)/2}}. Keeping the subject's term positive avoids sign errors.\n\n**The subject in a denominator.** For {{P = k/V}}, multiply both sides by V: {{PV = k}}, then divide by P: {{V = k/P}}.\n\n**Using the new formula.** Exam questions often say *'Make r the subject… Hence find r when V = 500.'* Substitute only at the end, and keep full calculator accuracy before rounding to 3 s.f.",
      diagram: `<svg viewBox="0 0 460 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Function machines. Top row, forwards: r goes into cube, then multiply by four pi over three, giving V. Bottom row, backwards: V goes into multiply by three over four pi, then cube root, giving r."><rect width="460" height="210" fill="#ffffff"/><text x="230" y="20" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">Forwards: how V is built from r</text><circle cx="40" cy="55" r="20" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="40" y="60" font-size="15" font-style="italic" font-family="sans-serif" text-anchor="middle" fill="#1f2937">r</text><line x1="60" y1="55" x2="102" y2="55" stroke="#1f2937" stroke-width="1.5"/><polygon points="102,50 112,55 102,60" fill="#1f2937"/><rect x="112" y="35" width="100" height="40" rx="6" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="162" y="60" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">cube</text><line x1="212" y1="55" x2="242" y2="55" stroke="#1f2937" stroke-width="1.5"/><polygon points="242,50 252,55 242,60" fill="#1f2937"/><rect x="252" y="35" width="120" height="40" rx="6" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="312" y="60" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">× 4π ÷ 3</text><line x1="372" y1="55" x2="390" y2="55" stroke="#1f2937" stroke-width="1.5"/><polygon points="390,50 400,55 390,60" fill="#1f2937"/><circle cx="420" cy="55" r="20" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5"/><text x="420" y="60" font-size="15" font-style="italic" font-family="sans-serif" text-anchor="middle" fill="#1f2937">V</text><text x="230" y="118" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">Backwards: undo each step, last one first</text><circle cx="420" cy="155" r="20" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5"/><text x="420" y="160" font-size="15" font-style="italic" font-family="sans-serif" text-anchor="middle" fill="#1f2937">V</text><line x1="400" y1="155" x2="382" y2="155" stroke="#1f2937" stroke-width="1.5"/><polygon points="382,150 372,155 382,160" fill="#1f2937"/><rect x="252" y="135" width="120" height="40" rx="6" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/><text x="312" y="160" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">× 3 ÷ 4π</text><line x1="252" y1="155" x2="222" y2="155" stroke="#1f2937" stroke-width="1.5"/><polygon points="222,150 212,155 222,160" fill="#1f2937"/><rect x="112" y="135" width="100" height="40" rx="6" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/><text x="162" y="160" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">cube root</text><line x1="112" y1="155" x2="70" y2="155" stroke="#1f2937" stroke-width="1.5"/><polygon points="70,150 60,155 70,160" fill="#1f2937"/><circle cx="40" cy="155" r="20" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="40" y="160" font-size="15" font-style="italic" font-family="sans-serif" text-anchor="middle" fill="#1f2937">r</text><text x="230" y="200" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">r = ∛(3V ÷ 4π)</text></svg>`,
      diagramCaption:
        "To make r the subject of {{V = 4/3 pi r^3}}, run the function machine backwards: undo the last operation first, using inverses.",
      workedExamples: [
        {
          title: "A cube and a fraction",
          problem: "Make r the subject of {{V = 4/3 pi r^3}}. Hence find the radius of a sphere with volume 500 cm³, correct to 3 significant figures.",
          steps: [
            "Clear the fraction: multiply both sides by 3. {{3V = 4pi r^3}}.",
            "Divide both sides by {{4pi}}: {{r^3 = (3V)/(4pi)}}.",
            "Undo the cube with a cube root: {{r = cbrt((3V)/(4pi))}}.",
            "Substitute V = 500: {{r = cbrt(1500/(4pi)) = cbrt(119.366...) = 4.923...}}",
            "So r = 4.92 cm (3 s.f.). Check: {{4/3 pi (4.923)^3}} ≈ 500 ✓.",
          ],
          answer: "{{r = cbrt((3V)/(4pi))}}; r = 4.92 cm",
          yourTurn: {
            question:
              "Your turn: the surface area of a sphere is {{A = 4pi r^2}}. Make r the subject, where r > 0. (Type pi for π and sqrt( ) for a square root.)",
            answer: { type: "expression", expr: "sqrt(A/(4pi))", display: "{{r = sqrt(A/(4pi))}}" },
            solution:
              "Divide both sides by {{4pi}}: {{r^2 = A/(4pi)}}. Square-root (r > 0, so take the positive root): {{r = sqrt(A/(4pi))}}. Equivalently {{r = 1/2 sqrt(A/pi)}}.",
          },
        },
        {
          title: "Isolate the root, then square",
          problem:
            "The time T seconds for one swing of a pendulum of length L metres is {{T = 2pi sqrt(L/g)}}. Make L the subject. Hence find the length of a pendulum with T = 2 when g = 9.8, correct to 3 s.f.",
          steps: [
            "The root is not alone yet. Divide both sides by {{2pi}}: {{T/(2pi) = sqrt(L/g)}}.",
            "Square both sides — the whole of each side: {{T^2/(4 pi^2) = L/g}}.",
            "Multiply both sides by g: {{L = (g T^2)/(4 pi^2)}}.",
            "Substitute: {{L = (9.8 * 4)/(4 pi^2) = 9.8/pi^2 = 0.99294...}}",
            "So L = 0.993 m (3 s.f.) — a pendulum about 1 m long ticks once a second, which is why grandfather clocks are so tall.",
          ],
          answer: "{{L = (g T^2)/(4 pi^2)}}; L = 0.993 m",
          yourTurn: {
            question: "Your turn: the volume of a cone is {{V = 1/3 pi r^2 h}}. Make h the subject. (Type pi for π.)",
            answer: { type: "expression", expr: "3V/(pi r^2)", display: "{{h = (3V)/(pi r^2)}}" },
            solution: "Multiply both sides by 3: {{3V = pi r^2 h}}. Divide both sides by {{pi r^2}}: {{h = (3V)/(pi r^2)}}.",
          },
        },
      ],
      keyPoints: [
        "Changing the subject = solving an equation with letters instead of numbers.",
        "Undo operations in the **reverse** order they were done to the subject.",
        "Get a square root on its own **before** squaring; square the whole of each side.",
        "Square root gives ± — keep only the positive root for lengths, times, speeds.",
        "Make the subject's term positive first (add it to both sides) to avoid sign slips.",
        "Substitute numbers only after the rearranging is finished; round at the very end.",
      ],
      whyItWorks:
        "A formula like {{V = 4/3 pi r^3}} is a chain of operations applied to r. Each operation has an inverse that exactly cancels it: {{cbrt(r^3) = r}}, {{(3/(4pi)) * (4pi/3) = 1}}. Applying the inverses in reverse order peels the operations off like layers of an onion — the last layer on is the first layer off. It is the same reason you take off your shoes before your socks.\n\nWhy ± with squares? Squaring loses information: {{3^2}} and {{(-3)^2}} are both 9. So 'undoing' a square has two candidates, and only the context can choose between them. Cubing loses nothing ({{(-2)^3 = -8}}), so a cube root has just one real answer.",
      strategies: ["Use the inverse", "Work backwards", "Draw a diagram", "Check by substituting"],
      thinkDeeper:
        "Jun rearranges {{v^2 = u^2 + 2as}} to get {{u = v - sqrt(2as)}}. Pick values (say {{v = 5}}, {{a = 2}}, {{s = 4}}) to show he is wrong, and explain exactly which 'rule' he invented. What is the correct expression for u (u > 0)?",
    },

    // ------------------------------------------------------------------ 3
    {
      id: "rearranging-twice",
      heading: "Changing the subject (appears twice)",
      discovery: {
        problem:
          "Try to make x the subject of {{y = (x + 2)/(x - 3)}}.\n\nWhy does the 'undo it in reverse order' method from the last section get stuck here? Once you have cleared the fraction, where are the x's — and what tool from Year 9 lets you turn two x-terms into a single x?",
        idea:
          "x appears **twice**, so there is no single chain of operations to undo. Instead, gather the x's together and **factorise** x out:\n\n    {{y(x - 3) = x + 2}}\n    {{xy - 3y = x + 2}}\n    {{xy - x = 3y + 2}}\n    {{x(y - 1) = 3y + 2}}\n    {{x = (3y + 2)/(y - 1)}}\n\nFactorising is the key move: it turns '{{xy - x}}' (two terms) into '{{x * (y - 1)}}' (one product), and a product is easy to divide.",
      },
      body:
        "When the new subject appears in **two or more places**, inverse operations alone won't work. Use this recipe — it works for every Edexcel 'appears twice' question:\n\n1. **Clear fractions and roots.** Multiply up by any denominator; square to remove a root (once the root is alone).\n2. **Expand** any brackets that contain the subject.\n3. **Collect** every term containing the subject on **one side**, and every other term on the other side.\n4. **Factorise** the subject out as a common factor.\n5. **Divide** by the bracket.\n\n**Example.** Make x the subject of {{ax + b = cx + d}}.\n\n    {{ax - cx = d - b}}       (collect)\n    {{x(a - c) = d - b}}      (factorise)\n    {{x = (d - b)/(a - c)}}   (divide)\n\nThis is the general solution of *every* linear equation with x on both sides — try it on {{7x - 4 = 3x + 10}}: {{x = (10 + 4)/(7 - 3) = 14/4 = 7/2}} ✓.\n\n**Tidying signs.** {{x = (-5 - a)/(3 - b)}} and {{x = (a + 5)/(b - 3)}} are the same: multiplying top and bottom by −1 changes nothing. Either form scores full marks, but the second is easier to use. You can avoid the negatives in the first place by collecting the subject on whichever side gives it a positive coefficient.\n\n**Roots.** For {{b = sqrt((a + 3)/a)}}: square → {{b^2 = (a + 3)/a}}; multiply by a → {{ab^2 = a + 3}}; collect → {{ab^2 - a = 3}}; factorise → {{a(b^2 - 1) = 3}}; divide → {{a = 3/(b^2 - 1)}}.\n\n**Reciprocals.** For the lens formula {{1/f = 1/u + 1/v}}, multiply every term by the LCD {{fuv}}: {{uv = fv + fu}}. Now v appears twice — collect, factorise, divide: {{v = (fu)/(u - f)}}.\n\n**Connection to functions.** Rearranging {{y = (x + 2)/(x - 3)}} for x is exactly how you find the **inverse function**: {{f^(-1)(x) = (3x + 2)/(x - 1)}}. The excluded value {{y = 1}} (where the denominator {{y - 1}} is zero) is the one output the original function can never produce.",
      diagram: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Five-step flow chart for making x the subject of y equals x plus 2 over x minus 3. Step 1 clear the fraction: y times x minus 3 equals x plus 2. Step 2 expand: xy minus 3y equals x plus 2. Step 3 collect x-terms: xy minus x equals 3y plus 2. Step 4 factorise: x times y minus 1 equals 3y plus 2. Step 5 divide: x equals 3y plus 2 over y minus 1."><rect width="460" height="300" fill="#ffffff"/><rect x="20" y="10" width="130" height="44" rx="6" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="85" y="37" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1 Clear fraction</text><rect x="165" y="10" width="275" height="44" rx="6" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="302" y="37" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">y(x − 3) = x + 2</text><rect x="20" y="66" width="130" height="44" rx="6" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="85" y="93" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2 Expand</text><rect x="165" y="66" width="275" height="44" rx="6" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="302" y="93" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">xy − 3y = x + 2</text><rect x="20" y="122" width="130" height="44" rx="6" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="85" y="149" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">3 Collect x-terms</text><rect x="165" y="122" width="275" height="44" rx="6" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="302" y="149" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">xy − x = 3y + 2</text><rect x="20" y="178" width="130" height="44" rx="6" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="85" y="205" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">4 Factorise</text><rect x="165" y="178" width="275" height="44" rx="6" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="302" y="205" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x(y − 1) = 3y + 2</text><rect x="20" y="234" width="130" height="44" rx="6" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5"/><text x="85" y="261" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">5 Divide</text><rect x="165" y="234" width="275" height="44" rx="6" fill="#bbf7d0" fill-opacity="0.5" stroke="#334155" stroke-width="1.5"/><text x="302" y="261" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x = (3y + 2) ÷ (y − 1)</text><line x1="85" y1="54" x2="85" y2="66" stroke="#1f2937" stroke-width="1.5"/><line x1="85" y1="110" x2="85" y2="122" stroke="#1f2937" stroke-width="1.5"/><line x1="85" y1="166" x2="85" y2="178" stroke="#1f2937" stroke-width="1.5"/><line x1="85" y1="222" x2="85" y2="234" stroke="#1f2937" stroke-width="1.5"/><text x="230" y="294" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">Steps 3 and 4 are the new moves: gather the subject, then factorise it out.</text></svg>`,
      diagramCaption:
        "The 'appears twice' recipe on {{y = (x + 2)/(x - 3)}}. Collecting and factorising (yellow) turn two x-terms into one product you can divide.",
      workedExamples: [
        {
          title: "The classic Edexcel fraction",
          problem: "Make x the subject of {{y = (x + 2)/(x - 3)}}.",
          steps: [
            "Clear the fraction: multiply both sides by {{(x - 3)}}. {{y(x - 3) = x + 2}}.",
            "Expand: {{xy - 3y = x + 2}}.",
            "Collect x-terms on the left, everything else on the right: subtract x and add 3y. {{xy - x = 3y + 2}}.",
            "Factorise: {{x(y - 1) = 3y + 2}}.",
            "Divide by {{(y - 1)}}: {{x = (3y + 2)/(y - 1)}}.",
            "Check with numbers: x = 4 gives {{y = 6/1 = 6}}; the formula gives {{x = 20/5 = 4}} ✓.",
          ],
          answer: "{{x = (3y + 2)/(y - 1)}}",
          yourTurn: {
            question: "Your turn: make x the subject of {{y = (2x + 1)/(x - 4)}}.",
            answer: { type: "expression", expr: "(4y+1)/(y-2)", display: "{{x = (4y + 1)/(y - 2)}}" },
            solution:
              "{{y(x - 4) = 2x + 1}}, so {{xy - 4y = 2x + 1}}. Collect: {{xy - 2x = 4y + 1}}. Factorise: {{x(y - 2) = 4y + 1}}. Divide: {{x = (4y + 1)/(y - 2)}}.",
          },
        },
        {
          title: "Reciprocals: the lens formula",
          problem: "The lens formula is {{1/f = 1/u + 1/v}}. Make v the subject.",
          steps: [
            "Clear all three fractions at once: multiply every term by {{fuv}}. {{uv = fv + fu}}.",
            "v appears twice. Collect the v-terms on the left: {{uv - fv = fu}}.",
            "Factorise: {{v(u - f) = fu}}.",
            "Divide: {{v = (fu)/(u - f)}}.",
            "Check: u = 6, f = 2 gives {{1/v = 1/2 - 1/6 = 1/3}}, so v = 3; the formula gives {{12/4 = 3}} ✓.",
          ],
          answer: "{{v = (fu)/(u - f)}}",
          yourTurn: {
            question: "Your turn: from the same formula {{1/f = 1/u + 1/v}}, make u the subject.",
            answer: { type: "expression", expr: "fv/(v-f)", display: "{{u = (fv)/(v - f)}}" },
            solution:
              "Multiply by {{fuv}}: {{uv = fv + fu}}. Collect u-terms: {{uv - fu = fv}}. Factorise: {{u(v - f) = fv}}. Divide: {{u = (fv)/(v - f)}} — the same shape as before, by symmetry.",
          },
        },
        {
          title: "A root and the subject twice",
          problem: "Make a the subject of {{b = sqrt((a + 3)/a)}}.",
          steps: [
            "The root is already alone, so square both sides: {{b^2 = (a + 3)/a}}.",
            "Multiply both sides by a: {{ab^2 = a + 3}}.",
            "Collect a-terms: {{ab^2 - a = 3}}.",
            "Factorise: {{a(b^2 - 1) = 3}}.",
            "Divide: {{a = 3/(b^2 - 1)}}.",
          ],
          answer: "{{a = 3/(b^2 - 1)}}",
        },
      ],
      keyPoints: [
        "Subject appears twice → **collect, factorise, divide**.",
        "Clear fractions first (multiply every term by the LCD).",
        "Expand any bracket containing the subject before collecting.",
        "Multiplying top and bottom by −1 gives an equivalent answer: {{(-5 - a)/(3 - b) = (a + 5)/(b - 3)}}.",
        "Check by picking a number for the subject, working out the other letter, then feeding it into your formula.",
      ],
      whyItWorks:
        "Division only undoes multiplication. In {{xy - x = 3y + 2}}, x is part of a *sum* of two terms, so there is no single number to divide by. Factorising rewrites that sum as a *product*, {{x * (y - 1)}}, using the distributive law backwards: {{xy - x = x(y - 1)}}. Now the subject is multiplied by one thing, {{(y - 1)}}, and dividing by it is legal — **provided {{y - 1 != 0}}**. That condition is not a technicality: when y = 1 the original equation becomes {{x + 2 = x - 3}}, which has no solution at all.",
      strategies: ["Make it simpler", "Introduce a variable", "Check by substituting", "Use the inverse"],
      thinkDeeper:
        "Make x the subject of {{y = (3x - 5)/(x - 3)}}. Something surprising happens — what? Can you explain it by thinking about what the function {{x -> (3x - 5)/(x - 3)}} does twice in a row?",
    },

    // ------------------------------------------------------------------ 4
    {
      id: "simultaneous-linear",
      heading: "Simultaneous linear equations",
      discovery: {
        problem:
          "At a hawker centre, 2 kopi and 3 kaya toasts cost $9.10. At the same stall, 2 kopi and 5 kaya toasts cost $13.10.\n\nWithout writing any algebra: how much is one kaya toast? And one kopi? Then write down the two equations you were secretly using.",
        idea:
          "The second order is the first order **plus 2 kaya toasts**, and it costs $4.00 more. So 2 toasts cost $4.00 and one toast costs $2.00. Then 2 kopi cost {{9.10 - 3 * 2 = 3.10}}, so one kopi is $1.55.\n\nIn algebra, with k for kopi and t for toast: {{2k + 3t = 9.10}} and {{2k + 5t = 13.10}}. Subtracting the equations made the k's vanish: {{2t = 4}}. That is **elimination** — and it is all you did in your head.",
      },
      body:
        "**Simultaneous equations** are two (or more) equations that must be true *at the same time*. With two unknowns you need two independent equations; the solution is the pair of values that satisfies both.\n\n**Graphically**, each linear equation is a straight line, and the solution is the **point of intersection** — the only point lying on both lines (see the diagram).\n\n**Method 1: Elimination**\n\n1. Label the equations (1) and (2).\n2. If necessary, multiply one or both equations so that one unknown has the **same coefficient** (ignoring sign) in both.\n3. **Same signs → subtract; different signs → add.** One unknown disappears.\n4. Solve for the remaining unknown.\n5. Substitute back into either original equation to find the other unknown.\n6. **Check** in the *other* original equation.\n\nTo match coefficients of 3 and 4, scale to 12 (the LCM): multiply one equation by 4 and the other by 3. Multiply **every** term, including the number on the right.\n\n**Method 2: Substitution** — best when one equation already reads {{y = ...}} or {{x = ...}}.\n\n1. Replace that letter in the other equation by its expression, **in a bracket**.\n2. Solve the resulting linear equation.\n3. Substitute back to get the other unknown.\n\n**Which method?**\n\n| Situation | Choose |\n|---|---|\n| Both in the form {{ax + by = c}} | Elimination |\n| One equation is {{y = mx + c}} or {{x = ...}} | Substitution |\n| One linear and one quadratic | Substitution (see Quadratic equations) |\n\n**Forming them from a context.** Define both letters clearly *with units* (\"let a be the cost of an adult ticket in dollars\"), write one equation per piece of information, solve, then answer in words. Typical set-ups: ticket prices, coins of two values, mixtures, digits of a number, and lines through two given points.\n\n**When it goes wrong.** If both unknowns vanish together you get either a false statement (the lines are **parallel**: no solution) or {{0 = 0}} (the same line twice: infinitely many solutions).",
      diagram: `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid from x equals minus 1 to 6 and y equals minus 2 to 6. The line x plus y equals 5 slopes down and the line 2x minus y equals 1 slopes up. They cross at the point 2, 3, which is marked."><rect width="420" height="300" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="40" y1="24" x2="40" y2="280"/><line x1="140" y1="24" x2="140" y2="280"/><line x1="190" y1="24" x2="190" y2="280"/><line x1="240" y1="24" x2="240" y2="280"/><line x1="290" y1="24" x2="290" y2="280"/><line x1="340" y1="24" x2="340" y2="280"/><line x1="390" y1="24" x2="390" y2="280"/><line x1="40" y1="24" x2="390" y2="24"/><line x1="40" y1="56" x2="390" y2="56"/><line x1="40" y1="88" x2="390" y2="88"/><line x1="40" y1="120" x2="390" y2="120"/><line x1="40" y1="152" x2="390" y2="152"/><line x1="40" y1="184" x2="390" y2="184"/><line x1="40" y1="248" x2="390" y2="248"/><line x1="40" y1="280" x2="390" y2="280"/></g><line x1="40" y1="216" x2="398" y2="216" stroke="#334155" stroke-width="1.5"/><line x1="90" y1="284" x2="90" y2="16" stroke="#334155" stroke-width="1.5"/><polygon points="398,212 406,216 398,220" fill="#334155"/><polygon points="86,16 90,8 94,16" fill="#334155"/><text x="408" y="230" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">x</text><text x="98" y="14" font-size="13" font-style="italic" font-family="sans-serif" fill="#1f2937">y</text><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="40" y="230">−1</text><text x="140" y="230">1</text><text x="190" y="230">2</text><text x="240" y="230">3</text><text x="290" y="230">4</text><text x="340" y="230">5</text><text x="390" y="230">6</text></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="end"><text x="84" y="28">6</text><text x="84" y="60">5</text><text x="84" y="92">4</text><text x="84" y="124">3</text><text x="84" y="156">2</text><text x="84" y="188">1</text><text x="84" y="252">−1</text><text x="84" y="284">−2</text></g><line x1="40" y1="24" x2="390" y2="248" stroke="#2563eb" stroke-width="2.5"/><line x1="65" y1="280" x2="265" y2="24" stroke="#dc2626" stroke-width="2.5"/><circle cx="190" cy="120" r="5" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="200" y="114" font-size="13" font-family="sans-serif" fill="#1f2937">(2, 3)</text><text x="300" y="196" font-size="13" font-family="sans-serif" fill="#2563eb">x + y = 5</text><text x="226" y="44" font-size="13" font-family="sans-serif" fill="#dc2626" text-anchor="end">2x − y = 1</text></svg>`,
      diagramCaption:
        "{{x + y = 5}} and {{2x - y = 1}}: adding them gives {{3x = 6}}, so x = 2 and y = 3 — exactly where the lines cross.",
      workedExamples: [
        {
          title: "Scaling both equations",
          problem: "Solve the simultaneous equations\n\n    {{3x + 4y = 5}}\n    {{2x - 3y = 9}}",
          steps: [
            "Label them (1) and (2). Eliminate y: the LCM of 4 and 3 is 12.",
            "(1) × 3: {{9x + 12y = 15}}. (2) × 4: {{8x - 12y = 36}}.",
            "The y-terms have different signs, so **add**: {{17x = 51}}, giving {{x = 3}}.",
            "Substitute into (1): {{9 + 4y = 5}}, so {{4y = -4}} and {{y = -1}}.",
            "Check in (2): {{2(3) - 3(-1) = 6 + 3 = 9}} ✓.",
          ],
          answer: "{{x = 3}}, {{y = -1}}",
          yourTurn: {
            question: "Your turn: solve {{5x + 2y = 11}} and {{3x - 4y = 4}}. Give x first, then y.",
            answer: { type: "list", values: [2, 0.5], ordered: true, display: "{{x = 2}}, {{y = 1/2}}" },
            solution:
              "(1) × 2: {{10x + 4y = 22}}. Add (2): {{13x = 26}}, so {{x = 2}}. Then {{10 + 2y = 11}}, so {{y = 1/2}}. Check (2): {{6 - 2 = 4}} ✓.",
          },
        },
        {
          title: "Forming and solving from a context",
          problem:
            "For a school concert, 3 adult tickets and 4 student tickets cost $62. 5 adult tickets and 2 student tickets cost $73. Work out the cost of one adult ticket and one student ticket.",
          steps: [
            "Let a = cost of an adult ticket and s = cost of a student ticket, in dollars.",
            "(1) {{3a + 4s = 62}}; (2) {{5a + 2s = 73}}.",
            "(2) × 2: {{10a + 4s = 146}}. Same signs, so subtract (1): {{7a = 84}}, giving {{a = 12}}.",
            "Substitute into (1): {{36 + 4s = 62}}, so {{4s = 26}} and {{s = 6.5}}.",
            "Check in (2): {{5(12) + 2(6.5) = 60 + 13 = 73}} ✓.",
          ],
          answer: "Adult $12, student $6.50",
          yourTurn: {
            question:
              "Your turn: Siti's jar holds only 20-cent and 50-cent coins. There are 30 coins worth $10.80 altogether. How many 50-cent coins are there?",
            answer: { type: "number", value: 16 },
            solution:
              "Let x = number of 20c coins, y = number of 50c coins. Work in cents: {{x + y = 30}} and {{20x + 50y = 1080}}. First × 20: {{20x + 20y = 600}}. Subtract: {{30y = 480}}, so {{y = 16}} (and x = 14). Check: 280 + 800 = 1080 ✓.",
          },
        },
        {
          title: "Substitution",
          problem: "Solve {{y = 2x - 3}} and {{3x + 2y = 15}}.",
          steps: [
            "The first equation already gives y, so substitute it — in a bracket — into the second: {{3x + 2(2x - 3) = 15}}.",
            "Expand: {{3x + 4x - 6 = 15}}, so {{7x = 21}} and {{x = 3}}.",
            "Back-substitute: {{y = 2(3) - 3 = 3}}.",
            "Check: {{3(3) + 2(3) = 9 + 6 = 15}} ✓.",
          ],
          answer: "{{x = 3}}, {{y = 3}}",
        },
      ],
      keyPoints: [
        "The solution is the point where the two lines cross.",
        "Elimination: match coefficients, then **same signs subtract, different signs add**.",
        "Scale **every** term of an equation, including the right-hand side.",
        "Substitution: put the expression in a bracket before you substitute.",
        "Find the second unknown by substituting back, then check in the *other* equation.",
        "In context, define your letters (with units) and answer the question in words.",
      ],
      whyItWorks:
        "If (1) and (2) are both true for the same x and y, then their sum and difference are true too — you are adding equal amounts to equal amounts. So any pair (x, y) that solves both originals also solves '(1) − (2)'. Choosing the multiplier carefully makes that new equation lose a letter, and an equation in one unknown is something you can already solve.\n\nGeometrically, two different straight lines in a plane either cross at exactly one point or are parallel. That is why a pair of linear equations has exactly one solution, none (parallel: same gradient, different intercept) or infinitely many (the same line written twice).",
      strategies: ["Eliminate options", "Introduce a variable", "Draw a diagram", "Check by substituting"],
      thinkDeeper:
        "For which value of k do {{2x + 3y = 7}} and {{4x + ky = 10}} have **no** solution? Explain using gradients. Then find the value of c for which {{2x + 3y = 7}} and {{4x + 6y = c}} have infinitely many solutions.",
    },

    // ------------------------------------------------------------------ 5 (H+)
    {
      id: "simultaneous-three",
      heading: "Three equations, three unknowns",
      discovery: {
        problem:
          "Three numbers x, y and z satisfy\n\n    {{x + y = 11}}\n    {{y + z = 15}}\n    {{x + z = 14}}\n\nFind all three. Then ask yourself: is there a way to find all three almost at once, without solving for one letter at a time?",
        idea:
          "Add all three equations: every letter appears exactly twice, so {{2x + 2y + 2z = 40}} and {{x + y + z = 20}}. Now subtract each original from this total: {{z = 20 - 11 = 9}}, {{x = 20 - 15 = 5}}, {{y = 20 - 14 = 6}}.\n\nThat shortcut uses the symmetry of this system. In general there is no such trick, but the same idea — **combine equations to make letters disappear** — always works: knock out one unknown to get two equations in two unknowns, which you already know how to solve.",
      },
      body:
        "With three unknowns you need **three** independent equations. The plan is to reduce the problem to one you can already do:\n\n1. **Label** the equations (1), (2), (3).\n2. **Choose one unknown to eliminate** — pick the one with the easiest coefficients (a coefficient of 1 or −1, or a letter already missing from one equation).\n3. **Eliminate it twice**, using two *different* pairs of equations, e.g. (1) & (2) → (4), and (1) & (3) → (5), or (2) & (3) → (5). Each pair must remove the **same** unknown.\n4. **Solve (4) and (5)** — two equations in two unknowns — by elimination or substitution.\n5. **Back-substitute** both values into the simplest original equation to get the third unknown.\n6. **Check** in all three original equations (especially the ones you didn't use in step 5).\n\n**Shortcuts worth spotting**\n\n- If one equation contains only two letters, it is already a '(4)' — you only need to eliminate that missing letter from one other pair.\n- If two equations differ in a single letter (e.g. {{x + y + z = 10}} and {{x - y + z = 4}}), subtracting them finds that letter immediately.\n- Symmetric systems (each equation a 'rotation' of the others) often fall to **adding all three**.\n\n**Geometric meaning.** An equation like {{x + 2y - z = 2}} describes a **plane** in 3-D space. Three planes usually meet at a single point — the unique solution. But they can also share a whole line (infinitely many solutions) or have no common point at all (no solution), e.g. three planes forming a triangular 'tent'. If your elimination produces {{0 = 0}} or a false statement like {{0 = 7}}, that is what is happening.\n\n**Where it appears.** Finding the quadratic {{y = ax^2 + bx + c}} through three given points; the nth term {{an^2 + bn + c}} of a quadratic sequence; mixture and pricing problems with three items.",
      diagram: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Elimination ladder. Top row: three equations. (1) x plus y plus z equals 6, (2) 2x minus y plus 3z equals 9, (3) x plus 2y minus z equals 2. Middle row, y eliminated: (4) 3x plus 4z equals 15 from (1) plus (2), and (5) x plus z equals 4 from 2 times (2) plus (3). Bottom: x equals 1 and z equals 3, then y equals 2 by back-substitution."><rect width="460" height="300" fill="#ffffff"/><text x="12" y="22" font-size="12" font-family="sans-serif" fill="#334155">3 unknowns</text><rect x="12" y="30" width="140" height="40" rx="6" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="82" y="55" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(1) x + y + z = 6</text><rect x="160" y="30" width="140" height="40" rx="6" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="230" y="55" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(2) 2x − y + 3z = 9</text><rect x="308" y="30" width="140" height="40" rx="6" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="378" y="55" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(3) x + 2y − z = 2</text><line x1="82" y1="70" x2="120" y2="122" stroke="#1f2937" stroke-width="1.5"/><line x1="230" y1="70" x2="140" y2="122" stroke="#1f2937" stroke-width="1.5"/><line x1="230" y1="70" x2="320" y2="122" stroke="#1f2937" stroke-width="1.5"/><line x1="378" y1="70" x2="340" y2="122" stroke="#1f2937" stroke-width="1.5"/><text x="12" y="104" font-size="12" font-family="sans-serif" fill="#334155">eliminate y twice</text><text x="104" y="104" font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle">(1) + (2)</text><text x="350" y="104" font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle">2 × (2) + (3)</text><rect x="55" y="122" width="150" height="40" rx="6" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="130" y="147" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(4) 3x + 4z = 15</text><rect x="255" y="122" width="150" height="40" rx="6" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="330" y="147" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(5) 5x + 5z = 20</text><line x1="130" y1="162" x2="215" y2="204" stroke="#1f2937" stroke-width="1.5"/><line x1="330" y1="162" x2="245" y2="204" stroke="#1f2937" stroke-width="1.5"/><text x="12" y="192" font-size="12" font-family="sans-serif" fill="#334155">2 unknowns</text><rect x="150" y="204" width="160" height="38" rx="6" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5"/><text x="230" y="228" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x = 1, z = 3</text><line x1="230" y1="242" x2="230" y2="256" stroke="#1f2937" stroke-width="1.5"/><rect x="110" y="256" width="240" height="36" rx="6" fill="#bbf7d0" fill-opacity="0.5" stroke="#1f2937" stroke-width="1.5"/><text x="230" y="279" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">into (1): y = 6 − 1 − 3 = 2</text></svg>`,
      diagramCaption:
        "The elimination ladder: remove the same unknown (here y) from two different pairs, solve the 2 × 2 system, then climb back up to find the last unknown.",
      workedExamples: [
        {
          title: "Eliminate the same letter twice",
          problem: "Solve\n\n    (1) {{x + y + z = 6}}\n    (2) {{2x - y + 3z = 9}}\n    (3) {{x + 2y - z = 2}}",
          steps: [
            "y has coefficients 1, −1 and 2 — the easiest letter to eliminate.",
            "(1) + (2): {{3x + 4z = 15}}. Call this (4).",
            "2 × (2) + (3): {{4x - 2y + 6z + x + 2y - z = 18 + 2}}, so {{5x + 5z = 20}}, i.e. {{x + z = 4}}. Call this (5).",
            "From (5), {{x = 4 - z}}. Substitute into (4): {{3(4 - z) + 4z = 15}}, so {{12 + z = 15}} and {{z = 3}}. Then {{x = 1}}.",
            "Back into (1): {{1 + y + 3 = 6}}, so {{y = 2}}.",
            "Check (2): {{2 - 2 + 9 = 9}} ✓. Check (3): {{1 + 4 - 3 = 2}} ✓.",
          ],
          answer: "{{x = 1}}, {{y = 2}}, {{z = 3}}",
          yourTurn: {
            question:
              "Your turn: solve {{x + y + z = 10}}, {{x - y + z = 4}} and {{2x + y - z = 5}}. Give your answer in the order x, y, z.",
            answer: { type: "list", values: [3, 3, 4], ordered: true, display: "{{x = 3}}, {{y = 3}}, {{z = 4}}" },
            solution:
              "First − second: {{2y = 6}}, so {{y = 3}}. Then the first gives {{x + z = 7}} and the third gives {{2x - z = 2}}. Add: {{3x = 9}}, so {{x = 3}} and {{z = 4}}. Check the third: {{6 + 3 - 4 = 5}} ✓.",
          },
        },
        {
          title: "Three prices — spot the symmetry",
          problem:
            "At a bakery, 2 croissants, 1 muffin and 1 bagel cost $10.50. 1 croissant, 2 muffins and 1 bagel cost $10.00. 1 croissant, 1 muffin and 2 bagels cost $11.50. Find the price of each item.",
          steps: [
            "Let c, m, b be the prices in dollars: (1) {{2c + m + b = 10.5}}, (2) {{c + 2m + b = 10}}, (3) {{c + m + 2b = 11.5}}.",
            "Each letter appears with total coefficient 4 across the three equations. Add all three: {{4c + 4m + 4b = 32}}, so {{c + m + b = 8}}. Call this (4).",
            "(1) − (4): {{c = 10.5 - 8 = 2.5}}. (2) − (4): {{m = 10 - 8 = 2}}. (3) − (4): {{b = 11.5 - 8 = 3.5}}.",
            "Check (1): {{5 + 2 + 3.5 = 10.5}} ✓.",
          ],
          answer: "Croissant $2.50, muffin $2.00, bagel $3.50",
        },
      ],
      keyPoints: [
        "Three unknowns need three independent equations.",
        "Eliminate the **same** unknown from two different pairs → two equations in two unknowns.",
        "Pick the unknown with the friendliest coefficients to eliminate.",
        "Back-substitute into the simplest original, then check all three equations.",
        "Look for shortcuts: a missing letter, two equations differing in one letter, or symmetry (add all three).",
        "Each equation is a plane; a unique solution is the single point where three planes meet.",
      ],
      whyItWorks:
        "Each elimination step replaces the system with an equivalent one: any (x, y, z) that satisfies the originals satisfies the combinations, and you can rebuild the originals from the combinations, so no solutions are gained or lost. Using two *different* pairs matters — combining (1) and (2) twice gives two versions of the same information, and you would be left one equation short.\n\nThe count is no accident. Each independent equation 'uses up' one degree of freedom: in 3-D, one equation leaves a plane (2 dimensions of freedom), two leave a line (1), and three leave a point (0).",
      strategies: ["Make it simpler", "Use symmetry", "Look for an invariant", "Check by substituting"],
      thinkDeeper:
        "The curve {{y = ax^2 + bx + c}} passes through (0, 3), (1, 2) and (2, 3). Write down three equations and find a, b and c. Then try (1, 0), (2, 3) and (−1, 6). Why do three points always pin down exactly one quadratic, unless the points lie on a straight line?",
    },
  ],

  learn: {
    flashcards: [
      { front: "What is the first move with {{(x + 1)/4 + (x - 2)/6 = 3}}?", back: "Multiply every term by the LCD, 12: {{3(x + 1) + 2(x - 2) = 36}}." },
      { front: "Expand {{-3(x - 4)}}", back: "{{-3x + 12}} — the minus multiplies both terms." },
      { front: "Solve {{7x - 4 = 3x + 10}}", back: "Subtract 3x: {{4x = 14}}, so {{x = 7/2}}." },
      { front: "Linear equation ends with {{0 = 5}}. Meaning?", back: "No solution. If it ends with {{0 = 0}}, it is an identity: true for every x." },
      { front: "Consecutive integers in algebra", back: "{{n}}, {{n + 1}}, {{n + 2}}; consecutive even (or odd) numbers: {{n}}, {{n + 2}}, {{n + 4}}." },
      { front: "Make r the subject of {{A = pi r^2}}", back: "{{r = sqrt(A/pi)}} (positive root for a length)." },
      { front: "Make r the subject of {{V = 4/3 pi r^3}}", back: "{{r = cbrt((3V)/(4pi))}}" },
      { front: "Make x the subject of {{y = 5 - 2x}}", back: "{{x = (5 - y)/2}}" },
      { front: "Make L the subject of {{T = 2pi sqrt(L/g)}}", back: "Divide by {{2pi}}, square, multiply by g: {{L = (g T^2)/(4 pi^2)}}." },
      { front: "The subject appears twice. The recipe?", back: "Clear fractions → expand → collect subject terms on one side → factorise → divide." },
      { front: "Make x the subject of {{y = (x + 2)/(x - 3)}}", back: "{{x = (3y + 2)/(y - 1)}}" },
      { front: "Make x the subject of {{ax + b = cx + d}}", back: "{{x(a - c) = d - b}}, so {{x = (d - b)/(a - c)}}." },
      { front: "Elimination: add or subtract?", back: "Same signs subtract; different signs add." },
      { front: "When is substitution better than elimination?", back: "When one equation already says {{y = ...}} or {{x = ...}} — and always for linear–quadratic pairs." },
      { front: "What does the solution of two linear simultaneous equations look like on a graph?", back: "The point where the two straight lines intersect." },
      { front: "Two linear equations with no solution — why?", back: "Their lines are parallel: same gradient, different intercepts." },
      { front: "H+: plan for three equations in x, y, z", back: "Eliminate the same letter from two different pairs → solve the 2 × 2 system → back-substitute → check all three." },
      { front: "H+: shortcut for {{x + y = 11}}, {{y + z = 15}}, {{x + z = 14}}", back: "Add all three: {{x + y + z = 20}}; subtract each original: z = 9, x = 5, y = 6." },
    ],
    mustKnow: [
      "Can I solve linear equations with unknowns on both sides and brackets, including a minus sign in front of a bracket?",
      "Can I solve linear equations with fractions by multiplying every term by the lowest common denominator?",
      "Can I form and solve a linear equation from a context (angles, perimeters, ages, consecutive numbers)?",
      "Can I change the subject of a formula where the subject appears once, including squares, square roots and cube roots?",
      "Can I change the subject of a formula where the subject appears twice, by collecting terms and factorising?",
      "Can I use a rearranged formula to calculate a value, giving the answer to 3 significant figures?",
      "Can I solve a pair of simultaneous equations with two variables by elimination, scaling one or both equations?",
      "Can I solve a pair of simultaneous equations by substitution?",
      "Can I form and solve simultaneous equations from a context, such as tickets or coins?",
      "Can I explain that the solution of a pair of simultaneous equations is the intersection of two lines, and recognise when there is no solution?",
      "(H+) Can I solve a trio of simultaneous equations with three variables and check the solution in all three?",
    ],
    misconceptions: [
      {
        wrong: "{{(x + 3)/4 - (x - 2)/6 = 2}} becomes {{3(x + 3) - 2(x - 2) = 2}}.",
        right: "Every term must be multiplied by 12, including the 2 on the right: {{3(x + 3) - 2(x - 2) = 24}}.",
      },
      {
        wrong: "{{-2(x - 4) = -2x - 8}}",
        right: "A negative times a negative is positive: {{-2(x - 4) = -2x + 8}}.",
      },
      {
        wrong: "From {{A = pi r^2}}, {{r = sqrt(A) / pi}}.",
        right: "Divide by π **before** taking the root, so the root covers everything: {{r = sqrt(A/pi)}}. Check with A = 4π: r should be 2.",
      },
      {
        wrong: "From {{v^2 = u^2 + 2as}}, {{v = u + sqrt(2as)}}.",
        right: "The square root of a sum is not the sum of the square roots: {{v = sqrt(u^2 + 2as)}}. Try u = 3, 2as = 16: {{sqrt(25) = 5}}, not 3 + 4 = 7.",
      },
      {
        wrong: "Making x the subject of {{xy - x = 3y + 2}} gives {{x = (3y + 2)/y - x}}.",
        right: "The subject must not appear on the right-hand side. Factorise first: {{x(y - 1) = 3y + 2}}, then {{x = (3y + 2)/(y - 1)}}.",
      },
      {
        wrong: "In {{3x + 2y = 12}} and {{5x + 2y = 16}}, add the equations to remove y.",
        right: "The y-terms have the **same** sign, so subtract: {{2x = 4}}, x = 2. Adding gives {{8x + 4y = 28}}, which still has y in it.",
      },
      {
        wrong: "When scaling {{2x + 3y = 7}} by 4, write {{8x + 12y = 7}}.",
        right: "Multiply **every** term, including the right-hand side: {{8x + 12y = 28}}.",
      },
      {
        wrong: "A pair of simultaneous equations always has exactly one solution.",
        right: "Parallel lines give no solution; the same line written twice gives infinitely many.",
      },
    ],
    examMistakes: [
      "Multiplying only the fractions by the LCD and forgetting the whole-number term (e.g. leaving the '= 2' as 2 instead of 24) — the most common slip in fraction equations on 4MA1.",
      "Losing the sign when a minus sits in front of a fraction or bracket: writing {{-3(x - 1)}} as {{-3x - 3}}. Put two-term numerators in brackets before multiplying.",
      "In 'appears twice' questions, collecting the subject terms but not factorising — leaving x on both sides of the final answer, which scores at most the method marks.",
      "Taking the square root of each term separately (e.g. {{sqrt(u^2 + 2as) = u + sqrt(2as)}}) or squaring only part of a side, such as squaring {{sqrt(L/g)}} but not the {{2pi}}.",
      "Simultaneous equations: scaling the letters but not the number on the right, or subtracting when the signs differ — then not checking in the other equation, which would have caught it.",
      "Finding x correctly but never finding y (or giving x but the question asked for the price of a ticket) — always answer the question asked, with units.",
    ],
    mnemonics: [
      {
        topic: "Elimination",
        device: "SSS — Same Signs Subtract",
        explanation: "If the matching terms have the same sign (both +3y, or both −3y), subtract the equations. Different signs: add.",
      },
      {
        topic: "Subject appears twice",
        device: "Clear, Expand, Collect, Factorise, Divide — 'Cats Eat Carrots For Dinner'",
        explanation: "The five steps in order. The two new ones compared with 'appears once' are Collect and Factorise.",
      },
      {
        topic: "Changing the subject (appears once)",
        device: "Socks and shoes",
        explanation: "You put socks on before shoes, so you take shoes off first. Undo the last operation done to the subject first.",
      },
    ],
    realWorld: [
      {
        title: "GPS: four satellites, four unknowns",
        detail:
          "Your phone works out its position (x, y, z) and its own clock error t by solving a system of equations from four satellite signals — the H+ 'three unknowns' idea taken one step further, millions of times a day across Singapore.",
        emoji: "🛰️",
      },
      {
        title: "Physics and engineering formulae",
        detail:
          "Engineers rearrange formulas constantly: the pendulum formula {{T = 2pi sqrt(L/g)}} sets clock lengths, the lens formula {{1/f = 1/u + 1/v}} designs camera and phone lenses, and Ohm's law {{V = IR}} sizes the resistors in every circuit.",
        emoji: "🔭",
      },
      {
        title: "Break-even and pricing",
        detail:
          "A hawker deciding between two rental plans ($600 a month plus $1 per plate, or $200 a month plus $1.80 per plate) is solving simultaneous equations: the plans cost the same at 500 plates, where the two cost lines cross.",
        emoji: "🍜",
      },
    ],
    videos: [
      { title: "Solving equations with fractions", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+solving+equations+with+fractions" },
      { title: "Changing the subject — subject appears twice", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+changing+the+subject+appears+twice" },
      { title: "Simultaneous equations by elimination", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+simultaneous+equations+elimination" },
      { title: "Solving three simultaneous equations", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+three+simultaneous+equations+three+unknowns" },
    ],
    formulas: [
      { name: "Solution of a linear equation with x on both sides", formula: "{{ax + b = cx + d  =>  x = (d - b)/(a - c)}}, a ≠ c", note: "Learn the method — derive it, don't memorise it" },
      { name: "Clearing fractions", formula: "Multiply every term on both sides by the LCD of all the denominators", note: "Learn this — not given" },
      { name: "Elimination rule", formula: "Match coefficients; same signs subtract, different signs add", note: "Learn this — not given" },
      { name: "Subject appears twice", formula: "{{y = (x + a)/(x + b)  =>  x = (a - by)/(y - 1)}}", note: "Learn the method (collect, factorise, divide) — not given" },
      { name: "Volume of a sphere", formula: "{{V = 4/3 pi r^3}}, so {{r = cbrt((3V)/(4pi))}}", note: "On the formula sheet" },
      { name: "Surface area of a sphere", formula: "{{A = 4pi r^2}}, so {{r = sqrt(A/(4pi))}}", note: "On the formula sheet" },
      { name: "Volume of a cone", formula: "{{V = 1/3 pi r^2 h}}, so {{h = (3V)/(pi r^2)}}", note: "On the formula sheet" },
      { name: "Area of a circle", formula: "{{A = pi r^2}}, so {{r = sqrt(A/pi)}}", note: "Learn this — not given" },
      { name: "Number of equations needed", formula: "n unknowns need n independent equations (2 for x, y; 3 for x, y, z)", note: "Learn this — not given" },
    ],
  },
};
