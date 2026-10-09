import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Which gives you more pizza: one 30 cm pizza, or two 20 cm pizzas? Area is proportional to the *square* of the diameter, so compare {{30^2 = 900}} with {{20^2 + 20^2 = 800}} — the single big one wins, by 12.5%.",

  didYouKnow: [
    "A4 paper measures 210 mm by 297 mm — a ratio of 1 : {{sqrt(2)}} (to the nearest millimetre). It is the only ratio where cutting a sheet in half gives two smaller sheets of exactly the same shape, which is why A3, A4 and A5 all look alike.",
    "Light obeys an inverse-square law: move twice as far from a lamp and the light falling on your page is a quarter as bright. Mars is about 1.52 times as far from the Sun as Earth, so it gets only about {{1/1.52^2 ~= 0.43}} — roughly 43% — of the sunlight per square metre that we do.",
    "The kinetic energy of a moving car is proportional to the square of its speed. At 60 km/h a car carries 4 times the energy it has at 30 km/h, so (with the same brakes) it needs about 4 times the braking distance.",
    "Ice has a density of about 0.92 g/cm³ and sea water about 1.03 g/cm³. The ratio {{0.92/1.03 ~= 0.89}} is why roughly nine-tenths of an iceberg is hidden under the surface.",
    "Gold has a density of about 19.3 g/cm³. A one-litre juice carton filled with gold would have a mass of about 19.3 kg — more than most Year 11 school bags weigh even on a heavy day.",
    "Kepler's third law says a planet's year T satisfies T² ∝ r³, where r is its distance from the Sun. Jupiter is about 5.2 times as far out as Earth, so its year is about {{sqrt(5.2^3) ~= 11.9}} Earth years — exactly what astronomers observe.",
  ],

  activities: [
    {
      title: "Clock your own speed",
      emoji: "⏱️",
      materials: ["A tape measure (or a known distance, like a 20 m stretch of corridor)", "A phone stopwatch", "A friend or family member to time you"],
      steps: [
        "Mark out exactly 20 m. Walk it at a normal pace while someone times you. Repeat twice and take the mean time.",
        "Work out your speed in m/s: distance ÷ time.",
        "Convert to km/h by multiplying by 3.6. (Why 3.6? 1 m/s is 3600 m in an hour, which is 3.6 km.)",
        "Now jog the 20 m and repeat. How long would each speed take to cover the 2.4 km of a typical cross-country course?",
      ],
      maths:
        "Speed is a compound measure — distance per unit time — so its units tell you the formula: m/s means metres ÷ seconds. A typical walking speed is about 1.4 m/s ≈ 5 km/h. Using time = distance ÷ speed, 2.4 km at 5 km/h takes about 0.48 h ≈ 29 minutes.",
    },
    {
      title: "Density detective: sink or float?",
      emoji: "🥔",
      materials: ["Kitchen scales", "A measuring jug with ml markings, part-filled with water", "A few small solid objects that fit in the jug: a potato, an apple, a pebble, a candle stub"],
      steps: [
        "Weigh each object in grams.",
        "Note the water level in the jug, push the object just under the surface (with a thin skewer), and read the new level. The rise in ml is the object's volume in cm³ (1 ml = 1 cm³).",
        "Work out each density: mass ÷ volume, in g/cm³.",
        "Before you drop each one in, predict: will it float or sink? Then test.",
      ],
      maths:
        "Water has a density of about 1 g/cm³. Anything denser sinks; anything less dense floats. You will usually find an apple floats (around 0.8 g/cm³) while a potato sinks (a little over 1 g/cm³) — even though they are about the same size. Volume by displacement is the trick Archimedes is said to have used to test a gold crown.",
    },
  ],

  bonusDiagrams: [
    {
      title: "A ratio that changes after a transfer — as a bar model",
      svg: `<svg viewBox="0 0 440 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar model. Before: Aisha has 5 blocks and Ravi has 3 blocks, ratio 5 to 3. Aisha gives Ravi 1 block, worth 10 dollars. After: both have 4 blocks, ratio 1 to 1. So one block is 10 dollars and Aisha started with 50 dollars."><rect x="0" y="0" width="440" height="250" fill="#ffffff"/><text x="20" y="24" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937">Before  (5 : 3)</text><text x="20" y="56" font-size="12" font-family="sans-serif" fill="#1f2937">Aisha</text><rect x="80" y="40" width="50" height="26" fill="#c7d2fe" stroke="#334155"/><rect x="130" y="40" width="50" height="26" fill="#c7d2fe" stroke="#334155"/><rect x="180" y="40" width="50" height="26" fill="#c7d2fe" stroke="#334155"/><rect x="230" y="40" width="50" height="26" fill="#c7d2fe" stroke="#334155"/><rect x="280" y="40" width="50" height="26" fill="#fde68a" stroke="#334155" stroke-width="2"/><text x="20" y="94" font-size="12" font-family="sans-serif" fill="#1f2937">Ravi</text><rect x="80" y="78" width="50" height="26" fill="#bbf7d0" stroke="#334155"/><rect x="130" y="78" width="50" height="26" fill="#bbf7d0" stroke="#334155"/><rect x="180" y="78" width="50" height="26" fill="#bbf7d0" stroke="#334155"/><path d="M305 68 C 305 110, 270 120, 255 130" fill="none" stroke="#334155" stroke-width="1.5"/><path d="M255 130 l 9 -2 l -4 -7 z" fill="#334155"/><text x="318" y="100" font-size="12" font-family="sans-serif" fill="#334155">gives $10</text><text x="20" y="150" font-size="13" font-family="sans-serif" font-weight="bold" fill="#1f2937">After  (1 : 1)</text><text x="20" y="182" font-size="12" font-family="sans-serif" fill="#1f2937">Aisha</text><rect x="80" y="166" width="50" height="26" fill="#c7d2fe" stroke="#334155"/><rect x="130" y="166" width="50" height="26" fill="#c7d2fe" stroke="#334155"/><rect x="180" y="166" width="50" height="26" fill="#c7d2fe" stroke="#334155"/><rect x="230" y="166" width="50" height="26" fill="#c7d2fe" stroke="#334155"/><text x="20" y="220" font-size="12" font-family="sans-serif" fill="#1f2937">Ravi</text><rect x="80" y="204" width="50" height="26" fill="#bbf7d0" stroke="#334155"/><rect x="130" y="204" width="50" height="26" fill="#bbf7d0" stroke="#334155"/><rect x="180" y="204" width="50" height="26" fill="#bbf7d0" stroke="#334155"/><rect x="230" y="204" width="50" height="26" fill="#fde68a" stroke="#334155" stroke-width="2"/><text x="300" y="200" font-size="12" font-family="sans-serif" fill="#1f2937">1 block = $10</text><text x="300" y="218" font-size="12" font-family="sans-serif" fill="#1f2937">Aisha had 5 × $10</text><text x="300" y="236" font-size="12" font-family="sans-serif" font-weight="bold" fill="#1f2937">= $50</text></svg>`,
      caption:
        "Aisha and Ravi share money 5 : 3. Aisha gives Ravi $10 and now they have the same. The total (8 blocks) never changes, so \"the same\" means 4 blocks each — Aisha gave away exactly one block. One block is $10, so Aisha started with $50 and Ravi with $30. Keeping the total fixed is the key to most transfer problems.",
    },
    {
      title: "Why light follows an inverse-square law",
      svg: `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Side view of light spreading from a small lamp. The same beam covers a panel of height 1 unit at distance d, 2 units at distance 2d and 3 units at distance 3d. Areas are 1, 4 and 9 squares, so the brightness is 1, one quarter and one ninth."><rect x="0" y="0" width="440" height="260" fill="#ffffff"/><line x1="40" y1="130" x2="340" y2="70" stroke="#334155" stroke-width="1.2" stroke-dasharray="5 3"/><line x1="40" y1="130" x2="340" y2="190" stroke="#334155" stroke-width="1.2" stroke-dasharray="5 3"/><circle cx="40" cy="130" r="9" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><text x="40" y="160" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">lamp</text><rect x="137" y="110" width="6" height="40" fill="#fde68a" stroke="#1f2937"/><rect x="237" y="90" width="6" height="80" fill="#fde68a" stroke="#1f2937"/><line x1="237" y1="130" x2="243" y2="130" stroke="#1f2937"/><rect x="337" y="70" width="6" height="120" fill="#fde68a" stroke="#1f2937"/><line x1="337" y1="110" x2="343" y2="110" stroke="#1f2937"/><line x1="337" y1="150" x2="343" y2="150" stroke="#1f2937"/><line x1="40" y1="215" x2="340" y2="215" stroke="#1f2937" stroke-width="1"/><line x1="40" y1="210" x2="40" y2="220" stroke="#1f2937"/><line x1="140" y1="210" x2="140" y2="220" stroke="#1f2937"/><line x1="240" y1="210" x2="240" y2="220" stroke="#1f2937"/><line x1="340" y1="210" x2="340" y2="220" stroke="#1f2937"/><text x="140" y="234" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">d</text><text x="240" y="234" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2d</text><text x="340" y="234" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">3d</text><text x="140" y="100" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1 square</text><text x="240" y="80" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2 × 2 = 4</text><text x="355" y="60" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">3 × 3 = 9</text><text x="140" y="252" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">brightness 1</text><text x="240" y="252" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">÷ 4</text><text x="340" y="252" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#334155">÷ 9</text></svg>`,
      caption:
        "The same beam of light spreads out in two directions at once. At twice the distance it is twice as wide *and* twice as tall, so it covers 2 × 2 = 4 times the area; at three times the distance, 9 times. The same light shared over more area gives brightness {{I = k/d^2}} — inverse proportion to the square of the distance.",
    },
  ],

  history: {
    title: "Eratosthenes measures the Earth with a ratio",
    story:
      "Around 240 BC, Eratosthenes, the librarian of Alexandria, heard that at noon on midsummer's day the Sun shone straight down a well at Syene (modern Aswan), far to the south. At the same moment in Alexandria, a vertical stick cast a short shadow: the Sun was about {{1/50}} of a full circle (7.2°) away from overhead. Assuming the Sun's rays arrive parallel, that angle is also the angle between the two cities measured from the centre of the Earth. So the distance from Alexandria to Syene — about 5000 stadia — must be {{1/50}} of the Earth's circumference, giving 250 000 stadia. Nobody knows exactly how long his stadion was, but on most estimates his answer is within about 15% of the true 40 000 km — found with one shadow and a ratio.",
  },
};
