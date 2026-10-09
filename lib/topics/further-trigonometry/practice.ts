import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // Quick-check quiz — 10 questions (3 mcq, 7 short) across the main sections
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "further-trigonometry-quiz-q01",
      question:
        "In triangle ABC, angle BAC = 52°, angle ABC = 63° and BC = 11 cm.\n\nWork out the length of AC. Give your answer in cm, correct to 3 significant figures.",
      diagram: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with angle A 52 degrees, angle B 63 degrees, BC 11 cm and side AC labelled b"><rect x="0" y="0" width="360" height="240" fill="#ffffff"/><polygon points="93.5,188 266.5,188 198.2,54" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><text x="79.1" y="200" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><path d="M 117.5 188 A 24 24 0 0 0 108.3 169.1" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="129.5" y="174.5" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">52°</text><text x="259.1" y="119.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">11 cm</text><text x="280.5" y="200.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><path d="M 255.6 166.6 A 24 24 0 0 0 242.5 188" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="235.8" y="173.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">63°</text><text x="132.6" y="117.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">b</text><text x="200.4" y="43.1" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text></svg>`,
      answer: { type: "number", value: 12.4, tolerance: 0.051, display: "12.4 cm" },
      solution: [
        "AC is opposite angle B (63°) and BC = 11 cm is opposite angle A (52°): a matching pair, so use the sine rule.",
        "{{(AC)/(sin 63°) = 11/(sin 52°)}}",
        "{{AC = (11 sin 63°)/(sin 52°) = (11 * 0.8910...)/0.7880... = 12.43...}}",
        "AC = 12.4 cm (3 s.f.).",
      ],
      traps: [
        { spec: { type: "number", value: 9.73, tolerance: 0.006 }, feedback: "You have the sines upside down. The unknown side goes on top over the sine of its **opposite** angle: {{AC = (11 sin 63°)/(sin 52°)}}." },
      ],
      commonError: "Pairing a side with the wrong angle — each side must sit over the sine of the angle opposite it.",
      difficulty: "warmup",
      guideRef: "sine-rule",
      hints: [
        "Which angle is opposite the 11 cm side, and which is opposite AC?",
        "{{(AC)/(sin 63°) = 11/(sin 52°)}} — multiply both sides by sin 63°.",
      ],
      strategy: "Match each side to its opposite angle",
    },
    {
      kind: "short",
      id: "further-trigonometry-quiz-q02",
      question:
        "In triangle ABC, AB = 8 cm, AC = 11 cm and angle BAC = 64°.\n\nWork out the length of BC. Give your answer in cm, correct to 3 significant figures.",
      answer: { type: "number", value: 10.4, tolerance: 0.051, display: "10.4 cm" },
      solution: [
        "Two sides and the angle between them (SAS), so use the cosine rule.",
        "{{BC^2 = 8^2 + 11^2 - 2 * 8 * 11 * cos 64°}}",
        "{{BC^2 = 64 + 121 - 176 * 0.4383... = 185 - 77.15... = 107.84...}}",
        "BC = √107.84… = 10.384… = 10.4 cm (3 s.f.).",
      ],
      traps: [
        { spec: { type: "number", value: 1.99, tolerance: 0.006 }, feedback: "Order of operations: work out 2 × 8 × 11 × cos 64° first, then subtract it from 185. Doing (185 − 176) × cos 64° is not the cosine rule." },
        { spec: { type: "number", value: 16.2, tolerance: 0.051 }, feedback: "The cosine rule **subtracts** {{2bc cos A}}. Adding it gives a side that is too long for a 64° angle." },
      ],
      commonError: "Typing (64 + 121 − 2 × 8 × 11) × cos 64° into the calculator instead of 64 + 121 − (2 × 8 × 11 × cos 64°).",
      difficulty: "warmup",
      guideRef: "cosine-rule",
      hints: [
        "You know two sides and the angle **between** them. Which rule fits?",
        "{{a^2 = b^2 + c^2 - 2bc cos A}} with b = 11, c = 8, A = 64°.",
      ],
      strategy: "SAS → cosine rule",
    },
    {
      kind: "mcq",
      id: "further-trigonometry-quiz-q03",
      question:
        "A triangle has sides 4 cm, 7 cm and 9 cm. What is the cosine of its **largest** angle?",
      options: ["{{2/7}}", "{{-2/7}}", "{{-4/7}}", "{{19/21}}"],
      answerIndex: 1,
      explanation:
        "The largest angle is opposite the longest side (9 cm). {{cos C = (4^2 + 7^2 - 9^2)/(2 * 4 * 7) = (16 + 49 - 81)/56 = -16/56 = -2/7}}. The negative value tells you the angle is obtuse (about 106.6°). {{2/7}} comes from subtracting the wrong way round (81 − 65); {{-4/7}} forgets the 2 in 2ab; {{19/21}} is the cosine of the angle opposite the **shortest** side.",
      difficulty: "warmup",
      guideRef: "cosine-rule",
      hints: [
        "The largest angle is opposite the longest side.",
        "Use {{cos C = (a^2 + b^2 - c^2)/(2ab)}} with c = 9.",
      ],
      strategy: "Largest side ↔ largest angle",
    },
    {
      kind: "short",
      id: "further-trigonometry-quiz-q04",
      question:
        "A triangular garden bed has two sides of 6 m and 9 m with an angle of 35° between them.\n\nWork out its area. Give your answer in m², correct to 3 significant figures.",
      answer: { type: "number", value: 15.5, tolerance: 0.051, display: "15.5 m²" },
      solution: [
        "Two sides and the included angle: {{Area = 1/2 ab sin C}}.",
        "{{Area = 1/2 * 6 * 9 * sin 35° = 27 * 0.5735... = 15.48...}}",
        "Area = 15.5 m² (3 s.f.).",
      ],
      traps: [
        { spec: { type: "number", value: 31.0, tolerance: 0.051 }, feedback: "You've found ab sin C — the area is **half** of that (a triangle is half a parallelogram)." },
      ],
      commonError: "Forgetting the ½.",
      difficulty: "warmup",
      guideRef: "area-sine",
      hints: ["The angle is between the two given sides. Which area formula uses exactly that?", "{{1/2 * 6 * 9 * sin 35°}}"],
      strategy: "Use the included angle",
    },
    {
      kind: "short",
      id: "further-trigonometry-quiz-q05",
      question:
        "In triangle ABC, AB = 14 cm, BC = 10 cm and angle BAC = 38°. You are told that angle ACB is **obtuse**.\n\nWork out the size of angle ACB. Give your answer correct to 1 decimal place.",
      answer: { type: "number", value: 120.5, tolerance: 0.051, display: "120.5°" },
      solution: [
        "Sine rule with the pair BC = 10 opposite A = 38°, and AB = 14 opposite C:",
        "{{(sin C)/14 = (sin 38°)/10}}, so {{sin C = (14 sin 38°)/10 = 0.8619...}}",
        "Calculator: {{sin^(-1)(0.8619...) = 59.5°}} — but that is acute.",
        "sin C = sin(180° − C), so the obtuse angle is 180° − 59.53…° = 120.5°.",
        "Check: 38° + 120.5° = 158.5° < 180°, so the triangle exists.",
      ],
      traps: [
        { spec: { type: "number", value: 59.5, tolerance: 0.051 }, feedback: "That's the calculator's acute answer. The question says angle ACB is obtuse — use sin C = sin(180° − C)." },
      ],
      commonError: "Stopping at the calculator value: {{sin^(-1)}} only ever gives an angle between −90° and 90°.",
      difficulty: "core",
      guideRef: "sine-rule",
      hints: [
        "Which side is opposite the 38° angle? Which side is opposite C?",
        "Find sin C with the sine rule.",
        "Your calculator gives an acute angle. Which obtuse angle has the same sine?",
      ],
      strategy: "Use symmetry",
    },
    {
      kind: "mcq",
      id: "further-trigonometry-quiz-q06",
      question: "Solve {{sin x = sqrt(3)/2}} for 0° ≤ x ≤ 360°.",
      options: ["x = 60° only", "x = 60° and x = 300°", "x = 60° and x = 240°", "x = 60° and x = 120°"],
      answerIndex: 3,
      explanation:
        "The exact value {{sin 60° = sqrt(3)/2}} gives the first solution. The sine graph is symmetric about x = 90°, so the second solution is 180° − 60° = 120°. Both are in the first two quadrants, where sine is positive. 300° comes from using the **cosine** graph's symmetry (360° − x); 240° comes from adding 180°, which is the rule for **tan**. Stopping at 60° misses the second crossing of the line {{y = sqrt(3)/2}}.",
      difficulty: "core",
      guideRef: "trig-graphs",
      hints: [
        "Sketch y = sin x from 0° to 360° and draw the line {{y = sqrt(3)/2}} (about 0.87). How many times does it cross?",
        "The sine curve is symmetric about x = 90°. If one crossing is at 60°, where is the other?",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "further-trigonometry-quiz-q07",
      question:
        "Solve {{cos x = -0.35}} for 0° ≤ x ≤ 360°.\n\nGive all solutions correct to 1 decimal place.",
      answer: { type: "list", values: [110.5, 249.5], ordered: false, tolerance: 0.051, display: "x = 110.5° or x = 249.5°" },
      solution: [
        "Calculator: {{cos^(-1)(-0.35) = 110.487...°}}.",
        "The cosine graph is symmetric about x = 180°, so the other solution is 360° − 110.487…° = 249.51…°.",
        "x = 110.5° or x = 249.5° (1 d.p.). Both lie where cos is negative (between 90° and 270°) ✓.",
      ],
      traps: [
        { spec: { type: "list", values: [110.5, 69.5], tolerance: 0.051 }, feedback: "180° − x is the symmetry of the **sine** graph. Cosine is symmetric about 180°: use 360° − x." },
        { spec: { type: "list", values: [110.5, 290.5], tolerance: 0.051 }, feedback: "290.5° comes from 360° − 69.5°, where 69.5° = {{cos^(-1)(0.35)}}. Start from {{cos^(-1)(-0.35)}} itself and use 360° − x." },
      ],
      commonError: "Using the sine-graph rule (180° − x) for a cosine equation.",
      difficulty: "core",
      guideRef: "trig-graphs",
      hints: [
        "Get the first solution from your calculator.",
        "Sketch y = cos x. Where else does the line y = −0.35 cross the curve?",
        "Cosine is symmetric about x = 180°: the partner of x is 360° − x.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "further-trigonometry-quiz-q08",
      question:
        "Triangle PQR has PQ = 8 cm, PR = 7 cm and area 20 cm². Angle QPR is acute.\n\nWork out angle QPR. Give your answer correct to 1 decimal place.",
      answer: { type: "number", value: 45.6, tolerance: 0.051, display: "45.6°" },
      solution: [
        "Use the area formula backwards: {{1/2 * 8 * 7 * sin P = 20}}.",
        "28 sin P = 20, so {{sin P = 20/28 = 5/7 = 0.714...}}",
        "{{P = sin^(-1)(5/7) = 45.58...°}}, so angle QPR = 45.6° (1 d.p.).",
      ],
      traps: [
        { spec: { type: "number", value: 134.4, tolerance: 0.051 }, feedback: "That angle also has sine {{5/7}} and gives area 20 cm² — but the question says angle QPR is **acute**." },
      ],
      commonError: "Forgetting the ½: 56 sin P = 20 gives a different (wrong) angle.",
      difficulty: "core",
      guideRef: "area-sine",
      hints: [
        "Write down {{Area = 1/2 ab sin C}} with the numbers you know.",
        "28 sin P = 20. Make sin P the subject.",
      ],
      strategy: "Work backwards",
    },
    {
      kind: "mcq",
      id: "further-trigonometry-quiz-q09",
      question: "Simplify {{(1 - sin^2 x)/(cos x)}}.",
      options: ["{{cos x}}", "{{1}}", "{{(sin^2 x)/(cos x)}}", "{{1/(cos x) - sin x}}"],
      answerIndex: 0,
      explanation:
        "From {{sin^2 x + cos^2 x = 1}}, the top is {{1 - sin^2 x = cos^2 x}}. Then {{(cos^2 x)/(cos x) = cos x}}. 1 comes from replacing {{1 - sin^2 x}} by cos x (forgetting the square); {{(sin^2 x)/(cos x)}} rearranges the identity wrongly ({{1 - sin^2 x}} is cos²x, not sin²x); {{1/(cos x) - sin x}} splits the fraction and then 'cancels' {{(sin^2 x)/(cos x)}} to sin x, which is not allowed.",
      difficulty: "core",
      guideRef: "trig-identities",
      hints: [
        "Which identity contains {{sin^2 x}} and a 1?",
        "{{1 - sin^2 x = cos^2 x}}. Now cancel a common factor.",
      ],
      strategy: "Use an identity",
    },
    {
      kind: "short",
      id: "further-trigonometry-quiz-q10",
      question: "Solve {{tan x = -1}} for 0° ≤ x ≤ 360°.",
      answer: { type: "list", values: [135, 315], ordered: false, display: "x = 135° or x = 315°" },
      solution: [
        "Calculator: {{tan^(-1)(-1) = -45°}}, which is outside the interval.",
        "tan repeats every 180°: −45° + 180° = 135° and 135° + 180° = 315°.",
        "Check: tan is negative in the 2nd and 4th quadrants ✓. x = 135° or 315°.",
      ],
      traps: [
        { spec: { type: "list", values: [45, 225] }, feedback: "Those solve tan x = **+1**. tan x is negative in the 2nd and 4th quadrants." },
        { spec: { type: "list", values: [-45, 135] }, feedback: "−45° is not in the interval 0° ≤ x ≤ 360°. Keep adding 180° until you have every solution in range." },
      ],
      commonError: "Writing down the calculator's −45° even though it is outside the interval.",
      difficulty: "core",
      guideRef: "trig-equations",
      hints: [
        "What does your calculator give for {{tan^(-1)(-1)}}? Is it in the interval?",
        "The tan graph repeats every 180°.",
        "Add 180° (repeatedly) to −45° until you leave the interval.",
      ],
      strategy: "Use the period",
    },
  ],

  // =========================================================================
  // Practice papers
  // =========================================================================
  papers: [
    {
      id: "further-trigonometry-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "further-trigonometry-p1-q01",
          question:
            "In triangle ABC, BC = 12 cm, AC = 9 cm and angle BAC = 70°.\n\nWork out the size of angle ABC. Give your answer correct to 1 decimal place.",
          answer: { type: "number", value: 44.8, tolerance: 0.051, display: "44.8°" },
          solution: [
            "BC = 12 is opposite A = 70°, and AC = 9 is opposite B. Use the sine rule with the angles on top:",
            "{{(sin B)/9 = (sin 70°)/12}}",
            "{{sin B = (9 sin 70°)/12 = 0.7047...}}",
            "{{B = sin^(-1)(0.7047...) = 44.81...°}} = 44.8°. (It must be acute: B is opposite a shorter side than A.)",
          ],
          traps: [
            { spec: { type: "number", value: 135.2, tolerance: 0.051 }, feedback: "B is opposite the shorter side (9 cm < 12 cm), so it must be smaller than the 70° angle — the acute answer is the only one." },
          ],
          commonError: "Putting 12 with angle B: the side opposite B is AC = 9 cm.",
          difficulty: "warmup",
          guideRef: "sine-rule",
          hints: ["Finding an angle? Put the sines on top: {{(sin A)/a = (sin B)/b}}.", "Which side is opposite B?"],
          strategy: "Match each side to its opposite angle",
        },
        {
          kind: "short",
          id: "further-trigonometry-p1-q02",
          question:
            "Two straight paths on Sentosa leave a junction J at an angle of 72° to each other. Mei walks 45 m along one path to point M. Ravi walks 60 m along the other path to point R.\n\nWork out the straight-line distance MR. Give your answer in metres, correct to 3 significant figures.",
          answer: { type: "number", value: 62.9, tolerance: 0.051, display: "62.9 m" },
          solution: [
            "Triangle JMR: JM = 45, JR = 60, angle J = 72° (SAS) → cosine rule.",
            "{{MR^2 = 45^2 + 60^2 - 2 * 45 * 60 * cos 72°}}",
            "{{MR^2 = 2025 + 3600 - 5400 * 0.3090... = 5625 - 1668.7... = 3956.3...}}",
            "MR = √3956.3… = 62.899… = 62.9 m (3 s.f.).",
          ],
          traps: [
            { spec: { type: "number", value: 69.2, tolerance: 0.051 }, feedback: "The cosine rule subtracts **2**bc cos A — you've used bc cos A." },
          ],
          commonError: "Missing the 2 in 2bc cos A.",
          difficulty: "warmup",
          guideRef: "cosine-rule",
          hints: ["Sketch triangle JMR. What do you know: sides, angles, and where?", "SAS → {{MR^2 = JM^2 + JR^2 - 2(JM)(JR) cos J}}."],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "further-trigonometry-p1-q03",
          question:
            "Triangle XYZ has XY = 7.5 cm, XZ = 11 cm and angle YXZ = 48°.\n\nWork out the area of the triangle. Give your answer in cm², correct to 3 significant figures.",
          answer: { type: "number", value: 30.7, tolerance: 0.051, display: "30.7 cm²" },
          solution: [
            "Angle X is between sides XY and XZ, so {{Area = 1/2 * XY * XZ * sin X}}.",
            "{{Area = 1/2 * 7.5 * 11 * sin 48° = 41.25 * 0.7431... = 30.65...}}",
            "Area = 30.7 cm² (3 s.f.).",
          ],
          commonError: "Using a side that is not next to the given angle.",
          difficulty: "warmup",
          guideRef: "area-sine",
          hints: ["Is the 48° angle between the two sides you know?", "{{1/2 * 7.5 * 11 * sin 48°}}"],
        },
        {
          kind: "short",
          id: "further-trigonometry-p1-q04",
          question:
            "{{tan 50° = 1.19}} (to 3 s.f.). Use the graph of y = tan x to find the **other** value of x, with 0° ≤ x ≤ 360°, for which {{tan x = 1.19}}.",
          answer: { type: "number", value: 230, display: "230°" },
          solution: [
            "The graph of y = tan x repeats every 180°.",
            "So tan(x + 180°) = tan x: the partner of 50° is 50° + 180° = 230°.",
            "(Adding another 180° gives 410°, outside the interval, so there are no more solutions.)",
          ],
          traps: [
            { spec: { type: "number", value: 130 }, feedback: "180° − x is the symmetry of the **sine** graph — tan 130° is negative. tan repeats every 180°, so add 180°." },
            { spec: { type: "number", value: 310 }, feedback: "360° − x is the symmetry of the **cosine** graph — tan 310° is negative. tan repeats every 180°, so add 180°." },
          ],
          difficulty: "warmup",
          guideRef: "trig-graphs",
          hints: ["Sketch y = tan x from 0° to 360°. How often does the pattern repeat?"],
          strategy: "Use the period",
        },
        {
          kind: "short",
          id: "further-trigonometry-p1-q05",
          question:
            "A triangle has sides of length 5 cm, 7 cm and 11 cm.\n\nWork out the size of its largest angle. Give your answer correct to 1 decimal place.",
          answer: { type: "number", value: 132.2, tolerance: 0.051, display: "132.2°" },
          solution: [
            "The largest angle is opposite the longest side, 11 cm.",
            "{{cos C = (5^2 + 7^2 - 11^2)/(2 * 5 * 7) = (25 + 49 - 121)/70 = -47/70}}",
            "{{C = cos^(-1)(-47/70) = 132.17...°}} = 132.2°.",
            "The negative cosine is what makes the angle obtuse — the calculator handles it correctly (unlike {{sin^(-1)}}).",
          ],
          traps: [
            { spec: { type: "number", value: 47.8, tolerance: 0.051 }, feedback: "You've lost the minus sign: 25 + 49 − 121 = −47, so cos C is **negative** and the angle is obtuse." },
          ],
          commonError: "Working out 25 + 49 − 121 as +47, giving an acute angle.",
          difficulty: "core",
          guideRef: "cosine-rule",
          hints: [
            "Which angle is largest? It's opposite which side?",
            "Rearranged cosine rule: {{cos C = (a^2 + b^2 - c^2)/(2ab)}}, with c the side opposite C.",
            "Keep the sign of the numerator — what does a negative cosine tell you?",
          ],
          strategy: "Largest side ↔ largest angle",
        },
        {
          kind: "short",
          id: "further-trigonometry-p1-q06",
          question:
            "Two coastguard stations A and B are 15 km apart, with B due east of A. A boat L is on a bearing of 038° from A and on a bearing of 341° from B.\n\nWork out the distance AL. Give your answer in km, correct to 3 significant figures.",
          answer: { type: "number", value: 16.9, tolerance: 0.051, display: "16.9 km" },
          solution: [
            "Angle LAB = 90° − 38° = 52° (AB points due east, bearing 090°).",
            "From B, BA points due west (bearing 270°). Angle LBA = 341° − 270° = 71°.",
            "Angle ALB = 180° − 52° − 71° = 57°.",
            "AL is opposite angle B: {{(AL)/(sin 71°) = 15/(sin 57°)}}, so {{AL = (15 sin 71°)/(sin 57°) = 16.91...}}",
            "AL = 16.9 km (3 s.f.).",
          ],
          traps: [
            { spec: { type: "number", value: 14.1, tolerance: 0.051 }, feedback: "That's BL. AL is opposite the angle at **B** (71°), not the angle at A." },
          ],
          commonError: "Using the bearings themselves (38° and 341°) as angles inside the triangle.",
          difficulty: "core",
          guideRef: "sine-rule",
          hints: [
            "Draw A, B and L with north lines. What angle does AL make with AB?",
            "Angle at A = 52°, angle at B = 71°. What's the third angle?",
            "AL is opposite the 71° angle; AB = 15 is opposite the 57° angle. Sine rule.",
          ],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "further-trigonometry-p1-q07",
          question:
            "OAB is a sector of a circle, centre O, radius 10 cm. Angle AOB = 70°.\n\nWork out the area of the shaded segment between the chord AB and the arc AB. Give your answer in cm², correct to 3 significant figures.",
          diagram: `<svg viewBox="0 0 300 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sector OAB of a circle centre O, radius 10 cm, angle AOB 70 degrees, with the segment between chord AB and the arc shaded"><rect x="0" y="0" width="300" height="220" fill="#ffffff"/><path d="M 60 180 L 240 180 A 180 180 0 0 0 121.6 10.9 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><path d="M 240 180 A 180 180 0 0 0 121.6 10.9 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M 86 180 A 26 26 0 0 0 68.9 155.6" fill="none" stroke="#334155" stroke-width="1.5"/><text x="104" y="166" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">70°</text><text x="52" y="196" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">O</text><text x="250" y="186" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="117.6" y="2.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="150" y="198" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10 cm</text><text x="66.8" y="95.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10 cm</text></svg>`,
          answer: { type: "number", value: 14.1, tolerance: 0.051, display: "14.1 cm²" },
          solution: [
            "Segment = sector − triangle.",
            "Sector: {{70/360 * pi * 10^2 = 61.086...}} cm².",
            "Triangle OAB: {{1/2 * 10 * 10 * sin 70° = 46.984...}} cm².",
            "Segment = 61.086… − 46.984… = 14.10… = 14.1 cm² (3 s.f.).",
          ],
          traps: [
            { spec: { type: "number", value: 61.1, tolerance: 0.051 }, feedback: "That's the whole sector. The segment is what's left after you remove triangle OAB." },
            { spec: { type: "number", value: 47.0, tolerance: 0.051 }, feedback: "That's triangle OAB. Subtract it from the sector to get the segment." },
          ],
          commonError: "Rounding the sector and triangle early — keep full calculator values until the subtraction.",
          difficulty: "core",
          guideRef: "area-sine",
          hints: [
            "The segment is a sector with a triangle taken away.",
            "Sector area = {{theta/360 * pi r^2}}. Triangle area = {{1/2 ab sin C}} with a = b = 10.",
            "Subtract, keeping full accuracy until the end.",
          ],
          strategy: "Split into parts",
        },
        {
          kind: "written",
          id: "further-trigonometry-p1-q08",
          question:
            "Triangle ABC has the usual labelling: side a is opposite angle A, side b is opposite angle B. Let h be the perpendicular height from C to AB.\n\nShow that {{a/(sin A) = b/(sin B)}}.",
          marks: 3,
          modelAnswer:
            "Drop the perpendicular from C to AB, with length h. In the right-angled triangle containing A, {{sin A = h/b}}, so h = b sin A. In the right-angled triangle containing B, {{sin B = h/a}}, so h = a sin B. Both expressions equal h, so a sin B = b sin A. Dividing both sides by sin A sin B gives {{a/(sin A) = b/(sin B)}}.",
          markScheme: [
            { point: "Uses the right-angled triangle at A: h = b sin A", keywords: ["h = b sin a", "b sin a", "sin a = h/b"] },
            { point: "Uses the right-angled triangle at B: h = a sin B", keywords: ["h = a sin b", "a sin b", "sin b = h/a"] },
            { point: "Equates the two expressions for h and divides by sin A sin B to reach the result", keywords: ["a sin b = b sin a", "equate", "divide", "same height", "both equal h"] },
          ],
          commonError: "Starting from the sine rule and 'proving' it by rearranging — that assumes what you are asked to show.",
          difficulty: "core",
          guideRef: "sine-rule",
          hints: [
            "The height h splits the triangle into two right-angled triangles. Which sides are their hypotenuses?",
            "Use SOH in each: express h once using angle A and once using angle B.",
            "Set the two expressions for h equal, then divide.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "further-trigonometry-p1-q09",
          question:
            "Write down the maximum value and the minimum value of {{y = 3 sin x + 1}}. Give the maximum first.",
          answer: { type: "list", values: [4, -2], ordered: true, display: "maximum 4, minimum −2" },
          solution: [
            "sin x takes every value from −1 to 1.",
            "Multiply by 3: 3 sin x goes from −3 to 3 (stretch parallel to the y-axis, scale factor 3).",
            "Add 1: 3 sin x + 1 goes from −2 to 4 (translation by {{(0, 1)}}).",
            "Maximum 4, minimum −2.",
          ],
          traps: [
            { spec: { type: "list", values: [4, -4], ordered: true }, feedback: "The +1 moves the **whole** graph up, including the minimum: −3 + 1 = −2." },
            { spec: { type: "list", values: [3, -3], ordered: true }, feedback: "Don't forget the +1 — it translates the graph up by 1." },
          ],
          commonError: "Adding 1 to the maximum but not to the minimum.",
          difficulty: "core",
          guideRef: "trig-graphs",
          hints: ["What are the largest and smallest values of sin x?", "Apply × 3 then + 1 to both of them."],
          strategy: "Consider extremes",
        },
        {
          kind: "written",
          id: "further-trigonometry-p1-q10",
          question:
            "In triangle ABC, AC = x cm, AB = (x + 2) cm, angle BAC = 60° and BC = {{2 sqrt(13)}} cm.\n\nShow that {{x^2 + 2x - 48 = 0}}.",
          diagram: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with AC x cm, AB x plus 2 cm, angle A 60 degrees and BC 2 root 13 cm"><rect x="0" y="0" width="360" height="240" fill="#ffffff"/><polygon points="49.1,205 310.9,205 147.3,35" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><text x="34.7" y="216.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="325.7" y="215.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="144.3" y="24.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="83.4" y="118.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x cm</text><text x="183" y="224.7" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">(x + 2) cm</text><text x="243.5" y="117.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2√13 cm</text><path d="M 71.1 205 A 22 22 0 0 0 60.1 185.9" fill="none" stroke="#334155" stroke-width="1.5"/><text x="83.8" y="189" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60°</text></svg>`,
          marks: 3,
          modelAnswer:
            "By the cosine rule, {{BC^2 = x^2 + (x + 2)^2 - 2x(x + 2) cos 60°}}. Since {{cos 60° = 1/2}} and {{BC^2 = (2 sqrt(13))^2 = 52}}: {{52 = x^2 + x^2 + 4x + 4 - x(x + 2) = x^2 + 2x + 4}}. So {{x^2 + 2x + 4 - 52 = 0}}, i.e. {{x^2 + 2x - 48 = 0}}.",
          markScheme: [
            { point: "Correct cosine rule statement with x, x + 2 and cos 60°", keywords: ["cos 60", "cosine rule", "2x(x + 2)", "x^2 + (x + 2)^2"] },
            { point: "Uses cos 60° = 1/2 and (2√13)² = 52", keywords: ["1/2", "0.5", "52"] },
            { point: "Expands and simplifies correctly to x² + 2x − 48 = 0", keywords: ["x^2 + 2x + 4", "x^2 + 2x - 48 = 0", "x² + 2x − 48"] },
          ],
          commonError: "Squaring {{2 sqrt(13)}} as 26 instead of 4 × 13 = 52.",
          difficulty: "core",
          guideRef: "cosine-rule",
          hints: [
            "You know two sides and the angle between them, and the third side. Which rule links all four?",
            "{{cos 60° = 1/2}} exactly, and {{(2 sqrt(13))^2 = 4 * 13}}.",
            "Expand {{(x + 2)^2}} fully, collect terms and bring 52 across.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "further-trigonometry-p1-q11",
          question:
            "For the triangle in the previous question, {{x^2 + 2x - 48 = 0}}.\n\nWork out the exact area of triangle ABC. Give your answer in the form {{k sqrt(3)}} cm².",
          answer: { type: "expression", expr: "12sqrt(3)", form: "surd", display: "{{12 sqrt(3)}} cm²" },
          solution: [
            "Solve: {{x^2 + 2x - 48 = (x + 8)(x - 6) = 0}}, so x = 6 or x = −8.",
            "A length can't be negative, so x = 6: AC = 6 cm and AB = 8 cm.",
            "{{Area = 1/2 * 6 * 8 * sin 60° = 24 * sqrt(3)/2 = 12 sqrt(3)}} cm².",
          ],
          traps: [
            { spec: { type: "expression", expr: "24sqrt(3)" }, feedback: "You've used sin 60° = √3 but it is {{sqrt(3)/2}} — or you've forgotten the ½." },
          ],
          commonError: "Using a decimal for sin 60° — the question wants the exact value {{sqrt(3)/2}}.",
          difficulty: "core",
          guideRef: "area-sine",
          hints: [
            "Solve the quadratic first. Which root makes sense as a length?",
            "The 60° angle sits between AC and AB — perfect for {{1/2 ab sin C}}.",
            "{{sin 60° = sqrt(3)/2}} exactly.",
          ],
          strategy: "Use exact values",
        },
        {
          kind: "short",
          id: "further-trigonometry-p1-q12",
          question:
            "Angle θ is obtuse and {{sin theta = 7/25}}.\n\nWork out the exact value of cos θ. Give your answer as a fraction.",
          answer: { type: "fraction", n: -24, d: 25, simplest: true, display: "{{-24/25}}" },
          solution: [
            "{{sin^2 theta + cos^2 theta = 1}}, so {{cos^2 theta = 1 - 49/625 = 576/625}}.",
            "{{cos theta = +- 24/25}}.",
            "θ is obtuse (between 90° and 180°), where cosine is negative, so {{cos theta = -24/25}}.",
          ],
          traps: [
            { spec: { type: "fraction", n: 24, d: 25 }, feedback: "Right size, wrong sign: for an obtuse angle cos θ is **negative** (look at the cosine graph between 90° and 180°)." },
            { spec: { type: "fraction", n: 18, d: 25 }, feedback: "You've worked out 1 − sin θ. The identity uses the **squares**: {{cos^2 theta = 1 - sin^2 theta}}." },
          ],
          commonError: "Taking only the positive square root.",
          difficulty: "core",
          guideRef: "trig-identities",
          hints: [
            "Which identity links sin θ and cos θ?",
            "{{cos^2 theta = 1 - (7/25)^2}}. Square-rooting gives two possible values.",
            "Is cosine positive or negative between 90° and 180°?",
          ],
          strategy: "Use an identity",
        },
        {
          kind: "short",
          id: "further-trigonometry-p1-q13",
          question:
            "Solve {{3cos^2 x + 5cos x - 2 = 0}} for 0° ≤ x ≤ 360°.\n\nGive every solution, correct to 1 decimal place.",
          answer: { type: "list", values: [70.5, 289.5], ordered: false, tolerance: 0.051, display: "x = 70.5°, 289.5°" },
          solution: [
            "Let c = cos x: {{3c^2 + 5c - 2 = 0}}, which factorises as (3c − 1)(c + 2) = 0.",
            "So {{cos x = 1/3}} or cos x = −2.",
            "cos x = −2 has no solutions, because −1 ≤ cos x ≤ 1 for every x.",
            "{{cos x = 1/3}}: {{cos^(-1)(1/3) = 70.528...°}}, and by symmetry about 180°, 360° − 70.528…° = 289.47…°.",
            "Solutions: 70.5°, 289.5° (1 d.p.).",
          ],
          traps: [
            { spec: { type: "list", values: [70.5, 109.5], tolerance: 0.051 }, feedback: "180° − x is the **sine** symmetry. For cos x = {{1/3}}, the partner of 70.5° is 360° − 70.5° = 289.5°." },
            { spec: { type: "list", values: [109.5, 250.5], tolerance: 0.051 }, feedback: "Check the factorisation: (3c − 1)(c + 2) gives {{c = 1/3}}, not {{c = -1/3}}. Expand your brackets to check." },
          ],
          commonError: "Trying to solve cos x = −2 as well — the calculator gives an error because cos x can never be less than −1.",
          difficulty: "challenge",
          guideRef: "trig-equations",
          hints: [
            "This is a quadratic in disguise. What would you call cos x to make that obvious?",
            "Factorise {{3c^2 + 5c - 2}}.",
            "One of the roots is impossible for cos x. Which one, and why? Then use the cos graph for the other.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "written",
          id: "further-trigonometry-p1-q14",
          question:
            "In triangle ABC, AB = 10 cm, BC = 7 cm and angle BAC = 40°.\n\nShow that there are two possible values for angle ACB, and find both, correct to 1 decimal place.",
          marks: 4,
          modelAnswer:
            "Sine rule: {{(sin C)/10 = (sin 40°)/7}}, so {{sin C = (10 sin 40°)/7 = 0.9183}}. One value is {{C = sin^(-1)(0.9183) = 66.7°}}. Since sin(180° − C) = sin C, C could also be 180° − 66.7° = 113.3°. Both are possible: 40° + 66.7° = 106.7° < 180° and 40° + 113.3° = 153.3° < 180°, so each leaves a positive third angle. Angle ACB = 66.7° or 113.3°.",
          markScheme: [
            { point: "Correct sine rule leading to sin C = 0.918…", keywords: ["sin c", "10 sin 40", "0.918", "0.9183"] },
            { point: "First value 66.7°", keywords: ["66.7"] },
            { point: "Second value 180° − 66.7° = 113.3°", keywords: ["113.3", "180 - 66.7", "180 −"] },
            { point: "Checks both angle sums are under 180° (so both triangles exist)", keywords: ["less than 180", "< 180", "153.3", "106.7", "both possible", "third angle"] },
          ],
          commonError: "Giving only the calculator's acute answer and not checking whether the obtuse one also works.",
          difficulty: "challenge",
          guideRef: "sine-rule",
          hints: [
            "The given angle (40°) is **not** between the two given sides. Which rule do you use?",
            "Find sin C. How many angles between 0° and 180° have that sine?",
            "For each candidate C, add 40°. Is there room left for angle B?",
          ],
          strategy: "Split into cases",
        },
        {
          kind: "short",
          id: "further-trigonometry-p1-q15",
          question:
            "ABCD is a quadrilateral. AB = 6 cm, BC = 8 cm, CD = 5 cm, angle ABC = 110° and angle ACD = 40°.\n\nWork out the area of ABCD. Give your answer in cm², correct to 3 significant figures.",
          diagram: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Quadrilateral ABCD split by diagonal AC; AB 6 cm, BC 8 cm, angle ABC 110 degrees, CD 5 cm, angle ACD 40 degrees"><rect x="0" y="0" width="380" height="260" fill="#ffffff"/><polygon points="40,56.7 101.2,225 340,225 287.2,85.4" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="40" y1="56.7" x2="340" y2="225" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><text x="26.3" y="53.5" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="89" y="240.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="354.2" y="237.4" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="300.6" y="81.6" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="54.7" y="143.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6 cm</text><text x="226.2" y="244" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">8 cm</text><text x="329.6" y="160.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">5 cm</text><path d="M 93.7 204.3 A 22 22 0 0 1 123.2 225" fill="none" stroke="#334155" stroke-width="1.5"/><text x="124.2" y="196.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">110°</text><path d="M 315.6 211.3 A 28 28 0 0 1 330.1 198.8" fill="none" stroke="#334155" stroke-width="1.5"/><text x="308.7" y="192.6" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40°</text></svg>`,
          answer: { type: "number", value: 41.1, tolerance: 0.051, display: "41.1 cm²" },
          solution: [
            "Split along the diagonal AC.",
            "Triangle ABC: {{1/2 * 6 * 8 * sin 110° = 22.55...}} cm².",
            "To use angle ACD you need AC. Cosine rule: {{AC^2 = 6^2 + 8^2 - 2 * 6 * 8 * cos 110° = 100 + 32.83... = 132.83...}}, so AC = 11.525… cm.",
            "Triangle ACD: {{1/2 * 11.525... * 5 * sin 40° = 18.52...}} cm².",
            "Total = 22.55… + 18.52… = 41.07… = 41.1 cm² (3 s.f.).",
          ],
          traps: [
            { spec: { type: "number", value: 22.6, tolerance: 0.051 }, feedback: "That's only triangle ABC. You still need triangle ACD — find AC first." },
          ],
          commonError: "Treating cos 110° as positive: it is negative, so −2 × 6 × 8 × cos 110° **adds** to 100.",
          difficulty: "challenge",
          guideRef: "area-sine",
          hints: [
            "Split the quadrilateral into two triangles along AC.",
            "Triangle ABC's area is direct. For triangle ACD you need the side AC.",
            "Cosine rule in triangle ABC gives AC. Careful: cos 110° is negative.",
            "Area of ACD = {{1/2 * AC * 5 * sin 40°}}. Add the two areas.",
          ],
          strategy: "Split into parts",
        },
      ],
    },
    {
      id: "further-trigonometry-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "further-trigonometry-p2-q01",
          question:
            "In triangle ABC, AB = 14 cm, angle BAC = 38° and angle ABC = 67°.\n\nWork out the length of BC. Give your answer in cm, correct to 3 significant figures.",
          answer: { type: "number", value: 8.92, tolerance: 0.006, display: "8.92 cm" },
          solution: [
            "Angle ACB = 180° − 38° − 67° = 75°. AB = 14 is opposite C.",
            "BC is opposite A: {{(BC)/(sin 38°) = 14/(sin 75°)}}.",
            "{{BC = (14 sin 38°)/(sin 75°) = 8.923...}}",
            "BC = 8.92 cm (3 s.f.).",
          ],
          traps: [
            { spec: { type: "number", value: 9.36, tolerance: 0.006 }, feedback: "You've paired 14 cm with the 67° angle, but AB is opposite angle **C**. Find angle C first (180° − 38° − 67°)." },
          ],
          commonError: "Not finding the third angle, so the 14 cm side has no matching angle.",
          difficulty: "warmup",
          guideRef: "sine-rule",
          hints: ["Which angle is opposite the 14 cm side? You may need to work it out.", "Angle C = 75°. Now {{(BC)/(sin 38°) = 14/(sin 75°)}}."],
          strategy: "Match each side to its opposite angle",
        },
        {
          kind: "short",
          id: "further-trigonometry-p2-q02",
          question:
            "A triangle has sides 6 cm, 7 cm and 8 cm.\n\nWork out the angle opposite the 8 cm side. Give your answer correct to 1 decimal place.",
          answer: { type: "number", value: 75.5, tolerance: 0.051, display: "75.5°" },
          solution: [
            "Three sides known (SSS): cosine rule rearranged.",
            "{{cos C = (6^2 + 7^2 - 8^2)/(2 * 6 * 7) = (36 + 49 - 64)/84 = 21/84 = 1/4}}",
            "{{C = cos^(-1)(1/4) = 75.52...°}} = 75.5°.",
          ],
          traps: [
            { spec: { type: "number", value: 104.5, tolerance: 0.051 }, feedback: "Sign slip: 36 + 49 − 64 = +21, so cos C is positive and C is acute." },
          ],
          difficulty: "warmup",
          guideRef: "cosine-rule",
          hints: ["Three sides, no angles: which rule?", "{{cos C = (a^2 + b^2 - c^2)/(2ab)}} with c = 8."],
          strategy: "SSS → cosine rule",
        },
        {
          kind: "short",
          id: "further-trigonometry-p2-q03",
          question:
            "Without a calculator, work out the area of a triangle with sides 4 cm and 6 cm and an angle of 30° between them. Give your answer in cm².",
          answer: { type: "number", value: 6, display: "6 cm²" },
          solution: [
            "{{Area = 1/2 ab sin C = 1/2 * 4 * 6 * sin 30°}}.",
            "{{sin 30° = 1/2}} exactly, so Area = 12 × {{1/2}} = 6 cm².",
          ],
          traps: [
            { spec: { type: "number", value: 12 }, feedback: "Remember sin 30° = {{1/2}} as well as the ½ at the front: ½ × 4 × 6 × ½ = 6." },
          ],
          difficulty: "warmup",
          guideRef: "area-sine",
          hints: ["What is sin 30° exactly?", "{{1/2 * 4 * 6 * 1/2}}"],
          strategy: "Use exact values",
        },
        {
          kind: "mcq",
          id: "further-trigonometry-p2-q04",
          question: "The diagram shows a graph for 0° ≤ x ≤ 360°. Which equation does it show?",
          diagram: `<svg viewBox="0 0 392 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of a trigonometric curve for x from 0 to 360 degrees, starting at a maximum of 2, crossing at 90 and 270, minimum of minus 2 at 180"><rect x="0" y="0" width="392" height="220" fill="#ffffff"/><line x1="40" y1="110" x2="370" y2="110" stroke="#334155" stroke-width="1.5"/><line x1="40" y1="20" x2="40" y2="200" stroke="#334155" stroke-width="1.5"/><line x1="120" y1="106" x2="120" y2="114" stroke="#334155"/><text x="120" y="128" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">90</text><line x1="200" y1="106" x2="200" y2="114" stroke="#334155"/><text x="200" y="128" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">180</text><line x1="280" y1="106" x2="280" y2="114" stroke="#334155"/><text x="280" y="128" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">270</text><line x1="360" y1="106" x2="360" y2="114" stroke="#334155"/><text x="360" y="128" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">360</text><line x1="36" y1="190" x2="44" y2="190" stroke="#334155"/><text x="32" y="194" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">−2</text><line x1="36" y1="150" x2="44" y2="150" stroke="#334155"/><text x="32" y="154" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">−1</text><line x1="36" y1="70" x2="44" y2="70" stroke="#334155"/><text x="32" y="74" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">1</text><line x1="36" y1="30" x2="44" y2="30" stroke="#334155"/><text x="32" y="34" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">2</text><line x1="40" y1="30" x2="370" y2="30" stroke="#cbd5e1" stroke-dasharray="4 4"/><line x1="40" y1="190" x2="370" y2="190" stroke="#cbd5e1" stroke-dasharray="4 4"/><polyline points="40,30 44.4,30.3 48.9,31.2 53.3,32.7 57.8,34.8 62.2,37.5 66.7,40.7 71.1,44.5 75.6,48.7 80,53.4 84.4,58.6 88.9,64.1 93.3,70 97.8,76.2 102.2,82.6 106.7,89.3 111.1,96.1 115.6,103 120,110 124.4,117 128.9,123.9 133.3,130.7 137.8,137.4 142.2,143.8 146.7,150 151.1,155.9 155.6,161.4 160,166.6 164.4,171.3 168.9,175.5 173.3,179.3 177.8,182.5 182.2,185.2 186.7,187.3 191.1,188.8 195.6,189.7 200,190 204.4,189.7 208.9,188.8 213.3,187.3 217.8,185.2 222.2,182.5 226.7,179.3 231.1,175.5 235.6,171.3 240,166.6 244.4,161.4 248.9,155.9 253.3,150 257.8,143.8 262.2,137.4 266.7,130.7 271.1,123.9 275.6,117 280,110 284.4,103 288.9,96.1 293.3,89.3 297.8,82.6 302.2,76.2 306.7,70 311.1,64.1 315.6,58.6 320,53.4 324.4,48.7 328.9,44.5 333.3,40.7 337.8,37.5 342.2,34.8 346.7,32.7 351.1,31.2 355.6,30.3 360,30" fill="none" stroke="#4f46e5" stroke-width="2.5"/><text x="376" y="114" font-size="12" font-family="sans-serif" text-anchor="start" fill="#1f2937">x</text><text x="46" y="18" font-size="12" font-family="sans-serif" text-anchor="start" fill="#1f2937">y</text><text x="32" y="128" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text></svg>`,
          options: ["{{y = 2 sin x}}", "{{y = cos 2x}}", "{{y = 2 cos x}}", "{{y = cos x + 2}}"],
          answerIndex: 2,
          explanation:
            "The curve starts at its maximum when x = 0, crosses at 90° and 270° and has its minimum at 180° — that's the shape of y = cos x. Its values run from −2 to 2, so it has been stretched by scale factor 2 parallel to the y-axis: {{y = 2 cos x}}. {{y = 2 sin x}} would start at 0, not at a maximum; {{y = cos 2x}} would complete **two** full cycles in 360° and stay between −1 and 1; {{y = cos x + 2}} would run from 1 to 3.",
          difficulty: "warmup",
          guideRef: "trig-graphs",
          hints: ["Where does the curve start when x = 0 — at 0 or at a maximum?", "Read off the maximum and minimum values. What stretch does that suggest?"],
          strategy: "Eliminate options",
        },
        {
          kind: "short",
          id: "further-trigonometry-p2-q05",
          question:
            "A ship sails 12 km from port P on a bearing of 050° to a buoy Q. It then sails 9 km on a bearing of 130° to a lighthouse R.\n\nWork out the distance PR. Give your answer in km, correct to 3 significant figures.",
          diagram: `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Ship sails from P 12 km on a bearing of 050 degrees to Q, then 9 km on a bearing of 130 degrees to R; north arrows at P and Q"><rect x="0" y="0" width="380" height="260" fill="#ffffff"/><line x1="50" y1="230" x2="50" y2="175" stroke="#334155" stroke-width="1.5"/><polygon points="46,181 54,181 50,173" fill="#334155"/><text x="50" y="169" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">N</text><line x1="210" y1="95.7" x2="210" y2="40.7" stroke="#334155" stroke-width="1.5"/><polygon points="206,46.7 214,46.7 210,38.7" fill="#334155"/><text x="210" y="34.7" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">N</text><polyline points="50,230 210,95.7 330,196.4" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="50" y1="230" x2="330" y2="196.4" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><text x="38" y="234" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">P</text><text x="210" y="115.7" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Q</text><text x="342" y="200.4" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">R</text><text x="104" y="162.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">12 km</text><text x="296" y="146.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">9 km</text></svg>`,
          answer: { type: "number", value: 16.2, tolerance: 0.051, display: "16.2 km" },
          solution: [
            "At Q, the bearing back to P is 050° + 180° = 230°.",
            "Angle PQR = 230° − 130° = 100°.",
            "Cosine rule: {{PR^2 = 12^2 + 9^2 - 2 * 12 * 9 * cos 100° = 225 + 37.50... = 262.50...}}",
            "PR = √262.50… = 16.20… = 16.2 km (3 s.f.).",
          ],
          solutions: [
            {
              label: "Co-interior angles",
              steps: [
                "The north lines at P and Q are parallel, so the angle between QP and north at Q is 180° − 50° = 130°, measured on the west side.",
                "QR is 130° clockwise from north at Q, i.e. 50° east of south; QP is 50° west of south (bearing 230°).",
                "So angle PQR = 50° + 50° = 100°, the same as before.",
              ],
            },
          ],
          traps: [
            { spec: { type: "number", value: 13.7, tolerance: 0.051 }, feedback: "You've used 80° (130° − 50°) as the angle at Q. Draw the north line at Q: the angle inside the triangle is 180° − 80° = 100°." },
          ],
          commonError: "Subtracting the bearings (130° − 50° = 80°) and using that as the angle inside the triangle.",
          difficulty: "core",
          guideRef: "cosine-rule",
          hints: [
            "Draw north lines at P and Q. What's the bearing of P from Q?",
            "The back bearing is 230°. Angle PQR = 230° − 130°.",
            "Two sides and the included angle → cosine rule.",
          ],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "further-trigonometry-p2-q06",
          question:
            "A tree FT stands vertically on level ground. Points A and B are on the ground in a straight line with F, with AB = 20 m. The angle of elevation of the top T is 32° from A and 50° from B.\n\nWork out the height FT of the tree. Give your answer in metres, correct to 3 significant figures.",
          diagram: `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree FT standing vertically; points A and B on level ground in line with its foot F, AB 20 m; angles of elevation of T are 32 degrees from A and 50 degrees from B"><rect x="0" y="0" width="400" height="230" fill="#ffffff"/><line x1="25" y1="190" x2="321.1" y2="190" stroke="#334155" stroke-width="2"/><line x1="296.1" y1="190" x2="296.1" y2="30" stroke="#15803d" stroke-width="4"/><line x1="40" y1="190" x2="296.1" y2="30" stroke="#1f2937" stroke-width="1.5"/><line x1="161.8" y1="190" x2="296.1" y2="30" stroke="#1f2937" stroke-width="1.5"/><polyline points="286.1,190 286.1,180 296.1,180" fill="none" stroke="#334155"/><path d="M 70 190 A 30 30 0 0 0 65.4 174.1" fill="none" stroke="#334155" stroke-width="1.5"/><text x="86" y="182" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">32°</text><path d="M 187.8 190 A 26 26 0 0 0 178.5 170.1" fill="none" stroke="#334155" stroke-width="1.5"/><text x="201.8" y="180" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50°</text><text x="40" y="210" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="161.8" y="210" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="308.1" y="208" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">F</text><text x="310.1" y="34" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">T</text><text x="100.9" y="210" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20 m</text></svg>`,
          answer: { type: "number", value: 26.3, tolerance: 0.051, display: "26.3 m" },
          solution: [
            "In triangle ABT: angle ABT = 180° − 50° = 130°, so angle ATB = 180° − 32° − 130° = 18°.",
            "Sine rule for BT (opposite the 32° at A): {{(BT)/(sin 32°) = 20/(sin 18°)}}, so BT = 34.297… m.",
            "Right-angled triangle BFT: FT = BT sin 50° = 34.297… × 0.7660… = 26.27… m.",
            "FT = 26.3 m (3 s.f.).",
          ],
          traps: [
            { spec: { type: "number", value: 34.3, tolerance: 0.051 }, feedback: "That's the sloping distance BT. One more step: in right-angled triangle BFT, FT = BT sin 50°." },
          ],
          commonError: "Using 50° as an angle in triangle ABT — the angle at B inside that triangle is 130°.",
          difficulty: "core",
          guideRef: "sine-rule",
          hints: [
            "Triangle ABT isn't right-angled, but you know AB and can find all its angles.",
            "Angle ABT = 130°, so angle ATB = 18°. Sine rule gives BT.",
            "Then use the right-angled triangle BFT with SOH CAH TOA.",
          ],
          strategy: "Split into parts",
        },
        {
          kind: "short",
          id: "further-trigonometry-p2-q07",
          question:
            "Triangle DEF has area 30 cm², DE = 9 cm and angle EDF = 40°.\n\nWork out the length of DF. Give your answer in cm, correct to 3 significant figures.",
          answer: { type: "number", value: 10.4, tolerance: 0.051, display: "10.4 cm" },
          solution: [
            "Angle D is between DE and DF: {{1/2 * 9 * DF * sin 40° = 30}}.",
            "{{DF = 60/(9 sin 40°) = 60/5.785... = 10.37...}}",
            "DF = 10.4 cm (3 s.f.).",
          ],
          traps: [
            { spec: { type: "number", value: 5.19, tolerance: 0.006 }, feedback: "You've dropped the ½: {{1/2 * 9 * DF * sin 40° = 30}} means 9 DF sin 40° = **60**." },
          ],
          commonError: "Forgetting to double the area when clearing the ½.",
          difficulty: "core",
          guideRef: "area-sine",
          hints: ["Write the area formula with DF as the unknown.", "Multiply both sides by 2, then divide by 9 sin 40°."],
          strategy: "Work backwards",
        },
        {
          kind: "short",
          id: "further-trigonometry-p2-q08",
          question:
            "Solve {{sin x = -0.45}} for 0° ≤ x ≤ 360°.\n\nGive all solutions correct to 1 decimal place.",
          answer: { type: "list", values: [206.7, 333.3], ordered: false, tolerance: 0.051, display: "x = 206.7° or x = 333.3°" },
          solution: [
            "Calculator: {{sin^(-1)(-0.45) = -26.74°}} — outside the interval, but useful.",
            "Sine is negative in the 3rd and 4th quadrants (180° to 360°).",
            "Using symmetry: 180° + 26.74° = 206.74° and 360° − 26.74° = 333.26°.",
            "x = 206.7° or x = 333.3°.",
          ],
          traps: [
            { spec: { type: "list", values: [26.7, 153.3], tolerance: 0.051 }, feedback: "Those solve sin x = **+0.45**. Sine is negative between 180° and 360°." },
            { spec: { type: "list", values: [-26.7, 206.7], tolerance: 0.051 }, feedback: "−26.7° is outside 0° ≤ x ≤ 360°. Add 360° to bring it into range: 333.3°." },
          ],
          commonError: "Writing down the calculator's negative angle.",
          difficulty: "core",
          guideRef: "trig-graphs",
          hints: [
            "Sketch y = sin x and the line y = −0.45. Where do they cross?",
            "Use the calculator's −26.74° as a reference angle.",
            "The crossings are 26.74° beyond 180° and 26.74° before 360°.",
          ],
          strategy: "Draw a diagram",
        },
        {
          kind: "written",
          id: "further-trigonometry-p2-q09",
          question:
            "The cosine rule says {{c^2 = a^2 + b^2 - 2ab cos C}}.\n\n(a) Explain what happens to the cosine rule when C = 90°.\n\n(b) Explain why, if angle C is obtuse, {{c^2 > a^2 + b^2}}.",
          marks: 3,
          modelAnswer:
            "(a) cos 90° = 0, so the term 2ab cos C disappears and the rule becomes {{c^2 = a^2 + b^2}} — Pythagoras' theorem. Pythagoras is the special case of the cosine rule for a right angle.\n\n(b) If 90° < C < 180°, cos C is negative, so −2ab cos C is positive (a and b are positive lengths). So c² equals a² + b² **plus** a positive amount, hence {{c^2 > a^2 + b^2}}.",
          markScheme: [
            { point: "cos 90° = 0 so the 2ab cos C term vanishes", keywords: ["cos 90 = 0", "cos 90° = 0", "zero", "0", "vanishes", "disappears"] },
            { point: "Recognises the result is Pythagoras' theorem", keywords: ["pythagoras", "c^2 = a^2 + b^2", "c² = a² + b²"] },
            { point: "For obtuse C, cos C < 0 so −2ab cos C is positive, making c² bigger than a² + b²", keywords: ["negative", "cos c < 0", "positive", "adds", "bigger", "greater"] },
          ],
          commonError: "Saying 'the angle is bigger so the side is bigger' without linking it to the sign of cos C.",
          difficulty: "core",
          guideRef: "cosine-rule",
          hints: [
            "What is cos 90°?",
            "Sketch y = cos x. What sign does cos C have between 90° and 180°?",
            "If cos C is negative, is −2ab cos C positive or negative?",
          ],
          strategy: "Consider extremes",
        },
        {
          kind: "short",
          id: "further-trigonometry-p2-q10",
          question:
            "The graph of {{y = cos(x + 50°)}} is drawn for 0° ≤ x ≤ 360°.\n\nWrite down the coordinates of its minimum point. Give the x-coordinate first.",
          answer: { type: "list", values: [130, -1], ordered: true, display: "(130°, −1)" },
          solution: [
            "y = cos x has its minimum at (180°, −1).",
            "y = cos(x + 50°) is y = cos x translated by the vector {{(-50, 0)}} — 50° to the **left**.",
            "So the minimum moves to (180° − 50°, −1) = (130°, −1).",
            "Check: at x = 130°, cos(130° + 50°) = cos 180° = −1 ✓.",
          ],
          traps: [
            { spec: { type: "list", values: [230, -1], ordered: true }, feedback: "f(x + 50) moves the graph to the **left** by 50, not right. Inside the bracket does the opposite of what it looks like." },
          ],
          commonError: "Moving the graph right because of the plus sign.",
          difficulty: "core",
          guideRef: "trig-graphs",
          hints: [
            "Where is the minimum of y = cos x?",
            "Is y = cos(x + 50°) a translation left or right? By how much?",
          ],
          strategy: "Track one key point",
        },
        {
          kind: "written",
          id: "further-trigonometry-p2-q11",
          question: "Show that the area of an equilateral triangle with side length s is {{sqrt(3)/4 s^2}}.",
          marks: 3,
          modelAnswer:
            "Every angle of an equilateral triangle is 60°. Using {{Area = 1/2 ab sin C}} with a = b = s and C = 60°: {{Area = 1/2 * s * s * sin 60°}}. Since {{sin 60° = sqrt(3)/2}}, {{Area = 1/2 * s^2 * sqrt(3)/2 = sqrt(3)/4 s^2}}.",
          markScheme: [
            { point: "States each angle is 60°", keywords: ["60"] },
            { point: "Uses Area = ½ab sin C with both sides s", keywords: ["1/2 ab sin c", "1/2 s^2 sin 60", "½", "s × s", "s^2"] },
            { point: "Uses sin 60° = √3/2 to reach √3/4 s²", keywords: ["sqrt(3)/2", "√3/2", "root 3 over 2", "√3/4"] },
          ],
          solutions: [
            {
              label: "Pythagoras instead",
              steps: [
                "Drop a perpendicular from the top vertex; it bisects the base into two halves of length {{s/2}}.",
                "Height {{h = sqrt(s^2 - (s/2)^2) = sqrt(3/4 s^2) = sqrt(3)/2 s}}.",
                "{{Area = 1/2 * s * sqrt(3)/2 s = sqrt(3)/4 s^2}}. The sine method is quicker once you know sin 60° exactly.",
              ],
            },
          ],
          commonError: "Using a decimal for sin 60° — a 'show that' with an exact answer needs {{sqrt(3)/2}}.",
          difficulty: "core",
          guideRef: "area-sine",
          hints: ["What are the angles of an equilateral triangle?", "Use {{1/2 ab sin C}} with a = b = s.", "{{sin 60° = sqrt(3)/2}} exactly."],
          strategy: "Use exact values",
        },
        {
          kind: "mcq",
          id: "further-trigonometry-p2-q12",
          question: "Simplify fully {{(sin^2 x)/(1 - cos x)}}.",
          options: ["{{1 - cos x}}", "{{1 + cos x}}", "{{cos x - 1}}", "{{(sin^2 x)/(cos x)}}"],
          answerIndex: 1,
          explanation:
            "Replace {{sin^2 x}} by {{1 - cos^2 x}}, which is a difference of two squares: {{(1 - cos x)(1 + cos x)}}. Cancel the factor (1 − cos x) to leave {{1 + cos x}}. {{1 - cos x}} comes from factorising {{1 - cos^2 x}} as {{(1 - cos x)^2}}; {{cos x - 1}} comes from writing {{sin^2 x = cos^2 x - 1}} (the identity backwards); {{(sin^2 x)/(cos x)}} 'cancels' the 1 from the denominator, which you can't do with a sum.",
          difficulty: "core",
          guideRef: "trig-identities",
          hints: [
            "Rewrite {{sin^2 x}} using {{sin^2 x + cos^2 x = 1}}.",
            "{{1 - cos^2 x}} is a difference of two squares. Factorise it.",
          ],
          strategy: "Use an identity",
        },
        {
          kind: "written",
          id: "further-trigonometry-p2-q13",
          question: "Prove that {{(sin theta + cos theta)^2 + (sin theta - cos theta)^2 = 2}} for all values of θ.",
          marks: 3,
          modelAnswer:
            "Expand: {{(sin theta + cos theta)^2 = sin^2 theta + 2 sin theta cos theta + cos^2 theta}} and {{(sin theta - cos theta)^2 = sin^2 theta - 2 sin theta cos theta + cos^2 theta}}. Adding, the ±2 sin θ cos θ terms cancel, leaving {{2 sin^2 theta + 2 cos^2 theta = 2(sin^2 theta + cos^2 theta)}}. Since {{sin^2 theta + cos^2 theta = 1}}, the left-hand side = 2 × 1 = 2, as required.",
          markScheme: [
            { point: "Expands both brackets correctly (three terms each)", keywords: ["2 sin θ cos θ", "2sinθcosθ", "2 sin cos", "expand"] },
            { point: "Middle terms cancel to give 2sin²θ + 2cos²θ", keywords: ["cancel", "2 sin^2", "2sin²", "2(sin"] },
            { point: "Uses sin²θ + cos²θ = 1 to conclude it equals 2", keywords: ["sin^2 θ + cos^2 θ = 1", "sin² + cos² = 1", "= 1", "identity"] },
          ],
          commonError: "Writing {{(sin theta + cos theta)^2 = sin^2 theta + cos^2 theta}} — the cross term 2 sin θ cos θ is missing.",
          difficulty: "challenge",
          guideRef: "trig-identities",
          hints: [
            "Treat sin θ as a and cos θ as b. What is {{(a + b)^2 + (a - b)^2}}?",
            "Expand both brackets fully — what happens to the 2ab terms?",
            "Factor out 2 and use the Pythagorean identity.",
          ],
          strategy: "Make it simpler",
        },
        {
          kind: "short",
          id: "further-trigonometry-p2-q14",
          question: "Solve {{cos 2x = -0.5}} for 0° ≤ x ≤ 360°.\n\nGive every solution.",
          answer: { type: "list", values: [60, 120, 240, 300], ordered: false, display: "x = 60°, 120°, 240°, 300°" },
          solution: [
            "Let u = 2x. If 0° ≤ x ≤ 360° then 0° ≤ u ≤ 720° — the interval doubles.",
            "cos u = −0.5: {{cos^(-1)(-0.5) = 120°}}, and by the cos symmetry 360° − 120° = 240°.",
            "Add 360° to each: 480° and 600° (the next ones, 840° and 960°, are too big). So u = 120°, 240°, 480°, 600°.",
            "Halve: x = 60°, 120°, 240°, 300°.",
          ],
          traps: [
            { spec: { type: "list", values: [60, 120] }, feedback: "You only found solutions for 2x up to 360°. Since x goes up to 360°, 2x goes up to **720°** — two more solutions." },
            { spec: { type: "list", values: [120, 240, 480, 600] }, feedback: "Those are the values of u = 2x. Halve each one to get x." },
          ],
          commonError: "Halving too early, or not doubling the interval for 2x.",
          difficulty: "challenge",
          guideRef: "trig-equations",
          hints: [
            "Replace 2x by u. If x runs from 0° to 360°, what does u run from and to?",
            "Solve cos u = −0.5 for 0° ≤ u ≤ 720°. cos repeats every 360°.",
            "Then halve every value of u.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "further-trigonometry-p2-q15",
          question:
            "In triangle ABC, AB = 9 cm, AC = 7 cm and angle ABC = 45°. There are two possible triangles.\n\nUse the cosine rule to find both possible lengths of BC. Give your answers in cm, correct to 3 significant figures.",
          answer: { type: "list", values: [9.28, 3.45], ordered: false, tolerance: 0.006, display: "BC = 9.28 cm or 3.45 cm" },
          solution: [
            "Let BC = x. AC is opposite angle B, so {{7^2 = 9^2 + x^2 - 2 * 9 * x * cos 45°}}.",
            "{{cos 45° = sqrt(2)/2}}, so {{49 = 81 + x^2 - 9 sqrt(2) x}}, i.e. {{x^2 - 9 sqrt(2) x + 32 = 0}}.",
            "Quadratic formula: {{x = (9 sqrt(2) +- sqrt(162 - 128))/2 = (9 sqrt(2) +- sqrt(34))/2}}.",
            "x = 9.279… or x = 3.448…, so BC = 9.28 cm or 3.45 cm. Both are positive, so both triangles exist.",
          ],
          solutions: [
            {
              label: "Sine rule route (longer)",
              steps: [
                "{{(sin C)/9 = (sin 45°)/7}}, so sin C = 0.9091, giving C = 65.38° or 114.62°.",
                "Then A = 69.62° or 20.38°.",
                "{{BC = (7 sin A)/(sin 45°)}} = 9.28 cm or 3.45 cm. Same answers, but more steps and more rounding risk.",
              ],
            },
          ],
          traps: [
            { spec: { type: "list", values: [9.28], tolerance: 0.006 }, feedback: "The quadratic has **two** positive roots — both give a valid triangle." },
          ],
          commonError: "Putting the unknown side opposite the 45° angle: AC = 7 is the side opposite B.",
          difficulty: "challenge",
          guideRef: "cosine-rule",
          hints: [
            "Call BC = x. Which side is opposite the 45° angle?",
            "Write the cosine rule for AC². You'll get a quadratic in x.",
            "{{x^2 - 9 sqrt(2) x + 32 = 0}}. Use the quadratic formula — both roots matter.",
          ],
          strategy: "Introduce a variable",
        },
      ],
    },
  ],

  // =========================================================================
  // Challenge set — 10 grade-9 / H+ problems
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "further-trigonometry-ch-q01",
      question:
        "Triangle ABC has BC = 10 cm and angle BAC = 30°. The points A, B and C all lie on a circle.\n\nWork out the radius of the circle. Give your answer in cm.",
      answer: { type: "number", value: 10, display: "10 cm" },
      solution: [
        "Let O be the centre. The angle at the centre is twice the angle at the circumference: angle BOC = 2 × 30° = 60°.",
        "OB = OC (radii), so triangle OBC is isosceles with apex angle 60° — hence equilateral.",
        "So the radius = BC = 10 cm.",
      ],
      solutions: [
        {
          label: "Extended sine rule",
          steps: [
            "For any triangle, {{a/(sin A) = 2R}}, where R is the radius of the circle through its vertices.",
            "{{10/(sin 30°) = 10/(1/2) = 20 = 2R}}, so R = 10 cm.",
            "This is what the common ratio in the sine rule actually *is*: the diameter of the circumcircle.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 20 }, feedback: "20 is {{a/(sin A)}}, which is the **diameter** of the circle. Halve it." },
      ],
      difficulty: "challenge",
      guideRef: "sine-rule",
      hints: [
        "Mark the centre O. What do you know about angle BOC?",
        "Angle BOC = 60° and OB = OC. What kind of triangle is OBC?",
        "Alternatively: what does {{a/(sin A)}} measure?",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "further-trigonometry-ch-q02",
      question:
        "A triangle has sides 3 cm, 5 cm and 7 cm.\n\nWork out its **exact** area. Give your answer in the form {{(a sqrt(3))/b}} cm², where a and b are integers.",
      answer: { type: "expression", expr: "15sqrt(3)/4", form: "surd", display: "{{(15 sqrt(3))/4}} cm²" },
      solution: [
        "Find the angle opposite 7 cm: {{cos C = (9 + 25 - 49)/(2 * 3 * 5) = -15/30 = -1/2}}.",
        "So C = 120° exactly — and {{sin 120° = sin 60° = sqrt(3)/2}}.",
        "{{Area = 1/2 * 3 * 5 * sqrt(3)/2 = (15 sqrt(3))/4}} cm².",
      ],
      traps: [
        { spec: { type: "expression", expr: "-15sqrt(3)/4" }, feedback: "An area can't be negative. sin 120° is **positive** ({{sqrt(3)/2}}); it's cos 120° that is negative." },
      ],
      commonError: "Rounding the angle to a decimal and losing the exact answer.",
      difficulty: "challenge",
      guideRef: "cosine-rule",
      hints: [
        "You need an angle to use {{1/2 ab sin C}}. Which rule gives an angle from three sides?",
        "Try the angle opposite the 7 cm side — the cosine comes out very nicely.",
        "cos C = {{-1/2}}. What is C, and what is its exact sine?",
      ],
      strategy: "Use exact values",
    },
    {
      kind: "short",
      id: "further-trigonometry-ch-q03",
      question:
        "Siti has two rods, 8 cm and 11 cm long, hinged together at one end. She swings them to make two sides of a triangle with angle θ between them, where 0° < θ < 180°.\n\nFind every value of θ for which the triangle's area is exactly 22 cm².",
      answer: { type: "list", values: [30, 150], ordered: false, display: "θ = 30° or θ = 150°" },
      solution: [
        "{{Area = 1/2 * 8 * 11 * sin theta = 44 sin theta}}.",
        "{{44 sin theta = 22}}, so {{sin theta = 1/2}}.",
        "For 0° < θ < 180°: θ = 30° or θ = 180° − 30° = 150°.",
        "Bonus insight: the largest possible area is 44 cm², when sin θ = 1, i.e. θ = 90°. Every area below 44 cm² happens twice — once acute, once obtuse.",
      ],
      traps: [
        { spec: { type: "list", values: [30] }, feedback: "There's a second angle: sin(180° − θ) = sin θ, so 150° gives the same area." },
      ],
      difficulty: "challenge",
      guideRef: "area-sine",
      hints: [
        "Write the area as a function of θ.",
        "44 sin θ = 22. Solve for sin θ.",
        "How many angles between 0° and 180° share that sine?",
      ],
      strategy: "Use symmetry",
    },
    {
      kind: "short",
      id: "further-trigonometry-ch-q04",
      question:
        "The curve {{y = a sin(bx) + c}}, where a and b are positive constants, has a maximum point at (15°, 9). The next minimum point to the right is at (45°, −1).\n\nFind a, b and c. Give them in that order.",
      answer: { type: "list", values: [5, 6, 4], ordered: true, display: "a = 5, b = 6, c = 4" },
      solution: [
        "The midline is halfway between 9 and −1: c = {{(9 + (-1))/2}} = 4.",
        "The amplitude is the distance from midline to max: a = 9 − 4 = 5.",
        "Max to next min is half a period: 45° − 15° = 30°, so the period is 60°.",
        "y = sin(bx) has period {{360/b}}°, so {{360/b = 60}} and b = 6.",
        "Check: x = 15° gives 5 sin 90° + 4 = 9 ✓; x = 45° gives 5 sin 270° + 4 = −1 ✓.",
      ],
      traps: [
        { spec: { type: "list", values: [10, 6, 4], ordered: true }, feedback: "10 is the distance from max to min. The amplitude is **half** of that." },
        { spec: { type: "list", values: [5, 12, 4], ordered: true }, feedback: "Max to the next min is only **half** a period, so the full period is 60°, not 30°." },
      ],
      difficulty: "challenge",
      guideRef: "trig-graphs",
      hints: [
        "What vertical shift puts the midline halfway between 9 and −1?",
        "How far is the max above the midline? That's a.",
        "From a max to the next min is what fraction of a full cycle? Use period = {{360/b}}.",
      ],
      strategy: "Work backwards",
    },
    {
      kind: "written",
      id: "further-trigonometry-ch-q05",
      question:
        "Prove that {{(cos theta)/(1 - sin theta) - (cos theta)/(1 + sin theta) = 2 tan theta}} for all θ where both sides are defined.",
      marks: 3,
      modelAnswer:
        "Combine the LHS over the common denominator {{(1 - sin theta)(1 + sin theta) = 1 - sin^2 theta}}: LHS {{= (cos theta(1 + sin theta) - cos theta(1 - sin theta))/(1 - sin^2 theta) = (2 sin theta cos theta)/(1 - sin^2 theta)}}. Using {{sin^2 theta + cos^2 theta = 1}}, the denominator is {{cos^2 theta}}, so LHS {{= (2 sin theta cos theta)/(cos^2 theta) = (2 sin theta)/(cos theta) = 2 tan theta}} = RHS.",
      markScheme: [
        { point: "Uses the common denominator (1 − sin θ)(1 + sin θ) = 1 − sin²θ", keywords: ["common denominator", "1 - sin^2", "1 − sin²", "(1 - sin θ)(1 + sin θ)", "difference of two squares"] },
        { point: "Simplifies the numerator to 2 sin θ cos θ", keywords: ["2 sin θ cos θ", "2sinθcosθ", "2 sin cos", "numerator"] },
        { point: "Uses 1 − sin²θ = cos²θ and tan θ = sin θ / cos θ to reach 2 tan θ", keywords: ["cos^2", "cos²", "sin θ / cos θ", "2 tan", "rhs", "as required"] },
      ],
      solutions: [
        {
          label: "Simplify each fraction first",
          steps: [
            "Multiply top and bottom of the first fraction by {{1 + sin theta}}: {{(cos theta(1 + sin theta))/(1 - sin^2 theta) = (cos theta(1 + sin theta))/(cos^2 theta) = (1 + sin theta)/(cos theta)}}.",
            "In the same way, {{(cos theta)/(1 + sin theta) = (1 - sin theta)/(cos theta)}}.",
            "Subtract: {{(1 + sin theta)/(cos theta) - (1 - sin theta)/(cos theta) = (2 sin theta)/(cos theta) = 2 tan theta}} = RHS. Same identity, used like rationalising a denominator.",
          ],
        },
      ],
      commonError: "Writing the denominator (1 − sin θ)(1 + sin θ) as 1 − sin θ², or starting with the whole equation and manipulating both sides together — prove one side equals the other.",
      difficulty: "challenge",
      guideRef: "trig-identities",
      hints: [
        "Start with the left-hand side. What common denominator do the two fractions have?",
        "{{(1 - sin theta)(1 + sin theta)}} is a difference of two squares. What does {{1 - sin^2 theta}} equal?",
        "Expand the numerator: the cos θ terms cancel, leaving {{2 sin theta cos theta}}.",
        "Cancel a factor of cos θ and use {{tan theta = (sin theta)/(cos theta)}}.",
      ],
      strategy: "Use an identity",
    },
    {
      kind: "short",
      id: "further-trigonometry-ch-q06",
      question: "Solve {{2cos^2 x + 3sin x = 3}} for 0° ≤ x ≤ 360°.\n\nGive every solution.",
      answer: { type: "list", values: [30, 90, 150], ordered: false, display: "x = 30°, 90°, 150°" },
      solution: [
        "Replace {{cos^2 x}} by {{1 - sin^2 x}}: {{2 - 2sin^2 x + 3sin x = 3}}.",
        "Rearrange: {{2sin^2 x - 3sin x + 1 = 0}}.",
        "Factorise: (2sin x − 1)(sin x − 1) = 0, so {{sin x = 1/2}} or sin x = 1.",
        "{{sin x = 1/2}}: x = 30° or 180° − 30° = 150°.",
        "sin x = 1: x = 90° (the maximum of the sine curve — only one solution).",
        "Solutions: 30°, 90°, 150°.",
      ],
      traps: [
        { spec: { type: "list", values: [30, 150] }, feedback: "Don't forget the other factor: sin x = 1 gives x = 90°." },
        { spec: { type: "list", values: [210, 270, 330] }, feedback: "Sign slip: {{-2sin^2 x + 3sin x - 1 = 0}} times −1 is {{2sin^2 x - 3sin x + 1 = 0}} — **every** term changes sign. That gives sin x = {{1/2}} or 1, not negative values." },
      ],
      commonError: "Replacing {{cos^2 x}} by {{sin^2 x - 1}} (the identity backwards), which flips the signs.",
      difficulty: "challenge",
      guideRef: "trig-equations",
      hints: [
        "There's a mix of sin and cos. Which identity lets you write everything in sin x?",
        "{{cos^2 x = 1 - sin^2 x}}. Substitute and tidy into a quadratic in sin x.",
        "Factorise, then solve each factor over the full interval.",
      ],
      strategy: "Use an identity",
    },
    {
      kind: "short",
      id: "further-trigonometry-ch-q07",
      question:
        "Solve {{5 sin x = 2 tan x}} for 0° < x < 360°.\n\nGive every solution, correct to 1 decimal place where necessary.",
      answer: { type: "list", values: [66.4, 180, 293.6], ordered: false, tolerance: 0.051, display: "x = 66.4°, 180°, 293.6°" },
      solution: [
        "Write tan x as {{(sin x)/(cos x)}}: {{5 sin x = (2 sin x)/(cos x)}}.",
        "Multiply by cos x: 5 sin x cos x = 2 sin x, so sin x (5 cos x − 2) = 0.",
        "sin x = 0: x = 180° (0° and 360° are excluded — the inequalities are strict).",
        "5 cos x − 2 = 0: {{cos x = 2/5}}, x = 66.42…° or 360° − 66.42…° = 293.57…°.",
        "Solutions: 66.4°, 180°, 293.6°.",
      ],
      traps: [
        { spec: { type: "list", values: [66.4, 293.6], tolerance: 0.051 }, feedback: "You divided by sin x and lost the solutions of **sin x = 0**. Factorise instead: sin x(5 cos x − 2) = 0. Which value with sin x = 0 lies in 0° < x < 360°?" },
        { spec: { type: "list", values: [0, 66.4, 180, 293.6, 360], tolerance: 0.051 }, feedback: "Read the interval: 0° < x < 360° is **strict**, so 0° and 360° are not allowed." },
      ],
      commonError: "Dividing both sides by sin x — you can never divide by something that might be zero.",
      difficulty: "challenge",
      guideRef: "trig-equations",
      hints: [
        "Write tan x in terms of sin x and cos x.",
        "Tempted to divide by sin x? Don't — what could go wrong?",
        "Bring everything to one side and factorise out sin x.",
        "Solve sin x = 0 and {{cos x = 2/5}} separately. Check the interval is strict.",
      ],
      strategy: "Split into cases",
    },
    {
      kind: "short",
      id: "further-trigonometry-ch-q08",
      question:
        "ABCD is a cyclic quadrilateral (all four vertices on a circle) with AB = 5 cm, BC = 5 cm, CD = 3 cm and DA = 8 cm.\n\nWork out the exact length of the diagonal AC. Give your answer as a fraction.",
      answer: { type: "fraction", n: 55, d: 7, display: "{{55/7}} cm" },
      solution: [
        "Opposite angles of a cyclic quadrilateral add to 180°, so D = 180° − B and cos D = −cos B.",
        "Triangle ABC: {{AC^2 = 25 + 25 - 50 cos B = 50 - 50 cos B}}.",
        "Triangle ADC: {{AC^2 = 64 + 9 - 48 cos D = 73 + 48 cos B}}.",
        "Equate: 50 − 50 cos B = 73 + 48 cos B, so −23 = 98 cos B and {{cos B = -23/98}}.",
        "{{AC^2 = 50 + 50 * 23/98 = 3025/49}}, so {{AC = 55/7}} cm (≈ 7.86 cm).",
      ],
      solutions: [
        {
          label: "Ptolemy's theorem (beyond the syllabus)",
          steps: [
            "For a cyclic quadrilateral, AC × BD = AB × CD + BC × DA — but that needs BD too, so the cosine-rule route is the natural one here.",
            "The key idea in both: the circle gives a **link** between the two triangles (here, cos D = −cos B).",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 7.86, tolerance: 0.006 }, feedback: "Correct value — but the question asks for the **exact** length as a fraction: {{55/7}}." },
      ],
      commonError: "Using cos D = cos B instead of cos D = −cos B (since cos(180° − B) = −cos B).",
      difficulty: "challenge",
      guideRef: "cosine-rule",
      hints: [
        "AC is a side of two triangles. Write the cosine rule for AC² in each.",
        "There are two unknown angles, B and D. How are they related in a cyclic quadrilateral?",
        "cos(180° − B) = −cos B. Equate your two expressions for AC² and solve for cos B.",
      ],
      strategy: "Look for an invariant",
    },
    {
      kind: "short",
      id: "further-trigonometry-ch-q09",
      question:
        "Triangle ABC has angle BAC = 30° and AB = 10 cm. The length BC = x cm can be chosen.\n\nThere are **exactly two** possible triangles precisely when p < x < q. Find p and q. Give p first.",
      answer: { type: "list", values: [5, 10], ordered: true, display: "p = 5, q = 10 (5 < x < 10)" },
      solution: [
        "Fix A and B, and draw the ray from A at 30° to AB. C must lie on this ray with BC = x: draw a circle centre B, radius x.",
        "The shortest distance from B to the ray is the perpendicular: 10 sin 30° = 5 cm.",
        "x < 5: the circle misses the ray — no triangle. x = 5: it touches once — one (right-angled) triangle.",
        "5 < x < 10: the circle cuts the ray twice, both on the far side of A — **two** triangles (the ambiguous case).",
        "x ≥ 10: one crossing is at A itself or behind A, leaving just one triangle.",
        "So p = 5 and q = 10.",
      ],
      traps: [
        { spec: { type: "list", values: [0, 10], ordered: true }, feedback: "If x is less than the perpendicular distance 10 sin 30° = 5 cm, BC can't reach the line at all — no triangle." },
        { spec: { type: "list", values: [5, 20], ordered: true }, feedback: "Once x ≥ AB = 10, the second intersection is no longer on the correct side of A. The upper limit is AB itself." },
      ],
      difficulty: "challenge",
      guideRef: "sine-rule",
      hints: [
        "Draw AB and the 30° line from A. Where can C be? Think of a circle centre B, radius x.",
        "What's the shortest x that reaches the line?",
        "When does the circle cut the line twice **on the correct side** of A? Consider x compared with AB.",
      ],
      strategy: "Consider extremes",
    },
    {
      kind: "short",
      id: "further-trigonometry-ch-q10",
      question:
        "Two circles each have radius 10 cm. Their centres P and Q are 10 cm apart.\n\nWork out the exact area of the shaded region where the circles overlap. Give your answer in the form {{(a pi)/b - c sqrt(3)}} cm².",
      diagram: `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two circles each of radius 10 cm whose centres P and Q are 10 cm apart; the overlapping lens-shaped region is shaded"><rect x="0" y="0" width="360" height="240" fill="#ffffff"/><path d="M 180 50.7 A 80 80 0 0 1 180 189.3 A 80 80 0 0 1 180 50.7 Z" fill="#bbf7d0" stroke="none"/><circle cx="140" cy="120" r="80" fill="none" stroke="#1f2937" stroke-width="2"/><circle cx="220" cy="120" r="80" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="140" y1="120" x2="220" y2="120" stroke="#334155" stroke-width="1.5"/><circle cx="140" cy="120" r="3" fill="#1f2937"/><circle cx="220" cy="120" r="3" fill="#1f2937"/><text x="128" y="124" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">P</text><text x="232" y="124" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Q</text><text x="180" y="138" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10 cm</text></svg>`,
      answer: { type: "expression", expr: "200pi/3-50sqrt(3)", form: "surd", display: "{{(200 pi)/3 - 50 sqrt(3)}} cm² (≈ 123 cm²)" },
      solution: [
        "Let the circles meet at X and Y. PX = PQ = QX = 10, so triangle PQX is equilateral and angle XPQ = 60°. By symmetry angle XPY = 120°.",
        "The overlap is two identical segments, each cut off by chord XY.",
        "One segment = sector − triangle = {{120/360 * pi * 10^2 - 1/2 * 10^2 * sin 120°}}.",
        "{{= (100 pi)/3 - 50 * sqrt(3)/2 = (100 pi)/3 - 25 sqrt(3)}}.",
        "Overlap = 2 × segment = {{(200 pi)/3 - 50 sqrt(3)}} ≈ 122.8 cm².",
      ],
      traps: [
        { spec: { type: "expression", expr: "100pi/3-25sqrt(3)" }, feedback: "That's one segment. The overlap is made of **two** segments, one from each circle." },
        { spec: { type: "expression", expr: "100pi/3-50sqrt(3)" }, feedback: "Check the segment angle: angle XPY = 120°, made of two 60° angles from the equilateral triangles PQX and PQY." },
      ],
      commonError: "Using 60° as the sector angle — the chord XY subtends 120° at P.",
      difficulty: "challenge",
      guideRef: "area-sine",
      hints: [
        "Mark the two points X and Y where the circles meet. What do you notice about triangle PQX?",
        "Angle XPY = 120°. The overlap is two equal segments on the chord XY.",
        "Segment = sector − triangle, with {{sin 120° = sqrt(3)/2}}.",
        "Double it.",
      ],
      strategy: "Use symmetry",
    },
  ],
};
