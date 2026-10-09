// Linear & simultaneous equations — MCQ papers (3 × 15). Options are shuffled at display time.
import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  {
    id: "solving-equations-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "solving-equations-m1-q01",
        question: "Solve {{5x - 7 = 2x + 11}}.",
        options: ["x = 6", "x = {{4/3}}", "x = {{18/7}}", "x = −6"],
        answerIndex: 0,
        explanation:
          "Subtract 2x from both sides: {{3x - 7 = 11}}. Add 7: {{3x = 18}}, so x = 6. Check: 5 × 6 − 7 = 23 and 2 × 6 + 11 = 23. {{4/3}} comes from writing 3x = 11 − 7 (the −7 crossed over without changing sign); {{18/7}} comes from *adding* 2x to the left instead of subtracting it.",
        difficulty: "warmup",
        guideRef: "linear-equations",
        hints: ["Get all the x terms on one side first: subtract 2x from both sides, then deal with the −7."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q02",
        question: "Solve {{3(2x - 5) = 4x + 1}}.",
        options: ["x = 3", "x = −7", "x = 8", "x = 1.6"],
        answerIndex: 2,
        explanation:
          "Expand: {{6x - 15 = 4x + 1}}. Subtract 4x: {{2x - 15 = 1}}, so 2x = 16 and x = 8. x = 3 comes from expanding the bracket as 6x − 5 (only multiplying the first term by 3). x = −7 comes from 2x = 1 − 15, a sign slip when moving the −15. x = 1.6 comes from adding the x terms to get 10x = 16.",
        difficulty: "warmup",
        guideRef: "linear-equations",
        hints: ["Multiply **both** terms inside the bracket by 3 before doing anything else."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q03",
        question: "Make t the subject of the formula {{v = u + at}}.",
        options: ["{{t = (v + u)/a}}", "{{t = (v - u)/a}}", "{{t = v/a - u}}", "{{t = a(v - u)}}"],
        answerIndex: 1,
        explanation:
          "Undo the operations in reverse order: subtract u to get {{v - u = at}}, then divide by a: {{t = (v - u)/a}}. {{(v + u)/a}} moves u across without changing its sign. {{v/a - u}} divides only v by a — the whole of v − u must be divided. {{a(v - u)}} multiplies instead of dividing.",
        difficulty: "warmup",
        guideRef: "rearranging-once",
        hints: ["What is being done to t? It is multiplied by a, then u is added. Undo those in reverse order."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q04",
        question: "Solve the simultaneous equations\n\n    {{x + y = 10}}\n    {{x - y = 4}}",
        options: ["x = 3, y = 7", "x = 14, y = −4", "x = 6, y = 4", "x = 7, y = 3"],
        answerIndex: 3,
        explanation:
          "Add the equations: the y terms cancel, giving {{2x = 14}}, so x = 7. Then 7 + y = 10 gives y = 3. Check in the second: 7 − 3 = 4 ✓. x = 3, y = 7 swaps the values (3 − 7 = −4, not 4). x = 14 forgets to divide 2x = 14 by 2. x = 6, y = 4 fits only the first equation — always check both.",
        difficulty: "warmup",
        guideRef: "simultaneous-linear",
        hints: ["The y terms have opposite signs — what happens if you add the two equations?"],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q05",
        question: "Solve {{(x + 3)/4 - (x - 2)/3 = 1}}.",
        options: ["x = 5", "x = −11", "x = 16", "x = −5"],
        answerIndex: 0,
        explanation:
          "Multiply every term by the LCD, 12: {{3(x + 3) - 4(x - 2) = 12}}. Expand carefully: {{3x + 9 - 4x + 8 = 12}}, so {{-x + 17 = 12}} and x = 5. x = −11 comes from −4(x − 2) = −4x − 8 (the classic sign slip: −4 × −2 = +8). x = 16 forgets to multiply the right-hand side 1 by 12. x = −5 comes from −x = −5 → x = −5, dropping the final sign change.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "Which number clears both denominators at once?",
          "Multiply **every** term — including the 1 on the right — by 12.",
          "Put the second numerator in a bracket: −4(x − 2). What is −4 × −2?",
        ],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q06",
        question: "The diagram shows a triangle. The angles are {{(2x + 10)°}}, {{(3x - 5)°}} and {{(x + 25)°}}.\n\nWork out the size of the **largest** angle.",
        diagram: `<svg viewBox="0 0 320 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle with angles (2x + 10) degrees at bottom left, (3x − 5) degrees at bottom right and (x + 25) degrees at the top"><rect x="0" y="0" width="320" height="300" fill="#ffffff"/><polygon points="60,270 260,270 183,58" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><text x="78" y="262" font-size="12" font-family="sans-serif" fill="#1f2937">(2x + 10)°</text><text x="246" y="262" font-size="12" text-anchor="end" font-family="sans-serif" fill="#1f2937">(3x − 5)°</text><text x="176" y="125" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(x + 25)°</text></svg>`,
        options: ["60°", "70°", "25°", "160°"],
        answerIndex: 1,
        explanation:
          "Angles in a triangle add to 180°: {{(2x + 10) + (3x - 5) + (x + 25) = 180}}, so {{6x + 30 = 180}}, 6x = 150 and x = 25. The angles are 60°, 70° and 50°, so the largest is 3 × 25 − 5 = 70°. 25° is x itself — the question asks for an angle. 60° is the angle (2x + 10)°, not the largest. 160° comes from using 360° (the angle sum of a quadrilateral): x = 55 and 3 × 55 − 5 = 160.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "What do the angles in a triangle add up to?",
          "Form the equation: (2x + 10) + (3x − 5) + (x + 25) = 180.",
          "Once you have x, substitute it into **all three** expressions and pick the biggest.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q07",
        question: "The volume of a sphere is {{V = 4/3 pi r^3}}. Make r the subject of the formula.",
        options: [
          "{{r = cbrt((4V)/(3pi))}}",
          "{{r = sqrt((3V)/(4pi))}}",
          "{{r = cbrt((3V)/(4pi))}}",
          "{{r = cbrt(V - 4/3 pi)}}",
        ],
        answerIndex: 2,
        explanation:
          "Multiply by 3: {{3V = 4pi r^3}}. Divide by 4π: {{r^3 = (3V)/(4pi)}}. Cube root: {{r = cbrt((3V)/(4pi))}}. {{cbrt((4V)/(3pi))}} divides by {{4/3}} the wrong way round (it multiplies by {{4/3}} instead of by {{3/4}}). The square-root version undoes a square, but r is **cubed**. {{cbrt(V - 4/3 pi)}} subtracts {{4/3}}π when it is actually multiplying.",
        difficulty: "core",
        guideRef: "rearranging-once",
        hints: [
          "List what happens to r: cube it, multiply by π, multiply by {{4/3}}.",
          "Undo in reverse: first undo the {{4/3}}π, then undo the cube.",
          "Dividing by {{4/3}} π is the same as multiplying by {{3/(4pi)}}.",
        ],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q08",
        question: "Make x the subject of {{y = (x + 2)/(x - 3)}}.",
        options: [
          "{{x = (3y - 2)/(y - 1)}}",
          "{{x = (3y + 2)/(y + 1)}}",
          "{{x = y(x - 3) - 2}}",
          "{{x = (3y + 2)/(y - 1)}}",
        ],
        answerIndex: 3,
        explanation:
          "Multiply up: {{y(x - 3) = x + 2}}, so {{xy - 3y = x + 2}}. Collect the x terms on one side: {{xy - x = 3y + 2}}. Factorise: {{x(y - 1) = 3y + 2}}, so {{x = (3y + 2)/(y - 1)}}. {{(3y - 2)/(y - 1)}} has a sign slip moving the 2. {{(3y + 2)/(y + 1)}} gets the sign of x wrong when collecting (xy − x, not xy + x). {{y(x - 3) - 2}} is not a rearrangement at all — x still appears on both sides.",
        difficulty: "core",
        guideRef: "rearranging-twice",
        hints: [
          "x appears twice. Clear the fraction first by multiplying both sides by (x − 3).",
          "Get every term containing x on one side and everything else on the other.",
          "Factorise out x, then divide by the bracket.",
        ],
        strategy: "Collect, factorise, divide",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q09",
        question: "Solve the simultaneous equations\n\n    {{3x + 2y = 16}}\n    {{5x - 3y = 14}}",
        options: ["x = 2, y = 5", "x = 4, y = 2", "x = 4, y = −2", "x = 2, y = 4"],
        answerIndex: 1,
        explanation:
          "Make the y coefficients match: multiply the first by 3 ({{9x + 6y = 48}}) and the second by 2 ({{10x - 6y = 28}}). The signs are different, so add: {{19x = 76}}, x = 4. Then 12 + 2y = 16, so y = 2. Check: 20 − 6 = 14 ✓. x = 2, y = 5 satisfies only the first equation (10 − 15 ≠ 14). x = 4, y = −2 is a sign slip: 5 × 4 − 3 × (−2) = 26. x = 2, y = 4 swaps the values.",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "Neither variable has matching coefficients. Which one is easier to match — x (3 and 5) or y (2 and 3)?",
          "Scale both equations so the y terms become 6y and −6y.",
          "Opposite signs: add the equations to eliminate y.",
        ],
        strategy: "Eliminate a variable",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q10",
        question:
          "At the Science Centre, adult tickets cost $a and child tickets cost $c.\n\nAisha pays $45 for 2 adult and 3 child tickets. Ravi pays $43 for 3 adult and 1 child ticket.\n\nWhat is the cost of one child ticket?",
        options: ["$7", "$12", "$5.57", "$15"],
        answerIndex: 0,
        explanation:
          "Form the equations: {{2a + 3c = 45}} and {{3a + c = 43}}. From the second, {{c = 43 - 3a}}. Substitute: {{2a + 3(43 - 3a) = 45}}, so {{129 - 7a = 45}}, a = 12 and c = 43 − 36 = 7. Check: 24 + 21 = 45 ✓. $12 is the adult price (or what you get by swapping the 2 and 3 when forming the equations). $5.57 comes from swapping the two totals. $15 is 45 ÷ 3, which ignores the adults Aisha paid for.",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "Write one equation for Aisha and one for Ravi.",
          "Ravi's equation has just 1c — rearrange it to c = …",
          "Substitute that into Aisha's equation and solve for a first.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q11",
        question:
          "Priya is 3 times as old as her brother Jun. In 6 years' time, Priya will be twice as old as Jun.\n\nHow old is Jun now?",
        options: ["18", "12", "6", "0"],
        answerIndex: 2,
        explanation:
          "Let Jun be j now, so Priya is 3j. In 6 years: {{3j + 6 = 2(j + 6)}}, so {{3j + 6 = 2j + 12}} and j = 6. (Priya is 18; in 6 years they are 24 and 12 ✓.) 18 is Priya's age. 12 comes from 3j = 2(j + 6) — adding 6 years to Jun but forgetting Priya ages too. 0 comes from 3j + 6 = 2j + 6, multiplying only the j by 2.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "Let Jun's age now be j. Write Priya's age now in terms of j.",
          "Both of them get 6 years older. Write both future ages.",
          "Priya's future age = 2 × Jun's future age. Use a bracket.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q12",
        question: "Make a the subject of {{3a + b = ac + 5}}.",
        options: [
          "{{a = (b - 5)/(3 - c)}}",
          "{{a = (5 - b)/(3 + c)}}",
          "{{a = (5 - b)/3 - c}}",
          "{{a = (5 - b)/(3 - c)}}",
        ],
        answerIndex: 3,
        explanation:
          "Collect the a terms on the left: {{3a - ac = 5 - b}}. Factorise: {{a(3 - c) = 5 - b}}. Divide: {{a = (5 - b)/(3 - c)}}. {{(b - 5)/(3 - c)}} has a sign slip moving b and 5. {{(5 - b)/(3 + c)}} moves ac across without changing its sign. {{(5 - b)/3 - c}} tries to divide by 3 and then 'take away c' — you must factorise a out first.",
        difficulty: "core",
        guideRef: "rearranging-twice",
        hints: [
          "a appears twice. Get both a terms on the same side.",
          "Take a out as a common factor.",
          "Divide both sides by the bracket.",
        ],
        strategy: "Collect, factorise, divide",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q13",
        question: "Make x the subject of {{y = sqrt((2x + 1)/(x - 3))}}.",
        options: [
          "{{x = (3y^2 + 1)/(y^2 - 2)}}",
          "{{x = (3y + 1)/(y - 2)}}",
          "{{x = (3y^2 - 1)/(y^2 - 2)}}",
          "{{x = (3y^2 + 1)/(2 - y^2)}}",
        ],
        answerIndex: 0,
        explanation:
          "Square: {{y^2 = (2x + 1)/(x - 3)}}. Multiply up: {{y^2 x - 3y^2 = 2x + 1}}. Collect x terms: {{y^2 x - 2x = 3y^2 + 1}}. Factorise and divide: {{x = (3y^2 + 1)/(y^2 - 2)}}. {{(3y + 1)/(y - 2)}} forgets to square y when removing the root. {{(3y^2 - 1)/(y^2 - 2)}} slips a sign moving the 1. {{(3y^2 + 1)/(2 - y^2)}} is the negative of the right answer — a sign error collecting the x terms.",
        difficulty: "challenge",
        guideRef: "rearranging-twice",
        hints: [
          "Get rid of the square root first. What is the inverse of a square root?",
          "Now clear the fraction by multiplying both sides by (x − 3).",
          "Collect the two x terms, factorise out x, then divide.",
        ],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q14",
        question:
          "Solve the simultaneous equations\n\n    {{x + y + z = 2}}\n    {{2x + 3y - z = 13}}\n    {{3x - y + 2z = -4}}\n\nWhat is the value of y?",
        options: ["y = 1", "y = 3", "y = −2", "y = −3"],
        answerIndex: 1,
        explanation:
          "Eliminate z twice. First + second: {{3x + 4y = 15}}. Twice the second + third: {{7x + 5y = 22}}. Now 7 × (3x + 4y = 15) gives 21x + 28y = 105 and 3 × (7x + 5y = 22) gives 21x + 15y = 66. Subtract: 13y = 39, y = 3. Then x = 1 and z = −2; check: 3 − 3 − 4 = −4 ✓. 1 and −2 are the values of x and z — a slip in matching the answers to the letters. −3 comes from subtracting the wrong way round (13y = −39).",
        difficulty: "challenge",
        guideRef: "simultaneous-three",
        hints: [
          "Pick one variable to eliminate from two different pairs of equations. z has coefficients 1, −1 and 2 — that's easiest.",
          "Adding the first two equations removes z. Which multiple of the second, added to the third, removes z?",
          "You now have two equations in x and y — solve them as usual.",
          "Back-substitute to find the others and check all three equations.",
        ],
        strategy: "Eliminate a variable",
      },
      {
        kind: "mcq",
        id: "solving-equations-m1-q15",
        question:
          "The simultaneous equations\n\n    {{2x + 3y = 7}}\n    {{4x + ky = 5}}\n\nhave **no** solution. What is the value of k?",
        options: ["k = −6", "k = 1.5", "k = 6", "There is no such value of k"],
        answerIndex: 2,
        explanation:
          "Double the first equation: {{4x + 6y = 14}}. If k = 6, the second says {{4x + 6y = 5}} — the same left-hand side can't equal both 14 and 5, so there is no solution (the lines are parallel and never meet). k = −6 comes from a sign slip; it gives lines that cross. k = 1.5 inverts the scale factor (it halves the 3 instead of doubling it). 'No such value' is wrong because parallel lines with different intercepts really do exist here.",
        difficulty: "challenge",
        guideRef: "simultaneous-linear",
        hints: [
          "Each equation is a straight line. When do two lines have no point in common?",
          "Parallel lines: the second equation's left side must be a multiple of the first's.",
          "The x coefficient doubled from 2 to 4. What must happen to the 3?",
        ],
        strategy: "Draw a diagram",
      },
    ],
  },
  {
    id: "solving-equations-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "solving-equations-m2-q01",
        question: "Solve {{7 - 2x = 3x - 8}}.",
        options: ["x = −3", "x = 3", "x = 15", "x = −{{1/5}}"],
        answerIndex: 1,
        explanation:
          "Add 2x to both sides: {{7 = 5x - 8}}. Add 8: {{15 = 5x}}, so x = 3. Check: 7 − 6 = 1 and 9 − 8 = 1 ✓. x = −3 is a sign slip (5x = −15). x = 15 comes from subtracting 2x instead of adding it, leaving x = 15. x = −{{1/5}} comes from 7 − 8 = 5x — the −8 moved across without changing sign.",
        difficulty: "warmup",
        guideRef: "linear-equations",
        hints: ["Add 2x to both sides so the x terms are only on the right, where they stay positive."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q02",
        question: "Solve {{(2x - 1)/5 = 3}}.",
        options: ["x = 7", "x = 2", "x = 0.8", "x = 8"],
        answerIndex: 3,
        explanation:
          "Multiply both sides by 5: {{2x - 1 = 15}}. Add 1: 2x = 16, so x = 8. x = 7 comes from subtracting 1 instead of adding (2x = 14). x = 2 forgets to multiply by 5 (2x − 1 = 3). x = 0.8 divides 3 by 5 instead of multiplying.",
        difficulty: "warmup",
        guideRef: "linear-equations",
        hints: ["The whole of (2x − 1) is divided by 5. Undo that first by multiplying both sides by 5."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q03",
        question: "Make x the subject of {{y = 3x^2 - 5}}, where x > 0.",
        options: [
          "{{x = sqrt((y + 5)/3)}}",
          "{{x = sqrt(y + 5)/3}}",
          "{{x = sqrt((y - 5)/3)}}",
          "{{x = (y + 5)/6}}",
        ],
        answerIndex: 0,
        explanation:
          "Add 5: {{y + 5 = 3x^2}}. Divide by 3: {{x^2 = (y + 5)/3}}. Square root (x > 0): {{x = sqrt((y + 5)/3)}}. {{sqrt(y + 5)/3}} takes the root before dividing by 3 — the order is wrong. {{sqrt((y - 5)/3)}} moves the −5 without changing sign. {{(y + 5)/6}} 'undoes' the square by halving — the inverse of squaring is square-rooting.",
        difficulty: "warmup",
        guideRef: "rearranging-once",
        hints: ["Undo in reverse order: the last thing done to x was 'subtract 5', and the first was 'square'."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q04",
        question: "Solve the simultaneous equations\n\n    {{y = 2x + 1}}\n    {{x + y = 7}}",
        options: ["x = 5, y = 2", "x = 6, y = 13", "x = 2, y = 5", "x = 3, y = 4"],
        answerIndex: 2,
        explanation:
          "Substitute y = 2x + 1 into the second: {{x + 2x + 1 = 7}}, so 3x = 6 and x = 2. Then y = 2 × 2 + 1 = 5. x = 5, y = 2 swaps the values. x = 6 forgets to divide 3x = 6 by 3. x = 3, y = 4 fits x + y = 7 but not y = 2x + 1 (2 × 3 + 1 = 7, not 4).",
        difficulty: "warmup",
        guideRef: "simultaneous-linear",
        hints: ["The first equation tells you exactly what y is. Replace y in the second equation with (2x + 1)."],
        strategy: "Substitute",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q05",
        question:
          "The diagram shows a rectangle. The perimeter of the rectangle is 44 cm.\n\nWork out the **area** of the rectangle.",
        diagram: `<svg viewBox="0 0 340 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Rectangle with length labelled (3x − 2) cm and width labelled (x + 4) cm"><rect x="0" y="0" width="340" height="230" fill="#ffffff"/><rect x="40" y="45" width="208" height="144" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><text x="144" y="35" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937">(3x − 2) cm</text><text x="256" y="121" font-size="13" font-family="sans-serif" fill="#1f2937">(x + 4) cm</text></svg>`,
        options: ["427.75 cm²", "135 cm²", "117 cm²", "22 cm²"],
        answerIndex: 2,
        explanation:
          "Perimeter: {{2(3x - 2) + 2(x + 4) = 44}}, so {{8x + 4 = 44}} and x = 5. The sides are 3 × 5 − 2 = 13 cm and 5 + 4 = 9 cm, so the area is 13 × 9 = 117 cm². 427.75 cm² comes from (3x − 2) + (x + 4) = 44 — adding each side only once. 135 cm² uses 3x = 15 for the length and forgets the −2. 22 cm² adds the two sides (13 + 9) instead of multiplying.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "A rectangle has **four** sides — two of each length.",
          "Form and solve an equation for x, then work out the two side lengths.",
          "Area = length × width.",
        ],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q06",
        question: "Solve {{4(x - 3) - 2(x - 5) = 3(x + 1)}}.",
        options: ["x = −5", "x = −25", "x = −3", "x = 5"],
        answerIndex: 0,
        explanation:
          "Expand: {{4x - 12 - 2x + 10 = 3x + 3}}, so {{2x - 2 = 3x + 3}}. Subtract 2x and 3: x = −5. Check: 4(−8) − 2(−10) = −12 and 3(−4) = −12 ✓. x = −25 expands −2(x − 5) as −2x − 10 (missing that −2 × −5 = +10). x = −3 expands 3(x + 1) as 3x + 1. x = 5 drops the sign at the last step.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "Expand all three brackets first. Be careful with the −2 in front of the second bracket.",
          "−2 × −5 = ?",
          "Collect x terms on the side where they stay positive, or just be careful with the signs.",
        ],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q07",
        question:
          "The time T for one swing of a pendulum of length l is {{T = 2pi sqrt(l/g)}}. Make l the subject of the formula.",
        options: [
          "{{l = (gT^2)/(2pi)}}",
          "{{l = (T^2)/(4 g pi^2)}}",
          "{{l = (gT)/(2pi)}}",
          "{{l = (gT^2)/(4 pi^2)}}",
        ],
        answerIndex: 3,
        explanation:
          "Divide by 2π: {{T/(2pi) = sqrt(l/g)}}. Square **both** sides: {{T^2/(4 pi^2) = l/g}}. Multiply by g: {{l = (gT^2)/(4 pi^2)}}. {{(gT^2)/(2pi)}} squares T but not the 2π. {{(gT)/(2pi)}} forgets to square at all. {{(T^2)/(4 g pi^2)}} divides by g when it should multiply (l is divided by g, so undo it by multiplying).",
        difficulty: "core",
        guideRef: "rearranging-once",
        hints: [
          "Peel the layers: first undo the 2π, then the square root, then the ÷ g.",
          "When you square {{T/(2pi)}}, everything is squared — top and bottom.",
          "l is divided by g; the inverse is multiply by g.",
        ],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q08",
        question: "Make p the subject of {{5(p - q) = r(2p + 1)}}.",
        options: [
          "{{p = (r - 5q)/(5 - 2r)}}",
          "{{p = (r + 5q)/(5 - 2r)}}",
          "{{p = (r + 5q)/(5 + 2r)}}",
          "{{p = (r + 5q)/(3r)}}",
        ],
        answerIndex: 1,
        explanation:
          "Expand: {{5p - 5q = 2pr + r}}. Collect p terms: {{5p - 2pr = r + 5q}}. Factorise: {{p(5 - 2r) = r + 5q}}, so {{p = (r + 5q)/(5 - 2r)}}. {{(r - 5q)/(5 - 2r)}} moves −5q across without changing sign. {{(r + 5q)/(5 + 2r)}} moves 2pr without changing sign. {{(r + 5q)/(3r)}} treats 5p − 2pr as 3pr — they are not like terms.",
        difficulty: "core",
        guideRef: "rearranging-twice",
        hints: [
          "Expand both brackets so you can see every p term.",
          "Gather the p terms on one side, the rest on the other.",
          "5p − 2pr = p(5 − 2r). Now divide.",
        ],
        strategy: "Collect, factorise, divide",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q09",
        question: "Solve the simultaneous equations\n\n    {{y = 2x - 1}}\n    {{3x + 2y = 19}}",
        options: ["x = 3, y = 5", "x = 5, y = 3", "x = {{20/7}}, y = {{33/7}}", "x = 2, y = 3"],
        answerIndex: 0,
        explanation:
          "Substitute: {{3x + 2(2x - 1) = 19}}, so {{7x - 2 = 19}}, 7x = 21 and x = 3. Then y = 6 − 1 = 5. Check: 9 + 10 = 19 ✓. x = 5, y = 3 swaps the values. The {{20/7}} answer comes from 3x + 4x − 1 = 19 — only multiplying the 2x by 2, not the −1. x = 2, y = 3 fits y = 2x − 1 but not the second equation (6 + 6 = 12).",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "Replace y in the second equation by (2x − 1) — keep the bracket.",
          "2(2x − 1) = 4x − 2.",
        ],
        strategy: "Substitute",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q10",
        question:
          "At a hawker centre, 3 kopi and 2 kaya toasts cost $8.30. 2 kopi and 3 kaya toasts cost $8.20.\n\nHow much do **1 kopi and 1 kaya toast** cost together?",
        options: ["$1.70", "$16.50", "$3.30", "$0.10"],
        answerIndex: 2,
        explanation:
          "Add the equations: {{5k + 5t = 16.50}}, so {{k + t = 3.30}} — you don't even need the separate prices! (They are k = $1.70 and t = $1.60.) $16.50 forgets to divide by 5. $0.10 comes from subtracting the equations, which gives k − t, the *difference*. $1.70 is the price of the kopi alone.",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "Write two equations using k and t.",
          "The question asks for k + t, not k and t separately. Is there a quick way to get k + t?",
          "Look at what happens if you add the two equations.",
        ],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q11",
        question: "Solve {{x/3 + x/4 = 14}}.",
        options: ["x = 49", "x = 24", "x = 2", "x = 98"],
        answerIndex: 1,
        explanation:
          "Multiply every term by 12: {{4x + 3x = 168}}, so 7x = 168 and x = 24. Check: 8 + 6 = 14 ✓. x = 49 comes from adding tops and bottoms ({{2x/7 = 14}}). x = 2 forgets to multiply the 14 by 12. x = 98 comes from {{x/7 = 14}} — adding the denominators.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "What is the LCD of 3 and 4?",
          "Multiply **every** term, including 14, by 12.",
        ],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q12",
        question: "Make u the subject of {{v^2 = u^2 + 2as}}, where u > 0.",
        options: [
          "{{u = v - sqrt(2as)}}",
          "{{u = v - 2as}}",
          "{{u = sqrt(v^2 + 2as)}}",
          "{{u = sqrt(v^2 - 2as)}}",
        ],
        answerIndex: 3,
        explanation:
          "Subtract 2as: {{u^2 = v^2 - 2as}}. Square root: {{u = sqrt(v^2 - 2as)}}. {{v - sqrt(2as)}} square-roots each term separately — but {{sqrt(a - b) != sqrt(a) - sqrt(b)}}. {{v - 2as}} roots only the {{v^2}}. {{sqrt(v^2 + 2as)}} moves 2as across without changing sign.",
        difficulty: "core",
        guideRef: "rearranging-once",
        hints: [
          "Get {{u^2}} on its own first.",
          "You must square-root the **whole** side at once. Is {{sqrt(25 - 9)}} the same as 5 − 3?",
        ],
        strategy: "Check with numbers",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q13",
        question: "Make x the subject of {{(x + a)/b = (x - c)/d}}.",
        options: [
          "{{x = (ad + bc)/(d - b)}}",
          "{{x = (ad - bc)/(b - d)}}",
          "{{x = (ad + bc)/(b + d)}}",
          "{{x = (ad + bc)/(b - d)}}",
        ],
        answerIndex: 3,
        explanation:
          "Cross-multiply: {{d(x + a) = b(x - c)}}, so {{dx + ad = bx - bc}}. Collect x on the right (to keep it positive): {{ad + bc = bx - dx = x(b - d)}}. So {{x = (ad + bc)/(b - d)}}. {{(ad + bc)/(d - b)}} is the negative of this — a sign slip when collecting. {{(ad - bc)/(b - d)}} mishandles −bc. {{(ad + bc)/(b + d)}} adds dx when moving it.\n\nCheck with numbers: a = 1, b = 2, c = 3, d = 4 gives {{(x + 1)/2 = (x - 3)/4}}, so 2x + 2 = x − 3 and x = −5; the formula gives {{(4 + 6)/(2 - 4) = -5}} ✓.",
        difficulty: "challenge",
        guideRef: "rearranging-twice",
        hints: [
          "Clear both fractions by multiplying both sides by bd.",
          "Expand, then get all the x terms on one side.",
          "Factorise out x. Then test your answer with small numbers for a, b, c and d.",
        ],
        strategy: "Check with numbers",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q14",
        question:
          "At a hawker stall, Mei notes these orders (p = roti prata, t = teh, k = kaya toast, all in dollars):\n\n    {{2p + t + k = 6.20}}\n    {{p + 2t + k = 5.90}}\n    {{p + t + 2k = 6.70}}\n\nWhat is the price of one kaya toast?",
        options: ["$4.70", "$2.00", "$3.35", "$1.50"],
        answerIndex: 1,
        explanation:
          "Add all three equations: {{4p + 4t + 4k = 18.80}}, so {{p + t + k = 4.70}}. Subtract this from the third equation: k = 6.70 − 4.70 = $2.00. (Similarly p = $1.50 and t = $1.20.) $4.70 is the price of one of each item. $3.35 is 6.70 ÷ 2, which ignores the p and t in the third equation. $1.50 is the roti prata price.",
        difficulty: "challenge",
        guideRef: "simultaneous-three",
        hints: [
          "The equations are very symmetric. What do you get if you add all three?",
          "Adding gives 4(p + t + k). So what is p + t + k?",
          "The third equation is (p + t + k) + k. Subtract.",
        ],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "solving-equations-m2-q15",
        question:
          "Solve the simultaneous equations\n\n    {{x + 2y + z = 9}}   (1)\n    {{2x - y + 3z = 12}}   (2)\n    {{3x + y - 2z = -3}}   (3)\n\nArjun says the answer is x = 2, y = 1, z = 5. What is the correct value of z?",
        options: ["z = 4", "z = 5", "z = 2", "z = −4"],
        answerIndex: 0,
        explanation:
          "Eliminate y twice. (1) + 2 × (2): {{5x + 7z = 33}}. (2) + (3): {{5x + z = 9}}. Subtract: 6z = 24, so z = 4. Then 5x = 5, x = 1, and from (1) y = 2. Check (3): 3 + 2 − 8 = −3 ✓. Arjun's z = 5 satisfies (1) and (3) but not (2) — he didn't check all three. z = 2 is the value of y. z = −4 is a sign slip subtracting the two new equations.",
        difficulty: "challenge",
        guideRef: "simultaneous-three",
        hints: [
          "First test Arjun's answer in all three equations. Which one fails?",
          "Eliminate y: (1) + 2 × (2), and (2) + (3).",
          "Solve the resulting pair of equations in x and z.",
          "Find y last and check all three equations.",
        ],
        strategy: "Check by substituting",
      },
    ],
  },
  {
    id: "solving-equations-m3",
    title: "MCQ Paper 3 — Exam style",
    questions: [
      {
        kind: "mcq",
        id: "solving-equations-m3-q01",
        question: "Solve {{4(3 - x) = 2x - 9}}.",
        options: ["x = 7", "x = 10.5", "x = 3.5", "x = 0.5"],
        answerIndex: 2,
        explanation:
          "Expand: {{12 - 4x = 2x - 9}}. Add 4x and 9: {{21 = 6x}}, so x = 3.5. Check: 4 × (−0.5) = −2 and 7 − 9 = −2 ✓. x = 7 expands 4(3 − x) as 12 − x. x = 10.5 comes from −2x = −21 (subtracting 2x instead of adding). x = 0.5 comes from 12 − 9 = 6x, a sign slip with the −9.",
        difficulty: "warmup",
        guideRef: "linear-equations",
        hints: ["Expand the bracket: both the 3 and the −x are multiplied by 4."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q02",
        question: "Make k the subject of {{m = sqrt((k + 1)/3)}}.",
        options: ["{{k = 3m^2 - 1}}", "{{k = 3m - 1}}", "{{k = m^2/3 - 1}}", "{{k = 3m^2 + 1}}"],
        answerIndex: 0,
        explanation:
          "Square: {{m^2 = (k + 1)/3}}. Multiply by 3: {{3m^2 = k + 1}}. Subtract 1: {{k = 3m^2 - 1}}. {{3m - 1}} forgets to square to remove the root. {{m^2/3 - 1}} divides by 3 when k + 1 was *divided* by 3 (so you multiply). {{3m^2 + 1}} adds 1 instead of subtracting.",
        difficulty: "warmup",
        guideRef: "rearranging-once",
        hints: ["The outermost operation is the square root — undo it first by squaring both sides."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q03",
        question:
          "The graph shows the lines {{y = 2x - 1}} and {{x + y = 5}}.\n\nUse the graph to solve the simultaneous equations {{y = 2x - 1}} and {{x + y = 5}}.",
        diagram: `<svg viewBox="0 0 320 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of the lines y = 2x − 1 and x + y = 5 for x from −1 to 6, crossing at one point"><rect x="0" y="0" width="320" height="320" fill="#ffffff"/><line x1="20" y1="300" x2="20" y2="20" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="300" x2="300" y2="300" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="300" x2="60" y2="20" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="260" x2="300" y2="260" stroke="#e2e8f0" stroke-width="1"/><line x1="100" y1="300" x2="100" y2="20" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="220" x2="300" y2="220" stroke="#e2e8f0" stroke-width="1"/><line x1="140" y1="300" x2="140" y2="20" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="180" x2="300" y2="180" stroke="#e2e8f0" stroke-width="1"/><line x1="180" y1="300" x2="180" y2="20" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="140" x2="300" y2="140" stroke="#e2e8f0" stroke-width="1"/><line x1="220" y1="300" x2="220" y2="20" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="100" x2="300" y2="100" stroke="#e2e8f0" stroke-width="1"/><line x1="260" y1="300" x2="260" y2="20" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="60" x2="300" y2="60" stroke="#e2e8f0" stroke-width="1"/><line x1="300" y1="300" x2="300" y2="20" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="20" x2="300" y2="20" stroke="#e2e8f0" stroke-width="1"/><line x1="20" y1="260" x2="300" y2="260" stroke="#334155" stroke-width="1.5"/><line x1="60" y1="300" x2="60" y2="20" stroke="#334155" stroke-width="1.5"/><text x="100" y="274" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">1</text><text x="54" y="224" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">1</text><text x="140" y="274" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">2</text><text x="54" y="184" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">2</text><text x="180" y="274" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">3</text><text x="54" y="144" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">3</text><text x="220" y="274" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">4</text><text x="54" y="104" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">4</text><text x="260" y="274" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">5</text><text x="54" y="64" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">5</text><text x="300" y="274" font-size="11" text-anchor="middle" font-family="sans-serif" fill="#334155">6</text><text x="54" y="24" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">6</text><text x="54" y="274" font-size="11" text-anchor="end" font-family="sans-serif" fill="#334155">0</text><text x="296" y="254" font-size="13" font-style="italic" font-family="sans-serif" fill="#334155">x</text><text x="66" y="32" font-size="13" font-style="italic" font-family="sans-serif" fill="#334155">y</text><line x1="60" y1="300" x2="200" y2="20" stroke="#2563eb" stroke-width="2.5"/><line x1="20" y1="20" x2="300" y2="300" stroke="#dc2626" stroke-width="2.5"/><text x="208" y="36" font-size="12" font-family="sans-serif" fill="#1d4ed8" stroke="#ffffff" stroke-width="3" paint-order="stroke">y = 2x − 1</text><text x="244" y="220" font-size="12" font-family="sans-serif" fill="#b91c1c" stroke="#ffffff" stroke-width="3" paint-order="stroke">x + y = 5</text></svg>`,
        options: ["x = 3, y = 2", "x = 0, y = 5", "x = 0.5, y = 0", "x = 2, y = 3"],
        answerIndex: 3,
        explanation:
          "The solution is where the lines **cross**: (2, 3), so x = 2, y = 3. Check: 2 × 2 − 1 = 3 and 2 + 3 = 5 ✓. x = 3, y = 2 reads the coordinates the wrong way round. (0, 5) is where x + y = 5 meets the y-axis, and (0.5, 0) is where y = 2x − 1 meets the x-axis — each lies on only one line.",
        difficulty: "warmup",
        guideRef: "simultaneous-linear",
        hints: ["A point that satisfies both equations lies on both lines. Where is that?"],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q04",
        question: "The sum of three consecutive even numbers is 78. What is the largest of the three numbers?",
        options: ["26", "28", "24", "27"],
        answerIndex: 1,
        explanation:
          "Call them n, n + 2 and n + 4. Then {{3n + 6 = 78}}, so n = 24 and the numbers are 24, 26, 28. The largest is 28. 26 is the middle number (78 ÷ 3). 24 is the smallest. 27 uses n, n + 1, n + 2 — consecutive numbers, but not consecutive **even** numbers.",
        difficulty: "warmup",
        guideRef: "linear-equations",
        hints: ["If the smallest even number is n, what is the next even number?"],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q05",
        question: "Solve {{(3x - 2)/4 - (2x + 1)/3 = 1/6}}.\n\nShow clear algebraic working.",
        options: ["x = 4", "x = {{61/6}}", "x = 11", "x = 12"],
        answerIndex: 3,
        explanation:
          "Multiply every term by 12: {{3(3x - 2) - 4(2x + 1) = 2}}. Expand: {{9x - 6 - 8x - 4 = 2}}, so {{x - 10 = 2}} and x = 12. Check: {{34/4 - 25/3 = 102/12 - 100/12 = 2/12 = 1/6}} ✓. x = 4 uses −4(2x + 1) = −8x + 4 (sign slip). x = {{61/6}} forgets to multiply the {{1/6}} by 12. x = 11 multiplies {{1/6}} by 6 instead of 12.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "The LCD of 4, 3 and 6 is 12.",
          "Every term gets multiplied by 12 — including {{1/6}}, which becomes 2.",
          "Bracket the second numerator: −4(2x + 1) = −8x − 4.",
        ],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q06",
        question: "Make e the subject of {{3e + 4 = (5e + f)/g}}.",
        options: [
          "{{e = (f - 4g)/(5 - 3g)}}",
          "{{e = (f - 4g)/(3g - 5)}}",
          "{{e = (f + 4g)/(3g - 5)}}",
          "{{e = (f - 4)/(3g - 5)}}",
        ],
        answerIndex: 1,
        explanation:
          "Multiply by g: {{3eg + 4g = 5e + f}}. Collect e terms: {{3eg - 5e = f - 4g}}. Factorise: {{e(3g - 5) = f - 4g}}, so {{e = (f - 4g)/(3g - 5)}}. {{(f - 4g)/(5 - 3g)}} is the negative of the answer (a sign slip collecting). {{(f + 4g)/(3g - 5)}} moves 4g without changing sign. {{(f - 4)/(3g - 5)}} forgets to multiply the 4 by g — every term on the left gets multiplied.",
        difficulty: "core",
        guideRef: "rearranging-twice",
        hints: [
          "Clear the fraction: multiply **both** terms on the left by g.",
          "Collect the e terms on one side.",
          "Factorise out e and divide by the bracket.",
        ],
        strategy: "Collect, factorise, divide",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q07",
        question: "Solve the simultaneous equations\n\n    {{4x + 3y = 5}}\n    {{6x - 5y = 17}}",
        options: ["x = 2, y = −1", "x = 0.5, y = −1", "x = 0.5, y = 1", "x = −1, y = 3"],
        answerIndex: 0,
        explanation:
          "Match the x coefficients: ×3 gives {{12x + 9y = 15}}, ×2 gives {{12x - 10y = 34}}. Subtract: {{19y = -19}}, so y = −1. Then 4x − 3 = 5, x = 2. Check: 12 + 5 = 17 ✓. x = 0.5 comes from substituting y = −1 as 4x + 3 = 5 (losing the negative). x = 0.5, y = 1 comes from subtracting the wrong way round on one side only (19y = 34 − 15), then back-substituting; it fits the first equation but 3 − 5 ≠ 17. x = −1, y = 3 satisfies the first equation but not the second (−6 − 15 ≠ 17).",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "Choose a variable to eliminate. The LCM of 4 and 6 is 12.",
          "Both x terms are +12x, so subtract the equations — subtract **both** sides the same way.",
          "Substitute y back carefully: 3 × (−1) = −3.",
        ],
        strategy: "Eliminate a variable",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q08",
        question:
          "The straight line {{y = mx + c}} passes through the points (1, 5) and (3, 11). Find the values of m and c.",
        options: ["m = 2, c = 3", "m = 3, c = 8", "m = 3, c = 2", "m = −3, c = 8"],
        answerIndex: 2,
        explanation:
          "Substitute each point: {{m + c = 5}} and {{3m + c = 11}}. Subtract: 2m = 6, so m = 3, and c = 5 − 3 = 2. Check: 3 × 3 + 2 = 11 ✓. m = 2, c = 3 swaps the values. c = 8 comes from 3m + c = 11 with c = 11 − 3 (forgetting to multiply m by 3). m = −3 is a sign slip subtracting the equations.",
        difficulty: "core",
        guideRef: "simultaneous-linear",
        hints: [
          "Each point gives an equation when you substitute its x and y into y = mx + c.",
          "Both equations contain +c. Subtract to eliminate it.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q09",
        question:
          "The angles of a quadrilateral are {{x°}}, {{2x°}}, {{(3x - 20)°}} and {{(x + 30)°}}.\n\nWork out the size of the largest angle.",
        options: ["150°", "130°", "100°", "50°"],
        answerIndex: 1,
        explanation:
          "Angles in a quadrilateral add to 360°: {{7x + 10 = 360}}, so x = 50. The angles are 50°, 100°, 130° and 80° (total 360° ✓). The largest is 3 × 50 − 20 = 130°. 150° is 3x, forgetting the −20. 100° is 2x, which is not the largest. 50° is x itself.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "What is the angle sum of any quadrilateral?",
          "Collect: x + 2x + 3x + x = 7x, and −20 + 30 = +10.",
          "Substitute x back into every angle before choosing the largest.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q10",
        question:
          "The kinetic energy E joules of a cyclist of mass m kg moving at v m/s is {{E = 1/2 m v^2}}.\n\nRearrange the formula to find v when E = 900 and m = 72.",
        options: ["2.5", "25", "3.54 (to 3 s.f.)", "5"],
        answerIndex: 3,
        explanation:
          "Rearrange: {{2E = m v^2}}, {{v^2 = (2E)/m}}, {{v = sqrt((2E)/m)}}. Substitute: {{v = sqrt(1800/72) = sqrt(25) = 5}} m/s. 2.5 comes from {{v = sqrt(E/(2m))}} — dividing by {{1/2}} the wrong way. 25 forgets the square root. 3.54 is {{sqrt(900/72)}}, ignoring the {{1/2}}.",
        difficulty: "core",
        guideRef: "rearranging-once",
        hints: [
          "Get rid of the {{1/2}} first: multiply both sides by 2.",
          "Then divide by m and take the square root.",
          "Check: does {{1/2 * 72 * v^2}} give 900 with your v?",
        ],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q11",
        question:
          "Solve the simultaneous equations\n\n    {{x + y + z = 11}}\n    {{x - y = 1}}\n    {{y - z = 2}}\n\nWhat is the value of x?",
        options: ["x = 5", "x = 4", "x = 2", "x = 6"],
        answerIndex: 0,
        explanation:
          "Write everything in terms of y: x = y + 1 and z = y − 2. Substitute into the first: {{(y + 1) + y + (y - 2) = 11}}, so 3y − 1 = 11 and y = 4. Then x = 5 and z = 2. Check: 5 + 4 + 2 = 11 ✓. 4 and 2 are the values of y and z. 6 comes from x = y + 2 — mixing up which equation links which pair.",
        difficulty: "core",
        guideRef: "simultaneous-three",
        hints: [
          "Two of the equations link y to the other letters. Write x and z in terms of y.",
          "Substitute both into the first equation — now it has only y.",
        ],
        strategy: "Substitute",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q12",
        question:
          "Hana solves {{(x + 1)/2 - (x - 3)/5 = 2}}. Her working is:\n\n    Line 1:   5(x + 1) − 2(x − 3) = 20\n    Line 2:   5x + 5 − 2x − 6 = 20\n    Line 3:   3x − 1 = 20\n    Line 4:   x = 7\n\nWhich statement is correct?",
        options: [
          "Line 1 is wrong; the correct solution is x = −3",
          "Line 4 is wrong; the correct solution is x = {{19/3}}",
          "Line 2 is wrong; the correct solution is x = 3",
          "There is no error; x = 7 is correct",
        ],
        answerIndex: 2,
        explanation:
          "Line 1 is right: multiplying every term by 10 gives 20 on the right. Line 2 is wrong: −2 × −3 = **+6**, so it should be {{5x + 5 - 2x + 6 = 20}}, giving 3x + 11 = 20 and x = 3. Check: {{4/2 - 0/5 = 2}} ✓. 'Line 1, x = −3' comes from not multiplying the 2 by 10. 'Line 4' is wrong because 3x − 1 = 20 really does give x = 7 — the error is earlier. x = 7 fails the check: {{8/2 - 4/5 = 3.2}}, not 2.",
        difficulty: "core",
        guideRef: "linear-equations",
        hints: [
          "Check x = 7 in the original equation first. Is it right?",
          "Go line by line. Check every sign when a bracket is expanded.",
          "What is −2 × −3?",
        ],
        strategy: "Spot the error",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q13",
        question: "Make x the subject of {{x^2 y = 3x^2 + 4}}, where x > 0 and y > 3.",
        options: [
          "{{x = 4/sqrt(y - 3)}}",
          "{{x = 2/(y - 3)}}",
          "{{x = 2/sqrt(y - 3)}}",
          "{{x = 2/sqrt(y + 3)}}",
        ],
        answerIndex: 2,
        explanation:
          "Collect the {{x^2}} terms: {{x^2 y - 3x^2 = 4}}. Factorise: {{x^2 (y - 3) = 4}}, so {{x^2 = 4/(y - 3)}} and {{x = 2/sqrt(y - 3)}} (since x > 0). {{4/sqrt(y - 3)}} square-roots the bottom but not the top. {{2/(y - 3)}} square-roots the top but not the bottom. {{2/sqrt(y + 3)}} moves {{3x^2}} across without changing sign.",
        difficulty: "challenge",
        guideRef: "rearranging-twice",
        hints: [
          "Treat {{x^2}} as the 'thing' you are collecting — it appears twice.",
          "Factorise out {{x^2}} and divide.",
          "Square-root the **whole** fraction: {{sqrt(4/(y - 3))}}.",
        ],
        strategy: "Collect, factorise, divide",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q14",
        question:
          "A two-digit number has digits that add up to 11. When the digits are reversed, the number increases by 27.\n\nWhat is the original number?",
        options: ["47", "74", "56", "38"],
        answerIndex: 0,
        explanation:
          "Let the tens digit be a and the units digit b, so the number is 10a + b. Then {{a + b = 11}} and {{(10b + a) - (10a + b) = 27}}, i.e. {{9(b - a) = 27}}, so b − a = 3. Solving: b = 7, a = 4, giving 47 (and 74 − 47 = 27 ✓). 74 is the reversed number — it *decreases* when reversed. 56 reverses to 65, an increase of only 9. 38 reverses to 83, an increase of 45.",
        difficulty: "challenge",
        guideRef: "simultaneous-linear",
        hints: [
          "A two-digit number with tens digit a and units digit b is worth 10a + b, not ab.",
          "Write the reversed number the same way and form an equation from 'increases by 27'.",
          "The second equation simplifies beautifully — divide by 9.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "solving-equations-m3-q15",
        question:
          "The curve {{y = ax^2 + bx + c}} passes through the points (1, 4), (2, 9) and (−1, 6).\n\nFind the value of a.",
        options: ["a = −1", "a = 3", "a = {{4/3}}", "a = 2"],
        answerIndex: 3,
        explanation:
          "Substituting gives three equations: {{a + b + c = 4}}, {{4a + 2b + c = 9}}, {{a - b + c = 6}}. First − third: 2b = −2, so b = −1. Second − first: {{3a + b = 5}}, so 3a = 6 and a = 2. Then c = 3. Check (2, 9): 8 − 2 + 3 = 9 ✓. −1 and 3 are b and c. {{4/3}} comes from a sign slip giving b = +1, so 3a = 4.",
        difficulty: "challenge",
        guideRef: "simultaneous-three",
        hints: [
          "Each point gives one equation in a, b and c. Write all three.",
          "Two of the equations differ only in the sign of b. Subtract them.",
          "Now eliminate c using another pair.",
          "Check your a, b, c in all three original equations.",
        ],
        strategy: "Eliminate a variable",
      },
    ],
  },
];
