# Year 11 Maths Lab

A complete Year 11 (Grade 10) maths revision app for **Pearson Edexcel International GCSE
Mathematics A (4MA1), Higher tier**, plus the school's **H+ (Higher Plus)** extension objectives —
built for a learner at Tanglin Trust School, Singapore, with **Art of Problem Solving** pedagogy
throughout. Built on the Year 8 Maths Lab engine.

## What's inside

- **22 topics** across Number, Ratio & Proportion, Algebra, Geometry & Measure and Statistics &
  Probability — the school's Units 1–12 (see `docs/SCHOOL-OBJECTIVES.md`) plus the rest of the
  4MA1 Higher specification (bounds, differentiation, vectors & transformations, loci). H+ sections
  are badged.
- **Lessons** — problem-first discovery, derivations, diagrams, worked examples with "your turn",
  key points, exam mistakes, flashcards, formula notes (on the formula sheet vs learn it).
- **Question bank** per topic — quick check, 3 MCQ papers, 4 practice papers (incl. an Edexcel
  exam-style paper) and a 10-problem challenge set; mostly auto-marked typed answers (surds, π,
  fractions, algebra checked by equivalence) plus written "show that"/proof questions self-marked
  against a mark scheme.
- **Four mock papers** (Paper 1H / 2H × two sets) with a topic-by-topic breakdown.
- **Professor Pi** — an AI tutor (hints, not answers) inside every lesson and question, plus a
  full-page tutor (`/tutor`) where she can ask anything or send a photo of a question or her working.
- Skill drills, Daily 5, spaced review, progress & certificates, family accounts with cloud sync,
  PIN-protected parent dashboard, installable PWA.

## Tech

Next.js 16 (App Router, Turbopack) · React 19 · TypeScript · Tailwind CSS 4 · Vercel Blob
(JSON storage) · Anthropic SDK. Content is typed TypeScript data validated by scripts and tests;
topic content stays on the server and questions are fetched by id.

```
app/                 pages + API routes
components/          UI (QuestionCard, PaperRunner, DrillRunner, GuideView, …) and widgets/
lib/
  types.ts           content model (questions, answer specs, guides)
  answerCheck.ts     auto-marking; mathParse.ts (parser); mathml.ts ({{ }} → MathML)
  learning.ts        stars, spaced repetition, mastery; mastery.ts topic progress
  store.tsx          client state + safe cloud sync; profileTypes.ts (+ v1 migration)
  topics/<id>/       guide.ts, mcq.ts, practice.ts, practice2.ts (audited content)
  drills/<id>.ts     skill generators     extras/<id>.ts   engagement extras
  exam/              Big Exam papers      server/          blob, auth, rate limits, content
docs/                authoring + audit specs, curriculum map, UI architecture
scripts/             validators, registry generator, per-file type check
tests/               node --test suites (answer checking, learning rules, all content)
```

## Develop

```bash
npm install
npm run dev            # http://localhost:3000 (guest mode without env vars)
npm test               # unit + content tests
npm run validate       # every topic, drill set and exam paper
npm run build
```

Local accounts without Vercel Blob: `LOCAL_BLOB_DIR=/tmp/y11m-blob npm run dev`.

### Environment variables

| Variable | Purpose |
| --- | --- |
| `BLOB_READ_WRITE_TOKEN` | Vercel Blob — accounts and cloud progress |
| `AUTH_SECRET` | Signs session cookies (recommended; otherwise derived from the Blob token) |
| `ANTHROPIC_API_KEY` | Professor Pi (optional) |
| `AI_MODEL` | Override the tutor model (default `claude-opus-5-5`; e.g. `claude-sonnet-5-5` or `claude-haiku-4-5` to cut cost) |

Existing v1 accounts, sessions and progress keep working: progress documents are migrated on
load (stars, streak, time and topic totals carry over).
