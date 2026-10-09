// Pythagoras & right-angled trigonometry — MCQ papers (3 × 15). Options are shuffled at display time.
// Diagrams are drawn to scale from the lengths and angles in each question.
import type { Paper } from "../../types.ts";

const M1Q03 = `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at B. Angle A is 35 degrees, hypotenuse AC is 12 cm and side BC, opposite angle A, is x."><rect x="0" y="0" width="360" height="240" fill="#ffffff"/><polygon points="57.2,206 302.8,206 302.8,34" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="291.8,206 291.8,195 302.8,195" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 85 186.5 A 34 34 0 0 1 91.2 206" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="104.9" y="195" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">35°</text><text x="166.7" y="105" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">12 cm</text><text x="311.2" y="124" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">x</text><text x="44" y="215.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="314.3" y="219" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="311" y="27.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text></svg>`;

const M1Q05 = `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at B. AB is 10 cm, BC is 7 cm and the angle at A is theta."><rect x="0" y="0" width="360" height="240" fill="#ffffff"/><polygon points="57.1,206 302.9,206 302.9,34" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="291.9,206 291.9,195 302.9,195" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 86.6 185.4 A 36 36 0 0 1 93.1 206" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="106.7" y="194.4" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">θ</text><text x="180" y="224" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">10 cm</text><text x="319.7" y="124" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">7 cm</text><text x="43.9" y="215.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="314.3" y="219" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="311" y="27.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text></svg>`;

const M1Q10 = `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two right-angled triangles ABD and CBD share the vertical side BD, with D on the base AC and the right angle at D. AB is 15 cm and angle BAD is 40 degrees. Angle BCD is 25 degrees and BC is x."><rect x="0" y="0" width="420" height="220" fill="#ffffff"/><polygon points="34,162.8 159.7,162.8 159.7,57.2" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="159.7,162.8 386,162.8 159.7,57.2" fill="#fde68a" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="170.7,162.8 170.7,151.8 159.7,151.8" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 57 143.5 A 30 30 0 0 1 64 162.8" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="77.2" y="151" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">40°</text><path d="M 346 162.8 A 40 40 0 0 1 349.7 145.8" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="329.4" y="154.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">25°</text><text x="81.3" y="95.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">15 cm</text><text x="278.5" y="101.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">x</text><text x="20.2" y="170.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="150.1" y="177.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="155.5" y="48.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="399.9" y="169.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text></svg>`;

const M1Q13 = `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cuboid ABCDEFGH with base ABCD and top EFGH, E above A, G above C. AB is 12 cm, BC is 9 cm and CG is 8 cm. The diagonal AG and the base diagonal AC are drawn, and the angle between them at A is theta."><rect x="0" y="0" width="380" height="260" fill="#ffffff"/><polygon points="50,228 308,163.2 308,27.2" fill="#fecaca" fill-opacity="0.45" stroke="none"/><line x1="50" y1="228" x2="254" y2="228" stroke="#1f2937" stroke-width="2"/><line x1="254" y1="228" x2="308" y2="163.2" stroke="#1f2937" stroke-width="2"/><line x1="50" y1="92" x2="254" y2="92" stroke="#1f2937" stroke-width="2"/><line x1="254" y1="92" x2="308" y2="27.2" stroke="#1f2937" stroke-width="2"/><line x1="308" y1="27.2" x2="104" y2="27.2" stroke="#1f2937" stroke-width="2"/><line x1="104" y1="27.2" x2="50" y2="92" stroke="#1f2937" stroke-width="2"/><line x1="50" y1="228" x2="50" y2="92" stroke="#1f2937" stroke-width="2"/><line x1="254" y1="228" x2="254" y2="92" stroke="#1f2937" stroke-width="2"/><line x1="308" y1="163.2" x2="308" y2="27.2" stroke="#1f2937" stroke-width="2"/><line x1="50" y1="228" x2="104" y2="163.2" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="104" y1="163.2" x2="308" y2="163.2" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="104" y1="163.2" x2="104" y2="27.2" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="50" y1="228" x2="308" y2="163.2" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4"/><line x1="50" y1="228" x2="308" y2="27.2" stroke="#b91c1c" stroke-width="2.5"/><polyline points="298.3,165.6 298.3,155.6 308,153.2" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 90.7,217.8 A 42 42 0 0 0 83.1,202.2" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="102.1" y="206.6" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">θ</text><text x="38" y="240" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="262" y="244" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="320" y="169.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="96" y="157.2" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">D</text><text x="40" y="97" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">E</text><text x="266" y="110" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">F</text><text x="318" y="21.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">G</text><text x="98" y="19.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">H</text><text x="152.0" y="248" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">12 cm</text><text x="297.0" y="207.6" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">9 cm</text><text x="318" y="99.2" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">8 cm</text></svg>`;

const M2Q02 = `<svg viewBox="0 0 340 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at B. Angle A is 50 degrees, AB is 15 cm and the hypotenuse AC is x."><rect x="0" y="0" width="340" height="250" fill="#ffffff"/><polygon points="93.6,216 246.4,216 246.4,34" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="235.4,216 235.4,205 246.4,205" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 112.9 193 A 30 30 0 0 1 123.6 216" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="135.3" y="200.6" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">50°</text><text x="170" y="234" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">15 cm</text><text x="158.9" y="119.7" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">x</text><text x="81.6" y="228.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="255.4" y="231.7" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="251.8" y="26.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text></svg>`;

const M2Q03 = `<svg viewBox="0 0 420 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A vertical cliff FT, 60 m high, with F at sea level. A dashed horizontal line goes from the top T. The angle of depression from T to a boat B is 22 degrees, measured below the horizontal. The distance FB along the sea is d."><rect x="0" y="0" width="420" height="200" fill="#ffffff"/><polygon points="61.5,160 61.5,40 358.5,160" fill="#bbf7d0" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="61.5" y1="40" x2="224.9" y2="40" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><polyline points="61.5,149 72.5,149 72.5,160" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 107.5 40 A 46 46 0 0 1 104.1 57.2" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="122.4" y="55.8" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">22°</text><text x="46.1" y="104" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">60 m</text><text x="210" y="178" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">d</text><text x="49.1" y="38.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">T</text><text x="49.1" y="171.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">F</text><text x="371.8" y="169.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text></svg>`;

const M2Q05 = `<svg viewBox="0 0 330 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at B. AB is 9 cm, the hypotenuse AC is 14 cm and the angle at A is theta."><rect x="0" y="0" width="330" height="250" fill="#ffffff"/><polygon points="88.6,216 241.4,216 241.4,34" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="230.4,216 230.4,205 241.4,205" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 109.2 191.5 A 32 32 0 0 1 120.6 216" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="132.1" y="199.7" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">θ</text><text x="165" y="234" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">9 cm</text><text x="143.4" y="110.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">14 cm</text><text x="76.6" y="228.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="250.4" y="231.7" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="246.8" y="26.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text></svg>`;

