// ---------------------------------------------------------------------------
// Mock Set B — Paper 2H (Edexcel IGCSE 4MA1 Higher style, calculator, 30 questions).
// Ordered easier → harder: q01–q08 warm-up, q09–q23 core, q24–q30 challenge.
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

const CCA_VENN = `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram. The universal set is the 50 students in a CCA. Circle C is Choir and circle B is Badminton. Choir only 14, both 6, Badminton only 19, neither 11." font-family="sans-serif"><rect x="0" y="0" width="420" height="260" fill="#ffffff"/><rect x="20" y="20" width="380" height="220" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><circle cx="165" cy="130" r="80" fill="#c7d2fe" fill-opacity="0.6" stroke="#1f2937" stroke-width="2"/><circle cx="255" cy="130" r="80" fill="#fde68a" fill-opacity="0.6" stroke="#1f2937" stroke-width="2"/><g font-size="15" fill="#1f2937" text-anchor="middle"><text x="125" y="135">14</text><text x="210" y="135">6</text><text x="295" y="135">19</text><text x="370" y="225">11</text></g><g font-size="14" fill="#1f2937" font-weight="bold"><text x="32" y="40">ξ</text><text x="100" y="58">C</text><text x="312" y="58">B</text></g></svg>`;

const REVISION_HIST = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of revision times t minutes from 0 to 60, drawn on a grid of small squares. The frequency density axis has no numbers. Bar heights in small squares (each small square is 0.2 of the density scale): 0 to 20 minutes, 4 squares; 20 to 30, 13 squares; 30 to 35, 24 squares; 35 to 40, 18 squares; 40 to 60, 5 squares." font-family="sans-serif"><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><g stroke-width="1"><line x1="60" y1="262" x2="420" y2="262" stroke="#e2e8f0"/><line x1="60" y1="254" x2="420" y2="254" stroke="#e2e8f0"/><line x1="60" y1="246" x2="420" y2="246" stroke="#e2e8f0"/><line x1="60" y1="238" x2="420" y2="238" stroke="#e2e8f0"/><line x1="60" y1="230" x2="420" y2="230" stroke="#cbd5e1"/><line x1="60" y1="222" x2="420" y2="222" stroke="#e2e8f0"/><line x1="60" y1="214" x2="420" y2="214" stroke="#e2e8f0"/><line x1="60" y1="206" x2="420" y2="206" stroke="#e2e8f0"/><line x1="60" y1="198" x2="420" y2="198" stroke="#e2e8f0"/><line x1="60" y1="190" x2="420" y2="190" stroke="#cbd5e1"/><line x1="60" y1="182" x2="420" y2="182" stroke="#e2e8f0"/><line x1="60" y1="174" x2="420" y2="174" stroke="#e2e8f0"/><line x1="60" y1="166" x2="420" y2="166" stroke="#e2e8f0"/><line x1="60" y1="158" x2="420" y2="158" stroke="#e2e8f0"/><line x1="60" y1="150" x2="420" y2="150" stroke="#cbd5e1"/><line x1="60" y1="142" x2="420" y2="142" stroke="#e2e8f0"/><line x1="60" y1="134" x2="420" y2="134" stroke="#e2e8f0"/><line x1="60" y1="126" x2="420" y2="126" stroke="#e2e8f0"/><line x1="60" y1="118" x2="420" y2="118" stroke="#e2e8f0"/><line x1="60" y1="110" x2="420" y2="110" stroke="#cbd5e1"/><line x1="60" y1="102" x2="420" y2="102" stroke="#e2e8f0"/><line x1="60" y1="94" x2="420" y2="94" stroke="#e2e8f0"/><line x1="60" y1="86" x2="420" y2="86" stroke="#e2e8f0"/><line x1="60" y1="78" x2="420" y2="78" stroke="#e2e8f0"/><line x1="60" y1="70" x2="420" y2="70" stroke="#cbd5e1"/><line x1="90" y1="70" x2="90" y2="270" stroke="#e2e8f0"/><line x1="120" y1="70" x2="120" y2="270" stroke="#cbd5e1"/><line x1="150" y1="70" x2="150" y2="270" stroke="#e2e8f0"/><line x1="180" y1="70" x2="180" y2="270" stroke="#cbd5e1"/><line x1="210" y1="70" x2="210" y2="270" stroke="#e2e8f0"/><line x1="240" y1="70" x2="240" y2="270" stroke="#cbd5e1"/><line x1="270" y1="70" x2="270" y2="270" stroke="#e2e8f0"/><line x1="300" y1="70" x2="300" y2="270" stroke="#cbd5e1"/><line x1="330" y1="70" x2="330" y2="270" stroke="#e2e8f0"/><line x1="360" y1="70" x2="360" y2="270" stroke="#cbd5e1"/><line x1="390" y1="70" x2="390" y2="270" stroke="#e2e8f0"/><line x1="420" y1="70" x2="420" y2="270" stroke="#cbd5e1"/></g><g fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"><rect x="60" y="238" width="120" height="32"/><rect x="180" y="166" width="60" height="104"/><rect x="240" y="78" width="30" height="192"/><rect x="270" y="126" width="30" height="144"/><rect x="300" y="230" width="120" height="40"/></g><line x1="60" y1="270" x2="428" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="62" stroke="#1f2937" stroke-width="1.5"/><g font-size="12" fill="#1f2937" text-anchor="middle"><text x="60" y="288">0</text><text x="120" y="288">10</text><text x="180" y="288">20</text><text x="240" y="288">30</text><text x="300" y="288">40</text><text x="360" y="288">50</text><text x="420" y="288">60</text></g><text x="240" y="310" font-size="13" fill="#1f2937" text-anchor="middle">Revision time, t (minutes)</text><text x="30" y="170" font-size="13" fill="#1f2937" text-anchor="middle" transform="rotate(-90 30 170)">Frequency density</text></svg>`;

const POT_FRUSTUM = `<svg viewBox="0 0 400 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A plant pot in the shape of a frustum of a cone. The top circle has radius 12 cm, the bottom circle has radius 8 cm and the vertical height is 15 cm." font-family="sans-serif"><rect x="0" y="0" width="400" height="270" fill="#ffffff"/><path d="M80 60 L120 210 A80 15 0 0 0 280 210 L320 60 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><ellipse cx="200" cy="60" rx="120" ry="22" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><path d="M120 210 A80 15 0 0 1 280 210" fill="none" stroke="#334155" stroke-width="1.2" stroke-dasharray="5 4"/><g stroke="#334155" stroke-width="1.2"><line x1="200" y1="60" x2="320" y2="60"/><line x1="200" y1="210" x2="280" y2="210"/><line x1="200" y1="60" x2="200" y2="210" stroke-dasharray="5 4"/></g><path d="M200 202 L208 202 L208 210" fill="none" stroke="#334155" stroke-width="1"/><g font-size="13" fill="#1f2937"><text x="260" y="54" text-anchor="middle">12 cm</text><text x="240" y="204" text-anchor="middle">8 cm</text><text x="192" y="140" text-anchor="end">15 cm</text><text x="392" y="262" text-anchor="end" font-size="11">Not to scale</text></g></svg>`;

const TANGENTS_P = `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with centre O. PA and PB are tangents to the circle from the point P outside the circle, touching it at A and B. C is a point on the major arc AB. Chords CA and CB are drawn, and radii OA and OB are dashed. Angle APB is 48 degrees." font-family="sans-serif"><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><circle cx="200" cy="150" r="80" fill="#f8fafc" stroke="#1f2937" stroke-width="2"/><g stroke="#1f2937" stroke-width="1.8"><line x1="396.7" y1="150" x2="232.54" y2="76.92"/><line x1="396.7" y1="150" x2="232.54" y2="223.08"/><line x1="124.82" y1="177.36" x2="232.54" y2="76.92"/><line x1="124.82" y1="177.36" x2="232.54" y2="223.08"/></g><g stroke="#334155" stroke-width="1.2" stroke-dasharray="5 4"><line x1="200" y1="150" x2="232.54" y2="76.92"/><line x1="200" y1="150" x2="232.54" y2="223.08"/></g><path d="M369.3 137.8 A30 30 0 0 0 369.3 162.2" fill="none" stroke="#b91c1c" stroke-width="1.5"/><g fill="#1f2937"><circle cx="200" cy="150" r="3"/><circle cx="232.54" cy="76.92" r="3.5"/><circle cx="232.54" cy="223.08" r="3.5"/><circle cx="124.82" cy="177.36" r="3.5"/><circle cx="396.7" cy="150" r="3.5"/></g><g font-size="14" fill="#1f2937"><text x="184" y="148">O</text><text x="230" y="68">A</text><text x="230" y="244">B</text><text x="106" y="186">C</text><text x="404" y="155">P</text><text x="338" y="155" font-size="12" fill="#b91c1c">48°</text></g><text x="432" y="294" text-anchor="end" font-size="11" fill="#1f2937">Diagram NOT accurately drawn</text></svg>`;

