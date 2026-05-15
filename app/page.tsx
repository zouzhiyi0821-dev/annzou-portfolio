import Link from "next/link";
import { projects, siteLinks } from "@/lib/projects";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#F5F0E8] text-[#1a1a1a] font-mono">
      <nav className="flex items-center justify-between px-8 md:px-16 py-7 border-b border-black/10">
        <span className="text-sm tracking-widest uppercase font-medium">ANN ZOU</span>
        <div className="flex gap-6 text-xs tracking-widest uppercase">
          <a href="#work">Work</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="px-8 md:px-16 pt-20 pb-16">
        <p className="text-xs tracking-widest uppercase opacity-40 mb-6">Portfolio MMXXVI</p>
        <h1 className="text-[clamp(48px,10vw,120px)] leading-none font-bold">Ann Zou.</h1>
        <p className="mt-6 max-w-xl opacity-70">
          Fashion design × marketing × AI-native creative.
        </p>
      </section>

      <section id="work" className="px-8 md:px-16 py-12 border-t border-black/10">
        <h2 className="text-xs tracking-widest uppercase opacity-40 mb-8">Selected Work</h2>
        <ul className="grid gap-4 md:grid-cols-2">
          {projects.map((p) => (
            <li key={p.slug}>
              <Link
                href={`/work/${p.slug}`}
                className="block border border-black/15 p-6 hover:bg-black hover:text-[#F5F0E8] transition-colors"
              >
                <span className="text-xs opacity-50">
                  {String(p.order).padStart(2, "0")} / {p.year}
                </span>
                <p className="text-xl font-bold mt-2">{p.title}</p>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      <footer id="contact" className="px-8 md:px-16 py-16 border-t border-black/10">
        <div className="flex flex-wrap gap-6 text-sm">
          <a href={`mailto:${siteLinks.email}`} className="underline">
            {siteLinks.email}
          </a>
          <a
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            LinkedIn
          </a>
          <a
            href={siteLinks.xiaohongshu}
            target="_blank"
            rel="noopener noreferrer"
            className="underline"
          >
            XHS
          </a>
        </div>
      </footer>
    </main>
  );
}
