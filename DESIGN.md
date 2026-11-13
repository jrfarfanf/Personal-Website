# Design: look, feel and user experience

*Created 12 November 2026.* This is the source of truth for how josefarfan.com looks and behaves. CONSISTENCY.md owns the facts (titles, dates, numbers); this file owns the presentation. It replaces the June prototype notes in `design_handoff_dashboard_portfolio/`, which describe an older version.

When a design change is made, update this file in the same commit.

## 1. Who the site is for

| Reader | Time they give it | What they must find |
|---|---|---|
| **Recruiter or sourcer** | Under a minute, often on a phone from a LinkedIn link | Name, headline, location, work authorization, employers and dates, a résumé to download, a way to make contact |
| **Hiring manager** | Three to five minutes, on a desktop | Proof: what was built, for whom, and what changed because of it, with numbers they can question in an interview |
| **Search engines and link previews** | n/a | Title, description, structured data and a preview image that match the page |

The site has one job: get the reader to download the résumé or make contact. Every design decision is judged against that.

## 2. Experience principles

1. **The first screen answers the recruiter.** Name, headline, location, authorization, the three contact actions and four results are visible without scrolling on a laptop.
2. **Results before explanation.** Every card leads with the outcome and its number. How it was done sits one click away.
3. **Nothing essential sits behind a click.** Assume most visitors never expand anything. A toggle may hide detail, never the point.
4. **Everything is findable.** On desktop and tablet all skills are on the page, so a browser search for "SAP" or "Python" finds them.
5. **Only real controls look clickable.** Cards and chips do not lift, glow or change color on hover; links and buttons do.
6. **Restraint reads as senior.** One accent color, one typeface, generous space, no decoration that doesn't carry information.
7. **Illustrations are labeled.** Employer data is confidential, so project visuals are simplified drawings with sample values and say so.
8. **Both languages are the same site.** Any change ships in English and Spanish together.

## 3. Page structure

The order is fixed. Each section exists to answer one question.

| # | Section | Question it answers | Always visible | Behind a toggle |
|---|---|---|---|---|
| – | **Header** | Who is this and can I reach them? | Discipline line, name, headline, Download résumé (primary), LinkedIn, Email, location and authorization pill, language switch | – |
| – | **Result tiles** (4) | Is this person worth a minute? | Four numbers, each with a one-line source. Labels and order mirror the summary headline: Revenue recovery, Cost savings, Process improvement, Adoption | – |
| – | **Career strip** | Where have they worked, and when? | Total years, then one cell per employer: name, title, years. Each cell jumps to that role | – |
| 01 | **Summary** | What do they do, in their own words? | One headline sentence, one short paragraph, and a facts list (tools, industries, regions, languages) | – |
| 02 | **Projects** (3) | Can they prove it? | Title, three numbers, the impact sentence, tools, an illustration | Problem, approach and how the numbers were calculated |
| 03 | **Experience** | What exactly did they do in each job? | Employer, dates, place, official title, the two or three strongest bullets, tools | Remaining bullets |
| 04 | **Skills** | Do they have the keywords for this role? | Every skill, one row per capability (desktop and tablet) | On phones only: skills beyond the first three or four per group |
| 05 | **Education** | Degree and recognition? | Degree, institution, years; awards | Course list |
| – | **Contact** | How do I get in touch? | What roles they are open to, LinkedIn, email, résumé in PDF and Word, authorization, phone | – |

**Project order:** most recent and largest first, then the manufacturing project, then the tool. Most target employers are manufacturers, so the manufacturing project must not be last.

**Sidebar (desktop):** photo, name, headline, status, authorization (two fixed lines: "Authorized to work in the US" / "No sponsorship required"), section links that track the scroll position, then Download résumé (primary), LinkedIn and GitHub. It stays on screen while the page scrolls, so the résumé is always one click away.

## 4. Visual language

### Color

One accent, used sparingly. Green appears only for status and for improvement arrows.

