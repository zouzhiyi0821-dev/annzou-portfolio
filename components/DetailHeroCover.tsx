"use client";

import Image from "next/image";
import { useState } from "react";
import { cropFor } from "@/lib/image-layout";

type Props = {
  src?: string;
  alt: string;
  cropKey?: string;
};

function detailCropKey(slug: string) {
  return `detail:${slug}`;
}

/** Figma detail Cover Image: 16:9, edge-to-edge (object-cover fill) */
export function DetailHeroCover({ src, alt, cropKey }: Props) {
  const [failed, setFailed] = useState(false);
  const crop = cropFor(cropKey ? detailCropKey(cropKey) : "detail:default");

  if (!src || failed) {
    return (
      <div className="flex aspect-video w-full items-center justify-center bg-cream-deep text-[11px] uppercase tracking-widest text-muted">
        Cover
      </div>
    );
  }

  if (crop.objectFit === "contain") {
    return (
      <div className="relative flex aspect-video w-full items-center justify-center overflow-hidden bg-cream-deep">
        <Image
          src={src}
          alt={alt}
          width={2400}
          height={1350}
          className="max-h-full max-w-full object-contain"
          sizes="100vw"
          priority
          onError={() => setFailed(true)}
        />
      </div>
    );
  }

  return (
    <div className="relative aspect-video w-full overflow-hidden bg-cream-deep">
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        style={{
          objectPosition: crop.objectPosition ?? "center center",
          transform: crop.scale ? `scale(${crop.scale})` : undefined,
        }}
        sizes="100vw"
        priority
        onError={() => setFailed(true)}
      />
    </div>
  );
}
