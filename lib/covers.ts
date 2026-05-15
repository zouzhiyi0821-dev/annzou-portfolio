/** Cover image extension per project slug (files live in public/images/covers/) */
export const COVER_EXT: Record<string, "jpg" | "png" | "webp"> = {
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

export function coverPath(slug: string): string {
  const ext = COVER_EXT[slug] ?? "jpg";
  return `/images/covers/${slug}.${ext}`;
}

/** Detail page 16:9 hero — Figma Cover Image band */
export function detailHeroPath(slug: string): string {
  return `/images/detail/${slug}.jpg`;
}