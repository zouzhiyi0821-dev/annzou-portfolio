import { notFound } from "next/navigation";
import Link from "next/link";
import { DetailHeroCover } from "@/components/DetailHeroCover";
import { LangAttr } from "@/components/LangAttr";
import { ProjectGallery } from "@/components/ProjectGallery";
import { LangToggle } from "@/components/LangToggle";
import { detailHeroPath } from "@/lib/covers";
import { parseLang, withLang, homeHref } from "@/lib/i18n";
import { detailLabels, getProjectDetail } from "@/lib/project-details";
import { projects, siteLinks } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

function SectionBar({
  n,
  center,
  right,
}: {
  n: string;
  center: string;
  right: string;
}) {
  return (
    <div className="mb-10 flex items-end justify-between border-b border-hairline pb-4 text-[11px] uppercase tracking-widest text-muted">
      <span>{n}</span>
      <span>{center}</span>
      <span>{right}</span>
    </div>
  );
}

export default async function ProjectDetail({ params, searchParams }: Props) {
  const { slug } = await params;
  const { lang: langParam } = await searchParams;
  const lang = parseLang(langParam);
  const isCn = lang === "cn";
  const labels = detailLabels(lang);
  const serif = isCn ? "font-[family-name:var(--font-noto-serif)]" : "font-serif";

  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();

  const detail = getProjectDetail(slug, lang, project);
  const next = projects.find((p) => p.order === project.order + 1);
  const search = isCn ? "lang=cn" : undefined;
  const title = isCn ? project.titleCn : project.title;

  return (
    <main className="min-h-screen bg-cream text-ink">
      <LangAttr lang={lang} />
      <nav className="flex items-center justify-between border-b border-hairline bg-cream px-6 py-6 md:px-16 md:py-7">
        <Link href={homeHref(lang)} className="text-[13px] font-medium uppercase tracking-[0.08em]">
          ANN · ZOU
        </Link>
        <div className="flex items-center gap-6 text-[11px] uppercase tracking-widest md:gap-8">
          <Link href={`${homeHref(lang)}#work`}>{isCn ? "作品" : "Work"}</Link>
          <Link href={`${homeHref(lang)}#contact`}>{isCn ? "联系" : "Contact"}</Link>
          <span className="text-muted">|</span>
          <LangToggle lang={lang} pathname={`/work/${slug}`} search={search} />
        </div>
      </nav>

      {/* Figma Detail Hero: breadcrumb → title → subtitle → meta → 16:9 cover */}
      <section className="border-b border-hairline px-6 py-10 md:px-16 md:py-14">
        <Link
          href={`${homeHref(lang)}#index`}
          className="text-[11px] uppercase tracking-widest text-muted hover:text-ink"
        >
          {detail.breadcrumb}
        </Link>
        <h1
          className={`mt-8 text-[clamp(56px,10vw,120px)] font-black leading-[0.92] tracking-tight ${serif}`}
        >
          {detail.heroTitle![0]}
          <br />
          {detail.heroTitle![1]}
        </h1>
        <p className={`mt-6 max-w-3xl text-lg italic text-muted ${serif}`}>{detail.heroSubtitle}</p>
        <div className="mt-12 grid gap-8 border-t border-hairline pt-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-[11px] uppercase tracking-widest text-muted">{labels.year}</p>
            <p className={`mt-2 text-2xl font-bold md:text-3xl ${serif}`}>{detail.meta.date}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-widest text-muted">{labels.role}</p>
            <p className={`mt-2 text-2xl font-bold md:text-3xl ${serif}`}>{detail.meta.category}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-widest text-muted">{labels.stack}</p>
            <p className={`mt-2 text-2xl font-bold md:text-3xl ${serif}`}>{detail.meta.keywords}</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-widest text-muted">{labels.live}</p>
            {project.links[0] ? (
              <a
                href={project.links[0].url}
                target="_blank"
                rel="noopener noreferrer"
                className={`mt-2 inline-block text-2xl font-bold text-accent underline-offset-4 hover:underline md:text-3xl ${serif}`}
              >
                {isCn ? project.links[0].labelCn : project.links[0].label} ↗
              </a>
            ) : (
              <p className={`mt-2 text-2xl font-bold text-accent md:text-3xl ${serif}`}>
                {detail.meta.linkStatus}
              </p>
            )}
          </div>
        </div>
      </section>

      <section className="border-b border-hairline p-0">
        <DetailHeroCover src={detailHeroPath(project.slug)} alt={title} cropKey={project.slug} />
      </section>

      {/* 01 Overview */}
      <section className="border-b border-hairline px-6 py-12 md:px-16 md:py-16">
        <SectionBar n="01" center={labels.overview} right={detail.sectionCode} />
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="mb-4 text-[11px] text-accent">{labels.challenge}</p>
            <p className={`text-[clamp(22px,3.5vw,36px)] font-bold leading-snug ${serif}`}>
              {detail.problem}
            </p>
          </div>
          <div>
            <p className="mb-4 text-[11px] text-accent">{labels.myWork}</p>
            {detail.role.map((para) => (
              <p key={para.slice(0, 32)} className={`mb-4 text-sm leading-relaxed text-muted ${serif}`}>
                {para}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* 02 Process — beige band, 4 columns */}
      <section className="border-b border-hairline bg-cream-deep px-6 py-12 md:px-16 md:py-16">
        <SectionBar n="02" center={labels.process} right={detail.sectionCode.split(" ").slice(-1)[0] ?? ""} />
        <h2 className={`mb-12 text-[clamp(40px,6vw,72px)] font-bold leading-none ${serif}`}>
          {labels.processHeading}
        </h2>
        <ol className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {detail.processSteps.map((step, i) => (
            <li key={step.title} className="border-t border-hairline/80 pt-6">
              <p
                className={`font-serif text-[clamp(48px,8vw,88px)] font-bold italic leading-none text-accent`}
              >
                {String(i + 1).padStart(2, "0")}
              </p>
              <p className={`mt-4 text-lg font-bold ${serif}`}>{step.title}</p>
              <p className={`mt-3 text-xs leading-relaxed text-muted ${serif}`}>{step.body}</p>
            </li>
          ))}
        </ol>
      </section>

      {/* 03 Outcome */}
      <section className="border-b border-hairline px-6 py-12 md:px-16 md:py-16">
        <SectionBar n="03" center={labels.outcome} right="" />
        <blockquote
          className={`max-w-4xl text-[clamp(24px,4vw,44px)] font-bold leading-snug ${serif}`}
        >
          “{detail.outcomeQuote}”
        </blockquote>
        <div className="mt-14 grid grid-cols-3 gap-6 border-t border-hairline pt-10 md:gap-12">
          {detail.metrics.map((m) => (
            <div key={m.label}>
              <p
                className={`text-[clamp(36px,6vw,72px)] font-bold leading-none ${
                  m.accent ? `italic text-accent ${serif}` : serif
                }`}
              >
                {m.value}
              </p>
              <p className="mt-3 text-[11px] uppercase tracking-widest text-accent">{m.label}</p>
            </div>
          ))}
        </div>
      </section>

      <ProjectGallery slug={project.slug} count={project.galleryCount ?? 0} />

      {/* Next project — Figma footer row */}
      <section className="border-b border-hairline px-6 py-12 md:px-16 md:py-14">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          {next ? (
            <Link href={withLang(`/work/${next.slug}`, lang)} className="group">
              <p className="text-[11px] uppercase tracking-widest text-muted">
                {labels.nextProject} · {String(next.order).padStart(2, "0")} /{" "}
                {String(projects.length).padStart(2, "0")}
              </p>
              <p className={`mt-2 text-[clamp(28px,4vw,48px)] font-bold group-hover:text-accent ${serif}`}>
                {isCn ? next.titleCn : next.title} &gt;&gt;
              </p>
            </Link>
          ) : (
            <Link href={homeHref(lang)} className="group">
              <p className={`text-2xl font-bold group-hover:text-accent ${serif}`}>
                {isCn ? "返回首页" : "Back home"} →
              </p>
            </Link>
          )}
          {project.links[0] ? (
            <a
              href={project.links[0].url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-accent hover:underline"
            >
              {labels.viewCase}
            </a>
          ) : null}
        </div>
      </section>

      <footer className="bg-ink px-6 py-16 text-cream md:px-16 md:py-20">
        <p className={`${serif} text-[clamp(36px,6vw,72px)] font-bold leading-[1.05]`}>
          {isCn ? (
            <>
              一起做点
              <br />
              <span className="text-coral">有意思</span>的事。
            </>
          ) : (
            <>
              Let&apos;s make
              <br />
              <span className="text-coral">something</span> together.
            </>
          )}
        </p>
        <div className="mt-8 flex flex-wrap gap-6 text-sm">
          <a href={`mailto:${siteLinks.email}`} className="underline underline-offset-2 hover:text-coral">
            {siteLinks.email}
          </a>
          <a
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-coral"
          >
            LinkedIn ↗
          </a>
          <a
            href={siteLinks.xiaohongshu}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2 hover:text-coral"
          >
            {isCn ? "小红书 @BLACKBOEI ↗" : "Xiaohongshu @BLACKBOEI ↗"}
          </a>
        </div>
      </footer>
    </main>
  );
}
