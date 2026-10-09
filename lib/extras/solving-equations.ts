import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "About 2,000 years ago, Chinese mathematicians solved three equations in three unknowns by sliding bamboo counting rods around a grid. Their method is, step for step, the elimination a computer uses today when it solves a million equations at once.",

  didYouKnow: [
    "The Chinese classic *The Nine Chapters on the Mathematical Art* (compiled roughly 200 BCE – 100 CE) has a whole chapter, *Fangcheng*, on simultaneous linear equations. Its first problem: 3 bundles of top-grade grain, 2 of medium and 1 of low give 39 measures; 2, 3, 1 give 34; 1, 2, 3 give 26. The answer is {{9 1/4}}, {{4 1/4}} and {{2 3/4}} measures per bundle.",
    "To run elimination on their counting board, Chinese mathematicians needed to subtract bigger numbers from smaller ones, so they used red and black rods to tell positive from negative. This is one of the earliest known systematic uses of negative numbers.",
    "Elimination is now called *Gaussian elimination* after Carl Friedrich Gauss, who used it in the early 1800s to work out the orbit of the asteroid Pallas from telescope observations. The method itself was nearly 2,000 years old by then.",
    "A GPS receiver needs signals from at least **four** satellites, not three. There are four unknowns — your three position coordinates and the error in the receiver's own clock — so it needs four equations.",
    "There is exactly one temperature that reads the same in Celsius and Fahrenheit. Put C = F into {{C = 5/9 (F - 32)}} and solve: {{9F = 5F - 160}}, so F = −40. At −40 degrees the two scales agree.",
    "Weather forecasts, bridge designs and computer graphics all rely on solving systems of linear equations — often with millions of unknowns. The computers use the same idea you do: knock out one unknown at a time.",
  ],

  activities: [
    {
      title: "The secret price list",
      emoji: "🧾",
      materials: [
        "Two kinds of small items, e.g. pencils and erasers (or two kinds of snack)",
        "Scrap paper and a pencil",
        "A partner",
      ],
      steps: [
        "Player 1 secretly gives each kind of item a whole-number price in cents (say pencils 60c, erasers 35c) and writes it down, folded over.",
        "Player 1 makes two 'baskets' with different mixes, e.g. 3 pencils + 2 erasers and 1 pencil + 4 erasers, and says only the total cost of each basket.",
        "Player 2 writes two equations, {{3p + 2e = 250}} and {{p + 4e = 200}}, and solves them by elimination or substitution.",
        "Unfold the paper to check. Swap roles and make it harder: three kinds of item and three baskets.",
        "Bonus: Player 1 tries to choose two baskets that make the puzzle *impossible* to solve. What must be true about the baskets?",
      ],
      maths:
        "Each basket is one linear equation; two different baskets pin down two prices. The puzzle can't be solved when one basket is just a scaled-up copy of the other (e.g. 1 pencil + 2 erasers and 2 pencils + 4 erasers): the second equation gives no new information. On a graph that's two identical lines — infinitely many possible price lists. That is exactly the case {{ae - bd = 0}}.",
    },
    {
      title: "Where do the strings cross?",
      emoji: "📐",
      materials: ["Squared paper", "Two pieces of thread or two rulers", "A pencil"],
      steps: [
        "Draw x- and y-axes from 0 to 10 on squared paper.",
        "Pick two equations, e.g. {{x + y = 8}} and {{y = 2x - 1}}. For each, find two points that fit it (for {{x + y = 8}}: (0, 8) and (8, 0)).",
        "Stretch a thread (or lay a ruler) through each pair of points. Read off where they cross.",
        "Now solve the two equations algebraically. How close was the graph? Try a pair whose answer is a fraction, like {{x + y = 8}} and {{y = 2x - 2}}.",
        "Finally try {{y = 2x - 1}} and {{y = 2x + 3}}. What do you notice?",
      ],
      maths:
        "The crossing point is the one (x, y) that lies on both lines — the solution of the simultaneous equations. Graphs give a quick estimate, but when the answer is a fraction ({{x = 10/3}}, {{y = 14/3}} for the second pair) only algebra gives it exactly. Lines with the same gradient never meet, so those equations have no solution.",
    },
  ],

  bonusDiagrams: [
    {
      title: "The solution is where the lines cross",
      svg: `<svg viewBox="0 0 330 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of the lines 2x + y = 7 and y = x + 1 for x from 0 to 5. The first line falls from (0, 7) to (3.5, 0); the second rises from (0, 1) to (5, 6). They cross at the point (2, 3), which is marked." font-family="sans-serif"><rect x="0" y="0" width="330" height="320" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="90" y1="34" x2="90" y2="290"/><line x1="140" y1="34" x2="140" y2="290"/><line x1="190" y1="34" x2="190" y2="290"/><line x1="240" y1="34" x2="240" y2="290"/><line x1="290" y1="34" x2="290" y2="290"/><line x1="40" y1="258" x2="290" y2="258"/><line x1="40" y1="226" x2="290" y2="226"/><line x1="40" y1="194" x2="290" y2="194"/><line x1="40" y1="162" x2="290" y2="162"/><line x1="40" y1="130" x2="290" y2="130"/><line x1="40" y1="98" x2="290" y2="98"/><line x1="40" y1="66" x2="290" y2="66"/><line x1="40" y1="34" x2="290" y2="34"/></g><line x1="40" y1="290" x2="300" y2="290" stroke="#334155" stroke-width="1.5"/><line x1="40" y1="300" x2="40" y2="26" stroke="#334155" stroke-width="1.5"/><g font-size="11" fill="#334155" text-anchor="middle"><text x="90" y="305">1</text><text x="140" y="305">2</text><text x="190" y="305">3</text><text x="240" y="305">4</text><text x="290" y="305">5</text><text x="306" y="294">x</text></g><g font-size="11" fill="#334155" text-anchor="end"><text x="34" y="294">0</text><text x="34" y="262">1</text><text x="34" y="230">2</text><text x="34" y="198">3</text><text x="34" y="166">4</text><text x="34" y="134">5</text><text x="34" y="102">6</text><text x="34" y="70">7</text><text x="34" y="38">8</text><text x="44" y="22" text-anchor="start">y</text></g><line x1="40" y1="66" x2="215" y2="290" stroke="#4f46e5" stroke-width="3"/><line x1="40" y1="258" x2="290" y2="98" stroke="#d97706" stroke-width="3"/><line x1="140" y1="194" x2="140" y2="290" stroke="#334155" stroke-width="1" stroke-dasharray="4 3"/><line x1="40" y1="194" x2="140" y2="194" stroke="#334155" stroke-width="1" stroke-dasharray="4 3"/><circle cx="140" cy="194" r="6" fill="#16a34a" stroke="#ffffff" stroke-width="2"/><text x="150" y="214" font-size="13" font-weight="bold" fill="#1f2937">(2, 3)</text><text x="70" y="96" font-size="13" fill="#4f46e5">2x + y = 7</text><text x="214" y="112" font-size="13" fill="#d97706">y = x + 1</text></svg>`,
      caption:
        "Every point on the blue line satisfies {{2x + y = 7}}; every point on the orange line satisfies {{y = x + 1}}. Only (2, 3) is on both — check: 2 × 2 + 3 = 7 and 2 + 1 = 3. Substitution gives the same answer: {{2x + (x + 1) = 7}}, so {{3x = 6}} and x = 2.",
    },
    {
      title: "Elimination is comparing two receipts",
      svg: `<svg viewBox="0 0 420 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two receipts. Receipt A: 3 samosas and 2 drinks cost 12 dollars. Receipt B: 3 samosas and 5 drinks cost 21 dollars. The samosas match, so the extra 3 drinks on receipt B cost the extra 9 dollars, so one drink costs 3 dollars." font-family="sans-serif"><rect x="0" y="0" width="420" height="220" fill="#ffffff"/><text x="14" y="38" font-size="13" font-weight="bold" fill="#1f2937">A</text><circle cx="48" cy="33" r="13" fill="#fde68a" stroke="#334155"/><circle cx="80" cy="33" r="13" fill="#fde68a" stroke="#334155"/><circle cx="112" cy="33" r="13" fill="#fde68a" stroke="#334155"/><rect x="134" y="20" width="22" height="26" rx="4" fill="#bae6fd" stroke="#334155"/><rect x="162" y="20" width="22" height="26" rx="4" fill="#bae6fd" stroke="#334155"/><text x="330" y="38" font-size="14" fill="#1f2937">= $12</text><text x="14" y="98" font-size="13" font-weight="bold" fill="#1f2937">B</text><circle cx="48" cy="93" r="13" fill="#fde68a" stroke="#334155"/><circle cx="80" cy="93" r="13" fill="#fde68a" stroke="#334155"/><circle cx="112" cy="93" r="13" fill="#fde68a" stroke="#334155"/><rect x="134" y="80" width="22" height="26" rx="4" fill="#bae6fd" stroke="#334155"/><rect x="162" y="80" width="22" height="26" rx="4" fill="#bae6fd" stroke="#334155"/><rect x="190" y="80" width="22" height="26" rx="4" fill="#bbf7d0" stroke="#334155" stroke-width="2"/><rect x="218" y="80" width="22" height="26" rx="4" fill="#bbf7d0" stroke="#334155" stroke-width="2"/><rect x="246" y="80" width="22" height="26" rx="4" fill="#bbf7d0" stroke="#334155" stroke-width="2"/><text x="330" y="98" font-size="14" fill="#1f2937">= $21</text><line x1="30" y1="62" x2="190" y2="62" stroke="#334155" stroke-dasharray="4 3"/><text x="96" y="124" font-size="11" text-anchor="middle" fill="#334155">same in both</text><path d="M190 114 v6 h78 v-6" fill="none" stroke="#334155" stroke-width="1.5"/><text x="229" y="134" font-size="11" text-anchor="middle" fill="#334155">the extra</text><text x="14" y="160" font-size="12" fill="#1f2937">Circles = samosas, boxes = drinks.   B − A:  3 drinks = $21 − $12 = $9</text><text x="14" y="182" font-size="12" fill="#1f2937">So 1 drink = $3. Back in A: 3 samosas + $6 = $12, so 1 samosa = $2.</text><text x="14" y="204" font-size="12" fill="#1f2937">In algebra: (2) − (1) on 3s + 2d = 12 and 3s + 5d = 21 gives 3d = 9.</text></svg>`,
      caption:
        "Subtracting one equation from another is like comparing two receipts: whatever is the same in both cancels out, and the difference in cost must be paid for by the difference in what was bought. That's why you make one coefficient match before you subtract.",
    },
  ],

  history: {
    title: "Rods, colours and a 2,000-year-old algorithm",
    story:
      "Long before algebra had letters, Chinese officials needed to share out grain, taxes and labour fairly — problems with several unknowns at once. *The Nine Chapters on the Mathematical Art*, compiled over centuries and finished around the 1st century CE, shows how. Each equation was laid out as a column of bamboo counting rods on a board. To remove an unknown, the clerk multiplied one column by a number and repeatedly subtracted another column from it, until a rod position was empty — exactly our elimination. Because the subtractions often went below zero, red and black rods distinguished positive from negative. In 263 CE the mathematician Liu Hui wrote a commentary explaining why the method works. European mathematicians reached the same procedure independently many centuries later; today it carries Gauss's name, but it began on a Chinese counting board.",
  },
};
