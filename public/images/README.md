# Image naming guide (Figma 1:1)

Replace placeholder files with your exports. Keep **exact filenames** and extensions.

## Root (`public/images/`)

| File | Figma size | Usage |
|------|------------|--------|
| `hero-portrait.jpg` | **719×830** (portrait) | Home hero, right column |
| `about-portrait.jpg` | **640×853** (3:4) | About section |

## Covers (`public/images/covers/`)

Home slider cards are **480×480** square.

## Detail heroes (`public/images/detail/`)

Detail page top band is **1440×810** (16:9). Use a wide crop of the same project — not the square slider file.

| Filename | Project |
|----------|---------|
| `semir.jpg` | Semir 森马 |
| `amillex-geo.png` | Amillex GEO |
| `unilever.png` | Unilever |
| `max-mara.png` | MAX MARA |
| `prada-prisma.png` | Prada Prisma |
| `glowguard.png` | GlowGuard |
| `space-penguin.jpg` | Space Penguin |
| `hello-mom.png` | Hello! MoM |
| `fear-of-death.jpg` | Fear of Death |
| `stylist.jpg` | Fashion Stylist |

Cover extensions match `lib/covers.ts`. Detail heroes are always **`detail/{slug}.jpg`**.

## Gallery (`public/images/gallery/{slug}/`)

Filenames are listed in `lib/gallery.ts` (`GALLERY_FILES`). Extensions can be **`.jpg`**, **`.png`**, or **`.jfif`** — use the exact name in code.

| Folder | Files (order = display order) | Count |
|--------|-------------------------------|-------|
| `hello-mom/` | `01.jfif` … `04.jfif` | 4 |
| `prada-prisma/` | `01.jfif` | 1 |
| `stylist/` | `01.jfif`, `01.png`, `02.jfif`, `04.jpg`, `02.jpg`, `03.jpg` | 6 |
| `fear-of-death/` | `01.jpg`, `02.jpg` | 2 |
| `semir/`, `glowguard/`, etc. | see `lib/gallery.ts` | — |

Hello! MoM, Prada Prisma, and Stylist use a **2-column flat layout** (`object-contain`, no crop).

Recommended export: **min 1080px** wide; JPG/JFIF quality 80–85 or PNG for decks.

## Quick replace workflow

1. Export from Figma at sizes above (or 2× for retina).
2. Drop files over placeholders (same names).
3. Run `npm run build` — Next.js will optimize to AVIF/WebP.

## Regenerate beige placeholders

```bash
node scripts/generate-placeholders.mjs
```
