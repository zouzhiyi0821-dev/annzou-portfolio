"use client";

import Image from "next/image";
import { useState } from "react";
import { coverCropKey, cropFor } from "@/lib/image-layout";

type Props = {
  src?: string;
  alt: string;
  className?: string;
  cropKey?: string;
  priority?: boolean;
  loading?: "lazy" | "eager";
};

export function ProjectCover({
  src,
  alt,
  className = "",
  cropKey,
  priority = false,
  loading = "lazy",
}: Props) {
  const [failed, setFailed] = useState(false);
  const crop = cropFor(cropKey ? coverCropKey(cropKey) : "cover:default");

  if (!src || failed) {
    return (
      <div className={`flex aspect-square items-center justify-center bg-cream-deep text-[10px] uppercase tracking-widest text-muted ${className}`}>
        Cover
      </div>
    );
  }

  return (
    <div className={`relative size-full min-h-[120px] overflow-hidden bg-cream-deep ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        loading={priority ? undefined : loading}
        className={crop.objectFit === "contain" ? "object-contain" : "object-cover"}
        style={{ objectPosition: crop.objectPosition }}
        sizes="480px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}
