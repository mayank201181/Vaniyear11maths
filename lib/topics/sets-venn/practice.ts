import type { TopicPractice } from "../../types.ts";

// ---------------------------------------------------------------------------
// Venn diagrams (generated from exact geometry: circles r = 65 centred 70 apart)
// ---------------------------------------------------------------------------

const Q_D1 = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram: universal set ξ with overlapping circles A and B. A only: 7. A and B: 4. B only: 9. Outside both circles: 5."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">B</text><text x="95" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">7</text><text x="160" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">4</text><text x="225" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">9</text><text x="280" y="178" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">5</text></svg>`;

const Q_SHADE = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram: universal set ξ with overlapping circles A and B. Only the part of B that is outside A is shaded."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><path d="M160,50.23 A65,65 0 1,1 160,159.77 A65,65 0 0,0 160,50.23 Z" fill="#fde68a" fill-rule="evenodd" stroke="none"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">B</text></svg>`;

const Q_PF = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram of prime factors. Circle 60 only: 5. Overlap of 60 and 84: 2, 2, 3. Circle 84 only: 7."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic"></text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">60</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">84</text><text x="95" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">5</text><text x="160" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">2, 2, 3</text><text x="225" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">7</text></svg>`;

const Q_D2 = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram: ξ = 30 students, circle C (chess club) and circle D (drama club). C only: 6. C and D: 3. D only: 8. Outside both circles: 13."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">C</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">D</text><text x="95" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">6</text><text x="160" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">3</text><text x="225" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">8</text><text x="280" y="178" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">13</text></svg>`;

const P1_D3 = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram: universal set ξ with overlapping circles A and B. A only: 12. A and B: 5. B only: 8. Outside both circles: 3."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">B</text><text x="95" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">12</text><text x="160" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">5</text><text x="225" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">8</text><text x="280" y="178" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">3</text></svg>`;

const P1_ALG = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram: universal set ξ with overlapping circles A and B. A only: 3x. A and B: x. B only: 2x + 1. Outside both circles: 7."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">B</text><text x="95" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">3x</text><text x="160" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">x</text><text x="225" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">2x + 1</text><text x="280" y="178" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">7</text></svg>`;

const P1_SHADE = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram: universal set ξ with overlapping circles A and B. The part of A outside B and the part of B outside A are shaded; the overlap and the region outside both circles are not shaded."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><path d="M160,50.23 A65,65 0 1,0 160,159.77 A65,65 0 0,1 160,50.23 Z" fill="#fde68a" fill-rule="evenodd" stroke="none"/><path d="M160,50.23 A65,65 0 1,1 160,159.77 A65,65 0 0,0 160,50.23 Z" fill="#fde68a" fill-rule="evenodd" stroke="none"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">B</text></svg>`;

const P1_ALG2 = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram: universal set ξ with overlapping circles A and B. A only: x. A and B: 3. B only: 2x. Outside both circles: 5."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">B</text><text x="95" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">x</text><text x="160" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">3</text><text x="225" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">2x</text><text x="280" y="178" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">5</text></svg>`;

const P2_D6 = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram: ξ = students, circle S (school choir) and circle T (table tennis). S only: 14. S and T: 6. T only: 10. Outside both circles: 5."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">S</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">T</text><text x="95" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">14</text><text x="160" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">6</text><text x="225" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">10</text><text x="280" y="178" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">5</text></svg>`;

const P2_PF = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram of prime factors. Circle 150 only: 5. Overlap of 150 and 120: 2, 3, 5. Circle 120 only: 2, 2."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic"></text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">150</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">120</text><text x="95" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">5</text><text x="160" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">2, 3, 5</text><text x="225" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">2, 2</text></svg>`;

const P2_3SET = `<svg viewBox="0 0 340 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-set Venn diagram with circles A, B and C inside ξ. A only: 8. B only: 6. C only: 9. A and B only: 3. A and C only: 2. B and C only: 4. All three: 1. Outside all circles: 7."><rect x="10" y="10" width="320" height="240" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="130" cy="105" r="62" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="210" cy="105" r="62" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="170" cy="170" r="62" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="72" y="48" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="268" y="48" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">B</text><text x="246" y="232" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">C</text><text x="100" y="92" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">8</text><text x="240" y="92" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">6</text><text x="170" y="212" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">9</text><text x="170" y="80" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">3</text><text x="126" y="152" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">2</text><text x="214" y="152" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">4</text><text x="170" y="128" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">1</text><text x="305" y="238" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">7</text></svg>`;

const P2_ALG = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram: universal set ξ with overlapping circles A and B. A only: 2x. A and B: x. B only: x squared. Outside both circles: 12."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">B</text><text x="95" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">2x</text><text x="160" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">x</text><text x="225" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">x²</text><text x="280" y="178" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">12</text></svg>`;

const P2_IND = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram: universal set ξ with overlapping circles A and B. A only: 12. A and B: 8. B only: 12. Outside both circles: 18."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">B</text><text x="95" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">12</text><text x="160" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">8</text><text x="225" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">12</text><text x="280" y="178" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">18</text></svg>`;

const CH_IND = `<svg viewBox="0 0 320 200" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram: universal set ξ with overlapping circles A and B. A only: x. A and B: 4. B only: 2x. Outside both circles: 8."><rect x="10" y="10" width="300" height="180" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="125" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="195" cy="105" r="65" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="20" y="30" font-family="sans-serif" fill="#1f2937" font-size="14" font-style="italic">ξ</text><text x="70" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">A</text><text x="250" y="42" font-family="sans-serif" fill="#1f2937" font-size="14" font-weight="bold" text-anchor="middle">B</text><text x="95" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">x</text><text x="160" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">4</text><text x="225" y="110" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">2x</text><text x="280" y="178" font-family="sans-serif" fill="#1f2937" font-size="13" text-anchor="middle">8</text></svg>`;

