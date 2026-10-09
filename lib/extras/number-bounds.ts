import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "A sign says a lift can carry 630 kg, correct to the nearest 10 kg, and eight people each weigh 78 kg, correct to the nearest kg. 8 × 78 = 624, so it looks safe — but is it? Upper and lower bounds are how engineers answer \"is it *definitely* safe?\" rather than \"is it probably fine?\"",
  didYouKnow: [
    "In 1982 the Vancouver Stock Exchange launched a new index at 1000. It was recalculated thousands of times a day, and each time the result was *truncated* to 3 decimal places instead of rounded. By November 1983 the index read about 525 — when correctly calculated it should have been about 1099. Tiny truncation errors, all in the same direction, had added up.",
    "During the 1991 Gulf War, a Patriot missile battery's clock counted time in tenths of a second, but 0.1 cannot be stored exactly in binary. After about 100 hours of running, the rounding error had grown to roughly 0.34 seconds — enough for the system to fail to track an incoming missile.",
    "Periodical cicadas in North America spend 13 or 17 years underground before emerging together. Both are prime numbers, and one theory is that prime cycles make it rare for their emergence to line up with the cycles of predators — an LCM argument made by evolution.",
    "Every whole number greater than 1 can be written as a product of primes in exactly one way (apart from the order). This is the *Fundamental Theorem of Arithmetic*, and it is why prime-factor Venn diagrams always give the right HCF and LCM.",
    "Online banking and shopping are protected by RSA encryption, which relies on the fact that multiplying two huge primes is easy, but splitting the product back into its prime factors is (as far as anyone knows) extremely slow for a computer.",
    "In 2020, China and Nepal jointly announced a new height for Mount Everest: 8848.86 m. Quoting it to 2 decimal places (the nearest centimetre) is a claim about accuracy — the surveyors were confident the true height lies within that tiny error interval.",
  ],
  activities: [
    {
      title: "How big is your desk, really?",
      emoji: "📏",
      materials: ["A ruler or tape measure marked in cm and mm", "A desk or table", "A calculator"],
      steps: [
        "Measure the length and width of the desk to the nearest centimetre. Write each as an error interval, e.g. {{119.5 <= L < 120.5}}.",
        "Work out the lower bound and the upper bound of the area of the desk. How far apart are they, in {{cm^2}}?",
        "Now measure both lengths again, this time to the nearest millimetre (0.1 cm). Write the new error intervals.",
        "Recalculate the bounds of the area. How much narrower is the gap now?",
        "Decide: to how many significant figures can you honestly state the area each time? (Round both bounds until they agree.)",
      ],
      maths: "Every measurement is really an interval, not a single number. Multiplying two intervals gives a wider interval for the area, so the area is less accurate than either length. Measuring ten times more precisely shrinks the gap by about ten times, and lets you quote the answer to one more significant figure.",
    },
    {
      title: "Euclid's rectangle: find the HCF with scissors",
      emoji: "✂️",
      materials: ["Squared paper", "Scissors", "A pencil"],
      steps: [
        "Cut out a rectangle 12 squares by 42 squares (or any two whole numbers you like).",
        "Cut the biggest possible square off one end (12 by 12). Keep cutting 12 × 12 squares off until what's left is narrower than 12. You should be left with a 12 by 6 strip.",
        "Repeat with the strip: cut the biggest square you can (6 by 6) as many times as possible.",
        "When the last piece is itself a square with nothing left over, its side length is the HCF of your two numbers. Here it is 6.",
        "Check with prime factors: {{12 = 2^2 * 3}} and {{42 = 2 * 3 * 7}}, so HCF = 2 × 3 = 6. Try 21 by 56 next.",
      ],
      maths: "Any square that tiles the whole rectangle must also tile each piece you cut off, so the HCF never changes as you cut. This is Euclid's algorithm (about 300 BC): HCF(42, 12) = HCF(12, 6) = 6. It is still how computers find HCFs today, because it is far faster than factorising large numbers.",
    },
  ],
  bonusDiagrams: [
    {
      title: "HCF and LCM from a prime-factor Venn diagram",
      svg: `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram for 84 and 120. 84 equals 2 squared times 3 times 7 and 120 equals 2 cubed times 3 times 5. The overlap holds 2, 2 and 3, so the HCF is 12. Only 84 holds 7. Only 120 holds 2 and 5. Multiplying everything in the diagram gives the LCM, 840."><rect x="0" y="0" width="440" height="250" fill="#ffffff"/><text x="220" y="22" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">84 = 2 × 2 × 3 × 7      120 = 2 × 2 × 2 × 3 × 5</text><circle cx="170" cy="130" r="85" fill="#c7d2fe" fill-opacity="0.7" stroke="#334155" stroke-width="2"/><circle cx="270" cy="130" r="85" fill="#fde68a" fill-opacity="0.7" stroke="#334155" stroke-width="2"/><text x="120" y="60" font-size="14" font-family="sans-serif" font-weight="700" fill="#1f2937">84</text><text x="300" y="60" font-size="14" font-family="sans-serif" font-weight="700" fill="#1f2937">120</text><text x="125" y="136" font-size="16" font-family="sans-serif" fill="#1f2937">7</text><text x="208" y="118" font-size="16" font-family="sans-serif" fill="#1f2937">2   2</text><text x="214" y="148" font-size="16" font-family="sans-serif" fill="#1f2937">3</text><text x="300" y="120" font-size="16" font-family="sans-serif" fill="#1f2937">2</text><text x="300" y="150" font-size="16" font-family="sans-serif" fill="#1f2937">5</text><text x="220" y="232" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">HCF = 2 × 2 × 3 = 12      LCM = 7 × 2 × 2 × 3 × 2 × 5 = 840</text></svg>`,
      caption: "Shared prime factors go in the overlap. The HCF is the product of the overlap ({{2^2 * 3 = 12}}); the LCM is the product of everything in the diagram ({{2^3 * 3 * 5 * 7 = 840}}). Notice that {{12 * 840 = 84 * 120 = 10080}} — the overlap gets counted twice either way.",
    },
    {
      title: "The error interval for 6.4 (to 1 d.p.)",
      svg: `<svg viewBox="0 0 440 150" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line from 6.3 to 6.5 with ticks every 0.05. The interval from 6.35 to 6.45 is shaded. There is a filled circle at 6.35, meaning included, and an open circle at 6.45, meaning not included. Values in the shaded region round to 6.4."><rect x="0" y="0" width="440" height="150" fill="#ffffff"/><line x1="30" y1="80" x2="410" y2="80" stroke="#334155" stroke-width="2"/><line x1="40" y1="72" x2="40" y2="88" stroke="#334155" stroke-width="1.5"/><line x1="130" y1="72" x2="130" y2="88" stroke="#334155" stroke-width="1.5"/><line x1="220" y1="72" x2="220" y2="88" stroke="#334155" stroke-width="1.5"/><line x1="310" y1="72" x2="310" y2="88" stroke="#334155" stroke-width="1.5"/><line x1="400" y1="72" x2="400" y2="88" stroke="#334155" stroke-width="1.5"/><text x="40" y="106" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">6.3</text><text x="130" y="106" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6.35</text><text x="220" y="106" font-size="13" font-family="sans-serif" font-weight="700" text-anchor="middle" fill="#1f2937">6.4</text><text x="310" y="106" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6.45</text><text x="400" y="106" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">6.5</text><rect x="130" y="72" width="180" height="16" fill="#bbf7d0" stroke="none"/><line x1="130" y1="80" x2="310" y2="80" stroke="#1f2937" stroke-width="4"/><circle cx="130" cy="80" r="7" fill="#1f2937"/><circle cx="310" cy="80" r="7" fill="#ffffff" stroke="#1f2937" stroke-width="2.5"/><text x="130" y="52" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">included (≤)</text><text x="310" y="52" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">not included (&lt;)</text><text x="220" y="135" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6.35 ≤ x &lt; 6.45   — every value here rounds to 6.4</text></svg>`,
      caption: "6.35 rounds up to 6.4, so it belongs to the interval (filled circle). 6.45 rounds up to 6.5, so it does not (open circle) — but it is still called the *upper bound*, because the interval gets as close to it as you like.",
    },
  ],
  history: {
    title: "Eratosthenes measures the Earth",
    story: "Around 240 BC, Eratosthenes, the librarian at Alexandria, heard that at noon on midsummer's day the Sun shone straight down a well at Syene, far to the south. At the same moment in Alexandria, a vertical stick cast a shadow at about 7.2° — one-fiftieth of a full circle. So the distance from Alexandria to Syene, about 5000 stadia, must be one-fiftieth of the Earth's circumference: about 250 000 stadia. Nobody is sure exactly how long his stadion was, so modern estimates of his answer range from very close to the true 40 000 km to about 15% too big. Every input was a rounded measurement — the angle, the distance, the unit — which makes his result a perfect bounds problem. (He is also remembered for the Sieve of Eratosthenes, a method for listing primes.)",
  },
};
