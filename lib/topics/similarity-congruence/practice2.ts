// ---------------------------------------------------------------------------
// Similarity & Congruence — Practice Papers 3 and 4.
// Paper 3: mixed practice — fluency, reasoning, proofs, nested and hourglass triangles, k / k² / k³.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher questions on this topic.
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "similarity-congruence-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "similarity-congruence-p3-q01",
        question:
          "A phone screen is a rectangle 7 cm wide and 15 cm tall. A tablet screen is mathematically similar to it and is 18.2 cm wide.\n\nWork out the height of the tablet screen. Give your answer in cm.",
        answer: { type: "number", value: 39, display: "39 cm" },
        traps: [
          { spec: { type: "number", value: 26.2 }, feedback: "You added 11.2 cm to each side (7 + 11.2 = 18.2). Similar shapes are *multiplied* by a scale factor, not added to." },
          { spec: { type: "number", value: 8.49, tolerance: 0.01 }, feedback: "You've matched 18.2 cm to the 15 cm side. The 18.2 cm side is the *width*, so it corresponds to the 7 cm width." },
        ],
        solution: [
          "Corresponding sides: the widths 7 cm → 18.2 cm.",
          "Scale factor {{k = 18.2/7 = 2.6}}.",
          "Height = 15 × 2.6 = 39 cm.",
        ],
        commonError: "Adding the same amount to each side instead of multiplying by the scale factor.",
        difficulty: "warmup",
        guideRef: "similar-lengths",
        hints: ["Which side of the phone screen matches the 18.2 cm side?", "Scale factor = new length ÷ matching old length."],
        strategy: "Find the scale factor",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "similarity-congruence-p3-q02",
        question: "Change 85 000 mm³ into cm³.",
        answer: { type: "number", value: 85, display: "85 cm³" },
        traps: [
          { spec: { type: "number", value: 850 }, feedback: "You divided by 100, the *area* conversion. A cubic centimetre is 10 mm × 10 mm × 10 mm = 1000 mm³." },
          { spec: { type: "number", value: 8500 }, feedback: "You divided by 10, the length conversion. Volume has three dimensions: divide by {{10^3 = 1000}}." },
        ],
        solution: [
          "1 cm = 10 mm, so 1 cm³ = 10 × 10 × 10 = 1000 mm³.",
          "85 000 ÷ 1000 = 85 cm³.",
        ],
        commonError: "Dividing by 10 or 100 instead of {{10^3 = 1000}}.",
        difficulty: "warmup",
        guideRef: "area-volume-units",
        hints: ["Picture a 1 cm cube measured in mm.", "1 cm³ = 10 × 10 × 10 mm³. Going to a bigger unit, divide."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "similarity-congruence-p3-q03",
        question:
          "Two cylindrical tins are mathematically similar. Their heights are in the ratio 3 : 4.\n\nThe label on the smaller tin has an area of 45 cm². Work out the area of the matching label on the larger tin. Give your answer in cm².",
        answer: { type: "number", value: 80, display: "80 cm²" },
        traps: [
          { spec: { type: "number", value: 60 }, feedback: "You multiplied by the *length* scale factor {{4/3}}. Areas scale by {{k^2 = 16/9}}." },
          { spec: { type: "number", value: 106.7, tolerance: 0.05 }, feedback: "You used {{k^3}}, which is for volumes. A label is an area, so use {{k^2}}." },
        ],
        solution: [
          "Length scale factor {{k = 4/3}}.",
          "Area scale factor {{k^2 = 16/9}}.",
          "Larger label = {{45 * 16/9 = 80}} cm².",
        ],
        commonError: "Using the length scale factor for an area.",
        difficulty: "warmup",
        guideRef: "area-volume-scale",
        hints: ["Find the length scale factor from small to large.", "An area scales by the square of the length scale factor."],
        strategy: "Find the scale factor",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "mcq",
        id: "similarity-congruence-p3-q04",
        question:
          "Triangle ABC has a right angle at B, AC = 10 cm and AB = 6 cm.\n\nTriangle PQR has a right angle at Q, PR = 10 cm and QR = 8 cm.\n\nWhich statement is correct?",
        options: [
          "They are not congruent, because AB = 6 cm but QR = 8 cm",
          "They are similar but not congruent",
          "They are congruent (RHS): by Pythagoras BC = 8 cm, so both have a right angle, a 10 cm hypotenuse and an 8 cm side",
          "You can't tell without knowing another angle",
        ],
        answerIndex: 2,
        explanation:
          "By Pythagoras, {{BC = sqrt(10^2 - 6^2) = sqrt(64) = 8}} cm. So both triangles have a right angle, a 10 cm hypotenuse and another side of 8 cm (BC and QR): congruent by RHS. Comparing AB with QR pairs up the wrong sides — the 6 cm side of ABC matches PQ, which is also 6 cm. 'Similar but not congruent' is wrong because the matching sides are equal, not just in proportion, and RHS needs no extra angle.",
        difficulty: "warmup",
        guideRef: "congruence",
        hints: ["Find the third side of triangle ABC.", "Which side of triangle PQR matches BC?"],
        strategy: "Complete the information",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "similarity-congruence-p3-q05",
        question:
          "In the diagram, D lies on AB and E lies on AC. DE is parallel to BC.\n\nAD = 8 cm, DB = 2 cm and DE = 6 cm.\n\nWork out the length of BC. Give your answer in cm.",
        diagram: `<svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the top. D on AB and E on AC with DE parallel to BC. AD 8 cm, DB 2 cm, DE 6 cm."><rect x="0" y="0" width="420" height="290" fill="#ffffff"/><polygon points="192.1,36.5 110,262 290,262" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="126.4" y1="216.9" x2="270.4" y2="216.9" stroke="#1f2937" stroke-width="2"/><polyline points="195.4,221.7 201.4,216.9 195.4,212.1" fill="none" stroke="#1f2937" stroke-width="1.6"/><polyline points="197,266.8 203,262 197,257.2" fill="none" stroke="#1f2937" stroke-width="1.6"/><text x="191.6" y="27" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="99" y="274" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="301" y="274" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="114.4" y="220.9" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">D</text><text x="282.4" y="220.9" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1f2937" font-weight="bold">E</text><text x="138.6" y="123.7" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">8 cm</text><text x="97.5" y="236.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">2 cm</text><text x="198.4" y="208.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">6 cm</text></svg>`,
        answer: { type: "number", value: 7.5, display: "7.5 cm" },
        traps: [
          { spec: { type: "number", value: 1.5 }, feedback: "You used {{2/8}} as the scale factor. Triangle ABC's side is AB = AD + DB = 10 cm, not DB = 2 cm." },
          { spec: { type: "number", value: 8 }, feedback: "You added 2 cm to DE. Sides of similar triangles are multiplied by the scale factor, not increased by a fixed amount." },
        ],
        solution: [
          "DE ∥ BC, so triangles ADE and ABC are similar (shared angle A, corresponding angles equal).",
          "AB = 8 + 2 = 10 cm, so the scale factor is {{10/8 = 1.25}}.",
          "BC = 6 × 1.25 = 7.5 cm.",
        ],
        commonError: "Using DB instead of the whole side AB to find the scale factor.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["Separate the two triangles: draw ADE and ABC side by side.", "Which side of the big triangle corresponds to AD?", "AB = 10 cm, so k = 10 ÷ 8."],
        strategy: "Draw the triangles separately",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "similarity-congruence-p3-q06",
        question:
          "The straight lines AE and BD cross at C. AB is parallel to DE.\n\nAB = 9 cm, DE = 12 cm, CE = 8 cm and CD = 10 cm.\n\nWork out the lengths of AC and BC. Give AC first, then BC, in cm.",
        diagram: `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hourglass diagram. Lines AE and BD cross at C. AB at the top is parallel to DE at the bottom. AB 9 cm, DE 12 cm, CE 8 cm, CD 10 cm."><rect x="0" y="0" width="400" height="290" fill="#ffffff"/><polygon points="144.2,40 306.2,40 205,129.3" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="205,129.3 70,248.4 286,248.4" fill="#bbf7d0" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="222.2,44.8 228.2,40 222.2,35.2" fill="none" stroke="#1f2937" stroke-width="1.6"/><polyline points="175,253.2 181,248.4 175,243.6" fill="none" stroke="#1f2937" stroke-width="1.6"/><text x="134.2" y="36" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="316.2" y="36" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="221" y="134.3" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="60" y="262.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="296" y="262.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">E</text><text x="225.2" y="29.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">9 cm</text><text x="178" y="267.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">12 cm</text><text x="257.9" y="184.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">8 cm</text><text x="127.6" y="182.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">10 cm</text></svg>`,
        answer: { type: "list", values: [6, 7.5], ordered: true, display: "AC = 6 cm, BC = 7.5 cm" },
        traps: [
          { spec: { type: "list", values: [7.5, 6], ordered: true }, feedback: "Those are the right numbers in the wrong places. AC matches CE (both are opposite the equal angles at B and D), so AC = 6 cm and BC = 7.5 cm — give AC first." },
          { spec: { type: "list", values: [5, 7], ordered: true }, feedback: "You subtracted 3 cm (the difference 12 − 9) from each side. Similar triangles need a *multiplier*: {{9/12 = 3/4}}." },
        ],
        solution: [
          "Angle ACB = angle ECD (vertically opposite), and angle BAC = angle DEC (alternate angles, AB ∥ DE). So triangles ABC and EDC are similar.",
          "Match the sides: A ↔ E, B ↔ D, C ↔ C. AB (9) ↔ ED (12), so the scale factor from the large triangle to the small one is {{9/12 = 3/4}}.",
          "AC ↔ EC: AC = 8 × {{3/4}} = 6 cm.",
          "BC ↔ DC: BC = 10 × {{3/4}} = 7.5 cm.",
        ],
        commonError: "Matching the wrong sides in an hourglass — the triangles are 'flipped', so check which vertex corresponds to which.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["Which pairs of angles are equal? Look for vertically opposite and alternate angles.", "Write the correspondence: A ↔ ?, B ↔ ?, C ↔ C.", "AB matches DE, so going from the big triangle to the small one, multiply by {{9/12}}."],
        strategy: "Write the correspondence",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "similarity-congruence-p3-q07",
        question:
          "A rainwater tank is a cuboid measuring 1.5 m by 90 cm by 60 cm.\n\n1 litre = 1000 cm³. Work out the capacity of the tank in litres.",
        answer: { type: "number", value: 810, display: "810 litres" },
        traps: [
          { spec: { type: "number", value: 0.81 }, feedback: "0.81 is the volume in **m³**. Convert to cm³ (× 1 000 000) and then to litres (÷ 1000)." },
          { spec: { type: "number", value: 810000 }, feedback: "810 000 is the volume in cm³. Divide by 1000 for litres." },
        ],
        solution: [
          "Put every length in cm: 1.5 m = 150 cm.",
          "Volume = 150 × 90 × 60 = 810 000 cm³.",
          "Capacity = 810 000 ÷ 1000 = 810 litres.",
        ],
        solutions: [
          { label: "Work in metres", steps: ["1.5 m × 0.9 m × 0.6 m = 0.81 m³.", "1 m³ = 1000 litres (a 10 cm cube is 1 litre, and 1 m³ holds 10 × 10 × 10 of them).", "0.81 × 1000 = 810 litres."] },
        ],
        commonError: "Multiplying lengths in different units (metres with centimetres).",
        difficulty: "core",
        guideRef: "area-volume-units",
        hints: ["Get all three lengths into the same unit first.", "Work out the volume in cm³.", "1 litre = 1000 cm³."],
        strategy: "Convert first",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "similarity-congruence-p3-q08",
        question:
          "Two bottles of sugarcane juice are mathematically similar. The small bottle holds 400 ml and the large bottle holds 1.35 litres.\n\nThe surface area of the small bottle is 160 cm². Work out the surface area of the large bottle. Give your answer in cm².",
        answer: { type: "number", value: 360, display: "360 cm²" },
        traps: [
          { spec: { type: "number", value: 540 }, feedback: "You multiplied by the volume scale factor {{27/8}}. Surface area is an area: first get the length scale factor ({{cbrt(27/8) = 3/2}}), then square it." },
          { spec: { type: "number", value: 240 }, feedback: "{{3/2}} is the *length* scale factor. Surface area scales by {{(3/2)^2 = 9/4}}." },
        ],
        solution: [
          "Same units: 1.35 litres = 1350 ml. Volume scale factor = {{1350/400 = 27/8}}.",
          "Length scale factor {{k = cbrt(27/8) = 3/2}}.",
          "Area scale factor {{k^2 = 9/4}}.",
          "Large surface area = {{160 * 9/4 = 360}} cm².",
        ],
        commonError: "Applying the volume scale factor directly to an area.",
        difficulty: "core",
        guideRef: "area-volume-scale",
        hints: ["Find the volume scale factor — watch the units.", "Go back to the length scale factor with a cube root.", "Then square it for areas."],
        strategy: "Go back to lengths",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "written",
        id: "similarity-congruence-p3-q09",
        question:
          "ABC is an isosceles triangle with AB = AC. D and E are points on BC such that BD = CE.\n\nProve that triangle ABD is congruent to triangle ACE.",
        diagram: `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Isosceles triangle ABC with AB equal to AC, marked with single ticks. D and E lie on BC with BD equal to CE, marked with double ticks. Lines AD and AE are drawn."><rect x="0" y="0" width="400" height="280" fill="#ffffff"/><polygon points="200,40 60,250 340,250" fill="#ffffff" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="200,40 60,250 140,250" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5" stroke-linejoin="round"/><polygon points="200,40 340,250 260,250" fill="#fde68a" stroke="#1f2937" stroke-width="1.5" stroke-linejoin="round"/><line x1="125" y1="141.7" x2="135" y2="148.3" stroke="#1f2937" stroke-width="1.6"/><line x1="265" y1="148.3" x2="275" y2="141.7" stroke="#1f2937" stroke-width="1.6"/><line x1="97.5" y1="256" x2="97.5" y2="244" stroke="#1f2937" stroke-width="1.6"/><line x1="102.5" y1="256" x2="102.5" y2="244" stroke="#1f2937" stroke-width="1.6"/><line x1="297.5" y1="256" x2="297.5" y2="244" stroke="#1f2937" stroke-width="1.6"/><line x1="302.5" y1="256" x2="302.5" y2="244" stroke="#1f2937" stroke-width="1.6"/><text x="200" y="30" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="48" y="262" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="352" y="262" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="140" y="270" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="260" y="270" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">E</text></svg>`,
        marks: 3,
        modelAnswer:
          "AB = AC (given).\n\nAngle ABD = angle ACE (base angles of an isosceles triangle are equal).\n\nBD = CE (given).\n\nThe angle at B is between AB and BD, and the angle at C is between AC and CE, so triangle ABD is congruent to triangle ACE (SAS).",
        markScheme: [
          { point: "AB = AC and BD = CE (given)", keywords: ["ab = ac", "ab=ac", "bd = ce", "bd=ce", "given"] },
          { point: "Angle ABD = angle ACE with reason (base angles of an isosceles triangle)", keywords: ["base angles", "isosceles", "abd", "ace", "abc = acb"] },
          { point: "Conclusion: congruent by SAS", keywords: ["sas", "congruent", "side angle side"] },
        ],
        commonError: "Claiming AD = AE as a fact — that follows from the congruence; it isn't known at the start.",
        difficulty: "core",
        guideRef: "congruence",
        hints: ["Mark everything you are told on the diagram.", "What do you know about the angles at B and C in an isosceles triangle?", "Is the angle at B between AB and BD? Each statement needs a reason; finish with the condition."],
        strategy: "State reasons for every fact",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "similarity-congruence-p3-q10",
        question:
          "Marcus paints a small model of a statue for the school art show. The model needs 15 ml of paint to cover it.\n\nThe real statue is mathematically similar to the model and is 8 times as tall. How many **litres** of paint are needed to cover the real statue with the same thickness of paint?",
        answer: { type: "number", value: 0.96, display: "0.96 litres" },
        traps: [
          { spec: { type: "number", value: 0.12 }, feedback: "You multiplied by 8, the length scale factor. Paint covers a *surface*, so use {{8^2 = 64}}." },
          { spec: { type: "number", value: 7.68 }, feedback: "You multiplied by {{8^3 = 512}}. Paint covers the surface area, not the volume, so use {{8^2}}." },
          { spec: { type: "number", value: 960 }, feedback: "960 is in millilitres. The question asks for litres: ÷ 1000." },
        ],
        solution: [
          "Paint depends on surface **area**, so use the area scale factor {{8^2 = 64}}.",
          "Paint = 15 × 64 = 960 ml.",
          "960 ml = 0.96 litres.",
        ],
        commonError: "Treating paint like volume (× 512) because paint is measured in litres.",
        difficulty: "core",
        guideRef: "area-volume-scale",
        hints: ["Does the amount of paint depend on length, area or volume of the statue?", "Area scale factor = {{k^2}}.", "Remember to change ml to litres."],
        strategy: "Ask: length, area or volume?",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "written",
        id: "similarity-congruence-p3-q11",
        question:
          "Triangle P has sides 4 cm, 6 cm and 8 cm. Triangle Q has sides 10 cm, 12 cm and 14 cm.\n\nRavi says, \"Q is an enlargement of P, because every side is 6 cm longer. So the triangles are similar.\"\n\nIs Ravi correct? Explain your answer.",
        marks: 2,
        modelAnswer:
          "Ravi is not correct. In an enlargement every length is *multiplied* by the same scale factor. Matching the sides in order of size: {{10/4 = 2.5}}, {{12/6 = 2}} and {{14/8 = 1.75}}. These ratios are not equal, so Q is not an enlargement of P and the triangles are **not** similar.",
        markScheme: [
          { point: "Works out the ratios of matching sides (2.5, 2 and 1.75), or otherwise shows they are not all equal", keywords: ["2.5", "1.75", "10/4", "14/8", "ratio", "scale factor"] },
          { point: "Concludes Ravi is wrong: enlargement multiplies (it doesn't add), the ratios differ, so not similar", keywords: ["not correct", "wrong", "not similar", "multiply", "not the same", "different"] },
        ],
        commonError: "Thinking that adding the same amount to every side keeps the shape — only multiplying does.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["In an enlargement, are lengths added to or multiplied?", "Divide each side of Q by the matching side of P. Are the answers equal?"],
        strategy: "Test the claim",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "similarity-congruence-p3-q12",
        question:
          "A rectangular nature reserve measures 1.2 km by 800 m.\n\n1 hectare = 10 000 m². Work out the area of the reserve in hectares.",
        answer: { type: "number", value: 96, display: "96 hectares" },
        traps: [
          { spec: { type: "number", value: 0.96 }, feedback: "0.96 is the area in **km²** (1.2 × 0.8). Convert to m² first: 1 km² = 1 000 000 m²." },
          { spec: { type: "number", value: 9600 }, feedback: "1.2 km = 1200 m, and 1200 × 800 = 960 000 m². Divide by 10 000 (not 100) to get hectares." },
        ],
        solution: [
          "Put both lengths in metres: 1.2 km = 1200 m.",
          "Area = 1200 × 800 = 960 000 m².",
          "960 000 ÷ 10 000 = 96 hectares.",
        ],
        solutions: [
          { label: "Work in km²", steps: ["1.2 km × 0.8 km = 0.96 km².", "1 km² = 1 000 000 m² = 100 hectares.", "0.96 × 100 = 96 hectares."] },
        ],
        commonError: "Multiplying 1.2 by 800 with mixed units, or converting km² to m² with × 1000.",
        difficulty: "core",
        guideRef: "area-volume-units",
        hints: ["Get both lengths into the same unit.", "1 km = 1000 m.", "Then divide the area in m² by 10 000."],
        strategy: "Convert first",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "similarity-congruence-p3-q13",
        question:
          "A solid cone is cut by a plane parallel to its base. This splits it into a small cone, of height 9 cm, and a frustum.\n\nThe volume of the frustum is 26 times the volume of the small cone.\n\nWork out the height of the frustum. Give your answer in cm.",
        answer: { type: "number", value: 18, display: "18 cm" },
        traps: [
          { spec: { type: "number", value: 27 }, feedback: "27 cm is the height of the whole original cone. The frustum is the original minus the small cone: 27 − 9." },
          { spec: { type: "number", value: 234 }, feedback: "You multiplied the height by 26 — but 26 is a *volume* ratio, and the frustum is not similar to the small cone. Compare the whole cone with the small cone." },
        ],
        solution: [
          "The small cone and the original cone are similar (the cut is parallel to the base).",
          "Original volume = small + frustum = 1 + 26 = 27 times the small cone.",
          "Volume scale factor 27, so length scale factor {{k = cbrt(27) = 3}}.",
          "Original height = 9 × 3 = 27 cm, so the frustum height = 27 − 9 = 18 cm.",
        ],
        commonError: "Using the frustum in a scale-factor calculation — a frustum is not similar to a cone.",
        difficulty: "challenge",
        guideRef: "area-volume-scale",
        hints: ["Which two solids here are actually similar?", "How many times the small cone's volume is the whole cone?", "Volume ratio 27 → length ratio?", "Subtract the small cone's height at the end."],
        strategy: "Find the similar pair",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "similarity-congruence-p3-q14",
        question:
          "Triangle ABC has a right angle at C. D is the point on AB such that CD is perpendicular to AB.\n\nAC = 4 cm and AD = 3.2 cm.\n\nWork out the length of DB. Give your answer in cm.",
        diagram: `<svg viewBox="0 0 370 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at C at the top. CD is perpendicular to AB, meeting AB at D. AC is 4 cm and AD is 3.2 cm."><rect x="0" y="0" width="370" height="250" fill="#ffffff"/><polygon points="35,222 335,222 227,78" fill="#bae6fd" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="227" y1="78" x2="227" y2="222" stroke="#1f2937" stroke-width="2" stroke-dasharray="5 3"/><polyline points="237,222 237,212 227,212" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="218.2,84.6 224.8,93.4 233.6,86.8" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="27" y="236" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="343" y="236" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="227" y="68" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="227" y="240" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="122.6" y="143.3" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">4 cm</text><text x="131" y="240" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">3.2 cm</text></svg>`,
        answer: { type: "number", value: 1.8, display: "1.8 cm" },
        traps: [
          { spec: { type: "number", value: 5 }, feedback: "5 cm is the whole of AB. DB = AB − AD = 5 − 3.2." },
          { spec: { type: "number", value: 2.4 }, feedback: "2.4 cm is CD (Pythagoras in triangle ADC). The question asks for DB." },
        ],
        solution: [
          "Triangles ADC and ACB share angle A, and each has a right angle (at D and at C). So they are similar.",
          "Match the sides: AD ↔ AC (the sides next to angle A that are not hypotenuses) and AC ↔ AB (the hypotenuses).",
          "{{(AD)/(AC) = (AC)/(AB)}}, so {{AB = (AC^2)/(AD) = 16/3.2 = 5}} cm.",
          "DB = 5 − 3.2 = 1.8 cm.",
        ],
        solutions: [
          { label: "Trigonometry", steps: ["In triangle ADC: {{cos A = (AD)/(AC) = 3.2/4 = 0.8}}.", "In triangle ACB: {{cos A = (AC)/(AB)}}, so {{AB = 4/0.8 = 5}} cm.", "DB = 5 − 3.2 = 1.8 cm. The similar-triangle ratio is the same equation in disguise."] },
        ],
        commonError: "Pairing AD with AB because they lie along the same line, instead of matching sides by the equal angles.",
        difficulty: "challenge",
        guideRef: "similar-lengths",
        hints: ["Find two right-angled triangles that share angle A.", "In triangle ADC the hypotenuse is AC; in triangle ACB it is AB.", "Write {{(AD)/(AC) = (AC)/(AB)}}, find AB, then subtract AD."],
        strategy: "Angle chase",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "similarity-congruence-p3-q15",
        question:
          "ABCD is a rectangle with diagonals AC and BD.\n\nUse congruent triangles to prove that the diagonals are equal in length (AC = BD).",
        diagram: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rectangle ABCD with A bottom-left, B bottom-right, C top-right and D top-left. The diagonals AC and BD are drawn."><rect x="0" y="0" width="400" height="260" fill="#ffffff"/><polygon points="60,220 340,220 340,60 60,60" fill="#f8fafc" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="60" y1="220" x2="340" y2="60" stroke="#1f2937" stroke-width="1.8"/><line x1="340" y1="220" x2="60" y2="60" stroke="#1f2937" stroke-width="1.8"/><polyline points="71,220 71,209 60,209" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="329,220 329,209 340,209" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="340,71 329,71 329,60" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="60,71 71,71 71,60" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="48" y="236" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="352" y="236" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="352" y="56" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="48" y="56" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text></svg>`,
        marks: 4,
        modelAnswer:
          "Consider triangles DAB and CBA.\n\nAD = BC (opposite sides of a rectangle are equal).\n\nAngle DAB = angle CBA = 90° (angles of a rectangle).\n\nAB is common to both triangles.\n\nSo triangles DAB and CBA are congruent (**SAS**).\n\nTherefore the corresponding sides DB and CA are equal: AC = BD.",
        markScheme: [
          { point: "Chooses triangles DAB and CBA (or ABD and BAC); AD = BC (opposite sides of a rectangle)", keywords: ["dab", "cba", "abd", "bac", "ad = bc", "ad=bc", "opposite sides"] },
          { point: "Angle DAB = angle CBA = 90° (angles of a rectangle)", keywords: ["90", "right angle", "rectangle"] },
          { point: "AB is common; congruent by SAS (or RHS)", keywords: ["common", "sas", "rhs", "congruent"] },
          { point: "Concludes AC = BD as corresponding sides", keywords: ["ac = bd", "bd = ac", "corresponding", "diagonals are equal"] },
        ],
        commonError: "Picking triangles that don't have AC and BD as matching sides — or using AC = BD as one of the facts.",
        difficulty: "challenge",
        guideRef: "congruence",
        hints: ["Which two triangles have AC and BD as matching sides? Try the two triangles that share the side AB.", "What do you know about AD and BC, and about the angles at A and B?", "Two sides and the included angle — then read off the third sides."],
        strategy: "Work backwards",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "similarity-congruence-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "similarity-congruence-p4-q01",
        question:
          "Quadrilateral ABCD is mathematically similar to quadrilateral PQRS. Angle ABC = angle PQR = 90°.\n\nAB = 6 cm, BC = 8 cm, PQ = 9 cm, QR = x cm, SR = 13.5 cm and DC = y cm.\n\nWork out the value of x and the value of y. Give x first, then y.",
        diagram: `<svg viewBox="0 0 380 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two similar quadrilaterals. ABCD: right angle at B, AB 6 cm, BC 8 cm, DC y cm. PQRS: right angle at Q, PQ 9 cm, QR x cm, SR 13.5 cm."><rect width="380" height="280" fill="#ffffff"/><polygon points="60,250 144,250 144,138 32,195.7" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><polyline points="132,250 132,238 144,238" fill="none" stroke="#1f2937" stroke-width="1.5"/><polygon points="210,250 336,250 336,82 168,168.6" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><polyline points="324,250 324,238 336,238" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="268" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="144" y="268" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="150" y="134" font-size="13" font-family="sans-serif" fill="#1f2937">C</text><text x="28" y="190" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">D</text><text x="102" y="266" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6 cm</text><text x="150" y="198" font-size="12" font-family="sans-serif" fill="#1f2937">8 cm</text><text x="80" y="158" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">y cm</text><text x="210" y="268" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">P</text><text x="336" y="268" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Q</text><text x="342" y="80" font-size="13" font-family="sans-serif" fill="#1f2937">R</text><text x="162" y="166" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">S</text><text x="273" y="266" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">9 cm</text><text x="342" y="170" font-size="12" font-family="sans-serif" fill="#1f2937">x cm</text><text x="236" y="114" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">13.5 cm</text></svg>`,
        answer: { type: "list", values: [12, 9], ordered: true, display: "x = 12, y = 9" },
        traps: [
          { spec: { type: "list", values: [9, 12], ordered: true }, feedback: "Right values, wrong order — give x first, then y." },
          { spec: { type: "list", values: [11, 10.5], ordered: true }, feedback: "You added/subtracted 3 cm. Similar shapes use a multiplier: {{9/6 = 1.5}}." },
        ],
        solution: [
          "AB ↔ PQ, so the scale factor from ABCD to PQRS is {{9/6 = 1.5}}.",
          "x = QR = BC × 1.5 = 8 × 1.5 = 12.",
          "y = DC = SR ÷ 1.5 = 13.5 ÷ 1.5 = 9.",
        ],
        commonError: "Multiplying by 1.5 when going from the large shape back to the small one (y = 20.25).",
        difficulty: "warmup",
        guideRef: "similar-lengths",
        hints: ["Find a pair of matching sides where you know both lengths.", "Large → small: divide by the scale factor."],
        strategy: "Find the scale factor",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "similarity-congruence-p4-q02",
        question: "Change 0.38 m³ into cm³.",
        answer: { type: "number", value: 380000, display: "380 000 cm³" },
        traps: [
          { spec: { type: "number", value: 38 }, feedback: "You multiplied by 100. A cubic metre is 100 cm × 100 cm × 100 cm = 1 000 000 cm³." },
          { spec: { type: "number", value: 3800 }, feedback: "You multiplied by 100² = 10 000, the conversion for area. Volume needs 100³ = 1 000 000." },
        ],
        solution: [
          "1 m³ = 100 × 100 × 100 = 1 000 000 cm³.",
          "0.38 × 1 000 000 = 380 000 cm³.",
        ],
        commonError: "Multiplying by 100 or 10 000 instead of 1 000 000.",
        difficulty: "warmup",
        guideRef: "area-volume-units",
        hints: ["A cubic metre is a cube with edges of 100 cm."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "mcq",
        id: "similarity-congruence-p4-q03",
        question: "Triangle T has sides 6 cm, 8 cm and 9 cm.\n\nWhich of these triangles **must** be congruent to triangle T?",
        options: [
          "A triangle with sides 12 cm, 16 cm and 18 cm",
          "A triangle with sides 9 cm, 6 cm and 8 cm",
          "A triangle with sides 6 cm, 8 cm and 10 cm",
          "A triangle with sides 7 cm, 8 cm and 8 cm",
        ],
        answerIndex: 1,
        explanation:
          "Three pairs of equal sides is SSS — the order the sides are listed in doesn't matter, so 9, 6, 8 is the same triangle as T. 12, 16, 18 is an enlargement with scale factor 2: similar, not congruent. 6, 8, 10 shares only two of the sides. 7, 8, 8 has the same perimeter (23 cm), but equal perimeters don't make triangles congruent.",
        difficulty: "warmup",
        guideRef: "congruence",
        hints: ["Compare the three sides of each triangle with 6, 8 and 9 — in any order.", "Which condition uses three sides?"],
        strategy: "Eliminate options",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "similarity-congruence-p4-q04",
        question:
          "Cylinder A and cylinder B are mathematically similar. Cylinder B is an enlargement of cylinder A with scale factor 3.\n\nThe volume of cylinder A is 40 cm³. Work out the volume of cylinder B. Give your answer in cm³.",
        answer: { type: "number", value: 1080, display: "1080 cm³" },
        traps: [
          { spec: { type: "number", value: 120 }, feedback: "You multiplied by the length scale factor 3. Volume scales by {{3^3 = 27}}." },
          { spec: { type: "number", value: 360 }, feedback: "You multiplied by {{3^2 = 9}}, the area scale factor. Volumes need {{3^3 = 27}}." },
        ],
        solution: ["Volume scale factor = {{3^3 = 27}}.", "Volume of B = 40 × 27 = 1080 cm³."],
        commonError: "Multiplying a volume by k instead of {{k^3}}.",
        difficulty: "warmup",
        guideRef: "area-volume-scale",
        hints: ["Volume has three dimensions — each one is multiplied by 3."],
        strategy: "Ask: length, area or volume?",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "similarity-congruence-p4-q05",
        question:
          "In the diagram, ADB and AEC are straight lines. DE is parallel to BC.\n\nAD = 6 cm, AE = 4.8 cm, EC = 3.2 cm and BC = 10 cm.\n\n(a) Work out the length of DE.\n(b) Work out the length of DB.\n\nGive DE first, then DB, in cm.",
        diagram: `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the top. D on AB, E on AC, DE parallel to BC. AD 6 cm, AE 4.8 cm, EC 3.2 cm, BC 10 cm."><rect x="0" y="0" width="400" height="290" fill="#ffffff"/><polygon points="254,42 50,262 350,262" fill="#fde68a" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="131.6" y1="174" x2="311.6" y2="174" stroke="#1f2937" stroke-width="2"/><polyline points="218.6,178.8 224.6,174 218.6,169.2" fill="none" stroke="#1f2937" stroke-width="1.6"/><polyline points="197,266.8 203,262 197,257.2" fill="none" stroke="#1f2937" stroke-width="1.6"/><text x="257.3" y="32.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="39" y="274" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="361" y="274" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="119.6" y="178" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">D</text><text x="323.6" y="178" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1f2937" font-weight="bold">E</text><text x="176.7" y="97.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">6 cm</text><text x="306.6" y="102.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">4.8 cm</text><text x="354.6" y="212.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">3.2 cm</text><text x="200" y="282" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">10 cm</text></svg>`,
        answer: { type: "list", values: [6, 4], ordered: true, display: "DE = 6 cm, DB = 4 cm" },
        traps: [
          { spec: { type: "list", values: [4, 6], ordered: true }, feedback: "Right values, wrong order — give DE first, then DB." },
          { spec: { type: "list", values: [15, 4], ordered: true }, feedback: "For DE you compared AE with EC. EC isn't a side of either triangle: compare AE with the whole of AC = 8 cm." },
        ],
        solution: [
          "Triangles ADE and ABC are similar (DE ∥ BC gives equal corresponding angles, and angle A is shared).",
          "AC = 4.8 + 3.2 = 8 cm, so the scale factor from ADE to ABC is {{8/4.8 = 5/3}}.",
          "(a) DE = BC ÷ {{5/3}} = {{10 * 3/5 = 6}} cm.",
          "(b) AB = {{6 * 5/3 = 10}} cm, so DB = 10 − 6 = 4 cm.",
        ],
        solutions: [
          { label: "Intercept theorem for (b)", steps: ["A line parallel to one side of a triangle cuts the other two sides in the same ratio: {{(AD)/(DB) = (AE)/(EC)}}.", "{{6/(DB) = 4.8/3.2 = 1.5}}, so DB = 6 ÷ 1.5 = 4 cm."] },
        ],
        commonError: "Using EC instead of the whole side AC = 8 cm in the scale factor.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["Write down the length of AC.", "Scale factor from the small triangle to the big one = {{(AC)/(AE)}}.", "DE is in the small triangle, so divide BC by the scale factor. For DB, find AB first."],
        strategy: "Separate the triangles",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "similarity-congruence-p4-q06",
        question:
          "Two containers are mathematically similar. The smaller container has a surface area of 150 cm². The larger container has a surface area of 216 cm².\n\nThe volume of the larger container is 432 cm³. Work out the volume of the smaller container. Give your answer in cm³.",
        answer: { type: "number", value: 250, display: "250 cm³" },
        traps: [
          { spec: { type: "number", value: 300 }, feedback: "You divided by the *area* scale factor 1.44. Volume needs the cube of the length scale factor: {{1.2^3 = 1.728}}." },
          { spec: { type: "number", value: 360 }, feedback: "You divided by the length scale factor 1.2. Volume needs {{1.2^3 = 1.728}}." },
        ],
        solution: [
          "Area scale factor (small → large) = {{216/150 = 1.44}}.",
          "Length scale factor {{k = sqrt(1.44) = 1.2}}.",
          "Volume scale factor {{k^3 = 1.728}}.",
          "Smaller volume = 432 ÷ 1.728 = 250 cm³.",
        ],
        solutions: [
          { label: "Ratios of whole numbers", steps: ["Areas 150 : 216 = 25 : 36.", "Lengths 5 : 6 (square roots).", "Volumes 125 : 216, so small = {{432 * 125/216 = 250}} cm³."] },
        ],
        commonError: "Going straight from the area ratio to the volume ratio without returning to lengths.",
        difficulty: "core",
        guideRef: "area-volume-scale",
        hints: ["Areas give you {{k^2}}. How do you get back to k?", "Once you have k, cube it.", "Large → small: divide."],
        strategy: "Go back to lengths",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "similarity-congruence-p4-q07",
        question:
          "A garden pond is a cuboid 3.5 m long, 2.4 m wide and 60 cm deep. It is empty.\n\nAisha fills it with water at a rate of 40 litres per minute. 1 m³ = 1000 litres.\n\nHow many minutes does it take to fill the pond completely?",
        answer: { type: "number", value: 126, display: "126 minutes" },
        traps: [
          { spec: { type: "number", value: 2.1 }, feedback: "2.1 is the time in **hours**. The question asks for minutes." },
          { spec: { type: "number", value: 12600 }, feedback: "You used 60 as the depth in metres. 60 cm = 0.6 m — convert before multiplying." },
        ],
        solution: [
          "Depth: 60 cm = 0.6 m.",
          "Volume = 3.5 × 2.4 × 0.6 = 5.04 m³.",
          "In litres: 5.04 × 1000 = 5040 litres.",
          "Time = 5040 ÷ 40 = 126 minutes.",
        ],
        commonError: "Mixing metres and centimetres in the volume calculation.",
        difficulty: "core",
        guideRef: "area-volume-units",
        hints: ["Put all three lengths in metres.", "Volume in m³, then convert to litres.", "Time = volume ÷ rate."],
        strategy: "Convert first",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "similarity-congruence-p4-q08",
        question:
          "PQRS is a parallelogram. X is a point on PQ and Y is a point on RS such that PX = RY.\n\n(a) Prove that triangle PXS is congruent to triangle RYQ.\n\n(b) Hence explain why SX = QY.",
        diagram: `<svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallelogram PQRS with P bottom-left, Q bottom-right, R top-right and S top-left. X is on PQ and Y is on RS with PX equal to RY, marked with ticks. Lines SX and QY are drawn."><rect x="0" y="0" width="420" height="270" fill="#ffffff"/><polygon points="50,232 290,232 370,72 130,72" fill="#ffffff" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="50,232 140,232 130,72" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><polygon points="370,72 280,72 290,232" fill="#fde68a" stroke="#1f2937" stroke-width="1.6" stroke-linejoin="round"/><line x1="95" y1="238" x2="95" y2="226" stroke="#1f2937" stroke-width="1.6"/><line x1="325" y1="66" x2="325" y2="78" stroke="#1f2937" stroke-width="1.6"/><text x="40" y="246" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">P</text><text x="300" y="246" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Q</text><text x="380" y="66" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">R</text><text x="120" y="66" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">S</text><text x="140" y="250" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">X</text><text x="280" y="64" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Y</text></svg>`,
        marks: 4,
        modelAnswer:
          "(a) PX = RY (given).\n\nPS = RQ (opposite sides of a parallelogram are equal).\n\nAngle SPX = angle QRY (opposite angles of a parallelogram are equal).\n\nThe angle at P is between PX and PS, and the angle at R is between RY and RQ, so triangle PXS is congruent to triangle RYQ (SAS).\n\n(b) SX and QY are corresponding sides of the congruent triangles (each is opposite the equal angle at P or R), so SX = QY.",
        markScheme: [
          { point: "PX = RY (given) and PS = RQ (opposite sides of a parallelogram)", keywords: ["px = ry", "ps = rq", "ps = qr", "opposite sides", "given"] },
          { point: "Angle SPX = angle QRY (opposite angles of a parallelogram)", keywords: ["opposite angles", "spx", "qry", "angle p", "angle r"] },
          { point: "Concludes congruent by SAS (the angle is between the two sides)", keywords: ["sas", "included", "congruent"] },
          { point: "SX = QY because they are corresponding sides of congruent triangles", keywords: ["corresponding", "sx = qy", "congruent triangles"] },
        ],
        commonError: "Calling the angles at P and R 'alternate angles' — they are opposite angles of the parallelogram.",
        difficulty: "core",
        guideRef: "congruence",
        hints: ["Mark PX = RY on the diagram. Which other sides of the two triangles are equal?", "What do you know about opposite angles of a parallelogram?", "Once the triangles are congruent, which side of triangle RYQ matches SX?"],
        strategy: "State reasons for every fact",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "similarity-congruence-p4-q09",
        question:
          "In triangle ABC, D is the point on AC such that angle ABD = angle ACB.\n\nAB = 8 cm and AC = 10 cm.\n\nWork out the length of DC. Give your answer in cm.",
        diagram: `<svg viewBox="0 0 340 235" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A bottom-left and C bottom-right on a horizontal line, B above. D on AC. Segment BD drawn. Angle ABD equals angle ACB. AB 8 cm, AC 10 cm."><rect x="0" y="0" width="340" height="235" fill="#ffffff"/><polygon points="35,205 305,205 168,34.8" fill="#bbf7d0" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="168" y1="34.8" x2="207.8" y2="205" stroke="#1f2937" stroke-width="2"/><path d="M 153.2 53.7 A 24 24 0 0 0 173.4 58.2" fill="none" stroke="#dc2626" stroke-width="1.8"/><path d="M 281 205 A 24 24 0 0 1 290 186.3" fill="none" stroke="#dc2626" stroke-width="1.8"/><text x="27" y="219" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="313" y="219" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="168" y="25.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="207.8" y="221" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="88.9" y="114.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">8 cm</text><text x="140" y="233" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">AC = 10 cm</text></svg>`,
        answer: { type: "number", value: 3.6, display: "3.6 cm" },
        traps: [
          { spec: { type: "number", value: 6.4 }, feedback: "6.4 cm is AD. The question asks for DC = AC − AD = 10 − 6.4." },
          { spec: { type: "number", value: 2 }, feedback: "10 − 8 = 2 assumes AD = AB. Use the similar triangles ABD and ACB to find AD first." },
        ],
        solution: [
          "Triangles ABD and ACB share angle A, and angle ABD = angle ACB. So they are similar.",
          "Correspondence: A ↔ A, B ↔ C, D ↔ B.",
          "{{(AD)/(AB) = (AB)/(AC)}}, so {{AD = 8^2/10 = 64/10 = 6.4}} cm.",
          "DC = 10 − 6.4 = 3.6 cm.",
        ],
        commonError: "Matching AD with AC (because they lie on the same line) instead of following the equal angles.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["Which two triangles contain the two marked angles? What else do they share?", "Write the correspondence carefully: B in the small triangle matches C in the large one.", "Find AD, then subtract from AC."],
        strategy: "Write the correspondence",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "written",
        id: "similarity-congruence-p4-q10",
        question:
          "Cylinder A has radius 3 cm and height 8 cm.\n\nCylinder B has radius 4.5 cm and volume 243π cm³.\n\nShow that cylinder A and cylinder B are mathematically similar.",
        marks: 3,
        modelAnswer:
          "Height of B: {{pi * 4.5^2 * h = 243 pi}}, so {{20.25h = 243}} and h = 12 cm.\n\nRadius scale factor = {{4.5/3 = 1.5}}. Height scale factor = {{12/8 = 1.5}}.\n\nBoth dimensions are multiplied by the same scale factor 1.5, so the cylinders are mathematically similar.",
        markScheme: [
          { point: "Uses V = πr²h to find the height of B as 12 cm", keywords: ["12", "20.25", "243"] },
          { point: "Finds both scale factors: 4.5 ÷ 3 = 1.5 and 12 ÷ 8 = 1.5", keywords: ["1.5", "4.5/3", "12/8", "3/2"] },
          { point: "Concludes similar because both scale factors are equal", keywords: ["same", "equal", "similar"] },
        ],
        commonError: "Comparing only the radii — similarity needs every length to scale by the same factor.",
        difficulty: "core",
        guideRef: "area-volume-scale",
        hints: ["What do you need to know about cylinder B to compare it with A?", "Use {{V = pi r^2 h}} to find B's height.", "Compare the two scale factors."],
        solutions: [
          { label: "Compare volumes", steps: ["Volume of A = {{pi * 3^2 * 8 = 72 pi}}.", "If similar with k = 1.5, volume of B would be {{72 pi * 1.5^3 = 72 pi * 3.375 = 243 pi}}. ✓", "Since the radius ratio cubed matches the volume ratio, and both are cylinders, the heights also scale by 1.5 — similar."] },
        ],
        strategy: "Check every dimension",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "similarity-congruence-p4-q11",
        question:
          "Two solid statues of a lion are mathematically similar and made of the same material. The small statue is 15 cm tall and the large statue is 40 cm tall.\n\nThe mass of the small statue is 270 g. Work out the mass of the large statue. Give your answer in kg.",
        answer: { type: "number", value: 5.12, display: "5.12 kg" },
        traps: [
          { spec: { type: "number", value: 0.72 }, feedback: "You multiplied by the length scale factor {{8/3}}. Mass depends on volume, so use {{(8/3)^3 = 512/27}}." },
          { spec: { type: "number", value: 1.92 }, feedback: "You used the area scale factor {{(8/3)^2}}. Mass depends on volume: cube the length scale factor." },
          { spec: { type: "number", value: 5120 }, feedback: "5120 is in grams. The question asks for kg." },
        ],
        solution: [
          "Length scale factor {{k = 40/15 = 8/3}}.",
          "Same material, so mass scales like volume: {{k^3 = 512/27}}.",
          "Mass = {{270 * 512/27 = 10 * 512 = 5120}} g.",
          "5120 g = 5.12 kg.",
        ],
        commonError: "Rounding k = 2.67 early and cubing it, which gives an inaccurate answer.",
        difficulty: "core",
        guideRef: "area-volume-scale",
        hints: ["Mass of the same material is proportional to what — length, area or volume?", "Keep k as the exact fraction {{8/3}}.", "Cube it, multiply, then convert g to kg."],
        strategy: "Keep it exact",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "similarity-congruence-p4-q12",
        question:
          "On a sunny afternoon at East Coast Park, a vertical 1.8 m pole casts a shadow 2.3 m long on level ground. At the same time, a vertical lamp post nearby casts a shadow 7.4 m long.\n\nWork out the height of the lamp post. Give your answer in metres correct to 3 significant figures.",
        answer: { type: "number", value: 5.79, tolerance: 0.005, display: "5.79 m" },
        traps: [
          { spec: { type: "number", value: 0.559, tolerance: 0.001 }, feedback: "You've inverted the scale factor. The lamp post's shadow is longer, so the lamp post is taller than 1.8 m: multiply by {{7.4/2.3}}." },
          { spec: { type: "number", value: 6.9, tolerance: 0.001 }, feedback: "You added 5.1 m (the difference in shadows). Similar triangles need a multiplier." },
        ],
        solution: [
          "The sun's rays are parallel, so the pole and its shadow form a triangle similar to the lamp post and its shadow.",
          "Scale factor = {{7.4/2.3 = 3.217...}}.",
          "Height = 1.8 × {{7.4/2.3}} = {{13.32/2.3 = 5.791...}} m.",
          "5.79 m (3 s.f.).",
        ],
        commonError: "Rounding the scale factor to 3.2 too early (giving 5.76 m).",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["Sketch two right-angled triangles: height and shadow.", "Why are they similar? Think about the sun's rays.", "Height ÷ shadow is the same for both."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "similarity-congruence-p4-q13",
        question:
          "Solids A and B are mathematically similar. The ratio of the surface area of A to the surface area of B is 9 : 25.\n\nThe total volume of A and B together is 1520 cm³. Work out the volume of B. Give your answer in cm³.",
        answer: { type: "number", value: 1250, display: "1250 cm³" },
        traps: [
          { spec: { type: "number", value: 1117.6, tolerance: 0.1 }, feedback: "You shared 1520 in the area ratio 9 : 25. Volumes are in the ratio of the *cubes* of the lengths: 27 : 125." },
          { spec: { type: "number", value: 270 }, feedback: "270 cm³ is the volume of A. The question asks for B." },
        ],
        solution: [
          "Area ratio 9 : 25, so length ratio = 3 : 5 (square roots).",
          "Volume ratio = {{3^3 : 5^3}} = 27 : 125.",
          "Total parts = 152, so one part = 1520 ÷ 152 = 10 cm³.",
          "Volume of B = 125 × 10 = 1250 cm³.",
        ],
        commonError: "Sharing the total in the area ratio instead of the volume ratio.",
        difficulty: "challenge",
        guideRef: "area-volume-scale",
        hints: ["Get from the area ratio to the length ratio.", "Now get the volume ratio.", "Share 1520 in that ratio."],
        strategy: "Go back to lengths",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "similarity-congruence-p4-q14",
        question:
          "In the diagram, ADB and AEC are straight lines and DE is parallel to BC.\n\nThe area of triangle ADE is 18 cm². The area of the trapezium DBCE is 18 cm². AD = 5 cm.\n\nWork out the exact length of DB. Give your answer in the form {{a sqrt(2) + b}}, where a and b are integers.",
        diagram: `<svg viewBox="0 0 420 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the top. D on AB and E on AC with DE parallel to BC. Triangle ADE shaded, trapezium DBCE below it. AD 5 cm."><rect width="420" height="285" fill="#ffffff"/><polygon points="200,30 50,260 370,260" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="200,30 93.9,192.6 320.2,192.6" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><polyline points="204,187.6 210,192.6 204,197.6" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="204,255 210,260 204,265" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="200" y="22" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="40" y="276" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="380" y="276" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="84" y="196" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">D</text><text x="330" y="196" font-size="14" font-family="sans-serif" fill="#1f2937">E</text><text x="138" y="110" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">5 cm</text><text x="205" y="140" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">18 cm²</text><text x="210" y="232" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">18 cm²</text></svg>`,
        answer: { type: "expression", expr: "5sqrt(2)-5", form: "surd", display: "{{5 sqrt(2) - 5}} cm" },
        traps: [
          { spec: { type: "expression", expr: "5" }, feedback: "Equal areas don't mean equal lengths. Area ABC is 2 × area ADE, so the *length* scale factor is {{sqrt(2)}}, not 2." },
          { spec: { type: "expression", expr: "5sqrt(2)" }, feedback: "{{5 sqrt(2)}} is the whole of AB. DB = AB − AD." },
        ],
        solution: [
          "Triangles ADE and ABC are similar (DE ∥ BC).",
          "Area ABC = 18 + 18 = 36 cm², so the area scale factor is {{36/18 = 2}}.",
          "Length scale factor {{k = sqrt(2)}}, so {{AB = 5 sqrt(2)}} cm.",
          "{{DB = 5 sqrt(2) - 5}} cm (≈ 2.07 cm).",
        ],
        commonError: "Using the trapezium as one of the similar shapes — compare triangle ADE with the whole triangle ABC.",
        difficulty: "challenge",
        guideRef: "area-volume-scale",
        hints: ["Which two shapes are similar? (The trapezium isn't similar to anything.)", "What is the area of the whole triangle ABC?", "Area scale factor 2 → length scale factor?", "Subtract AD from AB."],
        strategy: "Find the similar pair",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "similarity-congruence-p4-q15",
        question:
          "ABCDEF is a regular hexagon. Each interior angle of a regular hexagon is 120°.\n\nProve that triangle ACE is equilateral.",
        diagram: `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Regular hexagon ABCDEF with triangle ACE drawn inside it."><rect width="400" height="300" fill="#ffffff"/><polygon points="90,150 145,54.7 255,54.7 310,150 255,245.3 145,245.3" fill="#f8fafc" stroke="#1f2937" stroke-width="2"/><polygon points="90,150 255,54.7 255,245.3" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><text x="80" y="155" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">A</text><text x="140" y="46" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="262" y="46" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="320" y="155" font-size="14" font-family="sans-serif" fill="#1f2937">D</text><text x="262" y="264" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">E</text><text x="140" y="264" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">F</text></svg>`,
        marks: 3,
        modelAnswer:
          "Consider triangles ABC, CDE and EFA.\n\nAB = CD = EF and BC = DE = FA (all sides of a regular hexagon are equal).\n\nAngle ABC = angle CDE = angle EFA = 120° (interior angles of a regular hexagon).\n\nSo the three triangles are congruent (SAS).\n\nTherefore their third sides are equal: AC = CE = EA, so triangle ACE is equilateral.",
        markScheme: [
          { point: "Identifies triangles ABC, CDE, EFA with equal sides (regular hexagon)", keywords: ["abc", "cde", "efa", "regular", "sides", "equal"] },
          { point: "Included angles all 120° (interior angles); congruent by SAS", keywords: ["120", "sas", "congruent", "interior"] },
          { point: "Concludes AC = CE = EA, so ACE is equilateral", keywords: ["ac = ce", "ac=ce", "ea", "equilateral", "corresponding"] },
        ],
        commonError: "Saying 'it looks equilateral by symmetry' without a proof — you need the congruent triangles.",
        difficulty: "challenge",
        guideRef: "congruence",
        hints: ["The sides of ACE are AC, CE and EA. Each one is the third side of a small triangle — which ones?", "What do you know about the sides and angles of those small triangles?", "Congruent triangles → equal third sides."],
        solutions: [
          { label: "Calculate AC", steps: ["Let the hexagon's side be s. In triangle ABC (isosceles, apex angle 120°), the cosine rule gives {{AC^2 = s^2 + s^2 - 2s^2 cos 120° = 3s^2}}.", "So {{AC = s sqrt(3)}}. By the same calculation CE and EA are also {{s sqrt(3)}}.", "All three sides are equal, so ACE is equilateral. The congruence proof is shorter and needs no trig."] },
        ],
        strategy: "Use symmetry — then prove it",
      },
    ],
  },
];
