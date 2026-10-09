// Differentiation — MCQ papers (3 × 15). Options are shuffled at display time.
import type { Paper } from "../../types.ts";

export const mcqPapers: Paper[] = [
  // ===================================================================== M1
  {
    id: "calculus-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "calculus-m1-q01",
        question:
          "The diagram shows the curve {{y = x^2}} and the straight line that touches it at P(1, 1). For this curve, what does the value of {{dy/dx}} at P tell you?",
        diagram: `<svg viewBox="0 0 300 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The parabola y equals x squared with a tangent line touching it at the point P(1, 1)"><rect x="0" y="0" width="300" height="240" fill="#ffffff"/><line x1="10" y1="200" x2="290" y2="200" stroke="#334155" stroke-width="1.2"/><line x1="100" y1="235" x2="100" y2="8" stroke="#334155" stroke-width="1.2"/><text x="284" y="215" font-size="12" font-family="sans-serif" fill="#1f2937">x</text><text x="106" y="16" font-size="12" font-family="sans-serif" fill="#1f2937">y</text><text x="88" y="214" font-size="11" font-family="sans-serif" fill="#1f2937">O</text><line x1="170" y1="197" x2="170" y2="203" stroke="#334155"/><text x="166" y="216" font-size="11" font-family="sans-serif" fill="#1f2937">1</text><line x1="240" y1="197" x2="240" y2="203" stroke="#334155"/><text x="236" y="216" font-size="11" font-family="sans-serif" fill="#1f2937">2</text><path d="M16.0 149.6 L25.2 160.0 L34.4 169.2 L43.6 177.2 L52.8 184.1 L61.9 189.7 L71.1 194.0 L80.3 197.2 L89.5 199.2 L98.7 200.0 L107.9 199.6 L117.1 197.9 L126.3 195.1 L135.4 191.0 L144.6 185.8 L153.8 179.3 L163.0 171.6 L172.2 162.8 L181.4 152.7 L190.6 141.4 L199.8 128.9 L208.9 115.2 L218.1 100.3 L227.3 84.2 L236.5 66.9 L245.7 48.4 L254.9 28.7 L261.0 14.9" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="107" y1="228" x2="268" y2="67" stroke="#2563eb" stroke-width="1.6"/><circle cx="170" cy="165" r="4" fill="#dc2626"/><text x="176" y="182" font-size="12" font-family="sans-serif" fill="#1f2937">P(1, 1)</text><text x="180" y="40" font-size="12" font-family="sans-serif" fill="#1f2937">y = x²</text></svg>`,
        options: [
          "The y-intercept of the tangent at P",
          "The gradient of the chord from O to P",
          "The gradient of the curve at P — the gradient of the tangent there",
          "The y-coordinate of P",
        ],
        answerIndex: 2,
        explanation:
          "{{dy/dx}} is the **gradient function**: put in x = 1 and you get the gradient of the curve at P, which is the gradient of the tangent drawn there ({{dy/dx = 2x = 2}}). The chord OP has gradient 1 — a chord only *approximates* the curve's gradient. The y-coordinate (1) comes from the equation of the curve, not from {{dy/dx}}.",
        difficulty: "warmup",
        guideRef: "gradient-of-a-curve",
        hints: ["A curve's steepness changes from point to point. Which straight line has the same steepness as the curve exactly at P?"],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q02",
        question: "Given {{y = x^5}}, find {{dy/dx}}.",
        options: ["{{x^4}}", "{{5x^4}}", "{{5x^6}}", "{{x^6/6}}"],
        answerIndex: 1,
        explanation:
          "Bring the power down and reduce it by one: {{x^5 -> 5x^4}}. {{x^4}} forgets to multiply by the old power. {{5x^6}} increases the power instead of reducing it, and {{x^6/6}} is *integration* — the reverse process.",
        difficulty: "warmup",
        guideRef: "differentiating-powers",
        hints: ["For {{y = x^n}}, {{dy/dx = nx^(n-1)}}. What are n and n − 1 here?"],
        strategy: "Use the rule",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q03",
        question: "Given {{y = 3x^2 - 7x + 4}}, find {{dy/dx}}.",
        options: ["{{6x - 3}}", "{{3x - 7}}", "{{6x^2 - 7}}", "{{6x - 7}}"],
        answerIndex: 3,
        explanation:
          "Differentiate term by term: {{3x^2 -> 6x}}, {{-7x -> -7}}, and the constant 4 → 0 (a constant has zero gradient). So {{dy/dx = 6x - 7}}. {{6x - 3}} keeps the 4 and adds it on. {{3x - 7}} lowers the power of {{3x^2}} without multiplying by 2, and {{6x^2 - 7}} multiplies by 2 without lowering the power.",
        difficulty: "warmup",
        guideRef: "differentiating-powers",
        hints: ["Do one term at a time. What happens to a constant when you differentiate it?"],
        strategy: "Split into parts",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q04",
        question: "Find the gradient of the curve {{y = x^3 - 2x}} at the point where x = 2.",
        options: ["4", "10", "12", "34"],
        answerIndex: 1,
        explanation:
          "{{dy/dx = 3x^2 - 2}}, so at x = 2 the gradient is {{3(2)^2 - 2 = 12 - 2 = 10}}. 4 is the *y-coordinate* ({{8 - 4}}) — substituting into y instead of {{dy/dx}}. 12 forgets the −2, and 34 squares {{3 * 2}} instead of just 2.",
        difficulty: "warmup",
        guideRef: "tangents",
        hints: ["Differentiate first, then substitute x = 2 into {{dy/dx}} — not into y."],
        strategy: "Differentiate, then substitute",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q05",
        question: "Given {{y = 4/x}}, find {{dy/dx}}.",
        options: ["{{4/x^2}}", "{{-4/x}}", "{{-4/x^2}}", "−4"],
        answerIndex: 2,
        explanation:
          "Rewrite as a power first: {{y = 4x^(-1)}}. Then {{dy/dx = -1 * 4x^(-2) = -4/x^2}}. {{4/x^2}} loses the minus sign from bringing down −1. {{-4/x}} brings the power down but doesn't reduce it. −4 comes from changing the power −1 to 0 — adding 1 instead of subtracting 1.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "You can't use the power rule on a fraction directly. Write {{4/x}} as {{4x^n}} — what is n?",
          "{{4/x = 4x^(-1)}}. Now bring the −1 down.",
          "The new power is −1 − 1 = −2.",
        ],
        strategy: "Rewrite in index form first",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q06",
        question: "Given {{y = 6/x^3}}, find {{dy/dx}}.",
        options: ["{{-18/x^2}}", "{{2/x^2}}", "{{18/x^4}}", "{{-18/x^4}}"],
        answerIndex: 3,
        explanation:
          "{{6/x^3 = 6x^(-3)}}, so {{dy/dx = -3 * 6x^(-4) = -18x^(-4) = -18/x^4}}. {{-18/x^2}} adds 1 to the power (−3 → −2) instead of subtracting 1. {{18/x^4}} loses the minus sign from bringing down −3. {{2/x^2}} differentiates only the denominator ({{6/(3x^2)}}) — you must rewrite as a power of x first.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "Write {{6/x^3}} as {{6x^n}}. What is n?",
          "{{6/x^3 = 6x^(-3)}}. Bring the −3 down and subtract 1 from the power.",
          "−3 − 1 = −4, and a negative power means 'one over'.",
        ],
        strategy: "Rewrite in index form first",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q07",
        question: "Given {{y = (2x + 1)(x - 3)}}, find {{dy/dx}}.",
        options: ["{{4x - 5}}", "2", "{{4x - 7}}", "{{4x + 5}}"],
        answerIndex: 0,
        explanation:
          "Expand first: {{y = 2x^2 - 6x + x - 3 = 2x^2 - 5x - 3}}, so {{dy/dx = 4x - 5}}. 2 comes from differentiating each bracket and multiplying the results ({{2 * 1}}) — you can't differentiate a product bracket-by-bracket. {{4x - 7}} comes from an expansion slip (−6x − x), and {{4x + 5}} from a sign slip in the middle term.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "The power rule works on a sum of terms like {{ax^n}}. Is this in that form yet?",
          "Expand the brackets first.",
          "{{(2x + 1)(x - 3) = 2x^2 - 5x - 3}}. Now differentiate term by term.",
        ],
        strategy: "Expand first",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q08",
        question:
          "P is the point (1, 4) on the curve {{y = x^2 + 3x}}. Q is a nearby point on the curve with x-coordinate 1 + h. The table shows the gradient of the chord PQ.\n\n| h | 1 | 0.1 | 0.01 | 0.001 |\n|---|---|---|---|---|\n| gradient of PQ | 6 | 5.1 | 5.01 | 5.001 |\n\nWhat is the gradient of the curve at P?",
        options: ["6", "5.001", "5", "4"],
        answerIndex: 2,
        explanation:
          "As Q slides towards P (h → 0), the chord turns into the tangent. The chord gradients are {{5 + h}}, which approach **5** — matching {{dy/dx = 2x + 3 = 5}} at x = 1. 5.001 is still a chord (h is not yet 0). 6 is a chord with h = 1, and 4 is the y-coordinate of P.",
        difficulty: "core",
        guideRef: "gradient-of-a-curve",
        hints: [
          "What happens to the chord PQ as h gets smaller and smaller?",
          "Look for the value the chord gradients are closing in on — the limit, not any one entry.",
        ],
        strategy: "Find a pattern",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q09",
        question: "Find the coordinates of the point on the curve {{y = x^2 - 6x + 1}} where the gradient is 4.",
        options: ["(1, −4)", "(5, 56)", "(4, −7)", "(5, −4)"],
        answerIndex: 3,
        explanation:
          "Set the gradient equal to 4: {{2x - 6 = 4}}, so x = 5. Then {{y = 25 - 30 + 1 = -4}}, giving (5, −4). (1, −4) comes from solving 2x = 6 − 4 (a sign slip). (4, −7) substitutes the gradient 4 as if it were x. (5, 56) uses +30 instead of −30 when finding y.",
        difficulty: "core",
        guideRef: "tangents",
        hints: [
          "The gradient is given by {{dy/dx}}. What equation does 'the gradient is 4' give you?",
          "Solve {{2x - 6 = 4}} for x.",
          "You still need y: put your x back into the equation of the curve.",
        ],
        strategy: "Form an equation",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q10",
        question: "Find the equation of the tangent to the curve {{y = x^3 + 2x}} at the point where x = 1.",
        options: ["{{y = 5x + 3}}", "{{y = 5x - 2}}", "{{y = 5x - 5}}", "{{y = -1/5 x + 16/5}}"],
        answerIndex: 1,
        explanation:
          "At x = 1, y = 1 + 2 = 3 and {{dy/dx = 3x^2 + 2 = 5}}. Using {{y - y_1 = m(x - x_1)}}: {{y - 3 = 5(x - 1)}}, so {{y = 5x - 2}}. {{y = 5x + 3}} wrongly uses the y-coordinate 3 as the intercept. {{y = 5x - 5}} forgets the {{y_1}}. {{y = -1/5 x + 16/5}} is the **normal**, not the tangent.",
        difficulty: "core",
        guideRef: "tangents",
        hints: [
          "You need a point and a gradient. Find y and {{dy/dx}} at x = 1.",
          "The point is (1, 3) and the gradient is 5.",
          "Use {{y - 3 = 5(x - 1)}} and rearrange.",
        ],
        strategy: "Point + gradient → line",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q11",
        question: "Find the coordinates of the turning point of the curve {{y = x^2 - 8x + 3}}.",
        options: ["(−4, 51)", "(8, 3)", "(4, −13)", "(0, 3)"],
        answerIndex: 2,
        explanation:
          "At a turning point {{dy/dx = 0}}: {{2x - 8 = 0}}, so x = 4 and {{y = 16 - 32 + 3 = -13}}. (−4, 51) comes from a sign slip solving {{2x - 8 = 0}}. (8, 3) comes from differentiating {{x^2}} as x (giving x − 8 = 0). (0, 3) is the y-intercept — where the curve crosses the y-axis, not where it turns.",
        difficulty: "core",
        guideRef: "turning-points",
        hints: [
          "What is the gradient at the bottom of a valley?",
          "Solve {{dy/dx = 0}}.",
          "Then substitute x back into the curve's equation for y.",
        ],
        strategy: "Set the gradient to zero",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q12",
        question:
          "The curve {{y = x^3 - 3x}} has a stationary point at (1, −2). Which statement about this point is correct?",
        options: [
          "It is a minimum, because {{(d^2y)/(dx^2) = 6 > 0}} there",
          "It is a maximum, because {{(d^2y)/(dx^2) = 6 > 0}} there",
          "It is a maximum, because its y-coordinate is negative",
          "It is neither — {{dy/dx = 0}} means a point of inflection",
        ],
        answerIndex: 0,
        explanation:
          "{{dy/dx = 3x^2 - 3}} and {{(d^2y)/(dx^2) = 6x}}, which is 6 at x = 1. Positive second derivative means the gradient is increasing — it goes from negative to positive — so the curve has a **minimum** (a ∪ shape). Reading '+ means maximum' gets the rule backwards. The sign of the y-coordinate says nothing about the shape, and {{dy/dx = 0}} alone doesn't tell you the type of stationary point.",
        difficulty: "core",
        guideRef: "turning-points",
        hints: [
          "Find the second derivative and evaluate it at x = 1.",
          "If {{(d^2y)/(dx^2) > 0}}, the gradient is increasing as you pass through the point. What shape is that?",
          "Check: the gradient at x = 0.5 is negative and at x = 1.5 is positive.",
        ],
        strategy: "Check the gradient either side",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q13",
        question:
          "A particle moves in a straight line. Its displacement from O after t seconds is s metres, where {{s = t^3 - 15t^2 + 63t}}. Find the acceleration of the particle when it is **first** at rest.",
        options: ["−12 m/s²", "12 m/s²", "0 m/s²", "81 m/s²"],
        answerIndex: 0,
        explanation:
          "{{v = (ds)/(dt) = 3t^2 - 30t + 63 = 3(t - 3)(t - 7)}}, so it is at rest at t = 3 and t = 7. First at rest means t = 3. {{a = (dv)/(dt) = 6t - 30 = -12}} m/s² (negative: the velocity is decreasing). 12 is the acceleration at t = 7 (the *second* time at rest). 0 assumes 'at rest' means zero acceleration — it means zero *velocity*. 81 is the displacement at t = 3, in metres.",
        difficulty: "challenge",
        guideRef: "kinematics",
        hints: [
          "'At rest' means which quantity is zero?",
          "Differentiate s to get v, then solve v = 0.",
          "Take the smaller time, then differentiate v to get a and substitute.",
        ],
        strategy: "Differentiate twice",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q14",
        question:
          "Hana makes an open box from a square sheet of card of side 12 cm. She cuts a square of side x cm from each corner and folds up the sides, so the volume is {{V = x(12 - 2x)^2}} cm³. Find the maximum possible volume.",
        options: ["108 cm³", "256 cm³", "0 cm³", "128 cm³"],
        answerIndex: 3,
        explanation:
          "Expand: {{V = 144x - 48x^2 + 4x^3}}, so {{(dV)/(dx) = 144 - 96x + 12x^2 = 12(x - 2)(x - 6)}}. x = 6 gives V = 0 (no base left — the minimum), so x = 2 and {{V = 2 * 8^2 = 128}}. 0 comes from choosing the wrong root. 256 comes from modelling the base as {{(12 - x)}} — but a square is cut from *both* ends of each side. 108 is a guess at x = 3 without differentiating.",
        difficulty: "challenge",
        guideRef: "turning-points",
        hints: [
          "Expand V into powers of x so you can differentiate.",
          "Solve {{(dV)/(dx) = 0}} — you'll get two values of x.",
          "Which value of x makes sense for a box? What happens to the base when x = 6?",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "calculus-m1-q15",
        question:
          "The normal to the curve {{y = x^2}} at the point (2, 4) meets the x-axis at Q. Find the x-coordinate of Q.",
        options: ["1", "3", "18", "−14"],
        answerIndex: 2,
        explanation:
          "Tangent gradient {{dy/dx = 2x = 4}}, so the normal gradient is {{-1/4}}. Normal: {{y - 4 = -1/4 (x - 2)}}. At y = 0: {{-4 = -1/4 (x - 2)}}, so x − 2 = 16 and x = 18. 1 is where the *tangent* meets the x-axis. 3 uses gradient −4 (negative but not reciprocal), and −14 uses {{1/4}} (reciprocal but not negative).",
        difficulty: "challenge",
        guideRef: "normals",
        hints: [
          "The normal is perpendicular to the tangent. What is the tangent's gradient at x = 2?",
          "Perpendicular gradients multiply to −1, so the normal's gradient is {{-1/4}}.",
          "Write the normal's equation, then put y = 0.",
        ],
        strategy: "Use the perpendicular-gradient rule",
      },
    ],
  },
  // ===================================================================== M2
  {
    id: "calculus-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "calculus-m2-q01",
        question: "Given {{y = 2x^4 - x^3 + 5x}}, find {{dy/dx}}.",
        options: ["{{8x^3 - 3x^2 + 5x}}", "{{8x^3 - 3x^2 + 5}}", "{{8x^3 - 3x^2}}", "{{2x^3 - x^2 + 5}}"],
        answerIndex: 1,
        explanation:
          "Term by term: {{2x^4 -> 8x^3}}, {{-x^3 -> -3x^2}}, {{5x -> 5}}. So {{dy/dx = 8x^3 - 3x^2 + 5}}. Keeping {{5x}} forgets that {{x = x^1}} becomes {{x^0 = 1}}. Dropping it treats 5x like a constant. {{2x^3 - x^2 + 5}} lowers each power without multiplying by it.",
        difficulty: "warmup",
        guideRef: "differentiating-powers",
        hints: ["What is the derivative of {{5x}}? Think of the gradient of the line {{y = 5x}}."],
        strategy: "Split into parts",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q02",
        question: "The diagram shows the curve {{y = x^3 - 3x}} with four points A, B, C and D marked on it. At which point is the gradient of the curve **negative**?",
        diagram: `<svg viewBox="0 0 320 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="The cubic curve y equals x cubed minus 3x, with points A at x = -1.7, B at the peak x = -1, C at the origin and D at the trough x = 1"><rect x="0" y="0" width="320" height="240" fill="#ffffff"/><line x1="10" y1="120" x2="310" y2="120" stroke="#334155" stroke-width="1.2"/><line x1="160" y1="232" x2="160" y2="8" stroke="#334155" stroke-width="1.2"/><text x="302" y="134" font-size="12" font-family="sans-serif" fill="#1f2937">x</text><text x="166" y="16" font-size="12" font-family="sans-serif" fill="#1f2937">y</text><line x1="40" y1="117" x2="40" y2="123" stroke="#334155"/><text x="32" y="136" font-size="11" font-family="sans-serif" fill="#1f2937">−2</text><line x1="100" y1="117" x2="100" y2="123" stroke="#334155"/><text x="92" y="136" font-size="11" font-family="sans-serif" fill="#1f2937">−1</text><line x1="220" y1="117" x2="220" y2="123" stroke="#334155"/><text x="217" y="136" font-size="11" font-family="sans-serif" fill="#1f2937">1</text><line x1="280" y1="117" x2="280" y2="123" stroke="#334155"/><text x="277" y="136" font-size="11" font-family="sans-serif" fill="#1f2937">2</text><path d="M31.0 207.2 L37.5 179.8 L43.9 156.0 L50.4 135.5 L56.8 118.2 L63.3 103.9 L69.7 92.3 L76.2 83.4 L82.6 76.9 L89.0 72.6 L95.5 70.4 L101.9 70.1 L108.4 71.4 L114.8 74.2 L121.3 78.3 L127.8 83.6 L134.2 89.7 L140.7 96.7 L147.1 104.1 L153.6 112.0 L160.0 120.0 L166.4 128.0 L172.9 135.9 L179.3 143.3 L185.8 150.3 L192.3 156.4 L198.7 161.7 L205.2 165.8 L211.6 168.6 L218.0 169.9 L224.5 169.6 L230.9 167.4 L237.4 163.1 L243.9 156.6 L250.3 147.7 L256.8 136.1 L263.2 121.8 L269.6 104.5 L276.1 84.0 L282.6 60.2 L289.0 32.8" fill="none" stroke="#1f2937" stroke-width="2"/><circle cx="58" cy="115.3" r="4" fill="#dc2626"/><text x="40" y="108" font-size="13" font-family="sans-serif" fill="#1f2937">A</text><circle cx="100" cy="70" r="4" fill="#dc2626"/><text x="95" y="60" font-size="13" font-family="sans-serif" fill="#1f2937">B</text><circle cx="160" cy="120" r="4" fill="#dc2626"/><text x="168" y="112" font-size="13" font-family="sans-serif" fill="#1f2937">C</text><circle cx="220" cy="170" r="4" fill="#dc2626"/><text x="215" y="190" font-size="13" font-family="sans-serif" fill="#1f2937">D</text></svg>`,
        options: ["A", "B", "C", "D"],
        answerIndex: 2,
        explanation:
          "At C the curve is heading downhill (left to right), so the gradient is negative: {{dy/dx = 3x^2 - 3 = -3}} at x = 0. At A the curve is climbing (gradient positive). B and D are turning points, where the gradient is 0. Don't confuse a *negative y-value* (D is below the axis) with a negative *gradient*.",
        difficulty: "warmup",
        guideRef: "gradient-of-a-curve",
        hints: ["Imagine walking along the curve from left to right. Where are you going downhill?"],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q03",
        question: "Find the gradient of the curve {{y = 5 - x^2}} at the point where x = −3.",
        options: ["6", "−6", "−4", "11"],
        answerIndex: 0,
        explanation:
          "{{dy/dx = -2x}}. At x = −3: {{-2(-3) = 6}}. −6 drops a minus sign when substituting. −4 is the y-coordinate ({{5 - 9}}). 11 keeps the constant 5 in the derivative ({{5 - 2(-3)}}).",
        difficulty: "warmup",
        guideRef: "tangents",
        hints: ["Differentiate (what happens to the 5?), then substitute x = −3 using brackets."],
        strategy: "Differentiate, then substitute",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q04",
        question:
          "A particle moves in a straight line so that its displacement, s metres, after t seconds is {{s = 4t^2 + 3t}}. Find its velocity when t = 2.",
        options: ["22 m/s", "8 m/s", "11 m/s", "19 m/s"],
        answerIndex: 3,
        explanation:
          "{{v = (ds)/(dt) = 8t + 3}}, so at t = 2, v = 19 m/s. 22 is the *displacement* at t = 2. 8 is the acceleration ({{(dv)/(dt)}}). 11 comes from {{4t + 3}} — lowering the power without multiplying by 2.",
        difficulty: "warmup",
        guideRef: "kinematics",
        hints: ["Velocity is the rate of change of displacement: {{v = (ds)/(dt)}}."],
        strategy: "Differentiate, then substitute",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q05",
        question: "Given {{y = (x^2 + 3)/x}}, find {{dy/dx}}.",
        options: ["2x", "{{1 + 3/x^2}}", "{{1 - 3/x}}", "{{1 - 3/x^2}}"],
        answerIndex: 3,
        explanation:
          "Split the fraction: {{y = x^2/x + 3/x = x + 3x^(-1)}}. Then {{dy/dx = 1 - 3x^(-2) = 1 - 3/x^2}}. 2x comes from differentiating top and bottom separately ({{2x/1}}) — not allowed. {{1 + 3/x^2}} loses the minus sign from the power −1. {{1 - 3/x}} brings the power down but doesn't reduce it.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "You can't differentiate the top and bottom separately. Can you split the fraction into two terms?",
          "Divide each term on top by x: {{x + 3/x}}.",
          "Write {{3/x}} as {{3x^(-1)}} and use the power rule.",
        ],
        strategy: "Split the fraction",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q06",
        question: "Find all the values of x at which the curve {{y = x^3 - 12x + 1}} has gradient 15.",
        options: ["x = 3 or x = −3", "x = 3 only", "x = 1 or x = −1", "{{x = 3sqrt(3)}} or {{x = -3sqrt(3)}}"],
        answerIndex: 0,
        explanation:
          "{{3x^2 - 12 = 15}} → {{3x^2 = 27}} → {{x^2 = 9}} → x = ±3. 'x = 3 only' forgets the negative square root. ±1 comes from {{3x^2 = 15 - 12}} (a sign slip moving the 12). {{±3sqrt(3)}} comes from {{x^2 = 27}} — forgetting to divide by 3.",
        difficulty: "core",
        guideRef: "tangents",
        hints: [
          "Set {{dy/dx}} equal to 15.",
          "Rearrange to get {{x^2}} on its own.",
          "A square root has two answers.",
        ],
        strategy: "Form an equation",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q07",
        question: "The curve {{y = 2x^3 - 9x^2 + 12x}} has two turning points. Which statement is correct?",
        options: [
          "Minimum at x = 1, maximum at x = 2",
          "Both turning points are maxima",
          "Maximum at x = 1, minimum at x = 2",
          "Maximum at x = −1, minimum at x = −2",
        ],
        answerIndex: 2,
        explanation:
          "{{dy/dx = 6x^2 - 18x + 12 = 6(x - 1)(x - 2)}}, so turning points at x = 1 and x = 2. {{(d^2y)/(dx^2) = 12x - 18}}: at x = 1 it is −6 (< 0, **maximum**); at x = 2 it is 6 (> 0, **minimum**). Swapping them reverses the second-derivative rule. A cubic with a positive {{x^3}} term has a max then a min, never two maxima. x = −1 and −2 come from a sign slip solving {{(x - 1)(x - 2) = 0}}.",
        difficulty: "core",
        guideRef: "turning-points",
        hints: [
          "Find {{dy/dx}} and factorise it — take out the common factor 6 first.",
          "Find {{(d^2y)/(dx^2)}} and test its sign at each x.",
          "Negative second derivative → the gradient is decreasing → a peak.",
        ],
        strategy: "Use the second derivative",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q08",
        question:
          "A particle moves in a straight line. Its velocity after t seconds is v m/s, where {{v = t^2 - 8t + 12}}. At what times is the particle at rest?",
        options: ["t = 4", "t = 2 and t = 6", "t = −2 and t = −6", "t = 12"],
        answerIndex: 1,
        explanation:
          "At rest means v = 0: {{t^2 - 8t + 12 = (t - 2)(t - 6) = 0}}, so t = 2 or t = 6. t = 4 solves {{(dv)/(dt) = 0}} — that's when the *acceleration* is zero (the velocity is at its minimum), not when the particle stops. −2 and −6 are sign slips (and negative times are before the motion starts). 12 is the velocity at t = 0, not a time.",
        difficulty: "core",
        guideRef: "kinematics",
        hints: [
          "Which quantity is zero when a particle is at rest?",
          "Solve v = 0 — it factorises.",
        ],
        strategy: "Form an equation",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q09",
        question: "Given {{y = x^4 - 2x^3}}, find {{(d^2y)/(dx^2)}}.",
        options: ["{{12x^2 - 12x}}", "{{4x^3 - 6x^2}}", "{{12x^2 - 6x}}", "{{24x - 12}}"],
        answerIndex: 0,
        explanation:
          "First derivative: {{dy/dx = 4x^3 - 6x^2}}. Differentiate again: {{(d^2y)/(dx^2) = 12x^2 - 12x}}. {{4x^3 - 6x^2}} stops after one differentiation. {{12x^2 - 6x}} lowers the power of {{-6x^2}} without multiplying by 2. {{24x - 12}} differentiates three times.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "{{(d^2y)/(dx^2)}} means differentiate, then differentiate the result again.",
          "Start with {{dy/dx = 4x^3 - 6x^2}}.",
        ],
        strategy: "Differentiate twice",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q10",
        question:
          "V litres is the volume of water in a tank t minutes after a tap is opened. When t = 5, {{(dV)/(dt) = -3}}. What does this tell you?",
        options: [
          "The volume of water in the tank is −3 litres when t = 5",
          "At t = 5 the volume is falling at a rate of 3 litres per minute",
          "The volume falls by 3 litres every minute from t = 0 onwards",
          "After 5 minutes the tank holds 3 litres less than at the start",
        ],
        answerIndex: 1,
        explanation:
          "A derivative is an **instantaneous rate of change**: {{(dV)/(dt) = -3}} at t = 5 means at that moment V is decreasing at 3 litres per minute. It is not the volume itself (that's V). It describes one instant, so it doesn't say the rate is the same for the whole time, and it doesn't measure the total change since the start.",
        difficulty: "core",
        guideRef: "gradient-of-a-curve",
        hints: [
          "{{(dV)/(dt)}} is the gradient of the graph of V against t. What are its units?",
          "The minus sign tells you the direction of change. Does the value describe one moment or the whole journey?",
        ],
        strategy: "Interpret the units",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q11",
        question: "The tangent to the curve {{y = 2x^2 - 3x + 4}} at the point where x = 2 crosses the y-axis at (0, c). Find c.",
        options: ["−6", "16", "4", "−4"],
        answerIndex: 3,
        explanation:
          "At x = 2: y = 8 − 6 + 4 = 6 and {{dy/dx = 4x - 3 = 5}}. Tangent: {{y - 6 = 5(x - 2)}}, so {{y = 5x - 4}} and c = −4. 16 uses {{(x + 2)}} instead of {{(x - 2)}}. −6 uses the y-coordinate 6 as the gradient. 4 is where the *curve* crosses the y-axis, not the tangent.",
        difficulty: "core",
        guideRef: "tangents",
        hints: [
          "Find the point of contact and the gradient there.",
          "The point is (2, 6) and the gradient is 5.",
          "Write {{y - 6 = 5(x - 2)}} and put x = 0.",
        ],
        strategy: "Point + gradient → line",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q12",
        question:
          "Priya has 36 m of fencing to make a rectangular herb garden against a long wall. The wall forms one side, so the fence makes the other three sides. The two sides perpendicular to the wall are each x m. Find the largest possible area of the garden.",
        options: ["162 m²", "81 m²", "324 m²", "18 m²"],
        answerIndex: 0,
        explanation:
          "The side parallel to the wall is {{36 - 2x}}, so {{A = x(36 - 2x) = 36x - 2x^2}}. {{(dA)/(dx) = 36 - 4x = 0}} gives x = 9, so the garden is 9 m by 18 m and A = 162 m². 81 m² is a 9 m square using fencing on all four sides — but the wall is free. 324 m² uses {{A = x(36 - x)}}, fencing only one side x. 18 is the *length* 36 − 2x, not the area.",
        difficulty: "core",
        guideRef: "turning-points",
        hints: [
          "Express the length parallel to the wall in terms of x.",
          "Write A in terms of x only, then differentiate.",
          "Solve {{(dA)/(dx) = 0}}, then work out the area — not just x.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q13",
        question:
          "A particle moves in a straight line from O. Its displacement after t seconds is s metres, where {{s = 2t^3 - 15t^2 + 36t}}. Find the total **distance** travelled in the first 3 seconds.",
        options: ["27 m", "29 m", "28 m", "55 m"],
        answerIndex: 1,
        explanation:
          "{{v = 6t^2 - 30t + 36 = 6(t - 2)(t - 3)}}, so the particle changes direction at t = 2. s(0) = 0, s(2) = 16 − 60 + 72 = 28, s(3) = 54 − 135 + 108 = 27. It goes out 28 m, then back 1 m: distance = 28 + 1 = **29 m**. 27 m is the *displacement* at t = 3. 28 m ignores the return leg. 55 m adds s(2) and s(3) as if both were separate journeys.",
        difficulty: "challenge",
        guideRef: "kinematics",
        hints: [
          "Distance and displacement differ when the particle turns round. When does v = 0?",
          "It stops at t = 2. Find s at t = 0, 2 and 3.",
          "Add the length of each leg: out to s(2), then back to s(3).",
        ],
        strategy: "Split into cases",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q14",
        question: "The curve {{y = x^3 + kx^2 + 24x}} has a stationary point where x = 2. Find the value of the constant k.",
        options: ["9", "−18", "−9", "−7"],
        answerIndex: 2,
        explanation:
          "{{dy/dx = 3x^2 + 2kx + 24}}. A stationary point at x = 2 means {{12 + 4k + 24 = 0}}, so 4k = −36 and k = −9. 9 is a sign slip. −18 forgets the 2 in {{2kx}} (12 + 2k + 24 = 0). −7 forgets the 3 in {{3x^2}} (4 + 4k + 24 = 0). Check: with k = −9, {{dy/dx = 3(x - 2)(x - 4)}}.",
        difficulty: "challenge",
        guideRef: "turning-points",
        hints: [
          "Differentiate, treating k as a number.",
          "'Stationary point at x = 2' means {{dy/dx = 0}} when x = 2.",
          "Substitute x = 2 into {{dy/dx}} and solve for k.",
        ],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "calculus-m2-q15",
        question:
          "The normal to the curve {{y = x^2}} at the point P(1, 1) meets the curve again at Q. Find the coordinates of Q.",
        options: ["(−3, 9)", "({{-3/2}}, {{9/4}})", "({{-1/2}}, {{1/4}})", "({{3/2}}, {{9/4}})"],
        answerIndex: 1,
        explanation:
          "At P, {{dy/dx = 2}}, so the normal gradient is {{-1/2}}: {{y = -1/2 x + 3/2}}. Solve with {{y = x^2}}: {{2x^2 + x - 3 = 0}}, {{(2x + 3)(x - 1) = 0}}. x = 1 is P, so Q has {{x = -3/2}}, {{y = 9/4}}. (−3, 9) uses gradient −2 (negative but not reciprocal). ({{-1/2}}, {{1/4}}) uses {{1/2}} (reciprocal but not negative). ({{3/2}}, {{9/4}}) is a sign slip in the root — it isn't on the normal.",
        difficulty: "challenge",
        guideRef: "normals",
        hints: [
          "Tangent gradient at P is 2. What is the normal's gradient?",
          "Write the normal's equation and set it equal to {{x^2}}.",
          "You already know one root: x = 1 (it's P). Use it to factorise.",
        ],
        strategy: "Use a known root",
      },
    ],
  },
  // ===================================================================== M3
  {
    id: "calculus-m3",
    title: "MCQ Paper 3 — Exam style",
    questions: [
      {
        kind: "mcq",
        id: "calculus-m3-q01",
        question: "Given {{y = x^3 + 4x^2 - 5}}, find {{dy/dx}}.",
        options: ["{{3x^2 + 8x - 5}}", "{{3x^2 + 4x}}", "{{3x^3 + 8x^2}}", "{{3x^2 + 8x}}"],
        answerIndex: 3,
        explanation:
          "{{x^3 -> 3x^2}}, {{4x^2 -> 8x}}, and the constant −5 → 0. So {{dy/dx = 3x^2 + 8x}}. Keeping −5 forgets constants have zero gradient. {{3x^2 + 4x}} lowers the power of {{4x^2}} without multiplying by 2. {{3x^3 + 8x^2}} multiplies by the power but doesn't reduce it.",
        difficulty: "warmup",
        guideRef: "differentiating-powers",
        hints: ["Multiply by the power, then reduce the power by 1 — and remember what happens to a constant."],
        strategy: "Split into parts",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q02",
        question: "The curve C has equation {{y = 2x^2 - x}}. The point P(2, 6) lies on C. Find the gradient of C at P.",
        options: ["3", "7", "6", "8"],
        answerIndex: 1,
        explanation:
          "{{dy/dx = 4x - 1}}, so at x = 2 the gradient is 8 − 1 = 7. 6 is the y-coordinate of P. 3 is the gradient of the line from O to P ({{6/2}}) — a chord, not the tangent. 8 forgets the −1.",
        difficulty: "warmup",
        guideRef: "tangents",
        hints: ["Differentiate, then substitute the x-coordinate of P."],
        strategy: "Differentiate, then substitute",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q03",
        question:
          "A particle moves along a straight line. Its velocity after t seconds is v m/s, where {{v = 3t^2 + 2t}}. Find its acceleration when t = 4.",
        options: ["56 m/s²", "24 m/s²", "26 m/s²", "14 m/s²"],
        answerIndex: 2,
        explanation:
          "{{a = (dv)/(dt) = 6t + 2}}, so at t = 4, a = 26 m/s². 56 is the *velocity* at t = 4. 24 forgets the +2 from {{2t}}. 14 comes from {{3t + 2}} — lowering the power of {{3t^2}} without multiplying by 2.",
        difficulty: "warmup",
        guideRef: "kinematics",
        hints: ["Acceleration is the rate of change of velocity: {{a = (dv)/(dt)}}."],
        strategy: "Differentiate, then substitute",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q04",
        question: "Which of these is **always** true at a turning point of a curve {{y = f(x)}}?",
        options: ["y = 0", "{{dy/dx = 0}}", "{{(d^2y)/(dx^2) = 0}}", "x = 0"],
        answerIndex: 1,
        explanation:
          "A turning point is where the curve stops going up and starts going down (or vice versa), so the tangent is horizontal: {{dy/dx = 0}}. y = 0 is where the curve meets the x-axis. x = 0 is the y-axis. {{(d^2y)/(dx^2)}} is usually *non-zero* at a turning point — its sign tells you max or min.",
        difficulty: "warmup",
        guideRef: "turning-points",
        hints: ["At the very top of a hill, what is the slope of the ground?"],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q05",
        question:
          "P(2, 8) and Q{{(2 + h, (2 + h)^3)}} lie on the curve {{y = x^3}}. Which expression is the gradient of the chord PQ, fully simplified?",
        options: ["{{12 + 6h + h^2}}", "{{h^2}}", "{{12 + 3h + h^2}}", "{{4 + 4h + h^2}}"],
        answerIndex: 0,
        explanation:
          "{{(2 + h)^3 = 8 + 12h + 6h^2 + h^3}}, so the gradient is {{(12h + 6h^2 + h^3)/h = 12 + 6h + h^2}}. As h → 0 this tends to 12, matching {{dy/dx = 3x^2 = 12}} at x = 2. {{h^2}} comes from expanding {{(2 + h)^3}} as {{8 + h^3}}. {{12 + 3h + h^2}} uses the wrong coefficient for {{h^2}} (it's 3 × 2 = 6). {{4 + 4h + h^2}} expands {{(2 + h)^2}} by mistake.",
        difficulty: "core",
        guideRef: "gradient-of-a-curve",
        hints: [
          "Gradient = change in y ÷ change in x. What is the change in x from P to Q?",
          "Expand {{(2 + h)^3}} carefully — it has four terms.",
          "Subtract 8, then divide every term by h.",
        ],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q06",
        question: "Given {{y = (3x - 2)^2}}, find {{dy/dx}}.",
        options: ["{{6x - 4}}", "{{18x}}", "{{18x - 12}}", "{{18x - 6}}"],
        answerIndex: 2,
        explanation:
          "Expand: {{y = 9x^2 - 12x + 4}}, so {{dy/dx = 18x - 12}}. {{6x - 4}} treats the bracket like {{x^2}} and forgets that the inside is 3x. {{18x}} comes from squaring each term ({{9x^2 + 4}}) and losing the middle term. {{18x - 6}} comes from a middle term of −6x instead of −12x.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "The power rule needs separate terms like {{ax^n}}. Expand first.",
          "{{(3x - 2)^2 = (3x - 2)(3x - 2)}} — there is a middle term.",
        ],
        strategy: "Expand first",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q07",
        question: "Find the equation of the tangent to the curve {{y = x^3 - 4x + 2}} at the point where x = −1.",
        options: ["{{y = -x + 6}}", "{{y = 4 - x}}", "{{y = x + 6}}", "{{y = -x + 5}}"],
        answerIndex: 1,
        explanation:
          "At x = −1: y = −1 + 4 + 2 = 5 and {{dy/dx = 3x^2 - 4 = -1}}. Tangent: {{y - 5 = -1(x + 1)}}, so {{y = 4 - x}}. {{y = -x + 6}} uses {{(x - 1)}} instead of {{(x + 1)}}. {{y = x + 6}} is the **normal** (gradient +1). {{y = -x + 5}} uses the y-coordinate as the intercept.",
        difficulty: "core",
        guideRef: "tangents",
        hints: [
          "Find y and {{dy/dx}} at x = −1.",
          "The point is (−1, 5) and the gradient is −1.",
          "In {{y - y_1 = m(x - x_1)}}, {{x - (-1) = x + 1}}.",
        ],
        strategy: "Point + gradient → line",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q08",
        question:
          "A particle moves in a straight line with displacement s metres from O after t seconds, where {{s = t^3 - 9t^2 + 24t}}. Which statement describes the particle at t = 3.5?",
        options: [
          "It is moving in the positive direction and speeding up",
          "It is moving in the negative direction and speeding up",
          "It is at rest",
          "It is moving in the negative direction and slowing down",
        ],
        answerIndex: 3,
        explanation:
          "{{v = 3t^2 - 18t + 24}}: at t = 3.5, v = 36.75 − 63 + 24 = −2.25, so it moves in the **negative** direction. {{a = 6t - 18 = 3}}, positive. Velocity and acceleration have **opposite signs**, so the speed is decreasing — it is slowing down. 'Speeding up' assumes positive acceleration always means speeding up; that's only true when v is also positive.",
        difficulty: "core",
        guideRef: "kinematics",
        hints: [
          "Find v and a at t = 3.5. The sign of v gives the direction.",
          "v = −2.25 and a = 3. Is the push with the motion or against it?",
          "Same signs → speeding up; opposite signs → slowing down.",
        ],
        strategy: "Interpret the signs",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q09",
        question: "Find the minimum value of {{y = x^2 + 16/x}} for x > 0.",
        options: ["2", "8", "12", "{{8 + 4sqrt(2)}}"],
        answerIndex: 2,
        explanation:
          "{{y = x^2 + 16x^(-1)}}, so {{dy/dx = 2x - 16/x^2}}. Set to 0: {{2x^3 = 16}}, {{x^3 = 8}}, x = 2. Then y = 4 + 8 = **12**. 2 is the x-coordinate, not the minimum *value*. 8 is {{x^3}}. {{8 + 4sqrt(2)}} comes from differentiating {{16/x}} as {{-16/x}} (not lowering the power), giving {{x^2 = 8}}.",
        difficulty: "core",
        guideRef: "turning-points",
        hints: [
          "Write {{16/x}} as {{16x^(-1)}} before differentiating.",
          "Set {{dy/dx = 0}} and multiply through by {{x^2}}.",
          "The question asks for the minimum value of y, not x.",
        ],
        strategy: "Rewrite in index form first",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q10",
        question: "Find the gradient of the normal to the curve {{y = 2x^3}} at the point (1, 2).",
        options: ["−6", "{{1/6}}", "6", "{{-1/6}}"],
        answerIndex: 3,
        explanation:
          "{{dy/dx = 6x^2 = 6}} at x = 1, so the tangent gradient is 6 and the normal gradient is {{-1/6}} (product −1). −6 is negative but not reciprocal. {{1/6}} is reciprocal but not negative. 6 is the tangent's gradient.",
        difficulty: "core",
        guideRef: "normals",
        hints: [
          "The normal is perpendicular to the tangent. Find the tangent's gradient first.",
          "Perpendicular gradients multiply to give −1.",
        ],
        strategy: "Use the perpendicular-gradient rule",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q11",
        question:
          "The curve {{y = ax^2 + bx}} passes through the point (1, 5), and its gradient at that point is 8. Find the values of a and b.",
        options: ["a = 2, b = 3", "a = 4, b = 1", "a = −3, b = 11", "a = 3, b = 2"],
        answerIndex: 3,
        explanation:
          "Through (1, 5): a + b = 5. Gradient {{dy/dx = 2ax + b}}, so 2a + b = 8. Subtract: a = 3, then b = 2. a = 2, b = 3 swaps the values. a = 4, b = 1 solves 2a = 8 ignoring b. a = −3, b = 11 mixes up the conditions (a + b = 8 and 2a + b = 5) — putting the gradient into y.",
        difficulty: "core",
        guideRef: "tangents",
        hints: [
          "There are two unknowns, so you need two equations. One comes from the point, one from the gradient.",
          "Substitute (1, 5) into y; substitute x = 1 into {{dy/dx}} and set it to 8.",
          "Solve a + b = 5 and 2a + b = 8 simultaneously.",
        ],
        strategy: "Form simultaneous equations",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q12",
        question:
          "Ravi throws a ball vertically upwards. Its height after t seconds is h metres, where {{h = 20t - 5t^2}}. Find the maximum height of the ball.",
        options: ["20 m", "2 m", "0 m", "60 m"],
        answerIndex: 0,
        explanation:
          "At the top the ball is momentarily at rest: {{v = (dh)/(dt) = 20 - 10t = 0}}, so t = 2 and h = 40 − 20 = **20 m**. 2 is the time, not the height. 0 m comes from differentiating {{5t^2}} as 5t (t = 4, when it's back on the ground). 60 m adds the {{5t^2}} term instead of subtracting it.",
        difficulty: "core",
        guideRef: "kinematics",
        hints: [
          "What is the ball's velocity at its highest point?",
          "Set {{(dh)/(dt) = 0}} and solve for t.",
          "Substitute that t back into h.",
        ],
        strategy: "Set the gradient to zero",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q13",
        question:
          "The normal to the curve {{y = x^2 - 4x + 7}} at the point (3, 4) meets the x-axis at A and the y-axis at B. Find the area of triangle OAB, where O is the origin.",
        options: ["1", "25", "{{30 1/4}}", "{{6 1/4}}"],
        answerIndex: 2,
        explanation:
          "{{dy/dx = 2x - 4 = 2}} at x = 3, so the normal gradient is {{-1/2}}: {{y - 4 = -1/2 (x - 3)}}, i.e. {{x + 2y = 11}}. A = (11, 0), B = (0, 5.5), area = {{1/2 * 11 * 5.5 = 30 1/4}}. 1 uses the *tangent* {{y = 2x - 2}}. 25 uses gradient −2 (no reciprocal). {{6 1/4}} uses {{+1/2}} (no sign change).",
        difficulty: "challenge",
        guideRef: "normals",
        hints: [
          "Find the gradient of the tangent at (3, 4), then the normal.",
          "Write the normal in the form ax + by = c — the intercepts are then easy.",
          "Put y = 0 for A and x = 0 for B. The triangle is right-angled at O.",
        ],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q14",
        question:
          "A closed cylindrical tin has volume {{128pi}} cm³. Its surface area is {{A = 2pi r^2 + (256pi)/r}} cm², where r cm is the radius. Find the minimum surface area, in terms of π.",
        options: ["160π cm²", "128π cm²", "64π cm²", "96π cm²"],
        answerIndex: 3,
        explanation:
          "{{(dA)/(dr) = 4pi r - (256pi)/r^2 = 0}} gives {{r^3 = 64}}, r = 4. Then {{A = 2pi(16) + (256pi)/4 = 32pi + 64pi = 96pi}}. {{160pi}} comes from differentiating {{(256pi)/r}} as {{-(256pi)/r}} (giving r = 8). {{128pi}} is the volume, not the area. {{64pi}} is only the curved surface — it forgets the two circular ends.",
        difficulty: "challenge",
        guideRef: "turning-points",
        hints: [
          "Write {{(256pi)/r}} as {{256pi r^(-1)}} so you can differentiate.",
          "Set {{(dA)/(dr) = 0}} and solve for r.",
          "Substitute r back into A — both terms.",
        ],
        strategy: "Rewrite in index form first",
      },
      {
        kind: "mcq",
        id: "calculus-m3-q15",
        question:
          "P(1, 1) lies on the curve {{y = x^3}}. The tangent at P meets the y-axis at T and the normal at P meets the y-axis at N. Find the length TN.",
        options: ["6", "{{10/3}}", "{{8/3}}", "{{2/3}}"],
        answerIndex: 1,
        explanation:
          "{{dy/dx = 3x^2 = 3}} at P. Tangent: {{y = 3x - 2}}, so T = (0, −2). Normal gradient {{-1/3}}: {{y - 1 = -1/3 (x - 1)}}, so {{y = -1/3 x + 4/3}} and N = (0, {{4/3}}). TN = {{4/3 - (-2) = 10/3}}. 6 uses normal gradient −3. {{8/3}} uses {{+1/3}}. {{2/3}} subtracts 2 instead of adding — distance across the x-axis adds.",
        difficulty: "challenge",
        guideRef: "normals",
        hints: [
          "Find the tangent's gradient at P, then the normal's.",
          "For each line, put x = 0 to find where it meets the y-axis.",
          "T is below the x-axis and N is above it — how do you find the distance between them?",
        ],
        strategy: "Draw a diagram",
      },
    ],
  },
];
