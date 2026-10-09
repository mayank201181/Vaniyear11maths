import type { TopicPractice } from "../../types.ts";

// ---------------------------------------------------------------------------
// Diagrams (drawn to scale from the data in the questions)
// ---------------------------------------------------------------------------

const ALTERNATE = `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel lines PQ and RS, marked with arrows, crossed by a transversal. At the top crossing the angle between the line towards P and the transversal going down is 74 degrees. At the bottom crossing the angle between the transversal going up and the line towards S is marked x."><rect x="0" y="0" width="480" height="280" fill="#ffffff"/><line x1="40" y1="90" x2="440" y2="90" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="220" x2="440" y2="220" stroke="#1f2937" stroke-width="2"/><polyline points="372,95 380,90 372,85" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="372,225 380,220 372,215" fill="none" stroke="#1f2937" stroke-width="1.5"/><line x1="196.2" y1="277.7" x2="266.5" y2="32.3" stroke="#1f2937" stroke-width="2"/><path d="M 224 90 A 26 26 0 0 0 242.8 115" fill="none" stroke="#334155" stroke-width="1.5"/><text x="214.9" y="121.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">74°</text><path d="M 219.9 195 A 26 26 0 0 1 238.7 220" fill="none" stroke="#334155" stroke-width="1.5"/><text x="244.7" y="200.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x</text><text x="30" y="83" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">P</text><text x="450" y="83" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Q</text><text x="30" y="213" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">R</text><text x="450" y="213" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937">S</text></svg>`;

const COINTERIOR = `<svg viewBox="0 0 480 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two parallel lines, marked with arrows, crossed by a transversal. At the top crossing, the angle on the left below the line, between the line and the transversal, is 58 degrees. At the bottom crossing, the angle on the left above the line, between the transversal and the line, is marked x."><rect x="0" y="0" width="480" height="280" fill="#ffffff"/><line x1="30" y1="90" x2="450" y2="90" stroke="#1f2937" stroke-width="2"/><line x1="30" y1="220" x2="450" y2="220" stroke="#1f2937" stroke-width="2"/><polyline points="391.6,95 399.6,90 391.6,85" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="391.6,225 399.6,220 391.6,215" fill="none" stroke="#1f2937" stroke-width="1.5"/><line x1="152.3" y1="262.4" x2="291.8" y2="39.1" stroke="#1f2937" stroke-width="2"/><path d="M 232 90 A 28 28 0 0 0 245.2 113.7" fill="none" stroke="#334155" stroke-width="1.5"/><text x="219.8" y="117.3" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">58°</text><path d="M 191.5 199.6 A 24 24 0 0 0 154.8 220" fill="none" stroke="#334155" stroke-width="1.5"/><text x="160.3" y="191.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x</text></svg>`;

const CENTRE = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with centre O. Points A, B and C lie on the circle with C at the top and A and B lower down. Lines CA, CB, OA and OB are drawn. Angle ACB is 38 degrees."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><circle cx="240" cy="165" r="115" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="240" y1="165" x2="169.2" y2="255.6" stroke="#1f2937" stroke-width="2"/><line x1="240" y1="165" x2="310.8" y2="255.6" stroke="#1f2937" stroke-width="2"/><line x1="230" y1="50.4" x2="169.2" y2="255.6" stroke="#1f2937" stroke-width="2"/><line x1="230" y1="50.4" x2="310.8" y2="255.6" stroke="#1f2937" stroke-width="2"/><circle cx="240" cy="165" r="3" fill="#1f2937"/><circle cx="169.2" cy="255.6" r="3" fill="#1f2937"/><circle cx="310.8" cy="255.6" r="3" fill="#1f2937"/><circle cx="230" cy="50.4" r="3" fill="#1f2937"/><path d="M 220.3 83 A 34 34 0 0 0 242.4 82.1" fill="none" stroke="#334155" stroke-width="1.5"/><text x="232.2" y="105.4" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">38°</text><text x="159.3" y="273.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="320.7" y="273.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="228.6" y="39.5" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="254" y="168" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">O</text></svg>`;

const ISOSCELES_RADII = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with centre O. A and B are on the lower part of the circle and C is near the top. Lines OA, OB, AB, CA and CB are drawn. Angle OAB is 34 degrees."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><circle cx="240" cy="160" r="115" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="240" y1="160" x2="144.7" y2="224.3" stroke="#1f2937" stroke-width="2"/><line x1="240" y1="160" x2="335.3" y2="224.3" stroke="#1f2937" stroke-width="2"/><line x1="144.7" y1="224.3" x2="335.3" y2="224.3" stroke="#1f2937" stroke-width="2"/><line x1="260" y1="46.7" x2="144.7" y2="224.3" stroke="#1f2937" stroke-width="2"/><line x1="260" y1="46.7" x2="335.3" y2="224.3" stroke="#1f2937" stroke-width="2"/><circle cx="240" cy="160" r="3" fill="#1f2937"/><circle cx="144.7" cy="224.3" r="3" fill="#1f2937"/><circle cx="335.3" cy="224.3" r="3" fill="#1f2937"/><circle cx="260" cy="46.7" r="3" fill="#1f2937"/><path d="M 172.9 205.3 A 34 34 0 0 1 178.7 224.3" fill="none" stroke="#334155" stroke-width="1.5"/><text x="195" y="216" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">34°</text><text x="130.5" y="236.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="349.5" y="236.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="262.7" y="36" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="240" y="149" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">O</text></svg>`;

const CYCLIC_EXT = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cyclic quadrilateral ABCD with A at the top. AB and AD are marked equal. The diagonal BD is drawn. DC is extended beyond C to E. Angle BCE is 74 degrees."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><circle cx="220" cy="148" r="112" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="220" y1="36" x2="327.7" y2="178.9" stroke="#1f2937" stroke-width="2"/><line x1="327.7" y1="178.9" x2="227.8" y2="259.7" stroke="#1f2937" stroke-width="2"/><line x1="227.8" y1="259.7" x2="112.3" y2="178.9" stroke="#1f2937" stroke-width="2"/><line x1="112.3" y1="178.9" x2="220" y2="36" stroke="#1f2937" stroke-width="2"/><line x1="327.7" y1="178.9" x2="112.3" y2="178.9" stroke="#1f2937" stroke-width="2"/><line x1="227.8" y1="259.7" x2="278.6" y2="295.3" stroke="#1f2937" stroke-width="2"/><line x1="269" y1="111" x2="278.6" y2="103.8" stroke="#1f2937" stroke-width="1.5"/><line x1="161.4" y1="103.8" x2="171" y2="111" stroke="#1f2937" stroke-width="1.5"/><circle cx="220" cy="36" r="3" fill="#1f2937"/><circle cx="327.7" cy="178.9" r="3" fill="#1f2937"/><circle cx="227.8" cy="259.7" r="3" fill="#1f2937"/><circle cx="112.3" cy="178.9" r="3" fill="#1f2937"/><path d="M 248 243.4 A 26 26 0 0 1 249.1 274.6" fill="none" stroke="#334155" stroke-width="1.5"/><text x="269.8" y="263.3" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">74°</text><text x="220" y="25" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="343" y="188.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="228.9" y="280.7" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="97" y="188.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="292.6" y="302.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">E</text></svg>`;

const ALT_SEGMENT = `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with centre O. A is the lowest point of the circle and the line ST is the tangent at A, with T to the right of A. B is on the upper right and C on the upper left. Angle TAB is 63 degrees and angle BAC is 52 degrees."><rect x="0" y="0" width="480" height="290" fill="#ffffff"/><circle cx="240" cy="140" r="105" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="70" y1="245" x2="410" y2="245" stroke="#1f2937" stroke-width="2"/><line x1="240" y1="245" x2="324.9" y2="78.3" stroke="#1f2937" stroke-width="2"/><line x1="240" y1="245" x2="159.6" y2="72.5" stroke="#1f2937" stroke-width="2"/><line x1="324.9" y1="78.3" x2="159.6" y2="72.5" stroke="#1f2937" stroke-width="2"/><circle cx="240" cy="245" r="3" fill="#1f2937"/><circle cx="324.9" cy="78.3" r="3" fill="#1f2937"/><circle cx="159.6" cy="72.5" r="3" fill="#1f2937"/><circle cx="240" cy="140" r="3" fill="#1f2937"/><path d="M 280 245 A 40 40 0 0 0 258.2 209.4" fill="none" stroke="#334155" stroke-width="1.5"/><text x="287.7" y="220.7" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">63°</text><path d="M 250.9 223.6 A 24 24 0 0 0 229.9 223.2" fill="none" stroke="#334155" stroke-width="1.5"/><text x="240.7" y="210" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">52°</text><text x="240" y="266" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="337.9" y="73.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="147.3" y="67.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="252" y="135" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">O</text><text x="410" y="268" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">T</text><text x="70" y="268" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">S</text></svg>`;

const TWO_TANGENTS = `<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with centre O. A and C are on the right of the circle; the tangents at A and C meet at T. B is on the left of the circle. Lines BA, BC, OA and OC are drawn. Angle ABC is y."><rect x="0" y="0" width="380" height="300" fill="#ffffff"/><circle cx="170" cy="150" r="100" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="227.4" y1="68.1" x2="344.3" y2="150" stroke="#1f2937" stroke-width="2"/><line x1="227.4" y1="231.9" x2="344.3" y2="150" stroke="#1f2937" stroke-width="2"/><line x1="70.4" y1="141.3" x2="227.4" y2="68.1" stroke="#1f2937" stroke-width="2"/><line x1="70.4" y1="141.3" x2="227.4" y2="231.9" stroke="#1f2937" stroke-width="2"/><line x1="170" y1="150" x2="227.4" y2="68.1" stroke="#1f2937" stroke-width="2"/><line x1="170" y1="150" x2="227.4" y2="231.9" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="5 4"/><circle cx="170" cy="150" r="3" fill="#1f2937"/><circle cx="227.4" cy="68.1" r="3" fill="#1f2937"/><circle cx="70.4" cy="141.3" r="3" fill="#1f2937"/><circle cx="227.4" cy="231.9" r="3" fill="#1f2937"/><path d="M 97.6 128.6 A 30 30 0 0 1 96.4 156.3" fill="none" stroke="#334155" stroke-width="1.5"/><text x="112.3" y="148.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">y</text><text x="236.5" y="60" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="54.4" y="144.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="236.5" y="250" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="166" y="141" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">O</text><text x="358.3" y="155" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">T</text></svg>`;

