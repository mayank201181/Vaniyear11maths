// ---------------------------------------------------------------------------
// Mock Set B — Paper 1H (Edexcel IGCSE 4MA1 Higher style, calculator, 2 hours).
// 30 questions across all 22 topics, ordered easier → harder:
// q01–q08 warm-up (grade 4–5), q09–q23 core (grade 6–7), q24–q30 challenge (grade 8–9 / H+).
// ---------------------------------------------------------------------------
import type { ExamPaper } from "../types.ts";

const HISTOGRAM = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of journey times to school for 90 students. Horizontal axis: time t in minutes from 0 to 50. Vertical axis: frequency density from 0 to 6. Bars: 0 to 10 minutes height 1.0; 10 to 15 minutes height 3.6; 15 to 20 minutes height 5.2; 20 to 30 minutes height 2.4; 30 to 50 minutes height 0.6." font-family="sans-serif"><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="0.6"><line x1="60" y1="262.67" x2="440" y2="262.67"/><line x1="60" y1="255.33" x2="440" y2="255.33"/><line x1="60" y1="248" x2="440" y2="248"/><line x1="60" y1="240.67" x2="440" y2="240.67"/><line x1="60" y1="226" x2="440" y2="226"/><line x1="60" y1="218.67" x2="440" y2="218.67"/><line x1="60" y1="211.33" x2="440" y2="211.33"/><line x1="60" y1="204" x2="440" y2="204"/><line x1="60" y1="189.33" x2="440" y2="189.33"/><line x1="60" y1="182" x2="440" y2="182"/><line x1="60" y1="174.67" x2="440" y2="174.67"/><line x1="60" y1="167.33" x2="440" y2="167.33"/><line x1="60" y1="152.67" x2="440" y2="152.67"/><line x1="60" y1="145.33" x2="440" y2="145.33"/><line x1="60" y1="138" x2="440" y2="138"/><line x1="60" y1="130.67" x2="440" y2="130.67"/><line x1="60" y1="116" x2="440" y2="116"/><line x1="60" y1="108.67" x2="440" y2="108.67"/><line x1="60" y1="101.33" x2="440" y2="101.33"/><line x1="60" y1="94" x2="440" y2="94"/><line x1="60" y1="79.33" x2="440" y2="79.33"/><line x1="60" y1="72" x2="440" y2="72"/><line x1="60" y1="64.67" x2="440" y2="64.67"/><line x1="60" y1="57.33" x2="440" y2="57.33"/><line x1="67.6" y1="50" x2="67.6" y2="270"/><line x1="75.2" y1="50" x2="75.2" y2="270"/><line x1="82.8" y1="50" x2="82.8" y2="270"/><line x1="90.4" y1="50" x2="90.4" y2="270"/><line x1="105.6" y1="50" x2="105.6" y2="270"/><line x1="113.2" y1="50" x2="113.2" y2="270"/><line x1="120.8" y1="50" x2="120.8" y2="270"/><line x1="128.4" y1="50" x2="128.4" y2="270"/><line x1="143.6" y1="50" x2="143.6" y2="270"/><line x1="151.2" y1="50" x2="151.2" y2="270"/><line x1="158.8" y1="50" x2="158.8" y2="270"/><line x1="166.4" y1="50" x2="166.4" y2="270"/><line x1="181.6" y1="50" x2="181.6" y2="270"/><line x1="189.2" y1="50" x2="189.2" y2="270"/><line x1="196.8" y1="50" x2="196.8" y2="270"/><line x1="204.4" y1="50" x2="204.4" y2="270"/><line x1="219.6" y1="50" x2="219.6" y2="270"/><line x1="227.2" y1="50" x2="227.2" y2="270"/><line x1="234.8" y1="50" x2="234.8" y2="270"/><line x1="242.4" y1="50" x2="242.4" y2="270"/><line x1="257.6" y1="50" x2="257.6" y2="270"/><line x1="265.2" y1="50" x2="265.2" y2="270"/><line x1="272.8" y1="50" x2="272.8" y2="270"/><line x1="280.4" y1="50" x2="280.4" y2="270"/><line x1="295.6" y1="50" x2="295.6" y2="270"/><line x1="303.2" y1="50" x2="303.2" y2="270"/><line x1="310.8" y1="50" x2="310.8" y2="270"/><line x1="318.4" y1="50" x2="318.4" y2="270"/><line x1="333.6" y1="50" x2="333.6" y2="270"/><line x1="341.2" y1="50" x2="341.2" y2="270"/><line x1="348.8" y1="50" x2="348.8" y2="270"/><line x1="356.4" y1="50" x2="356.4" y2="270"/><line x1="371.6" y1="50" x2="371.6" y2="270"/><line x1="379.2" y1="50" x2="379.2" y2="270"/><line x1="386.8" y1="50" x2="386.8" y2="270"/><line x1="394.4" y1="50" x2="394.4" y2="270"/><line x1="409.6" y1="50" x2="409.6" y2="270"/><line x1="417.2" y1="50" x2="417.2" y2="270"/><line x1="424.8" y1="50" x2="424.8" y2="270"/><line x1="432.4" y1="50" x2="432.4" y2="270"/></g><g stroke="#cbd5e1" stroke-width="1"><line x1="60" y1="233.33" x2="440" y2="233.33"/><line x1="60" y1="196.67" x2="440" y2="196.67"/><line x1="60" y1="160" x2="440" y2="160"/><line x1="60" y1="123.33" x2="440" y2="123.33"/><line x1="60" y1="86.67" x2="440" y2="86.67"/><line x1="60" y1="50" x2="440" y2="50"/><line x1="98" y1="50" x2="98" y2="270"/><line x1="136" y1="50" x2="136" y2="270"/><line x1="174" y1="50" x2="174" y2="270"/><line x1="212" y1="50" x2="212" y2="270"/><line x1="250" y1="50" x2="250" y2="270"/><line x1="288" y1="50" x2="288" y2="270"/><line x1="326" y1="50" x2="326" y2="270"/><line x1="364" y1="50" x2="364" y2="270"/><line x1="402" y1="50" x2="402" y2="270"/><line x1="440" y1="50" x2="440" y2="270"/></g><g fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"><rect x="60" y="233.33" width="76" height="36.67"/><rect x="136" y="138" width="38" height="132"/><rect x="174" y="79.33" width="38" height="190.67"/><rect x="212" y="182" width="76" height="88"/><rect x="288" y="248" width="152" height="22"/></g><line x1="60" y1="270" x2="446" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="44" stroke="#1f2937" stroke-width="1.5"/><g font-size="11" fill="#1f2937" text-anchor="middle"><text x="60" y="286">0</text><text x="136" y="286">10</text><text x="212" y="286">20</text><text x="288" y="286">30</text><text x="364" y="286">40</text><text x="440" y="286">50</text></g><g font-size="11" fill="#1f2937" text-anchor="end"><text x="54" y="274">0</text><text x="54" y="237.33">1</text><text x="54" y="200.67">2</text><text x="54" y="164">3</text><text x="54" y="127.33">4</text><text x="54" y="90.67">5</text><text x="54" y="54">6</text></g><text x="250" y="308" font-size="12" fill="#1f2937" text-anchor="middle">Time, t (minutes)</text><text x="18" y="160" font-size="12" fill="#1f2937" text-anchor="middle" transform="rotate(-90 18 160)">Frequency density</text></svg>`;

