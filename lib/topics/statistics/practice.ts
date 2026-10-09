import type { TopicPractice } from "../../types.ts";

// ---------------------------------------------------------------------------
// Diagrams (drawn to scale from the data in the questions)
// ---------------------------------------------------------------------------

const G1 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency graph of commuting times for 80 people. Points plotted at (0, 0), (10, 5), (20, 15), (30, 35), (40, 55), (50, 75) and (60, 80), joined by straight lines."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="91.7" y1="20" x2="91.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="123.3" y1="20" x2="123.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="186.7" y1="20" x2="186.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="218.3" y1="20" x2="218.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="281.7" y1="20" x2="281.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="313.3" y1="20" x2="313.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="376.7" y1="20" x2="376.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="408.3" y1="20" x2="408.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="254.4" x2="440" y2="254.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="238.8" x2="440" y2="238.8" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="223.1" x2="440" y2="223.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="207.5" x2="440" y2="207.5" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="191.9" x2="440" y2="191.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="176.3" x2="440" y2="176.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="160.6" x2="440" y2="160.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="145" x2="440" y2="145" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="129.4" x2="440" y2="129.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="113.8" x2="440" y2="113.8" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="98.1" x2="440" y2="98.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="82.5" x2="440" y2="82.5" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="66.9" x2="440" y2="66.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="51.3" x2="440" y2="51.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="35.6" x2="440" y2="35.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="123.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="186.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="313.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="376.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="242.8" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">10</text><text x="54" y="211.5" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">20</text><text x="54" y="180.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">30</text><text x="54" y="149" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">40</text><text x="54" y="117.8" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">50</text><text x="54" y="86.5" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">60</text><text x="54" y="55.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">70</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">80</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Time (minutes)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Cumulative frequency</text><polyline points="60,270 123.3,254.4 186.7,223.1 250,160.6 313.3,98.1 376.7,35.6 440,20" fill="none" stroke="#4338ca" stroke-width="2"/><circle cx="60" cy="270" r="3" fill="#4338ca"/><circle cx="123.3" cy="254.4" r="3" fill="#4338ca"/><circle cx="186.7" cy="223.1" r="3" fill="#4338ca"/><circle cx="250" cy="160.6" r="3" fill="#4338ca"/><circle cx="313.3" cy="98.1" r="3" fill="#4338ca"/><circle cx="376.7" cy="35.6" r="3" fill="#4338ca"/><circle cx="440" cy="20" r="3" fill="#4338ca"/></svg>`;

const G2 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency graph of test marks for 120 students. Points plotted at (20, 0), (30, 10), (40, 30), (50, 60), (60, 100), (70, 114) and (80, 120), joined by straight lines."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="91.7" y1="20" x2="91.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="123.3" y1="20" x2="123.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="186.7" y1="20" x2="186.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="218.3" y1="20" x2="218.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="281.7" y1="20" x2="281.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="313.3" y1="20" x2="313.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="376.7" y1="20" x2="376.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="408.3" y1="20" x2="408.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="249.2" x2="440" y2="249.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="228.3" x2="440" y2="228.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="207.5" x2="440" y2="207.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="186.7" x2="440" y2="186.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="165.8" x2="440" y2="165.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="145" x2="440" y2="145" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="124.2" x2="440" y2="124.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="103.3" x2="440" y2="103.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="82.5" x2="440" y2="82.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="61.7" x2="440" y2="61.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="40.8" x2="440" y2="40.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="123.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="186.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="313.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60</text><text x="376.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">70</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">80</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="232.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">20</text><text x="54" y="190.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">40</text><text x="54" y="149" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">60</text><text x="54" y="107.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">80</text><text x="54" y="65.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">100</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">120</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Mark</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Cumulative frequency</text><polyline points="60,270 123.3,249.2 186.7,207.5 250,145 313.3,61.7 376.7,32.5 440,20" fill="none" stroke="#4338ca" stroke-width="2"/><circle cx="60" cy="270" r="3" fill="#4338ca"/><circle cx="123.3" cy="249.2" r="3" fill="#4338ca"/><circle cx="186.7" cy="207.5" r="3" fill="#4338ca"/><circle cx="250" cy="145" r="3" fill="#4338ca"/><circle cx="313.3" cy="61.7" r="3" fill="#4338ca"/><circle cx="376.7" cy="32.5" r="3" fill="#4338ca"/><circle cx="440" cy="20" r="3" fill="#4338ca"/></svg>`;

const G3 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency graph of the heights of 60 sunflowers. Points plotted at (100, 0), (120, 5), (140, 15), (160, 30), (180, 45), (200, 55) and (220, 60), joined by straight lines."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="91.7" y1="20" x2="91.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="123.3" y1="20" x2="123.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="186.7" y1="20" x2="186.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="218.3" y1="20" x2="218.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="281.7" y1="20" x2="281.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="313.3" y1="20" x2="313.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="376.7" y1="20" x2="376.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="408.3" y1="20" x2="408.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="249.2" x2="440" y2="249.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="228.3" x2="440" y2="228.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="207.5" x2="440" y2="207.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="186.7" x2="440" y2="186.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="165.8" x2="440" y2="165.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="145" x2="440" y2="145" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="124.2" x2="440" y2="124.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="103.3" x2="440" y2="103.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="82.5" x2="440" y2="82.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="61.7" x2="440" y2="61.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="40.8" x2="440" y2="40.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">100</text><text x="123.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">120</text><text x="186.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">140</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">160</text><text x="313.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">180</text><text x="376.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">200</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">220</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="232.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">10</text><text x="54" y="190.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">20</text><text x="54" y="149" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">30</text><text x="54" y="107.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">40</text><text x="54" y="65.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">50</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">60</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Height (cm)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Cumulative frequency</text><polyline points="60,270 123.3,249.2 186.7,207.5 250,145 313.3,82.5 376.7,40.8 440,20" fill="none" stroke="#4338ca" stroke-width="2"/><circle cx="60" cy="270" r="3" fill="#4338ca"/><circle cx="123.3" cy="249.2" r="3" fill="#4338ca"/><circle cx="186.7" cy="207.5" r="3" fill="#4338ca"/><circle cx="250" cy="145" r="3" fill="#4338ca"/><circle cx="313.3" cy="82.5" r="3" fill="#4338ca"/><circle cx="376.7" cy="40.8" r="3" fill="#4338ca"/><circle cx="440" cy="20" r="3" fill="#4338ca"/></svg>`;

const H1 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of waiting times. Bars: 0 to 10 height 1.2, 10 to 15 height 4, 15 to 20 height 4.8, 20 to 30 height 1.6, 30 to 50 height 0.4."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="98" y1="20" x2="98" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="136" y1="20" x2="136" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="174" y1="20" x2="174" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="212" y1="20" x2="212" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="288" y1="20" x2="288" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="326" y1="20" x2="326" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="364" y1="20" x2="364" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="402" y1="20" x2="402" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="260" x2="440" y2="260" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="250" x2="440" y2="250" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="240" x2="440" y2="240" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="230" x2="440" y2="230" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="220" x2="440" y2="220" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="210" x2="440" y2="210" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="200" x2="440" y2="200" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="190" x2="440" y2="190" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="180" x2="440" y2="180" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="170" x2="440" y2="170" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="160" x2="440" y2="160" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="150" x2="440" y2="150" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="140" x2="440" y2="140" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="130" x2="440" y2="130" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="120" x2="440" y2="120" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="110" x2="440" y2="110" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="100" x2="440" y2="100" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="90" x2="440" y2="90" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="80" x2="440" y2="80" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="70" x2="440" y2="70" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="60" x2="440" y2="60" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="50" x2="440" y2="50" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="40" x2="440" y2="40" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="30" x2="440" y2="30" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="136" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="212" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="288" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="364" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="224" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">1</text><text x="54" y="174" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">2</text><text x="54" y="124" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">3</text><text x="54" y="74" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">4</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">5</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Time, t (minutes)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Frequency density</text><rect x="60" y="210" width="76" height="60" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="136" y="70" width="38" height="200" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="174" y="30" width="38" height="240" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="212" y="190" width="76" height="80" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="288" y="250" width="152" height="20" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/></svg>`;

const H2 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of seedling heights. Bars: 0 to 4 height 2.5, 4 to 6 height 9, 6 to 8 height 12, 8 to 12 height 4.5, 12 to 20 height 1.25."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="79" y1="20" x2="79" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="98" y1="20" x2="98" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="117" y1="20" x2="117" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="136" y1="20" x2="136" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="174" y1="20" x2="174" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="193" y1="20" x2="193" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="212" y1="20" x2="212" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="231" y1="20" x2="231" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="269" y1="20" x2="269" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="288" y1="20" x2="288" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="307" y1="20" x2="307" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="326" y1="20" x2="326" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="364" y1="20" x2="364" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="383" y1="20" x2="383" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="402" y1="20" x2="402" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="421" y1="20" x2="421" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="260.4" x2="440" y2="260.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="250.8" x2="440" y2="250.8" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="241.2" x2="440" y2="241.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="231.5" x2="440" y2="231.5" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="221.9" x2="440" y2="221.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="212.3" x2="440" y2="212.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="202.7" x2="440" y2="202.7" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="193.1" x2="440" y2="193.1" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="183.5" x2="440" y2="183.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="173.8" x2="440" y2="173.8" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="164.2" x2="440" y2="164.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="154.6" x2="440" y2="154.6" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="145" x2="440" y2="145" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="135.4" x2="440" y2="135.4" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="125.8" x2="440" y2="125.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="116.2" x2="440" y2="116.2" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="106.5" x2="440" y2="106.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="96.9" x2="440" y2="96.9" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="87.3" x2="440" y2="87.3" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="77.7" x2="440" y2="77.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="68.1" x2="440" y2="68.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="58.5" x2="440" y2="58.5" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="48.8" x2="440" y2="48.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="39.2" x2="440" y2="39.2" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="29.6" x2="440" y2="29.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="98" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2</text><text x="136" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">4</text><text x="174" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6</text><text x="212" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">8</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="288" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">12</text><text x="326" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">14</text><text x="364" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">16</text><text x="402" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">18</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="254.8" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">1</text><text x="54" y="235.5" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">2</text><text x="54" y="216.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">3</text><text x="54" y="197.1" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">4</text><text x="54" y="177.8" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">5</text><text x="54" y="158.6" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">6</text><text x="54" y="139.4" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">7</text><text x="54" y="120.2" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">8</text><text x="54" y="100.9" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">9</text><text x="54" y="81.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">10</text><text x="54" y="62.5" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">11</text><text x="54" y="43.2" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">12</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">13</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Height, h (cm)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Frequency density</text><rect x="60" y="221.9" width="76" height="48.1" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="136" y="96.9" width="38" height="173.1" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="174" y="39.2" width="38" height="230.8" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="212" y="183.5" width="76" height="86.5" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="288" y="246" width="152" height="24" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/></svg>`;

const H3 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram with no numbers on the vertical axis, drawn on a square grid. Bars: 0 to 20 is 3 squares high, 20 to 30 is 8 squares high, 30 to 60 is 2 squares high."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="91.7" y1="20" x2="91.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="123.3" y1="20" x2="123.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="186.7" y1="20" x2="186.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="218.3" y1="20" x2="218.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="281.7" y1="20" x2="281.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="313.3" y1="20" x2="313.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="376.7" y1="20" x2="376.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="408.3" y1="20" x2="408.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="245" x2="440" y2="245" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="220" x2="440" y2="220" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="195" x2="440" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="170" x2="440" y2="170" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="145" x2="440" y2="145" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="120" x2="440" y2="120" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="95" x2="440" y2="95" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="70" x2="440" y2="70" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="45" x2="440" y2="45" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="123.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="186.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="313.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="376.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Time, t (minutes)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Frequency density</text><rect x="60" y="195" width="126.7" height="75" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="186.7" y="70" width="63.3" height="200" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="250" y="220" width="190" height="50" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/></svg>`;

