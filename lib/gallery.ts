/** Explicit gallery filenames per project (supports mixed .jpg / .png / .jfif) */
const GALLERY_FILES: Record<string, string[]> = {
  semir: ["01.png", "02.jpg", "03.png"],
  "amillex-geo": ["01.png"],
  "fear-of-death": ["01.jpg", "02.jpg"],
  glowguard: ["01.png", "02.png", "03.png"],
  "space-penguin": ["01.png", "02.jpg", "03.jpg"],
  "hello-mom": ["01.jfif", "02.jfif", "03.jfif", "04.jfif"],
  "prada-prisma": ["01.jfif"],
  stylist: ["01.jfif", "01.png", "02.jfif", "04.jpg", "02.jpg", "03.jpg"],
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

export type GalleryTileSpec = {
  index: number;
  aspect: string;
  className?: string;
  fit?: "cover" | "contain";
  objectPosition?: string;
};

export type GalleryLayoutSpec = {
  containerClass: string;
  tiles: GalleryTileSpec[];
};

const FLAT_FRAME = "min-h-[280px] md:min-h-[320px]";

function flatTile(index: number, className?: string): GalleryTileSpec {
  return {
    index,
    aspect: "4 / 3",
    fit: "contain",
    className: [FLAT_FRAME, className].filter(Boolean).join(" "),
  };
}

function flatGridLayout(count: number): GalleryLayoutSpec {
  return {
    containerClass: "grid grid-cols-1 gap-5 md:grid-cols-2",
    tiles: Array.from({ length: count }, (_, i) => flatTile(i + 1)),
  };
}

const GALLERY_LAYOUTS: Record<string, GalleryLayoutSpec> = {
  semir: {
    containerClass: "grid grid-cols-2 gap-5",
    tiles: [
      { index: 1, aspect: "1 / 1" },
      { index: 2, aspect: "1 / 1" },
      { index: 3, aspect: "2 / 1", className: "col-span-2" },
    ],
  },
  glowguard: {
    containerClass: "flex flex-col gap-5",
    tiles: [
      { index: 1, aspect: "3 / 4" },
      { index: 2, aspect: "3 / 4" },
      { index: 3, aspect: "21 / 9" },
    ],
  },
  "space-penguin": {
    containerClass: "flex flex-col gap-5",
    tiles: [
      { index: 1, aspect: "2 / 1" },
      { index: 2, aspect: "3 / 4" },
      { index: 3, aspect: "3 / 4" },
    ],
  },
  "hello-mom": flatGridLayout(4),
  "prada-prisma": {
    containerClass: "grid grid-cols-1 gap-5 md:grid-cols-2",
    tiles: [flatTile(1, "md:col-span-2 min-h-[min(56vw,420px)] md:min-h-[400px]")],
  },
  stylist: flatGridLayout(6),
};

export function galleryLayoutFor(slug: string, count: number): GalleryLayoutSpec | null {
  if (GALLERY_LAYOUTS[slug]) return GALLERY_LAYOUTS[slug];

  if (count === 4) {
    return {
      containerClass: "grid grid-cols-2 gap-5",
      tiles: [1, 2, 3, 4].map((index) => ({ index, aspect: "1 / 1" })),
    };
  }

  if (count === 3) {
    return {
      containerClass: "flex flex-col gap-5",
      tiles: [
        { index: 1, aspect: "2 / 1" },
        { index: 2, aspect: "4 / 3" },
        { index: 3, aspect: "4 / 3" },
      ],
    };
  }

  return null;
}

export function isSplitRowLayout(slug: string): boolean {
  return slug === "glowguard" || slug === "space-penguin";
}
