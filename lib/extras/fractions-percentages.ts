import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Why does {{1/8}} stop at 0.125, but {{1/12}} goes 0.08333… for ever? And why do {{1/7}}, {{2/7}}, {{3/7}} all use the *same six digits* in a different order? One fact about the denominator explains both.",

  didYouKnow: [
    "0.999… (nines for ever) is **exactly** 1, not just close to it. Let x = 0.999…, so 10x = 9.999…. Subtract: 9x = 9, so x = 1. It is the same algebra you use to turn any recurring decimal into a fraction.",
    "{{1/7}} = 0.142857142857… and every other seventh uses the same cycle of six digits, starting at a different place: {{2/7}} = 0.285714…, {{3/7}} = 0.428571…, {{6/7}} = 0.857142…. The long division passes through the same six remainders, just entered at a different point.",
    "{{1/97}} has a recurring cycle **96 digits long** — the longest possible, because when you divide by 97 there are only 96 non-zero remainders. For any prime p other than 2 and 5, the cycle length of {{1/p}} always divides p − 1.",
    "The ancient Egyptians wrote fractions (apart from {{2/3}}) as sums of different unit fractions. The Rhind Mathematical Papyrus, copied around 1550 BC, opens with a table writing {{2/n}} this way for odd n up to 101 — for example {{2/5 = 1/3 + 1/15}}.",
    "The \"rule of 72\" — money at r% compound interest doubles in roughly 72 ÷ r years — appears in Luca Pacioli's *Summa de arithmetica* of 1494. It works because {{1.08^9 ~= 2}}, {{1.06^12 ~= 2}} and {{1.12^6 ~= 2}}.",
    "Singapore's GST rose from 8% to 9% on 1 January 2024. That is 1 percentage point, but the tax on a purchase went up by {{1/8}} of its old amount — a 12.5% increase in the tax itself.",
  ],

  activities: [
    {
      title: "Cycle hunt with a calculator",
      emoji: "🔁",
      materials: ["A calculator", "Paper and a pencil", "A compass or a round lid to draw circles"],
      steps: [
        "Work out {{1/7}}, {{2/7}}, … {{6/7}} as decimals. Write the six digits 1, 4, 2, 8, 5, 7 round a circle.",
        "Check that every seventh can be read off the circle: just start at a different digit and go round.",
        "Now try thirteenths: {{1/13}}, {{2/13}}, … {{12/13}}. How many different cycles do you find, and how long is each one?",
        "Predict which of {{1/11}}, {{1/16}}, {{1/40}}, {{1/21}} will terminate *before* you divide. Use the prime factors of the denominator, then check.",
      ],
      maths:
        "Sevenths have one cycle of length 6; thirteenths split into **two** cycles of length 6 (0.076923… and 0.153846…), because 12 possible remainders split into two loops of 6. A fraction in its simplest form terminates exactly when its denominator has no prime factors other than 2 and 5 — so {{1/16}} and {{1/40}} terminate but {{1/11}} and {{1/21}} recur.",
    },
    {
      title: "Scale a recipe with mixed numbers",
      emoji: "🥘",
      materials: ["A vegetarian recipe (e.g. dhal or vegetable curry) that serves 4", "Measuring cups or scales", "Paper — no calculator"],
      steps: [
        "Copy the ingredient list. Suppose the recipe needs {{1 1/2}} cups of lentils, {{3/4}} cup of coconut milk and {{2 1/4}} cups of water for 4 people.",
        "Scale it for 6 people: multiply each amount by {{6/4 = 3/2}}. Show the working with improper fractions, e.g. {{3/2 * 9/4 = 27/8 = 3 3/8}} cups of water.",
        "Scale the original for 3 people instead: multiply by {{3/4}}.",
        "You only have {{2 1/4}} cups of lentils. How many people can you feed? (Divide {{2 1/4}} by the lentils per person.)",
      ],
      maths:
        "Scaling is fraction multiplication; \"how many people\" is fraction division. Converting to improper fractions first makes both safe: {{2 1/4}} ÷ {{3/8}} = {{9/4 * 8/3}} = 6, because each person needs {{1 1/2}} ÷ 4 = {{3/8}} cup of lentils.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Why the recurring tail cancels",
      svg: `<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two lines lined up at the decimal point: 100x equals 27 point 272727 and so on, and x equals 0 point 272727 and so on. The identical recurring tails are highlighted. Subtracting gives 99x equals 27, so x equals 27 over 99, which is 3 over 11."><rect x="0" y="0" width="440" height="230" fill="#ffffff"/><rect x="232" y="26" width="120" height="30" fill="#fde68a"/><rect x="232" y="68" width="120" height="30" fill="#fde68a"/><text x="110" y="47" font-size="16" font-family="sans-serif" text-anchor="end" fill="#1f2937">100x =</text><text x="230" y="47" font-size="16" font-family="sans-serif" text-anchor="end" fill="#1f2937">27</text><text x="232" y="47" font-size="16" font-family="sans-serif" fill="#1f2937">.272727…</text><text x="110" y="89" font-size="16" font-family="sans-serif" text-anchor="end" fill="#1f2937">x =</text><text x="230" y="89" font-size="16" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="232" y="89" font-size="16" font-family="sans-serif" fill="#1f2937">.272727…</text><text x="40" y="78" font-size="18" font-family="sans-serif" fill="#334155">−</text><line x1="60" y1="108" x2="360" y2="108" stroke="#1f2937" stroke-width="1.5"/><text x="110" y="134" font-size="16" font-family="sans-serif" text-anchor="end" fill="#1f2937">99x =</text><text x="230" y="134" font-size="16" font-family="sans-serif" text-anchor="end" fill="#1f2937">27</text><text x="232" y="134" font-size="16" font-family="sans-serif" fill="#334155">.000000…</text><text x="370" y="66" font-size="12" font-family="sans-serif" fill="#334155">same</text><text x="370" y="80" font-size="12" font-family="sans-serif" fill="#334155">tails</text><text x="220" y="174" font-size="16" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">x = 27 ÷ 99 = 3 ÷ 11</text><text x="220" y="206" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">Multiply by 10 to the power of the cycle length (here 2), so the tails line up.</text></svg>`,
      caption:
        "Let x = 0.272727…. The cycle is 2 digits long, so multiply by 100: the tails of 100x and x are identical and vanish when you subtract. 99x = 27 gives x = {{27/99 = 3/11}}.",
    },
    {
      title: "Compound vs simple interest, drawn to scale",
      svg: `<svg viewBox="0 0 440 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Paired bars for years 0 to 5 for 1000 dollars at 10 percent. Compound values: 1000, 1100, 1210, 1331, 1464.10, 1610.51. Simple values: 1000, 1100, 1200, 1300, 1400, 1500. The compound bars pull further ahead each year."><rect x="0" y="0" width="440" height="300" fill="#ffffff"/><line x1="40" y1="250" x2="430" y2="250" stroke="#1f2937" stroke-width="1.5"/><rect x="52" y="130" width="24" height="120" fill="#c7d2fe" stroke="#334155"/><rect x="76" y="130" width="24" height="120" fill="#bbf7d0" stroke="#334155"/><rect x="117" y="118" width="24" height="132" fill="#c7d2fe" stroke="#334155"/><rect x="141" y="118" width="24" height="132" fill="#bbf7d0" stroke="#334155"/><rect x="182" y="104.8" width="24" height="145.2" fill="#c7d2fe" stroke="#334155"/><rect x="206" y="106" width="24" height="144" fill="#bbf7d0" stroke="#334155"/><rect x="247" y="90.28" width="24" height="159.72" fill="#c7d2fe" stroke="#334155"/><rect x="271" y="94" width="24" height="156" fill="#bbf7d0" stroke="#334155"/><rect x="312" y="74.31" width="24" height="175.69" fill="#c7d2fe" stroke="#334155"/><rect x="336" y="82" width="24" height="168" fill="#bbf7d0" stroke="#334155"/><rect x="377" y="56.74" width="24" height="193.26" fill="#c7d2fe" stroke="#334155"/><rect x="401" y="70" width="24" height="180" fill="#bbf7d0" stroke="#334155"/><text x="76" y="266" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="141" y="266" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">1</text><text x="206" y="266" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2</text><text x="271" y="266" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">3</text><text x="336" y="266" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">4</text><text x="401" y="266" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">5</text><text x="240" y="288" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">years</text><text x="389" y="50" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">$1610.51</text><text x="425" y="64" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">$1500</text><rect x="52" y="20" width="14" height="14" fill="#c7d2fe" stroke="#334155"/><text x="72" y="31" font-size="12" font-family="sans-serif" fill="#1f2937">Compound: $1000 × 1.1 each year</text><rect x="52" y="40" width="14" height="14" fill="#bbf7d0" stroke="#334155"/><text x="72" y="51" font-size="12" font-family="sans-serif" fill="#1f2937">Simple: + $100 each year</text></svg>`,
      caption:
        "$1000 at 10% a year. Simple interest adds the same $100 every year (a straight line of growth). Compound interest multiplies by 1.1, so each year's interest is bigger than the last: $1610.51 after 5 years against $1500. The gap — $110.51 — is the interest earned on interest.",
    },
  ],

  history: {
    title: "Simon Stevin and \"The Tenth\"",
    story:
      "In 1585 the Flemish engineer Simon Stevin published a short pamphlet called *De Thiende* — \"The Tenth\". Merchants of his day worked with awkward fractions such as {{17/24}} of a florin, and every calculation meant hunting for common denominators. Stevin argued that if everything were measured in tenths, hundredths and thousandths, fractions could be added and multiplied as easily as whole numbers. His notation was clumsy — he wrote a small circled number after each digit to show its place — but the idea spread. A few decades later John Napier helped popularise the decimal point we use today. Stevin even urged governments to adopt decimal coins and measures; that finally happened with the metric system after the French Revolution, two centuries later.",
  },
};
