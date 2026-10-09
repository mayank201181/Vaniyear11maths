// Number, Accuracy & Bounds — MCQ papers (3 × 15). Options are shuffled at display time.
import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "number-bounds-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "number-bounds-m1-q01",
        question: "Write 504 as a product of its prime factors in index form.",
        options: ["{{2^3 * 3^2 * 7}}", "{{2^2 * 3^2 * 14}}", "{{8 * 9 * 7}}", "{{2^2 * 3^3 * 7}}"],
        answerIndex: 0,
        explanation:
          "Split 504 down a factor tree: 504 = 2 × 252 = 2 × 2 × 126 = 2 × 2 × 2 × 63 = 2 × 2 × 2 × 3 × 3 × 7, so {{504 = 2^3 * 3^2 * 7}}. {{2^2 * 3^2 * 14}} and {{8 * 9 * 7}} both multiply to 504, but 14, 8 and 9 are not prime — the factor tree was stopped too early. {{2^2 * 3^3 * 7}} swaps the powers and equals 756.",
        difficulty: "warmup",
        guideRef: "prime-factors-hcf-lcm",
        hints: ["Keep dividing by the smallest prime that works (2, then 3, then 5 …) until every branch ends in a prime."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q02",
        question: "Round 0.0040572 correct to 3 significant figures.",
        options: ["0.004", "0.00406", "0.00405", "0.0041"],
        answerIndex: 1,
        explanation:
          "Leading zeros are not significant: the first significant figure is the 4. The first three are 4, 0, 5 and the next digit is 7, so round up: **0.00406**. 0.004 is 3 *decimal places*, not 3 s.f.; 0.00405 chops off (truncates) instead of rounding; 0.0041 is 2 s.f.",
        difficulty: "warmup",
        guideRef: "rounding-estimation",
        hints: ["Start counting significant figures at the first non-zero digit. Which digit decides whether you round up?"],
        strategy: "Look at the next digit",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q03",
        question: "The length, {{l}} cm, of a pencil is 8.4 cm correct to 1 decimal place. Which is the error interval for {{l}}?",
        options: ["{{8.35 < l <= 8.45}}", "{{8.3 <= l < 8.5}}", "{{8.35 <= l < 8.45}}", "{{8.35 <= l <= 8.44}}"],
        answerIndex: 2,
        explanation:
          "To 1 d.p. the unit is 0.1, so go half a unit (0.05) either side: 8.35 up to 8.45. 8.35 itself rounds to 8.4, so it is **included** (≤); 8.45 rounds to 8.5, so it is **excluded** (<): {{8.35 <= l < 8.45}}. Swapping the signs gets both ends wrong; {{8.3 <= l < 8.5}} uses a whole unit instead of half; stopping at 8.44 misses lengths like 8.447 cm, which still round to 8.4.",
        difficulty: "warmup",
        guideRef: "error-intervals",
        hints: ["Find half of the rounding unit, then decide which end of the interval is allowed to equal the bound."],
        strategy: "Use a number line",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q04",
        question: "By rounding each number to 1 significant figure, estimate the value of {{(48.7 * 3.12)/0.476}}.",
        options: ["75", "30", "3000", "300"],
        answerIndex: 3,
        explanation:
          "Round: 48.7 → 50, 3.12 → 3, 0.476 → 0.5. Then {{(50 * 3)/0.5 = 150/0.5 = 300}} (dividing by 0.5 doubles). 75 comes from multiplying by 0.5 instead of dividing; 30 and 3000 are place-value slips when dividing by a decimal.",
        difficulty: "warmup",
        guideRef: "rounding-estimation",
        hints: ["Round each number to 1 s.f. first. Dividing by 0.5 is the same as multiplying by what?"],
        strategy: "Estimate first",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q05",
        question: "{{A = 2^3 * 3 * 5^2}} and {{B = 2^2 * 3^3 * 7}}. What is the highest common factor (HCF) of {{A}} and {{B}}?",
        options: ["216", "12", "37 800", "6"],
        answerIndex: 1,
        explanation:
          "The HCF uses only primes **common** to both, each to the **lower** power: {{2^2 * 3 = 12}}. 216 = {{2^3 * 3^3}} takes the higher powers (that's the LCM rule, applied to the shared primes). 37 800 is the LCM. 6 = 2 × 3 ignores the powers altogether.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "Which primes appear in both A and B?",
          "For each shared prime, the HCF can only use as many copies as the number with fewer copies has.",
          "Take {{2^2}} and {{3^1}}.",
        ],
        strategy: "Use prime factors",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q06",
        question:
          "At an MRT interchange, a Circle Line train leaves every 8 minutes and a Downtown Line train leaves every 14 minutes. Both leave together at 08:00. When is the next time they both leave together?",
        options: ["08:56", "08:02", "09:52", "08:22"],
        answerIndex: 0,
        explanation:
          "You need the first time that is a multiple of both 8 and 14: the LCM. {{8 = 2^3}}, {{14 = 2 * 7}}, so LCM = {{2^3 * 7 = 56}} minutes → **08:56**. 08:02 uses the HCF (2), 09:52 uses the product 8 × 14 = 112 minutes (a common multiple, but not the lowest), and 08:22 adds 8 + 14.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "Is this asking for something that divides both numbers, or something both numbers divide into?",
          "List multiples of 14 and stop at the first one that is also a multiple of 8.",
        ],
        strategy: "Use prime factors",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q07",
        question: "Use your calculator to work out {{sqrt(5.6^2 + 3.1^2)/(2.4 - 0.85)}}. Give your answer correct to 3 significant figures.",
        options: ["1.82", "26.4", "5.61", "4.13"],
        answerIndex: 3,
        explanation:
          "Numerator: {{5.6^2 + 3.1^2 = 40.97}}, {{sqrt(40.97) = 6.40078…}}. Denominator: 2.4 − 0.85 = 1.55. So 6.40078… ÷ 1.55 = 4.1295… = **4.13**. 1.82 comes from typing it without brackets round the denominator ({{sqrt(40.97) / 2.4 - 0.85}}); 26.4 forgets the square root; 5.61 uses {{sqrt(a^2 + b^2) = a + b}}, which is false.",
        difficulty: "core",
        guideRef: "rounding-estimation",
        hints: [
          "Work out the top and the bottom separately first, writing down the full calculator values.",
          "If you type it in one go, the whole denominator needs brackets.",
        ],
        strategy: "Estimate first",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q08",
        question: "Ravi's mass is {{m}} kg. His mass **truncated** to a whole number of kilograms is 63 kg. Which is the error interval for {{m}}?",
        options: ["{{62.5 <= m < 63.5}}", "{{63 <= m <= 64}}", "{{63 <= m < 64}}", "{{63 < m < 64}}"],
        answerIndex: 2,
        explanation:
          "Truncating chops off the decimals, so any mass from exactly 63 up to (but not including) 64 truncates to 63: {{63 <= m < 64}}. {{62.5 <= m < 63.5}} is the interval for *rounding* to the nearest kg. Including 64 is wrong — 64 truncates to 64. Excluding 63 is wrong — exactly 63 kg truncates to 63.",
        difficulty: "core",
        guideRef: "error-intervals",
        hints: [
          "Truncating is not rounding. What happens to 63.9 when you truncate it? And to 62.9?",
          "The smallest value is 63 exactly; the values go up to, but don't reach, the next whole number.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q09",
        question: "A rectangle measures 12 cm by 7 cm, each correct to the nearest centimetre. What is the upper bound of its area?",
        options: ["93.75 cm²", "74.75 cm²", "104 cm²", "84 cm²"],
        answerIndex: 0,
        explanation:
          "Upper bounds of the sides: 12.5 cm and 7.5 cm. Maximum area = 12.5 × 7.5 = **93.75 cm²**. 74.75 = 11.5 × 6.5 is the lower bound; 104 = 13 × 8 adds a whole unit instead of half; 84 is the area using the rounded values.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "To make a product as big as possible, how big should each length be?",
          "Each side can be up to half a centimetre more than stated.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q10",
        question:
          "Aisha runs 200 m, measured to the nearest 10 m, in 25 s, measured to the nearest second. Using {{\"speed\" = \"distance\"/\"time\"}}, what is the upper bound of her average speed, correct to 3 significant figures?",
        options: ["8.04 m/s", "7.65 m/s", "8.37 m/s", "8.00 m/s"],
        answerIndex: 2,
        explanation:
          "Bounds: {{195 <= d < 205}} and {{24.5 <= t < 25.5}}. A fraction is biggest with the **largest** top and the **smallest** bottom: {{205/24.5 = 8.367…}} → **8.37 m/s**. 8.04 = 205 ÷ 25.5 divides upper by upper — the classic error. 7.65 = 195 ÷ 25.5 is the lower bound, and 8.00 ignores the bounds.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "Write down the bounds of the distance and of the time first.",
          "Dividing by a smaller number gives a bigger answer.",
          "Use the upper bound of distance and the lower bound of time.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q11",
        question: "A number {{y}} is 300 when rounded to 1 significant figure. Which is the error interval for {{y}}?",
        options: ["{{295 <= y < 305}}", "{{250 <= y < 350}}", "{{299.5 <= y < 300.5}}", "{{200 <= y < 400}}"],
        answerIndex: 1,
        explanation:
          "1 s.f. for 300 means the first digit counts **hundreds**, so the rounding unit is 100 and half of it is 50: {{250 <= y < 350}}. {{295 <= y < 305}} treats it as rounded to the nearest 10, {{299.5 <= y < 300.5}} as rounded to the nearest whole number, and {{200 <= y < 400}} uses a whole unit either side.",
        difficulty: "core",
        guideRef: "error-intervals",
        hints: [
          "With only 1 significant figure, what place value is the 3 in? That's the rounding unit.",
          "Go half of that unit below and above 300.",
        ],
        strategy: "Use a number line",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q12",
        question:
          "A school locker code has 4 digits, each from 0 to 9. The first digit cannot be 0, and digits may be repeated. How many different codes are possible?",
        options: ["10 000", "5040", "4536", "9000"],
        answerIndex: 3,
        explanation:
          "Product rule: 9 choices for the first digit (1–9), then 10 for each of the others: 9 × 10 × 10 × 10 = **9000**. 10 000 ignores the 'not 0' rule. 5040 = 10 × 9 × 8 × 7 and 4536 = 9 × 9 × 8 × 7 both assume digits cannot repeat.",
        difficulty: "core",
        guideRef: "number-problems",
        hints: [
          "How many choices are there for each position, one at a time?",
          "Multiply the numbers of choices together (the product rule).",
        ],
        strategy: "Count systematically",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q13",
        question:
          "{{a = 6.3}} and {{b = 2.8}}, each correct to 1 decimal place. What is the upper bound of {{a/(a - b)}}, correct to 3 significant figures?",
        options: ["1.76", "1.81", "1.84", "1.80"],
        answerIndex: 2,
        explanation:
          "Here {{a}} appears on top **and** bottom, so 'use the upper bound of {{a}}' doesn't obviously work. Rewrite: {{a/(a - b) = 1 + b/(a - b)}}. This is biggest when {{b}} is largest and {{a}} is smallest: {{6.25/(6.25 - 2.85) = 6.25/3.4 = 1.838…}} → **1.84**. 1.81 = 6.35 ÷ 3.5 uses upper bounds of both; 1.76 = 6.35 ÷ 3.6 maximises the top and the bottom together; 1.80 ignores the bounds.",
        difficulty: "challenge",
        guideRef: "bounds-calculations",
        hints: [
          "Should {{a}} be big (top gets bigger) or small (bottom gets smaller)? It can't be both at once.",
          "Try writing {{a}} as {{(a - b) + b}} and split the fraction.",
          "{{a/(a - b) = 1 + b/(a - b)}}: now you want {{b}} big and {{a - b}} small.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q14",
        question: "What is the smallest positive integer {{k}} such that {{600k}} is a cube number?",
        options: ["45", "15", "6", "9"],
        answerIndex: 0,
        explanation:
          "{{600 = 2^3 * 3 * 5^2}}. In a cube every prime power must be a multiple of 3. {{2^3}} is fine; {{3^1}} needs two more 3s; {{5^2}} needs one more 5. So {{k = 3^2 * 5 = 45}}, giving {{600k = 2^3 * 3^3 * 5^3 = 30^3 = 27 000}}. 15 only adds one of each missing prime; 6 is the answer for a **square** (it makes every power even); 9 forgets the extra 5.",
        difficulty: "challenge",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "Write 600 as a product of prime factors.",
          "In a cube number, what must be true about every power in its prime factorisation?",
          "Top up each power to the next multiple of 3.",
        ],
        strategy: "Use prime factors",
      },
      {
        kind: "mcq",
        id: "number-bounds-m1-q15",
        question: "How many even four-digit numbers (1000 to 9999) have four **different** digits?",
        options: ["2240", "2296", "4500", "2520"],
        answerIndex: 1,
        explanation:
          "Split into cases on the last digit. **Ends in 0:** first digit 9 choices, then 8, then 7 → 504. **Ends in 2, 4, 6 or 8:** 4 choices for the last digit, first digit 8 (not 0, not the last digit), then 8, then 7 → 4 × 8 × 8 × 7 = 1792. Total **2296**. 2240 = 5 × 8 × 8 × 7 forgets that when the last digit is 0 the first digit has 9 choices; 2520 = 9 × 8 × 7 × 5 ignores the clash between the first and last digits; 4500 allows repeats.",
        difficulty: "challenge",
        guideRef: "number-problems",
        hints: [
          "Fill the most restricted positions first: the first digit (not 0) and the last digit (even).",
          "The trouble is that 0 is even. Does the last digit being 0 change the number of choices for the first digit?",
          "Split into two cases: last digit 0, and last digit 2, 4, 6 or 8.",
        ],
        strategy: "Split into cases",
      },
    ],
  },
  {
    id: "number-bounds-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "number-bounds-m2-q01",
        question: "Round 47 362 correct to 2 significant figures.",
        options: ["47", "47 400", "47 000", "48 000"],
        answerIndex: 2,
        explanation:
          "The first two significant figures are 4 and 7; the next digit is 3, so round down: **47 000**. The zeros keep the place value — 47 is a completely different size. 47 400 is 3 s.f.; 48 000 rounds up even though the deciding digit (3) is less than 5.",
        difficulty: "warmup",
        guideRef: "rounding-estimation",
        hints: ["Which digit comes straight after the second significant figure? And remember to keep the number the right size."],
        strategy: "Look at the next digit",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q02",
        question: "What is the value of {{2^2 * 3 * 7^2}}?",
        options: ["168", "84", "252", "588"],
        answerIndex: 3,
        explanation:
          "{{2^2 = 4}} and {{7^2 = 49}}, so 4 × 3 × 49 = **588**. 168 = 4 × 3 × 14 treats {{7^2}} as 7 × 2; 84 forgets the square on 7; 252 = {{2^2 * 3^2 * 7}} puts the square on the wrong prime.",
        difficulty: "warmup",
        guideRef: "prime-factors-hcf-lcm",
        hints: ["Work out each power first: {{7^2}} means 7 × 7, not 7 × 2."],
        strategy: "Work step by step",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q03",
        question: "Siti's height is 1.62 m, correct to the nearest centimetre. What is the lower bound of her height?",
        options: ["1.615 m", "1.61 m", "1.625 m", "1.57 m"],
        answerIndex: 0,
        explanation:
          "The nearest centimetre is the nearest 0.01 m; half of that is 0.005 m. Lower bound = 1.62 − 0.005 = **1.615 m**. 1.61 m takes off a whole centimetre; 1.625 m is the upper bound; 1.57 m takes off 0.05 m, which is half of 10 cm, not half of 1 cm.",
        difficulty: "warmup",
        guideRef: "error-intervals",
        hints: ["1 cm = 0.01 m. What is half of that?"],
        strategy: "Use a number line",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q04",
        question: "By rounding each number to 1 significant figure, estimate the value of {{(2.93^2 * 41)/0.198}}.",
        options: ["72", "1800", "600", "180"],
        answerIndex: 1,
        explanation:
          "Round: 2.93 → 3, 41 → 40, 0.198 → 0.2. Then {{(3^2 * 40)/0.2 = 360/0.2 = 1800}}. 72 multiplies by 0.2 instead of dividing; 600 forgets to square the 3; 180 is a place-value slip (dividing by 2 instead of by 0.2).",
        difficulty: "warmup",
        guideRef: "rounding-estimation",
        hints: ["After rounding, dividing by 0.2 is the same as multiplying by 5."],
        strategy: "Estimate first",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q05",
        question:
          "The Venn diagram shows the prime factors of 66 and 90. What is the lowest common multiple (LCM) of 66 and 90?",
        diagram: `<svg viewBox="0 0 320 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram of prime factors. Circle 66 only contains 11. The overlap contains 2 and 3. Circle 90 only contains 3 and 5."><rect x="0" y="0" width="320" height="190" fill="#ffffff"/><circle cx="125" cy="100" r="72" fill="#c7d2fe" fill-opacity="0.6" stroke="#334155" stroke-width="2"/><circle cx="195" cy="100" r="72" fill="#fde68a" fill-opacity="0.6" stroke="#334155" stroke-width="2"/><text x="80" y="20" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937">66</text><text x="222" y="20" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937">90</text><text x="95" y="106" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">11</text><text x="160" y="92" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2</text><text x="160" y="122" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">3</text><text x="225" y="92" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">3</text><text x="225" y="122" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text></svg>`,
        options: ["6", "5940", "330", "990"],
        answerIndex: 3,
        explanation:
          "The LCM is the product of **everything** in the diagram: 11 × 2 × 3 × 3 × 5 = **990**. 6 is the product of the overlap only — that's the HCF. 5940 = 66 × 90, a common multiple but not the lowest (the shared 2 × 3 is counted twice). 330 = 2 × 3 × 5 × 11 uses each prime only once, losing the second 3.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "The overlap holds the primes the two numbers share. Which number do you get from the overlap alone?",
          "For the LCM, multiply every number in the diagram — but each region only once.",
        ],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q06",
        question:
          "Mei has 84 vegetable spring rolls and 126 curry puffs for a CCA party. She packs them into identical boxes, using all of them, with every box holding the same number of spring rolls and the same number of curry puffs. What is the greatest number of boxes she can fill?",
        options: ["252", "42", "14", "210"],
        answerIndex: 1,
        explanation:
          "The number of boxes must divide both 84 and 126, and you want the biggest such number: the HCF. {{84 = 2^2 * 3 * 7}} and {{126 = 2 * 3^2 * 7}}, so HCF = 2 × 3 × 7 = **42** (2 spring rolls and 3 curry puffs per box). 252 is the LCM; 14 forgets the shared factor 3; 210 just adds the two amounts.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "The number of boxes has to divide exactly into 84 and into 126. Is that a factor or a multiple?",
          "Find the highest common factor using prime factors.",
        ],
        strategy: "Use prime factors",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q07",
        question:
          "Jun estimates the value of {{(38.6 * 5.7)/2.4}} by rounding each number to 1 significant figure. Which statement is correct?",
        options: [
          "120 — an overestimate: the numerator was rounded up and the denominator was rounded down",
          "120 — an underestimate: 2.4 was rounded down, so the answer is too small",
          "120 — you cannot tell, because some numbers were rounded up and one was rounded down",
          "120 — exactly right, because the rounding errors cancel out",
        ],
        answerIndex: 0,
        explanation:
          "{{(40 * 6)/2 = 120}}. Rounding 38.6 and 5.7 **up** makes the top bigger; rounding 2.4 **down** makes the bottom smaller, and dividing by a smaller number also makes the answer bigger. Both effects push the same way, so 120 is an **overestimate** (the true value is about 91.7). Rounding the denominator down does not make the answer smaller — it does the opposite.",
        difficulty: "core",
        guideRef: "rounding-estimation",
        hints: [
          "What does rounding the top up do to a fraction? What does rounding the bottom down do?",
          "Dividing by a smaller number gives a bigger answer.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q08",
        question: "The population of a town is 47 000, correct to 2 significant figures. What is the smallest possible population?",
        options: ["46 000", "46 950", "46 500", "46 501"],
        answerIndex: 2,
        explanation:
          "2 s.f. here means the nearest 1000, so the lower bound is 47 000 − 500 = **46 500**, and 46 500 itself rounds up to 47 000, so it is possible. 46 501 assumes the lower bound is not allowed — it is (≤). 46 950 uses the nearest 100; 46 000 takes off a whole 1000.",
        difficulty: "core",
        guideRef: "error-intervals",
        hints: [
          "With 2 significant figures in 47 000, what place value is the 7 in?",
          "Go half a unit below 47 000. Does that value round to 47 000?",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q09",
        question:
          "A metal block has mass 450 g, correct to the nearest 10 g, and volume 60 cm³, correct to the nearest 5 cm³. Using {{\"density\" = \"mass\"/\"volume\"}}, what is the lower bound of its density, correct to 3 significant figures?",
        options: ["7.74 g/cm³", "7.91 g/cm³", "7.50 g/cm³", "7.12 g/cm³"],
        answerIndex: 3,
        explanation:
          "Bounds: {{445 <= m < 455}} and {{57.5 <= V < 62.5}}. A fraction is smallest with the **smallest** top and the **largest** bottom: {{445/62.5 = 7.12}} g/cm³. 7.74 = 445 ÷ 57.5 uses the lower bound of both; 7.91 = 455 ÷ 57.5 is the upper bound; 7.50 ignores the bounds.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "Write down the bounds of the mass and of the volume. Half of 5 cm³ is 2.5 cm³.",
          "To make a division as small as possible, what do you want the denominator to be?",
          "Lower bound of mass ÷ upper bound of volume.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q10",
        question:
          "Two lengths are {{P = 15.4}} cm and {{Q = 9.7}} cm, each correct to 1 decimal place. What is the upper bound of {{P - Q}}?",
        options: ["5.8 cm", "5.7 cm", "5.6 cm", "5.75 cm"],
        answerIndex: 0,
        explanation:
          "To make a difference as big as possible, take the biggest {{P}} and **subtract the smallest** {{Q}}: 15.45 − 9.65 = **5.8 cm**. 5.7 cm comes from upper bound − upper bound (15.45 − 9.75), the most common slip. 5.6 cm is the lower bound, and 5.75 cm only bounds one of the lengths.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "Subtracting a bigger number gives a smaller answer. So which bound of {{Q}} do you want?",
          "Upper bound of P minus lower bound of Q.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q11",
        question: "Which of these numbers is divisible by both 4 and 9?",
        options: ["2034", "1448", "1836", "1236"],
        answerIndex: 2,
        explanation:
          "Test for 9: the digit sum is a multiple of 9. Test for 4: the last two digits make a multiple of 4. 1836: 1 + 8 + 3 + 6 = 18 ✓ and 36 ✓, so **1836** works (1836 = 36 × 51). 2034 passes for 9 but 34 is not a multiple of 4. 1448 passes for 4 (48 ✓) but its digit sum is 17. 1236 has digit sum 12 — divisible by 3, not 9: the 3-test is not the 9-test.",
        difficulty: "core",
        guideRef: "number-problems",
        hints: [
          "What is the quick test for divisibility by 9? And for 4?",
          "Check the digit sum, then the last two digits, for each option.",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q12",
        question: "Which of these numbers rounds to 3.50 when rounded correct to 3 significant figures?",
        options: ["3.4949", "3.495", "3.506", "3.45"],
        answerIndex: 1,
        explanation:
          "Rounding to 3.50 (3 s.f.) works for {{3.495 <= x < 3.505}}. **3.495** is the lower bound itself and rounds up to 3.50. 3.4949 is just below the bound, so it rounds to 3.49; 3.506 rounds to 3.51; 3.45 is already 3.45 to 3 s.f. (it would give 3.5 only to 2 s.f.).",
        difficulty: "core",
        guideRef: "rounding-estimation",
        hints: [
          "Write down the interval of numbers that round to 3.50 to 3 s.f.",
          "The lower bound is included; the upper bound is not.",
        ],
        strategy: "Use a number line",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q13",
        question:
          "A rectangular room measures 8.34 m by 3.17 m, each correct to 2 decimal places. Which value gives the area to a suitable degree of accuracy?",
        diagram: `<svg viewBox="0 0 300 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A rectangle labelled 8.34 m along the bottom and 3.17 m on the right side"><rect x="0" y="0" width="300" height="150" fill="#ffffff"/><rect x="30" y="25" width="220" height="84" fill="#bae6fd" stroke="#334155" stroke-width="2"/><text x="140" y="132" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">8.34 m</text><text x="258" y="71" font-size="13" font-family="sans-serif" fill="#1f2937">3.17 m</text></svg>`,
        options: ["26.4 m²", "26.44 m²", "30 m²", "26 m²"],
        answerIndex: 3,
        explanation:
          "Lower bound: 8.335 × 3.165 = 26.380… m². Upper bound: 8.345 × 3.175 = 26.495… m². To 3 s.f. these are 26.4 and 26.5 — they disagree, so 3 s.f. is too precise. To 2 s.f. both give **26 m²**, the most accurate value the bounds agree on. 26.4 and 26.44 come from rounding the calculated area without checking the bounds; 30 m² is consistent with the bounds but throws away accuracy.",
        difficulty: "challenge",
        guideRef: "bounds-calculations",
        hints: [
          "Work out the lower bound and the upper bound of the area.",
          "Round both bounds to 3 s.f. Do they agree? Then try 2 s.f.",
          "A suitable degree of accuracy is the most precise rounding on which both bounds agree.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q14",
        question: "Zara rounds a number {{x}} correct to 2 significant figures and writes 0.050. Which is the error interval for {{x}}?",
        options: [
          "{{0.045 <= x < 0.055}}",
          "{{0.0495 <= x < 0.0505}}",
          "{{0.04995 <= x < 0.05005}}",
          "{{0.0495 < x <= 0.0505}}",
        ],
        answerIndex: 1,
        explanation:
          "In 0.050 the significant figures are 5 and the final 0, so the last one is in the **thousandths** place: the unit is 0.001 and half of it is 0.0005. Interval: {{0.0495 <= x < 0.0505}}. {{0.045 <= x < 0.055}} treats 0.050 as 1 s.f. (ignoring the trailing zero); {{0.04995 <= x < 0.05005}} treats it as 3 s.f.; {{0.0495 < x <= 0.0505}} has the inequality signs the wrong way round.",
        difficulty: "challenge",
        guideRef: "error-intervals",
        hints: [
          "Leading zeros don't count, but a trailing zero after the decimal point does. Which place value is the last significant figure in?",
          "The rounding unit is 0.001. Go half a unit either side.",
        ],
        strategy: "Use a number line",
      },
      {
        kind: "mcq",
        id: "number-bounds-m2-q15",
        question: "{{N = 2^4 * 3^2 * 5}}. How many factors (positive divisors) does {{N}} have?",
        options: ["30", "7", "8", "15"],
        answerIndex: 0,
        explanation:
          "Every factor is {{2^a * 3^b * 5^c}} with {{a}} from 0–4 (5 choices), {{b}} from 0–2 (3 choices) and {{c}} from 0–1 (2 choices). By the product rule there are 5 × 3 × 2 = **30** factors. 7 adds the powers; 8 = 4 × 2 × 1 multiplies the powers but forgets that a power of 0 is allowed; 15 forgets the +1 for the prime 5.",
        difficulty: "challenge",
        guideRef: "number-problems",
        hints: [
          "Any factor of N is made from the same primes. What powers of 2 could it contain?",
          "The power of 2 in a factor can be 0, 1, 2, 3 or 4 — that's 5 choices.",
          "Count the choices for each prime and use the product rule.",
        ],
        strategy: "Count systematically",
      },
    ],
  },
  {
    id: "number-bounds-m3",
    title: "MCQ Paper 3 — Exam style",
    questions: [
      {
        kind: "mcq",
        id: "number-bounds-m3-q01",
        question: "Express 1500 as a product of its prime factors.",
        options: ["{{2^3 * 3 * 5^2}}", "{{2^2 * 3 * 5^3}}", "{{3 * 5 * 10^2}}", "{{2^2 * 3 * 5^2}}"],
        answerIndex: 1,
        explanation:
          "1500 = 15 × 100 = (3 × 5) × (2² × 5²) = {{2^2 * 3 * 5^3}}. {{3 * 5 * 10^2}} is correct in value but 10 is not prime. {{2^2 * 3 * 5^2}} = 300 loses a 5, and {{2^3 * 3 * 5^2}} = 600.",
        difficulty: "warmup",
        guideRef: "prime-factors-hcf-lcm",
        hints: ["Split 1500 into easy factors (like 15 × 100), then break each of those into primes."],
        strategy: "Use prime factors",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q02",
        question: "Use your calculator to work out {{(7.8 + 2.65^2)/(sqrt(14.2) - 1.9)}}. Give your answer correct to 3 significant figures.",
        options: ["7.93", "11.6", "4.23", "5.59"],
        answerIndex: 0,
        explanation:
          "Top: {{7.8 + 2.65^2 = 7.8 + 7.0225 = 14.8225}}. Bottom: {{sqrt(14.2) - 1.9 = 3.76828… - 1.9 = 1.86828…}}. 14.8225 ÷ 1.86828… = 7.9337… = **7.93**. 11.6 only divides the {{2.65^2}} (no brackets round the top); 4.23 takes the square root of 14.2 − 1.9; 5.59 forgets to square 2.65.",
        difficulty: "warmup",
        guideRef: "rounding-estimation",
        hints: ["Work out the numerator and the denominator separately, writing down all the figures, before dividing."],
        strategy: "Work step by step",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q03",
        question: "The length, {{L}} metres, of a corridor in an HDB flat is 4.6 m, correct to the nearest 10 cm. Which is the error interval for {{L}}?",
        options: ["{{4.5 <= L < 4.7}}", "{{4.595 <= L < 4.605}}", "{{4.55 < L <= 4.65}}", "{{4.55 <= L < 4.65}}"],
        answerIndex: 3,
        explanation:
          "10 cm = 0.1 m, so half a unit is 0.05 m: {{4.55 <= L < 4.65}}. {{4.595 <= L < 4.605}} treats it as the nearest *centimetre*; {{4.5 <= L < 4.7}} uses a whole unit; {{4.55 < L <= 4.65}} has the ≤ and < at the wrong ends.",
        difficulty: "warmup",
        guideRef: "error-intervals",
        hints: ["Convert 10 cm to metres first, then halve it."],
        strategy: "Use a number line",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q04",
        question: "Wei Ling posts 12 parcels. Each parcel has a mass of 2.5 kg, correct to the nearest 0.1 kg. What is the upper bound of the total mass?",
        options: ["31.2 kg", "30.05 kg", "30.6 kg", "30 kg"],
        answerIndex: 2,
        explanation:
          "Each parcel could be up to 2.55 kg, so the total could be up to 12 × 2.55 = **30.6 kg**. 30.05 kg adds the 0.05 only once — but every parcel carries its own error. 31.2 kg = 12 × 2.6 adds a whole unit; 30 kg ignores the bounds.",
        difficulty: "warmup",
        guideRef: "bounds-calculations",
        hints: ["Find the upper bound of **one** parcel first. Every one of the 12 could be that heavy."],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q05",
        question:
          "Two lighthouses flash every 45 seconds and every 60 seconds. They flash together at exactly 9 pm. How many more times will they flash together after 9 pm, up to and including 10 pm?",
        options: ["20", "240", "80", "1"],
        answerIndex: 0,
        explanation:
          "{{45 = 3^2 * 5}} and {{60 = 2^2 * 3 * 5}}, so LCM = {{2^2 * 3^2 * 5 = 180}} s = 3 minutes. In 3600 s they flash together 3600 ÷ 180 = **20** more times. 240 = 3600 ÷ 15 uses the HCF; 80 = 3600 ÷ 45 counts one lighthouse only; 1 uses the product 45 × 60 = 2700 s.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "How often do they flash together? That's a common multiple of 45 and 60 — which one?",
          "Find the LCM in seconds, then see how many fit into one hour (3600 s).",
        ],
        strategy: "Use prime factors",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q06",
        question: "{{p}} and {{q}} are different prime numbers. What is the HCF of {{p^3 q^2}} and {{p^2 q^5}}?",
        options: ["{{p^3 q^5}}", "{{p^5 q^7}}", "{{pq}}", "{{p^2 q^2}}"],
        answerIndex: 3,
        explanation:
          "For the HCF take each common prime to the **lower** power: {{p^2}} and {{q^2}}, giving {{p^2 q^2}}. {{p^3 q^5}} takes the higher powers — that's the LCM. {{p^5 q^7}} is the product of the two numbers. {{pq}} is a common factor, but not the highest.",
        difficulty: "core",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "This works exactly like numbers in index form. How many p's do both numbers contain?",
          "For each prime, use the smaller power.",
        ],
        strategy: "Use prime factors",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q07",
        question: "By rounding each number to 1 significant figure, estimate the value of {{sqrt(98.6) * 2.03^3}}.",
        options: ["60", "800", "80", "20"],
        answerIndex: 2,
        explanation:
          "98.6 → 100 and 2.03 → 2, so {{sqrt(100) * 2^3 = 10 * 8 = 80}}. 60 treats {{2^3}} as 2 × 3; 800 forgets the square root; 20 forgets to cube.",
        difficulty: "core",
        guideRef: "rounding-estimation",
        hints: [
          "Round first, then deal with the root and the power.",
          "{{sqrt(100) = 10}} and {{2^3 = 8}}.",
        ],
        strategy: "Estimate first",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q08",
        question: "The number of people at a concert at the Singapore Indoor Stadium was 2400, correct to the nearest 50. What is the greatest possible number of people at the concert?",
        options: ["2425", "2424", "2449", "2450"],
        answerIndex: 1,
        explanation:
          "To the nearest 50, the error interval is {{2375 <= n < 2425}}. People come in whole numbers, so the greatest possible number is **2424**. 2425 is the upper bound, but 2425 would round to 2450, so it is not allowed. 2449 uses the nearest 100; 2450 adds a whole 50.",
        difficulty: "core",
        guideRef: "error-intervals",
        hints: [
          "Write the error interval first: half of 50 either side of 2400.",
          "The upper bound itself is not included. What's the largest *whole number* below it?",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q09",
        question:
          "Hana cycles 18 km, correct to the nearest km, at an average speed of 12 km/h, correct to the nearest km/h. What is the upper bound of the time taken, in minutes, correct to 3 significant figures?",
        options: ["88.8 minutes", "96.5 minutes", "84.0 minutes", "90.0 minutes"],
        answerIndex: 1,
        explanation:
          "{{\"time\" = \"distance\"/\"speed\"}}. Biggest time = biggest distance ÷ smallest speed = {{18.5/11.5 = 1.6087…}} h = 1.6087… × 60 = 96.52… → **96.5 minutes**. 88.8 = 18.5 ÷ 12.5 × 60 divides upper by upper; 84.0 = 17.5 ÷ 12.5 × 60 is the lower bound; 90.0 ignores the bounds.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "Which formula links time, distance and speed?",
          "To make the time as long as possible: far distance, slow speed.",
          "Use 18.5 ÷ 11.5, then convert hours to minutes.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q10",
        question: "The radius of a circular pond is 6.2 m, correct to 1 decimal place. What is the lower bound of the area of the pond, correct to 3 significant figures?",
        options: ["117 m²", "121 m²", "38.6 m²", "119 m²"],
        answerIndex: 3,
        explanation:
          "Lower bound of the radius = 6.15 m, so the smallest area is {{pi * 6.15^2 = 118.82…}} → **119 m²**. 117 m² uses 6.1 m (taking off a whole 0.1); 121 m² uses 6.2 m itself; 38.6 m is the circumference {{2 pi r}}, not the area.",
        difficulty: "core",
        guideRef: "bounds-calculations",
        hints: [
          "Find the lower bound of the radius.",
          "Area = {{pi r^2}} — substitute the lower bound.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q11",
        question: "The product of any three consecutive positive integers is always divisible by which of these numbers?",
        options: ["6", "4", "9", "12"],
        answerIndex: 0,
        explanation:
          "In any three consecutive integers at least one is even and exactly one is a multiple of 3, so the product is always divisible by 2 × 3 = **6**. One counterexample kills the others: 1 × 2 × 3 = 6 is not divisible by 4, 9 or 12. (2 × 3 × 4 = 24 *is* divisible by 4 and 12 — but 'always' needs every case.)",
        difficulty: "core",
        guideRef: "number-problems",
        hints: [
          "Try small cases: 1 × 2 × 3, 2 × 3 × 4, 3 × 4 × 5. What do they all share?",
          "Among three consecutive integers, how many are even? How many are multiples of 3?",
        ],
        strategy: "Try small cases",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q12",
        question: "A calculator display shows 0.0003049. What is this number correct to 2 significant figures?",
        options: ["0.0003", "0.00", "0.00030", "0.000305"],
        answerIndex: 2,
        explanation:
          "The first significant figure is the 3; the second is the 0 after it. The next digit (4) is less than 5, so round down: **0.00030**. The final zero must be written — it shows 2 s.f. 0.0003 is only 1 s.f.; 0.00 is 2 *decimal places*; 0.000305 is 3 s.f.",
        difficulty: "core",
        guideRef: "rounding-estimation",
        hints: [
          "Start counting at the first non-zero digit. Zeros *after* that count.",
          "Should a zero at the end be written down if it is one of the significant figures?",
        ],
        strategy: "Look at the next digit",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q13",
        question:
          "{{x = 2.5}} and {{y = 0.4}}, each correct to 1 decimal place. What is the upper bound of {{x/y^2}}, correct to 3 significant figures?",
        options: ["12.6", "15.6", "15.9", "20.8"],
        answerIndex: 3,
        explanation:
          "Biggest top ÷ smallest bottom: {{2.55/0.35^2 = 2.55/0.1225 = 20.816…}} → **20.8**. 12.6 = {{2.55/0.45^2}} uses upper bounds throughout; 15.6 = {{2.5/0.4^2}} ignores the bounds; 15.9 bounds only {{x}}. Notice how sensitive the answer is: a small change in {{y}} is squared and then sits in the denominator.",
        difficulty: "challenge",
        guideRef: "bounds-calculations",
        hints: [
          "Write down the bounds of x and of y.",
          "To maximise a fraction, the denominator {{y^2}} should be as small as possible.",
          "Use {{x = 2.55}} and {{y = 0.35}}.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q14",
        question: "The HCF of 48 and a positive integer {{n}} is 12. The LCM of 48 and {{n}} is 240. What is {{n}}?",
        options: ["60", "5", "20", "2880"],
        answerIndex: 0,
        explanation:
          "For any two numbers, HCF × LCM = the product of the numbers, so {{48n = 12 * 240 = 2880}} and {{n = 60}}. Check: {{48 = 2^4 * 3}}, {{60 = 2^2 * 3 * 5}}: HCF = {{2^2 * 3 = 12}} ✓, LCM = {{2^4 * 3 * 5 = 240}} ✓. 5 = 240 ÷ 48; 20 = 240 ÷ 12; 2880 forgets to divide by 48.",
        difficulty: "challenge",
        guideRef: "prime-factors-hcf-lcm",
        hints: [
          "Write 48 and 240 as products of primes. What must {{n}} contain to push the LCM up to 240?",
          "There's a shortcut linking HCF, LCM and the two numbers. Test it on 4 and 6.",
          "HCF × LCM = 48 × n.",
        ],
        strategy: "Use prime factors",
      },
      {
        kind: "mcq",
        id: "number-bounds-m3-q15",
        question: "How many of the integers from 1 to 200 inclusive are divisible by 6 or by 8 (or both)?",
        options: ["58", "50", "54", "8"],
        answerIndex: 1,
        explanation:
          "Multiples of 6: 33. Multiples of 8: 25. Numbers divisible by both are multiples of LCM(6, 8) = 24: there are 8, and they were counted twice. So 33 + 25 − 8 = **50**. 58 forgets to remove the double-counted numbers; 54 subtracts multiples of 48 (= 6 × 8) instead of 24; 8 counts only the numbers divisible by both.",
        difficulty: "challenge",
        guideRef: "number-problems",
        hints: [
          "Count the multiples of 6 and the multiples of 8 up to 200.",
          "Some numbers are in both lists. Which numbers are multiples of 6 *and* of 8?",
          "Those are the multiples of LCM(6, 8) — subtract them once.",
        ],
        strategy: "Draw a diagram",
      },
    ],
  },
];
