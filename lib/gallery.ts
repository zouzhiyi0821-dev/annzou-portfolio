/** Explicit gallery filenames per project (supports mixed .jpg / .png / .jfif) */
const GALLERY_FILES: Record<string, string[]> = {
  semir: ["01.png", "02.jpg", "03.png"],
  "amillex-geo": ["01.png"],
  "fear-of-death": [
    "01.jpg",
    "02.jpg",
    "03.png",
    "04.png",
    "05.png",
    "06.png",
    "07.png",
    "08.png",
  ],
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
  /** Full image visible; frame height follows image (no crop). */
  intrinsic?: boolean;
  objectPosition?: string;
};

export type GalleryLayoutSpec = {
  containerClass: string;
  tiles: GalleryTileSpec[];
};

function flatTile(index: number, className?: string): GalleryTileSpec {
  return {
    index,
    aspect: "auto",
    fit: "contain",
    intrinsic: true,
    className,
  };
}

function flatGridLayout(count: number): GalleryLayoutSpec {
  return {
    containerClass: "grid grid-cols-1 gap-5 md:grid-cols-2",
    tiles: Array.from({ length: count }, (_, i) => flatTile(i + 1)),
  };
}

function squareTile(index: number): GalleryTileSpec {
  return { index, aspect: "1 / 1", fit: "cover" };
}

function squareGridLayout(count: number): GalleryLayoutSpec {
  return {
    containerClass: "grid grid-cols-1 gap-5 md:grid-cols-2",
    tiles: Array.from({ length: count }, (_, i) => squareTile(i + 1)),
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
    tiles: [flatTile(1, "md:col-span-2")],
  },
  stylist: squareGridLayout(6),
  "fear-of-death": {
    containerClass: "flex flex-col gap-5",
    tiles: [
      { index: 1, aspect: "3 / 4", fit: "contain", intrinsic: true },
      { index: 2, aspect: "3 / 4", fit: "contain", intrinsic: true },
      { index: 3, aspect: "auto", fit: "contain", intrinsic: true },
      { index: 4, aspect: "auto", fit: "contain", intrinsic: true },
      { index: 5, aspect: "auto", fit: "contain", intrinsic: true },
      { index: 6, aspect: "auto", fit: "contain", intrinsic: true },
      { index: 7, aspect: "auto", fit: "contain", intrinsic: true },
      { index: 8, aspect: "auto", fit: "contain", intrinsic: true },
    ],
  },
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
  return slug === "glowguard" || slug === "space-penguin" || slug === "fear-of-death";
}
