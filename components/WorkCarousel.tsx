"use client";

import Link from "next/link";
import { useCallback, useRef, useState } from "react";
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

const CARD = 480;
const GAP = 20;
const STEP = CARD + GAP;

export function WorkCarousel({ lang, projects, serif }: Props) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);

  const syncIndex = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    const i = Math.round(el.scrollLeft / STEP);
    setIndex(Math.max(0, Math.min(projects.length - 1, i)));
  }, [projects.length]);

  const scrollByCards = useCallback(
    (delta: number) => {
      const el = trackRef.current;
      if (!el) return;
      el.scrollBy({ left: delta * STEP, behavior: "smooth" });
      setTimeout(syncIndex, 350);
    },
    [syncIndex],
  );

  return (
    <div className="relative px-10">
      <button
        type="button"
        onClick={() => scrollByCards(-1)}
        className="absolute left-0 top-[calc(240px-24px)] z-10 flex h-12 w-12 items-center justify-center border border-hairline bg-cream text-2xl hover:border-ink"
        aria-label="Scroll left"
      >
        ‹
      </button>
      <button
        type="button"
        onClick={() => scrollByCards(1)}
        className="absolute right-0 top-[calc(240px-24px)] z-10 flex h-12 w-12 items-center justify-center border border-hairline bg-cream text-2xl hover:border-ink"
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
          <article key={p.slug} className="relative w-[480px] shrink-0 snap-start">
            <Link
              href={withLang(`/work/${p.slug}`, lang)}
              className="group relative z-20 block"
              draggable={false}
              prefetch
            >
              <div className="h-[480px] w-[480px] overflow-hidden bg-cream-deep">
                <ProjectCover
                  src={coverPath(p.slug)}
                  alt={p.title}
                  cropKey={p.slug}
                  className="h-full w-full"
                  priority={i < 2}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              </div>
              <p className="mt-3 text-[11px] uppercase tracking-widest text-muted">
                {lang === "cn" ? p.cardMetaCn : p.cardMeta}
              </p>
              <p className="mt-1 flex flex-wrap gap-2 text-[10px] uppercase tracking-widest text-accent">
                {(lang === "cn" ? p.cardTagsCn : p.cardTags).map((t) => (
                  <span key={t}>{t}</span>
                ))}
              </p>
              <p className={`mt-2 text-2xl font-bold group-hover:text-accent ${serif}`}>
                {lang === "cn" ? p.titleCn : p.title}.
              </p>
              <p className={`mt-2 line-clamp-3 text-sm leading-relaxed text-muted ${serif}`}>
                {lang === "cn" ? p.cardDescCn : p.cardDesc}
              </p>
              <span className="mt-3 inline-block text-[11px] uppercase tracking-widest text-accent group-hover:underline">
                {lang === "cn" ? "查看案例 →" : "Read case →"}
              </span>
            </Link>
          </article>
        ))}
      </div>

      <p className="mt-6 text-center text-[11px] uppercase tracking-widest text-muted">
        {String(index + 1).padStart(2, "0")} / {String(projects.length).padStart(2, "0")} ·{" "}
        {lang === "cn" ? "点击卡片进入详情 · 触控板左右滑动" : "Click card to open · trackpad scroll"}
      </p>
    </div>
  );
}
