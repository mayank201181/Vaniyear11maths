// Engagement extras for "Straight-Line Graphs & Coordinate Geometry" (not part of the audited question bank).
import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Take any triangle and draw the perpendicular bisector of each side. All three lines meet at a single point — every time, for every triangle. With coordinate geometry you can find that point using only gradients, midpoints and simultaneous equations, and prove it really is the same distance from all three corners.",

  didYouKnow: [
    "The distance formula is just Pythagoras. It extends to 3D by adding one more square: the distance between (x₁, y₁, z₁) and (x₂, y₂, z₂) is {{sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)}}. Game engines and GPS receivers use exactly this calculation all the time.",
    "Gradient and angle are linked by trigonometry: a line with gradient m makes an angle θ with the positive x-axis where tan θ = m. Gradient 1 is 45°, and gradient {{sqrt(3)}} is 60°. That is why perpendicular gradients multiply to −1: turning a line through 90° turns tan θ into {{-1/(tan theta)}}.",
    "In \"taxicab geometry\" you may only travel along grid lines, like a car in a city of square blocks, so the distance from (x₁, y₁) to (x₂, y₂) is |x₂ − x₁| + |y₂ − y₁| instead of the Pythagoras distance. Hermann Minkowski studied this kind of distance in the late 1800s. In it, a \"circle\" (all points the same distance from a centre) is a square tilted at 45°.",
    "The three medians of a triangle (each joins a corner to the midpoint of the opposite side) meet at the centroid, which divides every median in the ratio 2 : 1. Its coordinates are simply the averages of the three corners: {{((x_1 + x_2 + x_3)/3, (y_1 + y_2 + y_3)/3)}}. A cardboard triangle balances on a pin placed there.",
    "Every pixel line on a screen is a straight-line graph drawn on a grid of whole-number coordinates. In 1962 Jack Bresenham, working at IBM, devised an algorithm that decides which pixels to light using only whole-number addition and comparison — no division and no decimals — by tracking how far the true line {{y = mx + c}} is from the centre of each pixel. Versions of it are still used today.",
  ],

  activities: [
    {
      title: "Perpendicular bisector with a piece of string",
      emoji: "🧵",
      materials: ["A tiled floor or a large sheet of squared paper", "Two coins", "A piece of string about 1 m long", "Chalk, sticky notes or a pencil", "A tape measure or ruler"],
      steps: [
        "Treat the tile corners as a coordinate grid. Put one coin at A(0, 0) and the other at B(6, 2), measured in tiles (or squares).",
        "Find several spots that are exactly the same distance from both coins: hold the string at each coin in turn and check the lengths match. Mark at least four spots.",
        "Write down the coordinates of your marks (estimate to the nearest half square). Do they lie on a straight line?",
        "Now predict that line with algebra: midpoint of AB, gradient of AB, negative reciprocal, then y = mx + c. Compare with your marks.",
      ],
      maths:
        "Points the same distance from A and B lie on the perpendicular bisector of AB. Here the midpoint is (3, 1) and AB has gradient {{2/6 = 1/3}}, so the bisector has gradient −3 and equation y = −3x + 10. Check one mark, e.g. (4, −2): it is {{sqrt(16 + 4) = sqrt(20)}} from A and {{sqrt(4 + 16) = sqrt(20)}} from B.",
    },
    {
      title: "Measure a diagonal, then calculate it",
      emoji: "📏",
      materials: ["A chessboard, tiled floor or squared paper", "A tape measure or long ruler", "A calculator", "Paper for a table of results"],
      steps: [
        "Measure the side of one square (for example, a 30 cm floor tile or a 5 cm chessboard square).",
        "Choose two points on the grid, such as the corners (1, 2) and (7, 10). Count the squares across and up between them.",
        "Use the distance formula to predict the straight-line distance in squares, then multiply by the size of a square to get centimetres.",
        "Measure it with the tape. Repeat for three more pairs of points, including one where the answer is a whole number of squares (try 3 across and 4 up).",
      ],
      maths:
        "From (1, 2) to (7, 10) is 6 across and 8 up, so the distance is {{sqrt(6^2 + 8^2) = sqrt(100) = 10}} squares — a 6-8-10 Pythagorean triple. Most pairs give a surd, such as 4 across and 5 up: {{sqrt(41) ~= 6.40}} squares. Your measurement should agree to within a few millimetres.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Why perpendicular gradients multiply to −1",
      svg: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two lines through the origin at right angles. The first has a gradient triangle with run 3 and rise 2, so its gradient is 2 over 3. Rotating that triangle through 90 degrees about the origin gives the second line's triangle, with rise 3 and run minus 2, so its gradient is minus 3 over 2. The product of the gradients is minus 1."><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><line x1="20" y1="210" x2="430" y2="210" stroke="#cbd5e1" stroke-width="1"/><line x1="220" y1="20" x2="220" y2="290" stroke="#cbd5e1" stroke-width="1"/><polygon points="220,210 340,210 340,130" fill="#c7d2fe" stroke="#334155" stroke-width="1"/><polygon points="220,210 220,90 140,90" fill="#fde68a" stroke="#334155" stroke-width="1"/><line x1="160" y1="250" x2="400" y2="90" stroke="#1d4ed8" stroke-width="2.5"/><line x1="260" y1="270" x2="116" y2="54" stroke="#b45309" stroke-width="2.5"/><polyline points="231.6,202.2 223.9,190.6 212.2,198.4" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="220" cy="210" r="3" fill="#1f2937"/><text x="210" y="226" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="end">O</text><text x="280" y="226" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">run 3</text><text x="346" y="174" font-size="13" font-family="sans-serif" fill="#1f2937">rise 2</text><text x="226" y="122" font-size="13" font-family="sans-serif" fill="#1f2937">rise 3</text><text x="180" y="82" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">run −2</text><text x="404" y="74" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="end">gradient 2/3</text><text x="128" y="44" font-size="13" font-family="sans-serif" font-weight="bold" fill="#b45309">gradient −3/2</text><text x="220" y="292" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">(2/3) × (−3/2) = −1</text></svg>`,
      caption:
        "Turn the blue gradient triangle through 90° about O. Its run 3 becomes a rise of 3, and its rise 2 becomes a run of 2 *to the left* (−2). So the new gradient is {{3/(-2) = -3/2}}: flip the fraction and change the sign. Multiply: {{2/3 * (-3/2) = -1}}. This works for any gradient {{a/b}}: the perpendicular one is {{-b/a}}.",
    },
    {
      title: "Dividing a line in the ratio 2 : 1 — count the steps",
      svg: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Segment from A at (1, 1) to B at (10, 7) drawn on a grid with a staircase of three equal steps underneath, each 3 across and 2 up. P at (7, 5) is after two of the three steps, so AP to PB is 2 to 1."><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><g stroke="#e5e7eb" stroke-width="1"><line x1="40" y1="280" x2="40" y2="20"/><line x1="76" y1="280" x2="76" y2="20"/><line x1="112" y1="280" x2="112" y2="20"/><line x1="148" y1="280" x2="148" y2="20"/><line x1="184" y1="280" x2="184" y2="20"/><line x1="220" y1="280" x2="220" y2="20"/><line x1="256" y1="280" x2="256" y2="20"/><line x1="292" y1="280" x2="292" y2="20"/><line x1="328" y1="280" x2="328" y2="20"/><line x1="364" y1="280" x2="364" y2="20"/><line x1="400" y1="280" x2="400" y2="20"/><line x1="40" y1="280" x2="420" y2="280"/><line x1="40" y1="244" x2="420" y2="244"/><line x1="40" y1="208" x2="420" y2="208"/><line x1="40" y1="172" x2="420" y2="172"/><line x1="40" y1="136" x2="420" y2="136"/><line x1="40" y1="100" x2="420" y2="100"/><line x1="40" y1="64" x2="420" y2="64"/><line x1="40" y1="28" x2="420" y2="28"/></g><polyline points="76,244 184,244 184,172 292,172 292,100 400,100 400,28" fill="none" stroke="#b45309" stroke-width="2" stroke-dasharray="5 4"/><line x1="76" y1="244" x2="292" y2="100" stroke="#1d4ed8" stroke-width="4"/><line x1="292" y1="100" x2="400" y2="28" stroke="#dc2626" stroke-width="4"/><circle cx="76" cy="244" r="5" fill="#1f2937"/><circle cx="184" cy="172" r="3.5" fill="#1d4ed8"/><circle cx="292" cy="100" r="6" fill="#1f2937"/><circle cx="400" cy="28" r="5" fill="#1f2937"/><text x="70" y="264" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="end">A(1, 1)</text><text x="392" y="22" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="end">B(10, 7)</text><text x="284" y="92" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="end">P(7, 5)</text><text x="130" y="262" font-size="12" font-family="sans-serif" fill="#b45309" text-anchor="middle">3 across</text><text x="190" y="214" font-size="12" font-family="sans-serif" fill="#b45309">2 up</text><text x="170" y="150" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="end">2 parts</text><text x="352" y="56" font-size="13" font-family="sans-serif" font-weight="bold" fill="#dc2626" text-anchor="end">1 part</text></svg>`,
      caption:
        "From A(1, 1) to B(10, 7) is 9 across and 6 up. For AP : PB = 2 : 1 split it into 2 + 1 = 3 equal steps of 3 across and 2 up. P is after 2 steps: P = (1 + 6, 1 + 4) = (7, 5). In one line: P = A + {{2/3}}(B − A).",
    },
  ],

  history: {
    title: "Two Frenchmen and the marriage of algebra and geometry",
    story:
      "In 1637 René Descartes published *La Géométrie* as an appendix to his *Discourse on Method*. It showed how to turn a geometry problem into equations by measuring lengths from fixed lines. At almost the same time Pierre de Fermat, a lawyer in Toulouse who did mathematics in his spare time, reached the same idea independently. His short essay on \"plane and solid loci\" was circulating among mathematicians by 1637, and it stated clearly that an equation of the first degree in two unknowns always describes a straight line. Fermat rarely published, so his version only appeared in print in 1679, after his death. Today the coordinate plane is named \"Cartesian\" after Descartes — but straight-line graphs owe just as much to Fermat.",
  },
};
