/** Cover image extension per project slug (files live in public/images/covers/) */
export const COVER_EXT: Record<string, "jpg" | "png" | "webp"> = {
  semir: "jpg",
  "amillex-geo": "png",
  unilever: "png",
  "max-mara": "png",
  "prada-prisma": "png",
  glowguard: "png",
  "space-penguin": "jpg",
  "hello-mom": "png",
  "fear-of-death": "jpg",
  stylist: "png",
};

export function coverPath(slug: string): string {
  const ext = COVER_EXT[slug] ?? "jpg";
  return `/images/covers/${slug}.${ext}`;
}

/** Detail page 16:9 hero — extension may differ from carousel cover */
export const DETAIL_EXT: Record<string, "jpg" | "png" | "webp"> = {
  "amillex-geo": "png",
  unilever: "png",
  "max-mara": "png",
  "prada-prisma": "png",
  glowguard: "png",
  "hello-mom": "png",
  "space-penguin": "jpg",
  stylist: "jpg",
};

export function detailHeroPath(slug: string): string {
  const ext = DETAIL_EXT[slug] ?? "jpg";
  return `/images/detail/${slug}.${ext}`;
}