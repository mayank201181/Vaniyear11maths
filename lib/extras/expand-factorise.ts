import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Work out 49 × 51 in your head in under three seconds. It's 2499, because 49 × 51 = (50 − 1)(50 + 1) = 50² − 1² — the same identity that factorises {{x^2 - 1}}.",

  didYouKnow: [
    "The difference of two squares is a real mental-maths shortcut: pick the number halfway between the two you're multiplying. For 47 × 53 the midpoint is 50, so 47 × 53 = 50² − 3² = 2500 − 9 = 2491.",
    "Around 820 CE, al-Khwarizmi solved *a square and ten roots equal thirty-nine*, which we write {{x^2 + 10x = 39}}, by literally completing a square. He drew the {{x^2}} square, added strips for the 10x, and filled in the missing corner of 25 to make 64 = 8². So {{x + 5 = 8}} and {{x = 3}}.",
    "Babylonian scribes were solving problems that lead to quadratic equations nearly 4,000 years ago. Clay tablets from about 1800 BCE give step-by-step recipes that match completing the square, written out in words for particular numbers.",
    "Euclid's *Elements* (around 300 BCE) proves {{(a + b)^2 = a^2 + 2ab + b^2}} with no algebra at all. Book II, Proposition 4 cuts a square into two smaller squares and two equal rectangles.",
    "Not every sum of squares is impossible to factorise. Sophie Germain's identity says {{a^4 + 4b^4 = (a^2 + 2ab + 2b^2)(a^2 - 2ab + 2b^2)}}. Putting a = 1 and b = 1 gives 5 = 5 × 1, and a = 3, b = 1 gives 85 = 17 × 5.",
    "The kinetic energy formula {{E = 1/2 m v^2}} explains why speed limits matter so much: v is squared, so doubling your speed multiplies the energy by 4 — and braking distance grows in the same way.",
  ],

  activities: [
    {
      title: "Cut out a completed square",
      emoji: "✂️",
      materials: ["2 sheets of squared or plain paper", "Ruler and pencil", "Scissors", "Coloured pens (optional)"],
      steps: [
        "Let one length be {{x = 8}} cm. Draw and cut out an 8 cm by 8 cm square and label it {{x^2}}.",
        "Cut out a strip 8 cm long and 6 cm wide and label it {{6x}}. Together the two pieces have area {{x^2 + 6x}} = 64 + 48 = 112 cm².",
        "Cut the {{6x}} strip lengthways into two strips, each 8 cm by 3 cm. Halving the 6 is the first step of completing the square.",
        "Put one strip along the right side of the square and the other along the bottom. You now have an almost-square of side 8 + 3 = 11 cm, with a 3 cm by 3 cm corner missing.",
        "Measure the area of the full 11 cm square (121 cm²) and subtract the missing corner (9 cm²). Check that you get 112 cm².",
        "Try again with a {{10x}} strip. How wide is each half-strip, and how big is the missing corner?",
      ],
      maths:
        "Splitting {{6x}} into two strips of {{3x}} and filling the gap gives the identity\n\n    {{x^2 + 6x = (x + 3)^2 - 9}}\n\nThe missing corner is always ({{b/2}})². That's why you halve b and then subtract its square. With a {{10x}} strip the half-strips are 5 cm wide and the missing corner is 25 cm², so {{x^2 + 10x = (x + 5)^2 - 25}}.",
    },
    {
      title: "The calendar square that always gives 7",
      emoji: "📅",
      materials: ["Any monthly calendar (paper or on a phone)", "Pencil and paper", "A calculator (optional)"],
      steps: [
        "Draw a 2 by 2 box around four dates on the calendar, for example 9, 10, 16 and 17.",
        "Multiply the two dates on each diagonal: top-left × bottom-right and top-right × bottom-left. Here 9 × 17 = 153 and 10 × 16 = 160.",
        "Find the difference: 160 − 153 = 7. Try three more boxes anywhere on the calendar. What happens every time?",
        "Prove it. Call the top-left date n. Write the other three dates in terms of n (remember a week is 7 days).",
        "Expand and simplify {{(n + 1)(n + 7) - n(n + 8)}}. Then predict the answer for a 3 by 3 box using the corner dates, and test it.",
      ],
      maths:
        "The dates are n, n + 1, n + 7 and n + 8, so\n\n    {{(n + 1)(n + 7) - n(n + 8) = n^2 + 8n + 7 - n^2 - 8n = 7}}\n\nThe n² and 8n terms cancel, so the difference is 7 wherever the box is. That's an algebraic proof. For a 3 by 3 box the corners are n, n + 2, n + 14 and n + 16, and {{(n + 2)(n + 14) - n(n + 16) = 28}}.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Completing the square is a picture",
      svg: `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="An x by x square with a 3 by x strip on its right and an x by 3 strip below it. The 3 by 3 corner is missing, shown dashed. Together the pieces are x squared plus 6x, which equals (x plus 3) squared minus 9."><rect x="0" y="0" width="440" height="260" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="220" y="22" font-size="14" font-weight="bold">x² + 6x: split the 6x into two strips of 3x</text></g><g stroke="#334155" stroke-width="1.5"><rect x="50" y="56" width="120" height="120" fill="#c7d2fe"/><rect x="170" y="56" width="45" height="120" fill="#fde68a"/><rect x="50" y="176" width="120" height="45" fill="#fde68a"/></g><rect x="170" y="176" width="45" height="45" fill="#ffffff" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="5 4"/><g stroke="#334155" stroke-width="1"><line x1="50" y1="44" x2="170" y2="44"/><line x1="170" y1="44" x2="215" y2="44"/><line x1="50" y1="40" x2="50" y2="48"/><line x1="170" y1="40" x2="170" y2="48"/><line x1="215" y1="40" x2="215" y2="48"/><line x1="38" y1="56" x2="38" y2="176"/><line x1="38" y1="176" x2="38" y2="221"/><line x1="34" y1="56" x2="42" y2="56"/><line x1="34" y1="176" x2="42" y2="176"/><line x1="34" y1="221" x2="42" y2="221"/></g><g font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="13"><text x="110" y="38">x</text><text x="192" y="38">3</text><text x="26" y="120">x</text><text x="26" y="203">3</text><text x="110" y="121" font-size="15" font-weight="bold">x²</text><text x="192" y="121" font-weight="bold">3x</text><text x="110" y="203" font-weight="bold">3x</text><text x="192" y="196" font-size="11" fill="#c2410c">3² = 9</text><text x="192" y="210" font-size="11" fill="#c2410c">missing</text></g><g font-family="sans-serif" fill="#1f2937" font-size="13"><text x="240" y="90">The pieces almost make a</text><text x="240" y="108">square of side x + 3.</text><text x="240" y="138">Fill the corner, then take</text><text x="240" y="156">it away again:</text><text x="240" y="196" font-size="15" font-weight="bold">x² + 6x = (x + 3)² − 9</text></g></svg>`,
      caption:
        "Halve the x-coefficient to get the strip width (3). The strips leave a gap of {{3^2}} = 9, so you add the gap to make {{(x + 3)^2}} and then subtract it. Drawn to scale with x = 8: the full square is 11 by 11 = 121, and 121 − 9 = 64 + 48. The same picture gives {{x^2 + bx = (x + b/2)^2 - (b/2)^2}}.",
    },
    {
      title: "Why a² − b² = (a + b)(a − b)",
      svg: `<svg viewBox="0 0 460 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: a square of side a with a smaller b by b square removed from its corner, leaving an L-shape made of two rectangles. Right: the two rectangles rearranged into one rectangle with sides a plus b and a minus b."><rect x="0" y="0" width="460" height="260" fill="#ffffff"/><g font-family="sans-serif" fill="#1f2937" text-anchor="middle"><text x="105" y="22" font-size="14" font-weight="bold">a² − b²</text><text x="335" y="22" font-size="14" font-weight="bold">(a + b)(a − b)</text></g><g stroke="#334155" stroke-width="1.5"><rect x="30" y="50" width="150" height="90" fill="#c7d2fe"/><rect x="30" y="140" width="90" height="60" fill="#fde68a"/></g><rect x="120" y="140" width="60" height="60" fill="#ffffff" stroke="#c2410c" stroke-width="1.5" stroke-dasharray="5 4"/><g stroke="#334155" stroke-width="1.5"><rect x="230" y="80" width="150" height="90" fill="#c7d2fe"/><rect x="380" y="80" width="60" height="90" fill="#fde68a"/></g><g stroke="#334155" stroke-width="1"><line x1="30" y1="214" x2="120" y2="214"/><line x1="30" y1="210" x2="30" y2="218"/><line x1="120" y1="210" x2="120" y2="218"/><line x1="230" y1="68" x2="440" y2="68"/><line x1="230" y1="64" x2="230" y2="72"/><line x1="440" y1="64" x2="440" y2="72"/><line x1="448" y1="80" x2="448" y2="170"/><line x1="444" y1="80" x2="452" y2="80"/><line x1="444" y1="170" x2="452" y2="170"/></g><g font-family="sans-serif" fill="#1f2937" text-anchor="middle" font-size="13"><text x="105" y="44">a</text><text x="18" y="100">a − b</text><text x="18" y="174">b</text><text x="150" y="215">b</text><text x="194" y="174">b</text><text x="75" y="232">a − b</text><text x="150" y="168" font-size="11" fill="#c2410c">b² removed</text><text x="105" y="100" font-weight="bold">A</text><text x="75" y="174" font-weight="bold">B</text><text x="305" y="130" font-weight="bold">A</text><text x="410" y="130" font-weight="bold">B</text><text x="335" y="60">a + b</text><text x="335" y="200">B turns on its side and</text><text x="335" y="218">slides next to A</text></g><text x="456" y="129" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="end" transform="rotate(-90 456 129)">a − b</text></svg>`,
      caption:
        "Cut a b-by-b square from the corner of an a-by-a square. The L-shape left has area {{a^2 - b^2}}. Slice it into rectangle A ({{a}} by {{a - b}}) and rectangle B ({{b}} by {{a - b}}), then turn B and put it next to A. They make one rectangle {{a + b}} long and {{a - b}} high. Drawn to scale with a = 5 and b = 2: 25 − 4 = 21 = 7 × 3.",
    },
  ],

  history: {
    title: "Monsieur Le Blanc's identity",
    story:
      "Sophie Germain (1776–1831) taught herself mathematics in Paris during the French Revolution, reading her father's books by candlelight. Women were not allowed to study at the new École Polytechnique, so she got hold of the lecture notes and sent work to the professor Joseph-Louis Lagrange under a man's name, *Monsieur Le Blanc*. Lagrange was so impressed that he asked to meet the student, and found out who she was. He became her supporter.\n\nShe also wrote to Carl Friedrich Gauss as Le Blanc. Gauss only learned the truth in 1807, and wrote that she must have 'the noblest courage'. Today her name is on an identity that factorises a sum, {{a^4 + 4b^4}}, which looks as if it shouldn't factorise at all. It is a favourite of maths olympiad problem-setters.",
  },
};
