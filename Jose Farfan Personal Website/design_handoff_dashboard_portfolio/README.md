# Handoff: BI Portfolio — "The Dashboard" Style

## Overview
A single-page personal portfolio for **Jose Rafael Farfan Fernandez** (Senior Business Intelligence Analyst & Data Strategist), designed for technical recruiters, hiring managers and data executives. The "Dashboard" direction frames his career like a modern BI product (think Power BI / SaaS admin): a fixed left sidebar, KPI tiles, a value-prop panel, a skills matrix, modular experience cards, project cards with mini data-viz, and a contact panel. It communicates precision and logic — the candidate literally presents himself as something he'd build.

## About the Design Files
The file in `reference/dashboard.html` is a **design reference created in HTML** — a working prototype showing the intended look, layout and behavior. It is **not** meant to be shipped verbatim. Your task is to **recreate this design inside your existing codebase** using its established patterns, component library and conventions. If the project doesn't have a framework set up yet, pick the most appropriate one (the prototype is plain HTML/CSS/JS, so a static site, Astro, or a single React/Vue route would all work well) and implement it there.

That said, this prototype is intentionally close to production: all CSS is hand-written with design tokens (no framework), markup is semantic, and the JS is ~30 lines of vanilla. You can lift tokens, structure and interaction logic directly — just re-express them in your stack's idioms (components, CSS modules / Tailwind / styled-components, etc.).

## Fidelity
**High-fidelity (hifi).** Final colors, typography, spacing, shadows and interactions are all specified below and present in the reference file. Recreate the UI pixel-accurately, then wire it to real data/links.

---

## Screens / Views
Single scrolling page, two-column app shell.

### Layout shell
- Root is `display: grid; grid-template-columns: 272px 1fr; min-height: 100vh;`
- **Left column** = fixed/sticky sidebar (`position: sticky; top: 0; height: 100vh`), white surface, 1px right border, internal padding `26px 22px`, vertical flex.
- **Right column** = `.main`, scrolling content area, padding `30px 38px 60px`, with a **subtle data-matrix grid background** (see Design Tokens → Background grid).
- **Responsive:** at `≤980px` the grid collapses to one column and the sidebar becomes a horizontal top bar (flex-wrap row); at `≤620px` content padding shrinks and KPI/skills/project grids stack to one column.

### 1. Sidebar (persistent nav)
- **Brand block (top):** 48×48 avatar photo, `border-radius: 11px`, `1.5px solid` burgundy border; next to it name `Jose R. Farfan` (14.5px / 700) and role `Senior BI Analyst` (11.5px, muted). Bottom border `1px` separates it.
- **Status line:** 7px green dot with a 3px green halo (`box-shadow: 0 0 0 3px good-dim`) + text `Available · UK & International` (11.5px muted).
- **Nav list:** label `WORKSPACE` (10px, 600, letter-spacing .14em, faint). Items: Overview, Skills Matrix, Experience, Projects, Contact. Each link: `padding: 9px 12px`, `border-radius: 9px`, 13.5px / 500, muted. **Hover:** `surface-2` bg + text darkens. **Active:** `accent-dim` bg + burgundy text + 600 weight. Active state is driven by scroll position (scrollspy).
- **Footer (pushed to bottom with `margin-top:auto`):** primary button `LinkedIn ↗` (burgundy fill) and ghost button `Download CV` stacked, full width.

### 2. Topbar + KPI tiles (`#overview`)
- **Topbar:** breadcrumb `Portfolio / Overview` (12px faint, "Portfolio" bolded muted), then `<h1>` full name (26px / 700, letter-spacing −.02em). Right side: two "pills" (rounded 100px, 1px border, white): `● Senior BI Analyst & Data Strategist` and `🇬🇧 EN Fluent · 🇻🇪 ES Native`.
- **KPI row:** 4 equal cards (`grid-template-columns: repeat(4,1fr); gap:16px`). Each tile: white surface, 1px border, `border-radius:14px`, padding `18px 20px`, `shadow-sm`, with a **decorative accent-dim circle** bleeding off the top-right corner (`::after`, 70px, accent-dim). Content: uppercase label (11px, faint), big value (30px / 700, letter-spacing −.03em) where the unit/suffix is a 16px burgundy `<span>`, and a 12px muted subline.
  - Experience → `8` `+ yrs` / "in BI & data strategy"
  - Reach → `2` `continents` / "UK & Latin America"
  - Org scale → `£25` `B+` / "FMCG org (BAT)"
  - Foundation → `Mech.` / "Engineering degree"

### 3. Value-prop panel
- White card, padding `30px 32px`, `grid-template-columns: 1fr auto` (text + sparkline).
- Headline (22px / 600, line-height 1.4): "I turn complex operational and financial data into **scalable models and dashboards** that give executives the insight to make data-driven decisions." — the bold phrase is burgundy / 700.
- Subline (13.5px muted): mechanical-engineering note.
- **Sparkline:** flex row of vertical bars, 84px tall, 13px wide each, `border-radius: 4px 4px 2px 2px`, filled with a vertical gradient `accent-2 → accent`, `opacity:.85`. Bar heights are injected by JS: `[34,52,40,66,58,80,72,92]%`.

