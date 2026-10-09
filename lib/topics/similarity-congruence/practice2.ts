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
          "Wei Ling prints a 6 cm by 9 cm photo of her CCA team. She enlarges it so that the new print is mathematically similar to the original and its **shorter** side is 15 cm.\n\nWork out the length of the longer side of the enlarged print. Give your answer in cm.",
        answer: { type: "number", value: 22.5, display: "22.5 cm" },
        traps: [
          { spec: { type: "number", value: 18 }, feedback: "You added 9 cm to each side (6 + 9 = 15, so 9 + 9 = 18). Similar shapes are *multiplied* by a scale factor, not added to." },
          { spec: { type: "number", value: 10 }, feedback: "You've matched 15 cm to the 9 cm side. The 15 cm side is the *shorter* side, so it corresponds to 6 cm." },
        ],
        solution: [
          "Corresponding sides: the short sides 6 cm → 15 cm.",
          "Scale factor {{k = 15/6 = 2.5}}.",
          "Longer side = 9 × 2.5 = 22.5 cm.",
        ],
        commonError: "Adding the same amount to each side instead of multiplying by the scale factor.",
        difficulty: "warmup",
        guideRef: "similar-lengths",
        hints: ["Which side of the original matches the 15 cm side?", "Scale factor = new length ÷ matching old length."],
        strategy: "Find the scale factor",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "similarity-congruence-p3-q02",
        question: "Change 3.6 m² into cm².",
        answer: { type: "number", value: 36000, display: "36 000 cm²" },
        traps: [
          { spec: { type: "number", value: 360 }, feedback: "You multiplied by 100, the *length* conversion. A square metre is 100 cm by 100 cm, so 1 m² = 100 × 100 = 10 000 cm²." },
          { spec: { type: "number", value: 3600000 }, feedback: "× 1 000 000 is the conversion for m³ to cm³ (three dimensions). Area has two dimensions: × 100²." },
        ],
        solution: [
          "1 m = 100 cm, so 1 m² = 100 cm × 100 cm = 10 000 cm².",
          "3.6 × 10 000 = 36 000 cm².",
        ],
        commonError: "Multiplying by 100 instead of 100² = 10 000.",
        difficulty: "warmup",
        guideRef: "area-volume-units",
        hints: ["Picture a 1 m by 1 m square measured in cm.", "1 m² = 100 × 100 cm²."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "similarity-congruence-p3-q03",
        question:
          "Two cylindrical tins are mathematically similar. Their heights are in the ratio 2 : 5.\n\nThe label on the smaller tin has an area of 48 cm². Work out the area of the matching label on the larger tin. Give your answer in cm².",
        answer: { type: "number", value: 300, display: "300 cm²" },
        traps: [
          { spec: { type: "number", value: 120 }, feedback: "You multiplied by the *length* scale factor 2.5. Areas scale by {{k^2 = 2.5^2 = 6.25}}." },
          { spec: { type: "number", value: 750 }, feedback: "You used {{k^3}}, which is for volumes. A label is an area, so use {{k^2}}." },
        ],
        solution: [
          "Length scale factor {{k = 5/2 = 2.5}}.",
          "Area scale factor {{k^2 = 6.25}}.",
          "Larger label = 48 × 6.25 = 300 cm².",
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
          "In triangles ABC and DEF:\n\n- AB = DE\n- angle BAC = angle EDF\n- angle ABC = angle DEF\n\nWhich condition proves that the triangles are congruent?",
        options: [
          "SAS",
          "Not enough information — you can't prove congruence from angles",
          "ASA",
          "RHS",
        ],
        answerIndex: 2,
        explanation:
          "The equal side AB = DE lies **between** the two equal angles (at A and B, and at D and E), so the condition is ASA. SAS would need two sides with the angle between them — here only one side is known. Angles alone (AAA) can't prove congruence, but this isn't angles alone: one pair of sides matches, which fixes the size. RHS needs a right angle, which isn't given.",
        difficulty: "warmup",
        guideRef: "congruence",
        hints: ["Count what you know: how many sides, how many angles?", "Is the known side between the two known angles?"],
        strategy: "Eliminate options",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "similarity-congruence-p3-q05",
        question:
          "In the diagram, D lies on AB and E lies on AC. DE is parallel to BC.\n\nAD = 4 cm, DB = 6 cm and DE = 5 cm.\n\nWork out the length of BC. Give your answer in cm.",
        diagram: `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the top. D on AB and E on AC with DE parallel to BC. AD 4 cm, DB 6 cm, DE 5 cm."><rect width="420" height="280" fill="#ffffff"/><polygon points="200,30 60,250 360,250" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><line x1="144" y1="118" x2="264" y2="118" stroke="#1f2937" stroke-width="2"/><polyline points="200,113 206,118 200,123" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="207,245 213,250 207,255" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="200" y="22" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="50" y="266" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="370" y="266" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="132" y="118" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">D</text><text x="276" y="118" font-size="14" font-family="sans-serif" fill="#1f2937">E</text><text x="160" y="72" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">4 cm</text><text x="92" y="186" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">6 cm</text><text x="236" y="110" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">5 cm</text></svg>`,
        answer: { type: "number", value: 12.5, display: "12.5 cm" },
        traps: [
          { spec: { type: "number", value: 7.5 }, feedback: "You used {{6/4}} as the scale factor. Triangle ABC's side is AB = AD + DB = 10 cm, not DB = 6 cm." },
          { spec: { type: "number", value: 11 }, feedback: "You added 6 cm to DE. Sides of similar triangles are multiplied by the scale factor, not increased by a fixed amount." },
        ],
        solution: [
          "DE ∥ BC, so triangles ADE and ABC are similar (shared angle A, corresponding angles equal).",
          "AB = 4 + 6 = 10 cm, so the scale factor is {{10/4 = 2.5}}.",
          "BC = 5 × 2.5 = 12.5 cm.",
        ],
        commonError: "Using DB instead of the whole side AB to find the scale factor.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["Separate the two triangles: draw ADE and ABC side by side.", "Which side of the big triangle corresponds to AD?", "AB = 10 cm, so k = 10 ÷ 4."],
        strategy: "Draw the triangles separately",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "similarity-congruence-p3-q06",
        question:
          "The straight lines AE and BD cross at C. AB is parallel to DE.\n\nAC = 6 cm, CE = 9 cm, AB = 8 cm and BC = 5 cm.\n\nWork out the lengths of DE and CD. Give DE first, then CD, in cm.",
        diagram: `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Hourglass diagram. Lines AE and BD cross at C. AB at the top is parallel to DE at the bottom. AC 6 cm, CE 9 cm, AB 8 cm, BC 5 cm."><rect width="400" height="290" fill="#ffffff"/><polygon points="166,78 280,105 220,150" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="220,150 130,217.5 301,258" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><text x="156" y="72" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">A</text><text x="288" y="100" font-size="14" font-family="sans-serif" fill="#1f2937">B</text><text x="236" y="152" font-size="14" font-family="sans-serif" fill="#1f2937">C</text><text x="120" y="226" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">D</text><text x="310" y="270" font-size="14" font-family="sans-serif" fill="#1f2937">E</text><text x="223" y="82" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">8 cm</text><text x="182" y="124" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">6 cm</text><text x="256" y="134" font-size="12" font-family="sans-serif" fill="#1f2937">5 cm</text><text x="270" y="200" font-size="12" font-family="sans-serif" fill="#1f2937">9 cm</text></svg>`,
        answer: { type: "list", values: [12, 7.5], ordered: true, display: "DE = 12 cm, CD = 7.5 cm" },
        traps: [
          { spec: { type: "list", values: [7.5, 12], ordered: true }, feedback: "Right numbers, wrong order — the question asks for DE first, then CD." },
          { spec: { type: "list", values: [11, 8], ordered: true }, feedback: "You added 3 cm (the difference 9 − 6) to each side. Similar triangles need a *multiplier*: {{9/6 = 1.5}}." },
        ],
        solution: [
          "Angle ACB = angle ECD (vertically opposite), and angle BAC = angle DEC (alternate angles, AB ∥ DE). So triangles ABC and EDC are similar.",
          "Match the sides: A ↔ E, B ↔ D, C ↔ C. AC (6) ↔ EC (9), so the scale factor from the small to the large triangle is {{9/6 = 1.5}}.",
          "DE ↔ AB: DE = 8 × 1.5 = 12 cm.",
          "CD ↔ CB: CD = 5 × 1.5 = 7.5 cm.",
        ],
        commonError: "Matching the wrong sides in an hourglass — the triangles are 'flipped', so check which vertex corresponds to which.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["Which pairs of angles are equal? Look for vertically opposite and alternate angles.", "Write the correspondence: A ↔ ?, B ↔ ?, C ↔ C.", "AC matches CE, so k = 9 ÷ 6."],
        strategy: "Write the correspondence",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "similarity-congruence-p3-q07",
        question:
          "A rainwater tank is a cuboid measuring 1.2 m by 80 cm by 50 cm.\n\n1 litre = 1000 cm³. Work out the capacity of the tank in litres.",
        answer: { type: "number", value: 480, display: "480 litres" },
        traps: [
          { spec: { type: "number", value: 0.48 }, feedback: "0.48 is the volume in **m³**. Convert to cm³ (× 1 000 000) and then to litres (÷ 1000)." },
          { spec: { type: "number", value: 48 }, feedback: "Check your conversion: 1.2 m = 120 cm, and 120 × 80 × 50 = 480 000 cm³. Divide by 1000 for litres." },
        ],
        solution: [
          "Put every length in cm: 1.2 m = 120 cm.",
          "Volume = 120 × 80 × 50 = 480 000 cm³.",
          "Capacity = 480 000 ÷ 1000 = 480 litres.",
        ],
        solutions: [
          { label: "Work in metres", steps: ["0.8 m × 0.5 m × 1.2 m = 0.48 m³.", "1 m³ = 1000 litres (a 10 cm cube is 1 litre, and 1 m³ holds 10 × 10 × 10 of them).", "0.48 × 1000 = 480 litres."] },
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
          "Two bottles of sugarcane juice are mathematically similar. The small bottle holds 250 ml and the large bottle holds 2 litres.\n\nThe surface area of the small bottle is 180 cm². Work out the surface area of the large bottle. Give your answer in cm².",
        answer: { type: "number", value: 720, display: "720 cm²" },
        traps: [
          { spec: { type: "number", value: 1440 }, feedback: "You multiplied by the volume scale factor 8. Surface area is an area: first get the length scale factor ({{cbrt(8) = 2}}), then square it." },
          { spec: { type: "number", value: 360 }, feedback: "2 is the *length* scale factor. Surface area scales by {{2^2 = 4}}." },
        ],
        solution: [
          "Same units: 2 litres = 2000 ml. Volume scale factor = {{2000/250 = 8}}.",
          "Length scale factor {{k = cbrt(8) = 2}}.",
          "Area scale factor {{k^2 = 4}}.",
          "Large surface area = 180 × 4 = 720 cm².",
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
          "ABCD is a square. E is a point on BC and F is a point on CD such that BE = CF.\n\nProve that triangle ABE is congruent to triangle BCF.",
        diagram: `<svg viewBox="0 0 320 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Square ABCD with A top-left, B top-right, C bottom-right, D bottom-left. E on BC, F on CD, with BE equal to CF. Segments AE and BF drawn."><rect width="320" height="290" fill="#ffffff"/><rect x="60" y="40" width="200" height="200" fill="none" stroke="#1f2937" stroke-width="2"/><polygon points="60,40 260,40 260,110" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><polygon points="260,40 260,240 190,240" fill="#fde68a" stroke="#1f2937" stroke-width="2" fill-opacity="0.8"/><line x1="266" y1="75" x2="276" y2="75" stroke="#1f2937" stroke-width="1.5"/><line x1="225" y1="246" x2="225" y2="256" stroke="#1f2937" stroke-width="1.5"/><text x="50" y="34" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">A</text><text x="270" y="34" font-size="14" font-family="sans-serif" fill="#1f2937">B</text><text x="270" y="256" font-size="14" font-family="sans-serif" fill="#1f2937">C</text><text x="50" y="256" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">D</text><text x="270" y="116" font-size="14" font-family="sans-serif" fill="#1f2937">E</text><text x="190" y="262" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">F</text></svg>`,
        marks: 3,
        modelAnswer:
          "AB = BC (sides of a square are equal).\n\nAngle ABE = angle BCF = 90° (angles of a square).\n\nBE = CF (given).\n\nSo two sides and the included angle are equal, and triangle ABE is congruent to triangle BCF (SAS).",
        markScheme: [
          { point: "AB = BC with reason (sides of a square)", keywords: ["ab = bc", "ab=bc", "sides of a square", "square"] },
          { point: "Angle ABE = angle BCF = 90° with reason (angles of a square); and BE = CF given", keywords: ["90", "right angle", "abe", "bcf", "be = cf", "given"] },
          { point: "Conclusion: congruent by SAS", keywords: ["sas", "congruent", "side angle side"] },
        ],
        commonError: "Writing 'SAS' without stating which sides and angle are equal, or giving no reasons ('square', 'given').",
        difficulty: "core",
        guideRef: "congruence",
        hints: ["List what you know about the sides and angles of a square.", "Which side of ABE matches which side of BCF? Which angle is between them?", "Each statement needs a reason; finish with the condition."],
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
          "Triangle P has angles 50° and 60°. Triangle Q has angles 70° and 50°.\n\nRavi says, \"These triangles can't be similar, because triangle Q has no 60° angle.\"\n\nIs Ravi correct? Explain your answer.",
        marks: 2,
        modelAnswer:
          "Ravi is not correct. The third angle of triangle P is 180° − 50° − 60° = 70°, and the third angle of triangle Q is 180° − 70° − 50° = 60°. Both triangles have angles 50°, 60° and 70°, so all three pairs of angles are equal and the triangles are similar.",
        markScheme: [
          { point: "Finds both third angles (70° and 60°) using the angle sum of 180°", keywords: ["70", "60", "180"] },
          { point: "Concludes Ravi is wrong: all three angles equal so the triangles are similar", keywords: ["not correct", "wrong", "similar", "same angles", "equal angles", "no"] },
        ],
        commonError: "Only comparing the angles that are written down, forgetting the third angle is fixed by the angle sum.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["What is the third angle in each triangle?", "Triangles are similar when all their angles match."],
        strategy: "Fill in what's missing",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "similarity-congruence-p3-q12",
        question:
          "A sheet of metal has an area of 2.4 m². Siti cuts it into squares with sides of 20 cm, with nothing wasted.\n\nHow many squares does she get?",
        answer: { type: "number", value: 60, display: "60 squares" },
        traps: [
          { spec: { type: "number", value: 6 }, feedback: "You used 1 m² = 1000 cm². A square metre is 100 cm × 100 cm = 10 000 cm², so 2.4 m² = 24 000 cm²." },
          { spec: { type: "number", value: 12 }, feedback: "You divided 2.4 by 0.2 — that compares a length with an area. Divide the area of the sheet by the area of one square." },
        ],
        solution: [
          "Sheet: 2.4 m² = 2.4 × 10 000 = 24 000 cm².",
          "One square: 20 × 20 = 400 cm².",
          "24 000 ÷ 400 = 60 squares.",
        ],
        solutions: [
          { label: "Work in m²", steps: ["One square is 0.2 m × 0.2 m = 0.04 m².", "2.4 ÷ 0.04 = 60."] },
        ],
        commonError: "Converting m² to cm² with × 100.",
        difficulty: "core",
        guideRef: "area-volume-units",
        hints: ["Get both areas in the same units.", "1 m² = 10 000 cm².", "Divide the sheet's area by one square's area."],
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
          "Triangle ABC has a right angle at C. D is the point on AB such that CD is perpendicular to AB.\n\nAD = 4 cm and DB = 9 cm.\n\nWork out the length of CD. Give your answer in cm.",
        diagram: `<svg viewBox="0 0 370 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at C at the top. CD is perpendicular to AB, meeting AB at D. AD 4 cm, DB 9 cm."><rect width="370" height="250" fill="#ffffff"/><polygon points="40,220 326,220 128,88" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><line x1="128" y1="88" x2="128" y2="220" stroke="#1f2937" stroke-width="2" stroke-dasharray="5 3"/><polyline points="128,208 140,208 140,220" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="120.7,98.8 130.7,105.5 137.9,94.9" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="32" y="236" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="334" y="236" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="128" y="78" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="128" y="238" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">D</text><text x="84" y="214" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">4 cm</text><text x="227" y="214" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">9 cm</text></svg>`,
        answer: { type: "number", value: 6, display: "6 cm" },
        traps: [
          { spec: { type: "number", value: 6.5 }, feedback: "6.5 cm is half of AB (the mean of 4 and 9 added up). CD comes from similar triangles: {{(CD)/4 = 9/(CD)}}." },
          { spec: { type: "number", value: 2.25 }, feedback: "You've set up {{(CD)/9 = ...}} with the sides mismatched. In triangles ADC and CDB, AD ↔ CD and CD ↔ DB." },
        ],
        solution: [
          "Triangle ADC: angle A + angle ACD = 90°. Triangle ABC: angle A + angle B = 90°. So angle ACD = angle B.",
          "So triangles ADC and CDB are similar (right angle at D, and angle ACD = angle CBD).",
          "Match the sides: AD ↔ CD and CD ↔ DB, so {{(AD)/(CD) = (CD)/(DB)}}.",
          "{{CD^2 = AD * DB = 4 * 9 = 36}}, so CD = 6 cm.",
        ],
        solutions: [
          { label: "Pythagoras three times", steps: ["Let CD = h. Then {{AC^2 = 16 + h^2}} and {{BC^2 = 81 + h^2}}.", "In triangle ABC (right angle at C): {{AC^2 + BC^2 = AB^2 = 13^2 = 169}}.", "{{97 + 2h^2 = 169}}, so {{h^2 = 36}} and h = 6. Similar triangles get there faster — and show *why* {{h^2 = AD * DB}}."] },
        ],
        commonError: "Assuming D is the midpoint of AB.",
        difficulty: "challenge",
        guideRef: "similar-lengths",
        hints: ["Find three right-angled triangles in the diagram. Are any of them similar?", "Chase angles: angle ACD equals which angle in triangle ABC?", "Match the sides of ADC and CDB, then cross-multiply."],
        strategy: "Angle chase",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "similarity-congruence-p3-q15",
        question:
          "ABCD is a parallelogram. Its diagonals AC and BD meet at M.\n\nUse congruent triangles to prove that the diagonals bisect each other (that is, AM = MC and BM = MD).",
        diagram: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallelogram ABCD with A bottom-left, B bottom-right, C top-right, D top-left. Diagonals AC and BD meet at M."><rect width="400" height="260" fill="#ffffff"/><polygon points="60,220 260,220 340,80 140,80" fill="none" stroke="#1f2937" stroke-width="2"/><polygon points="60,220 260,220 200,150" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><polygon points="340,80 140,80 200,150" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="220" x2="340" y2="80" stroke="#1f2937" stroke-width="2"/><line x1="260" y1="220" x2="140" y2="80" stroke="#1f2937" stroke-width="2"/><text x="50" y="236" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">A</text><text x="268" y="236" font-size="14" font-family="sans-serif" fill="#1f2937">B</text><text x="348" y="76" font-size="14" font-family="sans-serif" fill="#1f2937">C</text><text x="132" y="76" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">D</text><text x="200" y="138" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">M</text></svg>`,
        marks: 4,
        modelAnswer:
          "Consider triangles ABM and CDM.\n\nAB = CD (opposite sides of a parallelogram are equal).\n\nAngle BAM = angle DCM (alternate angles, AB is parallel to DC).\n\nAngle ABM = angle CDM (alternate angles, AB is parallel to DC).\n\nSo triangles ABM and CDM are congruent (ASA).\n\nTherefore corresponding sides are equal: AM = CM and BM = DM, so the diagonals bisect each other.",
        markScheme: [
          { point: "Chooses triangles ABM and CDM; AB = CD (opposite sides of a parallelogram)", keywords: ["abm", "cdm", "ab = cd", "ab=cd", "opposite sides"] },
          { point: "A pair of equal angles with reason: alternate angles, AB ∥ DC", keywords: ["alternate", "parallel", "bam", "dcm"] },
          { point: "Second pair of equal angles (alternate) and conclusion congruent by ASA (or AAS)", keywords: ["asa", "aas", "congruent", "abm", "cdm"] },
          { point: "Uses congruence to conclude AM = CM and BM = DM", keywords: ["am = cm", "am=mc", "bm = dm", "bm=md", "corresponding", "bisect"] },
        ],
        commonError: "Assuming what you're trying to prove — e.g. using AM = MC as one of the equal sides.",
        difficulty: "challenge",
        guideRef: "congruence",
        hints: ["Pick two triangles that contain AM and MC as corresponding sides.", "Parallel sides give you alternate angles. Which ones?", "You need one pair of equal sides — which sides of a parallelogram are equal?", "Once the triangles are congruent, every pair of corresponding sides is equal."],
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
        question:
          "Triangle PQR has PQ = 7 cm, QR = 9 cm and angle PQR = 48°.\n\nWhich triangle XYZ **must** be congruent to triangle PQR?",
        options: [
          "XY = 7 cm, XZ = 9 cm and angle XYZ = 48°",
          "XY = 7 cm, YZ = 9 cm and angle XYZ = 48°",
          "XY = 14 cm, YZ = 18 cm and angle XYZ = 48°",
          "XY = 7 cm, YZ = 9 cm and angle YXZ = 48°",
        ],
        answerIndex: 1,
        explanation:
          "In PQR the 48° angle is at Q, **between** the 7 cm and 9 cm sides. Only XY = 7, YZ = 9 with angle XYZ = 48° (the angle at Y, between those sides) matches — that's SAS. The options with the 48° angle at Y but the 9 cm side opposite it, or with the angle at X, are SSA: the angle is not between the two sides, which doesn't fix a unique triangle. The 14 cm, 18 cm triangle is an enlargement — similar, not congruent.",
        difficulty: "warmup",
        guideRef: "congruence",
        hints: ["Where is the 48° angle in triangle PQR — between the two sides, or not?", "For SAS the angle must be the *included* angle."],
        strategy: "Draw a diagram",
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
          "In the diagram, ADB and AEC are straight lines. DE is parallel to BC.\n\nAD = x cm, DB = 3 cm, DE = 4 cm and BC = 6 cm.\n\nWork out the value of x.",
        diagram: `<svg viewBox="0 0 400 285" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the top. D on AB, E on AC, DE parallel to BC. AD x cm, DB 3 cm, DE 4 cm, BC 6 cm."><rect width="400" height="285" fill="#ffffff"/><polygon points="200,30 50,260 350,260" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><line x1="100" y1="183.3" x2="300" y2="183.3" stroke="#1f2937" stroke-width="2"/><polyline points="196,178.3 202,183.3 196,188.3" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="196,255 202,260 196,265" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="200" y="22" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="40" y="276" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="360" y="276" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="90" y="186" font-size="14" font-family="sans-serif" text-anchor="end" fill="#1f2937">D</text><text x="310" y="186" font-size="14" font-family="sans-serif" fill="#1f2937">E</text><text x="140" y="104" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">x cm</text><text x="68" y="226" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">3 cm</text><text x="240" y="176" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">4 cm</text><text x="200" y="278" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6 cm</text></svg>`,
        answer: { type: "number", value: 6, display: "x = 6" },
        traps: [
          { spec: { type: "number", value: 2 }, feedback: "You used {{x/3 = 4/6}}, matching AD with DB. DB isn't a side of either triangle — AD matches AB = x + 3." },
          { spec: { type: "number", value: 4.5 }, feedback: "You used {{x/3 = 6/4}}. DB isn't a side of a triangle here: the big triangle's side is AB = x + 3." },
        ],
        solution: [
          "Triangles ADE and ABC are similar (DE ∥ BC).",
          "Matching sides: {{(AD)/(AB) = (DE)/(BC)}}, so {{x/(x + 3) = 4/6}}.",
          "Cross-multiply: 6x = 4(x + 3) = 4x + 12.",
          "2x = 12, so x = 6.",
        ],
        solutions: [
          { label: "Use the scale factor", steps: ["Scale factor small → large is {{6/4 = 1.5}}.", "So AB = 1.5x, and AB − AD = DB gives 1.5x − x = 3.", "0.5x = 3, so x = 6."] },
        ],
        commonError: "Writing x/3 instead of x/(x + 3).",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["Write the length of AB in terms of x.", "Set up a ratio of matching sides: small triangle over large triangle.", "Cross-multiply and solve."],
        strategy: "Introduce a variable",
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
          "ABC is an isosceles triangle with AB = AC. M is the midpoint of BC.\n\n(a) Prove that triangle ABM is congruent to triangle ACM.\n\n(b) Hence show that AM is perpendicular to BC.",
        marks: 4,
        modelAnswer:
          "(a) AB = AC (given, the triangle is isosceles).\n\nBM = CM (M is the midpoint of BC).\n\nAM is common to both triangles.\n\nSo triangle ABM is congruent to triangle ACM (SSS).\n\n(b) Because the triangles are congruent, angle AMB = angle AMC. These angles lie on the straight line BC, so they add up to 180°. So each is 90°, and AM is perpendicular to BC.",
        markScheme: [
          { point: "AB = AC (given) and BM = CM (M is the midpoint)", keywords: ["ab = ac", "ab=ac", "bm = cm", "bm=cm", "midpoint", "given"] },
          { point: "AM is a common side; concludes congruent by SSS", keywords: ["common", "am", "sss", "congruent"] },
          { point: "Angle AMB = angle AMC (corresponding angles of congruent triangles)", keywords: ["amb", "amc", "corresponding", "congruent"] },
          { point: "Angles on a straight line sum to 180°, so each is 90°: AM ⟂ BC", keywords: ["180", "straight line", "90", "perpendicular"] },
        ],
        commonError: "In (b), assuming the angles are 90° rather than deducing it from the straight line.",
        difficulty: "core",
        guideRef: "congruence",
        hints: ["List three pairs of equal sides — one of them is shared.", "For (b): congruent triangles have equal corresponding angles. Which two angles at M?", "What do the two angles at M add up to?"],
        strategy: "State reasons for every fact",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "similarity-congruence-p4-q09",
        question:
          "In triangle ABC, D is the point on AC such that angle ABD = angle ACB.\n\nAB = 6 cm and AC = 9 cm.\n\nWork out the length of DC. Give your answer in cm.",
        diagram: `<svg viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A bottom-left and C bottom-right on a horizontal line, B above. D on AC. Segment BD drawn. Angle ABD equals angle ACB. AB 6 cm, AC 9 cm."><rect width="340" height="230" fill="#ffffff"/><polygon points="40,200 310,200 155.7,62.1" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><line x1="155.7" y1="62.1" x2="160" y2="200" stroke="#1f2937" stroke-width="2"/><path d="M 140.3,80.5 A 24 24 0 0 0 156.4,86.1" fill="none" stroke="#dc2626" stroke-width="2"/><path d="M 286,200 A 24 24 0 0 1 292.1,184" fill="none" stroke="#dc2626" stroke-width="2"/><text x="32" y="216" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">A</text><text x="318" y="216" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">C</text><text x="155.7" y="52" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">B</text><text x="160" y="218" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">D</text><text x="88" y="124" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1f2937">6 cm</text><text x="175" y="226" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">9 cm (AC)</text></svg>`,
        answer: { type: "number", value: 5, display: "5 cm" },
        traps: [
          { spec: { type: "number", value: 4 }, feedback: "4 cm is AD. The question asks for DC = AC − AD = 9 − 4." },
          { spec: { type: "number", value: 3 }, feedback: "9 − 6 = 3 assumes AD = AB. Use the similar triangles ABD and ACB to find AD first." },
        ],
        solution: [
          "Triangles ABD and ACB share angle A, and angle ABD = angle ACB. So they are similar.",
          "Correspondence: A ↔ A, B ↔ C, D ↔ B.",
          "{{(AD)/(AB) = (AB)/(AC)}}, so {{AD = 6^2/9 = 36/9 = 4}} cm.",
          "DC = 9 − 4 = 5 cm.",
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
          "At 4 pm on a sunny day at Sentosa, a vertical 1.6 m pole casts a shadow 2.3 m long on level ground. At the same time, a vertical lamp post nearby casts a shadow 7.4 m long.\n\nWork out the height of the lamp post. Give your answer in metres correct to 3 significant figures.",
        answer: { type: "number", value: 5.15, display: "5.15 m" },
        traps: [
          { spec: { type: "number", value: 0.497, tolerance: 0.001 }, feedback: "You've inverted the scale factor. The lamp post's shadow is longer, so the lamp post is taller than 1.6 m: multiply by {{7.4/2.3}}." },
          { spec: { type: "number", value: 6.7, tolerance: 0.001 }, feedback: "You added 5.1 m (the difference in shadows). Similar triangles need a multiplier." },
        ],
        solution: [
          "The sun's rays are parallel, so the pole and its shadow form a triangle similar to the lamp post and its shadow.",
          "Scale factor = {{7.4/2.3 = 3.217...}}.",
          "Height = 1.6 × {{7.4/2.3}} = {{11.84/2.3 = 5.147...}} m.",
          "5.15 m (3 s.f.).",
        ],
        commonError: "Rounding the scale factor to 3.2 too early (giving 5.12 m).",
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
          { spec: { type: "number", value: 950 }, feedback: "You shared 1520 in the area ratio 9 : 25. Volumes are in the ratio of the *cubes* of the lengths: 27 : 125." },
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
