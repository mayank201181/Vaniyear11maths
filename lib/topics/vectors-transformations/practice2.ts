// ---------------------------------------------------------------------------
// Vectors & Transformations — Practice Papers 3 and 4.
// Paper 3: mixed practice — transformations, combining them, column vectors, vector proof.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher questions on this topic.
// Column vectors are written "(top over bottom)" in text; answers are typed "top, bottom".
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "vectors-transformations-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "vectors-transformations-p3-q01",
        question:
          "**a** = (3 over −2) and **b** = (−1 over 5).\n\nWork out 2**a** − 3**b** as a column vector. Type the top number, then the bottom number, e.g. 4, −1.",
        answer: { type: "list", values: [9, -19], ordered: true, display: "(9 over −19)" },
        traps: [
          { spec: { type: "list", values: [3, 11], ordered: true }, feedback: "That's 2**a** + 3**b**. Subtracting 3**b** means subtracting (−3 over 15), so the top becomes 6 − (−3) = 9." },
          { spec: { type: "list", values: [9, 11], ordered: true }, feedback: "The top is right. Check the bottom: 2 × (−2) = −4 and 3 × 5 = 15, so −4 − 15 = −19." },
        ],
        solution: [
          "2**a** = (6 over −4) and 3**b** = (−3 over 15).",
          "Top: 6 − (−3) = 9.",
          "Bottom: −4 − 15 = −19.",
          "2**a** − 3**b** = (9 over −19).",
        ],
        commonError: "Losing a sign when subtracting a negative component: 6 − (−3) is 9, not 3.",
        difficulty: "warmup",
        guideRef: "vector-basics",
        hints: ["Find 2**a** and 3**b** first, then subtract top from top and bottom from bottom.", "Take care: 6 − (−3) = 6 + 3."],
        strategy: "Work component by component",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "vectors-transformations-p3-q02",
        question: "The vector **v** = (−7 over 24). Work out |**v**|, the magnitude of **v**.",
        answer: { type: "number", value: 25 },
        traps: [
          { spec: { type: "number", value: 17 }, feedback: "You added the components (−7 + 24). The magnitude is the length of the arrow — use Pythagoras: {{sqrt((-7)^2 + 24^2)}}." },
          { spec: { type: "number", value: 31 }, feedback: "You added 7 and 24. The two components are the legs of a right-angled triangle, so use Pythagoras instead." },
        ],
        solution: [
          "The vector is the hypotenuse of a right-angled triangle with legs 7 and 24.",
          "{{|v| = sqrt((-7)^2 + 24^2) = sqrt(49 + 576) = sqrt(625)}}",
          "|**v**| = 25.",
        ],
        commonError: "Writing (−7)² as −49, which gives {{sqrt(527)}}. Squaring a negative gives a positive.",
        difficulty: "warmup",
        guideRef: "vector-basics",
        hints: ["Draw the vector: 7 left and 24 up. How long is the arrow?", "Use Pythagoras: square both components, add, square root."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "vectors-transformations-p3-q03",
        question:
          "The point P(4, −1) is reflected in the line x = 1.\n\nWrite down the coordinates of the image of P. Give the x-coordinate first.",
        answer: { type: "list", values: [-2, -1], ordered: true, display: "(−2, −1)" },
        traps: [
          { spec: { type: "list", values: [4, 3], ordered: true }, feedback: "You reflected in the *horizontal* line y = 1. The line x = 1 is vertical — every point on it has x-coordinate 1." },
          { spec: { type: "list", values: [-4, -1], ordered: true }, feedback: "That's a reflection in the y-axis (x = 0). The mirror line here is x = 1, one unit to the right of the y-axis." },
        ],
        solution: [
          "x = 1 is a vertical line.",
          "P is 4 − 1 = 3 units to the right of the line.",
          "The image is 3 units to the left: x = 1 − 3 = −2. The y-coordinate does not change.",
          "Image: (−2, −1).",
        ],
        commonError: "Drawing y = 1 instead of x = 1: 'x = 1' is the vertical line through 1 on the x-axis.",
        difficulty: "warmup",
        guideRef: "transformations",
        hints: ["Is x = 1 a vertical or a horizontal line?", "How far is P from the line? The image is the same distance on the other side."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "vectors-transformations-p3-q04",
        question:
          "The point A(3, 1) is enlarged by scale factor 3 with centre (1, 2).\n\nFind the coordinates of the image of A. Give the x-coordinate first.",
        answer: { type: "list", values: [7, -1], ordered: true, display: "(7, −1)" },
        traps: [
          { spec: { type: "list", values: [9, 3], ordered: true }, feedback: "You multiplied the coordinates by 3 — that uses the origin as the centre. Measure from the centre (1, 2) instead." },
          { spec: { type: "list", values: [9, -2], ordered: true }, feedback: "You added the tripled vector to A. Start from the **centre**: image = centre + 3 × (vector from centre to A)." },
        ],
        solution: [
          "Vector from the centre (1, 2) to A(3, 1): (2 over −1).",
          "Multiply by the scale factor: 3 × (2 over −1) = (6 over −3).",
          "Add to the centre: (1 + 6, 2 − 3) = (7, −1).",
        ],
        commonError: "Multiplying the coordinates of A by 3, which only works when the centre is the origin.",
        difficulty: "warmup",
        guideRef: "transformations",
        hints: ["How do you get from the centre to A?", "That journey becomes 3 times as long — starting from the centre."],
        strategy: "Measure from the centre",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "vectors-transformations-p3-q05",
        question:
          "A game designer enlarges a sprite by scale factor {{-1/2}} with centre (2, 3).\n\nOne corner of the sprite is at (8, −5). Find the coordinates of its image. Give the x-coordinate first.",
        answer: { type: "list", values: [-1, 7], ordered: true, display: "(−1, 7)" },
        traps: [
          { spec: { type: "list", values: [5, -1], ordered: true }, feedback: "You used scale factor +{{1/2}}. The negative sign sends the image to the **other side** of the centre." },
          { spec: { type: "list", values: [-3, 4], ordered: true }, feedback: "(−3 over 4) is the vector from the centre to the image. Add it to the centre (2, 3) to get the image point." },
        ],
        solution: [
          "Vector from the centre (2, 3) to (8, −5): (6 over −8).",
          "Multiply by {{-1/2}}: (−3 over 4).",
          "Add to the centre: (2 − 3, 3 + 4) = (−1, 7).",
        ],
        solutions: [
          { label: "Halve, then rotate", steps: ["A negative scale factor −k is an enlargement by k and a 180° rotation about the same centre.", "Halve the vector: (3 over −4). Rotating 180° flips both signs: (−3 over 4).", "Image = (2, 3) + (−3, 4) = (−1, 7)."] },
        ],
        commonError: "Ignoring the negative sign, which puts the image on the same side of the centre.",
        difficulty: "core",
        guideRef: "transformations",
        hints: ["Find the vector from the centre to the corner.", "Multiply that vector by {{-1/2}} — what does the minus sign do to its direction?", "Add the new vector to the centre, not to the original point."],
        strategy: "Measure from the centre",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "mcq",
        id: "vectors-transformations-p3-q06",
        question:
          "Shape S is reflected in the line y = x. The image is then rotated 90° clockwise about the origin O.\n\nWhich **single** transformation maps S straight to the final image?",
        options: [
          "Reflection in the y-axis",
          "Rotation 180° about O",
          "Reflection in the x-axis",
          "Reflection in the line y = −x",
        ],
        answerIndex: 2,
        explanation:
          "Track a general point. Reflecting in y = x sends (x, y) to (y, x). Rotating 90° clockwise about O sends (u, v) to (v, −u), so (y, x) goes to (x, −y). Keeping x and negating y is a reflection in the x-axis. A test point agrees: (2, 1) → (1, 2) → (2, −1). 'Reflection in the y-axis' is what you get if you do the rotation **first** — order matters. 'Rotation 180°' comes from assuming a reflection plus a quarter-turn makes a half-turn; but a reflection then a rotation reverses orientation, so the result must be a reflection.",
        difficulty: "core",
        guideRef: "combined-transformations",
        hints: ["Pick a simple point such as (2, 1) and follow it through both transformations.", "Reflection in y = x swaps the coordinates. A 90° clockwise turn about O sends (u, v) to (v, −u).", "Compare where (2, 1) ends up with where it started."],
        strategy: "Try a test point",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "vectors-transformations-p3-q07",
        question:
          "The point Q(1, 4) is translated by the vector (2 over −3). Its image is then rotated 180° about the origin.\n\nFind the coordinates of the final image of Q. Give the x-coordinate first.",
        answer: { type: "list", values: [-3, -1], ordered: true, display: "(−3, −1)" },
        traps: [
          { spec: { type: "list", values: [1, -7], ordered: true }, feedback: "You rotated first and then translated. Do the transformations in the order given: translate, then rotate." },
          { spec: { type: "list", values: [3, 1], ordered: true }, feedback: "That's the point after the translation only. Now rotate it 180° about O: (x, y) → (−x, −y)." },
        ],
        solution: [
          "Translate: (1 + 2, 4 − 3) = (3, 1).",
          "Rotate 180° about O: (x, y) → (−x, −y), so (3, 1) → (−3, −1).",
        ],
        commonError: "Doing the transformations in the wrong order — combined transformations do not generally commute.",
        difficulty: "core",
        guideRef: "combined-transformations",
        hints: ["Which transformation happens first?", "A 180° rotation about the origin changes the sign of both coordinates."],
        strategy: "Follow the order",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "vectors-transformations-p3-q08",
        question:
          "A shape is reflected in the line x = 1. The image is then reflected in the line x = 4.\n\nShow that the combined transformation is a translation, and give its column vector.",
        marks: 3,
        modelAnswer:
          "Reflecting in x = 1 sends the point (x, y) to (2 − x, y), because the image is as far to the other side of x = 1. Reflecting (2 − x, y) in x = 4 sends it to (8 − (2 − x), y) = (x + 6, y). Every point (x, y) moves to (x + 6, y), i.e. every point moves 6 right and 0 up, so the combination is a translation by the vector (6 over 0).",
        markScheme: [
          { point: "First reflection: (x, y) → (2 − x, y) (or a correct numerical point, e.g. (5, 2) → (−3, 2))", keywords: ["2 - x", "2 − x", "2-x", "(2-x, y)"] },
          { point: "Second reflection gives (8 − (2 − x), y) = (x + 6, y)", keywords: ["8 -", "x + 6", "x+6", "6 + x"] },
          { point: "Concludes translation by (6 over 0) — every point moves by the same vector", keywords: ["translation", "(6 over 0)", "6 right", "same vector", "6, 0"] },
        ],
        commonError: "Testing just one point. One point can't show the whole shape moves by the same vector — use a general point (x, y), or argue with the distance to each line.",
        solutions: [
          { label: "Distance argument", steps: ["The mirror lines are 3 units apart.", "Two reflections in parallel lines move every point twice the gap between the lines, perpendicular to them.", "So every point moves 2 × 3 = 6 units to the right: translation (6 over 0)."] },
        ],
        difficulty: "core",
        guideRef: "combined-transformations",
        hints: ["Start with a general point (x, y). Where does it go after reflecting in x = 1?", "Reflecting in x = a sends x to 2a − x.", "Apply that rule twice and simplify."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "written",
        id: "vectors-transformations-p3-q09",
        question: "Describe fully the single transformation that maps triangle A onto triangle B.",
        diagram: `<svg viewBox="0 0 324 264" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid with triangle A at (4, 3), (8, 3), (4, 7) and triangle B at (−2, 0), (−4, 0), (−2, −2)"><rect width="324" height="264" fill="#ffffff"/><line x1="22" y1="242" x2="22" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="42" y1="242" x2="42" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="62" y1="242" x2="62" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="82" y1="242" x2="82" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="102" y1="242" x2="102" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="122" y1="242" x2="122" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="142" y1="242" x2="142" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="162" y1="242" x2="162" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="182" y1="242" x2="182" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="202" y1="242" x2="202" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="222" y1="242" x2="222" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="242" x2="242" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="262" y1="242" x2="262" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="282" y1="242" x2="282" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="302" y1="242" x2="302" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="242" x2="302" y2="242" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="222" x2="302" y2="222" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="202" x2="302" y2="202" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="182" x2="302" y2="182" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="162" x2="302" y2="162" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="142" x2="302" y2="142" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="122" x2="302" y2="122" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="102" x2="302" y2="102" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="82" x2="302" y2="82" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="62" x2="302" y2="62" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="42" x2="302" y2="42" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="22" x2="302" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="182" x2="302" y2="182" stroke="#334155" stroke-width="1.5"/><line x1="122" y1="242" x2="122" y2="22" stroke="#334155" stroke-width="1.5"/><text x="42" y="195" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">−4</text><text x="82" y="195" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">−2</text><text x="162" y="195" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><text x="202" y="195" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">4</text><text x="242" y="195" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">6</text><text x="282" y="195" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">8</text><text x="118" y="226" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">−2</text><text x="118" y="146" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">2</text><text x="118" y="106" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">4</text><text x="118" y="66" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">6</text><text x="118" y="26" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">8</text><text x="118" y="195" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">O</text><text x="300" y="177" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">x</text><text x="128" y="34" font-size="12" font-family="sans-serif" fill="#1f2937">y</text><polygon points="202,122 282,122 202,42" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="228.0" y="103.0" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><polygon points="82,182 42,182 82,222" fill="#fde68a" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="70.0" y="202.0" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text></svg>`,
        marks: 3,
        modelAnswer:
          "Enlargement, scale factor {{-1/2}}, centre (0, 1). B is half the size of A and upside down on the opposite side, so the scale factor is negative and has size {{1/2}}. Joining corresponding vertices, e.g. (4, 3) to (−2, 0) and (8, 3) to (−4, 0), the lines cross at (0, 1).",
        markScheme: [
          { point: "Enlargement", keywords: ["enlargement", "enlarge"] },
          { point: "Scale factor −1/2 (negative, size one half)", keywords: ["-1/2", "−1/2", "-0.5", "−0.5", "negative"] },
          { point: "Centre (0, 1)", keywords: ["(0, 1)", "(0,1)", "centre"] },
        ],
        commonError: "Giving scale factor 2 or +{{1/2}}: B is *smaller* (so the size is {{1/2}}) and on the opposite side of the centre (so it is negative).",
        difficulty: "core",
        guideRef: "transformations",
        hints: ["Compare the lengths of matching sides. Is B bigger or smaller? Is it on the same side of the centre or the opposite side?", "Join matching vertices of A and B with straight lines.", "The lines all cross at the centre of enlargement."],
        strategy: "Draw lines through corresponding points",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "vectors-transformations-p3-q10",
        question:
          "Points A and B have position vectors **OA** = (2 over −3) and **OB** = (8 over 5). M is the midpoint of AB.\n\nFind the position vector **OM**. Type the top number, then the bottom number.",
        answer: { type: "list", values: [5, 1], ordered: true, display: "(5 over 1)" },
        traps: [
          { spec: { type: "list", values: [3, 4], ordered: true }, feedback: "That's {{1/2}}**AB** — the journey from A to M. To get the position vector, start at O: **OM** = **OA** + {{1/2}}**AB**." },
          { spec: { type: "list", values: [6, 8], ordered: true }, feedback: "(6 over 8) is the vector **AB**. You want the position vector of the midpoint." },
        ],
        solution: [
          "**AB** = **OB** − **OA** = (6 over 8).",
          "**OM** = **OA** + {{1/2}}**AB** = (2 over −3) + (3 over 4) = (5 over 1).",
        ],
        solutions: [
          { label: "Average the position vectors", steps: ["**OM** = {{1/2}}(**OA** + **OB**) = {{1/2}}(10 over 2) = (5 over 1)."] },
        ],
        commonError: "Giving {{1/2}}**AB** (a displacement) instead of the position vector of M.",
        difficulty: "core",
        guideRef: "vector-basics",
        hints: ["A position vector is the journey from O to the point.", "Go from O to A, then halfway along AB.", "Or: the midpoint's position vector is the average of the two position vectors."],
        strategy: "Find a route",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "vectors-transformations-p3-q11",
        question:
          "p and q are numbers such that\n\n    p(2 over 3) + q(1 over −1) = (8 over 7)\n\nFind p and q. Give p first.",
        answer: { type: "list", values: [3, 2], ordered: true, display: "p = 3, q = 2" },
        traps: [
          { spec: { type: "list", values: [2, 3], ordered: true }, feedback: "Right values, wrong order: p = 3 and q = 2. Check: 3 × (2 over 3) + 2 × (1 over −1) = (8 over 7)." },
        ],
        solution: [
          "Top components: 2p + q = 8.",
          "Bottom components: 3p − q = 7.",
          "Add the equations: 5p = 15, so p = 3.",
          "Then q = 8 − 2 × 3 = 2.",
          "Check: (6 over 9) + (2 over −2) = (8 over 7). ✓",
        ],
        commonError: "Forming only one equation. A vector equation in 2D gives two equations — one for each component.",
        difficulty: "core",
        guideRef: "vector-basics",
        hints: ["A column vector equation is really two equations. What are they?", "Tops: 2p + q = 8. Bottoms: 3p − q = 7.", "Add the equations to eliminate q."],
        strategy: "Split into components",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "vectors-transformations-p3-q12",
        question:
          "OAB is a triangle. **OA** = **a** and **OB** = **b**. P is the point on AB such that AP : PB = 1 : 3.\n\nFind **OP** in terms of **a** and **b**. Give your answer in its simplest form.",
        diagram: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB with vector a along OA and vector b along OB. P lies on AB with AP to PB in the ratio 1 to 3."><rect width="420" height="280" fill="#ffffff"/><polygon points="40,240 200,40 380,240" fill="#c7d2fe" stroke="none"/><line x1="40" y1="240" x2="200" y2="40" stroke="#1f2937" stroke-width="2"/><polygon points="124,135 120,148 112,142" fill="#1f2937"/><line x1="40" y1="240" x2="380" y2="240" stroke="#1f2937" stroke-width="2"/><polygon points="217,240 204,245 204,235" fill="#1f2937"/><line x1="200" y1="40" x2="380" y2="240" stroke="#1f2937" stroke-width="2"/><circle cx="245" cy="90" r="3.5" fill="#1f2937"/><text x="28" y="255" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="200" y="30" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="392" y="255" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="258" y="84" font-size="14" font-family="sans-serif" text-anchor="start" fill="#1f2937">P</text><text x="108" y="135" font-size="15" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">a</text><text x="210" y="262" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text></svg>`,
        answer: { type: "expression", expr: "(3/4)a+(1/4)b", display: "{{3/4}}**a** + {{1/4}}**b**" },
        traps: [
          { spec: { type: "expression", expr: "(1/4)a+(3/4)b" }, feedback: "The fractions are swapped. P is close to A (only {{1/4}} of the way along AB), so **OP** should contain more **a** than **b**." },
          { spec: { type: "expression", expr: "a+(1/4)b" }, feedback: "**AB** is not **b**. To go from A to B you go back along **a** then out along **b**: **AB** = **b** − **a**." },
          { spec: { type: "expression", expr: "(2/3)a+(1/3)b" }, feedback: "You used {{1/3}} of AB. With AP : PB = 1 : 3 there are 4 parts in total, so AP = {{1/4}}**AB**." },
        ],
        solution: [
          "**AB** = **AO** + **OB** = −**a** + **b**.",
          "AP : PB = 1 : 3, so AP is {{1/4}} of AB: **AP** = {{1/4}}(**b** − **a**).",
          "**OP** = **OA** + **AP** = **a** + {{1/4}}**b** − {{1/4}}**a** = {{3/4}}**a** + {{1/4}}**b**.",
        ],
        commonError: "Taking {{1/3}} of AB: a ratio 1 : 3 splits the line into 1 + 3 = 4 equal parts.",
        difficulty: "core",
        guideRef: "vector-geometry",
        hints: ["Write **AB** in terms of **a** and **b** first.", "What fraction of AB is AP?", "**OP** = **OA** + **AP**. Collect the **a** terms."],
        strategy: "Find a route",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "vectors-transformations-p3-q13",
        question:
          "OABC is a parallelogram. **OA** = **a** and **OC** = **c**.\n\nM is the midpoint of AB. X is the point on the diagonal OB such that OX : XB = 2 : 1.\n\nProve that C, X and M lie on a straight line.",
        diagram: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallelogram OABC with vector a along OA and vector c along OC. M is the midpoint of AB. X lies on the diagonal OB with OX to XB in the ratio 2 to 1."><rect width="420" height="280" fill="#ffffff"/><polygon points="40,240 300,240 380,60 120,60" fill="#c7d2fe" stroke="none"/><line x1="40" y1="240" x2="300" y2="240" stroke="#1f2937" stroke-width="2"/><polygon points="177,240 164,245 164,235" fill="#1f2937"/><line x1="40" y1="240" x2="120" y2="60" stroke="#1f2937" stroke-width="2"/><polygon points="83,144 82,158 73,153" fill="#1f2937"/><line x1="120" y1="60" x2="380" y2="60" stroke="#1f2937" stroke-width="2"/><line x1="300" y1="240" x2="380" y2="60" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="240" x2="380" y2="60" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="340" cy="150" r="3.5" fill="#1f2937"/><circle cx="267" cy="120" r="3.5" fill="#1f2937"/><text x="28" y="255" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="308" y="258" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="388" y="52" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="110" y="52" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="352" y="155" font-size="14" font-family="sans-serif" text-anchor="start" fill="#1f2937">M</text><text x="268" y="110" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">X</text><text x="170" y="262" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text><text x="70" y="145" font-size="15" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">c</text></svg>`,
        marks: 4,
        modelAnswer:
          "**OB** = **a** + **c**, so **OX** = {{2/3}}(**a** + **c**). Then **CX** = **CO** + **OX** = −**c** + {{2/3}}**a** + {{2/3}}**c** = {{2/3}}**a** − {{1/3}}**c**. Also **AB** = **c** (opposite sides of a parallelogram), so **OM** = **a** + {{1/2}}**c** and **CM** = −**c** + **a** + {{1/2}}**c** = **a** − {{1/2}}**c**. Now {{2/3}}(**a** − {{1/2}}**c**) = {{2/3}}**a** − {{1/3}}**c**, so **CX** = {{2/3}}**CM**. Hence CX is parallel to CM, and they share the point C, so C, X and M lie on a straight line (with X two-thirds of the way from C to M).",
        markScheme: [
          { point: "**OX** = 2/3(**a** + **c**) (or **CX** = 2/3**a** − 1/3**c**)", keywords: ["2/3", "a + c", "a+c"] },
          { point: "**CM** = **a** − 1/2**c** (from **AB** = **c**, **AM** = 1/2**c**)", keywords: ["a - 1/2c", "a − 1/2c", "1/2c", "1/2 c"] },
          { point: "Shows **CX** is a multiple of **CM**: **CX** = 2/3 **CM**", keywords: ["2/3cm", "multiple", "2/3 cm", "parallel"] },
          { point: "Conclusion: parallel AND common point C, so collinear", keywords: ["common point", "share", "straight line", "collinear"] },
        ],
        commonError: "Stopping at 'parallel'. Parallel vectors alone could be on two different parallel lines — you must also say they share the point C.",
        solutions: [
          { label: "Compare position vectors", steps: ["**OC** = **c**, **OX** = {{2/3}}**a** + {{2/3}}**c**, **OM** = **a** + {{1/2}}**c**.", "**OX** = {{1/3}}**OC** + {{2/3}}**OM**: check {{1/3}}**c** + {{2/3}}**a** + {{1/3}}**c** = {{2/3}}**a** + {{2/3}}**c**. ✓", "A point whose position vector is a weighted average (weights adding to 1) of two others lies on the line through them — X divides CM in the ratio 2 : 1."] },
        ],
        difficulty: "challenge",
        guideRef: "vector-geometry",
        hints: ["To show three points are collinear, find two vectors from the same point — e.g. **CX** and **CM**.", "In a parallelogram, **AB** = **OC** = **c**. Use that to find **CM**.", "**OX** is {{2/3}} of **OB** = {{2/3}}(**a** + **c**). Now find **CX** = **CO** + **OX**.", "Is **CX** a multiple of **CM**? Then finish with the 'common point' sentence."],
        strategy: "Find a route",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "vectors-transformations-p3-q14",
        question:
          "A shape is rotated 90° anticlockwise about the origin. The image is then translated by the vector (4 over 2).\n\nThe combined transformation is a single rotation. Find the coordinates of its centre — the one point that does not move. Give the x-coordinate first.",
        answer: { type: "list", values: [1, 3], ordered: true, display: "(1, 3)" },
        traps: [
          { spec: { type: "list", values: [2, 1], ordered: true }, feedback: "(2, 1) is half the translation vector. Check it: rotating (2, 1) gives (−1, 2), then translating gives (3, 4) — it moved. Set up the 'does not move' equations instead." },
          { spec: { type: "list", values: [0, 0], ordered: true }, feedback: "The origin is fixed by the rotation, but the translation then moves it to (4, 2). Find the point that ends where it started after **both** steps." },
        ],
        solution: [
          "Rotation 90° anticlockwise about O: (x, y) → (−y, x).",
          "Then translate: (−y, x) → (−y + 4, x + 2).",
          "An invariant point satisfies −y + 4 = x and x + 2 = y.",
          "Substitute y = x + 2: −(x + 2) + 4 = x, so 2 − x = x, x = 1 and y = 3.",
          "Check: (1, 3) → (−3, 1) → (1, 3). ✓",
        ],
        commonError: "Assuming the centre stays at the origin. Adding a translation moves the centre of rotation.",
        difficulty: "challenge",
        guideRef: "combined-transformations",
        hints: ["Write where a general point (x, y) ends up after both steps.", "Rotating 90° anticlockwise about O sends (x, y) to (−y, x).", "An invariant point ends where it started: set the image equal to (x, y) and solve the two equations."],
        strategy: "Look for an invariant",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "vectors-transformations-p3-q15",
        question:
          "**OP** = **a** + 2**b**, **OQ** = 3**a** + k**b** and **OR** = 7**a** + 17**b**, where **a** and **b** are not parallel and k is a constant.\n\nThe points P, Q and R lie on a straight line. Find the value of k.",
        answer: { type: "number", value: 7 },
        traps: [
          { spec: { type: "number", value: 5 }, feedback: "5 is the coefficient of **b** in **PQ**, which is (k − 2). Solve k − 2 = 5." },
          { spec: { type: "fraction", n: 51, d: 7 }, feedback: "You made **OQ** parallel to **OR**. That would put O on the line too. Collinear means **PQ** is parallel to **PR** — compare vectors that start at P." },
        ],
        solution: [
          "**PQ** = **OQ** − **OP** = 2**a** + (k − 2)**b**.",
          "**PR** = **OR** − **OP** = 6**a** + 15**b** = 3(2**a** + 5**b**).",
          "P, Q, R collinear ⇒ **PQ** is a multiple of **PR**. The **a** parts already match (2**a**), so **PQ** = {{1/3}}**PR** = 2**a** + 5**b**.",
          "k − 2 = 5, so k = 7.",
        ],
        commonError: "Comparing position vectors (**OQ** and **OR**) instead of vectors along the line (**PQ** and **PR**).",
        difficulty: "challenge",
        guideRef: "vector-geometry",
        hints: ["Collinear means two vectors along the line, from a common point, are parallel.", "Find **PQ** and **PR** in terms of **a**, **b** and k.", "**PR** = 3(2**a** + 5**b**). What must **PQ** be?"],
        strategy: "Use parallel vectors",
      },
    ],
  },
  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "vectors-transformations-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "vectors-transformations-p4-q01",
        question:
          "A translation maps the point A(5, −2) onto the point A′(−1, 3).\n\nWrite down the column vector of the translation. Type the top number, then the bottom number.",
        answer: { type: "list", values: [-6, 5], ordered: true, display: "(−6 over 5)" },
        traps: [
          { spec: { type: "list", values: [6, -5], ordered: true }, feedback: "That vector goes from A′ back to A. The translation goes from A to A′: subtract A from A′." },
        ],
        solution: [
          "Horizontal: −1 − 5 = −6 (6 left).",
          "Vertical: 3 − (−2) = 5 (5 up).",
          "Vector (−6 over 5).",
        ],
        commonError: "Subtracting the wrong way round, which reverses the direction.",
        difficulty: "warmup",
        guideRef: "transformations",
        hints: ["How far left or right, and how far up or down, from A to A′?", "Image minus original, for each coordinate."],
        strategy: "Image minus object",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "vectors-transformations-p4-q02",
        question:
          "**a** = (4 over −2) and **b** = (2 over 8).\n\nFind |**a** + **b**|. Give your answer in the form {{k sqrt(2)}}, where k is an integer.",
        answer: { type: "expression", expr: "6sqrt(2)", form: "surd", display: "{{6 sqrt(2)}}" },
        traps: [
          { spec: { type: "number", value: 12 }, feedback: "You added the components 6 + 6. The magnitude is a length, so use Pythagoras: {{sqrt(6^2 + 6^2)}}." },
        ],
        solution: [
          "**a** + **b** = (6 over 6).",
          "{{|a + b| = sqrt(6^2 + 6^2) = sqrt(72)}}.",
          "{{sqrt(72) = sqrt(36 * 2) = 6 sqrt(2)}}.",
        ],
        commonError: "Leaving {{sqrt(72)}} unsimplified, or finding |**a**| + |**b**| instead of |**a** + **b**|.",
        difficulty: "warmup",
        guideRef: "vector-basics",
        hints: ["Add the vectors first, then find the length.", "Simplify {{sqrt(72)}} using its largest square factor."],
        strategy: "Work component by component",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "vectors-transformations-p4-q03",
        question:
          "Triangle T has a vertex at (3, 1). T is rotated 90° clockwise about the point (1, −1).\n\nFind the coordinates of the image of the vertex (3, 1). Give the x-coordinate first.",
        answer: { type: "list", values: [3, -3], ordered: true, display: "(3, −3)" },
        traps: [
          { spec: { type: "list", values: [-1, 1], ordered: true }, feedback: "That's a 90° **anticlockwise** rotation. Clockwise turns a vector pointing up-right into one pointing down-right." },
          { spec: { type: "list", values: [1, -3], ordered: true }, feedback: "You rotated about the origin. Work with the vector from the centre (1, −1) to the vertex instead." },
        ],
        solution: [
          "Vector from the centre (1, −1) to (3, 1): (2 over 2).",
          "Rotating 90° clockwise sends (x over y) to (y over −x): (2 over 2) → (2 over −2).",
          "Image = (1 + 2, −1 − 2) = (3, −3).",
        ],
        solutions: [
          { label: "Tracing paper", steps: ["Trace the point and the centre, pin the centre, turn a quarter-turn clockwise.", "The point that was 2 right, 2 up of the centre is now 2 right, 2 down: (3, −3)."] },
        ],
        commonError: "Rotating about the origin instead of the given centre.",
        difficulty: "warmup",
        guideRef: "transformations",
        hints: ["Find the vector from the centre to the vertex.", "A quarter-turn clockwise sends (x over y) to (y over −x). Add the result to the centre."],
        strategy: "Measure from the centre",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "vectors-transformations-p4-q04",
        question: "**c** = (−6 over 9) and **d** = (2 over k).\n\n**c** is parallel to **d**. Find the value of k.",
        answer: { type: "number", value: -3 },
        traps: [
          { spec: { type: "number", value: 3 }, feedback: "Watch the sign: **c** = −3**d**, so 9 = −3k and k = −3." },
        ],
        solution: [
          "Parallel vectors are multiples of each other: **c** = λ**d**.",
          "Top: −6 = 2λ, so λ = −3.",
          "Bottom: 9 = −3k, so k = −3.",
        ],
        commonError: "Dropping the negative multiplier, so the bottom component has the wrong sign.",
        difficulty: "warmup",
        guideRef: "vector-basics",
        hints: ["Parallel vectors are scalar multiples of each other.", "What do you multiply 2 by to get −6? Do the same to k."],
        strategy: "Use parallel vectors",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "written",
        id: "vectors-transformations-p4-q05",
        question: "Describe fully the single transformation that maps triangle A onto triangle B.",
        diagram: `<svg viewBox="0 0 308 242" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Grid with triangle A at (1, 3), (4, 3), (1, 5) and triangle B at (−2, 4), (−2, 7), (−4, 4)"><rect width="308" height="242" fill="#ffffff"/><line x1="22" y1="220" x2="22" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="44" y1="220" x2="44" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="66" y1="220" x2="66" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="88" y1="220" x2="88" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="110" y1="220" x2="110" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="132" y1="220" x2="132" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="154" y1="220" x2="154" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="176" y1="220" x2="176" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="198" y1="220" x2="198" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="220" y1="220" x2="220" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="242" y1="220" x2="242" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="264" y1="220" x2="264" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="286" y1="220" x2="286" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="220" x2="286" y2="220" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="198" x2="286" y2="198" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="176" x2="286" y2="176" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="154" x2="286" y2="154" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="132" x2="286" y2="132" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="110" x2="286" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="88" x2="286" y2="88" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="66" x2="286" y2="66" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="44" x2="286" y2="44" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="22" x2="286" y2="22" stroke="#e5e7eb" stroke-width="1"/><line x1="22" y1="198" x2="286" y2="198" stroke="#334155" stroke-width="1.5"/><line x1="154" y1="220" x2="154" y2="22" stroke="#334155" stroke-width="1.5"/><text x="22" y="211" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">−6</text><text x="66" y="211" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">−4</text><text x="110" y="211" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">−2</text><text x="198" y="211" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">2</text><text x="242" y="211" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">4</text><text x="286" y="211" font-size="10" font-family="sans-serif" text-anchor="middle" fill="#334155">6</text><text x="150" y="158" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">2</text><text x="150" y="114" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">4</text><text x="150" y="70" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">6</text><text x="150" y="26" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">8</text><text x="150" y="211" font-size="10" font-family="sans-serif" text-anchor="end" fill="#334155">O</text><text x="284" y="193" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">x</text><text x="160" y="34" font-size="12" font-family="sans-serif" fill="#1f2937">y</text><polygon points="176,132 242,132 176,88" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="195.8" y="128.2" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><polygon points="110,110 110,44 66,110" fill="#bbf7d0" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="96.8" y="101.80000000000001" font-size="14" font-weight="bold" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text></svg>`,
        marks: 3,
        modelAnswer:
          "Rotation, 90° anticlockwise, centre (−1, 2). Check with the vertex (1, 3): it is (2 over 1) from (−1, 2); a quarter-turn anticlockwise gives (−1 over 2), which lands at (−2, 4) — a vertex of B. The other vertices also match: (4, 3) → (−2, 7) and (1, 5) → (−4, 4).",
        markScheme: [
          { point: "Rotation", keywords: ["rotation", "rotate"] },
          { point: "90° anticlockwise (or 270° clockwise)", keywords: ["90", "anticlockwise", "anti-clockwise", "270"] },
          { point: "Centre (−1, 2)", keywords: ["(-1, 2)", "(−1, 2)", "(-1,2)", "centre"] },
        ],
        commonError: "Leaving out one of the three facts — type, angle with direction, and centre are each a mark. 'Turned 90°' alone scores 1 at most.",
        difficulty: "core",
        guideRef: "transformations",
        hints: ["B is the same size and shape but turned — which transformation is that?", "Which way has the long side turned, and by how much?", "Find the centre by trial with tracing paper, or as the point equidistant from matching vertices: the perpendicular bisectors of the lines joining them meet at the centre."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "vectors-transformations-p4-q06",
        question:
          "Siti designs a logo for her CCA. Shape L has an area of 7 cm². L is enlarged by scale factor −3 to give shape M.\n\nWork out the area of M. Give your answer in cm².",
        answer: { type: "number", value: 63, display: "63 cm²" },
        traps: [
          { spec: { type: "number", value: -63 }, feedback: "Areas can't be negative. The minus sign only turns the image upside down; the area scale factor is {{(-3)^2 = 9}}." },
          { spec: { type: "number", value: 21 }, feedback: "You multiplied the area by the length scale factor. Areas scale by the square of it: {{3^2 = 9}}." },
        ],
        solution: [
          "Lengths are multiplied by 3 (the sign only affects the orientation).",
          "Areas are multiplied by {{3^2 = 9}}.",
          "Area of M = 7 × 9 = 63 cm².",
        ],
        commonError: "Using the length scale factor for the area, or giving a negative area.",
        difficulty: "core",
        guideRef: "transformations",
        hints: ["What does the minus sign change — the size or the position?", "If lengths are multiplied by 3, what are areas multiplied by?"],
        strategy: "Find the scale factor",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "vectors-transformations-p4-q07",
        question:
          "Triangle A is reflected in the line y = x to give triangle B. Triangle B is reflected in the y-axis to give triangle C.\n\nThe single transformation that maps A onto C is a rotation about the origin. Work out the angle of this rotation, measured **anticlockwise**, in degrees (between 0° and 360°).",
        answer: { type: "number", value: 90, display: "90°" },
        traps: [
          { spec: { type: "number", value: 270 }, feedback: "270° anticlockwise is the same as 90° clockwise. Follow (2, 1): it goes to (1, 2), then to (−1, 2) — a quarter-turn anticlockwise." },
          { spec: { type: "number", value: 180 }, feedback: "Two reflections give a rotation through **twice** the angle between the mirror lines. y = x and the y-axis meet at 45°, so the turn is 90°." },
        ],
        solution: [
          "Reflect in y = x: (x, y) → (y, x).",
          "Reflect in the y-axis: (y, x) → (−y, x).",
          "(x, y) → (−y, x) is a rotation of 90° anticlockwise about O.",
          "Check with (2, 1): → (1, 2) → (−1, 2), a quarter-turn anticlockwise. ✓",
        ],
        solutions: [
          { label: "Angle between the mirrors", steps: ["Two reflections in lines that meet at O give a rotation about O through twice the angle between the lines.", "The angle from y = x round to the y-axis is 45°, so the rotation is 2 × 45° = 90°, in the direction from the first mirror to the second (anticlockwise)."] },
        ],
        commonError: "Getting the direction wrong — check with a test point.",
        difficulty: "core",
        guideRef: "combined-transformations",
        hints: ["Follow a simple point such as (2, 1) through both reflections.", "Reflecting in y = x swaps the coordinates; reflecting in the y-axis changes the sign of x.", "Compare (2, 1) with its final image: which way has it turned?"],
        strategy: "Try a test point",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "vectors-transformations-p4-q08",
        question:
          "The vector **p** = (k over k + 1), where k is a positive integer. The magnitude of **p** is 5.\n\nFind the value of k.",
        answer: { type: "number", value: 3 },
        traps: [
          { spec: { type: "number", value: -4 }, feedback: "−4 does solve the equation, but k must be positive. Check: (3 over 4) has length 5. ✓" },
        ],
        solution: [
          "{{k^2 + (k + 1)^2 = 5^2}}",
          "{{2k^2 + 2k + 1 = 25}}, so {{k^2 + k - 12 = 0}}.",
          "(k + 4)(k − 3) = 0, so k = 3 or k = −4.",
          "k is positive, so k = 3. Check: {{sqrt(3^2 + 4^2) = 5}}. ✓",
        ],
        commonError: "Writing {{(k + 1)^2 = k^2 + 1}} — the middle term 2k is missing.",
        difficulty: "core",
        guideRef: "vector-basics",
        hints: ["Magnitude means Pythagoras: square the components and add.", "Set {{k^2 + (k + 1)^2}} equal to 25 and expand.", "Solve the quadratic and use the fact that k is positive."],
        strategy: "Form an equation",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "vectors-transformations-p4-q09",
        question:
          "ABCDEF is a regular hexagon with centre O. **OA** = **a** and **OB** = **b**.\n\nFind the vector **AC** in terms of **a** and **b**. Give your answer in its simplest form.",
        diagram: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Regular hexagon ABCDEF with centre O. Vector a runs from O to A and vector b runs from O to B."><rect width="420" height="280" fill="#ffffff"/><polygon points="320,150 265,55 155,55 100,150 155,245 265,245" fill="#bae6fd" stroke="none"/><line x1="320" y1="150" x2="265" y2="55" stroke="#1f2937" stroke-width="2"/><line x1="265" y1="55" x2="155" y2="55" stroke="#1f2937" stroke-width="2"/><line x1="155" y1="55" x2="100" y2="150" stroke="#1f2937" stroke-width="2"/><line x1="100" y1="150" x2="155" y2="245" stroke="#1f2937" stroke-width="2"/><line x1="155" y1="245" x2="265" y2="245" stroke="#1f2937" stroke-width="2"/><line x1="265" y1="245" x2="320" y2="150" stroke="#1f2937" stroke-width="2"/><line x1="210" y1="150" x2="320" y2="150" stroke="#1f2937" stroke-width="2"/><polygon points="272,150 259,155 259,145" fill="#1f2937"/><line x1="210" y1="150" x2="265" y2="55" stroke="#1f2937" stroke-width="2"/><polygon points="241,96 239,110 230,105" fill="#1f2937"/><circle cx="210" cy="150" r="3.5" fill="#1f2937"/><text x="204" y="168" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="334" y="155" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="275" y="49" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="145" y="49" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="86" y="155" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">D</text><text x="145" y="263" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">E</text><text x="275" y="263" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">F</text><text x="265" y="170" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">a</text><text x="224" y="98" font-size="15" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">b</text></svg>`,
        answer: { type: "expression", expr: "b-2a", display: "**b** − 2**a**" },
        traps: [
          { spec: { type: "expression", expr: "b-a" }, feedback: "**b** − **a** is **AB** (and also **OC**). You need to go from A all the way to C." },
          { spec: { type: "expression", expr: "2a-b" }, feedback: "That's **CA** — the right length but the wrong direction." },
        ],
        solution: [
          "The hexagon splits into six equilateral triangles, so OABC is a rhombus and **OC** = **AB** = **b** − **a**.",
          "**AC** = **AO** + **OC** = −**a** + **b** − **a** = **b** − 2**a**.",
        ],
        solutions: [
          { label: "Via B", steps: ["**BC** is parallel to **AO** and the same length, so **BC** = −**a**.", "**AC** = **AB** + **BC** = (**b** − **a**) − **a** = **b** − 2**a**."] },
        ],
        commonError: "Treating **OC** as **a** + **b**. In a regular hexagon **OC** is parallel to AB, so **OC** = **b** − **a**.",
        difficulty: "core",
        guideRef: "vector-geometry",
        hints: ["A regular hexagon is six equilateral triangles meeting at O. Which sides are parallel to OA?", "**BC** is equal and parallel to **AO**.", "Find a route from A to C made of vectors you know."],
        strategy: "Find a route",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "vectors-transformations-p4-q10",
        question:
          "OABC is a trapezium. **OA** = 6**a**, **OC** = 3**c** and **CB** = 3**a**.\n\nN is the point on AB such that AN : NB = 1 : 2.\n\nFind **ON** in terms of **a** and **c**. Give your answer in its simplest form.",
        diagram: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trapezium OABC. OA is 6a, OC is 3c and CB is 3a, so CB is parallel to OA. N lies on AB with AN to NB in the ratio 1 to 2."><rect width="420" height="280" fill="#ffffff"/><polygon points="40,240 340,240 250,80 100,80" fill="#fde68a" stroke="none"/><line x1="40" y1="240" x2="340" y2="240" stroke="#1f2937" stroke-width="2"/><polygon points="197,240 184,245 184,235" fill="#1f2937"/><line x1="40" y1="240" x2="100" y2="80" stroke="#1f2937" stroke-width="2"/><polygon points="72,153 73,167 63,164" fill="#1f2937"/><line x1="100" y1="80" x2="250" y2="80" stroke="#1f2937" stroke-width="2"/><polygon points="182,80 169,85 169,75" fill="#1f2937"/><line x1="340" y1="240" x2="250" y2="80" stroke="#1f2937" stroke-width="2"/><circle cx="310" cy="187" r="3.5" fill="#1f2937"/><text x="28" y="255" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="350" y="255" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="258" y="70" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="92" y="70" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="320" y="190" font-size="14" font-family="sans-serif" text-anchor="start" fill="#1f2937">N</text><text x="190" y="262" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">6a</text><text x="58" y="160" font-size="15" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">3c</text><text x="175" y="70" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">3a</text></svg>`,
        answer: { type: "expression", expr: "5a+c", display: "5**a** + **c**" },
        traps: [
          { spec: { type: "expression", expr: "4a+2c" }, feedback: "You went {{2/3}} of the way from A to B. AN : NB = 1 : 2 means N is only {{1/3}} of the way along AB." },
          { spec: { type: "expression", expr: "(9/2)a+(3/2)c" }, feedback: "That's the midpoint of AB. N splits AB in the ratio 1 : 2 — 3 parts in all." },
        ],
        solution: [
          "**AB** = **AO** + **OC** + **CB** = −6**a** + 3**c** + 3**a** = 3**c** − 3**a**.",
          "**AN** = {{1/3}}**AB** = **c** − **a**.",
          "**ON** = **OA** + **AN** = 6**a** + **c** − **a** = 5**a** + **c**.",
        ],
        commonError: "Writing **AB** = **CB** − **OA** or similar — always build the route vector by vector: A → O → C → B.",
        difficulty: "core",
        guideRef: "vector-geometry",
        hints: ["Find a route from A to B using the vectors you know.", "**AB** = **AO** + **OC** + **CB**. Simplify it.", "N is {{1/3}} of the way from A to B. **ON** = **OA** + **AN**."],
        strategy: "Find a route",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "written",
        id: "vectors-transformations-p4-q11",
        question:
          "OAB is a triangle. **OA** = 2**a** and **OB** = 2**b**.\n\nM is the midpoint of OA and N is the midpoint of AB.\n\nShow that MN is parallel to OB, and state the ratio MN : OB.",
        diagram: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB with OA equal to 2a and OB equal to 2b. M is the midpoint of OA and N is the midpoint of AB. M and N are joined."><rect width="420" height="280" fill="#ffffff"/><polygon points="40,240 160,50 380,240" fill="#bbf7d0" stroke="none"/><line x1="40" y1="240" x2="160" y2="50" stroke="#1f2937" stroke-width="2"/><polygon points="104,139 101,153 93,147" fill="#1f2937"/><line x1="40" y1="240" x2="380" y2="240" stroke="#1f2937" stroke-width="2"/><polygon points="217,240 204,245 204,235" fill="#1f2937"/><line x1="160" y1="50" x2="380" y2="240" stroke="#1f2937" stroke-width="2"/><line x1="100" y1="145" x2="270" y2="145" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="100" cy="145" r="3.5" fill="#1f2937"/><circle cx="270" cy="145" r="3.5" fill="#1f2937"/><text x="28" y="255" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="160" y="40" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="392" y="255" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="90" y="145" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">M</text><text x="282" y="145" font-size="14" font-family="sans-serif" text-anchor="start" fill="#1f2937">N</text><text x="60" y="190" font-size="15" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">2a</text><text x="210" y="262" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">2b</text></svg>`,
        marks: 3,
        modelAnswer:
          "**OM** = **a**. **AB** = −2**a** + 2**b**, so **AN** = −**a** + **b** and **ON** = 2**a** − **a** + **b** = **a** + **b**. Then **MN** = **ON** − **OM** = **a** + **b** − **a** = **b**. Since **OB** = 2**b** = 2**MN**, MN is a multiple of OB, so MN is parallel to OB, and MN : OB = 1 : 2.",
        markScheme: [
          { point: "**ON** = **a** + **b** (or **AN** = **b** − **a**)", keywords: ["a + b", "a+b", "b - a", "b − a", "-a + b"] },
          { point: "**MN** = **b**", keywords: ["mn = b", "= b", "mn"] },
          { point: "**OB** = 2**MN**, so parallel, with ratio MN : OB = 1 : 2", keywords: ["parallel", "multiple", "1 : 2", "1:2", "2b", "half"] },
        ],
        commonError: "Saying 'parallel' without showing **OB** is a scalar multiple of **MN**.",
        difficulty: "core",
        guideRef: "vector-geometry",
        hints: ["Find **OM** and **ON** in terms of **a** and **b**.", "**ON** = **OA** + {{1/2}}**AB**.", "**MN** = **MO** + **ON**. Compare it with **OB**."],
        strategy: "Find a route",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "vectors-transformations-p4-q12",
        question:
          "A survey drone takes off from a point O on Sentosa. It flies three straight legs with displacement vectors\n\n    (3 over 4), (5 over −1) and (−2 over 6)\n\nwhere the units are kilometres east and north.\n\nWork out the straight-line distance of the drone from O at the end of the third leg. Give your answer in km, correct to 3 significant figures.",
        answer: { type: "number", value: 10.8, display: "10.8 km" },
        traps: [
          { spec: { type: "number", value: 16.4 }, feedback: "That's the total distance flown along all three legs. The question asks for the straight-line distance from O — add the vectors first, then find one magnitude." },
          { spec: { type: "number", value: 15 }, feedback: "You added the components 6 + 9. Use Pythagoras on (6 over 9)." },
        ],
        solution: [
          "Resultant displacement: (3 + 5 − 2 over 4 − 1 + 6) = (6 over 9).",
          "Distance = {{sqrt(6^2 + 9^2) = sqrt(117) = 10.816...}}",
          "= 10.8 km (3 s.f.).",
        ],
        commonError: "Finding the length of each leg and adding — that's the distance travelled, not the distance from O.",
        difficulty: "core",
        guideRef: "vector-basics",
        hints: ["Where does the drone end up? Add the three vectors.", "Then find the magnitude of the resultant with Pythagoras."],
        strategy: "Add the journey",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "vectors-transformations-p4-q13",
        question:
          "OAB is a triangle. **OA** = **a** and **OB** = **b**.\n\nM is the midpoint of OB. N is the point on OA such that ON : NA = 2 : 1. The lines AM and BN intersect at X.\n\nFind **OX** in terms of **a** and **b**. Give your answer in its simplest form.",
        diagram: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB with vector a along OA and vector b along OB. M is the midpoint of OB. N lies on OA with ON to NA in the ratio 2 to 1. Lines AM and BN cross at X."><rect width="420" height="280" fill="#ffffff"/><polygon points="40,250 180,40 400,250" fill="#c7d2fe" stroke="none"/><line x1="40" y1="250" x2="180" y2="40" stroke="#1f2937" stroke-width="2"/><polygon points="114,139 111,153 103,147" fill="#1f2937"/><line x1="40" y1="250" x2="400" y2="250" stroke="#1f2937" stroke-width="2"/><polygon points="227,250 214,255 214,245" fill="#1f2937"/><line x1="180" y1="40" x2="400" y2="250" stroke="#1f2937" stroke-width="2"/><line x1="180" y1="40" x2="220" y2="250" stroke="#1f2937" stroke-width="1.5"/><line x1="400" y1="250" x2="133" y2="110" stroke="#1f2937" stroke-width="1.5"/><circle cx="220" cy="250" r="3.5" fill="#1f2937"/><circle cx="133" cy="110" r="3.5" fill="#1f2937"/><circle cx="200" cy="145" r="3.5" fill="#1f2937"/><text x="28" y="265" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="180" y="30" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="412" y="265" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="220" y="270" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">M</text><text x="122" y="108" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">N</text><text x="208" y="135" font-size="14" font-family="sans-serif" text-anchor="start" fill="#1f2937">X</text><text x="80" y="160" font-size="15" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">a</text><text x="130" y="268" font-size="15" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">b</text></svg>`,
        answer: { type: "expression", expr: "(1/2)a+(1/4)b", display: "{{1/2}}**a** + {{1/4}}**b**" },
        traps: [
          { spec: { type: "expression", expr: "(1/3)a+(1/3)b" }, feedback: "That's the centroid, where the **medians** meet. BN is not a median here (N is not the midpoint of OA), so set up two routes to X with unknown multipliers." },
          { spec: { type: "expression", expr: "(1/2)a+(1/2)b" }, feedback: "That's the midpoint of AB. X lies on AM and on BN — write **OX** in two ways with unknowns λ and μ, then compare coefficients." },
        ],
        solution: [
          "X is on AM: **OX** = **a** + λ({{1/2}}**b** − **a**) = (1 − λ)**a** + {{1/2}}λ**b**.",
          "X is on BN: **OX** = **b** + μ({{2/3}}**a** − **b**) = {{2/3}}μ**a** + (1 − μ)**b**.",
          "**a** and **b** are not parallel, so compare coefficients: 1 − λ = {{2/3}}μ and {{1/2}}λ = 1 − μ.",
          "From the second, λ = 2 − 2μ. Substitute: 1 − 2 + 2μ = {{2/3}}μ, so {{4/3}}μ = 1 and μ = {{3/4}}; then λ = {{1/2}}.",
          "**OX** = {{1/2}}**a** + {{1/4}}**b**.",
        ],
        solutions: [
          { label: "Check the answer", steps: ["X should be the midpoint of AM: {{1/2}}(**a** + {{1/2}}**b**) = {{1/2}}**a** + {{1/4}}**b**. ✓", "And {{3/4}} of the way from B to N: **b** + {{3/4}}({{2/3}}**a** − **b**) = {{1/2}}**a** + {{1/4}}**b**. ✓"] },
        ],
        commonError: "Using the same unknown for both lines. X is a different fraction of the way along AM and along BN, so you need two unknowns.",
        difficulty: "challenge",
        guideRef: "vector-geometry",
        hints: ["X lies on two lines, so you can write **OX** in two different ways.", "Use **OX** = **OA** + λ**AM** and **OX** = **OB** + μ**BN**, with **AM** = {{1/2}}**b** − **a** and **BN** = {{2/3}}**a** − **b**.", "Since **a** and **b** aren't parallel, the coefficients of **a** must match, and so must the coefficients of **b**.", "Solve the two simultaneous equations for λ and μ."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "vectors-transformations-p4-q14",
        question:
          "Shape P is enlarged by scale factor 2 with centre (0, 0) to give shape Q. Shape Q is then enlarged by scale factor {{1/2}} with centre (4, 2) to give shape R.\n\nThe single transformation that maps P onto R is a translation. Find its column vector. Type the top number, then the bottom number.",
        answer: { type: "list", values: [2, 1], ordered: true, display: "(2 over 1)" },
        traps: [
          { spec: { type: "list", values: [0, 0], ordered: true }, feedback: "The scale factors multiply to 1, so R is congruent to P — but the centres are different, so R has moved. Follow a point such as (0, 0)." },
          { spec: { type: "list", values: [4, 2], ordered: true }, feedback: "Follow (0, 0): the first enlargement keeps it at (0, 0); the second sends it halfway towards (4, 2), to (2, 1). So every point moves by (2 over 1)." },
        ],
        solution: [
          "First enlargement: (x, y) → (2x, 2y).",
          "Second: image = (4, 2) + {{1/2}}[(2x, 2y) − (4, 2)] = (4, 2) + (x − 2, y − 1) = (x + 2, y + 1).",
          "Every point moves by (2 over 1): translation by (2 over 1).",
        ],
        solutions: [
          { label: "Follow one point", steps: ["Scale factors 2 × {{1/2}} = 1, so R is congruent to P and not turned — a translation.", "Track the origin: (0, 0) → (0, 0) → (4, 2) + {{1/2}}((0, 0) − (4, 2)) = (2, 1).", "So the translation vector is (2 over 1)."] },
        ],
        commonError: "Assuming that scale factors 2 and {{1/2}} cancel to 'no change' — that only happens if the two centres are the same.",
        difficulty: "challenge",
        guideRef: "combined-transformations",
        hints: ["What is the overall scale factor? So what kind of transformation must P → R be?", "Follow one convenient point through both enlargements.", "Image of a point X under enlargement k centre C: C + k(X − C)."],
        strategy: "Try a test point",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "vectors-transformations-p4-q15",
        question:
          "OAB is a triangle. **OA** = **a** and **OB** = **b**.\n\nP is the point on AB such that AP : PB = 1 : 2. Q is the point such that **OQ** = 3**OP**. E is the point such that **OE** = 3**a** + 2**b**.\n\nProve that A, Q and E lie on a straight line.",
        marks: 4,
        modelAnswer:
          "**AB** = **b** − **a**, so **OP** = **a** + {{1/3}}(**b** − **a**) = {{2/3}}**a** + {{1/3}}**b**. Then **OQ** = 3**OP** = 2**a** + **b**. **AQ** = **OQ** − **OA** = **a** + **b**, and **AE** = **OE** − **OA** = 2**a** + 2**b** = 2(**a** + **b**). So **AE** = 2**AQ**: the vectors are parallel, and both start at A, so A, Q and E lie on a straight line (Q is the midpoint of AE).",
        markScheme: [
          { point: "**OP** = 2/3**a** + 1/3**b**", keywords: ["2/3a", "2/3 a", "1/3b", "1/3 b", "1/3(b - a)"] },
          { point: "**OQ** = 2**a** + **b**", keywords: ["2a + b", "2a+b"] },
          { point: "**AQ** = **a** + **b** and **AE** = 2**a** + 2**b** (or **QE** = **a** + **b**)", keywords: ["a + b", "a+b", "2a + 2b", "2(a + b)"] },
          { point: "**AE** = 2**AQ** — parallel with common point A, so collinear", keywords: ["parallel", "common point", "collinear", "straight line", "multiple"] },
        ],
        commonError: "Showing **AQ** and **AE** are parallel but not mentioning the shared point A — Edexcel withholds the final mark.",
        solutions: [
          { label: "Via QE", steps: ["**QE** = **OE** − **OQ** = (3**a** + 2**b**) − (2**a** + **b**) = **a** + **b**.", "**AQ** = **a** + **b** = **QE**, so AQ and QE are parallel, share the point Q, and Q is the midpoint of AE."] },
        ],
        difficulty: "challenge",
        guideRef: "vector-geometry",
        hints: ["Start by finding **OP** — P is {{1/3}} of the way from A to B.", "Then **OQ** = 3**OP**.", "Find two vectors from the same point, e.g. **AQ** and **AE**.", "Is one a multiple of the other? Finish with the 'common point' sentence."],
        strategy: "Use parallel vectors",
      },
    ],
  },
];
