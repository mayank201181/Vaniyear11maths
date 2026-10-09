import type { TopicGuide } from "../../types.ts";

export const guide: TopicGuide = {
  id: "statistics",
  title: "Statistics",
  strand: "Statistics & Probability",
  icon: "📊",
  summary: "Summarise a messy pile of data with one average, one spread and one honest picture.",
  intro:
    "Every 4MA1 Higher paper has statistics marks that are almost free if you know the routines: an estimated mean from a grouped table, a cumulative frequency graph to draw and read, a histogram with unequal class widths, and a 'compare the two distributions' explanation. The skill underneath them all is the same — summarise a data set with an **average** (a typical value) and a **spread** (how much it varies), and know when a picture or a summary might mislead. This chapter shows *why* each method works, so you can handle the twists: working backwards from a mean, reading a histogram with no scale, or estimating from part of a class.",
  guide: [
    // ------------------------------------------------------------------ 1
    {
      id: "averages-raw-data",
      heading: "Averages and spread of raw data",
      discovery: {
        problem:
          "Five friends at a hawker centre have a mean pocket money of $12 a week. Priya joins them, and the mean for all six becomes $13.\n\nHow much pocket money does Priya get? Try to answer **without** guessing the five individual amounts — is there one number about the group that you *do* know?",
        idea:
          "You never need the individual amounts — only the **total**. Five friends with mean $12 have a total of 5 × 12 = $60. Six people with mean $13 have a total of 6 × 13 = $78. Priya brought the difference: 78 − 60 = **$18**.\n\nCheck: she gets $6 more than the old mean, and those $6 shared among 6 people raise the mean by exactly $1 ✓. Whenever a question gives you a mean, turn it straight into a total with {{\"total\" = \"mean\" * n}}.",
      },
      body:
        "**Four summaries of one data set.** For the six values 2, 3, 3, 5, 7, 10 (the diagram):\n\n| Measure | How to find it | Here |\n|---|---|---|\n| Mean | add the values, divide by how many | {{30/6 = 5}} |\n| Median | middle value once the data is **in order**; position {{(n + 1)/2}} | 3.5th value: halfway between 3 and 5, so 4 |\n| Mode | the most common value | 3 |\n| Range | largest − smallest | 10 − 2 = 8 |\n\nThe mean, median and mode are **averages** — a single typical value. The range is a measure of **spread** — how much the values vary. A full description of data always needs one of each.\n\n**The total is the key to every mean question.** Rearranging the definition gives\n\n    total = mean × number of values\n\nThis unlocks three classic exam questions:\n\n- **Missing value**: Wei Ling's mean over 4 tests is 72, so her total is 288. To have a mean of 75 over 5 tests she needs a total of 375, so she must score 375 − 288 = 87.\n- **Value added or removed**: find the old total and the new total; the difference is the value.\n- **Combined mean**: add the two *totals* and divide by the total number of people. You may **not** average the two means unless the groups are the same size — the bigger group pulls the combined mean towards its own mean.\n\n**Choosing an average.**\n\n| Average | Strength | Weakness |\n|---|---|---|\n| Mean | uses every value | dragged by an extreme value (outlier) |\n| Median | not affected by outliers | ignores the actual sizes of most values |\n| Mode | works for non-numerical data (most popular shoe size, favourite MRT line) | there may be several modes, or none |\n\nFor house prices or incomes — where a few very large values exist — the median gives a fairer 'typical' value. That is why the Singapore Department of Statistics reports the *median* household income.\n\n**Changing every value.** If you add 5 to every value, the mean, median and mode all go up by 5, but the range is unchanged (everything shifts together). If you multiply every value by 2, the averages **and** the range all double.\n\n**Working backwards with several averages.** If a question gives the mode, median, mean and range of a few whole numbers, write the ordered list with blanks (□ □ □ □ □), fill in the median position first, then the mode, then use the range and the total.",
      diagram: `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Dot plot of the values 2, 3, 3, 5, 7 and 10 on a number line from 0 to 11, balanced on a triangular pivot at 5, the mean. The median 4 is marked with a dashed line, the mode 3 is labelled above its two dots, and the range from 2 to 10 is shown with an arrow."><rect width="460" height="240" fill="#ffffff"/><line x1="40" y1="150" x2="436" y2="150" stroke="#1f2937" stroke-width="3"/><g stroke="#334155" stroke-width="1"><line x1="40" y1="150" x2="40" y2="156"/><line x1="76" y1="150" x2="76" y2="156"/><line x1="112" y1="150" x2="112" y2="156"/><line x1="148" y1="150" x2="148" y2="156"/><line x1="184" y1="150" x2="184" y2="156"/><line x1="220" y1="150" x2="220" y2="156"/><line x1="256" y1="150" x2="256" y2="156"/><line x1="292" y1="150" x2="292" y2="156"/><line x1="328" y1="150" x2="328" y2="156"/><line x1="364" y1="150" x2="364" y2="156"/><line x1="400" y1="150" x2="400" y2="156"/><line x1="436" y1="150" x2="436" y2="156"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="40" y="192">0</text><text x="76" y="192">1</text><text x="112" y="192">2</text><text x="148" y="192">3</text><text x="184" y="192">4</text><text x="220" y="192">5</text><text x="256" y="192">6</text><text x="292" y="192">7</text><text x="328" y="192">8</text><text x="364" y="192">9</text><text x="400" y="192">10</text><text x="436" y="192">11</text></g><polygon points="220,152 206,176 234,176" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><g fill="#6366f1" stroke="#1f2937" stroke-width="1"><circle cx="112" cy="140" r="7"/><circle cx="148" cy="140" r="7"/><circle cx="148" cy="125" r="7"/><circle cx="220" cy="140" r="7"/><circle cx="292" cy="140" r="7"/><circle cx="400" cy="140" r="7"/></g><line x1="184" y1="70" x2="184" y2="150" stroke="#b91c1c" stroke-width="1.5" stroke-dasharray="5,4"/><text x="184" y="64" font-family="sans-serif" font-size="12" fill="#b91c1c" text-anchor="middle">median = 4</text><text x="140" y="108" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">mode = 3</text><line x1="112" y1="40" x2="400" y2="40" stroke="#334155" stroke-width="1.5"/><polygon points="112,40 120,36 120,44" fill="#334155"/><polygon points="400,40 392,36 392,44" fill="#334155"/><text x="256" y="32" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">range = 10 − 2 = 8</text><text x="220" y="212" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">mean = 5: the balance point</text><text x="230" y="232" font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle">distances from 5: −3, −2, −2, 0, +2, +5 → total 0</text></svg>`,
      diagramCaption:
        "The mean is the balance point of the data: the distances below 5 (−3, −2, −2) exactly cancel the distances above (+2, +5). The median 4 splits the six values into two halves; the mode 3 is the tallest stack.",
      workedExamples: [
        {
          title: "Combined mean",
          problem:
            "In a mock exam, class 11A has 12 students with a mean mark of 64. Class 11B has 18 students with a mean mark of 74. Work out the mean mark of all 30 students.",
          steps: [
            "Turn each mean into a total. 11A: 12 × 64 = 768. 11B: 18 × 74 = 1332.",
            "Combined total: 768 + 1332 = 2100.",
            "Combined mean: {{2100/30 = 70}}.",
            "Sense check: 70 is between 64 and 74, and closer to 74 because 11B is the bigger class ✓.",
            "Averaging the two means gives {{(64 + 74)/2 = 69}} — wrong, because it treats a class of 12 as if it had as many students as a class of 18.",
          ],
          answer: "70",
          yourTurn: {
            question:
              "Your turn: Wei Ling's mean score over 4 tests is 72. What must she score in her 5th test so that her mean over all 5 tests is 75?",
            answer: { type: "number", value: 87 },
            solution:
              "Total now: 4 × 72 = 288. Total needed: 5 × 75 = 375. She needs 375 − 288 = **87**. Check: {{(288 + 87)/5 = 375/5 = 75}} ✓.",
          },
        },
        {
          title: "Working backwards from several averages",
          problem:
            "Five positive whole numbers have a mode of 3, a median of 5, a mean of 6 and a range of 9. Find the five numbers.",
          steps: [
            "Write them in order as □ □ □ □ □. The median is the 3rd value, so the list is □ □ 5 □ □.",
            "The mode is 3, so 3 appears at least twice. Since 3 < 5, the 3s must be the 1st and 2nd values: 3, 3, 5, □, □. (Three 3s would make the median 3.)",
            "Range 9 and smallest value 3, so the largest is 3 + 9 = 12: 3, 3, 5, □, 12.",
            "Mean 6, so the total is 5 × 6 = 30. The missing value is 30 − (3 + 3 + 5 + 12) = 7.",
            "Check: 3, 3, 5, 7, 12 — in order ✓, mode 3 ✓, median 5 ✓, mean {{30/5 = 6}} ✓, range 9 ✓.",
          ],
          answer: "3, 3, 5, 7, 12",
        },
      ],
      keyPoints: [
        "Mean = total ÷ number of values, so **total = mean × n** — the key to every 'missing value' or 'combined mean' question.",
        "Median: put the data in order first; it is the {{(n + 1)/2}}th value.",
        "Never average two means unless the groups are the same size — combine the totals.",
        "The median and mode resist outliers; the mean and range are dragged by them.",
        "Adding k to every value shifts every average by k but leaves the range unchanged.",
        "A description of data needs an average **and** a measure of spread.",
      ],
      whyItWorks:
        "The mean is the value that would make every data value equal while keeping the same total: six people sharing a total of 30 equally would each get 5. That is why **total = mean × n** — it is the definition read backwards.\n\nIt is also the **balance point**. Each value's distance from the mean (its deviation) is {{x - \"mean\"}}, and the deviations always add to zero: {{Σ(x - \"mean\") = Σx - n * \"mean\" = \"total\" - \"total\" = 0}}. In the diagram, −3 − 2 − 2 + 0 + 2 + 5 = 0, so the beam balances at 5.\n\nThe median only cares about **order**, not size: replace the 10 by 1000 and the median is still 4, while the mean jumps to 170. That is the precise sense in which the median 'resists outliers'.",
      strategies: ["Work backwards", "Introduce a variable", "Draw a diagram", "Check by substituting"],
      thinkDeeper:
        "Find four positive whole numbers whose **mean < median < mode**. Then find four whose mode < median < mean. Is it possible to have five numbers where the mean is bigger than every value except one? What does that tell you about using the mean as 'typical'?",
    },

    // ------------------------------------------------------------------ 2
    {
      id: "quartiles-iqr",
      heading: "Quartiles and interquartile range",
      discovery: {
        problem:
          "Ravi times his journey to school by MRT on 11 days (minutes):\n\n    3, 5, 6, 8, 9, 11, 12, 14, 15, 18, 40\n\nOn the 40-minute day the train broke down. Without that day, his range would be 18 − 3 = 15 minutes; with it, the range is 37 minutes.\n\nHas his commute really become more than twice as variable? Can you invent a measure of spread that a single breakdown day **cannot** wreck?",
        idea:
          "Ignore the extremes at both ends. Split the ordered data into four equal quarters and measure the spread of the **middle half** only.\n\nThe lower quartile Q1 (3rd value) is 6, the median (6th) is 11 and the upper quartile Q3 (9th) is 15. The **interquartile range** is {{Q_3 - Q_1 = 15 - 6 = 9}} minutes.\n\nChange the 40 to 19, or to 400 — the IQR stays 9. The breakdown day lives in the top quarter, which the IQR deliberately ignores.",
      },
      body:
        "**Quartiles** split ordered data into four equal parts:\n\n- the **lower quartile** {{Q_1}} has a quarter of the data below it,\n- the **median** {{Q_2}} has half below it,\n- the **upper quartile** {{Q_3}} has three-quarters below it.\n\nThe **interquartile range** {{\"IQR\" = Q_3 - Q_1}} is the spread of the middle 50% of the data.\n\n**Finding quartiles from a list of n values** (Edexcel's convention):\n\n| Value | Position in the ordered list |\n|---|---|\n| {{Q_1}} | {{(n + 1)/4}}th |\n| median | {{(n + 1)/2}}th |\n| {{Q_3}} | {{3(n + 1)/4}}th |\n\nFor 15 values: the 4th, 8th and 12th values. For 11 values: the 3rd, 6th and 9th. Exam questions are usually designed so these positions are whole numbers (n = 7, 11, 15, 19 …). If a position ends in .5, take the value halfway between the two neighbours. An equivalent way to think: Q1 is the median of the lower half and Q3 the median of the upper half (leave the middle value out when n is odd).\n\n> **Always order the data first.** Finding the '4th value' of an unordered list is the most common way to lose these marks.\n\n**Why the IQR beats the range.** The range uses only the two most extreme values, so a single outlier can change it hugely. The IQR uses the middle half, so it is **resistant** to outliers. Pair the measures sensibly: **median with IQR** (both resistant), **mean with range** (both use the extremes).\n\n**Comparing two distributions** — a classic 2-mark question. Write **two** comparisons:\n\n1. **An average**: 'On average, class 11N scored higher than 11T, because 11N's median (62) is higher than 11T's (58).'\n2. **A spread**: '11T's marks were more consistent, because 11T's IQR (9) is smaller than 11N's (18).'\n\nEach comparison must (a) quote the statistics, (b) say which is bigger, and (c) say what that **means in the context** — 'higher marks', 'more consistent journey times', 'heavier durians'. 'The median is bigger' on its own scores nothing. Note that a *smaller* spread means *more consistent* — and that for times in a race, a *lower* average is *better*.\n\n**Large or grouped data sets** (cumulative frequency, next sections) use positions {{n/4}}, {{n/2}} and {{(3n)/4}} instead — with 80 values the '+1' makes no real difference to a reading from a graph.",
      diagram: `<svg viewBox="0 0 460 225" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Number line from 0 to 40 with eleven dots at 3, 5, 6, 8, 9, 11, 12, 14, 15, 18 and 40. Dashed lines mark the lower quartile 6, the median 11 and the upper quartile 15. A bracket shows the interquartile range 9 below the line, and a longer bracket shows the range 37, stretched by the outlier 40."><rect width="460" height="225" fill="#ffffff"/><rect x="90" y="108" width="90" height="22" fill="#bbf7d0" fill-opacity="0.7"/><line x1="30" y1="130" x2="450" y2="130" stroke="#1f2937" stroke-width="2"/><g stroke="#334155" stroke-width="1"><line x1="30" y1="130" x2="30" y2="136"/><line x1="80" y1="130" x2="80" y2="136"/><line x1="130" y1="130" x2="130" y2="136"/><line x1="180" y1="130" x2="180" y2="136"/><line x1="230" y1="130" x2="230" y2="136"/><line x1="280" y1="130" x2="280" y2="136"/><line x1="330" y1="130" x2="330" y2="136"/><line x1="380" y1="130" x2="380" y2="136"/><line x1="430" y1="130" x2="430" y2="136"/></g><g font-family="sans-serif" font-size="11" fill="#334155" text-anchor="middle"><text x="30" y="148">0</text><text x="80" y="148">5</text><text x="130" y="148">10</text><text x="180" y="148">15</text><text x="230" y="148">20</text><text x="280" y="148">25</text><text x="330" y="148">30</text><text x="380" y="148">35</text><text x="430" y="148">40</text></g><g fill="#6366f1" stroke="#1f2937" stroke-width="1"><circle cx="60" cy="120" r="5"/><circle cx="80" cy="120" r="5"/><circle cx="90" cy="120" r="5"/><circle cx="110" cy="120" r="5"/><circle cx="120" cy="120" r="5"/><circle cx="140" cy="120" r="5"/><circle cx="150" cy="120" r="5"/><circle cx="170" cy="120" r="5"/><circle cx="180" cy="120" r="5"/><circle cx="210" cy="120" r="5"/></g><circle cx="430" cy="120" r="5" fill="#fecaca" stroke="#b91c1c" stroke-width="1.5"/><text x="430" y="104" font-family="sans-serif" font-size="11" fill="#b91c1c" text-anchor="middle">outlier</text><g stroke="#1f2937" stroke-width="1.5" stroke-dasharray="4,3"><line x1="90" y1="70" x2="90" y2="130"/><line x1="140" y1="56" x2="140" y2="130"/><line x1="180" y1="70" x2="180" y2="130"/></g><g font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle"><text x="90" y="64">Q1 = 6</text><text x="140" y="50">median = 11</text><text x="180" y="64">Q3 = 15</text></g><line x1="90" y1="172" x2="180" y2="172" stroke="#15803d" stroke-width="2"/><line x1="90" y1="166" x2="90" y2="178" stroke="#15803d" stroke-width="2"/><line x1="180" y1="166" x2="180" y2="178" stroke="#15803d" stroke-width="2"/><text x="135" y="192" font-family="sans-serif" font-size="12" fill="#15803d" text-anchor="middle">IQR = 15 − 6 = 9</text><line x1="60" y1="202" x2="430" y2="202" stroke="#b91c1c" stroke-width="1.5"/><line x1="60" y1="197" x2="60" y2="207" stroke="#b91c1c" stroke-width="1.5"/><line x1="430" y1="197" x2="430" y2="207" stroke="#b91c1c" stroke-width="1.5"/><text x="300" y="220" font-family="sans-serif" font-size="12" fill="#b91c1c" text-anchor="middle">range = 40 − 3 = 37</text></svg>`,
      diagramCaption:
        "Ravi's 11 journey times. Q1, the median and Q3 are the 3rd, 6th and 9th values. The shaded middle half gives IQR = 9, untouched by the 40-minute outlier that stretches the range to 37.",
      workedExamples: [
        {
          title: "Quartiles from a list",
          problem:
            "The numbers of push-ups done in one minute by 15 members of a school CCA are:\n\n    24, 18, 31, 45, 12, 27, 20, 38, 15, 23, 29, 17, 34, 21, 26\n\nWork out the interquartile range.",
          steps: [
            "Order the data: 12, 15, 17, **18**, 20, 21, 23, **24**, 26, 27, 29, **31**, 34, 38, 45. (Count: still 15 values ✓.)",
            "n = 15. {{Q_1}} is the {{(15 + 1)/4}} = 4th value = 18.",
            "The median is the {{(15 + 1)/2}} = 8th value = 24.",
            "{{Q_3}} is the {{3(15 + 1)/4}} = 12th value = 31.",
            "IQR = 31 − 18 = **13** push-ups.",
            "Compare: the range is 45 − 12 = 33, more than double the IQR — mostly because of the single 45.",
          ],
          answer: "IQR = 13",
          yourTurn: {
            question:
              "Your turn: the marks of 11 students in a quiz out of 60 are 41, 35, 52, 47, 38, 60, 44, 49, 33, 55, 46. Find the interquartile range.",
            answer: { type: "number", value: 14 },
            solution:
              "Ordered: 33, 35, **38**, 41, 44, **46**, 47, 49, **52**, 55, 60. With n = 11, {{Q_1}} is the 3rd value (38) and {{Q_3}} is the 9th value (52). IQR = 52 − 38 = **14**.",
          },
        },
        {
          title: "Comparing two distributions in context",
          problem:
            "Two Year 11 classes sat the same mock paper.\n\n| | 11N | 11T |\n|---|---|---|\n| Median | 62 | 58 |\n| IQR | 18 | 9 |\n| Range | 55 | 60 |\n\nCompare the marks of the two classes.",
          steps: [
            "Average: 11N's median (62) is higher than 11T's (58), so **on average 11N scored higher** marks.",
            "Spread: 11T's IQR (9) is smaller than 11N's (18), so **11T's marks were more consistent** (less spread out).",
            "Why use the IQR, not the range? 11T's range (60) is larger, which seems to say the opposite — but the range can be stretched by one very high or very low mark. The IQR describes the middle half of the class, so it is the better measure here.",
            "Pair median with IQR: both ignore the extremes, so they tell one consistent story.",
          ],
          answer: "On average 11N scored higher (median 62 > 58); 11T's marks were more consistent (IQR 9 < 18).",
        },
      ],
      keyPoints: [
        "Order the data before finding any quartile.",
        "For a list of n values: {{Q_1}} is the {{(n + 1)/4}}th, the median the {{(n + 1)/2}}th, {{Q_3}} the {{3(n + 1)/4}}th value.",
        "IQR = {{Q_3 - Q_1}}: the spread of the middle 50%, resistant to outliers.",
        "Comparing distributions: one comparison of an average, one of a spread — quote the numbers and interpret in context.",
        "Smaller spread = more consistent. Lower average time = faster, which may be 'better'.",
        "For large grouped data (cumulative frequency) use {{n/4}}, {{n/2}}, {{(3n)/4}}.",
      ],
      whyItWorks:
        "Any measure built from the two extremes is at the mercy of the most unusual value in the data — one breakdown day, one mis-recorded mark. The quartiles, like the median, depend only on the **order** of the values in the middle of the list. You can move the top value anywhere above {{Q_3}} (or the bottom value anywhere below {{Q_1}}) without changing which values sit in the 3rd and 9th positions, so the IQR cannot change.\n\nWhy {{(n + 1)/4}}? With 11 values there are 12 'gaps' if you include the two ends, and the quartiles sit at the quarter-points of that: positions 3, 6 and 9 divide the list into four groups of two values with a quartile value between each pair of groups — the same reasoning that puts the median at {{(n + 1)/2}}.",
      strategies: ["Make it simpler", "Consider extremes", "Draw a diagram"],
      thinkDeeper:
        "Can two data sets have the same median and the same IQR but look completely different? Can a data set have IQR = 0 but range = 100? Build a set of 7 numbers for each case, then explain what the IQR **can't** tell you about a distribution.",
    },

    // ------------------------------------------------------------------ 3
    {
      id: "frequency-tables",
      heading: "Frequency tables and grouped data",
      discovery: {
        problem:
          "A netball team recorded how many goals Siti scored in each of 20 matches.\n\n| Goals | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| Frequency | 4 | 7 | 5 | 3 | 1 |\n\nEthan says: 'The mean is {{(4 + 7 + 5 + 3 + 1)/5 = 4}} goals.' Mei says: 'The mean is {{(0 + 1 + 2 + 3 + 4)/5 = 2}} goals.'\n\nCan either be right? Siti never scored more than 4 in any match, and she usually scored 0, 1 or 2. What is the real total number of goals?",
        idea:
          "The table is 20 matches in disguise: four 0s, seven 1s, five 2s, three 3s and one 4. The total number of goals is\n\n    0 × 4 + 1 × 7 + 2 × 5 + 3 × 3 + 4 × 1 = 30\n\nand the number of matches is 4 + 7 + 5 + 3 + 1 = 20, so the mean is {{30/20 = 1.5}} goals.\n\nEthan found the mean of the **frequencies** (an average number of matches!). Mei ignored the frequencies altogether. Multiplying each value by its frequency — the **fx** column — rebuilds the total.",
      },
      body:
        "**Discrete frequency tables.** Each row tells you how many times a value occurs. Add an **fx** column (value × frequency).\n\n| Goals x | Frequency f | fx |\n|---|---|---|\n| 0 | 4 | 0 |\n| 1 | 7 | 7 |\n| 2 | 5 | 10 |\n| 3 | 3 | 9 |\n| 4 | 1 | 4 |\n| **Total** | **20** | **30** |\n\n- **Mean** = Σfx ÷ Σf = {{30/20 = 1.5}}. (Σ means 'add up'.)\n- **Mode** = the value with the highest *frequency*: 1 goal (not 7!).\n- **Median** = the {{(20 + 1)/2}} = 10.5th value. Count down a running total: the 0s are values 1–4, the 1s are values 5–11. Both the 10th and 11th values are 1, so the median is 1.\n- **Range** = 4 − 0 = 4 (largest *value* minus smallest *value*, not frequencies).\n\n**Grouped data.** When data is grouped into classes such as {{1 < m <= 1.5}}, you no longer know the exact values, so you can only **estimate**.\n\n- **Modal class**: the class with the highest frequency (for equal-width classes).\n- **Median class**: the class containing the {{(n + 1)/2}}th value — use a running total. (For large n, many textbooks use the {{n/2}}th; it nearly always gives the same class.)\n- **Estimated mean**: assume every value sits at its class **midpoint**, then use Σfx ÷ Σf with x = midpoint.\n- **Estimated range**: the largest *possible* range is (upper bound of the top class) − (lower bound of the bottom class). The true range could be smaller.\n\n**Why only an estimate?** Inside a class you don't know where the values are. The midpoint assumes they balance around the middle. If the values in a class bunch towards one end, the estimate is off — but over several classes the errors tend to partly cancel.\n\n**Inequality notation.** {{1.5 < m <= 2}} means 'more than 1.5, up to and including 2'. So a mass of exactly 2 kg goes in this class, not the next one. The midpoint is {{(1.5 + 2)/2 = 1.75}}.\n\n**Frequency polygons** (the diagram): plot each frequency at its class **midpoint** and join with straight lines. They are handy for comparing two distributions on one set of axes.\n\n**Working backwards.** If the mean of a frequency table is given but one frequency is unknown (say k), write Σfx and Σf in terms of k, set {{(Σfx)/(Σf)}} equal to the mean and solve the linear equation.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Bar chart of the masses of 50 durians in classes of width 0.5 kilograms from 1 to 3.5 kilograms, with frequencies 6, 14, 18, 8 and 4. A frequency polygon joins points plotted at the class midpoints 1.25, 1.75, 2.25, 2.75 and 3.25. The tallest bar, 2 to 2.5 kilograms, is labelled modal class."><rect width="480" height="320" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="60" y1="215" x2="450" y2="215"/><line x1="60" y1="160" x2="450" y2="160"/><line x1="60" y1="105" x2="450" y2="105"/><line x1="60" y1="50" x2="450" y2="50"/></g><g fill="#c7d2fe" stroke="#334155" stroke-width="1"><rect x="60" y="204" width="76" height="66"/><rect x="136" y="116" width="76" height="154"/><rect x="212" y="72" width="76" height="198"/><rect x="288" y="182" width="76" height="88"/><rect x="364" y="226" width="76" height="44"/></g><polyline points="98,204 174,116 250,72 326,182 402,226" fill="none" stroke="#b45309" stroke-width="2.5"/><g fill="#b45309"><circle cx="98" cy="204" r="4"/><circle cx="174" cy="116" r="4"/><circle cx="250" cy="72" r="4"/><circle cx="326" cy="182" r="4"/><circle cx="402" cy="226" r="4"/></g><line x1="60" y1="270" x2="455" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="42" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="54" y="274">0</text><text x="54" y="219">5</text><text x="54" y="164">10</text><text x="54" y="109">15</text><text x="54" y="54">20</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="60" y="287">1</text><text x="136" y="287">1.5</text><text x="212" y="287">2</text><text x="288" y="287">2.5</text><text x="364" y="287">3</text><text x="440" y="287">3.5</text></g><text x="250" y="308" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">Mass m (kg)</text><text x="18" y="160" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" transform="rotate(-90 18 160)">Frequency</text><text x="250" y="64" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">modal class</text><text x="402" y="100" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">frequency polygon:</text><text x="402" y="114" font-family="sans-serif" font-size="11" fill="#b45309" text-anchor="middle">plot at midpoints</text></svg>`,
      diagramCaption:
        "Masses of 50 durians. Each class is represented by its midpoint (orange dots) — exactly the assumption used to estimate the mean. The modal class is {{2 < m <= 2.5}}.",
      workedExamples: [
        {
          title: "Averages from a discrete frequency table",
          problem:
            "The table shows the number of goals Siti scored in 20 netball matches.\n\n| Goals | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| Frequency | 4 | 7 | 5 | 3 | 1 |\n\nFind the mean, median, mode and range.",
          steps: [
            "fx column: 0, 7, 10, 9, 4. Σfx = 30 and Σf = 20.",
            "Mean = {{30/20 = 1.5}} goals.",
            "Median: the {{(20 + 1)/2}} = 10.5th value. Running totals: 4 (zeros), 11 (ones). The 10th and 11th values are both 1, so the median is 1 goal.",
            "Mode: the highest frequency is 7, which belongs to 1 goal. Mode = 1 goal.",
            "Range: 4 − 0 = 4 goals.",
          ],
          answer: "Mean 1.5, median 1, mode 1, range 4",
          yourTurn: {
            question:
              "Your turn: the number of books read over the holidays by 20 students is shown.\n\n| Books | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n| Frequency | 3 | 6 | 8 | 2 | 1 |\n\nWork out the mean number of books.",
            answer: { type: "number", value: 2.6 },
            solution:
              "fx: 3, 12, 24, 8, 5, so Σfx = 52. Σf = 20. Mean = {{52/20 = 2.6}} books.",
          },
        },
        {
          title: "Estimated mean, modal class, median class",
          problem:
            "The masses of 50 durians are recorded.\n\n| Mass m (kg) | Frequency |\n|---|---|\n| {{1 < m <= 1.5}} | 6 |\n| {{1.5 < m <= 2}} | 14 |\n| {{2 < m <= 2.5}} | 18 |\n| {{2.5 < m <= 3}} | 8 |\n| {{3 < m <= 3.5}} | 4 |\n\n(a) Write down the modal class. (b) Find the class containing the median. (c) Work out an estimate for the mean mass. (d) Write down the largest possible range.",
          steps: [
            "(a) The highest frequency is 18, so the modal class is {{2 < m <= 2.5}}.",
            "(b) The median is the 25.5th value. Running totals: 6, 20, 38 … The 25th and 26th values lie in the third class, {{2 < m <= 2.5}}.",
            "(c) Midpoints: 1.25, 1.75, 2.25, 2.75, 3.25. fx: 6 × 1.25 = 7.5; 14 × 1.75 = 24.5; 18 × 2.25 = 40.5; 8 × 2.75 = 22; 4 × 3.25 = 13.",
            "Σfx = 7.5 + 24.5 + 40.5 + 22 + 13 = 107.5. Estimated mean = {{107.5/50 = 2.15}} kg.",
            "Sense check: 2.15 kg is inside the modal and median class ✓.",
            "(d) Largest possible range = 3.5 − 1 = 2.5 kg (lightest could be just over 1 kg, heaviest 3.5 kg).",
          ],
          answer: "(a) {{2 < m <= 2.5}} (b) {{2 < m <= 2.5}} (c) 2.15 kg (d) 2.5 kg",
          yourTurn: {
            question:
              "Your turn: 20 students recorded how long their homework took.\n\n| Time t (min) | {{0 < t <= 10}} | {{10 < t <= 20}} | {{20 < t <= 30}} |\n|---|---|---|---|\n| Frequency | 5 | 8 | 7 |\n\nWork out an estimate for the mean time, in minutes.",
            answer: { type: "number", value: 16 },
            solution:
              "Midpoints 5, 15, 25. fx: 25, 120, 175, so Σfx = 320. Σf = 20. Estimated mean = {{320/20 = 16}} minutes.",
          },
        },
      ],
      keyPoints: [
        "Mean from a table = Σfx ÷ Σf. Divide by the total **frequency**, not the number of rows.",
        "The mode is the value (or class) with the highest frequency — not the frequency itself.",
        "Median: find its position {{(n + 1)/2}}, then count down a running total.",
        "Grouped data: use midpoints, so the mean is an **estimate**. Say why if asked: the exact values are unknown.",
        "Largest possible range = top of the highest class − bottom of the lowest class.",
        "{{a < x <= b}} includes b but not a — check where boundary values belong.",
      ],
      whyItWorks:
        "Σfx is just the ordinary total, written efficiently: seven 1s add to 1 × 7, five 2s add to 2 × 5, and so on. Σf is just the number of values. So Σfx ÷ Σf is exactly 'total ÷ how many' — the same mean you already know.\n\nFor grouped data, the midpoint is the best single guess for values spread evenly across a class: if the values in {{2 < m <= 2.5}} were spread uniformly, their mean really would be 2.25. Any class where the values lean low is often balanced by another where they lean high, which is why the estimate is usually close.",
      strategies: ["Make it simpler", "Introduce a variable", "Estimate first", "Check by substituting"],
      thinkDeeper:
        "In the durian table, what is the **smallest** and the **largest** the true mean could possibly be? (Put every durian at the bottom, then the top, of its class.) How far can the estimate 2.15 kg be from the truth — and would narrower classes help?",
    },

    // ------------------------------------------------------------------ 4
    {
      id: "cumulative-frequency",
      heading: "Cumulative frequency graphs",
      discovery: {
        problem:
          "80 students recorded their journey time to school.\n\n| Time t (min) | {{0 < t <= 10}} | {{10 < t <= 20}} | {{20 < t <= 30}} | {{30 < t <= 40}} | {{40 < t <= 50}} | {{50 < t <= 60}} |\n|---|---|---|---|---|---|---|\n| Frequency | 5 | 15 | 20 | 25 | 10 | 5 |\n\nIf the 80 students lined up from quickest to slowest, the median is the student in the middle of the line. **How many students took 30 minutes or less?** How many took 40 minutes or less? Can you now say roughly how long the middle student took — without any raw data?",
        idea:
          "Keep a **running total**: 5 took 10 min or less, 20 took 20 min or less, 40 took 30 min or less, 65 took 40 min or less, 75 took 50 min or less, and all 80 took 60 min or less.\n\nThe 40th student — the middle of 80 — took about **30 minutes**. These running totals are **cumulative frequencies**, and plotting them lets you read off *any* position in the line: the 20th student, the 60th, the slowest 10% …",
      },
      body:
        "**Cumulative frequency** (CF) is a running total of the frequencies: the number of values **up to and including** the end of each class.\n\n| Time t (min) | Frequency | Cumulative frequency |\n|---|---|---|\n| {{0 < t <= 10}} | 5 | 5 |\n| {{10 < t <= 20}} | 15 | 20 |\n| {{20 < t <= 30}} | 20 | 40 |\n| {{30 < t <= 40}} | 25 | 65 |\n| {{40 < t <= 50}} | 10 | 75 |\n| {{50 < t <= 60}} | 5 | 80 |\n\nThe last cumulative frequency always equals the total — a free check.\n\n**Drawing the graph**\n\n1. Plot each cumulative frequency at the **upper bound** of its class: (10, 5), (20, 20), (30, 40), (40, 65), (50, 75), (60, 80).\n2. Start at the **lower bound** of the first class with CF 0: (0, 0).\n3. Join with a smooth curve or straight lines (both are accepted). Never join the last point back to zero, and do not draw a bar chart.\n\nThe graph rises from left to right — it can never go down, because a running total never decreases. Where it is **steepest**, the data is most bunched.\n\n**Reading the graph** (n = 80): go **across** from the cumulative frequency axis to the curve, then **down** to the data axis.\n\n| To find | Read across at | Here |\n|---|---|---|\n| Lower quartile {{Q_1}} | {{n/4}} = 20 | 20 min |\n| Median | {{n/2}} = 40 | 30 min |\n| Upper quartile {{Q_3}} | {{(3n)/4}} = 60 | 38 min |\n| IQR | | 38 − 20 = 18 min |\n| 90th percentile | 90% of 80 = 72 | 47 min |\n\n**'How many more than …?'** Go **up** from the data axis to the curve, then **across** to read the CF, and subtract from the total. More than 45 minutes: CF at 45 is 70, so 80 − 70 = **10** students. Exam questions love this last subtraction — reading off 70 and stopping is the classic slip.\n\n**Comparing two groups.** Draw both curves on the same axes. The curve further to the **right** has the larger median. The curve that rises more **steeply** in the middle has the smaller IQR.\n\n**Percentiles.** The kth percentile is the value with k% of the data below it — read across at {{k/100 * n}}. The median is the 50th percentile; {{Q_1}} and {{Q_3}} are the 25th and 75th.",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency graph of journey times for 80 students. Points at (0, 0), (10, 5), (20, 20), (30, 40), (40, 65), (50, 75) and (60, 80) joined by straight lines. Dashed lines read across at cumulative frequencies 20, 40 and 60 and down to times 20, 30 and 38 minutes: the lower quartile, median and upper quartile."><rect width="480" height="320" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="116.7" y1="40" x2="116.7" y2="280"/><line x1="183.3" y1="40" x2="183.3" y2="280"/><line x1="250" y1="40" x2="250" y2="280"/><line x1="316.7" y1="40" x2="316.7" y2="280"/><line x1="383.3" y1="40" x2="383.3" y2="280"/><line x1="450" y1="40" x2="450" y2="280"/><line x1="50" y1="250" x2="450" y2="250"/><line x1="50" y1="220" x2="450" y2="220"/><line x1="50" y1="190" x2="450" y2="190"/><line x1="50" y1="160" x2="450" y2="160"/><line x1="50" y1="130" x2="450" y2="130"/><line x1="50" y1="100" x2="450" y2="100"/><line x1="50" y1="70" x2="450" y2="70"/><line x1="50" y1="40" x2="450" y2="40"/></g><line x1="50" y1="280" x2="455" y2="280" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="280" x2="50" y2="34" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="50" y="296">0</text><text x="116.7" y="296">10</text><text x="183.3" y="296">20</text><text x="250" y="296">30</text><text x="316.7" y="296">40</text><text x="383.3" y="296">50</text><text x="450" y="296">60</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="44" y="284">0</text><text x="44" y="254">10</text><text x="44" y="224">20</text><text x="44" y="194">30</text><text x="44" y="164">40</text><text x="44" y="134">50</text><text x="44" y="104">60</text><text x="44" y="74">70</text><text x="44" y="44">80</text></g><text x="250" y="314" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">Time t (minutes)</text><text x="14" y="160" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" transform="rotate(-90 14 160)">Cumulative frequency</text><g fill="none" stroke-width="1.5" stroke-dasharray="5,4"><polyline points="50,220 183.3,220 183.3,280" stroke="#15803d"/><polyline points="50,160 250,160 250,280" stroke="#b91c1c"/><polyline points="50,100 303.3,100 303.3,280" stroke="#15803d"/></g><polyline points="50,280 116.7,265 183.3,220 250,160 316.7,85 383.3,55 450,40" fill="none" stroke="#4338ca" stroke-width="2.5"/><g fill="#4338ca"><circle cx="50" cy="280" r="3.5"/><circle cx="116.7" cy="265" r="3.5"/><circle cx="183.3" cy="220" r="3.5"/><circle cx="250" cy="160" r="3.5"/><circle cx="316.7" cy="85" r="3.5"/><circle cx="383.3" cy="55" r="3.5"/><circle cx="450" cy="40" r="3.5"/></g><g font-family="sans-serif" font-size="11" text-anchor="start"><text x="187" y="272" fill="#15803d">Q1</text><text x="254" y="272" fill="#b91c1c">median</text><text x="307" y="272" fill="#15803d">Q3</text></g></svg>`,
      diagramCaption:
        "Each point is plotted at the **upper bound** of its class. Reading across at 20, 40 and 60 (a quarter, half and three-quarters of 80) and down gives {{Q_1}} = 20 min, median = 30 min and {{Q_3}} = 38 min.",
      workedExamples: [
        {
          title: "Constructing the cumulative frequency table and graph",
          problem:
            "Use the journey-time table for 80 students (frequencies 5, 15, 20, 25, 10, 5 for the classes {{0 < t <= 10}} up to {{50 < t <= 60}}) to complete a cumulative frequency table, and list the points you would plot.",
          steps: [
            "Running totals: 5; 5 + 15 = 20; 20 + 20 = 40; 40 + 25 = 65; 65 + 10 = 75; 75 + 5 = 80.",
            "Check: the last value, 80, equals the total frequency ✓.",
            "Each CF counts students up to the **end** of its class, so plot at upper bounds: (10, 5), (20, 20), (30, 40), (40, 65), (50, 75), (60, 80).",
            "Add the starting point (0, 0): no student took 0 minutes or less.",
            "Join with a smooth curve or straight line segments — see the diagram.",
          ],
          answer: "CF: 5, 20, 40, 65, 75, 80; plot (0, 0), (10, 5), (20, 20), (30, 40), (40, 65), (50, 75), (60, 80).",
          yourTurn: {
            question: "Your turn: using the same table, how many students took **more than** 40 minutes?",
            answer: { type: "number", value: 15 },
            solution:
              "65 students took 40 minutes or less (the CF at the end of the {{30 < t <= 40}} class). So 80 − 65 = **15** took more than 40 minutes. (Or add the frequencies of the last two classes: 10 + 5 = 15.)",
          },
        },
        {
          title: "Reading the graph",
          problem:
            "Use the cumulative frequency graph in the diagram (80 students, drawn with straight lines between the plotted points) to find (a) the median, (b) the interquartile range, (c) an estimate of the number of students who took more than 45 minutes, (d) the 90th percentile.",
          steps: [
            "(a) {{n/2 = 40}}. Across from 40 to the graph, down: **30 minutes**.",
            "(b) {{n/4 = 20}}: across and down gives {{Q_1}} = 20 min. {{(3n)/4 = 60}}: across and down gives {{Q_3}} = 38 min (60 is {{20/25}} of the way from 40 to 65, so 30 + 8 = 38). IQR = 38 − 20 = **18 minutes**.",
            "(c) Up from 45 min to the graph, across: CF ≈ 70 (halfway between 65 and 75). Then **subtract**: 80 − 70 = **10 students**.",
            "(d) 90% of 80 = 72. Across from 72: between (40, 65) and (50, 75), 7 of the 10 steps up, so t ≈ 40 + 7 = **47 minutes**.",
          ],
          answer: "(a) 30 min (b) 18 min (c) 10 (d) 47 min",
          yourTurn: {
            question:
              "Your turn: use the same graph to estimate how many students took **25 minutes or less**.",
            answer: { type: "number", value: 30, tolerance: 1 },
            solution:
              "Up from 25 min to the graph, then across. 25 is halfway between 20 (CF 20) and 30 (CF 40), so the CF ≈ 30. About **30 students** took 25 minutes or less. ('Or less' means read the CF directly — no subtraction.)",
          },
        },
      ],
      keyPoints: [
        "Cumulative frequency = running total; the last one equals the total frequency.",
        "Plot at the **upper class bound**, start at (lowest bound, 0), join with a curve or straight lines.",
        "Median at {{n/2}}, quartiles at {{n/4}} and {{(3n)/4}}; IQR = {{Q_3 - Q_1}}.",
        "Across then down for a value; up then across for a count.",
        "'More than x' = total − CF at x. Don't forget the subtraction.",
        "Show your reading lines on the graph — they earn method marks.",
      ],
      whyItWorks:
        "The cumulative frequency at a point t counts every value **less than or equal to t**. A class's values are only all counted once you reach the end of the class — which is why the point goes at the upper bound, not the midpoint. Plotting at the midpoint would claim that all 20 students in {{20 < t <= 30}} had arrived by 25 minutes.\n\nJoining the points with a line assumes the values within each class are spread out evenly — the same assumption as using midpoints for the estimated mean. So every reading between plotted points is an **estimate**, and it is the steepness of the graph (lots of values per minute) that tells you where the data is crowded: the steep middle section is exactly where the middle half lives, which is why a steep curve means a small IQR.",
      strategies: ["Draw a diagram", "Estimate first", "Use the inverse"],
      thinkDeeper:
        "Two classes of 80 students have cumulative frequency curves that cross at the point (30, 40). What can you say for certain about their medians? Sketch two curves that cross there where one class has a **much** smaller IQR. Could the curves cross twice?",
    },

    // ------------------------------------------------------------------ 5
    {
      id: "histograms",
      heading: "Histograms with unequal class widths",
      discovery: {
        problem:
          "Hana surveyed 60 students about the time t (minutes) they spent on maths homework last night.\n\n| Time t (min) | {{0 < t <= 10}} | {{10 < t <= 15}} | {{15 < t <= 20}} | {{20 < t <= 30}} | {{30 < t <= 50}} |\n|---|---|---|---|---|---|\n| Frequency | 8 | 9 | 12 | 16 | 15 |\n\nShe draws a bar chart with frequency as the height. The {{30 < t <= 50}} bar is almost as tall as the tallest and it's 20 minutes wide, so it looks like the most crowded part of the data.\n\nBut is it? In which class are students **most tightly packed** — the most students *per minute* of time?",
        idea:
          "Divide each frequency by the class width:\n\n| Class | {{0 < t <= 10}} | {{10 < t <= 15}} | {{15 < t <= 20}} | {{20 < t <= 30}} | {{30 < t <= 50}} |\n|---|---|---|---|---|---|\n| Students per minute | 0.8 | 1.8 | 2.4 | 1.6 | 0.75 |\n\nThe 30–50 class is actually the **least** crowded; 15–20 is the busiest. This 'per minute' value is the **frequency density**. Use it as the height of each bar, and then the **area** of each bar shows the frequency — wide classes no longer look bigger than they are.",
      },
      body:
        "When classes have **different widths**, a bar chart of frequency is misleading: a wide class collects more values simply because it is wide. A **histogram** fixes this by plotting\n\n    frequency density = frequency ÷ class width\n\non the vertical axis. Then\n\n    area of bar = frequency density × class width = frequency\n\nso the **area** of each bar, not its height, represents the frequency.\n\n**Drawing a histogram**\n\n1. Work out each class width from the boundaries (for {{10 < t <= 15}}, width 5).\n2. Add a frequency density column: frequency ÷ width.\n3. Draw a **continuous** horizontal scale (no gaps between bars) and label the vertical axis **'Frequency density'** — not 'Frequency'.\n4. Draw each bar from the lower to the upper class bound with height = frequency density.\n\n| Time t (min) | Frequency | Width | Frequency density |\n|---|---|---|---|\n| {{0 < t <= 10}} | 8 | 10 | 0.8 |\n| {{10 < t <= 15}} | 9 | 5 | 1.8 |\n| {{15 < t <= 20}} | 12 | 5 | 2.4 |\n| {{20 < t <= 30}} | 16 | 10 | 1.6 |\n| {{30 < t <= 50}} | 15 | 20 | 0.75 |\n\n**Reading a histogram.** Frequency = frequency density × class width. For the 20–30 bar: 1.6 × 10 = 16 students.\n\n**Part of a class.** To estimate how many values lie in part of a class, take the matching fraction of the bar's area — assuming values are spread evenly within the class. Students who spent between 12 and 25 minutes (shaded in the diagram):\n\n    12 to 15: 1.8 × 3 = 5.4\n    15 to 20: 2.4 × 5 = 12\n    20 to 25: 1.6 × 5 = 8\n    total ≈ 25.4, so about 25 students\n\n**No numbers on the vertical axis?** A common exam twist. Use a bar whose frequency you *do* know to find the scale. If a bar of width 5 and height 9 small squares represents 9 students, then 1 small square of height over a width of 5 represents 1 student — work out 'students per unit of area' and apply it to every other bar.\n\n**From a histogram you can also find:**\n\n- the total frequency (add all the bar areas),\n- an estimated mean (rebuild the frequency table, then use midpoints),\n- the class containing the median — or an estimate of the median, by finding where the area reaches half the total.\n\nThe tallest bar shows the class with the highest **density**, which is not necessarily the class with the highest frequency (the 20–30 class has the highest frequency, 16, but the 15–20 bar is taller).",
      diagram: `<svg viewBox="0 0 480 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of homework times for 60 students with unequal class widths. Bars: 0 to 10 minutes height 0.8, 10 to 15 height 1.8, 15 to 20 height 2.4, 20 to 30 height 1.6, 30 to 50 height 0.75, with frequencies 8, 9, 12, 16 and 15 written inside. The region from 12 to 25 minutes is shaded yellow."><rect width="480" height="320" fill="#ffffff"/><g stroke="#e2e8f0" stroke-width="1"><line x1="50" y1="232" x2="450" y2="232"/><line x1="50" y1="184" x2="450" y2="184"/><line x1="50" y1="136" x2="450" y2="136"/><line x1="50" y1="88" x2="450" y2="88"/><line x1="50" y1="40" x2="450" y2="40"/></g><g fill="#c7d2fe" stroke="#334155" stroke-width="1"><rect x="50" y="203.2" width="80" height="76.8"/><rect x="130" y="107.2" width="40" height="172.8"/><rect x="170" y="49.6" width="40" height="230.4"/><rect x="210" y="126.4" width="80" height="153.6"/><rect x="290" y="208" width="160" height="72"/></g><g fill="#fde68a" fill-opacity="0.8"><rect x="146" y="107.2" width="24" height="172.8"/><rect x="170" y="49.6" width="40" height="230.4"/><rect x="210" y="126.4" width="40" height="153.6"/></g><g fill="none" stroke="#334155" stroke-width="1"><rect x="130" y="107.2" width="40" height="172.8"/><rect x="170" y="49.6" width="40" height="230.4"/><rect x="210" y="126.4" width="80" height="153.6"/></g><line x1="146" y1="107.2" x2="146" y2="280" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3"/><line x1="250" y1="126.4" x2="250" y2="280" stroke="#b45309" stroke-width="1.5" stroke-dasharray="4,3"/><g font-family="sans-serif" font-size="13" fill="#1f2937" text-anchor="middle"><text x="90" y="246">8</text><text x="158" y="200">9</text><text x="190" y="170">12</text><text x="270" y="210">16</text><text x="370" y="250">15</text></g><line x1="50" y1="280" x2="455" y2="280" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="280" x2="50" y2="34" stroke="#1f2937" stroke-width="1.5"/><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="end"><text x="44" y="284">0</text><text x="44" y="236">0.5</text><text x="44" y="188">1.0</text><text x="44" y="140">1.5</text><text x="44" y="92">2.0</text><text x="44" y="44">2.5</text></g><g font-family="sans-serif" font-size="11" fill="#1f2937" text-anchor="middle"><text x="50" y="296">0</text><text x="130" y="296">10</text><text x="170" y="296">15</text><text x="210" y="296">20</text><text x="290" y="296">30</text><text x="370" y="296">40</text><text x="450" y="296">50</text></g><g font-family="sans-serif" font-size="10" fill="#b45309" text-anchor="middle"><text x="146" y="100">12</text><text x="250" y="119">25</text></g><text x="250" y="314" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle">Time t (minutes)</text><text x="14" y="160" font-family="sans-serif" font-size="12" fill="#1f2937" text-anchor="middle" transform="rotate(-90 14 160)">Frequency density</text></svg>`,
      diagramCaption:
        "Height = frequency density; **area** = frequency (the number inside each bar). The tallest bar (15–20 min) is the most crowded class even though 20–30 has the larger frequency. The shaded area from 12 to 25 minutes is about 5.4 + 12 + 8 ≈ 25 students.",
      workedExamples: [
        {
          title: "Frequency densities and part of a class",
          problem:
            "Use Hana's homework data (classes {{0 < t <= 10}}, {{10 < t <= 15}}, {{15 < t <= 20}}, {{20 < t <= 30}}, {{30 < t <= 50}} with frequencies 8, 9, 12, 16, 15).\n\n(a) Work out the frequency density for each class. (b) Estimate the number of students who spent between 12 and 25 minutes on homework.",
          steps: [
            "(a) Widths 10, 5, 5, 10, 20. Densities: {{8/10 = 0.8}}, {{9/5 = 1.8}}, {{12/5 = 2.4}}, {{16/10 = 1.6}}, {{15/20 = 0.75}}.",
            "(b) 12 to 25 covers part of three classes. Take the area of each part: frequency density × width of the part.",
            "12 to 15 (3 of the 5 minutes in its class): 1.8 × 3 = 5.4.",
            "15 to 20 (the whole class): 12.",
            "20 to 25 (5 of the 10 minutes): 1.6 × 5 = 8.",
            "Total ≈ 5.4 + 12 + 8 = 25.4, so about **25 students**.",
          ],
          answer: "(a) 0.8, 1.8, 2.4, 1.6, 0.75 (b) about 25",
          yourTurn: {
            question:
              "Your turn: using the same histogram, estimate the number of students who spent between 5 and 15 minutes on homework.",
            answer: { type: "number", value: 13 },
            solution:
              "5 to 10 is half of the first class: 0.8 × 5 = 4. 10 to 15 is the whole second class: 9. Total ≈ 4 + 9 = **13** students.",
          },
        },
        {
          title: "A histogram with no scale on the vertical axis",
          problem:
            "A histogram shows the masses m (kg) of some adults. The vertical axis has no numbers. The bar for {{40 < m <= 60}} is 3 cm tall and represents 30 people. The bar for {{60 < m <= 70}} is 7 cm tall. How many people does it represent?",
          steps: [
            "Find the frequency density for the known bar: {{30/20 = 1.5}} people per kg.",
            "That bar is 3 cm tall, so 1 cm of height means 1.5 ÷ 3 = 0.5 people per kg.",
            "The {{60 < m <= 70}} bar is 7 cm tall: frequency density = 7 × 0.5 = 3.5.",
            "Frequency = 3.5 × 10 = **35 people**.",
            "Area check: known bar 20 × 3 = 60 'units' for 30 people, so 2 units per person. New bar: 10 × 7 = 70 units, so 35 people ✓.",
          ],
          answer: "35 people",
          yourTurn: {
            question:
              "Your turn: on the same histogram, the bar for {{70 < m <= 100}} is 2 cm tall. How many people does it represent?",
            answer: { type: "number", value: 30 },
            solution:
              "1 cm of height = 0.5 people per kg, so the density is 2 × 0.5 = 1. Frequency = 1 × 30 = **30 people**. (Area: 30 × 2 = 60 units ÷ 2 units per person = 30 ✓.)",
          },
        },
      ],
      keyPoints: [
        "Frequency density = frequency ÷ class width; frequency = frequency density × class width.",
        "In a histogram the **area** of a bar represents the frequency, not the height.",
        "Label the vertical axis 'Frequency density'; no gaps between bars; continuous horizontal scale.",
        "Part of a class: frequency density × width of the part (assumes values spread evenly).",
        "No vertical scale? Use a bar you know to find people per unit of area.",
        "The tallest bar is the most **dense** class, not necessarily the most frequent.",
      ],
      whyItWorks:
        "Frequency density is exactly like population density. Singapore's population density is roughly 8000 people per km²; multiply by an area in km² and you get a number of people. In a histogram, the density (students per minute) times the width (minutes) gives students.\n\nThis is why widths and heights must work together. If you merged the two 5-minute classes 10–15 and 15–20 into one 10-minute class of 21 students, its density would be {{21/10 = 2.1}} — the average of 1.8 and 2.4 — and its bar would have the same total area as the two separate bars. Areas add correctly however you group the data; heights alone never could.",
      strategies: ["Draw a diagram", "Use the inverse", "Make it simpler", "Check by substituting"],
      thinkDeeper:
        "Use the histogram to estimate the **median** homework time. (Hint: find where the total area to the left reaches 30.) Compare your answer with the estimated mean from midpoints. Why might they differ — what does the long, low bar from 30 to 50 do to each?",
    },
  ],
  learn: {
    flashcards: [
      { front: "Mean from a frequency table", back: "Σfx ÷ Σf — multiply each value by its frequency, add, divide by the total frequency." },
      { front: "A group of n values has mean m. What is their total?", back: "{{n * m}}. 'Total = mean × number' unlocks missing-value and combined-mean questions." },
      { front: "Combined mean of 12 students (mean 64) and 18 students (mean 74)", back: "{{(768 + 1332)/30 = 70}} — not {{(64 + 74)/2 = 69}}." },
      { front: "Position of the median of n ordered values", back: "The {{(n + 1)/2}}th value." },
      { front: "Positions of the quartiles in a list of n values", back: "{{Q_1}}: {{(n + 1)/4}}th; {{Q_3}}: {{3(n + 1)/4}}th. Order the data first!" },
      { front: "What does the interquartile range measure?", back: "The spread of the middle 50% of the data: {{Q_3 - Q_1}}. It is not affected by outliers." },
      { front: "Every value is increased by 5. What happens to the mean, median and range?", back: "Mean and median go up by 5; the range is unchanged." },
      { front: "Comparing two distributions: what do you need?", back: "One comparison of an average and one of a spread — quote the values and interpret in context." },
      { front: "Midpoint of the class {{20 < t <= 30}}", back: "25. The estimated mean assumes every value in the class is 25." },
      { front: "Why is a mean from grouped data only an estimate?", back: "The exact values are unknown; we assume each value is at its class midpoint." },
      { front: "Modal class vs median class", back: "Modal class: highest frequency. Median class: the class containing the {{(n + 1)/2}}th value (use a running total)." },
      { front: "Largest possible range from a grouped table", back: "Upper bound of the highest class − lower bound of the lowest class." },
      { front: "Where do you plot points on a cumulative frequency graph?", back: "At the **upper bound** of each class, starting from (lowest bound, 0)." },
      { front: "Median and quartiles from a CF graph with n = 80", back: "Read across at 40 (median), 20 ({{Q_1}}) and 60 ({{Q_3}}), then down." },
      { front: "CF graph: how many are **more than** 45?", back: "Up from 45, across to read the CF, then subtract from the total." },
      { front: "Frequency density", back: "Frequency ÷ class width. Plot it on the vertical axis of a histogram." },
      { front: "Frequency from a histogram bar", back: "Frequency density × class width = area of the bar." },
      { front: "Which measures are resistant to outliers?", back: "Median, mode and IQR. The mean and range are both dragged by extreme values." },
    ],
    mustKnow: [
      "Can I find the mean, median, mode and range of a small set of discrete data?",
      "Can I work backwards from a mean — finding a missing value or a combined mean using total = mean × n?",
      "Can I choose the most appropriate average and explain the effect of an outlier?",
      "Can I find the lower quartile, upper quartile and interquartile range from a data set?",
      "Can I compare two distributions using an average and a measure of spread, interpreted in context?",
      "Can I find the mean, median, mode and range from a discrete frequency table?",
      "Can I find the modal class and the class containing the median from a grouped frequency table?",
      "Can I estimate the mean from grouped data using midpoints, and explain why it is only an estimate?",
      "Can I estimate the range (largest possible range) from a grouped frequency table?",
      "Can I construct a cumulative frequency table and graph, plotting at the upper class bounds?",
      "Can I use a cumulative frequency graph to find the median, quartiles, IQR, percentiles and 'how many more than' a value?",
      "Can I calculate frequency densities and draw a histogram with unequal class widths?",
      "Can I read frequencies from a histogram, including estimating the frequency in part of a class or using a bar of known frequency to find the scale?",
    ],
    misconceptions: [
      {
        wrong: "The mean of a frequency table is the total of the frequencies divided by the number of rows.",
        right: "That averages the frequencies, not the data. Use Σfx ÷ Σf: multiply each value by its frequency, add, then divide by the total frequency.",
      },
      {
        wrong: "The mode of a frequency table is the biggest frequency (e.g. 'the mode is 7').",
        right: "The mode is the **value** with the biggest frequency (e.g. 1 goal, which happened 7 times).",
      },
      {
        wrong: "The combined mean of two groups is the average of their two means.",
        right: "Only if the groups are the same size. Otherwise add the two totals and divide by the total number of people.",
      },
      {
        wrong: "You can find the median or quartiles by counting along the list as it was given.",
        right: "Quartiles and the median are positions in the **ordered** data. Always sort first.",
      },
      {
        wrong: "Cumulative frequencies are plotted at the class midpoints.",
        right: "Plot at the **upper bound**: the CF counts every value up to the end of the class. Midpoints are for frequency polygons and the estimated mean.",
      },
      {
        wrong: "On a histogram, the height of a bar is the frequency.",
        right: "The height is the frequency **density**. The frequency is the **area**: density × class width.",
      },
      {
        wrong: "A larger IQR means the data has higher values.",
        right: "IQR measures spread, not size. A larger IQR means the data is **less consistent**; the median tells you which is higher on average.",
      },
      {
        wrong: "The estimated mean from grouped data is the exact mean if you work carefully.",
        right: "It is always an estimate — the midpoints stand in for values you don't know. Only the raw data gives the exact mean.",
      },
    ],
    examMistakes: [
      "Estimated mean: dividing Σfx by the number of classes (e.g. 5) instead of by the total frequency (e.g. 50), or using the class width or upper bound instead of the midpoint.",
      "Cumulative frequency graphs: plotting at midpoints or lower bounds, or drawing a bar chart — points must be at the upper class bounds, and the vertical scale must reach the total frequency.",
      "'How many took more than 45 minutes?': reading the cumulative frequency at 45 (70) and giving that as the answer, instead of subtracting from the total (80 − 70 = 10).",
      "Histograms: labelling the vertical axis 'Frequency' or using frequency as the height when the classes have different widths; leaving gaps between bars.",
      "Comparing distributions: writing 'the median of A is bigger' without saying what that means in context, or comparing ranges when IQRs are given — each comparison needs the numbers and an interpretation.",
      "Finding quartiles of a list without putting it in order first, or using the {{n/4}} rule for a short list (Edexcel expects {{(n + 1)/4}} for raw data).",
    ],
    mnemonics: [
      {
        topic: "The three averages and the range",
        device: "'Hey diddle diddle, the median's the middle; you add and divide for the mean. The mode is the one that appears the most, and the range is the difference between.'",
        explanation: "A rhyme for the four definitions. Add for the median: 'once the list is in order'.",
      },
      {
        topic: "Histograms",
        device: "FD = F ÷ CW — 'Frequency Density: Frequency Divided by Class Width'. Picture a triangle with F on top, FD and CW underneath.",
        explanation: "Cover the one you want: F = FD × CW, FD = F ÷ CW, CW = F ÷ FD. The frequency is always the area.",
      },
      {
        topic: "Cumulative frequency",
        device: "'Up to the Upper' — a cumulative frequency counts everything **up to** a point, so plot it at the **upper** bound.",
        explanation: "And to read values: 'across then down' for a time or mass; 'up then across' for how many.",
      },
    ],
    realWorld: [
      {
        title: "Median household income",
        detail:
          "Singapore's Department of Statistics reports **median** monthly household income. A small number of very high earners would pull the mean far above what a typical household earns — a real case of the median resisting outliers.",
        emoji: "🏠",
      },
      {
        title: "Growth charts and percentiles",
        detail:
          "Doctors plot a baby's height and mass on percentile curves built from cumulative frequency data. 'On the 75th percentile' means 75% of babies of that age are lighter — the same reading you do across a CF graph.",
        emoji: "👶",
      },
      {
        title: "Exam grade boundaries",
        detail:
          "Exam boards look at the cumulative distribution of marks when setting grade boundaries, and report the spread of marks as well as the average — the same 'average and spread' story you tell when comparing distributions.",
        emoji: "📝",
      },
      {
        title: "MRT waiting times and service reliability",
        detail:
          "Transport planners care about the **spread** of waiting times, not just the mean: a line where trains come every 3–4 minutes feels far more reliable than one averaging the same but varying from 1 to 10 minutes. Histograms of journey times use unequal classes to show the rare long delays without hiding the detail in the common short waits.",
        emoji: "🚇",
      },
    ],
    videos: [
      { title: "Estimated mean from grouped data", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+estimated+mean+grouped+frequency+table" },
      { title: "Cumulative frequency graphs: median and interquartile range", channel: "Maths Genie", url: "https://www.youtube.com/results?search_query=maths+genie+cumulative+frequency+median+interquartile+range" },
      { title: "Histograms with unequal class widths", channel: "Cognito", url: "https://www.youtube.com/results?search_query=cognito+histograms+frequency+density+unequal+class+widths" },
      { title: "Quartiles and interquartile range from a list", channel: "Corbettmaths", url: "https://www.youtube.com/results?search_query=corbettmaths+quartiles+interquartile+range+list" },
    ],
    formulas: [
      { name: "Mean of raw data", formula: "mean = (sum of the values) ÷ (number of values) = {{(Σx)/n}}", note: "Learn this — not given" },
      { name: "Total from a mean", formula: "total = mean × n", note: "Learn this — not given" },
      { name: "Combined mean", formula: "{{(n_1 m_1 + n_2 m_2)/(n_1 + n_2)}}", note: "Learn this — not given" },
      { name: "Mean from a frequency table", formula: "Σfx ÷ Σf (for grouped data, x = class midpoint, giving an estimate)", note: "Learn this — not given" },
      { name: "Median position (list of n values)", formula: "the {{(n + 1)/2}}th value of the ordered data", note: "Learn this — not given" },
      { name: "Quartile positions (list of n values)", formula: "{{Q_1}}: {{(n + 1)/4}}th value; {{Q_3}}: {{3(n + 1)/4}}th value", note: "Learn this — not given" },
      { name: "Quartiles and median from a cumulative frequency graph", formula: "read across at {{n/4}}, {{n/2}} and {{(3n)/4}}", note: "Learn this — not given" },
      { name: "Interquartile range", formula: "IQR = {{Q_3 - Q_1}}", note: "Learn this — not given" },
      { name: "Range", formula: "largest value − smallest value (grouped: largest possible range = top bound − bottom bound)", note: "Learn this — not given" },
      { name: "Class midpoint", formula: "{{(\"lower bound\" + \"upper bound\")/2}}", note: "Learn this — not given" },
      { name: "Frequency density", formula: "frequency density = frequency ÷ class width; frequency = frequency density × class width", note: "Learn this — not given" },
    ],
  },
};