const PYRAMID = `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A pyramid VABCD with a rectangular base ABCD. AB is 8 metres and BC is 6 metres. The apex V is vertically above M, the centre of the base. VA is 13 metres. N is the midpoint of BC; dashed lines join M to N and V to N." font-family="sans-serif"><rect x="0" y="0" width="420" height="300" fill="#ffffff"/><polygon points="80,260 300,260 370,200 225,50" fill="#c7d2fe" fill-opacity="0.5" stroke="none"/><g stroke="#334155" stroke-width="1.2" stroke-dasharray="5 4" fill="none"><line x1="80" y1="260" x2="150" y2="200"/><line x1="150" y1="200" x2="370" y2="200"/><line x1="225" y1="50" x2="150" y2="200"/><line x1="80" y1="260" x2="370" y2="200"/><line x1="225" y1="50" x2="225" y2="230"/><line x1="225" y1="230" x2="335" y2="230"/><line x1="225" y1="50" x2="335" y2="230"/></g><g stroke="#1f2937" stroke-width="2" fill="none"><line x1="80" y1="260" x2="300" y2="260"/><line x1="300" y1="260" x2="370" y2="200"/><line x1="225" y1="50" x2="80" y2="260"/><line x1="225" y1="50" x2="300" y2="260"/><line x1="225" y1="50" x2="370" y2="200"/></g><path d="M225 220 L216 222 L216 232" fill="none" stroke="#334155" stroke-width="1"/><circle cx="225" cy="230" r="2.5" fill="#1f2937"/><circle cx="335" cy="230" r="2.5" fill="#1f2937"/><g font-size="14" fill="#1f2937"><text x="66" y="272">A</text><text x="304" y="276">B</text><text x="376" y="200">C</text><text x="136" y="196">D</text><text x="220" y="42">V</text><text x="230" y="246">M</text><text x="342" y="226">N</text></g><g font-size="13" fill="#1f2937"><text x="190" y="280" text-anchor="middle">8 m</text><text x="346" y="246">6 m</text><text x="140" y="150" text-anchor="end">13 m</text></g><text x="412" y="294" text-anchor="end" font-size="11" fill="#1f2937">Diagram NOT accurately drawn</text></svg>`;

const VECTOR_PATH = `<svg viewBox="0 0 400 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB with O at the bottom left, A to the right of O and B above and slightly right of O. OA is a and OB is b. P lies on AB. The line OA is extended to X so that A is the midpoint of OX. From X a line XY equal to b goes up to Y." font-family="sans-serif"><rect x="0" y="0" width="400" height="290" fill="#ffffff"/><g stroke="#1f2937" stroke-width="2" fill="none"><line x1="50" y1="250" x2="290" y2="250"/><line x1="50" y1="250" x2="110" y2="100"/><line x1="170" y1="250" x2="110" y2="100"/><line x1="290" y1="250" x2="350" y2="100"/></g><g fill="#1f2937"><polygon points="114,250 104,245 104,255"/><polygon points="81.5,171.3 82.4,182.5 73.2,178.7"/><polygon points="321.5,171.3 322.4,182.5 313.2,178.7"/><circle cx="50" cy="250" r="3.5"/><circle cx="170" cy="250" r="3.5"/><circle cx="290" cy="250" r="3.5"/><circle cx="110" cy="100" r="3.5"/><circle cx="350" cy="100" r="3.5"/><circle cx="150" cy="200" r="3.5"/></g><g font-size="14" fill="#1f2937"><text x="36" y="268">O</text><text x="166" y="270">A</text><text x="286" y="270">X</text><text x="104" y="90">B</text><text x="348" y="90">Y</text><text x="158" y="198">P</text><text x="106" y="242" font-weight="bold">a</text><text x="64" y="172" font-weight="bold">b</text><text x="336" y="182" font-weight="bold">b</text><text x="392" y="284" text-anchor="end" font-size="11">Diagram NOT accurately drawn</text></g></svg>`;

const SHIP_BEARINGS = `<svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch, not to scale. A ship sails from P on a bearing of 062 degrees for 14 kilometres to A, then on a bearing of 155 degrees for 9 kilometres to B. North lines are drawn at P and at A. A dashed line joins P to B." font-family="sans-serif"><rect x="0" y="0" width="380" height="250" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><line x1="90" y1="170" x2="90" y2="50"/><line x1="238.3" y1="91.1" x2="238.3" y2="25"/></g><polygon points="90,40 85,52 95,52" fill="#334155"/><polygon points="238.3,15 233.3,27 243.3,27" fill="#334155"/><g stroke="#1f2937" stroke-width="2"><line x1="90" y1="170" x2="238.3" y2="91.1"/><line x1="238.3" y1="91.1" x2="283.9" y2="189"/></g><line x1="90" y1="170" x2="283.9" y2="189" stroke="#334155" stroke-width="1.5" stroke-dasharray="6 4"/><path d="M90 140 A30 30 0 0 1 116.5 155.9" fill="none" stroke="#1f2937" stroke-width="1.3"/><path d="M238.3 69.1 A22 22 0 0 1 247.6 111" fill="none" stroke="#1f2937" stroke-width="1.3"/><g fill="#1f2937"><circle cx="90" cy="170" r="3.5"/><circle cx="238.3" cy="91.1" r="3.5"/><circle cx="283.9" cy="189" r="3.5"/></g><g font-size="13" fill="#1f2937"><text x="90" y="34" text-anchor="middle">N</text><text x="238.3" y="10" text-anchor="middle">N</text><text x="100" y="128">062°</text><text x="250" y="78">155°</text><text x="74" y="186">P</text><text x="222" y="86">A</text><text x="290" y="200">B</text><text x="150" y="112" text-anchor="middle">14 km</text><text x="274" y="140">9 km</text><text x="372" y="242" text-anchor="end" font-size="11">Not to scale</text></g></svg>`;

const SIMILAR_TRI = `<svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with A at the top, B bottom left and C bottom right. D is on AB and E is on AC, with DE parallel to BC. AD is 6 cm, DB is 4 cm, DE is 7.5 cm and AE is 5.4 cm." font-family="sans-serif"><rect x="0" y="0" width="420" height="290" fill="#ffffff"/><polygon points="228.24,88.84 60,260 360,260" fill="#bae6fd" fill-opacity="0.6" stroke="#1f2937" stroke-width="2"/><line x1="127.3" y1="191.54" x2="307.3" y2="191.54" stroke="#1f2937" stroke-width="2"/><g stroke="#1f2937" stroke-width="1.5" fill="none"><path d="M211 186.5 L217 191.5 L211 196.5"/><path d="M206 255 L212 260 L206 265"/></g><g fill="#1f2937"><circle cx="127.3" cy="191.54" r="3"/><circle cx="307.3" cy="191.54" r="3"/></g><g font-size="14" fill="#1f2937"><text x="222" y="80">A</text><text x="44" y="276">B</text><text x="364" y="276">C</text><text x="108" y="192">D</text><text x="316" y="192">E</text></g><g font-size="12" fill="#1f2937"><text x="168" y="136" text-anchor="end">6 cm</text><text x="86" y="222" text-anchor="end">4 cm</text><text x="217" y="183" text-anchor="middle">7.5 cm</text><text x="276" y="136">5.4 cm</text></g></svg>`;

