/** Explicit gallery filenames per project (supports mixed .jpg / .png) */
const GALLERY_FILES: Record<string, string[]> = {
  semir: ["01.png", "02.jpg", "03.png"],
  "amillex-geo": ["02.png"],
  "fear-of-death": ["01.jpg", "02.jpg"],
  glowguard: ["01.png", "02.png", "03.png"],
  "space-penguin": ["01.png", "02.jpg", "03.jpg"],
  stylist: ["01.png", "02.jpg", "03.jpg", "04.jpg"],
  unilever: ["01.png", "02.png"],
};

/** Gallery stills in public/images/gallery/{slug}/ */
export function galleryImagePath(slug: string, index: number): string {
  const files = GALLERY_FILES[slug];
  if (files?.[index - 1]) {
    return `/images/gallery/${slug}/${files[index - 1]}`;
  }
  const n = String(index).padStart(2, "0");
  return `/images/gallery/${slug}/${n}.jpg`;
}

export function galleryCountForSlug(slug: string): number {
  return GALLERY_FILES[slug]?.length ?? 0;
}
