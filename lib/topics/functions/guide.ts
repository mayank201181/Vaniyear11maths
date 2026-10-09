import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "functions",
  title: "Functions",
  strand: "Algebra",
  icon: "⚙️",
  summary: "Input, rule, output — then chain functions together and run them backwards.",
  intro:
    "A function is a machine with a rule: put a number in, get exactly one number out. On 4MA1 Higher papers, functions turn up as a reliable 5–7 mark question near the end of the paper: evaluate f(x), state a value that must be excluded, find a composite fg(x), find the inverse f⁻¹(x) and solve an equation built from them. Every part uses algebra you already know — substitution, expanding, rearranging — so this is one of the best-value topics to master. The ideas also lead straight into A level, where functions are the language of almost everything.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "functions-as-mappings",
      heading: "Functions as mappings",
      discovery: {
        problem:
          "A vending machine at an MRT station has buttons A1, A2, B1, … Each button is wired to one drink.\n\n- Could two different buttons give you the same drink?\n- Could one button give you *either* a green tea *or* a soya milk, at random?\n\nNow think of the rule *x ↦ a number whose square is x*. What does it give for x = 9? Is that a sensible 'machine'?",
        idea:
          "Two buttons giving the same drink is fine — a machine can be **many-to-one**. But one button giving two different drinks makes the machine useless: you would never know what you get. That is the defining rule of a **function**: every input gives **exactly one** output.\n\nThe rule 'a number whose square is x' sends 9 to both 3 and −3, so it is **not** a function. The rule {{x |-> sqrt(x)}} (the positive root only) is.",
      },
      body:
        "A **function** is a rule that maps every input in one set (the **domain**) to **exactly one** output in another set. The outputs it actually produces form the **range**.\n\n**Two notations, one idea.** Edexcel uses both — read them the same way:\n\n    f(x) = 2x + 1\n    f: x ↦ 2x + 1\n\nBoth say: *the function f takes x and gives 2x + 1*. The arrow ↦ is read 'maps to'. The letter x is just a placeholder — f(t) = 2t + 1 is the same function.\n\n**Evaluating.** f(4) means *replace every x by 4*: f(4) = 2 × 4 + 1 = 9. With negatives and fractions, put the input in a bracket first:\n\n    g(x) = 3x² − 5x\n    g(−2) = 3(−2)² − 5(−2) = 12 + 10 = 22\n\n**Inputs can be expressions.** f(a + 1) means replace every x by (a + 1), brackets and all. For g above, g(2x) = 3(2x)² − 5(2x) = {{12x^2 - 10x}}. Note that f(a + 1) is *not* f(a) + 1 in general.\n\n**Working backwards: finding x when you know f(x).** If f(x) = 2x + 1 and f(x) = 15, you are solving an equation: 2x + 1 = 15, so x = 7. If the function is quadratic you may get two answers — both count, because a function can be many-to-one.\n\n**Types of mapping**\n\n| Type | Example | A function? |\n|---|---|---|\n| one-to-one | x ↦ 2x + 1 | Yes |\n| many-to-one | x ↦ {{x^2}} (both 3 and −3 give 9) | Yes |\n| one-to-many | x ↦ ±{{sqrt(x)}} | **No** |\n\nOn a graph, a function passes the **vertical line test**: no vertical line meets the graph more than once (one x, one y). A circle fails it, so {{x^2 + y^2 = 25}} is not the graph of a function.",
      diagram: `<svg viewBox="0 0 480 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three mapping diagrams. One-to-one: 1, 2, 3 map to 3, 5, 7 under x maps to 2x plus 1, a function. Many-to-one: minus 2 and 2 map to 4 and 3 maps to 9 under x maps to x squared, a function. One-to-many: 4 maps to 2 and minus 2, 9 maps to 3 and minus 3, not a function."><defs><marker id="fn-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><rect x="0" y="0" width="480" height="220" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="12"><text x="82" y="20">x ↦ 2x + 1</text><text x="240" y="20">x ↦ x²</text><text x="398" y="20">x ↦ ±√x</text></g><g stroke="#334155" stroke-width="1.5"><ellipse cx="40" cy="105" rx="24" ry="62" fill="#c7d2fe"/><ellipse cx="125" cy="105" rx="24" ry="62" fill="#bbf7d0"/><ellipse cx="198" cy="105" rx="24" ry="62" fill="#c7d2fe"/><ellipse cx="283" cy="105" rx="24" ry="62" fill="#bbf7d0"/><ellipse cx="356" cy="105" rx="24" ry="62" fill="#c7d2fe"/><ellipse cx="441" cy="105" rx="24" ry="62" fill="#fecaca"/></g><g font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="13"><text x="40" y="74">1</text><text x="40" y="109">2</text><text x="40" y="144">3</text><text x="125" y="74">3</text><text x="125" y="109">5</text><text x="125" y="144">7</text><text x="198" y="69">−2</text><text x="198" y="104">2</text><text x="198" y="144">3</text><text x="283" y="86">4</text><text x="283" y="144">9</text><text x="356" y="86">4</text><text x="356" y="139">9</text><text x="441" y="64">2</text><text x="441" y="99">−2</text><text x="441" y="129">3</text><text x="441" y="159">−3</text></g><g stroke="#334155" stroke-width="1.3" marker-end="url(#fn-ah)"><line x1="50" y1="70" x2="113" y2="70"/><line x1="50" y1="105" x2="113" y2="105"/><line x1="50" y1="140" x2="113" y2="140"/><line x1="210" y1="65" x2="271" y2="80"/><line x1="208" y1="100" x2="271" y2="84"/><line x1="208" y1="140" x2="271" y2="140"/><line x1="366" y1="80" x2="429" y2="62"/><line x1="366" y1="84" x2="429" y2="96"/><line x1="366" y1="133" x2="429" y2="126"/><line x1="366" y1="137" x2="429" y2="155"/></g><g font-family="sans-serif" text-anchor="middle" font-size="11"><text x="82" y="190" fill="#166534">one-to-one</text><text x="82" y="206" fill="#166534">✓ a function</text><text x="240" y="190" fill="#166534">many-to-one</text><text x="240" y="206" fill="#166534">✓ a function</text><text x="398" y="190" fill="#b91c1c">one-to-many</text><text x="398" y="206" fill="#b91c1c">✗ not a function</text></g></svg>`,
      diagramCaption: "Each input may have only one arrow leaving it. Two arrows arriving at one output is fine; two arrows leaving one input is not.",
      workedExamples: [
        {
          title: "Evaluating, including an expression as the input",
          problem: "{{f(x) = 3x^2 - 5x}}. (a) Find f(−2). (b) Find {{f(1/3)}}. (c) Find and simplify f(x + 1).",
          steps: [
            "(a) Bracket the input: {{f(-2) = 3(-2)^2 - 5(-2) = 3 * 4 + 10 = 22}}.",
            "(b) {{f(1/3) = 3 * 1/9 - 5/3 = 1/3 - 5/3 = -4/3}}.",
            "(c) Replace every x by (x + 1): {{f(x + 1) = 3(x + 1)^2 - 5(x + 1)}}.",
            "Expand: {{3(x^2 + 2x + 1) - 5x - 5 = 3x^2 + 6x + 3 - 5x - 5}}.",
            "Collect: {{3x^2 + x - 2}}.",
            "Check (c) with x = 0: the answer gives −2, and f(1) = 3 − 5 = −2. ✓",
          ],
          answer: "(a) 22  (b) {{-4/3}}  (c) {{3x^2 + x - 2}}",
          yourTurn: {
            question: "Your turn: {{g(x) = 2x^2 - 3x + 1}}. Find g(−3).",
            answer: { type: "number", value: 28 },
            solution: "{{g(-3) = 2(-3)^2 - 3(-3) + 1 = 18 + 9 + 1 = 28}}. The bracket makes {{(-3)^2 = 9}}, not −9.",
          },
        },
        {
          title: "Finding the input from the output",
          problem: "{{f(x) = x^2 - 4x}}. Solve f(x) = 12.",
          steps: [
            "Write the equation: {{x^2 - 4x = 12}}.",
            "Make it equal to zero: {{x^2 - 4x - 12 = 0}}.",
            "Factorise (product −12, sum −4: −6 and +2): {{(x - 6)(x + 2) = 0}}.",
            "So x = 6 or x = −2.",
            "Check: f(6) = 36 − 24 = 12 ✓ and f(−2) = 4 + 8 = 12 ✓. Two inputs, one output — f is many-to-one.",
          ],
          answer: "x = 6 or x = −2",
          yourTurn: {
            question: "Your turn: {{f: x |-> (2x + 3)/5}}. Given that f(a) = 7, find the value of a.",
            answer: { type: "number", value: 16 },
            solution: "{{(2a + 3)/5 = 7}}, so 2a + 3 = 35, 2a = 32 and a = 16. Check: {{(32 + 3)/5 = 7}}. ✓",
          },
        },
      ],
      keyPoints: [
        "A function gives **exactly one** output for each input. Many-to-one is allowed; one-to-many is not.",
        "f(x) = … and f: x ↦ … mean the same thing.",
        "To evaluate, replace **every** x by the input — in a bracket, especially if it is negative or an expression.",
        "f(a + 1) is not f(a) + 1. Substitute (a + 1) for x and expand.",
        "Given f(x) = k, set up the equation and solve it; a quadratic may give two inputs.",
      ],
      whyItWorks:
        "The whole point of the notation f(3) is that it names **one** number. If a rule could give two outputs, 'f(3)' would be ambiguous and every equation containing it would be meaningless — that is why one-to-many rules are excluded. The vertical line test is the same idea on a graph: a vertical line is 'all points with the same x', so meeting the graph twice would mean one input with two outputs.",
      strategies: ["Check by substituting", "Work backwards", "Draw a diagram"],
      thinkDeeper:
        "Find a function f with f(a + b) = f(a) + f(b) for **all** numbers a and b. Now show that {{f(x) = x^2}} does not have this property by finding one counterexample. Which straight-line functions f(x) = mx + c have the property — all of them, or only some?",
    },
    // ------------------------------------------------------------------ 2
    {
      id: "domain-range",
      heading: "Domain and range",
      discovery: {
        problem:
          "Type these into your calculator and see what happens:\n\n- {{1/(x - 3)}} with x = 3\n- {{sqrt(x - 4)}} with x = 1\n\nThen think about {{h(x) = x^2 + 1}}. Can h(x) ever equal 0? Can it equal 0.5? What is the smallest output h can produce?",
        idea:
          "The calculator gives **Math ERROR** both times: you cannot divide by zero, and a negative number has no real square root. Those inputs must be **excluded** from the domain.\n\nFor h: {{x^2}} is never negative, so {{x^2 + 1}} is never less than 1. The smallest output is h(0) = 1, and every value from 1 upwards is reached. So the **range** is h(x) ≥ 1. Domain = what may go in; range = what can come out.",
      },
      body:
        "The **domain** is the set of inputs a function is allowed to take. The **range** is the set of outputs it actually produces.\n\n**1. Values that must be excluded from the domain.** At IGCSE there are two dangers:\n\n- **Division by zero.** Set the denominator equal to 0 and solve. For {{f(x) = 7/(2x - 5)}}: 2x − 5 = 0 gives x = 2.5, so x = 2.5 must be excluded.\n- **Square roots of negatives.** The expression under the root must be ≥ 0. For {{g(x) = sqrt(12 - 3x)}}: 12 − 3x ≥ 0 gives x ≤ 4, so every x > 4 is excluded.\n\nA question may also *give* a restricted domain, e.g. 'f(x) = 3x − 1, −2 ≤ x ≤ 4'. Then only those x are allowed.\n\n**2. Finding the range.** Ask: *what outputs can actually come out?*\n\n- **Straight line on a restricted domain:** work out the outputs at the two ends. f(x) = 3x − 1 for −2 ≤ x ≤ 4 has f(−2) = −7 and f(4) = 11, so the range is −7 ≤ f(x) ≤ 11.\n- **Quadratic:** complete the square to find the turning point. {{x^2 - 6x + 11 = (x - 3)^2 + 2}}. Since {{(x - 3)^2 >= 0}}, the range is f(x) ≥ 2.\n- **From a graph:** look at how high and how low the curve goes (squash it sideways onto the y-axis). The range of {{y = (x - 2)^2 + 1}} below is y ≥ 1.\n- **Reciprocal:** {{1/x}} can be any value except 0 — the range is f(x) ≠ 0.\n\n**Watch the turning point on a restricted domain.** For {{f(x) = (x - 3)^2 + 2}} with 0 ≤ x ≤ 5, the end values are f(0) = 11 and f(5) = 6 — but the minimum, 2, happens at x = 3, which is inside the domain. The range is 2 ≤ f(x) ≤ 11, not 6 ≤ f(x) ≤ 11.\n\n**Language.** Domain is described using x; range is described using f(x) (or y). Write 'f(x) ≥ 2', not 'x ≥ 2', for a range.",
      diagram: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y equals (x minus 2) squared plus 1, a U-shaped curve with minimum point (2, 1). The part of the y-axis from 1 upwards is highlighted as the range, y greater than or equal to 1."><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><g stroke="#94a3b8" stroke-width="1"><line x1="30" y1="257" x2="30" y2="263"/><line x1="130" y1="257" x2="130" y2="263"/><line x1="180" y1="257" x2="180" y2="263"/><line x1="230" y1="257" x2="230" y2="263"/><line x1="280" y1="257" x2="280" y2="263"/><line x1="330" y1="257" x2="330" y2="263"/><line x1="77" y1="210" x2="83" y2="210"/><line x1="77" y1="160" x2="83" y2="160"/><line x1="77" y1="110" x2="83" y2="110"/><line x1="77" y1="60" x2="83" y2="60"/></g><g stroke="#1f2937" stroke-width="1.5"><line x1="22" y1="260" x2="345" y2="260"/><line x1="80" y1="292" x2="80" y2="18"/></g><line x1="80" y1="235" x2="80" y2="22" stroke="#16a34a" stroke-width="7" stroke-opacity="0.45"/><line x1="80" y1="235" x2="180" y2="235" stroke="#334155" stroke-width="1.2" stroke-dasharray="5 4"/><path d="M55,78.75 Q180,391.25 305,78.75" fill="none" stroke="#4338ca" stroke-width="2.5"/><circle cx="180" cy="235" r="4" fill="#1f2937"/><circle cx="80" cy="235" r="4" fill="#16a34a"/><g font-family="sans-serif" fill="#1f2937" font-size="12"><text x="30" y="277" text-anchor="middle">−1</text><text x="130" y="277" text-anchor="middle">1</text><text x="180" y="277" text-anchor="middle">2</text><text x="230" y="277" text-anchor="middle">3</text><text x="280" y="277" text-anchor="middle">4</text><text x="330" y="277" text-anchor="middle">5</text><text x="72" y="214" text-anchor="end">2</text><text x="72" y="164" text-anchor="end">4</text><text x="72" y="114" text-anchor="end">6</text><text x="72" y="64" text-anchor="end">8</text><text x="72" y="277" text-anchor="end">O</text><text x="350" y="264">x</text><text x="86" y="22">y</text><text x="188" y="252">(2, 1)</text><text x="312" y="96">y = (x − 2)² + 1</text></g><g font-family="sans-serif" fill="#166534" font-size="13"><text x="96" y="48">range: y ≥ 1</text></g></svg>`,
      diagramCaption: "Squash the curve sideways onto the y-axis: it covers every value from 1 upwards. The domain is all real x, the range is y ≥ 1.",
      workedExamples: [
        {
          title: "Values that must be excluded",
          problem: "For each function, state the value(s) of x that must be excluded from the domain. (a) {{f(x) = 7/(2x - 5)}} (b) {{g(x) = sqrt(12 - 3x)}} (c) {{h(x) = 1/(x^2 - 9)}}",
          steps: [
            "(a) The denominator cannot be 0: 2x − 5 = 0 gives x = 2.5. Exclude x = 2.5.",
            "(b) The expression under the root must not be negative: 12 − 3x ≥ 0, so 12 ≥ 3x, so x ≤ 4. Exclude all x > 4.",
            "(c) {{x^2 - 9 = 0}} gives {{x^2 = 9}}, so x = 3 or x = −3. Exclude both — don't forget the negative root.",
          ],
          answer: "(a) x = 2.5  (b) x > 4  (c) x = 3 and x = −3",
          yourTurn: {
            question: "Your turn: {{h(x) = (x + 1)/(3x + 12)}}. Which value of x must be excluded from the domain of h?",
            answer: { type: "number", value: -4 },
            solution: "Set the denominator to zero: 3x + 12 = 0, so x = −4. (The numerator being zero at x = −1 is fine: {{0/9 = 0}}.)",
          },
        },
        {
          title: "The range of a quadratic, with and without a restricted domain",
          problem: "{{f(x) = x^2 - 6x + 11}}. (a) Find the range of f when the domain is all real numbers. (b) Find the range of f when the domain is 0 ≤ x ≤ 5.",
          steps: [
            "Complete the square: {{x^2 - 6x + 11 = (x - 3)^2 - 9 + 11 = (x - 3)^2 + 2}}.",
            "(a) {{(x - 3)^2 >= 0}} for every x, with 0 when x = 3. So the least output is 2 and there is no upper limit: f(x) ≥ 2.",
            "(b) The minimum point x = 3 lies inside 0 ≤ x ≤ 5, so the least value is still 2.",
            "Check the ends: f(0) = 11 and f(5) = 25 − 30 + 11 = 6. The larger end value is 11.",
            "So the range is 2 ≤ f(x) ≤ 11.",
          ],
          answer: "(a) f(x) ≥ 2  (b) 2 ≤ f(x) ≤ 11",
          yourTurn: {
            question: "Your turn: {{f(x) = x^2 + 8x + 21}} for all real x. Find the least value of f(x).",
            answer: { type: "number", value: 5 },
            solution: "{{x^2 + 8x + 21 = (x + 4)^2 - 16 + 21 = (x + 4)^2 + 5}}. The square is at least 0, so the least value is 5 (when x = −4). The range is f(x) ≥ 5.",
          },
        },
      ],
      keyPoints: [
        "Domain = allowed inputs (x). Range = outputs actually produced (f(x) or y).",
        "Exclude x that make a denominator 0: set the denominator = 0 and solve.",
        "Under a square root the expression must be ≥ 0 — solve the inequality.",
        "For a quadratic, complete the square: {{a(x + p)^2 + q}} with a > 0 has range f(x) ≥ q.",
        "On a restricted domain, check both end values **and** any turning point inside the domain.",
      ],
      whyItWorks:
        "Division by zero is impossible because 'a ÷ 0 = k' would mean 0 × k = a, and 0 × k is always 0 — so for a ≠ 0 no k works. A real number squared is never negative, so a negative number has no real square root. For the range, completing the square shows the structure directly: {{(x - 3)^2 + 2}} is 'something never negative, plus 2', so it cannot be below 2, and it equals 2 exactly when the bracket is 0. As x moves away from 3 the square grows without limit, so every value above 2 is reached.",
      strategies: ["Consider extremes", "Draw a diagram", "Check by substituting"],
      thinkDeeper:
        "{{f(x) = 6/(x^2 + 2)}} has no excluded values — why not? Find its range. (Hint: what is the smallest the denominator can be, and what happens to the fraction as x gets very large?)",
    },
    // ------------------------------------------------------------------ 3
    {
      id: "composite-functions",
      heading: "Composite functions",
      discovery: {
        problem:
          "A $100 pair of trainers in a Singapore shop has 9% GST added (multiply by 1.09) and you also have a $5 voucher (subtract 5).\n\n- Add GST first, then use the voucher. What do you pay?\n- Use the voucher first, then add GST. What do you pay?\n\nDoes the order matter? Write each order as a single formula in p, the original price.",
        idea:
          "GST first: 100 × 1.09 − 5 = $104. Voucher first: (100 − 5) × 1.09 = $103.55. The order **does** matter.\n\nWith g(p) = 1.09p and v(p) = p − 5: GST first is v(g(p)) = 1.09p − 5; voucher first is g(v(p)) = 1.09(p − 5) = 1.09p − 5.45. Feeding the output of one function into another makes a **composite function** — and changing the order usually changes the result.",
      },
      body:
        "A **composite function** applies one function and then another. **fg(x) means f(g(x))**: put x into g first, then put the answer into f.\n\n> The function **next to x acts first**. In fg(x), g is next to x, so g goes first. Read it right to left.\n\n**Numbers first.** With f(x) = 3x − 1 and {{g(x) = x^2 + 2}}:\n\n    fg(2) = f(g(2)) = f(6) = 17\n    gf(2) = g(f(2)) = g(5) = 27\n\nSo fg(2) ≠ gf(2). In general **fg ≠ gf**.\n\n**Algebra: substitute the whole inside function.** To find fg(x), take the formula for f and replace every x by the **whole expression** g(x), in a bracket:\n\n    fg(x) = f(x² + 2) = 3(x² + 2) − 1 = 3x² + 5\n    gf(x) = g(3x − 1) = (3x − 1)² + 2 = 9x² − 6x + 3\n\n**Repeated functions.** ff(x) means f(f(x)) — apply f twice. Some books write {{f^2(x)}}, which does **not** mean {{(f(x))^2}}.\n\n**Solving fg(x) = k.** Find fg(x) as an expression, set it equal to k and solve. Or work backwards: if f(something) = k, first find the something, then solve g(x) = something.\n\n**Domains in composites.** The output of g must be an allowed input for f. If f(x) = {{sqrt(x)}} and g(x) = x − 4, then fg(x) = {{sqrt(x - 4)}} needs x ≥ 4.\n\n**Exam style.** Edexcel often asks 'Find fg(x). Simplify your answer.' or 'Solve fg(x) = gf(x)'. Leave the bracket in until you expand — dropping it is the most common lost mark.",
      diagram: `<svg viewBox="0 0 480 170" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two function machine chains. Top: fg of 2. The input 2 goes into g, x squared plus 2, giving 6, then into f, 3x minus 1, giving 17. Bottom: gf of 2. The input 2 goes into f giving 5, then into g giving 27."><defs><marker id="fc-ah" viewBox="0 0 10 10" refX="9" refY="5" markerWidth="6" markerHeight="6" orient="auto"><path d="M0,0 L10,5 L0,10 z" fill="#334155"/></marker></defs><rect x="0" y="0" width="480" height="170" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><rect x="118" y="30" width="96" height="34" rx="6" fill="#fde68a"/><rect x="288" y="30" width="96" height="34" rx="6" fill="#c7d2fe"/><rect x="118" y="106" width="96" height="34" rx="6" fill="#c7d2fe"/><rect x="288" y="106" width="96" height="34" rx="6" fill="#fde68a"/></g><g stroke="#334155" stroke-width="1.4" marker-end="url(#fc-ah)"><line x1="80" y1="47" x2="114" y2="47"/><line x1="216" y1="47" x2="244" y2="47"/><line x1="262" y1="47" x2="284" y2="47"/><line x1="386" y1="47" x2="420" y2="47"/><line x1="80" y1="123" x2="114" y2="123"/><line x1="216" y1="123" x2="244" y2="123"/><line x1="262" y1="123" x2="284" y2="123"/><line x1="386" y1="123" x2="420" y2="123"/></g><g font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle"><text x="166" y="52">g: x² + 2</text><text x="336" y="52">f: 3x − 1</text><text x="166" y="128">f: 3x − 1</text><text x="336" y="128">g: x² + 2</text><text x="68" y="52">2</text><text x="253" y="52">6</text><text x="440" y="52">17</text><text x="68" y="128">2</text><text x="253" y="128">5</text><text x="440" y="128">27</text></g><g font-family="sans-serif" fill="#1f2937" font-size="12"><text x="10" y="20">fg(2) = f(g(2)): g acts first</text><text x="10" y="96">gf(2) = g(f(2)): f acts first</text><text x="10" y="162" fill="#b91c1c">Same two machines, different order, different answer: fg ≠ gf.</text></g></svg>`,
      diagramCaption: "In fg(x) the function next to x — g — acts first. Swapping the order changes the output.",
      workedExamples: [
        {
          title: "Composite functions both ways",
          problem: "f(x) = 3x − 1 and {{g(x) = x^2 + 2}}. (a) Find fg(2). (b) Find fg(x) and gf(x), simplifying each.",
          steps: [
            "(a) g first: {{g(2) = 2^2 + 2 = 6}}. Then f(6) = 3 × 6 − 1 = 17.",
            "(b) fg(x) = f(g(x)): in f, replace x by {{(x^2 + 2)}}: {{3(x^2 + 2) - 1 = 3x^2 + 6 - 1 = 3x^2 + 5}}.",
            "gf(x) = g(f(x)): in g, replace x by (3x − 1): {{(3x - 1)^2 + 2}}.",
            "Expand: {{9x^2 - 6x + 1 + 2 = 9x^2 - 6x + 3}}.",
            "Check with x = 2: fg(2) = 3 × 4 + 5 = 17 ✓ (matches part a). gf(2) = 36 − 12 + 3 = 27, and g(f(2)) = g(5) = 27 ✓.",
          ],
          answer: "(a) 17  (b) fg(x) = {{3x^2 + 5}}, gf(x) = {{9x^2 - 6x + 3}}",
          yourTurn: {
            question: "Your turn: f(x) = 2x − 1 and {{g(x) = x^2 + 3}}. Find gf(x). Give your answer fully expanded.",
            answer: { type: "expression", expr: "4x^2-4x+4", form: "expanded" },
            solution: "gf(x) = g(2x − 1) = {{(2x - 1)^2 + 3 = 4x^2 - 4x + 1 + 3 = 4x^2 - 4x + 4}}. Check x = 1: f(1) = 1, g(1) = 4, and 4 − 4 + 4 = 4. ✓",
          },
        },
        {
          title: "Solving fg(x) = k",
          problem: "f(x) = 2x + 3 and {{g(x) = x^2 - 1}}. Solve fg(x) = 19.",
          steps: [
            "Find fg(x): {{f(x^2 - 1) = 2(x^2 - 1) + 3 = 2x^2 + 1}}.",
            "Set it equal to 19: {{2x^2 + 1 = 19}}.",
            "{{2x^2 = 18}}, so {{x^2 = 9}}.",
            "x = 3 or x = −3.",
            "Second way (work backwards): f(something) = 19 means 2 × something + 3 = 19, so something = 8. Then {{x^2 - 1 = 8}} gives x = ±3. Same answer, less algebra.",
          ],
          answer: "x = 3 or x = −3",
          yourTurn: {
            question: "Your turn: f(x) = 3x − 2 and {{g(x) = x^2}}. Solve gf(x) = 16. Give both values of x.",
            answer: { type: "list", values: [2, -0.6666666667], ordered: false, tolerance: 0.01, display: "x = 2 or x = {{-2/3}}" },
            solution: "gf(x) = {{(3x - 2)^2 = 16}}, so 3x − 2 = 4 or 3x − 2 = −4. That gives x = 2 or x = {{-2/3}}. Don't forget the negative square root.",
          },
        },
      ],
      keyPoints: [
        "fg(x) = f(g(x)): the function next to x acts **first**.",
        "In general fg(x) ≠ gf(x) — always check which order is asked for.",
        "Replace x in the outer function by the **whole** inner expression, in a bracket.",
        "ff(x) means apply f twice, not square f(x).",
        "To solve fg(x) = k, find fg(x) and solve — or work backwards one function at a time.",
      ],
      whyItWorks:
        "fg(x) is just nested brackets: f(g(x)). As with any brackets, you evaluate the innermost first — exactly as in 3 × (2 + 5) you add before you multiply. Substituting the whole expression g(x) into f works because f's rule says 'do this to whatever goes in', and what goes in is g(x). The order matters because the operations don't generally commute: 'square then add 2' and 'add 2 then square' are different journeys.",
      strategies: ["Work backwards", "Check by substituting", "Draw a diagram"],
      thinkDeeper:
        "f(x) = 2x + a and g(x) = 3x + b. Find a condition on a and b so that fg(x) = gf(x) for every x. Can you find two different non-linear functions that also commute (fg = gf)? (Try powers of x.)",
    },
    // ------------------------------------------------------------------ 4
    {
      id: "inverse-functions",
      heading: "Inverse functions",
      discovery: {
        problem:
          "I think of a number. I multiply it by 3, then subtract 4. My answer is 17.\n\n- What was my number? Describe *exactly* how you found it.\n- Now do it for a general answer x: write a formula that turns my answer back into my starting number.",
        idea:
          "You undo the steps **in reverse order** with the **opposite operations**: add 4 (17 + 4 = 21), then divide by 3 (21 ÷ 3 = 7). My number was 7.\n\nFor a general answer x the undo-machine is {{(x + 4)/3}}. If f(x) = 3x − 4, this undo-machine is the **inverse function**, written f⁻¹(x) = {{(x + 4)/3}}. Check: f⁻¹(17) = 7 and f(7) = 17.",
      },
      body:
        "The **inverse function** f⁻¹ undoes f. If f sends a to b, then f⁻¹ sends b back to a:\n\n    f(a) = b  ⇔  f⁻¹(b) = a\n\n**Method 1 — swap and rearrange** (works for everything at IGCSE):\n\n1. Write y = f(x).\n2. Rearrange to make x the subject.\n3. Swap the letters: replace y by x. That expression is f⁻¹(x).\n\nFor f(x) = {{(3x + 5)/2}}: y = {{(3x + 5)/2}} → 2y = 3x + 5 → 2y − 5 = 3x → x = {{(2y - 5)/3}}. So f⁻¹(x) = {{(2x - 5)/3}}.\n\n**Method 2 — reverse the flowchart** (quick when x appears once):\n\n    f:  x → ×3 → +5 → ÷2\n    f⁻¹: x → ×2 → −5 → ÷3\n\n**When x appears twice** (Edexcel loves this): collect the x-terms on one side and **factorise** x out. For f(x) = {{(2x + 1)/(x - 3)}}: y(x − 3) = 2x + 1 → xy − 3y = 2x + 1 → xy − 2x = 3y + 1 → x(y − 2) = 3y + 1 → x = {{(3y + 1)/(y - 2)}}. So f⁻¹(x) = {{(3x + 1)/(x - 2)}}.\n\n**Check your inverse:** ff⁻¹(x) = x and f⁻¹f(x) = x. Quick numerical check: f(4) = 9, so f⁻¹(9) should be 4. Here f⁻¹(9) = {{(27 + 1)/7 = 4}} ✓.\n\n**Graphs.** Swapping x and y turns every point (a, b) on y = f(x) into (b, a) on y = f⁻¹(x). That is a **reflection in the line y = x**.\n\n**Domain and range swap.** The domain of f⁻¹ is the range of f, and the range of f⁻¹ is the domain of f. Above, f(x) can never equal 2, so f⁻¹(x) has x = 2 excluded.\n\n**Only one-to-one functions have inverses.** {{x^2}} sends 3 and −3 to 9, so '{{f^(-1)(9)}}' would have to be two numbers. Restrict the domain to make it one-to-one: {{f(x) = (x - 1)^2 + 3}}, x ≥ 1 has inverse f⁻¹(x) = {{1 + sqrt(x - 3)}}, x ≥ 3.\n\n**Self-inverse functions** are their own inverse: f⁻¹ = f, so ff(x) = x. Examples: {{f(x) = 1/x}}, f(x) = 6 − x, f(x) = {{(2x + 1)/(x - 2)}}. Their graphs are symmetric in y = x.\n\n> Notation trap: f⁻¹(x) is the inverse function, **not** {{1/f(x)}}.",
      diagram: `<svg viewBox="0 0 360 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graphs of y equals f of x, the line y equals 2x plus 1, and its inverse y equals (x minus 1) over 2, which is its reflection in the dashed line y equals x. The point (1, 3) on f reflects to (3, 1) on the inverse."><rect x="0" y="0" width="360" height="320" fill="#ffffff"/><g stroke="#94a3b8" stroke-width="1"><line x1="30" y1="237" x2="30" y2="243"/><line x1="60" y1="237" x2="60" y2="243"/><line x1="90" y1="237" x2="90" y2="243"/><line x1="150" y1="237" x2="150" y2="243"/><line x1="180" y1="237" x2="180" y2="243"/><line x1="210" y1="237" x2="210" y2="243"/><line x1="240" y1="237" x2="240" y2="243"/><line x1="270" y1="237" x2="270" y2="243"/><line x1="300" y1="237" x2="300" y2="243"/><line x1="330" y1="237" x2="330" y2="243"/><line x1="117" y1="300" x2="123" y2="300"/><line x1="117" y1="270" x2="123" y2="270"/><line x1="117" y1="210" x2="123" y2="210"/><line x1="117" y1="180" x2="123" y2="180"/><line x1="117" y1="150" x2="123" y2="150"/><line x1="117" y1="120" x2="123" y2="120"/><line x1="117" y1="90" x2="123" y2="90"/><line x1="117" y1="60" x2="123" y2="60"/><line x1="117" y1="30" x2="123" y2="30"/></g><g stroke="#1f2937" stroke-width="1.5"><line x1="18" y1="240" x2="345" y2="240"/><line x1="120" y1="310" x2="120" y2="12"/></g><line x1="60" y1="300" x2="330" y2="30" stroke="#64748b" stroke-width="1.3" stroke-dasharray="6 5"/><line x1="75" y1="300" x2="217.5" y2="15" stroke="#4338ca" stroke-width="2.5"/><line x1="30" y1="300" x2="330" y2="150" stroke="#c2410c" stroke-width="2.5"/><line x1="150" y1="150" x2="210" y2="210" stroke="#334155" stroke-width="1.2" stroke-dasharray="3 3"/><circle cx="150" cy="150" r="4" fill="#4338ca"/><circle cx="210" cy="210" r="4" fill="#c2410c"/><circle cx="120" cy="210" r="3.5" fill="#4338ca"/><circle cx="150" cy="240" r="3.5" fill="#c2410c"/><g font-family="sans-serif" fill="#1f2937" font-size="11"><text x="150" y="255" text-anchor="middle">1</text><text x="180" y="255" text-anchor="middle">2</text><text x="210" y="255" text-anchor="middle">3</text><text x="240" y="255" text-anchor="middle">4</text><text x="270" y="255" text-anchor="middle">5</text><text x="300" y="255" text-anchor="middle">6</text><text x="60" y="255" text-anchor="middle">−2</text><text x="113" y="184" text-anchor="end">2</text><text x="113" y="124" text-anchor="end">4</text><text x="113" y="64" text-anchor="end">6</text><text x="113" y="274" text-anchor="end">−1</text><text x="113" y="253" text-anchor="end">O</text><text x="348" y="236">x</text><text x="126" y="18">y</text></g><g font-family="sans-serif" font-size="12"><text x="157" y="146" fill="#4338ca">(1, 3)</text><text x="214" y="228" fill="#c2410c">(3, 1)</text><text x="222" y="30" fill="#4338ca">y = 2x + 1</text><text x="262" y="196" fill="#c2410c">y = (x − 1)/2</text><text x="300" y="52" fill="#475569" text-anchor="end">y = x</text></g></svg>`,
      diagramCaption: "f(x) = 2x + 1 (blue) and f⁻¹(x) = {{(x - 1)/2}} (orange) are mirror images in y = x. The point (1, 3) on f becomes (3, 1) on f⁻¹; (0, 1) becomes (1, 0).",
      workedExamples: [
        {
          title: "Inverse by swapping and rearranging",
          problem: "f(x) = {{(3x + 5)/2}}. (a) Find f⁻¹(x). (b) Verify that ff⁻¹(x) = x.",
          steps: [
            "(a) Let y = {{(3x + 5)/2}}.",
            "Multiply by 2: 2y = 3x + 5.",
            "Subtract 5: 2y − 5 = 3x.",
            "Divide by 3: x = {{(2y - 5)/3}}.",
            "Rename y as x: f⁻¹(x) = {{(2x - 5)/3}}.",
            "(b) ff⁻¹(x) = f({{(2x - 5)/3}}) = {{(3 * (2x - 5)/3 + 5)/2 = (2x - 5 + 5)/2 = (2x)/2 = x}} ✓.",
            "Number check: f(1) = 4 and f⁻¹(4) = {{(8 - 5)/3 = 1}} ✓.",
          ],
          answer: "f⁻¹(x) = {{(2x - 5)/3}}",
          yourTurn: {
            question: "Your turn: g(x) = 5 − 2x. Find g⁻¹(x).",
            answer: { type: "expression", expr: "(5-x)/2" },
            solution: "y = 5 − 2x → 2x = 5 − y → x = {{(5 - y)/2}}. So g⁻¹(x) = {{(5 - x)/2}}. Check: g(1) = 3 and g⁻¹(3) = 1 ✓.",
          },
        },
        {
          title: "x appears twice: collect and factorise (exam style)",
          problem: "f(x) = {{(2x + 1)/(x - 3)}}, x ≠ 3. Express the inverse function f⁻¹ in the form f⁻¹: x ↦ …",
          steps: [
            "Let y = {{(2x + 1)/(x - 3)}}. Multiply both sides by (x − 3): y(x − 3) = 2x + 1.",
            "Expand: xy − 3y = 2x + 1.",
            "Collect x-terms on one side: xy − 2x = 3y + 1.",
            "Factorise out x: x(y − 2) = 3y + 1.",
            "Divide: x = {{(3y + 1)/(y - 2)}}.",
            "Swap the letters: f⁻¹: x ↦ {{(3x + 1)/(x - 2)}}, x ≠ 2.",
            "Check: f(4) = {{9/1 = 9}} and f⁻¹(9) = {{28/7 = 4}} ✓.",
          ],
          answer: "f⁻¹: x ↦ {{(3x + 1)/(x - 2)}}",
          yourTurn: {
            question: "Your turn: f(x) = {{x/(x + 2)}}, x ≠ −2. Find f⁻¹(x).",
            answer: { type: "expression", expr: "2x/(1-x)" },
            solution: "y(x + 2) = x → xy + 2y = x → 2y = x − xy = x(1 − y) → x = {{(2y)/(1 - y)}}. So f⁻¹(x) = {{(2x)/(1 - x)}}. Check: f(2) = {{2/4 = 1/2}} and f⁻¹({{1/2}}) = {{1/(1/2) = 2}} ✓.",
          },
        },
      ],
      keyPoints: [
        "f⁻¹ undoes f: if f(a) = b then f⁻¹(b) = a.",
        "Method: y = f(x), make x the subject, then swap y for x.",
        "If x appears twice, collect x-terms on one side and factorise x out.",
        "Check: ff⁻¹(x) = x, or test one number through f and back.",
        "The graph of y = f⁻¹(x) is the reflection of y = f(x) in y = x; domain and range swap.",
        "f⁻¹(x) is **not** {{1/f(x)}}. Only one-to-one functions have an inverse.",
      ],
      whyItWorks:
        "To undo a sequence of steps you reverse each one, last step first — like taking off shoes before socks. Rearranging y = f(x) for x does exactly that, one inverse operation at a time. Swapping the letters is only renaming: it lets us use x for the input of f⁻¹ as usual. On a graph, swapping x and y moves (a, b) to (b, a), and the line y = x is the perpendicular bisector of the segment joining those two points — that is precisely a reflection in y = x. A many-to-one function cannot be undone because, given the output 9 from {{x^2}}, you cannot know whether the input was 3 or −3.",
      strategies: ["Use the inverse", "Work backwards", "Check by substituting", "Use symmetry"],
      thinkDeeper:
        "f(x) = 2x − 3. Solve f(x) = f⁻¹(x) in two ways: by finding f⁻¹ and equating, and by solving f(x) = x. Why do both give the same answer here? (Think about where the two graphs meet relative to y = x.) Then find all values of k for which f(x) = {{(kx + 1)/(x - k)}} is self-inverse.",
    },
  ],
  learn: {
    flashcards: [
      { front: "What makes a rule a function?", back: "Every input gives **exactly one** output. Many-to-one is fine; one-to-many is not." },
      { front: "What does f: x ↦ 4x − 1 mean?", back: "The function f maps x to 4x − 1 — the same as f(x) = 4x − 1." },
      { front: "{{f(x) = x^2 - 3x}}. Find f(−2).", back: "{{(-2)^2 - 3(-2) = 4 + 6 = 10}}. Bracket the negative." },
      { front: "{{f(x) = x^2}}. Find f(a + 1).", back: "{{(a + 1)^2 = a^2 + 2a + 1}} — not {{a^2 + 1}}." },
      { front: "f(x) = 5x + 2. Find x when f(x) = 37.", back: "5x + 2 = 37, so x = 7." },
      { front: "Domain vs range?", back: "Domain = the allowed inputs (x). Range = the outputs produced (f(x) or y)." },
      { front: "Which x is excluded from {{f(x) = 3/(2x + 8)}}?", back: "x = −4 (it makes the denominator zero)." },
      { front: "Which x are excluded from {{g(x) = sqrt(x - 5)}}?", back: "All x < 5. The expression under the root must be ≥ 0." },
      { front: "Range of {{f(x) = (x + 1)^2 - 4}}, x any real number?", back: "f(x) ≥ −4. The square is never negative." },
      { front: "What does fg(x) mean?", back: "f(g(x)): apply g **first**, then f. The function next to x acts first." },
      { front: "f(x) = x + 3, g(x) = 2x. Find fg(x) and gf(x).", back: "fg(x) = 2x + 3; gf(x) = 2(x + 3) = 2x + 6. Different!" },
      { front: "What does ff(x) mean?", back: "f(f(x)) — apply f twice. Not {{(f(x))^2}}." },
      { front: "Steps to find f⁻¹(x)?", back: "Write y = f(x), make x the subject, then replace y by x." },
      { front: "f(x) = {{(x - 4)/3}}. Find f⁻¹(x).", back: "f⁻¹(x) = 3x + 4. Undo ÷3 then −4 in reverse: ×3, +4." },
      { front: "How are the graphs of f and f⁻¹ related?", back: "Reflections of each other in the line y = x." },
      { front: "What is ff⁻¹(x)?", back: "x. A function and its inverse cancel out — the quickest check of an inverse." },
      { front: "What is a self-inverse function?", back: "One with f⁻¹ = f, so ff(x) = x. E.g. {{f(x) = 1/x}} or f(x) = 10 − x." },
      { front: "Does f⁻¹(x) mean {{1/f(x)}}?", back: "No. f⁻¹ is the inverse function (the undo); {{1/f(x)}} is the reciprocal." },
    ],
    mustKnow: [
      "Can I explain that a function is a mapping between two sets, where each input has exactly one output?",
      "Can I use and explain the notations f(x) = … and f: x ↦ …?",
      "Can I calculate f(x) where x is given, including negatives, fractions and expressions such as f(a + 1)?",
      "Can I find x given f(x) and the value of f(x), including when there are two solutions?",
      "Can I identify values that must be excluded from the domain of a function (division by zero, square roots of negatives)?",
      "Can I find the range of a function from a graph, from a restricted domain, or by completing the square?",
      "Can I find a composite function fg(x), remembering that g acts first, and evaluate fg(a) for a number a?",
      "Can I solve an equation such as fg(x) = k or fg(x) = gf(x)?",
      "Can I find the inverse function f⁻¹(x), including when x appears twice, and check it using ff⁻¹(x) = x?",
      "Can I explain that the graph of y = f⁻¹(x) is the reflection of y = f(x) in y = x, and recognise a self-inverse function?",
    ],
    misconceptions: [
      { wrong: "fg(x) means f(x) × g(x).", right: "fg(x) means f(g(x)) — substitute g(x) into f. It is a chain, not a product." },
      { wrong: "In fg(x), do f first because it is written first.", right: "The function **next to x** acts first. In fg(x), g is applied first, then f." },
      { wrong: "fg(x) = gf(x) always.", right: "Usually they differ: with f(x) = x + 3 and g(x) = 2x, fg(x) = 2x + 3 but gf(x) = 2x + 6." },
      { wrong: "f⁻¹(x) = {{1/f(x)}}.", right: "The −1 means 'inverse function' (undo f), not the reciprocal. For f(x) = 2x + 1, f⁻¹(x) = {{(x - 1)/2}}, but {{1/f(x) = 1/(2x + 1)}}." },
      { wrong: "f(a + 1) = f(a) + 1.", right: "Substitute (a + 1) for x everywhere. For {{f(x) = x^2}}: {{f(a + 1) = a^2 + 2a + 1}}." },
      { wrong: "The range of {{f(x) = x^2 - 4}} is x ≥ −4.", right: "A range describes outputs, so write f(x) ≥ −4. Domain uses x; range uses f(x) or y." },
      { wrong: "For a restricted domain, the range is always given by the two end values.", right: "Check for a turning point inside the domain. {{(x - 3)^2 + 2}} on 0 ≤ x ≤ 5 has range 2 ≤ f(x) ≤ 11, not 6 ≤ f(x) ≤ 11." },
      { wrong: "To find the inverse of f(x) = 3x − 4, reverse the operations in the same order: ÷3 then +4.", right: "Undo in **reverse** order: first +4, then ÷3, giving f⁻¹(x) = {{(x + 4)/3}}, not {{x/3 + 4}}." },
    ],
    examMistakes: [
      "Multiplying f(x) and g(x) together when asked for fg(x), e.g. writing {{(3x - 1)(x^2 + 2)}} instead of substituting — this scores no marks.",
      "Applying the functions in the wrong order: for fg(3) working out f(3) first and then putting the answer into g.",
      "Dropping the bracket when substituting, e.g. gf(x) = {{3x - 1^2 + 2}} instead of {{(3x - 1)^2 + 2}}, then losing the accuracy mark.",
      "Finding the inverse correctly in terms of y but never swapping back, so the final answer is left as x = {{(y + 4)/3}} instead of f⁻¹(x) = {{(x + 4)/3}}.",
      "When x appears twice in an inverse question, not collecting the x-terms and factorising — candidates divide by x or 'cancel' terms illegally and lose the method marks.",
      "For 'state the value of x that must be excluded' from {{1/(x + 5)}}, giving x = 5 or x = 0 instead of solving x + 5 = 0 to get x = −5.",
    ],
    mnemonics: [
      {
        topic: "Order in a composite",
        device: "Closest to x goes first",
        explanation: "In fg(x), g is hugging the x, so g acts first. Read composites right to left, like unwrapping from the inside out.",
      },
      {
        topic: "Finding an inverse",
        device: "Y-S-S: y =, Subject, Swap",
        explanation: "Write **y =** f(x), make x the **subject**, then **swap** y for x. If x appears twice, the S in Subject reminds you: collect and factorise.",
      },
      {
        topic: "Excluded values",
        device: "Nothing zero downstairs, nothing negative under the roof",
        explanation: "A denominator may never be 0, and the expression under a square-root 'roof' may never be negative.",
      },
    ],
    realWorld: [
      { title: "GST and vouchers", detail: "Adding 9% GST and then using a $5 voucher is v(g(p)) = 1.09p − 5; voucher first is g(v(p)) = 1.09p − 5.45. The order of a composite changes what you pay at the till.", emoji: "🧾" },
      { title: "Currency conversion", detail: "If converting Singapore dollars to Malaysian ringgit is f(x) = 3.4x, then converting back is the inverse f⁻¹(x) = {{x/3.4}} (ignoring the exchange-booth's fees, which break the symmetry).", emoji: "💱" },
      { title: "Temperature scales", detail: "F = 1.8C + 32 converts Celsius to Fahrenheit. Its inverse, C = {{(F - 32)/1.8}}, converts back — swap and rearrange in action.", emoji: "🌡️" },
      { title: "Codes and encryption", detail: "A cipher is a one-to-one function on letters; decryption is its inverse. A many-to-one cipher would be useless — two messages would encrypt to the same thing and you could not decode them.", emoji: "🔐" },
    ],
    videos: [
      { title: "Composite functions", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+composite+functions" },
      { title: "Inverse functions", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+inverse+functions" },
      { title: "Functions: domain and range", channel: "ExamSolutions", url: "https://www.youtube.com/results?search_query=examsolutions+domain+and+range+of+a+function" },
      { title: "Functions, composite and inverse (GCSE)", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+functions+composite+inverse+gcse" },
    ],
    formulas: [
      { name: "Function notation", formula: "f(x) = … and f: x ↦ … mean the same", note: "Learn this — not given" },
      { name: "Composite function", formula: "fg(x) = f(g(x)) — g acts first", note: "Learn this — not given" },
      { name: "Inverse undoes the function", formula: "ff⁻¹(x) = f⁻¹f(x) = x", note: "Learn this — not given" },
      { name: "Graph of an inverse", formula: "y = f⁻¹(x) is the reflection of y = f(x) in the line y = x", note: "Learn this — not given" },
      { name: "Domain and range of an inverse", formula: "domain of f⁻¹ = range of f; range of f⁻¹ = domain of f", note: "Learn this — not given" },
      { name: "Excluded values", formula: "denominator ≠ 0; expression under {{sqrt( )}} ≥ 0", note: "Learn this — not given" },
      { name: "Range of a quadratic", formula: "{{a(x + p)^2 + q}} with a > 0 has range f(x) ≥ q", note: "Learn this — not given" },
      { name: "Quadratic formula (for solving f(x) = k)", formula: "{{x = (-b +- sqrt(b^2 - 4ac))/(2a)}}", note: "On the formula sheet" },
    ],
  },
};
