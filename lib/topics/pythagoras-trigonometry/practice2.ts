// ---------------------------------------------------------------------------
// Pythagoras & Right-Angled Trigonometry — Practice Papers 3 and 4.
// Paper 3: mixed practice — fluency, spot-the-error, converse, 3D, H+ triples/exact values.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher questions on this topic.
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "pythagoras-trigonometry-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q01",
        question:
          "The diagram shows a right-angled triangle.\n\nCalculate the length of the side marked x.\n\nGive your answer in cm correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 260 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle with shorter sides 6.5 cm (horizontal) and 8.3 cm (vertical); the hypotenuse is marked x"><rect width="260" height="220" fill="#ffffff"/><polygon points="60,190 190,190 60,24" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><polyline points="60,176 74,176 74,190" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="125" y="208" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6.5 cm</text><text x="52" y="110" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">8.3 cm</text><text x="134" y="100" font-size="14" font-family="sans-serif" font-style="italic" fill="#1f2937">x</text></svg>`,
        answer: { type: "number", value: 10.5, display: "10.5 cm" },
        traps: [
          { spec: { type: "number", value: 14.8 }, feedback: "You added the lengths (6.5 + 8.3). Pythagoras adds the *squares*: {{x^2 = 6.5^2 + 8.3^2}}." },
          { spec: { type: "number", value: 5.16 }, feedback: "You subtracted the squares. x is opposite the right angle, so it is the hypotenuse — the longest side — and you add the squares." },
        ],
        solution: [
          "x is opposite the right angle, so it is the hypotenuse.",
          "{{x^2 = 6.5^2 + 8.3^2 = 42.25 + 68.89 = 111.14}}.",
          "{{x = sqrt(111.14) = 10.542...}}",
          "x = 10.5 cm (3 s.f.).",
        ],
        commonError: "Subtracting the squares when the missing side is the hypotenuse.",
        difficulty: "warmup",
        guideRef: "pythagoras",
        hints: ["Which side is opposite the right angle?", "Hypotenuse: square, **add**, square root."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q02",
        question:
          "In triangle PQR, angle PQR = 90°, PR = 9 cm and QR = 5.4 cm.\n\nCalculate the size of angle QPR.\n\nGive your answer correct to 1 decimal place.",
        answer: { type: "number", value: 36.9, tolerance: 0.05, display: "36.9°" },
        traps: [
          { spec: { type: "number", value: 53.1, tolerance: 0.05 }, feedback: "That is angle PRQ. From P, QR is the **opposite** side, so use {{sin(QPR) = 5.4/9}}." },
          { spec: { type: "number", value: 31, tolerance: 0.1 }, feedback: "You used tan. PR is the hypotenuse (opposite the right angle at Q), so this is SOH: {{sin(QPR) = 5.4/9}}." },
        ],
        solution: [
          "Label from angle P: QR = 5.4 is opposite, PR = 9 is the hypotenuse.",
          "SOH: {{sin(QPR) = 5.4/9 = 0.6}}.",
          "{{QPR = sin^(-1)(0.6) = 36.869...°}}",
          "Angle QPR = 36.9° (1 d.p.).",
        ],
        commonError: "Labelling the sides from the wrong angle, which gives the other acute angle (53.1°).",
        difficulty: "warmup",
        guideRef: "sohcahtoa",
        hints: ["Sketch the triangle with the right angle at Q. Stand at P: which side is opposite?", "You know the opposite and the hypotenuse — that's SOH."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q03",
        question:
          "A ladder 6 m long leans against a vertical wall on horizontal ground. The ladder makes an angle of 72° with the ground.\n\nHow far up the wall does the ladder reach?\n\nGive your answer in metres correct to 3 significant figures.",
        answer: { type: "number", value: 5.71, display: "5.71 m" },
        traps: [
          { spec: { type: "number", value: 1.85, tolerance: 0.01 }, feedback: "6 cos 72° is the distance of the foot of the ladder from the wall. The height is *opposite* the 72° angle, so use sin." },
          { spec: { type: "number", value: 18.5, tolerance: 0.05 }, feedback: "Tan needs the opposite and adjacent. The ladder (6 m) is the hypotenuse, so use {{h = 6 sin 72°}}." },
        ],
        solution: [
          "The ladder is the hypotenuse (6 m). The height up the wall is opposite the 72° angle.",
          "SOH: h = 6 sin 72° = 5.706...",
          "h = 5.71 m (3 s.f.).",
        ],
        commonError: "Using cos and finding the distance along the ground instead of the height.",
        difficulty: "warmup",
        guideRef: "sohcahtoa",
        hints: ["Sketch it: the ladder is the hypotenuse. Where is the 72° angle?", "The height is opposite 72°, so h = 6 × sin 72°."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q04",
        question:
          "A right-angled triangle has hypotenuse 12 cm and one of its shorter sides 8 cm.\n\nFind the exact length of the third side. Give your answer as a surd in the form {{a sqrt(b)}}, where a and b are integers and b is as small as possible.",
        answer: { type: "expression", expr: "4sqrt(5)", form: "surd", display: "{{4 sqrt(5)}} cm" },
        traps: [
          { spec: { type: "expression", expr: "4sqrt(13)" }, feedback: "You added the squares: {{144 + 64 = 208}}. 12 cm is the hypotenuse, so the missing side is *shorter*: {{12^2 - 8^2 = 80}}." },
        ],
        solution: [
          "12 is the hypotenuse, so subtract: {{x^2 = 12^2 - 8^2 = 144 - 64 = 80}}.",
          "{{x = sqrt(80) = sqrt(16 * 5) = 4 sqrt(5)}} cm.",
        ],
        commonError: "Leaving the answer as {{sqrt(80)}} — 80 has the square factor 16, so it is not simplified.",
        difficulty: "warmup",
        guideRef: "pythagoras",
        hints: ["Is the missing side the hypotenuse or a shorter side?", "{{x^2 = 144 - 64}}. Now look for the largest square factor of 80."],
        strategy: "Find a square factor",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q05",
        question:
          "Arjun starts at point S. He walks 3.2 km due north and then 5.8 km due east to point F.\n\nWork out the bearing of S from F.\n\nGive your answer to the nearest degree.",
        answer: { type: "number", value: 241, display: "241°" },
        traps: [
          { spec: { type: "number", value: 61 }, feedback: "061° is the bearing of F from S. You want the bearing of S **from F** — stand at F and face north. Add 180°: 241°." },
          { spec: { type: "number", value: 209 }, feedback: "{{tan^(-1)(3.2/5.8) = 28.9°}} is measured from the east–west line, not from north. Measure from north at S: {{tan^(-1)(5.8/3.2) = 61.1°}}, then reverse it." },
        ],
        solution: [
          "At S the angle between north and SF satisfies {{tan theta = 5.8/3.2}}, so θ = 61.11...°.",
          "So the bearing of F from S is 061°.",
          "The back bearing is 61.1° + 180° = 241.1°.",
          "Bearing of S from F = 241° (nearest degree).",
        ],
        solutions: [
          { label: "Measure directly at F", steps: ["At F, S is to the south-west. Turn from north clockwise through east (90°) and south (180°).", "The extra angle past south towards west is {{tan^(-1)(5.8/3.2) = 61.1°}}, measured from the southward line.", "180° + 61.1° = 241.1°, so 241°."] },
        ],
        commonError: "Giving the bearing of F from S instead of the bearing of S from F.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["Draw it: north 3.2 km, then east 5.8 km. Put a north line at both S and F.", "Find the angle at S between north and the line SF using tan.", "A back bearing differs by 180°."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q06",
        question:
          "Mei stands on level ground 45 m from the base of a vertical HDB block. The angle of elevation of the top of the block from the ground where she stands is 58°.\n\nCalculate the height of the block.\n\nGive your answer in metres correct to 3 significant figures.",
        answer: { type: "number", value: 72.0, display: "72.0 m" },
        traps: [
          { spec: { type: "number", value: 28.1, tolerance: 0.05 }, feedback: "You divided by tan 58°. The height is opposite 58° and 45 m is adjacent, so {{h = 45 tan 58°}}." },
          { spec: { type: "number", value: 38.2, tolerance: 0.05 }, feedback: "45 m is not the hypotenuse — it is the horizontal distance (adjacent). Use tan, not sin." },
        ],
        solution: [
          "Angle of elevation is measured up from the horizontal at Mei.",
          "Height = opposite, 45 m = adjacent, so TOA: {{tan 58° = h/45}}.",
          "h = 45 tan 58° = 72.015...",
          "h = 72.0 m (3 s.f.).",
        ],
        commonError: "Writing 72 instead of 72.0 is fine for the value, but 3 s.f. means 72.0 — and check you multiplied, not divided.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["Sketch: horizontal ground, vertical block, line of sight from Mei to the top.", "Which two sides are involved — opposite, adjacent, hypotenuse?", "{{tan 58° = h/45}}. Rearrange for h."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q07",
        question:
          "In the diagram, A, D and C lie on a straight line and BD is perpendicular to AC.\n\nAB = 11 cm, angle BAD = 40° and angle BCD = 55°.\n\nCalculate the length of DC.\n\nGive your answer in cm correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 320 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with B at the top and D on AC directly below B. AB is 11 cm, angle BAD is 40 degrees, angle BCD is 55 degrees, BD is perpendicular to AC"><rect width="320" height="220" fill="#ffffff"/><polygon points="30,180 271,180 182,53" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><line x1="182" y1="53" x2="182" y2="180" stroke="#1f2937" stroke-width="2"/><polyline points="182,168 194,168 194,180" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 62 180 A 32 32 0 0 0 54.5 159.4" fill="none" stroke="#1f2937"/><text x="68" y="172" font-size="12" font-family="sans-serif" fill="#1f2937">40°</text><path d="M 245 180 A 26 26 0 0 1 256.1 158.7" fill="none" stroke="#1f2937"/><text x="222" y="172" font-size="12" font-family="sans-serif" fill="#1f2937">55°</text><text x="22" y="196" font-size="13" font-family="sans-serif" fill="#1f2937">A</text><text x="178" y="198" font-size="13" font-family="sans-serif" fill="#1f2937">D</text><text x="273" y="196" font-size="13" font-family="sans-serif" fill="#1f2937">C</text><text x="178" y="45" font-size="13" font-family="sans-serif" fill="#1f2937">B</text><text x="90" y="108" font-size="13" font-family="sans-serif" fill="#1f2937">11 cm</text></svg>`,
        answer: { type: "number", value: 4.95, tolerance: 0.005, display: "4.95 cm" },
        traps: [
          { spec: { type: "number", value: 10.1, tolerance: 0.05 }, feedback: "You multiplied BD by tan 55°. In triangle BDC, BD is *opposite* 55° and DC is *adjacent*, so {{DC = BD/tan 55°}}." },
          { spec: { type: "number", value: 5.90, tolerance: 0.005 }, feedback: "You used BD = 11 cos 40°. BD is opposite the 40° angle, so BD = 11 sin 40° = 7.07 cm." },
        ],
        solution: [
          "Triangle ABD: AB = 11 is the hypotenuse, BD is opposite 40°.",
          "BD = 11 sin 40° = 7.0706... cm (keep this in your calculator).",
          "Triangle BDC: BD is opposite 55°, DC is adjacent.",
          "{{tan 55° = BD/DC}}, so {{DC = 7.0706.../tan 55° = 4.9509...}}",
          "DC = 4.95 cm (3 s.f.).",
        ],
        commonError: "Rounding BD early, or using AB = 11 in the second triangle — the shared side BD is the bridge.",
        difficulty: "core",
        guideRef: "sohcahtoa",
        hints: ["Two right-angled triangles share one side. Which?", "Find BD first from triangle ABD.", "In triangle BDC you know the opposite (BD) and want the adjacent (DC): TOA."],
        strategy: "Work through a shared side",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "pythagoras-trigonometry-p3-q08",
        question:
          "A right-angled triangle has the right angle between sides of 7 cm and 10 cm. Kenji wants the angle x that is opposite the 7 cm side. Here is his working.\n\n    tan x = 10 ÷ 7 = 1.428...\n    x = 55.0°\n\nExplain what Kenji has done wrong, and work out the correct value of x to 1 decimal place.",
        marks: 3,
        modelAnswer:
          "Kenji has the ratio upside down: {{tan x = opposite/adjacent}}, and from angle x the opposite side is 7 cm and the adjacent side is 10 cm. (His 55.0° is actually the other acute angle of the triangle.)\n\nCorrect: {{tan x = 7/10 = 0.7}}, so {{x = tan^(-1)(0.7) = 34.99...°}} = 35.0° (1 d.p.).\n\nCheck: 35.0° + 55.0° = 90°, as the two acute angles must be.",
        markScheme: [
          { point: "States that tan = opposite ÷ adjacent and Kenji used adjacent ÷ opposite (fraction upside down / sides swapped)", keywords: ["upside down", "opposite / adjacent", "opposite over adjacent", "swapped", "wrong way round", "7/10", "7 ÷ 10"] },
          { point: "Identifies 7 cm as opposite x and 10 cm as adjacent", keywords: ["7 is opposite", "opposite is 7", "adjacent is 10", "10 is adjacent", "opposite 7"] },
          { point: "Correct answer x = 35.0°", keywords: ["35.0", "35"] },
        ],
        commonError: "Labelling sides from the wrong angle — always stand at the angle you want before choosing O, A, H.",
        difficulty: "core",
        guideRef: "sohcahtoa",
        hints: ["Stand at angle x. Which side is directly across from it?", "{{tan = opposite/adjacent}}. Which number goes on top?", "What do the two acute angles of a right-angled triangle add up to? Does that explain 55.0°?"],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q09",
        question:
          "A cuboid storage box measures 12 cm by 5 cm by 9 cm.\n\nWhat is the length of the longest straight pencil that will fit inside the box?\n\nGive your answer in cm correct to 3 significant figures.",
        answer: { type: "number", value: 15.8, tolerance: 0.05, display: "15.8 cm" },
        traps: [
          { spec: { type: "number", value: 13 }, feedback: "13 cm is the diagonal of the 12 × 5 base. The longest pencil goes from a bottom corner to the opposite *top* corner, so include the 9 cm height too." },
          { spec: { type: "number", value: 15 }, feedback: "15 cm is the diagonal of the 12 × 9 face only. The space diagonal uses all three dimensions: {{sqrt(12^2 + 5^2 + 9^2)}}." },
        ],
        solution: [
          "Base diagonal: {{d^2 = 12^2 + 5^2 = 169}}, so d = 13 cm.",
          "Space diagonal: {{L^2 = 13^2 + 9^2 = 169 + 81 = 250}}.",
          "{{L = sqrt(250) = 15.811...}} cm, so 15.8 cm (3 s.f.).",
        ],
        solutions: [
          { label: "3D Pythagoras in one step", steps: ["{{L = sqrt(a^2 + b^2 + c^2) = sqrt(144 + 25 + 81) = sqrt(250)}}.", "L = 15.8 cm (3 s.f.). Same answer — the two-step method is just this formula unpacked."] },
        ],
        commonError: "Stopping at a face diagonal instead of the space diagonal.",
        difficulty: "core",
        guideRef: "three-d",
        hints: ["The longest pencil runs corner to opposite corner through the inside of the box.", "Find the diagonal of the base first.", "That base diagonal and the 9 cm height make a right-angled triangle."],
        strategy: "Find the right right-angled triangle",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q10",
        question:
          "The diagram shows a cuboid ABCDEFGH with AB = 8 cm, BC = 6 cm and CG = 5 cm.\n\nCalculate the size of the angle between the diagonal AG and the base ABCD.\n\nGive your answer correct to 1 decimal place.",
        diagram: `<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cuboid ABCDEFGH. Base ABCD with AB 8 cm along the front and BC 6 cm going back; vertical edge CG is 5 cm. The diagonal AG and the base diagonal AC are drawn."><rect width="300" height="250" fill="#ffffff"/><polygon points="40,220 200,220 200,120 40,120" fill="#c7d2fe" fill-opacity="0.5" stroke="#1f2937" stroke-width="2"/><polygon points="200,220 242,178 242,78 200,120" fill="#c7d2fe" fill-opacity="0.3" stroke="#1f2937" stroke-width="2"/><polygon points="40,120 200,120 242,78 82,78" fill="#c7d2fe" fill-opacity="0.2" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="220" x2="82" y2="178" stroke="#334155" stroke-dasharray="5,4"/><line x1="82" y1="178" x2="242" y2="178" stroke="#334155" stroke-dasharray="5,4"/><line x1="82" y1="178" x2="82" y2="78" stroke="#334155" stroke-dasharray="5,4"/><line x1="40" y1="220" x2="242" y2="178" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,3"/><line x1="40" y1="220" x2="242" y2="78" stroke="#dc2626" stroke-width="2"/><text x="28" y="236" font-size="13" font-family="sans-serif" fill="#1f2937">A</text><text x="198" y="238" font-size="13" font-family="sans-serif" fill="#1f2937">B</text><text x="248" y="184" font-size="13" font-family="sans-serif" fill="#1f2937">C</text><text x="86" y="174" font-size="13" font-family="sans-serif" fill="#1f2937">D</text><text x="26" y="118" font-size="13" font-family="sans-serif" fill="#1f2937">E</text><text x="196" y="114" font-size="13" font-family="sans-serif" fill="#1f2937">F</text><text x="246" y="74" font-size="13" font-family="sans-serif" fill="#1f2937">G</text><text x="72" y="72" font-size="13" font-family="sans-serif" fill="#1f2937">H</text><text x="120" y="238" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">8 cm</text><text x="226" y="212" font-size="12" font-family="sans-serif" fill="#1f2937">6 cm</text><text x="248" y="132" font-size="12" font-family="sans-serif" fill="#1f2937">5 cm</text></svg>`,
        answer: { type: "number", value: 26.6, tolerance: 0.05, display: "26.6°" },
        traps: [
          { spec: { type: "number", value: 32, tolerance: 0.05 }, feedback: "{{tan^(-1)(5/8)}} uses AB, but the line on the base directly under AG is AC, not AB. AC = 10 cm." },
          { spec: { type: "number", value: 63.4, tolerance: 0.05 }, feedback: "That is the angle between AG and the vertical edge CG. The angle with the base is at A: {{tan^(-1)(5/10)}}." },
        ],
        solution: [
          "The projection of AG onto the base is AC, so the angle we want is angle GAC in the right-angled triangle ACG (right angle at C).",
          "{{AC^2 = 8^2 + 6^2 = 100}}, so AC = 10 cm.",
          "{{tan(GAC) = CG/AC = 5/10 = 0.5}}.",
          "{{GAC = tan^(-1)(0.5) = 26.565...°}} = 26.6° (1 d.p.).",
        ],
        solutions: [
          { label: "Using the space diagonal", steps: ["{{AG = sqrt(8^2 + 6^2 + 5^2) = sqrt(125)}}.", "{{sin(GAC) = 5/sqrt(125)}}, so GAC = 26.6°. Same angle, but tan with AC = 10 is cleaner."] },
        ],
        commonError: "Using an edge (AB or AD) instead of the base diagonal AC as the adjacent side.",
        difficulty: "core",
        guideRef: "three-d",
        hints: ["Drop a line from G straight down to the base. Where does it land?", "The angle between AG and the base is the angle between AG and AC.", "Find AC with Pythagoras, then use tan in triangle ACG."],
        strategy: "Find the right right-angled triangle",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q11",
        question:
          "An isosceles triangle has two sides of length 9 cm and a base of length 8 cm.\n\nCalculate the area of the triangle.\n\nGive your answer in cm² correct to 3 significant figures.",
        answer: { type: "number", value: 32.2, tolerance: 0.05, display: "32.2 cm²" },
        traps: [
          { spec: { type: "number", value: 36 }, feedback: "9 cm is the sloping side, not the height. Find the perpendicular height with Pythagoras first." },
          { spec: { type: "number", value: 64.5, tolerance: 0.05 }, feedback: "You forgot the ½ in ½ × base × height." },
          { spec: { type: "number", value: 16.5, tolerance: 0.05 }, feedback: "You used the whole base (8 cm) in Pythagoras. The line of symmetry halves the base: each right-angled triangle has base 4 cm, so height = {{sqrt(9^2 - 4^2)}}." },
        ],
        solution: [
          "The perpendicular from the apex bisects the base, making two right-angled triangles with hypotenuse 9 cm and base 4 cm.",
          "{{h^2 = 9^2 - 4^2 = 81 - 16 = 65}}, so {{h = sqrt(65) = 8.062...}} cm.",
          "Area = ½ × 8 × 8.062... = 32.249...",
          "Area = 32.2 cm² (3 s.f.).",
        ],
        commonError: "Using the slant side 9 cm as the height.",
        difficulty: "core",
        guideRef: "pythagoras",
        hints: ["What do you need for the area of a triangle that you don't have yet?", "Draw the line of symmetry. It meets the base at right angles at its midpoint.", "Height² = 9² − 4²."],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "pythagoras-trigonometry-p3-q12",
        question:
          "Siti measures a triangular garden bed. Its sides are 2.8 m, 4.5 m and 5.3 m.\n\nShow that the garden bed has a right angle, and state which side is opposite it.",
        marks: 3,
        modelAnswer:
          "The longest side is 5.3 m, so test whether it could be the hypotenuse.\n\n{{2.8^2 + 4.5^2 = 7.84 + 20.25 = 28.09}}\n\n{{5.3^2 = 28.09}}\n\nThe squares of the two shorter sides add up to the square of the longest side, so by the converse of Pythagoras' theorem the triangle is right-angled. The right angle is opposite the 5.3 m side.",
        markScheme: [
          { point: "Squares and adds the two shorter sides: 7.84 + 20.25 = 28.09", keywords: ["7.84", "20.25", "28.09"] },
          { point: "Squares the longest side: 5.3² = 28.09 and compares", keywords: ["5.3^2", "5.3²", "28.09", "equal", "same"] },
          { point: "Concludes right-angled (converse of Pythagoras) with the right angle opposite the 5.3 m side", keywords: ["converse", "right-angled", "right angle", "opposite 5.3", "5.3 m", "hypotenuse"] },
        ],
        commonError: "Starting from 'a² + b² = c²' as if it is already true — you must calculate both sides separately and *then* compare.",
        difficulty: "core",
        guideRef: "pythagoras",
        hints: ["If there is a right angle, which side must be the hypotenuse?", "Work out {{2.8^2 + 4.5^2}} and {{5.3^2}} separately.", "If they match, the converse of Pythagoras says…"],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "pythagoras-trigonometry-p3-q13",
        question:
          "(a) Prove that for any integer n ≥ 2, the three numbers {{2n}}, {{n^2 - 1}} and {{n^2 + 1}} form a Pythagorean triple.\n\n(b) Use this to write down a Pythagorean triple that contains the number 20.",
        marks: 4,
        modelAnswer:
          "(a) The largest of the three is {{n^2 + 1}}, so show that the other two squared add up to its square.\n\n{{(2n)^2 + (n^2 - 1)^2 = 4n^2 + n^4 - 2n^2 + 1 = n^4 + 2n^2 + 1}}\n\n{{(n^2 + 1)^2 = n^4 + 2n^2 + 1}}\n\nThese are identical for every n, so {{(2n)^2 + (n^2 - 1)^2 = (n^2 + 1)^2}}. For integer n ≥ 2 all three numbers are positive integers, so they form a Pythagorean triple.\n\n(b) 2n = 20 gives n = 10: the triple is 20, 99, 101. (Check: 400 + 9801 = 10201 = 101².)",
        markScheme: [
          { point: "Expands (2n)² + (n² − 1)² correctly to n⁴ + 2n² + 1", keywords: ["4n^2", "n^4", "2n^2", "n^4 + 2n^2 + 1", "n^4+2n^2+1"] },
          { point: "Expands (n² + 1)² to n⁴ + 2n² + 1", keywords: ["(n^2 + 1)^2", "n^4 + 2n^2 + 1", "n^4+2n^2+1"] },
          { point: "Concludes both sides equal for all n, so a Pythagorean triple (positive integers)", keywords: ["equal", "same", "identical", "all n", "any n", "integers", "triple"] },
          { point: "(b) n = 10 giving 20, 99, 101", keywords: ["n = 10", "n=10", "99", "101"] },
        ],
        commonError: "Checking a few values of n (n = 2, 3, 4) and calling that a proof — examples are not a proof for *every* n.",
        difficulty: "challenge",
        guideRef: "pythagorean-triples",
        hints: ["Which of the three is the largest? That must play the role of the hypotenuse.", "Expand {{(n^2 - 1)^2}} carefully: it is {{n^4 - 2n^2 + 1}}.", "For (b), which of the three expressions can equal 20 with a whole-number n?"],
        strategy: "Prove it algebraically",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q14",
        question:
          "In the diagram, B, D and C lie on a straight line and AB is perpendicular to BC.\n\nAB = 6 cm, angle ADB = 45° and angle ACB = 30°.\n\nWithout using a calculator, find the exact length of DC.\n\nGive your answer in the form {{a sqrt(b) + c}}, where a, b and c are integers.",
        diagram: `<svg viewBox="0 0 330 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right angle at B with A vertically above B. D and C lie on the horizontal line from B. AB is 6 cm, angle ADB is 45 degrees and angle ACB is 30 degrees"><rect width="330" height="230" fill="#ffffff"/><polygon points="30,190 290,190 30,40" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><line x1="30" y1="40" x2="180" y2="190" stroke="#1f2937" stroke-width="2"/><polyline points="30,176 44,176 44,190" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 156 190 A 24 24 0 0 0 163 173" fill="none" stroke="#1f2937"/><text x="140" y="182" font-size="12" font-family="sans-serif" fill="#1f2937">45°</text><path d="M 254 190 A 36 36 0 0 1 258.8 172" fill="none" stroke="#1f2937"/><text x="226" y="184" font-size="12" font-family="sans-serif" fill="#1f2937">30°</text><text x="16" y="206" font-size="13" font-family="sans-serif" fill="#1f2937">B</text><text x="176" y="208" font-size="13" font-family="sans-serif" fill="#1f2937">D</text><text x="292" y="206" font-size="13" font-family="sans-serif" fill="#1f2937">C</text><text x="24" y="34" font-size="13" font-family="sans-serif" fill="#1f2937">A</text><text x="10" y="120" font-size="12" font-family="sans-serif" fill="#1f2937">6</text></svg>`,
        answer: { type: "expression", expr: "6sqrt(3)-6", form: "surd", display: "{{6 sqrt(3) - 6}} cm" },
        traps: [
          { spec: { type: "expression", expr: "2sqrt(3)-6" }, feedback: "{{BC = 6/tan 30°}}, not 6 × tan 30°. Since {{tan 30° = 1/sqrt(3)}}, BC = {{6 sqrt(3)}}." },
          { spec: { type: "expression", expr: "6sqrt(3)" }, feedback: "{{6 sqrt(3)}} is the whole of BC. DC = BC − BD, and BD = 6 cm." },
        ],
        solution: [
          "Triangle ABD: angle ADB = 45°, so it is an isosceles right-angled triangle and BD = AB = 6 cm.",
          "Triangle ABC: {{tan 30° = AB/BC}}, so {{BC = 6/tan 30° = 6/(1/sqrt(3)) = 6 sqrt(3)}} cm.",
          "DC = BC − BD = {{6 sqrt(3) - 6}} cm.",
        ],
        solutions: [
          { label: "Using the 30-60-90 triangle", steps: ["In triangle ABC the angles are 30°, 60°, 90°, so the sides are in the ratio {{1 : sqrt(3) : 2}}.", "AB is opposite 30° (the '1'), so BC (opposite 60°) = {{6 sqrt(3)}}.", "BD = 6 from the 45° triangle, so DC = {{6 sqrt(3) - 6}}."] },
        ],
        commonError: "Using tan 30° = √3 (that's tan 60°). Learn: {{tan 30° = 1/sqrt(3) = sqrt(3)/3}}.",
        difficulty: "challenge",
        guideRef: "exact-values",
        hints: ["What is special about a right-angled triangle with a 45° angle?", "Find BC in triangle ABC using the exact value of tan 30°.", "DC = BC − BD."],
        strategy: "Work through a shared side",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "pythagoras-trigonometry-p3-q15",
        question:
          "A square-based pyramid VABCD has a horizontal base ABCD of side 10 cm. The vertex V is directly above the centre of the base, and each sloping edge (VA, VB, VC, VD) is 13 cm.\n\nCalculate the angle between the edge VA and the base.\n\nGive your answer correct to 1 decimal place.",
        answer: { type: "number", value: 57.0, tolerance: 0.06, display: "57.0°" },
        traps: [
          { spec: { type: "number", value: 67.4, tolerance: 0.05 }, feedback: "{{cos^(-1)(5/13)}} uses half the *side* (5 cm). The foot of V is the centre of the square, and the distance from A to the centre is half the *diagonal*: {{5 sqrt(2)}} cm." },
          { spec: { type: "number", value: 33.0, tolerance: 0.06 }, feedback: "That is the angle between VA and the vertical. The angle with the base is at A." },
        ],
        solution: [
          "Let O be the centre of the base, so V is directly above O and triangle VOA has a right angle at O.",
          "Diagonal AC = {{sqrt(10^2 + 10^2) = 10 sqrt(2)}}, so {{AO = 5 sqrt(2) = 7.071...}} cm.",
          "{{cos(VAO) = AO/VA = (5 sqrt(2))/13 = 0.5439...}}",
          "Angle VAO = 57.048...° = 57.0° (1 d.p.).",
        ],
        solutions: [
          { label: "Height first", steps: ["{{VO^2 = 13^2 - (5 sqrt(2))^2 = 169 - 50 = 119}}, so {{VO = sqrt(119)}}.", "{{tan(VAO) = sqrt(119)/(5 sqrt(2))}}, giving 57.0°.", "Longer — going straight to cos with the hypotenuse VA saves a step."] },
        ],
        commonError: "Using half the side length (5 cm) instead of half the diagonal for AO.",
        difficulty: "challenge",
        guideRef: "three-d",
        hints: ["V sits above the centre O of the square. Which right-angled triangle contains VA and the base?", "AO is half of the diagonal AC. Find AC with Pythagoras.", "In triangle VOA you know the hypotenuse VA and the adjacent AO: use cos."],
        strategy: "Find the right right-angled triangle",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "pythagoras-trigonometry-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q01",
        question:
          "ABC is a right-angled triangle. Angle ABC = 90°, AB = 8.5 cm and AC = 12.4 cm.\n\nCalculate the size of angle BAC.\n\nGive your answer correct to 1 decimal place.",
        answer: { type: "number", value: 46.7, tolerance: 0.05, display: "46.7°" },
        traps: [
          { spec: { type: "number", value: 43.3, tolerance: 0.05 }, feedback: "That is angle ACB. From A, AB is the **adjacent** side, so use {{cos(BAC) = 8.5/12.4}}." },
          { spec: { type: "number", value: 34.4, tolerance: 0.05 }, feedback: "You used tan. Tan needs opposite and adjacent, but AC is the hypotenuse (opposite the right angle at B), so use cos." },
        ],
        solution: [
          "From angle A: AB = 8.5 is adjacent, AC = 12.4 is the hypotenuse.",
          "CAH: {{cos(BAC) = 8.5/12.4 = 0.6854...}}",
          "{{BAC = cos^(-1)(0.6854...) = 46.726...°}}",
          "Angle BAC = 46.7° (1 d.p.).",
        ],
        commonError: "Choosing the ratio before labelling the sides from the angle you want.",
        difficulty: "warmup",
        guideRef: "sohcahtoa",
        hints: ["Sketch the triangle with the right angle at B. Label O, A, H from angle A.", "Adjacent and hypotenuse → CAH."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q02",
        question:
          "A school field is a rectangle 85 m long and 48 m wide. Wei Ling walks from one corner to the opposite corner. She can walk straight across the field, or along two edges.\n\nHow much shorter is the straight route?\n\nGive your answer in metres correct to 3 significant figures.",
        answer: { type: "number", value: 35.4, tolerance: 0.05, display: "35.4 m" },
        traps: [
          { spec: { type: "number", value: 97.6, tolerance: 0.05 }, feedback: "97.6 m is the length of the diagonal. The question asks how much *shorter* it is than going round: 133 − 97.6." },
          { spec: { type: "number", value: 70.1, tolerance: 0.05 }, feedback: "You subtracted the squares. The diagonal is the hypotenuse, so add: {{sqrt(85^2 + 48^2)}}." },
        ],
        solution: [
          "Along the edges: 85 + 48 = 133 m.",
          "Diagonal: {{d = sqrt(85^2 + 48^2) = sqrt(7225 + 2304) = sqrt(9529) = 97.616...}} m.",
          "Difference: 133 − 97.616... = 35.383...",
          "The straight route is 35.4 m shorter (3 s.f.).",
        ],
        commonError: "Stopping after finding the diagonal — read the last line of the question again.",
        difficulty: "warmup",
        guideRef: "pythagoras",
        hints: ["Work out the two route lengths separately.", "The diagonal is the hypotenuse of a right-angled triangle with sides 85 m and 48 m."],
        strategy: "Read the question twice",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q03",
        question: "The bearing of Q from P is 128°.\n\nWork out the bearing of P from Q.",
        answer: { type: "number", value: 308, display: "308°" },
        traps: [
          { spec: { type: "number", value: 52 }, feedback: "180° − 128° = 52° is not a bearing reversal. A back bearing is the original ± 180°: 128° + 180° = 308°." },
          { spec: { type: "number", value: 232 }, feedback: "360° − 128° = 232° reflects the direction, it doesn't reverse it. Add 180°: 308°." },
        ],
        solution: [
          "To reverse a direction, turn through 180°.",
          "128° is less than 180°, so add: 128° + 180° = 308°.",
          "Check with a sketch: Q is south-east of P, so P is north-west of Q — and 308° is north-west. ✓",
        ],
        commonError: "Subtracting from 180° or 360° instead of adding/subtracting 180°.",
        difficulty: "warmup",
        guideRef: "bearings-elevation",
        hints: ["Draw north lines at P and Q. The two north lines are parallel.", "Back bearing = bearing ± 180°."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q04",
        question: "A is the point (−3, 4) and B is the point (5, −2).\n\nWork out the length of the line segment AB.",
        answer: { type: "number", value: 10, display: "10 units" },
        traps: [
          { spec: { type: "number", value: 14 }, feedback: "You added the horizontal and vertical distances (8 + 6). Use Pythagoras: {{sqrt(8^2 + 6^2)}}." },
          { spec: { type: "number", value: 6.32, tolerance: 0.01 }, feedback: "Careful with the negatives: the horizontal change is 5 − (−3) = 8, not 2. Then {{sqrt(8^2 + 6^2) = 10}}." },
        ],
        solution: [
          "Horizontal change: 5 − (−3) = 8. Vertical change: −2 − 4 = −6.",
          "{{AB^2 = 8^2 + (-6)^2 = 64 + 36 = 100}}.",
          "AB = 10 units.",
        ],
        commonError: "Subtracting a negative wrongly: 5 − (−3) is 8, not 2.",
        difficulty: "warmup",
        guideRef: "pythagoras",
        hints: ["Sketch A and B and complete a right-angled triangle with horizontal and vertical sides.", "How far across? How far down? Then Pythagoras."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q05",
        question:
          "Ethan stands at the top of a vertical cliff on Sentosa, 38 m above sea level. He sees a boat out at sea. The angle of depression of the boat from the top of the cliff is 24°.\n\nCalculate the horizontal distance from the foot of the cliff to the boat.\n\nGive your answer in metres correct to 3 significant figures.",
        answer: { type: "number", value: 85.3, tolerance: 0.05, display: "85.3 m" },
        traps: [
          { spec: { type: "number", value: 16.9, tolerance: 0.05 }, feedback: "You found 38 tan 24°, which puts the 24° against the cliff face. The angle of depression is measured *down from the horizontal*; it equals the angle of elevation at the boat (alternate angles), so {{d = 38/tan 24°}}." },
        ],
        solution: [
          "The angle of depression from the cliff top equals the angle of elevation from the boat (alternate angles): 24°.",
          "At the boat: the cliff height 38 m is opposite 24° and the distance d is adjacent.",
          "{{tan 24° = 38/d}}, so {{d = 38/tan 24° = 85.349...}}",
          "d = 85.3 m (3 s.f.).",
        ],
        commonError: "Putting the 24° between the cliff face and the line of sight — depression is always measured from the horizontal.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["Draw a horizontal line from the top of the cliff. The 24° goes between that line and the line of sight.", "Move the angle to the boat using alternate angles.", "Opposite = 38, want adjacent: {{d = 38/tan 24°}}."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "written",
        id: "pythagoras-trigonometry-p4-q06",
        question:
          "ABCD is a quadrilateral.\n\nAngle ABC = 90° and angle ACD = 90°.\nAB = 7 cm, BC = 9 cm and angle CAD = 34°.\n\nShow that AD = 13.8 cm, correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quadrilateral ABCD. Right angle at B between AB of 7 cm and BC of 9 cm. Diagonal AC. Right angle at C between AC and CD. Angle CAD is 34 degrees. Diagram not drawn accurately."><rect width="320" height="230" fill="#ffffff"/><polygon points="30,74 30,200 192,200 277,91" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><line x1="30" y1="74" x2="192" y2="200" stroke="#1f2937" stroke-width="2"/><polyline points="30,186 44,186 44,200" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="181,191 190,180 201,189" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 74 108 A 56 56 0 0 0 85.9 70" fill="none" stroke="#1f2937"/><text x="90" y="98" font-size="12" font-family="sans-serif" fill="#1f2937">34°</text><text x="18" y="70" font-size="13" font-family="sans-serif" fill="#1f2937">A</text><text x="16" y="214" font-size="13" font-family="sans-serif" fill="#1f2937">B</text><text x="190" y="216" font-size="13" font-family="sans-serif" fill="#1f2937">C</text><text x="282" y="88" font-size="13" font-family="sans-serif" fill="#1f2937">D</text><text x="8" y="140" font-size="12" font-family="sans-serif" fill="#1f2937">7 cm</text><text x="100" y="216" font-size="12" font-family="sans-serif" fill="#1f2937">9 cm</text><text x="210" y="226" font-size="10" font-family="sans-serif" fill="#334155">Not drawn accurately</text></svg>`,
        marks: 3,
        modelAnswer:
          "Triangle ABC: {{AC^2 = 7^2 + 9^2 = 49 + 81 = 130}}, so {{AC = sqrt(130) = 11.401...}} cm.\n\nTriangle ACD has a right angle at C, AC is adjacent to the 34° angle and AD is the hypotenuse.\n\n{{cos 34° = AC/AD}}, so {{AD = sqrt(130)/cos 34° = 11.401.../0.8290... = 13.753...}} cm.\n\nAD = 13.8 cm correct to 3 significant figures.",
        markScheme: [
          { point: "Finds AC using Pythagoras: AC² = 7² + 9² = 130, AC = 11.40…", keywords: ["130", "sqrt(130)", "11.4", "11.40"] },
          { point: "Uses cos 34° = AC ÷ AD (or equivalent) in triangle ACD", keywords: ["cos 34", "cos34", "/ cos", "÷ cos", "adjacent"] },
          { point: "Gets AD = 13.75… (more than 3 s.f.) so 13.8", keywords: ["13.75", "13.753", "13.8"] },
        ],
        commonError: "Writing only '13.8' — in a 'show that', you must show a more accurate value (13.75…) before rounding.",
        difficulty: "core",
        guideRef: "sohcahtoa",
        hints: ["Which side do the two triangles share?", "Find AC first, using triangle ABC.", "In triangle ACD, AC is adjacent to 34° and AD is the hypotenuse."],
        strategy: "Work through a shared side",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "written",
        id: "pythagoras-trigonometry-p4-q07",
        question:
          "The lengths, in cm, of the sides of a right-angled triangle are x, x + 7 and x + 8.\n\n(a) Show that {{x^2 - 2x - 15 = 0}}.\n\n(b) Hence find the value of x.",
        marks: 4,
        modelAnswer:
          "(a) The longest side, x + 8, is the hypotenuse, so by Pythagoras\n\n{{x^2 + (x + 7)^2 = (x + 8)^2}}\n\n{{x^2 + x^2 + 14x + 49 = x^2 + 16x + 64}}\n\n{{2x^2 + 14x + 49 - x^2 - 16x - 64 = 0}}\n\n{{x^2 - 2x - 15 = 0}} as required.\n\n(b) (x − 5)(x + 3) = 0, so x = 5 or x = −3. A length cannot be negative, so x = 5. (The sides are 5, 12 and 13 cm.)",
        markScheme: [
          { point: "Sets up x² + (x + 7)² = (x + 8)² with x + 8 as the hypotenuse", keywords: ["(x + 8)^2", "(x+8)^2", "hypotenuse", "x^2 + (x + 7)^2", "x^2+(x+7)^2"] },
          { point: "Expands both brackets correctly", keywords: ["14x + 49", "14x+49", "16x + 64", "16x+64"] },
          { point: "Collects terms to reach x² − 2x − 15 = 0", keywords: ["x^2 - 2x - 15", "x^2-2x-15", "= 0"] },
          { point: "(b) Factorises / solves and rejects the negative root: x = 5", keywords: ["(x - 5)(x + 3)", "(x-5)(x+3)", "x = 5", "x=5", "negative", "-3"] },
        ],
        commonError: "Writing {{(x + 7)^2 = x^2 + 49}} — the middle term 14x is forgotten.",
        difficulty: "core",
        guideRef: "pythagoras",
        hints: ["Which expression is the hypotenuse?", "Write Pythagoras with the expressions, then expand each bracket fully (three terms each).", "For (b), factorise. Can a length be negative?"],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q08",
        question:
          "A rectangular phone screen is 3.4 cm wider than it is tall. Its diagonal is 17 cm.\n\nThe height of the screen is h cm. Find h.\n\nGive your answer correct to 3 significant figures.",
        answer: { type: "number", value: 10.2, tolerance: 0.05, display: "h = 10.2 cm" },
        traps: [
          { spec: { type: "number", value: 13.6, tolerance: 0.05 }, feedback: "13.6 cm is the *width* (h + 3.4). The question asks for the height h." },
        ],
        solution: [
          "Pythagoras on half the rectangle: {{h^2 + (h + 3.4)^2 = 17^2}}.",
          "{{h^2 + h^2 + 6.8h + 11.56 = 289}}, so {{2h^2 + 6.8h - 277.44 = 0}}.",
          "Divide by 2: {{h^2 + 3.4h - 138.72 = 0}}.",
          "{{h = (-3.4 + sqrt(3.4^2 + 4 * 138.72))/2 = (-3.4 + sqrt(566.44))/2 = (-3.4 + 23.8)/2 = 10.2}}",
          "(The other root is negative, so reject it.) h = 10.2 cm; the width is 13.6 cm.",
        ],
        solutions: [
          { label: "Spot a triple", steps: ["17 = 5 × 3.4, so try the 3-4-5 triangle scaled by 3.4: sides 10.2, 13.6, 17.", "13.6 − 10.2 = 3.4 ✓, so h = 10.2 cm. Spotting the triple saves the quadratic — but you must check the difference fits."] },
        ],
        commonError: "Expanding {{(h + 3.4)^2}} as {{h^2 + 11.56}}, missing 6.8h.",
        difficulty: "core",
        guideRef: "pythagoras",
        hints: ["Write the width in terms of h.", "The diagonal splits the screen into two right-angled triangles: {{h^2 + (h + 3.4)^2 = 17^2}}.", "Expand, rearrange to = 0 and use the quadratic formula. Reject the negative root."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q09",
        question:
          "A boat leaves harbour H and sails 18 km on a bearing of 040° to a buoy A. It then sails 25 km on a bearing of 130° to an island B.\n\nCalculate the distance HB.\n\nGive your answer in km correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Boat route: from H, 18 km on bearing 040 degrees to A, then 25 km on bearing 130 degrees to B. North lines drawn at H and A. HB is drawn dashed."><rect width="300" height="240" fill="#ffffff"/><line x1="80" y1="200" x2="80" y2="110" stroke="#334155" stroke-width="1.5"/><polygon points="80,104 76,114 84,114" fill="#334155"/><text x="76" y="100" font-size="12" font-family="sans-serif" fill="#334155">N</text><line x1="138" y1="131" x2="138" y2="51" stroke="#334155" stroke-width="1.5"/><polygon points="138,45 134,55 142,55" fill="#334155"/><text x="134" y="41" font-size="12" font-family="sans-serif" fill="#334155">N</text><line x1="80" y1="200" x2="138" y2="131" stroke="#1f2937" stroke-width="2"/><line x1="138" y1="131" x2="234" y2="211" stroke="#1f2937" stroke-width="2"/><line x1="80" y1="200" x2="234" y2="211" stroke="#dc2626" stroke-width="2" stroke-dasharray="6,4"/><circle cx="80" cy="200" r="3" fill="#1f2937"/><circle cx="138" cy="131" r="3" fill="#1f2937"/><circle cx="234" cy="211" r="3" fill="#1f2937"/><text x="64" y="216" font-size="13" font-family="sans-serif" fill="#1f2937">H</text><text x="146" y="128" font-size="13" font-family="sans-serif" fill="#1f2937">A</text><text x="240" y="222" font-size="13" font-family="sans-serif" fill="#1f2937">B</text><text x="84" y="160" font-size="12" font-family="sans-serif" fill="#1f2937">18 km</text><text x="190" y="160" font-size="12" font-family="sans-serif" fill="#1f2937">25 km</text><text x="86" y="186" font-size="11" font-family="sans-serif" fill="#1f2937">40°</text><text x="144" y="68" font-size="11" font-family="sans-serif" fill="#1f2937">130°</text></svg>`,
        answer: { type: "number", value: 30.8, tolerance: 0.05, display: "30.8 km" },
        traps: [
          { spec: { type: "number", value: 43 }, feedback: "18 + 25 is the distance *sailed*. HB is the straight-line distance — the hypotenuse of the triangle HAB." },
          { spec: { type: "number", value: 17.3, tolerance: 0.05 }, feedback: "HB is the longest side (opposite the right angle at A), so add the squares: {{sqrt(18^2 + 25^2)}}." },
        ],
        solution: [
          "Find angle HAB. The back bearing of H from A is 040° + 180° = 220°.",
          "Angle HAB = 220° − 130° = 90°, so triangle HAB is right-angled at A.",
          "{{HB^2 = 18^2 + 25^2 = 324 + 625 = 949}}",
          "{{HB = sqrt(949) = 30.805...}} km, so 30.8 km (3 s.f.).",
        ],
        solutions: [
          { label: "Angle via co-interior angles", steps: ["The north lines at H and A are parallel, so the angle between AH and north at A is 180° − 40° = 140° (co-interior), measured anticlockwise from north.", "AB is 130° clockwise from north, so angle HAB = 360° − 140° − 130° = 90°.", "Then Pythagoras as before: HB = 30.8 km."] },
        ],
        commonError: "Assuming the angle at A without proving it — always find it from the bearings first.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["Before using Pythagoras or trig, find angle HAB.", "What is the bearing of H from A? Compare it with 130°.", "Angle HAB turns out to be 90°. Now which theorem?"],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q10",
        question:
          "Using the same journey as before: a boat sails from harbour H 18 km on a bearing of 040° to A, then 25 km on a bearing of 130° to B. Angle HAB = 90°.\n\nWork out the bearing of B from H.\n\nGive your answer to the nearest degree.",
        answer: { type: "number", value: 94, display: "094°" },
        traps: [
          { spec: { type: "number", value: 54 }, feedback: "54.2° is angle AHB — the angle inside the triangle. The bearing is measured from north: add the 40° that HA already makes with north." },
          { spec: { type: "number", value: 76 }, feedback: "{{tan^(-1)(18/25) = 35.8°}} is angle HBA, at B. You need the angle at H: {{tan^(-1)(25/18)}}." },
          { spec: { type: "number", value: 274 }, feedback: "274° is the bearing of H from B. You want the bearing of B **from H**." },
        ],
        solution: [
          "In triangle HAB (right angle at A): {{tan(AHB) = AB/HA = 25/18}}.",
          "Angle AHB = {{tan^(-1)(25/18) = 54.24...°}}",
          "Bearing of B from H = 40° + 54.24...° = 94.24...°",
          "Bearing = 094° (nearest degree).",
        ],
        commonError: "Giving the angle inside the triangle (54°) as the bearing.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["A bearing from H is measured clockwise from north at H.", "North to HA is already 40°. You need the extra angle AHB.", "In triangle HAB, AB is opposite angle H and HA is adjacent."],
        strategy: "Break it into steps",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q11",
        question:
          "The diagram shows a wedge (a triangular prism) on a horizontal table. The base ABCD is a rectangle with AB = 24 cm and BC = 10 cm. The rectangular face BCEF is vertical, with CE = BF = 9 cm.\n\nCalculate the size of the angle between the line AE and the base ABCD.\n\nGive your answer correct to 1 decimal place.",
        diagram: `<svg viewBox="0 0 340 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Wedge with rectangular base ABCD, AB 24 cm along the front and BC 10 cm going back. Vertical rectangle BCEF at the right end with height 9 cm, F above B and E above C. AE and AC are drawn."><rect width="340" height="250" fill="#ffffff"/><polygon points="30,220 246,220 246,112" fill="#fde68a" fill-opacity="0.7" stroke="#1f2937" stroke-width="2"/><polygon points="246,220 296,180 296,72 246,112" fill="#fde68a" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><polygon points="30,220 246,112 296,72 80,180" fill="#fde68a" fill-opacity="0.25" stroke="#1f2937" stroke-width="2"/><line x1="80" y1="180" x2="296" y2="180" stroke="#334155" stroke-dasharray="5,4"/><line x1="30" y1="220" x2="296" y2="180" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6,3"/><line x1="30" y1="220" x2="296" y2="72" stroke="#dc2626" stroke-width="2"/><polyline points="286,180 286,170 296,170" fill="none" stroke="#334155" stroke-width="1.2"/><text x="18" y="236" font-size="13" font-family="sans-serif" fill="#1f2937">A</text><text x="242" y="238" font-size="13" font-family="sans-serif" fill="#1f2937">B</text><text x="302" y="186" font-size="13" font-family="sans-serif" fill="#1f2937">C</text><text x="66" y="176" font-size="13" font-family="sans-serif" fill="#1f2937">D</text><text x="300" y="68" font-size="13" font-family="sans-serif" fill="#1f2937">E</text><text x="230" y="106" font-size="13" font-family="sans-serif" fill="#1f2937">F</text><text x="138" y="238" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">24 cm</text><text x="276" y="214" font-size="12" font-family="sans-serif" fill="#1f2937">10 cm</text><text x="302" y="130" font-size="12" font-family="sans-serif" fill="#1f2937">9 cm</text></svg>`,
        answer: { type: "number", value: 19.1, tolerance: 0.05, display: "19.1°" },
        traps: [
          { spec: { type: "number", value: 20.6, tolerance: 0.05 }, feedback: "{{tan^(-1)(9/24)}} is the angle FAB on the front face. E is above C, so the line on the base under AE is AC, not AB." },
          { spec: { type: "number", value: 70.9, tolerance: 0.05 }, feedback: "That is the angle between AE and the vertical edge CE. The angle with the base is at A." },
        ],
        solution: [
          "E is vertically above C, so the projection of AE on the base is AC and the angle needed is angle EAC (right angle at C).",
          "{{AC^2 = 24^2 + 10^2 = 576 + 100 = 676}}, so AC = 26 cm.",
          "{{tan(EAC) = 9/26}}",
          "{{EAC = tan^(-1)(9/26) = 19.09...°}} = 19.1° (1 d.p.).",
        ],
        commonError: "Using AB (24 cm) as the adjacent side instead of the base diagonal AC.",
        difficulty: "core",
        guideRef: "three-d",
        hints: ["Which point on the base is directly below E?", "So the angle is between AE and AC. Find AC with Pythagoras — look for a triple.", "In triangle ACE: opposite CE = 9, adjacent AC = 26."],
        strategy: "Find the right right-angled triangle",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q12",
        question:
          "A, B and P are points on horizontal ground, in a straight line. TP is a vertical tree.\n\nFrom A, the angle of elevation of the top of the tree T is 32°. From B, which is 15 m closer to the tree, the angle of elevation of T is 50°.\n\nCalculate the height of the tree.\n\nGive your answer in metres correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 330 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Points A, B and P on horizontal ground with the tree TP vertical at P. Lines of sight from A at 32 degrees and from B at 50 degrees to the top T. AB is 15 m."><rect width="330" height="230" fill="#ffffff"/><line x1="20" y1="200" x2="310" y2="200" stroke="#1f2937" stroke-width="2"/><line x1="290" y1="200" x2="290" y2="42" stroke="#166534" stroke-width="4"/><line x1="38" y1="200" x2="290" y2="42" stroke="#1f2937" stroke-width="1.5"/><line x1="158" y1="200" x2="290" y2="42" stroke="#1f2937" stroke-width="1.5"/><polyline points="278,200 278,188 290,188" fill="none" stroke="#1f2937" stroke-width="1.2"/><path d="M 78 200 A 40 40 0 0 0 71.9 178.8" fill="none" stroke="#1f2937"/><text x="82" y="194" font-size="12" font-family="sans-serif" fill="#1f2937">32°</text><path d="M 186 200 A 28 28 0 0 0 176 178.5" fill="none" stroke="#1f2937"/><text x="190" y="194" font-size="12" font-family="sans-serif" fill="#1f2937">50°</text><text x="32" y="216" font-size="13" font-family="sans-serif" fill="#1f2937">A</text><text x="152" y="216" font-size="13" font-family="sans-serif" fill="#1f2937">B</text><text x="286" y="216" font-size="13" font-family="sans-serif" fill="#1f2937">P</text><text x="296" y="42" font-size="13" font-family="sans-serif" fill="#1f2937">T</text><text x="98" y="226" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">15 m</text></svg>`,
        answer: { type: "number", value: 19.7, tolerance: 0.05, display: "19.7 m" },
        traps: [
          { spec: { type: "number", value: 9.37, tolerance: 0.01 }, feedback: "15 tan 32° assumes the tree is at B. The 15 m is only the gap between A and B — the distance BP is unknown." },
          { spec: { type: "number", value: 17.9, tolerance: 0.05 }, feedback: "15 tan 50° assumes the tree is at A's distance of 15 m. Let BP = d and write two equations for the height." },
        ],
        solution: [
          "Let BP = d m and the height TP = h m.",
          "From B: h = d tan 50°. From A: h = (d + 15) tan 32°.",
          "So d tan 50° = d tan 32° + 15 tan 32°, giving {{d = (15 tan 32°)/(tan 50° - tan 32°) = 9.3731.../0.56688... = 16.534...}} m.",
          "h = 16.534... × tan 50° = 19.704...",
          "Height = 19.7 m (3 s.f.).",
        ],
        solutions: [
          { label: "Via the sloping line BT (sine rule)", steps: ["In triangle ABT: angle ABT = 180° − 50° = 130°, so angle ATB = 180° − 32° − 130° = 18°.", "Sine rule: {{BT = (15 sin 32°)/(sin 18°) = 25.72...}} m.", "h = BT sin 50° = 19.7 m. Shorter if you already know the sine rule (see Further Trigonometry)."] },
        ],
        commonError: "Treating 15 m as the distance from B to the tree.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["There are two unknowns: the height and the distance BP. Give them letters.", "Write the height using triangle BPT, and again using triangle APT.", "Set the two expressions for h equal and solve for BP."],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "pythagoras-trigonometry-p4-q13",
        question:
          "A regular hexagon has sides of length 6 cm.\n\nWithout using a calculator, show that the exact area of the hexagon is {{54 sqrt(3)}} cm².",
        marks: 3,
        modelAnswer:
          "Joining the centre to each vertex splits the hexagon into 6 congruent triangles. Each has angle 360° ÷ 6 = 60° at the centre and is isosceles, so its other two angles are also 60°: each is an equilateral triangle of side 6 cm.\n\nHeight of one triangle = {{6 sin 60° = 6 * sqrt(3)/2 = 3 sqrt(3)}} cm.\n\nArea of one triangle = ½ × 6 × {{3 sqrt(3) = 9 sqrt(3)}} cm².\n\nArea of hexagon = 6 × {{9 sqrt(3) = 54 sqrt(3)}} cm².",
        markScheme: [
          { point: "Splits the hexagon into 6 equilateral triangles of side 6 cm (angles 60°)", keywords: ["6 equilateral", "six equilateral", "equilateral", "60", "360 ÷ 6", "360/6"] },
          { point: "Finds the height exactly using sin 60° = √3/2 (or Pythagoras: √(36 − 9) = √27): 3√3", keywords: ["sqrt(3)/2", "3sqrt(3)", "3 sqrt(3)", "sqrt(27)", "√3/2", "3√3"] },
          { point: "Area of one triangle 9√3 and total 6 × 9√3 = 54√3", keywords: ["9sqrt(3)", "9 sqrt(3)", "9√3", "54sqrt(3)", "54 sqrt(3)", "54√3"] },
        ],
        commonError: "Using a decimal for sin 60° (0.866) — the question demands an exact answer, so use {{sqrt(3)/2}}.",
        difficulty: "challenge",
        guideRef: "exact-values",
        hints: ["Join the centre to every vertex. What shape are the six pieces?", "Each piece is equilateral. Its height is {{6 sin 60°}} — use the exact value.", "Area of one piece, then multiply by 6."],
        strategy: "Split into simpler shapes",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q14",
        question:
          "TP is a vertical mast standing at point P on horizontal ground.\n\nPoint A is 50 m due south of P. The angle of elevation of T from A is 31°.\nPoint B is 40 m due east of A.\n\nCalculate the angle of elevation of T from B.\n\nGive your answer correct to 1 decimal place.",
        diagram: `<svg viewBox="0 0 300 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="3D sketch: vertical mast TP at P. A is 50 m due south of P, B is 40 m due east of A, so angle PAB is 90 degrees on the ground. Lines TA and TB drawn. Diagram not drawn accurately."><rect width="300" height="230" fill="#ffffff"/><polygon points="110,110 60,190 250,190" fill="#bbf7d0" fill-opacity="0.6" stroke="#334155" stroke-dasharray="5,4"/><line x1="110" y1="110" x2="110" y2="20" stroke="#1f2937" stroke-width="3"/><line x1="110" y1="20" x2="60" y2="190" stroke="#1f2937" stroke-width="1.5"/><line x1="110" y1="20" x2="250" y2="190" stroke="#dc2626" stroke-width="1.5"/><line x1="60" y1="190" x2="250" y2="190" stroke="#1f2937" stroke-width="2"/><line x1="110" y1="110" x2="60" y2="190" stroke="#1f2937" stroke-width="2"/><text x="104" y="16" font-size="13" font-family="sans-serif" fill="#1f2937">T</text><text x="116" y="116" font-size="13" font-family="sans-serif" fill="#1f2937">P</text><text x="46" y="204" font-size="13" font-family="sans-serif" fill="#1f2937">A</text><text x="254" y="204" font-size="13" font-family="sans-serif" fill="#1f2937">B</text><text x="56" y="150" font-size="12" font-family="sans-serif" fill="#1f2937">50 m</text><text x="150" y="208" font-size="12" font-family="sans-serif" fill="#1f2937">40 m</text><text x="72" y="174" font-size="11" font-family="sans-serif" fill="#1f2937">31°</text><text x="200" y="224" font-size="10" font-family="sans-serif" fill="#334155">Not drawn accurately</text></svg>`,
        answer: { type: "number", value: 25.1, tolerance: 0.06, display: "25.1°" },
        traps: [
          { spec: { type: "number", value: 36.9, tolerance: 0.05 }, feedback: "You used BP = 40 m. P is not 40 m from B — PB is the hypotenuse of the ground triangle PAB: {{sqrt(50^2 + 40^2)}}." },
          { spec: { type: "number", value: 31 }, feedback: "B is further from the mast than A, so the angle of elevation must be smaller than 31°." },
        ],
        solution: [
          "Triangle TPA: {{TP = 50 tan 31° = 30.043...}} m.",
          "On the ground, PA (north–south) is perpendicular to AB (east–west), so {{PB = sqrt(50^2 + 40^2) = sqrt(4100) = 64.031...}} m.",
          "Triangle TPB (right angle at P): {{tan(TBP) = 30.043.../64.031... = 0.4692...}}",
          "Angle TBP = 25.13...° = 25.1° (1 d.p.).",
        ],
        commonError: "Using 40 m as the horizontal distance from B to the foot of the mast.",
        difficulty: "challenge",
        guideRef: "three-d",
        hints: ["Find the height TP first, from A.", "The angle of elevation from B uses the horizontal distance PB. Which ground triangle contains PB?", "PAB is right-angled at A. Pythagoras gives PB, then tan in triangle TPB."],
        strategy: "Find the right right-angled triangle",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "pythagoras-trigonometry-p4-q15",
        question:
          "A Pythagorean triple (a, b, c) has {{a^2 + b^2 = c^2}}. The shortest side is a = 15 and the hypotenuse is exactly 1 more than the longest of the other two sides, so c = b + 1.\n\nFind the value of c.",
        answer: { type: "number", value: 113 },
        traps: [
          { spec: { type: "number", value: 17 }, feedback: "(8, 15, 17) is a triple, but there 15 is not the shortest side and 17 is 2 more than 15. Here a = 15 is the shortest and c = b + 1." },
          { spec: { type: "number", value: 25 }, feedback: "(15, 20, 25) is a triple, but 25 is 5 more than 20, not 1 more." },
        ],
        solution: [
          "{{15^2 = c^2 - b^2 = (c - b)(c + b)}}.",
          "c − b = 1, so {{c + b = 225}}.",
          "Adding: 2c = 226, so c = 113 (and b = 112).",
          "Check: {{112^2 + 15^2 = 12544 + 225 = 12769 = 113^2}} ✓.",
        ],
        solutions: [
          { label: "Substitute and expand", steps: ["{{15^2 + b^2 = (b + 1)^2 = b^2 + 2b + 1}}.", "225 = 2b + 1, so b = 112 and c = 113.", "Same work — the difference of two squares just makes the structure visible: every odd a gives a triple with c − b = 1."] },
        ],
        commonError: "Guessing a familiar triple containing 15 without checking the condition c = b + 1.",
        difficulty: "challenge",
        guideRef: "pythagorean-triples",
        hints: ["Rearrange to make {{c^2 - b^2}} the subject.", "{{c^2 - b^2}} is a difference of two squares: (c − b)(c + b).", "You know c − b = 1. So what is c + b?"],
        strategy: "Factorise a difference of two squares",
      },
    ],
  },
];
