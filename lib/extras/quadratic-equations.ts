import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "A recipe for solving {{x^2 + 10x = 39}} was written in Baghdad around 820 AD, and it works by literally cutting up and completing a square. Twelve centuries later, the quadratic formula you use is that same picture written in algebra.",

  didYouKnow: [
    "The word *quadratic* comes from the Latin *quadratus*, meaning \"square\". A quadratic equation is one whose highest power is a square, {{x^2}}.",
    "Babylonian scribes were solving problems equivalent to quadratic equations almost 4000 years ago. Clay tablets from around 1800 BC give step-by-step recipes that amount to completing the square, all done in base 60.",
    "The word *algebra* comes from *al-jabr*, part of the title of al-Khwarizmi's book (around 820 AD). One of his worked examples is {{x^2 + 10x = 39}}: he adds a 5-by-5 corner to complete a square of area 64, so x + 5 = 8 and x = 3.",
    "In 628 AD the Indian mathematician Brahmagupta wrote a rule, in words, that is equivalent to the quadratic formula. He was also one of the first to set out rules for calculating with negative numbers and zero.",
    "The golden ratio is a root of a quadratic. Solving {{x^2 = x + 1}} gives {{x = (1 + sqrt(5))/2 ~= 1.618}}. The other root, {{(1 - sqrt(5))/2 ~= -0.618}}, is exactly 1 minus the golden ratio.",
    "If you ignore air resistance, a thrown ball follows a parabola: its height is roughly {{h = ut - 4.9t^2}} metres after t seconds. Asking *when* it reaches a certain height is a quadratic equation, and usually there are two answers: once on the way up, once on the way down.",
  ],

  activities: [
    {
      title: "Complete the square with paper tiles",
      emoji: "✂️",
      materials: ["Squared paper or card", "Scissors", "A ruler and a pencil"],
      steps: [
        "Cut out one large square to stand for {{x^2}} (say 6 cm by 6 cm, so x = 6 cm), and some 1 cm by 6 cm strips, each standing for x.",
        "Model {{x^2 + 6x}}: take the big square and 6 strips. Put 3 strips along the right-hand side and 3 along the bottom.",
        "You now have an L-shape that is *almost* a bigger square. What size is the missing corner? Cut it out from 1 cm squares (you need 3 × 3 = 9 of them).",
        "Write what you've shown: {{x^2 + 6x + 9 = (x + 3)^2}}, so {{x^2 + 6x = (x + 3)^2 - 9}}. Repeat with 8 strips (4 on each side). What corner is missing now?",
      ],
      maths:
        "Splitting the bx strips into two equal halves, one on each side of the square, leaves a gap of {{(b/2)^2}} in the corner. That is exactly why completing the square uses {{x^2 + bx = (x + b/2)^2 - (b/2)^2}}. It's al-Khwarizmi's method, and it is also where the quadratic formula comes from.",
    },
    {
      title: "Time a throw and solve for the height",
      emoji: "⚾",
      materials: ["A soft ball", "A phone stopwatch", "A friend (and an open space outdoors)", "A calculator"],
      steps: [
        "Throw the ball straight up and time how long it takes to come back to your hand. Do it 3 times and take the mean time T (for example T = 1.6 s).",
        "Ignoring air resistance, the launch speed is about u = 4.9T m/s, and the height above your hand after t seconds is {{h = ut - 4.9t^2}}.",
        "Use the quadratic formula to find when the ball is 1 m above your hand: solve {{4.9t^2 - ut + 1 = 0}}. You should get two times. Check that they add up to T.",
        "Now ask when it is 10 m above your hand. Work out the discriminant first. What does its sign tell you about your throw?",
      ],
      maths:
        "The two roots are the times on the way up and on the way down, placed symmetrically about the top of the flight at {{t = T/2}}. That's why they add up to T (the sum of the roots of {{at^2 + bt + c = 0}} is {{-b/a}}). A negative discriminant means the ball never gets that high: there are no real solutions because the height is above the vertex of the parabola.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Al-Khwarizmi completes the square",
      svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square of side x with two 5 by x rectangles on its sides and a 5 by 5 corner square completing a big square of side x plus 5, drawn to scale for x equals 3"><rect x="0" y="0" width="480" height="260" fill="#ffffff"/><rect x="40" y="30" width="72" height="72" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><rect x="112" y="30" width="120" height="72" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><rect x="40" y="102" width="72" height="120" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><rect x="112" y="102" width="120" height="120" fill="#bbf7d0" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><text x="76" y="71" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#1f2937">x²</text><text x="172" y="71" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#1f2937">5x</text><text x="76" y="167" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#1f2937">5x</text><text x="172" y="167" font-size="16" font-family="sans-serif" text-anchor="middle" fill="#1f2937">25</text><text x="76" y="22" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">x</text><text x="172" y="22" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">5</text><text x="30" y="71" font-size="13" font-family="sans-serif" text-anchor="end" fill="#334155">x</text><text x="30" y="167" font-size="13" font-family="sans-serif" text-anchor="end" fill="#334155">5</text><text x="136" y="244" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#334155">side x + 5</text><text x="262" y="60" font-size="14" font-family="sans-serif" fill="#1f2937">x² + 10x = 39</text><text x="262" y="90" font-size="14" font-family="sans-serif" fill="#1f2937">Split 10x into two 5x strips.</text><text x="262" y="120" font-size="14" font-family="sans-serif" fill="#1f2937">Add the 5 × 5 corner:</text><text x="262" y="142" font-size="14" font-family="sans-serif" fill="#1f2937">39 + 25 = 64</text><text x="262" y="172" font-size="14" font-family="sans-serif" fill="#1f2937">(x + 5)² = 64</text><text x="262" y="202" font-size="14" font-family="sans-serif" fill="#1f2937">x + 5 = 8, so x = 3</text></svg>`,
      caption:
        "Drawn to scale with x = 3. The two 5x strips and the 25 corner make a perfect square of side x + 5. Al-Khwarizmi only accepted positive lengths, so he gave just x = 3. Algebra also allows x + 5 = −8, giving the second root x = −13.",
    },
    {
      title: "What the discriminant sees",
      svg: `<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three parabolas: y equals x squared minus 4 crosses the x-axis twice, y equals x squared touches it once, y equals x squared plus 2 misses it"><rect x="0" y="0" width="480" height="240" fill="#ffffff"/><line x1="20" y1="160" x2="150" y2="160" stroke="#334155" stroke-width="1.5"/><line x1="175" y1="160" x2="305" y2="160" stroke="#334155" stroke-width="1.5"/><line x1="330" y1="160" x2="460" y2="160" stroke="#334155" stroke-width="1.5"/><path d="M35,126.25 Q85,313.75 135,126.25" fill="none" stroke="#1f2937" stroke-width="2.5"/><path d="M190,66.25 Q240,253.75 290,66.25" fill="none" stroke="#1f2937" stroke-width="2.5"/><path d="M345,36.25 Q395,223.75 445,36.25" fill="none" stroke="#1f2937" stroke-width="2.5"/><circle cx="45" cy="160" r="5" fill="#fecaca" stroke="#1f2937"/><circle cx="125" cy="160" r="5" fill="#fecaca" stroke="#1f2937"/><circle cx="240" cy="160" r="5" fill="#bbf7d0" stroke="#1f2937"/><text x="85" y="16" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">b² − 4ac &gt; 0</text><text x="85" y="31" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">two roots</text><text x="240" y="16" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">b² − 4ac = 0</text><text x="240" y="31" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">one repeated root</text><text x="395" y="16" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">b² − 4ac &lt; 0</text><text x="395" y="31" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">no real roots</text><text x="85" y="236" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">y = x² − 4</text><text x="240" y="236" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">y = x²</text><text x="395" y="236" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">y = x² + 2</text></svg>`,
      caption:
        "The roots of {{ax^2 + bx + c = 0}} are where {{y = ax^2 + bx + c}} meets the x-axis. In the formula, {{sqrt(b^2 - 4ac)}} is the distance either side of the axis of symmetry (before dividing by 2a). Positive gives two crossings, zero gives a touch, and negative means the square root isn't real, so the curve misses the axis.",
    },
  ],

  history: {
    title: "The House of Wisdom",
    story:
      "Around 820 AD, Muhammad ibn Musa al-Khwarizmi worked at the House of Wisdom in Baghdad, a great library and research centre. His book on *al-jabr wa'l-muqabala* (\"restoring and balancing\") showed how to solve quadratic equations step by step. He used no symbols at all: everything was written in words, and every rule was justified by a geometric picture of squares and rectangles. He didn't use negative numbers, so he split quadratics into six separate types, such as \"squares and roots equal numbers\". In the 12th century the book was translated into Latin, and *al-jabr* became *algebra*. A Latin version of his name, *Algoritmi*, gave us the word **algorithm**. Every time you complete the square, you are repeating his picture.",
  },
};
