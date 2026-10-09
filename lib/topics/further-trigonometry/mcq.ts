// Sine & cosine rules, trig graphs & identities — MCQ papers (3 × 15). Options are shuffled at display time.
// Triangles, sectors and graphs are drawn to scale from the numbers in each question.
import type { Paper } from "../../types.ts";

const D_M1Q01 = `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with angle A = 47 degrees, angle B = 58 degrees and BC = 9 cm."><rect x="0" y="0" width="420" height="280" fill="#ffffff"/><polygon points="74.5,228 345.5,228 236.8,54" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><text x="59.7" y="239" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><path d="M 98.5 228 A 24 24 0 0 0 90.9 210.4" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="111.2" y="216.1" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">47°</text><text x="313.4" y="138.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">9 cm</text><text x="360" y="239.7" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><path d="M 332.8 207.6 A 24 24 0 0 0 321.5 228" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="310.5" y="212.6" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">58°</text><text x="239.2" y="43.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text></svg>`;

const D_M1Q08 = `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of y = sin x for x from 0 to 360 degrees with the dashed line y = 0.4 crossing it twice."><rect x="0" y="0" width="440" height="260" fill="#ffffff"/><line x1="50" y1="225" x2="420" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="225" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">−1</text><line x1="50" y1="173.8" x2="420" y2="173.8" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="173.8" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">−0.5</text><line x1="50" y1="122.5" x2="420" y2="122.5" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="122.5" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">0</text><line x1="50" y1="71.2" x2="420" y2="71.2" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="71.2" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">0.5</text><line x1="50" y1="20" x2="420" y2="20" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="20" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">1</text><line x1="50" y1="20" x2="50" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="50" y="239" font-size="11" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">0°</text><line x1="142.5" y1="20" x2="142.5" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="142.5" y="239" font-size="11" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">90°</text><line x1="235" y1="20" x2="235" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="235" y="239" font-size="11" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">180°</text><line x1="327.5" y1="20" x2="327.5" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="327.5" y="239" font-size="11" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">270°</text><line x1="420" y1="20" x2="420" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="420" y="239" font-size="11" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">360°</text><line x1="50" y1="122.5" x2="420" y2="122.5" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="225" stroke="#1f2937" stroke-width="1.5"/><text x="428" y="112.5" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">x</text><text x="60" y="14" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">y</text><polyline points="50,122.5 51,120.7 52.1,118.9 53.1,117.1 54.1,115.3 55.1,113.6 56.2,111.8 57.2,110 58.2,108.2 59.2,106.5 60.3,104.7 61.3,102.9 62.3,101.2 63.4,99.4 64.4,97.7 65.4,96 66.4,94.2 67.5,92.5 68.5,90.8 69.5,89.1 70.6,87.4 71.6,85.8 72.6,84.1 73.6,82.5 74.7,80.8 75.7,79.2 76.7,77.6 77.8,76 78.8,74.4 79.8,72.8 80.8,71.2 81.9,69.7 82.9,68.2 83.9,66.7 84.9,65.2 86,63.7 87,62.3 88,60.8 89.1,59.4 90.1,58 91.1,56.6 92.1,55.3 93.2,53.9 94.2,52.6 95.2,51.3 96.2,50 97.3,48.8 98.3,47.5 99.3,46.3 100.4,45.1 101.4,44 102.4,42.8 103.4,41.7 104.5,40.6 105.5,39.6 106.5,38.5 107.6,37.5 108.6,36.5 109.6,35.6 110.6,34.6 111.7,33.7 112.7,32.9 113.7,32 114.8,31.2 115.8,30.4 116.8,29.6 117.8,28.9 118.9,28.1 119.9,27.5 120.9,26.8 121.9,26.2 123,25.6 124,25 125,24.5 126.1,24 127.1,23.5 128.1,23 129.1,22.6 130.2,22.2 131.2,21.9 132.2,21.6 133.2,21.3 134.3,21 135.3,20.8 136.3,20.6 137.4,20.4 138.4,20.2 139.4,20.1 140.4,20.1 141.5,20 142.5,20 143.5,20 144.6,20.1 145.6,20.1 146.6,20.2 147.6,20.4 148.7,20.6 149.7,20.8 150.7,21 151.8,21.3 152.8,21.6 153.8,21.9 154.8,22.2 155.9,22.6 156.9,23 157.9,23.5 158.9,24 160,24.5 161,25 162,25.6 163.1,26.2 164.1,26.8 165.1,27.5 166.1,28.1 167.2,28.9 168.2,29.6 169.2,30.4 170.2,31.2 171.3,32 172.3,32.9 173.3,33.7 174.4,34.6 175.4,35.6 176.4,36.5 177.4,37.5 178.5,38.5 179.5,39.6 180.5,40.6 181.6,41.7 182.6,42.8 183.6,44 184.6,45.1 185.7,46.3 186.7,47.5 187.7,48.8 188.8,50 189.8,51.3 190.8,52.6 191.8,53.9 192.9,55.3 193.9,56.6 194.9,58 195.9,59.4 197,60.8 198,62.3 199,63.7 200.1,65.2 201.1,66.7 202.1,68.2 203.1,69.7 204.2,71.2 205.2,72.8 206.2,74.4 207.2,76 208.3,77.6 209.3,79.2 210.3,80.8 211.4,82.5 212.4,84.1 213.4,85.8 214.4,87.4 215.5,89.1 216.5,90.8 217.5,92.5 218.6,94.2 219.6,96 220.6,97.7 221.6,99.4 222.7,101.2 223.7,102.9 224.7,104.7 225.8,106.5 226.8,108.2 227.8,110 228.8,111.8 229.9,113.6 230.9,115.3 231.9,117.1 232.9,118.9 234,120.7 235,122.5 236,124.3 237.1,126.1 238.1,127.9 239.1,129.7 240.1,131.4 241.2,133.2 242.2,135 243.2,136.8 244.2,138.5 245.3,140.3 246.3,142.1 247.3,143.8 248.4,145.6 249.4,147.3 250.4,149 251.4,150.8 252.5,152.5 253.5,154.2 254.5,155.9 255.6,157.6 256.6,159.2 257.6,160.9 258.6,162.5 259.7,164.2 260.7,165.8 261.7,167.4 262.8,169 263.8,170.6 264.8,172.2 265.8,173.8 266.9,175.3 267.9,176.8 268.9,178.3 269.9,179.8 271,181.3 272,182.7 273,184.2 274.1,185.6 275.1,187 276.1,188.4 277.1,189.7 278.2,191.1 279.2,192.4 280.2,193.7 281.2,195 282.3,196.2 283.3,197.5 284.3,198.7 285.4,199.9 286.4,201 287.4,202.2 288.4,203.3 289.5,204.4 290.5,205.4 291.5,206.5 292.6,207.5 293.6,208.5 294.6,209.4 295.6,210.4 296.7,211.3 297.7,212.1 298.7,213 299.8,213.8 300.8,214.6 301.8,215.4 302.8,216.1 303.9,216.9 304.9,217.5 305.9,218.2 306.9,218.8 308,219.4 309,220 310,220.5 311.1,221 312.1,221.5 313.1,222 314.1,222.4 315.2,222.8 316.2,223.1 317.2,223.4 318.2,223.7 319.3,224 320.3,224.2 321.3,224.4 322.4,224.6 323.4,224.8 324.4,224.9 325.4,224.9 326.5,225 327.5,225 328.5,225 329.6,224.9 330.6,224.9 331.6,224.8 332.6,224.6 333.7,224.4 334.7,224.2 335.7,224 336.8,223.7 337.8,223.4 338.8,223.1 339.8,222.8 340.9,222.4 341.9,222 342.9,221.5 343.9,221 345,220.5 346,220 347,219.4 348.1,218.8 349.1,218.2 350.1,217.5 351.1,216.9 352.2,216.1 353.2,215.4 354.2,214.6 355.2,213.8 356.3,213 357.3,212.1 358.3,211.3 359.4,210.4 360.4,209.4 361.4,208.5 362.4,207.5 363.5,206.5 364.5,205.4 365.5,204.4 366.6,203.3 367.6,202.2 368.6,201 369.6,199.9 370.7,198.7 371.7,197.5 372.7,196.2 373.8,195 374.8,193.7 375.8,192.4 376.8,191.1 377.9,189.7 378.9,188.4 379.9,187 380.9,185.6 382,184.2 383,182.7 384,181.3 385.1,179.8 386.1,178.3 387.1,176.8 388.1,175.3 389.2,173.8 390.2,172.2 391.2,170.6 392.2,169 393.3,167.4 394.3,165.8 395.3,164.2 396.4,162.5 397.4,160.9 398.4,159.2 399.4,157.6 400.5,155.9 401.5,154.2 402.5,152.5 403.6,150.8 404.6,149 405.6,147.3 406.6,145.6 407.7,143.8 408.7,142.1 409.7,140.3 410.8,138.5 411.8,136.8 412.8,135 413.8,133.2 414.9,131.4 415.9,129.7 416.9,127.9 417.9,126.1 419,124.3 420,122.5" fill="none" stroke="#4338ca" stroke-width="2.2"/><line x1="50" y1="81.5" x2="420" y2="81.5" stroke="#b45309" stroke-width="1.6" stroke-dasharray="6 4"/><text x="416" y="72.5" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#b45309">y = 0.4</text></svg>`;

