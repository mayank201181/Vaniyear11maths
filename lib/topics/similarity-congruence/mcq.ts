// Similarity & congruence — MCQ papers (3 × 15). Options are shuffled at display time.
// Diagrams are drawn to scale from the lengths and angles in each question.
import type { Paper } from "../../types.ts";

const M1Q06 = `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with D on AB and E on AC. DE is parallel to BC. AD is 6 cm, DB is 3 cm, DE is 8 cm and BC is x."><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><polygon points="155.1,68.1 60,272 360,272" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="91.7" y1="204" x2="291.7" y2="204" stroke="#1f2937" stroke-width="2"/><polyline points="188.7,208.8 194.7,204 188.7,199.2" fill="none" stroke="#1f2937" stroke-width="1.6"/><polyline points="207,276.8 213,272 207,267.2" fill="none" stroke="#1f2937" stroke-width="1.6"/><text x="151.4" y="59.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="49" y="284" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="371" y="284" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="79.7" y="208" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">D</text><text x="303.7" y="208" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1f2937" font-weight="bold">E</text><text x="103.5" y="131.3" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">6 cm</text><text x="55.9" y="233.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">3 cm</text><text x="191.7" y="196" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">8 cm</text><text x="210" y="292" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">x</text></svg>`;

const M1Q07 = `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two triangles ABC and EDC meeting at C. Lines AE and BD cross at C. AB is parallel to DE. AC is 6 cm, CE is 9 cm, AB is 8 cm, BC is 5 cm and DE is x."><rect x="0" y="0" width="440" height="260" fill="#ffffff"/><polygon points="169.1,67.1 280.7,76.8 230,125" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="230,125 321.3,211.8 153.9,197.4" fill="#fde68a" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="222.5,76.5 228.9,72.3 223.3,67" fill="none" stroke="#1f2937" stroke-width="1.6"/><polyline points="235.2,209.2 241.6,204.9 236,199.6" fill="none" stroke="#1f2937" stroke-width="1.6"/><text x="156.1" y="66.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="294.3" y="78" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="334.3" y="221.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">E</text><text x="140.3" y="205.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="246" y="130" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1f2937" font-weight="bold">C</text><text x="226.1" y="62.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">8 cm</text><text x="189.9" y="110.7" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">6 cm</text><text x="265" y="115.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">5 cm</text><text x="285.3" y="162.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">9 cm</text><text x="236.4" y="223.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">x</text></svg>`;

const M1Q12 = `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Straight lines AE and BD cross at C. AB is parallel to DE. C is the midpoint of AE: AC and CE are marked equal. Triangles ABC and EDC are shaded."><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><polygon points="70,58 318,66 220,150" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="370,242 122,234 220,150" fill="#fde68a" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="190.8,66.7 197,62.1 191.2,57.1" fill="none" stroke="#1f2937" stroke-width="1.6"/><polyline points="242.8,242.7 249,238.1 243.2,233.1" fill="none" stroke="#1f2937" stroke-width="1.6"/><line x1="141.9" y1="109.1" x2="148.1" y2="98.9" stroke="#1f2937" stroke-width="1.6"/><line x1="291.9" y1="201.1" x2="298.1" y2="190.9" stroke="#1f2937" stroke-width="1.6"/><text x="58" y="56" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="330" y="64" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="220" y="138" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="110" y="246" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="382" y="254" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">E</text></svg>`;

const M1Q14 = `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with D on AB and the line CD drawn. Angle ACD equals angle ABC, shown by matching arcs. AC is 6 cm and AD is 4 cm."><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><polygon points="40,262 400,262 194.3,78.1" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="194.3" y1="78.1" x2="200" y2="262" stroke="#1f2937" stroke-width="2"/><path d="M 195.1 104.1 A 26 26 0 0 1 177.6 98.1" fill="none" stroke="#b45309" stroke-width="1.8"/><path d="M 366 262 A 34 34 0 0 1 374.6 239.3" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="26.8" y="271.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="413.3" y="270.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="192.3" y="68.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="200" y="281" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="106.4" y="165.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">6 cm</text><text x="120" y="280" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">4 cm</text></svg>`;

const M2Q06 = `<svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at B: AB is 4 cm, BC is 6 cm. Right-angled triangle PQR with the right angle at Q, drawn in a different orientation: PQ is 10 cm and QR is x."><rect x="0" y="0" width="440" height="280" fill="#ffffff"/><polygon points="60,192 60,240 132,240" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="60,229 71,229 71,240" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 60 208 A 16 16 0 0 0 73.3 200.9" fill="none" stroke="#b45309" stroke-width="1.8"/><polygon points="390,262 270,262 270,82" fill="#bbf7d0" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="281,262 281,251 270,251" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 366 262 A 24 24 0 0 1 376.7 242" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="52" y="184" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="49" y="252" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="144" y="248" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="401" y="274" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">P</text><text x="260" y="276" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">Q</text><text x="264" y="74" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">R</text><text x="52" y="220" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">4 cm</text><text x="96" y="258" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">6 cm</text><text x="330" y="278" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">10 cm</text><text x="260" y="176" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">x</text></svg>`;

const M2Q12 = `<svg viewBox="0 0 400 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Isosceles triangle ABC with AB equal to AC, marked with single ticks. M is the point on BC with AM perpendicular to BC, shown by a right-angle mark at M."><rect x="0" y="0" width="400" height="280" fill="#ffffff"/><polygon points="200,30 80,250 320,250" fill="#c7d2fe" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="200" y1="30" x2="200" y2="250" stroke="#1f2937" stroke-width="2"/><line x1="134.7" y1="137.1" x2="145.3" y2="142.9" stroke="#1f2937" stroke-width="1.6"/><line x1="254.7" y1="142.9" x2="265.3" y2="137.1" stroke="#1f2937" stroke-width="1.6"/><polyline points="200,238 212,238 212,250" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="200" y="20.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="68" y="262" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="332" y="262" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="200" y="270" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">M</text></svg>`;

const M2Q13 = `<svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trapezium ABCD with AB parallel to DC. AB is 12 cm and DC is 8 cm. The diagonals AC and BD cross at X. AC is 15 cm."><rect x="0" y="0" width="420" height="290" fill="#ffffff"/><polygon points="30,250 330,250 359,70 159,70" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="30" y1="250" x2="359" y2="70" stroke="#1f2937" stroke-width="2"/><line x1="330" y1="250" x2="159" y2="70" stroke="#1f2937" stroke-width="2"/><polyline points="178,254.8 184,250 178,245.2" fill="none" stroke="#1f2937" stroke-width="1.6"/><polyline points="257,74.8 263,70 257,65.2" fill="none" stroke="#1f2937" stroke-width="1.6"/><text x="17.4" y="260.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="340.9" y="263.3" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="370.7" y="66.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="151.2" y="62.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="227.4" y="164" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">X</text><text x="180" y="274" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">12 cm</text><text x="259" y="60" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">8 cm</text></svg>`;

