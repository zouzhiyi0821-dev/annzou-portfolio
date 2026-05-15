/**
 * Adjust photo crop without touching React components.
 * objectPosition: CSS e.g. "50% 20%" = horizontal, vertical
 */
export type ImageCrop = {
  objectPosition?: string;
  objectFit?: "cover" | "contain";
};

export const imageLayout: Record<string, ImageCrop> = {
  "hero-portrait": { objectPosition: "50% 12%", objectFit: "cover" },
  "about-portrait": { objectPosition: "50% 25%", objectFit: "cover" },
  "cover:semir": { objectPosition: "50% 35%", objectFit: "cover" },
  "cover:amillex-geo": { objectPosition: "50% 50%", objectFit: "cover" },
  "cover:unilever": { objectPosition: "50% 50%", objectFit: "cover" },
  "cover:max-mara": { objectPosition: "50% 40%", objectFit: "cover" },
  "cover:prada-prisma": { objectPosition: "center center", objectFit: "contain" },
  "cover:glowguard": { objectPosition: "center center", objectFit: "contain" },
  "cover:space-penguin": { objectPosition: "50% 50%", objectFit: "cover" },
  "cover:hello-mom": { objectPosition: "center center", objectFit: "contain" },
  "cover:fear-of-death": { objectPosition: "50% 30%", objectFit: "cover" },
  "cover:stylist": { objectPosition: "50% 35%", objectFit: "cover" },
  "cover:default": { objectPosition: "50% 50%", objectFit: "cover" },
  "detail:default": { objectPosition: "50% 50%", objectFit: "cover" },
  "detail:prada-prisma": { objectPosition: "50% 45%", objectFit: "cover" },
  "detail:glowguard": { objectPosition: "50% 50%", objectFit: "cover" },
  "detail:hello-mom": { objectPosition: "50% 50%", objectFit: "cover" },
  "detail:space-penguin": { objectPosition: "50% 40%", objectFit: "cover" },
};

export function cropFor(key: string): ImageCrop {
  return imageLayout[key] ?? imageLayout["cover:default"];
}

export function coverCropKey(slug: string): string {
  return `cover:${slug}`;
}