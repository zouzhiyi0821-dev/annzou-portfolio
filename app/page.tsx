import Link from "next/link";
import { PortraitImage } from "@/components/PortraitImage";
import { LangAttr } from "@/components/LangAttr";
import { SiteNav } from "@/components/SiteNav";
import { WorkCarousel } from "@/components/WorkCarousel";
import { homeCopy } from "@/lib/home-copy";
import { parseLang, withLang } from "@/lib/i18n";
import { projects, siteLinks } from "@/lib/projects";

type Props = {
  searchParams: Promise<{ lang?: string }>;
};

export default async function Home({ searchParams }: Props) {
  const { lang: langParam } = await searchParams;
  const lang = parseLang(langParam);
  const copy = homeCopy[lang];
  const marqueeItems = [...copy.marquee, ...copy.marquee];
  const serif = lang === "cn" ? "font-[family-name:var(--font-noto-serif)]" : "font-serif";

  return (
    <main className="min-h-screen bg-cream text-ink">
      <LangAttr lang={lang} />
      <SiteNav lang={lang} copy={copy.nav} pathname="/" search={lang === "cn" ? "lang=cn" : undefined} />

      <div className="overflow-hidden border-b border-hairline bg-cream py-3">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap px-16 text-[11px] uppercase tracking-[0.08em] text-muted">
          {marqueeItems.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-8">
              {item} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="relative overflow-hidden border-b border-hairline bg-cream">
        <div className="absolute inset-0 grid grid-cols-1 lg:grid-cols-[55%_45%]">
          <div className="bg-cream" />
          <div className="relative min-h-[min(52vh,480px)] lg:min-h-full">
            <PortraitImage src="/images/hero-portrait.jpg" alt="Ann Zou" priority layoutKey="hero-portrait" />
            <div className="absolute inset-0 bg-coral/25" />
            <div className="absolute left-0 top-1/2 hidden h-[min(360px,50vh)] w-1.5 -translate-y-1/2 bg-accent lg:block" />
          </div>
        </div>

        <div className="relative z-10">
          <div className="flex justify-between px-16 pt-10 text-[11px] uppercase tracking-[0.08em] text-muted">
            <span>{copy.hero.issue}</span>
            <span className="hidden text-center lg:inline">{copy.hero.portfolio}</span>
            <span>{copy.hero.edition}</span>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]">
            <div className="px-16 pb-4 pt-4">
              <div className="mb-10 h-px bg-hairline" />
              <h1
                className={`${serif} text-[clamp(88px,14vw,200px)] font-black leading-[0.88] tracking-tight`}
              >
                Ann
                <br />
                Zou.
              </h1>
            </div>
            <div className="min-h-[80px] lg:min-h-0" aria-hidden />
          </div>

          <div className="border-t border-hairline">
            <div className="grid grid-cols-1 lg:grid-cols-[55%_45%]">
              <div className="px-16 py-8">
                <div className="mb-6 h-px bg-hairline" />
                <p
                  className={`mb-8 max-w-2xl whitespace-pre-line text-[22px] font-light leading-relaxed text-muted ${lang === "cn" ? "font-[family-name:var(--font-noto-serif)]" : ""}`}
                >
                  {copy.hero.subtitle}
                </p>
                <div className="grid gap-8 border-t border-hairline pt-8 md:grid-cols-2">
                  <div>
                    <p className="mb-2 text-[11px] uppercase tracking-widest text-muted">
                      {copy.hero.manifestoLabel}
                    </p>
                    <p className={`text-sm italic leading-relaxed ${serif}`}>{copy.hero.manifesto}</p>
                  </div>
                  <div>
                    <p className="text-[11px] uppercase tracking-widest text-muted">
                      {copy.hero.availableLabel}
                    </p>
                    <p className="mt-2 text-sm italic">{copy.hero.availableValue}</p>
                  </div>
                </div>
              </div>
              <div className="hidden items-end justify-end px-16 pb-8 lg:flex">
                <p className="text-[11px] uppercase tracking-widest text-muted">{copy.hero.scroll}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-hairline bg-cream px-16 py-16">
        <div className="mb-8 flex items-end justify-between border-b border-hairline pb-4 text-[11px] uppercase tracking-widest text-muted">
          <span>02</span>
          <span>{copy.about.section}</span>
          <span>§ 02.00–02.04</span>
        </div>
        <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
          <div>
            <div className="relative aspect-[3/4] overflow-hidden bg-cream-deep">
              <PortraitImage src="/images/about-portrait.jpg" alt="Portrait" layoutKey="about-portrait" />
            </div>
          </div>
          <div>
            <h2 className={`${serif} text-[clamp(40px,6vw,88px)] font-bold leading-none`}>
              {copy.about.heading[0]}
              <br />
              <span className="italic">{copy.about.heading[1]}</span>
              <br />
              {copy.about.heading[2]}
            </h2>
            <p className={`mt-8 max-w-xl text-lg leading-relaxed text-muted ${serif}`}>
              {copy.about.body}
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-hairline bg-cream px-16 py-16">
        <div className="mb-8 flex items-end justify-between border-b border-hairline pb-4 text-[11px] uppercase tracking-widest text-muted">
          <span>03</span>
          <span>{copy.work.section}</span>
          <span>{copy.work.meta}</span>
        </div>
        <h2 className={`${serif} mb-10 text-[clamp(48px,8vw,96px)] font-bold leading-none`}>
          {copy.work.title[0]}
          <br />
          <span className="italic">{copy.work.title[1]}</span>
        </h2>
        <WorkCarousel lang={lang} projects={projects} serif={serif} />
      </section>

      <section id="index" className="relative z-20 border-b border-hairline bg-cream px-16 py-16">
        <div className="mb-8 flex items-end justify-between border-b border-hairline pb-4 text-[11px] uppercase tracking-widest text-muted">
          <span>05</span>
          <span>{copy.index.section}</span>
          <span>{copy.index.meta}</span>
        </div>
        <h2 className={`${serif} mb-12 text-[clamp(48px,8vw,96px)] font-bold leading-none`}>
          {copy.index.title}
        </h2>
        <ul className="divide-y divide-hairline border-t border-hairline">
          {copy.index.rows.map((row) => (
            <li key={row.n}>
              <Link
                href={withLang(`/work/${row.slug}`, lang)}
                className="group grid cursor-pointer grid-cols-[48px_1fr_auto] items-center gap-6 py-6 transition-colors hover:bg-cream-deep/60"
              >
                <span className="text-sm text-muted">{row.n}</span>
                <div>
                  <p className={`text-2xl font-bold group-hover:text-accent ${serif}`}>{row.title}</p>
                  <p className={`mt-1 text-sm text-muted ${serif}`}>{row.desc}</p>
                </div>
                <span className="text-xl transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer id="contact" className="bg-cream px-16 py-20">
        <div className="mb-8 flex items-end justify-between border-b border-hairline pb-4 text-[11px] uppercase tracking-widest text-muted">
          <span>06</span>
          <span>{copy.contact.section}</span>
          <span>{copy.contact.meta}</span>
        </div>
        <h2 className={`${serif} text-[clamp(48px,8vw,120px)] font-bold leading-none`}>
          <span className="italic">{copy.contact.title[0]}</span>
          <br />
          {copy.contact.title[1]}
        </h2>
        <div className="mt-12 grid gap-12 lg:grid-cols-[1fr_320px]">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-muted">{copy.contact.emailLabel}</p>
            <a
              href={`mailto:${siteLinks.email}`}
              className={`mt-3 block text-[clamp(32px,5vw,56px)] font-bold italic hover:text-accent ${serif}`}
            >
              {siteLinks.email}
            </a>
            <p className={`mt-4 max-w-lg text-base italic text-muted ${serif}`}>{copy.contact.emailNote}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-widest text-muted">{copy.contact.linksLabel}</p>
            <div className="mt-4 flex flex-col gap-3 text-sm">
              <a
                href={siteLinks.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {copy.contact.linkedin}
              </a>
              <a
                href={siteLinks.xiaohongshu}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-accent"
              >
                {copy.contact.xhs}
              </a>
            </div>
          </div>
        </div>
        <div className="mt-16 flex flex-wrap justify-between gap-4 border-t border-hairline pt-6 text-[11px] text-muted">
          <span>{copy.contact.footer[0]}</span>
          <span>{copy.contact.footer[1]}</span>
          <span>{copy.contact.footer[2]}</span>
        </div>
      </footer>
    </main>
  );
}
