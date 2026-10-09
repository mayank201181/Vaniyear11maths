// Engagement extras for "Inequalities" (not part of the audited question bank).
import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "An airline, a factory or a hawker stall that wants the most profit from limited time, money and ingredients is solving a system of inequalities. The best answer always sits at a corner of the shaded region, and that one idea, linear programming, helped win a Nobel Prize.",

  didYouKnow: [
    "The symbols < and > first appeared in print in 1631, in *Artis Analyticae Praxis* by the English mathematician Thomas Harriot. The book was published ten years after he died. Versions of ≤ and ≥ with a double bar underneath (≦ and ≧) were used by the French scientist Pierre Bouguer in 1734.",
    "Multiplying by −1 reflects the number line in 0, so the order of every pair of numbers reverses: 2 < 5 but −2 > −5. That reflection is the whole reason the inequality sign flips when you multiply or divide by a negative number.",
    "A square is never negative, and many famous inequalities come from that one fact. For example, {{(sqrt(a) - sqrt(b))^2 >= 0}} expands to {{(a + b)/2 >= sqrt(ab)}} for any non-negative a and b. This is the AM–GM inequality: the arithmetic mean is never smaller than the geometric mean.",
    "In 1939 the Soviet mathematician Leonid Kantorovich showed how to plan production using systems of linear inequalities. In 1975 he shared the Nobel Memorial Prize in Economic Sciences with Tjalling Koopmans for their work on the best use of limited resources.",
    "The triangle inequality says each side of a triangle is shorter than the other two sides added together. That is why sticks of length 2, 3 and 6 cm can never make a triangle: 2 + 3 < 6.",
    "If you solve {{x^2 + 1 < 0}} you get no real solutions at all. {{x^2}} is never negative, so {{x^2 + 1}} is always at least 1. The graph of {{y = x^2 + 1}} never dips below the x-axis.",
  ],

  activities: [
    {
      title: "The hawker-budget region",
      emoji: "🥟",
      materials: ["Squared paper", "A pencil and ruler", "Two coloured pens"],
      steps: [
        "You have $12 to spend at a hawker centre. Vegetable curry puffs cost $2 each and kaya toast sets cost $3 each. You want at least 1 of each, and at most 5 curry puffs.",
        "Let x = number of curry puffs and y = number of toast sets. Write the four inequalities: {{2x + 3y <= 12}}, {{x >= 1}}, {{y >= 1}}, {{x <= 5}}.",
        "Draw axes from 0 to 6 and draw the four boundary lines. They are all solid, because every sign is ≤ or ≥. Shade the region that satisfies all four.",
        "Mark every point with whole-number coordinates inside or on the edge. Each one is a possible order. How many orders are there?",
        "Which order gets you the most items? Which one spends exactly $12?",
      ],
      maths:
        "There are 8 possible orders: (1, 1), (1, 2), (1, 3), (2, 1), (2, 2), (3, 1), (3, 2) and (4, 1). The greatest number of items is 5, from (3, 2) or (4, 1), and both of these sit at the edge of the region. Only (3, 2) costs exactly $12, because 6 + 6 = 12. This is a small linear-programming problem. The best answers are always on the boundary, near a corner, which is why exam questions ask you to check the corners of a region.",
    },
    {
      title: "Floor number line and the flip",
      emoji: "📏",
      materials: ["Masking tape", "A marker", "A coin (closed circle) and a hair tie or ring (open circle)", "A piece of string", "A partner"],
      steps: [
        "Make a number line on the floor with tape and mark the whole numbers from −6 to 6, about one shoe-length apart.",
        "Your partner calls out an inequality, such as {{x >= -2}} or {{-3 < x <= 4}}. Put the coin where an end is included and the ring where it is not, then lay the string along all the values that work.",
        "Now stand on 2 while your partner stands on 5. Who is further left? Write the inequality, 2 < 5.",
        "Both of you multiply your number by −1 and walk to the new position. Who is further left now? Write the new inequality.",
        "Try it with two negative numbers, and then with one positive and one negative. Does the order reverse every time?",
      ],
      maths:
        "Multiplying by −1 sends each number to its mirror image on the other side of 0, so whoever was on the left ends up on the right. That is exactly why 2 < 5 becomes −2 > −5, and why dividing both sides of an inequality by a negative number flips the sign. Adding or subtracting just slides both people the same distance, so their order never changes.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Why the sign flips: multiplying by −1 is a reflection",
      svg: `<svg viewBox="0 0 440 180" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two number lines from −6 to 6. On the top line 2 and 5 are marked with 2 to the left of 5. Arrows reflect them in 0 to −2 and −5 on the bottom line, where −5 is now to the left of −2.">
<rect x="0" y="0" width="440" height="180" fill="#ffffff"/>
<line x1="220" y1="18" x2="220" y2="168" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5 4"/>
<text x="226" y="16" font-size="11" font-family="sans-serif" fill="#334155">mirror at 0</text>
<line x1="40" y1="55" x2="400" y2="55" stroke="#334155" stroke-width="2"/>
<line x1="40" y1="135" x2="400" y2="135" stroke="#334155" stroke-width="2"/>
<g stroke="#334155" stroke-width="1.5">
<line x1="40" y1="50" x2="40" y2="60"/><line x1="70" y1="50" x2="70" y2="60"/><line x1="100" y1="50" x2="100" y2="60"/><line x1="130" y1="50" x2="130" y2="60"/><line x1="160" y1="50" x2="160" y2="60"/><line x1="190" y1="50" x2="190" y2="60"/><line x1="220" y1="50" x2="220" y2="60"/><line x1="250" y1="50" x2="250" y2="60"/><line x1="280" y1="50" x2="280" y2="60"/><line x1="310" y1="50" x2="310" y2="60"/><line x1="340" y1="50" x2="340" y2="60"/><line x1="370" y1="50" x2="370" y2="60"/><line x1="400" y1="50" x2="400" y2="60"/>
<line x1="40" y1="130" x2="40" y2="140"/><line x1="70" y1="130" x2="70" y2="140"/><line x1="100" y1="130" x2="100" y2="140"/><line x1="130" y1="130" x2="130" y2="140"/><line x1="160" y1="130" x2="160" y2="140"/><line x1="190" y1="130" x2="190" y2="140"/><line x1="220" y1="130" x2="220" y2="140"/><line x1="250" y1="130" x2="250" y2="140"/><line x1="280" y1="130" x2="280" y2="140"/><line x1="310" y1="130" x2="310" y2="140"/><line x1="340" y1="130" x2="340" y2="140"/><line x1="370" y1="130" x2="370" y2="140"/><line x1="400" y1="130" x2="400" y2="140"/>
</g>
<g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle">
<text x="40" y="73">−6</text><text x="100" y="73">−4</text><text x="160" y="73">−2</text><text x="220" y="73">0</text><text x="280" y="73">2</text><text x="340" y="73">4</text><text x="400" y="73">6</text>
<text x="40" y="153">−6</text><text x="100" y="153">−4</text><text x="160" y="153">−2</text><text x="220" y="153">0</text><text x="280" y="153">2</text><text x="340" y="153">4</text><text x="400" y="153">6</text>
</g>
<circle cx="280" cy="55" r="7" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/>
<circle cx="370" cy="55" r="7" fill="#fde68a" stroke="#1f2937" stroke-width="2"/>
<circle cx="160" cy="135" r="7" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/>
<circle cx="70" cy="135" r="7" fill="#fde68a" stroke="#1f2937" stroke-width="2"/>
<text x="280" y="40" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2</text>
<text x="370" y="40" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">5</text>
<path d="M 275 63 Q 220 100 165 127" fill="none" stroke="#1f2937" stroke-width="1.5"/>
<polygon points="165,127 172,119 175,127" fill="#1f2937"/>
<path d="M 365 63 Q 220 112 75 127" fill="none" stroke="#1f2937" stroke-width="1.5"/>
<polygon points="75,127 83,121 84,129" fill="#1f2937"/>
<text x="330" y="30" font-size="13" font-family="sans-serif" fill="#1f2937" font-weight="bold" text-anchor="middle">2 &lt; 5</text>
<text x="115" y="172" font-size="13" font-family="sans-serif" fill="#1f2937" font-weight="bold" text-anchor="middle">−5 &lt; −2, so −2 &gt; −5</text>
</svg>`,
      caption:
        "Multiplying by −1 reflects every number in 0, so the left–right order of any two numbers reverses. That is why the inequality sign flips when you multiply or divide both sides by a negative number.",
    },
    {
      title: "Reading a quadratic inequality from its graph",
      svg: `<svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y = x squared minus 2x minus 3, a U-shaped curve crossing the x-axis at −1 and 3. The part below the axis between −1 and 3 is highlighted; the parts above the axis for x less than −1 and x greater than 3 are highlighted in a different colour.">
<rect x="0" y="0" width="440" height="280" fill="#ffffff"/>
<line x1="40" y1="152" x2="430" y2="152" stroke="#334155" stroke-width="1.5"/>
<line x1="190" y1="12" x2="190" y2="262" stroke="#334155" stroke-width="1.5"/>
<g stroke="#334155" stroke-width="1.5">
<line x1="90" y1="147" x2="90" y2="157"/><line x1="140" y1="147" x2="140" y2="157"/><line x1="240" y1="147" x2="240" y2="157"/><line x1="290" y1="147" x2="290" y2="157"/><line x1="340" y1="147" x2="340" y2="157"/><line x1="390" y1="147" x2="390" y2="157"/>
</g>
<g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle">
<text x="90" y="170">−2</text><text x="132" y="170">−1</text><text x="240" y="170">1</text><text x="290" y="170">2</text><text x="348" y="170">3</text><text x="390" y="170">4</text>
</g>
<text x="424" y="146" font-size="12" font-family="sans-serif" fill="#1f2937">x</text>
<text x="196" y="22" font-size="12" font-family="sans-serif" fill="#1f2937">y</text>
<polyline points="90.0,42.0 100.0,67.5 110.0,91.3 120.0,113.3 130.0,133.5 140.0,152.0" fill="none" stroke="#16a34a" stroke-width="4"/>
<polyline points="340.0,152.0 350.0,133.5 360.0,113.3 370.0,91.3 380.0,67.5 390.0,42.0" fill="none" stroke="#16a34a" stroke-width="4"/>
<polyline points="140.0,152.0 150.0,168.7 160.0,183.7 170.0,196.9 180.0,208.3 190.0,218.0 200.0,225.9 210.0,232.1 220.0,236.5 230.0,239.1 240.0,240.0 250.0,239.1 260.0,236.5 270.0,232.1 280.0,225.9 290.0,218.0 300.0,208.3 310.0,196.9 320.0,183.7 330.0,168.7 340.0,152.0" fill="none" stroke="#4f46e5" stroke-width="4"/>
<circle cx="140" cy="152" r="5" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
<circle cx="340" cy="152" r="5" fill="#ffffff" stroke="#1f2937" stroke-width="2"/>
<rect x="200" y="20" width="160" height="40" rx="6" fill="#bbf7d0"/>
<text x="208" y="36" font-size="12" font-family="sans-serif" fill="#1f2937">above the axis (y &gt; 0):</text>
<text x="208" y="52" font-size="12" font-family="sans-serif" fill="#1f2937" font-weight="bold">x &lt; −1 or x &gt; 3</text>
<rect x="10" y="218" width="160" height="40" rx="6" fill="#c7d2fe"/>
<text x="18" y="234" font-size="12" font-family="sans-serif" fill="#1f2937">below the axis (y &lt; 0):</text>
<text x="18" y="250" font-size="12" font-family="sans-serif" fill="#1f2937" font-weight="bold">−1 &lt; x &lt; 3</text>
<text x="200" y="128" font-size="12" font-family="sans-serif" fill="#1f2937">y = x² − 2x − 3</text>
</svg>`,
      caption:
        "{{x^2 - 2x - 3 = (x + 1)(x - 3)}}, so the critical values are −1 and 3. For \"< 0\" read off where the U-shaped curve is below the x-axis, which is one piece between the roots. For \"> 0\" read off where it is above the axis, which is two separate pieces joined by \"or\".",
    },
  ],

  history: {
    title: "The homework that wasn't",
    story:
      "In 1939 George Dantzig, a graduate student at the University of California, Berkeley, arrived late to a statistics lecture given by Jerzy Neyman. Two problems were written on the board, and Dantzig copied them down, thinking they were homework. He found them harder than usual but handed in his solutions a few days later. About six weeks afterwards, an excited Neyman knocked on his door early one Sunday morning. The \"homework\" had been two famous unsolved problems in statistics, and Dantzig had solved them. In 1947, while working on planning problems for the US Air Force, Dantzig invented the simplex method. It finds the best corner of a region defined by many linear inequalities. Versions of it are still used to plan airline schedules, deliveries and factory production.",
  },
};