const H4 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of daily phone use. Bars: 0 to 20 height 0.6, 20 to 30 height 2.4, 30 to 40 height 3.2, 40 to 60 height 1.2, 60 to 100 height 0.2."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="79" y1="20" x2="79" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="98" y1="20" x2="98" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="117" y1="20" x2="117" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="136" y1="20" x2="136" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="174" y1="20" x2="174" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="193" y1="20" x2="193" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="212" y1="20" x2="212" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="231" y1="20" x2="231" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="269" y1="20" x2="269" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="288" y1="20" x2="288" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="307" y1="20" x2="307" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="326" y1="20" x2="326" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="364" y1="20" x2="364" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="383" y1="20" x2="383" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="402" y1="20" x2="402" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="421" y1="20" x2="421" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="262.9" x2="440" y2="262.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="255.7" x2="440" y2="255.7" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="248.6" x2="440" y2="248.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="241.4" x2="440" y2="241.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="234.3" x2="440" y2="234.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="227.1" x2="440" y2="227.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="220" x2="440" y2="220" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="212.9" x2="440" y2="212.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="205.7" x2="440" y2="205.7" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="198.6" x2="440" y2="198.6" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="191.4" x2="440" y2="191.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="184.3" x2="440" y2="184.3" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="177.1" x2="440" y2="177.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="170" x2="440" y2="170" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="162.9" x2="440" y2="162.9" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="155.7" x2="440" y2="155.7" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="148.6" x2="440" y2="148.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="141.4" x2="440" y2="141.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="134.3" x2="440" y2="134.3" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="127.1" x2="440" y2="127.1" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="120" x2="440" y2="120" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="112.9" x2="440" y2="112.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="105.7" x2="440" y2="105.7" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="98.6" x2="440" y2="98.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="91.4" x2="440" y2="91.4" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="84.3" x2="440" y2="84.3" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="77.1" x2="440" y2="77.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="70" x2="440" y2="70" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="62.9" x2="440" y2="62.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="55.7" x2="440" y2="55.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="48.6" x2="440" y2="48.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="41.4" x2="440" y2="41.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="34.3" x2="440" y2="34.3" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="27.1" x2="440" y2="27.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="98" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="136" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="174" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="212" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="288" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60</text><text x="326" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">70</text><text x="364" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">80</text><text x="402" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">90</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">100</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="238.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0.5</text><text x="54" y="202.6" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">1</text><text x="54" y="166.9" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">1.5</text><text x="54" y="131.1" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">2</text><text x="54" y="95.4" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">2.5</text><text x="54" y="59.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">3</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">3.5</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Time, t (minutes)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Frequency density</text><rect x="60" y="227.1" width="76" height="42.9" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="136" y="98.6" width="38" height="171.4" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="174" y="41.4" width="38" height="228.6" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="212" y="184.3" width="76" height="85.7" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="288" y="255.7" width="152" height="14.3" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/></svg>`;

