// ---------------------------------------------------------------------------
// Topic registry: order, strand, icon and the fixed guide-section outline.
// Section ids here are the contract shared by guide authors (who must use
// them) and question / drill authors (whose guideRef must point at them).
// Pure data — safe to import from Node scripts.
// ---------------------------------------------------------------------------
import type { Strand } from "../types.ts";

export interface SectionPlan {
  id: string;
  heading: string;
  /** What this section must teach. */
  covers: string;
  /** H+ (Higher Plus) extension — the school's green objectives, close to Edexcel IGCSE Further Pure Maths. */
  stretch?: boolean;
}

export interface TopicMeta {
  id: string;
  title: string;
  strand: Strand;
  icon: string;
  /** School unit + Edexcel IGCSE 4MA1 Higher specification references this topic covers. */
  curriculum: string;
  sections: SectionPlan[];
}

export const STRANDS: Strand[] = [
  "Number",
  "Ratio & Proportion",
  "Algebra",
  "Geometry & Measure",
  "Statistics & Probability",
];

export const TOPIC_META: TopicMeta[] = [
  // ------------------------------- NUMBER ---------------------------------
  {
    id: "number-bounds",
    title: "Number, Accuracy & Bounds",
    strand: "Number",
    icon: "🎯",
    curriculum: "Edexcel 4MA1 1.1–1.2, 1.4, 1.9–1.10 (prime factors, HCF/LCM, rounding, estimation, bounds)",
    sections: [
      { id: "prime-factors-hcf-lcm", heading: "Prime factors, HCF and LCM", covers: "Prime factorisation in index form; HCF/LCM via prime-factor Venn diagrams; HCF/LCM word problems; numbers from their prime factorisations." },
      { id: "rounding-estimation", heading: "Rounding, significant figures & estimation", covers: "Decimal places and significant figures; estimating calculations by rounding to 1 s.f.; over/under-estimates; calculator use with brackets, powers and roots." },
      { id: "error-intervals", heading: "Upper and lower bounds", covers: "Bounds of rounded and truncated measurements; error intervals with inequality notation (≤ lower, < upper)." },
      { id: "bounds-calculations", heading: "Calculations with bounds", covers: "Max/min of sums, differences, products, quotients; bounds in area, speed, density formulas; choosing an answer to a suitable degree of accuracy." },
      { id: "number-problems", heading: "Number reasoning & problem solving", covers: "Product rule for counting (simple), divisibility, number puzzles typical of IGCSE 'show that' problems." },
    ],
  },
  {
    id: "fractions-percentages",
    title: "Fractions, Decimals & Percentages",
    strand: "Number",
    icon: "💹",
    curriculum: "School Unit 2 · Edexcel 4MA1 1.2, 1.6–1.8, 2.2 (fractions, recurring decimals, percentages, algebraic fractions)",
    sections: [
      { id: "fraction-operations", heading: "Fractions without a calculator", covers: "'Show how' four operations with fractions and mixed numbers, showing every step for method marks." },
      { id: "recurring-decimals", heading: "Terminating & recurring decimals", covers: "Which fractions terminate (denominator 2^a 5^b), converting by division, proving a recurring decimal equals a fraction using algebra (incl. 0.1272727…)." },
      { id: "percentage-change", heading: "Percentage change & multipliers", covers: "Increase/decrease with multipliers, percentage change, percentage profit/loss, VAT/GST contexts." },
      { id: "reverse-percentages", heading: "Reverse percentages", covers: "Finding the original amount; avoiding the 'subtract the percentage of the new amount' trap." },
      { id: "compound-growth", heading: "Compound interest, depreciation & repeated change", covers: "A = P × m^n; depreciation; repeated different % changes; finding the number of years; simple vs compound." },
      { id: "algebraic-fractions", heading: "Algebraic fractions", covers: "Simplify by cancelling common factors and by factorising first; multiply/divide; add/subtract with algebraic denominators." },
    ],
  },
  {
    id: "indices-surds",
    title: "Indices, Standard Form & Surds",
    strand: "Number",
    icon: "√",
    curriculum: "School Unit 3 · Edexcel 4MA1 1.4–1.5, 1.9 (index laws, fractional/negative indices, standard form, surds)",
    sections: [
      { id: "index-laws", heading: "The index laws", covers: "Multiply/divide same base, power of a power, zero index, simplifying expressions like (3x²y)³ ÷ 9xy." },
      { id: "negative-fractional-indices", heading: "Negative and fractional indices", covers: "a^−n = 1/a^n, a^(1/n) = nth root, a^(m/n); evaluating (8/27)^(−2/3) without a calculator." },
      { id: "standard-form", heading: "Standard form", covers: "Converting, calculating with and without a calculator, worded problems (astronomy, cells, data)." },
      { id: "index-equations", heading: "Equations with indices", covers: "Solving by writing both sides with the same base, e.g. 4^x = 8^(x−1), 27^x = 1/9." },
      { id: "harder-index-equations", heading: "Harder index equations", covers: "Equations like x^(5/2) = 32, 2^(2x) − 6·2^x + 8 = 0 style (FM only).", stretch: true },
      { id: "simplifying-surds", heading: "Simplifying surds", covers: "√ab = √a√b, simplifying √72, collecting like surds, multiplying and dividing surds." },
      { id: "surd-brackets", heading: "Expanding brackets with surds", covers: "(a + √b)(c − √d), squares of surd binomials, difference of two squares with surds." },
      { id: "rationalising", heading: "Rationalising denominators", covers: "Simple k/√a and mixed 1/(a + √b) using the conjugate; exact answers in surd form." },
    ],
  },
  // -------------------------- RATIO & PROPORTION -------------------------
  {
    id: "ratio-proportion",
    title: "Ratio, Rates & Proportion",
    strand: "Ratio & Proportion",
    icon: "⚖️",
    curriculum: "School Units 2, 4 & 11 · Edexcel 4MA1 1.7, 2.8, 4.10 (ratio, compound measures, direct & inverse proportion)",
    sections: [
      { id: "ratio-basics", heading: "Simplifying and sharing in a ratio", covers: "Simplest form, unit ratios 1:n, sharing a total, given one share/difference, combining two ratios a:b and b:c." },
      { id: "ratio-problems", heading: "Ratio problem solving", covers: "Concentrations and mixtures, recipes, scale drawings and maps, best buys/value for money, exchange rates, ratio changing after a transfer." },
      { id: "compound-measures", heading: "Speed, density & pressure", covers: "Formula triangles derived from units; unit conversions (km/h ↔ m/s, g/cm³ ↔ kg/m³); average speed for multi-part journeys." },
      { id: "direct-proportion", heading: "Direct proportion", covers: "y ∝ x, y ∝ x², y ∝ √x, y ∝ x³: write y = kx^n, find k, use it; graphs of proportion." },
      { id: "inverse-proportion", heading: "Inverse proportion", covers: "y ∝ 1/x and y ∝ 1/x²; light intensity, workers & time; percentage-change effects (e.g. x doubles → y quarters)." },
    ],
  },
  // ------------------------------- ALGEBRA --------------------------------
  {
    id: "expand-factorise",
    title: "Expanding, Factorising & Substitution",
    strand: "Algebra",
    icon: "🧮",
    curriculum: "School Unit 1 · Edexcel 4MA1 2.1–2.2, 3.2 (expand, factorise, complete the square, substitution, function notation)",
    sections: [
      { id: "expanding-brackets", heading: "Expanding two and three brackets", covers: "Single and double brackets, (2x − 3)², three brackets (x+1)(x−2)(2x+3), collecting like terms fully." },
      { id: "factorising-quadratics", heading: "Factorising quadratics", covers: "Common factors, x² + bx + c, difference of two squares, a ≠ 1 (grouping/splitting the middle term)." },
      { id: "completing-the-square", heading: "Completing the square", covers: "x² + bx + c = (x + b/2)² − …; a ≠ 1 by factoring out a; what the form tells you about the minimum." },
      { id: "substitution-formulae", heading: "Substitution into expressions & formulae", covers: "Negative numbers, decimals and fractions into formulae such as v² = u² + 2as, E = ½mv²; order-of-operation traps." },
      { id: "function-notation-basics", heading: "Function notation f(x)", covers: "What f(x) means, calculating f(3) and f(−2), finding x when f(x) is given, f(a + 1) type expressions." },
      { id: "harder-algebra", heading: "Harder expanding & factorising", covers: "Factorising expressions like 2x² − 50, (x+3)² − (x−1)², x⁴ − 16, quadratics in disguise, algebraic proof that an expression is always odd/a multiple of 4.", stretch: true },
    ],
  },
  {
    id: "solving-equations",
    title: "Linear & Simultaneous Equations",
    strand: "Algebra",
    icon: "🟰",
    curriculum: "School Unit 5 · Edexcel 4MA1 2.3–2.6 (linear equations, rearranging formulae, simultaneous equations)",
    sections: [
      { id: "linear-equations", heading: "Linear equations", covers: "Unknowns on both sides, brackets, fractions (multiply through by the LCD), forming equations from contexts (angles, perimeters, ages)." },
      { id: "rearranging-once", heading: "Changing the subject (appears once)", covers: "Inverse operations incl. squares and square roots, e.g. make r the subject of V = (4/3)πr³." },
      { id: "rearranging-twice", heading: "Changing the subject (appears twice)", covers: "Collect terms in the subject, factorise, divide; e.g. make x the subject of y = (x + 2)/(x − 3)." },
      { id: "simultaneous-linear", heading: "Simultaneous linear equations", covers: "Elimination and substitution, scaling both equations, forming and solving from contexts (tickets, coins)." },
      { id: "simultaneous-three", heading: "Three equations, three unknowns", covers: "Eliminate one variable twice to reduce to two equations; checking all three.", stretch: true },
    ],
  },
  {
    id: "quadratic-equations",
    title: "Quadratic Equations",
    strand: "Algebra",
    icon: "🪃",
    curriculum: "School Unit 5 · Edexcel 4MA1 2.6–2.7 (quadratics by factorising, completing the square, formula; linear–quadratic simultaneous; algebraic fractions)",
    sections: [
      { id: "solve-by-factorising", heading: "Solving by factorising", covers: "Rearranging to = 0 first, x² = 5x trap (don't divide by x), a ≠ 1, forming quadratics from area problems and rejecting invalid roots." },
      { id: "solve-completing-square", heading: "Solving by completing the square", covers: "Exact surd answers; why it leads to the formula." },
      { id: "quadratic-formula", heading: "The quadratic formula", covers: "Deriving it by completing the square; answers to 2 or 3 s.f.; the discriminant b² − 4ac and number of roots." },
      { id: "linear-quadratic-simultaneous", heading: "Linear–quadratic simultaneous equations", covers: "Substitute the linear into the quadratic (incl. circles x² + y² = r²), pair up solutions correctly, geometric meaning." },
      { id: "algebraic-fraction-equations", heading: "Equations with algebraic fractions", covers: "Multiplying through by the common denominator to get a quadratic; checking for excluded values." },
      { id: "disguised-quadratics", heading: "Disguised quadratics", covers: "x⁴ − 5x² + 4 = 0, equations in √x or 2^x, substitution u = …, and rejecting impossible values.", stretch: true },
    ],
  },
  {
    id: "inequalities",
    title: "Inequalities",
    strand: "Algebra",
    icon: "↔️",
    curriculum: "School Unit 12 · Edexcel 4MA1 2.9–2.10 (linear and quadratic inequalities, regions)",
    sections: [
      { id: "linear-inequalities", heading: "Solving linear inequalities", covers: "Solving and representing on a number line; flipping the sign when multiplying/dividing by a negative; double inequalities; integer solutions." },
      { id: "graphical-regions", heading: "Regions on a graph", covers: "Shading regions defined by several linear inequalities (solid vs dashed lines), finding inequalities that define a region, integer points in a region." },
      { id: "quadratic-inequalities", heading: "Quadratic inequalities", covers: "Find the critical values, sketch the parabola, read off x < a or x > b vs a < x < b; set notation for solutions." },
    ],
  },
  {
    id: "sequences",
    title: "Sequences & Series",
    strand: "Algebra",
    icon: "🔢",
    curriculum: "School Unit 11 · Edexcel 4MA1 2.1 sequences, 3.1 (nth term, arithmetic series)",
    sections: [
      { id: "linear-nth-term", heading: "The nth term of linear sequences", covers: "Finding and using an + b, testing whether a number is a term, term-to-term vs position-to-term." },
      { id: "arithmetic-sequences", heading: "Arithmetic sequences: a + (n − 1)d", covers: "Using a and d, finding terms from two given terms, simultaneous equations from sequence information." },
      { id: "arithmetic-series", heading: "Sum of an arithmetic series", covers: "Gauss's pairing derivation of Sn = n/2(2a + (n − 1)d); finding n given Sn; contexts (savings, seats)." },
      { id: "quadratic-sequences", heading: "Quadratic sequences", covers: "Second differences, finding an² + bn + c, fractional sequences with nth terms on top and bottom.", stretch: true },
      { id: "limiting-values", heading: "Limiting values of sequences", covers: "What happens to (2n + 1)/(n + 3) as n gets large; proving the limit by dividing through by n.", stretch: true },
    ],
  },
  {
    id: "functions",
    title: "Functions",
    strand: "Algebra",
    icon: "⚙️",
    curriculum: "School Unit 12 · Edexcel 4MA1 3.2 (function notation, domain and range, composite and inverse functions)",
    sections: [
      { id: "functions-as-mappings", heading: "Functions as mappings", covers: "A function maps each input to exactly one output; f(x) = … and f: x ↦ … notation; evaluating." },
      { id: "domain-range", heading: "Domain and range", covers: "Values that must be excluded (division by zero, square roots of negatives); range from a graph or completed square." },
      { id: "composite-functions", heading: "Composite functions", covers: "fg(x) means f(g(x)) — do g first; fg ≠ gf; solving fg(x) = k." },
      { id: "inverse-functions", heading: "Inverse functions", covers: "Swap and rearrange (or flowchart reversal), f⁻¹(x), checking ff⁻¹(x) = x, reflection in y = x, self-inverse functions." },
    ],
  },
  {
    id: "linear-graphs",
    title: "Straight-Line Graphs & Coordinate Geometry",
    strand: "Algebra",
    icon: "📈",
    curriculum: "School Unit 7 · Edexcel 4MA1 3.3, 4.5 (y = mx + c, gradients, parallel/perpendicular lines, midpoints, distances)",
    sections: [
      { id: "y-mx-c", heading: "Gradient and y = mx + c", covers: "Gradient as rise/run from two points, intercept, equation of a line through two points, reading m and c from implicit forms like 3x + 2y = 12." },
      { id: "point-gradient-form", heading: "Using y − y₁ = m(x − x₁)", covers: "Equation from a point and a gradient; rearranging to ax + by + c = 0 with integers." },
      { id: "midpoint-distance", heading: "Midpoint and distance", covers: "Midpoint formula; length of a line segment via Pythagoras; finding an endpoint given the midpoint." },
      { id: "parallel-perpendicular", heading: "Parallel lines, perpendicular lines & normals", covers: "Parallel: equal gradients; perpendicular: m₁m₂ = −1; perpendicular bisectors; the normal to a line at a point." },
      { id: "intersections", heading: "Intersections and simultaneous equations", covers: "The point of intersection solves both equations; finding intersections algebraically and graphically; area of a triangle formed by lines." },
      { id: "dividing-a-line", heading: "Dividing a line in a given ratio", covers: "Point P dividing AB in ratio m:n: P = A + m/(m+n)(B − A); using it in reverse.", stretch: true },
    ],
  },
  {
    id: "graphs-of-functions",
    title: "Graphs of Functions",
    strand: "Algebra",
    icon: "〰️",
    curriculum: "School Unit 7 · Edexcel 4MA1 3.3–3.4 (quadratic, cubic, reciprocal, exponential graphs; graphical solutions; transformations; real-life graphs)",
    sections: [
      { id: "plotting-quadratics", heading: "Plotting quadratic graphs", covers: "Tables of values with negatives, smooth curves, line of symmetry, reading roots and turning points." },
      { id: "recognising-graphs", heading: "Recognising graph shapes", covers: "Linear, quadratic, cubic, reciprocal (1/x), exponential (a^x) — matching equations to sketches; asymptotes." },
      { id: "sketching-quadratics", heading: "Sketching quadratics from completed square", covers: "Turning point (−p, q) from (x + p)² + q, axis of symmetry, x- and y-intercepts, max vs min." },
      { id: "graphical-solutions", heading: "Solving equations graphically", covers: "Roots of ax² + bx + c = 0 as x-intercepts; solving f(x) = g(x) with a line on a quadratic or cubic; which line to draw." },
      { id: "real-life-graphs", heading: "Real-life graphs, gradients and areas", covers: "Distance–time and speed–time graphs: gradient = rate, area under = distance (trapezia); tangents to estimate gradient of a curve." },
      { id: "graph-transformations", heading: "Transformations of graphs", covers: "y = f(x) + a, f(x + a), af(x), f(ax), −f(x), f(−x): effect on points and turning points." },
      { id: "exponential-functions", heading: "Exponential functions", covers: "y = ka^x growth and decay, finding k and a from points, contexts (bacteria, depreciation), comparing with linear growth.", stretch: true },
    ],
  },
  {
    id: "calculus",
    title: "Differentiation",
    strand: "Algebra",
    icon: "∂",
    curriculum: "Edexcel 4MA1 3.4 (differentiation of polynomials, gradients, tangents, turning points, kinematics)",
    sections: [
      { id: "gradient-of-a-curve", heading: "The gradient of a curve", covers: "Gradient changes along a curve; chords getting closer to a tangent; dy/dx as the gradient function." },
      { id: "differentiating-powers", heading: "Differentiating ax^n", covers: "Bring the power down, reduce by one; sums of terms; expand or split fractions before differentiating (incl. negative powers)." },
      { id: "tangents", heading: "Gradients and tangents", covers: "Gradient at a point, finding where the gradient has a given value, equation of the tangent at a point." },
      { id: "turning-points", heading: "Turning points", covers: "dy/dx = 0; deciding max or min (sign of gradient either side or second derivative); optimisation in context (boxes, fences)." },
      { id: "kinematics", heading: "Kinematics: displacement, velocity, acceleration", covers: "v = ds/dt, a = dv/dt; when the particle is at rest; interpreting signs." },
      { id: "normals", heading: "Normals to curves", covers: "Normal gradient = −1/(dy/dx); equation of the normal at a point; where tangent/normal meets the axes.", stretch: true },
    ],
  },
  // -------------------------- GEOMETRY & MEASURE --------------------------
  {
    id: "angles-circle-theorems",
    title: "Angles, Polygons & Circle Theorems",
    strand: "Geometry & Measure",
    icon: "⭕",
    curriculum: "School Unit 10 · Edexcel 4MA1 4.1–4.4, 4.6 (angle facts, polygons, circle theorems, intersecting chords, constructions and loci)",
    sections: [
      { id: "angle-facts", heading: "Angle facts and parallel lines", covers: "Angles on a line/point, vertically opposite, alternate, corresponding, co-interior; giving reasons in exam language." },
      { id: "polygons", heading: "Angles in polygons", covers: "Interior/exterior angle sums, regular polygons, finding the number of sides, tessellation reasoning." },
      { id: "circle-theorems-1", heading: "Circle theorems: centre, semicircle, same segment", covers: "Angle at centre = 2 × angle at circumference, angle in a semicircle, angles in the same segment, isosceles triangles from radii." },
      { id: "circle-theorems-2", heading: "Cyclic quadrilaterals, tangents & alternate segment", covers: "Opposite angles sum to 180°, tangent ⟂ radius, equal tangents from a point, alternate segment theorem; multi-step problems with reasons." },
      { id: "chords", heading: "Chords and intersecting chords", covers: "Perpendicular from centre bisects a chord; intersecting chords AP × PB = CP × PD (inside and outside); tangent–secant." },
      { id: "circle-proofs", heading: "Proving circle theorems", covers: "Proof of the angle at the centre theorem and others using isosceles triangles; structuring a geometric proof." },
      { id: "constructions-loci", heading: "Constructions and loci", covers: "Perpendicular bisector, angle bisector, perpendicular from a point; loci as regions (distance from a point/line, equidistant)." },
    ],
  },
  {
    id: "mensuration",
    title: "Length, Area & Volume",
    strand: "Geometry & Measure",
    icon: "📦",
    curriculum: "School Unit 4 · Edexcel 4MA1 4.9–4.10 (arcs, sectors, surface area and volume of prisms, cylinders, pyramids, cones, spheres, frustums)",
    sections: [
      { id: "circles-arcs-sectors", heading: "Circles, arcs and sectors", covers: "Circumference and area, semicircles, arc length and sector area as fractions of a circle, perimeter of a sector, exact answers in terms of π." },
      { id: "areas-2d", heading: "Areas of 2D shapes", covers: "Triangles, parallelograms, trapezia, compound shapes, shaded regions." },
      { id: "prisms-cylinders", heading: "Prisms and cylinders", covers: "Volume = cross-section × length; surface area of cuboids, triangular prisms, cylinders; capacity and unit conversions (cm³ ↔ litres)." },
      { id: "cones-spheres-pyramids", heading: "Pyramids, cones and spheres", covers: "Volume ⅓Ah, cone curved area πrl, sphere 4/3πr³ and 4πr²; hemispheres; composite solids." },
      { id: "frustums-composite", heading: "Frustums and harder volume problems", covers: "Frustum as cone minus cone, melting and recasting, water levels, finding a radius from a volume, answers in terms of π." },
    ],
  },
  {
    id: "similarity-congruence",
    title: "Similarity & Congruence",
    strand: "Geometry & Measure",
    icon: "🔍",
    curriculum: "School Unit 4 · Edexcel 4MA1 4.5–4.6, 4.10 (congruence, similar shapes, area and volume scale factors, unit conversions)",
    sections: [
      { id: "congruence", heading: "Congruent triangles", covers: "SSS, SAS, ASA, RHS — and why SSA isn't enough; writing a congruence proof with reasons." },
      { id: "similar-lengths", heading: "Similar shapes: lengths", covers: "Recognising similar triangles (equal angles), linear scale factor, missing lengths including nested triangles and parallel lines." },
      { id: "area-volume-units", heading: "Converting units of area and volume", covers: "1 m² = 10 000 cm², 1 m³ = 1 000 000 cm³ — why; litres and cm³." },
      { id: "area-volume-scale", heading: "Area and volume scale factors", covers: "k, k², k³; going from areas or volumes back to lengths; mass and capacity problems; paint and model problems." },
    ],
  },
  {
    id: "pythagoras-trigonometry",
    title: "Pythagoras & Right-Angled Trigonometry",
    strand: "Geometry & Measure",
    icon: "📐",
    curriculum: "School Unit 8 · Edexcel 4MA1 4.8 (Pythagoras, trigonometry, bearings, elevation/depression, 3D)",
    sections: [
      { id: "pythagoras", heading: "Pythagoras' theorem", covers: "Hypotenuse and shorter sides, exact surd answers, isosceles triangles, checking for right angles (converse)." },
      { id: "pythagorean-triples", heading: "Pythagorean triples", covers: "3-4-5, 5-12-13, 8-15-17, 7-24-25 and multiples as shortcuts; generating triples.", stretch: true },
      { id: "sohcahtoa", heading: "SOH CAH TOA", covers: "Labelling sides, missing sides and angles, multi-step problems through a shared side." },
      { id: "bearings-elevation", heading: "Bearings, elevation & depression", covers: "Three-figure bearings, back bearings, angles of elevation and depression, combined with Pythagoras." },
      { id: "three-d", heading: "Pythagoras and trigonometry in 3D", covers: "Space diagonal of a cuboid, angle between a line and a plane, pyramids — finding the right right-angled triangle." },
      { id: "exact-values", heading: "Exact trig values", covers: "sin, cos, tan of 0°, 30°, 45°, 60°, 90° from the 45-45-90 and 30-60-90 triangles; exact-answer problems.", stretch: true },
    ],
  },
  {
    id: "further-trigonometry",
    title: "Sine & Cosine Rules, Trig Graphs & Identities",
    strand: "Geometry & Measure",
    icon: "🌊",
    curriculum: "School Unit 8 · Edexcel 4MA1 4.8 (sine rule, cosine rule, ½ab sin C, trig graphs) + H+ trig identities and equations",
    sections: [
      { id: "sine-rule", heading: "The sine rule", covers: "Deriving it from two heights; missing sides and angles; the ambiguous case (two possible triangles)." },
      { id: "cosine-rule", heading: "The cosine rule", covers: "When to use it (SAS or SSS); finding an obtuse angle; links to Pythagoras." },
      { id: "area-sine", heading: "Area = ½ab sin C", covers: "Derivation; using it backwards to find an angle or side; segment area (sector − triangle)." },
      { id: "trig-graphs", heading: "Graphs of sin, cos and tan", covers: "Shapes, periods, symmetries; using graphs to find all solutions in 0°–360°; transformations of trig graphs." },
      { id: "trig-identities", heading: "Trig identities", covers: "tan θ = sin θ / cos θ and sin²θ + cos²θ = 1: proving and using them.", stretch: true },
      { id: "trig-equations", heading: "Solving trig equations in an interval", covers: "sin x = 0.5, 2cos²x − cos x − 1 = 0, tan 2x = 1 in given intervals.", stretch: true },
    ],
  },
  {
    id: "vectors-transformations",
    title: "Vectors & Transformations",
    strand: "Geometry & Measure",
    icon: "➡️",
    curriculum: "Edexcel 4MA1 5.1–5.2 (vectors, vector geometry, transformations)",
    sections: [
      { id: "transformations", heading: "Transformations", covers: "Reflections (y = x, x = a), rotations (centre, angle, direction), translations by column vectors, enlargement incl. fractional and negative scale factors; describing fully." },
      { id: "combined-transformations", heading: "Combined transformations & invariance", covers: "Sequences of transformations, single equivalent transformation, invariant points." },
      { id: "vector-basics", heading: "Vectors: notation and arithmetic", covers: "Column vectors, adding, subtracting, scalar multiples, magnitude via Pythagoras, position vectors." },
      { id: "vector-geometry", heading: "Vector geometry", covers: "Expressing paths in terms of a and b, midpoints and ratios along a line, proving parallel and collinear." },
    ],
  },
  // ----------------------- STATISTICS & PROBABILITY ----------------------
  {
    id: "statistics",
    title: "Statistics",
    strand: "Statistics & Probability",
    icon: "📊",
    curriculum: "School Unit 6 · Edexcel 4MA1 6.1–6.2 (averages, quartiles, cumulative frequency, histograms)",
    sections: [
      { id: "averages-raw-data", heading: "Averages and spread of raw data", covers: "Mean, median, mode, range; working backwards with the mean; combined means." },
      { id: "quartiles-iqr", heading: "Quartiles and interquartile range", covers: "Finding Q1, Q3 and IQR from lists; why IQR resists outliers; comparing distributions in context." },
      { id: "frequency-tables", heading: "Frequency tables and grouped data", covers: "Mean, median, mode from discrete tables; estimated mean, modal class and median class from grouped tables; estimating the range." },
      { id: "cumulative-frequency", heading: "Cumulative frequency graphs", covers: "Constructing (plot at upper bounds), reading median, quartiles, IQR, percentiles and 'how many more than…'." },
      { id: "histograms", heading: "Histograms with unequal class widths", covers: "Frequency density = frequency ÷ class width; drawing; reading frequencies from bars; estimating from part of a class." },
    ],
  },
  {
    id: "sets-venn",
    title: "Sets & Venn Diagrams",
    strand: "Statistics & Probability",
    icon: "🔗",
    curriculum: "School Unit 9 · Edexcel 4MA1 1.3 (set notation, Venn diagrams)",
    sections: [
      { id: "set-notation", heading: "Set notation", covers: "∈, ∉, ξ, ∅, A′, A ∪ B, A ∩ B, n(A), subsets ⊂; listing sets from descriptions." },
      { id: "venn-diagrams", heading: "Venn diagrams with two and three sets", covers: "Filling in from the centre outwards, using algebra for unknown regions, shading regions described in set notation." },
      { id: "venn-hcf-lcm", heading: "Venn diagrams for HCF and LCM", covers: "Prime-factor Venn diagrams for two or three numbers." },
      { id: "venn-probability", heading: "Probability from Venn diagrams", covers: "P(A ∩ B), P(A ∪ B), P(A′), conditional probability P(A | B) as 'given'." },
    ],
  },
  {
    id: "probability",
    title: "Probability",
    strand: "Statistics & Probability",
    icon: "🎲",
    curriculum: "School Unit 9 · Edexcel 4MA1 6.3 (probability, tree diagrams, conditional probability) + H+ counting and binomial expansion",
    sections: [
      { id: "basic-probability", heading: "Probability, sample spaces & expected frequency", covers: "Sample space diagrams, relative frequency from experiments, expected frequency = n × p, missing probabilities in tables." },
      { id: "or-and-rules", heading: "The OR and AND rules", covers: "Mutually exclusive: P(A or B) = P(A) + P(B); independent: P(A and B) = P(A) × P(B); 'at least one' via 1 − P(none)." },
      { id: "tree-diagrams", heading: "Tree diagrams", covers: "Two and three events, with and without replacement, dependent events, conditional probability from trees." },
      { id: "algebraic-probability", heading: "Probability with algebra", covers: "Forming and solving equations (often quadratics) from probability information, e.g. n sweets with replacement removed." },
      { id: "counting", heading: "The product rule for counting", covers: "Number of outcomes of successive choices; arrangements; PIN codes; with restrictions.", stretch: true },
      { id: "binomial-expansion", heading: "Binomial expansion", covers: "Pascal's triangle, expanding (a + b)^n for small positive integers n, finding a specific term or coefficient.", stretch: true },
    ],
  },
];

export function metaById(id: string): TopicMeta | undefined {
  return TOPIC_META.find((t) => t.id === id);
}
