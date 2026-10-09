import type { TopicPractice } from "../../types.ts";

// ---------------------------------------------------------------------------
// Diagrams (drawn to scale from the data in the questions)
// ---------------------------------------------------------------------------

const GRID_TRANSLATE = `<svg viewBox="0 0 308 282" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid. Triangle A has vertices (−4, 1), (−2, 1) and (−4, 4). Triangle B has vertices (1, −3), (3, −3) and (1, 0)."><rect x="0" y="0" width="308" height="282" fill="#ffffff"/><line x1="24" y1="258" x2="24" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="50" y1="258" x2="50" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="76" y1="258" x2="76" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="102" y1="258" x2="102" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="128" y1="258" x2="128" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="154" y1="258" x2="154" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="180" y1="258" x2="180" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="206" y1="258" x2="206" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="232" y1="258" x2="232" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="258" y1="258" x2="258" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="284" y1="258" x2="284" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="258" x2="284" y2="258" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="232" x2="284" y2="232" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="206" x2="284" y2="206" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="180" x2="284" y2="180" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="154" x2="284" y2="154" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="128" x2="284" y2="128" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="102" x2="284" y2="102" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="76" x2="284" y2="76" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="50" x2="284" y2="50" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="24" x2="284" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="154" x2="284" y2="154" stroke="#334155" stroke-width="1.5"/><line x1="154" y1="258" x2="154" y2="24" stroke="#334155" stroke-width="1.5"/><text x="294" y="158" font-size="12" font-family="sans-serif" fill="#1f2937">x</text><text x="150" y="16" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">y</text><text x="24" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−5</text><text x="50" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−4</text><text x="76" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−3</text><text x="102" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−2</text><text x="128" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−1</text><text x="180" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">1</text><text x="206" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">2</text><text x="232" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">3</text><text x="258" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">4</text><text x="284" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">5</text><text x="149" y="262" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−4</text><text x="149" y="236" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−3</text><text x="149" y="210" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−2</text><text x="149" y="184" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−1</text><text x="149" y="132" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">1</text><text x="149" y="106" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">2</text><text x="149" y="80" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">3</text><text x="149" y="54" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">4</text><text x="149" y="28" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">5</text><text x="149" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">0</text><polygon points="50,128 102,128 50,50" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="65.6" y="107" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><polygon points="180,232 232,232 180,154" fill="#fde68a" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="195.6" y="211" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text></svg>`;

const GRID_ROT_CENTRE = `<svg viewBox="0 0 308 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid. Triangle P has vertices (1, 1), (3, 1) and (1, 2). Triangle Q has vertices (−2, 2), (−2, 4) and (−3, 2)."><rect x="0" y="0" width="308" height="230" fill="#ffffff"/><line x1="24" y1="206" x2="24" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="50" y1="206" x2="50" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="76" y1="206" x2="76" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="102" y1="206" x2="102" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="128" y1="206" x2="128" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="154" y1="206" x2="154" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="180" y1="206" x2="180" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="206" y1="206" x2="206" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="232" y1="206" x2="232" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="258" y1="206" x2="258" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="284" y1="206" x2="284" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="206" x2="284" y2="206" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="180" x2="284" y2="180" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="154" x2="284" y2="154" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="128" x2="284" y2="128" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="102" x2="284" y2="102" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="76" x2="284" y2="76" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="50" x2="284" y2="50" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="24" x2="284" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="154" x2="284" y2="154" stroke="#334155" stroke-width="1.5"/><line x1="154" y1="206" x2="154" y2="24" stroke="#334155" stroke-width="1.5"/><text x="294" y="158" font-size="12" font-family="sans-serif" fill="#1f2937">x</text><text x="150" y="16" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">y</text><text x="24" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−5</text><text x="50" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−4</text><text x="76" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−3</text><text x="102" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−2</text><text x="128" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−1</text><text x="180" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">1</text><text x="206" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">2</text><text x="232" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">3</text><text x="258" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">4</text><text x="284" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">5</text><text x="149" y="210" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−2</text><text x="149" y="184" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−1</text><text x="149" y="132" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">1</text><text x="149" y="106" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">2</text><text x="149" y="80" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">3</text><text x="149" y="54" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">4</text><text x="149" y="28" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">5</text><text x="149" y="167" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">0</text><polygon points="180,128 232,128 180,102" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="198.2" y="123.9" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">P</text><polygon points="102,102 102,50 76,102" fill="#fde68a" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="92.9" y="88.8" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Q</text></svg>`;

const GRID_ENLARGE_HALF = `<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid. Triangle A has vertices (2, 5), (6, 5) and (6, 7). Triangle B has vertices (0, 2), (2, 2) and (2, 3)."><rect x="0" y="0" width="288" height="288" fill="#ffffff"/><line x1="24" y1="264" x2="24" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="48" y1="264" x2="48" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="72" y1="264" x2="72" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="96" y1="264" x2="96" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="120" y1="264" x2="120" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="144" y1="264" x2="144" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="168" y1="264" x2="168" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="192" y1="264" x2="192" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="216" y1="264" x2="216" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="240" y1="264" x2="240" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="264" y1="264" x2="264" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="264" x2="264" y2="264" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="240" x2="264" y2="240" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="216" x2="264" y2="216" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="192" x2="264" y2="192" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="168" x2="264" y2="168" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="144" x2="264" y2="144" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="120" x2="264" y2="120" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="96" x2="264" y2="96" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="72" x2="264" y2="72" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="48" x2="264" y2="48" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="24" x2="264" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="216" x2="264" y2="216" stroke="#334155" stroke-width="1.5"/><line x1="96" y1="264" x2="96" y2="24" stroke="#334155" stroke-width="1.5"/><text x="274" y="220" font-size="12" font-family="sans-serif" fill="#1f2937">x</text><text x="92" y="16" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">y</text><text x="24" y="229" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−3</text><text x="48" y="229" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−2</text><text x="72" y="229" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−1</text><text x="120" y="229" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">1</text><text x="144" y="229" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">2</text><text x="168" y="229" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">3</text><text x="192" y="229" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">4</text><text x="216" y="229" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">5</text><text x="240" y="229" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">6</text><text x="264" y="229" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">7</text><text x="91" y="268" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−2</text><text x="91" y="244" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−1</text><text x="91" y="196" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">1</text><text x="91" y="172" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">2</text><text x="91" y="148" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">3</text><text x="91" y="124" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">4</text><text x="91" y="100" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">5</text><text x="91" y="76" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">6</text><text x="91" y="52" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">7</text><text x="91" y="28" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">8</text><text x="91" y="229" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">0</text><polygon points="144,96 240,96 240,48" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="208.8" y="86.6" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><polygon points="96,168 144,168 144,144" fill="#fde68a" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="128.4" y="165.8" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text></svg>`;

const GRID_REFLECT = `<svg viewBox="0 0 240 312" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid. Triangle A has vertices (1, 1), (3, 1) and (1, 3). Triangle B has vertices (1, −3), (3, −3) and (1, −5)."><rect x="0" y="0" width="240" height="312" fill="#ffffff"/><line x1="24" y1="288" x2="24" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="48" y1="288" x2="48" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="72" y1="288" x2="72" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="96" y1="288" x2="96" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="120" y1="288" x2="120" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="144" y1="288" x2="144" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="168" y1="288" x2="168" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="192" y1="288" x2="192" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="216" y1="288" x2="216" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="288" x2="216" y2="288" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="264" x2="216" y2="264" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="240" x2="216" y2="240" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="216" x2="216" y2="216" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="192" x2="216" y2="192" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="168" x2="216" y2="168" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="144" x2="216" y2="144" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="120" x2="216" y2="120" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="96" x2="216" y2="96" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="72" x2="216" y2="72" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="48" x2="216" y2="48" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="24" x2="216" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="144" x2="216" y2="144" stroke="#334155" stroke-width="1.5"/><line x1="72" y1="288" x2="72" y2="24" stroke="#334155" stroke-width="1.5"/><text x="226" y="148" font-size="12" font-family="sans-serif" fill="#1f2937">x</text><text x="68" y="16" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">y</text><text x="24" y="157" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−2</text><text x="48" y="157" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−1</text><text x="96" y="157" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">1</text><text x="120" y="157" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">2</text><text x="144" y="157" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">3</text><text x="168" y="157" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">4</text><text x="192" y="157" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">5</text><text x="216" y="157" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">6</text><text x="67" y="292" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−6</text><text x="67" y="268" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−5</text><text x="67" y="244" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−4</text><text x="67" y="220" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−3</text><text x="67" y="196" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−2</text><text x="67" y="172" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−1</text><text x="67" y="124" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">1</text><text x="67" y="100" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">2</text><text x="67" y="76" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">3</text><text x="67" y="52" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">4</text><text x="67" y="28" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">5</text><text x="67" y="157" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">0</text><polygon points="96,120 144,120 96,72" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="110.4" y="110.6" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><polygon points="96,216 144,216 96,264" fill="#fde68a" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="110.4" y="240.2" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text></svg>`;

const GRID_ROT_DESCRIBE = `<svg viewBox="0 0 288 288" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Coordinate grid. Triangle A has vertices (1, 2), (1, 5) and (3, 2). Triangle B has vertices (4, −1), (7, −1) and (4, −3)."><rect x="0" y="0" width="288" height="288" fill="#ffffff"/><line x1="24" y1="264" x2="24" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="48" y1="264" x2="48" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="72" y1="264" x2="72" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="96" y1="264" x2="96" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="120" y1="264" x2="120" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="144" y1="264" x2="144" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="168" y1="264" x2="168" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="192" y1="264" x2="192" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="216" y1="264" x2="216" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="240" y1="264" x2="240" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="264" y1="264" x2="264" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="264" x2="264" y2="264" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="240" x2="264" y2="240" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="216" x2="264" y2="216" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="192" x2="264" y2="192" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="168" x2="264" y2="168" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="144" x2="264" y2="144" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="120" x2="264" y2="120" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="96" x2="264" y2="96" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="72" x2="264" y2="72" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="48" x2="264" y2="48" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="24" x2="264" y2="24" stroke="#e2e8f0" stroke-width="1"/><line x1="24" y1="168" x2="264" y2="168" stroke="#334155" stroke-width="1.5"/><line x1="72" y1="264" x2="72" y2="24" stroke="#334155" stroke-width="1.5"/><text x="274" y="172" font-size="12" font-family="sans-serif" fill="#1f2937">x</text><text x="68" y="16" font-size="12" font-family="sans-serif" fill="#1f2937" text-anchor="middle">y</text><text x="24" y="181" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−2</text><text x="48" y="181" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">−1</text><text x="96" y="181" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">1</text><text x="120" y="181" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">2</text><text x="144" y="181" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">3</text><text x="168" y="181" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">4</text><text x="192" y="181" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">5</text><text x="216" y="181" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">6</text><text x="240" y="181" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">7</text><text x="264" y="181" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="middle">8</text><text x="67" y="268" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−4</text><text x="67" y="244" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−3</text><text x="67" y="220" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−2</text><text x="67" y="196" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">−1</text><text x="67" y="148" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">1</text><text x="67" y="124" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">2</text><text x="67" y="100" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">3</text><text x="67" y="76" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">4</text><text x="67" y="52" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">5</text><text x="67" y="28" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">6</text><text x="67" y="181" font-size="10" font-family="sans-serif" fill="#475569" text-anchor="end">0</text><polygon points="96,120 96,48 144,120" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="110.4" y="103.4" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><polygon points="168,192 240,192 168,240" fill="#fde68a" fill-opacity="0.85" stroke="#1f2937" stroke-width="2"/><text x="189.6" y="213.8" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text></svg>`;