const M2Q09 = `<svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Square-based pyramid VABCD with base ABCD of side 8 cm. M is the centre of the base and the apex V is vertically above M, with VM = 6 cm. The lines VM and AM are drawn and the angle VAM between the edge VA and the base is theta."><rect x="0" y="0" width="360" height="260" fill="#ffffff"/><line x1="34" y1="216.5" x2="226.2" y2="216.5" stroke="#1f2937" stroke-width="2"/><line x1="226.2" y1="216.5" x2="326" y2="158.8" stroke="#1f2937" stroke-width="2"/><line x1="180" y1="43.5" x2="34" y2="216.5" stroke="#1f2937" stroke-width="2"/><line x1="180" y1="43.5" x2="226.2" y2="216.5" stroke="#1f2937" stroke-width="2"/><line x1="180" y1="43.5" x2="326" y2="158.8" stroke="#1f2937" stroke-width="2"/><line x1="326" y1="158.8" x2="133.8" y2="158.8" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="133.8" y1="158.8" x2="34" y2="216.5" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="180" y1="43.5" x2="133.8" y2="158.8" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="180" y1="43.5" x2="180" y2="187.6" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="5 4"/><line x1="34" y1="216.5" x2="180" y2="187.6" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="5 4"/><polyline points="172.2,189.2 172.2,181.2 180,179.6" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 55.9 190.5 A 34 34 0 0 1 67.4 209.9" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="75.4" y="196.1" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">θ</text><text x="20.8" y="226.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="235.4" y="232" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="340" y="163.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="119.9" y="162.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="180" y="34.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">V</text><text x="190" y="201.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">M</text><text x="130.1" y="234.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">8 cm</text><text x="168" y="175" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">6 cm</text></svg>`;

const M2Q10 = `<svg viewBox="0 0 380 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at B. AB is 9 cm and is vertical. D lies on BC with BD = 4 cm and DC = 8 cm. The line AD is drawn and angle DAC is x."><rect x="0" y="0" width="380" height="260" fill="#ffffff"/><polygon points="62,34 62,226 318,226" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="62" y1="34" x2="147.3" y2="226" stroke="#1f2937" stroke-width="2"/><polyline points="73,226 73,215 62,215" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 100.4 62.8 A 48 48 0 0 1 81.5 77.9" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="100.6" y="86.5" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">x</text><text x="46.6" y="134" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">9 cm</text><text x="104.7" y="244" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">4 cm</text><text x="232.7" y="244" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">8 cm</text><text x="54.9" y="27" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="49.8" y="237.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="331.5" y="234.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="147.3" y="244" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text></svg>`;

const M3Q02 = `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at B. Angle A is 62 degrees, AB is 8 cm and BC, opposite angle A, is x."><rect x="0" y="0" width="320" height="260" fill="#ffffff"/><polygon points="109,226 211,226 211,34" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="200,226 200,215 211,215" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 121.2 203 A 26 26 0 0 1 135 226" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="145" y="208.4" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">62°</text><text x="160" y="244" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">8 cm</text><text x="219.4" y="134" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">x</text><text x="98.8" y="240.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="217.6" y="243.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="214.6" y="25.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text></svg>`;

const M3Q04 = `<svg viewBox="0 0 400 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle ABC with the right angle at B. AB is 12 cm, BC is 5 cm and the hypotenuse AC is 13 cm. The angle at A is theta."><rect x="0" y="0" width="400" height="210" fill="#ffffff"/><polygon points="58.4,164 341.6,164 341.6,46" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="330.6,164 330.6,153 341.6,153" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 95.3 148.6 A 40 40 0 0 1 98.4 164" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="113.3" y="157" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">θ</text><text x="200" y="182" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">12 cm</text><text x="357" y="109" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">5 cm</text><text x="192.2" y="90.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">13 cm</text><text x="44.7" y="171.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="354.5" y="174.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="352.4" y="42" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text></svg>`;

const M3Q05 = `<svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trapezium ABCD with AB parallel to DC. The angles at A and D are right angles. AB is 14 cm, DC is 9 cm and AD is 12 cm. BC is the sloping side."><rect x="0" y="0" width="360" height="260" fill="#ffffff"/><polygon points="68,34 292,34 212,226 68,226" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="79,34 79,45 68,45" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="68,215 79,215 79,226" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="180" y="24" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">14 cm</text><text x="140" y="244" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">9 cm</text><text x="49.8" y="134" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">12 cm</text><text x="58.3" y="28.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="303.3" y="30.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="218.7" y="243.3" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="58.3" y="241.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text></svg>`;

const M3Q08 = `<svg viewBox="0 0 380 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cuboid ABCDEFGH with base ABCD and top EFGH, E above A, G above C. AB is 10 cm, BC is 7 cm and CG is 4 cm. The diagonal AG and the base diagonal AC are drawn, and the angle GAC is theta."><rect x="0" y="0" width="380" height="250" fill="#ffffff"/><polygon points="45,215 304,159 304,75" fill="#fecaca" fill-opacity="0.45" stroke="none"/><line x1="45" y1="215" x2="255" y2="215" stroke="#1f2937" stroke-width="2"/><line x1="255" y1="215" x2="304" y2="159" stroke="#1f2937" stroke-width="2"/><line x1="45" y1="131" x2="255" y2="131" stroke="#1f2937" stroke-width="2"/><line x1="255" y1="131" x2="304" y2="75" stroke="#1f2937" stroke-width="2"/><line x1="304" y1="75" x2="94" y2="75" stroke="#1f2937" stroke-width="2"/><line x1="94" y1="75" x2="45" y2="131" stroke="#1f2937" stroke-width="2"/><line x1="45" y1="215" x2="45" y2="131" stroke="#1f2937" stroke-width="2"/><line x1="255" y1="215" x2="255" y2="131" stroke="#1f2937" stroke-width="2"/><line x1="304" y1="159" x2="304" y2="75" stroke="#1f2937" stroke-width="2"/><line x1="45" y1="215" x2="94" y2="159" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="94" y1="159" x2="304" y2="159" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="94" y1="159" x2="94" y2="75" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="45" y1="215" x2="304" y2="159" stroke="#1d4ed8" stroke-width="2" stroke-dasharray="6 4"/><line x1="45" y1="215" x2="304" y2="75" stroke="#b91c1c" stroke-width="2.5"/><polyline points="294.2,161.1 294.2,151.1 304,149" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 86.1,206.1 A 42 42 0 0 0 81.9,195.0" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="120.0" y="191.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">θ</text><text x="33" y="227" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="263" y="231" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="316" y="165" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="86" y="153" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">D</text><text x="35" y="136" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937" font-weight="bold">E</text><text x="267" y="149" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">F</text><text x="314" y="69" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">G</text><text x="88" y="67" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">H</text><text x="150.0" y="235" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">10 cm</text><text x="293.5" y="199.0" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">7 cm</text><text x="314" y="121.0" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">4 cm</text></svg>`;

const M3Q13 = `<svg viewBox="0 0 360 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Square-based pyramid VABCD with base ABCD of side 12 cm. Each sloping edge, such as VA, is 14 cm. M is the centre of the base and V is vertically above M; the height VM is h."><rect x="0" y="0" width="360" height="260" fill="#ffffff"/><line x1="62.4" y1="226" x2="217.2" y2="226" stroke="#1f2937" stroke-width="2"/><line x1="217.2" y1="226" x2="297.6" y2="179.6" stroke="#1f2937" stroke-width="2"/><line x1="180" y1="34" x2="62.4" y2="226" stroke="#1f2937" stroke-width="2"/><line x1="180" y1="34" x2="217.2" y2="226" stroke="#1f2937" stroke-width="2"/><line x1="180" y1="34" x2="297.6" y2="179.6" stroke="#1f2937" stroke-width="2"/><line x1="297.6" y1="179.6" x2="142.8" y2="179.6" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="142.8" y1="179.6" x2="62.4" y2="226" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="180" y1="34" x2="142.8" y2="179.6" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5 4"/><line x1="180" y1="34" x2="180" y2="202.8" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="5 4"/><line x1="62.4" y1="226" x2="180" y2="202.8" stroke="#1d4ed8" stroke-width="1.8" stroke-dasharray="5 4"/><polyline points="172.2,204.3 172.2,196.3 180,194.8" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="49.6" y="236.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="225.4" y="242.3" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="311.6" y="185.2" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="129" y="186.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="180" y="25" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">V</text><text x="190" y="216.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">M</text><text x="139.8" y="244" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">12 cm</text><text x="112.9" y="126.7" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">14 cm</text><text x="187" y="139.3" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">h</text></svg>`;