| Token | Value | Use |
|---|---|---|
| `--bg` | `#F6F7F9` | Page background |
| `--surface` | `#FFFFFF` | Cards, sidebar |
| `--surface-2` | `#FBFBFC` | Chips, illustration panels, hover on links inside cards |
| `--border` | `#E4E7EC` | Hairlines and card borders |
| `--text` | `#15181E` | Headings, numbers, primary text |
| `--muted` | `#5C6470` | Body text |
| `--faint` | `#697180` | Labels and dates. Passes WCAG AA (4.5:1) on every surface |
| `--accent` | `#7A1228` | Burgundy: primary button, emphasized words, markers, the first career cell |
| `--accent-dim` | accent at 7% | Section number tags, featured chips, active nav item |
| `--good` | `#0F7A52` | Status dot, authorization note, up/down improvement arrows |

Do not add a second accent, gradients on text, employer logos or colored section backgrounds.

### Type

Inter, self-hosted (one variable file, weights 400–700). No second typeface.

| Role | Size / weight | Notes |
|---|---|---|
| Name (h1) | 36px / 700 | Letter-spacing −0.03em. 28px on phones |
| Summary headline | 25px / 600 | Accent color on the two key phrases only. 20px on phones |
| Result numbers | 34px / 700 | Tabular figures, unit in accent at 17px |
| Section heading (h2) | 18px / 700 | Preceded by a small numbered tag |
| Card title | 17.5–19px / 700 | Job titles and project titles |
| Body | 14–14.5px / 400 | Line height 1.55–1.68 |
| Secondary | 12.5–13px | Dates, places, captions, chips |
| Micro label | 11–11.5px / 600, uppercase, tracked | Tile labels, discipline line, facts labels. Never used for a sentence |

Nothing a reader needs is smaller than 12.5px. Uppercase is reserved for micro labels.

### Space, shape and depth

- **Grid:** content is capped at 1180px and centered in the area right of the 272px sidebar. Gutters 44px desktop, 28px tablet, 16px phone.
- **Rhythm:** 46px between sections, 16px between cards in a group, 26–40px padding inside cards.
- **Corners:** 16px on cards, 10px on buttons and small tiles, 7px on chips, full round on pills.
- **Depth:** one soft shadow for all cards. No hover lift. The background carries a very faint grid as a nod to a report canvas; it must stay barely visible.

## 5. Components

- **Buttons.** Primary = solid accent, white text; one per group, and it is always the résumé (LinkedIn in the contact card). Ghost = white with a hairline border. Minimum height 42px, 44–48px on phones.
- **Result tile.** Short accent rule, micro label, big number, one-line source. No decorative shapes.
- **Career strip.** A solid accent header band over four equal employer cells. The band holds the title ("Career timeline · most recent first") and the totals ("10+ years across engineering and data · 7+ years in BI and data analytics") in one left-aligned line, separated by dots; at 1280px and below the totals drop to a second line. The cells link to the roles and share one three-row grid (name / role / years), so each line sits level across the strip. The last cell is labeled "Early career", not an employer. Names and roles never wrap on desktop: four cells across above 1280px, two by two at 1280px and below. This is the one place that says "British American Tobacco" without "BAT", so the name fits on one line.
- **Summary card.** Two columns: statement on the left, facts list on the right, divided by a hairline. Stacks on tablet and phone. No decorative charts.
- **Project card.** Text left, illustration right (illustration on top on tablet and phone). Order inside the text: employer and years, title, three number tiles, Impact, "Problem & approach" toggle, tool chips.
- **Experience card.** Employer and dates on one line, official title, one-line context, bullets, "Show N more" toggle, tool chips. The most recent role spans the full width.
- **Skills.** One card, one row per capability: label on the left, chips on the right. Featured chips (top skills) use the accent tint. On phones each capability becomes its own tile with a shared "Show N more" toggle.
- **Chips.** Labels, not controls: no hover state, default cursor.
- **Toggles.** Text links in accent with an arrow that flips. Labels say what will appear ("Problem & approach", "Show 4 more", "Show 4 courses").

## 6. Responsive behavior

| Width | Layout |
|---|---|
| Above 980px | Sidebar on the left, sticky. Tiles in a row of four. Projects text-left, illustration-right. Experience in two columns |
| 621–980px | Sidebar becomes a top bar. Tiles two by two. Career strip two columns. Cards single column. Skills stay as rows |
| 620px and below | Top bar shows photo, name and LinkedIn, with a row of labeled section tabs underneath. Résumé button full width under the name, then LinkedIn and Email side by side. Section side notes are hidden. A résumé bar slides up from the bottom once the header button scrolls away |