const TRI_OAB = `<svg viewBox="0 0 360 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB. Vector OA is a and vector OB is b. M is the midpoint of AB."><rect x="0" y="0" width="360" height="240" fill="#ffffff"/><line x1="54" y1="204" x2="138" y2="36" stroke="#1f2937" stroke-width="2"/><polygon points="100.2,111.6 91.7,117.4 100.6,121.9" fill="#1f2937"/><text x="81.7" y="117.8" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">a</text><line x1="54" y1="204" x2="306" y2="162" stroke="#1f2937" stroke-width="2"/><polygon points="192.6,180.9 182.9,177.4 184.5,187.3" fill="#1f2937"/><text x="182.6" y="203.8" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">b</text><line x1="138" y1="36" x2="306" y2="162" stroke="#1f2937" stroke-width="2"/><circle cx="54" cy="204" r="2.8" fill="#1f2937"/><text x="42" y="213" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><circle cx="138" cy="36" r="2.8" fill="#1f2937"/><text x="128" y="31" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><circle cx="306" cy="162" r="2.8" fill="#1f2937"/><text x="318" y="171" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><circle cx="222" cy="99" r="2.8" fill="#1f2937"/><text x="232" y="94" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">M</text></svg>`;

const PARA_OABC_M = `<svg viewBox="0 0 400 230" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallelogram OABC. Vector OA is a and vector OC is c. M is the midpoint of BC, and a dashed line joins A to M."><rect x="0" y="0" width="400" height="230" fill="#ffffff"/><line x1="36" y1="190.7" x2="288.3" y2="190.7" stroke="#1f2937" stroke-width="2"/><polygon points="174.8,190.7 165.8,185.7 165.8,195.7" fill="#1f2937"/><text x="162.2" y="211.7" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">a</text><line x1="36" y1="190.7" x2="111.7" y2="39.3" stroke="#1f2937" stroke-width="2"/><polygon points="77.6,107.4 69.1,113.2 78.1,117.7" fill="#1f2937"/><text x="59.5" y="112.8" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">c</text><line x1="111.7" y1="39.3" x2="364" y2="39.3" stroke="#1f2937" stroke-width="2"/><line x1="288.3" y1="190.7" x2="364" y2="39.3" stroke="#1f2937" stroke-width="2"/><line x1="288.3" y1="190.7" x2="237.8" y2="39.3" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><circle cx="36" cy="190.7" r="2.8" fill="#1f2937"/><text x="26" y="203.7" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><circle cx="288.3" cy="190.7" r="2.8" fill="#1f2937"/><text x="296.3" y="205.7" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><circle cx="364" cy="39.3" r="2.8" fill="#1f2937"/><text x="374" y="36.3" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><circle cx="111.7" cy="39.3" r="2.8" fill="#1f2937"/><text x="101.7" y="36.3" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">C</text><circle cx="237.8" cy="39.3" r="2.8" fill="#1f2937"/><text x="237.8" y="30.3" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">M</text></svg>`;

const TRI_EXTEND = `<svg viewBox="0 0 460 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB with OA = a and OB = b. P lies on OA and Q is the midpoint of AB. The line from P through Q meets OB extended at X."><rect x="0" y="0" width="460" height="240" fill="#ffffff"/><line x1="36" y1="200.8" x2="133" y2="39.2" stroke="#1f2937" stroke-width="2"/><polygon points="65.1,152.3 56.2,157.5 64.8,162.6" fill="#1f2937"/><text x="51.4" y="149.1" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">a</text><line x1="36" y1="200.8" x2="230" y2="200.8" stroke="#1f2937" stroke-width="2"/><polygon points="142.7,200.8 133.7,195.8 133.7,205.8" fill="#1f2937"/><text x="133" y="221.8" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">b</text><line x1="133" y1="39.2" x2="230" y2="200.8" stroke="#1f2937" stroke-width="2"/><line x1="230" y1="200.8" x2="424" y2="200.8" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><line x1="100.7" y1="93.1" x2="424" y2="200.8" stroke="#1f2937" stroke-width="2"/><circle cx="36" cy="200.8" r="2.8" fill="#1f2937"/><text x="26" y="213.8" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><circle cx="133" cy="39.2" r="2.8" fill="#1f2937"/><text x="133" y="30.2" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><circle cx="230" cy="200.8" r="2.8" fill="#1f2937"/><text x="230" y="223.8" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><circle cx="100.7" cy="93.1" r="2.8" fill="#1f2937"/><text x="86.7" y="96.1" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">P</text><circle cx="181.5" cy="120" r="2.8" fill="#1f2937"/><text x="191.5" y="115" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Q</text><circle cx="424" cy="200.8" r="2.8" fill="#1f2937"/><text x="424" y="223.8" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">X</text></svg>`;

const HEXAGON = `<svg viewBox="0 0 320 280" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Regular hexagon ABCDEF with centre O. Vector AB is a and vector BC is b."><rect x="0" y="0" width="320" height="280" fill="#ffffff"/><line x1="100" y1="244" x2="220" y2="244" stroke="#1f2937" stroke-width="2"/><polygon points="166,244 157,239 157,249" fill="#1f2937"/><text x="160" y="265" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">a</text><line x1="220" y1="244" x2="280.1" y2="140" stroke="#1f2937" stroke-width="2"/><polygon points="253.1,186.8 244.2,192.1 252.9,197.1" fill="#1f2937"/><text x="263.9" y="205" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">b</text><line x1="280.1" y1="140" x2="220" y2="36" stroke="#1f2937" stroke-width="2"/><line x1="220" y1="36" x2="100" y2="36" stroke="#1f2937" stroke-width="2"/><line x1="100" y1="36" x2="39.9" y2="140" stroke="#1f2937" stroke-width="2"/><line x1="39.9" y1="140" x2="100" y2="244" stroke="#1f2937" stroke-width="2"/><circle cx="100" cy="244" r="2.8" fill="#1f2937"/><text x="90" y="263" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><circle cx="220" cy="244" r="2.8" fill="#1f2937"/><text x="230" y="263" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><circle cx="280.1" cy="140" r="2.8" fill="#1f2937"/><text x="294.1" y="149" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">C</text><circle cx="220" cy="36" r="2.8" fill="#1f2937"/><text x="230" y="33" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">D</text><circle cx="100" cy="36" r="2.8" fill="#1f2937"/><text x="90" y="33" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">E</text><circle cx="39.9" cy="140" r="2.8" fill="#1f2937"/><text x="25.9" y="149" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">F</text><circle cx="160" cy="140" r="2.8" fill="#1f2937"/><text x="160" y="135" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text></svg>`;

const TRI_MEDIANS = `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB with OA = a and OB = b. M is the midpoint of AB and N is the midpoint of OB. G lies on OM. Dashed lines join O to M and A to N."><rect x="0" y="0" width="400" height="240" fill="#ffffff"/><line x1="82.4" y1="204" x2="116" y2="36" stroke="#1f2937" stroke-width="2"/><polygon points="100.9,111.6 94.2,119.4 104,121.4" fill="#1f2937"/><text x="83.5" y="121.9" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">a</text><line x1="82.4" y1="204" x2="317.6" y2="204" stroke="#1f2937" stroke-width="2"/><polygon points="153,204 144,199 144,209" fill="#1f2937"/><text x="141.2" y="225" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">b</text><line x1="116" y1="36" x2="317.6" y2="204" stroke="#1f2937" stroke-width="2"/><line x1="82.4" y1="204" x2="216.8" y2="120" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><line x1="116" y1="36" x2="200" y2="204" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><circle cx="82.4" cy="204" r="2.8" fill="#1f2937"/><text x="72.4" y="217" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><circle cx="116" cy="36" r="2.8" fill="#1f2937"/><text x="116" y="27" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><circle cx="317.6" cy="204" r="2.8" fill="#1f2937"/><text x="327.6" y="217" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><circle cx="216.8" cy="120" r="2.8" fill="#1f2937"/><text x="228.8" y="119" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">M</text><circle cx="200" cy="204" r="2.8" fill="#1f2937"/><text x="200" y="227" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">N</text><circle cx="172" cy="148" r="2.8" fill="#1f2937"/><text x="158" y="149" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">G</text></svg>`;

const TRI_INTERSECT = `<svg viewBox="0 0 400 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Triangle OAB with OA = a and OB = b. P is the midpoint of OA and Q lies on AB. Lines OQ and BP cross at X."><rect x="0" y="0" width="400" height="240" fill="#ffffff"/><line x1="82.4" y1="204" x2="149.6" y2="36" stroke="#1f2937" stroke-width="2"/><polygon points="102.6,153.6 94.6,160.1 103.9,163.8" fill="#1f2937"/><text x="84.3" y="161.1" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">a</text><line x1="82.4" y1="204" x2="317.6" y2="204" stroke="#1f2937" stroke-width="2"/><polygon points="211.8,204 202.8,199 202.8,209" fill="#1f2937"/><text x="200" y="225" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">b</text><line x1="149.6" y1="36" x2="317.6" y2="204" stroke="#1f2937" stroke-width="2"/><line x1="82.4" y1="204" x2="191.6" y2="78" stroke="#1f2937" stroke-width="2"/><line x1="317.6" y1="204" x2="116" y2="120" stroke="#1f2937" stroke-width="2"/><circle cx="82.4" cy="204" r="2.8" fill="#1f2937"/><text x="72.4" y="217" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><circle cx="149.6" cy="36" r="2.8" fill="#1f2937"/><text x="149.6" y="27" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><circle cx="317.6" cy="204" r="2.8" fill="#1f2937"/><text x="327.6" y="217" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><circle cx="116" cy="120" r="2.8" fill="#1f2937"/><text x="102" y="125" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">P</text><circle cx="191.6" cy="78" r="2.8" fill="#1f2937"/><text x="203.6" y="75" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">Q</text><circle cx="144.8" cy="132" r="2.8" fill="#1f2937"/><text x="146.8" y="122" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">X</text></svg>`;

const PARA_CH = `<svg viewBox="0 0 420 240" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Parallelogram OABC with OA = a and OC = c. P lies on AB. The diagonal OB and the line CP cross at X."><rect x="0" y="0" width="420" height="240" fill="#ffffff"/><line x1="36" y1="196.1" x2="297" y2="196.1" stroke="#1f2937" stroke-width="2"/><polygon points="179.6,196.1 170.6,191.1 170.6,201.1" fill="#1f2937"/><text x="166.5" y="217.1" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">a</text><line x1="36" y1="196.1" x2="123" y2="43.9" stroke="#1f2937" stroke-width="2"/><polygon points="83.8,112.4 75,117.7 83.7,122.7" fill="#1f2937"/><text x="65.6" y="117.1" font-size="14" font-weight="bold" font-family="sans-serif" fill="#1d4ed8" text-anchor="middle">c</text><line x1="123" y1="43.9" x2="384" y2="43.9" stroke="#1f2937" stroke-width="2"/><line x1="297" y1="196.1" x2="384" y2="43.9" stroke="#1f2937" stroke-width="2"/><line x1="36" y1="196.1" x2="384" y2="43.9" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><line x1="123" y1="43.9" x2="326" y2="145.4" stroke="#1f2937" stroke-width="2" stroke-dasharray="6 4"/><circle cx="36" cy="196.1" r="2.8" fill="#1f2937"/><text x="26" y="209.1" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">O</text><circle cx="297" cy="196.1" r="2.8" fill="#1f2937"/><text x="305" y="213.1" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">A</text><circle cx="384" cy="43.9" r="2.8" fill="#1f2937"/><text x="394" y="40.9" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">B</text><circle cx="123" cy="43.9" r="2.8" fill="#1f2937"/><text x="113" y="40.9" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">C</text><circle cx="326" cy="145.4" r="2.8" fill="#1f2937"/><text x="340" y="154.4" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">P</text><circle cx="244.8" cy="104.8" r="2.8" fill="#1f2937"/><text x="244.8" y="93.8" font-size="14" font-family="sans-serif" fill="#1f2937" text-anchor="middle">X</text></svg>`;

