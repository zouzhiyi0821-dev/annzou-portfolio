"use client";

import Image from "next/image";
import { useState } from "react";

type Props = {
  src?: string;
  alt: string;
  className?: string;
};

export function ProjectCover({ src, alt, className = "" }: Props) {
  const [failed, setFailed] = useState(false);

  if (!src || failed) {
    return (
      <div
        className={`flex aspect-[4/3] items-center justify-center bg-cream-deep text-[10px] uppercase tracking-widest text-muted ${className}`}
      >
        Cover
      </div>
    );
  }

  return (
    <div className={`relative aspect-[4/3] overflow-hidden bg-cream-deep ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        sizes="(max-width:768px) 100vw, 420px"
        onError={() => setFailed(true)}
      />
    </div>
  );
}