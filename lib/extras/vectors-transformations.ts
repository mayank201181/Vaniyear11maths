import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "Reflect a shape in one mirror, then in a second mirror parallel to it, and the shape slides along without flipping. Two reflections always make a translation or a rotation. Every rigid move of a flat shape can be built from at most three reflections.",
  didYouKnow: [
    "Any rigid motion of the plane (a move that keeps all lengths the same) is one of exactly four types: a translation, a rotation, a reflection, or a *glide reflection* (a reflection followed by a slide along the mirror). Footprints in sand are the classic glide reflection.",
    "Two mirrors crossing at an angle θ produce a rotation through 2θ about the crossing point. That's why a kaleidoscope with mirrors at 60° shows 6 copies of the pattern arranged round the centre: 360° ÷ 60° = 6.",
    "Every pilot and sailor uses vector addition. A plane flying at 250 km/h due north in a 50 km/h wind from the west actually travels along {{col(50, 250)}}. Its ground speed is {{sqrt(50^2 + 250^2)}} ≈ 255 km/h, slightly east of north.",
    "Computer graphics engines move every object on screen with the same maths you use for transformations. Each rotation, reflection and enlargement is stored as a small grid of numbers (a matrix), and combining two transformations means multiplying the grids.",
    "The word *vector* comes from the Latin *vehere*, 'to carry'. A vector carries a point from one place to another. In biology, the mosquito that carries malaria is also called a vector.",
  ],
  activities: [
    {
      title: "Two mirrors, one rotation",
      emoji: "🪞",
      materials: ["Two small mirrors (or shiny phone screens)", "Sticky tape", "A protractor", "A small object, e.g. a coin or a letter written on paper"],
      steps: [
        "Tape the two mirrors together along one edge so they stand up like an open book.",
        "Put the object between them. Open the mirrors to 90° and count how many copies of the object you see, including the real one.",
        "Repeat at 72°, 60° and 45°. Record the number of copies each time.",
        "Find the rule linking the angle θ to the number of copies. Then predict the count at 40° before you check.",
      ],
      maths: "Each reflection reverses the object; reflecting twice turns it the right way round again, rotated by 2θ about the hinge. So the images repeat every 2θ and fill the full turn: you see {{360/θ}} copies in total (4 at 90°, 5 at 72°, 6 at 60°, 8 at 45°). This is the 'two reflections = one rotation' fact from combined transformations.",
    },
    {
      title: "Treasure hunt with column vectors",
      emoji: "🗺️",
      materials: ["Squared paper", "A pencil", "A friend or family member"],
      steps: [
        "Mark a start point O and secretly mark a 'treasure' point T somewhere on the grid.",
        "Write the route to T as two or three column vectors, for example {{col(3, 2)}}, then {{col(-1, 4)}}, then {{col(2, -1)}}.",
        "Your partner adds the vectors to find the single vector from O to T and plots the treasure. Check it matches.",
        "Swap roles. Then make it harder: give the route as 2**a** − **b** with **a** and **b** defined separately, or ask for the straight-line distance to the treasure using Pythagoras.",
      ],
      maths: "Following vectors one after another is vector addition: the total displacement is the sum of the steps, however winding the route. The order doesn't matter ({{a + b = b + a}}), and the straight-line distance is the magnitude of the total vector.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Two parallel mirrors make a translation",
      svg: `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A flag shape A is reflected in mirror line M1 to give B, which is reflected in a parallel mirror M2 to give C. C is A moved across by twice the distance between the mirrors."><rect x="0" y="0" width="460" height="220" fill="#ffffff"/><line x1="160" y1="20" x2="160" y2="175" stroke="#334155" stroke-width="2" stroke-dasharray="6 4"/><line x1="260" y1="20" x2="260" y2="175" stroke="#334155" stroke-width="2" stroke-dasharray="6 4"/><text x="160" y="16" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">M1</text><text x="260" y="16" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">M2</text><polygon points="80,140 80,60 130,75 90,90 90,140" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><polygon points="240,140 240,60 190,75 230,90 230,140" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="280,140 280,60 330,75 290,90 290,140" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><text x="95" y="160" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><text x="225" y="160" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><text x="295" y="160" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937" text-anchor="middle">C</text><line x1="80" y1="195" x2="280" y2="195" stroke="#1f2937" stroke-width="2"/><polygon points="280,195 270,190 270,200" fill="#1f2937"/><text x="180" y="212" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A to C: 200 = 2 × (gap of 100 between mirrors)</text></svg>`,
      caption: "Reflect A in M1 to get B (flipped), then B in M2 to get C (flipped back). C is A slid to the right by **twice** the gap between the mirrors. With mirrors x = a and x = b, the single equivalent transformation is the translation {{col(2(b - a), 0)}}.",
    },
    {
      title: "Why →OP = (1 − t)a + tb when P is on AB",
      svg: `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB with OA = a and OB = b. P is on AB, one third of the way from A to B. The route O to A to P is shown."><rect x="0" y="0" width="440" height="240" fill="#ffffff"/><line x1="50" y1="210" x2="160" y2="40" stroke="#1f2937" stroke-width="2"/><polygon points="160,40 148.6,51.2 157.0,56.6" fill="#1f2937"/><line x1="50" y1="210" x2="400" y2="190" stroke="#1f2937" stroke-width="2"/><polygon points="400,190 388.3,185.7 388.9,196.0" fill="#1f2937"/><line x1="160" y1="40" x2="400" y2="190" stroke="#1f2937" stroke-width="2"/><line x1="50" y1="210" x2="240" y2="90" stroke="#16a34a" stroke-width="2.5" stroke-dasharray="6 4"/><circle cx="240" cy="90" r="4" fill="#1f2937"/><text x="85" y="120" font-size="15" font-weight="700" font-style="italic" font-family="sans-serif" fill="#1f2937">a</text><text x="225" y="220" font-size="15" font-weight="700" font-style="italic" font-family="sans-serif" fill="#1f2937">b</text><text x="38" y="226" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">O</text><text x="155" y="30" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">A</text><text x="408" y="194" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">B</text><text x="248" y="84" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">P</text><text x="300" y="60" font-size="12" font-family="sans-serif" fill="#1f2937">AP = ⅓ of AB</text></svg>`,
      caption: "Go O → A → P: {{a + t(b - a) = (1 - t)a + tb}}. Here {{t = 1/3}}, so →OP = {{2/3 a + 1/3 b}}. The two coefficients always add up to 1 for any point on the line AB. That's a quick check on your answer, and it's the idea behind 'prove that the points are collinear'.",
    },
  ],
  history: {
    title: "From sailors' arrows to Gibbs and Heaviside",
    story: "People added movements as arrows long before anyone called them vectors. Simon Stevin (around 1586) and later Isaac Newton combined forces using the 'parallelogram rule', and navigators added courses and currents on charts. In 1843 William Rowan Hamilton invented quaternions, a four-part number system for rotations in space. He was so excited that he carved the key formula into Broom Bridge in Dublin. His notation was powerful but awkward. In the 1880s the American physicist Josiah Willard Gibbs and the English engineer Oliver Heaviside independently stripped it down to the vector algebra used today: adding arrows, multiplying them by numbers, and writing them in components. It quickly became the language of physics and engineering.",
  },
};