const LOUVRE_PYRAMID = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch, not to scale, of a square-based pyramid ABCDE. The base ABCD is a square of side 35 m. The apex E is vertically above M, the centre of the base. EM is 21.6 m. The diagonal AC is dashed and the angle EAM between the sloping edge EA and the base is marked with the Greek letter theta." font-family="sans-serif"><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><polygon points="80,250 300,250 230,60" fill="#bae6fd" fill-opacity="0.6" stroke="none"/><polygon points="300,250 380,190 230,60" fill="#c7d2fe" fill-opacity="0.6" stroke="none"/><g stroke="#334155" stroke-width="1.2" stroke-dasharray="5 4" fill="none"><line x1="80" y1="250" x2="160" y2="190"/><line x1="160" y1="190" x2="380" y2="190"/><line x1="160" y1="190" x2="230" y2="60"/><line x1="80" y1="250" x2="380" y2="190"/><line x1="230" y1="60" x2="230" y2="220"/></g><g stroke="#1f2937" stroke-width="2" fill="none"><line x1="80" y1="250" x2="300" y2="250"/><line x1="300" y1="250" x2="380" y2="190"/><line x1="80" y1="250" x2="230" y2="60"/><line x1="300" y1="250" x2="230" y2="60"/><line x1="380" y1="190" x2="230" y2="60"/></g><path d="M230 212 L238 210.4 L238 218.4" fill="none" stroke="#334155" stroke-width="1"/><path d="M114.7 243.06 A35 35 0 0 0 101.69 222.53" fill="none" stroke="#b91c1c" stroke-width="1.5"/><circle cx="230" cy="220" r="2.5" fill="#1f2937"/><g font-size="13" fill="#1f2937"><text x="66" y="266">A</text><text x="304" y="268">B</text><text x="386" y="192">C</text><text x="148" y="186">D</text><text x="225" y="52">E</text><text x="216" y="236">M</text><text x="120" y="236" fill="#b91c1c">θ</text></g><g font-size="12" fill="#1f2937"><text x="190" y="270" text-anchor="middle">35 m</text><text x="352" y="232">35 m</text><text x="236" y="150">21.6 m</text><text x="452" y="292" text-anchor="end" font-size="11">Not to scale</text></g></svg>`;

const SAILING_TRIANGLE = `<svg viewBox="0 0 400 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sketch, not to scale, of triangle ABC formed by three buoys. AB is 9.5 km, AC is 7.2 km and BC is 13.1 km. The angle at A is marked as the largest angle." font-family="sans-serif"><rect x="0" y="0" width="400" height="270" fill="#ffffff"/><polygon points="160,230 350,230 128.9,89.4" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><path d="M178 230 A18 18 0 0 0 156.12 212.42" fill="none" stroke="#b91c1c" stroke-width="1.5"/><g fill="#1f2937"><circle cx="160" cy="230" r="3.5"/><circle cx="350" cy="230" r="3.5"/><circle cx="128.9" cy="89.4" r="3.5"/></g><g font-size="13" fill="#1f2937"><text x="152" y="250">A</text><text x="354" y="248">B</text><text x="112" y="84">C</text></g><g font-size="12" fill="#1f2937"><text x="255" y="250" text-anchor="middle">9.5 km</text><text x="104" y="166" text-anchor="middle">7.2 km</text><text x="256" y="150">13.1 km</text><text x="392" y="262" text-anchor="end" font-size="11">Not to scale</text></g></svg>`;

const SPINNING_TOP = `<svg viewBox="0 0 400 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A solid spinning top made from a cone on top of a hemisphere. Both have radius 6 cm. The perpendicular height of the cone is 8 cm." font-family="sans-serif"><rect x="0" y="0" width="400" height="270" fill="#ffffff"/><path d="M140 170 A60 60 0 0 0 260 170 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="140,170 260,170 200,90" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><ellipse cx="200" cy="170" rx="60" ry="12" fill="none" stroke="#334155" stroke-width="1.2" stroke-dasharray="5 4"/><g stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"><line x1="200" y1="90" x2="200" y2="170"/><line x1="200" y1="170" x2="260" y2="170"/></g><path d="M200 162 L208 162 L208 170" fill="none" stroke="#334155" stroke-width="1"/><g font-size="12" fill="#1f2937"><text x="206" y="134">8 cm</text><text x="230" y="188" text-anchor="middle">6 cm</text><text x="392" y="262" text-anchor="end" font-size="11">Not to scale</text></g></svg>`;

const VECTOR_TRIANGLE = `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB. P is on OA with OP to PA equal to 2 to 1. Q is the midpoint of AB. The line OB is extended to R so that B is the midpoint of OR. Vector OA is a and vector OB is b. A dashed line joins P, Q and R." font-family="sans-serif"><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><polygon points="40,270 150,50 220,230" fill="#c7d2fe" fill-opacity="0.5" stroke="none"/><g stroke="#1f2937" stroke-width="2"><line x1="40" y1="270" x2="150" y2="50"/><line x1="150" y1="50" x2="220" y2="230"/><line x1="40" y1="270" x2="400" y2="190"/></g><line x1="113.33" y1="123.33" x2="400" y2="190" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="6 4"/><polygon points="100.5,149 100.5,160.18 91.56,155.71" fill="#1f2937"/><polygon points="139,248 130.33,255.05 128.16,245.29" fill="#1f2937"/><g fill="#1f2937"><circle cx="40" cy="270" r="3.5"/><circle cx="150" cy="50" r="3.5"/><circle cx="220" cy="230" r="3.5"/><circle cx="400" cy="190" r="3.5"/><circle cx="113.33" cy="123.33" r="3.5"/><circle cx="185" cy="140" r="3.5"/></g><g font-size="13" fill="#1f2937"><text x="24" y="284">O</text><text x="146" y="40">A</text><text x="218" y="252">B</text><text x="406" y="188">R</text><text x="94" y="120">P</text><text x="190" y="132">Q</text></g><g font-size="14" fill="#1f2937" font-weight="bold"><text x="74" y="150">a</text><text x="126" y="274">b</text></g><text x="432" y="292" text-anchor="end" font-size="11" fill="#1f2937">Not to scale</text></svg>`;

const ALT_SEGMENT = `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle with centre O. A, B and C are points on the circle. The line ST is the tangent to the circle at A, with S to the left and T to the right. Chords AB, AC and BC are drawn; C is on the major arc. The angle between the tangent AT and the chord AB is marked x. Radii OA and OB are dashed." font-family="sans-serif"><rect x="0" y="0" width="480" height="290" fill="#ffffff"/><circle cx="240" cy="140" r="100" fill="#f8fafc" stroke="#1f2937" stroke-width="2"/><line x1="70" y1="240" x2="410" y2="240" stroke="#1f2937" stroke-width="2"/><g stroke="#1f2937" stroke-width="1.8"><line x1="240" y1="240" x2="333.97" y2="174.2"/><line x1="240" y1="240" x2="153.4" y2="90"/><line x1="153.4" y1="90" x2="333.97" y2="174.2"/></g><g stroke="#334155" stroke-width="1.2" stroke-dasharray="5 4"><line x1="240" y1="140" x2="240" y2="240"/><line x1="240" y1="140" x2="333.97" y2="174.2"/></g><path d="M270 240 A30 30 0 0 0 264.57 222.79" fill="none" stroke="#b91c1c" stroke-width="1.5"/><g fill="#1f2937"><circle cx="240" cy="140" r="3"/><circle cx="240" cy="240" r="3.5"/><circle cx="333.97" cy="174.2" r="3.5"/><circle cx="153.4" cy="90" r="3.5"/></g><g font-size="13" fill="#1f2937"><text x="226" y="136">O</text><text x="236" y="258">A</text><text x="340" y="176">B</text><text x="138" y="84">C</text><text x="64" y="258">S</text><text x="404" y="258">T</text><text x="276" y="234" fill="#b91c1c">x</text></g><text x="472" y="282" text-anchor="end" font-size="11" fill="#1f2937">Not to scale</text></svg>`;

