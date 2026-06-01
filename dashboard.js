// ── Spark bars (value prop panel) ─────────────────────────────
(function () {
  const spark = document.getElementById('spark');
  if (!spark) return;
  [34, 52, 40, 66, 58, 80, 72, 92].forEach(h => {
    const bar = document.createElement('i');
    bar.style.height = h + '%';
    spark.appendChild(bar);
  });
})();

// ── Project bar chart (card 1) ─────────────────────────────────
document.querySelectorAll('.viz.bars').forEach(viz => {
  [42, 64, 50, 78, 60, 90, 72].forEach(h => {
    const bar = document.createElement('i');
    bar.style.height = h + '%';
    viz.appendChild(bar);
  });
});

// ── Scrollspy (sidebar active state) ──────────────────────────
const navLinks = Array.from(document.querySelectorAll('#nav a'));
const targets  = navLinks.map(a => document.querySelector(a.getAttribute('href')));

function scrollspy() {
  const y = window.scrollY + 160;
  let idx = 0;
  targets.forEach((sec, i) => { if (sec && sec.offsetTop <= y) idx = i; });
  navLinks.forEach((a, i) => a.classList.toggle('active', i === idx));
}

window.addEventListener('scroll', scrollspy, { passive: true });
scrollspy();
