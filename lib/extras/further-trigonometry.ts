import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "In the 1850s, surveyors worked out that a mountain nobody had climbed, and that they could only see from more than 100 km away, was the highest on Earth. They had no satellites and no lasers, just a theodolite, a lot of triangles and the sine rule.",
  didYouKnow: [
    "The word *sine* comes from a chain of translations. Indian mathematicians called it *jyā-ardha* (half-chord). In Arabic this became *jība*, written without vowels as *jb*. A 12th-century Latin translator read it as *jaib*, meaning a fold or a bay, and translated it as *sinus*. That is where 'sine' comes from.",
    "The cosine rule is older than trigonometry. Euclid's *Elements* (around 300 BC), Book II, Propositions 12 and 13, prove the obtuse and acute cases using areas of rectangles. They say the same thing as {{a^2 = b^2 + c^2 - 2bc cos A}} but have no cosine in them.",
    "In France the cosine rule is called *le théorème d'Al-Kashi*, after Jamshīd al-Kāshī. He worked in Samarkand in the 15th century and wrote the rule in the trigonometric form you learn today.",
    "The mains electricity in Singapore is 230 V at 50 Hz. The voltage follows a sine curve and goes through 50 full cycles every second, so its period is {{1/50}} of a second.",
    "{{sin^2 theta + cos^2 theta = 1}} is Pythagoras' theorem in disguise. A point on a circle of radius 1 has coordinates (cos θ, sin θ), and its distance from the centre is 1.",
    "Hipparchus of Nicaea (2nd century BC) is credited with the first table of chords, which was the ancestor of the sine table. He used it to predict the positions of the Sun and Moon.",
  ],
  activities: [
    {
      title: "Measure a tree you can't reach",
      emoji: "🌳",
      materials: ["A protractor", "A drinking straw and sticky tape", "String with a small weight (e.g. a key)", "A tape measure (or count paces)", "A calculator"],
      steps: [
        "Make a clinometer. Tape the straw along the straight edge of the protractor and hang the weighted string from its centre. Held level, the string hangs across 90°. When you tilt it to look up through the straw, the angle of elevation is the difference between the string's reading and 90°.",
        "Pick a tall tree or block of flats. Stand at a point P and measure the angle of elevation α to the top, T.",
        "Walk d metres straight towards it, to Q, and measure the new angle of elevation β. It should be bigger than α.",
        "In triangle PQT, the angle at T is β − α (the exterior angle at Q equals the sum of the two opposite interior angles). Use the sine rule: {{QT = (d sin alpha)/(sin(beta - alpha))}}.",
        "Use right-angled trig: the height above your eye is QT × sin β. Add your eye height. Try it again with a different d and see whether you get the same height.",
      ],
      maths: "You never measure the distance to the foot of the tree, which might be behind a fence. The sine rule finds the slant distance QT from one measured length and two angles, and then SOH CAH TOA gives the height. Surveyors used the same idea for mountains. Small errors in the angles matter most when β − α is small, so walk a decent distance.",
    },
    {
      title: "Draw a sine wave with a paper plate",
      emoji: "🎡",
      materials: ["A paper plate (or a circle drawn on card)", "A protractor", "A ruler", "Squared or graph paper", "A pencil"],
      steps: [
        "Mark the centre of the plate and draw a horizontal diameter. Mark a point on the rim at the right-hand end of the diameter. This is 0°.",
        "Rotate anticlockwise in steps of 30°, marking the rim point each time: 30°, 60°, …, 360°.",
        "For each point, measure its height above (+) or below (−) the diameter in cm.",
        "On graph paper, plot height against angle (0° to 360° across). Join the points with a smooth curve.",
        "Divide every height by the radius. Compare your values with sin 30°, sin 60°, sin 90°, … on a calculator. Then repeat with horizontal distances from the centre to get the cos curve.",
      ],
      maths: "Height ÷ radius is the sine of the angle turned, so the plot is the graph of y = r sin θ: a sine wave with amplitude r and period 360°. A capsule on the Singapore Flyer (165 m tall, one turn in about 30 minutes) traces the same curve over time. Its height follows a sine graph that has been stretched and translated.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Where the sine rule comes from",
      svg: `<svg viewBox="0 0 440 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with base AB. A dashed perpendicular of height h drops from C to the base. In the right-angled triangle on the left, h equals b sin A. In the right-angled triangle on the right, h equals a sin B. So b sin A equals a sin B."><rect x="0" y="0" width="440" height="280" fill="#ffffff"/><polygon points="60,210 380,210 250,50" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><line x1="250" y1="50" x2="250" y2="210" stroke="#334155" stroke-width="1.5" stroke-dasharray="5 4"/><path d="M240,210 L240,200 L250,200" fill="none" stroke="#334155" stroke-width="1.2"/><text x="46" y="218" font-size="14" font-family="sans-serif" font-weight="700" fill="#1f2937">A</text><text x="386" y="218" font-size="14" font-family="sans-serif" font-weight="700" fill="#1f2937">B</text><text x="245" y="40" font-size="14" font-family="sans-serif" font-weight="700" fill="#1f2937">C</text><text x="136" y="124" font-size="14" font-family="sans-serif" font-style="italic" fill="#1f2937">b</text><text x="328" y="124" font-size="14" font-family="sans-serif" font-style="italic" fill="#1f2937">a</text><text x="216" y="230" font-size="14" font-family="sans-serif" font-style="italic" fill="#1f2937">c</text><text x="257" y="140" font-size="14" font-family="sans-serif" font-style="italic" fill="#1f2937">h</text><text x="96" y="204" font-size="12" font-family="sans-serif" fill="#334155">A</text><text x="340" y="204" font-size="12" font-family="sans-serif" fill="#334155">B</text><text x="40" y="256" font-size="13" font-family="sans-serif" fill="#1f2937">Left triangle: h = b sin A</text><text x="250" y="256" font-size="13" font-family="sans-serif" fill="#1f2937">Right triangle: h = a sin B</text><text x="40" y="274" font-size="13" font-family="sans-serif" font-weight="700" fill="#1f2937">So b sin A = a sin B, which gives a ÷ sin A = b ÷ sin B</text></svg>`,
      caption: "Drop a perpendicular from C. The same height h can be worked out from either side: {{h = b sin A}} and {{h = a sin B}}. Set them equal and divide by {{sin A sin B}} to get {{a/(sin A) = b/(sin B)}}. Dropping a perpendicular from A instead brings c and C into the rule.",
    },
    {
      title: "sin²θ + cos²θ = 1 on the unit circle",
      svg: `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A circle of radius 1 centred at the origin O. A radius OP makes an angle theta of 40 degrees with the positive x-axis. A vertical line drops from P to N on the x-axis. ON is cos theta, NP is sin theta and OP is 1, so cos squared theta plus sin squared theta equals 1."><rect x="0" y="0" width="440" height="260" fill="#ffffff"/><line x1="20" y1="140" x2="248" y2="140" stroke="#334155" stroke-width="1.2"/><line x1="130" y1="30" x2="130" y2="250" stroke="#334155" stroke-width="1.2"/><circle cx="130" cy="140" r="100" fill="none" stroke="#1f2937" stroke-width="2"/><polygon points="130,140 206.6,140 206.6,75.7" fill="#fde68a" stroke="none"/><line x1="130" y1="140" x2="206.6" y2="75.7" stroke="#1f2937" stroke-width="2.2"/><line x1="206.6" y1="75.7" x2="206.6" y2="140" stroke="#1f2937" stroke-width="2.2"/><line x1="130" y1="140" x2="206.6" y2="140" stroke="#1f2937" stroke-width="2.2"/><path d="M196.6,140 L196.6,130 L206.6,130" fill="none" stroke="#334155" stroke-width="1.2"/><path d="M155,140 A25,25 0 0 0 149.2,123.9" fill="none" stroke="#334155" stroke-width="1.5"/><circle cx="206.6" cy="75.7" r="3.5" fill="#1f2937"/><text x="160" y="134" font-size="12" font-family="sans-serif" fill="#1f2937">θ</text><text x="157" y="100" font-size="13" font-family="sans-serif" font-weight="700" fill="#1f2937">1</text><text x="146" y="157" font-size="12" font-family="sans-serif" fill="#1f2937">cos θ</text><text x="202" y="118" font-size="11" font-family="sans-serif" fill="#1f2937" text-anchor="end">sin θ</text><text x="212" y="70" font-size="13" font-family="sans-serif" font-weight="700" fill="#1f2937">P</text><text x="116" y="156" font-size="13" font-family="sans-serif" font-weight="700" fill="#1f2937">O</text><text x="200" y="156" font-size="13" font-family="sans-serif" font-weight="700" fill="#1f2937">N</text><text x="262" y="70" font-size="12" font-family="sans-serif" fill="#1f2937">P = (cos θ, sin θ)</text><text x="262" y="100" font-size="12" font-family="sans-serif" fill="#1f2937">Pythagoras in ONP:</text><text x="262" y="120" font-size="12" font-family="sans-serif" fill="#1f2937">(cos θ)² + (sin θ)² = 1²</text><text x="262" y="142" font-size="13" font-family="sans-serif" font-weight="700" fill="#1f2937">sin²θ + cos²θ = 1</text><text x="262" y="178" font-size="12" font-family="sans-serif" fill="#1f2937">Gradient of OP:</text><text x="262" y="198" font-size="12" font-family="sans-serif" fill="#1f2937">tan θ = NP ÷ ON</text><text x="262" y="218" font-size="13" font-family="sans-serif" font-weight="700" fill="#1f2937">tan θ = sin θ ÷ cos θ</text></svg>`,
      caption: "On a circle of radius 1, the point at angle θ is (cos θ, sin θ). The right-angled triangle ONP has legs cos θ and sin θ and a hypotenuse of 1, so Pythagoras gives {{sin^2 theta + cos^2 theta = 1}}. The gradient of OP is rise ÷ run, which gives {{tan theta = (sin theta)/(cos theta)}}. Both identities still hold when θ is not acute, because the coordinates just become negative.",
    },
  ],
  history: {
    title: "Measuring Everest with triangles",
    story: "In 1802 the Great Trigonometrical Survey of India set out to map the whole subcontinent with a chain of triangles. Surveyors measured one baseline very precisely. After that they measured only angles, using theodolites so heavy that teams of men had to carry them, and worked out every new side with the sine rule. The work was led first by William Lambton and then by George Everest. By the late 1840s the chain had reached the Himalayas. Radhanath Sikdar, a mathematician from Bengal, worked through the observations of a distant summit called Peak XV and found that it was higher than any mountain measured before. In 1856 the Survey announced its height as 29,002 feet. It was later named after Everest, who had never seen it.",
  },
};
