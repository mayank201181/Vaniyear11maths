// Length, area & volume (mensuration) — MCQ papers (3 × 15). Options are shuffled at display time.
// Every distractor is a specific, common error; diagrams are drawn to scale from the stated lengths.
import type { Paper } from "../../types.ts";

// Right trapezium: parallel sides 8 cm (top) and 12 cm (bottom), height 5 cm, slant 6.4 cm (scale 20 px/cm).
const M1Q02 = `<svg viewBox="0 0 320 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A right-angled trapezium. The parallel sides are 8 cm on top and 12 cm on the bottom. The left side is vertical, 5 cm, with right angles at both ends. The slanted right side is 6.4 cm."><rect x="0" y="0" width="320" height="180" fill="#ffffff"/><polygon points="40,140 280,140 200,40 40,40" fill="#c7d2fe" fill-opacity="0.5" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polyline points="50,140 50,130 40,130" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="50,40 50,50 40,50" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="120" y="32" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">8 cm</text><text x="160" y="160" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">12 cm</text><text x="34" y="95" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">5 cm</text><text x="248" y="84" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">6.4 cm</text></svg>`;

// Square of side 10 cm with a circle touching all four sides; region outside the circle shaded.
const M1Q07 = `<svg viewBox="0 0 260 205" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square of side 10 cm with a circle drawn inside it touching all four sides. The four corner regions outside the circle are shaded."><rect x="0" y="0" width="260" height="205" fill="#ffffff"/><rect x="50" y="15" width="160" height="160" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><circle cx="130" cy="95" r="80" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><text x="130" y="196" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">10 cm</text><text x="218" y="100" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">10 cm</text></svg>`;

// Frustum: cone radius 6, height 12 with top cone radius 3, height 6 removed (scale 15 px/cm).
const M1Q13 = `<svg viewBox="0 0 330 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A frustum made by cutting the top off a cone. The full cone has base radius 6 cm and height 12 cm. The small cone removed from the top, shown dashed, has radius 3 cm and height 6 cm."><rect x="0" y="0" width="330" height="240" fill="#ffffff"/><polygon points="70,210 250,210 205,120 115,120" fill="#bbf7d0" fill-opacity="0.6" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><ellipse cx="160" cy="210" rx="90" ry="12" fill="none" stroke="#1f2937" stroke-width="1.5"/><ellipse cx="160" cy="120" rx="45" ry="6" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><polyline points="115,120 160,30 205,120" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="160" y1="210" x2="250" y2="210" stroke="#b45309" stroke-width="1.8"/><text x="205" y="228" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">6 cm</text><line x1="160" y1="120" x2="205" y2="120" stroke="#b45309" stroke-width="1.8"/><text x="183" y="113" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">3 cm</text><line x1="285" y1="30" x2="285" y2="120" stroke="#334155" stroke-width="1.2"/><line x1="285" y1="120" x2="285" y2="210" stroke="#334155" stroke-width="1.2"/><line x1="279" y1="30" x2="291" y2="30" stroke="#334155" stroke-width="1.2"/><line x1="279" y1="120" x2="291" y2="120" stroke="#334155" stroke-width="1.2"/><line x1="279" y1="210" x2="291" y2="210" stroke="#334155" stroke-width="1.2"/><line x1="160" y1="30" x2="285" y2="30" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,3"/><text x="293" y="79" font-size="12" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">6 cm</text><text x="293" y="169" font-size="12" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">6 cm</text></svg>`;

// Isosceles triangle: base 9 cm, equal sides 7.5 cm, perpendicular height 6 cm (scale 22 px/cm).
const M2Q02 = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A triangle with base 9 cm and two sloping sides of 7.5 cm. A dashed perpendicular height of 6 cm is drawn from the top vertex to the base, meeting it at a right angle."><rect x="0" y="0" width="300" height="200" fill="#ffffff"/><polygon points="50,170 248,170 149,38" fill="#fde68a" fill-opacity="0.6" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="149" y1="38" x2="149" y2="170" stroke="#334155" stroke-width="1.5" stroke-dasharray="5,4"/><polyline points="149,160 159,160 159,170" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="149" y="190" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">9 cm</text><text x="92" y="100" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">7.5 cm</text><text x="156" y="115" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">6 cm</text></svg>`;

// Rectangle 12 cm by 8 cm with a semicircle of diameter 8 cm cut from one end (scale 18 px/cm).
const M2Q07 = `<svg viewBox="0 0 300 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangle 12 cm long and 8 cm high. A semicircle whose diameter is the whole 8 cm right-hand side has been cut out of the rectangle. The remaining shape is shaded."><rect x="0" y="0" width="300" height="200" fill="#ffffff"/><path d="M 40 30 L 256 30 A 72 72 0 0 0 256 174 L 40 174 Z" fill="#bae6fd" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="256" y1="30" x2="256" y2="174" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,4"/><text x="148" y="22" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">12 cm</text><text x="32" y="106" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">8 cm</text></svg>`;

// Cone (height 10) on a hemisphere (radius 6), scale 12 px/cm.
const M2Q12 = `<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A solid made of a cone sitting on a hemisphere. Both have radius 6 cm. The perpendicular height of the cone is 10 cm."><rect x="0" y="0" width="300" height="250" fill="#ffffff"/><path d="M 78 160 L 150 40 L 222 160 Z" fill="#fde68a" fill-opacity="0.7" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><path d="M 78 160 A 72 72 0 0 0 222 160 Z" fill="#c7d2fe" fill-opacity="0.7" stroke="#1f2937" stroke-width="2"/><ellipse cx="150" cy="160" rx="72" ry="10" fill="none" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/><line x1="150" y1="40" x2="150" y2="160" stroke="#334155" stroke-width="1.3" stroke-dasharray="5,4"/><line x1="150" y1="160" x2="222" y2="160" stroke="#b45309" stroke-width="1.8"/><text x="186" y="178" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">6 cm</text><text x="144" y="104" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">10 cm</text></svg>`;

