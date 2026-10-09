// ---------------------------------------------------------------------------
// Mock Set A — Paper 1H (Edexcel IGCSE 4MA1 Higher style, calculator, 2 hours).
// 30 questions ordered easier → harder: q01–q08 warm-up (grade 4–5),
// q09–q23 core (grade 6–7), q24–q30 challenge (grade 8–9).
// Leans on number, algebraic manipulation, graphs, basic geometry and statistics
// early; harder algebra, trigonometry and calculus late.
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

const CLINIC_HISTOGRAM = `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of waiting times t minutes for 80 patients. Frequency density axis from 0 to 5 with grid lines every 0.2. Bars: 0 to 10 minutes height 1.2; 10 to 15 height 3.6; 15 to 20 height 4.4; 20 to 30 height 2.0; 30 to 50 height 0.4." font-family="sans-serif"><rect x="0" y="0" width="400" height="290" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="50" y1="232" x2="350" y2="232"/><line x1="50" y1="224" x2="350" y2="224"/><line x1="50" y1="216" x2="350" y2="216"/><line x1="50" y1="208" x2="350" y2="208"/><line x1="50" y1="192" x2="350" y2="192"/><line x1="50" y1="184" x2="350" y2="184"/><line x1="50" y1="176" x2="350" y2="176"/><line x1="50" y1="168" x2="350" y2="168"/><line x1="50" y1="152" x2="350" y2="152"/><line x1="50" y1="144" x2="350" y2="144"/><line x1="50" y1="136" x2="350" y2="136"/><line x1="50" y1="128" x2="350" y2="128"/><line x1="50" y1="112" x2="350" y2="112"/><line x1="50" y1="104" x2="350" y2="104"/><line x1="50" y1="96" x2="350" y2="96"/><line x1="50" y1="88" x2="350" y2="88"/><line x1="50" y1="72" x2="350" y2="72"/><line x1="50" y1="64" x2="350" y2="64"/><line x1="50" y1="56" x2="350" y2="56"/><line x1="50" y1="48" x2="350" y2="48"/><line x1="80" y1="40" x2="80" y2="240"/><line x1="110" y1="40" x2="110" y2="240"/><line x1="140" y1="40" x2="140" y2="240"/><line x1="170" y1="40" x2="170" y2="240"/><line x1="200" y1="40" x2="200" y2="240"/><line x1="230" y1="40" x2="230" y2="240"/><line x1="260" y1="40" x2="260" y2="240"/><line x1="290" y1="40" x2="290" y2="240"/><line x1="320" y1="40" x2="320" y2="240"/><line x1="350" y1="40" x2="350" y2="240"/></g><g stroke="#cbd5e1" stroke-width="1"><line x1="50" y1="200" x2="350" y2="200"/><line x1="50" y1="160" x2="350" y2="160"/><line x1="50" y1="120" x2="350" y2="120"/><line x1="50" y1="80" x2="350" y2="80"/><line x1="50" y1="40" x2="350" y2="40"/></g><g fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"><rect x="50" y="192" width="60" height="48"/><rect x="110" y="96" width="30" height="144"/><rect x="140" y="64" width="30" height="176"/><rect x="170" y="160" width="60" height="80"/><rect x="230" y="224" width="120" height="16"/></g><line x1="50" y1="240" x2="360" y2="240" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="240" x2="50" y2="30" stroke="#1f2937" stroke-width="1.5"/><g font-size="11" fill="#1f2937" text-anchor="middle"><text x="50" y="255">0</text><text x="110" y="255">10</text><text x="170" y="255">20</text><text x="230" y="255">30</text><text x="290" y="255">40</text><text x="350" y="255">50</text></g><g font-size="11" fill="#1f2937" text-anchor="end"><text x="44" y="244">0</text><text x="44" y="204">1</text><text x="44" y="164">2</text><text x="44" y="124">3</text><text x="44" y="84">4</text><text x="44" y="44">5</text></g><text x="200" y="280" font-size="12" fill="#1f2937" text-anchor="middle">Waiting time, t (minutes)</text><text x="16" y="140" font-size="12" fill="#1f2937" text-anchor="middle" transform="rotate(-90 16 140)">Frequency density</text></svg>`;

const SECTOR = `<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A sector OAB of a circle with centre O and radius 9 cm. The angle AOB at the centre is 140 degrees." font-family="sans-serif"><rect x="0" y="0" width="440" height="230" fill="#ffffff"/><path d="M220 200 L332.76 158.96 A120 120 0 0 0 107.24 158.96 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M248.19 189.74 A30 30 0 0 0 191.81 189.74" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="220" cy="200" r="3" fill="#1f2937"/><g font-size="13" fill="#1f2937"><text x="220" y="218" text-anchor="middle">O</text><text x="342" y="160">A</text><text x="88" y="160">B</text><text x="220" y="172" text-anchor="middle">140°</text><text x="292" y="196">9 cm</text></g><text x="432" y="224" font-size="11" fill="#1f2937" text-anchor="end">Diagram NOT accurately drawn</text></svg>`;

const BOAT_BEARINGS = `<svg viewBox="0 0 360 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch of a boat's journey. From A the boat sails 12 km on a bearing of 070 degrees to B, then 9 km on a bearing of 160 degrees to C. North lines are drawn at A and B. A dashed line joins A to C." font-family="sans-serif"><rect x="0" y="0" width="360" height="290" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><line x1="60" y1="200" x2="60" y2="112"/><line x1="217.9" y1="142.5" x2="217.9" y2="62"/></g><polygon points="60,102 55,114 65,114" fill="#334155"/><polygon points="217.9,52 212.9,64 222.9,64" fill="#334155"/><line x1="60" y1="200" x2="217.9" y2="142.5" stroke="#1f2937" stroke-width="2"/><line x1="217.9" y1="142.5" x2="261" y2="260.9" stroke="#1f2937" stroke-width="2"/><line x1="60" y1="200" x2="261" y2="260.9" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M60 170 A30 30 0 0 1 88.19 189.74" fill="none" stroke="#334155" stroke-width="1.5"/><path d="M217.9 112.5 A30 30 0 0 1 228.16 170.69" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="60" cy="200" r="3.5" fill="#1f2937"/><circle cx="217.9" cy="142.5" r="3.5" fill="#1f2937"/><circle cx="261" cy="260.9" r="3.5" fill="#1f2937"/><g font-size="12" fill="#1f2937"><text x="60" y="96" text-anchor="middle">N</text><text x="217.9" y="46" text-anchor="middle">N</text><text x="68" y="160">070°</text><text x="236" y="118">160°</text><text x="44" y="214" font-size="13">A</text><text x="206" y="138" font-size="13">B</text><text x="268" y="270" font-size="13">C</text><text x="128" y="158" text-anchor="middle" transform="rotate(-20 128 158)">12 km</text><text x="252" y="200">9 km</text><text x="352" y="284" text-anchor="end" font-size="11">Not to scale</text></g></svg>`;

