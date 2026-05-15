"use client";

import Image from "next/image";
import { cropFor } from "@/lib/image-layout";

type Props = {
  src: string;
  alt: string;
  className?: string;
  priority?: boolean;
  layoutKey?: string;
};

export function PortraitImage({ src, alt, className = "", priority, layoutKey = "hero-portrait" }: Props) {
  const crop = cropFor(layoutKey);
  return (
    <Image
      src={src}
      alt={alt}
      fill
      className={`${crop.objectFit === "contain" ? "object-contain" : "object-cover"} ${className}`}
      style={{ objectPosition: crop.objectPosition }}
      sizes="(max-width: 1024px) 100vw, 520px"
      priority={priority}
    />
  );
}