import type { TopicPractice } from "../../types.ts";

// ---------------------------------------------------------------------------
// Diagrams (drawn to scale from the data in the questions)
// ---------------------------------------------------------------------------

// quiz-q10: square side 10 cm (20 px per cm), quarter circle centred at the bottom-left corner.
const SQUARE_QUARTER = `<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square of side 10 cm. A quarter circle of radius 10 cm is centred at the bottom-left corner. The region of the square outside the quarter circle, near the top-right corner, is shaded."><rect x="0" y="0" width="300" height="260" fill="#ffffff"/><rect x="40" y="20" width="200" height="200" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M 40 220 L 240 220 A 200 200 0 0 0 40 20 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><circle cx="40" cy="220" r="3" fill="#1f2937"/><text x="120" y="242" font-size="13" font-family="sans-serif" fill="#1f2937">10 cm</text><text x="246" y="124" font-size="13" font-family="sans-serif" fill="#1f2937">10 cm</text></svg>`;

// p1-q10: rectangle 20 cm by 12 cm (15 px per cm), semicircle of diameter 12 cm cut from the right-hand end.
const RECT_SEMI = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangle 20 cm long and 12 cm high. A semicircle whose diameter is the whole 12 cm right-hand side has been cut out. The remaining region is shaded."><rect x="0" y="0" width="400" height="260" fill="#ffffff"/><path d="M 40 40 L 340 40 A 90 90 0 0 0 340 220 L 40 220 Z" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><line x1="340" y1="40" x2="340" y2="220" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><text x="170" y="244" font-size="13" font-family="sans-serif" fill="#1f2937">20 cm</text><text x="346" y="134" font-size="13" font-family="sans-serif" fill="#1f2937">12 cm</text></svg>`;

// p1-q14: cone radius 10 cm, height 24 cm (10 px per cm), cut halfway up; frustum shaded.
const FRUSTUM = `<svg viewBox="0 0 400 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cone of base radius 10 cm and vertical height 24 cm. It is cut by a plane parallel to the base, 12 cm above the base. The lower part, a frustum, is shaded; the small cone on top is removed."><rect x="0" y="0" width="400" height="310" fill="#ffffff"/><path d="M 100 270 L 150 150 A 50 9 0 0 0 250 150 L 300 270 A 100 18 0 0 1 100 270 Z" fill="#c7d2fe" stroke="none"/><line x1="200" y1="30" x2="100" y2="270" stroke="#1f2937" stroke-width="2"/><line x1="200" y1="30" x2="300" y2="270" stroke="#1f2937" stroke-width="2"/><ellipse cx="200" cy="270" rx="100" ry="18" fill="none" stroke="#1f2937" stroke-width="2"/><ellipse cx="200" cy="150" rx="50" ry="9" fill="none" stroke="#1f2937" stroke-width="1.5"/><line x1="200" y1="30" x2="200" y2="270" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="200" y1="270" x2="300" y2="270" stroke="#b91c1c" stroke-width="1.5"/><text x="232" y="292" font-size="13" font-family="sans-serif" fill="#1f2937">10 cm</text><text x="206" y="214" font-size="13" font-family="sans-serif" fill="#1f2937">12 cm</text><text x="206" y="98" font-size="13" font-family="sans-serif" fill="#1f2937">12 cm</text><line x1="330" y1="150" x2="250" y2="150" stroke="#64748b" stroke-width="1" stroke-dasharray="3 3"/><text x="300" y="144" font-size="12" font-family="sans-serif" fill="#1f2937">cut</text></svg>`;

// p2-q02: L-shape, 25 px per cm. Outer 10 by 8 with a 4 by 3 notch removed from the top-right.
const L_SHAPE = `<svg viewBox="0 0 340 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An L-shaped floor plan. The bottom edge is 10 cm, the left edge is 8 cm, the top edge is 6 cm and the lower right edge is 5 cm. All corners are right angles."><rect x="0" y="0" width="340" height="270" fill="#ffffff"/><polygon points="40,30 190,30 190,105 290,105 290,230 40,230" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><text x="148" y="252" font-size="13" font-family="sans-serif" fill="#1f2937">10 cm</text><text x="2" y="134" font-size="13" font-family="sans-serif" fill="#1f2937">8 cm</text><text x="98" y="22" font-size="13" font-family="sans-serif" fill="#1f2937">6 cm</text><text x="296" y="172" font-size="13" font-family="sans-serif" fill="#1f2937">5 cm</text><polyline points="40,42 52,42 52,30" fill="none" stroke="#334155" stroke-width="1"/><polyline points="278,230 278,218 290,218" fill="none" stroke="#334155" stroke-width="1"/></svg>`;

// p2-q07: circle of radius r inscribed in a square of side 2r.
const CIRCLE_IN_SQUARE = `<svg viewBox="0 0 260 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle of radius r drawn inside a square so that it touches all four sides. The square has side 2r."><rect x="0" y="0" width="260" height="240" fill="#ffffff"/><rect x="30" y="20" width="200" height="200" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><circle cx="130" cy="120" r="100" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><circle cx="130" cy="120" r="3" fill="#1f2937"/><line x1="130" y1="120" x2="230" y2="120" stroke="#b91c1c" stroke-width="1.5"/><text x="172" y="114" font-size="14" font-family="sans-serif" fill="#1f2937">r</text><text x="120" y="236" font-size="13" font-family="sans-serif" fill="#1f2937">2r</text></svg>`;

// p2-q15: toy = hemisphere radius 3 cm on a cone of height 7 cm (20 px per cm).
const TOY = `<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A solid toy made from a hemisphere of radius 3 cm sitting on top of a cone of radius 3 cm. The total height of the toy is 10 cm."><rect x="0" y="0" width="320" height="300" fill="#ffffff"/><path d="M 140 140 A 60 60 0 0 1 260 140 L 200 280 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><ellipse cx="200" cy="140" rx="60" ry="10" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="200" y1="140" x2="260" y2="140" stroke="#b91c1c" stroke-width="1.5"/><text x="214" y="134" font-size="13" font-family="sans-serif" fill="#1f2937">3 cm</text><line x1="290" y1="80" x2="290" y2="280" stroke="#334155" stroke-width="1"/><line x1="284" y1="80" x2="296" y2="80" stroke="#334155" stroke-width="1"/><line x1="284" y1="280" x2="296" y2="280" stroke="#334155" stroke-width="1"/><text x="248" y="214" font-size="13" font-family="sans-serif" fill="#1f2937">10 cm</text></svg>`;

// ch-q01: arbelos. AB = 16 (20 px per unit), C on AB with AC = 6, CB = 10.
const ARBELOS = `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three semicircles on the line AB. The large semicircle has diameter AB. C lies on AB with AC = 6 cm and CB = 10 cm, and the two smaller semicircles have diameters AC and CB. The region inside the large semicircle but outside both small ones is shaded."><rect x="0" y="0" width="400" height="240" fill="#ffffff"/><path d="M 40 200 A 160 160 0 0 1 360 200 A 100 100 0 0 0 160 200 A 60 60 0 0 0 40 200 Z" fill="#fecaca" stroke="none"/><path d="M 40 200 A 160 160 0 0 1 360 200" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M 40 200 A 60 60 0 0 1 160 200" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M 160 200 A 100 100 0 0 1 360 200" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="200" x2="360" y2="200" stroke="#1f2937" stroke-width="2"/><text x="30" y="220" font-size="14" font-family="sans-serif" fill="#1f2937">A</text><text x="155" y="220" font-size="14" font-family="sans-serif" fill="#1f2937">C</text><text x="358" y="220" font-size="14" font-family="sans-serif" fill="#1f2937">B</text><text x="84" y="234" font-size="12" font-family="sans-serif" fill="#1f2937">6 cm</text><text x="244" y="234" font-size="12" font-family="sans-serif" fill="#1f2937">10 cm</text></svg>`;

