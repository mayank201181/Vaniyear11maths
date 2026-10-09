import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "number-bounds",
  title: "Number, Accuracy & Bounds",
  strand: "Number",
  icon: "🎯",
  summary: "Prime factors, HCF and LCM, sensible rounding, estimation and the upper and lower bounds that tell you how much to trust an answer.",
  intro:
    "Every measurement is rounded, so every answer built from measurements carries an uncertainty — bounds let you say exactly how big that uncertainty can be. Edexcel 4MA1 Higher papers almost always include a bounds question (often a speed, density or area worth 3–4 marks), an HCF/LCM question written in prime-factor index form, and an estimation question where you must round to 1 significant figure and show it. Prime factorisation is the \"DNA\" of a number: once you can write 360 = {{2^3 * 3^2 * 5}}, HCF, LCM, perfect squares and counting factors all become bookkeeping. This chapter ties those number skills together and finishes with the reasoning and counting problems that turn up as \"show that\" questions.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "prime-factors-hcf-lcm",
      heading: "Prime factors, HCF and LCM",
      discovery: {
        problem:
          "At Jurong East, a Circle-style shuttle leaves every 12 minutes and a feeder bus leaves every 18 minutes. Both leave together at 07:00.\n\nWhen do they next leave together? Before you list times, write 12 and 18 as products of primes. Can you build the answer from those primes without listing anything?",
        idea:
          "12 = {{2^2 * 3}} and 18 = {{2 * 3^2}}. A time that is a multiple of both must contain **at least** {{2^2}} (for 12) and **at least** {{3^2}} (for 18). The smallest such number is {{2^2 * 3^2 = 36}}, so they next leave together at **07:36**.\n\nThat number is the **lowest common multiple** (LCM): take every prime, each to its **highest** power. The **highest common factor** (HCF) does the opposite: take only the shared primes, each to its **lowest** power — here {{2 * 3 = 6}}.",
      },
      body:
        "**Prime factorisation.** Every whole number greater than 1 can be written as a product of primes in exactly one way (apart from order). Find it with a factor tree or by repeated division by primes, then write it in **index form**, primes in increasing order:\n\n    360 = 2 × 180 = 2 × 2 × 90 = 2 × 2 × 2 × 45 = 2 × 2 × 2 × 3 × 15 = 2 × 2 × 2 × 3 × 3 × 5\n    {{360 = 2^3 * 3^2 * 5}}\n\n**HCF and LCM from index form.** Line the two factorisations up prime by prime.\n\n| | 2 | 3 | 5 | 7 |\n|---|---|---|---|---|\n| 84 | {{2^2}} | {{3^1}} | — | {{7^1}} |\n| 90 | {{2^1}} | {{3^2}} | {{5^1}} | — |\n| **HCF** (lowest power of shared primes) | {{2^1}} | {{3^1}} | — | — |\n| **LCM** (highest power of every prime) | {{2^2}} | {{3^2}} | {{5^1}} | {{7^1}} |\n\nSo HCF(84, 90) = {{2 * 3 = 6}} and LCM(84, 90) = {{2^2 * 3^2 * 5 * 7 = 1260}}.\n\n**The Venn diagram method** (see the diagram) does the same job visually: shared prime factors go in the overlap. HCF = product of the overlap; LCM = product of **everything** in the diagram. For three numbers use three overlapping circles — the HCF is the centre region only.\n\n**Numbers given in index form.** Edexcel often gives the numbers already factorised and expects an answer in index form or as an ordinary number. If A = {{2^4 * 3 * 5^2}} and B = {{2^2 * 3^3 * 5}}, then HCF = {{2^2 * 3 * 5 = 60}} and LCM = {{2^4 * 3^3 * 5^2 = 10800}}. You never need to work out A and B themselves.\n\n**Spotting HCF or LCM in a word problem.**\n\n- \"Largest possible…\", \"split into identical groups with none left over\", \"cut into equal lengths as long as possible\" → **HCF** (it divides into each number).\n- \"Next time they coincide\", \"smallest number of packs so you have the same number of each\", \"both flash together\" → **LCM** (each number divides into it).\n\n**Reading a number's structure.** From index form you can see at once that a number is a **perfect square** when every power is even ({{2^4 * 3^2 = 144 = 12^2}}) and a **perfect cube** when every power is a multiple of 3. That is how you answer \"find the smallest k so that 72k is a square number\": 72 = {{2^3 * 3^2}}, the 2 needs one more, so k = 2.",
      diagram: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram of the prime factors of 84 and 90. Only in 84: 2 and 7. In both: 2 and 3. Only in 90: 3 and 5. HCF equals 2 times 3 equals 6. LCM equals 2 times 7 times 2 times 3 times 3 times 5 equals 1260."><rect x="0" y="0" width="420" height="260" fill="#ffffff"/><circle cx="165" cy="115" r="90" fill="#c7d2fe" fill-opacity="0.7" stroke="#334155" stroke-width="2"/><circle cx="255" cy="115" r="90" fill="#fde68a" fill-opacity="0.7" stroke="#334155" stroke-width="2"/><path d="M210 37 A90 90 0 0 1 210 193 A90 90 0 0 1 210 37 Z" fill="#bbf7d0"/><circle cx="165" cy="115" r="90" fill="none" stroke="#334155" stroke-width="2"/><circle cx="255" cy="115" r="90" fill="none" stroke="#334155" stroke-width="2"/><text x="110" y="20" font-size="15" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">84</text><text x="310" y="20" font-size="15" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">90</text><text x="125" y="105" font-size="18" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2</text><text x="125" y="140" font-size="18" font-family="sans-serif" fill="#1f2937" text-anchor="middle">7</text><text x="210" y="105" font-size="18" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2</text><text x="210" y="140" font-size="18" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3</text><text x="295" y="105" font-size="18" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3</text><text x="295" y="140" font-size="18" font-family="sans-serif" fill="#1f2937" text-anchor="middle">5</text><text x="210" y="226" font-size="13" font-family="sans-serif" fill="#166534" text-anchor="middle">HCF = overlap = 2 × 3 = 6</text><text x="210" y="248" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">LCM = everything = 2 × 7 × 2 × 3 × 3 × 5 = 1260</text></svg>`,
      diagramCaption:
        "84 = {{2^2 * 3 * 7}} and 90 = {{2 * 3^2 * 5}}. One 2 and one 3 are shared, so they go in the overlap. The HCF multiplies the overlap; the LCM multiplies every number in the diagram, counting the shared ones once.",
      workedExamples: [
        {
          title: "HCF and LCM by prime factors",
          problem: "Find (a) the highest common factor and (b) the lowest common multiple of 72 and 120.",
          steps: [
            "Prime factorise: 72 = 2 × 36 = 2 × 2 × 18 = 2 × 2 × 2 × 9, so {{72 = 2^3 * 3^2}}.",
            "120 = 2 × 60 = 2 × 2 × 30 = 2 × 2 × 2 × 15, so {{120 = 2^3 * 3 * 5}}.",
            "HCF: shared primes are 2 and 3. Lowest powers: {{2^3}} and {{3^1}}. HCF = {{2^3 * 3 = 24}}.",
            "LCM: every prime, highest power: {{2^3 * 3^2 * 5 = 8 * 9 * 5 = 360}}.",
            "Check: HCF × LCM = 24 × 360 = 8640 and 72 × 120 = 8640. ✓",
          ],
          answer: "HCF = 24, LCM = 360",
          yourTurn: {
            question: "Your turn: find the highest common factor of 60 and 84.",
            answer: { type: "number", value: 12 },
            solution: "60 = {{2^2 * 3 * 5}} and 84 = {{2^2 * 3 * 7}}. Shared: {{2^2}} and 3, so HCF = {{2^2 * 3 = 12}}.",
          },
        },
        {
          title: "Numbers already in index form (Edexcel style)",
          problem:
            "{{x = 2^4 * 3 * 5^2}} and {{y = 2^2 * 3^3 * 5}}.\n\n(a) Find the HCF of x and y.\n(b) Find the LCM of x and y. Give your answer in index form and as an ordinary number.",
          steps: [
            "Shared primes: 2, 3 and 5 all appear in both.",
            "HCF — lowest powers: {{2^2}}, {{3^1}}, {{5^1}}. HCF = {{2^2 * 3 * 5 = 60}}.",
            "LCM — highest powers: {{2^4}}, {{3^3}}, {{5^2}}. LCM = {{2^4 * 3^3 * 5^2}}.",
            "As a number: 16 × 27 × 25 = 16 × 25 × 27 = 400 × 27 = 10 800.",
          ],
          answer: "HCF = 60; LCM = {{2^4 * 3^3 * 5^2}} = 10 800",
          yourTurn: {
            question: "Your turn: find the LCM of {{2^3 * 3 * 7}} and {{2 * 3^2 * 5}}. Give your answer as an ordinary number.",
            answer: { type: "number", value: 2520 },
            solution: "Highest powers: {{2^3}}, {{3^2}}, 5, 7. LCM = {{2^3 * 3^2 * 5 * 7 = 8 * 9 * 35 = 2520}}.",
          },
        },
      ],
      keyPoints: [
        "Write prime factorisations in index form with primes in increasing order: {{360 = 2^3 * 3^2 * 5}}.",
        "HCF: primes common to both, each to its **lowest** power.",
        "LCM: every prime that appears, each to its **highest** power.",
        "Venn method: overlap = HCF; whole diagram = LCM. Three numbers → three circles, HCF in the centre.",
        "For two numbers, HCF × LCM = the product of the numbers — a quick check.",
        "Perfect square ⇔ all powers even; perfect cube ⇔ all powers multiples of 3.",
        "Word problems: \"share/split/largest\" → HCF; \"together again/smallest/same number of each\" → LCM.",
      ],
      whyItWorks:
        "A number d divides n exactly when d's prime factors are all \"inside\" n's — each prime of d appears in n at least as many times. So a common factor can use each shared prime only up to the **smaller** of the two powers; the biggest such factor uses exactly the lower power of each, giving the HCF.\n\nA common multiple must contain each number completely, so for every prime it needs at least the **larger** power. The smallest one has exactly that and nothing extra — the LCM.\n\nFor two numbers, each prime appears once at its lower power (in the HCF) and once at its higher power (in the LCM); lower + higher = the two original powers added. That is why HCF × LCM = a × b.",
      strategies: ["Make it simpler (break into primes)", "Draw a diagram (Venn)", "Check by substituting (HCF × LCM = product)", "Use the structure (read squares and cubes from the powers)"],
      thinkDeeper:
        "HCF × LCM = a × b works for two numbers. Test it on three numbers, say 4, 6 and 10. Does HCF × LCM equal 4 × 6 × 10? Explain, using powers of 2, exactly what goes wrong — and what (if anything) you could multiply to fix it.",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "rounding-estimation",
      heading: "Rounding, significant figures & estimation",
      discovery: {
        problem:
          "Without a calculator, roughly what is\n\n    {{(19.6 * 4.82)/0.0512}}\n\nIs it about 20, about 200, about 2000 or about 20 000? Decide first, then check on a calculator. What made the size easy to judge?",
        idea:
          "Round each number to **1 significant figure**: {{(20 * 5)/0.05 = 100/0.05}}. Dividing by 0.05 is the same as multiplying by 20, so the estimate is **2000**. The calculator gives 1845.15625, so the estimate has the right size. Rounding to 1 s.f. keeps the *place value* of each number, which is all you need to judge size.",
      },
      body:
        "**Decimal places (d.p.)** count digits after the decimal point. **Significant figures (s.f.)** count from the **first non-zero digit**, wherever it is.\n\n| Number | 1 s.f. | 2 s.f. | 3 s.f. |\n|---|---|---|---|\n| 34 567 | 30 000 | 35 000 | 34 600 |\n| 0.004 708 | 0.005 | 0.0047 | 0.004 71 |\n| 2.0496 | 2 | 2.0 | 2.05 |\n\n- Leading zeros (0.00…) are **not** significant — they only show place value.\n- Zeros *between* non-zero digits **are** significant (the 0 in 4708).\n- When rounding a big number, fill back up with zeros: 34 567 to 2 s.f. is 35 000, never 35.\n- Keep a trailing zero that the accuracy demands: 2.0496 to 2 s.f. is **2.0**, not 2.\n\n**Round once, from the original number.** To round 3.847 to 1 d.p., look only at the second decimal digit: 4 < 5, so the answer is 3.8. Rounding first to 3.85 and then to 3.9 (\"double rounding\") is wrong — the number line shows 3.847 is nearer 3.8.\n\n**Estimating a calculation.** Round every number to 1 s.f., then work it out mentally. Show the rounded numbers — that is where the method mark is.\n\n    {{(4.32 * 21.7)/0.0483 ≈ (4 * 20)/0.05 = 80/0.05 = 1600}}\n\nTo divide by a small decimal, multiply top and bottom by the same power of 10: {{80/0.05 = 8000/5 = 1600}}.\n\n**Over- or under-estimate?** Think about what each rounding does to the *answer*:\n\n- Rounding a number you multiply by (or a numerator) **up** makes the answer bigger.\n- Rounding a number you divide by (a denominator) **up** makes the answer **smaller**.\n\nAbove, 4.32 → 4 and 21.7 → 20 both went down (answer smaller) and 0.0483 → 0.05 went up (dividing by more, answer smaller). All three push the same way, so 1600 is an **underestimate** — and indeed the true value is 1940.87…. When the effects pull in different directions you cannot be sure without more work.\n\n**Using a calculator properly.** Edexcel calculator questions are mostly lost through key-pressing, not maths.\n\n1. A fraction line means brackets round the whole numerator and the whole denominator — or use the fraction key.\n2. A square root sign covers everything under its bar: {{sqrt(17.4^2 - 6.25)}} needs a bracket.\n3. **Write down the full calculator display first**, then round. Writing 6.773983371 and then 6.77 earns marks even if you round badly; writing only 6.8 might earn nothing.\n4. Keep full accuracy in intermediate steps (use the ANS key or memory) — rounding halfway through can change the third significant figure.",
      diagram: `<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line from 3.80 to 3.90 with the midpoint 3.85 marked. The value 3.847 lies just to the left of 3.85, so it is nearer 3.8 and rounds to 3.8 to one decimal place."><rect x="0" y="0" width="440" height="150" fill="#ffffff"/><rect x="60" y="62" width="160" height="16" fill="#bbf7d0"/><rect x="220" y="62" width="160" height="16" fill="#fecaca"/><line x1="50" y1="70" x2="390" y2="70" stroke="#1f2937" stroke-width="2"/><line x1="60" y1="58" x2="60" y2="82" stroke="#1f2937" stroke-width="2"/><line x1="380" y1="58" x2="380" y2="82" stroke="#1f2937" stroke-width="2"/><line x1="220" y1="54" x2="220" y2="86" stroke="#334155" stroke-width="2" stroke-dasharray="4 3"/><text x="60" y="104" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3.80</text><text x="380" y="104" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3.90</text><text x="220" y="104" font-size="13" font-family="sans-serif" fill="#334155" text-anchor="middle">3.85 (halfway)</text><circle cx="210" cy="70" r="5" fill="#1d4ed8"/><text x="200" y="40" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1d4ed8" text-anchor="middle">3.847</text><line x1="205" y1="44" x2="209" y2="62" stroke="#1d4ed8" stroke-width="1.5"/><text x="140" y="130" font-size="12" font-family="sans-serif" fill="#166534" text-anchor="middle">rounds down to 3.8</text><text x="300" y="130" font-size="12" font-family="sans-serif" fill="#b91c1c" text-anchor="middle">rounds up to 3.9</text></svg>`,
      diagramCaption:
        "Rounding to 1 d.p. asks which neighbour, 3.8 or 3.9, is nearer. 3.847 is left of the halfway point 3.85, so it rounds to 3.8 — rounding it to 3.85 first and then to 3.9 gives the wrong answer.",
      workedExamples: [
        {
          title: "Estimate, then judge over or under",
          problem:
            "(a) By rounding each number to 1 significant figure, find an estimate for {{(4.32 * 21.7)/0.0483}}.\n(b) Is your estimate an overestimate or an underestimate? Give a reason.",
          steps: [
            "Round: 4.32 → 4, 21.7 → 20, 0.0483 → 0.05.",
            "{{(4 * 20)/0.05 = 80/0.05}}. Multiply top and bottom by 100: {{8000/5 = 1600}}.",
            "4.32 and 21.7 were rounded **down**, so the numerator is too small.",
            "0.0483 was rounded **up**, so we divided by too much — that also makes the answer too small.",
            "Every rounding makes the result smaller, so 1600 is an underestimate. (Calculator: 1940.87…)",
          ],
          answer: "1600; an underestimate, because the numerator was rounded down and the denominator rounded up.",
          yourTurn: {
            question: "Your turn: by rounding each number to 1 significant figure, estimate {{(296 * 0.51)/5.87}}.",
            answer: { type: "number", value: 25 },
            solution: "{{(300 * 0.5)/6 = 150/6 = 25}}. (The exact value is 25.7…, so the estimate is sensible.)",
          },
        },
        {
          title: "Calculator accuracy",
          problem:
            "Work out {{sqrt(17.4^2 - 6.25)/(3.1 * 0.82)}}.\n\n(a) Write down all the figures on your calculator display.\n(b) Give your answer correct to 3 significant figures.",
          steps: [
            "Estimate first: {{sqrt(300)/(3 * 0.8)}} ≈ {{17/2.4}} ≈ 7.",
            "Numerator: {{17.4^2 = 302.76}}; 302.76 − 6.25 = 296.51; {{sqrt(296.51) = 17.2194...}}",
            "Denominator: 3.1 × 0.82 = 2.542.",
            "Divide (keep full accuracy): 17.2194… ÷ 2.542 = 6.773983371…",
            "3 s.f.: the fourth figure is 3, so round down: **6.77**.",
          ],
          answer: "(a) 6.773983371 (b) 6.77",
          yourTurn: {
            question: "Your turn: work out {{(5.6 + 2.35^2)/sqrt(19.1 - 4.3)}}. Give your answer correct to 3 significant figures.",
            answer: { type: "number", value: 2.89, tolerance: 0.005 },
            solution: "Numerator 5.6 + 5.5225 = 11.1225. Denominator {{sqrt(14.8) = 3.8471...}}. 11.1225 ÷ 3.8471… = 2.891156… = 2.89 (3 s.f.).",
          },
        },
      ],
      keyPoints: [
        "Significant figures start at the first non-zero digit; zeros in the middle count, leading zeros don't.",
        "Big numbers keep their size: 34 567 → 35 000 (2 s.f.).",
        "Round once, from the original number — never round an already-rounded value.",
        "Estimate by rounding every value to 1 s.f., and write the rounded calculation down.",
        "Numerator rounded up → answer up; denominator rounded up → answer down.",
        "On a calculator: brackets round numerators, denominators and everything under a root.",
        "Write the full display, then round. Keep full accuracy until the final step.",
      ],
      whyItWorks:
        "**Why 1 s.f. for estimates?** Rounding to 1 s.f. changes a number by at most about half its leading digit's place value — never more than a factor of about 1.5 — so the estimate keeps the right **order of magnitude** (the right power of 10), which is exactly what a size check needs.\n\n**Why does rounding a denominator up make the answer smaller?** For a fixed numerator, {{80/d}} shrinks as d grows: sharing 80 among more parts gives smaller parts. So rounding up \"what you divide by\" pushes the answer down.\n\n**Why is double rounding wrong?** Rounding 3.847 to 3.85 moves it 0.003 to the right — just across the halfway point. The second rounding then measures from the *wrong* starting place. Always measure from the true value.",
      strategies: ["Estimate first", "Consider extremes (which way did each rounding push?)", "Check by substituting (compare with the estimate)", "Make it simpler (divide by a decimal by scaling both numbers)"],
      thinkDeeper:
        "Find a calculation {{(a * b)/c}} where rounding each of a, b and c to 1 s.f. gives an estimate that is **more than double** the true answer. What has to be true about the three numbers? Can the estimate ever be more than 5 times too big?",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "error-intervals",
      heading: "Upper and lower bounds",
      discovery: {
        problem:
          "Hana's pencil is 7 cm long, correct to the nearest centimetre.\n\nWhat is the shortest it could really be? What is the longest? Could it be exactly 7.5 cm? Could it be 7.49999 cm?",
        idea:
          "Anything from 6.5 cm up to (but not including) 7.5 cm rounds to 7 cm. 7.5 cm would round **up** to 8 cm, but 7.49999 cm rounds to 7 cm. So the length l satisfies\n\n    6.5 ≤ l < 7.5\n\nThe **lower bound** is 6.5 cm and the **upper bound** is 7.5 cm — half a unit (half of 1 cm) either side of the rounded value.",
      },
      body:
        "When a value is rounded, the true value lies within **half of the rounding unit** either side.\n\n| Measurement | Rounding unit | Half the unit | Error interval |\n|---|---|---|---|\n| 7 cm (nearest cm) | 1 cm | 0.5 cm | 6.5 ≤ l < 7.5 |\n| 3.4 kg (1 d.p.) | 0.1 kg | 0.05 kg | 3.35 ≤ m < 3.45 |\n| 4700 people (2 s.f.) | 100 | 50 | 4650 ≤ n < 4750 |\n| 0.0360 m (3 s.f.) | 0.0001 m | 0.000 05 m | 0.035 95 ≤ x < 0.036 05 |\n| 12.6 s (nearest 0.2 s) | 0.2 s | 0.1 s | 12.5 ≤ t < 12.7 |\n\n**The inequality signs matter.** The lower bound is included (≤) because 6.5 rounds up to 7. The upper bound is **not** included (<) because 7.5 rounds to 8. Edexcel marks schemes expect exactly this form: lower ≤ x < upper.\n\n**Why call 7.5 the \"upper bound\" if it isn't allowed?** There is no largest number below 7.5 (7.49, 7.499, 7.4999, …), so we use 7.5 as the limit. In calculations you use 7.5 itself.\n\n**Find the unit first.** The commonest error is using the wrong unit. \"Correct to 2 significant figures\" for 4700 means the last significant figure is in the **hundreds**, so the unit is 100 and the bounds are ±50. For 0.0360 to 3 s.f., the 0 at the end is significant, so the unit is 0.0001.\n\n**Truncation** means chopping off digits without rounding. If Jun's calculator **truncates** to 1 d.p. and shows 8.3, the true value could be anything from 8.3 up to (but not including) 8.4:\n\n    8.3 ≤ x < 8.4\n\nThe whole interval sits **above** the shown value, rather than centred on it.\n\n**Counting things.** If a stadium crowd is 18 000 to the nearest thousand, the bounds are 17 500 ≤ n < 18 500. Because people are whole numbers, the largest possible crowd is actually 18 499 — but in a bounds calculation you still use 18 500 as the upper bound unless the question asks for the greatest possible *number of people*.",
      diagram: `<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line from 6 to 8. A thick bar runs from a filled circle at 6.5 to an open circle at 7.5, with 7 marked in the middle. The interval is labelled 6.5 less than or equal to l less than 7.5."><rect x="0" y="0" width="440" height="150" fill="#ffffff"/><line x1="30" y1="80" x2="410" y2="80" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="72" x2="40" y2="88" stroke="#1f2937" stroke-width="2"/><line x1="220" y1="72" x2="220" y2="88" stroke="#1f2937" stroke-width="2"/><line x1="400" y1="72" x2="400" y2="88" stroke="#1f2937" stroke-width="2"/><line x1="130" y1="74" x2="130" y2="86" stroke="#1f2937" stroke-width="1.5"/><line x1="310" y1="74" x2="310" y2="86" stroke="#1f2937" stroke-width="1.5"/><text x="40" y="108" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">6</text><text x="130" y="108" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">6.5</text><text x="220" y="108" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">7</text><text x="310" y="108" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">7.5</text><text x="400" y="108" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">8</text><line x1="130" y1="60" x2="310" y2="60" stroke="#1d4ed8" stroke-width="6"/><circle cx="130" cy="60" r="7" fill="#1d4ed8" stroke="#1d4ed8" stroke-width="2"/><circle cx="310" cy="60" r="7" fill="#ffffff" stroke="#1d4ed8" stroke-width="2.5"/><text x="130" y="38" font-size="12" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">included (≤)</text><text x="310" y="38" font-size="12" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">not included (&lt;)</text><text x="220" y="136" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">6.5 ≤ l &lt; 7.5</text></svg>`,
      diagramCaption:
        "7 cm to the nearest cm: every length in the blue bar rounds to 7. The filled circle at 6.5 means \"included\"; the open circle at 7.5 means \"not included\", because 7.5 would round up to 8.",
      workedExamples: [
        {
          title: "Error intervals for rounded values",
          problem:
            "(a) The mass of a bag of rice is 3.4 kg, correct to 1 decimal place. Write down the error interval for the mass, m kg.\n(b) The number of people at a concert is 4700, correct to 2 significant figures. Write down the error interval for the number, n.",
          steps: [
            "(a) 1 d.p. means the unit is 0.1 kg. Half of 0.1 is 0.05.",
            "Lower bound 3.4 − 0.05 = 3.35; upper bound 3.4 + 0.05 = 3.45.",
            "Error interval: 3.35 ≤ m < 3.45.",
            "(b) In 4700 the second significant figure (7) is in the hundreds column, so the unit is 100. Half of 100 is 50.",
            "Error interval: 4650 ≤ n < 4750.",
          ],
          answer: "(a) 3.35 ≤ m < 3.45 (b) 4650 ≤ n < 4750",
          yourTurn: {
            question: "Your turn: a sprint time is 12.6 seconds, correct to the nearest 0.2 seconds. Write down the upper bound of the time, in seconds.",
            answer: { type: "number", value: 12.7 },
            solution: "The unit is 0.2 s, so half the unit is 0.1 s. Upper bound = 12.6 + 0.1 = 12.7 s (error interval 12.5 ≤ t < 12.7).",
          },
        },
        {
          title: "Truncation versus rounding",
          problem:
            "x = 8.3. Write down the error interval for x if\n(a) 8.3 is x rounded to 1 decimal place\n(b) 8.3 is x truncated to 1 decimal place.",
          steps: [
            "(a) Rounding to 1 d.p.: half of 0.1 is 0.05 either side. 8.25 ≤ x < 8.35.",
            "(b) Truncating keeps the first decimal digit and throws the rest away. 8.3, 8.31, 8.3999… all truncate to 8.3, but 8.4 does not.",
            "So 8.3 ≤ x < 8.4 — the interval starts at the shown value.",
          ],
          answer: "(a) 8.25 ≤ x < 8.35 (b) 8.3 ≤ x < 8.4",
          yourTurn: {
            question: "Your turn: y = 2.73, correct to 2 decimal places. Write down the lower bound of y.",
            answer: { type: "number", value: 2.725 },
            solution: "The unit is 0.01, half of it is 0.005. Lower bound = 2.73 − 0.005 = 2.725.",
          },
        },
      ],
      keyPoints: [
        "Bounds = rounded value ± half the rounding unit.",
        "Find the unit carefully: \"2 s.f.\" for 4700 means nearest 100; \"nearest 0.2\" means ±0.1.",
        "Error interval form: lower ≤ x < upper (≤ on the left, < on the right).",
        "Truncation: shown value ≤ x < shown value + one unit.",
        "The upper bound is not attainable, but you still use it in calculations.",
        "Write bounds to one more decimal place than the rounded value when needed: 3.4 → 3.35 and 3.45.",
      ],
      whyItWorks:
        "Rounding sends every number to its **nearest** mark on a ruler whose marks are one unit apart. The marks either side of 7 are 6 and 8; the points nearer to 7 than to either neighbour are exactly those within half a unit of 7 — between the midpoints 6.5 and 7.5. The convention \"round halves up\" puts 6.5 in (it rounds up to 7) and 7.5 out (it rounds up to 8), which is why the interval is closed on the left and open on the right.",
      strategies: ["Draw a diagram (number line)", "Consider extremes", "Use the inverse (ask: what rounds to this?)", "Check by substituting (round your bounds back)"],
      thinkDeeper:
        "A length is given as 20 cm \"correct to 1 significant figure\" by one person and as 20 cm \"correct to 2 significant figures\" by another. Write both error intervals. Then explain why writing 20.0 cm tells a reader something that 20 cm does not.",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "bounds-calculations",
      heading: "Calculations with bounds",
      discovery: {
        problem:
          "A rectangular CCA banner is 8 m by 5 m, each measured to the nearest metre.\n\nThe \"area\" is 8 × 5 = 40 m². What are the smallest and largest areas the banner could really have? Is the true area within 1 m² of 40?",
        idea:
          "Length: 7.5 ≤ l < 8.5. Width: 4.5 ≤ w < 5.5.\n\nSmallest area = 7.5 × 4.5 = 33.75 m². Largest area = 8.5 × 5.5 = 46.75 m².\n\nSo the true area could be anywhere from about 34 m² to almost 47 m² — far more than 1 m² away from 40. Small rounding errors **multiply** into large uncertainty. To make an answer as big as possible, choose each input to push the answer up.",
      },
      body:
        "To find the **upper bound** (UB) or **lower bound** (LB) of a calculation, ask for each input: *does making this bigger make the answer bigger or smaller?* Then choose its upper or lower bound accordingly.\n\n| Calculation | Upper bound of answer | Lower bound of answer |\n|---|---|---|\n| a + b | UB a + UB b | LB a + LB b |\n| a − b | UB a − **LB** b | LB a − **UB** b |\n| a × b | UB a × UB b | LB a × LB b |\n| a ÷ b | UB a ÷ **LB** b | LB a ÷ **UB** b |\n\n(For positive quantities, which is every measurement you will meet.)\n\nThe two rows that catch people out are **subtraction** and **division**: to make a − b big you take away as **little** as possible, and to make a ÷ b big you divide by as **little** as possible.\n\n**Compound measures.** Rewrite the formula as a single calculation, then apply the table.\n\n- Speed = {{\"distance\"/\"time\"}}: UB speed = {{(\"UB distance\")/(\"LB time\")}}.\n- Density = {{\"mass\"/\"volume\"}}: LB density = {{(\"LB mass\")/(\"UB volume\")}}.\n- Area of a circle {{pi r^2}}: UB area = {{pi * (\"UB r\")^2}}.\n\n**Formulas with a subtraction inside a fraction**, such as {{a/(b - c)}}: the denominator is biggest when b is at its UB and c at its LB. Work out the extreme denominator first, then divide.\n\n**Answering \"to a suitable degree of accuracy\".** Work out both the UB and the LB of the answer. Round them both to fewer and fewer significant figures until they **agree**. That common value is the answer, and the reason is \"both bounds round to it\".\n\n| | UB = 12.490… | LB = 12.431… | Agree? |\n|---|---|---|---|\n| 3 s.f. | 12.5 | 12.4 | no |\n| 2 s.f. | 12 | 12 | **yes** → answer 12 |\n\n**Show the bounds you use.** Mark schemes give a mark for using any correct bound (e.g. 100.5 or 12.35) and another for the correct combination, so write each bound before you substitute.",
      diagram: `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Table showing which bounds to use. To maximise a plus b use upper plus upper. To maximise a minus b use upper of a minus lower of b. To maximise a times b use upper times upper. To maximise a divided by b use upper of a divided by lower of b. The minimum uses the opposite bound in every case."><rect x="0" y="0" width="440" height="250" fill="#ffffff"/><rect x="20" y="15" width="400" height="36" fill="#c7d2fe" stroke="#334155"/><text x="70" y="38" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">Answer</text><text x="210" y="38" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">To get the MAX</text><text x="350" y="38" font-size="14" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">To get the MIN</text><rect x="20" y="51" width="400" height="44" fill="#ffffff" stroke="#334155"/><rect x="20" y="95" width="400" height="44" fill="#fde68a" stroke="#334155"/><rect x="20" y="139" width="400" height="44" fill="#ffffff" stroke="#334155"/><rect x="20" y="183" width="400" height="44" fill="#fde68a" stroke="#334155"/><line x1="120" y1="15" x2="120" y2="227" stroke="#334155"/><line x1="280" y1="15" x2="280" y2="227" stroke="#334155"/><text x="70" y="78" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle">a + b</text><text x="70" y="122" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle">a − b</text><text x="70" y="166" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle">a × b</text><text x="70" y="210" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle">a ÷ b</text><text x="200" y="78" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">UB a + UB b</text><text x="200" y="122" font-size="14" font-family="sans-serif" fill="#b91c1c" text-anchor="middle">UB a − LB b</text><text x="200" y="166" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">UB a × UB b</text><text x="200" y="210" font-size="14" font-family="sans-serif" fill="#b91c1c" text-anchor="middle">UB a ÷ LB b</text><text x="350" y="78" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">LB a + LB b</text><text x="350" y="122" font-size="14" font-family="sans-serif" fill="#b91c1c" text-anchor="middle">LB a − UB b</text><text x="350" y="166" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">LB a × LB b</text><text x="350" y="210" font-size="14" font-family="sans-serif" fill="#b91c1c" text-anchor="middle">LB a ÷ UB b</text><text x="220" y="244" font-size="12" font-family="sans-serif" fill="#475569" text-anchor="middle">Shaded rows: the bound for b is the OPPOSITE one (positive quantities)</text></svg>`,
      diagramCaption:
        "For + and × the bounds match (big with big). For − and ÷ they cross over: to make the answer big, subtract or divide by the smallest possible b.",
      workedExamples: [
        {
          title: "Bounds of a speed",
          problem:
            "Ravi runs 100 m, measured to the nearest metre, in 12.4 seconds, measured to the nearest 0.1 second.\n\nWork out the upper bound and the lower bound of his average speed. Give your answers correct to 3 significant figures.",
          steps: [
            "Distance: 99.5 ≤ d < 100.5. Time: 12.35 ≤ t < 12.45.",
            "Speed = {{d/t}}. Biggest speed: biggest distance ÷ smallest time.",
            "UB speed = {{100.5/12.35}} = 8.137651… = 8.14 m/s (3 s.f.).",
            "Smallest speed: smallest distance ÷ biggest time.",
            "LB speed = {{99.5/12.45}} = 7.991967… = 7.99 m/s (3 s.f.).",
          ],
          answer: "Upper bound 8.14 m/s; lower bound 7.99 m/s",
          yourTurn: {
            question:
              "Your turn: a metal block has mass 250 g, correct to the nearest 10 g, and volume 32 cm³, correct to the nearest cm³. Work out the upper bound of its density in g/cm³. Give your answer correct to 3 significant figures.",
            answer: { type: "number", value: 8.1, tolerance: 0.005, display: "8.10" },
            solution: "Mass UB = 255 g; volume LB = 31.5 cm³. UB density = {{255/31.5}} = 8.0952… = 8.10 g/cm³ (3 s.f.).",
          },
        },
        {
          title: "A suitable degree of accuracy",
          problem:
            "a = 47.6 correct to 1 decimal place and b = 3.82 correct to 2 decimal places. {{c = a/b}}.\n\nBy considering bounds, work out the value of c to a suitable degree of accuracy. Give a reason for your answer.",
          steps: [
            "Bounds: 47.55 ≤ a < 47.65 and 3.815 ≤ b < 3.825.",
            "UB c = {{(\"UB a\")/(\"LB b\") = 47.65/3.815}} = 12.490 17…",
            "LB c = {{(\"LB a\")/(\"UB b\") = 47.55/3.825}} = 12.431 37…",
            "To 3 s.f. the bounds are 12.5 and 12.4 — they disagree.",
            "To 2 s.f. both are 12 — they agree.",
          ],
          answer: "c = 12, because the upper bound and the lower bound both round to 12 to 2 significant figures.",
          yourTurn: {
            question: "Your turn: p = 8.6 correct to 1 decimal place and q = 3.25 correct to 2 decimal places. Work out the upper bound of p − q.",
            answer: { type: "number", value: 5.405 },
            solution: "UB p = 8.65, LB q = 3.245. UB of p − q = 8.65 − 3.245 = 5.405 (subtract the smallest possible q).",
          },
        },
      ],
      keyPoints: [
        "Write down the bounds of every measurement first.",
        "For each input, ask: does increasing it increase or decrease the answer?",
        "Max of a − b uses UB a − LB b; max of a ÷ b uses UB a ÷ LB b.",
        "Compound measures: UB speed = UB distance ÷ LB time; LB density = LB mass ÷ UB volume.",
        "Suitable accuracy: round both bounds until they agree; give the reason \"both bounds round to …\".",
        "Don't round the bounds before you finish the calculation — round only the final answers.",
      ],
      whyItWorks:
        "Think of a ÷ b as \"how many pieces of size b fit into a\". **More** pieces fit when a is bigger and when each piece (b) is smaller. So the largest quotient pairs the largest a with the smallest b. The same logic gives the subtraction rule: you have the most left when you start with the most and take away the least.\n\nThe area example shows why errors grow: (7.5 to 8.5) × (4.5 to 5.5) spans 33.75 to 46.75 because each error is multiplied by the *other* side as well as by itself. The relative errors (about 6% and 10%) roughly **add** when you multiply or divide.",
      strategies: ["Consider extremes", "Make it simpler (rewrite the formula as one fraction)", "Check by substituting (does the original value lie between your bounds?)", "Split into cases (numerator and denominator separately)"],
      thinkDeeper:
        "For {{T = a/(b - c)}} with a = 12, b = 9 and c = 7, each to the nearest whole number, find the upper bound of T. Compare it with the value of T using the rounded numbers. Why does a subtraction in the denominator make the uncertainty so large — and what would happen if b and c were both 8?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "number-problems",
      heading: "Number reasoning & problem solving",
      discovery: {
        problem:
          "A hawker stall offers a set meal: choose 1 of 3 drinks, 1 of 4 mains and 1 of 2 desserts.\n\nHow many different set meals are possible? Try to answer without listing them all — then convince yourself your method is right by sketching part of the list.",
        idea:
          "For each of the 3 drinks there are 4 mains, giving 3 × 4 = 12 drink-and-main pairs. Each pair can go with 2 desserts: 12 × 2 = **24** meals.\n\nThis is the **product rule for counting**: if one choice can be made in m ways and a second, independent choice in n ways, together they can be made in m × n ways. It extends to any number of choices.",
      },
      body:
        "**The product rule.** Draw one box (\"slot\") per choice, write the number of options in each, and multiply.\n\n- 4-digit PINs using 0–9 with repeats allowed: 10 × 10 × 10 × 10 = 10 000.\n- 4-digit codes with **no repeats**: 10 × 9 × 8 × 7 = 5040 (one fewer option each time).\n- Three-digit numbers with all digits different: the first digit cannot be 0, so 9 × 9 × 8 = 648 (see the diagram).\n\n**Fill the most restricted slot first.** If a number must be odd, deal with the units digit before the others, then the first digit (which cannot be 0), then the rest.\n\n**Divisibility tests** — quick checks used in reasoning questions.\n\n| Divisible by | Test |\n|---|---|\n| 2 | last digit even |\n| 3 | digit sum divisible by 3 |\n| 4 | last two digits divisible by 4 |\n| 5 | last digit 0 or 5 |\n| 6 | divisible by 2 **and** by 3 |\n| 8 | last three digits divisible by 8 |\n| 9 | digit sum divisible by 9 |\n| 11 | alternating digit sum (+ − + …) divisible by 11 |\n\n**Prime factors answer \"show that\" questions.** A number is a multiple of m exactly when its prime factorisation contains m's. To show {{2^5 * 3^4 * 7}} is a multiple of 72 = {{2^3 * 3^2}}: it contains {{2^3}} and {{3^2}}, so it equals {{72 * 2^2 * 3^2 * 7}} — a whole number times 72.\n\n**Factorise sums of powers.** {{3^5 + 3^4 + 3^3 = 3^3(3^2 + 3 + 1) = 27 * 13}}, so it is divisible by 13 — far quicker than computing 351 and dividing.\n\n**Counting factors.** If {{n = p^a * q^b * r^c}} then every factor is {{p^i * q^j * r^k}} with 0 ≤ i ≤ a, 0 ≤ j ≤ b, 0 ≤ k ≤ c. By the product rule n has (a + 1)(b + 1)(c + 1) factors. So 360 = {{2^3 * 3^2 * 5}} has 4 × 3 × 2 = 24 factors.\n\n**Writing a convincing \"show that\".** State the fact you use (\"72 = {{2^3 * 3^2}}\"), show the calculation, and finish with a sentence that answers the question (\"so it is a multiple of 72\"). A correct number without the reasoning gets few marks.",
      diagram: `<svg viewBox="0 0 440 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three slot boxes for counting three-digit numbers with all digits different. Hundreds digit: 9 choices, 1 to 9. Tens digit: 9 choices, 0 to 9 except the hundreds digit. Units digit: 8 choices. Total 9 times 9 times 8 equals 648."><rect x="0" y="0" width="440" height="190" fill="#ffffff"/><rect x="40" y="40" width="90" height="70" rx="6" fill="#c7d2fe" stroke="#334155" stroke-width="2"/><rect x="175" y="40" width="90" height="70" rx="6" fill="#fde68a" stroke="#334155" stroke-width="2"/><rect x="310" y="40" width="90" height="70" rx="6" fill="#bbf7d0" stroke="#334155" stroke-width="2"/><text x="85" y="30" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">hundreds</text><text x="220" y="30" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">tens</text><text x="355" y="30" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">units</text><text x="85" y="86" font-size="28" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">9</text><text x="220" y="86" font-size="28" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">9</text><text x="355" y="86" font-size="28" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">8</text><text x="152" y="84" font-size="22" font-family="sans-serif" fill="#334155" text-anchor="middle">×</text><text x="287" y="84" font-size="22" font-family="sans-serif" fill="#334155" text-anchor="middle">×</text><text x="85" y="130" font-size="11" font-family="sans-serif" fill="#475569" text-anchor="middle">1–9 (not 0)</text><text x="220" y="130" font-size="11" font-family="sans-serif" fill="#475569" text-anchor="middle">0–9 except the</text><text x="220" y="144" font-size="11" font-family="sans-serif" fill="#475569" text-anchor="middle">hundreds digit</text><text x="355" y="130" font-size="11" font-family="sans-serif" fill="#475569" text-anchor="middle">any of the 8</text><text x="355" y="144" font-size="11" font-family="sans-serif" fill="#475569" text-anchor="middle">not yet used</text><text x="220" y="178" font-size="15" font-family="sans-serif" font-weight="bold" fill="#1f2937" text-anchor="middle">9 × 9 × 8 = 648 numbers</text></svg>`,
      diagramCaption:
        "The slot method for the product rule: one box per decision, the number of options in each box, then multiply. The hundreds digit cannot be 0, and each later digit has one fewer option because repeats are not allowed.",
      workedExamples: [
        {
          title: "Counting with a restriction",
          problem: "How many three-digit **odd** numbers have three different digits?",
          steps: [
            "Most restricted slot first: the units digit must be odd — 1, 3, 5, 7 or 9 — so **5** choices.",
            "Hundreds digit: cannot be 0 and cannot equal the units digit. From 1–9 remove the one used: **8** choices.",
            "Tens digit: any of 0–9 except the two digits already used: **8** choices.",
            "Product rule: 5 × 8 × 8 = 320.",
            "Check the order mattered: starting with the hundreds digit (9 ways) would leave the units count depending on whether that digit was odd — filling the restricted slot first avoids splitting into cases.",
          ],
          answer: "320",
          yourTurn: {
            question: "Your turn: a locker code uses 4 digits from 0–9 and no digit may be repeated. How many different codes are possible?",
            answer: { type: "number", value: 5040 },
            solution: "10 × 9 × 8 × 7 = 5040.",
          },
        },
        {
          title: "Show that — using prime factors",
          problem:
            "(a) Show that {{3^5 + 3^4 + 3^3}} is a multiple of 13.\n(b) n = {{2^3 * 3^2 * 5}}. Find the smallest positive integer k such that nk is a perfect square.",
          steps: [
            "(a) Factor out the lowest power: {{3^5 + 3^4 + 3^3 = 3^3(3^2 + 3 + 1)}}.",
            "{{3^2 + 3 + 1 = 13}}, so the sum is {{3^3 * 13 = 27 * 13}}, a whole number multiplied by 13. Hence it is a multiple of 13.",
            "(b) A perfect square needs every prime to an **even** power.",
            "{{2^3}} needs one more 2; {{3^2}} is already even; {{5^1}} needs one more 5.",
            "k = 2 × 5 = 10, giving {{nk = 2^4 * 3^2 * 5^2 = (2^2 * 3 * 5)^2 = 60^2 = 3600}}.",
          ],
          answer: "(a) {{3^3 * 13}} (b) k = 10",
          yourTurn: {
            question: "Your turn: find the smallest positive integer k such that {{2^3 * 3^2 * 5 * k}} is a perfect cube.",
            answer: { type: "number", value: 75 },
            solution: "Cubes need every power to be a multiple of 3. {{2^3}} is fine; {{3^2}} needs one more 3; {{5^1}} needs {{5^2}}. k = 3 × 25 = 75.",
          },
        },
      ],
      keyPoints: [
        "Product rule: independent choices of m and n ways give m × n outcomes.",
        "Use slots; fill the most restricted slot first; no repeats → one fewer option each time.",
        "A leading digit can't be 0.",
        "Divisibility: 3 and 9 use the digit sum; 4 the last two digits; 8 the last three; 6 needs 2 and 3.",
        "Show a number is a multiple of m by finding m's prime factors inside its factorisation.",
        "Factorise sums of powers by taking out the lowest power.",
        "Number of factors of {{p^a * q^b * r^c}} is (a + 1)(b + 1)(c + 1).",
      ],
      whyItWorks:
        "**Product rule.** Picture a tree: the first choice has m branches, and every one of them splits into n branches for the second choice. The tips of the tree — the complete outcomes — number m × n, whatever the first choice was. That last phrase is the key condition: the number of options for each later slot must be the same *whichever* earlier options were chosen. Filling restricted slots first is how you keep that true.\n\n**Divisibility by 3 and 9.** 10 = 9 + 1, 100 = 99 + 1, 1000 = 999 + 1, … so a number like 4572 = 4(999 + 1) + 5(99 + 1) + 7(9 + 1) + 2 = (a multiple of 9) + (4 + 5 + 7 + 2). It leaves the same remainder on division by 9 (or 3) as its digit sum does.",
      strategies: ["Draw a diagram (slots or a tree)", "Split into cases", "Make it simpler (try small cases)", "Use the structure (prime factorisation)", "Work backwards (what must k supply?)"],
      thinkDeeper:
        "Find the smallest positive whole number with exactly 12 factors. Use the formula (a + 1)(b + 1)(c + 1) = 12: list the ways to write 12 as a product, turn each into a number, and decide which is smallest. Why do the biggest powers go on the smallest primes?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Write 360 as a product of prime factors in index form.", back: "{{2^3 * 3^2 * 5}}" },
      { front: "How do you find the HCF from prime factorisations?", back: "Take the primes common to both, each to its **lowest** power, and multiply." },
      { front: "How do you find the LCM from prime factorisations?", back: "Take every prime that appears, each to its **highest** power, and multiply." },
      { front: "In a prime-factor Venn diagram, where are the HCF and LCM?", back: "HCF = product of the overlap. LCM = product of everything in the diagram." },
      { front: "HCF(a, b) × LCM(a, b) = ?", back: "a × b (for two numbers only)." },
      { front: "How can you tell from index form that a number is a perfect square?", back: "Every power is even, e.g. {{2^4 * 3^2 * 7^2}}." },
      { front: "Round 0.004 708 to 2 significant figures.", back: "0.0047 — leading zeros are not significant." },
      { front: "Round 34 567 to 2 significant figures.", back: "35 000 (keep the place value)." },
      { front: "How do you estimate a calculation?", back: "Round every number to 1 significant figure and work it out; show the rounded numbers." },
      { front: "Rounding the denominator up makes the estimate…?", back: "Smaller — you are dividing by more." },
      { front: "Error interval for 3.4 kg to 1 d.p.?", back: "3.35 ≤ m < 3.45" },
      { front: "Error interval if 8.3 is x **truncated** to 1 d.p.?", back: "8.3 ≤ x < 8.4" },
      { front: "4700 to 2 s.f.: what are the bounds?", back: "4650 and 4750 (the unit is 100, so ±50)." },
      { front: "Upper bound of a − b?", back: "UB a − LB b" },
      { front: "Upper bound of a ÷ b?", back: "UB a ÷ LB b" },
      { front: "Lower bound of a density?", back: "LB mass ÷ UB volume" },
      { front: "How do you give an answer to a \"suitable degree of accuracy\"?", back: "Round the UB and LB until they agree; that value is the answer, because both bounds round to it." },
      { front: "Number of factors of {{2^3 * 3^2 * 5}}?", back: "(3 + 1)(2 + 1)(1 + 1) = 24" },
    ],
    mustKnow: [
      "Can I write a number as a product of its prime factors in index form?",
      "Can I find the HCF and LCM of two or three numbers using prime factors and a Venn diagram?",
      "Can I find the HCF and LCM when the numbers are given in index form, and solve HCF/LCM word problems?",
      "Can I round to a given number of decimal places or significant figures?",
      "Can I estimate a calculation by rounding to 1 significant figure, and say whether it is an over- or underestimate?",
      "Can I use a calculator correctly with brackets, powers and roots, writing the full display before rounding?",
      "Can I write the error interval of a rounded or truncated value using inequalities (≤ lower, < upper)?",
      "Can I solve problems using upper and lower bounds, including sums, differences, products and quotients?",
      "Can I find bounds of compound measures such as speed and density, and of areas and volumes?",
      "Can I use bounds to give an answer to a suitable degree of accuracy, with a reason?",
      "Can I use the product rule to count outcomes, including with restrictions?",
      "Can I use prime factors and divisibility to answer \"show that\" number problems?",
    ],
    misconceptions: [
      {
        wrong: "The LCM of two numbers is always their product: LCM(12, 18) = 216.",
        right: "Only when they share no prime factors. 12 = {{2^2 * 3}} and 18 = {{2 * 3^2}} share a 2 and a 3, so LCM = {{2^2 * 3^2 = 36}}.",
      },
      {
        wrong: "For the HCF, use the highest powers of the primes.",
        right: "Highest powers give the LCM. The HCF uses the **lowest** power of each **shared** prime — it must divide both numbers.",
      },
      {
        wrong: "0.0360 to 3 s.f. has bounds 0.0355 and 0.0365.",
        right: "The final 0 is significant, so the unit is 0.0001: bounds are 0.035 95 and 0.036 05.",
      },
      {
        wrong: "The upper bound of 7 cm (nearest cm) is 7.49 cm, because 7.5 rounds to 8.",
        right: "The upper bound is 7.5 cm. It is not included (l < 7.5), but there is no largest number below it, so 7.5 is the bound you use.",
      },
      {
        wrong: "Upper bound of a − b = UB a − UB b.",
        right: "To make a difference as large as possible, subtract as little as possible: UB a − **LB** b.",
      },
      {
        wrong: "Upper bound of a speed = UB distance ÷ UB time.",
        right: "Dividing by a bigger time gives a smaller speed. UB speed = UB distance ÷ **LB** time.",
      },
      {
        wrong: "3.847 to 1 d.p. is 3.9, because 3.847 → 3.85 → 3.9.",
        right: "Round once, from the original: the second decimal digit is 4, so 3.847 → 3.8.",
      },
      {
        wrong: "Truncated and rounded values have the same error interval.",
        right: "Rounded 8.3 (1 d.p.): 8.25 ≤ x < 8.35. Truncated 8.3: 8.3 ≤ x < 8.4 — truncation only ever chops downwards.",
      },
    ],
    examMistakes: [
      "Leaving an HCF or LCM answer as a list of primes (2, 2, 3) or writing a prime factorisation as a sum or list — Edexcel wants a product, ideally in index form, e.g. {{2^2 * 3}}.",
      "In an estimation question, not showing the numbers rounded to 1 s.f. — writing only \"≈ 1600\" loses the method mark — or rounding to 2 s.f. instead of 1.",
      "Using the wrong half-unit for bounds: treating \"correct to 2 significant figures\" for 4700 as ±0.5 or ±5 instead of ±50, or \"nearest 0.2\" as ±0.2 instead of ±0.1.",
      "Pairing the bounds wrongly for a quotient or difference — e.g. UB speed = UB distance ÷ UB time — the most frequently lost mark in bounds questions.",
      "Rounding the bounds of the inputs (or an intermediate answer) before finishing the calculation, so the final bound is inaccurate.",
      "In \"suitable degree of accuracy\" questions, giving the answer without the reason, or quoting the answer to 3 s.f. when the bounds only agree to 2 s.f.",
    ],
    mnemonics: [
      {
        topic: "HCF vs LCM from prime factors",
        device: "\"HCF is Humble, LCM is Large\"",
        explanation: "The Humble HCF takes the lowest powers of only the shared primes; the Large LCM takes the highest powers of every prime.",
      },
      {
        topic: "Bounds for division and subtraction",
        device: "\"Big over small, big minus small\"",
        explanation: "For the upper bound of a ÷ b or a − b, use the biggest a and the smallest b. The lower bound flips it: small over big, small minus big.",
      },
      {
        topic: "Error interval signs",
        device: "\"Lower Let in, Upper Unreachable\"",
        explanation: "The lower bound is let in (≤); the upper bound can never be reached (<).",
      },
    ],
    realWorld: [
      {
        title: "Engineering tolerances",
        detail: "A bolt for an MRT train might be specified as 20.00 mm ± 0.05 mm. Engineers use upper and lower bounds to check that the largest bolt still fits the smallest hole — tolerance stacking is bounds arithmetic.",
        emoji: "🔩",
      },
      {
        title: "Medicine doses",
        detail: "Nurses calculate doses from a patient's mass and a concentration, both measured to limited accuracy. Knowing the upper bound of a dose keeps it below the safe maximum.",
        emoji: "💊",
      },
      {
        title: "Timetables and gear wheels",
        detail: "When two buses with different frequencies next leave together, or when two meshing gears return to their starting position, the answer is an LCM. Clockmakers and transport planners use it constantly.",
        emoji: "⚙️",
      },
      {
        title: "Passwords and PINs",
        detail: "A 6-digit PIN has 10⁶ = 1 000 000 possibilities; adding letters makes the count explode. Security experts use the product rule to estimate how long a brute-force attack would take.",
        emoji: "🔐",
      },
    ],
    videos: [
      {
        title: "HCF and LCM using prime factors and Venn diagrams",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+hcf+lcm+prime+factors+venn",
      },
      {
        title: "Estimation and significant figures",
        channel: "Maths Genie",
        url: "https://www.youtube.com/results?search_query=maths+genie+estimation+significant+figures",
      },
      {
        title: "Upper and lower bounds (error intervals and calculations)",
        channel: "Cognito",
        url: "https://www.youtube.com/results?search_query=cognito+upper+and+lower+bounds",
      },
      {
        title: "Bounds — suitable degree of accuracy (IGCSE Higher)",
        channel: "ExamSolutions",
        url: "https://www.youtube.com/results?search_query=examsolutions+bounds+suitable+degree+of+accuracy",
      },
    ],
    formulas: [
      { name: "HCF from prime factors", formula: "Product of shared primes, each to its lowest power", note: "Learn this — not given" },
      { name: "LCM from prime factors", formula: "Product of all primes, each to its highest power", note: "Learn this — not given" },
      { name: "HCF–LCM product (two numbers)", formula: "HCF(a, b) × LCM(a, b) = a × b", note: "Learn this — not given" },
      { name: "Bounds of a rounded value", formula: "value − {{1/2}} unit ≤ x < value + {{1/2}} unit", note: "Learn this — not given" },
      { name: "Bounds of a truncated value", formula: "value ≤ x < value + 1 unit", note: "Learn this — not given" },
      { name: "Upper bound of a difference", formula: "UB(a − b) = UB a − LB b", note: "Learn this — not given" },
      { name: "Upper bound of a quotient", formula: "{{\"UB\"(a/b) = (\"UB\" a)/(\"LB\" b)}}", note: "Learn this — not given" },
      { name: "Speed", formula: "{{\"speed\" = \"distance\"/\"time\"}}", note: "Learn this — not given" },
      { name: "Density", formula: "{{\"density\" = \"mass\"/\"volume\"}}", note: "Learn this — not given" },
      { name: "Product rule for counting", formula: "m ways then n ways → m × n ways", note: "Learn this — not given" },
      { name: "Number of factors", formula: "{{n = p^a * q^b * r^c}} has (a + 1)(b + 1)(c + 1) factors", note: "Learn this — not given" },
    ],
  },
};
