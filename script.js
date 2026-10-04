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

// ── Mobile CV dock (reveals once the topbar CV button scrolls away) ──
(function () {
  const dock = document.getElementById('cvDock');
  const cta  = document.querySelector('.topbar-cta');
  if (!dock || !cta) return;

  const io = new IntersectionObserver(([entry]) => {
    const hidden = !entry.isIntersecting;
    dock.classList.toggle('show', hidden);
    dock.inert = !hidden;   // keep the hidden dock out of the tab order
  }, { threshold: 0 });

  io.observe(cta);
})();

// ── Skills: first few chips per tile, the rest on demand ──────
// One toggle state for the whole grid, so every tile opens and closes
// together and the rows stay symmetric. Without JS every chip is shown.
(function () {
  const es = document.documentElement.lang === 'es';
  const groups = [];
  document.querySelectorAll('.chips[data-visible]').forEach(box => {
    const extra = Array.from(box.children).slice(Number(box.dataset.visible));
    if (extra.length < 2) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'chip chip-toggle';
    box.appendChild(btn);
    groups.push({ extra, btn });
  });
  const render = open => groups.forEach(({ extra, btn }) => {
    extra.forEach(c => { c.hidden = !open; });
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? (es ? 'Ver menos' : 'Show less')
                           : (es ? `+${extra.length} más` : `+${extra.length} more`);
  });
  let open = false;
  groups.forEach(({ btn }) => btn.addEventListener('click', () => { open = !open; render(open); }));
  render(false);
})();
