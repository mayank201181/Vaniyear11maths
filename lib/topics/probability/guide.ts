import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "probability",
  title: "Probability",
  strand: "Statistics & Probability",
  icon: "🎲",
  summary: "Count the outcomes, add for OR, multiply for AND — and let a tree do the bookkeeping.",
  intro:
    "Probability turns 'how likely?' into a number you can calculate with. On 4MA1 Higher papers it is worth reliable marks: a tree diagram with or without replacement, an 'at least one' question, an expected frequency, and — at grade 8–9 — a 'show that' where the probability information hides a quadratic equation. Almost everything rests on two rules: **add** for OR (when the events can't both happen) and **multiply** for AND (when one doesn't affect the other). This chapter shows *why* those rules work, so you can spot when they don't — and then stretches into counting arrangements and the binomial expansion, where the same multiplication idea counts thousands of outcomes at once.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "basic-probability",
      heading: "Probability, sample spaces & expected frequency",
      discovery: {
        problem:
          "You roll two fair dice and add the scores. Arjun says: 'The total can be anything from 2 to 12 — that's 11 possible totals, so each one has probability {{1/11}}.'\n\nIs a total of 7 really as likely as a total of 12? Before reading on, decide which total is most likely and estimate its probability.",
        idea:
          "Arjun has listed outcomes that are **not equally likely**. A total of 12 happens only one way (6 and 6), but a total of 7 happens six ways: (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1).\n\nThe outcomes that *are* equally likely are the **pairs** of scores — 6 × 6 = 36 of them. Put them in a grid (the diagram) and count: P(7) = {{6/36 = 1/6}}, while P(12) = {{1/36}}. The formula 'favourable ÷ total' only works once you have listed **equally likely** outcomes.",
      },
      body:
        "**Theoretical probability.** When all outcomes are equally likely,\n\n    P(event) = (number of favourable outcomes) ÷ (total number of outcomes)\n\nProbabilities run from 0 (impossible) to 1 (certain) and can be written as fractions, decimals or percentages — never as '1 in 6' or '1 : 6' in an exam answer.\n\n**Sample space diagrams.** When two things happen (two dice, a coin and a spinner, two spinners), list every combination in a **grid**. Each cell is one equally likely outcome. Fill each cell with whatever the question cares about — the total, the product, the difference — then count the cells you want.\n\n**The probabilities of all the outcomes add to 1.** So\n\n    P(not A) = 1 − P(A)\n\nand a missing value in a probability table is 1 minus the others. If the table has an unknown like x and 2x, write the sum equal to 1 and solve.\n\n| Colour | Red | Blue | Green | Yellow |\n|---|---|---|---|---|\n| Probability | 0.3 | 0.25 | x | 2x |\n\nHere 0.3 + 0.25 + 3x = 1, so 3x = 0.45 and x = 0.15.\n\n**Relative frequency (experimental probability).** When outcomes are not equally likely — a biased dice, a drawing pin, whether a bus is late — estimate the probability from what happened before:\n\n    relative frequency = (number of times the event happened) ÷ (number of trials)\n\nThe **more trials**, the more reliable the estimate. If several people do the experiment, **combine** all their results into one big estimate rather than picking one. If the relative frequency of a 6 after 600 rolls is 0.25 instead of about {{1/6}}, that is good evidence the dice is **biased**; after only 12 rolls it proves very little.\n\n**Expected frequency.** If you repeat an experiment n times, you *expect* the event about\n\n    expected frequency = n × P(event)\n\ntimes. It is a long-run average, not a promise — and it need not be a whole number (expected heads in 25 flips = 12.5).",
      diagram: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Sample space diagram for the total of a red dice and a blue dice: a 6 by 6 grid of 36 equally likely totals. The six cells with total 7 lie on a diagonal and are shaded yellow; the five cells with total 8 are shaded green."><rect width="460" height="300" fill="#ffffff"/><text x="212" y="22" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">Red dice</text><text x="40" y="164" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1f2937" text-anchor="middle">Blue</text><text x="40" y="180" font-family="sans-serif" font-size="13" font-weight="bold" fill="#1f2937" text-anchor="middle">dice</text><text x="127" y="48" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">1</text><text x="96" y="79" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">1</text><text x="161" y="48" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">2</text><text x="96" y="113" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">2</text><text x="195" y="48" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">3</text><text x="96" y="147" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">3</text><text x="229" y="48" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">4</text><text x="96" y="181" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">4</text><text x="263" y="48" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">5</text><text x="96" y="215" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">5</text><text x="297" y="48" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">6</text><text x="96" y="249" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">6</text><rect x="110" y="58" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="127" y="79" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">2</text><rect x="144" y="58" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="161" y="79" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">3</text><rect x="178" y="58" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="195" y="79" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">4</text><rect x="212" y="58" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="229" y="79" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">5</text><rect x="246" y="58" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="263" y="79" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">6</text><rect x="280" y="58" width="34" height="34" fill="#fde68a" stroke="#334155" stroke-width="1"/><text x="297" y="79" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">7</text><rect x="110" y="92" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="127" y="113" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">3</text><rect x="144" y="92" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="161" y="113" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">4</text><rect x="178" y="92" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="195" y="113" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">5</text><rect x="212" y="92" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="229" y="113" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">6</text><rect x="246" y="92" width="34" height="34" fill="#fde68a" stroke="#334155" stroke-width="1"/><text x="263" y="113" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">7</text><rect x="280" y="92" width="34" height="34" fill="#bbf7d0" stroke="#334155" stroke-width="1"/><text x="297" y="113" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">8</text><rect x="110" y="126" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="127" y="147" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">4</text><rect x="144" y="126" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="161" y="147" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">5</text><rect x="178" y="126" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="195" y="147" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">6</text><rect x="212" y="126" width="34" height="34" fill="#fde68a" stroke="#334155" stroke-width="1"/><text x="229" y="147" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">7</text><rect x="246" y="126" width="34" height="34" fill="#bbf7d0" stroke="#334155" stroke-width="1"/><text x="263" y="147" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">8</text><rect x="280" y="126" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="297" y="147" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">9</text><rect x="110" y="160" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="127" y="181" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">5</text><rect x="144" y="160" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="161" y="181" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">6</text><rect x="178" y="160" width="34" height="34" fill="#fde68a" stroke="#334155" stroke-width="1"/><text x="195" y="181" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">7</text><rect x="212" y="160" width="34" height="34" fill="#bbf7d0" stroke="#334155" stroke-width="1"/><text x="229" y="181" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">8</text><rect x="246" y="160" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="263" y="181" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">9</text><rect x="280" y="160" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="297" y="181" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">10</text><rect x="110" y="194" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="127" y="215" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">6</text><rect x="144" y="194" width="34" height="34" fill="#fde68a" stroke="#334155" stroke-width="1"/><text x="161" y="215" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">7</text><rect x="178" y="194" width="34" height="34" fill="#bbf7d0" stroke="#334155" stroke-width="1"/><text x="195" y="215" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">8</text><rect x="212" y="194" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="229" y="215" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">9</text><rect x="246" y="194" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="263" y="215" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">10</text><rect x="280" y="194" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="297" y="215" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">11</text><rect x="110" y="228" width="34" height="34" fill="#fde68a" stroke="#334155" stroke-width="1"/><text x="127" y="249" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">7</text><rect x="144" y="228" width="34" height="34" fill="#bbf7d0" stroke="#334155" stroke-width="1"/><text x="161" y="249" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">8</text><rect x="178" y="228" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="195" y="249" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">9</text><rect x="212" y="228" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="229" y="249" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">10</text><rect x="246" y="228" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="263" y="249" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">11</text><rect x="280" y="228" width="34" height="34" fill="#ffffff" stroke="#334155" stroke-width="1"/><text x="297" y="249" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">12</text><rect x="334" y="80" width="16" height="16" fill="#fde68a" stroke="#334155"/><text x="358" y="93" font-family="sans-serif" font-size="12" fill="#1f2937">total 7: 6 cells</text><text x="358" y="111" font-family="sans-serif" font-size="12" fill="#1f2937">P(7) = 6/36 = 1/6</text><rect x="334" y="140" width="16" height="16" fill="#bbf7d0" stroke="#334155"/><text x="358" y="153" font-family="sans-serif" font-size="12" fill="#1f2937">total 8: 5 cells</text><text x="358" y="171" font-family="sans-serif" font-size="12" fill="#1f2937">P(8) = 5/36</text><text x="334" y="215" font-family="sans-serif" font-size="12" fill="#334155">36 equally likely</text><text x="334" y="231" font-family="sans-serif" font-size="12" fill="#334155">outcomes in total</text></svg>`,
      diagramCaption:
        "All 36 equally likely outcomes for two dice, with the total in each cell. A total of 7 fills a whole diagonal (6 cells), so it is the most likely total; 8 has 5 cells; 2 and 12 have just one each.",
      workedExamples: [
        {
          title: "A missing probability, then expected frequency",
          problem:
            "A biased spinner can land on red, blue, green or yellow. The table shows some of the probabilities.\n\n| Colour | Red | Blue | Green | Yellow |\n|---|---|---|---|---|\n| Probability | 0.3 | 0.25 | x | 2x |\n\nThe probability of yellow is twice the probability of green. Hana spins the spinner 200 times. Work out an estimate for the number of times it lands on green.",
          steps: [
            "The probabilities add to 1: 0.3 + 0.25 + x + 2x = 1.",
            "So 3x = 1 − 0.55 = 0.45, giving x = 0.15. P(green) = 0.15 (and P(yellow) = 0.3).",
            "Expected frequency = n × p = 200 × 0.15 = 30.",
            "Check: 0.3 + 0.25 + 0.15 + 0.3 = 1 ✓.",
          ],
          answer: "About 30 times",
          yourTurn: {
            question:
              "Your turn: a biased six-sided dice has P(1) = 0.1, P(2) = 0.15, P(4) = 0.2 and P(6) = 0.25. A 3 and a 5 are equally likely. Mei rolls the dice 300 times. Work out an estimate for the number of times she rolls a 5.",
            answer: { type: "number", value: 45 },
            solution:
              "The known probabilities add to 0.7, so P(3) + P(5) = 0.3 and each is 0.15. Expected number of 5s = 300 × 0.15 = **45**.",
          },
        },
        {
          title: "Relative frequency — which estimate is best?",
          problem:
            "Mei drops a drawing pin 80 times and it lands point-up 28 times. Kenji drops the same pin 200 times and it lands point-up 64 times.\n\n(a) Work out each person's estimate of P(point-up).\n(b) Whose estimate is more reliable? Can you do better?\n(c) Estimate how many times the pin lands point-up in 500 drops.",
          steps: [
            "(a) Mei: {{28/80 = 0.35}}. Kenji: {{64/200 = 0.32}}.",
            "(b) Kenji's is more reliable — 200 trials beats 80. Better still, **combine** the results: {{(28 + 64)/(80 + 200) = 92/280}} ≈ 0.329.",
            "(c) Expected frequency ≈ 500 × 0.329 ≈ 164. (Using Kenji's 0.32 gives 160 — also accepted, but the combined estimate uses all 280 trials.)",
          ],
          answer: "(a) 0.35 and 0.32 (b) Kenji's; combined ≈ 0.329 is best (c) about 164",
          yourTurn: {
            question:
              "Your turn: a spinner lands on 4 in 39 out of 150 spins. Use this to estimate the number of times it will land on 4 in 400 spins.",
            answer: { type: "number", value: 104 },
            solution: "Relative frequency = {{39/150 = 0.26}}. Expected number ≈ 400 × 0.26 = **104**.",
          },
        },
      ],
      keyPoints: [
        "P = favourable ÷ total — only when the outcomes are **equally likely**.",
        "For two events, draw a sample space grid: each cell is one equally likely outcome.",
        "All the probabilities add to 1, so P(not A) = 1 − P(A).",
        "Relative frequency = successes ÷ trials; more trials (or combined results) give a better estimate.",
        "Expected frequency = n × p — an average, not a guarantee, and not necessarily a whole number.",
        "Write probabilities as fractions, decimals or percentages, never as ratios or '1 in 6'.",
      ],
      whyItWorks:
        "Why does 'favourable ÷ total' work? If there are 36 equally likely outcomes, each must have the same share of the total probability 1, so each is worth {{1/36}}. An event made of 6 outcomes is worth 6 × {{1/36}} = {{6/36}}. That is the whole formula — and it shows exactly why it fails when outcomes aren't equally likely (the 11 totals don't each get {{1/11}}).\n\nExpected frequency is the same idea backwards: if a fraction p of all trials are successes in the long run, then n trials contain about n × p successes. The **law of large numbers** says the relative frequency settles down towards the true probability as the number of trials grows — which is why 200 drops beat 80, and 280 beat both.",
      strategies: ["Draw a diagram", "Make a systematic list", "Use the complement", "Check by substituting"],
      thinkDeeper:
        "Two fair dice are rolled and the scores are **multiplied**. Which product is most likely? Is P(product is even) bigger or smaller than {{1/2}} — and can you explain why without drawing the full grid? (Hint: when is a product odd?)",
    },

    // ------------------------------------------------------------------ 2
    {
      id: "or-and-rules",
      heading: "The OR and AND rules",
      discovery: {
        problem:
          "A gambler in 17th-century Paris reasoned: 'The chance of a six in one roll is {{1/6}}. So in four rolls the chance of at least one six is {{1/6 + 1/6 + 1/6 + 1/6 = 4/6}}.'\n\nUse his reasoning for **six** rolls. And for seven. What goes wrong? What is the real probability of at least one six in four rolls?",
        idea:
          "By his logic, six rolls give {{6/6 = 1}} — a certain six — and seven rolls give more than 1, which is impossible. He added probabilities of events that can **happen together** (a six on roll 1 *and* a six on roll 2), so he counted those outcomes more than once.\n\nFlip it round. 'At least one six' fails only if there are **no** sixes: {{5/6 * 5/6 * 5/6 * 5/6 = (5/6)^4 = 625/1296}}. So\n\n    P(at least one six) = {{1 - (5/6)^4 = 671/1296}} ≈ 0.518\n\n— just over a half, which is why the bet won money (slowly). The trick is to use the right rule: multiply for AND, and use 1 − P(none) for 'at least one'.",
      },
      body:
        "**Mutually exclusive events** cannot happen at the same time (rolling a 2 and rolling a 5 on one dice; a student being in Year 10 and Year 11). For these,\n\n    P(A or B) = P(A) + P(B)\n\nIf events *can* overlap, adding counts the overlap twice, so subtract it once:\n\n    P(A or B) = P(A) + P(B) − P(A and B)\n\n(This is the Venn diagram rule — see Sets & Venn diagrams.)\n\n**Independent events** do not affect each other (two separate dice; a coin and a spinner; whether it rains in Singapore and whether a train is late in London). For these,\n\n    P(A and B) = P(A) × P(B)\n\nThis extends to three or more: P(A and B and C) = P(A) × P(B) × P(C).\n\n**At least one.** 'At least one' covers many cases (exactly 1, exactly 2, …). Its opposite is a single case — **none** — so\n\n    P(at least one) = 1 − P(none)\n\n**Testing independence.** Two events are independent exactly when P(A and B) = P(A) × P(B). Work out both sides with the numbers you are given and compare.\n\n> **Mutually exclusive is NOT the same as independent.** If A and B are mutually exclusive (and both possible), knowing A happened tells you B *definitely didn't* — that is the opposite of independent. Mutually exclusive → **add**. Independent → **multiply**.\n\n| Words in the question | Rule |\n|---|---|\n| 'A or B' (can't both happen) | add |\n| 'A and B' (independent) | multiply |\n| 'at least one' | 1 − P(none) |\n| 'neither' / 'not' | 1 − P(…) |",
      diagram: `<svg viewBox="0 0 480 256" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two pictures. Left: a rectangle for all outcomes containing two separate circles A with probability 0.35 and B with probability 0.25, which do not overlap, so P(A or B) = 0.35 + 0.25 = 0.6. Right: a unit square split by a vertical line at 0.6 for A and a horizontal line at 0.3 for B; the overlapping rectangle has area 0.6 times 0.3 = 0.18, which is P(A and B) for independent events."><rect width="480" height="256" fill="#ffffff"/><rect x="15" y="30" width="205" height="160" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="72" cy="110" r="42" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><circle cx="162" cy="110" r="38" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="72" y="106" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">A</text><text x="72" y="124" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">0.35</text><text x="162" y="106" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">B</text><text x="162" y="124" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">0.25</text><text x="117" y="20" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">Mutually exclusive: no overlap</text><text x="117" y="222" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">P(A or B) = 0.35 + 0.25 = 0.6</text><text x="117" y="242" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">OR → add</text><rect x="312" y="30" width="150" height="150" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><rect x="312" y="30" width="90" height="150" fill="#c7d2fe" fill-opacity="0.8"/><rect x="312" y="30" width="150" height="45" fill="#fde68a" fill-opacity="0.8"/><rect x="312" y="30" width="90" height="45" fill="#bbf7d0" stroke="#1f2937" stroke-width="1.5"/><rect x="312" y="30" width="150" height="150" fill="none" stroke="#334155" stroke-width="1.5"/><text x="357" y="56.5" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">0.18</text><text x="357" y="127.5" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">A only</text><text x="432" y="56.5" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">B only</text><line x1="312" y1="188" x2="402" y2="188" stroke="#4338ca" stroke-width="1.5"/><text x="357" y="202" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">P(A) = 0.6</text><line x1="304" y1="30" x2="304" y2="75" stroke="#a16207" stroke-width="1.5"/><text x="298" y="56.5" font-family="sans-serif" font-size="12" fill="#a16207" text-anchor="end">P(B) = 0.3</text><text x="387" y="20" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">Independent: areas multiply</text><text x="387" y="222" font-family="sans-serif" font-size="12" fill="#15803d" text-anchor="middle">P(A and B) = 0.6 × 0.3 = 0.18</text><text x="387" y="242" font-family="sans-serif" font-size="12" fill="#15803d" text-anchor="middle">AND → multiply</text></svg>`,
      diagramCaption:
        "Left: mutually exclusive events don't overlap, so their probabilities simply add. Right: for independent events, picture all outcomes as a 1 × 1 square. A takes a fraction 0.6 of the width and B a fraction 0.3 of the height, so 'A and B' is the overlapping rectangle, area 0.6 × 0.3 = 0.18.",
      workedExamples: [
        {
          title: "AND, and 'at least one'",
          problem:
            "The probability that Siti's MRT train is delayed on any school day is 0.1, independently of other days.\n\n(a) Work out the probability that her train is delayed on both Monday and Tuesday.\n(b) Work out the probability that her train is delayed on at least one of Monday, Tuesday and Wednesday.",
          steps: [
            "(a) Independent, so multiply: 0.1 × 0.1 = **0.01**.",
            "(b) 'At least one' → find P(none) first. P(not delayed) = 1 − 0.1 = 0.9 on each day.",
            "P(not delayed on any of the 3 days) = 0.9 × 0.9 × 0.9 = 0.729.",
            "P(at least one delay) = 1 − 0.729 = **0.271**.",
            "Trap: 0.1 + 0.1 + 0.1 = 0.3 is wrong — it double-counts the weeks with two or three delays (the same mistake as the Paris gambler).",
          ],
          answer: "(a) 0.01 (b) 0.271",
          yourTurn: {
            question:
              "Your turn: a biased coin has P(head) = 0.6. It is thrown three times. Work out the probability of getting at least one tail. Give your answer as a decimal.",
            answer: { type: "number", value: 0.784, allowFraction: false },
            solution: "P(no tails) = P(HHH) = {{0.6^3 = 0.216}}. P(at least one tail) = 1 − 0.216 = **0.784**.",
          },
        },
        {
          title: "Overlapping events and testing independence",
          problem:
            "For two events A and B, P(A) = 0.4, P(B) = 0.5 and P(A or B) = 0.7.\n\n(a) Work out P(A and B).\n(b) Are A and B mutually exclusive? Are they independent? Give reasons.",
          steps: [
            "(a) Use P(A or B) = P(A) + P(B) − P(A and B): 0.7 = 0.4 + 0.5 − P(A and B), so P(A and B) = **0.2**.",
            "(b) Not mutually exclusive: P(A and B) = 0.2 ≠ 0, so they can happen together.",
            "Independent? P(A) × P(B) = 0.4 × 0.5 = 0.2, which equals P(A and B). So **yes**, independent.",
          ],
          answer: "(a) 0.2 (b) not mutually exclusive; independent",
          yourTurn: {
            question:
              "Your turn: A and B are independent with P(A) = 0.3 and P(B) = 0.5. Work out P(A or B).",
            answer: { type: "number", value: 0.65 },
            solution: "P(A and B) = 0.3 × 0.5 = 0.15. P(A or B) = 0.3 + 0.5 − 0.15 = **0.65**.",
          },
        },
      ],
      keyPoints: [
        "Mutually exclusive (can't both happen): P(A or B) = P(A) + P(B).",
        "In general: P(A or B) = P(A) + P(B) − P(A and B).",
        "Independent (no effect on each other): P(A and B) = P(A) × P(B).",
        "'At least one' = 1 − P(none) — almost always the quickest route.",
        "Test independence by checking whether P(A and B) = P(A) × P(B).",
        "Mutually exclusive events (with non-zero probabilities) are never independent.",
      ],
      whyItWorks:
        "**Why add for OR?** If A and B share no outcomes, the outcomes in 'A or B' are just A's outcomes plus B's outcomes, so the counts (and so the probabilities) add. If they overlap, the shared outcomes are counted in both, so you subtract them once.\n\n**Why multiply for AND?** Think of 100 days. On about 60 of them A happens. If B is independent of A, B still happens on 30% of *those* 60 days — that is 0.3 × 60 = 18 days, i.e. 0.18 of all days. 'A fraction of a fraction' is a product: exactly the overlapping rectangle in the area diagram.\n\n**Why 1 − P(none)?** 'At least one' and 'none' are complements: every outcome is in exactly one of them, so their probabilities add to 1.",
      strategies: ["Use the complement", "Draw a diagram", "Split into cases", "Check by substituting"],
      thinkDeeper:
        "How many times must you roll a fair dice so that the probability of at least one six is more than 0.9? Set up the inequality {{1 - (5/6)^n > 0.9}} and find the smallest n by trial. Why can the probability never actually reach 1?",
    },

    // ------------------------------------------------------------------ 3
    {
      id: "tree-diagrams",
      heading: "Tree diagrams",
      discovery: {
        problem:
          "A bag contains 5 red and 3 blue counters. Wei Ling takes a counter at random, does **not** put it back, then takes a second counter.\n\nPriya says P(both the same colour) = {{(5/8)^2 + (3/8)^2 = 34/64}}. What has Priya assumed? Is the true answer bigger or smaller?",
        idea:
          "Priya used {{5/8}} for the second red as well — as if the first counter had been replaced. But after a red is taken, only 4 of the 7 remaining counters are red, so the second probability is {{4/7}}.\n\nA **tree diagram** keeps track of this. Multiply along each path, then add the paths you want:\n\n    P(same) = {{5/8 * 4/7 + 3/8 * 2/7 = 20/56 + 6/56 = 26/56 = 13/28}}\n\n{{13/28}} ≈ 0.464 is **smaller** than {{34/64}} ≈ 0.531: taking a red makes another red less likely, so matching pairs become rarer.",
      },
      body:
        "A **tree diagram** shows a sequence of events. Each set of branches shows the possible outcomes of one stage, labelled with their probabilities.\n\n**The two rules of trees**\n\n1. **Multiply along a path** to get the probability of that whole sequence (AND).\n2. **Add the end results** of all the paths you want (OR — different paths are mutually exclusive).\n\nEach set of branches from one point adds to 1, and all the end results add to 1 — two great checks.\n\n**With replacement**: the probabilities are the same on every stage (independent events).\n\n**Without replacement** (taking sweets, choosing people): after each pick, the total goes down by 1, and the number of the colour you just took goes down by 1. The second-stage probabilities depend on the first branch — these are **dependent** events. Keep the fractions unsimplified (sevenths, then sixths) so it's easy to add at the end.\n\n**Conditional probability.** The probabilities on the second set of branches are **conditional**: 'the probability of red second, *given* red first' — written P(R₂ | R₁) = {{4/7}}. In general\n\n    P(A and B) = P(A) × P(B | A)\n\nwhich is exactly 'multiply along the branch'. Read backwards, it lets you find a probability **given** some information:\n\n    {{P(B|A) = (P(A ∩ B))/(P(A))}}\n\nFor example, given that Wei Ling's two counters are the same colour, the probability they are both red is {{(20/56)/(26/56) = 20/26 = 10/13}}.\n\n**Three stages.** Trees extend to three events (8 paths with two outcomes each). Often you don't need the whole tree: for 'exactly one red light out of three', list the paths with exactly one red (RNN, NRN, NNR), multiply along each and add. For 'at least one', use 1 − P(none).\n\n**Probabilities that change with the first event** also come from contexts, not just bags: 'if it rains, the probability Zara is late is 0.3; if not, it is 0.1' — the second-stage branches differ, so this is a dependent tree too.",
      diagram: `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree diagram for taking two counters without replacement from a bag of 5 red and 3 blue counters. First branches: red 5/8, blue 3/8. After red: red 4/7, blue 3/7. After blue: red 5/7, blue 2/7. Outcomes: red red 20/56, red blue 15/56, blue red 15/56, blue blue 6/56. The two same-colour outcomes are highlighted."><rect width="480" height="270" fill="#ffffff"/><text x="150" y="18" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">1st counter</text><text x="290" y="18" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">2nd counter</text><line x1="30" y1="140" x2="136" y2="75" stroke="#334155" stroke-width="1.5"/><line x1="30" y1="140" x2="136" y2="205" stroke="#334155" stroke-width="1.5"/><text x="150" y="79" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">R</text><text x="150" y="209" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">B</text><text x="76" y="97.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">5/8</text><text x="72" y="194.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">3/8</text><line x1="164" y1="75" x2="276" y2="40" stroke="#334155" stroke-width="1.5"/><text x="290" y="44" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">R</text><text x="220" y="45.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">4/7</text><rect x="306" y="27" width="168" height="20" rx="4" fill="#fde68a"/><text x="312" y="44" font-family="sans-serif" font-size="12" fill="#1f2937">RR: 5/8 × 4/7 = 20/56</text><line x1="164" y1="75" x2="276" y2="110" stroke="#334155" stroke-width="1.5"/><text x="290" y="114" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">B</text><text x="220" y="116.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">3/7</text><text x="312" y="114" font-family="sans-serif" font-size="12" fill="#1f2937">RB: 5/8 × 3/7 = 15/56</text><line x1="164" y1="205" x2="276" y2="170" stroke="#334155" stroke-width="1.5"/><text x="290" y="174" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">R</text><text x="220" y="175.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">5/7</text><text x="312" y="174" font-family="sans-serif" font-size="12" fill="#1f2937">BR: 3/8 × 5/7 = 15/56</text><line x1="164" y1="205" x2="276" y2="240" stroke="#334155" stroke-width="1.5"/><text x="290" y="244" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">B</text><text x="220" y="246.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">2/7</text><rect x="306" y="227" width="168" height="20" rx="4" fill="#fde68a"/><text x="312" y="244" font-family="sans-serif" font-size="12" fill="#1f2937">BB: 3/8 × 2/7 = 6/56</text></svg>`,
      diagramCaption:
        "Two counters taken without replacement from 5 red and 3 blue. The second-stage probabilities are out of 7 and depend on the first counter. The end results add to {{56/56}}; the highlighted paths give P(same colour) = {{26/56 = 13/28}}.",
      workedExamples: [
        {
          title: "Three events: exactly one",
          problem:
            "On his walk to school Kenji passes three sets of traffic lights. At each set, independently, the probability that the light is red is 0.4.\n\nWork out the probability that exactly one of the three lights is red.",
          steps: [
            "Let R = red, N = not red, with P(N) = 1 − 0.4 = 0.6.",
            "Exactly one red happens on three paths: RNN, NRN, NNR.",
            "Each path has probability 0.4 × 0.6 × 0.6 = 0.144 (the order of multiplying doesn't matter).",
            "Add the three paths: 3 × 0.144 = **0.432**.",
            "Check with the rest: P(0 red) = 0.216, P(2 red) = 0.288, P(3 red) = 0.064; 0.216 + 0.432 + 0.288 + 0.064 = 1 ✓.",
          ],
          answer: "0.432",
          yourTurn: {
            question:
              "Your turn: using the same traffic lights (P(red) = 0.4 at each, independently), work out the probability that exactly two of the three lights are red.",
            answer: { type: "number", value: 0.288 },
            solution:
              "Paths RRN, RNR, NRR, each 0.4 × 0.4 × 0.6 = 0.096. Total 3 × 0.096 = **0.288**.",
          },
        },
        {
          title: "Dependent events and 'given that'",
          problem:
            "In the monsoon season the probability that it rains on a school morning is 0.4. If it rains, the probability that Zara is late for school is 0.3. If it does not rain, the probability that she is late is 0.1.\n\n(a) Work out the probability that Zara is late on a randomly chosen morning.\n(b) Zara is late. Work out the probability that it rained that morning.",
          steps: [
            "Draw a tree: first stage Rain (0.4) / No rain (0.6); second stage Late / On time, with late 0.3 and on time 0.7 after rain, and late 0.1 and on time 0.9 after no rain.",
            "P(rain and late) = 0.4 × 0.3 = 0.12. P(no rain and late) = 0.6 × 0.1 = 0.06.",
            "(a) P(late) = 0.12 + 0.06 = **0.18**.",
            "(b) 'Given late' means we only look at the late paths, total 0.18. The rainy one is 0.12 of that.",
            "P(rain | late) = {{0.12/0.18 = 2/3}}.",
            "Sense check: rain makes lateness three times as likely, so knowing she was late should make rain *more* likely than 0.4 — and {{2/3}} is ✓.",
          ],
          answer: "(a) 0.18 (b) {{2/3}}",
          yourTurn: {
            question:
              "Your turn: a box contains 4 green and 6 yellow sweets. Wei Ling takes two sweets at random without replacement. Given that the two sweets are the same colour, find the probability that they are both green. Give your answer as a fraction in its simplest form.",
            answer: { type: "fraction", n: 2, d: 7, simplest: true },
            solution:
              "P(GG) = {{4/10 * 3/9 = 12/90}}, P(YY) = {{6/10 * 5/9 = 30/90}}. P(same) = {{42/90}}. P(GG | same) = {{12/42 = 2/7}}.",
          },
        },
      ],
      keyPoints: [
        "Multiply along the branches; add the end results you want.",
        "Each set of branches adds to 1; all end results add to 1 — use these as checks.",
        "Without replacement: both the total and the count of the colour just taken drop by 1.",
        "Second-stage branch probabilities are conditional: P(B | A).",
        "Given that …: P(B | A) = P(A and B) ÷ P(A) — restrict to the paths where A happened.",
        "For three events, list only the paths you need (e.g. RNN, NRN, NNR) instead of drawing all 8.",
      ],
      whyItWorks:
        "Imagine running the experiment 56 times with 5 red and 3 blue counters. The first counter is red in about {{5/8}} × 56 = 35 of the runs. In those 35 runs the bag then holds 4 red out of 7, so the second is red in about {{4/7}} × 35 = 20 of them. That is {{20/56}} — exactly 'multiply along the branch'.\n\nDifferent paths can't happen in the same run (the first counter can't be both red and blue), so they are mutually exclusive and their probabilities **add**. Conditional probability is the same counting with a smaller total: 'given same colour' keeps only the 26 matching runs, of which 20 are red–red, so the answer is {{20/26}}.",
      strategies: ["Draw a diagram", "Split into cases", "Use the complement", "Check by substituting"],
      thinkDeeper:
        "In the 5 red, 3 blue bag, without replacement, work out P(second counter is red). Compare it with P(first counter is red). Surprised? Explain why the answer had to come out that way, without using the tree.",
    },

    // ------------------------------------------------------------------ 4
    {
      id: "algebraic-probability",
      heading: "Probability with algebra",
      discovery: {
        problem:
          "A bag contains some sweets. 6 of them are orange and the rest are lemon. Hana takes a sweet at random and eats it, then takes another.\n\nThe probability that both sweets are orange is {{15/28}}. How many sweets were in the bag to begin with? Try guessing first — then ask yourself how you would solve it if guessing were hopeless.",
        idea:
          "Call the number of sweets n. The first sweet is orange with probability {{6/n}}; then there are 5 orange out of n − 1, so\n\n    {{6/n * 5/(n-1) = 15/28}}\n\nCross-multiply: 30 × 28 = 15n(n − 1), so n(n − 1) = 56, i.e. {{n^2 - n - 56 = 0}}. This factorises as (n − 8)(n + 7) = 0. A bag can't hold −7 sweets, so **n = 8**.\n\nCheck: {{6/8 * 5/7 = 30/56 = 15/28}} ✓. The probability information was secretly a quadratic equation.",
      },
      body:
        "Grade 8–9 probability questions often hide an **equation**. The routine:\n\n1. **Introduce a variable** for the unknown (the number of sweets n, the number of red counters x).\n2. **Write each probability in terms of it** — draw the tree with algebraic labels (the diagram).\n3. **Form an equation** from the information given ('the probability that both are orange is …').\n4. **Clear the fractions** — cross-multiply or multiply both sides by every denominator.\n5. **Rearrange** to = 0 and solve (usually a quadratic: factorise, or use the formula).\n6. **Interpret**: reject negative or non-integer numbers of objects, and check that your answer gives the stated probability.\n\n**'Show that' questions.** Edexcel often asks you to *show that* n² − n − 90 = 0 before solving. Every step must be visible: the product of branch probabilities, the equation, the cross-multiplying, the expansion, the rearranging. Don't start from the answer.\n\n**Useful expressions**\n\n| Situation | Probability |\n|---|---|\n| first is orange (6 orange out of n) | {{6/n}} |\n| second is orange, given first orange | {{5/(n-1)}} |\n| second is orange, given first lemon | {{6/(n-1)}} |\n| both orange | {{30/(n(n-1))}} |\n| one of each (either order) | {{(2 * 6(n-6))/(n(n-1))}} |\n\n'One of each colour' always has **two** paths (orange then lemon, lemon then orange) — doubling is easy to forget.\n\n**Linear versions.** Simpler questions give one probability: 'there are x red and 5 blue counters; P(red) = {{3/8}}', so {{x/(x + 5) = 3/8}}, giving 8x = 3x + 15 and x = 3. Or a probability table with unknowns (x, 2x, x²) that must add to 1.",
      diagram: `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree diagram for taking two sweets without replacement from a bag of n sweets, 6 of which are orange and the rest lemon. First branches: orange 6 over n, lemon (n minus 6) over n. After orange: orange 5 over (n minus 1), lemon (n minus 6) over (n minus 1). After lemon: orange 6 over (n minus 1), lemon (n minus 7) over (n minus 1). The orange-orange outcome 30 over n(n minus 1) is highlighted."><rect width="480" height="270" fill="#ffffff"/><text x="150" y="18" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">1st sweet</text><text x="290" y="18" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">2nd sweet</text><line x1="30" y1="140" x2="136" y2="75" stroke="#334155" stroke-width="1.5"/><line x1="30" y1="140" x2="136" y2="205" stroke="#334155" stroke-width="1.5"/><text x="150" y="79" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">O</text><text x="150" y="209" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">L</text><text x="76" y="97.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">6/n</text><text x="72" y="194.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">(n − 6)/n</text><line x1="164" y1="75" x2="276" y2="40" stroke="#334155" stroke-width="1.5"/><text x="290" y="44" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">O</text><text x="220" y="45.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">5/(n − 1)</text><rect x="300" y="27" width="174" height="20" rx="4" fill="#fde68a"/><text x="306" y="44" font-family="sans-serif" font-size="12" fill="#1f2937">OO: 30/(n(n − 1))</text><line x1="164" y1="75" x2="276" y2="110" stroke="#334155" stroke-width="1.5"/><text x="290" y="114" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">L</text><text x="220" y="116.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">(n − 6)/(n − 1)</text><text x="306" y="114" font-family="sans-serif" font-size="12" fill="#1f2937">OL: 6(n − 6)/(n(n − 1))</text><line x1="164" y1="205" x2="276" y2="170" stroke="#334155" stroke-width="1.5"/><text x="290" y="174" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">O</text><text x="220" y="175.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">6/(n − 1)</text><text x="306" y="174" font-family="sans-serif" font-size="12" fill="#1f2937">LO: 6(n − 6)/(n(n − 1))</text><line x1="164" y1="205" x2="276" y2="240" stroke="#334155" stroke-width="1.5"/><text x="290" y="244" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold">L</text><text x="220" y="246.5" font-family="sans-serif" font-size="12" fill="#4338ca" text-anchor="middle">(n − 7)/(n − 1)</text><text x="306" y="244" font-family="sans-serif" font-size="12" fill="#1f2937">LL: (n − 6)(n − 7)/(n(n − 1))</text></svg>`,
      diagramCaption:
        "The sweet tree with n sweets, 6 of them orange. Every branch is an algebraic fraction; the highlighted path gives P(both orange) = {{30/(n(n-1))}}, which you set equal to the given probability.",
      workedExamples: [
        {
          title: "Show that, then solve",
          problem:
            "There are n counters in a bag. 3 of the counters are red. Ravi takes two counters at random without replacement. The probability that both counters are red is {{1/15}}.\n\n(a) Show that n² − n − 90 = 0.\n(b) Work out the value of n.",
          steps: [
            "(a) P(first red) = {{3/n}}. After a red is taken, 2 reds remain out of n − 1, so P(second red) = {{2/(n-1)}}.",
            "P(both red) = {{3/n * 2/(n-1) = 6/(n(n-1))}}.",
            "So {{6/(n(n-1)) = 1/15}}.",
            "Cross-multiply: 6 × 15 = n(n − 1), so 90 = n² − n.",
            "Rearrange: **n² − n − 90 = 0** as required.",
            "(b) Factorise: (n − 10)(n + 9) = 0, so n = 10 or n = −9.",
            "n is a number of counters, so it must be positive: **n = 10**. Check: {{3/10 * 2/9 = 6/90 = 1/15}} ✓.",
          ],
          answer: "n = 10",
          yourTurn: {
            question:
              "Your turn: a bag contains n sweets, 4 of which are mint. Two sweets are taken at random without replacement. The probability that both are mint is {{1/11}}. Work out n.",
            answer: { type: "number", value: 12 },
            solution:
              "{{4/n * 3/(n-1) = 12/(n(n-1)) = 1/11}}, so n(n − 1) = 132, n² − n − 132 = 0, (n − 12)(n + 11) = 0, so **n = 12**. Check: {{4/12 * 3/11 = 12/132 = 1/11}} ✓.",
          },
        },
        {
          title: "One of each colour",
          problem:
            "A bag contains x green counters and (x + 4) red counters. Two counters are taken at random without replacement. The probability that the counters are different colours is {{7/15}}. Find x.",
          steps: [
            "Total = 2x + 4. One of each colour has two paths: green then red, red then green.",
            "P(GR) = {{x/(2x+4) * (x+4)/(2x+3)}} and P(RG) is the same, so P(different) = {{(2x(x+4))/((2x+4)(2x+3))}}.",
            "Cancel 2x + 4 = 2(x + 2): P(different) = {{(x(x+4))/((x+2)(2x+3))}}.",
            "Set equal to {{7/15}} and cross-multiply: 15x(x + 4) = 7(x + 2)(2x + 3).",
            "Expand: 15x² + 60x = 7(2x² + 7x + 6) = 14x² + 49x + 42.",
            "Rearrange: x² + 11x − 42 = 0, so (x + 14)(x − 3) = 0.",
            "x can't be negative, so **x = 3** (3 green, 7 red). Check: {{2 * 3/10 * 7/9 = 42/90 = 7/15}} ✓.",
          ],
          answer: "x = 3",
          yourTurn: {
            question:
              "Your turn: a box holds 10 counters; x are red and the rest are white. Two are taken at random without replacement. The probability that they are different colours is {{7/15}}. Find **both** possible values of x.",
            answer: { type: "list", values: [3, 7], ordered: false, display: "x = 3 or x = 7" },
            solution:
              "P(different) = {{2 * x/10 * (10-x)/9 = (2x(10-x))/90 = 7/15}}, so x(10 − x) = 21, x² − 10x + 21 = 0, (x − 3)(x − 7) = 0: **x = 3 or x = 7**. Both work — swapping the colours (3 red, 7 white or 7 red, 3 white) gives the same probability.",
          },
        },
      ],
      keyPoints: [
        "Introduce a variable and write every branch probability in terms of it.",
        "Without replacement, the second denominator is (n − 1).",
        "'One of each' has two paths — remember to double.",
        "Clear fractions by cross-multiplying, then rearrange to a quadratic = 0.",
        "Reject negative or non-integer solutions for numbers of objects; sometimes both roots are valid.",
        "In 'show that', every algebraic step must be shown — never work back from the given equation.",
      ],
      whyItWorks:
        "Nothing new is happening — it is the same tree, with letters instead of numbers. The algebra works because the tree rules (multiply along, add across) are true for **every** value of n, so they produce an equation that only the real value of n satisfies.\n\nWhy is it so often a quadratic? Two picks without replacement multiply two fractions with denominators n and n − 1, so clearing them produces n(n − 1) = n² − n. Three picks would give a cubic — which is why exams stop at two.",
      strategies: ["Introduce a variable", "Draw a diagram", "Check by substituting", "Work backwards"],
      thinkDeeper:
        "A bag has r red and b blue counters. Two are taken without replacement. Show that P(same colour) = P(different colours) exactly when (r − b)² = r + b. Find three different bags that work. What do you notice about the total number of counters?",
    },

    // ------------------------------------------------------------------ 5
    {
      id: "counting",
      heading: "The product rule for counting",
      discovery: {
        problem:
          "Priya has 3 tops and 4 skirts. How many different outfits (one top, one skirt) can she make?\n\nNow a harder one: a phone PIN has 4 digits (0–9). How many PINs are there? How many have **no repeated digit**? What fraction of all PINs contain at least one repeated digit?",
        idea:
          "For each of the 3 tops there are 4 skirts, so 3 × 4 = 12 outfits. That is the **product rule**: when you make one choice and then another, multiply the numbers of options.\n\nPIN: 10 choices for each of 4 digits, 10 × 10 × 10 × 10 = 10 000. With no repeats, each digit has one fewer option than the last: 10 × 9 × 8 × 7 = 5040. So 10 000 − 5040 = 4960 PINs have a repeated digit — almost half ({{4960/10000 = 0.496}}). Counting the opposite was much easier than counting the repeats directly.",
      },
      body:
        "**The product rule.** If one choice can be made in m ways and, for each of these, a second choice can be made in n ways, the two choices together can be made in m × n ways. This extends to any number of stages.\n\n**Slot method.** Draw one box per position, write the number of options in each box, multiply.\n\n- **Repetition allowed**: the same number of options every time — a 4-digit PIN has 10⁴ = 10 000 options; a code of 3 letters (26 options each) has 26³ = 17 576.\n- **No repetition**: each box has one fewer option — 10 × 9 × 8 × 7.\n\n**Arrangements.** n different objects can be arranged in a row in n × (n − 1) × … × 2 × 1 ways, written **n!** ('n factorial'). For example, the letters of MATHS can be arranged in 5! = 5 × 4 × 3 × 2 × 1 = 120 ways.\n\n**Restrictions — fill the fussy boxes first.** If a position has a condition (the number must be odd, the code can't start with 0, Aisha must sit at the end), fill **that** box first, then the others with whatever is left. In the diagram, an odd 3-digit number with all digits different: units first (5 odd digits), then hundreds (not 0 and not the units digit: 8), then tens (any of the 8 remaining): 8 × 8 × 5 = 320.\n\n**When a restriction affects another box, split into cases.** For **even** 3-digit numbers with different digits, whether the units digit is 0 changes the options for the hundreds digit — so count 'units = 0' and 'units = 2, 4, 6 or 8' separately and add.\n\n**Count the complement.** 'At least one repeat', 'not next to each other' — count everything, then subtract the ones you don't want.\n\n**Link to probability.** With equally likely outcomes, P = (number of favourable arrangements) ÷ (total number of arrangements). If the letters of MATHS are arranged at random, P(A is not at either end) = {{72/120 = 3/5}}.",
      diagram: `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three slot diagrams for the product rule. A 4-digit PIN with repeats allowed: 10 times 10 times 10 times 10 = 10000. A 4-digit PIN with no repeated digit: 10 times 9 times 8 times 7 = 5040. An odd 3-digit number with all digits different, filling the units slot first with 5 choices, then the hundreds slot with 8, then the tens slot with 8: 8 times 8 times 5 = 320."><rect width="480" height="270" fill="#ffffff"/><text x="20" y="18" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">4-digit PIN, repeats allowed</text><rect x="50" y="30" width="40" height="34" rx="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="70" y="52" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">10</text><text x="113" y="52" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">×</text><rect x="136" y="30" width="40" height="34" rx="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="156" y="52" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">10</text><text x="199" y="52" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">×</text><rect x="222" y="30" width="40" height="34" rx="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="242" y="52" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">10</text><text x="285" y="52" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">×</text><rect x="308" y="30" width="40" height="34" rx="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="328" y="52" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">10</text><text x="364" y="52" font-family="sans-serif" font-size="14" fill="#1f2937">= 10 000</text><text x="20" y="96" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">4-digit PIN, no repeated digit</text><rect x="50" y="108" width="40" height="34" rx="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="70" y="130" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">10</text><text x="113" y="130" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">×</text><rect x="136" y="108" width="40" height="34" rx="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="156" y="130" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">9</text><text x="199" y="130" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">×</text><rect x="222" y="108" width="40" height="34" rx="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="242" y="130" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">8</text><text x="285" y="130" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">×</text><rect x="308" y="108" width="40" height="34" rx="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="328" y="130" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">7</text><text x="364" y="130" font-family="sans-serif" font-size="14" fill="#1f2937">= 5040</text><text x="20" y="174" font-family="sans-serif" font-size="12" font-weight="bold" fill="#1f2937">Odd 3-digit number, all digits different (H T U)</text><rect x="50" y="186" width="40" height="34" rx="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="70" y="208" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">8</text><text x="113" y="208" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">×</text><text x="70" y="236" font-family="sans-serif" font-size="11" fill="#b91c1c" text-anchor="middle">2nd: not 0, not U</text><rect x="136" y="186" width="40" height="34" rx="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="156" y="208" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">8</text><text x="199" y="208" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">×</text><text x="156" y="236" font-family="sans-serif" font-size="11" fill="#b91c1c" text-anchor="middle">3rd: 10 − 2</text><rect x="222" y="186" width="40" height="34" rx="4" fill="#c7d2fe" stroke="#1f2937" stroke-width="1.5"/><text x="242" y="208" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle" font-weight="bold">5</text><text x="242" y="236" font-family="sans-serif" font-size="11" fill="#b91c1c" text-anchor="middle">1st: 1,3,5,7,9</text><text x="278" y="208" font-family="sans-serif" font-size="14" fill="#1f2937">= 320</text></svg>`,
      diagramCaption:
        "The slot method: one box per position, the number of choices in each box, then multiply. For the odd number the units box is filled first (red labels show the order), because it is the box with a restriction.",
      workedExamples: [
        {
          title: "Restrictions: fill the fussy box first",
          problem:
            "How many odd numbers between 100 and 999 have three different digits?",
          steps: [
            "Three boxes: hundreds, tens, units (H T U).",
            "Units first (the restricted box): it must be odd — 1, 3, 5, 7 or 9 — **5** choices.",
            "Hundreds next (also restricted): it can't be 0 and can't equal the units digit — 10 − 2 = **8** choices.",
            "Tens last: any digit except the two already used — **8** choices (0 is allowed here).",
            "Total = 8 × 8 × 5 = **320**.",
            "Common slip: starting with the hundreds box (9 choices) — then you can't tell how many odd digits are left for the units, because it depends on whether the hundreds digit was odd.",
          ],
          answer: "320",
          yourTurn: {
            question:
              "Your turn: a car number plate is made of 2 letters (A–Z) followed by 3 digits (0–9). Letters and digits may repeat. How many different plates are possible?",
            answer: { type: "number", value: 676000 },
            solution: "26 × 26 × 10 × 10 × 10 = 676 × 1000 = **676 000**.",
          },
        },
        {
          title: "Arrangements and a probability",
          problem:
            "The five letters of the word MATHS are arranged in a row.\n\n(a) How many arrangements are there?\n(b) How many arrangements do **not** have A at either end?\n(c) An arrangement is chosen at random. What is the probability that A is not at either end?",
          steps: [
            "(a) 5 choices for the first letter, 4 for the second, … : 5! = 5 × 4 × 3 × 2 × 1 = **120**.",
            "(b) Fussy letter first: A can go in one of the 3 middle positions — 3 ways.",
            "The other 4 letters fill the remaining 4 positions in 4! = 24 ways.",
            "Total = 3 × 24 = **72**.",
            "(c) P = {{72/120 = 3/5}}.",
            "Check by complement: A at an end — 2 positions × 24 = 48; 120 − 48 = 72 ✓.",
          ],
          answer: "(a) 120 (b) 72 (c) {{3/5}}",
          yourTurn: {
            question:
              "Your turn: six friends sit in a row of six seats for a photo. Aisha and Ben must sit at the two ends. In how many ways can the six friends be seated?",
            answer: { type: "number", value: 48 },
            solution:
              "Aisha and Ben at the ends: 2 ways (Aisha left or Ben left). The other 4 fill the middle 4 seats: 4! = 24 ways. Total 2 × 24 = **48**.",
          },
        },
      ],
      keyPoints: [
        "Product rule: successive choices multiply.",
        "With repetition: n options each time → n^k. Without repetition: n × (n − 1) × (n − 2) × …",
        "n objects in a row: n! arrangements.",
        "Fill restricted positions first; if one restriction affects another, split into cases and add.",
        "'At least one …' or 'not …': count everything and subtract.",
        "Probability = favourable arrangements ÷ total arrangements.",
      ],
      whyItWorks:
        "Picture the choices as a tree: 3 tops, and from each top 4 skirt branches. The number of end points is 3 lots of 4 = 12. Every extra stage multiplies the number of end points again — so the product rule is just counting the leaves of a (very large) tree without drawing it.\n\nThe restriction rule works because the product rule needs the number of options at each stage to be **the same whichever branch you are on**. Fill the units box first and there are always 8 hundreds options, however the units box was filled. Fill the hundreds box first and the number of odd units options left depends on whether the hundreds digit was odd — the product rule breaks, which is why you'd have to split into cases.",
      strategies: ["Draw a diagram", "Split into cases", "Use the complement", "Make it simpler"],
      thinkDeeper:
        "How many **even** numbers between 100 and 999 have three different digits? (Split into the cases 'units digit 0' and 'units digit 2, 4, 6 or 8'.) Then check your answer: the odd ones were 320, and the total with different digits is 9 × 9 × 8 = 648.",
    },

    // ------------------------------------------------------------------ 6
    {
      id: "binomial-expansion",
      heading: "Binomial expansion",
      discovery: {
        problem:
          "Expand (a + b)², then (a + b)³ = (a + b)(a + b)², then (a + b)⁴. Write down just the **coefficients** of each answer in a row.\n\nDo you recognise the pattern? Use it to predict the coefficients of (a + b)⁵ without expanding.",
        idea:
          "The coefficients are 1 2 1; 1 3 3 1; 1 4 6 4 1 — rows of **Pascal's triangle**, where each number is the sum of the two above it. So (a + b)⁵ has coefficients 1 5 10 10 5 1.\n\nWhy? Expanding (a + b)⁴ = (a + b)(a + b)(a + b)(a + b) means choosing **a or b from each bracket** and multiplying. The a²b² term comes from every way of picking b from exactly 2 of the 4 brackets — and there are 6 such ways. The coefficients are **counting** numbers: the product rule meets algebra.",
      },
      body:
        "**Pascal's triangle.** Start with 1. Each row begins and ends with 1, and every other number is the sum of the two numbers above it. Row n (counting the top as row 0) gives the coefficients of (a + b)ⁿ.\n\n| n | coefficients |\n|---|---|\n| 2 | 1 2 1 |\n| 3 | 1 3 3 1 |\n| 4 | 1 4 6 4 1 |\n| 5 | 1 5 10 10 5 1 |\n| 6 | 1 6 15 20 15 6 1 |\n\n**The pattern of powers.** In (a + b)ⁿ, the power of a goes **down** from n to 0 while the power of b goes **up** from 0 to n; in every term the powers add to n.\n\n    (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴\n\n**Choose numbers.** The coefficient of {{a^(n-r) b^r}} is the number of ways of choosing r brackets out of n, written ⁿCᵣ (the r-th entry of row n, starting from r = 0):\n\n    ⁿCᵣ = {{(n!)/(r!(n-r)!)}}\n\nFor example ⁵C₂ = {{(5 * 4)/(2 * 1) = 10}}. Calculators have an nCr button.\n\n**Expanding something like (2 + x)⁴ or (3x − 2)⁵.** Replace a and b by the **whole** terms, **in brackets**, signs included:\n\n- a = 2, b = x: (2 + x)⁴ = 1(2)⁴ + 4(2)³(x) + 6(2)²(x)² + 4(2)(x)³ + 1(x)⁴.\n- a = 3x, b = −2: powers of (3x) include the 3, and odd powers of (−2) are negative, so the signs **alternate**.\n\n**Finding one term or coefficient.** You don't need the whole expansion. For the x³ term in (3x − 2)⁵, you need (3x)³, so (−2) appears 5 − 3 = 2 times: the term is ⁵C₂ × (3x)³ × (−2)².\n\n**Link to probability.** Toss a coin 4 times. Expanding (H + T)⁴ = H⁴ + 4H³T + 6H²T² + 4HT³ + T⁴ lists the outcomes by type: 6 of the 16 equally likely sequences have exactly two heads, so P(2 heads) = {{6/16 = 3/8}}. The same counting explains Kenji's traffic lights: 3 paths with exactly one red, because ³C₁ = 3.",
      diagram: `<svg viewBox="0 0 460 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Pascal's triangle, rows 0 to 5: 1; 1 1; 1 2 1; 1 3 3 1; 1 4 6 4 1; 1 5 10 10 5 1. Each number is the sum of the two above it, for example 3 + 3 = 6. Row 4 is highlighted and gives the coefficients of (a + b) to the power 4."><rect width="460" height="270" fill="#ffffff"/><text x="200" y="34" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">1</text><text x="350" y="34" font-family="sans-serif" font-size="12" fill="#334155">n = 0</text><text x="177" y="72" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">1</text><text x="223" y="72" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">1</text><text x="350" y="72" font-family="sans-serif" font-size="12" fill="#334155">n = 1</text><text x="154" y="110" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">1</text><text x="200" y="110" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">2</text><text x="246" y="110" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">1</text><text x="350" y="110" font-family="sans-serif" font-size="12" fill="#334155">n = 2</text><text x="131" y="148" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">1</text><circle cx="177" cy="144" r="13" fill="#bae6fd" stroke="#1f2937" stroke-width="1"/><text x="177" y="148" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">3</text><circle cx="223" cy="144" r="13" fill="#bae6fd" stroke="#1f2937" stroke-width="1"/><text x="223" y="148" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">3</text><text x="269" y="148" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">1</text><text x="350" y="148" font-family="sans-serif" font-size="12" fill="#334155">n = 3</text><rect x="85" y="170" width="230" height="24" rx="6" fill="#fde68a"/><text x="108" y="186" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">1</text><text x="154" y="186" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">4</text><circle cx="200" cy="182" r="13" fill="#bbf7d0" stroke="#1f2937" stroke-width="1"/><text x="200" y="186" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">6</text><text x="246" y="186" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">4</text><text x="292" y="186" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">1</text><text x="350" y="186" font-family="sans-serif" font-size="12" fill="#334155">n = 4</text><text x="85" y="224" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">1</text><text x="131" y="224" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">5</text><text x="177" y="224" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">10</text><text x="223" y="224" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">10</text><text x="269" y="224" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">5</text><text x="315" y="224" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">1</text><text x="350" y="224" font-family="sans-serif" font-size="12" fill="#334155">n = 5</text><line x1="183" y1="154" x2="194" y2="170" stroke="#b91c1c" stroke-width="1.5"/><line x1="217" y1="154" x2="206" y2="170" stroke="#b91c1c" stroke-width="1.5"/><text x="200" y="258" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">(a + b)⁴ = 1a⁴ + 4a³b + 6a²b² + 4ab³ + 1b⁴</text><text x="12" y="165" font-family="sans-serif" font-size="12" fill="#b91c1c">3 + 3 = 6</text></svg>`,
      diagramCaption:
        "Pascal's triangle: each entry is the sum of the two above it (3 + 3 = 6). Row n gives the coefficients of (a + b)ⁿ; row 4 is highlighted.",
      workedExamples: [
        {
          title: "Expanding with a number term",
          problem: "Expand (2 + x)⁴ fully, simplifying each term.",
          steps: [
            "Row 4 of Pascal's triangle: 1 4 6 4 1. Here a = 2 and b = x.",
            "Powers of 2 go down (16, 8, 4, 2, 1); powers of x go up.",
            "1 × 2⁴ = 16",
            "4 × 2³ × x = 4 × 8 × x = 32x",
            "6 × 2² × x² = 6 × 4 × x² = 24x²",
            "4 × 2 × x³ = 8x³, and 1 × x⁴ = x⁴.",
            "(2 + x)⁴ = **16 + 32x + 24x² + 8x³ + x⁴**.",
            "Check: put x = 1. Left side 3⁴ = 81; right side 16 + 32 + 24 + 8 + 1 = 81 ✓.",
          ],
          answer: "16 + 32x + 24x² + 8x³ + x⁴",
          yourTurn: {
            question: "Your turn: expand (1 + 2x)³ fully.",
            answer: { type: "expression", expr: "1+6x+12x^2+8x^3", form: "expanded" },
            solution:
              "Row 3: 1 3 3 1 with a = 1, b = 2x. 1 + 3(2x) + 3(2x)² + (2x)³ = **1 + 6x + 12x² + 8x³**. (Check x = 1: 3³ = 27 = 1 + 6 + 12 + 8 ✓.)",
          },
        },
        {
          title: "One coefficient, with a negative",
          problem: "Find the coefficient of x³ in the expansion of (3x − 2)⁵.",
          steps: [
            "Write a = 3x and b = −2, n = 5.",
            "For x³ you need (3x)³, so (−2) is used 5 − 3 = 2 times.",
            "Number of ways to choose those 2 brackets: ⁵C₂ = 10 (row 5: 1 5 10 10 5 1).",
            "Term = 10 × (3x)³ × (−2)² = 10 × 27x³ × 4 = 1080x³.",
            "Coefficient = **1080**. (Positive, because (−2) is raised to an even power.)",
            "Common slip: writing 3x³ instead of (3x)³ = 27x³ — always keep the brackets.",
          ],
          answer: "1080",
          yourTurn: {
            question: "Your turn: find the coefficient of x² in the expansion of (2x − 1)⁵.",
            answer: { type: "number", value: -40 },
            solution:
              "Need (2x)², so (−1) appears 3 times. ⁵C₂ = 10. Term = 10 × (2x)² × (−1)³ = 10 × 4x² × (−1) = −40x². Coefficient **−40**.",
          },
        },
      ],
      keyPoints: [
        "Row n of Pascal's triangle gives the coefficients of (a + b)ⁿ (top row is row 0).",
        "Powers of the first term go down, powers of the second go up; each term's powers add to n.",
        "ⁿCᵣ = number of ways to choose r of the n brackets = {{(n!)/(r!(n-r)!)}}.",
        "Substitute whole terms in brackets: (3x)³ = 27x³, (−2)² = 4.",
        "A negative second term makes the signs alternate.",
        "Check an expansion by substituting x = 1 (or any easy value) into both sides.",
      ],
      whyItWorks:
        "Each new row of Pascal's triangle comes from multiplying the previous expansion by one more (a + b). For example\n\n    (a + b)⁴ = (a + b)(a³ + 3a²b + 3ab² + b³)\n\nThe a²b² term collects 'a × 3ab²' and 'b × 3a²b', giving 3 + 3 = 6 — exactly the 'sum of the two above' rule.\n\nThe counting view says the same thing: to get a²b² from four brackets you choose which 2 brackets supply a b. Either the last bracket supplies b (then choose 1 more from the first 3: 3 ways) or it supplies a (choose 2 from the first 3: 3 ways). 3 + 3 = 6 again.",
      strategies: ["Find a pattern", "Check by substituting", "Make it simpler", "Try small cases"],
      thinkDeeper:
        "Work out 11², 11³ and 11⁴ and compare them with Pascal's triangle. Why does this happen — think of 11 as (10 + 1)? Why does the pattern seem to break at 11⁵ = 161 051, and how can you rescue it? Then add up each row of the triangle: why is the total always a power of 2?",
    },
  ],
  learn: {
    flashcards: [
      { front: "When can you use P = favourable ÷ total?", back: "Only when all the outcomes are **equally likely** (e.g. the 36 pairs for two dice — not the 11 totals)." },
      { front: "P(not A) = ?", back: "1 − P(A). All the probabilities of the outcomes add to 1." },
      { front: "Relative frequency", back: "Number of times the event happened ÷ number of trials. More trials → more reliable estimate." },
      { front: "Expected frequency", back: "n × P(event). E.g. 200 spins with P(green) = 0.15 → expect 30 greens." },
      { front: "Mutually exclusive events", back: "Can't happen at the same time. P(A or B) = P(A) + P(B)." },
      { front: "Independent events", back: "One doesn't affect the other. P(A and B) = P(A) × P(B)." },
      { front: "P(A or B) when A and B can overlap", back: "P(A) + P(B) − P(A and B)." },
      { front: "P(at least one …)", back: "1 − P(none). E.g. at least one six in 4 rolls = {{1 - (5/6)^4}} ≈ 0.518." },
      { front: "The two rules of tree diagrams", back: "Multiply **along** the branches; **add** the end results you want." },
      { front: "Without replacement: what changes on the second branch?", back: "The total drops by 1, and so does the count of the colour you took first (e.g. {{5/8}} then {{4/7}})." },
      { front: "P(B | A)", back: "The probability of B **given** A. {{P(B|A) = (P(A ∩ B))/(P(A))}}; it's the second-stage branch on a tree." },
      { front: "How do you test whether A and B are independent?", back: "Check whether P(A and B) = P(A) × P(B)." },
      { front: "n sweets, 3 red, two taken without replacement. P(both red)?", back: "{{3/n * 2/(n-1) = 6/(n(n-1))}}." },
      { front: "Product rule for counting", back: "Successive choices multiply: m ways then n ways → m × n ways." },
      { front: "How many ways to arrange n different objects in a row?", back: "n! = n × (n − 1) × … × 2 × 1. E.g. 5! = 120." },
      { front: "Counting with a restriction", back: "Fill the restricted position first; if restrictions interact, split into cases and add." },
      { front: "Row 4 of Pascal's triangle and what it gives", back: "1 4 6 4 1 → (a + b)⁴ = a⁴ + 4a³b + 6a²b² + 4ab³ + b⁴." },
      { front: "Coefficient of x³ in (3x − 2)⁵", back: "⁵C₂ × 3³ × (−2)² = 10 × 27 × 4 = 1080." },
    ],
    mustKnow: [
      "Can I draw a sample space diagram for two events and use it to find probabilities?",
      "Can I estimate a probability from previous results (relative frequency) and say when the estimate is reliable?",
      "Can I calculate an expected frequency using n × p?",
      "Can I use the 'or' rule for mutually exclusive events, P(A or B) = P(A) + P(B)?",
      "Can I use the 'and' rule for independent events, P(A and B) = P(A) × P(B)?",
      "Can I draw and use tree diagrams for up to three events, with and without replacement?",
      "Can I use probability information to construct and solve equations (including quadratics)?",
      "Can I use the product rule for counting (PIN codes, arrangements, restrictions)?",
      "Can I use binomial expansion to expand simple binomial expressions to positive integer powers and find a given coefficient?",
      "Can I find missing probabilities in a table using the fact that probabilities add to 1?",
      "Can I find 'at least one' probabilities using 1 − P(none)?",
      "Can I find a conditional probability ('given that …') from a tree diagram?",
    ],
    misconceptions: [
      {
        wrong: "Rolling two dice, each total from 2 to 12 has probability {{1/11}}.",
        right: "The 11 totals are not equally likely. Use the 36 equally likely pairs: P(7) = {{6/36}}, P(12) = {{1/36}}.",
      },
      {
        wrong: "P(at least one six in 4 rolls) = {{1/6 + 1/6 + 1/6 + 1/6 = 4/6}}.",
        right: "The events overlap, so you can't just add. Use 1 − P(no sixes) = {{1 - (5/6)^4}} ≈ 0.518.",
      },
      {
        wrong: "Mutually exclusive and independent mean the same thing.",
        right: "Mutually exclusive = can't happen together (add for OR). Independent = no effect on each other (multiply for AND). Mutually exclusive events with non-zero probabilities are actually dependent.",
      },
      {
        wrong: "Without replacement, the second branches have the same probabilities as the first.",
        right: "After one item is taken the total is one less, and so is the count of that colour: {{5/8}} then {{4/7}}, not {{5/8}} again.",
      },
      {
        wrong: "After five heads in a row, a tail is 'due', so P(tail) is more than {{1/2}}.",
        right: "Coin flips are independent — the coin has no memory. P(tail) is still {{1/2}} (the gambler's fallacy).",
      },
      {
        wrong: "On a tree diagram you add along the branches.",
        right: "Multiply **along** a path (AND), then add **between** the end results (OR).",
      },
      {
        wrong: "An expected frequency of 30 means it will happen exactly 30 times.",
        right: "It is a long-run average. In 200 spins you might get 24 or 37 greens; 30 is the best single estimate.",
      },
      {
        wrong: "In (3x − 2)⁵ the x³ term has coefficient ⁵C₂ × 3 × (−2)².",
        right: "The whole term 3x is cubed: (3x)³ = 27x³, so the coefficient is 10 × 27 × 4 = 1080.",
      },
    ],
    examMistakes: [
      "Tree diagrams without replacement: keeping the same denominator on the second branches (e.g. {{5/8 * 5/8}} instead of {{5/8 * 4/7}}), or reducing the total but forgetting to reduce the count of the colour already taken.",
      "'One of each colour' or 'different colours': working out only one path (red then blue) and forgetting to add the other order (blue then red).",
      "'At least one': adding the single-event probabilities, or finding P(exactly one) instead — the efficient route is 1 − P(none).",
      "'Show that' with algebraic probability: starting from the given quadratic, or skipping the line that writes P(both) as a product of two fractions — examiners award marks for each visible step.",
      "Writing probabilities as ratios or words ('3 : 8', '3 out of 8', '3 in 8') instead of {{3/8}}, 0.375 or 37.5%; or giving a probability greater than 1 without noticing it's impossible.",
      "Expected frequency: dividing n by p instead of multiplying, or rounding 12.5 to a whole number when the question just asks for an estimate.",
    ],
    mnemonics: [
      {
        topic: "Which rule?",
        device: "'AND is multiply, OR is add' — and 'at least one? one minus none'.",
        explanation: "AND → × (for independent events or along a tree path). OR → + (for mutually exclusive events or between tree paths). For 'at least one', subtract P(none) from 1.",
      },
      {
        topic: "Tree diagrams",
        device: "'Along = times, down the end = plus.'",
        explanation: "Move along the branches multiplying; then add the probabilities in the final column that match what you want.",
      },
      {
        topic: "Binomial expansion",
        device: "'Pascal picks the numbers; powers go down, up, and add to n.'",
        explanation: "Coefficients from the row of Pascal's triangle; the first term's power falls, the second's rises, and each term's powers sum to n.",
      },
    ],
    realWorld: [
      {
        title: "Weather forecasts",
        detail:
          "A '70% chance of thunderstorms' in Singapore's monsoon season is a relative frequency: on days with similar conditions in the past, storms happened about 70% of the time. Forecasters combine thousands of simulated outcomes — the more runs, the more reliable the percentage.",
        emoji: "⛈️",
      },
      {
        title: "PINs and passwords",
        detail:
          "The product rule is why longer passwords are safer: 4 digits give 10⁴ = 10 000 options, but 8 characters from 62 letters and digits give 62⁸ ≈ 2.2 × 10¹⁴. Each extra character multiplies the number a hacker must try.",
        emoji: "🔐",
      },
      {
        title: "Medical screening",
        detail:
          "A test that is '95% accurate' can still give mostly false alarms when a condition is rare. Doctors use tree diagrams and conditional probability — P(has the condition | positive test) — to judge what a result really means.",
        emoji: "🩺",
      },
      {
        title: "Quality control and insurance",
        detail:
          "Factories estimate the probability that an item is faulty from samples, then use n × p to predict how many faulty items a batch of 10 000 will contain. Insurers use the same expected-value thinking to set premiums.",
        emoji: "🏭",
      },
    ],
    videos: [
      { title: "Tree diagrams with and without replacement", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+tree+diagrams+without+replacement" },
      { title: "Algebraic probability — show that n² − n − 90 = 0", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+algebraic+probability+show+that+quadratic" },
      { title: "Conditional probability and the AND/OR rules", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+conditional+probability+gcse" },
      { title: "Binomial expansion and Pascal's triangle", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+binomial+expansion+pascals+triangle" },
    ],
    formulas: [
      { name: "Probability (equally likely outcomes)", formula: "P(event) = number of favourable outcomes ÷ total number of outcomes", note: "Learn this — not given" },
      { name: "Complement", formula: "P(not A) = 1 − P(A)", note: "Learn this — not given" },
      { name: "Relative frequency", formula: "relative frequency = number of times event happens ÷ number of trials", note: "Learn this — not given" },
      { name: "Expected frequency", formula: "expected frequency = n × P(event)", note: "Learn this — not given" },
      { name: "OR rule (mutually exclusive)", formula: "P(A or B) = P(A) + P(B)", note: "Learn this — not given" },
      { name: "OR rule (general)", formula: "P(A or B) = P(A) + P(B) − P(A and B)", note: "Learn this — not given" },
      { name: "AND rule (independent)", formula: "P(A and B) = P(A) × P(B)", note: "Learn this — not given" },
      { name: "At least one", formula: "P(at least one) = 1 − P(none)", note: "Learn this — not given" },
      { name: "Conditional probability", formula: "{{P(B|A) = (P(A ∩ B))/(P(A))}}, so P(A and B) = P(A) × P(B | A)", note: "Learn this — not given" },
      { name: "Product rule for counting", formula: "m choices then n choices → m × n outcomes; n objects in a row → n! arrangements", note: "Learn this — not given" },
      { name: "Binomial coefficient", formula: "ⁿCᵣ = {{(n!)/(r!(n-r)!)}} (the r-th entry of row n of Pascal's triangle)", note: "Learn this — not given" },
      { name: "Binomial expansion", formula: "(a + b)ⁿ = aⁿ + ⁿC₁aⁿ⁻¹b + ⁿC₂aⁿ⁻²b² + … + bⁿ", note: "Learn this — not given" },
    ],
  },
};
