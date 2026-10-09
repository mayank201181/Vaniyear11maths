// Statistics — MCQ papers (3 × 15). Options are shuffled at display time.
// Chart diagrams are drawn exactly to scale from the data in each question.
import type { Paper } from "../../types.ts";

const G1 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency graph of commuting times for 80 people. Points plotted at (0, 0), (10, 5), (20, 15), (30, 35), (40, 55), (50, 75) and (60, 80), joined by straight lines."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="91.7" y1="20" x2="91.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="123.3" y1="20" x2="123.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="186.7" y1="20" x2="186.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="218.3" y1="20" x2="218.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="281.7" y1="20" x2="281.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="313.3" y1="20" x2="313.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="376.7" y1="20" x2="376.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="408.3" y1="20" x2="408.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="254.4" x2="440" y2="254.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="238.8" x2="440" y2="238.8" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="223.1" x2="440" y2="223.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="207.5" x2="440" y2="207.5" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="191.9" x2="440" y2="191.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="176.3" x2="440" y2="176.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="160.6" x2="440" y2="160.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="145" x2="440" y2="145" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="129.4" x2="440" y2="129.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="113.8" x2="440" y2="113.8" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="98.1" x2="440" y2="98.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="82.5" x2="440" y2="82.5" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="66.9" x2="440" y2="66.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="51.3" x2="440" y2="51.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="35.6" x2="440" y2="35.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="123.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="186.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="313.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="376.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="242.8" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">10</text><text x="54" y="211.5" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">20</text><text x="54" y="180.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">30</text><text x="54" y="149" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">40</text><text x="54" y="117.8" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">50</text><text x="54" y="86.5" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">60</text><text x="54" y="55.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">70</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">80</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Time (minutes)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Cumulative frequency</text><polyline points="60,270 123.3,254.4 186.7,223.1 250,160.6 313.3,98.1 376.7,35.6 440,20" fill="none" stroke="#4338ca" stroke-width="2"/><circle cx="60" cy="270" r="3" fill="#4338ca"/><circle cx="123.3" cy="254.4" r="3" fill="#4338ca"/><circle cx="186.7" cy="223.1" r="3" fill="#4338ca"/><circle cx="250" cy="160.6" r="3" fill="#4338ca"/><circle cx="313.3" cy="98.1" r="3" fill="#4338ca"/><circle cx="376.7" cy="35.6" r="3" fill="#4338ca"/><circle cx="440" cy="20" r="3" fill="#4338ca"/></svg>`;

const G2 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency graph of test marks for 120 students. Points plotted at (20, 0), (30, 10), (40, 30), (50, 60), (60, 100), (70, 114) and (80, 120), joined by straight lines."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="91.7" y1="20" x2="91.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="123.3" y1="20" x2="123.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="186.7" y1="20" x2="186.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="218.3" y1="20" x2="218.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="281.7" y1="20" x2="281.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="313.3" y1="20" x2="313.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="376.7" y1="20" x2="376.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="408.3" y1="20" x2="408.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="249.2" x2="440" y2="249.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="228.3" x2="440" y2="228.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="207.5" x2="440" y2="207.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="186.7" x2="440" y2="186.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="165.8" x2="440" y2="165.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="145" x2="440" y2="145" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="124.2" x2="440" y2="124.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="103.3" x2="440" y2="103.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="82.5" x2="440" y2="82.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="61.7" x2="440" y2="61.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="40.8" x2="440" y2="40.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="123.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="186.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="313.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60</text><text x="376.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">70</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">80</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="232.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">20</text><text x="54" y="190.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">40</text><text x="54" y="149" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">60</text><text x="54" y="107.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">80</text><text x="54" y="65.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">100</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">120</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Mark</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Cumulative frequency</text><polyline points="60,270 123.3,249.2 186.7,207.5 250,145 313.3,61.7 376.7,32.5 440,20" fill="none" stroke="#4338ca" stroke-width="2"/><circle cx="60" cy="270" r="3" fill="#4338ca"/><circle cx="123.3" cy="249.2" r="3" fill="#4338ca"/><circle cx="186.7" cy="207.5" r="3" fill="#4338ca"/><circle cx="250" cy="145" r="3" fill="#4338ca"/><circle cx="313.3" cy="61.7" r="3" fill="#4338ca"/><circle cx="376.7" cy="32.5" r="3" fill="#4338ca"/><circle cx="440" cy="20" r="3" fill="#4338ca"/></svg>`;

const G3 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Cumulative frequency graph of the heights of 60 sunflowers. Points plotted at (100, 0), (120, 5), (140, 15), (160, 30), (180, 45), (200, 55) and (220, 60), joined by straight lines."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="91.7" y1="20" x2="91.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="123.3" y1="20" x2="123.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="186.7" y1="20" x2="186.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="218.3" y1="20" x2="218.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="281.7" y1="20" x2="281.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="313.3" y1="20" x2="313.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="376.7" y1="20" x2="376.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="408.3" y1="20" x2="408.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="249.2" x2="440" y2="249.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="228.3" x2="440" y2="228.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="207.5" x2="440" y2="207.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="186.7" x2="440" y2="186.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="165.8" x2="440" y2="165.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="145" x2="440" y2="145" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="124.2" x2="440" y2="124.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="103.3" x2="440" y2="103.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="82.5" x2="440" y2="82.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="61.7" x2="440" y2="61.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="40.8" x2="440" y2="40.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">100</text><text x="123.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">120</text><text x="186.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">140</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">160</text><text x="313.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">180</text><text x="376.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">200</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">220</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="232.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">10</text><text x="54" y="190.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">20</text><text x="54" y="149" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">30</text><text x="54" y="107.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">40</text><text x="54" y="65.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">50</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">60</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Height (cm)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Cumulative frequency</text><polyline points="60,270 123.3,249.2 186.7,207.5 250,145 313.3,82.5 376.7,40.8 440,20" fill="none" stroke="#4338ca" stroke-width="2"/><circle cx="60" cy="270" r="3" fill="#4338ca"/><circle cx="123.3" cy="249.2" r="3" fill="#4338ca"/><circle cx="186.7" cy="207.5" r="3" fill="#4338ca"/><circle cx="250" cy="145" r="3" fill="#4338ca"/><circle cx="313.3" cy="82.5" r="3" fill="#4338ca"/><circle cx="376.7" cy="40.8" r="3" fill="#4338ca"/><circle cx="440" cy="20" r="3" fill="#4338ca"/></svg>`;

const H1 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of waiting times. Bars: 0 to 10 height 1.2, 10 to 15 height 4, 15 to 20 height 4.8, 20 to 30 height 1.6, 30 to 50 height 0.4."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="98" y1="20" x2="98" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="136" y1="20" x2="136" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="174" y1="20" x2="174" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="212" y1="20" x2="212" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="288" y1="20" x2="288" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="326" y1="20" x2="326" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="364" y1="20" x2="364" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="402" y1="20" x2="402" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="260" x2="440" y2="260" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="250" x2="440" y2="250" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="240" x2="440" y2="240" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="230" x2="440" y2="230" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="220" x2="440" y2="220" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="210" x2="440" y2="210" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="200" x2="440" y2="200" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="190" x2="440" y2="190" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="180" x2="440" y2="180" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="170" x2="440" y2="170" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="160" x2="440" y2="160" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="150" x2="440" y2="150" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="140" x2="440" y2="140" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="130" x2="440" y2="130" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="120" x2="440" y2="120" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="110" x2="440" y2="110" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="100" x2="440" y2="100" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="90" x2="440" y2="90" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="80" x2="440" y2="80" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="70" x2="440" y2="70" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="60" x2="440" y2="60" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="50" x2="440" y2="50" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="40" x2="440" y2="40" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="30" x2="440" y2="30" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="136" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="212" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="288" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="364" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="224" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">1</text><text x="54" y="174" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">2</text><text x="54" y="124" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">3</text><text x="54" y="74" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">4</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">5</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Time, t (minutes)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Frequency density</text><rect x="60" y="210" width="76" height="60" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="136" y="70" width="38" height="200" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="174" y="30" width="38" height="240" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="212" y="190" width="76" height="80" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="288" y="250" width="152" height="20" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/></svg>`;

