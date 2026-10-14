# AI Prompt Log

A running record of prompts given to AI assistants while building this project. Add new entries at the top.

## Entry template

```markdown
### YYYY-MM-DD — Short title
- **Tool / model:** e.g. Claude Code (Opus 5.5)
- **Branch:** branch-name
- **Prompt:**
  > The exact prompt text
- **Result:** What the AI produced or changed (files, commits)
- **Notes:** Follow-ups, corrections, or what worked / didn't
```

---

## Log

### 2026-10-14 — Collapsible Agent Labs
- **Tool / model:** Claude Code (Opus 5.5)
- **Branch:** content-revision
- **Prompt:**
  > In the Agent Lab page, make the labs collapable as an accordian-style element. When collapsed, there should be a related picture visible in addition to the field, tools, and lessions learned details found on the left.
- **Result:** Each lab in `views/agents.html` is now a collapsible card. When collapsed it shows the work-order stub (Field, Tools, Lesson), the title and one-line description, a small themed picture drawn in the site colors, and a + toggle. Expanding shows the starter instructions, materials, and assessment. The WO-07 "coming soon" card stays a plain card with a placeholder picture. Added `public/js/labs.js` so links like `agents.html#calendar` (used by the lab slides' "Back to Agent Labs") open that lab. Styles are in `public/css/style.css`.
- **Notes:** All labs start collapsed. The starter-instruction text was checked to be unchanged.

### 2026-10-14 — Applied skills slides and practice files
- **Tool / model:** Claude Code (Opus 5.5)
- **Branch:** content-revision
- **Prompt:**
  > Sounds good. You can add the slides and lesson documents to the Applied Skills module.
- **Result:** Created five slide decks in `views/lessons/slides/`: `lesson6-microsoft-word.html` (9 slides), `lesson7-microsoft-excel.html` (9), `lesson8-resume-writing.html` (9), `lesson9-job-searching.html` (9), and `lesson10-note-taking.html` (8). Created eight practice files in `public/data/`: `lesson6-safety-notice-messy.docx`, `lesson7-timesheet-messy.xlsx`, `lesson8-resume-checklist.docx`, `lesson8-resume-starter.docx`, `lesson9-search-notes-messy.docx`, `lesson9-job-listings.xlsx`, `lesson10-meeting-notes-messy.docx`, and `lesson10-meeting-transcript.docx`. Linked them all from `views/lessons.html` and added a few slide styles to `views/labs/slides/slides.css`.
- **Notes:** Each practice file starts with the usual "AI Instructions" line. Planted problems: Lesson 6 has five fonts, lines spaced by hand, and three typos (Emergancy, EXTINGUSHERS, recieve). Lesson 7 has hours typed as text, a hard-coded total, a total range that skips the last row, and a duplicate name with a trailing space. Lesson 9 has 3 good fits, 1 borderline, 5 that miss a must-have, and 3 scams. Lesson 10's notes have the wrong training day and an outdated 24-hour swap rule, which the transcript corrects to 48 hours at the end. The transcript is about three pages, so the lesson text now says "three pages."

### 2026-10-14 — Applied skills lessons (draft)
- **Tool / model:** Claude Code (Opus 5.5)
- **Branch:** content-revision
- **Prompt:**
  > if you look at the course plan, we have these 5 "topics". What else can or should be explored/expanded on?

  > OK. There are a few things that I agree with: there needs to be some "applied lessons". That can be a separate section of lessons focusing on using the Microsoft Suite (primarilly word and excel), resume writing, job searching, and note-taking and organization. These lessons can be slightly longer in length, and include real-world problems.

  Choices made in follow-up questions: Word and Excel as separate lessons; a new Module 4 numbered Lessons 6–10; lesson entries first, with slides and practice files after review; update the home page course plan but not the grading page.
- **Result:** Added "Module 4 · Applied skills" to `views/lessons.html` with Lessons 6–10: Microsoft Word, Microsoft Excel, Résumé Writing, Job Searching, and Note-taking and Organization. Each has topics, a real-world problem, an in-class assessment, own-words prompts, and an upload line. Added Lessons 6–10 to the home page course plan (10 total). Widened the lesson number column so "Lesson 10" fits.
  Follow-up:
  > This looks good so far. For the resume-building lesson, can that be personalized to help build and strengthen a student's existing resume?

  Rewrote Lesson 8 around each student's own résumé. Students bring their current résumé, or use a starter worksheet if they don't have one, and remove contact details before sharing with AI. They review it with AI against a checklist, make the top three changes themselves, and tailor a copy to a real job posting. The Jordan example was removed. The practice files are now `lesson8-resume-checklist.docx` and `lesson8-resume-starter.docx`.
- **Notes:** Practice files and slides are marked "coming soon" and haven't been created. The grading page still says "Lessons 1–5."

### 2026-10-14 — Footer sitemap
- **Tool / model:** Claude Code (Opus 5.5)
- **Branch:** content-revision
- **Prompt:**
  > can the site footers include a brief sitemap?
- **Result:** Added a two-column site map to the footer of all six main pages: Course (Home, Getting Started, Grading) and Learn (Lessons, Agent Labs, Final Project). The current page is highlighted. Added footer styles to `public/css/style.css`.
  Follow-up:
  > Can there also be a brief 1 or 2 sentences about the chart academy in the far left of the footer with a logo monochrome/transparent logo above?

  Added a footer column on the far left with the full Chart Academy logo in a single muted color and a two-sentence description.

  Follow-up: shared a sketch of a new footer layout: logo and summary on the left, site map on the right, then copyright and the Chart Academy link on a bottom row, with no divider lines.

  Rebuilt the footer as two rows to match: the logo and summary are centered in a left column with the site map centered beside them, and the bottom row has the copyright on the left and the link on the right. On phones everything stacks.

  Follow-up:
  > I don't like the logo and summary. If those can be removed. Can the sitemap be moved back to the left of the footer, and keep the copywrite line. Was the copywrite line moved by chance?

  Removed the logo and summary and their styles. The site map is back on the left. The bottom row keeps the copyright on the left and the link on the right, which matches the original footer.

  Follow-up:
  > Let's try adding a back to top link. If the site can scroll along with it, that would be nice.

  Added a "Back to top ↑" link to the right of the site map on all six main pages. The page scrolls smoothly back up unless the visitor's device is set to reduce motion.
- **Notes:** Final footer: site map with a "Back to top" link on its right, then a copyright and link row. The logo and summary were tried and removed. The slide decks have no footer, so they were left as they are.

### 2026-10-14 — Lesson 2–5 slide decks
- **Tool / model:** Claude Code (Opus 5.5)
- **Branch:** content-revision
- **Prompt:**
  > can you make slides for the lessons please? Ideally, they should be 5-8 slides in length, informative but conscise.
- **Result:** Created `views/lessons/slides/lesson2-ethics.html` (7 slides), `lesson3-citing-sources.html` (7), `lesson4-workplace-productivity.html` (6), and `lesson5-creating-agents.html` (6), each with a title picture, diagrams, and an assessment slide that matches `lessons.html`. Replaced the "Slides (coming soon)" placeholders in `views/lessons.html` with links. Added shared styles to `views/labs/slides/slides.css` (boxes, tables, OK/not-OK cards, title-art strokes) and fixed slides that ran taller than the screen so they scroll instead of clipping their top. The fix also applies to the Lesson 1 and lab decks.
- **Notes:** Lesson 1 already had a deck, so it only gained the tighter assessment-slide layout. The Lesson 3 citation example uses the Federal Trade Commission's phishing page with an accessed date instead of a published date.

### 2026-10-14 — Introduce acronyms before use
- **Tool / model:** Claude Code (Opus 5.5)
- **Branch:** content-revision
- **Prompt:**
  > in the html files, make sure to introduce acronyms before using them. For example,  "... Artificial intelligenc (AI) ..."

  Follow-ups:
  > In the slides (labs/slides/wo*.html), there is an eyebrow saying something along the lines of "Agent Lab . Work Order (WO...) . ...". You don't need to spell out the work order here as it was already done in the agents.html file.

  > please, unless the slides are teaching new content.

  > In the agents.html file, VLAN is spelled out but it is done within a button. I think it should be spelled out in either headings or bodies.

  > I think we can make an exception in this case. Thanks
- **Result:** Spelled out acronyms at first use in headings or body text on each page: AI in `getting-started.html`, `agents.html`, `final-project.html`, `grading.html`, `lessons.html`, and the Lesson 1 slides; WO in `agents.html` and `grading.html`; CISA, NIST, VLAN, and CSV in `agents.html`; IT and IP in the WO-01 slides; IT in the Lesson 1 slides; ID in the WO-04 slides; and STAR in the WO-05 slides.
- **Notes:** Lab slide eyebrows and title-slide subtitles kept the short forms because `agents.html` already introduces them. Acronyms stay spelled out on slides that teach the topic (Lesson 1 AI, WO-05 STAR). VLAN moved from the download button to the WO-01 assessment step. The button still shows "VLAN" before the spelled-out form, which was accepted as an exception. Page titles, slide header bars, AM/PM, and OK were left as is.

### 2026-10-13 — Lesson 1 slide deck
- **Tool / model:** Claude Code (Opus 5.5)
- **Branch:** dev-tools
- **Prompt:**
  > In the introdiuction to AI (Lesson 1) in lessons.html, create a slide deck to accompany the instruction son the page. Make the slide deck clear, conscise, in 5-9 slides, w/ pictures and diagrams for this lesson.
- **Result:** Created `views/lessons/slides/lesson1-intro-to-ai.html` (8 slides with inline SVG pictures and diagrams), reusing the lab deck's `slides.css`/`slides.js`. Added diagram styles (cards, steps, bars, prompt color-coding) to `views/labs/slides/slides.css`. Replaced Lesson 1's "Slides (coming soon)" in `views/lessons.html` with a link to the deck.
- **Notes:**

### 2026-10-13 — Add prompt log
- **Tool / model:** Claude Code (Opus 5.5)
- **Branch:** dev-tools
- **Prompt:**
  > add markdown file to track ai promps
- **Result:** Created `AI_PROMPTS.md` with an entry template and this first entry.
- **Notes:**
