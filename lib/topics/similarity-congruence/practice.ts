import type { TopicPractice } from "../../types.ts";

// ---------------------------------------------------------------------------
// Diagrams (drawn to scale from the data in the questions)
// ---------------------------------------------------------------------------

const NESTED_QUIZ = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with D on AB and E on AC. DE is parallel to BC. AD is 4 cm, DB is 6 cm and DE is 5 cm."><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><polygon points="217.1,89.8 146.3,161.9 272.6,161.9" fill="#c7d2fe" stroke="none"/><polygon points="146.3,161.9 40.0,270.0 355.8,270.0 272.6,161.9" fill="#fde68a" stroke="none"/><line x1="217.1" y1="89.8" x2="40.0" y2="270.0" stroke="#1f2937" stroke-width="2"/><line x1="40.0" y1="270.0" x2="355.8" y2="270.0" stroke="#1f2937" stroke-width="2"/><line x1="355.8" y1="270.0" x2="217.1" y2="89.8" stroke="#1f2937" stroke-width="2"/><line x1="146.3" y1="161.9" x2="272.6" y2="161.9" stroke="#1f2937" stroke-width="2"/><polyline points="206.4,166.9 213.4,161.9 206.4,156.9" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="194.9,275.0 201.9,270.0 194.9,265.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="218.6" y="80.9" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="26.9" y="279.8" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">B</text><text x="368.8" y="280.2" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">C</text><text x="132.3" y="165.9" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><text x="286.6" y="165.9" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">E</text><text x="170.3" y="118.7" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4 cm</text><text x="81.7" y="208.7" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6 cm</text><text x="209.4" y="153.9" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5 cm</text></svg>`;

const NESTED_ALG = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with D on AB and E on AC. DE is parallel to BC. AD is x cm, DB is 6 cm, DE is 4 cm and BC is 10 cm."><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><polygon points="201.4,75.6 136.8,153.4 237.9,153.4" fill="#c7d2fe" stroke="none"/><polygon points="136.8,153.4 40.0,270.0 292.6,270.0 237.9,153.4" fill="#fde68a" stroke="none"/><line x1="201.4" y1="75.6" x2="40.0" y2="270.0" stroke="#1f2937" stroke-width="2"/><line x1="40.0" y1="270.0" x2="292.6" y2="270.0" stroke="#1f2937" stroke-width="2"/><line x1="292.6" y1="270.0" x2="201.4" y2="75.6" stroke="#1f2937" stroke-width="2"/><line x1="136.8" y1="153.4" x2="237.9" y2="153.4" stroke="#1f2937" stroke-width="2"/><polyline points="184.3,158.4 191.3,153.4 184.3,148.4" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="163.3,275.0 170.3,270.0 163.3,265.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="203.9" y="66.8" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="27.3" y="280.9" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">B</text><text x="304.8" y="281.9" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">C</text><text x="122.8" y="157.4" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><text x="251.9" y="157.4" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">E</text><text x="156.8" y="108.3" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">x cm</text><text x="76.1" y="205.5" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6 cm</text><text x="187.3" y="145.4" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4 cm</text><text x="166.3" y="290.0" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10 cm</text></svg>`;

const HOURGLASS = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two triangles meeting at C. Line AE and line BD cross at C. AB is parallel to DE. AB is 8 cm, AC is 6 cm, BC is 5 cm and CE is 9 cm."><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><polygon points="154.8,102.2 176.1,204.0 215.0,151.8" fill="#c7d2fe" stroke="none"/><polygon points="215.0,151.8 273.2,73.7 305.2,226.3" fill="#bbf7d0" stroke="none"/><line x1="154.8" y1="102.2" x2="176.1" y2="204.0" stroke="#1f2937" stroke-width="2"/><line x1="273.2" y1="73.7" x2="305.2" y2="226.3" stroke="#1f2937" stroke-width="2"/><line x1="154.8" y1="102.2" x2="305.2" y2="226.3" stroke="#1f2937" stroke-width="2"/><line x1="176.1" y1="204.0" x2="273.2" y2="73.7" stroke="#1f2937" stroke-width="2"/><polyline points="171.0,155.0 164.7,149.1 161.2,157.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="294.7,151.9 288.4,146.1 284.9,154.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="148.2" y="94.8" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="174.5" y="222.9" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">B</text><text x="215.0" y="139.8" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">C</text><text x="274.8" y="64.7" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><text x="311.8" y="243.7" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">E</text><text x="149.8" y="160.3" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">8 cm</text><text x="195.1" y="118.7" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6 cm</text><text x="208.4" y="191.5" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5 cm</text><text x="249.9" y="205.4" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">9 cm</text></svg>`;

const LAMP = `<svg viewBox="0 0 460 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A vertical lamp post and Ravi standing on level ground. Ravi is 1.8 m tall and stands 4 m from the foot of the post. His shadow is 2 m long. A light ray from the top of the post passes over Ravi's head to the tip of his shadow."><rect x="0" y="0" width="460" height="310" fill="#ffffff"/><polygon points="70.0,10.0 70.0,280.0 370.0,280.0" fill="#fde68a" stroke="none"/><polygon points="270.0,190.0 270.0,280.0 370.0,280.0" fill="#c7d2fe" stroke="none"/><line x1="40.0" y1="280.0" x2="420.0" y2="280.0" stroke="#1f2937" stroke-width="2"/><line x1="70.0" y1="280.0" x2="70.0" y2="10.0" stroke="#1f2937" stroke-width="4"/><line x1="270.0" y1="280.0" x2="270.0" y2="190.0" stroke="#1f2937" stroke-width="4"/><line x1="70.0" y1="10.0" x2="370.0" y2="280.0" stroke="#b45309" stroke-width="1.5" stroke-dasharray="6 4"/><circle cx="70" cy="10.0" r="6" fill="#fde68a" stroke="#1f2937"/><polyline points="70.0,268.0 82.0,268.0 82.0,280.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="270.0,268.0 282.0,268.0 282.0,280.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="58.0" y="145.0" font-size="13" text-anchor="end" font-family="sans-serif" fill="#1f2937">h m</text><text x="262.0" y="235.0" font-size="13" text-anchor="end" font-family="sans-serif" fill="#1f2937">1.8 m</text><text x="170.0" y="300.0" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4 m</text><text x="320.0" y="300.0" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2 m</text></svg>`;

const NONPARALLEL = `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with D on AB and E on AC. DE is drawn. Angle ADE is marked equal to angle ACB. AD is 4 cm, AE is 5 cm and EC is 5 cm. DE is not parallel to BC."><rect x="0" y="0" width="420" height="300" fill="#ffffff"/><polygon points="50.0,270.0 146.0,270.0 127.1,178.1" fill="#c7d2fe" stroke="none"/><line x1="50.0" y1="270.0" x2="350.0" y2="270.0" stroke="#1f2937" stroke-width="2"/><line x1="350.0" y1="270.0" x2="204.3" y2="86.1" stroke="#1f2937" stroke-width="2"/><line x1="204.3" y1="86.1" x2="50.0" y2="270.0" stroke="#1f2937" stroke-width="2"/><line x1="146.0" y1="270.0" x2="127.1" y2="178.1" stroke="#1f2937" stroke-width="2"/><path d="M 132.0 270.0 A 14 14 0 0 1 143.2 256.3" fill="none" stroke="#b45309" stroke-width="1.5"/><path d="M 213.0 97.1 A 14 14 0 0 1 195.3 96.9" fill="none" stroke="#b45309" stroke-width="1.5"/><text x="37.0" y="280.3" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="362.9" y="280.3" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">B</text><text x="204.6" y="77.2" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">C</text><text x="146.0" y="288.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><text x="115.1" y="174.1" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">E</text><text x="98.0" y="288.0" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4 cm</text><text x="74.8" y="216.5" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5 cm</text><text x="151.9" y="124.5" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5 cm</text></svg>`;

const KITE = `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Kite ABCD with AB equal to AD and CB equal to CD. The diagonal AC is drawn."><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><polygon points="220.0,40.0 130.0,120.0 220.0,280.0 310.0,120.0" fill="#bbf7d0" stroke="none"/><line x1="220.0" y1="40.0" x2="130.0" y2="120.0" stroke="#1f2937" stroke-width="2"/><line x1="130.0" y1="120.0" x2="220.0" y2="280.0" stroke="#1f2937" stroke-width="2"/><line x1="220.0" y1="280.0" x2="310.0" y2="120.0" stroke="#1f2937" stroke-width="2"/><line x1="310.0" y1="120.0" x2="220.0" y2="40.0" stroke="#1f2937" stroke-width="2"/><line x1="220.0" y1="40.0" x2="220.0" y2="280.0" stroke="#334155" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="179.0" y1="84.5" x2="171.0" y2="75.5" stroke="#1f2937" stroke-width="1.5"/><line x1="269.0" y1="75.5" x2="261.0" y2="84.5" stroke="#1f2937" stroke-width="1.5"/><line x1="179.0" y1="194.9" x2="168.5" y2="200.8" stroke="#1f2937" stroke-width="1.5"/><line x1="181.5" y1="199.2" x2="171.0" y2="205.1" stroke="#1f2937" stroke-width="1.5"/><line x1="258.5" y1="199.2" x2="269.0" y2="205.1" stroke="#1f2937" stroke-width="1.5"/><line x1="261.0" y1="194.9" x2="271.5" y2="200.8" stroke="#1f2937" stroke-width="1.5"/><text x="220.0" y="30.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="116.0" y="125.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">B</text><text x="220.0" y="298.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">C</text><text x="324.0" y="125.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text></svg>`;

