import type { TopicPractice } from "../../types.ts";

export const practice: TopicPractice = {
  // =========================================================================
  // Quick-check quiz — 10 questions (3 mcq, 7 short) across the main sections
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "sequences-quiz-q01",
      question: "Find an expression for the nth term of the sequence\n\n    5, 9, 13, 17, 21, …",
      answer: { type: "expression", expr: "4n+1", display: "4n + 1" },
      solution: [
        "The terms go up by 4 each time, so the sequence is linked to the 4 times table: 4n.",
        "4n gives 4, 8, 12, 16, … — every term of our sequence is 1 more.",
        "So the nth term is 4n + 1.",
        "Check: n = 3 gives 12 + 1 = 13 ✓.",
      ],
      traps: [
        { spec: { type: "expression", expr: "n+4" }, feedback: "n + 4 gives 5, 6, 7, … — it goes up by 1, not 4. The common difference is the **coefficient of n**: 4n + something." },
        { spec: { type: "expression", expr: "4n+5" }, feedback: "Check n = 1: 4 + 5 = 9, but the first term is 5. The constant is the **zero term** (the term before the first): 5 − 4 = 1." },
      ],
      commonError: "Writing n + 4 because \"you add 4 each time\" — that describes the term-to-term rule, not the position-to-term rule.",
      difficulty: "warmup",
      guideRef: "linear-nth-term",
      hints: ["What is the common difference? That number goes in front of n.", "Compare the sequence with 4n: 4, 8, 12, … What do you add?"],
      strategy: "Compare with the times table",
    },
    {
      kind: "mcq",
      id: "sequences-quiz-q02",
      question: "A sequence has nth term 3n + 2. Which of these numbers is a term of the sequence?",
      options: ["100", "101", "102", "99"],
      answerIndex: 1,
      explanation:
        "Set 3n + 2 equal to each number and see whether n comes out as a whole number. 3n + 2 = 101 gives 3n = 99, n = 33 ✓ — it is the 33rd term. 100 gives 3n = 98 and 102 gives 3n = 100, neither divisible by 3. 99 is tempting because it is a multiple of 3, but the terms are 2 **more** than multiples of 3.",
      difficulty: "warmup",
      guideRef: "linear-nth-term",
      hints: ["Form an equation: 3n + 2 = the number.", "A position n must be a positive whole number."],
      strategy: "Form an equation",
    },
    {
      kind: "short",
      id: "sequences-quiz-q03",
      question: "An arithmetic sequence has first term 7 and common difference −3.\n\nWork out the 20th term.",
      answer: { type: "number", value: -50 },
      solution: [
        "Use {{u_n = a + (n - 1)d}} with a = 7, d = −3, n = 20.",
        "{{u_20 = 7 + 19 * (-3) = 7 - 57 = -50}}.",
      ],
      traps: [
        { spec: { type: "number", value: -53 }, feedback: "You used 20 lots of d. From the 1st term to the 20th there are only **19** steps, so it's a + 19d." },
        { spec: { type: "number", value: 64 }, feedback: "Watch the sign: the common difference is −3, so the terms are decreasing." },
      ],
      commonError: "Using a + nd instead of a + (n − 1)d.",
      difficulty: "warmup",
      guideRef: "arithmetic-sequences",
      hints: ["How many steps of size d take you from term 1 to term 20?", "19 steps: 7 + 19 × (−3)."],
      strategy: "Count the gaps",
    },
    {
      kind: "short",
      id: "sequences-quiz-q04",
      question:
        "The 4th term of an arithmetic sequence is 19 and the 10th term is 43.\n\nFind the first term and the common difference. Give the first term first.",
      answer: { type: "list", values: [7, 4], ordered: true, display: "a = 7, d = 4" },
      solution: [
        "From the 4th term to the 10th term is 6 steps of d.",
        "6d = 43 − 19 = 24, so d = 4.",
        "4th term = a + 3d: 19 = a + 12, so a = 7.",
        "Check: 10th term = 7 + 9 × 4 = 43 ✓.",
      ],
      solutions: [
        {
          label: "Simultaneous equations",
          steps: ["a + 3d = 19 and a + 9d = 43.", "Subtract: 6d = 24, d = 4. Then a = 19 − 12 = 7."],
        },
      ],
      traps: [
        { spec: { type: "list", values: [3, 4], ordered: true }, feedback: "You took 4 steps back from the 4th term. The 4th term is a + **3**d, so a = 19 − 3 × 4 = 7." },
        { spec: { type: "list", values: [19, 4], ordered: true }, feedback: "19 is the 4th term, not the first. Step back 3 lots of d." },
      ],
      commonError: "Dividing 24 by 10 − 4 + 1 = 7 steps instead of 6.",
      difficulty: "core",
      guideRef: "arithmetic-sequences",
      hints: [
        "How many common differences separate the 4th and 10th terms?",
        "The terms differ by 43 − 19 = 24 over 6 steps.",
        "Now write the 4th term as a + 3d and solve for a.",
      ],
      strategy: "Count the gaps",
    },
    {
      kind: "short",
      id: "sequences-quiz-q05",
      question: "Find the sum of the first 30 terms of the arithmetic series\n\n    4 + 7 + 10 + 13 + …",
      answer: { type: "number", value: 1425 },
      solution: [
        "a = 4, d = 3, n = 30.",
        "{{S_n = n/2 (2a + (n - 1)d)}}",
        "{{S_30 = 30/2 (8 + 29 * 3) = 15 * 95 = 1425}}.",
      ],
      solutions: [
        {
          label: "First + last, paired",
          steps: ["Last term = 4 + 29 × 3 = 91.", "Pair first and last: 4 + 91 = 95, and there are 15 such pairs.", "15 × 95 = 1425."],
        },
      ],
      traps: [
        { spec: { type: "number", value: 2850 }, feedback: "You forgot to halve. Each pair (first + last) is counted once: {{S_n = n/2 (2a + (n - 1)d)}}." },
        { spec: { type: "number", value: 1470 }, feedback: "Check the (n − 1): the 30th term is a + **29**d, not a + 30d." },
      ],
      commonError: "Using 30d instead of 29d, or forgetting the {{n/2}}.",
      difficulty: "core",
      guideRef: "arithmetic-series",
      hints: ["Identify a, d and n.", "Use {{S_n = n/2 (2a + (n - 1)d)}}.", "2a + 29d = 8 + 87."],
      strategy: "Pair first and last",
    },
    {
      kind: "mcq",
      id: "sequences-quiz-q06",
      question: "Work out the sum of the even numbers\n\n    2 + 4 + 6 + … + 100",
      options: ["2500", "5100", "2550", "2601"],
      answerIndex: 2,
      explanation:
        "There are 50 even numbers from 2 to 100. Pair them: 2 + 100 = 102, 4 + 98 = 102, … giving 25 pairs, so the sum is 25 × 102 = 2550. 5100 forgets to halve (50 × 102). 2601 miscounts the terms as 51. 2500 is {{50^2}} — that's the sum of the first 50 **odd** numbers.",
      difficulty: "core",
      guideRef: "arithmetic-series",
      hints: ["How many terms are there? (100 ÷ 2)", "Pair the first and last terms. How many pairs?"],
      strategy: "Pair first and last",
    },
    {
      kind: "short",
      id: "sequences-quiz-q07",
      question:
        "The series 3 + 7 + 11 + 15 + … has a sum of 820 after n terms.\n\nFind n.",
      answer: { type: "number", value: 20 },
      solution: [
        "a = 3, d = 4: {{S_n = n/2 (6 + 4(n - 1)) = n/2 (4n + 2) = n(2n + 1)}}.",
        "n(2n + 1) = 820, so {{2n^2 + n - 820 = 0}}.",
        "Factorise: (n − 20)(2n + 41) = 0, so n = 20 (n must be a positive integer).",
        "Check: 20 × 41 = 820 ✓.",
      ],
      traps: [
        { spec: { type: "number", value: -20.5 }, feedback: "n counts terms, so it must be a positive whole number. Reject the negative root." },
      ],
      commonError: "Not simplifying {{n/2 (4n + 2)}} before forming the quadratic, which leads to arithmetic slips.",
      difficulty: "core",
      guideRef: "arithmetic-series",
      hints: [
        "Write {{S_n}} in terms of n using a = 3, d = 4.",
        "It simplifies to n(2n + 1). Set this equal to 820.",
        "Solve the quadratic {{2n^2 + n - 820 = 0}} — only the positive whole-number root makes sense.",
      ],
      strategy: "Form an equation",
    },
    {
      kind: "short",
      id: "sequences-quiz-q08",
      question: "Find an expression for the nth term of the quadratic sequence\n\n    3, 8, 15, 24, 35, …",
      answer: { type: "expression", expr: "n^2+2n", display: "{{n^2 + 2n}}" },
      solution: [
        "First differences: 5, 7, 9, 11. Second differences: 2, 2, 2.",
        "Half the second difference is the coefficient of {{n^2}}: 2 ÷ 2 = 1, so start with {{n^2}}.",
        "Sequence − {{n^2}}: 3 − 1, 8 − 4, 15 − 9, 24 − 16 = 2, 4, 6, 8 → this is 2n.",
        "So the nth term is {{n^2 + 2n}}. Check n = 5: 25 + 10 = 35 ✓.",
      ],
      traps: [
        { spec: { type: "expression", expr: "2n^2+n" }, feedback: "The coefficient of {{n^2}} is **half** the second difference: 2 ÷ 2 = 1." },
      ],
      commonError: "Using the second difference itself (2) as the coefficient of {{n^2}} instead of half of it.",
      difficulty: "core",
      guideRef: "quadratic-sequences",
      hints: [
        "Find the first differences, then the second differences.",
        "The coefficient of {{n^2}} is half the second difference.",
        "Subtract {{n^2}} from each term — what linear sequence is left?",
      ],
      strategy: "Peel off the n² part",
    },
    {
      kind: "mcq",
      id: "sequences-quiz-q09",
      question: "The nth term of a sequence is {{(2n + 1)/(n + 3)}}.\n\nWhat is the limiting value of the sequence as n gets very large?",
      options: ["{{1/3}}", "{{3/4}}", "The terms grow without limit", "2"],
      answerIndex: 3,
      explanation:
        "Divide top and bottom by n: {{(2 + 1/n)/(1 + 3/n)}}. As n gets large, {{1/n}} and {{3/n}} tend to 0, so the terms tend to {{2/1 = 2}}. {{1/3}} is what you get by putting n = 0, and {{3/4}} is just the first term. The terms do increase, but the top is never more than about twice the bottom, so they cannot grow without limit.",
      difficulty: "core",
      guideRef: "limiting-values",
      hints: ["Try n = 1000 on your calculator.", "Divide every term on the top and bottom by n. What happens to {{1/n}} as n grows?"],
      strategy: "Consider extremes",
    },
    {
      kind: "short",
      id: "sequences-quiz-q10",
      question:
        "Hana makes patterns from tiles. Pattern 1 uses 6 tiles, and each pattern uses 4 more tiles than the one before.\n\nWhich pattern number uses exactly 82 tiles?",
      answer: { type: "number", value: 20 },
      solution: [
        "The tile counts go 6, 10, 14, 18, … so the nth term is 4n + 2.",
        "4n + 2 = 82 → 4n = 80 → n = 20.",
        "Pattern 20 uses 82 tiles.",
      ],
      traps: [
        { spec: { type: "number", value: 19 }, feedback: "Check: pattern 19 uses 4 × 19 + 2 = 78 tiles. Find the nth term first, then solve 4n + 2 = 82." },
        { spec: { type: "number", value: 20.5 }, feedback: "That's 82 ÷ 4, which ignores the 2 extra tiles. Use the nth term 4n + 2." },
      ],
      commonError: "Dividing 82 by 4 without accounting for the constant term.",
      difficulty: "core",
      guideRef: "linear-nth-term",
      hints: ["Write out the first few tile counts and find the nth term.", "The nth term is 4n + 2. Set it equal to 82."],
      strategy: "Form an equation",
    },
  ],

  // =========================================================================
  // Practice papers 1 and 2 — 15 questions each, exactly 3 written per paper
  // =========================================================================
  papers: [
    {
      id: "sequences-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "sequences-p1-q01",
          question: "Find an expression for the nth term of the sequence\n\n    20, 17, 14, 11, 8, …",
          answer: { type: "expression", expr: "23-3n", display: "23 − 3n" },
          solution: [
            "The terms go down by 3, so the nth term contains −3n.",
            "The zero term (one step before 20) is 20 + 3 = 23.",
            "nth term = 23 − 3n. Check n = 4: 23 − 12 = 11 ✓.",
          ],
          traps: [
            { spec: { type: "expression", expr: "20-3n" }, feedback: "Check n = 1: 20 − 3 = 17, but the first term is 20. Use the zero term, 20 + 3 = 23." },
            { spec: { type: "expression", expr: "3n+23" }, feedback: "The sequence is decreasing, so the coefficient of n must be **negative**: 23 − 3n." },
          ],
          commonError: "Writing 3n + 23 — a decreasing sequence needs −3n.",
          difficulty: "warmup",
          guideRef: "linear-nth-term",
          hints: ["Is the sequence going up or down? By how much?", "What would the 0th term be?"],
          strategy: "Find the zero term",
        },
        {
          kind: "short",
          id: "sequences-p1-q02",
          question: "Here are the first four terms of a sequence:\n\n    3, 10, 17, 24, …\n\nWork out the 50th term.",
          answer: { type: "number", value: 346 },
          solution: [
            "Common difference 7, zero term 3 − 7 = −4, so the nth term is 7n − 4.",
            "50th term = 7 × 50 − 4 = 350 − 4 = 346.",
          ],
          traps: [
            { spec: { type: "number", value: 353 }, feedback: "Your nth term doesn't give 3 when n = 1. The constant is the zero term: 3 − 7 = −4, so 7n − 4." },
          ],
          commonError: "Using 7n + 3 (the first term) instead of 7n − 4 (the zero term).",
          difficulty: "warmup",
          guideRef: "linear-nth-term",
          hints: ["Find the nth term first.", "Substitute n = 50 into 7n − 4."],
        },
        {
          kind: "short",
          id: "sequences-p1-q03",
          question: "An arithmetic sequence has first term 12 and common difference 2.5.\n\nWork out the 15th term.",
          answer: { type: "number", value: 47 },
          solution: ["{{u_15 = a + 14d = 12 + 14 * 2.5 = 12 + 35 = 47}}."],
          traps: [{ spec: { type: "number", value: 49.5 }, feedback: "From term 1 to term 15 there are 14 steps, not 15: use a + (n − 1)d." }],
          commonError: "Using a + nd instead of a + (n − 1)d.",
          difficulty: "warmup",
          guideRef: "arithmetic-sequences",
          hints: ["Use {{u_n = a + (n - 1)d}}.", "12 + 14 × 2.5."],
          strategy: "Count the gaps",
        },
        {
          kind: "short",
          id: "sequences-p1-q04",
          question: "Work out the sum of the first 20 terms of the arithmetic series\n\n    5 + 8 + 11 + 14 + …",
          answer: { type: "number", value: 670 },
          solution: [
            "a = 5, d = 3, n = 20.",
            "{{S_20 = 20/2 (2 * 5 + 19 * 3) = 10(10 + 57) = 10 * 67 = 670}}.",
          ],
          traps: [
            { spec: { type: "number", value: 1340 }, feedback: "Don't forget the {{n/2}} — you've added every pair twice." },
            { spec: { type: "number", value: 700 }, feedback: "Use (n − 1)d = 19 × 3, not 20 × 3." },
          ],
          commonError: "Forgetting to halve.",
          difficulty: "warmup",
          guideRef: "arithmetic-series",
          hints: ["Identify a, d and n, then use {{S_n = n/2 (2a + (n - 1)d)}}."],
        },
        {
          kind: "written",
          id: "sequences-p1-q05",
          question:
            "Here are the first four terms of a sequence:\n\n    5, 11, 17, 23, …\n\nShow that 300 is **not** a term of this sequence.",
          marks: 3,
          modelAnswer:
            "The common difference is 6 and the zero term is 5 − 6 = −1, so the nth term is 6n − 1.\n\nIf 300 were a term, 6n − 1 = 300, so 6n = 301 and n = 50.1666…\n\nn is not a whole number, so 300 is not a term. (The 50th term is 299 and the 51st is 305, and 300 lies between them.)",
          markScheme: [
            { point: "Correct nth term 6n − 1", keywords: ["6n - 1", "6n-1", "6n − 1"] },
            { point: "Sets up 6n − 1 = 300 (or 6n = 301)", keywords: ["= 300", "=300", "301"] },
            { point: "Concludes n is not an integer so 300 is not a term (or shows terms 299 and 305)", keywords: ["not a whole", "not an integer", "not whole", "50.1", "299", "305", "decimal"] },
          ],
          commonError: "Saying \"300 isn't odd\" — not every odd number is a term either; you must use the nth term.",
          difficulty: "core",
          guideRef: "linear-nth-term",
          hints: [
            "Find the nth term first.",
            "If 300 is a term, 6n − 1 = 300 for some position n. Solve it.",
            "What kind of number must a position be?",
          ],
          strategy: "Form an equation",
        },
        {
          kind: "short",
          id: "sequences-p1-q06",
          question: "The 3rd term of an arithmetic sequence is 11 and the 8th term is −4.\n\nWork out the 20th term.",
          answer: { type: "number", value: -40 },
          solution: [
            "From the 3rd to the 8th term is 5 steps: 5d = −4 − 11 = −15, so d = −3.",
            "3rd term = a + 2d: 11 = a − 6, so a = 17.",
            "{{u_20 = 17 + 19 * (-3) = 17 - 57 = -40}}.",
          ],
          solutions: [
            {
              label: "Jump straight from the 8th term",
              steps: ["d = −3 as before.", "The 20th term is 12 steps after the 8th: −4 + 12 × (−3) = −4 − 36 = −40."],
            },
          ],
          traps: [
            { spec: { type: "number", value: -43 }, feedback: "Check the steps: the 20th term is a + **19**d (or 12 steps after the 8th term)." },
            { spec: { type: "number", value: 62 }, feedback: "The sequence is falling (11 down to −4), so d is negative: d = −3." },
          ],
          commonError: "Getting d = +3 by subtracting the wrong way round.",
          difficulty: "core",
          guideRef: "arithmetic-sequences",
          hints: [
            "How many steps of d from the 3rd to the 8th term?",
            "5d = −15. Is d positive or negative?",
            "Either find a, or count steps on from the 8th term.",
          ],
          strategy: "Count the gaps",
        },
        {
          kind: "short",
          id: "sequences-p1-q07",
          question:
            "In an arithmetic sequence, the 5th term is three times the 2nd term, and the sum of the 3rd and 4th terms is 36.\n\nFind the first term a and the common difference d. Give a first.",
          answer: { type: "list", values: [3, 6], ordered: true, display: "a = 3, d = 6" },
          solution: [
            "5th term = 3 × 2nd term: a + 4d = 3(a + d) → a + 4d = 3a + 3d → d = 2a.",
            "3rd + 4th: (a + 2d) + (a + 3d) = 36 → 2a + 5d = 36.",
            "Substitute d = 2a: 2a + 10a = 36 → 12a = 36 → a = 3, so d = 6.",
            "Check: sequence 3, 9, 15, 21, 27. 27 = 3 × 9 ✓ and 15 + 21 = 36 ✓.",
          ],
          traps: [{ spec: { type: "list", values: [6, 3], ordered: true }, feedback: "Right numbers, wrong order: the question asks for a first. Check: a = 3, d = 6 gives 3, 9, 15, 21, 27." }],
          commonError: "Writing the 5th term as a + 5d instead of a + 4d.",
          difficulty: "core",
          guideRef: "arithmetic-sequences",
          hints: [
            "Write the 2nd, 3rd, 4th and 5th terms in terms of a and d.",
            "Turn each sentence into an equation.",
            "The first equation simplifies to d = 2a — substitute into the second.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "sequences-p1-q08",
          question:
            "Mei saves $20 in week 1, $23 in week 2, $26 in week 3, and so on, increasing by $3 each week.\n\nHow much has she saved altogether after 26 weeks? Give your answer in dollars.",
          answer: { type: "number", value: 1495, display: "$1495" },
          solution: [
            "Arithmetic series with a = 20, d = 3, n = 26.",
            "{{S_26 = 26/2 (40 + 25 * 3) = 13 * 115 = 1495}}.",
            "She has saved $1495.",
          ],
          traps: [
            { spec: { type: "number", value: 95 }, feedback: "That's how much she saves in week 26 alone. The question asks for the **total** — use {{S_n}}." },
            { spec: { type: "number", value: 1534 }, feedback: "Use (n − 1)d = 25 × 3, not 26 × 3." },
          ],
          commonError: "Finding the 26th term (the amount saved in week 26) instead of the sum.",
          difficulty: "core",
          guideRef: "arithmetic-series",
          hints: ["Is the question asking for one week's amount or the total?", "Total → {{S_n}} with a = 20, d = 3, n = 26."],
          strategy: "Decide: term or sum?",
        },
        {
          kind: "short",
          id: "sequences-p1-q09",
          question:
            "Terms of the arithmetic series 2 + 5 + 8 + 11 + … are added together, starting from the first.\n\nWhat is the least number of terms needed for the sum to be greater than 1000?",
          answer: { type: "number", value: 26 },
          solution: [
            "a = 2, d = 3: {{S_n = n/2 (4 + 3(n - 1)) = (n(3n + 1))/2}}.",
            "Solve {{(n(3n + 1))/2 = 1000}}: {{3n^2 + n - 2000 = 0}}, so {{n = (-1 + sqrt(24001))/6 = 25.65...}}",
            "n must be a whole number and the sum must exceed 1000, so round **up**: n = 26.",
            "Check: {{S_25 = (25 * 76)/2 = 950}} (too small) and {{S_26 = (26 * 79)/2 = 1027}} ✓.",
          ],
          traps: [{ spec: { type: "number", value: 25 }, feedback: "{{S_25 = 950}}, which is not yet over 1000. Round **up** here." }],
          commonError: "Rounding 25.65 to the nearest whole number instead of up.",
          difficulty: "core",
          guideRef: "arithmetic-series",
          hints: [
            "Write {{S_n}} in terms of n.",
            "Solve {{S_n = 1000}} as a quadratic — n won't be a whole number.",
            "Check {{S_25}} and {{S_26}} directly.",
          ],
          strategy: "Check by substituting",
        },
        {
          kind: "written",
          id: "sequences-p1-q10",
          question: "Prove that the sum of the first n odd numbers, 1 + 3 + 5 + … , is {{n^2}}.",
          marks: 3,
          modelAnswer:
            "The odd numbers form an arithmetic series with a = 1 and d = 2.\n\n{{S_n = n/2 (2a + (n - 1)d) = n/2 (2 + 2(n - 1))}}\n\n{{= n/2 (2n) = n^2}}, as required.",
          markScheme: [
            { point: "Identifies a = 1 and d = 2", keywords: ["a = 1", "a=1", "d = 2", "d=2"] },
            { point: "Substitutes correctly into Sn = n/2(2a + (n − 1)d)", keywords: ["n/2", "2 + 2(n - 1)", "2+2(n-1)", "2(n-1)"] },
            { point: "Simplifies to n² with clear algebra", keywords: ["2n", "n^2", "n²", "n × n"] },
          ],
          commonError: "Checking a few cases (1, 4, 9, 16) — that shows a pattern, but it isn't a proof.",
          solutions: [
            {
              label: "Picture proof",
              steps: [
                "Build squares: 1 dot, then add an L-shape of 3 to make a 2 × 2 square, then an L of 5 to make 3 × 3, …",
                "The kth L-shape has 2k − 1 dots (the kth odd number), and after n of them you have an n × n square: {{n^2}} dots.",
              ],
            },
          ],
          difficulty: "core",
          guideRef: "arithmetic-series",
          hints: [
            "What are a and d for the odd numbers?",
            "Substitute into {{S_n = n/2 (2a + (n - 1)d)}}.",
            "Simplify the bracket first: 2 + 2(n − 1) = 2n.",
          ],
          strategy: "Use the general formula",
        },
        {
          kind: "short",
          id: "sequences-p1-q11",
          question:
            "Sequence A has nth term 5n + 3. Sequence B has nth term 66 − 2n.\n\nFor which value of n are the nth terms of the two sequences equal?",
          answer: { type: "number", value: 9 },
          solution: ["5n + 3 = 66 − 2n → 7n = 63 → n = 9.", "Check: 5 × 9 + 3 = 48 and 66 − 18 = 48 ✓."],
          traps: [{ spec: { type: "number", value: 48 }, feedback: "48 is the common **value**. The question asks for the position n." }],
          commonError: "Giving the value of the term (48) instead of its position.",
          difficulty: "core",
          guideRef: "linear-nth-term",
          hints: ["Set the two nth terms equal.", "Collect the n terms on one side: 7n = 63."],
          strategy: "Form an equation",
        },
        {
          kind: "short",
          id: "sequences-p1-q12",
          question: "Find an expression for the nth term of the sequence\n\n    1, 9, 21, 37, 57, …",
          answer: { type: "expression", expr: "2n^2+2n-3", display: "{{2n^2 + 2n - 3}}" },
          solution: [
            "First differences: 8, 12, 16, 20. Second differences: 4, 4, 4 — so it's quadratic.",
            "Coefficient of {{n^2}} = 4 ÷ 2 = 2.",
            "Subtract {{2n^2}} (2, 8, 18, 32, 50): leaves −1, 1, 3, 5, 7, which is 2n − 3.",
            "nth term = {{2n^2 + 2n - 3}}. Check n = 5: 50 + 10 − 3 = 57 ✓.",
          ],
          traps: [
            { spec: { type: "expression", expr: "4n^2-12n+9" }, feedback: "The coefficient of {{n^2}} is **half** the second difference: 4 ÷ 2 = 2." },
          ],
          commonError: "Using the full second difference as the {{n^2}} coefficient.",
          difficulty: "core",
          guideRef: "quadratic-sequences",
          hints: [
            "Work out the first and second differences.",
            "The {{n^2}} coefficient is half the second difference.",
            "Subtract {{2n^2}} from each term and find the nth term of what's left.",
          ],
          strategy: "Peel off the n² part",
        },
        {
          kind: "written",
          id: "sequences-p1-q13",
          question:
            "The nth term of a sequence is {{u_n = (3n - 1)/(n + 2)}}.\n\n(a) Show that {{u_n = 3 - 7/(n + 2)}}.\n\n(b) Hence explain why the terms increase as n increases, and state the limiting value of the sequence.",
          marks: 4,
          modelAnswer:
            "(a) {{3 - 7/(n + 2) = (3(n + 2) - 7)/(n + 2) = (3n + 6 - 7)/(n + 2) = (3n - 1)/(n + 2)}} ✓.\n\n(b) As n increases, n + 2 increases, so {{7/(n + 2)}} gets smaller. Subtracting a smaller amount from 3 gives a bigger result, so the terms increase.\n\nAs n → ∞, {{7/(n + 2)}} → 0, so {{u_n}} → 3. The limiting value is 3 (the terms get closer and closer to 3 but are always less than 3).",
          markScheme: [
            { point: "Combines over a common denominator: (3(n + 2) − 7)/(n + 2)", keywords: ["3(n + 2)", "3(n+2)", "3n + 6", "3n+6"] },
            { point: "Explains 7/(n + 2) decreases as n increases", keywords: ["decrease", "smaller", "gets smaller", "denominator increases", "bigger denominator"] },
            { point: "So 3 minus a smaller amount increases", keywords: ["increase", "bigger", "larger", "subtract less"] },
            { point: "Limiting value 3 because 7/(n + 2) → 0", keywords: ["3", "tends to 0", "→ 0", "approaches 0", "limit"] },
          ],
          commonError: "In (a), working backwards from the target without showing the common-denominator step clearly.",
          solutions: [
            {
              label: "Divide through by n",
              steps: ["{{u_n = (3 - 1/n)/(1 + 2/n)}}.", "As n → ∞, {{1/n}} and {{2/n}} → 0, so {{u_n}} → {{3/1 = 3}}."],
            },
          ],
          difficulty: "challenge",
          guideRef: "limiting-values",
          hints: [
            "For (a), start from {{3 - 7/(n + 2)}} and write it as a single fraction.",
            "For (b), what happens to {{7/(n + 2)}} when n gets bigger?",
            "What does {{7/(n + 2)}} tend to as n → ∞?",
          ],
          strategy: "Rewrite to reveal structure",
        },
        {
          kind: "short",
          id: "sequences-p1-q14",
          question:
            "A theatre has 20 seats in the front row. Each row behind has 2 more seats than the row in front of it. The theatre has 1100 seats altogether.\n\nFind the number of rows and the number of seats in the back row. Give the number of rows first.",
          answer: { type: "list", values: [25, 68], ordered: true, display: "25 rows; 68 seats in the back row" },
          solution: [
            "a = 20, d = 2: {{S_n = n/2 (40 + 2(n - 1)) = n(n + 19)}}.",
            "n(n + 19) = 1100 → {{n^2 + 19n - 1100 = 0}} → (n − 25)(n + 44) = 0.",
            "n = 25 rows (reject −44).",
            "Back row = 20 + 24 × 2 = 68 seats. Check: {{25/2 (20 + 68) = 25 * 44 = 1100}} ✓.",
          ],
          traps: [
            { spec: { type: "list", values: [25, 70], ordered: true }, feedback: "The 25th row is a + **24**d = 20 + 48 = 68." },
          ],
          commonError: "Solving correctly for n but then using a + nd for the last row.",
          difficulty: "challenge",
          guideRef: "arithmetic-series",
          hints: [
            "Write {{S_n}} for a = 20, d = 2 and simplify.",
            "Set it equal to 1100 and solve the quadratic.",
            "{{n^2 + 19n - 1100 = 0}} factorises: find two numbers that multiply to −1100 and differ by 19.",
          ],
          strategy: "Form an equation",
        },
        {
          kind: "short",
          id: "sequences-p1-q15",
          question:
            "The nth term of a sequence is {{u_n = (2n + 1)/(3n + 2)}}. The terms get closer and closer to {{2/3}}.\n\nFind the smallest value of n for which {{2/3 - u_n < 0.001}}.",
          answer: { type: "number", value: 111 },
          solution: [
            "{{2/3 - (2n + 1)/(3n + 2) = (2(3n + 2) - 3(2n + 1))/(3(3n + 2)) = 1/(3(3n + 2))}}.",
            "Need {{1/(3(3n + 2)) < 0.001}}, i.e. 3(3n + 2) > 1000.",
            "9n + 6 > 1000 → 9n > 994 → n > 110.44…",
            "Smallest whole number: n = 111.",
          ],
          traps: [{ spec: { type: "number", value: 110 }, feedback: "n > 110.44, so n = 110 is not enough. Round **up** to 111." }],
          commonError: "Flipping the inequality when taking reciprocals, or rounding 110.44 down.",
          difficulty: "challenge",
          guideRef: "limiting-values",
          hints: [
            "Write {{2/3 - u_n}} as a single fraction. The numerator simplifies a lot.",
            "You should get {{1/(3(3n + 2))}}.",
            "A small fraction means a big denominator: 3(3n + 2) > 1000.",
          ],
          strategy: "Rewrite to reveal structure",
        },
      ],
    },
    {
      id: "sequences-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "sequences-p2-q01",
          question: "A sequence has nth term 15 − 4n.\n\nWrite down the first three terms, in order.",
          answer: { type: "list", values: [11, 7, 3], ordered: true, display: "11, 7, 3" },
          solution: ["n = 1: 15 − 4 = 11.", "n = 2: 15 − 8 = 7.", "n = 3: 15 − 12 = 3."],
          traps: [{ spec: { type: "list", values: [15, 11, 7], ordered: true }, feedback: "15 is the zero term (n = 0). Start at n = 1." }],
          commonError: "Starting at n = 0.",
          difficulty: "warmup",
          guideRef: "linear-nth-term",
          hints: ["Substitute n = 1, 2, 3."],
        },
        {
          kind: "short",
          id: "sequences-p2-q02",
          question: "Find an expression for the nth term of the sequence\n\n    −8, −5, −2, 1, 4, …",
          answer: { type: "expression", expr: "3n-11", display: "3n − 11" },
          solution: ["Common difference +3, so 3n.", "Zero term: −8 − 3 = −11.", "nth term = 3n − 11. Check n = 4: 12 − 11 = 1 ✓."],
          traps: [
            { spec: { type: "expression", expr: "3n-8" }, feedback: "Check n = 1: 3 − 8 = −5, not −8. The constant is the zero term, −8 − 3 = −11." },
            { spec: { type: "expression", expr: "3n-5" }, feedback: "Check n = 1: 3 − 5 = −2, not −8. Going back one step from −8 means subtracting 3: −11." },
          ],
          commonError: "Going the wrong way from −8 to find the zero term.",
          difficulty: "warmup",
          guideRef: "linear-nth-term",
          hints: ["What is the common difference?", "Find the zero term: one step **before** −8."],
          strategy: "Find the zero term",
        },
        {
          kind: "short",
          id: "sequences-p2-q03",
          question:
            "Here is an arithmetic sequence:\n\n    2.5, 3.2, 3.9, 4.6, …\n\nWrite down the common difference, then work out the 12th term.",
          answer: { type: "list", values: [0.7, 10.2], ordered: true, tolerance: 0.001, display: "d = 0.7; 12th term = 10.2" },
          solution: ["d = 3.2 − 2.5 = 0.7.", "{{u_12 = 2.5 + 11 * 0.7 = 2.5 + 7.7 = 10.2}}."],
          traps: [{ spec: { type: "list", values: [0.7, 10.9], ordered: true, tolerance: 0.001 }, feedback: "The 12th term is a + **11**d, not a + 12d." }],
          commonError: "Using 12d instead of 11d.",
          difficulty: "warmup",
          guideRef: "arithmetic-sequences",
          hints: ["Subtract consecutive terms to find d.", "Use a + (n − 1)d with n = 12."],
        },
        {
          kind: "short",
          id: "sequences-p2-q04",
          question: "Work out 1 + 2 + 3 + … + 80.",
          answer: { type: "number", value: 3240 },
          solution: [
            "Pair the first and last: 1 + 80 = 81, 2 + 79 = 81, … There are 40 pairs.",
            "40 × 81 = 3240.",
          ],
          solutions: [{ label: "Formula", steps: ["{{S_n = n/2 (a + l) = 80/2 (1 + 80) = 40 * 81 = 3240}}."] }],
          traps: [{ spec: { type: "number", value: 6480 }, feedback: "You've counted every pair twice — halve it." }],
          commonError: "Forgetting to halve.",
          difficulty: "warmup",
          guideRef: "arithmetic-series",
          hints: ["Gauss's trick: pair the first and last numbers. How many pairs?"],
          strategy: "Pair first and last",
        },
        {
          kind: "short",
          id: "sequences-p2-q05",
          question:
            "An arithmetic sequence has first term 40 and common difference −1.5.\n\nWhich term is the first one to be negative? Give its position n.",
          answer: { type: "number", value: 28 },
          solution: [
            "{{u_n = 40 - 1.5(n - 1)}}.",
            "Need 40 − 1.5(n − 1) < 0 → n − 1 > 26.67 → n > 27.67.",
            "So n = 28. Check: {{u_27 = 40 - 39 = 1}} (positive) and {{u_28 = 40 - 40.5 = -0.5}} ✓.",
          ],
          traps: [
            { spec: { type: "number", value: 27 }, feedback: "{{u_27 = 40 - 26 * 1.5 = 1}}, still positive. Check the next one." },
            { spec: { type: "number", value: 26 }, feedback: "Remember the term number is n, and the formula uses n − 1. {{u_26 = 2.5}}." },
          ],
          commonError: "Solving 40 − 1.5n < 0 (forgetting the −1) and rounding the wrong way.",
          difficulty: "core",
          guideRef: "arithmetic-sequences",
          hints: [
            "Write the nth term using a + (n − 1)d.",
            "Solve nth term < 0.",
            "Check the terms either side of your answer.",
          ],
          strategy: "Check by substituting",
        },
        {
          kind: "written",
          id: "sequences-p2-q06",
          question:
            "Arjun is asked for the nth term of the sequence\n\n    7, 11, 15, 19, …\n\nHe writes: \"You add 4 each time, so the nth term is n + 4.\"\n\nExplain what is wrong with Arjun's answer and find the correct nth term.",
          marks: 3,
          modelAnswer:
            "\"Add 4 each time\" is the term-to-term rule, but the nth term must give a term from its position. Arjun's rule n + 4 gives 5, 6, 7, … — it goes up by 1, not 4, and its first term is 5, not 7.\n\nThe common difference is 4, so the nth term starts 4n. 4n gives 4, 8, 12, 16, and each term of the sequence is 3 more, so the nth term is 4n + 3.",
          markScheme: [
            { point: "Shows n + 4 gives the wrong terms (5, 6, 7 …) or goes up by 1", keywords: ["5", "6", "up by 1", "goes up by 1", "increases by 1"] },
            { point: "Explains adding 4 is the term-to-term rule / the 4 should multiply n", keywords: ["term-to-term", "term to term", "4n", "times n", "coefficient"] },
            { point: "Correct nth term 4n + 3", keywords: ["4n + 3", "4n+3"] },
          ],
          commonError: "Just stating the right answer without explaining why n + 4 fails.",
          difficulty: "core",
          guideRef: "linear-nth-term",
          hints: ["Test Arjun's rule with n = 1, 2, 3.", "Which number should multiply n?"],
          strategy: "Spot the error",
        },
        {
          kind: "short",
          id: "sequences-p2-q07",
          question:
            "The first three terms of an arithmetic sequence are\n\n    2x + 1,   5x − 4,   4x + 5\n\nFind the value of x and the common difference. Give x first.",
          answer: { type: "list", values: [3.5, 5.5], ordered: true, tolerance: 0.001, display: "x = 3.5, d = 5.5" },
          solution: [
            "In an arithmetic sequence the gaps are equal: (5x − 4) − (2x + 1) = (4x + 5) − (5x − 4).",
            "3x − 5 = −x + 9 → 4x = 14 → x = 3.5.",
            "Terms: 8, 13.5, 19, so d = 5.5.",
          ],
          traps: [{ spec: { type: "list", values: [3.5, 13.5], ordered: true, tolerance: 0.001 }, feedback: "13.5 is the second term. The common difference is 13.5 − 8 = 5.5." }],
          commonError: "Mixing up the order of subtraction so that a sign flips.",
          difficulty: "core",
          guideRef: "arithmetic-sequences",
          hints: [
            "What is true about the gaps between consecutive terms?",
            "2nd − 1st = 3rd − 2nd.",
            "Solve for x, then work out the actual terms.",
          ],
          strategy: "Form an equation",
        },
        {
          kind: "short",
          id: "sequences-p2-q08",
          question:
            "The sum of the first n terms of an arithmetic series is given by {{S_n = 2n^2 + 3n}}.\n\nWork out the 10th term of the series.",
          answer: { type: "number", value: 41 },
          solution: [
            "The 10th term is the sum of 10 terms minus the sum of 9 terms.",
            "{{S_10 = 200 + 30 = 230}} and {{S_9 = 162 + 27 = 189}}.",
            "10th term = 230 − 189 = 41.",
          ],
          solutions: [
            {
              label: "Find a and d first",
              steps: ["{{S_1 = 5}}, so a = 5. {{S_2 = 14}}, so the 2nd term is 9 and d = 4.", "10th term = 5 + 9 × 4 = 41."],
            },
          ],
          traps: [
            { spec: { type: "number", value: 230 }, feedback: "{{S_10}} is the sum of the first 10 terms, not the 10th term. Subtract {{S_9}}." },
          ],
          commonError: "Substituting n = 10 into {{S_n}} and stopping.",
          difficulty: "core",
          guideRef: "arithmetic-series",
          hints: [
            "{{S_10}} adds up terms 1 to 10. {{S_9}} adds up terms 1 to 9.",
            "What is {{S_10 - S_9}}?",
          ],
          strategy: "Make it simpler",
        },
        {
          kind: "short",
          id: "sequences-p2-q09",
          question:
            "Ravi's starting salary is $36 000 a year. It rises by $1500 each year.\n\nWork out the total amount he earns in his first 12 years. Give your answer in dollars.",
          answer: { type: "number", value: 531000, display: "$531 000" },
          solution: [
            "a = 36 000, d = 1500, n = 12.",
            "{{S_12 = 12/2 (72000 + 11 * 1500) = 6 * 88500 = 531000}}.",
          ],
          traps: [
            { spec: { type: "number", value: 52500 }, feedback: "That's his salary in year 12. The question asks for the total over 12 years." },
          ],
          commonError: "Finding the salary in year 12 rather than the total.",
          difficulty: "core",
          guideRef: "arithmetic-series",
          hints: ["Total → sum of an arithmetic series.", "a = 36 000, d = 1500, n = 12."],
          strategy: "Decide: term or sum?",
        },
        {
          kind: "written",
          id: "sequences-p2-q10",
          question: "Show that the sum of the first n terms of the arithmetic series\n\n    4 + 10 + 16 + 22 + …\n\nis n(3n + 1).",
          marks: 3,
          modelAnswer:
            "a = 4 and d = 6.\n\n{{S_n = n/2 (2a + (n - 1)d) = n/2 (8 + 6(n - 1)) = n/2 (6n + 2)}}\n\n{{= n(3n + 1)}}, as required.",
          markScheme: [
            { point: "Identifies a = 4, d = 6", keywords: ["a = 4", "a=4", "d = 6", "d=6"] },
            { point: "Correct substitution n/2(8 + 6(n − 1))", keywords: ["8 + 6(n - 1)", "8+6(n-1)", "6(n-1)", "n/2"] },
            { point: "Simplifies via 6n + 2 to n(3n + 1)", keywords: ["6n + 2", "6n+2", "n(3n + 1)", "n(3n+1)"] },
          ],
          commonError: "Expanding 6(n − 1) as 6n − 1.",
          difficulty: "core",
          guideRef: "arithmetic-series",
          hints: ["Find a and d.", "Substitute into {{S_n = n/2 (2a + (n - 1)d)}} and simplify the bracket.", "Take the factor 2 out of 6n + 2."],
          strategy: "Use the general formula",
        },
        {
          kind: "short",
          id: "sequences-p2-q11",
          question: "Work out the sum of all the multiples of 7 between 100 and 300.",
          answer: { type: "number", value: 5586 },
          solution: [
            "First multiple of 7 above 100: 105 = 7 × 15. Last below 300: 294 = 7 × 42.",
            "Number of terms: 42 − 15 + 1 = 28.",
            "{{S = 28/2 (105 + 294) = 14 * 399 = 5586}}.",
          ],
          commonError: "Counting 27 terms (42 − 15) instead of 28.",
          difficulty: "core",
          guideRef: "arithmetic-series",
          hints: [
            "What are the first and last multiples of 7 in the range?",
            "105 = 7 × 15 and 294 = 7 × 42. How many terms is that?",
            "Use {{S = n/2 (a + l)}}.",
          ],
          strategy: "Pair first and last",
        },
        {
          kind: "short",
          id: "sequences-p2-q12",
          question:
            "Here are the first four terms of a sequence:\n\n    {{3/5}}, {{5/8}}, {{7/11}}, {{9/14}}, …\n\nFind an expression for the nth term.",
          answer: { type: "expression", expr: "(2n+1)/(3n+2)", display: "{{(2n + 1)/(3n + 2)}}" },
          solution: [
            "Treat numerators and denominators as two separate sequences.",
            "Numerators 3, 5, 7, 9: nth term 2n + 1.",
            "Denominators 5, 8, 11, 14: nth term 3n + 2.",
            "nth term = {{(2n + 1)/(3n + 2)}}.",
          ],
          traps: [
            { spec: { type: "expression", expr: "(2n+3)/(3n+5)" }, feedback: "Check n = 1: you get {{5/8}}, the second term. Use the zero terms: 1 for the numerators, 2 for the denominators." },
          ],
          commonError: "Using the first terms (3 and 5) as the constants instead of the zero terms.",
          difficulty: "core",
          guideRef: "quadratic-sequences",
          hints: ["Look at the numerators on their own, then the denominators.", "Both are linear sequences. Find each nth term."],
          strategy: "Split into parts",
        },
        {
          kind: "short",
          id: "sequences-p2-q13",
          question:
            "Here are the first five terms of a quadratic sequence:\n\n    2, 7, 14, 23, 34, …\n\nWhich term of the sequence is equal to 167?",
          answer: { type: "number", value: 12 },
          solution: [
            "First differences 5, 7, 9, 11; second difference 2 → coefficient of {{n^2}} is 1.",
            "Terms − {{n^2}}: 1, 3, 5, 7, 9 → 2n − 1. So nth term = {{n^2 + 2n - 1}}.",
            "{{n^2 + 2n - 1 = 167}} → {{n^2 + 2n - 168 = 0}} → (n + 14)(n − 12) = 0.",
            "n = 12 (n must be positive). Check: 144 + 24 − 1 = 167 ✓.",
          ],
          solutions: [
            {
              label: "Complete the square",
              steps: ["{{n^2 + 2n - 1 = (n + 1)^2 - 2}}.", "{{(n + 1)^2 - 2 = 167}} → {{(n + 1)^2 = 169}} → n + 1 = 13 → n = 12."],
            },
          ],
          traps: [{ spec: { type: "number", value: -14 }, feedback: "A term number must be a positive integer — reject n = −14." }],
          commonError: "Errors in the nth term — always check it against the 5th term before solving.",
          difficulty: "challenge",
          guideRef: "quadratic-sequences",
          hints: [
            "Find the nth term using second differences.",
            "nth term = {{n^2 + 2n - 1}}. Set it equal to 167.",
            "Solve the quadratic — or spot that {{n^2 + 2n + 1}} is a perfect square.",
          ],
          strategy: "Form an equation",
        },
        {
          kind: "written",
          id: "sequences-p2-q14",
          question:
            "The nth term of a sequence is {{u_n = (4n + 5)/(2n - 1)}}.\n\n(a) By dividing the numerator and denominator by n, prove that the limiting value of the sequence is 2.\n\n(b) Show that every term of the sequence is greater than 2.",
          marks: 4,
          modelAnswer:
            "(a) {{u_n = (4 + 5/n)/(2 - 1/n)}}. As n → ∞, {{5/n}} → 0 and {{1/n}} → 0, so {{u_n}} → {{4/2 = 2}}.\n\n(b) {{u_n - 2 = (4n + 5 - 2(2n - 1))/(2n - 1) = 7/(2n - 1)}}.\n\nFor n ≥ 1, 2n − 1 ≥ 1 > 0, so {{7/(2n - 1)}} > 0 and therefore {{u_n > 2}} for every term.",
          markScheme: [
            { point: "Divides through by n: (4 + 5/n)/(2 − 1/n)", keywords: ["5/n", "1/n", "4 + 5/n", "2 - 1/n"] },
            { point: "States 5/n and 1/n tend to 0 so limit is 4/2 = 2", keywords: ["→ 0", "tends to 0", "approaches 0", "4/2", "= 2"] },
            { point: "Finds u_n − 2 = 7/(2n − 1)", keywords: ["7/(2n - 1)", "7/(2n-1)", "4n + 5 - 4n + 2", "7"] },
            { point: "Argues 2n − 1 > 0 for n ≥ 1, so u_n − 2 > 0", keywords: ["positive", "> 0", "greater than 0", "n ≥ 1", "2n - 1 > 0"] },
          ],
          commonError: "In (b), checking a few terms (3, 2.33, …) — that doesn't show it for **every** term.",
          difficulty: "challenge",
          guideRef: "limiting-values",
          hints: [
            "Divide every term on top and bottom by n.",
            "What happens to {{5/n}} and {{1/n}} as n gets large?",
            "For (b), look at {{u_n - 2}} as a single fraction. Is it always positive?",
          ],
          strategy: "Rewrite to reveal structure",
        },
        {
          kind: "short",
          id: "sequences-p2-q15",
          question:
            "For an arithmetic series, the sum of the first 10 terms is 145 and the sum of the first 20 terms is 590.\n\nFind the first term a and the common difference d. Give a first.",
          answer: { type: "list", values: [1, 3], ordered: true, display: "a = 1, d = 3" },
          solution: [
            "{{S_10 = 5(2a + 9d) = 145}} → 2a + 9d = 29.",
            "{{S_20 = 10(2a + 19d) = 590}} → 2a + 19d = 59.",
            "Subtract: 10d = 30 → d = 3. Then 2a = 29 − 27 = 2 → a = 1.",
            "Check: {{S_10 = 5(2 + 27) = 145}} ✓.",
          ],
          traps: [{ spec: { type: "list", values: [3, 1], ordered: true }, feedback: "Right numbers, wrong order — give a first: a = 1, d = 3." }],
          commonError: "Assuming {{S_20 = 2 * S_10}} — the second ten terms are bigger than the first ten.",
          difficulty: "challenge",
          guideRef: "arithmetic-series",
          hints: [
            "Write {{S_10}} and {{S_20}} using the formula.",
            "You get two linear equations in a and d.",
            "Subtract to eliminate 2a.",
          ],
          strategy: "Simultaneous equations",
        },
      ],
    },
  ],

  // =========================================================================
  // Challenge set — 10 grade-9 / H+ problems
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "sequences-ch-q01",
      question: "Find the sum of all the whole numbers from 1 to 300 that are **not** multiples of 3.",
      answer: { type: "number", value: 30000 },
      solution: [
        "Sum of 1 to 300: {{300/2 (1 + 300) = 150 * 301 = 45150}}.",
        "Multiples of 3: 3 + 6 + … + 300 has 100 terms: {{100/2 (3 + 300) = 50 * 303 = 15150}}.",
        "Not multiples of 3: 45 150 − 15 150 = 30 000.",
      ],
      solutions: [
        {
          label: "Complement (all minus multiples)",
          steps: ["45 150 − 15 150 = 30 000. Usually quickest: two easy series."],
        },
        {
          label: "Pair up within each block of three",
          steps: [
            "The numbers come in pairs (1, 2), (4, 5), (7, 8), …, (298, 299): 100 pairs.",
            "The pair sums 3, 9, 15, …, 597 form an arithmetic series with 100 terms.",
            "{{100/2 (3 + 597) = 50 * 600 = 30000}}.",
          ],
        },
      ],
      traps: [{ spec: { type: "number", value: 15150 }, feedback: "That's the sum of the multiples of 3 — the question asks for everything **else**." }],
      commonError: "Counting 99 multiples of 3 instead of 100.",
      difficulty: "challenge",
      guideRef: "arithmetic-series",
      hints: [
        "Is it easier to add the numbers you want, or the ones you don't?",
        "Find the sum of 1 to 300, and the sum of the multiples of 3 up to 300.",
        "Multiples of 3: 3, 6, …, 300 — 100 terms.",
      ],
      strategy: "Work with the complement",
    },
    {
      kind: "short",
      id: "sequences-ch-q02",
      question: "In an arithmetic sequence, the 7th term is 12 and the 12th term is 7.\n\nFind the 19th term.",
      answer: { type: "number", value: 0 },
      solution: [
        "From the 7th to the 12th term is 5 steps: 5d = 7 − 12 = −5, so d = −1.",
        "The 19th term is 7 steps after the 12th: 7 + 7 × (−1) = 0.",
      ],
      solutions: [
        {
          label: "The general pattern",
          steps: [
            "If {{u_p = q}} and {{u_q = p}} then d = (p − q) ÷ (q − p) = −1.",
            "Going from {{u_q = p}} another p steps down by 1 gives {{u_(p + q) = p - p = 0}}. Always 0!",
          ],
        },
      ],
      traps: [{ spec: { type: "number", value: 14 }, feedback: "Check the sign of d: the terms go from 12 down to 7, so d = −1." }],
      commonError: "Taking d = +1.",
      difficulty: "challenge",
      guideRef: "arithmetic-sequences",
      hints: [
        "How many steps from the 7th to the 12th term, and how much does the value change?",
        "d = −1. How many more steps to the 19th term?",
        "Notice 19 = 7 + 12. Is the answer a coincidence?",
      ],
      strategy: "Count the gaps",
    },
    {
      kind: "short",
      id: "sequences-ch-q03",
      question:
        "The sum of the first n terms of a series is {{S_n = 3n^2 - n}}.\n\nFind an expression for the nth term, {{u_n}}, in its simplest form.",
      answer: { type: "expression", expr: "6n-4", form: "simplified", display: "6n − 4" },
      solution: [
        "{{u_n = S_n - S_(n - 1)}}.",
        "{{S_(n - 1) = 3(n - 1)^2 - (n - 1) = 3n^2 - 6n + 3 - n + 1 = 3n^2 - 7n + 4}}.",
        "{{u_n = (3n^2 - n) - (3n^2 - 7n + 4) = 6n - 4}}.",
        "Check: {{u_1 = S_1 = 2}} and 6 − 4 = 2 ✓.",
      ],
      solutions: [
        {
          label: "Match to the formula",
          steps: [
            "{{S_n = n/2 (2a + (n - 1)d) = d/2 n^2 + (a - d/2)n}}.",
            "Compare with {{3n^2 - n}}: {{d/2 = 3}} so d = 6; a − 3 = −1 so a = 2.",
            "{{u_n = 2 + 6(n - 1) = 6n - 4}}.",
          ],
        },
      ],
      traps: [
        { spec: { type: "expression", expr: "6n-2" }, feedback: "Careful expanding {{3(n - 1)^2}}: it is {{3n^2 - 6n + 3}}, not {{3n^2 - 6n + 1}}. Check your answer with {{u_1 = S_1 = 2}}." },
      ],
      commonError: "Writing {{S_(n - 1)}} as {{3n^2 - n - 1}} instead of substituting n − 1 everywhere.",
      difficulty: "challenge",
      guideRef: "arithmetic-series",
      hints: [
        "How do {{S_n}} and {{S_(n - 1)}} differ?",
        "{{u_n = S_n - S_(n - 1)}}. Replace every n with (n − 1) carefully.",
        "Check your expression using {{u_1 = S_1}}.",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "short",
      id: "sequences-ch-q04",
      question:
        "A quadratic sequence has nth term {{an^2 + bn + c}}. Its 1st term is 6, its 3rd term is 24 and its 5th term is 58.\n\nWork out the 4th term.",
      answer: { type: "number", value: 39 },
      solution: [
        "a + b + c = 6, 9a + 3b + c = 24, 25a + 5b + c = 58.",
        "Subtract: 8a + 2b = 18 and 16a + 2b = 34.",
        "Subtract again: 8a = 16, a = 2. Then b = 1 and c = 3.",
        "nth term {{2n^2 + n + 3}}; 4th term = 32 + 4 + 3 = 39.",
      ],
      solutions: [
        {
          label: "Differences with step 2",
          steps: [
            "6, 24, 58 are terms 2 apart: differences 18, 34, second difference 16.",
            "Going 2 steps at a time multiplies the second difference by 4, so the ordinary second difference is 4 → a = 2.",
            "So the ordinary first differences go up by 4: call them e, e + 4, e + 8, e + 12. Then e + (e + 4) = 18 gives e = 7.", "The sequence is 6, 13, 24, 39, 58 (check: 24 + 15 + 19 = 58 ✓), so the 4th term is 39.",
          ],
        },
      ],
      traps: [{ spec: { type: "number", value: 41 }, feedback: "41 is the mean of 24 and 58 — that only works for a **linear** sequence. Find the quadratic first." }],
      commonError: "Averaging the 3rd and 5th terms as if the sequence were linear.",
      difficulty: "challenge",
      guideRef: "quadratic-sequences",
      hints: [
        "Substitute n = 1, 3 and 5 into {{an^2 + bn + c}}.",
        "Three equations, three unknowns: subtract pairs to remove c.",
        "Subtract again to find a.",
      ],
      strategy: "Simultaneous equations",
    },
    {
      kind: "short",
      id: "sequences-ch-q05",
      question:
        "The nth term of a sequence is {{(pn + 3)/(2n + q)}}, where p and q are constants.\n\nThe limiting value of the sequence is 4 and the first term is 1.\n\nFind p and q. Give p first.",
      answer: { type: "list", values: [8, 9], ordered: true, display: "p = 8, q = 9" },
      solution: [
        "Divide by n: {{(p + 3/n)/(2 + q/n)}} → {{p/2}} as n → ∞. So {{p/2 = 4}}, p = 8.",
        "First term: {{(8 + 3)/(2 + q) = 1}} → 11 = 2 + q → q = 9.",
        "Check: {{u_n = (8n + 3)/(2n + 9)}}: {{u_1 = 11/11 = 1}} ✓.",
      ],
      traps: [{ spec: { type: "list", values: [4, 5], ordered: true }, feedback: "The limit is the ratio of the n-coefficients, {{p/2}}, so p = 8, not 4." }],
      commonError: "Thinking the limit equals p rather than {{p/2}}.",
      difficulty: "challenge",
      guideRef: "limiting-values",
      hints: [
        "What does the sequence tend to as n → ∞, in terms of p?",
        "Divide top and bottom by n: the limit is {{p/2}}.",
        "Now use the first term (n = 1) to find q.",
      ],
      strategy: "Consider extremes",
    },
    {
      kind: "short",
      id: "sequences-ch-q06",
      question:
        "How many terms of the arithmetic series\n\n    30 + 27 + 24 + …\n\nmust be taken to give a sum of 165? There are two possible answers — give both.",
      answer: { type: "list", values: [10, 11], display: "n = 10 or n = 11" },
      solution: [
        "a = 30, d = −3: {{S_n = n/2 (60 - 3(n - 1)) = n/2 (63 - 3n)}}.",
        "{{n/2 (63 - 3n) = 165}} → {{63n - 3n^2 = 330}} → {{n^2 - 21n + 110 = 0}}.",
        "(n − 10)(n − 11) = 0, so n = 10 or 11.",
        "Both work because the 11th term is 30 − 30 = 0: adding it doesn't change the sum.",
      ],
      traps: [{ spec: { type: "list", values: [10] }, feedback: "There is a second answer. What is the 11th term?" }],
      commonError: "Rejecting one root without checking — here both are valid.",
      difficulty: "challenge",
      guideRef: "arithmetic-series",
      hints: [
        "Write {{S_n}} for a = 30, d = −3.",
        "Set it equal to 165 and rearrange into a quadratic.",
        "Both roots are positive integers. Why does that make sense? Look at the 11th term.",
      ],
      strategy: "Interpret both solutions",
    },
    {
      kind: "short",
      id: "sequences-ch-q07",
      question:
        "The sum 1 + 2 + 3 + … + n is a three-digit number whose digits are all the same (such as 111 or 444).\n\nFind n.",
      answer: { type: "number", value: 36 },
      solution: [
        "{{1 + 2 + … + n = (n(n + 1))/2}}. A three-digit number with equal digits is 111k = 3 × 37 × k, with k from 1 to 9.",
        "So {{n(n + 1) = 2 * 3 * 37 * k}}: 37 is prime, so n or n + 1 is a multiple of 37.",
        "Since n(n + 1) ≤ 2 × 999, n is at most 44, so n = 36 or n = 37.",
        "n = 36: {{(36 * 37)/2 = 666}} ✓. n = 37: {{(37 * 38)/2 = 703}} ✗. So n = 36.",
      ],
      solutions: [
        {
          label: "Trial with the formula",
          steps: [
            "Need {{(n(n + 1))/2}} between 100 and 999, so n is between 14 and 44.",
            "Test the targets 111, 222, …, 999: solve {{n(n + 1) = 2 * 111k}} — only 1332 = 36 × 37 works.",
          ],
        },
      ],
      commonError: "Trying values at random without using the factor 37.",
      difficulty: "challenge",
      guideRef: "arithmetic-series",
      hints: [
        "Write the sum as {{(n(n + 1))/2}}.",
        "Every number like 111, 222, … is 111k. Factorise 111.",
        "111 = 3 × 37, and 37 is prime. So 37 divides n or n + 1.",
      ],
      strategy: "Use prime factors",
    },
    {
      kind: "short",
      id: "sequences-ch-q08",
      question:
        "Sequence A has nth term 4n + 1 and sequence B has nth term 6n − 1 (n = 1, 2, 3, …).\n\nHow many numbers less than 500 appear in **both** sequences?",
      answer: { type: "number", value: 42 },
      solution: [
        "A: 5, 9, 13, 17, 21, 25, 29, … B: 5, 11, 17, 23, 29, …",
        "Common terms: 5, 17, 29, … — they go up by 12 (the LCM of 4 and 6). nth term 12n − 7.",
        "12n − 7 < 500 → 12n < 507 → n < 42.25, so n = 1 to 42.",
        "Check the largest: 12 × 42 − 7 = 497 = 4 × 124 + 1 = 6 × 83 − 1 ✓.",
      ],
      traps: [
        { spec: { type: "number", value: 41 }, feedback: "Don't forget the first common term, 5 (n = 1 in both)." },
        { spec: { type: "number", value: 20 }, feedback: "The common terms go up by the **LCM** of 4 and 6, which is 12, not 24." },
      ],
      commonError: "Assuming the common terms go up by 4 × 6 = 24.",
      difficulty: "challenge",
      guideRef: "linear-nth-term",
      hints: [
        "List the first several terms of each sequence. Which numbers appear in both?",
        "How far apart are the common terms? Why that number?",
        "Find the nth term of the common sequence, then solve < 500.",
      ],
      strategy: "Find a pattern",
    },
    {
      kind: "written",
      id: "sequences-ch-q09",
      question:
        "Prove that the sum of any five consecutive terms of an arithmetic sequence is equal to five times the middle term of the five.",
      marks: 3,
      modelAnswer:
        "Let the middle term be m and the common difference d. Then the five terms are m − 2d, m − d, m, m + d, m + 2d.\n\nTheir sum is (m − 2d) + (m − d) + m + (m + d) + (m + 2d) = 5m, since the d terms cancel: −2d − d + d + 2d = 0.\n\nSo the sum is 5 × the middle term, for any arithmetic sequence.",
      markScheme: [
        { point: "Writes the five terms in general form (e.g. m − 2d … m + 2d, or a, a + d, …, a + 4d)", keywords: ["m - 2d", "m + 2d", "a + 4d", "a+4d", "m-2d", "m+2d"] },
        { point: "Adds them correctly: 5m (or 5a + 10d)", keywords: ["5m", "5a + 10d", "5a+10d"] },
        { point: "Links to 5 × middle term (middle = a + 2d, and 5a + 10d = 5(a + 2d))", keywords: ["5(a + 2d)", "5(a+2d)", "middle", "cancel"] },
      ],
      commonError: "Testing one example (e.g. 2, 4, 6, 8, 10) — an example isn't a proof.",
      solutions: [
        {
          label: "Start from the first term",
          steps: [
            "Terms a, a + d, a + 2d, a + 3d, a + 4d. Sum = 5a + 10d = 5(a + 2d).",
            "a + 2d is the middle (3rd) term, so the sum is five times it.",
          ],
        },
        {
          label: "Pairing (Gauss)",
          steps: ["1st + 5th = 2 × middle and 2nd + 4th = 2 × middle (equal steps either side).", "Total = 2m + 2m + m = 5m."],
        },
      ],
      difficulty: "challenge",
      guideRef: "arithmetic-series",
      hints: [
        "Use letters for a general arithmetic sequence.",
        "Choosing the middle term as m makes the algebra symmetric.",
        "Write the terms as m − 2d, m − d, m, m + d, m + 2d and add.",
      ],
      strategy: "Use symmetry",
    },
    {
      kind: "short",
      id: "sequences-ch-q10",
      question:
        "Zara builds triangular patterns from matchsticks. Pattern n is a large triangle with side n made of small equilateral triangles of side 1 matchstick.\n\n| Pattern n | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| Matchsticks | 3 | 9 | 18 | 30 |\n\nHow many matchsticks are needed for pattern 20?",
      answer: { type: "number", value: 630 },
      solution: [
        "First differences: 6, 9, 12; second difference 3 → coefficient of {{n^2}} is {{3/2}}.",
        "Terms − {{3/2 n^2}}: 3 − 1.5, 9 − 6, 18 − 13.5, 30 − 24 = 1.5, 3, 4.5, 6 → {{3/2 n}}.",
        "nth term = {{3/2 n^2 + 3/2 n = (3n(n + 1))/2}}.",
        "Pattern 20: {{(3 * 20 * 21)/2 = 630}}.",
      ],
      solutions: [
        {
          label: "Quadratic sequence",
          steps: ["Second differences give {{(3n(n + 1))/2}}, so pattern 20 needs 630."],
        },
        {
          label: "Series: count what each new row adds",
          steps: [
            "Going from pattern k − 1 to pattern k adds a new row of k upward triangles, which needs 3k new matchsticks (the first differences 3, 6, 9, 12, … confirm this).",
            "So pattern 20 needs {{3(1 + 2 + … + 20) = 3 * 210 = 630}}.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 1260 }, feedback: "That's 3 × 20 × 21 — you've forgotten to halve. The nth term is {{(3n(n + 1))/2}}." },
        { spec: { type: "number", value: 117 }, feedback: "6n − 3 only fits the first two patterns. The pattern isn't linear — the differences 6, 9, 12 keep growing." },
      ],
      commonError: "Treating the sequence as linear because the first few differences look regular.",
      difficulty: "challenge",
      guideRef: "quadratic-sequences",
      hints: [
        "Are the first differences constant? What about the second differences?",
        "The {{n^2}} coefficient is half the second difference: {{3/2}}.",
        "Or: how many matchsticks does each new row add? Add those up as a series.",
      ],
      strategy: "Two ways: differences or series",
    },
  ],
};