const D_M1Q10 = `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O, radius 6 cm. Sector OAB has angle 70 degrees at O; the segment between chord AB and the arc is shaded."><rect x="0" y="0" width="320" height="260" fill="#ffffff"/><path d="M 160 220 L 67.5 88 A 161.2 161.2 0 0 1 252.5 88 Z" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M 67.5 88 A 161.2 161.2 0 0 1 252.5 88 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><text x="160" y="234" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">O</text><text x="53.5" y="88" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">A</text><text x="266.5" y="88" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">B</text><text x="95.8" y="158" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">6 cm</text><path d="M 145.1 198.7 A 26 26 0 0 1 174.9 198.7" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="160" y="178" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">70°</text></svg>`;

const D_M1Q15 = `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Graph of a cosine-shaped curve for x from 0 to 360 degrees. It has a maximum at (0, 5), a minimum at (90, 1), a maximum at (180, 5), a minimum at (270, 1) and a maximum at (360, 5)."><rect x="0" y="0" width="440" height="260" fill="#ffffff"/><line x1="50" y1="225" x2="420" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="225" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">0</text><line x1="50" y1="190.8" x2="420" y2="190.8" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="190.8" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">1</text><line x1="50" y1="156.7" x2="420" y2="156.7" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="156.7" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">2</text><line x1="50" y1="122.5" x2="420" y2="122.5" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="122.5" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">3</text><line x1="50" y1="88.3" x2="420" y2="88.3" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="88.3" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">4</text><line x1="50" y1="54.2" x2="420" y2="54.2" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="54.2" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">5</text><line x1="50" y1="20" x2="420" y2="20" stroke="#e5e7eb" stroke-width="1"/><text x="42" y="20" font-size="11" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">6</text><line x1="50" y1="20" x2="50" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="50" y="239" font-size="11" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">0°</text><line x1="142.5" y1="20" x2="142.5" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="142.5" y="239" font-size="11" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">90°</text><line x1="235" y1="20" x2="235" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="235" y="239" font-size="11" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">180°</text><line x1="327.5" y1="20" x2="327.5" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="327.5" y="239" font-size="11" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">270°</text><line x1="420" y1="20" x2="420" y2="225" stroke="#e5e7eb" stroke-width="1"/><text x="420" y="239" font-size="11" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">360°</text><line x1="50" y1="225" x2="420" y2="225" stroke="#1f2937" stroke-width="1.5"/><line x1="50" y1="20" x2="50" y2="225" stroke="#1f2937" stroke-width="1.5"/><text x="428" y="215" font-size="12" font-family="sans-serif" text-anchor="end" dominant-baseline="middle" fill="#1f2937">x</text><text x="60" y="14" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">y</text><polyline points="50,54.2 51,54.2 52.1,54.3 53.1,54.5 54.1,54.8 55.1,55.2 56.2,55.7 57.2,56.2 58.2,56.8 59.2,57.5 60.3,58.3 61.3,59.1 62.3,60.1 63.4,61.1 64.4,62.2 65.4,63.3 66.4,64.6 67.5,65.8 68.5,67.2 69.5,68.7 70.6,70.2 71.6,71.7 72.6,73.3 73.6,75 74.7,76.8 75.7,78.6 76.7,80.4 77.8,82.3 78.8,84.3 79.8,86.3 80.8,88.3 81.9,90.4 82.9,92.5 83.9,94.7 84.9,96.9 86,99.1 87,101.4 88,103.7 89.1,106 90.1,108.3 91.1,110.6 92.1,113 93.2,115.4 94.2,117.7 95.2,120.1 96.2,122.5 97.3,124.9 98.3,127.3 99.3,129.6 100.4,132 101.4,134.4 102.4,136.7 103.4,139 104.5,141.3 105.5,143.6 106.5,145.9 107.6,148.1 108.6,150.3 109.6,152.5 110.6,154.6 111.7,156.7 112.7,158.7 113.7,160.7 114.8,162.7 115.8,164.6 116.8,166.4 117.8,168.2 118.9,170 119.9,171.7 120.9,173.3 121.9,174.8 123,176.3 124,177.8 125,179.2 126.1,180.4 127.1,181.7 128.1,182.8 129.1,183.9 130.2,184.9 131.2,185.9 132.2,186.7 133.2,187.5 134.3,188.2 135.3,188.8 136.3,189.3 137.4,189.8 138.4,190.2 139.4,190.5 140.4,190.7 141.5,190.8 142.5,190.8 143.5,190.8 144.6,190.7 145.6,190.5 146.6,190.2 147.6,189.8 148.7,189.3 149.7,188.8 150.7,188.2 151.8,187.5 152.8,186.7 153.8,185.9 154.8,184.9 155.9,183.9 156.9,182.8 157.9,181.7 158.9,180.4 160,179.2 161,177.8 162,176.3 163.1,174.8 164.1,173.3 165.1,171.7 166.1,170 167.2,168.2 168.2,166.4 169.2,164.6 170.2,162.7 171.3,160.7 172.3,158.7 173.3,156.7 174.4,154.6 175.4,152.5 176.4,150.3 177.4,148.1 178.5,145.9 179.5,143.6 180.5,141.3 181.6,139 182.6,136.7 183.6,134.4 184.6,132 185.7,129.6 186.7,127.3 187.7,124.9 188.8,122.5 189.8,120.1 190.8,117.7 191.8,115.4 192.9,113 193.9,110.6 194.9,108.3 195.9,106 197,103.7 198,101.4 199,99.1 200.1,96.9 201.1,94.7 202.1,92.5 203.1,90.4 204.2,88.3 205.2,86.3 206.2,84.3 207.2,82.3 208.3,80.4 209.3,78.6 210.3,76.8 211.4,75 212.4,73.3 213.4,71.7 214.4,70.2 215.5,68.7 216.5,67.2 217.5,65.8 218.6,64.6 219.6,63.3 220.6,62.2 221.6,61.1 222.7,60.1 223.7,59.1 224.7,58.3 225.8,57.5 226.8,56.8 227.8,56.2 228.8,55.7 229.9,55.2 230.9,54.8 231.9,54.5 232.9,54.3 234,54.2 235,54.2 236,54.2 237.1,54.3 238.1,54.5 239.1,54.8 240.1,55.2 241.2,55.7 242.2,56.2 243.2,56.8 244.2,57.5 245.3,58.3 246.3,59.1 247.3,60.1 248.4,61.1 249.4,62.2 250.4,63.3 251.4,64.6 252.5,65.8 253.5,67.2 254.5,68.7 255.6,70.2 256.6,71.7 257.6,73.3 258.6,75 259.7,76.8 260.7,78.6 261.7,80.4 262.8,82.3 263.8,84.3 264.8,86.3 265.8,88.3 266.9,90.4 267.9,92.5 268.9,94.7 269.9,96.9 271,99.1 272,101.4 273,103.7 274.1,106 275.1,108.3 276.1,110.6 277.1,113 278.2,115.4 279.2,117.7 280.2,120.1 281.2,122.5 282.3,124.9 283.3,127.3 284.3,129.6 285.4,132 286.4,134.4 287.4,136.7 288.4,139 289.5,141.3 290.5,143.6 291.5,145.9 292.6,148.1 293.6,150.3 294.6,152.5 295.6,154.6 296.7,156.7 297.7,158.7 298.7,160.7 299.8,162.7 300.8,164.6 301.8,166.4 302.8,168.2 303.9,170 304.9,171.7 305.9,173.3 306.9,174.8 308,176.3 309,177.8 310,179.2 311.1,180.4 312.1,181.7 313.1,182.8 314.1,183.9 315.2,184.9 316.2,185.9 317.2,186.7 318.2,187.5 319.3,188.2 320.3,188.8 321.3,189.3 322.4,189.8 323.4,190.2 324.4,190.5 325.4,190.7 326.5,190.8 327.5,190.8 328.5,190.8 329.6,190.7 330.6,190.5 331.6,190.2 332.6,189.8 333.7,189.3 334.7,188.8 335.7,188.2 336.8,187.5 337.8,186.7 338.8,185.9 339.8,184.9 340.9,183.9 341.9,182.8 342.9,181.7 343.9,180.4 345,179.2 346,177.8 347,176.3 348.1,174.8 349.1,173.3 350.1,171.7 351.1,170 352.2,168.2 353.2,166.4 354.2,164.6 355.2,162.7 356.3,160.7 357.3,158.7 358.3,156.7 359.4,154.6 360.4,152.5 361.4,150.3 362.4,148.1 363.5,145.9 364.5,143.6 365.5,141.3 366.6,139 367.6,136.7 368.6,134.4 369.6,132 370.7,129.6 371.7,127.3 372.7,124.9 373.8,122.5 374.8,120.1 375.8,117.7 376.8,115.4 377.9,113 378.9,110.6 379.9,108.3 380.9,106 382,103.7 383,101.4 384,99.1 385.1,96.9 386.1,94.7 387.1,92.5 388.1,90.4 389.2,88.3 390.2,86.3 391.2,84.3 392.2,82.3 393.3,80.4 394.3,78.6 395.3,76.8 396.4,75 397.4,73.3 398.4,71.7 399.4,70.2 400.5,68.7 401.5,67.2 402.5,65.8 403.6,64.6 404.6,63.3 405.6,62.2 406.6,61.1 407.7,60.1 408.7,59.1 409.7,58.3 410.8,57.5 411.8,56.8 412.8,56.2 413.8,55.7 414.9,55.2 415.9,54.8 416.9,54.5 417.9,54.3 419,54.2 420,54.2" fill="none" stroke="#4338ca" stroke-width="2.2"/><circle cx="50" cy="54.2" r="4" fill="#b45309"/><circle cx="142.5" cy="190.8" r="4" fill="#b45309"/><text x="84" y="52.2" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#b45309">(0, 5)</text><text x="142.5" y="204.8" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#b45309">(90, 1)</text></svg>`;

