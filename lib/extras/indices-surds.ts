import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "A sheet of paper is about 0.1 mm thick. Fold it in half 42 times and, on paper at least, the stack would reach past the Moon: {{0.1 * 2^42}} mm is about {{4.4 * 10^5}} km. Indices are how mathematicians tame numbers that grow (or shrink) this fast.",
  didYouKnow: [
    "The record for folding one sheet of paper in half is 12 times. It was set in 2002 by Britney Gallivan, a high-school student in California, who also worked out the formula for how much paper you need for each extra fold.",
    "A-series paper (A4, A5, A3 …) has sides in the ratio {{sqrt(2) : 1}}. That is the only ratio that stays the same when you cut the sheet in half, which is why an A4 sheet folded in half is exactly A5.",
    "The word *surd* comes from the Latin *surdus*, meaning 'deaf' or 'mute'. Medieval translators used it for an Arabic term describing numbers that could not be 'spoken' as a ratio of whole numbers.",
    "Since 2019 the Avogadro constant has been defined as exactly {{6.02214076 * 10^23}} particles per mole — standard form sits at the heart of the SI system of units.",
    "The superscript notation {{x^3}} was popularised by René Descartes in *La Géométrie* (1637). Even he usually wrote xx rather than {{x^2}}.",
    "A hydrogen atom is about {{10^(-10)}} m across and the observable universe is about {{8.8 * 10^26}} m across — so the universe is roughly {{10^37}} hydrogen atoms wide.",
  ],
  activities: [
    {
      title: "How many folds to the top of Marina Bay Sands?",
      emoji: "📄",
      materials: ["A pack of printer paper (the label tells you how many sheets)", "A ruler", "One spare sheet to fold", "A calculator"],
      steps: [
        "Measure the thickness of the whole pack in mm and divide by the number of sheets to find the thickness of one sheet (usually about 0.1 mm).",
        "Fold the spare sheet in half again and again. After each fold, write down the number of layers: 2, 4, 8, … as powers of 2.",
        "Stop when you can't fold any more (most people manage 6 or 7). Write the thickness after n folds as {{0.1 * 2^n}} mm.",
        "Marina Bay Sands is about 194 m tall. Convert 194 m to mm and write it in standard form.",
        "Use trial and improvement with powers of 2 to find the smallest n with {{0.1 * 2^n}} mm taller than the hotel. (Check: 20 folds is about 105 m, 21 folds is about 210 m.)",
      ],
      maths: "Each fold multiplies the thickness by 2, so n folds multiply it by {{2^n}}. That is exponential growth: only 21 folds turn 0.1 mm into a 200 m tower, and 42 folds reach the Moon. Standard form keeps the huge numbers manageable.",
    },
    {
      title: "Find √2 hiding in a sheet of A4",
      emoji: "📏",
      materials: ["A sheet of A4 paper", "A ruler", "A calculator"],
      steps: [
        "Measure the long and short sides of the A4 sheet in mm (you should get about 297 mm and 210 mm).",
        "Work out long ÷ short. Compare it with {{sqrt(2)}} on your calculator.",
        "Fold the sheet in half across the long side to make A5. Measure its sides and work out long ÷ short again.",
        "Now prove it: suppose the sides are 1 and r, and halving gives sides {{r/2}} and 1 in the same ratio. Show that {{r/1 = 1/(r/2)}} leads to {{r^2 = 2}}.",
        "Use the fact that A0 has area 1 m² to show that the long side of A0 is {{2^(1/4)}} m ≈ 1.189 m.",
      ],
      maths: "Keeping the same shape when you halve a rectangle forces the ratio of its sides to satisfy {{r^2 = 2}}, so {{r = sqrt(2)}} — a surd you hold every day. The last step uses fractional indices: area {{r x^2 = 1}} with {{r = sqrt(2)}} gives {{x = 2^(-1/4)}} for the short side, so the long side is {{2^(1/4)}}.",
    },
  ],
  bonusDiagrams: [
    {
      title: "A square of area 2 has side √2",
      svg: `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A 2 by 2 square made of four unit squares. A tilted square joins the midpoints of the four sides. Each unit square is cut in half by a side of the tilted square, so the tilted square is made of four half unit squares and has area 2. Its side is labelled root 2."><rect x="0" y="0" width="440" height="240" fill="#ffffff"/><rect x="40" y="30" width="180" height="180" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><line x1="130" y1="30" x2="130" y2="210" stroke="#334155" stroke-width="1" stroke-dasharray="4 3"/><line x1="40" y1="120" x2="220" y2="120" stroke="#334155" stroke-width="1" stroke-dasharray="4 3"/><polygon points="130,30 220,120 130,210 40,120" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><text x="96" y="95" font-size="13" font-family="sans-serif" fill="#1f2937">½</text><text x="156" y="95" font-size="13" font-family="sans-serif" fill="#1f2937">½</text><text x="96" y="155" font-size="13" font-family="sans-serif" fill="#1f2937">½</text><text x="156" y="155" font-size="13" font-family="sans-serif" fill="#1f2937">½</text><text x="186" y="66" font-size="14" font-family="sans-serif" font-weight="700" fill="#1f2937">√2</text><text x="81" y="24" font-size="12" font-family="sans-serif" fill="#334155">1</text><text x="171" y="24" font-size="12" font-family="sans-serif" fill="#334155">1</text><text x="244" y="58" font-size="13" font-family="sans-serif" fill="#1f2937">Big square: 2 × 2 = 4</text><text x="244" y="88" font-size="13" font-family="sans-serif" fill="#1f2937">Blue square: four halves</text><text x="244" y="106" font-size="13" font-family="sans-serif" fill="#1f2937">of unit squares = area 2</text><text x="244" y="136" font-size="13" font-family="sans-serif" fill="#1f2937">So its side is √2,</text><text x="244" y="154" font-size="13" font-family="sans-serif" fill="#1f2937">and √2 × √2 = 2</text></svg>`,
      caption: "The blue square is made of four half-squares, so its area is 2. A square of area 2 has side {{sqrt(2)}} — which is why {{sqrt(2) * sqrt(2) = 2}}. The side is also the diagonal of a unit square, as Pythagoras confirms: {{1^2 + 1^2 = 2}}.",
    },
    {
      title: "Why √8 = 2√2",
      svg: `<svg viewBox="0 0 440 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A 4 by 4 grid of unit squares. A tilted square joins the midpoints of the four sides, so it has half the area of the grid, which is 8. Each side of the tilted square crosses two unit squares diagonally, so each side is made of two lengths of root 2."><rect x="0" y="0" width="440" height="240" fill="#ffffff"/><rect x="40" y="30" width="180" height="180" fill="#fde68a" stroke="#334155" stroke-width="1.5"/><line x1="85" y1="30" x2="85" y2="210" stroke="#334155" stroke-width="1"/><line x1="130" y1="30" x2="130" y2="210" stroke="#334155" stroke-width="1"/><line x1="175" y1="30" x2="175" y2="210" stroke="#334155" stroke-width="1"/><line x1="40" y1="75" x2="220" y2="75" stroke="#334155" stroke-width="1"/><line x1="40" y1="120" x2="220" y2="120" stroke="#334155" stroke-width="1"/><line x1="40" y1="165" x2="220" y2="165" stroke="#334155" stroke-width="1"/><polygon points="130,30 220,120 130,210 40,120" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><circle cx="175" cy="75" r="4" fill="#1f2937"/><text x="156" y="48" font-size="13" font-family="sans-serif" font-weight="700" fill="#1f2937">√2</text><text x="204" y="90" font-size="13" font-family="sans-serif" font-weight="700" fill="#1f2937">√2</text><text x="244" y="58" font-size="13" font-family="sans-serif" fill="#1f2937">Grid: 4 × 4 = 16</text><text x="244" y="88" font-size="13" font-family="sans-serif" fill="#1f2937">Blue square: half of it,</text><text x="244" y="106" font-size="13" font-family="sans-serif" fill="#1f2937">area 8, so side √8</text><text x="244" y="136" font-size="13" font-family="sans-serif" fill="#1f2937">Each side = two unit</text><text x="244" y="154" font-size="13" font-family="sans-serif" fill="#1f2937">diagonals = 2√2</text><text x="244" y="184" font-size="14" font-family="sans-serif" font-weight="700" fill="#1f2937">√8 = 2√2</text></svg>`,
      caption: "The same tilted square drawn on a 4 × 4 grid has area 8, so its side is {{sqrt(8)}}. But each side runs across exactly two unit squares corner to corner, so it is also {{2sqrt(2)}}. Two descriptions of one length: {{sqrt(8) = 2sqrt(2)}} — that's what simplifying a surd means.",
    },
  ],
  history: {
    title: "Archimedes counts the sand",
    story: "Around 250 BC, Archimedes of Syracuse set himself a challenge: how many grains of sand would it take to fill the whole universe? Greek numerals had no easy way to write numbers beyond a myriad myriad (100 million), so in his book *The Sand Reckoner* he invented a system of 'orders' and 'periods' — powers of a myriad myriad — and showed how to multiply them by adding their positions. That is our index law {{10^a * 10^b = 10^(a+b)}}, more than 1800 years before the notation existed. Using the best astronomy of his day, he concluded the universe could hold no more than about {{10^63}} grains. His point was not the exact answer, but that no quantity is too large to name and calculate with — the same idea behind standard form.",
  },
};
