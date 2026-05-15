export type Lang = "en" | "cn";

export function parseLang(value?: string | null): Lang {
  return value === "cn" ? "cn" : "en";
}

/** Append ?lang=cn when needed (detail pages, project links). */
export function withLang(path: string, lang: Lang): string {
  if (lang !== "cn") return path;
  const [base, query] = path.split("?");
  const params = new URLSearchParams(query ?? "");
  params.set("lang", "cn");
  return `${base}?${params.toString()}`;
}

export function homeHref(lang: Lang): string {
  return lang === "cn" ? "/?lang=cn" : "/";
}
