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