export const practice: TopicPractice = {
  // =========================================================================
  // Quick-check quiz — 10 questions (3 mcq, 7 short) across the main sections
  // =========================================================================
  quiz: [
    {
      kind: "short",
      id: "statistics-quiz-q01",
      question: "Here are the scores of seven students in a spelling test:\n\n    12, 15, 9, 20, 15, 11, 30\n\nWork out the mean score.",
      answer: { type: "number", value: 16 },
      solution: [
        "Add the values: 12 + 15 + 9 + 20 + 15 + 11 + 30 = 112.",
        "Divide by how many values there are: 112 ÷ 7 = 16.",
      ],
      traps: [
        { spec: { type: "number", value: 15 }, feedback: "15 is the median (and the mode). The mean is the total shared out equally: 112 ÷ 7." },
      ],
      commonError: "Giving the median or mode instead of the mean.",
      difficulty: "warmup",
      guideRef: "averages-raw-data",
      hints: ["Mean = total ÷ number of values.", "The total is 112. How many scores are there?"],
      strategy: "Use the definition",
    },
    {
      kind: "short",
      id: "statistics-quiz-q02",
      question:
        "Kenji's mean mark in his first six tests was 72. After his seventh test, his mean mark was 74. What did he score in the seventh test?",
      answer: { type: "number", value: 86 },
      solution: [
        "Total of the first six: 6 × 72 = 432.",
        "Total of all seven: 7 × 74 = 518.",
        "Seventh test: 518 − 432 = 86.",
      ],
      solutions: [
        {
          label: "Think about the shortfall",
          steps: [
            "The new mark must lift all seven marks to 74.",
            "The six old marks are each 2 below 74 — a shortfall of 6 × 2 = 12.",
            "So the new mark is 74 + 12 = 86.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 76 }, feedback: "The new mark has to lift *six* earlier marks by 2 each as well as itself. Work with totals: 7 × 74 − 6 × 72." },
      ],
      commonError: "Adding the change in the mean (2) to the new mean instead of working with totals.",
      difficulty: "core",
      guideRef: "averages-raw-data",
      hints: [
        "Means are awkward to combine — totals are easy. What was the total of the first six marks?",
        "What must the total of all seven marks be?",
        "The difference between the two totals is the seventh mark.",
      ],
      strategy: "Work backwards",
    },
    {
      kind: "mcq",
      id: "statistics-quiz-q03",
      question:
        "Class A has 20 students with a mean height of 164 cm. Class B has 30 students with a mean height of 174 cm. What is the mean height of all 50 students?",
      options: ["170 cm", "169 cm", "168 cm", "8500 cm"],
      answerIndex: 0,
      explanation:
        "Totals: 20 × 164 = 3280 and 30 × 174 = 5220, so the combined total is 8500 cm. Mean = 8500 ÷ 50 = 170 cm. 169 cm averages the two means, ignoring that Class B is bigger; 168 cm swaps the class sizes; 8500 cm is the total, not the mean.",
      difficulty: "core",
      guideRef: "averages-raw-data",
      hints: [
        "Is it fair to average the two means when the classes are different sizes?",
        "Find each class's total height first.",
        "Combined mean = combined total ÷ 50.",
      ],
      strategy: "Use totals, not means",
    },
    {
      kind: "short",
      id: "statistics-quiz-q04",
      question: "Here are the times, in minutes, that seven runners took to finish a course:\n\n    31, 24, 40, 28, 35, 22, 45\n\nWork out the interquartile range.",
      answer: { type: "number", value: 16, display: "16 minutes" },
      solution: [
        "Order the data: 22, 24, 28, 31, 35, 40, 45.",
        "n = 7, so Q1 is the {{(7+1)/4}} = 2nd value = 24 and Q3 is the {{3(7+1)/4}} = 6th value = 40.",
        "IQR = 40 − 24 = 16 minutes.",
      ],
      traps: [
        { spec: { type: "number", value: 23 }, feedback: "23 is the range (45 − 22). The IQR uses the quartiles: Q3 − Q1." },
        { spec: { type: "number", value: 5 }, feedback: "Did you forget to put the data in order first? Quartiles only make sense on ordered data." },
      ],
      commonError: "Finding quartiles without ordering the data first.",
      difficulty: "warmup",
      guideRef: "quartiles-iqr",
      hints: ["Put the times in order first.", "With 7 values, Q1 is the 2nd value and Q3 is the 6th value."],
      strategy: "Organise the data",
    },
    {
      kind: "short",
      id: "statistics-quiz-q05",
      question:
        "Twenty students were asked how many siblings they have.\n\n| Number of siblings | Frequency |\n|---|---|\n| 0 | 5 |\n| 1 | 9 |\n| 2 | 4 |\n| 3 | 2 |\n\nWork out the mean number of siblings. Give your answer as a decimal.",
      answer: { type: "number", value: 1.15, allowFraction: false },
      solution: [
        "Multiply each value by its frequency: 0 × 5 = 0, 1 × 9 = 9, 2 × 4 = 8, 3 × 2 = 6.",
        "Total number of siblings = 0 + 9 + 8 + 6 = 23.",
        "Mean = 23 ÷ 20 = 1.15.",
      ],
      traps: [
        { spec: { type: "number", value: 1.5 }, feedback: "That is the mean of 0, 1, 2, 3 — it ignores how many students gave each answer. Use Σfx ÷ Σf." },
        { spec: { type: "number", value: 5 }, feedback: "That is the mean of the frequencies (20 ÷ 4). The mean number of siblings is Σfx ÷ Σf." },
        { spec: { type: "number", value: 5.75 }, feedback: "You divided Σfx = 23 by the number of rows (4). Divide by the number of students, 20." },
      ],
      commonError: "Dividing by the number of rows instead of the total frequency.",
      difficulty: "warmup",
      guideRef: "frequency-tables",
      hints: ["Add an fx column: value × frequency.", "Mean = (total of fx) ÷ (total frequency)."],
      strategy: "Add a column",
    },
    {
      kind: "short",
      id: "statistics-quiz-q06",
      question:
        "The table shows the time, t minutes, that 30 people waited at an MRT ticket machine.\n\n| Time (t minutes) | Frequency |\n|---|---|\n| 0 < t ≤ 10 | 4 |\n| 10 < t ≤ 20 | 10 |\n| 20 < t ≤ 30 | 14 |\n| 30 < t ≤ 40 | 2 |\n\nWork out an estimate for the mean waiting time. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 19.7, tolerance: 0.05, display: "19.7 minutes" },
      solution: [
        "Use the midpoints: 5, 15, 25, 35.",
        "fx: 5 × 4 = 20, 15 × 10 = 150, 25 × 14 = 350, 35 × 2 = 70. Total = 590.",
        "Estimated mean = 590 ÷ 30 = 19.666… = 19.7 minutes (3 s.f.).",
      ],
      traps: [
        { spec: { type: "number", value: 24.7, tolerance: 0.05 }, feedback: "You used the upper class boundaries (10, 20, 30, 40). Use the midpoints — the best single guess for every value in a class." },
        { spec: { type: "number", value: 147.5, tolerance: 0.05 }, feedback: "You divided by the number of classes (4). Divide by the total frequency, 30." },
      ],
      commonError: "Using the class upper bounds instead of the midpoints.",
      difficulty: "core",
      guideRef: "frequency-tables",
      hints: [
        "You don't know the exact times. What single value best represents each class?",
        "Use the midpoints 5, 15, 25, 35 and multiply each by its frequency.",
        "Divide the total of the fx column by 30.",
      ],
      strategy: "Use a representative value",
    },
    {
      kind: "mcq",
      id: "statistics-quiz-q07",
      question:
        "The heights of 40 plants are recorded.\n\n| Height (h cm) | Frequency |\n|---|---|\n| 150 < h ≤ 160 | 6 |\n| 160 < h ≤ 170 | 10 |\n| 170 < h ≤ 180 | 9 |\n| 180 < h ≤ 190 | 15 |\n\nWhich class contains the median?",
      options: ["150 < h ≤ 160", "170 < h ≤ 180", "160 < h ≤ 170", "180 < h ≤ 190"],
      answerIndex: 1,
      explanation:
        "The median is roughly the 20th–21st value. Running totals: 6, 16, 25 — the 20th and 21st values are inside 170 < h ≤ 180. 180 < h ≤ 190 is the **modal** class (highest frequency), not the median class. 160 < h ≤ 170 comes from stopping when the running total (16) is still short of 20.",
      difficulty: "core",
      guideRef: "frequency-tables",
      hints: [
        "With 40 values, roughly which position is the median?",
        "Keep a running total of the frequencies.",
        "Which class does the running total first pass 20 in?",
      ],
      strategy: "Keep a running total",
    },
    {
      kind: "short",
      id: "statistics-quiz-q08",
      question:
        "The cumulative frequency graph shows the times, t minutes, that 80 students took to complete a puzzle.\n\nUse the graph to find an estimate for the median time. Give your answer in minutes.",
      diagram: QUIZ_CF,
      answer: { type: "number", value: 28, tolerance: 1, display: "28 minutes (accept 27–29)" },
      solution: [
        "There are 80 students, so the median is at a cumulative frequency of {{1/2}} × 80 = 40.",
        "Go across from 40 on the vertical axis to the graph, then down to the time axis.",
        "The line meets the graph at t ≈ 28 minutes.",
      ],
      traps: [
        { spec: { type: "number", value: 25, tolerance: 0.5 }, feedback: "25 minutes is halfway along the *time* axis. The median is halfway through the *students*: read across from a cumulative frequency of 40." },
        { spec: { type: "number", value: 40, tolerance: 0.5 }, feedback: "40 is the cumulative frequency where the median sits — now read across to the curve and down to the time axis." },
      ],
      commonError: "Taking half of the time axis instead of half of the total frequency.",
      difficulty: "core",
      guideRef: "cumulative-frequency",
      hints: [
        "The median is the middle student. What cumulative frequency is that?",
        "Read across from 40 on the vertical axis.",
        "When you hit the graph, read straight down to the time axis.",
      ],
      strategy: "Read a graph",
    },
    {
      kind: "short",
      id: "statistics-quiz-q09",
      question:
        "In a histogram, the class 10 < w ≤ 30 has a frequency of 24. Work out the frequency density for this class. Give your answer as a decimal.",
      answer: { type: "number", value: 1.2, allowFraction: false },
      solution: [
        "Class width = 30 − 10 = 20.",
        "Frequency density = frequency ÷ class width = 24 ÷ 20 = 1.2.",
      ],
      traps: [
        { spec: { type: "number", value: 0.8333, tolerance: 0.001 }, feedback: "That is class width ÷ frequency — the wrong way round. Frequency density = frequency ÷ class width." },
        { spec: { type: "number", value: 0.8, tolerance: 0.001 }, feedback: "You divided by 30, the upper bound. Divide by the class **width**, 30 − 10 = 20." },
      ],
      commonError: "Dividing by the upper bound rather than the class width.",
      difficulty: "warmup",
      guideRef: "histograms",
      hints: ["Frequency density = frequency ÷ class width.", "How wide is the class from 10 to 30?"],
      strategy: "Use the definition",
    },
    {
      kind: "mcq",
      id: "statistics-quiz-q10",
      question:
        "A histogram has a bar for the class 20 < x ≤ 35 with a frequency density of 2.4. How many values are in this class?",
      options: ["2.4", "6.25", "84", "36"],
      answerIndex: 3,
      explanation:
        "In a histogram, **area** represents frequency: frequency = frequency density × class width = 2.4 × 15 = 36. 2.4 reads the bar height as the frequency; 6.25 divides the width by the density; 84 multiplies by the upper bound 35 instead of the width 15.",
      difficulty: "core",
      guideRef: "histograms",
      hints: [
        "In a histogram, which part of the bar represents frequency — the height or the area?",
        "Frequency = frequency density × class width.",
        "The class width is 35 − 20.",
      ],
      strategy: "Use the inverse",
    },
  ],

  // =========================================================================
  // Practice papers
  // =========================================================================
  papers: [
    {
      id: "statistics-p1",
      title: "Practice Paper 1",
      questions: [
        {
          kind: "short",
          id: "statistics-p1-q01",
          question:
            "Here are the numbers of durians sold at a stall on eight days:\n\n    23, 17, 31, 19, 28, 17, 25, 22\n\nWork out the range and the median. Give the range first, then the median.",
          answer: { type: "list", values: [14, 22.5], ordered: true, display: "range 14, median 22.5" },
          solution: [
            "Order the data: 17, 17, 19, 22, 23, 25, 28, 31.",
            "Range = 31 − 17 = 14.",
            "There are 8 values, so the median is halfway between the 4th and 5th: {{(22 + 23)/2}} = 22.5.",
          ],
          traps: [
            { spec: { type: "list", values: [14, 28], ordered: true }, feedback: "The range is right, but you took the middle of the *unordered* list. Order the data first: the median is between 22 and 23." },
          ],
          commonError: "Finding the median without ordering the data.",
          difficulty: "warmup",
          guideRef: "averages-raw-data",
          hints: ["Put the values in order first.", "With 8 values, the median is halfway between the 4th and 5th."],
          strategy: "Organise the data",
        },
        {
          kind: "short",
          id: "statistics-p1-q02",
          question:
            "The masses, in grams, of 15 apricots are:\n\n    42, 35, 51, 38, 47, 60, 33, 45, 39, 55, 41, 49, 36, 58, 44\n\nWork out the interquartile range of the masses. Give your answer in grams.",
          answer: { type: "number", value: 13, display: "13 g" },
          solution: [
            "Order: 33, 35, 36, 38, 39, 41, 42, 44, 45, 47, 49, 51, 55, 58, 60.",
            "n = 15. Q1 is the {{(15+1)/4}} = 4th value = 38 g.",
            "Q3 is the {{3(15+1)/4}} = 12th value = 51 g.",
            "IQR = 51 − 38 = 13 g.",
          ],
          traps: [
            { spec: { type: "number", value: 27 }, feedback: "27 is the range (60 − 33). The IQR is Q3 − Q1, the spread of the middle half." },
          ],
          commonError: "Giving the range instead of the interquartile range.",
          difficulty: "warmup",
          guideRef: "quartiles-iqr",
          hints: ["Order the masses first.", "For 15 values, Q1 is the 4th value and Q3 is the 12th value."],
          strategy: "Organise the data",
        },
        {
          kind: "short",
          id: "statistics-p1-q03",
          question:
            "The table shows the number of goals scored by a school football team in 20 matches.\n\n| Goals | Frequency |\n|---|---|\n| 0 | 4 |\n| 1 | 7 |\n| 2 | 6 |\n| 3 | 2 |\n| 4 | 1 |\n\nWork out the mean number of goals per match. Give your answer as a decimal.",
          answer: { type: "number", value: 1.45, allowFraction: false },
          solution: [
            "fx column: 0, 7, 12, 6, 4. Total goals = 29.",
            "Total matches = 20.",
            "Mean = 29 ÷ 20 = 1.45 goals per match.",
          ],
          traps: [
            { spec: { type: "number", value: 2 }, feedback: "2 is the mean of the goal values 0–4, ignoring the frequencies. Use Σfx ÷ Σf = 29 ÷ 20." },
            { spec: { type: "number", value: 5.8, tolerance: 0.001 }, feedback: "You divided 29 by the number of rows (5). Divide by the number of matches, 20." },
          ],
          commonError: "Dividing by the number of rows in the table.",
          difficulty: "warmup",
          guideRef: "frequency-tables",
          hints: ["Multiply each number of goals by its frequency.", "Mean = total goals ÷ total matches."],
          strategy: "Add a column",
        },
        {
          kind: "short",
          id: "statistics-p1-q04",
          question:
            "The heights of 40 sunflowers are recorded.\n\n| Height (h cm) | Frequency |\n|---|---|\n| 100 < h ≤ 120 | 3 |\n| 120 < h ≤ 140 | 9 |\n| 140 < h ≤ 160 | 15 |\n| 160 < h ≤ 180 | 10 |\n| 180 < h ≤ 200 | 3 |\n\nWork out the greatest possible range of the heights. Give your answer in cm.",
          answer: { type: "number", value: 100, display: "100 cm" },
          solution: [
            "The shortest sunflower could be just over 100 cm (lower bound of the first class).",
            "The tallest could be as much as 200 cm (upper bound of the last class).",
            "Greatest possible range ≈ 200 − 100 = 100 cm.",
          ],
          traps: [
            { spec: { type: "number", value: 12 }, feedback: "That is the range of the *frequencies* (15 − 3). The range is about the heights: largest possible minus smallest possible." },
            { spec: { type: "number", value: 80 }, feedback: "180 − 100 uses the lower bound of the last class. The tallest sunflower could be up to 200 cm." },
          ],
          commonError: "Finding the range of the frequency column.",
          difficulty: "warmup",
          guideRef: "frequency-tables",
          hints: ["What is the largest a height could be? The smallest?", "Use the top of the last class and the bottom of the first class."],
          strategy: "Consider extremes",
        },
        {
          kind: "short",
          id: "statistics-p1-q05",
          question:
            "The mean of the four numbers x, x + 3, 2x and 2x + 5 is 11. Work out the largest of the four numbers.",
          answer: { type: "number", value: 17 },
          solution: [
            "Total = 4 × 11 = 44.",
            "x + (x + 3) + 2x + (2x + 5) = 6x + 8, so 6x + 8 = 44.",
            "6x = 36, so x = 6.",
            "The numbers are 6, 9, 12, 17. The largest is 17.",
          ],
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "x = 6 is right — but the question asks for the largest number, 2x + 5." },
          ],
          commonError: "Stopping at x instead of answering the question.",
          difficulty: "core",
          guideRef: "averages-raw-data",
          hints: [
            "If the mean of four numbers is 11, what is their total?",
            "Add the four expressions and set the sum equal to 44.",
            "Once you know x, which expression is the largest?",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "short",
          id: "statistics-p1-q06",
          question:
            "A CCA group has 12 boys and 18 girls. The mean time the boys took to run 100 m was 15.5 seconds. The mean time for all 30 students was 16.1 seconds. Work out the mean time for the girls. Give your answer in seconds.",
          answer: { type: "number", value: 16.5, display: "16.5 s" },
          solution: [
            "Total for all 30: 30 × 16.1 = 483 s.",
            "Total for the boys: 12 × 15.5 = 186 s.",
            "Total for the girls: 483 − 186 = 297 s.",
            "Mean for the girls: 297 ÷ 18 = 16.5 s.",
          ],
          traps: [
            { spec: { type: "number", value: 16.7, tolerance: 0.001 }, feedback: "You treated the overall mean as the average of the two group means. The groups are different sizes — work with totals." },
          ],
          commonError: "Assuming the overall mean is halfway between the two group means.",
          difficulty: "core",
          guideRef: "averages-raw-data",
          hints: [
            "Turn each mean into a total.",
            "Girls' total = everyone's total − boys' total.",
            "Divide the girls' total by 18.",
          ],
          strategy: "Use totals, not means",
        },
        {
          kind: "short",
          id: "statistics-p1-q07",
          question:
            "The table shows the daily rainfall, r mm, in Singapore on 30 days during the monsoon.\n\n| Rainfall (r mm) | Frequency |\n|---|---|\n| 0 < r ≤ 5 | 8 |\n| 5 < r ≤ 10 | 11 |\n| 10 < r ≤ 20 | 7 |\n| 20 < r ≤ 40 | 4 |\n\nWork out an estimate for the mean daily rainfall. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 10.9, tolerance: 0.05, display: "10.9 mm" },
          solution: [
            "Midpoints: 2.5, 7.5, 15, 30 (the classes have different widths — take care).",
            "fx: 2.5 × 8 = 20, 7.5 × 11 = 82.5, 15 × 7 = 105, 30 × 4 = 120. Total = 327.5.",
            "Estimated mean = 327.5 ÷ 30 = 10.916… = 10.9 mm (3 s.f.).",
          ],
          traps: [
            { spec: { type: "number", value: 15 }, feedback: "You used the upper bounds (5, 10, 20, 40). Use the midpoints of the classes." },
            { spec: { type: "number", value: 81.9, tolerance: 0.05 }, feedback: "You divided by the number of classes (4). Divide by the number of days, 30." },
          ],
          commonError: "Using 15 as the midpoint of every class, or forgetting the classes have unequal widths.",
          difficulty: "core",
          guideRef: "frequency-tables",
          hints: [
            "Find the midpoint of each class — careful, they are not all the same width.",
            "The midpoints are 2.5, 7.5, 15 and 30. Multiply each by its frequency.",
            "Divide the total by 30.",
          ],
          strategy: "Use a representative value",
        },
        {
          kind: "written",
          id: "statistics-p1-q08",
          question:
            "Here is the rainfall table from the previous question again.\n\n| Rainfall (r mm) | Frequency |\n|---|---|\n| 0 < r ≤ 5 | 8 |\n| 5 < r ≤ 10 | 11 |\n| 10 < r ≤ 20 | 7 |\n| 20 < r ≤ 40 | 4 |\n\nPriya says, \"The median class is 10 < r ≤ 20, because 10 to 20 is in the middle of the rainfall scale from 0 to 40.\"\n\nIs Priya correct? Explain your answer.",
          marks: 2,
          modelAnswer:
            "No. There are 30 days, so the median is between the 15th and 16th values. The running totals are 8 (up to 5 mm) and 8 + 11 = 19 (up to 10 mm), so the 15th and 16th values are in 5 < r ≤ 10. The median class is 5 < r ≤ 10. Priya has looked at the middle of the *rainfall values*, not the middle of the *days*.",
          markScheme: [
            { point: "Locates the median position (15th/16th or 15.5th value) and uses cumulative totals 8, 19", keywords: ["15", "16", "15.5", "8", "19", "cumulative", "running total"] },
            { point: "Concludes Priya is wrong: the median class is 5 < r ≤ 10", keywords: ["no", "wrong", "not correct", "5 < r ≤ 10", "5 to 10", "5-10"] },
          ],
          commonError: "Choosing the class in the middle of the variable's scale, or the class with the largest frequency.",
          difficulty: "core",
          guideRef: "frequency-tables",
          hints: [
            "The median is the middle *day*, not the middle rainfall amount. Which position is that?",
            "Keep a running total of the frequencies.",
            "Which class does the running total pass 15 in?",
          ],
          strategy: "Keep a running total",
        },
        {
          kind: "short",
          id: "statistics-p1-q09",
          question:
            "The cumulative frequency graph shows the journey times, t minutes, of 120 parents driving to a school event.\n\nUse the graph to find an estimate for the interquartile range. Give your answer in minutes.",
          diagram: P1_CF,
          answer: { type: "number", value: 20, tolerance: 1, display: "20 minutes (accept 19–21)" },
          solution: [
            "Q1 is at {{1/4}} × 120 = 30. Reading across from 30 and down gives Q1 ≈ 20 minutes.",
            "Q3 is at {{3/4}} × 120 = 90. Reading across from 90 and down gives Q3 ≈ 40 minutes.",
            "IQR ≈ 40 − 20 = 20 minutes.",
          ],
          traps: [
            { spec: { type: "number", value: 60, tolerance: 0.5 }, feedback: "60 is the difference of the cumulative frequencies (90 − 30). Read those across to the graph and *down* to the time axis, then subtract the times." },
          ],
          commonError: "Subtracting the cumulative frequencies 90 − 30 instead of the times.",
          difficulty: "core",
          guideRef: "cumulative-frequency",
          hints: [
            "Which cumulative frequencies give the lower and upper quartiles for 120 people?",
            "Read across from 30 and from 90, then down to the time axis.",
            "IQR = Q3 − Q1 (both are times).",
          ],
          strategy: "Read a graph",
        },
        {
          kind: "short",
          id: "statistics-p1-q10",
          question:
            "Use the same cumulative frequency graph of the journey times of 120 parents.\n\nEstimate how many parents took **more than** 45 minutes.",
          diagram: P1_CF,
          answer: { type: "number", value: 18, tolerance: 2, display: "18 parents (accept 16–20)" },
          solution: [
            "Go up from 45 minutes to the graph and across: the cumulative frequency is about 102.",
            "So about 102 parents took 45 minutes or less.",
            "More than 45 minutes: 120 − 102 = 18 parents.",
          ],
          traps: [
            { spec: { type: "number", value: 102, tolerance: 1.5 }, feedback: "102 parents took 45 minutes *or less*. The question asks for *more than* 45 — subtract from 120." },
          ],
          commonError: "Giving the cumulative frequency read from the graph instead of subtracting from the total.",
          difficulty: "core",
          guideRef: "cumulative-frequency",
          hints: [
            "A cumulative frequency graph tells you how many are *at or below* a value.",
            "Read up from 45 minutes and across to the frequency axis.",
            "Subtract that number from the total, 120.",
          ],
          strategy: "Use the complement",
        },
        {
          kind: "short",
          id: "statistics-p1-q11",
          question:
            "The histogram shows the ages, a years, of the visitors to a science exhibition one morning.\n\nWork out how many visitors were **older than 15**.",
          diagram: P1_HIST,
          answer: { type: "number", value: 50 },
          solution: [
            "Frequency = frequency density × class width.",
            "15 < a ≤ 20: 4 × 5 = 20.",
            "20 < a ≤ 30: 1.8 × 10 = 18.",
            "30 < a ≤ 50: 0.6 × 20 = 12.",
            "Total older than 15: 20 + 18 + 12 = 50.",
          ],
          traps: [
            { spec: { type: "number", value: 6.4, tolerance: 0.001 }, feedback: "You added the bar heights. Heights are frequency *densities* — multiply each by its class width to get a frequency." },
          ],
          commonError: "Reading the bar heights as frequencies.",
          difficulty: "core",
          guideRef: "histograms",
          hints: [
            "Which bars represent visitors older than 15?",
            "In a histogram, frequency = frequency density × class width.",
            "Work out the area of the last three bars and add them.",
          ],
          strategy: "Area = frequency",
        },
        {
          kind: "short",
          id: "statistics-p1-q12",
          question:
            "Use the same histogram of the ages of visitors to the exhibition.\n\nEstimate how many visitors were aged between 12 and 25 years.",
          diagram: P1_HIST,
          answer: { type: "number", value: 38 },
          solution: [
            "Split the range 12 to 25 across the bars and assume values are spread evenly within each class.",
            "12 to 15: part of the 10–15 bar, width 3, density 3 → 3 × 3 = 9.",
            "15 to 20: the whole bar → 5 × 4 = 20.",
            "20 to 25: half of the 20–30 bar, width 5, density 1.8 → 5 × 1.8 = 9.",
            "Estimate = 9 + 20 + 9 = 38 visitors.",
          ],
          solutions: [
            {
              label: "Fractions of whole classes",
              steps: [
                "10 < a ≤ 15 contains 15 visitors; 12 to 15 is {{3/5}} of the class → {{3/5}} × 15 = 9.",
                "15 < a ≤ 20 contains 20 visitors.",
                "20 < a ≤ 30 contains 18 visitors; 20 to 25 is {{1/2}} of the class → 9.",
                "Total 9 + 20 + 9 = 38.",
              ],
            },
          ],
          traps: [
            { spec: { type: "number", value: 53 }, feedback: "You included the whole of the 10–15 and 20–30 classes. Only part of each lies between 12 and 25 — use just that part of the bar's area." },
          ],
          commonError: "Counting whole classes when only part of the class is inside the interval.",
          difficulty: "challenge",
          guideRef: "histograms",
          hints: [
            "Which bars does the interval from 12 to 25 cover — completely or partly?",
            "For a partial bar, use only the width inside the interval: area = density × that width.",
            "From the 10–15 bar you need width 3; from the 20–30 bar you need width 5.",
          ],
          strategy: "Split into parts",
        },
        {
          kind: "written",
          id: "statistics-p1-q13",
          question:
            "Aisha timed how long customers waited for their food at two hawker stalls.\n\n| | Median | Interquartile range |\n|---|---|---|\n| Stall A | 8 minutes | 6 minutes |\n| Stall B | 11 minutes | 3 minutes |\n\nCompare the waiting times at the two stalls.",
          marks: 2,
          modelAnswer:
            "On average, customers waited less time at Stall A, because its median (8 minutes) is lower than Stall B's (11 minutes). The waiting times at Stall B were more consistent, because its interquartile range (3 minutes) is smaller than Stall A's (6 minutes).",
          markScheme: [
            { point: "Compares averages in context: Stall A's waiting times are shorter on average (median 8 < 11)", keywords: ["median", "average", "shorter", "less", "lower", "8", "11"] },
            { point: "Compares spread in context: Stall B's waiting times are more consistent / less spread out (IQR 3 < 6)", keywords: ["iqr", "interquartile", "consistent", "spread", "varied", "3", "6"] },
          ],
          commonError: "Just quoting the numbers without saying what they mean for the waiting times, or saying the bigger IQR is 'better'.",
          difficulty: "core",
          guideRef: "quartiles-iqr",
          hints: [
            "Make one comparison about the average and one about the spread.",
            "Each comparison should mention both stalls and say what it means for the customers.",
          ],
          strategy: "Average + spread, in context",
        },
        {
          kind: "short",
          id: "statistics-p1-q14",
          question:
            "Five positive whole numbers have a mean of 6, a median of 7 and a unique mode of 8. Work out the greatest possible range of the five numbers.",
          answer: { type: "number", value: 7 },
          solution: [
            "Write the numbers in order: a ≤ b ≤ 7 ≤ d ≤ e (the median is the 3rd, so it is 7).",
            "The mode 8 is bigger than the median, so the 8s must be d and e: d = e = 8.",
            "Total = 5 × 6 = 30, so a + b = 30 − 7 − 8 − 8 = 7.",
            "a and b must be different (otherwise they would tie with 8 as a mode), and e = 8 is fixed.",
            "To make the range 8 − a as large as possible, make a as small as possible: a = 1, b = 6.",
            "Numbers 1, 6, 7, 8, 8: range = 8 − 1 = 7.",
          ],
          traps: [
            { spec: { type: "number", value: 6 }, feedback: "Check whether a can be smaller. With a = 1, b = 6 all the conditions still hold." },
          ],
          commonError: "Forgetting that a and b cannot be equal, or not fixing the largest number at 8.",
          difficulty: "challenge",
          guideRef: "averages-raw-data",
          hints: [
            "Write the five numbers in order as a, b, c, d, e. What is c?",
            "The mode is 8, so 8 appears at least twice. Where can the 8s go if the median is 7?",
            "Now a + b is fixed. The range is e − a: what is e, and how small can a be?",
          ],
          strategy: "Consider extremes",
        },
        {
          kind: "written",
          id: "statistics-p1-q15",
          question:
            "A histogram has no scale on the frequency density axis.\n\nThe bar for the class 10 < x ≤ 15 is 3 cm wide and 4.5 cm tall. It represents 27 people.\n\nThe bar for the class 15 < x ≤ 25 is 2 cm tall.\n\nShow that the bar for 15 < x ≤ 25 represents 24 people.",
          marks: 3,
          modelAnswer:
            "The first bar has area 3 × 4.5 = 13.5 cm², which represents 27 people, so 1 cm² represents 27 ÷ 13.5 = 2 people. The class 10 < x ≤ 15 has width 5 and is drawn 3 cm wide, so the class 15 < x ≤ 25 (width 10) is drawn 6 cm wide. Its area is 6 × 2 = 12 cm², which represents 12 × 2 = 24 people.",
          markScheme: [
            { point: "Finds the scale: 13.5 cm² represents 27 people, so 1 cm² = 2 people (or 1 cm of height = FD 1.2)", keywords: ["13.5", "2 people", "27", "1.2", "5.4"] },
            { point: "Width of the second bar is 6 cm (twice the class width)", keywords: ["6 cm", "6", "twice", "double", "width 10"] },
            { point: "Area 12 cm² × 2 = 24 people (or FD 2.4 × 10 = 24)", keywords: ["12", "24", "2.4"] },
          ],
          solutions: [
            {
              label: "Via frequency density",
              steps: [
                "Frequency density of 10 < x ≤ 15 is 27 ÷ 5 = 5.4, drawn 4.5 cm tall.",
                "So 1 cm of height = 5.4 ÷ 4.5 = 1.2 units of frequency density.",
                "The 2 cm bar has frequency density 2 × 1.2 = 2.4.",
                "Frequency = 2.4 × 10 = 24.",
              ],
            },
          ],
          commonError: "Assuming the 2 cm bar is also 3 cm wide, giving 12 people.",
          difficulty: "challenge",
          guideRef: "histograms",
          hints: [
            "In a histogram, area is proportional to frequency. How many people does 1 cm² stand for?",
            "The second class is twice as wide as the first. How wide is its bar on the page?",
            "Area of the second bar = 6 cm × 2 cm. Convert to people.",
          ],
          strategy: "Find the scale factor",
        },
      ],
    },
    {
      id: "statistics-p2",
      title: "Practice Paper 2",
      questions: [
        {
          kind: "short",
          id: "statistics-p2-q01",
          question: "Here are the masses, in kg, of six bags of rice:\n\n    3.4, 2.9, 4.1, 3.8, 2.6, 3.3\n\nWork out the median mass. Give your answer in kg.",
          answer: { type: "number", value: 3.35, display: "3.35 kg" },
          solution: [
            "Order: 2.6, 2.9, 3.3, 3.4, 3.8, 4.1.",
            "Six values: the median is halfway between the 3rd and 4th: {{(3.3 + 3.4)/2}} = 3.35 kg.",
          ],
          traps: [
            { spec: { type: "number", value: 4.95, tolerance: 0.001 }, feedback: "You took the middle of the unordered list (4.1 and 3.8). Order the masses first." },
          ],
          commonError: "Not ordering the data before finding the middle.",
          difficulty: "warmup",
          guideRef: "averages-raw-data",
          hints: ["Order the masses.", "With an even number of values, take the mean of the middle two."],
          strategy: "Organise the data",
        },
        {
          kind: "short",
          id: "statistics-p2-q02",
          question:
            "Here are the ages of 11 members of a chess club:\n\n    14, 22, 9, 17, 30, 12, 25, 19, 11, 27, 16\n\nFind the lower quartile and the upper quartile. Give the lower quartile first.",
          answer: { type: "list", values: [12, 25], ordered: true, display: "Q1 = 12, Q3 = 25" },
          solution: [
            "Order: 9, 11, 12, 14, 16, 17, 19, 22, 25, 27, 30.",
            "n = 11. Q1 is the {{(11+1)/4}} = 3rd value = 12.",
            "Q3 is the {{3(11+1)/4}} = 9th value = 25.",
          ],
          traps: [
            { spec: { type: "list", values: [9, 30], ordered: true }, feedback: "Those are the smallest and largest values. The quartiles are a quarter and three-quarters of the way through the ordered data." },
          ],
          commonError: "Using n/4 = 2.75 and rounding to the wrong position.",
          difficulty: "warmup",
          guideRef: "quartiles-iqr",
          hints: ["Order the ages first.", "For 11 values, Q1 is the 3rd value and Q3 is the 9th value."],
          strategy: "Organise the data",
        },
        {
          kind: "short",
          id: "statistics-p2-q03",
          question:
            "The table shows the shoe sizes of 25 students.\n\n| Shoe size | Frequency |\n|---|---|\n| 3 | 2 |\n| 4 | 5 |\n| 5 | 8 |\n| 6 | 6 |\n| 7 | 3 |\n| 8 | 1 |\n\nFind the median shoe size.",
          answer: { type: "number", value: 5 },
          solution: [
            "25 students, so the median is the {{(25 + 1)/2}} = 13th value.",
            "Running totals: 2, 7, 15, … — the 13th value is in the size 5 row.",
            "Median = size 5.",
          ],
          traps: [
            { spec: { type: "number", value: 5.5 }, feedback: "5.5 is the middle of the list of sizes 3 to 8, ignoring how many students wear each size. Find the 13th student using running totals." },
            { spec: { type: "number", value: 4 }, feedback: "Check your running total: sizes 3 and 4 only cover 2 + 5 = 7 students. The 13th student comes after that — 7 + 8 = 15 takes you into size 5." },
          ],
          commonError: "Finding the middle of the shoe-size column rather than the middle student.",
          difficulty: "warmup",
          guideRef: "frequency-tables",
          hints: ["Which position is the median for 25 students?", "Keep a running total down the frequency column until you pass 13."],
          strategy: "Keep a running total",
        },
        {
          kind: "short",
          id: "statistics-p2-q04",
          question:
            "The table shows the time, t minutes, that 40 students spent on homework one evening.\n\n| Time (t minutes) | Frequency |\n|---|---|\n| 0 < t ≤ 10 | 5 |\n| 10 < t ≤ 20 | 12 |\n| 20 < t ≤ 30 | 17 |\n| 30 < t ≤ 40 | 6 |\n\nJun is drawing a cumulative frequency graph. Write down the coordinates of the point he should plot for the class 20 < t ≤ 30.",
          answer: { type: "list", values: [30, 34], ordered: true, display: "(30, 34)" },
          solution: [
            "Cumulative frequency up to t = 30: 5 + 12 + 17 = 34.",
            "Plot at the **upper bound** of the class, because by t = 30 all 34 students have finished.",
            "Point: (30, 34).",
          ],
          traps: [
            { spec: { type: "list", values: [25, 34], ordered: true }, feedback: "Cumulative frequency is plotted at the **upper** class boundary (30), not the midpoint — 34 students have finished by 30 minutes." },
            { spec: { type: "list", values: [30, 17], ordered: true }, feedback: "17 is the frequency of this class alone. Cumulative frequency is the running total: 5 + 12 + 17." },
          ],
          commonError: "Plotting at the midpoint instead of the upper bound.",
          difficulty: "warmup",
          guideRef: "cumulative-frequency",
          hints: ["Cumulative frequency is a running total.", "Plot at the upper end of the class: t = 30."],
          strategy: "Keep a running total",
        },
        {
          kind: "short",
          id: "statistics-p2-q05",
          question:
            "The mean of four numbers is 12. A fifth number is added and the mean increases by 1.6. Work out the fifth number.",
          answer: { type: "number", value: 20 },
          solution: [
            "Total of the four numbers: 4 × 12 = 48.",
            "New mean = 12 + 1.6 = 13.6, so the new total is 5 × 13.6 = 68.",
            "Fifth number = 68 − 48 = 20.",
          ],
          solutions: [
            {
              label: "Share out the excess",
              steps: [
                "The new number lifts the mean of all 5 numbers by 1.6, so it must contribute 5 × 1.6 = 8 above the old mean.",
                "Fifth number = 12 + 8 = 20.",
              ],
            },
          ],
          traps: [
            { spec: { type: "number", value: 13.6, tolerance: 0.001 }, feedback: "13.6 is the new mean, not the new number. Work out the new total: 5 × 13.6." },
            { spec: { type: "number", value: 18.4, tolerance: 0.001 }, feedback: "You only lifted the four old numbers by 1.6 each (12 + 4 × 1.6). The new number must also sit at the new mean: 13.6 + 4 × 1.6 = 20, or 5 × 13.6 − 48." },
          ],
          commonError: "Using 4 instead of 5 when finding the new total.",
          difficulty: "core",
          guideRef: "averages-raw-data",
          hints: [
            "What is the total of the first four numbers?",
            "What is the new mean, and how many numbers are there now?",
            "Fifth number = new total − old total.",
          ],
          strategy: "Work backwards",
        },
        {
          kind: "short",
          id: "statistics-p2-q06",
          question:
            "The mean of 10 values is 23. Mei then notices that one value was recorded as 41 when it should have been 14. Work out the correct mean.",
          answer: { type: "number", value: 20.3 },
          solution: [
            "Recorded total: 10 × 23 = 230.",
            "Correct total: 230 − 41 + 14 = 203.",
            "Correct mean: 203 ÷ 10 = 20.3.",
          ],
          solutions: [
            {
              label: "Adjust the mean directly",
              steps: [
                "The total drops by 41 − 14 = 27.",
                "Shared over 10 values, the mean drops by 2.7.",
                "23 − 2.7 = 20.3.",
              ],
            },
          ],
          traps: [
            { spec: { type: "number", value: 25.7, tolerance: 0.001 }, feedback: "The value went *down* from 41 to 14, so the mean must decrease, not increase." },
            { spec: { type: "number", value: -4 }, feedback: "You subtracted the full 27 from the mean. The drop of 27 in the total is shared over 10 values." },
          ],
          commonError: "Changing the mean by the full error of 27 instead of 27 ÷ 10.",
          difficulty: "core",
          guideRef: "averages-raw-data",
          hints: [
            "What was the total of the 10 values as recorded?",
            "Take out the wrong value and put in the right one.",
            "Divide the corrected total by 10.",
          ],
          strategy: "Use totals, not means",
        },
        {
          kind: "short",
          id: "statistics-p2-q07",
          question:
            "The table shows the distances, d km, that 50 students travel to school.\n\n| Distance (d km) | Frequency |\n|---|---|\n| 0 < d ≤ 2 | 12 |\n| 2 < d ≤ 5 | 18 |\n| 5 < d ≤ 10 | 15 |\n| 10 < d ≤ 20 | 5 |\n\nWork out an estimate for the mean distance. Give your answer correct to 3 significant figures.",
          answer: { type: "number", value: 5.25, tolerance: 0.005, display: "5.25 km" },
          solution: [
            "Midpoints: 1, 3.5, 7.5, 15.",
            "fx: 1 × 12 = 12, 3.5 × 18 = 63, 7.5 × 15 = 112.5, 15 × 5 = 75. Total = 262.5.",
            "Estimated mean = 262.5 ÷ 50 = 5.25 km.",
          ],
          traps: [
            { spec: { type: "number", value: 7.28, tolerance: 0.005 }, feedback: "You used the upper bounds of the classes. Use the midpoints: 1, 3.5, 7.5 and 15." },
            { spec: { type: "number", value: 65.6, tolerance: 0.05 }, feedback: "You divided by the number of classes. Divide by the number of students, 50." },
          ],
          commonError: "Using the upper bounds, or dividing by the number of classes.",
          difficulty: "core",
          guideRef: "frequency-tables",
          hints: [
            "The classes have different widths. Find the midpoint of each carefully.",
            "Multiply each midpoint by its frequency and add.",
            "Divide by the total frequency, 50.",
          ],
          strategy: "Use a representative value",
        },
        {
          kind: "written",
          id: "statistics-p2-q08",
          question:
            "For the distances table in the previous question, Zara worked out the estimated mean like this:\n\n    Σfx = 262.5\n    Mean = 262.5 ÷ 4 = 65.6 km\n\nExplain why Zara's answer must be wrong, and describe the mistake she made.",
          marks: 2,
          modelAnswer:
            "Every distance is at most 20 km, so the mean cannot be 65.6 km — a mean must lie between the smallest and largest possible values. Zara divided by the number of classes (4) instead of the total frequency (50). The estimate should be 262.5 ÷ 50 = 5.25 km.",
          markScheme: [
            { point: "Sense check: 65.6 km is greater than the largest possible distance (20 km), so it cannot be the mean", keywords: ["20", "bigger than", "greater than", "larger than", "impossible", "cannot", "too big", "range"] },
            { point: "Identifies the error: divided by 4 (number of classes) instead of 50 (total frequency)", keywords: ["4", "50", "number of classes", "total frequency", "students", "5.25"] },
          ],
          commonError: "Only saying 'she divided wrongly' without saying what she should have divided by.",
          difficulty: "core",
          guideRef: "frequency-tables",
          hints: [
            "What is the largest distance any student could travel?",
            "Can an average be bigger than every value it is the average of?",
            "What should Σfx be divided by?",
          ],
          strategy: "Estimate first",
        },
        {
          kind: "short",
          id: "statistics-p2-q09",
          question:
            "The cumulative frequency graph shows the lengths, l mm, of 160 leaves collected in the Botanic Gardens.\n\nUse the graph to find an estimate for the median length. Give your answer in mm.",
          diagram: P2_CF,
          answer: { type: "number", value: 50, tolerance: 1, display: "50 mm (accept 49–51)" },
          solution: [
            "Median at {{1/2}} × 160 = 80 on the cumulative frequency axis.",
            "Read across from 80 to the graph, then down to the length axis.",
            "Median ≈ 50 mm.",
          ],
          traps: [
            { spec: { type: "number", value: 80, tolerance: 0.5 }, feedback: "80 is the cumulative frequency of the median. Read across to the graph and down to find the *length*." },
          ],
          commonError: "Giving the cumulative frequency rather than the length.",
          difficulty: "core",
          guideRef: "cumulative-frequency",
          hints: ["Half of 160 is…?", "Read across from 80, then down to the l-axis."],
          strategy: "Read a graph",
        },
        {
          kind: "short",
          id: "statistics-p2-q10",
          question:
            "Use the same cumulative frequency graph of the lengths of 160 leaves.\n\nLeaves longer than 70 mm are classed as \"large\". Estimate the percentage of the leaves that are large. Give your answer correct to 3 significant figures.",
          diagram: P2_CF,
          answer: { type: "number", value: 15.6, tolerance: 1.3, display: "15.6% (accept 14.4–16.9)" },
          solution: [
            "Read up from 70 mm: cumulative frequency ≈ 135.",
            "So about 160 − 135 = 25 leaves are longer than 70 mm.",
            "Percentage = {{25/160}} × 100 = 15.625… ≈ 15.6%.",
          ],
          traps: [
            { spec: { type: "number", value: 84.4, tolerance: 1.3 }, feedback: "That is the percentage of leaves 70 mm or shorter. \"Large\" means *longer than* 70 mm — use 160 − 135." },
            { spec: { type: "number", value: 25, tolerance: 2 }, feedback: "About 25 leaves are large — now write that as a percentage of 160." },
          ],
          commonError: "Giving the number of leaves, or the percentage at or below 70 mm.",
          difficulty: "core",
          guideRef: "cumulative-frequency",
          hints: [
            "How many leaves are 70 mm or shorter? Read it from the graph.",
            "How many are longer than 70 mm?",
            "Write that number as a percentage of 160.",
          ],
          strategy: "Use the complement",
        },
        {
          kind: "written",
          id: "statistics-p2-q11",
          question:
            "Here are the times, in minutes, that 11 people took to complete a fun run:\n\n    12, 14, 15, 15, 16, 18, 19, 21, 22, 23, 95\n\nArjun says the range is the best measure of how spread out the times are.\n\nWork out the range and the interquartile range, and explain why the interquartile range is a better measure of spread for these data.",
          marks: 3,
          modelAnswer:
            "Range = 95 − 12 = 83 minutes. With 11 values, Q1 is the 3rd value, 15, and Q3 is the 9th value, 22, so IQR = 22 − 15 = 7 minutes. The time of 95 minutes is an outlier (perhaps someone walked or stopped). The range uses it and so suggests the times are very spread out, but the IQR uses only the middle half of the data, so it is not affected by the outlier and better shows that most times are close together.",
          markScheme: [
            { point: "Range = 83", keywords: ["83"] },
            { point: "IQR = 22 − 15 = 7", keywords: ["7", "15", "22"] },
            { point: "Explains that 95 is an outlier which distorts the range, while the IQR uses the middle 50% and is not affected", keywords: ["outlier", "95", "extreme", "middle", "50%", "half", "not affected"] },
          ],
          commonError: "Saying the IQR is better 'because it is smaller' without mentioning the outlier.",
          difficulty: "core",
          guideRef: "quartiles-iqr",
          hints: [
            "Which value looks very different from the others?",
            "Q1 and Q3 for 11 values are the 3rd and 9th values.",
            "Which measure uses that extreme value, and which ignores it?",
          ],
          strategy: "Look for outliers",
        },
        {
          kind: "short",
          id: "statistics-p2-q12",
          question:
            "The incomplete histogram shows the masses, m kg, of parcels at a delivery depot. The bar for 10 < m ≤ 20 has not been drawn yet.\n\nWork out the number of parcels with a mass greater than 2 kg but at most 10 kg.",
          diagram: P2_HIST,
          answer: { type: "number", value: 70 },
          solution: [
            "2 < m ≤ 5: frequency density 10, width 3 → 10 × 3 = 30.",
            "5 < m ≤ 10: frequency density 8, width 5 → 8 × 5 = 40.",
            "Total = 30 + 40 = 70 parcels.",
          ],
          traps: [
            { spec: { type: "number", value: 18 }, feedback: "You added the bar heights (10 + 8). Heights are frequency densities — multiply each by its class width." },
          ],
          commonError: "Reading bar heights as frequencies.",
          difficulty: "core",
          guideRef: "histograms",
          hints: [
            "Which two bars cover masses from 2 kg to 10 kg?",
            "Frequency = frequency density × class width.",
            "The widths are 3 and 5.",
          ],
          strategy: "Area = frequency",
        },
        {
          kind: "short",
          id: "statistics-p2-q13",
          question:
            "Use the same incomplete histogram of the masses of parcels. There were 146 parcels altogether.\n\nWork out the frequency density that the missing bar for 10 < m ≤ 20 should have.",
          diagram: P2_HIST,
          answer: { type: "number", value: 5 },
          solution: [
            "Frequencies of the drawn bars: 0–2: 8 × 2 = 16; 2–5: 10 × 3 = 30; 5–10: 8 × 5 = 40; 20–30: 1 × 10 = 10.",
            "Total so far: 16 + 30 + 40 + 10 = 96.",
            "Missing class frequency: 146 − 96 = 50.",
            "Frequency density = 50 ÷ 10 = 5.",
          ],
          traps: [
            { spec: { type: "number", value: 50 }, feedback: "50 is the frequency of the missing class. The bar's height is the frequency *density*: 50 ÷ class width 10." },
          ],
          commonError: "Giving the frequency instead of the frequency density.",
          difficulty: "challenge",
          guideRef: "histograms",
          hints: [
            "How many parcels are shown by the bars that *are* drawn?",
            "Use area = frequency density × width for each bar.",
            "The rest of the 146 parcels belong in the missing bar. How tall must a bar 10 wide be to have that area?",
          ],
          strategy: "Work backwards",
        },
        {
          kind: "short",
          id: "statistics-p2-q14",
          question:
            "Eleven numbers are written in order of size:\n\n    4, 5, a, 8, 9, 11, 13, 14, b, 20, 25\n\nThe mean of the numbers is 12 and the interquartile range is 13. Find the values of a and b. Give a first, then b.",
          answer: { type: "list", values: [5, 18], ordered: true, display: "a = 5, b = 18" },
          solution: [
            "n = 11, so Q1 is the 3rd value, a, and Q3 is the 9th value, b. So b − a = 13.",
            "Total = 11 × 12 = 132. The known numbers add to 109, so a + b = 23.",
            "Add the equations: 2b = 36, so b = 18. Then a = 5.",
            "Check the order: 4, 5, 5, 8, … , 14, 18, 20, 25 ✓.",
          ],
          traps: [
            { spec: { type: "list", values: [18, 5], ordered: true }, feedback: "Right values, wrong order — the question asks for a first." },
          ],
          commonError: "Not realising that a and b are exactly the quartiles.",
          difficulty: "challenge",
          guideRef: "quartiles-iqr",
          hints: [
            "For 11 values, which positions are Q1 and Q3? What is in those positions?",
            "The IQR gives one equation in a and b. The mean gives another.",
            "Solve b − a = 13 and a + b = 23 simultaneously.",
          ],
          strategy: "Introduce a variable",
        },
        {
          kind: "written",
          id: "statistics-p2-q15",
          question:
            "Group P has m people with mean age a years. Group Q has n people with mean age b years, where a < b.\n\nShow that the mean age of the two groups combined lies between a and b.",
          marks: 3,
          modelAnswer:
            "The combined mean is {{(ma + nb)/(m + n)}}. Since b > a, nb > na, so ma + nb > ma + na = (m + n)a, and dividing by m + n > 0 gives combined mean > a. Similarly, since a < b, ma < mb, so ma + nb < mb + nb = (m + n)b, giving combined mean < b. Hence a < combined mean < b.",
          markScheme: [
            { point: "Combined mean = (ma + nb) ÷ (m + n)", keywords: ["ma + nb", "ma+nb", "m + n", "m+n", "total"] },
            { point: "Shows ma + nb > (m + n)a using b > a, so the mean is greater than a", keywords: ["nb > na", "greater than a", "> a", "(m + n)a", "(m+n)a"] },
            { point: "Shows ma + nb < (m + n)b using a < b, so the mean is less than b", keywords: ["ma < mb", "less than b", "< b", "(m + n)b", "(m+n)b"] },
          ],
          solutions: [
            {
              label: "Weighted average",
              steps: [
                "Write the combined mean as {{m/(m+n)}} a + {{n/(m+n)}} b.",
                "The two weights are positive and add to 1, so this is a weighted average of a and b.",
                "A weighted average with positive weights always lies strictly between the two values.",
              ],
            },
          ],
          commonError: "Testing one numerical example instead of proving it in general.",
          difficulty: "challenge",
          guideRef: "averages-raw-data",
          hints: [
            "Write the combined mean using totals: what is the total age of each group?",
            "To show the mean is bigger than a, compare ma + nb with ma + na.",
            "Do the same with b for the upper bound.",
          ],
          strategy: "Prove it in general",
        },
      ],
    },
  ],

  // =========================================================================
  // Challenge problems
  // =========================================================================
  challenge: [
    {
      kind: "short",
      id: "statistics-ch-q01",
      question:
        "The mean of a list of n numbers is 20. When the number 50 is added to the list, the mean becomes 22. Find n.",
      answer: { type: "number", value: 14 },
      solution: [
        "Old total = 20n. New total = 20n + 50, with n + 1 numbers.",
        "20n + 50 = 22(n + 1) = 22n + 22.",
        "28 = 2n, so n = 14.",
      ],
      solutions: [
        {
          label: "Balance the deviations",
          steps: [
            "The new number 50 is 30 above the old mean of 20.",
            "That excess of 30 is shared among all n + 1 numbers, lifting each by 2.",
            "So n + 1 = 30 ÷ 2 = 15, giving n = 14. Quicker — no algebra needed.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 15 }, feedback: "15 is the number of values *after* 50 is added. The question asks for n, the original count." },
      ],
      commonError: "Writing 22n instead of 22(n + 1) for the new total.",
      difficulty: "challenge",
      guideRef: "averages-raw-data",
      hints: [
        "Write the old total and the new total in terms of n.",
        "How many numbers are there after 50 is added?",
        "Form an equation: 20n + 50 = 22(n + 1).",
        "Alternatively: by how much is 50 above the old mean, and how is that excess shared?",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "statistics-ch-q02",
      question:
        "In a badminton club, the mean age of the men is 52 and the mean age of the women is 44. The mean age of the whole club is 47. Find the ratio of men to women. Give your answer in its simplest form.",
      answer: { type: "ratio", parts: [3, 5], simplest: true, display: "3 : 5" },
      solution: [
        "Let there be m men and w women. Total age: 52m + 44w = 47(m + w).",
        "52m − 47m = 47w − 44w, so 5m = 3w.",
        "m : w = 3 : 5.",
      ],
      solutions: [
        {
          label: "See-saw (balance) method",
          steps: [
            "The overall mean 47 is 5 below the men's mean and 3 above the women's mean.",
            "The deviations must balance: 5 × (men) = 3 × (women).",
            "So men : women = 3 : 5 — the overall mean sits nearer the bigger group.",
          ],
        },
      ],
      traps: [
        { spec: { type: "ratio", parts: [5, 3] }, feedback: "Upside down. The mean 47 is closer to the women's mean 44, so there must be **more** women." },
      ],
      commonError: "Getting the ratio the wrong way round.",
      difficulty: "challenge",
      guideRef: "averages-raw-data",
      hints: [
        "Call the numbers of men and women m and w. Write the total age two ways.",
        "52m + 44w = 47(m + w). Collect the m terms and the w terms.",
        "Which group's mean is 47 closer to? That group must be bigger.",
      ],
      strategy: "Use symmetry (balance)",
    },
    {
      kind: "short",
      id: "statistics-ch-q03",
      question:
        "Seven different positive whole numbers have a lower quartile of 8, a median of 12, an upper quartile of 20 and a mean of 13. What is the greatest possible value of the largest number?",
      answer: { type: "number", value: 28 },
      solution: [
        "In order: x₁ < x₂ < … < x₇. With 7 values, Q1 = x₂ = 8, median = x₄ = 12, Q3 = x₆ = 20.",
        "Total = 7 × 13 = 91.",
        "To make x₇ as big as possible, make the others as small as possible: x₁ = 1, x₃ = 9, x₅ = 13.",
        "x₇ = 91 − (1 + 8 + 9 + 12 + 13 + 20) = 91 − 63 = 28.",
        "Check: 1, 8, 9, 12, 13, 20, 28 are different and in order ✓.",
      ],
      traps: [
        { spec: { type: "number", value: 31 }, feedback: "The numbers must all be **different**, so x₃ must be at least 9 and x₅ at least 13." },
      ],
      commonError: "Forgetting the numbers must be different, or using the wrong quartile positions.",
      difficulty: "challenge",
      guideRef: "quartiles-iqr",
      hints: [
        "With seven values, which positions are Q1, the median and Q3?",
        "Three of the seven numbers are now known. What is the total of all seven?",
        "To make the largest one big, make the other unknowns as small as the rules allow.",
        "x₁ ≥ 1, x₃ ≥ 9 and x₅ ≥ 13 because the numbers are different and in order.",
      ],
      strategy: "Consider extremes",
    },
    {
      kind: "short",
      id: "statistics-ch-q04",
      question:
        "The table shows information about the times, t seconds, of some swimmers.\n\n| Time (t seconds) | Frequency |\n|---|---|\n| 0 < t ≤ 10 | 5 |\n| 10 < t ≤ 20 | x |\n| 20 < t ≤ 30 | 12 |\n| 30 < t ≤ 40 | 3 |\n\nAn estimate for the mean time is exactly 20 seconds. Find the value of x.",
      answer: { type: "number", value: 6 },
      solution: [
        "Midpoints: 5, 15, 25, 35.",
        "Σfx = 25 + 15x + 300 + 105 = 430 + 15x. Σf = 20 + x.",
        "{{(430 + 15x)/(20 + x) = 20}}, so 430 + 15x = 400 + 20x.",
        "30 = 5x, so x = 6.",
      ],
      solutions: [
        {
          label: "Balance about the mean",
          steps: [
            "Deviations of the midpoints from 20: −15, −5, +5, +15.",
            "These must sum to zero: 5(−15) + x(−5) + 12(5) + 3(15) = 0.",
            "−75 − 5x + 60 + 45 = 0, so 30 = 5x and x = 6.",
          ],
        },
      ],
      commonError: "Forgetting that the total frequency also depends on x.",
      difficulty: "challenge",
      guideRef: "frequency-tables",
      hints: [
        "Write Σfx and Σf in terms of x.",
        "The total frequency is 20 + x, not 20.",
        "Set {{(430 + 15x)/(20 + x)}} equal to 20 and solve.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "statistics-ch-q05",
      question:
        "Some people were asked how many pets they own.\n\n| Number of pets | Frequency |\n|---|---|\n| 0 | 3x |\n| 1 | 10 |\n| 2 | x + 4 |\n| 3 | 2 |\n\nThe mean number of pets is exactly 1. How many people own no pets?",
      answer: { type: "number", value: 12 },
      solution: [
        "Σf = 3x + 10 + x + 4 + 2 = 4x + 16.",
        "Σfx = 0 + 10 + 2(x + 4) + 6 = 2x + 24.",
        "Mean = 1 means Σfx = Σf: 2x + 24 = 4x + 16, so x = 4.",
        "People with no pets: 3x = 12.",
      ],
      traps: [
        { spec: { type: "number", value: 4 }, feedback: "x = 4 is right — but the frequency for 0 pets is 3x." },
      ],
      commonError: "Stopping at x, or forgetting that 0 × 3x = 0 still counts 3x people in the total.",
      difficulty: "challenge",
      guideRef: "frequency-tables",
      hints: [
        "Write the total number of people in terms of x.",
        "Write the total number of pets in terms of x (remember the 0-pet people contribute 0).",
        "A mean of 1 means total pets = total people.",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "statistics-ch-q06",
      question:
        "The cumulative frequency table shows the marks of 200 students in an IGCSE mock.\n\n| Mark (m) | Cumulative frequency |\n|---|---|\n| m ≤ 20 | 16 |\n| m ≤ 40 | 54 |\n| m ≤ 60 | 120 |\n| m ≤ 80 | 176 |\n| m ≤ 100 | 200 |\n\nThe top 10% of students receive a distinction. Assuming the cumulative frequency graph is a straight line between the plotted points, estimate the lowest mark needed for a distinction. Give your answer correct to 3 significant figures.",
      answer: { type: "number", value: 83.3, tolerance: 0.05 },
      solution: [
        "Top 10% of 200 is 20 students, so the cut-off is at a cumulative frequency of 200 − 20 = 180.",
        "180 lies between (80, 176) and (100, 200).",
        "From 176 to 180 is 4 of the 24 students in that class: {{4/24}} of the way along a class of width 20.",
        "Cut-off ≈ 80 + {{4/24}} × 20 = 80 + 3.33… = 83.3.",
      ],
      traps: [
        { spec: { type: "number", value: 90, tolerance: 0.5 }, feedback: "90 is the 90th percentile of the *mark scale*, not of the students. Find the mark with cumulative frequency 180." },
        { spec: { type: "number", value: 22.1, tolerance: 0.05 }, feedback: "That mark cuts off the *bottom* 10% (cumulative frequency 20). A distinction is for the *top* 10%: use cumulative frequency 180." },
      ],
      commonError: "Using the 10th percentile instead of the 90th.",
      difficulty: "challenge",
      guideRef: "cumulative-frequency",
      hints: [
        "How many students get a distinction? So what cumulative frequency marks the cut-off?",
        "Which two plotted points does a cumulative frequency of 180 lie between?",
        "On a straight line from (80, 176) to (100, 200), what fraction of the way up is 180?",
        "Use that same fraction of the class width 20.",
      ],
      strategy: "Use proportion (interpolation)",
    },
    {
      kind: "short",
      id: "statistics-ch-q07",
      question:
        "A histogram has these bars:\n\n| Class | Frequency density |\n|---|---|\n| 0 < x ≤ 10 | 1.2 |\n| 10 < x ≤ 25 | 3 |\n| 25 < x ≤ 30 | 4 |\n| 30 < x ≤ 50 | 0.65 |\n\nWork out an estimate for the median.",
      answer: { type: "number", value: 21, tolerance: 0.01 },
      solution: [
        "Frequencies: 1.2 × 10 = 12; 3 × 15 = 45; 4 × 5 = 20; 0.65 × 20 = 13. Total = 90.",
        "The median is the value with half the area (45) to its left.",
        "The first bar holds 12, so we need 33 more from the 10–25 bar.",
        "That bar has density 3, so we need a width of 33 ÷ 3 = 11. Median ≈ 10 + 11 = 21.",
      ],
      solutions: [
        {
          label: "Interpolate a cumulative frequency",
          steps: [
            "Cumulative frequencies: 12 at x = 10, 57 at x = 25.",
            "45 is {{(45 - 12)/(57 - 12)}} = {{33/45}} of the way through the class.",
            "Median ≈ 10 + {{33/45}} × 15 = 10 + 11 = 21.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 25, tolerance: 0.01 }, feedback: "25 is halfway along the x-axis (0 to 50). The median splits the **area** of the histogram in half." },
      ],
      commonError: "Taking the midpoint of the axis or of the median class instead of interpolating.",
      difficulty: "challenge",
      guideRef: "histograms",
      hints: [
        "First find the frequency of each class and the total.",
        "The median splits the total area into two equal halves. How much area is on each side?",
        "The first bar holds 12. How much more do you need, and how wide a strip of the next bar gives that?",
      ],
      strategy: "Area = frequency",
    },
    {
      kind: "short",
      id: "statistics-ch-q08",
      question:
        "In a histogram, the bar for the class 20 < h ≤ 30 is 2.5 times as tall as the bar for the class 30 < h ≤ 50. The two classes contain 54 values altogether. How many values are in the class 20 < h ≤ 30?",
      answer: { type: "number", value: 30 },
      solution: [
        "Let the frequency density of 30 < h ≤ 50 be d. Then 20 < h ≤ 30 has density 2.5d.",
        "Frequencies: 20 < h ≤ 30 → 2.5d × 10 = 25d; 30 < h ≤ 50 → d × 20 = 20d.",
        "25d + 20d = 54, so d = 1.2.",
        "Frequency of 20 < h ≤ 30 = 25 × 1.2 = 30.",
      ],
      solutions: [
        {
          label: "Compare areas as a ratio",
          steps: [
            "Area ratio = (2.5 × 10) : (1 × 20) = 25 : 20 = 5 : 4.",
            "Share 54 in the ratio 5 : 4: one part = 6.",
            "20 < h ≤ 30 gets 5 × 6 = 30.",
          ],
        },
      ],
      traps: [
        { spec: { type: "number", value: 38.57, tolerance: 0.05 }, feedback: "You shared 54 in the ratio of the *heights*, 2.5 : 1. Frequency is the *area*, and the classes have different widths." },
        { spec: { type: "number", value: 24 }, feedback: "That is the other class. 20 < h ≤ 30 has the taller bar and gets 5 parts of 6." },
      ],
      commonError: "Comparing bar heights instead of bar areas.",
      difficulty: "challenge",
      guideRef: "histograms",
      hints: [
        "Frequency is the area of a bar, not its height.",
        "Let the shorter bar have height d. Write both areas in terms of d.",
        "The areas are 25d and 20d. What ratio is that?",
      ],
      strategy: "Introduce a variable",
    },
    {
      kind: "short",
      id: "statistics-ch-q09",
      question:
        "The whole numbers 1, 2, 3, …, 4k + 3 are written down, where k is a positive integer. Find the interquartile range, in terms of k, in its simplest form.",
      answer: { type: "expression", expr: "2k+2", display: "2k + 2" },
      solution: [
        "There are n = 4k + 3 numbers, and each number equals its position.",
        "Q1 is in position {{(n + 1)/4}} = {{(4k + 4)/4}} = k + 1, so Q1 = k + 1.",
        "Q3 is in position {{3(n + 1)/4}} = 3k + 3, so Q3 = 3k + 3.",
        "IQR = (3k + 3) − (k + 1) = 2k + 2.",
        "Check with k = 1: the numbers 1 to 7 have Q1 = 2, Q3 = 6, IQR = 4 = 2(1) + 2 ✓.",
      ],
      solutions: [
        {
          label: "Try small cases",
          steps: [
            "k = 1: 1–7 → IQR 6 − 2 = 4.",
            "k = 2: 1–11 → Q1 = 3, Q3 = 9 → IQR 6.",
            "k = 3: 1–15 → Q1 = 4, Q3 = 12 → IQR 8.",
            "The IQR goes up by 2 each time: IQR = 2k + 2.",
          ],
        },
      ],
      traps: [
        { spec: { type: "expression", expr: "4k+2" }, feedback: "4k + 2 is the range. The IQR is Q3 − Q1." },
      ],
      commonError: "Using n/4 instead of (n + 1)/4 for the quartile position.",
      difficulty: "challenge",
      guideRef: "quartiles-iqr",
      hints: [
        "Try k = 1: what are the quartiles of 1, 2, …, 7?",
        "In general, which positions hold Q1 and Q3 when n = 4k + 3?",
        "Here each number is equal to its position in the list.",
      ],
      strategy: "Try small cases",
    },
    {
      kind: "short",
      id: "statistics-ch-q10",
      question:
        "Four positive whole numbers have a mode of 7, a median of 8 and a mean of 9. Work out the range of the four numbers.",
      answer: { type: "number", value: 6 },
      solution: [
        "Order them: a ≤ b ≤ c ≤ d. The median is {{(b + c)/2}} = 8, so b + c = 16.",
        "7 must appear at least twice. If b = c = 7 the median would be 7, so the two 7s are a and b.",
        "Then c = 16 − 7 = 9.",
        "Total = 4 × 9 = 36, so d = 36 − 7 − 7 − 9 = 13.",
        "Numbers 7, 7, 9, 13: range = 13 − 7 = 6.",
      ],
      traps: [
        { spec: { type: "number", value: 13 }, feedback: "13 is the largest number. The range is largest − smallest." },
      ],
      commonError: "Putting a 7 in the middle two positions, which forces the median to be 7.",
      difficulty: "challenge",
      guideRef: "averages-raw-data",
      hints: [
        "With four numbers, the median is the mean of the middle two. What do they add to?",
        "The mode 7 must appear at least twice. Which positions can the 7s occupy if the median is 8?",
        "Once you know three of the numbers, use the mean to find the fourth.",
      ],
      strategy: "Split into cases",
    },
  ],
};
