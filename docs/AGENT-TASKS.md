# Content tasks (for authoring / audit agents)

Repo: `/home/user/Vaniyear11maths` (Next.js app). **Never** run `npm install`, `npm run build`,
`next build`, `npm run dev` or any `git` command. Edit **only** the files your task names. Other
agents are writing other files at the same time — that's expected; ignore their files.

Always read first: `docs/CONTENT.md` (house rules, exam style, Year 11 answer formats),
`lib/types.ts`, `lib/topics/_example.ts`, your topic's entry in `lib/topics/meta.ts` (fixed section
ids — every `guideRef` must be one of them) and the objectives for your topic in
`docs/SCHOOL-OBJECTIVES.md` (every objective must be covered).

**Quality reference** (Year 8 version of this same app — same engine, younger level): files under
`/tmp/claude-0/ref/Year8Mathsnew/` e.g. `lib/topics/linear-graphs/{guide,mcq,practice,practice2}.ts`,
`lib/drills/linear-graphs.ts`, `components/widgets/linear-graphs.tsx`, `lib/extras/linear-graphs.ts`.
Match that density and polish, at Year 11 IGCSE Higher level. Never copy its ids.

Ids: zero-padded, in order, globally unique, always starting with the topic id.

## Task G — guide (`lib/topics/<id>/guide.ts`, `export const guide: TopicGuide`)
- `id`, `title`, `strand`, `icon` exactly as in meta. `summary` (one line), `intro` (2–4 sentences, why this matters at IGCSE).
- `guide`: exactly the meta sections — same ids, headings and order. Each section: `discovery`
  (problem + idea), substantial `body` (teach it properly, with the "why"), a `diagram` wherever a
  picture helps (mandatory for geometry, graphs, statistics charts, Venn diagrams, vectors),
  2 `workedExamples` (exam-style, full steps; at least one with an auto-marked `yourTurn`),
  `keyPoints`, `whyItWorks`, `strategies`, `thinkDeeper`. H+ (`stretch`) sections: same treatment.
- `learn`: 14–18 flashcards, `mustKnow` (one "Can I…?" line per school objective + any extra),
  6+ misconceptions, 6 examMistakes (real Edexcel examiner-report style slips), 2–3 mnemonics,
  4 realWorld, 4 videos (YouTube *search* URLs, e.g. Corbettmaths, Maths Genie, Cognito,
  ExamSolutions, 3Blue1Brown), `formulas` (every formula/identity for this topic; mark the ones
  on the Edexcel formula sheet with `note: "On the formula sheet"` and the ones to memorise with
  `note: "Learn this — not given"`).
- Validate: `node scripts/validate-topic.ts <id>` and `node scripts/typecheck-file.mjs lib/topics/<id>/guide.ts`.

## Task M — MCQ papers (`lib/topics/<id>/mcq.ts`, `export const mcqPapers: Paper[]`)
- 3 papers: ids `<id>-m1`, `<id>-m2`, `<id>-m3`; titles "MCQ Paper 1", "MCQ Paper 2", "MCQ Paper 3 — Exam style".
- 15 MCQs each (`<id>-m1-q01` … `<id>-m1-q15`). Per paper ≈ 4 warmup, 8 core, 3 challenge.
- Cover every section across the three papers (H+ sections ≈ 10–15% of questions). Distractors =
  real misconceptions; `answerIndex` spread evenly; diagrams where the question needs one.
- Validate: `node scripts/validate-topic.ts <id>` + typecheck the file.

## Task P — practice (`lib/topics/<id>/practice.ts`, `export const practice: TopicPractice`)
- `quiz`: 10 questions `<id>-quiz-q01…q10` — a quick check across the main sections (3 mcq, 7 short).
- `papers`: `<id>-p1` "Practice Paper 1" and `<id>-p2` "Practice Paper 2", 15 questions each
  (`<id>-p1-q01`…). Mostly `short` (auto-marked) with exactly 3 `written` per paper (show that /
  prove / explain). Per paper ≈ 4 warmup, 8 core, 3 challenge; together they cover every section.
