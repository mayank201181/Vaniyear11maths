import type { TopicGuide } from "../../types.ts";

// ---------------------------------------------------------------------------
// Indices, Standard Form & Surds — guide (textbook chapter + learn-smart).
// Edexcel IGCSE 4MA1 Higher 1.4–1.5, 1.9 + school H+ (harder index equations).
// ---------------------------------------------------------------------------

export const guide: TopicGuide = {
  id: "indices-surds",
  title: "Indices, Standard Form & Surds",
  strand: "Number",
  icon: "√",
  summary: "Powers, roots and exact answers: the index laws, standard form and surds without a calculator.",
  intro:
    "Indices and surds are the grammar of exact mathematics. On 4MA1 Higher you will be asked to evaluate things like {{(8/27)^(-2/3)}} with no help from a calculator, to solve {{4^x = 8^(x-1)}}, and to rationalise {{4/(3 + sqrt(5))}} — and the same skills turn up inside Pythagoras, trigonometry, quadratics and standard form. Learn *why* each law works and you will never need to memorise a list of special cases.",
  guide: [
    // -----------------------------------------------------------------------
    {
      id: "index-laws",
      heading: "The index laws",
      discovery: {
        problem:
          "Write {{2^3 * 2^4}} out in full as a long string of 2s multiplied together. How many 2s are there? Now do the same for {{2^7 ÷ 2^3}} (write it as a fraction and cancel), and for {{(2^3)^2}}. Can you predict each answer as a single power of 2 *without* writing out the 2s? Finally: {{2^3 ÷ 2^3}} is obviously 1 — what does your rule for dividing say it should be?",
        idea:
          "{{2^3 * 2^4}} is three 2s followed by four more 2s: seven 2s, so {{2^7}}. Dividing cancels three 2s from the top: {{2^7 ÷ 2^3 = 2^4}}. And {{(2^3)^2 = 2^3 * 2^3 = 2^6}} — two lots of three 2s. An index is just a **count of factors**, so multiplying adds the counts, dividing subtracts them and a power of a power multiplies them. The last one forces {{2^0 = 1}}: the subtraction rule gives {{2^(3-3) = 2^0}}, and the answer has to be 1.",
      },
      body:
        "In {{5^4}} the **base** is 5 and the **index** (power, exponent) is 4: it means four 5s multiplied, 5 × 5 × 5 × 5 = 625. Every index law comes from counting factors.\n\n| Law | In symbols | Example |\n|---|---|---|\n| Multiply, same base | {{a^m * a^n = a^(m+n)}} | {{x^5 * x^3 = x^8}} |\n| Divide, same base | {{a^m ÷ a^n = a^(m-n)}} | {{y^9 ÷ y^4 = y^5}} |\n| Power of a power | {{(a^m)^n = a^(mn)}} | {{(p^3)^4 = p^12}} |\n| Zero index | {{a^0 = 1}} (a ≠ 0) | {{17^0 = 1}} |\n| Power of a product | {{(ab)^n = a^n b^n}} | {{(2x)^3 = 8x^3}} |\n\n**The laws only work for the same base.** {{2^3 * 3^2}} is 8 × 9 = 72: you cannot add the indices, and it is certainly not {{6^5}}.\n\n**Expressions with numbers and letters.** Deal with each part separately: multiply or divide the **numbers** in the ordinary way, and use the index laws on each **letter**.\n\n    {{4x^3 y^2 * 5x y^4 = 20x^4 y^6}}\n    {{(18a^7 b^3)/(6a^2 b) = 3a^5 b^2}}\n\n**An index outside a bracket** applies to *everything* inside, including the number in front:\n\n    {{(3x^2 y)^3 = 3^3 * (x^2)^3 * y^3 = 27x^6 y^3}}\n\nThe most common exam slip is writing {{3x^6 y^3}} — the 3 must be cubed too. A negative number inside the bracket keeps its sign only for odd powers: {{(-2x)^4 = 16x^4}} but {{(-2x)^3 = -8x^3}}.\n\n**Different bases that are secretly the same.** Powers of 2 hide everywhere: 4 = {{2^2}}, 8 = {{2^3}}, 16 = {{2^4}}, 32 = {{2^5}}. So {{8^3 * 4^5 = 2^9 * 2^10 = 2^19}}. Rewriting in a common base is the key move in the equations section later.\n\n> Order of work for a messy expression: expand any bracket with an index outside it first, then multiply out the top, then divide by the bottom.",
      diagram: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three blue boxes each containing 2, labelled 2 cubed, times four yellow boxes each containing 2, labelled 2 to the 4. Below, the same seven boxes joined in one row, equal to 2 to the 7."><rect x="0" y="0" width="480" height="200" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><rect x="30" y="20" width="38" height="38" rx="5" fill="#c7d2fe"/><rect x="75" y="20" width="38" height="38" rx="5" fill="#c7d2fe"/><rect x="120" y="20" width="38" height="38" rx="5" fill="#c7d2fe"/><rect x="210" y="20" width="38" height="38" rx="5" fill="#fde68a"/><rect x="255" y="20" width="38" height="38" rx="5" fill="#fde68a"/><rect x="300" y="20" width="38" height="38" rx="5" fill="#fde68a"/><rect x="345" y="20" width="38" height="38" rx="5" fill="#fde68a"/><rect x="30" y="112" width="38" height="38" rx="5" fill="#c7d2fe"/><rect x="75" y="112" width="38" height="38" rx="5" fill="#c7d2fe"/><rect x="120" y="112" width="38" height="38" rx="5" fill="#c7d2fe"/><rect x="165" y="112" width="38" height="38" rx="5" fill="#fde68a"/><rect x="210" y="112" width="38" height="38" rx="5" fill="#fde68a"/><rect x="255" y="112" width="38" height="38" rx="5" fill="#fde68a"/><rect x="300" y="112" width="38" height="38" rx="5" fill="#fde68a"/></g><g font-family="sans-serif" font-size="16" fill="#1f2937" text-anchor="middle" font-weight="bold"><text x="49" y="45">2</text><text x="94" y="45">2</text><text x="139" y="45">2</text><text x="229" y="45">2</text><text x="274" y="45">2</text><text x="319" y="45">2</text><text x="364" y="45">2</text><text x="49" y="137">2</text><text x="94" y="137">2</text><text x="139" y="137">2</text><text x="184" y="137">2</text><text x="229" y="137">2</text><text x="274" y="137">2</text><text x="319" y="137">2</text></g><text x="184" y="45" font-family="sans-serif" font-size="20" fill="#1f2937" text-anchor="middle">×</text><g font-family="sans-serif" font-size="13" fill="#334155" text-anchor="middle"><text x="94" y="78">2³: three 2s</text><text x="297" y="78">2⁴: four 2s</text></g><text x="360" y="137" font-family="sans-serif" font-size="16" fill="#1f2937" font-weight="bold">= 2⁷</text><text x="240" y="182" font-family="sans-serif" font-size="13" fill="#334155" text-anchor="middle">Multiplying joins the strings of factors: 3 + 4 = 7, so add the indices.</text></svg>`,
      diagramCaption:
        "An index counts factors. Joining a string of three 2s to a string of four 2s gives seven 2s — which is why {{a^m * a^n = a^(m+n)}}.",
      workedExamples: [
        {
          title: "An index outside a bracket, then divide",
          problem: "Simplify fully {{(3x^2 y)^3 ÷ 9xy}}.",
          steps: [
            "The cube applies to every factor in the bracket: {{(3x^2 y)^3 = 3^3 * x^(2 * 3) * y^3 = 27x^6 y^3}}.",
            "Now divide: write it as {{(27x^6 y^3)/(9xy)}}.",
            "Numbers: 27 ÷ 9 = 3.",
            "Letters: {{x^6 ÷ x^1 = x^5}} and {{y^3 ÷ y^1 = y^2}}.",
            "So the answer is {{3x^5 y^2}}.",
          ],
          answer: "{{3x^5 y^2}}",
          yourTurn: {
            question: "Your turn: simplify fully {{(2a^3 b)^4 ÷ 8ab^2}}.",
            answer: { type: "expression", expr: "2a^11b^2", form: "simplified", display: "{{2a^11 b^2}}" },
            solution:
              "{{(2a^3 b)^4 = 2^4 a^12 b^4 = 16a^12 b^4}}. Then 16 ÷ 8 = 2, {{a^12 ÷ a = a^11}} and {{b^4 ÷ b^2 = b^2}}, giving {{2a^11 b^2}}.",
          },
        },
        {
          title: "Different bases, one power",
          problem: "Write {{8^3 * 4^5}} as a single power of 2.",
          steps: [
            "8 and 4 are both powers of 2: 8 = {{2^3}} and 4 = {{2^2}}.",
            "{{8^3 = (2^3)^3 = 2^9}} and {{4^5 = (2^2)^5 = 2^10}}.",
            "Now the bases match, so add the indices: {{2^9 * 2^10 = 2^19}}.",
            "Check the size: {{2^10}} ≈ 1000 and {{8^3 * 4^5}} = 512 × 1024 ≈ 524 000 ≈ {{2^19}} = 524 288. ✓",
          ],
          answer: "{{2^19}}",
        },
      ],
      keyPoints: [
        "Same base only: multiply → add indices; divide → subtract indices; power of a power → multiply indices.",
        "{{a^0 = 1}} for any non-zero a — it is what the division law forces.",
        "An index outside a bracket applies to every factor inside, including the number: {{(2x^3)^4 = 16x^12}}.",
        "With numbers and letters, handle the numbers normally and the letters with the laws.",
        "Rewrite 4, 8, 16, 32 as powers of 2 (and 9, 27, 81 as powers of 3) to combine different bases.",
      ],
      whyItWorks:
        "Everything follows from *an index counts factors*. {{a^m}} is m factors of a, and {{a^n}} is n more, so together there are m + n. In {{a^m ÷ a^n}} the n factors on the bottom cancel n of the m on top, leaving m − n. {{(a^m)^n}} is n copies of a string of m factors: mn in total.\n\nThe zero index is not a separate rule — it is *forced*:\n\n    {{a^3 ÷ a^3 = 1}} (anything divided by itself)\n    {{a^3 ÷ a^3 = a^(3-3) = a^0}} (the division law)\n\nso {{a^0}} must equal 1 if the laws are to stay consistent.",
      strategies: ["Write it out in full", "Rewrite in a common base", "Check by substituting a number"],
      thinkDeeper:
        "Without a calculator, decide which is bigger: {{2^100}} or {{3^60}}? (Hint: both are powers of something to the 20.) Then try {{5^30}} against {{2^70}}.",
    },
    // -----------------------------------------------------------------------
    {
      id: "negative-fractional-indices",
      heading: "Negative and fractional indices",
      discovery: {
        problem:
          "Continue this pattern downwards, dividing by 2 each time: {{2^3 = 8}}, {{2^2 = 4}}, {{2^1 = 2}}, {{2^0 = ?}}, {{2^(-1) = ?}}, {{2^(-2) = ?}}. Then a second puzzle: if the index laws still hold, what is {{9^(1/2) * 9^(1/2)}}? So what number must {{9^(1/2)}} be?",
        idea:
          "Halving each step gives {{2^0 = 1}}, {{2^(-1) = 1/2}}, {{2^(-2) = 1/4}}: a negative index means **one over** — a reciprocal, never a negative number. For the second puzzle, {{9^(1/2) * 9^(1/2) = 9^(1/2 + 1/2) = 9^1 = 9}}. The number that multiplies by itself to give 9 is 3, so {{9^(1/2) = sqrt(9) = 3}}. A fractional index is a **root**.",
      },
      body:
        "Keeping the index laws true for *every* index — negative, zero and fractional — tells us exactly what these powers must mean.\n\n**Negative indices are reciprocals.**\n\n    {{a^(-n) = 1/a^n}}\n\nSo {{5^(-2) = 1/25}}, {{10^(-3) = 1/1000}} and {{x^(-1) = 1/x}}. For a fraction, a negative index **flips** it: {{(2/3)^(-2) = (3/2)^2 = 9/4}}.\n\n**Unit fractions are roots.** {{a^(1/2) = sqrt(a)}}, {{a^(1/3) = cbrt(a)}} and in general {{a^(1/n)}} is the *n*th root ⁿ√a: the number which, raised to the power n, gives a. So {{16^(1/4)}} = 2 because {{2^4 = 16}}.\n\n**Other fractions: the bottom is the root, the top is the power.**\n\n    {{a^(m/n) = (a^(1/n))^m}}\n\nTake the root **first** — the numbers stay small. {{27^(2/3) = (cbrt(27))^2 = 3^2 = 9}}. (Squaring first gives {{cbrt(729)}}, which is the same 9 but much harder.)\n\n**Putting it all together — Flip, Root, Power.** For a negative fractional index such as {{(8/27)^(-2/3)}}:\n\n1. **Flip** (deal with the minus): {{(27/8)^(2/3)}}.\n2. **Root** (the denominator 3): {{cbrt(27/8) = 3/2}}.\n3. **Power** (the numerator 2): {{(3/2)^2 = 9/4}}.\n\n| Expression | Flip | Root | Power | Value |\n|---|---|---|---|---|\n| {{25^(-1/2)}} | {{(1/25)^(1/2)}} | {{1/5}} | — | {{1/5}} |\n| {{64^(2/3)}} | — | 4 | {{4^2}} | 16 |\n| {{(16/81)^(-3/4)}} | {{(81/16)^(3/4)}} | {{3/2}} | {{(3/2)^3}} | {{27/8}} |\n| {{0.04^(-1/2)}} | {{25^(1/2)}} | 5 | — | 5 |\n\nDecimals: turn them into fractions first — 0.04 = {{1/25}}, so flipping gives 25.\n\n**Writing expressions in index form.** Exam questions often ask you to write something as {{x^n}} or {{2^n}}: {{1/sqrt(x) = x^(-1/2)}}, {{sqrt(x^3) = x^(3/2)}}, {{1/(4x^2) = 1/4 x^(-2)}}. Note in the last one that the 4 stays as {{1/4}} — only the {{x^2}} gets the negative index.",
      diagram: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of powers of 2 from 2 to the minus 2 up to 2 cubed. Bar heights are one quarter, one half, 1, 2, 4 and 8. Each step to the left halves the height."><rect x="0" y="0" width="480" height="250" fill="#ffffff"/><text x="20" y="22" font-family="sans-serif" font-size="13" fill="#334155">One step left = index down by 1 = divide by 2</text><line x1="40" y1="200" x2="440" y2="200" stroke="#1f2937" stroke-width="1.5"/><g stroke="#334155" stroke-width="1.2"><rect x="60" y="195" width="40" height="5" fill="#bbf7d0"/><rect x="120" y="190" width="40" height="10" fill="#bbf7d0"/><rect x="180" y="180" width="40" height="20" fill="#fde68a"/><rect x="240" y="160" width="40" height="40" fill="#c7d2fe"/><rect x="300" y="120" width="40" height="80" fill="#c7d2fe"/><rect x="360" y="40" width="40" height="160" fill="#c7d2fe"/></g><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle" font-weight="bold"><text x="80" y="187">¼</text><text x="140" y="182">½</text><text x="200" y="172">1</text><text x="260" y="152">2</text><text x="320" y="112">4</text><text x="380" y="34">8</text></g><g font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle"><text x="80" y="220">2⁻²</text><text x="140" y="220">2⁻¹</text><text x="200" y="220">2⁰</text><text x="260" y="220">2¹</text><text x="320" y="220">2²</text><text x="380" y="220">2³</text></g><text x="240" y="242" font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle">negative index → a fraction (a reciprocal), never a negative number</text></svg>`,
      diagramCaption:
        "Each bar is half the one to its right. Keep halving past {{2^0 = 1}} and you reach {{2^(-1) = 1/2}} and {{2^(-2) = 1/4}}: small and positive.",
      workedExamples: [
        {
          title: "Flip, root, power (non-calculator)",
          problem: "Work out the exact value of {{(8/27)^(-2/3)}}.",
          steps: [
            "**Flip** to clear the negative: {{(8/27)^(-2/3) = (27/8)^(2/3)}}.",
            "**Root** — the denominator of the index is 3, so cube-root top and bottom: {{cbrt(27) = 3}} and {{cbrt(8) = 2}}, giving {{3/2}}.",
            "**Power** — the numerator is 2: {{(3/2)^2 = 9/4}}.",
            "Sense check: a negative index on a number less than 1 should give something *bigger* than 1. {{9/4}} = 2.25 ✓",
          ],
          answer: "{{9/4}} (or {{2 1/4}})",
          yourTurn: {
            question: "Your turn: work out the exact value of {{(16/81)^(-3/4)}}. Give your answer as a fraction.",
            answer: { type: "fraction", n: 27, d: 8, simplest: true, display: "{{27/8}}" },
            solution:
              "Flip: {{(81/16)^(3/4)}}. Fourth root: {{81^(1/4) = 3}} and {{16^(1/4) = 2}}, so {{3/2}}. Cube: {{(3/2)^3 = 27/8}}.",
          },
        },
        {
          title: "Writing an expression as a single power",
          problem: "Write {{1/(8sqrt(2))}} as a power of 2.",
          steps: [
            "Write every part as a power of 2: 8 = {{2^3}} and {{sqrt(2) = 2^(1/2)}}.",
            "Multiply by adding indices: {{8sqrt(2) = 2^3 * 2^(1/2) = 2^(7/2)}}.",
            "One over a power is a negative power: {{1/2^(7/2) = 2^(-7/2)}}.",
          ],
          answer: "{{2^(-7/2)}}",
        },
      ],
      keyPoints: [
        "{{a^(-n) = 1/a^n}}: a negative index means reciprocal, not negative.",
        "{{a^(1/n)}} is the nth root; in {{a^(m/n)}} the denominator is the root and the numerator is the power.",
        "Flip, Root, Power — and take the root before the power to keep numbers small.",
        "A fraction to a negative power flips: {{(a/b)^(-n) = (b/a)^n}}.",
        "Turn decimals into fractions first: {{0.25^(-1/2) = 4^(1/2) = 2}}.",
      ],
      whyItWorks:
        "Both meanings are *forced* by insisting that {{a^m * a^n = a^(m+n)}} keeps working.\n\n- Negative: {{a^n * a^(-n) = a^0 = 1}}, so {{a^(-n)}} is the number that multiplies {{a^n}} to give 1 — its reciprocal {{1/a^n}}.\n- Fractional: n copies of {{a^(1/n)}} multiply to {{a^(1/n + 1/n + ... + 1/n) = a^1 = a}}, so {{a^(1/n)}} is the number whose nth power is a — the nth root.\n- Then {{a^(m/n) = a^(1/n * m) = (a^(1/n))^m}} by the power-of-a-power law.\n\nNobody *decided* these definitions; they are the only ones that keep the laws consistent.",
      strategies: ["Find a pattern", "Work in stages (Flip, Root, Power)", "Rewrite in a common base", "Estimate first"],
      thinkDeeper:
        "{{(-8)^(1/3) = -2}} makes sense, since {{(-2)^3 = -8}}. But what about {{(-8)^(2/6)}}? The index {{2/6}} equals {{1/3}}, yet squaring first gives {{(64)^(1/6) = 2}}. Which is right, and what does this tell you about fractional powers of negative numbers?",
    },
    // -----------------------------------------------------------------------
    {
      id: "standard-form",
      heading: "Standard form",
      discovery: {
        problem:
          "Light travels about 300 000 000 metres per second, and the Sun is about 150 000 000 000 metres from Earth. Before you calculate anything: how many zeros does each number have? Use that to work out, *without a calculator*, how many seconds sunlight takes to reach us. What made it easy?",
        idea:
          "Write them as {{3 * 10^8}} and {{1.5 * 10^11}}. Then {{(1.5 * 10^11)/(3 * 10^8) = 1.5/3 * 10^(11-8) = 0.5 * 10^3}} = 500 seconds — just over 8 minutes. Splitting each number into *a small number × a power of 10* lets you do the digits and the size separately. That is standard form.",
      },
      body:
        "A number is in **standard form** when it is written as\n\n    {{A * 10^n}}  where  {{1 <= A < 10}}  and n is an integer.\n\n- **Big numbers** have positive n: 47 200 000 = {{4.72 * 10^7}} (the point moves 7 places).\n- **Small numbers** have negative n: 0.000 036 = {{3.6 * 10^(-5)}} (the 3 is in the 5th decimal place).\n- 32 × {{10^4}} and 0.8 × {{10^(-3)}} are *not* in standard form — A must be at least 1 and less than 10.\n\n**Fixing A.** If A is too big or too small, move the factor of 10 into the power: {{32 * 10^4 = 3.2 * 10^1 * 10^4 = 3.2 * 10^5}}, and {{0.8 * 10^(-3) = 8 * 10^(-1) * 10^(-3) = 8 * 10^(-4)}}. Bigger A ⇒ smaller power, and vice versa.\n\n**Comparing.** Compare the powers of 10 first; only if they match compare the A values. {{2.1 * 10^(-2)}} is bigger than {{7.2 * 10^(-3)}} because −2 > −3.\n\n**Multiplying and dividing without a calculator.** Do the A parts together and the powers together, then tidy:\n\n    {{(3.2 * 10^5) * (6 * 10^(-8)) = 19.2 * 10^(-3) = 1.92 * 10^(-2)}}\n    {{(4 * 10^6) ÷ (8 * 10^(-3)) = 0.5 * 10^9 = 5 * 10^8}}\n\n**Adding and subtracting.** You *cannot* add the powers. Write both numbers with the same power of 10 (or as ordinary numbers), then add:\n\n    {{4.2 * 10^5 + 3.7 * 10^4 = 42 * 10^4 + 3.7 * 10^4 = 45.7 * 10^4 = 4.57 * 10^5}}\n\n**On a calculator.** Use the ×10ˣ (EXP) key, and put each standard-form number in brackets when dividing. A display such as `1.92E-02` must be written as {{1.92 * 10^(-2)}} — never as 1.92⁻².\n\n**Worded problems** (astronomy, cells, data, populations) usually need: identify what to divide by what, check units match, calculate, then round (3 s.f. unless told otherwise) and give the answer in the form asked.",
      diagram: `<svg viewBox="0 0 480 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A powers-of-ten scale from 10 to the minus 8 metres to 10 to the 8 metres. Marked on it: a virus at 1 times 10 to the minus 7 metres, a red blood cell at 8 times 10 to the minus 6, a person at 1.7 metres, Mount Everest at 8.85 times 10 cubed metres and Earth's diameter at 1.27 times 10 to the 7 metres."><rect x="0" y="0" width="480" height="200" fill="#ffffff"/><text x="240" y="22" font-family="sans-serif" font-size="13" fill="#334155" text-anchor="middle">Sizes in metres on a powers-of-10 scale</text><line x1="30" y1="110" x2="450" y2="110" stroke="#1f2937" stroke-width="2"/><g stroke="#1f2937" stroke-width="1.5"><line x1="30" y1="104" x2="30" y2="116"/><line x1="82.5" y1="104" x2="82.5" y2="116"/><line x1="135" y1="104" x2="135" y2="116"/><line x1="187.5" y1="104" x2="187.5" y2="116"/><line x1="240" y1="104" x2="240" y2="116"/><line x1="292.5" y1="104" x2="292.5" y2="116"/><line x1="345" y1="104" x2="345" y2="116"/><line x1="397.5" y1="104" x2="397.5" y2="116"/><line x1="450" y1="104" x2="450" y2="116"/></g><g font-family="sans-serif" font-size="11" fill="#475569" text-anchor="middle"><text x="30" y="184">10⁻⁸</text><text x="82.5" y="184">10⁻⁶</text><text x="135" y="184">10⁻⁴</text><text x="187.5" y="184">10⁻²</text><text x="240" y="184">10⁰</text><text x="292.5" y="184">10²</text><text x="345" y="184">10⁴</text><text x="397.5" y="184">10⁶</text><text x="450" y="184">10⁸</text></g><g fill="#dc2626"><circle cx="56.3" cy="110" r="4.5"/><circle cx="106.2" cy="110" r="4.5"/><circle cx="246" cy="110" r="4.5"/><circle cx="343.6" cy="110" r="4.5"/><circle cx="426.4" cy="110" r="4.5"/></g><g stroke="#94a3b8" stroke-width="1"><line x1="56.3" y1="82" x2="56.3" y2="105"/><line x1="246" y1="82" x2="246" y2="105"/><line x1="426.4" y1="82" x2="426.4" y2="105"/><line x1="106.2" y1="115" x2="106.2" y2="133"/><line x1="343.6" y1="115" x2="343.6" y2="133"/></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="56.3" y="62" font-weight="bold">virus</text><text x="56.3" y="76">1 × 10⁻⁷ m</text><text x="246" y="62" font-weight="bold">person</text><text x="246" y="76">1.7 × 10⁰ m</text><text x="426.4" y="62" font-weight="bold">Earth (diameter)</text><text x="426.4" y="76">1.27 × 10⁷ m</text><text x="106.2" y="146" font-weight="bold">red blood cell</text><text x="106.2" y="160">8 × 10⁻⁶ m</text><text x="343.6" y="146" font-weight="bold">Mount Everest</text><text x="343.6" y="160">8.85 × 10³ m</text></g></svg>`,
      diagramCaption:
        "On a powers-of-10 scale each tick is 100 times the one before. The power n tells you roughly where a number lives; A fine-tunes it within that step.",
      workedExamples: [
        {
          title: "Non-calculator multiplication",
          problem: "Work out {{(3.2 * 10^5) * (6 * 10^(-8))}}. Give your answer in standard form.",
          steps: [
            "Multiply the A parts: 3.2 × 6 = 19.2.",
            "Multiply the powers by adding indices: {{10^5 * 10^(-8) = 10^(-3)}}.",
            "So far: {{19.2 * 10^(-3)}} — but 19.2 is not between 1 and 10.",
            "{{19.2 = 1.92 * 10^1}}, so {{19.2 * 10^(-3) = 1.92 * 10^(1 + (-3)) = 1.92 * 10^(-2)}}.",
          ],
          answer: "{{1.92 * 10^(-2)}}",
          yourTurn: {
            question: "Your turn: work out {{(4 * 10^6) ÷ (8 * 10^(-3))}}. Give your answer in standard form.",
            answer: { type: "number", value: 5e8, standardForm: true, display: "{{5 * 10^8}}" },
            solution:
              "4 ÷ 8 = 0.5 and {{10^6 ÷ 10^(-3) = 10^(6-(-3)) = 10^9}}. So {{0.5 * 10^9 = 5 * 10^(-1) * 10^9 = 5 * 10^8}}.",
          },
        },
        {
          title: "A calculator problem in context",
          problem:
            "The mass of Jupiter is {{1.90 * 10^27}} kg. The mass of Earth is {{5.97 * 10^24}} kg. How many times heavier than Earth is Jupiter? Give your answer correct to 3 significant figures.",
          steps: [
            "\"How many times heavier\" means divide: {{(1.90 * 10^27)/(5.97 * 10^24)}}.",
            "Estimate first: {{2/6 * 10^3}} ≈ 330.",
            "Calculator (brackets round each number): 318.257…",
            "To 3 s.f.: 318. Close to the estimate ✓",
          ],
          answer: "318 times",
        },
      ],
      keyPoints: [
        "Standard form is {{A * 10^n}} with {{1 <= A < 10}} and n an integer.",
        "Big numbers → positive n; numbers between 0 and 1 → negative n.",
        "× and ÷: combine the A parts and the powers separately, then fix A.",
        "+ and −: match the powers of 10 first (or use ordinary numbers).",
        "Calculator: use the ×10ˣ key and brackets; write the answer as {{A * 10^n}}, never as a calculator display.",
      ],
      whyItWorks:
        "Standard form is just the index laws plus place value. Multiplying by {{10^n}} moves every digit n places; so {{4.72 * 10^7}} is 4.72 with its digits shifted 7 places left. Because multiplication can be done in any order,\n\n    {{(a * 10^m)(b * 10^n) = (ab) * (10^m * 10^n) = (ab) * 10^(m+n)}}\n\nwhich is why the A parts and the powers can be handled separately. Addition does *not* factor like that — {{10^5 + 10^4}} is 110 000, not {{10^9}} — so you must line up place values first.",
      strategies: ["Estimate first", "Split into parts (A and the power)", "Check the size makes sense"],
      thinkDeeper:
        "If {{p = 4 * 10^n}} and {{q = 5 * 10^n}}, write {{p * q}} and {{p + q}} in standard form in terms of n. Then explain why {{p * q}} always has a power of 10 equal to 2n + 1, whatever n is.",
    },
    // -----------------------------------------------------------------------
    {
      id: "index-equations",
      heading: "Equations with indices",
      discovery: {
        problem:
          "Solve {{2^x = 32}} in your head. Now try {{4^x = 32}}. There is no whole-number answer — but write both 4 and 32 as powers of 2 and see what the equation becomes. What value of x works?",
        idea:
          "{{2^x = 32 = 2^5}} so x = 5. For {{4^x = 32}}: {{4^x = (2^2)^x = 2^(2x)}} and 32 = {{2^5}}. So {{2^(2x) = 2^5}}, and powers of the same base are only equal when the indices are equal: 2x = 5, x = {{5/2}}. Check: {{4^(5/2) = (sqrt(4))^5 = 2^5 = 32}} ✓",
      },
      body:
        "When the unknown is **in the index**, the standard method is:\n\n1. Write **both sides as a power of the same base** (usually 2, 3 or 5).\n2. Simplify each side to a single power using the index laws.\n3. **Equate the indices** and solve the resulting ordinary equation.\n4. Check by substituting back.\n\n| Base 2 | Base 3 | Base 5 |\n|---|---|---|\n| 4 = {{2^2}}, 8 = {{2^3}} | 9 = {{3^2}} | 25 = {{5^2}} |\n| 16 = {{2^4}}, 32 = {{2^5}} | 27 = {{3^3}}, 81 = {{3^4}} | 125 = {{5^3}} |\n| {{1/2 = 2^(-1)}}, {{sqrt(2) = 2^(1/2)}} | {{1/9 = 3^(-2)}}, {{sqrt(3) = 3^(1/2)}} | {{1/5 = 5^(-1)}}, 1 = {{5^0}} |\n\n**Bracket the index whenever you raise a power to a power.** In {{8^(x-1)}}, the 3 from 8 = {{2^3}} multiplies the *whole* index: {{(2^3)^(x-1) = 2^(3(x-1)) = 2^(3x-3)}}. Writing {{2^(3x-1)}} is the classic error.\n\n**Fractions, roots and 1.** These need negative, fractional or zero indices:\n\n    {{27^x = 1/9}}  ⇒  {{3^(3x) = 3^(-2)}}  ⇒  {{x = -2/3}}\n    {{9^x = sqrt(3)}}  ⇒  {{3^(2x) = 3^(1/2)}}  ⇒  {{x = 1/4}}\n    {{5^(2x-6) = 1}}  ⇒  {{5^(2x-6) = 5^0}}  ⇒  {{x = 3}}\n\n**Products on one side.** Combine first: {{2^x * 4^(x+1) = 32}} becomes {{2^x * 2^(2x+2) = 2^5}}, so {{2^(3x+2) = 2^5}}, 3x + 2 = 5 and x = 1.\n\n**Finding a power.** Questions like \"{{sqrt(8) = 2^k}}, find k\" or \"{{2^n = 8^5 ÷ 4^3}}\" use exactly the same idea: rewrite in base 2 and read off the index.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y equals 2 to the x for x from minus 2 to 4. The curve rises ever more steeply. A dashed horizontal line at y equals 8 meets the curve once, at x equals 3."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="60" y1="210" x2="420" y2="210"/><line x1="60" y1="150" x2="420" y2="150"/><line x1="60" y1="90" x2="420" y2="90"/><line x1="60" y1="30" x2="420" y2="30"/></g><line x1="50" y1="270" x2="430" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="180" y1="20" x2="180" y2="278" stroke="#1f2937" stroke-width="1.5"/><g stroke="#1f2937" stroke-width="1.2"><line x1="60" y1="270" x2="60" y2="276"/><line x1="120" y1="270" x2="120" y2="276"/><line x1="240" y1="270" x2="240" y2="276"/><line x1="300" y1="270" x2="300" y2="276"/><line x1="360" y1="270" x2="360" y2="276"/><line x1="420" y1="270" x2="420" y2="276"/><line x1="174" y1="210" x2="180" y2="210"/><line x1="174" y1="150" x2="180" y2="150"/><line x1="174" y1="90" x2="180" y2="90"/><line x1="174" y1="30" x2="180" y2="30"/></g><g font-family="sans-serif" font-size="12" fill="#334155" text-anchor="middle"><text x="60" y="290">−2</text><text x="120" y="290">−1</text><text x="174" y="290">0</text><text x="240" y="290">1</text><text x="300" y="290">2</text><text x="360" y="290">3</text><text x="420" y="290">4</text></g><g font-family="sans-serif" font-size="12" fill="#334155" text-anchor="end"><text x="170" y="214">4</text><text x="170" y="154">8</text><text x="170" y="94">12</text><text x="170" y="34">16</text></g><text x="438" y="274" font-family="sans-serif" font-size="13" fill="#1f2937">x</text><text x="186" y="22" font-family="sans-serif" font-size="13" fill="#1f2937">y</text><line x1="60" y1="150" x2="360" y2="150" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6 4"/><line x1="360" y1="150" x2="360" y2="270" stroke="#dc2626" stroke-width="1.5" stroke-dasharray="6 4"/><polyline points="60,266.25 90,264.7 120,262.5 150,259.4 180,255 210,248.8 240,240 270,227.6 300,210 330,185.1 360,150 390,100.3 420,30" fill="none" stroke="#4338ca" stroke-width="2.5"/><circle cx="360" cy="150" r="5" fill="#dc2626"/><text x="340" y="120" font-family="sans-serif" font-size="14" fill="#4338ca" text-anchor="end" font-weight="bold">y = 2ˣ</text><text x="66" y="143" font-family="sans-serif" font-size="12" fill="#dc2626">y = 8</text><text x="366" y="262" font-family="sans-serif" font-size="12" fill="#dc2626">x = 3</text></svg>`,
      diagramCaption:
        "{{y = 2^x}} is always increasing, so each height is reached exactly once. That is why {{2^x = 2^3}} forces x = 3 — and why equating indices is allowed.",
      workedExamples: [
        {
          title: "Different bases on each side",
          problem: "Solve {{4^x = 8^(x-1)}}.",
          steps: [
            "Both 4 and 8 are powers of 2: {{4^x = (2^2)^x = 2^(2x)}}.",
            "{{8^(x-1) = (2^3)^(x-1) = 2^(3(x-1)) = 2^(3x-3)}} — keep the bracket!",
            "So {{2^(2x) = 2^(3x-3)}}. Equate the indices: 2x = 3x − 3.",
            "x = 3.",
            "Check: {{4^3 = 64}} and {{8^2 = 64}} ✓",
          ],
          answer: "x = 3",
          yourTurn: {
            question: "Your turn: solve {{9^(x+1) = 27^x}}.",
            answer: { type: "number", value: 2 },
            solution:
              "{{9^(x+1) = 3^(2(x+1)) = 3^(2x+2)}} and {{27^x = 3^(3x)}}. So 2x + 2 = 3x, giving x = 2. Check: {{9^3 = 729 = 27^2}} ✓",
          },
        },
        {
          title: "A reciprocal on the right",
          problem: "Solve {{27^x = 1/9}}.",
          steps: [
            "Use base 3: {{27^x = (3^3)^x = 3^(3x)}}.",
            "{{1/9 = 1/3^2 = 3^(-2)}}.",
            "So {{3^(3x) = 3^(-2)}}, giving 3x = −2 and {{x = -2/3}}.",
            "Check: {{27^(-2/3) = 1/(cbrt(27))^2 = 1/3^2 = 1/9}} ✓",
          ],
          answer: "{{x = -2/3}}",
        },
      ],
      keyPoints: [
        "Write both sides as powers of the same base, then equate the indices.",
        "Bracket the index when raising a power to a power: {{(2^3)^(x-1) = 2^(3x-3)}}.",
        "Fractions → negative indices, roots → fractional indices, 1 → index 0.",
        "Combine products on one side into a single power before equating.",
        "Always check by substituting back.",
      ],
      whyItWorks:
        "For a positive base other than 1, the function {{y = a^x}} is strictly increasing (or strictly decreasing if a < 1), so it never takes the same value twice. Therefore if {{a^p = a^q}}, then p and q must be the same number. (The base 1 is the exception: {{1^5 = 1^7}}, which is why we never use base 1.)",
      strategies: ["Rewrite in a common base", "Check by substituting", "Use the inverse"],
      thinkDeeper:
        "Solve {{2^x * 3^x = 36}}. You can't write 3 as a power of 2 — so what *can* you do with {{2^x * 3^x}}? (Think about the law {{(ab)^n = a^n b^n}} backwards.)",
    },
    // -----------------------------------------------------------------------
    {
      id: "harder-index-equations",
      heading: "Harder index equations",
      discovery: {
        problem:
          "Two puzzles. (1) Solve {{x^(5/2) = 32}}: this time the unknown is the *base*, not the index. (2) Solve {{2^(2x) - 6(2^x) + 8 = 0}}. For the second, notice that {{2^(2x) = (2^x)^2}}. If you called {{2^x}} something simpler — say y — what kind of equation would you have?",
        idea:
          "(1) {{x^(5/2)}} means {{(sqrt(x))^5}}. Since {{2^5 = 32}}, {{sqrt(x) = 2}} and x = 4. Equivalently, raise both sides to the reciprocal power {{2/5}}: {{x = 32^(2/5) = 4}}. (2) With {{y = 2^x}} the equation is {{y^2 - 6y + 8 = 0}}, an ordinary quadratic: (y − 2)(y − 4) = 0, so {{2^x = 2}} or {{2^x = 4}}, giving x = 1 or x = 2. A *disguised quadratic*.",
      },
      body:
        "This is an H+ (Further Pure flavour) skill. Two new types appear.\n\n**Type 1 — the unknown is the base: {{x^(m/n) = k}}.** Undo the power by raising both sides to the **reciprocal** power {{n/m}}, because {{(x^(m/n))^(n/m) = x^1 = x}}:\n\n    {{x^(5/2) = 32}}  ⇒  {{x = 32^(2/5) = (32^(1/5))^2 = 2^2 = 4}}\n    {{x^(-3/2) = 1/27}}  ⇒  {{x = (1/27)^(-2/3) = 27^(2/3) = 9}}\n\nIn practice, think in stages: {{x^(5/2) = (sqrt(x))^5 = 32}}, so {{sqrt(x) = 2}}, so x = 4.\n\n**Watch for ±.** If the *numerator* of the index is even, a negative x may also work. {{x^(2/3) = 4}} means {{(cbrt(x))^2 = 4}}, so {{cbrt(x) = 2}} or {{cbrt(x) = -2}}, giving **x = 8 or x = −8**. (Check: {{(-8)^(2/3) = (-2)^2 = 4}} ✓.) When the denominator is even (a square root), x must be positive, so only the positive answer counts. Questions often say \"x > 0\" to avoid the issue — read the question.\n\n**Type 2 — disguised quadratics.** Look for one power that is the square of another:\n\n| You see | Rewrite as | With {{y = 2^x}} |\n|---|---|---|\n| {{2^(2x)}} or {{4^x}} | {{(2^x)^2}} | {{y^2}} |\n| {{2^(x+1)}} | {{2 * 2^x}} | 2y |\n| {{2^(x+2)}} | {{4 * 2^x}} | 4y |\n| {{2^(x-1)}} | {{1/2 * 2^x}} | {{1/2 y}} |\n\nThen solve the quadratic in y, and **convert back**: each y gives {{2^x = y}}. Because {{2^x}} (or {{3^x}}) is **always positive**, any y ≤ 0 gives no solution and must be rejected — say so explicitly in an exam.\n\n    {{3^(2x) - 2(3^x) - 3 = 0}}\n    {{y^2 - 2y - 3 = 0}}  ⇒  (y − 3)(y + 1) = 0  ⇒  y = 3 or y = −1\n    {{3^x = 3}}  ⇒  x = 1;   {{3^x = -1}} has no solution.\n\nIf the y-values are not neat powers (e.g. {{2^x = 5}}), you need logarithms — beyond 4MA1, but a calculator's trial-and-improvement gives x ≈ 2.32.",
      diagram: `<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Flowchart. 3 to the 2x minus 2 times 3 to the x minus 3 equals 0. Let y equal 3 to the x, giving y squared minus 2y minus 3 equals 0. Factorise: y minus 3 times y plus 1 equals 0. Branch left: 3 to the x equals 3 so x equals 1, accepted. Branch right: 3 to the x equals minus 1, no solution because 3 to the x is always positive."><defs><marker id="is-flow-arrow" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="7" markerHeight="7" orient="auto-start-reverse"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><rect x="0" y="0" width="480" height="240" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><rect x="110" y="10" width="260" height="34" rx="6" fill="#c7d2fe"/><rect x="110" y="70" width="260" height="34" rx="6" fill="#fde68a"/><rect x="110" y="130" width="260" height="34" rx="6" fill="#fde68a"/><rect x="20" y="192" width="200" height="38" rx="6" fill="#bbf7d0"/><rect x="260" y="192" width="200" height="38" rx="6" fill="#fecaca"/></g><g stroke="#334155" stroke-width="1.5" marker-end="url(#is-flow-arrow)"><line x1="240" y1="44" x2="240" y2="68"/><line x1="240" y1="104" x2="240" y2="128"/><line x1="200" y1="164" x2="130" y2="190"/><line x1="280" y1="164" x2="350" y2="190"/></g><g font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle"><text x="240" y="32">3²ˣ − 2(3ˣ) − 3 = 0</text><text x="240" y="92">let y = 3ˣ:  y² − 2y − 3 = 0</text><text x="240" y="152">(y − 3)(y + 1) = 0</text></g><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="120" y="216">3ˣ = 3  ⇒  x = 1  ✓</text><text x="360" y="209">3ˣ = −1  ✗</text><text x="360" y="224" font-size="11">no solution: 3ˣ is always positive</text></g><text x="390" y="92" font-family="sans-serif" font-size="11" fill="#475569">3²ˣ = (3ˣ)²</text></svg>`,
      diagramCaption:
        "A disguised quadratic: substitute, solve the quadratic, then convert each root back — rejecting any value that a power can never take.",
      workedExamples: [
        {
          title: "The unknown in the base",
          problem: "Solve {{x^(5/2) = 32}}.",
          steps: [
            "Undo the power {{5/2}} by raising both sides to the power {{2/5}}: {{x = 32^(2/5)}}.",
            "Root first: {{32^(1/5) = 2}} (because {{2^5 = 32}}).",
            "Then power: {{2^2 = 4}}. So x = 4.",
            "Check: {{4^(5/2) = (sqrt(4))^5 = 2^5 = 32}} ✓ (x must be positive here, because of the square root.)",
          ],
          answer: "x = 4",
          yourTurn: {
            question: "Your turn: solve {{x^(-2/3) = 1/16}}, where x > 0.",
            answer: { type: "number", value: 64 },
            solution:
              "Flip both sides: {{x^(2/3) = 16}}. Raise to the power {{3/2}}: {{x = 16^(3/2) = (sqrt(16))^3 = 4^3 = 64}}. Check: {{64^(2/3) = 4^2 = 16}} ✓",
          },
        },
        {
          title: "A disguised quadratic",
          problem: "Solve {{2^(2x) - 6(2^x) + 8 = 0}}.",
          steps: [
            "Spot that {{2^(2x) = (2^x)^2}}. Let {{y = 2^x}}.",
            "The equation becomes {{y^2 - 6y + 8 = 0}}.",
            "Factorise: (y − 2)(y − 4) = 0, so y = 2 or y = 4.",
            "Convert back: {{2^x = 2}} gives x = 1; {{2^x = 4}} gives x = 2. Both y-values are positive, so both are valid.",
            "Check x = 2: {{2^4 - 6 * 4 + 8 = 16 - 24 + 8 = 0}} ✓",
          ],
          answer: "x = 1 or x = 2",
          yourTurn: {
            question: "Your turn: solve {{3^(2x) - 10(3^x) + 9 = 0}}. Give both solutions.",
            answer: { type: "list", values: [0, 2], ordered: false, display: "x = 0 or x = 2" },
            solution:
              "Let {{y = 3^x}}: {{y^2 - 10y + 9 = 0}}, (y − 1)(y − 9) = 0. {{3^x = 1}} gives x = 0 and {{3^x = 9}} gives x = 2.",
          },
        },
      ],
      keyPoints: [
        "{{x^(m/n) = k}}: raise both sides to {{n/m}} — or undo the root and power in stages.",
        "An even numerator in the index can allow a negative solution too; check the question's conditions.",
        "Disguised quadratic: spot {{a^(2x) = (a^x)^2}}, substitute {{y = a^x}}, solve, convert back.",
        "{{2^(x+1) = 2 * 2^x}} — split off the constant part of the index.",
        "{{a^x > 0}} always: reject y ≤ 0 and say why.",
      ],
      whyItWorks:
        "Raising to the reciprocal power works because of the power-of-a-power law: {{(x^(m/n))^(n/m) = x^(m/n * n/m) = x^1}}. It is the index version of \"to undo × 3, do ÷ 3\".\n\nThe substitution works because the index laws turn a sum of powers into a polynomial: {{2^(2x) = 2^(x * 2) = (2^x)^2}}. Once you see {{2^x}} as a single quantity, the equation is a quadratic you already know how to solve.",
      strategies: ["Introduce a variable", "Use the inverse", "Check by substituting", "Split into cases"],
      thinkDeeper:
        "Solve {{4^x - 3(2^(x+1)) + 8 = 0}}. (Rewrite {{4^x}} and {{2^(x+1)}} in terms of {{2^x}} first.) Then invent your own disguised quadratic in {{5^x}} that has exactly one valid solution, and explain how you guaranteed it.",
    },
    // -----------------------------------------------------------------------
    {
      id: "simplifying-surds",
      heading: "Simplifying surds",
      discovery: {
        problem:
          "On a calculator, {{sqrt(72)}} = 8.485 28… and {{6sqrt(2)}} = 8.485 28… too. Why? Also test these two claims with numbers: is {{sqrt(4 * 9) = sqrt(4) * sqrt(9)}}? Is {{sqrt(9 + 16) = sqrt(9) + sqrt(16)}}?",
        idea:
          "{{sqrt(36)}} = 6 and {{sqrt(4) * sqrt(9)}} = 2 × 3 = 6, so square roots **split over multiplication**. But {{sqrt(25)}} = 5 while 3 + 4 = 7, so they do **not** split over addition. Since 72 = 36 × 2, {{sqrt(72) = sqrt(36) * sqrt(2) = 6sqrt(2)}}.",
      },
      body:
        "A **surd** is a root that is irrational — it cannot be written as a fraction, so its decimal never ends or repeats: {{sqrt(2)}}, {{sqrt(5)}}, {{cbrt(7)}}. ({{sqrt(9)}} = 3 is a root but not a surd.) Exam questions want answers **exact** — in surd form — not rounded decimals.\n\n**The two rules.**\n\n    {{sqrt(ab) = sqrt(a) * sqrt(b)}}        {{sqrt(a/b) = sqrt(a)/sqrt(b)}}\n\nand the most useful special case: {{sqrt(a) * sqrt(a) = a}}.\n\n**Simplifying.** Find the **largest square factor** (4, 9, 16, 25, 36, 49, 64, 81, 100, …) and take its root outside:\n\n| Surd | Largest square factor | Simplified |\n|---|---|---|\n| {{sqrt(12)}} | 4 | {{2sqrt(3)}} |\n| {{sqrt(50)}} | 25 | {{5sqrt(2)}} |\n| {{sqrt(72)}} | 36 | {{6sqrt(2)}} |\n| {{sqrt(48)}} | 16 | {{4sqrt(3)}} |\n| {{sqrt(180)}} | 36 | {{6sqrt(5)}} |\n\nIf you use a smaller square factor — {{sqrt(72) = 2sqrt(18)}} — you are not finished: {{sqrt(18) = 3sqrt(2)}}, so it's {{6sqrt(2)}} anyway. Fully simplified means no square factor left under the root.\n\n**Adding and subtracting: like surds only.** {{sqrt(2)}} behaves like a letter: {{3sqrt(2) + 5sqrt(2) = 8sqrt(2)}}, just as 3x + 5x = 8x. Different surds won't combine — *unless they simplify to the same surd*:\n\n    {{sqrt(12) + sqrt(27) = 2sqrt(3) + 3sqrt(3) = 5sqrt(3)}}\n\nBut {{sqrt(2) + sqrt(3)}} cannot be simplified, and {{sqrt(2) + sqrt(3) != sqrt(5)}}.\n\n**Multiplying and dividing.** Whole numbers with whole numbers, roots with roots, then simplify:\n\n    {{2sqrt(3) * 5sqrt(6) = 10sqrt(18) = 10 * 3sqrt(2) = 30sqrt(2)}}\n    {{sqrt(60)/sqrt(5) = sqrt(12) = 2sqrt(3)}}\n    {{(3sqrt(2))^2 = 9 * 2 = 18}}",
      diagram: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An isosceles right-angled triangle with both shorter sides 6. The hypotenuse is labelled root 72 equals 6 root 2. Working beside it: 6 squared plus 6 squared equals 72, hypotenuse equals root 72 equals root 36 times root 2 equals 6 root 2, about 8.49."><rect x="0" y="0" width="480" height="260" fill="#ffffff"/><polygon points="100,50 100,230 280,230" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><path d="M100,216 L114,216 L114,230" fill="none" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="15" fill="#1f2937" font-weight="bold"><text x="82" y="145" text-anchor="middle">6</text><text x="190" y="250" text-anchor="middle">6</text><text x="200" y="128" fill="#4338ca">√72 = 6√2</text></g><g font-family="sans-serif" font-size="14" fill="#1f2937"><text x="310" y="90">6² + 6² = 72</text><text x="310" y="118">hyp = √72</text><text x="310" y="146">= √36 × √2</text><text x="310" y="174">= 6√2</text><text x="310" y="202" fill="#475569">≈ 8.49</text></g></svg>`,
      diagramCaption:
        "Surds appear naturally: the hypotenuse of a 6–6 right-angled triangle is exactly {{sqrt(72) = 6sqrt(2)}}. The exact form shows the link to the side length that 8.485… hides.",
      workedExamples: [
        {
          title: "Collecting like surds",
          problem: "Simplify {{sqrt(50) + sqrt(32) - sqrt(8)}}.",
          steps: [
            "Simplify each surd using its largest square factor.",
            "{{sqrt(50) = sqrt(25) * sqrt(2) = 5sqrt(2)}}.",
            "{{sqrt(32) = sqrt(16) * sqrt(2) = 4sqrt(2)}}.",
            "{{sqrt(8) = sqrt(4) * sqrt(2) = 2sqrt(2)}}.",
            "They are now like surds: {{5sqrt(2) + 4sqrt(2) - 2sqrt(2) = 7sqrt(2)}}.",
          ],
          answer: "{{7sqrt(2)}}",
          yourTurn: {
            question:
              "Your turn: write {{sqrt(75) - sqrt(12) + sqrt(48)}} in the form {{k sqrt(3)}}, where k is an integer. What is k?",
            answer: { type: "number", value: 7 },
            solution:
              "{{sqrt(75) = 5sqrt(3)}}, {{sqrt(12) = 2sqrt(3)}}, {{sqrt(48) = 4sqrt(3)}}. So {{5sqrt(3) - 2sqrt(3) + 4sqrt(3) = 7sqrt(3)}}, k = 7.",
          },
        },
        {
          title: "Multiplying and dividing",
          problem: "Simplify fully {{(4sqrt(6) * 3sqrt(10))/sqrt(15)}}.",
          steps: [
            "Top: whole numbers 4 × 3 = 12; roots {{sqrt(6) * sqrt(10) = sqrt(60)}}. So the top is {{12sqrt(60)}}.",
            "Divide the roots: {{sqrt(60)/sqrt(15) = sqrt(60/15) = sqrt(4) = 2}}.",
            "So the whole expression is 12 × 2 = 24.",
          ],
          answer: "24",
        },
      ],
      keyPoints: [
        "{{sqrt(ab) = sqrt(a) * sqrt(b)}} and {{sqrt(a/b) = sqrt(a)/sqrt(b)}} — but {{sqrt(a + b) != sqrt(a) + sqrt(b)}}.",
        "Simplify by taking out the largest square factor.",
        "Only like surds add: treat {{sqrt(3)}} like a letter.",
        "Multiply numbers with numbers and roots with roots, then simplify.",
        "{{sqrt(a) * sqrt(a) = a}}.",
      ],
      whyItWorks:
        "{{sqrt(a) * sqrt(b)}} squared is {{sqrt(a) * sqrt(b) * sqrt(a) * sqrt(b) = a * b}}, and it is positive, so it *is* the positive square root of ab: {{sqrt(a) * sqrt(b) = sqrt(ab)}}. In index form this is just {{(ab)^(1/2) = a^(1/2) b^(1/2)}} — the power-of-a-product law.\n\nThere is no such law for addition: {{(a + b)^(1/2)}} has no reason to split, and the 6–6 triangle shows it — the hypotenuse is {{sqrt(36 + 36)}} ≈ 8.49, not 6 + 6 = 12.",
      strategies: ["Find the largest square factor", "Treat the surd like a letter", "Check with a calculator"],
      thinkDeeper:
        "Prove that {{sqrt(2)}} is irrational: suppose {{sqrt(2) = p/q}} in lowest terms, square both sides and show that p and q must both be even — a contradiction. Where does the argument break down if you try the same with {{sqrt(4)}}?",
    },
    // -----------------------------------------------------------------------
    {
      id: "surd-brackets",
      heading: "Expanding brackets with surds",
      discovery: {
        problem:
          "Expand {{(3 + sqrt(2))^2}} and {{(3 + sqrt(2))(3 - sqrt(2))}}. One answer still contains {{sqrt(2)}}; the other is a whole number. Which one, and why did the surd vanish?",
        idea:
          "{{(3 + sqrt(2))^2 = 9 + 3sqrt(2) + 3sqrt(2) + 2 = 11 + 6sqrt(2)}}. But {{(3 + sqrt(2))(3 - sqrt(2)) = 9 - 3sqrt(2) + 3sqrt(2) - 2 = 7}}: the two middle terms are equal and opposite, and {{sqrt(2) * sqrt(2) = 2}} is a whole number. It is the **difference of two squares**, {{(a + b)(a - b) = a^2 - b^2}}, and it is the key to rationalising.",
      },
      body:
        "Expand brackets containing surds exactly as you expand algebra — every term in the first bracket multiplies every term in the second (FOIL or a grid) — then use {{sqrt(a) * sqrt(a) = a}} and collect like terms.\n\n**Grid method** for {{(2 + sqrt(3))(5 - 2sqrt(3))}}:\n\n| × | 5 | {{-2sqrt(3)}} |\n|---|---|---|\n| 2 | 10 | {{-4sqrt(3)}} |\n| {{sqrt(3)}} | {{5sqrt(3)}} | −6 |\n\nTotal: 10 − 6 + ({{-4sqrt(3) + 5sqrt(3)}}) = {{4 + sqrt(3)}}. The bottom-right cell is {{sqrt(3) * (-2sqrt(3)) = -2 * 3 = -6}}.\n\n**Squaring a bracket** — always write it as two brackets; never just square each term:\n\n    {{(a + sqrt(b))^2 = a^2 + 2a sqrt(b) + b}}\n    {{(5 - sqrt(3))^2 = 25 - 10sqrt(3) + 3 = 28 - 10sqrt(3)}}\n\n**Difference of two squares** — the surd disappears:\n\n    {{(a + sqrt(b))(a - sqrt(b)) = a^2 - b}}\n    {{(sqrt(7) + sqrt(3))(sqrt(7) - sqrt(3)) = 7 - 3 = 4}}\n\n**Simplify surds first** when a bracket contains something like {{sqrt(12)}} or {{sqrt(8)}}: it makes like terms visible. Edexcel often asks: *Show that {{(5 - sqrt(8))(1 + sqrt(2))}} can be written in the form {{a + b sqrt(2)}}.* Write {{sqrt(8) = 2sqrt(2)}}, then expand:\n\n    {{(5 - 2sqrt(2))(1 + sqrt(2)) = 5 + 5sqrt(2) - 2sqrt(2) - 4 = 1 + 3sqrt(2)}}\n\n**Surds in geometry.** Areas of rectangles with surd sides, Pythagoras with surd lengths and \"show that the area is {{a + b sqrt(c)}}\" questions all use exactly this skill.",
      diagram: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A square of side 3 plus root 2 split into four parts: a 3 by 3 square of area 9, two 3 by root 2 rectangles each of area 3 root 2, and a root 2 by root 2 square of area 2. Total: 11 plus 6 root 2."><rect x="0" y="0" width="480" height="250" fill="#ffffff"/><g stroke="#1f2937" stroke-width="1.5"><rect x="40" y="30" width="135" height="135" fill="#c7d2fe"/><rect x="175" y="30" width="63.6" height="135" fill="#fde68a"/><rect x="40" y="165" width="135" height="63.6" fill="#fde68a"/><rect x="175" y="165" width="63.6" height="63.6" fill="#bbf7d0"/></g><g font-family="sans-serif" font-size="13" fill="#334155" text-anchor="middle"><text x="107.5" y="22">3</text><text x="206.8" y="22">√2</text><text x="28" y="102">3</text><text x="24" y="202">√2</text></g><g font-family="sans-serif" font-size="16" fill="#1f2937" text-anchor="middle" font-weight="bold"><text x="107.5" y="103">9</text><text x="206.8" y="103">3√2</text><text x="107.5" y="202">3√2</text><text x="206.8" y="202">2</text></g><g font-family="sans-serif" font-size="14" fill="#1f2937"><text x="266" y="96">(3 + √2)²</text><text x="266" y="124">= 9 + 3√2 + 3√2 + 2</text><text x="266" y="152" font-weight="bold">= 11 + 6√2</text><text x="266" y="190" font-size="12" fill="#475569">√2 × √2 = 2, a whole number</text></g></svg>`,
      diagramCaption:
        "A square of side {{3 + sqrt(2)}} splits into four pieces — so {{(3 + sqrt(2))^2}} has four terms, not two. The small corner square, {{sqrt(2) * sqrt(2)}}, is the whole number 2.",
      workedExamples: [
        {
          title: "Mixed surds — simplify first",
          problem: "Expand and simplify {{(2 + sqrt(3))(5 - sqrt(12))}}. Give your answer in the form {{a + b sqrt(3)}}.",
          steps: [
            "Simplify the surd: {{sqrt(12) = 2sqrt(3)}}, so the product is {{(2 + sqrt(3))(5 - 2sqrt(3))}}.",
            "First × first: 2 × 5 = 10. Outer: {{2 * (-2sqrt(3)) = -4sqrt(3)}}.",
            "Inner: {{sqrt(3) * 5 = 5sqrt(3)}}. Last: {{sqrt(3) * (-2sqrt(3)) = -6}}.",
            "Collect: (10 − 6) + ({{-4sqrt(3) + 5sqrt(3)}}) = {{4 + sqrt(3)}}.",
          ],
          answer: "{{4 + sqrt(3)}} (a = 4, b = 1)",
          yourTurn: {
            question: "Your turn: expand and simplify {{(3 - sqrt(5))^2}}, writing it in the form {{a + b sqrt(5)}}. Give the values of a and b (a first).",
            answer: { type: "list", values: [14, -6], ordered: true, display: "a = 14, b = −6, so {{14 - 6sqrt(5)}}" },
            solution:
              "{{(3 - sqrt(5))(3 - sqrt(5)) = 9 - 3sqrt(5) - 3sqrt(5) + 5 = 14 - 6sqrt(5)}}, so a = 14 and b = −6.",
          },
        },
        {
          title: "Squaring a sum of two surds",
          problem: "Show that {{(sqrt(6) + sqrt(2))^2}} can be written in the form {{a + b sqrt(3)}}, where a and b are integers.",
          steps: [
            "Write it as two brackets: {{(sqrt(6) + sqrt(2))(sqrt(6) + sqrt(2))}}.",
            "{{sqrt(6) * sqrt(6) = 6}} and {{sqrt(2) * sqrt(2) = 2}}.",
            "The two middle terms are each {{sqrt(6) * sqrt(2) = sqrt(12)}}, so together {{2sqrt(12)}}.",
            "{{2sqrt(12) = 2 * 2sqrt(3) = 4sqrt(3)}}.",
            "Total: 6 + 2 + {{4sqrt(3) = 8 + 4sqrt(3)}}, so a = 8 and b = 4.",
          ],
          answer: "{{8 + 4sqrt(3)}}",
        },
      ],
      keyPoints: [
        "Expand like algebra: every term times every term (FOIL or grid).",
        "{{sqrt(a) * sqrt(a) = a}}, and {{k sqrt(a) * m sqrt(a) = kma}}.",
        "{{(a + sqrt(b))^2 = a^2 + 2a sqrt(b) + b}} — four terms before collecting, never just {{a^2 + b}}.",
        "{{(a + sqrt(b))(a - sqrt(b)) = a^2 - b}}: the surd cancels out.",
        "Simplify surds inside brackets first so like terms are visible.",
      ],
      whyItWorks:
        "Expanding brackets is the distributive law, and it does not care whether a term is x or {{sqrt(3)}}. The surd only changes the last step: where algebra gives {{x * x = x^2}}, surds give {{sqrt(3) * sqrt(3) = 3}}, a plain number that joins the other whole-number terms.\n\nIn {{(a + sqrt(b))(a - sqrt(b))}} the cross terms are {{-a sqrt(b)}} and {{+a sqrt(b)}}: equal size, opposite signs. They cancel, leaving {{a^2 - b}} — the same algebra as {{(x + y)(x - y) = x^2 - y^2}}.",
      strategies: ["Draw a diagram (area grid)", "Simplify first", "Check with a calculator"],
      thinkDeeper:
        "A rectangle has sides {{(4 + sqrt(2))}} cm and {{(4 - sqrt(2))}} cm. Its area is a whole number — find it. Can you find a *different* pair of surd sides, both of the form {{a + b sqrt(c)}} with b ≠ 0, whose rectangle has area exactly 1?",
    },
    // -----------------------------------------------------------------------
    {
      id: "rationalising",
      heading: "Rationalising denominators",
      discovery: {
        problem:
          "Without a calculator, estimate {{1/sqrt(2)}} using {{sqrt(2)}} ≈ 1.414. (Dividing 1 by 1.414 by hand is unpleasant.) Now multiply top and bottom of {{1/sqrt(2)}} by {{sqrt(2)}}. What do you get, and is it easier to estimate?",
        idea:
          "{{1/sqrt(2) = (1 * sqrt(2))/(sqrt(2) * sqrt(2)) = sqrt(2)/2}} ≈ 1.414 ÷ 2 = 0.707. Multiplying top and bottom by the same thing doesn't change the value, but it moves the surd to the top where it is easy to handle. That's **rationalising the denominator**: making the bottom a rational number.",
      },
      body:
        "An answer in surd form is not considered *simplified* while a surd sits in the denominator. There are two cases.\n\n**Case 1 — a single surd: {{k/sqrt(a)}}.** Multiply top and bottom by {{sqrt(a)}}:\n\n    {{k/sqrt(a) = (k sqrt(a))/a}}\n    {{6/sqrt(3) = (6sqrt(3))/3 = 2sqrt(3)}}\n    {{5/(2sqrt(5)) = (5sqrt(5))/(2 * 5) = sqrt(5)/2}}\n\nYou only need the surd, not the whole number in front: for {{5/(2sqrt(5))}} multiply by {{sqrt(5)/sqrt(5)}}, not by {{2sqrt(5)}}.\n\n**Case 2 — a mixed denominator: {{k/(a + sqrt(b))}}.** Multiplying by {{sqrt(b)}} won't work — you'd get {{a sqrt(b) + b}}, still a surd. Instead multiply top and bottom by the **conjugate** {{a - sqrt(b)}} (same terms, middle sign flipped). The bottom becomes a difference of two squares:\n\n    {{(a + sqrt(b))(a - sqrt(b)) = a^2 - b}}\n    {{4/(3 + sqrt(5)) = (4(3 - sqrt(5)))/((3 + sqrt(5))(3 - sqrt(5))) = (4(3 - sqrt(5)))/(9 - 5) = 3 - sqrt(5)}}\n\n| Denominator | Multiply top and bottom by | New denominator |\n|---|---|---|\n| {{sqrt(7)}} | {{sqrt(7)}} | 7 |\n| {{3sqrt(2)}} | {{sqrt(2)}} | 6 |\n| {{3 + sqrt(5)}} | {{3 - sqrt(5)}} | 9 − 5 = 4 |\n| {{sqrt(3) - 1}} | {{sqrt(3) + 1}} | 3 − 1 = 2 |\n| {{sqrt(7) + sqrt(2)}} | {{sqrt(7) - sqrt(2)}} | 7 − 2 = 5 |\n\n**Expand the numerator fully** and simplify — often a factor cancels with the new denominator. If the numerator also contains a surd, expand it like any double bracket:\n\n    {{(sqrt(5) + 1)/(sqrt(5) - 1) = ((sqrt(5) + 1)^2)/(5 - 1) = (6 + 2sqrt(5))/4 = (3 + sqrt(5))/2}}",
      diagram: `<svg viewBox="0 0 480 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A 3 by 3 square of area 9. A root 5 by root 5 square of area 5 is shaded red in its top-left corner. The remaining L-shaped region, area 4, is shaded green. Beside it: 9 minus 5 equals 4, which equals 3 plus root 5 times 3 minus root 5."><rect x="0" y="0" width="480" height="230" fill="#ffffff"/><rect x="70" y="40" width="150" height="150" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><rect x="70" y="40" width="111.8" height="111.8" fill="#fecaca" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="13" fill="#334155" text-anchor="middle"><text x="145" y="32">3</text></g><g font-family="sans-serif" font-size="13" fill="#334155" text-anchor="end"><text x="62" y="100">√5</text><text x="62" y="175">3 − √5</text></g><text x="125.9" y="101" font-family="sans-serif" font-size="15" fill="#1f2937" text-anchor="middle" font-weight="bold">5</text><text x="201" y="176" font-family="sans-serif" font-size="15" fill="#1f2937" text-anchor="middle" font-weight="bold">4</text><g font-family="sans-serif" font-size="14" fill="#1f2937"><text x="250" y="80">big square − small square</text><text x="250" y="108">= 3² − (√5)² = 9 − 5 = 4</text><text x="250" y="136" font-weight="bold">= (3 + √5)(3 − √5)</text><text x="250" y="174" font-size="12" fill="#475569">The conjugate turns the surd</text><text x="250" y="190" font-size="12" fill="#475569">denominator into a whole number.</text></g></svg>`,
      diagramCaption:
        "The green L-shape has area {{3^2 - (sqrt(5))^2 = 4}} — a whole number. Cut and rearranged, it is a {{(3 + sqrt(5))}} by {{(3 - sqrt(5))}} rectangle: that is why the conjugate clears the surd.",
      workedExamples: [
        {
          title: "Simple surd denominator",
          problem: "Simplify fully {{12/sqrt(6) + sqrt(24)}}. Give your answer in the form {{k sqrt(6)}}.",
          steps: [
            "Rationalise the first term: {{12/sqrt(6) = (12sqrt(6))/6 = 2sqrt(6)}}.",
            "Simplify the second: {{sqrt(24) = sqrt(4) * sqrt(6) = 2sqrt(6)}}.",
            "Add like surds: {{2sqrt(6) + 2sqrt(6) = 4sqrt(6)}}.",
          ],
          answer: "{{4sqrt(6)}}",
          yourTurn: {
            question: "Your turn: write {{15/sqrt(3)}} in the form {{k sqrt(3)}}. What is k?",
            answer: { type: "number", value: 5 },
            solution: "{{15/sqrt(3) = (15sqrt(3))/3 = 5sqrt(3)}}, so k = 5.",
          },
        },
        {
          title: "Mixed denominator — use the conjugate",
          problem: "Rationalise the denominator of {{4/(3 + sqrt(5))}}. Simplify your answer.",
          steps: [
            "The conjugate of {{3 + sqrt(5)}} is {{3 - sqrt(5)}}. Multiply top and bottom by it.",
            "Bottom: {{(3 + sqrt(5))(3 - sqrt(5)) = 9 - 5 = 4}}.",
            "Top: {{4(3 - sqrt(5))}}.",
            "So {{(4(3 - sqrt(5)))/4 = 3 - sqrt(5)}}.",
            "Check: {{4/(3 + 2.236)}} = 0.7639… and 3 − 2.236 = 0.764 ✓",
          ],
          answer: "{{3 - sqrt(5)}}",
          yourTurn: {
            question:
              "Your turn: rationalise the denominator of {{6/(sqrt(3) - 1)}}, writing it in the form {{a + b sqrt(3)}}. Give the values of a and b (a first).",
            answer: { type: "list", values: [3, 3], ordered: true, display: "a = 3, b = 3, so {{3 + 3sqrt(3)}}" },
            solution:
              "Multiply top and bottom by {{sqrt(3) + 1}}. Bottom: 3 − 1 = 2. Top: {{6(sqrt(3) + 1)}}. So {{(6(sqrt(3) + 1))/2 = 3(sqrt(3) + 1) = 3 + 3sqrt(3)}}: a = 3, b = 3.",
          },
        },
      ],
      keyPoints: [
        "{{k/sqrt(a)}}: multiply top and bottom by {{sqrt(a)}} to get {{(k sqrt(a))/a}}.",
        "{{k/(a + sqrt(b))}}: multiply top and bottom by the conjugate {{a - sqrt(b)}}; the bottom becomes {{a^2 - b}}.",
        "Do the same to top and bottom — you are multiplying by 1, so the value is unchanged.",
        "Expand the numerator fully, then look for a common factor to cancel.",
        "Check the decimal value before and after on a calculator.",
      ],
      whyItWorks:
        "Multiplying top and bottom by the same non-zero number multiplies the fraction by 1, so its value can't change. We choose the multiplier that makes the bottom rational: {{sqrt(a) * sqrt(a) = a}} for a single surd, and {{(a + sqrt(b))(a - sqrt(b)) = a^2 - b}} for a mixed one — the difference of two squares, where the cross terms cancel and the surd squares to a whole number.",
      strategies: ["Multiply by a clever form of 1", "Use the difference of two squares", "Check with a calculator"],
      thinkDeeper:
        "Work out {{1/(sqrt(2) + 1) + 1/(sqrt(3) + sqrt(2)) + 1/(sqrt(4) + sqrt(3))}} exactly by rationalising each term. Something remarkable happens — use it to find {{1/(sqrt(1) + sqrt(2)) + 1/(sqrt(2) + sqrt(3)) + ... + 1/(sqrt(99) + sqrt(100))}}.",
    },
  ],
  learn: {
    flashcards: [
      { front: "{{a^m * a^n = ?}}", back: "{{a^(m+n)}} — same base, add the indices." },
      { front: "{{a^m ÷ a^n = ?}}", back: "{{a^(m-n)}} — same base, subtract the indices." },
      { front: "{{(a^m)^n = ?}}", back: "{{a^(mn)}} — multiply the indices." },
      { front: "What is {{a^0}}?", back: "1 (for any a ≠ 0). Forced by {{a^n ÷ a^n}}." },
      { front: "Simplify {{(2x^3)^4}}.", back: "{{16x^12}} — the 2 is raised to the power 4 as well." },
      { front: "What does {{a^(-n)}} mean?", back: "{{1/a^n}}, the reciprocal. {{2^(-3) = 1/8}}, not −8." },
      { front: "What does {{a^(m/n)}} mean?", back: "The nth root of a, raised to the power m: {{(a^(1/n))^m}}. Bottom = root, top = power." },
      { front: "Evaluate {{(8/27)^(-2/3)}}.", back: "Flip {{(27/8)^(2/3)}}, root {{3/2}}, power {{9/4}}." },
      { front: "What is standard form?", back: "{{A * 10^n}} with {{1 <= A < 10}} and n an integer." },
      { front: "Write 0.000 52 in standard form.", back: "{{5.2 * 10^(-4)}}" },
      { front: "How do you solve {{4^x = 8^(x-1)}}?", back: "Base 2: {{2^(2x) = 2^(3x-3)}}, so 2x = 3x − 3, x = 3." },
      { front: "How do you solve {{x^(5/2) = 32}}?", back: "Raise both sides to {{2/5}}: {{x = 32^(2/5) = 2^2 = 4}}." },
      { front: "What substitution solves {{2^(2x) - 6(2^x) + 8 = 0}}?", back: "{{y = 2^x}}, giving {{y^2 - 6y + 8 = 0}}. Then y = 2 or 4, so x = 1 or 2." },
      { front: "Simplify {{sqrt(72)}}.", back: "{{sqrt(36) * sqrt(2) = 6sqrt(2)}} — use the largest square factor." },
      { front: "Is {{sqrt(a + b) = sqrt(a) + sqrt(b)}}?", back: "No. Roots split over × and ÷, never over + or −." },
      { front: "Expand {{(a + sqrt(b))(a - sqrt(b))}}.", back: "{{a^2 - b}} — the surd vanishes (difference of two squares)." },
      { front: "How do you rationalise {{k/sqrt(a)}}?", back: "Multiply top and bottom by {{sqrt(a)}}: {{(k sqrt(a))/a}}." },
      { front: "How do you rationalise {{1/(a + sqrt(b))}}?", back: "Multiply top and bottom by the conjugate {{a - sqrt(b)}}: {{(a - sqrt(b))/(a^2 - b)}}." },
    ],
    mustKnow: [
      "Can I use the index laws to multiply and divide powers of the same base, including expressions like {{4x^3 y^2 * 5xy^4}}?",
      "Can I simplify an expression with an index outside a bracket, such as {{(3x^2 y)^3 ÷ 9xy}}?",
      "Can I explain why {{a^0 = 1}} and evaluate negative indices as reciprocals?",
      "Can I simplify and evaluate fractional indices, such as {{(8/27)^(-2/3)}}, without a calculator?",
      "Can I write numbers in standard form and calculate with them, with and without a calculator?",
      "Can I solve standard form worded problems (astronomy, cells, data) and give answers to 3 s.f.?",
      "Can I solve equations involving indices by changing the base, such as {{4^x = 8^(x-1)}} and {{27^x = 1/9}}?",
      "Can I solve harder index equations such as {{x^(5/2) = 32}} (H+)?",
      "Can I solve disguised quadratics such as {{2^(2x) - 6(2^x) + 8 = 0}} and reject impossible values (H+)?",
      "Can I simplify surds and collect like surds, such as {{sqrt(50) + sqrt(32) - sqrt(8)}}?",
      "Can I use the multiplication and division rules for surds?",
      "Can I multiply out two brackets containing mixed surds and give the answer as {{a + b sqrt(c)}}?",
      "Can I rationalise a simple surd denominator, such as {{6/sqrt(3)}}?",
      "Can I rationalise a mixed surd denominator using the conjugate, such as {{4/(3 + sqrt(5))}}?",
    ],
    misconceptions: [
      { wrong: "{{2^3 * 2^4 = 4^7}} (multiply the bases, add the indices).", right: "Keep the base, add the indices: {{2^3 * 2^4 = 2^7}}." },
      { wrong: "{{2^(-3)}} is a negative number, −8.", right: "A negative index means reciprocal: {{2^(-3) = 1/2^3 = 1/8}}, which is positive." },
      { wrong: "{{5^0 = 0}}.", right: "{{5^0 = 1}}: it is {{5^n ÷ 5^n}}, and anything divided by itself is 1." },
      { wrong: "{{16^(1/2) = 8}} (halving).", right: "A power of {{1/2}} is a square root: {{16^(1/2) = sqrt(16) = 4}}." },
      { wrong: "{{(3x^2)^3 = 3x^6}}.", right: "The index applies to the 3 too: {{(3x^2)^3 = 27x^6}}." },
      { wrong: "{{32 * 10^4}} is in standard form.", right: "A must satisfy {{1 <= A < 10}}: {{32 * 10^4 = 3.2 * 10^5}}." },
      { wrong: "{{sqrt(9 + 16) = sqrt(9) + sqrt(16) = 7}}.", right: "Roots don't split over addition: {{sqrt(25) = 5}}." },
      { wrong: "{{(2 + sqrt(3))^2 = 4 + 3 = 7}}.", right: "Write two brackets: {{4 + 2sqrt(3) + 2sqrt(3) + 3 = 7 + 4sqrt(3)}}." },
      { wrong: "To rationalise {{1/(3 + sqrt(2))}}, multiply top and bottom by {{sqrt(2)}}.", right: "That gives {{3sqrt(2) + 2}} on the bottom — still a surd. Use the conjugate {{3 - sqrt(2)}}: the bottom becomes 9 − 2 = 7." },
    ],
    examMistakes: [
      "Leaving {{19.2 * 10^(-3)}} as the final answer to a standard form question — it is not in standard form, so the last mark is lost. Always check {{1 <= A < 10}}.",
      "Copying a calculator display such as 3.48E+07 or writing 3.48⁷ instead of {{3.48 * 10^7}}.",
      "Raising only the letter to the power: writing {{(2x^3)^4 = 2x^12}} instead of {{16x^12}}.",
      "Evaluating {{27^(-2/3)}} as −18 (multiplying 27 by {{-2/3}}) instead of finding {{1/(cbrt(27))^2 = 1/9}}.",
      "Losing the bracket when changing base: {{8^(x-1) = 2^(3x-1)}} instead of {{2^(3x-3)}}, which gives the wrong value of x.",
      "In a mixed-surd rationalisation, multiplying only the denominator by the conjugate, or not expanding the numerator fully — and not showing the expansion in a 'show that' question.",
    ],
    mnemonics: [
      {
        topic: "Negative fractional indices",
        device: "Flip, Root, Power (FRP)",
        explanation:
          "Minus sign → **flip** the fraction. Denominator of the index → take that **root**. Numerator → raise to that **power**. {{(8/27)^(-2/3)}}: flip {{27/8}}, cube root {{3/2}}, square {{9/4}}.",
      },
      {
        topic: "Fractional indices",
        device: "Roots grow at the bottom",
        explanation:
          "Like a plant, the **root** is at the bottom: in {{a^(m/n)}} the denominator n is the root and the numerator m is the power.",
      },
      {
        topic: "Rationalising a mixed denominator",
        device: "Flip the middle sign",
        explanation:
          "The conjugate of {{a + sqrt(b)}} is {{a - sqrt(b)}} — keep both terms, change only the sign in the middle. Then the bottom is {{a^2 - b}} (difference of two squares).",
      },
    ],
    realWorld: [
      {
        title: "Astronomy and the microscopic world",
        detail:
          "Astronomers and biologists live in standard form. Light takes about 500 s to reach us from the Sun ({{1.5 * 10^11}} m at {{3 * 10^8}} m/s), while a red blood cell is about {{8 * 10^(-6)}} m across. Writing the size as a power of 10 lets you compare them at a glance.",
        emoji: "🔭",
      },
      {
        title: "A4 paper is built on √2",
        detail:
          "A-series paper has sides in the ratio {{1 : sqrt(2)}} (A4 is 210 mm × 297 mm, and 297 ÷ 210 ≈ 1.414). Fold it in half and the new sheet has exactly the same shape — because {{sqrt(2)/2 = 1/sqrt(2)}}, the rationalising identity in disguise.",
        emoji: "📄",
      },
      {
        title: "Music and fractional powers",
        detail:
          "On a piano each semitone multiplies the frequency by {{2^(1/12)}}, so twelve semitones double it: {{(2^(1/12))^12 = 2}}. A fractional index is literally how a piano is tuned.",
        emoji: "🎹",
      },
      {
        title: "Microchips and data",
        detail:
          "Modern chip features are a few nanometres ({{10^(-9)}} m) wide, while data centres store petabytes ({{10^15}} bytes). Engineers estimate with powers of 10 before they ever pick up a calculator.",
        emoji: "💾",
      },
    ],
    videos: [
      { title: "Fractional and negative indices", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+fractional+negative+indices" },
      { title: "Solving exponential equations by changing the base", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+solving+equations+with+indices+same+base" },
      { title: "Surds: simplifying, expanding and rationalising", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+surds+rationalising+the+denominator" },
      { title: "Disguised quadratics with exponentials", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+exponential+equation+disguised+quadratic" },
    ],
    formulas: [
      { name: "Multiplying powers", formula: "{{a^m * a^n = a^(m+n)}}", note: "Learn this — not given" },
      { name: "Dividing powers", formula: "{{a^m ÷ a^n = a^(m-n)}}", note: "Learn this — not given" },
      { name: "Power of a power", formula: "{{(a^m)^n = a^(mn)}}", note: "Learn this — not given" },
      { name: "Power of a product", formula: "{{(ab)^n = a^n b^n}}", note: "Learn this — not given" },
      { name: "Zero index", formula: "{{a^0 = 1}} (a ≠ 0)", note: "Learn this — not given" },
      { name: "Negative index", formula: "{{a^(-n) = 1/a^n}}", note: "Learn this — not given" },
      { name: "Fraction to a negative power", formula: "{{(a/b)^(-n) = (b/a)^n}}", note: "Learn this — not given" },
      { name: "Unit fractional index", formula: "{{a^(1/n)}} = ⁿ√a  (e.g. {{a^(1/2) = sqrt(a)}}, {{a^(1/3) = cbrt(a)}})", note: "Learn this — not given" },
      { name: "General fractional index", formula: "{{a^(m/n) = (a^(1/n))^m}}", note: "Learn this — not given" },
      { name: "Standard form", formula: "{{A * 10^n}}, {{1 <= A < 10}}, n an integer", note: "Learn this — not given" },
      { name: "Product of roots", formula: "{{sqrt(ab) = sqrt(a) * sqrt(b)}}", note: "Learn this — not given" },
      { name: "Quotient of roots", formula: "{{sqrt(a/b) = sqrt(a)/sqrt(b)}}", note: "Learn this — not given" },
      { name: "Root times itself", formula: "{{sqrt(a) * sqrt(a) = a}}", note: "Learn this — not given" },
      { name: "Square of a surd binomial", formula: "{{(a + sqrt(b))^2 = a^2 + 2a sqrt(b) + b}}", note: "Learn this — not given" },
      { name: "Difference of two squares with surds", formula: "{{(a + sqrt(b))(a - sqrt(b)) = a^2 - b}}", note: "Learn this — not given" },
      { name: "Rationalising a simple surd", formula: "{{k/sqrt(a) = (k sqrt(a))/a}}", note: "Learn this — not given" },
      { name: "Rationalising a mixed surd", formula: "{{k/(a + sqrt(b)) = (k(a - sqrt(b)))/(a^2 - b)}}", note: "Learn this — not given" },
    ],
  },
};