const M3Q14 = `<svg viewBox="0 0 400 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two right-angled triangles ABD and CBD share the vertical side BD, with D on the base AC and the right angle at D. Angle BAD is 45 degrees and AD is 6 cm. Angle BCD is 30 degrees and DC is x."><rect x="0" y="0" width="400" height="220" fill="#ffffff"/><polygon points="34,170.8 155.5,170.8 155.5,49.2" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="155.5,170.8 366,170.8 155.5,49.2" fill="#fde68a" fill-opacity="0.45" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="166.5,170.8 166.5,159.8 155.5,159.8" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 55.2 149.5 A 30 30 0 0 1 64 170.8" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="76.5" y="157.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">45°</text><path d="M 326 170.8 A 40 40 0 0 1 331.4 150.8" fill="none" stroke="#b45309" stroke-width="1.8"/><text x="310" y="159.7" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">30°</text><text x="94.8" y="188.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">6 cm</text><text x="260.8" y="188.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">x</text><text x="20.3" y="178.7" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="147.3" y="187.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="152.2" y="40.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="379.8" y="178" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text></svg>`;

export const mcqPapers: Paper[] = [
  {
    id: "pythagoras-trigonometry-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q01",
        question: "A right-angled triangle has shorter sides of 9 cm and 12 cm.\n\nWork out the length of the hypotenuse.",
        options: ["21 cm", "7.94 cm", "15 cm", "225 cm"],
        answerIndex: 2,
        explanation:
          "The hypotenuse is the longest side, so **add** the squares: {{9^2 + 12^2 = 81 + 144 = 225}}, and {{sqrt(225) = 15}} cm. 21 cm just adds the two sides; 7.94 cm ({{sqrt(63)}}) subtracts the squares, which is only right when you are finding a *shorter* side; 225 cm forgets the final square root.",
        difficulty: "warmup",
        guideRef: "pythagoras",
        hints: ["Are you finding the hypotenuse or a shorter side?", "For the hypotenuse, square both sides, add, then square root."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q02",
        question: "In a right-angled triangle the hypotenuse is 11 cm and one of the other sides is 6 cm.\n\nWork out the length of the third side. Give your answer correct to 3 significant figures.",
        options: ["9.22 cm", "12.5 cm", "5 cm", "85 cm"],
        answerIndex: 0,
        explanation:
          "You want a shorter side, so **subtract**: {{11^2 - 6^2 = 121 - 36 = 85}}, and {{sqrt(85) = 9.219...}} ≈ 9.22 cm. 12.5 cm adds the squares ({{sqrt(157)}}) — but a shorter side cannot be longer than the hypotenuse; 5 cm subtracts the lengths; 85 cm forgets to square root.",
        difficulty: "warmup",
        guideRef: "pythagoras",
        hints: ["Is the missing side the hypotenuse?", "Shorter side: {{c^2 - a^2}}, then square root."],
        strategy: "Check by estimating",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q03",
        question: "In triangle ABC, angle B = 90°, angle A = 35° and AC = 12 cm.\n\nWork out the length of BC, marked x. Give your answer correct to 3 significant figures.",
        diagram: M1Q03,
        options: ["9.83 cm", "8.40 cm", "20.9 cm", "6.88 cm"],
        answerIndex: 3,
        explanation:
          "From angle A, BC is the **opposite** and AC is the **hypotenuse**, so use sine: {{x = 12 sin 35° = 6.88}} cm (3 s.f.). 9.83 cm uses cosine (that is AB, the adjacent); 8.40 cm uses tan; 20.9 cm divides by sin 35° — but x is on top of the fraction {{sin 35° = x/12}}, so you multiply.",
        difficulty: "warmup",
        guideRef: "sohcahtoa",
        hints: ["Label the sides O, A, H from the 35° angle.", "You know H and want O — which ratio links them?", "{{sin 35° = x/12}}, so multiply both sides by 12."],
        strategy: "Label first",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q04",
        question: "The bearing of B from A is 070°.\n\nWork out the bearing of A from B.",
        options: ["110°", "250°", "290°", "070°"],
        answerIndex: 1,
        explanation:
          "A back bearing differs by 180°: 070° + 180° = 250°. Draw it — from B, A lies to the south-west, so the bearing must be between 180° and 270°. 110° is 180° − 70°; 290° is 360° − 70°; 070° assumes the bearing is the same both ways.",
        difficulty: "warmup",
        guideRef: "bearings-elevation",
        hints: ["Sketch north lines at A and at B.", "The two directions are opposite, so they differ by 180°."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q05",
        question: "In triangle ABC, angle B = 90°, AB = 10 cm and BC = 7 cm.\n\nWork out the size of angle θ at A. Give your answer correct to 1 decimal place.",
        diagram: M1Q05,
        options: ["44.4°", "35.0°", "45.6°", "55.0°"],
        answerIndex: 1,
        explanation:
          "From θ, BC = 7 is **opposite** and AB = 10 is **adjacent**, so {{tan θ = 7/10}} and {{θ = tan^(-1)(0.7) = 34.99...}} ≈ 35.0°. 44.4° uses {{sin^(-1)(0.7)}} and 45.6° uses {{cos^(-1)(0.7)}} — neither side is the hypotenuse; 55.0° is the other angle, from {{tan^(-1)(10/7)}} (opposite and adjacent swapped).",
        difficulty: "core",
        guideRef: "sohcahtoa",
        hints: ["Which of the two given sides is opposite θ?", "Opposite and adjacent → TOA.", "{{θ = tan^(-1)(7/10)}}."],
        strategy: "Label first",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q06",
        question: "A square has sides of length 6 cm.\n\nWork out the exact length of its diagonal. Give your answer as a simplified surd.",
        options: ["12 cm", "{{2 sqrt(3)}} cm", "72 cm", "{{6 sqrt(2)}} cm"],
        answerIndex: 3,
        explanation:
          "The diagonal is the hypotenuse of a right-angled triangle with shorter sides 6 and 6: {{d^2 = 36 + 36 = 72}}, so {{d = sqrt(72) = sqrt(36 * 2) = 6 sqrt(2)}} cm. 12 cm adds the sides; {{2 sqrt(3)}} is {{sqrt(6 + 6)}} (adding the lengths under the root, not their squares); 72 cm forgets the square root.",
        difficulty: "core",
        guideRef: "pythagoras",
        hints: ["Split the square into two right-angled triangles.", "{{d^2 = 6^2 + 6^2}}.", "Simplify {{sqrt(72)}} using its largest square factor, 36."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q07",
        question: "Which of these triangles is right-angled?",
        options: ["Sides {{sqrt(5)}} cm, {{sqrt(11)}} cm and 4 cm", "Sides 4 cm, 5 cm and 6 cm", "Sides 5 cm, 12 cm and 14 cm", "Sides 6 cm, 8 cm and 12 cm"],
        answerIndex: 0,
        explanation:
          "Use the converse of Pythagoras: a triangle is right-angled exactly when the two shorter sides squared add to the longest side squared. {{(sqrt(5))^2 + (sqrt(11))^2 = 5 + 11 = 16 = 4^2}} ✓. For 4, 5, 6: 16 + 25 = 41 ≠ 36 (consecutive numbers do not copy 3, 4, 5). For 5, 12, 14: 169 ≠ 196 — two sides of a triple are not enough. For 6, 8, 12: 100 ≠ 144 (6, 8, **10** would work).",
        difficulty: "core",
        guideRef: "pythagoras",
        hints: ["What must be true of the side lengths in a right-angled triangle?", "Test {{a^2 + b^2}} against {{c^2}} for the longest side c.", "Squaring a square root just removes it."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q08",
        question: "Arjun stands on level ground 40 m from the foot of a vertical tower. The angle of elevation of the top of the tower from where he stands is 28°.\n\nWork out the height of the tower. Give your answer correct to 3 significant figures. (Ignore Arjun's height.)",
        options: ["18.8 m", "35.3 m", "21.3 m", "75.2 m"],
        answerIndex: 2,
        explanation:
          "The 40 m is **adjacent** to the 28° angle and the height is **opposite**, so {{h = 40 tan 28° = 21.27...}} ≈ 21.3 m. 18.8 m uses sin, which needs the line of sight (hypotenuse), not the ground distance; 35.3 m uses cos; 75.2 m divides by tan 28°.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["Sketch the triangle: ground, tower and line of sight.", "Which side is the 40 m relative to the 28° angle?", "{{tan 28° = h/40}}."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q09",
        question: "A cuboid measures 2 cm by 6 cm by 9 cm.\n\nWork out the length of the longest straight rod that fits inside it (the space diagonal).",
        options: ["6.32 cm", "17 cm", "121 cm", "11 cm"],
        answerIndex: 3,
        explanation:
          "Use Pythagoras twice (or once in 3D): {{d^2 = 2^2 + 6^2 + 9^2 = 4 + 36 + 81 = 121}}, so d = 11 cm. 6.32 cm ({{sqrt(40)}}) is only the diagonal of the 2 by 6 face; 17 cm adds the edges; 121 cm forgets the square root.",
        difficulty: "core",
        guideRef: "three-d",
        hints: ["First find the diagonal of the 2 by 6 base.", "That base diagonal and the 9 cm edge make a new right-angled triangle.", "{{d = sqrt(2^2 + 6^2 + 9^2)}}."],
        strategy: "Find the right triangle",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q10",
        question: "In the diagram, BD is perpendicular to AC. AB = 15 cm, angle BAD = 40° and angle BCD = 25°.\n\nWork out the length of BC, marked x. Give your answer correct to 3 significant figures.",
        diagram: M1Q10,
        options: ["4.07 cm", "22.8 cm", "20.7 cm", "9.64 cm"],
        answerIndex: 1,
        explanation:
          "Work through the **shared side** BD. In triangle ABD: {{BD = 15 sin 40° = 9.6418...}} cm (keep it in your calculator). In triangle CBD, BD is opposite 25° and BC is the hypotenuse: {{x = BD/(sin 25°) = 22.8}} cm. 4.07 cm multiplies by sin 25° instead of dividing; 20.7 cm uses tan 25°, which gives DC, not BC; 9.64 cm stops at BD.",
        difficulty: "core",
        guideRef: "sohcahtoa",
        hints: ["Which side belongs to both triangles?", "Find BD from triangle ABD first.", "In triangle CBD, {{sin 25° = (BD)/x}}."],
        strategy: "Work through a shared side",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q11",
        question: "Which of these sets of numbers is a Pythagorean triple?",
        options: ["20, 21, 29", "12, 16, 21", "6, 9, 12", "10, 24, 25"],
        answerIndex: 0,
        explanation:
          "Check {{a^2 + b^2 = c^2}}: {{20^2 + 21^2 = 400 + 441 = 841 = 29^2}} ✓. For 12, 16, 21: 144 + 256 = 400 = {{20^2}}, not {{21^2}}. 6, 9, 12 is 3 × (2, 3, 4), and 2, 3, 4 is not a triple, so neither is any multiple. 10, 24, 25: 100 + 576 = 676 = {{26^2}} — it is 2 × (5, 12, 13) with the last number wrong.",
        difficulty: "core",
        guideRef: "pythagorean-triples",
        hints: ["What equation must a triple satisfy?", "Square the two smaller numbers and add.", "Compare with the square of the largest."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q12",
        question: "A ship sails 8 km due north from a harbour H, then 6 km due east to point S.\n\nWork out the bearing of H from S. Give your answer correct to 1 decimal place.",
        options: ["036.9°", "233.1°", "216.9°", "053.1°"],
        answerIndex: 2,
        explanation:
          "Distance is not needed — the angle at H between north and HS is {{tan^(-1)(6/8) = 36.87°}}, so the bearing of S from H is 036.9°. The question asks for H **from** S, the back bearing: 036.9° + 180° = 216.9°. 036.9° answers the wrong direction; 233.1° and 053.1° use {{tan^(-1)(8/6)}}, the angle measured from east rather than north.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["Read carefully: bearing of H *from* S. Where do you stand?", "Find the bearing of S from H first using the 8 km and 6 km.", "Then add 180°."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q13",
        question: "The diagram shows a cuboid ABCDEFGH with AB = 12 cm, BC = 9 cm and CG = 8 cm.\n\nWork out the angle θ between the diagonal AG and the base ABCD. Give your answer correct to 1 decimal place.",
        diagram: M1Q13,
        options: ["33.7°", "28.1°", "41.6°", "32.2°"],
        answerIndex: 1,
        explanation:
          "The angle between AG and the base is the angle between AG and its **projection** AC on the base. {{AC = sqrt(12^2 + 9^2) = sqrt(225) = 15}} cm. Triangle ACG has a right angle at C, so {{tan θ = 8/15}} and θ = 28.07…° = 28.1°. 33.7° uses AB = 12 as the adjacent and 41.6° uses BC = 9 — G is not above B or A, so those are not the right triangles. 32.2° uses {{sin^(-1)(8/15)}}, but 15 is the adjacent, not the hypotenuse.",
        difficulty: "challenge",
        guideRef: "three-d",
        hints: ["Where does G drop to on the base? Join that point to A.", "Find AC with Pythagoras on the base.", "In triangle ACG the right angle is at C — which ratio links CG and AC?"],
        strategy: "Find the right triangle",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q14",
        question: "Without a calculator, work out the exact value of {{sin 60° * tan 30°}}.",
        options: ["{{3/2}}", "{{sqrt(3)/6}}", "{{sqrt(3)/2}}", "{{1/2}}"],
        answerIndex: 3,
        explanation:
          "{{sin 60° = sqrt(3)/2}} and {{tan 30° = 1/sqrt(3)}}, so the product is {{sqrt(3)/2 * 1/sqrt(3) = 1/2}}. {{3/2}} uses {{tan 30° = sqrt(3)}} (that is tan 60°); {{sqrt(3)/6}} uses sin 30° instead of sin 60°; {{sqrt(3)/2}} treats tan 30° as 1 (that is tan 45°).",
        difficulty: "challenge",
        guideRef: "exact-values",
        hints: ["Draw the 30-60-90 triangle with sides 1, {{sqrt(3)}}, 2.", "Read off sin 60° and tan 30° as fractions of sides.", "The {{sqrt(3)}} cancels."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m1-q15",
        question: "The sides of a right-angled triangle are x cm, (x + 14) cm and (x + 16) cm.\n\nWork out the value of x.",
        options: ["10", "6", "{{2 sqrt(15)}}", "−6 or 10"],
        answerIndex: 0,
        explanation:
          "The longest side, x + 16, is the hypotenuse: {{x^2 + (x+14)^2 = (x+16)^2}}. Expanding: {{2x^2 + 28x + 196 = x^2 + 32x + 256}}, so {{x^2 - 4x - 60 = 0}}, {{(x - 10)(x + 6) = 0}}. A length cannot be negative, so x = 10 (sides 10, 24, 26). '−6 or 10' forgets to reject the negative root; 6 comes from a sign slip giving {{x^2 + 4x - 60 = 0}}; {{2 sqrt(15)}} squares the brackets as {{x^2 + 196}} and {{x^2 + 256}}, losing the middle terms, so {{x^2 = 60}}.",
        difficulty: "challenge",
        guideRef: "pythagoras",
        hints: ["Which expression must be the hypotenuse?", "Expand {{(x + 14)^2}} and {{(x + 16)^2}} fully — don't forget the middle terms.", "Solve the quadratic and check which root makes sense as a length."],
        strategy: "Introduce a variable",
      },
    ],
  },
  {
    id: "pythagoras-trigonometry-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q01",
        question: "Work out the distance between the points (2, 1) and (7, 13).",
        options: ["17 units", "13 units", "169 units", "16.6 units"],
        answerIndex: 1,
        explanation:
          "Horizontal change 7 − 2 = 5, vertical change 13 − 1 = 12. These are the shorter sides of a right-angled triangle: {{d = sqrt(5^2 + 12^2) = sqrt(169) = 13}}. 17 adds 5 and 12; 169 forgets the square root; 16.6 adds the coordinates ({{sqrt(9^2 + 14^2)}}) instead of subtracting.",
        difficulty: "warmup",
        guideRef: "pythagoras",
        hints: ["Sketch the two points and draw the right-angled triangle between them.", "The shorter sides are the differences in x and in y."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q02",
        question: "In triangle ABC, angle B = 90°, angle A = 50° and AB = 15 cm.\n\nWork out the length of AC, marked x. Give your answer correct to 3 significant figures.",
        diagram: M2Q02,
        options: ["9.64 cm", "19.6 cm", "17.9 cm", "23.3 cm"],
        answerIndex: 3,
        explanation:
          "From 50°, AB is the **adjacent** and AC the **hypotenuse**: {{cos 50° = 15/x}}, so {{x = 15/(cos 50°) = 23.3}} cm. 9.64 cm multiplies by cos 50° — but the hypotenuse must be longer than 15 cm; 19.6 cm uses sin; 17.9 cm uses tan (that is BC).",
        difficulty: "warmup",
        guideRef: "sohcahtoa",
        hints: ["Label H, O, A from the 50° angle.", "The unknown is in the denominator: {{cos 50° = 15/x}}.", "Rearrange: {{x = 15/(cos 50°)}}."],
        strategy: "Label first",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q03",
        question: "From the top T of a vertical cliff 60 m high, the angle of depression of a boat B is 22°.\n\nWork out the distance d from the foot of the cliff to the boat. Give your answer correct to 3 significant figures.",
        diagram: M2Q03,
        options: ["149 m", "24.2 m", "160 m", "22.5 m"],
        answerIndex: 0,
        explanation:
          "The angle of depression (below the horizontal at T) equals the angle of elevation at B (alternate angles), so in the triangle angle B = 22°. The 60 m is opposite B and d is adjacent: {{d = 60/(tan 22°) = 148.5...}} ≈ 149 m. 24.2 m is 60 tan 22°, putting the 22° at the wrong vertex; 160 m is the line of sight TB ({{60/(sin 22°)}}); 22.5 m is 60 sin 22°.",
        difficulty: "warmup",
        guideRef: "bearings-elevation",
        hints: ["Where is the angle of depression measured from?", "Alternate angles: the angle at B is also 22°.", "{{tan 22° = 60/d}}."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q04",
        question: "A right-angled triangle has shorter sides of 15 cm and 36 cm.\n\nUse a Pythagorean triple to find the hypotenuse.",
        options: ["51 cm", "32.7 cm", "39 cm", "1521 cm"],
        answerIndex: 2,
        explanation:
          "15 = 3 × 5 and 36 = 3 × 12, so this is the 5, 12, 13 triple scaled by 3: hypotenuse = 3 × 13 = 39 cm. Check: 225 + 1296 = 1521 = {{39^2}}. 51 cm adds the sides; 32.7 cm subtracts the squares; 1521 cm forgets the square root.",
        difficulty: "warmup",
        guideRef: "pythagorean-triples",
        hints: ["What do 15 and 36 have in common?", "Divide by 3 — do you recognise the triple?"],
        strategy: "Find a pattern",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q05",
        question: "In triangle ABC, angle B = 90°, AB = 9 cm and AC = 14 cm.\n\nWork out the size of angle θ at A. Give your answer correct to 1 decimal place.",
        diagram: M2Q05,
        options: ["40.0°", "32.7°", "50.0°", "57.3°"],
        answerIndex: 2,
        explanation:
          "From θ, AB = 9 is **adjacent** and AC = 14 is the **hypotenuse**: {{cos θ = 9/14}}, so {{θ = cos^(-1)(9/14) = 50.0°}}. 40.0° uses sin — that is angle C; 32.7° uses {{tan^(-1)(9/14)}}, but 14 is not the opposite side; 57.3° is {{tan^(-1)(14/9)}}.",
        difficulty: "core",
        guideRef: "sohcahtoa",
        hints: ["Which side is the hypotenuse? Which touches θ?", "Adjacent and hypotenuse → CAH.", "Use the inverse: {{cos^(-1)(9/14)}}."],
        strategy: "Label first",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q06",
        question: "An isosceles triangle has sides 25 cm, 25 cm and 14 cm.\n\nWork out its area.",
        options: ["168 cm²", "336 cm²", "175 cm²", "350 cm²"],
        answerIndex: 0,
        explanation:
          "The height from the apex bisects the 14 cm base, giving right-angled triangles with hypotenuse 25 and base 7: {{h = sqrt(25^2 - 7^2) = sqrt(576) = 24}} cm. Area = {{1/2 * 14 * 24 = 168}} cm². 336 cm² forgets the half; 175 cm² uses the sloping side 25 as the height; 350 cm² does both.",
        difficulty: "core",
        guideRef: "pythagoras",
        hints: ["Is 25 cm the perpendicular height?", "Drop a perpendicular from the apex — it cuts the base in half.", "Height = {{sqrt(25^2 - 7^2)}}."],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q07",
        question: "A rectangle is 4 cm wide and 8 cm long.\n\nWork out the exact length of its diagonal, as a simplified surd.",
        options: ["{{2 sqrt(3)}} cm", "{{16 sqrt(5)}} cm", "12 cm", "{{4 sqrt(5)}} cm"],
        answerIndex: 3,
        explanation:
          "{{d^2 = 4^2 + 8^2 = 16 + 64 = 80}}, so {{d = sqrt(80) = sqrt(16 * 5) = 4 sqrt(5)}} cm. {{16 sqrt(5)}} takes the square factor 16 out without square-rooting it; {{2 sqrt(3)}} is {{sqrt(4 + 8)}}, adding lengths instead of their squares; 12 cm adds the sides.",
        difficulty: "core",
        guideRef: "pythagoras",
        hints: ["Diagonal² = width² + length².", "Find the largest square factor of 80.", "{{sqrt(16 * 5) = sqrt(16) * sqrt(5)}}."],
        strategy: "Simplify surds",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q08",
        question: "A lighthouse L is 7 km east and 4 km north of a port P.\n\nWork out the bearing of L from P. Give your answer correct to 1 decimal place.",
        options: ["029.7°", "060.3°", "119.7°", "240.3°"],
        answerIndex: 1,
        explanation:
          "Bearings are measured clockwise from **north**. The angle between north and PL has opposite side 7 (east) and adjacent side 4 (north): {{tan^(-1)(7/4) = 60.3°}}, so the bearing is 060.3°. 029.7° is {{tan^(-1)(4/7)}}, the angle measured from east; 119.7° adds that to 90°; 240.3° is the bearing of P from L.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["Draw a north line at P.", "The angle you want starts at north and turns clockwise to PL.", "Opposite the angle is the 7 km east side."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q09",
        question: "VABCD is a square-based pyramid. The base has side 8 cm. The apex V is vertically above the centre M of the base, and VM = 6 cm.\n\nWork out the angle θ between the edge VA and the base. Give your answer correct to 1 decimal place.",
        diagram: M2Q09,
        options: ["46.7°", "56.3°", "36.9°", "27.9°"],
        answerIndex: 0,
        explanation:
          "The projection of VA on the base is AM, half a diagonal: {{AC = sqrt(8^2 + 8^2) = 8 sqrt(2)}}, so {{AM = 4 sqrt(2) = 5.657}} cm. In right-angled triangle VMA, {{tan θ = 6/(4 sqrt(2))}}, θ = 46.7°. 56.3° uses half the side (4 cm) instead of half the diagonal; 36.9° uses the full side 8; 27.9° uses the full diagonal.",
        difficulty: "core",
        guideRef: "three-d",
        hints: ["The right angle is at M. What is the length AM?", "AM is half of the base diagonal AC.", "{{tan θ = (VM)/(AM)}}."],
        strategy: "Find the right triangle",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q10",
        question: "In triangle ABC, angle B = 90° and AB = 9 cm. D is on BC with BD = 4 cm and DC = 8 cm.\n\nWork out the size of angle DAC, marked x. Give your answer correct to 1 decimal place.",
        diagram: M2Q10,
        options: ["53.1°", "24.0°", "29.2°", "41.6°"],
        answerIndex: 2,
        explanation:
          "Triangle ADC is not right-angled, so use two right-angled triangles that are. Angle BAC: {{tan^(-1)(12/9) = 53.13°}}. Angle BAD: {{tan^(-1)(4/9) = 23.96°}}. So x = 53.13° − 23.96° = 29.2°. 53.1° is the whole of angle BAC; 24.0° is angle BAD; 41.6° is {{tan^(-1)(8/9)}}, treating ADC as if it had a right angle.",
        difficulty: "core",
        guideRef: "sohcahtoa",
        hints: ["Is triangle ADC right-angled? Which triangles are?", "x is the difference of two angles at A.", "Find angle BAC (using BC = 12) and angle BAD, then subtract."],
        strategy: "Split into simpler pieces",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q11",
        question: "In a right-angled triangle, one angle is 30° and the hypotenuse is 10 cm.\n\nWork out the exact length of the side adjacent to the 30° angle.",
        options: ["5 cm", "{{10 sqrt(3)}} cm", "{{(20 sqrt(3))/3}} cm", "{{5 sqrt(3)}} cm"],
        answerIndex: 3,
        explanation:
          "Adjacent = {{10 cos 30° = 10 * sqrt(3)/2 = 5 sqrt(3)}} cm. Or scale the 1 : {{sqrt(3)}} : 2 triangle by 5. 5 cm is the side *opposite* 30° (10 sin 30°); {{10 sqrt(3)}} cm scales by 10 instead of 5; {{(20 sqrt(3))/3}} cm divides by cos 30°, treating 10 as the adjacent.",
        difficulty: "core",
        guideRef: "exact-values",
        hints: ["Adjacent and hypotenuse → which ratio?", "{{cos 30° = sqrt(3)/2}}.", "Multiply 10 by {{sqrt(3)/2}}."],
        strategy: "Use exact values",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q12",
        question: "Wei Ling flies a kite on a 50 m string. The string is straight and makes an angle of elevation of 38° from her hand, which is 1.2 m above the ground.\n\nWork out the height of the kite above the ground, correct to 3 significant figures.",
        options: ["30.8 m", "32.0 m", "29.6 m", "40.6 m"],
        answerIndex: 1,
        explanation:
          "The string is the hypotenuse and the height above her hand is opposite 38°: {{50 sin 38° = 30.78}} m. Add the 1.2 m to her hand: 30.78 + 1.2 = 31.98 ≈ 32.0 m. 30.8 m forgets the 1.2 m; 29.6 m subtracts it; 40.6 m uses cos (the horizontal distance) plus 1.2.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["Where does the right-angled triangle start — at the ground or at her hand?", "Opposite and hypotenuse → sine.", "Don't forget to add the height of her hand."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q13",
        question: "Kenji stands at the top of a vertical cliff 80 m above sea level. Two boats are out at sea, in a straight line with the foot of the cliff and on the same side of it. The angles of depression of the boats from Kenji are 40° and 25°.\n\nWork out the distance between the two boats, correct to 3 significant figures.",
        options: ["29.8 m", "267 m", "76.2 m", "299 m"],
        answerIndex: 2,
        explanation:
          "Each angle of depression equals the angle of elevation at that boat (alternate angles). The 80 m cliff is opposite each angle, so the distances from the foot are {{80/(tan 25°) = 171.56…}} m (farther boat) and {{80/(tan 40°) = 95.34…}} m (nearer boat). Distance between them = 171.56… − 95.34… = 76.22… ≈ 76.2 m. 29.8 m uses 80 tan 40° − 80 tan 25°, putting the angles at the top of the cliff; 267 m adds the distances, as if the boats were on opposite sides; 299 m is {{80/(tan 15°)}} — you cannot subtract the angles first.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["Sketch the cliff and both lines of sight. Where does each angle of depression reappear?", "Alternate angles: the angle of elevation at each boat equals its angle of depression.", "Find each boat's distance from the foot with {{d = 80/(tan theta)}}, then subtract."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q14",
        question: "The space diagonal of a cube is 12 cm.\n\nWork out the exact length of an edge of the cube.",
        options: ["{{4 sqrt(3)}} cm", "4 cm", "{{6 sqrt(2)}} cm", "{{12 sqrt(3)}} cm"],
        answerIndex: 0,
        explanation:
          "For edge s, {{d^2 = s^2 + s^2 + s^2 = 3s^2}}, so {{d = s sqrt(3)}}. Then {{s = 12/sqrt(3) = (12 sqrt(3))/3 = 4 sqrt(3)}} cm (≈ 6.93 cm). 4 cm divides by 3 instead of {{sqrt(3)}}; {{6 sqrt(2)}} cm uses the face diagonal {{s sqrt(2)}}; {{12 sqrt(3)}} cm multiplies by {{sqrt(3)}}.",
        difficulty: "challenge",
        guideRef: "three-d",
        hints: ["Write the space diagonal in terms of the edge s.", "{{d^2 = s^2 + s^2 + s^2}}.", "Solve {{s sqrt(3) = 12}} and rationalise."],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m2-q15",
        question: "A Pythagorean triple has 11 as its shortest number. The other two numbers are consecutive whole numbers.\n\nWhat is the largest number in the triple?",
        options: ["60", "121", "{{11 sqrt(2)}}", "61"],
        answerIndex: 3,
        explanation:
          "Let the others be n and n + 1. Then {{11^2 = (n+1)^2 - n^2 = 2n + 1}}, so 2n + 1 = 121 and n = 60. The triple is 11, 60, 61 (check: 121 + 3600 = 3721 = {{61^2}}). 60 is the other shorter side; 121 is {{11^2}} itself; {{11 sqrt(2)}} assumes the two shorter sides are equal — but then the sides cannot all be whole numbers.",
        difficulty: "challenge",
        guideRef: "pythagorean-triples",
        hints: ["Call the other two numbers n and n + 1.", "{{(n + 1)^2 - n^2}} simplifies to something neat.", "Set {{2n + 1 = 121}}."],
        strategy: "Introduce a variable",
      },
    ],
  },
  {
    id: "pythagoras-trigonometry-m3",
    title: "MCQ Paper 3 — Exam style",
    questions: [
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q01",
        question: "A ladder 4.2 m long leans against a vertical wall. The foot of the ladder is on horizontal ground, 1.3 m from the wall.\n\nHow far up the wall does the ladder reach? Give your answer correct to 3 significant figures.",
        options: ["4.40 m", "2.90 m", "16.0 m", "3.99 m"],
        answerIndex: 3,
        explanation:
          "The ladder is the hypotenuse: {{h = sqrt(4.2^2 - 1.3^2) = sqrt(17.64 - 1.69) = sqrt(15.95) = 3.993...}} ≈ 3.99 m. 4.40 m adds the squares — it would make the wall height longer than the ladder; 2.90 m subtracts the lengths; 16.0 m is 15.95, forgetting the square root.",
        difficulty: "warmup",
        guideRef: "pythagoras",
        hints: ["Which length is the hypotenuse?", "Height² = 4.2² − 1.3²."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q02",
        question: "In triangle ABC, angle B = 90°, angle A = 62° and AB = 8 cm.\n\nWork out the length of BC, marked x. Give your answer correct to 3 significant figures.",
        diagram: M3Q02,
        options: ["7.06 cm", "15.0 cm", "4.25 cm", "17.0 cm"],
        answerIndex: 1,
        explanation:
          "From 62°, BC is **opposite** and AB = 8 is **adjacent**, so {{x = 8 tan 62° = 15.04...}} ≈ 15.0 cm. 7.06 cm uses sin; 4.25 cm divides by tan 62°; 17.0 cm is {{8/(cos 62°)}}, the hypotenuse AC.",
        difficulty: "warmup",
        guideRef: "sohcahtoa",
        hints: ["Label O, A and H from the 62° angle.", "Opposite and adjacent → TOA.", "{{tan 62° = x/8}}."],
        strategy: "Label first",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q03",
        question: "Point B is 5 km due east of point A. Point C is 5 km due south of B.\n\nWhat is the bearing of C from A?",
        options: ["045°", "225°", "135°", "315°"],
        answerIndex: 2,
        explanation:
          "Triangle ABC is right-angled and isosceles, so angle BAC = 45°. From north at A, turn 90° to face east, then 45° more towards C: 90° + 45° = 135°. 045° points north-east; 225° is the bearing of A from C; 315° points north-west.",
        difficulty: "warmup",
        guideRef: "bearings-elevation",
        hints: ["Sketch it: east first, then south.", "AC is south-east of A. How far clockwise from north is south-east?"],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q04",
        question: "Triangle ABC has a right angle at B, AB = 12 cm, BC = 5 cm and AC = 13 cm.\n\nWhich of these is the value of tan θ, where θ is the angle at A?",
        diagram: M3Q04,
        options: ["{{5/12}}", "{{12/5}}", "{{5/13}}", "{{12/13}}"],
        answerIndex: 0,
        explanation:
          "From θ, the opposite side is BC = 5 and the adjacent is AB = 12, so {{tan θ = 5/12}}. {{12/5}} is adjacent ÷ opposite (it is tan C); {{5/13}} is sin θ; {{12/13}} is cos θ.",
        difficulty: "warmup",
        guideRef: "sohcahtoa",
        hints: ["Which side is opposite θ? Which side touches θ but is not the hypotenuse?", "tan = opposite ÷ adjacent."],
        strategy: "Label first",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q05",
        question: "ABCD is a trapezium with AB parallel to DC. Angle A = angle D = 90°, AB = 14 cm, DC = 9 cm and AD = 12 cm.\n\nWork out the length of BC.",
        diagram: M3Q05,
        options: ["13 cm", "18.4 cm", "15 cm", "17 cm"],
        answerIndex: 0,
        explanation:
          "Drop a perpendicular from C to AB. It has length 12 cm and meets AB 9 cm from A, leaving 14 − 9 = 5 cm. So {{BC = sqrt(5^2 + 12^2) = sqrt(169) = 13}} cm. 18.4 cm is {{sqrt(14^2 + 12^2)}}, the diagonal DB; 15 cm is {{sqrt(9^2 + 12^2)}}, the diagonal AC; 17 cm adds 5 and 12.",
        difficulty: "core",
        guideRef: "pythagoras",
        hints: ["BC is not in a right-angled triangle yet — make one.", "Drop a perpendicular from C to AB. How long is it?", "The horizontal side of the new triangle is 14 − 9."],
        strategy: "Draw an extra line",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q06",
        question: "A right-angled triangle has hypotenuse 20 cm. The side opposite angle θ is 13 cm.\n\nWork out θ, correct to 1 decimal place.",
        options: ["49.5°", "33.0°", "40.5°", "57.0°"],
        answerIndex: 2,
        explanation:
          "Opposite and hypotenuse → sine: {{sin θ = 13/20 = 0.65}}, {{θ = sin^(-1)(0.65) = 40.5°}}. 49.5° uses cos; 33.0° uses {{tan^(-1)(0.65)}}, but 20 is the hypotenuse, not the adjacent; 57.0° is {{tan^(-1)(20/13)}}.",
        difficulty: "core",
        guideRef: "sohcahtoa",
        hints: ["You know O and H.", "{{sin θ = 13/20}}.", "Use {{sin^(-1)}}."],
        strategy: "Label first",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q07",
        question: "A ship leaves port P and sails 22 km on a bearing of 055°.\n\nHow far north of P is the ship now? Give your answer correct to 3 significant figures.",
        options: ["18.0 km", "12.6 km", "31.4 km", "38.4 km"],
        answerIndex: 1,
        explanation:
          "The bearing angle 55° is measured from the north line, so the north distance is **adjacent** to it: {{22 cos 55° = 12.61…}} ≈ 12.6 km. 18.0 km (22 sin 55°) is how far **east** it is; 31.4 km uses tan; 38.4 km divides by cos 55°.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["Draw the north line at P and the 055° path.", "The 55° angle sits between north and the path, so north is adjacent.", "North distance = 22 cos 55°."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q08",
        question: "The diagram shows a cuboid ABCDEFGH with AB = 10 cm, BC = 7 cm and CG = 4 cm.\n\nWork out the size of angle GAC, marked θ. Give your answer correct to 1 decimal place.",
        diagram: M3Q08,
        options: ["21.8°", "29.7°", "19.1°", "18.1°"],
        answerIndex: 3,
        explanation:
          "First the base diagonal: {{AC = sqrt(10^2 + 7^2) = sqrt(149) = 12.21}} cm. Triangle ACG is right-angled at C, with CG = 4 opposite θ: {{tan θ = 4/sqrt(149)}}, θ = 18.1°. 21.8° uses AB = 10 as the adjacent and 29.7° uses BC = 7; 19.1° uses sin with AC as the hypotenuse — but AG is the hypotenuse.",
        difficulty: "core",
        guideRef: "three-d",
        hints: ["Which triangle contains θ and has a right angle?", "Find AC first, using the base.", "{{tan θ = (CG)/(AC)}}."],
        strategy: "Find the right triangle",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q09",
        question: "An equilateral triangle has sides of 10 cm.\n\nWork out the exact perpendicular height of the triangle.",
        options: ["{{5 sqrt(5)}} cm", "75 cm", "{{5 sqrt(3)}} cm", "{{25 sqrt(3)}} cm"],
        answerIndex: 2,
        explanation:
          "The height bisects the base, making a right-angled triangle with hypotenuse 10 and base 5: {{h = sqrt(10^2 - 5^2) = sqrt(75) = sqrt(25 * 3) = 5 sqrt(3)}} cm. {{5 sqrt(5)}} adds the squares ({{sqrt(125)}}); 75 cm forgets the square root; {{25 sqrt(3)}} cm takes the square factor 25 outside the root without square-rooting it.",
        difficulty: "core",
        guideRef: "pythagoras",
        hints: ["The height meets the base at its midpoint.", "Hypotenuse 10, base 5 — subtract the squares.", "Simplify {{sqrt(75)}}."],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q10",
        question: "A wheelchair ramp is 9 m long (measured along the slope) and rises 1.5 m.\n\nWork out the angle the ramp makes with the horizontal, correct to 1 decimal place.",
        options: ["9.6°", "9.5°", "80.4°", "0.2°"],
        answerIndex: 0,
        explanation:
          "The ramp is the hypotenuse and the rise is opposite the angle: {{sin θ = 1.5/9}}, θ = 9.6°. 9.5° uses tan, treating 9 m as the horizontal distance; 80.4° uses cos — that is the angle at the top of the ramp; 0.2° is just {{1.5/9 = 0.167}}, forgetting the inverse function.",
        difficulty: "core",
        guideRef: "sohcahtoa",
        hints: ["Is the 9 m horizontal or along the slope?", "Opposite and hypotenuse → sine.", "Remember to use {{sin^(-1)}} on the ratio."],
        strategy: "Label first",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q11",
        question: "Hana measures a triangle with sides 2.5 cm, 6 cm and 6.5 cm.\n\nWhich statement is correct?",
        options: ["It is not right-angled, because the sides are not whole numbers", "It is right-angled, because {{2.5^2 + 6^2 = 6.5^2}}", "It is not right-angled, because 2.5 + 6 ≠ 6.5", "It is right-angled, because 2.5 + 6 > 6.5"],
        answerIndex: 1,
        explanation:
          "Use the converse of Pythagoras: 6.25 + 36 = 42.25 = {{6.5^2}}, so the angle opposite the 6.5 cm side is 90°. (It is the 5, 12, 13 triangle halved.) Pythagoras works for any lengths, not just whole numbers; comparing sums of sides only tells you the triangle exists, not whether it has a right angle.",
        difficulty: "core",
        guideRef: "pythagoras",
        hints: ["What equation does a right-angled triangle's sides satisfy?", "Square each side; compare the two smaller with the largest."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q12",
        question: "From the top of a building 45 m tall, Ravi sees a car on the road below. The car is 80 m from the base of the building, on level ground.\n\nWork out the angle of depression of the car from Ravi, correct to 1 decimal place.",
        options: ["60.6°", "34.2°", "55.8°", "29.4°"],
        answerIndex: 3,
        explanation:
          "The angle of depression equals the angle of elevation from the car (alternate angles). From the car, 45 m is opposite and 80 m is adjacent: {{tan^(-1)(45/80) = 29.4°}}. 60.6° is the angle between the building and the line of sight, {{tan^(-1)(80/45)}}; 34.2° uses {{sin^(-1)(45/80)}}, but 80 m is not the line of sight; 55.8° uses cos.",
        difficulty: "core",
        guideRef: "bearings-elevation",
        hints: ["The angle of depression is measured down from the horizontal.", "It equals the angle of elevation at the car.", "Opposite 45, adjacent 80 → tan."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q13",
        question: "VABCD is a square-based pyramid with base side 12 cm. Each sloping edge (such as VA) is 14 cm. V is vertically above M, the centre of the base.\n\nWork out the height h of the pyramid, correct to 3 significant figures.",
        diagram: M3Q13,
        options: ["11.1 cm", "12.6 cm", "7.21 cm", "16.4 cm"],
        answerIndex: 0,
        explanation:
          "The right angle is at M, so use triangle VMA. {{AM}} is half the base diagonal: {{AC = 12 sqrt(2)}}, so {{AM = 6 sqrt(2)}} and {{AM^2 = 72}}. Then {{h = sqrt(14^2 - 72) = sqrt(124) = 11.13…}} ≈ 11.1 cm. 12.6 cm uses half a side (6 cm) — that is the slant height of a face, not the vertical height; 7.21 cm uses the full side 12; 16.4 cm adds the squares.",
        difficulty: "challenge",
        guideRef: "three-d",
        hints: ["Which triangle contains h, VA and a right angle?", "The foot M is the centre, so AM is half a diagonal.", "{{h^2 = 14^2 - AM^2}} with {{AM^2 = 72}}."],
        strategy: "Find the right triangle",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q14",
        question: "In the diagram, BD is perpendicular to AC. Angle BAD = 45°, angle BCD = 30° and AD = 6 cm.\n\nWork out the exact length of DC, marked x.",
        diagram: M3Q14,
        options: ["{{2 sqrt(3)}} cm", "{{3 sqrt(6)}} cm", "{{6 sqrt(3)}} cm", "12 cm"],
        answerIndex: 2,
        explanation:
          "Triangle ABD has angles 45° and 90°, so it is isosceles: BD = AD = 6 cm. In triangle CBD, {{tan 30° = (BD)/(DC)}}, so {{DC = 6/(tan 30°) = 6/(1/sqrt(3)) = 6 sqrt(3)}} cm. {{2 sqrt(3)}} cm multiplies by tan 30° instead of dividing; {{3 sqrt(6)}} cm treats AD as the hypotenuse of the 45° triangle (so BD = {{3 sqrt(2)}}) and then multiplies by {{sqrt(3)}}; 12 cm is BC (the hypotenuse, {{6/(sin 30°)}}).",
        difficulty: "challenge",
        guideRef: "exact-values",
        hints: ["What kind of triangle is ABD?", "BD is shared — find it first.", "In triangle CBD, {{tan 30° = 6/x}} with {{tan 30° = 1/sqrt(3)}}."],
        strategy: "Work through a shared side",
      },
      {
        kind: "mcq",
        id: "pythagoras-trigonometry-m3-q15",
        question: "A boat sails 8 km from a harbour H on a bearing of 060°. It then turns and sails 15 km on a bearing of 150° to point F.\n\nWork out the bearing of F from H, correct to 1 decimal place.",
        options: ["088.1°", "121.9°", "301.9°", "061.9°"],
        answerIndex: 1,
        explanation:
          "At the turning point the bearing back to H is 060° + 180° = 240°, and the new course is 150°, so the angle between the legs is 240° − 150° = 90°: the triangle with sides 8 and 15 is right-angled (HF = 17 km). At H, the angle between the first leg and HF is {{tan^(-1)(15/8) = 61.93…°}}. Bearing = 060° + 61.93…° = 121.9°. 088.1° adds {{tan^(-1)(8/15)}} (opposite and adjacent swapped); 301.9° is the bearing of H from F; 061.9° forgets to add the initial 060°.",
        difficulty: "challenge",
        guideRef: "bearings-elevation",
        hints: ["What is the angle between the two legs of the journey?", "The triangle is right-angled — find the angle at H.", "Add that angle to the first bearing, 060°."],
        strategy: "Draw a diagram",
      },
    ],
  },
];
