"use client";

import Image from "next/image";
import { useState } from "react";
import {
  galleryImagePath,
  galleryLayoutFor,
  isSplitRowLayout,
  type GalleryTileSpec,
} from "@/lib/gallery";

type Props = {
  slug: string;
  count: number;
};

export function ProjectGallery({ slug, count }: Props) {
  if (count <= 0) return null;

  const paths = Array.from({ length: count }, (_, i) => galleryImagePath(slug, i + 1));

  return (
    <section className="border-b border-hairline px-6 py-12 md:px-16 md:py-16">
      <GalleryHeader />
      <GalleryLayout slug={slug} paths={paths} />
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

function GalleryLayout({ slug, paths }: { slug: string; paths: string[] }) {
  const n = paths.length;
  const spec = galleryLayoutFor(slug, n);

  if (spec && isSplitRowLayout(slug)) {
    return <SplitRowGallery slug={slug} paths={paths} spec={spec} />;
  }

  if (spec) {
    return (
      <div className={spec.containerClass}>
        {spec.tiles.map((tile) => {
          const src = paths[tile.index - 1];
          if (!src) return null;
          return <GalleryTile key={src} src={src} spec={tile} />;
        })}
      </div>
    );
  }

  if (n === 1) {
    return <GalleryTile src={paths[0]} spec={{ index: 1, aspect: "2 / 1" }} />;
  }

  if (n === 2) {
    return (
      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {paths.map((src) => (
          <GalleryTile key={src} src={src} spec={{ index: 1, aspect: "4 / 3" }} />
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
      {paths.map((src) => (
        <GalleryTile key={src} src={src} spec={{ index: 1, aspect: "4 / 3" }} />
      ))}
    </div>
  );
}

function SplitRowGallery({
  slug,
  paths,
  spec,
}: {
  slug: string;
  paths: string[];
  spec: NonNullable<ReturnType<typeof galleryLayoutFor>>;
}) {
  if (slug === "glowguard") {
    const top = spec.tiles.filter((t) => t.index <= 2);
    const bottom = spec.tiles.filter((t) => t.index === 3);
    return (
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {top.map((tile) => {
            const src = paths[tile.index - 1];
            if (!src) return null;
            return <GalleryTile key={src} src={src} spec={tile} />;
          })}
        </div>
        {bottom.map((tile) => {
          const src = paths[tile.index - 1];
          if (!src) return null;
          return <GalleryTile key={src} src={src} spec={tile} />;
        })}
      </div>
    );
  }

  if (slug === "space-penguin") {
    const [hero, ...rest] = spec.tiles;
    const heroSrc = paths[hero.index - 1];
    return (
      <div className="flex flex-col gap-5">
        {heroSrc ? <GalleryTile src={heroSrc} spec={hero} /> : null}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {rest.map((tile) => {
            const src = paths[tile.index - 1];
            if (!src) return null;
            return <GalleryTile key={src} src={src} spec={tile} />;
          })}
        </div>
      </div>
    );
  }

  if (slug === "fear-of-death") {
    const pair = spec.tiles.filter((t) => t.index <= 2);
    const stack = spec.tiles.filter((t) => t.index > 2);
    return (
      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {pair.map((tile) => {
            const src = paths[tile.index - 1];
            if (!src) return null;
            return <GalleryTile key={src} src={src} spec={tile} />;
          })}
        </div>
        {stack.map((tile) => {
          const src = paths[tile.index - 1];
          if (!src) return null;
          return <GalleryTile key={src} src={src} spec={tile} />;
        })}
      </div>
    );
  }

  return (
    <div className={spec.containerClass}>
      {spec.tiles.map((tile) => {
        const src = paths[tile.index - 1];
        if (!src) return null;
        return <GalleryTile key={src} src={src} spec={tile} />;
      })}
    </div>
  );
}

function gallerySrcNeedsUnoptimized(src: string): boolean {
  return /\.jfif$/i.test(src);
}

function GalleryTile({ src, spec }: { src: string; spec: GalleryTileSpec }) {
  const [failed, setFailed] = useState(false);
  const fit = spec.fit ?? "cover";
  const intrinsic = spec.intrinsic === true || spec.aspect === "auto";

  const frameClass = ["w-full bg-cream-deep", spec.className ?? ""]
    .filter(Boolean)
    .join(" ");

  if (failed) {
    return (
      <div
        className={`flex min-h-[200px] items-center justify-center text-[10px] uppercase tracking-widest text-muted ${frameClass}`}
      >
        Add image
      </div>
    );
  }

  if (fit === "contain" && intrinsic) {
    return (
      <div className={frameClass}>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={src}
          alt=""
          className="block h-auto w-full object-contain"
          loading="lazy"
          decoding="async"
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  const boxClass = ["relative w-full overflow-hidden bg-cream-deep", spec.className ?? ""]
    .filter(Boolean)
    .join(" ");

  return (
    <div
      className={boxClass}
      style={spec.aspect !== "auto" ? { aspectRatio: spec.aspect } : undefined}
    >
      <Image
        src={src}
        alt=""
        fill
        unoptimized={gallerySrcNeedsUnoptimized(src)}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        style={{ objectPosition: spec.objectPosition ?? "center center" }}
        sizes="(max-width: 768px) 100vw, 50vw"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
