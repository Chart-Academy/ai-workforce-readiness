// Slide player: arrow keys / space / buttons, and the slide number in the address (#3) so a link can open a slide.
(function () {
  try {
    var t = localStorage.getItem("theme");
    if (t) document.documentElement.setAttribute("data-theme", t);
  } catch (e) {}

  var slides = Array.prototype.slice.call(document.querySelectorAll(".slide"));
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var count = document.getElementById("count");
  var i = 0;

  function show(n) {
    i = Math.max(0, Math.min(slides.length - 1, n));
    slides.forEach(function (s, k) { s.classList.toggle("is-active", k === i); });
    prev.disabled = i === 0;
    next.disabled = i === slides.length - 1;
    count.textContent = (i + 1) + " / " + slides.length;
    if (history.replaceState) history.replaceState(null, "", "#" + (i + 1));
  }

  prev.addEventListener("click", function () { show(i - 1); });
  next.addEventListener("click", function () { show(i + 1); });
  document.addEventListener("keydown", function (e) {
    if (e.key === "ArrowRight" || e.key === "PageDown" || e.key === " ") { e.preventDefault(); show(i + 1); }
    if (e.key === "ArrowLeft" || e.key === "PageUp") { e.preventDefault(); show(i - 1); }
    if (e.key === "Home") show(0);
    if (e.key === "End") show(slides.length - 1);
  });

  var start = parseInt((location.hash || "").slice(1), 10);
  show(isNaN(start) ? 0 : start - 1);
})();
