// ---------------------------------------------------------------------------
// Statistics — Practice Papers 3 and 4.
// Paper 3: mixed practice in fresh contexts (mostly short, 3 written).
// Paper 4: exam style, modelled on Edexcel 4MA1 Higher statistics questions —
//          linked parts, cumulative frequency and histogram diagrams, "show that".
// ---------------------------------------------------------------------------
import type { Paper } from "../../types.ts";

// Cumulative frequency of 80 run times (8 < t ≤ 20), points joined with straight lines.
const RUN_CF = `<svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency graph of 80 run times from 8 to 20 minutes, through (8, 0), (10, 6), (12, 20), (14, 44), (16, 64), (18, 76) and (20, 80)"><rect x="0" y="0" width="460" height="330" fill="#ffffff"/><line x1="60" y1="40" x2="60" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="90" y1="40" x2="90" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="120" y1="40" x2="120" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="150" y1="40" x2="150" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="180" y1="40" x2="180" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="210" y1="40" x2="210" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="240" y1="40" x2="240" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="270" y1="40" x2="270" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="300" y1="40" x2="300" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="330" y1="40" x2="330" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="360" y1="40" x2="360" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="390" y1="40" x2="390" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="420" y1="40" x2="420" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="274" x2="420" y2="274" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="268" x2="420" y2="268" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="262" x2="420" y2="262" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="256" x2="420" y2="256" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="250" x2="420" y2="250" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="244" x2="420" y2="244" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="238" x2="420" y2="238" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="232" x2="420" y2="232" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="226" x2="420" y2="226" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="220" x2="420" y2="220" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="214" x2="420" y2="214" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="208" x2="420" y2="208" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="202" x2="420" y2="202" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="196" x2="420" y2="196" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="190" x2="420" y2="190" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="184" x2="420" y2="184" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="178" x2="420" y2="178" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="172" x2="420" y2="172" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="166" x2="420" y2="166" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="160" x2="420" y2="160" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="154" x2="420" y2="154" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="148" x2="420" y2="148" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="142" x2="420" y2="142" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="136" x2="420" y2="136" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="130" x2="420" y2="130" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="124" x2="420" y2="124" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="118" x2="420" y2="118" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="112" x2="420" y2="112" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="106" x2="420" y2="106" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="100" x2="420" y2="100" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="94" x2="420" y2="94" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="88" x2="420" y2="88" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="82" x2="420" y2="82" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="76" x2="420" y2="76" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="70" x2="420" y2="70" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="64" x2="420" y2="64" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="58" x2="420" y2="58" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="52" x2="420" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="46" x2="420" y2="46" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="40" x2="420" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="40" x2="60" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="90" y1="40" x2="90" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="120" y1="40" x2="120" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="150" y1="40" x2="150" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="180" y1="40" x2="180" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="210" y1="40" x2="210" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="240" y1="40" x2="240" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="270" y1="40" x2="270" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="300" y1="40" x2="300" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="330" y1="40" x2="330" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="360" y1="40" x2="360" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="390" y1="40" x2="390" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="420" y1="40" x2="420" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="250" x2="420" y2="250" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="220" x2="420" y2="220" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="190" x2="420" y2="190" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="160" x2="420" y2="160" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="130" x2="420" y2="130" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="100" x2="420" y2="100" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="70" x2="420" y2="70" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="40" x2="420" y2="40" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="280" x2="60" y2="40" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">8</text><text x="120" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="180" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">12</text><text x="240" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">14</text><text x="300" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">16</text><text x="360" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">18</text><text x="420" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="54" y="284" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="254" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">10</text><text x="54" y="224" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">20</text><text x="54" y="194" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">30</text><text x="54" y="164" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">40</text><text x="54" y="134" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">50</text><text x="54" y="104" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">60</text><text x="54" y="74" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">70</text><text x="54" y="44" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">80</text><text x="240" y="314" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Time (t minutes)</text><text x="16" y="160" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 160)">Cumulative frequency</text><polyline points="60,280 120,262 180,220 240,148 300,88 360,52 420,40" fill="none" stroke="#4338ca" stroke-width="2"/><circle cx="60" cy="280" r="3" fill="#4338ca"/><circle cx="120" cy="262" r="3" fill="#4338ca"/><circle cx="180" cy="220" r="3" fill="#4338ca"/><circle cx="240" cy="148" r="3" fill="#4338ca"/><circle cx="300" cy="88" r="3" fill="#4338ca"/><circle cx="360" cy="52" r="3" fill="#4338ca"/><circle cx="420" cy="40" r="3" fill="#4338ca"/></svg>`;

// Histogram of library visit times, frequency density axis deliberately unscaled.
const LIBRARY_HIST = `<svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of time spent in a library with bars 0 to 10 (height 8 small squares), 10 to 20 (14 small squares), 20 to 40 (15 small squares), 40 to 60 (9 small squares) and 60 to 100 (3 small squares); the frequency density axis has no scale"><rect x="0" y="0" width="460" height="330" fill="#ffffff"/><line x1="60" y1="40" x2="60" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="96" y1="40" x2="96" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="132" y1="40" x2="132" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="168" y1="40" x2="168" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="204" y1="40" x2="204" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="240" y1="40" x2="240" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="276" y1="40" x2="276" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="312" y1="40" x2="312" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="348" y1="40" x2="348" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="384" y1="40" x2="384" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="420" y1="40" x2="420" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="265" x2="420" y2="265" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="250" x2="420" y2="250" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="235" x2="420" y2="235" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="220" x2="420" y2="220" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="205" x2="420" y2="205" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="190" x2="420" y2="190" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="175" x2="420" y2="175" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="160" x2="420" y2="160" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="145" x2="420" y2="145" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="130" x2="420" y2="130" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="115" x2="420" y2="115" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="100" x2="420" y2="100" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="85" x2="420" y2="85" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="70" x2="420" y2="70" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="55" x2="420" y2="55" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="40" x2="420" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="40" x2="60" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="96" y1="40" x2="96" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="132" y1="40" x2="132" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="168" y1="40" x2="168" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="204" y1="40" x2="204" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="240" y1="40" x2="240" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="276" y1="40" x2="276" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="312" y1="40" x2="312" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="348" y1="40" x2="348" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="384" y1="40" x2="384" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="420" y1="40" x2="420" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="205" x2="420" y2="205" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="130" x2="420" y2="130" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="55" x2="420" y2="55" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="280" x2="60" y2="40" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="96" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="132" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="168" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="204" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="240" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="276" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60</text><text x="312" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">70</text><text x="348" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">80</text><text x="384" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">90</text><text x="420" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">100</text><text x="240" y="314" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Time spent (t minutes)</text><text x="16" y="160" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 160)">Frequency density</text><rect x="60" y="160" width="36" height="120" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="96" y="70" width="36" height="210" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="132" y="55" width="72" height="225" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="204" y="145" width="72" height="135" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="276" y="235" width="144" height="45" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/></svg>`;

