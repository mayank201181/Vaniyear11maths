// Sequences & series — MCQ papers (3 × 15). Options are shuffled at display time.
import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "sequences-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "sequences-m1-q01",
        question: "Find an expression for the nth term of the sequence 5, 9, 13, 17, …",
        options: ["4n + 1", "n + 4", "4n + 5", "5n + 4"],
        answerIndex: 0,
        explanation:
          "The terms go up by 4, so the sequence is linked to the 4 times table: 4n gives 4, 8, 12, 16. Each term is 1 more, so the nth term is **4n + 1**. Check: n = 3 gives 13 ✓. n + 4 mixes up the difference and the constant. 4n + 5 uses the first term as the constant — that would give 9 for the first term. 5n + 4 takes the first term as the multiplier.",
        difficulty: "warmup",
        guideRef: "linear-nth-term",
        hints: ["What does the sequence go up by each time? Compare the terms with that times table."],
        strategy: "Find a pattern",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q02",
        question: "The nth term of a sequence is 7 − 3n. Work out the 20th term.",
        options: ["53", "−50", "−53", "80"],
        answerIndex: 2,
        explanation:
          "Substitute n = 20: 7 − 3 × 20 = 7 − 60 = **−53**. 53 comes from working out 3n − 7 instead. −50 uses n = 19 (the '(n − 1)' idea belongs to a + (n − 1)d, not here). 80 does (7 − 3) × 20 — multiplication must happen before subtraction.",
        difficulty: "warmup",
        guideRef: "linear-nth-term",
        hints: ["Replace n by 20 and remember the order of operations: multiply before you subtract."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q03",
        question: "The nth term of a sequence is 4n − 3. Which of these numbers is a term of the sequence?",
        options: ["80", "81", "83", "79"],
        answerIndex: 1,
        explanation:
          "Solve 4n − 3 = 81: 4n = 84, n = 21 — a whole number, so **81** is the 21st term. 80 is a multiple of 4, but the −3 matters: 4n = 83 has no whole-number solution. 83 comes from subtracting 3 instead of adding (83 − 3 = 80 = 4 × 20); in fact 4n = 86 gives n = 21.5. 79 is odd like the terms, but the terms go up in 4s (77, 81, …), so 79 falls between them.",
        difficulty: "warmup",
        guideRef: "linear-nth-term",
        hints: ["Set 4n − 3 equal to the number and solve. Is n a whole number?"],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q04",
        question: "An arithmetic sequence has first term a = 6 and common difference d = −4. Which expression gives its nth term?",
        options: ["6 − 4n", "4n + 2", "6n − 4", "10 − 4n"],
        answerIndex: 3,
        explanation:
          "Use a + (n − 1)d = 6 + (n − 1)(−4) = 6 − 4n + 4 = **10 − 4n**. Check: n = 1 gives 6 ✓, n = 2 gives 2 ✓. 6 − 4n forgets the (n − 1), so its first term is 2. 4n + 2 uses d = +4. 6n − 4 swaps the roles of a and d.",
        difficulty: "warmup",
        guideRef: "arithmetic-sequences",
        hints: ["Substitute into a + (n − 1)d, then expand the bracket carefully — d is negative."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q05",
        question:
          "The sequence 2, 5, 8, 11, … goes up by 3 each time. Mei says, \"The rule is add 3, so the nth term is n + 3.\" What is the 50th term of the sequence?",
        options: ["53", "152", "149", "147"],
        answerIndex: 2,
        explanation:
          "'Add 3' is the **term-to-term** rule; the **position-to-term** rule is 3n − 1 (3n gives 3, 6, 9 … and each term is 1 less). The 50th term is 3 × 50 − 1 = **149**. 53 is Mei's n + 3 — her rule gives 4 for the first term, not 2. 152 uses 3n + 2 (first term as the constant). 147 is 3 × 49, which forgets to add the starting value 2 (2 + 3 × 49 = 149).",
        difficulty: "core",
        guideRef: "linear-nth-term",
        hints: [
          "Does Mei's rule give 2 when n = 1?",
          "'Add 3' tells you the multiplier of n. Compare the terms with 3n.",
          "3n gives 3, 6, 9, … — what do you do to get 2, 5, 8, …?",
        ],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q06",
        question:
          "The 4th term of an arithmetic sequence is 17 and the 9th term is 42. Find the first term.",
        options: ["2", "−3", "12", "5"],
        answerIndex: 0,
        explanation:
          "From the 4th to the 9th term is 5 steps of d: 5d = 42 − 17 = 25, so d = 5. The 4th term is a + 3d, so a = 17 − 3 × 5 = **2**. −3 subtracts 4 steps instead of 3 — the 4th term is only 3 steps after the 1st. 12 steps back just once. 5 is the common difference, not the first term.",
        difficulty: "core",
        guideRef: "arithmetic-sequences",
        hints: [
          "How many steps of d are there from the 4th term to the 9th term?",
          "5d = 25. Now, how many steps from the 1st term to the 4th?",
          "a + 3d = 17.",
        ],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q07",
        question: "Work out the sum of the first 20 terms of the arithmetic series 3 + 7 + 11 + 15 + …",
        options: ["79", "860", "790", "820"],
        answerIndex: 3,
        explanation:
          "a = 3, d = 4, n = 20: {{S_n = n/2 (2a + (n - 1)d)}} = 10 × (6 + 19 × 4) = 10 × 82 = **820**. Or: last term = 3 + 19 × 4 = 79, so {{S = 20/2}}(3 + 79) = 820. 79 is the 20th term, not the sum. 860 uses n instead of n − 1: 10 × (6 + 80). 790 uses a instead of 2a: 10 × (3 + 76).",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: [
          "Write down a, d and n.",
          "Use {{S_n = n/2 (2a + (n - 1)d)}} — or find the last term and average it with the first.",
        ],
        strategy: "Use a formula",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q08",
        question: "Find an expression for the nth term of the sequence 40, 33, 26, 19, …",
        options: ["7n + 33", "47 − 7n", "40 − 7n", "33 − 7n"],
        answerIndex: 1,
        explanation:
          "The terms go **down** by 7, so the nth term contains −7n. The 'zero term' (one step before 40) is 40 + 7 = 47, giving **47 − 7n**. Check: n = 1 gives 40 ✓, n = 4 gives 19 ✓. 7n + 33 ignores that the sequence decreases. 40 − 7n uses the first term as the constant (it gives 33 first). 33 − 7n steps the wrong way to the zero term.",
        difficulty: "core",
        guideRef: "linear-nth-term",
        hints: [
          "Is the difference positive or negative?",
          "Work backwards one step from 40 to find the 'zero term'.",
        ],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q09",
        question:
          "In an arithmetic sequence the 3rd term is 11, and the sum of the 5th and 7th terms is 46. Find the common difference.",
        options: ["4", "3", "6", "12"],
        answerIndex: 0,
        explanation:
          "{{u_3 = a + 2d = 11}}. {{u_5 + u_7 = (a + 4d) + (a + 6d) = 2a + 10d = 46}}, so a + 5d = 23. Subtract: 3d = 12, **d = 4** (and a = 3). 3 is the first term — or comes from writing {{u_5 = a + 5d}} and {{u_7 = a + 7d}}. 12 forgets to divide 3d = 12 by 3. 6 halves 12 instead of dividing by the 3 steps from {{u_3}} to {{u_6}}.",
        difficulty: "core",
        guideRef: "arithmetic-sequences",
        hints: [
          "Write each term in the form a + (n − 1)d.",
          "You get two equations: a + 2d = 11 and 2a + 10d = 46.",
          "Halve the second equation and subtract the first.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q10",
        question: "How many terms of the series 5 + 9 + 13 + … must be added to give a total of 230?",
        options: ["46", "11.5", "23", "10"],
        answerIndex: 3,
        explanation:
          "a = 5, d = 4: {{S_n = n/2 (10 + 4(n - 1)) = n/2 (4n + 6) = n(2n + 3)}}. Set n(2n + 3) = 230: {{2n^2 + 3n - 230 = 0}}, (n − 10)(2n + 23) = 0, so **n = 10** (n must be a positive whole number). Check: 10 × 23 = 230 ✓. 11.5 comes from the other root −11.5 — a number of terms can't be negative or fractional. 23 is the other factor of n(2n + 3), not n. 46 is just 230 ÷ 5.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: [
          "Write {{S_n}} in terms of n and set it equal to 230.",
          "You should get a quadratic: {{2n^2 + 3n - 230 = 0}}.",
          "Factorise or use the formula — then decide which root makes sense.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q11",
        question:
          "Ravi saves $20 in week 1, $25 in week 2, $30 in week 3, and so on, saving $5 more each week. How much has he saved in total after 26 weeks?",
        options: ["$145", "$2210", "$2145", "$3770"],
        answerIndex: 2,
        explanation:
          "a = 20, d = 5, n = 26. Week 26: 20 + 25 × 5 = $145. Total = {{26/2}} × (20 + 145) = 13 × 165 = **$2145**. $145 is only what he saves in week 26. $2210 uses n instead of n − 1: 13 × (40 + 130). $3770 multiplies the last week by 26, as if he saved $145 every week.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: [
          "Is the question asking for one week's saving or the total?",
          "Find the week-26 amount, then use {{S = n/2}}(first + last).",
        ],
        strategy: "Use a formula",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q12",
        question: "Which term of the sequence 7, 11, 15, 19, … is the first one greater than 500?",
        options: ["124th", "125th", "503rd", "124.25th"],
        answerIndex: 1,
        explanation:
          "The nth term is 4n + 3. Solve 4n + 3 > 500: 4n > 497, n > 124.25. The first whole number above 124.25 is **125**, and the 125th term is 503. Check: the 124th term is 499 — not yet over 500. 124th rounds down. 503 is the value of the term, not its position. 124.25 isn't a position at all.",
        difficulty: "core",
        guideRef: "linear-nth-term",
        hints: [
          "Write the nth term and form an inequality.",
          "n > 124.25 — which whole number is the first that works?",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q13",
        question:
          "The sum of the first n terms of a sequence is {{S_n = 3n^2 + 2n}}. Work out the 10th term of the sequence.",
        options: ["59", "320", "32", "62"],
        answerIndex: 0,
        explanation:
          "The 10th term is what you add to {{S_9}} to get {{S_10}}: {{u_10 = S_10 - S_9}} = (300 + 20) − (243 + 18) = 320 − 261 = **59**. (In general {{u_n = 6n - 1}}.) 320 is the sum of 10 terms, not the 10th term. 32 is the average of the first 10 terms, {{S_10 / 10}}. 62 comes from 6n + 2 — 'differentiating' {{S_n}}, which doesn't apply to sequences.",
        difficulty: "challenge",
        guideRef: "arithmetic-series",
        hints: [
          "What is the difference between 'the sum of 10 terms' and 'the sum of 9 terms'?",
          "{{u_10 = S_10 - S_9}}.",
          "{{S_10 = 320}} and {{S_9 = 261}}.",
        ],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q14",
        question: "Find an expression for the nth term of the quadratic sequence 4, 9, 18, 31, 48, …",
        options: ["4n² − 7n + 7", "2n² + n + 1", "2n² − n + 3", "2n² + 2"],
        answerIndex: 2,
        explanation:
          "First differences: 5, 9, 13, 17. Second difference: 4, so the {{n^2}} coefficient is 4 ÷ 2 = 2. Subtract {{2n^2}} (2, 8, 18, 32, 50): residue 2, 1, 0, −1, −2 = −n + 3. So the nth term is **{{2n^2 - n + 3}}**. Check: n = 5 gives 50 − 5 + 3 = 48 ✓. {{4n^2 - 7n + 7}} forgets to halve the second difference — it fits 4 and 9 but gives 22 for the third term. {{2n^2 + n + 1}} has a sign slip in the linear part (gives 11 second). {{2n^2 + 2}} only matches the first term.",
        difficulty: "challenge",
        guideRef: "quadratic-sequences",
        hints: [
          "Find the first and second differences.",
          "The coefficient of {{n^2}} is half the second difference.",
          "Subtract {{2n^2}} from each term — what linear sequence is left?",
        ],
        strategy: "Find a pattern",
      },
      {
        kind: "mcq",
        id: "sequences-m1-q15",
        question: "The nth term of a sequence is {{(6n - 5)/(2n + 7)}}. What value do the terms approach as n becomes very large?",
        options: ["{{-5/7}}", "{{1/9}}", "1", "3"],
        answerIndex: 3,
        explanation:
          "Divide top and bottom by n: {{(6 - 5/n)/(2 + 7/n)}}. As n → ∞, {{5/n}} and {{7/n}} → 0, so the terms approach {{6/2}} = **3**. {{-5/7}} is the value at n = 0 — the constants matter least for large n, not most. {{1/9}} is just the first term. 1 comes from thinking 'top and bottom both grow without limit, so the fraction tends to 1' — it's the *rate* of growth that matters.",
        difficulty: "challenge",
        guideRef: "limiting-values",
        hints: [
          "Try n = 1000. What is the fraction close to?",
          "Divide every term on the top and bottom by n.",
          "What happens to {{5/n}} and {{7/n}} as n gets huge?",
        ],
        strategy: "Consider extremes",
      },
    ],
  },
  {
    id: "sequences-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "sequences-m2-q01",
        question: "The nth term of a sequence is 5 − 2n. Which list shows the first three terms?",
        options: ["5, 3, 1", "−3, −1, 1", "3, 1, −1", "1, −1, −3"],
        answerIndex: 2,
        explanation:
          "n = 1: 5 − 2 = 3; n = 2: 5 − 4 = 1; n = 3: 5 − 6 = −1. So **3, 1, −1**. 5, 3, 1 starts from n = 0. −3, −1, 1 is the sequence 2n − 5 (signs reversed). 1, −1, −3 uses n = 2, 3, 4.",
        difficulty: "warmup",
        guideRef: "linear-nth-term",
        hints: ["The first term means n = 1. Substitute n = 1, 2, 3."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q02",
        question: "An arithmetic sequence has first term 12 and common difference 2.5. Find the 15th term.",
        options: ["49.5", "47", "37.5", "170.5"],
        answerIndex: 1,
        explanation:
          "{{u_15 = a + 14d}} = 12 + 14 × 2.5 = 12 + 35 = **47**. The 15th term is 14 steps after the first. 49.5 adds 15 steps. 37.5 is 15 × 2.5, forgetting the starting value. 170.5 swaps a and d: 14 × 12 + 2.5.",
        difficulty: "warmup",
        guideRef: "arithmetic-sequences",
        hints: ["How many steps of 2.5 are there from the 1st term to the 15th term?"],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q03",
        question: "Work out 1 + 2 + 3 + … + 99 + 100.",
        options: ["5050", "10100", "5000", "5100"],
        answerIndex: 0,
        explanation:
          "Gauss's trick: write the sum forwards and backwards and add. Every pair (1 + 100, 2 + 99, …) makes 101, and there are 100 pairs, so twice the sum is 10 100. The sum is **5050**. Or {{S = 100/2}} × (1 + 100). 10 100 forgets to halve. 5000 is 50 × 100 (pairs of 100 instead of 101). 5100 is 50 × 102.",
        difficulty: "warmup",
        guideRef: "arithmetic-series",
        hints: ["Pair the first and last numbers, the second and second-last, … What does each pair add to?"],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q04",
        question:
          "Here are the first three patterns in a sequence made from matchsticks. Pattern 1 uses 4 matchsticks, pattern 2 uses 7 and pattern 3 uses 10. How many matchsticks are needed for pattern 30?",
        diagram: `<svg viewBox="0 0 290 80" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three matchstick patterns: one square from 4 sticks, two joined squares from 7 sticks, three joined squares from 10 sticks"><rect x="0" y="0" width="290" height="80" fill="#ffffff"/><g stroke="#334155" stroke-width="3" stroke-linecap="round"><line x1="20" y1="20" x2="44" y2="20"/><line x1="20" y1="44" x2="44" y2="44"/><line x1="20" y1="20" x2="20" y2="44"/><line x1="44" y1="20" x2="44" y2="44"/><line x1="90" y1="20" x2="114" y2="20"/><line x1="114" y1="20" x2="138" y2="20"/><line x1="90" y1="44" x2="114" y2="44"/><line x1="114" y1="44" x2="138" y2="44"/><line x1="90" y1="20" x2="90" y2="44"/><line x1="114" y1="20" x2="114" y2="44"/><line x1="138" y1="20" x2="138" y2="44"/><line x1="190" y1="20" x2="214" y2="20"/><line x1="214" y1="20" x2="238" y2="20"/><line x1="238" y1="20" x2="262" y2="20"/><line x1="190" y1="44" x2="214" y2="44"/><line x1="214" y1="44" x2="238" y2="44"/><line x1="238" y1="44" x2="262" y2="44"/><line x1="190" y1="20" x2="190" y2="44"/><line x1="214" y1="20" x2="214" y2="44"/><line x1="238" y1="20" x2="238" y2="44"/><line x1="262" y1="20" x2="262" y2="44"/></g><g font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="32" y="66">Pattern 1</text><text x="114" y="66">Pattern 2</text><text x="226" y="66">Pattern 3</text></g></svg>`,
        options: ["120", "94", "88", "91"],
        answerIndex: 3,
        explanation:
          "Each new square needs 3 more sticks, so the rule is 3n + 1 (check: n = 1 gives 4 ✓). Pattern 30 needs 3 × 30 + 1 = **91**. 120 is 4 × 30, which counts every shared stick twice. 94 uses 3n + 4 (the first term as the constant). 88 is 3 × 29 + 1, using the wrong pattern number.",
        difficulty: "warmup",
        guideRef: "linear-nth-term",
        hints: ["How many extra sticks does each new square need? Use that as the multiplier of n."],
        strategy: "Find a pattern",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q05",
        question:
          "A sequence has nth term 6n + 4. Arjun says, \"Every term is even.\" Priya says, \"No term is a multiple of 3.\" Who is correct?",
        options: ["Only Arjun", "Only Priya", "Both of them", "Neither of them"],
        answerIndex: 2,
        explanation:
          "6n + 4 = 2(3n + 2), which is 2 × a whole number, so every term is even — Arjun is right. Also 6n + 4 = 3(2n + 1) + 1, which is always 1 more than a multiple of 3, so no term is a multiple of 3 — Priya is right. **Both** are correct. Listing the terms 10, 16, 22, 28 supports both claims, but only the algebra proves them for every n. 'Only Arjun' is tempting if you think 6n + 4 'contains a 6, so has a 3 in it' — the + 4 spoils that.",
        difficulty: "core",
        guideRef: "linear-nth-term",
        hints: [
          "Write out the first few terms. Do both claims hold so far?",
          "To prove 'always even', factorise 6n + 4 with a 2.",
          "Write 6n + 4 as 3 × (something) + remainder.",
        ],
        strategy: "Look for an invariant",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q06",
        question: "The expressions x + 1, 2x + 3 and 4x − 1 are three consecutive terms of an arithmetic sequence. Find x.",
        options: ["6", "0", "3", "1"],
        answerIndex: 0,
        explanation:
          "Consecutive terms have equal differences: (2x + 3) − (x + 1) = (4x − 1) − (2x + 3), so x + 2 = 2x − 4, giving **x = 6**. The terms are 7, 15, 23 — difference 8 each time ✓. 0 comes from a sign slip: −1 − (+3) written as +2. 3 uses the fact that the middle term is the mean of its neighbours, 2(2x + 3) = 5x, but expands the bracket as 4x + 3. 1 sets the middle term equal to the *sum* of the other two.",
        difficulty: "core",
        guideRef: "arithmetic-sequences",
        hints: [
          "What is the same about the gap between term 1 and 2, and the gap between term 2 and 3?",
          "Set the two differences equal. Use brackets when subtracting.",
          "x + 2 = 2x − 4.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q07",
        question:
          "A theatre has 25 rows of seats. The front row has 18 seats and each row has 2 more seats than the row in front. How many seats are there altogether?",
        options: ["66", "1050", "1075", "1650"],
        answerIndex: 1,
        explanation:
          "a = 18, d = 2, n = 25. Back row: 18 + 24 × 2 = 66. Total = {{25/2}} × (18 + 66) = 25 × 42 = **1050**. 66 is just the back row. 1075 uses n instead of n − 1: {{25/2}} × (36 + 50). 1650 = 25 × 66, as if every row were as long as the back row.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: [
          "Is this asking for one row or the total?",
          "Find the number of seats in row 25 first.",
          "Total = {{n/2}}(first + last).",
        ],
        strategy: "Use a formula",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q08",
        question:
          "Sequence A is 3, 8, 13, 18, … and sequence B is 59, 56, 53, 50, … For which value of n is the nth term of A equal to the nth term of B?",
        options: ["38", "7.625", "30", "8"],
        answerIndex: 3,
        explanation:
          "A: 5n − 2. B: 62 − 3n (zero term 59 + 3 = 62). Solve 5n − 2 = 62 − 3n: 8n = 64, **n = 8**. Both 8th terms are 38 ✓. 38 is the common *value*, not n. 7.625 writes B as 59 − 3n (first term as constant). 30 subtracts 3n from both sides instead of adding (2n = 60).",
        difficulty: "core",
        guideRef: "linear-nth-term",
        hints: [
          "Find the nth term of each sequence.",
          "B goes down by 3, so it contains −3n. What is its zero term?",
          "Set the two nth terms equal and solve.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q09",
        question:
          "An arithmetic sequence has 18 terms. The first term is 7 and the last term is 92. Find the common difference.",
        options: ["{{85/18}}", "5", "{{46/9}}", "85"],
        answerIndex: 1,
        explanation:
          "The 18th term is a + 17d, so 7 + 17d = 92, 17d = 85, **d = 5**. Check: 7, 12, 17, …, 92 ✓. {{85/18}} divides by 18 — but 18 terms have only 17 gaps (fence-post error). {{46/9}} = 92 ÷ 18 ignores the first term. 85 forgets to divide by the number of steps.",
        difficulty: "core",
        guideRef: "arithmetic-sequences",
        hints: [
          "How many gaps are there between 18 fence posts?",
          "Write the last term as a + 17d.",
        ],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q10",
        question: "Work out the sum of all the multiples of 7 between 100 and 300.",
        options: ["5586", "5386.5", "5600", "6321"],
        answerIndex: 0,
        explanation:
          "The first multiple is 105 (7 × 15) and the last is 294 (7 × 42). Number of terms = 42 − 15 + 1 = 28. Sum = {{28/2}} × (105 + 294) = 14 × 399 = **5586**. 5386.5 counts 27 terms (42 − 15 without the +1). 5600 uses 100 and 300, which aren't multiples of 7. 6321 adds every multiple of 7 up to 300, including those below 100.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: [
          "What are the first and last multiples of 7 in the range?",
          "105 = 7 × 15 and 294 = 7 × 42. How many terms is that?",
          "Use {{S = n/2}}(first + last).",
        ],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q11",
        question: "Find an expression for the nth term of the sequence {{3/5}}, {{5/8}}, {{7/11}}, {{9/14}}, …",
        options: ["{{(2n + 3)/(3n + 5)}}", "{{(3n + 2)/(2n + 1)}}", "{{(2n + 1)/(3n + 5)}}", "{{(2n + 1)/(3n + 2)}}"],
        answerIndex: 3,
        explanation:
          "Treat the numerators and denominators as two separate linear sequences. Tops 3, 5, 7, 9: 2n + 1. Bottoms 5, 8, 11, 14: 3n + 2. So the nth term is **{{(2n + 1)/(3n + 2)}}**. Check n = 4: {{9/14}} ✓. {{(2n + 3)/(3n + 5)}} uses the first terms as the constants. {{(2n + 1)/(3n + 5)}} makes that slip on the bottom only. {{(3n + 2)/(2n + 1)}} is upside down.",
        difficulty: "core",
        guideRef: "quadratic-sequences",
        hints: [
          "Look at the numerators on their own, then the denominators on their own.",
          "Each is a linear sequence — find its nth term the usual way.",
        ],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q12",
        question: "Which expression gives the sum of the first n odd numbers, 1 + 3 + 5 + … + (2n − 1)?",
        options: ["2n − 1", "n(n + 1)", "n²", "2n²"],
        answerIndex: 2,
        explanation:
          "a = 1, d = 2: {{S_n = n/2 (2 + 2(n - 1)) = n/2 * 2n = n^2}}. Check: 1 + 3 + 5 = 9 = {{3^2}} ✓. (Picture it: each odd number adds an L-shaped border to a square.) 2n − 1 is the nth odd number, not the sum. n(n + 1) is the sum of the first n *even* numbers. {{2n^2}} forgets the {{1/2}} in the formula.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: [
          "Try n = 1, 2, 3, 4. Do the totals look familiar?",
          "Use {{S_n = n/2 (2a + (n - 1)d)}} with a = 1, d = 2.",
        ],
        strategy: "Try small cases",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q13",
        question:
          "Siti runs 2 km on day 1 of her training plan and increases the distance by 0.5 km each day. On which day does her **total** distance first reach 100 km?",
        options: ["Day 16", "Day 17", "Day 197", "Day 50"],
        answerIndex: 1,
        explanation:
          "a = 2, d = 0.5: {{S_n = n/2 (4 + 0.5(n - 1)) = (n(n + 7))/4}}. Solve n(n + 7) = 400: {{n^2 + 7n - 400 = 0}} gives n ≈ 16.8. Check whole days: {{S_16 = (16 * 23)/4}} = 92 km; {{S_17 = (17 * 24)/4}} = 102 km. So **day 17**. Day 16 rounds 16.8 down — her total is still only 92 km. Day 197 is when a *single* run reaches 100 km (2 + 0.5(n − 1) = 100). Day 50 assumes she runs 2 km every day.",
        difficulty: "challenge",
        guideRef: "arithmetic-series",
        hints: [
          "This is about the total, so you need {{S_n}}, not the nth term.",
          "Form the inequality {{S_n >= 100}} and turn it into a quadratic.",
          "n ≈ 16.8 — check {{S_16}} and {{S_17}} to decide.",
        ],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q14",
        question: "The nth term of a sequence is {{(4n + 3)/(n + 1)}}. Which statement is true?",
        options: [
          "The terms increase and get closer and closer to 4, but never reach it",
          "The terms decrease towards 4",
          "The terms get closer and closer to 3",
          "The terms increase without limit, because 4n + 3 keeps growing",
        ],
        answerIndex: 0,
        explanation:
          "Rewrite: {{(4n + 3)/(n + 1) = (4(n + 1) - 1)/(n + 1) = 4 - 1/(n + 1)}}. As n grows, {{1/(n + 1)}} shrinks towards 0 but is always positive, so the terms **increase towards 4 but never reach it** ({{3 1/2}}, {{3 2/3}}, {{3 3/4}}, …). They don't decrease — a smaller amount is subtracted each time. 3 is the ratio of the constants, which matter least for large n. The top grows, but so does the bottom — at the same rate.",
        difficulty: "challenge",
        guideRef: "limiting-values",
        hints: [
          "Work out the first three terms as mixed numbers.",
          "Can you write 4n + 3 as 4(n + 1) − something?",
          "{{4 - 1/(n + 1)}}: what happens to the subtracted part?",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "sequences-m2-q15",
        question:
          "Three numbers form an arithmetic sequence. Their sum is 27 and their product is 585. What is the largest of the three numbers?",
        options: ["9", "17", "4", "13"],
        answerIndex: 3,
        explanation:
          "Use symmetry: call the numbers a − d, a, a + d. Sum: 3a = 27, so a = 9. Product: 9(9 − d)(9 + d) = 585, so {{81 - d^2 = 65}}, {{d^2 = 16}}, d = ±4. The numbers are 5, 9, 13 (in either order), so the largest is **13**. Check: 5 × 9 × 13 = 585 ✓. 9 is the middle number. 4 is the common difference. 17 adds 2d to the middle term.",
        difficulty: "challenge",
        guideRef: "arithmetic-sequences",
        hints: [
          "Naming them a, a + d, a + 2d works, but is there a more symmetric choice?",
          "Try a − d, a, a + d. What does the sum tell you straight away?",
          "With a = 9: 9(81 − {{d^2}}) = 585.",
        ],
        strategy: "Use symmetry",
      },
    ],
  },
  {
    id: "sequences-m3",
    title: "MCQ Paper 3 — Exam style",
    questions: [
      {
        kind: "mcq",
        id: "sequences-m3-q01",
        question: "Here are the first four terms of a sequence: 11, 14, 17, 20. Is 140 a term of this sequence?",
        options: [
          "Yes — it is the 44th term",
          "Yes — it is the 43rd term",
          "No — 140 is not a multiple of 3",
          "No — 3n = 140 gives n = 46.7, which is not a whole number",
        ],
        answerIndex: 0,
        explanation:
          "The nth term is 3n + 8. Solve 3n + 8 = 140: 3n = 132, n = 44. So **yes, the 44th term**. 43rd counts the 43 steps of 3 after 11 but forgets that the first term is term 1. 'Not a multiple of 3' ignores the + 8 — the terms are not multiples of 3 either. n = 46.7 forgets to subtract the 8 before dividing.",
        difficulty: "warmup",
        guideRef: "linear-nth-term",
        hints: ["Find the nth term first, then set it equal to 140 and solve."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q02",
        question: "An arithmetic sequence begins 2.5, 4, 5.5, 7, … Work out the 40th term.",
        options: ["62.5", "61", "60", "100"],
        answerIndex: 1,
        explanation:
          "d = 1.5, so {{u_40 = 2.5 + 39 × 1.5}} = 2.5 + 58.5 = **61**. 62.5 adds 40 steps instead of 39. 60 is 40 × 1.5, forgetting the start. 100 is 2.5 × 40, treating the sequence as multiples of the first term.",
        difficulty: "warmup",
        guideRef: "arithmetic-sequences",
        hints: ["Use a + (n − 1)d with a = 2.5 and d = 1.5."],
        strategy: "Use a formula",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q03",
        question:
          "An arithmetic series has first term a and common difference d. Which formula gives the sum of its first n terms?",
        options: [
          "{{n/2}}(a + (n − 1)d)",
          "n(2a + (n − 1)d)",
          "{{n/2}}(2a + (n − 1)d)",
          "a + (n − 1)d",
        ],
        answerIndex: 2,
        explanation:
          "**{{S_n = n/2}}(2a + (n − 1)d)** — it is on the Edexcel formula sheet. Each pair 'first + last' is a + (a + (n − 1)d) = 2a + (n − 1)d, and there are {{n/2}} pairs. {{n/2}}(a + (n − 1)d) counts the first term only once in each pair. n(2a + (n − 1)d) forgets the half (it is twice the sum). a + (n − 1)d is the nth *term*.",
        difficulty: "warmup",
        guideRef: "arithmetic-series",
        hints: ["Test each formula on 1 + 2 + 3 (a = 1, d = 1, n = 3), whose sum is 6."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q04",
        question: "Find an expression for the nth term of the quadratic sequence 3, 6, 11, 18, 27, …",
        options: ["2n² + 1", "n² + 3", "3n", "n² + 2"],
        answerIndex: 3,
        explanation:
          "First differences 3, 5, 7, 9; second difference 2, so the {{n^2}} coefficient is {{2/2}} = 1. The squares 1, 4, 9, 16, 25 are each 2 less than the terms, so the nth term is **{{n^2 + 2}}**. {{2n^2 + 1}} forgets to halve the second difference (gives 9 second). {{n^2 + 3}} uses the first term as the constant (gives 4 first). 3n uses the first difference, which isn't constant here.",
        difficulty: "warmup",
        guideRef: "quadratic-sequences",
        hints: ["Find the second difference, halve it, then compare the terms with {{n^2}}."],
        strategy: "Find a pattern",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q05",
        question: "Here is a sequence: 200, 193, 186, 179, … Work out the smallest positive term in the sequence.",
        options: ["4", "29", "−3", "3"],
        answerIndex: 0,
        explanation:
          "nth term: 207 − 7n. Need 207 − 7n > 0, so n < 29.57; the last positive term is n = 29: 207 − 203 = **4**. (Equivalently, 200 = 28 × 7 + 4.) 29 is the position, not the term. −3 is the 30th term — the first negative one. 3 comes from 7 × 29 = 203 and then 203 − 200, the wrong way round.",
        difficulty: "core",
        guideRef: "linear-nth-term",
        hints: [
          "Find the nth term, then form an inequality: nth term > 0.",
          "Which is the largest whole number n that works?",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q06",
        question:
          "The 5th term of an arithmetic sequence is 23 and the 12th term is 58. Is 300 a term of the sequence?",
        options: [
          "Yes — it is the 60th term",
          "Yes — 300 is a multiple of 5",
          "No — 5n − 2 = 300 gives n = 60.4",
          "No — the terms are all odd and 300 is even",
        ],
        answerIndex: 2,
        explanation:
          "7d = 58 − 23 = 35, so d = 5; a = 23 − 4 × 5 = 3. The nth term is 5n − 2. Solving 5n − 2 = 300 gives n = 60.4, not a whole number, so **no**. (The 60th term is 298 and the 61st is 303.) 'The 60th term' rounds n. 'Multiple of 5' ignores the −2: the terms end in 3 or 8. 'All odd' is false — 8 and 18 are terms — so that reason is wrong even though the conclusion is right.",
        difficulty: "core",
        guideRef: "arithmetic-sequences",
        hints: [
          "Use the two given terms to find d, then a.",
          "Write the nth term and set it equal to 300.",
          "Is n a whole number?",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q07",
        question:
          "A new hawker stall sells 40 cups of chendol on its first day. Each day it sells 6 more cups than the day before. How many cups does it sell altogether in its first 30 days?",
        options: ["214", "3810", "3900", "6420"],
        answerIndex: 1,
        explanation:
          "a = 40, d = 6, n = 30. Day 30: 40 + 29 × 6 = 214. Total = {{30/2}} × (40 + 214) = 15 × 254 = **3810**. 214 is the sales on day 30 only. 3900 uses n instead of n − 1: 15 × (80 + 180). 6420 = 30 × 214, as if every day were as busy as day 30.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: [
          "Does the question want one day's sales or the total?",
          "Find the day-30 sales, then use {{S = n/2}}(first + last).",
        ],
        strategy: "Use a formula",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q08",
        question:
          "For an arithmetic sequence, the sum of the 2nd and 4th terms is 30, and the 7th term is 33. Find the first term.",
        options: ["4.5", "1.5", "15", "6"],
        answerIndex: 3,
        explanation:
          "{{u_2 + u_4 = (a + d) + (a + 3d) = 2a + 4d = 30}}, so a + 2d = 15. {{u_7 = a + 6d = 33}}. Subtract: 4d = 18, d = 4.5, so a = 15 − 9 = **6**. Check: 10.5 + 19.5 = 30 ✓ and 6 + 27 = 33 ✓. 4.5 is d, not a. 1.5 comes from writing the nth term as a + nd. 15 is a + 2d, which is the 3rd term.",
        difficulty: "core",
        guideRef: "arithmetic-sequences",
        hints: [
          "Write each term as a + (n − 1)d.",
          "You should get a + 2d = 15 and a + 6d = 33.",
          "Subtract to find d first.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q09",
        question:
          "The sum of the first 10 terms of an arithmetic series is 175. The sum of the first 20 terms is 650. Find the common difference.",
        options: ["3", "4", "47.5", "15"],
        answerIndex: 0,
        explanation:
          "{{S_10 = 5(2a + 9d) = 175}}, so 2a + 9d = 35. {{S_20 = 10(2a + 19d) = 650}}, so 2a + 19d = 65. Subtract: 10d = 30, **d = 3** (and a = 4). 4 is the first term. 47.5 is (650 − 175) ÷ 10, which is the mean of terms 11 to 20, not d. 15 is {{650/20 - 175/10}}, the difference of two averages.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: [
          "Write two equations using {{S_n = n/2 (2a + (n - 1)d)}}.",
          "Simplify each: 2a + 9d = 35 and 2a + 19d = 65.",
          "Subtract to eliminate a.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q10",
        question:
          "The arithmetic series 51 + 48 + 45 + … is summed. How many terms are needed for the sum to be exactly 0?",
        options: ["18", "34", "35", "17"],
        answerIndex: 2,
        explanation:
          "{{S_n = n/2 (102 - 3(n - 1)) = n/2 (105 - 3n)}}. For n > 0, {{S_n = 0}} when 105 − 3n = 0, so **n = 35**. It makes sense by symmetry: the terms run 51, 48, …, 0, …, −48, −51, and the 35th term is −51, which cancels the first. 18 is where the *term* is 0 (the sum is still positive). 17 is the last positive term. 34 comes from 102 − 3n, forgetting the (n − 1).",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: [
          "Write {{S_n}} in terms of n.",
          "{{n/2 (105 - 3n) = 0}} — which factor can be zero?",
        ],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q11",
        question:
          "A gym charges a $60 joining fee and then $45 per month. In which month does the total amount paid first go over $1000?",
        options: ["Month 20", "Month 21", "Month 23", "Month 22"],
        answerIndex: 1,
        explanation:
          "Total after n months: 60 + 45n. Solve 60 + 45n > 1000: 45n > 940, n > 20.9, so **month 21** ($1005). After 20 months the total is $960. Month 20 rounds down. Months 22 and 23 forget the joining fee (1000 ÷ 45 = 22.2), rounding it down or up.",
        difficulty: "core",
        guideRef: "linear-nth-term",
        hints: [
          "Write the total paid after n months as a linear expression.",
          "Form an inequality and solve it — then pick a whole number of months.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q12",
        question:
          "To derive the formula for {{S_n}}, write S = a + (a + d) + … + (a + (n − 1)d), then write the same sum backwards underneath and add the two lines term by term. What is 2S equal to?",
        options: [
          "n(a + (n − 1)d)",
          "2a + (n − 1)d",
          "(n − 1)(2a + nd)",
          "n(2a + (n − 1)d)",
        ],
        answerIndex: 3,
        explanation:
          "Each column adds to the same total: a + (a + (n − 1)d) = 2a + (n − 1)d. There are n columns, so **2S = n(2a + (n − 1)d)**, giving {{S = n/2}}(2a + (n − 1)d). 2a + (n − 1)d is only one column. n(a + (n − 1)d) adds just one copy of a per column. (n − 1)(…) miscounts the columns: n terms make n columns, not n − 1.",
        difficulty: "core",
        guideRef: "arithmetic-series",
        hints: [
          "What does each pair of terms (one from each line) add to?",
          "How many pairs (columns) are there?",
        ],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q13",
        question:
          "The 4th term of an arithmetic sequence is three times the first term. The sum of the first 6 terms is 96. Find the first term.",
        options: ["6", "4", "3", "7.11 (to 3 s.f.)"],
        answerIndex: 0,
        explanation:
          "a + 3d = 3a, so 3d = 2a and d = {{(2a)/3}}. {{S_6 = 3(2a + 5d) = 3(2a + (10a)/3) = 16a = 96}}, so **a = 6** (and d = 4). Check: 6, 10, 14, 18, 22, 26 — the 4th term is 18 = 3 × 6 ✓ and the sum is 96 ✓. 4 is d. 7.11 uses a + 4d for the 4th term. 3 comes from forgetting the half: {{S_6 = 6(2a + 5d)}}.",
        difficulty: "challenge",
        guideRef: "arithmetic-sequences",
        hints: [
          "Turn the first sentence into an equation in a and d.",
          "Express d in terms of a, then substitute into {{S_6}}.",
          "{{S_6 = 6/2 (2a + 5d)}} with d = {{(2a)/3}}.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q14",
        question: "Work out the sum of all the whole numbers from 1 to 200 that are **not** multiples of 3.",
        options: ["6633", "13467", "13266", "33567"],
        answerIndex: 1,
        explanation:
          "Find the total and subtract what you don't want. 1 + 2 + … + 200 = {{200/2}} × 201 = 20 100. Multiples of 3: 3, 6, …, 198 — that's 66 terms, summing to 33 × (3 + 198) = 6633. Answer: 20 100 − 6633 = **13 467**. 6633 is the sum of the multiples you were meant to remove. 13 266 counts 67 multiples (up to 201, which is over 200). 33 567 forgets to halve: 200 × 201 − 6633.",
        difficulty: "challenge",
        guideRef: "arithmetic-series",
        hints: [
          "Adding the 'not multiples' directly is messy. What is easier to find?",
          "Find 1 + 2 + … + 200, then subtract the multiples of 3.",
          "How many multiples of 3 are there up to 200? The last is 198.",
        ],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "sequences-m3-q15",
        question:
          "The nth term of a sequence is {{(5n - 2)/(n + 4)}}. The terms approach a limit L. What is the smallest value of n for which the nth term is less than 0.01 away from L?",
        options: ["2196", "2200", "2197", "1797"],
        answerIndex: 2,
        explanation:
          "Divide through by n: {{(5 - 2/n)/(1 + 4/n) -> 5}}, so L = 5. The gap is {{5 - (5n - 2)/(n + 4) = (5n + 20 - 5n + 2)/(n + 4) = 22/(n + 4)}}. Need {{22/(n + 4) < 0.01}}: n + 4 > 2200, n > 2196, so **n = 2197**. At n = 2196 the gap is exactly 0.01 — not *less than*. 2200 forgets to subtract the 4. 1797 comes from a sign slip giving 18 on top instead of 22.",
        difficulty: "challenge",
        guideRef: "limiting-values",
        hints: [
          "First find L by dividing top and bottom by n.",
          "Write L − {{u_n}} as a single fraction.",
          "You should get {{22/(n + 4)}}. Make it less than 0.01.",
        ],
        strategy: "Consider extremes",
      },
    ],
  },
];
