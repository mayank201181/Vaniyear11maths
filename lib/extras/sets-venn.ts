import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In a pack of 52 cards, 26 are red and 12 are picture cards — so how many cards are red **or** a picture card? Not 38. The answer hides in the overlap, and that overlap is the whole idea behind this topic.",
  didYouKnow: [
    "John Venn introduced his diagrams in 1880, in a paper called *On the Diagrammatic and Mechanical Representation of Propositions and Reasonings*. He called them “Eulerian circles” — the name “Venn diagram” came later.",
    "Leonhard Euler was using overlapping circles to explain logic more than a century earlier, in his *Letters to a German Princess* (written in the 1760s). Euler's diagrams only draw the overlaps that actually exist; Venn's draw every possible overlap, even empty ones.",
    "You cannot draw a proper four-set Venn diagram with four circles: four sets need {{2^4 = 16}} regions, but four circles can make at most 14. Venn himself used ellipses to get all 16.",
    "The empty-set symbol ∅ was introduced in 1939 by the French mathematician André Weil, borrowing the letter Ø from the Norwegian alphabet.",
    "Georg Cantor, who founded set theory in the 1870s, proved that some infinite sets are bigger than others: there are “more” real numbers than whole numbers, because no list of whole-number positions can ever contain every decimal.",
    "A stained-glass window at Gonville and Caius College, Cambridge — where Venn was a student and later President — shows a three-set Venn diagram in his memory.",
  ],
  activities: [
    {
      title: "The card-sorting Venn",
      emoji: "🃏",
      materials: ["A pack of playing cards (jokers removed)", "Two loops of string or two hula hoops", "Paper and pen"],
      steps: [
        "Lay the two loops on the floor so they overlap. Label one R = {red cards} and the other P = {picture cards: J, Q, K}.",
        "Deal every card into the correct region — the overlap, R only, P only, or outside both loops.",
        "Count each region. Check that n(R ∪ P) = n(R) + n(P) − n(R ∩ P).",
        "Work out P(red) and P(red | picture card). Are they equal? What does that tell you?",
      ],
      maths: "You should find 6 cards in the overlap, 20 in R only, 6 in P only and 20 outside, so n(R ∪ P) = 26 + 12 − 6 = 32, not 38 — the overlap was counted twice. Also P(red) = {{26/52 = 1/2}} and P(red | picture) = {{6/12 = 1/2}}: knowing a card is a picture card doesn't change the chance it is red, so the two events are **independent**.",
    },
    {
      title: "Sticky-note prime factors",
      emoji: "🟨",
      materials: ["Sticky notes", "Two overlapping circles drawn on a large sheet of paper", "Pen"],
      steps: [
        "Pick two numbers, e.g. 60 and 84. Write each prime factor on its own sticky note: 60 = 2 × 2 × 3 × 5 and 84 = 2 × 2 × 3 × 7.",
        "Any prime that appears in **both** lists goes in the overlap — one note per matching pair. Put the leftovers in the right circle.",
        "Multiply the notes in the overlap to get the HCF. Multiply every note on the sheet to get the LCM.",
        "Check: HCF × LCM should equal 60 × 84. Repeat with your own pairs of numbers.",
      ],
      maths: "The overlap holds 2, 2, 3 so the HCF is 12; the whole diagram holds 5, 2, 2, 3, 7 so the LCM is 420. And 12 × 420 = 5040 = 60 × 84 — always true for two numbers, because the overlap is counted twice in 60 × 84 and once each in the HCF and the LCM.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Why we subtract the overlap",
      svg: `<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two overlapping circles A and B. A has 12 elements in total and B has 9, with 4 in the overlap. Adding 12 and 9 gives 21, which counts the overlap twice, so the union has 21 minus 4 equals 17 elements."><rect x="0" y="0" width="440" height="230" fill="#ffffff"/><rect x="10" y="10" width="270" height="200" fill="none" stroke="#334155" stroke-width="1.5"/><text x="20" y="30" font-size="14" font-family="sans-serif" fill="#1f2937">ξ</text><circle cx="110" cy="110" r="70" fill="#c7d2fe" fill-opacity="0.6" stroke="#1f2937" stroke-width="2"/><circle cx="180" cy="110" r="70" fill="#fde68a" fill-opacity="0.6" stroke="#1f2937" stroke-width="2"/><text x="52" y="44" font-size="15" font-weight="700" font-family="sans-serif" fill="#1f2937">A</text><text x="232" y="44" font-size="15" font-weight="700" font-family="sans-serif" fill="#1f2937">B</text><text x="78" y="115" font-size="15" font-family="sans-serif" fill="#1f2937" text-anchor="middle">8</text><text x="145" y="115" font-size="15" font-weight="700" font-family="sans-serif" fill="#1f2937" text-anchor="middle">4</text><text x="212" y="115" font-size="15" font-family="sans-serif" fill="#1f2937" text-anchor="middle">5</text><text x="296" y="50" font-size="13" font-family="sans-serif" fill="#1f2937">n(A) = 8 + 4 = 12</text><text x="296" y="74" font-size="13" font-family="sans-serif" fill="#1f2937">n(B) = 4 + 5 = 9</text><text x="296" y="106" font-size="13" font-family="sans-serif" fill="#1f2937">12 + 9 = 21 counts</text><text x="296" y="124" font-size="13" font-family="sans-serif" fill="#1f2937">the 4 twice, so</text><text x="296" y="156" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">n(A ∪ B)</text><text x="296" y="176" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">= 12 + 9 − 4 = 17</text></svg>`,
      caption: "The 4 elements in the overlap belong to A **and** to B, so they are counted in n(A) and again in n(B). Subtract them once: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). This is the *inclusion–exclusion* principle.",
    },
    {
      title: "HCF and LCM of 60 and 84 in one picture",
      svg: `<svg viewBox="0 0 440 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram of the prime factors of 60 and 84. 60 only: 5. Both: 2, 2 and 3. 84 only: 7. The overlap multiplies to the HCF, 12. Everything multiplies to the LCM, 420."><rect x="0" y="0" width="440" height="230" fill="#ffffff"/><circle cx="110" cy="110" r="72" fill="#c7d2fe" fill-opacity="0.6" stroke="#1f2937" stroke-width="2"/><circle cx="185" cy="110" r="72" fill="#bbf7d0" fill-opacity="0.6" stroke="#1f2937" stroke-width="2"/><text x="60" y="34" font-size="15" font-weight="700" font-family="sans-serif" fill="#1f2937">60</text><text x="222" y="34" font-size="15" font-weight="700" font-family="sans-serif" fill="#1f2937">84</text><text x="75" y="115" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle">5</text><text x="148" y="94" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2</text><text x="148" y="116" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle">2</text><text x="148" y="138" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle">3</text><text x="222" y="115" font-size="16" font-family="sans-serif" fill="#1f2937" text-anchor="middle">7</text><text x="280" y="70" font-size="13" font-family="sans-serif" fill="#1f2937">60 = 2 × 2 × 3 × 5</text><text x="280" y="90" font-size="13" font-family="sans-serif" fill="#1f2937">84 = 2 × 2 × 3 × 7</text><text x="280" y="126" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">HCF = 2 × 2 × 3 = 12</text><text x="280" y="150" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">LCM = 5 × 12 × 7</text><text x="316" y="170" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">= 420</text></svg>`,
      caption: "Each circle holds the prime factors of its number, with shared primes in the overlap. The overlap is everything the numbers have in common — the HCF. The whole diagram is the smallest collection that contains both numbers — the LCM.",
    },
  ],
  history: {
    title: "John Venn and his circles",
    story: "John Venn (1834–1923) was a logician and priest who spent most of his life at Gonville and Caius College, Cambridge. In 1880 he published a short paper showing how overlapping circles could test logical arguments: draw every possible overlap, shade out what the premises rule impossible, and read off what must be true. He was improving on Euler's circles from the previous century, and in 1881 he used the method throughout his book *Symbolic Logic*. Venn was also a keen engineer — in 1909 he built a machine for bowling cricket balls that impressed a visiting Australian team. The name “Venn diagram” seems to have been popularised by the American logician Clarence Irving Lewis in 1918, and today the diagrams appear everywhere from IGCSE papers to data science.",
  },
};