const M2Q14 = `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cone of height 12 cm is cut by a plane parallel to its base, 4 cm below the apex. The small cone on top is removed, leaving a frustum, which is shaded."><rect x="0" y="0" width="400" height="300" fill="#ffffff"/><path d="M 160 110 L 80 270 A 120 22 0 0 0 320 270 L 240 110 Z" fill="#fde68a" fill-opacity="0.6" stroke="none"/><ellipse cx="200" cy="110" rx="40" ry="7" fill="#fde68a" stroke="#1f2937" stroke-width="1.6"/><line x1="200" y1="30" x2="80" y2="270" stroke="#1f2937" stroke-width="2"/><line x1="200" y1="30" x2="320" y2="270" stroke="#1f2937" stroke-width="2"/><path d="M 80 270 A 120 22 0 0 0 320 270" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M 80 270 A 120 22 0 0 1 320 270" fill="none" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="200" y1="30" x2="200" y2="270" stroke="#475569" stroke-width="1.4" stroke-dasharray="4 4"/><line x1="345" y1="30" x2="345" y2="270" stroke="#1e3a8a" stroke-width="1.4"/><line x1="340" y1="30" x2="350" y2="30" stroke="#1e3a8a" stroke-width="1.4"/><line x1="340" y1="270" x2="350" y2="270" stroke="#1e3a8a" stroke-width="1.4"/><text x="355" y="155" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">12 cm</text><line x1="285" y1="30" x2="285" y2="110" stroke="#1e3a8a" stroke-width="1.4"/><line x1="280" y1="30" x2="290" y2="30" stroke="#1e3a8a" stroke-width="1.4"/><line x1="280" y1="110" x2="290" y2="110" stroke="#1e3a8a" stroke-width="1.4"/><text x="292" y="75" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">4 cm</text></svg>`;

const M3Q05 = `<svg viewBox="0 0 440 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line segments AB and CD cross at M. AM equals MB, marked with single ticks, and CM equals MD, marked with double ticks. Triangles AMC and BMD are shaded."><rect x="0" y="0" width="440" height="290" fill="#ffffff"/><polygon points="60,60 220,150 100,250" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="380,240 220,150 340,50" fill="#fde68a" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="142.9" y1="99.8" x2="137.1" y2="110.2" stroke="#1f2937" stroke-width="1.6"/><line x1="302.9" y1="189.8" x2="297.1" y2="200.2" stroke="#1f2937" stroke-width="1.6"/><line x1="154.2" y1="197" x2="161.9" y2="206.2" stroke="#1f2937" stroke-width="1.6"/><line x1="158.1" y1="193.8" x2="165.8" y2="203" stroke="#1f2937" stroke-width="1.6"/><line x1="274.2" y1="97" x2="281.9" y2="106.2" stroke="#1f2937" stroke-width="1.6"/><line x1="278.1" y1="93.8" x2="285.8" y2="103" stroke="#1f2937" stroke-width="1.6"/><text x="47.8" y="57.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="392.2" y="251.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="89.2" y="263.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="350.8" y="45.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="238" y="155" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1f2937" font-weight="bold">M</text></svg>`;

const M3Q06 = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ADE with B on AD and C on AE. BC is parallel to DE. AB is 6 cm, BD is x cm, BC is 8 cm and DE is 12 cm."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><polygon points="220,30 96.3,270 456.3,270" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="137.5" y1="190" x2="377.5" y2="190" stroke="#1f2937" stroke-width="2"/><polyline points="255.5,194.8 261.5,190 255.5,185.2" fill="none" stroke="#1f2937" stroke-width="1.6"/><polyline points="274.3,274.8 280.3,270 274.3,265.2" fill="none" stroke="#1f2937" stroke-width="1.6"/><text x="216.8" y="20.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="83.8" y="280.7" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="469.3" y="279.7" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">E</text><text x="125.5" y="194" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">B</text><text x="389.5" y="194" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1f2937" font-weight="bold">C</text><text x="166.3" y="108.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">6 cm</text><text x="104.5" y="228.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">x cm</text><text x="257.5" y="182" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">8 cm</text><text x="276.3" y="292" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">12 cm</text></svg>`;

const M3Q11 = `<svg viewBox="0 0 400 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An inverted cone, apex at the bottom, 20 cm deep. Water fills it to a depth of 10 cm, shaded."><rect x="0" y="0" width="400" height="300" fill="#ffffff"/><path d="M 145 160 L 200 280 L 255 160 Z" fill="#bae6fd" stroke="none"/><ellipse cx="200" cy="160" rx="55" ry="7" fill="#bae6fd" stroke="#0369a1" stroke-width="1.5"/><line x1="90" y1="40" x2="200" y2="280" stroke="#1f2937" stroke-width="2"/><line x1="310" y1="40" x2="200" y2="280" stroke="#1f2937" stroke-width="2"/><ellipse cx="200" cy="40" rx="110" ry="14" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="340" y1="40" x2="340" y2="280" stroke="#1e3a8a" stroke-width="1.4"/><line x1="335" y1="40" x2="345" y2="40" stroke="#1e3a8a" stroke-width="1.4"/><line x1="335" y1="280" x2="345" y2="280" stroke="#1e3a8a" stroke-width="1.4"/><text x="350" y="165" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">20 cm</text><line x1="280" y1="160" x2="280" y2="280" stroke="#1e3a8a" stroke-width="1.4"/><line x1="275" y1="160" x2="285" y2="160" stroke="#1e3a8a" stroke-width="1.4"/><line x1="275" y1="280" x2="285" y2="280" stroke="#1e3a8a" stroke-width="1.4"/><text x="288" y="225" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">10 cm</text></svg>`;

const M3Q13 = `<svg viewBox="0 0 440 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Square ABCD with E on BC and F on CD. BE equals CF, marked with ticks. Lines AE and BF are drawn."><rect x="0" y="0" width="440" height="310" fill="#ffffff"/><polygon points="100,40 340,40 340,280 100,280" fill="#ffffff" fill-opacity="1" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="100" y1="40" x2="340" y2="130" stroke="#1f2937" stroke-width="2"/><line x1="340" y1="40" x2="250" y2="280" stroke="#1f2937" stroke-width="2"/><line x1="346" y1="85" x2="334" y2="85" stroke="#1f2937" stroke-width="1.6"/><line x1="295" y1="286" x2="295" y2="274" stroke="#1f2937" stroke-width="1.6"/><text x="90.1" y="34.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="349.9" y="34.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="349.9" y="294.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="90.1" y="294.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="352" y="135" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1f2937" font-weight="bold">E</text><text x="250" y="300" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">F</text></svg>`;

const M3Q14 = `<svg viewBox="0 0 340 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lines AD and BC cross at X. AB is parallel to CD. AB is 4 cm, CD is 6 cm, AX is x cm and XD is x + 3 cm."><rect x="0" y="0" width="340" height="290" fill="#ffffff"/><polygon points="196.1,30.2 258.3,45.2 230,120" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="230,120 280.9,254.7 187.6,232.2" fill="#fde68a" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="224.1,41.9 231.1,38.6 226.3,32.5" fill="none" stroke="#1f2937" stroke-width="1.6"/><polyline points="231.2,247.7 238.1,244.4 233.4,238.3" fill="none" stroke="#1f2937" stroke-width="1.6"/><text x="186.6" y="24.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="270" y="41.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="290.4" y="269.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="175.9" y="244.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="246" y="125" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1f2937" font-weight="bold">X</text><text x="230.4" y="28.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">4 cm</text><text x="199.9" y="84.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">x cm</text><text x="270.4" y="186.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">x + 3 cm</text><text x="231" y="261.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">6 cm</text></svg>`;