const TRIANGLE_PQR = `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle PQR with PQ = 12 cm along the bottom, PR = 7 cm and QR = 8 cm. The angle at R, opposite the 12 cm side, is the largest angle." font-family="sans-serif"><rect x="0" y="0" width="440" height="260" fill="#ffffff"/><polygon points="40,220 400,220 201.3,85.5" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><g font-size="13" fill="#1f2937"><text x="26" y="236">P</text><text x="404" y="236">Q</text><text x="196" y="76">R</text><text x="220" y="242" text-anchor="middle">12 cm</text><text x="104" y="144" text-anchor="end">7 cm</text><text x="314" y="144">8 cm</text></g><text x="432" y="256" font-size="11" fill="#1f2937" text-anchor="end">Diagram NOT accurately drawn</text></svg>`;

const CIRCLE_TANGENT = `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with centre O. A, B and C are points on the circle. The line ST is the tangent to the circle at A, with T on the right. Angle TAB is 64 degrees and angle ABC is 66 degrees. Lines OB and OC are drawn." font-family="sans-serif"><rect x="0" y="0" width="400" height="300" fill="#ffffff"/><circle cx="200" cy="160" r="100" fill="#f8fafc" stroke="#1f2937" stroke-width="2"/><line x1="60" y1="260" x2="350" y2="260" stroke="#1f2937" stroke-width="2"/><polygon points="200,260 278.8,98.4 125.7,93.1" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="200" y1="160" x2="278.8" y2="98.4" stroke="#334155" stroke-width="1.5"/><line x1="200" y1="160" x2="125.7" y2="93.1" stroke="#334155" stroke-width="1.5"/><path d="M230 260 A30 30 0 0 0 213.15 233.04" fill="none" stroke="#334155" stroke-width="1.5"/><path d="M269.6 117.3 A21 21 0 0 1 257.8 97.7" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="200" cy="160" r="3" fill="#1f2937"/><g font-size="13" fill="#1f2937"><text x="190" y="178">O</text><text x="196" y="280">A</text><text x="284" y="94">B</text><text x="108" y="88">C</text><text x="52" y="278">S</text><text x="346" y="278">T</text><text x="234" y="248" font-size="12">64°</text><text x="254" y="140" font-size="12" text-anchor="middle">66°</text></g><text x="392" y="296" font-size="11" fill="#1f2937" text-anchor="end">Diagram NOT accurately drawn</text></svg>`;

