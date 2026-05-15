"use client";

import { useEffect } from "react";
import type { Lang } from "@/lib/i18n";

export function LangAttr({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang === "cn" ? "zh-CN" : "en";
  }, [lang]);
  return null;
}