const HEX_SQUARE = `<svg viewBox="0 0 440 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Regular hexagon ABCDEF with a square ABGH drawn on side AB, outside the hexagon. F is joined to H. Angle AFH is marked x."><rect x="0" y="0" width="440" height="310" fill="#ffffff"/><polygon points="180,140.7 260,140.7 300,210 260,279.3 180,279.3 140,210" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><polygon points="180,140.7 260,140.7 260,60.7 180,60.7" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><line x1="140" y1="210" x2="180" y2="60.7" stroke="#1f2937" stroke-width="2"/><path d="M 170 158 A 60 60 0 0 0 155.5 152" fill="none" stroke="#334155" stroke-width="1.5"/><text x="166.8" y="150.3" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x</text><text x="194" y="161.7" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="272.1" y="135.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="316" y="215" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="268" y="298.1" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="172" y="298.1" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">E</text><text x="124" y="215" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">F</text><text x="271.3" y="54.4" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">G</text><text x="168.7" y="54.4" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">H</text></svg>`;

const CROSSED_CHORDS = `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Four points A, B, C and D on a circle. AB and DC are drawn, and the chords AC and BD cross at X. Angle BAC is 35 degrees and angle ACD is 48 degrees."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><circle cx="240" cy="160" r="120" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="136.1" y1="100" x2="331.9" y2="82.9" stroke="#1f2937" stroke-width="2"/><line x1="343.9" y1="220" x2="191.2" y2="269.6" stroke="#1f2937" stroke-width="2"/><line x1="136.1" y1="100" x2="343.9" y2="220" stroke="#1f2937" stroke-width="2"/><line x1="331.9" y1="82.9" x2="191.2" y2="269.6" stroke="#1f2937" stroke-width="2"/><circle cx="136.1" cy="100" r="3" fill="#1f2937"/><circle cx="331.9" cy="82.9" r="3" fill="#1f2937"/><circle cx="343.9" cy="220" r="3" fill="#1f2937"/><circle cx="191.2" cy="269.6" r="3" fill="#1f2937"/><circle cx="263.6" cy="173.6" r="3" fill="#1f2937"/><path d="M 185.9 95.6 A 50 50 0 0 1 179.4 125" fill="none" stroke="#334155" stroke-width="1.5"/><text x="200.5" y="119.3" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">35°</text><path d="M 314.5 203 A 34 34 0 0 0 311.6 230.5" fill="none" stroke="#334155" stroke-width="1.5"/><text x="294.2" y="219.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">48°</text><text x="122.2" y="97" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="344.2" y="77.6" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="357.8" y="233" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="184.7" y="289.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="263.6" y="162.6" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">X</text></svg>`;

const CENTRE_CYCLIC = `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with centre O. A and C are on the circle with angle AOC equal to 140 degrees. B is on the major arc at the top and D is on the minor arc at the bottom. Lines BA, BC, DA and DC are drawn."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><circle cx="240" cy="150" r="115" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="240" y1="150" x2="131.9" y2="189.3" stroke="#1f2937" stroke-width="2"/><line x1="240" y1="150" x2="348.1" y2="189.3" stroke="#1f2937" stroke-width="2"/><line x1="220" y1="36.7" x2="131.9" y2="189.3" stroke="#1f2937" stroke-width="2"/><line x1="220" y1="36.7" x2="348.1" y2="189.3" stroke="#1f2937" stroke-width="2"/><line x1="210.2" y1="261.1" x2="131.9" y2="189.3" stroke="#1f2937" stroke-width="2"/><line x1="210.2" y1="261.1" x2="348.1" y2="189.3" stroke="#1f2937" stroke-width="2"/><circle cx="240" cy="150" r="3" fill="#1f2937"/><circle cx="131.9" cy="189.3" r="3" fill="#1f2937"/><circle cx="220" cy="36.7" r="3" fill="#1f2937"/><circle cx="348.1" cy="189.3" r="3" fill="#1f2937"/><circle cx="210.2" cy="261.1" r="3" fill="#1f2937"/><path d="M 219.3 157.5 A 22 22 0 0 0 260.7 157.5" fill="none" stroke="#334155" stroke-width="1.5"/><text x="240" y="193" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">140°</text><text x="116.9" y="199.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="217.3" y="26" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="363.1" y="199.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="206.1" y="281.5" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="240" y="139" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">O</text></svg>`;

const SEMICIRCLE = `<svg viewBox="0 0 440 345" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle with centre O. AB is a diameter. C is a point on the circle above B. Lines AC, BC and OC are drawn. Angle CAB is 32 degrees."><rect x="0" y="0" width="440" height="345" fill="#ffffff"/><circle cx="220" cy="190" r="140" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="80" y1="190" x2="360" y2="190" stroke="#1f2937" stroke-width="2"/><line x1="80" y1="190" x2="281.4" y2="64.2" stroke="#1f2937" stroke-width="2"/><line x1="360" y1="190" x2="281.4" y2="64.2" stroke="#1f2937" stroke-width="2"/><line x1="220" y1="190" x2="281.4" y2="64.2" stroke="#1f2937" stroke-width="2"/><circle cx="220" cy="190" r="3" fill="#1f2937"/><circle cx="80" cy="190" r="3" fill="#1f2937"/><circle cx="360" cy="190" r="3" fill="#1f2937"/><circle cx="281.4" cy="64.2" r="3" fill="#1f2937"/><path d="M 124 190 A 44 44 0 0 0 117.3 166.7" fill="none" stroke="#334155" stroke-width="1.5"/><text x="137.7" y="178.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">32°</text><text x="64" y="195" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="376" y="195" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="288.4" y="54.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="220" y="211" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">O</text></svg>`;

const TWO_EXTERIOR = `<svg viewBox="0 0 480 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cyclic quadrilateral ABCD. AB and DC are extended to meet at E, where angle AED is 40 degrees. AD and BC are extended to meet at F, where angle AFB is 20 degrees."><rect x="0" y="0" width="480" height="330" fill="#ffffff"/><circle cx="154.4" cy="219.2" r="80.8" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="78.5" y1="246.8" x2="179.6" y2="30" stroke="#1f2937" stroke-width="2"/><line x1="234" y1="233.2" x2="179.6" y2="30" stroke="#1f2937" stroke-width="2"/><line x1="78.5" y1="246.8" x2="406.4" y2="218.1" stroke="#1f2937" stroke-width="2"/><line x1="126.8" y1="143.2" x2="406.4" y2="218.1" stroke="#1f2937" stroke-width="2"/><circle cx="78.5" cy="246.8" r="3" fill="#1f2937"/><circle cx="126.8" cy="143.2" r="3" fill="#1f2937"/><circle cx="216.4" cy="167.2" r="3" fill="#1f2937"/><circle cx="234" cy="233.2" r="3" fill="#1f2937"/><circle cx="179.6" cy="30" r="3" fill="#1f2937"/><circle cx="406.4" cy="218.1" r="3" fill="#1f2937"/><path d="M 162.7 66.3 A 40 40 0 0 0 190 68.6" fill="none" stroke="#334155" stroke-width="1.5"/><text x="174.7" y="90.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40°</text><path d="M 336.6 224.2 A 70 70 0 0 1 338.8 200" fill="none" stroke="#334155" stroke-width="1.5"/><text x="320.7" y="215.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20°</text><text x="63.5" y="257.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="121.3" y="133.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="228.6" y="161.9" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="249.8" y="241" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><text x="181.7" y="19.1" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">E</text><text x="422.4" y="223.1" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">F</text></svg>`;

