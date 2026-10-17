// Rebuilds the "How each assignment is scored" section of views/grading.html from the grading script's
// Rubrics.gs and Assignments.gs, so the website and Canvas always show the same rubric.
// Usage: node scripts/build-grading-rubrics.js
const fs = require('fs');
const path = require('path');
const dir = path.join(__dirname, '..', 'instructor-only', 'readiness-check-script', 'source');
const src = fs.readFileSync(path.join(dir, 'Rubrics.gs'), 'utf8') + '\n' + fs.readFileSync(path.join(dir, 'Assignments.gs'), 'utf8');
const { RUBRICS, ASSIGNMENTS, rubricFor_ } = new Function(src + '\nreturn { RUBRICS, ASSIGNMENTS, rubricFor_ };')();
const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;');

const groups = [['lessons', 'Lessons'], ['labs', 'Agent Labs'], ['finalB', 'Final Assessment Part B']];
let h = `    <section id="rubrics">
      <h2 class="section-title">How each assignment is scored</h2>
      <div class="prose">
        <p>Every assignment is worth <strong>10 points</strong> and has its own rubric, built from its steps. Each rubric row is scored <strong>Full</strong>, <strong>Partial</strong>, or <strong>Not yet</strong>, and the last row is always your <strong>In your own words</strong> answers. Open an assignment to see its rubric. The same rubric appears in Canvas.</p>
      </div>
`;
for (const [g, label] of groups) {
  h += `      <h3 class="rubric-group">${label}</h3>\n`;
  for (const a of ASSIGNMENTS.filter((x) => x.group === g)) {
    const rows = rubricFor_(a);
    h += `      <details class="lesson-part rubric">
        <summary class="part-title"><span>${esc(a.name)}</span><span class="part-toggle" aria-hidden="true">+</span></summary>
        <div class="part-body"><div class="table-wrap"><table>
          <thead><tr><th>Rubric row</th><th>Full</th><th>Partial</th><th>Not yet</th><th class="num">Points</th></tr></thead>
          <tbody>
${rows.map((r) => `            <tr><td><strong>${esc(r.title)}</strong></td><td>${esc(r.full)}</td><td>${esc(r.half)} <span class="pts">(${r.partial})</span></td><td>${esc(r.none)} <span class="pts">(0)</span></td><td class="num">${r.points}</td></tr>`).join('\n')}
          </tbody>
          <tfoot><tr><td>Total</td><td></td><td></td><td></td><td class="num">${rows.reduce((t, r) => t + r.points, 0)}</td></tr></tfoot>
        </table></div></div>
      </details>
`;
  }
}
h += '    </section>';

const file = path.join(__dirname, '..', 'views', 'grading.html');
let page = fs.readFileSync(file, 'utf8');
const start = page.search(/    <section( id="rubrics")?>\s*<h2 class="section-title">How each assignment is scored<\/h2>/);
if (start === -1) throw new Error('Could not find the "How each assignment is scored" section.');
const end = page.indexOf('</section>', start) + '</section>'.length;
page = page.slice(0, start) + h + page.slice(end);
fs.writeFileSync(file, page);
console.log('Updated views/grading.html with ' + ASSIGNMENTS.length + ' rubrics.');