// Cumulative frequency of 120 bus journey times (0 < t ≤ 60).
const JOURNEY_CF = `<svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency graph of 120 journey times from 0 to 60 minutes, through (0, 0), (10, 8), (20, 30), (30, 68), (40, 98), (50, 114) and (60, 120)"><rect x="0" y="0" width="460" height="330" fill="#ffffff"/><line x1="60" y1="40" x2="60" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="66" y1="40" x2="66" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="72" y1="40" x2="72" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="78" y1="40" x2="78" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="84" y1="40" x2="84" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="90" y1="40" x2="90" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="96" y1="40" x2="96" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="102" y1="40" x2="102" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="108" y1="40" x2="108" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="114" y1="40" x2="114" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="120" y1="40" x2="120" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="126" y1="40" x2="126" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="132" y1="40" x2="132" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="138" y1="40" x2="138" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="144" y1="40" x2="144" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="150" y1="40" x2="150" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="156" y1="40" x2="156" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="162" y1="40" x2="162" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="168" y1="40" x2="168" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="174" y1="40" x2="174" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="180" y1="40" x2="180" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="186" y1="40" x2="186" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="192" y1="40" x2="192" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="198" y1="40" x2="198" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="204" y1="40" x2="204" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="210" y1="40" x2="210" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="216" y1="40" x2="216" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="222" y1="40" x2="222" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="228" y1="40" x2="228" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="234" y1="40" x2="234" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="240" y1="40" x2="240" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="246" y1="40" x2="246" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="252" y1="40" x2="252" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="258" y1="40" x2="258" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="264" y1="40" x2="264" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="270" y1="40" x2="270" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="276" y1="40" x2="276" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="282" y1="40" x2="282" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="288" y1="40" x2="288" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="294" y1="40" x2="294" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="300" y1="40" x2="300" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="306" y1="40" x2="306" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="312" y1="40" x2="312" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="318" y1="40" x2="318" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="324" y1="40" x2="324" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="330" y1="40" x2="330" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="336" y1="40" x2="336" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="342" y1="40" x2="342" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="348" y1="40" x2="348" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="354" y1="40" x2="354" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="360" y1="40" x2="360" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="366" y1="40" x2="366" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="372" y1="40" x2="372" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="378" y1="40" x2="378" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="384" y1="40" x2="384" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="390" y1="40" x2="390" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="396" y1="40" x2="396" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="402" y1="40" x2="402" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="408" y1="40" x2="408" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="414" y1="40" x2="414" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="420" y1="40" x2="420" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="272" x2="420" y2="272" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="264" x2="420" y2="264" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="256" x2="420" y2="256" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="248" x2="420" y2="248" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="240" x2="420" y2="240" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="232" x2="420" y2="232" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="224" x2="420" y2="224" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="216" x2="420" y2="216" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="208" x2="420" y2="208" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="200" x2="420" y2="200" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="192" x2="420" y2="192" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="184" x2="420" y2="184" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="176" x2="420" y2="176" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="168" x2="420" y2="168" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="160" x2="420" y2="160" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="152" x2="420" y2="152" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="144" x2="420" y2="144" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="136" x2="420" y2="136" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="128" x2="420" y2="128" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="120" x2="420" y2="120" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="112" x2="420" y2="112" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="104" x2="420" y2="104" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="96" x2="420" y2="96" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="88" x2="420" y2="88" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="80" x2="420" y2="80" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="72" x2="420" y2="72" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="64" x2="420" y2="64" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="56" x2="420" y2="56" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="48" x2="420" y2="48" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="40" x2="420" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="40" x2="60" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="90" y1="40" x2="90" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="120" y1="40" x2="120" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="150" y1="40" x2="150" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="180" y1="40" x2="180" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="210" y1="40" x2="210" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="240" y1="40" x2="240" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="270" y1="40" x2="270" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="300" y1="40" x2="300" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="330" y1="40" x2="330" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="360" y1="40" x2="360" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="390" y1="40" x2="390" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="420" y1="40" x2="420" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="240" x2="420" y2="240" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="200" x2="420" y2="200" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="160" x2="420" y2="160" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="120" x2="420" y2="120" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="80" x2="420" y2="80" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="40" x2="420" y2="40" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="280" x2="60" y2="40" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="120" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="180" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="240" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="300" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="360" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="420" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60</text><text x="54" y="284" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="244" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">20</text><text x="54" y="204" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">40</text><text x="54" y="164" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">60</text><text x="54" y="124" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">80</text><text x="54" y="84" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">100</text><text x="54" y="44" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">120</text><text x="240" y="314" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Journey time (t minutes)</text><text x="16" y="160" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 160)">Cumulative frequency</text><polyline points="60,280 120,264 180,220 240,144 300,84 360,52 420,40" fill="none" stroke="#4338ca" stroke-width="2"/><circle cx="60" cy="280" r="3" fill="#4338ca"/><circle cx="120" cy="264" r="3" fill="#4338ca"/><circle cx="180" cy="220" r="3" fill="#4338ca"/><circle cx="240" cy="144" r="3" fill="#4338ca"/><circle cx="300" cy="84" r="3" fill="#4338ca"/><circle cx="360" cy="52" r="3" fill="#4338ca"/><circle cx="420" cy="40" r="3" fill="#4338ca"/></svg>`;

// Histogram of ages at a concert (labelled frequency density).
const CONCERT_HIST = `<svg viewBox="0 0 460 330" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of ages at a concert: 10 to 15 frequency density 4, 15 to 20 density 9, 20 to 30 density 6, 30 to 50 density 1.5, 50 to 70 density 0.5"><rect x="0" y="0" width="460" height="330" fill="#ffffff"/><line x1="60" y1="40" x2="60" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="90" y1="40" x2="90" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="120" y1="40" x2="120" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="150" y1="40" x2="150" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="180" y1="40" x2="180" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="210" y1="40" x2="210" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="240" y1="40" x2="240" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="270" y1="40" x2="270" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="300" y1="40" x2="300" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="330" y1="40" x2="330" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="360" y1="40" x2="360" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="390" y1="40" x2="390" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="420" y1="40" x2="420" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="268" x2="420" y2="268" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="256" x2="420" y2="256" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="244" x2="420" y2="244" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="232" x2="420" y2="232" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="220" x2="420" y2="220" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="208" x2="420" y2="208" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="196" x2="420" y2="196" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="184" x2="420" y2="184" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="172" x2="420" y2="172" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="160" x2="420" y2="160" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="148" x2="420" y2="148" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="136" x2="420" y2="136" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="124" x2="420" y2="124" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="112" x2="420" y2="112" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="100" x2="420" y2="100" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="88" x2="420" y2="88" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="76" x2="420" y2="76" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="64" x2="420" y2="64" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="52" x2="420" y2="52" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="40" x2="420" y2="40" stroke="#e2e8f0" stroke-width="1"/><line x1="60" y1="40" x2="60" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="90" y1="40" x2="90" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="120" y1="40" x2="120" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="150" y1="40" x2="150" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="180" y1="40" x2="180" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="210" y1="40" x2="210" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="240" y1="40" x2="240" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="270" y1="40" x2="270" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="300" y1="40" x2="300" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="330" y1="40" x2="330" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="360" y1="40" x2="360" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="390" y1="40" x2="390" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="420" y1="40" x2="420" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="256" x2="420" y2="256" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="232" x2="420" y2="232" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="208" x2="420" y2="208" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="184" x2="420" y2="184" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="160" x2="420" y2="160" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="136" x2="420" y2="136" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="112" x2="420" y2="112" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="88" x2="420" y2="88" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="64" x2="420" y2="64" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="40" x2="420" y2="40" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="280" x2="420" y2="280" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="280" x2="60" y2="40" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="120" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="180" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="240" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="300" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="360" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60</text><text x="420" y="296" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">70</text><text x="54" y="284" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="236" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">2</text><text x="54" y="188" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">4</text><text x="54" y="140" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">6</text><text x="54" y="92" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">8</text><text x="54" y="44" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">10</text><text x="240" y="314" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Age (a years)</text><text x="16" y="160" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 160)">Frequency density</text><rect x="60" y="184" width="30" height="96" fill="#bbf7d0" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="90" y="64" width="30" height="216" fill="#bbf7d0" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="120" y="136" width="60" height="144" fill="#bbf7d0" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="180" y="244" width="120" height="36" fill="#bbf7d0" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="300" y="268" width="120" height="12" fill="#bbf7d0" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/></svg>`;