### 4. Skills Matrix (`#skills`)
- Section head: title `04  Skills Matrix` where `04` is a small burgundy tag chip (10px, accent-dim bg, `border-radius:6px`); right side note "Grouped by capability" (12px faint).
- **Matrix:** `grid-template-columns: repeat(3,1fr); gap:16px`, 6 cards. Each card (`.mtile`, white, padded 20px) has an uppercase title (11px / 700, letter-spacing .1em) prefixed by a 9px burgundy rounded square, then a wrapped chip group.
- **Chips:** 12.5px / 500, `surface-2` bg, 1px border, `padding:5px 11px`, `border-radius:7px`. **Hover:** border + text turn burgundy, bg → accent-dim. A `.solid` variant (e.g. "Power BI", "PL-300 · in progress") is pre-filled burgundy/accent-dim with no border.
- Groups & members:
  - **BI & Visualization:** Power BI*, DAX, Power Query (M), Data Modeling, KPI Design, Data Storytelling
  - **Data Engineering:** SQL, MySQL, Apache PySpark, ETL Pipelines, Data Cleansing, Data Governance
  - **Cloud & Delivery:** Azure DevOps, Azure Synapse, Agile / Scrum, Sprint Planning, Backlog Mgmt
  - **Analytics & Methods:** Root Cause Analysis, Continuous Improvement, Lean, SPC, Design Thinking
  - **Productivity:** Excel (Advanced), SharePoint, AI Literacy, Prompt Engineering
  - **Credentials:** PL-300 · in progress*, PySpark · LinkedIn, PM Cert, DP-900 · planned
  - (* = `.solid` chip)

### 5. Experience (`#experience`)
- Section head: `02  Experience` + note "8 years · two continents".
- **Grid:** `repeat(2,1fr); gap:16px`. The first card spans both columns (`grid-column: span 2`).
- **Card (`.exp`):** white, 1px border, `border-radius:14px`, padding `22px 24px`, vertical flex, `gap:12px`. **Hover:** `shadow-md` + `translateY(-2px)`.
  - Top row: company (12px / 600, burgundy) left, date+location (11px faint, `white-space:nowrap`) right.
  - Role (16px / 700), a faint location/context subline (11.5px), paragraph (13px muted, line-height 1.6), and a chip row pinned to the bottom (`margin-top:auto`, smaller 11px chips).
  - `.muted` variant dims the company color (for older roles).
- Entries: Biffa (Senior BI Analyst, current, span-2) · BAT Southampton (BI Executive) · BAT Venezuela (BI Engineer) · ASIS Consulting (BI Developer, muted) · 3D Tech / Pressure Vessels (Engineering Foundation, muted). Full copy is in the reference file.

### 6. Projects (`#projects`)
- Section head: `03  Projects` + note "Selected BI deliveries".
- **Grid:** `repeat(3,1fr); gap:16px`. Each `.proj` card: white, 1px border, `border-radius:14px`, overflow hidden, column flex, `cursor:pointer`. **Hover:** `shadow-md` + `translateY(-3px)`.
  - **`.viz` header** (118px tall, `surface-2`, bottom border) carries a mini chart + a tiny uppercase label (`.vlabel`, 9.5px faint, absolutely positioned top-left):
    - Card 1 `bars`: flex row of bars (heights `[42,64,50,78,60,90,72]%` injected by JS), gradient `accent-2→accent`.
    - Card 2 `line`: inline SVG polyline (burgundy stroke 3px) + filled area (accent at 7% alpha), `preserveAspectRatio="none"`.
    - Card 3 `donut`: inline SVG ring, burgundy arc `stroke-dasharray="72 100"`, rounded cap, rotated −90°.
  - **Body:** uppercase company·year (10.5px faint), title (15px / 700), description (12.5px muted), small chip row, and an **impact line** pinned to bottom above a 1px top border: a green `↑` + text. Estimated metrics are wrapped in `.est` (see below).
- Projects: Biffa Sales Performance Dashboard · BAT Global WPI Reporting Framework · BAT Manufacturing KPI Suite.

### 7. Contact (`#contact`)
- Full-width card, padding `34px 36px`, subtle `linear-gradient(120deg, surface, surface-2)`, space-between layout.
- Left: `Let's talk data.` (22px / 700) + supporting line (13.5px muted, max-width 440px).
- Right: primary `Connect on LinkedIn ↗` + ghost `jrfarfanf@gmail.com` (mailto).

---

