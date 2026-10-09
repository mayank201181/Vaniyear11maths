import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "further-trigonometry",
  title: "Sine & Cosine Rules, Trig Graphs & Identities",
  strand: "Geometry & Measure",
  icon: "🌊",
  summary: "Trigonometry for any triangle, any angle — and the waves hiding inside sin and cos.",
  intro:
    "SOHCAHTOA only works in right-angled triangles. The sine rule, the cosine rule and {{1/2 ab sin C}} unlock **every** triangle, and they are worth big marks on every 4MA1 Higher paper — usually inside a bearings, 3D or circle problem with several steps. The graphs of sin, cos and tan explain why a trig equation can have more than one answer, and the H+ identities {{tan theta = (sin theta)/(cos theta)}} and {{sin^2 theta + cos^2 theta = 1}} turn awkward equations into quadratics you already know how to solve. Learn *why* each rule works and you will always know which one to reach for.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "sine-rule",
      heading: "The sine rule",
      discovery: {
        problem:
          "Triangle ABC has angle A = 40°, angle B = 65° and BC = 8 cm. There is no right angle, so SOHCAHTOA can't be used directly.\n\nDraw the triangle and drop a perpendicular of height *h* from C to the side AB. You now have **two** right-angled triangles that share the side *h*. Can you write *h* in two different ways, and use them to find the length AC?",
        idea:
          "In the right-angled triangle containing B: {{h = 8 sin 65° = 7.250...}}.\n\nIn the right-angled triangle containing A: {{h = \"AC\" * sin 40°}}.\n\nBoth equal *h*, so {{\"AC\" * sin 40° = 8 sin 65°}}, giving {{\"AC\" = (8 sin 65°)/(sin 40°) = 11.3}} cm (3 s.f.).\n\nWrite AC = *b* and BC = *a*: you have just shown that {{b sin A = a sin B}}, or {{a/(sin A) = b/(sin B)}}. That is the **sine rule** — and the height trick works for any triangle.",
      },
      body:
        "**Labelling.** Name the angles with capital letters A, B, C and the sides with lower-case letters, so that side *a* is **opposite** angle A, side *b* is opposite B and side *c* is opposite C. Every pair (*a*, A), (*b*, B), (*c*, C) is a side with the angle facing it.\n\n**The sine rule** (on the Edexcel formula sheet):\n\n    {{a/(sin A) = b/(sin B) = c/(sin C)}}\n\nFlip every fraction for the version that is easier when you want an **angle**:\n\n    {{(sin A)/a = (sin B)/b = (sin C)/c}}\n\n**When can you use it?** When you know a **complete opposite pair** (a side *and* the angle facing it) plus one more side or angle. If no pair is complete, try the cosine rule instead (next section). Remember the angles add to 180°: if you know two angles you know the third, which often completes a pair.\n\n**Finding a side** — put the unknown on top:\n\n    {{b/(sin 74°) = 12/(sin 38°)}}  so  {{b = (12 sin 74°)/(sin 38°) = 18.7}} cm\n\n**Finding an angle** — put the sines on top, then use {{sin^(-1)}}:\n\n    {{(sin Q)/7 = (sin 70°)/9}}  so  {{sin Q = (7 sin 70°)/9 = 0.7309}},  Q = 47.0°\n\n**The ambiguous case.** Your calculator gives {{sin^(-1)(0.8824) = 61.9°}}. But {{sin 118.1°}} is *also* 0.8824, because {{sin(180° - x) = sin x}}. So when you use the sine rule to find an angle, there may be **two** possible answers: the acute one, θ, and the obtuse one, 180° − θ.\n\n- The obtuse answer is only possible if it still leaves room in the triangle: θ' + (the given angle) must be less than 180°.\n- It happens when you are given **two sides and an angle that is not between them**, and the given angle is opposite the **shorter** of the two sides — the shorter side can 'swing' into two positions (see the diagram).\n- If the angle you want is opposite the **shorter** known side, it must be the smaller angle, so it is acute — only one answer.\n\nExam questions usually remove the ambiguity by saying 'angle ACB is obtuse' — then you must give 180° − θ, not the calculator value.\n\n> Check your answer: the **largest side is always opposite the largest angle**. If your answers break that, something has gone wrong.",
      diagram: `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: triangle ABC with angle A 50 degrees and angle B 65 degrees, and a dashed height h dropped from C to D on AB; h equals b sin A and also a sin B. Right: the ambiguous case. Angle A is 35 degrees, AB is 10 cm, and an arc of radius 6.5 cm centred on B cuts the slanted line from A at two points C1 and C2, giving two different triangles."><rect width="480" height="290" fill="#ffffff"/><polygon points="20,220 220,220 148.6,66.8" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="148.6" y1="66.8" x2="148.6" y2="220" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="5,4"/><polyline points="139.6,220 139.6,211 148.6,211" fill="none" stroke="#b91c1c" stroke-width="1.2"/><path d="M 46 220 A 26 26 0 0 0 36.7 200.1" fill="none" stroke="#334155" stroke-width="1.5"/><path d="M 209.9 198.2 A 24 24 0 0 0 196 220" fill="none" stroke="#334155" stroke-width="1.5"/><text x="16" y="238" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">A</text><text x="224" y="238" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">B</text><text x="148.6" y="58.8" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">C</text><text x="148.6" y="238" font-family="sans-serif" font-size="12" fill="#b91c1c" text-anchor="middle">D</text><text x="64" y="212" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="start">50°</text><text x="178" y="212" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">65°</text><text x="72.3" y="143.4" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-style="italic">b</text><text x="196.3" y="143.4" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-style="italic">a</text><text x="84.3" y="238" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-style="italic">c</text><text x="154.6" y="163.4" font-family="sans-serif" font-size="14" fill="#b91c1c" text-anchor="start" font-style="italic">h</text><text x="120" y="262" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">h = b sin A  and  h = a sin B</text><text x="120" y="280" font-family="sans-serif" font-size="12" fill="#b91c1c" text-anchor="middle">so  a ÷ sin A = b ÷ sin B</text><line x1="240" y1="15" x2="240" y2="280" stroke="#cbd5e1" stroke-width="1"/><polygon points="258,220 428,220 414.7,110.3" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5" stroke-linejoin="round"/><polygon points="258,220 428,220 329.5,169.9" fill="#fde68a" stroke="#1f2937" stroke-width="1.5" stroke-linejoin="round"/><line x1="258" y1="220" x2="432.1" y2="98.1" stroke="#334155" stroke-width="1.5"/><path d="M 443.4 110.6 A 110.5 110.5 0 0 0 321.3 191.4" fill="none" stroke-dasharray="4,3" stroke="#6366f1" stroke-width="1.5"/><line x1="428" y1="220" x2="329.5" y2="169.9" stroke="#1f2937" stroke-width="2"/><line x1="428" y1="220" x2="414.7" y2="110.3" stroke="#1f2937" stroke-width="2"/><path d="M 288 220 A 30 30 0 0 0 282.6 202.8" fill="none" stroke="#334155" stroke-width="1.5"/><text x="254" y="238" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">A</text><text x="432" y="238" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">B</text><text x="319.5" y="163.9" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">C₁</text><text x="408.7" y="102.3" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">C₂</text><text x="306" y="212" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="start">35°</text><text x="343" y="238" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">10 cm</text><text x="443.3" y="165.2" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">6.5 cm</text><text x="374.7" y="211" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">6.5 cm</text><text x="360" y="30" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">Two triangles fit the same data:</text><text x="360" y="46" font-family="sans-serif" font-size="11" fill="#b91c1c" text-anchor="middle">C₂ = 61.9°  or  C₁ = 118.1°</text></svg>`,
      diagramCaption:
        "Left: the height h can be written two ways, which proves the sine rule. Right: with angle A = 35°, AB = 10 cm and BC = 6.5 cm, the side BC can swing to two positions, so angle C is 61.9° or 118.1° — the ambiguous case.",
      workedExamples: [
        {
          title: "Finding a side",
          problem:
            "In triangle ABC, angle BAC = 38°, angle ABC = 74° and BC = 12 cm. Work out the length of AC. Give your answer correct to 3 significant figures.",
          steps: [
            "Label: BC is opposite angle A, so *a* = 12 and A = 38°. AC is opposite angle B, so we want *b*, with B = 74°. The pair (*a*, A) is complete — sine rule.",
            "Unknown on top: {{b/(sin 74°) = 12/(sin 38°)}}.",
            "Multiply both sides by sin 74°: {{b = (12 sin 74°)/(sin 38°) = (12 * 0.96126)/0.61566 = 18.736...}}.",
            "AC = 18.7 cm (3 s.f.).",
            "Check: B (74°) is bigger than A (38°), so *b* should be longer than *a* = 12 ✓.",
          ],
          answer: "AC = 18.7 cm",
          yourTurn: {
            question:
              "Your turn: in triangle PQR, angle QPR = 70°, QR = 9 cm and PR = 7 cm. Work out the size of angle PQR. Give your answer correct to 1 decimal place.",
            answer: { type: "number", value: 47.0, tolerance: 0.05, display: "47.0°" },
            solution:
              "QR = 9 is opposite P = 70°; PR = 7 is opposite Q. {{(sin Q)/7 = (sin 70°)/9}}, so {{sin Q = (7 sin 70°)/9 = 0.7309}} and Q = {{sin^(-1)(0.7309) = 47.0°}}. The obtuse option 133.0° is impossible: 133.0° + 70° > 180°. (Also, 7 < 9 means Q must be smaller than P.)",
          },
        },
        {
          title: "The ambiguous case",
          problem:
            "In triangle ABC, AB = 10 cm, BC = 6.5 cm and angle BAC = 35°. Work out the two possible sizes of angle ACB. Give your answers correct to 1 decimal place.",
          steps: [
            "BC = 6.5 is opposite A = 35° — a complete pair. AB = 10 is opposite C, the angle we want.",
            "Sines on top: {{(sin C)/10 = (sin 35°)/6.5}}, so {{sin C = (10 sin 35°)/6.5 = 0.88243}}.",
            "Calculator: C = {{sin^(-1)(0.88243) = 61.9°}} (1 d.p.).",
            "Second solution: {{sin(180° - 61.9°) = sin 61.9°}}, so C = 180° − 61.9° = 118.1° is also possible.",
            "Check both fit in a triangle: 35° + 61.9° = 96.9° < 180° ✓ (B = 83.1°) and 35° + 118.1° = 153.1° < 180° ✓ (B = 26.9°).",
            "Why two? The given angle (35°) is opposite the **shorter** side (6.5 < 10), so BC can swing into two positions — exactly the picture in the diagram.",
          ],
          answer: "Angle ACB = 61.9° or 118.1°",
          yourTurn: {
            question:
              "Your turn: in triangle ABC, AB = 12 cm, BC = 9 cm and angle BAC = 40°. Angle ACB is **obtuse**. Work out the size of angle ACB, correct to 1 decimal place.",
            answer: { type: "number", value: 121.0, tolerance: 0.05, display: "121.0°" },
            solution:
              "{{sin C = (12 sin 40°)/9 = 0.8571}}, so the calculator gives 59.0°. The angle is obtuse, so C = 180° − 59.0° = **121.0°**. Check: 121.0° + 40° = 161.0° < 180° ✓.",
          },
        },
      ],
      keyPoints: [
        "Side *a* is opposite angle A — label before you start.",
        "Sine rule: {{a/(sin A) = b/(sin B) = c/(sin C)}}; use it when you know a side **and its opposite angle**.",
        "Finding a side: unknown side on top. Finding an angle: sines on top, then {{sin^(-1)}}.",
        "{{sin(180° - x) = sin x}}, so an angle found with the sine rule might be θ **or** 180° − θ.",
        "Two triangles are possible when the given angle is opposite the shorter of the two given sides.",
        "The biggest side is opposite the biggest angle — a free check.",
      ],
      whyItWorks:
        "Drop the height *h* from C onto AB (left of the diagram). The two right-angled triangles give {{sin A = h/b}} and {{sin B = h/a}}, so {{h = b sin A = a sin B}}. Divide both sides by {{sin A sin B}} and you get {{a/(sin A) = b/(sin B)}}. Dropping the height from A instead brings in *c* and C in the same way, so all three ratios are equal.\n\nIf angle B is obtuse, the height lands **outside** the triangle — but then {{h = a sin(180° - B)}}, and since {{sin(180° - B) = sin B}} the rule still holds. That same fact, {{sin(180° - x) = sin x}}, is exactly what causes the ambiguous case.\n\nBonus: the common ratio {{a/(sin A)}} is the **diameter of the circle** through A, B and C — so a bigger triangle in a bigger circle gives a bigger ratio.",
      strategies: ["Draw a diagram", "Label opposite pairs", "Check by substituting", "Split into cases"],
      thinkDeeper:
        "Keep angle A = 35° and AB = 10 cm, but change the length BC. For which lengths of BC is there **no** triangle, exactly **one** triangle, or **two** triangles? (Hint: the shortest distance from B to the slanted line is {{10 sin 35° = 5.74}} cm.)",
    },

    // ------------------------------------------------------------------ 2
    {
      id: "cosine-rule",
      heading: "The cosine rule",
      discovery: {
        problem:
          "Two sides of a triangle are 5 cm and 8 cm, and the angle **between** them is 60°. Find the third side.\n\nTry the sine rule first: is there a complete side-and-opposite-angle pair? Then predict: if the 60° angle opened up to 90°, the third side would be {{sqrt(5^2 + 8^2) = sqrt(89)}} by Pythagoras. Should the answer for 60° be more or less than {{sqrt(89)}}?",
        idea:
          "The sine rule is stuck — no side has its opposite angle known. But your prediction is the key: a **smaller** angle closes the gap, so the third side should be **less** than {{sqrt(89)}}. The cosine rule is Pythagoras with a correction term:\n\n    {{a^2 = b^2 + c^2 - 2bc cos A = 25 + 64 - 2 * 5 * 8 * cos 60° = 89 - 40 = 49}}\n\nso the third side is exactly **7 cm**. At 90°, {{cos 90° = 0}} and the correction vanishes — plain Pythagoras. At 120°, {{cos 120° = -0.5}} and the side grows to {{sqrt(129) = 11.4}} cm.",
      },
      body:
        "**The cosine rule** (on the Edexcel formula sheet):\n\n    {{a^2 = b^2 + c^2 - 2bc cos A}}\n\nThe angle A is the one **between** sides *b* and *c*, and *a* is the side opposite it. Any letters work as long as that pattern holds: 'the side opposite² = the other two sides squared − 2 × (the other two) × cos (the angle between them)'.\n\n**Finding an angle** — rearrange (not on the formula sheet; learn it or rearrange in the exam):\n\n    {{cos A = (b^2 + c^2 - a^2)/(2bc)}}\n\n**Which rule?**\n\n| You know | You want | Use |\n|---|---|---|\n| two angles and a side, or a side with its opposite angle | a side or angle | sine rule |\n| two sides and the angle **between** them (SAS) | the third side | cosine rule |\n| all three sides (SSS) | an angle | cosine rule (rearranged) |\n| two sides and the angle between them | the area | {{1/2 ab sin C}} |\n\n**No ambiguity with cosine.** Cosine is **negative** for angles between 90° and 180°, so {{cos^(-1)}} of a negative number gives an obtuse angle directly. That makes the cosine rule the safe choice for the **largest** angle of a triangle (opposite the longest side) — it can't trick you.\n\n**Quick test for obtuse.** Compare {{a^2}} with {{b^2 + c^2}}: if {{a^2 > b^2 + c^2}} then cos A < 0 and A is obtuse; equal means 90°; smaller means acute.\n\n**Calculator care.** Work out {{b^2 + c^2}} and {{2bc cos A}} separately, then subtract — typing '25 + 64 − 2 × 5 × 8' and *then* multiplying by cos A is the classic slip. And remember the last step: the formula gives {{a^2}}, so **square root** at the end.\n\n**Multi-step problems.** Bearings, quadrilaterals split by a diagonal and 3D shapes often need the cosine rule first and the sine rule second. Keep full calculator values (use the ANS or memory key) until the final answer.",
      diagram: `<svg viewBox="0 0 420 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the origin and AB of length c along the x-axis. The height from C meets AB at D. AD is b cos A, DB is c minus b cos A, and CD is b sin A. Pythagoras in triangle BCD gives a squared equals b squared plus c squared minus 2bc cos A."><rect width="420" height="250" fill="#ffffff"/><polygon points="40,200 312,200 137.5,60.7" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="137.5,200 312,200 137.5,60.7" fill="#fde68a" stroke="#1f2937" stroke-width="0" stroke-linejoin="round"/><polygon points="40,200 312,200 137.5,60.7" fill="none" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="137.5" y1="60.7" x2="137.5" y2="200" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="5,4"/><polyline points="146.5,200 146.5,191 137.5,191" fill="none" stroke="#b91c1c" stroke-width="1.2"/><path d="M 64 200 A 24 24 0 0 0 53.8 180.3" fill="none" stroke="#334155" stroke-width="1.5"/><text x="34" y="218" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">A</text><text x="318" y="218" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">B</text><text x="137.5" y="52.7" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">C</text><text x="137.5" y="218" font-family="sans-serif" font-size="12" fill="#b91c1c" text-anchor="middle">D</text><text x="70" y="192" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="start">A</text><text x="74.8" y="130.4" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-style="italic">b</text><text x="238.8" y="126.4" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-style="italic">a</text><text x="88.8" y="236" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">b cos A</text><text x="224.8" y="236" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">c − b cos A</text><line x1="40" y1="224" x2="135.5" y2="224" stroke="#334155" stroke-width="1"/><line x1="139.5" y1="224" x2="312" y2="224" stroke="#334155" stroke-width="1"/><text x="143.5" y="134.4" font-family="sans-serif" font-size="12" fill="#b91c1c" text-anchor="start">b sin A</text><text x="330" y="40" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">In triangle BCD:</text><text x="330" y="60" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">a² = (b sin A)² + (c − b cos A)²</text><text x="330" y="78" font-family="sans-serif" font-size="11" fill="#b91c1c" text-anchor="middle">= b² + c² − 2bc cos A</text></svg>`,
      diagramCaption:
        "Put A at the origin and drop the height from C. The yellow right-angled triangle BCD has legs b sin A and c − b cos A, and Pythagoras in it gives the cosine rule.",
      workedExamples: [
        {
          title: "Finding an obtuse angle (SSS)",
          problem:
            "A triangle has sides 5 cm, 7 cm and 10 cm. Work out the size of the largest angle. Give your answer correct to 1 decimal place.",
          steps: [
            "The largest angle is opposite the longest side, 10 cm. Call it A, so *a* = 10, *b* = 5, *c* = 7.",
            "{{cos A = (b^2 + c^2 - a^2)/(2bc) = (25 + 49 - 100)/(2 * 5 * 7) = (-26)/70 = -0.37143}}.",
            "The cosine is negative, so A is obtuse — no need to think about a second answer.",
            "A = {{cos^(-1)(-0.37143) = 111.8°}} (1 d.p.).",
            "Quick check: {{10^2 = 100 > 5^2 + 7^2 = 74}}, so the angle must be obtuse ✓.",
          ],
          answer: "111.8°",
          yourTurn: {
            question:
              "Your turn: in triangle ABC, AB = 13 cm, AC = 9 cm and angle BAC = 118°. Work out the length of BC. Give your answer correct to 3 significant figures.",
            answer: { type: "number", value: 19.0, tolerance: 0.05, display: "19.0 cm" },
            solution:
              "{{\"BC\"^2 = 9^2 + 13^2 - 2 * 9 * 13 * cos 118° = 250 - 234 * (-0.46947) = 250 + 109.86 = 359.86}}. BC = {{sqrt(359.86) = 18.97...}} = **19.0 cm** (3 s.f.). The cosine of an obtuse angle is negative, so the 'minus' term actually *adds* — BC is longer than {{sqrt(250)}}.",
          },
        },
        {
          title: "Bearings: cosine rule then sine rule",
          problem:
            "A boat leaves port P and sails 8 km on a bearing of 040° to a buoy Q. It then sails 11 km on a bearing of 115° to a lighthouse R.\n\n(a) Work out the distance PR.\n(b) Work out the bearing of R from P.\n\nGive your answers correct to 3 significant figures.",
          steps: [
            "Draw north lines at P and Q. The bearing of P from Q is the back-bearing 040° + 180° = 220°.",
            "Angle PQR is the angle between the directions 220° (back to P) and 115° (on to R): 220° − 115° = 105°.",
            "(a) Two sides and the angle between them — cosine rule: {{\"PR\"^2 = 8^2 + 11^2 - 2 * 8 * 11 * cos 105° = 185 - 176 * (-0.25882) = 230.55}}.",
            "PR = {{sqrt(230.55) = 15.18...}} = **15.2 km** (3 s.f.). Store the full value.",
            "(b) Now the pair (PR, angle Q) is complete — sine rule for angle QPR: {{sin QPR = (11 sin 105°)/15.184 = 0.69976}}, so angle QPR = 44.4°. (It must be acute: it is opposite 11, which is shorter than PR.)",
            "Bearing of R from P = 040° + 44.4° = **084.4°**.",
          ],
          answer: "(a) 15.2 km  (b) 084.4°",
        },
      ],
      keyPoints: [
        "Cosine rule: {{a^2 = b^2 + c^2 - 2bc cos A}} — A is the angle **between** b and c.",
        "Use it for SAS (find the third side) or SSS (find an angle with {{cos A = (b^2 + c^2 - a^2)/(2bc)}}).",
        "A negative cosine means an obtuse angle — the cosine rule has no ambiguous case.",
        "When A = 90°, {{cos A = 0}} and the rule *is* Pythagoras.",
        "Square root at the end when finding a side; work out {{2bc cos A}} as one block.",
        "In bearings problems, find the angle inside the triangle using north lines and back-bearings.",
      ],
      whyItWorks:
        "Put A at the origin with AB along the x-axis (the diagram). Then C is at {{(b cos A, b sin A)}} and B is at {{(c, 0)}}. Pythagoras in the yellow triangle BCD:\n\n    {{a^2 = (c - b cos A)^2 + (b sin A)^2}}\n    {{= c^2 - 2bc cos A + b^2 cos^2 A + b^2 sin^2 A}}\n    {{= c^2 - 2bc cos A + b^2(cos^2 A + sin^2 A)}}\n    {{= b^2 + c^2 - 2bc cos A}}\n\nusing {{sin^2 A + cos^2 A = 1}} (see *Trig identities*). The term {{-2bc cos A}} is the 'correction' to Pythagoras: it shrinks the side when A is acute (cos A > 0) and stretches it when A is obtuse (cos A < 0).",
      strategies: ["Draw a diagram", "Choose the right tool", "Estimate first", "Check by substituting"],
      thinkDeeper:
        "Try to find the largest angle of a triangle with sides 3 cm, 4 cm and 8 cm using the cosine rule. What goes wrong — and what does the calculator's error message tell you about the triangle? What rule about the three sides of *any* triangle have you discovered?",
    },

    // ------------------------------------------------------------------ 3
    {
      id: "area-sine",
      heading: "Area = ½ab sin C",
      discovery: {
        problem:
          "A triangular garden bed has sides 6 m and 10 m with an angle of 30° between them. You don't know the perpendicular height, so {{1/2 * \"base\" * \"height\"}} seems stuck.\n\nTake the 10 m side as the base. Can you find the height using the 6 m side and the 30° angle? What is the area?",
        idea:
          "The height is the opposite side of a right-angled triangle with hypotenuse 6 m: {{h = 6 sin 30° = 3}} m. So the area is {{1/2 * 10 * 3 = 15}} m².\n\nIn general the height is {{b sin C}}, so\n\n    {{\"area\" = 1/2 * a * b sin C}}\n\nTwo sides and the angle **between** them are all you ever need.",
      },
      body:
        "**The formula** (on the Edexcel formula sheet):\n\n    {{\"Area\" = 1/2 ab sin C}}\n\n*a* and *b* are two sides and C is the angle **between them** (the included angle). Using a different angle gives a wrong answer — check the angle is where the two sides meet.\n\n**Using it backwards — finding an angle.** If the area of triangle ABC is 40 cm², AB = 9 cm and AC = 12 cm:\n\n    {{40 = 1/2 * 9 * 12 * sin A}}  so  {{sin A = 40/54 = 0.7407}}\n\nThe calculator gives A = 47.8°, but because {{sin(180° - x) = sin x}}, A = 132.2° gives the **same area**. Both are genuine triangles (squash the angle or open it out — same height!). If the question says the angle is obtuse, the answer is 132.2°.\n\n**Using it backwards — finding a side.** Area 30 cm², angle 50° between a side of 8 cm and an unknown side *x*: {{30 = 1/2 * 8 * x * sin 50°}}, so {{x = 60/(8 sin 50°) = 9.79}} cm.\n\n**Segments of a circle.** A **segment** is the region between a chord and an arc. Find it as\n\n    segment = sector − triangle = {{theta/360 * pi r^2 - 1/2 r^2 sin theta}}\n\nThe triangle has two sides equal to the radius *r* with the angle θ at the centre between them — a perfect fit for {{1/2 ab sin C}}. (The sector formula is **not** on the formula sheet: learn {{theta/360 * pi r^2}}.)\n\n**Exact areas.** With special angles you can give exact answers: an equilateral triangle of side *s* has area {{1/2 s^2 sin 60° = (sqrt(3))/4 s^2}}.\n\n**When you only know three sides**, use the cosine rule to find any angle first, then {{1/2 ab sin C}}.",
      diagram: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with centre O and radius r. Two radii OA and OB make an angle of 80 degrees at O. The triangle OAB is shaded blue and the minor segment between chord AB and the arc is shaded yellow. Segment area equals sector area minus triangle area."><rect width="420" height="260" fill="#ffffff"/><circle cx="150" cy="140" r="100" fill="none" stroke="#334155" stroke-width="1.5"/><path d="M 214.3 63.4 A 100 100 0 0 0 85.7 63.4 Z" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><polygon points="150,140 214.3,63.4 85.7,63.4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5" stroke-linejoin="round"/><path d="M 162.9 124.7 A 20 20 0 0 0 137.1 124.7" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="150" cy="140" r="2.5" fill="#1f2937"/><text x="150" y="158" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">O</text><text x="224.3" y="61.4" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="start">A</text><text x="75.7" y="61.4" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="end">B</text><text x="150" y="114" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">80°</text><text x="192.1" y="109.7" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="start" font-style="italic">r</text><text x="107.9" y="109.7" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="end" font-style="italic">r</text><text x="320" y="90" font-family="sans-serif" font-size="12" fill="#92400e" text-anchor="middle">segment</text><text x="320" y="108" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">= sector − triangle</text><text x="320" y="140" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">sector = θ/360 × πr²</text><text x="320" y="160" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">triangle = ½r² sin θ</text><text x="320" y="192" font-family="sans-serif" font-size="11" fill="#b91c1c" text-anchor="middle">r = 10 cm, θ = 80°:</text><text x="320" y="210" font-family="sans-serif" font-size="11" fill="#b91c1c" text-anchor="middle">69.81 − 49.24 = 20.6 cm²</text></svg>`,
      diagramCaption:
        "The minor segment (yellow) is the sector OAB minus the isosceles triangle OAB (blue). The triangle's area is ½r² sin θ — two radii with the angle between them.",
      workedExamples: [
        {
          title: "Three sides known: cosine rule, then area",
          problem:
            "Triangle ABC has BC = 7 cm, AC = 8 cm and AB = 9 cm. Work out the area of the triangle. Give your answer correct to 3 significant figures.",
          steps: [
            "No angle is given, so find one with the cosine rule. Angle A is between AC = 8 and AB = 9, opposite BC = 7.",
            "{{cos A = (8^2 + 9^2 - 7^2)/(2 * 8 * 9) = (64 + 81 - 49)/144 = 96/144 = 2/3}}.",
            "A = {{cos^(-1)(2/3) = 48.19°}} (keep the full value).",
            "{{\"Area\" = 1/2 * 8 * 9 * sin 48.19° = 36 * 0.74536 = 26.83}}.",
            "Area = **26.8 cm²** (3 s.f.).",
            "Exact bonus (H+): {{sin^2 A = 1 - (2/3)^2 = 5/9}}, so {{sin A = (sqrt(5))/3}} and the area is exactly {{36 * (sqrt(5))/3 = 12 sqrt(5)}} cm².",
          ],
          answer: "26.8 cm² (exactly 12√5 cm²)",
          yourTurn: {
            question:
              "Your turn: two sides of a triangle are 5 cm and 8 cm, and the angle between them is 150°. Work out the exact area of the triangle in cm².",
            answer: { type: "number", value: 10, display: "10 cm²" },
            solution:
              "{{\"Area\" = 1/2 * 5 * 8 * sin 150° = 20 * 1/2 = 10}} cm². Note {{sin 150° = sin 30° = 1/2}} — an obtuse angle still gives a positive sine.",
          },
        },
        {
          title: "Area of a segment",
          problem:
            "A circle has centre O and radius 10 cm. A chord AB subtends an angle of 80° at O. Work out the area of the minor segment cut off by AB. Give your answer correct to 3 significant figures.",
          steps: [
            "Sector OAB: {{80/360 * pi * 10^2 = 69.813}} cm².",
            "Triangle OAB (two radii, 80° between them): {{1/2 * 10 * 10 * sin 80° = 50 * 0.98481 = 49.240}} cm².",
            "Segment = sector − triangle = 69.813 − 49.240 = 20.573 cm².",
            "Area = **20.6 cm²** (3 s.f.).",
            "Sense check: the segment should be a fairly thin sliver — about 30% of the sector ✓.",
          ],
          answer: "20.6 cm²",
          yourTurn: {
            question:
              "Your turn: a circle has radius 6 cm. A chord subtends an angle of 120° at the centre. Work out the area of the minor segment. Give your answer correct to 3 significant figures.",
            answer: { type: "number", value: 22.1, tolerance: 0.05, display: "22.1 cm²" },
            solution:
              "Sector: {{120/360 * pi * 36 = 12 pi = 37.699}}. Triangle: {{1/2 * 6 * 6 * sin 120° = 18 * (sqrt(3))/2 = 15.588}}. Segment = 37.699 − 15.588 = 22.11 = **22.1 cm²** (exactly {{12 pi - 9 sqrt(3)}}).",
          },
        },
      ],
      keyPoints: [
        "{{\"Area\" = 1/2 ab sin C}} — C must be the angle **between** sides a and b.",
        "The formula is on the formula sheet; the sector formula {{theta/360 * pi r^2}} is not.",
        "Finding an angle from an area can give two answers, θ and 180° − θ — read the question for 'obtuse'.",
        "Segment = sector − triangle, with the triangle's area {{1/2 r^2 sin theta}}.",
        "Three sides only? Cosine rule for an angle first, then the area formula.",
        "Keep full calculator values between steps; round only the final answer.",
      ],
      whyItWorks:
        "Take side *a* as the base. The perpendicular height from the opposite vertex is the side opposite angle C in a right-angled triangle whose hypotenuse is *b*, so {{h = b sin C}}. Then {{1/2 * \"base\" * \"height\" = 1/2 a(b sin C) = 1/2 ab sin C}}.\n\nIf C is obtuse, the height falls outside the triangle and equals {{b sin(180° - C)}} — which is the same number as {{b sin C}}. That is why an angle and its supplement always give the same area, and why 'finding the angle from the area' has two answers. It also tells you the **maximum** area for two fixed sides: {{sin C}} is biggest (= 1) when C = 90°.",
      strategies: ["Draw a diagram", "Make it simpler", "Split into parts", "Work backwards"],
      thinkDeeper:
        "Wei Ling has two sticks, 6 m and 10 m long, joined at one end to make two sides of a triangular frame. Which angle between them gives the **largest** possible area, and what is that area? Find **both** angles that give an area of exactly 15 m² — and explain why there are two.",
    },

    // ------------------------------------------------------------------ 4
    {
      id: "trig-graphs",
      heading: "Graphs of sin, cos and tan",
      discovery: {
        problem:
          "Your calculator says {{sin^(-1)(0.5) = 30°}}. But {{sin 150°}} is also 0.5 — try it.\n\nFind **every** angle *x* between 0° and 720° with {{sin x = 0.5}}. Hint: picture sin as the height of a point going round a circle — or sketch the graph and draw the line y = 0.5.",
        idea:
          "The graph of {{y = sin x}} is a wave that repeats every 360° and is **symmetric** about its peak at 90°. The line y = 0.5 cuts the first hump at 30° and at its mirror image, 180° − 30° = 150°. The wave repeats every 360°, so add 360° to each: 390° and 510°.\n\nSo there are **four** answers in 0°–720°: 30°, 150°, 390°, 510°. The calculator only ever gives one of them — the graph gives you the rest.",
      },
      body:
        "**The three graphs** (x in degrees):\n\n| | {{y = sin x}} | {{y = cos x}} | {{y = tan x}} |\n|---|---|---|---|\n| Period (repeats every) | 360° | 360° | 180° |\n| Range | {{-1 <= y <= 1}} | {{-1 <= y <= 1}} | all real numbers |\n| Zeros in 0°–360° | 0°, 180°, 360° | 90°, 270° | 0°, 180°, 360° |\n| Maximum | 1 at 90° | 1 at 0°, 360° | none |\n| Minimum | −1 at 270° | −1 at 180° | none |\n| Special feature | starts at 0, goes up | starts at 1, goes down | asymptotes at 90°, 270° |\n\nThe cos graph is the sin graph shifted 90° to the left: {{cos x = sin(x + 90°)}}. The tan graph has no value where {{cos x = 0}}, because {{tan x = (sin x)/(cos x)}} — those are the vertical **asymptotes** at 90° and 270°.\n\n**Symmetries you use to solve equations** — given the calculator's value *p*:\n\n| Equation | Second solution | Then |\n|---|---|---|\n| {{sin x = k}} | 180° − *p* | ± 360° |\n| {{cos x = k}} | 360° − *p* (or −*p*) | ± 360° |\n| {{tan x = k}} | *p* + 180° | ± 180° |\n\n**Solving in an interval.** (1) Get the calculator value *p*. (2) Use the symmetry to get the partner. (3) Add or subtract the period to collect every answer inside the interval, and throw away those outside. (4) Sketch the graph with the horizontal line to check how many answers there should be. For example, {{tan x = 2}} for 0° ≤ x ≤ 360°: 63.4° and 63.4° + 180° = 243.4°.\n\n**Transformations of trig graphs** (the same rules as for any graph {{y = f(x)}}):\n\n| Equation | Transformation | Effect |\n|---|---|---|\n| {{y = sin x + 2}} | translation {{(0, 2)}}: up 2 | range becomes 1 to 3 |\n| {{y = 3 sin x}} | vertical stretch, scale factor 3 | range −3 to 3 (amplitude 3) |\n| {{y = sin(x + 60°)}} | translation 60° to the **left** | max moves from 90° to 30° |\n| {{y = sin 2x}} | horizontal stretch, scale factor {{1/2}} | period becomes {{360/2 = 180°}} |\n| {{y = -sin x}} | reflection in the x-axis | max at 270°, min at 90° |\n\n> Inside the bracket, everything works 'backwards': {{+60°}} moves the graph **left**, and multiplying x by 2 **squashes** the graph to half its width.\n\nFor {{y = a sin x + b}} (with a > 0): the maximum is {{a + b}} and the minimum is {{-a + b}}, so {{a = (\"max\" - \"min\")/2}} and {{b = (\"max\" + \"min\")/2}}.",
      diagram: `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graphs of y = sin x (solid blue) and y = cos x (dashed orange) for x from 0 to 360 degrees, with y from minus 1 to 1. A horizontal line y = 0.5 crosses the sine curve at x = 30 degrees and x = 150 degrees, which are symmetric about the peak at 90 degrees."><rect width="480" height="270" fill="#ffffff"/><line x1="50" y1="135" x2="460" y2="135" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="16.2" x2="50" y2="253.8" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="135" x2="50" y2="140" stroke="#334155" stroke-width="1"/><text x="50" y="153" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">0°</text><line x1="150" y1="135" x2="150" y2="140" stroke="#334155" stroke-width="1"/><text x="150" y="153" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">90°</text><line x1="250" y1="135" x2="250" y2="140" stroke="#334155" stroke-width="1"/><text x="250" y="153" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">180°</text><line x1="350" y1="135" x2="350" y2="140" stroke="#334155" stroke-width="1"/><text x="350" y="153" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">270°</text><line x1="450" y1="135" x2="450" y2="140" stroke="#334155" stroke-width="1"/><text x="450" y="153" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">360°</text><line x1="83.3" y1="132" x2="83.3" y2="138" stroke="#334155" stroke-width="1"/><line x1="116.7" y1="132" x2="116.7" y2="138" stroke="#334155" stroke-width="1"/><line x1="183.3" y1="132" x2="183.3" y2="138" stroke="#334155" stroke-width="1"/><line x1="216.7" y1="132" x2="216.7" y2="138" stroke="#334155" stroke-width="1"/><line x1="283.3" y1="132" x2="283.3" y2="138" stroke="#334155" stroke-width="1"/><line x1="316.7" y1="132" x2="316.7" y2="138" stroke="#334155" stroke-width="1"/><line x1="383.3" y1="132" x2="383.3" y2="138" stroke="#334155" stroke-width="1"/><line x1="416.7" y1="132" x2="416.7" y2="138" stroke="#334155" stroke-width="1"/><line x1="45" y1="40" x2="50" y2="40" stroke="#334155" stroke-width="1"/><text x="42" y="44" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">1</text><line x1="45" y1="87.5" x2="50" y2="87.5" stroke="#334155" stroke-width="1"/><text x="42" y="91.5" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">0.5</text><line x1="45" y1="182.5" x2="50" y2="182.5" stroke="#334155" stroke-width="1"/><text x="42" y="186.5" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">−0.5</text><line x1="45" y1="230" x2="50" y2="230" stroke="#334155" stroke-width="1"/><text x="42" y="234" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">−1</text><line x1="50" y1="40" x2="450" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="50" y1="230" x2="450" y2="230" stroke="#e2e8f0" stroke-width="1"/><polyline points="50,40 55.6,40.4 61.1,41.4 66.7,43.2 72.2,45.7 77.8,48.9 83.3,52.7 88.9,57.2 94.4,62.2 100,67.8 105.6,73.9 111.1,80.5 116.7,87.5 122.2,94.9 127.8,102.5 133.3,110.4 138.9,118.5 144.4,126.7 150,135 155.6,143.3 161.1,151.5 166.7,159.6 172.2,167.5 177.8,175.1 183.3,182.5 188.9,189.5 194.4,196.1 200,202.2 205.6,207.8 211.1,212.8 216.7,217.3 222.2,221.1 227.8,224.3 233.3,226.8 238.9,228.6 244.4,229.6 250,230 255.6,229.6 261.1,228.6 266.7,226.8 272.2,224.3 277.8,221.1 283.3,217.3 288.9,212.8 294.4,207.8 300,202.2 305.6,196.1 311.1,189.5 316.7,182.5 322.2,175.1 327.8,167.5 333.3,159.6 338.9,151.5 344.4,143.3 350,135 355.6,126.7 361.1,118.5 366.7,110.4 372.2,102.5 377.8,94.9 383.3,87.5 388.9,80.5 394.4,73.9 400,67.8 405.6,62.2 411.1,57.2 416.7,52.7 422.2,48.9 427.8,45.7 433.3,43.2 438.9,41.4 444.4,40.4 450,40" fill="none" stroke="#ea580c" stroke-width="2" stroke-dasharray="6,4"/><polyline points="50,135 55.6,126.7 61.1,118.5 66.7,110.4 72.2,102.5 77.8,94.9 83.3,87.5 88.9,80.5 94.4,73.9 100,67.8 105.6,62.2 111.1,57.2 116.7,52.7 122.2,48.9 127.8,45.7 133.3,43.2 138.9,41.4 144.4,40.4 150,40 155.6,40.4 161.1,41.4 166.7,43.2 172.2,45.7 177.8,48.9 183.3,52.7 188.9,57.2 194.4,62.2 200,67.8 205.6,73.9 211.1,80.5 216.7,87.5 222.2,94.9 227.8,102.5 233.3,110.4 238.9,118.5 244.4,126.7 250,135 255.6,143.3 261.1,151.5 266.7,159.6 272.2,167.5 277.8,175.1 283.3,182.5 288.9,189.5 294.4,196.1 300,202.2 305.6,207.8 311.1,212.8 316.7,217.3 322.2,221.1 327.8,224.3 333.3,226.8 338.9,228.6 344.4,229.6 350,230 355.6,229.6 361.1,228.6 366.7,226.8 372.2,224.3 377.8,221.1 383.3,217.3 388.9,212.8 394.4,207.8 400,202.2 405.6,196.1 411.1,189.5 416.7,182.5 422.2,175.1 427.8,167.5 433.3,159.6 438.9,151.5 444.4,143.3 450,135" fill="none" stroke="#4f46e5" stroke-width="2.5"/><line x1="50" y1="87.5" x2="450" y2="87.5" stroke="#b91c1c" stroke-width="1.2" stroke-dasharray="3,3"/><line x1="83.3" y1="87.5" x2="83.3" y2="135" stroke="#b91c1c" stroke-width="1" stroke-dasharray="2,3"/><circle cx="83.3" cy="87.5" r="4" fill="#b91c1c"/><text x="97.3" y="127" font-family="sans-serif" font-size="10" fill="#b91c1c" text-anchor="middle">30°</text><line x1="216.7" y1="87.5" x2="216.7" y2="135" stroke="#b91c1c" stroke-width="1" stroke-dasharray="2,3"/><circle cx="216.7" cy="87.5" r="4" fill="#b91c1c"/><text x="230.7" y="127" font-family="sans-serif" font-size="10" fill="#b91c1c" text-anchor="middle">150°</text><line x1="150" y1="40" x2="150" y2="135" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,3"/><text x="383.3" y="245.4" font-family="sans-serif" font-size="12" fill="#4f46e5" text-anchor="middle">y = sin x</text><text x="56.7" y="28.6" font-family="sans-serif" font-size="12" fill="#ea580c" text-anchor="start">y = cos x</text><text x="454" y="82.5" font-family="sans-serif" font-size="11" fill="#b91c1c" text-anchor="end">y = 0.5</text><text x="464" y="139" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="start">x</text><text x="50" y="12.2" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">y</text></svg>`,
      diagramCaption:
        "y = sin x (solid) and y = cos x (dashed) from 0° to 360°. The line y = 0.5 cuts the sine curve at 30° and 150°, mirror images in the line x = 90°.",
      workedExamples: [
        {
          title: "All solutions from the graph",
          problem:
            "Solve {{cos x = -0.4}} for 0° ≤ x ≤ 360°. Give your answers correct to 1 decimal place.",
          steps: [
            "Calculator: {{x = cos^(-1)(-0.4) = 113.6°}} (1 d.p.).",
            "The cos graph is symmetric about x = 180°, so the partner is 360° − 113.6° = 246.4°.",
            "Check with the graph: cos x is negative between 90° and 270°, and the line y = −0.4 cuts the curve once on each side of the minimum at 180° — two solutions ✓.",
            "Adding or subtracting 360° takes both outside the interval, so there are no more.",
          ],
          answer: "x = 113.6° or x = 246.4°",
          yourTurn: {
            question:
              "Your turn: solve {{sin x = -0.6}} for 0° ≤ x ≤ 360°. Give both answers correct to 1 decimal place.",
            answer: { type: "list", values: [216.9, 323.1], ordered: false, tolerance: 0.05, display: "216.9°, 323.1°" },
            solution:
              "Calculator: {{sin^(-1)(-0.6) = -36.9°}}, outside the interval. Partner: 180° − (−36.9°) = **216.9°**. Add 360° to the calculator value: −36.9° + 360° = **323.1°**. Both are where sin is negative (180°–360°) ✓.",
          },
        },
        {
          title: "Sketching a transformed graph",
          problem:
            "Sketch {{y = 2 cos x + 1}} for 0° ≤ x ≤ 360°. State the maximum and minimum points and the values of x where the graph crosses the x-axis.",
          steps: [
            "Start from {{y = cos x}}: max (0°, 1), min (180°, −1), max (360°, 1).",
            "Multiply by 2 (vertical stretch, scale factor 2): max 2, min −2.",
            "Add 1 (translate up 1): maximum points (0°, 3) and (360°, 3); minimum point (180°, −1).",
            "Crosses the x-axis where {{2 cos x + 1 = 0}}, i.e. {{cos x = -1/2}}: x = 120° and x = 360° − 120° = 240°.",
            "Sketch: a cosine wave from 3 down to −1 and back to 3, crossing the axis at 120° and 240°, and meeting the y-axis at (0, 3).",
          ],
          answer: "Max (0°, 3) and (360°, 3); min (180°, −1); crosses the x-axis at 120° and 240°.",
          yourTurn: {
            question:
              "Your turn: the graph of {{y = a sin x + b}}, where a > 0, has maximum value 7 and minimum value −1. Find the values of *a* and *b*. Give *a* first, then *b*.",
            answer: { type: "list", values: [4, 3], ordered: true, display: "a = 4, b = 3" },
            solution:
              "Max = a + b = 7 and min = −a + b = −1. Adding: 2b = 6, so b = 3; then a = 4. (The midline is halfway between 7 and −1; the amplitude is half the height of the wave, {{8/2 = 4}}.)",
          },
        },
      ],
      keyPoints: [
        "sin and cos have period 360° and range −1 to 1; tan has period 180°, no maximum, and asymptotes at 90° and 270°.",
        "sin x = k: answers p and 180° − p. cos x = k: p and 360° − p. tan x = k: p and p + 180°.",
        "Then add or subtract the period to find every solution in the interval.",
        "Sketch the graph with the horizontal line y = k to count how many solutions there should be.",
        "{{y = f(x) + a}} moves up a; {{y = f(x + a)}} moves **left** a; {{y = a f(x)}} stretches vertically; {{y = f(ax)}} squashes horizontally by {{1/a}}.",
        "For {{y = a sin x + b}}: max = a + b, min = b − a.",
      ],
      whyItWorks:
        "Picture a point P going anticlockwise round a circle of radius 1, starting at (1, 0). After turning through x°, its **height** is sin x and its **horizontal position** is cos x. Plot the height against the angle and you draw the sine wave; plot the horizontal position and you draw the cosine wave. After 360° the point is back where it started, so both graphs repeat every 360°.\n\nThe symmetries follow from the circle: the angles x and 180° − x are mirror images in the vertical axis, so P is at the **same height** — hence {{sin(180° - x) = sin x}}. The angles x and 360° − x are mirror images in the horizontal axis, so P is the **same distance across** — hence {{cos(360° - x) = cos x}}. And x and x + 180° point in exactly opposite directions, so the line OP has the same gradient — hence {{tan(x + 180°) = tan x}}.",
      strategies: ["Draw a diagram", "Use symmetry", "Find a pattern", "Check by substituting"],
      thinkDeeper:
        "Without a calculator, find all x between 0° and 360° where {{sin x = cos x}}. Then decide: for how many values of x between 0° and 360° is {{sin x = 0.3}}? {{sin 2x = 0.3}}? {{sin 5x = 0.3}}? Can you predict the number for {{sin nx = 0.3}}?",
    },

    // ------------------------------------------------------------------ 5
    {
      id: "trig-identities",
      heading: "Trig identities",
      discovery: {
        problem:
          "Use your calculator to work out {{(sin 37°)^2 + (cos 37°)^2}}. Now try 71°, 150° and 200°.\n\nWhat do you notice? Can you explain it using a right-angled triangle whose **hypotenuse is 1**?",
        idea:
          "Every answer is exactly **1**. In a right-angled triangle with hypotenuse 1 and angle θ, the opposite side is {{sin theta}} and the adjacent side is {{cos theta}} (SOHCAHTOA with hyp = 1). Pythagoras says\n\n    {{(sin theta)^2 + (cos theta)^2 = 1^2}}\n\nwritten {{sin^2 theta + cos^2 theta = 1}}. On the unit circle (the diagram) it works for every angle, not just acute ones, because the point {{(cos theta, sin theta)}} is always exactly 1 unit from the origin.",
      },
      body:
        "An **identity** is true for **every** value of the variable (where it is defined), not just a few — write it with {{≡}}. You need two (neither is on the formula sheet):\n\n    {{tan theta ≡ (sin theta)/(cos theta)}}\n    {{sin^2 theta + cos^2 theta ≡ 1}}\n\n**Notation.** {{sin^2 theta}} means {{(sin theta)^2}} — square the sine, not the angle. It is **not** {{sin(theta^2)}}.\n\n**Useful rearrangements** of the second identity:\n\n- {{sin^2 theta = 1 - cos^2 theta}}\n- {{cos^2 theta = 1 - sin^2 theta}}\n- {{1 - sin^2 theta}} and {{1 - cos^2 theta}} factorise as a difference of two squares: {{1 - sin^2 theta = (1 - sin theta)(1 + sin theta)}}.\n\n**Using them to find exact values.** If {{sin theta = 3/5}} and θ is acute, then {{cos^2 theta = 1 - 9/25 = 16/25}}, so {{cos theta = 4/5}} and {{tan theta = (3/5)/(4/5) = 3/4}}. If θ were **obtuse**, cos θ would be **negative** ({{-4/5}}) — the cos graph is below the axis between 90° and 180°. Always decide the sign from the size of the angle.\n\n**Proving an identity.** Show that one side can be turned into the other.\n\n1. Start with the **more complicated** side (usually the left-hand side, LHS).\n2. Look for {{sin^2 theta + cos^2 theta}}, for {{1 - sin^2 theta}} or {{1 - cos^2 theta}}, or for a tan to replace with {{(sin theta)/(cos theta)}}.\n3. Combine fractions over a common denominator, expand brackets, factorise.\n4. Finish with '= RHS'.\n\nExample: prove {{(sin theta + cos theta)^2 ≡ 1 + 2 sin theta cos theta}}.\n\n    LHS = {{sin^2 theta + 2 sin theta cos theta + cos^2 theta}}\n    = {{(sin^2 theta + cos^2 theta) + 2 sin theta cos theta}}\n    = {{1 + 2 sin theta cos theta}} = RHS ✓\n\n> Never 'cross-multiply' or do the same thing to both sides of an identity you are trying to prove — that assumes what you want to show. Work on one side only.\n\n**Why it matters.** These identities let you rewrite an equation in **one** trig function — the key step in many trig equations (next section) — and they appear in the derivation of the cosine rule.",
      diagram: `<svg viewBox="0 0 460 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Unit circle centred at the origin O with radius 1. A point P on the circle at angle theta = 35 degrees from the positive x-axis has coordinates (cos theta, sin theta). The right-angled triangle under OP has horizontal side cos theta, vertical side sin theta and hypotenuse 1, so sin squared theta plus cos squared theta equals 1."><rect width="460" height="280" fill="#ffffff"/><line x1="20" y1="150" x2="285" y2="150" stroke="#334155" stroke-width="1.2"/><line x1="150" y1="275" x2="150" y2="20" stroke="#334155" stroke-width="1.2"/><circle cx="150" cy="150" r="110" fill="none" stroke="#94a3b8" stroke-width="1.5"/><polygon points="150,150 240.1,150 240.1,86.9" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="231.1,150 231.1,141 240.1,141" fill="none" stroke="#1f2937" stroke-width="1.2"/><path d="M 176 150 A 26 26 0 0 0 171.3 135.1" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="240.1" cy="86.9" r="4" fill="#b91c1c"/><text x="248.1" y="78.9" font-family="sans-serif" font-size="12" fill="#b91c1c" text-anchor="start">P(cos θ, sin θ)</text><text x="140" y="166" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">O</text><text x="184" y="144" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="start">θ</text><text x="195.1" y="168" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">cos θ</text><text x="246.1" y="122.5" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="start">sin θ</text><text x="187.1" y="112.5" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="end">1</text><text x="264" y="166" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">1</text><text x="36" y="166" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">−1</text><text x="140" y="36" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">1</text><text x="380" y="180" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">Pythagoras:</text><text x="380" y="200" font-family="sans-serif" font-size="12" fill="#b91c1c" text-anchor="middle">sin²θ + cos²θ = 1</text><text x="380" y="232" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">Gradient of OP:</text><text x="380" y="252" font-family="sans-serif" font-size="12" fill="#b91c1c" text-anchor="middle">tan θ = sin θ ÷ cos θ</text></svg>`,
      diagramCaption:
        "On the unit circle, P = (cos θ, sin θ). The triangle under OP has hypotenuse 1, so Pythagoras gives sin²θ + cos²θ = 1, and the gradient of OP is sin θ ÷ cos θ = tan θ.",
      workedExamples: [
        {
          title: "Exact values from one ratio",
          problem:
            "Given that {{sin theta = 5/13}} and θ is obtuse, find the exact values of {{cos theta}} and {{tan theta}}.",
          steps: [
            "Use {{cos^2 theta = 1 - sin^2 theta = 1 - 25/169 = 144/169}}.",
            "So {{cos theta = ± 12/13}}.",
            "θ is obtuse (between 90° and 180°), where cos is **negative**: {{cos theta = -12/13}}.",
            "{{tan theta = (sin theta)/(cos theta) = (5/13)/(-12/13) = -5/12}}.",
            "Check with a calculator: {{sin^(-1)(5/13) = 22.6°}}, so θ = 157.4°, and {{cos 157.4° = -0.923 = -12/13}} ✓.",
          ],
          answer: "{{cos theta = -12/13}}, {{tan theta = -5/12}}",
          yourTurn: {
            question:
              "Your turn: given that {{cos theta = 2/3}} and θ is acute, find the exact value of {{sin theta}}. Give your answer as a surd.",
            answer: { type: "expression", expr: "sqrt(5)/3", form: "surd", display: "{{(sqrt(5))/3}}" },
            solution:
              "{{sin^2 theta = 1 - cos^2 theta = 1 - 4/9 = 5/9}}. θ is acute, so sin θ is positive: {{sin theta = (sqrt(5))/3}}.",
          },
        },
        {
          title: "Proving an identity",
          problem: "Prove that {{tan theta + 1/(tan theta) ≡ 1/(sin theta cos theta)}}.",
          steps: [
            "Start with the LHS — it is more complicated. Replace tan with sin ÷ cos: LHS = {{(sin theta)/(cos theta) + (cos theta)/(sin theta)}}.",
            "Common denominator {{sin theta cos theta}}: LHS = {{(sin^2 theta + cos^2 theta)/(sin theta cos theta)}}.",
            "Use {{sin^2 theta + cos^2 theta ≡ 1}}: LHS = {{1/(sin theta cos theta)}} = RHS ✓.",
            "Test with θ = 45°: LHS = 1 + 1 = 2; RHS = {{1/((sqrt(2))/2 * (sqrt(2))/2) = 1/(1/2) = 2}} ✓. (A numerical test is a check, not a proof.)",
          ],
          answer: "LHS → {{(sin^2 theta + cos^2 theta)/(sin theta cos theta)}} → {{1/(sin theta cos theta)}} = RHS",
        },
      ],
      keyPoints: [
        "{{tan theta ≡ (sin theta)/(cos theta)}} and {{sin^2 theta + cos^2 theta ≡ 1}} — learn both; neither is on the formula sheet.",
        "{{sin^2 theta}} means {{(sin theta)^2}}.",
        "From one ratio you can find the others exactly; choose the sign from the size of the angle.",
        "Prove an identity by working on **one** side until it becomes the other.",
        "Spot {{1 - sin^2 theta = cos^2 theta}} and {{1 - cos^2 theta = sin^2 theta}} — they appear in almost every proof.",
        "Test a proved identity with a number like 30° or 45° as a check.",
      ],
      whyItWorks:
        "On the unit circle (the diagram), the point P at angle θ has coordinates {{(cos theta, sin theta)}} — this is really the **definition** of sin and cos for any angle, and it agrees with SOHCAHTOA for acute angles.\n\n- P is 1 unit from O, so Pythagoras (or the circle equation {{x^2 + y^2 = 1}}) gives {{cos^2 theta + sin^2 theta = 1}} for **every** θ — even when cos θ or sin θ is negative, because squaring removes the sign.\n- The gradient of OP is {{\"rise\"/\"run\" = (sin theta)/(cos theta)}}, and in a right-angled triangle {{\"opp\"/\"adj\" = (\"opp\"/\"hyp\")/(\"adj\"/\"hyp\")}} — that is {{tan theta}}. Where {{cos theta = 0}} (90°, 270°) the line OP is vertical, its gradient is not defined — the asymptotes of the tan graph.",
      strategies: ["Work on one side", "Introduce a variable", "Check by substituting", "Look for an invariant"],
      thinkDeeper:
        "Mei claims she has found an angle with {{sin theta + cos theta = 1.5}}. Square both sides and use the identity to find {{sin theta cos theta}}. Then show, using {{(sin theta - cos theta)^2 >= 0}}, that {{sin theta cos theta}} can never be more than {{1/2}}. What does that tell you about Mei's claim — and what is the largest possible value of {{sin theta + cos theta}}?",
    },

    // ------------------------------------------------------------------ 6
    {
      id: "trig-equations",
      heading: "Solving trig equations in an interval",
      discovery: {
        problem:
          "Solve {{2 cos^2 x - cos x - 1 = 0}} for 0° ≤ x ≤ 360°.\n\nIt looks scary — but cover up every 'cos x' with a single letter, say *c*. What kind of equation is left? How many solutions do you expect for x?",
        idea:
          "With {{c = cos x}} it is the quadratic {{2c^2 - c - 1 = 0}}, which factorises: {{(2c + 1)(c - 1) = 0}}, so {{c = -1/2}} or {{c = 1}}.\n\n- {{cos x = 1}}: x = 0° or 360°.\n- {{cos x = -1/2}}: x = 120° or 360° − 120° = 240°.\n\nSo there are **four** solutions: 0°, 120°, 240°, 360°. A trig equation is often an ordinary equation in disguise — solve for the trig function first, then use the graph to get every angle.",
      },
      body:
        "**Step 1 — make it an equation in one trig function**, then solve for that function.\n\n| Type | Example | First move |\n|---|---|---|\n| linear | {{3 sin x + 1 = 0}} | rearrange: {{sin x = -1/3}} |\n| quadratic in one function | {{2 sin^2 x - sin x - 1 = 0}} | factorise (or the quadratic formula) |\n| mixed {{sin^2}} and cos | {{2 sin^2 x + 3 cos x - 3 = 0}} | replace {{sin^2 x}} with {{1 - cos^2 x}} |\n| sin and cos, same power | {{3 sin x = 2 cos x}} | divide by cos x: {{tan x = 2/3}} |\n| multiple angle | {{tan 2x = 1}} | solve for 2x over a doubled interval |\n\n**Step 2 — reject impossible values.** sin and cos are always between −1 and 1, so {{cos x = 3}} has **no** solutions. Say so ('no solutions since −1 ≤ cos x ≤ 1').\n\n**Step 3 — find every angle in the interval** using the symmetries (or the CAST diagram, below):\n\n- sin x = k: p and 180° − p\n- cos x = k: p and 360° − p\n- tan x = k: p and p + 180°\n\nthen add or subtract 360° (180° for tan) as needed. Watch the interval: '0° ≤ x < 360°', '−180° ≤ x ≤ 180°' and '0° ≤ x ≤ 720°' give different lists.\n\n**Multiple angles.** For {{tan 2x = 1}} with 0° ≤ x ≤ 360°, let {{u = 2x}}, so 0° ≤ u ≤ 720° — **double the interval**. Then u = 45°, 225°, 405°, 585° and x = 22.5°, 112.5°, 202.5°, 292.5°. Squashing the graph horizontally packs in more solutions (see the diagram). For {{sin(x + 30°) = k}}, let {{u = x + 30°}} and **shift** the interval to 30° ≤ u ≤ 390° instead.\n\n**Never divide by sin x or cos x when it could be zero** — you lose solutions. For {{2 sin x cos x = sin x}}: rearrange to {{sin x(2 cos x - 1) = 0}}, so sin x = 0 (0°, 180°, 360°) **or** {{cos x = 1/2}} (60°, 300°). Dividing by sin x would throw away three answers.\n\n**CAST.** The four quadrants show which ratios are positive: 0°–90° **A**ll, 90°–180° **S**in only, 180°–270° **T**an only, 270°–360° **C**os only. If {{sin x = -0.6}}, sin is negative, so x is in the T or C quadrant (180°–360°).\n\n**Accuracy.** Give angles to 1 d.p. unless the answer is exact; keep exact values like {{cos x = -1/2}} as fractions until the very end.",
      diagram: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y = tan 2x for x from 0 to 360 degrees. It has period 90 degrees with vertical dashed asymptotes at 45, 135, 225 and 315 degrees. The horizontal line y = 1 cuts the graph four times, at x = 22.5, 112.5, 202.5 and 292.5 degrees."><rect width="480" height="280" fill="#ffffff"/><line x1="40" y1="140" x2="450" y2="140" stroke="#1f2937" stroke-width="1.5"/><line x1="40" y1="21.2" x2="40" y2="258.8" stroke="#1f2937" stroke-width="1.5"/><line x1="40" y1="140" x2="40" y2="145" stroke="#334155" stroke-width="1"/><line x1="90" y1="140" x2="90" y2="145" stroke="#334155" stroke-width="1"/><line x1="140" y1="140" x2="140" y2="145" stroke="#334155" stroke-width="1"/><line x1="190" y1="140" x2="190" y2="145" stroke="#334155" stroke-width="1"/><line x1="240" y1="140" x2="240" y2="145" stroke="#334155" stroke-width="1"/><line x1="290" y1="140" x2="290" y2="145" stroke="#334155" stroke-width="1"/><line x1="340" y1="140" x2="340" y2="145" stroke="#334155" stroke-width="1"/><line x1="390" y1="140" x2="390" y2="145" stroke="#334155" stroke-width="1"/><line x1="440" y1="140" x2="440" y2="145" stroke="#334155" stroke-width="1"/><text x="140" y="158" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">90°</text><text x="240" y="158" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">180°</text><text x="340" y="158" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">270°</text><text x="440" y="158" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">360°</text><line x1="35" y1="104" x2="40" y2="104" stroke="#334155" stroke-width="1"/><text x="32" y="108" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">1</text><line x1="35" y1="68" x2="40" y2="68" stroke="#334155" stroke-width="1"/><text x="32" y="72" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">2</text><line x1="35" y1="32" x2="40" y2="32" stroke="#334155" stroke-width="1"/><text x="32" y="36" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">3</text><line x1="35" y1="176" x2="40" y2="176" stroke="#334155" stroke-width="1"/><text x="32" y="180" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">−1</text><line x1="35" y1="212" x2="40" y2="212" stroke="#334155" stroke-width="1"/><text x="32" y="216" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">−2</text><line x1="35" y1="248" x2="40" y2="248" stroke="#334155" stroke-width="1"/><text x="32" y="252" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">−3</text><line x1="90" y1="17.6" x2="90" y2="262.4" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,4"/><line x1="190" y1="17.6" x2="190" y2="262.4" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,4"/><line x1="290" y1="17.6" x2="290" y2="262.4" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,4"/><line x1="390" y1="17.6" x2="390" y2="262.4" stroke="#94a3b8" stroke-width="1" stroke-dasharray="5,4"/><polyline points="40,140 40.6,139.4 41.1,138.7 41.7,138.1 42.2,137.5 42.8,136.9 43.3,136.2 43.9,135.6 44.4,134.9 45,134.3 45.6,133.7 46.1,133 46.7,132.3 47.2,131.7 47.8,131 48.3,130.4 48.9,129.7 49.4,129 50,128.3 50.6,127.6 51.1,126.9 51.7,126.2 52.2,125.5 52.8,124.7 53.3,124 53.9,123.2 54.4,122.4 55,121.7 55.6,120.9 56.1,120 56.7,119.2 57.2,118.4 57.8,117.5 58.3,116.6 58.9,115.7 59.4,114.8 60,113.8 60.6,112.9 61.1,111.9 61.7,110.8 62.2,109.8 62.8,108.7 63.3,107.6 63.9,106.4 64.4,105.2 65,104 65.6,102.7 66.1,101.4 66.7,100 67.2,98.6 67.8,97.1 68.3,95.5 68.9,93.9 69.4,92.2 70,90.5 70.6,88.6 71.1,86.6 71.7,84.6 72.2,82.4 72.8,80.1 73.3,77.6 73.9,75.1 74.4,72.3 75,69.3 75.6,66.2 76.1,62.8 76.7,59.1 77.2,55.2 77.8,50.9 78.3,46.2 78.9,41.1 79.4,35.4 80,29.2 80.6,22.2" fill="none" stroke="#4f46e5" stroke-width="2.2"/><polyline points="99.4,257.8 100,250.8 100.6,244.6 101.1,238.9 101.7,233.8 102.2,229.1 102.8,224.8 103.3,220.9 103.9,217.2 104.4,213.8 105,210.7 105.6,207.7 106.1,204.9 106.7,202.4 107.2,199.9 107.8,197.6 108.3,195.4 108.9,193.4 109.4,191.4 110,189.5 110.6,187.8 111.1,186.1 111.7,184.5 112.2,182.9 112.8,181.4 113.3,180 113.9,178.6 114.4,177.3 115,176 115.6,174.8 116.1,173.6 116.7,172.4 117.2,171.3 117.8,170.2 118.3,169.2 118.9,168.1 119.4,167.1 120,166.2 120.6,165.2 121.1,164.3 121.7,163.4 122.2,162.5 122.8,161.6 123.3,160.8 123.9,160 124.4,159.1 125,158.3 125.6,157.6 126.1,156.8 126.7,156 127.2,155.3 127.8,154.5 128.3,153.8 128.9,153.1 129.4,152.4 130,151.7 130.6,151 131.1,150.3 131.7,149.6 132.2,149 132.8,148.3 133.3,147.7 133.9,147 134.4,146.3 135,145.7 135.6,145.1 136.1,144.4 136.7,143.8 137.2,143.1 137.8,142.5 138.3,141.9 138.9,141.3 139.4,140.6 140,140 140.6,139.4 141.1,138.7 141.7,138.1 142.2,137.5 142.8,136.9 143.3,136.2 143.9,135.6 144.4,134.9 145,134.3 145.6,133.7 146.1,133 146.7,132.3 147.2,131.7 147.8,131 148.3,130.4 148.9,129.7 149.4,129 150,128.3 150.6,127.6 151.1,126.9 151.7,126.2 152.2,125.5 152.8,124.7 153.3,124 153.9,123.2 154.4,122.4 155,121.7 155.6,120.9 156.1,120 156.7,119.2 157.2,118.4 157.8,117.5 158.3,116.6 158.9,115.7 159.4,114.8 160,113.8 160.6,112.9 161.1,111.9 161.7,110.8 162.2,109.8 162.8,108.7 163.3,107.6 163.9,106.4 164.4,105.2 165,104 165.6,102.7 166.1,101.4 166.7,100 167.2,98.6 167.8,97.1 168.3,95.5 168.9,93.9 169.4,92.2 170,90.5 170.6,88.6 171.1,86.6 171.7,84.6 172.2,82.4 172.8,80.1 173.3,77.6 173.9,75.1 174.4,72.3 175,69.3 175.6,66.2 176.1,62.8 176.7,59.1 177.2,55.2 177.8,50.9 178.3,46.2 178.9,41.1 179.4,35.4 180,29.2 180.6,22.2" fill="none" stroke="#4f46e5" stroke-width="2.2"/><polyline points="199.4,257.8 200,250.8 200.6,244.6 201.1,238.9 201.7,233.8 202.2,229.1 202.8,224.8 203.3,220.9 203.9,217.2 204.4,213.8 205,210.7 205.6,207.7 206.1,204.9 206.7,202.4 207.2,199.9 207.8,197.6 208.3,195.4 208.9,193.4 209.4,191.4 210,189.5 210.6,187.8 211.1,186.1 211.7,184.5 212.2,182.9 212.8,181.4 213.3,180 213.9,178.6 214.4,177.3 215,176 215.6,174.8 216.1,173.6 216.7,172.4 217.2,171.3 217.8,170.2 218.3,169.2 218.9,168.1 219.4,167.1 220,166.2 220.6,165.2 221.1,164.3 221.7,163.4 222.2,162.5 222.8,161.6 223.3,160.8 223.9,160 224.4,159.1 225,158.3 225.6,157.6 226.1,156.8 226.7,156 227.2,155.3 227.8,154.5 228.3,153.8 228.9,153.1 229.4,152.4 230,151.7 230.6,151 231.1,150.3 231.7,149.6 232.2,149 232.8,148.3 233.3,147.7 233.9,147 234.4,146.3 235,145.7 235.6,145.1 236.1,144.4 236.7,143.8 237.2,143.1 237.8,142.5 238.3,141.9 238.9,141.3 239.4,140.6 240,140 240.6,139.4 241.1,138.7 241.7,138.1 242.2,137.5 242.8,136.9 243.3,136.2 243.9,135.6 244.4,134.9 245,134.3 245.6,133.7 246.1,133 246.7,132.3 247.2,131.7 247.8,131 248.3,130.4 248.9,129.7 249.4,129 250,128.3 250.6,127.6 251.1,126.9 251.7,126.2 252.2,125.5 252.8,124.7 253.3,124 253.9,123.2 254.4,122.4 255,121.7 255.6,120.9 256.1,120 256.7,119.2 257.2,118.4 257.8,117.5 258.3,116.6 258.9,115.7 259.4,114.8 260,113.8 260.6,112.9 261.1,111.9 261.7,110.8 262.2,109.8 262.8,108.7 263.3,107.6 263.9,106.4 264.4,105.2 265,104 265.6,102.7 266.1,101.4 266.7,100 267.2,98.6 267.8,97.1 268.3,95.5 268.9,93.9 269.4,92.2 270,90.5 270.6,88.6 271.1,86.6 271.7,84.6 272.2,82.4 272.8,80.1 273.3,77.6 273.9,75.1 274.4,72.3 275,69.3 275.6,66.2 276.1,62.8 276.7,59.1 277.2,55.2 277.8,50.9 278.3,46.2 278.9,41.1 279.4,35.4 280,29.2 280.6,22.2" fill="none" stroke="#4f46e5" stroke-width="2.2"/><polyline points="299.4,257.8 300,250.8 300.6,244.6 301.1,238.9 301.7,233.8 302.2,229.1 302.8,224.8 303.3,220.9 303.9,217.2 304.4,213.8 305,210.7 305.6,207.7 306.1,204.9 306.7,202.4 307.2,199.9 307.8,197.6 308.3,195.4 308.9,193.4 309.4,191.4 310,189.5 310.6,187.8 311.1,186.1 311.7,184.5 312.2,182.9 312.8,181.4 313.3,180 313.9,178.6 314.4,177.3 315,176 315.6,174.8 316.1,173.6 316.7,172.4 317.2,171.3 317.8,170.2 318.3,169.2 318.9,168.1 319.4,167.1 320,166.2 320.6,165.2 321.1,164.3 321.7,163.4 322.2,162.5 322.8,161.6 323.3,160.8 323.9,160 324.4,159.1 325,158.3 325.6,157.6 326.1,156.8 326.7,156 327.2,155.3 327.8,154.5 328.3,153.8 328.9,153.1 329.4,152.4 330,151.7 330.6,151 331.1,150.3 331.7,149.6 332.2,149 332.8,148.3 333.3,147.7 333.9,147 334.4,146.3 335,145.7 335.6,145.1 336.1,144.4 336.7,143.8 337.2,143.1 337.8,142.5 338.3,141.9 338.9,141.3 339.4,140.6 340,140 340.6,139.4 341.1,138.7 341.7,138.1 342.2,137.5 342.8,136.9 343.3,136.2 343.9,135.6 344.4,134.9 345,134.3 345.6,133.7 346.1,133 346.7,132.3 347.2,131.7 347.8,131 348.3,130.4 348.9,129.7 349.4,129 350,128.3 350.6,127.6 351.1,126.9 351.7,126.2 352.2,125.5 352.8,124.7 353.3,124 353.9,123.2 354.4,122.4 355,121.7 355.6,120.9 356.1,120 356.7,119.2 357.2,118.4 357.8,117.5 358.3,116.6 358.9,115.7 359.4,114.8 360,113.8 360.6,112.9 361.1,111.9 361.7,110.8 362.2,109.8 362.8,108.7 363.3,107.6 363.9,106.4 364.4,105.2 365,104 365.6,102.7 366.1,101.4 366.7,100 367.2,98.6 367.8,97.1 368.3,95.5 368.9,93.9 369.4,92.2 370,90.5 370.6,88.6 371.1,86.6 371.7,84.6 372.2,82.4 372.8,80.1 373.3,77.6 373.9,75.1 374.4,72.3 375,69.3 375.6,66.2 376.1,62.8 376.7,59.1 377.2,55.2 377.8,50.9 378.3,46.2 378.9,41.1 379.4,35.4 380,29.2 380.6,22.2" fill="none" stroke="#4f46e5" stroke-width="2.2"/><polyline points="399.4,257.8 400,250.8 400.6,244.6 401.1,238.9 401.7,233.8 402.2,229.1 402.8,224.8 403.3,220.9 403.9,217.2 404.4,213.8 405,210.7 405.6,207.7 406.1,204.9 406.7,202.4 407.2,199.9 407.8,197.6 408.3,195.4 408.9,193.4 409.4,191.4 410,189.5 410.6,187.8 411.1,186.1 411.7,184.5 412.2,182.9 412.8,181.4 413.3,180 413.9,178.6 414.4,177.3 415,176 415.6,174.8 416.1,173.6 416.7,172.4 417.2,171.3 417.8,170.2 418.3,169.2 418.9,168.1 419.4,167.1 420,166.2 420.6,165.2 421.1,164.3 421.7,163.4 422.2,162.5 422.8,161.6 423.3,160.8 423.9,160 424.4,159.1 425,158.3 425.6,157.6 426.1,156.8 426.7,156 427.2,155.3 427.8,154.5 428.3,153.8 428.9,153.1 429.4,152.4 430,151.7 430.6,151 431.1,150.3 431.7,149.6 432.2,149 432.8,148.3 433.3,147.7 433.9,147 434.4,146.3 435,145.7 435.6,145.1 436.1,144.4 436.7,143.8 437.2,143.1 437.8,142.5 438.3,141.9 438.9,141.3 439.4,140.6 440,140" fill="none" stroke="#4f46e5" stroke-width="2.2"/><line x1="40" y1="104" x2="440" y2="104" stroke="#b91c1c" stroke-width="1.2" stroke-dasharray="3,3"/><circle cx="65" cy="104" r="4" fill="#b91c1c"/><line x1="65" y1="104" x2="65" y2="140" stroke="#b91c1c" stroke-width="1" stroke-dasharray="2,3"/><text x="67" y="172" font-family="sans-serif" font-size="10" fill="#b91c1c" text-anchor="middle">22.5°</text><circle cx="165" cy="104" r="4" fill="#b91c1c"/><line x1="165" y1="104" x2="165" y2="140" stroke="#b91c1c" stroke-width="1" stroke-dasharray="2,3"/><text x="167" y="172" font-family="sans-serif" font-size="10" fill="#b91c1c" text-anchor="middle">112.5°</text><circle cx="265" cy="104" r="4" fill="#b91c1c"/><line x1="265" y1="104" x2="265" y2="140" stroke="#b91c1c" stroke-width="1" stroke-dasharray="2,3"/><text x="267" y="172" font-family="sans-serif" font-size="10" fill="#b91c1c" text-anchor="middle">202.5°</text><circle cx="365" cy="104" r="4" fill="#b91c1c"/><line x1="365" y1="104" x2="365" y2="140" stroke="#b91c1c" stroke-width="1" stroke-dasharray="2,3"/><text x="367" y="172" font-family="sans-serif" font-size="10" fill="#b91c1c" text-anchor="middle">292.5°</text><text x="440" y="98" font-family="sans-serif" font-size="11" fill="#b91c1c" text-anchor="end">y = 1</text><text x="212.2" y="23.2" font-family="sans-serif" font-size="12" fill="#4f46e5" text-anchor="start">y = tan 2x</text><text x="454" y="144" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="start">x</text><text x="40" y="15.2" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">y</text></svg>`,
      diagramCaption:
        "y = tan 2x repeats every 90°, so the line y = 1 meets it four times in 0° ≤ x ≤ 360°: at 22.5°, 112.5°, 202.5° and 292.5°.",
      workedExamples: [
        {
          title: "Use an identity to get a quadratic",
          problem: "Solve {{2 sin^2 x + 3 cos x - 3 = 0}} for 0° ≤ x ≤ 360°.",
          steps: [
            "Two different functions — replace {{sin^2 x}} with {{1 - cos^2 x}}: {{2(1 - cos^2 x) + 3 cos x - 3 = 0}}.",
            "Expand and tidy: {{2 - 2 cos^2 x + 3 cos x - 3 = 0}}, so {{-2 cos^2 x + 3 cos x - 1 = 0}}. Multiply by −1: {{2 cos^2 x - 3 cos x + 1 = 0}}.",
            "Factorise (think {{2c^2 - 3c + 1}}): {{(2 cos x - 1)(cos x - 1) = 0}}.",
            "{{cos x = 1/2}}: x = 60° or 360° − 60° = 300°.",
            "{{cos x = 1}}: x = 0° or 360°.",
            "Check x = 60°: {{2(sqrt(3)/2)^2 + 3 * 1/2 - 3 = 3/2 + 3/2 - 3 = 0}} ✓.",
          ],
          answer: "x = 0°, 60°, 300°, 360°",
          yourTurn: {
            question:
              "Your turn: solve {{2 sin^2 x - sin x - 1 = 0}} for 0° ≤ x ≤ 360°. Give all the solutions.",
            answer: { type: "list", values: [90, 210, 330], ordered: false, display: "90°, 210°, 330°" },
            solution:
              "Factorise: {{(2 sin x + 1)(sin x - 1) = 0}}. {{sin x = 1}} gives x = 90°. {{sin x = -1/2}}: the calculator gives −30°, so x = 180° − (−30°) = 210° and x = −30° + 360° = 330°. Solutions: **90°, 210°, 330°**.",
          },
        },
        {
          title: "A multiple angle",
          problem: "Solve {{tan 2x = sqrt(3)}} for 0° ≤ x ≤ 360°.",
          steps: [
            "Let u = 2x. If 0° ≤ x ≤ 360°, then 0° ≤ u ≤ 720°.",
            "{{tan u = sqrt(3)}}: the exact value is u = 60°.",
            "tan repeats every 180°: u = 60°, 240°, 420°, 600° (the next, 780°, is too big).",
            "Halve to get x: x = 30°, 120°, 210°, 300°.",
            "Check x = 120°: {{tan 240° = tan(240° - 180°) = tan 60° = sqrt(3)}} ✓. Four answers, matching the four branches of tan 2x in 0°–360°.",
          ],
          answer: "x = 30°, 120°, 210°, 300°",
          yourTurn: {
            question:
              "Your turn: solve {{3 sin x = 2 cos x}} for 0° ≤ x < 360°. Give your answers correct to 1 decimal place.",
            answer: { type: "list", values: [33.7, 213.7], ordered: false, tolerance: 0.05, display: "33.7°, 213.7°" },
            solution:
              "Divide both sides by {{3 cos x}} (cos x = 0 is not a solution, since then sin x = ±1 and 3 sin x ≠ 0): {{tan x = 2/3}}. Calculator: x = 33.7°. Add 180°: x = 213.7°.",
          },
        },
      ],
      keyPoints: [
        "Rewrite the equation in **one** trig function, using {{sin^2 x = 1 - cos^2 x}} or {{tan x = (sin x)/(cos x)}} if needed.",
        "Treat {{2 cos^2 x - cos x - 1 = 0}} as a quadratic in cos x.",
        "Reject values of sin or cos outside −1 to 1 — and say why.",
        "Find all angles with the symmetries (or CAST), then add/subtract the period to fill the interval.",
        "For {{sin kx}}, {{cos kx}}, {{tan kx}}: multiply the interval by k first, solve, then divide by k.",
        "Factorise rather than divide by sin x or cos x — dividing loses solutions.",
      ],
      whyItWorks:
        "Substituting {{c = cos x}} doesn't change the algebra — a quadratic factorises the same way whatever its letter is called. The only new part is the last step, turning each value of c back into angles, and that is where the **graph** matters: a horizontal line {{y = c}} with {{-1 < c < 1}} cuts each full wave of sin or cos exactly **twice**, so each value of c gives two angles per 360°.\n\nFor a multiple angle like {{tan 2x}}, the graph is squashed horizontally by a factor of 2, so twice as many waves fit into 0°–360° — and you get twice as many solutions. Doubling the interval for u = 2x is just a way of counting all of those waves.",
      strategies: ["Introduce a variable", "Make it simpler", "Draw a diagram", "Check by substituting", "Split into cases"],
      thinkDeeper:
        "How many solutions does {{sin 5x = 0.3}} have for 0° ≤ x < 360°? Explain without solving. Then solve {{sin x cos x = 1/2 cos x}} for 0° ≤ x ≤ 360° — and find the answers you would lose if you divided both sides by cos x.",
    },
  ],
  learn: {
    flashcards: [
      { front: "The sine rule", back: "{{a/(sin A) = b/(sin B) = c/(sin C)}} — use it when you know a side **and its opposite angle**." },
      { front: "Sine rule: finding an angle", back: "Sines on top: {{(sin A)/a = (sin B)/b}}, then {{sin^(-1)}}." },
      { front: "The ambiguous case of the sine rule", back: "Since {{sin(180° - x) = sin x}}, the angle could be θ or 180° − θ. Check whether the obtuse one leaves room in the triangle." },
      { front: "The cosine rule", back: "{{a^2 = b^2 + c^2 - 2bc cos A}}. Use for SAS (third side) or SSS (an angle)." },
      { front: "Cosine rule rearranged for an angle", back: "{{cos A = (b^2 + c^2 - a^2)/(2bc)}}" },
      { front: "Cosine rule gives a negative cos A. What does it mean?", back: "Angle A is obtuse (between 90° and 180°). The calculator gives it directly — no ambiguity." },
      { front: "Area of a triangle from two sides and an angle", back: "{{1/2 ab sin C}}, where C is the angle **between** sides a and b." },
      { front: "Area of a segment", back: "Sector − triangle = {{theta/360 * pi r^2 - 1/2 r^2 sin theta}}" },
      { front: "Period and range of y = sin x and y = cos x", back: "Period 360°; range −1 ≤ y ≤ 1." },
      { front: "Period and asymptotes of y = tan x (0°–360°)", back: "Period 180°; asymptotes at x = 90° and x = 270°." },
      { front: "sin x = k has calculator value p. The other solution in 0°–360°?", back: "180° − p (then ± 360° to fit the interval)." },
      { front: "cos x = k has calculator value p. The other solution?", back: "360° − p (then ± 360°)." },
      { front: "tan x = k has calculator value p. The other solutions?", back: "p + 180°, p + 360°, … — tan repeats every 180°." },
      { front: "How does y = sin(x + 30°) relate to y = sin x?", back: "Translation 30° to the **left** (vector {{(-30, 0)}})." },
      { front: "Period of y = cos 3x", back: "{{360/3 = 120°}} — a horizontal stretch, scale factor {{1/3}}." },
      { front: "The two H+ trig identities", back: "{{tan theta ≡ (sin theta)/(cos theta)}} and {{sin^2 theta + cos^2 theta ≡ 1}}." },
      { front: "Solving {{tan 2x = 1}} for 0° ≤ x ≤ 360°: first step?", back: "Let u = 2x and double the interval to 0° ≤ u ≤ 720°. Answers: 22.5°, 112.5°, 202.5°, 292.5°." },
      { front: "CAST — which ratios are positive where?", back: "0°–90° All; 90°–180° Sin; 180°–270° Tan; 270°–360° Cos." },
    ],
    mustKnow: [
      "Can I use the sine rule to find a missing side or a missing angle in any triangle?",
      "Can I recognise the ambiguous case of the sine rule and find both possible angles?",
      "Can I use the cosine rule to find a missing side (SAS) or a missing angle (SSS), including an obtuse angle?",
      "Can I decide whether to use the sine rule, the cosine rule or SOHCAHTOA in a problem?",
      "Can I find the area of any triangle using {{1/2 ab sin C}}, and use it backwards to find a side or an angle?",
      "Can I find the area of a segment as sector − triangle?",
      "Can I solve multi-step problems (bearings, 3D, quadrilaterals) with the sine and cosine rules?",
      "Can I recognise and sketch the graphs of y = sin x, y = cos x and y = tan x, with their periods, maxima, minima and asymptotes?",
      "Can I use the graphs to find all solutions of equations like sin x = 0.5 in a given interval?",
      "Can I describe and sketch the effect of transformations such as y = sin x + a, y = a sin x, y = sin(x + a) and y = sin ax?",
      "Can I use the identities {{tan theta = (sin theta)/(cos theta)}} and {{sin^2 theta + cos^2 theta = 1}} to find exact values and prove simple identities?",
      "Can I solve trig equations in a given interval, including quadratics in sin x or cos x and multiple angles like tan 2x = 1?",
    ],
    misconceptions: [
      {
        wrong: "The sine rule only gives one answer for an angle — whatever the calculator says.",
        right: "{{sin theta = sin(180° - theta)}}, so the angle could also be 180° − θ. Check whether the obtuse option fits in the triangle (the ambiguous case).",
      },
      {
        wrong: "In {{a^2 = b^2 + c^2 - 2bc cos A}}, A can be any angle of the triangle.",
        right: "A must be the angle **between** sides b and c — the angle opposite side a.",
      },
      {
        wrong: "{{b^2 + c^2 - 2bc cos A}} means {{(b^2 + c^2 - 2bc) * cos A}}.",
        right: "Only {{2bc}} is multiplied by cos A. Work out {{2bc cos A}} on its own and subtract it from {{b^2 + c^2}}.",
      },
      {
        wrong: "Area = {{1/2 ab sin C}} works with any angle in the triangle.",
        right: "C must be the angle between the two sides you use. Another angle gives a different (wrong) area.",
      },
      {
        wrong: "{{y = sin(x + 60°)}} is the graph of y = sin x moved 60° to the right.",
        right: "Adding inside the bracket moves the graph **left** 60°. Check: the peak happens when x + 60° = 90°, i.e. at x = 30°.",
      },
      {
        wrong: "{{sin^2 x}} means {{sin(x^2)}}.",
        right: "{{sin^2 x = (sin x)^2}}: find sin x, then square it.",
      },
      {
        wrong: "You can divide both sides of {{sin x cos x = 1/2 sin x}} by sin x.",
        right: "That loses the solutions where sin x = 0. Rearrange to {{sin x(cos x - 1/2) = 0}} and solve both factors.",
      },
      {
        wrong: "For tan 2x = 1 in 0° ≤ x ≤ 360°, find x = 22.5° and add 180° once: two answers.",
        right: "The graph of tan 2x repeats every 90°, so there are four answers. Double the interval for 2x first (0°–720°), then halve.",
      },
    ],
    examMistakes: [
      "Calculator in radians (or gradians) mode — sin 30 comes out as −0.988. Check 'D' is showing before the first trig calculation.",
      "Cosine rule: working out {{9^2 + 13^2 - 2 * 9 * 13}} first and then multiplying by cos A, or forgetting to take the square root at the end and giving {{a^2}} as the length.",
      "Rounding a length to 2 or 3 figures in part (a), then using the rounded value in part (b) — the final answer drifts outside the accepted range. Keep full values in the calculator memory.",
      "Ambiguous case: giving only the calculator's acute angle when the question says the angle is obtuse (or when the diagram clearly shows an obtuse angle).",
      "Trig equations: giving only the calculator value, or listing answers outside the interval (e.g. −30° for 0° ≤ x ≤ 360°), or missing solutions from the second cycle in a multiple-angle question.",
      "Segment questions: giving the sector area or the triangle area instead of their difference, or using {{1/2 ab sin C}} with the wrong angle.",
    ],
    mnemonics: [
      {
        topic: "Which rule?",
        device: "'Pair? Sine there. Sandwich? Cosine.' — a complete side-and-opposite-angle **pair** means the sine rule; an angle **sandwiched** between two known sides (or all three sides) means the cosine rule.",
        explanation: "Before writing any formula, mark the known sides and angles on the diagram and look for a pair or a sandwich.",
      },
      {
        topic: "Signs of sin, cos, tan",
        device: "CAST — going anticlockwise from the 4th quadrant: **C**os (270°–360°), **A**ll (0°–90°), **S**in (90°–180°), **T**an (180°–270°). 'All Students Take Calculus' reads it from 0° upwards.",
        explanation: "Tells you which quadrants your solutions must be in. sin x negative → T and C quadrants, so 180°–360°.",
      },
      {
        topic: "Transformations inside the bracket",
        device: "'Inside lies' — anything done to x inside the bracket does the **opposite** of what it looks like: + 60° moves left, × 2 halves the width.",
        explanation: "Outside the function (y = sin x + 2, y = 3 sin x) everything does what it says to the y-values.",
      },
    ],
    realWorld: [
      {
        title: "Surveying the Himalayas",
        detail:
          "The Great Trigonometrical Survey of India (1802–1871) measured one baseline very carefully, then built a chain of triangles across the subcontinent using only angles and the sine rule. In 1856 it gave the first measurement of Mount Everest's height — within about 10 metres of today's value.",
        emoji: "🏔️",
      },
      {
        title: "Ships in the Singapore Strait",
        detail:
          "Navigators combine bearings and distances exactly like a cosine rule question: two legs of a voyage and the angle between them give the straight-line distance back to port, and the sine rule gives the bearing.",
        emoji: "🚢",
      },
      {
        title: "Riding the Singapore Flyer",
        detail:
          "The Flyer's wheel is 150 m across with its lowest point about 15 m above the ground, and it turns once in about 30 minutes (12° per minute). Your height after t minutes is about {{h = 90 - 75 cos(12t)°}} m — a transformed cosine graph, with maximum 165 m and minimum 15 m.",
        emoji: "🎡",
      },
      {
        title: "Sound, tides and electricity",
        detail:
          "Pure musical notes, the mains electricity in an HDB flat (50 complete cycles a second) and the rise and fall of tides are all modelled with sine waves. The 'period' and 'amplitude' you meet in trig graphs are exactly what engineers measure.",
        emoji: "🌊",
      },
    ],
    videos: [
      { title: "The sine rule (including the ambiguous case)", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+sine+rule" },
      { title: "The cosine rule and area = ½ab sin C", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+cosine+rule+area+of+a+triangle" },
      { title: "Graphs of sin, cos and tan and their transformations", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+trig+graphs+gcse" },
      { title: "Trig identities and solving trig equations", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+solving+trigonometric+equations+identities" },
    ],
    formulas: [
      { name: "Sine rule", formula: "{{a/(sin A) = b/(sin B) = c/(sin C)}}", note: "On the formula sheet" },
      { name: "Sine rule (for angles)", formula: "{{(sin A)/a = (sin B)/b = (sin C)/c}}", note: "Learn this — not given" },
      { name: "Cosine rule", formula: "{{a^2 = b^2 + c^2 - 2bc cos A}}", note: "On the formula sheet" },
      { name: "Cosine rule (for an angle)", formula: "{{cos A = (b^2 + c^2 - a^2)/(2bc)}}", note: "Learn this — not given" },
      { name: "Area of a triangle", formula: "{{\"Area\" = 1/2 ab sin C}}", note: "On the formula sheet" },
      { name: "Area of a sector", formula: "{{theta/360 * pi r^2}}", note: "Learn this — not given" },
      { name: "Area of a segment", formula: "{{theta/360 * pi r^2 - 1/2 r^2 sin theta}}", note: "Learn this — not given" },
      { name: "Supplementary angles", formula: "{{sin(180° - x) = sin x}}", note: "Learn this — not given" },
      { name: "Symmetries of cos and tan", formula: "{{cos(360° - x) = cos x}},  {{tan(x + 180°) = tan x}}", note: "Learn this — not given" },
      { name: "Periods", formula: "sin x, cos x: 360°;  tan x: 180°;  sin kx, cos kx: {{360/k}}°", note: "Learn this — not given" },
      { name: "Tan identity", formula: "{{tan theta ≡ (sin theta)/(cos theta)}}", note: "Learn this — not given" },
      { name: "Pythagorean identity", formula: "{{sin^2 theta + cos^2 theta ≡ 1}}", note: "Learn this — not given" },
    ],
  },
};
