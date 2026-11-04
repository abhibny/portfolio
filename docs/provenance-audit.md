# Provenance audit

## Correction after visual verification, 2026-11-04

The filename-based asset conclusions below were too broad. Visual inspection of
the files at `a7a1ae5^` confirmed that `skiff.jpg` and the images in `work/skiff`
show BookWorm Pavilion, `123.jpg` shows Neydhal, `plane.jpg` shows Data is the new
Art, and `aiga.jpg` / `aiga-square.jpg` show the Velammal landscape. These have
been recovered under project-specific filenames. The NewsScape summary and
concept images from `work/plane` were also verified and recovered; unrelated
task-management screenshots were excluded. The City of 2140 video was recovered
from its historical page reference. Do not replace these restored assets with
placeholders based on the older classifications below.

Record of which pages were Abhi's and which came from the template, how each was
decided, and what was done about it. Dated 2026-08-31.

## Why this exists

This repo is a fork of Joseph Zhang's `portfolio-v4`. The migration replaced
titles and prose first and images last, so ownership split down the middle of
many files. Filenames were the least reliable signal available: `skiff.js` held
Abhi's BookWorm Pavilion case study, while `lightengines.js` — which sounds like
his "Light Engines" work — was Joseph's Carnegie Mellon lamp brief.

Deleting by filename would have destroyed his own work. Keeping by filename would
have published someone else's. Every file was classified by reading its prose and
tracing its image paths.

## Method

Four signals, in order of reliability:

1. **Prose.** "my time at Carnegie Mellon's School of Design" is Joseph. "I
   worked on setting up the pavilion … 3,600 wooden components" is Abhi.
2. **Outbound links.** `josephz.notion.site`, `natural.ai`, `azuki.com`,
   `skiff.com` → Joseph. `kochimuzirisbiennale.org`, `csmvs.in`, `archdaily.com`
   (BookWorm/NUDES), `idc.iitb.ac.in` → Abhi.
3. **Image directory.** `/work/{azuki,brain,metalink,pixelpush,plane,skiff,thinkspace,experiments}/`
   are Joseph's. `/work/{nhai,erss,darkpatt,playo}/` are Abhi's.
4. **Filename.** Effectively worthless here. Used only to break ties.

## Findings

### Fully Abhi's — kept as-is
`index` · `nhai` · `erss` · `darkpatt` · `playo`

### Abhi's writing, Joseph's images — kept, images replaced

| Page | Evidence of ownership | Borrowed asset |
|---|---|---|
| `2140` | "City of 2140: New York", Kim Stanley Robinson, parametric thesis | cover `thinkspace.mp4`, josephz.notion.site links |
| `skiff` → `bookworm` | BookWorm Pavilion, NUDES Mumbai, Dezeen + ArchDaily links | all `/work/skiff/` images |
| `velammal` | "The Velammal Landscape Project…" | cover `aiga.jpg` |
| `neydhal` | Neydhal, KMB 2023, coastal community | cover `apple.mp4` |
| `data` | "Data is the new ART", hourly news as art pieces | `/work/plane/` images |
| `dessys` `vr` `techniques` | one-line stubs Abhi wrote | heroes `metalink.jpg`, `plane.jpg`, `LE-1.jpg` |

Images swapped for `/placeholder.svg`. Prose untouched.

### Fully Joseph's — deleted
`azuki` · `pixelpush` · `metalink` · `brain` · `lightengines` · `sensors`

`art.js` was Abhi's page shell, but all ten cards were Joseph's projects linking
to routes now deleted. Rewritten as a stub.

### Duplicates and scratch — deleted
- `city` — byte-identical to `2140` but for the function name
- `bookworm` — near-identical to `skiff`, but *less* complete: `skiff` carried
  the Dezeen and ArchDaily `LinkCard`s. The better copy was kept and renamed;
  the worse one was deleted.
- `dark-patterns` — a one-line re-export of `darkpatt`
- `extra` — near-duplicate of `index` (the header comment in `index.js` still
  reads "File: pages/extra.js")
- `new` — scratch homepage attempt

### Assets deleted
Folders: `public/work/{azuki,brain,metalink,pixelpush,plane,skiff,thinkspace,experiments}`

Covers: `123` `aiga` `aiga-square` `animecom` `apple` `apple-v2` `apple.mp4`
`azuki` `azuki-2` `brain-nested-query` `collector-status` `cursor` `cursor-long`
`metalink` `natural` `natural.mp4` `pixel-push` `plane` `reading-trends`
`sensor-chess` `sisters` `skiff` `skiffIcons` `thinkspace`

`sisters.jpg` deserves a note: it looked like it could have been Abhi's art, but
opening it showed an Azuki key-art poster with character badges reading
"SHAO AZUKI #187" and "RAIZAN AZUKI #133". Joseph's. Deleted.

`/work/experiments/LE-*.jpg` also deserve a note: "LE" reads as "Light Engines"
and nearly passed as Abhi's, but the prose in `lightengines.js` places them at
Carnegie Mellon. Joseph's. Deleted — which is why `techniques.js`, which used
`LE-1.jpg` as its hero, now shows a placeholder.

### Surviving assets
`public/work/{nhai,erss,darkpatt,playo}` · `P1102186.JPG` · the eight
`*projectcard.png` covers. All Abhi's.

## Verification

After the deletions, a static pass confirmed:

- every relative import in `pages/`, `components/` and `data/` resolves
- every `/work/…`, `/project-covers/…` and `/placeholder.svg` reference exists
  on disk
- no internal link points at a deleted route (one was found —
  `Footer.js → /extra` — and repointed to `/v5`)

`npm run build` could not be run at the time: the audit ran from a Linux
environment against a `node_modules` installed on Windows, and Next could not
load a native SWC binary. ESLint's pass over every file did complete, so all
files are at minimum syntactically valid. **A full `npm run build` on Windows is
still the outstanding check.**