const PARALLELOGRAM = `<svg viewBox="0 0 460 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallelogram ABCD. AB is parallel to DC and AD is parallel to BC. The diagonals AC and BD meet at M."><rect x="0" y="0" width="460" height="290" fill="#ffffff"/><polygon points="70.0,240.0 310.0,240.0 230.0,160.0" fill="#c7d2fe" stroke="none"/><polygon points="390.0,80.0 150.0,80.0 230.0,160.0" fill="#fde68a" stroke="none"/><line x1="70.0" y1="240.0" x2="310.0" y2="240.0" stroke="#1f2937" stroke-width="2"/><line x1="310.0" y1="240.0" x2="390.0" y2="80.0" stroke="#1f2937" stroke-width="2"/><line x1="390.0" y1="80.0" x2="150.0" y2="80.0" stroke="#1f2937" stroke-width="2"/><line x1="150.0" y1="80.0" x2="70.0" y2="240.0" stroke="#1f2937" stroke-width="2"/><line x1="70.0" y1="240.0" x2="390.0" y2="80.0" stroke="#334155" stroke-width="1.5"/><line x1="310.0" y1="240.0" x2="150.0" y2="80.0" stroke="#334155" stroke-width="1.5"/><polyline points="187.0,245.0 194.0,240.0 187.0,235.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="267.0,85.0 274.0,80.0 267.0,75.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="113.1,164.9 111.8,156.4 104.2,160.4" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="116.3,158.7 114.9,150.2 107.3,154.2" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="353.1,164.9 351.8,156.4 344.2,160.4" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="356.3,158.7 354.9,150.2 347.3,154.2" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="230.0" cy="160.0" r="3" fill="#1f2937"/><text x="58.0" y="254.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="320.0" y="254.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">B</text><text x="402.0" y="76.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">C</text><text x="138.0" y="76.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><text x="230.0" y="182.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text></svg>`;

const BOWTIE = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Line segments AE and BD cross at M. M is the midpoint of AE and the midpoint of BD. Triangles ABM and EDM are shaded."><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><polygon points="80.0,60.0 110.0,250.0 230.0,150.0" fill="#c7d2fe" stroke="none"/><polygon points="380.0,240.0 350.0,50.0 230.0,150.0" fill="#bbf7d0" stroke="none"/><line x1="80.0" y1="60.0" x2="380.0" y2="240.0" stroke="#1f2937" stroke-width="2"/><line x1="110.0" y1="250.0" x2="350.0" y2="50.0" stroke="#1f2937" stroke-width="2"/><line x1="80.0" y1="60.0" x2="110.0" y2="250.0" stroke="#1f2937" stroke-width="2"/><line x1="350.0" y1="50.0" x2="380.0" y2="240.0" stroke="#1f2937" stroke-width="2"/><line x1="158.1" y1="99.9" x2="151.9" y2="110.1" stroke="#1f2937" stroke-width="1.5"/><line x1="308.1" y1="189.9" x2="301.9" y2="200.1" stroke="#1f2937" stroke-width="1.5"/><line x1="164.2" y1="197.0" x2="171.9" y2="206.2" stroke="#1f2937" stroke-width="1.5"/><line x1="168.1" y1="193.8" x2="175.8" y2="203.0" stroke="#1f2937" stroke-width="1.5"/><line x1="284.2" y1="97.0" x2="291.9" y2="106.2" stroke="#1f2937" stroke-width="1.5"/><line x1="288.1" y1="93.8" x2="295.8" y2="103.0" stroke="#1f2937" stroke-width="1.5"/><text x="68.0" y="56.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="98.0" y="264.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">B</text><text x="246.0" y="155.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">M</text><text x="362.0" y="46.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><text x="392.0" y="254.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">E</text></svg>`;

const TRAPEZIUM = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Trapezium ABCD with AB parallel to DC. AB is 6 cm and DC is 15 cm. The diagonals AC and BD meet at X."><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><polygon points="158.0,100.0 302.0,100.0 230.0,145.7" fill="#c7d2fe" stroke="none"/><polygon points="50.0,260.0 410.0,260.0 230.0,145.7" fill="#fde68a" stroke="none"/><line x1="158.0" y1="100.0" x2="302.0" y2="100.0" stroke="#1f2937" stroke-width="2"/><line x1="302.0" y1="100.0" x2="410.0" y2="260.0" stroke="#1f2937" stroke-width="2"/><line x1="410.0" y1="260.0" x2="50.0" y2="260.0" stroke="#1f2937" stroke-width="2"/><line x1="50.0" y1="260.0" x2="158.0" y2="100.0" stroke="#1f2937" stroke-width="2"/><line x1="158.0" y1="100.0" x2="410.0" y2="260.0" stroke="#334155" stroke-width="1.5"/><line x1="302.0" y1="100.0" x2="50.0" y2="260.0" stroke="#334155" stroke-width="1.5"/><polyline points="227.0,105.0 234.0,100.0 227.0,95.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="227.0,265.0 234.0,260.0 227.0,255.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="148.0" y="92.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="312.0" y="92.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">B</text><text x="422.0" y="266.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">C</text><text x="38.0" y="266.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><text x="230.0" y="167.7" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">X</text><text x="230.0" y="90.0" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6 cm</text><text x="230.0" y="282.0" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">15 cm</text></svg>`;

const ALTITUDE = `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with a right angle at A. D is the point on BC with AD perpendicular to BC. BD is 4 cm and DC is 9 cm."><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><polygon points="170.0,70.0 50.0,250.0 170.0,250.0" fill="#c7d2fe" stroke="none"/><polygon points="170.0,70.0 170.0,250.0 440.0,250.0" fill="#fde68a" stroke="none"/><line x1="170.0" y1="70.0" x2="50.0" y2="250.0" stroke="#1f2937" stroke-width="2"/><line x1="50.0" y1="250.0" x2="440.0" y2="250.0" stroke="#1f2937" stroke-width="2"/><line x1="440.0" y1="250.0" x2="170.0" y2="70.0" stroke="#1f2937" stroke-width="2"/><line x1="170.0" y1="70.0" x2="170.0" y2="250.0" stroke="#334155" stroke-width="1.5"/><polyline points="163.3,80.0 173.3,86.6 180.0,76.7" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="182.0,250.0 182.0,238.0 170.0,238.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="170.0" y="60.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">A</text><text x="38.0" y="256.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">B</text><text x="452.0" y="256.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">C</text><text x="170.0" y="270.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">D</text><text x="110.0" y="270.0" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4 cm</text><text x="305.0" y="270.0" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">9 cm</text></svg>`;

const SQUARE_IN_TRI = `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Right-angled triangle with shorter sides 6 cm along the bottom and 3 cm up the left side. A square sits in the right-angled corner with its opposite vertex on the hypotenuse."><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><polygon points="60.0,260.0 390.0,260.0 60.0,95.0" fill="#fde68a" stroke="none"/><polygon points="60.0,260.0 170.0,260.0 170.0,150.0 60.0,150.0" fill="#c7d2fe" stroke="none"/><line x1="60.0" y1="260.0" x2="390.0" y2="260.0" stroke="#1f2937" stroke-width="2"/><line x1="390.0" y1="260.0" x2="60.0" y2="95.0" stroke="#1f2937" stroke-width="2"/><line x1="60.0" y1="95.0" x2="60.0" y2="260.0" stroke="#1f2937" stroke-width="2"/><rect x="60.0" y="150.0" width="110" height="110" fill="none" stroke="#334155" stroke-width="1.5"/><polyline points="70.0,260.0 70.0,250.0 60.0,250.0" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="225.0" y="282.0" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6 cm</text><text x="50.0" y="181.5" font-size="13" text-anchor="end" font-family="sans-serif" fill="#1f2937">3 cm</text><text x="115.0" y="210.0" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">s</text></svg>`;

