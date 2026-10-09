// ---------------------------------------------------------------------------
// Sets & Venn Diagrams — Practice Papers 3 and 4.
// Paper 3: mixed practice in fresh contexts (mostly short, 3 written).
// Paper 4: exam style, modelled on Edexcel 4MA1 Higher set/Venn questions —
//          linked parts on one diagram, set notation from {x : …} descriptions,
//          prime-factor Venn diagrams, conditional probability, "show that".
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

// p3-q04: Art (A) and Biology (B), 40 students.
const P3_ART_BIO = `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram with sets A and B inside the universal set: 12 in A only, 7 in both A and B, 9 in B only and 12 outside both circles"><rect x="10" y="10" width="340" height="200" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="26" y="32" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-style="italic">ξ</text><circle cx="140" cy="115" r="70" fill="#c7d2fe" fill-opacity="0.45"/><circle cx="220" cy="115" r="70" fill="#fde68a" fill-opacity="0.45"/><circle cx="140" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="220" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><text x="82" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">A</text><text x="278" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">B</text><text x="103" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">12</text><text x="180" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">7</text><text x="257" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">9</text><text x="40" y="196" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">12</text></svg>`;
// p3-q08: Sister (S) and Pet (P), 50 students.
const P3_SISTER_PET = `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram with sets S and P inside the universal set: 14 in S only, 6 in both S and P, 10 in P only and 20 outside both circles"><rect x="10" y="10" width="340" height="200" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="26" y="32" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-style="italic">ξ</text><circle cx="140" cy="115" r="70" fill="#c7d2fe" fill-opacity="0.45"/><circle cx="220" cy="115" r="70" fill="#fde68a" fill-opacity="0.45"/><circle cx="140" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="220" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><text x="82" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">S</text><text x="278" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">P</text><text x="103" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">14</text><text x="180" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6</text><text x="257" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">10</text><text x="40" y="196" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">20</text></svg>`;
// p3-q10: shaded region is A only.
const P3_SHADE_A_ONLY = `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram with two overlapping circles A and B inside the universal set; only the part of circle A that is outside circle B is shaded"><rect x="10" y="10" width="340" height="200" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="26" y="32" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-style="italic">ξ</text><circle cx="140" cy="115" r="70" fill="#c7d2fe"/><circle cx="220" cy="115" r="70" fill="#ffffff"/><circle cx="140" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="220" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><text x="82" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">A</text><text x="278" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">B</text></svg>`;
// p3-q11: three-set Venn, 40 members.
const P3_THREE_SET = `<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-set Venn diagram with circles A, B and C: A only 7, B only 9, C only 5, A and B only 4, A and C only 3, B and C only 6, all three 2, outside all circles 4"><rect x="10" y="10" width="360" height="280" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="26" y="32" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-style="italic">ξ</text><circle cx="150" cy="115" r="75" fill="#c7d2fe" fill-opacity="0.4"/><circle cx="230" cy="115" r="75" fill="#fde68a" fill-opacity="0.4"/><circle cx="190" cy="185" r="75" fill="#bbf7d0" fill-opacity="0.4"/><circle cx="150" cy="115" r="75" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="230" cy="115" r="75" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="190" cy="185" r="75" fill="none" stroke="#1f2937" stroke-width="1.8"/><text x="80" y="50" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">A</text><text x="300" y="50" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">B</text><text x="285" y="268" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">C</text><text x="112" y="100" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">7</text><text x="268" y="100" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">9</text><text x="190" y="240" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text><text x="190" y="82" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4</text><text x="146" y="172" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">3</text><text x="234" y="172" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6</text><text x="190" y="140" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2</text><text x="45" y="268" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4</text></svg>`;
// p3-q14: Music (M) and Drama (D), algebraic regions, 120 students.
const P3_MUSIC_DRAMA = `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram with sets M and D: 3x in M only, x in both M and D, 2x + 4 in D only and 20 outside both circles"><rect x="10" y="10" width="340" height="200" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="26" y="32" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-style="italic">ξ</text><circle cx="140" cy="115" r="70" fill="#c7d2fe" fill-opacity="0.45"/><circle cx="220" cy="115" r="70" fill="#fde68a" fill-opacity="0.45"/><circle cx="140" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="220" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><text x="82" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">M</text><text x="278" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">D</text><text x="103" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">3x</text><text x="180" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">x</text><text x="257" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2x + 4</text><text x="40" y="196" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">20</text></svg>`;
// p4-q04: prime factors of 150 and 360.
const P4_PRIME_150_360 = `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram of prime factors: circle 150 contains 5 on its own; the overlap contains 2, 3 and 5; circle 360 contains 2, 2 and 3 on its own"><rect x="10" y="10" width="340" height="200" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="26" y="32" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-style="italic">ξ</text><circle cx="140" cy="115" r="70" fill="#c7d2fe" fill-opacity="0.45"/><circle cx="220" cy="115" r="70" fill="#fde68a" fill-opacity="0.45"/><circle cx="140" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="220" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><text x="82" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">150</text><text x="278" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">360</text><text x="103" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text><text x="180" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2, 3, 5</text><text x="257" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2, 2, 3</text></svg>`;
// p4-q06/q07: History (H) and Geography (G), 48 students.
const P4_HIST_GEOG = `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram with sets H and G: 15 in H only, 9 in both H and G, 18 in G only and 6 outside both circles"><rect x="10" y="10" width="340" height="200" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="26" y="32" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-style="italic">ξ</text><circle cx="140" cy="115" r="70" fill="#c7d2fe" fill-opacity="0.45"/><circle cx="220" cy="115" r="70" fill="#fde68a" fill-opacity="0.45"/><circle cx="140" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="220" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><text x="82" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">H</text><text x="278" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">G</text><text x="103" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">15</text><text x="180" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">9</text><text x="257" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">18</text><text x="40" y="196" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">6</text></svg>`;
// p4-q08: three-set Venn with regions numbered 1 to 8.
const P4_REGIONS = `<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-set Venn diagram with circles A, B and C and regions numbered: 1 is A only, 2 is B only, 3 is C only, 4 is A and B only, 5 is A and C only, 6 is B and C only, 7 is in all three, 8 is outside all circles"><rect x="10" y="10" width="360" height="280" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="26" y="32" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-style="italic">ξ</text><circle cx="150" cy="115" r="75" fill="#c7d2fe" fill-opacity="0.4"/><circle cx="230" cy="115" r="75" fill="#fde68a" fill-opacity="0.4"/><circle cx="190" cy="185" r="75" fill="#bbf7d0" fill-opacity="0.4"/><circle cx="150" cy="115" r="75" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="230" cy="115" r="75" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="190" cy="185" r="75" fill="none" stroke="#1f2937" stroke-width="1.8"/><text x="80" y="50" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">A</text><text x="300" y="50" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">B</text><text x="285" y="268" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">C</text><circle cx="112" cy="95" r="11" fill="#ffffff" stroke="#334155" stroke-width="1.2"/><text x="112" y="100" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">1</text><circle cx="268" cy="95" r="11" fill="#ffffff" stroke="#334155" stroke-width="1.2"/><text x="268" y="100" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">2</text><circle cx="190" cy="235" r="11" fill="#ffffff" stroke="#334155" stroke-width="1.2"/><text x="190" y="240" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">3</text><circle cx="190" cy="77" r="11" fill="#ffffff" stroke="#334155" stroke-width="1.2"/><text x="190" y="82" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">4</text><circle cx="146" cy="167" r="11" fill="#ffffff" stroke="#334155" stroke-width="1.2"/><text x="146" y="172" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">5</text><circle cx="234" cy="167" r="11" fill="#ffffff" stroke="#334155" stroke-width="1.2"/><text x="234" y="172" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">6</text><circle cx="190" cy="135" r="11" fill="#ffffff" stroke="#334155" stroke-width="1.2"/><text x="190" y="140" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">7</text><circle cx="45" cy="260" r="11" fill="#ffffff" stroke="#334155" stroke-width="1.2"/><text x="45" y="265" font-size="13" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">8</text></svg>`;
// p4-q09/q10: three-set Venn with algebra, 63 students.
const P4_THREE_ALG = `<svg viewBox="0 0 380 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three-set Venn diagram with circles A, B and C: A only 12, B only 9, C only 3x, A and B only 5, A and C only x, B and C only 4, all three 2, outside all circles x + 1"><rect x="10" y="10" width="360" height="280" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="26" y="32" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-style="italic">ξ</text><circle cx="150" cy="115" r="75" fill="#c7d2fe" fill-opacity="0.4"/><circle cx="230" cy="115" r="75" fill="#fde68a" fill-opacity="0.4"/><circle cx="190" cy="185" r="75" fill="#bbf7d0" fill-opacity="0.4"/><circle cx="150" cy="115" r="75" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="230" cy="115" r="75" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="190" cy="185" r="75" fill="none" stroke="#1f2937" stroke-width="1.8"/><text x="80" y="50" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">A</text><text x="300" y="50" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">B</text><text x="285" y="268" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">C</text><text x="112" y="100" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">12</text><text x="268" y="100" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">9</text><text x="190" y="240" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">3x</text><text x="190" y="82" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">5</text><text x="146" y="172" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">x</text><text x="234" y="172" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">4</text><text x="190" y="140" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">2</text><text x="45" y="268" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">x + 1</text></svg>`;
// p4-q13: general two-set Venn x, y, z, w.
const P4_XYZ = `<svg viewBox="0 0 360 220" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram with sets A and B: x in A only, y in both A and B, z in B only and w outside both circles"><rect x="10" y="10" width="340" height="200" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><text x="26" y="32" font-size="16" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-style="italic">ξ</text><circle cx="140" cy="115" r="70" fill="#c7d2fe" fill-opacity="0.45"/><circle cx="220" cy="115" r="70" fill="#fde68a" fill-opacity="0.45"/><circle cx="140" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><circle cx="220" cy="115" r="70" fill="none" stroke="#1f2937" stroke-width="1.8"/><text x="82" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">A</text><text x="278" y="52" font-size="15" text-anchor="middle" font-family="sans-serif" fill="#1f2937" font-weight="bold">B</text><text x="103" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">x</text><text x="180" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">y</text><text x="257" y="120" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">z</text><text x="40" y="196" font-size="14" text-anchor="middle" font-family="sans-serif" fill="#1f2937">w</text></svg>`;

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "sets-venn-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "sets-venn-p3-q01",
        question:
          "ξ = {1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12}\n\nA = {multiples of 3}\n\nB = {factors of 12}\n\nList the members of A ∩ B.",
        answer: { type: "list", values: [3, 6, 12], ordered: false, display: "{3, 6, 12}" },
        traps: [
          {
            spec: { type: "list", values: [1, 2, 3, 4, 6, 9, 12], ordered: false },
            feedback: "That's A ∪ B — everything in A *or* B. The symbol ∩ means **intersection**: members that are in A *and* in B.",
          },
          {
            spec: { type: "list", values: [3, 6], ordered: false },
            feedback: "Nearly. 12 is a multiple of 3 (12 = 3 × 4) *and* a factor of 12 (every number is a factor of itself).",
          },
        ],
        solution: [
          "List each set first: A = {3, 6, 9, 12} and B = {1, 2, 3, 4, 6, 12}.",
          "A ∩ B contains the numbers in **both** lists: 3, 6 and 12.",
          "So A ∩ B = {3, 6, 12}.",
        ],
        commonError: "Mixing up ∩ (and, the overlap) with ∪ (or, everything).",
        difficulty: "warmup",
        guideRef: "set-notation",
        hints: ["Write out A and B in full before comparing them.", "∩ means 'in both'. Which numbers appear in both lists?"],
        strategy: "List the sets first",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "sets-venn-p3-q02",
        question:
          "ξ = {x : x is an integer, 1 ≤ x ≤ 15}\n\nP = {prime numbers}\n\nFind n(P′).",
        answer: { type: "number", value: 9 },
        traps: [
          {
            spec: { type: "number", value: 6 },
            feedback: "6 is n(P), the number of primes. The dash in P′ means the **complement** — members of ξ that are *not* in P.",
          },
          {
            spec: { type: "number", value: 8 },
            feedback: "Check whether you counted 1 as a prime. A prime has exactly two factors; 1 has only one, so 1 is **not** prime and belongs in P′.",
          },
        ],
        solution: [
          "ξ has 15 members: 1, 2, 3, …, 15.",
          "P = {2, 3, 5, 7, 11, 13}, so n(P) = 6.",
          "n(P′) = n(ξ) − n(P) = 15 − 6 = 9. (P′ = {1, 4, 6, 8, 9, 10, 12, 14, 15}.)",
        ],
        commonError: "Counting 1 as a prime number, or giving n(P) instead of n(P′).",
        difficulty: "warmup",
        guideRef: "set-notation",
        hints: ["What does n( ) count? What does the dash ′ mean?", "Count the primes from 1 to 15, then take that away from 15."],
        strategy: "Count the complement",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "mcq",
        id: "sets-venn-p3-q03",
        question: "A = {2, 4, 6, 8} and B = {4, 8}.\n\nWhich one of these statements is true?",
        options: ["A ⊂ B", "5 ∈ A", "B ⊂ A", "A ∩ B = ∅"],
        answerIndex: 2,
        explanation:
          "Every member of B (4 and 8) is also in A, so B is a subset of A: B ⊂ A. Writing A ⊂ B gets the direction backwards — A has members (2 and 6) that are not in B. 5 ∈ A is false because 5 is not listed in A. A ∩ B = ∅ would mean A and B share nothing, but they share 4 and 8, so A ∩ B = {4, 8}.",
        difficulty: "warmup",
        guideRef: "set-notation",
        hints: ["Read ⊂ as 'is contained inside'. Which set fits inside the other?", "Check each statement one at a time against the lists."],
        strategy: "Eliminate options",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "sets-venn-p3-q04",
        question:
          "The Venn diagram shows information about the 40 students in a Year 11 group.\n\nξ = {students in the group}, A = {students who study Art}, B = {students who study Biology}.\n\nFind n(A ∪ B).",
        diagram: P3_ART_BIO,
        answer: { type: "number", value: 28 },
        traps: [
          {
            spec: { type: "number", value: 35 },
            feedback: "You've added n(A) = 19 and n(B) = 16, so the 7 students in the overlap have been counted twice. Add the three regions inside the circles once each.",
          },
          {
            spec: { type: "number", value: 7 },
            feedback: "7 is n(A ∩ B), the overlap. A ∪ B is everything inside *either* circle.",
          },
        ],
        solution: [
          "A ∪ B is every region inside at least one circle.",
          "n(A ∪ B) = 12 + 7 + 9 = 28.",
          "Check: 28 + 12 outside = 40 students. ✓",
        ],
        commonError: "Adding n(A) + n(B) and double-counting the overlap.",
        difficulty: "warmup",
        guideRef: "venn-diagrams",
        hints: ["Which regions are inside circle A *or* circle B (or both)?", "Add each of those regions once."],
        strategy: "Read the diagram region by region",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "sets-venn-p3-q05",
        question:
          "There are 50 students in a sports CCA. 28 of them play netball, 19 do rock climbing and 8 do both.\n\nHow many of the 50 students do neither netball nor rock climbing?",
        answer: { type: "number", value: 11 },
        traps: [
          {
            spec: { type: "number", value: 3 },
            feedback: "50 − (28 + 19) = 3 counts the 8 students who do both twice. Fill in the overlap first: netball only = 20, climbing only = 11.",
          },
          {
            spec: { type: "number", value: 19 },
            feedback: "That's 50 − 28 − 19 + 8 + 8 — the overlap has been added back once too often. Netball only + both + climbing only = 20 + 8 + 11 = 39.",
          },
        ],
        solution: [
          "Start in the centre: 8 do both.",
          "Netball only = 28 − 8 = 20. Climbing only = 19 − 8 = 11.",
          "Inside the circles: 20 + 8 + 11 = 39.",
          "Neither = 50 − 39 = 11.",
        ],
        solutions: [
          {
            label: "Addition rule",
            steps: ["n(N ∪ R) = n(N) + n(R) − n(N ∩ R) = 28 + 19 − 8 = 39.", "Neither = 50 − 39 = 11."],
          },
        ],
        commonError: "Forgetting to subtract the overlap from each circle before adding.",
        difficulty: "core",
        guideRef: "venn-diagrams",
        hints: [
          "Draw a two-circle Venn diagram. Which number goes in first?",
          "Put 8 in the overlap. How many play netball but do not climb?",
          "Add everything inside the circles and subtract from 50.",
        ],
        strategy: "Fill from the centre outwards",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "sets-venn-p3-q06",
        question:
          "84 = 2² × 3 × 7 and 120 = 2³ × 3 × 5.\n\nUse a Venn diagram of prime factors to find the highest common factor (HCF) and the lowest common multiple (LCM) of 84 and 120.\n\nGive the HCF first, then the LCM.",
        answer: { type: "list", values: [12, 840], ordered: true, display: "HCF = 12, LCM = 840" },
        traps: [
          {
            spec: { type: "list", values: [840, 12], ordered: true },
            feedback: "Right numbers, wrong order — the question asks for the HCF first. The HCF is the smaller one: it has to divide both numbers.",
          },
          {
            spec: { type: "list", values: [12, 10080], ordered: true },
            feedback: "10080 is 84 × 120. That is a common multiple, but not the *lowest*: the shared factors 2 × 2 × 3 have been counted twice. LCM = everything in the diagram once.",
          },
        ],
        solution: [
          "Shared prime factors go in the overlap: 2, 2, 3.",
          "84 only: 7. 120 only: 2, 5.",
          "HCF = product of the overlap = 2 × 2 × 3 = 12.",
          "LCM = product of everything in the diagram = 7 × 2 × 2 × 3 × 2 × 5 = 840.",
        ],
        solutions: [
          {
            label: "Check with HCF × LCM",
            steps: ["For two numbers, HCF × LCM = the product of the numbers.", "12 × 840 = 10080 and 84 × 120 = 10080. ✓"],
          },
        ],
        commonError: "Putting all of each number's factors in its circle and the shared ones in the overlap as well, so shared factors are counted twice.",
        difficulty: "core",
        guideRef: "venn-hcf-lcm",
        hints: [
          "Which prime factors do 84 and 120 have in common (count repeats)?",
          "Two 2s and one 3 are shared. Put those in the overlap and the rest outside it.",
          "HCF = multiply the overlap; LCM = multiply everything in the diagram.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "written",
        id: "sets-venn-p3-q07",
        question:
          "60 people at a hawker centre were asked whether they like teh (tea) and whether they like kopi (coffee).\n\n- 35 like teh\n- 30 like kopi\n- 8 like neither\n\nShow that 13 people like both teh and kopi.",
        marks: 3,
        modelAnswer:
          "Number who like at least one drink = 60 − 8 = 52.\n\nn(T) + n(K) = 35 + 30 = 65, but this counts the people who like both twice.\n\nSo the number who like both = 65 − 52 = **13**.\n\nCheck with a Venn diagram: teh only 22, both 13, kopi only 17, neither 8 → 22 + 13 + 17 + 8 = 60. ✓",
        markScheme: [
          { point: "Finds the number who like at least one drink: 60 − 8 = 52", keywords: ["52", "60 − 8", "60-8", "at least one"] },
          { point: "Adds 35 + 30 = 65 or sets up 35 − x + x + 30 − x + 8 = 60", keywords: ["65", "35 + 30", "35+30", "35 − x", "35-x", "73 − x", "73-x"] },
          { point: "Shows 65 − 52 = 13 (or solves to x = 13) with a check", keywords: ["13", "65 − 52", "65-52", "x = 13", "x=13"] },
        ],
        solutions: [
          {
            label: "Using algebra",
            steps: [
              "Let x people like both. Teh only = 35 − x, kopi only = 30 − x.",
              "(35 − x) + x + (30 − x) + 8 = 60.",
              "73 − x = 60, so x = 13.",
            ],
          },
        ],
        commonError: "Writing 35 + 30 + 8 = 73 and stopping, without explaining that the extra 13 are the people counted twice.",
        difficulty: "core",
        guideRef: "venn-diagrams",
        hints: [
          "How many people like at least one of the two drinks?",
          "If you add 35 and 30, who has been counted twice?",
          "Compare 35 + 30 with the number who like at least one drink.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "sets-venn-p3-q08",
        question:
          "The Venn diagram shows information about 50 students.\n\nS = {students who have a sister}, P = {students who have a pet}.\n\nA student is chosen at random. Find the probability that the student has a pet but does not have a sister. Give your answer as a fraction in its simplest form.",
        diagram: P3_SISTER_PET,
        answer: { type: "fraction", n: 1, d: 5, simplest: true },
        traps: [
          {
            spec: { type: "fraction", n: 8, d: 25 },
            feedback: "{{16/50}} counts everyone in P, including the 6 who also have a sister. You want P only — the region in P but outside S.",
          },
          {
            spec: { type: "fraction", n: 1, d: 3 },
            feedback: "Dividing by 30 uses only the students inside the circles. The student is chosen from all 50.",
          },
        ],
        solution: [
          "Pet but no sister is the region P ∩ S′: the part of P outside S, which contains 10.",
          "Total = 14 + 6 + 10 + 20 = 50.",
          "P(P ∩ S′) = {{10/50 = 1/5}}.",
        ],
        commonError: "Using the whole of circle P (16) instead of only the part outside S.",
        difficulty: "core",
        guideRef: "venn-probability",
        hints: [
          "Which region is 'in P but not in S'?",
          "How many students are there altogether — including the ones outside both circles?",
        ],
        strategy: "Read the diagram region by region",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "sets-venn-p3-q09",
        question:
          "80 visitors to Sentosa were asked where they went that day.\n\n- 45 went to the beach\n- 38 went to the aquarium\n- 15 went to neither\n\nOne of the visitors who went to the aquarium is chosen at random. Work out the probability that this visitor also went to the beach. Give your answer as a fraction in its simplest form.",
        answer: { type: "fraction", n: 9, d: 19, simplest: true },
        traps: [
          {
            spec: { type: "fraction", n: 9, d: 40 },
            feedback: "{{18/80}} is P(beach and aquarium) for a visitor chosen from *everyone*. The visitor is chosen from the 38 who went to the aquarium, so divide by 38.",
          },
          {
            spec: { type: "fraction", n: 2, d: 5 },
            feedback: "{{18/45}} is P(aquarium | beach) — the condition is the other way round. 'One of the visitors who went to the aquarium' means you divide by the aquarium total, 38.",
          },
        ],
        solution: [
          "At least one place: 80 − 15 = 65.",
          "Both = 45 + 38 − 65 = 18.",
          "Given the visitor went to the aquarium, there are 38 possible visitors, of whom 18 went to the beach.",
          "P(beach | aquarium) = {{18/38 = 9/19}}.",
        ],
        commonError: "Dividing by the total 80 instead of by the 38 aquarium visitors.",
        difficulty: "core",
        guideRef: "venn-probability",
        hints: [
          "First find how many went to both. How many went to at least one place?",
          "Both = 45 + 38 − 65. Now, who are you choosing from?",
          "The new 'total' is the 38 aquarium visitors.",
        ],
        strategy: "Restrict the sample space",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "mcq",
        id: "sets-venn-p3-q10",
        question: "Which of these describes the shaded region in the Venn diagram?",
        diagram: P3_SHADE_A_ONLY,
        options: ["A′ ∩ B", "A ∩ B′", "A ∪ B′", "(A ∪ B)′"],
        answerIndex: 1,
        explanation:
          "The shaded part is inside A but outside B, so it is 'in A **and** not in B': A ∩ B′. A′ ∩ B is the mirror image (B only). A ∪ B′ is much bigger — it includes everything outside B, even the space outside both circles. (A ∪ B)′ is the region outside both circles.",
        difficulty: "core",
        guideRef: "set-notation",
        hints: ["Is the shaded region inside A? Is it inside B?", "'Inside A and outside B' — write 'outside B' as B′ and 'and' as ∩."],
        strategy: "Translate words into symbols",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "sets-venn-p3-q11",
        question: "The Venn diagram shows the number of members in each region of the sets A, B and C.\n\nFind n((A ∪ C)′).",
        diagram: P3_THREE_SET,
        answer: { type: "number", value: 13 },
        traps: [
          {
            spec: { type: "number", value: 4 },
            feedback: "4 is n((A ∪ B ∪ C)′), the region outside all three circles. (A ∪ C)′ also includes the 9 in B only, because those are outside A and outside C.",
          },
          {
            spec: { type: "number", value: 27 },
            feedback: "27 is n(A ∪ C). The dash means the complement: everything in ξ that is *not* in A ∪ C.",
          },
        ],
        solution: [
          "A ∪ C covers every region inside circle A or circle C: 7 + 4 + 3 + 2 + 6 + 5 = 27.",
          "n(ξ) = 7 + 9 + 5 + 4 + 3 + 6 + 2 + 4 = 40.",
          "n((A ∪ C)′) = 40 − 27 = 13. (These are the 9 in B only and the 4 outside all circles.)",
        ],
        commonError: "Only counting the region outside all three circles.",
        difficulty: "core",
        guideRef: "venn-diagrams",
        hints: [
          "Shade A ∪ C first. Which regions are left unshaded?",
          "The B-only region is outside both A and C.",
        ],
        strategy: "Shade, then count",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "sets-venn-p3-q12",
        question:
          "n(ξ) = 20, n(A) = 13 and n(B) = 9.\n\nRavi says, \"It is possible that A ∩ B = ∅.\"\n\n(a) Explain why Ravi is wrong.\n\n(b) Find the smallest possible value and the largest possible value of n(A ∩ B).",
        marks: 3,
        modelAnswer:
          "(a) If A ∩ B = ∅, then A and B would have no members in common, so n(A ∪ B) = 13 + 9 = 22. But A ∪ B is inside ξ, which only has 20 members — impossible. So A and B must overlap.\n\n(b) Smallest: n(A ∩ B) = 22 − 20 = **2** (when A ∪ B fills the whole of ξ). Largest: n(A ∩ B) = **9**, when B ⊂ A (the overlap can't be bigger than the smaller set).",
        markScheme: [
          { point: "Explains that 13 + 9 = 22 is more than 20, the size of ξ", keywords: ["22", "more than 20", "only 20", "13 + 9", "13+9", "bigger than"] },
          { point: "Smallest value 2 (= 22 − 20)", keywords: ["2", "22 − 20", "22-20", "smallest"] },
          { point: "Largest value 9 (B is a subset of A)", keywords: ["9", "subset", "b ⊂ a", "inside a", "largest"] },
        ],
        commonError: "Saying 'they could just not overlap' without checking the total against n(ξ).",
        difficulty: "core",
        guideRef: "set-notation",
        hints: [
          "If A and B didn't overlap, how many members would A ∪ B have?",
          "Can A ∪ B have more members than ξ?",
          "For the largest overlap: what happens if B sits completely inside A?",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "sets-venn-p3-q13",
        question:
          "N is a positive whole number.\n\nThe highest common factor of N and 72 is 12.\n\nThe lowest common multiple of N and 72 is 504.\n\nFind N.",
        answer: { type: "number", value: 84 },
        traps: [
          {
            spec: { type: "number", value: 42 },
            feedback: "Check: HCF(42, 72) = 6, not 12. N must contain 2 × 2 (the HCF has 2²), so it needs two factors of 2.",
          },
          {
            spec: { type: "number", value: 7 },
            feedback: "7 is what N has *outside* the overlap. N's circle also contains the shared factors 2, 2, 3 — so N = 2 × 2 × 3 × 7.",
          },
        ],
        solution: [
          "72 = 2³ × 3², HCF = 12 = 2² × 3, LCM = 504 = 2³ × 3² × 7.",
          "The overlap of the Venn diagram is the HCF: 2, 2, 3.",
          "72's circle needs 2, 2, 2, 3, 3, so 72 only = 2, 3.",
          "LCM = everything in the diagram = 2 × 3 × (2 × 2 × 3) × (N only) = 504, so N only = 504 ÷ 72 = 7.",
          "N = overlap × N only = 2 × 2 × 3 × 7 = 84.",
        ],
        solutions: [
          {
            label: "HCF × LCM = product",
            steps: [
              "For any two numbers, HCF × LCM = the product of the numbers.",
              "12 × 504 = 72 × N, so N = 6048 ÷ 72 = 84.",
              "Check: 84 = 2² × 3 × 7; HCF(84, 72) = 2² × 3 = 12 ✓, LCM = 2³ × 3² × 7 = 504 ✓.",
            ],
          },
        ],
        commonError: "Treating the 'N only' part of the diagram as N itself.",
        difficulty: "challenge",
        guideRef: "venn-hcf-lcm",
        hints: [
          "Write 72, 12 and 504 as products of primes.",
          "The HCF goes in the overlap of the Venn diagram. What must be in 72's own section?",
          "Everything in the diagram multiplies to the LCM. What is missing for N's own section?",
          "Shortcut: HCF × LCM = N × 72.",
        ],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "sets-venn-p3-q14",
        question:
          "There are 120 students in Year 11. The Venn diagram shows the numbers of students who take Music (M) and Drama (D).\n\nA student who takes Drama is chosen at random. Work out the probability that this student also takes Music. Give your answer as a fraction in its simplest form.",
        diagram: P3_MUSIC_DRAMA,
        answer: { type: "fraction", n: 4, d: 13, simplest: true },
        traps: [
          {
            spec: { type: "fraction", n: 2, d: 15 },
            feedback: "{{16/120}} is P(M ∩ D) from the whole year group. You are choosing only from the students who take Drama.",
          },
          {
            spec: { type: "fraction", n: 1, d: 4 },
            feedback: "{{16/64}} is P(D | M) — you divided by the Music total. The student is chosen from the Drama students: 16 + 36 = 52.",
          },
        ],
        solution: [
          "All regions add to 120: 3x + x + (2x + 4) + 20 = 120.",
          "6x + 24 = 120, so 6x = 96 and x = 16.",
          "n(D) = x + (2x + 4) = 16 + 36 = 52; n(M ∩ D) = x = 16.",
          "P(M | D) = {{16/52 = 4/13}}.",
        ],
        commonError: "Dividing by 120 or by n(M) instead of n(D).",
        difficulty: "challenge",
        guideRef: "venn-probability",
        hints: [
          "What must all four regions add up to?",
          "Solve 6x + 24 = 120.",
          "'A student who takes Drama' — so the denominator is the total inside circle D.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "written",
        id: "sets-venn-p3-q15",
        question:
          "50 students were asked which CCAs they do from Choir (C), Debate (D) and Robotics (R).\n\n- 24 do Choir, 20 do Debate and 18 do Robotics.\n- 8 do Choir and Debate, 7 do Debate and Robotics, 6 do Choir and Robotics.\n- 3 do all three CCAs.\n\nA student who does at least one of these CCAs is chosen at random.\n\nShow that the probability that this student does exactly one of these CCAs is {{29/44}}.",
        marks: 4,
        modelAnswer:
          "Fill in from the centre: all three = 3.\n\nC and D only = 8 − 3 = 5; D and R only = 7 − 3 = 4; C and R only = 6 − 3 = 3.\n\nC only = 24 − 5 − 3 − 3 = 13; D only = 20 − 5 − 4 − 3 = 8; R only = 18 − 3 − 4 − 3 = 8.\n\nAt least one CCA = 13 + 8 + 8 + 5 + 4 + 3 + 3 = 44 (so 6 do none of them).\n\nExactly one CCA = 13 + 8 + 8 = 29.\n\nP(exactly one | at least one) = {{29/44}}.",
        markScheme: [
          { point: "Two-way overlaps reduced by the centre: 5, 4, 3", keywords: ["8 − 3", "8-3", "5", "4", "3"] },
          { point: "'Only' regions 13, 8, 8", keywords: ["13", "8", "24 − 5 − 3 − 3", "24-5-3-3"] },
          { point: "At least one CCA = 44", keywords: ["44", "50 − 6", "50-6"] },
          { point: "Exactly one = 29, giving 29/44", keywords: ["29", "29/44", "13 + 8 + 8", "13+8+8"] },
        ],
        commonError: "Using 8, 7 and 6 directly as the 'two only' regions, forgetting that they include the 3 who do all three.",
        difficulty: "challenge",
        guideRef: "venn-diagrams",
        hints: [
          "Draw three overlapping circles. Which region can you fill in straight away?",
          "'8 do Choir and Debate' includes the 3 who do all three. What goes in 'C and D only'?",
          "Work outwards to the 'only' regions, then add up everyone inside the circles.",
          "The denominator is the number doing at least one of the CCAs, not 50.",
        ],
        strategy: "Fill from the centre outwards",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "sets-venn-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "sets-venn-p4-q01",
        question:
          "ξ = {odd numbers less than 30}\n\nA = {x : x is a multiple of 3}\n\nB = {x : x is a multiple of 5}\n\nList the members of A ∪ B.",
        answer: { type: "list", values: [3, 5, 9, 15, 21, 25, 27], ordered: false, display: "{3, 5, 9, 15, 21, 25, 27}" },
        traps: [
          {
            spec: { type: "list", values: [15], ordered: false },
            feedback: "{15} is A ∩ B. The symbol ∪ (union) means in A **or** B or both.",
          },
          {
            spec: { type: "list", values: [3, 5, 6, 9, 10, 12, 15, 18, 20, 21, 24, 25, 27], ordered: false },
            feedback: "Every member must come from ξ, and ξ only contains **odd** numbers. Even numbers like 6 and 10 aren't in ξ, so they can't be in A or B.",
          },
        ],
        solution: [
          "ξ = {1, 3, 5, 7, …, 29}.",
          "A = {3, 9, 15, 21, 27} (the odd multiples of 3 below 30).",
          "B = {5, 15, 25}.",
          "A ∪ B = {3, 5, 9, 15, 21, 25, 27} — 15 is listed once.",
        ],
        commonError: "Including even multiples, which are not in the universal set.",
        difficulty: "warmup",
        guideRef: "set-notation",
        hints: ["Every member of A and B must also be a member of ξ.", "List A and B, then combine them, writing 15 only once."],
        strategy: "List the sets first",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "sets-venn-p4-q02",
        question:
          "ξ = {odd numbers less than 30}\n\nC = {prime numbers}\n\nFind n(C′).",
        answer: { type: "number", value: 6 },
        traps: [
          {
            spec: { type: "number", value: 5 },
            feedback: "Did you count 1 as prime? 1 is not prime (it has only one factor), so 1 is in C′.",
          },
          {
            spec: { type: "number", value: 9 },
            feedback: "9 is n(C): the odd primes 3, 5, 7, 11, 13, 17, 19, 23, 29. C′ is everything in ξ that is **not** prime.",
          },
        ],
        solution: [
          "ξ = {1, 3, 5, …, 29} has 15 members.",
          "C = {3, 5, 7, 11, 13, 17, 19, 23, 29}, so n(C) = 9. (2 is prime but not odd, so it isn't in ξ.)",
          "n(C′) = 15 − 9 = 6. (C′ = {1, 9, 15, 21, 25, 27}.)",
        ],
        commonError: "Counting 1 as a prime number.",
        difficulty: "warmup",
        guideRef: "set-notation",
        hints: ["How many members does ξ have?", "Count the odd primes below 30, then subtract from n(ξ)."],
        strategy: "Count the complement",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "written",
        id: "sets-venn-p4-q03",
        question:
          "ξ = {odd numbers less than 30}\n\nA = {x : x is a multiple of 3}\n\nC = {prime numbers}\n\nIs it true that A ∩ C = ∅? Give a reason for your answer.",
        marks: 2,
        modelAnswer:
          "**No.** 3 is a multiple of 3 *and* 3 is a prime number, so 3 ∈ A and 3 ∈ C. Therefore A ∩ C = {3}, which is not the empty set.",
        markScheme: [
          { point: "States no / not true", keywords: ["no", "not true", "false", "isn't", "is not"] },
          { point: "Reason: 3 is in both sets (3 is prime and a multiple of 3)", keywords: ["3", "{3}", "both", "prime"] },
        ],
        commonError: "Saying 'yes' because multiples of 3 have 3 as a factor — but 3 itself is a multiple of 3 and is prime.",
        difficulty: "warmup",
        guideRef: "set-notation",
        hints: ["∅ means the empty set. Is there any number that is in both A and C?", "Is 3 a multiple of 3? Is 3 prime?"],
        strategy: "Find a counterexample",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "sets-venn-p4-q04",
        question:
          "The Venn diagram shows the prime factors of 150 and 360.\n\nUse the Venn diagram to find the lowest common multiple of 150 and 360.",
        diagram: P4_PRIME_150_360,
        answer: { type: "number", value: 1800 },
        traps: [
          {
            spec: { type: "number", value: 30 },
            feedback: "30 = 2 × 3 × 5 is the product of the overlap, which is the **HCF**. The LCM uses every number in the diagram.",
          },
          {
            spec: { type: "number", value: 54000 },
            feedback: "54000 = 150 × 360 is a common multiple, but not the lowest — the overlap 2, 3, 5 has been used twice.",
          },
        ],
        solution: [
          "LCM = product of every prime factor in the diagram, each once.",
          "LCM = 5 × (2 × 3 × 5) × (2 × 2 × 3) = 5 × 30 × 12 = 1800.",
          "Check: 1800 ÷ 150 = 12 ✓ and 1800 ÷ 360 = 5 ✓.",
        ],
        commonError: "Multiplying only the overlap (that gives the HCF).",
        difficulty: "warmup",
        guideRef: "venn-hcf-lcm",
        hints: ["The overlap gives the HCF. What gives the LCM?", "Multiply all the numbers in the diagram together."],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "sets-venn-p4-q05",
        question:
          "60 people at a food festival were asked whether they had tried durian and whether they had tried mango sticky rice.\n\n25 people had tried durian. 30 people had tried mango sticky rice. 12 people had tried neither.\n\nHow many people had tried both durian and mango sticky rice?",
        answer: { type: "number", value: 7 },
        traps: [
          {
            spec: { type: "number", value: 5 },
            feedback: "60 − 25 − 30 = 5 ignores the 12 people who had neither. Only 60 − 12 = 48 people had at least one.",
          },
          {
            spec: { type: "number", value: 48 },
            feedback: "48 is the number who had at least one of the two. 25 + 30 = 55 is 7 more than 48 — those 7 were counted twice.",
          },
        ],
        solution: [
          "At least one: 60 − 12 = 48.",
          "25 + 30 = 55, which counts the 'both' people twice.",
          "Both = 55 − 48 = 7.",
        ],
        solutions: [
          {
            label: "Algebra in the Venn diagram",
            steps: ["Let x have both: (25 − x) + x + (30 − x) + 12 = 60.", "67 − x = 60, so x = 7."],
          },
        ],
        commonError: "Forgetting the people outside both circles.",
        difficulty: "core",
        guideRef: "venn-diagrams",
        hints: [
          "Let x be the number who had both. What goes in each region?",
          "Durian only = 25 − x, mango sticky rice only = 30 − x.",
          "All four regions add up to 60.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "sets-venn-p4-q06",
        question:
          "The Venn diagram shows information about 48 students.\n\nH = {students who study History}, G = {students who study Geography}.\n\nA student is chosen at random. Find the probability that the student studies exactly one of these two subjects. Give your answer as a fraction in its simplest form.",
        diagram: P4_HIST_GEOG,
        answer: { type: "fraction", n: 11, d: 16, simplest: true },
        traps: [
          {
            spec: { type: "fraction", n: 7, d: 8 },
            feedback: "{{42/48}} is P(H ∪ G) — it includes the 9 who study both. 'Exactly one' means History only or Geography only.",
          },
          {
            spec: { type: "fraction", n: 33, d: 42 },
            feedback: "Divide by all 48 students, not just the 42 inside the circles — the 6 outside could also be chosen.",
          },
        ],
        solution: [
          "Exactly one subject: H only + G only = 15 + 18 = 33.",
          "Total: 15 + 9 + 18 + 6 = 48.",
          "Probability = {{33/48 = 11/16}}.",
        ],
        commonError: "Including the overlap when the question says 'exactly one'.",
        difficulty: "core",
        guideRef: "venn-probability",
        hints: [
          "Which regions contain students who study exactly one subject?",
          "Add H only and G only, then divide by the total number of students.",
        ],
        strategy: "Read the diagram region by region",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "sets-venn-p4-q07",
        question:
          "The Venn diagram shows information about 48 students.\n\nH = {students who study History}, G = {students who study Geography}.\n\nA student who studies Geography is chosen at random. Find the probability that this student also studies History. Give your answer as a fraction in its simplest form.",
        diagram: P4_HIST_GEOG,
        answer: { type: "fraction", n: 1, d: 3, simplest: true },
        traps: [
          {
            spec: { type: "fraction", n: 3, d: 16 },
            feedback: "{{9/48}} is P(H ∩ G) for a student chosen from all 48. Here the student is chosen from the Geography students only.",
          },
          {
            spec: { type: "fraction", n: 3, d: 8 },
            feedback: "{{9/24}} divides by the History total — that's P(G | H). The condition is 'studies Geography', so divide by n(G) = 27.",
          },
        ],
        solution: [
          "Given Geography: choose from circle G only, n(G) = 9 + 18 = 27.",
          "Of these, 9 also study History.",
          "P(H | G) = {{9/27 = 1/3}}.",
        ],
        commonError: "Dividing by the total 48 instead of the 27 Geography students.",
        difficulty: "core",
        guideRef: "venn-probability",
        hints: [
          "Who are you choosing from? Cover up everything outside circle G.",
          "How many of the students in G are also in H?",
        ],
        strategy: "Restrict the sample space",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "sets-venn-p4-q08",
        question:
          "The regions of the Venn diagram are numbered 1 to 8.\n\nWrite down the numbers of all the regions that make up A′ ∩ (B ∪ C).",
        diagram: P4_REGIONS,
        answer: { type: "list", values: [2, 3, 6], ordered: false, display: "regions 2, 3 and 6" },
        traps: [
          {
            spec: { type: "list", values: [2, 3, 6, 8], ordered: false },
            feedback: "Region 8 is in A′, but it is not in B ∪ C. A region has to satisfy **both** conditions for ∩.",
          },
          {
            spec: { type: "list", values: [2, 3, 4, 5, 6, 7], ordered: false },
            feedback: "That's B ∪ C. Now remove every region that lies inside A (regions 4 and 7 here) because of the A′.",
          },
        ],
        solution: [
          "B ∪ C = regions 2, 3, 4, 5, 6, 7 (inside B or C).",
          "A′ = regions 2, 3, 6, 8 (outside A).",
          "The intersection keeps regions in both lists: 2, 3, 6.",
        ],
        commonError: "Treating ∩ as 'combine' and including regions that satisfy only one condition.",
        difficulty: "core",
        guideRef: "venn-diagrams",
        hints: [
          "Write down the regions in B ∪ C first.",
          "Now list the regions in A′ (outside circle A).",
          "∩ keeps only the regions that appear in both lists.",
        ],
        strategy: "Shade, then count",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "written",
        id: "sets-venn-p4-q09",
        question:
          "There are 63 students in a CCA. The Venn diagram shows information about the numbers of students who play in band A, band B and band C. x is a whole number.\n\nShow that x = 6.",
        diagram: P4_THREE_ALG,
        marks: 3,
        modelAnswer:
          "All eight regions add up to 63:\n\n    12 + 9 + 3x + 5 + x + 4 + 2 + (x + 1) = 63\n\nCollecting terms: 5x + 33 = 63.\n\nSo 5x = 30 and **x = 6**.",
        markScheme: [
          { point: "Forms an equation with all eight regions summing to 63", keywords: ["= 63", "=63", "sum", "add"] },
          { point: "Simplifies to 5x + 33 = 63", keywords: ["5x + 33", "5x+33", "5x"] },
          { point: "Solves to x = 6 (5x = 30)", keywords: ["5x = 30", "5x=30", "30", "x = 6", "x=6"] },
        ],
        commonError: "Forgetting the x + 1 outside the circles, which gives 4x + 32 = 63 and a non-integer x.",
        difficulty: "core",
        guideRef: "venn-diagrams",
        hints: [
          "What must all the regions, including the one outside the circles, add up to?",
          "Collect the x terms and the number terms separately.",
          "You should get 5x + 33 = 63.",
        ],
        strategy: "Form an equation",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "sets-venn-p4-q10",
        question:
          "There are 63 students in a CCA. The Venn diagram shows information about the numbers of students who play in band A, band B and band C. You may use x = 6.\n\nA student who plays in band A is chosen at random. Find the probability that this student also plays in band C. Give your answer as a fraction.",
        diagram: P4_THREE_ALG,
        answer: { type: "fraction", n: 8, d: 25 },
        traps: [
          {
            spec: { type: "fraction", n: 8, d: 63 },
            feedback: "{{8/63}} is P(A ∩ C) for a student chosen from the whole CCA. The student is chosen from band A, so divide by n(A) = 25.",
          },
          {
            spec: { type: "fraction", n: 6, d: 25 },
            feedback: "You've used only the 'A and C only' region (x = 6). The 2 students in all three bands are also in both A and C.",
          },
          {
            spec: { type: "fraction", n: 4, d: 15 },
            feedback: "{{8/30}} divides by n(C) — that's P(A | C). The condition is 'plays in band A'.",
          },
        ],
        solution: [
          "With x = 6: n(A) = 12 + 5 + x + 2 = 25.",
          "Students in A and C: x + 2 = 6 + 2 = 8 (the A-and-C-only region plus the centre).",
          "P(C | A) = {{8/25}}.",
        ],
        commonError: "Missing the centre region when counting A ∩ C.",
        difficulty: "core",
        guideRef: "venn-probability",
        hints: [
          "How many students are inside circle A altogether?",
          "Which regions are inside both A and C? There are two of them.",
          "Divide the A ∩ C count by n(A).",
        ],
        strategy: "Restrict the sample space",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "sets-venn-p4-q11",
        question: "n(ξ) = 40, n(A) = 22, n(B) = 15 and n(A ∩ B) = 6.\n\nFind n(A ∪ B′).",
        answer: { type: "number", value: 31 },
        traps: [
          {
            spec: { type: "number", value: 9 },
            feedback: "9 is n(A′ ∩ B), the B-only region. A ∪ B′ is everything *except* that region.",
          },
          {
            spec: { type: "number", value: 47 },
            feedback: "n(A) + n(B′) = 22 + 25 = 47 counts the region in A but not B twice — and 47 is more than n(ξ) = 40, so it can't be right.",
          },
        ],
        solution: [
          "Draw the Venn diagram: A ∩ B = 6, A only = 22 − 6 = 16, B only = 15 − 6 = 9, outside = 40 − 31 = 9.",
          "A ∪ B′ = everything in A or outside B: A only + A ∩ B + outside = 16 + 6 + 9 = 31.",
          "Equivalently, it's everything except B only: 40 − 9 = 31.",
        ],
        commonError: "Adding n(A) + n(B′) without removing the double-counted region.",
        difficulty: "core",
        guideRef: "set-notation",
        hints: [
          "Draw the Venn diagram and fill it in from the centre.",
          "Shade A, then shade B′. Which single region is left unshaded?",
          "Subtract that region from 40.",
        ],
        strategy: "Shade, then count",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "short",
        id: "sets-venn-p4-q12",
        question:
          "Three light displays at Gardens by the Bay flash at regular intervals.\n\n- Display P flashes every 24 seconds.\n- Display Q flashes every 36 seconds.\n- Display R flashes every 60 seconds.\n\nAll three flash together at 8 pm. After how many **minutes** will they next all flash together?",
        answer: { type: "number", value: 6, display: "6 minutes (360 seconds)" },
        traps: [
          {
            spec: { type: "number", value: 360 },
            feedback: "360 is right in **seconds**. The question asks for minutes: 360 ÷ 60 = 6.",
          },
          {
            spec: { type: "number", value: 12 },
            feedback: "12 is the HCF of 24, 36 and 60. You need a time that is a multiple of all three intervals — the LCM.",
          },
        ],
        solution: [
          "24 = 2³ × 3, 36 = 2² × 3², 60 = 2² × 3 × 5.",
          "In a three-circle Venn diagram the centre holds 2, 2, 3 (common to all three).",
          "LCM = take the highest power of each prime: 2³ × 3² × 5 = 360 seconds.",
          "360 seconds = 6 minutes.",
        ],
        commonError: "Using the HCF ('the biggest number that goes into all of them') for a 'next time together' problem.",
        difficulty: "core",
        guideRef: "venn-hcf-lcm",
        hints: [
          "Do you need a number that divides into 24, 36 and 60, or one they all divide into?",
          "Write each as a product of primes and put them in a three-circle Venn diagram.",
          "LCM = every factor in the diagram. Then convert seconds to minutes.",
        ],
        strategy: "Draw a diagram",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "written",
        id: "sets-venn-p4-q13",
        question:
          "The Venn diagram shows the number of members in each region of the sets A and B. x, y, z and w are positive integers.\n\nA member of ξ is chosen at random.\n\nProve that if P(A | B) = P(B | A), then n(A) = n(B).",
        diagram: P4_XYZ,
        marks: 3,
        modelAnswer:
          "From the diagram, n(A ∩ B) = y, n(A) = x + y and n(B) = y + z.\n\nP(A | B) = {{y/(y+z)}} and P(B | A) = {{y/(x+y)}}.\n\nIf these are equal: {{y/(y+z) = y/(x+y)}}. Since y > 0 we can divide both sides by y and take reciprocals: y + z = x + y, so z = x.\n\nThen n(A) = x + y = z + y = n(B). ∎",
        markScheme: [
          { point: "Writes P(A | B) = y/(y + z)", keywords: ["y/(y+z)", "y/(y + z)", "y + z", "y+z"] },
          { point: "Writes P(B | A) = y/(x + y)", keywords: ["y/(x+y)", "y/(x + y)", "x + y", "x+y"] },
          { point: "Equates and deduces x = z (using y ≠ 0), so n(A) = n(B)", keywords: ["x = z", "x=z", "z = x", "z=x", "y ≠ 0", "n(a) = n(b)"] },
        ],
        commonError: "Writing P(A | B) = y/(x + y + z + w) — that is P(A ∩ B), not a conditional probability.",
        difficulty: "challenge",
        guideRef: "venn-probability",
        hints: [
          "Given B, which regions are you choosing from? Which of those are in A?",
          "P(A | B) = n(A ∩ B) ÷ n(B). Write it in terms of x, y, z.",
          "Set the two fractions equal. The numerators match — so what about the denominators?",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "sets-venn-p4-q14",
        question:
          "There are 120 students in Year 11. Each student was asked if they study Physics (P), Chemistry (C) or Biology (B).\n\n- 50 study Physics, 60 study Chemistry and 45 study Biology.\n- 20 study Physics and Chemistry.\n- 15 study Physics and Biology.\n- 18 study Chemistry and Biology.\n- 8 study all three.\n\nA student who studies exactly one of the three sciences is chosen at random. Work out the probability that this student studies Physics. Give your answer as a fraction.",
        answer: { type: "fraction", n: 23, d: 73 },
        traps: [
          {
            spec: { type: "fraction", n: 5, d: 12 },
            feedback: "{{50/120}} is P(Physics) for any student. The student is chosen from those who study **exactly one** science, so you need the 'only' regions.",
          },
          {
            spec: { type: "fraction", n: 23, d: 110 },
            feedback: "110 is the number who study *at least* one science. The condition is 'exactly one', so the denominator is Physics only + Chemistry only + Biology only = 73.",
          },
          {
            spec: { type: "fraction", n: 50, d: 73 },
            feedback: "Given the student studies exactly one science, they must be in Physics **only** — 23 students, not all 50 Physics students.",
          },
        ],
        solution: [
          "Centre: 8.",
          "Two only: P and C only = 20 − 8 = 12; P and B only = 15 − 8 = 7; C and B only = 18 − 8 = 10.",
          "P only = 50 − 12 − 7 − 8 = 23; C only = 60 − 12 − 10 − 8 = 30; B only = 45 − 7 − 10 − 8 = 20.",
          "Exactly one science: 23 + 30 + 20 = 73.",
          "P(Physics | exactly one) = {{23/73}}.",
        ],
        commonError: "Using 20, 15 and 18 as the 'two only' regions without subtracting the 8 in the centre.",
        difficulty: "challenge",
        guideRef: "venn-probability",
        hints: [
          "Draw a three-circle Venn diagram and fill in the centre first.",
          "Each 'two subjects' number includes the 8 in the centre. Subtract it.",
          "Now find each 'only' region. How many students study exactly one science?",
          "Of those, how many study Physics?",
        ],
        strategy: "Fill from the centre outwards",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "sets-venn-p4-q15",
        question:
          "{{M = 2^a * 3^b * 5}} and {{N = 2^c * 3 * 7}}, where a, b and c are positive integers and a > c.\n\nThe highest common factor of M and N is 12.\n\nThe lowest common multiple of M and N is 15120.\n\nFind the values of a, b and c. Give a first, then b, then c.",
        answer: { type: "list", values: [4, 3, 2], ordered: true, display: "a = 4, b = 3, c = 2" },
        traps: [
          {
            spec: { type: "list", values: [2, 3, 4], ordered: true },
            feedback: "These values make the HCF and LCM work, but the question says a > c, so a = 4 and c = 2.",
          },
          {
            spec: { type: "list", values: [4, 1, 2], ordered: true },
            feedback: "The HCF has only 3¹, but the LCM has 3³ = 27. N only has 3¹, so the 3³ must come from M: b = 3.",
          },
        ],
        solution: [
          "12 = 2² × 3 and 15120 = 2⁴ × 3³ × 5 × 7.",
          "HCF takes the *lower* power of each shared prime; LCM takes the *higher*.",
          "Powers of 2: the lower of a and c is 2, the higher is 4. Since a > c: a = 4, c = 2.",
          "Powers of 3: N has 3¹, and the LCM has 3³, so M must have 3³: b = 3. (The HCF's 3¹ is consistent.)",
          "Check: M = 2⁴ × 3³ × 5 = 2160, N = 2² × 3 × 7 = 84; HCF = 2² × 3 = 12 ✓, LCM = 2⁴ × 3³ × 5 × 7 = 15120 ✓.",
        ],
        solutions: [
          {
            label: "Venn diagram of prime factors",
            steps: [
              "The overlap is the HCF: 2, 2, 3.",
              "{{N = 2^c * 3 * 7}} and its only 3 is already in the overlap, so N only = 7 and any extra 2s.",
              "M only must supply the 5, and the extra 2s and 3s needed for the LCM 2⁴ × 3³ × 5 × 7.",
              "LCM ÷ HCF = 15120 ÷ 12 = 1260 = 2² × 3² × 5 × 7 — the 'only' parts. The 3² and 5 belong to M; the 7 belongs to N.",
              "The 2² must sit in M only (a > c), so M = 2⁴ × 3³ × 5 and N = 2² × 3 × 7.",
            ],
          },
        ],
        commonError: "Swapping a and c, or forgetting that the highest power of 3 in the LCM must come from M.",
        difficulty: "challenge",
        guideRef: "venn-hcf-lcm",
        hints: [
          "Write 12 and 15120 as products of prime factors.",
          "For each prime, the HCF uses the smaller power and the LCM uses the bigger power.",
          "Powers of 2: one of a, c is 2 and the other is 4. Which is which?",
          "Powers of 3: N has only 3¹. Where does the 3³ in the LCM come from?",
        ],
        strategy: "Work backwards",
      },
    ],
  },
];
