import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Pick any two points A and B on a circle, then wander round the rest of the edge looking at them. However far you walk, the angle between your lines of sight to A and B never changes — until you cross over to the other side of AB, where it suddenly becomes 180° minus what it was. Every circle theorem in this topic explains a surprise like that, and each one is proved with nothing more than isosceles triangles.",

  didYouKnow: [
    "The fact that the angle in a semicircle is a right angle is traditionally credited to **Thales of Miletus** (about 600 BC), often called the first Greek mathematician. The ancient biographer Diogenes Laërtius records a story that Thales sacrificed an ox to celebrate the discovery.",
    "Almost every theorem in this topic is in Book III of **Euclid's Elements** (about 300 BC): the angle at the centre (Proposition 20), angles in the same segment (21), opposite angles of a cyclic quadrilateral (22), the angle in a semicircle (31), the alternate segment theorem (32) and intersecting chords (35).",
    "Only three regular polygons can tile a flat floor on their own: equilateral triangles, squares and regular hexagons. The reason is the interior angle — it must divide exactly into 360°, and 60°, 90° and 120° are the only interior angles of regular polygons that do.",
    "Bees build hexagonal cells for a reason. In 1999 the mathematician Thomas Hales proved the **honeycomb conjecture**: of all ways to divide a flat surface into regions of equal area, the regular hexagonal grid uses the least total length of wall.",
    "The UK's 20p and 50p coins are not circles but **equilateral-curve heptagons** (Reuleaux heptagons): each side is an arc centred on the opposite corner. That makes the coin's width the same in every direction, so it rolls smoothly through coin-operated machines.",
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
      svg: `__EX1__`,
      caption:
        "Draw the diameter through C. The radii OA, OB and OC make two isosceles triangles, so the base angles are x and x, then y and y. The exterior angle of a triangle equals the sum of the two opposite interior angles, so angle AOD = 2x and angle BOD = 2y. Adding: angle AOB = 2x + 2y = 2(x + y) = 2 × angle ACB. Every other circle theorem — semicircle, same segment, cyclic quadrilateral — follows from this one.",
    },
    {
      title: "Polygons meeting at a point",
      svg: `__EX2__`,
      caption:
        "A square (90°), a regular hexagon (120°) and a regular 12-sided dodecagon (150°) fit together exactly at a point, because 90° + 120° + 150° = 360°. Each interior angle comes from 180° − {{360/n}}: the exterior angles of any polygon add up to one full turn. Puzzles like \"which regular polygon fills the gap?\" are just angles at a point plus this formula.",
    },
  ],

  history: {
    title: "Thales and the right angle in a semicircle",
    story:
      "Thales of Miletus lived around 600 BC in what is now Turkey, and later Greek writers called him the first person to *prove* a fact about geometry rather than just use it. The result most often linked to his name is that any triangle drawn in a semicircle, with the diameter as one side, has a right angle opposite the diameter. Thales's argument is the one you can give today: join the centre to the third point, notice the two isosceles triangles, and the angles add up to make 90°. About three centuries later Euclid collected this and many other circle facts in Book III of his *Elements*, deriving each from earlier ones in a chain of proofs. That idea — a result is only known once it has been proved from simpler facts — is exactly what the \"give reasons\" marks in an IGCSE circle theorem question are testing.",
  },
};
