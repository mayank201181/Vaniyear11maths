import type { TopicGuide } from "../../types.ts";

// ---------------------------------------------------------------------------
// Similarity & Congruence — guide (textbook chapter + learn-smart).
// School Unit 4 · Edexcel IGCSE 4MA1 Higher 4.5–4.6, 4.10 (congruence, similar
// shapes, area and volume scale factors, unit conversions).
// ---------------------------------------------------------------------------

export const guide: TopicGuide = {
  id: "similarity-congruence",
  title: "Similarity & Congruence",
  strand: "Geometry & Measure",
  icon: "🔍",
  summary: "Same shape and size, or just the same shape — then lengths scale by k, areas by k² and volumes by k³.",
  intro:
    "Similarity is one of the most reliable sources of marks on 4MA1 Higher: almost every paper has a similar-triangles length question or a similar-solids area-and-volume question, often worth 3–5 marks. Congruence turns up as a short proof, where the marks are in the reasons rather than the arithmetic. Underneath both sits one idea — enlargement — and the same idea explains why 1 m² is 10 000 cm², not 100. Get comfortable with the scale factors k, k² and k³ and these questions become routine.",
  guide: [
    // -----------------------------------------------------------------------
    {
      id: "congruence",
      heading: "Congruent triangles",
      discovery: {
        problem:
          "Arjun and Mei are each told: *draw a triangle with sides 5 cm, 7 cm and 9 cm.* Will their triangles be identical? Next they are told: *draw a triangle with sides 8 cm and 6 cm and an angle of 40°* — with the 40° at one end of the 8 cm side, **not** between the two given sides. Can you make two different triangles that both fit?",
        idea:
          "Three sides fix a triangle completely — any two triangles with sides 5, 7 and 9 are copies of each other (possibly flipped over). But two sides and an angle only fix the triangle when the angle is **between** the two sides. Draw AB = 8 cm with a 40° angle at A, then swing a 6 cm arc from B: it crosses the base line in **two** places, giving two different triangles. That is why 'side, side, angle' (SSA) is not a congruence test.",
      },
      body:
        "Two shapes are **congruent** if they are exactly the same shape **and** size — one fits exactly on top of the other, possibly after turning it or flipping it over. Matching sides are equal and matching angles are equal.\n\nFor triangles you don't need all six facts. Any **one** of these four sets of three is enough:\n\n| Test | What is equal | Watch out |\n|---|---|---|\n| **SSS** | all three pairs of sides | — |\n| **SAS** | two sides and the angle **between** them | it must be the *included* angle |\n| **ASA** (or AAS) | two angles and a side | the side must be the *matching* side in both triangles |\n| **RHS** | right angle, hypotenuse and one other side | right-angled triangles only |\n\n**Not tests.** AAA (equal angles only gives the same *shape* — the triangles are similar but may be different sizes) and SSA (two sides and a non-included angle can give two different triangles — see the diagram). RHS is the special case of SSA that does work: when the angle is 90° the two possible triangles are mirror images of each other, and Pythagoras pins down the third side.\n\n**AAS counts as ASA.** If two angles are equal, the third pair is equal too (angle sum 180°), so two angles plus any *matching* side is really ASA.\n\n**Writing a congruence proof (4MA1 'Prove that…')**\n\n1. Name the two triangles with letters in matching order: 'triangle ABD and triangle CDB' means A↔C, B↔D, D↔B.\n2. Give **three** facts, each with a **reason**: 'AB = CD (opposite sides of a parallelogram)', 'angle ABD = angle CDB (alternate angles, AB ∥ DC)', 'BD is common'.\n3. Name the test: 'so triangles ABD and CDB are congruent (SAS)'.\n\nThe marks are for the reasons. 'They look the same' scores nothing; *given*, *common side*, *vertically opposite angles*, *alternate angles*, *radii of the same circle* and *M is the midpoint* all score.\n\n**Using congruence.** Once two triangles are proved congruent, **every** matching side and angle is equal. That is how you prove facts like 'the diagonals of a parallelogram bisect each other' or 'AM is perpendicular to BC': prove a pair of triangles congruent first, then read off the equal parts.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four panels show the congruence tests. SSS: three pairs of equal sides marked. SAS: two sides and the angle between them. ASA: two angles and the side between them. RHS: a right angle, the hypotenuse and one other side. Below, SSA: with AB = 8, an angle of 40 degrees at A and BC = 6, the arc of radius 6 about B meets the base line at two points C1 and C2, giving two different triangles. Last, AAA: two triangles with the same angles but different sizes are similar, not congruent."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><polygon points="14,112 114,112 44,40" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.8"/><line x1="64" y1="118" x2="64" y2="106" stroke="#1f2937" stroke-width="1.6"/><line x1="84.7" y1="73.3" x2="76.1" y2="81.6" stroke="#1f2937" stroke-width="1.6"/><line x1="81.9" y1="70.4" x2="73.3" y2="78.7" stroke="#1f2937" stroke-width="1.6"/><line x1="25" y1="70" x2="36.1" y2="74.6" stroke="#1f2937" stroke-width="1.6"/><line x1="23.5" y1="73.7" x2="34.5" y2="78.3" stroke="#1f2937" stroke-width="1.6"/><line x1="21.9" y1="77.4" x2="33" y2="82" stroke="#1f2937" stroke-width="1.6"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="64" y="24" font-weight="bold" font-size="14">SSS</text></g><polygon points="132,112 232,112 162,40" fill="#fde68a" stroke="#1f2937" stroke-width="1.8"/><line x1="182" y1="118" x2="182" y2="106" stroke="#1f2937" stroke-width="1.6"/><line x1="142.2" y1="71.8" x2="153.3" y2="76.5" stroke="#1f2937" stroke-width="1.6"/><line x1="140.7" y1="75.5" x2="151.8" y2="80.2" stroke="#1f2937" stroke-width="1.6"/><path d="M148,112 A16,16 0 0,0 138.2,97.2" fill="none" stroke="#b45309" stroke-width="1.6"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="182" y="24" font-weight="bold" font-size="14">SAS</text></g><polygon points="250,112 350,112 280,40" fill="#bae6fd" stroke="#1f2937" stroke-width="1.8"/><path d="M266,112 A16,16 0 0,0 256.2,97.2" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M336,112 A14,14 0 0,1 340.2,102" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M332,112 A18,18 0 0,1 337.5,99.1" fill="none" stroke="#b45309" stroke-width="1.6"/><line x1="300" y1="118" x2="300" y2="106" stroke="#1f2937" stroke-width="1.6"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="300" y="24" font-weight="bold" font-size="14">ASA</text></g><polygon points="374,112 468,112 374,40" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.8"/><path d="M383,112 L383,103 L374,103" fill="none" stroke="#1f2937" stroke-width="1.4"/><line x1="426.2" y1="72.5" x2="418.9" y2="82" stroke="#1f2937" stroke-width="1.6"/><line x1="423.1" y1="70" x2="415.8" y2="79.5" stroke="#1f2937" stroke-width="1.6"/><line x1="368" y1="76" x2="380" y2="76" stroke="#1f2937" stroke-width="1.6"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="418" y="24" font-weight="bold" font-size="14">RHS</text></g><line x1="8" y1="140" x2="472" y2="140" stroke="#94a3b8" stroke-dasharray="4 4"/><polygon points="30,290 134.2,202.6 186.7,290" fill="#fecaca" stroke="#1f2937" stroke-width="1.8"/><polygon points="30,290 134.2,202.6 81.6,290" fill="#fde68a" stroke="#1f2937" stroke-width="1.8"/><line x1="134.2" y1="202.6" x2="81.6" y2="290" stroke="#1f2937" stroke-width="1.8"/><line x1="134.2" y1="202.6" x2="186.7" y2="290" stroke="#1f2937" stroke-width="1.8"/><path d="M81.6,290 A102,102 0 0,0 186.7,290" fill="none" stroke="#64748b" stroke-dasharray="4 3" stroke-width="1.2"/><path d="M52,290 A22,22 0 0,0 46.9,275.9" fill="none" stroke="#b45309" stroke-width="1.6"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="130" y="160" font-weight="bold" font-size="14">SSA — not a test</text><text x="20" y="304">A</text><text x="134.2" y="194.6">B</text><text x="81.6" y="306">C₁</text><text x="186.7" y="306">C₂</text><text x="66" y="284" font-size="11">40°</text><text x="70.1" y="240.3">8</text><text x="99.9" y="248.3">6</text><text x="170.5" y="248.3">6</text></g><polygon points="290,290 350,290 308,248" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.8"/><polygon points="362,290 470,290 394.4,214.4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.8"/><path d="M302,290 A12,12 0 0,0 294.7,279" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M340,290 A10,10 0 0,1 342.9,282.9" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M336,290 A14,14 0 0,1 340.1,280.1" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M374,290 A12,12 0 0,0 366.7,279" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M460,290 A10,10 0 0,1 462.9,282.9" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M456,290 A14,14 0 0,1 460.1,280.1" fill="none" stroke="#b45309" stroke-width="1.6"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="380" y="160" font-weight="bold" font-size="14">AAA — similar only</text><text x="380" y="178" font-size="11">same shape, different size</text></g></svg>`,
      diagramCaption:
        "Top: the four congruence tests. Bottom left: SSA fails — with AB = 8, angle A = 40° and BC = 6 there are two triangles, ABC₁ and ABC₂. Bottom right: AAA gives the same shape in different sizes (similar, not congruent).",
      workedExamples: [
        {
          title: "A parallelogram proof",
          problem: "ABCD is a parallelogram. Prove that triangle ABD is congruent to triangle CDB.",
          steps: [
            "Match the letters: A↔C, B↔D, D↔B. So compare AB with CD, AD with CB, and BD with DB.",
            "AB = CD (opposite sides of a parallelogram are equal).",
            "AD = CB (opposite sides of a parallelogram are equal).",
            "BD = DB (common side).",
            "Three pairs of equal sides, so triangle ABD is congruent to triangle CDB (SSS).",
            "Another full-mark route: AB = CD, angle ABD = angle CDB (alternate angles, AB ∥ DC) and BD common gives SAS. Either works, as long as every fact has a reason.",
          ],
          answer: "Triangle ABD ≅ triangle CDB (SSS), with a reason given for each pair of equal sides.",
          yourTurn: {
            question:
              "Your turn: triangles PQR and XYZ have PQ = XY = 7 cm, QR = YZ = 9 cm and angle PQR = angle XYZ = 52°. Which congruence test proves they are congruent? Type SSS, SAS, ASA or RHS.",
            answer: { type: "text", accept: ["SAS", "S A S", "side angle side"], display: "SAS" },
            solution:
              "The 52° angle is at Q, between PQ and QR — it is the **included** angle in both triangles. Two sides and the included angle: SAS.",
          },
        },
        {
          title: "Using congruence to prove a right angle",
          problem: "Triangle ABC is isosceles with AB = AC. M is the midpoint of BC. Prove that AM is perpendicular to BC.",
          steps: [
            "Compare triangles ABM and ACM.",
            "AB = AC (given). BM = CM (M is the midpoint of BC). AM is common.",
            "So triangles ABM and ACM are congruent (SSS).",
            "Matching angles of congruent triangles are equal, so angle AMB = angle AMC.",
            "These two angles lie on the straight line BC, so they add up to 180°. Each is therefore 90°, and AM is perpendicular to BC.",
          ],
          answer: "Angle AMB = angle AMC (congruent triangles, SSS) and they sum to 180°, so each is 90°.",
          yourTurn: {
            question:
              "Your turn: triangle ABC is congruent to triangle PQR, with the letters in matching order. AB = 5 cm, BC = 8 cm, angle ABC = 70° and angle BCA = 45°. Work out the size of angle QPR in degrees.",
            answer: { type: "number", value: 65, display: "65°" },
            solution:
              "Angle QPR is at P, which matches A. Angle BAC = 180° − 70° − 45° = 65°, so angle QPR = 65°.",
          },
        },
      ],
      keyPoints: [
        "Congruent = same shape **and** same size (reflections allowed).",
        "The tests: SSS, SAS (included angle), ASA/AAS (matching side), RHS.",
        "AAA only proves similarity; SSA is not a test because two triangles can fit.",
        "Write the triangles with letters in matching order — it tells you which sides and angles pair up.",
        "Every statement in a proof needs a reason; finish by naming the test.",
        "Once triangles are congruent, all matching sides and angles are equal — use that to prove further facts.",
      ],
      whyItWorks:
        "Each test is really a **construction** with only one possible result.\n\n- **SSS**: draw one side, then swing arcs of the other two lengths from its ends. The arcs meet at one point above the line (and its mirror image below), so the triangle is fixed.\n- **SAS**: draw one side, turn through the given angle and measure off the second side. Joining up the ends leaves no choice.\n- **ASA**: draw the side, then the two angles at its ends. Two rays from fixed points meet in exactly one place.\n- **SSA**: draw a side and the angle at one end, then swing an arc for the third side from the other end. The arc can cut the line **twice**, so two different triangles fit. When the angle is 90° (RHS) the two answers are mirror images, so the triangle is fixed after all.",
      strategies: [
        "Draw a diagram",
        "Mark equal sides and angles as you find them",
        "Look for a common side or vertically opposite angles",
        "Work backwards from what you must prove",
      ],
      thinkDeeper:
        "Two triangles have all three angles equal **and** two pairs of sides equal, yet they are not congruent. Impossible? Try triangles with sides 8, 12, 18 and 12, 18, 27. Check that they are similar (what is the scale factor?) and spot the two equal pairs of lengths. Why doesn't this contradict SSS or SAS?",
    },
    // -----------------------------------------------------------------------
    {
      id: "similar-lengths",
      heading: "Similar shapes: lengths",
      discovery: {
        problem:
          "At 4 pm on Sentosa, Wei Ling (1.6 m tall) casts a shadow 2 m long. At the same moment a palm tree casts a shadow 7.5 m long. How tall is the tree? What do the two triangles formed by the sun's rays have in common?",
        idea:
          "The sun's rays are parallel, so both triangles have the same angles: a right angle at the ground and the same angle of elevation of the sun. Same angles means **same shape** — one triangle is an enlargement of the other. The tree's shadow is {{7.5/2 = 3.75}} times as long, so the tree is 3.75 times as tall: 3.75 × 1.6 = 6 m.",
      },
      body:
        "Two shapes are **similar** if one is an enlargement of the other: all matching angles are equal and all matching lengths are in the same ratio. That ratio is the **linear scale factor**\n\n    {{k = \"new length\"/\"matching old length\"}}\n\nso new length = k × old length, and old length = new length ÷ k.\n\n**When are two triangles similar?** Any one of these is enough:\n\n- **two pairs of equal angles** (the third pair then matches automatically) — the one you'll use most;\n- all three pairs of sides in the same ratio;\n- two pairs of sides in the same ratio, with the angles between them equal.\n\nOther shapes need *both* equal angles *and* sides in one ratio. Every square is similar to every other square, but a 2 × 3 rectangle is not similar to a 3 × 4 rectangle, because {{3/2 != 4/3}}. All circles are similar.\n\n**Pairing up sides.** This is where marks are lost. Match sides by the **angles they face**, not by their position on the page: the side opposite a marked angle in one triangle matches the side opposite the same angle in the other. Redrawing the smaller triangle the same way round as the larger one helps.\n\n**Nested triangles.** If DE ∥ BC in triangle ABC, then angle ADE = angle ABC (corresponding angles) and angle A is shared, so triangle ADE is similar to triangle ABC. Use the **whole** sides: the scale factor is {{AB/AD}}, not {{DB/AD}}. If you're asked for DB, find AB first and subtract.\n\n**Hourglass (bow-tie).** If AB ∥ DE and the lines AE and BD cross at C, the vertically opposite angles at C are equal and the alternate angles at A and E are equal, so triangle ABC is similar to triangle EDC. The small triangle is upside down — A matches E and B matches D.\n\n**Method**\n\n1. Say why the triangles are similar (equal angles, with reasons).\n2. Pair up the sides — a small table helps:\n\n| Small triangle ADE | Large triangle ABC |\n|---|---|\n| AD = 6 | AB = 6 + 4 = 10 |\n| DE = 9 | BC = ? |\n\n3. Find k from a pair where you know both lengths, then multiply (to go bigger) or divide (to go smaller).",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: triangle ABC with D on AB and E on AC, DE parallel to BC. AD = 6, DB = 4, AE = 4.5, DE = 9. Right: lines AE and BD cross at C, with AB parallel to DE. AB = 8, AC = 5, CB = 7 and DE = 12."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><polygon points="110,30 24,270 216,270" fill="#bae6fd" stroke="#1f2937" stroke-width="1.8"/><polygon points="110,30 58.4,174 173.6,174" fill="#fde68a" stroke="#1f2937" stroke-width="1.8"/><path d="M111,169 L118,174 L111,179" fill="none" stroke="#1f2937" stroke-width="1.6"/><path d="M115,265 L122,270 L115,275" fill="none" stroke="#1f2937" stroke-width="1.6"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="110" y="22">A</text><text x="14" y="276">B</text><text x="226" y="276">C</text><text x="46.4" y="178">D</text><text x="185.6" y="178">E</text><text x="70.2" y="102">6</text><text x="27.2" y="222">4</text><text x="159.8" y="102">4.5</text><text x="116" y="168">9</text><text x="120" y="290">?</text></g><polygon points="337,79.4 449,79.4 372,140" fill="#fde68a" stroke="#1f2937" stroke-width="1.8"/><polygon points="256.5,230.9 424.5,230.9 372,140" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.8"/><path d="M388,74.4 L395,79.4 L388,84.4" fill="none" stroke="#1f2937" stroke-width="1.6"/><path d="M335.5,225.9 L342.5,230.9 L335.5,235.9" fill="none" stroke="#1f2937" stroke-width="1.6"/><path d="M351,79.4 A14,14 0 0,1 344,91.5" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M410.5,230.9 A14,14 0 0,1 417.5,218.8" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M437,79.4 A12,12 0 0,0 439.6,86.8" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M433,79.4 A16,16 0 0,0 436.4,89.3" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M268.5,230.9 A12,12 0 0,0 265.9,223.5" fill="none" stroke="#b45309" stroke-width="1.6"/><path d="M272.5,230.9 A16,16 0 0,0 269.1,221" fill="none" stroke="#b45309" stroke-width="1.6"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="329" y="73.4">A</text><text x="457" y="73.4">B</text><text x="388" y="144">C</text><text x="248.5" y="246.9">D</text><text x="432.5" y="246.9">E</text><text x="393" y="71.4">8</text><text x="344.5" y="111.7">5</text><text x="420.5" y="107.7">7</text><text x="340.5" y="248.9">12</text></g></svg>`,
      diagramCaption:
        "Left: DE ∥ BC, so triangle ADE is similar to triangle ABC — compare AD with the whole of AB. Right: AB ∥ DE makes an hourglass; triangle ABC is similar to triangle EDC, with A matching E and B matching D.",
      workedExamples: [
        {
          title: "Nested triangles",
          problem:
            "In triangle ABC, D is on AB and E is on AC, with DE parallel to BC. AD = 6 cm, DB = 4 cm, DE = 9 cm and AE = 4.5 cm. Work out (a) the length of BC (b) the length of EC.",
          steps: [
            "DE ∥ BC, so angle ADE = angle ABC (corresponding angles) and angle A is common. Triangles ADE and ABC are similar.",
            "Use whole sides: AB = 6 + 4 = 10 cm. Scale factor from small to large: {{k = 10/6 = 5/3}}.",
            "(a) {{BC = 9 * 5/3 = 15}} cm.",
            "(b) {{AC = 4.5 * 5/3 = 7.5}} cm, so EC = 7.5 − 4.5 = 3 cm.",
            "Check: {{AE/EC = 4.5/3 = 1.5}} and {{AD/DB = 6/4 = 1.5}} — a line parallel to one side cuts the other two sides in the same ratio.",
          ],
          answer: "(a) BC = 15 cm (b) EC = 3 cm",
          yourTurn: {
            question:
              "Your turn: in the same set-up (DE parallel to BC), AD = 4 cm, DB = 6 cm and DE = 5 cm. Work out the length of BC in cm.",
            answer: { type: "number", value: 12.5, display: "12.5 cm" },
            solution:
              "AB = 4 + 6 = 10 cm, so {{k = 10/4 = 2.5}}. BC = 5 × 2.5 = 12.5 cm. (Using {{6/4}} instead gives 7.5 cm — the classic slip of using the piece DB instead of the whole side AB.)",
          },
        },
        {
          title: "The hourglass",
          problem:
            "AB is parallel to DE. The straight lines AE and BD meet at C. AB = 8 cm, DE = 12 cm, AC = 5 cm and CD = 10.5 cm. Work out (a) the length of CE (b) the length of BC.",
          steps: [
            "Angle ACB = angle ECD (vertically opposite) and angle BAC = angle DEC (alternate angles, AB ∥ DE). So triangles ABC and EDC are similar.",
            "Matching vertices: A↔E, B↔D, C↔C. So AB↔ED, AC↔EC and BC↔DC.",
            "Scale factor from small to large: {{k = 12/8 = 1.5}}.",
            "(a) CE matches CA: CE = 5 × 1.5 = 7.5 cm.",
            "(b) CD matches CB, and CD is in the large triangle: BC = 10.5 ÷ 1.5 = 7 cm.",
          ],
          answer: "(a) CE = 7.5 cm (b) BC = 7 cm",
          yourTurn: {
            question:
              "Your turn: PQ is parallel to ST, and the straight lines PT and QS meet at R. PQ = 6 cm, ST = 15 cm and QR = 4 cm. Work out the length of RS in cm.",
            answer: { type: "number", value: 10, display: "10 cm" },
            solution:
              "Angle PQR = angle TSR (alternate angles) and the angles at R are vertically opposite, so triangles PQR and TSR are similar with Q matching S. {{k = 15/6 = 2.5}}, so RS = 4 × 2.5 = 10 cm.",
          },
        },
      ],
      keyPoints: [
        "Similar = same shape: matching angles equal, matching lengths all in one ratio k.",
        "For triangles, two pairs of equal angles is enough.",
        "Match sides by the angles they face — not by where they sit on the page.",
        "Nested triangles: use the whole side (AB), not the piece (DB); subtract at the end if needed.",
        "Hourglass: the small triangle is upside down; use vertically opposite and alternate angles.",
        "Going to the bigger shape, multiply by k; going to the smaller shape, divide.",
      ],
      whyItWorks:
        "Equal angles force the same shape. Draw triangle ABC and slide a line DE, parallel to BC, towards A. The angles at D and E stay equal to the angles at B and C, and triangle ADE shrinks evenly — it is an **enlargement of triangle ABC with centre A**. Every length is multiplied by the same factor, so\n\n    {{AD/AB = AE/AC = DE/BC}}\n\nA neat consequence (the *intercept theorem*): {{AD/DB = AE/EC}}. A line parallel to one side of a triangle cuts the other two sides in the same ratio.",
      strategies: [
        "Redraw the triangles separately, the same way round",
        "Make a table of matching sides",
        "Look for parallel lines (corresponding and alternate angles)",
        "Estimate first: bigger shape, bigger answer",
      ],
      thinkDeeper:
        "In triangle ABC, the point D lies on AC so that angle ABD = angle ACB. Show that triangle ABD is similar to triangle ACB, and hence prove that {{AB^2 = AD * AC}}. If AD = 4 cm and DC = 5 cm, how long is AB?",
    },
    // -----------------------------------------------------------------------
    {
      id: "area-volume-units",
      heading: "Converting units of area and volume",
      discovery: {
        problem:
          "A floor tile is 1 m by 1 m. Hana says: 'There are 100 cm in a metre, so 1 m² = 100 cm².' Picture the tile covered in little 1 cm by 1 cm squares. How many fit in one row? How many rows are there? Is Hana right?",
        idea:
          "One row holds 100 little squares and there are 100 rows: 100 × 100 = **10 000** cm². Area is length × length, so the conversion factor is squared. Volume is length × length × length, so it is cubed: 1 m³ = 100³ = 1 000 000 cm³.",
      },
      body:
        "Converting a length is one multiplication. Area and volume use the **same factor, squared or cubed**.\n\n| Length | Area | Volume |\n|---|---|---|\n| 1 cm = 10 mm | 1 cm² = 10² = 100 mm² | 1 cm³ = 10³ = 1000 mm³ |\n| 1 m = 100 cm | 1 m² = 100² = 10 000 cm² | 1 m³ = 100³ = 1 000 000 cm³ |\n| 1 km = 1000 m | 1 km² = 1000² = 1 000 000 m² | 1 km³ = 1000³ = 1 000 000 000 m³ |\n\n**Capacity.** Liquids are measured in litres and millilitres:\n\n- 1 ml = 1 cm³\n- 1 litre = 1000 cm³ (a 10 cm × 10 cm × 10 cm cube)\n- 1 m³ = 1 000 000 cm³ = 1000 litres\n\n**Which way?** Changing to a **smaller** unit gives a **bigger** number, so multiply; changing to a bigger unit, divide. Sense check: a square metre is a big floor tile and a square centimetre is a fingernail, so the number of cm² must be far larger than the number of m².\n\n**Safest method: convert the lengths first.** If a tank measures 1.2 m by 80 cm by 50 cm, change every length to cm *before* multiplying. Converting the final area or volume works too — but mixing units inside one calculation never does.\n\n**Compound units.** The same idea converts densities: 1 g/cm³ = 1000 kg/m³, because 1 m³ holds 1 000 000 cm³, and 1 000 000 g = 1000 kg.",
      diagram: `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: a square of side 1 metre, which is 100 centimetres, divided into a 10 by 10 grid of blocks; each block is 10 cm by 10 cm, so the square holds 100 times 100 = 10 000 square centimetres. Right: a cube of edge 1 metre, which is 100 centimetres, holding 100 times 100 times 100 = 1 000 000 cubic centimetres, or 1000 litres."><rect x="0" y="0" width="480" height="280" fill="#ffffff"/><rect x="40" y="40" width="180" height="180" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.8"/><line x1="58" y1="40" x2="58" y2="220" stroke="#334155" stroke-width="0.6"/><line x1="40" y1="58" x2="220" y2="58" stroke="#334155" stroke-width="0.6"/><line x1="76" y1="40" x2="76" y2="220" stroke="#334155" stroke-width="0.6"/><line x1="40" y1="76" x2="220" y2="76" stroke="#334155" stroke-width="0.6"/><line x1="94" y1="40" x2="94" y2="220" stroke="#334155" stroke-width="0.6"/><line x1="40" y1="94" x2="220" y2="94" stroke="#334155" stroke-width="0.6"/><line x1="112" y1="40" x2="112" y2="220" stroke="#334155" stroke-width="0.6"/><line x1="40" y1="112" x2="220" y2="112" stroke="#334155" stroke-width="0.6"/><line x1="130" y1="40" x2="130" y2="220" stroke="#334155" stroke-width="0.6"/><line x1="40" y1="130" x2="220" y2="130" stroke="#334155" stroke-width="0.6"/><line x1="148" y1="40" x2="148" y2="220" stroke="#334155" stroke-width="0.6"/><line x1="40" y1="148" x2="220" y2="148" stroke="#334155" stroke-width="0.6"/><line x1="166" y1="40" x2="166" y2="220" stroke="#334155" stroke-width="0.6"/><line x1="40" y1="166" x2="220" y2="166" stroke="#334155" stroke-width="0.6"/><line x1="184" y1="40" x2="184" y2="220" stroke="#334155" stroke-width="0.6"/><line x1="40" y1="184" x2="220" y2="184" stroke="#334155" stroke-width="0.6"/><line x1="202" y1="40" x2="202" y2="220" stroke="#334155" stroke-width="0.6"/><line x1="40" y1="202" x2="220" y2="202" stroke="#334155" stroke-width="0.6"/><rect x="40" y="40" width="18" height="18" fill="#fde68a" stroke="#1f2937" stroke-width="1.2"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="130" y="240">1 m = 100 cm</text><text x="26" y="130" transform="rotate(-90 26 130)">1 m = 100 cm</text><text x="130" y="26" font-weight="bold">1 m² = 100 × 100 = 10 000 cm²</text><text x="130" y="258" font-size="11">yellow block: 10 cm × 10 cm = 100 cm²</text></g><polygon points="280,90 390,90 430,58 320,58" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.8"/><polygon points="390,90 390,200 430,168 430,58" fill="#a7f3d0" stroke="#1f2937" stroke-width="1.8"/><polygon points="280,90 390,90 390,200 280,200" fill="#d1fae5" stroke="#1f2937" stroke-width="1.8"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="335" y="220">100 cm</text><text x="416" y="78" text-anchor="start">100 cm</text><text x="268" y="145" transform="rotate(-90 268 145)">100 cm</text><text x="350" y="26" font-weight="bold">1 m³ = 100³ = 1 000 000 cm³</text><text x="350" y="238" font-size="11">= 1000 litres (1 litre = 1000 cm³)</text></g></svg>`,
      diagramCaption:
        "A square metre holds 100 rows of 100 square centimetres; a cubic metre holds 100 layers of those — a million cubic centimetres, or 1000 litres.",
      workedExamples: [
        {
          title: "Area conversions both ways",
          problem: "(a) Change 3.5 m² to cm². (b) Change 4500 cm² to m².",
          steps: [
            "1 m² = 100 cm × 100 cm = 10 000 cm².",
            "(a) Smaller unit, so a bigger number: 3.5 × 10 000 = 35 000 cm².",
            "(b) Bigger unit, so a smaller number: 4500 ÷ 10 000 = 0.45 m².",
            "Sense check: 0.45 m² is just under half of a 1 m by 1 m tile — about the size of a desk top. ✓",
          ],
          answer: "(a) 35 000 cm² (b) 0.45 m²",
          yourTurn: {
            question: "Your turn: change 0.08 m² to cm².",
            answer: { type: "number", value: 800, display: "800 cm²" },
            solution: "1 m² = 10 000 cm², so 0.08 × 10 000 = 800 cm².",
          },
        },
        {
          title: "Capacity of a tank",
          problem:
            "A fish tank is a cuboid 1.2 m long, 80 cm wide and 50 cm high. How many litres of water does it hold when full?",
          steps: [
            "Convert the lengths to cm first: 1.2 m = 120 cm.",
            "Volume = 120 × 80 × 50 = 480 000 cm³.",
            "1 litre = 1000 cm³, so 480 000 ÷ 1000 = 480 litres.",
            "Check in metres: 1.2 × 0.8 × 0.5 = 0.48 m³, and 1 m³ = 1000 litres, so 0.48 × 1000 = 480 litres. ✓",
          ],
          answer: "480 litres",
          yourTurn: {
            question: "Your turn: a garden pond holds 3 600 000 cm³ of water. Write this volume in m³.",
            answer: { type: "number", value: 3.6, display: "3.6 m³" },
            solution: "1 m³ = 1 000 000 cm³, and m³ is the bigger unit, so divide: 3 600 000 ÷ 1 000 000 = 3.6 m³.",
          },
        },
      ],
      keyPoints: [
        "Area: square the length conversion factor. Volume: cube it.",
        "1 cm² = 100 mm² and 1 m² = 10 000 cm².",
        "1 cm³ = 1000 mm³ and 1 m³ = 1 000 000 cm³.",
        "1 ml = 1 cm³, 1 litre = 1000 cm³, 1 m³ = 1000 litres.",
        "Smaller unit → bigger number (multiply); bigger unit → smaller number (divide).",
        "Put every length in the same unit before you calculate.",
      ],
      whyItWorks:
        "A unit of area is a square whose side is the unit of length. Write 1 m² as 1 m × 1 m and swap each metre for 100 cm:\n\n    1 m² = 1 m × 1 m = 100 cm × 100 cm = 10 000 cm²\n\nThe 100 appears once for every length you multiply — twice for area, three times for volume. So a length factor f becomes {{f^2}} for area and {{f^3}} for volume. That is exactly the scale-factor rule of the next section: changing units *is* an enlargement of the measuring grid.",
      strategies: ["Draw a diagram", "Convert lengths first", "Estimate first", "Check by working the other way"],
      thinkDeeper:
        "A hectare is the area of a square 100 m by 100 m. How many hectares are there in 1 km²? Singapore's land area is about 735 km² — roughly how many hectares is that, and roughly how many football pitches of about 0.7 hectares would cover it?",
    },
    // -----------------------------------------------------------------------
    {
      id: "area-volume-scale",
      heading: "Area and volume scale factors",
      discovery: {
        problem:
          "Build a cube from 1 cm cubes with edges 2 cm long. How many little cubes do you need? How many little square faces would you paint to cover the outside? Now try edges 3 cm long. Complete: lengths × 2 → paint × ?, cubes × ?; lengths × 3 → paint × ?, cubes × ?",
        idea:
          "Edge 1: 1 cube, 6 faces painted. Edge 2: 8 cubes, 24 faces — paint × 4, cubes × 8. Edge 3: 27 cubes, 54 faces — paint × 9, cubes × 27. When lengths are multiplied by k, areas are multiplied by {{k^2}} and volumes by {{k^3}}.",
      },
      body:
        "If two shapes are similar with linear scale factor k:\n\n| Measure | Multiply by | Examples |\n|---|---|---|\n| Length | k | height, radius, diagonal, perimeter |\n| Area | {{k^2}} | surface area, face area, paint, label, fabric |\n| Volume | {{k^3}} | volume, capacity, mass (same material) |\n\nPerimeter is a *length*, so it scales by k, not {{k^2}}. Mass and capacity follow volume as long as the objects are made of the same material.\n\n**Always go through the length scale factor.**\n\n- Given two lengths: find k, then square or cube it.\n- Given two areas: area factor first, then {{k = sqrt(\"area factor\")}}.\n- Given two volumes, masses or capacities: volume factor first, then {{k = cbrt(\"volume factor\")}}.\n\nTo get from **area to volume**, square-root to find k, then cube: area factor 9 ⇒ k = 3 ⇒ volume factor 27. Never apply an area factor to a volume, or the other way round.\n\n**Keep fractions exact.** If two surface areas are 45 cm² and 80 cm², the area factor is {{80/45 = 16/9}}, so {{k = 4/3}} and the volume factor is {{64/27}} — much cleaner than rounding 1.333…\n\n**Models and maps.** A 1 : 50 model has length factor 50, area factor {{50^2 = 2500}} and volume factor {{50^3 = 125 000}}. On a 1 : 25 000 map, 1 cm² represents {{25 000^2 = 625 000 000}} cm² = 62 500 m² (6.25 hectares).\n\n**4MA1 favourites:** similar bottles or containers with given heights and one capacity; similar solids with given surface areas and one volume; the mass of a larger statue; the paint needed for a larger model.",
      diagram: `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cube of edge 1 and a similar cube of edge 2. Length scale factor 2. The front face of the big cube is split into 4 small squares, so the area scale factor is 4. The big cube is made of 8 small cubes, so the volume scale factor is 8."><rect x="0" y="0" width="480" height="290" fill="#ffffff"/><polygon points="40,150 90,150 110,134 60,134" fill="#fde68a" stroke="#1f2937" stroke-width="1.8"/><polygon points="90,150 90,200 110,184 110,134" fill="#fcd34d" stroke="#1f2937" stroke-width="1.8"/><polygon points="40,150 90,150 90,200 40,200" fill="#fef3c7" stroke="#1f2937" stroke-width="1.8"/><polygon points="170,100 270,100 310,68 210,68" fill="#fde68a" stroke="#1f2937" stroke-width="1.8"/><polygon points="270,100 270,200 310,168 310,68" fill="#fcd34d" stroke="#1f2937" stroke-width="1.8"/><polygon points="170,100 270,100 270,200 170,200" fill="#fef3c7" stroke="#1f2937" stroke-width="1.8"/><line x1="220" y1="100" x2="220" y2="200" stroke="#334155" stroke-width="1"/><line x1="170" y1="150" x2="270" y2="150" stroke="#334155" stroke-width="1"/><line x1="220" y1="100" x2="260" y2="68" stroke="#334155" stroke-width="1"/><line x1="190" y1="84" x2="290" y2="84" stroke="#334155" stroke-width="1"/><line x1="270" y1="150" x2="310" y2="118" stroke="#334155" stroke-width="1"/><line x1="290" y1="84" x2="290" y2="184" stroke="#334155" stroke-width="1"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="65" y="220">edge 1</text><text x="220" y="220">edge 2</text><text x="125" y="135" font-size="15" font-weight="bold">× 2 →</text></g><rect x="330" y="60" width="140" height="150" rx="6" fill="#f8fafc" stroke="#334155"/><g font-family="sans-serif" font-size="13" fill="#1f2937"><text x="340" y="86" font-weight="bold"></text><text x="405" y="86" font-weight="bold">factor</text><text x="340" y="120">Length</text><text x="405" y="120">2 = k</text><text x="340" y="154">Area</text><text x="405" y="154">4 = k²</text><text x="340" y="188">Volume</text><text x="405" y="188">8 = k³</text></g><g font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle"><text x="240" y="265">front face: 4 squares · whole cube: 8 small cubes</text></g></svg>`,
      diagramCaption:
        "Double every edge: each face holds 4 of the old faces (area × 4) and the solid holds 8 of the old cubes (volume × 8).",
      workedExamples: [
        {
          title: "Similar bottles",
          problem:
            "Two bottles are mathematically similar. The small bottle is 12 cm tall and holds 400 ml. The large bottle is 18 cm tall. (a) Work out the capacity of the large bottle. (b) The label on the small bottle has area 60 cm². Work out the area of the matching label on the large bottle.",
          steps: [
            "Length scale factor: {{k = 18/12 = 1.5}}.",
            "(a) Capacity is a volume, so multiply by {{k^3 = 1.5^3 = 3.375}}: 400 × 3.375 = 1350 ml.",
            "(b) A label is an area, so multiply by {{k^2 = 1.5^2 = 2.25}}: 60 × 2.25 = 135 cm².",
            "Sense check: only 1.5 times as tall, but more than three times the drink — which is why a 'bigger size' can be better value than it looks.",
          ],
          answer: "(a) 1350 ml (b) 135 cm²",
          yourTurn: {
            question:
              "Your turn: two similar cones have heights 5 cm and 15 cm. The small cone has volume 20 cm³. Work out the volume of the large cone in cm³.",
            answer: { type: "number", value: 540, display: "540 cm³" },
            solution: "k = 15 ÷ 5 = 3, so the volume factor is {{3^3 = 27}}. Volume = 20 × 27 = 540 cm³.",
          },
        },
        {
          title: "From areas to volumes",
          problem:
            "Two solids, A and B, are mathematically similar. A has surface area 45 cm² and B has surface area 80 cm². The volume of B is 128 cm³. Work out the volume of A.",
          steps: [
            "Area factor from A to B: {{80/45 = 16/9}}.",
            "Length factor: {{k = sqrt(16/9) = 4/3}}.",
            "Volume factor: {{k^3 = (4/3)^3 = 64/27}}.",
            "A is the smaller solid, so divide: {{128 / (64/27) = 128 * 27/64 = 54}} cm³.",
            "Check: {{54 * 64/27 = 128}} ✓",
          ],
          answer: "54 cm³",
          yourTurn: {
            question:
              "Your turn: two similar statues are cast from the same bronze. The small statue has mass 2 kg and height 15 cm. The large statue has mass 16 kg. Work out the height of the large statue in cm.",
            answer: { type: "number", value: 30, display: "30 cm" },
            solution:
              "Same material, so mass follows volume: volume factor {{16/2 = 8}}. {{k = cbrt(8) = 2}}. Height = 15 × 2 = 30 cm.",
          },
        },
      ],
      keyPoints: [
        "Lengths × k, areas × {{k^2}}, volumes × {{k^3}}.",
        "Mass and capacity behave like volume (same material); paint, labels and surface area like area; perimeter like length.",
        "From an area factor, {{k = sqrt(\"area factor\")}}; from a volume factor, {{k = cbrt(\"volume factor\")}}.",
        "Area ↔ volume: always pass through k.",
        "Keep factors as exact fractions: {{16/9}} gives {{k = 4/3}} and a volume factor of {{64/27}}.",
        "Check the direction: the bigger shape must get the bigger answer.",
      ],
      whyItWorks:
        "Think of any shape as built from tiny squares (for area) or tiny cubes (for volume). Enlarging by k turns a tiny square of side s into a square of side ks, with area {{(ks)^2 = k^2 s^2}} — every piece is multiplied by {{k^2}}, so the total is too. Each tiny cube becomes {{(ks)^3 = k^3 s^3}}.\n\nFormulas tell the same story. Enlarge a cylinder by k and its volume {{pi r^2 h}} becomes\n\n    {{pi (kr)^2 (kh) = k^3 * pi r^2 h}}\n\nwhile its curved surface area {{2 pi r h}} becomes {{2 pi (kr)(kh) = k^2 * 2 pi r h}}.",
      strategies: ["Find the length scale factor first", "Use exact fractions", "Work backwards", "Estimate first"],
      thinkDeeper:
        "A cake for a round tin 20 cm across uses 300 g of flour. Ravi wants to bake a mathematically similar cake 30 cm across. How much flour does he need? Then explain why a giant ant 100 times longer than a real one could not stand up: its weight grows like {{k^3}}, but the strength of its legs depends on their cross-sectional area, which grows like {{k^2}}.",
    },
  ],
  learn: {
    flashcards: [
      { front: "What does *congruent* mean?", back: "Exactly the same shape and size (reflections allowed). All matching sides and angles are equal." },
      { front: "The four congruence tests for triangles?", back: "SSS, SAS (included angle), ASA/AAS (matching side), RHS." },
      { front: "Why isn't SSA a congruence test?", back: "Two sides and a non-included angle can make two different triangles — the arc for the third side can cut the line twice." },
      { front: "Does AAA prove two triangles congruent?", back: "No. Equal angles give the same shape (similar), but the sizes can differ." },
      { front: "What earns full marks in a congruence proof?", back: "Three pairs of equal sides/angles, each with a reason, then the test named — e.g. 'congruent (SAS)'." },
      { front: "What does *similar* mean?", back: "Same shape: matching angles equal and matching lengths all in the same ratio k." },
      { front: "Quickest way to show two triangles are similar?", back: "Show two pairs of equal angles (with reasons)." },
      { front: "DE ∥ BC inside triangle ABC, AD = 3, DB = 2. Scale factor from ADE to ABC?", back: "{{AB/AD = 5/3}} — use the whole side AB, not the piece DB." },
      { front: "Hourglass: AB ∥ DE, with AE and BD meeting at C. Which vertex matches A?", back: "E (alternate angles). B matches D." },
      { front: "1 m² in cm²?", back: "100 × 100 = 10 000 cm²." },
      { front: "1 m³ in cm³?", back: "{{100^3}} = 1 000 000 cm³." },
      { front: "1 cm² in mm², and 1 cm³ in mm³?", back: "100 mm² and 1000 mm³." },
      { front: "cm³ in a litre? Litres in a m³?", back: "1 litre = 1000 cm³ (and 1 ml = 1 cm³); 1 m³ = 1000 litres." },
      { front: "Length scale factor k. Area and volume scale factors?", back: "{{k^2}} and {{k^3}}." },
      { front: "Volume scale factor 125. Length scale factor?", back: "{{cbrt(125) = 5}}." },
      { front: "Area scale factor 9. Volume scale factor?", back: "{{k = sqrt(9) = 3}}, so the volume factor is {{3^3 = 27}}." },
      { front: "Does perimeter scale by k or by {{k^2}}?", back: "By k — perimeter is a length." },
      { front: "Similar statues of the same metal: masses 2 kg and 54 kg. Ratio of heights?", back: "Mass factor 27 = {{k^3}}, so k = 3: heights in ratio 1 : 3." },
    ],
    mustKnow: [
      "Can I find missing lengths in similar shapes, including nested triangles and the hourglass shape?",
      "Can I convert between units of area (mm², cm², m², km²)?",
      "Can I convert between units of volume and capacity (mm³, cm³, m³, ml, litres)?",
      "Can I find missing areas and volumes in similar shapes using {{k^2}} and {{k^3}}?",
      "Can I work backwards from an area or volume ratio to the length scale factor, and go from an area ratio to a volume ratio?",
      "Can I solve mass, capacity, paint and model problems involving similar objects?",
      "Can I show that two triangles are similar using equal angles, and pair up corresponding sides correctly?",
      "Can I state the congruence tests SSS, SAS, ASA and RHS, and explain why SSA and AAA are not tests?",
      "Can I write a congruence proof with a reason for every statement?",
      "Can I use congruent triangles to prove further facts, such as equal lengths or a right angle?",
    ],
    misconceptions: [
      { wrong: "1 m² = 100 cm².", right: "Square the factor: 1 m² = 100 × 100 = 10 000 cm². (And 1 m³ = 1 000 000 cm³.)" },
      { wrong: "If the lengths double, the volume doubles.", right: "Volume scales by {{k^3}}: doubling every length multiplies the volume by 8 and the area by 4." },
      { wrong: "AAA is a congruence test.", right: "Equal angles only fix the shape. The triangles are similar, and congruent only if a pair of matching sides is also equal." },
      { wrong: "Two sides and any angle prove congruence.", right: "The angle must be between the two sides (SAS). SSA can give two different triangles; RHS is the only exception." },
      { wrong: "In nested triangles the scale factor is {{DB/AD}}.", right: "Compare whole sides of the two triangles: {{AB/AD}}. DB is not a side of either triangle." },
      { wrong: "Matching sides are the ones in the same position on the page.", right: "Match sides by the equal angles they face. One triangle may be rotated or flipped, as in the hourglass." },
      { wrong: "An area ratio of 4 : 9 means a volume ratio of 16 : 81.", right: "Square-root first (lengths 2 : 3), then cube: volumes 8 : 27." },
      { wrong: "Perimeter scales like area.", right: "Perimeter is a length, so it scales by k." },
    ],
    examMistakes: [
      "Using the length or area scale factor for capacity or mass in a 'similar bottles' question — capacity and mass need {{k^3}}.",
      "Dividing by 100 to change cm² to m² (instead of 10 000), or by 1000 to change cm³ to m³ (instead of 1 000 000).",
      "In nested triangles, using the piece DB instead of the whole side AB for the scale factor — or finding AC and forgetting to subtract when the question asks for EC.",
      "Pairing the wrong sides in an hourglass or a flipped triangle, because the two triangles are drawn in different orientations.",
      "Congruence proofs with facts but no reasons, or ending with 'SSA' or 'AAA' — most of the marks are lost.",
      "Rounding the length scale factor early (k = 1.33 instead of {{4/3}}) and losing the accuracy mark on a volume answer.",
    ],
    mnemonics: [
      {
        topic: "SAS",
        device: "The A is sandwiched",
        explanation: "In SAS the A sits between the two S's — the angle must be between the two sides. If it isn't, you have SSA, which is not a test.",
      },
      {
        topic: "Scale factors",
        device: "Length, Area, Volume — 1, 2, 3",
        explanation: "Lengths are in cm (power 1), areas in cm² (power 2), volumes in cm³ (power 3). The power on the unit is the power on k: k, {{k^2}}, {{k^3}}.",
      },
      {
        topic: "Unit conversions",
        device: "The little number tells you",
        explanation: "cm² means square the 100 (10 000); cm³ means cube it (1 000 000). Same rule for mm and km. Small unit, big number.",
      },
    ],
    realWorld: [
      {
        title: "Architects' models",
        detail: "A 1 : 100 model of a new HDB block has lengths 100 times smaller, floor areas 10 000 times smaller and volumes 1 000 000 times smaller than the real building.",
        emoji: "🏢",
      },
      {
        title: "Phone screens",
        detail: "Screens with the same shape are similar. A 6.7-inch screen is about 1.1 times the diagonal of a 6.1-inch one, but has about {{(6.7/6.1)^2}} ≈ 1.21 times the area — over 20% more screen.",
        emoji: "📱",
      },
      {
        title: "Drink sizes",
        detail: "A similar cup only 1.2 times as tall holds {{1.2^3}} ≈ 1.73 times as much — about 73% more drink. Size labels make more sense once you know {{k^3}}.",
        emoji: "🥤",
      },
      {
        title: "Rigid triangles",
        detail: "Roof trusses, cranes and bridges are built from triangles because SSS means three fixed lengths allow only one shape — a triangular frame can't wobble, unlike a rectangle.",
        emoji: "🌉",
      },
    ],
    videos: [
      { title: "Congruent triangles", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+congruent+triangles" },
      { title: "Similar shapes: missing lengths", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+similar+shapes+lengths" },
      { title: "Similar shapes: area and volume", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+similar+shapes+area+and+volume" },
      { title: "Converting area and volume units", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+converting+area+and+volume+units" },
    ],
    formulas: [
      { name: "Linear scale factor", formula: "{{k = \"new length\"/\"old length\"}}", note: "Learn this — not given" },
      { name: "Area scale factor", formula: "new area = {{k^2}} × old area", note: "Learn this — not given" },
      { name: "Volume scale factor (also mass and capacity)", formula: "new volume = {{k^3}} × old volume", note: "Learn this — not given" },
      { name: "Length factor from area or volume factor", formula: "{{k = sqrt(\"area factor\") = cbrt(\"volume factor\")}}", note: "Learn this — not given" },
      { name: "Parallel line in a triangle (DE ∥ BC)", formula: "{{AD/AB = AE/AC = DE/BC}} and {{AD/DB = AE/EC}}", note: "Learn this — not given" },
      { name: "Area units", formula: "1 cm² = 100 mm², 1 m² = 10 000 cm², 1 km² = 1 000 000 m²", note: "Learn this — not given" },
      { name: "Volume units", formula: "1 cm³ = 1000 mm³, 1 m³ = 1 000 000 cm³", note: "Learn this — not given" },
      { name: "Capacity", formula: "1 ml = 1 cm³, 1 litre = 1000 cm³, 1 m³ = 1000 litres", note: "Learn this — not given" },
      { name: "Congruence tests", formula: "SSS, SAS, ASA (or AAS), RHS — not SSA, not AAA", note: "Learn this — not given" },
    ],
  },
};
