// ---------------------------------------------------------------------------
// Length, Area & Volume — Practice Papers 3 and 4.
// Paper 3: problem solving in context, mostly auto-marked, 3 written.
// Paper 4: exam style, modelled on Edexcel 4MA1 Higher (exact answers,
// 3 s.f., "show that", multi-step contexts).
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "mensuration-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "mensuration-p3-q01",
        question:
          "A round table top at a hawker centre has a diameter of 90 cm.\n\nWork out the area of the table top. Give your answer in cm² correct to 3 significant figures.",
        answer: { type: "number", value: 6360, tolerance: 5, display: "6360 cm²" },
        traps: [
          { spec: { type: "number", value: 25400, tolerance: 50 }, feedback: "You've used 90 as the radius. The radius is half the diameter: r = 45 cm." },
          { spec: { type: "number", value: 283, tolerance: 0.5 }, feedback: "283 cm is the circumference ({{pi d}}). Area uses {{pi r^2}}." },
        ],
        solution: ["Radius = 90 ÷ 2 = 45 cm.", "Area = {{pi * 45^2 = 2025 pi = 6361.7...}} cm².", "To 3 s.f.: 6360 cm²."],
        commonError: "Putting the diameter straight into {{pi r^2}}.",
        difficulty: "warmup",
        guideRef: "circles-arcs-sectors",
        hints: ["Which formula gives the area of a circle — and does it use the radius or the diameter?", "r = 45 cm."],
        strategy: "Check by estimating",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "mensuration-p3-q02",
        question:
          "Wei Ling's HDB corridor garden bed is a trapezium. Its parallel sides are 4.2 m and 6.8 m long, and the perpendicular distance between them is 3.5 m.\n\nWork out the area of the garden bed in m².",
        answer: { type: "number", value: 19.25, display: "19.25 m²" },
        traps: [
          { spec: { type: "number", value: 38.5 }, feedback: "38.5 is (4.2 + 6.8) × 3.5 — you've forgotten to halve. A trapezium is half of a parallelogram made from two copies." },
          { spec: { type: "number", value: 99.96 }, feedback: "You've multiplied all three lengths. Add the parallel sides first: {{1/2 (a + b) h}}." },
        ],
        solution: ["Area = {{1/2 (a + b) h}}.", "= {{1/2 * (4.2 + 6.8) * 3.5}}", "= {{1/2 * 11 * 3.5 = 19.25}} m²."],
        commonError: "Forgetting the half in {{1/2 (a + b) h}}.",
        difficulty: "warmup",
        guideRef: "areas-2d",
        hints: ["Use the trapezium formula {{1/2 (a + b) h}}.", "a + b = 11, h = 3.5."],
        strategy: "Use a formula",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "mensuration-p3-q03",
        question:
          "A cylindrical rain-water tank has radius 40 cm and height 1.2 m.\n\nWork out the capacity of the tank in **litres**. Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 603, tolerance: 0.5, display: "603 litres" },
        traps: [
          { spec: { type: "number", value: 603000, tolerance: 500 }, feedback: "That's the volume in cm³. 1 litre = 1000 cm³, so divide by 1000." },
        ],
        solution: [
          "Use the same units: height = 1.2 m = 120 cm.",
          "V = {{pi r^2 h = pi * 40^2 * 120 = 192000 pi = 603185.7...}} cm³.",
          "1 litre = 1000 cm³, so capacity = 603.18... litres = 603 litres (3 s.f.).",
        ],
        commonError: "Mixing cm and m in the same formula.",
        difficulty: "warmup",
        guideRef: "prisms-cylinders",
        hints: ["Put every length in centimetres first.", "1 litre = 1000 cm³."],
        strategy: "Convert units first",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "mensuration-p3-q04",
        question:
          "A basketball is a sphere of radius 12 cm.\n\nWork out its volume. Give your answer in cm³ correct to 3 significant figures.",
        answer: { type: "number", value: 7240, tolerance: 5, display: "7240 cm³" },
        traps: [
          { spec: { type: "number", value: 57900, tolerance: 50 }, feedback: "You've used 24 cm — that's the diameter. The sphere formula uses the radius, 12 cm." },
          { spec: { type: "number", value: 1810, tolerance: 5 }, feedback: "1810 cm² is the surface area ({{4 pi r^2}}). Volume is {{4/3 pi r^3}}." },
        ],
        solution: ["V = {{4/3 pi r^3}}.", "= {{4/3 * pi * 12^3 = 4/3 * pi * 1728 = 2304 pi}}", "= 7238.2... = 7240 cm³ (3 s.f.)."],
        commonError: "Cubing the diameter instead of the radius.",
        difficulty: "warmup",
        guideRef: "cones-spheres-pyramids",
        hints: ["Volume of a sphere = {{4/3 pi r^3}} (on the formula sheet).", "{{12^3 = 1728}}."],
        strategy: "Use a formula",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "mensuration-p3-q05",
        question:
          "A slice of kueh lapis is cut as a sector of a circle with radius 9 cm and angle 140°.\n\nWork out the **perimeter** of the slice. Give your answer in cm, in terms of π.",
        answer: { type: "expression", expr: "18+7pi", display: "18 + 7π cm" },
        traps: [
          { spec: { type: "expression", expr: "7pi" }, feedback: "7π cm is just the curved arc. The perimeter also includes the two straight radii: 9 + 9 = 18 cm." },
          { spec: { type: "expression", expr: "31.5pi" }, feedback: "31.5π is the sector's *area* in cm². Perimeter uses the circumference, {{pi d}}." },
        ],
        solution: [
          "Arc length = {{140/360 * 2 pi * 9 = 7/18 * 18 pi = 7 pi}} cm.",
          "Perimeter = arc + two radii = {{7 pi + 9 + 9}}.",
          "= 18 + 7π cm.",
        ],
        commonError: "Giving only the arc length and forgetting the two straight edges.",
        difficulty: "core",
        guideRef: "circles-arcs-sectors",
        hints: ["What fraction of a full circle is the sector?", "Arc length = {{140/360}} of the circumference.", "The perimeter goes all the way round: arc plus two radii."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "mensuration-p3-q06",
        question:
          "A square tile has side 12 cm. A quarter circle of radius 12 cm, centred at one corner, is painted blue. The rest of the tile is left yellow.\n\nWork out the yellow area. Give your answer in cm² in the form a − bπ, where a and b are integers.",
        diagram: `<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square of side 12 cm with a quarter circle of radius 12 cm centred at the bottom-left corner shaded blue; the remaining corner region is yellow"><rect x="40" y="20" width="200" height="200" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M40,220 L40,20 A200,200 0 0 1 240,220 Z" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><text x="140" y="240" font-size="13" font-family="sans-serif" text-anchor="middle">12 cm</text><text x="252" y="125" font-size="13" font-family="sans-serif">12 cm</text><text x="110" y="160" font-size="13" font-family="sans-serif" text-anchor="middle">blue</text><text x="215" y="45" font-size="13" font-family="sans-serif" text-anchor="middle">yellow</text></svg>`,
        answer: { type: "expression", expr: "144-36pi", display: "144 − 36π cm²" },
        traps: [
          { spec: { type: "expression", expr: "36pi" }, feedback: "36π is the blue quarter circle. The yellow part is the square *minus* that." },
          { spec: { type: "expression", expr: "144-144pi" }, feedback: "You've subtracted a whole circle of radius 12. Only a quarter is painted: {{1/4 pi * 12^2 = 36 pi}}." },
        ],
        solution: [
          "Square: {{12^2 = 144}} cm².",
          "Quarter circle: {{1/4 * pi * 12^2 = 36 pi}} cm².",
          "Yellow = 144 − 36π cm² (about 30.9 cm²).",
        ],
        commonError: "Using the full circle area instead of a quarter.",
        difficulty: "core",
        guideRef: "areas-2d",
        hints: ["Yellow = whole square − blue part.", "What fraction of a circle is the blue part?", "Quarter circle area = {{1/4 pi r^2}}."],
        strategy: "Subtract the unwanted part",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "mensuration-p3-q07",
        question:
          "A wooden doorstop is a triangular prism. Its cross-section is a right-angled triangle with sides 6 cm, 8 cm and 10 cm, and the prism is 15 cm long.\n\nWork out the total surface area of the doorstop in cm².",
        diagram: `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A triangular prism: the front face is a right-angled triangle with legs 6 cm and 8 cm and hypotenuse 10 cm; the prism length is 15 cm"><polygon points="40,200 200,200 40,80" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><polygon points="40,80 190,20 350,140 200,200" fill="#e0f2fe" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="200" x2="190" y2="140" stroke="#334155" stroke-dasharray="5 4"/><line x1="190" y1="140" x2="190" y2="20" stroke="#334155" stroke-dasharray="5 4"/><line x1="190" y1="140" x2="350" y2="140" stroke="#334155" stroke-dasharray="5 4"/><polyline points="40,188 52,188 52,200" fill="none" stroke="#1f2937"/><text x="18" y="145" font-size="13" font-family="sans-serif">6 cm</text><text x="105" y="220" font-size="13" font-family="sans-serif">8 cm</text><text x="100" y="128" font-size="13" font-family="sans-serif">10 cm</text><text x="285" y="190" font-size="13" font-family="sans-serif">15 cm</text></svg>`,
        answer: { type: "number", value: 408, display: "408 cm²" },
        traps: [
          { spec: { type: "number", value: 360 }, feedback: "360 cm² is just the three rectangles. Add the two triangular ends too." },
          { spec: { type: "number", value: 720 }, feedback: "720 cm³ is the *volume*. Surface area means adding the areas of all five faces." },
          { spec: { type: "number", value: 456 }, feedback: "Each triangular end is {{1/2 * 6 * 8 = 24}} cm² — did you forget the half?" },
        ],
        solution: [
          "Two triangular ends: {{2 * 1/2 * 6 * 8 = 48}} cm².",
          "Three rectangles: (6 + 8 + 10) × 15 = 24 × 15 = 360 cm².",
          "Total = 48 + 360 = 408 cm².",
        ],
        solutions: [
          { label: "Face by face", steps: ["Ends: 24 + 24 = 48.", "Rectangles: 6 × 15 = 90, 8 × 15 = 120, 10 × 15 = 150.", "Total = 48 + 90 + 120 + 150 = 408 cm²."] },
          { label: "Perimeter × length shortcut", steps: ["The rectangles together unroll into one rectangle: (perimeter of cross-section) × length = 24 × 15 = 360.", "Add the two ends: 360 + 48 = 408 cm². Quicker for any prism."] },
        ],
        commonError: "Forgetting the two triangular ends, or the half in the triangle area.",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        hints: ["How many faces does a triangular prism have? Sketch its net.", "Two triangles plus three rectangles.", "The three rectangles together are (perimeter of the triangle) × 15."],
        strategy: "Draw the net",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "mensuration-p3-q08",
        question:
          "A solid cone has base radius 5 cm and slant height 13 cm.\n\nShow that the volume of the cone is 100π cm³.",
        marks: 3,
        modelAnswer:
          "The height, radius and slant height form a right-angled triangle, with the slant height as the hypotenuse.\n\n    {{h^2 = 13^2 - 5^2 = 169 - 25 = 144}}, so h = 12 cm.\n\n    {{V = 1/3 pi r^2 h = 1/3 * pi * 25 * 12 = 100 pi}} cm³.",
        markScheme: [
          { point: "Uses Pythagoras with slant height as hypotenuse: h² = 13² − 5²", keywords: ["13^2 - 5^2", "169 - 25", "144", "pythagoras"] },
          { point: "Finds the perpendicular height h = 12 cm", keywords: ["h = 12", "12"] },
          { point: "Substitutes into ⅓πr²h to get 100π", keywords: ["1/3", "25", "300", "100π", "100pi"] },
        ],
        commonError: "Using the slant height 13 as h in {{1/3 pi r^2 h}} — the formula needs the perpendicular height.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["The volume formula needs the *perpendicular* height, not the slant height.", "Sketch the right-angled triangle formed by h, r and l.", "{{h^2 + 5^2 = 13^2}}."],
        strategy: "Find the hidden right-angled triangle",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "mensuration-p3-q09",
        question:
          "A solid cone has base radius 7 cm and perpendicular height 24 cm.\n\nWork out the **total** surface area of the cone. Give your answer in cm², in terms of π.",
        answer: { type: "expression", expr: "224pi", display: "224π cm²" },
        traps: [
          { spec: { type: "expression", expr: "175pi" }, feedback: "175π is only the curved surface. A solid cone also has a circular base: add {{pi * 7^2 = 49 pi}}." },
          { spec: { type: "expression", expr: "217pi" }, feedback: "You've used the height 24 in {{pi r l}}. The curved surface needs the slant height l = 25 cm." },
        ],
        solution: [
          "Slant height: {{l = sqrt(7^2 + 24^2) = sqrt(625) = 25}} cm.",
          "Curved surface = {{pi r l = pi * 7 * 25 = 175 pi}} cm².",
          "Base = {{pi r^2 = 49 pi}} cm².",
          "Total = 175π + 49π = 224π cm².",
        ],
        commonError: "Using the perpendicular height in {{pi r l}}.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["The curved surface formula {{pi r l}} needs the slant height.", "7, 24, ? — a Pythagorean triple.", "'Total' means curved surface plus base."],
        strategy: "Find the hidden right-angled triangle",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "mensuration-p3-q10",
        question:
          "A solid metal cuboid measures 20 cm by 15 cm by 8 cm. It is melted down and recast into small solid spheres, each of radius 1.5 cm.\n\nWhat is the greatest number of **complete** spheres that can be made?",
        answer: { type: "number", value: 169, display: "169 spheres" },
        traps: [
          { spec: { type: "number", value: 170 }, feedback: "169.77… spheres rounds to 170, but there isn't enough metal for the 170th. You need complete spheres, so round *down*." },
          { spec: { type: "number", value: 21 }, feedback: "You've used 3 cm as the radius. 1.5 cm is the radius already." },
        ],
        solution: [
          "Volume of cuboid = 20 × 15 × 8 = 2400 cm³.",
          "Volume of one sphere = {{4/3 pi * 1.5^3 = 4.5 pi = 14.137...}} cm³.",
          "2400 ÷ 14.137… = 169.77…",
          "Only complete spheres count, so 169.",
        ],
        commonError: "Rounding 169.77 to 170 — there isn't enough metal for the last sphere.",
        difficulty: "core",
        guideRef: "frustums-composite",
        hints: ["When metal is melted and recast, what stays the same?", "Find both volumes.", "Divide, then think about whether to round up or down."],
        strategy: "Look for an invariant",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "mensuration-p3-q11",
        question:
          "A drinks can is a cylinder of radius 4 cm. It holds 500 cm³ when full.\n\nWork out the height of the can. Give your answer in cm correct to 3 significant figures.",
        answer: { type: "number", value: 9.95, tolerance: 0.005, display: "9.95 cm" },
        traps: [
          { spec: { type: "number", value: 2.49, tolerance: 0.005 }, feedback: "You've used 8 cm as the radius. With r = 4, the base area is {{pi * 4^2 = 16 pi}}." },
          { spec: { type: "number", value: 19.9, tolerance: 0.05 }, feedback: "You've divided by {{2 pi r = 8 pi}} (the circumference). Volume = base *area* × height, so divide by {{pi r^2 = 16 pi}}." },
        ],
        solution: ["{{V = pi r^2 h}}, so {{500 = pi * 16 * h}}.", "{{h = 500/(16 pi) = 9.947...}}", "h = 9.95 cm (3 s.f.)."],
        commonError: "Confusing {{pi r^2}} with {{2 pi r}}.",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        hints: ["Write down the volume formula and put in what you know.", "{{500 = pi * 4^2 * h}}.", "Divide 500 by 16π."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "mensuration-p3-q12",
        question:
          "Ravi is fencing a semicircular flower bed with diameter 10 m. He says:\n\n> \"The perimeter is half the circumference, so it is 5π m, which is about 15.7 m.\"\n\nExplain Ravi's mistake and work out the correct perimeter, correct to 3 significant figures.",
        marks: 3,
        modelAnswer:
          "Ravi has only found the curved arc. Half the circumference is {{1/2 * pi * 10 = 5 pi}} m, but the perimeter of a semicircle also includes the straight edge — the diameter, 10 m.\n\n    Perimeter = 5π + 10 = 25.707… m = 25.7 m (3 s.f.).",
        markScheme: [
          { point: "States that the straight edge / diameter has been left out", keywords: ["diameter", "straight", "forgot", "10 m", "flat edge"] },
          { point: "Arc = 5π (≈ 15.7 m) plus 10 m", keywords: ["5π + 10", "5pi + 10", "15.7 + 10", "+ 10"] },
          { point: "Correct perimeter 25.7 m", keywords: ["25.7"] },
        ],
        commonError: "Treating 'perimeter of a semicircle' as only the curved part.",
        difficulty: "core",
        guideRef: "circles-arcs-sectors",
        hints: ["Walk all the way around the flower bed. What edges do you pass?", "There is a curved edge and a straight edge."],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "mensuration-p3-q13",
        question:
          "A bucket is in the shape of a frustum of a cone. The radius of the open top is 15 cm, the radius of the base is 10 cm and the depth is 12 cm.\n\nWork out the capacity of the bucket in **litres**, correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A bucket shaped as a frustum: top radius 15 cm, base radius 10 cm, depth 12 cm"><ellipse cx="200" cy="40" rx="150" ry="20" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><line x1="50" y1="40" x2="100" y2="160" stroke="#1f2937" stroke-width="2"/><line x1="350" y1="40" x2="300" y2="160" stroke="#1f2937" stroke-width="2"/><path d="M100,160 A100,14 0 0 0 300,160" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M100,160 A100,14 0 0 1 300,160" fill="none" stroke="#334155" stroke-dasharray="5 4"/><line x1="200" y1="40" x2="350" y2="40" stroke="#334155"/><line x1="200" y1="160" x2="300" y2="160" stroke="#334155"/><line x1="200" y1="40" x2="200" y2="160" stroke="#334155" stroke-dasharray="5 4"/><text x="275" y="34" font-size="13" font-family="sans-serif" text-anchor="middle">15 cm</text><text x="250" y="154" font-size="13" font-family="sans-serif" text-anchor="middle">10 cm</text><text x="160" y="105" font-size="13" font-family="sans-serif">12 cm</text></svg>`,
        answer: { type: "number", value: 5.97, tolerance: 0.005, display: "5.97 litres" },
        traps: [
          { spec: { type: "number", value: 5970, tolerance: 5 }, feedback: "That's the capacity in cm³. Divide by 1000 to get litres." },
          { spec: { type: "number", value: 5.89, tolerance: 0.01 }, feedback: "You've used a cylinder with the average radius 12.5 cm. A frustum isn't a cylinder — treat it as a big cone minus a small cone." },
        ],
        solution: [
          "Complete the cone. Let the missing tip have height x. By similar triangles, {{x/10 = (x + 12)/15}}.",
          "15x = 10x + 120, so x = 24 cm. The full cone has height 36 cm.",
          "Big cone: {{1/3 pi * 15^2 * 36 = 2700 pi}}. Small cone: {{1/3 pi * 10^2 * 24 = 800 pi}}.",
          "Frustum = 2700π − 800π = 1900π = 5969.0… cm³.",
          "1000 cm³ = 1 litre, so capacity = 5.97 litres (3 s.f.).",
        ],
        solutions: [
          {
            label: "Frustum formula (check)",
            steps: ["{{V = 1/3 pi h (R^2 + R r + r^2)}} with R = 15, r = 10, h = 12.", "{{V = 1/3 pi * 12 * (225 + 150 + 100) = 4 pi * 475 = 1900 pi}} cm³ — the same.", "This formula is not given in the exam, so the cone-minus-cone method is the one to know."],
          },
        ],
        commonError: "Treating the frustum as a cylinder, or subtracting heights instead of volumes.",
        difficulty: "challenge",
        guideRef: "frustums-composite",
        hints: [
          "Imagine extending the sloping sides until they meet. What shape do you get?",
          "Frustum = big cone − small cone. You need the height of the small cone.",
          "The cones are similar: radius 10 goes with height x, radius 15 with height x + 12.",
          "x = 24, so the big cone is 36 cm tall.",
        ],
        strategy: "Complete the shape",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "mensuration-p3-q14",
        question:
          "A vitamin capsule is a cylinder of length 10 mm with a hemisphere on each end. The cylinder and hemispheres all have radius r mm.\n\nThe total surface area of the capsule is 56π mm². Work out the value of r.",
        diagram: `<svg viewBox="0 0 400 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A capsule: a cylinder of length 10 mm with a hemisphere of radius r on each end"><path d="M120,60 L280,60 A40,40 0 0 1 280,140 L120,140 A40,40 0 0 1 120,60 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><line x1="120" y1="60" x2="120" y2="140" stroke="#334155" stroke-dasharray="5 4"/><line x1="280" y1="60" x2="280" y2="140" stroke="#334155" stroke-dasharray="5 4"/><line x1="280" y1="100" x2="320" y2="100" stroke="#1f2937"/><text x="296" y="94" font-size="13" font-family="sans-serif">r</text><line x1="120" y1="165" x2="280" y2="165" stroke="#1f2937"/><line x1="120" y1="160" x2="120" y2="170" stroke="#1f2937"/><line x1="280" y1="160" x2="280" y2="170" stroke="#1f2937"/><text x="200" y="185" font-size="13" font-family="sans-serif" text-anchor="middle">10 mm</text></svg>`,
        answer: { type: "number", value: 2, display: "r = 2" },
        traps: [
          { spec: { type: "number", value: -7 }, feedback: "r = −7 solves the quadratic, but a radius can't be negative. Reject it." },
        ],
        solution: [
          "The two hemispheres make one sphere: area {{4 pi r^2}}.",
          "The cylinder contributes only its curved surface (no flat ends): {{2 pi r * 10 = 20 pi r}}.",
          "{{4 pi r^2 + 20 pi r = 56 pi}}. Divide by 4π: {{r^2 + 5r - 14 = 0}}.",
          "(r + 7)(r − 2) = 0, so r = 2 or r = −7.",
          "A radius is positive, so r = 2.",
        ],
        commonError: "Adding the flat circular ends of the cylinder — they are hidden inside the capsule.",
        difficulty: "challenge",
        guideRef: "cones-spheres-pyramids",
        hints: [
          "Which surfaces are on the outside of the capsule?",
          "Two hemispheres = one sphere. The cylinder's flat ends are hidden.",
          "Form an equation in r and divide through by 4π.",
          "{{r^2 + 5r - 14 = 0}} — factorise.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "mensuration-p3-q15",
        question:
          "A cylindrical glass vase has internal radius 10 cm. It contains water to a depth of 15 cm. A solid metal ball of radius 6 cm is dropped into the vase and sinks to the bottom.\n\nShow that the water level rises by 2.88 cm, and explain why the ball is completely covered.",
        marks: 4,
        modelAnswer:
          "The rise in water fills a cylinder of radius 10 cm whose volume equals the ball's volume.\n\n    Ball: {{4/3 pi * 6^3 = 288 pi}} cm³.\n\n    Rise h: {{pi * 10^2 * h = 288 pi}}, so {{h = 288/100 = 2.88}} cm.\n\nNew depth = 15 + 2.88 = 17.88 cm. The ball is 12 cm tall (its diameter), and 17.88 > 12, so it is completely covered — which is why its whole volume displaces water.",
        markScheme: [
          { point: "Volume of ball = 288π cm³", keywords: ["288π", "288pi", "288", "904.7"] },
          { point: "Sets displaced volume equal to π × 10² × h", keywords: ["100π", "100pi", "π × 10²", "100h"] },
          { point: "h = 288 ÷ 100 = 2.88 cm", keywords: ["2.88", "288/100"] },
          { point: "Compares new depth 17.88 cm with ball height (diameter) 12 cm", keywords: ["17.88", "12", "diameter", "covered", "submerged"] },
        ],
        commonError: "Equating the ball's volume to the cylinder's whole volume, or forgetting to check the ball is submerged.",
        difficulty: "challenge",
        guideRef: "frustums-composite",
        hints: [
          "The water level rises by the volume the ball takes up.",
          "That extra water forms a thin cylinder of radius 10 cm and height h.",
          "{{100 pi h = 4/3 pi * 6^3}}.",
          "For 'covered', compare the new depth with the ball's diameter.",
        ],
        strategy: "Look for an invariant",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "mensuration-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "mensuration-p4-q01",
        question:
          "The diagram shows a shape made from a rectangle and a triangle.\n\nThe rectangle is 8 cm by 5 cm. The triangle has base 8 cm and perpendicular height 3 cm.\n\nWork out the area of the shape in cm².",
        diagram: `<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A pentagon made of a rectangle 8 cm wide and 5 cm tall with a triangle of height 3 cm on top"><polygon points="60,140 160,65 260,140 260,265 60,265" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><line x1="60" y1="140" x2="260" y2="140" stroke="#334155" stroke-dasharray="5 4"/><line x1="160" y1="65" x2="160" y2="140" stroke="#334155" stroke-dasharray="5 4"/><polyline points="160,128 172,128 172,140" fill="none" stroke="#334155"/><text x="160" y="285" font-size="13" font-family="sans-serif" text-anchor="middle">8 cm</text><text x="268" y="207" font-size="13" font-family="sans-serif">5 cm</text><text x="166" y="110" font-size="13" font-family="sans-serif">3 cm</text></svg>`,
        answer: { type: "number", value: 52, display: "52 cm²" },
        traps: [
          { spec: { type: "number", value: 64 }, feedback: "The triangle's area is {{1/2 * 8 * 3 = 12}}, not 24 — remember the half." },
          { spec: { type: "number", value: 40 }, feedback: "40 cm² is just the rectangle. Add the triangle on top." },
        ],
        solution: ["Rectangle: 8 × 5 = 40 cm².", "Triangle: {{1/2 * 8 * 3 = 12}} cm².", "Total = 40 + 12 = 52 cm²."],
        commonError: "Forgetting the half for the triangle.",
        difficulty: "warmup",
        guideRef: "areas-2d",
        hints: ["Split the shape into the rectangle and the triangle.", "Triangle area = {{1/2 * base * height}}."],
        strategy: "Split into simpler shapes",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "mensuration-p4-q02",
        question:
          "A circle has area 50 cm².\n\nWork out the radius of the circle. Give your answer in cm correct to 3 significant figures.",
        answer: { type: "number", value: 3.99, tolerance: 0.005, display: "3.99 cm" },
        traps: [
          { spec: { type: "number", value: 15.9, tolerance: 0.05 }, feedback: "{{50/pi = 15.9}} is {{r^2}}. You still need to square root." },
          { spec: { type: "number", value: 7.96, tolerance: 0.01 }, feedback: "You've divided by 2π — that comes from the circumference formula. Area is {{pi r^2}}." },
        ],
        solution: ["{{pi r^2 = 50}}", "{{r^2 = 50/pi = 15.915...}}", "{{r = sqrt(15.915...) = 3.989...}} = 3.99 cm (3 s.f.)."],
        commonError: "Stopping at {{r^2}} and forgetting the square root.",
        difficulty: "warmup",
        guideRef: "circles-arcs-sectors",
        hints: ["Set up {{pi r^2 = 50}} and undo it step by step.", "Divide by π, then square root."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "mensuration-p4-q03",
        question:
          "A cuboid water tank measures 2.5 m by 1.2 m by 0.8 m.\n\nWork out how many litres of water the tank holds when it is full.",
        answer: { type: "number", value: 2400, display: "2400 litres" },
        traps: [
          { spec: { type: "number", value: 2.4 }, feedback: "2.4 is the volume in m³. 1 m³ = 1000 litres." },
          { spec: { type: "number", value: 2400000 }, feedback: "2 400 000 is the volume in cm³. Divide by 1000 for litres (1 litre = 1000 cm³)." },
        ],
        solution: ["Volume = 2.5 × 1.2 × 0.8 = 2.4 m³.", "1 m³ = 100 × 100 × 100 = 1 000 000 cm³ = 1000 litres.", "2.4 × 1000 = 2400 litres."],
        commonError: "Thinking 1 m³ = 100 litres. A 1 m cube is 100 cm each way: 1 000 000 cm³ = 1000 litres.",
        difficulty: "warmup",
        guideRef: "prisms-cylinders",
        hints: ["Find the volume in m³ first.", "How many litres in 1 m³?"],
        strategy: "Convert units first",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "mensuration-p4-q04",
        question:
          "A solid pyramid has a square base of side 9 cm. Its perpendicular height is 14 cm.\n\nWork out the volume of the pyramid in cm³.",
        answer: { type: "number", value: 378, display: "378 cm³" },
        traps: [
          { spec: { type: "number", value: 1134 }, feedback: "1134 is base area × height — that's a prism. A pyramid is a third of that." },
          { spec: { type: "number", value: 42 }, feedback: "You've used 9 instead of the base *area* 81 cm²." },
        ],
        solution: ["Base area = 9 × 9 = 81 cm².", "{{V = 1/3 * 81 * 14 = 378}} cm³."],
        commonError: "Forgetting the {{1/3}}.",
        difficulty: "warmup",
        guideRef: "cones-spheres-pyramids",
        hints: ["Volume of a pyramid = {{1/3 * base area * height}}.", "Base area = {{9^2}}."],
        strategy: "Use a formula",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "mensuration-p4-q05",
        question:
          "A sector of a circle has radius 8 cm and area 40 cm².\n\nWork out the angle of the sector. Give your answer in degrees correct to 1 decimal place.",
        answer: { type: "number", value: 71.6, tolerance: 0.05, display: "71.6°" },
        traps: [
          { spec: { type: "number", value: 286.5, tolerance: 0.1 }, feedback: "You've used the circumference {{2 pi r}} instead of the area {{pi r^2}}. Sector area = {{theta/360 * pi r^2}}." },
          { spec: { type: "number", value: 0.2, tolerance: 0.05 }, feedback: "{{40/(64 pi) = 0.199}} is the *fraction* of the circle. Multiply by 360° to get the angle." },
        ],
        solution: [
          "{{theta/360 * pi * 8^2 = 40}}",
          "{{theta = (40 * 360)/(64 pi) = 71.619...}}",
          "θ = 71.6° (1 d.p.).",
        ],
        commonError: "Leaving the answer as the fraction of the circle.",
        difficulty: "core",
        guideRef: "circles-arcs-sectors",
        hints: ["Write the sector-area formula with θ unknown.", "{{theta/360 * 64 pi = 40}}.", "Rearrange: multiply by 360 and divide by 64π."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "mensuration-p4-q06",
        question:
          "The diagram shows the side view of a swimming pool at a condo in Bukit Timah. The pool is 25 m long and 10 m wide. Its depth increases steadily from 1 m at the shallow end to 2.2 m at the deep end.\n\nThe empty pool is filled with water at a rate of 20 litres per second.\n\nHow many hours does it take to fill the pool? Give your answer correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 480 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side view of a pool: a trapezium 25 m long, 1 m deep at the left end and 2.2 m deep at the right end"><polygon points="30,40 430,40 430,110 30,72" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><text x="230" y="30" font-size="13" font-family="sans-serif" text-anchor="middle">25 m</text><text x="4" y="62" font-size="13" font-family="sans-serif">1 m</text><text x="438" y="80" font-size="13" font-family="sans-serif">2.2 m</text><text x="230" y="130" font-size="12" font-family="sans-serif" text-anchor="middle">(not drawn to scale)</text></svg>`,
        answer: { type: "number", value: 5.56, tolerance: 0.005, display: "5.56 hours" },
        traps: [
          { spec: { type: "number", value: 333, tolerance: 0.5 }, feedback: "333 is the time in *minutes*. Divide by 60 for hours." },
          { spec: { type: "number", value: 20000 }, feedback: "20 000 is the time in seconds. Convert to hours: ÷ 3600." },
          { spec: { type: "number", value: 11.1, tolerance: 0.05 }, feedback: "Did you forget the half in the trapezium area? The cross-section is {{1/2 (1 + 2.2) * 25 = 40}} m², not 80 m²." },
        ],
        solution: [
          "Cross-section (trapezium): {{1/2 (1 + 2.2) * 25 = 40}} m².",
          "Volume = 40 × 10 = 400 m³ = 400 000 litres.",
          "Time = 400 000 ÷ 20 = 20 000 seconds.",
          "20 000 ÷ 3600 = 5.555… hours = 5.56 hours (3 s.f.).",
        ],
        commonError: "Using 100 litres per m³ instead of 1000, or stopping at seconds.",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        hints: ["The pool is a prism. What shape is its cross-section?", "Volume = trapezium area × width.", "1 m³ = 1000 litres; then seconds → hours."],
        strategy: "Break it into steps",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "mensuration-p4-q07",
        question:
          "A party hat is the curved surface of a cone with base radius 4.5 cm and perpendicular height 10 cm. There is no base.\n\nWork out the area of card needed for the hat. Give your answer in cm² correct to 3 significant figures.",
        answer: { type: "number", value: 155, tolerance: 0.5, display: "155 cm²" },
        traps: [
          { spec: { type: "number", value: 141, tolerance: 0.5 }, feedback: "You've used the height 10 cm in {{pi r l}}. l is the *slant* height: {{sqrt(4.5^2 + 10^2)}}." },
          { spec: { type: "number", value: 219, tolerance: 0.5 }, feedback: "You've added a circular base, but the hat is open — curved surface only." },
        ],
        solution: [
          "Slant height {{l = sqrt(4.5^2 + 10^2) = sqrt(120.25) = 10.966...}} cm.",
          "Curved surface = {{pi r l = pi * 4.5 * 10.966... = 155.02...}} cm².",
          "= 155 cm² (3 s.f.).",
        ],
        commonError: "Using the perpendicular height instead of the slant height; rounding l too early.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["The curved surface area of a cone is {{pi r l}} — what is l?", "r, h and l form a right-angled triangle with l as the hypotenuse.", "Keep l unrounded in your calculator."],
        strategy: "Find the hidden right-angled triangle",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "mensuration-p4-q08",
        question:
          "The diagram shows a sector OAB of a circle with centre O. The radius is 12 cm and angle AOB = 75°.\n\nShow that the perimeter of the sector is (24 + 5π) cm.",
        diagram: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sector OAB with centre O, radius 12 cm and angle AOB of 75 degrees"><path d="M50,210 L230,210 A180,180 0 0 0 96.6,36.1 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M80,210 A30,30 0 0 0 57.8,181" fill="none" stroke="#1f2937"/><text x="38" y="226" font-size="13" font-family="sans-serif">O</text><text x="234" y="226" font-size="13" font-family="sans-serif">A</text><text x="88" y="30" font-size="13" font-family="sans-serif">B</text><text x="84" y="197" font-size="12" font-family="sans-serif">75°</text><text x="140" y="228" font-size="13" font-family="sans-serif" text-anchor="middle">12 cm</text></svg>`,
        marks: 3,
        modelAnswer:
          "Arc AB is {{75/360}} of the full circumference.\n\n    Arc AB = {{75/360 * 2 pi * 12 = 5/24 * 24 pi = 5 pi}} cm.\n\n    Perimeter = OA + OB + arc AB = 12 + 12 + 5π = (24 + 5π) cm.",
        markScheme: [
          { point: "Uses the fraction 75/360 of the circumference 2π × 12 (= 24π)", keywords: ["75/360", "5/24", "24π", "24pi", "2π × 12"] },
          { point: "Arc length = 5π cm", keywords: ["5π", "5pi"] },
          { point: "Adds the two radii: 12 + 12 + 5π = 24 + 5π", keywords: ["12 + 12", "24 + 5π", "24 + 5pi", "two radii"] },
        ],
        commonError: "Using {{pi r^2}} (area) instead of the circumference for an arc length.",
        difficulty: "core",
        guideRef: "circles-arcs-sectors",
        hints: ["Perimeter = two radii + the arc.", "Arc length = {{theta/360 * 2 pi r}}.", "{{75/360 = 5/24}}."],
        strategy: "Work in exact form",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "mensuration-p4-q09",
        question:
          "A solid hemisphere has volume 1200 cm³.\n\nWork out the radius of the hemisphere. Give your answer in cm correct to 3 significant figures.",
        answer: { type: "number", value: 8.31, tolerance: 0.005, display: "8.31 cm" },
        traps: [
          { spec: { type: "number", value: 6.59, tolerance: 0.005 }, feedback: "6.59 cm is the radius of a *full* sphere of volume 1200 cm³. A hemisphere is half a sphere: {{2/3 pi r^3 = 1200}}." },
          { spec: { type: "number", value: 573, tolerance: 0.5 }, feedback: "573 is {{r^3}}. Take the cube root." },
        ],
        solution: [
          "Hemisphere volume = {{1/2 * 4/3 pi r^3 = 2/3 pi r^3}}.",
          "{{2/3 pi r^3 = 1200}}, so {{r^3 = 3600/(2 pi) = 572.95...}}.",
          "{{r = cbrt(572.95...) = 8.3056...}} = 8.31 cm (3 s.f.).",
        ],
        commonError: "Using the full sphere formula, or square-rooting instead of cube-rooting.",
        difficulty: "core",
        guideRef: "frustums-composite",
        hints: ["What fraction of a sphere is a hemisphere?", "{{2/3 pi r^3 = 1200}}.", "Make {{r^3}} the subject, then cube root."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "mensuration-p4-q10",
        question:
          "A child's spinning top is a solid made from a cone joined to a hemisphere. The cone and hemisphere both have radius 3 cm. The perpendicular height of the cone is 8 cm.\n\nWork out the total volume of the spinning top. Give your answer in cm³, in terms of π.",
        diagram: `<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A spinning top: a hemisphere of radius 3 cm on top of a cone of height 8 cm pointing downwards"><path d="M90,80 A60,10 0 0 1 210,80 L150,240 Z" fill="#fecaca" stroke="#1f2937" stroke-width="2"/><path d="M90,80 A60,60 0 0 1 210,80" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><ellipse cx="150" cy="80" rx="60" ry="10" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="80" x2="210" y2="80" stroke="#334155"/><text x="180" y="74" font-size="12" font-family="sans-serif" text-anchor="middle">3 cm</text><line x1="150" y1="80" x2="150" y2="240" stroke="#334155" stroke-dasharray="5 4"/><text x="156" y="170" font-size="13" font-family="sans-serif">8 cm</text></svg>`,
        answer: { type: "expression", expr: "42pi", display: "42π cm³" },
        traps: [
          { spec: { type: "expression", expr: "60pi" }, feedback: "You've added a full sphere ({{36 pi}}). The top only has a *hemisphere*: {{2/3 pi * 3^3 = 18 pi}}." },
          { spec: { type: "expression", expr: "90pi" }, feedback: "The cone's volume is {{1/3 pi r^2 h}} — you've left out the {{1/3}}." },
        ],
        solution: [
          "Cone: {{1/3 pi * 3^2 * 8 = 24 pi}} cm³.",
          "Hemisphere: {{2/3 pi * 3^3 = 18 pi}} cm³.",
          "Total = 24π + 18π = 42π cm³.",
        ],
        commonError: "Using a whole sphere instead of a hemisphere.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["Find each part's volume separately and add.", "Cone: {{1/3 pi r^2 h}}. Hemisphere: half of {{4/3 pi r^3}}.", "Keep everything as a multiple of π."],
        strategy: "Split into simpler shapes",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "mensuration-p4-q11",
        question:
          "A trapezium has parallel sides of length x cm and (x + 4) cm. The perpendicular distance between the parallel sides is 7 cm.\n\nThe area of the trapezium is 63 cm². Work out the value of x.",
        answer: { type: "number", value: 7, display: "x = 7" },
        traps: [
          { spec: { type: "number", value: 2.5 }, feedback: "You've left out the half: {{1/2 (2x + 4) * 7 = 63}} gives 2x + 4 = 18." },
        ],
        solution: [
          "{{1/2 (x + x + 4) * 7 = 63}}",
          "(x + 2) × 7 = 63",
          "x + 2 = 9, so x = 7.",
        ],
        commonError: "Forgetting the half, or adding x + 4 as 4x.",
        difficulty: "core",
        guideRef: "areas-2d",
        hints: ["Write the trapezium formula with the expressions in.", "{{1/2 (2x + 4) = x + 2}}.", "7(x + 2) = 63."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "mensuration-p4-q12",
        question:
          "A solid sphere has radius r cm. A solid cone also has base radius r cm, and perpendicular height h cm.\n\nThe sphere and the cone have the same volume.\n\nShow that h = 4r.",
        marks: 3,
        modelAnswer:
          "Set the volumes equal:\n\n    {{4/3 pi r^3 = 1/3 pi r^2 h}}\n\nMultiply both sides by 3 and divide by π:\n\n    {{4r^3 = r^2 h}}\n\nDivide by {{r^2}} (r ≠ 0):\n\n    h = 4r.",
        markScheme: [
          { point: "Writes the equation 4/3πr³ = 1/3πr²h", keywords: ["4/3", "1/3", "πr³", "pir^3", "=", "same volume"] },
          { point: "Simplifies to 4r³ = r²h (multiplying by 3 and cancelling π)", keywords: ["4r^3", "4r³", "r^2h", "r²h", "cancel"] },
          { point: "Divides by r² to reach h = 4r", keywords: ["h = 4r", "divide by r", "r^2", "r²"] },
        ],
        commonError: "Starting from h = 4r and checking it — a 'show that' needs to work from the facts to the result.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["Write both volume formulae and set them equal.", "Cancel what is common to both sides: π, the {{1/3}}, and some powers of r."],
        strategy: "Form an equation",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "mensuration-p4-q13",
        question:
          "Jun has a cylindrical glass of internal radius 4 cm. It contains water to a depth of 10 cm. He drops identical solid glass marbles, each of radius 1.2 cm, into the water. The marbles sink and are completely covered.\n\nWhat is the smallest number of marbles he must drop in for the water level to reach at least 12 cm?",
        answer: { type: "number", value: 14, display: "14 marbles" },
        traps: [
          { spec: { type: "number", value: 13 }, feedback: "13 marbles raise the water by only {{13 * 2.304 pi / (16 pi) = 1.87}} cm. You need *at least* a 2 cm rise, so round 13.9 *up*." },
          { spec: { type: "number", value: 83 }, feedback: "You've used the water up to 12 cm (192π) instead of just the extra 2 cm. Only the *rise* is caused by the marbles." },
        ],
        solution: [
          "The level must rise by 12 − 10 = 2 cm.",
          "Extra volume needed = {{pi * 4^2 * 2 = 32 pi}} cm³.",
          "One marble = {{4/3 pi * 1.2^3 = 2.304 pi}} cm³.",
          "{{32 pi / (2.304 pi) = 13.88...}}",
          "13 is not quite enough, so he needs 14 marbles.",
        ],
        commonError: "Rounding 13.9 down to 13 — 'at least' means you must round up here.",
        difficulty: "challenge",
        guideRef: "frustums-composite",
        hints: [
          "How much does the water level need to rise?",
          "The marbles displace their own volume of water. The rise forms a cylinder of radius 4 cm.",
          "Divide the needed volume by the volume of one marble — the π cancels.",
          "Decide: round up or down?",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "written",
        id: "mensuration-p4-q14",
        question:
          "A solid cone has base radius 9 cm and perpendicular height 18 cm. A small cone of height 6 cm is cut off the top, parallel to the base, leaving a frustum.\n\nShow that the volume of the frustum is 468π cm³.",
        diagram: `<svg viewBox="0 0 400 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cone of base radius 9 cm and height 18 cm with a small cone of height 6 cm removed from the top, leaving a frustum"><polygon points="164,92 236,92 308,236 92,236" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><line x1="200" y1="20" x2="164" y2="92" stroke="#334155" stroke-dasharray="5 4"/><line x1="200" y1="20" x2="236" y2="92" stroke="#334155" stroke-dasharray="5 4"/><ellipse cx="200" cy="92" rx="36" ry="6" fill="#e0e7ff" stroke="#1f2937" stroke-width="2"/><ellipse cx="200" cy="236" rx="108" ry="14" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="200" y1="236" x2="308" y2="236" stroke="#334155"/><text x="254" y="230" font-size="13" font-family="sans-serif" text-anchor="middle">9 cm</text><line x1="340" y1="20" x2="340" y2="236" stroke="#1f2937"/><line x1="335" y1="20" x2="345" y2="20" stroke="#1f2937"/><line x1="335" y1="236" x2="345" y2="236" stroke="#1f2937"/><text x="348" y="132" font-size="13" font-family="sans-serif">18 cm</text><line x1="60" y1="20" x2="60" y2="92" stroke="#1f2937"/><line x1="55" y1="20" x2="65" y2="20" stroke="#1f2937"/><line x1="55" y1="92" x2="65" y2="92" stroke="#1f2937"/><text x="18" y="60" font-size="13" font-family="sans-serif">6 cm</text></svg>`,
        marks: 4,
        modelAnswer:
          "The small cone is similar to the big cone with scale factor {{6/18 = 1/3}}, so its radius is {{9 * 1/3 = 3}} cm.\n\n    Big cone: {{1/3 pi * 9^2 * 18 = 486 pi}} cm³.\n\n    Small cone: {{1/3 pi * 3^2 * 6 = 18 pi}} cm³.\n\n    Frustum = 486π − 18π = 468π cm³.",
        markScheme: [
          { point: "Finds the small cone's radius = 3 cm using similar triangles (scale factor 1/3)", keywords: ["3 cm", "r = 3", "1/3", "similar", "6/18"] },
          { point: "Volume of big cone = 486π", keywords: ["486π", "486pi", "486"] },
          { point: "Volume of small cone = 18π", keywords: ["18π", "18pi"] },
          { point: "Subtracts: 486π − 18π = 468π", keywords: ["486π - 18π", "468π", "468pi", "subtract"] },
        ],
        solutions: [
          {
            label: "Volume scale factor",
            steps: ["The small cone is an enlargement of the big one with linear scale factor {{1/3}}, so volume scale factor {{(1/3)^3 = 1/27}}.", "Small cone = {{486 pi / 27 = 18 pi}}.", "Frustum = 486π − 18π = 468π cm³ — no need to find the small radius."],
          },
        ],
        commonError: "Assuming the small cone's radius without justifying it, or subtracting heights to use a single 'cone' of height 12.",
        difficulty: "challenge",
        guideRef: "frustums-composite",
        hints: [
          "Frustum = big cone − small cone.",
          "You need the small cone's radius. How do the two cones compare?",
          "The cones are similar: height 6 is {{1/3}} of 18.",
          "Small radius = 3 cm. Now find both volumes in terms of π.",
        ],
        strategy: "Complete the shape",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "mensuration-p4-q15",
        question:
          "A solid cylinder has radius 3 cm and height 7 cm. A solid sphere has the same total surface area as the cylinder.\n\nWork out the volume of the sphere. Give your answer in cm³ correct to 3 significant figures.",
        answer: { type: "number", value: 243, tolerance: 0.5, display: "243 cm³" },
        traps: [
          { spec: { type: "number", value: 143, tolerance: 0.5 }, feedback: "You've used only the cylinder's curved surface (42π). Total surface area includes both circular ends: 42π + 18π = 60π." },
          { spec: { type: "number", value: 191, tolerance: 0.5 }, feedback: "You've included only one circular end. A closed cylinder has two: {{2 pi r^2 = 18 pi}}." },
        ],
        solution: [
          "Cylinder: {{2 pi r^2 + 2 pi r h = 18 pi + 42 pi = 60 pi}} cm².",
          "Sphere: {{4 pi R^2 = 60 pi}}, so {{R^2 = 15}} and {{R = sqrt(15)}} cm.",
          "Volume = {{4/3 pi (sqrt(15))^3 = 4/3 pi * 15 sqrt(15) = 20 sqrt(15) pi}}",
          "= 243.34… = 243 cm³ (3 s.f.).",
        ],
        solutions: [
          { label: "Exact all the way", steps: ["{{R^3 = 15 sqrt(15)}}, so {{V = 20 pi sqrt(15)}} exactly.", "Keeping R as {{sqrt(15)}} avoids rounding errors; only round at the end."] },
        ],
        commonError: "Rounding R to 3.87 before cubing, which can shift the final answer.",
        difficulty: "challenge",
        guideRef: "cones-spheres-pyramids",
        hints: [
          "First find the total surface area of the cylinder — how many faces does it have?",
          "Set {{4 pi R^2}} equal to that and find R.",
          "{{R = sqrt(15)}}. Keep it exact and put it into {{4/3 pi R^3}}.",
        ],
        strategy: "Work in exact form",
      },
    ],
  },
];
