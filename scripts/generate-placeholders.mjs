import fs from "node:fs";
import path from "node:path";
import sharp from "sharp";
const COVER_EXT = {
  semir: "jpg",
  "amillex-geo": "png",
  "unilever-karicare": "png",
  "max-mara": "png",
  "prada-prisma": "png",
  glowguard: "png",
  "space-penguin": "jpg",
  "hello-mom": "png",
  "fear-of-death": "jpg",
  stylist: "jpg",
};

const root = path.join(process.cwd(), "public", "images");

const covers = [
  "semir",
  "amillex-geo",
  "unilever-karicare",
  "max-mara",
  "prada-prisma",
  "glowguard",
  "space-penguin",
  "hello-mom",
  "fear-of-death",
  "stylist",
];

/** Gallery still count per slug (matches lib/projects.ts galleryCount) */
const GALLERY_COUNT = {
  semir: 2,
  "amillex-geo": 2,
  "unilever-karicare": 2,
  "max-mara": 2,
  "prada-prisma": 2,
  glowguard: 2,
  "space-penguin": 1,
  "hello-mom": 2,
  "fear-of-death": 2,
  stylist: 4,
};

const GALLERY_EXT = { "space-penguin": "png" };

async function writeImage(buffer, outPath) {
  const pipeline = sharp(buffer);
  if (outPath.endsWith(".png")) {
    await pipeline.png({ compressionLevel: 9 }).toFile(outPath);
  } else {
    await pipeline.jpeg({ quality: 85, mozjpeg: true }).toFile(outPath);
  }
}

async function placeholder(w, h, label, outPath) {
  const safe = String(label).replace(/[<>&]/g, "");
  const fontSize = Math.max(14, Math.min(w, h) / 12);
  const svg = `<svg width="${w}" height="${h}" xmlns="http://www.w3.org/2000/svg">
  <rect width="100%" height="100%" fill="#e5dcc7"/>
  <rect x="8" y="8" width="${w - 16}" height="${h - 16}" fill="none" stroke="#c4b8a4" stroke-width="2"/>
  <text x="50%" y="45%" dominant-baseline="middle" text-anchor="middle" fill="#6b655b" font-family="Arial,sans-serif" font-size="${fontSize}">${safe}</text>
  <text x="50%" y="58%" dominant-baseline="middle" text-anchor="middle" fill="#9a9288" font-family="Arial,sans-serif" font-size="${Math.round(fontSize * 0.55)}">${w} x ${h}</text>
</svg>`;
  await writeImage(Buffer.from(svg), outPath);
}

async function main() {
  fs.mkdirSync(path.join(root, "covers"), { recursive: true });
  fs.mkdirSync(path.join(root, "detail"), { recursive: true });

  await placeholder(719, 830, "hero-portrait.jpg", path.join(root, "hero-portrait.jpg"));
  await placeholder(640, 853, "about-portrait.jpg", path.join(root, "about-portrait.jpg"));

  for (const slug of covers) {
    const ext = COVER_EXT[slug] ?? "jpg";
    await placeholder(480, 480, `covers/${slug}`, path.join(root, "covers", `${slug}.${ext}`));
    await placeholder(1440, 810, `detail/${slug}`, path.join(root, "detail", `${slug}.jpg`));

    const gDir = path.join(root, "gallery", slug);
    fs.mkdirSync(gDir, { recursive: true });
    const gExt = GALLERY_EXT[slug] ?? "jpg";
    const count = GALLERY_COUNT[slug] ?? 2;
    for (let i = 1; i <= count; i++) {
      const n = String(i).padStart(2, "0");
      const tall = i > 2;
      await placeholder(1080, tall ? 936 : 810, `${slug}/${n}`, path.join(gDir, `${n}.${gExt}`));
    }
  }
  console.log("Placeholders written (correct JPEG/PNG formats).");
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
