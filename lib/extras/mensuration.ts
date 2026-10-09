import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook:
    "Three tennis balls fit snugly in a cylindrical tube. Which is longer: the height of the tube, or the distance around it? Almost everyone says the height — but the height is 3 diameters and the circumference is π diameters, and π is a little more than 3. This topic is about trusting formulas over your eyes.",

  didYouKnow: [
    "Archimedes proved that a sphere has exactly {{2/3}} of the volume of the cylinder that just fits around it — and also exactly {{2/3}} of its surface area (counting the cylinder's two ends). He was so proud of this that he asked for a sphere inside a cylinder to be carved on his tomb.",
    "Take a cone, a sphere and a cylinder that all have radius r and height 2r. Their volumes are {{2/3 pi r^3}}, {{4/3 pi r^3}} and {{2 pi r^3}} — in the exact ratio 1 : 2 : 3.",
    "The Moscow Mathematical Papyrus, written in Egypt nearly 4000 years ago, contains a correct calculation of the volume of a frustum of a square-based pyramid — the same result as the modern formula {{V = 1/3 h (a^2 + ab + b^2)}}, with a and b the sides of the two squares.",
    "If you tied a rope tightly around the Earth's equator and then lengthened it by just {{2 pi}} metres (about 6.28 m), it would stand 1 metre off the ground all the way round. Circumference is {{2 pi r}}, so adding 1 to r always adds exactly {{2 pi}} to the length — whatever the size of the circle.",
    "Using {{4 pi r^2}} with the Earth's mean radius of about 6371 km gives a surface area of roughly 510 million km². About 71% of that is ocean.",
    "Since 1964 the litre has been defined as exactly one cubic decimetre: a cube 10 cm on each side, which is 1000 cm³. That's why you divide cm³ by 1000 to get litres.",
  ],

  activities: [
    {
      title: "Roll a sector into a cone",
      emoji: "🍦",
      materials: ["A sheet of card or thick paper", "A pair of compasses and a protractor", "Scissors and sticky tape", "A ruler"],
      steps: [
        "Draw a circle of radius 10 cm. Use the protractor to mark a sector of 216° and cut it out.",
        "Before you roll it: predict the cone's base radius. The arc becomes the base circumference, so {{2 pi r = 216/360 * 2 pi * 10}}. Work out r.",
        "Now predict the cone's vertical height using Pythagoras with slant height 10 cm.",
        "Roll the sector until the two straight edges just meet and tape them. Measure the base diameter and the height with a ruler. How close were your predictions?",
        "Work out the curved surface area two ways: as {{216/360}} of {{pi * 10^2}}, and as {{pi r l}}. Do they agree?",
      ],
      maths:
        "The arc length of the sector, {{216/360 * 20 pi = 12 pi}} cm, becomes the circumference of the base, so the base radius is 6 cm. The radius of the sector becomes the slant height, 10 cm, and Pythagoras gives a height of 8 cm (a 6-8-10 triangle). The card doesn't stretch, so the curved area is still the sector's area: {{3/5 * 100 pi = 60 pi = pi * 6 * 10}}. That is exactly why the curved surface of a cone is {{pi r l}}.",
    },
    {
      title: "Weigh a ball with water (well, measure it)",
      emoji: "🫙",
      materials: ["A straight-sided glass or jar", "Water", "A ball that fits inside and sinks, or an orange you can push under", "A ruler", "A piece of string"],
      steps: [
        "Measure the inside diameter of the glass and halve it to get its radius R.",
        "Half-fill the glass with water and mark the level. Push the ball completely under the water (with a thin stick or a fingertip) and measure how far the level rises, d.",
        "Work out the volume of water pushed up: a thin cylinder, {{pi R^2 d}}.",
        "Wrap the string around the widest part of the ball to measure its circumference C. Its radius is {{r = C/(2 pi)}}. Now calculate {{4/3 pi r^3}}.",
        "Compare your two volumes. Which measurement do you think caused most of the difference?",
      ],
      maths:
        "The water that rises forms a cylinder of radius R and height d, and its volume equals the volume of the ball — the same idea as every \"water level\" exam question. Small errors grow: because r is cubed, a 3% error in measuring the circumference gives about a 9% error in the sphere's volume.",
    },
  ],

  bonusDiagrams: [
    {
      title: "Why the curved surface of a cone is πrl",
      svg: `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: a cone with base radius r and slant height l, with the base circle highlighted. Right: the same curved surface cut along a slant edge and unrolled into a sector of radius l whose highlighted arc has length 2 pi r. The sector's area is the fraction 2 pi r over 2 pi l of a full circle of area pi l squared, which is pi r l."><rect x="0" y="0" width="460" height="240" fill="#ffffff"/><path d="M40,180 L100,40 L160,180" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><path d="M40,180 A60,14 0 0 0 160,180" fill="#c7d2fe" stroke="#d97706" stroke-width="3"/><path d="M40,180 A60,14 0 0 1 160,180" fill="none" stroke="#d97706" stroke-width="1.5" stroke-dasharray="4 3"/><line x1="100" y1="180" x2="160" y2="180" stroke="#334155" stroke-width="1.3" stroke-dasharray="5 4"/><circle cx="100" cy="180" r="2.5" fill="#1f2937"/><text x="130" y="174" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">r</text><text x="138" y="108" font-size="13" font-family="sans-serif" fill="#1f2937">l</text><text x="100" y="222" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">base circumference 2πr</text><text x="205" y="105" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">unroll</text><path d="M180,115 L222,115" stroke="#334155" stroke-width="1.5"/><path d="M222,115 L215,110 M222,115 L215,120" stroke="#334155" stroke-width="1.5" fill="none"/><path d="M335,40 L221.6,79.3 A120,120 0 0 0 448.4,79.3 Z" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><path d="M221.6,79.3 A120,120 0 0 0 448.4,79.3" fill="none" stroke="#d97706" stroke-width="3"/><circle cx="335" cy="40" r="2.5" fill="#1f2937"/><text x="278" y="80" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">l</text><text x="392" y="80" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">l</text><text x="335" y="180" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">arc = 2πr</text><text x="335" y="208" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">area = (2πr ÷ 2πl) × πl² = πrl</text></svg>`,
      caption:
        "Cut the curved surface along a slant edge and flatten it: you get a sector of radius l (the slant height), and its arc is the base circumference {{2 pi r}}. A full circle of radius l would have circumference {{2 pi l}} and area {{pi l^2}}, so the sector is the fraction {{(2 pi r)/(2 pi l) = r/l}} of it. Area = {{r/l * pi l^2 = pi r l}}. The vertical height never appears — which is why πrl needs the slant height.",
    },
    {
      title: "Cone : sphere : cylinder = 1 : 2 : 3",
      svg: `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A cone, a sphere and a cylinder, each with radius r and height 2r. Their volumes are two thirds pi r cubed, four thirds pi r cubed and two pi r cubed, in the ratio 1 to 2 to 3."><rect x="0" y="0" width="460" height="240" fill="#ffffff"/><path d="M35,160 L80,70 L125,160" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M35,160 A45,10 0 0 0 125,160" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><path d="M35,160 A45,10 0 0 1 125,160" fill="none" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/><circle cx="230" cy="115" r="45" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><path d="M185,115 A45,10 0 0 0 275,115" fill="none" stroke="#334155" stroke-width="1.2"/><path d="M185,115 A45,10 0 0 1 275,115" fill="none" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/><line x1="230" y1="115" x2="275" y2="115" stroke="#334155" stroke-width="1.2"/><text x="252" y="105" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">r</text><path d="M335,70 L335,160 A45,10 0 0 0 425,160 L425,70" fill="#bae6fd" stroke="#1f2937" stroke-width="2"/><path d="M335,160 A45,10 0 0 1 425,160" fill="none" stroke="#334155" stroke-width="1.2" stroke-dasharray="4 3"/><ellipse cx="380" cy="70" rx="45" ry="10" fill="#e0f2fe" stroke="#1f2937" stroke-width="2"/><line x1="440" y1="70" x2="440" y2="160" stroke="#334155" stroke-width="1.2"/><line x1="435" y1="70" x2="445" y2="70" stroke="#334155" stroke-width="1.2"/><line x1="435" y1="160" x2="445" y2="160" stroke="#334155" stroke-width="1.2"/><text x="448" y="120" font-size="12" font-family="sans-serif" fill="#1f2937">2r</text><line x1="380" y1="70" x2="425" y2="70" stroke="#334155" stroke-width="1.2"/><text x="402" y="65" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">r</text><text x="80" y="195" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">cone</text><text x="80" y="213" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">⅓πr² × 2r = ⅔πr³</text><text x="230" y="195" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">sphere</text><text x="230" y="213" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">(4/3)πr³</text><text x="380" y="195" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">cylinder</text><text x="380" y="213" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#334155">πr² × 2r = 2πr³</text><text x="230" y="36" font-size="15" font-family="sans-serif" font-weight="bold" text-anchor="middle" fill="#1f2937">1 : 2 : 3</text></svg>`,
      caption:
        "Give all three solids radius r and height 2r. The cone is {{1/3}} of the cylinder ({{2/3 pi r^3}}), the sphere is {{2/3}} of it ({{4/3 pi r^3}}), so cone : sphere : cylinder = 1 : 2 : 3. A neat consequence: the cone and the sphere together have exactly the volume of the cylinder.",
    },
  ],

  history: {
    title: "The tomb with a sphere on it",
    story:
      "Around 225 BC, Archimedes of Syracuse wrote *On the Sphere and Cylinder*. In it he proved that a sphere has two thirds of the volume of the smallest cylinder that contains it, and two thirds of its surface area — the results behind {{4/3 pi r^3}} and {{4 pi r^2}}. He valued this above all his other discoveries and asked for a sphere inside a cylinder to mark his grave. More than a century after his death, in 75 BC, the Roman statesman Cicero was working in Sicily. He searched for the forgotten tomb, found it overgrown with brambles outside one of Syracuse's gates, and recognised it by the small carving of a sphere and a cylinder. He had the site cleared — and wrote about the discovery himself.",
  },
};