const D_M2Q01 = `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle PQR with angle P = 35 degrees, angle Q = 80 degrees and PQ = 12 cm."><rect x="0" y="0" width="420" height="280" fill="#ffffff"/><polygon points="62.4,232 357.6,232 325.2,48" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><text x="47.2" y="237" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">P</text><text x="371.6" y="239.8" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">Q</text><text x="333.7" y="34.4" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">R</text><text x="210" y="246" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">12 cm</text><path d="M 92.4 232 A 30 30 0 0 0 87 214.8" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="110.1" y="217" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">35°</text><path d="M 335.6 232 A 22 22 0 0 1 353.8 210.3" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="328.5" y="207.6" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">80°</text></svg>`;

const D_M2Q05 = `<svg viewBox="0 0 420 290" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coastguard stations A and B, with B 18 km due east of A. North lines are drawn at A and B. Boat C is on a bearing of 040 degrees from A and 330 degrees from B, so the angle between north and AC at A is 40 degrees and the angle between north and BC at B is 30 degrees."><rect x="0" y="0" width="420" height="290" fill="#ffffff"/><line x1="84" y1="250" x2="84" y2="155" stroke="#1f2937" stroke-width="1.4"/><path d="M 79 163 L 84 153 L 89 163" fill="none" stroke="#1f2937" stroke-width="1.4"/><text x="84" y="146" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">N</text><line x1="336" y1="250" x2="336" y2="155" stroke="#1f2937" stroke-width="1.4"/><path d="M 331 163 L 336 153 L 341 163" fill="none" stroke="#1f2937" stroke-width="1.4"/><text x="336" y="146" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">N</text><polygon points="84,250 336,250 233.3,72.1" fill="#bae6fd" fill-opacity="0.5" stroke="#1f2937" stroke-width="2"/><path d="M 84 220 A 30 30 0 0 1 103.3 227" fill="none" stroke="#b45309" stroke-width="1.4"/><text x="98" y="212" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">40°</text><path d="M 336 220 A 30 30 0 0 0 321 224" fill="none" stroke="#b45309" stroke-width="1.4"/><text x="326" y="203" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#b45309">30°</text><text x="70" y="255" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="350" y="255" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="233.3" y="62.1" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="210" y="270" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">18 km</text></svg>`;

const D_M2Q09 = `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with angle B = 110 degrees, BC = 6 cm and AC = 10 cm."><rect x="0" y="0" width="420" height="280" fill="#ffffff"/><polygon points="148.8,232 338.1,232 81.9,48" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><text x="140" y="245.3" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">B</text><text x="352.9" y="238.1" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">C</text><text x="71.3" y="36" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">A</text><text x="243.5" y="246" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">6 cm</text><text x="223.6" y="121" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">10 cm</text><path d="M 170.8 232 A 22 22 0 0 0 141.3 211.3" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="170.6" y="200.9" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">110°</text></svg>`;

const D_M2Q10 = `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallelogram ABCD with AB = 10 cm, AD = 6 cm and angle DAB = 60 degrees. The diagonal AC is drawn dashed."><rect x="0" y="0" width="420" height="240" fill="#ffffff"/><polygon points="50,200 310,200 388,64.9 128,64.9" fill="#bbf7d0" fill-opacity="0.5" stroke="#1f2937" stroke-width="2"/><line x1="50" y1="200" x2="388" y2="64.9" stroke="#1f2937" stroke-width="1.5" stroke-dasharray="6 4"/><text x="38" y="206" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">A</text><text x="322" y="206" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">B</text><text x="400" y="58.9" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">C</text><text x="116" y="58.9" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">D</text><text x="180" y="218" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">10 cm</text><text x="63" y="132.5" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">6 cm</text><path d="M 80 200 A 30 30 0 0 0 65 174" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="89.8" y="177" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">60°</text></svg>`;

const D_M2Q11 = `<svg viewBox="0 0 280 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="A regular octagon drawn inside a circle of radius 5 cm with centre O. Lines from O to two adjacent vertices form one of eight congruent triangles, which is shaded."><rect x="0" y="0" width="280" height="280" fill="#ffffff"/><circle cx="140" cy="140" r="110" fill="none" stroke="#94a3b8" stroke-width="1.5"/><polygon points="140,140 182.1,38.4 97.9,38.4" fill="#fde68a" stroke="none"/><polygon points="97.9,38.4 38.4,97.9 38.4,182.1 97.9,241.6 182.1,241.6 241.6,182.1 241.6,97.9 182.1,38.4" fill="none" stroke="#1f2937" stroke-width="2"/><line x1="140" y1="140" x2="182.1" y2="38.4" stroke="#1f2937" stroke-width="1.5"/><line x1="140" y1="140" x2="97.9" y2="38.4" stroke="#1f2937" stroke-width="1.5"/><text x="140" y="154" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">O</text><text x="177" y="93.2" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">5 cm</text></svg>`;

const D_M2Q14 = `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O, radius 6 cm. Sector OAB has angle 60 degrees at O; the segment between chord AB and the arc is shaded."><rect x="0" y="0" width="320" height="260" fill="#ffffff"/><path d="M 160 220 L 79.4 80.4 A 161.2 161.2 0 0 1 240.6 80.4 Z" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M 79.4 80.4 A 161.2 161.2 0 0 1 240.6 80.4 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><text x="160" y="234" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">O</text><text x="65.4" y="80.4" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">A</text><text x="254.6" y="80.4" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">B</text><text x="101.7" y="154.2" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">6 cm</text><path d="M 147 197.5 A 26 26 0 0 1 173 197.5" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="160" y="178" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">60°</text></svg>`;

const D_M3Q01 = `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with AB = 9.5 cm, angle ABC = 44 degrees and angle ACB = 58 degrees."><rect x="0" y="0" width="420" height="280" fill="#ffffff"/><polygon points="95.2,232 324.8,232 134.3,48" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><text x="82" y="241" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">A</text><text x="339.5" y="238.4" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">B</text><text x="128.2" y="33.2" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">C</text><text x="210" y="246" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">9.5 cm</text><path d="M 294.8 232 A 30 30 0 0 1 303.2 211.2" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="278.5" y="213.3" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">44°</text><path d="M 129.7 69.5 A 22 22 0 0 0 150.1 63.3" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="145.4" y="84.3" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">58°</text></svg>`;

const D_M3Q02 = `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle PQR with PQ = 12.4 cm, PR = 8.7 cm and angle QPR = 76 degrees."><rect x="0" y="0" width="420" height="280" fill="#ffffff"/><polygon points="74.9,232 345.1,232 120.7,48" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><text x="61" y="240" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">P</text><text x="360.1" y="237.6" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">Q</text><text x="113.8" y="33.6" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">R</text><text x="210" y="246" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">12.4 cm</text><text x="69.1" y="132.9" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">8.7 cm</text><path d="M 96.9 232 A 22 22 0 0 0 80.2 210.7" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="104.8" y="208.6" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">76°</text></svg>`;

const D_M3Q05 = `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with AB = 8.5 cm, AC = 6.3 cm and BC = 11.2 cm."><rect x="0" y="0" width="420" height="280" fill="#ffffff"/><polygon points="96.6,232 346.8,232 73.2,48" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><text x="84.1" y="242.1" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">A</text><text x="361.9" y="237.3" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">B</text><text x="63.1" y="35.5" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">C</text><text x="221.7" y="246" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">8.5 cm</text><text x="55.2" y="143.8" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">6.3 cm</text><text x="222.8" y="121" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">11.2 cm</text></svg>`;

const D_M3Q06 = `<svg viewBox="0 0 420 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle ABC with AB = 6 cm, AC = 9 cm and BC = 10 cm."><rect x="0" y="0" width="420" height="280" fill="#ffffff"/><polygon points="151.3,228 268.7,228 179,54" fill="#c7d2fe" fill-opacity="0.45" stroke="#1f2937" stroke-width="2"/><text x="141" y="245.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">A</text><text x="250.5" y="139.6" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10 cm</text><text x="281" y="243.3" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">B</text><text x="137.3" y="143.8" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">9 cm</text><text x="176.2" y="43.2" font-size="14" font-family="sans-serif" text-anchor="middle" fill="#1f2937" font-weight="bold">C</text><text x="210" y="247" font-size="13" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6 cm</text></svg>`;

