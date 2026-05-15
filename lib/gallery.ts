const GALLERY_EXT: Record<string, "jpg" | "png" | "webp"> = {
  "space-penguin": "png",
};

/** Gallery stills live in public/images/gallery/{slug}/01.jpg … 99.jpg */
export function galleryImagePath(slug: string, index: number): string {
  const n = String(index).padStart(2, "0");
  const ext = GALLERY_EXT[slug] ?? "jpg";
  return `/images/gallery/${slug}/${n}.${ext}`;
}