export const practice: TopicPractice = {
  // =========================================================================
  // Quick-check quiz — 10 questions (3 mcq, 7 short) across the main sections
  // =========================================================================
  quiz: [
    {
      kind: "mcq",
      id: "similarity-congruence-quiz-q01",
      question: "Which of these is **not** enough information to prove that two triangles are congruent?",
      options: [
        "Three pairs of equal sides (SSS)",
        "Two pairs of equal sides and the equal angle between them (SAS)",
        "A right angle, equal hypotenuses and one other pair of equal sides (RHS)",
        "Two pairs of equal sides and an equal angle that is **not** between them (SSA)",
      ],
      answerIndex: 3,
      explanation:
        "SSA can fit **two different triangles**: with the angle not between the two sides, the third side can swing to two positions and still be the right length. SSS, SAS and RHS each fix the triangle completely. RHS looks like SSA, but the right angle makes it safe — Pythagoras forces the third side.",
      difficulty: "warmup",
      guideRef: "congruence",
      hints: ["Which conditions fix exactly one triangle?", "Try drawing a triangle where the known angle is *not* between the two known sides. Can the last side land in two places?"],
      strategy: "Try small cases",
    },
    {
      kind: "short",
      id: "similarity-congruence-quiz-q02",
      question:
        "Rectangle P measures 4 cm by 6 cm. Rectangle Q is similar to P. The shorter side of Q is 10 cm.\n\nWork out the length of the longer side of Q, in cm.",
      answer: { type: "number", value: 15, display: "15 cm" },
      solution: ["Scale factor = {{10/4 = 2.5}}.", "Longer side of Q = 6 × 2.5 = 15 cm."],
      commonError: "Adding 6 (because 4 + 6 = 10) and giving 12 cm — similar shapes are *multiplied* by a scale factor, not added to.",
      traps: [{ spec: { type: "number", value: 12 }, feedback: "You added 6 to every side. Similar shapes are enlargements: multiply by the scale factor {{10/4}}." }],
      difficulty: "warmup",
      guideRef: "similar-lengths",
      hints: ["How many times bigger is 10 than 4?", "Multiply the 6 cm side by that scale factor."],
      strategy: "Find the scale factor",
    },
    {
      kind: "short",
      id: "similarity-congruence-quiz-q03",
      question: "Convert 3.5 m² into cm².",
      answer: { type: "number", value: 35000, display: "35 000 cm²" },
      solution: ["1 m = 100 cm, so 1 m² = 100 × 100 = 10 000 cm².", "3.5 × 10 000 = 35 000 cm²."],
      commonError: "Multiplying by 100 (giving 350 cm²) — that converts a length, not an area.",
      traps: [{ spec: { type: "number", value: 350 }, feedback: "×100 converts lengths. A square metre is 100 cm by 100 cm, so multiply by 10 000." }],
      difficulty: "warmup",
      guideRef: "area-volume-units",
      hints: ["Picture 1 m² as a square 100 cm by 100 cm. How many cm² is that?"],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "similarity-congruence-quiz-q04",
      question:
        "Two shapes are similar. The ratio of their corresponding lengths is 2 : 5. The area of the smaller shape is 12 cm².\n\nWork out the area of the larger shape, in cm².",
      answer: { type: "number", value: 75, display: "75 cm²" },
      solution: ["Length scale factor k = {{5/2 = 2.5}}.", "Area scale factor {{k^2 = 2.5^2 = 6.25}}.", "Area = 12 × 6.25 = 75 cm²."],
      commonError: "Multiplying the area by the length scale factor 2.5 (giving 30 cm²).",
      traps: [
        { spec: { type: "number", value: 30 }, feedback: "2.5 is the *length* scale factor. Areas scale by {{k^2}}." },
        { spec: { type: "number", value: 187.5 }, feedback: "You cubed the scale factor. That's for volumes — areas use {{k^2}}." },
      ],
      difficulty: "core",
      guideRef: "area-volume-scale",
      hints: ["What is the length scale factor from small to large?", "Area is two-dimensional — so what happens to the scale factor?", "Area scale factor = {{(5/2)^2}}."],
      strategy: "Find the scale factor",
    },
    {
      kind: "mcq",
      id: "similarity-congruence-quiz-q05",
      question: "A water tank holds 2 m³. How many cm³ is this?",
      options: ["2 000 cm³", "2 000 000 cm³", "200 cm³", "20 000 cm³"],
      answerIndex: 1,
      explanation:
        "1 m³ is a cube 100 cm × 100 cm × 100 cm = 1 000 000 cm³, so 2 m³ = 2 000 000 cm³. 200 cm³ multiplies by the length factor 100 only; 20 000 cm³ uses the area factor 10 000; 2 000 cm³ confuses cm³ with litres (2 m³ is 2000 litres).",
      difficulty: "core",
      guideRef: "area-volume-units",
      hints: ["How many centimetres in a metre?", "A cubic metre is 100 cm long, 100 cm wide and 100 cm high."],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "similarity-congruence-quiz-q06",
      question:
        "In the diagram, D lies on AB and E lies on AC. DE is parallel to BC.\n\nAD = 4 cm, DB = 6 cm and DE = 5 cm.\n\nWork out the length of BC, in cm.",
      diagram: NESTED_QUIZ,
      answer: { type: "number", value: 12.5, display: "12.5 cm" },
      solution: [
        "DE ∥ BC, so triangle ADE is similar to triangle ABC (angle A is shared; corresponding angles are equal).",
        "AB = AD + DB = 4 + 6 = 10 cm.",
        "Scale factor from ADE to ABC = {{10/4 = 2.5}}.",
        "BC = 5 × 2.5 = 12.5 cm.",
      ],
      commonError: "Using DB = 6 instead of AB = 10 as the matching side, getting {{5 * 6/4 = 7.5}} cm.",
      traps: [{ spec: { type: "number", value: 7.5 }, feedback: "DB is only part of a side. Compare whole sides: AB = 10 cm matches AD = 4 cm." }],
      difficulty: "core",
      guideRef: "similar-lengths",
      hints: ["Which two triangles are similar? Draw them separately.", "The side of the big triangle matching AD is AB — how long is AB?", "Scale factor {{(AB)/(AD)}}."],
      strategy: "Separate the triangles",
    },
    {
      kind: "short",
      id: "similarity-congruence-quiz-q07",
      question:
        "Two bottles are mathematically similar. The smaller bottle is 8 cm tall and holds 160 cm³. The larger bottle is 12 cm tall.\n\nWork out the volume of the larger bottle, in cm³.",
      answer: { type: "number", value: 540, display: "540 cm³" },
      solution: ["Length scale factor k = {{12/8 = 1.5}}.", "Volume scale factor {{k^3 = 1.5^3 = 3.375}}.", "Volume = 160 × 3.375 = 540 cm³."],
      commonError: "Using {{k^2}} (giving 360 cm³) or k (giving 240 cm³).",
      traps: [
        { spec: { type: "number", value: 240 }, feedback: "You scaled by the length factor. Volume is 3D: use {{k^3}}." },
        { spec: { type: "number", value: 360 }, feedback: "{{k^2}} is for areas. Volume needs {{k^3}}." },
      ],
      difficulty: "core",
      guideRef: "area-volume-scale",
      hints: ["Find the length scale factor first.", "Volume has three dimensions, so cube it.", "{{1.5^3 = 3.375}}"],
      strategy: "Find the scale factor",
    },
    {
      kind: "mcq",
      id: "similarity-congruence-quiz-q08",
      question:
        "In triangles ABC and DEF, AB = DE, angle ABC = angle DEF and BC = EF.\n\nWhich condition proves the triangles are congruent?",
      options: ["SSS", "ASA", "SAS", "RHS"],
      answerIndex: 2,
      explanation:
        "Angle B lies **between** sides AB and BC (and angle E between DE and EF), so this is two sides and the included angle: SAS. ASA would need two angles; SSS would need all three sides; RHS needs a right angle.",
      difficulty: "core",
      guideRef: "congruence",
      hints: ["Sketch triangle ABC. Where is angle ABC compared with sides AB and BC?", "Count the sides and angles given, and note the order they come in."],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "similarity-congruence-quiz-q09",
      question:
        "Two solid cones are similar. Their surface areas are 50 cm² and 200 cm². The smaller cone has height 6 cm.\n\nWork out the height of the larger cone, in cm.",
      answer: { type: "number", value: 12, display: "12 cm" },
      solution: ["Area scale factor = {{200/50 = 4}}.", "Length scale factor k = {{sqrt(4) = 2}}.", "Height = 6 × 2 = 12 cm."],
      commonError: "Multiplying the height by the area factor 4 (giving 24 cm).",
      traps: [{ spec: { type: "number", value: 24 }, feedback: "4 is the *area* scale factor. Square-root it to get the length scale factor." }],
      difficulty: "core",
      guideRef: "area-volume-scale",
      hints: ["You are given areas but asked for a length.", "Area factor = {{k^2}}. How do you get back to k?", "{{k = sqrt(200/50)}}"],
      strategy: "Work backwards",
    },
    {
      kind: "short",
      id: "similarity-congruence-quiz-q10",
      question:
        "A water tank is a cuboid 1.2 m long, 0.5 m wide and 0.4 m deep. How many litres of water does it hold when full?",
      answer: { type: "number", value: 240, display: "240 litres" },
      solution: [
        "Volume = 1.2 × 0.5 × 0.4 = 0.24 m³.",
        "1 m³ = 1 000 000 cm³ = 1000 litres.",
        "0.24 × 1000 = 240 litres.",
      ],
      solutions: [
        { label: "Work in centimetres", steps: ["120 × 50 × 40 = 240 000 cm³.", "1 litre = 1000 cm³, so 240 000 ÷ 1000 = 240 litres."] },
      ],
      commonError: "Thinking 1 m³ = 1 litre (giving 0.24) or 100 litres.",
      traps: [{ spec: { type: "number", value: 0.24 }, feedback: "0.24 is the volume in m³. Each cubic metre holds 1000 litres." }],
      difficulty: "core",
      guideRef: "area-volume-units",
      hints: ["Find the volume in m³ first.", "How many litres fit in 1 m³? (1 litre = 1000 cm³.)"],
      strategy: "Change units first",
    },
  ],

  // =========================================================================
  // Practice papers
  // =========================================================================
  papers: [
    {
      id: "similarity-congruence-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "similarity-congruence-p1-q01",
          question:
            "A triangle has sides 3 cm, 4 cm and 5 cm. A similar triangle has its shortest side 7.5 cm.\n\nWork out the length of the longest side of the larger triangle, in cm.",
          answer: { type: "number", value: 12.5, display: "12.5 cm" },
          solution: ["Scale factor = {{7.5/3 = 2.5}}.", "Longest side = 5 × 2.5 = 12.5 cm."],
          commonError: "Adding 4.5 to every side (giving 9.5 cm).",
          traps: [{ spec: { type: "number", value: 9.5 }, feedback: "Similar shapes are multiplied, not added to. Scale factor = 7.5 ÷ 3." }],
          difficulty: "warmup",
          guideRef: "similar-lengths",
          hints: ["Match the shortest side with the shortest side: 3 cm → 7.5 cm.", "Multiply the 5 cm side by the same scale factor."],
          strategy: "Find the scale factor",
        },
        {
          kind: "short",
          id: "similarity-congruence-p1-q02",
          question: "Convert 0.08 m² into cm².",
          answer: { type: "number", value: 800, display: "800 cm²" },
          solution: ["1 m² = 10 000 cm².", "0.08 × 10 000 = 800 cm²."],
          commonError: "Multiplying by 100 to get 8 cm².",
          traps: [{ spec: { type: "number", value: 8 }, feedback: "That's the length conversion. For area, multiply by {{100^2 = 10000}}." }],
          difficulty: "warmup",
          guideRef: "area-volume-units",
          hints: ["1 m² is a 100 cm × 100 cm square."],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "similarity-congruence-p1-q03",
          question: "Convert 650 000 cm³ into m³.",
          answer: { type: "number", value: 0.65, display: "0.65 m³" },
          solution: ["1 m³ = 100 × 100 × 100 = 1 000 000 cm³.", "650 000 ÷ 1 000 000 = 0.65 m³."],
          commonError: "Dividing by 100 (6500) or by 10 000 (65).",
          traps: [
            { spec: { type: "number", value: 6500 }, feedback: "÷100 converts a length. For volume, divide by {{100^3}}." },
            { spec: { type: "number", value: 65 }, feedback: "÷10 000 converts an area. For volume, divide by 1 000 000." },
          ],
          difficulty: "warmup",
          guideRef: "area-volume-units",
          hints: ["How many cm³ make 1 m³?", "Going from small units to big units, divide."],
          strategy: "Change units first",
        },
        {
          kind: "short",
          id: "similarity-congruence-p1-q04",
          question:
            "Shape B is an enlargement of shape A with scale factor 3. The area of shape A is 7 cm².\n\nWork out the area of shape B, in cm².",
          answer: { type: "number", value: 63, display: "63 cm²" },
          solution: ["Area scale factor = {{3^2 = 9}}.", "Area of B = 7 × 9 = 63 cm²."],
          commonError: "Multiplying by 3 and getting 21 cm².",
          traps: [{ spec: { type: "number", value: 21 }, feedback: "Every length is 3 times longer, so the area is {{3 * 3 = 9}} times bigger." }],
          difficulty: "warmup",
          guideRef: "area-volume-scale",
          hints: ["Picture a 1 cm square enlarged by scale factor 3. How many 1 cm squares fit inside the new square?"],
          strategy: "Try small cases",
        },
        {
          kind: "written",
          id: "similarity-congruence-p1-q05",
          question:
            "ABCD is a kite with AB = AD and CB = CD. The diagonal AC is drawn.\n\nProve that triangle ABC is congruent to triangle ADC.",
          diagram: KITE,
          marks: 3,
          modelAnswer:
            "AB = AD (given).\n\nCB = CD (given).\n\nAC is common to both triangles.\n\nSo triangle ABC is congruent to triangle ADC by **SSS**.",
          markScheme: [
            { point: "States AB = AD and CB = CD (given, kite)", keywords: ["ab = ad", "cb = cd", "given", "kite"] },
            { point: "States AC is common (shared side)", keywords: ["common", "shared", "ac = ac", "same side"] },
            { point: "Concludes congruent by SSS", keywords: ["sss", "side side side"] },
          ],
          commonError: "Listing two pairs of sides and forgetting the shared side AC — or giving no condition at the end.",
          difficulty: "core",
          guideRef: "congruence",
          hints: ["List what you know about each triangle's sides.", "Is there a side that belongs to both triangles?", "Three pairs of sides — which condition is that?"],
          strategy: "Look for a shared side",
        },
        {
          kind: "short",
          id: "similarity-congruence-p1-q06",
          question:
            "In the diagram, the straight lines AE and BD cross at C. AB is parallel to DE.\n\nAB = 8 cm, AC = 6 cm, BC = 5 cm and CE = 9 cm.\n\nWork out the lengths of DE and CD. Give DE first, then CD, in cm.",
          diagram: HOURGLASS,
          answer: { type: "list", values: [12, 7.5], ordered: true, display: "DE = 12 cm, CD = 7.5 cm" },
          solution: [
            "Angle ACB = angle ECD (vertically opposite). Angle BAC = angle DEC (alternate angles, AB ∥ DE). So triangles ABC and EDC are similar.",
            "Matching sides: AC ↔ EC, AB ↔ ED, BC ↔ DC.",
            "Scale factor = {{(CE)/(CA) = 9/6 = 1.5}}.",
            "DE = 8 × 1.5 = 12 cm; CD = 5 × 1.5 = 7.5 cm.",
          ],
          commonError: "Matching CE with BC (the wrong pair), giving a scale factor of {{9/5}}.",
          traps: [{ spec: { type: "list", values: [7.5, 12], ordered: true }, feedback: "Right numbers, wrong order: DE first, then CD." }],
          difficulty: "core",
          guideRef: "similar-lengths",
          hints: ["Which angles are equal? Look for vertically opposite and alternate angles.", "Match sides that sit opposite equal angles. CE matches which side of triangle ABC?", "CE matches AC, so the scale factor is {{9/6}}."],
          strategy: "Separate the triangles",
        },
        {
          kind: "short",
          id: "similarity-congruence-p1-q07",
          question:
            "Ravi is 1.8 m tall. He stands on level ground 4 m from the foot of a vertical lamp post. The lamp casts his shadow, which is 2 m long, directly away from the post (see diagram).\n\nWork out the height, h m, of the lamp post.",
          diagram: LAMP,
          answer: { type: "number", value: 5.4, display: "5.4 m" },
          solution: [
            "The small triangle (Ravi and his shadow) and the large triangle (lamp post to shadow tip) share the angle at the shadow tip and both have a right angle, so they are similar.",
            "Base of small triangle = 2 m; base of large triangle = 4 + 2 = 6 m.",
            "Scale factor = {{6/2 = 3}}.",
            "h = 1.8 × 3 = 5.4 m.",
          ],
          commonError: "Using 4 m as the large base (scale factor 2, h = 3.6 m) — the large triangle reaches all the way to the shadow tip.",
          traps: [{ spec: { type: "number", value: 3.6 }, feedback: "The large triangle's base runs from the post to the tip of the shadow: 4 + 2 = 6 m." }],
          difficulty: "core",
          guideRef: "similar-lengths",
          hints: ["Find two right-angled triangles that share an angle.", "Both triangles end at the tip of the shadow. How long is each base?", "Scale factor = {{6/2}}."],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "similarity-congruence-p1-q08",
          question:
            "Two cylinders are mathematically similar. Their volumes are 54 cm³ and 250 cm³. The surface area of the smaller cylinder is 45 cm².\n\nWork out the surface area of the larger cylinder, in cm².",
          answer: { type: "number", value: 125, display: "125 cm²" },
          solution: [
            "Volume scale factor = {{250/54 = 125/27}}.",
            "Length scale factor k = {{cbrt(125/27) = 5/3}}.",
            "Area scale factor {{k^2 = 25/9}}.",
            "Surface area = {{45 * 25/9 = 125}} cm².",
          ],
          commonError: "Multiplying 45 by the volume factor {{125/27}}, getting 208 cm².",
          traps: [{ spec: { type: "number", value: 208.3, tolerance: 0.1 }, feedback: "That used the volume factor. Go volume → length (cube root) → area (square)." }],
          difficulty: "core",
          guideRef: "area-volume-scale",
          hints: ["Go via the length scale factor.", "Volume factor = {{k^3}}. Simplify {{250/54}} and take the cube root.", "{{k = 5/3}}, so the area factor is {{25/9}}."],
          strategy: "Work backwards",
        },
        {
          kind: "short",
          id: "similarity-congruence-p1-q09",
          question:
            "A model of a car is made to a scale of 1 : 40. The roof of the model has an area of 15 cm².\n\nWork out the area of the roof of the real car. Give your answer in m².",
          answer: { type: "number", value: 2.4, display: "2.4 m²" },
          solution: [
            "Length scale factor = 40, so area scale factor = {{40^2 = 1600}}.",
            "Real area = 15 × 1600 = 24 000 cm².",
            "1 m² = 10 000 cm², so 24 000 ÷ 10 000 = 2.4 m².",
          ],
          commonError: "Converting 24 000 cm² to m² by dividing by 100 (giving 240 m²).",
          traps: [
            { spec: { type: "number", value: 240 }, feedback: "Divide by 10 000 (not 100) to change cm² into m²." },
            { spec: { type: "number", value: 0.06 }, feedback: "You only multiplied by 40. Areas scale by {{40^2}}." },
          ],
          difficulty: "core",
          guideRef: "area-volume-scale",
          hints: ["What is the area scale factor for a 1 : 40 model?", "Work out the real area in cm² first.", "Then convert: 1 m² = 10 000 cm²."],
          strategy: "Change units last",
        },
        {
          kind: "written",
          id: "similarity-congruence-p1-q10",
          question:
            "Triangle PQR has angle P = 50° and angle Q = 60°.\n\nTriangle XYZ has angle X = 70° and angle Y = 50°.\n\nShow that the two triangles are similar.",
          marks: 2,
          modelAnswer:
            "Angle R = 180° − 50° − 60° = 70°.\n\nAngle Z = 180° − 70° − 50° = 60°.\n\nBoth triangles have angles 50°, 60° and 70°, so all three pairs of angles are equal and the triangles are **similar**.",
          markScheme: [
            { point: "Finds the third angles: R = 70° and Z = 60°", keywords: ["70", "60", "180"] },
            { point: "States all three angles match (50°, 60°, 70°) so similar", keywords: ["equal angles", "same angles", "all three", "similar", "corresponding angles"] },
          ],
          commonError: "Saying 'they both have 50°' — one equal angle is not enough; all three must match.",
          difficulty: "core",
          guideRef: "similar-lengths",
          hints: ["Angles in a triangle add to 180°.", "Find the missing angle in each triangle and compare the three angles."],
          strategy: "Fill in what you can",
        },
        {
          kind: "short",
          id: "similarity-congruence-p1-q11",
          question:
            "Siti is tiling a patio of area 12 m². Each tile is a square with area 400 cm².\n\nHow many tiles does she need, assuming none are cut or wasted?",
          answer: { type: "number", value: 300, display: "300 tiles" },
          solution: ["12 m² = 12 × 10 000 = 120 000 cm².", "120 000 ÷ 400 = 300 tiles."],
          solutions: [
            { label: "Convert the tile to m²", steps: ["400 cm² = 400 ÷ 10 000 = 0.04 m².", "12 ÷ 0.04 = 300 tiles."] },
          ],
          commonError: "Converting with ×100 and getting 3 tiles — an obviously silly answer for a whole patio.",
          traps: [{ spec: { type: "number", value: 3 }, feedback: "3 tiles for a 12 m² patio? 1 m² = 10 000 cm², not 100 cm²." }],
          difficulty: "core",
          guideRef: "area-volume-units",
          hints: ["Put both areas in the same units.", "1 m² = 10 000 cm²."],
          strategy: "Estimate first",
        },
        {
          kind: "short",
          id: "similarity-congruence-p1-q12",
          question:
            "Two statues are mathematically similar. The small statue is 1.5 m tall and the large statue is 4.5 m tall. It takes 0.8 litres of paint to cover the small statue.\n\nHow many litres of paint are needed to cover the large statue?",
          answer: { type: "number", value: 7.2, display: "7.2 litres" },
          solution: [
            "Length scale factor = {{4.5/1.5 = 3}}.",
            "Paint covers surface area, so use the area factor {{3^2 = 9}}.",
            "Paint = 0.8 × 9 = 7.2 litres.",
          ],
          commonError: "Using the volume factor 27 because paint is measured in litres (giving 21.6 litres).",
          traps: [
            { spec: { type: "number", value: 21.6 }, feedback: "Paint is measured in litres, but it covers a **surface**. Use the area factor {{k^2}}." },
            { spec: { type: "number", value: 2.4 }, feedback: "That's the length factor. Paint covers area, so use {{k^2}}." },
          ],
          difficulty: "core",
          guideRef: "area-volume-scale",
          hints: ["Does paint cover a length, an area or a volume?", "Paint covers surface area, so use {{k^2}}."],
          strategy: "Ask what dimension it is",
        },
        {
          kind: "short",
          id: "similarity-congruence-p1-q13",
          question:
            "A solid cone has height 12 cm and volume 480 cm³. The top of the cone is cut off by a plane parallel to the base, 4 cm below the vertex, leaving a frustum.\n\nWork out the volume of the frustum. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 462, tolerance: 0.5, display: "462 cm³" },
          solution: [
            "The small cone cut off is similar to the whole cone, with length scale factor {{4/12 = 1/3}}.",
            "Volume factor {{(1/3)^3 = 1/27}}, so the small cone has volume {{480/27 = 17.77...}} cm³.",
            "Frustum = 480 − 17.77... = 462.22... = 462 cm³ (3 s.f.).",
          ],
          solutions: [
            { label: "One step", steps: ["The frustum keeps {{1 - 1/27 = 26/27}} of the volume.", "{{480 * 26/27 = 462.2}} cm³."] },
          ],
          commonError: "Using the length factor: removing {{1/3}} of the volume (giving 320 cm³).",
          traps: [{ spec: { type: "number", value: 320 }, feedback: "The small cone is {{1/3}} of the *height*, so it is {{(1/3)^3}} of the volume — far less than a third." }],
          difficulty: "challenge",
          guideRef: "area-volume-scale",
          hints: ["What shape is the piece that's cut off?", "The small cone is similar to the big one. What's the length scale factor?", "Volume factor = {{(1/3)^3}}. Subtract the small cone from the whole."],
          strategy: "Subtract a similar shape",
        },
        {
          kind: "written",
          id: "similarity-congruence-p1-q14",
          question:
            "ABCD is a parallelogram. The diagonals AC and BD meet at M.\n\nUse congruent triangles to prove that the diagonals bisect each other (that is, AM = MC and BM = MD).",
          diagram: PARALLELOGRAM,
          marks: 4,
          modelAnswer:
            "Consider triangles ABM and CDM.\n\nAB = CD (opposite sides of a parallelogram are equal).\n\nAngle BAM = angle DCM (alternate angles, AB ∥ DC).\n\nAngle ABM = angle CDM (alternate angles, AB ∥ DC).\n\nSo triangles ABM and CDM are congruent (**ASA**).\n\nTherefore corresponding sides are equal: AM = CM and BM = DM, so the diagonals bisect each other.",
          markScheme: [
            { point: "AB = CD with reason (opposite sides of a parallelogram)", keywords: ["ab = cd", "ab = dc", "opposite sides"] },
            { point: "A pair of equal angles with reason (alternate angles)", keywords: ["alternate", "parallel"] },
            { point: "Second pair of equal angles (alternate or vertically opposite) and congruent by ASA (or AAS)", keywords: ["asa", "aas", "vertically opposite", "congruent"] },
            { point: "Concludes AM = MC and BM = MD from the congruence", keywords: ["am = mc", "am = cm", "bm = md", "bm = dm", "bisect", "corresponding sides"] },
          ],
          commonError: "Assuming AM = MC at the start — that is what you are trying to prove.",
          difficulty: "challenge",
          guideRef: "congruence",
          hints: ["Which two triangles contain AM and MC as matching sides?", "Use the parallel sides: look for alternate angles (Z-angles).", "You have an equal side between two equal angles — which condition is that?"],
          strategy: "Work backwards",
        },
        {
          kind: "short",
          id: "similarity-congruence-p1-q15",
          question:
            "In the diagram, D lies on AB and E lies on AC. DE is parallel to BC.\n\nAD = x cm, DB = 6 cm, DE = 4 cm and BC = 10 cm.\n\nWork out the value of x.",
          diagram: NESTED_ALG,
          answer: { type: "number", value: 4, display: "x = 4" },
          solution: [
            "Triangles ADE and ABC are similar (DE ∥ BC).",
            "{{(AD)/(AB) = (DE)/(BC)}}, so {{x/(x + 6) = 4/10}}.",
            "10x = 4(x + 6) = 4x + 24.",
            "6x = 24, so x = 4.",
          ],
          solutions: [
            { label: "Use the scale factor directly", steps: ["Scale factor from ADE to ABC is {{10/4 = 2.5}}.", "So AB = 2.5x, which means DB = 2.5x − x = 1.5x.", "1.5x = 6, so x = 4."] },
          ],
          commonError: "Writing {{x/6 = 4/10}} — DB is not a side of either triangle; you need AB = x + 6.",
          traps: [{ spec: { type: "number", value: 2.4 }, feedback: "You compared AD with DB. Compare AD with the whole side AB = x + 6." }],
          difficulty: "challenge",
          guideRef: "similar-lengths",
          hints: ["Which side of the big triangle matches AD?", "AB = x + 6. Write an equation from matching ratios.", "{{x/(x + 6) = 4/10}}, then cross-multiply."],
          strategy: "Introduce a variable",
        },
      ],
    },
    {
      id: "similarity-congruence-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "similarity-congruence-p2-q01",
          question:
            "Two triangles have two pairs of equal sides, and the angles **between** those sides are equal. Which congruence condition does this match? (Give the three-letter abbreviation.)",
          answer: { type: "text", accept: ["SAS", "S A S", "side angle side", "side-angle-side", "S.A.S"], display: "SAS" },
          solution: ["Two sides and the included angle (the angle between them): **SAS**."],
          commonError: "Writing SSA — the order matters: the angle must be *between* the two sides.",
          traps: [{ spec: { type: "text", accept: ["SSA", "ASS"] }, feedback: "The angle is *between* the two sides, so it goes in the middle: SAS. (SSA is not a valid condition.)" }],
          difficulty: "warmup",
          guideRef: "congruence",
          hints: ["Write the letters in the order they appear going round the triangle: side, angle, side."],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "similarity-congruence-p2-q02",
          question:
            "Wei Ling enlarges a photo measuring 10 cm by 15 cm so that the new photo is similar to the original. The shorter side of the new photo is 24 cm.\n\nWork out the longer side of the new photo, in cm.",
          answer: { type: "number", value: 36, display: "36 cm" },
          solution: ["Scale factor = {{24/10 = 2.4}}.", "Longer side = 15 × 2.4 = 36 cm."],
          commonError: "Adding 14 cm to each side (giving 29 cm) — that would stretch the photo.",
          traps: [{ spec: { type: "number", value: 29 }, feedback: "Adding the same amount distorts the picture. Multiply by the scale factor 2.4." }],
          difficulty: "warmup",
          guideRef: "similar-lengths",
          hints: ["Scale factor = new ÷ old for matching sides.", "Multiply 15 cm by the scale factor."],
          strategy: "Find the scale factor",
        },
        {
          kind: "short",
          id: "similarity-congruence-p2-q03",
          question: "A bottle of soya milk holds 1.75 litres. How many cm³ is this?",
          answer: { type: "number", value: 1750, display: "1750 cm³" },
          solution: ["1 litre = 1000 cm³.", "1.75 × 1000 = 1750 cm³."],
          commonError: "Using 1 litre = 100 cm³.",
          traps: [{ spec: { type: "number", value: 175 }, feedback: "1 litre is a 10 cm × 10 cm × 10 cm cube — 1000 cm³, not 100 cm³." }],
          difficulty: "warmup",
          guideRef: "area-volume-units",
          hints: ["1 litre fills a cube 10 cm on each side. How many cm³ is that?"],
          strategy: "Recall a fact",
        },
        {
          kind: "short",
          id: "similarity-congruence-p2-q04",
          question:
            "Two cubes have edges in the ratio 1 : 4. Write down the ratio of their volumes.",
          answer: { type: "ratio", parts: [1, 64], display: "1 : 64" },
          solution: ["Volume ratio = {{1^3 : 4^3 = 1 : 64}}."],
          commonError: "Writing 1 : 16 (that's the area ratio).",
          traps: [{ spec: { type: "ratio", parts: [1, 16] }, feedback: "1 : 16 is the ratio of the *areas* of the faces. Volumes need the cube: {{4^3 = 64}}." }],
          difficulty: "warmup",
          guideRef: "area-volume-scale",
          hints: ["How many small cubes fit inside a cube 4 times as long, 4 times as wide and 4 times as tall?"],
          strategy: "Try small cases",
        },
        {
          kind: "short",
          id: "similarity-congruence-p2-q05",
          question:
            "In the diagram, D lies on AB and E lies on AC. Angle ADE = angle ACB. DE is **not** parallel to BC.\n\nAD = 4 cm, AE = 5 cm and EC = 5 cm.\n\nWork out the length of AB, in cm.",
          diagram: NONPARALLEL,
          answer: { type: "number", value: 12.5, display: "12.5 cm" },
          solution: [
            "Angle A is shared and angle ADE = angle ACB, so triangle ADE is similar to triangle ACB (in that order).",
            "Matching sides: AD ↔ AC, AE ↔ AB, DE ↔ CB.",
            "AC = 5 + 5 = 10 cm, so the scale factor from ADE to ACB is {{10/4 = 2.5}}.",
            "AB = AE × 2.5 = 5 × 2.5 = 12.5 cm.",
          ],
          commonError: "Treating DE as parallel to BC and matching AD with AB, giving AB = 8 cm.",
          traps: [{ spec: { type: "number", value: 8 }, feedback: "That assumes DE ∥ BC. Here angle D matches angle **C**, so AD matches AC, and AE matches AB." }],
          difficulty: "core",
          guideRef: "similar-lengths",
          hints: ["Write the triangles with equal angles in the same positions: A ↔ A, D ↔ C, E ↔ ?", "So triangle ADE ~ triangle ACB. AD matches AC.", "Scale factor {{(AC)/(AD) = 10/4}}; AB matches AE."],
          strategy: "Match equal angles first",
        },
        {
          kind: "short",
          id: "similarity-congruence-p2-q06",
          question:
            "Two jugs are mathematically similar. The small jug holds 250 ml and the large jug holds 2 litres. The small jug is 9 cm tall.\n\nWork out the height of the large jug, in cm.",
          answer: { type: "number", value: 18, display: "18 cm" },
          solution: [
            "Use the same units: 2 litres = 2000 ml.",
            "Volume scale factor = {{2000/250 = 8}}.",
            "Length scale factor = {{cbrt(8) = 2}}.",
            "Height = 9 × 2 = 18 cm.",
          ],
          commonError: "Multiplying by the volume factor 8 (giving 72 cm), or forgetting to convert litres to ml.",
          traps: [{ spec: { type: "number", value: 72 }, feedback: "8 is the volume scale factor. Take the cube root to get the length factor." }],
          difficulty: "core",
          guideRef: "area-volume-scale",
          hints: ["Make the units match first.", "The capacities give you {{k^3}}. How do you get k?", "{{k = cbrt(8)}}"],
          strategy: "Work backwards",
        },
        {
          kind: "written",
          id: "similarity-congruence-p2-q07",
          question:
            "The straight lines AE and BD cross at M. M is the midpoint of AE and the midpoint of BD.\n\nProve that triangle ABM is congruent to triangle EDM.",
          diagram: BOWTIE,
          marks: 3,
          modelAnswer:
            "AM = EM (M is the midpoint of AE).\n\nBM = DM (M is the midpoint of BD).\n\nAngle AMB = angle EMD (vertically opposite angles are equal).\n\nSo triangles ABM and EDM are congruent by **SAS**.",
          markScheme: [
            { point: "AM = EM and BM = DM because M is the midpoint", keywords: ["am = em", "am = me", "bm = dm", "bm = md", "midpoint"] },
            { point: "Angle AMB = angle EMD with reason (vertically opposite)", keywords: ["vertically opposite", "amb = emd", "opposite angles"] },
            { point: "Concludes congruent by SAS", keywords: ["sas", "side angle side"] },
          ],
          commonError: "Claiming AB ∥ DE as a reason — that isn't given (it actually follows *from* the congruence).",
          difficulty: "core",
          guideRef: "congruence",
          hints: ["What does 'midpoint' tell you about the sides?", "Look at the angles at M where the two lines cross.", "Two sides and the angle between them — which condition?"],
          strategy: "Use given facts first",
        },
        {
          kind: "short",
          id: "similarity-congruence-p2-q08",
          question:
            "Quadrilaterals PQRS and WXYZ are similar, with P ↔ W, Q ↔ X, R ↔ Y and S ↔ Z.\n\nPQ = 6 cm, QR = 9 cm, WX = 10 cm and YZ = 12 cm.\n\nWork out XY and RS. Give XY first, then RS, in cm.",
          answer: { type: "list", values: [15, 7.2], ordered: true, display: "XY = 15 cm, RS = 7.2 cm" },
          solution: [
            "Scale factor from PQRS to WXYZ = {{(WX)/(PQ) = 10/6 = 5/3}}.",
            "XY = QR × {{5/3}} = {{9 * 5/3 = 15}} cm.",
            "RS = YZ ÷ {{5/3}} = {{12 * 3/5 = 7.2}} cm.",
          ],
          commonError: "Multiplying YZ by {{5/3}} instead of dividing — going from big to small needs the reciprocal.",
          traps: [{ spec: { type: "list", values: [15, 20], ordered: true }, feedback: "RS is in the *smaller* shape, so divide YZ by {{5/3}} (or multiply by {{3/5}})." }],
          difficulty: "core",
          guideRef: "similar-lengths",
          hints: ["Use one known pair of matching sides to find the scale factor.", "PQ ↔ WX gives the scale factor {{10/6}}.", "For RS you are going from the large shape to the small one."],
          strategy: "Find the scale factor",
        },
        {
          kind: "short",
          id: "similarity-congruence-p2-q09",
          question:
            "During a monsoon storm, 25 mm of rain falls on a flat roof measuring 8 m by 5 m. All of it drains into a tank.\n\nHow many litres of water go into the tank?",
          answer: { type: "number", value: 1000, display: "1000 litres" },
          solution: [
            "Work in metres: 25 mm = 0.025 m.",
            "Volume = 8 × 5 × 0.025 = 1 m³.",
            "1 m³ = 1000 litres.",
          ],
          solutions: [
            { label: "Work in centimetres", steps: ["800 cm × 500 cm × 2.5 cm = 1 000 000 cm³.", "1 000 000 ÷ 1000 = 1000 litres."] },
          ],
          commonError: "Multiplying 8 × 5 × 25 = 1000 and calling it m³ (mixing metres and millimetres).",
          traps: [{ spec: { type: "number", value: 1000000 }, feedback: "1 000 000 is the volume in cm³. Divide by 1000 to get litres." }],
          difficulty: "core",
          guideRef: "area-volume-units",
          hints: ["Get all three lengths in the same unit.", "Find the volume in m³, then use 1 m³ = 1000 litres."],
          strategy: "Change units first",
        },
        {
          kind: "short",
          id: "similarity-congruence-p2-q10",
          question:
            "Two triangles are similar. Their areas are 20 cm² and 45 cm². The base of the smaller triangle is 6 cm.\n\nWork out the base of the larger triangle, in cm.",
          answer: { type: "number", value: 9, display: "9 cm" },
          solution: ["Area scale factor = {{45/20 = 9/4}}.", "Length scale factor = {{sqrt(9/4) = 3/2}}.", "Base = 6 × 1.5 = 9 cm."],
          commonError: "Multiplying 6 by {{9/4}} (giving 13.5 cm).",
          traps: [{ spec: { type: "number", value: 13.5 }, feedback: "{{9/4}} is the *area* factor. Square-root it first." }],
          difficulty: "core",
          guideRef: "area-volume-scale",
          hints: ["Areas give you {{k^2}}.", "Simplify {{45/20}} before square-rooting.", "{{sqrt(9/4) = 3/2}}"],
          strategy: "Work backwards",
        },
        {
          kind: "written",
          id: "similarity-congruence-p2-q11",
          question:
            "Kenji makes two similar models of the Merlion. The large model is 3 times as tall as the small one. He says:\n\n\"The large model will need 3 times as much paint as the small one.\"\n\nExplain why Kenji is wrong and state the correct factor.",
          marks: 2,
          modelAnswer:
            "Paint covers the **surface area**, and area does not scale by the length scale factor. With length scale factor 3, every area scales by {{3^2}}.\n\nSo the large model needs **9 times** as much paint, not 3 times.",
          markScheme: [
            { point: "Paint depends on surface area, which scales by k² (not k)", keywords: ["area", "surface", "squared", "k^2", "k²", "3^2", "3²"] },
            { point: "Correct factor 9", keywords: ["9", "nine"] },
          ],
          commonError: "Saying 27 times — that is the volume factor, which would matter for the mass of a solid model, not the paint.",
          difficulty: "core",
          guideRef: "area-volume-scale",
          hints: ["Does paint depend on length, area or volume?", "If lengths are × 3, areas are × ?"],
          strategy: "Ask what dimension it is",
        },
        {
          kind: "short",
          id: "similarity-congruence-p2-q12",
          question:
            "A straight ramp rises 1.2 m over a horizontal distance of 4.8 m. A vertical support post is fixed under the ramp, 1.5 m (horizontally) from the lower end, reaching from the ground to the ramp.\n\nWork out the height of the support post. Give your answer in cm.",
          answer: { type: "number", value: 37.5, display: "37.5 cm" },
          solution: [
            "The support post makes a small right-angled triangle that is similar to the whole ramp triangle (shared angle at the lower end, both have a right angle).",
            "Scale factor = {{1.5/4.8 = 0.3125}}.",
            "Height = 1.2 × 0.3125 = 0.375 m = 37.5 cm.",
          ],
          solutions: [
            { label: "Use the gradient", steps: ["The ramp rises {{1.2/4.8 = 0.25}} m for every metre across.", "After 1.5 m: 1.5 × 0.25 = 0.375 m = 37.5 cm."] },
          ],
          commonError: "Giving the answer in metres (0.375) when centimetres were asked for.",
          traps: [{ spec: { type: "number", value: 0.375 }, feedback: "Correct in metres — but the question asks for centimetres." }],
          difficulty: "core",
          guideRef: "similar-lengths",
          hints: ["Sketch the ramp as a right-angled triangle and draw the post inside it.", "The small triangle and the big triangle share the angle at the bottom of the ramp.", "Scale factor = {{1.5/4.8}}."],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "similarity-congruence-p2-q13",
          question:
            "A sheet of A4 paper is a rectangle with long side L and short side S. When it is folded in half (halving the long side), the new rectangle is similar to the original.\n\nFind the exact value of {{L/S}}. Give your answer as a surd.",
          answer: { type: "expression", expr: "sqrt(2)", form: "surd", display: "{{sqrt(2)}}" },
          solution: [
            "Folded rectangle: long side S, short side {{L/2}}.",
            "Similar, so long ÷ short is the same: {{L/S = S/(L/2) = (2S)/L}}.",
            "Cross-multiply: {{L^2 = 2S^2}}, so {{L/S = sqrt(2)}}.",
          ],
          commonError: "Matching L with L/2 (long with long-before-folding) instead of the new long side S.",
          traps: [{ spec: { type: "number", value: 2 }, feedback: "That's {{(L/S)^2}}. Take the square root." }],
          difficulty: "challenge",
          guideRef: "similar-lengths",
          hints: ["After folding, which side is the longer one?", "The new rectangle is S by {{L/2}}, with S now the long side.", "Set long ÷ short equal for both rectangles and solve for {{L/S}}."],
          strategy: "Introduce a variable",
        },
        {
          kind: "written",
          id: "similarity-congruence-p2-q14",
          question:
            "Two solids are mathematically similar. Their surface areas are 72 cm² and 162 cm².\n\nShow that the ratio of their volumes is 8 : 27.",
          marks: 3,
          modelAnswer:
            "Area ratio = 72 : 162 = 4 : 9 (dividing by 18).\n\nLength ratio = {{sqrt(4) : sqrt(9)}} = 2 : 3.\n\nVolume ratio = {{2^3 : 3^3}} = **8 : 27**.",
          markScheme: [
            { point: "Simplifies the area ratio to 4 : 9", keywords: ["4 : 9", "4:9", "4/9", "9/4", "2.25"] },
            { point: "Square-roots to get the length ratio 2 : 3", keywords: ["2 : 3", "2:3", "2/3", "3/2", "1.5", "square root"] },
            { point: "Cubes to get 8 : 27", keywords: ["8 : 27", "8:27", "cube", "2^3", "3^3"] },
          ],
          commonError: "Cubing the area ratio, or simplifying 72 : 162 only partly (e.g. to 36 : 81 and then stalling).",
          difficulty: "challenge",
          guideRef: "area-volume-scale",
          hints: ["Simplify 72 : 162 first.", "Areas → lengths: square root.", "Lengths → volumes: cube."],
          strategy: "Go via lengths",
        },
        {
          kind: "short",
          id: "similarity-congruence-p2-q15",
          question:
            "A paper cup is a cone, vertex down, 15 cm deep, and holds 750 cm³ when full. Water is poured in to a depth of 6 cm.\n\nWork out the volume of water in the cup, in cm³.",
          answer: { type: "number", value: 48, display: "48 cm³" },
          solution: [
            "The water forms a cone similar to the cup, with length scale factor {{6/15 = 2/5}}.",
            "Volume factor = {{(2/5)^3 = 8/125}}.",
            "Water = {{750 * 8/125 = 48}} cm³.",
          ],
          commonError: "Using {{6/15}} of 750 (giving 300 cm³) — the cone narrows towards the bottom, so the lower part holds far less.",
          traps: [{ spec: { type: "number", value: 300 }, feedback: "That treats the cup like a cylinder. The water is a smaller *similar cone*: use {{(6/15)^3}}." }],
          difficulty: "challenge",
          guideRef: "area-volume-scale",
          hints: ["What shape does the water make?", "The water cone is similar to the full cup. Length scale factor?", "Volume factor = {{(6/15)^3}}."],
          strategy: "Spot a similar shape",
        },
      ],
    },
  ],

  // =========================================================================
  // Challenge problems
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "similarity-congruence-ch-q01",
      question:
        "Triangle ABC has a right angle at A. D is the point on BC such that AD is perpendicular to BC. BD = 4 cm and DC = 9 cm.\n\nWork out the length of AD, in cm.",
      diagram: ALTITUDE,
      answer: { type: "number", value: 6, display: "6 cm" },
      solution: [
        "Triangles ABD and CAD are similar: each has a right angle at D, and angle ABD = 90° − angle C = angle CAD.",
        "Matching sides: {{(AD)/(BD) = (CD)/(AD)}}.",
        "{{AD^2 = BD * DC = 4 * 9 = 36}}, so AD = 6 cm.",
      ],
      solutions: [
        { label: "Similar triangles", steps: ["Triangle ABD ~ triangle CAD gives {{AD^2 = BD * DC}}.", "{{AD = sqrt(36) = 6}} cm."] },
        {
          label: "Pythagoras three times",
          steps: [
            "Let AD = h. Then {{AB^2 = 16 + h^2}} and {{AC^2 = 81 + h^2}}.",
            "Triangle ABC is right-angled at A: {{AB^2 + AC^2 = BC^2 = 13^2 = 169}}.",
            "{{97 + 2h^2 = 169}}, so {{h^2 = 36}} and h = 6.",
          ],
        },
      ],
      commonError: "Taking the mean of 4 and 9 (6.5) — the altitude is the *geometric* mean, {{sqrt(4 * 9)}}.",
      traps: [{ spec: { type: "number", value: 6.5 }, feedback: "That's the arithmetic mean. Similar triangles give {{AD^2 = 4 * 9}}." }],
      difficulty: "challenge",
      guideRef: "similar-lengths",
      hints: [
        "How many right-angled triangles can you see in the diagram?",
        "Show that angle BAD = angle C. (Both are 90° minus angle B.)",
        "So triangles ABD and CAD are similar. Write the ratio with AD in it twice.",
        "{{(AD)/4 = 9/(AD)}}",
      ],
      strategy: "Look for hidden similar triangles",
    },
    {
      kind: "short",
      id: "similarity-congruence-ch-q02",
      question:
        "ABCD is a trapezium with AB parallel to DC. AB = 6 cm and DC = 15 cm. The diagonals AC and BD meet at X. AC = 14 cm.\n\nWork out the length of AX, in cm.",
      diagram: TRAPEZIUM,
      answer: { type: "number", value: 4, display: "4 cm" },
      solution: [
        "Angle AXB = angle CXD (vertically opposite); angle BAX = angle DCX (alternate, AB ∥ DC). So triangles ABX and CDX are similar.",
        "Scale factor = {{(DC)/(AB) = 15/6 = 5/2}}, so AX : XC = 2 : 5.",
        "AX = {{2/7 * 14 = 4}} cm.",
      ],
      commonError: "Taking AX = 6 and XC = 15 directly (they add to 21, not 14) — it's the *ratio* 6 : 15 that transfers.",
      traps: [{ spec: { type: "number", value: 10 }, feedback: "10 cm is XC, the longer part. AX is next to the shorter parallel side AB." }],
      difficulty: "challenge",
      guideRef: "similar-lengths",
      hints: [
        "Find two triangles that meet at X.",
        "Triangles ABX and CDX are similar. Why?",
        "So AX : XC = AB : CD = 6 : 15. Simplify.",
        "Split 14 in the ratio 2 : 5.",
      ],
      strategy: "Look for hidden similar triangles",
    },
    {
      kind: "short",
      id: "similarity-congruence-ch-q03",
      question:
        "A right-angled triangle has shorter sides 6 cm and 3 cm. A square of side s cm fits in the right-angled corner, with the opposite corner of the square touching the hypotenuse.\n\nWork out s.",
      diagram: SQUARE_IN_TRI,
      answer: { type: "number", value: 2, display: "s = 2" },
      solution: [
        "Above the square is a small right-angled triangle with base s and height 3 − s. It is similar to the whole triangle (base 6, height 3).",
        "{{(3 - s)/s = 3/6}}, so 6(3 − s) = 3s.",
        "18 − 6s = 3s, so 9s = 18 and s = 2.",
      ],
      solutions: [
        { label: "Similar triangles", steps: ["Small triangle on top ~ whole triangle: {{(3 - s)/s = 3/6}}.", "s = 2."] },
        {
          label: "Coordinates",
          steps: [
            "Put the right angle at the origin. The hypotenuse is {{x/6 + y/3 = 1}}.",
            "The square's far corner is (s, s), so {{s/6 + s/3 = 1}}.",
            "{{s/2 = 1}}, so s = 2. (In general {{s = (ab)/(a + b)}}.)",
          ],
        },
      ],
      commonError: "Guessing s = 1.5 (half the shorter side) — check it: the corner (1.5, 1.5) is inside the triangle, not on the hypotenuse.",
      traps: [{ spec: { type: "number", value: 1.5 }, feedback: "Test it: does (1.5, 1.5) satisfy {{x/6 + y/3 = 1}}? It gives 0.75, so the corner isn't on the hypotenuse." }],
      difficulty: "challenge",
      guideRef: "similar-lengths",
      hints: [
        "The square cuts off two small triangles. What do you notice about them?",
        "Look at the triangle above the square: its base is s and its height is 3 − s.",
        "It is similar to the whole triangle, which has base 6 and height 3.",
        "{{(3 - s)/s = 3/6}}",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "similarity-congruence-ch-q04",
      question:
        "A solid cone is cut by two planes parallel to its base, at one third and two thirds of the way down from the vertex. This makes three pieces: a small cone on top and two frustums.\n\nWork out the ratio of the volumes of the three pieces, from the top piece down. Give your answer in its simplest form.",
      answer: { type: "ratio", parts: [1, 7, 19], simplest: true, display: "1 : 7 : 19" },
      solution: [
        "The cones with heights {{1/3}}, {{2/3}} and 1 of the full height are similar, with length ratio 1 : 2 : 3.",
        "Their volumes are in the ratio {{1^3 : 2^3 : 3^3 = 1 : 8 : 27}}.",
        "Pieces: top = 1; middle = 8 − 1 = 7; bottom = 27 − 8 = 19.",
        "Ratio 1 : 7 : 19.",
      ],
      commonError: "Answering 1 : 8 : 27 — those are the volumes of the *nested cones*, not of the slices.",
      traps: [
        { spec: { type: "ratio", parts: [1, 8, 27] }, feedback: "Those are the three whole cones. Each slice is the *difference* between consecutive cones." },
        { spec: { type: "ratio", parts: [1, 3, 5] }, feedback: "That's the pattern for areas (differences of 1, 4, 9). Volumes use cubes." },
      ],
      difficulty: "challenge",
      guideRef: "area-volume-scale",
      hints: [
        "Each cut creates a smaller cone similar to the whole one.",
        "Think of three nested cones with heights in the ratio 1 : 2 : 3.",
        "Their volumes are in the ratio 1 : 8 : 27.",
        "A slice is the difference between two cones.",
      ],
      strategy: "Subtract a similar shape",
    },
    {
      kind: "short",
      id: "similarity-congruence-ch-q05",
      question:
        "Triangle ABC has base BC = 10 cm. A line DE is drawn parallel to BC, with D on AB and E on AC, so that triangle ADE has exactly **half** the area of triangle ABC.\n\nWork out the exact length of DE. Give your answer in the form {{a sqrt(b)}}.",
      answer: { type: "expression", expr: "5sqrt(2)", form: "surd", display: "{{5 sqrt(2)}} cm" },
      solution: [
        "Triangle ADE is similar to triangle ABC with area scale factor {{1/2}}.",
        "Length scale factor = {{sqrt(1/2) = 1/sqrt(2)}}.",
        "DE = {{10/sqrt(2) = (10 sqrt(2))/2 = 5 sqrt(2)}} cm.",
      ],
      commonError: "Halving the base (DE = 5 cm) — that gives only a quarter of the area.",
      traps: [
        { spec: { type: "number", value: 5 }, feedback: "Halving the lengths quarters the area. You need lengths × {{1/sqrt(2)}}." },
        { spec: { type: "expression", expr: "10/sqrt(2)" }, feedback: "Right value — now rationalise the denominator to get the form {{a sqrt(b)}}." },
      ],
      difficulty: "challenge",
      guideRef: "area-volume-scale",
      hints: [
        "What is the area scale factor from ABC to ADE?",
        "Area factor {{1/2}} means length factor = ?",
        "Length factor {{1/sqrt(2)}}. Multiply 10 by it, then rationalise.",
      ],
      strategy: "Work backwards",
    },
    {
      kind: "short",
      id: "similarity-congruence-ch-q06",
      question:
        "Two solid statues are mathematically similar and made of the same metal. The small statue has mass 2.4 kg. The surface area of the large statue is 2.25 times the surface area of the small statue.\n\nWork out the mass of the large statue, in kg.",
      answer: { type: "number", value: 8.1, display: "8.1 kg" },
      solution: [
        "Area factor {{k^2 = 2.25}}, so {{k = 1.5}}.",
        "Same metal, so mass is proportional to volume: mass factor {{k^3 = 1.5^3 = 3.375}}.",
        "Mass = 2.4 × 3.375 = 8.1 kg.",
      ],
      solutions: [
        { label: "Via the scale factors", steps: ["{{k = sqrt(2.25) = 1.5}}, {{k^3 = 3.375}}.", "2.4 × 3.375 = 8.1 kg."] },
        { label: "Power shortcut", steps: ["Mass factor = {{(k^2)^(3/2) = 2.25^(3/2)}}.", "{{2.25^(3/2) = (sqrt(2.25))^3 = 1.5^3 = 3.375}}, so 8.1 kg."] },
      ],
      commonError: "Multiplying the mass by 2.25 (giving 5.4 kg) — mass follows volume, not area.",
      traps: [{ spec: { type: "number", value: 5.4 }, feedback: "Mass depends on volume (same metal), not surface area. Find k, then use {{k^3}}." }],
      difficulty: "challenge",
      guideRef: "area-volume-scale",
      hints: [
        "Mass of a solid made of the same material is proportional to what?",
        "Turn the area factor into a length factor.",
        "{{k = sqrt(2.25) = 1.5}}. Now find the volume factor.",
      ],
      strategy: "Go via lengths",
    },
    {
      kind: "short",
      id: "similarity-congruence-ch-q07",
      question:
        "An architect builds a model of an HDB block at a scale of 1 : 200. The model has a volume of 3000 cm³.\n\nWork out the volume of the real block. Give your answer in m³.",
      answer: { type: "number", value: 24000, display: "24 000 m³" },
      solution: [
        "Volume scale factor = {{200^3 = 8 000 000}}.",
        "Real volume = 3000 × 8 000 000 = 24 000 000 000 cm³.",
        "1 m³ = 1 000 000 cm³, so the real volume = 24 000 m³.",
      ],
      solutions: [
        { label: "Convert the model first", steps: ["3000 cm³ = 3000 ÷ 1 000 000 = 0.003 m³.", "0.003 × {{200^3}} = 0.003 × 8 000 000 = 24 000 m³."] },
        { label: "Cancel the 100s", steps: ["1 cm on the model is 200 cm = 2 m in real life.", "So 1 cm³ on the model is {{2^3 = 8}} m³ in real life.", "3000 × 8 = 24 000 m³."] },
      ],
      commonError: "Multiplying by 200 or {{200^2}}, or dividing by 100 instead of 1 000 000 to convert cm³ to m³.",
      traps: [
        { spec: { type: "number", value: 120 }, feedback: "You used the area factor {{200^2}}. Volumes scale by {{200^3}}." },
        { spec: { type: "number", value: 240000000 }, feedback: "Divide by 1 000 000 (not 100) to change cm³ into m³." },
      ],
      difficulty: "challenge",
      guideRef: "area-volume-units",
      hints: [
        "Two jobs: scale the volume, then convert the units. Which order is easier?",
        "Volume factor for a 1 : 200 model is {{200^3}}.",
        "Neat trick: 1 cm on the model is 2 m in real life. What is 1 cm³ in real life?",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "short",
      id: "similarity-congruence-ch-q08",
      question:
        "Mei says: \"If two triangles have two pairs of equal sides and one pair of equal angles, they must be congruent.\"\n\nTest her claim: triangle ABC has AB = 8 cm, BC = 6 cm and angle BAC = 40°. Find **both** possible lengths of AC. Give your answers correct to 3 significant figures.",
      answer: { type: "list", values: [9.22, 3.04], ordered: false, tolerance: 0.01, display: "9.22 cm and 3.04 cm" },
      solution: [
        "Let AC = x. Cosine rule on side BC (opposite angle A): {{6^2 = 8^2 + x^2 - 2 * 8 * x cos 40°}}.",
        "{{x^2 - (16 cos 40°)x + 28 = 0}}, i.e. {{x^2 - 12.2567x + 28 = 0}}.",
        "Quadratic formula: {{x = (12.2567 +- sqrt(150.23 - 112))/2 = (12.2567 +- 6.183)/2}}.",
        "x = 9.22 cm or x = 3.04 cm.",
        "Two different triangles fit the same SSA data, so Mei is wrong: SSA is **not** a congruence condition.",
      ],
      solutions: [
        {
          label: "Sine rule (ambiguous case)",
          steps: [
            "{{sin C = (8 sin 40°)/6 = 0.8571}}, so C = 59.0° or C = 121.0°.",
            "Then B = 81.0° or 19.0°.",
            "{{AC = (6 sin B)/(sin 40°)}} = 9.22 cm or 3.04 cm.",
          ],
        },
      ],
      commonError: "Finding only one answer — the calculator's {{sin^(-1)}} gives the acute angle only; the obtuse angle 180° − 59.0° also works.",
      traps: [{ spec: { type: "list", values: [9.22], tolerance: 0.01 }, feedback: "That's one triangle. There's a second one — the obtuse case." }],
      difficulty: "challenge",
      guideRef: "congruence",
      hints: [
        "Draw AB = 8 cm and the 40° angle at A. Now swing a 6 cm arc from B. How many times does it cross the other arm?",
        "Call AC = x and use the cosine rule with the 40° angle.",
        "You get a quadratic in x. How many positive roots does it have?",
        "{{x^2 - 12.2567x + 28 = 0}}",
      ],
      strategy: "Test the claim",
    },
    {
      kind: "written",
      id: "similarity-congruence-ch-q09",
      question:
        "ABC is an equilateral triangle. Points D, E and F lie on AB, BC and CA respectively, with AD = BE = CF.\n\nProve that triangle DEF is equilateral.",
      marks: 4,
      modelAnswer:
        "Let the side of ABC be s and AD = BE = CF = t.\n\nThen DB = s − t, EC = s − t and FA = s − t.\n\nIn triangles ADF, BED and CFE:\n\n- AD = BE = CF = t\n- AF = BD = CE = s − t\n- angle A = angle B = angle C = 60° (equilateral triangle), and each is the angle between those two sides.\n\nSo triangles ADF, BED and CFE are congruent (**SAS**).\n\nHence DF = ED = FE (corresponding sides), so triangle DEF is equilateral.",
      markScheme: [
        { point: "Shows the remaining parts are equal: AF = BD = CE = s − t", keywords: ["s - t", "s − t", "af = bd", "bd = ce", "remaining", "subtract"] },
        { point: "Uses the 60° angles (equilateral) as the included angles", keywords: ["60", "equilateral", "included"] },
        { point: "States the three corner triangles are congruent by SAS", keywords: ["sas", "congruent"] },
        { point: "Concludes DF = DE = EF so DEF is equilateral", keywords: ["df = de", "de = ef", "df = ed", "fe", "equilateral", "corresponding sides"] },
      ],
      commonError: "Proving just two of the corner triangles congruent and claiming all three sides of DEF are equal.",
      solutions: [
        { label: "Rotation argument", steps: ["A rotation of 120° about the centre of ABC maps A → B → C → A.", "Because AD = BE = CF, it maps D → E → F → D.", "Rotations preserve length, so DE = EF = FD."] },
      ],
      difficulty: "challenge",
      guideRef: "congruence",
      hints: [
        "Draw it. DEF cuts off three triangles at the corners.",
        "In each corner triangle, what are the two sides next to the 60° angle?",
        "If AD = t and the side is s, the other piece of each side is s − t.",
        "Three congruent corner triangles — their third sides are the sides of DEF.",
      ],
      strategy: "Use symmetry",
    },
    {
      kind: "short",
      id: "similarity-congruence-ch-q10",
      question:
        "In triangle ABC, D lies on AB and E lies on AC with DE parallel to BC. AD : DB = 2 : 3. The area of triangle ADE is 12 cm².\n\nWork out the area of the trapezium DBCE, in cm².",
      answer: { type: "number", value: 63, display: "63 cm²" },
      solution: [
        "AD : AB = 2 : 5, so the length scale factor from ADE to ABC is {{5/2}}.",
        "Area factor = {{(5/2)^2 = 25/4}}, so area of ABC = {{12 * 25/4 = 75}} cm².",
        "Trapezium = 75 − 12 = 63 cm².",
      ],
      solutions: [
        { label: "Think in area 'units'", steps: ["Areas of ADE : ABC = {{2^2 : 5^2 = 4 : 25}}.", "Trapezium = 25 − 4 = 21 units; 4 units = 12 cm², so 1 unit = 3 cm².", "21 × 3 = 63 cm²."] },
      ],
      commonError: "Using the ratio 2 : 3 as the scale factor (AD : DB) instead of AD : AB = 2 : 5.",
      traps: [
        { spec: { type: "number", value: 27 }, feedback: "You used AD : DB = 2 : 3 as the scale factor. Compare AD with the whole of AB: 2 : 5." },
        { spec: { type: "number", value: 75 }, feedback: "75 cm² is the whole triangle ABC. Subtract the small triangle." },
      ],
      difficulty: "challenge",
      guideRef: "area-volume-scale",
      hints: [
        "Which two triangles are similar, and what's the ratio of their *matching* sides?",
        "AD : AB = 2 : 5 (not 2 : 3).",
        "Area ratio = {{2^2 : 5^2}}.",
        "The trapezium is the big triangle minus the small one.",
      ],
      strategy: "Subtract a similar shape",
    },
  ],
};
