import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "If you built a cat twice as tall, it would weigh 8 times as much but its legs would only be 4 times as strong. That one fact, about how lengths, areas and volumes scale differently, explains why there are no giant insects and why elephants have such thick legs.",
  didYouKnow: [
    "A-series paper (A4, A3, A5 …) uses the ratio {{1 : sqrt(2)}}. Fold an A4 sheet in half and you get an A5 sheet that is exactly *similar* to it. A0 has an area of 1 m², so A4 is {{1/16}} m².",
    "Galileo explained the *square–cube law* in his 1638 book *Two New Sciences*. If an animal is scaled up by k, its weight grows like {{k^3}} but the strength of its bones (which depends on cross-sectional area) only grows like {{k^2}}. Big animals need much thicker bones for their size.",
    "1 litre is exactly the volume of a cube with 10 cm edges: 10 × 10 × 10 = 1000 cm³. So 1 m³ (a cube 100 cm on each edge) holds 1000 litres.",
    "A triangle made of three rigid bars can't change shape. That's SSS congruence in action: three fixed lengths allow only one triangle. A four-bar frame can collapse into a parallelogram, which is why cranes, bridges and roof trusses are built from triangles.",
    "Small animals lose heat faster than large ones because they have more surface area for each unit of volume. When length scales by k, the surface-area-to-volume ratio scales by {{1/k}}. That's one reason a mouse has to eat a much bigger fraction of its body weight each day than an elephant does.",
  ],
  activities: [
    {
      title: "Measure a tree with its shadow",
      emoji: "🌳",
      materials: ["A sunny day", "A metre ruler or straight stick", "A tape measure"],
      steps: [
        "Stand the stick upright on flat ground near a tree, flagpole or lamp post. Measure the stick's height h.",
        "At the same moment, measure the length s of the stick's shadow and the length S of the tree's shadow (from its base to the tip of the shadow).",
        "Work out the tree's height: {{H = h * S/s}}.",
        "Repeat an hour later. The shadows will both be different, but your answer for H should come out about the same.",
      ],
      maths: "The sun is so far away that its rays are effectively parallel. So the stick and its shadow make a right-angled triangle with exactly the same angles as the tree and its shadow: the triangles are **similar**. Corresponding sides are in the same ratio, so {{H/h = S/s}}. This is the same idea as the 'parallel lines' similar-triangle questions in the exam.",
    },
    {
      title: "Folding paper: scale factors you can measure",
      emoji: "📄",
      materials: ["Two sheets of A4 paper", "A ruler", "A calculator"],
      steps: [
        "Measure an A4 sheet (about 29.7 cm × 21.0 cm) and work out {{29.7/21.0}}.",
        "Fold the second sheet in half across its long side to make A5. Measure it and work out the same ratio. What do you notice?",
        "Find the length scale factor from A4 to A5 (for example 21.0 ÷ 29.7). Compare it with {{1/sqrt(2)}} ≈ 0.707.",
        "Work out the area scale factor by squaring your length factor. Does it match the fact that A5 is half of A4?",
        "Fold again to make A6 and predict its length and area scale factors from A4 before you measure.",
      ],
      maths: "A4 and A5 are similar, and A5 has half the area. So the area scale factor is {{1/2}} and the length scale factor is {{sqrt(1/2) = 1/sqrt(2)}}. This is going backwards from area to length, exactly as in the 'area and volume scale factors' section: take the square root of the area ratio.",
    },
  ],
  bonusDiagrams: [
    {
      title: "Why area scales by k²",
      svg: `<svg viewBox="0 0 450 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Three similar triangles with scale factors 1, 2 and 3. The second is divided into 4 copies of the first and the third into 9 copies."><rect x="0" y="0" width="450" height="240" fill="#ffffff"/><polygon points="20,200 80,200 50,148" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="100,200 220,200 160,96" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><polygon points="130,148 190,148 160,200" fill="#fde68a" stroke="#1f2937" stroke-width="1.5"/><polygon points="250,200 430,200 340,44" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><line x1="280" y1="148" x2="400" y2="148" stroke="#1f2937" stroke-width="1.5"/><line x1="310" y1="96" x2="370" y2="96" stroke="#1f2937" stroke-width="1.5"/><line x1="310" y1="200" x2="370" y2="96" stroke="#1f2937" stroke-width="1.5"/><line x1="370" y1="200" x2="400" y2="148" stroke="#1f2937" stroke-width="1.5"/><line x1="370" y1="200" x2="310" y2="96" stroke="#1f2937" stroke-width="1.5"/><line x1="310" y1="200" x2="280" y2="148" stroke="#1f2937" stroke-width="1.5"/><text x="50" y="222" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">k = 1</text><text x="160" y="222" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">k = 2: 4 copies</text><text x="340" y="222" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">k = 3: 9 copies</text></svg>`,
      caption: "Double every length of a triangle and the new one splits into exactly 4 copies of the original; triple every length and it splits into 9. The area scale factor is {{k^2}}. Stack cubes the same way and a cube with double the edge holds {{2^3 = 8}} small cubes, so volume scales by {{k^3}}.",
    },
    {
      title: "Why SSA isn't a congruence test",
      svg: `<svg viewBox="0 0 460 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Angle A is 35 degrees with AB = 8. A side BC of length 5.5 swings from B and meets the base line at two points, C1 and C2, making two different triangles with the same side-side-angle measurements."><rect x="0" y="0" width="460" height="250" fill="#ffffff"/><polygon points="40,200 275.9,34.8 385,200" fill="#bae6fd" stroke="none"/><polygon points="40,200 275.9,34.8 166.8,200" fill="#fde68a" stroke="none"/><line x1="40" y1="200" x2="440" y2="200" stroke="#1f2937" stroke-width="2"/><line x1="40" y1="200" x2="275.9" y2="34.8" stroke="#1f2937" stroke-width="2"/><line x1="275.9" y1="34.8" x2="166.8" y2="200" stroke="#1f2937" stroke-width="2"/><line x1="275.9" y1="34.8" x2="385" y2="200" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><path d="M166.8,200 A198,198 0 0 0 385,200" fill="none" stroke="#334155" stroke-width="1.2" stroke-dasharray="3 4"/><path d="M80,200 A40,40 0 0 0 72.8,177.1" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="92" y="192" font-size="13" font-family="sans-serif" fill="#1f2937">35°</text><text x="30" y="216" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">A</text><text x="280" y="28" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">B</text><text x="158" y="218" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">C₁</text><text x="380" y="218" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">C₂</text><text x="140" y="105" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="end">AB = 8</text><text x="208" y="120" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="end">5.5</text><text x="338" y="112" font-size="13" font-family="sans-serif" fill="#1f2937">5.5</text></svg>`,
      caption: "Fix angle A = 35° and AB = 8, then let BC = 5.5 swing like a compass arm from B. It meets the base line in **two** places, so triangles ABC₁ and ABC₂ share two sides and a non-included angle, yet they are clearly different. That's why SSA (and its relative ASS) is never accepted as a proof of congruence. With SAS the angle sits *between* the sides, so nothing can swing.",
    },
  ],
  history: {
    title: "Thales and the height of the Great Pyramid",
    story: "Thales of Miletus, often called the first Greek mathematician, lived around 600 BC. Ancient writers, including Plutarch and Diogenes Laertius, tell how he worked out the height of the Great Pyramid of Giza, which was far too tall to measure directly. One version says Thales waited until the moment when his own shadow was as long as he was tall. At that moment the pyramid's shadow (measured from the centre of its base) must also equal its height. Plutarch's version uses a stick: the pyramid's height is to the stick's height as the pyramid's shadow is to the stick's shadow. Either way the idea is the same one you use today: the sun's parallel rays make similar triangles, and similar triangles keep their sides in the same ratio.",
  },
};
