import type { TopicGuide } from "../../types.ts";

// ---------------------------------------------------------------------------
// Vectors & Transformations — guide (textbook chapter + learn-smart).
// Edexcel IGCSE 4MA1 Higher 5.1–5.2: transformations (reflect, rotate,
// translate, enlarge incl. fractional and negative scale factors), combined
// transformations and invariant points, column vectors, vector geometry.
//
// Notation used in this file: a column vector is written (top over bottom),
// e.g. (3 over −2) = 3 right, 2 down. Vectors are bold (**a**); the vector
// from A to B is written →AB.
// ---------------------------------------------------------------------------

export const guide: TopicGuide = {
  id: "vectors-transformations",
  title: "Vectors & Transformations",
  strand: "Geometry & Measure",
  icon: "➡️",
  summary: "Move, flip, turn and resize shapes exactly — then let vectors turn geometry into algebra.",
  intro:
    "Every 4MA1 Higher paper has a 'describe fully the single transformation' question and, near the end, a vector-geometry proof worth 4–5 marks — one of the most reliable sources of grade 8–9 marks if you know the method. Transformations train you to give *every* detail an examiner needs: a rotation without its centre scores almost nothing. Vectors then give you a new superpower: instead of measuring, you prove that lines are parallel or that points lie on a straight line using nothing but algebra. The two halves meet in the column vector, which describes a translation and is the simplest vector of all.",
  guide: [
    // -----------------------------------------------------------------------
    {
      id: "transformations",
      heading: "Transformations",
      discovery: {
        problem:
          "Triangle T has vertices (2, 1), (4, 1) and (4, 2). Without drawing yet, predict where it goes if you (a) reflect it in the line y = x, (b) rotate it 90° anticlockwise about the origin. Now sketch both and check. Can you write a rule like (x, y) → (?, ?) for each one?",
        idea:
          "Reflecting in y = x **swaps the coordinates**: (2, 1) → (1, 2), (4, 1) → (1, 4), (4, 2) → (2, 4). Rotating 90° anticlockwise about O swaps them **and** makes the new x negative: (x, y) → (−y, x), so (2, 1) → (−1, 2), (4, 1) → (−1, 4), (4, 2) → (−2, 4). Look at the two images: they are mirror images of each other. A reflection flips a shape over; a rotation only turns it — and that difference is how you tell them apart on an exam diagram.",
      },
      body:
        "A **transformation** moves every point of a shape (the **object**) to a new position (the **image**). There are four on the IGCSE syllabus. The first three keep lengths and angles, so the image is **congruent** to the object. An enlargement keeps angles but scales lengths, so the image is **similar**.\n\n**1. Reflection** — in a mirror line. Each point goes the same perpendicular distance to the other side of the line. Learn the lines by their equations: x = a is **vertical**, y = b is **horizontal**, y = x and y = −x are the diagonals.\n\n| Reflection in | (x, y) goes to |\n|---|---|\n| the x-axis (y = 0) | (x, −y) |\n| the y-axis (x = 0) | (−x, y) |\n| y = x | (y, x) |\n| y = −x | (−y, −x) |\n| x = a | (2a − x, y) |\n| y = b | (x, 2b − y) |\n\n**2. Rotation** — needs a **centre**, an **angle** and a **direction** (clockwise or anticlockwise; a 180° turn needs no direction). About the origin:\n\n| Rotation about O | (x, y) goes to |\n|---|---|\n| 90° clockwise | (y, −x) |\n| 90° anticlockwise | (−y, x) |\n| 180° | (−x, −y) |\n\nFor any other centre C: find the move from C to the point, rotate that move, then add it back on to C. To **find** a centre, use tracing paper (turn about a guessed point until the shapes match), or draw the perpendicular bisector of the line joining a point to its image for two pairs of points — the bisectors cross at the centre.\n\n**3. Translation** — a slide by a column vector. On paper the vector is two numbers stacked in a tall bracket; on screen we write it as **(top over bottom)**. The top number is the move right (negative = left); the bottom number is the move up (negative = down). Translation by (a over b) sends (x, y) to (x + a, y + b). To find the vector: image − object, for x and then for y.\n\n**4. Enlargement** — needs a **scale factor** k and a **centre** C. Every point moves so that its distance from C is multiplied by k, along the same line through C:\n\n    image = C + k × (point − C), for x and y separately\n\n- k > 1: bigger. 0 < k < 1 (a **fractional** scale factor): smaller — still called an enlargement.\n- k < 0 (a **negative** scale factor): the image is on the **other side** of the centre and upside down (turned through 180°), with lengths multiplied by the size of k.\n- Lengths are multiplied by the size of k, areas by {{k^2}}. Angles never change.\n- To **find** the centre, join each vertex to its image and extend the lines: they meet at C. The scale factor is image length ÷ object length — negative if the image is inverted on the other side of C.\n\n**Describe fully.** The question 'Describe fully the **single** transformation…' is marked on the details:\n\n| Transformation | You must give | Example of a full answer |\n|---|---|---|\n| Reflection | the equation of the mirror line | reflection in y = −x |\n| Rotation | angle, direction, centre | rotation 90° clockwise about (1, 0) |\n| Translation | the column vector | translation by (−3 over 5) |\n| Enlargement | scale factor, centre | enlargement, scale factor −{{1/2}}, centre (0, 1) |\n\n> Give exactly **one** transformation. 'Reflection then translation' scores zero on a 'single transformation' question, even if it does produce the image.",
      diagram: `<svg viewBox="0 0 480 268" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left grid: triangle T with vertices (2, 1), (4, 1), (4, 2). Its reflection in the dashed line y = x is triangle R with vertices (1, 2), (1, 4), (2, 4). Its rotation 90 degrees anticlockwise about the origin is triangle Q with vertices (−1, 2), (−1, 4), (−2, 4). Right grid: triangle P with vertices (2, 2), (4, 2), (2, 4) is enlarged by scale factor −1/2 about the origin O to give triangle P′ with vertices (−1, −1), (−2, −1), (−1, −2); dashed rays from each vertex of P pass through O to the matching vertex of P′."><rect x="0" y="0" width="480" height="268" fill="#ffffff"/><text x="122" y="18" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">Reflect and rotate</text><line x1="22" y1="240" x2="22" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="42" y1="240" x2="42" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="62" y1="240" x2="62" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="82" y1="240" x2="82" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="102" y1="240" x2="102" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="122" y1="240" x2="122" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="142" y1="240" x2="142" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="162" y1="240" x2="162" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="182" y1="240" x2="182" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="202" y1="240" x2="202" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="222" y1="240" x2="222" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="240" x2="222" y2="240" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="220" x2="222" y2="220" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="200" x2="222" y2="200" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="180" x2="222" y2="180" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="160" x2="222" y2="160" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="140" x2="222" y2="140" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="120" x2="222" y2="120" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="100" x2="222" y2="100" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="80" x2="222" y2="80" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="60" x2="222" y2="60" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="40" x2="222" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="140" x2="222" y2="140" stroke="#334155" stroke-width="1.4"/><line x1="122" y1="240" x2="122" y2="40" stroke="#334155" stroke-width="1.4"/><text x="22" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−5</text><text x="42" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−4</text><text x="62" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−3</text><text x="82" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−2</text><text x="102" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−1</text><text x="142" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">1</text><text x="162" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">2</text><text x="182" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">3</text><text x="202" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">4</text><text x="222" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">5</text><text x="118" y="243.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−5</text><text x="118" y="223.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−4</text><text x="118" y="203.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−3</text><text x="118" y="183.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−2</text><text x="118" y="163.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−1</text><text x="118" y="123.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">1</text><text x="118" y="103.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">2</text><text x="118" y="83.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">3</text><text x="118" y="63.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">4</text><text x="118" y="43.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">5</text><text x="118" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">0</text><text x="228" y="144" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937">x</text><text x="122" y="35" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937" text-anchor="middle">y</text><line x1="22" y1="240" x2="222" y2="40" stroke="#b45309" stroke-width="1.6" stroke-dasharray="5 4"/><text x="204" y="42" font-size="11" font-family="sans-serif" fill="#b45309" text-anchor="end">y = x</text><polygon points="162,120 202,120 202,100" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><polygon points="142,100 142,60 162,60" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><polygon points="102,100 102,60 82,60" fill="#fde68a" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><text x="190" y="116.5" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">T</text><text x="150" y="78.5" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">R</text><text x="94" y="78.5" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">Q</text><text x="362" y="18" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">Enlarge, scale factor −½</text><line x1="262" y1="240" x2="262" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="240" x2="282" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="302" y1="240" x2="302" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="322" y1="240" x2="322" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="342" y1="240" x2="342" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="362" y1="240" x2="362" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="382" y1="240" x2="382" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="402" y1="240" x2="402" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="422" y1="240" x2="422" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="442" y1="240" x2="442" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="462" y1="240" x2="462" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="240" x2="462" y2="240" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="220" x2="462" y2="220" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="200" x2="462" y2="200" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="180" x2="462" y2="180" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="160" x2="462" y2="160" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="140" x2="462" y2="140" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="120" x2="462" y2="120" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="100" x2="462" y2="100" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="80" x2="462" y2="80" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="60" x2="462" y2="60" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="40" x2="462" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="262" y1="140" x2="462" y2="140" stroke="#334155" stroke-width="1.4"/><line x1="362" y1="240" x2="362" y2="40" stroke="#334155" stroke-width="1.4"/><text x="262" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−5</text><text x="282" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−4</text><text x="302" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−3</text><text x="322" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−2</text><text x="342" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−1</text><text x="382" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">1</text><text x="402" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">2</text><text x="422" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">3</text><text x="442" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">4</text><text x="462" y="152" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">5</text><text x="358" y="243.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−5</text><text x="358" y="223.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−4</text><text x="358" y="203.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−3</text><text x="358" y="183.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−2</text><text x="358" y="163.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−1</text><text x="358" y="123.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">1</text><text x="358" y="103.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">2</text><text x="358" y="83.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">3</text><text x="358" y="63.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">4</text><text x="358" y="43.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">5</text><text x="468" y="144" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937">x</text><text x="362" y="35" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937" text-anchor="middle">y</text><line x1="402" y1="100" x2="342" y2="160" stroke="#64748b" stroke-width="1.1" stroke-dasharray="4 3"/><line x1="442" y1="100" x2="322" y2="160" stroke="#64748b" stroke-width="1.1" stroke-dasharray="4 3"/><line x1="402" y1="60" x2="342" y2="180" stroke="#64748b" stroke-width="1.1" stroke-dasharray="4 3"/><polygon points="402,100 442,100 402,60" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><polygon points="342,160 322,160 342,180" fill="#fecaca" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><circle cx="362" cy="140" r="3" fill="#b45309"/><text x="414" y="92.5" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">P</text><text x="334" y="171.5" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">P′</text><text x="367" y="135" font-size="11" font-family="sans-serif" fill="#b45309" font-weight="bold">O</text></svg>`,
      diagramCaption:
        "Left: T reflected in y = x gives R (coordinates swap); T rotated 90° anticlockwise about O gives Q. R and Q are mirror images of each other. Right: an enlargement with scale factor −{{1/2}} about O — the rays pass through the centre, so P′ is on the opposite side, half the size and upside down.",
      workedExamples: [
        {
          title: "Describe a rotation fully",
          problem:
            "Triangle A has vertices (1, 2), (1, 4) and (2, 4). Triangle B has vertices (3, 0), (5, 0) and (5, −1). Describe fully the single transformation that maps triangle A onto triangle B.",
          steps: [
            "Same size, and the triangle has been turned but not flipped (going round the matching vertices in order runs the same way round in both). So it is a **rotation**.",
            "Angle and direction: the side from (1, 2) to (1, 4) points straight **up**; its image, from (3, 0) to (5, 0), points to the **right**. Up → right is a quarter-turn **clockwise**: 90° clockwise.",
            "Centre: it is equally far from each point and its image, so it lies on the perpendicular bisector of each join. The join (1, 2) → (3, 0) has midpoint (2, 1) and gradient −1, so its bisector has gradient 1: y = x − 1.",
            "The join (2, 4) → (5, −1) has midpoint (3.5, 1.5) and gradient {{-5/3}}, so its bisector is {{y - 1.5 = 3/5 (x - 3.5)}}.",
            "Solve: {{x - 1 - 1.5 = 0.6x - 2.1}}, so 0.4x = 0.4, x = 1 and y = 0. The centre is (1, 0).",
            "Check with the third vertex: (1, 4) is 4 **above** the centre; a quarter-turn clockwise makes that 4 to the **right**: (1 + 4, 0) = (5, 0). ✓",
          ],
          answer: "Rotation, 90° clockwise, centre (1, 0).",
          yourTurn: {
            question:
              "Your turn: the point (4, 1) is rotated 90° anticlockwise about the point (2, 3). Give the coordinates of its image, x first.",
            answer: { type: "list", values: [4, 5], ordered: true, display: "(4, 5)" },
            solution:
              "From the centre (2, 3) to the point (4, 1) is 2 right, 2 down. A quarter-turn anticlockwise turns 'right' into 'up' and 'down' into 'right': 2 up, 2 right. So the image is (2 + 2, 3 + 2) = (4, 5).",
          },
        },
        {
          title: "Enlarge with a negative fractional scale factor",
          problem:
            "Triangle P has vertices (2, 3), (6, 3) and (2, 7). Enlarge triangle P by scale factor −{{1/2}}, centre (0, 1). Give the vertices of the image and compare the areas.",
          steps: [
            "Use image = C + k × (point − C) with C = (0, 1) and {{k = -1/2}}.",
            "(2, 3): point − C = (2, 2); × −{{1/2}} gives (−1, −1); add C: (−1, 0).",
            "(6, 3): point − C = (6, 2); × −{{1/2}} gives (−3, −1); add C: (−3, 0).",
            "(2, 7): point − C = (2, 6); × −{{1/2}} gives (−1, −3); add C: (−1, −2).",
            "The image is on the opposite side of (0, 1), upside down, with sides half as long (4 → 2).",
            "Area of P = {{1/2 * 4 * 4 = 8}}. Area of image = {{(1/2)^2 * 8 = 2}} (check: {{1/2 * 2 * 2 = 2}} ✓).",
          ],
          answer: "Image vertices (−1, 0), (−3, 0), (−1, −2); the area is a quarter of the original (8 → 2).",
          yourTurn: {
            question:
              "Your turn: the point (5, −2) is enlarged by scale factor −2, centre (1, 1). Give the coordinates of its image, x first.",
            answer: { type: "list", values: [-7, 7], ordered: true, display: "(−7, 7)" },
            solution:
              "Point − C = (5 − 1, −2 − 1) = (4, −3). Multiply by −2: (−8, 6). Add C: (1 − 8, 1 + 6) = (−7, 7).",
          },
        },
      ],
      keyPoints: [
        "Reflection: give the mirror line's **equation**. x = a is vertical; y = b is horizontal.",
        "Rotation: give **angle, direction and centre** — all three.",
        "Translation: give the **column vector** (top = right, bottom = up).",
        "Enlargement: give **scale factor and centre**. Negative k puts the image on the other side of the centre, upside down.",
        "Image = C + k × (point − C) works for any enlargement — positive, fractional or negative k.",
        "Reflections, rotations and translations give congruent images; enlargements give similar images with area × {{k^2}}.",
        "A reflection reverses the order of the vertices (clockwise ↔ anticlockwise); rotations and translations don't.",
      ],
      whyItWorks:
        "**Why does reflecting in y = x swap the coordinates?** Take (a, b) and (b, a). Their midpoint, {{((a + b)/2, (a + b)/2)}}, has equal coordinates, so it lies on y = x. The line joining them has gradient {{(a - b)/(b - a) = -1}}, which is perpendicular to y = x (gradient 1, and 1 × −1 = −1). So y = x is the perpendicular bisector of the join — exactly what a mirror line is.\n\n**Why is a 90° clockwise turn (x, y) → (y, −x)?** Draw the right-angled triangle from O to (x, 0) to (x, y). Turn the whole triangle a quarter-turn clockwise: the horizontal leg of length x now points **down** and the vertical leg of length y now points **right**. So the point ends up y across and x down: (y, −x).\n\n**Why does a negative scale factor flip the shape?** Multiplying the move from the centre by −k reverses its direction: every point goes *through* the centre and out the other side. Reversing every direction is a half-turn, so a scale factor of −1 is exactly a rotation of 180° about the centre.",
      strategies: [
        "Draw a diagram",
        "Track one point (then check with a second)",
        "Use tracing paper",
        "Check by substituting",
        "Eliminate options (flipped → reflection; turned → rotation)",
      ],
      thinkDeeper:
        "An enlargement with scale factor −1 about C gives exactly the same image as a rotation of 180° about C. Prove it using the rule image = C + k × (point − C). Then: an enlargement with scale factor −3 about C is the same as a rotation of 180° about C combined with an enlargement of scale factor 3 about C. Does it matter which you do first? Why?",
    },
    // -----------------------------------------------------------------------
    {
      id: "combined-transformations",
      heading: "Combined transformations & invariance",
      discovery: {
        problem:
          "Triangle F has vertices (0, 1), (1, 1) and (0, 3). Reflect it in the line x = 2, then reflect the image in the line x = 5. Which **single** transformation takes F straight to the final image? Now do it again with the mirrors the other way round (first x = 5, then x = 2). What changes?",
        idea:
          "Two reflections in parallel mirrors make a **translation**: F moves 6 to the right, by (6 over 0). The mirrors are 3 apart, and the shift is **twice** the gap, in the direction from the first mirror to the second. Swap the order and the shift is (−6 over 0) — 6 to the left. So the order of combined transformations matters.",
      },
      body:
        "A **combined transformation** means doing one transformation and then a second one to the **image**. Read the order carefully: 'reflect in the x-axis, then rotate…' means the reflection happens first, just like fg(x) means do g first in functions.\n\n**Finding the single equivalent transformation.** Two good methods:\n\n1. **Draw it.** Carry out both steps on squared paper, then compare the original with the final image and describe the result fully.\n2. **Track a general point.** Use the coordinate rules. Reflection in the y-axis sends (x, y) to (−x, y); a 90° clockwise rotation about O then sends that to (y, x). The combined rule (x, y) → (y, x) is a reflection in y = x.\n\n**Orientation is a shortcut.** A reflection reverses the order of the vertices (clockwise becomes anticlockwise). Rotations, translations and positive enlargements don't. So:\n\n- an **even** number of reflections (with any rotations and translations) gives a rotation or a translation;\n- an **odd** number gives a reflection (or a 'glide' — see Think deeper).\n\n**Results worth knowing**\n\n| First, then | Single transformation |\n|---|---|\n| Reflections in two parallel lines, a distance d apart | Translation of 2d, perpendicular to the lines, from the first mirror towards the second |\n| Reflections in two lines crossing at P at angle θ | Rotation of 2θ about P |\n| Translation (a over b), then (c over d) | Translation ((a + c) over (b + d)) |\n| Two rotations about the same centre | One rotation through the total angle |\n| Enlargements, scale factors {{k_1}} and {{k_2}}, same centre | Enlargement, scale factor {{k_1 k_2}}, same centre |\n| Rotation 180° about C | Enlargement, scale factor −1, centre C |\n\n**Order matters.** Reflect in the x-axis, then rotate 90° clockwise about O: (x, y) → (x, −y) → (−y, −x), a reflection in y = −x. The other way round: (x, y) → (y, −x) → (y, x), a reflection in y = x. Different answers.\n\n**Invariant points** are points that do not move — their image is themselves.\n\n| Transformation | Invariant points |\n|---|---|\n| Reflection | every point on the mirror line (a whole line of them) |\n| Rotation (not 360°) | only the centre |\n| Enlargement (k ≠ 1) | only the centre |\n| Translation (not zero) | none |\n\nFor a combination, write the combined rule and solve **image = point**. If you find exactly one invariant point, the single transformation is often a rotation or an enlargement about that point. A line of invariant points means a reflection in that line.",
      diagram: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: a triangle F with vertices (0, 1), (1, 1), (0, 3) is reflected in the line x = 2 to give F1 with vertices (4, 1), (3, 1), (4, 3), then F1 is reflected in the line x = 5 to give F2 with vertices (6, 1), (7, 1), (6, 3). An arrow shows F2 is F translated 6 to the right, twice the gap of 3 between the mirrors. Right: triangle S with vertices (1, 1), (3, 1), (1, 2) is reflected in the x-axis and then in the y-axis, giving the triangle with vertices (−1, −1), (−3, −1), (−1, −2): a rotation of 180 degrees about the origin."><rect x="0" y="0" width="480" height="250" fill="#ffffff"/><text x="130" y="18" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">Parallel mirrors: a translation</text><line x1="22" y1="196" x2="22" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="46" y1="196" x2="46" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="70" y1="196" x2="70" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="94" y1="196" x2="94" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="118" y1="196" x2="118" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="142" y1="196" x2="142" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="166" y1="196" x2="166" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="190" y1="196" x2="190" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="214" y1="196" x2="214" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="238" y1="196" x2="238" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="196" x2="238" y2="196" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="172" x2="238" y2="172" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="148" x2="238" y2="148" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="124" x2="238" y2="124" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="100" x2="238" y2="100" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="76" x2="238" y2="76" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="52" x2="238" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="22" y1="148" x2="238" y2="148" stroke="#334155" stroke-width="1.4"/><line x1="46" y1="196" x2="46" y2="52" stroke="#334155" stroke-width="1.4"/><text x="22" y="160" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−1</text><text x="70" y="160" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">1</text><text x="94" y="160" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">2</text><text x="118" y="160" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">3</text><text x="142" y="160" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">4</text><text x="166" y="160" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">5</text><text x="190" y="160" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">6</text><text x="214" y="160" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">7</text><text x="238" y="160" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">8</text><text x="42" y="199.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−2</text><text x="42" y="175.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−1</text><text x="42" y="127.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">1</text><text x="42" y="103.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">2</text><text x="42" y="79.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">3</text><text x="42" y="55.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">4</text><text x="42" y="160" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">0</text><text x="244" y="152" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937">x</text><text x="46" y="47" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937" text-anchor="middle">y</text><line x1="94" y1="172" x2="94" y2="52" stroke="#b45309" stroke-width="1.6" stroke-dasharray="5 4"/><text x="94" y="46" font-size="11" font-family="sans-serif" fill="#b45309" text-anchor="middle">x = 2</text><line x1="166" y1="172" x2="166" y2="52" stroke="#b45309" stroke-width="1.6" stroke-dasharray="5 4"/><text x="166" y="46" font-size="11" font-family="sans-serif" fill="#b45309" text-anchor="middle">x = 5</text><polygon points="46,124 70,124 46,76" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><polygon points="142,124 118,124 142,76" fill="#fde68a" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><polygon points="190,124 214,124 190,76" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><text x="54.4" y="115.3" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">F</text><text x="133.6" y="115.3" font-size="11" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">F₁</text><text x="198.4" y="115.3" font-size="11" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">F₂</text><line x1="46" y1="174.4" x2="181" y2="174.4" stroke="#1d4ed8" stroke-width="2"/><polygon points="190,174.4 181,178.9 181,169.9" fill="#1d4ed8"/><text x="130" y="218" font-size="12" font-family="sans-serif" fill="#1d4ed8" font-weight="bold" text-anchor="middle">translation 6 right = 2 × gap of 3</text><text x="362" y="18" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">Perpendicular mirrors: a half-turn</text><line x1="282" y1="212" x2="282" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="302" y1="212" x2="302" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="322" y1="212" x2="322" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="342" y1="212" x2="342" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="362" y1="212" x2="362" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="382" y1="212" x2="382" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="402" y1="212" x2="402" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="422" y1="212" x2="422" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="442" y1="212" x2="442" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="212" x2="442" y2="212" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="192" x2="442" y2="192" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="172" x2="442" y2="172" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="152" x2="442" y2="152" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="132" x2="442" y2="132" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="112" x2="442" y2="112" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="92" x2="442" y2="92" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="72" x2="442" y2="72" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="52" x2="442" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="132" x2="442" y2="132" stroke="#334155" stroke-width="1.4"/><line x1="362" y1="212" x2="362" y2="52" stroke="#334155" stroke-width="1.4"/><text x="282" y="144" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−4</text><text x="302" y="144" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−3</text><text x="322" y="144" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−2</text><text x="342" y="144" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−1</text><text x="382" y="144" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">1</text><text x="402" y="144" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">2</text><text x="422" y="144" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">3</text><text x="442" y="144" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">4</text><text x="358" y="215.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−4</text><text x="358" y="195.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−3</text><text x="358" y="175.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−2</text><text x="358" y="155.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−1</text><text x="358" y="115.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">1</text><text x="358" y="95.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">2</text><text x="358" y="75.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">3</text><text x="358" y="55.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">4</text><text x="448" y="136" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937">x</text><text x="362" y="47" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937" text-anchor="middle">y</text><polygon points="382,112 422,112 382,92" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><polygon points="382,152 422,152 382,172" fill="#fde68a" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><polygon points="342,152 302,152 342,172" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><text x="394" y="109.5" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">S</text><text x="394" y="163.5" font-size="11" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">S₁</text><text x="330" y="163.5" font-size="11" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">S₂</text><circle cx="362" cy="132" r="3" fill="#b45309"/></svg>`,
      diagramCaption:
        "Left: reflecting F in x = 2 and then in x = 5 is the same as translating it by (6 over 0) — twice the 3-unit gap. Right: reflecting S in the x-axis (giving S₁) and then in the y-axis (giving S₂) is a half-turn about O, where the mirrors cross at 90° (2 × 90° = 180°).",
      workedExamples: [
        {
          title: "Two transformations, one answer",
          problem:
            "Triangle T has vertices (1, 1), (3, 1) and (1, 2). T is reflected in the y-axis to give triangle U. U is then rotated 90° clockwise about the origin to give triangle V. Describe fully the single transformation that maps T onto V.",
          steps: [
            "Reflect in the y-axis, (x, y) → (−x, y): U is (−1, 1), (−3, 1), (−1, 2).",
            "Rotate 90° clockwise about O, (x, y) → (y, −x): V is (1, 1), (1, 3), (2, 1).",
            "Compare T and V: (1, 1) → (1, 1), (3, 1) → (1, 3), (1, 2) → (2, 1). Each point has its coordinates **swapped**.",
            "Orientation check: one reflection plus a rotation reverses orientation, so the answer must be a reflection. Swapping coordinates is the reflection in y = x.",
            "Invariant point check: (1, 1) lies on y = x and did not move. ✓",
          ],
          answer: "Reflection in the line y = x.",
          yourTurn: {
            question:
              "Your turn: the point (5, 2) is reflected in the line x = 1, and the image is then reflected in the line y = 3. Give the coordinates of the final image, x first.",
            answer: { type: "list", values: [-3, 4], ordered: true, display: "(−3, 4)" },
            solution:
              "Reflect in x = 1: (2 × 1 − 5, 2) = (−3, 2). Reflect in y = 3: (−3, 2 × 3 − 2) = (−3, 4). The mirrors cross at (1, 3) at 90°, so the pair is a half-turn about (1, 3) — and (5, 2) is 4 right and 1 down from (1, 3), so its image is 4 left and 1 up: (−3, 4). ✓",
          },
        },
        {
          title: "Finding an invariant point",
          problem:
            "A shape is enlarged by scale factor 3, centre (1, 2), and the image is then translated by the vector (4 over −2). Find the invariant point of the combined transformation, and describe the combined transformation as a single transformation.",
          steps: [
            "Enlargement: (x, y) → (1 + 3(x − 1), 2 + 3(y − 2)) = (3x − 2, 3y − 4).",
            "Then translate by (4 over −2): (3x − 2 + 4, 3y − 4 − 2) = (3x + 2, 3y − 6).",
            "Invariant point: image = point. 3x + 2 = x gives x = −1; 3y − 6 = y gives y = 3. The point is (−1, 3).",
            "A combination that multiplies all distances by 3 and keeps one point fixed is an enlargement, scale factor 3, about that point.",
            "Check with (0, 0): the combined rule gives (2, −6). Enlargement by 3 about (−1, 3): (−1 + 3 × 1, 3 + 3 × (−3)) = (2, −6). ✓",
          ],
          answer: "Invariant point (−1, 3); the combination is an enlargement, scale factor 3, centre (−1, 3).",
          yourTurn: {
            question:
              "Your turn: a reflection in the line x = 3 is followed by a reflection in the line y = x. Find the coordinates of the invariant point, x first.",
            answer: { type: "list", values: [3, 3], ordered: true, display: "(3, 3)" },
            solution:
              "(x, y) → (6 − x, y) → (y, 6 − x). Invariant: y = x and 6 − x = y, so x = 3, y = 3. The mirrors cross at (3, 3) at 45°, so the combination is a rotation of 90° about (3, 3) — the centre is the only point that stays put.",
          },
        },
      ],
      keyPoints: [
        "Do the transformations in the order given; the second acts on the **image** of the first.",
        "Track a general point (x, y) through both rules to get the combined rule.",
        "Two parallel mirrors → translation of twice the gap. Two crossing mirrors → rotation of twice the angle.",
        "Odd number of reflections → orientation reversed → the answer is a reflection (or glide).",
        "Invariant points: reflection — the mirror line; rotation and enlargement — the centre; translation — none.",
        "Solve image = point to find the invariant point(s) of a combination.",
      ],
      whyItWorks:
        "**Parallel mirrors make a translation.** Reflect in x = a and then in x = b:\n\n    x → 2a − x → 2b − (2a − x) = x + 2(b − a)\n\nThe y-coordinate never changes. So every point moves by the same amount, 2(b − a) — exactly a translation, twice the gap from the first mirror to the second. Swapping the mirrors swaps a and b and reverses the direction.\n\n**Crossing mirrors make a rotation.** Each reflection keeps the crossing point fixed, so the combination keeps it fixed. If a point is at angle α past the first mirror, reflecting puts it α on the other side; the second reflection then takes it on by twice the remaining gap. The total turn is always 2θ, where θ is the angle between the mirrors — whatever α was.",
      strategies: [
        "Track a general point",
        "Draw a diagram",
        "Look for an invariant",
        "Eliminate options using orientation",
        "Check by substituting a second point",
      ],
      thinkDeeper:
        "A shape is reflected in the x-axis and then translated by (4 over 0) — a **glide reflection**, like footprints in sand. Show that no point is invariant. Then explain why the combination can't be a single rotation, translation, reflection or enlargement. (Hint: think about orientation first, then about invariant points.)",
    },
    // -----------------------------------------------------------------------
    {
      id: "vector-basics",
      heading: "Vectors: notation and arithmetic",
      discovery: {
        problem:
          "Ravi walks 3 blocks east and 1 north, then 1 east and 2 north. Siti does the same two moves in the opposite order. Do they finish in the same place? How far is that from the start in a straight line? Can you describe the whole trip as one move?",
        idea:
          "Both finish 4 east and 3 north of the start — adding moves part by part doesn't care about order. As one move, that is the column vector (4 over 3). The straight-line distance comes from Pythagoras: {{sqrt(4^2 + 3^2) = 5}} blocks. That's the whole of this section: vectors add component by component, and their length comes from Pythagoras.",
      },
      body:
        "A **vector** has a size (**magnitude**) and a **direction**. A **scalar** has only a size (5 kg, 12 °C). Displacement, velocity and force are vectors.\n\n**Notation.** In print a vector is bold, **a**; in handwriting underline it. The vector from A to B is written →AB (on paper, AB with an arrow on top). As a column vector, (3 over −2) means 3 right and 2 down. Two vectors are **equal** if they have the same magnitude and direction — wherever they are drawn.\n\n**Arithmetic is done part by part:**\n\n| Operation | Rule | Example with **a** = (3 over 1), **b** = (1 over 2) |\n|---|---|---|\n| Add | add tops, add bottoms | **a** + **b** = (4 over 3) |\n| Subtract | subtract tops, subtract bottoms | **a** − **b** = (2 over −1) |\n| Negative | change both signs: same length, opposite direction | −**b** = (−1 over −2) |\n| Scalar multiple | multiply both parts | 3**a** = (9 over 3) |\n\n**On a diagram:** to add, draw **b** starting where **a** ends (**nose to tail**); **a** + **b** goes from the start of **a** to the end of **b** — the **triangle law**. And →BA = −→AB: going backwards along a vector reverses the sign.\n\n**Parallel vectors.** k**a** is parallel to **a** and k times as long; if k is negative it points the opposite way. Two vectors are parallel exactly when one is a scalar multiple of the other: (6 over −4) = 2 × (3 over −2), so they are parallel.\n\n**Magnitude** (length), using Pythagoras:\n\n    |(x over y)| = √(x² + y²)\n\nso |(4 over 3)| = √(16 + 9) = 5. Square **both** parts first — a negative part becomes positive.\n\n**Position vectors.** The position vector of a point A is →OA, written **a**: it has the same numbers as A's coordinates. Then\n\n    →AB = →AO + →OB = −**a** + **b** = **b** − **a**\n\n— 'end minus start'. The midpoint M of AB has position vector {{1/2}}(**a** + **b**).\n\n**Equations with vectors.** If m(2 over 1) + n(1 over 3) = (7 over 6), the tops and bottoms give two simultaneous equations: 2m + n = 7 and m + 3n = 6. Solving gives m = 3, n = 1.",
      diagram: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A grid with origin O. Vector b = (1 over 2) goes from O to (1, 2); vector a = (3 over 1) goes from (1, 2) to (4, 3). The resultant a + b goes straight from O to (4, 3) and has length 5. A dashed vector from the end of b at (1, 2) to the point (3, 1), which is the end of a drawn from O, shows a − b = (2 over −1). Beside the grid, a + b is written as a column vector with 4 on top and 3 underneath."><rect x="0" y="0" width="480" height="280" fill="#ffffff"/><line x1="30" y1="246" x2="30" y2="30" stroke="#e2e8f0" stroke-width="1"/><line x1="66" y1="246" x2="66" y2="30" stroke="#e2e8f0" stroke-width="1"/><line x1="102" y1="246" x2="102" y2="30" stroke="#e2e8f0" stroke-width="1"/><line x1="138" y1="246" x2="138" y2="30" stroke="#e2e8f0" stroke-width="1"/><line x1="174" y1="246" x2="174" y2="30" stroke="#e2e8f0" stroke-width="1"/><line x1="210" y1="246" x2="210" y2="30" stroke="#e2e8f0" stroke-width="1"/><line x1="246" y1="246" x2="246" y2="30" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="246" x2="246" y2="246" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="210" x2="246" y2="210" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="174" x2="246" y2="174" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="138" x2="246" y2="138" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="102" x2="246" y2="102" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="66" x2="246" y2="66" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="30" x2="246" y2="30" stroke="#e2e8f0" stroke-width="1"/><line x1="30" y1="210" x2="246" y2="210" stroke="#334155" stroke-width="1.4"/><line x1="30" y1="246" x2="30" y2="30" stroke="#334155" stroke-width="1.4"/><text x="66" y="222" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">1</text><text x="102" y="222" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">2</text><text x="138" y="222" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">3</text><text x="174" y="222" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">4</text><text x="210" y="222" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">5</text><text x="246" y="222" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">6</text><text x="26" y="249.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−1</text><text x="26" y="177.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">1</text><text x="26" y="141.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">2</text><text x="26" y="105.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">3</text><text x="26" y="69.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">4</text><text x="26" y="33.5" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">5</text><text x="252" y="214" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937">x</text><text x="30" y="25" font-size="12" font-family="sans-serif" font-style="italic" fill="#1f2937" text-anchor="middle">y</text><line x1="30" y1="210" x2="138" y2="174" stroke="#94a3b8" stroke-width="1.4" stroke-dasharray="3 3"/><line x1="30" y1="210" x2="62" y2="146" stroke="#15803d" stroke-width="2.2"/><polygon points="66,138 66,148.1 58,144" fill="#15803d"/><line x1="66" y1="138" x2="165.5" y2="104.8" stroke="#1d4ed8" stroke-width="2.2"/><polygon points="174,102 166.9,109.1 164,100.6" fill="#1d4ed8"/><line x1="30" y1="210" x2="166.8" y2="107.4" stroke="#b91c1c" stroke-width="2.6"/><polygon points="174,102 169.5,111 164.1,103.8" fill="#b91c1c"/><line stroke-dasharray="5 3" x1="66" y1="138" x2="130" y2="170" stroke="#7c3aed" stroke-width="1.8"/><polygon points="138,174 127.9,174 132,166" fill="#7c3aed"/><text x="42.6" y="166.8" font-size="14" font-family="sans-serif" font-weight="bold" fill="#15803d" text-anchor="end">b</text><text x="116.4" y="107.2" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle">a</text><text x="154.2" y="142" font-size="13" font-family="sans-serif" font-weight="bold" fill="#b91c1c" text-anchor="middle">a + b</text><text x="161.4" y="178" font-size="12" font-family="sans-serif" font-weight="bold" fill="#7c3aed" text-anchor="middle">a − b</text><text x="26" y="224" font-size="11" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="end">O</text><text x="385" y="50" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">a</text><path d="M 373 60 Q 365 80 373 100" fill="none" stroke="#1d4ed8" stroke-width="1.6"/><path d="M 397 60 Q 405 80 397 100" fill="none" stroke="#1d4ed8" stroke-width="1.6"/><text x="385" y="76" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle">3</text><text x="385" y="94" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle">1</text><text x="445" y="50" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">b</text><path d="M 433 60 Q 425 80 433 100" fill="none" stroke="#15803d" stroke-width="1.6"/><path d="M 457 60 Q 465 80 457 100" fill="none" stroke="#15803d" stroke-width="1.6"/><text x="445" y="76" font-size="13" font-family="sans-serif" font-weight="bold" fill="#15803d" text-anchor="middle">1</text><text x="445" y="94" font-size="13" font-family="sans-serif" font-weight="bold" fill="#15803d" text-anchor="middle">2</text><text x="385" y="140" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">a + b</text><path d="M 373 150 Q 365 170 373 190" fill="none" stroke="#b91c1c" stroke-width="1.6"/><path d="M 397 150 Q 405 170 397 190" fill="none" stroke="#b91c1c" stroke-width="1.6"/><text x="385" y="166" font-size="13" font-family="sans-serif" font-weight="bold" fill="#b91c1c" text-anchor="middle">4</text><text x="385" y="184" font-size="13" font-family="sans-serif" font-weight="bold" fill="#b91c1c" text-anchor="middle">3</text><text x="445" y="140" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">a − b</text><path d="M 433 150 Q 425 170 433 190" fill="none" stroke="#7c3aed" stroke-width="1.6"/><path d="M 457 150 Q 465 170 457 190" fill="none" stroke="#7c3aed" stroke-width="1.6"/><text x="445" y="166" font-size="13" font-family="sans-serif" font-weight="bold" fill="#7c3aed" text-anchor="middle">2</text><text x="445" y="184" font-size="13" font-family="sans-serif" font-weight="bold" fill="#7c3aed" text-anchor="middle">−1</text><text x="415" y="226" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">|a + b| = √(4² + 3²)</text><text x="415" y="244" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">= 5</text></svg>`,
      diagramCaption:
        "Nose to tail: **b** then **a** gives **a** + **b** = (4 over 3), with length 5. The dashed purple arrow from the end of **b** to the end of **a** (both drawn from O) is **a** − **b** = (2 over −1).",
      workedExamples: [
        {
          title: "Combine, then find the magnitude",
          problem:
            "**a** = (3 over −2) and **b** = (−1 over 4). Work out (i) 2**a** − 3**b** as a column vector (ii) |2**a** − 3**b**|, giving your answer correct to 3 significant figures.",
          steps: [
            "2**a** = (6 over −4) and 3**b** = (−3 over 12).",
            "2**a** − 3**b** = (6 − (−3) over −4 − 12) = (9 over −16). Watch the double negative on top.",
            "|2**a** − 3**b**| = √(9² + (−16)²) = √(81 + 256) = √337.",
            "√337 = 18.357… = 18.4 (3 s.f.).",
          ],
          answer: "(i) (9 over −16) (ii) 18.4 (3 s.f.)",
          yourTurn: {
            question:
              "Your turn: **p** = (5 over −1) and **q** = (−2 over 3). Work out |**p** + 2**q**|, giving your answer as an exact surd.",
            answer: { type: "expression", expr: "sqrt(26)", form: "surd", display: "{{sqrt(26)}}" },
            solution:
              "2**q** = (−4 over 6), so **p** + 2**q** = (1 over 5). Magnitude {{sqrt(1^2 + 5^2) = sqrt(26)}}.",
          },
        },
        {
          title: "Position vectors and a midpoint",
          problem:
            "A is the point (2, 5) and B is the point (8, −3). (a) Write →AB as a column vector. (b) Work out the length of AB. (c) Find the coordinates of M, the midpoint of AB.",
          steps: [
            "(a) End minus start: →AB = **b** − **a** = (8 − 2 over −3 − 5) = (6 over −8).",
            "(b) |→AB| = √(6² + (−8)²) = √(36 + 64) = √100 = 10.",
            "(c) →OM = {{1/2}}(**a** + **b**) = {{1/2}}(10 over 2) = (5 over 1), so M = (5, 1).",
            "Check: →AM = (3 over −4), exactly half of →AB. ✓",
          ],
          answer: "(a) (6 over −8) (b) 10 (c) M = (5, 1)",
          yourTurn: {
            question:
              "Your turn: P is the point (−3, 4) and →PQ = (8 over −6). Give the coordinates of Q, x first.",
            answer: { type: "list", values: [5, -2], ordered: true, display: "(5, −2)" },
            solution: "→OQ = →OP + →PQ = (−3 + 8 over 4 − 6) = (5 over −2), so Q = (5, −2).",
          },
        },
      ],
      keyPoints: [
        "Column vector: top = right (+) / left (−); bottom = up (+) / down (−).",
        "Add, subtract and multiply by a scalar part by part.",
        "Parallel ⇔ one vector is a scalar multiple of the other.",
        "Magnitude: √(top² + bottom²) — Pythagoras.",
        "→AB = **b** − **a** (end minus start); →BA = −→AB.",
        "Midpoint of AB has position vector {{1/2}}(**a** + **b**).",
        "An equation in column vectors is two equations: one for the tops, one for the bottoms.",
      ],
      whyItWorks:
        "A column vector is really two separate moves: one across and one up. Moves across only affect the across total, and moves up only affect the up total, so adding vectors means adding each part on its own — and the order of the moves can't matter.\n\nA scalar multiple k**a** multiplies both parts by k, so the gradient {{(\"up\")/(\"across\")}} doesn't change: k**a** points along the same line as **a**. That is why 'is a multiple of' and 'is parallel to' mean the same thing.\n\nThe magnitude is the hypotenuse of a right-angled triangle whose legs are the two parts — hence Pythagoras.",
      strategies: ["Draw a diagram", "Work part by part", "Introduce a variable", "Check by substituting"],
      thinkDeeper:
        "When is |**a** + **b**| = |**a**| + |**b**|? Can |**a** + **b**| ever be **smaller** than |**a** − **b**|? Try **a** = (3 over 0) and **b** = (−1 over 2), then explain what the angle between **a** and **b** has to do with it.",
    },
    // -----------------------------------------------------------------------
    {
      id: "vector-geometry",
      heading: "Vector geometry",
      discovery: {
        problem:
          "In triangle OAB, →OA = **a** and →OB = **b**. M is the midpoint of AB. Guess →OM in terms of **a** and **b**. Now check your guess by walking from O to A, then halfway along AB. Do you get the same answer if you walk from O to B and then halfway back along BA?",
        idea:
          "→AB = **b** − **a**, so →OM = **a** + {{1/2}}(**b** − **a**) = {{1/2}}**a** + {{1/2}}**b**. From the other side: **b** + {{1/2}}(**a** − **b**) = {{1/2}}**a** + {{1/2}}**b** again. Any route gives the same vector — and the midpoint really is the 'average' of the two position vectors. That freedom to choose the route is what makes vector proofs work.",
      },
      body:
        "In vector geometry you are given a few vectors (usually **a** and **b**) and you express everything else in terms of them. Then you can **prove** facts about the shape.\n\n**1. Paths.** To find →XY, walk from X to Y along vectors you know, adding as you go and **subtracting** any vector you walk along backwards. For example →AB = →AO + →OB = −**a** + **b**. Any route gives the same answer, so pick the easiest.\n\n**2. Known shapes.** In a parallelogram, opposite sides are equal vectors (→DC = →AB). In a regular hexagon, opposite sides are parallel and equal. A side 'twice as long and parallel' is twice the vector.\n\n**3. Ratios along a line.** If P is on AB with AP : PB = m : n, then P is {{m/(m + n)}} of the way from A to B:\n\n    →AP = {{m/(m + n)}} × →AB\n    →OP = **a** + {{m/(m + n)}} × (**b** − **a**)\n\nThe fraction is {{m/(m + n)}} — over the **total** number of parts — not {{m/n}}. With AP : PB = 2 : 1, →AP = {{2/3}}→AB.\n\n**4. Proving parallel.** Two vectors are parallel if one is a scalar multiple of the other. **Factorise** to show it: →PQ = 6**a** − 9**b** = 3(2**a** − 3**b**) and →RS = 2**a** − 3**b**, so →PQ = 3→RS. PQ is parallel to RS and three times as long.\n\n**5. Proving collinear (on a straight line).** Points P, Q and R are collinear if →PQ is a multiple of →PR (or of →QR). Your conclusion must say **both** facts: 'the vectors are parallel **and** share the point P, so P, Q and R lie on a straight line.' Two parallel vectors on their own could be on separate parallel lines.\n\n**6. Unknown ratios (grade 9).** If a point X lies on two different lines, write →OX in two ways using unknowns λ and μ, then **compare coefficients**. For example, the line from O in the direction **a** + 2**b** meets AB at X: →OX = λ(**a** + 2**b**) = λ**a** + 2λ**b**, and also →OX = **a** + μ(**b** − **a**) = (1 − μ)**a** + μ**b**. Because **a** and **b** are not parallel, the coefficients must match: λ = 1 − μ and 2λ = μ, so λ = {{1/3}} and μ = {{2/3}}. X is {{2/3}} of the way along AB.\n\n**Exam layout for a 'show that' or 'prove':** write each vector you use on its own line, in terms of **a** and **b**, simplify fully, then write a sentence of conclusion.",
      diagram: `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB. The vector from O to A is labelled a and the vector from O to B is labelled b. P is on AB, two thirds of the way from A to B, so AP : PB = 2 : 1. The vector from A to B is b − a. The dashed line from O to P is the vector to be found. M is the midpoint of OB."><rect x="0" y="0" width="480" height="290" fill="#ffffff"/><polygon points="50,255 170,45 430,235" fill="#eef2ff" stroke="none"/><line x1="50" y1="255" x2="165.5" y2="52.8" stroke="#1d4ed8" stroke-width="2.2"/><polygon points="170,45 169.4,55 161.6,50.6" fill="#1d4ed8"/><line x1="50" y1="255" x2="421" y2="235.5" stroke="#15803d" stroke-width="2.2"/><polygon points="430,235 421.2,240 420.8,231" fill="#15803d"/><line x1="170" y1="45" x2="422.7" y2="229.7" stroke="#b91c1c" stroke-width="2.2"/><polygon points="430,235 420.1,233.3 425.4,226.1" fill="#b91c1c"/><line x1="50" y1="255" x2="343.3" y2="171.7" stroke="#7c3aed" stroke-width="2" stroke-dasharray="6 4"/><circle cx="50" cy="255" r="3" fill="#1f2937"/><text x="38" y="261" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">O</text><circle cx="170" cy="45" r="3" fill="#1f2937"/><text x="164" y="37" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">A</text><circle cx="430" cy="235" r="3" fill="#1f2937"/><text x="442" y="241" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">B</text><circle cx="343.3" cy="171.7" r="3" fill="#1f2937"/><text x="351.3" y="163.7" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">P</text><circle cx="240" cy="245" r="3" fill="#1f2937"/><text x="240" y="265" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">M</text><line x1="144.7" y1="244" x2="145.3" y2="256" stroke="#1f2937" stroke-width="1.6"/><line x1="334.7" y1="234" x2="335.3" y2="246" stroke="#1f2937" stroke-width="1.6"/><text x="96" y="150" font-size="15" font-family="sans-serif" font-weight="bold" fill="#1d4ed8">a</text><text x="270" y="265" font-size="15" font-family="sans-serif" font-weight="bold" fill="#15803d">b</text><text x="330" y="118" font-size="13" font-family="sans-serif" font-weight="bold" fill="#b91c1c">b − a</text><text x="232" y="132" font-size="12" font-family="sans-serif" fill="#b91c1c" text-anchor="middle">2 parts</text><text x="390.7" y="193.3" font-size="12" font-family="sans-serif" fill="#b91c1c">1 part</text><text x="200" y="182" font-size="13" font-family="sans-serif" font-weight="bold" fill="#7c3aed">OP = ?</text></svg>`,
      diagramCaption:
        "Triangle OAB with →OA = **a** and →OB = **b**, so →AB = **b** − **a**. P splits AB in the ratio 2 : 1; M is the midpoint of OB.",
      workedExamples: [
        {
          title: "A point dividing a line in a ratio",
          problem:
            "OAB is a triangle with →OA = **a** and →OB = **b**. P lies on AB with AP : PB = 2 : 1, and M is the midpoint of OB (see the diagram). Find, in terms of **a** and **b**, simplified: (a) →OP (b) →PM.",
          steps: [
            "→AB = →AO + →OB = −**a** + **b** = **b** − **a**.",
            "AP : PB = 2 : 1 means 3 parts in total, so →AP = {{2/3}}(**b** − **a**).",
            "(a) →OP = →OA + →AP = **a** + {{2/3}}**b** − {{2/3}}**a** = {{1/3}}**a** + {{2/3}}**b**.",
            "(b) →OM = {{1/2}}**b**. →PM = →PO + →OM = −({{1/3}}**a** + {{2/3}}**b**) + {{1/2}}**b** = −{{1/3}}**a** − {{1/6}}**b**.",
            "Sense check: P is closer to B than to A, so **b** should carry the bigger coefficient in →OP. ✓",
          ],
          answer: "(a) →OP = {{1/3}}**a** + {{2/3}}**b** (b) →PM = −{{1/3}}**a** − {{1/6}}**b**",
          yourTurn: {
            question:
              "Your turn: in the same triangle (→OA = **a**, →OB = **b**), Q lies on AB with AQ : QB = 1 : 3. Find →OQ in terms of **a** and **b**. Type, for example, (1/2)a + (1/2)b.",
            answer: { type: "expression", expr: "(3/4)a+(1/4)b", display: "{{3/4}}**a** + {{1/4}}**b**" },
            solution:
              "4 parts in total, so →AQ = {{1/4}}(**b** − **a**). →OQ = **a** + {{1/4}}**b** − {{1/4}}**a** = {{3/4}}**a** + {{1/4}}**b**.",
          },
        },
        {
          title: "Prove three points are collinear",
          problem:
            "OAB is a triangle with →OA = 6**a** and →OB = 6**b**. P lies on AB with AP : PB = 1 : 2. The point R is such that →OR = 6**a** + 3**b**. Prove that O, P and R lie on a straight line.",
          steps: [
            "→AB = 6**b** − 6**a**.",
            "→AP = {{1/3}}→AB = 2**b** − 2**a**.",
            "→OP = →OA + →AP = 6**a** + 2**b** − 2**a** = 4**a** + 2**b** = 2(2**a** + **b**).",
            "→OR = 6**a** + 3**b** = 3(2**a** + **b**).",
            "So →OR = {{3/2}}→OP: the vectors are parallel (scalar multiples of 2**a** + **b**).",
            "They also share the point O. Parallel lines through a common point are the same line, so O, P and R are collinear.",
          ],
          answer: "→OP = 2(2**a** + **b**) and →OR = 3(2**a** + **b**), so →OR = {{3/2}}→OP; parallel with the common point O, hence collinear.",
          yourTurn: {
            question:
              "Your turn: using the result of this example, find the ratio OP : OR. Give it in its simplest form.",
            answer: { type: "ratio", parts: [2, 3], simplest: true, display: "2 : 3" },
            solution:
              "→OP = 2(2**a** + **b**) and →OR = 3(2**a** + **b**), so the lengths are in the ratio 2 : 3. (So P is {{2/3}} of the way from O to R.)",
          },
        },
      ],
      keyPoints: [
        "Write every vector in terms of **a** and **b** by walking along known vectors.",
        "Walking backwards along a vector subtracts it: →BA = −→AB.",
        "AP : PB = m : n ⇒ →AP = {{m/(m + n)}}→AB — divide by the total number of parts.",
        "Parallel: show one vector is a number times the other — factorise to make it obvious.",
        "Collinear: parallel **and** a shared point. Say both in your conclusion.",
        "Unknown ratio: write the same vector two ways, then compare the coefficients of **a** and of **b**.",
      ],
      whyItWorks:
        "**The ratio rule.** If AP : PB = m : n, then AB is cut into m + n equal parts and AP is m of them. Going from A towards B, the vector →AP is the same direction as →AB and {{m/(m + n)}} of its length — a scalar multiple.\n\n**Comparing coefficients.** If **a** and **b** are not parallel, every vector in the plane can be made from them in exactly **one** way: x**a** + y**b**. (If two different combinations gave the same vector, subtracting them would make a multiple of **a** equal to a multiple of **b**, so **a** and **b** would be parallel.) That uniqueness is why, when a vector is written in two ways, the coefficients must be equal.\n\n**Collinear needs a common point** because 'parallel' only describes direction. Two railway tracks are parallel without being the same line; two parallel vectors that start from the same point must lie along the same line.",
      strategies: [
        "Draw a diagram and label it",
        "Choose the easiest route",
        "Factorise to reveal a multiple",
        "Introduce a variable (λ, μ)",
        "Compare coefficients",
      ],
      thinkDeeper:
        "In triangle OAB, M is the midpoint of OA and N is the midpoint of OB. Prove that MN is parallel to AB and half its length. Then show that the point G with →OG = {{1/3}}(**a** + **b**) lies on the line from A to the midpoint of OB, and find the ratio in which G divides that line. What does this tell you about the three medians of any triangle?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What must you give to describe a rotation fully?", back: "The angle, the direction (clockwise or anticlockwise) and the centre, e.g. 90° clockwise about (1, 0)." },
      { front: "What must you give to describe an enlargement fully?", back: "The scale factor and the centre, e.g. scale factor −{{1/2}}, centre (0, 1)." },
      { front: "Reflection in y = x: where does (x, y) go?", back: "(y, x) — the coordinates swap." },
      { front: "Reflection in y = −x: where does (x, y) go?", back: "(−y, −x) — swap and change both signs." },
      { front: "Rotation 90° clockwise about O: where does (x, y) go?", back: "(y, −x). Anticlockwise: (−y, x). 180°: (−x, −y)." },
      { front: "What does a negative scale factor do?", back: "Puts the image on the other side of the centre, upside down (turned 180°), with lengths × the size of k." },
      { front: "Enlargement scale factor k: what happens to area?", back: "Area is multiplied by {{k^2}} (lengths by k, angles unchanged)." },
      { front: "How do you find the centre of an enlargement?", back: "Join each vertex to its image and extend the lines; they meet at the centre." },
      { front: "How do you find the centre of a rotation without tracing paper?", back: "Draw the perpendicular bisectors of two point-to-image joins; they cross at the centre." },
      { front: "Reflection in x = a then in x = b gives…?", back: "A translation by (2(b − a) over 0): twice the gap, from the first mirror towards the second." },
      { front: "Which points are invariant under a reflection? A rotation? A translation?", back: "Reflection: every point on the mirror line. Rotation: only the centre. Translation: none." },
      { front: "What is |(x over y)|?", back: "√(x² + y²) — Pythagoras." },
      { front: "→AB in terms of position vectors **a** and **b**?", back: "**b** − **a** (end minus start)." },
      { front: "Position vector of the midpoint of AB?", back: "{{1/2}}(**a** + **b**)." },
      { front: "P is on AB with AP : PB = 3 : 2. What is →AP?", back: "{{3/5}}→AB — divide by the total, 3 + 2 = 5." },
      { front: "How do you prove two vectors are parallel?", back: "Show one is a scalar multiple of the other, e.g. 4**a** − 6**b** = 2(2**a** − 3**b**)." },
      { front: "How do you prove P, Q, R are collinear?", back: "Show →PQ = k→PR (parallel) and state they share the point P." },
    ],
    mustKnow: [
      "Can I reflect a shape in lines such as x = a, y = b, y = x and y = −x?",
      "Can I rotate a shape through 90° or 180° about any centre, and find the angle, direction and centre of a given rotation?",
      "Can I translate a shape by a column vector and find the column vector of a given translation?",
      "Can I enlarge a shape with positive, fractional and negative scale factors, and find the centre and scale factor of a given enlargement?",
      "Can I describe fully a single transformation, giving every detail the marks need?",
      "Can I carry out a sequence of transformations and describe the single transformation that is equivalent to it?",
      "Can I find the invariant points of a transformation or a combination of transformations?",
      "Can I add and subtract column vectors, multiply them by a scalar and draw them as nose-to-tail diagrams?",
      "Can I find the magnitude of a vector using Pythagoras?",
      "Can I use position vectors, including →AB = **b** − **a** and the midpoint {{1/2}}(**a** + **b**)?",
      "Can I express a vector path in terms of **a** and **b**, including a point that divides a line in a given ratio?",
      "Can I prove that two lines are parallel, or that three points are collinear, using vectors?",
      "Can I find an unknown ratio by writing a vector in two ways and comparing coefficients?",
    ],
    misconceptions: [
      { wrong: "x = 3 is a horizontal line.", right: "x = 3 is **vertical** — every point on it has x-coordinate 3. Horizontal lines are y = b." },
      { wrong: "'Rotation of 90°' is a full description.", right: "A rotation needs the angle, the direction **and** the centre. Missing the centre loses most of the marks." },
      { wrong: "An enlargement always makes a shape bigger.", right: "A scale factor between 0 and 1 makes it smaller, and a negative scale factor puts it on the other side of the centre — both are still enlargements." },
      { wrong: "Enlarging by scale factor 3 makes the area 3 times bigger.", right: "Area scales by {{k^2}}: 9 times bigger." },
      { wrong: "The order of two transformations doesn't matter.", right: "It usually does: reflect in the x-axis then rotate 90° clockwise gives a reflection in y = −x; the other order gives a reflection in y = x." },
      { wrong: "→AB = **a** − **b**.", right: "End minus start: →AB = **b** − **a**. Walk A → O → B: −**a** + **b**." },
      { wrong: "If AP : PB = 2 : 3 then →AP = {{2/3}}→AB.", right: "Divide by the total number of parts: →AP = {{2/5}}→AB." },
      { wrong: "Parallel vectors means the points are collinear.", right: "You also need a common point. Parallel vectors can lie on two different parallel lines." },
    ],
    examMistakes: [
      "Describing a single transformation as two (e.g. 'reflection and translation') — a 'single transformation' question then scores zero.",
      "Giving a rotation without its centre, or an enlargement without its centre — the centre is a mark on its own.",
      "Writing a translation as a coordinate (3, −2) or in words ('3 right, 2 down') instead of a column vector.",
      "Reflecting in y = 2 when the question says x = 2 (vertical and horizontal lines mixed up).",
      "In vector geometry, using {{m/n}} instead of {{m/(m + n)}} for a ratio, e.g. →AP = {{2/1}}→AB for AP : PB = 2 : 1.",
      "Showing two vectors are multiples but not writing the conclusion — 'parallel and share the point O, so collinear' — and losing the final mark.",
    ],
    mnemonics: [
      {
        topic: "Describing transformations",
        device: "1, 1, 2, 3",
        explanation: "Reflection needs **1** fact (the line), translation **1** (the vector), enlargement **2** (scale factor, centre), rotation **3** (angle, direction, centre). Count your facts before you move on.",
      },
      {
        topic: "Column vectors",
        device: "Along the corridor, then up the stairs",
        explanation: "The top number is the move along (right +, left −); the bottom number is the move up (up +, down −) — the same order as coordinates.",
      },
      {
        topic: "Vector from A to B",
        device: "End minus start",
        explanation: "→AB = **b** − **a**: where you finish minus where you began. The same rule finds a translation vector: image − object.",
      },
    ],
    realWorld: [
      {
        title: "Video games and animation",
        detail: "Every frame of a game moves characters with translations, rotations and scaling. The graphics chip stores each one as a small table of numbers (a matrix) and combines them — combining transformations, millions of times a second.",
        emoji: "🎮",
      },
      {
        title: "Flying into Changi",
        detail: "A plane's velocity through the air plus the wind's velocity gives its actual velocity over the ground — nose-to-tail vector addition. Pilots correct their heading so the resultant points at the runway.",
        emoji: "✈️",
      },
      {
        title: "Peranakan tiles",
        detail: "The patterned tiles on Singapore shophouses are built by reflecting and rotating one motif. The lines and points that stay fixed — the invariant mirror lines and centres — are the pattern's symmetries.",
        emoji: "🏮",
      },
      {
        title: "Robots and drones",
        detail: "A delivery drone tracks its position as a vector from its base and adds each move as a column vector. The straight-line distance home is a magnitude — Pythagoras in action.",
        emoji: "🛸",
      },
    ],
    videos: [
      { title: "Describing transformations", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+describing+transformations" },
      { title: "Enlargement with negative scale factors", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+negative+enlargement" },
      { title: "Vector geometry proofs (collinear and parallel)", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+vectors+proof+collinear" },
      { title: "Vectors, what even are they?", channel: "3Blue1Brown", url: "https://www.youtube.com/results?search_query=3blue1brown+vectors+what+even+are+they" },
      { title: "Vectors: IGCSE exam questions", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+igcse+vectors" },
    ],
    formulas: [
      { name: "Magnitude of a vector", formula: "|(x over y)| = {{sqrt(x^2 + y^2)}}", note: "Learn this — not given" },
      { name: "Vector between two points", formula: "→AB = **b** − **a**", note: "Learn this — not given" },
      { name: "Midpoint of AB", formula: "→OM = {{1/2}}(**a** + **b**)", note: "Learn this — not given" },
      { name: "Point dividing AB with AP : PB = m : n", formula: "→AP = {{m/(m + n)}}→AB, so →OP = {{n/(m + n)}}**a** + {{m/(m + n)}}**b**", note: "Learn this — not given" },
      { name: "Parallel vectors", formula: "**u** is parallel to **v** if **u** = k**v** for some number k", note: "Learn this — not given" },
      { name: "Translation by (a over b)", formula: "(x, y) → (x + a, y + b)", note: "Learn this — not given" },
      { name: "Reflections", formula: "in y = x: (x, y) → (y, x); in y = −x: (x, y) → (−y, −x); in x = a: (x, y) → (2a − x, y)", note: "Learn this — not given" },
      { name: "Rotations about the origin", formula: "90° clockwise: (y, −x); 90° anticlockwise: (−y, x); 180°: (−x, −y)", note: "Learn this — not given" },
      { name: "Enlargement, scale factor k, centre C", formula: "image = C + k × (point − C); area × {{k^2}}", note: "Learn this — not given" },
      { name: "Two reflections", formula: "parallel mirrors d apart → translation of 2d; mirrors crossing at angle θ → rotation of 2θ", note: "Learn this — not given" },
    ],
  },
};
