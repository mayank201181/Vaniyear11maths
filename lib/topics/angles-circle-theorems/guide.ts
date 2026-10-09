import type { TopicGuide } from "../../types.ts";

// ---------------------------------------------------------------------------
// Angles, Polygons & Circle Theorems — guide (textbook chapter + learn-smart).
// School Unit 10 · Edexcel IGCSE 4MA1 Higher 4.1–4.4, 4.6 (angle facts,
// polygons, circle theorems, intersecting chords, constructions and loci).
// ---------------------------------------------------------------------------

export const guide: TopicGuide = {
  id: "angles-circle-theorems",
  title: "Angles, Polygons & Circle Theorems",
  strand: "Geometry & Measure",
  icon: "⭕",
  summary: "A handful of angle facts, chained together with reasons, unlocks every circle diagram on the paper.",
  intro:
    "Angle chasing is pure reasoning: you are handed a diagram with one or two angles, and you unlock the rest one fact at a time. On 4MA1 Higher, circle-theorem questions are worth 3–5 marks each, and most of those marks are for the **reasons**, not the numbers — so this chapter teaches the facts and the exact exam wording together. You will also meet polygons, the intersecting chords theorem, the classic proof that the angle at the centre is twice the angle at the circumference, and compass constructions and loci.",
  guide: [
    // -----------------------------------------------------------------------
    {
      id: "angle-facts",
      heading: "Angle facts and parallel lines",
      discovery: {
        problem:
          "Two parallel lines are crossed by a third straight line, making eight angles. One of them is 65°. Without measuring, how many of the other seven can you work out? How many *different* sizes of angle are there altogether?",
        idea:
          "All eight angles can be found, and there are only **two sizes**: four angles of 65° and four of 115°. Angles on a straight line give 180° − 65° = 115°, vertically opposite angles copy each value across the crossing point, and because the lines are parallel the second crossing is an exact copy of the first. Every angle in the picture is either the given angle or its *supplement* (the angle that makes 180° with it).",
      },
      body:
        "Everything in this chapter is built on a few basic facts. Learn them with their **exam reasons** — the wording below is what mark schemes accept.\n\n| Fact | Exam reason |\n|---|---|\n| Angles on a straight line add up to 180° | *angles on a straight line add up to 180°* |\n| Angles around a point add up to 360° | *angles around a point add up to 360°* |\n| Vertically opposite angles are equal | *vertically opposite angles are equal* |\n| Angles in a triangle add up to 180° | *angles in a triangle add up to 180°* |\n| Angles in a quadrilateral add up to 360° | *angles in a quadrilateral add up to 360°* |\n| Base angles of an isosceles triangle are equal | *base angles of an isosceles triangle are equal* |\n| Exterior angle of a triangle = sum of the two interior opposite angles | *exterior angle of a triangle is equal to the sum of the interior opposite angles* |\n\n**Parallel lines.** When a straight line (a *transversal*) crosses two parallel lines (marked with matching arrows):\n\n- **Alternate angles are equal** — they sit in a Z shape, on opposite sides of the transversal, between the parallel lines.\n- **Corresponding angles are equal** — they sit in an F shape, in the same position at each crossing.\n- **Co-interior angles add up to 180°** — they sit in a C (or U) shape, on the same side of the transversal, between the lines.\n\n> Write *alternate angles are equal*, never *Z angles*. Examiners do not accept letter-shape names as reasons, and the word *parallel* should appear somewhere in your answer.\n\n**How to angle-chase.** Mark every angle you find on the diagram as you go. Each line of working should contain *one* fact and *its* reason:\n\n    angle ABC = 180° − 72° = 108° (angles on a straight line add up to 180°)\n\nIf the question says *give reasons for each stage of your working*, a correct answer with no reasons usually scores only half the marks.\n\n**Algebra in angles.** If angles are given as expressions like 3x + 10, write an equation from a fact (equal angles, or a sum of 180° or 360°), solve it, and then **substitute back** to find the angle the question actually asks for.",
      diagram: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel lines, marked with arrows, crossed by a transversal. At the upper crossing the angle above the line on the right is 65 degrees. Angle a, above the lower line on the right, is corresponding to it. Angle b, below the upper line on the left, is vertically opposite it. Angle c, above the lower line on the left, is co-interior with b."><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><line x1="40" y1="100" x2="440" y2="100" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="220" x2="440" y2="220" stroke="#1f2937" stroke-width="2"/><path d="M392,93 L402,100 L392,107" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M392,213 L402,220 L392,227" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="262.6" y1="30" x2="141.4" y2="290" stroke="#334155" stroke-width="2"/><circle cx="230" cy="100" r="3" fill="#1f2937"/><circle cx="174" cy="220" r="3" fill="#1f2937"/><path d="M252,100 A22,22 0 0,0 239.3,80.1" fill="none" stroke="#334155" stroke-width="1.5"/><text x="262" y="84.1" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">65°</text><path d="M196,220 A22,22 0 0,0 183.3,200.1" fill="none" stroke="#334155" stroke-width="1.5"/><text x="206.1" y="204.1" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">a</text><path d="M208,100 A22,22 0 0,0 220.7,119.9" fill="none" stroke="#334155" stroke-width="1.5"/><text x="198" y="125" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">b</text><path d="M156,220 A18,18 0 0,1 181.7,203.7" fill="none" stroke="#334155" stroke-width="1.5"/><text x="154.7" y="194.2" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">c</text><text x="300" y="132" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="start">a = 65° (corresponding)</text><text x="300" y="150" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="start">b = 65° (vertically opposite)</text><text x="300" y="168" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="start">c = 115° (co-interior with b)</text></svg>`,
      diagramCaption:
        "One given angle unlocks the whole diagram: a is corresponding to 65°, b is vertically opposite it, and c is co-interior with b, so c = 180° − 65° = 115°.",
      workedExamples: [
        {
          title: "Alternate angles with algebra",
          problem:
            "AB is parallel to CD. A straight line crosses AB at P and CD at Q, with B and D on the same side of PQ. Angle BPQ = (3x + 10)° and angle PQC = (2x + 35)°. Work out the value of x and the size of angle BPQ. Give reasons.",
          steps: [
            "B and C are on opposite sides of the transversal PQ, between the parallel lines — a Z shape. So angle BPQ and angle PQC are **alternate angles**.",
            "Alternate angles are equal: 3x + 10 = 2x + 35.",
            "Subtract 2x and 10 from both sides: x = 25.",
            "Angle BPQ = 3 × 25 + 10 = 85°. Check: angle PQC = 2 × 25 + 35 = 85° ✓",
          ],
          answer: "x = 25, angle BPQ = 85° (alternate angles are equal)",
          yourTurn: {
            question:
              "Your turn: AB is parallel to CD. A straight line crosses AB at P and CD at Q, with B and D on the same side of PQ. Angle BPQ = (4x − 15)° and angle PQD = (2x + 15)°. Work out the value of x.",
            answer: { type: "number", value: 30 },
            solution:
              "B and D are on the same side of PQ, between the parallel lines, so angles BPQ and PQD are co-interior and add up to 180°: (4x − 15) + (2x + 15) = 180, so 6x = 180 and x = 30.",
          },
        },
        {
          title: "Isosceles triangle and an exterior angle",
          problem:
            "ABC is an isosceles triangle with AB = AC. Angle BAC = 40°. The side BC is extended to D. Work out the size of angle ACD. Give reasons for each stage of your working.",
          steps: [
            "AB = AC, so the base angles at B and C are equal (base angles of an isosceles triangle are equal).",
            "Angle ABC = angle ACB = (180° − 40°) ÷ 2 = 70° (angles in a triangle add up to 180°).",
            "Angle ACD = 180° − 70° = 110° (angles on a straight line add up to 180°).",
            "Check with the exterior angle fact: angle ACD = angle BAC + angle ABC = 40° + 70° = 110° ✓",
          ],
          answer: "Angle ACD = 110°",
          yourTurn: {
            question:
              "Your turn: ABC is isosceles with AB = AC. BC is extended to D, and angle ACD = 124°. Work out the size of angle BAC, in degrees.",
            answer: { type: "number", value: 68, display: "68°" },
            solution:
              "Angle ACB = 180° − 124° = 56° (angles on a straight line add up to 180°). Angle ABC = 56° (base angles of an isosceles triangle are equal). Angle BAC = 180° − 56° − 56° = 68° (angles in a triangle add up to 180°). Or: exterior angle 124° = BAC + 56°, so BAC = 68°.",
          },
        },
      ],
      keyPoints: [
        "Straight line 180°, around a point 360°, triangle 180°, quadrilateral 360°.",
        "Vertically opposite angles are equal.",
        "Parallel lines: alternate angles are equal, corresponding angles are equal, co-interior angles add up to 180°.",
        "The exterior angle of a triangle equals the sum of the two interior opposite angles.",
        "Every step needs a reason in full words — never 'Z angles' or 'F angles'.",
        "With algebra: write the equation from a fact, solve, then substitute back for the angle.",
      ],
      whyItWorks:
        "Why do the angles of a triangle add up to 180°? Draw triangle ABC and a line through C parallel to AB. At C there are now three angles on a straight line. The left one equals angle A (alternate angles) and the right one equals angle B (alternate angles). The middle one is angle C itself. Three angles on a straight line add up to 180°, so A + B + C = 180°.\n\nThe exterior angle fact follows straight away: the exterior angle at C is 180° − C, and so is A + B. A quadrilateral splits into two triangles along a diagonal, which is why its angles add up to 2 × 180° = 360°.",
      strategies: ["Draw a diagram", "Label every angle you find", "Introduce a variable", "Work backwards", "Check by substituting"],
      thinkDeeper:
        "The parallel-line facts also run *backwards*: if alternate angles are equal, the lines must be parallel. In a quadrilateral ABCD, angle A = 3x, angle B = 180° − 3x, angle C = 2x + 20° and angle D = 160° − 2x. Prove that ABCD is a trapezium. Is it ever a parallelogram — and if so, for which x?",
    },
    // -----------------------------------------------------------------------
    {
      id: "polygons",
      heading: "Angles in polygons",
      discovery: {
        problem:
          "Imagine walking all the way around the edge of a regular pentagon, turning at each corner, until you are back at the start facing the same way. How far have you turned altogether? How big is each turn? Now do the same for a regular hexagon and a regular decagon. What stays the same?",
        idea:
          "You always turn through exactly **one full turn, 360°**, whatever the shape — you end up facing the way you started. Each turn is an **exterior angle**, so the exterior angles of any convex polygon add up to 360°. For a regular polygon the turns are equal: 360° ÷ 5 = 72° for a pentagon, 60° for a hexagon, 36° for a decagon. The interior angle is what is left on the straight line: 180° − 72° = 108°.",
      },
      body:
        "A **polygon** is a closed shape with straight sides. A **regular** polygon has all sides equal *and* all angles equal.\n\n**Sum of the interior angles.** Choose one vertex and draw every diagonal from it. An n-sided polygon splits into **n − 2 triangles**, so\n\n    sum of interior angles = (n − 2) × 180°\n\n**Exterior angles.** At each vertex, interior angle + exterior angle = 180° (straight line), and the exterior angles of any convex polygon add up to **360°**.\n\nFor a **regular** polygon with n sides:\n\n    exterior angle = {{360/n}}°        interior angle = 180° − exterior angle\n\n| Polygon | n | Interior sum | Each exterior | Each interior |\n|---|---|---|---|---|\n| Triangle | 3 | 180° | 120° | 60° |\n| Square | 4 | 360° | 90° | 90° |\n| Pentagon | 5 | 540° | 72° | 108° |\n| Hexagon | 6 | 720° | 60° | 120° |\n| Octagon | 8 | 1080° | 45° | 135° |\n| Nonagon | 9 | 1260° | 40° | 140° |\n| Decagon | 10 | 1440° | 36° | 144° |\n| Dodecagon | 12 | 1800° | 30° | 150° |\n\n**Finding the number of sides.** Go through the **exterior** angle — it is far quicker than solving with the interior sum:\n\n    interior 156° → exterior 180° − 156° = 24° → n = 360 ÷ 24 = 15\n\nIf 360 ÷ exterior is **not a whole number**, no regular polygon has that angle. That is a favourite 'explain why' question.\n\n**Using the interior sum.** If you know the total, solve (n − 2) × 180 = total. A polygon with interior angles adding up to 1980° has n − 2 = 11, so n = 13.\n\n**Polygons meeting at a point (tessellation).** Angles around a point add up to 360°. Regular polygons tile the plane on their own only when the interior angle divides 360° exactly: equilateral triangles (6 × 60°), squares (4 × 90°) and hexagons (3 × 120°). Mixtures also work, e.g. two octagons and a square: 135° + 135° + 90° = 360°.\n\n**Combined shapes.** Harder ('gold') questions put two regular polygons side by side and ask for an angle in the gap or in a triangle they create. Work out each polygon's interior angle first, then use a straight line, a point or an isosceles triangle (two sides are equal because the polygons are regular).",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: a regular hexagon with one side extended as a dashed line. At that vertex the interior angle is 120 degrees and the exterior angle between the extension and the next side is 60 degrees. Right: a pentagon split into 3 coloured triangles by the two diagonals from one vertex, so its angles add to 3 times 180, which is 540 degrees."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><polygon points="245,150 197.5,67.7 102.5,67.7 55,150 102.5,232.3 197.5,232.3" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><line x1="197.5" y1="232.3" x2="267.5" y2="232.3" stroke="#334155" stroke-width="2" stroke-dasharray="5 4"/><path d="M219.5,232.3 A22,22 0 0,0 208.5,213.2" fill="none" stroke="#334155" stroke-width="1.5"/><text x="232.1" y="216.8" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">60°</text><path d="M181.5,232.3 A16,16 0 0,1 205.5,218.4" fill="none" stroke="#334155" stroke-width="1.5"/><text x="180.5" y="207.4" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">120°</text><text x="150" y="280" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">interior 120° + exterior 60° = 180°</text><polygon points="370,68 448,124.7 418.2,216.3" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><polygon points="370,68 418.2,216.3 321.8,216.3" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5"/><polygon points="370,68 321.8,216.3 292,124.7" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/><polygon points="370,68 448,124.7 418.2,216.3 321.8,216.3 292,124.7" fill="none" stroke="#1f2937" stroke-width="2"/><text x="370" y="262" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">5 sides → 3 triangles</text><text x="370" y="280" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3 × 180° = 540°</text></svg>`,
      diagramCaption:
        "Left: interior and exterior angles of a regular hexagon sit on a straight line. Right: diagonals from one vertex cut a pentagon into 5 − 2 = 3 triangles.",
      workedExamples: [
        {
          title: "Number of sides from an interior angle",
          problem: "Each interior angle of a regular polygon is 156°. How many sides does the polygon have?",
          steps: [
            "Use the exterior angle: 180° − 156° = 24°.",
            "The exterior angles add up to 360°, and they are all equal: n = 360 ÷ 24 = 15.",
            "Check with the interior sum: (15 − 2) × 180° = 2340°, and 2340° ÷ 15 = 156° ✓",
          ],
          answer: "15 sides",
          yourTurn: {
            question: "Your turn: each interior angle of a regular polygon is 165°. How many sides does it have?",
            answer: { type: "number", value: 24 },
            solution: "Exterior angle = 180° − 165° = 15°. n = 360 ÷ 15 = 24 sides.",
          },
        },
        {
          title: "Polygons meeting at a point",
          problem:
            "A square, a regular hexagon and a regular polygon X fit together exactly around a point, with no gaps or overlaps. How many sides does X have?",
          steps: [
            "Interior angle of the square = 90°. Interior angle of the hexagon = 180° − {{360/6}}° = 120°.",
            "Angles around a point add up to 360°, so X's interior angle = 360° − 90° − 120° = 150°.",
            "Exterior angle of X = 180° − 150° = 30°, so X has 360 ÷ 30 = 12 sides.",
          ],
          answer: "X is a regular dodecagon (12 sides).",
          yourTurn: {
            question:
              "Your turn: a regular pentagon, a regular decagon and a regular polygon Y fit together exactly around a point. How many sides does Y have?",
            answer: { type: "number", value: 5 },
            solution:
              "Pentagon: 180° − 72° = 108°. Decagon: 180° − 36° = 144°. Y's interior angle = 360° − 108° − 144° = 108°, so its exterior angle is 72° and it has 360 ÷ 72 = 5 sides — another pentagon.",
          },
        },
      ],
      keyPoints: [
        "Sum of interior angles of an n-sided polygon = (n − 2) × 180°.",
        "Exterior angles of any convex polygon add up to 360°.",
        "Interior + exterior = 180° at every vertex.",
        "Regular polygon: exterior angle = {{360/n}}°, so n = 360 ÷ exterior angle.",
        "If 360 ÷ exterior angle is not a whole number, that regular polygon cannot exist.",
        "Only triangles, squares and hexagons tessellate on their own.",
      ],
      whyItWorks:
        "Two different arguments give the same answer, which is a good check. **Triangles:** diagonals from one vertex make n − 2 triangles whose angles fill the polygon exactly, giving (n − 2) × 180°. **Straight lines:** at each of the n vertices, interior + exterior = 180°, so all the angles together make 180n°. Take away the exterior angles (one full turn, 360°) and the interior angles are 180n − 360 = (n − 2) × 180°. Same formula, two different reasons.",
      strategies: ["Use the exterior angle first", "Try small cases", "Find a pattern", "Draw a diagram", "Check by substituting"],
      thinkDeeper:
        "Could a regular polygon have an interior angle of 100°? Of 162°? Find every whole-number interior angle that a regular polygon can have. (Hint: the exterior angle must divide 360 exactly — and it must be less than 180°.)",
    },
    // -----------------------------------------------------------------------
    {
      id: "circle-theorems-1",
      heading: "Circle theorems: centre, semicircle, same segment",
      discovery: {
        problem:
          "Mark two points A and B on a circle with centre O, and a third point P on the larger arc. Measure angle AOB and angle APB. Now slide P to a different place on the larger arc and measure again. What changes, and what stays the same? What happens when A and B are at opposite ends of a diameter?",
        idea:
          "Angle APB does not change as P moves around the arc — and it is always exactly **half** of angle AOB. When AB is a diameter, angle AOB is a straight line (180°), so angle APB is always **90°**. Three theorems in one experiment: the angle at the centre, the angle in a semicircle and angles in the same segment.",
      },
      body:
        "**Vocabulary.** A **chord** joins two points on the circle; a **diameter** is a chord through the centre. A chord cuts the circle into two **segments** (minor and major). An **arc** is part of the circumference. Two lines from the ends of a chord meeting at a point P *subtend* an angle at P.\n\n**Theorem 1 — Angle at the centre.** The angle subtended by an arc at the centre is **twice** the angle subtended at the circumference.\n\n    angle AOB = 2 × angle APB\n\nLook for an 'arrowhead': two radii and two chords from the same ends A and B. The theorem also works when the arrowhead is 'inverted' — then the angle at the centre may be **reflex** (more than 180°).\n\n**Theorem 2 — Angle in a semicircle.** The angle in a semicircle is a right angle: if AB is a diameter and C is on the circle, angle ACB = 90°. (This is Theorem 1 with angle AOB = 180°.)\n\n**Theorem 3 — Angles in the same segment.** Angles subtended at the circumference by the same arc (in the same segment) are **equal**. Look for a 'bow-tie' shape: two triangles standing on the same chord with their tips on the same side.\n\n**The hidden isosceles triangle.** Any two radii make an isosceles triangle with the chord between them, because OA = OB. This is the most-missed fact in circle questions — whenever you see two radii, mark the two base angles as equal.\n\n| Theorem | Exam reason |\n|---|---|\n| Centre | *the angle at the centre is twice the angle at the circumference* |\n| Semicircle | *the angle in a semicircle is 90°* |\n| Same segment | *angles in the same segment are equal* |\n| Two radii | *OA = OB (radii), so triangle OAB is isosceles* |\n\n> Say *circumference*, not *edge*, and *centre*, not *middle*. Mark schemes expect the key words.",
      diagram: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three circles. First: chord AB subtends angle 2x at the centre O and angle x at point P on the circumference. Second: AB is a diameter and C is on the circle, with a right angle at C. Third: P and Q are on the same arc above chord AB, and the angles APB and AQB are both x."><rect x="0" y="0" width="480" height="260" fill="#ffffff"/><circle cx="85" cy="145" r="68" fill="none" stroke="#334155" stroke-width="2"/><line x1="85" y1="145" x2="29.3" y2="184" stroke="#2563eb" stroke-width="2"/><line x1="85" y1="145" x2="140.7" y2="184" stroke="#2563eb" stroke-width="2"/><line x1="85" y1="77" x2="29.3" y2="184" stroke="#1f2937" stroke-width="2"/><line x1="85" y1="77" x2="140.7" y2="184" stroke="#1f2937" stroke-width="2"/><circle cx="85" cy="145" r="3" fill="#1f2937"/><text x="73" y="141" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><text x="85" y="169.2" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2x</text><text x="85" y="107.5" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x</text><text x="19.5" y="194.9" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><text x="150.5" y="194.9" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><text x="85" y="69" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">P</text><text x="85" y="40" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Angle at the centre</text><text x="85" y="245" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">∠AOB = 2 × ∠APB</text><circle cx="240" cy="145" r="68" fill="none" stroke="#334155" stroke-width="2"/><line x1="172" y1="145" x2="308" y2="145" stroke="#2563eb" stroke-width="2"/><line x1="276" y1="87.3" x2="172" y2="145" stroke="#1f2937" stroke-width="2"/><line x1="276" y1="87.3" x2="308" y2="145" stroke="#1f2937" stroke-width="2"/><path d="M267.3,92.2 L272.1,100.9 L280.9,96.1" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="240" cy="145" r="3" fill="#1f2937"/><text x="240" y="161" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><text x="163" y="149" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><text x="317" y="149" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><text x="282" y="80.3" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">C</text><text x="240" y="40" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Angle in a semicircle</text><text x="240" y="245" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">∠ACB = 90°</text><circle cx="395" cy="145" r="68" fill="none" stroke="#334155" stroke-width="2"/><line x1="363.1" y1="85" x2="333.4" y2="173.7" stroke="#1f2937" stroke-width="2"/><line x1="363.1" y1="85" x2="456.6" y2="173.7" stroke="#1f2937" stroke-width="2"/><line x1="436.9" y1="91.4" x2="333.4" y2="173.7" stroke="#1f2937" stroke-width="2"/><line x1="436.9" y1="91.4" x2="456.6" y2="173.7" stroke="#1f2937" stroke-width="2"/><line x1="333.4" y1="173.7" x2="456.6" y2="173.7" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 3"/><text x="368.9" y="112.8" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x</text><text x="429.1" y="118.7" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x</text><text x="322.5" y="182.8" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><text x="467.5" y="182.8" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><text x="357.1" y="77" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">P</text><text x="442.9" y="83.4" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Q</text><text x="395" y="40" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Same segment</text><text x="395" y="245" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">∠APB = ∠AQB</text></svg>`,
      diagramCaption:
        "The three theorems: angle at the centre (arrowhead), angle in a semicircle (diameter) and angles in the same segment (bow-tie).",
      workedExamples: [
        {
          title: "Angle at the centre and an isosceles triangle",
          problem:
            "A, B and C are points on a circle, centre O. Angle AOC = 136°, and B lies on the major arc AC. Work out (a) angle ABC (b) angle OAC. Give reasons.",
          steps: [
            "(a) Angle ABC and angle AOC stand on the same arc AC. The angle at the centre is twice the angle at the circumference, so angle ABC = 136° ÷ 2 = 68°.",
            "(b) OA = OC (radii), so triangle OAC is isosceles and angle OAC = angle OCA.",
            "Angles in a triangle add up to 180°: angle OAC = (180° − 136°) ÷ 2 = 22°.",
          ],
          answer: "(a) 68° (b) 22°",
          yourTurn: {
            question:
              "Your turn: A, B and C lie on a circle, centre O, with B on the major arc AC. Angle ABC = 52°. Work out the size of angle OAC, in degrees.",
            answer: { type: "number", value: 38, display: "38°" },
            solution:
              "Angle AOC = 2 × 52° = 104° (angle at the centre is twice the angle at the circumference). OA = OC (radii), so angle OAC = (180° − 104°) ÷ 2 = 38°.",
          },
        },
        {
          title: "Semicircle, then same segment",
          problem:
            "AB is a diameter of a circle. C and D are points on the circle, with D on the same side of chord AC as B. Angle CAB = 31°. Work out the size of angle ADC. Give reasons.",
          steps: [
            "AB is a diameter, so angle ACB = 90° (the angle in a semicircle is 90°).",
            "In triangle ABC: angle ABC = 180° − 90° − 31° = 59° (angles in a triangle add up to 180°).",
            "Angles ADC and ABC both stand on the chord AC, with D and B on the same side of it. Angles in the same segment are equal, so angle ADC = 59°.",
          ],
          answer: "Angle ADC = 59°",
          yourTurn: {
            question:
              "Your turn: AB is a diameter of a circle and C is on the circle. D is on the circle, on the same side of chord AC as B. Angle CAB = 27°. Work out angle ADC, in degrees.",
            answer: { type: "number", value: 63, display: "63°" },
            solution:
              "Angle ACB = 90° (the angle in a semicircle is 90°). Angle ABC = 180° − 90° − 27° = 63° (angles in a triangle add up to 180°). Angle ADC = angle ABC = 63° (angles in the same segment are equal).",
          },
        },
      ],
      keyPoints: [
        "Angle at the centre = 2 × angle at the circumference (same arc).",
        "Angle in a semicircle = 90° — look for a diameter.",
        "Angles in the same segment are equal — look for a bow-tie on one chord.",
        "Two radii make an isosceles triangle: mark the equal base angles straight away.",
        "Use the full exam wording: *centre*, *circumference*, *segment*, *semicircle*.",
      ],
      whyItWorks:
        "All three theorems come from one idea. Join P to the centre O: triangles OAP and OBP are isosceles because their sides are radii, and the exterior angle of each at O is double its base angle. Adding the two halves gives angle AOB = 2 × angle APB (full proof in *Proving circle theorems*). The semicircle theorem is the special case AOB = 180°. And any two points P and Q on the same arc both make half of the *same* centre angle, so angle APB = angle AQB — that is why angles in the same segment are equal.",
      strategies: ["Draw a diagram", "Look for radii (isosceles triangles)", "Label every angle you find", "Look for a diameter"],
      thinkDeeper:
        "In the discovery, P was on the *major* arc. What happens to angle APB if P moves onto the *minor* arc AB instead? If angle AOB = 2x, find angle APB in terms of x — and notice what the two possible values of angle APB add up to.",
    },
    // -----------------------------------------------------------------------
    {
      id: "circle-theorems-2",
      heading: "Cyclic quadrilaterals, tangents & alternate segment",
      discovery: {
        problem:
          "Draw a circle and put four points A, B, C, D on it, in order, to make a quadrilateral. Measure all four angles. Add the opposite pairs: A + C and B + D. Try a very different quadrilateral. Then draw a straight line that just touches the circle at one point T, and the radius OT. What angle do they make?",
        idea:
          "Opposite angles of a quadrilateral inscribed in a circle always add up to **180°** — that is a **cyclic quadrilateral**. A line that touches a circle at exactly one point is a **tangent**, and it always meets the radius at **90°**. These two facts, plus equal tangents and the alternate segment theorem, complete the circle-theorem toolkit.",
      },
      body:
        "**Theorem 4 — Cyclic quadrilateral.** A quadrilateral whose four vertices all lie on a circle is *cyclic*. Its **opposite angles add up to 180°**. All four vertices must be on the circle — if one is the centre, the theorem does not apply.\n\nA useful consequence: the **exterior angle** of a cyclic quadrilateral equals the **interior opposite angle** (both are 180° minus the same angle).\n\n**Theorem 5 — Tangent and radius.** A tangent to a circle is **perpendicular to the radius** at the point of contact: angle OTP = 90°. The moment a question mentions a tangent, draw in the radius to the point of contact and mark the right angle.\n\n**Theorem 6 — Two tangents from a point.** The two tangents from an external point P are **equal in length**: PA = PB. So triangle PAB is isosceles, and the shape OAPB is a **kite** with right angles at A and B. That gives angle AOB + angle APB = 180°.\n\n**Theorem 7 — Alternate segment theorem.** The angle between a tangent and a chord is **equal to the angle in the alternate segment**. In the diagram, the angle between the tangent at T and chord TB equals angle TAB, at A on the other side of TB. To find the 'alternate' angle, follow the chord to its far end, then go across the triangle to the third point.\n\n| Theorem | Exam reason |\n|---|---|\n| Cyclic quadrilateral | *opposite angles of a cyclic quadrilateral add up to 180°* |\n| Tangent and radius | *a tangent is perpendicular to the radius (at the point of contact)* |\n| Equal tangents | *tangents from an external point are equal in length* |\n| Alternate segment | *alternate segment theorem* |\n\n**Multi-step questions.** A typical 5-mark question needs three or four facts in a chain. Write one fact per line, each with its reason, and finish with the angle the question asked for. If you get stuck, look for: radii (isosceles), a diameter (90°), a tangent (90° with the radius, or the alternate segment), four points on the circle (cyclic quadrilateral).",
      diagram: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: cyclic quadrilateral ABCD with angle x at A and angle y at C, where x plus y is 180 degrees. Right: a circle with centre O and a tangent touching at T; radius OT meets the tangent at a right angle. Chords TA, TB and AB form a triangle. The angle x between the tangent and chord TB equals angle TAB in the alternate segment."><rect x="0" y="0" width="480" height="280" fill="#ffffff"/><circle cx="115" cy="140" r="88" fill="none" stroke="#334155" stroke-width="2"/><polygon points="99.7,53.3 191.2,96 145.1,222.7 28.3,155.3" fill="#fde68a" fill-opacity="0.6" stroke="#1f2937" stroke-width="2"/><path d="M90.5,66.4 A16,16 0 0,0 114.2,60.1" fill="none" stroke="#334155" stroke-width="1.5"/><text x="107.5" y="86.9" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x</text><path d="M150.6,207.7 A16,16 0 0,0 131.2,214.7" fill="none" stroke="#334155" stroke-width="1.5"/><text x="134.2" y="197.2" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">y</text><text x="97.5" y="44.5" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><text x="202.5" y="93.5" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><text x="149.5" y="238.9" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">C</text><text x="15.5" y="161.5" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">D</text><text x="115" y="30" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Cyclic quadrilateral</text><text x="115" y="262" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x + y = 180°</text><circle cx="360" cy="125" r="78" fill="none" stroke="#334155" stroke-width="2"/><line x1="248" y1="203" x2="472" y2="203" stroke="#2563eb" stroke-width="2"/><line x1="360" y1="125" x2="360" y2="203" stroke="#334155" stroke-width="1.5" stroke-dasharray="4 3"/><circle cx="360" cy="125" r="3" fill="#1f2937"/><text x="371" y="127" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><path d="M360,193 L350,193 L350,203" fill="none" stroke="#1f2937" stroke-width="1.5"/><line x1="360" y1="203" x2="287.7" y2="95.8" stroke="#1f2937" stroke-width="2"/><line x1="360" y1="203" x2="426.1" y2="83.7" stroke="#1f2937" stroke-width="2"/><line x1="287.7" y1="95.8" x2="426.1" y2="83.7" stroke="#1f2937" stroke-width="2"/><path d="M382,203 A22,22 0 0,0 370.7,183.8" fill="none" stroke="#334155" stroke-width="1.5"/><text x="391" y="189.3" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x</text><path d="M297.7,110.7 A18,18 0 0,0 305.6,94.2" fill="none" stroke="#334155" stroke-width="1.5"/><text x="316.6" y="114.1" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x</text><text x="360" y="221" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">T</text><text x="275.6" y="94.9" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><text x="437.2" y="80.8" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><text x="455" y="195" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">tangent</text><text x="360" y="30" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Tangent and alternate segment</text><text x="360" y="262" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">∠ between tangent and TB = ∠TAB</text></svg>`,
      diagramCaption:
        "Left: in a cyclic quadrilateral opposite angles add to 180°. Right: the tangent meets radius OT at 90°, and the angle between the tangent and chord TB equals angle TAB in the alternate segment.",
      workedExamples: [
        {
          title: "Two tangents from a point",
          problem:
            "PA and PB are tangents to a circle, centre O, touching it at A and B. Angle APB = 48°. C is a point on the major arc AB. Work out (a) angle AOB (b) angle ACB (c) angle PAB. Give reasons.",
          steps: [
            "(a) Angle OAP = angle OBP = 90° (a tangent is perpendicular to the radius). The angles in quadrilateral OAPB add up to 360°, so angle AOB = 360° − 90° − 90° − 48° = 132°.",
            "(b) Angle ACB = 132° ÷ 2 = 66° (the angle at the centre is twice the angle at the circumference).",
            "(c) PA = PB (tangents from an external point are equal), so triangle PAB is isosceles: angle PAB = (180° − 48°) ÷ 2 = 66°.",
            "Check: angle PAB is between the tangent PA and the chord AB, so by the alternate segment theorem it should equal angle ACB. Both are 66° ✓",
          ],
          answer: "(a) 132° (b) 66° (c) 66°",
          yourTurn: {
            question:
              "Your turn: PA and PB are tangents to a circle, centre O, at A and B. Angle APB = 70°. C is a point on the major arc AB. Work out angle ACB, in degrees.",
            answer: { type: "number", value: 55, display: "55°" },
            solution:
              "Angle AOB = 360° − 90° − 90° − 70° = 110° (a tangent is perpendicular to the radius; angles in a quadrilateral add up to 360°). Angle ACB = 110° ÷ 2 = 55° (the angle at the centre is twice the angle at the circumference).",
          },
        },
        {
          title: "Alternate segment and cyclic quadrilateral",
          problem:
            "A, B, C and D lie on a circle, in that order. PAT is the tangent to the circle at A, with T on the same side as B. Angle TAB = 50° and angle BAD = 95°. Work out the size of angle ACD. Give reasons for each stage.",
          steps: [
            "Angle ACB = angle TAB = 50° (alternate segment theorem: the angle between tangent AT and chord AB equals the angle at C in the alternate segment).",
            "ABCD is a cyclic quadrilateral, so angle BCD = 180° − 95° = 85° (opposite angles of a cyclic quadrilateral add up to 180°).",
            "Angle ACD = angle BCD − angle ACB = 85° − 50° = 35°.",
            "Check: angle PAD = 180° − 50° − 95° = 35° (angles on a straight line), and by the alternate segment theorem angle PAD should equal angle ACD ✓",
          ],
          answer: "Angle ACD = 35°",
          yourTurn: {
            question:
              "Your turn: A, B, C and D lie on a circle in that order. TA is the tangent at A, with T on the same side as B. Angle TAB = 42° and angle BAD = 100°. Work out angle ACD, in degrees.",
            answer: { type: "number", value: 38, display: "38°" },
            solution:
              "Angle ACB = 42° (alternate segment theorem). Angle BCD = 180° − 100° = 80° (opposite angles of a cyclic quadrilateral add up to 180°). Angle ACD = 80° − 42° = 38°.",
          },
        },
      ],
      keyPoints: [
        "Cyclic quadrilateral: opposite angles add up to 180° (all four vertices on the circle).",
        "Exterior angle of a cyclic quadrilateral = interior opposite angle.",
        "Tangent ⟂ radius at the point of contact — draw the radius in.",
        "Two tangents from one point are equal: isosceles triangle, kite OAPB.",
        "Alternate segment: angle between tangent and chord = angle in the alternate segment.",
        "One fact + one reason per line; finish with the angle asked for.",
      ],
      whyItWorks:
        "**Cyclic quadrilateral.** Let angle BAD = x and angle BCD = y. The arcs they stand on make up the whole circle, so the two angles at the centre add up to 360°: 2x + 2y = 360°, giving x + y = 180°.\n\n**Tangent ⟂ radius.** Every point of the tangent except T is outside the circle, so further than r from O. The shortest distance from a point to a line is along the perpendicular, so OT is perpendicular to the tangent.\n\n**Alternate segment.** Draw the diameter TD from the point of contact. The angle between the tangent and TD is 90°, and angle TBD = 90° (semicircle). If the tangent–chord angle is x, then angle BTD = 90° − x, so angle TDB = 180° − 90° − (90° − x) = x. Angle TAB = angle TDB (same segment) = x.",
      strategies: ["Draw the radius to a tangent", "Look for four points on the circle", "Label every angle you find", "Check by a second route"],
      thinkDeeper:
        "The cyclic quadrilateral theorem also works backwards: if a quadrilateral's opposite angles add up to 180°, its vertices lie on a circle. Use this to prove that every rectangle is cyclic, and to decide whether a kite with angles 90°, 120°, 90°, 60° is cyclic. Which parallelograms are cyclic?",
    },
    // -----------------------------------------------------------------------
    {
      id: "chords",
      heading: "Chords and intersecting chords",
      discovery: {
        problem:
          "A circle has radius 13 cm. A chord of length 24 cm is drawn. How far is the chord from the centre? Then: two chords AB and CD cross at a point P inside a circle. Measure AP, PB, CP and PD on an accurate drawing, and work out AP × PB and CP × PD. Try again with a different pair of chords through the same P.",
        idea:
          "Drop a perpendicular from O to the chord: by symmetry it cuts the chord in half, making a right-angled triangle with hypotenuse 13 and side 12. Pythagoras gives distance {{sqrt(13^2 - 12^2) = 5}} cm. For the crossing chords, AP × PB always equals CP × PD — and the product is the same for *every* chord through P. This is the **intersecting chords theorem**.",
      },
      body:
        "**Perpendicular from the centre.** The perpendicular from the centre of a circle to a chord **bisects the chord**. Equivalently, the perpendicular bisector of any chord passes through the centre. Exam reason: *the perpendicular from the centre to a chord bisects the chord*.\n\nThis gives a right-angled triangle with sides (half the chord), (distance from the centre) and (the radius, as hypotenuse):\n\n    {{r^2 = d^2 + (c/2)^2}}\n\nwhere c is the chord length and d is its distance from the centre. Use it to find any one of r, d, c from the other two. It is also how you find the centre of a circle from a drawing: the perpendicular bisectors of two chords cross at the centre.\n\n**Intersecting chords (inside the circle).** If chords AB and CD meet at P inside the circle:\n\n    AP × PB = CP × PD\n\nEach side is 'one piece times the other piece' of the same chord.\n\n**Intersecting chords (outside the circle).** If two lines from an external point P cut the circle at A and B, and at C and D:\n\n    PA × PB = PC × PD\n\nHere every length is measured **from P** — PB is the *whole* distance from P to the far point, not the part inside the circle. This is where most marks are lost.\n\n**Tangent–secant.** If one of the lines from P is a tangent touching at T, its two points have merged into one, so\n\n    {{PT^2 = PA * PB}}\n\n| Situation | Rule |\n|---|---|\n| Chords crossing inside | AP × PB = CP × PD |\n| Two secants from outside | PA × PB = PC × PD (whole lengths from P) |\n| Tangent and secant | {{PT^2}} = PA × PB |\n\nQuestions often set a piece as x, leading to a **quadratic equation**: solve it and reject any negative root, because a length must be positive.",
      diagram: `<svg viewBox="0 0 480 275" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: circle centre O with chord AB. The perpendicular OM from the centre meets AB at its midpoint M, with OA = 13, OM = 5 and AM = 12. Right: chords AB and CD cross at point P inside a circle; AP times PB equals CP times PD."><rect x="0" y="0" width="480" height="275" fill="#ffffff"/><circle cx="110" cy="140" r="90" fill="none" stroke="#334155" stroke-width="2"/><line x1="26.9" y1="174.6" x2="193.1" y2="174.6" stroke="#1f2937" stroke-width="2"/><line x1="110" y1="140" x2="110" y2="174.6" stroke="#2563eb" stroke-width="2"/><line x1="110" y1="140" x2="26.9" y2="174.6" stroke="#dc2626" stroke-width="2"/><path d="M110,165.6 L119,165.6 L119,174.6" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="110" cy="140" r="3" fill="#1f2937"/><text x="110" y="132" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><text x="18.9" y="179.6" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><text x="202.1" y="179.6" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><text x="110" y="191.6" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">M</text><text x="62.5" y="153.3" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="end">13</text><text x="116" y="161.3" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="start">5</text><text x="68.5" y="190.6" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">12</text><text x="110" y="30" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Perpendicular from the centre</text><text x="110" y="258" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">OM ⟂ AB, so AM = MB</text><circle cx="355" cy="140" r="90" fill="none" stroke="#334155" stroke-width="2"/><line x1="273.4" y1="178" x2="335" y2="158" stroke="#dc2626" stroke-width="2.5"/><line x1="335" y1="158" x2="443.3" y2="122.8" stroke="#f59e0b" stroke-width="2.5"/><line x1="363.9" y1="229.6" x2="335" y2="158" stroke="#2563eb" stroke-width="2.5"/><line x1="335" y1="158" x2="299.2" y2="69.4" stroke="#16a34a" stroke-width="2.5"/><circle cx="335" cy="158" r="3" fill="#1f2937"/><text x="323" y="162" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">P</text><text x="262.5" y="187.1" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><text x="455.1" y="124.5" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><text x="365.1" y="245.5" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">D</text><text x="291.8" y="64" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">C</text><text x="355" y="30" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Intersecting chords</text><text x="355" y="258" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">AP × PB = CP × PD</text></svg>`,
      diagramCaption:
        "Left: the perpendicular from the centre bisects the chord — a 5-12-13 right-angled triangle. Right: for chords crossing at P, the products of the pieces are equal.",
      workedExamples: [
        {
          title: "Distance of a chord from the centre",
          problem: "A circle has radius 10 cm. A chord AB has length 16 cm. Work out the distance from the centre O to the chord.",
          steps: [
            "Let M be the foot of the perpendicular from O to AB. The perpendicular from the centre bisects the chord, so AM = 8 cm.",
            "Triangle OMA has a right angle at M and hypotenuse OA = 10 cm (a radius).",
            "{{OM = sqrt(10^2 - 8^2) = sqrt(100 - 64) = sqrt(36) = 6}} cm.",
          ],
          answer: "6 cm",
          yourTurn: {
            question:
              "Your turn: a circle has radius 17 cm. A chord is 8 cm from the centre. Work out the length of the chord, in cm.",
            answer: { type: "number", value: 30, display: "30 cm" },
            solution:
              "Half the chord = {{sqrt(17^2 - 8^2) = sqrt(289 - 64) = sqrt(225) = 15}} cm. The perpendicular from the centre bisects the chord, so the chord is 2 × 15 = 30 cm.",
          },
        },
        {
          title: "Intersecting chords: inside and outside",
          problem:
            "(a) Chords AB and CD meet at P inside a circle. AP = 6 cm, PB = 4 cm and CP = 3 cm. Work out PD.\n\n(b) From a point P outside a circle, one line cuts the circle at A and B, with PA = 4 cm and AB = 5 cm. A second line cuts the circle at C and D, with PC = 3 cm. Work out CD. Then work out the length of a tangent from P to the circle.",
          steps: [
            "(a) Inside: AP × PB = CP × PD, so 6 × 4 = 3 × PD, giving PD = 24 ÷ 3 = 8 cm.",
            "(b) Outside, all lengths are measured from P. PB = PA + AB = 4 + 5 = 9 cm.",
            "PA × PB = PC × PD: 4 × 9 = 3 × PD, so PD = 12 cm and CD = PD − PC = 12 − 3 = 9 cm.",
            "Tangent: {{PT^2 = PA * PB = 4 * 9 = 36}}, so PT = 6 cm.",
          ],
          answer: "(a) PD = 8 cm (b) CD = 9 cm, tangent = 6 cm",
          yourTurn: {
            question:
              "Your turn: chords AB and CD meet at P inside a circle. AP = x cm, PB = (x + 5) cm, CP = 6 cm and PD = 4 cm. Work out the value of x.",
            answer: { type: "number", value: 3 },
            solution:
              "x(x + 5) = 6 × 4, so {{x^2 + 5x - 24 = 0}}, which factorises as (x + 8)(x − 3) = 0. A length is positive, so x = 3.",
          },
        },
      ],
      keyPoints: [
        "The perpendicular from the centre to a chord bisects the chord.",
        "Radius, half-chord and distance from the centre form a right-angled triangle: {{r^2 = d^2 + (c/2)^2}}.",
        "Chords crossing inside: AP × PB = CP × PD.",
        "Secants from outside: PA × PB = PC × PD, with every length measured from P.",
        "Tangent and secant: {{PT^2}} = PA × PB.",
        "Reject negative solutions of a quadratic — lengths are positive.",
      ],
      whyItWorks:
        "**Perpendicular bisects the chord.** Triangles OMA and OMB are both right-angled at M, share the side OM, and have equal hypotenuses OA = OB (radii). By RHS they are congruent, so AM = MB.\n\n**Intersecting chords.** Join AC and BD. In triangles APC and DPB: angle APC = angle DPB (vertically opposite), and angle CAB = angle CDB (angles in the same segment, both standing on chord CB). So the triangles are **similar**, and corresponding sides are in proportion:\n\n    {{(AP)/(DP) = (CP)/(BP)}}, so AP × PB = CP × PD.\n\nThe outside version is the same argument with an exterior angle of a cyclic quadrilateral replacing the same-segment angle.",
      strategies: ["Draw the perpendicular from the centre", "Use symmetry", "Look for similar triangles", "Introduce a variable"],
      thinkDeeper:
        "For a point P at distance p from the centre of a circle of radius r, the product AP × PB is the same for every chord through P. Use the diameter through P to show that the product is {{r^2 - p^2}} when P is inside and {{p^2 - r^2}} when P is outside. (This number is called the *power* of the point.) What happens when P is on the circle?",
    },
    // -----------------------------------------------------------------------
    {
      id: "circle-proofs",
      heading: "Proving circle theorems",
      discovery: {
        problem:
          "P, A and B lie on a circle with centre O. Join PO and extend it to a point D on the other side of the circle. Why is triangle OAP isosceles? If angle OPA = x, what is angle OAP? What is angle AOD? Repeat on the other side with angle OPB = y.",
        idea:
          "OA = OP because both are radii, so triangle OAP is isosceles and angle OAP = x. The exterior angle AOD equals the sum of the two interior opposite angles: x + x = 2x. In the same way angle DOB = 2y. So angle AOB = 2x + 2y = 2(x + y) = 2 × angle APB — you have just proved the angle-at-the-centre theorem.",
      },
      body:
        "4MA1 can ask you to **prove** the angle-at-the-centre theorem, or to prove a fact about a diagram using circle theorems. A proof is not a list of numbers: it is a chain of statements, each one justified, that works for **every** diagram of that type.\n\n**How to structure a geometric proof.**\n\n1. Draw (or copy) the diagram and add any helpful line — usually a radius or the line through the centre.\n2. Use letters for unknown angles (x, y), not numbers.\n3. Write one statement per line with its reason: *OA = OP (radii)*, *angle OAP = x (base angles of an isosceles triangle)*.\n4. End with a clear conclusion that matches what you were asked to prove.\n\n**Proof of the angle at the centre theorem.** Let angle OPA = x and angle OPB = y. Extend PO to D.\n\n- OA = OP (radii), so triangle OAP is isosceles and angle OAP = x.\n- Angle AOD = x + x = 2x (exterior angle of a triangle equals the sum of the interior opposite angles).\n- Similarly, OB = OP (radii), angle OBP = y, and angle DOB = 2y.\n- Angle AOB = 2x + 2y = 2(x + y) = 2 × angle APB.\n\n**Other cases.** If O lies *outside* angle APB (a narrow arrowhead), the same argument works by **subtracting**: angle AOB = 2y − 2x = 2(y − x) = 2 × angle APB. A complete proof considers both cases.\n\n**Theorems that follow from it.**\n\n- *Semicircle*: if AB is a diameter, angle AOB = 180°, so angle APB = 90°.\n- *Same segment*: two angles on the same arc are each half of the same centre angle, so they are equal.\n- *Cyclic quadrilateral*: the two centre angles add up to 360°, so the opposite angles add up to 180°.\n- *Equal tangents*: triangles OAP and OBP are right-angled (tangent ⟂ radius), share hypotenuse OP and have OA = OB, so they are congruent (RHS) and PA = PB.\n\n> When a question says *Prove*, write words like *because*, *so* and *therefore*, and give a reason for every equal sign. 'It looks like it' is never a reason.",
      diagram: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Proof diagram: circle centre O with points P, A and B on the circumference. Radii OA, OP and OB are drawn and PO is extended to D. Triangle OAP is isosceles with base angles x; triangle OBP is isosceles with base angles y. The angle AOD is 2x and the angle DOB is 2y."><rect x="0" y="0" width="480" height="280" fill="#ffffff"/><circle cx="150" cy="150" r="115" fill="none" stroke="#334155" stroke-width="2"/><line x1="130" y1="36.7" x2="52.5" y2="210.9" stroke="#1f2937" stroke-width="2"/><line x1="130" y1="36.7" x2="247.5" y2="210.9" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="150" x2="52.5" y2="210.9" stroke="#2563eb" stroke-width="2"/><line x1="150" y1="150" x2="247.5" y2="210.9" stroke="#2563eb" stroke-width="2"/><line x1="130" y1="36.7" x2="150" y2="150" stroke="#2563eb" stroke-width="2"/><line x1="150" y1="150" x2="170" y2="263.3" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="150" cy="150" r="3" fill="#1f2937"/><path d="M121.9,55 A20,20 0 0,0 133.5,56.4" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="126.1" y="73.1" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x</text><path d="M60.6,192.7 A20,20 0 0,1 69.4,200.3" fill="none" stroke="#dc2626" stroke-width="1.5"/><text x="74.8" y="189.8" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x</text><path d="M134.5,62.4 A26,26 0 0,0 144.6,58.3" fill="none" stroke="#16a34a" stroke-width="1.5"/><text x="145" y="78.4" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">y</text><path d="M236.3,194.4 A20,20 0 0,0 230.6,200.3" fill="none" stroke="#16a34a" stroke-width="1.5"/><text x="223.1" y="191.9" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">y</text><path d="M136.4,158.5 A16,16 0 0,0 152.8,165.8" fill="none" stroke="#334155" stroke-width="1.5"/><text x="137.8" y="181.6" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2x</text><path d="M153.8,171.7 A22,22 0 0,0 168.7,161.7" fill="none" stroke="#334155" stroke-width="1.5"/><text x="170.1" y="184" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2y</text><text x="164" y="144" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><text x="127.9" y="28.9" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">P</text><text x="41.4" y="221.8" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><text x="258.6" y="221.8" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><text x="172.1" y="279.1" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">D</text><text x="285" y="60" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="start">OA = OP = OB (radii)</text><text x="285" y="80" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="start">∠AOD = 2x (exterior angle)</text><text x="285" y="100" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="start">∠DOB = 2y</text><text x="285" y="120" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="start">∠AOB = 2(x + y) = 2∠APB</text></svg>`,
      diagramCaption:
        "The proof: two isosceles triangles from the radii OA, OP and OB, and two exterior angles at O, 2x and 2y.",
      workedExamples: [
        {
          title: "Using the proof structure with numbers",
          problem:
            "P, A and B lie on a circle, centre O, with O inside angle APB. Angle OPA = 23° and angle OPB = 31°. Without quoting the angle-at-the-centre theorem, work out angle AOB. Give a reason for each step.",
          steps: [
            "OA = OP (radii), so angle OAP = 23° (base angles of an isosceles triangle).",
            "Extend PO to D. Angle AOD = 23° + 23° = 46° (exterior angle of triangle OAP).",
            "OB = OP (radii), so angle OBP = 31°, and angle DOB = 31° + 31° = 62° (exterior angle of triangle OBP).",
            "Angle AOB = 46° + 62° = 108° — which is indeed 2 × (23° + 31°) = 2 × 54°.",
          ],
          answer: "Angle AOB = 108°",
          yourTurn: {
            question:
              "Your turn: P, A and B lie on a circle, centre O, with O inside angle APB. Angle OPA = 17° and angle OPB = 38°. Work out angle AOB, in degrees.",
            answer: { type: "number", value: 110, display: "110°" },
            solution:
              "Angle AOD = 2 × 17° = 34° and angle DOB = 2 × 38° = 76° (isosceles triangles from radii, exterior angles). Angle AOB = 34° + 76° = 110° = 2 × 55°.",
          },
        },
        {
          title: "Prove: opposite angles of a cyclic quadrilateral add up to 180°",
          problem:
            "ABCD is a cyclic quadrilateral in a circle with centre O. Prove that angle BAD + angle BCD = 180°.",
          steps: [
            "Let angle BAD = x. Angle BAD stands on arc BCD, so the angle at the centre on that arc is 2x (the angle at the centre is twice the angle at the circumference).",
            "Let angle BCD = y. It stands on arc BAD, so the angle at the centre on that arc is 2y.",
            "Those two angles at O together go all the way round the centre, so 2x + 2y = 360° (angles around a point).",
            "Dividing by 2: x + y = 180°, so angle BAD + angle BCD = 180°. ∎",
          ],
          answer: "Proved: 2x + 2y = 360°, so x + y = 180°.",
          yourTurn: {
            question:
              "Your turn: ABCD is a cyclic quadrilateral in a circle with centre O. The angle at O subtended by arc BCD is 160°. Work out angle BCD, in degrees.",
            answer: { type: "number", value: 100, display: "100°" },
            solution:
              "Angle BAD stands on arc BCD, so angle BAD = 160° ÷ 2 = 80° (the angle at the centre is twice the angle at the circumference). Opposite angles of a cyclic quadrilateral add up to 180°, so angle BCD = 180° − 80° = 100°.",
          },
        },
      ],
      keyPoints: [
        "A proof uses letters, not numbers, and gives a reason for every statement.",
        "Add the radius or the line through the centre: radii make isosceles triangles.",
        "Exterior angle of a triangle = sum of the two interior opposite angles — the engine of the proof.",
        "If O is outside angle APB, subtract instead of adding.",
        "Semicircle, same segment and cyclic quadrilateral theorems all follow from the angle at the centre.",
        "Finish with a clear conclusion that matches the statement you were asked to prove.",
      ],
      whyItWorks:
        "Why does a proof with letters beat checking lots of examples? Measuring ten diagrams shows the theorem is *probably* true; using x and y covers **every** possible position of P, A and B at once. The only facts used — radii are equal, base angles of an isosceles triangle are equal, and the exterior angle of a triangle — are true for every triangle, so the conclusion is true for every circle.",
      strategies: ["Draw an extra line through the centre", "Introduce a variable", "Split into cases", "Work backwards from what you must prove"],
      thinkDeeper:
        "Write out the proof of the angle-at-the-centre theorem for the case where O lies **outside** angle APB, so that PA and PB are on the same side of PO. Then prove the alternate segment theorem, using the diameter through the point of contact.",
    },
    // -----------------------------------------------------------------------
    {
      id: "constructions-loci",
      heading: "Constructions and loci",
      discovery: {
        problem:
          "A goat is tied to a post by a 5 m rope. Sketch all the grass it can reach. Now the rope is instead tied to a ring that slides along a straight 10 m rail. Sketch the new region. Finally, where could you stand so that you are exactly the same distance from two trees?",
        idea:
          "With a post, the goat reaches every point within 5 m: a **circle** (a disc). With the rail, it reaches every point within 5 m of a line segment: a rectangle 10 m by 10 m with a semicircle on each end (a 'stadium' shape). Points the same distance from two trees lie on the **perpendicular bisector** of the line joining them. Each set of points obeying a rule is called a **locus**.",
      },
      body:
        "**Constructions** use only a ruler (straight edge) and a pair of compasses. **Leave all your construction arcs showing** — they are the evidence the examiner marks.\n\n**Perpendicular bisector of AB.** Open the compasses to more than half of AB. Draw an arc above and below AB from A, then the same from B, without changing the radius. Join the two crossing points. Every point on this line is equidistant from A and B.\n\n**Bisector of angle ABC.** From B, draw an arc cutting both arms. From each of those two points, draw arcs (same radius) that cross between the arms. Join B to the crossing point. Every point on this line is equidistant from the two arms.\n\n**Perpendicular from a point P to a line.** From P, draw an arc cutting the line twice. Construct the perpendicular bisector of those two points: it passes through P. This gives the **shortest distance** from P to the line.\n\n**Also:** a 60° angle (an equilateral triangle from two equal arcs), a triangle from three given sides (arcs from each end of the base), and a 90° angle at a point on a line (perpendicular bisector of two points either side of it).\n\n**Loci.**\n\n| Rule | Locus |\n|---|---|\n| Fixed distance from a point | a circle |\n| Fixed distance from a line segment | two parallel lines joined by semicircles |\n| Equidistant from two points | the perpendicular bisector |\n| Equidistant from two intersecting lines | the angle bisector(s) |\n\n**Regions.** 'Less than 3 m from A' is the *inside* of a circle; 'closer to A than to B' is the side of the perpendicular bisector containing A; 'closer to AB than to AD' is the side of the angle bisector at A containing AB. Draw each boundary, then **shade** the region that satisfies every condition — and label it R if asked.\n\n**Scale drawings.** Convert first: with a scale of 1 cm to 2 m, a 7 m distance becomes 3.5 cm. Some questions then ask for the area or length of the region, which needs sector, Pythagoras or trig work.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: line segment AB with pairs of equal compass arcs above and below it, and the perpendicular bisector drawn through the two crossing points at right angles to AB. Right: a rectangular garden ABCD, 8 m by 9 m. A dashed angle bisector from A at 45 degrees and a dashed quarter circle of radius 4 m about A enclose a shaded sector: the points within 4 m of A that are closer to AB than to AD."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><line x1="30" y1="170" x2="190" y2="170" stroke="#1f2937" stroke-width="2.5"/><circle cx="30" cy="170" r="3" fill="#1f2937"/><circle cx="190" cy="170" r="3" fill="#1f2937"/><text x="30" y="190" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><text x="190" y="190" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><path d="M124.1,123.4 A105,105 0 0,0 91.2,84.7" fill="none" stroke="#64748b" stroke-width="1.3"/><path d="M91.2,255.3 A105,105 0 0,0 124.1,216.6" fill="none" stroke="#64748b" stroke-width="1.3"/><path d="M128.8,84.7 A105,105 0 0,0 95.9,123.4" fill="none" stroke="#64748b" stroke-width="1.3"/><path d="M95.9,216.6 A105,105 0 0,0 128.8,255.3" fill="none" stroke="#64748b" stroke-width="1.3"/><line x1="110" y1="50" x2="110" y2="290" stroke="#dc2626" stroke-width="2"/><path d="M119,170 L119,161 L110,161" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="118" y="62" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="start">⟂ bisector</text><text x="115" y="22" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Perpendicular bisector of AB</text><path d="M268,250 L356,250 A88,88 0 0,0 330.2,187.8 Z" fill="#bbf7d0" stroke="none"/><polygon points="268,250 444,250 444,52 268,52" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="268" y1="250" x2="417.6" y2="100.4" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M356,250 A88,88 0 0,0 268,162" fill="none" stroke="#2563eb" stroke-width="1.5" stroke-dasharray="5 4"/><text x="260" y="264" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><text x="452" y="264" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><text x="452" y="48" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">C</text><text x="260" y="48" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">D</text><text x="356" y="268" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">8 m</text><text x="262" y="151" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">9 m</text><text x="326" y="238" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">region</text><text x="360" y="22" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Within 4 m of A, closer to AB</text></svg>`,
      diagramCaption:
        "Left: the perpendicular bisector, with its construction arcs left showing. Right: a garden region within 4 m of A (inside the quarter circle) and closer to AB than to AD (below the angle bisector).",
      workedExamples: [
        {
          title: "Describe and measure a region",
          problem:
            "A rectangular garden ABCD has AB = 8 m and AD = 9 m. A sprinkler waters every point that is within 4 m of A and closer to AB than to AD. Describe how to construct the region, and work out its area. Give your answer correct to 3 significant figures.",
          steps: [
            "Within 4 m of A: draw an arc of radius 4 m (at scale) centred on A. The region is inside it.",
            "Closer to AB than to AD: construct the bisector of angle DAB. Angle DAB = 90°, so the bisector makes 45° with AB. The region is on the AB side.",
            "Both conditions together: a sector of radius 4 m with angle 45°. (It fits inside the garden, since AB and AD are both longer than 4 m.)",
            "Area = {{45/360 * pi * 4^2 = 1/8 * 16 pi = 2 pi}} ≈ 6.283… m².",
          ],
          answer: "{{2 pi}} ≈ 6.28 m²",
          yourTurn: {
            question:
              "Your turn: a rectangular garden ABCD has AB = 10 m and AD = 8 m. A lamp lights every point within 6 m of A that is closer to AD than to AB. Work out the area of this region in m², correct to 3 significant figures.",
            answer: { type: "number", value: 14.1, tolerance: 0.05, display: "14.1 m²" },
            solution:
              "The region is a 45° sector of radius 6 m on the AD side of the angle bisector (it fits, since AD = 8 m > 6 m). Area = {{45/360 * pi * 6^2 = 4.5 pi}} = 14.137… ≈ 14.1 m².",
          },
        },
        {
          title: "Two loci together",
          problem:
            "Points A and B are 8 cm apart. Find the length of the part of the perpendicular bisector of AB that lies within 5 cm of A.",
          steps: [
            "Let M be the midpoint of AB, so AM = 4 cm. The perpendicular bisector passes through M at 90° to AB.",
            "A point X on the bisector is exactly 5 cm from A when AX = 5. Triangle AMX is right-angled at M, so {{MX = sqrt(5^2 - 4^2) = 3}} cm.",
            "There is one such point on each side of AB, and every point between them is within 5 cm of A.",
            "Length = 3 + 3 = 6 cm.",
          ],
          answer: "6 cm",
          yourTurn: {
            question:
              "Your turn: points A and B are 10 cm apart. Work out the length, in cm, of the part of the perpendicular bisector of AB that lies within 13 cm of A.",
            answer: { type: "number", value: 24, display: "24 cm" },
            solution:
              "AM = 5 cm. {{MX = sqrt(13^2 - 5^2) = sqrt(144) = 12}} cm on each side of AB, so the length is 2 × 12 = 24 cm.",
          },
        },
      ],
      keyPoints: [
        "Use only a ruler and compasses, and leave every construction arc visible.",
        "Equidistant from two points → perpendicular bisector.",
        "Equidistant from two lines → angle bisector.",
        "Fixed distance from a point → circle; from a segment → stadium shape.",
        "'Less than' means inside the boundary; 'closer to A' means A's side of the bisector.",
        "Shade only the region that obeys every condition, and convert to the scale first.",
      ],
      whyItWorks:
        "**Perpendicular bisector.** Each crossing point of the arcs is the same distance (the compass radius) from A and from B. Together with A and B, the two crossing points form a **rhombus** (four equal sides), and the diagonals of a rhombus bisect each other at right angles — so the line through the crossing points cuts AB in half at 90°.\n\n**Angle bisector.** The construction makes two triangles with three pairs of equal sides (two compass arcs and a shared line), so they are congruent (SSS) and the two angles at B are equal.",
      strategies: ["Draw a diagram", "Try one condition at a time", "Use symmetry", "Convert to the scale first"],
      thinkDeeper:
        "Construct the perpendicular bisectors of all three sides of a triangle: they meet at one point, the centre of a circle through all three vertices. Why must they meet at a single point? Where is that point for a right-angled triangle — and which circle theorem explains it?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Name the three parallel-line angle facts.", back: "Alternate angles are equal; corresponding angles are equal; co-interior angles add up to 180°." },
      { front: "Exterior angle of a triangle?", back: "Equal to the sum of the two interior opposite angles." },
      { front: "Sum of interior angles of an n-sided polygon?", back: "(n − 2) × 180°." },
      { front: "Each exterior angle of a regular n-gon?", back: "{{360/n}}°. Sum of exterior angles of any convex polygon = 360°." },
      { front: "Interior angle 160°. How many sides?", back: "Exterior 20°, so 360 ÷ 20 = 18 sides." },
      { front: "Which regular polygons tessellate on their own?", back: "Equilateral triangles, squares and regular hexagons (60°, 90°, 120° divide 360°)." },
      { front: "Angle at the centre theorem?", back: "The angle at the centre is twice the angle at the circumference, standing on the same arc." },
      { front: "Angle in a semicircle?", back: "90° — the angle subtended by a diameter at the circumference." },
      { front: "Angles in the same segment?", back: "Equal — angles standing on the same chord, on the same side of it (the 'bow-tie')." },
      { front: "Opposite angles of a cyclic quadrilateral?", back: "Add up to 180°." },
      { front: "Tangent and radius?", back: "A tangent is perpendicular to the radius at the point of contact." },
      { front: "Two tangents from an external point?", back: "Equal in length; with the radii they form a kite with two right angles." },
      { front: "Alternate segment theorem?", back: "The angle between a tangent and a chord equals the angle in the alternate segment." },
      { front: "Perpendicular from the centre to a chord?", back: "Bisects the chord. So {{r^2 = d^2 + (c/2)^2}}." },
      { front: "Intersecting chords inside a circle?", back: "AP × PB = CP × PD." },
      { front: "Tangent PT and secant PAB from an outside point P?", back: "{{PT^2}} = PA × PB (lengths measured from P)." },
      { front: "Locus of points equidistant from A and B?", back: "The perpendicular bisector of AB." },
      { front: "Locus of points equidistant from two lines?", back: "The bisector of the angle between them." },
    ],
    mustKnow: [
      "Can I use basic angle facts — straight line, around a point, vertically opposite, triangle, quadrilateral — with correct reasons?",
      "Can I use alternate, corresponding and co-interior angles on parallel lines, and set up equations from angle facts?",
      "Can I find the interior and exterior angles of regular polygons, and the number of sides from an angle (bronze/silver/gold)?",
      "Can I use the sum of interior angles (n − 2) × 180° and solve problems with polygons meeting at a point?",
      "Can I use the theorem that the angle at the centre is twice the angle at the circumference?",
      "Can I spot two radii and use the isosceles triangle they make?",
      "Can I use the facts that the angle in a semicircle is 90° and angles in the same segment are equal?",
      "Can I use the fact that opposite angles of a cyclic quadrilateral add up to 180°?",
      "Can I use tangent facts: tangent ⟂ radius and equal tangents from an external point?",
      "Can I use the alternate segment theorem?",
      "Can I solve multi-step circle-theorem problems, giving a reason for every step?",
      "Can I prove that the angle at the centre is twice the angle at the circumference?",
      "Can I use the perpendicular from the centre to a chord, and the intersecting chords theorem inside and outside the circle (including tangent–secant)?",
      "Can I construct perpendicular bisectors, angle bisectors and perpendiculars from a point using ruler and compasses?",
      "Can I draw and describe loci, and shade regions defined by distance and 'closer to' conditions?",
    ],
    misconceptions: [
      { wrong: "Alternate angles are equal, so any Z-shape gives equal angles.", right: "Only when the two lines are **parallel**. Without parallel lines there is no relationship." },
      { wrong: "Co-interior angles are equal.", right: "Co-interior angles **add up to 180°**. Alternate and corresponding angles are the equal ones." },
      { wrong: "The interior angle of a regular polygon is {{360/n}}°.", right: "{{360/n}}° is the **exterior** angle. The interior angle is 180° − {{360/n}}°." },
      { wrong: "The angle at the circumference is twice the angle at the centre.", right: "It's the other way round: the angle at the **centre** is the bigger one, twice the angle at the circumference." },
      { wrong: "Any quadrilateral drawn inside a circle has opposite angles adding to 180°.", right: "All **four vertices** must lie on the circle. A quadrilateral with a vertex at the centre (like OAPB) is not cyclic." },
      { wrong: "The alternate segment angle is the one right next to the tangent angle.", right: "It is in the **opposite** segment: follow the chord to its far end, then across to the third point of the triangle." },
      { wrong: "For lines from an outside point, PA × AB = PC × CD.", right: "Measure **from P** both times: PA × PB = PC × PD, where PB = PA + AB." },
      { wrong: "Rubbing out construction arcs makes the answer neater.", right: "The arcs are the evidence of the method. Without them you lose the construction marks." },
    ],
    examMistakes: [
      "Giving correct angles but no reasons (or 'Z angles', 'it's a circle theorem') when the question says 'Give reasons for each stage of your working'.",
      "Not spotting that two radii form an isosceles triangle, so the base angles are never found.",
      "Using the angle-at-the-centre theorem when the angles do not stand on the same arc, or halving when you should double.",
      "Calling a quadrilateral with a vertex at the centre 'cyclic' and adding opposite angles to 180°.",
      "In 'find the number of sides', dividing 360 by the interior angle instead of the exterior angle.",
      "Constructions done by measuring with a protractor or ruler, or with the arcs rubbed out — losing the method marks.",
    ],
    mnemonics: [
      {
        topic: "Parallel-line angles",
        device: "Z, F, C — Z and F are Friends (equal), C Completes 180°",
        explanation: "Alternate (Z) and corresponding (F) angles are equal; co-interior (C) angles add up to 180°. Use the letters to *spot* them, but write the proper names in the exam.",
      },
      {
        topic: "Regular polygons",
        device: "Out first: 360 over n, then 180 take away",
        explanation: "Find the exterior angle first ({{360/n}}°), then interior = 180° − exterior. To go backwards, n = 360 ÷ exterior.",
      },
      {
        topic: "Spotting circle theorems",
        device: "Arrowhead, bow-tie, semicircle, kite",
        explanation: "Arrowhead → angle at the centre is double. Bow-tie → same segment, angles equal. Diameter → 90°. Kite of radii and tangents → two right angles.",
      },
    ],
    realWorld: [
      {
        title: "Finding the centre of a broken plate",
        detail: "Archaeologists rebuild pottery from a single curved fragment: draw two chords on the arc, construct their perpendicular bisectors, and the crossing point is the centre — so the original diameter is known.",
        emoji: "🏺",
      },
      {
        title: "Ferris wheels and the Singapore Flyer",
        detail: "Every capsule on a big wheel is on one circle. Seen from a fixed capsule, two others always appear at the same angle wherever you are on the same arc — angles in the same segment.",
        emoji: "🎡",
      },
      {
        title: "Mobile phone mast coverage",
        detail: "A mast covers everything within a set radius — a locus. Planners overlay these circles with perpendicular bisectors (closer to which mast?) to decide which mast serves each part of a town.",
        emoji: "📡",
      },
      {
        title: "Tiles and honeycomb",
        detail: "Floor tiles and bee honeycomb use hexagons because 3 × 120° = 360°: regular hexagons fit around a point with no gaps and use the least wall for the space they enclose.",
        emoji: "🐝",
      },
    ],
    videos: [
      { title: "Circle theorems explained", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+circle+theorems" },
      { title: "Circle theorems — IGCSE exam questions", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+circle+theorems+igcse" },
      { title: "Interior and exterior angles of polygons", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+interior+exterior+angles+polygons" },
      { title: "Intersecting chords theorem", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=intersecting+chords+theorem+igcse" },
    ],
    formulas: [
      { name: "Angles on a straight line / around a point", formula: "180° / 360°", note: "Learn this — not given" },
      { name: "Interior angle sum of a polygon", formula: "(n − 2) × 180°", note: "Learn this — not given" },
      { name: "Exterior angle of a regular polygon", formula: "{{360/n}}°; interior angle = 180° − {{360/n}}°", note: "Learn this — not given" },
      { name: "Angle at the centre", formula: "angle at centre = 2 × angle at circumference", note: "Learn this — not given" },
      { name: "Angle in a semicircle", formula: "90°", note: "Learn this — not given" },
      { name: "Cyclic quadrilateral", formula: "opposite angles add up to 180°", note: "Learn this — not given" },
      { name: "Tangent and radius", formula: "tangent ⟂ radius at the point of contact", note: "Learn this — not given" },
      { name: "Alternate segment theorem", formula: "angle between tangent and chord = angle in the alternate segment", note: "Learn this — not given" },
      { name: "Chord distance from the centre", formula: "{{r^2 = d^2 + (c/2)^2}}", note: "Learn this — not given" },
      { name: "Intersecting chords (inside)", formula: "AP × PB = CP × PD", note: "Learn this — not given" },
      { name: "Intersecting chords (outside)", formula: "PA × PB = PC × PD", note: "Learn this — not given" },
      { name: "Tangent–secant", formula: "{{PT^2 = PA * PB}}", note: "Learn this — not given" },
      { name: "Sector area (for loci regions)", formula: "{{theta/360 * pi r^2}}", note: "Learn this — not given" },
    ],
  },
};