const STAR = `<svg viewBox="0 0 480 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An irregular five-pointed star drawn with five straight lines. The angles at the five points of the star are labelled a, b, c, d and e."><rect x="0" y="0" width="480" height="330" fill="#ffffff"/><polygon points="227.8,30.5 139.6,260.3 382.7,123.3 117.8,118.8 312.5,281.9" fill="#bae6fd" fill-opacity="0.5" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><path d="M 217.1 58.5 A 30 30 0 0 0 237.4 58.9" fill="none" stroke="#334155" stroke-width="1.5"/><text x="227" y="75.5" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">a</text><circle cx="227.8" cy="30.5" r="3" fill="#1f2937"/><path d="M 140.8 138.1 A 30 30 0 0 0 147.8 119.3" fill="none" stroke="#334155" stroke-width="1.5"/><text x="155.3" y="137.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">b</text><circle cx="117.8" cy="118.8" r="3" fill="#1f2937"/><path d="M 165.8 245.6 A 30 30 0 0 0 150.4 232.3" fill="none" stroke="#334155" stroke-width="1.5"/><text x="165.8" y="235" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">c</text><circle cx="139.6" cy="260.3" r="3" fill="#1f2937"/><path d="M 302.9 253.5 A 30 30 0 0 0 289.5 262.6" fill="none" stroke="#334155" stroke-width="1.5"/><text x="289.9" y="253.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">d</text><circle cx="312.5" cy="281.9" r="3" fill="#1f2937"/><path d="M 352.7 122.8 A 30 30 0 0 0 356.5 138" fill="none" stroke="#334155" stroke-width="1.5"/><text x="343.9" y="138.1" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">e</text><circle cx="382.7" cy="123.3" r="3" fill="#1f2937"/></svg>`;

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK-CHECK QUIZ
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "angles-circle-theorems-quiz-q01",
      question:
        "Four angles meet at a point. They are 50°, 3x°, 2x° and 60°. Work out the value of x.",
      answer: { type: "number", value: 50 },
      solution: ["Angles around a point add up to 360°.", "50 + 3x + 2x + 60 = 360, so 5x + 110 = 360.", "5x = 250, so x = 50.", "Check: 50° + 150° + 100° + 60° = 360° ✓"],
      commonError: "Using 180° (angles on a straight line) instead of 360° (angles around a point).",
      traps: [{ spec: { type: "number", value: 14 }, feedback: "You used 180°. Angles around a point add up to 360°." }],
      difficulty: "warmup",
      guideRef: "angle-facts",
      hints: ["What do angles around a point add up to?", "Collect the x terms and the numbers: 5x + 110 = 360."],
      strategy: "Introduce a variable",
    },
    {
      kind: "mcq",
      id: "angles-circle-theorems-quiz-q02",
      question: "PQ and RS are parallel lines. Which statement gives the correct value of x **and** a correct reason?",
      diagram: ALTERNATE,
      options: [
        "x = 106°, because co-interior angles add up to 180°",
        "x = 74°, because corresponding angles are equal",
        "x = 74°, because alternate angles are equal",
        "x = 74°, because vertically opposite angles are equal",
      ],
      answerIndex: 2,
      explanation:
        "The 74° angle and x are on opposite sides of the transversal, both between the parallel lines — a Z-shape. That makes them **alternate** angles, so x = 74°. The value 74° is right in three options, but in an exam the reason must match the picture: corresponding angles make an F-shape (same position at each crossing), and vertically opposite angles share a vertex. 106° comes from treating them as co-interior.",
      difficulty: "warmup",
      guideRef: "angle-facts",
      hints: ["Trace the two angles with your finger. Do you draw a Z, an F or a C?", "Both angles are between the parallel lines, on opposite sides of the transversal."],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-quiz-q03",
      question: "Work out the size of each interior angle of a regular decagon (10 sides).",
      answer: { type: "number", value: 144, display: "144°" },
      solution: ["Each exterior angle = 360° ÷ 10 = 36°.", "Each interior angle = 180° − 36° = 144°."],
      solutions: [{ label: "Interior angle sum", steps: ["Sum = (10 − 2) × 180° = 1440°.", "Each angle = 1440° ÷ 10 = 144°."] }],
      commonError: "Stopping at 36°, which is the exterior angle.",
      traps: [{ spec: { type: "number", value: 36 }, feedback: "36° is the exterior angle. The interior angle is 180° minus that." }],
      difficulty: "warmup",
      guideRef: "polygons",
      hints: ["The exterior angles of any polygon add up to 360°.", "Interior + exterior = 180° at each vertex."],
      strategy: "Use the exterior angle",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-quiz-q04",
      question: "Each exterior angle of a regular polygon is 24°. How many sides does the polygon have?",
      answer: { type: "number", value: 15 },
      solution: ["The exterior angles add up to 360°.", "Number of sides = 360° ÷ 24° = 15."],
      commonError: "Dividing 180 by 24, which mixes up the angles on a line with the full turn of the exterior angles.",
      traps: [{ spec: { type: "number", value: 7.5 }, feedback: "A polygon can't have 7.5 sides. The exterior angles add up to 360°, not 180°." }],
      difficulty: "core",
      guideRef: "polygons",
      hints: ["Walk round the polygon: how far do you turn in total?", "The exterior angles add up to 360°. How many lots of 24° is that?"],
      strategy: "Use the inverse",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-quiz-q05",
      question: "A, B and C are points on a circle with centre O. Angle ACB = 38°. Work out the size of angle AOB.",
      diagram: CENTRE,
      answer: { type: "number", value: 76, display: "76°" },
      solution: ["Angle AOB (at the centre) and angle ACB (at the circumference) stand on the same arc AB.", "The angle at the centre is twice the angle at the circumference: AOB = 2 × 38° = 76°."],
      commonError: "Halving instead of doubling — the angle at the centre is the bigger one.",
      traps: [{ spec: { type: "number", value: 19 }, feedback: "You halved. The angle at the centre is *twice* the angle at the circumference." }],
      difficulty: "core",
      guideRef: "circle-theorems-1",
      hints: ["Which arc do both angles stand on?", "Angle at the centre = 2 × angle at the circumference."],
      strategy: "Spot the theorem",
    },
    {
      kind: "mcq",
      id: "angles-circle-theorems-quiz-q06",
      question: "A, B, C and D are points on a circle, with B and C on the same side of the chord AD. Angle ABD = (3x − 10)° and angle ACD = (x + 30)°. What is the size of angle ABD?",
      options: ["50°", "20°", "110°", "100°"],
      answerIndex: 0,
      explanation:
        "Angles ABD and ACD both stand on chord AD, with B and C on the same side of it, so they are equal (angles in the same segment are equal): 3x − 10 = x + 30, so 2x = 40 and x = 20. Angle ABD = 3 × 20 − 10 = 50°. 20° is x, not the angle. 110° comes from making the angles add up to 180° (that is for opposite angles of a cyclic quadrilateral, when B and C are on *opposite* sides of AD). 100° doubles 50°, which is the rule for an angle at the centre.",
      difficulty: "core",
      guideRef: "circle-theorems-1",
      hints: ["Both angles stand on the same chord, AD. Are B and C on the same side of it?", "Angles in the same segment are equal: set 3x − 10 = x + 30.", "Solve for x, then substitute back into 3x − 10."],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-quiz-q07",
      question: "ABCD is a cyclic quadrilateral. Angle DAB is 3 times the size of angle BCD. Work out the size of angle BCD, in degrees.",
      answer: { type: "number", value: 45, display: "45°" },
      solution: [
        "A and C are opposite vertices, and opposite angles of a cyclic quadrilateral add up to 180°.",
        "Let angle BCD = y. Then angle DAB = 3y, so 3y + y = 180.",
        "4y = 180, so y = 45. Angle BCD = 45°.",
        "Check: angle DAB = 135°, and 135° + 45° = 180° ✓",
      ],
      commonError: "Using 360° for the pair of opposite angles (giving 90°) — 360° is the sum of all four angles.",
      traps: [
        { spec: { type: "number", value: 90 }, feedback: "You used 360°. Only the *opposite pair* is involved, and opposite angles of a cyclic quadrilateral add up to 180°." },
        { spec: { type: "number", value: 135 }, feedback: "135° is angle DAB. The question asks for angle BCD." },
      ],
      difficulty: "core",
      guideRef: "circle-theorems-2",
      hints: ["Are A and C next to each other or opposite?", "Opposite angles of a cyclic quadrilateral add up to 180°.", "Call angle BCD y, so angle DAB = 3y. Form an equation."],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-quiz-q08",
      question:
        "TA and TB are tangents to a circle with centre O, touching the circle at A and B. Angle ATB = 56°. Work out the size of angle OAB.",
      answer: { type: "number", value: 28, display: "28°" },
      solution: [
        "Tangents from an external point are equal (TA = TB), so triangle TAB is isosceles: angle TAB = (180° − 56°) ÷ 2 = 62°.",
        "A tangent is perpendicular to the radius, so angle OAT = 90°.",
        "Angle OAB = 90° − 62° = 28°.",
      ],
      solutions: [
        { label: "Via the centre", steps: ["OATB has angles 90°, 90° and 56°, so angle AOB = 360° − 236° = 124°.", "OA = OB (radii), so OAB = (180° − 124°) ÷ 2 = 28°."] },
      ],
      commonError: "Giving 62°, which is angle TAB, not angle OAB.",
      traps: [{ spec: { type: "number", value: 62 }, feedback: "62° is angle TAB. Angle OAB is what is left of the 90° angle OAT." }],
      difficulty: "core",
      guideRef: "circle-theorems-2",
      hints: ["Sketch it. Which two lengths from T are equal?", "Triangle TAB is isosceles, and angle OAT = 90°.", "Find angle TAB, then subtract it from 90°."],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-quiz-q09",
      question: "Chords AB and CD of a circle intersect at P. AP = 8 cm, PB = 6 cm and CP = 4 cm. Work out the length of PD in cm.",
      answer: { type: "number", value: 12, display: "12 cm" },
      solution: ["Intersecting chords: AP × PB = CP × PD.", "8 × 6 = 4 × PD, so 48 = 4 × PD.", "PD = 12 cm."],
      commonError: "Using a ratio AP : CP = PB : PD, which gives 3 cm.",
      traps: [{ spec: { type: "number", value: 3 }, feedback: "The rule is about products of the two parts of each chord: AP × PB = CP × PD." }],
      difficulty: "core",
      guideRef: "chords",
      hints: ["Each chord is cut into two parts at P. What do you do with the two parts?", "AP × PB = CP × PD."],
      strategy: "Spot the theorem",
    },
    {
      kind: "mcq",
      id: "angles-circle-theorems-quiz-q10",
      question: "A and B are two fixed points. Which describes the locus of all points that are the same distance from A as from B?",
      options: ["A circle with diameter AB", "The straight line through A and B", "A line parallel to AB", "The perpendicular bisector of AB"],
      answerIndex: 3,
      explanation:
        "Every point on the perpendicular bisector of AB is equidistant from A and B (and no other point is). The circle with diameter AB is the locus of points P where angle APB = 90°; the line through A and B only contains one equidistant point, the midpoint; and a line parallel to AB has points much nearer one end than the other.",
      difficulty: "warmup",
      guideRef: "constructions-loci",
      hints: ["Find one equidistant point (the midpoint). Now find another one above it — where does the set of points go?"],
      strategy: "Try small cases",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS
  // =========================================================================
  papers: [
    {
      id: "angles-circle-theorems-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q01",
          question: "Three angles lie together on a straight line. They are 3x°, (2x + 15)° and (x + 45)°. Work out the value of x.",
          answer: { type: "number", value: 20 },
          solution: ["Angles on a straight line add up to 180°.", "3x + 2x + 15 + x + 45 = 180", "6x + 60 = 180, so 6x = 120 and x = 20.", "Check: 60° + 55° + 65° = 180°."],
          commonError: "Using 360° (angles around a point) instead of 180°.",
          traps: [{ spec: { type: "number", value: 50 }, feedback: "You used 360°. Angles on a straight line add up to 180°." }],
          difficulty: "warmup",
          guideRef: "angle-facts",
          hints: ["What do angles on a straight line add up to?", "Collect the x terms and the numbers: 6x + 60 = 180."],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q02",
          question: "The two lines marked with arrows are parallel. Work out the size of angle x.",
          diagram: COINTERIOR,
          answer: { type: "number", value: 122, display: "122°" },
          solution: ["The 58° angle and x are both between the parallel lines, on the same side (left) of the transversal.", "They are co-interior angles, which add up to 180°.", "x = 180° − 58° = 122°."],
          commonError: "Calling them alternate angles and writing x = 58°.",
          traps: [{ spec: { type: "number", value: 58 }, feedback: "These angles make a C-shape, not a Z-shape. Co-interior angles add up to 180°." }],
          difficulty: "warmup",
          guideRef: "angle-facts",
          hints: ["Trace the two angles: is it a Z, an F or a C shape?", "C-shape → co-interior → they add to 180°."],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q03",
          question: "Work out the sum of the interior angles of an octagon.",
          answer: { type: "number", value: 1080, display: "1080°" },
          solution: ["An octagon can be split into 8 − 2 = 6 triangles from one vertex.", "Sum = 6 × 180° = 1080°."],
          commonError: "Using n × 180° = 1440°, which counts two triangles too many.",
          traps: [{ spec: { type: "number", value: 1440 }, feedback: "From one vertex you can only make n − 2 triangles, so the sum is (8 − 2) × 180°." }],
          difficulty: "warmup",
          guideRef: "polygons",
          hints: ["How many triangles can you split an octagon into by drawing diagonals from one vertex?"],
          strategy: "Make it simpler",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q04",
          question: "A, B and C are points on a circle with centre O. C is on the major arc AB. Angle AOB = 148°. Work out the size of angle ACB.",
          answer: { type: "number", value: 74, display: "74°" },
          solution: ["Angles AOB and ACB stand on the same arc AB.", "The angle at the centre is twice the angle at the circumference, so ACB = 148° ÷ 2 = 74°."],
          commonError: "Doubling instead of halving (296°).",
          traps: [{ spec: { type: "number", value: 296 }, feedback: "The angle at the circumference is the *smaller* one — halve the angle at the centre." }],
          difficulty: "warmup",
          guideRef: "circle-theorems-1",
          hints: ["Which angle is at the centre and which is at the circumference? The one at the centre is twice the other."],
          strategy: "Spot the theorem",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q05",
          question: "Each interior angle of a regular polygon is 162°. Work out the number of sides of the polygon.",
          answer: { type: "number", value: 20 },
          solution: ["Each exterior angle = 180° − 162° = 18°.", "Number of sides = 360° ÷ 18° = 20."],
          solutions: [{ label: "Interior sum equation", steps: ["(n − 2) × 180 = 162n", "180n − 360 = 162n, so 18n = 360 and n = 20."] }],
          commonError: "Giving 18, the exterior angle, as the number of sides.",
          traps: [{ spec: { type: "number", value: 18 }, feedback: "18° is the exterior angle. How many of them make 360°?" }],
          difficulty: "core",
          guideRef: "polygons",
          hints: ["It is easier to work with the exterior angle. What is it?", "Exterior angle = 18°. The exterior angles add up to 360°."],
          strategy: "Use the exterior angle",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q06",
          question:
            "The interior angles of a pentagon are x°, (x + 20)°, 2x°, (2x + 10)° and (3x − 30)°. Work out the size of the largest angle of the pentagon.",
          answer: { type: "number", value: 150, display: "150°" },
          solution: [
            "Interior angles of a pentagon add up to (5 − 2) × 180° = 540°.",
            "x + x + 20 + 2x + 2x + 10 + 3x − 30 = 540, so 9x = 540 and x = 60.",
            "The angles are 60°, 80°, 120°, 130° and 150°. The largest is 150°.",
          ],
          commonError: "Stopping at x = 60 instead of finding the largest angle.",
          traps: [
            { spec: { type: "number", value: 60 }, feedback: "That's x. Substitute it into every angle and pick the largest." },
            { spec: { type: "number", value: 90 }, feedback: "It looks as if you used 360°. A pentagon's interior angles add up to 540°." },
          ],
          difficulty: "core",
          guideRef: "polygons",
          hints: ["What is the interior angle sum of a pentagon?", "Add all five expressions and set equal to 540.", "x = 60; now work out each angle."],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q07",
          question: "A, B and C are points on a circle with centre O. Angle OAB = 34°. Work out the size of angle ACB.",
          diagram: ISOSCELES_RADII,
          answer: { type: "number", value: 56, display: "56°" },
          solution: [
            "OA = OB (radii), so triangle OAB is isosceles and angle OBA = 34° (base angles of an isosceles triangle are equal).",
            "Angle AOB = 180° − 34° − 34° = 112° (angles in a triangle add up to 180°).",
            "The angle at the centre is twice the angle at the circumference: ACB = 112° ÷ 2 = 56°.",
          ],
          commonError: "Stopping at angle AOB = 112°.",
          traps: [
            { spec: { type: "number", value: 112 }, feedback: "112° is angle AOB at the centre. Angle ACB at the circumference is half of it." },
            { spec: { type: "number", value: 68 }, feedback: "Angle ACB is not 2 × 34°. Find angle AOB first using the isosceles triangle OAB." },
          ],
          difficulty: "core",
          guideRef: "circle-theorems-1",
          hints: ["Which two lines in triangle OAB are radii?", "Triangle OAB is isosceles — find angle AOB.", "Find angle AOB; ACB is half of that."],
          strategy: "Look for isosceles triangles",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q08",
          question: "ABCD is a cyclic quadrilateral with AB = AD. DC is extended to E. Angle BCE = 74°. Work out the size of angle ABD.",
          diagram: CYCLIC_EXT,
          answer: { type: "number", value: 53, display: "53°" },
          solution: [
            "Angle BCD = 180° − 74° = 106° (angles on a straight line).",
            "Angle BAD = 180° − 106° = 74° (opposite angles of a cyclic quadrilateral add up to 180°).",
            "AB = AD, so triangle ABD is isosceles: ABD = (180° − 74°) ÷ 2 = 53°.",
          ],
          commonError: "Assuming angle ABD = 74° because it's 'opposite' the exterior angle.",
          traps: [{ spec: { type: "number", value: 74 }, feedback: "74° is angle BAD. Triangle ABD is isosceles — share the remaining 106° between its two base angles." }],
          difficulty: "core",
          guideRef: "circle-theorems-2",
          hints: ["Find angle BCD first.", "Which angle of the cyclic quadrilateral is opposite BCD?", "Angle BAD = 74°, and triangle ABD is isosceles."],
          strategy: "Work forwards from what you know",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q09",
          question: "A, B and C are points on a circle with centre O. ST is the tangent to the circle at A. Angle TAB = 63° and angle BAC = 52°. Work out the size of angle ABC.",
          diagram: ALT_SEGMENT,
          answer: { type: "number", value: 65, display: "65°" },
          solution: [
            "Alternate segment theorem: the angle between the tangent and chord AB equals the angle in the alternate segment, so ACB = TAB = 63°.",
            "Angles in triangle ABC: ABC = 180° − 52° − 63° = 65°.",
          ],
          solutions: [
            { label: "Use the other side of the tangent", steps: ["Angles on the straight line SAT: SAC = 180° − 63° − 52° = 65°.", "By the alternate segment theorem with chord AC, ABC = SAC = 65°."] },
          ],
          commonError: "Matching the tangent angle with the wrong angle in the triangle (writing ABC = 63°).",
          traps: [{ spec: { type: "number", value: 63 }, feedback: "The angle TAB (between the tangent and chord AB) equals the angle *opposite chord AB*, which is ACB, not ABC." }],
          difficulty: "core",
          guideRef: "circle-theorems-2",
          hints: ["Which chord makes the 63° angle with the tangent?", "The angle between tangent and chord AB equals the angle that AB subtends in the other segment — at C.", "ACB = 63°; finish with the angle sum of triangle ABC."],
          strategy: "Spot the theorem",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q10",
          question: "A circle has radius 15 cm. A chord of the circle has length 24 cm. Work out the perpendicular distance from the centre of the circle to the chord, in cm.",
          answer: { type: "number", value: 9, display: "9 cm" },
          solution: [
            "The perpendicular from the centre bisects the chord, giving a right-angled triangle with hypotenuse 15 cm (a radius) and one side 12 cm (half the chord).",
            "{{d^2 = 15^2 - 12^2 = 225 - 144 = 81}}",
            "d = 9 cm.",
          ],
          commonError: "Using the whole chord (24 cm) in Pythagoras instead of half of it.",
          traps: [{ spec: { type: "number", value: 19.2, tolerance: 0.05 }, feedback: "The radius is the hypotenuse, so subtract the squares: {{15^2 - 12^2}}, not {{15^2 + 12^2}}." }],
          difficulty: "core",
          guideRef: "chords",
          hints: ["Draw the radius to one end of the chord and the perpendicular from O to the chord.", "The perpendicular cuts the chord in half — use 12 cm.", "Pythagoras with hypotenuse 15 cm: {{d^2 = 15^2 - 12^2}}."],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q11",
          question: "A is the point (2, 1) and B is the point (8, 5). Find an equation of the perpendicular bisector of AB.",
          answer: { type: "equation", eq: "3x+2y-21=0", display: "{{y = -3/2 x + 21/2}} (or 3x + 2y = 21)" },
          solution: [
            "Midpoint of AB = ({{(2 + 8)/2}}, {{(1 + 5)/2}}) = (5, 3).",
            "Gradient of AB = {{(5 - 1)/(8 - 2) = 4/6 = 2/3}}.",
            "Perpendicular gradient = {{-3/2}} (negative reciprocal).",
            "{{y - 3 = -3/2 (x - 5)}}, so 2y − 6 = −3x + 15, i.e. 3x + 2y = 21.",
          ],
          commonError: "Using the gradient of AB itself (2/3) instead of the perpendicular gradient.",
          traps: [{ spec: { type: "equation", eq: "2x-3y-1=0" }, feedback: "This line goes through the midpoint but is parallel to AB. A perpendicular bisector needs the negative reciprocal gradient." }],
          difficulty: "core",
          guideRef: "constructions-loci",
          hints: ["A perpendicular bisector goes through the midpoint and is at right angles to AB.", "Find the midpoint and the gradient of AB.", "Perpendicular gradient = {{-1/m}}. Use {{y - y_1 = m(x - x_1)}}."],
          strategy: "Translate the construction into coordinates",
        },
        {
          kind: "written",
          id: "angles-circle-theorems-p1-q12",
          question:
            "To construct the perpendicular bisector of a line segment AB, Mei opens her compasses to more than half of AB. Keeping the same radius, she draws an arc from A and an arc from B, above and below AB. The arcs cross at P and Q. She joins P to Q.\n\nExplain why PQ is the perpendicular bisector of AB.",
          marks: 3,
          modelAnswer:
            "All four arcs have the same radius, so AP = BP = AQ = BQ. That means P is the same distance from A as from B, and so is Q. Quadrilateral APBQ has four equal sides, so it is a rhombus. The diagonals of a rhombus bisect each other at right angles, so PQ crosses AB at its midpoint and at 90°. So PQ is the perpendicular bisector of AB.",
          markScheme: [
            { point: "Same compass radius, so AP = BP = AQ = BQ (P and Q are equidistant from A and B)", keywords: ["same radius", "equal", "ap = bp", "aq = bq", "equidistant", "compass"] },
            { point: "APBQ is a rhombus (or triangles APQ and BPQ are congruent, SSS)", keywords: ["rhombus", "congruent", "sss", "four equal sides"] },
            { point: "Diagonals of a rhombus bisect at right angles, so PQ meets AB at its midpoint at 90°", keywords: ["right angle", "90", "perpendicular", "bisect", "midpoint"] },
          ],
          commonError: "Just describing the steps of the construction again, without saying why it works.",
          difficulty: "core",
          guideRef: "constructions-loci",
          hints: ["What do you know about the lengths AP, BP, AQ and BQ?", "What kind of quadrilateral has four equal sides?", "What do the diagonals of that shape do?"],
          strategy: "Name the shape",
        },
        {
          kind: "written",
          id: "angles-circle-theorems-p1-q13",
          question:
            "A, B and C are points on a circle with centre O. O lies **outside** triangle ABC, and A and B are on the same side of the line CO.\n\nProve that angle AOB = 2 × angle ACB.",
          marks: 4,
          modelAnswer:
            "Label the points so that CB lies between CO and CA (if not, swap the letters A and B). Let angle OCA = x and angle OCB = y, so angle ACB = x − y. Join C to O and extend the line to a point D on the circle. OA = OC (radii), so triangle OAC is isosceles and angle OAC = x (base angles of an isosceles triangle are equal). Angle AOD is an exterior angle of triangle OAC, so angle AOD = x + x = 2x (the exterior angle of a triangle equals the sum of the two interior opposite angles). Similarly, OB = OC (radii), so angle OBC = y and angle BOD = 2y. Therefore angle AOB = angle AOD − angle BOD = 2x − 2y = 2(x − y) = 2 × angle ACB.",
          markScheme: [
            { point: "Joins CO (extended to D) and uses OA = OC (radii), so triangle OAC is isosceles with angle OAC = x", keywords: ["radii", "radius", "isosceles", "oa = oc", "extend"] },
            { point: "Angle AOD = 2x (exterior angle of triangle OAC)", keywords: ["2x", "exterior angle", "180 - 2x"] },
            { point: "Similarly OB = OC, so angle BOD = 2y", keywords: ["2y", "ob = oc", "similarly"] },
            { point: "Subtracts: AOB = 2x − 2y = 2(x − y) = 2 × angle ACB", keywords: ["2(x - y)", "2x - 2y", "2x − 2y", "x - y", "x − y", "subtract", "2 × acb"] },
          ],
          commonError: "Copying the 'O inside' proof and adding the two angles — when O is outside angle ACB the two parts must be subtracted. Quoting the theorem itself as a reason is circular.",
          difficulty: "challenge",
          guideRef: "circle-proofs",
          hints: [
            "Draw a sketch with O outside triangle ABC. Draw the line from C through O and extend it to D.",
            "OA, OB and OC are all radii, so triangles OAC and OBC are isosceles. Let angle OCA = x and angle OCB = y. What is angle ACB in terms of x and y?",
            "Angle AOD is an exterior angle of triangle OAC, so it equals x + x. Find angle BOD in the same way.",
            "Is angle AOB the sum or the difference of angles AOD and BOD?",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p1-q14",
          question:
            "T is a point outside a circle. TA is a tangent to the circle at A. A straight line from T cuts the circle at B and then at C, so that B lies between T and C. TB = 5 cm and BC = 7 cm.\n\nWork out the exact length of TA. Give your answer as a surd in its simplest form.",
          answer: { type: "expression", expr: "2sqrt(15)", form: "surd", display: "{{2sqrt(15)}} cm" },
          solution: [
            "Tangent–secant theorem: {{TA^2 = TB * TC}}.",
            "TC = TB + BC = 5 + 7 = 12 cm.",
            "{{TA^2 = 5 * 12 = 60}}, so {{TA = sqrt(60) = sqrt(4 * 15) = 2sqrt(15)}} cm.",
          ],
          commonError: "Using TB × BC (= 35) instead of TB × TC — both lengths must be measured from T.",
          traps: [{ spec: { type: "expression", expr: "sqrt(35)" }, feedback: "Both lengths are measured from T: use TB × TC = 5 × 12, not 5 × 7." }],
          difficulty: "challenge",
          guideRef: "chords",
          hints: ["Which theorem links a tangent and a line cutting the circle from the same outside point?", "{{TA^2 = TB * TC}} — measure both lengths from T.", "TC = 12, so {{TA^2 = 60}}. Simplify {{sqrt(60)}}."],
          strategy: "Spot the theorem",
        },
        {
          kind: "written",
          id: "angles-circle-theorems-p1-q15",
          question:
            "A, B and C are points on a circle with centre O, with B on the major arc AC. The tangents to the circle at A and at C meet at T. Angle ABC = y.\n\nProve that angle ATC = 180° − 2y. Give a reason for each stage of your working.",
          diagram: TWO_TANGENTS,
          marks: 3,
          modelAnswer:
            "Angle AOC = 2y, because the angle at the centre is twice the angle at the circumference (both stand on arc AC). Angle OAT = angle OCT = 90°, because a tangent is perpendicular to the radius at the point of contact. The angles in quadrilateral OATC add up to 360°, so angle ATC = 360° − 90° − 90° − 2y = 180° − 2y.",
          markScheme: [
            { point: "Angle AOC = 2y with reason: angle at centre is twice angle at circumference", keywords: ["2y", "angle at the centre", "twice", "circumference"] },
            { point: "Angles OAT and OCT are 90° with reason: tangent perpendicular to radius", keywords: ["90", "tangent", "perpendicular", "radius"] },
            { point: "Angle sum of quadrilateral 360° leading to 180 − 2y", keywords: ["360", "quadrilateral", "180 - 2y", "180 − 2y"] },
          ],
          commonError: "Writing the correct angles without the reasons — in a 'give reasons' question, unexplained steps lose marks.",
          difficulty: "challenge",
          guideRef: "circle-theorems-2",
          hints: ["Which angle at the centre is linked to angle ABC?", "What angle does a tangent make with a radius?", "Look at the four-sided shape OATC."],
          strategy: "Work forwards from what you know",
        },
      ],
    },
    {
      id: "angles-circle-theorems-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "angles-circle-theorems-p2-q01",
          question: "In triangle PQR, the side QR is extended to S. Angle PRS = 115° and angle QPR = 48°. Work out the size of angle PQR.",
          answer: { type: "number", value: 67, display: "67°" },
          solution: ["The exterior angle of a triangle equals the sum of the two interior opposite angles.", "115° = 48° + PQR, so PQR = 67°."],
          solutions: [{ label: "Straight line, then triangle", steps: ["Angle PRQ = 180° − 115° = 65°.", "PQR = 180° − 48° − 65° = 67°."] }],
          commonError: "Subtracting both angles from 180° (getting 17°) — 115° is outside the triangle.",
          traps: [{ spec: { type: "number", value: 17 }, feedback: "115° is the exterior angle, not an angle of the triangle. Find angle PRQ first, or use the exterior angle rule." }],
          difficulty: "warmup",
          guideRef: "angle-facts",
          hints: ["Sketch it. Is the 115° angle inside or outside the triangle?", "Exterior angle = sum of the two interior opposite angles."],
          strategy: "Draw a diagram",
        },
        {
          kind: "mcq",
          id: "angles-circle-theorems-p2-q02",
          question:
            "A transversal crosses two parallel lines. Angles p and q both lie between the parallel lines, on the same side of the transversal. Which statement must be true?",
          options: ["p = q", "p + q = 180°", "p + q = 90°", "p + q = 360°"],
          answerIndex: 1,
          explanation:
            "Angles between the parallel lines on the same side of the transversal are **co-interior** (a C-shape), and co-interior angles add up to 180°. p = q would be true for alternate or corresponding angles; 360° is the sum of angles around a point.",
          difficulty: "warmup",
          guideRef: "angle-facts",
          hints: ["Sketch two parallel lines and a slanted transversal. Mark two angles inside, on the same side.", "Is it a Z, an F or a C?"],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p2-q03",
          question: "Work out the size of each interior angle of a regular nonagon (9 sides).",
          answer: { type: "number", value: 140, display: "140°" },
          solution: ["Exterior angle = 360° ÷ 9 = 40°.", "Interior angle = 180° − 40° = 140°."],
          commonError: "Giving 40°, the exterior angle.",
          traps: [{ spec: { type: "number", value: 40 }, feedback: "40° is the exterior angle. Subtract it from 180°." }],
          difficulty: "warmup",
          guideRef: "polygons",
          hints: ["Find the exterior angle first: 360° shared between 9 vertices."],
          strategy: "Use the exterior angle",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p2-q04",
          question: "AB is a diameter of a circle and C is a point on the circle. Angle CAB = 2x° and angle CBA = 3x°. Work out the value of x.",
          answer: { type: "number", value: 18 },
          solution: ["The angle in a semicircle is 90°, so angle ACB = 90°.", "The other two angles of triangle ABC add up to 90°: 2x + 3x = 90.", "5x = 90, so x = 18."],
          commonError: "Forgetting the right angle and solving 5x = 180.",
          traps: [{ spec: { type: "number", value: 36 }, feedback: "Triangle ABC already has a 90° angle at C (angle in a semicircle), so 2x + 3x = 90." }],
          difficulty: "warmup",
          guideRef: "circle-theorems-1",
          hints: ["What is the angle at C, given that AB is a diameter?", "2x + 3x + 90 = 180."],
          strategy: "Spot the theorem",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p2-q05",
          question:
            "Two copies of a regular polygon P and one equilateral triangle fit together exactly around a point, with no gaps and no overlaps. How many sides does P have?",
          answer: { type: "number", value: 12 },
          solution: [
            "Angles around a point add up to 360°. The equilateral triangle contributes 60°.",
            "So two interior angles of P make 360° − 60° = 300°, and each is 150°.",
            "Exterior angle = 180° − 150° = 30°, so P has 360° ÷ 30° = 12 sides (a regular dodecagon).",
          ],
          commonError: "Giving the interior angle (150) instead of the number of sides.",
          traps: [{ spec: { type: "number", value: 150 }, feedback: "150° is the interior angle of P. Now find how many sides a regular polygon with that angle has." }],
          difficulty: "core",
          guideRef: "polygons",
          hints: ["What do the angles around the meeting point add up to?", "Two interior angles of P plus 60° = 360°.", "Find one interior angle of P. What is the exterior angle?"],
          strategy: "Work backwards",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p2-q06",
          question: "ABCDEF is a regular hexagon. ABGH is a square drawn on the outside of the hexagon. F is joined to H. Work out the size of angle x.",
          diagram: HEX_SQUARE,
          answer: { type: "number", value: 15, display: "15°" },
          solution: [
            "Interior angle of a regular hexagon = 120°, so angle FAB = 120°. Angle BAH = 90° (square).",
            "Angles around point A: angle FAH = 360° − 120° − 90° = 150°.",
            "AF = AB = AH (sides of the hexagon and the square are equal), so triangle AFH is isosceles.",
            "x = (180° − 150°) ÷ 2 = 15°.",
          ],
          commonError: "Missing that AF = AH, so not spotting the isosceles triangle.",
          traps: [{ spec: { type: "number", value: 150 }, feedback: "150° is angle FAH. Triangle AFH is isosceles — share the remaining 30° between the base angles." }],
          difficulty: "core",
          guideRef: "polygons",
          hints: ["What are the angles at A from the hexagon and from the square?", "Angle FAH = 360° − 120° − 90°.", "AF and AH are both equal to AB. What type of triangle is AFH?"],
          strategy: "Look for isosceles triangles",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p2-q07",
          question: "A, B, C and D lie on a circle. The chords AC and BD meet at X. Angle BAC = 35° and angle ACD = 48°. Work out the size of angle AXB.",
          diagram: CROSSED_CHORDS,
          answer: { type: "number", value: 97, display: "97°" },
          solution: [
            "Angles in the same segment are equal: ABD and ACD both stand on arc AD, so angle ABX = 48°.",
            "In triangle ABX: AXB = 180° − 35° − 48° = 97°.",
          ],
          solutions: [
            { label: "Use triangle DXC", steps: ["Angles BDC and BAC stand on arc BC, so angle XDC = 35°.", "Angle DXC = 180° − 35° − 48° = 97°.", "AXB = DXC = 97° (vertically opposite)."] },
          ],
          commonError: "Adding 35° and 48° and giving 83° — that is the sum of two angles, not the third angle.",
          traps: [{ spec: { type: "number", value: 83 }, feedback: "35° + 48° = 83° is the sum of the other two angles of the triangle. The angle at X is 180° minus that." }],
          difficulty: "core",
          guideRef: "circle-theorems-1",
          hints: ["Angle ACD stands on arc AD. Which other angle stands on the same arc?", "Angle ABD = 48° (same segment).", "Use the angle sum of triangle ABX."],
          strategy: "Spot the theorem",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p2-q08",
          question:
            "TA and TB are tangents from a point T to a circle, touching it at A and B. C is a point on the major arc AB. Angle ATB = 64°. Work out the size of angle ACB.",
          answer: { type: "number", value: 58, display: "58°" },
          solution: [
            "TA = TB (tangents from an external point are equal), so triangle TAB is isosceles and angle TAB = (180° − 64°) ÷ 2 = 58°.",
            "Alternate segment theorem: angle ACB = angle TAB = 58°.",
          ],
          solutions: [
            { label: "Via the centre O", steps: ["Angles OAT and OBT are 90° (a tangent is perpendicular to the radius).", "Angle AOB = 360° − 90° − 90° − 64° = 116° (angles in a quadrilateral add up to 360°).", "ACB = 116° ÷ 2 = 58° (the angle at the centre is twice the angle at the circumference)."] },
          ],
          commonError: "Giving 116° (the angle at the centre) or 32° (half of 64°).",
          traps: [
            { spec: { type: "number", value: 116 }, feedback: "116° is angle AOB at the centre. The angle at C is half of that." },
            { spec: { type: "number", value: 32 }, feedback: "The 64° angle is outside the circle — it isn't an angle at the centre, so you can't just halve it." },
          ],
          difficulty: "core",
          guideRef: "circle-theorems-2",
          hints: ["Which two lengths are equal?", "Triangle TAB is isosceles: find angle TAB.", "The alternate segment theorem links angle TAB to an angle at C."],
          strategy: "Look for isosceles triangles",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p2-q09",
          question:
            "A, B, C and D are points on a circle with centre O. B is on the major arc AC and D is on the minor arc AC. Angle AOC = 140°. Work out the size of angle ADC.",
          diagram: CENTRE_CYCLIC,
          answer: { type: "number", value: 110, display: "110°" },
          solution: [
            "Angle ABC = 140° ÷ 2 = 70° (angle at the centre is twice the angle at the circumference).",
            "ABCD is a cyclic quadrilateral, so ADC = 180° − 70° = 110° (opposite angles add to 180°).",
          ],
          solutions: [{ label: "Use the reflex angle", steps: ["Reflex angle AOC = 360° − 140° = 220°.", "D stands on the major arc AC, so ADC = 220° ÷ 2 = 110°."] }],
          commonError: "Halving 140° and stopping at 70° — that is the angle at B, not at D.",
          traps: [
            { spec: { type: "number", value: 70 }, feedback: "70° is angle ABC. D is on the other side of AC, so it's the opposite angle of a cyclic quadrilateral." },
            { spec: { type: "number", value: 140 }, feedback: "The angle at D is not equal to the angle at the centre." },
          ],
          difficulty: "core",
          guideRef: "circle-theorems-2",
          hints: ["Which angle at the circumference is half of 140°?", "ABCD is a cyclic quadrilateral.", "ADC = 180° − ABC."],
          strategy: "Spot the theorem",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p2-q10",
          question:
            "P is a point outside a circle. One line from P cuts the circle at A and then B, with PA = 6 cm and AB = 10 cm. Another line from P cuts the circle at C and then D, with PC = 8 cm. Work out the length of CD in cm.",
          answer: { type: "number", value: 4, display: "4 cm" },
          solution: [
            "Intersecting chords (outside the circle): PA × PB = PC × PD, with every length measured from P.",
            "PB = 6 + 10 = 16, so 6 × 16 = 8 × PD, giving 96 = 8 × PD and PD = 12 cm.",
            "CD = PD − PC = 12 − 8 = 4 cm.",
          ],
          commonError: "Multiplying PA by AB (the chord) instead of PA by PB (the whole distance from P).",
          traps: [
            { spec: { type: "number", value: 12 }, feedback: "12 cm is PD. The question asks for CD = PD − PC." },
            { spec: { type: "number", value: 7.5 }, feedback: "Measure both lengths from P: PA × PB = 6 × 16, not PA × AB = 6 × 10." },
          ],
          difficulty: "core",
          guideRef: "chords",
          hints: ["Where are all the lengths in the rule measured from?", "PA × PB = PC × PD. What is PB?", "Find PD, then subtract PC to get CD."],
          strategy: "Spot the theorem",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p2-q11",
          question:
            "A rectangular lotus pond at the Botanic Gardens measures 6 m by 4 m. A path is made of all the points outside the pond that are within 2 m of the edge of the pond. Work out the exact area of the path. Give your answer in the form a + bπ, in m².",
          answer: { type: "expression", expr: "40+4pi", display: "{{40 + 4pi}} m² (≈ 52.6 m²)" },
          solution: [
            "Along each side the locus is a rectangle 2 m wide: 2 × (6 × 2) + 2 × (4 × 2) = 24 + 16 = 40 m².",
            "At each corner the points within 2 m of the corner make a quarter circle of radius 2 m. Four quarters = one full circle: {{pi * 2^2 = 4pi}} m².",
            "Total area = {{40 + 4pi}} m².",
          ],
          commonError: "Drawing square corners (a 10 m × 8 m rectangle) and getting 56 m² — the corner points are within 2 m of a *point*, so the corners are rounded.",
          traps: [{ spec: { type: "number", value: 56 }, feedback: "Your corners are square. The points within 2 m of a corner of the pond form a quarter circle, so the corners of the path are rounded." }],
          difficulty: "core",
          guideRef: "constructions-loci",
          hints: ["Sketch the pond and the boundary 2 m out. What shape is the boundary next to a straight side? Next to a corner?", "Straight sides give rectangles; corners give quarter circles.", "Four quarter circles of radius 2 make one whole circle."],
          strategy: "Draw a diagram",
        },
        {
          kind: "written",
          id: "angles-circle-theorems-p2-q12",
          question:
            "A, B and C are points on a circle with centre O. AB is a diameter. Angle CAB = 32°.\n\nWork out the size of angle OCB. Give a reason for each stage of your working.",
          diagram: SEMICIRCLE,
          marks: 3,
          modelAnswer:
            "Angle ACB = 90°, because the angle in a semicircle is a right angle. OA = OC because they are radii, so triangle OAC is isosceles and angle OCA = angle OAC = 32° (base angles of an isosceles triangle are equal). So angle OCB = 90° − 32° = 58°.",
          markScheme: [
            { point: "Angle ACB = 90° with reason: angle in a semicircle", keywords: ["90", "semicircle", "diameter"] },
            { point: "Angle OCA = 32° with reason: OA = OC radii, isosceles triangle", keywords: ["32", "radii", "radius", "isosceles", "oa = oc"] },
            { point: "Angle OCB = 58°", keywords: ["58"] },
          ],
          commonError: "Giving the correct answer (58°) with no reasons — that scores only one of the three marks.",
          difficulty: "core",
          guideRef: "circle-theorems-1",
          hints: ["AB is a diameter. What is angle ACB?", "Which two lines from O are equal? What does that tell you about triangle OAC?", "Angle OCB = angle ACB − angle OCA."],
          strategy: "Look for isosceles triangles",
        },
        {
          kind: "written",
          id: "angles-circle-theorems-p2-q13",
          question:
            "TA and TB are tangents from an external point T to a circle with centre O. They touch the circle at A and B.\n\nProve that TA = TB, and hence prove that the line OT is the perpendicular bisector of the chord AB.",
          marks: 4,
          modelAnswer:
            "Join OA, OB and OT. Angle OAT = angle OBT = 90°, because a tangent is perpendicular to the radius at the point of contact. In the right-angled triangles OAT and OBT, OA = OB (radii) and OT is common to both (the hypotenuse). So triangles OAT and OBT are congruent (RHS), and therefore TA = TB. Now O is equidistant from A and B (OA = OB, radii) and T is equidistant from A and B (TA = TB). Every point that is equidistant from A and B lies on the perpendicular bisector of AB, so O and T both lie on it. Two points fix a straight line, so the line OT is the perpendicular bisector of AB.",
          markScheme: [
            { point: "Angles OAT and OBT are 90° because a tangent is perpendicular to the radius", keywords: ["90", "tangent", "perpendicular", "radius", "right angle"] },
            { point: "OA = OB (radii) and OT is common", keywords: ["radii", "oa = ob", "common", "shared", "hypotenuse"] },
            { point: "Triangles OAT and OBT are congruent (RHS), so TA = TB", keywords: ["congruent", "rhs", "ta = tb"] },
            { point: "O and T are both equidistant from A and B, so both lie on the perpendicular bisector of AB, which is the line OT", keywords: ["equidistant", "perpendicular bisector", "both", "same distance"] },
          ],
          commonError: "Assuming TA = TB because the diagram looks symmetrical — the right angles, the equal radii and the shared side OT are what prove it.",
          solutions: [
            { label: "Pythagoras instead of congruence", steps: ["Angle OAT = angle OBT = 90° (tangent ⟂ radius).", "{{TA^2 = OT^2 - OA^2}} and {{TB^2 = OT^2 - OB^2}}.", "OA = OB (radii), so {{TA^2 = TB^2}} and TA = TB.", "Then finish as before: O and T are both equidistant from A and B, so OT is the perpendicular bisector of AB."] },
          ],
          difficulty: "challenge",
          guideRef: "circle-proofs",
          hints: [
            "Draw the diagram and join OA, OB and OT. What angle does each radius make with its tangent?",
            "Look at triangles OAT and OBT. Which sides are equal, and which side is shared?",
            "Which congruence condition uses a right angle, a hypotenuse and a side?",
            "For the second part: which points are equidistant from A and B? Where do all such points lie?",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "written",
          id: "angles-circle-theorems-p2-q14",
          question:
            "O is the centre of a circle and AB is a chord (not a diameter). M is the point on AB such that OM is perpendicular to AB.\n\nProve that M is the midpoint of AB.",
          marks: 3,
          modelAnswer:
            "Join OA and OB. In triangles OMA and OMB: OA = OB because they are both radii; OM is common to both triangles; and angle OMA = angle OMB = 90°. So the triangles are congruent (RHS). Therefore AM = BM, so M is the midpoint of AB.",
          markScheme: [
            { point: "OA = OB (radii) and OM common", keywords: ["radii", "radius", "oa = ob", "common", "shared"] },
            { point: "Right angles at M, so triangles OMA and OMB congruent by RHS", keywords: ["rhs", "congruent", "90", "right angle"] },
            { point: "Hence AM = BM, so M is the midpoint", keywords: ["am = bm", "am = mb", "midpoint", "bisect"] },
          ],
          commonError: "Quoting 'the perpendicular from the centre bisects the chord' — that is the statement you are asked to prove.",
          solutions: [
            { label: "Pythagoras instead of congruence", steps: ["{{AM^2 = OA^2 - OM^2}} and {{BM^2 = OB^2 - OM^2}}.", "OA = OB (radii), so {{AM^2 = BM^2}} and AM = BM."] },
          ],
          difficulty: "challenge",
          guideRef: "chords",
          hints: ["Join O to A and O to B. What do you know about OA and OB?", "You now have two right-angled triangles. Which sides do they share or have equal?", "Which congruence condition fits a right angle, a hypotenuse and a side?"],
          strategy: "Prove congruence",
        },
        {
          kind: "short",
          id: "angles-circle-theorems-p2-q15",
          question:
            "ABCD is a cyclic quadrilateral. AB and DC are extended to meet at E. AD and BC are extended to meet at F. Angle AED = 40° and angle AFB = 20°. Work out the size of angle BCD.",
          diagram: TWO_EXTERIOR,
          answer: { type: "number", value: 120, display: "120°" },
          solution: [
            "Let angle BAD = a and angle ADC = d.",
            "Triangle AED: a + d + 40 = 180, so a + d = 140.",
            "Angle ABC = 180° − d (opposite angles of a cyclic quadrilateral). Triangle AFB: a + (180 − d) + 20 = 180, so d − a = 20.",
            "Adding: 2d = 160, so d = 80 and a = 60.",
            "Angle BCD = 180° − a = 120° (opposite angles of a cyclic quadrilateral).",
          ],
          commonError: "Trying to find an angle directly from E or F without setting up unknowns — there is not enough information until you use both triangles together.",
          traps: [
            { spec: { type: "number", value: 60 }, feedback: "60° is angle BAD. Angle BCD is opposite it in the cyclic quadrilateral." },
            { spec: { type: "number", value: 100 }, feedback: "100° is angle ABC. Check which vertex is C." },
          ],
          difficulty: "challenge",
          guideRef: "circle-theorems-2",
          hints: [
            "Two big triangles share the vertex A: AED and AFB. Give angle BAD and angle ADC letters.",
            "Write the angle sum of triangle AED in terms of a and d.",
            "In triangle AFB, angle ABF = ABC = 180° − d (cyclic quadrilateral).",
            "Solve the simultaneous equations a + d = 140 and d − a = 20.",
          ],
          strategy: "Introduce a variable",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "angles-circle-theorems-ch-q01",
      question:
        "From a point T outside a circle with centre O and radius r cm, a tangent touches the circle at A. The tangent TA is exactly twice as long as the radius. The straight line from T through O meets the circle first at B and then at C, and TB = 4 cm.\n\nWork out the exact value of r. Give your answer in the form {{a + sqrt(b)}}.",
      answer: { type: "expression", expr: "1+sqrt(5)", form: "surd", display: "{{1 + sqrt(5)}} cm" },
      solution: [
        "A tangent is perpendicular to the radius, so triangle OAT has a right angle at A, with OA = r, TA = 2r and OT = 4 + r.",
        "Pythagoras: {{(4 + r)^2 = r^2 + (2r)^2}}, so {{16 + 8r + r^2 = 5r^2}}.",
        "{{4r^2 - 8r - 16 = 0}}, so {{r^2 - 2r - 4 = 0}}.",
        "{{r = (2 +- sqrt(4 + 16))/2 = 1 +- sqrt(5)}}. A radius is positive, so {{r = 1 + sqrt(5)}} (≈ 3.24 cm).",
      ],
      solutions: [
        { label: "Pythagoras in triangle OAT", steps: ["{{(4 + r)^2 = r^2 + 4r^2}}", "{{r^2 - 2r - 4 = 0}}, so {{r = 1 + sqrt(5)}}."] },
        { label: "Tangent–secant theorem", steps: ["TC = TB + BC = 4 + 2r, because BC is a diameter.", "{{TA^2 = TB * TC}}: {{4r^2 = 4(4 + 2r)}}, so {{r^2 = 2r + 4}}.", "Same quadratic: {{r = 1 + sqrt(5)}}. (Quicker — no squaring of a bracket.)"] },
      ],
      commonError: "Giving the diameter (or TA), {{2 + 2sqrt(5)}}, instead of the radius — or keeping the negative root.",
      traps: [
        { spec: { type: "expression", expr: "2+2sqrt(5)" }, feedback: "{{2 + 2sqrt(5)}} is 2r — the diameter BC (and also TA). Halve it." },
        { spec: { type: "number", value: 3.24, tolerance: 0.01 }, feedback: "Correct value, but the question asks for the exact answer in the form {{a + sqrt(b)}}." },
      ],
      difficulty: "challenge",
      guideRef: "chords",
      hints: [
        "Draw the radius OA. What angle does it make with the tangent?",
        "Triangle OAT is right-angled at A. Write OA, TA and OT in terms of r.",
        "OT = 4 + r, OA = r and TA = 2r. Use Pythagoras and collect into a quadratic.",
        "Or: the line through O is a secant with TC = 4 + 2r, so {{TA^2 = TB * TC}}. Solve with the quadratic formula.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-ch-q02",
      question: "How many different regular polygons have an interior angle that is a whole number of degrees?",
      answer: { type: "number", value: 22 },
      solution: [
        "Interior angle = 180° − exterior angle, so the interior angle is a whole number exactly when the exterior angle {{360/n}} is.",
        "So n must be a factor of 360, with n ≥ 3.",
        "{{360 = 2^3 * 3^2 * 5}} has (3 + 1)(2 + 1)(1 + 1) = 24 factors.",
        "Remove n = 1 and n = 2 (not polygons): 24 − 2 = 22.",
      ],
      commonError: "Counting all 24 factors of 360, including 1 and 2, which do not give polygons.",
      traps: [{ spec: { type: "number", value: 24 }, feedback: "360 has 24 factors, but a polygon needs at least 3 sides. Remove n = 1 and n = 2." }],
      difficulty: "challenge",
      guideRef: "polygons",
      hints: [
        "Interior = 180° − exterior. When is the interior angle a whole number?",
        "The exterior angle is {{360/n}}. When is that a whole number?",
        "Count the factors of 360 using its prime factorisation.",
        "Which factors are too small to be the number of sides of a polygon?",
      ],
      strategy: "Use prime factorisation",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-ch-q03",
      question:
        "Two parallel chords of a circle have lengths 10 cm and 24 cm. They lie on opposite sides of the centre, and the distance between them is 17 cm. Work out the radius of the circle in cm.",
      answer: { type: "number", value: 13, display: "13 cm" },
      solution: [
        "Let the distances from the centre to the chords be d and 17 − d. The perpendicular from the centre bisects each chord (halves 5 cm and 12 cm).",
        "{{r^2 = 5^2 + d^2 = 12^2 + (17 - d)^2}}",
        "{{25 + d^2 = 144 + 289 - 34d + d^2}}, so 34d = 408 and d = 12.",
        "{{r^2 = 25 + 144 = 169}}, so r = 13 cm.",
      ],
      solutions: [
        { label: "Algebra", steps: ["{{25 + d^2 = 144 + (17 - d)^2}} gives d = 12.", "{{r = sqrt(5^2 + 12^2) = 13}}."] },
        { label: "Spot the triple", steps: ["Half-chords are 5 and 12 — a 5, 12, 13 triple suggests distances 12 and 5.", "12 + 5 = 17 ✓, so r = 13 works for both chords."] },
      ],
      commonError: "Using the full chord lengths instead of the half-chords.",
      difficulty: "challenge",
      guideRef: "chords",
      hints: [
        "Draw the perpendicular from the centre to each chord. What happens to each chord?",
        "Call one distance d. Then the other is 17 − d.",
        "Write {{r^2}} two ways using Pythagoras and set them equal.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-ch-q04",
      question:
        "The diagram shows a five-pointed star made from five straight lines. The star is **not** regular. Work out a + b + c + d + e, the sum of the angles at the five points.",
      diagram: STAR,
      answer: { type: "number", value: 180, display: "180°" },
      solution: [
        "Look at the triangle with point a at the top and the line through b and e as its base. Call its base vertices X (on line ac) and Y (on line ad).",
        "Angle aXY is an exterior angle of the small triangle with vertices X, c and e, so it equals c + e.",
        "In the same way, angle aYX is an exterior angle of the triangle with vertices Y, d and b, so it equals b + d.",
        "Angle sum of triangle aXY: a + (c + e) + (b + d) = 180°.",
      ],
      solutions: [
        { label: "Exterior angles", steps: ["Find a triangle with a as one vertex and the other two angles made of the other tips.", "a + (c + e) + (b + d) = 180°."] },
        {
          label: "Inner pentagon",
          steps: [
            "The five tip triangles have total angle sum 5 × 180° = 900°.",
            "Each base angle of a tip triangle is 180° minus an angle of the inner pentagon, and each inner angle is used twice: base angles total 2 × (5 × 180° − 540°) = 720°.",
            "So the tips add to 900° − 720° = 180°.",
          ],
        },
      ],
      commonError: "Assuming the star is regular (36° each) — that gives 180° here too, but it isn't a proof for an irregular star.",
      difficulty: "challenge",
      guideRef: "angle-facts",
      hints: [
        "Try a regular star first: each point is 36°. Is the sum the same for any star?",
        "Find a triangle that has point a as one of its angles.",
        "Each of its other two angles is an exterior angle of a smaller triangle. What is an exterior angle equal to?",
      ],
      strategy: "Try small cases, then find an invariant",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-ch-q05",
      question:
        "B is a point on a circle with centre O. The line OB is extended beyond B to a point T. TA is a tangent to the circle at A. Angle ATO = x°.\n\nFind an expression, in terms of x, for the size of angle ABT in degrees.",
      answer: { type: "expression", expr: "135-x/2", display: "{{135 - x/2}}" },
      solution: [
        "Angle OAT = 90° (tangent ⟂ radius), so in triangle OAT, angle AOB = 90° − x.",
        "OA = OB (radii), so triangle OAB is isosceles: angle OBA = {{(180 - (90 - x))/2 = 45 + x/2}}.",
        "O, B, T lie on a straight line, so angle ABT = 180° − (45 + {{x/2}}) = {{135 - x/2}}.",
        "Check with x = 30: angle AOB = 60°, so triangle OAB is equilateral, angle ABT = 120° = 135 − 15 ✓.",
      ],
      solutions: [
        {
          label: "Alternate segment theorem",
          steps: [
            "Angle AOB = 90° − x, so the angle in the alternate segment is {{(90 - x)/2}}, and by the alternate segment theorem angle TAB = {{45 - x/2}}.",
            "Triangle ABT: angle ABT = 180 − x − (45 − {{x/2}}) = {{135 - x/2}}.",
          ],
        },
      ],
      commonError: "Giving angle OBA ({{45 + x/2}}) instead of angle ABT on the other side of the straight line.",
      traps: [{ spec: { type: "expression", expr: "45+x/2" }, feedback: "That's angle OBA. Angle ABT is on the other side of B along the straight line OBT." }],
      difficulty: "challenge",
      guideRef: "circle-theorems-2",
      hints: [
        "Draw it. Join OA. What is angle OAT?",
        "Find angle AOT in terms of x.",
        "Triangle OAB is isosceles. Find its base angles in terms of x.",
        "OBT is a straight line.",
      ],
      strategy: "Check by substituting",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-ch-q06",
      question:
        "Chords AB and CD of a circle intersect at P. AP = x cm, PB = (2x − 1) cm, CP = (x + 1) cm and PD = (x + 2) cm.\n\nWork out the exact length of the chord AB. Give your answer in the form {{a + b sqrt(c)}}.",
      answer: { type: "expression", expr: "5+3sqrt(6)", form: "surd", display: "{{5 + 3sqrt(6)}} cm" },
      solution: [
        "Intersecting chords: AP × PB = CP × PD, so x(2x − 1) = (x + 1)(x + 2).",
        "{{2x^2 - x = x^2 + 3x + 2}}, so {{x^2 - 4x - 2 = 0}}.",
        "{{x = (4 +- sqrt(16 + 8))/2 = 2 +- sqrt(6)}}. Since {{2 - sqrt(6)}} is negative and x is a length, {{x = 2 + sqrt(6)}}.",
        "AB = x + (2x − 1) = 3x − 1 = {{3(2 + sqrt(6)) - 1 = 5 + 3sqrt(6)}} cm (≈ 12.3 cm).",
      ],
      commonError: "Stopping at x = {{2 + sqrt(6)}}, which is only AP — or keeping the negative root.",
      traps: [
        { spec: { type: "expression", expr: "2+sqrt(6)" }, feedback: "That is x = AP. The question asks for the whole chord AB = AP + PB = 3x − 1." },
        { spec: { type: "expression", expr: "3+2sqrt(6)" }, feedback: "That is PB = 2x − 1. AB is the whole chord, AP + PB." },
      ],
      difficulty: "challenge",
      guideRef: "chords",
      hints: [
        "Which rule links the four pieces of the two chords?",
        "x(2x − 1) = (x + 1)(x + 2). Expand both sides and collect into a quadratic.",
        "{{x^2 - 4x - 2 = 0}} does not factorise. Use the quadratic formula or complete the square, and reject the negative root.",
        "AB = AP + PB = 3x − 1.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-ch-q07",
      question:
        "A goat is tied to one corner of a square shed of side 4 m with a rope 6 m long. The goat cannot go inside the shed. Work out the exact area of grass the goat can reach. Give your answer in terms of π, in m².",
      answer: { type: "expression", expr: "29pi", display: "{{29pi}} m² (≈ 91.1 m²)" },
      solution: [
        "With the rope straight from the corner, the goat sweeps {{3/4}} of a circle of radius 6 m (the shed blocks the other quarter): {{3/4 * pi * 6^2 = 27pi}}.",
        "When the rope wraps round either neighbouring corner, 6 − 4 = 2 m is left, sweeping a quarter circle of radius 2 m beside the shed: {{1/4 * pi * 2^2 = pi}}.",
        "There are two such quarter circles (one on each side), and they do not overlap.",
        "Total = {{27pi + pi + pi = 29pi}} m².",
      ],
      commonError: "Taking the full circle (36π) or forgetting the extra pieces round the corners (27π).",
      traps: [
        { spec: { type: "expression", expr: "27pi" }, feedback: "Good start — but the rope can also bend round the two neighbouring corners of the shed with 2 m to spare." },
        { spec: { type: "expression", expr: "36pi" }, feedback: "The goat can't go through the shed, so a quarter of that circle is blocked." },
      ],
      difficulty: "challenge",
      guideRef: "constructions-loci",
      hints: [
        "Sketch the shed and the goat's corner. Which part of the circle of radius 6 m is blocked?",
        "What happens when the goat walks round to the side of the shed and the rope catches on the next corner?",
        "After 4 m along the shed wall, 2 m of rope is left. What shape does it sweep?",
      ],
      strategy: "Split into cases",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-ch-q08",
      question: "ABCDE is a regular pentagon. The diagonals AC and BD meet at P. Work out the size of angle APB.",
      answer: { type: "number", value: 72, display: "72°" },
      solution: [
        "Each interior angle of a regular pentagon is 108°.",
        "Triangle ABC is isosceles (AB = BC), so angle BAC = (180° − 108°) ÷ 2 = 36°.",
        "Triangle BCD is isosceles, so angle CBD = 36°, and angle ABD = 108° − 36° = 72°.",
        "Triangle ABP: APB = 180° − 36° − 72° = 72°.",
      ],
      solutions: [
        { label: "Isosceles triangles", steps: ["BAP = 36°, ABP = 72°.", "APB = 72°."] },
        {
          label: "Circle theorems",
          steps: [
            "A regular pentagon is cyclic, and each side cuts off an arc of 360° ÷ 5 = 72°, so each side subtends 36° at the circumference.",
            "Angle BAC stands on arc BC (one side): 36°. Angle ABD stands on arc AED (two sides): 72°.",
            "Triangle ABP: APB = 180° − 36° − 72° = 72°.",
          ],
        },
      ],
      commonError: "Assuming the diagonals cross at right angles.",
      traps: [{ spec: { type: "number", value: 90 }, feedback: "Diagonals of a pentagon do not meet at right angles. Find angles BAP and ABP first." }],
      difficulty: "challenge",
      guideRef: "polygons",
      hints: [
        "What is each interior angle of a regular pentagon?",
        "Triangle ABC has two equal sides. Find angle BAC.",
        "Triangle BCD is congruent to ABC. Use it to find angle ABD.",
        "Finish with the angle sum of triangle ABP.",
      ],
      strategy: "Look for isosceles triangles",
    },
    {
      kind: "short",
      id: "angles-circle-theorems-ch-q09",
      question:
        "A chord AB of length 16 cm is drawn in a circle of radius 10 cm. C is a point on the major arc AB. Work out the size of angle ACB. Give your answer correct to 1 decimal place.",
      answer: { type: "number", value: 53.1, display: "53.1°" },
      solution: [
        "Let O be the centre and M the midpoint of AB. OM ⟂ AB, AM = 8 cm and OA = 10 cm.",
        "{{sin(AOM) = 8/10}}, so angle AOM = 53.13...°.",
        "Angle AOB = 2 × 53.13...° = 106.26...°.",
        "C is on the major arc, so ACB = {{1/2}} × 106.26...° = 53.1°.",
      ],
      solutions: [
        { label: "Cosine rule", steps: ["{{cos(AOB) = (10^2 + 10^2 - 16^2)/(2 * 10 * 10) = -56/200 = -0.28}}.", "AOB = 106.26°, so ACB = 53.1°."] },
      ],
      commonError: "Giving angle AOB (106.3°) or the angle on the minor arc (126.9°).",
      traps: [
        { spec: { type: "number", value: 106.3, tolerance: 0.05 }, feedback: "106.3° is the angle at the centre. C is on the circumference, so halve it." },
        { spec: { type: "number", value: 126.9, tolerance: 0.05 }, feedback: "That would be the angle for a point on the minor arc. C is on the major arc." },
      ],
      difficulty: "challenge",
      guideRef: "circle-theorems-1",
      hints: [
        "Join the centre O to A, B and the midpoint M of AB.",
        "In right-angled triangle OAM you know OA and AM. Find angle AOM.",
        "Angle AOB = 2 × AOM. Now use the angle at the centre theorem.",
      ],
      strategy: "Combine trigonometry with a theorem",
    },
    {
      kind: "written",
      id: "angles-circle-theorems-ch-q10",
      question:
        "A and B are points on a circle with centre O. TA is the tangent to the circle at A, and angle TAB = x, where x is acute. C is a point on the major arc AB (the segment on the other side of chord AB from T).\n\nProve that angle ACB = x (the alternate segment theorem). Give a reason for each step.",
      marks: 4,
      modelAnswer:
        "Angle OAT = 90° because the tangent is perpendicular to the radius, so angle OAB = 90° − x. OA = OB because they are radii, so triangle OAB is isosceles and angle OBA = 90° − x. The angles in triangle OAB add up to 180°, so angle AOB = 180° − 2(90° − x) = 2x. The angle at the centre is twice the angle at the circumference, so angle ACB = {{1/2}} × 2x = x.",
      markScheme: [
        { point: "Angle OAT = 90° (tangent ⟂ radius), so OAB = 90° − x", keywords: ["90", "tangent", "perpendicular", "90 - x", "90° − x"] },
        { point: "OA = OB (radii) so OBA = 90° − x (isosceles)", keywords: ["radii", "isosceles", "oa = ob"] },
        { point: "Angle AOB = 180° − 2(90° − x) = 2x", keywords: ["2x", "180 - 2(90 - x)"] },
        { point: "Angle at centre twice angle at circumference, so ACB = x", keywords: ["angle at the centre", "twice", "half", "acb = x"] },
      ],
      solutions: [
        {
          label: "Using a diameter",
          steps: [
            "Draw the diameter AD. Angle DAT = 90°, so angle DAB = 90° − x.",
            "Angle ABD = 90° (angle in a semicircle), so angle ADB = 180° − 90° − (90° − x) = x.",
            "Angles ADB and ACB are in the same segment, so ACB = x.",
          ],
        },
      ],
      commonError: "Quoting the alternate segment theorem as a reason — it's the result you are proving.",
      difficulty: "challenge",
      guideRef: "circle-proofs",
      hints: [
        "Join O to A and O to B. What angle does OA make with the tangent?",
        "Find angle OAB in terms of x, then use the isosceles triangle OAB.",
        "Find angle AOB in terms of x.",
        "Which theorem links angle AOB to angle ACB?",
      ],
      strategy: "Introduce a variable",
    },
  ],
};