export const paper: ExamPaper = {
  id: "exam-2b",
  title: "Mock Set B — Paper 2H",
  calculator: true,
  minutes: 120,
  questions: [
    // ============================ WARM-UP ==================================
    {
      kind: "short",
      id: "exam-2b-q01",
      topicId: "fractions-percentages",
      guideRef: "reverse-percentages",
      difficulty: "warmup",
      question:
        "The number of visitors to a science museum in 2025 was 12% more than the number of visitors in 2024.\n\nIn 2025 there were 285 600 visitors.\n\nWork out the number of visitors in 2024.",
      answer: { type: "number", value: 255000, display: "255 000 visitors" },
      traps: [
        { spec: { type: "number", value: 251328 }, feedback: "You took 12% of 285 600 off. But the 12% increase was worked out on the *2024* number, not on 285 600. 285 600 is 112% of the 2024 number — divide by 1.12." },
        { spec: { type: "number", value: 319872 }, feedback: "That increases 285 600 by another 12%. You want to go *back* to 2024, so divide by 1.12." },
      ],
      solution: [
        "The 2025 number is 100% + 12% = 112% of the 2024 number, so the multiplier is 1.12.",
        "2024 number × 1.12 = 285 600",
        "2024 number = 285 600 ÷ 1.12 = **255 000**.",
        "Check: 255 000 × 1.12 = 285 600 ✓",
      ],
      commonError: "Taking 12% of 285 600 and subtracting it (251 328).",
      hints: [
        "285 600 is what percentage of the 2024 number?",
        "285 600 is 112% of the 2024 number, so (2024 number) × 1.12 = 285 600.",
      ],
      strategy: "Work backwards",
    },
    {
      kind: "short",
      id: "exam-2b-q02",
      topicId: "indices-surds",
      guideRef: "standard-form",
      difficulty: "warmup",
      question:
        "The mass of one grain of sand on Siloso Beach, Sentosa, is about {{6.4 * 10^(-5)}} grams.\n\nA scientist estimates that a section of the beach contains {{3.2 * 10^11}} grains of sand.\n\nWork out the total mass of these grains in **kilograms**. Give your answer in standard form.",
      answer: { type: "number", value: 20480, standardForm: true, display: "{{2.048 * 10^4}} kg" },
      traps: [
        { spec: { type: "number", value: 20480000, standardForm: true }, feedback: "That is the mass in grams. Divide by 1000 to convert grams to kilograms." },
        { spec: { type: "number", value: 20.48, standardForm: true }, feedback: "You divided by 1000 twice (or by 10⁶). 1 kg = 1000 g, so divide the mass in grams by 1000 once." },
      ],
      solution: [
        "Total mass in grams = {{6.4 * 10^(-5) * 3.2 * 10^11}}",
        "6.4 × 3.2 = 20.48 and {{10^(-5) * 10^11 = 10^6}}, so the mass is {{20.48 * 10^6}} g = {{2.048 * 10^7}} g.",
        "Divide by 1000 to get kilograms: {{2.048 * 10^7 / 10^3 = 2.048 * 10^4}} kg.",
        "Answer: **{{2.048 * 10^4}} kg**.",
      ],
      commonError: "Leaving the answer in grams, or writing 20.48 × 10³ (not standard form because 20.48 is not between 1 and 10).",
      hints: [
        "Multiply the mass of one grain by the number of grains — that gives grams.",
        "Then divide by 1000 to change grams to kilograms, and make sure the first number is between 1 and 10.",
      ],
    },
    {
      kind: "mcq",
      id: "exam-2b-q03",
      topicId: "statistics",
      guideRef: "averages-raw-data",
      difficulty: "warmup",
      question:
        "A running club has a junior squad and a senior squad.\n\nThe 18 juniors have a mean 5 km time of 24 minutes.\n\nThe two squads together have 30 runners, and the mean 5 km time of all 30 runners is 26 minutes.\n\nWhat is the mean 5 km time of the senior squad?",
      options: ["29 minutes", "28 minutes", "19.3 minutes", "348 minutes"],
      answerIndex: 0,
      explanation:
        "Total for all 30 runners = 30 × 26 = 780 minutes. Total for the juniors = 18 × 24 = 432 minutes. So the 30 − 18 = 12 seniors took 780 − 432 = 348 minutes altogether, and their mean is 348 ÷ 12 = **29 minutes**.\n\n28 comes from assuming 26 is halfway between the two squad means — that only works if the squads are the same size. 348 is the seniors' total, not their mean, and 19.3 comes from dividing 348 by 18, the size of the wrong squad.",
      hints: [
        "Work with totals, not means: mean × number of runners = total.",
        "Find the total for all 30 runners and subtract the total for the juniors.",
      ],
      strategy: "Work backwards",
    },
    {
      kind: "short",
      id: "exam-2b-q04",
      topicId: "ratio-proportion",
      guideRef: "compound-measures",
      difficulty: "warmup",
      question:
        "A solid brass statue has a mass of 3.4 kg.\n\nThe density of brass is 8.5 g/cm³.\n\nWork out the volume of the statue in cm³.",
      answer: { type: "number", value: 400, display: "400 cm³" },
      traps: [
        { spec: { type: "number", value: 0.4, tolerance: 0.0001 }, feedback: "The density is in grams per cm³, so the mass must be in grams too: 3.4 kg = 3400 g." },
        { spec: { type: "number", value: 28900 }, feedback: "You multiplied mass by density. Volume = mass ÷ density (density is mass *per* unit of volume)." },
        { spec: { type: "number", value: 28.9, tolerance: 0.001 }, feedback: "Volume = mass ÷ density, not mass × density. And change 3.4 kg into grams first." },
      ],
      solution: [
        "The density is in g/cm³, so convert the mass to grams: 3.4 kg = 3400 g.",
        "Density = mass ÷ volume, so volume = mass ÷ density.",
        "Volume = 3400 ÷ 8.5 = **400 cm³**.",
      ],
      commonError: "Not converting kg to g (giving 0.4), or multiplying instead of dividing.",
      hints: [
        "Look at the units of the density. What unit must the mass be in?",
        "Rearrange density = mass ÷ volume to make volume the subject.",
      ],
    },
    {
      kind: "mcq",
      id: "exam-2b-q05",
      topicId: "angles-circle-theorems",
      guideRef: "polygons",
      difficulty: "warmup",
      question:
        "Three regular polygons meet at a point, with no gaps and no overlaps.\n\nTwo of the polygons are regular pentagons.\n\nHow many sides does the third polygon have?",
      options: ["144", "10", "36", "2.5"],
      answerIndex: 1,
      explanation:
        "Each exterior angle of a regular pentagon is 360° ÷ 5 = 72°, so each interior angle is 108°. Angles at a point add up to 360°, so the third polygon's interior angle is 360° − 2 × 108° = 144°. Its exterior angle is 180° − 144° = 36°, so it has 360 ÷ 36 = **10** sides (a regular decagon).\n\n144 is the interior angle of the third polygon, not its number of sides. 36 is its exterior angle. 2.5 comes from dividing 360 by the interior angle (144°) instead of the exterior angle.",
      hints: [
        "First find the interior angle of a regular pentagon.",
        "The three angles meeting at the point add up to 360°. What is the third polygon's interior angle?",
        "Use its exterior angle to find the number of sides.",
      ],
      strategy: "Use the inverse",
    },
    {
      kind: "short",
      id: "exam-2b-q06",
      topicId: "expand-factorise",
      guideRef: "expanding-brackets",
      difficulty: "warmup",
      question: "Expand and simplify {{(x + 3)(2x - 1)(x - 4)}}",
      answer: { type: "expression", expr: "2x^3-3x^2-23x+12", form: "expanded", display: "{{2x^3 - 3x^2 - 23x + 12}}" },
      traps: [
        { spec: { type: "expression", expr: "2x^3-3x^2-17x+12" }, feedback: "Check the x terms: from (2x² + 5x − 3)(x − 4) you get −8x² + 5x² and −20x − 3x = −23x." },
      ],
      solution: [
        "First two brackets: {{(x + 3)(2x - 1) = 2x^2 - x + 6x - 3 = 2x^2 + 5x - 3}}",
        "Now multiply by (x − 4): {{(2x^2 + 5x - 3)(x - 4) = 2x^3 - 8x^2 + 5x^2 - 20x - 3x + 12}}",
        "Collect like terms: **{{2x^3 - 3x^2 - 23x + 12}}**",
        "Check with x = 1: (4)(1)(−3) = −12 and 2 − 3 − 23 + 12 = −12 ✓",
      ],
      commonError: "Dropping a sign when multiplying −3 by −4 (it is +12).",
      hints: [
        "Multiply out two of the brackets first, then multiply the result by the third bracket.",
        "Each of the 3 terms in your quadratic multiplies each of the 2 terms in (x − 4): 6 products in total.",
      ],
      strategy: "Check by substituting",
    },
    {
      kind: "short",
      id: "exam-2b-q07",
      topicId: "sets-venn",
      guideRef: "venn-probability",
      difficulty: "warmup",
      question:
        "The Venn diagram shows information about the 50 students in a Year 11 CCA group.\n\nξ = {students in the group}, C = {students who sing in the choir}, B = {students who play badminton}.\n\nOne of the students who plays badminton is chosen at random. Work out the probability that this student also sings in the choir. Give your answer as a fraction in its simplest form.",
      diagram: CCA_VENN,
      answer: { type: "fraction", n: 6, d: 25, simplest: true, display: "{{6/25}}" },
      traps: [
        { spec: { type: "fraction", n: 6, d: 50 }, feedback: "You divided by everyone in the group. The student is chosen from the badminton players only, so the denominator is n(B) = 6 + 19 = 25." },
        { spec: { type: "fraction", n: 6, d: 20 }, feedback: "20 is the number in the choir. The student is chosen from the badminton players, so divide by n(B) = 25." },
      ],
      solution: [
        "We only choose from B, so the denominator is n(B) = 6 + 19 = 25.",
        "Of these, the ones also in C are in the overlap: 6.",
        "P(C | B) = **{{6/25}}**.",
      ],
      commonError: "Using the whole group (50) as the denominator.",
      hints: [
        "Who are you choosing from? Only the badminton players.",
        "Add up everyone inside circle B — that's your denominator.",
      ],
    },
    {
      kind: "short",
      id: "exam-2b-q08",
      topicId: "linear-graphs",
      guideRef: "point-gradient-form",
      difficulty: "warmup",
      question:
        "A straight line passes through the points A(−3, 1) and B(5, 7).\n\nFind an equation of the line AB. Give your answer in the form ax + by + c = 0, where a, b and c are integers.",
      answer: { type: "equation", eq: "3x-4y+13=0", form: "general", display: "3x − 4y + 13 = 0" },
      traps: [
        { spec: { type: "equation", eq: "4x-3y+15=0" }, feedback: "Gradient is change in y ÷ change in x: (7 − 1) ÷ (5 − (−3)) = 6 ÷ 8 = {{3/4}}, not {{4/3}}." },
        { spec: { type: "equation", eq: "3x+4y+5=0" }, feedback: "Check the sign of the gradient: y goes *up* from 1 to 7 as x goes up, so the gradient is positive." },
      ],
      solution: [
        "Gradient m = {{(7 - 1)/(5 - (-3)) = 6/8 = 3/4}}.",
        "Using A(−3, 1): {{y - 1 = 3/4 (x + 3)}}.",
        "Multiply by 4: 4y − 4 = 3x + 9.",
        "Rearrange: **3x − 4y + 13 = 0**. Check B(5, 7): 15 − 28 + 13 = 0 ✓",
      ],
      commonError: "Dividing change in x by change in y, or leaving fractions in the final equation.",
      hints: [
        "Gradient = change in y ÷ change in x.",
        "Use y − y₁ = m(x − x₁) with one of the points.",
        "Multiply through to clear the fraction, then collect everything on one side.",
      ],
    },

    // ============================== CORE ===================================
    {
      kind: "short",
      id: "exam-2b-q09",
      topicId: "number-bounds",
      guideRef: "bounds-calculations",
      difficulty: "core",
      question:
        "A cylindrical rain-water tank has an internal radius of 45 cm, correct to the nearest centimetre.\n\nAfter a monsoon storm the tank holds 380 litres of water, correct to the nearest 10 litres.\n\nCalculate the **lower bound** for the depth of the water in the tank. Show your working clearly and give your answer in centimetres, correct to 3 significant figures.",
      answer: { type: "number", value: 57.7, tolerance: 0.05, display: "57.7 cm" },
      traps: [
        { spec: { type: "number", value: 59.7, tolerance: 0.05 }, feedback: "That uses the rounded values 380 and 45. A lower bound needs the bounds of each measurement." },
        { spec: { type: "number", value: 60.3, tolerance: 0.05 }, feedback: "You used the *lower* bound of the radius. A bigger radius makes the depth smaller, so use the upper bound 45.5 cm in the denominator." },
        { spec: { type: "number", value: 61.9, tolerance: 0.05 }, feedback: "That is the upper bound for the depth. For the smallest depth use the smallest volume and the largest radius." },
      ],
      solution: [
        "Bounds: volume 375 ≤ V < 385 litres, radius 44.5 ≤ r < 45.5 cm.",
        "Depth h = {{V/(pi r^2)}}. To make h as small as possible, make the top small and the bottom big: use V = 375 litres and r = 45.5 cm.",
        "375 litres = 375 000 cm³ (1 litre = 1000 cm³).",
        "{{h = 375000/(pi * 45.5^2) = 375000/6503.88... = 57.657...}}",
        "Lower bound = **57.7 cm** (3 s.f.).",
      ],
      commonError: "Using the lower bound of the radius too — dividing by a smaller number makes the answer larger, not smaller.",
      hints: [
        "Write down the lower and upper bounds of the volume and of the radius.",
        "Depth = volume ÷ (π r²). Which bound of each makes this fraction as small as possible?",
        "Small numerator, big denominator: V = 375 litres (= 375 000 cm³) and r = 45.5 cm.",
      ],
      strategy: "Consider extremes",
    },
    {
      kind: "short",
      id: "exam-2b-q10",
      topicId: "fractions-percentages",
      guideRef: "compound-growth",
      difficulty: "core",
      question:
        "Ravi buys a new car for $148 000.\n\nThe value of the car falls by 12% in the first year. After that its value falls by 8% each year.\n\nWork out the value of the car 5 years after Ravi bought it. Give your answer correct to the nearest dollar.",
      answer: { type: "number", value: 93303, tolerance: 0.5, display: "$93 303" },
      traps: [
        { spec: { type: "number", value: 82880, tolerance: 0.5 }, feedback: "That treats the decreases as simple percentages of the *original* price (12% + 4 × 8% = 44%). Each year's 8% is of the value at the start of that year — use multipliers." },
        { spec: { type: "number", value: 85839, tolerance: 1 }, feedback: "You used 0.92 five times as well as 0.88. The 8% falls only happen in years 2, 3, 4 and 5 — four of them." },
        { spec: { type: "number", value: 97544, tolerance: 1 }, feedback: "That uses 8% for all five years. The first year's fall is 12%." },
      ],
      solution: [
        "Year 1 multiplier: 1 − 0.12 = 0.88. Years 2–5 multiplier: 1 − 0.08 = 0.92, four times.",
        "Value = 148 000 × 0.88 × {{0.92^4}}",
        "= 148 000 × 0.88 × 0.716 392 96 = 93 303.02…",
        "Value after 5 years = **$93 303**.",
      ],
      commonError: "Applying the 8% to the original price each year (simple, not compound, depreciation).",
      hints: [
        "Turn each percentage decrease into a multiplier.",
        "How many years have the 8% fall? Years 2, 3, 4 and 5.",
        "Value = 148 000 × 0.88 × 0.92 to the power 4.",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "mcq",
      id: "exam-2b-q11",
      topicId: "expand-factorise",
      guideRef: "harder-algebra",
      difficulty: "core",
      question: "Factorise fully {{2x^4 - 162}}",
      options: [
        "{{2(x^2 + 9)(x^2 - 9)}}",
        "{{2(x - 3)^2(x + 3)^2}}",
        "{{2(x^2 + 9)(x - 3)^2}}",
        "{{2(x^2 + 9)(x + 3)(x - 3)}}",
      ],
      answerIndex: 3,
      explanation:
        "Take out the common factor 2: {{2(x^4 - 81)}}. Then x⁴ − 81 is a difference of two squares: {{(x^2)^2 - 9^2 = (x^2 + 9)(x^2 - 9)}}. But {{x^2 - 9}} is *also* a difference of two squares, {{(x + 3)(x - 3)}}. So the full answer is **{{2(x^2 + 9)(x + 3)(x - 3)}}**.\n\n{{2(x^2 + 9)(x^2 - 9)}} is correct but not *fully* factorised. {{2(x - 3)^2(x + 3)^2}} = {{2(x^2 - 9)^2}}, which is not the same expression, and {{x^2 + 9}} cannot be factorised further, so {{(x - 3)^2}} cannot appear.",
      hints: [
        "Is there a common factor? Take it out first.",
        "{{x^4 - 81}} = {{(x^2)^2 - 9^2}}: difference of two squares.",
        "Look at each new bracket: can any of them be factorised again?",
      ],
    },
    {
      kind: "short",
      id: "exam-2b-q12",
      topicId: "solving-equations",
      guideRef: "rearranging-twice",
      difficulty: "core",
      question: "Make t the subject of the formula\n\n{{v = (3t + a)/(t - 2)}}",
      answer: { type: "expression", expr: "(a+2v)/(v-3)", display: "{{t = (a + 2v)/(v - 3)}}" },
      traps: [
        { spec: { type: "expression", expr: "(a-2v)/(v-3)" }, feedback: "Check the sign when you expand v(t − 2): it is vt − 2v, so moving −2v across gives +2v." },
        { spec: { type: "expression", expr: "(a+2v)/(v+3)" }, feedback: "Collecting the t terms: vt − 3t = t(v − 3), not t(v + 3)." },
      ],
      solution: [
        "Multiply both sides by (t − 2): v(t − 2) = 3t + a",
        "Expand: vt − 2v = 3t + a",
        "Collect the t terms on one side: vt − 3t = a + 2v",
        "Factorise: t(v − 3) = a + 2v",
        "Divide: **{{t = (a + 2v)/(v - 3)}}**",
      ],
      commonError: "Trying to divide before collecting the t terms — t appears twice, so you must factorise it out.",
      hints: [
        "Get rid of the fraction first: multiply both sides by (t − 2).",
        "Get every term containing t on one side and everything else on the other.",
        "Factorise t out, then divide by the bracket.",
      ],
      strategy: "Work backwards",
    },
    {
      kind: "short",
      id: "exam-2b-q13",
      topicId: "quadratic-equations",
      guideRef: "quadratic-formula",
      difficulty: "core",
      question:
        "Siti kicks a ball into the air. The height, h metres, of the ball t seconds after it is kicked is given by\n\n{{h = 1.5 + 20t - 4.9t^2}}\n\nWork out the two times when the ball is 12 m above the ground. Give your answers in seconds, correct to 3 significant figures.",
      answer: { type: "list", values: [0.619, 3.46], ordered: false, tolerance: 0.005, display: "t = 0.619 s and t = 3.46 s" },
      traps: [
        { spec: { type: "list", values: [4.16, -0.0737], ordered: false, tolerance: 0.005 }, feedback: "Those are the solutions of h = 0 (when the ball lands). Set h = 12 and rearrange so that one side is 0: {{4.9t^2 - 20t + 10.5 = 0}}." },
        { spec: { type: "list", values: [-0.619, -3.46], ordered: false, tolerance: 0.005 }, feedback: "Sign slip: with a = 4.9, b = −20, c = 10.5, the formula starts with −b = +20." },
      ],
      solution: [
        "Set h = 12: {{1.5 + 20t - 4.9t^2 = 12}}.",
        "Rearrange: {{4.9t^2 - 20t + 10.5 = 0}}.",
        "Quadratic formula with a = 4.9, b = −20, c = 10.5: {{t = (20 +- sqrt(400 - 205.8))/9.8 = (20 +- sqrt(194.2))/9.8}}.",
        "t = (20 − 13.935…) ÷ 9.8 = 0.6188… and t = (20 + 13.935…) ÷ 9.8 = 3.4628…",
        "**t = 0.619 s** (on the way up) and **t = 3.46 s** (on the way down).",
      ],
      commonError: "Solving h = 0 instead of h = 12, or forgetting that −b = +20.",
      hints: [
        "Set the height equal to 12 and rearrange to the form at² + bt + c = 0.",
        "It won't factorise — use the quadratic formula. Be careful with b = −20.",
        "Why are there two answers? Think about the path of the ball.",
      ],
    },
    {
      kind: "short",
      id: "exam-2b-q14",
      topicId: "inequalities",
      guideRef: "quadratic-inequalities",
      difficulty: "core",
      question: "Solve the inequality {{2x^2 - 3x >= 20}}",
      answer: { type: "inequality", ineq: "x<=-2.5 or x>=4", display: "{{x <= -5/2}} or {{x >= 4}}" },
      traps: [
        { spec: { type: "inequality", ineq: "-2.5<=x<=4" }, feedback: "Those are the right critical values, but the wrong region. The parabola y = 2x² − 3x − 20 is *below* the x-axis between −2.5 and 4. You want where it is above (≥ 0) — the two outside parts." },
        { spec: { type: "inequality", ineq: "x<=-4 or x>=2.5" }, feedback: "Check your factorisation: (2x + 5)(x − 4) = 0 gives x = −2.5 and x = 4." },
      ],
      solution: [
        "Rearrange: 2x² − 3x − 20 ≥ 0.",
        "Critical values: (2x + 5)(x − 4) = 0, so x = {{-5/2}} or x = 4.",
        "Sketch y = 2x² − 3x − 20: a ∪-shaped parabola crossing the x-axis at −2.5 and 4. It is on or above the axis outside the roots.",
        "So **x ≤ {{-5/2}} or x ≥ 4**.",
      ],
      commonError: "Writing −2.5 ≤ x ≤ 4 — the region *between* the roots is where the quadratic is negative.",
      hints: [
        "Get everything on one side so the quadratic is compared with 0.",
        "Factorise to find the critical values.",
        "Sketch the parabola. Where is it above the x-axis?",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-2b-q15",
      topicId: "sequences",
      guideRef: "arithmetic-series",
      difficulty: "core",
      question:
        "The rows of seats in a school theatre form an arithmetic sequence.\n\nThe first row has 22 seats. Each row has 3 more seats than the row in front of it.\n\nThe theatre has 1010 seats altogether. How many rows of seats does the theatre have?",
      answer: { type: "number", value: 20, display: "20 rows" },
      traps: [
        { spec: { type: "number", value: 330 }, feedback: "That treats 1010 as the number of seats in the *last row*. 1010 is the total of all rows — use the sum formula." },
      ],
      solution: [
        "a = 22, d = 3. Sum of n rows: {{S_n = n/2 (2a + (n - 1)d) = n/2 (44 + 3n - 3) = n/2 (3n + 41)}}",
        "{{n/2 (3n + 41) = 1010}}, so 3n² + 41n = 2020, i.e. 3n² + 41n − 2020 = 0.",
        "{{n = (-41 +- sqrt(1681 + 24240))/6 = (-41 +- sqrt(25921))/6 = (-41 +- 161)/6}}",
        "n = 20 or n = −{{101/3}}. n must be a positive whole number, so **20 rows**.",
        "Check: last row has 22 + 19 × 3 = 79 seats; total = {{20/2}} × (22 + 79) = 10 × 101 = 1010 ✓",
      ],
      commonError: "Using the nth-term formula instead of the sum formula.",
      hints: [
        "Is 1010 one term, or the sum of many terms?",
        "Use {{S_n = n/2 (2a + (n - 1)d)}} with a = 22 and d = 3, and set it equal to 1010.",
        "You get a quadratic in n — solve it and keep the root that makes sense.",
      ],
    },
    {
      kind: "mcq",
      id: "exam-2b-q16",
      topicId: "ratio-proportion",
      guideRef: "inverse-proportion",
      difficulty: "core",
      question:
        "The time, T hours, that a team of volunteers takes to clean a beach is inversely proportional to the square root of the number of volunteers, n.\n\nWhen n = 16, T = 6.\n\nWork out the number of volunteers needed to clean the beach in 4 hours.",
      options: ["24", "6", "36", "7.11"],
      answerIndex: 2,
      explanation:
        "{{T = k/sqrt(n)}}. When n = 16, T = 6: {{6 = k/4}}, so k = 24 and {{T = 24/sqrt(n)}}. When T = 4: {{sqrt(n) = 24/4 = 6}}, so n = {{6^2}} = **36**.\n\n6 is {{sqrt(n)}} — it still needs squaring. 24 comes from T = k/n (inverse proportion to n, forgetting the square root): k = 96 and n = 96 ÷ 4. 7.11 comes from direct proportion, T = k√n.",
      hints: [
        "Write the relationship as an equation: {{T = k/sqrt(n)}}.",
        "Use n = 16 and T = 6 to find k.",
        "Substitute T = 4 and solve for n — remember to undo the square root.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "exam-2b-q17",
      topicId: "statistics",
      guideRef: "histograms",
      difficulty: "core",
      question:
        "The histogram gives information about the times, t minutes, that some Year 11 students spent revising one evening. The frequency density axis has not been numbered.\n\n24 students spent between 30 and 35 minutes revising (30 < t ≤ 35).\n\nWork out the **total** number of students.",
      diagram: REVISION_HIST,
      answer: { type: "number", value: 104, display: "104 students" },
      traps: [
        { spec: { type: "number", value: 64 }, feedback: "You added the bar heights (4 + 13 + 24 + 18 + 5 small squares). Frequency is the *area* of a bar, not its height — the bars have different widths." },
        { spec: { type: "number", value: 120 }, feedback: "There are five bars, but they are not all the same as the 30–35 bar. Work out each bar's frequency from its area." },
      ],
      solution: [
        "Frequency is proportional to the area of each bar. Count in small squares (each 5 minutes wide).",
        "The 30–35 bar is 1 square wide and 24 squares tall: area 24 squares = 24 students, so **1 small square = 1 student**.",
        "0–20: 4 wide × 4 tall = 16. 20–30: 2 × 13 = 26. 35–40: 1 × 18 = 18. 40–60: 4 × 5 = 20.",
        "Total = 16 + 26 + 24 + 18 + 20 = **104 students**.",
      ],
      solutions: [
        { label: "Find the density scale", steps: ["Frequency density of 30–35 = 24 ÷ 5 = 4.8, and that bar is 24 small squares tall, so one small square up is 0.2.", "Densities: 0.8, 2.6, 4.8, 3.6, 1.0. Frequencies = density × width: 16, 26, 24, 18, 20.", "Total = 104."] },
      ],
      commonError: "Adding the bar heights instead of using the areas.",
      hints: [
        "In a histogram, the *area* of a bar represents the frequency.",
        "Use the 30–35 bar to work out how many students one small square of area stands for.",
        "Find the area of every bar, then add.",
      ],
    },
    {
      kind: "mcq",
      id: "exam-2b-q18",
      topicId: "graphs-of-functions",
      guideRef: "graph-transformations",
      difficulty: "core",
      question:
        "The curve with equation y = f(x) has a minimum point at (3, −5).\n\nWhat are the coordinates of the turning point of the curve with equation {{y = -f(x - 1)}}?",
      options: ["(2, 5)", "(4, −5)", "(−4, 5)", "(4, 5)"],
      answerIndex: 3,
      explanation:
        "f(x − 1) is a translation of 1 unit in the **positive** x-direction: (3, −5) → (4, −5). Then the minus sign in front reflects the curve in the x-axis, changing the sign of the y-coordinate: (4, −5) → **(4, 5)**, which is now a maximum point.\n\n(2, 5) moves the wrong way — inside the bracket, x − 1 shifts *right*. (4, −5) forgets the reflection, and (−4, 5) changes the sign of x as well, which would be f(−x).",
      hints: [
        "Deal with the change inside the bracket first: what does x − 1 do to the graph?",
        "A minus sign *outside* f reflects the graph in the x-axis: which coordinate changes sign?",
      ],
    },
    {
      kind: "short",
      id: "exam-2b-q19",
      topicId: "similarity-congruence",
      guideRef: "similar-lengths",
      difficulty: "core",
      question:
        "In triangle ABC, D is a point on AB and E is a point on AC. DE is parallel to BC.\n\nAD = 6 cm, DB = 4 cm, DE = 7.5 cm and AE = 5.4 cm.\n\nWork out the length of BC and the length of EC. Give your answers in the order BC, EC.",
      diagram: SIMILAR_TRI,
      answer: { type: "list", values: [12.5, 3.6], ordered: true, display: "BC = 12.5 cm, EC = 3.6 cm" },
      traps: [
        { spec: { type: "list", values: [5, 3.6], ordered: true }, feedback: "For BC you used the scale factor {{4/6}}. Triangle ABC is the enlargement of triangle ADE, so compare the *whole* side AB = 10 cm with AD = 6 cm: scale factor {{10/6}}." },
        { spec: { type: "list", values: [12.5, 9], ordered: true }, feedback: "9 cm is the whole of AC. EC is only the part from E to C: 9 − 5.4 = 3.6 cm." },
        { spec: { type: "list", values: [11.25, 3.6], ordered: true }, feedback: "For BC you used the ratio DB : AD the wrong way. Compare matching sides of the two similar triangles: AB = 10 cm with AD = 6 cm." },
      ],
      solution: [
        "DE is parallel to BC, so triangles ADE and ABC are similar (corresponding angles are equal; angle A is shared).",
        "AB = 6 + 4 = 10 cm, so the scale factor from ADE to ABC is {{10/6 = 5/3}}.",
        "BC = 7.5 × {{5/3}} = **12.5 cm**.",
        "AC = 5.4 × {{5/3}} = 9 cm, so EC = 9 − 5.4 = **3.6 cm**.",
      ],
      commonError: "Using DB (4 cm) instead of the whole side AB (10 cm) when finding the scale factor, or giving AC instead of EC.",
      hints: [
        "Why are triangles ADE and ABC similar?",
        "Matching sides: AD ↔ AB, DE ↔ BC, AE ↔ AC. What is AB?",
        "Find AC with the scale factor, then subtract AE to get EC.",
      ],
      strategy: "Use the inverse",
    },
    {
      kind: "short",
      id: "exam-2b-q20",
      topicId: "mensuration",
      guideRef: "frustums-composite",
      difficulty: "core",
      question:
        "Zara's plant pot is a frustum of a cone. The top has radius 12 cm, the base has radius 8 cm and the vertical height is 15 cm.\n\nThe frustum was made by cutting a small cone from a large cone, with the cut parallel to the base.\n\nWork out the volume of the pot in **litres**. Give your answer correct to 3 significant figures.\n\n(Volume of a cone = {{1/3 pi r^2 h}})",
      diagram: POT_FRUSTUM,
      answer: { type: "number", value: 4.78, tolerance: 0.005, display: "4.78 litres" },
      traps: [
        { spec: { type: "number", value: 4775, tolerance: 1 }, feedback: "That's the volume in cm³. 1 litre = 1000 cm³, so divide by 1000." },
        { spec: { type: "number", value: 4.71, tolerance: 0.005 }, feedback: "Did you use a cylinder with the mean radius 10 cm? A frustum isn't a cylinder — find the full cone and subtract the small cone." },
      ],
      solution: [
        "Let the full cone have height H. The small cone removed has height H − 15. By similar triangles, {{12/H = 8/(H - 15)}}.",
        "12(H − 15) = 8H, so 12H − 180 = 8H, giving H = 45 cm. The small cone has height 30 cm.",
        "Large cone: {{1/3 * pi * 12^2 * 45 = 2160 pi}} cm³. Small cone: {{1/3 * pi * 8^2 * 30 = 640 pi}} cm³.",
        "Frustum = 2160π − 640π = 1520π = 4775.2… cm³.",
        "In litres: 4775.2 ÷ 1000 = **4.78 litres** (3 s.f.).",
      ],
      commonError: "Forgetting to find the height of the full cone — the 15 cm is only the height of the frustum.",
      hints: [
        "Imagine the cone completed above the pot. How tall is it?",
        "Use similar triangles: radius ÷ height is the same for the big cone and the small cone.",
        "Volume of frustum = big cone − small cone. Then convert cm³ to litres.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "written",
      id: "exam-2b-q21",
      topicId: "angles-circle-theorems",
      guideRef: "circle-theorems-2",
      difficulty: "core",
      question:
        "A, B and C are points on a circle with centre O. PA and PB are tangents to the circle, touching it at A and B. C lies on the major arc AB.\n\nAngle APB = 48°.\n\nWork out the size of angle ACB. Give a reason for each stage of your working.",
      diagram: TANGENTS_P,
      marks: 4,
      modelAnswer:
        "Angle OAP = 90° and angle OBP = 90°, because a tangent is perpendicular to the radius at the point of contact.\n\nAngle AOB = 360° − 90° − 90° − 48° = 132°, because the angles in a quadrilateral (OAPB) add up to 360°.\n\nAngle ACB = 132° ÷ 2 = **66°**, because the angle at the centre is twice the angle at the circumference (both stand on the minor arc AB).",
      markScheme: [
        { point: "Angle OAP = angle OBP = 90° with reason: tangent is perpendicular to the radius", keywords: ["90", "perpendicular", "tangent", "radius"] },
        { point: "Angle AOB = 132°", keywords: ["132", "aob"] },
        { point: "Reason for AOB: angles in a quadrilateral add up to 360°", keywords: ["quadrilateral", "360"] },
        { point: "Angle ACB = 66° with reason: angle at the centre is twice the angle at the circumference", keywords: ["66", "centre", "twice", "double", "circumference", "half"] },
      ],
      commonError: "Assuming angle ACB = angle APB, or forgetting that the radius meets each tangent at 90°.",
      hints: [
        "Draw in the radii OA and OB. What angle does a radius make with a tangent?",
        "OAPB is a quadrilateral. Find angle AOB.",
        "Angle AOB and angle ACB stand on the same arc. Which theorem links them?",
      ],
      strategy: "Work backwards",
    },
    {
      kind: "short",
      id: "exam-2b-q22",
      topicId: "pythagoras-trigonometry",
      guideRef: "three-d",
      difficulty: "core",
      question:
        "The diagram shows a pyramid VABCD. The base ABCD is a rectangle with AB = 8 m and BC = 6 m.\n\nThe vertex V is vertically above M, the centre of the base. VA = VB = VC = VD = 13 m. N is the midpoint of BC.\n\nCalculate the size of the angle between the triangular face VBC and the base ABCD (angle VNM). Give your answer correct to 1 decimal place.",
      diagram: PYRAMID,
      answer: { type: "number", value: 71.6, tolerance: 0.05, display: "71.6°" },
      traps: [
        { spec: { type: "number", value: 67.4, tolerance: 0.05 }, feedback: "67.4° is the angle between the *edge* VA and the base. The face VBC meets the base along BC, so use the triangle VMN, where N is the midpoint of BC." },
        { spec: { type: "number", value: 76.0, tolerance: 0.05 }, feedback: "You used MN = 3 m (half of BC). N is the midpoint of BC, so MN runs parallel to AB: MN = half of AB = 4 m." },
        { spec: { type: "number", value: 18.4, tolerance: 0.05 }, feedback: "That is angle MVN at the top. The angle with the base is at N: angle VNM." },
      ],
      solution: [
        "First find the height VM. Diagonal AC = {{sqrt(8^2 + 6^2) = 10}} m, so AM = 5 m.",
        "Triangle VAM is right-angled at M: VM = {{sqrt(13^2 - 5^2) = 12}} m.",
        "MN goes from the centre to the midpoint of BC, parallel to AB, so MN = 8 ÷ 2 = 4 m.",
        "Triangle VMN is right-angled at M: {{tan VNM = 12/4 = 3}}.",
        "Angle VNM = {{tan^(-1)(3)}} = 71.565…° = **71.6°**.",
      ],
      commonError: "Using the edge VA instead of the line VN that lies in the face and is perpendicular to BC, or taking MN as half of BC.",
      hints: [
        "You need the height VM first. Which right-angled triangle contains VA and VM?",
        "AM is half the diagonal of the base. Use Pythagoras twice: once in the base, once in triangle VAM.",
        "Now look at triangle VMN. How long is MN, and which trig ratio links VM and MN?",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "written",
      id: "exam-2b-q23",
      topicId: "vectors-transformations",
      guideRef: "vector-geometry",
      difficulty: "core",
      question:
        "OAB is a triangle with →OA = **a** and →OB = **b**.\n\nP is the point on AB such that AP : PB = 1 : 2.\n\nThe line OA is extended to the point X so that OX = 2OA. The point Y is such that →XY = **b**.\n\nProve that O, P and Y lie on a straight line, and find the ratio OP : PY.",
      diagram: VECTOR_PATH,
      marks: 4,
      modelAnswer:
        "AB = −**a** + **b** = **b** − **a**, so AP = {{1/3}}(**b** − **a**).\n\nOP = OA + AP = **a** + {{1/3}}(**b** − **a**) = {{2/3}}**a** + {{1/3}}**b** = {{1/3}}(2**a** + **b**).\n\nOY = OX + XY = 2**a** + **b**.\n\nSo OY = 3 OP. The vectors OP and OY are parallel (one is a multiple of the other) and they share the point O, so O, P and Y lie on a straight line.\n\nOP is {{1/3}} of OY, so PY = {{2/3}} OY and OP : PY = **1 : 2**.",
      markScheme: [
        { point: "AP = 1/3(b − a) (or AB = b − a)", keywords: ["b - a", "b − a", "1/3"] },
        { point: "OP = 2/3 a + 1/3 b", keywords: ["2/3", "op", "2/3a"] },
        { point: "OY = 2a + b = 3OP, so parallel with common point O ⇒ collinear", keywords: ["2a + b", "3op", "parallel", "common point", "straight line"] },
        { point: "OP : PY = 1 : 2", keywords: ["1 : 2", "1:2"] },
      ],
      commonError: "Showing OY is a multiple of OP but not saying they share the point O — parallel alone is not enough for a straight line.",
      hints: [
        "Write →AB in terms of **a** and **b**, then take {{1/3}} of it to get →AP.",
        "Find →OP and →OY. Can you take a common factor out of →OP?",
        "If →OY is a multiple of →OP, what can you say — and what extra fact do you need for a straight line?",
      ],
    },

    // ============================ CHALLENGE ================================
    {
      kind: "short",
      id: "exam-2b-q24",
      topicId: "calculus",
      guideRef: "kinematics",
      difficulty: "challenge",
      question:
        "A particle moves along a straight line. Its displacement, s metres, from a fixed point O at time t seconds is\n\n{{s = t^3 - 9t^2 + 24t + 2}}\n\nWork out the **total distance** travelled by the particle in the first 5 seconds (from t = 0 to t = 5).",
      answer: { type: "number", value: 28, display: "28 m" },
      traps: [
        { spec: { type: "number", value: 20 }, feedback: "That is the change in displacement, s(5) − s(0). The particle turns round twice in this time — find when v = 0 and add up each stage separately." },
        { spec: { type: "number", value: 22 }, feedback: "22 is the displacement at t = 5, not the distance travelled. The particle starts at s = 2 and changes direction twice." },
        { spec: { type: "number", value: 24 }, feedback: "You've found one of the turn-rounds but not both. v = 3(t − 2)(t − 4), so it stops at t = 2 **and** t = 4." },
      ],
      solution: [
        "Velocity {{v = (ds)/(dt) = 3t^2 - 18t + 24 = 3(t^2 - 6t + 8) = 3(t - 2)(t - 4)}}.",
        "The particle is at rest (and turns round) at t = 2 and t = 4.",
        "s(0) = 2, s(2) = 8 − 36 + 48 + 2 = 22, s(4) = 64 − 144 + 96 + 2 = 18, s(5) = 125 − 225 + 120 + 2 = 22.",
        "Stage distances: 0 → 2: |22 − 2| = 20 m. 2 → 4: |18 − 22| = 4 m. 4 → 5: |22 − 18| = 4 m.",
        "Total distance = 20 + 4 + 4 = **28 m**.",
      ],
      commonError: "Calculating s(5) − s(0) = 20 m, which ignores the particle moving backwards between t = 2 and t = 4.",
      hints: [
        "Distance is not the same as displacement if the particle turns round. When does it turn round?",
        "Differentiate to find v and solve v = 0.",
        "Find s at t = 0, 2, 4 and 5, and add up the size of each change.",
      ],
      strategy: "Split into cases",
    },
    {
      kind: "written",
      id: "exam-2b-q25",
      topicId: "probability",
      guideRef: "algebraic-probability",
      difficulty: "challenge",
      question:
        "There are n counters in a bag. 4 of the counters are blue and the rest are yellow.\n\nOlivia takes a counter at random from the bag and does not put it back. She then takes a second counter at random.\n\nThe probability that both counters are yellow is {{1/3}}.\n\nShow that {{n^2 - 13n + 30 = 0}} and hence find the number of counters in the bag.",
      marks: 4,
      modelAnswer:
        "There are n − 4 yellow counters.\n\nP(both yellow) = {{(n - 4)/n * (n - 5)/(n - 1) = 1/3}}\n\nCross-multiply: 3(n − 4)(n − 5) = n(n − 1)\n\n3(n² − 9n + 20) = n² − n\n\n3n² − 27n + 60 = n² − n\n\n2n² − 26n + 60 = 0, and dividing by 2 gives **n² − 13n + 30 = 0** as required.\n\nFactorise: (n − 3)(n − 10) = 0, so n = 3 or n = 10. There are already 4 blue counters, so n cannot be 3. **n = 10** counters.",
      markScheme: [
        { point: "P(both yellow) = (n − 4)/n × (n − 5)/(n − 1)", keywords: ["n - 4", "n − 4", "n - 5", "n − 5", "n - 1", "n − 1"] },
        { point: "Sets equal to 1/3 and clears fractions: 3(n − 4)(n − 5) = n(n − 1)", keywords: ["1/3", "3(n", "n(n"] },
        { point: "Expands and simplifies correctly to n² − 13n + 30 = 0", keywords: ["2n^2 - 26n + 60", "2n² − 26n + 60", "n^2 - 13n + 30", "n² − 13n + 30"] },
        { point: "Solves to n = 10, rejecting n = 3 (fewer than 4 counters)", keywords: ["10", "reject", "3"] },
      ],
      commonError: "Using (n − 4)/n for the second counter as well — without replacement, both the top and bottom go down by 1.",
      hints: [
        "How many yellow counters are there, in terms of n?",
        "Without replacement: after one yellow is taken, there are n − 5 yellows out of n − 1 counters.",
        "Multiply the two probabilities, set equal to {{1/3}}, and clear the fractions.",
        "Solving gives two values of n — can both be right with 4 blue counters in the bag?",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "exam-2b-q26",
      topicId: "functions",
      guideRef: "composite-functions",
      difficulty: "challenge",
      question:
        "The functions f and g are defined by\n\n{{f(x) = 2x - 3}}  and  {{g(x) = x^2 + 1}}\n\nSolve the equation {{fg(x) = f^(-1)(x)}}. Give both solutions.",
      answer: { type: "list", values: [-1, 1.25], ordered: false, display: "x = −1 or x = {{5/4}}" },
      traps: [
        { spec: { type: "list", values: [1, 2.125], ordered: false }, feedback: "You used gf(x) = (2x − 3)² + 1. fg(x) means *g first*, then f: f(x² + 1) = 2(x² + 1) − 3." },
        { spec: { type: "list", values: [1, -1.25], ordered: false }, feedback: "Check your signs when solving 4x² − x − 5 = 0: it factorises as (4x − 5)(x + 1) = 0." },
      ],
      solution: [
        "fg(x) = f(x² + 1) = 2(x² + 1) − 3 = 2x² − 1.",
        "Inverse of f: y = 2x − 3 ⇒ x = {{(y + 3)/2}}, so {{f^(-1)(x) = (x + 3)/2}}.",
        "Solve {{2x^2 - 1 = (x + 3)/2}}: multiply by 2 to get 4x² − 2 = x + 3, so 4x² − x − 5 = 0.",
        "Factorise: (4x − 5)(x + 1) = 0, so **x = {{5/4}} or x = −1**.",
        "Check x = −1: fg(−1) = 2 − 1 = 1 and {{f^(-1)(-1) = 2/2 = 1}} ✓",
      ],
      commonError: "Working out gf(x) instead of fg(x) — the function nearest x acts first.",
      hints: [
        "fg(x) means f(g(x)): put g(x) into f.",
        "To find {{f^(-1)(x)}}, write y = 2x − 3 and make x the subject.",
        "Set them equal, clear the fraction and solve the quadratic.",
      ],
      strategy: "Use the inverse",
    },
    {
      kind: "short",
      id: "exam-2b-q27",
      topicId: "further-trigonometry",
      guideRef: "cosine-rule",
      difficulty: "challenge",
      question:
        "A ship sails from port P on a bearing of 062° for 14 km to a buoy A.\n\nIt then sails on a bearing of 155° for 9 km to a lighthouse B.\n\nCalculate the bearing of B from P. Give your answer correct to 1 decimal place.",
      diagram: SHIP_BEARINGS,
      answer: { type: "number", value: 95.6, tolerance: 0.05, display: "095.6°" },
      traps: [
        { spec: { type: "number", value: 33.6, tolerance: 0.05 }, feedback: "33.6° is angle APB, the angle inside the triangle. A bearing is measured clockwise from North: add it to the 62°." },
        { spec: { type: "number", value: 28.4, tolerance: 0.05 }, feedback: "You subtracted angle APB from 62°. B is clockwise of A as seen from P (it is further round towards the East and South), so add." },
        { spec: { type: "number", value: 16.2, tolerance: 0.05 }, feedback: "16.2 km is the distance PB. The question asks for the bearing of B from P." },
      ],
      solution: [
        "Angle at A: the bearing of P from A is 062° + 180° = 242°. The ship leaves A on 155°, so angle PAB = 242° − 155° = 87°.",
        "Cosine rule: {{PB^2 = 14^2 + 9^2 - 2 * 14 * 9 * cos 87°}} = 277 − 13.19… = 263.81…, so PB = 16.242… km.",
        "Sine rule for angle APB: {{sin APB = (9 sin 87°)/16.242...}} = 0.5534…, so angle APB = 33.597…°.",
        "Bearing of B from P = 62° + 33.6° = **095.6°**.",
      ],
      solutions: [
        {
          label: "Coordinates (East, North)",
          steps: [
            "A = (14 sin 62°, 14 cos 62°) = (12.361, 6.573).",
            "B = A + (9 sin 155°, 9 cos 155°) = (12.361 + 3.804, 6.573 − 8.157) = (16.165, −1.584).",
            "B is East and slightly South of P: bearing = 90° + {{tan^(-1)(1.584/16.165)}} = 90° + 5.6° = 095.6°.",
          ],
        },
      ],
      commonError: "Taking angle PAB as 155° − 62° = 93° instead of using the back bearing (the correct angle is 87°).",
      hints: [
        "Draw a North line at A. What is the bearing of P from A (the back bearing)?",
        "Angle PAB = back bearing − 155°. Then use the cosine rule to find PB.",
        "Use the sine rule to find angle APB, then add it to 62°.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-2b-q28",
      topicId: "indices-surds",
      guideRef: "rationalising",
      difficulty: "challenge",
      question:
        "A rectangle has area {{(8 + 3sqrt(2))}} cm² and width {{(2 + sqrt(2))}} cm.\n\nWork out the length of the rectangle. Give your answer in the form {{a + b sqrt(2)}}, where a and b are integers.",
      answer: { type: "expression", expr: "5-sqrt(2)", form: "surd", display: "{{5 - sqrt(2)}} cm" },
      traps: [
        { spec: { type: "expression", expr: "5+sqrt(2)" }, feedback: "Check the middle terms: (8 + 3√2)(2 − √2) = 16 − 8√2 + 6√2 − 6 = 10 − 2√2. The √2 term is negative." },
        { spec: { type: "expression", expr: "10-2sqrt(2)" }, feedback: "That's the numerator after multiplying by the conjugate. You still need to divide by (2 + √2)(2 − √2) = 4 − 2 = 2." },
      ],
      solution: [
        "Length = area ÷ width = {{(8 + 3sqrt(2))/(2 + sqrt(2))}}",
        "Multiply top and bottom by the conjugate (2 − √2).",
        "Top: {{(8 + 3sqrt(2))(2 - sqrt(2)) = 16 - 8sqrt(2) + 6sqrt(2) - 6 = 10 - 2sqrt(2)}}",
        "Bottom: {{(2 + sqrt(2))(2 - sqrt(2)) = 4 - 2 = 2}}",
        "Length = {{(10 - 2sqrt(2))/2}} = **{{5 - sqrt(2)}} cm**.",
        "Check: {{(2 + sqrt(2))(5 - sqrt(2)) = 10 - 2sqrt(2) + 5sqrt(2) - 2 = 8 + 3sqrt(2)}} ✓",
      ],
      solutions: [
        {
          label: "Compare coefficients",
          steps: [
            "Let the length be a + b√2. Then (2 + √2)(a + b√2) = 2a + 2b + (a + 2b)√2 = 8 + 3√2.",
            "So 2a + 2b = 8 and a + 2b = 3. Subtract: a = 5, then b = −1.",
            "Length = 5 − √2.",
          ],
        },
      ],
      commonError: "Multiplying by (2 + √2) instead of the conjugate (2 − √2), which leaves a surd in the denominator.",
      hints: [
        "Length = area ÷ width — you need to divide by a surd expression.",
        "Rationalise: multiply top and bottom by the conjugate of 2 + √2.",
        "(2 + √2)(2 − √2) is a difference of two squares.",
      ],
      strategy: "Use the inverse",
    },
    {
      kind: "short",
      id: "exam-2b-q29",
      topicId: "linear-graphs",
      guideRef: "parallel-perpendicular",
      difficulty: "challenge",
      question:
        "The point Q(3, 6) lies on the circle with equation {{x^2 + y^2 = 45}}.\n\nThe tangent to the circle at Q meets the x-axis at R and the y-axis at S.\n\nWork out the area of triangle ORS, where O is the origin.",
      answer: { type: "number", value: 56.25, display: "56.25 square units ({{225/4}})" },
      traps: [
        { spec: { type: "number", value: 112.5 }, feedback: "That's base × height. The area of a triangle is half of that." },
        { spec: { type: "number", value: 20.25 }, feedback: "Check the sign of the tangent gradient. Perpendicular gradients multiply to −1, so the tangent has gradient {{-1/2}}, not {{1/2}}." },
      ],
      solution: [
        "The circle has centre O. Gradient of radius OQ = {{6/3}} = 2.",
        "The tangent is perpendicular to the radius, so its gradient is {{-1/2}}.",
        "Tangent: {{y - 6 = -1/2 (x - 3)}}, which gives 2y − 12 = −x + 3, i.e. x + 2y = 15.",
        "R (y = 0): x = 15. S (x = 0): y = 7.5.",
        "Area of ORS = {{1/2}} × 15 × 7.5 = **56.25** square units.",
      ],
      commonError: "Using the gradient of the radius for the tangent.",
      hints: [
        "A tangent to a circle is perpendicular to the radius at the point of contact. What is the gradient of OQ?",
        "Perpendicular gradients multiply to −1. Write the tangent's equation using y − y₁ = m(x − x₁).",
        "Find where the tangent crosses each axis — triangle ORS is right-angled at O.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-2b-q30",
      topicId: "further-trigonometry",
      guideRef: "area-sine",
      difficulty: "challenge",
      question:
        "In triangle ABC, AB = x cm, AC = (x + 4) cm and angle BAC = 150°.\n\nThe area of the triangle is 24 cm².\n\nCalculate the length of BC. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 19.3, tolerance: 0.05, display: "19.3 cm" },
      traps: [
        { spec: { type: "number", value: 6.46, tolerance: 0.01 }, feedback: "cos 150° is **negative** (−{{sqrt(3)/2}}), so −2bc cos A *adds* 96√3. An obtuse angle must give the longest side." },
      ],
      solution: [
        "Area = {{1/2 ab sin C}}: {{1/2 * x(x + 4) * sin 150° = 24}}. Since sin 150° = {{1/2}}, this is {{1/4 x(x + 4) = 24}}.",
        "x² + 4x − 96 = 0, so (x + 12)(x − 8) = 0. x is a length, so x = 8. AB = 8 cm, AC = 12 cm.",
        "Cosine rule: {{BC^2 = 8^2 + 12^2 - 2 * 8 * 12 * cos 150°}} = 208 − 192 × (−0.8660…) = 208 + 166.28… = 374.27…",
        "BC = √374.27… = 19.346… = **19.3 cm** (3 s.f.).",
      ],
      commonError: "Treating cos 150° as positive, which gives a side shorter than the other two — impossible opposite an obtuse angle.",
      hints: [
        "Use area = ½ab sin C with the two sides x and x + 4 and the angle between them.",
        "sin 150° = ½. You get a quadratic in x — which root is a length?",
        "Now you know two sides and the included angle: use the cosine rule. Watch the sign of cos 150°.",
      ],
      strategy: "Work backwards",
    },
  ],
};
