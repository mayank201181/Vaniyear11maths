import type { TopicGuide } from "../../types.ts";

// ---------------------------------------------------------------------------
// Length, Area & Volume — guide (textbook chapter + learn-smart).
// School Unit 4 · Edexcel IGCSE 4MA1 Higher 4.9–4.10 (arcs, sectors, prisms,
// cylinders, pyramids, cones, spheres, frustums).
// ---------------------------------------------------------------------------

export const guide: TopicGuide = {
  id: "mensuration",
  title: "Length, Area & Volume",
  strand: "Geometry & Measure",
  icon: "📦",
  summary: "Every formula here is a fraction of a circle, a stack of slices or a third of a prism — see the shape inside the shape.",
  intro:
    "Mensuration questions are some of the most reliable marks on 4MA1 Higher: a sector perimeter or a cylinder's capacity early in the paper, then a cone, sphere or frustum problem worth 4–5 marks near the end. The formulas for cones and spheres are given on the formula sheet, but the marks go to the person who knows *which* surfaces to count, when to use the slant height, how to work backwards from a volume to a radius and how to keep an answer exact in terms of π. Learn the handful of ideas behind the formulas — fractions of a circle, volume as a stack of slices, the one-third rule for anything with a point — and every question becomes a short chain of familiar steps.",
  guide: [
    // -----------------------------------------------------------------------
    {
      id: "circles-arcs-sectors",
      heading: "Circles, arcs and sectors",
      discovery: {
        problem:
          "A hawker-centre pizza has diameter 30 cm and is cut into 8 equal slices. How long is the crust on one slice? What is the area of one slice? Each slice has an angle of 45° at the centre — what fraction of 360° is that, and does that fraction help with both answers?",
        idea:
          "45° is {{45/360 = 1/8}} of a full turn, so one slice gets exactly {{1/8}} of the circumference and {{1/8}} of the area. The radius is 15 cm, so the crust is {{1/8 * 2pi * 15 = 15/4 pi}} ≈ 11.8 cm and the area is {{1/8 * pi * 15^2 = 225/8 pi}} ≈ 88.4 {{cm^2}}. Every arc and sector question works the same way: **angle over 360, times the whole-circle formula**.",
      },
      body:
        "A circle of radius r (diameter d = 2r) has\n\n    {{C = 2pi r = pi d}}\n    {{A = pi r^2}}\n\n**Arcs and sectors are fractions of a circle.** A sector with angle θ at the centre is {{theta/360}} of the whole circle, so it gets {{theta/360}} of the circumference and {{theta/360}} of the area.\n\n| | Whole circle | Sector with angle θ |\n|---|---|---|\n| Curved edge | {{2pi r}} | arc length {{theta/360 * 2pi r}} |\n| Area | {{pi r^2}} | sector area {{theta/360 * pi r^2}} |\n\n**Perimeter means all the way round.** The perimeter of a sector is the arc **plus two radii**: {{P = theta/360 * 2pi r + 2r}}. A semicircle is the sector with θ = 180°, so its area is {{1/2 pi r^2}} and its perimeter is {{pi r + 2r}} — half the circumference *plus the diameter*. A quarter circle has perimeter {{1/2 pi r + 2r}}.\n\n**Exact answers.** *Give your answer in terms of π* means treat π like a letter: simplify the number in front and leave π in. For r = 9 cm and θ = 140°, the arc is {{140/360 * 2pi * 9 = 7/18 * 18pi = 7pi}} cm. Don't write 21.99, and never 7 × 3.14.\n\n**Working backwards.** If you know an area or an arc length and need r or θ, write the equation and rearrange. A sector of radius 8 cm has area 50 {{cm^2}}:\n\n    {{theta/360 * pi * 8^2 = 50}}\n    {{theta = (50 * 360)/(64pi) = 89.5}}° (1 d.p.)\n\nA useful link: dividing the two formulas gives {{\"sector area\" = 1/2 r * \"arc length\"}} — a sector behaves like a triangle whose base is the arc and whose height is r. So the arc of that sector is exactly {{(2 * 50)/8 = 12.5}} cm, with no rounding needed.\n\n> Before you touch a formula, underline whether the question gives the **radius** or the **diameter**.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: a circle centre O, radius r, with a shaded sector of angle theta; its curved edge is labelled arc. Right: a semicircle with its diameter d equal to 2r along the bottom and its curved edge pi r."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><circle cx="150" cy="150" r="110" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M150,150 L260,150 A110,110 0 0,0 183.99,45.38 Z" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><path d="M175,150 A25,25 0 0,0 157.73,126.22" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="150" cy="150" r="3" fill="#1f2937"/><g font-family="sans-serif" font-size="13" fill="#1f2937"><text x="136" y="166">O</text><text x="182" y="134" font-style="italic">θ</text><text x="205" y="167" font-style="italic">r</text><text x="160" y="92" font-style="italic">r</text><text x="250" y="72">arc</text><text x="200" y="114" font-size="12">sector</text></g><path d="M315,230 A70,70 0 0,1 455,230 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><circle cx="385" cy="230" r="3" fill="#1f2937"/><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="385" y="248">d = 2r</text><text x="385" y="152">πr</text><text x="385" y="285">Semicircle: P = πr + 2r</text><text x="150" y="285">Sector: θ/360 of the circle</text></g></svg>`,
      diagramCaption:
        "A sector with angle θ is θ/360 of the circle — of its circumference and of its area. A semicircle's perimeter includes the straight diameter.",
      workedExamples: [
        {
          title: "Perimeter and area of a sector, in terms of π",
          problem:
            "OAB is a sector of a circle with centre O and radius 9 cm. Angle AOB = 140°. Work out (a) the perimeter of the sector, (b) the area of the sector. Give each answer in terms of π.",
          steps: [
            "The sector is {{140/360 = 7/18}} of the whole circle.",
            "Arc AB = {{7/18 * 2pi * 9 = 7/18 * 18pi = 7pi}} cm.",
            "(a) Perimeter = arc + two radii = {{7pi + 9 + 9 = 7pi + 18}} cm.",
            "(b) Area = {{7/18 * pi * 9^2 = 7/18 * 81pi = 63/2 pi}} {{cm^2}} (that is 31.5π).",
          ],
          answer: "(a) {{(7pi + 18)}} cm (b) {{63/2 pi}} {{cm^2}}",
          yourTurn: {
            question: "Your turn: a sector has radius 12 cm and angle 75°. Work out its area. Give your answer in terms of π.",
            answer: { type: "expression", expr: "30pi", display: "{{30pi}} {{cm^2}}" },
            solution: "{{75/360 = 5/24}} of the circle. Area = {{5/24 * pi * 12^2 = 5/24 * 144pi = 30pi}} {{cm^2}}.",
          },
        },
        {
          title: "A semicircle, to 3 significant figures",
          problem:
            "A semicircle has diameter 20 cm. Work out (a) its area, (b) its perimeter. Give each answer correct to 3 significant figures.",
          steps: [
            "Radius = 20 ÷ 2 = 10 cm.",
            "(a) Area = {{1/2 pi r^2 = 1/2 * pi * 10^2 = 50pi = 157.07…}} so 157 {{cm^2}}.",
            "(b) Curved edge = half the circumference = {{1/2 * pi * 20 = 10pi = 31.41…}} cm.",
            "Perimeter = curved edge + diameter = 31.41… + 20 = 51.41… so 51.4 cm.",
            "Check: a perimeter of only 31.4 cm would mean the straight side was forgotten.",
          ],
          answer: "(a) 157 {{cm^2}} (b) 51.4 cm",
          yourTurn: {
            question: "Your turn: a semicircle has diameter 14 cm. Work out its perimeter. Give your answer in cm correct to 3 significant figures.",
            answer: { type: "number", value: 36, tolerance: 0.05, display: "36.0 cm" },
            solution: "Curved edge = {{1/2 * pi * 14 = 7pi = 21.99…}} cm. Perimeter = 21.99… + 14 = 35.99… = 36.0 cm (3 s.f.).",
          },
        },
      ],
      keyPoints: [
        "{{C = 2pi r = pi d}} and {{A = pi r^2}} — check radius or diameter first.",
        "Arc length = {{theta/360 * 2pi r}}; sector area = {{theta/360 * pi r^2}}.",
        "Perimeter of a sector = arc + 2r; perimeter of a semicircle = {{pi r + 2r}}.",
        "\"In terms of π\": simplify the coefficient and leave π in the answer.",
        "To find θ or r, set up the equation and rearrange; keep full calculator values until the end.",
        "Sector area = {{1/2 r * \"arc length\"}} links the two formulas.",
      ],
      whyItWorks:
        "A full turn is 360°, and a circle is perfectly symmetric about its centre, so equal angles at the centre cut off equal arcs and equal areas. An angle of θ therefore takes the fraction {{theta/360}} of everything the circle has.\n\nWhy is the whole area {{pi r^2}}? Cut the circle into many thin sectors and lay them side by side, alternately point-up and point-down. They make a shape that is almost a rectangle: its height is r and its length is half the circumference, {{pi r}}. So the area is {{pi r * r = pi r^2}}, and the thinner the slices, the closer the shape is to an exact rectangle.",
      strategies: ["Draw a diagram", "Find the fraction of the circle first", "Use the inverse", "Check by estimating"],
      thinkDeeper:
        "A sector of radius r has exactly the same perimeter as the full circle of radius r. Show that its angle is {{360(pi - 1)/pi}} ≈ 245.4°. For which angles is a sector's perimeter *longer* than the whole circle's circumference?",
    },
    // -----------------------------------------------------------------------
    {
      id: "areas-2d",
      heading: "Areas of 2D shapes",
      discovery: {
        problem:
          "A trapezium has parallel sides 5 cm and 11 cm and height 4 cm. Cut out two copies. Turn one upside down and push them together along a slanted side. What shape do you get, and what are its base and height? Use that to find the trapezium's area — then try to write a rule that works for any trapezium.",
        idea:
          "The two copies make a **parallelogram** with base 5 + 11 = 16 cm and height 4 cm, so its area is 16 × 4 = 64 {{cm^2}}. One trapezium is half of that: 32 {{cm^2}}. In general the two copies give base (a + b), so a trapezium has area {{1/2 (a + b)h}}.",
      },
      body:
        "| Shape | Area | Watch out |\n|---|---|---|\n| Rectangle | length × width | |\n| Triangle | {{1/2 bh}} | h is perpendicular to b |\n| Parallelogram | bh | perpendicular height, not the slanted side |\n| Trapezium | {{1/2 (a + b)h}} | a and b are the **parallel** sides |\n| Kite or rhombus | {{1/2 d_1 d_2}} | {{d_1}}, {{d_2}} are the diagonals |\n| Circle | {{pi r^2}} | |\n\n**Perpendicular height.** Every height in these formulas meets the base at 90°. A slanted side is longer than the height, so using it always gives too big an answer. If the height isn't given, look for a right-angled triangle and use **Pythagoras**: an isosceles triangle or trapezium splits along its line of symmetry. (With two sides and the angle between them you can also use {{1/2 ab sin C}} — see *Further trigonometry*.)\n\n**Compound shapes.** Either **split** the shape into rectangles, triangles and circle parts and add, or **subtract**: take a simple outer shape (often a rectangle) and remove the bits that are missing. Mark every length you work out on the diagram — missing lengths usually come from subtracting given ones.\n\n**Shaded regions.** Shaded area = outer area − unshaded area. Exam questions often combine a square or triangle with circle parts; leave π in your working and you can give an exact answer such as {{64 - 16pi}}.\n\n**Units.** Area is in square units: {{cm^2}}, {{m^2}}. If lengths are in different units, convert them *before* you multiply.\n\n> When you see a trapezium, find the two parallel sides first — they are the only lengths that go in the bracket.",
      diagram: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three shapes each showing base and dashed perpendicular height h with a right-angle mark: a triangle with base b, a parallelogram with base b, and a trapezium with parallel sides a and b."><rect x="0" y="0" width="480" height="200" fill="#ffffff"/><polygon points="20,170 140,170 100,60" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><line x1="100" y1="60" x2="100" y2="170" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M100,160 L110,160 L110,170" fill="none" stroke="#334155" stroke-width="1.5"/><polygon points="170,170 280,170 320,60 210,60" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><line x1="210" y1="60" x2="210" y2="170" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M210,160 L220,160 L220,170" fill="none" stroke="#334155" stroke-width="1.5"/><polygon points="340,170 460,170 430,60 370,60" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><line x1="400" y1="60" x2="400" y2="170" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M400,160 L410,160 L410,170" fill="none" stroke="#334155" stroke-width="1.5"/><g font-family="sans-serif" font-size="13" fill="#1f2937" font-style="italic" text-anchor="middle"><text x="80" y="188">b</text><text x="91" y="120">h</text><text x="225" y="188">b</text><text x="217" y="120">h</text><text x="400" y="52">a</text><text x="400" y="188">b</text><text x="408" y="120">h</text></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="80" y="28">Triangle: ½bh</text><text x="245" y="28">Parallelogram: bh</text><text x="400" y="28">Trapezium: ½(a + b)h</text></g></svg>`,
      diagramCaption: "In every formula the height is measured at right angles to the base — never along a slanted side.",
      workedExamples: [
        {
          title: "Trapezium: find the height first",
          problem:
            "ABCD is an isosceles trapezium. AB = 7 cm and DC = 13 cm are parallel. AD = BC = 5 cm. Work out the area of ABCD.",
          steps: [
            "Drop perpendiculars from A and B to DC. The middle piece is 7 cm, so each end piece is {{(13 - 7)/2 = 3}} cm.",
            "Each end is a right-angled triangle with hypotenuse 5 cm and base 3 cm. Height {{h = sqrt(5^2 - 3^2) = sqrt(16) = 4}} cm.",
            "Area = {{1/2 (a + b)h = 1/2 (7 + 13) * 4 = 1/2 * 20 * 4 = 40}} {{cm^2}}.",
            "Check: 5 × 13 = 65 would be the error of using the slanted side as a height — far too big.",
          ],
          answer: "40 {{cm^2}}",
          yourTurn: {
            question:
              "Your turn: an isosceles trapezium has parallel sides 8 cm and 18 cm, and its two slanted sides are each 13 cm. Work out its area in {{cm^2}}.",
            answer: { type: "number", value: 156, display: "156 {{cm^2}}" },
            solution:
              "Each end overhang is {{(18 - 8)/2 = 5}} cm. Height {{= sqrt(13^2 - 5^2) = sqrt(144) = 12}} cm. Area = {{1/2 (8 + 18) * 12 = 156}} {{cm^2}}.",
          },
        },
        {
          title: "Shaded region, exactly",
          problem:
            "A square tile has side 8 cm. A quarter circle of radius 4 cm is removed from each corner. Work out the area of tile that remains. Give your answer in the form {{a - b pi}}, where a and b are integers.",
          steps: [
            "Outer shape: square, area {{8^2 = 64}} {{cm^2}}.",
            "The four quarter circles of radius 4 cm make one whole circle: area {{pi * 4^2 = 16pi}} {{cm^2}}.",
            "Remaining area = {{64 - 16pi}} {{cm^2}}.",
            "Sense check: {{64 - 16pi}} ≈ 13.7, positive and much smaller than 64 — the corners take most of the tile.",
          ],
          answer: "{{64 - 16pi}} {{cm^2}}",
          yourTurn: {
            question:
              "Your turn: a rectangle measures 10 cm by 6 cm. A semicircle with diameter 6 cm is cut out of one of the short sides. Work out the area that remains, in {{cm^2}} correct to 3 significant figures.",
            answer: { type: "number", value: 45.9, tolerance: 0.05, display: "45.9 {{cm^2}}" },
            solution:
              "Semicircle radius 3 cm: area {{1/2 * pi * 3^2 = 4.5pi = 14.13…}} {{cm^2}}. Remaining = 60 − 14.13… = 45.86… = 45.9 {{cm^2}}.",
          },
        },
      ],
      keyPoints: [
        "Triangle {{1/2 bh}}, parallelogram bh, trapezium {{1/2 (a + b)h}} — always with the perpendicular height.",
        "No height given? Find a right-angled triangle and use Pythagoras.",
        "Compound shapes: split and add, or take a big shape and subtract.",
        "Shaded area = outer area − unshaded area; keep π for exact answers.",
        "Convert all lengths to the same unit before multiplying.",
      ],
      whyItWorks:
        "All of these formulas grow from the rectangle.\n\n- A **parallelogram** is a rectangle with a triangle sliced off one end and slid to the other: same base, same perpendicular height, so area bh.\n- Two copies of any **triangle** fit together into a parallelogram with the same base and height, so a triangle is half of it: {{1/2 bh}}.\n- Two copies of a **trapezium**, one rotated 180°, make a parallelogram with base a + b and height h, so the trapezium is {{1/2 (a + b)h}}.\n\nThat's why the slanted side never appears: sliding pieces sideways doesn't change the height, but it does change the slant.",
      strategies: ["Split into simpler shapes", "Subtract from a bigger shape", "Use Pythagoras to find a height", "Use symmetry"],
      thinkDeeper:
        "A triangle has base 10 cm and area 30 {{cm^2}}. Where can its third vertex be? Describe *all* the possible positions. Of all those triangles, which has the smallest perimeter — and why?",
    },
    // -----------------------------------------------------------------------
    {
      id: "prisms-cylinders",
      heading: "Prisms and cylinders",
      discovery: {
        problem:
          "A chocolate box is a triangular prism. Its triangular end has area 6 {{cm^2}} and the box is 20 cm long. Imagine slicing it into slices 1 cm thick. What is the volume of one slice? Of the whole box? Would your answer change if the end were a hexagon with the same area of 6 {{cm^2}}?",
        idea:
          "Each 1 cm slice is 6 × 1 = 6 {{cm^3}}, and there are 20 slices, so the box holds 6 × 20 = 120 {{cm^3}}. The shape of the end doesn't matter — only its **area**. That is the rule for every prism: **volume = area of cross-section × length**.",
      },
      body:
        "A **prism** has the same cross-section all the way along: cuboids, triangular prisms, hexagonal prisms and (in the limit) cylinders.\n\n    {{\"Volume of a prism\" = \"area of cross-section\" * \"length\"}}\n    Cuboid: {{V = lwh}}\n    Cylinder: {{V = pi r^2 h}}\n\n**Surface area** is the total area of all the faces — picture the net.\n\n- Cuboid: {{2(lw + lh + wh)}} (three pairs of rectangles).\n- Triangular prism: two triangles + three rectangles.\n- Any prism: {{2 * \"cross-section\" + \"perimeter of cross-section\" * \"length\"}} — the side faces unroll into one long rectangle.\n- Cylinder: the curved surface unrolls into a rectangle h tall and {{2pi r}} wide, so **curved surface area = {{2pi rh}}**. A closed cylinder has total {{2pi r^2 + 2pi rh}}; an open-topped one {{pi r^2 + 2pi rh}}; a tube just {{2pi rh}}. Read the question to see which ends exist.\n\n**Capacity and units.** Capacity is volume measured in litres.\n\n| | |\n|---|---|\n| 1 {{cm^3}} | 1 ml |\n| 1000 {{cm^3}} | 1 litre |\n| 1 {{m^3}} | 1000 litres = 1 000 000 {{cm^3}} |\n\nPut every length in the same unit *before* multiplying: a tank 1.2 m by 80 cm by 50 cm is 120 × 80 × 50 = 480 000 {{cm^3}} = 480 litres. (Converting after multiplying is where the errors creep in: 1 {{m^3}} is {{100^3}} {{cm^3}}, not 100.)\n\n> The cylinder formulas {{pi r^2 h}} and {{2pi rh}} are on the formula sheet; the idea of a prism is not — you must spot the cross-section yourself.",
      diagram: `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: a cylinder of radius r and height h. Right: its net — a rectangle h tall and 2 pi r wide, with a circle of radius r attached above and below."><rect x="0" y="0" width="480" height="290" fill="#ffffff"/><rect x="40" y="60" width="100" height="160" fill="#bae6fd" stroke="none"/><path d="M40,220 A50,14 0 0,0 140,220" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><path d="M40,220 A50,14 0 0,1 140,220" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="40" y1="60" x2="40" y2="220" stroke="#1f2937" stroke-width="2"/><line x1="140" y1="60" x2="140" y2="220" stroke="#1f2937" stroke-width="2"/><ellipse cx="90" cy="60" rx="50" ry="14" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><line x1="90" y1="60" x2="140" y2="60" stroke="#1f2937" stroke-width="1.5"/><circle cx="90" cy="60" r="2.5" fill="#1f2937"/><rect x="230" y="100" width="188" height="96" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><circle cx="324" cy="70" r="30" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><circle cx="324" cy="226" r="30" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><line x1="324" y1="70" x2="354" y2="70" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="13" fill="#1f2937" font-style="italic"><text x="111" y="55">r</text><text x="150" y="145">h</text><text x="336" y="65">r</text><text x="426" y="153">h</text></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="324" y="143">curved surface 2πrh</text><text x="324" y="188">width = 2πr</text><text x="324" y="231">πr²</text><text x="90" y="256">V = πr²h</text><text x="324" y="280">Total surface area = 2πr² + 2πrh</text></g></svg>`,
      diagramCaption: "Unroll the label of a can: its width is the circumference 2πr, so the curved surface is 2πr × h.",
      workedExamples: [
        {
          title: "Cylinder: volume, capacity and surface area",
          problem:
            "A closed cylindrical tin has radius 4 cm and height 10 cm. (a) Work out its volume in terms of π and state its capacity in litres to 3 significant figures. (b) Work out its total surface area, correct to 3 significant figures.",
          steps: [
            "(a) {{V = pi r^2 h = pi * 4^2 * 10 = 160pi}} {{cm^3}}.",
            "{{160pi = 502.6…}} {{cm^3}} and 1000 {{cm^3}} = 1 litre, so capacity = 0.5026… = 0.503 litres.",
            "(b) Two circular ends: {{2 * pi * 4^2 = 32pi}}. Curved surface: {{2pi rh = 2 * pi * 4 * 10 = 80pi}}.",
            "Total = {{32pi + 80pi = 112pi = 351.8…}} so 352 {{cm^2}}.",
          ],
          answer: "(a) {{160pi}} {{cm^3}}, 0.503 litres (b) 352 {{cm^2}}",
          yourTurn: {
            question: "Your turn: a closed cylinder has radius 3 cm and height 7 cm. Work out its total surface area. Give your answer in terms of π.",
            answer: { type: "expression", expr: "60pi", display: "{{60pi}} {{cm^2}}" },
            solution: "Ends: {{2 * pi * 3^2 = 18pi}}. Curved: {{2 * pi * 3 * 7 = 42pi}}. Total {{18pi + 42pi = 60pi}} {{cm^2}}.",
          },
        },
        {
          title: "Triangular prism, with a missing side",
          problem:
            "A triangular prism is 15 cm long. Its cross-section is a right-angled triangle with shorter sides 6 cm and 8 cm. Work out (a) its volume, (b) its total surface area.",
          steps: [
            "Cross-section area = {{1/2 * 6 * 8 = 24}} {{cm^2}}.",
            "(a) Volume = 24 × 15 = 360 {{cm^3}}.",
            "The third side of the triangle (the hypotenuse) = {{sqrt(6^2 + 8^2) = 10}} cm.",
            "(b) Two triangular ends: 2 × 24 = 48. The three rectangles unroll into one rectangle 15 cm by (6 + 8 + 10) = 24 cm: 15 × 24 = 360.",
            "Total surface area = 48 + 360 = 408 {{cm^2}}.",
          ],
          answer: "(a) 360 {{cm^3}} (b) 408 {{cm^2}}",
          yourTurn: {
            question:
              "Your turn: a cuboid water tank measures 1.2 m by 80 cm by 50 cm. How many litres of water does it hold when full?",
            answer: { type: "number", value: 480, display: "480 litres" },
            solution: "In cm: 120 × 80 × 50 = 480 000 {{cm^3}}. Divide by 1000: 480 litres.",
          },
        },
      ],
      keyPoints: [
        "Volume of a prism = area of cross-section × length; cylinder {{V = pi r^2 h}}.",
        "Surface area = sum of all face areas — sketch the net and list the faces.",
        "Cylinder curved surface = {{2pi rh}}; add {{pi r^2}} for each end that exists.",
        "1 {{cm^3}} = 1 ml; 1000 {{cm^3}} = 1 litre; 1 {{m^3}} = 1000 litres.",
        "Convert lengths to one unit before you multiply.",
      ],
      whyItWorks:
        "A prism is a stack of identical thin slices. Each slice of thickness t has volume (cross-section area) × t, and stacking slices just adds the thicknesses up to the full length — so the volume is cross-section × length, whatever the shape of the cross-section. Even a cylinder is a stack of thin discs.\n\nFor surface area, peel the label off a can and flatten it. One edge was wrapped exactly once around the circle, so its length is the circumference {{2pi r}}; the other edge is the height h. A rectangle {{2pi r}} by h has area {{2pi rh}}.",
      strategies: ["Draw the net", "Identify the cross-section", "Convert units first", "List every face"],
      thinkDeeper:
        "Show that if a cylinder's volume (in {{cm^3}}) equals its *curved* surface area (in {{cm^2}}), then r = 2 cm, whatever the height. Harder: if instead the volume equals the *total* surface area, show that {{(r - 2)(h - 2) = 4}} and find every solution where r and h are whole numbers.",
    },
    // -----------------------------------------------------------------------
    {
      id: "cones-spheres-pyramids",
      heading: "Pyramids, cones and spheres",
      discovery: {
        problem:
          "A ball of radius r fits exactly inside a cylinder: the cylinder has radius r and height 2r. Archimedes proved that the ball fills exactly {{2/3}} of the cylinder. Use {{V = pi r^2 h}} to find a formula for the volume of the ball. Then: a cone and a cylinder have the same base and the same height, and it takes 3 cones of water to fill the cylinder. What is the cone's volume?",
        idea:
          "The cylinder's volume is {{pi r^2 * 2r = 2pi r^3}}, and {{2/3}} of that is {{4/3 pi r^3}} — the sphere formula. The cone is a third of its cylinder: {{1/3 pi r^2 h}}. Archimedes also found that the sphere's surface area equals the curved surface of that cylinder: {{2pi r * 2r = 4pi r^2}}.",
      },
      body:
        "**Pyramids and cones** — anything that rises from a base to a single point:\n\n    {{\"Volume\" = 1/3 * \"base area\" * \"perpendicular height\"}}\n    Cone: {{V = 1/3 pi r^2 h}}\n\nA square-based pyramid with base 6 cm and height 10 cm has volume {{1/3 * 36 * 10 = 120}} {{cm^3}}.\n\n**Cone surface.** The sloping surface is measured along the **slant height** l, not the vertical height h. They are linked by Pythagoras, because r, h and l form a right-angled triangle:\n\n    {{l = sqrt(r^2 + h^2)}}\n    Curved surface area = {{pi r l}}\n    Total surface area (solid cone) = {{pi r^2 + pi r l}}\n\n**Spheres and hemispheres.**\n\n| | Volume | Surface area |\n|---|---|---|\n| Sphere | {{4/3 pi r^3}} | {{4pi r^2}} |\n| Hemisphere | {{2/3 pi r^3}} | curved {{2pi r^2}}; solid total {{3pi r^2}} |\n\nThe solid hemisphere's total includes its flat circular face, {{pi r^2}}.\n\n**Composite solids.** Volumes simply add. For surface area, count only the faces you could touch from outside — where two solids are joined, the joining circle is *hidden* and must not be counted.\n\n**Pythagoras inside solids.** A pyramid or cone question may give the slant edge or slant height instead of the vertical height. Draw the right-angled triangle that contains the height and use Pythagoras (see *Pythagoras and trigonometry in 3D*).\n\n> The formula sheet gives {{1/3 pi r^2 h}}, {{pi r l}}, {{4/3 pi r^3}} and {{4pi r^2}}. It does **not** give the pyramid rule or {{l = sqrt(r^2 + h^2)}}.",
      diagram: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cone with vertical height h, base radius r and slant height l forming a right-angled triangle; a sphere of radius r; and a hemisphere."><rect x="0" y="0" width="480" height="280" fill="#ffffff"/><path d="M100,40 L30,220 A70,18 0 0,0 170,220 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M30,220 A70,18 0 0,1 170,220" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="100" y1="40" x2="100" y2="220" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="100" y1="220" x2="170" y2="220" stroke="#1f2937" stroke-width="1.5"/><path d="M100,208 L112,208 L112,220" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="290" cy="140" r="70" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><path d="M220,140 A70,18 0 0,0 360,140" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M220,140 A70,18 0 0,1 360,140" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="290" y1="140" x2="360" y2="140" stroke="#1f2937" stroke-width="1.5"/><circle cx="290" cy="140" r="2.5" fill="#1f2937"/><path d="M375,180 A45,45 0 0,0 465,180 Z" fill="#fecaca" stroke="#1f2937" stroke-width="2"/><ellipse cx="420" cy="180" rx="45" ry="11" fill="#fee2e2" stroke="#1f2937" stroke-width="2"/><g font-family="sans-serif" font-size="13" fill="#1f2937" font-style="italic"><text x="88" y="140">h</text><text x="132" y="214">r</text><text x="148" y="125">l</text><text x="322" y="133">r</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="100" y="262">V = ⅓πr²h, curved = πrl</text><text x="290" y="262">V = (4/3)πr³, A = 4πr²</text><text x="420" y="248">Hemisphere</text><text x="420" y="264">V = ⅔πr³</text></g></svg>`,
      diagramCaption: "In a cone, r, h and the slant height l make a right-angled triangle: l² = r² + h². Use h for the volume and l for the curved surface.",
      workedExamples: [
        {
          title: "Cone: volume and total surface area",
          problem:
            "A solid cone has base radius 5 cm and vertical height 12 cm. Work out (a) its volume, (b) its total surface area. Give your answers in terms of π.",
          steps: [
            "(a) {{V = 1/3 pi r^2 h = 1/3 * pi * 5^2 * 12 = 100pi}} {{cm^3}}.",
            "(b) The curved surface needs the slant height: {{l = sqrt(5^2 + 12^2) = sqrt(169) = 13}} cm.",
            "Curved surface = {{pi r l = pi * 5 * 13 = 65pi}}. Base = {{pi * 5^2 = 25pi}}.",
            "Total = {{65pi + 25pi = 90pi}} {{cm^2}}.",
          ],
          answer: "(a) {{100pi}} {{cm^3}} (b) {{90pi}} {{cm^2}}",
          yourTurn: {
            question:
              "Your turn: a solid cone has base radius 6 cm and vertical height 8 cm. Work out its total surface area. Give your answer in terms of π.",
            answer: { type: "expression", expr: "96pi", display: "{{96pi}} {{cm^2}}" },
            solution: "{{l = sqrt(6^2 + 8^2) = 10}} cm. Curved {{pi * 6 * 10 = 60pi}}, base {{36pi}}. Total {{96pi}} {{cm^2}}.",
          },
        },
        {
          title: "Composite solid: a toy",
          problem:
            "A toy is a solid hemisphere of radius 3 cm joined to a solid cone with the same radius and vertical height 4 cm, flat face to flat face. Work out (a) the volume of the toy, (b) its total surface area. Give your answers correct to 3 significant figures.",
          steps: [
            "(a) Hemisphere: {{2/3 pi * 3^3 = 18pi}}. Cone: {{1/3 pi * 3^2 * 4 = 12pi}}.",
            "Volume = {{18pi + 12pi = 30pi = 94.24…}} so 94.2 {{cm^3}}.",
            "(b) Only outside surfaces count — the joining circle is hidden. Hemisphere curved surface: {{2pi * 3^2 = 18pi}}.",
            "Cone slant height {{l = sqrt(3^2 + 4^2) = 5}}; curved surface {{pi * 3 * 5 = 15pi}}.",
            "Total = {{18pi + 15pi = 33pi = 103.6…}} so 104 {{cm^2}}.",
          ],
          answer: "(a) 94.2 {{cm^3}} (b) 104 {{cm^2}}",
          yourTurn: {
            question: "Your turn: a sphere has volume {{288pi}} {{cm^3}}. Work out its surface area. Give your answer in terms of π.",
            answer: { type: "expression", expr: "144pi", display: "{{144pi}} {{cm^2}}" },
            solution: "{{4/3 pi r^3 = 288pi}} gives {{r^3 = 288 * 3/4 = 216}}, so r = 6 cm. Surface area {{4pi * 6^2 = 144pi}} {{cm^2}}.",
          },
        },
      ],
      keyPoints: [
        "Pyramid or cone: {{1/3 * \"base area\" * \"perpendicular height\"}}.",
        "Cone curved surface {{pi r l}} uses the slant height {{l = sqrt(r^2 + h^2)}}.",
        "Sphere: {{V = 4/3 pi r^3}}, {{A = 4pi r^2}}.",
        "Solid hemisphere: {{V = 2/3 pi r^3}}, total surface {{3pi r^2}}.",
        "Composite solids: add volumes; for surface area leave out hidden joins.",
        "To find r from a volume, rearrange and take a cube root.",
      ],
      whyItWorks:
        "**The third.** A cube of side a can be cut into three identical square-based pyramids, all with their apex at one corner of the cube. Each has base area {{a^2}} and height a, and three of them make {{a^3}} — so each is {{1/3 a^3 = 1/3 * \"base\" * \"height\"}}. Squashing or stretching a pyramid sideways doesn't change its volume, and a cone is just a pyramid with a circular base.\n\n**The curved surface of a cone.** Cut a paper cone along a slant line and flatten it: you get a sector of a circle of radius l. Its arc wrapped around the base, so the arc length is {{2pi r}}. The sector is the fraction {{(2pi r)/(2pi l) = r/l}} of a full circle of radius l, so its area is {{r/l * pi l^2 = pi r l}}.\n\n**The sphere.** Archimedes' cylinder (radius r, height 2r) gives {{2/3 * 2pi r^3 = 4/3 pi r^3}}, and its curved surface {{2pi r * 2r = 4pi r^2}} equals the sphere's surface area.",
      strategies: ["Draw the right-angled triangle", "Work backwards", "Split into simpler solids", "Check which surfaces are hidden"],
      thinkDeeper:
        "A cone and a sphere have the same radius and the same volume. Show that the cone's height is 4r. Now suppose instead that a solid cone and a sphere have the same radius and the same *total surface area*. Find the cone's height in terms of r, exactly.",
    },
    // -----------------------------------------------------------------------
    {
      id: "frustums-composite",
      heading: "Frustums and harder volume problems",
      discovery: {
        problem:
          "A lampshade is a cone with its top sliced off parallel to the base — a **frustum**. Its top radius is 3 cm, its bottom radius is 6 cm and it is 4 cm tall. There's no frustum formula on the formula sheet. How could you find its volume using only the cone formula? What extra length would you need, and how could you find it?",
        idea:
          "Put the missing tip back on: frustum = **big cone − small cone**. The small cone is similar to the big one; its radius is half (3 out of 6), so its height is half the big cone's height. If the small height is x, then {{x/(x + 4) = 3/6}}, so x = 4 and the big cone is 8 cm tall. Volume = {{1/3 pi * 6^2 * 8 - 1/3 pi * 3^2 * 4 = 96pi - 12pi = 84pi}} {{cm^3}}.",
      },
      body:
        "**Frustums.** A frustum is a cone (or pyramid) with the top cut off by a plane parallel to the base. Work with whole cones:\n\n1. Sketch the whole cone with the small cone on top, and label both radii and heights.\n2. The two cones are similar, so {{r/R = h/H}}. Use it to find any missing height.\n3. Volume of frustum = {{1/3 pi R^2 H - 1/3 pi r^2 h}}.\n4. Curved surface of frustum = {{pi R L - pi r l}}, using the two slant heights.\n\n(You may meet the direct formula {{V = 1/3 pi h (R^2 + Rr + r^2)}}, where h is the frustum's own height — it comes from the same subtraction and makes a good check.)\n\n**Melting and recasting.** Melting changes the shape, not the amount: **volume before = volume after**. To find how many small solids can be made, divide volumes and round **down**; to find a new radius, set the volumes equal and solve. Very often π cancels.\n\n    Cylinder r = 4, h = 9 → sphere: {{pi * 4^2 * 9 = 4/3 pi R^3}}\n    {{R^3 = 108}}, {{R = cbrt(108) = 4.76}} cm (3 s.f.)\n\n**Water levels.** When a solid sinks completely into water in a cylinder, the water rises by exactly the solid's volume. The extra water forms a cylinder with the container's radius:\n\n    {{\"rise\" = \"volume of solid\" / (pi R^2)}}\n\nFor pouring from one container to another, the volume of liquid stays the same; set up an equation for the new depth.\n\n**Finding a radius from a volume or area.** Rearrange first, then evaluate: {{r = cbrt((3V)/(4pi))}} for a sphere, {{r = sqrt((3V)/(pi h))}} for a cone. Keep the exact value in your calculator for any later step.\n\n**Mass.** If the density is given, mass = density × volume (see *Ratio and proportion*).\n\n> Write the volume equation *before* you substitute numbers — it shows the method mark and lets π cancel cleanly.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A frustum shaded as the lower part of a cone. The removed small cone on top is dashed. The small cone has height h and radius r; the whole cone has height H and radius R."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><path d="M180,140 L120,250 A120,22 0 0,0 360,250 L300,140 A60,11 0 0,0 180,140 Z" fill="#c7d2fe" stroke="none"/><line x1="180" y1="140" x2="120" y2="250" stroke="#1f2937" stroke-width="2"/><line x1="300" y1="140" x2="360" y2="250" stroke="#1f2937" stroke-width="2"/><path d="M120,250 A120,22 0 0,0 360,250" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M120,250 A120,22 0 0,1 360,250" fill="none" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><ellipse cx="240" cy="140" rx="60" ry="11" fill="#e0e7ff" stroke="#1f2937" stroke-width="2"/><line x1="240" y1="30" x2="180" y2="140" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="240" y1="30" x2="300" y2="140" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="240" y1="30" x2="240" y2="250" stroke="#334155" stroke-width="1" stroke-dasharray="3 3"/><line x1="240" y1="140" x2="300" y2="140" stroke="#1f2937" stroke-width="1.5"/><line x1="240" y1="250" x2="360" y2="250" stroke="#1f2937" stroke-width="1.5"/><g stroke="#334155" stroke-width="1.5"><line x1="70" y1="30" x2="70" y2="250"/><line x1="64" y1="30" x2="76" y2="30"/><line x1="64" y1="250" x2="76" y2="250"/><line x1="95" y1="30" x2="95" y2="140"/><line x1="89" y1="30" x2="101" y2="30"/><line x1="89" y1="140" x2="101" y2="140"/></g><g stroke="#94a3b8" stroke-width="1" stroke-dasharray="2 3"><line x1="76" y1="30" x2="240" y2="30"/><line x1="101" y1="140" x2="180" y2="140"/><line x1="76" y1="250" x2="120" y2="250"/></g><g font-family="sans-serif" font-size="13" fill="#1f2937" font-style="italic"><text x="56" y="145" text-anchor="end">H</text><text x="102" y="90">h</text><text x="266" y="134">r</text><text x="296" y="244">R</text></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="400" y="70">r/R = h/H</text><text x="400" y="88">(similar cones)</text><text x="240" y="292">Frustum = big cone − small cone</text></g></svg>`,
      diagramCaption:
        "Put the tip back on: the frustum is the whole cone minus the small dashed cone. The cones are similar, so r/R = h/H.",
      workedExamples: [
        {
          title: "Volume of a frustum",
          problem:
            "A plant pot is a frustum of a cone. The radius of its base is 3 cm, the radius of its top is 6 cm and it is 4 cm deep. Work out its volume. Give your answer in terms of π.",
          steps: [
            "Extend the sloping sides until they meet: the pot is a cone of radius 6 cm with a small cone of radius 3 cm cut off. Let the small cone have height x cm, so the whole cone has height x + 4.",
            "Similar cones: {{x/(x + 4) = 3/6}}, so 6x = 3x + 12, giving x = 4. The whole cone is 8 cm tall.",
            "Big cone: {{1/3 pi * 6^2 * 8 = 96pi}}. Small cone: {{1/3 pi * 3^2 * 4 = 12pi}}.",
            "Frustum = {{96pi - 12pi = 84pi}} {{cm^3}}.",
            "Check with the direct formula: {{1/3 pi * 4 * (36 + 18 + 9) = 4/3 pi * 63 = 84pi}}. ✓",
          ],
          answer: "{{84pi}} {{cm^3}} (≈ 264 {{cm^3}})",
          yourTurn: {
            question:
              "Your turn: a frustum has radii 2 cm and 5 cm and height 6 cm. Work out its volume. Give your answer in terms of π.",
            answer: { type: "expression", expr: "78pi", display: "{{78pi}} {{cm^3}}" },
            solution:
              "Small cone height x: {{x/(x + 6) = 2/5}} gives 5x = 2x + 12, x = 4, so the big cone is 10 cm tall. {{1/3 pi * 25 * 10 - 1/3 pi * 4 * 4 = 250/3 pi - 16/3 pi = 78pi}} {{cm^3}}.",
          },
        },
        {
          title: "Rising water level",
          problem:
            "A cylindrical tank of radius 10 cm contains water to a depth of 15 cm. A solid metal ball of radius 6 cm is dropped in and is completely covered by the water. Work out how much the water level rises.",
          steps: [
            "Volume of ball = {{4/3 pi * 6^3 = 288pi}} {{cm^3}}.",
            "The water rises by d cm, so the extra 'water' is a cylinder of radius 10 and height d: {{pi * 10^2 * d = 100pi d}}.",
            "{{100pi d = 288pi}}, so {{d = 288/100 = 2.88}} cm. The π cancels — no rounding needed.",
            "Check: the new depth 17.88 cm is more than the ball's diameter 12 cm, so the ball really is covered.",
          ],
          answer: "2.88 cm",
          yourTurn: {
            question:
              "Your turn: a solid metal cylinder of radius 4 cm and height 9 cm is melted down and recast as a single sphere. Work out the radius of the sphere, in cm correct to 3 significant figures.",
            answer: { type: "number", value: 4.76, tolerance: 0.005, display: "4.76 cm" },
            solution:
              "Cylinder volume {{= pi * 4^2 * 9 = 144pi}}. Set {{4/3 pi R^3 = 144pi}}: {{R^3 = 144 * 3/4 = 108}}, so {{R = cbrt(108) = 4.762…}} = 4.76 cm.",
          },
        },
      ],
      keyPoints: [
        "Frustum = big cone − small cone; find missing heights with similar triangles {{r/R = h/H}}.",
        "Melting and recasting: volume is conserved — set the volumes equal.",
        "Number of small solids: divide volumes and round down.",
        "Water rise in a cylinder = volume submerged ÷ {{pi R^2}}.",
        "Rearrange to find r: sphere {{r = cbrt((3V)/(4pi))}}; π often cancels.",
        "Keep exact values (or full calculator values) until the final answer.",
      ],
      whyItWorks:
        "Cutting a cone parallel to its base leaves a smaller cone with exactly the same shape — every angle is the same, so it is an **enlargement** of the big cone. All its lengths are multiplied by the same scale factor k, which is why {{r/R = h/H}}. (Its volume is multiplied by {{k^3}} — a small cone with half the height has only {{1/8}} of the volume.)\n\nMelting, pouring and dropping things into water all rely on one fact: matter isn't created or destroyed, so the **volume stays the same** even though the shape changes. A sunken ball pushes up exactly its own volume of water, and that water spreads across the full width of the tank.",
      strategies: ["Complete the shape", "Use similar triangles", "Look for an invariant (the volume)", "Write the equation before substituting"],
      thinkDeeper:
        "A cone-shaped glass (point at the bottom) is filled with water to *half its height*. What fraction of the glass is full? It isn't {{1/2}}. Then: to what fraction of its height must you fill it so that it holds exactly half its capacity? Give your answer to 3 significant figures.",
    },
  ],
  learn: {
    flashcards: [
      { front: "Circumference of a circle?", back: "{{C = 2pi r = pi d}}" },
      { front: "Area of a circle?", back: "{{A = pi r^2}} — square the radius, not the diameter." },
      { front: "Arc length for a sector with angle θ?", back: "{{theta/360 * 2pi r}}" },
      { front: "Area of a sector with angle θ?", back: "{{theta/360 * pi r^2}}" },
      { front: "Perimeter of a sector?", back: "Arc length + 2r (the two straight radii)." },
      { front: "Perimeter of a semicircle of radius r?", back: "{{pi r + 2r}} — half the circumference plus the diameter." },
      { front: "Area of a trapezium?", back: "{{1/2 (a + b)h}}, with a and b the parallel sides and h the perpendicular height." },
      { front: "Volume of any prism?", back: "Area of cross-section × length." },
      { front: "Total surface area of a closed cylinder?", back: "{{2pi r^2 + 2pi rh}} (two ends + curved surface)." },
      { front: "How many {{cm^3}} in 1 litre? How many litres in 1 {{m^3}}?", back: "1000 {{cm^3}} = 1 litre; 1 {{m^3}} = 1000 litres." },
      { front: "Volume of a pyramid?", back: "{{1/3 * \"base area\" * \"perpendicular height\"}} — not on the formula sheet." },
      { front: "Volume and curved surface area of a cone?", back: "{{V = 1/3 pi r^2 h}}; curved surface {{pi r l}}." },
      { front: "How do you find a cone's slant height l?", back: "Pythagoras: {{l = sqrt(r^2 + h^2)}}." },
      { front: "Volume and surface area of a sphere?", back: "{{V = 4/3 pi r^3}}, {{A = 4pi r^2}}." },
      { front: "Total surface area of a solid hemisphere?", back: "{{2pi r^2 + pi r^2 = 3pi r^2}} (curved + flat circle)." },
      { front: "How do you find the volume of a frustum?", back: "Big cone − small cone, finding the missing height with similar triangles {{r/R = h/H}}." },
      { front: "A solid sinks in a cylinder of water of radius R. How far does the water rise?", back: "Volume of the solid ÷ {{pi R^2}}." },
    ],
    mustKnow: [
      "Can I find the area and perimeter of a semicircle?",
      "Can I find the arc length, area and perimeter of a sector — including working backwards to an angle or radius?",
      "Can I find the surface area of cuboids, triangular prisms and cylinders?",
      "Can I find the surface area of spheres, hemispheres and cones (using the slant height)?",
      "Can I use Pythagoras to find missing lengths such as heights and slant heights?",
      "Can I find the volume of prisms, including cuboids, triangular prisms and cylinders?",
      "Can I find the volume of pyramids, cones and spheres?",
      "Can I find the area of triangles, parallelograms, trapezia and compound or shaded shapes?",
      "Can I convert between {{cm^3}}, ml and litres, and keep lengths in one unit?",
      "Can I give answers exactly in terms of π?",
      "Can I find the volume and surface area of composite solids and frustums?",
      "Can I solve melting-and-recasting and water-level problems?",
    ],
    misconceptions: [
      { wrong: "Arc length = {{theta/360 * pi r^2}}.", right: "That is the sector **area**. Arc length is a length, so it uses the circumference: {{theta/360 * 2pi r}}." },
      { wrong: "The perimeter of a semicircle is {{pi r}}.", right: "That is only the curved edge. Add the diameter: {{pi r + 2r}}." },
      { wrong: "The area of a parallelogram is base × slanted side.", right: "Use the **perpendicular** height. The slanted side is longer, so it gives too big an answer." },
      { wrong: "A cone has volume {{pi r^2 h}}, like a cylinder.", right: "A cone is a third of the cylinder with the same base and height: {{1/3 pi r^2 h}}." },
      { wrong: "The curved surface of a cone is {{pi r h}}.", right: "It is {{pi r l}}, with the slant height {{l = sqrt(r^2 + h^2)}}." },
      { wrong: "A solid hemisphere has surface area {{2pi r^2}}.", right: "{{2pi r^2}} is just the curved part. A solid hemisphere also has a flat circle, so the total is {{3pi r^2}}." },
      { wrong: "1 {{m^3}} = 100 {{cm^3}}.", right: "1 m = 100 cm in **each** direction, so 1 {{m^3}} = {{100^3}} = 1 000 000 {{cm^3}} (= 1000 litres)." },
      { wrong: "A frustum's height is the height of the big cone.", right: "The frustum's height is the big cone's height **minus** the small cone's; find the missing one with similar triangles." },
    ],
    examMistakes: [
      "Using the diameter as the radius — e.g. {{pi * 20^2}} for a circle of diameter 20 cm.",
      "Giving only the arc length when the question asks for the perimeter of a sector (forgetting the 2r).",
      "Using the vertical height in {{pi r l}}, or the slant height in {{1/3 pi r^2 h}}.",
      "Counting the hidden joining circle when finding the surface area of a composite solid.",
      "Rounding the slant height or radius early, so the final answer falls outside the accepted range.",
      "Writing a decimal (or 3.14π) when the question says \"give your answer in terms of π\".",
    ],
    mnemonics: [
      { topic: "Circle formulas", device: "\"Cherry pie's delicious; apple pies are too.\"", explanation: "Circumference = πd; Area = π r²." },
      { topic: "Arcs and sectors", device: "\"Slice of the whole\"", explanation: "Angle over 360, times the whole-circle formula: circumference for the arc, area for the sector." },
      { topic: "Pyramids and cones", device: "\"If it comes to a point, take a third.\"", explanation: "Any solid that tapers to a single point has volume {{1/3}} × base area × height." },
    ],
    realWorld: [
      { title: "Designing a drinks can", detail: "Manufacturers choose r and h to hold 330 ml with as little aluminium as possible — a surface-area-for-a-fixed-volume problem.", emoji: "🥫" },
      { title: "Monsoon rain gauges", detail: "Rainfall in mm is a depth: multiply by an area and you get the volume of water a roof or reservoir collects.", emoji: "🌧️" },
      { title: "Ice-cream cones", detail: "A cone holds only a third of the cylinder it would fit in — which is why a scoop on top makes a big difference.", emoji: "🍦" },
      { title: "Buckets and lampshades", detail: "Both are frustums; designers calculate the capacity or fabric needed as big cone minus small cone.", emoji: "🪣" },
    ],
    videos: [
      { title: "Arc length and area of a sector", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+arc+length+area+of+sector" },
      { title: "Volume and surface area of cones and spheres", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+volume+surface+area+cones+spheres" },
      { title: "Volume of a frustum", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+volume+of+a+frustum" },
      { title: "Why the area of a circle is πr²", channel: "3Blue1Brown", url: "https://www.youtube.com/results?search_query=3blue1brown+area+of+a+circle" },
    ],
    formulas: [
      { name: "Circumference of a circle", formula: "{{C = 2pi r = pi d}}", note: "Learn this — not given" },
      { name: "Area of a circle", formula: "{{A = pi r^2}}", note: "Learn this — not given" },
      { name: "Arc length", formula: "{{theta/360 * 2pi r}}", note: "Learn this — not given" },
      { name: "Area of a sector", formula: "{{theta/360 * pi r^2}}", note: "Learn this — not given" },
      { name: "Area of a triangle", formula: "{{1/2 bh}}", note: "Learn this — not given" },
      { name: "Area of a parallelogram", formula: "{{bh}}", note: "Learn this — not given" },
      { name: "Area of a trapezium", formula: "{{1/2 (a + b)h}}", note: "On the formula sheet" },
      { name: "Volume of a prism", formula: "area of cross-section × length", note: "On the formula sheet" },
      { name: "Volume of a cylinder", formula: "{{V = pi r^2 h}}", note: "On the formula sheet" },
      { name: "Curved surface area of a cylinder", formula: "{{2pi rh}}", note: "On the formula sheet" },
      { name: "Volume of a pyramid", formula: "{{1/3 * \"base area\" * \"height\"}}", note: "Learn this — not given" },
      { name: "Volume of a cone", formula: "{{V = 1/3 pi r^2 h}}", note: "On the formula sheet" },
      { name: "Curved surface area of a cone", formula: "{{pi r l}}", note: "On the formula sheet" },
      { name: "Slant height of a cone", formula: "{{l = sqrt(r^2 + h^2)}}", note: "Learn this — not given" },
      { name: "Volume of a sphere", formula: "{{V = 4/3 pi r^3}}", note: "On the formula sheet" },
      { name: "Surface area of a sphere", formula: "{{A = 4pi r^2}}", note: "On the formula sheet" },
      { name: "Solid hemisphere", formula: "{{V = 2/3 pi r^3}}, total surface area {{3pi r^2}}", note: "Learn this — not given" },
      { name: "Frustum", formula: "big cone − small cone: {{1/3 pi R^2 H - 1/3 pi r^2 h}}; directly {{1/3 pi d (R^2 + Rr + r^2)}} where d is the frustum's own height", note: "Learn this — not given" },
      { name: "Capacity", formula: "1 {{cm^3}} = 1 ml; 1000 {{cm^3}} = 1 litre; 1 {{m^3}} = 1000 litres", note: "Learn this — not given" },
    ],
  },
};
