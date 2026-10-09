// ---------------------------------------------------------------------------
// Sine & Cosine Rules, Trig Graphs & Identities — Practice Papers 3 and 4.
// Paper 3: mixed practice — fluency, the ambiguous case, spot-the-error, graphs, H+ identities.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher questions (bearings, segments, 3D,
//          "show that", exact answers, 3 s.f.).
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "further-trigonometry-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "further-trigonometry-p3-q01",
        question:
          "In triangle ABC, angle BAC = 48°, angle ABC = 71° and BC = 9.5 cm.\n\nCalculate the length of AC.\n\nGive your answer in cm, correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with angle A 48 degrees, angle B 71 degrees and BC 9.5 cm"><rect x="0" y="0" width="400" height="250" fill="#ffffff"/><polygon points="102.9,196 297.1,196 243.4,40" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><text x="88.4" y="207.8" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">A</text><text x="310.6" y="209.5" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">B</text><text x="247.7" y="29.6" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">C</text><text x="279.7" y="119.1" font-size="13" font-family="sans-serif" text-anchor="start" fill="#334155">9.5 cm</text><path d="M 117.6 179.7 A 22 22 0 0 1 124.9 196" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="141.3" y="183.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">48°</text><path d="M 275.1 196 A 22 22 0 0 1 289.9 175.2" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="262.9" y="176.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">71°</text><text x="392" y="242" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        answer: { type: "number", value: 12.1, tolerance: 0.05, display: "12.1 cm" },
        traps: [
          { spec: { type: "number", value: 7.47, tolerance: 0.05 }, feedback: "Your ratio is upside down. AC is opposite the 71° angle and BC = 9.5 is opposite the 48° angle, so {{AC = (9.5 sin 71°)/(sin 48°)}}." },
          { spec: { type: "number", value: 11.2, tolerance: 0.05 }, feedback: "That is AB (opposite the 61° angle at C). The question asks for AC, which is opposite angle B = 71°." },
        ],
        solution: [
          "Pair each side with the angle opposite it. BC = 9.5 is opposite A = 48°; AC is opposite B = 71°.",
          "Sine rule: {{(AC)/(sin 71°) = 9.5/(sin 48°)}}.",
          "{{AC = (9.5 * sin 71°)/(sin 48°) = (9.5 * 0.94552)/0.74314 = 12.087...}}",
          "AC = **12.1 cm** (3 s.f.).",
        ],
        commonError: "Pairing a side with an adjacent angle instead of the opposite one.",
        difficulty: "warmup",
        guideRef: "sine-rule",
        hints: [
          "Which angle is opposite AC? Which angle is opposite the 9.5 cm side?",
          "You have two complete side–opposite-angle pairs (one with a missing side), so use the sine rule with the unknown on top: {{(AC)/(sin 71°) = 9.5/(sin 48°)}}.",
        ],
        strategy: "Label opposite pairs",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "further-trigonometry-p3-q02",
        question:
          "In triangle PQR, PQ = 7 cm, PR = 11 cm and angle QPR = 38°.\n\nCalculate the length of QR.\n\nGive your answer in cm, correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle PQR with PQ 7 cm, PR 11 cm and angle QPR 38 degrees"><rect x="0" y="0" width="400" height="250" fill="#ffffff"/><polygon points="50,157.5 350,157.5 200.4,40" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><text x="34.5" y="166.6" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">P</text><text x="365.5" y="166.6" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">R</text><text x="200.5" y="29" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">Q</text><text x="119.1" y="94.3" font-size="13" font-family="sans-serif" text-anchor="end" fill="#334155">7 cm</text><text x="200" y="174.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">11 cm</text><path d="M 67.3 144 A 22 22 0 0 1 72 157.5" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="89.7" y="148.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">38°</text><text x="392" y="242" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        answer: { type: "number", value: 6.97, tolerance: 0.005, display: "6.97 cm" },
        traps: [
          { spec: { type: "number", value: 13.0, tolerance: 0.05 }, feedback: "That is {{sqrt(7^2 + 11^2)}} — Pythagoras. The angle is 38°, not 90°, so you must subtract {{2 * 7 * 11 * cos 38°}}." },
          { spec: { type: "number", value: 3.55, tolerance: 0.005 }, feedback: "You worked out (49 + 121 − 154) × cos 38°. Only the 154 is multiplied by cos 38°: {{QR^2 = 49 + 121 - 154 cos 38°}}." },
        ],
        solution: [
          "Two sides and the angle between them (SAS): use the cosine rule.",
          "{{QR^2 = 7^2 + 11^2 - 2 * 7 * 11 * cos 38°}}",
          "{{QR^2 = 49 + 121 - 154 * 0.78801 = 170 - 121.355 = 48.645}}",
          "{{QR = sqrt(48.645) = 6.9746...}}, so QR = **6.97 cm** (3 s.f.).",
          "Sense check: QR is opposite the smallest angle in the triangle, so it should be the shortest side — and 6.97 < 7 < 11 ✓.",
        ],
        commonError: "Typing 170 − 154 first and then multiplying by cos 38°. On a calculator, enter the whole expression in one go.",
        difficulty: "warmup",
        guideRef: "cosine-rule",
        hints: [
          "You know two sides and the angle *between* them. Which rule fits SAS?",
          "{{a^2 = b^2 + c^2 - 2bc cos A}} with b = 7, c = 11, A = 38°.",
        ],
        strategy: "Choose the rule from what you know",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "further-trigonometry-p3-q03",
        question:
          "Triangle DEF has DE = 8.2 cm, DF = 6.5 cm and angle EDF = 112°.\n\nWork out the area of triangle DEF.\n\nGive your answer in cm², correct to 3 significant figures.",
        answer: { type: "number", value: 24.7, tolerance: 0.05, display: "24.7 cm²" },
        traps: [
          { spec: { type: "number", value: 49.4, tolerance: 0.05 }, feedback: "You've forgotten the {{1/2}}. Area = {{1/2 ab sin C}}." },
        ],
        solution: [
          "The 112° angle is between the two given sides, so use Area = {{1/2 ab sin C}}.",
          "Area = {{1/2 * 8.2 * 6.5 * sin 112°}}",
          "= 26.65 × 0.92718 = 24.709…",
          "Area = **24.7 cm²** (3 s.f.).",
        ],
        commonError: "Worrying that 112° is obtuse — sin 112° = sin 68° is positive, so the formula works exactly the same.",
        difficulty: "warmup",
        guideRef: "area-sine",
        hints: [
          "Is the angle you know *between* the two sides you know?",
          "Area = {{1/2 * 8.2 * 6.5 * sin 112°}}.",
        ],
        strategy: "Choose the rule from what you know",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "mcq",
        id: "further-trigonometry-p3-q04",
        question:
          "sin 35° = 0.574 (to 3 s.f.).\n\nWhich other angle x, with 0° ≤ x ≤ 360°, also has sin x = 0.574?",
        options: ["145°", "325°", "215°", "55°"],
        answerIndex: 0,
        explanation:
          "The graph of y = sin x is symmetrical about x = 90°, so sin(180° − 35°) = sin 35°. That gives **145°**. 325° (= 360° − 35°) is the cosine-style symmetry — sin 325° = −0.574. 215° (= 180° + 35°) is in the third quadrant where sine is also negative. 55° (= 90° − 35°) has sin 55° = cos 35° = 0.819.",
        difficulty: "warmup",
        guideRef: "trig-graphs",
        hints: [
          "Sketch y = sin x from 0° to 360°. Where else is the curve at the same height as at 35°?",
        ],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "further-trigonometry-p3-q05",
        question:
          "A triangle has sides of length 6 cm, 8 cm and 12 cm.\n\nCalculate the size of its largest angle.\n\nGive your answer in degrees, correct to 1 decimal place.",
        answer: { type: "number", value: 117.3, tolerance: 0.05, display: "117.3°" },
        traps: [
          { spec: { type: "number", value: 62.7, tolerance: 0.05 }, feedback: "Your cosine has the wrong sign. {{cos C = (6^2 + 8^2 - 12^2)/(2 * 6 * 8) = -44/96}}, which is negative, so the angle is obtuse." },
          { spec: { type: "number", value: 26.4, tolerance: 0.05 }, feedback: "That's the *smallest* angle (opposite 6 cm). The largest angle is opposite the longest side, 12 cm." },
        ],
        solution: [
          "The largest angle is opposite the longest side, 12 cm. Call it C.",
          "{{cos C = (6^2 + 8^2 - 12^2)/(2 * 6 * 8) = (36 + 64 - 144)/96 = -44/96 = -0.45833}}",
          "{{C = cos^(-1)(-0.45833) = 117.27...°}}",
          "Largest angle = **117.3°** (1 d.p.).",
          "The negative cosine is a built-in check: it tells you the angle is obtuse, because {{12^2 > 6^2 + 8^2}}.",
        ],
        commonError: "Putting the longest side in the wrong place in the formula — the side opposite the angle you want is the one you subtract.",
        difficulty: "core",
        guideRef: "cosine-rule",
        hints: [
          "Which side is the largest angle opposite?",
          "Rearranged cosine rule: {{cos C = (a^2 + b^2 - c^2)/(2ab)}}, where c is the side opposite C.",
          "Your cosine should come out negative. What does that tell you about the angle?",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "further-trigonometry-p3-q06",
        question:
          "In triangle ABC, BC = 12 cm, AC = 15 cm and angle BAC = 40°.\n\nThere are **two** possible triangles that fit this information.\n\nFind both possible sizes of angle ABC. Give each answer correct to 1 decimal place, separated by a comma.",
        answer: { type: "list", values: [53.5, 126.5], ordered: false, tolerance: 0.06, display: "53.5° and 126.5°" },
        traps: [
          { spec: { type: "number", value: 53.5, tolerance: 0.06 }, feedback: "That's one of them. sin B = 0.8035 also has an obtuse solution: 180° − 53.5° = 126.5°. Check it fits: 40° + 126.5° < 180° ✓." },
          { spec: { type: "list", values: [31.0, 149.0], tolerance: 0.1 }, feedback: "Your sine rule ratio is upside down. AC = 15 is opposite B and BC = 12 is opposite A, so {{sin B = (15 sin 40°)/12}}." },
        ],
        solution: [
          "BC = 12 is opposite A = 40°. AC = 15 is opposite B.",
          "{{(sin B)/15 = (sin 40°)/12}}, so {{sin B = (15 * sin 40°)/12 = 0.80348...}}",
          "Calculator: {{B = sin^(-1)(0.80348) = 53.46...°}}.",
          "But sin(180° − θ) = sin θ, so B = 180° − 53.46° = 126.54° also has this sine.",
          "Check the obtuse one fits: 40° + 126.5° = 166.5° < 180°, leaving 13.5° for C ✓.",
          "Angle ABC = **53.5°** or **126.5°**.",
        ],
        commonError: "Stopping at the calculator value. When you find an angle with the sine rule and the side opposite the known angle is the *shorter* one, always test 180° minus your answer.",
        difficulty: "core",
        guideRef: "sine-rule",
        hints: [
          "Write down the two opposite pairs you can use. Which one has the unknown angle?",
          "Use the sine rule with the sines on top: {{(sin B)/15 = (sin 40°)/12}}.",
          "Sine is positive in two places between 0° and 180°. What is the other angle with the same sine?",
        ],
        strategy: "Split into cases",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "further-trigonometry-p3-q07",
        question:
          "Wei Ling cuts a triangular piece of card for an art project. Two of its sides are 9 cm and 8 cm, and the angle between them is acute. The area of the card is 30 cm².\n\nWork out the size of the angle between the 9 cm and 8 cm sides.\n\nGive your answer correct to 1 decimal place.",
        answer: { type: "number", value: 56.4, tolerance: 0.05, display: "56.4°" },
        traps: [
          { spec: { type: "number", value: 123.6, tolerance: 0.05 }, feedback: "That angle has the right sine, but the question says the angle is acute. Use the calculator value, 56.4°." },
          { spec: { type: "number", value: 33.6, tolerance: 0.05 }, feedback: "You used {{cos^(-1)}}. The area formula uses *sine*: {{sin C = 30/36}}, so {{C = sin^(-1)(0.8333)}}." },
        ],
        solution: [
          "Area = {{1/2 ab sin C}}, so {{30 = 1/2 * 9 * 8 * sin C = 36 sin C}}.",
          "{{sin C = 30/36 = 5/6 = 0.8333...}}",
          "{{C = sin^(-1)(5/6) = 56.44...°}}",
          "The angle is **56.4°** (1 d.p.). (The other solution, 123.6°, is obtuse, so it is rejected.)",
        ],
        commonError: "Halving twice, or forgetting the ½ altogether and getting sin C = {{30/72}}.",
        difficulty: "core",
        guideRef: "area-sine",
        hints: [
          "Write the area formula with the numbers you know. What is left unknown?",
          "{{30 = 1/2 * 9 * 8 * sin C}}. Simplify the right-hand side.",
          "Solve {{sin C = 30/36}} with inverse sine.",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "further-trigonometry-p3-q08",
        question:
          "Solve {{4 sin x + 3 = 0}} for 0° ≤ x ≤ 360°.\n\nGive your answers correct to 1 decimal place, separated by a comma.",
        answer: { type: "list", values: [228.6, 311.4], ordered: false, tolerance: 0.06, display: "x = 228.6°, 311.4°" },
        traps: [
          { spec: { type: "list", values: [48.6, 131.4], tolerance: 0.06 }, feedback: "Those solve sin x = +0.75. Here {{sin x = -3/4}}, so x is where the sine graph is *below* the axis: between 180° and 360°." },
          { spec: { type: "number", value: -48.6, tolerance: 0.06 }, feedback: "−48.6° is the calculator's answer, but it's outside 0° ≤ x ≤ 360°. Add 360° to get 311.4°, and use symmetry for the other one: 180° + 48.6° = 228.6°." },
        ],
        solution: [
          "{{sin x = -3/4 = -0.75}}.",
          "Calculator: {{sin^(-1)(-0.75) = -48.59°}} — outside the interval, so use it as a reference angle: 48.59°.",
          "Sine is negative in the third and fourth quadrants:",
          "    x = 180° + 48.59° = 228.59°",
          "    x = 360° − 48.59° = 311.41°",
          "x = **228.6°** or **311.4°** (1 d.p.).",
          "Check: both are between 180° and 360°, where the sine curve is below the x-axis ✓.",
        ],
        commonError: "Writing down the calculator value −48.6° as a solution, even though it is outside the interval.",
        difficulty: "core",
        guideRef: "trig-graphs",
        hints: [
          "Make sin x the subject first.",
          "Sketch y = sin x and the line y = −0.75. How many times do they cross between 0° and 360°?",
          "Use the reference angle 48.6°: the solutions are 180° + 48.6° and 360° − 48.6°.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "written",
        id: "further-trigonometry-p3-q09",
        question:
          "In triangle XYZ, XY = 9 cm, XZ = 6 cm and angle YXZ = 50°. Marcus wants the length YZ. Here is his working.\n\n    YZ² = 6² + 9² − 2 × 6 × 9 × cos 50°\n        = (36 + 81 − 108) × cos 50°\n        = 9 × 0.643 = 5.785\n    YZ = 2.41 cm\n\nExplain the mistake Marcus has made, and work out the correct length of YZ to 3 significant figures.",
        marks: 3,
        modelAnswer:
          "Marcus has subtracted 108 from 36 + 81 *before* multiplying by cos 50°. In the cosine rule only the 2bc term is multiplied by cos A: you must work out 108 × cos 50° first and then subtract it (order of operations).\n\nCorrect: YZ² = 36 + 81 − 108 × cos 50° = 117 − 69.42 = 47.58.\n\nYZ = √47.58 = 6.90 cm (3 s.f.).",
        markScheme: [
          { point: "Explains that only 2 × 6 × 9 (= 108) should be multiplied by cos 50°, not the whole bracket (order of operations / BIDMAS)", keywords: ["only", "108", "multiply", "order of operations", "bidmas", "bracket", "first"] },
          { point: "Correct substitution: YZ² = 117 − 108 cos 50° = 47.58 (or 47.6)", keywords: ["117", "69.4", "47.58", "47.6"] },
          { point: "YZ = 6.90 cm", keywords: ["6.90", "6.9", "6.898"] },
        ],
        commonError: "Typing the expression into a calculator in pieces and pressing = too early.",
        difficulty: "core",
        guideRef: "cosine-rule",
        hints: [
          "In {{b^2 + c^2 - 2bc cos A}}, which part is multiplied by cos A?",
          "Multiplication happens before subtraction. What should 108 be multiplied by?",
          "Work out 108 × cos 50° on its own, then subtract it from 117.",
        ],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "further-trigonometry-p3-q10",
        question:
          "The graph shows {{y = a sin(bx)}} for 0° ≤ x ≤ 360°, where a and b are positive constants.\n\nFind the value of a and the value of b. Give a first, then b.",
        diagram: `<svg viewBox="0 0 440 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y equals a sin bx for x from 0 to 360 degrees, with maximum value 3 at x equals 45 and minimum value minus 3 at x equals 135"><rect x="0" y="0" width="440" height="270" fill="#ffffff"/><line x1="50.0" y1="230" x2="410.0" y2="230" stroke="#e5e7eb" stroke-width="1"/><line x1="50.0" y1="200" x2="410.0" y2="200" stroke="#e5e7eb" stroke-width="1"/><line x1="50.0" y1="170" x2="410.0" y2="170" stroke="#e5e7eb" stroke-width="1"/><line x1="50.0" y1="110" x2="410.0" y2="110" stroke="#e5e7eb" stroke-width="1"/><line x1="50.0" y1="80" x2="410.0" y2="80" stroke="#e5e7eb" stroke-width="1"/><line x1="50.0" y1="50" x2="410.0" y2="50" stroke="#e5e7eb" stroke-width="1"/><line x1="95.0" y1="248.0" x2="95.0" y2="32.0" stroke="#e5e7eb" stroke-width="1"/><line x1="140.0" y1="248.0" x2="140.0" y2="32.0" stroke="#e5e7eb" stroke-width="1"/><line x1="185.0" y1="248.0" x2="185.0" y2="32.0" stroke="#e5e7eb" stroke-width="1"/><line x1="230.0" y1="248.0" x2="230.0" y2="32.0" stroke="#e5e7eb" stroke-width="1"/><line x1="275.0" y1="248.0" x2="275.0" y2="32.0" stroke="#e5e7eb" stroke-width="1"/><line x1="320.0" y1="248.0" x2="320.0" y2="32.0" stroke="#e5e7eb" stroke-width="1"/><line x1="365.0" y1="248.0" x2="365.0" y2="32.0" stroke="#e5e7eb" stroke-width="1"/><line x1="410.0" y1="248.0" x2="410.0" y2="32.0" stroke="#e5e7eb" stroke-width="1"/><line x1="50.0" y1="140" x2="425.0" y2="140" stroke="#1f2937" stroke-width="1.5"/><line x1="50.0" y1="257.0" x2="50.0" y2="23.0" stroke="#1f2937" stroke-width="1.5"/><line x1="140.0" y1="136" x2="140.0" y2="144" stroke="#1f2937"/><text x="140" y="264" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">90</text><line x1="230.0" y1="136" x2="230.0" y2="144" stroke="#1f2937"/><text x="230" y="264" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">180</text><line x1="320.0" y1="136" x2="320.0" y2="144" stroke="#1f2937"/><text x="320" y="264" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">270</text><line x1="410.0" y1="136" x2="410.0" y2="144" stroke="#1f2937"/><text x="410" y="264" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">360</text><line x1="46.0" y1="230" x2="54.0" y2="230" stroke="#1f2937"/><text x="42" y="234" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">−3</text><line x1="46.0" y1="200" x2="54.0" y2="200" stroke="#1f2937"/><text x="42" y="204" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">−2</text><line x1="46.0" y1="170" x2="54.0" y2="170" stroke="#1f2937"/><text x="42" y="174" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">−1</text><line x1="46.0" y1="110" x2="54.0" y2="110" stroke="#1f2937"/><text x="42" y="114" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">1</text><line x1="46.0" y1="80" x2="54.0" y2="80" stroke="#1f2937"/><text x="42" y="84" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">2</text><line x1="46.0" y1="50" x2="54.0" y2="50" stroke="#1f2937"/><text x="42" y="54" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">3</text><polyline points="50,140 53,130.6 56,121.3 59,112.2 62,103.4 65,95 68,87.1 71,79.8 74,73.1 77,67.2 80,62.1 83,57.8 86,54.4 89,52 92,50.5 95,50 98,50.5 101,52 104,54.4 107,57.8 110,62.1 113,67.2 116,73.1 119,79.8 122,87.1 125,95 128,103.4 131,112.2 134,121.3 137,130.6 140,140 143,149.4 146,158.7 149,167.8 152,176.6 155,185 158,192.9 161,200.2 164,206.9 167,212.8 170,217.9 173,222.2 176,225.6 179,228 182,229.5 185,230 188,229.5 191,228 194,225.6 197,222.2 200,217.9 203,212.8 206,206.9 209,200.2 212,192.9 215,185 218,176.6 221,167.8 224,158.7 227,149.4 230,140 233,130.6 236,121.3 239,112.2 242,103.4 245,95 248,87.1 251,79.8 254,73.1 257,67.2 260,62.1 263,57.8 266,54.4 269,52 272,50.5 275,50 278,50.5 281,52 284,54.4 287,57.8 290,62.1 293,67.2 296,73.1 299,79.8 302,87.1 305,95 308,103.4 311,112.2 314,121.3 317,130.6 320,140 323,149.4 326,158.7 329,167.8 332,176.6 335,185 338,192.9 341,200.2 344,206.9 347,212.8 350,217.9 353,222.2 356,225.6 359,228 362,229.5 365,230 368,229.5 371,228 374,225.6 377,222.2 380,217.9 383,212.8 386,206.9 389,200.2 392,192.9 395,185 398,176.6 401,167.8 404,158.7 407,149.4 410,140" fill="none" stroke="#2563eb" stroke-width="2.5"/><text x="431" y="144" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1f2937">x</text><text x="50" y="17" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">y</text><text x="42" y="156" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">O</text></svg>`,
        answer: { type: "list", values: [3, 2], ordered: true, display: "a = 3, b = 2" },
        traps: [
          { spec: { type: "list", values: [3, 0.5], ordered: true }, feedback: "The curve repeats every 180°, which is *faster* than y = sin x. Replacing x by bx divides the period by b: 360° ÷ b = 180°, so b = 2." },
          { spec: { type: "list", values: [2, 3], ordered: true }, feedback: "Right numbers, wrong order: the amplitude (height) is a = 3 and b = 2 squashes the period. Give a first." },
        ],
        solution: [
          "**a**: the maximum value is 3 and the minimum is −3, so the stretch parallel to the y-axis is 3: a = 3.",
          "**b**: the curve completes one full cycle from 0° to 180°, so the period is 180°.",
          "For y = sin(bx) the period is {{360°/b}}, so {{360/b = 180}}, giving b = 2.",
          "Check: the first maximum of y = 3 sin 2x is when 2x = 90°, i.e. x = 45° — matching the graph ✓.",
          "**a = 3, b = 2**.",
        ],
        commonError: "Thinking y = sin 2x is stretched to twice as long. It is squashed: everything happens twice as fast.",
        difficulty: "core",
        guideRef: "trig-graphs",
        hints: [
          "What is the greatest value of y on the graph?",
          "How many complete waves fit between 0° and 360°? What is the period?",
          "y = sin(bx) has period {{360°/b}}.",
        ],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "further-trigonometry-p3-q11",
        question:
          "OAB is a sector of a circle with centre O and radius 12 cm. Angle AOB = 54°.\n\nThe shaded segment lies between the chord AB and the arc AB.\n\nWork out the area of the shaded segment. Give your answer in cm², correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sector OAB of a circle with centre O, radius 12 cm and angle AOB 54 degrees; the segment between chord AB and the arc is shaded"><rect x="0" y="0" width="400" height="250" fill="#ffffff"/><path d="M 150.1 168 A 110 110 0 0 0 249.9 168 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M 150.1 168 L 200 70 L 249.9 168" fill="none" stroke="#1f2937" stroke-width="2"/><circle cx="200" cy="70" r="2.5" fill="#1f2937"/><text x="200" y="60" font-size="14" font-family="sans-serif" text-anchor="middle" font-weight="bold" fill="#1f2937">O</text><text x="138.1" y="176" font-size="14" font-family="sans-serif" text-anchor="end" font-weight="bold" fill="#1f2937">A</text><text x="261.9" y="176" font-size="14" font-family="sans-serif" text-anchor="start" font-weight="bold" fill="#1f2937">B</text><path d="M 189.1 91.4 A 24 24 0 0 0 210.9 91.4" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="200" y="114" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">54°</text><text x="167" y="119" font-size="13" font-family="sans-serif" text-anchor="end" fill="#334155">12 cm</text><text x="392" y="242" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        answer: { type: "number", value: 9.61, tolerance: 0.005, display: "9.61 cm²" },
        traps: [
          { spec: { type: "number", value: 67.9, tolerance: 0.05 }, feedback: "That's the whole sector. Subtract the area of triangle OAB to leave just the segment." },
          { spec: { type: "number", value: 58.2, tolerance: 0.05 }, feedback: "That's the area of triangle OAB. The segment is sector − triangle." },
        ],
        solution: [
          "Sector area = {{54/360 * pi * 12^2 = 67.858...}} cm².",
          "Triangle OAB = {{1/2 * 12 * 12 * sin 54° = 72 * 0.80902 = 58.249...}} cm².",
          "Segment = 67.858 − 58.249 = 9.609… cm².",
          "Area = **9.61 cm²** (3 s.f.).",
        ],
        commonError: "Rounding the sector and triangle to 3 s.f. before subtracting: 67.9 − 58.2 = 9.7, which is wrong to 3 s.f. Keep full calculator values.",
        difficulty: "core",
        guideRef: "area-sine",
        hints: [
          "The segment is what's left of the sector when you remove a triangle. Which triangle?",
          "Sector = {{theta/360 * pi r^2}}; triangle = {{1/2 r^2 sin theta}}.",
          "Subtract, keeping full accuracy until the end.",
        ],
        strategy: "Split into parts",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "further-trigonometry-p3-q12",
        question:
          "Prove that {{(1 - cos^2 x)/(sin x cos x) = tan x}} for all values of x where both sides are defined.\n\nShow each step clearly.",
        marks: 3,
        modelAnswer:
          "Start with the left-hand side.\n\nSince {{sin^2 x + cos^2 x = 1}}, we have {{1 - cos^2 x = sin^2 x}}.\n\nSo LHS = {{(sin^2 x)/(sin x cos x)}}.\n\nCancel a factor of sin x (allowed, as sin x ≠ 0 where the expression is defined): LHS = {{(sin x)/(cos x)}}.\n\nAnd {{(sin x)/(cos x) = tan x}} = RHS, as required.",
        markScheme: [
          { point: "Uses sin²x + cos²x = 1 to replace 1 − cos²x by sin²x", keywords: ["sin^2", "sin²", "1 - cos^2", "1 − cos²", "sin^2 x + cos^2 x = 1", "identity"] },
          { point: "Cancels sin x to reach sin x / cos x", keywords: ["cancel", "sin x / cos x", "sinx/cosx", "sin x/cos x"] },
          { point: "Uses tan x = sin x / cos x to conclude LHS = RHS", keywords: ["tan x", "tanx", "= rhs", "lhs = rhs", "as required"] },
        ],
        commonError: "Starting from the answer and working on both sides at once. A proof should transform one side until it becomes the other.",
        difficulty: "core",
        guideRef: "trig-identities",
        hints: [
          "Which identity contains {{1 - cos^2 x}} in disguise?",
          "Replace the numerator by {{sin^2 x}}. What can you cancel?",
          "Finish with the identity that links sin, cos and tan.",
        ],
        strategy: "Work on one side",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "further-trigonometry-p3-q13",
        question:
          "ABCD is a quadrilateral. AB = 7 cm, BC = 10 cm, CD = 8 cm, angle ABC = 120° and angle ACD = 50°.\n\nCalculate the length of AD.\n\nGive your answer in cm, correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quadrilateral ABCD with AB 7 cm, BC 10 cm, angle ABC 120 degrees, CD 8 cm and angle ACD 50 degrees; diagonal AC drawn"><rect x="0" y="0" width="400" height="250" fill="#ffffff"/><polygon points="63.2,73.1 134.1,196 336.8,196 292.6,40" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><line x1="63.2" y1="73.1" x2="336.8" y2="196" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 4"/><text x="48.2" y="72.6" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">A</text><text x="122.6" y="212.1" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">B</text><text x="350.9" y="208.6" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">C</text><text x="303.9" y="33.7" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">D</text><text x="90" y="145.6" font-size="13" font-family="sans-serif" text-anchor="end" fill="#334155">7 cm</text><text x="235.5" y="213" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">10 cm</text><text x="324.3" y="119.7" font-size="13" font-family="sans-serif" text-anchor="start" fill="#334155">8 cm</text><path d="M 123.1 176.9 A 22 22 0 0 1 156.1 196" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="155.1" y="164.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">120°</text><path d="M 316.7 187 A 22 22 0 0 1 330.8 174.8" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="309.4" y="169.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50°</text><text x="392" y="242" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        answer: { type: "number", value: 11.4, tolerance: 0.05, display: "11.4 cm" },
        traps: [
          { spec: { type: "number", value: 7.18, tolerance: 0.05 }, feedback: "Check cos 120°. It is −0.5, so {{-2 * 7 * 10 * cos 120° = +70}} and {{AC^2 = 149 + 70 = 219}}, not 79." },
        ],
        solution: [
          "**Step 1 — triangle ABC** (SAS): {{AC^2 = 7^2 + 10^2 - 2 * 7 * 10 * cos 120°}}.",
          "cos 120° = −0.5, so {{AC^2 = 49 + 100 + 70 = 219}} and {{AC = sqrt(219) = 14.799...}} cm.",
          "**Step 2 — triangle ACD** (SAS again, with the 50° between AC and CD):",
          "{{AD^2 = 219 + 8^2 - 2 * sqrt(219) * 8 * cos 50°}}",
          "{{AD^2 = 283 - 236.78 * 0.64279 = 283 - 152.20 = 130.80}}",
          "{{AD = sqrt(130.80) = 11.436...}}, so AD = **11.4 cm** (3 s.f.).",
        ],
        commonError: "Rounding AC to 14.8 too early is usually harmless here, but keeping {{AC^2 = 219}} exact is cleaner — you never need AC itself until the 2bc term.",
        difficulty: "challenge",
        guideRef: "cosine-rule",
        hints: [
          "AD isn't in a triangle where you know enough yet. Which shared side links the two triangles?",
          "Find AC first, in triangle ABC. Careful: cos 120° is negative.",
          "Now triangle ACD has two sides (AC and CD) and the angle between them.",
          "Keep {{AC^2 = 219}} exactly and use {{AC = sqrt(219)}} in the 2bc term.",
        ],
        strategy: "Find the bridge",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "further-trigonometry-p3-q14",
        question:
          "Solve {{2 sin^2 x + sin x - 1 = 0}} for 0° ≤ x ≤ 360°.\n\nGive all solutions, separated by commas.",
        answer: { type: "list", values: [30, 150, 270], ordered: false, display: "x = 30°, 150°, 270°" },
        traps: [
          { spec: { type: "list", values: [30, 150] }, feedback: "You've solved sin x = {{1/2}}, but the other factor gives sin x = −1 too. Where is the sine curve at its minimum?" },
          { spec: { type: "list", values: [90, 210, 330] }, feedback: "Check your factorisation by expanding: you need (2 sin x − 1)(sin x + 1), which gives sin x = {{1/2}} or sin x = −1." },
        ],
        solution: [
          "Let s = sin x: {{2s^2 + s - 1 = 0}}.",
          "Factorise: (2s − 1)(s + 1) = 0, so {{s = 1/2}} or s = −1.",
          "{{sin x = 1/2}}: x = 30° or 180° − 30° = 150°.",
          "sin x = −1: x = 270° (the minimum of the sine curve).",
          "x = **30°, 150°, 270°**.",
        ],
        solutions: [
          { label: "Substitute s = sin x", steps: ["Turn it into an ordinary quadratic {{2s^2 + s - 1 = 0}}, factorise, then solve each sin x = … with the graph. Clean and hard to get wrong."] },
          { label: "Quadratic formula on sin x", steps: ["{{sin x = (-1 +- sqrt(1 + 8))/4 = (-1 +- 3)/4}}, giving {{1/2}} or −1. Useful when it doesn't factorise."] },
        ],
        commonError: "Giving only the calculator angle for each value of sin x and missing the symmetric partner (150°).",
        difficulty: "challenge",
        guideRef: "trig-equations",
        hints: [
          "This is a quadratic in disguise. What happens if you write s for sin x?",
          "Factorise {{2s^2 + s - 1}}.",
          "Solve sin x = {{1/2}} and sin x = −1 separately, using the graph to find every solution in the interval.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "further-trigonometry-p3-q15",
        question:
          "Triangle ABC has AB = 8 cm, AC = 5 cm and BC = 7 cm.\n\n(a) Show that angle BAC = 60°.\n\n(b) Hence show that the area of triangle ABC is {{10 sqrt(3)}} cm².\n\nDo not use a calculator for this question — show every step.",
        diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with AB 8 cm, AC 5 cm and BC 7 cm"><rect x="0" y="0" width="400" height="250" fill="#ffffff"/><polygon points="55.9,196 344.1,196 146,40" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><text x="41.1" y="207.1" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">A</text><text x="359.3" y="205.9" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">B</text><text x="140.7" y="29.9" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">C</text><text x="200" y="213" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">8 cm</text><text x="92.3" y="117" font-size="13" font-family="sans-serif" text-anchor="end" fill="#334155">5 cm</text><text x="251.2" y="113.6" font-size="13" font-family="sans-serif" text-anchor="start" fill="#334155">7 cm</text><text x="392" y="242" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        marks: 4,
        modelAnswer:
          "(a) Angle BAC is opposite BC = 7. Cosine rule:\n\n{{cos A = (8^2 + 5^2 - 7^2)/(2 * 8 * 5) = (64 + 25 - 49)/80 = 40/80 = 1/2}}.\n\nSo A = 60°, since cos 60° = {{1/2}} (and 0° < A < 180°).\n\n(b) Area = {{1/2 * 8 * 5 * sin 60°}} = {{20 * sqrt(3)/2}} = {{10 sqrt(3)}} cm², using the exact value {{sin 60° = sqrt(3)/2}}.",
        markScheme: [
          { point: "Correct cosine rule for angle A: cos A = (64 + 25 − 49) / 80", keywords: ["64 + 25 - 49", "64+25-49", "40/80", "cos a", "80"] },
          { point: "cos A = 1/2 so A = 60°", keywords: ["1/2", "0.5", "60"] },
          { point: "Area = ½ × 8 × 5 × sin 60°", keywords: ["1/2 × 8 × 5", "20", "sin 60", "1/2 x 8 x 5"] },
          { point: "Uses sin 60° = √3/2 exactly to get 10√3", keywords: ["√3/2", "sqrt(3)/2", "root 3", "10√3", "10sqrt(3)"] },
        ],
        commonError: "Writing sin 60° = 0.866 in part (b) — a decimal can never 'show' an exact surd answer.",
        difficulty: "challenge",
        guideRef: "area-sine",
        hints: [
          "Which angle is opposite the 7 cm side? Use the cosine rule rearranged for an angle.",
          "You should get a very friendly fraction for cos A. Which exact angle has that cosine?",
          "For (b), use Area = {{1/2 ab sin C}} with the exact value of sin 60°.",
        ],
        strategy: "Keep it exact",
      },
    ],
  },
  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "further-trigonometry-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "further-trigonometry-p4-q01",
        question:
          "PQR is a triangle. PQ = 8.3 cm, QR = 11.6 cm and angle PQR = 67°.\n\nCalculate the length of PR.\n\nGive your answer correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle PQR with PQ 8.3 cm, QR 11.6 cm and angle PQR 67 degrees"><rect x="0" y="0" width="400" height="250" fill="#ffffff"/><polygon points="81.6,196 318.4,196 147.8,40" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><text x="67.3" y="208.3" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">Q</text><text x="333.4" y="206.7" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">R</text><text x="142.7" y="29.8" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">P</text><text x="105.5" y="118.3" font-size="13" font-family="sans-serif" text-anchor="end" fill="#334155">8.3 cm</text><text x="200" y="213" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">11.6 cm</text><path d="M 90.2 175.7 A 22 22 0 0 1 103.6 196" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="116.6" y="177.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">67°</text><text x="392" y="242" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        answer: { type: "number", value: 11.3, tolerance: 0.05, display: "11.3 cm" },
        traps: [
          { spec: { type: "number", value: 14.3, tolerance: 0.05 }, feedback: "That's Pythagoras. Angle Q is 67°, not 90°, so subtract {{2 * 8.3 * 11.6 * cos 67°}}." },
        ],
        solution: [
          "SAS, so use the cosine rule with the 67° angle at Q.",
          "{{PR^2 = 8.3^2 + 11.6^2 - 2 * 8.3 * 11.6 * cos 67°}}",
          "{{PR^2 = 68.89 + 134.56 - 192.56 * 0.39073 = 203.45 - 75.24 = 128.21}}",
          "{{PR = sqrt(128.21) = 11.323...}}",
          "PR = **11.3 cm** (3 s.f.).",
        ],
        commonError: "Forgetting to square-root at the end and giving 128 cm.",
        difficulty: "warmup",
        guideRef: "cosine-rule",
        hints: [
          "Which angle is between PQ and QR? What rule uses two sides and the included angle?",
          "{{PR^2 = 8.3^2 + 11.6^2 - 2 * 8.3 * 11.6 * cos 67°}} — then square-root.",
        ],
        strategy: "Choose the rule from what you know",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "further-trigonometry-p4-q02",
        question:
          "LMN is a triangle. LM = 14.2 cm, MN = 9.8 cm and angle LNM = 72°.\n\nCalculate the size of angle MLN.\n\nGive your answer correct to 1 decimal place.",
        diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle LMN with LM 14.2 cm, MN 9.8 cm and angle LNM 72 degrees"><rect x="0" y="0" width="400" height="250" fill="#ffffff"/><polygon points="141.5,196 258.5,196 192.2,40" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><text x="129.8" y="211.9" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">N</text><text x="270.7" y="211.4" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">M</text><text x="191.4" y="29" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">L</text><text x="234.5" y="118.3" font-size="13" font-family="sans-serif" text-anchor="start" fill="#334155">14.2 cm</text><text x="200" y="213" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">9.8 cm</text><path d="M 148.3 175.1 A 22 22 0 0 1 163.5 196" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="175.5" y="176.3" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">72°</text><text x="392" y="242" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        answer: { type: "number", value: 41.0, tolerance: 0.05, display: "41.0°" },
        traps: [
          { spec: { type: "number", value: 67.0, tolerance: 0.05 }, feedback: "That's angle LMN (180° − 72° − 41.0°). The question asks for angle MLN, the angle at L." },
        ],
        solution: [
          "Angle MLN (at L) is opposite MN = 9.8. The known angle N = 72° is opposite LM = 14.2.",
          "{{(sin L)/9.8 = (sin 72°)/14.2}}",
          "{{sin L = (9.8 * sin 72°)/14.2 = (9.8 * 0.95106)/14.2 = 0.65636}}",
          "{{L = sin^(-1)(0.65636) = 41.02...°}}",
          "Angle MLN = **41.0°** (1 d.p.). (180° − 41.0° = 139.0° is impossible, since 139.0° + 72° > 180°.)",
        ],
        commonError: "Writing {{sin L = (14.2 sin 72°)/9.8}}, which gives a value bigger than 1 — a sure sign the ratio is upside down.",
        difficulty: "warmup",
        guideRef: "sine-rule",
        hints: [
          "Which side is opposite angle L? Which side is opposite the 72°?",
          "Put the sines on top when you're finding an angle: {{(sin L)/9.8 = (sin 72°)/14.2}}.",
        ],
        strategy: "Label opposite pairs",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "further-trigonometry-p4-q03",
        question:
          "A triangular shade sail is fixed over a hawker centre seating area. Two of its edges are 12 m and 15 m long, and the angle between them is 40°.\n\nWork out the area of the shade sail.\n\nGive your answer in m², correct to 3 significant figures.",
        answer: { type: "number", value: 57.9, tolerance: 0.05, display: "57.9 m²" },
        traps: [
          { spec: { type: "number", value: 116, tolerance: 0.5 }, feedback: "You've left out the {{1/2}}: Area = {{1/2 ab sin C}}." },
          { spec: { type: "number", value: 68.9, tolerance: 0.05 }, feedback: "You used cos 40°. The area formula uses *sine* of the included angle." },
        ],
        solution: [
          "Area = {{1/2 ab sin C = 1/2 * 12 * 15 * sin 40°}}",
          "= 90 × 0.64279 = 57.85…",
          "Area = **57.9 m²** (3 s.f.).",
        ],
        commonError: "Using {{1/2 * base * height}} with 12 and 15 as if the angle were 90°: that gives 90 m², far too big.",
        difficulty: "warmup",
        guideRef: "area-sine",
        hints: [
          "You have two sides and the angle between them. Which area formula fits?",
          "{{1/2 * 12 * 15 * sin 40°}}.",
        ],
        strategy: "Choose the rule from what you know",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "further-trigonometry-p4-q04",
        question:
          "Given that cos 72° = 0.309 correct to 3 significant figures, find the two values of x between 0° and 360° for which cos x = −0.309.\n\nGive your answers separated by a comma.",
        answer: { type: "list", values: [108, 252], ordered: false, display: "x = 108°, 252°" },
        traps: [
          { spec: { type: "list", values: [72, 288] }, feedback: "Those are where cos x = +0.309. Cosine is negative between 90° and 270°." },
          { spec: { type: "list", values: [108, 288] }, feedback: "108° is right, but cos 288° = cos 72° is positive. The y = cos x graph is symmetrical about x = 180°, so the partner of 108° is 360° − 108° = 252°." },
        ],
        solution: [
          "cos(180° − θ) = −cos θ, so cos 108° = −cos 72° = −0.309.",
          "The cosine graph is symmetrical about x = 180°, so the second solution is 360° − 108° = 252°.",
          "(Equivalently 180° + 72° = 252°.)",
          "x = **108°** and **252°**.",
        ],
        commonError: "Using the sine symmetry (180° − x) as if it were the only rule for every trig graph.",
        difficulty: "warmup",
        guideRef: "trig-graphs",
        hints: [
          "Sketch y = cos x for 0° to 360°. Where is it negative?",
          "The heights at 72° and 108° are equal and opposite. Then use the symmetry about x = 180°.",
        ],
        strategy: "Use symmetry",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "further-trigonometry-p4-q05",
        question:
          "A boat leaves harbour H and sails 12 km on a bearing of 060° to a buoy A. It then sails 8 km on a bearing of 170° to a buoy B.\n\nCalculate the distance HB.\n\nGive your answer in km, correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bearings diagram: from harbour H a boat sails 12 km on a bearing of 060 degrees to A, then 8 km on a bearing of 170 degrees to B"><rect x="0" y="0" width="420" height="280" fill="#ffffff"/><line x1="70" y1="200" x2="70" y2="140" stroke="#1f2937" stroke-width="1.5"/><text x="70" y="136" font-size="12" font-family="sans-serif" text-anchor="middle" font-weight="bold" fill="#1f2937">N</text><line x1="246.7" y1="98" x2="246.7" y2="38" stroke="#1f2937" stroke-width="1.5"/><text x="246.7" y="34" font-size="12" font-family="sans-serif" text-anchor="middle" font-weight="bold" fill="#1f2937">N</text><polygon points="70,200 246.7,98 270.3,231.9" fill="#bae6fd" fill-opacity="0.5" stroke="none"/><line x1="70" y1="200" x2="246.7" y2="98" stroke="#1f2937" stroke-width="2"/><line x1="246.7" y1="98" x2="270.3" y2="231.9" stroke="#1f2937" stroke-width="2"/><line x1="70" y1="200" x2="270.3" y2="231.9" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="6 4"/><text x="60" y="214" font-size="14" font-family="sans-serif" text-anchor="end" font-weight="bold" fill="#1f2937">H</text><text x="234.7" y="100" font-size="14" font-family="sans-serif" text-anchor="end" font-weight="bold" fill="#1f2937">A</text><text x="280.3" y="245.9" font-size="14" font-family="sans-serif" text-anchor="start" font-weight="bold" fill="#1f2937">B</text><text x="150.3" y="143" font-size="13" font-family="sans-serif" text-anchor="end" fill="#334155">12 km</text><text x="268.5" y="165" font-size="13" font-family="sans-serif" text-anchor="start" fill="#334155">8 km</text><path d="M 70 174 A 26 26 0 0 1 92.5 187" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="91" y="167.6" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60°</text><path d="M 246.7 76 A 22 22 0 0 1 250.5 119.7" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="284.5" y="98.7" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">170°</text><text x="412" y="272" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        answer: { type: "number", value: 11.9, tolerance: 0.05, display: "11.9 km" },
        traps: [
          { spec: { type: "number", value: 14.4, tolerance: 0.05 }, feedback: "That's Pythagoras, but angle HAB is not 90°. Work out angle HAB from the bearings first (it's 70°)." },
        ],
        solution: [
          "Find angle HAB. The bearing of H from A is the back bearing 060° + 180° = 240°.",
          "Angle HAB = 240° − 170° = 70°.",
          "(Or: at A, AH points 60° west of south (alternate angles with the 060° bearing) and AB points 10° east of south (180° − 170°), so the angle between them is 60° + 10° = 70°.)",
          "Cosine rule: {{HB^2 = 12^2 + 8^2 - 2 * 12 * 8 * cos 70°}}",
          "{{HB^2 = 144 + 64 - 192 * 0.34202 = 208 - 65.67 = 142.33}}",
          "{{HB = sqrt(142.33) = 11.930...}}, so HB = **11.9 km** (3 s.f.).",
        ],
        commonError: "Taking angle HAB = 170° − 60° = 110°. Always find the back bearing at A and subtract.",
        difficulty: "core",
        guideRef: "cosine-rule",
        hints: [
          "You need the angle at A inside the triangle. What is the bearing of H from A?",
          "Back bearing of H from A = 060° + 180° = 240°. Now compare it with 170°.",
          "With angle HAB = 70°, use the cosine rule.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "written",
        id: "further-trigonometry-p4-q06",
        question:
          "In triangle ABC, AB = 10 cm, angle BAC = 35° and angle ABC = 62°.\n\nShow that the area of triangle ABC is 25.5 cm², correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with AB 10 cm, angle A 35 degrees and angle B 62 degrees"><rect x="0" y="0" width="400" height="250" fill="#ffffff"/><polygon points="50,193.1 350,193.1 268.6,40" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><text x="34.7" y="202.6" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">A</text><text x="364.8" y="204" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">B</text><text x="275.2" y="30.4" font-size="14" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">C</text><text x="200" y="210.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">10 cm</text><path d="M 68 180.5 A 22 22 0 0 1 72 193.1" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="90.1" y="185.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">35°</text><path d="M 328 193.1 A 22 22 0 0 1 339.7 173.6" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="314" y="176.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">62°</text><text x="392" y="242" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        marks: 3,
        modelAnswer:
          "Angle ACB = 180° − 35° − 62° = 83°.\n\nSine rule: {{(AC)/(sin 62°) = 10/(sin 83°)}}, so AC = {{(10 sin 62°)/(sin 83°)}} = 8.8958… cm.\n\nArea = {{1/2 * AB * AC * sin A}} = {{1/2 * 10 * 8.8958 * sin 35°}} = 25.512… = 25.5 cm² (3 s.f.).",
        markScheme: [
          { point: "Finds angle ACB = 83° (angles in a triangle)", keywords: ["83", "180 - 35 - 62", "180 − 35 − 62"] },
          { point: "Uses the sine rule to find AC (or BC): AC = 10 sin 62° / sin 83° = 8.90 (BC = 5.78)", keywords: ["sin 62", "sin 83", "8.89", "8.9", "5.78", "sine rule"] },
          { point: "Uses ½ab sin C with an included angle to get 25.51…", keywords: ["1/2", "sin 35", "25.51", "25.5", "sin 62"] },
        ],
        commonError: "Using ½ × 10 × AC × sin 62° — the 62° is at B, which is not between AB and AC. Pick the angle *between* your two sides.",
        difficulty: "core",
        guideRef: "area-sine",
        hints: [
          "To use {{1/2 ab sin C}} you need two sides. You only have one. Which rule finds another?",
          "First find the third angle, then use the sine rule to find AC.",
          "Which angle lies between AB and AC?",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "further-trigonometry-p4-q07",
        question:
          "Triangle ABC has AB = x cm, AC = 2x cm and angle BAC = 30°. The area of the triangle is 40 cm².\n\nFind the exact value of x. Give your answer as a surd in its simplest form.",
        answer: { type: "expression", expr: "4sqrt(5)", form: "surd", display: "{{4 sqrt(5)}}" },
        traps: [
          { spec: { type: "expression", expr: "2sqrt(10)" }, feedback: "You've lost the factor of {{1/2}} from sin 30°. Area = {{1/2 * x * 2x * 1/2 = 1/2 x^2}}, so {{x^2 = 80}}." },
        ],
        solution: [
          "Area = {{1/2 * x * 2x * sin 30° = x^2 * 1/2 = 1/2 x^2}}.",
          "{{1/2 x^2 = 40}}, so {{x^2 = 80}}.",
          "{{x = sqrt(80) = sqrt(16 * 5) = 4 sqrt(5)}} (x > 0 because it's a length).",
          "x = **{{4 sqrt(5)}}**.",
        ],
        commonError: "Leaving the answer as √80 or 8.94 — 'exact' and 'simplest form' mean simplify the surd.",
        difficulty: "core",
        guideRef: "area-sine",
        hints: [
          "Write the area formula with x and 2x. What is sin 30° exactly?",
          "You should get {{1/2 x^2 = 40}}.",
          "Simplify {{sqrt(80)}} by taking out the largest square factor.",
        ],
        strategy: "Keep it exact",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "further-trigonometry-p4-q08",
        question:
          "In triangle ABC, AC = x cm, AB = (x + 4) cm, BC = 9 cm and angle BAC = 60°.\n\n(a) Show that {{x^2 + 4x - 65 = 0}}.\n\n(b) Hence find the length of AC, correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with AB x plus 4 cm, AC x cm, angle BAC 60 degrees and BC 9 cm"><rect x="0" y="0" width="400" height="250" fill="#ffffff"/><polygon points="64.1,198 335.9,198 147.3,54" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><text x="49.3" y="209" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><path d="M 88.1 198 A 24 24 0 0 0 76.1 177.2" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="95.3" y="184" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60°</text><text x="255.4" y="119.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">9 cm</text><text x="351.1" y="207.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="82.8" y="124" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x cm</text><text x="141.8" y="44" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="200" y="217" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(x + 4) cm</text><text x="392" y="242" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        marks: 4,
        modelAnswer:
          "(a) Cosine rule with the 60° angle: {{9^2 = x^2 + (x + 4)^2 - 2x(x + 4) cos 60°}}.\n\ncos 60° = {{1/2}}, so {{81 = x^2 + x^2 + 8x + 16 - x(x + 4)}}\n\n{{81 = 2x^2 + 8x + 16 - x^2 - 4x = x^2 + 4x + 16}}\n\nSo {{x^2 + 4x - 65 = 0}}, as required.\n\n(b) Complete the square: {{(x + 2)^2 - 4 - 65 = 0}}, so {{(x + 2)^2 = 69}} and {{x = -2 +- sqrt(69)}}.\n\nx must be positive, so x = −2 + √69 = 6.3066… AC = 6.31 cm (3 s.f.).",
        markScheme: [
          { point: "Correct cosine rule substitution: 81 = x² + (x + 4)² − 2x(x + 4) cos 60°", keywords: ["81", "cos 60", "(x + 4)^2", "(x+4)^2", "(x + 4)²", "2x(x + 4)"] },
          { point: "Uses cos 60° = ½ and expands correctly to x² + 4x + 16 = 81 (or equivalent), reaching the given equation", keywords: ["1/2", "x^2 + 4x + 16", "x² + 4x + 16", "2x^2 + 8x + 16", "x^2 + 4x - 65"] },
          { point: "Correct method to solve the quadratic (formula or completing the square)", keywords: ["sqrt(276)", "√276", "sqrt(69)", "√69", "(x + 2)^2 = 69", "(x+2)^2=69"] },
          { point: "AC = 6.31 cm, rejecting the negative root", keywords: ["6.31", "negative", "reject"] },
        ],
        commonError: "Expanding {{(x + 4)^2}} as {{x^2 + 16}}. Always write the bracket out twice.",
        difficulty: "core",
        guideRef: "cosine-rule",
        hints: [
          "Which side is opposite the 60° angle? Write the cosine rule with that side on the left.",
          "cos 60° = {{1/2}} exactly, which cancels the 2 in 2bc.",
          "For (b), the quadratic does not factorise. Use the formula or complete the square: {{(x + 2)^2 = 69}}.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "further-trigonometry-p4-q09",
        question:
          "A designer cuts a glass panel in the shape of a segment of a circle. The circle has centre O and radius 8 cm. A and B are points on the circle and angle AOB = 110°.\n\nThe panel is the shaded segment between the chord AB and the minor arc AB.\n\nCalculate the area of the panel. Give your answer in cm², correct to 3 significant figures.",
        diagram: `<svg viewBox="0 0 400 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O with radius 8 cm; chord AB with angle AOB 110 degrees; the minor segment between chord AB and the arc is shaded"><rect x="0" y="0" width="400" height="250" fill="#ffffff"/><path d="M 122.2 124.5 A 95 95 0 0 0 277.8 124.5 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M 122.2 124.5 L 200 70 L 277.8 124.5" fill="none" stroke="#1f2937" stroke-width="2"/><circle cx="200" cy="70" r="2.5" fill="#1f2937"/><text x="200" y="60" font-size="14" font-family="sans-serif" text-anchor="middle" font-weight="bold" fill="#1f2937">O</text><text x="110.2" y="132.5" font-size="14" font-family="sans-serif" text-anchor="end" font-weight="bold" fill="#1f2937">A</text><text x="289.8" y="132.5" font-size="14" font-family="sans-serif" text-anchor="start" font-weight="bold" fill="#1f2937">B</text><path d="M 180.3 83.8 A 24 24 0 0 0 219.7 83.8" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="200" y="114.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">110°</text><text x="151.1" y="97.2" font-size="13" font-family="sans-serif" text-anchor="end" fill="#334155">8 cm</text><text x="392" y="242" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        answer: { type: "number", value: 31.4, tolerance: 0.05, display: "31.4 cm²" },
        traps: [
          { spec: { type: "number", value: 61.4, tolerance: 0.05 }, feedback: "That's the area of sector OAB. Subtract triangle OAB to leave the segment." },
          { spec: { type: "number", value: 30.1, tolerance: 0.05 }, feedback: "That's triangle OAB. The segment is sector − triangle." },
        ],
        solution: [
          "Sector OAB = {{110/360 * pi * 8^2 = 61.435...}} cm².",
          "Triangle OAB = {{1/2 * 8 * 8 * sin 110° = 32 * 0.93969 = 30.070...}} cm².",
          "Segment = 61.435 − 30.070 = 31.365… cm².",
          "Area = **31.4 cm²** (3 s.f.).",
        ],
        commonError: "Using the major sector (250°) instead of the minor one.",
        difficulty: "core",
        guideRef: "area-sine",
        hints: [
          "Split the sector into the triangle OAB and the segment.",
          "Sector = {{110/360 * pi * 8^2}}; triangle = {{1/2 * 8^2 * sin 110°}}.",
          "Segment = sector − triangle.",
        ],
        strategy: "Split into parts",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "further-trigonometry-p4-q10",
        question:
          "The curve with equation {{y = 2cos(x + 30°) + 1}} is drawn for 0° ≤ x ≤ 360°.\n\nWrite down the coordinates of its maximum point in this interval. Give the x-coordinate first.",
        answer: { type: "list", values: [330, 3], ordered: true, display: "(330°, 3)" },
        traps: [
          { spec: { type: "list", values: [30, 3], ordered: true }, feedback: "cos(x + 30°) is y = cos x translated 30° to the *left*, not the right." },
          { spec: { type: "list", values: [330, 2], ordered: true }, feedback: "330° is right. The stretch makes the top 2 × 1 = 2, then the + 1 lifts it: y = 2 + 1 = 3." },
        ],
        solution: [
          "y = cos x has maximum points at (0°, 1) and (360°, 1).",
          "Replacing x by x + 30° translates the graph 30° to the **left**: the maxima move to (−30°, 1) and (330°, 1). Only 330° is in the interval.",
          "Multiplying by 2 stretches vertically (max 2); adding 1 translates up 1: maximum at (330°, 3).",
          "Check: at x = 330°, y = 2 cos 360° + 1 = 3 ✓.",
          "Maximum point **(330°, 3)**.",
        ],
        commonError: "Moving the maximum at 0° to −30° and stopping there — that is outside the interval. Use the next maximum of y = cos x, at 360°.",
        difficulty: "core",
        guideRef: "trig-graphs",
        hints: [
          "Where are the maximum points of y = cos x for 0° ≤ x ≤ 360°?",
          "Which way does f(x + 30°) move a graph? What do × 2 and + 1 do to the y-values?",
          "Apply the transformations to the maximum at (360°, 1) — the one at (0°, 1) moves out of the interval.",
        ],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "further-trigonometry-p4-q11",
        question:
          "Solve {{3 tan x = 5}} for 0° ≤ x ≤ 360°.\n\nGive your answers correct to 1 decimal place, separated by a comma.",
        answer: { type: "list", values: [59.0, 239.0], ordered: false, tolerance: 0.06, display: "x = 59.0°, 239.0°" },
        traps: [
          { spec: { type: "list", values: [59.0, 121.0], tolerance: 0.06 }, feedback: "180° − x is the *sine* symmetry. The tan graph repeats every 180°, so the second solution is 59.0° + 180° = 239.0°." },
          { spec: { type: "list", values: [59.0, 301.0], tolerance: 0.06 }, feedback: "360° − x is the *cosine* symmetry. tan has period 180°, so add 180°: 239.0°." },
        ],
        solution: [
          "{{tan x = 5/3}}.",
          "Calculator: {{x = tan^(-1)(5/3) = 59.04°}}.",
          "y = tan x has period 180°, so the next solution is 59.04° + 180° = 239.04°.",
          "x = **59.0°** or **239.0°** (1 d.p.).",
        ],
        commonError: "Using the 180° − x rule for tan as well as sin.",
        difficulty: "core",
        guideRef: "trig-graphs",
        hints: [
          "Make tan x the subject.",
          "How often does the graph of y = tan x repeat?",
        ],
        strategy: "Find a pattern",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "further-trigonometry-p4-q12",
        question:
          "Arjun's school marks out a triangular plot in its eco-garden. The sides of the plot are 18 m, 25 m and 30 m.\n\nCalculate the size of the smallest angle of the plot.\n\nGive your answer correct to 1 decimal place.",
        answer: { type: "number", value: 36.8, tolerance: 0.05, display: "36.8°" },
        traps: [
          { spec: { type: "number", value: 86.9, tolerance: 0.05 }, feedback: "That's the *largest* angle (opposite 30 m). The smallest angle is opposite the shortest side, 18 m." },
        ],
        solution: [
          "The smallest angle is opposite the shortest side, 18 m.",
          "{{cos theta = (25^2 + 30^2 - 18^2)/(2 * 25 * 30) = (625 + 900 - 324)/1500 = 1201/1500 = 0.80067}}",
          "{{theta = cos^(-1)(0.80067) = 36.81...°}}",
          "Smallest angle = **36.8°** (1 d.p.).",
        ],
        commonError: "Subtracting the wrong side: in {{cos A = (b^2 + c^2 - a^2)/(2bc)}}, a must be the side opposite the angle you want.",
        difficulty: "core",
        guideRef: "cosine-rule",
        hints: [
          "Which side is the smallest angle opposite?",
          "Three sides, no angles (SSS): use the cosine rule rearranged for cos.",
          "Put 18 in the subtracted position: {{cos theta = (25^2 + 30^2 - 18^2)/(2 * 25 * 30)}}.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "further-trigonometry-p4-q13",
        question:
          "Prove that {{tan x + 1/(tan x) = 1/(sin x cos x)}} for all values of x where both sides are defined.",
        marks: 3,
        modelAnswer:
          "Start with the left-hand side and write tan x as {{(sin x)/(cos x)}}:\n\nLHS = {{(sin x)/(cos x) + (cos x)/(sin x)}}\n\nCommon denominator sin x cos x:\n\nLHS = {{(sin^2 x + cos^2 x)/(sin x cos x)}}\n\nSince {{sin^2 x + cos^2 x = 1}}, LHS = {{1/(sin x cos x)}} = RHS, as required.",
        markScheme: [
          { point: "Replaces tan x by sin x / cos x (and 1/tan x by cos x / sin x)", keywords: ["sin x / cos x", "sinx/cosx", "cos x / sin x", "cosx/sinx", "sin x/cos x"] },
          { point: "Combines over the common denominator sin x cos x to get (sin²x + cos²x) / (sin x cos x)", keywords: ["common denominator", "sin x cos x", "sin^2 x + cos^2 x", "sin²x + cos²x"] },
          { point: "Uses sin²x + cos²x = 1 to reach the RHS", keywords: ["= 1", "=1", "identity", "rhs", "as required"] },
        ],
        commonError: "Writing {{1/(tan x) = tan x}} or adding the fractions by adding numerators and denominators.",
        solutions: [
          { label: "Work from the LHS (sin/cos)", steps: ["Convert to sin and cos, combine the fractions, use {{sin^2 x + cos^2 x = 1}}. The standard route."] },
          { label: "Multiply out the LHS with t = tan x", steps: ["{{t + 1/t = (t^2 + 1)/t}}. With {{t = (sin x)/(cos x)}}: {{t^2 + 1 = (sin^2 x + cos^2 x)/(cos^2 x) = 1/(cos^2 x)}}, so {{(t^2 + 1)/t = 1/(cos^2 x) * (cos x)/(sin x) = 1/(sin x cos x)}}."] },
        ],
        difficulty: "challenge",
        guideRef: "trig-identities",
        hints: [
          "When you are stuck with tan, rewrite everything in sin and cos.",
          "Add {{(sin x)/(cos x) + (cos x)/(sin x)}} using a common denominator.",
          "Look at the numerator you get. Which identity simplifies it?",
        ],
        strategy: "Rewrite in sin and cos",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "further-trigonometry-p4-q14",
        question:
          "ABCDEFGH is a cuboid with AB = 6 cm, BC = 4 cm and AE = 3 cm. The diagonals AC, AF and CF form triangle ACF.\n\nCalculate the size of angle CAF.\n\nGive your answer correct to 1 decimal place.",
        diagram: `<svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cuboid ABCDEFGH with AB 6 cm, BC 4 cm and AE 3 cm; triangle ACF is shaded, formed by diagonals AC, AF and CF"><rect x="0" y="0" width="420" height="290" fill="#ffffff"/><polygon points="60,245 396.7,156.1 288,131" fill="#fecaca" fill-opacity="0.8" stroke="none"/><line x1="60" y1="245" x2="288" y2="245" stroke="#1f2937" stroke-width="1.8"/><line x1="288" y1="245" x2="396.7" y2="156.1" stroke="#1f2937" stroke-width="1.8"/><line x1="396.7" y1="156.1" x2="168.7" y2="156.1" stroke="#1f2937" stroke-width="1.8" stroke-dasharray="5 4"/><line x1="168.7" y1="156.1" x2="60" y2="245" stroke="#1f2937" stroke-width="1.8" stroke-dasharray="5 4"/><line x1="60" y1="131" x2="288" y2="131" stroke="#1f2937" stroke-width="1.8"/><line x1="288" y1="131" x2="396.7" y2="42.1" stroke="#1f2937" stroke-width="1.8"/><line x1="396.7" y1="42.1" x2="168.7" y2="42.1" stroke="#1f2937" stroke-width="1.8"/><line x1="168.7" y1="42.1" x2="60" y2="131" stroke="#1f2937" stroke-width="1.8"/><line x1="60" y1="245" x2="60" y2="131" stroke="#1f2937" stroke-width="1.8"/><line x1="288" y1="245" x2="288" y2="131" stroke="#1f2937" stroke-width="1.8"/><line x1="396.7" y1="156.1" x2="396.7" y2="42.1" stroke="#1f2937" stroke-width="1.8"/><line x1="168.7" y1="156.1" x2="168.7" y2="42.1" stroke="#1f2937" stroke-width="1.8" stroke-dasharray="5 4"/><line x1="60" y1="245" x2="396.7" y2="156.1" stroke="#b91c1c" stroke-width="2"/><line x1="60" y1="245" x2="288" y2="131" stroke="#b91c1c" stroke-width="2"/><line x1="396.7" y1="156.1" x2="288" y2="131" stroke="#b91c1c" stroke-width="2"/><text x="50" y="259" font-size="14" font-family="sans-serif" text-anchor="end" font-weight="bold" fill="#1f2937">A</text><text x="296" y="261" font-size="14" font-family="sans-serif" text-anchor="start" font-weight="bold" fill="#1f2937">B</text><text x="406.7" y="162.1" font-size="14" font-family="sans-serif" text-anchor="start" font-weight="bold" fill="#1f2937">C</text><text x="158.7" y="154.1" font-size="14" font-family="sans-serif" text-anchor="end" font-weight="bold" fill="#1f2937">D</text><text x="50" y="131" font-size="14" font-family="sans-serif" text-anchor="end" font-weight="bold" fill="#1f2937">E</text><text x="284" y="123" font-size="14" font-family="sans-serif" text-anchor="end" font-weight="bold" fill="#1f2937">F</text><text x="406.7" y="38.1" font-size="14" font-family="sans-serif" text-anchor="start" font-weight="bold" fill="#1f2937">G</text><text x="162.7" y="34.1" font-size="14" font-family="sans-serif" text-anchor="end" font-weight="bold" fill="#1f2937">H</text><text x="174" y="263" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">6 cm</text><text x="352.3" y="212.5" font-size="13" font-family="sans-serif" text-anchor="start" fill="#334155">4 cm</text><text x="52" y="192" font-size="13" font-family="sans-serif" text-anchor="end" fill="#334155">3 cm</text><text x="412" y="282" font-size="11" font-family="sans-serif" text-anchor="end" fill="#334155">Diagram NOT accurately drawn</text></svg>`,
        answer: { type: "number", value: 41.9, tolerance: 0.05, display: "41.9°" },
        traps: [
          { spec: { type: "number", value: 63.7, tolerance: 0.05 }, feedback: "That's angle ACF (at C). Angle CAF is at A, opposite the side CF = 5 cm." },
        ],
        solution: [
          "Each side of triangle ACF is a face diagonal — use Pythagoras on each face:",
          "    {{AC^2 = 6^2 + 4^2 = 52}} (base)",
          "    {{AF^2 = 6^2 + 3^2 = 45}} (front face)",
          "    {{CF^2 = 4^2 + 3^2 = 25}}, so CF = 5 (side face)",
          "Cosine rule for angle A (opposite CF):",
          "{{cos A = (52 + 45 - 25)/(2 * sqrt(52) * sqrt(45)) = 72/(2 * sqrt(2340)) = 0.74420}}",
          "{{A = cos^(-1)(0.74420) = 41.90...°}}",
          "Angle CAF = **41.9°** (1 d.p.).",
        ],
        commonError: "Assuming triangle ACF is right-angled. None of its angles is 90° — check with Pythagoras: 25 + 45 ≠ 52.",
        difficulty: "challenge",
        guideRef: "cosine-rule",
        hints: [
          "Triangle ACF isn't right-angled. What do you need to know about it to find an angle?",
          "Find all three sides: each one is the diagonal of a rectangular face.",
          "Keep the squares (52, 45, 25) — the cosine rule needs {{b^2}} and {{c^2}} anyway.",
          "Angle CAF is opposite CF.",
        ],
        strategy: "Find the right triangle",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "further-trigonometry-p4-q15",
        question:
          "Solve {{2 sin^2 x = 3 cos x}} for 0° ≤ x ≤ 360°.\n\nGive all solutions, separated by commas.",
        answer: { type: "list", values: [60, 300], ordered: false, display: "x = 60°, 300°" },
        traps: [
          { spec: { type: "list", values: [60, 120] }, feedback: "cos x = {{1/2}} is right, but 180° − 60° is the *sine* symmetry: cos 120° = −{{1/2}}. Use 360° − 60° = 300°." },
          { spec: { type: "number", value: 60 }, feedback: "60° is one solution. The cosine graph is symmetrical about 180°, so 360° − 60° = 300° works too." },
        ],
        solution: [
          "Two different trig functions: use {{sin^2 x = 1 - cos^2 x}} to write everything in cos x.",
          "{{2(1 - cos^2 x) = 3 cos x}}, so {{2 - 2cos^2 x = 3 cos x}}.",
          "Rearrange: {{2cos^2 x + 3 cos x - 2 = 0}}.",
          "Factorise: (2 cos x − 1)(cos x + 2) = 0.",
          "cos x = {{1/2}} or cos x = −2. But −1 ≤ cos x ≤ 1, so cos x = −2 has no solutions.",
          "cos x = {{1/2}}: x = 60° or 360° − 60° = 300°.",
          "x = **60°, 300°**.",
        ],
        commonError: "Trying to 'divide by cos x' or square-root both sides — first turn it into one trig function with the identity.",
        difficulty: "challenge",
        guideRef: "trig-equations",
        hints: [
          "There are two different trig functions. Which identity lets you write {{sin^2 x}} in terms of cos x?",
          "Substitute {{sin^2 x = 1 - cos^2 x}} and rearrange into a quadratic in cos x.",
          "Factorise {{2c^2 + 3c - 2}}. Are both roots possible values of cos x?",
        ],
        strategy: "Introduce a variable",
      },
    ],
  },
];
