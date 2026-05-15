import Link from "next/link";
import { LangToggle } from "@/components/LangToggle";
import type { Lang } from "@/lib/i18n";
import { homeHref } from "@/lib/i18n";
import type { HomeCopy } from "@/lib/home-copy";

type Props = {
  lang: Lang;
  copy: HomeCopy["nav"];
  pathname?: string;
  search?: string;
};

export function SiteNav({ lang, copy, pathname = "/", search }: Props) {
  const home = homeHref(lang);

  return (
    <nav className="flex items-center justify-between border-b border-hairline bg-cream px-16 py-7">
      <Link href={home} className="text-[13px] font-medium uppercase tracking-[0.08em]">
        ANN · ZOU
      </Link>
      <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.08em] text-ink">
        <Link href={`${home}#index`} className="hover:text-accent">
          {copy.index}
        </Link>
        <Link href={`${home}#work`} className="hover:text-accent">
          {copy.work}
        </Link>
        <Link href={`${home}#about`} className="hover:text-accent">
          {copy.about}
        </Link>
        <Link href={`${home}#contact`} className="hover:text-accent">
          {copy.contact}
        </Link>
        <span className="text-muted">|</span>
        <LangToggle lang={lang} pathname={pathname} search={search} />
      </div>
    </nav>
  );
}
