// Probability — MCQ papers (3 × 15). Options are shuffled at display time.
// Tree diagrams are drawn with the same labels and probabilities the questions use.
import type { Paper } from "../../types.ts";

const TREE_RAIN = `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree diagram. First branches: Rain 0.3 and No rain 0.7. After Rain: Late 0.4 and Not late 0.6. After No rain: Late 0.1 and Not late 0.9."><rect x="0" y="0" width="420" height="260" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><line x1="20" y1="130" x2="138" y2="65"/><line x1="20" y1="130" x2="138" y2="195"/><line x1="215" y1="65" x2="318" y2="25"/><line x1="215" y1="65" x2="318" y2="105"/><line x1="215" y1="195" x2="318" y2="155"/><line x1="215" y1="195" x2="318" y2="235"/></g><circle cx="20" cy="130" r="3" fill="#1f2937"/><g font-family="sans-serif" font-size="13" fill="#1f2937"><text x="142" y="69">Rain</text><text x="142" y="199">No rain</text><text x="322" y="29">Late</text><text x="322" y="109">Not late</text><text x="322" y="159">Late</text><text x="322" y="239">Not late</text></g><g font-family="sans-serif" font-size="12" fill="#1e3a8a" font-weight="bold"><text x="66" y="88">0.3</text><text x="66" y="186">0.7</text><text x="252" y="36">0.4</text><text x="252" y="104">0.6</text><text x="252" y="166">0.1</text><text x="252" y="234">0.9</text></g><g font-family="sans-serif" font-size="11" fill="#475569"><text x="100" y="18">Weather</text><text x="280" y="12">Siti</text></g></svg>`;

const TREE_TEST = `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree diagram for a driving test. First attempt: Pass 0.6 and Fail 0.4. Only after Fail is there a second attempt: Pass 0.75 and Fail 0.25."><rect x="0" y="0" width="420" height="240" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><line x1="20" y1="110" x2="138" y2="45"/><line x1="20" y1="110" x2="138" y2="175"/><line x1="180" y1="175" x2="298" y2="130"/><line x1="180" y1="175" x2="298" y2="220"/></g><circle cx="20" cy="110" r="3" fill="#1f2937"/><g font-family="sans-serif" font-size="13" fill="#1f2937"><text x="142" y="49">Pass</text><text x="142" y="179">Fail</text><text x="302" y="134">Pass</text><text x="302" y="224">Fail</text></g><g font-family="sans-serif" font-size="12" fill="#1e3a8a" font-weight="bold"><text x="64" y="68">0.6</text><text x="64" y="164">0.4</text><text x="226" y="142">0.75</text><text x="226" y="216">0.25</text></g><g font-family="sans-serif" font-size="11" fill="#475569"><text x="80" y="16">1st attempt</text><text x="250" y="100">2nd attempt</text></g></svg>`;

const TREE_SPIN = `<svg viewBox="0 0 420 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Tree diagram for two spins. First spin: Blue 0.4 and Not blue 0.6. Second spin after each: Blue 0.4 and Not blue 0.6."><rect x="0" y="0" width="420" height="260" fill="#ffffff"/><g stroke="#334155" stroke-width="1.5"><line x1="20" y1="130" x2="138" y2="65"/><line x1="20" y1="130" x2="138" y2="195"/><line x1="215" y1="65" x2="318" y2="25"/><line x1="215" y1="65" x2="318" y2="105"/><line x1="215" y1="195" x2="318" y2="155"/><line x1="215" y1="195" x2="318" y2="235"/></g><circle cx="20" cy="130" r="3" fill="#1f2937"/><g font-family="sans-serif" font-size="13" fill="#1f2937"><text x="142" y="69">Blue</text><text x="142" y="199">Not blue</text><text x="322" y="29">Blue</text><text x="322" y="109">Not blue</text><text x="322" y="159">Blue</text><text x="322" y="239">Not blue</text></g><g font-family="sans-serif" font-size="12" fill="#1e3a8a" font-weight="bold"><text x="66" y="88">0.4</text><text x="66" y="186">0.6</text><text x="252" y="36">0.4</text><text x="252" y="104">0.6</text><text x="252" y="166">0.4</text><text x="252" y="234">0.6</text></g><g font-family="sans-serif" font-size="11" fill="#475569"><text x="90" y="18">1st spin</text><text x="270" y="12">2nd spin</text></g></svg>`;