const H2 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of seedling heights. Bars: 0 to 4 height 2.5, 4 to 6 height 9, 6 to 8 height 12, 8 to 12 height 4.5, 12 to 20 height 1.25."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="79" y1="20" x2="79" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="98" y1="20" x2="98" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="117" y1="20" x2="117" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="136" y1="20" x2="136" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="174" y1="20" x2="174" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="193" y1="20" x2="193" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="212" y1="20" x2="212" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="231" y1="20" x2="231" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="269" y1="20" x2="269" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="288" y1="20" x2="288" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="307" y1="20" x2="307" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="326" y1="20" x2="326" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="364" y1="20" x2="364" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="383" y1="20" x2="383" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="402" y1="20" x2="402" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="421" y1="20" x2="421" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="260.4" x2="440" y2="260.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="250.8" x2="440" y2="250.8" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="241.2" x2="440" y2="241.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="231.5" x2="440" y2="231.5" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="221.9" x2="440" y2="221.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="212.3" x2="440" y2="212.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="202.7" x2="440" y2="202.7" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="193.1" x2="440" y2="193.1" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="183.5" x2="440" y2="183.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="173.8" x2="440" y2="173.8" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="164.2" x2="440" y2="164.2" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="154.6" x2="440" y2="154.6" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="145" x2="440" y2="145" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="135.4" x2="440" y2="135.4" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="125.8" x2="440" y2="125.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="116.2" x2="440" y2="116.2" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="106.5" x2="440" y2="106.5" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="96.9" x2="440" y2="96.9" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="87.3" x2="440" y2="87.3" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="77.7" x2="440" y2="77.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="68.1" x2="440" y2="68.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="58.5" x2="440" y2="58.5" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="48.8" x2="440" y2="48.8" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="39.2" x2="440" y2="39.2" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="29.6" x2="440" y2="29.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="98" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">2</text><text x="136" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">4</text><text x="174" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">6</text><text x="212" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">8</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="288" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">12</text><text x="326" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">14</text><text x="364" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">16</text><text x="402" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">18</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="254.8" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">1</text><text x="54" y="235.5" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">2</text><text x="54" y="216.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">3</text><text x="54" y="197.1" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">4</text><text x="54" y="177.8" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">5</text><text x="54" y="158.6" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">6</text><text x="54" y="139.4" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">7</text><text x="54" y="120.2" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">8</text><text x="54" y="100.9" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">9</text><text x="54" y="81.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">10</text><text x="54" y="62.5" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">11</text><text x="54" y="43.2" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">12</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">13</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Height, h (cm)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Frequency density</text><rect x="60" y="221.9" width="76" height="48.1" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="136" y="96.9" width="38" height="173.1" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="174" y="39.2" width="38" height="230.8" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="212" y="183.5" width="76" height="86.5" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="288" y="246" width="152" height="24" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/></svg>`;

const H3 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram with no numbers on the vertical axis, drawn on a grid. Bars: 0 to 20 is 3 squares high, 20 to 30 is 8 squares high, 30 to 60 is 2 squares high."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="91.7" y1="20" x2="91.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="123.3" y1="20" x2="123.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="186.7" y1="20" x2="186.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="218.3" y1="20" x2="218.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="281.7" y1="20" x2="281.7" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="313.3" y1="20" x2="313.3" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="376.7" y1="20" x2="376.7" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="408.3" y1="20" x2="408.3" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="245" x2="440" y2="245" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="220" x2="440" y2="220" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="195" x2="440" y2="195" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="170" x2="440" y2="170" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="145" x2="440" y2="145" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="120" x2="440" y2="120" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="95" x2="440" y2="95" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="70" x2="440" y2="70" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="45" x2="440" y2="45" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="123.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="186.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="313.3" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="376.7" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Time, t (minutes)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Frequency density</text><rect x="60" y="195" width="126.7" height="75" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="186.7" y="70" width="63.3" height="200" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="250" y="220" width="190" height="50" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/></svg>`;

const H4 = `<svg viewBox="0 0 460 320" xmlns="http://www.w3.org/2000/svg" role="img" aria-label="Histogram of daily phone use. Bars: 0 to 20 height 0.6, 20 to 30 height 2.4, 30 to 40 height 3.2, 40 to 60 height 1.2, 60 to 100 height 0.2."><rect x="0" y="0" width="460" height="320" fill="#ffffff"/><line x1="60" y1="20" x2="60" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="79" y1="20" x2="79" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="98" y1="20" x2="98" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="117" y1="20" x2="117" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="136" y1="20" x2="136" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="155" y1="20" x2="155" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="174" y1="20" x2="174" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="193" y1="20" x2="193" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="212" y1="20" x2="212" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="231" y1="20" x2="231" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="250" y1="20" x2="250" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="269" y1="20" x2="269" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="288" y1="20" x2="288" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="307" y1="20" x2="307" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="326" y1="20" x2="326" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="345" y1="20" x2="345" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="364" y1="20" x2="364" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="383" y1="20" x2="383" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="402" y1="20" x2="402" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="421" y1="20" x2="421" y2="270" stroke="#eef2f7" stroke-width="1"/><line x1="440" y1="20" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="262.9" x2="440" y2="262.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="255.7" x2="440" y2="255.7" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="248.6" x2="440" y2="248.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="241.4" x2="440" y2="241.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="234.3" x2="440" y2="234.3" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="227.1" x2="440" y2="227.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="220" x2="440" y2="220" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="212.9" x2="440" y2="212.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="205.7" x2="440" y2="205.7" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="198.6" x2="440" y2="198.6" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="191.4" x2="440" y2="191.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="184.3" x2="440" y2="184.3" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="177.1" x2="440" y2="177.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="170" x2="440" y2="170" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="162.9" x2="440" y2="162.9" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="155.7" x2="440" y2="155.7" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="148.6" x2="440" y2="148.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="141.4" x2="440" y2="141.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="134.3" x2="440" y2="134.3" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="127.1" x2="440" y2="127.1" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="120" x2="440" y2="120" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="112.9" x2="440" y2="112.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="105.7" x2="440" y2="105.7" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="98.6" x2="440" y2="98.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="91.4" x2="440" y2="91.4" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="84.3" x2="440" y2="84.3" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="77.1" x2="440" y2="77.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="70" x2="440" y2="70" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="62.9" x2="440" y2="62.9" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="55.7" x2="440" y2="55.7" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="48.6" x2="440" y2="48.6" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="41.4" x2="440" y2="41.4" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="34.3" x2="440" y2="34.3" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="27.1" x2="440" y2="27.1" stroke="#eef2f7" stroke-width="1"/><line x1="60" y1="20" x2="440" y2="20" stroke="#cbd5e1" stroke-width="1"/><line x1="60" y1="270" x2="440" y2="270" stroke="#1f2937" stroke-width="1.5"/><line x1="60" y1="270" x2="60" y2="20" stroke="#1f2937" stroke-width="1.5"/><text x="60" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">0</text><text x="98" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">10</text><text x="136" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">20</text><text x="174" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">30</text><text x="212" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">40</text><text x="250" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">50</text><text x="288" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">60</text><text x="326" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">70</text><text x="364" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">80</text><text x="402" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">90</text><text x="440" y="285" font-size="11" font-family="sans-serif" text-anchor="middle" fill="#1f2937">100</text><text x="54" y="274" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0</text><text x="54" y="238.3" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">0.5</text><text x="54" y="202.6" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">1</text><text x="54" y="166.9" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">1.5</text><text x="54" y="131.1" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">2</text><text x="54" y="95.4" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">2.5</text><text x="54" y="59.7" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">3</text><text x="54" y="24" font-size="11" font-family="sans-serif" text-anchor="end" fill="#1f2937">3.5</text><text x="250" y="308" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937">Time, t (minutes)</text><text x="16" y="145" font-size="12" font-family="sans-serif" text-anchor="middle" fill="#1f2937" transform="rotate(-90 16 145)">Frequency density</text><rect x="60" y="227.1" width="76" height="42.9" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="136" y="98.6" width="38" height="171.4" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="174" y="41.4" width="38" height="228.6" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="212" y="184.3" width="76" height="85.7" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/><rect x="288" y="255.7" width="152" height="14.3" fill="#c7d2fe" fill-opacity="0.85" stroke="#1f2937" stroke-width="1.5"/></svg>`;

