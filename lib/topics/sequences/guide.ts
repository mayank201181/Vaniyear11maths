import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "sequences",
  title: "Sequences & Series",
  strand: "Algebra",
  icon: "🔢",
  summary: "Find the rule, jump to any term, add a hundred terms in one line — and see where a sequence is heading.",
  intro:
    "A sequence rule lets you leap straight to the 500th term, test whether a number belongs, and — with Gauss's pairing trick — add up hundreds of terms in a single line. On 4MA1 Higher papers this turns up as nth-term questions, arithmetic-series problems in context (savings, seats, training plans) and simultaneous equations built from sequence facts, usually 3–6 marks each. The H+ sections — quadratic and fractional sequences, and proving a limiting value — are your first taste of the algebra of patterns and limits that runs all the way through A level.",
  guide: [
    // ------------------------------------------------------------------
    {
      id: "linear-nth-term",
      heading: "The nth term of linear sequences",
      discovery: {
        problem:
          "The sequence 5, 8, 11, 14, … keeps going. Without listing terms: is 100 in it? Is 101? What is the 50th term? Try to find a single rule that turns the **position** (1st, 2nd, 3rd …) straight into the **term**.",
        idea:
          "Each term is 3 more than the last, so the terms track the 3 times table: 3, 6, 9, 12 … but always 2 higher. So the term in position n is **3n + 2**. The 50th term is 3 × 50 + 2 = 152. For 100: {{3n + 2 = 100}} gives {{n = 98/3}} = 32.666… — not a whole number, so 100 is **not** a term. For 101: {{3n + 2 = 101}} gives n = 33, so 101 **is** the 33rd term.",
      },
      body:
        "A **linear** (arithmetic) sequence goes up or down by the same amount each time — the **common difference**.\n\nThere are two kinds of rule:\n\n- A **term-to-term** rule says how to get the next term: 'add 3'. Easy to continue, useless for the 500th term.\n- A **position-to-term** rule — the **nth term** — gives any term directly from its position n: '3n + 2'.\n\n**Finding the nth term.** A linear nth term has the form {{dn + b}}.\n\n1. The common difference d is the number in front of n.\n2. The **zero term** b is the term *before* the first one (go back one step).\n\n| n | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| term | 7 | 11 | 15 | 19 |\n| 4n | 4 | 8 | 12 | 16 |\n| term − 4n | 3 | 3 | 3 | 3 |\n\nSo 7, 11, 15, 19, … has nth term **4n + 3** (and the zero term is 7 − 4 = 3 ✓).\n\n**Decreasing sequences** have a negative difference: 20, 17, 14, 11, … has d = −3 and zero term 23, so the nth term is {{-3n + 23}}, usually written **23 − 3n**.\n\n**Decimals and fractions** work the same way: 2.5, 3.25, 4, 4.75, … has d = 0.75 and zero term 1.75, so the nth term is 0.75n + 1.75.\n\n**Is it a term?** Set the nth term equal to the number and solve for n. The number is a term **only if n is a positive whole number**.\n\n**First term above (or below) a value.** Write an inequality and solve it, then take the next whole number:\n\n    {{3n + 2 > 200}}  →  {{n > 66}}  →  n = 67, term = 203\n\nRead carefully: is the question asking for the **position** n (67) or the **term** itself (203)?",
      diagram: `<svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of the terms of the sequence 3n + 2 plotted against position n from 1 to 6. The points 5, 8, 11, 14, 17, 20 lie on a straight line with gradient 3, which meets the vertical axis at the zero term 2."><rect x="0" y="0" width="420" height="290" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="50" y1="200" x2="380" y2="200"/><line x1="50" y1="150" x2="380" y2="150"/><line x1="50" y1="100" x2="380" y2="100"/><line x1="50" y1="50" x2="380" y2="50"/></g><g stroke="#334155" stroke-width="1.5"><line x1="50" y1="250" x2="385" y2="250"/><line x1="50" y1="250" x2="50" y2="20"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><line x1="95" y1="250" x2="95" y2="255" stroke="#334155"/><text x="95" y="269">1</text><line x1="140" y1="250" x2="140" y2="255" stroke="#334155"/><text x="140" y="269">2</text><line x1="185" y1="250" x2="185" y2="255" stroke="#334155"/><text x="185" y="269">3</text><line x1="230" y1="250" x2="230" y2="255" stroke="#334155"/><text x="230" y="269">4</text><line x1="275" y1="250" x2="275" y2="255" stroke="#334155"/><text x="275" y="269">5</text><line x1="320" y1="250" x2="320" y2="255" stroke="#334155"/><text x="320" y="269">6</text><line x1="365" y1="250" x2="365" y2="255" stroke="#334155"/><text x="365" y="269">7</text><text x="215" y="285">position n</text></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="end"><text x="44" y="254">0</text><text x="44" y="204">5</text><text x="44" y="154">10</text><text x="44" y="104">15</text><text x="44" y="54">20</text></g><text x="16" y="135" font-family="sans-serif" font-size="12" fill="#1f2937" transform="rotate(-90 16 135)" text-anchor="middle">term</text><line x1="50" y1="230" x2="365" y2="20" stroke="#6366f1" stroke-width="1.5" stroke-dasharray="5 4"/><g stroke="#b45309" stroke-width="2" fill="none"><line x1="140" y1="170" x2="185" y2="170"/><line x1="185" y1="170" x2="185" y2="140"/></g><text x="162" y="185" font-family="sans-serif" font-size="12" fill="#b45309" text-anchor="middle">+1</text><text x="203" y="159" font-family="sans-serif" font-size="12" fill="#b45309">+3</text><circle cx="95" cy="200" r="5" fill="#4f46e5" stroke="#1f2937"/><text x="85" y="191" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">5</text><circle cx="140" cy="170" r="5" fill="#4f46e5" stroke="#1f2937"/><text x="130" y="161" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">8</text><circle cx="185" cy="140" r="5" fill="#4f46e5" stroke="#1f2937"/><text x="175" y="131" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">11</text><circle cx="230" cy="110" r="5" fill="#4f46e5" stroke="#1f2937"/><text x="220" y="101" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">14</text><circle cx="275" cy="80" r="5" fill="#4f46e5" stroke="#1f2937"/><text x="265" y="71" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">17</text><circle cx="320" cy="50" r="5" fill="#4f46e5" stroke="#1f2937"/><text x="310" y="41" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">20</text><circle cx="50" cy="230" r="5" fill="#ffffff" stroke="#4f46e5" stroke-width="2"/><text x="60" y="222" font-family="sans-serif" font-size="11" fill="#4f46e5">zero term 2</text><text x="65" y="32" font-family="sans-serif" font-size="13" fill="#1f2937">nth term = 3n + 2</text><text x="65" y="50" font-family="sans-serif" font-size="11" fill="#475569">gradient 3 = common difference</text></svg>`,
      diagramCaption:
        "Plot term against position and a linear sequence lies on a straight line: the gradient is the common difference and the line meets the axis at the zero term.",
      workedExamples: [
        {
          title: "Find it, then test it",
          problem: "Here are the first four terms of a sequence: 7, 11, 15, 19, …\n\n(a) Find an expression, in terms of n, for the nth term.\n(b) Is 231 a term of the sequence? (c) Is 150 a term?",
          steps: [
            "(a) The difference is +4 each time, so the nth term starts 4n.",
            "4n gives 4, 8, 12, 16. Each term is 3 more, so the nth term is 4n + 3.",
            "Check n = 3: 4 × 3 + 3 = 15 ✓.",
            "(b) Solve {{4n + 3 = 231}}: 4n = 228, n = 57. A whole number, so 231 **is** a term (the 57th).",
            "(c) Solve {{4n + 3 = 150}}: 4n = 147, n = 36.75. Not a whole number, so 150 is **not** a term.",
            "Exam answer for (c): 'No, because {{4n + 3 = 150}} gives n = 36.75, which is not an integer.' The reason earns the mark.",
          ],
          answer: "(a) 4n + 3 (b) Yes, the 57th term (c) No — n = 36.75 is not an integer",
          yourTurn: {
            question: "Your turn: find an expression for the nth term of 2, 9, 16, 23, …",
            answer: { type: "expression", expr: "7n-5" },
            solution: "Difference +7, so start with 7n: 7, 14, 21, 28. Each term is 5 less, so the nth term is 7n − 5. (Zero term: 2 − 7 = −5 ✓.)",
          },
        },
        {
          title: "A decreasing sequence and the first negative term",
          problem: "The sequence 40, 37, 34, 31, … continues in the same way. (a) Find the nth term. (b) Find the first term of the sequence that is negative.",
          steps: [
            "(a) The difference is −3, so the nth term starts −3n.",
            "Zero term: 40 + 3 = 43. So the nth term is 43 − 3n. Check n = 2: 43 − 6 = 37 ✓.",
            "(b) Negative means {{43 - 3n < 0}}, so {{3n > 43}} and {{n > 14.33…}}.",
            "The first whole number that works is n = 15.",
            "The 15th term is 43 − 3 × 15 = 43 − 45 = −2. (Check the 14th: 43 − 42 = 1, still positive ✓.)",
          ],
          answer: "(a) 43 − 3n (b) −2 (the 15th term)",
          yourTurn: {
            question: "Your turn: the sequence 61, 57, 53, 49, … continues in the same way. Find the first term that is negative.",
            answer: { type: "number", value: -3 },
            solution: "nth term = 65 − 4n. {{65 - 4n < 0}} gives n > 16.25, so n = 17. The 17th term is 65 − 68 = −3. (The 16th is 65 − 64 = 1.)",
          },
        },
      ],
      keyPoints: [
        "Linear nth term = (difference) × n + (zero term).",
        "The zero term is the term before the first: first term − difference.",
        "Decreasing sequence → negative coefficient of n, e.g. 23 − 3n.",
        "A number is a term only if solving gives n as a positive whole number — say so in words.",
        "For 'first term greater than …' solve an inequality, round n **up**, then decide whether they want n or the term.",
        "Always check your nth term with n = 1 and n = 2.",
      ],
      whyItWorks:
        "Each step along the sequence adds d, so after n steps from the zero term you have added d exactly n times: term = zero term + n × d. That is why the coefficient of n is the difference and the constant is the zero term. On a graph of term against position it is just y = mx + c in disguise: d is the gradient and the zero term is the y-intercept.",
      strategies: ["Find a pattern", "Work backwards", "Check by substituting", "Use the inverse"],
      thinkDeeper:
        "The sequences 3n + 2 (5, 8, 11, …) and 5n + 1 (6, 11, 16, …) share some terms: 11 is the first. List enough terms to find the next two shared terms. The shared terms form a new linear sequence — find its nth term, and explain why its common difference has to be 15.",
    },
    // ------------------------------------------------------------------
    {
      id: "arithmetic-sequences",
      heading: "Arithmetic sequences: a + (n − 1)d",
      discovery: {
        problem:
          "In an arithmetic sequence the 4th term is 23 and the 10th term is 47. Find the first term and the 100th term — without guessing and checking.",
        idea:
          "From the 4th term to the 10th term is **6 jumps**, and the value rises by 47 − 23 = 24, so each jump is d = 4. Going back from the 4th term to the 1st is 3 jumps: a = 23 − 3 × 4 = 11. The 100th term is 99 jumps after the first: 11 + 99 × 4 = **407**. Counting *jumps*, not terms, is the whole idea.",
      },
      body:
        "In an **arithmetic sequence** the first term is called **a** and the common difference **d**. The nth term is written {{u_n}}:\n\n    {{u_n = a + (n - 1)d}}\n\nThe bracket is (n − 1) because the nth term is n − 1 jumps after the first: the 2nd term is a + d, the 3rd is a + 2d, …, the 10th is a + 9d.\n\nExpanding gives {{u_n = dn + (a - d)}} — the same as the linear nth term, with zero term a − d. Use whichever is quicker; this form is better when the question talks about 'first term' and 'common difference', or gives two terms that aren't next to each other.\n\n**Two terms given → simultaneous equations.** If {{u_5 = 17}} and {{u_12 = 45}}:\n\n    {{a + 4d = 17}}\n    {{a + 11d = 45}}\n\nSubtracting gives 7d = 28, so d = 4 and a = 1. (This is the jump-counting idea in algebra: 7 jumps = 28.)\n\n**Terms given in algebra.** If x, y, z are **consecutive** terms of an arithmetic sequence then the two differences are equal:\n\n    {{y - x = z - y}}, which is the same as {{2y = x + z}}\n\nso the middle term is the **mean** of its neighbours. This turns 'k + 3, 3k − 1, 4k + 1 are consecutive terms' into a linear equation in k.\n\n**Conditions.** Questions like 'how many terms are less than 500?' or 'which term first exceeds 1000?' become inequalities in n — solve, then think about whether to round up or down.",
      diagram: `<svg viewBox="0 0 480 270" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Top: boxes u1 = a, u2 = a + d, u3 = a + 2d, then u_n = a + (n − 1)d, joined by jumps of +d. Bottom: a number line of positions 1 to 10 with values 11 to 47; the 4th term 23 and the 10th term 47 are 6 jumps apart, so 6d = 24 and d = 4."><rect x="0" y="0" width="480" height="270" fill="#ffffff"/><rect x="20" y="60" width="80" height="36" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="60" y="83" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">a</text><text x="60" y="114" font-family="sans-serif" font-size="12" fill="#475569" text-anchor="middle">u₁</text><rect x="120" y="60" width="80" height="36" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="160" y="83" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">a + d</text><text x="160" y="114" font-family="sans-serif" font-size="12" fill="#475569" text-anchor="middle">u₂</text><rect x="220" y="60" width="80" height="36" rx="6" fill="#c7d2fe" stroke="#334155"/><text x="260" y="83" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">a + 2d</text><text x="260" y="114" font-family="sans-serif" font-size="12" fill="#475569" text-anchor="middle">u₃</text><rect x="370" y="60" width="100" height="36" rx="6" fill="#fde68a" stroke="#334155"/><text x="420" y="83" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">a + (n − 1)d</text><text x="420" y="114" font-family="sans-serif" font-size="12" fill="#475569" text-anchor="middle">uₙ</text><g fill="none" stroke="#b45309" stroke-width="1.5"><path d="M 60 58 Q 110 22 160 58"/><path d="M 160 58 Q 210 22 260 58"/><path d="M 260 58 Q 285 30 305 45"/><path d="M 380 45 Q 400 30 420 58"/></g><g font-family="sans-serif" font-size="12" fill="#b45309" text-anchor="middle"><text x="110" y="30">+d</text><text x="210" y="30">+d</text></g><text x="342" y="83" font-family="sans-serif" font-size="16" fill="#1f2937" text-anchor="middle">…</text><text x="240" y="140" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">To reach the nth term from the 1st you make n − 1 jumps, not n.</text><line x1="30" y1="220" x2="450" y2="220" stroke="#334155" stroke-width="1.5"/><line x1="40" y1="214" x2="40" y2="226" stroke="#334155"/><text x="40" y="244" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">11</text><text x="40" y="262" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">n=1</text><line x1="84" y1="214" x2="84" y2="226" stroke="#334155"/><text x="84" y="244" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">15</text><text x="84" y="262" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">n=2</text><line x1="128" y1="214" x2="128" y2="226" stroke="#334155"/><text x="128" y="244" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">19</text><text x="128" y="262" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">n=3</text><line x1="172" y1="214" x2="172" y2="226" stroke="#334155"/><text x="172" y="244" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">23</text><text x="172" y="262" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">n=4</text><circle cx="172" cy="220" r="5" fill="#4f46e5"/><line x1="216" y1="214" x2="216" y2="226" stroke="#334155"/><text x="216" y="244" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">27</text><text x="216" y="262" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">n=5</text><line x1="260" y1="214" x2="260" y2="226" stroke="#334155"/><text x="260" y="244" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">31</text><text x="260" y="262" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">n=6</text><line x1="304" y1="214" x2="304" y2="226" stroke="#334155"/><text x="304" y="244" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">35</text><text x="304" y="262" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">n=7</text><line x1="348" y1="214" x2="348" y2="226" stroke="#334155"/><text x="348" y="244" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">39</text><text x="348" y="262" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">n=8</text><line x1="392" y1="214" x2="392" y2="226" stroke="#334155"/><text x="392" y="244" font-family="sans-serif" font-size="12" fill="#64748b" text-anchor="middle">43</text><text x="392" y="262" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">n=9</text><line x1="436" y1="214" x2="436" y2="226" stroke="#334155"/><text x="436" y="244" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" font-weight="bold">47</text><text x="436" y="262" font-family="sans-serif" font-size="10" fill="#64748b" text-anchor="middle">n=10</text><circle cx="436" cy="220" r="5" fill="#4f46e5"/><g fill="none" stroke="#4f46e5" stroke-width="1.2"><path d="M 172 214 Q 194 196 216 214"/><path d="M 216 214 Q 238 196 260 214"/><path d="M 260 214 Q 282 196 304 214"/><path d="M 304 214 Q 326 196 348 214"/><path d="M 348 214 Q 370 196 392 214"/><path d="M 392 214 Q 414 196 436 214"/></g><text x="304" y="186" font-family="sans-serif" font-size="12" fill="#4f46e5" text-anchor="middle">6 jumps: 47 − 23 = 24, so d = 4</text></svg>`,
      diagramCaption:
        "The nth term is n − 1 jumps of d after the first. Two known terms tell you d: divide the change by the number of jumps between them.",
      workedExamples: [
        {
          title: "Two terms → a and d",
          problem: "The 5th term of an arithmetic sequence is 17 and the 12th term is 45. Find the 30th term.",
          steps: [
            "Write each fact using {{u_n = a + (n - 1)d}}:",
            "    {{u_5}}: {{a + 4d = 17}}",
            "    {{u_12}}: {{a + 11d = 45}}",
            "Subtract the first equation from the second: 7d = 28, so d = 4.",
            "Substitute back: a + 16 = 17, so a = 1.",
            "{{u_30 = 1 + 29 * 4 = 117}}.",
            "Check: {{u_12 = 1 + 11 * 4 = 45}} ✓.",
          ],
          answer: "117",
          yourTurn: {
            question: "Your turn: the 3rd term of an arithmetic sequence is 14 and the 8th term is 39. Find the 20th term.",
            answer: { type: "number", value: 99 },
            solution: "a + 2d = 14 and a + 7d = 39. Subtract: 5d = 25, d = 5, so a = 4. {{u_20 = 4 + 19 * 5 = 99}}.",
          },
        },
        {
          title: "Consecutive terms in algebra",
          problem: "k + 3, 3k − 1 and 4k + 1 are three consecutive terms of an arithmetic sequence. Find k and the three terms.",
          steps: [
            "Consecutive terms of an arithmetic sequence have equal differences.",
            "First difference: {{(3k - 1) - (k + 3) = 2k - 4}}.",
            "Second difference: {{(4k + 1) - (3k - 1) = k + 2}}.",
            "Set them equal: {{2k - 4 = k + 2}}, so k = 6.",
            "The terms are 9, 17, 25 — difference 8 each time ✓.",
          ],
          answer: "k = 6; the terms are 9, 17, 25",
          yourTurn: {
            question: "Your turn: 2x, x + 7 and 3x − 1 are consecutive terms of an arithmetic sequence. Find x.",
            answer: { type: "number", value: 5 },
            solution: "Equal differences: {{(x + 7) - 2x = (3x - 1) - (x + 7)}}, so {{7 - x = 2x - 8}}, 3x = 15, x = 5. Terms 10, 12, 14 ✓.",
          },
        },
      ],
      keyPoints: [
        "{{u_n = a + (n - 1)d}}: a = first term, d = common difference.",
        "The nth term is n − 1 jumps after the first — the 20th term is a + 19d.",
        "d = (change in value) ÷ (number of jumps) between any two known terms.",
        "Two facts about terms → two simultaneous equations in a and d.",
        "x, y, z consecutive ⇔ {{y - x = z - y}} ⇔ {{2y = x + z}}.",
        "d can be negative or a fraction.",
      ],
      whyItWorks:
        "Start at a. Each move to the next term adds d. To reach position n you make n − 1 moves (from position 1 to position n), so you have added d exactly n − 1 times: {{u_n = a + (n - 1)d}}. Subtracting two such equations cancels a, leaving (number of jumps) × d = (change in value) — which is why the simultaneous-equation method and the jump-counting shortcut always agree.",
      strategies: ["Draw a diagram", "Introduce a variable", "Work backwards", "Check by substituting"],
      thinkDeeper:
        "In any arithmetic sequence, compare {{u_3 + u_9}} with {{u_5 + u_7}} and with {{2u_6}}. Explain why they are always equal. Then use the idea: if {{u_3 + u_9 = 50}}, what is {{u_6}} — even though you don't know a or d?",
    },
    // ------------------------------------------------------------------
    {
      id: "arithmetic-series",
      heading: "Sum of an arithmetic series",
      discovery: {
        problem:
          "Legend says the young Gauss was told to add 1 + 2 + 3 + … + 100 and had the answer in seconds. Write the sum forwards, then write it again backwards underneath. What do you notice about each column?",
        idea:
          "Every column adds to 101: 1 + 100, 2 + 99, 3 + 98, … There are 100 columns, so **two** copies of the sum make 100 × 101 = 10 100. One copy is half of that: **5050**. The trick works for any arithmetic series, because going forwards adds d while going backwards takes d away — so every pair has the same total.",
      },
      body:
        "A **series** is the sum of the terms of a sequence. {{S_n}} means the sum of the **first n terms**.\n\n**Gauss's pairing, in general.** Write the sum forwards and backwards:\n\n    {{S_n = a + (a + d) + (a + 2d) + … + l}}\n    {{S_n = l + (l - d) + (l - 2d) + … + a}}\n\nwhere {{l = a + (n - 1)d}} is the last term. Add the two lines: each of the n columns totals a + l, so\n\n    {{2S_n = n(a + l)}}  →  {{S_n = n/2 (a + l)}}\n\nSubstituting {{l = a + (n - 1)d}} gives the formula on the Edexcel formula sheet:\n\n    {{S_n = n/2 [2a + (n - 1)d]}}\n\nUse {{n/2 (a + l)}} when you know the last term; use {{n/2 [2a + (n - 1)d]}} when you know d.\n\n**Special case.** 1 + 2 + 3 + … + n = {{n/2 (n + 1)}}, the triangle numbers.\n\n**Finding n given the sum.** Substituting into the formula gives a **quadratic** in n. Rearrange to = 0, solve, and keep the positive whole-number root. If the question asks when a total *first exceeds* a value, solve the equation and round **up** — then check the two neighbouring values of n.\n\n> Ravi runs 2 km on day 1 and 0.5 km more each day. On which day does his total first pass 100 km? {{S_n = n/2 [4 + 0.5(n - 1)]}}: {{S_16 = 92}} and {{S_17 = 102}}, so **day 17**.\n\n**Terms from sums.** The nth term is the total of n terms minus the total of n − 1 terms:\n\n    {{u_n = S_n - S_(n-1)}}\n\nFor example, if {{S_n = 2n^2 + 3n}} then {{u_10 = S_10 - S_9 = 230 - 189 = 41}}.\n\n**A middle chunk.** The sum of the 11th to 20th terms is {{S_20 - S_10}}.",
      diagram: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Gauss pairing: a blue staircase of 1, 2, 3, 4, 5 squares and an identical yellow staircase turned upside down fit together into a 5 by 6 rectangle of 30 squares, so 1 + 2 + 3 + 4 + 5 = 15."><rect x="0" y="0" width="480" height="260" fill="#ffffff"/><g stroke="#334155" stroke-width="1"><rect x="40" y="190" width="30" height="30" fill="#c7d2fe"/><rect x="40" y="160" width="30" height="30" fill="#fde68a"/><rect x="40" y="130" width="30" height="30" fill="#fde68a"/><rect x="40" y="100" width="30" height="30" fill="#fde68a"/><rect x="40" y="70" width="30" height="30" fill="#fde68a"/><rect x="40" y="40" width="30" height="30" fill="#fde68a"/><rect x="70" y="190" width="30" height="30" fill="#c7d2fe"/><rect x="70" y="160" width="30" height="30" fill="#c7d2fe"/><rect x="70" y="130" width="30" height="30" fill="#fde68a"/><rect x="70" y="100" width="30" height="30" fill="#fde68a"/><rect x="70" y="70" width="30" height="30" fill="#fde68a"/><rect x="70" y="40" width="30" height="30" fill="#fde68a"/><rect x="100" y="190" width="30" height="30" fill="#c7d2fe"/><rect x="100" y="160" width="30" height="30" fill="#c7d2fe"/><rect x="100" y="130" width="30" height="30" fill="#c7d2fe"/><rect x="100" y="100" width="30" height="30" fill="#fde68a"/><rect x="100" y="70" width="30" height="30" fill="#fde68a"/><rect x="100" y="40" width="30" height="30" fill="#fde68a"/><rect x="130" y="190" width="30" height="30" fill="#c7d2fe"/><rect x="130" y="160" width="30" height="30" fill="#c7d2fe"/><rect x="130" y="130" width="30" height="30" fill="#c7d2fe"/><rect x="130" y="100" width="30" height="30" fill="#c7d2fe"/><rect x="130" y="70" width="30" height="30" fill="#fde68a"/><rect x="130" y="40" width="30" height="30" fill="#fde68a"/><rect x="160" y="190" width="30" height="30" fill="#c7d2fe"/><rect x="160" y="160" width="30" height="30" fill="#c7d2fe"/><rect x="160" y="130" width="30" height="30" fill="#c7d2fe"/><rect x="160" y="100" width="30" height="30" fill="#c7d2fe"/><rect x="160" y="70" width="30" height="30" fill="#c7d2fe"/><rect x="160" y="40" width="30" height="30" fill="#fde68a"/></g><rect x="40" y="40" width="150" height="180" fill="none" stroke="#1f2937" stroke-width="2"/><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="55" y="236">1</text><text x="85" y="236">2</text><text x="115" y="236">3</text><text x="145" y="236">4</text><text x="175" y="236">5</text><text x="115" y="254">5 columns (n)</text></g><text x="200" y="134" font-family="sans-serif" font-size="12" fill="#1f2937">6 tall (n + 1)</text><g font-family="sans-serif" font-size="13" fill="#1f2937"><text x="290" y="70">blue: 1 + 2 + 3 + 4 + 5</text><text x="290" y="92">yellow: 5 + 4 + 3 + 2 + 1</text><text x="290" y="124">together: 5 × 6 = 30</text><text x="290" y="146">so the sum = 30 ÷ 2 = 15</text><text x="290" y="182" fill="#4f46e5">in general:</text><text x="290" y="202" fill="#4f46e5">1 + 2 + … + n = ½n(n + 1)</text></g></svg>`,
      diagramCaption:
        "Two copies of the staircase 1 + 2 + 3 + 4 + 5 fit together into a 5 × 6 rectangle, so one staircase is half of 30. The same picture with n columns gives {{n/2 (n + 1)}}.",
      workedExamples: [
        {
          title: "Seats in a theatre",
          problem: "The front row of a theatre has 20 seats. Each row after the first has 2 more seats than the row in front. There are 25 rows. (a) How many seats are in the back row? (b) How many seats are there altogether?",
          steps: [
            "This is an arithmetic sequence with a = 20, d = 2, n = 25.",
            "(a) Back row: {{u_25 = 20 + 24 * 2 = 68}} seats.",
            "(b) {{S_25 = 25/2 [2 * 20 + 24 * 2] = 25/2 * 88 = 1100}}.",
            "Check with first + last: {{25/2 (20 + 68) = 12.5 * 88 = 1100}} ✓.",
          ],
          answer: "(a) 68 seats (b) 1100 seats",
          yourTurn: {
            question: "Your turn: Wei Ling saves $5 in week 1, $8 in week 2, $11 in week 3, and so on, increasing by $3 each week. How much has she saved in total after 20 weeks? Give your answer in dollars.",
            answer: { type: "number", value: 670, display: "$670" },
            solution: "a = 5, d = 3, n = 20. {{S_20 = 20/2 [2 * 5 + 19 * 3] = 10 * 67 = 670}}. She has saved $670.",
          },
        },
        {
          title: "Finding the number of terms",
          problem: "The arithmetic series 3 + 7 + 11 + 15 + … has a sum of 820. How many terms are there?",
          steps: [
            "a = 3 and d = 4. Use {{S_n = n/2 [2a + (n - 1)d]}}.",
            "{{n/2 [6 + 4(n - 1)] = 820}}, so {{n/2 (4n + 2) = 820}}.",
            "Simplify: {{n(2n + 1) = 820}}, so {{2n^2 + n - 820 = 0}}.",
            "Factorise: {{(2n + 41)(n - 20) = 0}}. (Check: {{2n^2 - 40n + 41n - 820}} ✓.)",
            "n = 20 or n = −20.5. The number of terms must be a positive integer, so n = 20.",
            "Check: last term {{3 + 19 * 4 = 79}}, and {{20/2 (3 + 79) = 820}} ✓.",
          ],
          answer: "20 terms",
          yourTurn: {
            question: "Your turn: the arithmetic series 5 + 8 + 11 + … has a sum of 390. How many terms does it have?",
            answer: { type: "number", value: 15 },
            solution: "{{n/2 [10 + 3(n - 1)] = 390}} → {{n(3n + 7) = 780}} → {{3n^2 + 7n - 780 = 0}}. Formula: {{n = (-7 + sqrt(49 + 9360))/6 = (-7 + 97)/6 = 15}}. Reject the negative root. Check: last term 47, {{15/2 (5 + 47) = 390}} ✓.",
          },
        },
      ],
      keyPoints: [
        "{{S_n}} is a **total** of n terms, not the nth term.",
        "{{S_n = n/2 [2a + (n - 1)d]}} is on the formula sheet; {{S_n = n/2 (a + l)}} is quicker when you know the last term.",
        "Finding n from a sum gives a quadratic: keep the positive integer root and say why you reject the other.",
        "'First exceeds' questions: solve, round up, check n and n − 1.",
        "{{u_n = S_n - S_(n-1)}}; sum of terms 11 to 20 = {{S_20 - S_10}}.",
        "Check any sum with {{n/2 (a + l)}}.",
      ],
      whyItWorks:
        "Pair the first term with the last, the second with the second-last, and so on. Moving one step in from the front adds d; moving one step in from the back subtracts d — so every pair has the same total, a + l. Two copies of the series make n such pairs: {{2S_n = n(a + l)}}. The staircase picture shows the same thing: two identical staircases always fit together into a rectangle.",
      strategies: ["Use symmetry", "Draw a diagram", "Introduce a variable", "Check by substituting"],
      thinkDeeper:
        "Add the first few odd numbers: 1, 1 + 3, 1 + 3 + 5, 1 + 3 + 5 + 7. What do you notice? Use {{S_n = n/2 [2a + (n - 1)d]}} to prove that the sum of the first n odd numbers is always {{n^2}} — then find a picture (an L-shape added to a square) that shows why.",
    },
    // ------------------------------------------------------------------
    {
      id: "quadratic-sequences",
      heading: "Quadratic sequences",
      discovery: {
        problem:
          "Look at 2, 6, 12, 20, 30, … The differences are 4, 6, 8, 10 — not constant, so it isn't linear. Now find the differences *of the differences*. Then try to find an nth term. (Hint: compare each term with {{n^2}}.)",
        idea:
          "The second differences are all 2. A constant second difference means the nth term contains {{n^2}}. Subtract {{n^2}} (1, 4, 9, 16, 25) from each term: you are left with 1, 2, 3, 4, 5, which is just n. So the nth term is {{n^2 + n}} — or n(n + 1), the area of an n by n + 1 rectangle.",
      },
      body:
        "A **quadratic sequence** has nth term {{an^2 + bn + c}}. Its first differences change, but its **second differences are constant**, and\n\n    second difference = 2a\n\nso **a is half the second difference**.\n\n**Method (subtract the {{an^2}} part).**\n\n1. Find the first and second differences. Halve the second difference to get a.\n2. Write out {{an^2}} for n = 1, 2, 3, … and subtract it from each term.\n3. What is left is a **linear** sequence: find its nth term, bn + c.\n4. nth term = {{an^2 + bn + c}}. Check it with n = 3.\n\n| n | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n| term | 4 | 11 | 22 | 37 | 56 |\n| {{2n^2}} | 2 | 8 | 18 | 32 | 50 |\n| term − {{2n^2}} | 2 | 3 | 4 | 5 | 6 |\n\nThe leftover 2, 3, 4, 5, 6 is n + 1, so the nth term is {{2n^2 + n + 1}}.\n\n**Shortcut (three facts).** For {{an^2 + bn + c}}: the second difference is 2a, the first of the first differences is 3a + b, and the first term is a + b + c. For 4, 11, 22, …: 2a = 4, so a = 2; 3a + b = 7, so b = 1; a + b + c = 4, so c = 1. ✓\n\n**Negative a.** 5, 8, 9, 8, 5 has second difference −2, so it starts {{-n^2}}; the leftover is 6, 12, 18, 24, 30 = 6n, giving {{6n - n^2}}.\n\n**Fractional sequences.** Treat the numerators and denominators as **two separate sequences** and find an nth term for each:\n\n    {{1/4}}, {{3/7}}, {{5/10}}, {{7/13}}, …  →  numerators 2n − 1, denominators 3n + 1  →  {{(2n - 1)/(3n + 1)}}\n\nOne part may be linear and the other quadratic. Watch out for a term that has been simplified: if the pattern breaks, {{1/2}} might really be {{3/6}}.",
      diagram: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Difference table for 4, 11, 22, 37, 56: first differences 7, 11, 15, 19 and constant second differences 4, so the nth term starts 2n squared."><rect x="0" y="0" width="480" height="250" fill="#ffffff"/><g font-family="sans-serif" font-size="12" fill="#475569"><text x="10" y="54">terms</text><text x="10" y="124">1st diff</text><text x="10" y="194">2nd diff</text></g><g stroke="#94a3b8" stroke-width="1.2"><line x1="136" y1="62" x2="164" y2="104"/><line x1="204" y1="62" x2="176" y2="104"/><line x1="216" y1="62" x2="244" y2="104"/><line x1="284" y1="62" x2="256" y2="104"/><line x1="296" y1="62" x2="324" y2="104"/><line x1="364" y1="62" x2="336" y2="104"/><line x1="376" y1="62" x2="404" y2="104"/><line x1="444" y1="62" x2="416" y2="104"/><line x1="176" y1="132" x2="204" y2="174"/><line x1="244" y1="132" x2="216" y2="174"/><line x1="256" y1="132" x2="284" y2="174"/><line x1="324" y1="132" x2="296" y2="174"/><line x1="336" y1="132" x2="364" y2="174"/><line x1="404" y1="132" x2="376" y2="174"/></g><circle cx="130" cy="50" r="17" fill="#c7d2fe" stroke="#334155"/><text x="130" y="55" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">4</text><circle cx="210" cy="50" r="17" fill="#c7d2fe" stroke="#334155"/><text x="210" y="55" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">11</text><circle cx="290" cy="50" r="17" fill="#c7d2fe" stroke="#334155"/><text x="290" y="55" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">22</text><circle cx="370" cy="50" r="17" fill="#c7d2fe" stroke="#334155"/><text x="370" y="55" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">37</text><circle cx="450" cy="50" r="17" fill="#c7d2fe" stroke="#334155"/><text x="450" y="55" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">56</text><text x="170" y="124" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">+7</text><text x="250" y="124" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">+11</text><text x="330" y="124" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">+15</text><text x="410" y="124" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">+19</text><rect x="192" y="176" width="36" height="26" rx="5" fill="#bbf7d0" stroke="#334155"/><text x="210" y="194" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">+4</text><rect x="272" y="176" width="36" height="26" rx="5" fill="#bbf7d0" stroke="#334155"/><text x="290" y="194" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">+4</text><rect x="352" y="176" width="36" height="26" rx="5" fill="#bbf7d0" stroke="#334155"/><text x="370" y="194" font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle">+4</text><text x="240" y="234" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">constant 2nd difference 4 = 2a, so a = 2: start with 2n²</text></svg>`,
      diagramCaption:
        "For 4, 11, 22, 37, 56 the first differences go up by 4 each time, so the second difference is constant: the sequence is quadratic with a = 4 ÷ 2 = 2.",
      workedExamples: [
        {
          title: "A quadratic nth term",
          problem: "Find an expression, in terms of n, for the nth term of the quadratic sequence 4, 11, 22, 37, 56, …",
          steps: [
            "First differences: 7, 11, 15, 19. Second differences: 4, 4, 4.",
            "Half of 4 is 2, so the sequence starts {{2n^2}}.",
            "{{2n^2}} gives 2, 8, 18, 32, 50. Subtract from the terms: 2, 3, 4, 5, 6.",
            "2, 3, 4, 5, 6 has nth term n + 1.",
            "So the nth term is {{2n^2 + n + 1}}.",
            "Check n = 4: {{2 * 16 + 4 + 1 = 37}} ✓.",
          ],
          answer: "{{2n^2 + n + 1}}",
          yourTurn: {
            question: "Your turn: find an expression for the nth term of 0, 7, 18, 33, 52, …",
            answer: { type: "expression", expr: "2n^2+n-3" },
            solution: "Differences 7, 11, 15, 19; second difference 4, so {{2n^2}}. Terms − {{2n^2}}: −2, −1, 0, 1, 2 = n − 3. nth term {{2n^2 + n - 3}}. Check n = 3: 18 + 3 − 3 = 18 ✓.",
          },
        },
        {
          title: "A fractional sequence",
          problem: "Find the nth term of {{2/5}}, {{5/8}}, {{10/11}}, {{17/14}}, {{26/17}}, … and use it to find the 10th term.",
          steps: [
            "Split it into two sequences.",
            "Numerators 2, 5, 10, 17, 26: differences 3, 5, 7, 9; second difference 2, so {{n^2}}. Leftover: 1, 1, 1, 1, 1. Numerator = {{n^2 + 1}}.",
            "Denominators 5, 8, 11, 14, 17: linear, difference 3, zero term 2. Denominator = 3n + 2.",
            "nth term = {{(n^2 + 1)/(3n + 2)}}.",
            "10th term: {{(100 + 1)/(30 + 2) = 101/32}}.",
          ],
          answer: "nth term {{(n^2 + 1)/(3n + 2)}}; 10th term {{101/32}}",
          yourTurn: {
            question: "Your turn: find an expression for the nth term of {{3/2}}, {{5/6}}, {{7/12}}, {{9/20}}, {{11/30}}, …",
            answer: { type: "expression", expr: "(2n+1)/(n^2+n)" },
            solution: "Numerators 3, 5, 7, 9, 11 = 2n + 1. Denominators 2, 6, 12, 20, 30: second difference 2, so {{n^2}}; leftover 1, 2, 3, 4, 5 = n, giving {{n^2 + n}}. nth term {{(2n + 1)/(n^2 + n)}}.",
          },
        },
      ],
      keyPoints: [
        "Constant **second** difference → quadratic sequence.",
        "a = second difference ÷ 2 — never the second difference itself.",
        "Subtract {{an^2}} from the **terms** (not from the differences), then find the linear nth term of what is left.",
        "Shortcut: 2a = second difference, 3a + b = first first-difference, a + b + c = first term.",
        "Fractional sequences: separate nth terms for numerator and denominator.",
        "Check your formula on a term you didn't use.",
      ],
      whyItWorks:
        "Work out the first difference of {{an^2 + bn + c}} in general: {{u_(n+1) - u_n = a(2n + 1) + b = 2an + (a + b)}}. That is linear in n with coefficient 2a, so the differences themselves go up by 2a every time — the second difference is 2a, whatever b and c are. Putting n = 1 gives the first difference 3a + b, and the first term is a + b + c, which is where the shortcut comes from.",
      strategies: ["Find a pattern", "Make it simpler", "Introduce a variable", "Check by substituting"],
      thinkDeeper:
        "Euler noticed that {{n^2 - n + 41}} gives a prime for n = 1, 2, 3, … all the way to 40. Is it prime for every n? Without a calculator, show that it must fail at n = 41 (factorise!). What does this tell you about 'proving' a rule by testing lots of cases?",
    },
    // ------------------------------------------------------------------
    {
      id: "limiting-values",
      heading: "Limiting values of sequences",
      discovery: {
        problem:
          "Use your calculator to work out {{u_n = (2n + 1)/(n + 3)}} for n = 1, 10, 100 and 1000. What value are the terms heading towards? Will a term ever actually reach it?",
        idea:
          "{{u_1 = 0.75}}, {{u_10 = 21/13 ≈ 1.615}}, {{u_100 = 201/103 ≈ 1.951}}, {{u_1000 = 2001/1003 ≈ 1.995}}. The terms creep up towards **2**. For huge n the '+1' and '+3' hardly matter, so {{u_n ≈ (2n)/n = 2}}. In fact {{2 - u_n = 5/(n + 3)}}, which is always positive — so the terms get as close to 2 as you like but never reach it. We say the **limiting value** of the sequence is 2.",
      },
      body:
        "A sequence has a **limiting value** L if its terms get closer and closer to L as n gets larger, as close as you like. We write: as {{n -> ∞}}, {{u_n -> L}}.\n\n**The key fact.** As {{n -> ∞}}, {{1/n -> 0}}. So {{3/n -> 0}}, {{5/n^2 -> 0}} — any fixed number divided by a growing power of n shrinks to 0.\n\n**Method: divide through by n.** For a fraction of linear expressions, divide **every term** in the numerator and denominator by n:\n\n    {{u_n = (2n + 1)/(n + 3) = (2 + 1/n)/(1 + 3/n)}}\n\nAs {{n -> ∞}}, {{1/n -> 0}} and {{3/n -> 0}}, so {{u_n -> (2 + 0)/(1 + 0) = 2}}.\n\nThat is the **proof** — a table of values only *suggests* the limit. For quadratics, divide by {{n^2}} instead (the highest power of n in the denominator).\n\n**The three cases** for a fraction of polynomials in n:\n\n| Degrees | Example | Limit |\n|---|---|---|\n| top = bottom | {{(3n^2 + n)/(n^2 + 4)}} | ratio of leading coefficients: 3 |\n| top < bottom | {{(5n + 2)/(n^2 + 1)}} | 0 |\n| top > bottom | {{n^2/(n + 1)}} | no limit (grows without bound) |\n\nSo {{(an + b)/(cn + d) -> a/c}}.\n\n**Getting close.** To show the terms stay below (or above) the limit, work out the gap as a single fraction:\n\n    {{2 - (2n + 1)/(n + 3) = (2(n + 3) - (2n + 1))/(n + 3) = 5/(n + 3)}}\n\nThis is positive for every n, so every term is less than 2, and it shrinks to 0. You can also use it to find when the terms are within, say, 0.01 of the limit: {{5/(n + 3) < 0.01}} gives n + 3 > 500, so n > 497.\n\n**No limit.** An arithmetic sequence with d ≠ 0 (like 3n + 1) grows or falls forever, and {{(-1)^n}} flips between −1 and 1 — neither has a limiting value.",
      diagram: `<svg viewBox="0 0 480 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of u_n = (2n + 1)/(n + 3) for n = 1 to 20. The points rise from 0.75 and level off just below the dashed line at height 2, which they approach but never reach."><rect x="0" y="0" width="480" height="290" fill="#ffffff"/><g stroke="#e2e8f0"><line x1="50" y1="200" x2="460" y2="200"/><line x1="50" y1="160" x2="460" y2="160"/><line x1="50" y1="120" x2="460" y2="120"/></g><g stroke="#334155" stroke-width="1.5"><line x1="50" y1="240" x2="465" y2="240"/><line x1="50" y1="240" x2="50" y2="20"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><line x1="150" y1="240" x2="150" y2="245" stroke="#334155"/><text x="150" y="259">5</text><line x1="250" y1="240" x2="250" y2="245" stroke="#334155"/><text x="250" y="259">10</text><line x1="350" y1="240" x2="350" y2="245" stroke="#334155"/><text x="350" y="259">15</text><line x1="450" y1="240" x2="450" y2="245" stroke="#334155"/><text x="450" y="259">20</text><text x="255" y="280">n</text></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="end"><text x="44" y="244">0</text><text x="44" y="204">0.5</text><text x="44" y="164">1</text><text x="44" y="124">1.5</text><text x="44" y="84">2</text></g><line x1="50" y1="80" x2="460" y2="80" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6 4"/><text x="455" y="72" font-family="sans-serif" font-size="12" fill="#dc2626" text-anchor="end">limit 2</text><circle cx="70" cy="180.0" r="4" fill="#4f46e5"/><circle cx="90" cy="160.0" r="4" fill="#4f46e5"/><circle cx="110" cy="146.7" r="4" fill="#4f46e5"/><circle cx="130" cy="137.1" r="4" fill="#4f46e5"/><circle cx="150" cy="130.0" r="4" fill="#4f46e5"/><circle cx="170" cy="124.4" r="4" fill="#4f46e5"/><circle cx="190" cy="120.0" r="4" fill="#4f46e5"/><circle cx="210" cy="116.4" r="4" fill="#4f46e5"/><circle cx="230" cy="113.3" r="4" fill="#4f46e5"/><circle cx="250" cy="110.8" r="4" fill="#4f46e5"/><circle cx="270" cy="108.6" r="4" fill="#4f46e5"/><circle cx="290" cy="106.7" r="4" fill="#4f46e5"/><circle cx="310" cy="105.0" r="4" fill="#4f46e5"/><circle cx="330" cy="103.5" r="4" fill="#4f46e5"/><circle cx="350" cy="102.2" r="4" fill="#4f46e5"/><circle cx="370" cy="101.1" r="4" fill="#4f46e5"/><circle cx="390" cy="100.0" r="4" fill="#4f46e5"/><circle cx="410" cy="99.0" r="4" fill="#4f46e5"/><circle cx="430" cy="98.2" r="4" fill="#4f46e5"/><circle cx="450" cy="97.4" r="4" fill="#4f46e5"/><text x="78" y="184" font-family="sans-serif" font-size="11" fill="#1f2937">u₁ = 0.75</text><text x="250" y="130.76923076923077" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle">u₁₀ ≈ 1.62</text><text x="450" y="117.3913043478261" font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end">u₂₀ ≈ 1.78</text><text x="260" y="40" font-family="sans-serif" font-size="12" fill="#475569" text-anchor="middle">gap to 2 is 5 ÷ (n + 3): always positive, shrinking to 0</text></svg>`,
      diagramCaption:
        "The terms of {{(2n + 1)/(n + 3)}} rise towards the dashed line at 2 but never touch it — the gap {{5/(n + 3)}} shrinks to 0 without ever being 0.",
      workedExamples: [
        {
          title: "Prove the limiting value",
          problem: "The nth term of a sequence is {{(6n - 5)/(3n + 4)}}. Prove that the limiting value of the sequence is 2, and show that every term is less than 2.",
          steps: [
            "Divide every term of the numerator and denominator by n:",
            "    {{(6n - 5)/(3n + 4) = (6 - 5/n)/(3 + 4/n)}}",
            "As {{n -> ∞}}, {{5/n -> 0}} and {{4/n -> 0}}.",
            "So {{u_n -> (6 - 0)/(3 + 0) = 6/3 = 2}}. The limiting value is 2.",
            "Gap: {{2 - (6n - 5)/(3n + 4) = (2(3n + 4) - (6n - 5))/(3n + 4) = 13/(3n + 4)}}.",
            "13 > 0 and 3n + 4 > 0 for every positive n, so the gap is always positive: every term is less than 2.",
          ],
          answer: "Limit 2; {{2 - u_n = 13/(3n + 4) > 0}}, so every term is below 2",
          yourTurn: {
            question: "Your turn: find the limiting value of the sequence with nth term {{(5n + 2)/(2n - 1)}}. Give your answer as a decimal.",
            answer: { type: "number", value: 2.5, display: "2.5 (= {{5/2}})" },
            solution: "Divide by n: {{(5 + 2/n)/(2 - 1/n)}}. As {{n -> ∞}}, this tends to {{5/2 = 2.5}}.",
          },
        },
        {
          title: "Fractional sequence: nth term, limit and 'how close?'",
          problem: "A sequence begins {{3/5}}, {{5/8}}, {{7/11}}, {{9/14}}, … (a) Find the nth term. (b) Find its limiting value. (c) Find the first term that is within 0.01 of the limiting value.",
          steps: [
            "(a) Numerators 3, 5, 7, 9 = 2n + 1. Denominators 5, 8, 11, 14 = 3n + 2. So {{u_n = (2n + 1)/(3n + 2)}}.",
            "(b) {{(2 + 1/n)/(3 + 2/n) -> 2/3}} as {{n -> ∞}}.",
            "(c) Gap: {{2/3 - (2n + 1)/(3n + 2) = (2(3n + 2) - 3(2n + 1))/(3(3n + 2)) = 1/(3(3n + 2))}}.",
            "Need {{1/(3(3n + 2)) < 0.01}}, so {{3(3n + 2) > 100}}, 9n + 6 > 100, n > 10.44…",
            "So n = 11: the 11th term, {{23/35}}. (Check: {{u_10 = 21/32 = 0.65625}}, gap 0.0104 — not quite; {{u_11 = 23/35 ≈ 0.65714}}, gap 0.0095 ✓.)",
          ],
          answer: "(a) {{(2n + 1)/(3n + 2)}} (b) {{2/3}} (c) the 11th term, {{23/35}}",
          yourTurn: {
            question: "Your turn: the nth term of a sequence is {{(4n + 1)/(n + 2)}}, and its limiting value is 4. Find the smallest value of n for which {{u_n}} differs from 4 by less than 0.1.",
            answer: { type: "number", value: 69 },
            solution: "{{4 - (4n + 1)/(n + 2) = (4n + 8 - 4n - 1)/(n + 2) = 7/(n + 2)}}. Need {{7/(n + 2) < 0.1}}, so n + 2 > 70, n > 68. Smallest n = 69. (At n = 68 the gap is exactly 0.1, which is not *less than* 0.1.)",
          },
        },
      ],
      keyPoints: [
        "As {{n -> ∞}}, {{k/n -> 0}} for any fixed number k.",
        "To prove a limit: divide every term top and bottom by the highest power of n in the denominator, then let n → ∞.",
        "{{(an + b)/(cn + d) -> a/c}}.",
        "Bottom of higher degree → limit 0; top of higher degree → no limit.",
        "A table of values suggests a limit; only the algebra proves it.",
        "The gap 'limit − {{u_n}}' as a single fraction shows which side the terms approach from and how fast.",
      ],
      whyItWorks:
        "Dividing the top and bottom of a fraction by the same non-zero number (n) doesn't change its value — it just rewrites it so that every 'small' part appears as something over n. When n is a million, {{1/n}} is 0.000 001, and it can be made smaller than any target by taking n big enough. So those parts fade to nothing and only the leading coefficients survive. The single-fraction gap makes this concrete: a fixed number over something that grows without bound must shrink to 0.",
      strategies: ["Consider extremes", "Estimate first", "Make it simpler", "Introduce a variable"],
      thinkDeeper:
        "A sequence is defined by {{u_1 = 2}} and {{u_(n+1) = 1/2 u_n + 3}}. Work out the first five terms. If the sequence has a limit L, then for large n both {{u_n}} and {{u_(n+1)}} are almost L, so L = {{1/2 L + 3}}. Solve it — and check that your terms really are heading there. Does the starting value matter?",
    },
  ],
  learn: {
    flashcards: [
      { front: "nth term of 5, 8, 11, 14, …", back: "3n + 2: the difference 3 goes in front of n; the zero term (5 − 3 = 2) goes on the end." },
      { front: "Term-to-term rule vs nth term?", back: "Term-to-term: how to get the next term ('add 3'). nth term: any term straight from its position ('3n + 2')." },
      { front: "Is 100 a term of 3n + 2?", back: "{{3n + 2 = 100}} gives n = 32.666… — not a whole number, so **no**." },
      { front: "nth term of 20, 17, 14, 11, …", back: "23 − 3n (difference −3, zero term 23)." },
      { front: "nth term of an arithmetic sequence with first term a and difference d", back: "{{u_n = a + (n - 1)d}}" },
      { front: "Why (n − 1) in {{a + (n - 1)d}}?", back: "The nth term is n − 1 jumps after the first term. The 10th term is a + 9d." },
      { front: "{{u_4 = 23}} and {{u_10 = 47}}. Find d.", back: "6 jumps for a rise of 24, so d = 24 ÷ 6 = 4." },
      { front: "x, y, z are consecutive terms of an arithmetic sequence. What equation links them?", back: "{{y - x = z - y}}, i.e. {{2y = x + z}} — the middle term is the mean of its neighbours." },
      { front: "Sum of the first n terms of an arithmetic series (with d)", back: "{{S_n = n/2 [2a + (n - 1)d]}} — on the formula sheet." },
      { front: "Sum using first and last terms", back: "{{S_n = n/2 (a + l)}}" },
      { front: "1 + 2 + 3 + … + 100", back: "{{100/2 * 101 = 5050}}. In general {{n/2 (n + 1)}}." },
      { front: "Finding n from a sum gives a quadratic. Which root do you keep?", back: "The positive whole number. Say why you reject the other (negative or not an integer)." },
      { front: "How do you get {{u_n}} from {{S_n}}?", back: "{{u_n = S_n - S_(n-1)}}" },
      { front: "How can you tell a sequence is quadratic?", back: "The second differences are constant (but the first differences aren't)." },
      { front: "Second difference 6. What is the {{n^2}} term?", back: "{{3n^2}} — halve the second difference." },
      { front: "nth term of 2, 6, 12, 20, 30, …", back: "{{n^2 + n}} = n(n + 1)." },
      { front: "Limiting value of {{(an + b)/(cn + d)}}", back: "{{a/c}} — the ratio of the n-coefficients." },
      { front: "How do you *prove* a limiting value?", back: "Divide every term top and bottom by n (or {{n^2}}); as {{n -> ∞}}, {{k/n -> 0}}; write down what is left." },
    ],
    mustKnow: [
      "Can I find the nth term of an arithmetic (linear) sequence, including decreasing, decimal and fraction ones?",
      "Can I decide whether a number is a term of a sequence, and find the first term above or below a given value?",
      "Can I use nth term = {{a + (n - 1)d}}, including finding a and d from two given terms with simultaneous equations?",
      "Can I set up and solve an equation when consecutive terms of an arithmetic sequence are given in algebra?",
      "Can I find the sum of the first n terms, {{S_n}}, and explain Gauss's pairing proof of the formula?",
      "Can I find n given {{S_n}} by solving a quadratic, and use arithmetic series in contexts like savings and seating?",
      "Can I find the nth term of a sequence including fractional terms?",
      "Can I find the nth term of a quadratic sequence using second differences?",
      "Can I prove the limiting value of a sequence by dividing through by n?",
    ],
    misconceptions: [
      { wrong: "The nth term of 5, 8, 11, 14 is n + 3, because you add 3 each time.", right: "'Add 3' is the term-to-term rule. The nth term is 3n + 2: the difference multiplies n." },
      { wrong: "In 3n + 2 the first term is 3.", right: "3 is the common difference. The first term is 3 × 1 + 2 = 5; 2 is the zero term." },
      { wrong: "{{3n + 2 = 100}} gives n = 32.666…, so 100 is roughly the 33rd term.", right: "If n is not a whole number, 100 is **not** a term at all. The 33rd term is 101." },
      { wrong: "The 10th term is {{a + 10d}}.", right: "From the 1st term to the 10th is 9 jumps: {{u_10 = a + 9d}}." },
      { wrong: "{{S_n}} is the nth term.", right: "{{S_n}} is the **sum** of the first n terms. The nth term is {{u_n}}." },
      { wrong: "A second difference of 4 means the sequence starts {{4n^2}}.", right: "The second difference is 2a, so a = 2: the sequence starts {{2n^2}}." },
      { wrong: "The limiting value is a term the sequence eventually reaches.", right: "The terms get as close as you like to the limit; for {{(2n + 1)/(n + 3)}} no term ever equals 2." },
      { wrong: "Working out {{u_1000}} on a calculator proves the limit.", right: "Numbers only suggest a limit. A proof divides through by n and uses {{1/n -> 0}}." },
    ],
    examMistakes: [
      "Giving the term-to-term rule ('+4') or 'n + 4' when asked for the nth term of 3, 7, 11, 15 — the answer is 4n − 1.",
      "Answering 'is 150 a term?' with just 'no' (or 'n = 36.75') and no reason — the mark needs 'because n is not a whole number'.",
      "Using {{a + nd}} instead of {{a + (n - 1)d}}, so every term found from a and d is one jump too far.",
      "Losing the sign of d in a decreasing series: putting d = 3 instead of d = −3 into {{S_n = n/2 [2a + (n - 1)d]}}.",
      "Solving the quadratic for n but then giving both roots, or a non-integer, as 'the number of weeks' — reject the negative root and interpret.",
      "Quadratic sequences: using the second difference itself as the coefficient of {{n^2}}, or subtracting {{an^2}} from the first differences instead of from the terms.",
    ],
    mnemonics: [
      {
        topic: "Linear nth term",
        device: "Difference in front, zero at the back",
        explanation: "For 7, 11, 15, …: difference 4 goes in front of n, the zero term 3 (one step before 7) goes at the back → 4n + 3.",
      },
      {
        topic: "Arithmetic series",
        device: "Pair them, multiply, halve",
        explanation: "Pair first with last (a + l), multiply by the number of terms n, halve because you used two copies: {{S_n = n/2 (a + l)}}.",
      },
      {
        topic: "Quadratic sequences",
        device: "Halve, subtract, linear",
        explanation: "Halve the second difference for a; subtract {{an^2}} from the terms; find the linear nth term of what's left.",
      },
    ],
    realWorld: [
      { title: "Taxi fares", detail: "A Singapore taxi charges a flag-down fare and then the same amount for every extra 400 m — so the fare after each 400 m is a linear sequence, and the flag-down is (almost) the zero term.", emoji: "🚕" },
      { title: "Concert-hall seating", detail: "Raked seating at venues like the Esplanade adds a fixed number of seats to each row further back. Total capacity is an arithmetic series: {{S_n = n/2 (a + l)}}.", emoji: "🎭" },
      { title: "Savings plans and pay scales", detail: "Saving $3 more every week, or a salary that rises by a fixed increment each year, gives an arithmetic sequence; the total saved or earned is the series.", emoji: "💰" },
      { title: "Medicine levelling off", detail: "If the body removes half of a drug each day and a 100 mg dose is taken daily, the amount follows {{u_(n+1) = 1/2 u_n + 100}} — it approaches a limiting value of 200 mg, which doctors use to plan safe dosing.", emoji: "💊" },
    ],
    videos: [
      { title: "nth term of linear sequences", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+nth+term" },
      { title: "Arithmetic series — sum of n terms (IGCSE)", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+igcse+arithmetic+series" },
      { title: "Quadratic sequences nth term", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+quadratic+sequences+nth+term" },
      { title: "Proof of the arithmetic series formula", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+arithmetic+series+sum+proof" },
      { title: "Limiting value of a sequence", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=limiting+value+of+a+sequence+gcse+further+maths" },
    ],
    formulas: [
      { name: "Linear nth term", formula: "nth term = dn + (zero term), where zero term = first term − d", note: "Learn this — not given" },
      { name: "nth term of an arithmetic sequence", formula: "{{u_n = a + (n - 1)d}}", note: "Learn this — not given" },
      { name: "Sum of an arithmetic series", formula: "{{S_n = n/2 [2a + (n - 1)d]}}", note: "On the formula sheet" },
      { name: "Sum using first and last terms", formula: "{{S_n = n/2 (a + l)}}", note: "Learn this — not given" },
      { name: "Sum of the first n whole numbers", formula: "{{1 + 2 + … + n = n/2 (n + 1)}}", note: "Learn this — not given" },
      { name: "Consecutive terms x, y, z", formula: "{{2y = x + z}}", note: "Learn this — not given" },
      { name: "Term from sums", formula: "{{u_n = S_n - S_(n-1)}}", note: "Learn this — not given" },
      { name: "Quadratic sequence {{an^2 + bn + c}}", formula: "second difference = 2a; first first-difference = 3a + b; first term = a + b + c", note: "Learn this — not given" },
      { name: "Limiting value", formula: "{{(an + b)/(cn + d) -> a/c}} as {{n -> ∞}}", note: "Learn this — not given" },
    ],
  },
};
