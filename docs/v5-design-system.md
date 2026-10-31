# v5 design system

The visual language of the `/v5` routes, and the reasoning behind it.

## Origin

Two reference screenshots set the direction, and the brief was to follow them
closely rather than interpret them:

- **Reference 1** — a template picker: off-white ground, a rounded white panel,
  a left sidebar with search and category list, a right grid of cards. Each card
  is a soft tile holding a category label and a centred thumbnail, with title and
  description below. → became **`/v5` (home)**.
- **Reference 2** — an updates feed: a sticky left author rail and a right
  chronological feed of dated entries with titles, images and body copy.
  → became **`/v5/[slug]` (project)** and **`/v5/about`**.

The legacy site is the opposite of both: black, uppercase, mono, dense. This is
a deliberate reversal, not a refinement.

## Decisions

**Light default, dark available.** Chosen by the user over going light-only.
Light matches the references; dark preserves the site's existing character and
suits the image-heavy project pages. Default resolves from
`prefers-color-scheme`, then a `localStorage` choice overrides it.

**Discipline tags over section headings.** The legacy home grouped work under
three long headings ("VR | UX Research | Design System"). `/v5` uses five short
tags — All, Design, Research, Art, Experiments — because a sidebar filter needs
labels that fit on one line and read as categories, not sentences.

**Tokens, not literals.** Every color is a CSS custom property. Components never
name a color directly. This is what makes one component definition serve both
themes, and it means retheming is a change in one block of `styles/v5.scss`.

**Inter.** The references are set in an Inter-like grotesque. The legacy site
uses IBM Plex Sans, still loaded for `/` — the two typefaces coexist because the
two designs are separate.

## Tokens

Defined on `.v5-root` in `styles/v5.scss`, redefined under
`[data-v5-theme='dark']`.

| Token | Light | Dark | Role |
|---|---|---|---|
| `--v5-ground` | `#f4f4f2` | `#0d0d0c` | the page ground |
| `--v5-surface` | `#f4f4f2` | `#0d0d0c` | same as ground, deliberately (see below) |
| `--v5-tile` | `#e8e8e4` | `#1a1a18` | card wells, figure backgrounds |
| `--v5-tile-hover` | `#e2e2dd` | `#201f1d` | card hover |
| `--v5-text` | `#1a1a18` | `#f2f2ef` | primary text |
| `--v5-text-mid` | `#6b6b66` | `#a3a39c` | body copy |
| `--v5-text-dim` | `#9a9a94` | `#6f6f68` | labels, counts |
| `--v5-line` | `rgba(0,0,0,.08)` | `rgba(255,255,255,.1)` | borders |
| `--v5-chip` | `rgba(0,0,0,.045)` | `rgba(255,255,255,.07)` | hover fills, inputs |
| `--v5-invert-bg` | `#1a1a18` | `#f2f2ef` | pill buttons, logo dot |
| `--v5-accent` | `#4c5bff` | same | links, focus rings |

The neutrals are warm — grounds sit slightly yellow-green of true grey. Pure
`#f5f5f5` reads clinical; the reference screenshots are warm, and the work
(architecture, exhibitions) sits better on a warm ground.

`--v5-ground` and `--v5-surface` hold the same value on purpose. Reference 1 had
the content sitting on a rounded, shadowed panel floating above a darker ground,
and that is how `/v5` was first built. Abhi rejected it: the ground showed as
rails down both sides and the page read as a floating card rather than a page.
So the shell went flat — `.v5-shell` has no background, border, radius or shadow,
and the two tokens were collapsed to one colour. `--v5-surface` is kept as a
separate name so a genuine raised surface can be reintroduced later without
re-threading every call site; nothing consumes it today.

Because the ground lightened from `#e9e9e6` to `#f4f4f2`, `--v5-tile` had to
darken (`#f2f2f0` → `#e8e8e4`) or the card wells would have vanished into it.
The dark theme moved the same way for the same reason.

`--v5-accent` is carried over from the legacy site's `#4C5BFF` link color — the
one piece of the old palette that survives.

## Classes

Type: `.v5-label` (11.5px, dim) · `.v5-body` (13.5px/1.62) · `.v5-title` (14px/500)
· `.v5-h` (15px/550, tight tracking).

Surfaces: `.v5-shell` (flat page shell, `min-height:100vh`) · `.v5-tile` ·
`.v5-feed-figure`.

Controls: `.v5-pill` (inverted, high emphasis) · `.v5-ghost` (transparent, low) ·
`.v5-search` · `.v5-nav-item` (takes `data-active`).

Card internals: `.v5-tile-card` is the hover root; `.v5-tile-thumb` dims and
lifts, `.v5-open` fades the "Open" pill in. Both driven from the parent so the
whole card is one hover target.

## Theme mechanics

`useV5Theme()` in `components/v5/ThemeToggle.js`:

1. Reads `localStorage['v5-theme']`, falling back to `prefers-color-scheme`.
2. Sets `data-v5-theme` and a `v5-page` class on `<html>`.
3. **Removes both on unmount.**

Step 3 matters. `html { background: #000 }` in `globals.scss` serves the legacy
site. `html.v5-page` overrides it so overscroll shows the off-white ground
instead of a black band. Without cleanup, client-side navigation from `/v5` back
to `/` would leave the legacy site wearing the v5 background.

`localStorage` access is wrapped in `try/catch` — it throws in private-mode and
storage-blocked contexts, and a portfolio must not white-screen over a theme
preference.

## Adding a project

Append to `projects` in `data/v5-projects.js`:

```js
{
  slug: 'mysore',                    // URL: /v5/mysore
  title: 'Mysore Transit',
  description: 'One line, shown under the card title',
  tag: 'Design',                     // must be one of TAGS
  kicker: 'Industry Collaboration',  // small label above the intro
  cover: '/work/mysore/cover.png',
  year: '2025',
  role: ['Service Design'],
  collaborators: ['—'],
  duration: '12 weeks',
  tools: ['Figma'],                  // optional
  intro: 'A sentence or two for the sticky rail.',
  feed: [
    { date: 'Research', title: 'Field study', images: seq('mysore', 'm', 6) },
  ],
}
```

The `seq(dir, prefix, count)` helper builds `/work/<dir>/<prefix>1.svg …`.

`feed` entries render as sections in the right column. `date` is a free-text
eyebrow — it holds phase names ("Research", "Outcome") rather than dates,
because these are case studies, not posts. The reference's chronology became
narrative order.

`href` overrides the generated route — use it to point at a legacy page or an
external URL (with `isExternal: true`). Entries carrying `href` are excluded
from `getStaticPaths`, so no empty `/v5/<slug>` page is generated.

## Known gaps

- No mobile nav for the sidebar — it becomes a horizontal scroller under 760px,
  which works but isn't considered.
- Card thumbnails are fixed at 62% width; very wide or very tall covers sit
  awkwardly. A per-project aspect hint would fix it.
- `/v5/art` doesn't exist. The Art card currently points at the legacy `/art`.
