"use client";

import Link from "next/link";
import type { Lang } from "@/lib/i18n";

type Props = {
  lang: Lang;
  /** Current path without origin, e.g. `/` or `/work/stylist` */
  pathname: string;
  search?: string;
};

function toggleHref(pathname: string, search: string | undefined, target: Lang): string {
  const params = new URLSearchParams(search?.replace(/^\?/, "") ?? "");
  if (target === "cn") params.set("lang", "cn");
  else params.delete("lang");
  const q = params.toString();
  return q ? `${pathname}?${q}` : pathname;
}

export function LangToggle({ lang, pathname, search }: Props) {
  return (
    <span className="flex items-center gap-2 text-[11px] uppercase tracking-[0.08em]">
      <Link
        href={toggleHref(pathname, search, "en")}
        className={lang === "en" ? "text-ink" : "text-muted hover:text-ink"}
        aria-current={lang === "en" ? "page" : undefined}
      >
        EN
      </Link>
      <span className="text-muted">/</span>
      <Link
        href={toggleHref(pathname, search, "cn")}
        className={lang === "cn" ? "font-semibold text-ink" : "text-muted hover:text-ink"}
        aria-current={lang === "cn" ? "page" : undefined}
      >
        中
      </Link>
    </span>
  );
}
