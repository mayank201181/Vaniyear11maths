import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Pick any two points A and B on a circle, then wander round the rest of the edge looking at them. However far you walk, the angle between your lines of sight to A and B never changes — until you cross over to the other side of AB, where it suddenly becomes 180° minus what it was. Every circle theorem in this topic explains a surprise like that, and each one is proved with nothing more than isosceles triangles.",

  didYouKnow: [
    "The fact that the angle in a semicircle is a right angle is traditionally credited to **Thales of Miletus** (about 600 BC), often called the first Greek mathematician. The ancient biographer Diogenes Laërtius records a story that Thales sacrificed an ox to celebrate the discovery.",
    "Almost every theorem in this topic is in Book III of **Euclid's Elements** (about 300 BC): the angle at the centre (Proposition 20), angles in the same segment (21), opposite angles of a cyclic quadrilateral (22), the angle in a semicircle (31), the alternate segment theorem (32) and intersecting chords (35).",
    "Only three regular polygons can tile a flat floor on their own: equilateral triangles, squares and regular hexagons. The reason is the interior angle — it must divide exactly into 360°, and 60°, 90° and 120° are the only interior angles of regular polygons that do.",
    "Bees build hexagonal cells for a reason. In 1999 the mathematician Thomas Hales proved the **honeycomb conjecture**: of all ways to divide a flat surface into regions of equal area, the regular hexagonal grid uses the least total length of wall.",
    "The UK's 20p and 50p coins are not circles but **equilateral-curve heptagons** (Reuleaux heptagons): each side is an arc centred on the opposite corner. That makes the coin's width the same whichever way it lies, so coin-operated machines can measure it reliably.",
    "Around AD 150 the astronomer Claudius Ptolemy used a result about cyclic quadrilaterals — for cyclic ABCD, AC × BD = AB × CD + AD × BC — to build a table of chord lengths in his *Almagest*. It was, in effect, the first trigonometry table, and it was used for over a thousand years.",
  ],

  activities: [
    {
      title: "Find the centre of a plate",
      emoji: "🍽️",
      materials: ["A round plate or lid", "A sheet of paper", "A pencil and ruler", "A pair of compasses (or a set square)"],
      steps: [
        "Draw round the plate on the paper to get a circle. You don't know where its centre is.",
        "Draw any two chords that are not parallel — for example, one near the top and one down the right-hand side.",
        "Construct the perpendicular bisector of each chord with compasses (arcs of equal radius from both ends, then join the two crossing points). With a set square, measure to the midpoint of each chord and draw a line at 90° to it instead.",
        "Mark the point where the two perpendicular bisectors cross. Measure from it to five points on the circle — the distances should all be equal.",
        "Try a third chord: its perpendicular bisector should pass through the same point.",
      ],
      maths:
        "The perpendicular bisector of a chord is the locus of points equidistant from the chord's two ends. The centre is the same distance (the radius) from both ends, so it lies on every such bisector — two of them are enough to pin it down. This is also how archaeologists find the original size of a broken circular plate from a single curved fragment.",
    },
    {
      title: "Trace a semicircle with a sheet of paper",
      emoji: "📐",
      materials: ["Two drawing pins", "A piece of cardboard or a cork board", "A sheet of A4 paper (its corners are right angles)", "A pencil"],
      steps: [
        "Push the two pins into the cardboard about 15 cm apart. Call them A and B.",
        "Slide the sheet of paper so that one edge touches pin A and the edge next to it touches pin B, with the corner pointing away from AB. Mark the corner with a dot.",
        "Move the paper to lots of different positions (always touching both pins) and mark the corner each time.",
        "Join the dots. What shape do you get? Measure its widest point and compare it with AB.",
        "Now cut a 60° corner from a piece of card (fold an equilateral triangle) and repeat. What changes?",
      ],
      maths:
        "Every dot is a point P where angle APB = 90°, and the dots trace out a semicircle with diameter AB — this is the converse of the angle-in-a-semicircle theorem. With a 60° corner you still get an arc of a circle, but a bigger one whose centre is not on AB: points where AB subtends a fixed angle all lie in the same segment of one circle.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Why the angle at the centre is double",
      svg: `<svg viewBox="0 0 460 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Proof of the angle at the centre theorem. Circle with centre O; C at the top, A and B lower down. CO is extended to D. Triangles OAC and OBC are isosceles because their sides OA, OB and OC are radii. Base angles x and x in triangle OAC give exterior angle AOD = 2x; base angles y and y in triangle OBC give exterior angle BOD = 2y. So angle AOB = 2x + 2y, twice angle ACB = x + y."><rect x="0" y="0" width="460" height="310" fill="#ffffff"/><circle cx="200" cy="155" r="115" fill="none" stroke="#334155" stroke-width="2"/><path d="M200,40 L114.5,232 L200,155 Z" fill="#c7d2fe" opacity="0.6"/><path d="M200,40 L305.1,201.8 L200,155 Z" fill="#fde68a" opacity="0.6"/><line x1="200" y1="40" x2="114.5" y2="232" stroke="#1f2937" stroke-width="2"/><line x1="200" y1="40" x2="305.1" y2="201.8" stroke="#1f2937" stroke-width="2"/><line x1="200" y1="155" x2="114.5" y2="232" stroke="#1f2937" stroke-width="2"/><line x1="200" y1="155" x2="305.1" y2="201.8" stroke="#1f2937" stroke-width="2"/><line x1="200" y1="40" x2="200" y2="155" stroke="#1f2937" stroke-width="2"/><line x1="200" y1="155" x2="200" y2="270" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M186.2,71.1 A34,34 0 0 0 200,74" fill="none" stroke="#4338ca" stroke-width="2"/><text x="190.2" y="90.5" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#4338ca" font-weight="bold">x</text><path d="M200,88 A48,48 0 0 0 226.1,80.3" fill="none" stroke="#b45309" stroke-width="2"/><text x="217.3" y="103" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309" font-weight="bold">y</text><path d="M136.8,211.9 A30,30 0 0 0 126.7,204.5" fill="none" stroke="#4338ca" stroke-width="2"/><text x="139.8" y="201.7" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#4338ca" font-weight="bold">x</text><path d="M288.7,176.6 A30,30 0 0 0 277.7,189.6" fill="none" stroke="#b45309" stroke-width="2"/><text x="272.4" y="178.3" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309" font-weight="bold">y</text><path d="M183.7,169.7 A22,22 0 0 0 200,177" fill="none" stroke="#4338ca" stroke-width="2"/><text x="184.5" y="194.2" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#4338ca" font-weight="bold">2x</text><path d="M200,177 A22,22 0 0 0 220.1,163.9" fill="none" stroke="#b45309" stroke-width="2"/><text x="220.7" y="191.4" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309" font-weight="bold">2y</text><circle cx="200" cy="40" r="3" fill="#1f2937"/><text x="200" y="30" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><circle cx="114.5" cy="232" r="3" fill="#1f2937"/><text x="100.5" y="242" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><circle cx="305.1" cy="201.8" r="3" fill="#1f2937"/><text x="319.1" y="211.8" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><circle cx="200" cy="270" r="3" fill="#1f2937"/><text x="200" y="290" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">D</text><circle cx="200" cy="155" r="3" fill="#1f2937"/><text x="214" y="149" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">O</text><text x="330" y="40" font-size="12" font-family="sans-serif" text-anchor="start" fill="#334155">OA = OB = OC (radii)</text><text x="330" y="60" font-size="12" font-family="sans-serif" text-anchor="start" fill="#4338ca">AOD = x + x = 2x</text><text x="330" y="80" font-size="12" font-family="sans-serif" text-anchor="start" fill="#b45309">BOD = y + y = 2y</text><text x="330" y="100" font-size="12" font-family="sans-serif" text-anchor="start" fill="#1f2937" font-weight="bold">AOB = 2(x + y)</text><text x="330" y="120" font-size="12" font-family="sans-serif" text-anchor="start" fill="#1f2937" font-weight="bold">= 2 × ACB</text></svg>`,
      caption:
        "Draw the diameter through C. The radii OA, OB and OC make two isosceles triangles, so the base angles are x and x, then y and y. The exterior angle of a triangle equals the sum of the two opposite interior angles, so angle AOD = 2x and angle BOD = 2y. Adding: angle AOB = 2x + 2y = 2(x + y) = 2 × angle ACB. Every other circle theorem — semicircle, same segment, cyclic quadrilateral — follows from this one.",
    },
    {
      title: "Polygons meeting at a point",
      svg: `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square, a regular hexagon and a regular dodecagon (12 sides) meet at one point with no gap. Their interior angles there are 90 degrees, 120 degrees and 150 degrees, which add up to 360 degrees."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><polygon points="212.2,97.5 268.2,97.5 268.2,41.5 212.2,41.5" fill="#bae6fd" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="212.2,97.5 212.2,41.5 163.8,13.5 115.3,41.5 115.3,97.5 163.8,125.5" fill="#bbf7d0" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><polygon points="212.2,97.5 163.8,125.5 135.8,174 135.8,230 163.8,278.5 212.2,306.5 268.2,306.5 316.7,278.5 344.7,230 344.7,174 316.7,125.5 268.2,97.5" fill="#fde68a" stroke="#1f2937" stroke-width="2" stroke-linejoin="round"/><text x="231.3" y="82.9" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">90°</text><text x="179.3" y="83" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">120°</text><text x="222.1" y="138.7" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">150°</text><text x="163.8" y="73.5" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">hexagon</text><text x="240.2" y="206" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">dodecagon</text><circle cx="212.2" cy="97.5" r="3.5" fill="#1f2937"/></svg>`,
      caption:
        "A square (90°), a regular hexagon (120°) and a regular 12-sided dodecagon (150°) fit together exactly at a point, because 90° + 120° + 150° = 360°. Each interior angle comes from 180° − {{360/n}}: the exterior angles of any polygon add up to one full turn. Puzzles like \"which regular polygon fills the gap?\" are just angles at a point plus this formula.",
    },
  ],

  history: {
    title: "Thales and the right angle in a semicircle",
    story:
      "Thales of Miletus lived around 600 BC in what is now Turkey, and later Greek writers called him the first person to *prove* a fact about geometry rather than just use it. The result most often linked to his name is that any triangle drawn in a semicircle, with the diameter as one side, has a right angle opposite the diameter. The proof usually given is one you can write today: join the centre to the third point, spot two isosceles triangles, and the angles add up to 90°. About three centuries later Euclid collected this and many other circle facts in Book III of his *Elements*, deriving each from earlier ones in a chain of proofs. That idea — a result is only known once it has been proved from simpler facts — is what the \"give reasons\" marks in IGCSE circle questions test.",
  },
};
