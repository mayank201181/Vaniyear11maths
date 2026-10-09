import type { TopicExtras } from "../types.ts";

export const extras: TopicExtras = {
  hook: "From the top of Marina Bay Sands, about 200 m up, how far out to sea can you see? The Earth's radius R ≈ 6371 km makes a right-angled triangle with your line of sight, and Pythagoras gives {{sqrt((R + h)^2 - R^2)}} ≈ 50 km — far enough to see ships waiting in the Singapore Strait.",
  didYouKnow: [
    "A Babylonian clay tablet called Plimpton 322, written around 1800 BC, lists pairs of numbers such as 119 and 169 that belong to Pythagorean triples (119, 120, 169). It was made more than a thousand years before Pythagoras was born.",
    "There are infinitely many primitive Pythagorean triples (ones with no common factor). Every one of them comes from Euclid's formula {{m^2 - n^2}}, {{2mn}}, {{m^2 + n^2}} with m and n coprime and one of them even.",
    "The word *sine* comes from a mistranslation. The Sanskrit *jyā* (bow-string, i.e. a chord) became the Arabic *jība*, which was later misread as *jaib*, meaning a fold or bay — translated into Latin as *sinus*.",
    "In 1940 Elisha Loomis published *The Pythagorean Proposition* with 367 different proofs of the theorem. One of them was found in 1876 by James Garfield, who later became President of the United States.",
    "No whole numbers satisfy {{a^n + b^n = c^n}} for any power n greater than 2. Pierre de Fermat claimed this in the 1630s; it took until 1994 for Andrew Wiles to prove it.",
    "Your phone's GPS works out your position using distances to satellites, and the maths behind it is a 3D version of Pythagoras: the distance between two points is {{sqrt((x_2 - x_1)^2 + (y_2 - y_1)^2 + (z_2 - z_1)^2)}}.",
  ],
  activities: [
    {
      title: "The builder's 3-4-5 right angle",
      emoji: "🪢",
      materials: ["A long piece of string (about 1.5 m)", "A marker pen", "A ruler or tape measure", "Three pegs, or a friend to help hold corners"],
      steps: [
        "Mark the string every 10 cm until you have 12 equal sections. Tie the ends together to make a loop.",
        "Pull the loop tight into a triangle whose sides are 3, 4 and 5 sections long (30 cm, 40 cm and 50 cm).",
        "Check the corner between the 3 and 4 sides against the corner of a book, a floor tile or a door frame. Is it a right angle?",
        "Now try 5, 5 and 2 sections, and 4, 4 and 4. Which corners are right angles? Explain using {{a^2 + b^2}} and {{c^2}}.",
        "Challenge: with 30 equal sections, find a different right-angled triangle (hint: 5, 12, 13 is too long — try a multiple of 3, 4, 5).",
      ],
      maths: "This is the **converse** of Pythagoras: if {{a^2 + b^2 = c^2}} then the angle opposite c must be 90°. Since {{3^2 + 4^2 = 25 = 5^2}}, the rope forces a perfect right angle. Builders have used this trick for thousands of years to set out square corners for foundations.",
    },
    {
      title: "Measure a tall building with a home-made clinometer",
      emoji: "🏢",
      materials: ["A protractor", "A drinking straw", "Sticky tape", "String and a small weight (a key or washer)", "A tape measure (or count your paces)"],
      steps: [
        "Tape the straw along the straight edge of the protractor. Tie the string to the centre hole so the weight hangs down past the curved edge.",
        "Look through the straw at the top of a tall building, tree or flagpole. Ask a friend to read where the string crosses the scale. The angle of elevation is 90° minus that reading.",
        "Measure the horizontal distance d from where you stand to the foot of the building (pace it out and measure one pace).",
        "Measure the height of your eyes above the ground, e.",
        "Work out the height: {{h = d tan theta + e}}. Repeat from a different distance and compare your two answers.",
      ],
      maths: "Your line of sight, the ground and the building form a right-angled triangle. The height above your eyes is opposite the angle of elevation and the distance is adjacent, so TOA gives {{d tan theta}}. Taking readings from two distances is exactly the method surveyors used — and comparing them shows how sensitive the answer is to small errors in the angle.",
    },
  ],
  bonusDiagrams: [
    {
      title: "A proof of Pythagoras you can see",
      svg: `<svg viewBox="0 0 480 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A large square of side a plus b. Four copies of a right-angled triangle with legs a and b sit in its corners, leaving a tilted square of side c in the middle. Area of the large square equals four triangles plus the tilted square, which simplifies to a squared plus b squared equals c squared."><rect x="0" y="0" width="480" height="260" fill="#ffffff"/><rect x="20" y="20" width="210" height="210" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><polygon points="110,20 230,110 140,230 20,140" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><text x="65" y="15" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">a</text><text x="170" y="15" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">b</text><text x="240" y="65" font-size="13" font-family="sans-serif" fill="#1f2937">a</text><text x="240" y="174" font-size="13" font-family="sans-serif" fill="#1f2937">b</text><text x="185" y="248" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">a</text><text x="80" y="248" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">b</text><text x="12" y="185" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">a</text><text x="12" y="80" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">b</text><text x="160" y="88" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">c</text><text x="80" y="94" font-size="14" font-weight="700" font-family="sans-serif" fill="#1f2937">c</text><text x="125" y="135" font-size="15" font-weight="700" font-family="sans-serif" fill="#1f2937" text-anchor="middle">c²</text><text x="255" y="60" font-size="13" font-family="sans-serif" fill="#1f2937">Big square: (a + b)²</text><text x="255" y="90" font-size="13" font-family="sans-serif" fill="#1f2937">= 4 triangles + tilted square</text><text x="255" y="112" font-size="13" font-family="sans-serif" fill="#1f2937">= 4 × ½ab + c²</text><text x="255" y="142" font-size="13" font-family="sans-serif" fill="#1f2937">a² + 2ab + b² = 2ab + c²</text><text x="255" y="176" font-size="15" font-weight="700" font-family="sans-serif" fill="#1f2937">a² + b² = c²</text></svg>`,
      caption: "Write the area of the big square two ways. Expanding {{(a + b)^2}} gives {{a^2 + 2ab + b^2}}; the four triangles give {{4 * 1/2 ab = 2ab}} plus the tilted square {{c^2}}. Cancel the {{2ab}} and Pythagoras falls out. (The middle shape really is a square: each corner angle is 180° minus the two acute angles of the triangle, which add to 90°.)",
    },
    {
      title: "Where the exact values come from",
      svg: `<svg viewBox="0 0 480 250" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Left: half of an equilateral triangle of side 2, a right-angled triangle with sides 1, root 3 and 2 and angles 30 and 60 degrees. Right: half of a unit square, a right-angled triangle with sides 1, 1 and root 2 and two 45 degree angles."><rect x="0" y="0" width="480" height="250" fill="#ffffff"/><polygon points="60,200 130,200 60,79" fill="#c7d2fe" stroke="#1f2937" stroke-width="2"/><polyline points="70,200 70,190 60,190" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="95" y="220" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1</text><text x="50" y="145" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="end">√3</text><text x="104" y="134" font-size="13" font-family="sans-serif" fill="#1f2937">2</text><text x="108" y="193" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="end">60°</text><text x="66" y="108" font-size="12" font-family="sans-serif" fill="#1f2937">30°</text><text x="95" y="40" font-size="13" font-weight="700" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Half an equilateral triangle</text><text x="170" y="120" font-size="12" font-family="sans-serif" fill="#1f2937">sin 30° = ½</text><text x="170" y="138" font-size="12" font-family="sans-serif" fill="#1f2937">cos 30° = √3/2</text><text x="170" y="156" font-size="12" font-family="sans-serif" fill="#1f2937">tan 60° = √3</text><polygon points="260,200 360,200 260,100" fill="#bbf7d0" stroke="#1f2937" stroke-width="2"/><polyline points="270,200 270,190 260,190" fill="none" stroke="#1f2937" stroke-width="1.5"/><text x="310" y="220" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="middle">1</text><text x="250" y="155" font-size="13" font-family="sans-serif" fill="#1f2937" text-anchor="end">1</text><text x="318" y="142" font-size="13" font-family="sans-serif" fill="#1f2937">√2</text><text x="332" y="193" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="end">45°</text><text x="265" y="128" font-size="12" font-family="sans-serif" fill="#1f2937">45°</text><text x="310" y="60" font-size="13" font-weight="700" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Half a square</text><text x="375" y="138" font-size="12" font-family="sans-serif" fill="#1f2937">sin 45° = √2/2</text><text x="375" y="156" font-size="12" font-family="sans-serif" fill="#1f2937">cos 45° = √2/2</text><text x="375" y="174" font-size="12" font-family="sans-serif" fill="#1f2937">tan 45° = 1</text></svg>`,
      caption: "Cut an equilateral triangle of side 2 in half: the half has hypotenuse 2, base 1 and (by Pythagoras) height {{sqrt(2^2 - 1^2) = sqrt(3)}}, with angles 30°, 60°, 90°. Cut a unit square along its diagonal: sides 1, 1 and {{sqrt(2)}}, with two 45° angles. Every exact value — like {{sin 60° = sqrt(3)/2}} or {{tan 30° = 1/sqrt(3) = sqrt(3)/3}} — can be read straight off these two triangles.",
    },
  ],
  history: {
    title: "Measuring Everest without climbing it",
    story: "In the 1800s the Great Trigonometrical Survey set out to map the whole of India using chains of triangles. Surveyors measured one baseline very carefully on the ground, then used angles and trigonometry to calculate every other distance — and the heights of peaks they could only see from far away. In 1849–50 teams measured angles of elevation to a remote Himalayan summit called Peak XV from stations well over 150 km away. Back in the office, the Indian mathematician Radhanath Sikdar and his colleagues worked through the calculations, correcting for the curve of the Earth and the bending of light in the air. In 1856 the Survey announced that Peak XV was the highest mountain on Earth, at 29,002 feet (about 8840 m). It was named Mount Everest after a former Surveyor General. Today's official height, 8848.86 m, is less than 10 m more.",
  },
};
