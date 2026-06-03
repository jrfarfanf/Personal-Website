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

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    navLinks.forEach(a => a.classList.remove('active'));
    const link = document.querySelector(`#nav a[href="#${entry.target.id}"]`);
    if (link) link.classList.add('active');
  });
}, { rootMargin: '-50% 0px -50% 0px' });

targets.forEach(sec => { if (sec) observer.observe(sec); });
