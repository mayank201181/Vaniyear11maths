import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "ratio-proportion",
  title: "Ratio, Rates & Proportion",
  strand: "Ratio & Proportion",
  icon: "⚖️",
  summary: "One part, one constant, one multiplier — ratios, compound measures and direct & inverse proportion as a single connected idea.",
  intro:
    "Ratio and proportion questions are everywhere on the 4MA1 Higher papers, often disguised inside a context: a recipe, a map, an exchange rate, a journey, a metal alloy or a light getting dimmer. The skills are not hard individually, but the marks are lost on set-up — dividing by the wrong number of parts, averaging two speeds, or forgetting to square in an inverse-square law. The thread that ties the whole chapter together is a **constant**: the value of one part in a ratio, the speed or density in a compound measure, and the constant k in a proportion formula. Find the constant first and every question becomes a short calculation.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "ratio-basics",
      heading: "Simplifying and sharing in a ratio",
      discovery: {
        problem:
          "Arjun and Mei share some stickers in the ratio 3 : 5. Mei gets 12 more stickers than Arjun.\n\nHow many stickers were there altogether? Before you start: is the answer 12 × 8 = 96? Draw a bar for each person and decide.",
        idea:
          "The 12 is not the total — it is the **difference**. Mei's bar has 5 boxes and Arjun's has 3, so the difference is **2 parts**.\n\n    2 parts = 12, so 1 part = 6\n    Total = 8 parts = 8 × 6 = 48 stickers\n\nArjun gets 18 and Mei gets 30 (and 30 − 18 = 12 ✓). Every ratio question is about finding **the value of one part** — the trick is deciding which number of parts the given amount matches: the total, one person's share, or a difference.",
      },
      body:
        "A ratio compares quantities by **how many equal parts** each one has. The ratio 3 : 5 says: whatever one part is worth, the first quantity has 3 of them and the second has 5.\n\n**Simplifying a ratio.** Divide every part by the highest common factor:\n\n    24 : 36 : 60 = 2 : 3 : 5   (÷ 12)\n\nThree things to fix first:\n\n- **Units must match.** 45 cm : 1.2 m → 45 cm : 120 cm = 3 : 8. A simplified ratio has no units.\n- **Decimals** → multiply to clear them: 1.5 : 2.5 = 15 : 25 = 3 : 5.\n- **Fractions** → multiply by the LCM of the denominators: {{2/3}} : {{3/4}} = ({{2/3}} × 12) : ({{3/4}} × 12) = 8 : 9.\n\n**Unit ratios 1 : n and n : 1.** Divide every part by the part you want to be 1. For 8 : 30, divide by 8 to get **1 : 3.75**. Unit ratios make comparisons easy: a map at 1 : 50 000 or a class with a teacher-to-student ratio of 1 : 22. In the form 1 : n, n can be a decimal — that is fine.\n\n**Ratios and fractions.** In the ratio 3 : 5 there are 8 parts in total, so the first share is {{3/8}} of the whole and the second is {{5/8}}. But the first is {{3/5}} *of the second* — a different fraction. Read the question carefully: \"fraction of the total\" or \"fraction of the other\"?\n\n**Three types of sharing question.** Always ask: *what does the given number represent?*\n\n| You are given… | It matches… | Example (ratio 3 : 5) |\n|---|---|---|\n| the total | all the parts (3 + 5 = 8) | $96 shared → 1 part = $12 → $36 and $60 |\n| one share | that person's parts | Mei gets $40 → 5 parts = 40 → 1 part = $8 → Arjun $24 |\n| a difference | the difference in parts (5 − 3 = 2) | Mei gets $12 more → 2 parts = 12 → 1 part = $6 |\n\n**Combining two ratios.** If a : b = 2 : 3 and b : c = 4 : 5, you cannot just glue them together — b is 3 parts in one ratio and 4 parts in the other. Make the shared quantity **the same number of parts** using the LCM of 3 and 4:\n\n    a : b = 2 : 3 = 8 : 12   (× 4)\n    b : c = 4 : 5 = 12 : 15  (× 3)\n    a : b : c = 8 : 12 : 15\n\n**Ratios with algebra.** A ratio is a pair of fractions in disguise: x : y = 3 : 4 means {{x/y = 3/4}}, so 4x = 3y. Edexcel likes questions such as \"(x + 3) : (2x − 1) = 3 : 4. Find x.\" Cross-multiply:\n\n    4(x + 3) = 3(2x − 1)\n    4x + 12 = 6x − 3\n    15 = 2x, so x = 7.5\n\nCheck: 10.5 : 14 = 3 : 4 ✓.",
      diagram: `<svg viewBox="0 0 420 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar model for the ratio 3 to 5. Arjun's bar has 3 equal boxes and Mei's bar has 5 equal boxes of the same width. The 2 extra boxes in Mei's bar are bracketed and labelled 2 parts equals 12, so each box is worth 6."><rect x="0" y="0" width="420" height="170" fill="#ffffff"/><text x="78" y="45" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="end">Arjun</text><text x="78" y="100" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="end">Mei</text><rect x="90" y="25" width="40" height="30" fill="#c7d2fe" stroke="#334155"/><rect x="130" y="25" width="40" height="30" fill="#c7d2fe" stroke="#334155"/><rect x="170" y="25" width="40" height="30" fill="#c7d2fe" stroke="#334155"/><rect x="90" y="80" width="40" height="30" fill="#fde68a" stroke="#334155"/><rect x="130" y="80" width="40" height="30" fill="#fde68a" stroke="#334155"/><rect x="170" y="80" width="40" height="30" fill="#fde68a" stroke="#334155"/><rect x="210" y="80" width="40" height="30" fill="#fecaca" stroke="#334155"/><rect x="250" y="80" width="40" height="30" fill="#fecaca" stroke="#334155"/><g font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="110" y="45">6</text><text x="150" y="45">6</text><text x="190" y="45">6</text><text x="110" y="100">6</text><text x="150" y="100">6</text><text x="190" y="100">6</text><text x="230" y="100">6</text><text x="270" y="100">6</text></g><line x1="210" y1="118" x2="210" y2="126" stroke="#1f2937" stroke-width="1.5"/><line x1="290" y1="118" x2="290" y2="126" stroke="#1f2937" stroke-width="1.5"/><line x1="210" y1="126" x2="290" y2="126" stroke="#1f2937" stroke-width="1.5"/><text x="250" y="145" font-size="13" font-family="sans-serif" fill="#b91c1c" text-anchor="middle">2 parts = 12</text><text x="305" y="45" font-size="13" font-family="sans-serif" fill="#1f2937">3 parts = 18</text><text x="305" y="100" font-size="13" font-family="sans-serif" fill="#1f2937">5 parts = 30</text><text x="210" y="163" font-size="12" font-family="sans-serif" fill="#334155" text-anchor="middle">Total 8 parts = 48</text></svg>`,
      diagramCaption:
        "The bar model for Arjun : Mei = 3 : 5. The difference of 12 matches the 2 extra parts, so one part is 6 and the total of 8 parts is 48.",
      workedExamples: [
        {
          title: "Given a difference, three-part ratio",
          problem:
            "Aisha, Ben and Chloe share some money in the ratio 2 : 3 : 7. Chloe gets $90 more than Aisha. Work out the total amount of money shared.",
          steps: [
            "The $90 is a **difference**, so match it to the difference in parts: Chloe has 7 parts and Aisha has 2, a difference of 7 − 2 = 5 parts.",
            "5 parts = $90, so 1 part = 90 ÷ 5 = $18.",
            "Total parts = 2 + 3 + 7 = 12.",
            "Total = 12 × 18 = $216.",
            "Check: Aisha $36, Ben $54, Chloe $126; 126 − 36 = 90 ✓ and 36 + 54 + 126 = 216 ✓.",
          ],
          answer: "$216",
          yourTurn: {
            question:
              "Your turn: Wei Ling and Jun share some money in the ratio 4 : 9. Jun receives $35 more than Wei Ling. How much does Wei Ling receive? Give your answer in dollars.",
            answer: { type: "number", value: 28, display: "$28" },
            solution: "Difference = 9 − 4 = 5 parts = $35, so 1 part = $7. Wei Ling has 4 parts: 4 × 7 = $28. (Jun: 9 × 7 = $63, and 63 − 28 = 35 ✓.)",
          },
        },
        {
          title: "Combining two ratios",
          problem:
            "In a school CCA fair, the ratio of students signing up for choir to band is 2 : 3, and the ratio for band to drama is 4 : 5. Altogether 175 students sign up for these three CCAs. How many sign up for drama?",
          steps: [
            "Band appears in both ratios, as 3 parts and as 4 parts. Make it the same: LCM(3, 4) = 12.",
            "Choir : band = 2 : 3 = 8 : 12 (× 4). Band : drama = 4 : 5 = 12 : 15 (× 3).",
            "So choir : band : drama = 8 : 12 : 15, which is 35 parts.",
            "1 part = 175 ÷ 35 = 5 students.",
            "Drama = 15 × 5 = 75 students.",
          ],
          answer: "75 students",
          yourTurn: {
            question: "Your turn: a : b = 3 : 4 and b : c = 6 : 7. Find a : b : c in its simplest form.",
            answer: { type: "ratio", parts: [9, 12, 14], simplest: true, display: "9 : 12 : 14" },
            solution: "LCM of 4 and 6 is 12. a : b = 9 : 12 (× 3) and b : c = 12 : 14 (× 2), so a : b : c = 9 : 12 : 14. HCF(9, 12, 14) = 1, so it is already simplest.",
          },
        },
      ],
      keyPoints: [
        "Simplify by dividing every part by the HCF; convert to the same units and clear decimals or fractions first.",
        "Unit ratio 1 : n — divide every part by the first part (n may be a decimal).",
        "Ask what the given amount matches: the total, one share, or a difference of parts. Then find **one part**.",
        "In a : b, a is {{a/(a + b)}} of the total but {{a/b}} of b.",
        "To combine a : b and b : c, scale both so the b parts are equal (use the LCM).",
        "x : y = p : q means qx = py — cross-multiply to solve ratio equations.",
      ],
      whyItWorks:
        "A ratio a : b says the two amounts are a × (one part) and b × (one part) for some unknown size of part. Call that size k. Then the amounts are ak and bk, the total is (a + b)k, and the difference is (b − a)k. Every sharing question is just one equation in k — whatever you are told, divide by the matching number of parts to get k.\n\nSimplifying works for the same reason: 24 : 36 means 24k and 36k, which is 2(12k) and 3(12k) — the same comparison with a part 12 times bigger. Multiplying or dividing every part by the same number never changes the comparison.",
      strategies: ["Use a bar model", "Introduce a variable (one part = k)", "Check by substituting", "Make it simpler"],
      thinkDeeper:
        "The ratio of boys to girls in a club is 3 : 4. Four more boys join and the ratio becomes 1 : 1. Without algebra, use a bar model: what must one part be? Now explain why the answer would be impossible if *five* more boys joined instead.",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "ratio-problems",
      heading: "Ratio problem solving",
      discovery: {
        problem:
          "Two jugs of lime cordial are mixed:\n\n- Jug A: concentrate to water in the ratio 2 : 7\n- Jug B: concentrate to water in the ratio 3 : 11\n\nSiti says Jug B is stronger because it has 3 parts of concentrate, not 2. Is she right? Which jug tastes stronger?",
        idea:
          "The number of parts on its own means nothing — the jugs are different sizes. Compare the **fraction of the drink that is concentrate**:\n\n    Jug A: {{2/9}} = 0.222… (22.2%)\n    Jug B: {{3/14}} = 0.214… (21.4%)\n\nJug A is (slightly) stronger. To compare ratios fairly, turn them into something with a common base: a fraction of the total, a percentage, or a unit ratio (A is 1 : 3.5, B is 1 : 3.67 — more water per unit of concentrate in B).",
      },
      body:
        "Ratio problems in context all reduce to two moves: **put things on a common base** (per litre, per dollar, per 1 part) and **scale** by a multiplier.\n\n**1. Concentrations and mixtures.** Compare the fraction (or percentage) of the mixture that is the ingredient. When two mixtures are combined, add the *amounts*, never the ratios: 900 ml of 2 : 7 squash contains 200 ml concentrate; 700 ml of 3 : 11 contains 150 ml. Together: 350 ml concentrate in 1600 ml, i.e. {{350/1600}} ≈ 21.9%.\n\n**2. Recipes.** Scale every ingredient by the same multiplier: {{\"people needed\"/\"people in recipe\"}}. When you have limited ingredients, find how many batches each ingredient allows — the **smallest** one limits you. Banana bread for 12 slices uses 240 g flour and 3 bananas. With 600 g flour (enough for 2.5 batches) and 7 bananas (2.33 batches), the bananas run out first: 7 bananas make 7 × 4 = 28 slices.\n\n**3. Scale drawings and maps.** A map scale 1 : 25 000 means 1 cm on the map is 25 000 cm in real life.\n\n    6.4 cm on the map → 6.4 × 25 000 = 160 000 cm = 1600 m = 1.6 km\n\nConvert units at the end (100 cm = 1 m, 1000 m = 1 km). **Areas scale by the square** of the length scale: 3 cm² on the map is 3 × 25 000² cm² = 1.875 × 10⁹ cm² = 187 500 m².\n\n**4. Best buys (value for money).** Compare **price per unit** (cheaper is better) or **amount per dollar** (more is better). Always state which you used and conclude in words.\n\n| Pack | Price | Price per litre |\n|---|---|---|\n| 750 ml | $2.20 | $2.93 |\n| 1.5 L | $4.20 | $2.80 |\n| 2 L | $5.40 | $2.70 ← best value |\n\n**5. Exchange rates.** An exchange rate is a ratio, e.g. S$1 = €0.68. Converting **from** S$ multiplies by 0.68; converting **to** S$ divides by 0.68. If unsure, ask: \"should the number get bigger or smaller?\" Euros are worth more than Singapore dollars, so a sum in euros is a *smaller* number.\n\n**6. A ratio that changes.** When something is transferred, added or removed, the total or one share changes, so the old \"one part\" no longer applies. Write the original amounts as multiples of k, apply the change, set up the new ratio as an equation and solve for k. (The bar diagram below shows a transfer.)",
      diagram: `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Before and after bars. Before: Ravi 180 dollars and Siti 108 dollars, ratio 5 to 3. Ravi gives 12 dollars to Siti. After: Ravi 168 dollars and Siti 120 dollars, ratio 7 to 5. Bars are drawn to scale."><rect x="0" y="0" width="460" height="220" fill="#ffffff"/><text x="10" y="20" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937">Before  5 : 3</text><text x="90" y="47" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="end">Ravi</text><rect x="100" y="32" width="270" height="22" fill="#c7d2fe" stroke="#334155"/><rect x="352" y="32" width="18" height="22" fill="#fecaca" stroke="#334155"/><text x="378" y="47" font-size="12" font-family="sans-serif" fill="#1f2937">$180</text><text x="90" y="79" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="end">Siti</text><rect x="100" y="64" width="162" height="22" fill="#fde68a" stroke="#334155"/><text x="270" y="79" font-size="12" font-family="sans-serif" fill="#1f2937">$108</text><path d="M 361 58 C 361 100, 271 90, 271 125" fill="none" stroke="#b91c1c" stroke-width="1.5"/><polygon points="271,131 267,122 275,122" fill="#b91c1c"/><text x="345" y="118" font-size="12" font-family="sans-serif" fill="#b91c1c">$12 moves</text><text x="10" y="128" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937">After  7 : 5</text><text x="90" y="155" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="end">Ravi</text><rect x="100" y="140" width="252" height="22" fill="#c7d2fe" stroke="#334155"/><rect x="352" y="140" width="18" height="22" fill="none" stroke="#94a3b8" stroke-dasharray="3 3"/><text x="378" y="155" font-size="12" font-family="sans-serif" fill="#1f2937">$168</text><text x="90" y="187" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="end">Siti</text><rect x="100" y="172" width="162" height="22" fill="#fde68a" stroke="#334155"/><rect x="262" y="172" width="18" height="22" fill="#fecaca" stroke="#334155"/><text x="288" y="187" font-size="12" font-family="sans-serif" fill="#1f2937">$120</text><text x="230" y="214" font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle">The total ($288) stays the same; only the split changes.</text></svg>`,
      diagramCaption:
        "A transfer changes both shares but not the total. Ravi : Siti goes from 5 : 3 ($180 : $108) to 7 : 5 ($168 : $120) when Ravi gives Siti $12. Bars are drawn to scale.",
      workedExamples: [
        {
          title: "A ratio that changes after a transfer",
          problem:
            "Ravi and Siti have money in the ratio 5 : 3. Ravi gives Siti $12. The ratio of Ravi's money to Siti's money is now 7 : 5. How much money did Ravi have at the start?",
          steps: [
            "Let one part be k. At the start Ravi has 5k and Siti has 3k.",
            "After the transfer: Ravi has 5k − 12 and Siti has 3k + 12.",
            "New ratio 7 : 5 means {{(5k - 12)/(3k + 12) = 7/5}}, so 5(5k − 12) = 7(3k + 12).",
            "25k − 60 = 21k + 84, so 4k = 144 and k = 36.",
            "Ravi started with 5 × 36 = $180. Check: after, 168 : 120 = 7 : 5 ✓ (÷ 24).",
          ],
          answer: "$180",
          yourTurn: {
            question:
              "Your turn: Marcus and Olivia have marbles in the ratio 4 : 1. Marcus gives Olivia 18 marbles and the ratio becomes 3 : 2. How many marbles did Marcus have at the start?",
            answer: { type: "number", value: 72 },
            solution: "Start: 4k and k. After: 4k − 18 and k + 18. 2(4k − 18) = 3(k + 18) → 8k − 36 = 3k + 54 → 5k = 90 → k = 18. Marcus had 4 × 18 = 72. Check: 54 : 36 = 3 : 2 ✓.",
          },
        },
        {
          title: "Best buy across two currencies",
          problem:
            "In Singapore, a 2 kg bag of rice costs S$6.80. In Johor Bahru, a 5 kg bag of the same rice costs RM 38.00. The exchange rate is S$1 = RM 3.40. Which bag is better value? Show your working.",
          steps: [
            "Put both on the same base: Singapore dollars per kilogram.",
            "Singapore: 6.80 ÷ 2 = S$3.40 per kg.",
            "Johor Bahru: convert RM 38.00 to S$. Ringgit → S$ means dividing by 3.40 (each S$ buys 3.40 RM, so the S$ number is smaller): 38.00 ÷ 3.40 = S$11.18 (to the nearest cent).",
            "Per kg: 11.18 ÷ 5 = S$2.24 per kg (2.235… before rounding).",
            "S$2.24 < S$3.40, so the 5 kg bag from Johor Bahru is better value.",
          ],
          answer: "The 5 kg bag (≈ S$2.24 per kg vs S$3.40 per kg)",
          yourTurn: {
            question:
              "Your turn: Hana changes S$450 into euros at S$1 = €0.68. She spends €250 in Paris, then changes the euros she has left back into Singapore dollars at €1 = S$1.45. How many Singapore dollars does she get back?",
            answer: { type: "number", value: 81.2, display: "S$81.20" },
            solution: "450 × 0.68 = €306. Left: 306 − 250 = €56. Back to S$: 56 × 1.45 = S$81.20.",
          },
        },
      ],
      keyPoints: [
        "Compare mixtures by the fraction or percentage of the total, never by the number of parts alone.",
        "Combining mixtures: add the actual amounts of each ingredient, then form the new ratio.",
        "Recipes: one multiplier for every ingredient; the ingredient allowing the fewest batches limits you.",
        "Map scale 1 : n — real length = map length × n; real area = map area × n². Convert units at the end.",
        "Best buy: price per unit (lowest wins) or amount per dollar (highest wins) — then write a conclusion.",
        "Exchange rates: multiply one way, divide the other; sense-check whether the number should grow or shrink.",
        "Changing ratios: write shares as multiples of k, apply the change, form an equation.",
      ],
      whyItWorks:
        "Every context in this section is the same structure: two quantities that stay in a **fixed ratio**, so one is always a constant multiple of the other. Price is proportional to quantity (the constant is price per kg); real distance is proportional to map distance (the constant is the scale n); euros are proportional to dollars (the constant is the rate). Once you know the constant, you can convert in either direction — multiply one way, divide the other.\n\nAreas on maps scale by n² because area is length × length, and **both** lengths get multiplied by n. A 1 cm by 1 cm square on a 1 : 25 000 map is 25 000 cm by 25 000 cm in real life.",
      strategies: ["Make it simpler (compare per 1 unit)", "Introduce a variable", "Use a bar model", "Estimate first", "Check by substituting"],
      thinkDeeper:
        "You mix equal volumes of a 1 : 3 squash and a 1 : 5 squash. Is the result 2 : 8 = 1 : 4? Now mix equal amounts of *concentrate* instead. Explain why the answers differ — and what this tells you about \"averaging\" ratios.",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "compound-measures",
      heading: "Speed, density & pressure",
      discovery: {
        problem:
          "Kenji cycles 12 km along the East Coast Park connector at 24 km/h, then cycles the same 12 km back into a headwind at 12 km/h.\n\nWhat is his average speed for the whole ride? Most people say 18 km/h. Work out how long each half takes before you agree.",
        idea:
          "Out: 12 ÷ 24 = 0.5 h. Back: 12 ÷ 12 = 1 h. He rides 24 km in 1.5 h, so\n\n    average speed = 24 ÷ 1.5 = 16 km/h, not 18\n\nHe spends **twice as long** at the slow speed, so the average is pulled towards 12. Average speed is always **total distance ÷ total time** — never the mean of the speeds.",
      },
      body:
        "A **compound measure** combines two measurements. The units tell you the formula — you never need to memorise a triangle if you read the units.\n\n| Measure | Units | Formula | Read the unit as… |\n|---|---|---|---|\n| Speed | km/h, m/s | {{\"speed\" = \"distance\"/\"time\"}} | kilometres **per** hour |\n| Density | g/cm³, kg/m³ | {{\"density\" = \"mass\"/\"volume\"}} | grams **per** cubic centimetre |\n| Pressure | N/m² (Pa) | {{\"pressure\" = \"force\"/\"area\"}} | newtons **per** square metre |\n\n\"Per\" means \"divided by\", so km/h is km ÷ h. Rearranging gives distance = speed × time, mass = density × volume and force = pressure × area.\n\n**Time in hours.** A calculator needs hours as a decimal. 1 h 15 min = 1.25 h, 24 min = {{24/60}} = 0.4 h. Going back: 2.35 h = 2 h + 0.35 × 60 min = 2 h 21 min — **not** 2 h 35 min.\n\n**Unit conversions — derive them, don't guess.**\n\n    1 m/s = 3600 m per hour = 3.6 km/h\n    so km/h → m/s: ÷ 3.6     m/s → km/h: × 3.6\n\n    1 m³ = 100 × 100 × 100 cm³ = 1 000 000 cm³\n    1 g/cm³ = 1 000 000 g per m³ = 1000 kg/m³\n\nSo the density of water, 1 g/cm³, is 1000 kg/m³. Similarly 1 m² = 10 000 cm², so 1 N/cm² = 10 000 N/m².\n\n**Average speed for a journey in parts.** Find the time (or distance) for each part, then\n\n    average speed = total distance ÷ total time\n\nInclude stops: a 15-minute break adds time but no distance.\n\n**Mixtures and alloys.** The density of a mixture is **total mass ÷ total volume**. Find each component's mass or volume first — never average the densities (unless the volumes happen to be equal).\n\n**Pressure.** The same force on a smaller area gives a bigger pressure. A 600 N person standing on two feet (area 0.04 m²) exerts 15 000 N/m²; on one stiletto heel of 1 cm² = 0.0001 m², the heel alone could exert 6 000 000 N/m².",
      diagram: `<svg viewBox="0 0 450 175" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three formula triangles. Speed: D on top, S and T on the bottom. Density: M on top, D and V on the bottom. Pressure: F on top, P and A on the bottom."><rect x="0" y="0" width="450" height="175" fill="#ffffff"/><polygon points="20,130 130,130 75,30" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><line x1="42" y1="90" x2="108" y2="90" stroke="#1f2937" stroke-width="2"/><line x1="75" y1="90" x2="75" y2="130" stroke="#1f2937" stroke-width="2"/><polygon points="170,130 280,130 225,30" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><line x1="192" y1="90" x2="258" y2="90" stroke="#1f2937" stroke-width="2"/><line x1="225" y1="90" x2="225" y2="130" stroke="#1f2937" stroke-width="2"/><polygon points="320,130 430,130 375,30" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><line x1="342" y1="90" x2="408" y2="90" stroke="#1f2937" stroke-width="2"/><line x1="375" y1="90" x2="375" y2="130" stroke="#1f2937" stroke-width="2"/><g font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle"><text x="75" y="80">D</text><text x="56" y="117">S</text><text x="94" y="117">T</text><text x="225" y="80">M</text><text x="206" y="117">D</text><text x="244" y="117">V</text><text x="375" y="80">F</text><text x="356" y="117">P</text><text x="394" y="117">A</text></g><g font-size="12" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="75" y="150">Speed (km/h)</text><text x="75" y="166">S = D ÷ T</text><text x="225" y="150">Density (g/cm³)</text><text x="225" y="166">D = M ÷ V</text><text x="375" y="150">Pressure (N/m²)</text><text x="375" y="166">P = F ÷ A</text></g></svg>`,
      diagramCaption:
        "Formula triangles are a memory aid for the units: the top quantity is the product of the two below it. Cover the one you want — side by side means multiply, one above the other means divide.",
      workedExamples: [
        {
          title: "Average speed for a two-part journey",
          problem:
            "Ethan drives 45 km along the PIE at an average speed of 60 km/h. He then drives a further 30 km in 20 minutes. Work out his average speed for the whole journey. Give your answer correct to 3 significant figures.",
          steps: [
            "Part 1 time: 45 ÷ 60 = 0.75 h.",
            "Part 2 time: 20 min = {{20/60 = 1/3}} h.",
            "Total distance = 45 + 30 = 75 km. Total time = 0.75 + {{1/3}} = {{13/12}} h (≈ 1.0833 h).",
            "Average speed = 75 ÷ {{13/12}} = {{900/13}} = 69.23… km/h.",
            "Correct to 3 s.f.: **69.2 km/h**. (The mean of the two speeds, (60 + 90) ÷ 2 = 75, is wrong.)",
          ],
          answer: "69.2 km/h",
          yourTurn: {
            question:
              "Your turn: Zara runs 3 km in 15 minutes, then walks 2 km at 5 km/h. Work out her average speed for the 5 km, in km/h. Give your answer correct to 3 significant figures.",
            answer: { type: "number", value: 7.69, tolerance: 0.005 },
            solution: "Run: 15 min = 0.25 h. Walk: 2 ÷ 5 = 0.4 h. Total 5 km in 0.65 h. 5 ÷ 0.65 = 7.692… ≈ 7.69 km/h.",
          },
        },
        {
          title: "Density of an alloy",
          problem:
            "An alloy is made by melting together 300 cm³ of metal A, which has density 8.8 g/cm³, and 240 g of metal B, which has density 2.4 g/cm³. Assuming the volumes simply add, work out the density of the alloy in g/cm³, and then in kg/m³.",
          steps: [
            "Metal A: mass = density × volume = 8.8 × 300 = 2640 g.",
            "Metal B: volume = mass ÷ density = 240 ÷ 2.4 = 100 cm³.",
            "Total mass = 2640 + 240 = 2880 g. Total volume = 300 + 100 = 400 cm³.",
            "Density = 2880 ÷ 400 = **7.2 g/cm³**.",
            "1 g/cm³ = 1000 kg/m³, so 7.2 g/cm³ = **7200 kg/m³**.",
            "Note: the mean of 8.8 and 2.4 is 5.6 — wrong, because the alloy is mostly metal A by volume.",
          ],
          answer: "7.2 g/cm³ = 7200 kg/m³",
          yourTurn: {
            question:
              "Your turn: a crate weighing 180 N rests on a face measuring 0.3 m by 0.4 m. Work out the pressure it exerts on the floor, in N/m².",
            answer: { type: "number", value: 1500 },
            solution: "Area = 0.3 × 0.4 = 0.12 m². Pressure = force ÷ area = 180 ÷ 0.12 = 1500 N/m².",
          },
        },
      ],
      keyPoints: [
        "Read the units: km/h is km ÷ h, g/cm³ is g ÷ cm³, N/m² is N ÷ m².",
        "Convert minutes to hours by ÷ 60 before using a speed in km/h; convert decimal hours back with × 60.",
        "km/h → m/s: ÷ 3.6. m/s → km/h: × 3.6.",
        "1 g/cm³ = 1000 kg/m³ (because 1 m³ = 1 000 000 cm³).",
        "Average speed = total distance ÷ total time (include stops), never the mean of the speeds.",
        "Mixtures and alloys: density = total mass ÷ total volume.",
        "Smaller area, same force → bigger pressure.",
      ],
      whyItWorks:
        "A compound measure is a **rate**: how much of one thing for each unit of another. 60 km/h means 60 km for every 1 hour, so in t hours you go 60t km — distance is speed × time because you are adding 60 for every hour. Dividing undoes it.\n\nAverage speed must be total distance ÷ total time because \"average speed\" is defined as the *constant* speed that would cover the same distance in the same time. Averaging the two speeds would only work if you spent **equal times** at each — in Kenji's ride you spend twice as long at 12 km/h, so the true average is the time-weighted mean: {{(24 * 0.5 + 12 * 1)/1.5 = 16}}.",
      strategies: ["Check the units", "Draw a diagram (a journey table)", "Estimate first", "Use the inverse"],
      thinkDeeper:
        "Kenji rides out at 24 km/h. How fast would he need to ride back over the same 12 km to average 32 km/h for the round trip? Try it — and explain why no speed, however large, works for an average of 48 km/h.",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "direct-proportion",
      heading: "Direct proportion",
      discovery: {
        problem:
          "A stone dropped from a high bridge falls 19.6 m in the first 2 seconds. The distance fallen, d metres, is directly proportional to the **square** of the time, t seconds.\n\nPriya says: \"Double the time, double the distance — so it falls 39.2 m in 4 seconds.\" What is wrong? How far does it really fall in 4 seconds?",
        idea:
          "d ∝ t² means {{d = kt^2}}. Doubling t multiplies t² by 2² = **4**, so the distance is 4 × 19.6 = **78.4 m**.\n\nWith the formula: {{19.6 = k * 2^2}} gives k = 4.9, so {{d = 4.9t^2}} and at t = 4, d = 4.9 × 16 = 78.4 m. Priya used y ∝ x when the relationship was y ∝ x². The power in the proportion statement controls everything.",
      },
      body:
        "**y is directly proportional to x** (written y ∝ x) means y is always the same multiple of x:\n\n    {{y = kx}}   (k is the constant of proportionality)\n\nDouble x and y doubles; multiply x by 5 and y is multiplied by 5. The ratio {{y/x}} is always k.\n\n**Other powers.** The same idea works with any power of x:\n\n| Statement | Formula | If x is multiplied by 2, y is multiplied by… |\n|---|---|---|\n| y ∝ x | {{y = kx}} | 2 |\n| y ∝ x² | {{y = kx^2}} | {{2^2 = 4}} |\n| y ∝ x³ | {{y = kx^3}} | {{2^3 = 8}} |\n| y ∝ √x | {{y = k sqrt(x)}} | {{sqrt(2) ≈ 1.41}} |\n\n**The four-step method (Edexcel's favourite).**\n\n1. Write the proportion as a formula with k: e.g. y ∝ x² → {{y = kx^2}}.\n2. Substitute the given pair of values to find k.\n3. **Write the formula** with the value of k — this line often earns its own mark (\"Find a formula for y in terms of x\").\n4. Use the formula to find y for a new x, or x for a new y.\n\n**Watch the wording.** \"y is proportional to the square of x\" → {{y = kx^2}}. \"y is proportional to the square root of (x + 1)\" → {{y = k sqrt(x + 1)}}. \"The square of y is proportional to x\" → {{y^2 = kx}}.\n\n**Spotting proportion in a table.** Test whether {{y/x}}, {{y/x^2}}, … is constant:\n\n| x | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| y | 3 | 12 | 27 | 48 |\n| {{y/x^2}} | 3 | 3 | 3 | 3 |\n\nSo {{y = 3x^2}} — y ∝ x².\n\n**Graphs.** Every direct proportion graph passes through the **origin** (x = 0 gives y = 0). y ∝ x is a straight line through the origin with gradient k; y ∝ x² is half a parabola; y ∝ √x rises quickly then flattens; y ∝ x³ starts flat then shoots up. A straight line that does **not** pass through the origin (like a taxi fare with a fixed starting charge) is *not* direct proportion.\n\n**Scale-factor shortcut.** If x is multiplied by s, then y ∝ xⁿ is multiplied by sⁿ — no k needed. This is quicker for \"what happens to y when…\" questions, but in a \"find a formula\" question you still need k.",
      diagram: `<svg viewBox="0 0 460 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graphs of y equals 4x, y equals x squared and y equals 8 root x for x from 0 to 4. All three start at the origin and meet again at the point (4, 16). The root curve is above the line, which is above the parabola, between x equals 0 and 4."><rect x="0" y="0" width="460" height="300" fill="#ffffff"/><g stroke="#e5e7eb" stroke-width="1"><line x1="140" y1="30" x2="140" y2="270"/><line x1="230" y1="30" x2="230" y2="270"/><line x1="320" y1="30" x2="320" y2="270"/><line x1="410" y1="30" x2="410" y2="270"/><line x1="50" y1="210" x2="420" y2="210"/><line x1="50" y1="150" x2="420" y2="150"/><line x1="50" y1="90" x2="420" y2="90"/><line x1="50" y1="30" x2="420" y2="30"/></g><line x1="50" y1="270" x2="430" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="280" x2="50" y2="18" stroke="#1f2937" stroke-width="1.5"/><g font-size="12" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="140" y="286">1</text><text x="230" y="286">2</text><text x="320" y="286">3</text><text x="410" y="286">4</text><text x="440" y="274">x</text><text x="44" y="284">0</text></g><g font-size="12" font-family="sans-serif" fill="#334155" text-anchor="end"><text x="44" y="214">4</text><text x="44" y="154">8</text><text x="44" y="94">12</text><text x="44" y="34">16</text><text x="44" y="16">y</text></g><polyline points="50,270 55.6,240 72.5,210 95,185.1 140,150 185,123 230,100.3 275,80.3 320,62.2 365,45.5 410,30" fill="none" stroke="#15803d" stroke-width="2.5"/><line x1="50" y1="270" x2="410" y2="30" stroke="#1d4ed8" stroke-width="2.5"/><polyline points="50,270 95,266.3 140,255 185,236.3 230,210 275,176.3 320,135 365,86.3 410,30" fill="none" stroke="#b91c1c" stroke-width="2.5"/><circle cx="410" cy="30" r="4" fill="#1f2937"/><text x="404" y="22" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="end">(4, 16)</text><text x="70" y="135" font-size="13" font-family="sans-serif" fill="#15803d">y = 8√x</text><text x="205" y="182" font-size="13" font-family="sans-serif" fill="#1d4ed8">y = 4x</text><text x="335" y="185" font-size="13" font-family="sans-serif" fill="#b91c1c">y = x²</text></svg>`,
      diagramCaption:
        "Three direct proportions: y ∝ √x (green), y ∝ x (blue) and y ∝ x² (red). All pass through the origin; only y ∝ x is a straight line. With these values of k all three also pass through (4, 16).",
      workedExamples: [
        {
          title: "Find k, write the formula, use it both ways",
          problem:
            "y is directly proportional to the square of x. When x = 3, y = 45.\n\n(a) Find a formula for y in terms of x.\n(b) Work out y when x = 4.\n(c) Work out the positive value of x when y = 245.",
          steps: [
            "y ∝ x², so {{y = kx^2}}.",
            "Substitute x = 3, y = 45: 45 = k × 9, so k = 5.",
            "(a) {{y = 5x^2}}.",
            "(b) y = 5 × 4² = 5 × 16 = 80.",
            "(c) 245 = 5x², so x² = 49 and x = 7 (positive value).",
          ],
          answer: "(a) {{y = 5x^2}}  (b) 80  (c) 7",
          yourTurn: {
            question: "Your turn: p is directly proportional to the square root of q. When q = 16, p = 12. Work out the value of p when q = 49.",
            answer: { type: "number", value: 21 },
            solution: "{{p = k sqrt(q)}}. 12 = k × 4, so k = 3 and {{p = 3 sqrt(q)}}. When q = 49: p = 3 × 7 = 21.",
          },
        },
        {
          title: "A cube law in context — two methods",
          problem:
            "Solid chocolate spheres are all made from the same chocolate. The mass, m grams, of a sphere is directly proportional to the cube of its radius, r cm. A sphere of radius 3 cm has mass 113.4 g. Work out the mass of a sphere of radius 5 cm.",
          steps: [
            "**Method 1 — find k.** {{m = kr^3}}. 113.4 = k × 27, so k = 4.2 and {{m = 4.2r^3}}.",
            "When r = 5: m = 4.2 × 125 = 525 g.",
            "**Method 2 — scale factor.** The radius is multiplied by {{5/3}}, so the mass is multiplied by {{(5/3)^3 = 125/27}}.",
            "m = 113.4 × {{125/27}} = 525 g. Same answer; method 2 skips the formula.",
          ],
          answer: "525 g",
          yourTurn: {
            question:
              "Your turn: the time, T seconds, for one swing of a pendulum is directly proportional to the square root of its length, L metres. When L = 1, T = 2. Work out T when L = 2.25.",
            answer: { type: "number", value: 3 },
            solution: "{{T = k sqrt(L)}}; 2 = k × 1, so k = 2. When L = 2.25: T = 2 × 1.5 = 3 seconds.",
          },
        },
      ],
      keyPoints: [
        "y ∝ xⁿ means {{y = kx^n}}. Write it with k straight away.",
        "Four steps: write with k → substitute to find k → write the formula → use it.",
        "Read the power carefully: \"square\" → x², \"cube\" → x³, \"square root\" → √x.",
        "If x is multiplied by s, y is multiplied by sⁿ.",
        "Direct proportion graphs pass through the origin; y ∝ x is a straight line with gradient k.",
        "Test a table by checking whether {{y/x^n}} is constant.",
        "When solving for x from y, take the root — and give the positive value if asked.",
      ],
      whyItWorks:
        "\"Proportional\" means the ratio never changes: {{y/x^n}} is the same for every pair of values. Call that fixed ratio k and multiply up: {{y = kx^n}}. That is why one pair of values is enough to pin down the whole relationship.\n\nThe scale-factor rule follows straight from the formula: if x becomes sx, then {{y = k(sx)^n = s^n * kx^n}}, so y is multiplied by sⁿ. It is the same reason areas of similar shapes scale by the square and volumes by the cube — area ∝ length², volume ∝ length³.",
      strategies: ["Introduce a variable (k)", "Check by substituting", "Use the inverse (to find x)", "Find a pattern (constant ratio in a table)"],
      thinkDeeper:
        "y ∝ x² and x ∝ z³. Is y proportional to some power of z? Which one? Now suppose y ∝ x² and z ∝ x². Must y be proportional to z? Explain using k's.",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "inverse-proportion",
      heading: "Inverse proportion",
      discovery: {
        problem:
          "6 workers take 10 days to tile the void deck of an HDB block. All the workers work at the same rate.\n\n(a) How long would 4 workers take?\n(b) How many workers would be needed to finish in 5 days?\n\nMore workers means… more days or fewer? Is it \"divide by 6, multiply by 4\" or the other way round?",
        idea:
          "The job is a fixed amount of work: 6 × 10 = **60 worker-days**. That product never changes.\n\n    (a) 4 workers: 60 ÷ 4 = 15 days\n    (b) 5 days: 60 ÷ 5 = 12 workers\n\nWhen one quantity goes **up** the other goes **down** so that their product stays the same. That is **inverse proportion**: days ∝ {{1/\"workers\"}}.",
      },
      body:
        "**y is inversely proportional to x** (y ∝ {{1/x}}) means\n\n    {{y = k/x}}   or equivalently   {{xy = k}}\n\nThe **product** of the two quantities is constant. Double x and y halves; triple x and y becomes a third.\n\n**Inverse square and other powers.**\n\n| Statement | Formula | If x is multiplied by 2, y is multiplied by… |\n|---|---|---|\n| y ∝ {{1/x}} | {{y = k/x}} | {{1/2}} |\n| y ∝ {{1/x^2}} | {{y = k/x^2}} | {{1/4}} |\n| y ∝ {{1/sqrt(x)}} | {{y = k/sqrt(x)}} | {{1/sqrt(2) ≈ 0.707}} |\n\nThe four-step method is exactly the same as for direct proportion: write with k, find k, write the formula, use it.\n\n**Inverse square laws in the real world.** Light intensity, sound intensity and the force of gravity or magnetism all fall off as {{1/d^2}}. Move twice as far from a lamp and the light on your page is **a quarter** as bright, not half.\n\n**Spotting it in a table.** Check whether xy (or x²y) is constant:\n\n| x | 2 | 3 | 4 | 6 |\n|---|---|---|---|---|\n| y | 18 | 12 | 9 | 6 |\n| xy | 36 | 36 | 36 | 36 |\n\nSo {{y = 36/x}}.\n\n**Graphs.** y = {{k/x}} (for k > 0, x > 0) is a curve that falls steeply then levels out — a **hyperbola**. It never touches either axis: y can never be 0, and x = 0 is impossible. Every point (x, y) on it encloses a rectangle with the axes of the same area k.\n\n**Percentage-change questions** (a favourite grade 8–9 question). Use multipliers, not k:\n\n- y ∝ {{1/x^2}} and x is **increased by 25%** → x is multiplied by 1.25 → y is multiplied by {{1/1.25^2 = 0.64}} → y **decreases by 36%**.\n- y ∝ {{1/x}} and x is **decreased by 20%** → x × 0.8 → y × {{1/0.8 = 1.25}} → y **increases by 25%**.\n\nThe percentage change in y is almost never the same as the percentage change in x.",
      diagram: `<svg viewBox="0 0 360 310" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y equals 12 over x for x from 1 to 12. The curve falls steeply then levels off and never touches either axis. Two shaded rectangles from the origin to the points (2, 6) and (6, 2) both have area 12."><rect x="0" y="0" width="360" height="310" fill="#ffffff"/><rect x="40" y="158" width="44" height="132" fill="#c7d2fe" fill-opacity="0.7" stroke="#1d4ed8" stroke-width="1"/><rect x="40" y="246" width="132" height="44" fill="#fde68a" fill-opacity="0.7" stroke="#b45309" stroke-width="1"/><line x1="40" y1="290" x2="330" y2="290" stroke="#1f2937" stroke-width="1.5"/><line x1="40" y1="300" x2="40" y2="15" stroke="#1f2937" stroke-width="1.5"/><g stroke="#1f2937" stroke-width="1"><line x1="84" y1="290" x2="84" y2="295"/><line x1="128" y1="290" x2="128" y2="295"/><line x1="172" y1="290" x2="172" y2="295"/><line x1="216" y1="290" x2="216" y2="295"/><line x1="260" y1="290" x2="260" y2="295"/><line x1="304" y1="290" x2="304" y2="295"/><line x1="35" y1="246" x2="40" y2="246"/><line x1="35" y1="202" x2="40" y2="202"/><line x1="35" y1="158" x2="40" y2="158"/><line x1="35" y1="114" x2="40" y2="114"/><line x1="35" y1="70" x2="40" y2="70"/><line x1="35" y1="26" x2="40" y2="26"/></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="middle"><text x="84" y="306">2</text><text x="128" y="306">4</text><text x="172" y="306">6</text><text x="216" y="306">8</text><text x="260" y="306">10</text><text x="304" y="306">12</text><text x="340" y="294">x</text></g><g font-size="11" font-family="sans-serif" fill="#334155" text-anchor="end"><text x="32" y="250">2</text><text x="32" y="206">4</text><text x="32" y="162">6</text><text x="32" y="118">8</text><text x="32" y="74">10</text><text x="32" y="30">12</text><text x="32" y="14">y</text></g><polyline points="62,26 66.4,70 73,114 84,158 95,184.4 106,202 128,224 150,237.2 172,246 216,257 260,263.6 304,268" fill="none" stroke="#b91c1c" stroke-width="2.5"/><circle cx="84" cy="158" r="3.5" fill="#1f2937"/><circle cx="172" cy="246" r="3.5" fill="#1f2937"/><text x="90" y="152" font-size="12" font-family="sans-serif" fill="#1f2937">(2, 6)</text><text x="178" y="240" font-size="12" font-family="sans-serif" fill="#1f2937">(6, 2)</text><text x="62" y="230" font-size="11" font-family="sans-serif" fill="#1e3a8a" text-anchor="middle">2 × 6</text><text x="62" y="244" font-size="11" font-family="sans-serif" fill="#1e3a8a" text-anchor="middle">= 12</text><text x="128" y="273" font-size="11" font-family="sans-serif" fill="#78350f" text-anchor="middle">6 × 2 = 12</text><text x="230" y="215" font-size="13" font-family="sans-serif" fill="#b91c1c">y = 12/x</text></svg>`,
      diagramCaption:
        "y ∝ {{1/x}}: the graph of {{y = 12/x}}. Every point gives a rectangle of area xy = 12, which is why the curve must fall as x grows — and why it never reaches either axis.",
      workedExamples: [
        {
          title: "Inverse square law",
          problem:
            "The force, F newtons, between two magnets is inversely proportional to the square of the distance, d cm, between them. When d = 3, F = 20.\n\n(a) Find a formula for F in terms of d.\n(b) Work out F when d = 6.\n(c) Work out d when F = 45.",
          steps: [
            "F ∝ {{1/d^2}}, so {{F = k/d^2}}.",
            "Substitute: {{20 = k/9}}, so k = 180.",
            "(a) {{F = 180/d^2}}.",
            "(b) {{F = 180/36}} = 5 N. (Check with scale factors: d doubled → F × {{1/4}} → 20 ÷ 4 = 5 ✓.)",
            "(c) {{45 = 180/d^2}} → d² = 180 ÷ 45 = 4 → d = 2 cm (a distance is positive).",
          ],
          answer: "(a) {{F = 180/d^2}}  (b) 5 N  (c) 2 cm",
          yourTurn: {
            question: "Your turn: y is inversely proportional to x. When x = 5, y = 8. Work out y when x = 2.",
            answer: { type: "number", value: 20 },
            solution: "{{y = k/x}}; 8 = {{k/5}}, so k = 40. When x = 2: y = {{40/2}} = 20.",
          },
        },
        {
          title: "Percentage change in an inverse square law",
          problem:
            "The intensity of light, I, on a page is inversely proportional to the square of the distance, d, of the page from the lamp. Mei moves her book so that d increases by 25%. Work out the percentage decrease in I.",
          steps: [
            "{{I = k/d^2}}. New distance = 1.25d.",
            "New intensity = {{k/(1.25d)^2 = k/(1.5625d^2) = 0.64 * k/d^2}}.",
            "So I is multiplied by 0.64: it is 64% of its original value.",
            "Percentage decrease = 100% − 64% = **36%** (not 25%, and not 50%).",
          ],
          answer: "36%",
          yourTurn: {
            question:
              "Your turn: t is inversely proportional to the square root of x. x is increased by 44%. Work out the percentage decrease in t. Give your answer correct to 3 significant figures.",
            answer: { type: "number", value: 16.7, tolerance: 0.05 },
            solution: "x × 1.44, so √x × 1.2, so t × {{1/1.2}} = 0.8333… — a decrease of 16.666…% ≈ 16.7%.",
          },
        },
      ],
      keyPoints: [
        "y ∝ {{1/x^n}} means {{y = k/x^n}}; equivalently xⁿy = k is constant.",
        "Same four steps: write with k → find k → write the formula → use it.",
        "If x is multiplied by s, y is multiplied by {{1/s^n}}.",
        "Workers and time: total work (worker-days) is the constant.",
        "Inverse square: double the distance → a quarter of the intensity.",
        "The graph of {{y = k/x}} is a hyperbola that never meets the axes.",
        "Percentage change: turn it into a multiplier, apply the power, then convert back to a percentage.",
      ],
      whyItWorks:
        "If y ∝ {{1/x}}, then y = k × {{1/x}}, so xy = k: the product is fixed. Think of k as a fixed amount of work, light or money shared out — more workers means each does less, a bigger area means less force per square metre (pressure is inversely proportional to area for a fixed force).\n\nFor light, the inverse square comes from geometry: the light from a bulb spreads over the surface of a sphere of area {{4 pi d^2}}. Double d and the same light is spread over 4 times the area, so each square centimetre gets {{1/4}} as much.",
      strategies: ["Introduce a variable (k)", "Look for an invariant (the product xy)", "Use the inverse", "Consider extremes"],
      thinkDeeper:
        "y is inversely proportional to x, and x is directly proportional to z². What is the relationship between y and z? If z is increased by 10%, by what percentage does y change? Then try: y ∝ x² and y ∝ {{1/z}} — how must x change for y to stay the same when z doubles?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Simplify 45 cm : 1.2 m.", back: "Same units first: 45 : 120 = 3 : 8." },
      { front: "Write 8 : 30 in the form 1 : n.", back: "Divide both by 8: 1 : 3.75." },
      { front: "In the ratio 3 : 5, what fraction of the total is the first share?", back: "{{3/8}} (3 parts out of 3 + 5 = 8). It is {{3/5}} of the second share." },
      { front: "A : B = 3 : 5 and B gets 12 more than A. Value of one part?", back: "Difference is 2 parts = 12, so 1 part = 6." },
      { front: "How do you combine a : b = 2 : 3 and b : c = 4 : 5?", back: "Make b equal using the LCM (12): 8 : 12 and 12 : 15 → a : b : c = 8 : 12 : 15." },
      { front: "How do you compare the strength of two mixtures?", back: "Compare the fraction (or %) of the total that is the ingredient — not the number of parts." },
      { front: "Map scale 1 : 25 000. How do real areas compare with map areas?", back: "Multiply by 25 000² = 625 000 000 (lengths × n, areas × n²)." },
      { front: "Best buy — what two comparisons work?", back: "Price per unit (lowest is best) or amount per dollar (highest is best)." },
      { front: "S$1 = €0.68. Converting €56 to S$?", back: "Divide: 56 ÷ 0.68 = S$82.35 (the S$ number should be bigger)." },
      { front: "Convert km/h to m/s.", back: "Divide by 3.6 (1 m/s = 3600 m/h = 3.6 km/h). E.g. 72 km/h = 20 m/s." },
      { front: "1 g/cm³ in kg/m³?", back: "1000 kg/m³, because 1 m³ = 1 000 000 cm³." },
      { front: "Average speed formula?", back: "Total distance ÷ total time — never the mean of the speeds." },
      { front: "Pressure formula and units?", back: "{{P = F/A}}, in N/m² (pascals)." },
      { front: "y ∝ x². x is tripled. What happens to y?", back: "Multiplied by 3² = 9." },
      { front: "Four steps for any proportion question?", back: "Write with k → substitute to find k → write the formula → use it." },
      { front: "y ∝ {{1/x}}: what stays constant?", back: "The product xy = k." },
      { front: "y ∝ {{1/x^2}} and x increases by 25%. Change in y?", back: "y × {{1/1.25^2}} = 0.64, so y decreases by 36%." },
      { front: "What does every direct proportion graph pass through?", back: "The origin (0, 0). y ∝ x is a straight line with gradient k." },
    ],
    mustKnow: [
      "Can I write a ratio in its simplest form, including with different units, decimals and fractions?",
      "Can I write a ratio in the form 1 : n or n : 1?",
      "Can I divide a quantity into a given ratio (two or three parts)?",
      "Can I find shares when I'm given one share or the difference between two shares?",
      "Can I combine two ratios a : b and b : c into a single ratio a : b : c?",
      "Can I compare concentrations of mixtures using fractions or percentages?",
      "Can I solve problems with scale drawings and maps, including areas?",
      "Can I decide which item is better value for money?",
      "Can I scale recipes up and down, and find the limiting ingredient?",
      "Can I convert between currencies using exchange rates?",
      "Can I solve problems where a ratio changes after a transfer, using algebra?",
      "Can I use the formulae for compound measures such as speed, density and pressure?",
      "Can I convert units of compound measures (km/h ↔ m/s, g/cm³ ↔ kg/m³)?",
      "Can I work out average speed for a journey in several parts?",
      "Can I set up and solve problems involving direct proportion (y ∝ x, x², x³, √x)?",
      "Can I set up and solve problems involving inverse proportion (y ∝ {{1/x}}, {{1/x^2}})?",
      "Can I recognise the graphs of direct and inverse proportion?",
      "Can I work out the percentage change in y when x changes by a given percentage?",
    ],
    misconceptions: [
      {
        wrong: "Sharing $96 in the ratio 3 : 5 means $96 ÷ 3 and $96 ÷ 5.",
        right: "Divide by the **total** number of parts: 96 ÷ 8 = 12 per part, so $36 and $60.",
      },
      {
        wrong: "If Mei gets 12 more in the ratio 3 : 5, then 12 is one part.",
        right: "12 matches the **difference** of 5 − 3 = 2 parts, so one part is 6.",
      },
      {
        wrong: "Concentrate : water 3 : 11 is stronger than 2 : 7 because 3 > 2.",
        right: "Compare fractions of the total: {{3/14}} ≈ 21.4% < {{2/9}} ≈ 22.2%, so 2 : 7 is stronger.",
      },
      {
        wrong: "60 km/h for one part and 90 km/h for another gives an average speed of 75 km/h.",
        right: "Only if equal **times** are spent at each. Always use total distance ÷ total time.",
      },
      {
        wrong: "1.35 hours is 1 hour 35 minutes.",
        right: "0.35 h = 0.35 × 60 = 21 minutes, so 1.35 h = 1 h 21 min.",
      },
      {
        wrong: "1 g/cm³ = 1 kg/m³ (or 100 kg/m³).",
        right: "1 m³ = 1 000 000 cm³, so 1 g/cm³ = 1 000 000 g/m³ = 1000 kg/m³.",
      },
      {
        wrong: "y ∝ x² and x doubles, so y doubles.",
        right: "y = kx², so y is multiplied by 2² = 4.",
      },
      {
        wrong: "In inverse proportion, if x goes up by 25%, y goes down by 25%.",
        right: "y ∝ {{1/x}}: y × {{1/1.25}} = 0.8, a 20% decrease. Use multipliers, not percentages, for the change.",
      },
    ],
    examMistakes: [
      "Sharing in a ratio by dividing the total by one of the ratio numbers, or answering with only one share when the question asks for both (or for the difference).",
      "Map scale questions: converting cm to km incorrectly (dividing by 1000 instead of 100 000), or scaling an area by n instead of n².",
      "Best-buy questions with no conclusion: working out the unit prices but not stating clearly which item is better value — the final mark is for the comparison in words.",
      "Using minutes as hours in speed calculations (e.g. 45 ÷ 20 for a speed in km/h), and writing 2.35 h as 2 h 35 min.",
      "Direct/inverse proportion: using y = kx when the question says \"the square of x\" or \"the square root of x\", or never writing down the formula with k when part (a) asks for it.",
      "Percentage-change proportion questions: giving the new value or the multiplier (0.64) instead of the percentage decrease (36%), or applying the percentage directly without the power.",
    ],
    mnemonics: [
      {
        topic: "Compound measures",
        device: "\"Per\" means \"divide\" — the unit IS the formula",
        explanation: "km/h = km ÷ h, g/cm³ = g ÷ cm³, N/m² = N ÷ m². Read the unit aloud and you have written the formula; rearrange for the others.",
      },
      {
        topic: "Proportion questions",
        device: "\"Write it, Find it, Formula, Use it\" (k first, always)",
        explanation: "Write y = kxⁿ (or k/xⁿ), substitute the given pair to Find k, write the Formula with k replaced, then Use it for the new value.",
      },
      {
        topic: "Direct vs inverse",
        device: "Direct Divides to a constant, Inverse multIplies to a constant",
        explanation: "Direct: {{y/x}} is constant. Inverse: x × y is constant. Check a table of values with whichever gives the same number every time.",
      },
    ],
    realWorld: [
      {
        title: "Changing money at Changi",
        detail: "Money changers quote a buy rate and a sell rate. Converting S$ to euros and back again at those two rates always loses a little — the gap is how the changer makes a profit.",
        emoji: "💱",
      },
      {
        title: "MRT timetables and average speed",
        detail: "An MRT train may hit 80 km/h between stations, yet its average speed over a line is nearer 40 km/h once dwell time at each station is included — total distance ÷ total time in action.",
        emoji: "🚇",
      },
      {
        title: "Lighting a stage or a study desk",
        detail: "Light intensity follows an inverse square law. Lighting designers know that moving a lamp from 1 m to 2 m away cuts the brightness to a quarter, not a half.",
        emoji: "💡",
      },
      {
        title: "Concrete, alloys and ship design",
        detail: "Engineers use density to predict whether a mixture or a hull will float: total mass ÷ total volume must be less than the density of seawater (about 1025 kg/m³).",
        emoji: "🚢",
      },
    ],
    videos: [
      { title: "Ratio — sharing and difference problems", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+ratio+problems" },
      { title: "Direct and inverse proportion (IGCSE Higher)", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+direct+and+inverse+proportion" },
      { title: "Compound measures: speed, density and pressure", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+compound+measures+speed+density+pressure" },
      { title: "Proportion — percentage change questions", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+proportion+percentage+change" },
    ],
    formulas: [
      { name: "Sharing in a ratio a : b", formula: "One part = {{\"total\"/(a + b)}}; shares are a × part and b × part", note: "Learn this — not given" },
      { name: "Ratio as an equation", formula: "x : y = p : q ⇔ {{x/y = p/q}} ⇔ qx = py", note: "Learn this — not given" },
      { name: "Map / scale drawing 1 : n", formula: "Real length = map length × n; real area = map area × {{n^2}}", note: "Learn this — not given" },
      { name: "Speed", formula: "{{\"speed\" = \"distance\"/\"time\"}}", note: "Learn this — not given" },
      { name: "Average speed", formula: "{{\"average speed\" = \"total distance\"/\"total time\"}}", note: "Learn this — not given" },
      { name: "Density", formula: "{{\"density\" = \"mass\"/\"volume\"}}", note: "Learn this — not given" },
      { name: "Pressure", formula: "{{\"pressure\" = \"force\"/\"area\"}}", note: "Learn this — not given" },
      { name: "Speed conversion", formula: "1 m/s = 3.6 km/h", note: "Learn this — not given" },
      { name: "Density conversion", formula: "1 g/cm³ = 1000 kg/m³", note: "Learn this — not given" },
      { name: "Direct proportion", formula: "y ∝ {{x^n}} ⇔ {{y = kx^n}}", note: "Learn this — not given" },
      { name: "Inverse proportion", formula: "y ∝ {{1/x^n}} ⇔ {{y = k/x^n}} ⇔ {{x^n y = k}}", note: "Learn this — not given" },
      { name: "Scale-factor effect", formula: "x × s ⇒ y × {{s^n}} (direct) or y × {{1/s^n}} (inverse)", note: "Learn this — not given" },
    ],
  },
};
