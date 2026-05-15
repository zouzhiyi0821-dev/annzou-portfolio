import { notFound } from "next/navigation";
import Link from "next/link";
import { projects } from "@/lib/projects";

type Props = {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ lang?: string }>;
};

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }));
}

export default async function ProjectDetail({ params, searchParams }: Props) {
  const { slug } = await params;
  const { lang } = await searchParams;
  const isCn = lang === "cn";
  const project = projects.find((p) => p.slug === slug);
  if (!project) notFound();
  const prev = projects.find((p) => p.order === project.order - 1);
  const next = projects.find((p) => p.order === project.order + 1);

  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#1a1a1a] font-mono">
      <nav className="flex items-center justify-between px-16 py-7 border-b border-black/10">
        <Link href="/" className="text-sm tracking-widest uppercase font-medium">ANN ZOU</Link>
        <div className="flex items-center gap-8 text-xs tracking-widest uppercase">
          <Link href="/#work">Work</Link>
          <Link href="/#about">About</Link>
          <Link href="/#contact">Contact</Link>
          <Link href={`?lang=${isCn ? "en" : "cn"}`} className="opacity-50 hover:opacity-100">{isCn ? "EN" : "CN"}</Link>
        </div>
      </nav>

      <section className="px-16 pt-16 pb-12 border-b border-black/10">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-8">
          Project {String(project.order).padStart(2, "0")} — {project.year}
        </p>
        <h1 className="text-[clamp(56px,8vw,112px)] leading-none font-bold tracking-tight mb-6">
          {isCn ? project.titleCn : project.title}.
        </h1>
        <p className="max-w-2xl text-base leading-relaxed opacity-70">
          {isCn ? project.subtitleCn : project.subtitle}
        </p>
        <div className="grid grid-cols-4 mt-12 border-t border-b border-black/10">
          <div className="py-6 pr-8">
            <p className="text-xs tracking-widest uppercase opacity-40 mb-2">Year</p>
            <p className="text-sm">{project.year}</p>
          </div>
          <div className="py-6 pr-8">
            <p className="text-xs tracking-widest uppercase opacity-40 mb-2">Role</p>
            <p className="text-sm">{isCn ? project.roleCn : project.role}</p>
          </div>
          <div className="py-6 pr-8">
            <p className="text-xs tracking-widest uppercase opacity-40 mb-2">Status</p>
            <p className="text-sm">{isCn ? project.statusCn : project.status}</p>
          </div>
          <div className="py-6">
            <p className="text-xs tracking-widest uppercase opacity-40 mb-2">Links</p>
            {project.links.length > 0 ? (
              <div className="flex flex-col gap-1">
                {project.links.map((link) => (
                  <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                    className="text-sm underline underline-offset-2 hover:opacity-60 transition-opacity">
                    {isCn ? link.labelCn : link.label} &rarr;
                  </a>
                ))}
              </div>
            ) : <p className="text-sm opacity-30">-</p>}
          </div>
        </div>
      </section>

      <section className="px-16 py-16 border-b border-black/10">
        <div className="w-full aspect-video bg-black/5 flex items-center justify-center">
          <p className="text-xs tracking-widest uppercase opacity-30">Cover image</p>
        </div>
      </section>

      {project.links.length > 0 && (
        <section className="px-16 py-12 border-b border-black/10">
          <div className="flex flex-wrap gap-4">
            {project.links.map((link) => (
              <a key={link.url} href={link.url} target="_blank" rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 border border-[#1a1a1a] text-sm tracking-widest uppercase hover:bg-[#1a1a1a] hover:text-[#F5F0E8] transition-colors">
                {isCn ? link.labelCn : link.label} &rarr;
              </a>
            ))}
          </div>
        </section>
      )}

      <section className="px-16 py-16 flex items-center justify-between border-b border-black/10">
        {prev ? (
          <Link href={`/work/${prev.slug}${isCn ? "?lang=cn" : ""}`} className="group flex flex-col gap-1">
            <span className="text-xs tracking-widest uppercase opacity-40">Previous</span>
            <span className="text-xl font-bold group-hover:underline">{isCn ? prev.titleCn : prev.title}</span>
          </Link>
        ) : <div />}
        {next ? (
          <Link href={`/work/${next.slug}${isCn ? "?lang=cn" : ""}`} className="group flex flex-col gap-1 text-right">
            <span className="text-xs tracking-widest uppercase opacity-40">Next</span>
            <span className="text-xl font-bold group-hover:underline">{isCn ? next.titleCn : next.title}</span>
          </Link>
        ) : <div />}
      </section>

      <footer className="px-16 py-16">
        <p className="text-[clamp(40px,5vw,72px)] leading-none font-bold mb-12">
          {isCn ? "一起做点什么。" : "Let's make something."}
        </p>
        <div className="flex flex-wrap gap-6 text-sm">
          <a href="mailto:z15281908190@163.com" className="underline underline-offset-2 hover:opacity-60">z15281908190@163.com</a>
          <a href="https://www.linkedin.com/in/zhiyi-zou-76bb70327" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-60">LinkedIn</a>
          <a href="https://www.xiaohongshu.com/user/profile/59a5895982ec391dbffa466b" target="_blank" rel="noopener noreferrer" className="underline underline-offset-2 hover:opacity-60">XiaoHongShu</a>
        </div>
        <p className="mt-16 text-xs opacity-30">2026 Ann Zou</p>
      </footer>
    </main>
  );
}