// ch-q03: square ABCD side 10 (20 px per cm), quarter circles centred at A and C; the lens is shaded.
const LENS = `<svg viewBox="0 0 320 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Square ABCD of side 10 cm with A at the bottom left, B bottom right, C top right and D top left. A quarter circle centred at A and a quarter circle centred at C, each of radius 10 cm, both pass through B and D. The lens-shaped overlap between them is shaded."><rect x="0" y="0" width="320" height="250" fill="#ffffff"/><rect x="60" y="20" width="200" height="200" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><path d="M 260 220 A 200 200 0 0 0 60 20 A 200 200 0 0 0 260 220 Z" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><text x="44" y="236" font-size="14" font-family="sans-serif" fill="#1f2937">A</text><text x="264" y="236" font-size="14" font-family="sans-serif" fill="#1f2937">B</text><text x="264" y="18" font-size="14" font-family="sans-serif" fill="#1f2937">C</text><text x="44" y="18" font-size="14" font-family="sans-serif" fill="#1f2937">D</text><text x="142" y="242" font-size="13" font-family="sans-serif" fill="#1f2937">10 cm</text></svg>`;

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "mensuration-quiz-q01",
      question:
        "A semicircle has diameter 12 cm. Work out its perimeter. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 30.8, display: "30.8 cm" },
      solution: [
        "Curved part = half the circumference = {{1/2 * pi * 12 = 6 pi = 18.849...}} cm.",
        "Add the straight edge (the diameter): {{18.849... + 12 = 30.849...}} cm.",
        "Perimeter = 30.8 cm (3 s.f.).",
      ],
      commonError: "Giving only the curved part (18.8 cm) and forgetting the straight diameter.",
      traps: [
        { spec: { type: "number", value: 18.8 }, feedback: "That's just the curved arc. A perimeter goes all the way round — add the 12 cm diameter." },
        { spec: { type: "number", value: 49.7 }, feedback: "You used the full circumference. A semicircle only has half of it." },
      ],
      difficulty: "warmup",
      guideRef: "circles-arcs-sectors",
      hints: ["Trace round the edge with your finger: a curved bit and a straight bit.", "Curved bit = half of {{pi d}}."],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "mensuration-quiz-q02",
      question: "A trapezium has parallel sides 7 cm and 13 cm. The perpendicular distance between them is 6 cm. Work out the area of the trapezium in cm².",
      answer: { type: "number", value: 60, display: "60 cm²" },
      solution: ["{{A = 1/2 (a + b) h}}", "{{A = 1/2 (7 + 13) * 6 = 1/2 * 20 * 6 = 60}} cm²."],
      commonError: "Forgetting the half and getting 120 cm².",
      traps: [{ spec: { type: "number", value: 120 }, feedback: "Two copies of a trapezium make a parallelogram — you've found that. Halve it." }],
      difficulty: "warmup",
      guideRef: "areas-2d",
      hints: ["Average the parallel sides, then multiply by the height."],
      strategy: "Use a formula",
    },
    {
      kind: "mcq",
      id: "mensuration-quiz-q03",
      question: "A cylinder has radius 5 cm and height 8 cm. What is its volume, in cm³?",
      options: ["200π", "80π", "800π", "40π"],
      answerIndex: 0,
      explanation:
        "{{V = pi r^2 h = pi * 25 * 8 = 200 pi}} cm³. 80π is {{2 pi r h}} — the curved surface **area**, not the volume. 800π comes from using the diameter 10 as the radius.",
      difficulty: "warmup",
      guideRef: "prisms-cylinders",
      hints: ["Volume of any prism = area of cross-section × length.", "The cross-section is a circle: {{pi r^2}}."],
      strategy: "Use a formula",
    },
    {
      kind: "short",
      id: "mensuration-quiz-q04",
      question:
        "A sector of a circle has radius 9 cm and angle 140°. Work out the arc length of the sector. Give your answer in terms of π.",
      answer: { type: "expression", expr: "7pi", display: "7π cm" },
      solution: [
        "Arc length = {{θ/360 * 2 pi r}}.",
        "{{140/360 * 2 pi * 9 = 7/18 * 18 pi = 7 pi}} cm.",
      ],
      commonError: "Using {{pi r^2}} instead of {{2 pi r}} — that gives the sector area, 31.5π cm².",
      traps: [{ spec: { type: "expression", expr: "31.5pi" }, feedback: "That's the sector's **area**. Arc length is a fraction of the circumference, {{2 pi r}}." }],
      difficulty: "core",
      guideRef: "circles-arcs-sectors",
      hints: ["What fraction of a full turn is 140°?", "{{140/360 = 7/18}}. Take that fraction of the whole circumference.", "Circumference = {{2 pi * 9 = 18 pi}}."],
      strategy: "Fraction of the whole",
    },
    {
      kind: "short",
      id: "mensuration-quiz-q05",
      question: "A sphere has radius 6 cm. Work out its volume. Give your answer in terms of π.",
      answer: { type: "expression", expr: "288pi", display: "288π cm³" },
      solution: ["{{V = 4/3 pi r^3}}", "{{V = 4/3 * pi * 216 = 288 pi}} cm³."],
      commonError: "Using {{4 pi r^2 = 144 pi}} — the surface area formula.",
      traps: [
        { spec: { type: "expression", expr: "144pi" }, feedback: "{{4 pi r^2}} is the surface **area**. Volume has {{r^3}}: {{4/3 pi r^3}}." },
        { spec: { type: "expression", expr: "864pi" }, feedback: "You forgot to divide by 3. Volume = {{4/3 pi r^3}}." },
      ],
      difficulty: "core",
      guideRef: "cones-spheres-pyramids",
      hints: ["Volumes are cubic — look for {{r^3}}.", "{{6^3 = 216}}; now multiply by {{4/3}}."],
      strategy: "Check the dimensions",
    },
    {
      kind: "mcq",
      id: "mensuration-quiz-q06",
      question: "A solid cone has base radius 5 cm and vertical height 12 cm. What is its **total** surface area, in cm²?",
      options: ["65π", "85π", "90π", "100π"],
      answerIndex: 2,
      explanation:
        "Slant height {{l = sqrt(5^2 + 12^2) = 13}}. Curved area {{pi r l = 65 pi}}, base {{pi r^2 = 25 pi}}, total 90π. 65π forgets the circular base; 85π uses the vertical height 12 instead of the slant height; 100π is the cone's **volume** {{1/3 pi r^2 h}}.",
      difficulty: "core",
      guideRef: "cones-spheres-pyramids",
      hints: ["The curved-area formula {{pi r l}} needs the **slant** height.", "Use Pythagoras on radius and height to get l.", "Total = curved + base circle."],
      strategy: "Find the right right-angled triangle",
    },
    {
      kind: "short",
      id: "mensuration-quiz-q07",
      question:
        "A triangular prism is 15 cm long. Its cross-section is a right-angled triangle with shorter sides 6 cm and 8 cm. Work out the total surface area of the prism in cm².",
      answer: { type: "number", value: 408, display: "408 cm²" },
      solution: [
        "Hypotenuse of the triangle: {{sqrt(6^2 + 8^2) = 10}} cm.",
        "Two triangular ends: {{2 * 1/2 * 6 * 8 = 48}} cm².",
        "Three rectangles: {{6 * 15 + 8 * 15 + 10 * 15 = 90 + 120 + 150 = 360}} cm².",
        "Total = 48 + 360 = 408 cm².",
      ],
      commonError: "Counting only the three rectangles (360 cm²) or forgetting to find the third side.",
      traps: [
        { spec: { type: "number", value: 360 }, feedback: "You have the three rectangles — but the prism also has two triangular ends." },
        { spec: { type: "number", value: 456 }, feedback: "Each triangular end is half of 6 × 8, not the whole rectangle." },
      ],
      difficulty: "core",
      guideRef: "prisms-cylinders",
      hints: ["Sketch the net: how many faces, and what shape is each?", "Two triangles and three rectangles. One rectangle needs the triangle's third side.", "Pythagoras: the hypotenuse is 10 cm."],
      strategy: "Draw the net",
    },
    {
      kind: "short",
      id: "mensuration-quiz-q08",
      question:
        "A cylindrical water tank has radius 10 cm and height 30 cm. How many litres of water does it hold when full? Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 9.42, display: "9.42 litres" },
      solution: [
        "{{V = pi r^2 h = pi * 100 * 30 = 3000 pi = 9424.7...}} cm³.",
        "1 litre = 1000 cm³, so divide by 1000.",
        "9.42 litres (3 s.f.).",
      ],
      commonError: "Leaving the answer in cm³ (9420) — the question asks for litres.",
      traps: [
        { spec: { type: "number", value: 9420, tolerance: 5 }, feedback: "That's the volume in cm³. There are 1000 cm³ in a litre." },
        { spec: { type: "number", value: 94.2 }, feedback: "1 litre is 1000 cm³, not 100 cm³." },
      ],
      difficulty: "core",
      guideRef: "prisms-cylinders",
      hints: ["Find the volume in cm³ first.", "How many cm³ make one litre?"],
      strategy: "Convert at the end",
    },
    {
      kind: "mcq",
      id: "mensuration-quiz-q09",
      question:
        "A solid metal sphere of radius 6 cm is melted down and recast, with no waste, into a solid cylinder of radius 4 cm. What is the height of the cylinder?",
      options: ["54 cm", "4.5 cm", "9 cm", "18 cm"],
      answerIndex: 3,
      explanation:
        "The volume stays the same: {{4/3 pi * 6^3 = 288 pi}}, and {{pi * 4^2 * h = 16 pi h}}, so {{h = 288/16 = 18}} cm. 54 cm forgets the {{1/3}} in the sphere formula; 4.5 cm uses the diameter 8 as the radius; 9 cm uses the sphere's surface area (144π) instead of its volume.",
      difficulty: "core",
      guideRef: "frustums-composite",
      hints: ["What stays the same when metal is melted and recast?", "Set sphere volume = cylinder volume.", "{{288 pi = 16 pi h}}"],
      strategy: "Look for an invariant",
    },
    {
      kind: "short",
      id: "mensuration-quiz-q10",
      question:
        "The diagram shows a square of side 10 cm. A quarter circle of radius 10 cm is drawn with its centre at one corner. Work out the area of the shaded region. Give your answer correct to 3 significant figures.",
      diagram: SQUARE_QUARTER,
      answer: { type: "number", value: 21.5, display: "21.5 cm²" },
      solution: [
        "Square: {{10^2 = 100}} cm².",
        "Quarter circle: {{1/4 * pi * 10^2 = 25 pi = 78.539...}} cm².",
        "Shaded = {{100 - 25 pi = 21.460...}} = 21.5 cm².",
      ],
      commonError: "Giving the quarter circle's area (78.5 cm²) instead of what is left over.",
      traps: [{ spec: { type: "number", value: 78.5 }, feedback: "That's the white quarter circle. The shaded part is what's left of the square." }],
      difficulty: "core",
      guideRef: "areas-2d",
      hints: ["Shaded = big shape − the part you don't want.", "Square area minus the quarter-circle area."],
      strategy: "Subtract the unwanted part",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS
  // =========================================================================
  papers: [
    {
      id: "mensuration-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "mensuration-p1-q01",
          question: "A circular hawker-centre table top has radius 7.5 cm … no — radius 75 cm is too big for this question. A circular coaster has radius 7.5 cm. Work out its area. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 177, display: "177 cm²" },
          solution: ["{{A = pi r^2 = pi * 7.5^2 = pi * 56.25 = 176.71...}} cm².", "A = 177 cm² (3 s.f.)."],
          commonError: "Using {{2 pi r}} (47.1) — that is the circumference.",
          traps: [{ spec: { type: "number", value: 47.1 }, feedback: "That's the circumference, {{2 pi r}}. Area is {{pi r^2}}." }],
          difficulty: "warmup",
          guideRef: "circles-arcs-sectors",
          hints: ["Area of a circle: {{pi r^2}}. Square the radius first."],
          strategy: "Use a formula",
        },
        {
          kind: "short",
          id: "mensuration-p1-q02",
          question:
            "A parallelogram has base 12 cm and perpendicular height 7.5 cm. Its sloping sides are 9 cm long. Work out the area of the parallelogram in cm².",
          answer: { type: "number", value: 90, display: "90 cm²" },
          solution: ["Area = base × **perpendicular** height.", "{{12 * 7.5 = 90}} cm². The 9 cm sloping side is not needed."],
          commonError: "Multiplying by the sloping side: 12 × 9 = 108.",
          traps: [{ spec: { type: "number", value: 108 }, feedback: "The 9 cm side slopes. Use the perpendicular height, 7.5 cm." }],
          difficulty: "warmup",
          guideRef: "areas-2d",
          hints: ["Cut a triangle off one end and slide it to the other: what shape do you get?", "Base × perpendicular height."],
          strategy: "Rearrange the shape",
        },
        {
          kind: "short",
          id: "mensuration-p1-q03",
          question: "A cuboid measures 5 cm by 4 cm by 3 cm. Work out its total surface area in cm².",
          answer: { type: "number", value: 94, display: "94 cm²" },
          solution: ["Three different faces: 5 × 4 = 20, 5 × 3 = 15, 4 × 3 = 12.", "Each appears twice: {{2(20 + 15 + 12) = 2 * 47 = 94}} cm²."],
          commonError: "Adding the three faces once (47) or giving the volume (60).",
          traps: [
            { spec: { type: "number", value: 60 }, feedback: "60 cm³ is the volume. Surface area adds up the areas of all six faces." },
            { spec: { type: "number", value: 47 }, feedback: "A cuboid has six faces, in three matching pairs. Double it." },
          ],
          difficulty: "warmup",
          guideRef: "prisms-cylinders",
          hints: ["How many faces does a cuboid have?", "Six faces in three identical pairs."],
          strategy: "Use symmetry",
        },
        {
          kind: "short",
          id: "mensuration-p1-q04",
          question:
            "A planter is a prism 20 cm long. Its cross-section is a trapezium with parallel sides 5 cm and 9 cm, and height 4 cm. Work out the volume of the planter in cm³.",
          answer: { type: "number", value: 560, display: "560 cm³" },
          solution: ["Cross-section: {{1/2 (5 + 9) * 4 = 28}} cm².", "Volume = cross-section × length = {{28 * 20 = 560}} cm³."],
          commonError: "Forgetting the half in the trapezium formula (1120 cm³).",
          traps: [{ spec: { type: "number", value: 1120 }, feedback: "Check the trapezium area: it's half of (a + b) × h." }],
          difficulty: "warmup",
          guideRef: "prisms-cylinders",
          hints: ["Find the area of the end face first.", "Then multiply by the length."],
          strategy: "Cross-section × length",
        },
        {
          kind: "short",
          id: "mensuration-p1-q05",
          question:
            "A sector of a circle has radius 12 cm and angle 75°. Work out the perimeter of the sector. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 39.7, display: "39.7 cm" },
          solution: [
            "Arc = {{75/360 * 2 pi * 12 = 5 pi = 15.707...}} cm.",
            "Perimeter = arc + two radii = {{15.707... + 24 = 39.707...}} cm.",
            "39.7 cm (3 s.f.).",
          ],
          commonError: "Stopping at the arc length (15.7 cm) and forgetting the two straight radii.",
          traps: [
            { spec: { type: "number", value: 15.7 }, feedback: "That's only the curved edge. A sector also has two straight edges — both radii." },
            { spec: { type: "number", value: 27.7 }, feedback: "A sector has **two** radii as straight edges, not one." },
          ],
          difficulty: "core",
          guideRef: "circles-arcs-sectors",
          hints: ["Sketch the sector. How many edges does it have?", "One arc plus two radii.", "Arc = {{75/360}} of {{24 pi}}."],
          strategy: "Draw a diagram",
        },
        {
          kind: "written",
          id: "mensuration-p1-q06",
          question:
            "Wei Ling is finding the perimeter of a quarter circle (a sector with angle 90°) of radius 8 cm. She writes:\n\n    Area = {{1/4 * pi * 8^2 = 16 pi}}\n    Arc = {{1/4 * 2 pi * 8 = 4 pi}}\n    Perimeter = {{4 pi}} cm\n\nExplain what is wrong, and find the correct perimeter in terms of π.",
          marks: 3,
          modelAnswer:
            "Her arc length {{4 pi}} is correct, and the area is not needed at all. But the perimeter of a sector is the arc **plus the two straight radii**, and she has left out the two 8 cm edges. Correct perimeter = {{4 pi + 8 + 8 = 4 pi + 16}} cm (about 28.6 cm).",
          markScheme: [
            { point: "Identifies that the two radii (straight edges) are missing", keywords: ["radii", "radius", "straight", "two edges", "8 cm", "sides"] },
            { point: "States the arc length 4π is correct / area is irrelevant", keywords: ["4π", "4pi", "arc is correct", "area not needed", "irrelevant"] },
            { point: "Correct perimeter 4π + 16 cm", keywords: ["4π + 16", "4pi + 16", "16 + 4π", "28.6"] },
          ],
          commonError: "Adding only one radius, or adding the area to the arc.",
          difficulty: "core",
          guideRef: "circles-arcs-sectors",
          hints: ["Trace the edge of a quarter circle. What do you pass along?", "A sector has one curved edge and two straight ones."],
          strategy: "Spot the error",
        },
        {
          kind: "short",
          id: "mensuration-p1-q07",
          question: "A cone has base radius 4 cm and vertical height 9 cm. Work out its volume. Give your answer in terms of π.",
          answer: { type: "expression", expr: "48pi", display: "48π cm³" },
          solution: ["{{V = 1/3 pi r^2 h}}", "{{V = 1/3 * pi * 16 * 9 = 48 pi}} cm³."],
          commonError: "Forgetting the {{1/3}} and giving 144π.",
          traps: [{ spec: { type: "expression", expr: "144pi" }, feedback: "That's the cylinder with the same base and height. A cone is exactly a third of it." }],
          difficulty: "core",
          guideRef: "cones-spheres-pyramids",
          hints: ["A cone is a 'pointed' prism — what fraction of the matching cylinder?", "{{1/3 * pi r^2 h}}"],
          strategy: "Use a formula",
        },
        {
          kind: "short",
          id: "mensuration-p1-q08",
          question:
            "A solid hemisphere has radius 5 cm. Work out its **total** surface area. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 236, display: "236 cm²" },
          solution: [
            "Curved part = half of a sphere's {{4 pi r^2}} = {{2 pi r^2 = 50 pi}}.",
            "Flat circular face = {{pi r^2 = 25 pi}}.",
            "Total = {{75 pi = 235.6...}} = 236 cm² (3 s.f.).",
          ],
          commonError: "Forgetting the flat circular face and giving 157 cm².",
          traps: [
            { spec: { type: "number", value: 157 }, feedback: "That's only the curved dome. A solid hemisphere also has a flat circular base." },
            { spec: { type: "number", value: 393 }, feedback: "You used the whole sphere's surface. A hemisphere has half of it, plus a flat circle." },
          ],
          difficulty: "core",
          guideRef: "cones-spheres-pyramids",
          hints: ["Picture half an orange. Which surfaces can you touch?", "Curved = half of {{4 pi r^2}}; flat = {{pi r^2}}."],
          strategy: "List every face",
        },
        {
          kind: "written",
          id: "mensuration-p1-q09",
          question:
            "Marcus has a fish tank in the shape of a cuboid, 60 cm long, 40 cm wide and 50 cm high. He fills it to 80% of its height with water.\n\nShow that the tank contains 96 litres of water.",
          marks: 3,
          modelAnswer:
            "Full volume = 60 × 40 × 50 = 120 000 cm³. Since 1 litre = 1000 cm³, that is 120 000 ÷ 1000 = 120 litres. 80% of 120 = 0.8 × 120 = 96 litres. (Or: water depth = 0.8 × 50 = 40 cm, volume = 60 × 40 × 40 = 96 000 cm³ = 96 litres.)",
          markScheme: [
            { point: "Volume of tank (or of water) in cm³: 120 000 or 96 000", keywords: ["120000", "120 000", "96000", "96 000", "60 × 40 × 50", "60 × 40 × 40"] },
            { point: "Converts cm³ to litres by dividing by 1000", keywords: ["1000", "÷ 1000", "120 litres", "1 litre"] },
            { point: "Uses 80% correctly to reach 96 litres", keywords: ["0.8", "80%", "40 cm", "96"] },
          ],
          commonError: "Dividing by 100 to convert cm³ to litres.",
          difficulty: "core",
          guideRef: "prisms-cylinders",
          hints: ["Find a volume in cm³ first.", "1 litre = 1000 cm³.", "80% of the height means 80% of the volume — why?"],
          strategy: "Convert at the end",
        },
        {
          kind: "short",
          id: "mensuration-p1-q10",
          question:
            "The diagram shows a metal plate. It is a rectangle 20 cm by 12 cm with a semicircle of diameter 12 cm cut out of one end. Work out the area of the plate. Give your answer correct to 3 significant figures.",
          diagram: RECT_SEMI,
          answer: { type: "number", value: 183, display: "183 cm²" },
          solution: [
            "Rectangle: {{20 * 12 = 240}} cm².",
            "Semicircle: radius 6, area {{1/2 * pi * 6^2 = 18 pi = 56.548...}} cm².",
            "Plate = {{240 - 18 pi = 183.45...}} = 183 cm².",
          ],
          commonError: "Using 12 as the radius of the semicircle instead of the diameter.",
          traps: [
            { spec: { type: "number", value: 127 }, feedback: "You used a whole circle of radius 6. Only a semicircle is cut out." },
            { spec: { type: "number", value: 14.0, tolerance: 0.1 }, feedback: "12 cm is the diameter, so the radius is 6 cm." },
          ],
          difficulty: "core",
          guideRef: "areas-2d",
          hints: ["Whole shape minus the hole.", "Is 12 cm the radius or the diameter of the semicircle?", "Semicircle area = {{1/2 pi r^2}} with r = 6."],
          strategy: "Subtract the unwanted part",
        },
        {
          kind: "short",
          id: "mensuration-p1-q11",
          question:
            "A solid pyramid has a square base of side 8 cm. Its vertex is 6 cm vertically above the centre of the base. Work out the total surface area of the pyramid. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 179, display: "179 cm²" },
          solution: [
            "The height of each triangular face (from the midpoint of a base edge to the vertex) is the hypotenuse of a right-angled triangle with legs 6 cm (vertical) and 4 cm (centre to edge).",
            "{{s = sqrt(6^2 + 4^2) = sqrt(52) = 7.211...}} cm.",
            "Each triangle: {{1/2 * 8 * 7.211... = 28.84...}} cm²; four of them: 115.37… cm².",
            "Add the base: {{115.37... + 64 = 179.37...}} = 179 cm².",
          ],
          commonError: "Using the vertical height 6 cm as the height of each triangular face (giving 160 cm²).",
          traps: [
            { spec: { type: "number", value: 160 }, feedback: "6 cm is the vertical height of the pyramid, not the slanted height of each face. Use Pythagoras." },
            { spec: { type: "number", value: 128 }, feedback: "128 cm³ is the volume. The question asks for surface area." },
            { spec: { type: "number", value: 115, tolerance: 0.5 }, feedback: "You've got the four triangles — add the square base too." },
          ],
          difficulty: "core",
          guideRef: "cones-spheres-pyramids",
          hints: ["Which faces make up the surface?", "Each triangular face needs its own (slanted) height.", "Right-angled triangle: vertical height 6, half the base 4."],
          strategy: "Find the right right-angled triangle",
        },
        {
          kind: "short",
          id: "mensuration-p1-q12",
          question:
            "A cylindrical jar of radius 8 cm contains some water. A solid metal ball of radius 3 cm is dropped in and is completely covered by the water. By how many centimetres does the water level rise? Give your answer as an exact decimal.",
          answer: { type: "number", value: 0.5625, display: "0.5625 cm" },
          solution: [
            "The water rises by the ball's volume: {{4/3 pi * 3^3 = 36 pi}} cm³.",
            "That extra volume is a thin cylinder of radius 8 and height x: {{pi * 8^2 * x = 64 pi x}}.",
            "{{64 pi x = 36 pi}} so {{x = 36/64 = 0.5625}} cm.",
          ],
          commonError: "Dividing by the diameter squared or by the jar's circumference instead of its cross-sectional area.",
          traps: [{ spec: { type: "number", value: 2.25 }, feedback: "Divide the ball's volume by the jar's cross-sectional area {{pi * 8^2}}, not {{pi * 4^2}}." }],
          difficulty: "core",
          guideRef: "frustums-composite",
          hints: ["The ball pushes up a 'slice' of water. What shape is that slice?", "Volume of the slice = volume of the ball.", "{{64 pi x = 36 pi}} — the π cancels."],
          strategy: "Look for an invariant",
        },
        {
          kind: "written",
          id: "mensuration-p1-q13",
          question:
            "A closed cylinder has radius r cm and height h cm, where r > 2. The number of cm³ in its volume equals the number of cm² in its total surface area.\n\nShow that {{h = (2r)/(r - 2)}}.",
          marks: 3,
          modelAnswer:
            "Volume = {{pi r^2 h}}; total surface area = {{2 pi r^2 + 2 pi r h}}. Setting them equal: {{pi r^2 h = 2 pi r^2 + 2 pi r h}}. Divide by {{pi r}} (r ≠ 0): {{r h = 2r + 2h}}. Collect h terms: {{r h - 2h = 2r}}, so {{h(r - 2) = 2r}} and {{h = (2r)/(r - 2)}}.",
          markScheme: [
            { point: "Correct equation πr²h = 2πr² + 2πrh", keywords: ["πr²h", "2πr²", "2πrh", "pi r^2 h", "2pi r^2 + 2pi r h"] },
            { point: "Divides by πr to get rh = 2r + 2h", keywords: ["rh = 2r + 2h", "divide by πr", "divide by pi r", "rh"] },
            { point: "Factorises h(r − 2) = 2r and rearranges to h = 2r/(r − 2)", keywords: ["h(r - 2)", "h(r − 2)", "factorise", "2r/(r-2)", "2r/(r − 2)"] },
          ],
          commonError: "Forgetting one of the two circular ends in the surface area.",
          difficulty: "challenge",
          guideRef: "prisms-cylinders",
          hints: ["Write the volume and the total surface area as expressions in r and h.", "A closed cylinder has two circles and one curved rectangle.", "After dividing by πr, collect every h on one side and factorise."],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "mensuration-p1-q14",
          question:
            "A cone has base radius 10 cm and vertical height 24 cm. It is cut parallel to its base, halfway up, and the small cone on top is removed. Work out the volume of the frustum that remains. Give your answer in terms of π.",
          diagram: FRUSTUM,
          answer: { type: "expression", expr: "700pi", display: "700π cm³" },
          solution: [
            "Large cone: {{1/3 pi * 10^2 * 24 = 800 pi}} cm³.",
            "The small cone is similar with half the height, so radius 5 and height 12: {{1/3 pi * 5^2 * 12 = 100 pi}} cm³.",
            "Frustum = {{800 pi - 100 pi = 700 pi}} cm³.",
          ],
          solutions: [
            {
              label: "Volume scale factor",
              steps: [
                "The small cone is an enlargement of the big one with length scale factor {{1/2}}.",
                "Volume scale factor {{(1/2)^3 = 1/8}}, so the small cone is {{1/8}} of 800π = 100π.",
                "Frustum = {{7/8}} of 800π = 700π cm³. Quicker once you trust similarity.",
              ],
            },
          ],
          commonError: "Thinking the frustum is half the cone because it is half the height (400π).",
          traps: [
            { spec: { type: "expression", expr: "400pi" }, feedback: "Half the height is not half the volume — most of a cone's volume is near its base." },
            { spec: { type: "expression", expr: "800pi" }, feedback: "That's the whole cone. Subtract the small cone that was removed." },
          ],
          difficulty: "challenge",
          guideRef: "frustums-composite",
          hints: ["A frustum is a big cone minus a small cone.", "The small cone is similar: half the height, so what radius?", "Small cone: radius 5, height 12."],
          strategy: "Complete the shape",
        },
        {
          kind: "short",
          id: "mensuration-p1-q15",
          question:
            "A solid cone has volume 300 cm³. Its vertical height is twice its base radius. Work out the total surface area of the cone. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 278, display: "278 cm²" },
          solution: [
            "Let the radius be r, so h = 2r. {{V = 1/3 pi r^2 (2r) = 2/3 pi r^3 = 300}}.",
            "{{r^3 = 450/pi = 143.23...}}, so {{r = 5.2322...}} cm.",
            "Slant height {{l = sqrt(r^2 + (2r)^2) = r sqrt(5) = 11.699...}} cm.",
            "Total area = {{pi r l + pi r^2 = pi r (l + r) = pi * 5.2322... * 16.932... = 278.3...}} = 278 cm².",
          ],
          commonError: "Rounding r early (e.g. to 5.2) — the final answer then drifts to 275.",
          traps: [
            { spec: { type: "number", value: 192 }, feedback: "That's only the curved surface. A solid cone also has its circular base." },
            { spec: { type: "number", value: 254, tolerance: 1 }, feedback: "Check the curved area uses the slant height {{l = r sqrt(5)}}, not the vertical height 2r." },
          ],
          difficulty: "challenge",
          guideRef: "frustums-composite",
          hints: ["Introduce r for the radius. Write the height in terms of r.", "Solve {{2/3 pi r^3 = 300}} — keep r in your calculator memory.", "Slant height from Pythagoras: {{l = sqrt(r^2 + 4r^2)}}."],
          strategy: "Work backwards",
        },
      ],
    },
    {
      id: "mensuration-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "mensuration-p2-q01",
          question: "A circular running track has diameter 18 m. Work out its circumference. Give your answer in terms of π.",
          answer: { type: "expression", expr: "18pi", display: "18π m" },
          solution: ["{{C = pi d = pi * 18 = 18 pi}} m."],
          commonError: "Using 18 as the radius and getting 36π.",
          traps: [
            { spec: { type: "expression", expr: "36pi" }, feedback: "18 m is the diameter. Use {{C = pi d}}, or halve it to get r = 9." },
            { spec: { type: "expression", expr: "81pi" }, feedback: "That's the area {{pi r^2}}. Circumference is the distance round: {{pi d}}." },
          ],
          difficulty: "warmup",
          guideRef: "circles-arcs-sectors",
          hints: ["Is 18 m the radius or the diameter?", "{{C = pi d}}."],
          strategy: "Use a formula",
        },
        {
          kind: "short",
          id: "mensuration-p2-q02",
          question: "The diagram shows the plan of an L-shaped room. All corners are right angles. Work out the area of the room in cm².",
          diagram: L_SHAPE,
          answer: { type: "number", value: 68, display: "68 cm²" },
          solution: [
            "The missing corner is {{10 - 6 = 4}} cm wide and {{8 - 5 = 3}} cm tall.",
            "Area = big rectangle − missing corner = {{10 * 8 - 4 * 3 = 80 - 12 = 68}} cm².",
          ],
          solutions: [
            { label: "Split into two rectangles", steps: ["Left part: 6 × 8 = 48 cm².", "Right part: 4 × 5 = 20 cm².", "Total 48 + 20 = 68 cm²."] },
          ],
          commonError: "Multiplying the two outer sides only (80 cm²) and ignoring the missing corner.",
          traps: [{ spec: { type: "number", value: 80 }, feedback: "That's the full 10 × 8 rectangle — a corner is missing." }],
          difficulty: "warmup",
          guideRef: "areas-2d",
          hints: ["Split into rectangles, or take a corner away from a big rectangle.", "The missing corner is 4 cm by 3 cm."],
          strategy: "Split into cases",
        },
        {
          kind: "short",
          id: "mensuration-p2-q03",
          question:
            "The label on a tin of soup wraps exactly once round the curved surface of the tin. The tin is a cylinder of radius 4 cm and height 10 cm. Work out the area of the label. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 251, display: "251 cm²" },
          solution: ["Unrolled, the label is a rectangle: width = circumference {{2 pi * 4 = 8 pi}}, height 10.", "Area = {{8 pi * 10 = 80 pi = 251.3...}} = 251 cm²."],
          commonError: "Using {{pi r^2 h}} — that's the volume (503).",
          traps: [{ spec: { type: "number", value: 503 }, feedback: "{{pi r^2 h}} is the volume. The label is a rectangle: circumference × height." }],
          difficulty: "warmup",
          guideRef: "prisms-cylinders",
          hints: ["Peel the label off and lay it flat. What shape is it?", "Its width is the distance round the tin."],
          strategy: "Draw the net",
        },
        {
          kind: "short",
          id: "mensuration-p2-q04",
          question: "A quarter circle has radius 6 cm. Work out its area. Give your answer in terms of π.",
          answer: { type: "expression", expr: "9pi", display: "9π cm²" },
          solution: ["Full circle: {{pi * 6^2 = 36 pi}}.", "Quarter: {{36 pi / 4 = 9 pi}} cm²."],
          commonError: "Forgetting to take a quarter (36π).",
          traps: [{ spec: { type: "expression", expr: "36pi" }, feedback: "That's the whole circle. You need a quarter of it." }],
          difficulty: "warmup",
          guideRef: "circles-arcs-sectors",
          hints: ["Find the whole circle's area, then take the right fraction."],
          strategy: "Fraction of the whole",
        },
        {
          kind: "short",
          id: "mensuration-p2-q05",
          question: "A sector of a circle of radius 10 cm has area 30π cm². Work out the angle of the sector, in degrees.",
          answer: { type: "number", value: 108, display: "108°" },
          solution: [
            "{{θ/360 * pi * 10^2 = 30 pi}}",
            "{{θ/360 * 100 = 30}}, so {{θ/360 = 0.3}}.",
            "{{θ = 0.3 * 360 = 108°}}.",
          ],
          commonError: "Using the arc-length formula {{2 pi r}} instead of the area formula {{pi r^2}}.",
          traps: [{ spec: { type: "number", value: 540 }, feedback: "You used {{2 pi r}} — that's for arc length. The sector's **area** is a fraction of {{pi r^2}}." }],
          difficulty: "core",
          guideRef: "circles-arcs-sectors",
          hints: ["What fraction of the full circle's area is 30π?", "The full circle is 100π.", "{{30/100}} of 360°."],
          strategy: "Work backwards",
        },
        {
          kind: "short",
          id: "mensuration-p2-q06",
          question: "A sector has angle 132° and arc length 11π cm. Work out the radius of the sector, in cm.",
          answer: { type: "number", value: 15, display: "15 cm" },
          solution: [
            "{{132/360 * 2 pi r = 11 pi}}",
            "Divide by π: {{132/360 * 2r = 11}}, so {{264/360 r = 11}}.",
            "{{r = 11 * 360/264 = 15}} cm.",
          ],
          commonError: "Forgetting the 2 in {{2 pi r}} and getting r = 30.",
          traps: [{ spec: { type: "number", value: 30 }, feedback: "Arc length uses {{2 pi r}}, the circumference. Did you use {{pi r}}?" }],
          difficulty: "core",
          guideRef: "circles-arcs-sectors",
          hints: ["Write the arc-length formula with r unknown.", "The π cancels on both sides.", "{{11/30 * 2r = 11}}"],
          strategy: "Work backwards",
        },
        {
          kind: "written",
          id: "mensuration-p2-q07",
          question:
            "The diagram shows a circle of radius r drawn inside a square so that it touches all four sides.\n\nShow that the circle covers more than {{3/4}} of the area of the square, whatever the value of r.",
          diagram: CIRCLE_IN_SQUARE,
          marks: 3,
          modelAnswer:
            "The square has side 2r, so its area is {{(2r)^2 = 4r^2}}. The circle's area is {{pi r^2}}. The fraction covered is {{(pi r^2)/(4r^2) = pi/4}}, and the r cancels, so it is the same for every r. Since {{pi/4 = 0.785...}} and {{3/4 = 0.75}}, the circle covers more than {{3/4}} of the square.",
          markScheme: [
            { point: "Square area 4r² (side 2r)", keywords: ["4r²", "4r^2", "2r", "(2r)²"] },
            { point: "Fraction πr²/4r² = π/4 (r cancels)", keywords: ["π/4", "pi/4", "cancel", "πr²/4r²"] },
            { point: "Compares π/4 ≈ 0.785 with 0.75 (or π > 3)", keywords: ["0.785", "0.75", "π > 3", "pi > 3", "greater"] },
          ],
          commonError: "Choosing a particular value of r — that only proves it for that one circle.",
          difficulty: "core",
          guideRef: "areas-2d",
          hints: ["How long is a side of the square, in terms of r?", "Write circle ÷ square and simplify.", "Compare your fraction with 0.75."],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "mensuration-p2-q08",
          question:
            "A doorstop is a solid prism 20 cm long. Its cross-section is an isosceles triangle with sides 13 cm, 13 cm and 10 cm. It is made of material with density 2.7 g/cm³. Work out the mass of the doorstop in **kilograms**.",
          answer: { type: "number", value: 3.24, display: "3.24 kg" },
          solution: [
            "Height of the triangle: split it down the middle, {{sqrt(13^2 - 5^2) = sqrt(144) = 12}} cm.",
            "Cross-section: {{1/2 * 10 * 12 = 60}} cm². Volume {{60 * 20 = 1200}} cm³.",
            "Mass = density × volume = {{2.7 * 1200 = 3240}} g = 3.24 kg.",
          ],
          commonError: "Giving the mass in grams, or using 13 as the height of the triangle.",
          traps: [
            { spec: { type: "number", value: 3240 }, feedback: "That's in grams. 1 kg = 1000 g." },
            { spec: { type: "number", value: 6.48 }, feedback: "The triangle's area is **half** of base × height." },
            { spec: { type: "number", value: 3.51 }, feedback: "13 cm is a sloping side. The perpendicular height comes from Pythagoras: 12 cm." },
          ],
          difficulty: "core",
          guideRef: "prisms-cylinders",
          hints: ["You need the triangle's perpendicular height first.", "Cut the isosceles triangle in half: hypotenuse 13, base 5.", "Mass = density × volume; then grams → kg."],
          strategy: "Find the right right-angled triangle",
        },
        {
          kind: "written",
          id: "mensuration-p2-q09",
          question:
            "Ravi says: \"If I double the radius of a cylinder, its volume doubles, just like when I double the height.\"\n\nExplain why Ravi is wrong. Use the formula for the volume of a cylinder.",
          marks: 2,
          modelAnswer:
            "{{V = pi r^2 h}}. Doubling the height gives {{pi r^2 (2h) = 2 pi r^2 h}}, so the volume doubles. But the radius is **squared**: doubling it gives {{pi (2r)^2 h = 4 pi r^2 h}}, so the volume is multiplied by 4, not 2.",
          markScheme: [
            { point: "Uses V = πr²h and notes the radius is squared", keywords: ["πr²h", "pi r^2 h", "squared", "r²", "r^2"] },
            { point: "Shows doubling r multiplies V by 4 (2² = 4)", keywords: ["4", "four", "(2r)²", "4r²", "quadruple"] },
          ],
          commonError: "Testing one example only without explaining why the 4 appears.",
          difficulty: "core",
          guideRef: "prisms-cylinders",
          hints: ["Replace r by 2r in {{pi r^2 h}}.", "What is {{(2r)^2}}?"],
          strategy: "Try small cases",
        },
        {
          kind: "short",
          id: "mensuration-p2-q10",
          question: "A sphere has surface area 324π cm². Work out its volume. Give your answer in terms of π.",
          answer: { type: "expression", expr: "972pi", display: "972π cm³" },
          solution: [
            "{{4 pi r^2 = 324 pi}} so {{r^2 = 81}} and r = 9 cm.",
            "{{V = 4/3 pi * 9^3 = 4/3 * 729 pi = 972 pi}} cm³.",
          ],
          commonError: "Forgetting to divide by 4 (so r² = 324, r = 18).",
          traps: [
            { spec: { type: "expression", expr: "7776pi" }, feedback: "Check the radius: {{4 pi r^2 = 324 pi}} gives {{r^2 = 81}}, not 324." },
            { spec: { type: "expression", expr: "2916pi" }, feedback: "Don't forget the 3 in {{4/3 pi r^3}}." },
          ],
          difficulty: "core",
          guideRef: "cones-spheres-pyramids",
          hints: ["Use the surface area to find r first.", "{{4 pi r^2 = 324 pi}}", "Then {{V = 4/3 pi r^3}}."],
          strategy: "Work backwards",
        },
        {
          kind: "short",
          id: "mensuration-p2-q11",
          question:
            "A cone has base radius 5 cm. Its curved surface area is 60π cm². Work out the vertical height of the cone. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 10.9, display: "10.9 cm" },
          solution: [
            "Curved area {{pi r l = 60 pi}}, so {{5 l = 60}} and l = 12 cm (slant height).",
            "Height: {{h = sqrt(12^2 - 5^2) = sqrt(119) = 10.908...}} cm.",
            "h = 10.9 cm.",
          ],
          commonError: "Stopping at the slant height 12 cm, or adding the squares (13 cm).",
          traps: [
            { spec: { type: "number", value: 12 }, feedback: "12 cm is the **slant** height. The vertical height is a shorter side of the right-angled triangle." },
            { spec: { type: "number", value: 13 }, feedback: "The slant height is the hypotenuse, so subtract the squares." },
          ],
          difficulty: "core",
          guideRef: "cones-spheres-pyramids",
          hints: ["Which length does {{pi r l}} give you?", "Slant height, radius and vertical height form a right-angled triangle.", "The slant height is the hypotenuse."],
          strategy: "Find the right right-angled triangle",
        },
        {
          kind: "short",
          id: "mensuration-p2-q12",
          question:
            "A solid lead cylinder of radius 6 cm and height 10 cm is melted down. All the lead is used to make identical solid spheres of radius 1.5 cm. How many spheres are made?",
          answer: { type: "number", value: 80, display: "80 spheres" },
          solution: [
            "Cylinder: {{pi * 6^2 * 10 = 360 pi}} cm³.",
            "One sphere: {{4/3 pi * 1.5^3 = 4/3 * 3.375 pi = 4.5 pi}} cm³.",
            "Number = {{360 pi / (4.5 pi) = 80}}.",
          ],
          commonError: "Dividing the radii or the heights instead of the volumes.",
          traps: [{ spec: { type: "number", value: 240 }, feedback: "Check the sphere volume: {{4/3 pi r^3}} — did you drop the {{4/3}}?" }],
          difficulty: "core",
          guideRef: "frustums-composite",
          hints: ["What is conserved when the lead is melted?", "Number of spheres = total volume ÷ volume of one sphere.", "Keep π as a symbol — it cancels."],
          strategy: "Look for an invariant",
        },
        {
          kind: "written",
          id: "mensuration-p2-q13",
          question:
            "A solid cone and a solid sphere have the same radius r and the same volume.\n\nShow that the slant height of the cone is {{r sqrt(17)}}.",
          marks: 3,
          modelAnswer:
            "Equal volumes: {{1/3 pi r^2 h = 4/3 pi r^3}}. Multiply by 3 and divide by {{pi r^2}}: {{h = 4r}}. The slant height l is the hypotenuse of a right-angled triangle with legs r and h, so {{l = sqrt(r^2 + (4r)^2) = sqrt(17 r^2) = r sqrt(17)}}.",
          markScheme: [
            { point: "Sets up 1/3 πr²h = 4/3 πr³", keywords: ["1/3", "4/3", "πr²h", "πr³", "equal"] },
            { point: "Deduces h = 4r", keywords: ["h = 4r", "4r"] },
            { point: "Pythagoras: l = √(r² + 16r²) = r√17", keywords: ["17r²", "17r^2", "√17", "sqrt(17)", "16r²", "pythagoras"] },
          ],
          commonError: "Writing {{(4r)^2 = 4r^2}} instead of {{16r^2}}.",
          difficulty: "challenge",
          guideRef: "cones-spheres-pyramids",
          hints: ["Write the two volumes equal and solve for h.", "Then slant height comes from Pythagoras.", "Careful: {{(4r)^2 = 16r^2}}."],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "mensuration-p2-q14",
          question:
            "A paper cone is held with its vertex pointing down. The cone has radius 6 cm and height 15 cm. Water is poured in to a depth of 10 cm. Work out the volume of water. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 168, display: "168 cm³" },
          solution: [
            "The water forms a smaller cone, similar to the whole cone.",
            "Its radius: {{6 * 10/15 = 4}} cm.",
            "Volume = {{1/3 pi * 4^2 * 10 = (160 pi)/3 = 167.55...}} = 168 cm³.",
          ],
          solutions: [
            {
              label: "Volume scale factor",
              steps: [
                "Full cone: {{1/3 pi * 36 * 15 = 180 pi}} cm³.",
                "Length scale factor {{10/15 = 2/3}}, so volume factor {{(2/3)^3 = 8/27}}.",
                "Water = {{8/27 * 180 pi = (160 pi)/3 = 167.55...}} cm³.",
              ],
            },
          ],
          commonError: "Keeping the radius as 6 cm for the water (377 cm³).",
          traps: [
            { spec: { type: "number", value: 377 }, feedback: "The water surface is narrower than the rim. Its radius shrinks in proportion to the depth." },
            { spec: { type: "number", value: 377, tolerance: 0.6 }, feedback: "The water surface is narrower than the rim. Its radius shrinks in proportion to the depth." },
          ],
          difficulty: "challenge",
          guideRef: "frustums-composite",
          hints: ["What shape does the water make?", "It's a cone similar to the whole cone — find its radius by ratio.", "Radius : height is 6 : 15 for every 'slice'."],
          strategy: "Use similarity",
        },
        {
          kind: "short",
          id: "mensuration-p2-q15",
          question:
            "The diagram shows a solid toy made from a hemisphere of radius 3 cm on top of a cone of radius 3 cm. The total height of the toy is 10 cm. Work out the total surface area of the toy. Give your answer correct to 3 significant figures.",
          diagram: TOY,
          answer: { type: "number", value: 128, display: "128 cm²" },
          solution: [
            "The cone's height is 10 − 3 = 7 cm (the hemisphere is 3 cm tall).",
            "Slant height {{l = sqrt(7^2 + 3^2) = sqrt(58)}} cm.",
            "Cone curved area {{pi * 3 * sqrt(58) = 3 sqrt(58) pi}}; hemisphere curved area {{2 pi * 3^2 = 18 pi}}.",
            "The flat faces are glued together, so they are **not** on the surface.",
            "Total = {{18 pi + 3 sqrt(58) pi = 128.3...}} = 128 cm².",
          ],
          commonError: "Including the flat circle where the two parts join (adds 9π ≈ 28.3).",
          traps: [
            { spec: { type: "number", value: 157, tolerance: 0.5 }, feedback: "The circular faces are hidden inside where the hemisphere meets the cone — leave them out." },
            { spec: { type: "number", value: 134, tolerance: 0.6 }, feedback: "The cone is only 7 cm tall (10 − 3). Use that to find the slant height." },
          ],
          difficulty: "challenge",
          guideRef: "frustums-composite",
          hints: ["Which surfaces can you actually touch?", "How tall is the cone part?", "Cone slant height: {{sqrt(7^2 + 3^2)}}."],
          strategy: "List every face",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "mensuration-ch-q01",
      question:
        "The diagram shows three semicircles on a straight line AB. C lies on AB with AC = 6 cm and CB = 10 cm. The shaded region lies inside the semicircle on AB but outside the semicircles on AC and CB. Work out the shaded area. Give your answer in terms of π.",
      diagram: ARBELOS,
      answer: { type: "expression", expr: "15pi", display: "15π cm²" },
      solution: [
        "Large semicircle: radius 8, area {{1/2 pi * 8^2 = 32 pi}}.",
        "Small semicircles: radii 3 and 5, areas {{4.5 pi}} and {{12.5 pi}}.",
        "Shaded = {{32 pi - 4.5 pi - 12.5 pi = 15 pi}} cm².",
      ],
      solutions: [
        {
          label: "General formula (the arbelos)",
          steps: [
            "With AC = a and CB = b: shaded = {{pi/8 ((a + b)^2 - a^2 - b^2) = pi/8 * 2ab = (pi a b)/4}}.",
            "a = 6, b = 10: {{(pi * 60)/4 = 15 pi}}.",
            "Archimedes noticed this equals the area of the circle whose **diameter** is the perpendicular from C up to the big arc (its length is {{sqrt(ab) = sqrt(60)}}).",
          ],
        },
      ],
      commonError: "Using the diameters as radii (giving 60π).",
      traps: [{ spec: { type: "expression", expr: "60pi" }, feedback: "6, 10 and 16 are diameters. Halve them to get the radii." }],
      difficulty: "challenge",
      guideRef: "circles-arcs-sectors",
      hints: ["Big semicircle minus the two small ones.", "Radii are 8, 3 and 5.", "Try it with letters a and b: what do the squares leave behind?"],
      strategy: "Subtract the unwanted part",
    },
    {
      kind: "short",
      id: "mensuration-ch-q02",
      question:
        "Three identical cylindrical pipes, each of radius 5 cm, are stacked so that each touches the other two. A tight band is wrapped once around all three. Work out the length of the band. Give your answer in the form a + bπ, where a and b are integers.",
      answer: { type: "expression", expr: "30+10pi", display: "30 + 10π cm" },
      solution: [
        "The centres form an equilateral triangle of side 10 cm (two radii).",
        "The straight parts of the band are parallel to the triangle's sides and equal to them: 3 × 10 = 30 cm.",
        "At each pipe the band turns through 360° − 90° − 90° − 60° = 120°. Three arcs of 120° make one full circle: {{2 pi * 5 = 10 pi}} cm.",
        "Band = 30 + 10π cm.",
      ],
      solutions: [
        {
          label: "Total turning",
          steps: [
            "Walk round the band: you turn through exactly 360° in total, and all of the turning happens on the arcs.",
            "So the arcs add up to a whole circle, whatever the arrangement — {{10 pi}}. The straight parts equal the centre-to-centre distances, 30.",
          ],
        },
      ],
      commonError: "Thinking each arc is a semicircle, or adding three full circumferences.",
      traps: [
        { spec: { type: "expression", expr: "30+30pi" }, feedback: "The band only touches part of each pipe. Work out how far round each pipe it goes." },
        { spec: { type: "expression", expr: "30+15pi" }, feedback: "Each arc is 120°, not 180°. Together they make one full turn." },
      ],
      difficulty: "challenge",
      guideRef: "circles-arcs-sectors",
      hints: ["Join the three centres. What triangle do you get?", "How long is each straight section of the band?", "How much does the band turn in total as you go round it once?"],
      strategy: "Look for an invariant",
    },
    {
      kind: "short",
      id: "mensuration-ch-q03",
      question:
        "ABCD is a square of side 10 cm. Two quarter circles of radius 10 cm are drawn inside the square, one centred at A and one centred at C. Work out the area of the shaded lens where they overlap. Give your answer in the form aπ + b, where a and b are integers.",
      diagram: LENS,
      answer: { type: "expression", expr: "50pi-100", display: "50π − 100 cm²" },
      solution: [
        "Each quarter circle has area {{1/4 pi * 10^2 = 25 pi}}.",
        "Together the two quarter circles cover the whole square, with the lens counted twice.",
        "So {{25 pi + 25 pi = 100 + lens}}, giving lens = {{50 pi - 100}} ≈ 57.1 cm².",
      ],
      solutions: [
        {
          label: "Segment method",
          steps: [
            "Diagonal BD splits the lens into two equal segments.",
            "One segment = quarter circle − triangle ABD = {{25 pi - 50}}.",
            "Lens = {{2(25 pi - 50) = 50 pi - 100}}.",
          ],
        },
      ],
      commonError: "Taking square − quarter circle (100 − 25π), which is one of the unshaded corners.",
      traps: [{ spec: { type: "expression", expr: "100-25pi" }, feedback: "That's one unshaded corner region. Try inclusion–exclusion: quarter + quarter = square + overlap." }],
      difficulty: "challenge",
      guideRef: "areas-2d",
      hints: ["Add the two quarter-circle areas. Which bit have you counted twice?", "Quarter + quarter = square + lens.", "Or: the diagonal BD cuts the lens into two segments."],
      strategy: "Inclusion–exclusion",
    },
    {
      kind: "short",
      id: "mensuration-ch-q04",
      question:
        "A cuboid has faces with areas 24 cm², 32 cm² and 48 cm². Work out the volume of the cuboid in cm³.",
      answer: { type: "number", value: 192, display: "192 cm³" },
      solution: [
        "Let the edges be a, b, c with ab = 24, ac = 32, bc = 48.",
        "Multiply all three: {{(abc)^2 = 24 * 32 * 48 = 36864}}.",
        "Volume {{abc = sqrt(36864) = 192}} cm³. (The edges are 4, 6 and 8 cm.)",
      ],
      solutions: [
        {
          label: "Find the edges first",
          steps: ["{{(ab)(ac)/(bc) = a^2 = (24 * 32)/48 = 16}}, so a = 4.", "Then b = 6, c = 8 and the volume is 4 × 6 × 8 = 192. The product trick is quicker."],
        },
      ],
      commonError: "Multiplying the three areas (36 864) without taking the square root.",
      traps: [{ spec: { type: "number", value: 36864 }, feedback: "That's {{(abc)^2}} — each edge appears twice. Take the square root." }],
      difficulty: "challenge",
      guideRef: "prisms-cylinders",
      hints: ["Call the edges a, b, c. Write each face area as a product.", "What happens if you multiply all three face areas?", "{{(ab)(bc)(ca) = (abc)^2}}"],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "mensuration-ch-q05",
      question:
        "A sector with radius 12 cm and angle 120° is cut from card and rolled up so that its two straight edges meet, making an open cone. Work out the volume of the cone. Give your answer in the form {{(k sqrt(2) pi)/3}}, where k is an integer — type it like 50sqrt(2)pi/3.",
      answer: { type: "expression", expr: "(128sqrt(2)pi)/3", display: "{{(128 sqrt(2) pi)/3}} cm³ ≈ 190 cm³" },
      solution: [
        "The arc becomes the circumference of the base: {{120/360 * 2 pi * 12 = 8 pi = 2 pi r}}, so r = 4 cm.",
        "The radius of the sector becomes the slant height: l = 12 cm.",
        "Height {{h = sqrt(12^2 - 4^2) = sqrt(128) = 8 sqrt(2)}} cm.",
        "{{V = 1/3 pi * 4^2 * 8 sqrt(2) = (128 sqrt(2) pi)/3}} cm³.",
      ],
      commonError: "Using 12 cm as the cone's base radius or as its height.",
      traps: [{ spec: { type: "number", value: 201, tolerance: 0.5 }, feedback: "12 cm becomes the **slant** height, not the vertical height. Use Pythagoras." }],
      difficulty: "challenge",
      guideRef: "cones-spheres-pyramids",
      hints: ["Which part of the sector becomes the base circle's edge?", "Arc length = {{2 pi r}} of the base; the radius 12 becomes the slant height.", "Then Pythagoras for the height."],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "mensuration-ch-q06",
      question:
        "A cone of vertical height 12 cm fits inside a sphere of radius 9 cm: the vertex of the cone and the whole circular edge of its base lie on the sphere. Work out the volume of the cone. Give your answer in terms of π.",
      answer: { type: "expression", expr: "288pi", display: "288π cm³" },
      solution: [
        "Let O be the centre of the sphere. The vertex is 9 cm from O, so the base is 12 − 9 = 3 cm beyond O.",
        "A point on the base edge is 9 cm from O: {{r^2 + 3^2 = 9^2}}, so {{r^2 = 72}}.",
        "{{V = 1/3 pi r^2 h = 1/3 pi * 72 * 12 = 288 pi}} cm³.",
      ],
      commonError: "Taking the base radius as 9 cm (the sphere's radius).",
      traps: [{ spec: { type: "expression", expr: "324pi" }, feedback: "The base circle is not a great circle of the sphere — it's 3 cm from the centre, so its radius is less than 9." }],
      difficulty: "challenge",
      guideRef: "cones-spheres-pyramids",
      hints: ["Draw the cross-section through the vertex: a circle with a triangle inside.", "Where is the centre of the sphere relative to the cone's base?", "Join the centre to a point on the base edge — that's a radius, 9 cm."],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "mensuration-ch-q07",
      question:
        "A bucket is a frustum. Its circular base has radius 10 cm, its open top has radius 15 cm and its depth is 20 cm. Work out how many litres the bucket holds. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 9.95, display: "9.95 litres" },
      solution: [
        "Extend the sides to a full cone. If the small missing cone has height H, then {{10/H = 15/(H + 20)}}, so 15H = 10H + 200 and H = 40 cm; the full cone is 60 cm tall.",
        "Volume = {{1/3 pi (15^2 * 60 - 10^2 * 40) = 1/3 pi (13500 - 4000) = (9500 pi)/3}} cm³.",
        "{{(9500 pi)/3 = 9948.3...}} cm³ = 9.95 litres.",
      ],
      solutions: [
        {
          label: "Frustum formula",
          steps: [
            "{{V = (pi h)/3 (R^2 + R r + r^2) = (20 pi)/3 (225 + 150 + 100) = (9500 pi)/3}} cm³.",
            "Same answer — the formula is just 'big cone − small cone' done once in algebra. It is not on the formula sheet, so the cone method is safer.",
          ],
        },
      ],
      commonError: "Treating the bucket as a cylinder of average radius 12.5 cm (9.82 litres).",
      traps: [
        { spec: { type: "number", value: 9.82, tolerance: 0.005 }, feedback: "Averaging the radii doesn't work — volume depends on r², not r. Complete the cone." },
        { spec: { type: "number", value: 9950, tolerance: 5 }, feedback: "That's in cm³. Divide by 1000 for litres." },
      ],
      difficulty: "challenge",
      guideRef: "frustums-composite",
      hints: ["Extend the sloping sides until they meet. What shape do you get?", "Use similar triangles to find the height of the missing small cone.", "Frustum = big cone − small cone."],
      strategy: "Complete the shape",
    },
    {
      kind: "short",
      id: "mensuration-ch-q08",
      question:
        "A cylindrical vase has internal radius 5 cm and contains water to a depth of 8 cm. A solid glass ball of radius 4 cm is placed in the vase and sinks to the bottom. Work out the new depth of the water. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 11.4, display: "11.4 cm" },
      solution: [
        "Water volume: {{pi * 5^2 * 8 = 200 pi}} cm³. Ball volume: {{4/3 pi * 4^3 = (256 pi)/3}} cm³.",
        "Assume the ball is fully submerged. Then {{25 pi d = 200 pi + (256 pi)/3}}, so {{d = 8 + 256/75 = 11.41...}} cm.",
        "Check: the ball is 8 cm tall and 11.4 > 8, so it is indeed fully under water. New depth 11.4 cm.",
      ],
      commonError: "Not checking whether the ball is fully submerged — if it weren't, this method would be invalid.",
      traps: [{ spec: { type: "number", value: 3.41, tolerance: 0.01 }, feedback: "That's the **rise**. Add it to the original 8 cm depth." }],
      difficulty: "challenge",
      guideRef: "frustums-composite",
      hints: ["Total volume below the water line = water + (part of) ball.", "Guess that the ball is fully covered, solve, then check your guess.", "The ball's top is 8 cm above the base."],
      strategy: "Check by substituting",
    },
    {
      kind: "short",
      id: "mensuration-ch-q09",
      question:
        "A closed conical flask has height 20 cm. With its vertex pointing down, it is filled with water to a depth of 10 cm. The flask is sealed and turned upside down so that the vertex points up. Work out the new depth of the water. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 0.871, display: "0.871 cm" },
      solution: [
        "Vertex down, the water is a cone similar to the flask with scale factor {{1/2}}, so it fills {{(1/2)^3 = 1/8}} of the flask.",
        "Vertex up, the **air** at the top is now a cone similar to the flask, filling {{7/8}} of it.",
        "Air cone height = {{20 * cbrt(7/8) = 10 cbrt(7) = 19.129...}} cm.",
        "Water depth = {{20 - 19.129... = 0.871}} cm (3 s.f.).",
      ],
      commonError: "Assuming the depth is still 10 cm, or that the water now fills half the height.",
      traps: [
        { spec: { type: "number", value: 10 }, feedback: "The flask is narrow at the bottom and wide at the top — flipping it changes the depth a lot." },
        { spec: { type: "number", value: 2.5 }, feedback: "Volumes scale by the **cube** of the length factor, not linearly." },
      ],
      difficulty: "challenge",
      guideRef: "frustums-composite",
      hints: ["What fraction of the flask is water when it is half-full by depth?", "After flipping, the water is a frustum — but the air is a cone.", "The air cone is {{7/8}} of the flask's volume: length factor {{cbrt(7/8)}}."],
      strategy: "Look at the complement",
    },
    {
      kind: "short",
      id: "mensuration-ch-q10",
      question:
        "A cube and a sphere have the same volume. Work out the value of {{(surface area of sphere)/(surface area of cube)}}. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 0.806, display: "0.806" },
      solution: [
        "Let both volumes be 1. The cube has side 1 and surface area 6.",
        "Sphere: {{4/3 pi r^3 = 1}}, so {{r = cbrt(3/(4 pi)) = 0.6203...}}.",
        "Sphere surface area {{4 pi r^2 = 4.835...}}.",
        "Ratio = {{4.835.../6 = 0.806}} (3 s.f.). The sphere wraps the same volume in about 20% less surface — which is why bubbles and raindrops are round.",
      ],
      solutions: [
        {
          label: "Exact form",
          steps: ["For volume V: sphere area = {{cbrt(36 pi V^2)}}, cube area = {{6 cbrt(V^2)}}.", "Ratio = {{cbrt(36 pi)/6 = cbrt(pi/6) = 0.806}}."],
        },
      ],
      commonError: "Rounding the radius too early, which pushes the third significant figure off.",
      traps: [{ spec: { type: "number", value: 1.24, tolerance: 0.01 }, feedback: "You found cube ÷ sphere. The question asks for sphere ÷ cube." }],
      difficulty: "challenge",
      guideRef: "cones-spheres-pyramids",
      hints: ["The answer doesn't depend on the size — so pick a convenient volume.", "Volume 1: cube side 1. What is the sphere's radius?", "{{r^3 = 3/(4 pi)}}"],
      strategy: "Make it simpler",
    },
  ],
};