export const paper: ExamPaper = {
  id: "exam-1b",
  title: "Mock Set B — Paper 1H",
  calculator: true,
  minutes: 120,
  questions: [
    // ============================ WARM-UP (grade 4–5) =======================
    {
      kind: "short",
      id: "exam-1b-q01",
      topicId: "number-bounds",
      guideRef: "prime-factors-hcf-lcm",
      difficulty: "warmup",
      question:
        "A = {{2^3 * 3^2 * 7}}\n\nB = {{2^2 * 3 * 5^2}}\n\nFind the lowest common multiple (LCM) of A and B. Give your answer as an ordinary number.",
      answer: { type: "number", value: 12600 },
      traps: [
        { spec: { type: "number", value: 12 }, feedback: "12 = {{2^2 * 3}} is the HCF — the primes the two numbers *share*, at their lower powers. The LCM needs every prime, each at its **highest** power." },
        { spec: { type: "number", value: 151200 }, feedback: "That is A × B. It is a common multiple, but not the lowest: the shared factor {{2^2 * 3}} has been counted twice." },
      ],
      solution: [
        "The LCM uses every prime that appears in either number, each to its highest power.",
        "2: highest power {{2^3}}. 3: highest power {{3^2}}. 5: {{5^2}}. 7: {{7^1}}.",
        "LCM = {{2^3 * 3^2 * 5^2 * 7}} = 8 × 9 × 25 × 7 = **12 600**.",
      ],
      solutions: [
        { label: "Venn diagram of prime factors", steps: ["Shared (overlap): 2, 2, 3.", "Only in A: 2, 3, 7. Only in B: 5, 5.", "LCM = product of everything in the diagram = (2 × 3 × 7) × (2 × 2 × 3) × (5 × 5) = 42 × 12 × 25 = 12 600."] },
      ],
      commonError: "Taking the lower powers (that gives the HCF, 12) or simply multiplying A by B.",
      hints: [
        "For the LCM, which power of 2 do you need: {{2^3}} or {{2^2}}?",
        "Take every prime from either number at its highest power, then multiply.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-1b-q02",
      topicId: "fractions-percentages",
      guideRef: "reverse-percentages",
      difficulty: "warmup",
      question:
        "In a sale in Amsterdam, the price of a bicycle is reduced by 15%. The sale price is €238.\n\nWork out the price of the bicycle before the sale, in euros.",
      answer: { type: "number", value: 280, display: "€280" },
      traps: [
        { spec: { type: "number", value: 273.7, tolerance: 0.01 }, feedback: "You added 15% of the *sale* price. The 15% was taken off the original price, so €238 is 85% of the original — divide by 0.85." },
        { spec: { type: "number", value: 202.3, tolerance: 0.01 }, feedback: "You reduced the sale price by another 15%. €238 is what is left *after* the reduction, so work backwards: divide by 0.85." },
      ],
      solution: [
        "After a 15% reduction, the sale price is 100% − 15% = 85% of the original price.",
        "So 0.85 × original = 238.",
        "Original = 238 ÷ 0.85 = **€280**.",
        "Check: 280 × 0.85 = 238 ✓",
      ],
      commonError: "Adding 15% of €238 back on — the percentage is of the original price, not the sale price.",
      hints: [
        "The sale price is what percentage of the original price?",
        "If 85% of the original is €238, divide by the multiplier 0.85.",
      ],
      strategy: "Work backwards",
    },
    {
      kind: "mcq",
      id: "exam-1b-q03",
      topicId: "indices-surds",
      guideRef: "standard-form",
      difficulty: "warmup",
      question:
        "The mass of the Earth is {{5.97 * 10^24}} kg.\nThe mass of the Moon is {{7.35 * 10^22}} kg.\n\nHow many times heavier than the Moon is the Earth? Give your answer correct to 3 significant figures.",
      options: ["8.12", "812", "81.2", "0.0123"],
      answerIndex: 2,
      explanation:
        "Divide the Earth's mass by the Moon's: {{(5.97 * 10^24)/(7.35 * 10^22)}} = {{5.97/7.35}} × {{10^(24 - 22)}} = 0.8122… × 100 = 81.2. The answers 8.12 and 812 come from using the wrong power of 10 ({{10^1}} or {{10^3}} instead of {{10^2}}). 0.0123 is the Moon's mass divided by the Earth's — the division the wrong way round.",
      hints: [
        "'How many times heavier' means divide the bigger mass by the smaller one.",
        "Divide the numbers (5.97 ÷ 7.35) and subtract the powers (24 − 22) separately, then combine.",
      ],
      strategy: "Estimate first",
    },
    {
      kind: "short",
      id: "exam-1b-q04",
      topicId: "ratio-proportion",
      guideRef: "compound-measures",
      difficulty: "warmup",
      question:
        "A high-speed train in Japan travels 552.6 km in 2 hours 15 minutes.\n\nWork out its average speed in **metres per second**. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 68.2, tolerance: 0.05, display: "68.2 m/s" },
      traps: [
        { spec: { type: "number", value: 71.4, tolerance: 0.05 }, feedback: "2 hours 15 minutes is not 2.15 hours. 15 minutes is {{15/60}} = 0.25 of an hour, so the time is 2.25 hours." },
        { spec: { type: "number", value: 245.6, tolerance: 0.05 }, feedback: "245.6 is the speed in km/h. The question asks for metres per second: divide by 3.6." },
      ],
      solution: [
        "Time = 2 hours 15 minutes = 2.25 hours.",
        "Speed = 552.6 ÷ 2.25 = 245.6 km/h.",
        "1 km/h = 1000 m ÷ 3600 s, so divide by 3.6: 245.6 ÷ 3.6 = 68.22… m/s.",
        "To 3 s.f.: **68.2 m/s**.",
      ],
      solutions: [
        { label: "Convert first", steps: ["552.6 km = 552 600 m; 2 h 15 min = 135 min = 8100 s.", "552 600 ÷ 8100 = 68.22… ≈ 68.2 m/s."] },
      ],
      commonError: "Writing 2 h 15 min as 2.15 hours.",
      hints: [
        "Write the time as a decimal number of hours first — what fraction of an hour is 15 minutes?",
        "Find the speed in km/h, then change km/h to m/s by dividing by 3.6 (or work in metres and seconds from the start).",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "short",
      id: "exam-1b-q05",
      topicId: "solving-equations",
      guideRef: "linear-equations",
      difficulty: "warmup",
      question: "Solve {{(3x - 1)/4 - (x + 2)/3 = 1}}\n\nShow clear algebraic working.",
      answer: { type: "number", value: 4.6, display: "x = 4.6 (or {{23/5}})" },
      traps: [
        { spec: { type: "number", value: 1.4 }, feedback: "Sign slip: the minus sign in front of the second fraction multiplies *both* terms: −4(x + 2) = −4x − 8, not −4x + 8." },
        { spec: { type: "number", value: 3.4 }, feedback: "When you multiplied through by 12, the right-hand side must be multiplied too: 1 × 12 = 12." },
      ],
      solution: [
        "Multiply every term by 12 (the LCM of 4 and 3): 3(3x − 1) − 4(x + 2) = 12.",
        "Expand: 9x − 3 − 4x − 8 = 12.",
        "Collect: 5x − 11 = 12, so 5x = 23.",
        "**x = {{23/5}} = 4.6**.",
      ],
      commonError: "Writing −4(x + 2) as −4x + 8.",
      hints: [
        "What number can you multiply every term by to clear both fractions?",
        "Multiply by 12, and keep the minus sign attached to the whole of 4(x + 2).",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "mcq",
      id: "exam-1b-q06",
      topicId: "probability",
      guideRef: "basic-probability",
      difficulty: "warmup",
      question:
        "A game stall at a Deepavali fair uses a biased four-sided spinner numbered 1 to 4. The table shows the probabilities.\n\n| Number | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| Probability | 0.32 | 0.2 | x | 2x |\n\nThe spinner is spun 250 times. How many times would you expect it to land on 4?",
      options: ["80", "40", "120", "62.5"],
      answerIndex: 0,
      explanation:
        "The probabilities add to 1: 0.32 + 0.2 + x + 2x = 1, so 3x = 0.48 and x = 0.16. P(4) = 2x = 0.32. Expected number = 0.32 × 250 = 80. 40 uses x = 0.16 instead of 2x. 120 uses the whole 0.48 for the number 4. 62.5 treats the spinner as fair (250 ÷ 4) — but it is biased.",
      hints: [
        "All four probabilities must add up to 1. Form an equation in x.",
        "Expected frequency = number of spins × probability.",
      ],
    },
    {
      kind: "short",
      id: "exam-1b-q07",
      topicId: "linear-graphs",
      guideRef: "y-mx-c",
      difficulty: "warmup",
      question:
        "A straight line passes through the points (−2, 7) and (4, −5).\n\nFind the equation of the line. Give your answer in the form y = mx + c.",
      answer: { type: "equation", eq: "y=-2x+3", display: "y = −2x + 3" },
      traps: [
        { spec: { type: "equation", eq: "y=-0.5x+6" }, feedback: "Gradient = change in y ÷ change in x, not the other way up. (−5 − 7) ÷ (4 − (−2)) = −12 ÷ 6 = −2." },
        { spec: { type: "equation", eq: "y=2x+11" }, feedback: "Check the sign of the gradient: as x increases from −2 to 4, y *decreases* from 7 to −5, so the gradient is negative." },
      ],
      solution: [
        "Gradient m = {{(-5 - 7)/(4 - (-2))}} = {{-12/6}} = −2.",
        "Substitute (4, −5) into y = −2x + c: −5 = −8 + c, so c = 3.",
        "**y = −2x + 3**. Check with (−2, 7): −2 × (−2) + 3 = 7 ✓",
      ],
      commonError: "Calculating change in x ÷ change in y for the gradient.",
      hints: [
        "Gradient = {{(y_2 - y_1)/(x_2 - x_1)}}.",
        "Then substitute one of the points into y = mx + c to find c.",
      ],
      strategy: "Check by substituting",
    },
    {
      kind: "mcq",
      id: "exam-1b-q08",
      topicId: "angles-circle-theorems",
      guideRef: "polygons",
      difficulty: "warmup",
      question: "Each interior angle of a regular polygon is 156°.\n\nWhat is the sum of the interior angles of the polygon?",
      options: ["2700°", "2340°", "360°", "2028°"],
      answerIndex: 1,
      explanation:
        "Exterior angle = 180° − 156° = 24°, so the number of sides is 360 ÷ 24 = 15. Interior angle sum = (15 − 2) × 180° = 2340° (check: 15 × 156° = 2340° ✓). 2700° is 15 × 180°, forgetting the − 2. 360° is the sum of the *exterior* angles. 2028° is 13 × 156°, mixing the interior angle into the (n − 2) × 180° formula.",
      hints: [
        "Interior and exterior angles at a vertex add up to 180°. What is each exterior angle?",
        "Exterior angles of any polygon add up to 360°, so you can find the number of sides.",
      ],
      strategy: "Use the inverse",
    },

    // ============================ CORE (grade 6–7) ==========================
    {
      kind: "written",
      id: "exam-1b-q09",
      topicId: "expand-factorise",
      guideRef: "harder-algebra",
      difficulty: "core",
      question:
        "n is an integer.\n\nProve algebraically that {{(2n + 3)^2 - (2n - 1)^2}} is always a multiple of 8, but is **never** a multiple of 16.",
      marks: 4,
      modelAnswer:
        "{{(2n + 3)^2 = 4n^2 + 12n + 9}} and {{(2n - 1)^2 = 4n^2 - 4n + 1}}.\n\nSo {{(2n + 3)^2 - (2n - 1)^2 = 4n^2 + 12n + 9 - 4n^2 + 4n - 1 = 16n + 8}}.\n\n16n + 8 = 8(2n + 1), and 2n + 1 is an integer, so the expression is a multiple of 8.\n\n2n + 1 is always odd, so 8(2n + 1) is 8 × an odd number. It has only three factors of 2, so it can never be a multiple of 16 = {{2^4}}. (Equivalently, 16n + 8 leaves remainder 8 when divided by 16.)",
      markScheme: [
        { point: "Expands both squares correctly: 4n² + 12n + 9 and 4n² − 4n + 1 (or uses difference of two squares: (4)(4n + 2))", keywords: ["4n^2", "12n", "-4n", "4n²", "4(4n+2)", "difference of two squares"] },
        { point: "Simplifies to 16n + 8", keywords: ["16n+8", "16n + 8"] },
        { point: "Writes 8(2n + 1), so a multiple of 8", keywords: ["8(2n+1)", "8(2n + 1)", "multiple of 8"] },
        { point: "Explains 2n + 1 is odd, so not a multiple of 16 (or remainder 8 on dividing by 16)", keywords: ["odd", "remainder 8", "not a multiple of 16", "never"] },
      ],
      solutions: [
        { label: "Difference of two squares (quicker)", steps: ["{{A^2 - B^2 = (A - B)(A + B)}} with A = 2n + 3, B = 2n − 1.", "A − B = 4 and A + B = 4n + 2.", "Product = 4(4n + 2) = 8(2n + 1): 8 × odd, so a multiple of 8 but not of 16."] },
      ],
      commonError: "Writing −(2n − 1)² as −4n² − 4n + 1 (the bracket must be expanded *before* the minus sign is applied to every term).",
      hints: [
        "Expand both brackets carefully — or spot that this is a difference of two squares.",
        "Simplify. Can you take out a factor of 8?",
        "What kind of number is 2n + 1? Why does that stop 8(2n + 1) being a multiple of 16?",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "mcq",
      id: "exam-1b-q10",
      topicId: "graphs-of-functions",
      guideRef: "graph-transformations",
      difficulty: "core",
      question:
        "The graph of y = f(x) has exactly one turning point, a minimum at (3, −4).\n\nWhat are the coordinates of the turning point of the graph of y = f(2x)?",
      options: ["(6, −4)", "(3, −8)", "(3, −2)", "(1.5, −4)"],
      answerIndex: 3,
      explanation:
        "y = f(2x) is a stretch parallel to the x-axis with scale factor {{1/2}}: every x-coordinate is halved and y-coordinates stay the same. So (3, −4) → (1.5, −4). Check: at x = 1.5, f(2 × 1.5) = f(3) = −4. (6, −4) doubles x — the classic 'inside the bracket works backwards' trap. (3, −8) is y = 2f(x), and (3, −2) halves the y-coordinate instead.",
      hints: [
        "A change *inside* the bracket affects the x-coordinates; outside affects y.",
        "Which value of x makes 2x equal to 3?",
      ],
      strategy: "Check by substituting",
    },
    {
      kind: "short",
      id: "exam-1b-q11",
      topicId: "sequences",
      guideRef: "arithmetic-series",
      difficulty: "core",
      question:
        "Hana is saving for a school trip to Kuala Lumpur. She saves $15 in the first week. Each week after that, she saves $4 more than in the week before.\n\nAfter how many weeks will her total savings **first** be more than $2000?",
      answer: { type: "number", value: 29, display: "29 weeks" },
      traps: [
        { spec: { type: "number", value: 28 }, feedback: "After 28 weeks she has 28 × (2 × 28 + 13) = $1932 — not yet more than $2000. Round **up** when the answer must exceed a target." },
        { spec: { type: "number", value: 497 }, feedback: "That would be the week in which she saves $2000 in that single week. The question is about her *total* savings — use the sum formula." },
      ],
      solution: [
        "Arithmetic series with a = 15, d = 4.",
        "{{S_n = n/2 (2a + (n - 1)d) = n/2 (30 + 4n - 4) = n/2 (4n + 26) = n(2n + 13)}}.",
        "Solve 2n² + 13n = 2000: {{n = (-13 + sqrt(169 + 16000))/4}} = 28.5…",
        "n must be a whole number of weeks and the total must exceed $2000, so round up: n = 29.",
        "Check: S₂₈ = 28 × 69 = $1932 (not enough); S₂₉ = 29 × 71 = $2059 ✓. **29 weeks**.",
      ],
      commonError: "Rounding 28.5 to 28, or finding when a single week's saving reaches $2000.",
      hints: [
        "Is this about one term or about the total? Which formula gives a total?",
        "Use {{S_n = n/2 (2a + (n - 1)d)}} with a = 15 and d = 4, and set it equal to 2000.",
        "Solve the quadratic, then decide whether to round up or down — check both neighbouring whole numbers.",
      ],
      strategy: "Check by substituting",
    },
    {
      kind: "short",
      id: "exam-1b-q12",
      topicId: "quadratic-equations",
      guideRef: "quadratic-formula",
      difficulty: "core",
      question:
        "A rectangular solar panel has length (2x + 3) metres and width (x − 1) metres. The area of the panel is 20 m².\n\nWork out the value of x. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 3.15, tolerance: 0.005, display: "x = 3.15" },
      traps: [
        { spec: { type: "number", value: -3.65, tolerance: 0.005 }, feedback: "That root solves the equation, but then the width x − 1 would be negative. Reject it — a length can't be negative." },
      ],
      solution: [
        "(2x + 3)(x − 1) = 20 → 2x² − 2x + 3x − 3 = 20 → 2x² + x − 23 = 0.",
        "a = 2, b = 1, c = −23: {{x = (-1 +- sqrt(1 + 184))/4 = (-1 +- sqrt(185))/4}}.",
        "x = 3.150… or x = −3.650…",
        "x − 1 must be positive, so x = −3.65 is rejected. **x = 3.15** (3 s.f.).",
      ],
      commonError: "Forgetting to subtract 20 to make the equation equal zero, or keeping the negative root.",
      hints: [
        "Write an equation for the area, then rearrange it to = 0.",
        "It doesn't factorise — use the quadratic formula with a = 2, b = 1, c = −23.",
        "Which root makes sense for a length?",
      ],
    },
    {
      kind: "short",
      id: "exam-1b-q13",
      topicId: "functions",
      guideRef: "inverse-functions",
      difficulty: "core",
      question: "f(x) = {{(3x + 2)/(x - 4)}}, x ≠ 4\n\nFind {{f^(-1)(x)}}.",
      answer: { type: "expression", expr: "(4x+2)/(x-3)", display: "{{f^(-1)(x) = (4x + 2)/(x - 3)}}" },
      traps: [
        { spec: { type: "expression", expr: "(x-4)/(3x+2)" }, feedback: "That's the reciprocal {{1/f(x)}}, not the inverse. The inverse *undoes* f: write y = f(x), then make x the subject." },
        { spec: { type: "expression", expr: "(4x-2)/(x-3)" }, feedback: "Nearly — check the sign when you collect terms: xy − 4y = 3x + 2 gives xy − 3x = 4y + 2." },
      ],
      solution: [
        "Let y = {{(3x + 2)/(x - 4)}}. Multiply up: y(x − 4) = 3x + 2.",
        "Expand: xy − 4y = 3x + 2.",
        "Collect the x terms on one side: xy − 3x = 4y + 2.",
        "Factorise: x(y − 3) = 4y + 2, so x = {{(4y + 2)/(y - 3)}}.",
        "**{{f^(-1)(x) = (4x + 2)/(x - 3)}}**. Check: f(0) = −0.5 and {{f^(-1)(-0.5)}} = {{(-2 + 2)/(-3.5)}} = 0 ✓",
      ],
      commonError: "Giving 1/f(x), or failing to factorise out x after collecting the x terms.",
      hints: [
        "Write y = f(x) and aim to make x the subject. x appears twice — what does that mean you must do?",
        "Multiply both sides by (x − 4), expand, and get all the x terms on one side.",
        "Factorise x out, divide, then swap y for x.",
      ],
      strategy: "Use the inverse",
    },
    {
      kind: "short",
      id: "exam-1b-q14",
      topicId: "inequalities",
      guideRef: "quadratic-inequalities",
      difficulty: "core",
      question: "Solve the inequality 2x² + 5x − 12 ≤ 0",
      answer: { type: "inequality", ineq: "-4<=x<=1.5", display: "−4 ≤ x ≤ 1.5" },
      traps: [
        { spec: { type: "inequality", ineq: "x<=-4 or x>=1.5" }, feedback: "Those are the values where the parabola is *above* the x-axis (≥ 0). For ≤ 0 you want the part of the U-shaped curve below the axis — between the roots." },
        { spec: { type: "inequality", ineq: "-1.5<=x<=4" }, feedback: "Check the roots: 2x − 3 = 0 gives x = 1.5 and x + 4 = 0 gives x = −4. The signs have been swapped." },
      ],
      solution: [
        "Critical values: 2x² + 5x − 12 = 0 → (2x − 3)(x + 4) = 0 → x = 1.5 or x = −4.",
        "The graph of y = 2x² + 5x − 12 is a U-shaped parabola crossing the x-axis at −4 and 1.5.",
        "It is ≤ 0 (on or below the axis) between the roots, including them.",
        "**−4 ≤ x ≤ 1.5**",
      ],
      commonError: "Giving the 'outside' region x ≤ −4 or x ≥ 1.5.",
      hints: [
        "Find the critical values by solving 2x² + 5x − 12 = 0.",
        "Sketch the U-shaped curve through the critical values. Where is it below the x-axis?",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-1b-q15",
      topicId: "similarity-congruence",
      guideRef: "area-volume-scale",
      difficulty: "core",
      question:
        "Two solid jade figurines are mathematically similar. The surface area of the smaller figurine is 45 cm² and the surface area of the larger figurine is 125 cm².\n\nThe mass of the smaller figurine is 540 g.\n\nWork out the mass of the larger figurine, in grams.",
      answer: { type: "number", value: 2500, display: "2500 g" },
      traps: [
        { spec: { type: "number", value: 1500 }, feedback: "You scaled the mass by the *area* factor {{125/45}}. Mass depends on volume, so you need the volume scale factor." },
        { spec: { type: "number", value: 900 }, feedback: "You used the length scale factor {{5/3}}. Mass depends on volume, which scales by the cube: {{(5/3)^3}}." },
      ],
      solution: [
        "Area scale factor = {{125/45 = 25/9}}.",
        "Length scale factor = {{sqrt(25/9) = 5/3}}.",
        "Volume (and so mass, same material) scale factor = {{(5/3)^3 = 125/27}}.",
        "Mass = 540 × {{125/27}} = 20 × 125 = **2500 g**.",
      ],
      commonError: "Multiplying the mass by the area scale factor.",
      hints: [
        "Mass depends on volume. What scale factor do you need, and what do you know?",
        "From the area scale factor, square root to get the length scale factor.",
        "Cube the length scale factor to get the volume scale factor.",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "short",
      id: "exam-1b-q16",
      topicId: "pythagoras-trigonometry",
      guideRef: "three-d",
      difficulty: "core",
      question:
        "The glass pyramid at the Louvre in Paris can be modelled as a square-based pyramid ABCDE. The base ABCD is a square of side 35 m. The apex E is vertically above M, the centre of the base, and EM = 21.6 m.\n\nCalculate the size of the angle between the sloping edge EA and the base ABCD. Give your answer correct to 1 decimal place.",
      diagram: LOUVRE_PYRAMID,
      answer: { type: "number", value: 41.1, tolerance: 0.05, display: "41.1°" },
      traps: [
        { spec: { type: "number", value: 51.0, tolerance: 0.05 }, feedback: "You used half the side (17.5 m), which gives the angle between a sloping *face* and the base. The edge EA sits above the diagonal, so you need AM = half of AC." },
        { spec: { type: "number", value: 31.7, tolerance: 0.05 }, feedback: "You used the full diagonal AC. M is the centre of the base, so AM is only half of AC." },
      ],
      solution: [
        "The angle is EAM, in right-angled triangle EAM (right angle at M).",
        "Diagonal AC = {{sqrt(35^2 + 35^2)}} = 49.497… m, so AM = 24.748… m.",
        "tan θ = {{(EM)/(AM)}} = {{21.6/24.748…}} = 0.8728…",
        "θ = {{tan^(-1)(0.8728…)}} = 41.11…° = **41.1°** (1 d.p.).",
      ],
      commonError: "Using half the side length (17.5 m) instead of half the diagonal.",
      hints: [
        "Find a right-angled triangle that contains EA and lies in a vertical plane.",
        "Triangle EAM: you know EM. You need AM, which is half the diagonal of the square base.",
        "Find AC by Pythagoras, halve it, then use tan θ = opposite ÷ adjacent.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-1b-q17",
      topicId: "further-trigonometry",
      guideRef: "cosine-rule",
      difficulty: "core",
      question:
        "Three buoys A, B and C mark a triangular sailing course off East Coast Park.\n\nAB = 9.5 km, AC = 7.2 km and BC = 13.1 km.\n\nCalculate the size of angle BAC. Give your answer correct to 1 decimal place.",
      diagram: SAILING_TRIANGLE,
      answer: { type: "number", value: 102.5, tolerance: 0.05, display: "102.5°" },
      traps: [
        { spec: { type: "number", value: 77.5, tolerance: 0.05 }, feedback: "The cosine is negative here (−0.2158), so the angle is obtuse. Check you kept the minus sign — 77.5° is 180° − 102.5°." },
      ],
      solution: [
        "BC is opposite angle A, so use {{cos A = (b^2 + c^2 - a^2)/(2bc)}}.",
        "cos A = {{(7.2^2 + 9.5^2 - 13.1^2)/(2 * 7.2 * 9.5)}} = {{(51.84 + 90.25 - 171.61)/136.8}} = {{-29.52/136.8}} = −0.21578…",
        "A = {{cos^(-1)(-0.21578…)}} = 102.46…° = **102.5°**.",
        "Sense check: BC is the longest side and 13.1² > 7.2² + 9.5², so the angle opposite it is obtuse ✓",
      ],
      commonError: "Putting the wrong side as a (it must be the side opposite the angle you want), or dropping the minus sign.",
      hints: [
        "You know all three sides and want an angle. Which rule?",
        "The side opposite angle A is BC. Use {{cos A = (b^2 + c^2 - a^2)/(2bc)}}.",
        "A negative cosine means an obtuse angle — the calculator handles it if you keep the sign.",
      ],
    },
    {
      kind: "short",
      id: "exam-1b-q18",
      topicId: "mensuration",
      guideRef: "cones-spheres-pyramids",
      difficulty: "core",
      question:
        "A solid spinning top is made from a cone joined to a hemisphere, as shown. The cone and the hemisphere both have radius 6 cm. The perpendicular height of the cone is 8 cm.\n\nWork out the total surface area of the spinning top. Give your answer in terms of π.",
      diagram: SPINNING_TOP,
      answer: { type: "expression", expr: "132pi", display: "132π cm²" },
      traps: [
        { spec: { type: "expression", expr: "168pi" }, feedback: "The flat circle where the cone meets the hemisphere is *inside* the solid — it isn't part of the outside surface. Don't add 36π." },
        { spec: { type: "expression", expr: "120pi" }, feedback: "The curved surface of a cone is πrl where l is the **slant** height, not the perpendicular height. Find l with Pythagoras." },
        { spec: { type: "expression", expr: "204pi" }, feedback: "You used the area of a whole sphere (4πr²). A hemisphere's curved surface is half of that: 2πr² = 72π." },
      ],
      solution: [
        "Slant height of the cone: {{l = sqrt(6^2 + 8^2) = 10}} cm.",
        "Curved surface of cone = πrl = π × 6 × 10 = 60π.",
        "Curved surface of hemisphere = {{1/2 * 4 pi r^2}} = 2π × 36 = 72π.",
        "The joining circle is hidden inside, so total = 60π + 72π = **132π cm²**.",
      ],
      commonError: "Using the perpendicular height in πrl, or including the hidden circular face.",
      hints: [
        "Which surfaces can you actually touch on the outside?",
        "The cone's curved surface is πrl — you need the slant height l first.",
        "The hemisphere's curved surface is half of 4πr².",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "mcq",
      id: "exam-1b-q19",
      topicId: "vectors-transformations",
      guideRef: "transformations",
      difficulty: "core",
      question:
        "Triangle P has vertices (1, 1), (3, 1) and (1, 2).\nTriangle Q has vertices (−2, −2), (−6, −2) and (−2, −4).\n\nWhich single transformation maps triangle P onto triangle Q?",
      options: [
        "Enlargement, scale factor 2, centre (0, 0)",
        "Rotation 180° about (0, 0)",
        "Enlargement, scale factor −2, centre (0, 0)",
        "Enlargement, scale factor {{-1/2}}, centre (0, 0)",
      ],
      answerIndex: 2,
      explanation:
        "Each vertex of P is multiplied by −2: (1, 1) → (−2, −2), (3, 1) → (−6, −2), (1, 2) → (−2, −4). That is an enlargement, scale factor −2, centre (0, 0) — the image is twice as big and on the opposite side of the centre (upside down). Scale factor 2 would put Q in the first quadrant. A rotation of 180° gives the right orientation but cannot change the size. Scale factor {{-1/2}} maps Q back onto P, not P onto Q.",
      hints: [
        "Compare lengths: P's base is 2 units long; how long is Q's?",
        "Q is on the opposite side of the origin and upside down. What does a negative scale factor do?",
      ],
      strategy: "Check by substituting",
    },
    {
      kind: "short",
      id: "exam-1b-q20",
      topicId: "statistics",
      guideRef: "histograms",
      difficulty: "core",
      question:
        "The histogram shows the times, t minutes, that 90 students at an international school in Singapore took to travel to school one morning.\n\nUse the histogram to estimate the number of these students who took **more than 25 minutes**.",
      diagram: HISTOGRAM,
      answer: { type: "number", value: 24, display: "24 students" },
      traps: [
        { spec: { type: "number", value: 36 }, feedback: "You counted the whole 20 < t ≤ 30 class. Only the part from 25 to 30 minutes counts: 5 minutes × 2.4 = 12 students." },
        { spec: { type: "number", value: 3 }, feedback: "You added the bar heights. In a histogram the heights are frequency *densities* — frequency = frequency density × class width." },
      ],
      solution: [
        "Frequency = frequency density × class width.",
        "25 < t ≤ 30: part of the 20–30 bar (height 2.4). Width 5, so 2.4 × 5 = 12 students.",
        "30 < t ≤ 50: height 0.6, width 20, so 0.6 × 20 = 12 students.",
        "Estimate = 12 + 12 = **24 students**.",
        "Check the whole histogram: 1.0 × 10 + 3.6 × 5 + 5.2 × 5 + 2.4 × 10 + 0.6 × 20 = 10 + 18 + 26 + 24 + 12 = 90 ✓",
      ],
      commonError: "Reading bar heights as frequencies, or counting the whole 20–30 class.",
      hints: [
        "In a histogram, which quantity is represented by the *area* of a bar?",
        "Frequency = frequency density × class width. Read the heights carefully from the scale.",
        "For the 20–30 bar you only want the part from 25 to 30 — assume the students are spread evenly across the class.",
      ],
    },
    {
      kind: "short",
      id: "exam-1b-q21",
      topicId: "sets-venn",
      guideRef: "venn-probability",
      difficulty: "core",
      question:
        "60 tourists were asked about their visit to Gardens by the Bay.\n\n38 visited the Cloud Forest.\n31 visited the Flower Dome.\n7 visited neither.\n\nOne of the tourists who visited the Flower Dome is chosen at random. Find the probability that this tourist also visited the Cloud Forest.",
      answer: { type: "fraction", n: 16, d: 31, display: "{{16/31}}" },
      traps: [
        { spec: { type: "fraction", n: 4, d: 15 }, feedback: "{{16/60}} is P(visited both) out of *all* the tourists. The question says the tourist is chosen from those who visited the Flower Dome — so divide by 31." },
        { spec: { type: "fraction", n: 8, d: 19 }, feedback: "{{16/38}} divides by the Cloud Forest total. The tourist is chosen from the **Flower Dome** visitors, so the denominator is 31." },
      ],
      solution: [
        "Visited at least one = 60 − 7 = 53.",
        "Both = 38 + 31 − 53 = 16 (the overlap is counted twice in 38 + 31).",
        "Choosing from the 31 Flower Dome visitors, 16 also visited the Cloud Forest.",
        "Probability = **{{16/31}}**.",
      ],
      commonError: "Dividing by 60 instead of by the 31 Flower Dome visitors.",
      hints: [
        "Draw a Venn diagram. How many visited at least one attraction?",
        "38 + 31 is more than 53 — the overlap has been counted twice. How many visited both?",
        "'One of the tourists who visited the Flower Dome' — what is the new total you are choosing from?",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-1b-q22",
      topicId: "probability",
      guideRef: "tree-diagrams",
      difficulty: "core",
      question:
        "A box contains 12 mooncakes: 5 lotus seed, 4 red bean and 3 durian. They all look the same from the outside.\n\nJun takes three mooncakes at random, without replacement.\n\nWork out the probability that the three mooncakes are all different flavours. Give your answer as a fraction in its simplest form.",
      answer: { type: "fraction", n: 3, d: 11, simplest: true, display: "{{3/11}}" },
      traps: [
        { spec: { type: "fraction", n: 1, d: 22 }, feedback: "That's the probability for one particular order (e.g. lotus, then red bean, then durian). The three flavours can come out in 3! = 6 different orders." },
        { spec: { type: "fraction", n: 5, d: 24 }, feedback: "That assumes the mooncakes are replaced. Without replacement the denominators go 12, 11, 10." },
      ],
      solution: [
        "One order, e.g. L, R, D: {{5/12 * 4/11 * 3/10 = 60/1320 = 1/22}}.",
        "Every order of the three flavours has the same numerators (5, 4, 3 in some order) and denominators (12, 11, 10), so each has probability {{1/22}}.",
        "There are 3 × 2 × 1 = 6 orders.",
        "P(all different) = 6 × {{1/22}} = **{{3/11}}**.",
      ],
      solutions: [
        { label: "Counting combinations", steps: ["Ways to choose one of each flavour: 5 × 4 × 3 = 60.", "Ways to choose any 3 of 12 (order not mattering): {{(12 * 11 * 10)/6}} = 220.", "Probability = {{60/220 = 3/11}}."] },
      ],
      commonError: "Finding only one order (lotus–red bean–durian) and forgetting the other five.",
      hints: [
        "Work out the probability for one particular order of flavours first.",
        "Without replacement, the denominators go 12, 11, 10.",
        "How many different orders can three different flavours come out in?",
      ],
      strategy: "Split into cases",
    },
    {
      kind: "short",
      id: "exam-1b-q23",
      topicId: "indices-surds",
      guideRef: "rationalising",
      difficulty: "core",
      question:
        "Show that {{(5 + sqrt(3))/(2 - sqrt(3))}} can be written in the form {{a + b sqrt(3)}}, where a and b are integers.\n\nGive your answer in that form.",
      answer: { type: "expression", expr: "13+7sqrt(3)", form: "surd", display: "{{13 + 7 sqrt(3)}}" },
      traps: [
        { spec: { type: "expression", expr: "(13+7sqrt(3))/7" }, feedback: "Check the denominator: {{(2 - sqrt(3))(2 + sqrt(3)) = 4 - 3 = 1}}, not 7. The minus sign comes from {{-(sqrt(3))^2}}." },
        { spec: { type: "expression", expr: "7+7sqrt(3)" }, feedback: "{{sqrt(3) * sqrt(3) = 3}}, which must be *added* to the 10 in the numerator: 10 + 3 = 13." },
      ],
      solution: [
        "Multiply top and bottom by the conjugate {{2 + sqrt(3)}}.",
        "Denominator: {{(2 - sqrt(3))(2 + sqrt(3)) = 4 - 3 = 1}}.",
        "Numerator: {{(5 + sqrt(3))(2 + sqrt(3)) = 10 + 5 sqrt(3) + 2 sqrt(3) + 3 = 13 + 7 sqrt(3)}}.",
        "So the expression = **{{13 + 7 sqrt(3)}}** (a = 13, b = 7).",
      ],
      commonError: "Multiplying by {{2 - sqrt(3)}} (or by {{sqrt(3)}}) instead of the conjugate, or getting 4 + 3 = 7 in the denominator.",
      hints: [
        "To remove a surd from a denominator like {{2 - sqrt(3)}}, multiply top and bottom by its conjugate.",
        "The conjugate is {{2 + sqrt(3)}}. The denominator becomes a difference of two squares.",
        "Expand the numerator with FOIL and collect the whole numbers and the {{sqrt(3)}} terms.",
      ],
    },

    // ============================ CHALLENGE (grade 8–9) =====================
    {
      kind: "short",
      id: "exam-1b-q24",
      topicId: "number-bounds",
      guideRef: "bounds-calculations",
      difficulty: "challenge",
      question:
        "A car joins the expressway. Its acceleration, a m/s², is given by {{a = (v - u)/t}}\n\nu = 12 m/s, correct to the nearest whole number.\nv = 28.4 m/s, correct to 1 decimal place.\nt = 3.7 s, correct to 1 decimal place.\n\nWork out the upper bound for the value of a. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 4.64, tolerance: 0.005, display: "4.64 m/s²" },
      traps: [
        { spec: { type: "number", value: 4.37, tolerance: 0.005 }, feedback: "You used the upper bound of u. Subtracting a *bigger* u makes v − u smaller — for the maximum, subtract the lower bound of u (11.5)." },
        { spec: { type: "number", value: 4.52, tolerance: 0.005 }, feedback: "You divided by the upper bound of t. Dividing by a bigger number gives a smaller answer — use the lower bound of t (3.65)." },
        { spec: { type: "number", value: 4.43, tolerance: 0.005 }, feedback: "That's the value using the rounded measurements. The question wants the largest possible value, using bounds." },
      ],
      solution: [
        "Bounds: u: 11.5 ≤ u < 12.5; v: 28.35 ≤ v < 28.45; t: 3.65 ≤ t < 3.75.",
        "To make a as large as possible: make v − u as large as possible (UB of v, LB of u) and divide by the smallest t (LB of t).",
        "Upper bound of a = {{(28.45 - 11.5)/3.65 = 16.95/3.65}} = 4.6438…",
        "**4.64 m/s²** (3 s.f.).",
      ],
      commonError: "Using the upper bound for every value — for a difference you need UB − LB, and for a quotient UB ÷ LB.",
      hints: [
        "Write down the lower and upper bound of each of u, v and t.",
        "To make a fraction as big as possible, make the top big and the bottom small.",
        "To make v − u as big as possible, which bound of u do you subtract?",
      ],
      strategy: "Consider extremes",
    },
    {
      kind: "short",
      id: "exam-1b-q25",
      topicId: "fractions-percentages",
      guideRef: "algebraic-fractions",
      difficulty: "challenge",
      question:
        "Write {{3/(x + 2) - (x - 4)/(x^2 + x - 2)}} as a single fraction in its simplest form.",
      answer: { type: "expression", expr: "(2x+1)/((x+2)(x-1))", form: "simplified", display: "{{(2x + 1)/((x + 2)(x - 1))}}" },
      traps: [
        { spec: { type: "expression", expr: "(2x-7)/((x+2)(x-1))" }, feedback: "Sign slip: subtracting (x − 4) gives −x **+ 4**, so the numerator is 3x − 3 − x + 4 = 2x + 1." },
        { spec: { type: "expression", expr: "(-x+7)/((x+2)(x-1))" }, feedback: "The first fraction must be multiplied top *and* bottom by (x − 1): 3(x − 1) = 3x − 3, not just 3." },
      ],
      solution: [
        "Factorise the quadratic denominator: x² + x − 2 = (x + 2)(x − 1).",
        "Common denominator (x + 2)(x − 1), so {{3/(x + 2) = (3(x - 1))/((x + 2)(x - 1))}}.",
        "Numerator: 3(x − 1) − (x − 4) = 3x − 3 − x + 4 = 2x + 1.",
        "**{{(2x + 1)/((x + 2)(x - 1))}}** — 2x + 1 shares no factor with the denominator, so this is fully simplified.",
      ],
      commonError: "Multiplying the two denominators together (giving a cubic) instead of spotting that x + 2 is already a factor of x² + x − 2.",
      hints: [
        "Factorise x² + x − 2 first. Do you notice anything?",
        "The lowest common denominator is (x + 2)(x − 1) — what must the first fraction be multiplied by, top and bottom?",
        "Take care subtracting (x − 4): the minus applies to both terms.",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "short",
      id: "exam-1b-q26",
      topicId: "calculus",
      guideRef: "turning-points",
      difficulty: "challenge",
      question:
        "A recycling company makes open-topped bins from thin aluminium sheet. Each bin is a cuboid with a square base of side x cm and height h cm. The bin has no lid. Each bin must hold 32 000 cm³.\n\nUse calculus to find the minimum area of aluminium sheet needed to make one bin, in cm².",
      answer: { type: "number", value: 4800, display: "4800 cm²" },
      traps: [
        { spec: { type: "number", value: 40 }, feedback: "x = 40 cm is the base length that gives the minimum. The question asks for the minimum *area* — substitute x = 40 back into A." },
        { spec: { type: "number", value: 6400 }, feedback: "That includes a lid (2x² instead of x²). The bins are open-topped, so there is only one square face." },
      ],
      solution: [
        "Volume: x²h = 32 000, so h = {{32000/x^2}}.",
        "Area = base + four sides: A = x² + 4xh = {{x^2 + 4x * 32000/x^2 = x^2 + 128000/x}} = {{x^2 + 128000 x^(-1)}}.",
        "{{(dA)/(dx) = 2x - 128000 x^(-2)}}. Set = 0: 2x = {{128000/x^2}}, so x³ = 64 000 and x = 40.",
        "{{(d^2A)/(dx^2) = 2 + 256000/x^3}} > 0 at x = 40, so this is a minimum.",
        "A = 40² + {{128000/40}} = 1600 + 3200 = **4800 cm²** (with h = 20 cm).",
      ],
      commonError: "Including a lid, or stopping at x = 40 without finding the area.",
      hints: [
        "Write A in terms of x and h, then use the volume to eliminate h.",
        "You should get A = x² + {{128000/x}}. Write the second term as a power of x before differentiating.",
        "Set {{(dA)/(dx) = 0}}, solve for x, and check it is a minimum. Then find A.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "written",
      id: "exam-1b-q27",
      topicId: "vectors-transformations",
      guideRef: "vector-geometry",
      difficulty: "challenge",
      question:
        "OAB is a triangle. →OA = **a** and →OB = **b**.\n\nP is the point on OA such that OP : PA = 2 : 1.\nQ is the midpoint of AB.\nThe line OB is extended to the point R so that B is the midpoint of OR.\n\nProve that P, Q and R lie on a straight line, and find the ratio PQ : QR.",
      diagram: VECTOR_TRIANGLE,
      marks: 4,
      modelAnswer:
        "→OP = {{2/3}}**a**, →OQ = **a** + {{1/2}}(**b** − **a**) = {{1/2}}**a** + {{1/2}}**b**, →OR = 2**b**.\n\n→PQ = →OQ − →OP = {{1/2}}**a** + {{1/2}}**b** − {{2/3}}**a** = −{{1/6}}**a** + {{1/2}}**b** = {{1/6}}(3**b** − **a**).\n\n→PR = →OR − →OP = 2**b** − {{2/3}}**a** = {{2/3}}(3**b** − **a**).\n\nSo →PR = 4 →PQ. The vectors →PQ and →PR are parallel (one is a multiple of the other) and they share the point P, so P, Q and R lie on a straight line.\n\nPR = 4PQ, so QR = 3PQ and PQ : QR = 1 : 3.",
      markScheme: [
        { point: "Correct →PQ = −{{1/6}}a + {{1/2}}b (or equivalent, e.g. {{1/6}}(3b − a))", keywords: ["1/6", "-1/6a", "1/2b", "3b-a", "3b - a"] },
        { point: "Correct →PR = 2b − {{2/3}}a (or →QR = {{3/2}}b − {{1/2}}a)", keywords: ["2b", "2/3a", "-2/3a", "3/2b", "2/3(3b"] },
        { point: "Shows one is a multiple of the other, e.g. →PR = 4→PQ, and states they share a common point so P, Q, R are collinear", keywords: ["4pq", "multiple", "parallel", "common point", "collinear", "straight line"] },
        { point: "PQ : QR = 1 : 3", keywords: ["1:3", "1 : 3"] },
      ],
      solutions: [
        { label: "Via →QR", steps: ["→QR = →OR − →OQ = 2**b** − {{1/2}}**a** − {{1/2}}**b** = {{3/2}}**b** − {{1/2}}**a** = {{1/2}}(3**b** − **a**).", "→PQ = {{1/6}}(3**b** − **a**), so →QR = 3 →PQ.", "Parallel with common point Q ⇒ collinear, and PQ : QR = 1 : 3."] },
      ],
      commonError: "Showing →PQ and →PR are parallel but not stating that they share the point P — parallel alone doesn't prove the points are on one line.",
      hints: [
        "Write →OP, →OQ and →OR in terms of **a** and **b** first.",
        "For Q, go from O to A, then halfway along →AB = **b** − **a**.",
        "Find →PQ and →PR. Is one a multiple of the other? What else must you say to prove collinearity?",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "written",
      id: "exam-1b-q28",
      topicId: "angles-circle-theorems",
      guideRef: "circle-proofs",
      difficulty: "challenge",
      question:
        "A, B and C are points on a circle with centre O. ST is the tangent to the circle at A. C lies on the major arc AB. Angle TAB = x, where x is acute.\n\nProve that angle ACB = x. (This is the alternate segment theorem.)\n\nYou may use the facts that a tangent is perpendicular to the radius at the point of contact, and that the angle at the centre is twice the angle at the circumference. Give a reason for each step.",
      diagram: ALT_SEGMENT,
      marks: 4,
      modelAnswer:
        "Angle OAT = 90° (a tangent is perpendicular to the radius at the point of contact).\n\nSo angle OAB = 90° − x.\n\nOA = OB (radii), so triangle OAB is isosceles and angle OBA = angle OAB = 90° − x (base angles of an isosceles triangle).\n\nAngle AOB = 180° − 2(90° − x) = 2x (angles in a triangle add up to 180°).\n\nAngle ACB = {{1/2}} × angle AOB = x (the angle at the centre is twice the angle at the circumference, both standing on arc AB).\n\nSo angle ACB = angle TAB = x.",
      markScheme: [
        { point: "Angle OAB = 90° − x, with reason: tangent ⟂ radius", keywords: ["90 - x", "90-x", "90° − x", "perpendicular", "tangent"] },
        { point: "Angle OBA = 90° − x, with reason: OA = OB radii / isosceles triangle", keywords: ["isosceles", "radii", "radius", "oa = ob", "oa=ob", "base angles"] },
        { point: "Angle AOB = 2x, with reason: angles in a triangle sum to 180°", keywords: ["2x", "180", "angles in a triangle"] },
        { point: "Angle ACB = x, with reason: angle at centre is twice angle at circumference", keywords: ["twice", "double", "centre", "circumference", "half"] },
      ],
      commonError: "Quoting the alternate segment theorem itself as a reason — that is what you are asked to prove.",
      hints: [
        "Join O to A and O to B (the dashed radii). What is angle OAT?",
        "Find angle OAB in terms of x. What type of triangle is OAB?",
        "Find angle AOB, then use the angle at the centre theorem to get angle ACB.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-1b-q29",
      topicId: "quadratic-equations",
      guideRef: "linear-quadratic-simultaneous",
      difficulty: "challenge",
      question:
        "The line with equation y = 2x − 5 intersects the circle with equation x² + y² = 25 at the points A and B.\n\nFind the exact length of the chord AB. Give your answer as a surd in its simplest form.",
      answer: { type: "expression", expr: "4sqrt(5)", form: "surd", display: "{{4 sqrt(5)}}" },
      traps: [
        { spec: { type: "number", value: 80 }, feedback: "80 is AB². Remember to square root: AB = {{sqrt(80)}}, then simplify." },
        { spec: { type: "expression", expr: "2sqrt(5)" }, feedback: "Check the coordinates: the points are (0, −5) and (4, 3), so the differences are 4 and 8. {{sqrt(16 + 64) = sqrt(80) = 4 sqrt(5)}}." },
      ],
      solution: [
        "Substitute y = 2x − 5: x² + (2x − 5)² = 25.",
        "x² + 4x² − 20x + 25 = 25 → 5x² − 20x = 0 → 5x(x − 4) = 0.",
        "x = 0 → y = −5; x = 4 → y = 3. So A(0, −5) and B(4, 3).",
        "{{AB = sqrt((4 - 0)^2 + (3 - (-5))^2) = sqrt(16 + 64) = sqrt(80)}}.",
        "{{sqrt(80) = sqrt(16 * 5)}} = **{{4 sqrt(5)}}**.",
      ],
      commonError: "Expanding (2x − 5)² as 4x² + 25 (missing the −20x), or leaving the answer as {{sqrt(80)}}.",
      hints: [
        "Substitute the line into the circle to get a quadratic in x.",
        "The quadratic factorises neatly — find both x values, then the matching y values from the line.",
        "Use Pythagoras on the two points, then simplify the surd.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "exam-1b-q30",
      topicId: "further-trigonometry",
      guideRef: "trig-equations",
      difficulty: "challenge",
      question:
        "Solve 2sin²x + 3cos x = 3 for 0° ≤ x ≤ 360°.\n\nGive all the solutions, in degrees, separated by commas.",
      answer: { type: "list", values: [0, 60, 300, 360], ordered: false, display: "x = 0°, 60°, 300°, 360°" },
      traps: [
        { spec: { type: "list", values: [60, 300], ordered: false }, feedback: "You have found the solutions of cos x = {{1/2}}. The other factor gives cos x = 1 — that has solutions in this interval too (both ends of it)." },
        { spec: { type: "list", values: [0, 60, 360], ordered: false }, feedback: "cos x = {{1/2}} has two solutions in 0°–360°: 60° and 360° − 60° = 300°." },
      ],
      solution: [
        "Use sin²x = 1 − cos²x: 2(1 − cos²x) + 3cos x = 3.",
        "2 − 2cos²x + 3cos x − 3 = 0 → 2cos²x − 3cos x + 1 = 0.",
        "Factorise: (2cos x − 1)(cos x − 1) = 0, so cos x = {{1/2}} or cos x = 1.",
        "cos x = {{1/2}}: x = 60° or x = 360° − 60° = 300°.",
        "cos x = 1: x = 0° or x = 360° (both are in the interval, which includes its end points).",
        "**x = 0°, 60°, 300°, 360°**",
      ],
      commonError: "Missing cos x = 1, or missing the second solution of cos x = ½ from the symmetry of the cosine graph.",
      hints: [
        "The equation mixes sin and cos. Which identity lets you write everything in terms of cos x?",
        "Replace sin²x by 1 − cos²x and rearrange into a quadratic in cos x.",
        "Factorise, then use the graph of y = cos x to find every solution in 0° ≤ x ≤ 360° — including the end points.",
      ],
      strategy: "Make it simpler",
    },
  ],
};
