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
