// ---------------------------------------------------------------------------
// Angles, Polygons & Circle Theorems — Practice Papers 3 and 4.
// Paper 3: mixed practice — angle facts, polygons, every circle theorem, chords, loci, proof.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher questions on this topic
// (reasons in exam language, multi-step chains, "show that", exact and 3 s.f. answers).
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "angles-circle-theorems-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q01",
        question:
          "The diagram shows two parallel lines crossed by a straight line.\n\nWork out the size of the angle marked x.",
        diagram: `<svg viewBox="0 0 360 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel lines crossed by a transversal; the angle 68 degrees is marked below the upper line on the left, angle x above the lower line on the left"><rect width="360" height="250" fill="#ffffff"/><line x1="30" y1="80" x2="330" y2="80" stroke="#1f2937" stroke-width="2"/><line x1="30" y1="200" x2="330" y2="200" stroke="#1f2937" stroke-width="2"/><polyline points="268,85 275,80 268,75" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="268,205 275,200 268,195" fill="none" stroke="#1f2937" stroke-width="1.5"/><line x1="132.8" y1="246.4" x2="218.7" y2="33.6" stroke="#1f2937" stroke-width="2"/><path d="M 176 80 A 24 24 0 0 0 191 102.3" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="163.5" y="108.8" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">68°</text><path d="M 129.5 200 A 22 22 0 0 1 159.8 179.6" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="131.4" y="174.4" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x</text></svg>`,
        answer: { type: "number", value: 112, display: "112°" },
        traps: [
          { spec: { type: "number", value: 68 }, feedback: "These two angles are not alternate or corresponding — they are both *between* the parallel lines on the same side of the crossing line. Co-interior angles add up to 180°." },
        ],
        solution: [
          "Both angles lie between the parallel lines, on the same side (the left) of the crossing line.",
          "So they are co-interior angles, which add up to 180°.",
          "x = 180° − 68° = 112°.",
        ],
        commonError: "Assuming every pair of angles on parallel lines is equal. Only alternate and corresponding angles are equal; co-interior angles add to 180°.",
        difficulty: "warmup",
        guideRef: "angle-facts",
        hints: ["Are both angles between the parallel lines? Are they on the same side of the crossing line?", "Co-interior angles (the 'C' shape) add up to 180°."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q02",
        question:
          "Each interior angle of a regular polygon is 156°.\n\nWork out the number of sides of the polygon.",
        answer: { type: "number", value: 15, display: "15 sides" },
        traps: [
          { spec: { type: "number", value: 13 }, feedback: "13 is n − 2. With exterior angle 24°, the number of sides is {{360/24}} = 15." },
        ],
        solution: [
          "Exterior angle = 180° − 156° = 24°.",
          "The exterior angles of any polygon add up to 360°.",
          "Number of sides = {{360/24}} = 15.",
        ],
        solutions: [
          { label: "Interior angle sum", steps: ["Sum of interior angles = 180(n − 2) = 156n.", "180n − 360 = 156n, so 24n = 360.", "n = 15. (The exterior-angle route is quicker.)"] },
        ],
        commonError: "Dividing 360 by the interior angle (156°) instead of the exterior angle.",
        difficulty: "warmup",
        guideRef: "polygons",
        hints: ["Interior and exterior angles at a vertex lie on a straight line.", "Exterior angles of a polygon add up to 360°."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q03",
        question:
          "A, B and C are points on a circle, centre O.\n\nAngle ACB = 47°.\n\nWork out the size of angle AOB.",
        diagram: `<svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O with points A, B and C on the circle; angle ACB is 47 degrees"><rect width="300" height="280" fill="#ffffff"/><circle cx="150" cy="140" r="100" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="76.9" y1="208.2" x2="150" y2="40" stroke="#1f2937" stroke-width="2"/><line x1="223.1" y1="208.2" x2="150" y2="40" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="140" x2="76.9" y2="208.2" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="140" x2="223.1" y2="208.2" stroke="#1f2937" stroke-width="2"/><circle cx="150" cy="140" r="3" fill="#1f2937"/><text x="150" y="130.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="65.9" y="223.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="234.1" y="223.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="150" y="29.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><path d="M 138 67.5 A 30 30 0 0 0 162 67.5" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="150" y="90.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">47°</text></svg>`,
        answer: { type: "number", value: 94, display: "94°" },
        traps: [
          { spec: { type: "number", value: 23.5 }, feedback: "You halved it. The angle at the **centre** is the bigger one — it is *twice* the angle at the circumference." },
          { spec: { type: "number", value: 47 }, feedback: "Angle ACB is at the circumference; angle AOB is at the centre and stands on the same arc AB, so it is double: 94°." },
        ],
        solution: [
          "Angles ACB and AOB both stand on the arc AB.",
          "The angle at the centre is twice the angle at the circumference.",
          "Angle AOB = 2 × 47° = 94°.",
        ],
        commonError: "Halving instead of doubling — the centre angle is always the larger one.",
        difficulty: "warmup",
        guideRef: "circle-theorems-1",
        hints: ["Which arc do both angles 'stand on'?", "Angle at centre = 2 × angle at circumference."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q04",
        question:
          "A is a point on a circle, centre O. The line AT is the tangent to the circle at A.\n\nAngle AOT = 58°.\n\nWork out the size of angle ATO, marked y.",
        diagram: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O; TA is a tangent at A; angle AOT is 58 degrees"><rect width="300" height="240" fill="#ffffff"/><circle cx="120" cy="120" r="80" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="200" x2="290" y2="200" stroke="#1f2937" stroke-width="2"/><line x1="120" y1="120" x2="120" y2="200" stroke="#1f2937" stroke-width="2"/><line x1="120" y1="120" x2="248" y2="200" stroke="#1f2937" stroke-width="2"/><circle cx="120" cy="120" r="3" fill="#1f2937"/><text x="108" y="114.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="120" y="220.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="248" y="220.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">T</text><path d="M 120 142 A 22 22 0 0 0 138.7 131.7" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="138.4" y="157.4" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">58°</text><path d="M 226 186.2 A 26 26 0 0 0 222 200" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="207.7" y="192.6" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">y</text><polyline points="120,189 131,189 131,200" fill="none" stroke="#1f2937" stroke-width="1.5"/></svg>`,
        answer: { type: "number", value: 32, display: "32°" },
        traps: [
          { spec: { type: "number", value: 122 }, feedback: "You used 180° − 58°, as if the angles at O and T were the only two. The angle at A is 90° (tangent ⟂ radius), so y = 180° − 90° − 58°." },
          { spec: { type: "number", value: 61 }, feedback: "Triangle OAT is not isosceles — OA is a radius but OT is not. Use the right angle at A." },
        ],
        solution: [
          "A tangent is perpendicular to the radius at the point of contact, so angle OAT = 90°.",
          "Angles in triangle OAT add up to 180°.",
          "y = 180° − 90° − 58° = 32°.",
        ],
        commonError: "Forgetting the right angle between the tangent and the radius.",
        difficulty: "warmup",
        guideRef: "circle-theorems-2",
        hints: ["What is special about the angle between a tangent and the radius?", "Angle OAT = 90°. Now use the angle sum of triangle OAT."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q05",
        question:
          "DAE is a straight line, parallel to BC.\n\nTriangle ABC is isosceles with AB = AC.\n\nAngle DAB = 52°.\n\nWork out the size of angle BAC.",
        diagram: `<svg viewBox="0 0 360 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line DAE is parallel to BC; triangle ABC has AB equal to AC; angle DAB is 52 degrees"><rect width="360" height="250" fill="#ffffff"/><polygon points="180,92 80,220 280,220" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><line x1="30" y1="92" x2="330" y2="92" stroke="#1f2937" stroke-width="2"/><polyline points="78,97 85,92 78,87" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="138,225 145,220 138,215" fill="none" stroke="#1f2937" stroke-width="1.5"/><line x1="125.3" y1="152.3" x2="134.7" y2="159.7" stroke="#1f2937" stroke-width="1.5"/><line x1="225.3" y1="159.7" x2="234.7" y2="152.3" stroke="#1f2937" stroke-width="1.5"/><text x="30" y="82.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">D</text><text x="330" y="82.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">E</text><text x="180" y="80.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="68" y="232.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="292" y="232.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><path d="M 156 92 A 24 24 0 0 0 165.2 110.9" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="142.3" y="114.6" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">52°</text></svg>`,
        answer: { type: "number", value: 76, display: "76°" },
        traps: [
          { spec: { type: "number", value: 64 }, feedback: "You treated 52° as the angle BAC's partner and shared 128° between B and C. Angle ABC is the alternate angle to DAB, so ABC = 52°, and the 52° goes at the *base*." },
          { spec: { type: "number", value: 52 }, feedback: "52° is angle ABC (alternate to angle DAB). Angle BAC is the apex angle: 180° − 52° − 52°." },
        ],
        solution: [
          "Angle ABC = angle DAB = 52° (alternate angles, DE parallel to BC).",
          "AB = AC, so the base angles are equal: angle ACB = 52°.",
          "Angle BAC = 180° − 52° − 52° = 76° (angles in a triangle).",
        ],
        solutions: [
          { label: "Angles on a straight line", steps: ["Angle EAC = angle ACB (alternate angles), and angle ACB = angle ABC = angle DAB = 52°.", "So angle EAC = 52°.", "Angles on the straight line DAE: 52° + angle BAC + 52° = 180°, so angle BAC = 76°."] },
        ],
        commonError: "Putting the given 52° at the apex rather than recognising it as the alternate angle to the base angle at B.",
        difficulty: "core",
        guideRef: "angle-facts",
        hints: ["Look for a Z shape between line DE and BC through the line AB.", "Angle ABC = 52° (alternate angles). What does AB = AC tell you about angle ACB?", "Finish with the angle sum of the triangle."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "written",
        id: "angles-circle-theorems-p3-q06",
        question:
          "Zara is designing a floor pattern. She says: \"Regular pentagons will tessellate on their own, just like regular hexagons do.\"\n\nIs Zara correct? Explain your answer fully, using the interior angles of both shapes.",
        marks: 3,
        modelAnswer:
          "Zara is **not** correct.\n\nInterior angle of a regular pentagon: exterior angle = {{360/5}} = 72°, so interior angle = 180° − 72° = 108°.\n\nFor shapes to tessellate, the angles meeting at a point must add up to exactly 360°. But {{360/108}} = 3.33…, which is not a whole number: three pentagons give 324° (leaving a 36° gap) and four give 432° (overlap).\n\nA regular hexagon has interior angle 120°, and {{360/120}} = 3 exactly, so three hexagons fit round a point — that is why hexagons tessellate and pentagons do not.",
        markScheme: [
          { point: "Finds the interior angle of a regular pentagon = 108°", keywords: ["108"] },
          { point: "Uses the fact that angles at a point must total 360° and shows 360 ÷ 108 is not a whole number (or 3 × 108 = 324, 4 × 108 = 432)", keywords: ["360", "3.33", "324", "432", "not a whole number", "gap", "overlap"] },
          { point: "Conclusion that Zara is wrong, contrasting with hexagons (120°, 3 × 120 = 360)", keywords: ["not correct", "wrong", "120", "3 × 120", "3 x 120", "do not tessellate", "don't tessellate"] },
        ],
        commonError: "Saying \"pentagons have an odd number of sides\" — tessellation depends on the angles meeting at a point, not on the number of sides being even (equilateral triangles tessellate).",
        difficulty: "core",
        guideRef: "polygons",
        hints: ["What must the angles meeting at a point add up to?", "Work out the interior angle of a regular pentagon (start from the exterior angle).", "Does that angle divide exactly into 360°? Compare with the hexagon's 120°."],
        strategy: "Find a pattern",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q07",
        question:
          "ABCD is a cyclic quadrilateral.\n\nAngle BAD = (2x + 15)° and angle BCD = (3x − 5)°.\n\nWork out the size of angle BCD.",
        diagram: `<svg viewBox="0 0 300 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cyclic quadrilateral ABCD; angle BAD is 2x plus 15 degrees and angle BCD is 3x minus 5 degrees"><rect width="300" height="290" fill="#ffffff"/><circle cx="150" cy="140" r="100" fill="none" stroke="#1f2937" stroke-width="2"/><polygon points="150,40 50.7,152.2 150,240 249.3,152.2" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><text x="150" y="29.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="35.9" y="158.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="150" y="259.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="264.1" y="158.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">D</text><text x="150" y="84.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2x + 15°</text><text x="150" y="204.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">3x − 5°</text></svg>`,
        answer: { type: "number", value: 97, display: "97°" },
        traps: [
          { spec: { type: "number", value: 34 }, feedback: "34 is the value of x. The question asks for angle BCD = 3x − 5." },
          { spec: { type: "number", value: 20 }, feedback: "You set the angles equal. In a cyclic quadrilateral, opposite angles add up to 180°; they are not equal." },
        ],
        solution: [
          "Opposite angles of a cyclic quadrilateral add up to 180°.",
          "(2x + 15) + (3x − 5) = 180, so 5x + 10 = 180.",
          "5x = 170, so x = 34.",
          "Angle BCD = 3 × 34 − 5 = 97°. (Check: angle BAD = 83°, and 83° + 97° = 180°.)",
        ],
        commonError: "Stopping at x = 34 instead of substituting back to find the angle.",
        difficulty: "core",
        guideRef: "circle-theorems-2",
        hints: ["A and C are opposite corners of a cyclic quadrilateral. What is true about them?", "Form an equation: (2x + 15) + (3x − 5) = 180.", "Once you have x, substitute into 3x − 5."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "angles-circle-theorems-p3-q08",
        question:
          "A, B and C are points on a circle, centre O. AB is a diameter. Angle CAB = 34°.\n\nRavi writes:\n\n    Triangle ABC is isosceles, so angle ABC = angle CAB = 34°.\n\nExplain what Ravi has done wrong, and work out the correct size of angle ABC. Give a reason for each step.",
        diagram: `<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O; AB is a diameter; C is on the circle; angle CAB is 34 degrees"><rect width="300" height="260" fill="#ffffff"/><circle cx="150" cy="140" r="100" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="50" y1="140" x2="250" y2="140" stroke="#1f2937" stroke-width="2"/><line x1="50" y1="140" x2="187.5" y2="47.3" stroke="#1f2937" stroke-width="2"/><line x1="250" y1="140" x2="187.5" y2="47.3" stroke="#1f2937" stroke-width="2"/><circle cx="150" cy="140" r="3" fill="#1f2937"/><text x="150" y="158.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="35" y="144.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="265" y="144.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="193.1" y="38.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><path d="M 84 140 A 34 34 0 0 0 78.2 121" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="99.7" y="129" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">34°</text></svg>`,
        marks: 3,
        modelAnswer:
          "Ravi is wrong: triangle ABC is not isosceles — only the radii OA, OB and OC are equal, not the sides AC and BC. (The diagram shows AC is much longer than BC.)\n\nAngle ACB = 90° because the angle in a semicircle is a right angle (AB is a diameter).\n\nAngles in a triangle add to 180°, so angle ABC = 180° − 90° − 34° = 56°.",
        markScheme: [
          { point: "Explains that triangle ABC is not isosceles (AC ≠ BC; only the radii are equal)", keywords: ["not isosceles", "radii", "radius", "not equal", "ac is not", "only oa"] },
          { point: "Angle ACB = 90° with reason: angle in a semicircle", keywords: ["90", "semicircle", "semi-circle", "right angle"] },
          { point: "Angle ABC = 56° (angles in a triangle add to 180°)", keywords: ["56"] },
        ],
        commonError: "Assuming a triangle is isosceles because it 'looks' symmetrical or because its vertices are on a circle — only radii give equal sides.",
        difficulty: "core",
        guideRef: "circle-theorems-1",
        hints: ["Which lengths in the diagram are definitely equal? Are AC and BC among them?", "AB is a diameter. What does that tell you about angle ACB?", "Use the angle sum of triangle ABC."],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q09",
        question:
          "AB is a chord of a circle, centre O. AB = 16 cm.\n\nM is the point on AB such that OM is perpendicular to AB, and OM = 6 cm.\n\nWork out the radius of the circle. Give your answer in cm.",
        diagram: `<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O; chord AB of length 16 cm; the perpendicular from O to AB meets it at M with OM 6 cm"><rect width="300" height="250" fill="#ffffff"/><circle cx="150" cy="120" r="100" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="70" y1="180" x2="230" y2="180" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="120" x2="150" y2="180" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="120" x2="230" y2="180" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="150" cy="120" r="3" fill="#1f2937"/><text x="150" y="110.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="58" y="184.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="242" y="184.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="150" y="200.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">M</text><text x="124" y="154.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6 cm</text><text x="110" y="200.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">16 cm</text><polyline points="150,170 160,170 160,180" fill="none" stroke="#1f2937" stroke-width="1.5"/></svg>`,
        answer: { type: "number", value: 10, display: "10 cm" },
        traps: [
          { spec: { type: "number", value: 17.1, tolerance: 0.05 }, feedback: "You used the whole chord (16 cm). The perpendicular from the centre **bisects** the chord, so MB = 8 cm." },
          { spec: { type: "number", value: 5.29, tolerance: 0.01 }, feedback: "OB is the hypotenuse of triangle OMB (opposite the right angle at M), so add the squares: {{6^2 + 8^2}}." },
        ],
        solution: [
          "The perpendicular from the centre to a chord bisects the chord, so MB = 16 ÷ 2 = 8 cm.",
          "Triangle OMB has a right angle at M, and OB is a radius.",
          "{{OB^2 = 6^2 + 8^2 = 36 + 64 = 100}}, so OB = 10 cm.",
        ],
        commonError: "Using the full chord length in Pythagoras instead of half of it.",
        difficulty: "core",
        guideRef: "chords",
        hints: ["What does the perpendicular from the centre do to the chord?", "Join O to B. Which triangle is right-angled, and which side is the radius?", "{{r^2 = 6^2 + 8^2}}."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q10",
        question:
          "The chords AB and CD of a circle intersect at the point P inside the circle.\n\nAP = 4 cm, PB = 9 cm and CP = 3 cm.\n\nWork out the length of the chord CD. Give your answer in cm.",
        diagram: `<svg viewBox="0 0 330 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chords AB and CD of a circle intersect at P; AP is 4 cm, PB is 9 cm and CP is 3 cm"><rect width="330" height="290" fill="#ffffff"/><circle cx="160" cy="140" r="104" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="263.4" y1="128.9" x2="137.4" y2="241.5" stroke="#1f2937" stroke-width="2"/><line x1="248.8" y1="194.2" x2="128" y2="41" stroke="#1f2937" stroke-width="2"/><circle cx="224.6" cy="163.5" r="3" fill="#1f2937"/><text x="210.6" y="170.4" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">P</text><text x="278.3" y="132.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="134.2" y="261.1" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="261.6" y="206.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="123.4" y="31.7" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">D</text><text x="234.7" y="140" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">4 cm</text><text x="189.7" y="216.4" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">9 cm</text><text x="225.7" y="191.7" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">3 cm</text></svg>`,
        answer: { type: "number", value: 15, display: "15 cm" },
        traps: [
          { spec: { type: "number", value: 12 }, feedback: "12 cm is PD. The question asks for the whole chord CD = CP + PD = 3 + 12." },
          { spec: { type: "number", value: 9.75 }, feedback: "You paired the wrong pieces (PD = {{(3 * 9)/4}}). The rule multiplies the two parts of the **same** chord: AP × PB = CP × PD." },
        ],
        solution: [
          "Intersecting chords theorem: AP × PB = CP × PD.",
          "4 × 9 = 3 × PD, so 36 = 3 × PD and PD = 12 cm.",
          "CD = CP + PD = 3 + 12 = 15 cm.",
        ],
        commonError: "Giving PD instead of the whole chord, or multiplying parts of different chords together.",
        difficulty: "core",
        guideRef: "chords",
        hints: ["Each chord is split into two parts at P. Which products are equal?", "AP × PB = CP × PD. Find PD.", "Is PD the whole of CD?"],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q11",
        question:
          "A, B and C are points on a circle, centre O. TA and TB are tangents to the circle from the point T. C is on the major arc AB.\n\nAngle ATB = 48°.\n\nWork out the size of angle ACB.",
        diagram: `<svg viewBox="0 0 360 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O; TA and TB are tangents from T; C is on the major arc; angle ATB is 48 degrees"><rect width="360" height="270" fill="#ffffff"/><circle cx="120" cy="150" r="80" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="152.5" y1="76.9" x2="316.7" y2="150" stroke="#1f2937" stroke-width="2"/><line x1="152.5" y1="223.1" x2="316.7" y2="150" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="150" x2="152.5" y2="76.9" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="150" x2="152.5" y2="223.1" stroke="#1f2937" stroke-width="2"/><circle cx="120" cy="150" r="3" fill="#1f2937"/><text x="122" y="168.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="158.6" y="68.1" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="158.6" y="241.7" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="25" y="154.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="328.7" y="154.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">T</text><path d="M 289.3 137.8 A 30 30 0 0 0 289.3 162.2" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="270.7" y="154.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">48°</text></svg>`,
        answer: { type: "number", value: 66, display: "66°" },
        traps: [
          { spec: { type: "number", value: 132 }, feedback: "132° is angle AOB, at the centre. Angle ACB is at the circumference on the same arc, so it is half of that." },
          { spec: { type: "number", value: 24 }, feedback: "You halved 48°. First find angle AOB using the quadrilateral OATB (which contains two right angles)." },
        ],
        solution: [
          "Angle OAT = angle OBT = 90° (tangent ⟂ radius).",
          "Angles in quadrilateral OATB add to 360°: angle AOB = 360° − 90° − 90° − 48° = 132°.",
          "Angle at the centre = 2 × angle at the circumference, so angle ACB = 132° ÷ 2 = 66°.",
        ],
        solutions: [
          { label: "Isosceles triangle + alternate segment", steps: ["TA = TB (tangents from a point are equal), so angle TAB = angle TBA = (180° − 48°) ÷ 2 = 66°.", "By the alternate segment theorem, angle ACB = angle TAB = 66°."] },
        ],
        commonError: "Stopping at the centre angle (132°) instead of halving to reach the circumference.",
        difficulty: "core",
        guideRef: "circle-theorems-2",
        hints: ["Join OA and OB. What size are angles OAT and OBT?", "Use the angle sum of quadrilateral OATB to find angle AOB.", "C is on the circumference standing on the same arc as angle AOB."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q12",
        question:
          "Siti's goat is tied by a 5 m rope to the corner P of a rectangular shed. The shed measures 8 m by 6 m and the goat cannot go inside or through the shed.\n\nThe goat can reach every point outside the shed within 5 m of P.\n\nWork out the area of the region the goat can reach. Give your answer in m², in terms of π.",
        diagram: `<svg viewBox="0 0 340 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangular shed 8 m by 6 m with a goat tied at corner P on a 5 m rope; the shaded region the goat can reach is three quarters of a circle"><rect width="340" height="290" fill="#ffffff"/><path d="M 150 170 L 150 70 A 100 100 0 1 0 250 170 Z" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 4"/><rect x="150" y="50" width="160" height="120" fill="#e5e7eb" stroke="#1f2937" stroke-width="2"/><text x="230" y="114.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Shed</text><text x="230" y="44.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">8 m</text><text x="322" y="114.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6 m</text><circle cx="150" cy="170" r="3" fill="#1f2937"/><text x="136" y="164.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">P</text><line x1="150" y1="170" x2="80" y2="240" stroke="#1f2937" stroke-width="1.5"/><text x="104" y="200.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">5 m</text></svg>`,
        answer: { type: "expression", expr: "75pi/4", display: "{{75/4 pi}} m² (= 18.75π m²)" },
        traps: [
          { spec: { type: "expression", expr: "25pi" }, feedback: "That is a full circle. The shed blocks one quarter of it (the right angle at its corner), so the goat reaches {{3/4}} of the circle." },
          { spec: { type: "expression", expr: "25pi/4" }, feedback: "That is one quarter of the circle — the part *inside* the shed. The goat reaches the other three quarters." },
        ],
        solution: [
          "The locus of points within 5 m of P is a circle of radius 5 m, centre P.",
          "The shed's corner takes a 90° quarter out of the circle. Both shed sides (8 m and 6 m) are longer than 5 m, so the rope never wraps round the far corners.",
          "Area = {{3/4}} × π × {{5^2}} = {{75/4 pi}} m².",
        ],
        commonError: "Using the full circle, or forgetting to check that the shed sides are longer than the rope.",
        difficulty: "core",
        guideRef: "constructions-loci",
        hints: ["What shape is the locus of points within 5 m of a fixed point?", "How much of that circle does the shed's 90° corner block?", "Are the shed's sides longer than the rope? If so, nothing wraps round a corner."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q13",
        question:
          "A, B, C and D are points on a circle. STA is the tangent to the circle at A.\n\nCA = CB and angle TAB = 58°.\n\nWork out the size of angle ADC.",
        diagram: `<svg viewBox="0 0 310 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Points A, B, C and D on a circle; STA is the tangent at A; angle TAB is 58 degrees; CA equals CB"><rect width="310" height="260" fill="#ffffff"/><circle cx="150" cy="135" r="95" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="20" y1="230" x2="290" y2="230" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="230" x2="235.4" y2="93.4" stroke="#1f2937" stroke-width="2"/><line x1="235.4" y1="93.4" x2="69.4" y2="84.7" stroke="#1f2937" stroke-width="2"/><line x1="69.4" y1="84.7" x2="150" y2="230" stroke="#1f2937" stroke-width="2"/><line x1="69.4" y1="84.7" x2="66.9" y2="181.1" stroke="#1f2937" stroke-width="2"/><line x1="66.9" y1="181.1" x2="150" y2="230" stroke="#1f2937" stroke-width="2"/><line x1="104.5" y1="160.2" x2="115" y2="154.4" stroke="#1f2937" stroke-width="1.5"/><line x1="152.1" y1="95" x2="152.7" y2="83" stroke="#1f2937" stroke-width="1.5"/><text x="150" y="249.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="248.9" y="91.7" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="56.7" y="81.6" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="53.8" y="193.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">D</text><text x="24" y="222.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">S</text><text x="286" y="222.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">T</text><path d="M 180 230 A 30 30 0 0 0 165.9 204.6" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="193.7" y="210" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">58°</text></svg>`,
        answer: { type: "number", value: 119, display: "119°" },
        traps: [
          { spec: { type: "number", value: 61 }, feedback: "61° is angle ABC. ABCD is a cyclic quadrilateral, so angle ADC is the *supplement* of angle ABC: 180° − 61°." },
          { spec: { type: "number", value: 122 }, feedback: "You used angle ADC = 180° − 58°. The 58° is angle ACB (alternate segment). The angle opposite D in the cyclic quadrilateral is angle ABC = 61°." },
        ],
        solution: [
          "Alternate segment theorem: angle ACB = angle TAB = 58°.",
          "CA = CB, so triangle ABC is isosceles: angle CBA = angle CAB = (180° − 58°) ÷ 2 = 61°.",
          "ABCD is a cyclic quadrilateral, so opposite angles add to 180°: angle ADC = 180° − 61° = 119°.",
        ],
        solutions: [
          { label: "Alternate segment theorem with chord AC", steps: ["Angle CAB = 61° (as above), so angle TAC = 58° + 61° = 119°.", "Angle TAC is between the tangent and chord AC. Its alternate segment is the one on the other side of AC — the segment containing D.", "So angle ADC = angle TAC = 119°."] },
        ],
        commonError: "Using the alternate segment theorem with the wrong chord — 58° is the angle in the segment opposite chord AB, i.e. angle ACB.",
        difficulty: "challenge",
        guideRef: "circle-theorems-2",
        hints: ["The 58° is between the tangent and chord AB. Which angle in the opposite segment equals it?", "Angle ACB = 58°. Now use CA = CB to get the base angles of triangle ABC.", "D, A, B, C form a cyclic quadrilateral. Which angle is opposite D?"],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "written",
        id: "angles-circle-theorems-p3-q14",
        question:
          "ABCD is a cyclic quadrilateral in a circle with centre O.\n\nYou may assume the theorem that the angle at the centre is twice the angle at the circumference.\n\nProve that angle ABC + angle ADC = 180°.",
        diagram: `<svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cyclic quadrilateral ABCD with centre O joined to A and C"><rect width="300" height="280" fill="#ffffff"/><circle cx="150" cy="140" r="100" fill="none" stroke="#1f2937" stroke-width="2"/><polygon points="56,174.2 115.8,46 248.5,122.6 184.2,234" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="140" x2="56" y2="174.2" stroke="#1f2937" stroke-width="1.5"/><line x1="150" y1="140" x2="248.5" y2="122.6" stroke="#1f2937" stroke-width="1.5"/><circle cx="150" cy="140" r="3" fill="#1f2937"/><text x="152" y="130.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="41.9" y="184.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="110.7" y="36.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="263.3" y="124.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="189.3" y="253" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">D</text></svg>`,
        marks: 4,
        modelAnswer:
          "Let angle ABC = x and angle ADC = y.\n\nAngle ABC stands on the arc ADC, so the angle at the centre on that arc is 2x (angle at the centre is twice the angle at the circumference).\n\nAngle ADC stands on the other arc, ABC, so the angle at the centre on that arc is 2y (same theorem).\n\nThe two angles at O, 2x and 2y, together make a full turn: 2x + 2y = 360° (angles at a point).\n\nDividing by 2: x + y = 180°, so angle ABC + angle ADC = 180°.",
        markScheme: [
          { point: "Angle at centre on arc ADC = 2 × angle ABC, with reason (angle at centre is twice angle at circumference)", keywords: ["2x", "twice", "2 ×", "double", "angle at the centre", "angle at centre"] },
          { point: "Reflex/other angle at centre = 2 × angle ADC", keywords: ["2y", "reflex", "other angle", "2 × angle adc"] },
          { point: "Uses angles at a point: 2x + 2y = 360°", keywords: ["360", "angles at a point", "full turn"] },
          { point: "Concludes x + y = 180°", keywords: ["180", "x + y = 180", "divide by 2", "÷ 2"] },
        ],
        commonError: "Using both angles at O as non-reflex — one of the two centre angles is reflex, and together they make 360°.",
        solutions: [
          { label: "Isosceles triangles (no centre theorem)", steps: ["Join OA, OB, OC, OD. Each of the four triangles OAB, OBC, OCD, ODA is isosceles (two radii).", "Call the base angles p, q, r, s respectively. The quadrilateral's angles are A = s + p, B = p + q, C = q + r, D = r + s.", "Angle sum: 2(p + q + r + s) = 360°, so p + q + r + s = 180°.", "B + D = p + q + r + s = 180°. (This needs O inside the quadrilateral; the centre-angle proof works in every case.)"] },
        ],
        difficulty: "challenge",
        guideRef: "circle-proofs",
        hints: ["Call the two angles x and y. Which arc does each stand on?", "What angle does each arc subtend at O?", "The two angles at O together go all the way round. What do they add up to?"],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "angles-circle-theorems-p3-q15",
        question:
          "T is a point outside a circle. TA is a tangent to the circle at A, and TA = 12 cm.\n\nA straight line through T meets the circle at B and C, where B lies between T and C.\n\nBC = 7 cm and TB = x cm.\n\nWork out the value of x.",
        diagram: `<svg viewBox="0 0 330 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="From an external point T, TA is a tangent of length 12 cm and a line through T meets the circle at B and C, with BC 7 cm and TB x cm"><rect width="330" height="250" fill="#ffffff"/><circle cx="90" cy="140" r="78" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="252.5" y1="203.4" x2="147.8" y2="87.7" stroke="#1f2937" stroke-width="2"/><line x1="252.5" y1="203.4" x2="44.5" y2="203.4" stroke="#1f2937" stroke-width="2"/><circle cx="90" cy="140" r="3" fill="#1f2937"/><text x="90" y="132.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="159" y="82.5" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="137.5" y="224.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="32.5" y="220.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="264.5" y="208.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">T</text><text x="210.2" y="137.7" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">12 cm</text><text x="90" y="197.6" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">7 cm</text><text x="194" y="197.6" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x cm</text></svg>`,
        answer: { type: "number", value: 9, display: "x = 9" },
        traps: [
          { spec: { type: "number", value: 20.6, tolerance: 0.05 }, feedback: "You used TB × BC = {{12^2}}. The tangent–secant rule uses the distances **from T**: TB × TC, and TC = x + 7." },
          { spec: { type: "list", values: [9, -16] }, feedback: "x is a length, so reject the negative root −16. x = 9." },
        ],
        solution: [
          "Tangent–secant theorem: {{TA^2 = TB * TC}}.",
          "TC = TB + BC = x + 7, so {{12^2 = x(x + 7)}}.",
          "{{x^2 + 7x - 144 = 0}}, which factorises as (x + 16)(x − 9) = 0.",
          "x = 9 or x = −16. A length is positive, so x = 9.",
          "Check: 9 × 16 = 144 = {{12^2}}. ✓",
        ],
        commonError: "Multiplying the inside piece BC by TB, instead of the two distances from T (TB and TC).",
        difficulty: "challenge",
        guideRef: "chords",
        hints: ["The tangent–secant rule links {{TA^2}} with two distances measured from T. Which two?", "TC = x + 7. Form an equation: {{12^2 = x(x + 7)}}.", "Solve the quadratic and reject the impossible root."],
        strategy: "Introduce a variable",
      },
    ],
  },
  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "angles-circle-theorems-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q01",
        question:
          "The diagram shows a regular pentagon and a regular hexagon. The two shapes share a side.\n\nWork out the size of the angle marked x.",
        diagram: `<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A regular pentagon and a regular hexagon share a side; angle x is the gap between them at a shared vertex"><rect width="380" height="300" fill="#ffffff"/><polygon points="190,95 190,175 113.9,199.7 66.9,135 113.9,70.3" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><polygon points="190,95 190,175 259.3,215 328.6,175 328.6,95 259.3,55" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M 210.8 83 A 24 24 0 0 0 167.2 87.6" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="185.8" y="59.4" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x</text></svg>`,
        answer: { type: "number", value: 132, display: "132°" },
        traps: [
          { spec: { type: "number", value: 48 }, feedback: "You used the exterior angles (72° + 60° = 132°) and then did 180° − 132°. Use the *interior* angles: 108° and 120°, then angles at a point add to 360°." },
          { spec: { type: "number", value: 228 }, feedback: "228° is 108° + 120°, the two interior angles together. The gap x is what is left of 360°." },
        ],
        solution: [
          "Regular pentagon: exterior angle = {{360/5}} = 72°, so interior angle = 108°.",
          "Regular hexagon: exterior angle = {{360/6}} = 60°, so interior angle = 120°.",
          "Angles at a point add to 360°: x = 360° − 108° − 120° = 132°.",
        ],
        commonError: "Mixing up interior and exterior angles of the polygons.",
        difficulty: "warmup",
        guideRef: "polygons",
        hints: ["Find the interior angle of each regular polygon first.", "Three angles meet at the shared vertex. What do angles at a point add up to?"],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q02",
        question:
          "The angles of a triangle are (x + 10)°, 2x° and (3x − 40)°.\n\nWork out the size of the largest angle of the triangle.",
        answer: { type: "number", value: 70, display: "70°" },
        traps: [
          { spec: { type: "number", value: 35 }, feedback: "35 is x. Substitute back: the angles are 45°, 70° and 65°." },
          { spec: { type: "number", value: 65 }, feedback: "3x − 40 = 65° looks biggest because it has 3x, but 2x = 70° is larger here. Always work out all three." },
        ],
        solution: [
          "Angles in a triangle add to 180°: (x + 10) + 2x + (3x − 40) = 180.",
          "6x − 30 = 180, so 6x = 210 and x = 35.",
          "The angles are 35 + 10 = 45°, 2 × 35 = 70° and 3 × 35 − 40 = 65°.",
          "Check: 45 + 70 + 65 = 180 ✓. The largest angle is 70°.",
        ],
        commonError: "Assuming the expression with the biggest coefficient gives the biggest angle.",
        difficulty: "warmup",
        guideRef: "angle-facts",
        hints: ["What do the angles of a triangle add up to?", "Collect terms: 6x − 30 = 180. Then substitute x into all three expressions."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q03",
        question:
          "The sum of the interior angles of a polygon is 1980°.\n\nWork out the number of sides of the polygon.",
        answer: { type: "number", value: 13, display: "13 sides" },
        traps: [
          { spec: { type: "number", value: 11 }, feedback: "{{1980/180}} = 11 is n − 2, the number of triangles the polygon splits into. Add 2 to get the number of sides." },
        ],
        solution: [
          "Sum of interior angles = (n − 2) × 180°.",
          "(n − 2) × 180 = 1980, so n − 2 = 11.",
          "n = 13.",
        ],
        commonError: "Forgetting to add 2 after dividing by 180.",
        difficulty: "warmup",
        guideRef: "polygons",
        hints: ["Interior angle sum = (n − 2) × 180°. Set this equal to 1980."],
        strategy: "Use the inverse",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q04",
        question:
          "A, B, C and D are points on a circle.\n\nAngle BAC = 37°.\n\nWork out the size of angle BDC.",
        diagram: `<svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Points A, B, C and D on a circle; angle BAC is 37 degrees"><rect width="300" height="280" fill="#ffffff"/><circle cx="150" cy="140" r="100" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="85.7" y1="63.4" x2="89.8" y2="219.9" stroke="#1f2937" stroke-width="2"/><line x1="85.7" y1="63.4" x2="210.2" y2="219.9" stroke="#1f2937" stroke-width="2"/><line x1="214.3" y1="63.4" x2="89.8" y2="219.9" stroke="#1f2937" stroke-width="2"/><line x1="214.3" y1="63.4" x2="210.2" y2="219.9" stroke="#1f2937" stroke-width="2"/><text x="76.1" y="56.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="223.9" y="56.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">D</text><text x="80.8" y="236.7" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="219.2" y="236.7" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><path d="M 86.6 97.4 A 34 34 0 0 0 106.9 90" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="103.5" y="116.5" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">37°</text></svg>`,
        answer: { type: "number", value: 37, display: "37°" },
        traps: [
          { spec: { type: "number", value: 74 }, feedback: "Both angles are at the circumference, not the centre. Angles in the same segment are **equal** — no doubling." },
          { spec: { type: "number", value: 143 }, feedback: "A and D are on the same side of chord BC, so this is 'angles in the same segment' (equal), not opposite angles of a cyclic quadrilateral." },
        ],
        solution: [
          "Angles BAC and BDC both stand on the chord BC, and A and D are on the same side of it.",
          "Angles in the same segment are equal.",
          "Angle BDC = 37°.",
        ],
        commonError: "Doubling (that is only for the angle at the centre).",
        difficulty: "warmup",
        guideRef: "circle-theorems-1",
        hints: ["Which chord do angle BAC and angle BDC both stand on? Are A and D on the same side of it?"],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "written",
        id: "angles-circle-theorems-p4-q05",
        question:
          "A and B are points on a circle, centre O. SAT is the tangent to the circle at A.\n\nAngle BAT = 63°.\n\nWork out the size of angle AOB.\n\nGive a reason for each stage of your working.",
        diagram: `<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O; SAT is the tangent at A; B is on the circle; angle BAT is 63 degrees"><rect width="300" height="250" fill="#ffffff"/><circle cx="150" cy="120" r="90" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="20" y1="210" x2="290" y2="210" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="210" x2="222.8" y2="67.1" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="120" x2="150" y2="210" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="120" x2="222.8" y2="67.1" stroke="#1f2937" stroke-width="2"/><circle cx="150" cy="120" r="3" fill="#1f2937"/><text x="136" y="118.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="150" y="230.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="234.9" y="63.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="26" y="202.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">S</text><text x="284" y="202.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">T</text><path d="M 180 210 A 30 30 0 0 0 163.6 183.3" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="190.9" y="189.1" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">63°</text></svg>`,
        marks: 3,
        modelAnswer:
          "Angle OAT = 90° because the tangent is perpendicular to the radius.\n\nSo angle OAB = 90° − 63° = 27°.\n\nOA = OB (radii), so triangle OAB is isosceles and angle OBA = 27° (base angles of an isosceles triangle are equal).\n\nAngle AOB = 180° − 27° − 27° = 126° (angles in a triangle add up to 180°).",
        markScheme: [
          { point: "Angle OAB = 27° with reason: tangent perpendicular to radius (angle OAT = 90°)", keywords: ["27", "90", "perpendicular", "tangent", "radius"] },
          { point: "Angle OBA = 27° with reason: isosceles triangle / OA = OB are radii / base angles equal", keywords: ["isosceles", "radii", "base angles", "oa = ob"] },
          { point: "Angle AOB = 126° with reason: angles in a triangle sum to 180°", keywords: ["126", "angles in a triangle", "180"] },
        ],
        solutions: [
          { label: "Alternate segment + centre theorem", steps: ["Let C be any point on the major arc AB. By the alternate segment theorem, angle ACB = angle BAT = 63°.", "Angle at the centre is twice the angle at the circumference: angle AOB = 2 × 63° = 126°."] },
        ],
        commonError: "Writing reasons like \"because it's a tangent\" — the examiner wants the full phrase: \"the tangent is perpendicular to the radius\".",
        difficulty: "core",
        guideRef: "circle-theorems-2",
        hints: ["What angle does the radius OA make with the tangent?", "Angle OAB = 90° − 63°. What kind of triangle is OAB?", "Use the angle sum of triangle OAB — and write a reason for each step."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q06",
        question:
          "The chords AB and CD of a circle intersect at E.\n\nAE = 4 cm, EB = 6 cm, CE = x cm and ED = (x + 5) cm.\n\nWork out the length of the chord CD. Give your answer in cm.",
        diagram: `<svg viewBox="0 0 320 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Chords AB and CD intersect at E; AE is 4 cm, EB is 6 cm, CE is x cm and ED is x plus 5 cm"><rect width="320" height="290" fill="#ffffff"/><circle cx="160" cy="140" r="102" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="124.6" y1="44.4" x2="85.7" y2="209.9" stroke="#1f2937" stroke-width="2"/><line x1="59.5" y1="122.7" x2="241.1" y2="78.1" stroke="#1f2937" stroke-width="2"/><circle cx="109" cy="110.6" r="3" fill="#1f2937"/><text x="95" y="111.5" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">E</text><text x="119.3" y="35.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="74.7" y="225" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="44.7" y="125.1" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="253" y="73.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">D</text></svg>`,
        answer: { type: "number", value: 11, display: "11 cm" },
        traps: [
          { spec: { type: "number", value: 3 }, feedback: "x = 3 is CE. CD = CE + ED = x + (x + 5) = 11 cm." },
          { spec: { type: "number", value: 2.5 }, feedback: "You set CE + ED equal to AE + EB. The rule is about **products**: AE × EB = CE × ED." },
        ],
        solution: [
          "Intersecting chords: AE × EB = CE × ED.",
          "4 × 6 = x(x + 5), so {{x^2 + 5x - 24 = 0}}.",
          "(x + 8)(x − 3) = 0, so x = 3 (a length cannot be −8).",
          "CD = x + (x + 5) = 3 + 8 = 11 cm.",
        ],
        commonError: "Adding the chord parts instead of multiplying them.",
        difficulty: "core",
        guideRef: "chords",
        hints: ["Which products are equal when two chords cross inside a circle?", "Form and solve {{x(x + 5) = 24}}.", "Is x the whole chord CD?"],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q07",
        question:
          "A, B and C are points on a circle, centre O.\n\nAngle OCA = 28°.\n\nWork out the size of angle ABC.",
        diagram: `<svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O; A, B and C on the circle; angle OCA is 28 degrees"><rect width="300" height="280" fill="#ffffff"/><circle cx="150" cy="140" r="100" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="61.7" y1="186.9" x2="150" y2="40" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="40" x2="238.3" y2="186.9" stroke="#1f2937" stroke-width="2"/><line x1="61.7" y1="186.9" x2="238.3" y2="186.9" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="140" x2="61.7" y2="186.9" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="140" x2="238.3" y2="186.9" stroke="#1f2937" stroke-width="2"/><circle cx="150" cy="140" r="3" fill="#1f2937"/><text x="150" y="130.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="48.5" y="198.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="251.5" y="198.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="150" y="29.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><path d="M 203 168.2 A 40 40 0 0 0 198.3 186.9" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="182" y="177.1" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">28°</text></svg>`,
        answer: { type: "number", value: 62, display: "62°" },
        traps: [
          { spec: { type: "number", value: 124 }, feedback: "124° is angle AOC, at the centre. Angle ABC is at the circumference on the same arc, so halve it." },
          { spec: { type: "number", value: 56 }, feedback: "Angle ABC is not twice angle OCA. Find angle AOC first using the isosceles triangle OAC, then halve it." },
        ],
        solution: [
          "OA = OC (radii), so triangle OAC is isosceles: angle OAC = angle OCA = 28°.",
          "Angle AOC = 180° − 28° − 28° = 124°.",
          "Angle at the centre is twice the angle at the circumference: angle ABC = 124° ÷ 2 = 62°.",
        ],
        commonError: "Missing that OA and OC are radii, so triangle OAC is isosceles.",
        difficulty: "core",
        guideRef: "circle-theorems-1",
        hints: ["OA and OC are both radii. What kind of triangle is OAC?", "Find angle AOC.", "Angle ABC stands on the same arc AC as angle AOC."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q08",
        question:
          "A and B are points on a circle, centre O. TA and TB are tangents to the circle.\n\nAngle TAB = 71°.\n\nWork out the size of angle AOB.",
        diagram: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O; TA and TB are tangents; angle TAB is 71 degrees"><rect width="380" height="260" fill="#ffffff"/><circle cx="110" cy="140" r="75" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="134.4" y1="69.1" x2="340.4" y2="140" stroke="#1f2937" stroke-width="2"/><line x1="134.4" y1="210.9" x2="340.4" y2="140" stroke="#1f2937" stroke-width="2"/><line x1="134.4" y1="69.1" x2="134.4" y2="210.9" stroke="#1f2937" stroke-width="2"/><line x1="110" y1="140" x2="134.4" y2="69.1" stroke="#1f2937" stroke-width="1.5"/><line x1="110" y1="140" x2="134.4" y2="210.9" stroke="#1f2937" stroke-width="1.5"/><circle cx="110" cy="140" r="3" fill="#1f2937"/><text x="96" y="144.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="139.3" y="59.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="139.3" y="230" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="352.4" y="144.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">T</text><path d="M 159 77.6 A 26 26 0 0 1 134.4 95.1" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="160" y="109.1" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">71°</text></svg>`,
        answer: { type: "number", value: 142, display: "142°" },
        traps: [
          { spec: { type: "number", value: 38 }, feedback: "38° is angle ATB. Angle AOB is in the quadrilateral OATB: 360° − 90° − 90° − 38°." },
          { spec: { type: "number", value: 19 }, feedback: "19° is angle OAB (= 90° − 71°). Triangle OAB is isosceles, so angle AOB = 180° − 2 × 19°." },
        ],
        solution: [
          "TA = TB (tangents from an external point are equal), so angle TBA = angle TAB = 71°.",
          "Angle ATB = 180° − 71° − 71° = 38°.",
          "Angle OAT = angle OBT = 90° (tangent ⟂ radius).",
          "In quadrilateral OATB: angle AOB = 360° − 90° − 90° − 38° = 142°.",
        ],
        solutions: [
          { label: "Through triangle OAB", steps: ["Angle OAB = 90° − 71° = 19° (tangent ⟂ radius).", "OA = OB, so angle OBA = 19° too.", "Angle AOB = 180° − 19° − 19° = 142°. (Quicker — only one triangle.)"] },
        ],
        commonError: "Treating 71° as the angle at T.",
        difficulty: "core",
        guideRef: "circle-theorems-2",
        hints: ["What do you know about the two tangents TA and TB?", "What angle does each tangent make with its radius?", "Use triangle OAB: angle OAB = 90° − 71°."],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q09",
        question:
          "A straight fence AB is 10 m long. Hana wants to mark the region of the field that is within 3 m of the fence.\n\nWork out the area of this region. Give your answer in m² correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 360 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A straight fence AB of length 10 m; the region of points within 3 m of the fence is a rectangle with a semicircle at each end"><rect width="360" height="200" fill="#ffffff"/><path d="M 105 40 L 255 40 A 60 60 0 0 1 255 160 L 105 160 A 60 60 0 0 1 105 40 Z" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="105" y1="100" x2="255" y2="100" stroke="#1f2937" stroke-width="3"/><circle cx="105" cy="100" r="3" fill="#1f2937"/><circle cx="255" cy="100" r="3" fill="#1f2937"/><text x="97" y="118.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="263" y="118.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="180" y="92.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10 m</text><line x1="255" y1="100" x2="255" y2="40" stroke="#1f2937" stroke-width="1.5"/><text x="268" y="74.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">3 m</text></svg>`,
        answer: { type: "number", value: 88.3, tolerance: 0.05, display: "88.3 m²" },
        traps: [
          { spec: { type: "number", value: 60 }, feedback: "60 m² is only the rectangle beside the fence. Points near the ends A and B are within 3 m too — that adds a semicircle at each end." },
          { spec: { type: "number", value: 116.5, tolerance: 0.1 }, feedback: "You added a full circle at each end. Each end has a **semicircle**; the two semicircles together make one circle of radius 3 m." },
        ],
        solution: [
          "The region is a rectangle 10 m by 6 m (3 m each side of the fence) with a semicircle of radius 3 m at each end.",
          "Rectangle: 10 × 6 = 60 m².",
          "Two semicircles = one circle: {{pi * 3^2 = 9 pi = 28.27...}} m².",
          "Total = 60 + 28.27… = 88.27… = 88.3 m² (3 s.f.).",
        ],
        commonError: "Drawing the locus as a rectangle and forgetting the rounded ends.",
        difficulty: "core",
        guideRef: "constructions-loci",
        hints: ["Sketch it: what does 'within 3 m of a line segment' look like near the middle, and near the ends?", "Middle part: a rectangle 10 m by 6 m. Ends: two semicircles of radius 3 m.", "Two semicircles make one circle."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q10",
        question:
          "A, B and C are points on a circle. SAT is the tangent to the circle at A.\n\nAngle SAC = 54° and angle BAT = 67°.\n\nWork out the size of angle ABC.",
        diagram: `<svg viewBox="0 0 300 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Points A, B and C on a circle; SAT is the tangent at A; angle SAC is 54 degrees and angle BAT is 67 degrees"><rect width="300" height="260" fill="#ffffff"/><circle cx="150" cy="130" r="95" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="15" y1="225" x2="285" y2="225" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="225" x2="218.3" y2="64" stroke="#1f2937" stroke-width="2"/><line x1="218.3" y1="64" x2="59.6" y2="100.6" stroke="#1f2937" stroke-width="2"/><line x1="59.6" y1="100.6" x2="150" y2="225" stroke="#1f2937" stroke-width="2"/><text x="150" y="244.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="45.4" y="100.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="229.1" y="58.5" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="20" y="217.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">S</text><text x="280" y="217.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">T</text><path d="M 120 225 A 30 30 0 0 1 132.4 200.7" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="107.2" y="207.4" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">54°</text><path d="M 180 225 A 30 30 0 0 0 161.7 197.4" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="190" y="202.7" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">67°</text></svg>`,
        answer: { type: "number", value: 54, display: "54°" },
        traps: [
          { spec: { type: "number", value: 67 }, feedback: "67° is the angle between the tangent and chord **AB**, so it equals angle ACB. For angle ABC you need the angle between the tangent and chord **AC**: 54°." },
          { spec: { type: "number", value: 59 }, feedback: "59° is angle BAC (angles on the straight line SAT). Angle ABC is found with the alternate segment theorem." },
        ],
        solution: [
          "Angle ABC stands on chord AC, and B is in the segment on the opposite side of AC from the angle SAC.",
          "Alternate segment theorem: angle between tangent and chord = angle in the alternate segment.",
          "So angle ABC = angle SAC = 54°.",
          "Check: angle ACB = angle BAT = 67°, angle BAC = 180° − 54° − 67° = 59°, and 54° + 67° + 59° = 180° ✓.",
        ],
        commonError: "Matching the tangent–chord angle with the wrong angle in the triangle — pair each chord with the angle that stands on it.",
        difficulty: "core",
        guideRef: "circle-theorems-2",
        hints: ["Angle ABC stands on which chord?", "Which tangent–chord angle uses that same chord?", "Alternate segment theorem: those two angles are equal."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "written",
        id: "angles-circle-theorems-p4-q11",
        question:
          "A, B and C are points on a circle, centre O. The line CO is extended to D, as shown.\n\nProve that angle AOB = 2 × angle ACB.",
        diagram: `<svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O; A, B and C on the circle; CO is extended to D"><rect width="300" height="280" fill="#ffffff"/><circle cx="150" cy="140" r="100" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="132.6" y1="41.5" x2="68.1" y2="197.4" stroke="#1f2937" stroke-width="2"/><line x1="132.6" y1="41.5" x2="231.9" y2="197.4" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="140" x2="68.1" y2="197.4" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="140" x2="231.9" y2="197.4" stroke="#1f2937" stroke-width="2"/><line x1="132.6" y1="41.5" x2="167.4" y2="238.5" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="150" cy="140" r="3" fill="#1f2937"/><text x="164" y="140.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="130" y="31.6" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="55.8" y="210.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="244.2" y="210.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="170" y="258.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">D</text></svg>`,
        marks: 4,
        modelAnswer:
          "Let angle OCA = x and angle OCB = y, so angle ACB = x + y.\n\nOA = OC (radii), so triangle OAC is isosceles and angle OAC = x.\n\nAngle AOD is an exterior angle of triangle OAC, so angle AOD = x + x = 2x (exterior angle = sum of the two interior opposite angles).\n\nIn the same way, OB = OC, so angle OBC = y and angle BOD = 2y.\n\nAngle AOB = angle AOD + angle BOD = 2x + 2y = 2(x + y) = 2 × angle ACB.",
        markScheme: [
          { point: "Identifies isosceles triangles using radii: angle OAC = angle OCA (and OBC = OCB)", keywords: ["isosceles", "radii", "radius", "oa = oc", "ob = oc"] },
          { point: "Angle AOD = 2x using the exterior angle (or 180 − (180 − 2x))", keywords: ["2x", "exterior angle", "180 - 2x", "180 − 2x"] },
          { point: "Angle BOD = 2y similarly", keywords: ["2y"] },
          { point: "Concludes angle AOB = 2x + 2y = 2(x + y) = 2 × angle ACB", keywords: ["2(x + y)", "2(x+y)", "2x + 2y", "2 × angle acb", "twice"] },
        ],
        commonError: "Assuming the result in the proof (e.g. writing \"angle AOD = 2x because the angle at the centre is twice…\") — that is circular.",
        difficulty: "core",
        guideRef: "circle-proofs",
        hints: ["Label angle OCA = x and angle OCB = y. Which lengths are radii?", "Triangle OAC is isosceles. What is angle OAC? What is the exterior angle AOD?", "Do the same on the other side, then add."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q12",
        question:
          "Each interior angle of a regular polygon is 7 times the size of each exterior angle.\n\nWork out the number of sides of the polygon.",
        answer: { type: "number", value: 16, display: "16 sides" },
        traps: [
          { spec: { type: "number", value: 22.5 }, feedback: "22.5° is the exterior angle. The number of sides is {{360/22.5}}." },
          { spec: { type: "number", value: 14 }, feedback: "You took the exterior angle as {{180/7}}°. The interior is 7 *times* the exterior, so together they make 8 equal parts of 180°: e = {{180/8}} = 22.5°, giving n = 16." },
        ],
        solution: [
          "Let the exterior angle be e. Then the interior angle is 7e.",
          "Interior + exterior = 180°: 7e + e = 180, so 8e = 180 and e = 22.5°.",
          "Number of sides = {{360/22.5}} = 16.",
        ],
        commonError: "Forgetting that the interior and exterior angles at a vertex add up to 180°.",
        difficulty: "core",
        guideRef: "polygons",
        hints: ["Call the exterior angle e. What is the interior angle?", "Interior and exterior angles at a vertex add up to 180°: 8e = 180.", "Exterior angles add to 360°."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q13",
        question:
          "A, B and C are points on a circle, centre O, with radius 7 cm.\n\nAngle ACB = 50°.\n\nCalculate the length of the chord AB.\n\nGive your answer in cm correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 300 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O radius 7 cm; A, B and C on the circle; angle ACB is 50 degrees"><rect width="300" height="280" fill="#ffffff"/><circle cx="150" cy="140" r="100" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="73.4" y1="204.3" x2="150" y2="40" stroke="#1f2937" stroke-width="2"/><line x1="226.6" y1="204.3" x2="150" y2="40" stroke="#1f2937" stroke-width="2"/><line x1="73.4" y1="204.3" x2="226.6" y2="204.3" stroke="#1f2937" stroke-width="2"/><line x1="150" y1="140" x2="226.6" y2="204.3" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="150" cy="140" r="3" fill="#1f2937"/><text x="138" y="138.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="194" y="158.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">7 cm</text><text x="61.9" y="218.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="238.1" y="218.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="150" y="29.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><path d="M 135.6 70.8 A 34 34 0 0 0 164.4 70.8" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="150" y="96.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50°</text></svg>`,
        answer: { type: "number", value: 10.7, tolerance: 0.05, display: "10.7 cm" },
        traps: [
          { spec: { type: "number", value: 5.92, tolerance: 0.01 }, feedback: "You used angle AOB = 50°. The angle at the centre is **twice** the angle at the circumference: 100°." },
          { spec: { type: "number", value: 5.36, tolerance: 0.01 }, feedback: "{{7 sin 50°}} is only half the chord (from A to the midpoint). Double it." },
        ],
        solution: [
          "Angle AOB = 2 × 50° = 100° (angle at the centre is twice the angle at the circumference).",
          "Triangle AOB is isosceles with OA = OB = 7 cm. The perpendicular from O bisects AB and the angle AOB.",
          "Half of AB = 7 sin 50° = 5.362…",
          "AB = 2 × 5.362… = 10.72… = 10.7 cm (3 s.f.).",
        ],
        solutions: [
          { label: "Cosine rule in triangle AOB", steps: ["{{AB^2 = 7^2 + 7^2 - 2 * 7 * 7 * cos 100°}}", "= 98 + 17.017… = 115.017…", "AB = 10.72… = 10.7 cm. (Same answer; the right-angle split avoids the negative cosine.)"] },
        ],
        commonError: "Using 50° as the angle at the centre.",
        difficulty: "challenge",
        guideRef: "circle-theorems-1",
        hints: ["You know the radius. Join OA and OB — what is angle AOB?", "Triangle AOB is isosceles with two sides of 7 cm and angle 100° between them.", "Split it into two right-angled triangles (or use the cosine rule)."],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "written",
        id: "angles-circle-theorems-p4-q14",
        question:
          "A, B and C are points on a circle, centre O. TA is the tangent to the circle at A. TBOC is a straight line.\n\nAngle ATO = 30°.\n\nShow that TB = OB.\n\nGive reasons for your working.",
        diagram: `<svg viewBox="0 0 330 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O; TA is the tangent at A; the straight line TBOC passes through the centre; angle ATO is 30 degrees"><rect width="330" height="220" fill="#ffffff"/><circle cx="230" cy="140" r="70" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="90" y1="140" x2="300" y2="140" stroke="#1f2937" stroke-width="2"/><line x1="90" y1="140" x2="195" y2="79.4" stroke="#1f2937" stroke-width="2"/><line x1="230" y1="140" x2="195" y2="79.4" stroke="#1f2937" stroke-width="2"/><circle cx="230" cy="140" r="3" fill="#1f2937"/><text x="232" y="160.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="80" y="148.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">T</text><text x="154" y="160.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="312" y="148.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="187.5" y="71.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><path d="M 124 140 A 34 34 0 0 0 119.4 123" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="140.2" y="130.7" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30°</text></svg>`,
        marks: 4,
        modelAnswer:
          "Angle OAT = 90° (the tangent is perpendicular to the radius).\n\nAngle AOT = 180° − 90° − 30° = 60° (angles in a triangle).\n\nOA = OB (radii), so triangle OAB is isosceles with apex angle 60°; its base angles are (180° − 60°) ÷ 2 = 60°, so triangle OAB is equilateral and AB = OB.\n\nAngle ABT = 180° − 60° = 120° (angles on a straight line), so angle BAT = 180° − 120° − 30° = 30° (angles in a triangle).\n\nAngle BAT = angle BTA = 30°, so triangle ABT is isosceles and TB = AB = OB.",
        markScheme: [
          { point: "Angle OAT = 90° (tangent perpendicular to radius) and angle AOT = 60°", keywords: ["90", "perpendicular", "60"] },
          { point: "Triangle OAB is equilateral (OA = OB radii, angle 60°), so AB = OB", keywords: ["equilateral", "radii", "ab = ob", "oa = ob"] },
          { point: "Angle BAT = 30° (via angle ABT = 120° or angle OAB = 60°, 90° − 60°)", keywords: ["30", "120", "bat"] },
          { point: "Triangle ABT is isosceles so TB = AB = OB", keywords: ["isosceles", "tb = ab", "tb = ob"] },
        ],
        solutions: [
          { label: "Trigonometry", steps: ["Angle OAT = 90° (tangent ⟂ radius), so triangle OAT is right-angled with hypotenuse OT.", "{{sin 30° = (OA)/(OT)}}, and sin 30° = {{1/2}}, so OT = 2 × OA = 2r.", "TB = OT − OB = 2r − r = r = OB. (Shorter, but it relies on knowing sin 30° exactly.)"] },
        ],
        commonError: "Writing TB = OB because 'it looks like it' — a 'show that' needs every step justified.",
        difficulty: "challenge",
        guideRef: "circle-theorems-2",
        hints: ["Join OA. What angle does the radius make with the tangent?", "Find angle AOT. Now look at triangle OAB — what are its angles?", "Find angle BAT and look at triangle ABT. (Alternatively: what is sin 30°?)"],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "angles-circle-theorems-p4-q15",
        question:
          "A and B are points on a circle, centre O. TA is a tangent to the circle at A, and TA = 15 cm.\n\nThe straight line TBC passes through O, where B and C are on the circle. TB = 9 cm.\n\nWork out the radius of the circle. Give your answer in cm.",
        diagram: `<svg viewBox="0 0 290 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O; TA is a tangent of length 15 cm; the line TBC passes through O with TB 9 cm"><rect width="290" height="240" fill="#ffffff"/><circle cx="100" cy="140" r="64" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="236" y1="140" x2="36" y2="140" stroke="#1f2937" stroke-width="2"/><line x1="236" y1="140" x2="130.1" y2="83.5" stroke="#1f2937" stroke-width="2"/><circle cx="100" cy="140" r="3" fill="#1f2937"/><text x="100" y="160.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">O</text><text x="248" y="144.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">T</text><text x="174" y="160.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="24" y="144.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="137.2" y="75.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="197.1" y="108" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">15 cm</text><text x="200" y="160.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">9 cm</text></svg>`,
        answer: { type: "number", value: 8, display: "8 cm" },
        traps: [
          { spec: { type: "number", value: 16 }, feedback: "16 cm is BC, the diameter. The radius is half of it." },
          { spec: { type: "number", value: 25 }, feedback: "25 cm is TC. Subtract TB to get the diameter BC = 16 cm, then halve." },
        ],
        solution: [
          "Tangent–secant theorem: {{TA^2 = TB * TC}}.",
          "{{15^2 = 9 * TC}}, so 225 = 9 × TC and TC = 25 cm.",
          "BC is a diameter (the line passes through O): BC = TC − TB = 25 − 9 = 16 cm.",
          "Radius = 16 ÷ 2 = 8 cm.",
        ],
        solutions: [
          { label: "Pythagoras with the tangent", steps: ["Angle OAT = 90° (tangent ⟂ radius). Let the radius be r, so OA = r and OT = 9 + r.", "{{(9 + r)^2 = r^2 + 15^2}}", "{{81 + 18r + r^2 = r^2 + 225}}, so 18r = 144 and r = 8 cm.", "Both methods agree; the Pythagoras route works even if you forget the tangent–secant rule."] },
        ],
        commonError: "Stopping at TC or at the diameter instead of finding the radius.",
        difficulty: "challenge",
        guideRef: "chords",
        hints: ["Which theorem links a tangent length with a line through T that cuts the circle twice?", "{{15^2 = 9 * TC}}. What is BC, and why is it special here?", "Alternatively: join OA, call the radius r and use Pythagoras in triangle OAT."],
        strategy: "Draw a diagram",
      },
    ],
  },
];