// Lampshade frustum: cone radius 10, slant 26 minus cone radius 5, slant 13 (scale 7 px/cm).
const M2Q14 = `<svg viewBox="0 0 320 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An open lampshade in the shape of a frustum. It is a cone of base radius 10 cm and slant height 26 cm with a smaller cone of radius 5 cm and slant height 13 cm, shown dashed, removed from the top. The slanted edge of the lampshade is 13 cm long."><rect x="0" y="0" width="320" height="230" fill="#ffffff"/><polygon points="90,192 230,192 195,108 125,108" fill="#fecaca" fill-opacity="0.6" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><ellipse cx="160" cy="192" rx="70" ry="10" fill="none" stroke="#1f2937" stroke-width="1.5"/><ellipse cx="160" cy="108" rx="35" ry="5" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><polyline points="125,108 160,24 195,108" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="160" y1="192" x2="230" y2="192" stroke="#b45309" stroke-width="1.8"/><text x="195" y="214" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">10 cm</text><line x1="160" y1="108" x2="195" y2="108" stroke="#b45309" stroke-width="1.8"/><text x="178" y="101" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">5 cm</text><text x="218" y="150" font-size="12" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">13 cm</text><text x="184" y="60" font-size="12" font-family="sans-serif" text-anchor="start" fill="#64748b">13 cm</text></svg>`;

// Quarter circle OAB, radius 10 cm, segment between arc and chord AB shaded (scale 16 px/cm).
const M2Q15 = `<svg viewBox="0 0 240 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A sector OAB of a circle with centre O, radius 10 cm and a right angle at O. The chord AB is drawn and the segment between the chord and the arc is shaded."><rect x="0" y="0" width="240" height="225" fill="#ffffff"/><path d="M 40 190 L 200 190 A 160 160 0 0 0 40 30 Z" fill="#ffffff" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><path d="M 200 190 A 160 160 0 0 0 40 30 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polyline points="40,178 52,178 52,190" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="30" y="204" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">O</text><text x="208" y="204" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="32" y="26" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="120" y="208" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">10 cm</text><text x="34" y="114" font-size="12" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">10 cm</text></svg>`;

// Parallelogram: base 11 cm, slanted side 7 cm, perpendicular height 6 cm (scale 18 px/cm).
const M3Q02 = `<svg viewBox="0 0 320 185" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A parallelogram with base 11 cm and slanted sides 7 cm. A dashed perpendicular height of 6 cm is drawn from a top corner down to the base."><rect x="0" y="0" width="320" height="185" fill="#ffffff"/><polygon points="30,150 228,150 292.9,42 94.9,42" fill="#bbf7d0" fill-opacity="0.6" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="94.9" y1="42" x2="94.9" y2="150" stroke="#334155" stroke-width="1.5" stroke-dasharray="5,4"/><polyline points="94.9,140 104.9,140 104.9,150" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="129" y="170" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">11 cm</text><text x="56" y="96" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">7 cm</text><text x="101" y="100" font-size="13" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">6 cm</text></svg>`;

// Window: rectangle 1.2 m by 1.5 m topped by a semicircle of diameter 1.2 m (scale 100 px/m).
const M3Q06 = `<svg viewBox="0 0 300 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A window made from a rectangle 1.2 m wide and 1.5 m tall with a semicircle on top. The diameter of the semicircle is the 1.2 m top edge of the rectangle."><rect x="0" y="0" width="300" height="270" fill="#ffffff"/><path d="M 90 240 L 90 90 A 60 60 0 0 1 210 90 L 210 240 Z" fill="#bae6fd" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><line x1="90" y1="90" x2="210" y2="90" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,4"/><text x="150" y="258" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1e3a8a">1.2 m</text><text x="82" y="170" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1e3a8a">1.5 m</text></svg>`;

// Cylinder radius 4, height 10, with a hemisphere of radius 4 on top (scale 12 px/cm).
const M3Q11 = `<svg viewBox="0 0 300 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A solid made of a cylinder of radius 4 cm and height 10 cm with a hemisphere of radius 4 cm fixed on top."><rect x="0" y="0" width="300" height="250" fill="#ffffff"/><path d="M 102 100 A 48 48 0 0 1 198 100 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M 102 100 L 102 220 A 48 10 0 0 0 198 220 L 198 100 Z" fill="#c7d2fe" fill-opacity="0.7" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><ellipse cx="150" cy="100" rx="48" ry="10" fill="none" stroke="#1f2937" stroke-width="1.5"/><path d="M 102 220 A 48 10 0 0 1 198 220" fill="none" stroke="#64748b" stroke-width="1.2" stroke-dasharray="4,3"/><line x1="150" y1="220" x2="198" y2="220" stroke="#b45309" stroke-width="1.8"/><text x="174" y="240" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">4 cm</text><line x1="220" y1="100" x2="220" y2="220" stroke="#334155" stroke-width="1.2"/><line x1="214" y1="100" x2="226" y2="100" stroke="#334155" stroke-width="1.2"/><line x1="214" y1="220" x2="226" y2="220" stroke="#334155" stroke-width="1.2"/><text x="230" y="164" font-size="12" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">10 cm</text></svg>`;

// Bucket: frustum with base radius 10, top radius 15, height 20; completed cone (dashed) has apex 60 cm below the rim (scale 4 px/cm).
const M3Q13 = `<svg viewBox="0 0 320 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A bucket in the shape of a frustum with top radius 15 cm, base radius 10 cm and height 20 cm. The sloping sides are extended with dashed lines to meet at a point 40 cm below the base, completing a cone of height 60 cm."><rect x="0" y="0" width="320" height="290" fill="#ffffff"/><polygon points="100,30 220,30 200,110 120,110" fill="#bbf7d0" fill-opacity="0.6" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><ellipse cx="160" cy="30" rx="60" ry="9" fill="#ffffff" stroke="#1f2937" stroke-width="1.5"/><ellipse cx="160" cy="110" rx="40" ry="6" fill="none" stroke="#1f2937" stroke-width="1.5"/><polyline points="120,110 160,270 200,110" fill="none" stroke="#64748b" stroke-width="1.5" stroke-dasharray="5,4"/><line x1="160" y1="30" x2="220" y2="30" stroke="#b45309" stroke-width="1.8"/><text x="190" y="24" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">15 cm</text><line x1="160" y1="110" x2="200" y2="110" stroke="#b45309" stroke-width="1.8"/><text x="180" y="128" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">10 cm</text><line x1="250" y1="30" x2="250" y2="110" stroke="#334155" stroke-width="1.2"/><line x1="250" y1="110" x2="250" y2="270" stroke="#334155" stroke-width="1.2"/><line x1="244" y1="30" x2="256" y2="30" stroke="#334155" stroke-width="1.2"/><line x1="244" y1="110" x2="256" y2="110" stroke="#334155" stroke-width="1.2"/><line x1="244" y1="270" x2="256" y2="270" stroke="#334155" stroke-width="1.2"/><line x1="160" y1="270" x2="250" y2="270" stroke="#94a3b8" stroke-width="1" stroke-dasharray="2,3"/><text x="260" y="74" font-size="12" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">20 cm</text><text x="260" y="194" font-size="12" font-family="sans-serif" text-anchor="start" fill="#1e3a8a">40 cm</text></svg>`;