export const morePapers: Paper[] = [
  // =========================================================================
  // PRACTICE PAPER 3
  // =========================================================================
  {
    id: "statistics-p3",
    title: "Practice Paper 3",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "statistics-p3-q01",
        question:
          "Mei records the price of a drink at seven stalls in a hawker centre:\n\n$1.80, $2.20, $1.50, $2.80, $2.20, $3.10, $1.90\n\nWork out the median price and the range of the prices. Give the median first, then the range, both in dollars.",
        answer: { type: "list", values: [2.2, 1.6], ordered: true, display: "median $2.20, range $1.60" },
        traps: [
          {
            spec: { type: "list", values: [2.8, 1.6], ordered: true },
            feedback: "$2.80 is the middle of the list *as written*. Put the prices in order first: $1.50, $1.80, $1.90, **$2.20**, $2.20, $2.80, $3.10.",
          },
          {
            spec: { type: "list", values: [2.2, 1.3], ordered: true },
            feedback: "$1.30 uses $1.80 as the smallest price, but the smallest is $1.50. Range = $3.10 − $1.50 = $1.60.",
          },
        ],
        solution: [
          "Order the prices: 1.50, 1.80, 1.90, 2.20, 2.20, 2.80, 3.10.",
          "There are 7 values, so the median is the {{(7+1)/2}} = 4th value: $2.20.",
          "Range = largest − smallest = 3.10 − 1.50 = $1.60.",
        ],
        commonError: "Picking the middle value before putting the data in order.",
        difficulty: "warmup",
        guideRef: "averages-raw-data",
        hints: ["Write the prices in order from smallest to largest first.", "With 7 values, the median is the 4th one."],
        strategy: "Organise the data first",
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "statistics-p3-q02",
        question:
          "Arjun has taken five IGCSE mock papers. His mean mark is 72. Four of his marks are 65, 80, 71 and 68.\n\nWork out his fifth mark.",
        answer: { type: "number", value: 76 },
        traps: [
          {
            spec: { type: "number", value: 72 },
            feedback: "The fifth mark isn't automatically the mean. Use the total: 5 × 72 = 360 marks altogether.",
          },
          {
            spec: { type: "number", value: 71 },
            feedback: "That's the mean of the four marks you know. The fifth mark has to bring the **total** up to 5 × 72 = 360.",
          },
        ],
        solution: [
          "Total of all five marks = 5 × 72 = 360.",
          "Total of the four known marks = 65 + 80 + 71 + 68 = 284.",
          "Fifth mark = 360 − 284 = 76.",
        ],
        commonError: "Trying to 'average' the known marks instead of working with the total.",
        difficulty: "warmup",
        guideRef: "averages-raw-data",
        hints: ["If you know the mean and how many values there are, what else do you know?", "Mean × number of values = total."],
        strategy: "Work backwards",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "mcq",
        id: "statistics-p3-q03",
        question:
          "The table shows the weekly pocket money, $m, of 45 students.\n\n| Pocket money ($m) | Frequency |\n|---|---|\n| 0 < m ≤ 5 | 4 |\n| 5 < m ≤ 10 | 15 |\n| 10 < m ≤ 15 | 12 |\n| 15 < m ≤ 20 | 9 |\n| 20 < m ≤ 25 | 3 |\n| 25 < m ≤ 30 | 2 |\n\nWhich class interval contains the median?",
        options: ["5 < m ≤ 10", "20 < m ≤ 25", "10 < m ≤ 15", "15 < m ≤ 20"],
        answerIndex: 2,
        explanation:
          "With 45 students the median is the {{(45+1)/2}} = 23rd value. Running totals: 4, 19, 31 … so the 20th to 31st values lie in 10 < m ≤ 15. The class 5 < m ≤ 10 is the **modal** class (highest frequency), not the median class. 20 < m ≤ 25 comes from treating 22.5 (the position) as if it were an amount of money, and 15 < m ≤ 20 comes from taking the middle of the money scale rather than the middle *student*.",
        difficulty: "warmup",
        guideRef: "frequency-tables",
        hints: ["How many students are there? Which position is the middle one?", "Add up the frequencies as you go down the table until you pass the 23rd student."],
        strategy: "Keep a running total",
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "statistics-p3-q04",
        question:
          "Here are the MRT journey times, in minutes, of 11 Year 11 students, in order:\n\n12, 15, 17, 18, 20, 22, 23, 25, 28, 31, 35\n\nWork out the interquartile range.",
        answer: { type: "number", value: 11, display: "11 minutes" },
        traps: [
          {
            spec: { type: "number", value: 23 },
            feedback: "23 is the range (35 − 12). The interquartile range is the upper quartile minus the lower quartile.",
          },
          {
            spec: { type: "number", value: 9.25 },
            feedback: "You've used the {{n/4}}th position. For a list of n values use the {{(n+1)/4}}th value for Q1 and the {{3(n+1)/4}}th value for Q3 — here the 3rd and 9th.",
          },
        ],
        solution: [
          "n = 11, so Q1 is the {{(11+1)/4}} = 3rd value and Q3 is the {{3(11+1)/4}} = 9th value.",
          "Q1 = 17 and Q3 = 28.",
          "IQR = 28 − 17 = 11 minutes.",
        ],
        commonError: "Working out the range instead of the interquartile range.",
        difficulty: "warmup",
        guideRef: "quartiles-iqr",
        hints: ["Which positions hold the lower and upper quartiles when n = 11?", "Use the {{(n+1)/4}}th and {{3(n+1)/4}}th values."],
        strategy: "Find positions before values",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "statistics-p3-q05",
        question:
          "In a science test, the 24 students in class 11A have a mean mark of 68. The 16 students in class 11B have a mean mark of 78.\n\nWork out the mean mark of all 40 students.",
        answer: { type: "number", value: 72 },
        traps: [
          {
            spec: { type: "number", value: 73 },
            feedback: "73 is the mean of the two means. That only works when the classes are the same size — 11A has more students, so its mean counts for more. Work with the totals.",
          },
        ],
        solution: [
          "Total for 11A = 24 × 68 = 1632.",
          "Total for 11B = 16 × 78 = 1248.",
          "Combined mean = {{(1632 + 1248)/40 = 2880/40}} = 72.",
        ],
        solutions: [
          {
            label: "Weighted balance",
            steps: [
              "The two means are 10 apart. The combined mean splits that gap in the inverse ratio of the class sizes, 16 : 24 = 2 : 3.",
              "So it sits {{2/5}} of the way from 68 towards 78: 68 + {{2/5}} × 10 = 72.",
              "Quick check: it's nearer 68 because 11A is the bigger class.",
            ],
          },
        ],
        commonError: "Averaging the two means, ignoring the different class sizes.",
        difficulty: "core",
        guideRef: "averages-raw-data",
        hints: [
          "Can you just average 68 and 78? Which class should count for more?",
          "Turn each mean back into a total mark for that class.",
          "Add the totals and divide by the total number of students.",
        ],
        strategy: "Work with totals",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "short",
        id: "statistics-p3-q06",
        question:
          "40 students timed how long they took to solve a logic puzzle.\n\n| Time (t minutes) | Frequency |\n|---|---|\n| 0 < t ≤ 10 | 5 |\n| 10 < t ≤ 20 | 12 |\n| 20 < t ≤ 30 | 15 |\n| 30 < t ≤ 40 | 6 |\n| 40 < t ≤ 50 | 2 |\n\nWork out an estimate for the mean time, in minutes.",
        answer: { type: "number", value: 22, display: "22 minutes" },
        traps: [
          {
            spec: { type: "number", value: 27 },
            feedback: "You've used the upper class boundaries (10, 20, …). Use the **midpoints** (5, 15, 25, 35, 45) — they are the best single guess for every value in a class.",
          },
          {
            spec: { type: "number", value: 176 },
            feedback: "You divided by 5, the number of classes. Divide the total by the number of **students**, 40.",
          },
        ],
        solution: [
          "Midpoints: 5, 15, 25, 35, 45.",
          "Σfx = 5×5 + 15×12 + 25×15 + 35×6 + 45×2 = 25 + 180 + 375 + 210 + 90 = 880.",
          "Estimated mean = 880 ÷ 40 = 22 minutes.",
        ],
        commonError: "Multiplying frequencies by the class width or the upper bound instead of the midpoint.",
        difficulty: "core",
        guideRef: "frequency-tables",
        hints: [
          "You don't know the exact times. What single value best represents each class?",
          "Multiply each midpoint by its frequency and add.",
          "Divide by the total frequency, 40.",
        ],
        strategy: "Use a representative value",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "written",
        id: "statistics-p3-q07",
        question:
          "Siti can take either of two bus routes to school. She records her journey times, in minutes, on each route over a term.\n\n| | Median | Interquartile range |\n|---|---|---|\n| Route 12 | 18 | 9 |\n| Route 36 | 21 | 3 |\n\nCompare the journey times on the two routes. Siti must be at school by a fixed time every morning. Which route should she choose? Give a reason.",
        marks: 3,
        modelAnswer:
          "On average the journey on Route 12 is quicker, because its median (18 minutes) is lower than Route 36's (21 minutes).\n\nThe journey times on Route 36 are more consistent, because its interquartile range (3 minutes) is smaller than Route 12's (9 minutes).\n\nTo be *sure* of arriving on time she might choose Route 36: its times are predictable (the middle half lie within a 3-minute band), whereas on Route 12 some journeys could take much longer than 18 minutes. (Choosing Route 12 for the shorter typical journey also earns the mark if justified.)",
        markScheme: [
          { point: "Compares medians in context: Route 12 is quicker on average (18 < 21)", keywords: ["median", "average", "quicker", "faster", "shorter", "18", "lower", "less"] },
          { point: "Compares IQRs in context: Route 36 is more consistent / less spread (3 < 9)", keywords: ["iqr", "interquartile", "consistent", "spread", "varied", "3", "9"] },
          { point: "A choice justified by the consistency or the average", keywords: ["route 36", "36", "predictable", "reliable", "consistent", "route 12"] },
        ],
        commonError: "Comparing the numbers without saying what they mean in context (e.g. 'Route 36 has a smaller IQR' with no mention of how consistent the journey times are).",
        difficulty: "core",
        guideRef: "quartiles-iqr",
        hints: [
          "Make one comparison about the **average** and one about the **spread**.",
          "What does a smaller IQR tell you about how predictable the journey is?",
          "Always say what the numbers mean for the journeys, not just which is bigger.",
        ],
        strategy: "Compare average and spread",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "statistics-p3-q08",
        question:
          "80 students ran 2.4 km for a fitness test. The cumulative frequency graph shows information about their times.\n\nUse the graph to find an estimate for the interquartile range of the times. Give your answer in minutes.",
        diagram: RUN_CF,
        answer: { type: "number", value: 3.6, tolerance: 0.3, display: "3.6 minutes (Q3 ≈ 15.6, Q1 = 12)" },
        traps: [
          {
            spec: { type: "number", value: 40 },
            feedback: "40 is the difference between the cumulative frequencies 60 and 20. Those are only the *positions* of the quartiles: read across from them to the graph and down to the time axis, then subtract the times.",
          },
          {
            spec: { type: "number", value: 12 },
            feedback: "12 minutes is the lower quartile on its own. Find the upper quartile too and subtract.",
          },
        ],
        solution: [
          "Total frequency = 80, so Q1 is at {{1/4}} × 80 = 20 and Q3 is at {{3/4}} × 80 = 60.",
          "Read across from 20 to the graph and down: Q1 = 12 minutes.",
          "Read across from 60 to the graph and down: Q3 ≈ 15.6 minutes.",
          "IQR ≈ 15.6 − 12 = 3.6 minutes.",
        ],
        commonError: "Reading the quartiles from the time axis and answering with a cumulative frequency.",
        difficulty: "core",
        guideRef: "cumulative-frequency",
        hints: [
          "Which cumulative frequencies match the lower and upper quartiles when the total is 80?",
          "Go across from 20 and from 60 on the vertical axis, then down to the time axis.",
          "Subtract the two times.",
        ],
        strategy: "Read across, then down",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "short",
        id: "statistics-p3-q09",
        question:
          "Use the same cumulative frequency graph of the 80 students' 2.4 km run times.\n\nStudents who take more than 17 minutes are asked to retake the test. Use the graph to find an estimate for the number of students who must retake.",
        diagram: RUN_CF,
        answer: { type: "number", value: 10, tolerance: 1 },
        traps: [
          {
            spec: { type: "number", value: 70, tolerance: 1 },
            feedback: "About 70 students took 17 minutes **or less** — that's what the graph gives at t = 17. You want the ones *more than* 17 minutes: 80 − 70.",
          },
        ],
        solution: [
          "Go up from 17 minutes on the time axis to the graph, then across: cumulative frequency ≈ 70.",
          "So about 70 students took 17 minutes or less.",
          "Number taking more than 17 minutes ≈ 80 − 70 = 10.",
        ],
        commonError: "Giving the cumulative frequency at 17 minutes (70) instead of subtracting it from the total.",
        difficulty: "core",
        guideRef: "cumulative-frequency",
        hints: [
          "What does the cumulative frequency at t = 17 count — students faster or slower than 17 minutes?",
          "Read up from 17 and across to the vertical axis.",
          "Subtract from the total of 80.",
        ],
        strategy: "Use the complement",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "statistics-p3-q10",
        question:
          "The histogram shows the times some people spent in a public library one Saturday. The frequency density axis has no scale.\n\n14 people spent between 10 and 20 minutes in the library.\n\nWork out the total number of people shown by the histogram.",
        diagram: LIBRARY_HIST,
        answer: { type: "number", value: 82 },
        traps: [
          {
            spec: { type: "number", value: 49 },
            feedback: "49 is the sum of the bar heights in small squares (8 + 14 + 15 + 9 + 3). In a histogram the **area** of each bar is the frequency — the wider bars count for more.",
          },
        ],
        solution: [
          "The 10–20 bar is 1 large square wide and 14 small squares tall: 14 small rectangles of area represent 14 people, so each grid rectangle (10 minutes × one small square) = 1 person.",
          "0–10: 1 × 8 = 8 people.",
          "20–40: 2 × 15 = 30 people.",
          "40–60: 2 × 9 = 18 people.",
          "60–100: 4 × 3 = 12 people.",
          "Total = 8 + 14 + 30 + 18 + 12 = 82 people.",
        ],
        solutions: [
          {
            label: "Find the scale first",
            steps: [
              "Frequency density of the 10–20 class = 14 ÷ 10 = 1.4, and its bar is 14 small squares tall, so each small square = 0.1.",
              "Heights: 0.8, 1.4, 1.5, 0.9, 0.3.",
              "Frequencies = density × width: 8, 14, 30, 18, 12. Total 82.",
            ],
          },
        ],
        commonError: "Treating bar heights as frequencies, which undercounts the wide classes.",
        difficulty: "core",
        guideRef: "histograms",
        hints: [
          "In a histogram, what represents the frequency — the height or the area?",
          "Use the 10–20 bar to work out how many people one grid rectangle stands for.",
          "Count the area of every bar in those rectangles.",
        ],
        strategy: "Find the scale first",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "statistics-p3-q11",
        question:
          "Use the same library histogram (14 people spent between 10 and 20 minutes).\n\nWork out an estimate for the number of people who spent more than 30 minutes in the library.",
        diagram: LIBRARY_HIST,
        answer: { type: "number", value: 45 },
        traps: [
          {
            spec: { type: "number", value: 60 },
            feedback: "You've included the whole 20–40 class. Only the part from 30 to 40 minutes counts — half of that bar's width.",
          },
          {
            spec: { type: "number", value: 30 },
            feedback: "You've left out the 30–40 part of the 20–40 class. Half of that bar (15 people) should be included too.",
          },
        ],
        solution: [
          "From the previous question: 20–40 has 30 people, 40–60 has 18, 60–100 has 12.",
          "30 to 40 minutes is half the width of the 20–40 bar, so estimate {{1/2}} × 30 = 15 people.",
          "Estimate = 15 + 18 + 12 = 45 people.",
        ],
        commonError: "Taking the whole of the 20–40 class instead of the part above 30 minutes.",
        difficulty: "core",
        guideRef: "histograms",
        hints: [
          "Which bars lie completely above 30 minutes? Which bar is only partly above?",
          "For the split bar, take the fraction of its width that lies above 30.",
          "Assume the people are spread evenly across a class.",
        ],
        strategy: "Split the bar",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "statistics-p3-q12",
        question:
          "The masses of 60 durians at a market are recorded.\n\n| Mass (m kg) | Frequency |\n|---|---|\n| 1.0 < m ≤ 1.5 | 9 |\n| 1.5 < m ≤ 2.0 | 18 |\n| 2.0 < m ≤ 3.0 | 24 |\n| 3.0 < m ≤ 5.0 | 9 |\n\nHana draws a histogram using the frequencies as the bar heights: 9, 18, 24 and 9.\n\n(a) Explain why her histogram gives a misleading picture of the data.\n\n(b) Work out the correct heights of the four bars.",
        marks: 3,
        modelAnswer:
          "(a) The classes have different widths. In a histogram the **area** of a bar represents the frequency. Hana's 3.0–5.0 bar is 4 times as wide as her 1.0–1.5 bar but the same height, so it looks like 4 times as many durians, even though both classes contain 9.\n\n(b) Height = frequency density = frequency ÷ class width.\n\n    9 ÷ 0.5 = 18,  18 ÷ 0.5 = 36,  24 ÷ 1 = 24,  9 ÷ 2 = 4.5\n\nThe bar heights should be 18, 36, 24 and 4.5.",
        markScheme: [
          { point: "Unequal class widths, so area (not height) must show frequency; wide bars look too big", keywords: ["area", "width", "unequal", "different widths", "wider"] },
          { point: "Uses frequency density = frequency ÷ class width", keywords: ["frequency density", "divide", "÷", "class width", "f/w"] },
          { point: "Correct heights 18, 36, 24, 4.5", keywords: ["18", "36", "24", "4.5"] },
        ],
        commonError: "Multiplying the frequency by the class width instead of dividing.",
        difficulty: "core",
        guideRef: "histograms",
        hints: [
          "Compare the widths of the four classes. Are they equal?",
          "In a histogram, which feature of a bar should match the frequency?",
          "Frequency density = frequency ÷ class width.",
        ],
        strategy: "Spot the error",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "statistics-p3-q13",
        question:
          "Zara has a list of n numbers with a mean of 15. She removes the number 3 from the list, and the mean of the numbers left is 16.\n\nWork out the value of n.",
        answer: { type: "number", value: 13, display: "n = 13" },
        traps: [
          {
            spec: { type: "number", value: 12 },
            feedback: "12 is how many numbers are left **after** Zara removes the 3. The question asks for n, the original count.",
          },
        ],
        solution: [
          "Original total = 15n.",
          "New total = 15n − 3, with n − 1 numbers, and its mean is 16.",
          "So 15n − 3 = 16(n − 1) = 16n − 16.",
          "n = 16 − 3 = 13.",
          "Check: 13 numbers total 195; remove 3 → 192; 192 ÷ 12 = 16 ✓.",
        ],
        solutions: [
          {
            label: "Share out the shortfall",
            steps: [
              "The removed number 3 is 12 below the old mean of 15.",
              "Taking it away removes a shortfall of 12, which is shared between the n − 1 numbers left and raises their mean by 1.",
              "So n − 1 = 12 ÷ 1 = 12, giving n = 13. Quicker, and it explains *why* the mean moves.",
            ],
          },
        ],
        commonError: "Writing 15n − 3 = 16n, forgetting that the count has gone down to n − 1.",
        difficulty: "challenge",
        guideRef: "averages-raw-data",
        hints: [
          "Write the original total in terms of n.",
          "How many numbers are left after 3 is removed? What is their total?",
          "Set new total = new mean × new count, and solve.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "written",
        id: "statistics-p3-q14",
        question:
          "The table shows the number of goals scored in each match by a school football team.\n\n| Goals | 0 | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|---|\n| Frequency | 4 | 7 | x | 5 | 2 |\n\nThe mean number of goals per match is 1.8.\n\nShow that x = 12.",
        marks: 3,
        modelAnswer:
          "Total number of matches = 4 + 7 + x + 5 + 2 = 18 + x.\n\nTotal number of goals = 0×4 + 1×7 + 2x + 3×5 + 4×2 = 30 + 2x.\n\nMean = {{(30 + 2x)/(18 + x) = 1.8}}\n\n    30 + 2x = 1.8(18 + x) = 32.4 + 1.8x\n    0.2x = 2.4\n    x = 12, as required.",
        markScheme: [
          { point: "Total goals 30 + 2x (Σfx in terms of x)", keywords: ["30 + 2x", "30+2x", "2x + 30", "2x+30", "2x"] },
          { point: "Total frequency 18 + x and forms the equation (30 + 2x)/(18 + x) = 1.8", keywords: ["18 + x", "18+x", "1.8(18", "= 1.8"] },
          { point: "Solves correctly to x = 12", keywords: ["0.2x", "2.4", "x = 12", "x=12", "12"] },
        ],
        commonError: "Dividing the total goals by 5 (the number of columns) instead of by the number of matches, 18 + x.",
        difficulty: "challenge",
        guideRef: "frequency-tables",
        hints: [
          "Write the total number of matches in terms of x.",
          "Write the total number of goals in terms of x — remember the 2-goal column contributes 2x.",
          "Mean = total goals ÷ total matches = 1.8. Clear the fraction and solve.",
        ],
        strategy: "Introduce a variable",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "statistics-p3-q15",
        question:
          "Kenji records the number of push-ups 11 friends can do, in order:\n\n4, 6, 7, 9, 10, 12, 13, 15, 16, 18, 21\n\nHe uses this rule: a value is an **outlier** if it is more than 1.5 × IQR above the upper quartile.\n\nThe largest value, 21, is replaced by a whole number y, and y becomes an outlier. Work out the smallest possible value of y.",
        answer: { type: "number", value: 30 },
        traps: [
          {
            spec: { type: "number", value: 26 },
            feedback: "You've added 1.5 × IQR to the **median**. Kenji's rule adds it to the upper quartile, 16.",
          },
          {
            spec: { type: "number", value: 29.5 },
            feedback: "29.5 is the boundary itself. y must be *more than* 29.5 and a whole number.",
          },
        ],
        solution: [
          "n = 11: Q1 is the 3rd value = 7 and Q3 is the 9th value = 16, so IQR = 9.",
          "Key insight: replacing the largest value by a bigger number does not move the 3rd or 9th values, so Q1, Q3 and the IQR stay the same.",
          "Outlier boundary = 16 + 1.5 × 9 = 16 + 13.5 = 29.5.",
          "y must be a whole number greater than 29.5, so the smallest is y = 30.",
        ],
        commonError: "Assuming the quartiles must be recalculated and change — or adding 1.5 × IQR to the median.",
        difficulty: "challenge",
        guideRef: "quartiles-iqr",
        hints: [
          "Find Q1, Q3 and the IQR of the original data.",
          "If you make the largest value even bigger, do the 3rd and 9th values change?",
          "Find the boundary Q3 + 1.5 × IQR. y must be a whole number bigger than it.",
        ],
        strategy: "Look for an invariant",
      },
    ],
  },

  // =========================================================================
  // PRACTICE PAPER 4 — EXAM STYLE
  // =========================================================================
  {
    id: "statistics-p4",
    title: "Practice Paper 4 — Exam style",
    questions: [
      // ---------------------------------------------------------------- q01
      {
        kind: "short",
        id: "statistics-p4-q01",
        question:
          "Here are the numbers of hours of sunshine in Singapore on 8 days in June:\n\n6.2, 7.5, 4.8, 8.1, 5.6, 7.5, 3.9, 6.8\n\nWork out the median number of hours of sunshine.",
        answer: { type: "number", value: 6.5, display: "6.5 hours" },
        traps: [
          {
            spec: { type: "number", value: 6.85 },
            feedback: "6.85 is halfway between the 4th and 5th values *as written* (8.1 and 5.6). Put the data in order first.",
          },
          {
            spec: { type: "number", value: 7.5 },
            feedback: "7.5 is the mode (it appears twice). The median is the middle value once the data is in order.",
          },
        ],
        solution: [
          "In order: 3.9, 4.8, 5.6, 6.2, 6.8, 7.5, 7.5, 8.1.",
          "8 values, so the median is halfway between the 4th and 5th values.",
          "Median = {{(6.2 + 6.8)/2}} = 6.5 hours.",
        ],
        commonError: "Not ordering the data, or picking just one of the two middle values.",
        difficulty: "warmup",
        guideRef: "averages-raw-data",
        hints: ["Order the data first.", "With an even number of values, the median is halfway between the middle two."],
      },
      // ---------------------------------------------------------------- q02
      {
        kind: "short",
        id: "statistics-p4-q02",
        question:
          "Ethan counted the number of people in each of 50 cars crossing the Causeway.\n\n| Number of people | 1 | 2 | 3 | 4 | 5 |\n|---|---|---|---|---|---|\n| Frequency | 18 | 15 | 9 | 6 | 2 |\n\nFind the median number of people per car.",
        answer: { type: "number", value: 2 },
        traps: [
          {
            spec: { type: "number", value: 3 },
            feedback: "3 is the middle of the *list of categories* 1–5. The median is the middle **car**: the 25th and 26th cars.",
          },
          {
            spec: { type: "number", value: 25.5 },
            feedback: "25.5 is the *position* of the median, not its value. Find which number of people the 25th and 26th cars have.",
          },
        ],
        solution: [
          "50 cars, so the median is halfway between the 25th and 26th values.",
          "Running totals: 18 cars have 1 person, 18 + 15 = 33 cars have 2 or fewer.",
          "The 25th and 26th cars both lie in the '2 people' group, so the median is 2.",
        ],
        commonError: "Choosing the middle column of the table, or giving the position 25.5 as the answer.",
        difficulty: "warmup",
        guideRef: "frequency-tables",
        hints: ["Where is the middle of 50 cars?", "Keep a running total of the frequencies until you pass the 26th car."],
        strategy: "Keep a running total",
      },
      // ---------------------------------------------------------------- q03
      {
        kind: "short",
        id: "statistics-p4-q03",
        question:
          "The ages, in years, of the 15 volunteers at a beach clean-up at East Coast Park are listed in order:\n\n12, 13, 13, 14, 15, 15, 16, 16, 17, 17, 18, 19, 21, 24, 35\n\nWork out the interquartile range of the ages.",
        answer: { type: "number", value: 5, display: "5 years" },
        traps: [
          {
            spec: { type: "number", value: 23 },
            feedback: "23 is the range (35 − 12), which the single 35-year-old stretches a lot. The IQR uses only the middle half: Q3 − Q1.",
          },
        ],
        solution: [
          "n = 15, so Q1 is the {{(15+1)/4}} = 4th value and Q3 is the 12th value.",
          "Q1 = 14 and Q3 = 19.",
          "IQR = 19 − 14 = 5 years.",
        ],
        commonError: "Giving the range, which is distorted by the extreme value 35.",
        difficulty: "warmup",
        guideRef: "quartiles-iqr",
        hints: ["Find the positions of the quartiles when n = 15.", "Q1 is the 4th value; Q3 is the 12th value."],
      },
      // ---------------------------------------------------------------- q04
      {
        kind: "short",
        id: "statistics-p4-q04",
        question:
          "The mean mass of 6 parcels is 4.5 kg. One parcel is delivered, and the mean mass of the remaining 5 parcels is 4.2 kg.\n\nWork out the mass of the parcel that was delivered. Give your answer in kg.",
        answer: { type: "number", value: 6, display: "6 kg" },
        traps: [
          {
            spec: { type: "number", value: 0.3 },
            feedback: "0.3 kg is the change in the mean, not the mass of the parcel. Compare the totals: 6 × 4.5 and 5 × 4.2.",
          },
        ],
        solution: [
          "Total mass of 6 parcels = 6 × 4.5 = 27 kg.",
          "Total mass of the remaining 5 = 5 × 4.2 = 21 kg.",
          "Delivered parcel = 27 − 21 = 6 kg.",
        ],
        commonError: "Subtracting the means (4.5 − 4.2) instead of the totals.",
        difficulty: "warmup",
        guideRef: "averages-raw-data",
        hints: ["Turn each mean into a total mass.", "The difference between the two totals is the parcel that left."],
        strategy: "Work with totals",
      },
      // ---------------------------------------------------------------- q05
      {
        kind: "short",
        id: "statistics-p4-q05",
        question:
          "The table gives information about the heights, h cm, of 60 chilli plants in a community garden.\n\n| Height (h cm) | Frequency |\n|---|---|\n| 0 < h ≤ 10 | 7 |\n| 10 < h ≤ 20 | 15 |\n| 20 < h ≤ 30 | 21 |\n| 30 < h ≤ 40 | 12 |\n| 40 < h ≤ 50 | 5 |\n\nWork out an estimate for the mean height. Give your answer correct to 3 significant figures.",
        answer: { type: "number", value: 23.8, display: "23.8 cm" },
        traps: [
          {
            spec: { type: "number", value: 28.8 },
            feedback: "You've used the upper bounds of the classes. Use the midpoints: 5, 15, 25, 35, 45.",
          },
          {
            spec: { type: "number", value: 286 },
            feedback: "You divided by 5, the number of classes. Divide Σfx by the total frequency, 60.",
          },
        ],
        solution: [
          "Midpoints: 5, 15, 25, 35, 45.",
          "Σfx = 5×7 + 15×15 + 25×21 + 35×12 + 45×5 = 35 + 225 + 525 + 420 + 225 = 1430.",
          "Estimated mean = 1430 ÷ 60 = 23.833… = 23.8 cm (3 s.f.).",
        ],
        commonError: "Using class widths or upper bounds instead of midpoints; dividing by the number of classes.",
        difficulty: "core",
        guideRef: "frequency-tables",
        hints: [
          "What value represents each class best?",
          "Find Σ(midpoint × frequency).",
          "Divide by the total frequency and round to 3 significant figures.",
        ],
        strategy: "Use a representative value",
      },
      // ---------------------------------------------------------------- q06
      {
        kind: "written",
        id: "statistics-p4-q06",
        question:
          "12 girls and 18 boys weighed their school bags.\n\nThe mean mass of the girls' bags is 5.5 kg. The mean mass of the boys' bags is m kg. The mean mass of all 30 bags is 6.1 kg.\n\nShow that m = 6.5",
        marks: 3,
        modelAnswer:
          "Total mass of the girls' bags = 12 × 5.5 = 66 kg.\n\nTotal mass of all 30 bags = 30 × 6.1 = 183 kg.\n\nSo the boys' bags total 18m = 183 − 66 = 117 kg, and m = 117 ÷ 18 = 6.5, as required.",
        markScheme: [
          { point: "Girls' total 12 × 5.5 = 66", keywords: ["66", "12 × 5.5", "12x5.5"] },
          { point: "Overall total 30 × 6.1 = 183", keywords: ["183", "30 × 6.1", "30x6.1"] },
          { point: "18m = 117 so m = 6.5 (or checks 66 + 18 × 6.5 = 183)", keywords: ["117", "18m", "117/18", "6.5"] },
        ],
        commonError: "Writing (5.5 + m) ÷ 2 = 6.1, which ignores the different numbers of girls and boys and gives m = 6.7.",
        difficulty: "core",
        guideRef: "averages-raw-data",
        hints: [
          "Means don't combine directly, but totals do.",
          "Find the girls' total and the total for all 30 bags.",
          "The boys' total is 18m — form an equation.",
        ],
        strategy: "Work with totals",
      },
      // ---------------------------------------------------------------- q07
      {
        kind: "short",
        id: "statistics-p4-q07",
        question:
          "The table shows information about the journey times, t minutes, of 120 passengers on a bus route.\n\n| Time (t minutes) | Frequency |\n|---|---|\n| 0 < t ≤ 10 | 8 |\n| 10 < t ≤ 20 | 22 |\n| 20 < t ≤ 30 | 38 |\n| 30 < t ≤ 40 | 30 |\n| 40 < t ≤ 50 | 16 |\n| 50 < t ≤ 60 | 6 |\n\nComplete the cumulative frequency column for t ≤ 10, t ≤ 20, t ≤ 30, t ≤ 40, t ≤ 50 and t ≤ 60. Type the six values in order, separated by commas.",
        answer: { type: "list", values: [8, 30, 68, 98, 114, 120], ordered: true, display: "8, 30, 68, 98, 114, 120" },
        traps: [
          {
            spec: { type: "list", values: [8, 22, 38, 30, 16, 6], ordered: true },
            feedback: "Those are the frequencies themselves. Cumulative frequency is a **running total**: 8, then 8 + 22, then 8 + 22 + 38, …",
          },
        ],
        solution: [
          "t ≤ 10: 8.",
          "t ≤ 20: 8 + 22 = 30.",
          "t ≤ 30: 30 + 38 = 68.",
          "t ≤ 40: 68 + 30 = 98.",
          "t ≤ 50: 98 + 16 = 114.",
          "t ≤ 60: 114 + 6 = 120 — which matches the total, a useful check.",
        ],
        commonError: "Copying the frequencies, or adding the wrong pair (e.g. 22 + 38 instead of 30 + 38).",
        difficulty: "core",
        guideRef: "cumulative-frequency",
        hints: [
          "Cumulative frequency counts everyone up to the end of each class.",
          "Add each new frequency to the previous running total.",
          "Your last value must equal the total, 120.",
        ],
        strategy: "Keep a running total",
      },
      // ---------------------------------------------------------------- q08
      {
        kind: "short",
        id: "statistics-p4-q08",
        question:
          "The cumulative frequency graph for the 120 bus journey times is shown.\n\nUse the graph to find an estimate for (a) the median journey time and (b) the interquartile range. Give both answers in minutes, median first.",
        diagram: JOURNEY_CF,
        answer: { type: "list", values: [27.9, 17.3], ordered: true, tolerance: 1, display: "median ≈ 28 minutes, IQR ≈ 17 minutes" },
        traps: [
          {
            spec: { type: "list", values: [27.9, 60], ordered: true, tolerance: 1 },
            feedback: "Your median is fine, but 60 is 90 − 30, the difference between the quartile *positions*. Read across from 30 and 90 to the graph and down, then subtract the two times.",
          },
        ],
        solution: [
          "Total 120: the median is at 60, Q1 at 30, Q3 at 90 on the cumulative frequency axis.",
          "Across from 60 and down: median ≈ 28 minutes (27.9).",
          "Across from 30 and down: Q1 = 20 minutes. Across from 90 and down: Q3 ≈ 37.3 minutes.",
          "IQR ≈ 37.3 − 20 = 17.3 minutes (anything from about 16 to 18 is a fair reading).",
        ],
        commonError: "Using 60.5 or {{(n+1)/2}} positions on a cumulative frequency graph — for grouped data use {{n/2}}, {{n/4}} and {{3n/4}}.",
        difficulty: "core",
        guideRef: "cumulative-frequency",
        hints: [
          "For a cumulative frequency graph, the median is at {{n/2}} and the quartiles at {{n/4}} and {{3n/4}}.",
          "That's 60, 30 and 90 here. Read across to the curve, then down.",
          "IQR = Q3 − Q1.",
        ],
        strategy: "Read across, then down",
      },
      // ---------------------------------------------------------------- q09
      {
        kind: "written",
        id: "statistics-p4-q09",
        question:
          "Use the cumulative frequency graph for the 120 bus journey times.\n\nThe bus company claims that more than 85% of journeys take 45 minutes or less.\n\nIs the company's claim correct? You must show how you get your answer.",
        diagram: JOURNEY_CF,
        marks: 3,
        modelAnswer:
          "Reading up from 45 minutes: the cumulative frequency is about 106.\n\nSo about 106 out of 120 journeys take 45 minutes or less.\n\n{{106/120}} × 100 ≈ 88%, which is more than 85%, so the claim is correct.\n\n(Alternative: 85% of 120 = 102; reading across from 102 gives about 42.5 minutes, which is less than 45, so more than 85% of journeys take 45 minutes or less.)",
        markScheme: [
          { point: "Reads cumulative frequency at 45 minutes ≈ 106 (or finds 85% of 120 = 102)", keywords: ["106", "105", "107", "102"] },
          { point: "Converts to a percentage ≈ 88% (or reads time for 102 ≈ 42.5 min)", keywords: ["88", "88.3", "87.5", "42.5", "42", "43"] },
          { point: "Correct conclusion: the claim is correct, with comparison to 85% or 45 minutes", keywords: ["correct", "true", "yes", "more than 85", "less than 45", "agree"] },
        ],
        commonError: "Reading the graph at 85 on the vertical axis instead of finding 85% of 120.",
        difficulty: "core",
        guideRef: "cumulative-frequency",
        hints: [
          "How many journeys take 45 minutes or less? Read up from 45 on the time axis.",
          "Turn that number into a percentage of 120.",
          "Or: work out 85% of 120 and read across from that cumulative frequency.",
        ],
        strategy: "Compare like with like",
      },
      // ---------------------------------------------------------------- q10
      {
        kind: "short",
        id: "statistics-p4-q10",
        question:
          "The histogram gives information about the ages of the people at a concert at the Esplanade. No one was 10 or younger, and no one was older than 70.\n\nWork out the total number of people at the concert.",
        diagram: CONCERT_HIST,
        answer: { type: "number", value: 165 },
        traps: [
          {
            spec: { type: "number", value: 21 },
            feedback: "21 is the sum of the bar heights (frequency densities). Frequency = frequency density × class width for each bar.",
          },
        ],
        solution: [
          "Frequency = frequency density × class width.",
          "10–15: 4 × 5 = 20.  15–20: 9 × 5 = 45.  20–30: 6 × 10 = 60.",
          "30–50: 1.5 × 20 = 30.  50–70: 0.5 × 20 = 10.",
          "Total = 20 + 45 + 60 + 30 + 10 = 165 people.",
        ],
        commonError: "Adding the frequency densities, or reading 1.5 and 0.5 as 1 and 0 on the scale.",
        difficulty: "core",
        guideRef: "histograms",
        hints: [
          "In a histogram, the frequency of each class is the area of its bar.",
          "Area = frequency density × class width.",
          "Watch the scale for the short bars: each small square is 0.5.",
        ],
        strategy: "Area = frequency",
      },
      // ---------------------------------------------------------------- q11
      {
        kind: "short",
        id: "statistics-p4-q11",
        question:
          "Use the same concert histogram.\n\nWork out an estimate for the number of people at the concert who were older than 18 but no older than 40.",
        diagram: CONCERT_HIST,
        answer: { type: "number", value: 93 },
        traps: [
          {
            spec: { type: "number", value: 135 },
            feedback: "You've used the whole 15–20 and 30–50 classes. Only 18–20 (2 years of the 15–20 bar) and 30–40 (10 years of the 30–50 bar) are inside the range.",
          },
        ],
        solution: [
          "18–20: 2 years of the 15–20 bar, density 9: 9 × 2 = 18.",
          "20–30: the whole class, 60.",
          "30–40: 10 years of the 30–50 bar, density 1.5: 1.5 × 10 = 15.",
          "Estimate = 18 + 60 + 15 = 93 people.",
        ],
        commonError: "Taking whole classes at either end instead of the fraction of the class inside 18 to 40.",
        difficulty: "core",
        guideRef: "histograms",
        hints: [
          "Mark 18 and 40 on the age axis. Which bars are cut?",
          "For a cut bar, area of the part you want = density × the width of that part.",
          "Add the three pieces.",
        ],
        strategy: "Split the bar",
      },
      // ---------------------------------------------------------------- q12
      {
        kind: "written",
        id: "statistics-p4-q12",
        question:
          "Use the same concert histogram.\n\nRavi says, \"The 15 to 20 bar is the tallest, so the 15 to 20 age group had the most people at the concert.\"\n\nIs Ravi correct? Explain your answer.",
        diagram: CONCERT_HIST,
        marks: 2,
        modelAnswer:
          "No. In a histogram the area of a bar, not its height, shows the frequency.\n\nThe 15–20 class has 9 × 5 = 45 people, but the 20–30 class has 6 × 10 = 60 people, so 20–30 had the most people even though its bar is shorter.",
        markScheme: [
          { point: "States that area (frequency density × width), not height, represents frequency", keywords: ["area", "width", "frequency density", "not height"] },
          { point: "Supports with numbers: 15–20 has 45 but 20–30 has 60, so Ravi is wrong", keywords: ["45", "60", "wrong", "no", "not correct"] },
        ],
        commonError: "Agreeing with Ravi — the height shows frequency *density*, which only equals frequency when all classes are the same width.",
        difficulty: "core",
        guideRef: "histograms",
        hints: ["What does the height of a histogram bar measure?", "Work out the frequency of the 15–20 class and of the 20–30 class."],
        strategy: "Test the claim with numbers",
      },
      // ---------------------------------------------------------------- q13
      {
        kind: "short",
        id: "statistics-p4-q13",
        question:
          "Priya is drawing a histogram of the lengths, x cm, of some leaves.\n\nThe class 10 < x ≤ 15 has frequency 30, and she draws its bar 9 cm tall.\n\nThe class 15 < x ≤ 30 has frequency 54.\n\nWork out how tall, in cm, she should draw the bar for 15 < x ≤ 30.",
        answer: { type: "number", value: 5.4, display: "5.4 cm" },
        traps: [
          {
            spec: { type: "number", value: 16.2 },
            feedback: "You've made the height proportional to the *frequency* (54 is 1.8 times 30). Height must be proportional to frequency **density**, because the classes have different widths.",
          },
          {
            spec: { type: "number", value: 3.6 },
            feedback: "3.6 is the frequency density of the 15–30 class. Convert it to a height using the scale from the first bar: 9 cm for a density of 6.",
          },
        ],
        solution: [
          "Frequency density of 10–15 = 30 ÷ 5 = 6, drawn 9 cm tall, so 1 unit of density = 1.5 cm.",
          "Frequency density of 15–30 = 54 ÷ 15 = 3.6.",
          "Height = 3.6 × 1.5 = 5.4 cm.",
        ],
        solutions: [
          {
            label: "Compare the two bars directly",
            steps: [
              "Area ∝ frequency: the second bar's area is {{54/30}} = 1.8 times the first bar's area.",
              "It is {{15/5}} = 3 times as wide, so its height is {{1.8/3}} = 0.6 times as tall.",
              "0.6 × 9 = 5.4 cm.",
            ],
          },
        ],
        commonError: "Scaling the height by the frequency ratio and forgetting the different class widths.",
        difficulty: "challenge",
        guideRef: "histograms",
        hints: [
          "The height of a bar shows frequency density, not frequency.",
          "Find the frequency density of the first class, and how many cm 1 unit of density is.",
          "Find the frequency density of the second class and convert using the same scale.",
        ],
        strategy: "Find the scale first",
      },
      // ---------------------------------------------------------------- q14
      {
        kind: "short",
        id: "statistics-p4-q14",
        question:
          "Olivia writes down seven positive whole numbers in order of size.\n\n- The median is 10.\n- The lower quartile (the 2nd number) is 6 and the upper quartile (the 6th number) is 15.\n- The range is 14.\n- The mean is 10.\n\nWork out the largest possible value of the biggest number.",
        answer: { type: "number", value: 18 },
        traps: [
          {
            spec: { type: "number", value: 20 },
            feedback: "That uses a smallest number of 6. Check the mean: the total must be exactly 70, and the 3rd and 5th numbers can't go below 6 and 10.",
          },
          {
            spec: { type: "number", value: 19 },
            feedback: "A smallest number of 5 forces the 3rd and 5th numbers to add to 15 — but the 3rd is at least 6 and the 5th at least 10, so they add to at least 16.",
          },
        ],
        solution: [
          "Call the numbers a ≤ 6 ≤ c ≤ 10 ≤ e ≤ 15 ≤ g, with g = a + 14 (the range).",
          "Mean 10 means the total is 70: a + 6 + c + 10 + e + 15 + (a + 14) = 70, so 2a + c + e = 25.",
          "To make g as large as possible, make a as large as possible — so make c + e as small as possible.",
          "c ≥ 6 and e ≥ 10, so c + e ≥ 16, giving 2a ≤ 9. As a is a whole number, a ≤ 4.",
          "a = 4 works: c + e = 17, e.g. 4, 6, 7, 10, 10, 15, 18 (median 10, Q1 6, Q3 15, range 14, total 70).",
          "So the largest possible biggest number is 4 + 14 = 18.",
        ],
        commonError: "Ignoring the mean condition and simply taking the smallest number as 6.",
        difficulty: "challenge",
        guideRef: "quartiles-iqr",
        hints: [
          "Label the seven numbers and fill in the ones you know: _, 6, _, 10, _, 15, _.",
          "Use the range to write the biggest number in terms of the smallest, then use the total of 70.",
          "To make the biggest number large, the smallest must be large — so what must the 3rd and 5th numbers be?",
          "Consider extremes: the 3rd number is at least 6 and the 5th is at least 10.",
        ],
        strategy: "Consider extremes",
      },
      // ---------------------------------------------------------------- q15
      {
        kind: "short",
        id: "statistics-p4-q15",
        question:
          "Use the cumulative frequency graph for the 120 bus journey times.\n\nThe bus company gives a voucher to the passengers with the slowest 15% of journeys. Use the graph to find an estimate for the shortest journey time, in minutes, that earns a voucher.",
        diagram: JOURNEY_CF,
        answer: { type: "number", value: 42.5, tolerance: 1, display: "about 42.5 minutes" },
        traps: [
          {
            spec: { type: "number", value: 14.5, tolerance: 1 },
            feedback: "That's the time for the *fastest* 15% (cumulative frequency 18). The slowest 15% are at the **top** of the graph: 120 − 18 = 102.",
          },
        ],
        solution: [
          "15% of 120 = 18 passengers have the slowest journeys.",
          "They are the top 18, so the cut-off is at cumulative frequency 120 − 18 = 102.",
          "Read across from 102 to the graph and down: t ≈ 42.5 minutes.",
          "So journeys longer than about 42.5 minutes earn a voucher.",
        ],
        commonError: "Reading across from 18 (the fastest 15%) instead of from 102.",
        difficulty: "challenge",
        guideRef: "cumulative-frequency",
        hints: [
          "How many passengers are in the slowest 15%?",
          "Slowest journeys are at the top end. Which cumulative frequency marks the start of the slowest 18?",
          "Read across from 102 and down to the time axis.",
        ],
        strategy: "Use the complement",
      },
    ],
  },
];
