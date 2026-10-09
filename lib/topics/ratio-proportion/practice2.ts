// ---------------------------------------------------------------------------
// Ratio, Rates & Proportion — Practice Papers 3 and 4.
// Paper 3: mixed practice across every section, mostly auto-marked.
// Paper 4: exam style — modelled on Edexcel 4MA1 Higher questions
// (contexts, multi-step, "show that", exact and 3 s.f. answers).
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "ratio-proportion-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "ratio-proportion-p3-q01",
        question:
          "A large bottle of soy sauce holds 1.8 litres. A small bottle holds 750 ml. Write the ratio of the larger volume to the smaller volume in its simplest form.",
        answer: { type: "ratio", parts: [12, 5], simplest: true, display: "12 : 5" },
        traps: [
          {
            spec: { type: "ratio", parts: [3, 1250] },
            feedback:
              "You've compared 1.8 with 750 without converting units. A ratio only makes sense when both parts are in the same unit: 1.8 litres = 1800 ml.",
          },
        ],
        solution: ["Same units first: 1.8 litres = 1800 ml.", "1800 : 750.", "Divide both parts by 150 (the HCF): 12 : 5."],
        commonError: "Writing 1.8 : 750 and simplifying it, which mixes litres with millilitres.",
        difficulty: "warmup",
        guideRef: "ratio-basics",
        hints: ["Are both volumes in the same unit?", "Convert 1.8 litres to millilitres, then divide both parts by their HCF."],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "ratio-proportion-p3-q02",
        question:
          "On a CCA overseas trip there are 12 teachers and 87 students. Write the ratio teachers : students in the form 1 : n. Give the value of n.",
        answer: { type: "number", value: 7.25, display: "n = 7.25" },
        traps: [
          {
            spec: { type: "number", value: 0.13793103448275862, tolerance: 0.001 },
            feedback: "You've worked out 12 ÷ 87. In the form 1 : n the *first* part becomes 1, so divide both parts by 12.",
          },
        ],
        solution: ["To make the first part 1, divide both parts by 12.", "12 : 87 = 1 : {{87/12}} = 1 : 7.25.", "So n = 7.25."],
        commonError: "Dividing by the wrong part, or rounding n to a whole number — n does not have to be an integer.",
        difficulty: "warmup",
        guideRef: "ratio-basics",
        hints: ["What do you divide 12 by to get 1?", "Do the same to 87."],
        strategy: "Use a unit ratio",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "ratio-proportion-p3-q03",
        question:
          "An express bus travels 18 km along the ECP in 24 minutes. Work out the average speed of the bus. Give your answer in km/h.",
        answer: { type: "number", value: 45, display: "45 km/h" },
        traps: [
          { spec: { type: "number", value: 0.75 }, feedback: "0.75 is the speed in km per *minute*. There are 60 minutes in an hour, so multiply by 60." },
          { spec: { type: "number", value: 75 }, feedback: "You've used 24 minutes as 0.24 hours. 24 minutes is {{24/60}} = 0.4 hours." },
        ],
        solution: ["24 minutes = {{24/60}} = 0.4 hours.", "Speed = distance ÷ time = 18 ÷ 0.4 = 45 km/h."],
        solutions: [
          { label: "Scale up to an hour", steps: ["24 minutes × 2.5 = 60 minutes.", "18 km × 2.5 = 45 km in one hour, so 45 km/h."] },
        ],
        commonError: "Writing 24 minutes as 0.24 hours.",
        difficulty: "warmup",
        guideRef: "compound-measures",
        hints: ["The answer must be in km per *hour*. What is 24 minutes in hours?", "Speed = distance ÷ time."],
        strategy: "Check the units",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "ratio-proportion-p3-q04",
        question:
          "A hiking map of Bukit Timah Nature Reserve has a scale of 1 : 20 000. A trail is 8.5 cm long on the map. Work out the real length of the trail. Give your answer in kilometres.",
        answer: { type: "number", value: 1.7, display: "1.7 km" },
        traps: [
          { spec: { type: "number", value: 170 }, feedback: "170 000 cm = 1700 m = 1.7 km. Check your conversion: 100 000 cm make one kilometre." },
          { spec: { type: "number", value: 17 }, feedback: "Check the conversion from centimetres to kilometres: divide by 100 000, not 10 000." },
        ],
        solution: ["Real length = 8.5 × 20 000 = 170 000 cm.", "170 000 cm ÷ 100 = 1700 m.", "1700 m ÷ 1000 = 1.7 km."],
        commonError: "Dividing by 1000 only once when converting centimetres to kilometres.",
        difficulty: "warmup",
        guideRef: "ratio-problems",
        hints: ["1 cm on the map is 20 000 cm in real life.", "Then convert cm → m → km."],
        strategy: "Check the units",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "ratio-proportion-p3-q05",
        question:
          "In a school orchestra, the ratio of strings to woodwind is 5 : 2 and the ratio of woodwind to brass is 3 : 4. Write the ratio strings : woodwind : brass in its simplest form.",
        answer: { type: "ratio", parts: [15, 6, 8], simplest: true, display: "15 : 6 : 8" },
        traps: [
          {
            spec: { type: "ratio", parts: [5, 2, 4] },
            feedback: "The woodwind part is 2 in one ratio and 3 in the other, so you can't just glue them together. Make the woodwind parts equal first.",
          },
          {
            spec: { type: "ratio", parts: [30, 12, 16] },
            feedback: "Right idea, but this isn't in its simplest form — every part has a factor of 2.",
          },
        ],
        solution: [
          "The shared quantity is woodwind: it is 2 in the first ratio and 3 in the second.",
          "LCM of 2 and 3 is 6.",
          "Strings : woodwind = 5 : 2 = 15 : 6.",
          "Woodwind : brass = 3 : 4 = 6 : 8.",
          "So strings : woodwind : brass = 15 : 6 : 8 (no common factor).",
        ],
        commonError: "Writing 5 : 2 : 4 or 5 : 3 : 4 without matching the woodwind parts.",
        difficulty: "core",
        guideRef: "ratio-basics",
        hints: [
          "Which group appears in both ratios?",
          "Make the woodwind number the same in both ratios.",
          "Scale both ratios so woodwind is 6 (the LCM of 2 and 3).",
        ],
        strategy: "Find a common link",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "ratio-proportion-p3-q06",
        question:
          "Siti, Jun and Kenji share some prize money in the ratio 5 : 3 : 2. Kenji receives $84. Work out the total amount of prize money. Give your answer in dollars.",
        answer: { type: "number", value: 420, display: "$420" },
        traps: [
          { spec: { type: "number", value: 210 }, feedback: "$210 is Siti's share. The question asks for the *total*." },
          { spec: { type: "number", value: 840 }, feedback: "You've treated $84 as one part. Kenji has 2 parts, so one part is $42." },
        ],
        solution: [
          "Kenji's share is 2 parts.",
          "2 parts = $84, so 1 part = $42.",
          "Total = 5 + 3 + 2 = 10 parts = 10 × 42 = $420.",
        ],
        solutions: [
          { label: "Fraction of the total", steps: ["Kenji gets {{2/10}} = {{1/5}} of the total.", "{{1/5}} of the total = $84.", "Total = 5 × 84 = $420."] },
        ],
        commonError: "Treating Kenji's $84 as one part, or dividing $84 by the 10 total parts.",
        difficulty: "core",
        guideRef: "ratio-basics",
        hints: [
          "How many parts is Kenji's share?",
          "Those parts are worth $84. What is one part worth?",
          "How many parts are there in total?",
        ],
        strategy: "Use a bar model",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "ratio-proportion-p3-q07",
        question:
          "A car travels at a constant speed of 72 km/h along the PIE. How far does it travel in 45 seconds? Give your answer in metres.",
        answer: { type: "number", value: 900, display: "900 m" },
        traps: [
          { spec: { type: "number", value: 3240 }, feedback: "You've multiplied 72 by 45, mixing km/h with seconds. Convert 72 km/h to metres per second first." },
          { spec: { type: "number", value: 0.9 }, feedback: "0.9 is the distance in kilometres. The question asks for metres." },
        ],
        solution: [
          "72 km/h = 72 000 m in 3600 s.",
          "72 000 ÷ 3600 = 20 m/s.",
          "Distance = speed × time = 20 × 45 = 900 m.",
        ],
        solutions: [
          { label: "Fraction of an hour", steps: ["45 s = {{45/3600}} = {{1/80}} hour.", "Distance = 72 × {{1/80}} = 0.9 km = 900 m."] },
        ],
        commonError: "Multiplying km/h by seconds without converting.",
        difficulty: "core",
        guideRef: "compound-measures",
        hints: [
          "The speed is per hour but the time is in seconds. Make them match.",
          "How many metres per second is 72 km/h?",
          "To change km/h to m/s, × 1000 then ÷ 3600 (or just ÷ 3.6).",
        ],
        strategy: "Check the units",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "ratio-proportion-p3-q08",
        question:
          "A brass alloy is made by melting together 540 g of copper and 280 g of zinc.\n\n- Density of copper = 9 g/cm³\n- Density of zinc = 7 g/cm³\n\nAssuming the volume of the alloy is the sum of the two volumes, work out the density of the alloy. Give your answer in g/cm³.",
        answer: { type: "number", value: 8.2, display: "8.2 g/cm³" },
        traps: [
          { spec: { type: "number", value: 8 }, feedback: "You've averaged the two densities. There is more copper than zinc, and different volumes of each — work out the total mass and total volume instead." },
        ],
        solution: [
          "Volume of copper = mass ÷ density = 540 ÷ 9 = 60 cm³.",
          "Volume of zinc = 280 ÷ 7 = 40 cm³.",
          "Total mass = 540 + 280 = 820 g. Total volume = 60 + 40 = 100 cm³.",
          "Density of alloy = 820 ÷ 100 = 8.2 g/cm³.",
        ],
        commonError: "Taking the mean of the two densities, (9 + 7) ÷ 2 = 8.",
        difficulty: "core",
        guideRef: "compound-measures",
        hints: [
          "Density of the alloy = total mass ÷ total volume.",
          "You know the total mass. How do you find each metal's volume?",
          "Volume = mass ÷ density, for each metal separately.",
        ],
        strategy: "Break it into steps",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "ratio-proportion-p3-q09",
        question:
          "y is directly proportional to {{x^2}}. When x = 4, y = 48.\n\nWork out the positive value of x when y = 243.",
        answer: { type: "number", value: 9, display: "x = 9" },
        traps: [
          { spec: { type: "number", value: 81 }, feedback: "81 is {{x^2}}. Take the square root to find x." },
          { spec: { type: "number", value: 20.25 }, feedback: "You've used y = kx (straight proportion). The question says y is proportional to {{x^2}}." },
        ],
        solution: [
          "y = k{{x^2}}.",
          "48 = k × 16, so k = 3 and y = 3{{x^2}}.",
          "243 = 3{{x^2}}, so {{x^2}} = 81.",
          "x = 9 (positive value).",
        ],
        commonError: "Stopping at {{x^2}} = 81, or using y = kx.",
        difficulty: "core",
        guideRef: "direct-proportion",
        hints: [
          "Write the proportion as an equation with a constant k.",
          "Substitute x = 4, y = 48 to find k.",
          "Now put y = 243 into y = 3{{x^2}} and solve.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "ratio-proportion-p3-q10",
        question:
          "A team of 12 volunteers would take 15 days to repaint the void decks of an HDB estate. After the team has worked for 5 days, the town council asks for the job to be finished in exactly 4 more days. All volunteers work at the same rate.\n\nHow many **extra** volunteers must join the team?",
        answer: { type: "number", value: 18, display: "18 extra volunteers" },
        traps: [
          { spec: { type: "number", value: 30 }, feedback: "30 is the total number of volunteers needed for the last 4 days. 12 are already on the team — how many *extra*?" },
          { spec: { type: "number", value: 33 }, feedback: "That shares the *whole* job (180 volunteer-days) over 4 days. A third of the job was already done in the first 5 days." },
        ],
        solution: [
          "Total work = 12 volunteers × 15 days = 180 volunteer-days.",
          "In the first 5 days: 12 × 5 = 60 volunteer-days done.",
          "Work left = 180 − 60 = 120 volunteer-days.",
          "To do 120 volunteer-days in 4 days needs 120 ÷ 4 = 30 volunteers.",
          "Extra volunteers = 30 − 12 = 18.",
        ],
        commonError: "Forgetting the work already done, or giving the total team size instead of the number of extra volunteers.",
        difficulty: "core",
        guideRef: "inverse-proportion",
        hints: [
          "Measure the job in 'volunteer-days' — the amount one volunteer does in one day.",
          "How much of the job is done in the first 5 days? How much is left?",
          "How many volunteers can do the remaining volunteer-days in 4 days? Then subtract the 12 already working.",
        ],
        strategy: "Break it into steps",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "written",
        id: "ratio-proportion-p3-q11",
        question:
          "A supermarket sells soy milk in two sizes.\n\n| Size | Price |\n|---|---|\n| 750 ml | $3.20 |\n| 1.2 litres | $4.95 |\n\nMei says the smaller carton is better value because it is cheaper. Show that Mei is wrong.",
        marks: 3,
        modelAnswer:
          "Compare the cost per litre.\n\n750 ml = 0.75 litres: $3.20 ÷ 0.75 = $4.27 per litre (to the nearest cent).\n\n1.2 litres: $4.95 ÷ 1.2 = $4.125 per litre.\n\n$4.125 < $4.27, so the 1.2 litre carton is cheaper per litre — it is better value. Mei is wrong: a lower price does not mean better value when the amounts differ.",
        markScheme: [
          { point: "Finds a comparable unit rate for the 750 ml carton, e.g. $4.27 per litre or 234 ml per dollar", keywords: ["4.27", "4.266", "0.427", "234", "per litre", "per 100"] },
          { point: "Finds the comparable unit rate for the 1.2 litre carton, e.g. $4.125 per litre or 242 ml per dollar", keywords: ["4.125", "4.13", "0.4125", "242", "per litre"] },
          { point: "Concludes the 1.2 litre carton is better value, with comparison", keywords: ["1.2", "larger", "bigger", "better value", "cheaper per"] },
        ],
        commonError: "Comparing the prices only, or comparing price per ml without using a common unit (ml with litres).",
        difficulty: "core",
        guideRef: "ratio-problems",
        hints: [
          "Being cheaper isn't the same as being better value. What should you compare?",
          "Work out the cost of the same amount (e.g. 1 litre) for each carton.",
          "Convert 750 ml to litres first: 0.75 litres.",
        ],
        strategy: "Compare like with like",
        solutions: [
          { label: "Amount per dollar", steps: ["750 ÷ 3.20 = 234 ml per dollar.", "1200 ÷ 4.95 = 242 ml per dollar.", "More milk per dollar for the 1.2 litre carton, so it is better value."] },
        ],
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "ratio-proportion-p3-q12",
        question:
          "Aisha and Ravi collect stickers. The ratio of Aisha's stickers to Ravi's stickers is 7 : 3. Aisha gives Ravi 24 stickers. The ratio is now 3 : 2.\n\nHow many stickers did Aisha have at the start?",
        answer: { type: "number", value: 168, display: "168 stickers" },
        traps: [
          { spec: { type: "number", value: 240 }, feedback: "240 is the total number of stickers. The question asks how many Aisha had at the start." },
          { spec: { type: "number", value: 144 }, feedback: "144 is how many Aisha has *after* giving 24 away. Add the 24 back on." },
        ],
        solution: [
          "The total number of stickers doesn't change. Call it T.",
          "Before: Aisha has {{7/10}}T. After: Aisha has {{3/5}}T = {{6/10}}T.",
          "Aisha lost 24 stickers, so {{7/10}}T − {{6/10}}T = 24, i.e. {{1/10}}T = 24.",
          "T = 240, so Aisha started with {{7/10}} × 240 = 168.",
          "Check: 168 − 24 = 144 and 72 + 24 = 96; 144 : 96 = 3 : 2 ✓.",
        ],
        solutions: [
          {
            label: "Match the totals",
            steps: [
              "7 : 3 has 10 parts; 3 : 2 has 5 parts. Write 3 : 2 as 6 : 4 so both have 10 parts.",
              "Aisha goes from 7 parts to 6 parts: 1 part = 24 stickers.",
              "Aisha started with 7 × 24 = 168.",
            ],
          },
        ],
        commonError: "Treating the parts of 7 : 3 and 3 : 2 as the same size — they aren't until the totals match.",
        difficulty: "core",
        guideRef: "ratio-problems",
        hints: [
          "What stays the same when Aisha gives stickers to Ravi?",
          "The total is fixed. Rewrite both ratios so they have the same total number of parts.",
          "7 : 3 and 6 : 4 both have 10 parts. How many parts did Aisha lose?",
        ],
        strategy: "Look for an invariant",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "ratio-proportion-p3-q13",
        question:
          "Here are some values of x and y.\n\n| x | 2 | 3 | 6 |\n|---|---|---|---|\n| y | 54 | 16 | 2 |\n\nShow that y is inversely proportional to the cube of x, and work out the value of y when x = 4.",
        marks: 4,
        modelAnswer:
          "If y is inversely proportional to {{x^3}} then y = {{k/x^3}}, so {{x^3}}y = k is constant.\n\nTest y ∝ {{1/x}}: xy = 108, 48, 12 — not constant. Test {{x^2}}y = 216, 144, 72 — not constant.\n\n{{x^3}}y: 8 × 54 = 432, 27 × 16 = 432, 216 × 2 = 432. Constant, so y = {{432/x^3}} and y is inversely proportional to {{x^3}}.\n\nWhen x = 4: y = {{432/64}} = 6.75.",
        markScheme: [
          { point: "States that for y ∝ 1/x³ the product x³y must be constant (y = k/x³)", keywords: ["constant", "k/x^3", "x^3y", "x³y", "same"] },
          { point: "Calculates x³y = 432 for all three pairs", keywords: ["432"] },
          { point: "Writes the formula y = 432/x³", keywords: ["432/x", "y = 432", "k = 432"] },
          { point: "y = 6.75 when x = 4", keywords: ["6.75", "27/4"] },
        ],
        commonError: "Checking only one pair of values — you need every pair to give the same constant.",
        difficulty: "challenge",
        guideRef: "inverse-proportion",
        hints: [
          "If y = {{k/x^n}}, what combination of x and y stays constant?",
          "Try xy, then {{x^2}}y, then {{x^3}}y for each column.",
          "{{x^3}}y gives the same number every time. That number is k.",
        ],
        strategy: "Find a pattern",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "ratio-proportion-p3-q14",
        question:
          "The ratio of Arjun's age to his mother's age is 2 : 7. In 8 years' time, the ratio of Arjun's age to his mother's age will be 2 : 5.\n\nHow old is Arjun's mother now? Give your answer in years.",
        answer: { type: "number", value: 42, display: "42 years" },
        traps: [
          { spec: { type: "number", value: 12 }, feedback: "12 is Arjun's age now. The question asks for his mother's age." },
          { spec: { type: "number", value: 50 }, feedback: "50 is the mother's age *in 8 years' time*. The question asks how old she is now." },
        ],
        solution: [
          "Let Arjun be 2k and his mother 7k now.",
          "In 8 years: (2k + 8) : (7k + 8) = 2 : 5, so {{(2k + 8)/(7k + 8) = 2/5}}.",
          "Cross-multiply: 5(2k + 8) = 2(7k + 8), so 10k + 40 = 14k + 16.",
          "4k = 24, so k = 6.",
          "Mother = 7 × 6 = 42 years. Check: now 12 : 42 = 2 : 7; in 8 years 20 : 50 = 2 : 5 ✓.",
        ],
        solutions: [
          {
            label: "The age gap never changes",
            steps: [
              "The difference in ages is fixed. Now it is 7 − 2 = 5 parts; in 8 years it is 5 − 2 = 3 parts.",
              "Use 15 parts for the gap in both: now 2 : 7 = 6 : 21, later 2 : 5 = 10 : 25.",
              "Arjun goes from 6 parts to 10 parts — 4 parts = 8 years, so 1 part = 2 years.",
              "Mother now = 21 parts = 42 years.",
            ],
          },
        ],
        commonError: "Adding 8 to the ratio numbers (2 + 8 : 7 + 8) instead of to the ages, or treating the parts before and after as the same size.",
        difficulty: "challenge",
        guideRef: "ratio-basics",
        hints: [
          "Both ages change by 8, so the total changes too — call the ages 2k and 7k.",
          "Write both ages in 8 years' time in terms of k and form an equation from the new ratio.",
          "{{(2k + 8)/(7k + 8) = 2/5}}. Cross-multiply and solve for k.",
          "Or: what stays the same as people get older? Make that quantity the same number of parts in both ratios.",
        ],
        strategy: "Look for an invariant",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "ratio-proportion-p3-q15",
        question:
          "Kenji cycles 18 km up a hill road at an average speed of 12 km/h. He rests for 10 minutes at the top. He then cycles back down the same road at an average speed of 36 km/h.\n\nKenji says his average speed for the whole trip, including the rest, is (12 + 36) ÷ 2 = 24 km/h. Show that he is wrong and that his average speed is 16.6 km/h, correct to 3 significant figures.",
        marks: 3,
        modelAnswer:
          "Time up = 18 ÷ 12 = 1.5 hours. Time down = 18 ÷ 36 = 0.5 hours. Rest = 10 minutes = {{10/60 = 1/6}} hour.\n\nTotal time = 1.5 + {{1/6}} + 0.5 = {{13/6}} hours (2.1666… h).\n\nTotal distance = 18 + 18 = 36 km, so average speed = 36 ÷ {{13/6}} = {{216/13}} = 16.615… = 16.6 km/h (3 s.f.).\n\nKenji is wrong: he spends three times as long going up as coming down, and the rest adds time but no distance, so you can't just average the two speeds.",
        markScheme: [
          { point: "Finds the time for each leg: 1.5 h up and 0.5 h down", keywords: ["1.5", "0.5", "90 min", "30 min"] },
          { point: "Converts the rest to hours and finds the total time 13/6 h (2.17 h or 130 minutes)", keywords: ["1/6", "0.167", "13/6", "2.17", "2.166", "130"] },
          { point: "Total distance 36 km ÷ total time = 16.6 km/h, with a reason why 24 is wrong", keywords: ["36", "16.6", "16.61", "216/13", "not the mean", "longer"] },
        ],
        commonError: "Averaging the two speeds, forgetting the rest, or writing 10 minutes as 0.1 hours.",
        difficulty: "challenge",
        guideRef: "compound-measures",
        hints: [
          "Average speed = total distance ÷ total time. What is the total distance?",
          "Find the time for each leg, and write 10 minutes as a fraction of an hour.",
          "Total time = 1.5 + {{1/6}} + 0.5 hours.",
        ],
        strategy: "Break it into steps",
        solutions: [
          { label: "Work in minutes", steps: ["Up: 90 minutes. Rest: 10 minutes. Down: 30 minutes. Total 130 minutes.", "36 km in 130 minutes = {{36/130}} km per minute.", "× 60: {{36 * 60/130}} = 16.615… ≈ 16.6 km/h."] },
        ],
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "ratio-proportion-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "ratio-proportion-p4-q01",
        question:
          "The ratio of the number of boys to the number of girls in a school choir is 4 : 5. There are 45 girls in the choir.\n\nWork out the total number of children in the choir.",
        answer: { type: "number", value: 81, display: "81" },
        traps: [
          { spec: { type: "number", value: 36 }, feedback: "36 is the number of boys. The question asks for the total." },
          { spec: { type: "number", value: 405 }, feedback: "You've multiplied 45 by 9. The girls are 5 parts, so one part is 45 ÷ 5 = 9." },
        ],
        solution: ["Girls = 5 parts = 45, so 1 part = 9.", "Total = 4 + 5 = 9 parts = 9 × 9 = 81."],
        commonError: "Dividing 45 by 9 (the total parts) instead of by 5 (the girls' parts).",
        difficulty: "warmup",
        guideRef: "ratio-basics",
        hints: ["How many parts do the girls represent?", "Find one part, then multiply by the total number of parts."],
        strategy: "Find one part first",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "ratio-proportion-p4-q02",
        question:
          "A gold bar has a mass of 12.5 kg. The density of gold is 19.3 g/cm³.\n\nWork out the volume of the gold bar. Give your answer in cm³ correct to 3 significant figures.",
        answer: { type: "number", value: 648, tolerance: 0.5, display: "648 cm³" },
        traps: [
          { spec: { type: "number", value: 0.648, tolerance: 0.001 }, feedback: "You've used 12.5 kg with a density in g/cm³. Convert the mass to grams first: 12 500 g." },
          { spec: { type: "number", value: 241250 }, feedback: "You've multiplied mass by density. Volume = mass ÷ density." },
        ],
        solution: ["Mass = 12.5 kg = 12 500 g.", "Volume = mass ÷ density = 12 500 ÷ 19.3 = 647.66… cm³.", "= 648 cm³ (3 s.f.)."],
        commonError: "Not converting kilograms to grams, giving 0.648.",
        difficulty: "warmup",
        guideRef: "compound-measures",
        hints: ["The density is in grams per cm³. Is the mass in grams?", "Volume = mass ÷ density."],
        strategy: "Check the units",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "ratio-proportion-p4-q03",
        question:
          "Here are the ingredients needed to make 6 pancakes.\n\n| Ingredient | Amount |\n|---|---|\n| Flour | 150 g |\n| Eggs | 2 |\n| Milk | 240 ml |\n\nHana has 500 g of flour, 7 eggs and 1 litre of milk. Work out the greatest number of pancakes Hana can make.",
        answer: { type: "number", value: 20, display: "20 pancakes" },
        traps: [
          { spec: { type: "number", value: 25 }, feedback: "There's enough milk for 25 pancakes, but you'll run out of flour first. The ingredient that runs out first limits you." },
          { spec: { type: "number", value: 21 }, feedback: "There are enough eggs for 21, but the flour only stretches to 20." },
        ],
        solution: [
          "Flour: 500 ÷ 150 = 3.33… batches → 3.33… × 6 = 20 pancakes.",
          "Eggs: 7 ÷ 2 = 3.5 batches → 21 pancakes.",
          "Milk: 1000 ÷ 240 = 4.16… batches → 25 pancakes.",
          "Flour runs out first, so the greatest number is 20.",
        ],
        commonError: "Taking the largest of the three amounts instead of the smallest.",
        difficulty: "warmup",
        guideRef: "ratio-problems",
        hints: ["Work out how many pancakes each ingredient would allow on its own.", "The ingredient that runs out first decides the answer."],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "written",
        id: "ratio-proportion-p4-q04",
        question:
          "The density of sea water is 1.025 g/cm³. Show that this is the same as a density of 1025 kg/m³.",
        marks: 2,
        modelAnswer:
          "1 m = 100 cm, so 1 m³ = 100 × 100 × 100 = 1 000 000 cm³.\n\nThe mass of 1 m³ of sea water = 1.025 × 1 000 000 = 1 025 000 g = 1025 kg.\n\nSo the density is 1025 kg/m³.",
        markScheme: [
          { point: "Uses 1 m³ = 1 000 000 cm³ (100³)", keywords: ["1000000", "1 000 000", "100^3", "100³", "10^6"] },
          { point: "Converts 1 025 000 g to 1025 kg (÷ 1000)", keywords: ["1025000", "1 025 000", "÷ 1000", "/1000", "1025 kg"] },
        ],
        commonError: "Thinking 1 m³ = 100 cm³. Cubing the length conversion gives 100³ = 1 000 000.",
        difficulty: "warmup",
        guideRef: "compound-measures",
        hints: ["How many cm³ are in 1 m³? (It's not 100.)", "Find the mass of 1 m³ in grams, then convert to kilograms."],
        strategy: "Check the units",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "ratio-proportion-p4-q05",
        question: "(x + 3) : (x − 1) = 5 : 3\n\nWork out the value of x.",
        answer: { type: "number", value: 7, display: "x = 7" },
        traps: [
          { spec: { type: "number", value: 2 }, feedback: "You've set x + 3 = 5. Ratios only tell you the *relative* sizes — cross-multiply instead: 3(x + 3) = 5(x − 1)." },
        ],
        solution: [
          "Write as fractions: {{(x + 3)/(x - 1) = 5/3}}.",
          "Cross-multiply: 3(x + 3) = 5(x − 1).",
          "3x + 9 = 5x − 5.",
          "14 = 2x, so x = 7.",
          "Check: 10 : 6 = 5 : 3 ✓.",
        ],
        commonError: "Setting x + 3 = 5 and x − 1 = 3 separately (which gives two different values of x).",
        difficulty: "core",
        guideRef: "ratio-basics",
        hints: [
          "A ratio a : b = c : d means {{a/b = c/d}}.",
          "Cross-multiply to remove the fractions.",
          "3(x + 3) = 5(x − 1). Expand and solve.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "ratio-proportion-p4-q06",
        question:
          "Wei Ling changes $850 (Singapore dollars) into pounds (£) for a trip to London. The exchange rate is $1 = £0.58.\n\nShe spends £320 in London. When she returns, she changes the pounds she has left back into dollars at a rate of £1 = $1.70.\n\nHow many dollars does she get back? Give your answer to the nearest cent.",
        answer: { type: "number", value: 294.1, tolerance: 0.005, display: "$294.10" },
        traps: [
          { spec: { type: "number", value: 173 }, feedback: "£173 is what she has left in pounds. Convert it back to dollars at £1 = $1.70." },
          { spec: { type: "number", value: 101.76, tolerance: 0.01 }, feedback: "You've divided by 1.70. One pound buys $1.70, so multiply the pounds by 1.70." },
        ],
        solution: [
          "$850 → 850 × 0.58 = £493.",
          "After spending: 493 − 320 = £173.",
          "£173 → 173 × 1.70 = $294.10.",
        ],
        commonError: "Dividing instead of multiplying when converting back — ask yourself whether you expect more or fewer dollars than pounds.",
        difficulty: "core",
        guideRef: "ratio-problems",
        hints: [
          "Convert her dollars to pounds first.",
          "Subtract what she spends.",
          "£1 = $1.70, so you should get *more* dollars than pounds.",
        ],
        strategy: "Estimate first",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "ratio-proportion-p4-q07",
        question:
          "A solid cuboid measures 0.5 m by 0.8 m by 1.2 m. It rests with one face on a horizontal floor. The cuboid exerts a force of 1800 newtons on the floor.\n\npressure = force ÷ area\n\nWork out the least possible pressure the cuboid can exert on the floor. Give your answer in newtons/m².",
        diagram: `<svg viewBox="0 0 400 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cuboid 1.2 m long, 0.8 m deep and 0.5 m high"><rect x="0" y="0" width="400" height="260" fill="#ffffff"/><polygon points="60,130 300,130 360,80 120,80" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><polygon points="300,130 360,80 360,180 300,230" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><rect x="60" y="130" width="240" height="100" fill="#e0e7ff" stroke="#1f2937" stroke-width="2"/><line x1="30" y1="230" x2="390" y2="230" stroke="#334155" stroke-width="1"/><text x="180" y="252" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1.2 m</text><text x="44" y="185" font-size="13" font-family="sans-serif" text-anchor="end" fill="#1f2937">0.5 m</text><text x="342" y="214" font-size="13" font-family="sans-serif" fill="#1f2937">0.8 m</text></svg>`,
        answer: { type: "number", value: 1875, display: "1875 N/m²" },
        traps: [
          { spec: { type: "number", value: 4500 }, feedback: "4500 N/m² is the *greatest* pressure (smallest face, 0.4 m²). Least pressure needs the largest face." },
          { spec: { type: "number", value: 3000 }, feedback: "That uses the 0.5 m × 1.2 m face. Is there a larger face?" },
        ],
        solution: [
          "Face areas: 0.5 × 0.8 = 0.4 m², 0.5 × 1.2 = 0.6 m², 0.8 × 1.2 = 0.96 m².",
          "Pressure is least when the area is greatest: 0.96 m².",
          "Pressure = 1800 ÷ 0.96 = 1875 N/m².",
        ],
        commonError: "Using the smallest face, which gives the greatest pressure.",
        difficulty: "core",
        guideRef: "compound-measures",
        hints: [
          "The force is fixed. How does the pressure change as the area gets bigger?",
          "Work out the area of each of the three different faces.",
          "Divide 1800 by the largest area.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "ratio-proportion-p4-q08",
        question:
          "A ball rolls down a ramp. The distance, d metres, it has rolled is directly proportional to the square of the time, t seconds, since it was released. When t = 4, d = 80.\n\nWork out the value of t when d = 45.",
        answer: { type: "number", value: 3, display: "t = 3" },
        traps: [
          { spec: { type: "number", value: 2.25 }, feedback: "You've used d = kt (straight proportion). Here d is proportional to {{t^2}}." },
          { spec: { type: "number", value: 9 }, feedback: "9 is {{t^2}}. Take the square root to find t." },
        ],
        solution: [
          "d = k{{t^2}}.",
          "80 = k × 16, so k = 5 and d = 5{{t^2}}.",
          "45 = 5{{t^2}}, so {{t^2}} = 9.",
          "t = 3 (time is positive).",
        ],
        commonError: "Forgetting to square-root at the end.",
        difficulty: "core",
        guideRef: "direct-proportion",
        hints: [
          "Write the statement as an equation using k.",
          "Use d = 80, t = 4 to find k.",
          "Solve 45 = 5{{t^2}}.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "ratio-proportion-p4-q09",
        question:
          "The force, F newtons, between two magnets is inversely proportional to the square of the distance, d cm, between them. When d = 5, F = 12.\n\nWork out the value of F when d = 4.",
        answer: { type: "number", value: 18.75, display: "F = 18.75" },
        traps: [
          { spec: { type: "number", value: 15 }, feedback: "You've used F = {{k/d}}. The force is inversely proportional to the *square* of the distance." },
          { spec: { type: "number", value: 7.68, tolerance: 0.001 }, feedback: "You've used direct proportion. As d gets smaller, F should get *bigger*." },
        ],
        solution: [
          "F = {{k/d^2}}.",
          "12 = {{k/25}}, so k = 300 and F = {{300/d^2}}.",
          "When d = 4: F = {{300/16}} = 18.75.",
        ],
        commonError: "Using F = k/d instead of k/d².",
        difficulty: "core",
        guideRef: "inverse-proportion",
        hints: [
          "'Inversely proportional to the square' means F = {{k/d^2}}.",
          "Substitute d = 5 and F = 12 to find k.",
          "Then put d = 4 into F = {{300/d^2}}.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "ratio-proportion-p4-q10",
        question:
          "Ravi makes two orange drinks.\n\n- Drink A is made from orange juice and water in the ratio 1 : 4.\n- Drink B is made from orange juice and water in the ratio 2 : 3.\n\nHe mixes 500 ml of drink A with 300 ml of drink B. Work out the ratio of orange juice to water in the mixture. Give your answer in its simplest form.",
        answer: { type: "ratio", parts: [11, 29], simplest: true, display: "11 : 29" },
        traps: [
          { spec: { type: "ratio", parts: [3, 7] }, feedback: "You've added the ratios (1 + 2 : 4 + 3). That only works if both drinks have the same volume *and* the same number of parts — here they don't." },
          { spec: { type: "ratio", parts: [220, 580] }, feedback: "Right amounts, but simplify — both numbers have a factor of 20." },
        ],
        solution: [
          "Drink A: 500 ml in 5 parts → 100 ml juice, 400 ml water.",
          "Drink B: 300 ml in 5 parts → 120 ml juice, 180 ml water.",
          "Mixture: juice = 220 ml, water = 580 ml.",
          "220 : 580 = 11 : 29 (÷ 20).",
        ],
        commonError: "Adding the ratios directly, giving 3 : 7.",
        difficulty: "core",
        guideRef: "ratio-problems",
        hints: [
          "You can't add ratios — but you can add actual volumes.",
          "How much juice and how much water is in 500 ml of drink A?",
          "Do the same for drink B, then total the juice and the water.",
        ],
        strategy: "Break it into steps",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "ratio-proportion-p4-q11",
        question:
          "Olivia drives 135 km from Kuala Lumpur at an average speed of 54 km/h. She stops for 15 minutes for lunch. She then drives a further 96 km, which takes her 1 hour 10 minutes.\n\nWork out her average speed for the whole journey, including the stop. Give your answer in km/h correct to 3 significant figures.",
        answer: { type: "number", value: 59, tolerance: 0.05, display: "59.0 km/h" },
        traps: [
          { spec: { type: "number", value: 63 }, feedback: "63 km/h ignores the 15-minute stop. The question says *including* the stop, so add 0.25 hours to the total time." },
          { spec: { type: "number", value: 68.1, tolerance: 0.1 }, feedback: "You've averaged the two driving speeds. Average speed = total distance ÷ total time." },
        ],
        solution: [
          "Time for the first part = 135 ÷ 54 = 2.5 hours.",
          "Stop = 15 minutes = 0.25 hours. Second part = 1 hour 10 minutes = {{1 1/6}} hours.",
          "Total time = 2.5 + 0.25 + {{1 1/6}} = {{47/12}} hours = 3.9166… hours.",
          "Total distance = 135 + 96 = 231 km.",
          "Average speed = 231 ÷ 3.9166… = 58.978… = 59.0 km/h (3 s.f.).",
        ],
        commonError: "Writing 1 hour 10 minutes as 1.1 hours, or leaving out the stop.",
        difficulty: "core",
        guideRef: "compound-measures",
        hints: [
          "Average speed = total distance ÷ total time.",
          "Find the time for the first part using time = distance ÷ speed.",
          "Convert every time to hours: 10 minutes is {{1/6}} of an hour, not 0.1.",
        ],
        strategy: "Break it into steps",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "ratio-proportion-p4-q12",
        question:
          "Concrete is made by mixing cement, sand and gravel in the ratio 1 : 2 : 4 by mass.\n\nMarcus wants to make 350 kg of concrete. He has 2 bags of cement, each of mass 25 kg, 90 kg of sand and 220 kg of gravel.\n\nShow that Marcus has enough cement and gravel, but not enough sand.",
        marks: 3,
        modelAnswer:
          "Total parts = 1 + 2 + 4 = 7. One part = 350 ÷ 7 = 50 kg.\n\nCement needed = 50 kg; he has 2 × 25 = 50 kg — enough.\n\nSand needed = 2 × 50 = 100 kg; he has only 90 kg — not enough (10 kg short).\n\nGravel needed = 4 × 50 = 200 kg; he has 220 kg — enough.",
        markScheme: [
          { point: "Finds one part = 350 ÷ 7 = 50 kg", keywords: ["50", "350/7", "350 ÷ 7", "7 parts"] },
          { point: "Finds sand needed = 100 kg and compares with 90 kg", keywords: ["100", "90", "not enough", "short"] },
          { point: "Finds cement 50 kg (= 2 bags) and gravel 200 kg ≤ 220 kg, so both enough", keywords: ["200", "220", "2 bags", "enough"] },
        ],
        commonError: "Dividing 350 by 3 (the number of ingredients) instead of 7 (the number of parts).",
        difficulty: "core",
        guideRef: "ratio-problems",
        hints: [
          "How many parts are there in the ratio altogether?",
          "Work out the mass of one part for 350 kg of concrete.",
          "Multiply to find how much of each ingredient is needed, then compare with what he has.",
        ],
        strategy: "Find one part first",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "ratio-proportion-p4-q13",
        question:
          "y is directly proportional to {{x^3}}. When x = 2, y = 2.\n\nx is inversely proportional to {{w^2}}. When w = 1, x = 4.\n\nShow that {{y = 16/w^6}}.",
        marks: 3,
        modelAnswer:
          "y = k{{x^3}}: 2 = k × 8, so k = {{1/4}} and y = {{x^3/4}}.\n\nx = {{c/w^2}}: 4 = {{c/1}}, so c = 4 and x = {{4/w^2}}.\n\nSubstitute: y = {{1/4}} × {{(4/w^2)^3}} = {{1/4}} × {{64/w^6}} = {{16/w^6}}.",
        markScheme: [
          { point: "Finds y = x³/4 (k = 1/4)", keywords: ["1/4", "0.25", "x^3/4", "x³/4"] },
          { point: "Finds x = 4/w² (constant 4)", keywords: ["4/w^2", "4/w²", "c = 4", "k = 4"] },
          { point: "Substitutes and simplifies (4/w²)³ = 64/w⁶ to reach y = 16/w⁶", keywords: ["64", "w^6", "w⁶", "16/w"] },
        ],
        commonError: "Cubing only the 4 or only the {{w^2}} — the whole fraction is cubed: {{(4/w^2)^3 = 64/w^6}}.",
        difficulty: "challenge",
        guideRef: "direct-proportion",
        hints: [
          "Deal with each statement separately: find a formula for y in terms of x and one for x in terms of w.",
          "Use two different letters for the two constants.",
          "Substitute x = {{4/w^2}} into y = {{x^3/4}} and cube carefully.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "ratio-proportion-p4-q14",
        question:
          "The intensity of light, I, from a lamp is inversely proportional to the square of the distance, d, from the lamp.\n\nPriya moves her book so that d increases by 20%. Work out the percentage decrease in I. Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 30.6, tolerance: 0.05, display: "30.6%" },
        traps: [
          { spec: { type: "number", value: 20 }, feedback: "A 20% change in d doesn't give a 20% change in I. I depends on {{1/d^2}}, so work out the multiplier {{1/1.2^2}}." },
          { spec: { type: "number", value: 44 }, feedback: "44% is the increase in {{d^2}} (1.2² = 1.44). I is divided by 1.44, which is not the same as a 44% decrease." },
          { spec: { type: "number", value: 69.4, tolerance: 0.05 }, feedback: "69.4% is what I becomes as a percentage of its original value. The *decrease* is 100% − 69.4%." },
        ],
        solution: [
          "I = {{k/d^2}}.",
          "New d = 1.2d, so new I = {{k/(1.2d)^2}} = {{1/1.44}} × {{k/d^2}}.",
          "{{1/1.44}} = 0.69444…, so I becomes 69.444…% of its original value.",
          "Percentage decrease = 100 − 69.444… = 30.555… = 30.6% (3 s.f.).",
        ],
        solutions: [
          { label: "Try numbers", steps: ["Let d = 10 and k = 100, so I = 1.", "New d = 12: I = {{100/144}} = 0.69444…", "Decrease = 1 − 0.69444… = 0.30555… → 30.6%."] },
        ],
        commonError: "Assuming a 20% increase in d gives a 40% or 44% decrease in I.",
        difficulty: "challenge",
        guideRef: "inverse-proportion",
        hints: [
          "What multiplier turns d into its new value?",
          "If d is multiplied by 1.2, what is I multiplied by?",
          "I is multiplied by {{1/1.2^2}}. Turn that multiplier into a percentage change.",
        ],
        strategy: "Use a multiplier",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "ratio-proportion-p4-q15",
        question:
          "A community library has only fiction and non-fiction books. The ratio of fiction to non-fiction books is 5 : 2.\n\nThe library donates 48 fiction books to a school and buys 6 new non-fiction books. The ratio of fiction to non-fiction books is now 4 : 3.\n\nHow many books did the library have at the start?",
        answer: { type: "number", value: 168, display: "168 books" },
        traps: [
          { spec: { type: "number", value: 24 }, feedback: "24 is the value of one part (n). The library started with 5n + 2n = 7n books." },
          { spec: { type: "number", value: 126 }, feedback: "126 is the number of books *after* the changes. The question asks about the start." },
        ],
        solution: [
          "Let the library start with 5n fiction and 2n non-fiction books.",
          "After: (5n − 48) : (2n + 6) = 4 : 3.",
          "3(5n − 48) = 4(2n + 6) → 15n − 144 = 8n + 24 → 7n = 168 → n = 24.",
          "At the start: 7n = 7 × 24 = 168 books.",
          "Check: 120 − 48 = 72 fiction, 48 + 6 = 54 non-fiction; 72 : 54 = 4 : 3 ✓.",
        ],
        commonError: "Treating the parts before and after as the same size — the total changes, so you need algebra.",
        difficulty: "challenge",
        guideRef: "ratio-problems",
        hints: [
          "Use a letter: say there are 5n fiction and 2n non-fiction books at the start.",
          "Write the new numbers of fiction and non-fiction books in terms of n, then form an equation from the new ratio.",
          "{{(5n - 48)/(2n + 6) = 4/3}}. Cross-multiply and solve.",
        ],
        strategy: "Introduce a variable",
      },
    ],
  },
];
