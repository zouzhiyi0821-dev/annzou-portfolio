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

Numbered stills, zero-padded: `01`, `02`, …

| Folder | Ext | Count (in data) |
|--------|-----|-----------------|
| `fear-of-death/` | `.jpg` | 2 |
| `space-penguin/` | `.png` | 1 |
| `stylist/` | `.jpg` | 4 |
| Others | `.jpg` (`.png` for `space-penguin` only) | add as needed |

Example: `public/images/gallery/stylist/01.jpg` … `04.jpg`

Recommended export: **min 1080px** wide, JPG quality 80–85 or PNG for flat UI decks.

## Quick replace workflow

1. Export from Figma at sizes above (or 2× for retina).
2. Drop files over placeholders (same names).
3. Run `npm run build` — Next.js will optimize to AVIF/WebP.

## Regenerate beige placeholders

```bash
node scripts/generate-placeholders.mjs
```