export const practice: TopicPractice = {
  // =========================================================================
  // Quick-check quiz — 10 questions (3 mcq, 7 short) across all four sections
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "sets-venn-quiz-q01",
      question:
        "ξ = {1, 2, 3, …, 15}\n\nA = {multiples of 3}\n\nB = {even numbers}\n\nList the members of A ∩ B.",
      answer: { type: "list", values: [6, 12], display: "A ∩ B = {6, 12}" },
      solution: [
        "A = {3, 6, 9, 12, 15}.",
        "B = {2, 4, 6, 8, 10, 12, 14}.",
        "∩ means *in both*: A ∩ B = {6, 12}.",
      ],
      traps: [
        {
          spec: { type: "list", values: [2, 3, 4, 6, 8, 9, 10, 12, 14, 15] },
          feedback: "That is A ∪ B — everything in A *or* B. The symbol ∩ (intersection) means the members that are in *both* sets.",
        },
      ],
      commonError: "Mixing up ∩ (both) and ∪ (either).",
      difficulty: "warmup",
      guideRef: "set-notation",
      hints: ["Write out A and B in full first.", "∩ is 'intersection': which numbers appear in both lists?"],
      strategy: "Organise the information",
    },
    {
      kind: "mcq",
      id: "sets-venn-quiz-q02",
      question: "ξ = {1, 2, 3, …, 10} and P = {prime numbers}.\n\nWhich statement is true?",
      options: ["1 ∈ P", "9 ∈ P", "n(P) = 4", "2 ∉ P"],
      answerIndex: 2,
      explanation:
        "P = {2, 3, 5, 7}, so n(P) = 4. '1 ∈ P' is the classic slip — 1 is not prime (it has only one factor). 9 = 3 × 3 is not prime. '2 ∉ P' is false because 2 is prime — the only even prime.",
      difficulty: "warmup",
      guideRef: "set-notation",
      hints: ["List P in full.", "n(P) means the *number* of members of P."],
      strategy: "Eliminate options",
    },
    {
      kind: "short",
      id: "sets-venn-quiz-q03",
      question: "The Venn diagram shows the number of elements in each region.\n\nFind n(A ∪ B).",
      diagram: Q_D1,
      answer: { type: "number", value: 20 },
      solution: [
        "A ∪ B is everything inside at least one circle.",
        "n(A ∪ B) = 7 + 4 + 9 = 20.",
        "The 5 outside both circles are *not* in A ∪ B.",
      ],
      traps: [
        { spec: { type: "number", value: 24 }, feedback: "You added n(A) = 11 and n(B) = 13, so the 4 in the overlap got counted twice. Add each region once: 7 + 4 + 9." },
        { spec: { type: "number", value: 25 }, feedback: "25 is n(ξ). The 5 outside both circles are not in A or B." },
      ],
      commonError: "Counting the overlap twice by adding n(A) and n(B).",
      difficulty: "warmup",
      guideRef: "venn-diagrams",
      hints: ["Which regions are inside A *or* B (or both)?", "Add each of those regions exactly once."],
      strategy: "Read the diagram region by region",
    },
    {
      kind: "short",
      id: "sets-venn-quiz-q04",
      question:
        "In a class of 32 students, 19 play badminton, 15 play netball and 6 play neither sport.\n\nHow many students play both badminton and netball?",
      answer: { type: "number", value: 8 },
      solution: [
        "Students who play at least one sport: 32 − 6 = 26.",
        "Badminton + netball counts the 'both' group twice: 19 + 15 = 34.",
        "So the overlap is 34 − 26 = 8.",
        "Check: only badminton 11, both 8, only netball 7, neither 6 → 11 + 8 + 7 + 6 = 32 ✓",
      ],
      solutions: [
        {
          label: "Algebra in the Venn diagram",
          steps: [
            "Let x play both. Then only badminton = 19 − x and only netball = 15 − x.",
            "(19 − x) + x + (15 − x) + 6 = 32.",
            "40 − x = 32, so x = 8.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 2 }, feedback: "That assumes everyone plays a sport (19 + 15 − 32). Take away the 6 who play neither first: only 26 are inside the circles." },
      ],
      commonError: "Forgetting the students outside both circles.",
      difficulty: "core",
      guideRef: "venn-diagrams",
      hints: [
        "How many students are inside at least one circle?",
        "If you add 19 and 15, which students get counted twice?",
        "Overlap = (19 + 15) − (number in at least one circle).",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "mcq",
      id: "sets-venn-quiz-q05",
      question: "Which set is represented by the shaded region?",
      diagram: Q_SHADE,
      options: ["A ∩ B′", "A′ ∩ B", "(A ∩ B)′", "A′ ∪ B"],
      answerIndex: 1,
      explanation:
        "The shaded region is inside B but outside A: 'not A' *and* 'B' gives A′ ∩ B. A ∩ B′ is the mirror image (in A, not in B). (A ∩ B)′ is everything except the overlap — far too much. A′ ∪ B would also shade the region outside both circles and the overlap.",
      difficulty: "core",
      guideRef: "venn-diagrams",
      hints: [
        "Is the shaded part inside A? Inside B?",
        "'Not in A' is A′. Combine it with 'in B' using 'and'.",
      ],
      strategy: "Describe it in words first",
    },
    {
      kind: "short",
      id: "sets-venn-quiz-q06",
      question: "The Venn diagram shows the prime factors of 60 and 84.\n\nUse the diagram to find the highest common factor (HCF) of 60 and 84.",
      diagram: Q_PF,
      answer: { type: "number", value: 12 },
      solution: [
        "The HCF is the product of the primes in the overlap.",
        "2 × 2 × 3 = 12.",
      ],
      traps: [
        { spec: { type: "number", value: 420 }, feedback: "420 is the LCM — the product of *every* number in the diagram. The HCF uses only the overlap." },
        { spec: { type: "number", value: 7 }, feedback: "Multiply the primes in the overlap, not the ones outside it." },
      ],
      commonError: "Multiplying everything in the diagram (which gives the LCM).",
      difficulty: "warmup",
      guideRef: "venn-hcf-lcm",
      hints: ["The overlap holds the primes that both numbers share.", "Multiply the primes in the overlap."],
      strategy: "Use the structure",
    },
    {
      kind: "short",
      id: "sets-venn-quiz-q07",
      question: "90 = 2 × 3² × 5 and 126 = 2 × 3² × 7.\n\nWork out the lowest common multiple (LCM) of 90 and 126.",
      answer: { type: "number", value: 630 },
      solution: [
        "Venn diagram: overlap = 2, 3, 3; 90 only = 5; 126 only = 7.",
        "LCM = product of everything in the diagram = 2 × 3 × 3 × 5 × 7 = 630.",
        "Check: 630 ÷ 90 = 7 ✓ and 630 ÷ 126 = 5 ✓",
      ],
      traps: [
        { spec: { type: "number", value: 18 }, feedback: "18 is the HCF (the overlap only). The LCM uses every prime in the diagram." },
        { spec: { type: "number", value: 11340 }, feedback: "90 × 126 is a common multiple, but not the *lowest* — it counts the shared 2 × 3² twice." },
      ],
      commonError: "Multiplying the two numbers together.",
      difficulty: "core",
      guideRef: "venn-hcf-lcm",
      hints: [
        "Put the shared primes in the overlap: which primes appear in both?",
        "2 and 3² are shared; 5 belongs only to 90 and 7 only to 126.",
        "LCM = product of every prime in the diagram.",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "sets-venn-quiz-q08",
      question:
        "The Venn diagram shows the 30 students in a Year 11 tutor group. C = {students in chess club}, D = {students in drama club}.\n\nA student is chosen at random. Find P(C ∩ D). Give your answer as a fraction in its simplest form.",
      diagram: Q_D2,
      answer: { type: "fraction", n: 1, d: 10, simplest: true },
      solution: ["n(C ∩ D) = 3.", "P(C ∩ D) = {{3/30}} = {{1/10}}."],
      traps: [
        { spec: { type: "fraction", n: 3, d: 11 }, feedback: "That is P(C | D) — you divided by the drama club only. Here the student is chosen from all 30." },
      ],
      commonError: "Dividing by the wrong total.",
      difficulty: "warmup",
      guideRef: "venn-probability",
      hints: ["Which region is C ∩ D?", "Probability = (number in that region) ÷ (total in ξ)."],
      strategy: "Count, then divide",
    },
    {
      kind: "short",
      id: "sets-venn-quiz-q09",
      question:
        "Use the same Venn diagram (30 students; C = chess club, D = drama club).\n\nA student is chosen at random from those in drama club. Find the probability that this student is also in chess club. Give your answer as a fraction.",
      diagram: Q_D2,
      answer: { type: "fraction", n: 3, d: 11 },
      solution: [
        "'Chosen from those in drama club' restricts the sample space to D: n(D) = 3 + 8 = 11.",
        "Of these 11, 3 are also in C.",
        "P(C | D) = {{3/11}}.",
      ],
      traps: [
        { spec: { type: "fraction", n: 1, d: 10 }, feedback: "That is P(C ∩ D) out of all 30. The student is chosen only from the drama club, so the denominator is n(D) = 11." },
        { spec: { type: "fraction", n: 1, d: 3 }, feedback: "You divided by n(C) = 9. The student comes from the *drama* club, so divide by n(D) = 11." },
      ],
      commonError: "Using the whole of ξ as the denominator for a 'given' probability.",
      difficulty: "core",
      guideRef: "venn-probability",
      hints: [
        "Who is the student being chosen from — all 30, or a smaller group?",
        "Cover up everything outside circle D. How many are left?",
        "Of those, how many are also in C?",
      ],
      strategy: "Shrink the sample space",
    },
    {
      kind: "mcq",
      id: "sets-venn-quiz-q10",
      question: "Use the Venn diagram. An element of ξ is chosen at random.\n\nWhat is P(A′)?",
      diagram: Q_D1,
      options: ["{{11/25}}", "{{1/5}}", "{{9/25}}", "{{14/25}}"],
      answerIndex: 3,
      explanation:
        "A′ is everything *not* in A: the 9 in B only and the 5 outside both, so P(A′) = {{14/25}}. {{11/25}} is P(A). {{9/25}} forgets the 5 outside both circles, and {{1/5}} = {{5/25}} uses only the outside region.",
      difficulty: "core",
      guideRef: "venn-probability",
      hints: ["A′ means 'not in A'. Which regions are outside circle A?", "Don't forget the region outside both circles."],
      strategy: "Use the complement",
    },
  ],

  // =========================================================================
  // Practice papers
  // =========================================================================
  papers: [
    {
      id: "sets-venn-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "sets-venn-p1-q01",
          question: "ξ = {x : x is an integer, 1 ≤ x ≤ 20}\n\nA = {factors of 12}\n\nFind n(A′).",
          answer: { type: "number", value: 14 },
          solution: [
            "A = {1, 2, 3, 4, 6, 12}, so n(A) = 6.",
            "n(ξ) = 20.",
            "n(A′) = 20 − 6 = 14.",
          ],
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "6 is n(A). A′ is the complement — everything in ξ that is *not* in A." },
            { spec: { type: "number", value: 15 }, feedback: "Check your list of factors of 12: 1, 2, 3, 4, 6, 12 — six factors, including 1 and 12." },
          ],
          commonError: "Leaving 1 or 12 out of the list of factors.",
          difficulty: "warmup",
          guideRef: "set-notation",
          hints: ["List the factors of 12 in pairs: 1 × 12, 2 × 6, …", "n(A′) = n(ξ) − n(A)."],
          strategy: "Use the complement",
        },
        {
          kind: "short",
          id: "sets-venn-p1-q02",
          question: "ξ = {1, 2, 3, …, 10}\n\nE = {even numbers}\n\nS = {square numbers}\n\nList the members of E ∪ S.",
          answer: { type: "list", values: [1, 2, 4, 6, 8, 9, 10], display: "E ∪ S = {1, 2, 4, 6, 8, 9, 10}" },
          solution: [
            "E = {2, 4, 6, 8, 10}.",
            "S = {1, 4, 9} (the squares up to 10).",
            "∪ means in E *or* S (or both). List each member once: {1, 2, 4, 6, 8, 9, 10}.",
          ],
          traps: [
            { spec: { type: "list", values: [4] }, feedback: "{4} is E ∩ S — the members in *both*. ∪ (union) collects everything in either set." },
            { spec: { type: "list", values: [2, 4, 4, 6, 8, 10, 1, 9] }, feedback: "4 is in both sets, but a set lists each member only once." },
          ],
          commonError: "Forgetting that 1 is a square number (1 = 1²).",
          difficulty: "warmup",
          guideRef: "set-notation",
          hints: ["List E and S separately.", "Is 1 a square number?"],
          strategy: "Organise the information",
        },
        {
          kind: "short",
          id: "sets-venn-p1-q03",
          question: "The Venn diagram shows the number of elements in each region.\n\nFind n(A ∩ B′).",
          diagram: P1_D3,
          answer: { type: "number", value: 12 },
          solution: [
            "A ∩ B′ means 'in A and not in B'.",
            "That is the part of circle A outside B: n(A ∩ B′) = 12.",
          ],
          traps: [
            { spec: { type: "number", value: 17 }, feedback: "17 is n(A). B′ removes the 5 that are also in B." },
            { spec: { type: "number", value: 20 }, feedback: "20 is n(A ∪ B′) — 'in A *or* not in B'. ∩ needs *both* conditions: in A AND not in B." },
          ],
          commonError: "Giving n(A) instead of the 'A only' region.",
          difficulty: "warmup",
          guideRef: "venn-diagrams",
          hints: ["Read it in words: in A, and not in B.", "Which single region is inside A but outside B?"],
          strategy: "Describe it in words first",
        },
        {
          kind: "short",
          id: "sets-venn-p1-q04",
          question: "36 = 2² × 3² and 48 = 2⁴ × 3.\n\nWork out the lowest common multiple (LCM) of 36 and 48.",
          answer: { type: "number", value: 144 },
          solution: [
            "Overlap (shared primes): 2, 2, 3.",
            "36 only: 3. 48 only: 2, 2.",
            "LCM = 2 × 2 × 3 × 3 × 2 × 2 = 144.",
            "Check: 144 ÷ 36 = 4 ✓ and 144 ÷ 48 = 3 ✓",
          ],
          solutions: [
            {
              label: "Highest powers",
              steps: ["Take the highest power of each prime: 2⁴ and 3².", "LCM = 16 × 9 = 144."],
            },
          ],
          traps: [
            { spec: { type: "number", value: 12 }, feedback: "12 is the HCF (the overlap only). The LCM is the product of everything in the Venn diagram." },
            { spec: { type: "number", value: 1728 }, feedback: "36 × 48 is a common multiple but not the lowest — the shared 2² × 3 is counted twice." },
          ],
          commonError: "Multiplying the two numbers.",
          difficulty: "warmup",
          guideRef: "venn-hcf-lcm",
          hints: ["Put the shared primes 2, 2, 3 in the overlap.", "LCM = product of every prime in the diagram."],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "sets-venn-p1-q05",
          question:
            "The Venn diagram shows the number of elements in each region, in terms of x.\n\nn(ξ) = 50\n\nFind n(B).",
          diagram: P1_ALG,
          answer: { type: "number", value: 22 },
          solution: [
            "Add all four regions: 3x + x + (2x + 1) + 7 = 50.",
            "6x + 8 = 50, so 6x = 42 and x = 7.",
            "n(B) = x + (2x + 1) = 7 + 15 = 22.",
          ],
          traps: [
            { spec: { type: "number", value: 7 }, feedback: "x = 7 is only the first step. n(B) is the whole of circle B: x + (2x + 1)." },
            { spec: { type: "number", value: 15 }, feedback: "15 is 'B only'. n(B) also includes the overlap, x = 7." },
          ],
          commonError: "Stopping at x, or forgetting the overlap is part of B.",
          difficulty: "core",
          guideRef: "venn-diagrams",
          hints: [
            "What do all four regions add up to?",
            "Form an equation: 3x + x + 2x + 1 + 7 = 50.",
            "Once you know x, which regions make up circle B?",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "mcq",
          id: "sets-venn-p1-q06",
          question: "Which set is represented by the shaded region?",
          diagram: P1_SHADE,
          options: ["(A ∪ B) ∩ (A ∩ B)′", "(A ∩ B)′", "A ∪ B", "A′ ∩ B′"],
          answerIndex: 0,
          explanation:
            "The shaded region is in A or B, but not in both: in A ∪ B and also outside the overlap, which is (A ∩ B)′ ∩ (A ∪ B). The set (A ∩ B)′ would also shade the region outside both circles. A ∪ B would shade the overlap too. A′ ∩ B′ is only the region outside both circles.",
          difficulty: "core",
          guideRef: "venn-diagrams",
          hints: [
            "Describe the shaded region in words: in A or B, but…?",
            "'In A or B' is A ∪ B. 'Not in both' is (A ∩ B)′. Join them with 'and'.",
          ],
          strategy: "Describe it in words first",
        },
        {
          kind: "short",
          id: "sets-venn-p1-q07",
          question:
            "60 students were asked which sciences they take: Maths (M), Physics (P) and Chemistry (C).\n\n- 4 take all three.\n- 10 take M and P.\n- 9 take M and C.\n- 7 take P and C.\n- 30 take M, 24 take P and 22 take C.\n\nHow many of the 60 students take none of the three subjects?",
          answer: { type: "number", value: 6 },
          solution: [
            "Fill in from the centre: M ∩ P ∩ C = 4.",
            "M and P only = 10 − 4 = 6; M and C only = 9 − 4 = 5; P and C only = 7 − 4 = 3.",
            "M only = 30 − 6 − 5 − 4 = 15; P only = 24 − 6 − 3 − 4 = 11; C only = 22 − 5 − 3 − 4 = 10.",
            "Inside the circles: 4 + 6 + 5 + 3 + 15 + 11 + 10 = 54.",
            "None = 60 − 54 = 6.",
          ],
          solutions: [
            {
              label: "Inclusion–exclusion",
              steps: [
                "n(M ∪ P ∪ C) = 30 + 24 + 22 − 10 − 9 − 7 + 4 = 54.",
                "None = 60 − 54 = 6.",
              ],
            },
          ],
          traps: [
            { spec: { type: "number", value: 18 }, feedback: "You may have put 10, 9 and 7 straight into the 'two subjects only' regions. Those totals include the 4 who take all three — subtract 4 from each first." },
          ],
          commonError: "Not subtracting the centre from the 'two sets' totals before filling them in.",
          difficulty: "core",
          guideRef: "venn-diagrams",
          hints: [
            "Draw three overlapping circles. Which region can you fill in first?",
            "'10 take M and P' includes the 4 who take all three. How many take M and P only?",
            "Work outwards: then find M only, P only and C only.",
            "Add all seven regions and subtract from 60.",
          ],
          strategy: "Work from the centre outwards",
        },
        {
          kind: "written",
          id: "sets-venn-p1-q08",
          question:
            "ξ = {1, 2, 3, …, 20}\n\nA = {multiples of 4}\n\nB = {even numbers}\n\nShow that A ∩ B = A, and explain what this tells you about how A and B are related.",
          marks: 3,
          modelAnswer:
            "A = {4, 8, 12, 16, 20} and B = {2, 4, 6, 8, 10, 12, 14, 16, 18, 20}. Every multiple of 4 is 2 × (2k), so it is even: every member of A is also in B. So A ∩ B = {4, 8, 12, 16, 20} = A. This means A is a subset of B (A ⊂ B): on a Venn diagram, circle A sits entirely inside circle B.",
          markScheme: [
            { point: "Lists A = {4, 8, 12, 16, 20} and B correctly (or A ∩ B = {4, 8, 12, 16, 20})", keywords: ["4, 8, 12, 16, 20", "4,8,12,16,20", "{4"] },
            { point: "Explains every multiple of 4 is even, so every member of A is in B", keywords: ["every", "all", "even", "multiple of 2", "also in b"] },
            { point: "Concludes A is a subset of B (A ⊂ B) / circle A inside circle B", keywords: ["subset", "⊂", "inside", "contained"] },
          ],
          commonError: "Just listing the sets without saying what A ∩ B = A means.",
          difficulty: "core",
          guideRef: "set-notation",
          hints: [
            "List A and B.",
            "Is there any member of A that is *not* in B?",
            "If every member of A is in B, what word describes A?",
          ],
          strategy: "Look for a general reason",
        },
        {
          kind: "short",
          id: "sets-venn-p1-q09",
          question: "Work out the highest common factor (HCF) of 24, 60 and 90.",
          answer: { type: "number", value: 6 },
          solution: [
            "24 = 2³ × 3, 60 = 2² × 3 × 5, 90 = 2 × 3² × 5.",
            "In a three-circle Venn diagram, the centre holds the primes shared by all three: one 2 and one 3.",
            "HCF = 2 × 3 = 6.",
          ],
          traps: [
            { spec: { type: "number", value: 12 }, feedback: "12 is the HCF of 24 and 60, but 12 does not divide 90. The HCF must divide all three." },
            { spec: { type: "number", value: 30 }, feedback: "30 is the HCF of 60 and 90, but not a factor of 24." },
            { spec: { type: "number", value: 360 }, feedback: "360 is the LCM. The HCF uses only the primes shared by all three numbers." },
          ],
          commonError: "Finding the HCF of just two of the numbers.",
          difficulty: "core",
          guideRef: "venn-hcf-lcm",
          hints: [
            "Write each number as a product of primes.",
            "Which primes appear in *all three* factorisations — and how many times each?",
            "The HCF is the product of the centre region of a three-circle Venn diagram.",
          ],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "sets-venn-p1-q10",
          question:
            "Use the Venn diagram. An element of ξ is chosen at random.\n\nFind P(A ∪ B). Give your answer as a fraction.",
          diagram: P1_D3,
          answer: { type: "fraction", n: 25, d: 28 },
          solution: [
            "n(ξ) = 12 + 5 + 8 + 3 = 28.",
            "n(A ∪ B) = 12 + 5 + 8 = 25.",
            "P(A ∪ B) = {{25/28}}.",
          ],
          solutions: [
            { label: "Use the complement", steps: ["Only 3 elements are outside A ∪ B.", "P(A ∪ B) = 1 − {{3/28}} = {{25/28}}."] },
          ],
          traps: [
            { spec: { type: "fraction", n: 30, d: 28 }, feedback: "A probability can't exceed 1. You added n(A) and n(B), counting the overlap twice." },
            { spec: { type: "fraction", n: 25, d: 25 }, feedback: "Divide by the total of ξ (28), including the 3 outside both circles." },
          ],
          commonError: "Adding P(A) and P(B) without subtracting the overlap.",
          difficulty: "core",
          guideRef: "venn-probability",
          hints: ["What is the total number of elements in ξ?", "Which regions are in A or B or both?"],
          strategy: "Count, then divide",
        },
        {
          kind: "short",
          id: "sets-venn-p1-q11",
          question:
            "Use the same Venn diagram. An element is chosen at random from set A.\n\nFind the probability that it is also in set B. Give your answer as a fraction.",
          diagram: P1_D3,
          answer: { type: "fraction", n: 5, d: 17 },
          solution: [
            "The element comes from A, so the sample space is n(A) = 12 + 5 = 17.",
            "Of these, 5 are also in B.",
            "P(B | A) = {{5/17}}.",
          ],
          traps: [
            { spec: { type: "fraction", n: 5, d: 28 }, feedback: "That is P(A ∩ B) from the whole of ξ. The element is chosen from A only, so divide by n(A) = 17." },
            { spec: { type: "fraction", n: 5, d: 13 }, feedback: "You divided by n(B). The element was chosen from A, so the denominator is n(A) = 17." },
          ],
          commonError: "Dividing by n(ξ) instead of n(A).",
          difficulty: "core",
          guideRef: "venn-probability",
          hints: [
            "Which group is the element chosen from?",
            "Cover everything outside circle A. How many are left?",
            "How many of those are also in B?",
          ],
          strategy: "Shrink the sample space",
        },
        {
          kind: "written",
          id: "sets-venn-p1-q12",
          question:
            "A and B are two events with P(A) = 0.5 and P(B) = 0.6.\n\nMei says, \"P(A ∪ B) = 0.5 + 0.6 = 1.1\"\n\n(a) Explain why Mei must be wrong.\n\n(b) Explain why A and B cannot be mutually exclusive, and state the smallest possible value of P(A ∩ B).",
          marks: 4,
          modelAnswer:
            "(a) A probability can never be more than 1, so 1.1 is impossible. Adding P(A) and P(B) counts the overlap A ∩ B twice; the correct rule is P(A ∪ B) = P(A) + P(B) − P(A ∩ B).\n\n(b) If A and B were mutually exclusive, P(A ∪ B) would be 0.5 + 0.6 = 1.1 > 1, which is impossible, so the circles must overlap. Since P(A ∪ B) ≤ 1, P(A ∩ B) = 0.5 + 0.6 − P(A ∪ B) ≥ 1.1 − 1 = 0.1. The smallest possible value is 0.1.",
          markScheme: [
            { point: "States a probability cannot be greater than 1", keywords: ["greater than 1", "more than 1", "bigger than 1", "cannot exceed 1", "> 1", "over 1"] },
            { point: "Explains the overlap A ∩ B has been counted twice / gives P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", keywords: ["twice", "double", "overlap", "intersection", "− p(a ∩ b)", "subtract"] },
            { point: "Explains they must overlap because 0.5 + 0.6 > 1", keywords: ["overlap", "must", "1.1", "mutually exclusive", "not mutually exclusive"] },
            { point: "Smallest P(A ∩ B) = 0.1", keywords: ["0.1"] },
          ],
          commonError: "Only saying '1.1 is too big' without explaining where the extra 0.1 comes from.",
          difficulty: "core",
          guideRef: "venn-probability",
          hints: [
            "What is the largest a probability can ever be?",
            "Draw the Venn diagram: which region has Mei added twice?",
            "P(A ∪ B) = P(A) + P(B) − P(A ∩ B), and P(A ∪ B) ≤ 1.",
          ],
          strategy: "Consider extremes",
        },
        {
          kind: "short",
          id: "sets-venn-p1-q13",
          question:
            "In a class of 30 students, 21 like mangoes and 17 like durians.\n\nWrite down the smallest possible number and the largest possible number of students who like both fruits. Give the smallest first.",
          answer: { type: "list", values: [8, 17], ordered: true, display: "smallest 8, largest 17" },
          solution: [
            "Smallest overlap: squeeze the circles apart. At most 30 students are inside them, so both ≥ 21 + 17 − 30 = 8.",
            "Largest overlap: the durian circle sits entirely inside the mango circle, so both ≤ 17 (you can't have more than all the durian-lovers).",
            "Check 17 works: 4 like mangoes only, 17 like both, 9 like neither → 4 + 17 + 9 = 30 ✓",
            "Smallest 8, largest 17.",
          ],
          traps: [
            { spec: { type: "list", values: [0, 17], ordered: true }, feedback: "Can the overlap really be 0? Then 21 + 17 = 38 students would be needed — but there are only 30." },
            { spec: { type: "list", values: [8, 21], ordered: true }, feedback: "Only 17 like durians, so no more than 17 can like both." },
          ],
          commonError: "Assuming the smallest overlap is 0.",
          difficulty: "challenge",
          guideRef: "venn-diagrams",
          hints: [
            "Imagine sliding the circles apart. What stops the overlap from being 0?",
            "If there were no 'neither' students, how big must the overlap be?",
            "For the largest, slide the smaller circle completely inside the bigger one.",
          ],
          strategy: "Consider extremes",
        },
        {
          kind: "short",
          id: "sets-venn-p1-q14",
          question:
            "The Venn diagram shows the number of elements in each region.\n\nAn element is chosen at random from B. The probability that it is also in A is {{1/5}}.\n\nAn element is now chosen at random from ξ. Find P(A ∪ B). Give your answer as a fraction in its simplest form.",
          diagram: P1_ALG2,
          answer: { type: "fraction", n: 21, d: 26, simplest: true },
          solution: [
            "n(B) = 3 + 2x, and 3 of these are also in A.",
            "{{3/(2x + 3) = 1/5}}, so 2x + 3 = 15 and x = 6.",
            "Regions: A only 6, both 3, B only 12, outside 5. n(ξ) = 26.",
            "P(A ∪ B) = {{(6 + 3 + 12)/26 = 21/26}}.",
          ],
          traps: [
            { spec: { type: "fraction", n: 3, d: 26 }, feedback: "That is P(A ∩ B). The question asks for A ∪ B — everything inside either circle." },
          ],
          commonError: "Using n(ξ) instead of n(B) as the denominator of the given conditional probability.",
          difficulty: "challenge",
          guideRef: "venn-probability",
          hints: [
            "'Chosen from B' — what is the denominator of that probability, in terms of x?",
            "Set up {{3/(2x + 3) = 1/5}} and solve for x.",
            "Now fill in every region with a number and count A ∪ B.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "written",
          id: "sets-venn-p1-q15",
          question:
            "60 = 2² × 3 × 5 and 126 = 2 × 3² × 7.\n\n(a) Draw (or describe) a Venn diagram of the prime factors of 60 and 126, and use it to find the HCF and the LCM.\n\n(b) Use your diagram to explain why HCF × LCM = 60 × 126.",
          marks: 4,
          modelAnswer:
            "(a) Overlap (shared primes): 2, 3. 60 only: 2, 5. 126 only: 3, 7. HCF = 2 × 3 = 6. LCM = 2 × 5 × 2 × 3 × 3 × 7 = 1260.\n\n(b) 60 = (60-only primes) × (overlap) and 126 = (overlap) × (126-only primes). So 60 × 126 = (60 only) × (overlap) × (overlap) × (126 only). The LCM is (60 only) × (overlap) × (126 only) — everything in the diagram once — and the HCF is the overlap. So HCF × LCM uses exactly the same primes: the overlap twice and each outer region once. Hence HCF × LCM = 6 × 1260 = 7560 = 60 × 126.",
          markScheme: [
            { point: "Correct Venn diagram: overlap 2, 3; 60 only 2, 5; 126 only 3, 7", keywords: ["2, 3", "2 and 3", "overlap", "5", "7"] },
            { point: "HCF = 6 and LCM = 1260", keywords: ["6", "1260"] },
            { point: "Explains the product of the two numbers uses the overlap twice and each outer region once", keywords: ["twice", "two times", "overlap", "both numbers", "each number"] },
            { point: "Matches this to HCF × LCM (overlap × everything once) — so they are equal (7560)", keywords: ["7560", "same primes", "hcf × lcm", "equal", "same"] },
          ],
          commonError: "Checking the numbers (6 × 1260 = 7560) without explaining *why* it works.",
          difficulty: "challenge",
          guideRef: "venn-hcf-lcm",
          hints: [
            "Shared primes go in the overlap: 60 and 126 share one 2 and one 3.",
            "Which regions make up 60? Which make up 126?",
            "When you multiply 60 × 126, how many times is the overlap used? And in HCF × LCM?",
          ],
          strategy: "Look for a general reason",
        },
      ],
    },
    {
      id: "sets-venn-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "sets-venn-p2-q01",
          question: "ξ = {integers from 1 to 12}\n\nF = {factors of 18}\n\nList the members of F′.",
          answer: { type: "list", values: [4, 5, 7, 8, 10, 11, 12], display: "F′ = {4, 5, 7, 8, 10, 11, 12}" },
          solution: [
            "Factors of 18 up to 12: F = {1, 2, 3, 6, 9}. (18 itself is not in ξ.)",
            "F′ is everything in ξ that is not in F: {4, 5, 7, 8, 10, 11, 12}.",
          ],
          traps: [
            { spec: { type: "list", values: [1, 2, 3, 6, 9] }, feedback: "That is F. The dash in F′ means the complement — the members of ξ *not* in F." },
          ],
          commonError: "Listing F instead of its complement.",
          difficulty: "warmup",
          guideRef: "set-notation",
          hints: ["List the factors of 18 that are in ξ.", "F′ is everything else in ξ."],
          strategy: "Use the complement",
        },
        {
          kind: "mcq",
          id: "sets-venn-p2-q02",
          question: "A = {2, 4, 6} and B = {1, 2, 3, 4, 5, 6}.\n\nWhich statement is true?",
          options: ["B ⊂ A", "A ∩ B = ∅", "A ⊂ B", "n(A ∪ B) = 9"],
          answerIndex: 2,
          explanation:
            "Every member of A is in B, so A is a subset of B: A ⊂ B. 'B ⊂ A' is backwards, because 1 is in B but not in A. A ∩ B = {2, 4, 6}, not the empty set. The union has only 6 members, not 3 + 6 = 9, because shared members are counted once.",
          difficulty: "warmup",
          guideRef: "set-notation",
          hints: ["Is every member of A also in B?", "⊂ means 'is a subset of'."],
          strategy: "Eliminate options",
        },
        {
          kind: "short",
          id: "sets-venn-p2-q03",
          question:
            "The Venn diagram shows information about a group of students. S = {students in the school choir}, T = {students who play table tennis}.\n\nHow many students are in exactly one of the two sets?",
          diagram: P2_D6,
          answer: { type: "number", value: 24 },
          solution: [
            "'Exactly one' means S only or T only — not the overlap.",
            "14 + 10 = 24.",
          ],
          traps: [
            { spec: { type: "number", value: 30 }, feedback: "30 is n(S ∪ T). 'Exactly one' leaves out the 6 who are in both." },
            { spec: { type: "number", value: 36 }, feedback: "You added n(S) = 20 and n(T) = 16. That counts the overlap twice and still includes it — use only the two 'only' regions." },
          ],
          commonError: "Including the overlap in 'exactly one'.",
          difficulty: "warmup",
          guideRef: "venn-diagrams",
          hints: ["Which regions are in one set but not the other?", "Leave out the overlap and the outside."],
          strategy: "Read the diagram region by region",
        },
        {
          kind: "short",
          id: "sets-venn-p2-q04",
          question: "The Venn diagram shows the prime factors of 150 and 120.\n\nFind the highest common factor (HCF) of 150 and 120.",
          diagram: P2_PF,
          answer: { type: "number", value: 30 },
          solution: ["HCF = product of the overlap: 2 × 3 × 5 = 30."],
          traps: [
            { spec: { type: "number", value: 600 }, feedback: "600 is the LCM — the product of everything. The HCF uses only the overlap." },
            { spec: { type: "number", value: 20 }, feedback: "Multiply the primes in the overlap (2, 3, 5), not those outside it." },
          ],
          commonError: "Confusing the HCF (overlap) with the LCM (everything).",
          difficulty: "warmup",
          guideRef: "venn-hcf-lcm",
          hints: ["Which primes do 150 and 120 share?", "Multiply the primes in the overlap."],
          strategy: "Use the structure",
        },
        {
          kind: "short",
          id: "sets-venn-p2-q05",
          question:
            "ξ = {1, 2, 3, …, 20}\n\nO = {odd numbers}\n\nP = {prime numbers}\n\nFind n(O ∩ P′).",
          answer: { type: "number", value: 3 },
          solution: [
            "O ∩ P′ = odd numbers that are *not* prime.",
            "Odd numbers: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19.",
            "Remove the primes 3, 5, 7, 11, 13, 17, 19: left with {1, 9, 15}.",
            "n(O ∩ P′) = 3.",
          ],
          traps: [
            { spec: { type: "number", value: 2 }, feedback: "Did you leave out 1? 1 is odd and it is *not* prime, so it belongs in O ∩ P′." },
            { spec: { type: "number", value: 7 }, feedback: "7 is n(O ∩ P) — odd primes. P′ means *not* prime." },
          ],
          commonError: "Treating 1 as prime.",
          difficulty: "core",
          guideRef: "venn-diagrams",
          hints: [
            "Put O ∩ P′ into words.",
            "List the odd numbers, then cross out the primes.",
            "Is 1 prime?",
          ],
          strategy: "Describe it in words first",
        },
        {
          kind: "short",
          id: "sets-venn-p2-q06",
          question: "The Venn diagram shows the number of elements in each region.\n\nFind n(A ∩ (B ∪ C)).",
          diagram: P2_3SET,
          answer: { type: "number", value: 6 },
          solution: [
            "Start with the bracket: B ∪ C is everything in circle B or circle C.",
            "A ∩ (B ∪ C) is the part of A that is also in B or C: the A-and-B-only region (3), the A-and-C-only region (2) and the centre (1).",
            "n(A ∩ (B ∪ C)) = 3 + 2 + 1 = 6.",
          ],
          traps: [
            { spec: { type: "number", value: 14 }, feedback: "14 is n(A). The ∩ (B ∪ C) removes the 8 that are in A only." },
            { spec: { type: "number", value: 5 }, feedback: "Don't forget the centre region (in all three) — it is in A and in B ∪ C." },
          ],
          commonError: "Forgetting the centre region.",
          difficulty: "core",
          guideRef: "venn-diagrams",
          hints: [
            "Do the bracket first: which regions make up B ∪ C?",
            "Now keep only the regions that are also inside A.",
            "There are three such regions.",
          ],
          strategy: "Work from the brackets out",
        },
        {
          kind: "written",
          id: "sets-venn-p2-q07",
          question:
            "Jun says, \"(A ∩ B)′ and A′ ∩ B′ are the same set.\"\n\nUse Venn diagrams (or describe the regions) to show that Jun is wrong, and write down a correct set that is equal to (A ∩ B)′.",
          marks: 3,
          modelAnswer:
            "(A ∩ B)′ is everything except the overlap: A only, B only and the region outside both circles. A′ ∩ B′ is only the region outside both circles. These are different — for example, an element in A only is in (A ∩ B)′ but not in A′ ∩ B′. A correct equivalent is (A ∩ B)′ = A′ ∪ B′ (not in A, *or* not in B).",
          markScheme: [
            { point: "Identifies (A ∩ B)′ as A only, B only and outside (everything except the overlap)", keywords: ["except the overlap", "everything except", "a only", "b only", "not the middle", "not the overlap"] },
            { point: "Identifies A′ ∩ B′ as only the region outside both circles, so they differ (or gives a counter-example element)", keywords: ["outside both", "neither", "only the outside", "different", "not the same"] },
            { point: "States (A ∩ B)′ = A′ ∪ B′", keywords: ["a′ ∪ b′", "a' ∪ b'", "a' u b'", "union"] },
          ],
          commonError: "Thinking the dash 'distributes' over the brackets without the ∩ changing to ∪.",
          difficulty: "core",
          guideRef: "set-notation",
          hints: [
            "Shade (A ∩ B)′ on one diagram: what is left when you remove the overlap?",
            "Shade A′ ∩ B′ on another: which region is outside A *and* outside B?",
            "Which union of two complements gives everything except the overlap?",
          ],
          strategy: "Draw a diagram",
        },
        {
          kind: "written",
          id: "sets-venn-p2-q08",
          question:
            "Explain, using a Venn diagram, why for any two sets A and B\n\n    n(A ∪ B) = n(A) + n(B) − n(A ∩ B)",
          marks: 3,
          modelAnswer:
            "Label the regions: a = A only, b = A ∩ B, c = B only. Then n(A) = a + b and n(B) = b + c. Adding gives n(A) + n(B) = a + 2b + c, so the overlap b has been counted twice. But n(A ∪ B) = a + b + c counts each region once. So n(A ∪ B) = n(A) + n(B) − b = n(A) + n(B) − n(A ∩ B).",
          markScheme: [
            { point: "Labels the regions (e.g. a, b, c) and writes n(A) = a + b, n(B) = b + c", keywords: ["a + b", "b + c", "a only", "b only", "region"] },
            { point: "Explains that n(A) + n(B) counts the overlap twice", keywords: ["twice", "two times", "double", "2b"] },
            { point: "Subtracts the overlap once to get n(A ∪ B) = a + b + c", keywords: ["subtract", "once", "a + b + c", "take away"] },
          ],
          commonError: "Just quoting the formula with numbers instead of explaining the double-count.",
          difficulty: "core",
          guideRef: "venn-diagrams",
          hints: [
            "Give each of the three regions inside the circles a letter.",
            "Write n(A) and n(B) in terms of those letters. Add them.",
            "Which region appears twice?",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "sets-venn-p2-q09",
          question:
            "Three lighthouse lamps flash every 12 seconds, 15 seconds and 20 seconds. They all flash together at midnight.\n\nAfter how many seconds will they next all flash together?",
          answer: { type: "number", value: 60, display: "60 seconds" },
          solution: [
            "12 = 2² × 3, 15 = 3 × 5, 20 = 2² × 5.",
            "LCM = highest powers of each prime: 2² × 3 × 5 = 60.",
            "So 60 seconds.",
          ],
          traps: [
            { spec: { type: "number", value: 3600 }, feedback: "12 × 15 × 20 is a common multiple, but not the *lowest*. Use prime factors." },
            { spec: { type: "number", value: 120 }, feedback: "120 works but is not the first time. Check 60: 60 ÷ 12 = 5, 60 ÷ 15 = 4, 60 ÷ 20 = 3." },
          ],
          commonError: "Multiplying all three numbers.",
          difficulty: "core",
          guideRef: "venn-hcf-lcm",
          hints: [
            "Is this an HCF or an LCM problem? 'Next time together' means a common *multiple*.",
            "Write each as a product of primes.",
            "Take each prime the greatest number of times it appears in any one number.",
          ],
          strategy: "Recognise the structure",
        },
        {
          kind: "short",
          id: "sets-venn-p2-q10",
          question:
            "A rectangular floor measures 360 cm by 504 cm. Priya wants to cover it exactly with identical square tiles, without cutting any tiles.\n\nWhat is the side length of the largest square tile she can use? Give your answer in cm.",
          answer: { type: "number", value: 72, display: "72 cm" },
          solution: [
            "The tile side must divide both 360 and 504, so we want the HCF.",
            "360 = 2³ × 3² × 5 and 504 = 2³ × 3² × 7.",
            "Overlap: 2³ × 3² = 72.",
            "Largest tile: 72 cm (5 tiles by 7 tiles).",
          ],
          traps: [
            { spec: { type: "number", value: 2520 }, feedback: "2520 is the LCM. A tile must *fit into* both lengths, so its side is a common factor." },
            { spec: { type: "number", value: 36 }, feedback: "36 cm tiles work, but they're not the largest — check the powers of 2 in your factorisations." },
          ],
          commonError: "Using the LCM when the context needs a common factor.",
          difficulty: "core",
          guideRef: "venn-hcf-lcm",
          hints: [
            "The tile side must divide exactly into 360 and into 504. Factor or multiple?",
            "Write 360 and 504 as products of primes.",
            "Multiply the shared primes.",
          ],
          strategy: "Recognise the structure",
        },
        {
          kind: "short",
          id: "sets-venn-p2-q11",
          question:
            "A and B are events with P(A) = 0.45, P(B) = 0.3 and P(A ∩ B) = 0.1.\n\nFind P(A′ ∩ B′). Give your answer as a decimal.",
          answer: { type: "number", value: 0.35, allowFraction: false },
          solution: [
            "Fill in a Venn diagram: A only = 0.45 − 0.1 = 0.35; overlap = 0.1; B only = 0.3 − 0.1 = 0.2.",
            "Inside the circles: 0.35 + 0.1 + 0.2 = 0.65.",
            "A′ ∩ B′ is outside both: 1 − 0.65 = 0.35.",
          ],
          traps: [
            { spec: { type: "number", value: 0.25 }, feedback: "1 − 0.45 − 0.3 subtracts the overlap twice. P(A ∪ B) = 0.45 + 0.3 − 0.1 = 0.65." },
            { spec: { type: "number", value: 0.9 }, feedback: "That is P((A ∩ B)′). A′ ∩ B′ is the region outside *both* circles." },
          ],
          commonError: "Not subtracting the overlap when finding P(A ∪ B).",
          difficulty: "core",
          guideRef: "venn-probability",
          hints: [
            "Draw a Venn diagram and put 0.1 in the overlap first.",
            "Work out 'A only' and 'B only'.",
            "The four regions add up to 1.",
          ],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "sets-venn-p2-q12",
          question:
            "The Venn diagram shows the number of elements in each region. An element is chosen at random from ξ.\n\nFind the probability that it is in exactly two of the sets A, B and C. Give your answer as a fraction.",
          diagram: P2_3SET,
          answer: { type: "fraction", n: 9, d: 40 },
          solution: [
            "n(ξ) = 8 + 6 + 9 + 3 + 2 + 4 + 1 + 7 = 40.",
            "Exactly two: A and B only (3), A and C only (2), B and C only (4) → 9.",
            "The centre (in all three) is *not* 'exactly two'.",
            "P = {{9/40}}.",
          ],
          traps: [
            { spec: { type: "fraction", n: 10, d: 40 }, feedback: "You included the centre. An element in all three sets is in *three* sets, not exactly two." },
            { spec: { type: "fraction", n: 9, d: 33 }, feedback: "Divide by all of ξ — including the 7 outside the circles." },
          ],
          commonError: "Including the centre region in 'exactly two'.",
          difficulty: "core",
          guideRef: "venn-probability",
          hints: [
            "Which regions are inside exactly two circles?",
            "Is the centre region 'exactly two'?",
            "Find n(ξ) by adding all eight regions.",
          ],
          strategy: "Read the diagram region by region",
        },
        {
          kind: "written",
          id: "sets-venn-p2-q13",
          question:
            "The Venn diagram shows the number of elements in each region. An element is chosen at random.\n\nShow that the events A and B are independent.",
          diagram: P2_IND,
          marks: 3,
          modelAnswer:
            "n(ξ) = 12 + 8 + 12 + 18 = 50. P(A) = {{20/50}} = 0.4, P(B) = {{20/50}} = 0.4 and P(A ∩ B) = {{8/50}} = 0.16. P(A) × P(B) = 0.4 × 0.4 = 0.16 = P(A ∩ B), so A and B are independent. (Equivalently, P(A | B) = {{8/20}} = 0.4 = P(A): knowing B happened doesn't change the probability of A.)",
          markScheme: [
            { point: "Finds n(ξ) = 50 and P(A) = 0.4, P(B) = 0.4", keywords: ["50", "0.4", "20/50", "2/5"] },
            { point: "Finds P(A ∩ B) = 0.16 (8/50)", keywords: ["0.16", "8/50", "4/25"] },
            { point: "Shows P(A) × P(B) = P(A ∩ B) (or P(A | B) = P(A)) and concludes independent", keywords: ["0.4 × 0.4", "p(a) × p(b)", "independent", "8/20", "equal"] },
          ],
          commonError: "Testing P(A) + P(B) instead of P(A) × P(B).",
          difficulty: "challenge",
          guideRef: "venn-probability",
          hints: [
            "What is the test for independence? Think about the AND rule.",
            "Find P(A), P(B) and P(A ∩ B) from the diagram.",
            "Compare P(A) × P(B) with P(A ∩ B).",
          ],
          strategy: "Check by substituting",
        },
        {
          kind: "short",
          id: "sets-venn-p2-q14",
          question:
            "The Venn diagram shows the number of elements in each region, where x is a positive integer.\n\nn(ξ) = 40\n\nFind n(B).",
          diagram: P2_ALG,
          answer: { type: "number", value: 20 },
          solution: [
            "2x + x + x² + 12 = 40.",
            "x² + 3x − 28 = 0.",
            "(x + 7)(x − 4) = 0, so x = 4 (x must be positive).",
            "n(B) = x + x² = 4 + 16 = 20.",
            "Check: 8 + 4 + 16 + 12 = 40 ✓",
          ],
          traps: [
            { spec: { type: "number", value: 4 }, feedback: "x = 4 is a step, not the answer. n(B) = x + x²." },
            { spec: { type: "number", value: 16 }, feedback: "16 is 'B only'. n(B) includes the overlap x = 4 as well." },
          ],
          commonError: "Keeping the negative root x = −7 or stopping at x.",
          difficulty: "challenge",
          guideRef: "venn-diagrams",
          hints: [
            "Add all four regions and set equal to 40.",
            "You get a quadratic — rearrange to = 0 and factorise.",
            "Reject the root that doesn't make sense for a count, then find x + x².",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "sets-venn-p2-q15",
          question:
            "Two whole numbers have a highest common factor of 12 and a lowest common multiple of 360. The two numbers differ by 12.\n\nFind the two numbers. Give the smaller first.",
          answer: { type: "list", values: [60, 72], ordered: true, display: "60 and 72" },
          solution: [
            "Both numbers are multiples of 12: write them as 12m and 12n with m and n sharing no common factor.",
            "In the prime-factor Venn diagram, 12 is the overlap and the LCM is 12 × m × n = 360, so mn = 30.",
            "Coprime pairs with mn = 30: (1, 30), (2, 15), (3, 10), (5, 6) → numbers (12, 360), (24, 180), (36, 120), (60, 72).",
            "Only 60 and 72 differ by 12.",
          ],
          solutions: [
            {
              label: "HCF × LCM = product",
              steps: [
                "ab = 12 × 360 = 4320, and b = a + 12.",
                "a(a + 12) = 4320 → a² + 12a − 4320 = 0 → (a − 60)(a + 72) = 0.",
                "a = 60, b = 72. Check HCF(60, 72) = 12 ✓",
              ],
            },
          ],
          traps: [
            { spec: { type: "list", values: [12, 360], ordered: true }, feedback: "12 and 360 have the right HCF and LCM, but they differ by 348, not 12." },
          ],
          commonError: "Forgetting that m and n must share no common factor.",
          difficulty: "challenge",
          guideRef: "venn-hcf-lcm",
          hints: [
            "Both numbers are multiples of 12. Call them 12m and 12n.",
            "What must m × n be for the LCM to be 360?",
            "List the pairs (m, n) with no common factor and check which differ by 1 (so the numbers differ by 12).",
          ],
          strategy: "Introduce a variable",
        },
      ],
    },
  ],

  // =========================================================================
  // Challenge set — 10 questions, grade 9 / H+ / olympiad flavour
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "sets-venn-ch-q01",
      question:
        "In a group of 100 students, 65 study French, 45 study German and 42 study Spanish. 20 study French and German, 25 study French and Spanish, 15 study German and Spanish, and 8 study all three.\n\nHow many students study exactly one of these languages?",
      answer: { type: "number", value: 56 },
      solution: [
        "Centre: 8.",
        "Two only: F and G only = 20 − 8 = 12; F and S only = 25 − 8 = 17; G and S only = 15 − 8 = 7.",
        "One only: F only = 65 − 12 − 17 − 8 = 28; G only = 45 − 12 − 7 − 8 = 18; S only = 42 − 17 − 7 − 8 = 10.",
        "Exactly one = 28 + 18 + 10 = 56.",
      ],
      solutions: [
        {
          label: "Count how often each region is counted",
          steps: [
            "In 65 + 45 + 42 = 152, an 'exactly one' student is counted once, an 'exactly two' student twice and an 'all three' student three times.",
            "In 20 + 25 + 15 = 60, 'exactly two' students are counted once and 'all three' students three times.",
            "Exactly one = 152 − 2 × 60 + 3 × 8 = 152 − 120 + 24 = 56.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 100 }, feedback: "100 is everyone — in fact n(F ∪ G ∪ S) = 100, so nobody studies none. But 'exactly one' leaves out the two- and three-language students." },
        { spec: { type: "number", value: 80 }, feedback: "Did you leave the 8 in the centre inside the 'only' regions? French only = 65 − 12 − 17 − 8: subtract the centre too." },
      ],
      commonError: "Not removing the centre from the pairwise totals.",
      difficulty: "challenge",
      guideRef: "venn-diagrams",
      hints: [
        "Which region of a three-circle Venn diagram can you fill in straight away?",
        "Each 'X and Y' total includes the 8 in the centre — subtract it to get 'X and Y only'.",
        "Now find 'French only', 'German only' and 'Spanish only'.",
        "Exactly one = the sum of the three 'only' regions.",
      ],
      strategy: "Work from the centre outwards",
    },
    {
      kind: "short",
      id: "sets-venn-ch-q02",
      question:
        "In a class of 30 students, 20 like maths, 22 like art and 25 like music.\n\nWhat is the smallest possible number of students who like all three?",
      answer: { type: "number", value: 7 },
      solution: [
        "Look at the complements: 10 students don't like maths, 8 don't like art, 5 don't like music.",
        "A student who misses out on 'all three' must be in at least one of those groups.",
        "At most 10 + 8 + 5 = 23 students can miss out (fewer if the groups overlap).",
        "So at least 30 − 23 = 7 like all three.",
        "This is achievable: make the three 'don't like' groups disjoint (10 + 8 + 5 = 23 different students); the other 7 like everything.",
      ],
      solutions: [
        {
          label: "Two sets at a time",
          steps: [
            "Maths and art: at least 20 + 22 − 30 = 12 like both.",
            "Those 12 and the 25 music-lovers: at least 12 + 25 − 30 = 7 like all three.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 0 }, feedback: "Could nobody like all three? 20 + 22 + 25 = 67 'likes' shared among 30 students — someone must take three. Try counting the students who *don't* like each subject." },
        { spec: { type: "number", value: 20 }, feedback: "20 is the *largest* possible (everyone who likes maths). The question asks for the smallest." },
      ],
      commonError: "Assuming the smallest overlap is 0.",
      difficulty: "challenge",
      guideRef: "venn-diagrams",
      hints: [
        "Think about the complements: how many students *don't* like each subject?",
        "Anyone who doesn't like all three is in at least one 'don't like' group.",
        "What is the most students those three groups can hold together?",
        "Subtract that from 30.",
      ],
      strategy: "Consider extremes",
    },
    {
      kind: "short",
      id: "sets-venn-ch-q03",
      question: "How many positive integers n satisfy LCM(n, 18) = 72?",
      answer: { type: "number", value: 3 },
      solution: [
        "72 = 2³ × 3² and 18 = 2 × 3².",
        "n must divide 72, so n = {{2^a * 3^b}} with a ≤ 3 and b ≤ 2.",
        "The LCM takes the larger power of each prime. For 2: max(a, 1) = 3 forces a = 3.",
        "For 3: max(b, 2) = 2 for any b = 0, 1 or 2.",
        "So n = 8, 24 or 72 — three values.",
      ],
      traps: [
        { spec: { type: "number", value: 1 }, feedback: "72 works, but so do smaller numbers. The power of 3 in n can be 0, 1 or 2 because 18 already supplies 3²." },
        { spec: { type: "number", value: 12 }, feedback: "12 is the number of factors of 72. Most of them give an LCM smaller than 72 — n must contain 2³." },
      ],
      commonError: "Thinking n must be 72.",
      difficulty: "challenge",
      guideRef: "venn-hcf-lcm",
      hints: [
        "Write 72 and 18 as products of primes.",
        "The LCM takes the highest power of each prime from either number. Where must 2³ come from?",
        "What choices are there for the power of 3 in n?",
      ],
      strategy: "Split into cases",
    },
    {
      kind: "short",
      id: "sets-venn-ch-q04",
      question: "Find the smallest whole number greater than 1 that leaves a remainder of 1 when divided by 4, by 6 and by 10.",
      answer: { type: "number", value: 61 },
      solution: [
        "If N leaves remainder 1 each time, then N − 1 is divisible by 4, 6 and 10.",
        "LCM(4, 6, 10): 4 = 2², 6 = 2 × 3, 10 = 2 × 5 → 2² × 3 × 5 = 60.",
        "N − 1 = 60 (the smallest positive common multiple), so N = 61.",
      ],
      traps: [
        { spec: { type: "number", value: 60 }, feedback: "60 is divisible by all three — remainder 0, not 1. Add 1." },
        { spec: { type: "number", value: 241 }, feedback: "4 × 6 × 10 = 240 is a common multiple, but not the lowest. Use the LCM." },
      ],
      commonError: "Using 4 × 6 × 10 instead of the LCM.",
      difficulty: "challenge",
      guideRef: "venn-hcf-lcm",
      hints: [
        "If N leaves remainder 1, what can you say about N − 1?",
        "N − 1 is a common multiple of 4, 6 and 10.",
        "Find the LCM using prime factors, then add 1.",
      ],
      strategy: "Work backwards",
    },
    {
      kind: "short",
      id: "sets-venn-ch-q05",
      question:
        "For two events A and B, P(A) = 0.6, P(B) = 0.5 and P(A | B) = 0.4.\n\nFind P(B | A). Give your answer as a fraction in its simplest form.",
      answer: { type: "fraction", n: 1, d: 3, simplest: true },
      solution: [
        "P(A ∩ B) = P(A | B) × P(B) = 0.4 × 0.5 = 0.2.",
        "P(B | A) = {{P(A ∩ B)/P(A) = 0.2/0.6 = 1/3}}.",
      ],
      solutions: [
        {
          label: "Imagine 100 people",
          steps: [
            "50 are in B; 40% of them (20) are also in A, so n(A ∩ B) = 20.",
            "60 are in A. Of these 60, 20 are in B.",
            "P(B | A) = {{20/60 = 1/3}}.",
          ],
        },
      ],
      traps: [
        { spec: { type: "fraction", n: 2, d: 5 }, feedback: "P(B | A) is not generally the same as P(A | B) — the denominator changes from P(B) to P(A)." },
        { spec: { type: "fraction", n: 1, d: 5 }, feedback: "0.2 is P(A ∩ B). Now divide by P(A) to restrict to A." },
      ],
      commonError: "Assuming P(B | A) = P(A | B).",
      difficulty: "challenge",
      guideRef: "venn-probability",
      hints: [
        "Conditional probability = (probability of the overlap) ÷ (probability of the given event).",
        "Use P(A | B) and P(B) to find the overlap P(A ∩ B).",
        "Now divide the overlap by P(A).",
      ],
      strategy: "Imagine a population",
    },
    {
      kind: "short",
      id: "sets-venn-ch-q06",
      question:
        "The Venn diagram shows the number of elements in each region, where x is a positive integer. An element is chosen at random from ξ.\n\nThe events A and B are independent. Find x.",
      diagram: CH_IND,
      answer: { type: "number", value: 4 },
      solution: [
        "n(A) = x + 4, n(B) = 2x + 4 and n(ξ) = x + 4 + 2x + 8 = 3x + 12.",
        "Independent means P(A ∩ B) = P(A) × P(B): {{4/(3x + 12) = (x + 4)/(3x + 12) * (2x + 4)/(3x + 12)}}.",
        "Multiply both sides by (3x + 12)²: 4(3x + 12) = (x + 4)(2x + 4).",
        "12x + 48 = 2x² + 12x + 16, so 2x² = 32 and x² = 16.",
        "x is positive, so x = 4.",
        "Check: regions 4, 4, 8, 8; P(A) = {{8/24 = 1/3}}, P(B) = {{12/24 = 1/2}}, P(A ∩ B) = {{4/24 = 1/6}} = {{1/3 * 1/2}} ✓",
      ],
      traps: [
        { spec: { type: "number", value: 2 }, feedback: "Check by substituting: with x = 2, P(A) × P(B) ≠ P(A ∩ B). Set up n(A ∩ B) × n(ξ) = n(A) × n(B)." },
      ],
      commonError: "Using P(A) + P(B) instead of P(A) × P(B) for independence.",
      difficulty: "challenge",
      guideRef: "venn-probability",
      hints: [
        "What equation does 'independent' give you?",
        "Write P(A), P(B) and P(A ∩ B) in terms of x — they share the denominator n(ξ).",
        "Clearing denominators: n(A ∩ B) × n(ξ) = n(A) × n(B).",
        "The x terms cancel nicely — solve the quadratic and keep the positive root.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "sets-venn-ch-q07",
      question: "How many subsets of {a, b, c, d, e} contain a but do not contain b? (Count the subsets, including any with only one member.)",
      answer: { type: "number", value: 8 },
      solution: [
        "a is forced in and b is forced out.",
        "Each of c, d and e is either in or out: 2 choices each.",
        "2 × 2 × 2 = 8 subsets: {a}, {a, c}, {a, d}, {a, e}, {a, c, d}, {a, c, e}, {a, d, e}, {a, c, d, e}.",
      ],
      traps: [
        { spec: { type: "number", value: 32 }, feedback: "32 = 2⁵ is the total number of subsets of a 5-element set. Two of the choices (a and b) are already fixed." },
        { spec: { type: "number", value: 7 }, feedback: "Don't forget {a} on its own — it contains a and not b." },
      ],
      commonError: "Forgetting the subset with a alone.",
      difficulty: "challenge",
      guideRef: "set-notation",
      hints: [
        "Try a smaller case: how many subsets does {c, d} have?",
        "For each element, a subset makes a yes/no decision.",
        "a and b are already decided. How many free decisions are left?",
      ],
      strategy: "Try small cases",
    },
    {
      kind: "short",
      id: "sets-venn-ch-q08",
      question:
        "ξ = {1, 2, 3, …, 100}\n\nA = {multiples of 6}\n\nB = {multiples of 8}\n\nFind n(A ∪ B).",
      answer: { type: "number", value: 24 },
      solution: [
        "n(A) = 16 (since 6 × 16 = 96).",
        "n(B) = 12 (since 8 × 12 = 96).",
        "A ∩ B = multiples of both 6 and 8 = multiples of LCM(6, 8) = 24: {24, 48, 72, 96}, so n(A ∩ B) = 4.",
        "n(A ∪ B) = 16 + 12 − 4 = 24.",
      ],
      traps: [
        { spec: { type: "number", value: 28 }, feedback: "16 + 12 counts the common multiples twice. Subtract n(A ∩ B)." },
        { spec: { type: "number", value: 26 }, feedback: "You used multiples of 48 (= 6 × 8) for the overlap. Common multiples of 6 and 8 are multiples of their LCM, 24." },
      ],
      commonError: "Taking the overlap as multiples of 6 × 8 = 48 instead of LCM 24.",
      difficulty: "challenge",
      guideRef: "set-notation",
      hints: [
        "Count n(A) and n(B) by dividing 100.",
        "Which numbers are in A ∩ B? They are multiples of both 6 and 8.",
        "Multiples of both are multiples of the LCM — is that 48 or something smaller?",
        "Use n(A ∪ B) = n(A) + n(B) − n(A ∩ B).",
      ],
      strategy: "Recognise the structure",
    },
    {
      kind: "short",
      id: "sets-venn-ch-q09",
      question:
        "In a group of 100 students, 65 study French, 45 study German and 42 study Spanish. 20 study French and German, 25 study French and Spanish, 15 study German and Spanish, and 8 study all three.\n\nA student who studies at least two of the languages is chosen at random. Find the probability that this student studies all three. Give your answer as a fraction in its simplest form.",
      answer: { type: "fraction", n: 2, d: 11, simplest: true },
      solution: [
        "Two only regions: F and G only = 12, F and S only = 17, G and S only = 7. Centre = 8.",
        "At least two = 12 + 17 + 7 + 8 = 44.",
        "P(all three | at least two) = {{8/44 = 2/11}}.",
      ],
      solutions: [
        {
          label: "Without filling every region",
          steps: [
            "20 + 25 + 15 = 60 counts each 'exactly two' student once and each 'all three' student three times.",
            "So 'at least two' = 60 − 2 × 8 = 44.",
            "P = {{8/44 = 2/11}}.",
          ],
        },
      ],
      traps: [
        { spec: { type: "fraction", n: 2, d: 25 }, feedback: "That is 8 out of all 100 students. The student is chosen only from those with at least two languages." },
        { spec: { type: "fraction", n: 2, d: 15 }, feedback: "60 counts the 8 'all three' students three times. Remove the extra 16 to get 44." },
      ],
      commonError: "Using 20 + 25 + 15 = 60 as the number studying at least two.",
      difficulty: "challenge",
      guideRef: "venn-probability",
      hints: [
        "'Chosen from those who study at least two' — this is a conditional probability. What's the new denominator?",
        "Which regions of the three-circle Venn diagram hold students with at least two languages?",
        "Each pairwise total includes the 8 in the centre.",
      ],
      strategy: "Shrink the sample space",
    },
    {
      kind: "short",
      id: "sets-venn-ch-q10",
      question:
        "ξ = {1, 2, 3, …, 60}\n\nA = {multiples of 2}, B = {multiples of 3}, C = {multiples of 5}\n\nFind n(A′ ∩ B′ ∩ C′).",
      answer: { type: "number", value: 16 },
      solution: [
        "A′ ∩ B′ ∩ C′ is the set of numbers divisible by none of 2, 3, 5.",
        "n(A) = 30, n(B) = 20, n(C) = 12.",
        "Pairs: n(A ∩ B) = multiples of 6 = 10, n(A ∩ C) = multiples of 10 = 6, n(B ∩ C) = multiples of 15 = 4.",
        "All three: multiples of 30 = 2.",
        "n(A ∪ B ∪ C) = 30 + 20 + 12 − 10 − 6 − 4 + 2 = 44.",
        "n(A′ ∩ B′ ∩ C′) = 60 − 44 = 16.",
      ],
      solutions: [
        {
          label: "Multiply the 'survival' fractions",
          steps: [
            "Half the numbers are odd; of those, {{2/3}} are not multiples of 3; of those, {{4/5}} are not multiples of 5.",
            "60 × {{1/2}} × {{2/3}} × {{4/5}} = 16. (This works because 60 is a multiple of 2 × 3 × 5.)",
            "They are 1, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 49, 53, 59.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 44 }, feedback: "44 is n(A ∪ B ∪ C). The question wants the complement — numbers in *none* of the sets." },
        { spec: { type: "number", value: 18 }, feedback: "Check the centre: 30 and 60 are counted three times in the singles and removed three times in the pairs — add them back once (+ 2)." },
      ],
      commonError: "Forgetting to add back the triple overlap in inclusion–exclusion.",
      difficulty: "challenge",
      guideRef: "venn-diagrams",
      hints: [
        "Translate A′ ∩ B′ ∩ C′ into words.",
        "It's easier to count n(A ∪ B ∪ C) and subtract from 60.",
        "Overlaps are multiples of 6, 10, 15 and 30.",
        "n(A ∪ B ∪ C) = sum of singles − sum of pairs + triple.",
      ],
      strategy: "Use the complement",
    },
  ],
};
