// ---------------------------------------------------------------------------
// Mock Set A — Paper 2H (cross-topic, 30 questions, 120 minutes, calculator).
// Modelled on Edexcel IGCSE 4MA1 Higher Paper 2H: problem solving in context,
// proportion, mensuration, probability & sets, sequences, vectors, functions
// and differentiation, with multi-step questions.
// Ordered easier → harder: q01–q08 warm-up, q09–q23 core, q24–q30 challenge.
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

const ELEVATION = `<svg viewBox="0 0 340 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A vertical tower TF stands on level ground at F. Points A and B are on the ground in a straight line with F, with B between A and F. AB is 60 m. The angle of elevation of T from A is 32 degrees and from B is 51 degrees." font-family="sans-serif"><rect x="0" y="0" width="340" height="290" fill="#ffffff"/><line x1="20" y1="260" x2="320" y2="260" stroke="#1f2937" stroke-width="1.5"/><rect x="276" y="108" width="14" height="152" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><g stroke="#334155" stroke-width="1.5"><line x1="40" y1="260" x2="283" y2="108"/><line x1="160" y1="260" x2="283" y2="108"/></g><path d="M80 260 A40 40 0 0 0 73.9 238.8" fill="none" stroke="#334155" stroke-width="1.2"/><path d="M190 260 A30 30 0 0 0 178.9 236.7" fill="none" stroke="#334155" stroke-width="1.2"/><circle cx="40" cy="260" r="3" fill="#1f2937"/><circle cx="160" cy="260" r="3" fill="#1f2937"/><g font-size="13" fill="#1f2937"><text x="36" y="280">A</text><text x="156" y="280">B</text><text x="294" y="280">F</text><text x="290" y="102">T</text><text x="86" y="252" font-size="12">32°</text><text x="194" y="252" font-size="12">51°</text><text x="100" y="278" font-size="12" text-anchor="middle">60 m</text><text x="330" y="22" font-size="11" text-anchor="end">Not to scale</text></g></svg>`;

const HOMEWORK_HISTOGRAM = `<svg viewBox="0 0 480 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of time spent on homework, t minutes, from 0 to 100. Frequency density axis from 0 to 2.5. Bars: 0 to 20 height 0.7; 20 to 30 height 1.8; 30 to 40 height 2.4; 40 to 60 height 1.4; 60 to 100 height 0.4." font-family="sans-serif"><rect x="0" y="0" width="480" height="310" fill="#ffffff"/><g stroke="#eef2f7" stroke-width="1"><line x1="50" y1="252" x2="450" y2="252"/><line x1="50" y1="244" x2="450" y2="244"/><line x1="50" y1="236" x2="450" y2="236"/><line x1="50" y1="228" x2="450" y2="228"/><line x1="50" y1="212" x2="450" y2="212"/><line x1="50" y1="204" x2="450" y2="204"/><line x1="50" y1="196" x2="450" y2="196"/><line x1="50" y1="188" x2="450" y2="188"/><line x1="50" y1="172" x2="450" y2="172"/><line x1="50" y1="164" x2="450" y2="164"/><line x1="50" y1="156" x2="450" y2="156"/><line x1="50" y1="148" x2="450" y2="148"/><line x1="50" y1="132" x2="450" y2="132"/><line x1="50" y1="124" x2="450" y2="124"/><line x1="50" y1="116" x2="450" y2="116"/><line x1="50" y1="108" x2="450" y2="108"/><line x1="50" y1="92" x2="450" y2="92"/><line x1="50" y1="84" x2="450" y2="84"/><line x1="50" y1="76" x2="450" y2="76"/><line x1="50" y1="68" x2="450" y2="68"/></g><g stroke="#cbd5e1" stroke-width="1"><line x1="50" y1="220" x2="450" y2="220"/><line x1="50" y1="180" x2="450" y2="180"/><line x1="50" y1="140" x2="450" y2="140"/><line x1="50" y1="100" x2="450" y2="100"/><line x1="50" y1="60" x2="450" y2="60"/><line x1="90" y1="60" x2="90" y2="260"/><line x1="130" y1="60" x2="130" y2="260"/><line x1="170" y1="60" x2="170" y2="260"/><line x1="210" y1="60" x2="210" y2="260"/><line x1="250" y1="60" x2="250" y2="260"/><line x1="290" y1="60" x2="290" y2="260"/><line x1="330" y1="60" x2="330" y2="260"/><line x1="370" y1="60" x2="370" y2="260"/><line x1="410" y1="60" x2="410" y2="260"/><line x1="450" y1="60" x2="450" y2="260"/></g><g fill="#bae6fd" stroke="#1f2937" stroke-width="1.5"><rect x="50" y="204" width="80" height="56"/><rect x="130" y="116" width="40" height="144"/><rect x="170" y="68" width="40" height="192"/><rect x="210" y="148" width="80" height="112"/><rect x="290" y="228" width="160" height="32"/></g><line x1="50" y1="260" x2="460" y2="260" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="260" x2="50" y2="50" stroke="#1f2937" stroke-width="1.5"/><g font-size="11" fill="#1f2937" text-anchor="middle"><text x="50" y="276">0</text><text x="90" y="276">10</text><text x="130" y="276">20</text><text x="170" y="276">30</text><text x="210" y="276">40</text><text x="250" y="276">50</text><text x="290" y="276">60</text><text x="330" y="276">70</text><text x="370" y="276">80</text><text x="410" y="276">90</text><text x="450" y="276">100</text></g><g font-size="11" fill="#1f2937" text-anchor="end"><text x="44" y="264">0</text><text x="44" y="224">0.5</text><text x="44" y="184">1.0</text><text x="44" y="144">1.5</text><text x="44" y="104">2.0</text><text x="44" y="64">2.5</text></g><text x="250" y="300" font-size="12" fill="#1f2937" text-anchor="middle">Time, t (minutes)</text><text x="14" y="160" font-size="12" fill="#1f2937" text-anchor="middle" transform="rotate(-90 14 160)">Frequency density</text></svg>`;

const FIELD_TRIANGLE = `<svg viewBox="0 0 360 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle PQR. PQ is 48 m, QR is 65 m and PR is 70 m." font-family="sans-serif"><rect x="0" y="0" width="360" height="280" fill="#ffffff"/><polygon points="60,250 320,250 110.1,64.7" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><g font-size="13" fill="#1f2937"><text x="46" y="266">Q</text><text x="324" y="266">R</text><text x="104" y="56">P</text><text x="190" y="270" text-anchor="middle" font-size="12">65 m</text><text x="66" y="160" font-size="12" text-anchor="end">48 m</text><text x="228" y="148" font-size="12">70 m</text><text x="350" y="20" font-size="11" text-anchor="end">Not to scale</text></g></svg>`;

const VECTOR_AB = `<svg viewBox="0 0 420 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB. The vector OA is a and the vector OB is b. P is a point on AB with AP to PB equal to 2 to 3." font-family="sans-serif"><rect x="0" y="0" width="420" height="270" fill="#ffffff"/><polygon points="40,240 120,60 380,220" fill="#fde68a" fill-opacity="0.5" stroke="#1f2937" stroke-width="1.8"/><g stroke="#1f2937" stroke-width="1.8" fill="none"><path d="M76 159 L80 150 L84 160"/><path d="M200 233 L210 230 L201 226"/></g><circle cx="224" cy="124" r="3.5" fill="#1f2937"/><g font-size="13" fill="#1f2937"><text x="24" y="256">O</text><text x="112" y="50">A</text><text x="388" y="226">B</text><text x="228" y="116">P</text><text x="64" y="146" font-weight="bold">a</text><text x="206" y="252" font-weight="bold">b</text><text x="410" y="20" font-size="11" text-anchor="end">Not to scale</text></g></svg>`;