Check every change at 1440px, 768px and 390px.

## 7. Motion

- Project illustrations build once when they scroll into view, in about half a second. They never start empty for longer than that.
- The primary button shifts 1px and gains a shadow on hover. Nothing else moves.
- With "reduce motion" set, or without JavaScript, or in print, everything shows in its final state.

## 8. Accessibility

- Text contrast meets WCAG AA on every surface; the accent on white is above 10:1.
- A "Skip to content" link, visible focus rings, labeled navigation, and real headings in order (h1 → h2 → h3).
- Buttons and navigation links are at least 36px high, 44px for primary actions on phones.
- Every illustration has a text title and description. Decorative icons are hidden from screen readers.
- The page works without JavaScript: all content is visible, all links work.

## 9. Writing on the page

- Lead with the result and the number. Use approved numbers and wording from CONSISTENCY.md only.
- Employer names are written for a US reader: "Biffa Waste Services" and "BAT (British American Tobacco)" wherever the layout has room (card headers, career strip, project labels, awards); the short form only inside sentences.
- Official job titles are never altered. A short note may translate a title that means something different in the US.
- Sentence case for headings and buttons. "Résumé" in English; "CV" in Spanish.
- Mark estimates with "~" or "about". Say "flagged", not "recovered", for the contract revenue figure.
- No employer data, screenshots or logos.

## 10. Technical constraints

- Plain HTML, CSS and JavaScript. No framework, no build step, no third-party scripts or fonts.
- English at `/`, Spanish at `/es/`, sharing `styles.css` and `script.js`.
- Design values live as CSS variables at the top of `styles.css`. Change a token there, not in individual rules.
- The link-preview image (`assets/og-image.jpg`) contains the headline as text. If the headline changes, the image must be redrawn.

## 11. Before publishing a change

- [ ] English and Spanish both updated.
- [ ] Checked at 1440px, 768px and 390px.
- [ ] First screen still shows name, headline, location, authorization, résumé button and the four result tiles.
- [ ] No new number or claim that isn't in CONSISTENCY.md.
- [ ] Résumé link downloads the current file, and its phone, dates and titles match the page.
- [ ] `dateModified` in the structured data and `lastmod` in the sitemap updated.
- [ ] This file updated if the design changed.

## 12. Change log

| Date | Change |
|---|---|
| June 2026 | Original "dashboard" prototype: sidebar shell, tiles, burgundy accent |
| 4 Oct 2026 | Recruiter audit: new hero and tiles, project cards with illustrations, progressive disclosure, self-hosted font, Spanish at `/es/` |
| 13 Nov 2026 | Highlighted chips (accent fill) mark the most relevant skills and always come first, in role cards and in the Skills section; Excel added to every role. Data-flow diagram redrawn as three labeled columns (data sources → one source of truth → business units). MTBF chart now in months: about six months of baseline, then a sustained plateau |
| 12 Nov 2026 | Career strip: the summary cell is now a header band at every width, with a title, the reading order and the totals |
| 12 Nov 2026 | Career strip: last cell renamed "Early career"; summary cell all bold; names kept to one line at every desktop width (summary cell turns into a top band on narrower screens); summary paragraph reworded by the owner |
| 12 Nov 2026 | Result tiles renamed and reordered to mirror the headline (Revenue recovery, Cost savings, Process improvement, Adoption); career strip rebuilt on a shared row grid with equal employer cells; authorization note fixed to two lines; Microsoft Fabric added to Tools |
| 12 Nov 2026 | Employer names spelled out for US readers (Biffa Waste Services; BAT (British American Tobacco)); the BAT cell in the career strip is wider to fit |
| 12 Nov 2026 | Recruiter-first pass: action buttons under the name with the résumé as primary; career strip; impact shown and problem/approach behind the toggle; manufacturing project moved to second; skills as rows with everything visible on desktop; facts list replaces the decorative bars in the summary; larger type and more space; hover effects removed from non-clickable elements; faster illustration animation; labeled section tabs on phones |
