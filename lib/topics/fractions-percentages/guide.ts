import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "fractions-percentages",
  title: "Fractions, Decimals & Percentages",
  strand: "Number",
  icon: "💹",
  summary: "Exact fractions, recurring-decimal proofs, multipliers and compound growth — the number toolkit behind every money question.",
  intro:
    "Fractions, decimals and percentages are three ways of writing the same number, and IGCSE questions expect you to move between them fluently. Higher papers test this in very specific ways: \"show that\" fraction calculations where every step earns a method mark, algebraic proofs that a recurring decimal is a fraction, reverse percentages, and compound interest or depreciation over several years. The single most powerful idea in the chapter is the **multiplier** — once every percentage change is a multiplication, increases, decreases, reverse problems and repeated changes all become the same calculation. Algebraic fractions then reuse exactly the fraction rules you already know, with letters in place of numbers.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "fraction-operations",
      heading: "Fractions without a calculator",
      discovery: {
        problem:
          "Priya works out {{2 1/3 * 1 4/5}} like this: \"2 × 1 = 2 and {{1/3 * 4/5 = 4/15}}, so the answer is {{2 4/15}}.\"\n\nBefore you check her method, **estimate**: {{2 1/3}} is a bit more than 2 and {{1 4/5}} is nearly 2. Roughly what should the answer be? Is {{2 4/15}} believable?",
        idea:
          "The answer should be about 2.3 × 1.8 ≈ 4.2, so {{2 4/15}} is far too small. Priya forgot the cross terms: {{2 1/3 * 1 4/5}} is really {{(2 + 1/3)(1 + 4/5)}}, which has **four** parts, not two.\n\nThe clean fix is to turn each mixed number into an improper fraction first:\n\n    {{2 1/3 * 1 4/5 = 7/3 * 9/5 = 63/15 = 21/5 = 4 1/5}}\n\nand 4.2 matches the estimate.",
      },
      body:
        "On Paper 1H and 2H you are allowed a calculator, but Edexcel regularly asks you to **\"Show that\"** a fraction calculation gives a stated answer. The answer is printed in the question, so *all* the marks are for the working. A calculator display earns nothing — you must show each stage.\n\n**Step 1 — mixed numbers become improper fractions.** Multiply the whole number by the denominator and add the numerator:\n\n    {{3 2/5 = (3 * 5 + 2)/5 = 17/5}}\n\n**Step 2 — the operation.**\n\n| Operation | Method | Example |\n|---|---|---|\n| Add / subtract | Common denominator (the LCM), then add or subtract numerators | {{5/6 - 3/8 = 20/24 - 9/24 = 11/24}} |\n| Multiply | Numerator × numerator, denominator × denominator (cancel first if you can) | {{8/9 * 3/4 = 2/3}} |\n| Divide | Multiply by the **reciprocal** of the second fraction | {{5/6 / 10/9 = 5/6 * 9/10 = 3/4}} |\n\n**Step 3 — simplify and convert back** to a mixed number if the question's answer is written that way.\n\n**What a \"show that\" answer must contain.** For {{1 2/3 + 2 3/4}} the examiner wants to see the improper fractions (or the whole numbers handled separately), the equivalent fractions with the common denominator written out, and the final line matching the printed answer:\n\n    {{1 2/3 + 2 3/4 = 5/3 + 11/4 = 20/12 + 33/12 = 53/12 = 4 5/12}}\n\nWriting only {{53/12}} skips the step that earns the first method mark.\n\n**Adding and subtracting mixed numbers — two routes.**\n\n- *Improper fractions*: always works, but the numbers can get big.\n- *Wholes and parts separately*: {{4 1/6 - 1 3/4}} → wholes 4 − 1 = 3, parts {{1/6 - 3/4 = 2/12 - 9/12 = -7/12}}, so the answer is {{3 - 7/12 = 2 5/12}}. Quicker, but watch the negative part.\n\n**Cancelling before multiplying** keeps numbers small: in {{14/15 * 25/28}}, 14 and 28 share 14, and 15 and 25 share 5, giving {{1/3 * 5/2 = 5/6}}. You may only cancel a numerator with a denominator.\n\n> Never use the common-denominator method for multiplying, and never add denominators when adding.",
      diagram: `<svg viewBox="0 0 380 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Area model for two thirds times four fifths. A rectangle is split into 5 columns and 3 rows. Four columns are shaded blue and two rows are shaded yellow; the 8 cells where they overlap are green, out of 15 cells in total."><rect x="0" y="0" width="380" height="240" fill="#ffffff"/><rect x="80" y="40" width="200" height="150" fill="#bae6fd"/><rect x="80" y="40" width="250" height="100" fill="#fde68a"/><rect x="80" y="40" width="200" height="100" fill="#bbf7d0"/><line x1="130" y1="40" x2="130" y2="190" stroke="#334155" stroke-width="1"/><line x1="180" y1="40" x2="180" y2="190" stroke="#334155" stroke-width="1"/><line x1="230" y1="40" x2="230" y2="190" stroke="#334155" stroke-width="1"/><line x1="280" y1="40" x2="280" y2="190" stroke="#334155" stroke-width="1"/><line x1="80" y1="90" x2="330" y2="90" stroke="#334155" stroke-width="1"/><line x1="80" y1="140" x2="330" y2="140" stroke="#334155" stroke-width="1"/><rect x="80" y="40" width="250" height="150" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="80" y1="28" x2="280" y2="28" stroke="#0369a1" stroke-width="1.5"/><line x1="80" y1="23" x2="80" y2="33" stroke="#0369a1" stroke-width="1.5"/><line x1="280" y1="23" x2="280" y2="33" stroke="#0369a1" stroke-width="1.5"/><text x="180" y="18" font-size="13" font-family="sans-serif" fill="#0369a1" text-anchor="middle" font-weight="bold">4/5 of the width</text><line x1="68" y1="40" x2="68" y2="140" stroke="#a16207" stroke-width="1.5"/><line x1="63" y1="40" x2="73" y2="40" stroke="#a16207" stroke-width="1.5"/><line x1="63" y1="140" x2="73" y2="140" stroke="#a16207" stroke-width="1.5"/><text x="58" y="86" font-size="13" font-family="sans-serif" fill="#a16207" text-anchor="end" font-weight="bold">2/3 of</text><text x="58" y="102" font-size="13" font-family="sans-serif" fill="#a16207" text-anchor="end" font-weight="bold">the height</text><text x="180" y="94" font-size="13" font-family="sans-serif" fill="#166534" text-anchor="middle" font-weight="bold">8 green cells</text><text x="190" y="222" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2/3 × 4/5 = 8/15 (8 cells out of 3 × 5 = 15)</text></svg>`,
      diagramCaption:
        "Multiplying fractions: the overlap of two thirds of the height and four fifths of the width is 8 of the 15 equal cells, so {{2/3 * 4/5 = 8/15}}. Numerators multiply to count the green cells; denominators multiply to count all the cells.",
      workedExamples: [
        {
          title: "Show that — dividing mixed numbers",
          problem: "Show that {{1 2/3 / 2 1/4 = 20/27}}.",
          steps: [
            "Convert to improper fractions: {{1 2/3 = 5/3}} and {{2 1/4 = 9/4}}.",
            "Dividing by {{9/4}} is the same as multiplying by its reciprocal {{4/9}}: {{5/3 / 9/4 = 5/3 * 4/9}}.",
            "Multiply: {{(5 * 4)/(3 * 9) = 20/27}}.",
            "20 and 27 have no common factor, so {{20/27}} is already in its simplest form — it matches the printed answer.",
          ],
          answer: "{{5/3 * 4/9 = 20/27}}",
          yourTurn: {
            question: "Your turn: work out {{1 3/4 / 2 1/3}}. Give your answer as a fraction in its simplest form.",
            answer: { type: "fraction", n: 3, d: 4, simplest: true },
            solution: "{{1 3/4 / 2 1/3 = 7/4 / 7/3 = 7/4 * 3/7 = 21/28 = 3/4}}. (Cancel the 7s first and it is simply {{3/4}}.)",
          },
        },
        {
          title: "Show that — subtracting mixed numbers",
          problem: "Show that {{3 1/4 - 1 5/6 = 1 5/12}}.",
          steps: [
            "Improper fractions: {{3 1/4 = 13/4}} and {{1 5/6 = 11/6}}.",
            "LCM of 4 and 6 is 12: {{13/4 = 39/12}} and {{11/6 = 22/12}}.",
            "Subtract numerators: {{39/12 - 22/12 = 17/12}}.",
            "Convert back: 17 = 12 + 5, so {{17/12 = 1 5/12}}.",
            "Check with the other route: wholes 3 − 1 = 2; parts {{1/4 - 5/6 = 3/12 - 10/12 = -7/12}}; {{2 - 7/12 = 1 5/12}}. ✓",
          ],
          answer: "{{39/12 - 22/12 = 17/12 = 1 5/12}}",
          yourTurn: {
            question: "Your turn: work out {{2 2/3 + 1 3/5}}. Give your answer as a mixed number in its simplest form.",
            answer: { type: "fraction", n: 64, d: 15, simplest: true, form: "mixed", display: "{{4 4/15}}" },
            solution: "{{8/3 + 8/5 = 40/15 + 24/15 = 64/15 = 4 4/15}}.",
          },
        },
      ],
      keyPoints: [
        "Change mixed numbers to improper fractions before multiplying or dividing — always.",
        "Add/subtract: common denominator first, then combine numerators only.",
        "Multiply: tops × tops, bottoms × bottoms; cancel a numerator against a denominator first to keep numbers small.",
        "Divide: keep the first fraction, change ÷ to ×, flip the second.",
        "In a \"show that\", write every stage — improper fractions, equivalent fractions, the result — and end with the printed answer.",
        "Estimate first: it catches mistakes like Priya's straight away.",
      ],
      whyItWorks:
        "**Why flip to divide?** Dividing by a number is multiplying by its reciprocal, because a number times its reciprocal is 1: {{9/4 * 4/9 = 1}}. So if {{5/3 / 9/4 = q}}, then {{q * 9/4 = 5/3}}; multiply both sides by {{4/9}} and you get {{q = 5/3 * 4/9}}.\n\n**Why a common denominator to add?** The denominator names the *size* of the piece. You can only count pieces together when they are the same size — thirds and quarters must both become twelfths first.\n\n**Why multiply straight across?** The area model shows it: {{a/b}} of the height times {{c/d}} of the width selects a × c cells out of b × d equal cells.",
      strategies: ["Estimate first", "Use the inverse (multiply by the reciprocal)", "Draw a diagram (area model)", "Check by substituting (convert your answer back)"],
      thinkDeeper:
        "Find two **different** fractions whose sum equals their product, for example {{3 + 3/2 = 3 * 3/2}}. Can you find a rule that generates as many such pairs as you like? (Hint: if {{a + b = ab}}, rearrange to make b the subject.)",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "recurring-decimals",
      heading: "Terminating & recurring decimals",
      discovery: {
        problem:
          "Without dividing, try to predict which of these will give a decimal that **stops** and which will go on forever:\n\n{{3/8}}, {{7/12}}, {{11/40}}, {{5/14}}, {{9/15}}\n\nNow check with a calculator. What do the denominators of the stopping ones have in common?",
        idea:
          "{{3/8}} = 0.375, {{11/40}} = 0.275 and {{9/15 = 3/5}} = 0.6 stop. {{7/12}} = 0.58333… and {{5/14}} = 0.3571428571428… go on forever.\n\nWrite the denominators (after simplifying) as products of primes: 8 = 2³, 40 = 2³ × 5, 5 = 5 — only 2s and 5s. But 12 = 2² × 3 and 14 = 2 × 7 contain other primes. Since 10 = 2 × 5, only denominators built from 2s and 5s can be scaled up to a power of 10.",
      },
      body:
        "A **terminating decimal** stops (0.375). A **recurring decimal** has a digit or block of digits that repeats for ever (0.58333…, 0.272727…). In print, dots are placed over the first and last digits of the repeating block: 0.272727… is written with dots over the 2 and the 7, and 0.58333… with a dot over the 3 only.\n\n**The terminating test.** Write the fraction in its **simplest form**, then find the prime factors of the denominator.\n\n- Only 2s and/or 5s → it terminates.\n- Any other prime (3, 7, 11, …) → it recurs.\n\n| Fraction | Simplest form | Denominator | Decimal |\n|---|---|---|---|\n| {{7/20}} | {{7/20}} | 2² × 5 | 0.35 (terminates) |\n| {{6/15}} | {{2/5}} | 5 | 0.4 (terminates) |\n| {{5/12}} | {{5/12}} | 2² × 3 | 0.41666… (recurs) |\n| {{4/11}} | {{4/11}} | 11 | 0.363636… (recurs) |\n\nNotice {{6/15}}: 15 contains a 3, but the 3 cancels. Always simplify first.\n\n**Converting a fraction to a decimal by division.** Divide the numerator by the denominator using short division, adding zeros after the decimal point. For {{4/11}}: 40 ÷ 11 = 3 r 7, 70 ÷ 11 = 6 r 4, 40 ÷ 11 = 3 r 7 … The remainder 4 has come back, so the digits 3, 6 repeat for ever: 0.363636…\n\n**Converting a recurring decimal to a fraction (the algebraic proof).** This is a favourite \"Prove algebraically\" question.\n\n1. Let x equal the decimal.\n2. Multiply by powers of 10 to get **two** numbers whose recurring tails are identical (line up the decimal points).\n3. Subtract — the infinite tails cancel exactly.\n4. Solve for x and simplify.\n\nFor 0.1272727…, the repeating block (27) starts one place after the point:\n\n    x = 0.1272727…\n    10x = 1.272727…\n    1000x = 127.272727…\n    1000x − 10x: 990x = 126\n    {{x = 126/990 = 7/55}}\n\n**Shortcut you can use to check (not as the proof):** a pure recurring block of length n sits over n nines — 0.272727… = {{27/99 = 3/11}}, 0.405405… = {{405/999 = 15/37}}.",
      diagram: `<svg viewBox="0 0 440 210" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Lining up decimals to prove 0.1272727 recurring equals 7 over 55. 1000x equals 127.272727 and 10x equals 1.272727; the identical recurring tails are highlighted and cancel when subtracted, leaving 990x equals 126."><rect x="0" y="0" width="440" height="210" fill="#ffffff"/><rect x="214" y="28" width="104" height="26" rx="4" fill="#fde68a"/><rect x="214" y="66" width="104" height="26" rx="4" fill="#fde68a"/><text x="110" y="47" font-size="15" font-family="monospace" fill="#1f2937" text-anchor="end">1000x</text><text x="122" y="47" font-size="15" font-family="monospace" fill="#1f2937" text-anchor="middle">=</text><text x="208" y="47" font-size="15" font-family="monospace" fill="#1f2937" text-anchor="end">127.</text><text x="218" y="47" font-size="15" font-family="monospace" fill="#1f2937">272727…</text><text x="110" y="85" font-size="15" font-family="monospace" fill="#1f2937" text-anchor="end">10x</text><text x="122" y="85" font-size="15" font-family="monospace" fill="#1f2937" text-anchor="middle">=</text><text x="208" y="85" font-size="15" font-family="monospace" fill="#1f2937" text-anchor="end">1.</text><text x="218" y="85" font-size="15" font-family="monospace" fill="#1f2937">272727…</text><text x="40" y="85" font-size="18" font-family="sans-serif" fill="#b91c1c" font-weight="bold">−</text><line x1="40" y1="102" x2="330" y2="102" stroke="#1f2937" stroke-width="1.5"/><text x="110" y="126" font-size="15" font-family="monospace" fill="#1f2937" text-anchor="end">990x</text><text x="122" y="126" font-size="15" font-family="monospace" fill="#1f2937" text-anchor="middle">=</text><text x="208" y="126" font-size="15" font-family="monospace" fill="#1f2937" text-anchor="end">126</text><text x="218" y="126" font-size="15" font-family="monospace" fill="#a16207">000000…</text><text x="328" y="66" font-size="12" font-family="sans-serif" fill="#a16207" font-weight="bold">identical tails</text><text x="328" y="82" font-size="12" font-family="sans-serif" fill="#a16207" font-weight="bold">cancel exactly</text><text x="40" y="166" font-size="14" font-family="sans-serif" fill="#1f2937">x = 126/990 = 7/55</text><text x="40" y="190" font-size="12" font-family="sans-serif" fill="#475569">Choose powers of 10 so the decimal points line up AND the tails match.</text></svg>`,
      diagramCaption:
        "Multiply by 1000 and by 10 so that both numbers have exactly the same infinite tail after the point. Subtracting removes the tail completely, leaving an ordinary equation.",
      workedExamples: [
        {
          title: "Pure recurring decimal",
          problem: "Prove algebraically that 0.454545… = {{5/11}}.",
          steps: [
            "Let x = 0.454545…",
            "The block 45 has length 2, so multiply by 100: 100x = 45.454545…",
            "Subtract: 100x − x = 45.4545… − 0.4545…, so 99x = 45.",
            "{{x = 45/99}}. Divide top and bottom by 9: {{x = 5/11}}.",
          ],
          answer: "99x = 45, so {{x = 45/99 = 5/11}}",
          yourTurn: {
            question: "Your turn: write 0.272727… as a fraction in its simplest form.",
            answer: { type: "fraction", n: 3, d: 11, simplest: true },
            solution: "x = 0.2727…, 100x = 27.2727…, so 99x = 27 and {{x = 27/99 = 3/11}}.",
          },
        },
        {
          title: "Delayed recurring decimal (Edexcel favourite)",
          problem: "Prove algebraically that 0.1272727… (dots over the 2 and the 7) = {{7/55}}.",
          steps: [
            "Let x = 0.1272727…",
            "The repeating block starts after one non-repeating digit. 10x = 1.272727… moves the point to the start of the block.",
            "The block has length 2, so go two more places: 1000x = 127.272727…",
            "Both tails are .272727…, so subtract: 1000x − 10x = 990x = 127.2727… − 1.2727… = 126.",
            "{{x = 126/990}}. Divide by 18: {{x = 7/55}}.",
          ],
          answer: "990x = 126, so {{x = 126/990 = 7/55}}",
          yourTurn: {
            question: "Your turn: write 0.27777… (a dot over the 7 only) as a fraction in its simplest form.",
            answer: { type: "fraction", n: 5, d: 18, simplest: true },
            solution: "x = 0.2777…, 10x = 2.777…, 100x = 27.777… Subtract: 90x = 25, so {{x = 25/90 = 5/18}}.",
          },
        },
      ],
      keyPoints: [
        "Simplify the fraction, then factorise the denominator: only 2s and 5s ⇒ terminating.",
        "Long or short division reveals recurring digits as soon as a remainder repeats.",
        "Proof method: let x = decimal, make two multiples of x with identical tails, subtract, solve, simplify.",
        "Pure recurring: multiply by {{10^n}} where n is the block length. Delayed recurring: two multipliers, e.g. 10x and 1000x.",
        "In a proof, write the recurring decimals with \"…\" (or enough digits) so the matching tails are visible.",
        "Every recurring decimal is a fraction, so it is rational.",
      ],
      whyItWorks:
        "**Why only 2s and 5s?** A terminating decimal is a whole number over a power of 10, like {{375/1000}}. Every power of 10 is {{2^n * 5^n}}, so the simplified denominator can contain only 2s and 5s. Conversely, if the denominator is {{2^a * 5^b}}, you can multiply top and bottom up to a power of 10.\n\n**Why must the digits recur otherwise?** When you divide by d, each remainder is one of 1, 2, …, d − 1. After at most d − 1 steps a remainder must repeat (pigeonhole principle), and from then on the division repeats exactly. So {{1/7}} has a block of at most 6 digits — in fact 142857.\n\n**Why does subtracting work?** Two numbers with the same infinite tail differ by a whole number (or terminating decimal), because every digit after the tail starts is identical.",
      strategies: ["Introduce a variable", "Look for an invariant (the matching tail)", "Find a pattern", "Check by substituting (divide your fraction back out)"],
      thinkDeeper:
        "Use the algebraic method on 0.999… What does it prove? Many people refuse to believe the result — write a short argument, using {{1/3}} = 0.333…, that convinces a sceptical friend.",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "percentage-change",
      heading: "Percentage change & multipliers",
      discovery: {
        problem:
          "A plate of chee cheong fun at a hawker centre goes up from $4.50 to $5.40.\n\nWei Ling says: \"It went up by 90 cents, so that's a 90% increase.\"\nRavi says: \"5.40 ÷ 4.50 = 1.2, so it's a 20% increase.\"\n\nWho is right, and what exactly does Ravi's 1.2 mean?",
        idea:
          "Ravi is right. A percentage change compares the change with the **original** amount: {{0.90/4.50 = 0.2}} = 20%. Wei Ling compared 90 cents with $1, not with $4.50.\n\nRavi's 1.2 is the **multiplier**: new = original × 1.2. The 1 keeps the original 100% and the 0.2 adds the extra 20%.",
      },
      body:
        "**Multipliers turn every percentage change into one multiplication.**\n\n| Change | Multiplier | Example |\n|---|---|---|\n| Increase by 20% | 1 + 0.20 = 1.2 | 450 × 1.2 = 540 |\n| Increase by 9% (GST) | 1.09 | 80 × 1.09 = 87.20 |\n| Increase by 2.5% | 1.025 | 3000 × 1.025 = 3075 |\n| Decrease by 15% | 1 − 0.15 = 0.85 | 600 × 0.85 = 510 |\n| Decrease by 3% | 0.97 | 250 × 0.97 = 242.50 |\n\nIn general: increase by r% → multiplier {{1 + r/100}}; decrease by r% → multiplier {{1 - r/100}}.\n\n**Percentage change** (increase, decrease, profit, loss):\n\n    {{\"percentage change\" = \"change\"/\"original\" * 100}}\n\nor find the multiplier {{\"new\"/\"original\"}} and read it: 1.2 is +20%, 0.92 is −8%, 2.5 is +150%.\n\n**Profit and loss.** Percentage profit = {{\"profit\"/\"cost price\" * 100}}. The comparison is always with what was paid (the original), never with the selling price.\n\n**One quantity as a percentage of another.** Make the units match first: 45 seconds as a percentage of 3 minutes is {{45/180 * 100 = 25}}%.\n\n**GST in Singapore** is 9%, so a price before GST is multiplied by 1.09 to get the price you pay. Edexcel papers use VAT (often 20%) in exactly the same way.\n\n> The multiplier method is not just faster — it is the only method that extends cleanly to reverse percentages and compound interest.",
      diagram: `<svg viewBox="0 0 440 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar model for a 20 percent increase. The original bar of 4.50 dollars is 100 percent. The new bar is the same length plus an extra 20 percent piece, making 120 percent or 5.40 dollars. Multiplying by 1.2 takes the old bar to the new one."><rect x="0" y="0" width="440" height="200" fill="#ffffff"/><text x="20" y="52" font-size="13" font-family="sans-serif" fill="#1f2937" font-weight="bold">Before</text><rect x="90" y="30" width="250" height="36" fill="#c7d2fe" stroke="#334155" stroke-width="1.5"/><text x="215" y="53" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$4.50 = 100%</text><text x="20" y="132" font-size="13" font-family="sans-serif" fill="#1f2937" font-weight="bold">After</text><rect x="90" y="110" width="250" height="36" fill="#c7d2fe" stroke="#334155" stroke-width="1.5"/><rect x="340" y="110" width="50" height="36" fill="#bbf7d0" stroke="#334155" stroke-width="1.5"/><text x="215" y="133" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$4.50 = 100%</text><text x="365" y="126" font-size="11" font-family="sans-serif" fill="#166534" text-anchor="middle" font-weight="bold">+20%</text><text x="365" y="140" font-size="11" font-family="sans-serif" fill="#166534" text-anchor="middle">$0.90</text><line x1="90" y1="160" x2="390" y2="160" stroke="#1f2937" stroke-width="1.2"/><line x1="90" y1="155" x2="90" y2="165" stroke="#1f2937" stroke-width="1.2"/><line x1="390" y1="155" x2="390" y2="165" stroke="#1f2937" stroke-width="1.2"/><text x="240" y="180" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">$5.40 = 120% = 1.2 × original</text><line x1="400" y1="62" x2="400" y2="104" stroke="#b91c1c" stroke-width="1.8"/><polygon points="395,100 405,100 400,109" fill="#b91c1c"/><text x="408" y="88" font-size="13" font-family="sans-serif" fill="#b91c1c" font-weight="bold">× 1.2</text></svg>`,
      diagramCaption:
        "A 20% increase keeps the whole original (100%) and adds 20% more, so the new amount is 120% of the original — multiply by 1.2. The 90-cent change is compared with the original $4.50, not with the new price.",
      workedExamples: [
        {
          title: "Adding GST with a multiplier",
          problem: "A laptop costs $1450 before GST. GST is charged at 9%. Work out the price including GST.",
          steps: [
            "An increase of 9% means the multiplier is 1 + 0.09 = 1.09.",
            "1450 × 1.09 = 1580.5.",
            "Money is written to 2 decimal places: $1580.50.",
            "Check: 9% of 1450 is 130.50, and 1450 + 130.50 = 1580.50. ✓",
          ],
          answer: "$1580.50",
          yourTurn: {
            question: "Your turn: a phone costs $820 before GST at 9%. Work out the price including GST, in dollars.",
            answer: { type: "number", value: 893.8, display: "$893.80" },
            solution: "820 × 1.09 = 893.80, so the price is $893.80.",
          },
        },
        {
          title: "Percentage profit (multi-step)",
          problem:
            "Arjun buys 40 durians for a total of $260. He sells 32 of them for $11 each and the rest for $5 each. Work out his percentage profit. Give your answer correct to 3 significant figures.",
          steps: [
            "Income: 32 × 11 = $352, plus (40 − 32) × 5 = 8 × 5 = $40. Total $392.",
            "Profit = 392 − 260 = $132.",
            "Percentage profit compares with the **cost**: {{132/260 * 100 = 50.769…}}%.",
            "Correct to 3 s.f.: 50.8%.",
            "Multiplier check: {{392/260 = 1.5077…}}, i.e. +50.8%. ✓",
          ],
          answer: "50.8%",
          yourTurn: {
            question: "Your turn: a car bought for $68 000 is sold for $57 800. Work out the percentage loss.",
            answer: { type: "number", value: 15, display: "15%" },
            solution: "Loss = 68 000 − 57 800 = 10 200. {{10200/68000 * 100 = 15}}%. (Or {{57800/68000 = 0.85}}, a 15% decrease.)",
          },
        },
      ],
      keyPoints: [
        "Increase by r%: × {{(1 + r/100)}}. Decrease by r%: × {{(1 - r/100)}}.",
        "Percentage change = change ÷ original × 100 — always divide by the original.",
        "Percentage profit/loss compares with the cost price.",
        "A multiplier above 1 is an increase; below 1 is a decrease. 0.92 means −8%, not −92%.",
        "Write money to 2 decimal places ($1580.50, not $1580.5).",
        "Match units before writing one quantity as a percentage of another.",
      ],
      whyItWorks:
        "Increasing x by 20% means x + 0.2x. Factorise: x + 0.2x = x(1 + 0.2) = 1.2x. Likewise a 15% decrease is x − 0.15x = x(1 − 0.15) = 0.85x. The multiplier is just the distributive law run backwards — which is why it works for every percentage and every amount.",
      strategies: ["Use a multiplier", "Use a bar model", "Estimate first", "Check by substituting"],
      thinkDeeper:
        "A price rises by 25%. By what percentage must the new price fall to return to the original? Now do the same for a rise of 50% and of 100%. Find a formula for the percentage fall needed after a rise of r%.",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "reverse-percentages",
      heading: "Reverse percentages",
      discovery: {
        problem:
          "In a sale everything is 20% off. Marcus pays $96 for a jacket. He says: \"The original price was $96 plus 20% of $96, which is $115.20.\"\n\nTest his answer: take 20% off $115.20. Do you get back to $96? If not, what went wrong?",
        idea:
          "20% off $115.20 gives 115.20 × 0.8 = $92.16 — not $96. Marcus found 20% of the **sale** price, but the 20% was taken off the **original** price.\n\n$96 is 80% of the original. So the original × 0.8 = 96, and dividing gives {{96/0.8 = 120}}. The original price was $120 — and 20% off $120 is indeed $96.",
      },
      body:
        "In a **reverse percentage** question you know the amount **after** a percentage change and need the amount **before** it. The giveaway words: *original price*, *before the increase*, *excluding GST*, *last year's value*.\n\nThe forward calculation is\n\n    original × multiplier = new\n\nso the reverse is\n\n    {{\"original\" = \"new\"/\"multiplier\"}}\n\n| Situation | New amount is | Divide by |\n|---|---|---|\n| After a 20% discount | 80% of the original | 0.8 |\n| Including 9% GST | 109% of the original | 1.09 |\n| After a 35% decrease | 65% of the original | 0.65 |\n| After a 12% increase | 112% of the original | 1.12 |\n\n**The bar-model / unitary method** does the same thing step by step: if 80% is $96, then 1% is $1.20 and 100% is $120. It is slower but makes the reasoning visible, which helps in written answers.\n\n**The trap Edexcel always sets:** finding the percentage of the *new* amount and adding or subtracting it. That treats the new amount as 100%, which it isn't.\n\n**Finding the amount of the change.** If the question asks \"how much GST was paid?\", find the original first, then subtract: new − original.",
      diagram: `<svg viewBox="0 0 440 190" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar model for a reverse percentage. A bar is split into ten equal blocks of 10 percent. Eight blocks make the sale price of 96 dollars, so each block is 12 dollars. Two more blocks were the discount. All ten blocks make the original price of 120 dollars."><rect x="0" y="0" width="440" height="190" fill="#ffffff"/><line x1="40" y1="34" x2="328" y2="34" stroke="#0369a1" stroke-width="1.5"/><line x1="40" y1="29" x2="40" y2="39" stroke="#0369a1" stroke-width="1.5"/><line x1="328" y1="29" x2="328" y2="39" stroke="#0369a1" stroke-width="1.5"/><text x="184" y="22" font-size="13" font-family="sans-serif" fill="#0369a1" text-anchor="middle" font-weight="bold">80% = $96 (sale price)</text><text x="364" y="30" font-size="12" font-family="sans-serif" fill="#b91c1c" text-anchor="middle" font-weight="bold">20% off</text><rect x="40" y="50" width="36" height="40" fill="#bae6fd" stroke="#334155"/><rect x="76" y="50" width="36" height="40" fill="#bae6fd" stroke="#334155"/><rect x="112" y="50" width="36" height="40" fill="#bae6fd" stroke="#334155"/><rect x="148" y="50" width="36" height="40" fill="#bae6fd" stroke="#334155"/><rect x="184" y="50" width="36" height="40" fill="#bae6fd" stroke="#334155"/><rect x="220" y="50" width="36" height="40" fill="#bae6fd" stroke="#334155"/><rect x="256" y="50" width="36" height="40" fill="#bae6fd" stroke="#334155"/><rect x="292" y="50" width="36" height="40" fill="#bae6fd" stroke="#334155"/><rect x="328" y="50" width="36" height="40" fill="#fecaca" stroke="#334155" stroke-dasharray="4 2"/><rect x="364" y="50" width="36" height="40" fill="#fecaca" stroke="#334155" stroke-dasharray="4 2"/><text x="58" y="75" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$12</text><text x="94" y="75" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$12</text><text x="130" y="75" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$12</text><text x="166" y="75" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$12</text><text x="202" y="75" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$12</text><text x="238" y="75" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$12</text><text x="274" y="75" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$12</text><text x="310" y="75" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$12</text><text x="346" y="75" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$12</text><text x="382" y="75" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">$12</text><line x1="40" y1="106" x2="400" y2="106" stroke="#1f2937" stroke-width="1.5"/><line x1="40" y1="101" x2="40" y2="111" stroke="#1f2937" stroke-width="1.5"/><line x1="400" y1="101" x2="400" y2="111" stroke="#1f2937" stroke-width="1.5"/><text x="220" y="128" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-weight="bold">100% = 10 × $12 = $120 (original price)</text><text x="220" y="158" font-size="12" font-family="sans-serif" fill="#475569" text-anchor="middle">Each block is 10%: 96 ÷ 8 = 12. Or in one step: 96 ÷ 0.8 = 120.</text></svg>`,
      diagramCaption:
        "The sale price is 8 of the 10 blocks, so each 10% block is $12 and the full original price is $120. Dividing by the multiplier 0.8 does all of this in one step.",
      workedExamples: [
        {
          title: "Removing GST",
          problem: "Including GST at 9%, a restaurant bill is $65.40. Work out how much GST was paid.",
          steps: [
            "The bill is 109% of the price before GST, so the multiplier is 1.09.",
            "Price before GST = {{65.40/1.09 = 60}}, i.e. $60.",
            "GST paid = 65.40 − 60 = $5.40.",
            "Trap check: 9% of 65.40 is $5.886 — the wrong answer, because 65.40 is not the 100% amount.",
          ],
          answer: "$5.40",
          yourTurn: {
            question: "Your turn: a meal costs $47.96 including GST at 9%. Work out the price before GST, in dollars.",
            answer: { type: "number", value: 44, display: "$44" },
            solution: "{{47.96/1.09 = 44}}, so the price before GST was $44. Check: 44 × 1.09 = 47.96. ✓",
          },
        },
        {
          title: "Reverse percentage after an increase",
          problem: "The value of an HDB flat increased by 12% to $694 400. Work out its value before the increase.",
          steps: [
            "New value = original × 1.12.",
            "Original = {{694400/1.12 = 620000}}.",
            "Check: 620 000 × 1.12 = 694 400. ✓",
          ],
          answer: "$620 000",
          yourTurn: {
            question: "Your turn: after a 35% decrease, a population of birds is 1105. How many birds were there before the decrease?",
            answer: { type: "number", value: 1700 },
            solution: "After a 35% decrease, 65% remain, so the multiplier is 0.65. {{1105/0.65 = 1700}} birds.",
          },
        },
      ],
      keyPoints: [
        "Spot the clue: you are given the amount AFTER the change and asked for the amount BEFORE.",
        "Original = new ÷ multiplier.",
        "Never take the percentage of the new amount — the new amount is not 100%.",
        "To find the size of the increase/discount/tax, find the original first, then subtract.",
        "Always check by going forwards: original × multiplier should give the new amount.",
      ],
      whyItWorks:
        "Every percentage change is a multiplication, original × m = new. Division undoes multiplication, so original = new ÷ m. The trap fails because percentages of different amounts are different sizes: 20% of $120 is $24, but 20% of $96 is only $19.20.",
      strategies: ["Use the inverse (work backwards)", "Use a bar model", "Check by substituting (go forwards again)"],
      thinkDeeper:
        "A shop marks up its cost price by 40% to set the selling price, then later offers \"30% off\". Is it now selling at a profit or a loss, and by what percentage of the cost price? What discount would exactly cancel a 40% mark-up?",
    },
    // ------------------------------------------------------------------ 5
    {
      id: "compound-growth",
      heading: "Compound interest, depreciation & repeated change",
      discovery: {
        problem:
          "Siti has $1000 to put in the bank for 10 years.\n\n- **Plan A (simple interest):** 5% of the original $1000 is added each year.\n- **Plan B (compound interest):** 5% of whatever is in the account is added each year.\n\nWork out the first two or three years of each by hand. Which plan wins after 10 years, and by how much? Can you find Plan B's total with **one** calculation?",
        idea:
          "Plan A adds $50 every year: 1000 + 10 × 50 = $1500.\n\nPlan B adds 5% of a growing amount — interest earns interest. Each year multiplies by 1.05, so after 10 years:\n\n    {{1000 * 1.05^10 = 1628.89}} (to the nearest cent)\n\nPlan B wins by $128.89, and the gap keeps widening the longer you wait.",
      },
      body:
        "**Compound change** applies the same percentage to the **current** amount again and again. Each step multiplies by the same multiplier, so n steps multiply by the multiplier n times:\n\n    {{A = P * (1 + r/100)^n}} (growth: compound interest, population growth)\n    {{A = P * (1 - r/100)^n}} (decay: depreciation, a shrinking population)\n\nwhere P is the starting amount, r the percentage rate per period and n the number of periods.\n\n**Simple versus compound.**\n\n| | Simple interest | Compound interest |\n|---|---|---|\n| Interest each year | % of the **original** amount | % of the **current** amount |\n| Pattern | Adds the same amount each year (linear) | Multiplies by the same amount each year (exponential) |\n| $1000 at 5% for 3 years | 1000 + 3 × 50 = $1150 | {{1000 * 1.05^3}} = $1157.63 |\n\n**Repeated *different* changes.** Multiply the multipliers. A price rises 20% and then falls 25%: 1.2 × 0.75 = 0.9, so overall it has **decreased by 10%** — not \"−5%\". Percentages of different amounts cannot simply be added.\n\n**Finding the overall percentage change** over several years: work out the overall multiplier, e.g. {{1.04^5 = 1.2167}}, so +21.7% over 5 years (not 5 × 4% = 20%).\n\n**Finding the number of years.** Questions like \"after how many whole years will the value first fall below $6000?\" are solved by trying values of n (trial and improvement) — show the values either side of the target:\n\n    {{18000 * 0.8^4 = 7372.80}} (still above 6000)\n    {{18000 * 0.8^5 = 5898.24}} (below 6000) → 5 years\n\n**Reverse compound.** If the value after n years is known, divide by the multiplier to the power n: {{P = A/(1.05^n)}}.\n\n> Edexcel favourites: depreciation of a car, interest on savings over n years, a population that grows by r% a year, and \"show that the overall change is …%\".",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of the value of 1000 dollars over 10 years at 5 percent. Simple interest is a straight line rising from 1000 to 1500. Compound interest is a curve rising from 1000 to about 1629, pulling further above the straight line each year."><rect x="0" y="0" width="480" height="320" fill="#ffffff"/><line x1="50" y1="204.3" x2="440" y2="204.3" stroke="#e5e7eb"/><line x1="50" y1="138.6" x2="440" y2="138.6" stroke="#e5e7eb"/><line x1="50" y1="72.9" x2="440" y2="72.9" stroke="#e5e7eb"/><line x1="126" y1="40" x2="126" y2="270" stroke="#e5e7eb"/><line x1="202" y1="40" x2="202" y2="270" stroke="#e5e7eb"/><line x1="278" y1="40" x2="278" y2="270" stroke="#e5e7eb"/><line x1="354" y1="40" x2="354" y2="270" stroke="#e5e7eb"/><line x1="430" y1="40" x2="430" y2="270" stroke="#e5e7eb"/><line x1="50" y1="270" x2="445" y2="270" stroke="#334155" stroke-width="1.5"/><line x1="50" y1="270" x2="50" y2="35" stroke="#334155" stroke-width="1.5"/><text x="44" y="274" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">1000</text><text x="44" y="208" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">1200</text><text x="44" y="142" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">1400</text><text x="44" y="77" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">1600</text><text x="50" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">0</text><text x="126" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2</text><text x="202" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">4</text><text x="278" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">6</text><text x="354" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">8</text><text x="430" y="286" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="middle">10</text><text x="245" y="308" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Years</text><text x="14" y="28" font-size="12" font-family="sans-serif" fill="#1f2937">Value ($)</text><polyline points="50,270 88,253.6 126,237.1 164,220.7 202,204.3 240,187.9 278,171.4 316,155 354,138.6 392,122.1 430,105.7" fill="none" stroke="#2563eb" stroke-width="2.4"/><polyline points="50,270 88,253.6 126,236.3 164,218.2 202,199.2 240,179.2 278,158.3 316,136.2 354,113.1 392,88.8 430,63.4" fill="none" stroke="#dc2626" stroke-width="2.4"/><circle cx="430" cy="105.7" r="3.5" fill="#2563eb"/><circle cx="430" cy="63.4" r="3.5" fill="#dc2626"/><line x1="430" y1="67" x2="430" y2="102" stroke="#64748b" stroke-dasharray="3 3"/><text x="300" y="56" font-size="12" font-family="sans-serif" fill="#dc2626" font-weight="bold">Compound: 1000 × 1.05ⁿ</text><text x="300" y="196" font-size="12" font-family="sans-serif" fill="#2563eb" font-weight="bold">Simple: 1000 + 50n</text><text x="424" y="50" font-size="11" font-family="sans-serif" fill="#dc2626" text-anchor="end">$1628.89</text><text x="424" y="122" font-size="11" font-family="sans-serif" fill="#2563eb" text-anchor="end">$1500</text></svg>`,
      diagramCaption:
        "$1000 at 5% a year. Simple interest grows by the same $50 each year (a straight line). Compound interest grows by 5% of the current amount, so each step is a little bigger than the last (a curve) — $1628.89 after 10 years.",
      workedExamples: [
        {
          title: "Depreciation",
          problem: "Kenji buys a car for $96 000. Its value depreciates by 15% each year. Work out its value after 4 years. Give your answer to the nearest dollar.",
          steps: [
            "Depreciation is a decrease, so the multiplier is 1 − 0.15 = 0.85.",
            "Four years means multiplying by 0.85 four times: {{96000 * 0.85^4}}.",
            "{{0.85^4 = 0.52200625}}, so the value is 96 000 × 0.52200625 = 50 112.60.",
            "To the nearest dollar: $50 113.",
            "Trap: 4 × 15% = 60% off gives $38 400 — that is simple, not compound, depreciation.",
          ],
          answer: "$50 113",
          yourTurn: {
            question: "Your turn: Hana invests $5000 at 3.2% compound interest per year. Work out the value of her investment after 6 years. Give your answer to the nearest cent.",
            answer: { type: "number", value: 6040.16, tolerance: 0.006, display: "$6040.16" },
            solution: "{{5000 * 1.032^6 = 6040.156…}}, so $6040.16 to the nearest cent.",
          },
        },
        {
          title: "Finding the number of years",
          problem: "A town has a population of 2400. The population increases by 8% each year. After how many whole years will the population first be more than 4000?",
          steps: [
            "Population after n years = {{2400 * 1.08^n}}.",
            "Try values: n = 6 gives {{2400 * 1.08^6 = 3808.5}} (not yet above 4000).",
            "n = 7 gives {{2400 * 1.08^7 = 4113.2}} (above 4000).",
            "So the population first exceeds 4000 after 7 years. Show both trials — they are the evidence.",
          ],
          answer: "7 years",
          yourTurn: {
            question: "Your turn: a machine worth $18 000 depreciates by 20% each year. After how many whole years will its value first be less than $6000?",
            answer: { type: "number", value: 5 },
            solution: "{{18000 * 0.8^4 = 7372.80}} (above $6000); {{18000 * 0.8^5 = 5898.24}} (below). So 5 years.",
          },
        },
      ],
      keyPoints: [
        "Compound: {{A = P * m^n}} with m = {{1 + r/100}} (growth) or {{1 - r/100}} (depreciation).",
        "Simple interest adds the same amount each year; compound multiplies by the same factor each year.",
        "Repeated different changes: multiply the multipliers, then read off the overall change.",
        "Percentage changes cannot be added: +20% then −20% is a 4% decrease (1.2 × 0.8 = 0.96).",
        "To find n, try values and show the ones either side of the target.",
        "Reverse compound: divide by {{m^n}}.",
      ],
      whyItWorks:
        "After one year the amount is P × m. The second year applies the same change to *that*: (P × m) × m = {{P * m^2}}. Each further year multiplies by m again, so after n years the amount is {{P * m^n}}. Simple interest instead adds the same fixed amount (r% of P) each year, so it gives {{P + n * (r/100) * P}} — a linear rule, not a power.",
      strategies: ["Use a multiplier", "Try small cases (year by year), then find a pattern", "Work backwards (reverse compound)", "Split into cases (try n either side of the target)"],
      thinkDeeper:
        "At 10% compound interest, roughly how long does money take to double? At 5%? At 2%? Bankers use the **rule of 72**: doubling time ≈ 72 ÷ rate. Test the rule with your calculator — for which rates is it most accurate?",
    },
    // ------------------------------------------------------------------ 6
    {
      id: "algebraic-fractions",
      heading: "Algebraic fractions",
      discovery: {
        problem:
          "Mei simplifies {{(x + 6)/(x + 3)}} by \"cancelling the 3s\" and gets 2.\n\nTest her claim: substitute x = 1 into {{(x + 6)/(x + 3)}}. Then do the same for {{((x - 3)(x + 3))/((x + 2)(x + 3))}} and {{(x - 3)/(x + 2)}}. Which pair really is equal, and what is the difference between the two situations?",
        idea:
          "With x = 1: {{(1 + 6)/(1 + 3) = 7/4}}, not 2, so Mei is wrong. But {{((-2)(4))/((3)(4)) = -8/12 = -2/3}} and {{(-2)/3 = -2/3}} — those two are equal.\n\nYou can cancel **factors** (things multiplied together) because {{(A * B)/(C * B) = A/C}}. You can never cancel **terms** (things added), because {{(x + 6)/(x + 3)}} is not a product.",
      },
      body:
        "Algebraic fractions follow exactly the same rules as number fractions. The new skill is **factorising first** so you can see what really cancels.\n\n**1. Simplifying.** Factorise the numerator and the denominator fully, then cancel common *factors*.\n\n    {{(x^2 - 9)/(x^2 + 5x + 6) = ((x - 3)(x + 3))/((x + 2)(x + 3)) = (x - 3)/(x + 2)}}\n\nUseful factorising tools: common factor, difference of two squares {{a^2 - b^2 = (a - b)(a + b)}}, quadratics {{x^2 + bx + c}} and {{ax^2 + bx + c}}. Watch for factors that differ only by sign: {{(3 - x) = -(x - 3)}}, so {{(3 - x)/(x - 3) = -1}}.\n\n**2. Multiplying and dividing.** Factorise everything, flip the second fraction if dividing, then cancel and multiply.\n\n    {{(x^2 - 4)/(3x) / (x + 2)/(6x^2) = ((x - 2)(x + 2))/(3x) * (6x^2)/(x + 2) = 2x(x - 2)}}\n\n**3. Adding and subtracting.** Use a common denominator — the product of the denominators, or their LCM if they share a factor. Multiply each numerator by whatever its denominator was multiplied by.\n\n    {{3/(x + 2) - 2/(x - 1) = (3(x - 1) - 2(x + 2))/((x + 2)(x - 1)) = (x - 7)/((x + 2)(x - 1))}}\n\nKeep the second numerator in **brackets** when subtracting: −2(x + 2) = −2x − 4, not −2x + 4. Leave the denominator factorised — it is simpler and lets you check for cancelling.\n\n**4. Where this leads.** In the equations chapter you will solve equations such as {{3/(x + 2) - 2/(x - 1) = 1}} by first combining the fractions exactly like this, then multiplying both sides by the denominator.",
      diagram: `<svg viewBox="0 0 460 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cancelling factors versus terms. Top: the fraction with numerator (x minus 3)(x plus 3) and denominator (x plus 2)(x plus 3); the matching (x plus 3) blocks are crossed out, leaving (x minus 3) over (x plus 2). Bottom: (x plus 6) over (x plus 3) cannot be cancelled because the 6 and the 3 are terms, not factors."><rect x="0" y="0" width="460" height="220" fill="#ffffff"/><rect x="40" y="18" width="70" height="32" rx="5" fill="#c7d2fe" stroke="#334155"/><text x="75" y="39" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x − 3</text><rect x="118" y="18" width="70" height="32" rx="5" fill="#bbf7d0" stroke="#334155"/><text x="153" y="39" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x + 3</text><line x1="34" y1="60" x2="194" y2="60" stroke="#1f2937" stroke-width="2"/><rect x="40" y="70" width="70" height="32" rx="5" fill="#fde68a" stroke="#334155"/><text x="75" y="91" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x + 2</text><rect x="118" y="70" width="70" height="32" rx="5" fill="#bbf7d0" stroke="#334155"/><text x="153" y="91" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x + 3</text><line x1="120" y1="48" x2="186" y2="20" stroke="#b91c1c" stroke-width="2.5"/><line x1="120" y1="100" x2="186" y2="72" stroke="#b91c1c" stroke-width="2.5"/><text x="222" y="66" font-size="20" font-family="sans-serif" fill="#1f2937" text-anchor="middle">=</text><rect x="252" y="18" width="70" height="32" rx="5" fill="#c7d2fe" stroke="#334155"/><text x="287" y="39" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x − 3</text><line x1="246" y1="60" x2="328" y2="60" stroke="#1f2937" stroke-width="2"/><rect x="252" y="70" width="70" height="32" rx="5" fill="#fde68a" stroke="#334155"/><text x="287" y="91" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x + 2</text><text x="342" y="56" font-size="12" font-family="sans-serif" fill="#166534" font-weight="bold">common FACTOR</text><text x="342" y="72" font-size="12" font-family="sans-serif" fill="#166534" font-weight="bold">cancels ✓</text><text x="75" y="152" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x + 6</text><line x1="40" y1="162" x2="110" y2="162" stroke="#1f2937" stroke-width="2"/><text x="75" y="184" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle">x + 3</text><text x="140" y="160" font-size="14" font-family="sans-serif" fill="#b91c1c" font-weight="bold">≠ 2</text><text x="190" y="152" font-size="12" font-family="sans-serif" fill="#b91c1c">6 and 3 are TERMS (added), not factors.</text><text x="190" y="170" font-size="12" font-family="sans-serif" fill="#b91c1c">Nothing multiplies the whole top and bottom,</text><text x="190" y="188" font-size="12" font-family="sans-serif" fill="#b91c1c">so nothing cancels. (x = 1 gives 7/4.)</text></svg>`,
      diagramCaption:
        "Factorise first, then cancel whole blocks that multiply both the numerator and the denominator. A number inside a bracket is a term, and terms never cancel.",
      workedExamples: [
        {
          title: "Simplify fully by factorising",
          problem: "Simplify fully {{(2x^2 + 5x - 3)/(4x^2 - 1)}}.",
          steps: [
            "Numerator: 2x² + 5x − 3. Find two numbers with product 2 × (−3) = −6 and sum 5: 6 and −1. So 2x² + 6x − x − 3 = 2x(x + 3) − 1(x + 3) = (2x − 1)(x + 3).",
            "Denominator: difference of two squares, {{4x^2 - 1 = (2x - 1)(2x + 1)}}.",
            "{{((2x - 1)(x + 3))/((2x - 1)(2x + 1))}}: cancel the common factor (2x − 1).",
            "Check with x = 1: original {{(2 + 5 - 3)/(4 - 1) = 4/3}}; answer {{(1 + 3)/(2 + 1) = 4/3}}. ✓",
          ],
          answer: "{{(x + 3)/(2x + 1)}}",
          yourTurn: {
            question: "Your turn: simplify fully {{(x^2 + 2x - 15)/(x^2 - 9)}}.",
            answer: { type: "expression", expr: "(x+5)/(x+3)", form: "simplified", display: "{{(x + 5)/(x + 3)}}" },
            solution: "{{((x + 5)(x - 3))/((x - 3)(x + 3)) = (x + 5)/(x + 3)}}.",
          },
        },
        {
          title: "Subtracting algebraic fractions",
          problem: "Write {{3/(x + 2) - 2/(x - 1)}} as a single fraction in its simplest form.",
          steps: [
            "Common denominator: (x + 2)(x − 1).",
            "{{3/(x + 2) = (3(x - 1))/((x + 2)(x - 1))}} and {{2/(x - 1) = (2(x + 2))/((x + 2)(x - 1))}}.",
            "Subtract the numerators, keeping brackets: 3(x − 1) − 2(x + 2) = 3x − 3 − 2x − 4 = x − 7.",
            "x − 7 shares no factor with the denominator, so this is fully simplified.",
          ],
          answer: "{{(x - 7)/((x + 2)(x - 1))}}",
          yourTurn: {
            question: "Your turn: write {{2/(x + 3) + 5/(x - 2)}} as a single fraction in its simplest form.",
            answer: { type: "expression", expr: "(7x+11)/((x+3)(x-2))", form: "simplified", display: "{{(7x + 11)/((x + 3)(x - 2))}}" },
            solution: "{{(2(x - 2) + 5(x + 3))/((x + 3)(x - 2)) = (2x - 4 + 5x + 15)/((x + 3)(x - 2)) = (7x + 11)/((x + 3)(x - 2))}}.",
          },
        },
      ],
      keyPoints: [
        "Factorise top and bottom fully before cancelling anything.",
        "Cancel factors (multiplied), never terms (added).",
        "Divide: flip the second fraction, then factorise and cancel.",
        "Add/subtract: common denominator, then combine numerators — bracket the second numerator when subtracting.",
        "Leave denominators factorised; check whether the final numerator shares a factor with them.",
        "Check by substituting a value such as x = 1 or x = 2 into the original and your answer.",
      ],
      whyItWorks:
        "An algebraic fraction is just a number fraction whose value depends on x. Cancelling uses {{(A * B)/(C * B) = A/C}}: dividing top and bottom by the same non-zero quantity B leaves the value unchanged. That only works when B multiplies the **whole** numerator and the **whole** denominator — which is exactly what factorising reveals. Adding needs a common denominator for the same reason as with numbers: only like-sized pieces can be counted together.",
      strategies: ["Factorise first", "Check by substituting", "Find a common denominator", "Make it simpler (try the same question with numbers)"],
      thinkDeeper:
        "Show that {{1/n - 1/(n + 1) = 1/(n(n + 1))}}. Use it to find the exact value of {{1/(1 * 2) + 1/(2 * 3) + 1/(3 * 4) + … + 1/(99 * 100)}} without adding 99 fractions.",
    },
  ],
  learn: {
    flashcards: [
      { front: "How do you divide by a fraction?", back: "Multiply by its reciprocal: {{a/b / c/d = a/b * d/c}} (keep, change, flip)." },
      { front: "First step for any × or ÷ with mixed numbers?", back: "Convert to improper fractions, e.g. {{2 3/4 = 11/4}}." },
      { front: "What must a \"show that\" fraction answer include?", back: "Improper fractions, equivalent fractions over the common denominator (or the reciprocal step), and a final line equal to the printed answer." },
      { front: "When does a fraction give a terminating decimal?", back: "When, in its simplest form, the denominator's only prime factors are 2 and 5." },
      { front: "Does {{9/15}} terminate?", back: "Yes. It simplifies to {{3/5}} = 0.6 — always simplify before testing the denominator." },
      { front: "Method to write 0.363636… as a fraction?", back: "x = 0.3636…, 100x = 36.3636…, 99x = 36, {{x = 36/99 = 4/11}}." },
      { front: "Which multiples of x for 0.1272727…?", back: "10x = 1.2727… and 1000x = 127.2727… (identical tails). 990x = 126, so {{x = 7/55}}." },
      { front: "Multiplier for a 7% increase? A 7% decrease?", back: "1.07 and 0.93." },
      { front: "Formula for percentage change?", back: "{{\"change\"/\"original\" * 100}} — always divide by the original." },
      { front: "A price including 9% GST is P. Price before GST?", back: "{{P/1.09}}." },
      { front: "After a 30% discount the price is $56. Original?", back: "{{56/0.7 = 80}}, so $80 (not 56 × 1.3 = $72.80)." },
      { front: "Compound interest formula?", back: "{{A = P(1 + r/100)^n}}." },
      { front: "Depreciation formula?", back: "{{A = P(1 - r/100)^n}}." },
      { front: "Up 10% then down 10% — overall?", back: "1.1 × 0.9 = 0.99, a 1% decrease." },
      { front: "Simple vs compound interest?", back: "Simple: r% of the original each year (adds a fixed amount). Compound: r% of the current amount (multiplies by a fixed factor)." },
      { front: "Can you cancel in {{(x + 5)/(x + 10)}}?", back: "No — 5 and 10 are terms, not factors. Only common factors cancel." },
      { front: "Simplify {{(x^2 - 16)/(x + 4)}}.", back: "{{((x - 4)(x + 4))/(x + 4) = x - 4}}." },
      { front: "Common denominator for {{1/(x + 1) + 1/(x - 3)}}?", back: "(x + 1)(x − 3); the answer is {{(2x - 2)/((x + 1)(x - 3))}}." },
    ],
    mustKnow: [
      "Can I 'show how' to use the four operations with fractions, including mixed numbers, without a calculator?",
      "Can I fully simplify an algebraic fraction by finding common factors?",
      "Can I fully simplify an algebraic fraction by factorising first (quadratics, difference of two squares)?",
      "Can I multiply and divide algebraic fractions and fully simplify the result?",
      "Can I add and subtract algebraic fractions and fully simplify the result?",
      "Can I identify which fractions give terminating and which give recurring decimals?",
      "Can I convert fractions to decimals by division?",
      "Can I prove that a recurring decimal and a fraction are equivalent using algebra (including ones like 0.1272727…)?",
      "Can I increase or decrease an amount by a percentage, with or without a multiplier?",
      "Can I work out a percentage change, including percentage profit and loss?",
      "Can I solve reverse percentage problems to find the original amount?",
      "Can I calculate compound interest and depreciation, and compare with simple interest?",
      "Can I use repeated percentage change, including different percentages in succession?",
      "Can I find the number of years needed to reach a target value by trying values of n?",
    ],
    misconceptions: [
      {
        wrong: "{{2 1/3 * 1 4/5}} = (2 × 1) + ({{1/3 * 4/5}}) = {{2 4/15}}.",
        right: "Convert to improper fractions first: {{7/3 * 9/5 = 21/5 = 4 1/5}}. Multiplying the parts separately misses the cross terms.",
      },
      {
        wrong: "{{9/15}} recurs because 15 has a factor of 3.",
        right: "Simplify first: {{9/15 = 3/5}} = 0.6, which terminates. The test applies only to the simplest form.",
      },
      {
        wrong: "0.333… is only approximately {{1/3}}.",
        right: "It is exactly {{1/3}}: x = 0.333…, 10x = 3.333…, 9x = 3, {{x = 1/3}}. A recurring decimal is an exact value.",
      },
      {
        wrong: "A rise from $40 to $50 and a fall from $50 to $40 are both 25% changes.",
        right: "The rise is {{10/40}} = 25%, but the fall is {{10/50}} = 20%. Percentage change always divides by the original amount.",
      },
      {
        wrong: "After 20% off the price is $96, so the original is 96 × 1.2 = $115.20.",
        right: "$96 is 80% of the original, so the original is {{96/0.8}} = $120. The 20% was of the original, not of $96.",
      },
      {
        wrong: "+20% then −20% brings a price back to where it started.",
        right: "1.2 × 0.8 = 0.96, an overall 4% decrease. The second 20% is taken from a bigger amount.",
      },
      {
        wrong: "15% depreciation for 4 years is 60% off.",
        right: "Each year's 15% is taken from a smaller value: {{0.85^4 = 0.522}}, so the value falls by about 47.8%, not 60%.",
      },
      {
        wrong: "{{(x + 6)/(x + 3) = 2}} (cancelling the 3s).",
        right: "Only common factors cancel. x + 6 and x + 3 share no factor, so the fraction does not simplify.",
      },
    ],
    examMistakes: [
      "In a \"show that\" fraction question, writing only the final answer (or a calculator decimal) — the method marks need the improper fractions and the common denominator or reciprocal step written out.",
      "In a recurring-decimal proof, choosing multiples whose tails don't match (e.g. 10x and 100x for 0.1272727…) or not showing the subtraction — \"Prove algebraically\" needs the two equations and 990x = 126 visible.",
      "Dividing by the new amount instead of the original when finding a percentage change or percentage profit.",
      "Reverse percentage: finding the percentage of the given (new) amount and adding or subtracting it.",
      "Using simple interest (n × r%) when the question says compound interest, or giving the interest earned when the question asks for the total value (or vice versa).",
      "Algebraic fractions: losing the bracket when subtracting the second numerator (−2(x + 2) written as −2x + 4), or cancelling terms instead of factors.",
    ],
    mnemonics: [
      {
        topic: "Dividing fractions",
        device: "Keep, Change, Flip (KCF)",
        explanation: "Keep the first fraction, change ÷ to ×, flip the second fraction to its reciprocal. Then multiply.",
      },
      {
        topic: "Percentage change",
        device: "\"Difference over Original, times 100\" — the DO rule",
        explanation: "Percentage change = difference ÷ original × 100. Do divide by the Original, never by the new value.",
      },
      {
        topic: "Reverse percentages",
        device: "Forwards: multiply. Backwards: divide.",
        explanation: "Original × multiplier = new, so to go back to the original you divide the new amount by the multiplier.",
      },
    ],
    realWorld: [
      {
        title: "GST on every receipt",
        detail: "Singapore's 9% GST means shelf prices are often shown before or after tax. Shops, accountants and the tax authority constantly convert between them with × 1.09 and ÷ 1.09.",
        emoji: "🧾",
      },
      {
        title: "Savings, loans and CPF",
        detail: "Bank deposits, student loans, mortgages on HDB flats and CPF accounts all grow by compound interest. A small difference in the rate becomes a large difference over 25 years.",
        emoji: "🏦",
      },
      {
        title: "Car depreciation and COE",
        detail: "A new car in Singapore loses value every year. Dealers and insurers use depreciation multipliers to estimate a car's value, and comparing those with its COE and resale price is a real reverse-percentage problem.",
        emoji: "🚗",
      },
      {
        title: "Inflation and price headlines",
        detail: "News reports say prices rose \"3% this year\" — a multiplier of 1.03. Economists chain yearly multipliers to compare what $100 bought a decade ago with today, and use reverse percentages to strip inflation out of wage rises.",
        emoji: "📈",
      },
    ],
    videos: [
      {
        title: "Fractions: four operations with mixed numbers",
        channel: "Corbettmaths",
        url: "https://www.youtube.com/results?search_query=corbettmaths+mixed+numbers+multiplying+dividing",
      },
      {
        title: "Recurring decimals to fractions (algebraic proof)",
        channel: "Maths Genie",
        url: "https://www.youtube.com/results?search_query=maths+genie+recurring+decimals+to+fractions",
      },
      {
        title: "Reverse percentages and compound interest",
        channel: "Cognito",
        url: "https://www.youtube.com/results?search_query=cognito+reverse+percentages+compound+interest",
      },
      {
        title: "Algebraic fractions: simplifying, adding and subtracting",
        channel: "ExamSolutions",
        url: "https://www.youtube.com/results?search_query=examsolutions+algebraic+fractions+gcse",
      },
    ],
    formulas: [
      { name: "Dividing fractions", formula: "{{a/b / c/d = a/b * d/c = (ad)/(bc)}}", note: "Learn this — not given" },
      { name: "Adding fractions", formula: "{{a/b + c/d = (ad + bc)/(bd)}}", note: "Learn this — not given" },
      { name: "Terminating decimal test", formula: "Simplest form {{a/b}} terminates ⇔ b = {{2^m * 5^n}}", note: "Learn this — not given" },
      { name: "Pure recurring block of length n", formula: "Block of n digits ÷ n nines, e.g. 0.272727… = {{27/99}} and 0.405405… = {{405/999}}", note: "Learn this — not given (use only as a check; a proof needs the algebra)" },
      { name: "Percentage multipliers", formula: "Increase by r%: × {{(1 + r/100)}}; decrease by r%: × {{(1 - r/100)}}", note: "Learn this — not given" },
      { name: "Percentage change", formula: "{{\"percentage change\" = \"change\"/\"original\" * 100}}", note: "Learn this — not given" },
      { name: "Reverse percentage", formula: "{{\"original\" = \"new\"/\"multiplier\"}}", note: "Learn this — not given" },
      { name: "Simple interest", formula: "{{I = (P r n)/100}}", note: "Learn this — not given" },
      { name: "Compound interest / growth", formula: "{{A = P(1 + r/100)^n}}", note: "Learn this — not given" },
      { name: "Depreciation / decay", formula: "{{A = P(1 - r/100)^n}}", note: "Learn this — not given" },
      { name: "Cancelling algebraic fractions", formula: "{{(A * B)/(C * B) = A/C}} (B ≠ 0)", note: "Learn this — not given" },
      { name: "Difference of two squares", formula: "{{a^2 - b^2 = (a - b)(a + b)}}", note: "Learn this — not given" },
    ],
  },
};