- `challenge`: 10 questions `<id>-ch-q01…q10`, all `difficulty: "challenge"`, mostly `short`,
  grade-9 / H+ / olympiad-flavoured, full 3–4 rung hint ladders, `solutions` with 2 methods where
  illuminating.
- Validate as above.

## Task P2 — more papers (`lib/topics/<id>/practice2.ts`, `export const morePapers: Paper[]`)
- `<id>-p3` "Practice Paper 3" and `<id>-p4` "Practice Paper 4 — Exam style", 15 questions each
  (`<id>-p3-q01`…). p3 like p1/p2 (mostly short, 3 written). p4 modelled closely on real Edexcel
  4MA1 Higher questions on this topic: contexts, multi-step, "show that" as written, exact-form and
  3 s.f. answers — 3–4 written, rest short. Don't duplicate what's in practice.ts (vary contexts and numbers).
- Validate as above.

## Task I — interactive: drills + widgets + extras
1. `lib/drills/<id>.ts` per `docs/DRILLS.md` — 8–10 procedurally generated drills covering the
   sections (incl. 1–2 for H+ sections). Validate: `node scripts/validate-drills.ts <id>` and
   typecheck; read the printed samples and solve some yourself.
2. `components/widgets/<id>.tsx` per `docs/WIDGETS.md` — 2 genuinely useful explorables for this
   topic (Year 11 level: e.g. a quadratic grapher with sliders for a, b, c showing roots/discriminant,
   a cumulative-frequency builder, a sine-rule triangle you can drag, a vector-path explorer).
   Typecheck: `node scripts/typecheck-file.mjs components/widgets/<id>.tsx`.
3. `lib/extras/<id>.ts` per `docs/WIDGETS.md` §2. Typecheck.

## Task A — fresh-eyes audit (one topic, all its question/guide files)
Follow `docs/AUDIT.md` for each of `lib/topics/<id>/{guide,mcq,practice,practice2}.ts`. Solve
every question yourself before looking at the key. Fix in place (never change ids or counts).
Also check that every objective in `docs/SCHOOL-OBJECTIVES.md` for this topic is taught and
practised; if one is missing, rewrite a weak/duplicate question in place to cover it. Finish with
`node scripts/validate-topic.ts <id>` clean and the files type-checking. Report the change list.

## Task E — mock exam paper (`lib/exam/<paperId>.ts`, `export const paper: ExamPaper`)
Four mock papers modelled on Edexcel IGCSE 4MA1 Higher: `exam-1a` "Mock Set A — Paper 1H",
`exam-2a` "Mock Set A — Paper 2H", `exam-1b` "Mock Set B — Paper 1H", `exam-2b` "Mock Set B — Paper 2H".
Each: `calculator: true`, `minutes: 120`, **exactly 30 questions** ids `<paperId>-q01…q30`,
ordered easier → harder like a real paper (q01–q08 warmup ≈ grade 4–5, q09–q23 core ≈ grade 6–7,
q24–q30 challenge ≈ grade 8–9). Every question has `topicId` (a topic id from meta) and `guideRef`
(a section id of that topic). Spread across ALL 22 topics (each topic at least once per paper,
weighting roughly like a real paper: lots of algebra, geometry & number). ≈ 22 short, 5 mcq,
3 written (show that / prove). Use real exam contexts, diagrams where an exam would have one
(drawn accurately), "correct to 3 significant figures" etc. Don't reuse topic-file questions —
write fresh ones. Look at `/tmp/claude-0/ref/Year8Mathsnew/lib/exam/exam-c1.ts` for the shape.
Validate: `node scripts/validate-exam.ts <paperId>` and `node scripts/typecheck-file.mjs lib/exam/<paperId>.ts`.
Then re-solve every question yourself a second time (fresh-eyes, per docs/AUDIT.md) and fix errors.
Audit extras: every line/circle equation answer should use the `equation` answer type (convert `text` lists of arrangements); every exact-surd answer must have `form: "surd"`; every "simplify fully" algebra answer must have `form: "simplified"` (the checker
then rejects uncancelled fractions); every "factorise" answer `form: "factorised"`; when a fully
factorised answer could be confused with a partial one (e.g. x⁴ − 81), make the question checkable
(ask for the factors as a list or use an MCQ). Fix unit typos (area in m², volume in m³).