export const mcqPapers: Paper[] = [
  {
    id: "probability-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "probability-m1-q01",
        question:
          "A biased spinner can land on red, blue, green or yellow. The table shows some of the probabilities.\n\n| Colour | Red | Blue | Green | Yellow |\n|---|---|---|---|---|\n| Probability | 0.4 | 0.25 | ? | 0.15 |\n\nWork out the probability that the spinner lands on green.",
        options: ["0.2", "0.8", "0.35", "0.25"],
        answerIndex: 0,
        explanation:
          "The probabilities of all the outcomes must add to 1. 0.4 + 0.25 + 0.15 = 0.8, so P(green) = 1 − 0.8 = 0.2. 0.8 is the total of the given values — the subtraction from 1 was forgotten. 0.35 is 1 − 0.4 − 0.25, which forgets to subtract yellow as well. 0.25 assumes the four colours are equally likely, but the spinner is biased.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["What must all the probabilities in the table add up to?"],
        strategy: "Use the fact that probabilities sum to 1",
      },
      {
        kind: "mcq",
        id: "probability-m1-q02",
        question:
          "Aisha has a biased dice. The probability that it lands on 6 is 0.15.\n\nShe rolls the dice 240 times. Work out an estimate for the number of times it lands on 6.",
        options: ["40", "36", "204", "16"],
        answerIndex: 1,
        explanation:
          "Expected frequency = number of trials × probability = 240 × 0.15 = 36. 40 is 240 ÷ 6, which treats the dice as fair. 204 is the expected number of rolls that are *not* 6. 16 comes from dividing 240 by 15 instead of multiplying by 0.15.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["Expected frequency = number of trials × probability."],
        strategy: "Use a formula",
      },
      {
        kind: "mcq",
        id: "probability-m1-q03",
        question:
          "Mei drops a drawing pin 50 times and it lands point up 18 times. She then drops it another 200 times. Altogether, it lands point up 95 times in the 250 drops.\n\nWhat is the best estimate of the probability that the pin lands point up?",
        options: ["0.36", "0.5", "0.38", "0.475"],
        answerIndex: 2,
        explanation:
          "The best estimate uses **all** the trials: relative frequency = 95 ÷ 250 = 0.38. 0.36 (18 ÷ 50) uses only the first, smaller experiment — more trials give a more reliable estimate. 0.5 assumes the two ways of landing are equally likely, which a drawing pin is not. 0.475 divides 95 by 200 instead of the total number of drops, 250.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["Which estimate uses the most trials?", "Relative frequency = successes ÷ total number of trials."],
        strategy: "Use all the data",
      },
      {
        kind: "mcq",
        id: "probability-m1-q04",
        question: "Two fair six-sided dice are rolled and their scores are added. Work out the probability that the total is 7.",
        options: ["{{1/11}}", "{{1/12}}", "{{7/36}}", "{{1/6}}"],
        answerIndex: 3,
        explanation:
          "A sample space diagram has 6 × 6 = 36 equally likely outcomes. A total of 7 comes from (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1): 6 outcomes, so P = {{6/36 = 1/6}}. {{1/11}} assumes the 11 possible totals (2 to 12) are equally likely — they are not. {{1/12}} counts (1, 6) and (6, 1) as the same outcome. {{7/36}} puts the total itself on top.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["Draw a 6 × 6 sample space grid of totals.", "Count the cells showing 7 — remember (1, 6) and (6, 1) are different outcomes."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "probability-m1-q05",
        question:
          "The probability that Arjun's school bus is late on any day is 0.2, independently of other days.\n\nWork out the probability that his bus is late on **at least one** of the next 3 days.",
        options: ["0.6", "0.008", "0.488", "0.512"],
        answerIndex: 2,
        explanation:
          "P(at least one late) = 1 − P(none late) = 1 − 0.8³ = 1 − 0.512 = 0.488. 0.6 adds 0.2 three times — that double-counts days where the bus is late more than once (and would exceed 1 for 6 days). 0.008 is 0.2³, the probability it is late on *all three* days. 0.512 is the probability of *no* late buses.",
        difficulty: "core",
        guideRef: "or-and-rules",
        hints: ["'At least one' has lots of cases. What is the opposite event?", "The opposite of 'at least one late' is 'none late'.", "P(none late) = 0.8 × 0.8 × 0.8."],
        strategy: "Use the complement",
      },
      {
        kind: "mcq",
        id: "probability-m1-q06",
        question:
          "Wei Ling and Jun each take one penalty. The probability that Wei Ling scores is 0.4 and the probability that Jun scores is 0.5. The two events are independent.\n\nWork out the probability that **exactly one** of them scores.",
        options: ["0.5", "0.2", "0.9", "0.7"],
        answerIndex: 0,
        explanation:
          "Exactly one scores in two mutually exclusive ways: Wei Ling scores and Jun misses (0.4 × 0.5 = 0.2) **or** Wei Ling misses and Jun scores (0.6 × 0.5 = 0.3). Add: 0.2 + 0.3 = 0.5. 0.2 is the probability that both score. 0.9 adds the two probabilities, which is not a valid rule here. 0.7 is the probability that *at least* one scores.",
        difficulty: "core",
        guideRef: "or-and-rules",
        hints: ["List the ways that exactly one person can score.", "Each way is an AND (multiply). Then combine the ways with OR (add)."],
        strategy: "Split into cases",
      },
      {
        kind: "mcq",
        id: "probability-m1-q07",
        question:
          "A bag contains 6 red counters and 4 blue counters. Priya takes a counter at random and does **not** replace it. She then takes a second counter at random.\n\nWork out the probability that both counters are red.",
        options: ["{{9/25}}", "{{3/10}}", "{{8/15}}", "{{1/3}}"],
        answerIndex: 3,
        explanation:
          "Without replacement: {{6/10 * 5/9 = 30/90 = 1/3}}. {{9/25}} is {{6/10 * 6/10}} — that is *with* replacement. {{3/10}} uses {{5/10}} for the second pick: one red has gone, but so has one counter from the total, so the denominator must drop to 9. {{8/15}} is the probability of one of each colour.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: ["After the first red is taken, how many reds are left? How many counters altogether?", "Second pick: {{5/9}}."],
        strategy: "Draw a tree diagram",
      },
      {
        kind: "mcq",
        id: "probability-m1-q08",
        question:
          "In the monsoon season, the probability that it rains on a school morning is 0.3. If it rains, the probability that Siti is late for school is 0.4. If it does not rain, the probability that she is late is 0.1. The tree diagram shows this information.\n\nWork out the probability that Siti is late for school on a randomly chosen morning.",
        diagram: TREE_RAIN,
        options: ["0.5", "0.19", "0.12", "0.04"],
        answerIndex: 1,
        explanation:
          "There are two routes to 'Late': Rain then Late (0.3 × 0.4 = 0.12) and No rain then Late (0.7 × 0.1 = 0.07). Add them: 0.12 + 0.07 = 0.19. 0.5 adds the two 'Late' branch probabilities without multiplying along the branches. 0.12 is only the rainy-day route. 0.04 multiplies the two 'Late' branches together, which is not a path through the tree.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: ["Find every path that ends in 'Late'.", "Multiply along each path, then add the paths."],
        strategy: "Draw a tree diagram",
      },
      {
        kind: "mcq",
        id: "probability-m1-q09",
        question:
          "A bag contains n counters. 3 of the counters are red. Two counters are taken at random without replacement. The probability that both are red is {{1/7}}.\n\nWhich equation does n satisfy?",
        options: ["{{n^2 - n - 42 = 0}}", "{{n^2 - 42 = 0}}", "{{n^2 + n - 42 = 0}}", "{{n^2 - n - 7 = 0}}"],
        answerIndex: 0,
        explanation:
          "{{3/n * 2/(n-1) = 1/7}} so {{6/(n(n-1)) = 1/7}}, giving {{n(n-1) = 42}}, i.e. {{n^2 - n - 42 = 0}} (so n = 7). {{n^2 - 42 = 0}} comes from {{3/n * 2/n}}: the red count drops to 2 but the total is wrongly left as n. {{n^2 + n - 42 = 0}} comes from writing the second denominator as n + 1. {{n^2 - n - 7 = 0}} forgets the 6 on top when cross-multiplying.",
        difficulty: "core",
        guideRef: "algebraic-probability",
        hints: ["Write P(red) for the first pick and the second pick in terms of n.", "Second pick: 2 reds left out of n − 1 counters.", "Set the product equal to {{1/7}} and cross-multiply."],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "probability-m1-q10",
        question:
          "A bag contains only blue, red and green beads. A bead is taken at random.\n\n| Colour | Blue | Red | Green |\n|---|---|---|---|\n| Probability | x | 2x | 3x + 0.1 |\n\nWork out the probability that the bead is green.",
        options: ["0.15", "0.45", "0.55", "0.6"],
        answerIndex: 2,
        explanation:
          "The probabilities add to 1: x + 2x + 3x + 0.1 = 1, so 6x = 0.9 and x = 0.15. Then P(green) = 3(0.15) + 0.1 = 0.55. 0.15 is the value of x, not P(green). 0.45 is 3x without the + 0.1. 0.6 comes from ignoring the 0.1 when solving (6x = 1).",
        difficulty: "core",
        guideRef: "algebraic-probability",
        hints: ["Form an equation using 'the probabilities add to 1'.", "Solve for x — then answer the question that was actually asked."],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "probability-m1-q11",
        question:
          "When Kenji plays a game of chess against his computer, the probability that he wins is 0.35 and the probability that he draws is 0.2.\n\nKenji plays 40 games. Work out an estimate for the number of games he **loses**.",
        options: ["14", "22", "26", "18"],
        answerIndex: 3,
        explanation:
          "P(lose) = 1 − (0.35 + 0.2) = 0.45, so the expected number of losses = 40 × 0.45 = 18. 14 is the expected number of *wins* (40 × 0.35). 22 is the expected number of games he does *not* lose (40 × 0.55). 26 is 40 × 0.65 — the games he does not win, which wrongly includes the draws as losses.",
        difficulty: "core",
        guideRef: "basic-probability",
        hints: ["Win, draw and lose are the only outcomes. What is P(lose)?", "Expected frequency = number of games × P(lose)."],
        strategy: "Use the fact that probabilities sum to 1",
      },
      {
        kind: "mcq",
        id: "probability-m1-q12",
        question:
          "A phone PIN has 4 digits, each from 0 to 9. Digits may be repeated, but the first digit cannot be 0.\n\nHow many different PINs are possible?",
        options: ["10 000", "9000", "5040", "4536"],
        answerIndex: 1,
        explanation:
          "Product rule: 9 choices for the first digit (1–9), then 10 for each of the other three: 9 × 10 × 10 × 10 = 9000. 10 000 ignores the restriction on the first digit. 5040 (10 × 9 × 8 × 7) forbids repeats, which the question allows. 4536 (9 × 9 × 8 × 7) applies the first-digit rule correctly but also forbids repeats.",
        difficulty: "core",
        guideRef: "counting",
        hints: ["How many choices are there for the first digit?", "Repeats are allowed, so how many choices for each later digit?", "Multiply the numbers of choices."],
        strategy: "Fill the boxes",
      },
      {
        kind: "mcq",
        id: "probability-m1-q13",
        question:
          "Use the tree diagram from the monsoon question again: P(rain) = 0.3, P(late | rain) = 0.4, P(late | no rain) = 0.1.\n\nOn one morning Siti is late. Work out the probability that it rained that morning.",
        diagram: TREE_RAIN,
        options: ["0.12", "0.4", "{{12/19}}", "0.3"],
        answerIndex: 2,
        explanation:
          "We are told she is late, so the 'world' shrinks to the late paths, with total probability 0.12 + 0.07 = 0.19. Of that, the rain path is 0.12, so P(rain | late) = {{0.12/0.19 = 12/19}} ≈ 0.632. 0.12 is P(rain **and** late) — it has not been divided by P(late). 0.4 is P(late | rain), the conditional the wrong way round. 0.3 is the probability of rain before you knew she was late.",
        difficulty: "challenge",
        guideRef: "tree-diagrams",
        hints: ["'Given she is late' — which paths of the tree are still possible?", "Work out P(late) by adding the two late paths.", "Divide the rain-and-late path by P(late)."],
        strategy: "Restrict the sample space",
      },
      {
        kind: "mcq",
        id: "probability-m1-q14",
        question: "Find the coefficient of {{x^2}} in the expansion of {{(2 + 3x)^4}}.",
        options: ["216", "72", "36", "6"],
        answerIndex: 0,
        explanation:
          "Row 4 of Pascal's triangle is 1, 4, 6, 4, 1, and the {{x^2}} term uses the 6: {{6 * 2^2 * (3x)^2 = 6 * 4 * 9x^2 = 216x^2}}. 72 forgets to square the 3 — the whole of 3x is squared. 36 leaves out the Pascal coefficient 6. 6 is only the Pascal coefficient, ignoring the 2 and the 3.",
        difficulty: "challenge",
        guideRef: "binomial-expansion",
        hints: ["Which row of Pascal's triangle do you need, and which entry goes with {{x^2}}?", "The term is (coefficient) × {{2^2}} × {{(3x)^2}}.", "Be careful: {{(3x)^2 = 9x^2}}."],
        strategy: "Use Pascal's triangle",
      },
      {
        kind: "mcq",
        id: "probability-m1-q15",
        question:
          "Hana has a bag of n sweets. 4 are orange and the rest are yellow. She takes two sweets at random without replacement. The probability that she takes one of each colour is {{8/15}}.\n\nWhat are the possible values of n?",
        options: ["10 only", "6 only", "−6 or −10", "6 or 10"],
        answerIndex: 3,
        explanation:
          "One of each colour can happen as OY or YO: {{2 * 4/n * (n-4)/(n-1) = 8/15}}. So {{8(n-4)/(n(n-1)) = 8/15}}, giving {{15(n-4) = n(n-1)}}, i.e. {{n^2 - 16n + 60 = 0}}, so (n − 6)(n − 10) = 0. **Both** roots work: n = 6 gives {{2 * 4/6 * 2/5 = 8/15}} and n = 10 gives {{2 * 4/10 * 6/9 = 8/15}}. Rejecting one of them ('10 only' or '6 only') is a guess — check each root in context. −6 or −10 comes from a sign slip when factorising.",
        difficulty: "challenge",
        guideRef: "algebraic-probability",
        hints: ["How many orders give one of each colour?", "Write the probability as {{2 * 4/n * (n-4)/(n-1)}} and set it equal to {{8/15}}.", "You get a quadratic. Solve it, then test **every** root in the context."],
        strategy: "Check by substituting",
      },
    ],
  },
  {
    id: "probability-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "probability-m2-q01",
        question:
          "Ethan throws a biased coin 200 times and gets 130 heads.\n\nHe is going to throw the coin 500 more times. Work out an estimate for the number of heads he will get in these 500 throws.",
        options: ["250", "175", "260", "325"],
        answerIndex: 3,
        explanation:
          "Relative frequency of heads = {{130/200 = 0.65}}, so expect 500 × 0.65 = 325 heads. 250 assumes the coin is fair — but the data shows it is biased. 175 is the expected number of *tails*. 260 doubles 130, but 500 is 2.5 times 200, not twice.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["Estimate P(head) from the experiment first.", "Then multiply by the number of new throws."],
        strategy: "Use all the data",
      },
      {
        kind: "mcq",
        id: "probability-m2-q02",
        question:
          "Spinner A is numbered 1, 2, 3. Spinner B is numbered 1, 2, 3, 4. Both are fair. Ravi spins both and **multiplies** the two scores.\n\nWork out the probability that the product is even.",
        options: ["{{2/3}}", "{{1/2}}", "{{1/3}}", "{{5/8}}"],
        answerIndex: 0,
        explanation:
          "The sample space has 3 × 4 = 12 equally likely outcomes. The product is odd only when both scores are odd: A ∈ {1, 3}, B ∈ {1, 3} gives 4 outcomes. So 12 − 4 = 8 are even: {{8/12 = 2/3}}. {{1/2}} assumes odd and even are equally likely. {{1/3}} is P(odd). {{5/8}} lists the 8 *different* product values and counts 5 even ones — but the values are not equally likely (2 appears twice, for example).",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["Draw a 3 by 4 grid of products.", "When is a product odd?"],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "probability-m2-q03",
        question:
          "A card is taken at random from 20 cards numbered 1 to 20.\n\nWork out the probability that the number is a multiple of 4 **or** a multiple of 6.",
        options: ["{{2/5}}", "{{3/80}}", "{{7/20}}", "{{1/20}}"],
        answerIndex: 2,
        explanation:
          "Multiples of 4: 4, 8, 12, 16, 20. Multiples of 6: 6, 12, 18. The number 12 is in both, so count it once: 4, 6, 8, 12, 16, 18, 20 — 7 cards, P = {{7/20}}. {{2/5}} ({{8/20}}) adds {{5/20 + 3/20}} — the events are **not** mutually exclusive, so 12 is double-counted. {{3/80}} multiplies the probabilities, which is the AND rule for independent events, not OR. {{1/20}} is P(multiple of 4 **and** of 6).",
        difficulty: "warmup",
        guideRef: "or-and-rules",
        hints: ["List the multiples of 4 and the multiples of 6.", "Is any number on both lists? Count it once."],
        strategy: "List systematically",
      },
      {
        kind: "mcq",
        id: "probability-m2-q04",
        question:
          "The probability that Olivia's alarm fails to go off is 0.05. The probability that her bus is late is 0.2. These events are independent.\n\nWork out the probability that her alarm fails **and** her bus is late on the same day.",
        options: ["0.25", "0.01", "0.19", "0.76"],
        answerIndex: 1,
        explanation:
          "For independent events, multiply: P(alarm fails and bus late) = 0.05 × 0.2 = 0.01. 0.25 adds them — the OR rule, used for the wrong word. 0.19 is 0.95 × 0.2 (alarm works and bus late). 0.76 is 0.95 × 0.8, the probability that neither happens.",
        difficulty: "warmup",
        guideRef: "or-and-rules",
        hints: ["For independent events, which operation goes with 'and'?"],
        strategy: "Use a formula",
      },
      {
        kind: "mcq",
        id: "probability-m2-q05",
        question:
          "Marcus takes three penalties. Each time, the probability that he scores is 0.7, independently.\n\nWork out the probability that he scores **exactly two** of the three penalties.",
        options: ["0.147", "0.441", "0.49", "0.784"],
        answerIndex: 1,
        explanation:
          "Exactly two goals can happen as SSM, SMS or MSS — three paths, each with probability 0.7 × 0.7 × 0.3 = 0.147. Total = 3 × 0.147 = 0.441. 0.147 counts only one order. 0.49 is 0.7², which ignores the miss. 0.784 is P(at least two) = 0.441 + 0.343.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: ["Write down every order of two goals (S) and one miss (M).", "Each order has the same probability. How many orders are there?"],
        strategy: "Split into cases",
      },
      {
        kind: "mcq",
        id: "probability-m2-q06",
        question:
          "The probability that Zara passes her driving test at the first attempt is 0.6. If she fails, she takes it again; the probability that she passes at the second attempt is 0.75. The tree diagram shows this.\n\nWork out the probability that she passes within her first two attempts.",
        diagram: TREE_TEST,
        options: ["0.45", "0.3", "0.75", "0.9"],
        answerIndex: 3,
        explanation:
          "Two paths end in a pass: Pass first time (0.6) or Fail then Pass (0.4 × 0.75 = 0.3). Total = 0.6 + 0.3 = 0.9. Quick check: P(fails both) = 0.4 × 0.25 = 0.1, and 1 − 0.1 = 0.9. 0.45 multiplies 0.6 × 0.75 — but she never takes a second test after passing. 0.3 is only the second-attempt path. 0.75 is the second-attempt probability alone.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: ["How many different paths lead to a pass?", "Multiply along a path; add different paths."],
        strategy: "Use the complement",
      },
      {
        kind: "mcq",
        id: "probability-m2-q07",
        question:
          "A box contains 4 pandan kueh and 6 coconut kueh. Wei Ling takes two at random, without replacement.\n\nWork out the probability that she takes **at least one** pandan kueh.",
        options: ["{{2/3}}", "{{16/25}}", "{{8/15}}", "{{2/15}}"],
        answerIndex: 0,
        explanation:
          "P(no pandan) = {{6/10 * 5/9 = 30/90 = 1/3}}, so P(at least one pandan) = {{1 - 1/3 = 2/3}}. {{16/25}} is {{1 - (6/10)^2}} — with replacement, but the kueh is not put back. {{8/15}} is P(exactly one pandan) and misses the 'both pandan' case. {{2/15}} is P(both pandan).",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: ["'At least one' — what is the opposite event?", "Work out P(both coconut), remembering the second pick is out of 9."],
        strategy: "Use the complement",
      },
      {
        kind: "mcq",
        id: "probability-m2-q08",
        question:
          "A biased five-sided spinner is numbered 1 to 5.\n\n| Score | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n| Probability | 0.1 | 0.2 | x | 2x | 0.1 |\n\nWork out the probability that the score is **at least 3**.",
        options: ["0.5", "0.3", "0.7", "0.6"],
        answerIndex: 2,
        explanation:
          "0.1 + 0.2 + x + 2x + 0.1 = 1 gives 3x = 0.6, so x = 0.2. 'At least 3' means 3, 4 or 5: 0.2 + 0.4 + 0.1 = 0.7. 0.5 treats 'at least 3' as 'more than 3' (only 4 and 5). 0.3 is P(less than 3). 0.6 adds x and 2x but forgets the score of 5.",
        difficulty: "core",
        guideRef: "basic-probability",
        hints: ["Find x first: the probabilities add to 1.", "Which scores count as 'at least 3'?"],
        strategy: "Use the fact that probabilities sum to 1",
      },
      {
        kind: "mcq",
        id: "probability-m2-q09",
        question:
          "A bag contains n counters, of which 5 are green. Two counters are taken at random without replacement. The probability that both are green is {{2/21}}.\n\nWork out the value of n.",
        options: ["−14 or 15", "10", "16", "15"],
        answerIndex: 3,
        explanation:
          "{{5/n * 4/(n-1) = 2/21}} gives {{20 * 21 = 2n(n-1)}}, so {{n(n-1) = 210}}, {{n^2 - n - 210 = 0}} and (n − 15)(n + 14) = 0. A number of counters cannot be negative, so n = 15. Check: {{5/15 * 4/14 = 20/210 = 2/21}}. '−14 or 15' forgets to reject the impossible root. 10 is the number of counters that are *not* green. 16 comes from using n for both denominators (with replacement): {{25/n^2 = 2/21}} gives {{n^2 = 262.5}}, n ≈ 16.2.",
        difficulty: "core",
        guideRef: "algebraic-probability",
        hints: ["Write the second pick's probability in terms of n.", "Cross-multiply to get a quadratic.", "Which root makes sense for a number of counters?"],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "probability-m2-q10",
        question:
          "The probability that Arjun wins a game is 0.3, independently each time he plays.\n\nWhat is the smallest number of games he must play so that the probability he wins **at least once** is more than 0.9?",
        options: ["3", "7", "4", "6"],
        answerIndex: 1,
        explanation:
          "P(at least one win in n games) = {{1 - 0.7^n}}. We need {{0.7^n < 0.1}}. {{0.7^6 = 0.1176...}} (too big) and {{0.7^7 = 0.0823...}} (small enough), so n = 7. 3 and 4 come from treating probabilities as if they add: 0.3n > 0.9. 6 is one game short — check: {{1 - 0.7^6 = 0.882}}, which is below 0.9.",
        difficulty: "core",
        guideRef: "or-and-rules",
        hints: ["Write P(at least one win) using the complement.", "You need {{0.7^n}} to be less than 0.1.", "Try n = 6 and n = 7 on your calculator."],
        strategy: "Use the complement",
      },
      {
        kind: "mcq",
        id: "probability-m2-q11",
        question:
          "Six students, including Aisha and Ben, line up in a row for a CCA photo. Aisha and Ben must stand **next to each other**.\n\nIn how many different orders can the six students line up?",
        options: ["240", "120", "720", "480"],
        answerIndex: 0,
        explanation:
          "Glue Aisha and Ben into one block. Now 5 units (the block and the other 4 students) line up in 5! = 120 ways, and inside the block Aisha and Ben can stand in 2 orders: 2 × 120 = 240. 120 forgets that the pair can swap (AB or BA). 720 = 6! ignores the restriction. 480 = 720 − 240 is the number of orders where they are *not* next to each other.",
        difficulty: "core",
        guideRef: "counting",
        hints: ["Treat Aisha and Ben as one 'super-person'. How many units are you arranging now?", "How many ways can those units be arranged? Then: in how many orders can the pair stand inside their block?"],
        strategy: "Glue things together",
      },
      {
        kind: "mcq",
        id: "probability-m2-q12",
        question: "Find the coefficient of {{x^2}} in the expansion of {{(x - 2)^4}}.",
        options: ["−24", "12", "24", "6"],
        answerIndex: 2,
        explanation:
          "Row 4 of Pascal's triangle is 1, 4, 6, 4, 1. The {{x^2}} term is {{6 * x^2 * (-2)^2 = 6 * 4 * x^2 = 24x^2}}. −24 treats {{(-2)^2}} as −4 — an even power of a negative is positive. 12 multiplies by 2 instead of by {{(-2)^2 = 4}} (6 × 2). 6 is just the Pascal coefficient, ignoring the −2.",
        difficulty: "core",
        guideRef: "binomial-expansion",
        hints: ["Which entry of row 4 of Pascal's triangle goes with {{x^2}}?", "The other factor is {{(-2)^2}}. What sign is that?"],
        strategy: "Use Pascal's triangle",
      },
      {
        kind: "mcq",
        id: "probability-m2-q13",
        question:
          "A pencil case holds 3 red, 4 green and 5 blue pens. Mei takes three pens at random, without replacement.\n\nWork out the probability that she takes one pen of each colour.",
        options: ["{{1/22}}", "{{3/11}}", "{{5/24}}", "{{5/144}}"],
        answerIndex: 1,
        explanation:
          "One order, e.g. red, green, blue: {{3/12 * 4/11 * 5/10 = 60/1320 = 1/22}}. The three colours can come in 3! = 6 orders, each with the same probability (same numerators and denominators, just rearranged), so P = {{6 * 1/22 = 3/11}}. {{1/22}} counts only one order. {{5/24}} uses 12 as every denominator (with replacement). {{5/144}} makes both mistakes.",
        difficulty: "challenge",
        guideRef: "tree-diagrams",
        hints: ["Work out the probability for one particular order of colours.", "How many orders of three different colours are there?", "Does each order have the same probability?"],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "probability-m2-q14",
        question:
          "A bag contains 5 green balls and x yellow balls. Siti takes a ball at random, notes its colour and **puts it back**. She then takes a second ball at random. The probability that the two balls are different colours is {{4/9}}.\n\nWork out the value of x.",
        options: ["2.5 or 10", "2.5", "4", "10"],
        answerIndex: 3,
        explanation:
          "{{2 * 5/(5+x) * x/(5+x) = 4/9}}, so {{90x = 4(5+x)^2}}, i.e. {{4x^2 - 50x + 100 = 0}}, or {{2x^2 - 25x + 50 = 0}}. This factorises as (2x − 5)(x − 10) = 0, so x = 2.5 or x = 10. You cannot have 2.5 balls, so x = 10. Check: {{2 * 5/15 * 10/15 = 100/225 = 4/9}}. '2.5 or 10' and '2.5' fail to reject the non-integer root. 4 comes from treating {{4/9}} as P(yellow) on one pick.",
        difficulty: "challenge",
        guideRef: "algebraic-probability",
        hints: ["'Different colours' can happen in two orders.", "Set {{2 * 5/(5+x) * x/(5+x)}} equal to {{4/9}} and clear the fractions.", "Solve the quadratic, then ask which roots are possible numbers of balls."],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "probability-m2-q15",
        question:
          "2% of people have a certain condition. A screening test gives a positive result for 95% of people who have the condition, and also (wrongly) for 10% of people who do not.\n\nA person tests positive. Work out the probability that they have the condition, correct to 3 significant figures.",
        options: ["0.162", "0.95", "0.019", "0.117"],
        answerIndex: 0,
        explanation:
          "P(condition and positive) = 0.02 × 0.95 = 0.019. P(no condition and positive) = 0.98 × 0.1 = 0.098. So P(positive) = 0.117 and P(condition | positive) = {{0.019/0.117}} = 0.162 (3 s.f.). Most positives are false alarms because so few people have the condition. 0.95 confuses P(positive | condition) with P(condition | positive). 0.019 is the joint probability, not divided by P(positive). 0.117 is P(positive) itself.",
        difficulty: "challenge",
        guideRef: "tree-diagrams",
        hints: ["Draw a tree: condition / no condition, then positive / negative.", "Find P(positive) by adding both 'positive' paths.", "Given positive: divide the 'condition and positive' path by P(positive)."],
        strategy: "Restrict the sample space",
      },
    ],
  },
  {
    id: "probability-m3",
    title: "MCQ Paper 3 — Exam style",
    questions: [
      {
        kind: "mcq",
        id: "probability-m3-q01",
        question:
          "The table shows the probabilities that a biased spinner lands on each colour.\n\n| Colour | Red | Blue | Green | White |\n|---|---|---|---|---|\n| Probability | 0.2 | 0.35 | ? | 0.15 |\n\nPriya spins the spinner 300 times. Work out an estimate for the number of times it lands on green.",
        options: ["75", "90", "210", "0.3"],
        answerIndex: 1,
        explanation:
          "P(green) = 1 − (0.2 + 0.35 + 0.15) = 0.3, so the estimate is 300 × 0.3 = 90. 75 assumes all four colours are equally likely. 210 is the estimate for *not* green (300 × 0.7). 0.3 is the probability — the question asks for a number of times.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["Find P(green) first, then multiply by the number of spins."],
        strategy: "Use the fact that probabilities sum to 1",
      },
      {
        kind: "mcq",
        id: "probability-m3-q02",
        question:
          "The probability that Ethan wins his chess match is 0.6. The probability that he wins his tennis match is 0.3. The two results are independent.\n\nWork out the probability that he wins **neither** match.",
        options: ["0.1", "0.18", "0.28", "0.72"],
        answerIndex: 2,
        explanation:
          "P(loses chess) = 0.4 and P(loses tennis) = 0.7, so P(neither) = 0.4 × 0.7 = 0.28. 0.1 is 1 − (0.6 + 0.3), which wrongly treats the two wins as mutually exclusive. 0.18 is P(wins both). 0.72 is P(wins at least one) = 1 − 0.28.",
        difficulty: "warmup",
        guideRef: "or-and-rules",
        hints: ["'Neither' means he loses chess **and** loses tennis. Find each of those probabilities."],
        strategy: "Use the complement",
      },
      {
        kind: "mcq",
        id: "probability-m3-q03",
        question:
          "Jun spins a biased spinner twice. The probability that it lands on blue is 0.4 each time. The tree diagram shows the outcomes.\n\nWork out the probability that the two spins give **different** results (one blue and one not blue).",
        diagram: TREE_SPIN,
        options: ["0.48", "0.24", "0.52", "1"],
        answerIndex: 0,
        explanation:
          "Two paths give different results: Blue then Not blue (0.4 × 0.6 = 0.24) and Not blue then Blue (0.6 × 0.4 = 0.24). Total = 0.48. 0.24 counts only one of the two orders. 0.52 is P(same result) = 0.16 + 0.36. 1 adds 0.4 and 0.6 — those are branches from the same point, not a path.",
        difficulty: "warmup",
        guideRef: "tree-diagrams",
        hints: ["Which two paths give one blue and one not blue?", "Multiply along each path, then add."],
        strategy: "Draw a tree diagram",
      },
      {
        kind: "mcq",
        id: "probability-m3-q04",
        question:
          "Two fair spinners are each numbered 1, 2, 3, 4. Both are spun, and the score is the difference between the two numbers (larger minus smaller, or 0 if they are equal).\n\nWork out the probability that the score is 1.",
        options: ["{{1/4}}", "{{3/16}}", "{{1/3}}", "{{3/8}}"],
        answerIndex: 3,
        explanation:
          "A 4 × 4 sample space has 16 equally likely outcomes. A difference of 1 comes from (1, 2), (2, 1), (2, 3), (3, 2), (3, 4), (4, 3): 6 outcomes, so P = {{6/16 = 3/8}}. {{1/4}} assumes the four possible scores 0, 1, 2, 3 are equally likely. {{3/16}} counts (1, 2) and (2, 1) as the same outcome. {{1/3}} assumes the scores 1, 2, 3 are equally likely and forgets 0.",
        difficulty: "warmup",
        guideRef: "basic-probability",
        hints: ["Draw a 4 × 4 sample space table of differences.", "Count the cells showing 1 — both orders count."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "probability-m3-q05",
        question:
          "A jar contains 7 lemon sweets and 3 lime sweets. Zara takes a sweet at random and eats it. She then takes a second sweet at random and eats it.\n\nWork out the probability that both sweets are the **same** flavour.",
        options: ["{{29/50}}", "{{7/15}}", "{{8/15}}", "{{12/25}}"],
        answerIndex: 2,
        explanation:
          "Eating the sweet means no replacement. P(both lemon) = {{7/10 * 6/9 = 42/90}} and P(both lime) = {{3/10 * 2/9 = 6/90}}. Total = {{48/90 = 8/15}}. {{29/50}} = {{(49 + 9)/100}} is *with* replacement. {{7/15}} = {{42/90}} is only the lemon pair. {{12/25}} = {{48/100}} reduces the numerators but forgets that the total drops to 9.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: ["Does the sweet go back? What happens to the total for the second pick?", "'Same flavour' means both lemon OR both lime — two paths."],
        strategy: "Draw a tree diagram",
      },
      {
        kind: "mcq",
        id: "probability-m3-q06",
        question:
          "A and B are two events with P(A) = 0.2, P(B) = 0.6 and P(A or B) = 0.68.\n\nWhich statement is true?",
        options: [
          "A and B are mutually exclusive but not independent",
          "A and B are independent but not mutually exclusive",
          "A and B are both independent and mutually exclusive",
          "A and B are neither independent nor mutually exclusive",
        ],
        answerIndex: 1,
        explanation:
          "From the addition rule, the probability that both happen is 0.2 + 0.6 − 0.68 = 0.12. This is not 0, so the events are **not** mutually exclusive (if they were, the probability of A or B would be 0.8). And 0.2 × 0.6 = 0.12 equals the probability that both happen, so they **are** independent. 'Mutually exclusive' is a trap: independence means one event does not change the chance of the other — it does not mean they cannot happen together.",
        difficulty: "core",
        guideRef: "or-and-rules",
        hints: ["Use P(A or B) = P(A) + P(B) − P(A and B) to find P(A and B).", "Mutually exclusive means P(A and B) = 0. Independent means P(A and B) = P(A) × P(B)."],
        strategy: "Test each definition",
      },
      {
        kind: "mcq",
        id: "probability-m3-q07",
        question:
          "A bag contains 10 counters, x of which are red. Two counters are taken at random without replacement. The probability that both are red is {{1/3}}.\n\nWork out the value of x.",
        options: ["5", "−5", "5.77", "6"],
        answerIndex: 3,
        explanation:
          "{{x/10 * (x-1)/9 = 1/3}} gives {{x(x-1) = 30}}, so {{x^2 - x - 30 = 0}} and (x − 6)(x + 5) = 0. x cannot be negative, so x = 6. Check: {{6/10 * 5/9 = 30/90 = 1/3}}. 5 comes from factorising as (x + 6)(x − 5) — check by expanding. −5 is the rejected root. 5.77 uses {{x/10 * x/10}} (with replacement) and gives a non-whole number of counters.",
        difficulty: "core",
        guideRef: "algebraic-probability",
        hints: ["The second probability is {{(x-1)/9}} — why?", "Multiply, set equal to {{1/3}}, and rearrange to a quadratic = 0.", "Reject any root that cannot be a number of counters."],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "probability-m3-q08",
        question:
          "A box contains 4 red pens and 2 blue pens. Three pens are taken at random without replacement.\n\nWork out the probability that **exactly one** of the pens is blue.",
        options: ["{{3/5}}", "{{1/5}}", "{{4/9}}", "{{4/5}}"],
        answerIndex: 0,
        explanation:
          "One order, blue then red then red: {{2/6 * 4/5 * 3/4 = 24/120 = 1/5}}. The blue pen can be first, second or third — 3 orders, each with probability {{1/5}} — so P = {{3/5}}. {{1/5}} counts only one order. {{4/9}} = {{3 * 1/3 * (2/3)^2}} is *with* replacement. {{4/5}} is P(at least one blue) = {{1 - 4/6 * 3/5 * 2/4}}.",
        difficulty: "core",
        guideRef: "tree-diagrams",
        hints: ["Work out the probability of one order, e.g. B, R, R.", "In how many positions could the blue pen be?"],
        strategy: "Split into cases",
      },
      {
        kind: "mcq",
        id: "probability-m3-q09",
        question:
          "The two-way table shows how 120 students travel to school.\n\n| | MRT | Bus | Car | Total |\n|---|---|---|---|---|\n| Year 10 | 34 | 20 | 6 | 60 |\n| Year 11 | 26 | 25 | 9 | 60 |\n| Total | 60 | 45 | 15 | 120 |\n\nA student who travels by **bus** is chosen at random. Work out the probability that this student is in Year 11.",
        options: ["{{5/24}}", "{{5/9}}", "{{5/12}}", "{{3/8}}"],
        answerIndex: 1,
        explanation:
          "We already know the student travels by bus, so only the 45 bus students count. 25 of them are in Year 11: P = {{25/45 = 5/9}}. {{5/24}} ({{25/120}}) divides by all 120 students — that is P(bus **and** Year 11). {{5/12}} ({{25/60}}) is P(bus given Year 11) — the condition the wrong way round. {{3/8}} ({{45/120}}) is P(bus).",
        difficulty: "core",
        guideRef: "basic-probability",
        hints: ["Which row or column of the table do you restrict to?", "The denominator is the number of bus students."],
        strategy: "Restrict the sample space",
      },
      {
        kind: "mcq",
        id: "probability-m3-q10",
        question:
          "A CCA committee of 8 members must choose a president, a vice-president and a secretary. Nobody can hold more than one role.\n\nIn how many different ways can the three roles be filled?",
        options: ["512", "56", "336", "21"],
        answerIndex: 2,
        explanation:
          "Product rule: 8 choices for president, then 7 for vice-president, then 6 for secretary: 8 × 7 × 6 = 336. 512 = 8³ lets one person hold several roles. 56 counts groups of 3 people but ignores who gets which role (336 ÷ 6). 21 adds the choices (8 + 7 + 6) instead of multiplying.",
        difficulty: "core",
        guideRef: "counting",
        hints: ["How many choices for president? Once chosen, how many for vice-president?", "Successive choices multiply."],
        strategy: "Fill the boxes",
      },
      {
        kind: "mcq",
        id: "probability-m3-q11",
        question:
          "Hana rolls an ordinary dice 600 times. It lands on 6 a total of 150 times.\n\nWhich statement is the best conclusion?",
        options: [
          "The dice is fair, because a 6 came up on some of the rolls",
          "The probability of a 6 on this dice is exactly {{1/4}}",
          "The dice must be broken, because a fair dice would give exactly 100 sixes",
          "The dice is probably biased towards 6, because 150 is far more than the expected 100",
        ],
        answerIndex: 3,
        explanation:
          "A fair dice would be expected to give about 600 × {{1/6}} = 100 sixes. Getting 150 in a large number of trials is far more than random variation would usually produce, so the dice is probably biased towards 6. The relative frequency {{150/600 = 1/4}} is only an *estimate* of the probability, not its exact value. A fair dice will not give *exactly* 100 sixes every time — results vary — and 'a 6 came up' says nothing about fairness.",
        difficulty: "core",
        guideRef: "basic-probability",
        hints: ["How many sixes would you expect from a fair dice in 600 rolls?", "Is a relative frequency an exact probability or an estimate?"],
        strategy: "Estimate first",
      },
      {
        kind: "mcq",
        id: "probability-m3-q12",
        question:
          "The probability that Kenji passes his maths mock is 0.9. The probability that he passes his physics mock is 0.8. The results are independent.\n\nWork out the probability that he passes **at least one** of the two mocks.",
        options: ["0.98", "0.72", "0.26", "0.02"],
        answerIndex: 0,
        explanation:
          "P(fails both) = 0.1 × 0.2 = 0.02, so P(passes at least one) = 1 − 0.02 = 0.98. 0.72 is P(passes both). 0.26 is P(passes exactly one) = 0.9 × 0.2 + 0.1 × 0.8. 0.02 is P(fails both). (Adding 0.9 + 0.8 = 1.7 is impossible — a probability can never exceed 1.)",
        difficulty: "core",
        guideRef: "or-and-rules",
        hints: ["What is the only way he does *not* pass at least one?", "Use 1 − P(fails both)."],
        strategy: "Use the complement",
      },
      {
        kind: "mcq",
        id: "probability-m3-q13",
        question:
          "A bag contains x red counters and 2x blue counters. Two counters are taken at random without replacement. The probability that both are red is {{1/12}}.\n\nHow many counters are in the bag?",
        options: ["9", "3", "6", "It cannot be found, because x appears in every fraction"],
        answerIndex: 0,
        explanation:
          "There are 3x counters. {{x/(3x) * (x-1)/(3x-1) = 1/12}}. The first fraction is {{1/3}}, so {{(x-1)/(3(3x-1)) = 1/12}}, giving 12(x − 1) = 3(3x − 1), so 12x − 12 = 9x − 3 and x = 3. The bag holds 3x = 9 counters. Check: {{3/9 * 2/8 = 6/72 = 1/12}}. 3 is x (the reds only); 6 is the number of blue counters. The equation *does* have a unique solution — the x's partly cancel, leaving a linear equation.",
        difficulty: "challenge",
        guideRef: "algebraic-probability",
        hints: ["How many counters altogether, in terms of x?", "Simplify {{x/(3x)}} first.", "Cross-multiply — the equation turns out to be linear."],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "probability-m3-q14",
        question:
          "Aisha and Olivia play a best-of-three badminton match: the first player to win 2 games wins the match. Aisha wins each game with probability 0.6, independently.\n\nWork out the probability that Aisha wins the match.",
        options: ["0.36", "0.504", "0.6", "0.648"],
        answerIndex: 3,
        explanation:
          "Aisha wins as WW (0.6² = 0.36), or WLW or LWW (each 0.6 × 0.4 × 0.6 = 0.144). Total = 0.36 + 2 × 0.144 = 0.648. 0.36 counts only a 2–0 win. 0.504 includes only one of the two ways to win 2–1. 0.6 assumes the match is as likely to be won as a single game — in fact best-of-three favours the stronger player.",
        difficulty: "challenge",
        guideRef: "tree-diagrams",
        hints: ["The match can end after 2 games or 3 games. List every winning sequence for Aisha.", "There are three: WW, WLW, LWW.", "Multiply along each, then add."],
        strategy: "Split into cases",
      },
      {
        kind: "mcq",
        id: "probability-m3-q15",
        question: "Find the term independent of x in the expansion of {{(x + 2/x)^6}}.",
        options: ["20", "8", "160", "240"],
        answerIndex: 2,
        explanation:
          "Row 6 of Pascal's triangle is 1, 6, 15, 20, 15, 6, 1. The term with r factors of {{2/x}} is (coefficient) × {{x^(6-r) * (2/x)^r}} = (coefficient) × {{2^r * x^(6-2r)}}. The power of x is 0 when r = 3, which uses the middle coefficient 20: {{20 * 2^3 = 160}}. 20 forgets the {{2^3}}. 8 forgets the Pascal coefficient. 240 = 15 × 16 is the {{x^(-2)}} term (r = 4) — the wrong term.",
        difficulty: "challenge",
        guideRef: "binomial-expansion",
        hints: ["Write the power of x in a general term: x from the first part, {{1/x}} from the second.", "For which r does the power of x become 0?", "Use the r = 3 entry of row 6 of Pascal's triangle, and remember {{2^3}}."],
        strategy: "Find a pattern",
      },
    ],
  },
];
