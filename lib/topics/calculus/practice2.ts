// ---------------------------------------------------------------------------
// Differentiation — Practice Papers 3 and 4.
// Paper 3: mixed practice across every section (mostly auto-marked, 3 written).
// Paper 4: exam style, modelled on Edexcel 4MA1 Higher calculus questions —
//          contexts, multi-step, "show that", exact and 3 s.f. answers.
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "calculus-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "calculus-p3-q01",
        question: "{{y = 6x^4 + 2x^3 - 9x + 11}}\n\nFind {{dy/dx}}.",
        answer: { type: "expression", expr: "24x^3+6x^2-9", display: "{{dy/dx = 24x^3 + 6x^2 - 9}}" },
        traps: [
          {
            spec: { type: "expression", expr: "24x^3+6x^2+2" },
            feedback: "The constant 11 differentiates to **0** — a constant term doesn't change, so it adds nothing to the gradient. Only the −9x term leaves a constant (−9).",
          },
          {
            spec: { type: "expression", expr: "24x^4+6x^3-9x" },
            feedback: "You multiplied by the power but forgot to **reduce** the power by one: {{6x^4 -> 24x^3}}, not {{24x^4}}.",
          },
        ],
        solution: [
          "Differentiate term by term: multiply by the power, then reduce the power by one.",
          "{{6x^4 -> 24x^3}}, {{2x^3 -> 6x^2}}, {{-9x -> -9}}, {{11 -> 0}}.",
          "{{dy/dx = 24x^3 + 6x^2 - 9}}.",
        ],
        commonError: "Keeping the constant term, or forgetting that −9x differentiates to −9 (not 0 and not −9x).",
        difficulty: "warmup",
        guideRef: "differentiating-powers",
        hints: [
          "For {{ax^n}}, the derivative is {{nax^(n-1)}}. Do one term at a time.",
          "What happens to a constant like 11?",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "mcq",
        id: "calculus-p3-q02",
        question:
          "P is the point (1, 2) on the curve {{y = 2x^2}}. Chords are drawn from P to points on the curve with x-coordinates 2, 1.1 and 1.01. Their gradients are 6, 4.2 and 4.02.\n\nWhat is the gradient of the **tangent** to the curve at P?",
        options: ["6", "2", "4", "4.02"],
        answerIndex: 2,
        explanation:
          "As the second point slides towards P, the chord gradients 6, 4.2, 4.02 get closer and closer to **4** — that limit is the tangent's gradient. It agrees with {{dy/dx = 4x = 4 * 1 = 4}}. 4.02 is still a chord (slightly too steep), 6 is the first chord, and 2 is the y-coordinate of P, not a gradient.",
        difficulty: "warmup",
        guideRef: "gradient-of-a-curve",
        hints: [
          "What value are 6, 4.2, 4.02 heading towards as the chords shrink?",
          "Check with {{dy/dx = 4x}} at x = 1.",
        ],
        strategy: "Find a pattern",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "calculus-p3-q03",
        question: "Find the gradient of the curve {{y = x^3 - 5x^2}} at the point where x = 3.",
        answer: { type: "number", value: -3 },
        traps: [
          {
            spec: { type: "number", value: -18 },
            feedback: "−18 is the **y-coordinate** at x = 3 ({{27 - 45}}). The gradient comes from {{dy/dx}}, not from y.",
          },
        ],
        solution: ["{{dy/dx = 3x^2 - 10x}}.", "At x = 3: {{3(3)^2 - 10(3) = 27 - 30 = -3}}.", "The gradient is negative, so the curve is going downhill at x = 3."],
        commonError: "Substituting x = 3 into the equation of the curve instead of into {{dy/dx}}.",
        difficulty: "warmup",
        guideRef: "tangents",
        hints: ["Differentiate first, then substitute x = 3.", "{{dy/dx = 3x^2 - 10x}}."],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "calculus-p3-q04",
        question:
          "A remote-control car moves along a straight track. Its displacement from the start, s metres, after t seconds is {{s = 2t^2 + 3t}}.\n\nWork out its velocity when t = 4. Give your answer in m/s.",
        answer: { type: "number", value: 19, display: "19 m/s" },
        traps: [
          {
            spec: { type: "number", value: 44 },
            feedback: "44 m is the **displacement** at t = 4. Velocity is the rate of change of displacement: {{v = ds/dt}}.",
          },
        ],
        solution: ["{{v = ds/dt = 4t + 3}}.", "At t = 4: v = 16 + 3 = 19 m/s."],
        commonError: "Substituting into s instead of differentiating first.",
        difficulty: "warmup",
        guideRef: "kinematics",
        hints: ["Velocity is {{ds/dt}}.", "Differentiate {{2t^2 + 3t}}, then put t = 4."],
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "calculus-p3-q05",
        question: "{{y = x(2x - 3)^2}}\n\nFind {{dy/dx}}.",
        answer: { type: "expression", expr: "12x^2-24x+9", display: "{{dy/dx = 12x^2 - 24x + 9}}" },
        traps: [
          {
            spec: { type: "expression", expr: "4x-6" },
            feedback: "You can't differentiate each factor separately and multiply ({{1 * 2(2x - 3)}}). Expand fully first: {{x(4x^2 - 12x + 9) = 4x^3 - 12x^2 + 9x}}.",
          },
          {
            spec: { type: "expression", expr: "12x^2+9" },
            feedback: "Did you square {{(2x - 3)}} as {{4x^2 + 9}}? The middle term −12x is missing, so you've lost the −24x term.",
          },
        ],
        solution: [
          "Expand the square: {{(2x - 3)^2 = 4x^2 - 12x + 9}}.",
          "Multiply by x: {{y = 4x^3 - 12x^2 + 9x}}.",
          "Differentiate term by term: {{dy/dx = 12x^2 - 24x + 9}}.",
        ],
        commonError: "Squaring the bracket as {{4x^2 + 9}}, or differentiating the factors separately.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "The rule works on a sum of powers of x, not on products of brackets. What should you do first?",
          "Expand {{(2x - 3)(2x - 3)}} first, then multiply every term by x.",
          "{{4x^3 - 12x^2 + 9x}}: now differentiate each term.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "calculus-p3-q06",
        question: "{{y = (2x^3 + 5)/x}}\n\nFind {{dy/dx}}.",
        answer: { type: "expression", expr: "4x-5/(x^2)", display: "{{dy/dx = 4x - 5/x^2}}" },
        traps: [
          {
            spec: { type: "expression", expr: "6x^2" },
            feedback: "You can't differentiate the top and the bottom separately. Split the fraction first: {{(2x^3)/x + 5/x = 2x^2 + 5x^(-1)}}.",
          },
          {
            spec: { type: "expression", expr: "4x+5/(x^2)" },
            feedback: "Sign slip: {{5x^(-1)}} differentiates to {{-1 * 5x^(-2) = -5x^(-2)}}. The power is negative, so the coefficient changes sign.",
          },
        ],
        solution: [
          "Split into separate terms: {{y = (2x^3)/x + 5/x = 2x^2 + 5x^(-1)}}.",
          "Differentiate: {{dy/dx = 4x + (-1)(5)x^(-2) = 4x - 5x^(-2)}}.",
          "So {{dy/dx = 4x - 5/x^2}}.",
        ],
        commonError: "Differentiating numerator and denominator separately, or getting the power wrong: −1 − 1 = −2, not 0.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "Can you write y as a sum of powers of x?",
          "Divide each term on top by x.",
          "{{y = 2x^2 + 5x^(-1)}}. Bring the −1 down and subtract one from the power.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "calculus-p3-q07",
        question:
          "The curve C has equation {{y = x^3 - 3x^2 + 6x}}.\n\nFind the x-coordinates of the two points on C where the gradient is 15.",
        answer: { type: "list", values: [3, -1], display: "x = 3 and x = −1" },
        traps: [
          {
            spec: { type: "list", values: [-3, 1] },
            feedback: "Check your factorising: {{x^2 - 2x - 3 = (x - 3)(x + 1)}}, so x = 3 or x = −1. Substitute back to check: {{3(9) - 6(3) + 6 = 15}}.",
          },
        ],
        solution: [
          "{{dy/dx = 3x^2 - 6x + 6}}.",
          "Set equal to 15: {{3x^2 - 6x + 6 = 15}}, so {{3x^2 - 6x - 9 = 0}}.",
          "Divide by 3: {{x^2 - 2x - 3 = 0}}, so {{(x - 3)(x + 1) = 0}}.",
          "x = 3 or x = −1.",
        ],
        commonError: "Setting the original equation y = 15 instead of the gradient {{dy/dx = 15}}.",
        difficulty: "core",
        guideRef: "tangents",
        hints: [
          "'Gradient is 15' means which expression equals 15?",
          "Form {{3x^2 - 6x + 6 = 15}} and rearrange to = 0.",
          "Divide through by 3 before factorising.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "calculus-p3-q08",
        question:
          "Find the equation of the tangent to the curve {{y = 2x^2 - 5x + 1}} at the point where x = 3. Give your answer in the form y = mx + c.",
        answer: { type: "equation", eq: "y=7x-17", display: "y = 7x − 17" },
        traps: [
          {
            spec: { type: "equation", eq: "y=7x-21" },
            feedback: "That line passes through (3, 0), not the point on the curve. Find y at x = 3 first: {{2(9) - 15 + 1 = 4}}, so use (3, 4).",
          },
          {
            spec: { type: "equation", eq: "y=4x-8" },
            feedback: "You've used the y-value (4) as the gradient. The gradient is {{dy/dx = 4x - 5 = 7}} at x = 3.",
          },
        ],
        solution: [
          "Point: y = {{2(3)^2 - 5(3) + 1 = 18 - 15 + 1 = 4}}, so (3, 4).",
          "Gradient: {{dy/dx = 4x - 5 = 4(3) - 5 = 7}}.",
          "{{y - 4 = 7(x - 3)}}, so y = 7x − 21 + 4.",
          "y = 7x − 17.",
        ],
        commonError: "Mixing up the y-coordinate and the gradient, or forgetting to find the y-coordinate at all.",
        difficulty: "core",
        guideRef: "tangents",
        hints: [
          "A straight line needs a point and a gradient. Which do you have so far?",
          "Find y at x = 3, then find {{dy/dx}} at x = 3.",
          "Use {{y - y_1 = m(x - x_1)}} with (3, 4) and m = 7.",
        ],
        strategy: "Break it into steps",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "calculus-p3-q09",
        question:
          "The curve {{y = x^3 - 3x^2 - 9x + 7}} has two turning points.\n\nFind the coordinates of the **maximum** point. Give your answer as (x, y).",
        answer: { type: "list", values: [-1, 12], ordered: true, display: "(−1, 12)" },
        traps: [
          {
            spec: { type: "list", values: [3, -20], ordered: true },
            feedback: "(3, −20) is a turning point, but it's the **minimum**: {{d^2y/dx^2 = 6x - 6 = 12 > 0}} there. Check the other one.",
          },
        ],
        solution: [
          "{{dy/dx = 3x^2 - 6x - 9 = 3(x^2 - 2x - 3) = 3(x - 3)(x + 1)}}.",
          "{{dy/dx = 0}} when x = 3 or x = −1.",
          "{{d^2y/dx^2 = 6x - 6}}. At x = −1 it is −12 < 0, so a maximum. (At x = 3 it is 12 > 0: minimum.)",
          "At x = −1: {{y = (-1)^3 - 3(-1)^2 - 9(-1) + 7 = -1 - 3 + 9 + 7 = 12}}.",
          "Maximum point: (−1, 12).",
        ],
        solutions: [
          {
            label: "Shape of a positive cubic",
            steps: [
              "The {{x^3}} coefficient is positive, so the curve goes up–down–up.",
              "So the left-hand turning point (smaller x) is the maximum: x = −1, giving (−1, 12).",
            ],
          },
        ],
        commonError: "Sign errors when cubing or squaring −1: {{(-1)^3 = -1}} but {{(-1)^2 = +1}}.",
        difficulty: "core",
        guideRef: "turning-points",
        hints: [
          "At a turning point, what is the gradient?",
          "Solve {{3x^2 - 6x - 9 = 0}} — take out the common factor 3 first.",
          "Decide which x gives the maximum using {{d^2y/dx^2}} or the shape of the cubic.",
        ],
        strategy: "Use symmetry / shape",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "written",
        id: "calculus-p3-q10",
        question:
          "The curve C has equation {{y = x^4 - 8x^2 + 3}}.\n\nShow that (2, −13) is a turning point on C, and determine whether it is a maximum or a minimum.",
        marks: 3,
        modelAnswer:
          "At x = 2, {{y = 16 - 32 + 3 = -13}}, so (2, −13) lies on C.\n\n{{dy/dx = 4x^3 - 16x}}. At x = 2: {{4(8) - 16(2) = 32 - 32 = 0}}, so (2, −13) is a turning point.\n\n{{d^2y/dx^2 = 12x^2 - 16}}. At x = 2: 48 − 16 = 32 > 0, so it is a **minimum**.",
        markScheme: [
          { point: "Differentiates correctly: dy/dx = 4x³ − 16x", keywords: ["4x^3", "4x³", "16x", "dy/dx"] },
          { point: "Substitutes x = 2 to show dy/dx = 0 (and y = −13)", keywords: ["= 0", "32 - 32", "32 − 32", "-13", "−13"] },
          { point: "Uses second derivative (32 > 0) or gradient either side to conclude minimum", keywords: ["minimum", "min", "32", "12x^2", "> 0", "positive"] },
        ],
        commonError: "Stopping after showing dy/dx = 0 without deciding the nature, or saying 'maximum' because the second derivative is large.",
        difficulty: "core",
        guideRef: "turning-points",
        hints: [
          "What must be true about {{dy/dx}} at a turning point?",
          "Find {{dy/dx}} and substitute x = 2.",
          "For the nature: find {{d^2y/dx^2}} at x = 2. Positive means a minimum (a 'smile').",
        ],
        solutions: [
          {
            label: "Gradient either side",
            steps: [
              "At x = 1.9: {{dy/dx = 4(6.859) - 30.4 = -2.964}} (negative).",
              "At x = 2.1: {{dy/dx = 4(9.261) - 33.6 = 3.444}} (positive).",
              "Gradient goes − then 0 then +, so the point is a minimum.",
            ],
          },
        ],
        strategy: "Check by substituting",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "calculus-p3-q11",
        question:
          "A particle P moves along a straight line. Its displacement from a fixed point O at time t seconds is s metres, where {{s = t^3 - 12t^2 + 45t}}.\n\nFind the two values of t when P is instantaneously at rest.",
        answer: { type: "list", values: [3, 5], display: "t = 3 and t = 5" },
        traps: [
          {
            spec: { type: "number", value: 4 },
            feedback: "t = 4 is when the **acceleration** is zero. 'At rest' means the velocity {{ds/dt}} is zero.",
          },
        ],
        solution: [
          "{{v = ds/dt = 3t^2 - 24t + 45}}.",
          "At rest: v = 0, so {{3(t^2 - 8t + 15) = 0}}.",
          "{{(t - 3)(t - 5) = 0}}, so t = 3 or t = 5.",
        ],
        commonError: "Solving s = 0 (back at O) instead of v = 0 (at rest).",
        difficulty: "core",
        guideRef: "kinematics",
        hints: [
          "'At rest' means which quantity is zero?",
          "Differentiate s to get v, then solve v = 0.",
          "Take out the factor 3, then factorise {{t^2 - 8t + 15}}.",
        ],
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "calculus-p3-q12",
        question:
          "Wei Ling is asked to differentiate {{y = 1/x^2}}. She writes:\n\n    {{dy/dx = 1/(2x)}}\n\nExplain the mistake she has made and find the correct expression for {{dy/dx}}.",
        marks: 3,
        modelAnswer:
          "She has differentiated the denominator {{x^2}} on its own (getting 2x) and left it on the bottom. The rule {{d/dx (x^n) = nx^(n-1)}} only works on a power of x, so first write {{y = x^(-2)}}.\n\nThen {{dy/dx = -2x^(-3) = -2/x^3}}.",
        markScheme: [
          { point: "Identifies the error: differentiated the denominator separately / didn't write as a power of x", keywords: ["denominator", "bottom", "power", "x^-2", "x^(-2)", "negative power", "separately"] },
          { point: "Rewrites y as x^(−2)", keywords: ["x^-2", "x^(-2)", "x⁻²", "-2"] },
          { point: "Correct derivative −2x^(−3) or −2/x³", keywords: ["-2x^-3", "-2x^(-3)", "-2/x^3", "−2/x³", "-3"] },
        ],
        commonError: "Writing the derivative as {{-2x^(-1)}}: subtracting one from −2 gives −3, not −1.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "Can the power rule be applied to a fraction directly?",
          "Write {{1/x^2}} as a power of x.",
          "{{x^(-2)}}: multiply by −2, then subtract 1 from the power.",
        ],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "calculus-p3-q13",
        question:
          "A curve has equation {{y = 2x^3 + 3x^2 - 12x}}.\n\nFind the set of values of x for which y is **decreasing** (the gradient is negative). Give your answer as an inequality.",
        answer: { type: "inequality", ineq: "-2<x<1", display: "−2 < x < 1" },
        traps: [
          {
            spec: { type: "inequality", ineq: "x<-2 or x>1" },
            feedback: "That's where the gradient is **positive** (the curve is increasing). {{6(x + 2)(x - 1) < 0}} between the roots, because the gradient graph is a ∪-shaped parabola.",
          },
        ],
        solution: [
          "{{dy/dx = 6x^2 + 6x - 12 = 6(x^2 + x - 2) = 6(x + 2)(x - 1)}}.",
          "Decreasing means {{dy/dx < 0}}: {{6(x + 2)(x - 1) < 0}}.",
          "The gradient function is a ∪-shaped quadratic with roots −2 and 1, so it is negative **between** them.",
          "−2 < x < 1.",
        ],
        commonError: "Choosing the outside region, or solving only dy/dx = 0 and stopping at x = −2 and x = 1.",
        difficulty: "challenge",
        guideRef: "turning-points",
        hints: [
          "'Decreasing' is a statement about which expression?",
          "Solve the quadratic inequality {{6x^2 + 6x - 12 < 0}}.",
          "Find the critical values, then sketch the ∪-shaped gradient graph: where is it below the x-axis?",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "written",
        id: "calculus-p3-q14",
        question:
          "Arjun is designing an open-topped box (no lid) with a square base of side x cm and height h cm. The volume of the box must be 32 000 cm³.\n\n(a) Show that the external surface area, A cm², of the box is {{A = x^2 + 128000/x}}.\n\n(b) Find the value of x that makes A as small as possible, and show that this gives a minimum.",
        marks: 4,
        modelAnswer:
          "(a) Volume: {{x^2 h = 32000}}, so {{h = 32000/x^2}}.\nArea = base + 4 sides = {{x^2 + 4xh = x^2 + 4x * 32000/x^2 = x^2 + 128000/x}}.\n\n(b) {{A = x^2 + 128000x^(-1)}}, so {{dA/dx = 2x - 128000/x^2}}.\nSet {{dA/dx = 0}}: {{2x^3 = 128000}}, {{x^3 = 64000}}, x = 40.\n{{d^2A/dx^2 = 2 + 256000/x^3}} = 2 + 4 = 6 > 0 at x = 40, so this is a minimum. (Minimum area = 1600 + 3200 = 4800 cm².)",
        markScheme: [
          { point: "Uses volume to write h = 32000/x² and substitutes into area x² + 4xh", keywords: ["32000/x^2", "h =", "4xh", "x^2h", "x²h"] },
          { point: "Differentiates: dA/dx = 2x − 128000/x²", keywords: ["2x", "128000/x^2", "-128000", "x^-2", "da/dx"] },
          { point: "Solves dA/dx = 0 to get x = 40", keywords: ["x = 40", "40", "64000", "x^3"] },
          { point: "Justifies minimum (second derivative 6 > 0, or gradient sign change)", keywords: ["minimum", "6", "> 0", "positive", "256000"] },
        ],
        commonError: "Including a lid in the surface area ({{2x^2}}), or differentiating {{128000/x}} as {{128000}}.",
        difficulty: "challenge",
        guideRef: "turning-points",
        hints: [
          "There are two unknowns, x and h. Which fact lets you get rid of h?",
          "An open box has one base and four rectangular sides, each x by h.",
          "Write {{128000/x}} as {{128000x^(-1)}} before differentiating, then solve dA/dx = 0.",
          "Check the nature: {{d^2A/dx^2}} at x = 40.",
        ],
        solutions: [
          {
            label: "Sign of the gradient either side",
            steps: [
              "At x = 39: {{dA/dx = 78 - 128000/1521 = 78 - 84.2 < 0}}.",
              "At x = 41: {{dA/dx = 82 - 128000/1681 = 82 - 76.1 > 0}}.",
              "Gradient goes − to +, so x = 40 gives a minimum.",
            ],
          },
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "calculus-p3-q15",
        question:
          "The point P(3, 2) lies on the curve {{y = x^2 - 4x + 5}}. The normal to the curve at P meets the curve again at the point Q.\n\nFind the coordinates of Q. Give your answer as (x, y) using decimals.",
        answer: { type: "list", values: [0.5, 3.25], ordered: true, display: "(0.5, 3.25)" },
        traps: [
          {
            spec: { type: "list", values: [3, 2], ordered: true },
            feedback: "That's P itself. The equation {{2x^2 - 7x + 3 = 0}} has two roots — one is x = 3 (point P), the other gives Q.",
          },
          {
            spec: { type: "list", values: [-1, 10], ordered: true },
            feedback: "Looks like you used the tangent gradient 2 instead of the normal gradient. The normal is perpendicular: {{m = -1/2}}.",
          },
        ],
        solution: [
          "{{dy/dx = 2x - 4}}; at x = 3 the tangent gradient is 2.",
          "Normal gradient = {{-1/2}}. Normal: {{y - 2 = -1/2 (x - 3)}}, i.e. {{y = (7 - x)/2}}.",
          "Meet the curve: {{x^2 - 4x + 5 = (7 - x)/2}}, so {{2x^2 - 8x + 10 = 7 - x}}.",
          "{{2x^2 - 7x + 3 = 0}}, so {{(2x - 1)(x - 3) = 0}}: x = 3 (that's P) or x = 0.5.",
          "y = {{(7 - 0.5)/2 = 3.25}}. Check on the curve: 0.25 − 2 + 5 = 3.25 ✓.",
          "Q is (0.5, 3.25).",
        ],
        commonError: "Using the tangent gradient for the normal, or forgetting that x = 3 must be one root (a good check on your quadratic).",
        difficulty: "challenge",
        guideRef: "normals",
        hints: [
          "The normal is perpendicular to the tangent. What is its gradient?",
          "Write the normal as y = … and set it equal to the curve's equation.",
          "You already know one solution of the resulting quadratic (x = 3). Use it to factorise.",
        ],
        strategy: "Use what you know",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "calculus-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "calculus-p4-q01",
        question: "{{y = 3x^2 - 8/x + 5}}\n\nFind {{dy/dx}}.",
        answer: { type: "expression", expr: "6x+8/(x^2)", display: "{{dy/dx = 6x + 8/x^2}}" },
        traps: [
          {
            spec: { type: "expression", expr: "6x-8/(x^2)" },
            feedback: "Sign check: {{-8/x = -8x^(-1)}}. Multiplying by the power −1 gives {{+8x^(-2)}}, so the term is **+**{{8/x^2}}.",
          },
          {
            spec: { type: "expression", expr: "6x" },
            feedback: "The {{-8/x}} term doesn't vanish — it's {{-8x^(-1)}}, a power of x. Only the constant 5 differentiates to 0.",
          },
        ],
        solution: [
          "Write as powers of x: {{y = 3x^2 - 8x^(-1) + 5}}.",
          "{{dy/dx = 6x - 8(-1)x^(-2) + 0 = 6x + 8x^(-2)}}.",
          "{{dy/dx = 6x + 8/x^2}}.",
        ],
        commonError: "Losing the sign: (−8) × (−1) = +8.",
        difficulty: "warmup",
        guideRef: "differentiating-powers",
        hints: [
          "Rewrite {{8/x}} as a power of x first.",
          "{{-8x^(-1)}}: multiply by −1 and reduce the power to −2.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "calculus-p4-q02",
        question: "The curve C has equation {{y = x^3 - 2x^2 + 5}}.\n\nWork out the gradient of C at the point (2, 5).",
        answer: { type: "number", value: 4 },
        traps: [
          {
            spec: { type: "number", value: 5 },
            feedback: "5 is the y-coordinate of the point. The gradient is the value of {{dy/dx}} at x = 2.",
          },
        ],
        solution: ["{{dy/dx = 3x^2 - 4x}}.", "At x = 2: {{3(4) - 4(2) = 12 - 8 = 4}}."],
        commonError: "Substituting into y instead of dy/dx.",
        difficulty: "warmup",
        guideRef: "tangents",
        hints: ["Find {{dy/dx}} and substitute the x-coordinate.", "{{dy/dx = 3x^2 - 4x}}."],
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "calculus-p4-q03",
        question:
          "Priya throws a ball vertically upwards at Sentosa beach. Its height above her hand, h metres, t seconds after it is thrown is {{h = 30t - 5t^2}}.\n\nWork out the velocity of the ball when t = 2. Give your answer in m/s.",
        answer: { type: "number", value: 10, display: "10 m/s" },
        traps: [
          {
            spec: { type: "number", value: 40 },
            feedback: "40 m is the **height** at t = 2. Velocity is {{dh/dt}}.",
          },
          {
            spec: { type: "number", value: 20 },
            feedback: "Check the derivative of {{-5t^2}}: it is −10t, so v = 30 − 20 = 10.",
          },
        ],
        solution: ["{{v = dh/dt = 30 - 10t}}.", "At t = 2: v = 30 − 20 = 10 m/s (still rising, since v > 0)."],
        commonError: "Substituting t = 2 into h instead of into {{dh/dt}}.",
        difficulty: "warmup",
        guideRef: "kinematics",
        hints: ["Velocity is the rate of change of height: differentiate h.", "{{dh/dt = 30 - 10t}}."],
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "calculus-p4-q04",
        question:
          "The points P(2, 8) and Q(2.1, 9.261) lie on the curve {{y = x^3}}.\n\nWork out the gradient of the chord PQ. Give your answer as a decimal.",
        answer: { type: "number", value: 12.61, allowFraction: false },
        traps: [
          {
            spec: { type: "number", value: 12 },
            feedback: "12 is the gradient of the **tangent** at P ({{3x^2}} at x = 2). The chord to Q is slightly steeper: {{(9.261 - 8)/(2.1 - 2)}}.",
          },
          {
            spec: { type: "number", value: 0.0793, tolerance: 0.0001 },
            feedback: "Gradient is change in y ÷ change in x — you've divided the other way up.",
          },
        ],
        solution: [
          "Gradient = {{(9.261 - 8)/(2.1 - 2) = 1.261/0.1 = 12.61}}.",
          "As Q moves closer to P, the chord gradient approaches 12, the gradient of the tangent at P ({{dy/dx = 3x^2 = 12}}).",
        ],
        commonError: "Dividing change in x by change in y.",
        difficulty: "warmup",
        guideRef: "gradient-of-a-curve",
        hints: ["Gradient of a straight line = {{(change in y)/(change in x)}}."],
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "calculus-p4-q05",
        question:
          "The curve C has equation {{y = x^2 - 6x + 11}}.\n\nFind the coordinates of the point on C at which the gradient is 4. Give your answer as (x, y).",
        answer: { type: "list", values: [5, 6], ordered: true, display: "(5, 6)" },
        traps: [
          {
            spec: { type: "list", values: [5, 4], ordered: true },
            feedback: "x = 5 is right, but the y-coordinate comes from the curve, not the gradient: {{25 - 30 + 11 = 6}}.",
          },
          {
            spec: { type: "list", values: [1, 6], ordered: true },
            feedback: "Check your equation: {{2x - 6 = 4}} gives 2x = 10, so x = 5.",
          },
        ],
        solution: [
          "{{dy/dx = 2x - 6}}.",
          "{{2x - 6 = 4}}, so x = 5.",
          "y = {{25 - 30 + 11 = 6}}.",
          "The point is (5, 6).",
        ],
        commonError: "Giving the gradient (4) as the y-coordinate.",
        difficulty: "core",
        guideRef: "tangents",
        hints: [
          "Which expression gives the gradient?",
          "Solve {{2x - 6 = 4}}.",
          "Substitute your x back into the equation of the **curve** to get y.",
        ],
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "calculus-p4-q06",
        question: "{{y = (x^2 + 2)(3x - 5)}}\n\nFind {{dy/dx}}.",
        answer: { type: "expression", expr: "9x^2-10x+6", display: "{{dy/dx = 9x^2 - 10x + 6}}" },
        traps: [
          {
            spec: { type: "expression", expr: "6x" },
            feedback: "You can't differentiate each bracket and multiply the results ({{2x * 3}}). Expand first: {{3x^3 - 5x^2 + 6x - 10}}.",
          },
        ],
        solution: [
          "Expand: {{(x^2 + 2)(3x - 5) = 3x^3 - 5x^2 + 6x - 10}}.",
          "Differentiate: {{dy/dx = 9x^2 - 10x + 6}}.",
        ],
        commonError: "Differentiating each bracket separately and multiplying.",
        difficulty: "core",
        guideRef: "differentiating-powers",
        hints: [
          "The power rule needs a sum of terms, not a product of brackets.",
          "Expand the brackets — four products.",
          "{{3x^3 - 5x^2 + 6x - 10}}: now differentiate term by term.",
        ],
        strategy: "Make it simpler",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "calculus-p4-q07",
        question:
          "The cost, $C, of running a delivery van on a particular route at an average speed of v km/h is modelled by\n\n    {{C = v/4 + 900/v}}\n\nFind the value of v for which C is a minimum, and the minimum cost. Give v first, then C.",
        answer: { type: "list", values: [60, 30], ordered: true, display: "v = 60 km/h, C = $30" },
        traps: [
          {
            spec: { type: "list", values: [30, 60], ordered: true },
            feedback: "Right numbers, wrong order: give v (the speed) first, then the cost C.",
          },
          {
            spec: { type: "list", values: [60, 60], ordered: true },
            feedback: "v = 60 is right. Now substitute carefully: {{60/4 + 900/60 = 15 + 15 = 30}}.",
          },
        ],
        solution: [
          "{{C = 1/4 v + 900v^(-1)}}, so {{dC/dv = 1/4 - 900/v^2}}.",
          "Minimum when {{dC/dv = 0}}: {{v^2 = 3600}}, so v = 60 (speed is positive).",
          "{{d^2C/dv^2 = 1800/v^3 > 0}} for v > 0, so this is a minimum.",
          "C = {{60/4 + 900/60 = 15 + 15 = 30}}.",
        ],
        commonError: "Differentiating {{900/v}} as 900 or as {{900/v^2}} with the wrong sign.",
        difficulty: "core",
        guideRef: "turning-points",
        hints: [
          "At a minimum, what is {{dC/dv}}?",
          "Write {{900/v}} as {{900v^(-1)}} before differentiating.",
          "Solve {{1/4 = 900/v^2}}, then substitute v back into C.",
        ],
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "written",
        id: "calculus-p4-q08",
        question:
          "A solid cuboid has a square base of side x cm and height h cm. The total surface area of the cuboid is 600 cm².\n\nShow that the volume, V cm³, of the cuboid is given by {{V = 150x - 1/2 x^3}}.",
        marks: 3,
        modelAnswer:
          "Surface area: two square ends and four rectangles, so {{2x^2 + 4xh = 600}}.\n\nRearrange: {{4xh = 600 - 2x^2}}, so {{h = (600 - 2x^2)/(4x) = (300 - x^2)/(2x)}}.\n\n{{V = x^2 h = x^2 * (300 - x^2)/(2x) = (x(300 - x^2))/2 = 150x - 1/2 x^3}}.",
        markScheme: [
          { point: "Correct surface area equation 2x² + 4xh = 600", keywords: ["2x^2", "2x²", "4xh", "600"] },
          { point: "Makes h the subject: h = (600 − 2x²)/(4x) or equivalent", keywords: ["h =", "(600 - 2x^2)/4x", "300 - x^2", "/4x", "/2x"] },
          { point: "Substitutes into V = x²h and simplifies to 150x − ½x³", keywords: ["x^2h", "x²h", "150x", "x^3/2", "1/2 x^3"] },
        ],
        commonError: "Using 6x² for the surface area (only true for a cube), or only counting one square face.",
        difficulty: "core",
        guideRef: "turning-points",
        hints: [
          "Write down the surface area: how many square faces and how many rectangular faces?",
          "Use {{2x^2 + 4xh = 600}} to make h the subject.",
          "Substitute h into {{V = x^2 h}} and simplify.",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "calculus-p4-q09",
        question:
          "For the cuboid in the previous question, {{V = 150x - 1/2 x^3}}, where the base is x cm by x cm and the total surface area is 600 cm².\n\nFind the maximum possible volume of the cuboid. Give your answer in cm³.",
        answer: { type: "number", value: 1000, display: "1000 cm³" },
        traps: [
          {
            spec: { type: "number", value: 10 },
            feedback: "x = 10 cm is the side length that gives the maximum. The question asks for the maximum **volume**: substitute x = 10 into V.",
          },
          {
            spec: { type: "number", value: 2000 },
            feedback: "Check the second term: {{1/2 * 10^3 = 500}}, so V = 1500 − 500 = 1000.",
          },
        ],
        solution: [
          "{{dV/dx = 150 - 3/2 x^2}}.",
          "{{dV/dx = 0}}: {{3/2 x^2 = 150}}, {{x^2 = 100}}, x = 10 (length is positive).",
          "{{d^2V/dx^2 = -3x = -30 < 0}}, so a maximum.",
          "V = {{150(10) - 1/2 (1000) = 1500 - 500 = 1000}} cm³.",
          "(Check: h = {{(300 - 100)/20 = 10}}, so the best cuboid is a 10 cm cube.)",
        ],
        commonError: "Stopping at x = 10 instead of finding V.",
        difficulty: "core",
        guideRef: "turning-points",
        hints: [
          "Maximum volume: where is {{dV/dx = 0}}?",
          "Differentiate: {{dV/dx = 150 - 3/2 x^2}}.",
          "Solve for x, then substitute back into V.",
        ],
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "calculus-p4-q10",
        question:
          "A particle P moves along a straight line. At time t seconds, the displacement of P from a fixed point O is s metres, where\n\n    {{s = 2t^3 - 15t^2 + 36t}}\n\nFind the displacement of P from O at the **first** time that P is instantaneously at rest. Give your answer in metres.",
        answer: { type: "number", value: 28, display: "28 m" },
        traps: [
          {
            spec: { type: "number", value: 27 },
            feedback: "27 m is the displacement at t = 3, the **second** time P is at rest. The first time is t = 2.",
          },
          {
            spec: { type: "number", value: 2 },
            feedback: "t = 2 is the time. The question asks for the displacement s at that time.",
          },
        ],
        solution: [
          "{{v = ds/dt = 6t^2 - 30t + 36 = 6(t^2 - 5t + 6) = 6(t - 2)(t - 3)}}.",
          "At rest when v = 0: t = 2 or t = 3. The first time is t = 2.",
          "s = {{2(8) - 15(4) + 36(2) = 16 - 60 + 72 = 28}} m.",
        ],
        commonError: "Giving the time instead of the displacement, or using the later time.",
        difficulty: "core",
        guideRef: "kinematics",
        hints: [
          "'At rest' means v = 0. How do you get v from s?",
          "Factorise {{6t^2 - 30t + 36}} — take out 6 first.",
          "Use the smaller t, and substitute it into s.",
        ],
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "written",
        id: "calculus-p4-q11",
        question:
          "A cyclist rides along a straight MRT-side path. Her velocity, v m/s, at time t seconds is\n\n    {{v = 3t^2 - 12t + 15}}\n\nFind her minimum velocity, and hence explain why she never comes to rest.",
        marks: 3,
        modelAnswer:
          "Acceleration {{a = dv/dt = 6t - 12}}. The minimum velocity is when a = 0, i.e. t = 2 (and {{d^2v/dt^2 = 6 > 0}}, so it is a minimum).\n\nAt t = 2: {{v = 3(4) - 12(2) + 15 = 12 - 24 + 15 = 3}} m/s.\n\nThe smallest velocity is 3 m/s, which is greater than 0, so v is never zero — she never comes to rest.",
        markScheme: [
          { point: "Differentiates to get a = 6t − 12 and sets it to 0", keywords: ["6t - 12", "6t−12", "dv/dt", "= 0", "a ="] },
          { point: "Finds t = 2 and minimum velocity 3 m/s", keywords: ["t = 2", "3 m/s", "v = 3", "minimum"] },
          { point: "Concludes v ≥ 3 > 0 so never at rest", keywords: ["never", "> 0", "positive", "not zero", "always"] },
        ],
        commonError: "Setting v = 0 and saying 'no answer' without explaining why — a negative discriminant or the minimum value is the justification.",
        difficulty: "core",
        guideRef: "kinematics",
        hints: [
          "Velocity is smallest when it stops decreasing: what is the acceleration then?",
          "Solve {{dv/dt = 6t - 12 = 0}}.",
          "Find v at that time. If the smallest velocity is positive, can v ever be 0?",
        ],
        solutions: [
          {
            label: "Completing the square",
            steps: [
              "{{v = 3(t^2 - 4t + 5) = 3((t - 2)^2 + 1) = 3(t - 2)^2 + 3}}.",
              "{{(t - 2)^2 >= 0}}, so {{v >= 3}}: minimum 3 m/s at t = 2, never zero.",
            ],
          },
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "calculus-p4-q12",
        question:
          "The curve C has equation {{y = x + 16/x}}, x > 0.\n\nFind the equation of the tangent to C at the point where x = 2. Give your answer in the form y = mx + c.",
        answer: { type: "equation", eq: "y=-3x+16", display: "y = −3x + 16" },
        traps: [
          {
            spec: { type: "equation", eq: "y=5x" },
            feedback: "Sign slip: {{16/x = 16x^(-1)}} differentiates to {{-16x^(-2)}}, so the gradient at x = 2 is {{1 - 4 = -3}}, not 5.",
          },
          {
            spec: { type: "equation", eq: "y=-3x+10" },
            feedback: "The tangent passes through (2, 10), so use {{y - 10 = -3(x - 2)}}: c = 10 + 6 = 16.",
          },
        ],
        solution: [
          "Point: y = {{2 + 16/2 = 10}}, so (2, 10).",
          "{{y = x + 16x^(-1)}}, {{dy/dx = 1 - 16x^(-2) = 1 - 16/x^2}}.",
          "At x = 2: gradient = {{1 - 16/4 = -3}}.",
          "{{y - 10 = -3(x - 2)}}, so y = −3x + 16.",
        ],
        commonError: "Differentiating {{16/x}} as {{16/x^2}} (losing the minus sign).",
        difficulty: "core",
        guideRef: "tangents",
        hints: [
          "You need the point and the gradient at x = 2.",
          "Write {{16/x}} as {{16x^(-1)}} to differentiate.",
          "Gradient −3 through (2, 10): use {{y - y_1 = m(x - x_1)}}.",
        ],
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "calculus-p4-q13",
        question:
          "The curve C has equation {{y = x^3 + 3x^2 + 3x - 1}}.\n\n(a) Prove that the gradient of C is never negative.\n\n(b) Find the coordinates of the only point on C where the gradient is zero.",
        marks: 4,
        modelAnswer:
          "(a) {{dy/dx = 3x^2 + 6x + 3 = 3(x^2 + 2x + 1) = 3(x + 1)^2}}.\nA square is never negative, so {{3(x + 1)^2 >= 0}} for all x: the gradient is never negative.\n\n(b) The gradient is zero only when {{(x + 1)^2 = 0}}, i.e. x = −1.\n{{y = -1 + 3 - 3 - 1 = -2}}. The point is (−1, −2).\n\n(It is a stationary point but not a turning point: the gradient is positive on both sides, so the curve flattens and keeps rising.)",
        markScheme: [
          { point: "dy/dx = 3x² + 6x + 3", keywords: ["3x^2 + 6x + 3", "3x²+6x+3", "6x", "dy/dx"] },
          { point: "Writes as 3(x + 1)²", keywords: ["3(x+1)^2", "(x+1)^2", "(x + 1)^2", "(x+1)²", "complete"] },
          { point: "States a square is ≥ 0 so gradient never negative", keywords: ["square", ">= 0", "≥ 0", "never negative", "positive", "discriminant"] },
          { point: "Point (−1, −2)", keywords: ["(-1, -2)", "(−1, −2)", "x = -1", "-2", "−2"] },
        ],
        commonError: "Testing a few values of x and claiming that proves it — a proof must work for every x.",
        difficulty: "challenge",
        guideRef: "turning-points",
        hints: [
          "Find {{dy/dx}}. What kind of expression is it?",
          "Take out the factor 3. Do you recognise {{x^2 + 2x + 1}}?",
          "{{3(x + 1)^2}} — what do you know about squares?",
          "For (b), solve {{(x + 1)^2 = 0}} and substitute into y.",
        ],
        solutions: [
          {
            label: "Discriminant",
            steps: [
              "For {{3x^2 + 6x + 3}}: {{b^2 - 4ac = 36 - 36 = 0}}.",
              "So the ∪-shaped gradient graph just touches the x-axis once and is never below it.",
            ],
          },
        ],
        strategy: "Look for an invariant",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "calculus-p4-q14",
        question:
          "A closed cylindrical tin of soup has radius r cm and volume 500 cm³. Its total surface area, A cm², is given by\n\n    {{A = 2pi r^2 + 1000/r}}\n\nFind the minimum surface area of the tin. Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 349, tolerance: 0.5, display: "349 cm² (3 s.f.)" },
        traps: [
          {
            spec: { type: "number", value: 4.30, tolerance: 0.01 },
            feedback: "r ≈ 4.30 cm is the radius that gives the minimum. Now substitute it into A to find the minimum **area**.",
          },
        ],
        solution: [
          "{{A = 2pi r^2 + 1000r^(-1)}}, so {{dA/dr = 4pi r - 1000/r^2}}.",
          "Set {{dA/dr = 0}}: {{4pi r^3 = 1000}}, so {{r^3 = 250/pi}} and r = 4.3012… cm.",
          "{{d^2A/dr^2 = 4pi + 2000/r^3 > 0}}, so a minimum.",
          "A = {{2pi (4.3012...)^2 + 1000/4.3012...}} = 116.24… + 232.49… = 348.73…",
          "Minimum A = 349 cm² (3 s.f.).",
        ],
        solutions: [
          {
            label: "Neat shortcut",
            steps: [
              "At the minimum, {{4pi r^3 = 1000}}, so {{2pi r^2 = 500/r}}.",
              "Then {{A = 500/r + 1000/r = 1500/r = 1500/4.3012... = 348.73...}}, so 349 cm².",
            ],
          },
        ],
        commonError: "Rounding r to 4.3 too early (gives 348.8 — fine here, but keep full calculator values to be safe), or giving r instead of A.",
        difficulty: "challenge",
        guideRef: "turning-points",
        hints: [
          "Minimum area: where is {{dA/dr = 0}}?",
          "Write {{1000/r}} as {{1000r^(-1)}}, then differentiate.",
          "Solve {{4pi r = 1000/r^2}} for {{r^3}}, keep r in your calculator, and substitute into A.",
        ],
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "calculus-p4-q15",
        question:
          "The diagram shows part of the curve {{y = x^2 + 1}} and the point P(1, 2) on the curve. The tangent to the curve at P meets the x-axis at A. The normal to the curve at P meets the x-axis at B.\n\nWork out the area of triangle PAB.",
        diagram: `<svg viewBox="0 0 420 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Axes with the curve y = x squared plus 1, the point P at (1, 2), the tangent at P through A on the x-axis and the normal at P meeting the x-axis at B to the right"><rect x="0" y="0" width="420" height="300" fill="#ffffff"/><line x1="10" y1="250" x2="405" y2="250" stroke="#334155" stroke-width="1.5"/><line x1="60" y1="292" x2="60" y2="12" stroke="#334155" stroke-width="1.5"/><text x="408" y="254" font-size="13" font-family="sans-serif" fill="#1f2937">x</text><text x="65" y="16" font-size="13" font-family="sans-serif" fill="#1f2937">y</text><text x="52" y="264" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">O</text><path d="M10.0 150.0 L12.5 154.9 L15.0 159.5 L17.5 163.9 L20.0 168.0 L22.5 171.9 L25.0 175.5 L27.5 178.9 L30.0 182.0 L32.5 184.9 L35.0 187.5 L37.5 189.9 L40.0 192.0 L42.5 193.9 L45.0 195.5 L47.5 196.9 L50.0 198.0 L52.5 198.9 L55.0 199.5 L57.5 199.9 L60.0 200.0 L62.5 199.9 L65.0 199.5 L67.5 198.9 L70.0 198.0 L72.5 196.9 L75.0 195.5 L77.5 193.9 L80.0 192.0 L82.5 189.9 L85.0 187.5 L87.5 184.9 L90.0 182.0 L92.5 178.9 L95.0 175.5 L97.5 171.9 L100.0 168.0 L102.5 163.9 L105.0 159.5 L107.5 154.9 L110.0 150.0 L112.5 144.9 L115.0 139.5 L117.5 133.9 L120.0 128.0 L122.5 121.9 L125.0 115.5 L127.5 108.9 L130.0 102.0 L132.5 94.9 L135.0 87.5 L137.5 79.9 L140.0 72.0 L142.5 63.9 L145.0 55.5 L147.5 46.9 L150.0 38.0 L152.5 28.9" stroke="#1d4ed8" stroke-width="2" fill="none"/><line x1="40" y1="290" x2="160" y2="50" stroke="#b45309" stroke-width="1.5"/><line x1="30" y1="110" x2="380" y2="285" stroke="#047857" stroke-width="1.5"/><circle cx="110" cy="150" r="3.5" fill="#1f2937"/><circle cx="60" cy="250" r="3" fill="#1f2937"/><circle cx="310" cy="250" r="3" fill="#1f2937"/><text x="118" y="146" font-size="13" font-family="sans-serif" fill="#1f2937">P(1, 2)</text><text x="70" y="244" font-size="13" font-family="sans-serif" fill="#1f2937">A</text><text x="306" y="268" font-size="13" font-family="sans-serif" fill="#1f2937">B</text><text x="160" y="44" font-size="12" font-family="sans-serif" fill="#b45309">tangent</text><text x="330" y="246" font-size="12" font-family="sans-serif" fill="#047857">normal</text><text x="22" y="140" font-size="12" font-family="sans-serif" fill="#1d4ed8">y = x² + 1</text></svg>`,
        answer: { type: "number", value: 5, display: "5 square units" },
        traps: [
          {
            spec: { type: "number", value: 6.25 },
            feedback: "That's the triangle formed by the normal and the two axes. Triangle PAB has base AB on the x-axis and height = the y-coordinate of P (2).",
          },
          {
            spec: { type: "number", value: 10 },
            feedback: "Don't forget the ½ in the area of a triangle: {{1/2 * 5 * 2 = 5}}.",
          },
        ],
        solution: [
          "{{dy/dx = 2x}}, so the tangent gradient at P is 2.",
          "Tangent: {{y - 2 = 2(x - 1)}}, i.e. y = 2x. It meets the x-axis at A(0, 0).",
          "Normal gradient = {{-1/2}}. Normal: {{y - 2 = -1/2 (x - 1)}}. At y = 0: {{-2 = -1/2 (x - 1)}}, so x − 1 = 4 and B is (5, 0).",
          "Base AB = 5, height = 2 (the y-coordinate of P).",
          "Area = {{1/2 * 5 * 2 = 5}} square units.",
        ],
        commonError: "Using the tangent gradient for the normal, or forgetting to halve.",
        difficulty: "challenge",
        guideRef: "normals",
        hints: [
          "Find the gradient at P, then the gradient of the normal (negative reciprocal).",
          "Write the equations of both lines and set y = 0 in each to find A and B.",
          "AB is the base on the x-axis. What is the perpendicular height from P?",
        ],
        strategy: "Draw a diagram",
      },
    ],
  },
];