// ---------------------------------------------------------------------------
// Notation: vector letters are bold (**a**), →AB is the vector from A to B and
// column vectors use {{col(p, q)}}. Typed column-vector answers are "top, bottom".
// ---------------------------------------------------------------------------

export const practice: TopicPractice = {
  // =========================================================================
  // QUICK QUIZ — 10 questions across the four sections (3 mcq, 7 short)
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "vectors-transformations-quiz-q01",
      question:
        "**a** = {{col(3, -2)}} and **b** = {{col(-1, 4)}}.\n\nWork out 2**a** + **b** as a column vector. Type the top entry, then the bottom entry.",
      answer: { type: "list", values: [5, 0], ordered: true, display: "{{col(5, 0)}}" },
      solution: ["2**a** = {{col(6, -4)}}.", "2**a** + **b** = {{col(6 + (-1), -4 + 4) = col(5, 0)}}."],
      traps: [
        { spec: { type: "list", values: [2, 2], ordered: true }, feedback: "That's **a** + **b**. Double **a** first: 2**a** = {{col(6, -4)}}, then add **b**." },
      ],
      commonError: "Forgetting to double the bottom entry, or adding −1 as +1.",
      difficulty: "warmup",
      guideRef: "vector-basics",
      hints: ["Multiply each entry of **a** by 2, then add **b** entry by entry — top with top, bottom with bottom."],
    },
    {
      kind: "short",
      id: "vectors-transformations-quiz-q02",
      question: "Find the magnitude of the vector {{col(5, -12)}}.",
      answer: { type: "number", value: 13 },
      solution: ["Magnitude = {{sqrt(5^2 + (-12)^2)}}.", "= {{sqrt(25 + 144)}} = {{sqrt(169)}} = 13."],
      traps: [
        { spec: { type: "number", value: -7 }, feedback: "You added the entries. The magnitude is a *length*: use Pythagoras on the two components." },
        { spec: { type: "number", value: 17 }, feedback: "Lengths don't add like that — square, add, then square root: {{sqrt(25 + 144)}}." },
      ],
      commonError: "Squaring −12 as −144 and getting {{sqrt(-119)}}.",
      difficulty: "warmup",
      guideRef: "vector-basics",
      hints: ["The vector is the hypotenuse of a right-angled triangle with sides 5 and 12 — use Pythagoras."],
      strategy: "Draw a diagram",
    },
    {
      kind: "mcq",
      id: "vectors-transformations-quiz-q03",
      question: "The point (3, 1) is reflected in the line y = x. What are the coordinates of its image?",
      options: ["(−3, 1)", "(3, −1)", "(1, 3)", "(−1, −3)"],
      answerIndex: 2,
      explanation:
        "Reflecting in y = x swaps the coordinates: (x, y) → (y, x), so (3, 1) → (1, 3). (−3, 1) is a reflection in the y-axis, (3, −1) is a reflection in the x-axis, and (−1, −3) is a reflection in y = −x.",
      difficulty: "warmup",
      guideRef: "transformations",
      hints: ["Sketch the line y = x. The point and its image must be the same distance from the line, on opposite sides."],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "vectors-transformations-quiz-q04",
      question:
        "The point P(4, 1) is rotated 90° anticlockwise about the origin. Write down the coordinates of the image of P.",
      answer: { type: "list", values: [-1, 4], ordered: true, display: "(−1, 4)" },
      solution: [
        "A 90° anticlockwise rotation about O sends (x, y) → (−y, x).",
        "(4, 1) → (−1, 4).",
        "Check: P was in the first quadrant just above the x-axis; a quarter-turn anticlockwise lands just left of the positive y-axis. ✓",
      ],
      traps: [
        { spec: { type: "list", values: [1, -4], ordered: true }, feedback: "That's 90° **clockwise** ((x, y) → (y, −x)). Anticlockwise turns the point up and to the left." },
        { spec: { type: "list", values: [-4, -1], ordered: true }, feedback: "That's a 180° rotation. A 90° turn swaps the coordinates as well as changing a sign." },
      ],
      commonError: "Mixing up clockwise and anticlockwise.",
      difficulty: "core",
      guideRef: "transformations",
      hints: [
        "Use tracing paper in your head: which quadrant does P end up in?",
        "For a quarter-turn the coordinates swap places, and one of them changes sign.",
        "Anticlockwise 90° about O: (x, y) → (−y, x).",
      ],
      strategy: "Draw a diagram",
    },
    {
      kind: "short",
      id: "vectors-transformations-quiz-q05",
      question:
        "The point Q(3, 2) is enlarged with scale factor −2 and centre of enlargement (1, 1). Find the coordinates of the image of Q.",
      answer: { type: "list", values: [-3, -1], ordered: true, display: "(−3, −1)" },
      solution: [
        "Vector from the centre C(1, 1) to Q: {{col(3 - 1, 2 - 1) = col(2, 1)}}.",
        "Multiply by the scale factor: {{-2 col(2, 1) = col(-4, -2)}}.",
        "Image = (1 − 4, 1 − 2) = (−3, −1).",
      ],
      traps: [
        { spec: { type: "list", values: [5, 3], ordered: true }, feedback: "That's scale factor +2. A negative scale factor sends the image to the **other side** of the centre." },
        { spec: { type: "list", values: [-6, -4], ordered: true }, feedback: "You multiplied Q's coordinates by −2, which uses the origin as the centre. Work with the vector from (1, 1) instead." },
      ],
      commonError: "Using the origin as the centre instead of (1, 1).",
      difficulty: "core",
      guideRef: "transformations",
      hints: [
        "Every enlargement is measured *from the centre*. What is the vector from (1, 1) to Q?",
        "Multiply that vector by −2 — the minus sign reverses its direction.",
        "Add the new vector to the centre (1, 1).",
      ],
      strategy: "Use vectors",
    },
    {
      kind: "mcq",
      id: "vectors-transformations-quiz-q06",
      question:
        "A shape is reflected in the x-axis and then the image is reflected in the y-axis. Which single transformation has the same effect?",
      options: [
        "Rotation 180° about the origin",
        "Reflection in the line y = x",
        "Rotation 90° clockwise about the origin",
        "Translation by the vector {{col(-2, 0)}}",
      ],
      answerIndex: 0,
      explanation:
        "Track a general point: (x, y) → (x, −y) → (−x, −y). Changing both signs is a half-turn about the origin. Reflection in y = x would *swap* the coordinates, and a 90° turn also swaps them. A translation moves every point by the same amount, but here (2, 1) moves by {{col(-4, -2)}} and (1, 0) by {{col(-2, 0)}}. Two reflections in perpendicular lines always make a 180° rotation about the point where they cross.",
      difficulty: "core",
      guideRef: "combined-transformations",
      hints: [
        "Pick a test point such as (2, 1) and apply both reflections.",
        "Compare where (2, 1) starts and where it ends. What single move does that?",
      ],
      strategy: "Try small cases",
    },
    {
      kind: "short",
      id: "vectors-transformations-quiz-q07",
      question:
        "The point (k, 4) is an invariant point under reflection in the line y = x + 1. Find the value of k.",
      answer: { type: "number", value: 3 },
      solution: [
        "Under a reflection, the invariant points are exactly the points on the mirror line.",
        "So (k, 4) lies on y = x + 1: 4 = k + 1.",
        "k = 3.",
      ],
      traps: [
        { spec: { type: "number", value: 5 }, feedback: "Substitute carefully: y = 4 and y = x + 1 give 4 = k + 1, so k = 3." },
        { spec: { type: "number", value: 4 }, feedback: "(4, 4) lies on y = x, not on y = x + 1." },
      ],
      commonError: "Thinking an invariant point must be the origin.",
      difficulty: "core",
      guideRef: "combined-transformations",
      hints: [
        "Which points don't move at all when you reflect in a mirror?",
        "An invariant point of a reflection lies on the mirror line itself.",
      ],
      strategy: "Look for an invariant",
    },
    {
      kind: "short",
      id: "vectors-transformations-quiz-q08",
      question:
        "In the diagram, →OA = **a** and →OB = **b**.\n\nFind the vector →AB in terms of **a** and **b**.",
      diagram: TRI_OAB,
      answer: { type: "expression", expr: "b-a", display: "**b** − **a**" },
      solution: ["Go from A back to O, then out to B.", "→AB = →AO + →OB = −**a** + **b** = **b** − **a**."],
      traps: [{ spec: { type: "expression", expr: "a-b" }, feedback: "That's →BA. Going from A to B you travel *backwards* along **a** first, so **a** gets the minus sign." }],
      commonError: "Writing **a** − **b** (the direction of travel is reversed).",
      difficulty: "warmup",
      guideRef: "vector-geometry",
      hints: ["Find a route from A to B using paths you know. Going against an arrow makes the vector negative."],
      strategy: "Find a route",
    },
    {
      kind: "short",
      id: "vectors-transformations-quiz-q09",
      question:
        "→OA = **a** and →OB = **b**. The point P lies on AB with AP : PB = 2 : 1.\n\nFind →OP in terms of **a** and **b**. Simplify your answer.",
      answer: { type: "expression", expr: "(1/3)a+(2/3)b", display: "{{1/3}}**a** + {{2/3}}**b**" },
      solution: [
        "→AB = **b** − **a**.",
        "AP is {{2/3}} of AB, so →AP = {{2/3}}(**b** − **a**).",
        "→OP = →OA + →AP = **a** + {{2/3}}**b** − {{2/3}}**a** = {{1/3}}**a** + {{2/3}}**b**.",
      ],
      traps: [
        { spec: { type: "expression", expr: "(2/3)a+(1/3)b" }, feedback: "Close — but that point is nearer A. P is {{2/3}} of the way from A to B, so it's closer to B and **b** gets the bigger share." },
        { spec: { type: "expression", expr: "(1/2)a+(1/2)b" }, feedback: "That's the midpoint. The ratio 2 : 1 splits AB into 3 equal parts, not 2." },
      ],
      commonError: "Using {{2/1}} or {{1/2}} instead of {{2/3}} — the ratio 2 : 1 means thirds.",
      difficulty: "core",
      guideRef: "vector-geometry",
      hints: [
        "What fraction of the way from A to B is P?",
        "AP : PB = 2 : 1 means P is {{2/3}} of the way along. First find →AB.",
        "→OP = →OA + {{2/3}}→AB.",
      ],
      strategy: "Find a route",
    },
    {
      kind: "mcq",
      id: "vectors-transformations-quiz-q10",
      question: "Which of these vectors is parallel to 2**a** − 3**b**?",
      options: ["4**a** − 3**b**", "3**a** − 2**b**", "2**a** + 3**b**", "6**b** − 4**a**"],
      answerIndex: 3,
      explanation:
        "6**b** − 4**a** = −2(2**a** − 3**b**), a scalar multiple, so it is parallel (pointing the opposite way). 4**a** − 3**b** only doubles one part; 3**a** − 2**b** swaps the coefficients; 2**a** + 3**b** changes one sign — none of these is a single multiple of 2**a** − 3**b**.",
      difficulty: "core",
      guideRef: "vector-geometry",
      hints: [
        "Parallel vectors are scalar multiples of each other — every part gets multiplied by the *same* number.",
        "Try taking out a common factor from each option. A negative factor is allowed.",
      ],
      strategy: "Eliminate options",
    },
  ],

  // =========================================================================
  // PRACTICE PAPERS
  // =========================================================================
  papers: [
    {
      id: "vectors-transformations-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "vectors-transformations-p1-q01",
          question:
            "**p** = {{col(4, -1)}} and **q** = {{col(-2, 3)}}.\n\nWork out 3**p** − 2**q** as a column vector. Type the top entry, then the bottom entry.",
          answer: { type: "list", values: [16, -9], ordered: true, display: "{{col(16, -9)}}" },
          solution: ["3**p** = {{col(12, -3)}} and 2**q** = {{col(-4, 6)}}.", "3**p** − 2**q** = {{col(12 - (-4), -3 - 6) = col(16, -9)}}."],
          traps: [{ spec: { type: "list", values: [8, 3], ordered: true }, feedback: "Subtracting −4 gives +4: 12 − (−4) = 16. And −3 − 6 = −9." }],
          commonError: "Sign slip when subtracting a negative entry.",
          difficulty: "warmup",
          guideRef: "vector-basics",
          hints: ["Work out 3**p** and 2**q** separately, then subtract top from top and bottom from bottom."],
        },
        {
          kind: "short",
          id: "vectors-transformations-p1-q02",
          question:
            "The point A(−3, 5) is translated by the vector {{col(6, -8)}}. Write down the coordinates of the image of A.",
          answer: { type: "list", values: [3, -3], ordered: true, display: "(3, −3)" },
          solution: ["Add the top entry to x and the bottom entry to y.", "(−3 + 6, 5 + (−8)) = (3, −3)."],
          traps: [{ spec: { type: "list", values: [-9, 13], ordered: true }, feedback: "You subtracted the vector. A translation **adds** the column vector to the coordinates." }],
          difficulty: "warmup",
          guideRef: "transformations",
          hints: ["The top number moves you right (or left if negative); the bottom number moves you up (or down)."],
        },
        {
          kind: "short",
          id: "vectors-transformations-p1-q03",
          question:
            "**v** = {{col(4, 7)}}. Calculate the magnitude of **v**. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 8.06, tolerance: 0.005 },
          solution: ["|**v**| = {{sqrt(4^2 + 7^2)}} = {{sqrt(16 + 49)}} = {{sqrt(65)}}.", "{{sqrt(65)}} = 8.062… = 8.06 (3 s.f.)."],
          traps: [{ spec: { type: "number", value: 11 }, feedback: "4 + 7 adds the components; the magnitude is the length of the diagonal, so use Pythagoras." }],
          difficulty: "warmup",
          guideRef: "vector-basics",
          hints: ["Magnitude = length. Use Pythagoras on the two components."],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "vectors-transformations-p1-q04",
          question:
            "Triangle A is mapped onto triangle B by a translation.\n\nWrite down the column vector of the translation. Type the top entry, then the bottom entry.",
          diagram: GRID_TRANSLATE,
          answer: { type: "list", values: [5, -4], ordered: true, display: "{{col(5, -4)}}" },
          solution: [
            "Pick a corresponding pair of vertices: the right angle of A is at (−4, 1) and of B at (1, −3).",
            "Across: 1 − (−4) = 5. Up: −3 − 1 = −4.",
            "Vector = {{col(5, -4)}}.",
          ],
          traps: [{ spec: { type: "list", values: [-5, 4], ordered: true }, feedback: "That vector maps B onto A. Always subtract *start* from *finish*: image − object." }],
          commonError: "Giving the vector from B to A.",
          difficulty: "warmup",
          guideRef: "transformations",
          hints: ["Choose one vertex of A and find the matching vertex of B. How far right, and how far up, do you move?"],
        },
        {
          kind: "short",
          id: "vectors-transformations-p1-q05",
          question:
            "Triangle P is mapped onto triangle Q by a rotation of 90° anticlockwise.\n\nFind the coordinates of the centre of rotation.",
          diagram: GRID_ROT_CENTRE,
          answer: { type: "list", values: [-1, 0], ordered: true, display: "(−1, 0)" },
          solution: [
            "Matching vertices: (1, 1) → (−2, 2), (3, 1) → (−2, 4), (1, 2) → (−3, 2).",
            "The centre C is equidistant from each vertex and its image, and the turn from (1, 1) to (−2, 2) about C is 90°.",
            "Try C = (−1, 0). From C to (1, 1) is {{col(2, 1)}}; a quarter-turn anticlockwise makes it {{col(-1, 2)}}, which lands on (−1 − 1, 0 + 2) = (−2, 2) ✓.",
            "From C to (3, 1) is {{col(4, 1)}} → {{col(-1, 4)}} → (−2, 4) ✓. From C to (1, 2) is {{col(2, 2)}} → {{col(-2, 2)}} → (−3, 2) ✓.",
          ],
          solutions: [
            {
              label: "Perpendicular bisectors",
              steps: [
                "The centre lies on the perpendicular bisector of every object–image pair.",
                "Pair (3, 1) → (−2, 4): midpoint (0.5, 2.5), gradient of the joining line {{-3/5}}, so the bisector has gradient {{5/3}}.",
                "Pair (1, 1) → (−2, 2): midpoint (−0.5, 1.5), gradient {{-1/3}}, bisector gradient 3: y = 3x + 3.",
                "Solve y = 3x + 3 with y − 2.5 = {{5/3}}(x − 0.5): 3x + 0.5 = {{5/3}}x − {{5/6}}, so x = −1, y = 0.",
              ],
            },
          ],
          commonError: "Assuming the centre is the origin because the angle is 90°.",
          difficulty: "core",
          guideRef: "transformations",
          hints: [
            "The centre is the one point that stays fixed. It is the same distance from each vertex as from its image.",
            "Match the vertices first: the right angle of P goes to the right angle of Q.",
            "Guess a centre and test it: from your guess, does the vector to (1, 1) turn 90° anticlockwise into the vector to (−2, 2)?",
          ],
          strategy: "Check by substituting",
        },
        {
          kind: "short",
          id: "vectors-transformations-p1-q06",
          question:
            "Triangle B is an enlargement of triangle A with scale factor {{1/2}}.\n\nFind the coordinates of the centre of enlargement.",
          diagram: GRID_ENLARGE_HALF,
          answer: { type: "list", values: [-2, -1], ordered: true, display: "(−2, −1)" },
          solution: [
            "Draw lines through corresponding vertices: (6, 7) → (2, 3) and (2, 5) → (0, 2).",
            "Line through (6, 7) and (2, 3): gradient 1, so y = x + 1.",
            "Line through (2, 5) and (0, 2): gradient {{3/2}}, so y = {{3/2}}x + 2.",
            "Intersect: x + 1 = {{3/2}}x + 2 gives x = −2, y = −1.",
            "Check with (6, 5) → (2, 2): from the centre, (6, 5) is {{col(8, 6)}} away; half of that is {{col(4, 3)}}, and (−2 + 4, −1 + 3) = (2, 2) ✓.",
          ],
          solutions: [
            {
              label: "Vector equation",
              steps: [
                "For centre C: image = C + {{1/2}}(object − C), so image = {{1/2}}object + {{1/2}}C.",
                "Using (6, 7) → (2, 3): (2, 3) = (3, 3.5) + {{1/2}}C, so {{1/2}}C = (−1, −0.5) and C = (−2, −1).",
              ],
            },
          ],
          commonError: "Joining a vertex of A to a *non-matching* vertex of B.",
          difficulty: "core",
          guideRef: "transformations",
          hints: [
            "Rays from the centre pass through each vertex of A and its matching vertex of B.",
            "Join (6, 7) to (2, 3) and (2, 5) to (0, 2), and extend both lines.",
            "Where do the extended lines cross?",
          ],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "vectors-transformations-p1-q07",
          question:
            "The point (2, 5) is reflected in the line y = x. The image is then rotated 90° clockwise about the origin.\n\nFind the coordinates of the final image.",
          answer: { type: "list", values: [2, -5], ordered: true, display: "(2, −5)" },
          solution: [
            "Reflect in y = x: (2, 5) → (5, 2).",
            "Rotate 90° clockwise about O: (x, y) → (y, −x), so (5, 2) → (2, −5).",
            "Notice (2, 5) → (2, −5): the combination is the same as a reflection in the x-axis.",
          ],
          traps: [
            { spec: { type: "list", values: [-2, 5], ordered: true }, feedback: "That's an anticlockwise quarter-turn of (5, 2). Clockwise moves a first-quadrant point down into the fourth quadrant." },
            { spec: { type: "list", values: [5, -2], ordered: true }, feedback: "You rotated (2, 5) without reflecting first. Do the transformations in the order given." },
          ],
          difficulty: "core",
          guideRef: "combined-transformations",
          hints: [
            "Do one transformation at a time, in the order given.",
            "Reflection in y = x swaps the coordinates.",
            "90° clockwise about O: (x, y) → (y, −x).",
          ],
          strategy: "Work step by step",
        },
        {
          kind: "written",
          id: "vectors-transformations-p1-q08",
          question:
            "A shape is reflected in the line x = 1, and the image is then reflected in the line x = 4.\n\nShow that the combined transformation is a single translation, and give its column vector.",
          marks: 3,
          modelAnswer:
            "Take a general point (x, y). Reflecting in x = 1: the distance from the line is x − 1, so the image is (1 − (x − 1), y) = (2 − x, y). Reflecting (2 − x, y) in x = 4 gives (8 − (2 − x), y) = (x + 6, y). Every point moves 6 to the right and 0 up, so the combined transformation is the translation by the column vector {{col(6, 0)}}.",
          markScheme: [
            { point: "First reflection: (x, y) → (2 − x, y) (or a correct numerical example)", keywords: ["2 - x", "2 − x", "2-x"] },
            { point: "Second reflection: → (8 − (2 − x), y) = (x + 6, y)", keywords: ["x + 6", "x+6", "8 -", "8 −"] },
            { point: "Conclusion: translation by {{col(6, 0)}} — every point moves the same", keywords: ["translation", "(6, 0)", "6, 0", "6 right"] },
          ],
          commonError: "Testing one point only and then claiming it is a translation — check a general point (x, y) or at least two points.",
          difficulty: "core",
          guideRef: "combined-transformations",
          hints: [
            "Start with a general point (x, y). Where does a reflection in x = 1 send it?",
            "A reflection in x = a sends (x, y) to (2a − x, y).",
            "Apply the rule twice and simplify. Does every point move by the same amount?",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "vectors-transformations-p1-q09",
          question:
            "A is the point (2, −3) and B is the point (7, 9).\n\nFind the magnitude of the vector →AB.",
          answer: { type: "number", value: 13 },
          solution: ["→AB = position of B − position of A = {{col(7 - 2, 9 - (-3)) = col(5, 12)}}.", "|→AB| = {{sqrt(5^2 + 12^2)}} = {{sqrt(169)}} = 13."],
          traps: [{ spec: { type: "number", value: 7.81, }, feedback: "You used 9 − 3 = 6 for the vertical step. Subtracting −3 gives 9 + 3 = 12." }],
          commonError: "Treating 9 − (−3) as 6.",
          difficulty: "core",
          guideRef: "vector-basics",
          hints: ["First write →AB as a column vector: finish minus start.", "Then use Pythagoras on its components."],
        },
        {
          kind: "short",
          id: "vectors-transformations-p1-q10",
          question:
            "The vector **c** = {{col(m, 6)}} is parallel to **d** = {{col(-2, 3)}}.\n\nFind the value of m.",
          answer: { type: "number", value: -4 },
          solution: ["Parallel means **c** = k**d** for some number k.", "Bottom entries: 6 = 3k, so k = 2.", "Top entries: m = 2 × (−2) = −4."],
          traps: [{ spec: { type: "number", value: 4 }, feedback: "Watch the sign: **c** = 2**d**, and 2 × (−2) = −4." }],
          commonError: "Comparing top with bottom instead of top with top.",
          difficulty: "core",
          guideRef: "vector-basics",
          hints: ["Parallel vectors are multiples of each other.", "What do you multiply 3 by to get 6? Do the same to the top entry."],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "vectors-transformations-p1-q11",
          question:
            "OABC is a parallelogram. →OA = **a** and →OC = **c**. M is the midpoint of BC.\n\nFind →AM in terms of **a** and **c**. Simplify your answer.",
          diagram: PARA_OABC_M,
          answer: { type: "expression", expr: "c-(1/2)a", display: "**c** − {{1/2}}**a**" },
          solution: [
            "In a parallelogram →AB = →OC = **c** and →BC = →AO = −**a**.",
            "→AM = →AB + →BM = **c** + {{1/2}}→BC = **c** − {{1/2}}**a**.",
          ],
          solutions: [
            { label: "Via O", steps: ["→OM = →OC + →CM = **c** + {{1/2}}**a** (CB is parallel and equal to OA).", "→AM = →AO + →OM = −**a** + **c** + {{1/2}}**a** = **c** − {{1/2}}**a**."] },
          ],
          traps: [{ spec: { type: "expression", expr: "c+(1/2)a" }, feedback: "Going from B to M you travel *against* the direction of **a**, so that half is −{{1/2}}**a**." }],
          commonError: "Using +{{1/2}}**a** for →BM (wrong direction).",
          difficulty: "core",
          guideRef: "vector-geometry",
          hints: [
            "Find a route from A to M along sides you know.",
            "In a parallelogram, opposite sides are equal *and parallel*: →AB = **c** and →CB = **a**.",
            "From B to M is half of →BC, which is half of −**a**.",
          ],
          strategy: "Find a route",
        },
        {
          kind: "written",
          id: "vectors-transformations-p1-q12",
          question:
            "Relative to an origin O, the points P, Q and R have position vectors\n\n→OP = 2**a** − **b**, →OQ = 4**a** + **b**, →OR = 7**a** + 4**b**.\n\nShow that P, Q and R lie on a straight line.",
          marks: 3,
          modelAnswer:
            "→PQ = →OQ − →OP = (4**a** + **b**) − (2**a** − **b**) = 2**a** + 2**b** = 2(**a** + **b**).\n\n→QR = →OR − →OQ = (7**a** + 4**b**) − (4**a** + **b**) = 3**a** + 3**b** = 3(**a** + **b**).\n\nSo →QR = {{3/2}}→PQ: the vectors are parallel, and they share the point Q, so P, Q and R lie on a straight line.",
          markScheme: [
            { point: "→PQ = 2**a** + 2**b** (or →PR = 5**a** + 5**b**)", keywords: ["2a + 2b", "2a+2b", "2(a + b)", "5a + 5b", "5a+5b"] },
            { point: "→QR = 3**a** + 3**b**, a multiple of →PQ (e.g. →QR = {{3/2}}→PQ)", keywords: ["3a + 3b", "3a+3b", "3(a + b)", "3/2", "multiple"] },
            { point: "States parallel AND a common point (Q) so collinear", keywords: ["parallel", "common point", "share", "straight line", "collinear"] },
          ],
          commonError: "Showing the vectors are parallel but not mentioning the shared point — parallel lines could be side by side.",
          difficulty: "core",
          guideRef: "vector-geometry",
          hints: [
            "To prove points are collinear, compare two vectors that join them.",
            "Work out →PQ = →OQ − →OP and →QR = →OR − →OQ.",
            "Is one a multiple of the other? What else do you need to say?",
          ],
          strategy: "Find a common factor",
        },
        {
          kind: "short",
          id: "vectors-transformations-p1-q13",
          question:
            "OAB is a triangle with →OA = **a** and →OB = **b**. P is the point on OA with OP : PA = 2 : 1, and Q is the midpoint of AB.\n\nThe line PQ is extended to meet the line OB extended at X. Given that →OX = k**b**, find the value of k.",
          diagram: TRI_EXTEND,
          answer: { type: "number", value: 2 },
          solution: [
            "→OP = {{2/3}}**a**, →OQ = **a** + {{1/2}}(**b** − **a**) = {{1/2}}**a** + {{1/2}}**b**.",
            "→PQ = →OQ − →OP = −{{1/6}}**a** + {{1/2}}**b**.",
            "X is on line PQ: →OX = {{2/3}}**a** + t(−{{1/6}}**a** + {{1/2}}**b**) for some t.",
            "X is on OB, so the **a** part is 0: {{2/3}} − {{1/6}}t = 0, so t = 4.",
            "→OX = 4 × {{1/2}}**b** = 2**b**, so k = 2.",
          ],
          solutions: [
            {
              label: "Compare two expressions",
              steps: [
                "→PX = →OX − →OP = k**b** − {{2/3}}**a**.",
                "→PX must be a multiple of →PQ = −{{1/6}}**a** + {{1/2}}**b**. Multiplying →PQ by 4 gives −{{2/3}}**a** + 2**b**.",
                "Matching the **a** parts forces the multiplier 4, so k = 2.",
              ],
            },
          ],
          commonError: "Taking OP as {{2/1}} or {{1/2}} of OA — the ratio 2 : 1 means {{2/3}}.",
          difficulty: "challenge",
          guideRef: "vector-geometry",
          hints: [
            "Write →OP and →OQ in terms of **a** and **b**, then find →PQ.",
            "Any point on the line through P and Q is →OP + t→PQ.",
            "X lies on OB, so its **a**-component must be zero. Use that to find t.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "vectors-transformations-p1-q14",
          question:
            "An enlargement with scale factor −3 and centre (2, −1) maps the point P onto the point (−4, 8).\n\nFind the coordinates of P.",
          answer: { type: "list", values: [4, -4], ordered: true, display: "(4, −4)" },
          solution: [
            "Vector from the centre C(2, −1) to the image: {{col(-4 - 2, 8 - (-1)) = col(-6, 9)}}.",
            "This is −3 times →CP, so →CP = {{col(-6, 9)}} ÷ (−3) = {{col(2, -3)}}.",
            "P = (2 + 2, −1 + (−3)) = (4, −4).",
            "Check: →CP = {{col(2, -3)}}; × (−3) = {{col(-6, 9)}}; from C that reaches (−4, 8) ✓.",
          ],
          traps: [
            { spec: { type: "list", values: [0, 2], ordered: true }, feedback: "You divided by +3. The scale factor is −3, so the object is on the *opposite* side of the centre from the image." },
          ],
          commonError: "Reversing the enlargement with scale factor 3 or −{{1/3}} applied about the origin.",
          difficulty: "challenge",
          guideRef: "transformations",
          hints: [
            "Work backwards: the inverse of an enlargement with scale factor −3 is an enlargement with scale factor −{{1/3}} about the same centre.",
            "Find the vector from the centre (2, −1) to the image (−4, 8).",
            "Divide that vector by −3, then add it to the centre.",
          ],
          strategy: "Work backwards",
        },
        {
          kind: "written",
          id: "vectors-transformations-p1-q15",
          question:
            "Shape S is reflected in the line y = x, and the image is then reflected in the y-axis.\n\nShow that the combined transformation is a single rotation, and describe this rotation fully.",
          marks: 3,
          modelAnswer:
            "Take a general point (x, y). Reflecting in y = x gives (y, x). Reflecting (y, x) in the y-axis changes the sign of the first coordinate: (−y, x). The map (x, y) → (−y, x) is a rotation of 90° anticlockwise about the origin (for example (1, 0) → (0, 1) and (0, 1) → (−1, 0)). So the single transformation is a **rotation, 90° anticlockwise, centre (0, 0)**.",
          markScheme: [
            { point: "Reflection in y = x: (x, y) → (y, x)", keywords: ["(y, x)", "y, x", "swap"] },
            { point: "Then reflection in y-axis: → (−y, x)", keywords: ["(-y, x)", "(−y, x)", "-y, x", "−y, x"] },
            { point: "Rotation 90° anticlockwise about (0, 0) — all three features", keywords: ["rotation", "90", "anticlockwise", "origin", "(0, 0)"] },
          ],
          commonError: "Leaving out the centre or the direction — 'describe fully' needs angle, direction AND centre.",
          difficulty: "challenge",
          guideRef: "combined-transformations",
          hints: [
            "Follow a general point (x, y) through both reflections.",
            "After both steps you should get (−y, x). Which rotation does that?",
            "Test (1, 0): where does it go? That tells you the angle and direction.",
          ],
          strategy: "Introduce a variable",
        },
      ],
    },
    {
      id: "vectors-transformations-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "vectors-transformations-p2-q01",
          question: "The point (−2, 6) is reflected in the line x = 1. Find the coordinates of its image.",
          answer: { type: "list", values: [4, 6], ordered: true, display: "(4, 6)" },
          solution: ["(−2, 6) is 3 units to the left of the line x = 1.", "The image is 3 units to the right: x = 1 + 3 = 4.", "The y-coordinate doesn't change: (4, 6)."],
          traps: [
            { spec: { type: "list", values: [2, 6], ordered: true }, feedback: "That's a reflection in the y-axis (x = 0). The mirror here is x = 1." },
            { spec: { type: "list", values: [-2, -4], ordered: true }, feedback: "x = 1 is a *vertical* line, so only the x-coordinate changes." },
          ],
          difficulty: "warmup",
          guideRef: "transformations",
          hints: ["Sketch the vertical line x = 1. How far is the point from it? Go the same distance on the other side."],
          strategy: "Draw a diagram",
        },
        {
          kind: "short",
          id: "vectors-transformations-p2-q02",
          question:
            "**a** = {{col(-3, 5)}} and **b** = {{col(2, -1)}}.\n\nWork out **a** − 3**b** as a column vector. Type the top entry, then the bottom entry.",
          answer: { type: "list", values: [-9, 8], ordered: true, display: "{{col(-9, 8)}}" },
          solution: ["3**b** = {{col(6, -3)}}.", "**a** − 3**b** = {{col(-3 - 6, 5 - (-3)) = col(-9, 8)}}."],
          traps: [{ spec: { type: "list", values: [-9, 2], ordered: true }, feedback: "5 − (−3) = 5 + 3 = 8. Subtracting a negative adds." }],
          difficulty: "warmup",
          guideRef: "vector-basics",
          hints: ["Find 3**b** first, then subtract entry by entry. Watch the double negative."],
        },
        {
          kind: "short",
          id: "vectors-transformations-p2-q03",
          question:
            "A is the point (1, 4) and B is the point (−3, 7).\n\nWrite →AB as a column vector. Type the top entry, then the bottom entry.",
          answer: { type: "list", values: [-4, 3], ordered: true, display: "{{col(-4, 3)}}" },
          solution: ["→AB = →OB − →OA (finish minus start).", "{{col(-3 - 1, 7 - 4) = col(-4, 3)}}."],
          traps: [{ spec: { type: "list", values: [4, -3], ordered: true }, feedback: "That's →BA. For →AB, subtract A's position from B's: finish − start." }],
          commonError: "Subtracting the wrong way round.",
          difficulty: "warmup",
          guideRef: "vector-basics",
          hints: ["To go from A to B: how far right (or left) and how far up?"],
        },
        {
          kind: "short",
          id: "vectors-transformations-p2-q04",
          question: "Triangle A is reflected to give triangle B.\n\nFind the equation of the mirror line.",
          diagram: GRID_REFLECT,
          answer: { type: "equation", eq: "y+1=0", display: "y = −1" },
          solution: [
            "Matching vertices: (1, 1) ↔ (1, −3), (3, 1) ↔ (3, −3), (1, 3) ↔ (1, −5).",
            "The mirror line is halfway between each pair: y = {{(1 + (-3))/2}} = −1.",
            "Check with (1, 3) ↔ (1, −5): halfway is −1 ✓. Mirror line y = −1.",
          ],
          traps: [
            { spec: { type: "equation", eq: "y=0" }, feedback: "Reflecting in the x-axis would send (1, 1) to (1, −1), but B's vertex is at (1, −3). Find the line halfway between matching vertices." },
            { spec: { type: "equation", eq: "y+2=0" }, feedback: "That's halfway between the *nearest* edges of the two triangles, not between matching vertices. (1, 1) matches (1, −3)." },
          ],
          commonError: "Taking the x-axis as the mirror line by default.",
          difficulty: "warmup",
          guideRef: "transformations",
          hints: ["Match each vertex of A with its image in B, then find the line exactly halfway between them."],
        },
        {
          kind: "short",
          id: "vectors-transformations-p2-q05",
          question:
            "The point (3, −1) is enlarged with scale factor −{{1/2}} and centre (1, 3). Find the coordinates of its image.",
          answer: { type: "list", values: [0, 5], ordered: true, display: "(0, 5)" },
          solution: [
            "Vector from the centre (1, 3) to the point: {{col(3 - 1, -1 - 3) = col(2, -4)}}.",
            "Multiply by −{{1/2}}: {{col(-1, 2)}}.",
            "Image = (1 + (−1), 3 + 2) = (0, 5).",
          ],
          traps: [
            { spec: { type: "list", values: [2, 1], ordered: true }, feedback: "That's scale factor +{{1/2}}. The negative sign puts the image on the opposite side of the centre." },
            { spec: { type: "list", values: [-3, 11], ordered: true }, feedback: "You multiplied by −2. A scale factor of −{{1/2}} makes the image *smaller*, at half the distance." },
          ],
          commonError: "Ignoring the negative sign, or applying it about the origin.",
          difficulty: "core",
          guideRef: "transformations",
          hints: [
            "Find the vector from the centre to the point.",
            "Multiply it by −{{1/2}}: halve it AND reverse it.",
            "Add the result to the centre.",
          ],
          strategy: "Use vectors",
        },
        {
          kind: "written",
          id: "vectors-transformations-p2-q06",
          question: "Describe fully the single transformation that maps triangle A onto triangle B.",
          diagram: GRID_ROT_DESCRIBE,
          marks: 3,
          modelAnswer:
            "Rotation, 90° clockwise, about the centre (1, −1).\n\nCheck: from (1, −1), vertex (1, 2) is 3 up; after a quarter-turn clockwise it is 3 right, at (4, −1) ✓. Vertex (1, 5) is 6 up → 6 right, (7, −1) ✓. Vertex (3, 2) is (2, 3) away → (3, −2) away, at (4, −3) ✓.",
          markScheme: [
            { point: "Rotation (one transformation only)", keywords: ["rotation", "rotate"] },
            { point: "90° clockwise (or 270° anticlockwise)", keywords: ["90", "clockwise", "270"] },
            { point: "Centre (1, −1)", keywords: ["(1, -1)", "(1, −1)", "1, -1", "1, −1", "1,-1"] },
          ],
          commonError: "Describing two transformations (e.g. 'rotate then translate') — the question asks for a single one.",
          difficulty: "core",
          guideRef: "transformations",
          hints: [
            "Shape B is the same size and the vertical side of A has become horizontal. Which transformation turns a shape?",
            "The long side of A points up; in B it points right. So which way, and by how much?",
            "The centre is equidistant from (1, 2) and (4, −1), and from (1, 5) and (7, −1). Try points on the line through (1, 2) and (1, 5).",
          ],
          strategy: "Check by substituting",
        },
        {
          kind: "short",
          id: "vectors-transformations-p2-q07",
          question:
            "Triangle T has area 6 cm². It is enlarged with scale factor −3.\n\nWork out the area of the image. Give your answer in cm².",
          answer: { type: "number", value: 54 },
          solution: ["Lengths are multiplied by |−3| = 3.", "Areas are multiplied by 3² = 9.", "6 × 9 = 54 cm²."],
          traps: [
            { spec: { type: "number", value: 18 }, feedback: "You scaled the area by 3. Area grows by the *square* of the length scale factor: 3² = 9." },
            { spec: { type: "number", value: -54 }, feedback: "An area can't be negative. The minus sign only turns the shape upside down through the centre." },
          ],
          commonError: "Multiplying the area by −3 or by 3.",
          difficulty: "core",
          guideRef: "transformations",
          hints: [
            "What does the negative sign do — does it change the size, or only the position and orientation?",
            "Each length becomes 3 times as long. How does area change?",
          ],
          strategy: "Make it simpler",
        },
        {
          kind: "short",
          id: "vectors-transformations-p2-q08",
          question:
            "Shape A is reflected in the x-axis to give shape B. Shape B is then rotated 90° anticlockwise about the origin to give shape C.\n\nThe single transformation that maps A onto C is a reflection. Find the equation of its mirror line.",
          answer: { type: "equation", eq: "y=x", display: "y = x" },
          solution: [
            "Track a general point: reflect in the x-axis, (x, y) → (x, −y).",
            "Rotate 90° anticlockwise about O: (p, q) → (−q, p), so (x, −y) → (y, x).",
            "(x, y) → (y, x) swaps the coordinates: that's a reflection in y = x.",
          ],
          traps: [{ spec: { type: "equation", eq: "y=-x" }, feedback: "Test (1, 0): reflect → (1, 0), rotate → (0, 1). So (1, 0) ends at (0, 1), which is a reflection in y = x, not y = −x." }],
          commonError: "Doing the rotation first.",
          difficulty: "core",
          guideRef: "combined-transformations",
          hints: [
            "Pick a test point, e.g. (3, 1), and apply both transformations in order.",
            "(3, 1) → (3, −1) → (1, 3). What single reflection sends (3, 1) to (1, 3)?",
          ],
          strategy: "Try small cases",
        },
        {
          kind: "written",
          id: "vectors-transformations-p2-q09",
          question:
            "Triangle S has vertices (0, 0), (4, 0) and (4, 2). It is enlarged with scale factor 2, centre (4, 0).\n\nExplain why exactly one point of S is invariant, and state its coordinates.",
          marks: 3,
          modelAnswer:
            "An invariant point is one that maps onto itself. In an enlargement, each image point is found by multiplying the vector from the centre C by the scale factor: →CP′ = 2→CP. If P = C then →CP = **0**, so →CP′ = **0** and the centre stays put. For any other point, |→CP′| = 2|→CP| ≠ |→CP|, so it moves. The centre (4, 0) is a vertex of S, so exactly one point of S is invariant: (4, 0).",
          markScheme: [
            { point: "Invariant means the point maps to itself", keywords: ["maps to itself", "itself", "does not move", "doesn't move", "stays"] },
            { point: "Any point other than the centre moves (distance from centre doubles)", keywords: ["double", "twice", "2 times", "distance", "moves"] },
            { point: "The only invariant point is the centre (4, 0), which lies on S", keywords: ["(4, 0)", "4, 0", "centre", "vertex"] },
          ],
          commonError: "Saying the origin is invariant — the origin moves, because the centre here is (4, 0).",
          difficulty: "core",
          guideRef: "combined-transformations",
          hints: [
            "What does 'invariant' mean?",
            "Where does the point (0, 0) go under this enlargement? And (4, 2)?",
            "Which point is at distance 0 from the centre?",
          ],
          strategy: "Look for an invariant",
        },
        {
          kind: "short",
          id: "vectors-transformations-p2-q10",
          question:
            "**a** = {{col(2, -1)}} and **b** = {{col(1, 4)}}.\n\nFind |3**a** + **b**|. Give your answer as a surd in its simplest form.",
          answer: { type: "expression", expr: "5sqrt(2)", form: "surd", display: "5{{sqrt(2)}}" },
          solution: [
            "3**a** + **b** = {{col(6 + 1, -3 + 4) = col(7, 1)}}.",
            "|3**a** + **b**| = {{sqrt(7^2 + 1^2)}} = {{sqrt(50)}}.",
            "{{sqrt(50) = sqrt(25 * 2) = 5 sqrt(2)}}.",
          ],
          traps: [{ spec: { type: "expression", expr: "3sqrt(5)+sqrt(17)" }, feedback: "Magnitudes don't add like that: |3**a** + **b**| ≠ 3|**a**| + |**b**|. Find the vector 3**a** + **b** = {{col(7, 1)}} first, then its length." }],
          commonError: "Leaving the answer as {{sqrt(50)}} (not simplified) or as 7.07.",
          difficulty: "core",
          guideRef: "vector-basics",
          hints: ["Work out the vector 3**a** + **b** first.", "Then use Pythagoras and simplify the surd: look for a square factor of 50."],
        },
        {
          kind: "short",
          id: "vectors-transformations-p2-q11",
          question:
            "Find the numbers m and n such that\n\n{{m col(2, 1) + n col(1, -3) = col(7, 14)}}.\n\nGive m first, then n.",
          answer: { type: "list", values: [5, -3], ordered: true, display: "m = 5, n = −3" },
          solution: [
            "Top: 2m + n = 7. Bottom: m − 3n = 14.",
            "From the top equation n = 7 − 2m. Substitute: m − 3(7 − 2m) = 14, so 7m − 21 = 14 and m = 5.",
            "n = 7 − 10 = −3.",
            "Check: {{5 col(2, 1) - 3 col(1, -3) = col(10 - 3, 5 + 9) = col(7, 14)}} ✓.",
          ],
          traps: [{ spec: { type: "list", values: [-3, 5], ordered: true }, feedback: "Right values, wrong order — give m first." }],
          commonError: "Mixing the top and bottom equations.",
          difficulty: "core",
          guideRef: "vector-basics",
          hints: [
            "A vector equation is really two equations: one for the top entries and one for the bottom.",
            "Write 2m + n = 7 and m − 3n = 14.",
            "Solve them as simultaneous equations.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "vectors-transformations-p2-q12",
          question:
            "ABCDEF is a regular hexagon with centre O. →AB = **a** and →BC = **b**.\n\nFind →AE in terms of **a** and **b**. Simplify your answer.",
          diagram: HEXAGON,
          answer: { type: "expression", expr: "2b-a", display: "2**b** − **a**" },
          solution: [
            "Split the hexagon into six equilateral triangles from O. Opposite sides are parallel and equal: →DE = −**a**, and →CD = →CO + →OD = −**a** + **b** (CO is parallel to BA, OD is parallel to BC).",
            "→AE = →AB + →BC + →CD + →DE = **a** + **b** + (**b** − **a**) − **a** = 2**b** − **a**.",
          ],
          solutions: [
            {
              label: "Through the centre",
              steps: [
                "→AO = **b** (AO is parallel and equal to BC).",
                "→OE = **b** − **a** (OE is parallel and equal to CD, or to AF).",
                "→AE = →AO + →OE = **b** + **b** − **a** = 2**b** − **a**.",
              ],
            },
          ],
          traps: [{ spec: { type: "expression", expr: "2b+a" }, feedback: "Check a direction: from D to E you travel opposite to →AB, so →DE = −**a**." }],
          commonError: "Treating →CD as equal to **a** or **b** — it's neither; it's **b** − **a**.",
          difficulty: "core",
          guideRef: "vector-geometry",
          hints: [
            "A regular hexagon splits into six equilateral triangles from its centre O. Which sides are parallel to **a**? To **b**?",
            "Find →AO and →OE first: AO is parallel to BC.",
            "→AE = →AO + →OE.",
          ],
          strategy: "Use symmetry",
        },
        {
          kind: "written",
          id: "vectors-transformations-p2-q13",
          question:
            "OAB is a triangle with →OA = **a** and →OB = **b**. M is the midpoint of AB and N is the midpoint of OB. G is the point on OM with OG : GM = 2 : 1.\n\nProve that A, G and N lie on a straight line.",
          diagram: TRI_MEDIANS,
          marks: 4,
          modelAnswer:
            "→OM = **a** + {{1/2}}(**b** − **a**) = {{1/2}}(**a** + **b**), so →OG = {{2/3}}→OM = {{1/3}}(**a** + **b**).\n\n→AG = →OG − →OA = {{1/3}}**a** + {{1/3}}**b** − **a** = {{1/3}}(**b** − 2**a**).\n\n→AN = →ON − →OA = {{1/2}}**b** − **a** = {{1/2}}(**b** − 2**a**).\n\nSo →AG = {{2/3}}→AN. The vectors are parallel and share the point A, so A, G and N are collinear. (In fact G is two-thirds of the way along the median AN: it is the centroid.)",
          markScheme: [
            { point: "→OG = {{1/3}}(**a** + **b**) (via →OM = {{1/2}}(**a** + **b**))", keywords: ["1/3", "(a + b)", "a+b", "2/3"] },
            { point: "→AG = {{1/3}}(**b** − 2**a**) or −{{2/3}}**a** + {{1/3}}**b**", keywords: ["b - 2a", "b − 2a", "-2/3a", "−2/3a", "1/3b"] },
            { point: "→AN = {{1/2}}**b** − **a** = {{1/2}}(**b** − 2**a**)", keywords: ["1/2b - a", "1/2b − a", "1/2(b - 2a)", "b/2 - a"] },
            { point: "→AG is a multiple of →AN and they share A, so collinear", keywords: ["multiple", "parallel", "common point", "share", "collinear", "straight line"] },
          ],
          commonError: "Showing parallel vectors that don't share a point (e.g. →AG and →GN are fine; →AG and →ON are not).",
          difficulty: "challenge",
          guideRef: "vector-geometry",
          hints: [
            "Express →OM, then →OG, in terms of **a** and **b**.",
            "Work out →AG and →AN, both starting at A.",
            "Factorise each: can you see the same bracket (**b** − 2**a**)?",
            "Parallel + a common point = collinear.",
          ],
          strategy: "Find a common factor",
        },
        {
          kind: "short",
          id: "vectors-transformations-p2-q14",
          question:
            "OAB is a triangle with →OA = **a** and →OB = **b**. P is the midpoint of OA. Q is the point on AB with AQ : QB = 1 : 3. The lines OQ and BP meet at X.\n\nFind →OX in terms of **a** and **b**. Simplify your answer.",
          diagram: TRI_INTERSECT,
          answer: { type: "expression", expr: "(3/7)a+(1/7)b", display: "{{3/7}}**a** + {{1/7}}**b**" },
          solution: [
            "→OQ = **a** + {{1/4}}(**b** − **a**) = {{3/4}}**a** + {{1/4}}**b**.",
            "X on OQ: →OX = λ({{3/4}}**a** + {{1/4}}**b**).",
            "X on BP: →OX = **b** + μ(→BP) = **b** + μ({{1/2}}**a** − **b**) = {{1/2}}μ**a** + (1 − μ)**b**.",
            "Compare **a**: {{3/4}}λ = {{1/2}}μ, so μ = {{3/2}}λ. Compare **b**: {{1/4}}λ = 1 − μ = 1 − {{3/2}}λ.",
            "So {{7/4}}λ = 1, λ = {{4/7}}.",
            "→OX = {{4/7}}({{3/4}}**a** + {{1/4}}**b**) = {{3/7}}**a** + {{1/7}}**b**.",
          ],
          traps: [{ spec: { type: "expression", expr: "(3/4)a+(1/4)b" }, feedback: "That's →OQ. X is only part of the way along OQ — set up a second expression for →OX using line BP." }],
          commonError: "Using the same parameter for both lines — you need two unknowns (λ and μ).",
          difficulty: "challenge",
          guideRef: "vector-geometry",
          hints: [
            "X is on two lines, so you can write →OX in two different ways.",
            "Write →OX = λ→OQ and →OX = →OB + μ→BP.",
            "Since **a** and **b** aren't parallel, the **a** parts must match and the **b** parts must match. Solve for λ.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "vectors-transformations-p2-q15",
          question:
            "A rotation of 90° anticlockwise about (1, 2) is followed by a rotation of 90° anticlockwise about (4, 2).\n\nThe combined transformation is a single rotation of 180°. Find the coordinates of its centre.",
          answer: { type: "list", values: [2.5, 0.5], ordered: true, display: "(2.5, 0.5)" },
          solution: [
            "First rotation: (x, y) − (1, 2) = (x − 1, y − 2) turns to (2 − y, x − 1); add (1, 2): (3 − y, x + 1).",
            "Second rotation about (4, 2): (X, Y) → (4 − (Y − 2), 2 + (X − 4)) = (6 − Y, X − 2).",
            "Combined: (x, y) → (6 − (x + 1), (3 − y) − 2) = (5 − x, 1 − y).",
            "The centre is the invariant point: x = 5 − x and y = 1 − y, so (2.5, 0.5).",
          ],
          solutions: [
            {
              label: "Midpoint of a half-turn",
              steps: [
                "A half-turn sends every point P to P′ with the centre as the midpoint of PP′.",
                "Track (1, 2): the first rotation leaves it fixed; the second sends it to (4, −1).",
                "Centre = midpoint of (1, 2) and (4, −1) = (2.5, 0.5).",
              ],
            },
          ],
          traps: [{ spec: { type: "list", values: [2.5, 2], ordered: true }, feedback: "The centre is not just the midpoint of the two centres. Track a point (e.g. (1, 2)) and find the midpoint of it and its final image." }],
          commonError: "Assuming the new centre is halfway between the two given centres.",
          difficulty: "challenge",
          guideRef: "combined-transformations",
          hints: [
            "Track one clever point. Which point does the first rotation leave fixed?",
            "(1, 2) stays put, then rotates 90° anticlockwise about (4, 2). Where does it go?",
            "In a 180° rotation, the centre is the midpoint of a point and its image.",
          ],
          strategy: "Look for an invariant",
        },
      ],
    },
  ],

  // =========================================================================
  // CHALLENGE SET — grade 9 / H+ / olympiad flavour
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "vectors-transformations-ch-q01",
      question:
        "OABC is a parallelogram with →OA = **a** and →OC = **c**. P is the point on AB with AP : PB = 1 : 2. The diagonal OB meets the line CP at X.\n\nFind the ratio OX : XB in its simplest form.",
      diagram: PARA_CH,
      answer: { type: "ratio", parts: [3, 2], simplest: true, display: "3 : 2" },
      solution: [
        "→OB = **a** + **c** and →OP = **a** + {{1/3}}**c**.",
        "X on OB: →OX = λ(**a** + **c**).",
        "X on CP: →OX = **c** + μ(→OP − →OC) = **c** + μ(**a** − {{2/3}}**c**) = μ**a** + (1 − {{2/3}}μ)**c**.",
        "Compare **a**: λ = μ. Compare **c**: λ = 1 − {{2/3}}λ, so {{5/3}}λ = 1 and λ = {{3/5}}.",
        "OX is {{3/5}} of OB, so OX : XB = 3 : 2.",
      ],
      solutions: [
        {
          label: "Similar triangles",
          steps: [
            "OC is parallel to AB, so triangles XOC and XBP are similar (alternate angles, vertically opposite angles at X).",
            "PB = {{2/3}}AB = {{2/3}}OC.",
            "OX : XB = OC : BP = 1 : {{2/3}} = 3 : 2. Quicker, once you spot the 'hourglass'.",
          ],
        },
      ],
      traps: [{ spec: { type: "ratio", parts: [2, 3] }, feedback: "Reversed: X is nearer B than O (the line CP cuts OB past its midpoint), so OX is the longer part." }],
      commonError: "Taking AP = {{1/2}}AB from the ratio 1 : 2.",
      difficulty: "challenge",
      guideRef: "vector-geometry",
      hints: [
        "X lies on two lines. Write →OX two ways.",
        "→OX = λ→OB and →OX = →OC + μ→CP. Find →CP first.",
        "Match the **a** parts and the **c** parts to get two equations in λ and μ.",
        "Alternative: look for an hourglass of similar triangles around X.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "vectors-transformations-ch-q02",
      question:
        "Relative to an origin O, the points P, Q and R have position vectors\n\n→OP = **a** + **b**, →OQ = 3**a** − **b**, →OR = k**a** + (k + 6)**b**,\n\nwhere **a** and **b** are not parallel. Given that P, Q and R lie on a straight line, find the value of k.",
      answer: { type: "number", value: -2 },
      solution: [
        "→PQ = 2**a** − 2**b** = 2(**a** − **b**).",
        "→PR = (k − 1)**a** + (k + 5)**b**.",
        "Collinear ⇒ →PR is a multiple of **a** − **b**, so the **b** coefficient is minus the **a** coefficient: k + 5 = −(k − 1).",
        "2k = −4, so k = −2. Check: →OR = −2**a** + 4**b**, →PR = −3**a** + 3**b** = −{{3/2}}→PQ ✓.",
      ],
      traps: [{ spec: { type: "number", value: -3 }, feedback: "Check →PR carefully: (k + 6) − 1 = k + 5, not k + 6." }],
      commonError: "Setting the coefficients equal (k − 1 = k + 5) instead of opposite — that has no solution, which is the clue.",
      difficulty: "challenge",
      guideRef: "vector-geometry",
      hints: [
        "Collinear means →PR is a multiple of →PQ.",
        "Simplify →PQ: it's a multiple of (**a** − **b**).",
        "A multiple of (**a** − **b**) has its **b** coefficient equal to minus its **a** coefficient.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "vectors-transformations-ch-q03",
      question:
        "**a** = {{col(3, 4)}} and **b** = {{col(1, -2)}}. Find all the values of t for which |**a** + t**b**| = 5.",
      answer: { type: "list", values: [0, 2], ordered: false, display: "t = 0 or t = 2" },
      solution: [
        "**a** + t**b** = {{col(3 + t, 4 - 2t)}}.",
        "(3 + t)² + (4 − 2t)² = 25.",
        "9 + 6t + t² + 16 − 16t + 4t² = 25, so 5t² − 10t = 0.",
        "5t(t − 2) = 0, so t = 0 or t = 2.",
        "Check t = 2: {{col(5, 0)}} has length 5 ✓.",
      ],
      traps: [{ spec: { type: "list", values: [2] }, feedback: "Don't divide by t — you lose t = 0. (|**a**| itself is already 5.)" }],
      commonError: "Dividing both sides by t and losing the solution t = 0.",
      difficulty: "challenge",
      guideRef: "vector-basics",
      hints: [
        "Write **a** + t**b** as a single column vector with t in it.",
        "Its magnitude squared is (top)² + (bottom)². Set that equal to 25.",
        "You get a quadratic in t. Factorise — don't divide by t.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "vectors-transformations-ch-q04",
      question:
        "Three vertices of a parallelogram are A(1, 1), B(5, 2) and C(3, 6). There are three possible positions for the fourth vertex.\n\nFind the sum of the x-coordinates of all three possible positions.",
      answer: { type: "number", value: 9 },
      solution: [
        "In a parallelogram, the diagonals bisect each other, so the fourth vertex D satisfies (sum of the two vertices on one diagonal) = (sum of the other two).",
        "If AC is a diagonal: D = A + C − B = (−1, 5).",
        "If AB is a diagonal: D = A + B − C = (3, −3).",
        "If BC is a diagonal: D = B + C − A = (7, 7).",
        "Sum of x-coordinates: −1 + 3 + 7 = 9.",
      ],
      solutions: [
        {
          label: "Spot the invariant",
          steps: [
            "Adding the three formulas: (A + C − B) + (A + B − C) + (B + C − A) = A + B + C.",
            "So the sum is simply 1 + 5 + 3 = 9 — no need to find the points at all.",
          ],
        },
      ],
      traps: [{ spec: { type: "number", value: -1 }, feedback: "That's just one of the three positions (ABCD in that order). Two more parallelograms use A, B, C in a different order." }],
      commonError: "Finding only the parallelogram ABCD and forgetting the other two.",
      difficulty: "challenge",
      guideRef: "vector-basics",
      hints: [
        "Use position vectors: in parallelogram ABCD, →AB = →DC, so D = A + C − B.",
        "Which of the three given points could be *opposite* the missing vertex? Each choice gives a different parallelogram.",
        "Add the three x-coordinates — or look for a shortcut by adding the three formulas.",
      ],
      strategy: "Split into cases",
    },
    {
      kind: "short",
      id: "vectors-transformations-ch-q05",
      question:
        "An enlargement maps A(1, 2) onto A′(7, −1) and B(3, 2) onto B′(3, −1).\n\nFind the scale factor and the coordinates of the centre of enlargement. Give your answer as three numbers: the scale factor, then the x- and y-coordinates of the centre.",
      answer: { type: "list", values: [-2, 3, 1], ordered: true, display: "scale factor −2, centre (3, 1)" },
      solution: [
        "→AB = {{col(2, 0)}} and →A′B′ = {{col(-4, 0)}} = −2 →AB, so the scale factor is −2.",
        "For centre C: A′ − C = −2(A − C), so A′ + 2A = 3C.",
        "3C = (7 + 2, −1 + 4) = (9, 3), so C = (3, 1).",
        "Check with B: from C to B is {{col(0, 1)}}; × (−2) gives {{col(0, -2)}}, landing on (3, −1) = B′ ✓.",
      ],
      solutions: [
        {
          label: "Intersecting rays",
          steps: [
            "Lines AA′ and BB′ both pass through the centre.",
            "BB′ is the vertical line x = 3. AA′ through (1, 2) and (7, −1) has gradient −{{1/2}}: y = −{{1/2}}x + {{5/2}}.",
            "At x = 3: y = 1. Centre (3, 1). The image is on the opposite side of the centre and twice as far, so the scale factor is −2.",
          ],
        },
      ],
      traps: [{ spec: { type: "list", values: [2, 3, 1], ordered: true }, feedback: "Right centre, but the image is turned upside down through the centre (→A′B′ points the opposite way to →AB), so the scale factor is negative." }],
      commonError: "Missing the negative sign in the scale factor.",
      difficulty: "challenge",
      guideRef: "transformations",
      hints: [
        "Compare the vector →AB with the vector →A′B′: that gives the scale factor, sign included.",
        "The centre C satisfies →CA′ = k→CA. Write that as an equation in C.",
        "With k = −2: A′ − C = −2(A − C). Solve for C.",
      ],
      strategy: "Use vectors",
    },
    {
      kind: "short",
      id: "vectors-transformations-ch-q06",
      question: "The point (5, 0) is reflected in the line y = x + 3. Find the coordinates of its image.",
      answer: { type: "list", values: [-3, 8], ordered: true, display: "(−3, 8)" },
      solution: [
        "Shift everything down by 3 so the mirror becomes y = x: (5, 0) → (5, −3).",
        "Reflect in y = x: (5, −3) → (−3, 5).",
        "Shift back up by 3: (−3, 8).",
      ],
      solutions: [
        {
          label: "Perpendicular and midpoint",
          steps: [
            "The image lies on the line through (5, 0) perpendicular to y = x + 3, i.e. gradient −1: y = −x + 5.",
            "This meets the mirror where x + 3 = −x + 5, so x = 1: the foot is (1, 4).",
            "(1, 4) is the midpoint of the point and its image: image = 2(1, 4) − (5, 0) = (−3, 8).",
          ],
        },
      ],
      traps: [
        { spec: { type: "list", values: [0, 5], ordered: true }, feedback: "That's a reflection in y = x. The mirror y = x + 3 is shifted up by 3, which changes the answer." },
        { spec: { type: "list", values: [-3, 2], ordered: true }, feedback: "Close — but shift *down* first and *up* at the end (or vice versa), never the same way twice." },
      ],
      commonError: "Simply swapping the coordinates, as for y = x.",
      difficulty: "challenge",
      guideRef: "transformations",
      hints: [
        "Can you move everything so that the mirror becomes the familiar line y = x?",
        "Translate by (0, −3), reflect in y = x, then translate back by (0, 3).",
        "Or: drop a perpendicular from (5, 0) to the mirror; the foot is the midpoint of the point and its image.",
      ],
      strategy: "Make it simpler",
    },
    {
      kind: "short",
      id: "vectors-transformations-ch-q07",
      question:
        "R is a rotation of 90° anticlockwise about the origin. T is a translation by the vector {{col(2, 0)}}.\n\nApplying R and then T is equivalent to a single rotation of 90° anticlockwise. Find the coordinates of its centre.",
      answer: { type: "list", values: [1, 1], ordered: true, display: "(1, 1)" },
      solution: [
        "R: (x, y) → (−y, x). Then T: → (2 − y, x).",
        "The centre of the single rotation is its invariant point: 2 − y = x and x = y.",
        "So x = y and 2 − x = x, giving x = 1. Centre (1, 1).",
        "Check: (1, 1) → R → (−1, 1) → T → (1, 1) ✓.",
      ],
      solutions: [
        {
          label: "Geometric",
          steps: [
            "The centre C must satisfy R(C) = C − (2, 0): the rotation must move C exactly (−2, 0) so that T brings it back.",
            "A 90° rotation about O moves a point at distance d through a chord of length d{{sqrt(2)}}. Need d{{sqrt(2)}} = 2, so d = {{sqrt(2)}}; trying (1, 1) works: R(1, 1) = (−1, 1).",
          ],
        },
      ],
      traps: [{ spec: { type: "list", values: [1, -1], ordered: true }, feedback: "That's the centre for T *then* R. Order matters: here R comes first, then T." }],
      commonError: "Doing the translation first.",
      difficulty: "challenge",
      guideRef: "combined-transformations",
      hints: [
        "The centre of a rotation is the one point that doesn't move.",
        "Write where a general point (x, y) goes after R, then after T.",
        "Set the final image equal to (x, y) and solve.",
      ],
      strategy: "Look for an invariant",
    },
    {
      kind: "short",
      id: "vectors-transformations-ch-q08",
      question:
        "An enlargement with scale factor 2 and centre (0, 0) is followed by an enlargement with scale factor {{1/2}} and centre (4, 0).\n\nThe result is a translation. Find its column vector. Type the top entry, then the bottom entry.",
      answer: { type: "list", values: [2, 0], ordered: true, display: "{{col(2, 0)}}" },
      solution: [
        "First: (x, y) → (2x, 2y).",
        "Second, about C = (4, 0): image = C + {{1/2}}(point − C) = (4 + {{1/2}}(2x − 4), {{1/2}}(2y)) = (x + 2, y).",
        "Every point moves by {{col(2, 0)}}, so it's the translation {{col(2, 0)}}.",
      ],
      solutions: [
        {
          label: "Track one point",
          steps: [
            "Scale factors multiply: 2 × {{1/2}} = 1, so the combined map is a translation (or the identity) — just track one point.",
            "(0, 0) → (0, 0) → (4, 0) + {{1/2}}((0, 0) − (4, 0)) = (2, 0). Vector {{col(2, 0)}}.",
          ],
        },
      ],
      traps: [{ spec: { type: "list", values: [0, 0], ordered: true }, feedback: "The sizes cancel (2 × {{1/2}} = 1), but the centres are different, so the shape still moves." }],
      commonError: "Thinking the two enlargements cancel out completely because 2 × {{1/2}} = 1.",
      difficulty: "challenge",
      guideRef: "combined-transformations",
      hints: [
        "What is the overall scale factor? What kind of transformation has scale factor 1?",
        "Follow a general point (x, y) through both enlargements.",
        "Or follow the single point (0, 0) — it's easy because it's the first centre.",
      ],
      strategy: "Try small cases",
    },
    {
      kind: "written",
      id: "vectors-transformations-ch-q09",
      question:
        "ABCD is any quadrilateral. P, Q, R and S are the midpoints of AB, BC, CD and DA respectively.\n\nUse vectors to prove that PQRS is a parallelogram.",
      marks: 4,
      modelAnswer:
        "Let the position vectors of A, B, C, D be **a**, **b**, **c**, **d**. Then P = {{1/2}}(**a** + **b**), Q = {{1/2}}(**b** + **c**), R = {{1/2}}(**c** + **d**), S = {{1/2}}(**d** + **a**).\n\n→PQ = Q − P = {{1/2}}(**c** − **a**).\n\n→SR = R − S = {{1/2}}(**c** − **a**).\n\nSo →PQ = →SR: the sides PQ and SR are equal in length and parallel. A quadrilateral with one pair of opposite sides equal and parallel is a parallelogram, so PQRS is a parallelogram. (Both are half of the diagonal →AC — the midpoint theorem.)",
      markScheme: [
        { point: "Midpoints as position vectors, e.g. P = {{1/2}}(**a** + **b**)", keywords: ["1/2(a + b)", "1/2(a+b)", "(a + b)/2", "(a+b)/2", "midpoint"] },
        { point: "→PQ = {{1/2}}(**c** − **a**)", keywords: ["1/2(c - a)", "1/2(c − a)", "(c - a)/2", "c - a", "c − a"] },
        { point: "→SR = {{1/2}}(**c** − **a**) (same vector)", keywords: ["sr", "1/2(c - a)", "same", "equal"] },
        { point: "Equal and parallel opposite sides ⇒ parallelogram", keywords: ["parallel", "equal", "parallelogram"] },
      ],
      solutions: [
        {
          label: "Via the diagonal",
          steps: [
            "In triangle ABC, →PQ = →PB + →BQ = {{1/2}}→AB + {{1/2}}→BC = {{1/2}}→AC.",
            "In triangle ADC, →SR = →SD + →DR = {{1/2}}→AD + {{1/2}}→DC = {{1/2}}→AC.",
            "So →PQ = →SR, hence PQRS is a parallelogram.",
          ],
        },
      ],
      commonError: "Showing PQ is parallel to SR but not that they are equal (or not also checking the other pair).",
      difficulty: "challenge",
      guideRef: "vector-geometry",
      hints: [
        "Give A, B, C, D position vectors **a**, **b**, **c**, **d**. What is the position vector of the midpoint of AB?",
        "Work out →PQ and →SR.",
        "What do you notice? What does it tell you about the sides PQ and SR?",
        "One pair of opposite sides equal and parallel is enough for a parallelogram.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "vectors-transformations-ch-q10",
      question:
        "A boat starts at the point (2, 1) and moves with constant velocity {{col(3, 4)}} km/h, so after t hours its position vector is {{col(2 + 3t, 1 + 4t)}}. Distances are in km. A lighthouse is at (14, 9).\n\nAfter how many hours is the boat closest to the lighthouse? Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 2.72, tolerance: 0.005 },
      solution: [
        "Vector from the lighthouse to the boat: {{col(2 + 3t - 14, 1 + 4t - 9) = col(3t - 12, 4t - 8)}}.",
        "Distance² = (3t − 12)² + (4t − 8)² = 9t² − 72t + 144 + 16t² − 64t + 64 = 25t² − 136t + 208.",
        "Complete the square: 25(t² − 5.44t) + 208 = 25(t − 2.72)² − 184.96 + 208 = 25(t − 2.72)² + 43.04.",
        "Least when t = 2.72 hours. (The least distance is {{sqrt(43.04)}} ≈ 6.56 km.)",
      ],
      solutions: [
        {
          label: "Perpendicular",
          steps: [
            "At the closest point, the line from the lighthouse to the boat is perpendicular to the direction of travel {{col(3, 4)}}.",
            "Two vectors {{col(p, q)}} and {{col(r, s)}} are perpendicular when pr + qs = 0 (the gradients {{q/p}} and {{s/r}} multiply to −1). So (3t − 12) × 3 + (4t − 8) × 4 = 0.",
            "9t − 36 + 16t − 32 = 0, so 25t = 68 and t = 2.72.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 4 }, feedback: "At t = 4 the boat's x-coordinate matches the lighthouse's, but it is then 8 km north of it — further than at t = 2.72. Minimise the whole distance, not one coordinate." },
        { spec: { type: "number", value: 2 }, feedback: "At t = 2 the y-coordinate matches (9), but that doesn't minimise the distance. Minimise (3t − 12)² + (4t − 8)²." },
      ],
      commonError: "Making one coordinate match the lighthouse's instead of minimising the distance.",
      difficulty: "challenge",
      guideRef: "vector-basics",
      hints: [
        "Write the vector from the lighthouse to the boat in terms of t.",
        "Its magnitude squared is a quadratic in t. Minimising the distance is the same as minimising its square.",
        "Complete the square (or use the turning point formula t = {{-b/(2a)}}).",
      ],
      strategy: "Introduce a variable",
    },
  ],
};