const MRT_SPEED = `<svg viewBox="0 0 380 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Speed-time graph. The speed rises in a straight line from 0 at 0 seconds to 20 metres per second at 25 seconds, stays at 20 metres per second until 85 seconds, then falls in a straight line to 0 at 100 seconds." font-family="sans-serif"><rect x="0" y="0" width="380" height="270" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="80" y1="30" x2="80" y2="230"/><line x1="110" y1="30" x2="110" y2="230"/><line x1="140" y1="30" x2="140" y2="230"/><line x1="170" y1="30" x2="170" y2="230"/><line x1="200" y1="30" x2="200" y2="230"/><line x1="230" y1="30" x2="230" y2="230"/><line x1="260" y1="30" x2="260" y2="230"/><line x1="290" y1="30" x2="290" y2="230"/><line x1="320" y1="30" x2="320" y2="230"/><line x1="350" y1="30" x2="350" y2="230"/><line x1="50" y1="190" x2="350" y2="190"/><line x1="50" y1="150" x2="350" y2="150"/><line x1="50" y1="110" x2="350" y2="110"/><line x1="50" y1="70" x2="350" y2="70"/><line x1="50" y1="30" x2="350" y2="30"/></g><line x1="50" y1="230" x2="360" y2="230" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="230" x2="50" y2="22" stroke="#1f2937" stroke-width="1.5"/><polyline points="50,230 125,70 305,70 350,230" fill="none" stroke="#334155" stroke-width="2.5"/><g font-size="11" fill="#1f2937" text-anchor="middle"><text x="50" y="246">0</text><text x="110" y="246">20</text><text x="170" y="246">40</text><text x="230" y="246">60</text><text x="290" y="246">80</text><text x="350" y="246">100</text></g><g font-size="11" fill="#1f2937" text-anchor="end"><text x="44" y="234">0</text><text x="44" y="194">5</text><text x="44" y="154">10</text><text x="44" y="114">15</text><text x="44" y="74">20</text><text x="44" y="34">25</text></g><text x="200" y="264" font-size="12" fill="#1f2937" text-anchor="middle">Time (seconds)</text><text x="14" y="130" font-size="12" fill="#1f2937" text-anchor="middle" transform="rotate(-90 14 130)">Speed (m/s)</text></svg>`;

const VECTOR_COLLINEAR = `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB with OA equal to a and OB equal to b. M is the midpoint of OA. P is on AB with AP to PB equal to 2 to 1. The line OB is extended to Q so that OQ equals 2b." font-family="sans-serif"><rect x="0" y="0" width="400" height="280" fill="#ffffff"/><polygon points="30,250 110,50 200,250" fill="#c7d2fe" fill-opacity="0.5" stroke="#1f2937" stroke-width="1.8"/><line x1="200" y1="250" x2="370" y2="250" stroke="#1f2937" stroke-width="1.8" stroke-dasharray="6 4"/><g fill="#1f2937"><circle cx="70" cy="150" r="3.5"/><circle cx="170" cy="183.3" r="3.5"/><circle cx="370" cy="250" r="3.5"/></g><g stroke="#1f2937" stroke-width="1.8" fill="none"><path d="M45 216 L50 205 L56 214"/><path d="M110 245 L120 250 L110 255"/></g><g font-size="13" fill="#1f2937"><text x="14" y="266">O</text><text x="104" y="40">A</text><text x="194" y="270">B</text><text x="364" y="270">Q</text><text x="52" y="146">M</text><text x="178" y="180">P</text><text x="34" y="200" font-weight="bold">a</text><text x="112" y="272" font-weight="bold">b</text><text x="392" y="20" font-size="11" text-anchor="end">Not to scale</text></g></svg>`;

const BUCKET = `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A bucket in the shape of a frustum of a cone. The top radius is 15 cm, the base radius is 10 cm and the vertical height is 24 cm. Water fills the bucket to a depth of 12 cm." font-family="sans-serif"><rect x="0" y="0" width="400" height="260" fill="#ffffff"/><path d="M125 122 L140 194 A60 10 0 0 0 260 194 L275 122 A75 12 0 0 1 125 122 Z" fill="#bae6fd" stroke="none"/><ellipse cx="200" cy="122" rx="75" ry="12" fill="#bae6fd" stroke="#334155" stroke-width="1" stroke-dasharray="4 3"/><line x1="110" y1="50" x2="140" y2="194" stroke="#1f2937" stroke-width="2"/><line x1="290" y1="50" x2="260" y2="194" stroke="#1f2937" stroke-width="2"/><ellipse cx="200" cy="50" rx="90" ry="14" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M140 194 A60 10 0 0 0 260 194" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M140 194 A60 10 0 0 1 260 194" fill="none" stroke="#334155" stroke-width="1" stroke-dasharray="4 3"/><g stroke="#334155" stroke-width="1"><line x1="200" y1="50" x2="290" y2="50"/><line x1="200" y1="194" x2="260" y2="194"/><line x1="320" y1="50" x2="320" y2="194"/><line x1="314" y1="50" x2="326" y2="50"/><line x1="314" y1="194" x2="326" y2="194"/><line x1="80" y1="122" x2="80" y2="194"/><line x1="74" y1="122" x2="86" y2="122"/><line x1="74" y1="194" x2="86" y2="194"/></g><g font-size="12" fill="#1f2937"><text x="245" y="44" text-anchor="middle">15 cm</text><text x="230" y="214" text-anchor="middle">10 cm</text><text x="328" y="126">24 cm</text><text x="72" y="162" text-anchor="end">12 cm</text><text x="200" y="160" text-anchor="middle" font-size="11">water</text><text x="392" y="250" font-size="11" text-anchor="end">Not to scale</text></g></svg>`;

