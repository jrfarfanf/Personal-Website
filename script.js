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

// ── Skills: on phones, first few chips per tile and the rest on demand ──
// Desktop and tablet show every skill, so a recruiter's Ctrl+F finds them.
// One toggle state for the whole grid, so every tile opens and closes together.
(function () {
  const es = document.documentElement.lang === 'es';
  const phone = window.matchMedia('(max-width: 620px)');
  const groups = [];
  document.querySelectorAll('.chips[data-visible]').forEach(box => {
    const extra = Array.from(box.children).slice(Number(box.dataset.visible));
    if (extra.length < 2) return;
    const btn = document.createElement('button');
    btn.type = 'button';
    btn.className = 'more-toggle';
    box.after(btn);
    groups.push({ extra, btn });
  });
  const render = open => groups.forEach(({ extra, btn }) => {
    btn.hidden = !phone.matches;
    extra.forEach(c => { c.hidden = phone.matches && !open; });
    btn.setAttribute('aria-expanded', String(open));
    btn.textContent = open ? (es ? 'Ver menos' : 'Show less')
                           : (es ? `Ver ${extra.length} más` : `Show ${extra.length} more`);
  });
  let open = false;
  groups.forEach(({ btn }) => btn.addEventListener('click', () => { open = !open; render(open); }));
  phone.addEventListener('change', () => render(open));
  render(false);
})();

// ── Project visuals: one-time entrance animation when scrolled into view ──
(function () {
  const vizzes = document.querySelectorAll('.viz');
  if (!('IntersectionObserver' in window)) {
    vizzes.forEach(v => v.classList.add('in-view'));
    return;
  }
  const io = new IntersectionObserver(entries => entries.forEach(e => {
    if (!e.isIntersecting) return;
    e.target.classList.add('in-view');
    io.unobserve(e.target);
  }), { threshold: 0.15 });
  vizzes.forEach(v => io.observe(v));
})();