export const mcqPapers: Paper[] = [
  {
    id: "statistics-m1",
    title: "MCQ Paper 1",
    questions: [
      {
        kind: "mcq",
        id: "statistics-m1-q01",
        question: "Here are the numbers of goals scored by a CCA football team in six matches:\n\n    3, 5, 5, 8, 9, 12\n\nWork out the **mean** number of goals.",
        options: ["7", "6.5", "5", "8.4"],
        answerIndex: 0,
        explanation:
          "Total = 3 + 5 + 5 + 8 + 9 + 12 = 42, and there are 6 matches, so the mean is 42 ÷ 6 = 7. 6.5 is the median (the middle of 5 and 8), 5 is the mode, and 8.4 comes from dividing 42 by 5 instead of 6.",
        difficulty: "warmup",
        guideRef: "averages-raw-data",
        hints: ["Add up all six values, then divide by how many values there are."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q02",
        question: "Wei Ling times six journeys on the MRT, in minutes:\n\n    12, 5, 9, 15, 7, 10\n\nWork out the **median** journey time.",
        options: ["12 minutes", "9 minutes", "9.5 minutes", "9.67 minutes"],
        answerIndex: 2,
        explanation:
          "Put the values in order first: 5, 7, 9, 10, 12, 15. With 6 values the median is halfway between the 3rd and 4th: (9 + 10) ÷ 2 = 9.5 minutes. 12 is the average of the middle two values of the *unsorted* list (9 and 15); 9 takes only one of the two middle values; 9.67 is the mean (58 ÷ 6).",
        difficulty: "warmup",
        guideRef: "averages-raw-data",
        hints: ["What must you always do before finding a median?", "With an even number of values, the median is halfway between the two middle ones."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q03",
        question: "The table shows the number of siblings of 20 students.\n\n| Number of siblings | Frequency |\n|---|---|\n| 0 | 5 |\n| 1 | 9 |\n| 2 | 4 |\n| 3 | 2 |\n\nWork out the mean number of siblings.",
        options: ["1.5", "1.15", "5", "5.75"],
        answerIndex: 1,
        explanation:
          "Total number of siblings = 0 × 5 + 1 × 9 + 2 × 4 + 3 × 2 = 0 + 9 + 8 + 6 = 23. There are 20 students, so the mean is 23 ÷ 20 = 1.15. 1.5 is the mean of the *values* 0, 1, 2, 3, ignoring the frequencies; 5 is the mean of the frequencies (20 ÷ 4); 5.75 divides 23 by the number of rows instead of the number of students.",
        difficulty: "warmup",
        guideRef: "frequency-tables",
        hints: ["Add a column for (number of siblings × frequency).", "Divide that total by the total frequency, 20."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q04",
        question: "Here are 11 values, in order:\n\n    2, 4, 5, 7, 8, 10, 12, 13, 15, 18, 20\n\nWork out the **interquartile range**.",
        options: ["18", "6", "15", "10"],
        answerIndex: 3,
        explanation:
          "With n = 11, the lower quartile is the {{(n + 1)/4}} = 3rd value = 5 and the upper quartile is the {{3(n + 1)/4}} = 9th value = 15. IQR = 15 − 5 = 10. 18 is the range (20 − 2); 15 is just the upper quartile; 6 uses the 4th and 8th values (13 − 7) — the wrong positions.",
        difficulty: "warmup",
        guideRef: "quartiles-iqr",
        hints: ["Find the positions first: {{(n + 1)/4}} and {{3(n + 1)/4}} with n = 11.", "IQR = upper quartile − lower quartile."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q05",
        question: "Marcus's mean mark in his first 4 maths tests is 70. In his next two tests he scores 82 and 76.\n\nWork out his mean mark over all 6 tests.",
        options: ["74.5", "73", "76", "109.5"],
        answerIndex: 1,
        explanation:
          "Turn the mean into a total: 4 × 70 = 280. Add the two new marks: 280 + 82 + 76 = 438. Mean over 6 tests = 438 ÷ 6 = 73. 74.5 averages the old mean 70 with the mean of the new marks (79) — that treats 4 tests and 2 tests as if they counted equally. 76 is the mean of 70, 82 and 76, treating the old mean as one test. 109.5 divides 438 by 4 instead of 6.",
        difficulty: "core",
        guideRef: "averages-raw-data",
        hints: [
          "Can you just average 70 with the new marks? How many tests does the 70 stand for?",
          "Work out the total of the first 4 marks.",
          "Mean = (total of all 6 marks) ÷ 6.",
        ],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q06",
        question:
          "The cumulative frequency graph shows the commuting times of 80 people.\n\nUse the graph to estimate how many of these people took **more than 45 minutes**.",
        diagram: G1,
        options: ["15", "65", "25", "5"],
        answerIndex: 0,
        explanation:
          "Go up from 45 minutes to the graph and across: the cumulative frequency is 65, so 65 people took 45 minutes or less. More than 45 minutes: 80 − 65 = 15. 65 is the number who took *at most* 45 minutes — you must subtract from the total. 25 reads at 40 minutes instead (80 − 55); 5 reads at 50 minutes (80 − 75).",
        difficulty: "core",
        guideRef: "cumulative-frequency",
        hints: [
          "What does a cumulative frequency of 65 at 45 minutes actually count?",
          "The graph counts people *up to* a time. You want the ones *above* it.",
          "Subtract the reading at 45 minutes from the total, 80.",
        ],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q07",
        question:
          "Aisha records waiting times, in minutes, at two hawker stalls.\n\n| | Median | Interquartile range |\n|---|---|---|\n| Stall A | 8 | 3 |\n| Stall B | 6 | 9 |\n\nWhich statement is a correct comparison?",
        options: [
          "Stall B's waits are shorter on average and more consistent.",
          "Stall A's waits are shorter on average because its IQR is smaller.",
          "Stall A's waits are shorter on average and more consistent.",
          "Stall B's waits are shorter on average, but less consistent.",
        ],
        answerIndex: 3,
        explanation:
          "Compare an average **and** a spread. Stall B has the lower median (6 < 8), so its waits are typically shorter. Stall B has the larger IQR (9 > 3), so its waits vary more — they are *less* consistent. Saying B is 'more consistent' reads the IQR backwards: a bigger IQR means more spread. The IQR tells you nothing about which waits are shorter, so using it to compare averages is wrong.",
        difficulty: "core",
        guideRef: "quartiles-iqr",
        hints: [
          "Which number tells you about a typical wait, and which tells you about consistency?",
          "Lower median = shorter typical wait. Larger IQR = more spread out = less consistent.",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q08",
        question:
          "Ravi times how long, in minutes, nine friends take to reply to a message:\n\n    4, 6, 7, 7, 8, 9, 10, 12, 48\n\nWork out the interquartile range.",
        options: ["44", "4", "4.5", "5"],
        answerIndex: 2,
        explanation:
          "n = 9, so the lower quartile is at position {{(9 + 1)/4}} = 2.5: halfway between 6 and 7, i.e. 6.5. The upper quartile is at position 7.5: halfway between 10 and 12, i.e. 11. IQR = 11 − 6.5 = 4.5. 44 is the range — dragged up by the outlier 48, which is exactly why the IQR is the better measure of spread here. 4 rounds the positions down (6 and 10); 5 rounds them up (7 and 12).",
        difficulty: "core",
        guideRef: "quartiles-iqr",
        hints: [
          "Positions: {{(n + 1)/4}} and {{3(n + 1)/4}}. What are they when n = 9?",
          "A position of 2.5 means halfway between the 2nd and 3rd values.",
          "Lower quartile 6.5; now find the 7.5th value.",
        ],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q09",
        question:
          "The table shows the time, t minutes, that 30 students spent on homework one evening.\n\n| Time (t minutes) | Frequency |\n|---|---|\n| 0 < t ≤ 10 | 4 |\n| 10 < t ≤ 20 | 10 |\n| 20 < t ≤ 30 | 12 |\n| 30 < t ≤ 40 | 4 |\n\nWork out an estimate for the mean time. Give your answer correct to 3 significant figures.",
        options: ["20.3 minutes", "25.3 minutes", "152.5 minutes", "20 minutes"],
        answerIndex: 0,
        explanation:
          "Use the midpoints 5, 15, 25, 35: Σfx = 4 × 5 + 10 × 15 + 12 × 25 + 4 × 35 = 20 + 150 + 300 + 140 = 610. Estimated mean = 610 ÷ 30 = 20.33… ≈ 20.3 minutes. 25.3 uses the upper bounds (760 ÷ 30) instead of midpoints; 152.5 divides by the 4 classes instead of 30 students; 20 is just the mean of the four midpoints, ignoring the frequencies.",
        difficulty: "core",
        guideRef: "frequency-tables",
        hints: [
          "You don't know the exact times. Which single value best represents each class?",
          "Multiply each midpoint by its frequency and add.",
          "Divide by the total frequency, 30 — not by the number of classes.",
        ],
        strategy: "Estimate first",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q10",
        question:
          "The heights of 40 students are recorded.\n\n| Height (h cm) | Frequency |\n|---|---|\n| 140 < h ≤ 150 | 15 |\n| 150 < h ≤ 160 | 6 |\n| 160 < h ≤ 170 | 10 |\n| 170 < h ≤ 180 | 9 |\n\nWhich class contains the median height?",
        options: ["140 < h ≤ 150", "150 < h ≤ 160", "160 < h ≤ 170", "170 < h ≤ 180"],
        answerIndex: 1,
        explanation:
          "The median is between the 20th and 21st heights. Running totals: 15, then 15 + 6 = 21. So the 20th and 21st heights are both in 150 < h ≤ 160. 140 < h ≤ 150 is the *modal* class (highest frequency), not the median class. 160 < h ≤ 170 is where you land if you miss that the running total has already reached 21 by the end of the second class.",
        difficulty: "core",
        guideRef: "frequency-tables",
        hints: ["Which position is the median? (There are 40 students.)", "Keep a running total of the frequencies until you pass the 20th and 21st values."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q11",
        question:
          "The cumulative frequency graph shows the commuting times of 80 people.\n\nUse the graph to estimate the **median** commuting time.",
        diagram: G1,
        options: ["30 minutes", "55 minutes", "40 minutes", "32.5 minutes"],
        answerIndex: 3,
        explanation:
          "The median is the {{1/2}} × 80 = 40th person. Go across from 40 on the cumulative frequency axis to the graph, then down: the time is 32.5 minutes (40 is a quarter of the way from 35 to 55, so a quarter of the way from 30 to 40 minutes). 40 is the cumulative frequency you read *from*, not the answer. 30 is just the middle of the time axis. 55 comes from going *up* from 40 minutes — using the axes the wrong way round.",
        difficulty: "core",
        guideRef: "cumulative-frequency",
        hints: [
          "Which person is in the middle when there are 80 people?",
          "Find 40 on the vertical (cumulative frequency) axis.",
          "Go across to the graph, then down to the time axis.",
        ],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q12",
        question: "In a grouped frequency table, the class 20 < m ≤ 35 has a frequency of 27.\n\nWhat is the frequency density for this class?",
        options: ["405", "27", "1.8", "0.556"],
        answerIndex: 2,
        explanation:
          "Frequency density = frequency ÷ class width. The class width is 35 − 20 = 15, so the frequency density is 27 ÷ 15 = 1.8. 405 multiplies instead of divides (27 × 15); 27 is just the frequency — on a histogram with unequal widths you never plot frequency; 0.556 is the division the wrong way round (15 ÷ 27).",
        difficulty: "core",
        guideRef: "histograms",
        hints: ["What is the class width?", "Frequency density = frequency ÷ class width."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q13",
        question:
          "The cumulative frequency graph shows the commuting times of 80 people.\n\nThe slowest 10% of these commuters are offered a new bus route. Use the graph to estimate the **shortest** commuting time of a person offered the new route.",
        diagram: G1,
        options: ["13 minutes", "48.5 minutes", "54 minutes", "8 minutes"],
        answerIndex: 1,
        explanation:
          "10% of 80 = 8 people are the slowest, so you need the time of the 72nd person (80 − 8 = 72). Across from 72 to the graph and down: 72 is {{17/20}} of the way from 55 to 75, giving 40 + 8.5 = 48.5 minutes. 13 minutes reads at a cumulative frequency of 8 — that is the *fastest* 10%. 54 minutes is 90% of the way along the time axis, which has nothing to do with the data. 8 is the number of people, not a time.",
        difficulty: "challenge",
        guideRef: "cumulative-frequency",
        hints: [
          "How many people is 10% of 80? Are they at the top or the bottom of the graph?",
          "The slowest 8 people are the last 8. Which cumulative frequency marks where they start?",
          "Read across from 72 and down to the time axis.",
        ],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q14",
        question:
          "The histogram shows the waiting times, t minutes, of patients at a clinic.\n\nWork out an estimate for the number of patients who waited between 8 and 17 minutes.",
        diagram: H1,
        options: ["32", "56", "10", "41.6"],
        answerIndex: 0,
        explanation:
          "Frequency = frequency density × width, so take the area between 8 and 17. From 8 to 10: 2 × 1.2 = 2.4. From 10 to 15: 5 × 4 = 20. From 15 to 17: 2 × 4.8 = 9.6. Total 2.4 + 20 + 9.6 = 32. 56 uses the whole classes from 0 to 20 (12 + 20 + 24). 41.6 uses the whole of the 0 < t ≤ 10 bar instead of just 8 to 10. 10 adds the bar heights (1.2 + 4 + 4.8) — frequency densities are not frequencies.",
        difficulty: "challenge",
        guideRef: "histograms",
        hints: [
          "On a histogram, which part of a bar represents frequency?",
          "Split the interval 12 to 25 into pieces that each sit under a single bar.",
          "For each piece: width × height. You only want part of the first and last bars.",
        ],
        strategy: "Split into cases",
      },
      {
        kind: "mcq",
        id: "statistics-m1-q15",
        question: "The mean of n numbers is 10. Two more numbers, 25 and 31, are added to the list, and the mean becomes 12.\n\nFind the value of n.",
        options: ["18", "28", "22", "16"],
        answerIndex: 3,
        explanation:
          "Totals: the original total is 10n. After adding 25 + 31 = 56 there are n + 2 numbers with total 12(n + 2). So 10n + 56 = 12n + 24, giving 2n = 32 and n = 16. Check: 16 numbers total 160; add 56 → 216; 216 ÷ 18 = 12 ✓. 18 is n + 2 (the new count, not the original). 28 comes from 10n + 56 = 12n, forgetting that the count went up. 22 comes from 12(n + 1), adding only one to the count.",
        difficulty: "challenge",
        guideRef: "averages-raw-data",
        hints: [
          "Means are awkward — totals are easy. Write the original total in terms of n.",
          "After adding the two numbers, how many numbers are there, and what is their total?",
          "Set 10n + 56 equal to 12(n + 2) and solve.",
        ],
        strategy: "Introduce a variable",
      },
    ],
  },
  {
    id: "statistics-m2",
    title: "MCQ Paper 2",
    questions: [
      {
        kind: "mcq",
        id: "statistics-m2-q01",
        question: "The maximum daily temperatures in Singapore one week, in °C, were:\n\n    31, 33, 30, 32, 33, 29, 34\n\nWork out the **range**.",
        options: ["3 °C", "33 °C", "5 °C", "31.7 °C"],
        answerIndex: 2,
        explanation:
          "Range = largest − smallest = 34 − 29 = 5 °C. 3 is the last value minus the first (34 − 31) — the list is not in order, so find the true largest and smallest. 33 is the mode and 31.7 is the mean (222 ÷ 7), which are averages, not measures of spread.",
        difficulty: "warmup",
        guideRef: "averages-raw-data",
        hints: ["Find the largest and the smallest values — they are not the first and last here."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q02",
        question: "Hana measures the lengths, in cm, of seven leaves:\n\n    15, 22, 18, 30, 25, 12, 20\n\nFind the **lower quartile** of the lengths.",
        options: ["15", "22", "16.5", "12"],
        answerIndex: 0,
        explanation:
          "Order first: 12, 15, 18, 20, 22, 25, 30. With n = 7 the lower quartile is the {{(7 + 1)/4}} = 2nd value = 15. 22 is the 2nd value of the *unsorted* list. 16.5 is the median of 12, 15, 18, 20 — including the median (20) in the lower half. 12 is the minimum.",
        difficulty: "warmup",
        guideRef: "quartiles-iqr",
        hints: ["Put the values in order.", "The lower quartile is at position {{(n + 1)/4}}."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q03",
        question:
          "The table shows the number of goals scored by a netball shooter in 20 quarters.\n\n| Goals | Frequency |\n|---|---|\n| 0 | 3 |\n| 1 | 7 |\n| 2 | 6 |\n| 3 | 3 |\n| 4 | 1 |\n\nWork out the **median** number of goals.",
        options: ["2", "1", "3", "1.5"],
        answerIndex: 3,
        explanation:
          "With 20 values the median is halfway between the 10th and 11th. Running totals: 3 (zeros), 10 (up to 1 goal), 16 (up to 2 goals). So the 10th value is 1 and the 11th is 2, and the median is 1.5. 2 is the middle of the *list of values* 0–4, ignoring frequencies. 1 is the mode. 3 is the median of the frequencies (1, 3, 3, 6, 7) — but the frequencies are counts, not data values.",
        difficulty: "warmup",
        guideRef: "frequency-tables",
        hints: ["The median of 20 values sits between the 10th and 11th.", "Keep a running total of the frequencies: where does it pass 10, and where does it reach 11?"],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q04",
        question: "In a histogram with unequal class widths, what does the **area** of each bar represent?",
        options: ["The frequency density of the class", "The frequency of the class", "The class width", "The cumulative frequency up to that class"],
        answerIndex: 1,
        explanation:
          "Height = frequency density = {{(frequency)/(class width)}}, so area = width × height = frequency. The *height* (not the area) is the frequency density. The width is the class width. Cumulative frequency belongs on a cumulative frequency graph, not a histogram.",
        difficulty: "warmup",
        guideRef: "histograms",
        hints: ["Frequency density = frequency ÷ class width. Multiply both sides by the class width."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q05",
        question: "Three numbers have a median of 8, a mean of 7 and a range of 9.\n\nWhat is the smallest of the three numbers?",
        options: ["11", "6", "2", "4"],
        answerIndex: 2,
        explanation:
          "In order the numbers are a, 8, c (the median is the middle one). Mean 7 means the total is 21, so a + c = 21 − 8 = 13. Range 9 means c − a = 9. Subtracting: 2a = 4, so a = 2 (and c = 11). Check: 2, 8, 11 — median 8 ✓, mean {{21/3 = 7}} ✓, range 9 ✓. 11 is the largest number, not the smallest. 6 forgets to take the median out of the total (a + c = 21). 4 is 13 − 9, which is 2a — it still needs halving.",
        difficulty: "core",
        guideRef: "averages-raw-data",
        hints: [
          "Write the three numbers in order as a, 8, c. Why must 8 be in the middle?",
          "Mean 7 tells you the total. What do a and c add to?",
          "The range gives c − a. Solve the two equations together.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q06",
        question:
          "Mei measures the heights of 15 house plants. She then adds one more plant, which is **much** taller than all the others.\n\nWhich of these is likely to change the **least**?",
        options: ["The mean", "The range", "The highest value", "The interquartile range"],
        answerIndex: 3,
        explanation:
          "The interquartile range only uses the middle 50% of the data, so one extreme value barely moves it (the quartiles shift by at most a fraction of a position). The range and the highest value both change by a lot because they use the new extreme directly. The mean uses every value, so a very large value pulls it up noticeably.",
        difficulty: "core",
        guideRef: "quartiles-iqr",
        hints: ["Which measures use the extreme values directly?", "Which measure ignores the top and bottom quarters of the data?"],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q07",
        question:
          "Here are the lengths, in seconds, of 15 phone calls, in order:\n\n    21, 24, 25, 27, 28, 30, 31, 33, 35, 36, 38, 40, 41, 45, 52\n\nWork out the interquartile range.",
        options: ["13 seconds", "31 seconds", "16 seconds", "33 seconds"],
        answerIndex: 0,
        explanation:
          "n = 15: lower quartile at position {{16/4}} = 4 → 27; upper quartile at position 12 → 40. IQR = 40 − 27 = 13 seconds. 31 is the range (52 − 21). 33 is the median (8th value). 16 uses the 3rd and 13th values (41 − 25) — wrong positions.",
        difficulty: "core",
        guideRef: "quartiles-iqr",
        hints: ["Positions are {{(n + 1)/4}} and {{3(n + 1)/4}}.", "With n = 15 these are whole numbers: the 4th and 12th values."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q08",
        question:
          "The masses of 30 suitcases at Changi Airport are recorded.\n\n| Mass (m kg) | Frequency |\n|---|---|\n| 40 < m ≤ 50 | 3 |\n| 50 < m ≤ 60 | 8 |\n| 60 < m ≤ 70 | 12 |\n| 70 < m ≤ 80 | 5 |\n| 80 < m ≤ 90 | 2 |\n\nWhat is the **greatest possible** range of the masses?",
        options: ["10 kg", "50 kg", "40 kg", "45 kg"],
        answerIndex: 1,
        explanation:
          "The lightest suitcase could be just over 40 kg and the heaviest could be 90 kg, so the range is at most 90 − 40 = 50 kg. 40 kg uses the midpoints (85 − 45) — that's a sensible *estimate*, but not the greatest possible value. 45 kg mixes a midpoint with a boundary (90 − 45). 10 kg is the range of the frequencies (12 − 2), which are counts, not masses.",
        difficulty: "core",
        guideRef: "frequency-tables",
        hints: ["What is the smallest a mass in the first class could be? The largest in the last class?", "Range = largest − smallest. Use the class boundaries at the two ends."],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q09",
        question:
          "The table shows how much 40 people spent on lunch at a hawker centre.\n\n| Amount ($x) | Frequency |\n|---|---|\n| 0 < x ≤ 4 | 6 |\n| 4 < x ≤ 8 | 14 |\n| 8 < x ≤ 12 | 15 |\n| 12 < x ≤ 20 | 5 |\n\nWork out an estimate for the mean amount spent.",
        options: ["$8.50", "$81.50", "$8.15", "$10.40"],
        answerIndex: 2,
        explanation:
          "Midpoints: 2, 6, 10, 16 (the last class is twice as wide — its midpoint is 16, not 14). Σfx = 6 × 2 + 14 × 6 + 15 × 10 + 5 × 16 = 12 + 84 + 150 + 80 = 326. Estimate = 326 ÷ 40 = $8.15. $81.50 divides by the 4 classes. $10.40 uses upper bounds (416 ÷ 40). $8.50 is the mean of the four midpoints, ignoring frequencies.",
        difficulty: "core",
        guideRef: "frequency-tables",
        hints: [
          "Find the midpoint of each class — careful, the last class is wider.",
          "Multiply each midpoint by its frequency and add.",
          "Divide by 40.",
        ],
        strategy: "Estimate first",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q10",
        question:
          "Jun is drawing a cumulative frequency graph for this table.\n\n| Time (t minutes) | Frequency |\n|---|---|\n| 0 < t ≤ 10 | 5 |\n| 10 < t ≤ 20 | 10 |\n| 20 < t ≤ 30 | 20 |\n| 30 < t ≤ 40 | 15 |\n\nWhich points should he plot (after starting at (0, 0))?",
        options: [
          "(5, 5), (15, 15), (25, 35), (35, 50)",
          "(10, 5), (20, 15), (30, 35), (40, 50)",
          "(10, 5), (20, 10), (30, 20), (40, 15)",
          "(5, 5), (15, 10), (25, 20), (35, 15)",
        ],
        answerIndex: 1,
        explanation:
          "Cumulative frequencies are running totals: 5, 15, 35, 50. Each is plotted at the **upper bound** of its class, because by 10 minutes all 5 of the first class have finished; by 20 minutes, 15 have; and so on. Plotting at the midpoints (5, 15, 25, 35) is the classic error — it pretends the whole class is finished halfway through. Plotting the plain frequencies (5, 10, 20, 15) gives a frequency polygon-style shape, not cumulative frequency.",
        difficulty: "core",
        guideRef: "cumulative-frequency",
        hints: [
          "Cumulative means 'running total'. What are the running totals?",
          "By what time are all the people in the first class definitely counted?",
        ],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q11",
        question: "The cumulative frequency graph shows the test marks of 120 students.\n\nUse the graph to estimate the interquartile range of the marks.",
        diagram: G2,
        options: ["17.5", "60", "57.5", "40"],
        answerIndex: 0,
        explanation:
          "Lower quartile: read across from {{1/4}} × 120 = 30 → mark 40. Upper quartile: read across from {{3/4}} × 120 = 90 → 90 is {{3/4}} of the way from 60 to 100, so the mark is 57.5. IQR = 57.5 − 40 = 17.5. 60 is 90 − 30, subtracting cumulative frequencies instead of marks. 57.5 is only the upper quartile, and 40 only the lower quartile.",
        difficulty: "core",
        guideRef: "cumulative-frequency",
        hints: [
          "Which cumulative frequencies give the quartiles when n = 120?",
          "Read across from 30 and from 90, then down to the mark axis.",
          "IQR = upper quartile − lower quartile, both as marks.",
        ],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q12",
        question: "The histogram shows the heights, h cm, of some seedlings.\n\nHow many seedlings have a height in the class 8 < h ≤ 12?",
        diagram: H2,
        options: ["4.5", "9", "13.5", "18"],
        answerIndex: 3,
        explanation:
          "The bar for 8 < h ≤ 12 has height (frequency density) 4.5 and width 4. Frequency = 4.5 × 4 = 18. 4.5 is the frequency density, not the frequency. 9 uses a width of 2 (copying the narrow bars next to it). 13.5 uses a width of 3 — count the width from the scale: 12 − 8 = 4.",
        difficulty: "core",
        guideRef: "histograms",
        hints: ["Read the height of the bar and the width of the class.", "Frequency = frequency density × class width."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q13",
        question: "The histogram shows the heights, h cm, of 80 seedlings.\n\nUse the histogram to estimate the **median** height.",
        diagram: H2,
        options: ["10 cm", "6 cm", "7 cm", "8 cm"],
        answerIndex: 2,
        explanation:
          "Frequencies (area): 0–4: 2.5 × 4 = 10; 4–6: 9 × 2 = 18; 6–8: 12 × 2 = 24; 8–12: 18; 12–20: 1.25 × 8 = 10. Total 80, so the median is the 40th seedling. Running total: 10, 28, 52 — the 40th is in 6 < h ≤ 8, and it is the 12th of the 24 in that class. Halfway through the class: 6 + {{12/24}} × 2 = 7 cm. 10 cm is just the middle of the horizontal axis. 6 cm and 8 cm are the class boundaries — the median lies *inside* the class.",
        difficulty: "challenge",
        guideRef: "histograms",
        hints: [
          "First turn every bar into a frequency (area).",
          "Which seedling is the median, and which class is it in?",
          "How far into that class do you need to go? Use a proportion of the class width.",
        ],
        strategy: "Split into cases",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q14",
        question:
          "Seven **different** positive whole numbers have lower quartile 5, median 9, upper quartile 14 and range 12.\n\nWhat is the greatest possible value of the largest number?",
        options: ["17", "26", "21", "16"],
        answerIndex: 3,
        explanation:
          "With n = 7 the quartiles and median are the 2nd, 4th and 6th values: a, 5, c, 9, e, 14, g. The smallest number a is less than 5 (all different), so a ≤ 4. Since g = a + 12, the largest possible g is 4 + 12 = 16 (and 16 > 14 ✓). Example: 4, 5, 6, 9, 10, 14, 16. 17 forgets that the numbers are different (a = 5). 26 adds the range to the upper quartile; 21 adds it to the median — the range is measured from the **smallest** value.",
        difficulty: "challenge",
        guideRef: "quartiles-iqr",
        hints: [
          "With 7 values, which positions are the quartiles and the median? Write a template.",
          "The range links the largest value to the smallest. How large can the smallest value be?",
          "The smallest is less than 5 and a whole number, so at most 4.",
        ],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "statistics-m2-q15",
        question:
          "Five positive whole numbers have mean 6, median 5 and a **single** mode of 4.\n\nWhat is the largest possible range of the five numbers?",
        options: ["8", "7", "17", "11"],
        answerIndex: 1,
        explanation:
          "In order: a, b, 5, d, e. The mode is 4, so 4 appears at least twice — it must be a = b = 4. The total is 30, so d + e = 30 − 13 = 17. d and e are bigger than 5 and must be different (a repeat would create a second mode), so d ≥ 6 and e ≤ 11. Range = 11 − 4 = 7 with 4, 4, 5, 6, 11. 8 comes from 4, 4, 5, 5, 12 — but then 4 and 5 are both modes. 11 is the largest number, not the range. 17 is d + e.",
        difficulty: "challenge",
        guideRef: "averages-raw-data",
        hints: [
          "Write the numbers in order with the median in the middle. Where must the 4s go?",
          "What is the total of all five? So what do the last two add to?",
          "To make the range big, make the largest number big — but what stops d being 5?",
        ],
        strategy: "Consider extremes",
      },
    ],
  },
  {
    id: "statistics-m3",
    title: "MCQ Paper 3 — Exam style",
    questions: [
      {
        kind: "mcq",
        id: "statistics-m3-q01",
        question:
          "The monthly salaries of six staff at a small café are:\n\n    $2400, $2600, $2600, $2800, $3000, $15 000\n\nWhich average best represents a typical salary, and why?",
        options: [
          "The mean, because it uses every value",
          "The median, because the $15 000 does not affect it",
          "The mode, because it is the most common value",
          "The range, because it shows how spread out the salaries are",
        ],
        answerIndex: 1,
        explanation:
          "The median is (2600 + 2800) ÷ 2 = $2700, a typical salary. The mean is 28 400 ÷ 6 ≈ $4733 — more than five of the six people earn, because the extreme $15 000 drags it up. The mode ($2600) happens to be close, but with only two equal values it is not reliable. The range is a measure of spread, not an average.",
        difficulty: "warmup",
        guideRef: "averages-raw-data",
        hints: ["Is there an extreme value? Which average ignores extremes?"],
        strategy: "Consider extremes",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q02",
        question:
          "Zara asks 30 classmates how many MRT stops they travel to school.\n\n| Number of stops | Frequency |\n|---|---|\n| 1 | 4 |\n| 2 | 9 |\n| 3 | 12 |\n| 4 | 5 |\n\nWhat is the mode?",
        options: ["12", "2.5", "30", "3"],
        answerIndex: 3,
        explanation:
          "The mode is the most common *value*: 3 stops (it occurs 12 times). 12 is the frequency of the mode, not the mode itself. 2.5 is the middle of the values 1–4. 30 is the total frequency.",
        difficulty: "warmup",
        guideRef: "frequency-tables",
        hints: ["Which number of stops occurs most often? Give the number of stops, not the count."],
        strategy: "Make it simpler",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q03",
        question:
          "The table shows cumulative frequencies for the times, t seconds, that 50 students took to solve a puzzle.\n\n| Time (t seconds) | Cumulative frequency |\n|---|---|\n| t ≤ 10 | 6 |\n| t ≤ 20 | 19 |\n| t ≤ 30 | 37 |\n| t ≤ 40 | 45 |\n| t ≤ 50 | 50 |\n\nHow many students took more than 20 seconds but no more than 30 seconds?",
        options: ["18", "37", "19", "13"],
        answerIndex: 0,
        explanation:
          "Cumulative frequencies are running totals, so subtract: 37 − 19 = 18 students. 37 counts everyone up to 30 seconds, including the fast ones. 19 counts everyone up to 20 seconds. 13 is 19 − 6, the class 10 < t ≤ 20.",
        difficulty: "warmup",
        guideRef: "cumulative-frequency",
        hints: ["Cumulative frequency at 30 counts everyone up to 30 seconds. Who do you need to take away?"],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q04",
        question: "On a histogram, the bar for the class 30 < x ≤ 45 has a frequency density of 2.4.\n\nWhat is the frequency of this class?",
        options: ["2.4", "6.25", "36", "108"],
        answerIndex: 2,
        explanation:
          "Frequency = frequency density × class width = 2.4 × 15 = 36. 2.4 is the height, not the frequency. 6.25 divides the width by the density (15 ÷ 2.4). 108 multiplies by 45, the upper bound, instead of the width 15.",
        difficulty: "warmup",
        guideRef: "histograms",
        hints: ["The class width is 45 − 30. Then rearrange: frequency density = frequency ÷ width."],
        strategy: "Use the inverse",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q05",
        question: "The mean of 10 numbers is 8. The mean of a different 15 numbers is m. The mean of all 25 numbers is 11.\n\nWork out m.",
        options: ["14", "19.5", "3", "13"],
        answerIndex: 3,
        explanation:
          "Total of all 25 = 25 × 11 = 275. Total of the first 10 = 80. So the 15 numbers total 275 − 80 = 195, and m = 195 ÷ 15 = 13. 14 assumes the overall mean is halfway between 8 and m (8 + 14 = 2 × 11) — only true for equal-sized groups. 19.5 divides 195 by 10. 3 is 11 − 8.",
        difficulty: "core",
        guideRef: "averages-raw-data",
        hints: [
          "Turn each mean into a total.",
          "Total of all 25 minus total of the first 10 = total of the other 15.",
        ],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q06",
        question:
          "Two classes record their weekly revision times, in minutes.\n\n| | Lower quartile | Median | Upper quartile |\n|---|---|---|---|\n| Class A | 30 | 45 | 70 |\n| Class B | 42 | 50 | 58 |\n\nWhich statement is correct?",
        options: [
          "Class A's times were more consistent, because its IQR is larger.",
          "Class B's times were typically longer and more consistent.",
          "Class A's times were typically longer, because its upper quartile is higher.",
          "The classes are equally consistent, because their medians are close.",
        ],
        answerIndex: 1,
        explanation:
          "Class B's median is higher (50 > 45), so B typically revised for longer. IQRs: A = 70 − 30 = 40, B = 58 − 42 = 16. B's smaller IQR means its times are more consistent. A larger IQR means *less* consistent, so the first statement is backwards. One quartile isn't an average — compare medians. Medians say nothing about consistency.",
        difficulty: "core",
        guideRef: "quartiles-iqr",
        hints: [
          "Work out both IQRs.",
          "Compare the medians for 'typically longer' and the IQRs for 'more consistent'.",
        ],
        strategy: "Eliminate options",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q07",
        question:
          "The table shows the distances, d km, that 40 students live from school.\n\n| Distance (d km) | Frequency |\n|---|---|\n| 0 < d ≤ 2 | 8 |\n| 2 < d ≤ 4 | 12 |\n| 4 < d ≤ 6 | 15 |\n| 6 < d ≤ 10 | 5 |\n\nKenji says, \"An estimate of the mean distance is 39.75 km.\" Which is the correct estimate, and what was Kenji's mistake?",
        options: [
          "5.10 km — he should have used the upper class boundaries.",
          "3.98 km — he used the class widths instead of the midpoints.",
          "3.98 km — he divided Σfx by the number of classes, not the total frequency.",
          "5 km — the estimated mean is the midpoint of the modal class.",
        ],
        answerIndex: 2,
        explanation:
          "Midpoints 1, 3, 5, 8: Σfx = 8 + 36 + 75 + 40 = 159. Correct estimate = 159 ÷ 40 = 3.975 ≈ 3.98 km. Kenji's 39.75 = 159 ÷ 4 — he divided by the 4 classes. Using upper boundaries gives 5.10 km, an *over*estimate, so that's not a fix. Using class widths gives a different total altogether. The midpoint of the modal class is not the mean.",
        difficulty: "core",
        guideRef: "frequency-tables",
        hints: [
          "Do the calculation properly yourself first.",
          "Which division gives 39.75? Try 159 ÷ 4.",
        ],
        strategy: "Work backwards",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q08",
        question:
          "The cumulative frequency graph shows the heights of 60 sunflowers.\n\nUse the graph to estimate the number of sunflowers with a height between 130 cm and 190 cm.",
        diagram: G3,
        options: ["40", "50", "10", "30"],
        answerIndex: 0,
        explanation:
          "Read up from 130 cm: cumulative frequency 10. Read up from 190 cm: cumulative frequency 50. Between them: 50 − 10 = 40. 50 is just the reading at 190 (it includes the 10 shorter than 130). 10 is just the reading at 130. 30 is 45 − 15, using 140 cm and 180 cm instead.",
        difficulty: "core",
        guideRef: "cumulative-frequency",
        hints: [
          "Read the cumulative frequency at each end of the interval.",
          "The reading at 190 counts everything up to 190 — including those below 130.",
        ],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q09",
        question: "The cumulative frequency graph shows the heights of 60 sunflowers.\n\nUse the graph to find the interquartile range.",
        diagram: G3,
        options: ["30 cm", "160 cm", "120 cm", "40 cm"],
        answerIndex: 3,
        explanation:
          "Quartiles of 60 values: read across from 15 and 45. Lower quartile = 140 cm, upper quartile = 180 cm, so IQR = 40 cm. 30 is 45 − 15, subtracting cumulative frequencies. 160 cm is the median. 120 cm is the full width of the horizontal axis (220 − 100).",
        difficulty: "core",
        guideRef: "cumulative-frequency",
        hints: [
          "Which cumulative frequencies mark the quarter and three-quarter points of 60?",
          "Read across from 15 and 45, then down to the height axis.",
        ],
        strategy: "Draw a diagram",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q10",
        question:
          "The histogram shows the times, t minutes, that some customers spent in a bookshop. It has no scale on the vertical axis.\n\nThe bar for 0 < t ≤ 20 represents 30 customers. How many customers spent between 20 and 30 minutes?",
        diagram: H3,
        options: ["40", "80", "15", "30"],
        answerIndex: 0,
        explanation:
          "Area represents frequency. The 0–20 bar is 20 wide and 3 squares high: area 60 'units' for 30 customers, so 1 customer = 2 units. The 20–30 bar is 10 wide and 8 squares high: area 80 units = 40 customers. 80 compares heights only (8 is {{8/3}} of 3, and {{8/3}} × 30 = 80) — that ignores the narrower width. 15 compares widths only (half as wide → half of 30). 30 assumes the bars have equal frequency.",
        difficulty: "core",
        guideRef: "histograms",
        hints: [
          "On a histogram, what does a bar's area stand for?",
          "Work out the area of the 0–20 bar in grid units. How many units is one customer?",
          "Now find the area of the 20–30 bar.",
        ],
        strategy: "Find one part first",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q11",
        question:
          "The table shows the number of books read last month by some students.\n\n| Books | 1 | 2 | 3 | 4 |\n|---|---|---|---|---|\n| Frequency | 5 | k | 8 | 2 |\n\nThe mean number of books is 2.25. Work out k.",
        options: ["28", "26", "13", "15"],
        answerIndex: 2,
        explanation:
          "Σfx = 5 + 2k + 24 + 8 = 37 + 2k and Σf = 15 + k. So {{(37 + 2k)/(15 + k)}} = 2.25, giving 37 + 2k = 33.75 + 2.25k, so 3.25 = 0.25k and k = 13. Check: Σfx = 63, Σf = 28, 63 ÷ 28 = 2.25 ✓. 28 is the total frequency once k = 13; 26 is the fx value for 2 books (2 × 13); 15 is the total of the known frequencies.",
        difficulty: "core",
        guideRef: "frequency-tables",
        hints: [
          "Write Σfx and Σf in terms of k.",
          "Mean = Σfx ÷ Σf. Set this equal to 2.25.",
          "Multiply both sides by (15 + k) and solve the linear equation.",
        ],
        strategy: "Introduce a variable",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q12",
        question:
          "A data set has mean 12 and range 6. Every value is increased by 5 and then multiplied by 2.\n\nWhat are the new mean and the new range?",
        options: ["Mean 34, range 22", "Mean 34, range 12", "Mean 29, range 12", "Mean 34, range 6"],
        answerIndex: 1,
        explanation:
          "The mean follows the same operations: (12 + 5) × 2 = 34. Adding 5 to every value shifts the data without changing the spread, so the range stays 6; doubling every value doubles the gaps, so the range becomes 12. Range 22 treats the range like the mean ((6 + 5) × 2). Mean 29 does the operations in the wrong order (12 × 2 + 5). Range 6 forgets that multiplying stretches the spread.",
        difficulty: "core",
        guideRef: "averages-raw-data",
        hints: [
          "Try it with a tiny data set, e.g. 9, 12, 15 (mean 12, range 6).",
          "Adding a constant moves the data; multiplying stretches it. Which affects the range?",
        ],
        strategy: "Try small cases",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q13",
        question: "The histogram shows the daily phone use, t minutes, of 100 teenagers.\n\nUse the histogram to estimate the median daily phone use. Give your answer to 3 significant figures.",
        diagram: H4,
        options: ["34.4 minutes", "35 minutes", "50 minutes", "30 minutes"],
        answerIndex: 0,
        explanation:
          "Frequencies: 0–20: 0.6 × 20 = 12; 20–30: 2.4 × 10 = 24; 30–40: 3.2 × 10 = 32; 40–60: 1.2 × 20 = 24; 60–100: 0.2 × 40 = 8. Total 100, so find the 50th person. Running total 12, 36, 68 — the 50th is the 14th of 32 in 30 < t ≤ 40. Median ≈ 30 + {{14/32}} × 10 = 34.375 ≈ 34.4 minutes. 35 is the midpoint of the median class (no interpolation). 50 is the middle of the axis. 30 is the lower bound of the median class.",
        difficulty: "challenge",
        guideRef: "histograms",
        hints: [
          "Convert each bar to a frequency (area).",
          "Which person is the median? Which class are they in?",
          "Interpolate: how far into that class is the 50th person?",
        ],
        strategy: "Split into cases",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q14",
        question:
          "Arjun draws a cumulative frequency graph for a table of times grouped in classes 0 < t ≤ 10, 10 < t ≤ 20, …, each 10 minutes wide. He plots each cumulative frequency at the **midpoint** of its class instead of at the upper bound.\n\nWhat effect does this have on his estimate of the median?",
        options: [
          "It is 5 minutes too high.",
          "None — the shape of the graph is the same.",
          "It is 5 minutes too low.",
          "It is 10 minutes too low.",
        ],
        answerIndex: 2,
        explanation:
          "Every point is plotted 5 minutes to the left of where it should be (midpoint = upper bound − 5), so his whole graph is the correct graph shifted 5 minutes left. Every reading from the time axis — median, quartiles — comes out 5 minutes too small. The shape is the same, but the position is not, so 'no effect' is wrong. 10 minutes would be a whole class width; the shift is half a class width.",
        difficulty: "challenge",
        guideRef: "cumulative-frequency",
        hints: [
          "How far is the midpoint of a 10-minute class from its upper bound?",
          "If every point moves the same distance left, what happens to the whole curve?",
          "So what happens to any time you read off it?",
        ],
        strategy: "Look for an invariant",
      },
      {
        kind: "mcq",
        id: "statistics-m3-q15",
        question:
          "Here are nine values in ascending order:\n\n    2, 5, x, 8, 10, 12, y, 17, 25\n\nThe interquartile range is 9 and the mean is 11. Work out y.",
        options: ["7", "13", "14.5", "20"],
        answerIndex: 1,
        explanation:
          "n = 9: lower quartile at position 2.5 → {{(5 + x)/2}}; upper quartile at position 7.5 → {{(y + 17)/2}}. IQR: {{(y + 17)/2 - (5 + x)/2 = 9}}, so y − x + 12 = 18 and y − x = 6. Mean: total = 99, and the known values add to 79, so x + y = 20. Adding: 2y = 26, y = 13 (and x = 7, which fits the order 5 ≤ 7 ≤ 8 ✓). 7 is x, not y. 14.5 takes the quartiles as the 3rd and 7th values (y − x = 9). 20 is x + y.",
        difficulty: "challenge",
        guideRef: "quartiles-iqr",
        hints: [
          "With n = 9, at which positions are the quartiles? They involve x and y.",
          "Write the IQR as an equation in x and y. Then use the mean to write a second equation.",
          "Solve the simultaneous equations y − x = 6 and x + y = 20.",
        ],
        strategy: "Introduce a variable",
      },
    ],
  },
];