## Interactions & Behavior
- **Scrollspy (sidebar active state):** on scroll, compute `window.scrollY + 160`; the last nav target whose `offsetTop` is ≤ that value gets `.active`. Plain vanilla, see `<script>` in reference. Re-implement with your router/IntersectionObserver if preferred.
- **Smooth scrolling:** `html { scroll-behavior: smooth; }` + anchor links to section IDs. Each section has `scroll-margin-top` so it isn't hidden under the top bar on mobile.
- **Sparkline & bar charts:** heights injected on load via JS (arrays listed above). These are decorative; if you have real data, drive them from it.
- **Hover transitions:** all interactive elements use ~`.16s`–`.18s` ease. Cards lift on hover (`translateY` −2/−3px) and gain a larger shadow. Buttons lift 1px; primary button gains a burgundy glow shadow.
- **Estimated-metric affordance:** spans with class `.est` render a dotted bottom border + a tiny superscript `est`; a legend below the projects grid explains them. **These numbers (~8 hrs/week, −~30%, 12 countries, ~3× faster) are placeholders** — replace with Jose's real figures and drop the `.est` treatment once confirmed.
- **Responsive:** see breakpoints in shell description. No JS needed for layout — pure CSS grid/flex.

## State Management
Minimal. The prototype is essentially static.
- `activeSection` — derived from scroll position (drives sidebar highlight). In React, an `IntersectionObserver` in a `useEffect` is the clean equivalent.
- Optional: chart data arrays if you wire real values into the sparkline / project viz.
- No data fetching required; all content is static copy. If the CV download and contact details should be dynamic, source them from your content layer/CMS.

## Design Tokens
Lift these directly (they're the `:root` variables in the reference file).

**Colors**
| Token | Value | Use |
|---|---|---|
| `--bg` | `#F6F7F9` | page background |
| `--surface` | `#FFFFFF` | cards, sidebar |
| `--surface-2` | `#FBFBFC` | chips, viz headers, insets |
| `--border` | `#E7E9EE` | all 1px borders / dividers |
| `--text` | `#15181E` | primary text (deep slate, not black) |
| `--muted` | `#5C6470` | secondary text |
| `--faint` | `#8A93A0` | labels, meta |
| `--accent` | `#7A1228` | **redwine/burgundy** — primary buttons, active, accents |
| `--accent-2` | `#9B2335` | gradient partner for charts |
| `--accent-dim` | `rgba(122,18,40,.07)` | active/hover tints, decorative circle |
| `--good` | `#0F7A52` | positive impact `↑`, status dot |
| `--good-dim` | `rgba(15,122,82,.10)` | status dot halo |
| `--amber` | `#9A6B00` | reserved (unused in final) |

**Typography**
- Body / UI: **Inter** — weights 400, 500, 600, 700. (`system-ui` fallback.)
- Mono accents: **JetBrains Mono** — weights 400, 500 (available via `.mono`; used sparingly).
- Key sizes: H1 26px/700 · section title 15px/700 · KPI value 30px/700 · value-prop 22px/600 · role 16px/700 · body 13–14px · labels 10–12px. Negative letter-spacing (−.01 to −.03em) on headings.
- Line-height: 1.6 base, 1.4–1.75 on prose blocks.

**Radius:** `--r: 14px` (cards), `--r-sm: 9px` (buttons, nav items, insets); chips 6–7px; pills 100px; avatar 11px.

**Shadows**
- `--sh-sm: 0 1px 2px rgba(16,20,30,.05), 0 1px 3px rgba(16,20,30,.04)`
- `--sh-md: 0 6px 18px -6px rgba(16,20,30,.12), 0 2px 6px -2px rgba(16,20,30,.06)`
- `--sh-lg: 0 18px 40px -12px rgba(16,20,30,.18)`

**Spacing:** card padding 18–32px; section bottom margin 30px; grid gaps 16px; sidebar padding `26px 22px`; main padding `30px 38px`.

**Background grid (data-matrix):** on `.main` —
```css
background-image:
  linear-gradient(rgba(16,20,30,.022) 1px, transparent 1px),
  linear-gradient(90deg, rgba(16,20,30,.022) 1px, transparent 1px);
background-size: 46px 46px;
```

**Layout constants:** sidebar width `272px`; breakpoints `980px` (collapse shell) and `620px` (stack grids). Min hit target 44px on buttons.

## Assets
- `reference/assets/profile.png` — Jose's professional headshot (square, ~1×1). Used as the 48px sidebar avatar (rounded square, burgundy border). This is the user's own photo; carry it into your asset pipeline.
- **Icons:** the design uses Unicode glyphs only (↗ ↑ ● 🇬🇧 🇻🇪) — no icon library required. Swap for your icon set if you have one.
- **Fonts:** Inter + JetBrains Mono via Google Fonts (`<link>` in `<head>`). Self-host or use your font loader as appropriate.

## Files
- `reference/dashboard.html` — the complete, self-contained prototype (inline CSS + ~30 lines vanilla JS). Open it in a browser to see the live target. This is the source of truth for spacing, color and behavior.
- `reference/assets/profile.png` — headshot used in the design.

## Implementation notes / TODO for the developer
1. Replace placeholder **`.est` metrics** with real figures (and remove the dotted/`est` treatment once confirmed).
2. Wire **`Download CV`** buttons (currently `href="#"`) to the real PDF.
3. Confirm the **LinkedIn URL** (`linkedin.com/in/jose-rafael-farfan`) and **email** (`jrfarfanf@gmail.com`).
4. Decide whether the project cards link to case-study detail pages (they're styled as clickable but currently inert).
5. Keep the deep-slate-not-black text and burgundy accent — those are the identity of this direction.