export const paper: ExamPaper = {
  id: "exam-1a",
  title: "Mock Set A — Paper 1H",
  calculator: true,
  minutes: 120,
  questions: [
    // ============================ WARM-UP (q01–q08) ==========================
    {
      kind: "short",
      id: "exam-1a-q01",
      topicId: "number-bounds",
      guideRef: "prime-factors-hcf-lcm",
      difficulty: "warmup",
      question:
        "Two warning lights on a Sentosa jetty both flash at exactly 9 pm.\n\nOne light flashes every 84 seconds. The other flashes every 120 seconds.\n\nAfter how many **minutes** will the two lights next flash at the same time?",
      answer: { type: "number", value: 14, display: "14 minutes" },
      traps: [
        { spec: { type: "number", value: 840 }, feedback: "840 is right — but that's in seconds. The question asks for minutes." },
        { spec: { type: "number", value: 168 }, feedback: "84 × 120 is a common multiple, but not the *lowest* one. Use prime factors to find the LCM." },
        { spec: { type: "number", value: 12 }, feedback: "12 is the HCF of 84 and 120. 'Next time together' needs the LCM." },
      ],
      solution: [
        "84 = {{2^2 * 3 * 7}} and 120 = {{2^3 * 3 * 5}}.",
        "LCM = take the highest power of each prime: {{2^3 * 3 * 5 * 7}} = 840 seconds.",
        "840 ÷ 60 = **14 minutes**.",
      ],
      commonError: "Finding the HCF (12) instead of the LCM, or forgetting to convert seconds to minutes.",
      hints: [
        "You want a time that is a multiple of both 84 and 120 — the smallest one.",
        "Write 84 and 120 as products of prime factors, then take the highest power of each prime.",
      ],
      strategy: "Use prime factors",
    },
    {
      kind: "short",
      id: "exam-1a-q02",
      topicId: "fractions-percentages",
      guideRef: "reverse-percentages",
      difficulty: "warmup",
      question:
        "Mei buys a laptop in Singapore. The price **including** 9% GST is $1406.10.\n\nWork out the price of the laptop **before** GST was added.",
      answer: { type: "number", value: 1290, display: "$1290" },
      traps: [
        { spec: { type: "number", value: 1279.55, tolerance: 0.01 }, feedback: "You took 9% of $1406.10 off. But the 9% was added to the *original* price, not to $1406.10. Divide by 1.09 instead." },
      ],
      solution: [
        "Original price × 1.09 = 1406.10",
        "Original price = 1406.10 ÷ 1.09 = **$1290**.",
        "Check: 1290 × 1.09 = 1406.10 ✓",
      ],
      commonError: "Subtracting 9% of the new price, which gives $1279.55.",
      hints: [
        "$1406.10 is 109% of the original price.",
        "So the original price × 1.09 = 1406.10. Undo the multiplication.",
      ],
      strategy: "Use the inverse",
    },
    {
      kind: "mcq",
      id: "exam-1a-q03",
      topicId: "statistics",
      guideRef: "averages-raw-data",
      difficulty: "warmup",
      question:
        "In a Year 11 mock exam, class 11R has 12 students with a mean mark of 64. Class 11T has 18 students with a mean mark of 59.\n\nWhat is the mean mark of all 30 students?",
      options: ["915", "61.5", "61", "62"],
      answerIndex: 2,
      explanation:
        "Total marks = 12 × 64 + 18 × 59 = 768 + 1062 = 1830, and 1830 ÷ 30 = 61. The answer 61.5 is the mean of the two means — that ignores the fact that 11T is bigger, so its mean should count for more. 62 comes from swapping the class sizes, and 915 divides the total by the number of classes instead of the number of students.",
      hints: ["Find the total of all the marks first: (number of students) × (mean) for each class."],
      strategy: "Work backwards",
    },
    {
      kind: "short",
      id: "exam-1a-q04",
      topicId: "expand-factorise",
      guideRef: "expanding-brackets",
      difficulty: "warmup",
      question: "Expand and simplify fully\n\n{{(2x - 3)(x + 5) - (x - 4)^2}}",
      answer: { type: "expression", expr: "x^2+15x-31", form: "expanded" },
      traps: [
        { spec: { type: "expression", expr: "x^2-x+1" }, feedback: "The minus sign in front of {{(x - 4)^2}} applies to every term: {{-(x^2 - 8x + 16) = -x^2 + 8x - 16}}." },
        { spec: { type: "expression", expr: "x^2+15x+1" }, feedback: "Nearly — check the constant. {{-(+16)}} is −16, so −15 − 16 = −31." },
        { spec: { type: "expression", expr: "x^2+7x+1" }, feedback: "{{(x - 4)^2}} is not {{x^2 + 16}} or {{x^2 - 16}} — write it as (x − 4)(x − 4) and you get a middle term −8x." },
      ],
      solution: [
        "{{(2x - 3)(x + 5) = 2x^2 + 10x - 3x - 15 = 2x^2 + 7x - 15}}",
        "{{(x - 4)^2 = x^2 - 8x + 16}}",
        "Subtract the whole bracket: {{2x^2 + 7x - 15 - x^2 + 8x - 16}}",
        "= **{{x^2 + 15x - 31}}**",
      ],
      commonError: "Only subtracting the first term of {{(x - 4)^2}}, or writing {{(x - 4)^2 = x^2 + 16}}.",
      hints: [
        "Expand each part separately, then put a bracket round the second one before subtracting.",
      ],
    },
    {
      kind: "short",
      id: "exam-1a-q05",
      topicId: "angles-circle-theorems",
      guideRef: "polygons",
      difficulty: "warmup",
      question:
        "Each interior angle of a regular polygon is 156°.\n\nWork out the number of sides of the polygon.",
      answer: { type: "number", value: 15 },
      traps: [
        { spec: { type: "number", value: 24 }, feedback: "24° is the size of each *exterior* angle. Now use the fact that the exterior angles add up to 360°." },
      ],
      solution: [
        "Exterior angle = 180° − 156° = 24°.",
        "The exterior angles of any polygon add up to 360°, so n = 360 ÷ 24 = **15**.",
      ],
      commonError: "Stopping at the exterior angle, 24°.",
      hints: [
        "Interior and exterior angles at each vertex lie on a straight line. What do the exterior angles add up to?",
      ],
    },
    {
      kind: "short",
      id: "exam-1a-q06",
      topicId: "ratio-proportion",
      guideRef: "ratio-basics",
      difficulty: "warmup",
      question:
        "Arjun, Mei and Zara share $620.\n\nThe ratio of Arjun's share to Mei's share is 3 : 4.\nThe ratio of Mei's share to Zara's share is 6 : 5.\n\nWork out how much each person gets. Give your answers in the order Arjun, Mei, Zara.",
      answer: { type: "list", values: [180, 240, 200], ordered: true, display: "Arjun $180, Mei $240, Zara $200" },
      traps: [
        { spec: { type: "list", values: [155, 206.67, 258.33], ordered: true, tolerance: 0.01 }, feedback: "You can't just join the ratios as 3 : 4 : 5 — Mei's part is 4 in one and 6 in the other. Make Mei's parts equal first." },
      ],
      solution: [
        "Mei is 4 in the first ratio and 6 in the second. Make both 12: A : M = 9 : 12 and M : Z = 12 : 10.",
        "So A : M : Z = 9 : 12 : 10, which is 31 parts.",
        "One part = 620 ÷ 31 = $20.",
        "Arjun = 9 × 20 = **$180**, Mei = 12 × 20 = **$240**, Zara = 10 × 20 = **$200**.",
      ],
      commonError: "Writing the combined ratio as 3 : 4 : 5 without matching Mei's parts.",
      hints: [
        "Mei appears in both ratios. Scale them so Mei's number is the same in both (LCM of 4 and 6).",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "short",
      id: "exam-1a-q07",
      topicId: "linear-graphs",
      guideRef: "y-mx-c",
      difficulty: "warmup",
      question:
        "The line L passes through the points (−2, 7) and (4, −5).\n\nFind an equation of L.",
      answer: { type: "equation", eq: "2x+y-3=0", display: "y = −2x + 3" },
      traps: [
        { spec: { type: "equation", eq: "y=2x+11" }, feedback: "Check the sign of the gradient: going from x = −2 to x = 4 the y-value *falls* from 7 to −5, so the gradient is negative." },
        { spec: { type: "equation", eq: "y=-0.5x+6" }, feedback: "Gradient = change in y ÷ change in x, not change in x ÷ change in y." },
      ],
      solution: [
        "Gradient m = {{(-5 - 7)/(4 - (-2))}} = {{(-12)/6}} = −2.",
        "Use (−2, 7): 7 = −2 × (−2) + c, so 7 = 4 + c and c = 3.",
        "**y = −2x + 3**",
      ],
      commonError: "Calculating the gradient upside down (change in x over change in y).",
      hints: [
        "First find the gradient: (change in y) ÷ (change in x).",
        "Then substitute one of the points into y = mx + c to find c.",
      ],
    },
    {
      kind: "mcq",
      id: "exam-1a-q08",
      topicId: "sets-venn",
      guideRef: "set-notation",
      difficulty: "warmup",
      question:
        "ξ = {integers from 1 to 20}\n\nA = {multiples of 3}\nB = {factors of 36}\n\nWhich of these is the set A ∩ B?",
      options: ["{3, 6, 9, 12, 18}", "{3, 6, 9, 12, 18, 36}", "{1, 2, 3, 4, 6, 9, 12, 18}", "{3, 6, 9, 12, 15, 18}"],
      answerIndex: 0,
      explanation:
        "A ∩ B means elements in **both** sets. A = {3, 6, 9, 12, 15, 18} (only up to 20) and B = {1, 2, 3, 4, 6, 9, 12, 18} (36 itself is not in ξ). The common elements are 3, 6, 9, 12, 18. Including 36 forgets the universal set stops at 20; {3, 6, 9, 12, 15, 18} is just A (15 is not a factor of 36); and {1, 2, 3, 4, 6, 9, 12, 18} is just B.",
      hints: ["List A and B separately — but only using numbers from 1 to 20 — then pick out the numbers in both."],
    },

    // ============================ CORE (q09–q23) ============================
    {
      kind: "short",
      id: "exam-1a-q09",
      topicId: "indices-surds",
      guideRef: "standard-form",
      difficulty: "core",
      question:
        "An adult has about 5.0 litres of blood.\n\nEach cubic millimetre (mm³) of blood contains about {{5.2 * 10^6}} red blood cells.\n\n1 litre = 1 000 000 mm³.\n\nWork out an estimate for the total number of red blood cells in the adult's blood. Give your answer in standard form.",
      answer: { type: "number", value: 2.6e13, standardForm: true, display: "{{2.6 * 10^13}}" },
      traps: [
        { spec: { type: "number", value: 2.6e7, standardForm: true }, feedback: "You multiplied 5.0 by the number of cells per mm³ — but 5.0 is in litres. Convert the blood volume to mm³ first." },
        { spec: { type: "number", value: 2.6e10, standardForm: true }, feedback: "1 litre is 1 000 000 mm³ (a litre is 1000 cm³ and each cm³ is 1000 mm³), not 1000 mm³." },
      ],
      solution: [
        "Volume in mm³ = 5.0 × 1 000 000 = {{5 * 10^6}} mm³.",
        "Number of cells = {{5 * 10^6 * 5.2 * 10^6}} = {{26 * 10^12}}.",
        "In standard form: **{{2.6 * 10^13}}**.",
      ],
      commonError: "Leaving the answer as {{26 * 10^12}}, which is not standard form (26 is not between 1 and 10).",
      hints: [
        "The cell count is given per mm³, so the volume must be in mm³ too.",
        "Multiply the number parts and add the powers of 10, then make sure the front number is between 1 and 10.",
      ],
    },
    {
      kind: "short",
      id: "exam-1a-q10",
      topicId: "statistics",
      guideRef: "histograms",
      difficulty: "core",
      question:
        "The histogram shows information about the waiting times, t minutes, of 80 patients at a polyclinic.\n\nWork out an estimate for the number of patients who waited **more than 25 minutes**.",
      diagram: CLINIC_HISTOGRAM,
      answer: { type: "number", value: 18 },
      traps: [
        { spec: { type: "number", value: 28 }, feedback: "You included the whole of the 20–30 class. Only the part from 25 to 30 minutes counts — half that bar." },
        { spec: { type: "number", value: 2.4, tolerance: 0.001 }, feedback: "Bar heights are frequency *densities*, not frequencies. Frequency = frequency density × class width." },
      ],
      solution: [
        "Frequency = frequency density × class width.",
        "20 < t ≤ 30: 2.0 × 10 = 20 patients. Assuming they are spread evenly, the part from 25 to 30 is half: 10 patients.",
        "30 < t ≤ 50: 0.4 × 20 = 8 patients.",
        "Estimate = 10 + 8 = **18** patients.",
        "(Check the total: 12 + 18 + 22 + 20 + 8 = 80 ✓)",
      ],
      commonError: "Reading the bar heights as frequencies.",
      hints: [
        "In a histogram, the *area* of each bar represents the frequency.",
        "Which bars lie (partly) above 25 minutes? For the 20–30 bar, only the area from 25 to 30 counts.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-1a-q11",
      topicId: "solving-equations",
      guideRef: "linear-equations",
      difficulty: "core",
      question: "Solve\n\n{{(3x - 1)/4 - (x + 2)/3 = 1}}\n\nShow clear algebraic working.",
      answer: { type: "number", value: 4.6, display: "x = 4.6 (= {{23/5}})" },
      traps: [
        { spec: { type: "number", value: 2.4 }, feedback: "When you multiply through by 12, the right-hand side becomes 12 too — every term gets multiplied." },
        { spec: { type: "number", value: 1.4 }, feedback: "Careful with −4(x + 2): it is −4x **− 8**, not −4x + 8." },
      ],
      solution: [
        "Multiply every term by 12: 3(3x − 1) − 4(x + 2) = 12",
        "9x − 3 − 4x − 8 = 12",
        "5x − 11 = 12, so 5x = 23",
        "**x = {{23/5}} = 4.6**",
      ],
      commonError: "Forgetting to multiply the right-hand side by 12, or writing −4(x + 2) as −4x + 8.",
      hints: [
        "Clear the fractions: what is the lowest common multiple of 4 and 3?",
        "Multiply **every** term (including the 1) by 12, and keep the second numerator in a bracket.",
      ],
    },
    {
      kind: "mcq",
      id: "exam-1a-q12",
      topicId: "vectors-transformations",
      guideRef: "combined-transformations",
      difficulty: "core",
      question:
        "Shape P is reflected in the line y = x to give shape Q.\n\nShape Q is then reflected in the x-axis to give shape R.\n\nWhich **single** transformation maps P onto R?",
      options: [
        "Rotation 90° anticlockwise about (0, 0)",
        "Rotation 90° clockwise about (0, 0)",
        "Rotation 180° about (0, 0)",
        "Reflection in the line y = −x",
      ],
      answerIndex: 1,
      explanation:
        "Track a point such as (2, 1). Reflecting in y = x swaps the coordinates: (1, 2). Reflecting in the x-axis changes the sign of y: (1, −2). So (x, y) → (y, −x), which is a rotation of 90° clockwise about the origin. The anticlockwise rotation would send (2, 1) to (−1, 2), the 180° rotation to (−2, −1), and the reflection in y = −x to (−1, −2). (Two reflections in lines that cross always give a rotation, never a reflection.)",
      hints: [
        "Pick a simple point, e.g. (2, 1), and follow it through both reflections.",
        "Compare where it ends up with what each option would do to (2, 1).",
      ],
      strategy: "Try small cases",
    },
    {
      kind: "short",
      id: "exam-1a-q13",
      topicId: "mensuration",
      guideRef: "circles-arcs-sectors",
      difficulty: "core",
      question:
        "OAB is a sector of a circle with centre O and radius 9 cm. Angle AOB = 140°.\n\nWork out the perimeter of the sector. Give your answer in the form {{a + b pi}}, where a and b are integers.",
      diagram: SECTOR,
      answer: { type: "expression", expr: "18+7pi", display: "{{(18 + 7 pi)}} cm" },
      traps: [
        { spec: { type: "expression", expr: "7pi" }, feedback: "That's just the arc. The perimeter also includes the two radii, OA and OB." },
        { spec: { type: "expression", expr: "31.5pi" }, feedback: "That's the *area* of the sector. Perimeter uses the circumference, {{2 pi r}}." },
        { spec: { type: "expression", expr: "9+7pi" }, feedback: "A sector has **two** straight edges, each 9 cm." },
      ],
      solution: [
        "Arc length = {{140/360 * 2 pi * 9}} = {{140/360 * 18 pi}} = {{7 pi}} cm.",
        "Perimeter = arc + two radii = {{7 pi}} + 9 + 9 = **{{18 + 7 pi}}** cm.",
      ],
      commonError: "Giving only the arc length and forgetting the two radii.",
      hints: [
        "The perimeter goes all the way round: two straight edges and one curved arc.",
        "Arc length is a fraction of the full circumference: {{140/360 * 2 pi r}}.",
      ],
    },
    {
      kind: "short",
      id: "exam-1a-q14",
      topicId: "pythagoras-trigonometry",
      guideRef: "bearings-elevation",
      difficulty: "core",
      question:
        "A boat sails 12 km from A on a bearing of 070° to B.\n\nIt then sails 9 km from B on a bearing of 160° to C.\n\nCalculate the bearing of A from C. Give your answer to the nearest degree.",
      diagram: BOAT_BEARINGS,
      answer: { type: "number", value: 287, tolerance: 0.5, display: "287°" },
      traps: [
        { spec: { type: "number", value: 107, tolerance: 0.5 }, feedback: "107° is the bearing of C *from A*. The bearing of A from C is measured at C — add 180°." },
        { spec: { type: "number", value: 37, tolerance: 0.5 }, feedback: "37° is angle BAC inside the triangle — it isn't a bearing yet. Bearings are measured clockwise from North." },
      ],
      solution: [
        "The bearings of the two legs differ by 160° − 70° = 90°, so the boat turns through a right angle at B: angle ABC = 90°.",
        "In right-angled triangle ABC: tan(BAC) = {{9/12}}, so angle BAC = 36.87°.",
        "Bearing of C from A = 70° + 36.87° = 106.87°.",
        "Bearing of A from C = 106.87° + 180° = 286.87° ≈ **287°**.",
      ],
      commonError: "Giving the bearing of C from A (107°) instead of A from C.",
      hints: [
        "Compare the two bearings, 070° and 160°. What is the angle at B?",
        "Use trigonometry in the right-angled triangle to find angle BAC, then the bearing of C from A.",
        "A back bearing differs by 180°.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-1a-q15",
      topicId: "probability",
      guideRef: "tree-diagrams",
      difficulty: "core",
      question:
        "A bag contains 5 red counters, 3 green counters and 2 yellow counters.\n\nSiti takes a counter at random and does **not** replace it. She then takes a second counter at random.\n\nWork out the probability that the two counters are **different** colours. Give your answer as a fraction in its simplest form.",
      answer: { type: "fraction", n: 31, d: 45, simplest: true },
      traps: [
        { spec: { type: "fraction", n: 31, d: 50 }, feedback: "That's the answer *with* replacement. Without replacement the second pick is out of 9 counters, not 10." },
        { spec: { type: "fraction", n: 14, d: 45 }, feedback: "That's the probability of the *same* colour. You need 1 minus this." },
      ],
      solution: [
        "P(both red) = {{5/10 * 4/9 = 20/90}}",
        "P(both green) = {{3/10 * 2/9 = 6/90}}",
        "P(both yellow) = {{2/10 * 1/9 = 2/90}}",
        "P(same colour) = {{28/90}}, so P(different) = 1 − {{28/90}} = {{62/90}} = **{{31/45}}**.",
      ],
      solutions: [
        {
          label: "Method 2: add up the 'different' branches",
          steps: [
            "P(R then not R) = {{5/10 * 5/9 = 25/90}}; P(G then not G) = {{3/10 * 7/9 = 21/90}}; P(Y then not Y) = {{2/10 * 8/9 = 16/90}}.",
            "Total = {{62/90 = 31/45}}. Using 1 − P(same) is quicker: three branches instead of six.",
          ],
        },
      ],
      commonError: "Keeping the denominator as 10 for the second counter.",
      hints: [
        "Is it quicker to find P(different) directly, or 1 − P(same)?",
        "After one counter is taken, how many are left in the bag — and how many of that colour?",
      ],
      strategy: "Use the complement",
    },
    {
      kind: "short",
      id: "exam-1a-q16",
      topicId: "quadratic-equations",
      guideRef: "quadratic-formula",
      difficulty: "core",
      question:
        "Solve {{3x^2 - 5x - 4 = 0}}\n\nShow your working clearly. Give your solutions correct to 3 significant figures.",
      answer: { type: "list", values: [2.26, -0.591], ordered: false, tolerance: 0.0006, display: "x = 2.26 or x = −0.591" },
      traps: [
        { spec: { type: "list", values: [-2.26, 0.591], ordered: false, tolerance: 0.0006 }, feedback: "Sign slip: the formula starts with −b, and b = −5, so −b = +5." },
      ],
      solution: [
        "a = 3, b = −5, c = −4.",
        "{{x = (5 +- sqrt((-5)^2 - 4 * 3 * (-4)))/(2 * 3) = (5 +- sqrt(73))/6}}",
        "x = (5 + 8.544…) ÷ 6 = 2.2573… ≈ **2.26**",
        "x = (5 − 8.544…) ÷ 6 = −0.59066… ≈ **−0.591**",
      ],
      commonError: "Using −b = −5, or dividing only the square root by 2a.",
      hints: [
        "It doesn't factorise — use the quadratic formula.",
        "Careful: b = −5, so −b = 5, and {{b^2 - 4ac = 25 + 48}}.",
      ],
    },
    {
      kind: "short",
      id: "exam-1a-q17",
      topicId: "inequalities",
      guideRef: "linear-inequalities",
      difficulty: "core",
      question: "Solve the inequality\n\n−7 ≤ 3 − 2x < 9",
      answer: { type: "inequality", ineq: "-3<x<=5", display: "−3 < x ≤ 5" },
      traps: [
        { spec: { type: "inequality", ineq: "-3<=x<5" }, feedback: "When you divide by −2 the inequality signs reverse — and they take their 'or equal to' with them. The ≤ belongs with the 5." },
      ],
      solution: [
        "Subtract 3 from all three parts: −10 ≤ −2x < 6",
        "Divide all parts by −2 and **reverse** the signs: 5 ≥ x > −3",
        "Write it the usual way round: **−3 < x ≤ 5**",
      ],
      commonError: "Forgetting to reverse the inequality signs when dividing by a negative number.",
      hints: [
        "Do the same thing to all three parts to get the x-term on its own in the middle.",
        "Dividing by a negative number reverses the inequality signs.",
      ],
    },
    {
      kind: "short",
      id: "exam-1a-q18",
      topicId: "functions",
      guideRef: "composite-functions",
      difficulty: "core",
      question:
        "f(x) = 5 − 2x and g(x) = {{x^2 + 1}}\n\nSolve gf(x) = 10",
      answer: { type: "list", values: [1, 4], ordered: false, display: "x = 1 or x = 4" },
      traps: [
        { spec: { type: "list", values: [1], ordered: false }, feedback: "A square of 9 can come from +3 **or** −3. There are two solutions." },
      ],
      solution: [
        "gf(x) means g(f(x)): do f first. gf(x) = {{(5 - 2x)^2 + 1}}.",
        "{{(5 - 2x)^2 + 1 = 10}}, so {{(5 - 2x)^2 = 9}}.",
        "5 − 2x = 3 or 5 − 2x = −3",
        "**x = 1** or **x = 4**",
      ],
      commonError: "Working out fg(x) = 5 − 2(x² + 1) instead — that equation has no solutions, which is a clue something is wrong.",
      hints: [
        "gf(x) = g(f(x)) — put the whole of f(x) into g.",
        "You should get a squared bracket equal to 9. What numbers square to 9?",
      ],
    },
    {
      kind: "short",
      id: "exam-1a-q19",
      topicId: "similarity-congruence",
      guideRef: "area-volume-scale",
      difficulty: "core",
      question:
        "Two vases are mathematically similar.\n\nThe smaller vase has a surface area of 180 cm² and a volume of 640 cm³.\n\nThe larger vase has a surface area of 405 cm².\n\nWork out the volume of the larger vase in cm³.",
      answer: { type: "number", value: 2160, display: "2160 cm³" },
      traps: [
        { spec: { type: "number", value: 1440 }, feedback: "You multiplied the volume by the *area* scale factor (2.25). Volumes scale by the linear scale factor **cubed**." },
        { spec: { type: "number", value: 960 }, feedback: "You used the linear scale factor 1.5 on a volume. Volumes scale by 1.5³." },
      ],
      solution: [
        "Area scale factor = 405 ÷ 180 = 2.25.",
        "Linear scale factor = √2.25 = 1.5.",
        "Volume scale factor = {{1.5^3}} = 3.375.",
        "Volume = 640 × 3.375 = **2160 cm³**.",
      ],
      commonError: "Using the area scale factor directly on the volume.",
      hints: [
        "Area scale factor = {{k^2}} and volume scale factor = {{k^3}}, where k is the length scale factor.",
        "Find k from the areas first.",
      ],
    },
    {
      kind: "short",
      id: "exam-1a-q20",
      topicId: "further-trigonometry",
      guideRef: "cosine-rule",
      difficulty: "core",
      question:
        "In triangle PQR, PQ = 12 cm, PR = 7 cm and QR = 8 cm.\n\nCalculate the size of angle PRQ. Give your answer correct to 1 decimal place.",
      diagram: TRIANGLE_PQR,
      answer: { type: "number", value: 106.1, tolerance: 0.05, display: "106.1°" },
      traps: [
        { spec: { type: "number", value: 73.9, tolerance: 0.05 }, feedback: "Your cosine came out positive. Check the order: {{cos R = (7^2 + 8^2 - 12^2)/(2 * 7 * 8)}} — the side opposite R is subtracted, which makes the cosine negative (obtuse angle)." },
      ],
      solution: [
        "Angle R is opposite PQ = 12 cm, so use {{cos R = (p^2 + q^2 - r^2)/(2pq)}} with the two sides next to R.",
        "{{cos R = (7^2 + 8^2 - 12^2)/(2 * 7 * 8) = (49 + 64 - 144)/112 = -31/112}}",
        "R = {{cos^(-1)}}(−0.27678…) = 106.068…° ≈ **106.1°**",
      ],
      commonError: "Putting the wrong side last (subtracting a side next to the angle), giving an acute angle.",
      hints: [
        "You know all three sides and want an angle — which rule?",
        "The side you subtract in the cosine rule is the one **opposite** the angle you want.",
      ],
    },
    {
      kind: "mcq",
      id: "exam-1a-q21",
      topicId: "graphs-of-functions",
      guideRef: "graph-transformations",
      difficulty: "core",
      question:
        "The graph of y = f(x) has a minimum point at (3, −2).\n\nWhat are the coordinates of the minimum point of the graph of y = f(x + 4) + 3?",
      options: ["(7, 1)", "(−1, −5)", "(7, −5)", "(−1, 1)"],
      answerIndex: 3,
      explanation:
        "f(x + 4) moves the graph 4 units to the **left** (x → x − 4), and + 3 outside moves it 3 units **up**. So (3, −2) → (3 − 4, −2 + 3) = (−1, 1). (7, 1) is the classic slip of moving right for + 4 inside the bracket; (−1, −5) moves down instead of up; (7, −5) gets both directions wrong.",
      hints: [
        "A change inside the bracket affects x and works 'the opposite way'.",
        "A change outside the bracket affects y and works the way it looks.",
      ],
    },
    {
      kind: "short",
      id: "exam-1a-q22",
      topicId: "sequences",
      guideRef: "arithmetic-series",
      difficulty: "core",
      question:
        "The 4th term of an arithmetic series is 23.\n\nThe sum of the first 10 terms of the series is 275.\n\nFind the least number of terms of the series that must be added together for the sum to be **greater than 1000**.",
      answer: { type: "number", value: 22 },
      traps: [
        { spec: { type: "number", value: 21 }, feedback: "Check: the sum of 21 terms is 924, which is not yet more than 1000. Round **up**." },
      ],
      solution: [
        "a + 3d = 23 and {{10/2 (2a + 9d) = 275}}, so 2a + 9d = 55.",
        "Double the first: 2a + 6d = 46. Subtract: 3d = 9, so d = 3 and a = 14.",
        "{{S_n = n/2 (28 + 3(n - 1)) = n/2 (3n + 25)}}. Solve {{n/2 (3n + 25) > 1000}}: {{3n^2 + 25n - 2000 > 0}}.",
        "The positive root is n = {{(-25 + sqrt(24625))/6}} ≈ 21.99, so n must be at least 22.",
        "Check: {{S_21}} = 924 and {{S_22}} = 1001. So the answer is **22**.",
      ],
      commonError: "Rounding 21.99 down to 21 — 21 terms only give 924.",
      hints: [
        "Use the two facts to write two simultaneous equations in a and d.",
        "Once you know a and d, write {{S_n}} in terms of n and set it greater than 1000.",
        "Solve the quadratic, then test the whole numbers either side of the root.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "mcq",
      id: "exam-1a-q23",
      topicId: "number-bounds",
      guideRef: "bounds-calculations",
      difficulty: "core",
      question:
        "Kenji runs a distance of 120 m, measured to the nearest 5 m.\n\nHis time is 14.2 seconds, measured to the nearest 0.1 second.\n\nWhich calculation gives the **upper bound** of his average speed?",
      options: ["122.5 ÷ 14.25", "117.5 ÷ 14.15", "122.5 ÷ 14.15", "125 ÷ 14.1"],
      answerIndex: 2,
      explanation:
        "Speed = distance ÷ time. To make a quotient as large as possible, use the **largest** distance (upper bound 122.5 m) and the **smallest** time (lower bound 14.15 s): 122.5 ÷ 14.15 = 8.66 m/s (3 s.f.). 122.5 ÷ 14.25 uses the upper bound for both, which makes the answer smaller. 125 ÷ 14.1 adds the whole 5 m and 0.1 s instead of half of each.",
      hints: [
        "Find the bounds first: half of 5 m, and half of 0.1 s, either side.",
        "Dividing by a smaller number gives a bigger answer.",
      ],
      strategy: "Consider extremes",
    },

    // ========================= CHALLENGE (q24–q30) ===========================
    {
      kind: "written",
      id: "exam-1a-q24",
      topicId: "calculus",
      guideRef: "turning-points",
      difficulty: "challenge",
      question:
        "A curve has equation {{y = 2x^3 - 9x^2 + 12x - 4}}\n\n(a) Find {{dy/dx}}.\n\n(b) Find the coordinates of the two turning points of the curve.\n\n(c) Determine whether each turning point is a maximum or a minimum. Show your working.",
      marks: 4,
      modelAnswer:
        "(a) {{dy/dx = 6x^2 - 18x + 12}}\n\n(b) At a turning point {{dy/dx = 0}}: {{6x^2 - 18x + 12 = 0}}, so {{6(x^2 - 3x + 2) = 0}}, i.e. 6(x − 1)(x − 2) = 0, giving x = 1 or x = 2.\n\nWhen x = 1: y = 2 − 9 + 12 − 4 = 1. When x = 2: y = 16 − 36 + 24 − 4 = 0. The turning points are (1, 1) and (2, 0).\n\n(c) {{(d^2y)/(dx^2) = 12x - 18}}. At x = 1 this is −6 < 0, so (1, 1) is a **maximum**. At x = 2 it is +6 > 0, so (2, 0) is a **minimum**.",
      markScheme: [
        { point: "Differentiates correctly: dy/dx = 6x² − 18x + 12", keywords: ["6x^2", "6x²", "18x", "+ 12", "+12"] },
        { point: "Sets dy/dx = 0 and solves to get x = 1 and x = 2", keywords: ["= 0", "x = 1", "x = 2", "(x - 1)", "(x − 1)"] },
        { point: "Correct coordinates (1, 1) and (2, 0)", keywords: ["(1, 1)", "(1,1)", "(2, 0)", "(2,0)"] },
        { point: "Correct nature with a valid test (second derivative 12x − 18, or gradient either side): (1, 1) maximum, (2, 0) minimum", keywords: ["12x - 18", "12x − 18", "maximum", "minimum", "-6", "−6"] },
      ],
      commonError: "Stating max/min without a test, or forgetting to substitute back into the original equation to find the y-coordinates.",
      hints: [
        "Differentiate term by term: bring the power down and reduce it by one.",
        "Turning points are where the gradient is zero. Your quadratic has a common factor of 6.",
        "Differentiate again: a negative second derivative means a maximum.",
      ],
    },
    {
      kind: "short",
      id: "exam-1a-q25",
      topicId: "fractions-percentages",
      guideRef: "algebraic-fractions",
      difficulty: "challenge",
      question:
        "Simplify fully\n\n{{(2x^2 + 5x - 3)/(4x^2 - 1) ÷ (x^2 + 3x)/(6x + 3)}}",
      answer: { type: "expression", expr: "3/x", form: "simplified", display: "{{3/x}}" },
      traps: [
        { spec: { type: "expression", expr: "x/3" }, feedback: "You've got it upside down. Dividing by a fraction means multiplying by its reciprocal — flip the *second* fraction only." },
      ],
      solution: [
        "Factorise everything: {{2x^2 + 5x - 3 = (2x - 1)(x + 3)}}, {{4x^2 - 1 = (2x - 1)(2x + 1)}}, {{x^2 + 3x = x(x + 3)}}, 6x + 3 = 3(2x + 1).",
        "Flip the second fraction and multiply: {{((2x - 1)(x + 3))/((2x - 1)(2x + 1)) * (3(2x + 1))/(x(x + 3))}}",
        "Cancel (2x − 1), (x + 3) and (2x + 1): **{{3/x}}**.",
      ],
      commonError: "Cancelling terms (like the x²) instead of whole factors, or flipping the first fraction.",
      hints: [
        "Factorise all four expressions before doing anything else.",
        "{{4x^2 - 1}} is a difference of two squares.",
        "Dividing by a fraction = multiplying by its reciprocal. Then cancel common brackets.",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "written",
      id: "exam-1a-q26",
      topicId: "expand-factorise",
      guideRef: "harder-algebra",
      difficulty: "challenge",
      question:
        "n is a positive integer.\n\nProve, using algebra, that {{(2n + 3)^2 - (2n - 1)^2}} is always an **odd** multiple of 8.",
      marks: 3,
      modelAnswer:
        "{{(2n + 3)^2 = 4n^2 + 12n + 9}} and {{(2n - 1)^2 = 4n^2 - 4n + 1}}.\n\nSo {{(2n + 3)^2 - (2n - 1)^2 = 4n^2 + 12n + 9 - 4n^2 + 4n - 1 = 16n + 8}}.\n\n16n + 8 = 8(2n + 1). Since 2n is even, 2n + 1 is odd, so the expression is 8 × (an odd number): an odd multiple of 8.\n\n(Alternatively, as a difference of two squares: [(2n + 3) − (2n − 1)][(2n + 3) + (2n − 1)] = 4(4n + 2) = 8(2n + 1).)",
      markScheme: [
        { point: "Expands both brackets correctly (or uses the difference of two squares)", keywords: ["4n^2 + 12n + 9", "4n² + 12n + 9", "4n^2 - 4n + 1", "4n² − 4n + 1", "4(4n + 2)", "difference of two squares"] },
        { point: "Simplifies to 16n + 8 = 8(2n + 1)", keywords: ["16n + 8", "16n+8", "8(2n + 1)", "8(2n+1)"] },
        { point: "Explains that 2n + 1 is odd, so the result is an odd multiple of 8", keywords: ["odd", "2n + 1", "2n+1", "2n is even"] },
      ],
      commonError: "Showing it works for a few values of n — examples are not a proof — or stopping at 16n + 8 without explaining why it is an *odd* multiple of 8.",
      solutions: [
        {
          label: "Difference of two squares (quicker)",
          steps: [
            "{{A^2 - B^2 = (A - B)(A + B)}} with A = 2n + 3, B = 2n − 1.",
            "A − B = 4 and A + B = 4n + 2, so the product is 4(4n + 2) = 8(2n + 1).",
          ],
        },
      ],
      hints: [
        "Expand both squares carefully — or spot that this is {{A^2 - B^2}}.",
        "Take out a factor of 8. What is left in the bracket?",
        "Why must the number left in the bracket be odd?",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "written",
      id: "exam-1a-q27",
      topicId: "angles-circle-theorems",
      guideRef: "circle-theorems-2",
      difficulty: "challenge",
      question:
        "A, B and C are points on a circle, centre O.\n\nST is the tangent to the circle at A.\n\nAngle TAB = 64° and angle ABC = 66°.\n\nShow that angle OBC = 40°. Give a reason for each stage of your working.",
      diagram: CIRCLE_TANGENT,
      marks: 4,
      modelAnswer:
        "Angle ACB = 64°, because the angle between a tangent and a chord is equal to the angle in the alternate segment.\n\nAngle BAC = 180° − 64° − 66° = 50°, because angles in a triangle add up to 180°.\n\nAngle BOC = 2 × 50° = 100°, because the angle at the centre is twice the angle at the circumference (both stand on arc BC).\n\nTriangle OBC is isosceles because OB = OC (radii), so angle OBC = (180° − 100°) ÷ 2 = 40°.",
      markScheme: [
        { point: "Angle ACB = 64° with reason: alternate segment theorem", keywords: ["alternate segment", "64"] },
        { point: "Angle BAC = 50° with reason: angles in a triangle add up to 180°", keywords: ["50", "triangle", "180"] },
        { point: "Angle BOC = 100° with reason: angle at the centre is twice the angle at the circumference", keywords: ["100", "centre", "twice", "double", "circumference"] },
        { point: "Angle OBC = 40° with reason: triangle OBC is isosceles because OB = OC are radii (base angles equal)", keywords: ["isosceles", "radii", "radius", "40", "base angles"] },
      ],
      commonError: "Writing 'alternate angles' instead of 'alternate segment theorem', or skipping the reason that OB = OC are radii.",
      hints: [
        "There's a tangent and a chord meeting at A. Which circle theorem links angle TAB to an angle inside the circle?",
        "Once you know two angles of triangle ABC, find the third.",
        "Angle BOC and angle BAC stand on the same arc. Then look at triangle OBC — what do you know about OB and OC?",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-1a-q28",
      topicId: "indices-surds",
      guideRef: "rationalising",
      difficulty: "challenge",
      question:
        "A rectangle has area {{(5 + sqrt(3))}} cm² and width {{(2 - sqrt(3))}} cm.\n\nWork out the length of the rectangle. Give your answer in the form {{a + b sqrt(3)}}, where a and b are integers.",
      answer: { type: "expression", expr: "13+7sqrt(3)", form: "surd", display: "{{(13 + 7 sqrt(3))}} cm" },
      traps: [
        { spec: { type: "expression", expr: "(13+7sqrt(3))/7" }, feedback: "Check the denominator: {{(2 - sqrt(3))(2 + sqrt(3)) = 4 - 3 = 1}}, not 4 + 3." },
        { spec: { type: "expression", expr: "7+7sqrt(3)" }, feedback: "Check the last term of the numerator: {{sqrt(3) * sqrt(3) = +3}}, so 10 + 3 = 13." },
      ],
      solution: [
        "Length = {{(5 + sqrt(3))/(2 - sqrt(3))}}.",
        "Multiply top and bottom by the conjugate {{2 + sqrt(3)}}.",
        "Top: {{(5 + sqrt(3))(2 + sqrt(3)) = 10 + 5 sqrt(3) + 2 sqrt(3) + 3 = 13 + 7 sqrt(3)}}.",
        "Bottom: {{(2 - sqrt(3))(2 + sqrt(3)) = 4 - 3 = 1}}.",
        "Length = **{{13 + 7 sqrt(3)}}** cm.",
      ],
      commonError: "Multiplying by {{sqrt(3)}} instead of the conjugate, which leaves a surd in the denominator.",
      hints: [
        "Length = area ÷ width. Write it as a fraction.",
        "To remove {{2 - sqrt(3)}} from the denominator, multiply top and bottom by {{2 + sqrt(3)}}.",
        "The denominator becomes a difference of two squares.",
      ],
    },
    {
      kind: "short",
      id: "exam-1a-q29",
      topicId: "further-trigonometry",
      guideRef: "trig-equations",
      difficulty: "challenge",
      question:
        "Solve {{2 cos^2 x + 3 sin x = 3}} for 0° ≤ x ≤ 360°.\n\nGive all the solutions.",
      answer: { type: "list", values: [30, 90, 150], ordered: false, tolerance: 0.05, display: "x = 30°, 90°, 150°" },
      traps: [
        { spec: { type: "list", values: [30, 150], ordered: false, tolerance: 0.05 }, feedback: "You've found the solutions of sin x = {{1/2}} — but the quadratic has a second root. sin x = 1 also gives a solution in the interval." },
        { spec: { type: "list", values: [30, 90], ordered: false, tolerance: 0.05 }, feedback: "sin x = {{1/2}} has two solutions between 0° and 360°: 30° and 180° − 30°." },
      ],
      solution: [
        "Use {{cos^2 x = 1 - sin^2 x}}: {{2(1 - sin^2 x) + 3 sin x = 3}}.",
        "{{2 - 2 sin^2 x + 3 sin x - 3 = 0}}, so {{2 sin^2 x - 3 sin x + 1 = 0}}.",
        "Factorise: (2 sin x − 1)(sin x − 1) = 0, so sin x = {{1/2}} or sin x = 1.",
        "sin x = {{1/2}}: x = 30° or 180° − 30° = 150°. sin x = 1: x = 90°.",
        "**x = 30°, 90°, 150°**",
      ],
      commonError: "Missing the second solution of sin x = ½ in the interval (150°), or dropping sin x = 1.",
      hints: [
        "The equation mixes cos and sin. Which identity turns {{cos^2 x}} into something with sin?",
        "You should get a quadratic in sin x. Let s = sin x if it helps.",
        "For each value of sin x, use the symmetry of the sine graph to find every angle from 0° to 360°.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "exam-1a-q30",
      topicId: "calculus",
      guideRef: "normals",
      difficulty: "challenge",
      question:
        "The curve C has equation {{y = x^2 - 4x + 10}}\n\nThe line with equation y = 2x + k is a tangent to C at the point P.\n\nThe normal to C at P crosses the x-axis at the point Q.\n\nFind the value of k and the x-coordinate of Q. Give your answers in the order k, then the x-coordinate of Q.",
      answer: { type: "list", values: [1, 17], ordered: true, display: "k = 1; Q is at x = 17" },
      traps: [
        { spec: { type: "list", values: [1, -11], ordered: true }, feedback: "k is right, but the normal's gradient is {{-1/2}}, not {{+1/2}} — perpendicular gradients multiply to −1." },
        { spec: { type: "list", values: [1, 6.5], ordered: true }, feedback: "k is right. The normal's gradient is the negative **reciprocal** of 2, which is {{-1/2}}, not −2." },
        { spec: { type: "list", values: [1, -0.5], ordered: true }, feedback: "k is right, but you used the tangent's gradient, 2. The normal is perpendicular to the tangent: gradient {{-1/2}}." },
      ],
      solution: [
        "{{dy/dx = 2x - 4}}. The tangent has gradient 2, so 2x − 4 = 2 and x = 3.",
        "At x = 3: y = 9 − 12 + 10 = 7, so P = (3, 7).",
        "P is on y = 2x + k: 7 = 6 + k, so **k = 1**.",
        "Normal gradient = {{-1/2}}. Normal: {{y - 7 = -1/2 (x - 3)}}.",
        "At Q, y = 0: {{-7 = -1/2 (x - 3)}}, so x − 3 = 14 and **x = 17**.",
      ],
      solutions: [
        {
          label: "Finding k without calculus (discriminant)",
          steps: [
            "Set {{x^2 - 4x + 10 = 2x + k}}: {{x^2 - 6x + (10 - k) = 0}}.",
            "A tangent meets the curve exactly once, so the discriminant is 0: 36 − 4(10 − k) = 0, so k = 1.",
            "The repeated root is x = 3, giving P = (3, 7). Calculus is still needed for the normal, so the derivative route is more efficient here.",
          ],
        },
      ],
      commonError: "Using the tangent's gradient (2) for the normal instead of the negative reciprocal {{-1/2}}.",
      hints: [
        "At P, the gradient of the curve equals the gradient of the tangent line, 2.",
        "Find the coordinates of P, then use them to find k.",
        "The normal is perpendicular to the tangent: its gradient is {{-1/2}}. Set y = 0 in its equation.",
      ],
      strategy: "Use two methods",
    },
  ],
};