export const paper: ExamPaper = {
  id: "exam-2a",
  title: "Mock Set A — Paper 2H",
  calculator: true,
  minutes: 120,
  questions: [
    // ============================ WARM-UP ==================================
    {
      kind: "short",
      id: "exam-2a-q01",
      topicId: "ratio-proportion",
      guideRef: "ratio-problems",
      difficulty: "warmup",
      question:
        "Mei is going on a CCA trip to Kuala Lumpur. She changes S$600 into ringgit (RM) at a rate of S$1 = RM3.42.\n\nOn the trip she spends RM1500. When she gets home she changes the ringgit she has left back into Singapore dollars at a rate of S$1 = RM3.50.\n\nHow many Singapore dollars does she get back? Give your answer to the nearest cent.",
      answer: { type: "number", value: 157.71, tolerance: 0.005, display: "S$157.71" },
      traps: [
        { spec: { type: "number", value: 161.40, tolerance: 0.006 }, feedback: "You changed the RM552 back using the old rate (÷ 3.42). On the way home the rate is S$1 = RM3.50, so divide by 3.50." },
        { spec: { type: "number", value: 1932, tolerance: 0.5 }, feedback: "You multiplied by 3.50. Going from ringgit back to dollars you need *fewer* dollars than ringgit — divide by 3.50." },
      ],
      solution: [
        "S$600 → 600 × 3.42 = RM2052.",
        "Left after the trip: 2052 − 1500 = RM552.",
        "Back to dollars: 552 ÷ 3.50 = 157.714… → **S$157.71**.",
      ],
      commonError: "Multiplying by the exchange rate in both directions instead of dividing on the way back.",
      hints: [
        "Work in ringgit first: how many ringgit does she get for S$600?",
        "Each S$1 costs RM3.50 on the way back, so how many lots of 3.50 are in what she has left?",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "short",
      id: "exam-2a-q02",
      topicId: "fractions-percentages",
      guideRef: "compound-growth",
      difficulty: "warmup",
      question:
        "Arjun's grandmother invests $8000 in a savings account. The account pays 4% compound interest per year.\n\nWork out the value of the investment at the end of 5 years. Give your answer to the nearest cent.",
      answer: { type: "number", value: 9733.22, tolerance: 0.006, display: "$9733.22" },
      traps: [
        { spec: { type: "number", value: 9600, tolerance: 0.006 }, feedback: "That is *simple* interest: 5 × 4% = 20% of $8000. With compound interest each year's 4% is worked out on the new, larger balance, so use the multiplier 1.04 five times." },
        { spec: { type: "number", value: 1733.22, tolerance: 0.006 }, feedback: "That is only the interest earned. The question asks for the total value of the investment." },
      ],
      solution: [
        "A 4% increase means the multiplier is 1 + 0.04 = 1.04.",
        "After 5 years: 8000 × {{1.04^5}} = 8000 × 1.216 652… = 9733.223…",
        "Value = **$9733.22** (to the nearest cent).",
      ],
      commonError: "Using simple interest (adding 20% of $8000 once), giving $9600.",
      hints: [
        "What single number do you multiply by to increase something by 4%?",
        "Apply that multiplier once for each year: {{8000 * 1.04^5}}.",
      ],
    },
    {
      kind: "short",
      id: "exam-2a-q03",
      topicId: "number-bounds",
      guideRef: "prime-factors-hcf-lcm",
      difficulty: "warmup",
      question:
        "A florist has 72 roses and 108 lilies. She uses **all** of them to make identical bunches: every bunch has the same number of roses and the same number of lilies.\n\nWork out the greatest number of bunches she can make.",
      answer: { type: "number", value: 36, display: "36 bunches" },
      traps: [
        { spec: { type: "number", value: 216 }, feedback: "216 is the LCM of 72 and 108. Splitting the flowers into equal groups needs a number that *divides* both 72 and 108 — the HCF." },
        { spec: { type: "number", value: 12 }, feedback: "12 bunches would work, but it isn't the *greatest* number. Use prime factors to find the highest common factor." },
        { spec: { type: "number", value: 5 }, feedback: "5 is the number of flowers in each bunch (2 roses + 3 lilies). The question asks how many bunches." },
      ],
      solution: [
        "The number of bunches must divide both 72 and 108, and we want the largest such number: the HCF.",
        "{{72 = 2^3 * 3^2}} and {{108 = 2^2 * 3^3}}.",
        "HCF = take the lowest power of each shared prime: {{2^2 * 3^2}} = 36.",
        "So **36 bunches**, each with 2 roses and 3 lilies.",
      ],
      commonError: "Finding the LCM (216) instead of the HCF.",
      hints: [
        "The number of bunches must go exactly into 72 and into 108.",
        "Write 72 and 108 as products of prime factors, then take the lower power of each prime they share.",
      ],
      strategy: "Use prime factors",
    },
    {
      kind: "short",
      id: "exam-2a-q04",
      topicId: "statistics",
      guideRef: "frequency-tables",
      difficulty: "warmup",
      question:
        "The table shows the times, t minutes, that 40 students took to travel to school.\n\n| Time (t minutes) | Frequency |\n|---|---|\n| 0 < t ≤ 10 | 6 |\n| 10 < t ≤ 20 | 14 |\n| 20 < t ≤ 30 | 11 |\n| 30 < t ≤ 40 | 7 |\n| 40 < t ≤ 60 | 2 |\n\nWork out an estimate for the mean time. Give your answer in minutes.",
      answer: { type: "number", value: 21.5, display: "21.5 minutes" },
      traps: [
        { spec: { type: "number", value: 172 }, feedback: "You divided by 5 (the number of groups). The mean is the total time divided by the number of *students*, 40." },
        { spec: { type: "number", value: 26.75 }, feedback: "You used the upper end of each class (10, 20, 30, 40, 60). Use the class *midpoints* (5, 15, 25, 35, 50) — they are the best single estimate for each group." },
      ],
      solution: [
        "Midpoints: 5, 15, 25, 35, 50.",
        "Σft = 6×5 + 14×15 + 11×25 + 7×35 + 2×50 = 30 + 210 + 275 + 245 + 100 = 860.",
        "Estimated mean = 860 ÷ 40 = **21.5 minutes**.",
      ],
      commonError: "Using the upper class boundaries instead of the midpoints, or dividing by the number of classes.",
      hints: [
        "You don't know each exact time, so use the midpoint of each class.",
        "Multiply each midpoint by its frequency, add, then divide by the total frequency.",
      ],
    },
    {
      kind: "mcq",
      id: "exam-2a-q05",
      topicId: "indices-surds",
      guideRef: "standard-form",
      difficulty: "warmup",
      question:
        "The distance from the Earth to the Sun is about {{1.496 * 10^8}} km. Light travels at about {{3.00 * 10^5}} km per second.\n\nHow long does light take to travel from the Sun to the Earth? Give your answer in standard form, correct to 3 significant figures.",
      options: [
        "{{4.99 * 10^2}} seconds",
        "{{4.49 * 10^13}} seconds",
        "{{2.01 * 10^(-3)}} seconds",
        "{{4.99 * 10^3}} seconds",
      ],
      answerIndex: 0,
      explanation:
        "Time = distance ÷ speed = {{(1.496 * 10^8) / (3.00 * 10^5)}} = {{0.4987 * 10^3}} = 498.7 s = {{4.99 * 10^2}} s (about 8.3 minutes). {{4.99 * 10^3}} comes from dividing 1.496 by 3 to get 0.4987 and then writing it as 4.99 without adjusting the power. {{4.49 * 10^13}} multiplies instead of divides, and {{2.01 * 10^(-3)}} is speed ÷ distance.",
      hints: [
        "Time = distance ÷ speed.",
        "{{1.496/3}} is less than 1 — when you rewrite it as a number between 1 and 10, what happens to the power of 10?",
      ],
    },
    {
      kind: "mcq",
      id: "exam-2a-q06",
      topicId: "angles-circle-theorems",
      guideRef: "polygons",
      difficulty: "warmup",
      question:
        "In a regular polygon, each interior angle is 8 times the size of each exterior angle.\n\nHow many sides does the polygon have?",
      options: ["16", "18", "20", "9"],
      answerIndex: 1,
      explanation:
        "Interior + exterior = 180°, so 8e + e = 180°, e = 20°. The exterior angles add to 360°, so n = 360 ÷ 20 = 18. 20 is the exterior angle itself, not the number of sides; 16 comes from using 8e = 180° (forgetting to add the exterior angle); 9 comes from 8 + 1 without dividing into 180°.",
      hints: [
        "At each vertex, the interior and exterior angles lie on a straight line.",
        "If the exterior angle is e, then 9e = 180°. Then use the fact that the exterior angles add to 360°.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "exam-2a-q07",
      topicId: "sets-venn",
      guideRef: "venn-diagrams",
      difficulty: "warmup",
      question:
        "There are 50 students in Year 11 at a small school. Every student was asked whether they study French (F) and whether they study Spanish (S).\n\n- 24 students study French.\n- 30 students study Spanish.\n- The number of students who study **neither** language is half the number who study **both**.\n\nA student is chosen at random. Work out the probability that this student studies **exactly one** of the two languages. Give your answer as a fraction in its simplest form.",
      answer: { type: "fraction", n: 19, d: 25, simplest: true },
      traps: [
        { spec: { type: "fraction", n: 23, d: 25 }, feedback: "{{46/50}} is the probability of studying *at least* one language — it includes the 8 students who study both. 'Exactly one' means French only or Spanish only." },
        { spec: { type: "fraction", n: 4, d: 25 }, feedback: "{{8/50}} is the probability of studying *both* languages. You want French only or Spanish only." },
      ],
      solution: [
        "Let x = the number who study both. Then French only = 24 − x, Spanish only = 30 − x and neither = {{x/2}}.",
        "The four regions add to 50: (24 − x) + x + (30 − x) + {{x/2}} = 50, so 54 − {{x/2}} = 50 and x = 8.",
        "French only = 16, Spanish only = 22, neither = 4 (check: 16 + 8 + 22 + 4 = 50 ✓).",
        "Exactly one language: 16 + 22 = 38, so P = {{38/50}} = **{{19/25}}**.",
      ],
      commonError: "Forgetting that the 24 and the 30 both include the students who study both languages.",
      hints: [
        "Draw a Venn diagram and call the overlap x. Write every other region in terms of x.",
        "All four regions (including 'neither') add up to 50.",
        "'Exactly one' means the two crescent-shaped regions, not the overlap.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-2a-q08",
      topicId: "expand-factorise",
      guideRef: "factorising-quadratics",
      difficulty: "warmup",
      question:
        "A rectangular garden bed has area {{(3x^2 + 10x - 8)}} m². Its length and width are both linear expressions in x.\n\nFactorise {{3x^2 + 10x - 8}} fully.",
      answer: { type: "expression", expr: "(3x-2)(x+4)", form: "factorised", display: "(3x − 2)(x + 4)" },
      traps: [
        { spec: { type: "expression", expr: "(3x+2)(x-4)" }, feedback: "Expand to check: (3x + 2)(x − 4) = 3x² − 10x − 8. The middle term has the wrong sign — swap the signs in the brackets." },
      ],
      solution: [
        "ac = 3 × (−8) = −24. Find two numbers that multiply to −24 and add to 10: 12 and −2.",
        "Split the middle term: 3x² + 12x − 2x − 8.",
        "Group: 3x(x + 4) − 2(x + 4) = **(3x − 2)(x + 4)**.",
        "Check: (3x − 2)(x + 4) = 3x² + 12x − 2x − 8 = 3x² + 10x − 8 ✓",
      ],
      commonError: "Getting the signs the wrong way round — always expand to check the middle term.",
      hints: [
        "Multiply a × c: 3 × (−8). Which pair of factors of that number adds to 10?",
        "Use the pair to split 10x into two terms, then factorise in pairs.",
      ],
      strategy: "Check by substituting",
    },

    // ============================== CORE ===================================
    {
      kind: "short",
      id: "exam-2a-q09",
      topicId: "probability",
      guideRef: "tree-diagrams",
      difficulty: "core",
      question:
        "Hana is going to the Botanic Gardens on Saturday and on Sunday.\n\nThe probability that it rains on Saturday is 0.3.\n\n- If it rains on Saturday, the probability that it rains on Sunday is 0.6.\n- If it does not rain on Saturday, the probability that it rains on Sunday is 0.2.\n\nWork out the probability that it rains on **exactly one** of the two days.",
      answer: { type: "number", value: 0.26 },
      traps: [
        { spec: { type: "number", value: 0.12 }, feedback: "0.12 is only 'rain on Saturday, dry on Sunday'. 'Exactly one day' also includes 'dry on Saturday, rain on Sunday'." },
        { spec: { type: "number", value: 0.44 }, feedback: "0.44 is P(rain on *at least* one day) — it includes rain on both days (0.18). Exactly one day means rain on Saturday only or Sunday only." },
        { spec: { type: "number", value: 0.32 }, feedback: "0.32 is P(rain on Sunday), which includes rain on both days. You want rain on exactly one day." },
      ],
      solution: [
        "Draw a tree diagram. The Sunday branches depend on Saturday's weather.",
        "Rain Sat, dry Sun: 0.3 × (1 − 0.6) = 0.3 × 0.4 = 0.12.",
        "Dry Sat, rain Sun: 0.7 × 0.2 = 0.14.",
        "P(exactly one) = 0.12 + 0.14 = **0.26**.",
      ],
      commonError: "Using 0.6 and 0.2 as if the two days were independent, or forgetting one of the two branches.",
      hints: [
        "Draw a tree diagram: Saturday first, then Sunday. The second set of branches is different depending on Saturday.",
        "Which two paths give rain on exactly one day?",
        "Multiply along each path, then add the two paths.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-2a-q10",
      topicId: "mensuration",
      guideRef: "cones-spheres-pyramids",
      difficulty: "core",
      question:
        "An ice-cream cone is a hollow cone with radius 3.2 cm and vertical height 11 cm. The cone is completely filled with ice cream, and there is a hemisphere of ice cream of radius 3.2 cm on top.\n\nWork out the total volume of ice cream. Give your answer in cm³ correct to 3 significant figures.",
      answer: { type: "number", value: 187, tolerance: 0.5, display: "187 cm³" },
      traps: [
        { spec: { type: "number", value: 255, tolerance: 1 }, feedback: "You used a full sphere on top. A hemisphere is half a sphere: {{2/3 pi r^3}}." },
        { spec: { type: "number", value: 422, tolerance: 1 }, feedback: "For the cone you need {{1/3 pi r^2 h}} — you seem to have used the cylinder formula {{pi r^2 h}}." },
      ],
      solution: [
        "Cone: {{1/3 * pi * 3.2^2 * 11}} = 117.96… cm³.",
        "Hemisphere: {{1/2 * 4/3 * pi * 3.2^3}} = {{2/3 * pi * 32.768}} = 68.63… cm³.",
        "Total = 186.59… ≈ **187 cm³**.",
      ],
      commonError: "Using the full sphere, or forgetting the {{1/3}} in the cone volume.",
      hints: [
        "Split the ice cream into two solids you know the formulae for.",
        "Cone {{1/3 pi r^2 h}}; hemisphere = half of {{4/3 pi r^3}}.",
      ],
    },
    {
      kind: "mcq",
      id: "exam-2a-q11",
      topicId: "ratio-proportion",
      guideRef: "inverse-proportion",
      difficulty: "core",
      question:
        "The intensity of light, I, from a lamp is inversely proportional to the square of the distance, d, from the lamp.\n\nPriya moves her desk so that d increases by 25%. What happens to the light intensity on her desk?",
      options: [
        "It decreases by 25%",
        "It decreases by 20%",
        "It decreases by 36%",
        "It decreases by 56.25%",
      ],
      answerIndex: 2,
      explanation:
        "{{I = k/d^2}}. If d becomes 1.25d, I becomes {{k/(1.25d)^2 = I/1.5625 = 0.64I}}. That is a decrease of 36%. 20% comes from {{1/1.25 = 0.8}} — inverse proportion but forgetting the square; 25% treats it as if a 25% change in d gives the same change in I; 56.25% comes from {{1.25^2 - 1}}, the increase in {{d^2}}, not the change in I.",
      hints: [
        "Write the relationship as {{I = k/d^2}}.",
        "Replace d with 1.25d. What number is I divided by?",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "exam-2a-q12",
      topicId: "pythagoras-trigonometry",
      guideRef: "bearings-elevation",
      difficulty: "core",
      question:
        "TF is a vertical tower standing on level ground. A, B and F lie in a straight line on the ground, with AB = 60 m.\n\nThe angle of elevation of T from A is 32°. The angle of elevation of T from B is 51°.\n\nWork out the height of the tower, TF. Give your answer in metres correct to 3 significant figures.",
      diagram: ELEVATION,
      answer: { type: "number", value: 75.9, tolerance: 0.05, display: "75.9 m" },
      traps: [
        { spec: { type: "number", value: 61.5, tolerance: 0.05 }, feedback: "That is BF, the distance from B to the foot of the tower. Multiply by tan 51° to get the height." },
        { spec: { type: "number", value: 37.5, tolerance: 0.05 }, feedback: "60 × tan 32° would only be the height if the tower stood at B. The tower is further away — let BF = d and use two right-angled triangles." },
      ],
      solution: [
        "Let BF = d m and TF = h m.",
        "Triangle TBF: h = d tan 51°. Triangle TAF: h = (d + 60) tan 32°.",
        "So d tan 51° = d tan 32° + 60 tan 32°, giving d = {{(60 tan 32°)/(tan 51° - tan 32°)}} = {{37.492/0.61003}} = 61.46…",
        "h = 61.46… × tan 51° = 75.896… ≈ **75.9 m**.",
      ],
      solutions: [
        { label: "Sine rule in triangle ATB", steps: ["Angle ABT = 180° − 51° = 129°, so angle ATB = 180° − 32° − 129° = 19°.", "{{BT/sin 32° = 60/sin 19°}}, so BT = 97.66… m.", "h = BT sin 51° = 75.9 m. This avoids the simultaneous equations."] },
      ],
      commonError: "Treating AB as the horizontal distance to the tower from A.",
      hints: [
        "You don't know BF. Call it d.",
        "Write two expressions for the height h, one from each right-angled triangle.",
        "Set them equal and solve for d first.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "exam-2a-q13",
      topicId: "solving-equations",
      guideRef: "simultaneous-linear",
      difficulty: "core",
      question:
        "At a wildlife park, 3 adult tickets and 4 child tickets cost $246 in total. 2 adult tickets and 5 child tickets cost $234 in total.\n\nThe Tan family buys 1 adult ticket and 6 child tickets. How much do they pay? Give your answer in dollars.",
      answer: { type: "number", value: 222, display: "$222" },
      traps: [
        { spec: { type: "number", value: 72 }, feedback: "That is the cost of one adult plus one child. The family needs 1 adult and **6** child tickets." },
      ],
      solution: [
        "Let a = adult price, c = child price: 3a + 4c = 246 and 2a + 5c = 234.",
        "× 2 and × 3: 6a + 8c = 492 and 6a + 15c = 702.",
        "Subtract: 7c = 210, so c = 30. Then 3a = 246 − 120 = 126, so a = 42.",
        "1 adult + 6 children = 42 + 180 = **$222**.",
      ],
      solutions: [
        { label: "Spot a combination", steps: ["Subtract the equations: (3a + 4c) − (2a + 5c) = a − c = 12.", "1a + 6c = (2a + 5c) − (a − c) = 234 − 12 = 222. No need to find a and c separately!"] },
      ],
      commonError: "Stopping after finding a and c, or misreading which ticket is which.",
      hints: [
        "Introduce two letters and write two equations.",
        "Make the a-coefficients equal (multiply by 2 and 3), then subtract.",
        "Once you know both prices, find 1a + 6c.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "exam-2a-q14",
      topicId: "sequences",
      guideRef: "arithmetic-sequences",
      difficulty: "core",
      question:
        "The amounts Ethan saves each month form an arithmetic sequence.\n\nIn month 5 he saves $70. In month 12 he saves $126.\n\nIn which month does he first save more than $250 in a single month?",
      answer: { type: "number", value: 28, display: "Month 28" },
      traps: [
        { spec: { type: "number", value: 27 }, feedback: "In month 27 he saves 8 × 27 + 30 = $246 — not yet more than $250. n > 27.5, so round *up*." },
        { spec: { type: "number", value: 27.5 }, feedback: "Months are whole numbers. In month 27 he saves $246 and in month 28 he saves $254 — so which month is the first one over $250?" },
        { spec: { type: "number", value: 31 }, feedback: "Check the common difference: from month 5 to month 12 there are 7 steps, not 8, so d = 56 ÷ 7 = 8." },
      ],
      solution: [
        "From month 5 to month 12 is 7 steps, and the amount rises by 126 − 70 = $56, so d = 56 ÷ 7 = 8.",
        "Month 5: a + 4d = 70, so a = 70 − 32 = 38.",
        "nth term = 38 + 8(n − 1) = 8n + 30.",
        "8n + 30 > 250 → 8n > 220 → n > 27.5.",
        "Check: month 27 → $246, month 28 → $254. So the answer is **month 28**.",
      ],
      commonError: "Dividing by 12 − 5 + 1 = 8 steps instead of 7, or rounding 27.5 down.",
      hints: [
        "How many common differences are there between term 5 and term 12?",
        "Find d, then the first term a, then the nth term.",
        "Set the nth term > 250 and think about which whole number of months works.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "exam-2a-q15",
      topicId: "linear-graphs",
      guideRef: "parallel-perpendicular",
      difficulty: "core",
      question:
        "On a coordinate grid, a phone mast is at A(−2, 5) and a second mast is at B(6, 1).\n\nThe points that are the same distance from A and B lie on a straight line L.\n\nFind the equation of L.",
      answer: { type: "equation", eq: "y=2x-1", display: "y = 2x − 1" },
      traps: [
        { spec: { type: "equation", eq: "y=-0.5x+4" }, feedback: "That is the line AB itself. Points equidistant from A and B lie on the *perpendicular* bisector, whose gradient is the negative reciprocal of −{{1/2}}." },
        { spec: { type: "equation", eq: "y=2x+3" }, feedback: "Right gradient, but the line must pass through the midpoint of AB, (2, 3). Check: when x = 2, does your line give y = 3?" },
      ],
      solution: [
        "L is the perpendicular bisector of AB.",
        "Midpoint of AB = {{((-2 + 6)/2, (5 + 1)/2)}} = (2, 3).",
        "Gradient of AB = {{(1 - 5)/(6 - (-2)) = -4/8 = -1/2}}, so the gradient of L is 2.",
        "y − 3 = 2(x − 2), so **y = 2x − 1**.",
      ],
      commonError: "Using the gradient of AB instead of the perpendicular gradient.",
      hints: [
        "What is the name of the locus of points equidistant from two points?",
        "It passes through the midpoint of AB and is perpendicular to AB.",
        "Perpendicular gradients multiply to −1.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-2a-q16",
      topicId: "inequalities",
      guideRef: "quadratic-inequalities",
      difficulty: "core",
      question:
        "A rectangular pond has length (x + 4) metres and width (x − 1) metres, where x > 1.\n\nThe area of the pond must be less than 36 m².\n\nFind the range of possible values of x.",
      answer: { type: "inequality", ineq: "1<x<5", display: "1 < x < 5" },
      traps: [
        { spec: { type: "inequality", ineq: "-8<x<5" }, feedback: "That solves the quadratic inequality, but the width x − 1 must be positive, so x > 1 as well." },
        { spec: { type: "inequality", ineq: "x<-8 or x>5" }, feedback: "For (x + 8)(x − 5) < 0 the parabola must be *below* the x-axis — that's *between* the roots, not outside them." },
      ],
      solution: [
        "(x + 4)(x − 1) < 36 → {{x^2 + 3x - 4 < 36}} → {{x^2 + 3x - 40 < 0}}.",
        "Factorise: (x + 8)(x − 5) < 0. Critical values −8 and 5.",
        "The parabola is below the axis between the roots: −8 < x < 5.",
        "Combine with x > 1: **1 < x < 5**.",
      ],
      commonError: "Forgetting the physical condition x > 1, or choosing the outside region.",
      hints: [
        "Write an inequality for the area and rearrange it to (quadratic) < 0.",
        "Factorise to find the critical values, then sketch the parabola.",
        "Don't forget the condition that keeps the width positive.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "mcq",
      id: "exam-2a-q17",
      topicId: "similarity-congruence",
      guideRef: "area-volume-scale",
      difficulty: "core",
      question:
        "Two perfume bottles are mathematically similar. The smaller bottle has volume 216 cm³ and the larger has volume 512 cm³.\n\nThe surface area of the smaller bottle is 270 cm². What is the surface area of the larger bottle?",
      options: ["640 cm²", "360 cm²", "853 cm²", "480 cm²"],
      answerIndex: 3,
      explanation:
        "Volume scale factor = {{512/216 = 64/27}}. The length scale factor k is its cube root: k = {{4/3}} (because {{4^3 = 64}} and {{3^3 = 27}}). The area scale factor is {{k^2 = 16/9}}. Surface area = 270 × {{16/9}} = 480 cm². 640 cm² wrongly uses the volume factor {{64/27}} on an area; 360 cm² uses the length factor {{4/3}}; 853 cm² uses {{(16/9)^2}} — squaring the area factor again instead of using it once.",
      hints: [
        "Volume scale factor = {{k^3}}. Take the cube root to find k.",
        "Area scale factor = {{k^2}}.",
      ],
      strategy: "Work backwards",
    },
    {
      kind: "short",
      id: "exam-2a-q18",
      topicId: "statistics",
      guideRef: "histograms",
      difficulty: "core",
      question:
        "The histogram shows information about the time, t minutes, that 100 students spent on homework one evening.\n\nWork out an estimate for the **median** time. Give your answer in minutes.",
      diagram: HOMEWORK_HISTOGRAM,
      answer: { type: "number", value: 37.5, tolerance: 0.25, display: "37.5 minutes" },
      traps: [
        { spec: { type: "number", value: 35 }, feedback: "35 is the midpoint of the class that contains the median. Use the frequencies to find *how far* into the 30–40 class the 50th student is." },
        { spec: { type: "number", value: 50 }, feedback: "50 minutes is halfway along the time axis, not the time of the middle student. Find the frequencies first and count to the 50th student." },
      ],
      solution: [
        "Frequency = frequency density × class width: 0–20: 0.7 × 20 = 14; 20–30: 1.8 × 10 = 18; 30–40: 2.4 × 10 = 24; 40–60: 1.4 × 20 = 28; 60–100: 0.4 × 40 = 16 (total 100 ✓).",
        "The median is the 50th value. Running totals: 14, 32, 56, … so it lies in the 30–40 class.",
        "We need 50 − 32 = 18 of the 24 students in that class: {{18/24}} of the way through it.",
        "Median ≈ 30 + {{18/24}} × 10 = 30 + 7.5 = **37.5 minutes**.",
      ],
      commonError: "Reading the bar heights as frequencies, or giving the midpoint of the median class.",
      hints: [
        "Turn each bar into a frequency: frequency = frequency density × class width.",
        "Add up the frequencies in order until you pass the 50th student. Which class is the median in?",
        "Assume the students in that class are spread evenly and find how far into the class the 50th one is.",
      ],
    },
    {
      kind: "short",
      id: "exam-2a-q19",
      topicId: "functions",
      guideRef: "composite-functions",
      difficulty: "core",
      question:
        "f(x) = 3x − 1 and g(x) = {{x^2 + 2}}.\n\nSolve fg(x) = gf(x). Give your solutions correct to 3 significant figures.",
      answer: { type: "list", values: [1.26, -0.264], tolerance: 0.005, display: "x = 1.26 or x = −0.264" },
      traps: [
        { spec: { type: "list", values: [0.577, -0.577], tolerance: 0.005 }, feedback: "Check gf(x): it is g(3x − 1) = {{(3x - 1)^2 + 2}}, which expands to {{9x^2 - 6x + 3}} — don't forget the middle term." },
      ],
      solution: [
        "fg(x) = f({{x^2 + 2}}) = {{3(x^2 + 2) - 1 = 3x^2 + 5}}.",
        "gf(x) = g(3x − 1) = {{(3x - 1)^2 + 2 = 9x^2 - 6x + 3}}.",
        "{{3x^2 + 5 = 9x^2 - 6x + 3}} → {{6x^2 - 6x - 2 = 0}} → {{3x^2 - 3x - 1 = 0}}.",
        "{{x = (3 +- sqrt(9 + 12))/6 = (3 +- sqrt(21))/6}}, so **x = 1.26 or x = −0.264**.",
      ],
      commonError: "Doing f first in fg(x) — fg(x) means f(g(x)), so g is applied first.",
      hints: [
        "fg(x) means f(g(x)): put g(x) into f.",
        "Expand both, set them equal and collect everything on one side.",
        "The quadratic does not factorise — use the formula.",
      ],
    },
    {
      kind: "short",
      id: "exam-2a-q20",
      topicId: "further-trigonometry",
      guideRef: "cosine-rule",
      difficulty: "core",
      question:
        "PQR is a triangular field with PQ = 48 m, QR = 65 m and PR = 70 m.\n\nA farmer wants to spread fertiliser over the whole field. One bag of fertiliser covers 250 m².\n\nWork out the least number of bags she needs to buy.",
      diagram: FIELD_TRIANGLE,
      answer: { type: "number", value: 7, display: "7 bags" },
      traps: [
        { spec: { type: "number", value: 6 }, feedback: "The area is about 1506 m², and 1506 ÷ 250 = 6.02. Six bags cover only 1500 m², so she needs to round *up*." },
        { spec: { type: "number", value: 13 }, feedback: "Did you use {{48 * 65}} for the area? The area of a triangle is {{1/2 ab sin C}}, and you need the angle between the two sides." },
      ],
      solution: [
        "Find angle Q (between PQ and QR) with the cosine rule: {{cos Q = (48^2 + 65^2 - 70^2)/(2 * 48 * 65) = 1629/6240}} = 0.26106, so Q = 74.87°.",
        "Area = {{1/2 * 48 * 65 * sin 74.87°}} = 1505.9… m².",
        "Bags: 1505.9 ÷ 250 = 6.02…, so she needs **7 bags**.",
      ],
      solutions: [
        { label: "Heron's formula (extension)", steps: ["s = (48 + 65 + 70) ÷ 2 = 91.5.", "Area = {{sqrt(91.5 * 43.5 * 26.5 * 21.5)}} = 1505.9 m² — the same answer without finding an angle."] },
      ],
      commonError: "Rounding 6.02 bags down to 6.",
      hints: [
        "To use area = {{1/2 ab sin C}} you need an angle. Which rule finds an angle from three sides?",
        "Find the angle at Q, between the sides 48 m and 65 m.",
        "Divide the area by 250 — and think about whether to round up or down.",
      ],
    },
    {
      kind: "mcq",
      id: "exam-2a-q21",
      topicId: "vectors-transformations",
      guideRef: "vector-geometry",
      difficulty: "core",
      question:
        "OAB is a triangle. →OA = **a** and →OB = **b**.\n\nP is the point on AB such that AP : PB = 2 : 3.\n\nWhich expression is →OP in terms of **a** and **b**?",
      diagram: VECTOR_AB,
      options: [
        "{{3/5}}**a** + {{2/5}}**b**",
        "{{2/5}}**a** + {{3/5}}**b**",
        "{{1/3}}**a** + {{2/3}}**b**",
        "{{2/5}}(**b** − **a**)",
      ],
      answerIndex: 0,
      explanation:
        "→AB = **b** − **a**. P is {{2/5}} of the way from A to B, so →OP = **a** + {{2/5}}(**b** − **a**) = {{3/5}}**a** + {{2/5}}**b**. Check: P is closer to A, so it should have more **a** than **b**. {{2/5}}**a** + {{3/5}}**b** gets the ratio the wrong way round; {{1/3}}**a** + {{2/3}}**b** uses {{2/3}} of AB (reading 2 : 3 as a fraction); {{2/5}}(**b** − **a**) is only →AP — it forgets to start at O.",
      hints: [
        "Go from O to A, then part of the way along AB.",
        "AP : PB = 2 : 3 means AP is {{2/5}} of AB.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-2a-q22",
      topicId: "graphs-of-functions",
      guideRef: "real-life-graphs",
      difficulty: "core",
      question:
        "The speed–time graph shows an MRT train's journey between two stations.\n\nWork out the train's average speed for the journey. Give your answer in km/h.",
      diagram: MRT_SPEED,
      answer: { type: "number", value: 57.6, display: "57.6 km/h" },
      traps: [
        { spec: { type: "number", value: 16 }, feedback: "16 is the average speed in **m/s**. Convert to km/h: multiply by 3600 and divide by 1000." },
        { spec: { type: "number", value: 72 }, feedback: "20 m/s = 72 km/h is the *top* speed. The train is slower while speeding up and slowing down, so the average is lower." },
      ],
      solution: [
        "Distance = area under the graph.",
        "Speeding up: {{1/2 * 25 * 20}} = 250 m. Steady: 60 × 20 = 1200 m. Slowing down: {{1/2 * 15 * 20}} = 150 m.",
        "Total distance = 1600 m in 100 s, so average speed = 16 m/s.",
        "16 m/s = 16 × 3600 ÷ 1000 = **57.6 km/h**.",
      ],
      solutions: [
        { label: "Trapezium in one go", steps: ["The whole shape is a trapezium with parallel sides 100 s and 60 s, height 20 m/s.", "Area = {{1/2 (100 + 60) * 20}} = 1600 m."] },
      ],
      commonError: "Giving the answer in m/s, or using the top speed as the average.",
      hints: [
        "What does the area under a speed–time graph represent?",
        "Average speed = total distance ÷ total time.",
        "1 m/s = 3.6 km/h.",
      ],
    },
    {
      kind: "short",
      id: "exam-2a-q23",
      topicId: "calculus",
      guideRef: "tangents",
      difficulty: "core",
      question:
        "A curve has equation {{y = x^3 - 4x^2 + 2x + 5}}.\n\nFind the equation of the tangent to the curve at the point where x = 3.",
      answer: { type: "equation", eq: "y=5x-13", display: "y = 5x − 13" },
      traps: [
        { spec: { type: "equation", eq: "y=5x-15" }, feedback: "That line has the right gradient but goes through (3, 0). Find the y-coordinate of the point on the curve first: y = 27 − 36 + 6 + 5 = 2." },
        { spec: { type: "equation", eq: "y=2" }, feedback: "The tangent is a sloping line through (3, 2). Its gradient is dy/dx at x = 3." },
      ],
      solution: [
        "When x = 3: y = 27 − 36 + 6 + 5 = 2, so the point is (3, 2).",
        "{{dy/dx = 3x^2 - 8x + 2}}. At x = 3: 27 − 24 + 2 = 5.",
        "y − 2 = 5(x − 3), so **y = 5x − 13**.",
      ],
      commonError: "Using the y-value of dy/dx as the point, or forgetting to find y on the curve.",
      hints: [
        "You need a point and a gradient.",
        "The gradient of the tangent is dy/dx evaluated at x = 3.",
        "Use y − y₁ = m(x − x₁).",
      ],
    },

    // =========================== CHALLENGE =================================
    {
      kind: "written",
      id: "exam-2a-q24",
      topicId: "quadratic-equations",
      guideRef: "algebraic-fraction-equations",
      difficulty: "challenge",
      question:
        "Zara cycles 60 km along the Round Island Route at a steady speed of v km/h.\n\nIf she cycled 5 km/h faster, the journey would take 1 hour less.\n\n(a) Show that {{v^2 + 5v - 300 = 0}}.\n\n(b) Hence find Zara's speed.",
      marks: 4,
      modelAnswer:
        "(a) Time at v km/h = {{60/v}} hours; time at (v + 5) km/h = {{60/(v + 5)}} hours.\n\n{{60/v - 60/(v + 5) = 1}}\n\nMultiply by v(v + 5): 60(v + 5) − 60v = v(v + 5), so 300 = {{v^2 + 5v}}, i.e. {{v^2 + 5v - 300 = 0}}.\n\n(b) (v + 20)(v − 15) = 0, so v = 15 or v = −20. Speed cannot be negative, so v = **15 km/h**. (Check: 60 ÷ 15 = 4 h and 60 ÷ 20 = 3 h — 1 hour less ✓.)",
      markScheme: [
        { point: "Writes the two times as 60/v and 60/(v + 5)", keywords: ["60/v", "60/(v+5)", "time"] },
        { point: "Forms the equation 60/v − 60/(v + 5) = 1", keywords: ["= 1", "60/v - 60/(v+5)", "difference"] },
        { point: "Multiplies through by v(v + 5) and rearranges correctly to v² + 5v − 300 = 0", keywords: ["v(v+5)", "300", "v^2+5v-300"] },
        { point: "Solves to get v = 15 km/h, rejecting v = −20", keywords: ["15", "-20", "reject", "negative"] },
      ],
      commonError: "Writing the equation the wrong way round (60/(v + 5) − 60/v = 1), which gives a negative time difference.",
      hints: [
        "Time = distance ÷ speed. Write the time for each journey.",
        "Which journey is longer? Their difference is 1 hour.",
        "Clear the fractions by multiplying every term by v(v + 5).",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "exam-2a-q25",
      topicId: "calculus",
      guideRef: "turning-points",
      difficulty: "challenge",
      question:
        "A metal storage tank is an open-topped cuboid (no lid) with a square base of side x cm. Its volume must be 32 000 cm³.\n\nThe tank is to be made using the least possible area of metal.\n\nWork out this least area. Give your answer in cm².",
      answer: { type: "number", value: 4800, display: "4800 cm²" },
      traps: [
        { spec: { type: "number", value: 40 }, feedback: "40 cm is the side of the base that gives the minimum. Substitute it back to find the area of metal." },
        { spec: { type: "number", value: 6048, tolerance: 1 }, feedback: "You seem to have included a lid (two square faces). The tank is open-topped, so there is only one {{x^2}} face." },
      ],
      solution: [
        "Let the height be h: {{x^2 h = 32000}}, so {{h = 32000/x^2}}.",
        "Area A = base + 4 sides = {{x^2 + 4xh = x^2 + 128000/x}}.",
        "{{(dA)/(dx) = 2x - 128000/x^2}}. Set to 0: {{2x^3 = 128000}}, so {{x^3 = 64000}}, x = 40.",
        "Second derivative {{2 + 256000/x^3 > 0}}, so this is a minimum.",
        "A = 1600 + 128 000 ÷ 40 = 1600 + 3200 = **4800 cm²** (the tank is 40 cm × 40 cm × 20 cm).",
      ],
      commonError: "Including a lid, or stopping at x = 40 without finding the area.",
      hints: [
        "Write the area in terms of x and h, then use the volume to get rid of h.",
        "You should get {{A = x^2 + 128000/x}}. Write {{128000/x}} as {{128000x^(-1)}} to differentiate.",
        "Set {{(dA)/(dx) = 0}} and solve for x. Then find A.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "written",
      id: "exam-2a-q26",
      topicId: "vectors-transformations",
      guideRef: "vector-geometry",
      difficulty: "challenge",
      question:
        "OAB is a triangle. →OA = **a** and →OB = **b**.\n\nM is the midpoint of OA. P is the point on AB such that AP : PB = 2 : 1. The line OB is extended to the point Q so that →OQ = 2**b**.\n\nProve that M, P and Q lie on a straight line.",
      diagram: VECTOR_COLLINEAR,
      marks: 4,
      modelAnswer:
        "→OM = {{1/2}}**a**. →OP = **a** + {{2/3}}(**b** − **a**) = {{1/3}}**a** + {{2/3}}**b**.\n\n→MP = →OP − →OM = −{{1/6}}**a** + {{2/3}}**b** = {{1/6}}(4**b** − **a**).\n\n→MQ = →OQ − →OM = 2**b** − {{1/2}}**a** = {{1/2}}(4**b** − **a**).\n\nSo →MQ = 3→MP: the vectors are parallel, and they share the point M, so M, P and Q lie on a straight line.",
      markScheme: [
        { point: "Finds OP = (1/3)a + (2/3)b (or AP = (2/3)(b − a))", keywords: ["1/3a", "2/3b", "2/3(b-a)", "op"] },
        { point: "Finds MP = −(1/6)a + (2/3)b or equivalent", keywords: ["mp", "-1/6a", "1/6(4b-a)"] },
        { point: "Finds MQ = 2b − (1/2)a or equivalent", keywords: ["mq", "2b-1/2a", "1/2(4b-a)"] },
        { point: "Shows MQ = 3MP and states parallel with a common point M, so collinear", keywords: ["3mp", "multiple", "parallel", "common point", "straight line"] },
      ],
      commonError: "Showing the vectors are parallel but not stating that they share a common point — parallel alone does not prove the points are on one line.",
      hints: [
        "Collinear means two vectors along the line are multiples of each other *and* share a point.",
        "Find →OP first: go from O to A, then {{2/3}} of the way along AB.",
        "Find →MP and →MQ. Can you take out the same bracket (4**b** − **a**)?",
      ],
      strategy: "Look for an invariant",
    },
    {
      kind: "written",
      id: "exam-2a-q27",
      topicId: "probability",
      guideRef: "algebraic-probability",
      difficulty: "challenge",
      question:
        "A bag contains only red counters and blue counters. There are r red counters and 3 more blue counters than red counters.\n\nKenji takes two counters at random from the bag without replacement. The probability that the two counters are the same colour is {{1/2}}.\n\nShow that r = 3.",
      marks: 4,
      modelAnswer:
        "Total counters = r + (r + 3) = 2r + 3.\n\nP(both red) = {{r/(2r + 3) * (r - 1)/(2r + 2)}}; P(both blue) = {{(r + 3)/(2r + 3) * (r + 2)/(2r + 2)}}.\n\nP(same) = {{(r(r - 1) + (r + 3)(r + 2))/((2r + 3)(2r + 2)) = 1/2}}.\n\nNumerator: {{r^2 - r + r^2 + 5r + 6 = 2r^2 + 4r + 6}}. Denominator: {{4r^2 + 10r + 6}}.\n\nSo {{2(2r^2 + 4r + 6) = 4r^2 + 10r + 6}} → {{4r^2 + 8r + 12 = 4r^2 + 10r + 6}} → 6 = 2r → **r = 3**.\n\n(Check: 3 red, 6 blue: {{(3 * 2 + 6 * 5)/(9 * 8) = 36/72 = 1/2}} ✓.)",
      markScheme: [
        { point: "Uses a total of 2r + 3 counters and 2r + 2 for the second pick", keywords: ["2r+3", "2r+2"] },
        { point: "Writes P(same) = P(RR) + P(BB) with correct without-replacement fractions", keywords: ["r-1", "r+3", "r+2", "rr", "bb"] },
        { point: "Sets the sum equal to 1/2 and expands correctly (2r² + 4r + 6 and 4r² + 10r + 6)", keywords: ["2r^2+4r+6", "4r^2+10r+6", "1/2"] },
        { point: "Simplifies — the r² terms cancel — to reach r = 3", keywords: ["cancel", "2r=6", "r=3"] },
      ],
      commonError: "Forgetting that the second pick is from 2r + 2 counters, or only counting P(both red).",
      hints: [
        "How many counters are there altogether, in terms of r?",
        "Same colour = both red OR both blue. Write each as a product of two fractions.",
        "Set the sum equal to {{1/2}} and cross-multiply. Watch what happens to the {{r^2}} terms.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "exam-2a-q28",
      topicId: "number-bounds",
      guideRef: "bounds-calculations",
      difficulty: "challenge",
      question:
        "A solid metal cylinder has\n\n- radius 4.2 cm, correct to 1 decimal place\n- height 15 cm, correct to the nearest centimetre\n- mass 6.4 kg, correct to the nearest 0.1 kg.\n\nWork out the upper bound for the density of the metal. Give your answer in g/cm³ correct to 3 significant figures.",
      answer: { type: "number", value: 8.22, tolerance: 0.005, display: "8.22 g/cm³" },
      traps: [
        { spec: { type: "number", value: 7.22, tolerance: 0.005 }, feedback: "That is the *lower* bound: you divided the smallest mass by the largest volume. For the upper bound of a quotient, divide the upper bound of the mass by the lower bound of the volume." },
        { spec: { type: "number", value: 7.70, tolerance: 0.005 }, feedback: "That uses the measured values. For the upper bound you need the biggest possible mass and the smallest possible volume." },
      ],
      solution: [
        "Density = mass ÷ volume, so the upper bound = UB(mass) ÷ LB(volume).",
        "UB(mass) = 6.45 kg = 6450 g.",
        "LB(radius) = 4.15 cm, LB(height) = 14.5 cm, so LB(volume) = {{pi * 4.15^2 * 14.5}} = 784.54… cm³.",
        "UB(density) = 6450 ÷ 784.54… = 8.2213… ≈ **8.22 g/cm³**.",
      ],
      commonError: "Using the upper bound of the volume as well — dividing by a bigger number makes the density *smaller*.",
      hints: [
        "To make a fraction as big as possible, make the top big and the bottom small.",
        "Write down the bounds of each measurement. Convert kg to g.",
        "Use the lower bounds of the radius and height to find the smallest possible volume.",
      ],
      strategy: "Consider extremes",
    },
    {
      kind: "short",
      id: "exam-2a-q29",
      topicId: "mensuration",
      guideRef: "frustums-composite",
      difficulty: "challenge",
      question:
        "A bucket is in the shape of a frustum of a cone. The top has radius 15 cm, the base has radius 10 cm and the vertical height is 24 cm.\n\nThe bucket stands on its base and contains water to a depth of 12 cm.\n\nWork out the volume of the water. Give your answer in cm³ in terms of π.",
      diagram: BUCKET,
      answer: { type: "expression", expr: "1525pi", display: "1525π cm³" },
      traps: [
        { spec: { type: "expression", expr: "1900pi" }, feedback: "That is half of the full bucket (3800π). The bucket gets wider towards the top, so the bottom half holds *less* than half the water." },
        { spec: { type: "expression", expr: "3800pi" }, feedback: "That is the volume of the full bucket. The water is only 12 cm deep — find the radius of the water surface first." },
      ],
      solution: [
        "Complete the cone. The radius grows by 5 cm over 24 cm of height, so the full cone below the base has height {{10/5 * 24}} = 48 cm, and the full cone is 72 cm tall with radius 15 cm.",
        "At a depth of 12 cm the water surface has radius {{10 + 12/24 * 5}} = 12.5 cm, and the cone up to the water surface is 48 + 12 = 60 cm tall.",
        "Water = big cone − small cone = {{1/3 pi (12.5^2 * 60 - 10^2 * 48)}} = {{1/3 pi (9375 - 4800)}} = {{1/3 pi * 4575}}.",
        "Volume of water = **1525π cm³** (about 4790 cm³, about 4.8 litres).",
      ],
      commonError: "Assuming the radius halfway up is the average of the radii without completing the cone, or halving the full volume.",
      hints: [
        "A frustum is a big cone with a small cone cut off. Extend the sides to the tip.",
        "Use similar triangles: the radius increases by 5 cm over 24 cm of height. How tall is the missing cone below the base?",
        "Find the radius of the water surface, then subtract two cone volumes.",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "short",
      id: "exam-2a-q30",
      topicId: "sequences",
      guideRef: "quadratic-sequences",
      difficulty: "challenge",
      question:
        "Here are the first four terms of a quadratic sequence:\n\n4, 11, 22, 37, …\n\nWork out the value of the first term of the sequence that is greater than 1000.",
      answer: { type: "number", value: 1082 },
      traps: [
        { spec: { type: "number", value: 991 }, feedback: "991 is the 22nd term — it is still less than 1000. Try the next term." },
        { spec: { type: "number", value: 23 }, feedback: "23 is the *position* of the term. The question asks for the value of the term." },
      ],
      solution: [
        "First differences: 7, 11, 15. Second difference: 4, so the nth term starts {{2n^2}}.",
        "Subtract {{2n^2}} (2, 8, 18, 32) from the terms: 2, 3, 4, 5 → n + 1.",
        "nth term = {{2n^2 + n + 1}}.",
        "Solve {{2n^2 + n + 1 = 1000}}: {{n = (-1 + sqrt(1 + 7992))/4}} = 22.1…",
        "22nd term = 968 + 22 + 1 = 991 (too small). 23rd term = 1058 + 23 + 1 = **1082**.",
      ],
      commonError: "Using half the second difference wrongly (writing 4n²), or giving the position 23 instead of the term.",
      hints: [
        "Find the second differences. The coefficient of {{n^2}} is half of the second difference.",
        "Subtract the {{n^2}} part from each term to find the linear part.",
        "Solve nth term = 1000, then check the whole-number positions either side.",
      ],
      strategy: "Find a pattern",
    },
  ],
};