const D_M3Q07 = `<svg viewBox="0 0 440 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Points A and B on level ground, 50 m apart, with B between A and the foot of a vertical tower. Lines run from A and from B to T, the top of the tower. The angle of elevation of T is 28 degrees from A and 47 degrees from B."><rect x="0" y="0" width="440" height="260" fill="#ffffff"/><line x1="10" y1="225" x2="430" y2="225" stroke="#1f2937" stroke-width="1.5"/><rect x="341.4" y="56.3" width="12" height="168.7" fill="#cbd5e1" stroke="#1f2937" stroke-width="1.5"/><line x1="30" y1="225" x2="347.4" y2="56.3" stroke="#1f2937" stroke-width="1.5"/><line x1="190" y1="225" x2="347.4" y2="56.3" stroke="#1f2937" stroke-width="1.5"/><path d="M 70 225 A 40 40 0 0 0 65.3 206.2" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="88.2" y="210.5" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">28°</text><path d="M 220 225 A 30 30 0 0 0 210.5 203.1" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="235.9" y="205.1" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">47°</text><text x="30" y="241" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">A</text><text x="190" y="241" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">B</text><text x="347.4" y="44.3" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">T</text><text x="110" y="241" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">50 m</text></svg>`;

const D_M3Q11 = `<svg viewBox="0 0 320 260" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Circle centre O, radius 8 cm. Sector OAB has angle 100 degrees at O; the segment between chord AB and the arc is shaded."><rect x="0" y="0" width="320" height="260" fill="#ffffff"/><path d="M 160 140 L 76.3 69.8 A 109.2 109.2 0 0 1 243.7 69.8 Z" fill="none" stroke="#1f2937" stroke-width="2"/><path d="M 76.3 69.8 A 109.2 109.2 0 0 1 243.7 69.8 Z" fill="#fde68a" stroke="#1f2937" stroke-width="2"/><text x="160" y="154" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">O</text><text x="62.3" y="69.8" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">A</text><text x="257.7" y="69.8" font-size="14" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937" font-weight="bold">B</text><text x="100.2" y="108.9" font-size="13" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">8 cm</text><path d="M 140.1 123.3 A 26 26 0 0 1 179.9 123.3" fill="none" stroke="#1f2937" stroke-width="1.2"/><text x="160" y="98" font-size="12" font-family="sans-serif" text-anchor="middle" dominant-baseline="middle" fill="#1f2937">100°</text></svg>`;

