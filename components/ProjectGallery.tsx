"use client";

import Image from "next/image";
import { useState } from "react";
import { galleryImagePath } from "@/lib/gallery";

type Props = {
  slug: string;
  count: number;
};

export function ProjectGallery({ slug, count }: Props) {
  if (count <= 0) return null;

  const indices = Array.from({ length: count }, (_, i) => i + 1);

  if (count === 1) {
    return (
      <section className="border-b border-hairline px-6 py-12 md:px-16 md:py-16">
        <GalleryHeader />
        <GalleryTile src={galleryImagePath(slug, 1)} fullWidth />
      </section>
    );
  }

  const row1 = indices.filter((_, i) => i < 2);
  const row2 = indices.filter((_, i) => i >= 2);

  return (
    <section className="border-b border-hairline px-6 py-12 md:px-16 md:py-16">
      <GalleryHeader />
      <div className="flex flex-col gap-7">
        {row1.length > 0 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {row1.map((n) => (
              <GalleryTile key={n} src={galleryImagePath(slug, n)} />
            ))}
          </div>
        )}
        {row2.length > 0 && (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 md:pl-24">
            {row2.map((n) => (
              <GalleryTile key={n} src={galleryImagePath(slug, n)} tall />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

function GalleryHeader() {
  return (
    <div className="mb-8 flex items-end justify-between border-b border-hairline pb-4 text-[11px] uppercase tracking-widest text-muted">
      <span>04</span>
      <span>Gallery</span>
      <span>Visuals</span>
    </div>
  );
}

function GalleryTile({
  src,
  tall,
  fullWidth,
}: {
  src: string;
  tall?: boolean;
  fullWidth?: boolean;
}) {
  const [failed, setFailed] = useState(false);
  const frame = fullWidth
    ? "relative aspect-video w-full overflow-hidden bg-cream-deep"
    : `relative w-full overflow-hidden bg-cream-deep ${tall ? "aspect-[4/5]" : "aspect-[4/3]"}`;

  if (failed) {
    return (
      <div
        className={`flex items-center justify-center bg-cream-deep text-[10px] uppercase tracking-widest text-muted ${fullWidth ? "aspect-video w-full" : tall ? "aspect-[4/5] w-full" : "aspect-[4/3] w-full"}`}
      >
        Add image
      </div>
    );
  }

  return (
    <div className={frame}>
      <Image
        src={src}
        alt=""
        fill
        className="object-cover"
        sizes={fullWidth ? "100vw" : "(max-width: 768px) 100vw, 50vw"}
        onError={() => setFailed(true)}
      />
    </div>
  );
}