export const mcqPapers: Paper[] = [
  // ======================================================================
  {
    id: "mensuration-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "mensuration-m1-q01",
        question: "A circle has radius 7 cm.\n\nWork out the circumference of the circle. Give your answer correct to 3 significant figures.",
        options: ["44.0 cm", "154 cm", "22.0 cm", "88.0 cm"],
        answerIndex: 0,
        explanation:
          "Circumference {{= 2 pi r = 2 * pi * 7 = 43.98...}} ≈ 44.0 cm. 154 cm is the **area** ({{pi r^2}}) — and it can't be in cm anyway; 22.0 cm is {{pi r}}, half the circumference; 88.0 cm treats 14 (the diameter) as the radius in {{2 pi r}}.",
        difficulty: "warmup",
        guideRef: "circles-arcs-sectors",
        hints: ["Circumference uses {{2 pi r}} or {{pi d}}.", "The diameter is 14 cm, so {{C = pi * 14}}."],
        strategy: "Check the units",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q02",
        question: "The diagram shows a trapezium.\n\nWork out the area of the trapezium.",
        diagram: M1Q02,
        options: ["100 cm²", "50 cm²", "64 cm²", "240 cm²"],
        answerIndex: 1,
        explanation:
          "Area {{= 1/2 (a + b) h = 1/2 (8 + 12) * 5 = 50}} cm². The height must be the **perpendicular** distance between the parallel sides — the 5 cm side, not the 6.4 cm slant. 64 cm² uses the slant; 100 cm² forgets the half; 240 cm² multiplies 8 × 12 × 5 ÷ 2 as if it were a prism.",
        difficulty: "warmup",
        guideRef: "areas-2d",
        hints: ["Which two sides are parallel?", "Average the parallel sides, then multiply by the perpendicular height."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q03",
        question: "A cylinder has radius 3 cm and height 10 cm.\n\nWork out the volume of the cylinder. Give your answer in terms of π.",
        options: ["60π cm³", "30π cm³", "90π cm³", "360π cm³"],
        answerIndex: 2,
        explanation:
          "Volume = area of cross-section × length {{= pi r^2 h = pi * 9 * 10 = 90 pi}} cm³. 60π is {{2 pi r h}}, the curved surface **area**; 30π forgets to square the radius; 360π uses the diameter 6 instead of the radius.",
        difficulty: "warmup",
        guideRef: "prisms-cylinders",
        hints: ["A cylinder is a prism with a circular cross-section.", "Area of the circle × height."],
        strategy: "Use a formula you understand",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q04",
        question: "A fish tank is a cuboid 50 cm long, 40 cm wide and 30 cm tall.\n\nHow many litres of water does it hold when full?",
        options: ["600 litres", "6 litres", "60 000 litres", "60 litres"],
        answerIndex: 3,
        explanation:
          "Volume = 50 × 40 × 30 = 60 000 cm³. Since 1 litre = 1000 cm³, that is 60 000 ÷ 1000 = 60 litres. 600 litres divides by 100; 6 litres divides by 10 000; 60 000 litres forgets to convert. Sense check: a 60-litre tank is a sensible home aquarium.",
        difficulty: "warmup",
        guideRef: "prisms-cylinders",
        hints: ["Find the volume in cm³ first.", "1 litre = 1000 cm³."],
        strategy: "Estimate first",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q05",
        question: "A sector of a circle has radius 10 cm and angle 72°.\n\nWork out the arc length of the sector. Give your answer in terms of π.",
        options: ["20π cm", "4π cm", "2π cm", "(4π + 20) cm"],
        answerIndex: 1,
        explanation:
          "72° is {{72/360 = 1/5}} of a full turn, so arc length {{= 1/5 * 2 pi * 10 = 4 pi}} cm. 20π is {{1/5}} of the **area** {{pi * 10^2}}; 2π uses {{pi r}} instead of {{2 pi r}}; {{(4 pi + 20)}} cm is the **perimeter** — it adds the two radii.",
        difficulty: "core",
        guideRef: "circles-arcs-sectors",
        hints: ["What fraction of the whole circle is this sector?", "Arc length = that fraction × circumference.", "{{72/360 = 1/5}}, and the circumference is {{20 pi}}."],
        strategy: "Fraction of the whole",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q06",
        question: "A semicircle has diameter 12 cm.\n\nWork out the perimeter of the semicircle. Give your answer correct to 3 significant figures.",
        options: ["18.8 cm", "49.7 cm", "30.8 cm", "56.5 cm"],
        answerIndex: 2,
        explanation:
          "Curved edge {{= 1/2 * pi * 12 = 6 pi = 18.85...}}; add the straight diameter: {{6 pi + 12 = 30.849...}} ≈ 30.8 cm. 18.8 cm forgets the straight edge (the classic slip); 49.7 cm uses the whole circumference; 56.5 is the **area** of the semicircle.",
        difficulty: "core",
        guideRef: "circles-arcs-sectors",
        hints: ["Trace round the edge with your finger — how many pieces are there?", "Half the circumference, plus the diameter."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q07",
        question: "The diagram shows a circle that fits exactly inside a square of side 10 cm.\n\nWork out the total area of the shaded region. Give your answer correct to 3 significant figures.",
        diagram: M1Q07,
        options: ["78.5 cm²", "68.6 cm²", "84.3 cm²", "21.5 cm²"],
        answerIndex: 3,
        explanation:
          "The circle's diameter is 10 cm, so its radius is 5 cm. Shaded = square − circle {{= 100 - pi * 5^2 = 100 - 25 pi = 21.46...}} ≈ 21.5 cm². 78.5 cm² is the circle itself; 68.6 cm² subtracts the circumference ({{10 pi}}), which is a length, not an area; 84.3 cm² forgets to square the radius.",
        difficulty: "core",
        guideRef: "areas-2d",
        hints: ["Shaded = big shape − the hole.", "The circle's diameter equals the side of the square.", "Radius 5 cm, so the circle's area is {{25 pi}}."],
        strategy: "Subtract the unshaded part",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q08",
        question: "A triangular prism has length 10 cm. Its cross-section is a right-angled triangle with sides 3 cm, 4 cm and 5 cm.\n\nWork out the total surface area of the prism.",
        options: ["132 cm²", "60 cm²", "126 cm²", "120 cm²"],
        answerIndex: 0,
        explanation:
          "Two triangles: {{2 * 1/2 * 3 * 4 = 12}} cm². Three rectangles: (3 + 4 + 5) × 10 = 120 cm². Total = 132 cm². 60 is the **volume** (6 × 10, in cm³); 126 counts only one triangular end; 120 forgets both ends.",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        hints: ["Picture the net: how many faces, and what shapes?", "2 triangles + 3 rectangles.", "The three rectangles together are (perimeter of the triangle) × length."],
        strategy: "Draw the net",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q09",
        question: "A cone has base radius 6 cm and perpendicular height 8 cm.\n\nWork out the volume of the cone. Give your answer in terms of π.",
        options: ["288π cm³", "120π cm³", "96π cm³", "16π cm³"],
        answerIndex: 2,
        explanation:
          "{{V = 1/3 pi r^2 h = 1/3 * pi * 36 * 8 = 96 pi}} cm³. 288π forgets the {{1/3}} (that is the cylinder); 120π uses the slant height 10 cm instead of the perpendicular height; 16π forgets to square the radius.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["A cone is a third of the cylinder with the same base and height.", "{{V = 1/3 pi r^2 h}} with h the perpendicular height."],
        strategy: "Use a formula you understand",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q10",
        question: "A solid hemisphere has radius 5 cm.\n\nWork out the total surface area of the hemisphere. Give your answer in terms of π.",
        options: ["50π cm²", "100π cm²", "{{250/3}}π cm²", "75π cm²"],
        answerIndex: 3,
        explanation:
          "Curved part = half a sphere {{= 1/2 * 4 pi r^2 = 2 pi * 25 = 50 pi}}. A **solid** hemisphere also has a flat circular face {{pi r^2 = 25 pi}}. Total = 75π cm². 50π forgets the flat face; 100π is the whole sphere; {{250/3}}π is the volume of the hemisphere.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["How many surfaces does a solid hemisphere have?", "Curved: half of {{4 pi r^2}}. Flat: a circle."],
        strategy: "Count the faces",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q11",
        question: "A solid cone has base radius 5 cm and perpendicular height 12 cm.\n\nWork out the curved surface area of the cone. Give your answer in terms of π.",
        options: ["65π cm²", "60π cm²", "90π cm²", "100π cm²"],
        answerIndex: 0,
        explanation:
          "Curved surface area {{= pi r l}} needs the **slant** height: {{l = sqrt(5^2 + 12^2) = 13}}. So {{pi * 5 * 13 = 65 pi}} cm². 60π uses the perpendicular height 12; 90π adds the base {{25 pi}} (that is the total surface area); 100π is the volume {{1/3 pi * 25 * 12}}.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["Which length goes into {{pi r l}}?", "The radius, height and slant height form a right-angled triangle.", "{{l^2 = 5^2 + 12^2}}."],
        strategy: "Find the hidden right-angled triangle",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q12",
        question: "A solid metal cube of side 10 cm is melted down and recast into solid spheres, each of radius 1 cm.\n\nWhat is the greatest number of complete spheres that can be made?",
        options: ["79", "238", "239", "318"],
        answerIndex: 1,
        explanation:
          "Volume of cube = 1000 cm³. One sphere {{= 4/3 pi * 1^3 = 4.188...}} cm³. 1000 ÷ 4.188... = 238.7..., so **238** complete spheres — you must round **down**, because the 239th is not finished. 239 rounds the usual way; 79 divides by {{4 pi r^2}} (surface area); 318 divides by π alone, forgetting the {{4/3}}.",
        difficulty: "core",
        guideRef: "frustums-composite",
        hints: ["Melting keeps the **volume** the same.", "Divide the cube's volume by one sphere's volume.", "Can you have a fraction of a sphere?"],
        strategy: "Look for an invariant",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q13",
        question: "A cone has base radius 6 cm and height 12 cm. A smaller cone of radius 3 cm and height 6 cm is cut off the top, leaving the frustum shown.\n\nWork out the volume of the frustum. Give your answer in terms of π.",
        diagram: M1Q13,
        options: ["378π cm³", "72π cm³", "18π cm³", "126π cm³"],
        answerIndex: 3,
        explanation:
          "Frustum = big cone − small cone {{= 1/3 pi (6^2 * 12) - 1/3 pi (3^2 * 6) = 144 pi - 18 pi = 126 pi}} cm³. 72π assumes cutting at half the height removes half the volume — but the small cone is only {{(1/2)^3 = 1/8}} of the big one; 378π forgets the {{1/3}}; 18π is just the small cone that was removed.",
        difficulty: "challenge",
        guideRef: "frustums-composite",
        hints: ["Think of the frustum as one cone with another taken away.", "Work out both cone volumes separately.", "Big cone {{144 pi}}, small cone {{18 pi}}."],
        strategy: "Make it simpler: whole minus part",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q14",
        question: "A cylindrical jar of radius 5 cm contains water. A solid metal ball of radius 3 cm is dropped in and is completely covered by the water.\n\nBy how much does the water level rise?",
        options: ["1.44 cm", "1.08 cm", "4.32 cm", "0.36 cm"],
        answerIndex: 0,
        explanation:
          "The water rises by the ball's volume: {{4/3 pi * 3^3 = 36 pi}} cm³. This forms a cylinder of radius 5: {{pi * 5^2 * h = 36 pi}}, so {{h = 36/25 = 1.44}} cm. 1.08 cm forgets the {{4/3}}; 4.32 cm uses the surface area {{4 pi r^2}}; 0.36 cm uses the diameter 10 as the jar's radius.",
        difficulty: "challenge",
        guideRef: "frustums-composite",
        hints: ["What volume of water is pushed up?", "That volume sits as a thin cylinder on top of the old water.", "Set {{pi * 25 * h}} equal to the ball's volume."],
        strategy: "Look for an invariant",
      },
      {
        kind: "mcq",
        id: "mensuration-m1-q15",
        question: "A sphere has volume 288π cm³.\n\nWork out the surface area of the sphere. Give your answer in terms of π.",
        options: ["36π cm²", "144π cm²", "216π cm²", "24π cm²"],
        answerIndex: 1,
        explanation:
          "{{4/3 pi r^3 = 288 pi}} gives {{r^3 = 288 * 3/4 = 216}}, so r = 6. Surface area {{= 4 pi r^2 = 4 pi * 36 = 144 pi}} cm². 36π is {{pi r^2}}; 216π uses {{r^3}} instead of {{4 r^2}}; 24π multiplies 4 × 6 without squaring.",
        difficulty: "challenge",
        guideRef: "cones-spheres-pyramids",
        hints: ["Work backwards: find r first.", "Divide by π, then multiply by {{3/4}}, then cube root.", "r = 6 — now use {{4 pi r^2}}."],
        strategy: "Work backwards",
      },
    ],
  },
  // ======================================================================
  {
    id: "mensuration-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "mensuration-m2-q01",
        question: "A circular hawker-centre table top has diameter 10 cm on a scale model.\n\nWork out the area of the model table top. Give your answer in terms of π.",
        options: ["100π cm²", "25π cm²", "10π cm²", "5π cm²"],
        answerIndex: 1,
        explanation:
          "The radius is half the diameter: 5 cm. Area {{= pi r^2 = 25 pi}} cm². 100π uses the diameter as the radius; 10π is the circumference; 5π forgets to square the radius.",
        difficulty: "warmup",
        guideRef: "circles-arcs-sectors",
        hints: ["Area needs the radius, not the diameter.", "{{pi * 5^2}}."],
        strategy: "Check which length you have",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q02",
        question: "The diagram shows a triangle.\n\nWork out the area of the triangle.",
        diagram: M2Q02,
        options: ["54 cm²", "33.75 cm²", "27 cm²", "22.5 cm²"],
        answerIndex: 2,
        explanation:
          "Area {{= 1/2 * base * perpendicular height = 1/2 * 9 * 6 = 27}} cm². 54 cm² forgets the half; 33.75 cm² uses the sloping 7.5 cm side as the height; 22.5 cm² multiplies the height by a sloping side instead of the base.",
        difficulty: "warmup",
        guideRef: "areas-2d",
        hints: ["The height must be at right angles to the base.", "{{1/2 * 9 * 6}}."],
        strategy: "Look for the right angle",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q03",
        question: "A prism is 15 cm long. Its cross-section is a right-angled triangle with shorter sides 6 cm and 8 cm and hypotenuse 10 cm.\n\nWork out the volume of the prism.",
        options: ["720 cm³", "600 cm³", "450 cm³", "360 cm³"],
        answerIndex: 3,
        explanation:
          "Cross-section {{= 1/2 * 6 * 8 = 24}} cm² (the two shorter sides are base and height, because they meet at the right angle). Volume = 24 × 15 = 360 cm³. 720 forgets the half; 600 and 450 use the hypotenuse as base or height — but the hypotenuse is not perpendicular to either other side.",
        difficulty: "warmup",
        guideRef: "prisms-cylinders",
        hints: ["Volume = area of cross-section × length.", "Which two sides of the triangle are perpendicular?"],
        strategy: "Use a formula you understand",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q04",
        question: "A bottle of soya milk holds 2.5 litres.\n\nWhat is this in cm³?",
        options: ["2500 cm³", "250 cm³", "25 000 cm³", "0.0025 cm³"],
        answerIndex: 0,
        explanation:
          "1 litre = 1000 cm³ (a 10 cm × 10 cm × 10 cm cube). So 2.5 litres = 2.5 × 1000 = 2500 cm³. 250 and 25 000 use the wrong power of 10; 0.0025 divides instead of multiplying — cm³ is the smaller unit, so the number must get **bigger**.",
        difficulty: "warmup",
        guideRef: "prisms-cylinders",
        hints: ["How many cm³ make one litre?", "Smaller unit → bigger number."],
        strategy: "Sense-check the size",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q05",
        question: "A sector has radius 9 cm and angle 40°.\n\nWork out the area of the sector. Give your answer in terms of π.",
        options: ["2π cm²", "18π cm²", "9π cm²", "36π cm²"],
        answerIndex: 2,
        explanation:
          "{{40/360 = 1/9}} of the circle, so area {{= 1/9 * pi * 9^2 = 9 pi}} cm². 2π is the **arc length** {{1/9 * 18 pi}}; 18π uses {{40/180}}, as if the whole were a semicircle; 36π uses 18 (the diameter) as the radius.",
        difficulty: "core",
        guideRef: "circles-arcs-sectors",
        hints: ["What fraction of 360° is 40°?", "Sector area = fraction × {{pi r^2}}."],
        strategy: "Fraction of the whole",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q06",
        question: "A sector has radius 8 cm and angle 135°.\n\nWork out the perimeter of the sector. Give your answer correct to 3 significant figures.",
        options: ["18.8 cm", "26.8 cm", "75.4 cm", "34.8 cm"],
        answerIndex: 3,
        explanation:
          "Arc {{= 135/360 * 2 pi * 8 = 6 pi = 18.85...}} cm. Perimeter = arc + **two** radii {{= 6 pi + 16 = 34.849...}} ≈ 34.8 cm. 18.8 cm is the arc alone; 26.8 cm adds only one radius; 75.4 is the sector's **area** ({{24 pi}}).",
        difficulty: "core",
        guideRef: "circles-arcs-sectors",
        hints: ["A sector's edge has three parts.", "Find the arc, then add both straight edges.", "{{135/360 = 3/8}}."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q07",
        question: "A shape is made by cutting a semicircle out of a rectangle, as shown.\n\nWork out the area of the shaded shape. Give your answer correct to 3 significant figures.",
        diagram: M2Q07,
        options: ["70.9 cm²", "45.7 cm²", "83.4 cm²", "121 cm²"],
        answerIndex: 0,
        explanation:
          "Rectangle = 12 × 8 = 96. The semicircle has diameter 8, so radius 4: area {{= 1/2 pi * 4^2 = 8 pi = 25.13...}}. Shaded = 96 − 25.13... = 70.87... ≈ 70.9 cm². 45.7 subtracts a whole circle; 83.4 uses {{1/2 pi * 8}}, not squaring the radius; 121 **adds** the semicircle instead of removing it.",
        difficulty: "core",
        guideRef: "areas-2d",
        hints: ["Rectangle minus semicircle.", "The diameter of the semicircle is the 8 cm side, so r = 4.", "Semicircle = {{1/2 pi r^2}}."],
        strategy: "Subtract the unshaded part",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q08",
        question: "A closed cylindrical tin has radius 4 cm and height 10 cm.\n\nWork out the total surface area of the tin. Give your answer in terms of π.",
        options: ["96π cm²", "112π cm²", "80π cm²", "160π cm²"],
        answerIndex: 1,
        explanation:
          "Curved surface {{= 2 pi r h = 80 pi}}; two circular ends {{= 2 * pi * 4^2 = 32 pi}}. Total = 112π cm². 96π counts only one end (an open tin); 80π is the curved surface only; 160π is the volume {{pi r^2 h}}.",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        hints: ["Unroll the curved surface: it is a rectangle.", "The rectangle is {{2 pi r}} by h. Then add the two circles."],
        strategy: "Draw the net",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q09",
        question: "A cylindrical jug has radius 5 cm and holds exactly 1 litre when full.\n\nWork out the height of the jug. Give your answer correct to 3 significant figures.",
        options: ["3.18 cm", "63.7 cm", "1.27 cm", "12.7 cm"],
        answerIndex: 3,
        explanation:
          "1 litre = 1000 cm³, so {{pi * 5^2 * h = 1000}} and {{h = 1000/(25 pi) = 12.73...}} ≈ 12.7 cm. 3.18 cm uses the diameter 10 as the radius; 63.7 cm forgets to square the radius; 1.27 cm uses 1 litre = 100 cm³.",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        hints: ["Convert 1 litre to cm³ first.", "Write {{pi r^2 h = 1000}} and solve for h."],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q10",
        question: "A pyramid has a square base of side 6 cm and a perpendicular height of 10 cm.\n\nWork out the volume of the pyramid.",
        options: ["120 cm³", "360 cm³", "20 cm³", "180 cm³"],
        answerIndex: 0,
        explanation:
          "{{V = 1/3 * base area * height = 1/3 * 36 * 10 = 120}} cm³. 360 forgets the {{1/3}} (that is the cuboid); 20 uses the side 6 instead of the base **area** 36; 180 uses {{1/2}} as if it were a triangle.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["Every pyramid is {{1/3}} of the prism with the same base and height.", "Base area first: 6 × 6."],
        strategy: "Use a formula you understand",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q11",
        question: "A hemisphere has radius 6 cm.\n\nWork out the volume of the hemisphere. Give your answer in terms of π.",
        options: ["288π cm³", "144π cm³", "72π cm³", "108π cm³"],
        answerIndex: 1,
        explanation:
          "Half a sphere: {{1/2 * 4/3 pi * 6^3 = 2/3 pi * 216 = 144 pi}} cm³. 288π is the whole sphere; 72π is the curved surface area {{2 pi r^2}}; 108π is {{1/2 pi r^3}}, which forgets the {{4/3}}.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["Start with the sphere formula {{4/3 pi r^3}}.", "Then halve it."],
        strategy: "Make it simpler: whole then half",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q12",
        question: "A toy is made from a cone on top of a hemisphere, as shown. The cone and hemisphere both have radius 6 cm and the cone has perpendicular height 10 cm.\n\nWork out the total volume of the toy. Give your answer in terms of π.",
        diagram: M2Q12,
        options: ["408π cm³", "504π cm³", "264π cm³", "192π cm³"],
        answerIndex: 2,
        explanation:
          "Cone {{= 1/3 pi * 36 * 10 = 120 pi}}. Hemisphere {{= 2/3 pi * 216 = 144 pi}}. Total = 264π cm³. 408π uses a whole sphere (288π); 504π forgets the {{1/3}} on the cone (360π); 192π uses the hemisphere's curved surface area {{2 pi r^2 = 72 pi}} instead of its volume.",
        difficulty: "core",
        guideRef: "frustums-composite",
        hints: ["Split the toy into two solids you know.", "Find each volume, then add.", "Hemisphere = half of {{4/3 pi r^3}}."],
        strategy: "Split into parts",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q13",
        question: "A solid metal cylinder of radius 6 cm and height 4 cm is melted down and recast into a single solid sphere.\n\nWork out the radius of the sphere. Give your answer correct to 3 significant figures.",
        options: ["4.76 cm", "5.24 cm", "6.00 cm", "5.77 cm"],
        answerIndex: 0,
        explanation:
          "Volume is unchanged: {{pi * 36 * 4 = 144 pi}}. So {{4/3 pi r^3 = 144 pi}}, giving {{r^3 = 144 * 3/4 = 108}} and {{r = cbrt(108) = 4.762...}} ≈ 4.76 cm. 5.24 forgets the {{4/3}} ({{cbrt(144)}}); 6.00 sets the surface area {{4 pi r^2}} equal to the volume; 5.77 multiplies by {{4/3}} instead of dividing ({{cbrt(192)}}).",
        difficulty: "challenge",
        guideRef: "frustums-composite",
        hints: ["What stays the same when metal is melted and recast?", "Write the sphere's volume equal to the cylinder's.", "Undo in reverse: ÷ π, × {{3/4}}, then cube root."],
        strategy: "Look for an invariant",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q14",
        question: "An open lampshade (no top, no bottom) is a frustum. It is made by removing a cone of radius 5 cm and slant height 13 cm from a cone of radius 10 cm and slant height 26 cm, as shown.\n\nWork out the area of material needed for the lampshade. Give your answer in terms of π.",
        diagram: M2Q14,
        options: ["180π cm²", "195π cm²", "260π cm²", "320π cm²"],
        answerIndex: 1,
        explanation:
          "Curved area of a cone {{= pi r l}}. Big cone: {{pi * 10 * 26 = 260 pi}}. Small cone: {{pi * 5 * 13 = 65 pi}}. Lampshade = 260π − 65π = 195π cm². 180π uses the perpendicular heights (24 and 12) instead of slant heights; 260π forgets to remove the small cone; 320π adds both circular ends — but the lampshade is open.",
        difficulty: "challenge",
        guideRef: "frustums-composite",
        hints: ["Big cone's curved surface minus small cone's curved surface.", "Use {{pi r l}} with the slant heights.", "Does the lampshade have any flat circles?"],
        strategy: "Make it simpler: whole minus part",
      },
      {
        kind: "mcq",
        id: "mensuration-m2-q15",
        question: "OAB is a sector of a circle, centre O, radius 10 cm. Angle AOB = 90°.\n\nWork out the area of the shaded segment. Give your answer correct to 3 significant figures.",
        diagram: M2Q15,
        options: ["78.5 cm²", "129 cm²", "28.5 cm²", "57.1 cm²"],
        answerIndex: 2,
        explanation:
          "Segment = sector − triangle. Sector {{= 1/4 pi * 10^2 = 25 pi = 78.54...}}. Triangle OAB {{= 1/2 * 10 * 10 = 50}}. Segment = 78.54... − 50 = 28.54... ≈ 28.5 cm². 78.5 is the whole sector; 129 adds the triangle instead of subtracting; 57.1 uses a semicircle ({{50 pi}}) and forgets the half on the triangle.",
        difficulty: "challenge",
        guideRef: "circles-arcs-sectors",
        hints: ["What shape do you get if you add triangle OAB back to the segment?", "Segment = sector − triangle.", "The triangle is right-angled at O."],
        strategy: "Subtract the unshaded part",
      },
    ],
  },
  // ======================================================================
  {
    id: "mensuration-m3",
    title: "MCQ Paper 3 — Exam style",
    questions: [
      {
        kind: "mcq",
        id: "mensuration-m3-q01",
        question: "A circle has area 50 cm².\n\nWork out the radius of the circle. Give your answer correct to 3 significant figures.",
        options: ["7.96 cm", "15.9 cm", "2.25 cm", "3.99 cm"],
        answerIndex: 3,
        explanation:
          "{{pi r^2 = 50}} so {{r^2 = 50/pi = 15.91...}} and {{r = sqrt(15.91...) = 3.989...}} ≈ 3.99 cm. 15.9 forgets the square root; 7.96 divides by {{2 pi}} (the circumference formula); 2.25 square-roots 50 before dividing by π.",
        difficulty: "warmup",
        guideRef: "circles-arcs-sectors",
        hints: ["Write {{pi r^2 = 50}}.", "Divide by π first, then square root."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q02",
        question: "The diagram shows a parallelogram.\n\nWork out the area of the parallelogram.",
        diagram: M3Q02,
        options: ["66 cm²", "77 cm²", "33 cm²", "36 cm²"],
        answerIndex: 0,
        explanation:
          "Area = base × **perpendicular** height = 11 × 6 = 66 cm². 77 uses the slanted 7 cm side; 33 halves it as if it were a triangle; 36 cm is the perimeter 2(11 + 7) — a length, not an area.",
        difficulty: "warmup",
        guideRef: "areas-2d",
        hints: ["Cut off the triangle on one end and slide it to the other — what shape do you get?", "Base × perpendicular height."],
        strategy: "Rearrange the shape",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q03",
        question: "A closed box is a cuboid measuring 5 cm by 4 cm by 3 cm.\n\nWork out the total surface area of the box.",
        options: ["60 cm²", "94 cm²", "47 cm²", "70 cm²"],
        answerIndex: 1,
        explanation:
          "Three pairs of faces: 2(5 × 4) + 2(5 × 3) + 2(4 × 3) = 40 + 30 + 24 = 94 cm². 60 is the volume; 47 counts each pair once; 70 misses the two 4 × 3 faces.",
        difficulty: "warmup",
        guideRef: "prisms-cylinders",
        hints: ["A cuboid has 6 faces in 3 matching pairs.", "Find the three different face areas, then double their total."],
        strategy: "Count the faces",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q04",
        question: "A ball is a sphere of radius 6 cm.\n\nWork out the volume of the ball. Give your answer in terms of π.",
        options: ["144π cm³", "864π cm³", "288π cm³", "48π cm³"],
        answerIndex: 2,
        explanation:
          "{{V = 4/3 pi r^3 = 4/3 * pi * 216 = 288 pi}} cm³. 144π is the surface area {{4 pi r^2}}; 864π is {{4 pi r^3}} (forgets to divide by 3); 48π uses {{r^2}} instead of {{r^3}}.",
        difficulty: "warmup",
        guideRef: "cones-spheres-pyramids",
        hints: ["Volume → r cubed; area → r squared.", "{{6^3 = 216}}."],
        strategy: "Check the dimensions",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q05",
        question: "A sector of a circle of radius 9 cm has an arc length of 5π cm.\n\nWork out the angle of the sector.",
        options: ["100°", "200°", "22.2°", "50°"],
        answerIndex: 0,
        explanation:
          "{{theta/360 * 2 pi * 9 = 5 pi}} gives {{theta/360 = (5 pi)/(18 pi) = 5/18}}, so {{theta = 5/18 * 360 = 100}}°. 200° uses {{pi r}} instead of {{2 pi r}}; 22.2° sets the **area** formula equal to 5π; 50° uses {{2 pi d}}.",
        difficulty: "core",
        guideRef: "circles-arcs-sectors",
        hints: ["Arc length = fraction × circumference. What is the circumference?", "{{18 pi}}. What fraction of it is {{5 pi}}?", "Then that fraction of 360°."],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q06",
        question: "A window is in the shape of a rectangle with a semicircle on top, as shown.\n\nWork out the area of glass in the window. Give your answer correct to 3 significant figures.",
        diagram: M3Q06,
        options: ["2.93 m²", "2.37 m²", "4.06 m²", "2.74 m²"],
        answerIndex: 1,
        explanation:
          "Rectangle = 1.2 × 1.5 = 1.8 m². Semicircle: radius 0.6 m, area {{= 1/2 pi * 0.6^2 = 0.5654...}} m². Total = 2.365... ≈ 2.37 m². 2.93 adds a whole circle; 4.06 uses 1.2 m as the radius; 2.74 forgets to square the radius.",
        difficulty: "core",
        guideRef: "areas-2d",
        hints: ["Split the window into two shapes.", "The semicircle's diameter is the width of the rectangle.", "Radius 0.6 m; semicircle = {{1/2 pi r^2}}."],
        strategy: "Split into parts",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q07",
        question: "A swimming pool at a condo in Singapore is 25 m long and 10 m wide. The depth increases steadily from 1 m at the shallow end to 3 m at the deep end, so the pool is a prism with a trapezium cross-section.\n\nHow many litres of water does the full pool hold?",
        options: ["50 000 litres", "750 000 litres", "500 000 litres", "1 000 000 litres"],
        answerIndex: 2,
        explanation:
          "Cross-section (the side view) is a trapezium: {{1/2 (1 + 3) * 25 = 50}} m². Volume = 50 × 10 = 500 m³. 1 m³ = 1000 litres, so 500 000 litres. 50 000 uses 1 m³ = 100 litres; 750 000 uses the deep-end depth everywhere; 1 000 000 forgets the half in the trapezium formula.",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        hints: ["Which face is the cross-section — the one that has the trapezium shape?", "Area of trapezium × width.", "1 m³ = 1000 litres."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q08",
        question: "A closed cylinder has radius 5 cm and total surface area 100π cm².\n\nWork out the height of the cylinder.",
        options: ["10 cm", "7.5 cm", "4 cm", "5 cm"],
        answerIndex: 3,
        explanation:
          "Total surface area {{= 2 pi r^2 + 2 pi r h = 50 pi + 10 pi h}}. Set equal to 100π: {{10 pi h = 50 pi}}, so h = 5 cm. 10 cm forgets both circular ends; 7.5 cm includes only one end; 4 cm treats 100π as the **volume** {{pi r^2 h}}.",
        difficulty: "core",
        guideRef: "prisms-cylinders",
        hints: ["Write an expression for the total surface area in terms of h.", "Two circles plus the curved surface.", "{{50 pi + 10 pi h = 100 pi}}."],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q09",
        question: "A cone has base radius 5 cm and slant height 13 cm.\n\nWork out the volume of the cone. Give your answer in terms of π.",
        options: ["{{325/3}}π cm³", "100π cm³", "300π cm³", "65π cm³"],
        answerIndex: 1,
        explanation:
          "The volume needs the **perpendicular** height: {{h = sqrt(13^2 - 5^2) = 12}}. {{V = 1/3 pi * 25 * 12 = 100 pi}} cm³. {{325/3}}π uses the slant height 13; 300π forgets the {{1/3}}; 65π is the curved surface area {{pi r l}}.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["Which height does the volume formula use?", "Radius, height and slant form a right-angled triangle — the slant is the hypotenuse.", "{{h^2 = 13^2 - 5^2}}."],
        strategy: "Find the hidden right-angled triangle",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q10",
        question: "A solid cone has base radius 7 cm, perpendicular height 24 cm and slant height 25 cm.\n\nWork out the total surface area of the cone. Give your answer in terms of π.",
        options: ["175π cm²", "217π cm²", "224π cm²", "392π cm²"],
        answerIndex: 2,
        explanation:
          "Curved surface {{= pi r l = pi * 7 * 25 = 175 pi}}; base {{= pi * 7^2 = 49 pi}}. Total = 224π cm². 175π leaves out the base; 217π uses the perpendicular height in {{pi r l}}; 392π is the volume {{1/3 pi * 49 * 24}}.",
        difficulty: "core",
        guideRef: "cones-spheres-pyramids",
        hints: ["A solid cone has a curved surface and a flat base.", "{{pi r l}} uses the slant height."],
        strategy: "Count the faces",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q11",
        question: "A solid is made from a cylinder of radius 4 cm and height 10 cm with a hemisphere of radius 4 cm on top, as shown.\n\nWork out the total surface area of the solid. Give your answer in terms of π.",
        diagram: M3Q11,
        options: ["144π cm²", "160π cm²", "112π cm²", "128π cm²"],
        answerIndex: 3,
        explanation:
          "Only the **outside** counts. Cylinder's curved surface {{2 pi * 4 * 10 = 80 pi}}; its base {{pi * 4^2 = 16 pi}}; hemisphere's curved surface {{2 pi * 4^2 = 32 pi}}. Total = 128π cm². 144π also counts the circle where the hemisphere joins the cylinder — it is hidden inside; 160π uses a whole sphere; 112π forgets the base.",
        difficulty: "core",
        guideRef: "frustums-composite",
        hints: ["Imagine painting the solid — which surfaces get paint?", "Curved cylinder + bottom circle + curved hemisphere.", "Hemisphere curved area = half of {{4 pi r^2}}."],
        strategy: "Count the faces",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q12",
        question: "12 solid metal spheres, each of radius 2 cm, are melted down and recast into a solid cylinder of radius 4 cm.\n\nWork out the height of the cylinder.",
        options: ["8 cm", "12 cm", "32 cm", "0.667 cm"],
        answerIndex: 0,
        explanation:
          "Total volume {{= 12 * 4/3 pi * 2^3 = 128 pi}}. Cylinder: {{pi * 4^2 * h = 128 pi}}, so h = 8 cm. 12 cm uses the surface area {{4 pi r^2}} of the spheres; 32 cm forgets to square the cylinder's radius; 0.667 cm uses only one sphere.",
        difficulty: "core",
        guideRef: "frustums-composite",
        hints: ["Melting keeps the total volume the same.", "Find the volume of all 12 spheres in terms of π.", "Then solve {{16 pi h = 128 pi}}."],
        strategy: "Look for an invariant",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q13",
        question: "A bucket is a frustum with top radius 15 cm, base radius 10 cm and height 20 cm. It is part of a cone of height 60 cm whose tip, a cone of height 40 cm, has been removed, as shown.\n\nWork out how many litres the bucket holds when full. Give your answer correct to 3 significant figures.",
        diagram: M3Q13,
        options: ["14.1 litres", "29.8 litres", "99.5 litres", "9.95 litres"],
        answerIndex: 3,
        explanation:
          "Big cone {{= 1/3 pi * 15^2 * 60 = 4500 pi}}; small cone {{= 1/3 pi * 10^2 * 40 = 4000/3 pi}}. Frustum {{= 4500 pi - 4000/3 pi = 9500/3 pi = 9948.3...}} cm³ ≈ 9.95 litres (÷ 1000). 14.1 is the big cone only; 29.8 forgets the {{1/3}}; 99.5 divides by 100 instead of 1000.",
        difficulty: "challenge",
        guideRef: "frustums-composite",
        hints: ["Frustum = big cone − small cone.", "Big cone: radius 15, height 60. Small cone: radius 10, height 40.", "Convert cm³ to litres at the end: ÷ 1000."],
        strategy: "Make it simpler: whole minus part",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q14",
        question: "A cylindrical tank of radius 10 cm contains water to a depth of 8 cm. A solid cone of radius 5 cm and height 12 cm is placed in the tank and is completely covered by the water.\n\nWork out the new depth of the water.",
        options: ["11 cm", "8.25 cm", "9 cm", "20 cm"],
        answerIndex: 2,
        explanation:
          "Cone volume {{= 1/3 pi * 25 * 12 = 100 pi}}. Rise: {{pi * 10^2 * h = 100 pi}}, so h = 1 cm and the new depth is 8 + 1 = 9 cm. 11 cm forgets the {{1/3}} (a rise of 3 cm); 8.25 cm uses the tank's diameter 20 as its radius; 20 cm adds the cone's height to the depth.",
        difficulty: "challenge",
        guideRef: "frustums-composite",
        hints: ["How much water is pushed up?", "The displaced volume forms a cylinder of radius 10 on top of the old water.", "Don't forget to add the rise to the old depth."],
        strategy: "Look for an invariant",
      },
      {
        kind: "mcq",
        id: "mensuration-m3-q15",
        question: "A solid cone has base radius r and height h. A solid sphere also has radius r. The cone and the sphere have the same volume.\n\nFind h in terms of r.",
        options: ["{{h = 4/3 r}}", "h = 4r", "{{h = r/4}}", "{{h = 4r^2}}"],
        answerIndex: 1,
        explanation:
          "{{1/3 pi r^2 h = 4/3 pi r^3}}. Multiply by 3 and divide by {{pi r^2}}: {{h = 4r}}. {{4/3 r}} forgets the {{1/3}} in the cone's formula; {{r/4}} divides the wrong way round; {{4r^2}} divides by r instead of {{r^2}}.",
        difficulty: "challenge",
        guideRef: "cones-spheres-pyramids",
        hints: ["Write the two volumes equal to each other.", "Cancel π and as many r's as you can.", "Multiply both sides by 3 to clear the fractions."],
        strategy: "Introduce a variable",
      },
    ],
  },
];
