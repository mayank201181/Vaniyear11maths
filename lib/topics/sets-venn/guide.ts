import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "sets-venn",
  title: "Sets & Venn Diagrams",
  strand: "Statistics & Probability",
  icon: "🔗",
  summary: "Sort things into overlapping groups — then count, factorise and find probabilities from the picture.",
  intro:
    "Sets are the language of 'and', 'or' and 'not', and a Venn diagram turns that language into a picture you can count from. On 4MA1 Higher papers this topic is worth steady marks: list the elements of A ∩ B′, complete a two- or three-set Venn diagram from a worded survey (often with an algebraic unknown), find an HCF and LCM from prime factors, and — the grade 7–8 twist — a conditional probability like 'given that the student plays tennis'. One rule runs through all of it: **fill from the centre outwards, and only count each thing once.**",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "set-notation",
      heading: "Set notation",
      discovery: {
        problem:
          "Take the numbers 1 to 12. Let A be the even numbers and B the multiples of 3.\n\nA has 6 members and B has 4. How many numbers are in A **or** B (or both)? Your first instinct might be 6 + 4 = 10 — list them and check. Which numbers caused the trouble, and how could you fix the 6 + 4 calculation without listing?",
        idea:
          "Listing gives {2, 3, 4, 6, 8, 9, 10, 12}: only **8** numbers. The numbers 6 and 12 are even **and** multiples of 3, so 6 + 4 counted them twice. Take the overlap off once: 6 + 4 − 2 = 8.\n\nIn set notation: n(A ∪ B) = n(A) + n(B) − n(A ∩ B). The whole topic is about keeping track of that overlap.",
      },
      body:
        "A **set** is a collection of distinct objects called **elements** (or members), written in curly brackets: {2, 4, 6}. Order doesn't matter and nothing is listed twice — {6, 2, 4} is the same set.\n\nThe examples in this table use ξ = {1, 2, 3, …, 12}, A = {even numbers} and B = {multiples of 3}.\n\n| Symbol | Meaning | Example |\n|---|---|---|\n| ξ (or ℰ) | the **universal set**: everything under consideration | {1, 2, …, 12} |\n| ∈ | 'is an element of' | 6 ∈ A |\n| ∉ | 'is not an element of' | 5 ∉ A |\n| ∅ or { } | the **empty set** | {odd numbers in A} = ∅ |\n| A′ | the **complement** of A: in ξ but **not** in A | A′ = {1, 3, 5, 7, 9, 11} |\n| A ∩ B | **intersection**: in A **and** in B | {6, 12} |\n| A ∪ B | **union**: in A **or** B (or both) | {2, 3, 4, 6, 8, 9, 10, 12} |\n| n(A) | the **number of elements** in A | n(A) = 6 |\n| C ⊂ A | C is a **subset** of A: every element of C is in A | {4, 8} ⊂ A |\n\nEdexcel papers print the universal set as ℰ; many textbooks use ξ. They mean exactly the same thing.\n\n**Set-builder notation.** {x : x is a prime number, x < 20} reads 'the set of x **such that** x is prime and x is less than 20' = {2, 3, 5, 7, 11, 13, 17, 19}. The colon means 'such that'; each comma after it means 'and'. With inequalities, check both ends: {x : x is an integer, −2 ≤ x < 3} = {−2, −1, 0, 1, 2} — −2 is in, 3 is out.\n\n**Combining operations.** Work from the brackets outwards, just like BIDMAS. With the sets above:\n\n- (A ∪ B)′ — outside **both** sets: {1, 5, 7, 11}.\n- A ∩ B′ — in A but not in B ('A only'): {2, 4, 8, 10}.\n- A′ ∩ B — in B but not in A ('B only'): {3, 9}.\n- A′ ∪ B — not in A, or in B: everything except 'A only' = {1, 3, 5, 6, 7, 9, 11, 12}.\n\n**Words ↔ symbols.** ∩ is **and**, ∪ is **or**, ′ is **not**. 'Students who play hockey but don't swim' is H ∩ S′. The statement H ∩ S = ∅ says *nobody* does both. S ⊂ H says *every* swimmer also plays hockey — on a Venn diagram, circle S sits entirely inside circle H.\n\n**Counting a union.** Adding n(A) and n(B) counts the overlap twice, so take it off once:\n\n    n(A ∪ B) = n(A) + n(B) − n(A ∩ B) = 6 + 4 − 2 = 8\n\nAnd since every element of ξ is either in A or not: n(A′) = n(ξ) − n(A) = 12 − 6 = 6.",
      diagram: `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram with universal set the numbers 1 to 12. Circle A, even numbers, contains 2, 4, 8 and 10 on its own and 6 and 12 in the overlap. Circle B, multiples of 3, contains 3 and 9 on its own. Outside both circles are 1, 5, 7 and 11."><rect x="0" y="0" width="420" height="260" fill="#ffffff"/><rect x="20" y="30" width="380" height="200" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><text x="22" y="22" font-family="sans-serif" font-size="14" fill="#1f2937">ξ = {1, 2, 3, …, 12}</text><circle cx="160" cy="130" r="80" fill="#fde68a"/><circle cx="260" cy="130" r="80" fill="#bae6fd"/><path d="M210,67.55 A80,80 0 0,1 210,192.45 A80,80 0 0,1 210,67.55 Z" fill="#bbf7d0"/><circle cx="160" cy="130" r="80" fill="none" stroke="#1f2937" stroke-width="2"/><circle cx="260" cy="130" r="80" fill="none" stroke="#1f2937" stroke-width="2"/><g font-family="sans-serif" font-size="14" fill="#1f2937" font-weight="bold"><text x="88" y="62">A</text><text x="324" y="62">B</text></g><g font-family="sans-serif" font-size="11" fill="#334155"><text x="60" y="48">even</text><text x="396" y="48" text-anchor="end">multiples of 3</text></g><g font-family="sans-serif" font-size="15" fill="#1f2937" text-anchor="middle"><text x="118" y="115">2</text><text x="150" y="115">4</text><text x="118" y="155">8</text><text x="150" y="155">10</text><text x="210" y="115">6</text><text x="210" y="155">12</text><text x="285" y="135">3</text><text x="315" y="135">9</text><text x="50" y="70">1</text><text x="370" y="200">5</text><text x="50" y="210">7</text><text x="370" y="110">11</text></g><text x="210" y="252" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">A ∩ B = {6, 12}     n(A ∪ B) = 6 + 4 − 2 = 8</text></svg>`,
      diagramCaption:
        "Every number from 1 to 12 sits in exactly one region. The overlap (green) is A ∩ B; the numbers outside both circles form (A ∪ B)′.",
      workedExamples: [
        {
          title: "Listing elements and counting a union",
          problem:
            "ξ = {integers from 1 to 15}, P = {prime numbers}, O = {odd numbers}.\n\n(a) List the elements of P ∩ O.\n(b) List the elements of P′ ∩ O.\n(c) Find n(P ∪ O).",
          steps: [
            "List each set first. P = {2, 3, 5, 7, 11, 13}, so n(P) = 6. O = {1, 3, 5, 7, 9, 11, 13, 15}, so n(O) = 8.",
            "(a) P ∩ O means prime **and** odd: {3, 5, 7, 11, 13} — every prime except 2.",
            "(b) P′ ∩ O means **not** prime **and** odd: {1, 9, 15}. Remember 1 is not a prime number.",
            "(c) n(P ∪ O) = n(P) + n(O) − n(P ∩ O) = 6 + 8 − 5 = 9.",
            "Check by listing: P ∪ O = {1, 2, 3, 5, 7, 9, 11, 13, 15} — 9 elements ✓.",
          ],
          answer: "(a) {3, 5, 7, 11, 13}  (b) {1, 9, 15}  (c) 9",
          yourTurn: {
            question: "Your turn: with the same ξ, P and O, find n((P ∪ O)′).",
            answer: { type: "number", value: 6 },
            solution:
              "(P ∪ O)′ is everything in ξ outside P ∪ O: n(ξ) − n(P ∪ O) = 15 − 9 = **6**. The elements are {4, 6, 8, 10, 12, 14} — the even numbers except 2.",
          },
        },
        {
          title: "Set-builder notation and subsets",
          problem:
            "ξ = {x : x is an integer, 1 ≤ x ≤ 20}\nA = {x : x is a factor of 18}\nB = {x : x is a factor of 12}\nC = {x : x is a multiple of 6}\n\n(a) List the elements of A ∩ B.\n(b) Is C ⊂ A? Give a reason.",
          steps: [
            "A = {1, 2, 3, 6, 9, 18} and B = {1, 2, 3, 4, 6, 12}.",
            "(a) A ∩ B = {1, 2, 3, 6}: the **common factors** of 18 and 12. Notice these are exactly the factors of 6, the HCF of 18 and 12 — a link you'll use in the HCF section.",
            "(b) C = {6, 12, 18} (only up to 20, because C must sit inside ξ).",
            "12 ∈ C but 12 ∉ A (12 is not a factor of 18). So C is **not** a subset of A, written C ⊄ A.",
            "One counter-example is enough to show a set is not a subset.",
          ],
          answer: "(a) {1, 2, 3, 6}  (b) No: 12 ∈ C but 12 ∉ A.",
          yourTurn: {
            question: "Your turn: D = {x : x is an integer, −3 < x ≤ 4}. Find n(D).",
            answer: { type: "number", value: 7 },
            solution:
              "D = {−2, −1, 0, 1, 2, 3, 4}. −3 is **not** included (strict <) but 4 is (≤), and don't forget 0. So n(D) = **7**.",
          },
        },
      ],
      keyPoints: [
        "∩ = **and** (intersection), ∪ = **or** (union, includes both), ′ = **not** (complement).",
        "A′ contains everything in ξ that is not in A — including the elements outside every circle.",
        "n(A) counts elements; it is a number, not a set.",
        "C ⊂ A means every element of C is also in A; one counter-example shows it is not a subset.",
        "n(A ∪ B) = n(A) + n(B) − n(A ∩ B): subtract the overlap once because it was counted twice.",
        "In set-builder notation ':' means 'such that'; check whether each end of an inequality is included.",
      ],
      whyItWorks:
        "A Venn diagram splits ξ into regions that **don't overlap** and together cover everything: every element lands in exactly one region. That is why counting works — you can add region counts without double counting.\n\nWhen you add n(A) + n(B), each element of 'A only' and 'B only' is counted once, but each element of A ∩ B is counted twice (once in A, once in B). Subtracting n(A ∩ B) once corrects it.\n\nThe same picture explains a less obvious fact: **(A ∪ B)′ = A′ ∩ B′**. 'Not in (A or B)' is the region outside both circles; 'not in A and not in B' is also the region outside both circles. Shade each and you get the identical region. Likewise (A ∩ B)′ = A′ ∪ B′ — 'not both' means 'missing at least one'. (These are De Morgan's laws.)",
      strategies: ["Draw a diagram", "Translate words into symbols", "Check by listing", "Look for a counter-example"],
      thinkDeeper:
        "List every subset of {a, b, c}, including ∅ and the set itself. How many are there? Now predict the number of subsets of a set with 4 elements, then 10 elements. Explain *why* your formula works — what choice do you make for each element?",
    },

    // ------------------------------------------------------------------ 2
    {
      id: "venn-diagrams",
      heading: "Venn diagrams with two and three sets",
      discovery: {
        problem:
          "In a class of 30 students, 18 play badminton, 15 swim and 4 do neither.\n\nHow many students both play badminton **and** swim? Try it before reading on — and notice that 18 + 15 is already bigger than the class.",
        idea:
          "Only 30 − 4 = **26** students are inside the circles. But 18 + 15 = 33 counts the 'both' students twice, so the overlap is 33 − 26 = **7**.\n\nNow fill the diagram from the **centre outwards**: 7 in the overlap, 18 − 7 = 11 badminton only, 15 − 7 = 8 swim only, 4 outside. Check: 11 + 7 + 8 + 4 = 30 ✓. The totals you are given (18, 15) always **include** the overlap — that's why the overlap has to go in first.",
      },
      body:
        "**Two sets — fill from the centre outwards.** Survey totals like '18 play badminton' include the people who also do the other thing. So:\n\n1. Put the **intersection** in first.\n2. Subtract it from each set's total to get the 'only' regions.\n3. Subtract everything inside the circles from n(ξ) to get the region **outside**.\n4. Check that the four regions add to n(ξ).\n\n**Unknown overlap? Introduce a variable.** If the intersection isn't given, call it x. Write the 'only' regions in terms of x (e.g. 28 − x), add **all** the regions, set the total equal to n(ξ) and solve. Often the question links two regions ('twice as many…', 'three times as many…'), which tells you how to write a second region in terms of x.\n\n**Three sets** have eight regions: the centre, three 'exactly two' regions, three 'only one' regions and the outside. Same rule, centre outwards:\n\n1. **Centre**: in all three.\n2. **Each pair**: the 'A and B' total minus the centre gives 'A and B but not C'.\n3. **Each single**: the set total minus the three numbers already inside that circle.\n4. **Outside**: n(ξ) minus all seven inside numbers.\n\n> Read the wording carefully. '8 study French and Spanish' normally **includes** the students who also study Mandarin. 'Exactly two', 'only French and Spanish' or 'French and Spanish but not Mandarin' means the pair region on its own.\n\n**Shading regions described in set notation.** Translate symbol by symbol: ∩ keeps only where both shadings overlap, ∪ keeps everything in either, and ′ flips to everything else in the rectangle (including outside all circles).\n\n| Notation | In words | Region (two sets) |\n|---|---|---|\n| A ∩ B | A and B | the overlap (lens) |\n| A ∪ B | A or B or both | both whole circles |\n| A ∩ B′ | A but not B | A only (the crescent) |\n| A′ ∩ B | B but not A | B only |\n| (A ∪ B)′ | neither A nor B | outside both circles |\n| (A ∩ B)′ | not both | everything except the lens |\n| A ∪ B′ | A, or not B | everything except 'B only' |\n\nFor three sets, build up in stages. **A ∩ (B ∪ C)**: shade B ∪ C lightly, then keep only the part that is also inside A. **(A ∩ B) ∪ C**: shade the A–B lens, then add the whole of C. **A ∩ B ∩ C′**: inside A, inside B, outside C — a single region.\n\n**Describing a shaded region.** Reverse the process: for the shaded region, say which circles it is **inside** and which it is **outside**, then join them with ∩. The region inside B but outside A and C is A′ ∩ B ∩ C′. Several answers can be correct — (A ∪ B)′ and A′ ∩ B′ are the same region.",
      diagram: `<svg viewBox="0 0 480 300" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: four small two-set Venn diagrams with shading for A intersect B (the overlap), A union B (both circles), A intersect B complement (A only) and the complement of A union B (outside both circles). Right: a three-set Venn diagram of 50 students studying French, Spanish and Mandarin, with 3 in the centre, 5 in French and Spanish only, 4 in French and Mandarin only, 6 in Spanish and Mandarin only, 10 French only, 8 Spanish only, 7 Mandarin only and 7 outside."><rect x="0" y="0" width="480" height="300" fill="#ffffff"/><g font-family="sans-serif" font-size="12" fill="#1f2937" font-weight="bold"><text x="10" y="16">Shading regions</text><text x="250" y="16">Three sets: centre outwards</text></g><rect x="10" y="24" width="104" height="72" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><path d="M62,40.95 A22,22 0 0,1 62,79.05 A22,22 0 0,1 62,40.95 Z" fill="#c7d2fe"/><circle cx="51" cy="60" r="22" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="73" cy="60" r="22" fill="none" stroke="#1f2937" stroke-width="1.5"/><rect x="124" y="24" width="104" height="72" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="165" cy="60" r="22" fill="#c7d2fe"/><circle cx="187" cy="60" r="22" fill="#c7d2fe"/><circle cx="165" cy="60" r="22" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="187" cy="60" r="22" fill="none" stroke="#1f2937" stroke-width="1.5"/><rect x="10" y="138" width="104" height="72" fill="#ffffff" stroke="#334155" stroke-width="1.5"/><circle cx="51" cy="174" r="22" fill="#c7d2fe"/><path d="M62,154.95 A22,22 0 0,1 62,193.05 A22,22 0 0,1 62,154.95 Z" fill="#ffffff"/><circle cx="51" cy="174" r="22" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="73" cy="174" r="22" fill="none" stroke="#1f2937" stroke-width="1.5"/><rect x="124" y="138" width="104" height="72" fill="#c7d2fe" stroke="#334155" stroke-width="1.5"/><circle cx="165" cy="174" r="22" fill="#ffffff"/><circle cx="187" cy="174" r="22" fill="#ffffff"/><circle cx="165" cy="174" r="22" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="187" cy="174" r="22" fill="none" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="10" fill="#1f2937"><text x="16" y="38">A</text><text x="102" y="38">B</text><text x="130" y="38">A</text><text x="216" y="38">B</text><text x="16" y="152">A</text><text x="102" y="152">B</text><text x="130" y="152">A</text><text x="216" y="152">B</text></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="62" y="112">A ∩ B</text><text x="176" y="112">A ∪ B</text><text x="62" y="226">A ∩ B′</text><text x="176" y="226">(A ∪ B)′</text></g><g font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle"><text x="62" y="126">both</text><text x="176" y="126">either or both</text><text x="62" y="240">A only</text><text x="176" y="240">neither</text></g><rect x="250" y="24" width="222" height="236" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><circle cx="330" cy="120" r="56" fill="#fde68a" fill-opacity="0.55" stroke="#1f2937" stroke-width="1.5"/><circle cx="392" cy="120" r="56" fill="#bae6fd" fill-opacity="0.55" stroke="#1f2937" stroke-width="1.5"/><circle cx="361" cy="172" r="56" fill="#bbf7d0" fill-opacity="0.55" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="13" fill="#1f2937" font-weight="bold"><text x="258" y="42">ξ = 50</text><text x="276" y="72">F</text><text x="438" y="72">S</text><text x="300" y="236">M</text></g><g font-family="sans-serif" font-size="14" fill="#1f2937" text-anchor="middle"><text x="361" y="142" font-weight="bold" fill="#b91c1c">3</text><text x="361" y="104">5</text><text x="321" y="162">4</text><text x="401" y="162">6</text><text x="298" y="110">10</text><text x="424" y="110">8</text><text x="361" y="214">7</text><text x="452" y="250">7</text></g><g font-family="sans-serif" font-size="11" fill="#334155"><text x="10" y="278">Order: 1) centre 3 → 2) pairs 8 − 3 = 5, 7 − 3 = 4, 9 − 3 = 6 →</text><text x="10" y="294">3) singles, e.g. F only = 22 − 5 − 3 − 4 = 10 → 4) outside = 50 − 43 = 7</text></g></svg>`,
      diagramCaption:
        "Left: the four regions you are most often asked to shade. Right: the completed language survey from the second worked example — the centre (red) goes in first, then each pair, then each 'only' region, then the outside.",
      workedExamples: [
        {
          title: "An unknown region — introduce a variable",
          problem:
            "There are 50 students in Year 11. 28 study History (H) and 30 study Geography (G). The number who study both is **three times** the number who study neither.\n\nWork out the number of students who study neither subject.",
          steps: [
            "Let the number who study neither be x. Then the number who study both is 3x.",
            "Centre outwards: H only = 28 − 3x and G only = 30 − 3x.",
            "All four regions add to 50:\n\n    (28 − 3x) + 3x + (30 − 3x) + x = 50",
            "Simplify: 58 − 2x = 50, so 2x = 8 and x = 4.",
            "Check: neither 4, both 12, H only 16, G only 18. 4 + 12 + 16 + 18 = 50 ✓, and 16 + 12 = 28 History ✓.",
          ],
          answer: "4 students study neither subject.",
          yourTurn: {
            question:
              "Your turn: 60 people at a hawker centre were asked about two fruits. 35 like durian, 32 like mango and 5 like neither. How many people like **only** mango?",
            answer: { type: "number", value: 20 },
            solution:
              "Let x like both. (35 − x) + x + (32 − x) + 5 = 60 gives 72 − x = 60, so x = 12. Only mango = 32 − 12 = **20**. Check: 23 + 12 + 20 + 5 = 60 ✓.",
          },
        },
        {
          title: "Completing a three-set Venn diagram",
          problem:
            "50 students were asked which of French (F), Spanish (S) and Mandarin (M) they study.\n\n- 3 study all three languages.\n- 8 study French and Spanish; 7 study French and Mandarin; 9 study Spanish and Mandarin.\n- 22 study French, 22 study Spanish and 20 study Mandarin.\n\n(a) Complete a Venn diagram. (b) How many study exactly one language? (c) Find n(F ∩ M′).",
          steps: [
            "Centre: 3.",
            "Pairs (subtract the centre): F and S only = 8 − 3 = 5; F and M only = 7 − 3 = 4; S and M only = 9 − 3 = 6.",
            "Singles (subtract everything already in that circle): F only = 22 − 5 − 3 − 4 = 10; S only = 22 − 5 − 3 − 6 = 8; M only = 20 − 4 − 3 − 6 = 7.",
            "Outside: inside total = 3 + 5 + 4 + 6 + 10 + 8 + 7 = 43, so neither = 50 − 43 = 7.",
            "(b) Exactly one language: 10 + 8 + 7 = **25**.",
            "(c) F ∩ M′ means French but **not** Mandarin: the F only region and the F-and-S-only region, 10 + 5 = **15**.",
          ],
          answer: "(b) 25  (c) 15",
          yourTurn: {
            question: "Your turn: using the same diagram, how many students study **at least two** languages?",
            answer: { type: "number", value: 18 },
            solution:
              "At least two = the three pair regions plus the centre: 5 + 4 + 6 + 3 = **18**. Check: 25 (exactly one) + 18 (at least two) + 7 (none) = 50 ✓.",
          },
        },
      ],
      keyPoints: [
        "Fill from the centre outwards: intersection first, then the 'only' regions, then the outside.",
        "Given totals (n(A) = 22) include the overlaps — subtract before you write a number in an 'only' region.",
        "Always find the region outside the circles and check that all regions add to n(ξ).",
        "Unknown region? Call it x, write every region in terms of x, add them and set equal to the total.",
        "Shading: ∩ = overlap of the two shadings, ∪ = everything in either, ′ = everything else in the rectangle.",
        "To describe a region, say which sets it is inside and outside, then join with ∩ (e.g. A′ ∩ B ∩ C′).",
      ],
      whyItWorks:
        "Each given total is a **sum of several regions**. In a three-set diagram, n(F) = (F only) + (F and S only) + (F and M only) + (centre). The centre appears in every total, so it's the one number you can place without knowing any other. Once it's in, each pair total has only one unknown left; once the pairs are in, each single total has only one unknown left. You are peeling the diagram like an onion — every step has exactly one unknown.\n\nThis also explains the three-set counting formula:\n\n    n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)\n\nAdding the three totals counts the centre 3 times; subtracting the three pair totals removes it 3 times; so it must be added back once. Check with the survey: 22 + 22 + 20 − 8 − 7 − 9 + 3 = 43 ✓.",
      strategies: ["Work from the centre outwards", "Introduce a variable", "Draw a diagram", "Check by adding all regions"],
      thinkDeeper:
        "In a class of 30, 20 students do art and 17 do music. What are the **largest** and **smallest** possible numbers of students who do both? Draw the Venn diagram for each extreme. What extra fact would pin the answer down to a single value?",
    },

    // ------------------------------------------------------------------ 3
    {
      id: "venn-hcf-lcm",
      heading: "Venn diagrams for HCF and LCM",
      discovery: {
        problem:
          "Write 84 and 90 as products of prime numbers. Now draw two overlapping circles, one for 84 and one for 90, and place the prime factors so that any prime they **share** goes in the overlap (one copy for each time it is shared).\n\nMultiply the numbers in the overlap. Then multiply **every** number in the diagram. What have you found?",
        idea:
          "84 = 2 × 2 × 3 × 7 and 90 = 2 × 3 × 3 × 5. They share one 2 and one 3, so the overlap holds 2 and 3; 84's circle also holds 2 and 7; 90's circle also holds 3 and 5.\n\nOverlap: 2 × 3 = **6**, the **HCF** — the biggest number made only of shared primes. Everything: 2 × 7 × 2 × 3 × 3 × 5 = **1260**, the **LCM** — the smallest number that contains all of 84's primes and all of 90's primes. And a bonus: 6 × 1260 = 7560 = 84 × 90.",
      },
      body:
        "Every whole number greater than 1 has exactly one prime factorisation, so the HCF and LCM can be read straight from the primes.\n\n**Method (two numbers).**\n\n1. Write each number as a product of primes (factor tree or repeated division).\n2. Draw two overlapping circles. Primes the numbers share go in the **intersection** — one copy for each time it is shared. The leftover primes go in each number's own region.\n3. **HCF** = the product of the numbers in the **intersection**.\n4. **LCM** = the product of **every** number in the diagram.\n\n**Index form shortcut.** The HCF uses the **lowest** power of each prime they share; the LCM uses the **highest** power of every prime that appears. With 84 = {{2^2 * 3 * 7}} and 90 = {{2 * 3^2 * 5}}:\n\n    HCF = 2 × 3 = 6        LCM = 2² × 3² × 5 × 7 = 1260\n\nIf a question asks for the HCF or LCM 'as a product of primes', you can leave it in index form (e.g. {{2^2 * 3^2 * 5 * 7}}); otherwise evaluate it.\n\n**Three numbers.** Use three circles and fill from the centre, just like any three-set Venn diagram: primes common to all three go in the middle, primes shared by exactly two go in that pair's region, and the rest go in their own circle. HCF = product of the **centre**; LCM = product of **everything**.\n\n**HCF or LCM in context?**\n\n| Clue in the question | Use | Why |\n|---|---|---|\n| buses, bells, lights, laps 'together again' | LCM | you need a common **multiple** of the gaps |\n| 'largest' equal groups, biggest square tile, longest equal lengths | HCF | you need the biggest number that **divides** each |\n\n**Working backwards (two numbers).** HCF × LCM = the product of the two numbers. If two numbers have HCF 6, write them as 6p and 6q where p and q have **no** common factor — otherwise the HCF would be bigger than 6.",
      diagram: `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Venn diagram of the prime factors of 84 and 90. The 84 circle alone contains 2 and 7, the overlap contains 2 and 3, and the 90 circle alone contains 3 and 5. Below: HCF equals 2 times 3 equals 6, and LCM equals 2 times 7 times 2 times 3 times 3 times 5 equals 1260."><rect x="0" y="0" width="440" height="260" fill="#ffffff"/><rect x="20" y="30" width="400" height="180" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><circle cx="170" cy="120" r="85" fill="#fde68a"/><circle cx="270" cy="120" r="85" fill="#bae6fd"/><path d="M220,51.26 A85,85 0 0,1 220,188.74 A85,85 0 0,1 220,51.26 Z" fill="#bbf7d0"/><circle cx="170" cy="120" r="85" fill="none" stroke="#1f2937" stroke-width="2"/><circle cx="270" cy="120" r="85" fill="none" stroke="#1f2937" stroke-width="2"/><g font-family="sans-serif" font-size="15" fill="#1f2937" font-weight="bold"><text x="78" y="52">84</text><text x="340" y="52">90</text></g><g font-family="sans-serif" font-size="10" fill="#334155"><text x="24" y="205">84 = 2 × 2 × 3 × 7</text><text x="416" y="205" text-anchor="end">90 = 2 × 3 × 3 × 5</text></g><g font-family="sans-serif" font-size="18" fill="#1f2937" text-anchor="middle"><text x="130" y="108">2</text><text x="130" y="148">7</text><text x="220" y="108">2</text><text x="220" y="148">3</text><text x="310" y="108">3</text><text x="310" y="148">5</text></g><text x="220" y="232" font-family="sans-serif" font-size="13" fill="#15803d" text-anchor="middle">HCF = overlap = 2 × 3 = 6</text><text x="220" y="252" font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle">LCM = everything = 2 × 7 × 2 × 3 × 3 × 5 = 1260</text></svg>`,
      diagramCaption:
        "Prime factors of 84 and 90. Shared primes go in the overlap, one copy per shared factor. The overlap multiplies to the HCF; the whole diagram multiplies to the LCM.",
      workedExamples: [
        {
          title: "HCF and LCM of two numbers",
          problem: "Find (a) the highest common factor and (b) the lowest common multiple of 180 and 168.",
          steps: [
            "Prime factorise: 180 = 2 × 2 × 3 × 3 × 5 = {{2^2 * 3^2 * 5}} and 168 = 2 × 2 × 2 × 3 × 7 = {{2^3 * 3 * 7}}.",
            "Shared primes: two 2s and one 3. These go in the overlap.",
            "Leftovers: 180 only holds 3 and 5; 168 only holds 2 and 7.",
            "(a) HCF = product of the overlap = 2 × 2 × 3 = **12**.",
            "(b) LCM = product of everything = 3 × 5 × 2 × 2 × 3 × 2 × 7 = **2520**. (Index form: {{2^3 * 3^2 * 5 * 7}}.)",
            "Check: HCF × LCM = 12 × 2520 = 30 240 and 180 × 168 = 30 240 ✓.",
          ],
          answer: "(a) 12  (b) 2520",
          yourTurn: {
            question: "Your turn: find the lowest common multiple of 60 and 72.",
            answer: { type: "number", value: 360 },
            solution:
              "60 = {{2^2 * 3 * 5}} and 72 = {{2^3 * 3^2}}. Overlap: 2, 2, 3 (HCF 12). Leftovers: 5 (from 60); 2 and 3 (from 72). LCM = 12 × 5 × 2 × 3 = **360**. Check: 12 × 360 = 4320 = 60 × 72 ✓.",
          },
        },
        {
          title: "Three numbers, in context",
          problem:
            "Three MRT feeder buses leave an interchange together at 07:00. Bus A leaves every 20 minutes, bus B every 30 minutes and bus C every 42 minutes.\n\nAt what time will all three next leave together?",
          steps: [
            "'Together again' means a common **multiple** of 20, 30 and 42 — the LCM.",
            "Prime factorise: 20 = 2 × 2 × 5, 30 = 2 × 3 × 5, 42 = 2 × 3 × 7.",
            "Centre (shared by all three): 2.",
            "Pairs: 20 and 30 also share 5; 30 and 42 also share 3; 20 and 42 share nothing else.",
            "Singles: 20 has a 2 left; 30 has nothing left; 42 has 7 left.",
            "LCM = product of everything = 2 × 5 × 3 × 2 × 7 = 420 minutes = 7 hours.",
            "07:00 + 7 hours = **14:00**. (The HCF is just the centre, 2 — but that isn't what this question needs.)",
          ],
          answer: "14:00",
        },
      ],
      keyPoints: [
        "Write each number as a product of primes first — check by multiplying back.",
        "Shared primes go in the intersection, one copy for **each** shared factor.",
        "HCF = product of the intersection (lowest shared powers).",
        "LCM = product of everything in the diagram (highest powers of every prime).",
        "For two numbers, HCF × LCM = the product of the numbers — a quick check.",
        "'Together again' → LCM; 'largest equal pieces' → HCF.",
      ],
      whyItWorks:
        "A **factor** of a number can only be built from that number's own primes, using no more copies than it has. A **common** factor must be built from primes that **both** numbers have — the overlap. The biggest such number uses all of the overlap, so HCF = product of the intersection.\n\nA **multiple** of 84 must contain all of 84's primes (2, 2, 3, 7); a multiple of 90 must contain all of 90's (2, 3, 3, 5). The union of the two circles contains each number's full factorisation, sharing the common part rather than repeating it, and nothing extra — so it is the **smallest** common multiple.\n\nWhy HCF × LCM = a × b for two numbers: write I for the overlap product and a′, b′ for the leftovers. Then a = I × a′ and b = I × b′, so a × b = I × (I × a′ × b′) = HCF × LCM. For three numbers this fails, because the centre would need to be counted three times: 20 × 30 × 42 = 25 200 but HCF × LCM = 2 × 420 = 840.",
      strategies: ["Draw a diagram", "Work backwards", "Check by multiplying back", "Use structure (prime factors)"],
      thinkDeeper:
        "Two numbers have HCF 6 and LCM 72. Find **every** possible pair. (Hint: write them as 6p and 6q — what must p × q be, and what must be true about p and q?) Then explain why no pair of numbers can have HCF 4 and LCM 30.",
    },

    // ------------------------------------------------------------------ 4
    {
      id: "venn-probability",
      heading: "Probability from Venn diagrams",
      discovery: {
        problem:
          "In a group of 50 students, 22 play football (F), 17 play tennis (T) and 18 play neither.\n\n(a) One student is picked at random. Find the probability that they play both sports.\n(b) Now you are told the student **plays tennis**. What is the probability that they also play football?\n\nIs (b) the same as (a)? What should the denominator be in (b)?",
        idea:
          "Centre outwards: 50 − 18 = 32 inside the circles, and 22 + 17 − 32 = 7 play both. So F only = 15, T only = 10.\n\n(a) P(F ∩ T) = {{7/50}}.\n\n(b) Knowing the student plays tennis throws away everyone outside T. The **new total is 17**, and 7 of those play football: P(F | T) = {{7/17}}. 'Given' always shrinks the universe to the set you're told about.",
      },
      body:
        "When a Venn diagram shows frequencies, every probability is a region count over a total:\n\n    P(event) = (number in the region) ÷ (total in ξ)\n\n- **P(A ∩ B)**: the overlap over the total.\n- **P(A ∪ B)**: everything inside the circles over the total — or use P(A ∪ B) = P(A) + P(B) − P(A ∩ B).\n- **P(A′)** = 1 − P(A): everything outside A, **including** the region outside all circles.\n\n**Conditional probability — the word 'given'.** P(A | B) means 'the probability of A, **given** that B has happened'. Knowing B has happened shrinks the universe to circle B: the **denominator** becomes n(B), and the successes are the elements of B that are also in A — the overlap.\n\n    P(A | B) = n(A ∩ B) ÷ n(B) = P(A ∩ B) ÷ P(B)\n\nIn symbols, {{P(A | B) = (P(A ∩ B))/(P(B))}}. Exam wording often avoids the symbol: 'A student who plays tennis is chosen at random. Find the probability that this student also plays football' is P(F | T). The clue is that you are told something about the person *before* the question.\n\n> The order matters. P(F | T) = {{7/17}} (out of the tennis players) but P(T | F) = {{7/22}} (out of the footballers).\n\n**Venn diagrams of probabilities.** Regions can hold probabilities instead of frequencies. Then all regions add to **1**, and you fill from the centre outwards in exactly the same way — algebra included (e.g. 'P(A only) is twice P(B only)').\n\n**Special cases you can see in the picture.**\n\n- **Mutually exclusive** events can't happen together: P(A ∩ B) = 0, the circles don't overlap, and P(A ∪ B) = P(A) + P(B).\n- **Independent** events satisfy P(A ∩ B) = P(A) × P(B), which is the same as P(A | B) = P(A): knowing B tells you nothing new about A. Test it with the numbers in the diagram.\n\nGive probabilities as fractions, decimals or percentages — **never** as a ratio (7 : 50) or in words ('7 out of 50').",
      diagram: `<svg viewBox="0 0 480 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Two copies of a Venn diagram for 50 students: football only 15, both 7, tennis only 10, neither 18. Left: the whole diagram, with P of F intersect T equal to 7 over 50. Right: given tennis, only the tennis circle is highlighted, the 15 and 18 are greyed out, and P of F given T equals 7 over 17."><rect x="0" y="0" width="480" height="240" fill="#ffffff"/><rect x="10" y="30" width="220" height="160" fill="#ffffff" stroke="#1f2937" stroke-width="2"/><circle cx="95" cy="110" r="60" fill="#fde68a" fill-opacity="0.7"/><circle cx="145" cy="110" r="60" fill="#bae6fd" fill-opacity="0.7"/><circle cx="95" cy="110" r="60" fill="none" stroke="#1f2937" stroke-width="1.5"/><circle cx="145" cy="110" r="60" fill="none" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="13" fill="#1f2937" font-weight="bold"><text x="14" y="22">ξ = 50</text><text x="36" y="54">F</text><text x="196" y="54">T</text><text x="254" y="22">Given T: new total 17</text><text x="276" y="54">F</text><text x="436" y="54">T</text></g><g font-family="sans-serif" font-size="15" fill="#1f2937" text-anchor="middle"><text x="68" y="115">15</text><text x="120" y="115">7</text><text x="172" y="115">10</text><text x="208" y="180">18</text></g><rect x="250" y="30" width="220" height="160" fill="#f1f5f9" stroke="#1f2937" stroke-width="2"/><circle cx="385" cy="110" r="60" fill="#bae6fd" stroke="#1f2937" stroke-width="2.5"/><path d="M360,55.46 A60,60 0 0,1 360,164.54 A60,60 0 0,1 360,55.46 Z" fill="#fde68a"/><circle cx="385" cy="110" r="60" fill="none" stroke="#1f2937" stroke-width="2.5"/><circle cx="335" cy="110" r="60" fill="none" stroke="#94a3b8" stroke-width="1.5" stroke-dasharray="5,4"/><g font-family="sans-serif" font-size="15" text-anchor="middle"><text x="308" y="115" fill="#94a3b8">15</text><text x="360" y="115" fill="#b91c1c" font-weight="bold">7</text><text x="412" y="115" fill="#1f2937">10</text><text x="448" y="180" fill="#94a3b8">18</text></g><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="120" y="212">P(F ∩ T) = 7/50</text><text x="360" y="212">P(F | T) = 7/17</text></g><g font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle"><text x="120" y="230">overlap ÷ everyone</text><text x="360" y="230">overlap ÷ tennis players (7 + 10)</text></g></svg>`,
      diagramCaption:
        "Same students, two questions. Left: 'both' out of all 50. Right: 'given tennis' throws away everyone outside T, so the denominator becomes 7 + 10 = 17.",
      workedExamples: [
        {
          title: "Probabilities from a frequency Venn diagram",
          problem:
            "Use the language survey from the Venn diagrams section (50 students: centre 3; F and S only 5; F and M only 4; S and M only 6; F only 10; S only 8; M only 7; neither 7).\n\nA student is chosen at random.\n\n(a) Find the probability that the student studies exactly two languages.\n(b) The student studies French. Find the probability that they also study Mandarin.",
          steps: [
            "(a) Exactly two = the three pair regions only (not the centre): 5 + 4 + 6 = 15.",
            "P(exactly two) = {{15/50 = 3/10}}.",
            "(b) 'The student studies French' is a **given**: the new total is n(F) = 10 + 5 + 4 + 3 = 22.",
            "Of those 22, the ones who also study Mandarin are in F ∩ M: 4 + 3 = 7 (remember the centre!).",
            "P(M | F) = {{7/22}}.",
          ],
          answer: "(a) {{3/10}}  (b) {{7/22}}",
          yourTurn: {
            question:
              "Your turn: using the same survey, a student who studies Mandarin is chosen at random. Find the probability that this student also studies Spanish. Give your answer as a fraction in its simplest form.",
            answer: { type: "fraction", n: 9, d: 20, simplest: true },
            solution:
              "Given Mandarin, the new total is n(M) = 4 + 3 + 6 + 7 = 20. Those also studying Spanish: S ∩ M = 6 + 3 = 9. So P(S | M) = **{{9/20}}**.",
          },
        },
        {
          title: "A Venn diagram of probabilities",
          problem:
            "For two events A and B, P(A) = 0.45, P(B) = 0.3 and P(A ∪ B) = 0.6.\n\n(a) Find P(A ∩ B).\n(b) Find P(B | A).\n(c) Are A and B independent? Give a reason.",
          steps: [
            "(a) Rearrange P(A ∪ B) = P(A) + P(B) − P(A ∩ B): P(A ∩ B) = 0.45 + 0.3 − 0.6 = **0.15**.",
            "Fill the diagram centre outwards: A only = 0.45 − 0.15 = 0.3; B only = 0.3 − 0.15 = 0.15; outside = 1 − 0.6 = 0.4. Check: 0.3 + 0.15 + 0.15 + 0.4 = 1 ✓.",
            "(b) Given A, the new 'total' is P(A) = 0.45. P(B | A) = {{0.15/0.45 = 1/3}}.",
            "(c) P(A) × P(B) = 0.45 × 0.3 = 0.135, but P(A ∩ B) = 0.15. These are not equal, so A and B are **not** independent.",
            "Equivalently, P(B | A) = {{1/3}} ≠ P(B) = 0.3: knowing A happened changes the chance of B.",
          ],
          answer: "(a) 0.15  (b) {{1/3}}  (c) No: 0.45 × 0.3 = 0.135 ≠ 0.15.",
          yourTurn: {
            question:
              "Your turn: for the same events, find P(A | B′). Give your answer as a fraction in its simplest form.",
            answer: { type: "fraction", n: 3, d: 7, simplest: true },
            solution:
              "Given B′, the new total is P(B′) = 1 − 0.3 = 0.7. The part of B′ inside A is 'A only' = 0.3. P(A | B′) = {{0.3/0.7 = 3/7}}.",
          },
        },
      ],
      keyPoints: [
        "P(region) = number in the region ÷ total in ξ — fill the whole diagram first, including the outside.",
        "P(A ∪ B) = P(A) + P(B) − P(A ∩ B); P(A′) = 1 − P(A).",
        "'Given B' shrinks the universe to B: P(A | B) = n(A ∩ B) ÷ n(B).",
        "P(A | B) and P(B | A) usually differ — the denominators are different sets.",
        "In a Venn diagram of probabilities, all regions add to 1.",
        "Mutually exclusive: no overlap. Independent: P(A ∩ B) = P(A) × P(B).",
      ],
      whyItWorks:
        "A probability is a fraction of the sample space. When you are told B has happened, every outcome outside B is now impossible, so B **becomes** the sample space. The outcomes where A also happens are the ones in A ∩ B. Hence P(A | B) = n(A ∩ B) ÷ n(B).\n\nDividing top and bottom by n(ξ) turns counts into probabilities: {{(n(A ∩ B))/(n(B)) = (n(A ∩ B) ÷ n(ξ))/(n(B) ÷ n(ξ)) = (P(A ∩ B))/(P(B))}}. Dividing by P(B) simply rescales the probabilities inside B so they add up to 1 again.\n\nThe addition rule is the counting rule from the set notation section divided by n(ξ): n(A ∪ B) = n(A) + n(B) − n(A ∩ B) becomes P(A ∪ B) = P(A) + P(B) − P(A ∩ B).",
      strategies: ["Draw a diagram", "Restrict the sample space", "Work from the centre outwards", "Check the regions add to 1"],
      thinkDeeper:
        "In the football–tennis example, P(F | T) = {{7/17}} and P(T | F) = {{7/22}}. When would P(A | B) equal P(B | A)? Find the condition and explain it using the Venn diagram. Then think about a medical test: why is 'P(positive test | ill)' very different from 'P(ill | positive test)' when the illness is rare?",
    },
  ],
  learn: {
    flashcards: [
      { front: "What does A ∩ B mean?", back: "The **intersection**: elements in A **and** in B — the overlap of the circles." },
      { front: "What does A ∪ B mean?", back: "The **union**: elements in A **or** B **or both** — everything inside either circle." },
      { front: "What does A′ mean?", back: "The **complement**: everything in ξ that is **not** in A — including the region outside all the circles." },
      { front: "What do ξ (ℰ) and ∅ mean?", back: "ξ (printed ℰ on Edexcel papers) is the universal set — everything being considered. ∅ (or { }) is the empty set." },
      { front: "What does B ⊂ A mean, and how is it drawn?", back: "B is a **subset** of A: every element of B is in A. Draw circle B entirely inside circle A." },
      { front: "What does A ∩ B = ∅ tell you?", back: "A and B have nothing in common — the circles don't overlap. As events, they are mutually exclusive." },
      { front: "List {x : x is an integer, −2 ≤ x < 3}.", back: "{−2, −1, 0, 1, 2}. −2 is included (≤), 3 is not (<)." },
      { front: "n(A ∪ B) = ?", back: "n(A) + n(B) − n(A ∩ B) — the overlap was counted twice, so subtract it once." },
      { front: "Completing a Venn diagram: which number goes in first?", back: "The **intersection** (the centre for three sets). Then subtract to get the 'only' regions, then find the outside." },
      { front: "A ∩ B′ in words?", back: "In A but **not** in B — the 'A only' crescent." },
      { front: "(A ∪ B)′ in words? What else equals it?", back: "Neither A nor B — outside both circles. It equals A′ ∩ B′." },
      { front: "Prime-factor Venn diagram: how do you get the HCF?", back: "Multiply the primes in the **intersection** (shared factors only)." },
      { front: "Prime-factor Venn diagram: how do you get the LCM?", back: "Multiply **every** prime in the diagram (the union)." },
      { front: "For two numbers a and b, HCF × LCM = ?", back: "a × b. (It does not work for three numbers.)" },
      { front: "P(A | B) from a frequency Venn diagram?", back: "n(A ∩ B) ÷ n(B): 'given B' makes n(B) the new total." },
      { front: "What do the regions of a probability Venn diagram add to?", back: "1 — including the region outside the circles." },
      { front: "How do you test whether A and B are independent?", back: "Check whether P(A ∩ B) = P(A) × P(B) (equivalently P(A | B) = P(A))." },
    ],
    mustKnow: [
      "Can I use set notation correctly — ξ, ∈, ∉, ∅, A′, A ∪ B, A ∩ B, n(A) and ⊂?",
      "Can I list the elements of a set from a description, including set-builder notation with inequalities?",
      "Can I construct a two-set Venn diagram from a context, filling in from the centre outwards and finding the region outside?",
      "Can I construct a three-set Venn diagram from given information?",
      "Can I use algebra for an unknown region in a Venn diagram, form an equation and solve it?",
      "Can I identify and shade regions described in set notation, such as A ∩ B′, (A ∪ B)′ and A ∩ (B ∪ C)?",
      "Can I describe a shaded region using set notation?",
      "Can I use n(A ∪ B) = n(A) + n(B) − n(A ∩ B)?",
      "Can I use a Venn diagram of prime factors to find the HCF and LCM of two numbers?",
      "Can I use a Venn diagram to find the HCF and LCM of three numbers, and decide which one a context needs?",
      "Can I calculate probabilities from a Venn diagram, including P(A ∩ B), P(A ∪ B) and P(A′)?",
      "Can I find a conditional probability such as P(A | B) from a Venn diagram ('given that…')?",
      "Can I complete and use a Venn diagram containing probabilities, using P(A ∪ B) = P(A) + P(B) − P(A ∩ B)?",
    ],
    misconceptions: [
      {
        wrong: "If 22 students study French, write 22 in the French circle.",
        right: "22 is the total for the **whole** circle, overlaps included. Put the overlaps in first and write 22 minus them in the 'French only' region.",
      },
      {
        wrong: "A ∪ B means the elements in both A and B.",
        right: "That is A ∩ B. A ∪ B means in A **or** B **or both** — think '∪ is a cup that holds everything from both sets'.",
      },
      {
        wrong: "A′ is the other circle (so A′ = B).",
        right: "A′ is **everything** in ξ outside A: 'B only' **and** the region outside all the circles.",
      },
      {
        wrong: "n(A ∪ B) = n(A) + n(B).",
        right: "Only if A and B don't overlap. Otherwise the overlap is counted twice: subtract n(A ∩ B) once.",
      },
      {
        wrong: "For P(A | B), divide by the total number in ξ.",
        right: "'Given B' makes B the new universe: divide by n(B) (or P(B)), not by the overall total.",
      },
      {
        wrong: "In a prime-factor Venn diagram the LCM is the product of the two 'only' regions.",
        right: "The LCM is the product of **every** number in the diagram, including the overlap. The overlap on its own gives the HCF.",
      },
      {
        wrong: "If two numbers share two 2s, put one 2 in the overlap — a prime only needs to appear once.",
        right: "Put one copy in the overlap for **each** time the prime is shared. 180 and 168 share 2 × 2 × 3, so the overlap holds 2, 2 and 3 and the HCF is 12, not 6.",
      },
      {
        wrong: "P(A | B) = P(B | A).",
        right: "Usually not: the numerators are the same (the overlap) but the denominators are n(B) and n(A). They are equal only when n(A) = n(B) (or when the overlap is empty, so both are 0).",
      },
    ],
    examMistakes: [
      "Writing the given total (e.g. 18 badminton players) in the 'only' region instead of subtracting the intersection first, so the diagram's regions add to more than n(ξ).",
      "Forgetting the region outside the circles — leaving it blank, or not using it in the equation 'all regions add to the total' when solving for x.",
      "Conditional probability: answering 'given that the student plays tennis…' with a denominator of the whole group (e.g. {{7/50}} instead of {{7/17}}).",
      "Giving probabilities as ratios (7 : 50) or in words ('7 out of 50') — examiners do not award the accuracy mark for these.",
      "Prime-factor Venn diagrams: writing the numbers themselves or composite factors (like 6) in the regions, or giving the HCF/LCM as the list of primes instead of multiplying them out.",
      "Three-set diagrams: subtracting the pair totals from a single total without first removing the centre from each pair, so the centre is subtracted twice.",
    ],
    mnemonics: [
      {
        topic: "Union and intersection",
        device: "∪ is a **cUp** — it holds everything poured in from **both** sets (Union). ∩ is an **n** — for '**aNd**' (iNtersection).",
        explanation: "Union = or (everything in either). Intersection = and (only the overlap).",
      },
      {
        topic: "Completing Venn diagrams",
        device: "'**Middle first, outside last.**'",
        explanation: "Intersection first (the centre for three sets), then the pairs, then the 'only' regions, then the outside — and check that everything adds to n(ξ).",
      },
      {
        topic: "Conditional probability",
        device: "'**Given means a new universe.**' Cover up everything outside the given set with your hand.",
        explanation: "The given set's total becomes the denominator; the overlap becomes the numerator.",
      },
    ],
    realWorld: [
      {
        title: "Search engines and databases",
        detail:
          "Searching a library catalogue for 'Singapore AND history' returns an intersection; 'monsoon OR typhoon' returns a union; 'durian NOT recipe' uses a complement. Boolean logic in every database query is set notation in disguise.",
        emoji: "🔎",
      },
      {
        title: "Medical tests",
        detail:
          "Doctors care about P(ill | positive test), not P(positive | ill). For a rare illness, most people who test positive can still be healthy — the same 'which circle is the denominator?' question as P(F | T) versus P(T | F).",
        emoji: "🩺",
      },
      {
        title: "Blood groups",
        detail:
          "Blood type depends on three antigens — A, B and Rh. A three-set Venn diagram sorts everyone into 8 regions: O− sits outside all three circles, AB+ in the centre. Blood banks use this to decide who can donate to whom.",
        emoji: "🩸",
      },
      {
        title: "Timetables and gears",
        detail:
          "When will the North–South and East–West line trains next arrive at an interchange together? When will two gears return to their starting position? Both are LCM questions — and the prime-factor Venn diagram answers them quickly.",
        emoji: "🚆",
      },
    ],
    videos: [
      { title: "Set notation", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+set+notation" },
      { title: "Venn diagrams — three sets and algebra", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+venn+diagrams+igcse" },
      { title: "HCF and LCM using Venn diagrams", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+hcf+lcm+venn+diagram" },
      { title: "Conditional probability from Venn diagrams", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+venn+diagrams+conditional+probability" },
    ],
    formulas: [
      { name: "Counting a union (two sets)", formula: "n(A ∪ B) = n(A) + n(B) − n(A ∩ B)", note: "Learn this — not given" },
      { name: "Complement count", formula: "n(A′) = n(ξ) − n(A)", note: "Learn this — not given" },
      {
        name: "Counting a union (three sets)",
        formula: "n(A ∪ B ∪ C) = n(A) + n(B) + n(C) − n(A ∩ B) − n(A ∩ C) − n(B ∩ C) + n(A ∩ B ∩ C)",
        note: "Learn this — not given",
      },
      { name: "De Morgan's laws", formula: "(A ∪ B)′ = A′ ∩ B′ and (A ∩ B)′ = A′ ∪ B′", note: "Learn this — not given" },
      { name: "HCF and LCM of two numbers", formula: "HCF × LCM = a × b; HCF = product of the intersection, LCM = product of everything", note: "Learn this — not given" },
      { name: "Probability of a complement", formula: "P(A′) = 1 − P(A)", note: "Learn this — not given" },
      { name: "Addition rule", formula: "P(A ∪ B) = P(A) + P(B) − P(A ∩ B)", note: "Learn this — not given" },
      { name: "Conditional probability", formula: "{{P(A | B) = (P(A ∩ B))/(P(B))}} = n(A ∩ B) ÷ n(B)", note: "Learn this — not given" },
      { name: "Independent events", formula: "P(A ∩ B) = P(A) × P(B)", note: "Learn this — not given" },
      { name: "Number of subsets", formula: "a set with n elements has {{2^n}} subsets (including ∅ and itself)", note: "Learn this — not given" },
    ],
  },
};
