# CLAUDE.md

Guidance for Claude Code working in this repository.

## What this is

Abhishek Benny's personal portfolio. Next.js 14, **Pages Router**, static-exported
to GitHub Pages. Two designs live here side by side right now:

- **`/` (legacy)** — the original dark site: black ground, yellow accents,
  uppercase mono captions, 12-column grid.
- **`/v5` (new)** — a light-first redesign built in this session. This is the
  direction the site is moving in.

Both are live simultaneously and deliberately. `/v5` is not finished enough to
replace `/` yet (see [Open work](#open-work)).

## Commands

```bash
npm run dev      # http://localhost:3000/portfolio/  (note the basePath)
npm run build    # static export -> ./out
npm run lint
```

There is no test suite. `npm run build` is the real check — it lints, type-checks
and statically renders every route.

## Non-negotiable context: this repo is a fork

**This codebase began as Joseph Zhang's `portfolio-v4` template.** Abhi migrated
it by replacing titles and prose *first* and images *last*, so for a long stretch
many files held his writing wrapped around Joseph's images.

That migration was completed in this session, but the rule that made it safe
still matters whenever you touch an old page:

> **Never judge ownership by filename.** Classify by prose and image path.

The clearest example: `skiff.js` contained Abhi's BookWorm Pavilion case study,
not anything about Skiff. It has since been renamed to `bookworm.js`. Deleting it
by name would have destroyed his own work.

Tells, if you ever meet an unmigrated file:

| Signal | Owner |
|---|---|
| "Carnegie Mellon" in prose, `josephz.notion.site` links | Joseph |
| `/work/{azuki,brain,metalink,pixelpush,plane,skiff,thinkspace,experiments}/` | Joseph |
| IDC / IIT Bombay, KMB, NUDES, CSMVS, Velammal, Tohoku | Abhi |

Full audit and reasoning: [`docs/provenance-audit.md`](docs/provenance-audit.md).
All of Joseph's pages and assets have been deleted — nothing of his ships. Don't
reintroduce them.

## Architecture

### The two-shell split

`pages/_app.js` chooses a wrapper by route prefix:

```js
const isV5 = router.pathname.startsWith('/v5');
const Shell = isV5 ? React.Fragment : Page;
```

`components/Page.js` is the legacy shell (black background, `Navbar`, `Footer`).
`/v5` routes bypass it entirely and render their own chrome via
`components/v5/V5Root.js`.

**Why:** the two designs have incompatible grounds — one is black with a sticky
dark navbar, the other is off-white with its own header. Sharing a shell would
have meant conditionals threaded through every legacy component. A single branch
in `_app.js` keeps the legacy site untouched and lets `/v5` evolve freely.

### Layout

```
pages/
  index.js            legacy home — 3 sections, hand-placed column grid
  v5/
    index.js          new home — sidebar filters + card grid
    [slug].js         new project page — static paths from the data file
    about.js
  <project>.js        legacy project pages (2140, bookworm, neydhal, ...)
components/
  Page.js Navbar.js Footer.js    legacy shell
  projects/                      legacy project primitives
  v5/                            V5Root, ThemeToggle, ProjectTile
data/v5-projects.js              single source of truth for /v5
styles/globals.scss              legacy styles (Tailwind + IBM Plex Sans)
styles/v5.scss                   v5 design tokens, scoped under .v5-root
```

`data/v5-projects.js` drives everything on `/v5`: the grid, the sidebar counts,
the filters, and `getStaticPaths` for project pages. Add a project there, not in
JSX.

**Why a data file:** the legacy `index.js` encodes layout by hand — each card
carries an explicit `column` number and an IIFE distributes them round-robin
across three columns. It works, but adding a project means editing layout logic.
The v5 grid is a plain CSS grid fed by an array, so adding a project is a data
edit.

### v5 design system

Details in [`docs/v5-design-system.md`](docs/v5-design-system.md). The short
version: CSS custom properties on `.v5-root`, redefined under
`[data-v5-theme='dark']`. Components read tokens (`var(--v5-text)`), never
literal colors — so a component is written once and works in both themes.

Tailwind is available on `/v5` for layout only (flex, grid, spacing). Color,
type and surface treatment come from `v5.scss` classes.

## Conventions

**Placeholder images.** `/placeholder.svg` renders a dashed "Image pending" box.
Pages that lost Joseph's images use it. Treat any `placeholder.svg` reference as
an open TODO — it means real artwork was never supplied, not that the slot is
decorative.

**Absolute asset paths.** Prefer `src="/work/erss/erss1.svg"` over
`import x from '../public/...'`. Static imports of SVG through `next/image` work
but are fragile under `output: 'export'`, and the string form survives file moves.

**Comments explain why.** The codebase has a habit of block comments above
non-obvious logic (see the column-allocation comment in `pages/index.js`). Keep it.

## Gotchas

**`basePath: '/portfolio'`.** Every URL is prefixed. Local dev is
`http://localhost:3000/portfolio/`, *not* `http://localhost:3000/`. Hitting the
bare root gives a 404 and looks like a broken build.

**`output: 'export'`.** Fully static. No SSR, no API routes at runtime, no
`getServerSideProps`. `output: 'export'` requires images to bypass the built-in
optimizer, satisfied here by a **custom loader**, not `unoptimized: true`.
`pages/api/hello.js` is a leftover and does nothing in production.

**Image URLs need the basePath applied manually.** `next/image` does not prefix a
raw `src` with `basePath`, and `images.unoptimized: true` makes it skip the loader
entirely and emit `src` verbatim — which 404s everything under `/portfolio`. So
`unoptimized` is off and `image-loader.js` does the prefixing once. Keep its
`BASE_PATH` in sync with `basePath` in `next.config.js`, and leave `src` values in
`data/` basePath-free.

**Never run `npm run build` while `npm run dev` is running.** `next build` replaces
`.next` with production output; the live dev server then serves 500s on most routes
and a bogus 404 on others. Recovery: stop dev, `rm -rf .next`, start dev again.

**Line endings.** The working tree is CRLF, but files edited from a Linux
environment get rewritten as LF, which makes `git status` show whole files as
changed when only a line or two moved. If the diff looks absurd, that's why. A
`.gitattributes` with `* text=auto` would settle this permanently — not yet added.

**Platform-locked `node_modules`.** Next resolves a native SWC binary per
platform. A `node_modules` installed on Windows cannot build or even start `dev`
on Linux; it fails with "Failed to load SWC binary for linux/x64" and tries to
download a replacement. Build on the platform you installed on, or reinstall.

**Google Analytics** is hardcoded as `G-YSX5R91XDE` in `_app.js` *and* referenced
via `NEXT_PUBLIC_GOOGLE_ANALYTICS` in `.env.local.txt`. The hardcoded value is the
one that runs. Don't add a third copy.

## Deployment

`.github/workflows/deploy.yml` — push to `main` triggers `npm ci && npm run build`
on ubuntu-latest and publishes `./out` to GitHub Pages. A build failure blocks
the deploy, so a broken route is caught before it ships.

## Open work

1. **Real images.** `bookworm`, `2140`, `neydhal`, `velammal` and `data` render
   placeholders. Their prose is Abhi's and final; only artwork is missing.
2. **The art archive.** `pages/art.js` is a stub — its ten cards were all
   Joseph's and pointed at deleted routes. `/v5/art` doesn't exist yet.
3. **Case-study bodies.** Most `/v5` projects have `feed: []`, so their pages say
   "Case study coming soon". Only `nhai`, `erss`, `darkpatt` and `playo` have real
   image sequences wired up.
4. **The cutover.** When `/v5` is ready, `pages/v5/index.js` becomes
   `pages/index.js`, the legacy pages and `Page.js` shell retire, and the
   `_app.js` branch goes away.
5. **`.gitattributes`** for the line-ending problem above.