export const mcqPapers: Paper[] = [
  {
    id: "further-trigonometry-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q01",
        question: "In triangle ABC, angle BAC = 47°, angle ABC = 58° and BC = 9 cm.\n\nWork out the length of AC. Give your answer correct to 3 significant figures.",
        diagram: D_M1Q01,
        options: ["10.4 cm", "7.76 cm", "11.9 cm", "7.63 cm"],
        answerIndex: 0,
        explanation:
          "AC is opposite angle B and BC is opposite angle A, so {{(AC)/(sin 58°) = 9/(sin 47°)}}, giving AC = {{(9 sin 58°)/(sin 47°)}} = 10.436… = 10.4 cm. 7.76 cm comes from flipping the angles ({{(9 sin 47°)/(sin 58°)}}). 11.9 cm uses angle C = 75°, which is opposite AB, not AC. 7.63 cm is just 9 sin 58° — the division by sin 47° has been forgotten.",
        difficulty: "warmup",
        guideRef: "sine-rule",
        hints: ["Pair each side with the angle **opposite** it.", "{{(AC)/(sin B) = (BC)/(sin A)}}"],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q02",
        question: "In triangle PQR, PQ = 10 cm, PR = 7 cm and angle QPR = 55°.\n\nWork out the length of QR. Give your answer correct to 3 significant figures.",
        options: ["68.7 cm", "15.1 cm", "8.29 cm", "2.27 cm"],
        answerIndex: 2,
        explanation:
          "Two sides and the angle between them: use the cosine rule. {{QR^2 = 10^2 + 7^2 - 2 * 10 * 7 * cos 55°}} = 149 − 80.30… = 68.699…, so QR = {{sqrt(68.699...)}} = 8.29 cm. 68.7 cm is QR² — the square root is missing. 15.1 cm adds the 2bc cos A term instead of subtracting it. 2.27 cm comes from working out (100 + 49 − 140) first and then multiplying by cos 55° — a calculator-order slip.",
        difficulty: "warmup",
        guideRef: "cosine-rule",
        hints: ["You know two sides and the angle **between** them. Which rule fits?", "{{a^2 = b^2 + c^2 - 2bc cos A}}, then square root."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q03",
        question: "A triangular flower bed has sides of 8 m and 11 m with an angle of 40° between them.\n\nWork out the area of the flower bed. Give your answer correct to 3 significant figures.",
        options: ["56.6 m²", "28.3 m²", "44 m²", "33.7 m²"],
        answerIndex: 1,
        explanation:
          "Area = {{1/2 ab sin C = 1/2 * 8 * 11 * sin 40°}} = 44 × 0.6427… = 28.3 m². 56.6 m² forgets the half; 44 m² forgets the sin 40° (that would only be right for a right angle, since sin 90° = 1); 33.7 m² uses cos 40° instead of sin 40°.",
        difficulty: "warmup",
        guideRef: "area-sine",
        hints: ["Two sides and the **included** angle: which area formula uses exactly that?"],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q04",
        question: "For 0° ≤ x ≤ 360°, at which value of x does the graph of y = cos x reach its **minimum** value?",
        options: ["x = 270°", "x = 90°", "x = 360°", "x = 180°"],
        answerIndex: 3,
        explanation:
          "y = cos x starts at its maximum (0°, 1), crosses the axis at 90°, reaches its minimum −1 at 180°, crosses again at 270° and is back to 1 at 360°. 270° is where **sin** x has its minimum; 90° is where cos x = 0; 360° is a maximum.",
        difficulty: "warmup",
        guideRef: "trig-graphs",
        hints: ["Sketch y = cos x: where does it start, and how does it move?"],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q05",
        question: "In triangle ABC, BC = 13 cm, AC = 9 cm and angle BAC = 68°.\n\nWork out the size of angle ABC. Give your answer correct to 1 decimal place.",
        options: ["140.1°", "39.9°", "47.1°", "43.8°"],
        answerIndex: 1,
        explanation:
          "BC is opposite A and AC is opposite B, so {{(sin B)/9 = (sin 68°)/13}}, giving sin B = 0.6418… and B = 39.9°. 140.1° is the other angle with the same sine, but 68° + 140.1° > 180°, so it cannot fit in this triangle. 47.1° treats angles as proportional to sides (68 × {{9/13}}) — they are not. 43.8° is {{sin^(-1)(9/13)}}, forgetting the sin 68°.",
        difficulty: "core",
        guideRef: "sine-rule",
        hints: ["Finding an angle? Put the sines on top: {{(sin B)/b = (sin A)/a}}.", "Which side is opposite B, and which is opposite A?", "sin B = {{(9 sin 68°)/13}}. Then check whether the obtuse alternative could fit."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q06",
        question: "A triangle has sides 7 cm, 8 cm and 13 cm.\n\nWork out the size of the angle **opposite the 13 cm side**.",
        options: ["32.2°", "27.8°", "60°", "120°"],
        answerIndex: 3,
        explanation:
          "The angle is between the 7 cm and 8 cm sides: {{cos theta = (7^2 + 8^2 - 13^2)/(2 * 7 * 8) = -56/112 = -1/2}}, so θ = 120° exactly — obtuse, because the cosine is negative. 32.2° is the angle opposite the 8 cm side, and 27.8° the angle opposite 7 cm — the wrong side was put on the end of the numerator. 60° comes from dropping the minus sign and using cos θ = {{1/2}}.",
        difficulty: "core",
        guideRef: "cosine-rule",
        hints: ["The side opposite the angle you want is the one that gets **subtracted**.", "{{cos A = (b^2 + c^2 - a^2)/(2bc)}} with a = 13. Keep the sign."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q07",
        question: "Triangle XYZ has XY = 8 cm, XZ = 10 cm and area 30 cm². Angle YXZ is acute.\n\nWork out the size of angle YXZ. Give your answer correct to 1 decimal place.",
        options: ["48.6°", "22.0°", "131.4°", "41.4°"],
        answerIndex: 0,
        explanation:
          "{{1/2 * 8 * 10 * sin X = 30}} so 40 sin X = 30, sin X = 0.75 and X = {{sin^(-1)(0.75)}} = 48.6°. 22.0° comes from forgetting the half (sin X = 0.375). 131.4° also has sine 0.75 but is obtuse — the question says acute. 41.4° uses {{cos^(-1)}} instead of {{sin^(-1)}}.",
        difficulty: "core",
        guideRef: "area-sine",
        hints: ["Use the area formula **backwards**: put in everything you know.", "40 sin X = 30. Make sin X the subject."],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q08",
        question: "The graph shows y = sin x for 0° ≤ x ≤ 360° and the line y = 0.4.\n\nSolve sin x = 0.4 for 0° ≤ x ≤ 360°. Give your answers correct to 1 decimal place.",
        diagram: D_M1Q08,
        options: ["23.6° and 336.4°", "23.6° and 203.6°", "23.6° and 156.4°", "23.6° and 66.4°"],
        answerIndex: 2,
        explanation:
          "The calculator gives {{sin^(-1)(0.4)}} = 23.6°. The sine graph is symmetrical about x = 90°, so the second crossing is at 180° − 23.6° = 156.4° — the graph confirms two crossings, both in the first half. 336.4° (360° − 23.6°) uses the **cosine** symmetry; 203.6° (180° + 23.6°) uses the tan pattern and gives sin x = −0.4; 66.4° (90° − 23.6°) is the complement, not a solution.",
        difficulty: "core",
        guideRef: "trig-graphs",
        hints: ["How many times does the dashed line cross the curve?", "sin x is symmetrical about x = 90°.", "Second solution = 180° − (first solution)."],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q09",
        question: "A triangle has sides 4 cm, 6 cm and 9 cm.\n\nWork out the size of the **largest** angle. Give your answer correct to 1 decimal place.",
        options: ["52.8°", "20.7°", "No such triangle — the cosine is negative", "127.2°"],
        answerIndex: 3,
        explanation:
          "The largest angle is opposite the longest side (9 cm): {{cos theta = (4^2 + 6^2 - 9^2)/(2 * 4 * 6) = -29/48}} = −0.604…, so θ = 127.2°. A negative cosine just means the angle is **obtuse** — the triangle is fine (4 + 6 > 9). 52.8° drops the minus sign. 20.7° is the smallest angle (opposite 4 cm).",
        difficulty: "core",
        guideRef: "cosine-rule",
        hints: ["Which side is the largest angle opposite?", "Use the cosine rule rearranged for cos θ. What does a negative cosine tell you?"],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q10",
        question: "The diagram shows a sector OAB of a circle, centre O, radius 6 cm, with angle AOB = 70°. The shaded region is the segment between chord AB and the arc.\n\nWork out the area of the shaded segment. Give your answer correct to 3 significant figures.",
        diagram: D_M1Q10,
        options: ["22.0 cm²", "5.08 cm²", "16.9 cm²", "38.9 cm²"],
        answerIndex: 1,
        explanation:
          "Sector = {{70/360 * pi * 6^2}} = 21.99… cm². Triangle OAB = {{1/2 * 6 * 6 * sin 70°}} = 16.91… cm². Segment = sector − triangle = 5.08 cm². 22.0 cm² is the whole sector, 16.9 cm² is just the triangle, and 38.9 cm² adds them instead of subtracting.",
        difficulty: "core",
        guideRef: "area-sine",
        hints: ["Segment = sector − triangle.", "Triangle OAB has two sides of 6 cm with 70° between them: use {{1/2 ab sin C}}.", "Keep full calculator values until the final subtraction."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q11",
        question: "Which transformation maps the graph of y = sin x onto the graph of y = sin(x − 30°)?",
        options: ["A translation 30° in the negative x-direction", "A translation 30 units in the positive y-direction", "A translation 30° in the positive x-direction", "A stretch parallel to the x-axis"],
        answerIndex: 2,
        explanation:
          "y = f(x − a) is a translation by a in the **positive** x-direction: every point moves 30° to the right (e.g. the maximum moves from (90°, 1) to (120°, 1)). Moving left is the classic trap — the minus sign inside the bracket means the graph shifts right. Changes inside the bracket act on x, not y, and there is no multiplication, so it is not a stretch.",
        difficulty: "core",
        guideRef: "trig-graphs",
        hints: ["Where is the maximum of y = sin(x − 30°)? Solve x − 30° = 90°.", "Inside the bracket, the effect on x is the opposite of what the sign suggests."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q12",
        question: "In triangle ABC, AB = 11 cm, BC = 8 cm and angle BAC = 42°.\n\nWhich statement about angle ACB is correct?",
        options: ["Angle ACB = 66.9° or 113.1° — two different triangles fit", "Angle ACB = 66.9° only", "Angle ACB = 113.1° only", "No triangle is possible, because BC is shorter than AB"],
        answerIndex: 0,
        explanation:
          "sin C = {{(11 sin 42°)/8}} = 0.920…, so C = 66.9° **or** 180° − 66.9° = 113.1°. Both work: 42° + 113.1° = 155.1° < 180° leaves room for angle B. This is the **ambiguous case**: the 8 cm side can swing to meet the line from A in two places. Taking only 66.9° is the usual exam slip. A triangle exists because sin C < 1 (BC = 8 cm is longer than the shortest distance from B to that line, 11 sin 42° = 7.36 cm).",
        difficulty: "core",
        guideRef: "sine-rule",
        hints: ["Find sin C with the sine rule.", "Every sine value between 0 and 1 gives an acute angle **and** an obtuse one. Does the obtuse one fit with 40°?"],
        strategy: "Split into cases",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q13",
        question: "Angle θ is obtuse and {{sin theta = 8/17}}.\n\nWork out the exact value of cos θ.",
        options: ["{{15/17}}", "{{9/17}}", "{{-15/17}}", "{{-8/15}}"],
        answerIndex: 2,
        explanation:
          "{{cos^2 theta = 1 - sin^2 theta = 1 - 64/289 = 225/289}}, so cos θ = ±{{15/17}}. Obtuse angles (between 90° and 180°) have negative cosine, so cos θ = −{{15/17}}. {{15/17}} ignores the obtuse information; {{9/17}} comes from 1 − sin θ without squaring; −{{8/15}} is tan θ.",
        difficulty: "challenge",
        guideRef: "trig-identities",
        hints: ["Which identity links sin θ and cos θ?", "{{sin^2 theta + cos^2 theta = 1}} gives two possible values. Which sign does cos θ have for 90° < θ < 180°?"],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q14",
        question: "In triangle ABC, AB = x cm, AC = (x + 2) cm, BC = 7 cm and angle BAC = 120°.\n\nWork out the value of x.",
        options: ["3", "5.78", "3.85", "5"],
        answerIndex: 0,
        explanation:
          "Cosine rule with cos 120° = −{{1/2}}: {{49 = x^2 + (x + 2)^2 - 2x(x + 2) cos 120°}} = {{x^2 + (x + 2)^2 + x(x + 2)}} = {{3x^2 + 6x + 4}}. So {{3x^2 + 6x - 45 = 0}}, {{x^2 + 2x - 15 = 0}}, (x + 5)(x − 3) = 0, and x = 3 (a length can't be −5). Check: 9 + 25 + 15 = 49 ✓. 5.78 uses cos 120° = +{{1/2}}; 3.85 drops the 2bc cos A term altogether; 5 takes the rejected root −5 and drops its sign.",
        difficulty: "challenge",
        guideRef: "cosine-rule",
        hints: ["Write the cosine rule with a = 7, b = x + 2, c = x.", "What is cos 120°? Careful with the sign: −2bc × (−{{1/2}}) = +bc.", "You should reach a quadratic. Which root makes sense as a length?"],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m1-q15",
        question: "The graph shows y = a cos(bx) + c for 0° ≤ x ≤ 360°, where a, b and c are positive constants. It has a maximum at (0, 5) and the next minimum at (90, 1).\n\nFind a, b and c.",
        diagram: D_M1Q15,
        options: ["a = 4, b = 2, c = 1", "a = 2, b = {{1/2}}, c = 3", "a = 2, b = 4, c = 3", "a = 2, b = 2, c = 3"],
        answerIndex: 3,
        explanation:
          "The centre line is halfway between 5 and 1, so c = 3; the amplitude is 5 − 3 = 2, so a = 2. Max to next min is **half** a period, so the period is 180° and b = 360 ÷ 180 = 2. a = 4, c = 1 takes the full height 5 − 1 as the amplitude and the minimum as the shift. b = {{1/2}} confuses the stretch factor with b (a period of 180° means the graph is *squashed*, so b > 1). b = 4 treats 90° as the full period.",
        difficulty: "challenge",
        guideRef: "trig-graphs",
        hints: ["The midline is halfway between the max and min: that's c.", "Amplitude = distance from the midline to the max.", "How far is it from a maximum to the next minimum, as a fraction of one period? Period = {{360/b}}."],
        strategy: "Find a pattern",
      },
    ],
  },
  {
    id: "further-trigonometry-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q01",
        question: "In triangle PQR, angle QPR = 35°, angle PQR = 80° and PQ = 12 cm.\n\nWork out the length of QR. Give your answer correct to 3 significant figures.",
        diagram: D_M2Q01,
        options: ["6.99 cm", "19.0 cm", "7.59 cm", "6.88 cm"],
        answerIndex: 2,
        explanation:
          "PQ is opposite angle R, so first find R = 180° − 35° − 80° = 65°. Then {{(QR)/(sin 35°) = 12/(sin 65°)}}, so QR = {{(12 sin 35°)/(sin 65°)}} = 7.59 cm. 6.99 cm divides by sin 80°, but angle Q is not opposite PQ. 19.0 cm flips the fraction. 6.88 cm is 12 sin 35° with no division.",
        difficulty: "warmup",
        guideRef: "sine-rule",
        hints: ["Which angle is opposite the 12 cm side? You need to find it first."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q02",
        question: "A triangle has sides 6 cm, 9 cm and 11 cm.\n\nWork out the size of the **smallest** angle. Give your answer correct to 1 decimal place.",
        options: ["33.0°", "92.1°", "54.8°", "147.0°"],
        answerIndex: 0,
        explanation:
          "The smallest angle is opposite the shortest side (6 cm): {{cos theta = (9^2 + 11^2 - 6^2)/(2 * 9 * 11) = 166/198 = 83/99}}, so θ = 33.0°. 92.1° is the largest angle (opposite 11 cm) and 54.8° is opposite 9 cm. 147.0° is 180° − 33.0°, from a sign slip. Check: 33.0° + 54.8° + 92.1° ≈ 180° ✓.",
        difficulty: "warmup",
        guideRef: "cosine-rule",
        hints: ["The smallest angle is opposite the shortest side.", "{{cos A = (b^2 + c^2 - a^2)/(2bc)}} with a = 6."],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q03",
        question: "A triangle has sides 5 cm and 9 cm with an angle of 120° between them.\n\nWork out the area of the triangle. Give your answer correct to 3 significant figures.",
        options: ["39.0 cm²", "22.5 cm²", "11.3 cm²", "19.5 cm²"],
        answerIndex: 3,
        explanation:
          "Area = {{1/2 * 5 * 9 * sin 120°}} = 22.5 × 0.866… = 19.5 cm². The formula works for obtuse angles too (sin 120° = sin 60°). 39.0 cm² forgets the half; 22.5 cm² leaves out sin 120°; 11.3 cm² uses cos 120° and then drops the minus sign.",
        difficulty: "warmup",
        guideRef: "area-sine",
        hints: ["Area = {{1/2 ab sin C}} — does it matter that C is obtuse?"],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q04",
        question: "Which statement about the graph of y = tan x is true?",
        options: ["It repeats every 360°", "It repeats every 180°", "Its maximum value is 1", "It passes through (90°, 0)"],
        answerIndex: 1,
        explanation:
          "tan x has period 180°: tan(x + 180°) = tan x, so the pattern repeats twice in 0°–360°. Sin and cos repeat every 360°. tan x has no maximum — it rises without limit towards the asymptote at 90°. At x = 90° tan x has no value (cos 90° = 0, and you cannot divide by 0), so there is a vertical asymptote, not a point (90°, 0).",
        difficulty: "warmup",
        guideRef: "trig-graphs",
        hints: ["Picture the tan graph: what happens at 90° and 270°?"],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q05",
        question: "Coastguard station B is 18 km due east of station A. A boat C is on a bearing of 040° from A and on a bearing of 330° from B.\n\nWork out the distance AC. Give your answer correct to 3 significant figures.",
        diagram: D_M2Q05,
        options: ["16.6 km", "19.5 km", "9.58 km", "14.7 km"],
        answerIndex: 0,
        explanation:
          "Bearing 040° from A means angle CAB = 90° − 40° = 50°. Bearing 330° from B means C is 30° west of north, so angle CBA = 90° − 30° = 60°. Then angle ACB = 70°. AC is opposite angle B: AC = {{(18 sin 60°)/(sin 70°)}} = 16.6 km. 19.5 km flips the fraction; 9.58 km uses the bearing angles 40° and 30° as if they were inside the triangle; 14.7 km pairs AC with the 50° angle at A, but that angle is opposite BC.",
        difficulty: "core",
        guideRef: "sine-rule",
        hints: ["Bearings are measured from north, but you need the angles **inside** the triangle.", "Angle CAB = 90° − 40°. What about angle CBA?", "Angle ACB is opposite the 18 km side; AC is opposite angle B."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q06",
        question: "Priya walks 5 km on a bearing of 070°, then turns and walks 8 km on a bearing of 155°.\n\nHow far is she from her starting point? Give your answer correct to 3 significant figures.",
        options: ["9.06 km", "9.43 km", "9.80 km", "96.0 km"],
        answerIndex: 2,
        explanation:
          "At the turning point, the back-bearing to the start is 070° + 180° = 250°. The angle between 250° and 155° is 95°, so the triangle has sides 5 and 8 with 95° between them. {{d^2 = 5^2 + 8^2 - 2 * 5 * 8 * cos 95°}} = 89 + 6.97… = 95.97…, so d = 9.80 km. 9.06 km uses 85° (the difference between the two bearings), which is the angle **outside** the triangle. 9.43 km assumes a right angle (Pythagoras). 96.0 km is d² — no square root.",
        difficulty: "core",
        guideRef: "cosine-rule",
        hints: ["Sketch it with a north line at each point.", "At the turn, find the bearing back to the start: 070° + 180°.", "The angle inside the triangle is between 250° and 155°."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q07",
        question: "Triangle ABC has area 40 cm², AB = 10 cm and angle ABC = 30°.\n\nWork out the length of BC.",
        options: ["8 cm", "9.24 cm", "4 cm", "16 cm"],
        answerIndex: 3,
        explanation:
          "{{1/2 * 10 * BC * sin 30° = 40}}. Since sin 30° = {{1/2}}, this is 2.5 × BC = 40, so BC = 16 cm. 8 cm forgets the {{1/2}} in the formula. 9.24 cm uses cos 30°. 4 cm multiplies by sin 30° at the end instead of dividing.",
        difficulty: "core",
        guideRef: "area-sine",
        hints: ["Write the area formula with BC as the unknown.", "sin 30° = {{1/2}} exactly, so the equation is 2.5 × BC = 40."],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q08",
        question: "Solve cos x = −0.3 for 0° ≤ x ≤ 360°. Give your answers correct to 1 decimal place.",
        options: ["107.5° and 72.5°", "107.5° and 252.5°", "107.5° and 287.5°", "72.5° and 287.5°"],
        answerIndex: 1,
        explanation:
          "{{cos^(-1)(-0.3)}} = 107.5°. The cos graph is symmetrical about x = 180°, so the other solution is 360° − 107.5° = 252.5°. Both are between 90° and 270°, where cos x is negative ✓. 72.5° (180° − 107.5°) uses the **sine** symmetry and has cos 72.5° = +0.3. 287.5° (180° + 107.5°) is not symmetric for cos. 72.5° and 287.5° solve cos x = +0.3 — the minus sign was dropped.",
        difficulty: "core",
        guideRef: "trig-graphs",
        hints: ["Use the calculator for the first value, then sketch y = cos x.", "cos x is symmetrical about x = 180°: the second value is 360° − (first)."],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q09",
        question: "In triangle ABC, angle ABC = 110°, BC = 6 cm and AC = 10 cm.\n\nWork out the size of angle BAC. Give your answer correct to 1 decimal place.",
        diagram: D_M2Q09,
        options: ["145.7°", "66.0°", "34.3°", "36.9°"],
        answerIndex: 2,
        explanation:
          "{{(sin A)/6 = (sin 110°)/10}}, so sin A = 0.5638… and A = 34.3°. There is no ambiguity here: the triangle already has an obtuse angle (110°), so A must be acute — 145.7° is impossible. 66.0° scales the angle (110 × {{6/10}}), which is not how triangles work. 36.9° is {{sin^(-1)(0.6)}}, forgetting sin 110°.",
        difficulty: "core",
        guideRef: "sine-rule",
        hints: ["Which side is opposite angle A?", "sin A = {{(6 sin 110°)/10}}. Can A be obtuse if B is already 110°?"],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q10",
        question: "ABCD is a parallelogram with AB = 10 cm, AD = 6 cm and angle DAB = 60°.\n\nWork out the length of the diagonal AC.",
        diagram: D_M2Q10,
        options: ["14 cm", "8.72 cm", "11.7 cm", "16 cm"],
        answerIndex: 0,
        explanation:
          "In triangle ABC, BC = 6 cm and angle ABC = 180° − 60° = 120° (co-interior angles). {{AC^2 = 10^2 + 6^2 - 2 * 10 * 6 * cos 120°}} = 136 + 60 = 196, so AC = 14 cm exactly. 8.72 cm uses 60° — that is the shorter diagonal BD. 11.7 cm uses Pythagoras ({{sqrt(136)}}) but there's no right angle. 16 cm just adds the sides.",
        difficulty: "core",
        guideRef: "cosine-rule",
        hints: ["AC is the long diagonal. Which triangle contains it, and what is the angle at B?", "Angles next to each other in a parallelogram add to 180°.", "cos 120° = −{{1/2}}."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q11",
        question: "A regular octagon is drawn inside a circle of radius 5 cm, with all eight vertices on the circle.\n\nWork out the area of the octagon. Give your answer correct to 3 significant figures.",
        diagram: D_M2Q11,
        options: ["141 cm²", "70.7 cm²", "100 cm²", "78.5 cm²"],
        answerIndex: 1,
        explanation:
          "Join the centre to each vertex: 8 congruent triangles with two sides of 5 cm and an angle of 360° ÷ 8 = 45° at the centre. Area = 8 × {{1/2 * 5 * 5 * sin 45°}} = 100 sin 45° = 70.7 cm². 141 cm² forgets the half; 100 cm² forgets sin 45°; 78.5 cm² is the area of the whole circle (25π), which must be bigger than the octagon.",
        difficulty: "core",
        guideRef: "area-sine",
        hints: ["Split the octagon into triangles from the centre.", "What is the angle at the centre of each triangle?", "Each triangle is {{1/2 * 5 * 5 * sin 45°}}."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q12",
        question: "The graph of y = sin x has a maximum point at (90°, 1).\n\nWhat are the coordinates of the maximum point of y = sin(x − 40°) + 2 for 0° ≤ x ≤ 360°?",
        options: ["(50°, 3)", "(130°, 1)", "(130°, 2)", "(130°, 3)"],
        answerIndex: 3,
        explanation:
          "Two transformations: (x − 40°) translates 40° to the **right**, so 90° → 130°; + 2 translates 2 up, so 1 → 3. The maximum is (130°, 3). (50°, 3) moves the wrong way. (130°, 1) ignores the + 2. (130°, 2) replaces the y-value with 2 instead of adding 2.",
        difficulty: "core",
        guideRef: "trig-graphs",
        hints: ["Deal with the inside of the bracket (x) and the outside (y) separately.", "Solve x − 40° = 90° to see where the peak goes."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q13",
        question: "Solve {{2cos^2 x + cos x - 1 = 0}} for 0° ≤ x ≤ 360°.",
        options: ["60°, 300°", "60°, 180°, 300°", "0°, 120°, 240°, 360°", "60°, 120°, 180°"],
        answerIndex: 1,
        explanation:
          "Let c = cos x: {{2c^2 + c - 1 = (2c - 1)(c + 1) = 0}}, so cos x = {{1/2}} or cos x = −1. cos x = {{1/2}} gives 60° and 360° − 60° = 300°; cos x = −1 gives 180° (the minimum of the cos graph). 60°, 300° forgets the cos x = −1 branch; 0°, 120°, 240°, 360° comes from a sign slip in the factors, giving cos x = −{{1/2}} or 1; 60°, 120°, 180° uses the **sine** symmetry (180° − 60°) for a cosine equation.",
        difficulty: "challenge",
        guideRef: "trig-equations",
        hints: ["It's a quadratic in disguise. Let c = cos x.", "Factorise {{2c^2 + c - 1}}.", "Each value of cos x can give more than one angle. Use the symmetry of the **cos** graph."],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q14",
        question: "The diagram shows a sector OAB of a circle, centre O, radius 6 cm, with angle AOB = 60°.\n\nWork out the exact area of the shaded segment. Give your answer in the form {{a pi - b sqrt(3)}}.",
        diagram: D_M2Q14,
        options: ["{{6pi - 9sqrt(3)}} cm²", "{{6pi - 18}} cm²", "{{6pi - 9}} cm²", "{{6pi + 9sqrt(3)}} cm²"],
        answerIndex: 0,
        explanation:
          "Sector = {{60/360 * pi * 6^2 = 6pi}}. Triangle OAB = {{1/2 * 6 * 6 * sin 60° = 18 * sqrt(3)/2 = 9sqrt(3)}} (it's equilateral). Segment = {{6pi - 9sqrt(3)}} ≈ 3.26 cm². {{6pi - 18}} uses {{1/2 * 6 * 6}} without sin 60°; {{6pi - 9}} uses sin 60° = {{1/2}} (that's sin 30°); {{6pi + 9sqrt(3)}} adds the triangle instead of subtracting.",
        difficulty: "challenge",
        guideRef: "area-sine",
        hints: ["Segment = sector − triangle.", "Exact values: what is sin 60°?", "{{1/2 * 6 * 6 * sqrt(3)/2}} = ?"],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m2-q15",
        question: "In triangle ABC, AB = 12 cm, AC = 8 cm and angle ABC = 35°. Two different triangles fit this information.\n\nWork out the **difference** between the two possible lengths of BC. Give your answer correct to 3 significant figures.",
        options: ["13.9 cm", "5.75 cm", "19.7 cm", "8.15 cm"],
        answerIndex: 3,
        explanation:
          "sin C = {{(12 sin 35°)/8}} = 0.860…, so C = 59.4° or 120.6°. Then A = 85.6° or 24.4°, and BC = {{(8 sin A)/(sin 35°)}} = 13.91 cm or 5.75 cm. Difference = 8.15 cm. **Second method:** cosine rule with BC = x: {{64 = x^2 + 144 - 24x cos 35°}}, i.e. {{x^2 - 19.66x + 80 = 0}}; the two roots differ by {{sqrt(19.66^2 - 320)}} = 8.15. 13.9 cm and 5.75 cm are the two lengths themselves; 19.7 cm is their sum.",
        difficulty: "challenge",
        guideRef: "sine-rule",
        hints: ["Start with the sine rule to find angle C — there are two possibilities.", "For each value of C, find angle A, then BC.", "Alternatively: the cosine rule with BC = x gives a quadratic whose two roots are the two lengths."],
        strategy: "Split into cases",
      },
    ],
  },
  {
    id: "further-trigonometry-m3",
    title: "MCQ Paper 3 — Exam style",
    questions: [
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q01",
        question: "The diagram shows triangle ABC. AB = 9.5 cm, angle ABC = 44° and angle ACB = 58°.\n\nCalculate the length of AC. Give your answer correct to 3 significant figures.",
        diagram: D_M3Q01,
        options: ["11.6 cm", "11.0 cm", "6.60 cm", "7.78 cm"],
        answerIndex: 3,
        explanation:
          "AC is opposite the 44° angle and AB is opposite the 58° angle: {{(AC)/(sin 44°) = 9.5/(sin 58°)}}, so AC = 7.78 cm. 11.6 cm flips the fraction. 11.0 cm uses angle A = 78°, which is opposite BC, not AC. 6.60 cm is 9.5 sin 44° — the division is missing.",
        difficulty: "warmup",
        guideRef: "sine-rule",
        hints: ["Match AC and AB with their opposite angles."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q02",
        question: "The diagram shows triangle PQR. PQ = 12.4 cm, PR = 8.7 cm and angle QPR = 76°.\n\nCalculate the length of QR. Give your answer correct to 3 significant figures.",
        diagram: D_M3Q02,
        options: ["16.8 cm", "13.3 cm", "15.1 cm", "177 cm"],
        answerIndex: 1,
        explanation:
          "{{QR^2 = 12.4^2 + 8.7^2 - 2 * 12.4 * 8.7 * cos 76°}} = 229.45 − 52.20 = 177.25…, so QR = 13.3 cm. 16.8 cm adds the 2bc cos A term; 15.1 cm is Pythagoras, which only works for 90°; 177 cm is QR² with no square root.",
        difficulty: "warmup",
        guideRef: "cosine-rule",
        hints: ["SAS: two sides and the included angle — cosine rule."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q03",
        question: "A triangular garden in an HDB estate has two sides of 15 m with an angle of 32° between them.\n\nCalculate the area of the garden. Give your answer correct to 3 significant figures.",
        options: ["59.6 m²", "119 m²", "95.4 m²", "112.5 m²"],
        answerIndex: 0,
        explanation:
          "Area = {{1/2 * 15 * 15 * sin 32°}} = 112.5 × 0.5299… = 59.6 m². 119 m² forgets the half; 95.4 m² uses cos 32°; 112.5 m² leaves out sin 32° altogether.",
        difficulty: "warmup",
        guideRef: "area-sine",
        hints: ["Area = {{1/2 ab sin C}} with a = b = 15 and C = 32°."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q04",
        question: "cos 40° = 0.766 (to 3 s.f.). Which other angle between 0° and 360° also has a cosine of 0.766?",
        options: ["140°", "220°", "320°", "50°"],
        answerIndex: 2,
        explanation:
          "The cosine graph is symmetrical about x = 180°, so cos(360° − 40°) = cos 320° = 0.766. cos 140° and cos 220° are both −0.766 (the graph is below the axis between 90° and 270°) — 140° uses the **sine** symmetry 180° − x. cos 50° = sin 40° ≈ 0.643.",
        difficulty: "warmup",
        guideRef: "trig-graphs",
        hints: ["Sketch y = cos x. Where else is the curve at height 0.766?"],
        strategy: "Use symmetry",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q05",
        question: "The diagram shows triangle ABC. AB = 8.5 cm, AC = 6.3 cm and BC = 11.2 cm.\n\nCalculate the size of angle BAC. Give your answer correct to 1 decimal place.",
        diagram: D_M3Q05,
        options: ["82.8°", "33.9°", "97.2°", "48.8°"],
        answerIndex: 2,
        explanation:
          "{{cos A = (8.5^2 + 6.3^2 - 11.2^2)/(2 * 8.5 * 6.3) = -13.5/107.1}} = −0.126…, so A = 97.2°. The negative cosine means an obtuse angle — and A must be the largest angle because BC is the longest side. 82.8° loses the minus sign. 33.9° is angle ABC (opposite 6.3 cm) and 48.8° is angle ACB (opposite 8.5 cm): the wrong side was subtracted.",
        difficulty: "core",
        guideRef: "cosine-rule",
        hints: ["Angle BAC is opposite which side?", "{{cos A = (b^2 + c^2 - a^2)/(2bc)}} with a = BC = 11.2.", "Keep the sign of the cosine — what does a negative value mean?"],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q06",
        question: "The diagram shows triangle ABC with AB = 6 cm, AC = 9 cm and BC = 10 cm.\n\nCalculate the area of triangle ABC. Give your answer correct to 3 significant figures.",
        diagram: D_M3Q06,
        options: ["26.7 cm²", "27 cm²", "53.3 cm²", "30 cm²"],
        answerIndex: 0,
        explanation:
          "No angle is given, so find one first. {{cos A = (6^2 + 9^2 - 10^2)/(2 * 6 * 9) = 17/108}}, so A = 80.94…°. Area = {{1/2 * 6 * 9 * sin A}} = 27 × 0.9875… = 26.7 cm². 27 cm² is {{1/2 * 6 * 9}} without sin A — only right for a right angle. 53.3 cm² forgets the half. 30 cm² is {{1/2 * 6 * 10}}, treating the triangle as right-angled with the wrong pair of sides.",
        difficulty: "core",
        guideRef: "area-sine",
        hints: ["To use {{1/2 ab sin C}} you need an angle. How can you get one from three sides?", "Use the cosine rule for angle A (between the 6 cm and 9 cm sides).", "Then area = {{1/2 * 6 * 9 * sin A}}, keeping the full value of A."],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q07",
        question: "Points A and B are on level ground, 50 m apart, in a straight line with the foot of a vertical tower. From A, the angle of elevation of the top of the tower, T, is 28°. From B, which is closer to the tower, the angle of elevation of T is 47°.\n\nCalculate the height of the tower. Give your answer correct to 3 significant figures.",
        diagram: D_M3Q07,
        options: ["72.1 m", "52.7 m", "33.8 m", "17.8 m"],
        answerIndex: 1,
        explanation:
          "In triangle ABT: angle TAB = 28°, angle ABT = 180° − 47° = 133°, so angle ATB = 19°. Sine rule: BT = {{(50 sin 28°)/(sin 19°)}} = 72.10… m. Then in the right-angled triangle at the tower, height = BT sin 47° = 52.7 m. 72.1 m is BT — stopping one step early. 33.8 m multiplies BT by sin 28° (the wrong angle for BT). 17.8 m uses 47° inside triangle ABT instead of its supplement 133°.",
        difficulty: "core",
        guideRef: "sine-rule",
        hints: ["Look at the non-right-angled triangle ABT. Find its three angles.", "Angle ABT is on a straight line with the 47° angle.", "Find BT with the sine rule, then use SOH CAH TOA in the right-angled triangle."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q08",
        question: "Solve tan x = −1.5 for 0° ≤ x ≤ 360°. Give your answers correct to 1 decimal place.",
        options: ["56.3° and 236.3°", "123.7° and 236.3°", "−56.3° and 123.7°", "123.7° and 303.7°"],
        answerIndex: 3,
        explanation:
          "The calculator gives {{tan^(-1)(-1.5)}} = −56.3°, which is outside the interval. tan repeats every 180°, so add 180°: 123.7°, and again: 303.7°. 56.3° and 236.3° solve tan x = +1.5. 236.3° uses the 'sin-style' pairing 360° − 123.7°, but tan is not symmetrical that way. −56.3° is not in 0°–360°.",
        difficulty: "core",
        guideRef: "trig-graphs",
        hints: ["The calculator value is negative — is it in the interval?", "tan x has period 180°: keep adding 180° until you leave the interval."],
        strategy: "Find a pattern",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q09",
        question: "The point (180°, −1) lies on the graph of y = cos x.\n\nThe graph is transformed to y = cos x − 3. What are the coordinates of the image of (180°, −1)?",
        options: ["(180°, −4)", "(180°, 2)", "(177°, −1)", "(183°, −1)"],
        answerIndex: 0,
        explanation:
          "y = f(x) − 3 is a translation 3 units **down**: x stays the same and y decreases by 3, giving (180°, −4). (180°, 2) moves up. (177°, −1) and (183°, −1) treat it as a horizontal shift, which would need the −3 *inside* the bracket: cos(x − 3).",
        difficulty: "core",
        guideRef: "trig-graphs",
        hints: ["Is the −3 inside or outside the cos?", "Outside changes y; inside changes x."],
        strategy: "Check by substituting",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q10",
        question: "Two boats leave a harbour at the same time. Boat A sails 12 km on a bearing of 035°. Boat B sails 9 km on a bearing of 115°.\n\nCalculate the distance between the two boats. Give your answer correct to 3 significant figures.",
        options: ["15 km", "16.2 km", "20.3 km", "13.7 km"],
        answerIndex: 3,
        explanation:
          "The angle between the two paths at the harbour is 115° − 35° = 80°. {{d^2 = 12^2 + 9^2 - 2 * 12 * 9 * cos 80°}} = 225 − 37.5 = 187.5, so d = 13.7 km. 15 km assumes a right angle (Pythagoras). 16.2 km adds 2bc cos A. 20.3 km uses 115° + 35° = 150° — add bearings only when they are on opposite sides of north.",
        difficulty: "core",
        guideRef: "cosine-rule",
        hints: ["Sketch both paths from the harbour with a north line.", "Both bearings are measured clockwise from north, so the angle between the paths is their difference."],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q11",
        question: "The diagram shows a circle, centre O, radius 8 cm. A and B are points on the circle with angle AOB = 100°.\n\nCalculate the area of the shaded segment. Give your answer correct to 3 significant figures.",
        diagram: D_M3Q11,
        options: ["55.9 cm²", "87.4 cm²", "24.3 cm²", "61.4 cm²"],
        answerIndex: 2,
        explanation:
          "Sector = {{100/360 * pi * 8^2}} = 55.85… cm². Triangle OAB = {{1/2 * 8 * 8 * sin 100°}} = 31.51… cm². Segment = 55.85 − 31.51 = 24.3 cm². 55.9 cm² is the sector alone; 87.4 cm² adds the triangle; 61.4 cm² uses cos 100° (negative), which makes the 'triangle' subtract the wrong way.",
        difficulty: "core",
        guideRef: "area-sine",
        hints: ["Segment = sector − triangle.", "Triangle OAB: two radii with 100° between them."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q12",
        question: "Simplify fully {{(1 - sin^2 x) tan x}}.",
        options: ["{{sin x}}", "{{sin x cos x}}", "{{-sin x cos x}}", "{{(cos^3 x)/(sin x)}}"],
        answerIndex: 1,
        explanation:
          "From {{sin^2 x + cos^2 x = 1}}, {{1 - sin^2 x = cos^2 x}}. So the expression is {{cos^2 x * (sin x)/(cos x)}} = sin x cos x. sin x comes from replacing {{1 - sin^2 x}} with cos x instead of cos²x. −sin x cos x comes from writing {{1 - sin^2 x = -cos^2 x}} (a sign slip). {{(cos^3 x)/(sin x)}} uses tan x upside down, {{(cos x)/(sin x)}}.",
        difficulty: "core",
        guideRef: "trig-identities",
        hints: ["Can you rewrite {{1 - sin^2 x}} using a Pythagorean identity?", "Replace tan x by {{(sin x)/(cos x)}} and cancel a factor of cos x."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q13",
        question: "Solve tan 2x = 1 for 0° ≤ x ≤ 360°.",
        options: ["22.5°, 112.5°", "45°, 225°", "22.5°, 202.5°", "22.5°, 112.5°, 202.5°, 292.5°"],
        answerIndex: 3,
        explanation:
          "If 0° ≤ x ≤ 360° then 0° ≤ 2x ≤ 720°. tan 2x = 1 gives 2x = 45°, 225°, 405°, 585° (adding 180° each time), so x = 22.5°, 112.5°, 202.5°, 292.5°. 22.5°, 112.5° only looks for 2x in 0°–360°. 45°, 225° forgets to halve. 22.5°, 202.5° halves first and then adds 180°, but the period of tan 2x is 90°.",
        difficulty: "challenge",
        guideRef: "trig-equations",
        hints: ["Let u = 2x. What interval is u in?", "Solve tan u = 1 for every u in 0°–720°.", "Now halve each value."],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q14",
        question: "Triangle ABC has AB = 8 cm, AC = 10 cm and area 24 cm². Angle BAC is **obtuse**.\n\nCalculate the length of BC. Give your answer correct to 3 significant figures.",
        options: ["6 cm", "12.8 cm", "17.1 cm", "17.8 cm"],
        answerIndex: 2,
        explanation:
          "{{1/2 * 8 * 10 * sin A = 24}} gives sin A = 0.6. A is obtuse, so cos A = −{{sqrt(1 - 0.36)}} = −0.8 (A = 143.1°). Cosine rule: {{BC^2 = 64 + 100 - 2 * 8 * 10 * (-0.8)}} = 164 + 128 = 292, so BC = 17.1 cm. 6 cm uses the acute angle (cos A = +0.8, BC² = 36). 12.8 cm is {{sqrt(164)}}, assuming a right angle. 17.8 cm forgets the half, so sin A = 0.3.",
        difficulty: "challenge",
        guideRef: "area-sine",
        hints: ["Use the area to find sin A.", "Two angles have sin A = 0.6. Which one is obtuse, and what is its cosine?", "Now use the cosine rule for BC."],
        strategy: "Split into cases",
      },
      {
        kind: "mcq",
        id: "further-trigonometry-m3-q15",
        question: "Given that tan θ = 2 and 180° < θ < 270°, find the exact value of sin θ.",
        options: ["{{(2 sqrt(5))/5}}", "{{-(2 sqrt(5))/5}}", "{{-sqrt(5)/5}}", "{{-2/3}}"],
        answerIndex: 1,
        explanation:
          "Draw a right-angled triangle with opposite 2 and adjacent 1: hypotenuse {{sqrt(5)}}, so |sin θ| = {{2/sqrt(5) = (2 sqrt(5))/5}}. For 180° < θ < 270° sin θ is negative (tan is positive because sin and cos are **both** negative), so sin θ = {{-(2 sqrt(5))/5}}. The positive value ignores the interval. {{-sqrt(5)/5}} is cos θ. {{-2/3}} uses 2 + 1 = 3 as the hypotenuse instead of Pythagoras.",
        difficulty: "challenge",
        guideRef: "trig-identities",
        hints: ["Think of tan θ = {{2/1}} as opposite over adjacent.", "Find the hypotenuse with Pythagoras.", "Between 180° and 270°, what are the signs of sin and cos?"],
        strategy: "Draw a diagram",
      },
    ],
  },
];
