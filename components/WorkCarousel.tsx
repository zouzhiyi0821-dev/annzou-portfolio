"use client";

import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";
import { ProjectCover } from "@/components/ProjectCover";
import { coverPath } from "@/lib/covers";
import type { Lang } from "@/lib/i18n";
import { withLang } from "@/lib/i18n";
import type { Project } from "@/lib/projects";

type Props = {
  lang: Lang;
  projects: Project[];
  serif: string;
};

const GAP = 20;
const DESKTOP_CARD = 480;
const MOBILE_CARD_MAX = 300;

function cardSizeForViewport(width: number): number {
  if (width >= 768) return DESKTOP_CARD;
  return Math.min(Math.round(width * 0.72), MOBILE_CARD_MAX);
}

export function WorkCarousel({ lang, projects, serif }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [cardSize, setCardSize] = useState(DESKTOP_CARD);

  const step = cardSize + GAP;

  useEffect(() => {
    const update = () => setCardSize(cardSizeForViewport(window.innerWidth));
    update();
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  const syncIndex = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / step);
    setIndex(Math.max(0, Math.min(projects.length - 1, i)));
  }, [projects.length, step]);

  const scrollByCards = useCallback(
    (delta: number) => {
      const el = trackRef.current;
      if (!el) return;
      el.scrollBy({ left: delta * step, behavior: "smooth" });
      setTimeout(syncIndex, 350);
    },
    [syncIndex, step],
  );

  const arrowTop = cardSize / 2 - 24;

  return (
    <div className="relative px-2 sm:px-6 md:px-10">
      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        className="absolute left-0 z-10 flex h-10 w-10 items-center justify-center border border-hairline bg-cream text-xl hover:border-ink md:h-12 md:w-12 md:text-2xl"
        style={{ top: arrowTop }}
        aria-label="Scroll left"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => scrollByCards(1)}
        className="absolute right-0 z-10 flex h-10 w-10 items-center justify-center border border-hairline bg-cream text-xl hover:border-ink md:h-12 md:w-12 md:text-2xl"
        style={{ top: arrowTop }}
        aria-label="Scroll right"
      >
        ›
      </button>

      <div
        ref={trackRef}
        onScroll={syncIndex}
        className="scrollbar-none flex gap-5 overflow-x-auto scroll-smooth px-1 py-2 snap-x snap-mandatory"
        style={{ scrollbarWidth: "none" }}
      >
        {projects.map((p, i) => (
          <article
            key={p.slug}
            className="relative shrink-0 snap-start"
            style={{ width: cardSize }}
          >
            <Link
              href={withLang(`/work/${p.slug}`, lang)}
              className="group relative z-20 block"
              draggable={false}
              prefetch
            >
              <div
                className="overflow-hidden bg-cream-deep"
                style={{ width: cardSize, height: cardSize }}
              >
                <ProjectCover
                  src={coverPath(p.slug)}
                  alt={p.title}
                  cropKey={p.slug}
                  className="h-full w-full"
                  priority={i < 2}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
              <p className="mt-3 text-[10px] uppercase tracking-widest text-muted md:text-[11px]">
                {lang === "cn" ? p.cardMetaCn : p.cardMeta}
              </p>
              <p className="mt-1 flex flex-wrap gap-2 text-[9px] uppercase tracking-widest text-accent md:text-[10px]">
                {(lang === "cn" ? p.cardTagsCn : p.cardTags).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </p>
              <p className={`mt-2 text-xl font-bold group-hover:text-accent md:text-2xl ${serif}`}>
                {lang === "cn" ? p.titleCn : p.title}.
              </p>
              <p className={`mt-2 line-clamp-3 text-xs leading-relaxed text-muted md:text-sm ${serif}`}>
                {lang === "cn" ? p.cardDescCn : p.cardDesc}
              </p>
              <span className="mt-3 inline-block text-[10px] uppercase tracking-widest text-accent group-hover:underline md:text-[11px]">
                {lang === "cn" ? "查看案例 →" : "Read case →"}
              </span>
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-[10px] uppercase tracking-widest text-muted md:text-[11px]">
        {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} ·{" "}
        {lang === "cn" ? "点击卡片进入详情 · 触控板左右滑动" : "Click card to open · trackpad scroll"}
      </p>
    </div>
  );
}
