// Agent Labs: open the lab named in the address (#calendar), e.g. from a slide deck's "Back to Agent Labs" link.
(function () {
  function openFromHash() {
    var id = decodeURIComponent((location.hash || "").slice(1));
    var lab = id && document.getElementById(id);
    if (lab && lab.tagName === "DETAILS") {
      lab.open = true;
      lab.scrollIntoView();
    }
  }
  window.addEventListener("hashchange", openFromHash);
  openFromHash();
})();