export const mcqPapers: Paper[] = [
  {
    id: "similarity-congruence-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q01",
        question: "Which of these is **not** enough to prove that two triangles are congruent?",
        options: [
          "SSS — all three pairs of sides equal",
          "SAS — two pairs of sides and the angle between them equal",
          "AAA — all three pairs of angles equal",
          "RHS — a right angle, the hypotenuses and one other pair of sides equal",
        ],
        answerIndex: 2,
        explanation:
          "Equal angles fix the **shape** but not the **size**: a triangle with angles 50°, 60°, 70° can have sides 3, 3.5, 3.8 or 30, 35, 38. So AAA proves triangles are *similar*, not congruent. SSS, SAS and RHS each fix a single triangle, so they are all valid congruence conditions.",
        difficulty: "warmup",
        guideRef: "congruence",
        hints: ["Could you draw two triangles with the same three angles but different sizes?"],
        strategy: "Look for a counterexample",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q02",
        question:
          "Rectangle P measures 4 cm by 6 cm. Rectangle Q is similar to P. The shorter side of Q is 10 cm.\n\nWork out the length of the longer side of Q.",
        options: ["15 cm", "12 cm", "2.4 cm", "60 cm"],
        answerIndex: 0,
        explanation:
          "The scale factor is {{10/4 = 2.5}}, so the longer side is 6 × 2.5 = 15 cm. 12 cm adds 6 cm to each side — adding keeps the *difference* the same, not the shape. 2.4 cm uses the scale factor upside down ({{6 * 4/10}}); 60 cm multiplies 6 by 10 instead of by the scale factor.",
        difficulty: "warmup",
        guideRef: "similar-lengths",
        hints: ["Similar shapes are enlargements: every length is **multiplied** by the same number.", "Scale factor = new length ÷ old length = {{10/4}}."],
        strategy: "Find the scale factor first",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q03",
        question: "How many square centimetres are there in 1 square metre?",
        options: ["100 cm²", "10 000 cm²", "1000 cm²", "1 000 000 cm²"],
        answerIndex: 1,
        explanation:
          "A 1 m by 1 m square is 100 cm by 100 cm, so its area is 100 × 100 = 10 000 cm². 100 cm² forgets that *both* dimensions are 100 times bigger; 1 000 000 cm² is the number of cm³ in 1 m³; 1000 cm² has no basis — it mixes up the metre–centimetre factor with the litre–cm³ factor.",
        difficulty: "warmup",
        guideRef: "area-volume-units",
        hints: ["Draw a 1 m by 1 m square and write each side in centimetres."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q04",
        question:
          "Shape B is an enlargement of shape A with linear scale factor 3. The area of shape A is 5 cm².\n\nWork out the area of shape B.",
        options: ["15 cm²", "135 cm²", "25 cm²", "45 cm²"],
        answerIndex: 3,
        explanation:
          "Areas scale by {{k^2 = 3^2 = 9}}, so B has area 5 × 9 = 45 cm². 15 cm² multiplies by 3 — that would only be right for lengths; 135 cm² uses {{3^3}}, the *volume* factor; 25 cm² squares the area instead of the scale factor.",
        difficulty: "warmup",
        guideRef: "area-volume-scale",
        hints: ["An area is a length × a length — so how many times does the scale factor apply?"],
        strategy: "Try a simple case",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q05",
        question:
          "In triangle PQR, PQ = 8 cm, angle P = 40° and angle Q = 65°.\n\nIn triangle XYZ, XY = 8 cm, angle X = 40° and angle Y = 65°.\n\nWhich condition proves that the triangles are congruent?",
        options: ["ASA", "SAS", "SSS", "RHS"],
        answerIndex: 0,
        explanation:
          "Two angles are equal **and** the side between them (PQ = XY) is equal, so the triangles are congruent by ASA. SAS would need two sides; SSS needs three sides; RHS needs a right angle — neither triangle has one (the third angle is 75°).",
        difficulty: "core",
        guideRef: "congruence",
        hints: ["List what you know: how many sides, how many angles?", "Where is the 8 cm side — between the two known angles, or opposite one of them?"],
        strategy: "Sort the given facts",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q06",
        question:
          "In the diagram, DE is parallel to BC. AD = 6 cm, DB = 3 cm and DE = 8 cm.\n\nWork out the length of BC, marked x.",
        diagram: M1Q06,
        options: ["4 cm", "11 cm", "12 cm", "5.33 cm"],
        answerIndex: 2,
        explanation:
          "Triangles ADE and ABC are similar (DE ∥ BC gives equal corresponding angles). Compare **whole** sides: AB = 6 + 3 = 9 cm, so the scale factor is {{9/6 = 1.5}} and BC = 8 × 1.5 = 12 cm. 4 cm uses DB = 3 as if it were a side of the big triangle ({{8 * 3/6}}); 11 cm adds 3 to 8; 5.33 cm divides by the scale factor — but BC is in the bigger triangle, so it must be longer than DE.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: [
          "Which two triangles are similar? Sketch them separately.",
          "The big triangle's side is AB, not DB. What is AB?",
          "Scale factor = {{(AB)/(AD)}}.",
        ],
        strategy: "Separate the triangles",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q07",
        question:
          "In the diagram, the lines AE and BD cross at C, and AB is parallel to DE.\n\nAC = 6 cm, CE = 9 cm, AB = 8 cm and BC = 5 cm.\n\nWork out the length of DE, marked x.",
        diagram: M1Q07,
        options: ["11 cm", "5.33 cm", "7.5 cm", "12 cm"],
        answerIndex: 3,
        explanation:
          "Triangles ABC and EDC are similar (vertically opposite angles at C, alternate angles from AB ∥ DE). CE corresponds to CA, so the scale factor is {{9/6 = 1.5}} and DE = 8 × 1.5 = 12 cm. 7.5 cm is CD (5 × 1.5) — the wrong pair of sides; 5.33 cm divides by 1.5 instead of multiplying; 11 cm adds 3 cm because CE is 3 cm longer than AC.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: [
          "Which angles are equal? Look at C, then at the parallel lines.",
          "Match the sides: AB is opposite C in one triangle — which side is opposite C in the other?",
          "Scale factor = {{(CE)/(CA)}}.",
        ],
        strategy: "Match corresponding sides",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q08",
        question: "Convert 3.5 m³ to cm³.",
        options: ["35 000 cm³", "3 500 000 cm³", "3500 cm³", "350 cm³"],
        answerIndex: 1,
        explanation:
          "1 m³ = 100 × 100 × 100 = 1 000 000 cm³, so 3.5 m³ = 3 500 000 cm³. 35 000 uses the *area* factor 10 000; 3500 uses 1000 (that converts m³ to litres); 350 multiplies by 100, the length factor.",
        difficulty: "core",
        guideRef: "area-volume-units",
        hints: ["A 1 m cube is 100 cm long, 100 cm wide and 100 cm high.", "So 1 m³ = {{100^3}} cm³."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q09",
        question: "A water tank on the roof of an HDB block holds 2.4 m³ of water.\n\nHow many litres is this?",
        options: ["2400 litres", "24 000 litres", "240 litres", "2 400 000 litres"],
        answerIndex: 0,
        explanation:
          "1 m³ = 1 000 000 cm³ and 1 litre = 1000 cm³, so 1 m³ = 1000 litres. 2.4 m³ = 2400 litres. 2 400 000 is the volume in **cm³**, not litres; 24 000 uses the area factor 10 000 and then forgets the litre step; 240 litres multiplies by 100.",
        difficulty: "core",
        guideRef: "area-volume-units",
        hints: ["How many cm³ are in 1 m³?", "1 litre is 1000 cm³ — so how many litres fit in 1 m³?"],
        strategy: "Go via a known unit",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q10",
        question:
          "Two vases are mathematically similar. The smaller vase is 16 cm tall and holds 256 cm³. The larger vase is 20 cm tall.\n\nWork out the volume of the larger vase.",
        options: ["320 cm³", "400 cm³", "500 cm³", "131 cm³"],
        answerIndex: 2,
        explanation:
          "Linear scale factor {{k = 20/16 = 5/4}}, so the volume factor is {{(5/4)^3 = 125/64}}. {{256 * 125/64 = 500}} cm³. 320 cm³ uses k (lengths only); 400 cm³ uses {{k^2}} (areas); 131 cm³ divides by {{125/64}} — but the bigger vase must hold more.",
        difficulty: "core",
        guideRef: "area-volume-scale",
        hints: ["Find the linear scale factor from the heights — keep it as a fraction.", "Volume is length × length × length, so cube the scale factor."],
        strategy: "Lengths → areas → volumes",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q11",
        question:
          "Two cylinders are mathematically similar. Their surface areas are 50 cm² and 200 cm². The smaller cylinder has height 6 cm.\n\nWork out the height of the larger cylinder.",
        options: ["24 cm", "12 cm", "9.52 cm", "3 cm"],
        answerIndex: 1,
        explanation:
          "Area factor {{200/50 = 4 = k^2}}, so the length factor is {{k = sqrt(4) = 2}} and the height is 6 × 2 = 12 cm. 24 cm multiplies the height by the *area* factor 4; 9.52 cm takes the cube root of 4 (treating 4 as a volume factor); 3 cm divides by 2.",
        difficulty: "core",
        guideRef: "area-volume-scale",
        hints: ["You are given areas but want a length.", "Area factor = {{k^2}}. How do you get back to k?"],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q12",
        question:
          "The straight lines AE and BD cross at C. AB is parallel to DE, and C is the midpoint of AE.\n\nWhich argument correctly proves that triangle ABC is congruent to triangle EDC?",
        diagram: M1Q12,
        options: [
          "AC = EC (C is the midpoint of AE) and AB = ED, so the triangles are congruent (SAS).",
          "Angle BAC = angle DEC and angle ABC = angle EDC (alternate angles), and angle ACB = angle ECD (vertically opposite), so the triangles are congruent (AAA).",
          "AC = EC (C is the midpoint of AE), angle BAC = angle DEC (corresponding angles) and BC = DC, so the triangles are congruent (SAS).",
          "AC = EC (C is the midpoint of AE), angle BAC = angle DEC (alternate angles, AB ∥ DE) and angle ACB = angle ECD (vertically opposite), so the triangles are congruent (ASA).",
        ],
        answerIndex: 3,
        explanation:
          "The ASA argument uses only known facts, each with a correct reason: AC = EC from the midpoint, the alternate angles at A and E from the parallel lines, and the vertically opposite angles at C. The equal sides AC and EC lie between the two pairs of equal angles, so ASA. The first argument assumes AB = ED, which is what congruence would *give* you. The AAA argument only proves the triangles similar. The last argument assumes BC = DC (not given), calls alternate angles 'corresponding', and its angle is not between AC and BC.",
        difficulty: "core",
        guideRef: "congruence",
        hints: [
          "For each argument, check that every fact is actually known and has the right reason.",
          "What do the parallel lines give you at A and E? What do you know about the two angles at C?",
          "Is the equal side between the two pairs of equal angles?",
        ],
        strategy: "Check each condition",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q13",
        question:
          "Two solids are mathematically similar. Their volumes are 81 cm³ and 192 cm³. The surface area of the larger solid is 144 cm².\n\nWork out the surface area of the smaller solid.",
        options: ["81 cm²", "60.75 cm²", "108 cm²", "256 cm²"],
        answerIndex: 0,
        explanation:
          "Volume factor {{192/81 = 64/27}}, so {{k = cbrt(64/27) = 4/3}} and the area factor is {{(4/3)^2 = 16/9}}. Smaller surface area = {{144 * 9/16 = 81}} cm². 60.75 cm² divides by the volume factor {{64/27}}; 108 cm² divides by k; 256 cm² multiplies by {{16/9}} — but you are going from the larger solid to the smaller one.",
        difficulty: "challenge",
        guideRef: "area-volume-scale",
        hints: [
          "You can't jump straight from a volume factor to an area factor. What do you need in between?",
          "Volume factor = {{k^3}}: simplify {{192/81}}, then take the cube root.",
          "Then square k — and remember you are making the solid *smaller*.",
        ],
        strategy: "Go back to the length factor",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q14",
        question:
          "In triangle ABC, D is a point on AB such that angle ACD = angle ABC.\n\nAC = 6 cm and AD = 4 cm. Work out the length of AB.",
        diagram: M1Q14,
        options: ["5 cm", "9 cm", "2.67 cm", "10 cm"],
        answerIndex: 1,
        explanation:
          "Triangles ACD and ABC share angle A and have angle ACD = angle ABC, so they are similar. Match sides by the angles: AD (opposite the marked angle in ACD) ↔ AC (opposite the marked angle in ABC), and AC ↔ AB. So {{(AB)/(AC) = (AC)/(AD)}}, giving {{AB = 6^2/4 = 9}} cm. 5 cm is DB, not AB; 2.67 cm comes from pairing the sides the wrong way ({{4^2/6}}); 10 cm just adds 4 and 6.",
        difficulty: "challenge",
        guideRef: "similar-lengths",
        hints: [
          "Find two triangles that share two equal angles. One of them is the whole triangle ABC.",
          "Triangle ACD and triangle ABC share angle A. Redraw them both the same way round.",
          "AC plays two roles: a side of the small triangle and a side of the big one. Write {{(AB)/(AC) = (AC)/(AD)}}.",
        ],
        strategy: "Redraw the triangles separately",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m1-q15",
        question:
          "A model of a statue is made to a scale of 1 : 20. The model has a volume of 300 cm³.\n\nWork out the volume of the real statue, in m³.",
        options: ["0.006 m³", "0.12 m³", "2.4 m³", "240 m³"],
        answerIndex: 2,
        explanation:
          "Volume factor {{20^3 = 8000}}: 300 × 8000 = 2 400 000 cm³. Then 1 m³ = 1 000 000 cm³, so the statue is 2.4 m³. 0.006 m³ multiplies by 20 (the length factor); 0.12 m³ multiplies by {{20^2 = 400}} (the area factor); 240 m³ uses the correct 2 400 000 cm³ but divides by 10 000 instead of 1 000 000.",
        difficulty: "challenge",
        guideRef: "area-volume-scale",
        hints: [
          "Two jobs: scale the volume, then convert the units.",
          "Lengths ×20, so volumes ×{{20^3}}.",
          "Divide your cm³ answer by {{100^3}} to get m³.",
        ],
        strategy: "One step at a time",
      },
    ],
  },
  {
    id: "similarity-congruence-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q01",
        question:
          "Two right-angled triangles each have a hypotenuse of 13 cm and one other side of 5 cm.\n\nWhich statement is true?",
        options: [
          "They are similar but not necessarily congruent.",
          "They are congruent by RHS.",
          "You cannot tell without knowing all three sides.",
          "They are congruent by AAA.",
        ],
        answerIndex: 1,
        explanation:
          "A right angle, equal hypotenuses and one other equal pair of sides is exactly the RHS condition, so the triangles are congruent. (Pythagoras confirms the third sides are both 12 cm.) AAA never proves congruence — only similarity. 'Similar but not necessarily congruent' is wrong because the sizes are fixed by the matching sides.",
        difficulty: "warmup",
        guideRef: "congruence",
        hints: ["There is a special congruence condition just for right-angled triangles. What does each letter stand for?"],
        strategy: "Recall the conditions",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q02",
        question:
          "A triangle has sides 3 cm, 4 cm and 5 cm. A similar triangle has shortest side 7.5 cm.\n\nWork out the length of the longest side of the similar triangle.",
        options: ["9.5 cm", "10 cm", "18.75 cm", "12.5 cm"],
        answerIndex: 3,
        explanation:
          "Scale factor {{7.5/3 = 2.5}}, so the longest side is 5 × 2.5 = 12.5 cm. 9.5 cm adds 4.5 cm (the difference 7.5 − 3) instead of multiplying; 10 cm is the *middle* side (4 × 2.5); 18.75 cm multiplies 7.5 by the scale factor again.",
        difficulty: "warmup",
        guideRef: "similar-lengths",
        hints: ["Shortest matches shortest: what do you multiply 3 by to get 7.5?"],
        strategy: "Find the scale factor first",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q03",
        question: "Convert 45 000 cm² to m².",
        options: ["450 m²", "45 m²", "4.5 m²", "0.45 m²"],
        answerIndex: 2,
        explanation:
          "1 m² = 10 000 cm², so divide by 10 000: 45 000 ÷ 10 000 = 4.5 m². 450 m² divides by 100 (the length factor); 45 m² divides by 1000; 0.45 m² divides by 100 000.",
        difficulty: "warmup",
        guideRef: "area-volume-units",
        hints: ["How many cm² are in 1 m²? Divide by that."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q04",
        question:
          "Every length of a solid is doubled to make a similar solid.\n\nHow many times bigger is the volume of the new solid?",
        options: ["8 times", "2 times", "4 times", "6 times"],
        answerIndex: 0,
        explanation:
          "Volume scales by {{k^3 = 2^3 = 8}}. Picture a 1 cm cube becoming a 2 cm cube: it holds 2 × 2 × 2 = 8 of the small cubes. 2 is the length factor, 4 is the area factor, and 6 comes from 2 × 3 instead of {{2^3}}.",
        difficulty: "warmup",
        guideRef: "area-volume-scale",
        hints: ["Imagine doubling every edge of a 1 cm cube. How many 1 cm cubes fit inside?"],
        strategy: "Try a simple case",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q05",
        question:
          "Ethan writes: \"In triangles PQR and XYZ, PQ = XY = 8 cm, QR = YZ = 6 cm and angle P = angle X = 35°. So the triangles are congruent (SAS).\"\n\nWhich comment is correct?",
        options: [
          "Ethan is right: two sides and an angle are equal, so SAS applies.",
          "Ethan is right, but the reason should be SSS.",
          "Ethan is wrong: you need all three angles to be equal.",
          "Ethan is wrong: angle P is not between PQ and QR, so this is SSA, which does not guarantee congruence.",
        ],
        answerIndex: 3,
        explanation:
          "SAS needs the angle **between** the two sides. The sides PQ and QR meet at Q, not P, so this is SSA. Here two different triangles are possible: with PQ = 8 cm and angle P = 35°, a 6 cm side from Q can meet the third line in two places (because {{8 sin 35°}} ≈ 4.6 < 6 < 8). SSS is wrong — the third sides are not known; equal angles alone never prove congruence.",
        difficulty: "core",
        guideRef: "congruence",
        hints: [
          "Where do sides PQ and QR meet?",
          "Is the 35° angle between the two given sides?",
          "Try to construct the triangle: draw PQ = 8 and a 35° line at P, then swing a 6 cm arc from Q. How many places does it hit?",
        ],
        strategy: "Spot the error",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q06",
        question:
          "Triangles ABC and PQR are similar, with angle A = angle P and angle B = angle Q = 90°.\n\nAB = 4 cm, BC = 6 cm and PQ = 10 cm. Work out the length of QR, marked x.",
        diagram: M2Q06,
        options: ["12 cm", "15 cm", "2.4 cm", "6.67 cm"],
        answerIndex: 1,
        explanation:
          "PQ matches AB (both join the matching angle to the right angle), so the scale factor is {{10/4 = 2.5}} and QR = BC × 2.5 = 6 × 2.5 = 15 cm. 12 cm adds 6 cm because PQ is 6 cm longer than AB; 2.4 cm divides 6 by 2.5; 6.67 cm pairs PQ with BC instead of AB ({{4 * 10/6}}).",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: [
          "The triangles face different ways. Match the vertices using the angles, not the picture.",
          "A ↔ P and B ↔ Q, so AB ↔ PQ and BC ↔ QR.",
        ],
        strategy: "Match corresponding sides",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q07",
        question:
          "Jun holds a 30 cm ruler upright at arm's length, 60 cm in front of his eye. The ruler exactly covers a vertical flagpole whose base is 40 m in front of his eye, measured horizontally.\n\nWork out the height of the flagpole.",
        options: ["20 m", "80 m", "12 m", "2000 m"],
        answerIndex: 0,
        explanation:
          "The ruler and the flagpole are parallel, and the lines of sight from Jun's eye to their ends make two similar triangles with a shared angle at his eye. In metres the distances are 0.6 m and 40 m, so the scale factor is {{40/0.6 = 200/3}} and the flagpole is {{0.3 * 200/3 = 20}} m tall. 80 m uses the ratio upside down ({{40 * 0.6/0.3}}); 12 m multiplies 0.3 by 40 and forgets the 0.6 m; 2000 m mixes units, using 30 (cm) with 0.6 (m).",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["Sketch it: two vertical lines (ruler and flagpole) and two lines of sight from the eye.", "Put every length in metres first. Then scale factor = 40 ÷ 0.6."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q08",
        question: "Convert 750 000 cm³ to m³.",
        options: ["75 m³", "7.5 m³", "0.75 m³", "750 m³"],
        answerIndex: 2,
        explanation:
          "1 m³ = 1 000 000 cm³, so 750 000 ÷ 1 000 000 = 0.75 m³. 75 m³ divides by 10 000 (the area factor); 7.5 m³ divides by 100 000; 750 m³ divides by 1000 (cm³ to litres, not m³).",
        difficulty: "core",
        guideRef: "area-volume-units",
        hints: ["How many cm³ in 1 m³?", "{{100^3}} = 1 000 000 — divide by that."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q09",
        question:
          "A glass tank for water plants is a cuboid 80 cm long, 50 cm wide and 60 cm high.\n\nHow many litres of water does it hold when full?",
        options: ["2400 litres", "240 litres", "24 litres", "240 000 litres"],
        answerIndex: 1,
        explanation:
          "Volume = 80 × 50 × 60 = 240 000 cm³. 1 litre = 1000 cm³, so 240 000 ÷ 1000 = 240 litres. 240 000 is the cm³ value; 2400 divides by 100; 24 divides by 10 000.",
        difficulty: "core",
        guideRef: "area-volume-units",
        hints: ["Work out the volume in cm³ first.", "1 litre = 1000 cm³."],
        strategy: "Go via a known unit",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q10",
        question:
          "A model car is made to a scale of 1 : 40. The model needs 30 cm² of paint to cover its roof.\n\nWork out the area of the real car's roof, in m².",
        options: ["0.12 m²", "48 m²", "192 m²", "4.8 m²"],
        answerIndex: 3,
        explanation:
          "Area factor {{40^2 = 1600}}: 30 × 1600 = 48 000 cm². Then ÷ 10 000: 4.8 m². 0.12 m² uses the length factor 40; 192 m² uses the volume factor {{40^3}}; 48 m² is the right cm² value divided by 1000 instead of 10 000.",
        difficulty: "core",
        guideRef: "area-volume-scale",
        hints: ["Is paint coverage a length, an area or a volume?", "Area factor = {{40^2}}. Then convert cm² to m²."],
        strategy: "One step at a time",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q11",
        question:
          "Two jugs are mathematically similar. Their capacities are 54 cm³ and 250 cm³. The smaller jug is 9 cm tall.\n\nWork out the height of the larger jug.",
        options: ["41.7 cm", "25 cm", "15 cm", "19.4 cm"],
        answerIndex: 2,
        explanation:
          "Volume factor {{250/54 = 125/27}}, so {{k = cbrt(125/27) = 5/3}}. Height = {{9 * 5/3 = 15}} cm. 41.7 cm multiplies by the volume factor; 25 cm uses {{(5/3)^2}}; 19.4 cm takes the square root of the volume factor instead of the cube root.",
        difficulty: "core",
        guideRef: "area-volume-scale",
        hints: ["Volume factor = {{k^3}}. Simplify {{250/54}} first.", "{{125/27}} — both are perfect cubes."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q12",
        question:
          "Triangle ABC is isosceles with AB = AC. M is the point on BC such that AM is perpendicular to BC.\n\nWhich condition proves that triangles ABM and ACM are congruent, using only the facts given?",
        diagram: M2Q12,
        options: ["SSS", "RHS", "SAS", "AAA"],
        answerIndex: 1,
        explanation:
          "Both triangles have a right angle at M, their hypotenuses AB and AC are equal (given), and AM is common: right angle, hypotenuse, side — RHS. SSS is tempting, but BM = CM is not given; it is what the congruence lets you prove afterwards (M turns out to be the midpoint). SAS would need the angle between two known pairs of sides, and AAA only ever proves triangles similar.",
        difficulty: "core",
        guideRef: "congruence",
        hints: ["Which angle do you know in both triangles?", "Which side is the hypotenuse of triangle ABM? Is BM = CM given — or something you'd prove later?"],
        strategy: "Don't assume what you want to prove",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q13",
        question:
          "ABCD is a trapezium with AB parallel to DC. AB = 12 cm and DC = 8 cm. The diagonals cross at X, and AC = 15 cm.\n\nWork out the length of AX.",
        diagram: M2Q13,
        options: ["6 cm", "7.5 cm", "22.5 cm", "9 cm"],
        answerIndex: 3,
        explanation:
          "Triangles ABX and CDX are similar (vertically opposite angles at X; alternate angles from AB ∥ DC). Scale factor {{12/8 = 3/2}}, so AX : XC = 3 : 2. AX = {{3/5 * 15 = 9}} cm. 6 cm is XC (the 2 parts); 7.5 cm assumes X is the midpoint; 22.5 cm multiplies AC by {{3/2}}.",
        difficulty: "challenge",
        guideRef: "similar-lengths",
        hints: [
          "Look for an hourglass (bow-tie) shape made by the diagonals.",
          "Which side of triangle CDX matches AB?",
          "AX and XC are in the ratio AB : DC. Share 15 cm in that ratio.",
        ],
        strategy: "Look for a hidden similar pair",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q14",
        question:
          "A solid cone has height 12 cm and volume 540 cm³. It is cut parallel to its base, 4 cm below the apex, and the small cone is removed.\n\nWork out the volume of the frustum that is left.",
        diagram: M2Q14,
        options: ["360 cm³", "480 cm³", "520 cm³", "20 cm³"],
        answerIndex: 2,
        explanation:
          "The small cone is similar to the whole cone with {{k = 4/12 = 1/3}}, so its volume is {{540 * (1/3)^3 = 540/27 = 20}} cm³. Frustum = 540 − 20 = 520 cm³. 360 cm³ removes {{1/3}} of the volume (using k); 480 cm³ removes {{1/9}} (using {{k^2}}); 20 cm³ is the small cone itself, not what is left.",
        difficulty: "challenge",
        guideRef: "area-volume-scale",
        hints: [
          "The piece cut off is a small cone. Is it similar to the original?",
          "Its height is 4 out of 12 — what does that make the volume factor?",
          "Volume of small cone = {{540 * (1/3)^3}}. Then subtract.",
        ],
        strategy: "Subtract the missing piece",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m2-q15",
        question:
          "Two statues are mathematically similar and made of the same metal. Their surface areas are 180 cm² and 500 cm². The smaller statue has a mass of 2.16 kg.\n\nWork out the mass of the larger statue.",
        options: ["10 kg", "3.6 kg", "6 kg", "16.7 kg"],
        answerIndex: 0,
        explanation:
          "Same metal, so mass is proportional to volume. Area factor {{500/180 = 25/9}}, so {{k = 5/3}} and the volume factor is {{125/27}}. Mass = {{2.16 * 125/27 = 10}} kg. 6 kg multiplies by the area factor; 3.6 kg by k; 16.7 kg by {{(25/9)^2}}, squaring the area factor instead of going via k.",
        difficulty: "challenge",
        guideRef: "area-volume-scale",
        hints: [
          "Mass behaves like which measure — length, area or volume?",
          "From the areas, find k first.",
          "Then multiply the mass by {{k^3}}.",
        ],
        strategy: "Go back to the length factor",
      },
    ],
  },
  {
    id: "similarity-congruence-m3",
    title: "MCQ Paper 3 — Exam style",
    questions: [
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q01",
        question:
          "Triangle ABC is congruent to triangle PQR, with A matching P, B matching Q and C matching R.\n\nAB = 7 cm and angle B = 62°. Which of these must be true?",
        options: ["PQ = 7 cm", "QR = 7 cm", "Angle P = 62°", "Angle R = 62°"],
        answerIndex: 0,
        explanation:
          "Corresponding parts of congruent triangles are equal. AB joins A and B, so it matches PQ, which joins P and Q: PQ = 7 cm. Angle B matches angle **Q** (so angle Q = 62°), not P or R. QR matches BC, whose length isn't given.",
        difficulty: "warmup",
        guideRef: "congruence",
        hints: ["The order of the letters tells you which parts match: A↔P, B↔Q, C↔R."],
        strategy: "Use the naming order",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q02",
        question:
          "Zara has a poster that is 40 cm wide and 60 cm tall. She prints a smaller copy that is mathematically similar to the poster and is 24 cm tall.\n\nWork out the width of the smaller copy.",
        options: ["4 cm", "36 cm", "16 cm", "100 cm"],
        answerIndex: 2,
        explanation:
          "Scale factor {{24/60 = 0.4}}, so the width is 40 × 0.4 = 16 cm. 4 cm subtracts 36 cm, the same amount the height shrank — that distorts the picture; 36 cm pairs the width with the height the wrong way round ({{24 * 60/40}}); 100 cm divides by 0.4 instead of multiplying — but a smaller copy must be narrower.",
        difficulty: "warmup",
        guideRef: "similar-lengths",
        hints: ["Find the scale factor from the heights: {{24/60}}."],
        strategy: "Find the scale factor first",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q03",
        question: "Convert 6.2 m² to cm².",
        options: ["620 cm²", "6200 cm²", "6 200 000 cm²", "62 000 cm²"],
        answerIndex: 3,
        explanation:
          "1 m² = 100 × 100 = 10 000 cm², so 6.2 × 10 000 = 62 000 cm². 620 multiplies by 100 (a length conversion); 6200 by 1000; 6 200 000 by 1 000 000 (a volume conversion).",
        difficulty: "warmup",
        guideRef: "area-volume-units",
        hints: ["Area units: multiply by {{100^2}}."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q04",
        question:
          "Two similar triangles have areas 12 cm² and 108 cm².\n\nWhat is the linear scale factor from the smaller triangle to the larger one?",
        options: ["9", "3", "2.08", "96"],
        answerIndex: 1,
        explanation:
          "Area factor {{108/12 = 9 = k^2}}, so {{k = sqrt(9) = 3}}. 9 is the *area* factor, not the length factor; 2.08 is {{cbrt(9)}}, treating 9 as a volume factor; 96 is the difference of the areas.",
        difficulty: "warmup",
        guideRef: "area-volume-scale",
        hints: ["Area factor = {{k^2}}. Find the area factor, then undo the square."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q05",
        question:
          "The line segments AB and CD cross at M. M is the midpoint of AB and the midpoint of CD.\n\nWhich statement correctly proves that triangles AMC and BMD are congruent?",
        diagram: M3Q05,
        options: [
          "AM = BM, CM = DM and angle AMC = angle BMD (alternate angles), so SAS.",
          "AM = BM, CM = DM and AC = BD, so SSS.",
          "AM = BM, CM = DM and angle AMC = angle BMD (vertically opposite angles), so SAS.",
          "AM = BM and angle AMC = angle BMD (vertically opposite angles), so ASA.",
        ],
        answerIndex: 2,
        explanation:
          "The midpoints give AM = BM and CM = DM, and the angles at M are vertically opposite, so they are equal and lie between the two pairs of sides: SAS. 'Alternate angles' is the wrong reason — that needs parallel lines and a transversal. The SSS version assumes AC = BD, which is what congruence would *give* you, not something you know. ASA needs two angles.",
        difficulty: "core",
        guideRef: "congruence",
        hints: ["What does 'midpoint' tell you about lengths?", "The two angles at M — what is the reason they are equal?"],
        strategy: "Give a reason for every fact",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q06",
        question:
          "In the diagram, BC is parallel to DE. AB = 6 cm, BD = x cm, BC = 8 cm and DE = 12 cm.\n\nWork out the value of x.",
        diagram: M3Q06,
        options: ["3", "9", "1.5", "4"],
        answerIndex: 0,
        explanation:
          "Triangles ABC and ADE are similar, scale factor {{12/8 = 1.5}}. So AD = 6 × 1.5 = 9 cm and x = BD = 9 − 6 = 3. 9 is AD, the whole side — the question asks for the part BD; 1.5 is the scale factor; 4 is 12 − 8, assuming the sides grow by adding.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: [
          "Find the scale factor from the parallel sides.",
          "The scale factor applies to the whole side AD, not to BD.",
          "AD = 6 × 1.5. Then subtract AB.",
        ],
        strategy: "Separate the triangles",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q07",
        question: "Triangle T has angles of 40° and 75°.\n\nWhich of these triangles must be similar to triangle T?",
        options: [
          "A triangle with angles of 40° and 85°",
          "A triangle with angles of 65° and 75°",
          "A triangle with angles of 75° and 70°",
          "A triangle with angles of 115° and 25°",
        ],
        answerIndex: 1,
        explanation:
          "T's third angle is 180° − 40° − 75° = 65°, so T has angles 40°, 65°, 75°. The triangle with 65° and 75° has third angle 40° — the same three angles, so it is similar. The others have angles 40°, 85°, 55°; 75°, 70°, 35°; and 115°, 25°, 40° — each shares at most one angle with T.",
        difficulty: "core",
        guideRef: "similar-lengths",
        hints: ["Find the third angle of every triangle.", "Similar triangles have all three angles equal."],
        strategy: "Complete the information",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q08",
        question: "Convert 3.5 cm² to mm².",
        options: ["35 mm²", "3500 mm²", "0.35 mm²", "350 mm²"],
        answerIndex: 3,
        explanation:
          "1 cm = 10 mm, so 1 cm² = 10 × 10 = 100 mm². 3.5 × 100 = 350 mm². 35 mm² uses the length factor 10; 3500 mm² uses 1000 (that is cm³ to mm³); 0.35 mm² divides when it should multiply — mm² are smaller units, so there must be more of them.",
        difficulty: "core",
        guideRef: "area-volume-units",
        hints: ["How many mm in 1 cm? Square it.", "Smaller unit → bigger number."],
        strategy: "Estimate first",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q09",
        question:
          "Water flows into an empty tank at 200 cm³ per second. The tank holds 1.8 m³.\n\nHow many minutes does it take to fill the tank?",
        options: ["1.5 minutes", "9000 minutes", "150 minutes", "0.15 minutes"],
        answerIndex: 2,
        explanation:
          "1.8 m³ = 1.8 × 1 000 000 = 1 800 000 cm³. Time = 1 800 000 ÷ 200 = 9000 s = 9000 ÷ 60 = 150 minutes. 9000 is the time in **seconds**; 1.5 minutes converts m³ with 10 000 (an area factor); 0.15 minutes converts with 1000.",
        difficulty: "core",
        guideRef: "area-volume-units",
        hints: ["Get the volume and the rate into the same units first.", "1 m³ = 1 000 000 cm³. Then divide by the rate, and change seconds to minutes."],
        strategy: "Match the units",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q10",
        question:
          "Two boxes are mathematically similar. The lengths of the larger box are 2.5 times those of the smaller box. It takes 0.3 litres of paint to cover the outside of the smaller box.\n\nHow much paint is needed to cover the outside of the larger box?",
        options: ["1.875 litres", "0.75 litres", "4.69 litres", "0.12 litres"],
        answerIndex: 0,
        explanation:
          "Paint covers a surface, so use the area factor {{2.5^2 = 6.25}}: 0.3 × 6.25 = 1.875 litres. It's tempting to use the volume factor because paint is measured in litres — that gives 4.69 litres — but the paint needed depends on the *area* covered. 0.75 litres uses k; 0.12 litres divides by k.",
        difficulty: "core",
        guideRef: "area-volume-scale",
        hints: ["Does the amount of paint depend on the box's length, surface area or volume?", "Area factor = {{k^2}}."],
        strategy: "Ask what is being measured",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q11",
        question:
          "A cone-shaped glass, 20 cm deep, holds 1600 cm³ when full. Mei pours in water to a depth of 10 cm.\n\nWork out the volume of water in the glass.",
        diagram: M3Q11,
        options: ["800 cm³", "400 cm³", "1400 cm³", "200 cm³"],
        answerIndex: 3,
        explanation:
          "The water forms a small cone similar to the full glass, with {{k = 10/20 = 1/2}}. Volume factor {{(1/2)^3 = 1/8}}, so the water is {{1600/8 = 200}} cm³. 800 cm³ assumes half the depth means half the volume; 400 cm³ uses {{k^2}}; 1400 cm³ is the empty space above the water.",
        difficulty: "core",
        guideRef: "area-volume-scale",
        hints: ["What shape does the water make? Is it similar to the glass?", "Half the depth → what fraction of the volume?"],
        strategy: "Spot the similar solid",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q12",
        question:
          "In triangle ABC, AB = 5 cm, AC = 7 cm and angle A = 50°.\n\nWhich triangle XYZ **must** be congruent to triangle ABC?",
        options: [
          "XY = 10 cm, XZ = 14 cm and angle X = 50°",
          "XY = 7 cm, XZ = 5 cm and angle X = 50°",
          "XY = 5 cm, XZ = 7 cm and angle Y = 50°",
          "XY = 5 cm, angle X = 50° and angle Y = 50°",
        ],
        answerIndex: 1,
        explanation:
          "In ABC the 50° angle is **between** the 5 cm and 7 cm sides. In the correct triangle the 50° angle at X is between XY = 7 and XZ = 5 — the same two sides with the same included angle (just named the other way round), so SAS. The 10, 14 triangle is similar (scale factor 2) but twice the size. With angle Y = 50° the angle is not between the given sides. With angles 50° and 50° at X and Y you'd need angle B = 50°, which isn't given (it is actually about 85°).",
        difficulty: "core",
        guideRef: "congruence",
        hints: ["Where is the 50° angle in triangle ABC — between which two sides?", "Check each option for the *same* sides around the *same* angle."],
        strategy: "Check each condition",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q13",
        question:
          "ABCD is a square. E is a point on BC and F is a point on CD such that BE = CF.\n\nWhich is a correct proof that AE = BF?",
        diagram: M3Q13,
        options: [
          "In triangles ABE and BCF: AB = BC (sides of a square), angle ABE = angle BCF = 90°, BE = CF (given). So the triangles are congruent (SAS) and AE = BF.",
          "In triangles ABE and BCF: angle ABE = angle BCF = 90°, AB = BC and AE = BF. So the triangles are congruent (RHS) and AE = BF.",
          "In triangles ABE and BCF: AB = BC, BE = CF and AE = BF. So the triangles are congruent (SSS) and AE = BF.",
          "In triangles ABE and ADF: AB = AD, angle ABE = angle ADF = 90°, BE = DF. So the triangles are congruent (SAS) and AE = BF.",
        ],
        answerIndex: 0,
        explanation:
          "The SAS proof uses only known facts: equal sides of the square, the right angles at B and C (each between the two sides used), and the given BE = CF. Congruence then gives AE = BF. The RHS and SSS versions are **circular** — they use AE = BF to prove AE = BF. The ADF version is wrong because DF is not equal to BE (DF = DC − CF = EC), and it compares the wrong triangle anyway.",
        difficulty: "challenge",
        guideRef: "congruence",
        hints: [
          "Which two triangles have AE and BF as sides?",
          "A proof can only use facts you already know — not the thing you are trying to prove.",
          "Look at triangles ABE and BCF: what do you know about AB and BC, the angles at B and C, and BE and CF?",
        ],
        strategy: "Spot circular reasoning",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q14",
        question:
          "The lines AD and BC cross at X. AB is parallel to CD.\n\nAB = 4 cm, CD = 6 cm, AX = x cm and XD = (x + 3) cm. Work out the value of x.",
        diagram: M3Q14,
        options: ["9", "4.5", "2", "6"],
        answerIndex: 3,
        explanation:
          "Triangles ABX and DCX are similar (vertically opposite angles at X, alternate angles from AB ∥ CD), so {{(x+3)/x = 6/4}}. Then 4(x + 3) = 6x, 4x + 12 = 6x, x = 6. Check: XD = 9 and {{9/6 = 6/4}} ✓. 9 is XD, not AX; 4.5 is {{3 * 6/4}}, scaling the difference of 3; 2 is 6 − 4, assuming the sides grow by adding.",
        difficulty: "challenge",
        guideRef: "similar-lengths",
        hints: [
          "Why are triangles ABX and DCX similar?",
          "Which side of the lower triangle matches AX? Write the ratio of matching sides as an equation.",
          "{{(x+3)/x = 6/4}}: multiply both sides by 4x and solve.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "similarity-congruence-m3-q15",
        question:
          "Two tins are mathematically similar. The areas of their bases are 36 cm² and 81 cm². The larger tin has a capacity of 1.35 litres.\n\nWork out the capacity of the smaller tin, in cm³.",
        options: ["600 cm³", "400 cm³", "900 cm³", "4000 cm³"],
        answerIndex: 1,
        explanation:
          "Area factor {{81/36 = 9/4}}, so {{k = 3/2}} and the volume factor is {{27/8}}. 1.35 litres = 1350 cm³. Smaller capacity = {{1350 * 8/27 = 400}} cm³. 600 cm³ divides by the area factor; 900 cm³ divides by k; 4000 cm³ converts 1.35 litres as 13 500 cm³ (1 litre is 1000 cm³, not 10 000).",
        difficulty: "challenge",
        guideRef: "area-volume-scale",
        hints: [
          "Change litres to cm³ first: 1 litre = 1000 cm³.",
          "From the base areas, find k (simplify {{81/36}} first).",
          "Volume factor = {{k^3}}; you are going to the *smaller* tin, so divide.",
        ],
        strategy: "Go back to the length factor",
      },
    ],
  },
];
