import Link from "next/link";
import { ProjectCover } from "@/components/ProjectCover";
import { projects, siteLinks } from "@/lib/projects";

const MARQUEE = [
  "Fashion Design",
  "Vibe Coding",
  "Brand Strategy",
  "Prompt Craft",
  "Vibe Marketing",
  "AI Native",
];

const INDEX_ROWS = [
  {
    n: "01",
    title: "Brand Identity & Visual Direction",
    desc: "Logo systems, lookbooks, packaging — fashion-trained eye.",
  },
  {
    n: "02",
    title: "Vibe Coding & AI Prototyping",
    desc: "Cursor, Claude, Next.js. Idea → working prototype in days.",
  },
  {
    n: "03",
    title: "Marketing & Growth Strategy",
    desc: "Brand positioning, GTM, narrative. MA in Marketing & Finance.",
  },
  {
    n: "04",
    title: "AI Direction & Prompt Craft",
    desc: "Workflows, system prompts, evals. Speak fluent LLM.",
  },
];

function coverPath(slug: string) {
  return `/images/covers/${slug}.jpg`;
}

export default function Home() {
  const marqueeItems = [...MARQUEE, ...MARQUEE];

  return (
    <main className="min-h-screen bg-cream text-ink">
      <nav className="flex items-center justify-between border-b border-hairline px-16 py-7">
        <Link href="/" className="text-[13px] font-medium uppercase tracking-[0.08em]">
          ANN · ZOU
        </Link>
        <div className="flex items-center gap-8 text-[11px] uppercase tracking-[0.08em] text-ink">
          <a href="#index" className="hover:text-accent">
            Index
          </a>
          <a href="#work" className="hover:text-accent">
            Work
          </a>
          <a href="#about" className="hover:text-accent">
            About
          </a>
          <a href="#contact" className="hover:text-accent">
            Contact →
          </a>
          <span className="text-muted">|</span>
          <span className="text-muted">EN</span>
          <span>/</span>
          <span>中</span>
        </div>
      </nav>

      <div className="overflow-hidden border-b border-hairline py-3">
        <div className="marquee-track flex w-max gap-8 whitespace-nowrap px-16 text-[11px] uppercase tracking-[0.08em] text-muted">
          {marqueeItems.map((item, i) => (
            <span key={`${item}-${i}`} className="flex items-center gap-8">
              {item} <span className="text-accent">✦</span>
            </span>
          ))}
        </div>
      </div>

      <section className="border-b border-hairline">
        <div className="relative grid min-h-[520px] grid-cols-1 lg:grid-cols-[1fr_45%]">
          <div className="relative bg-cream px-16 pb-8 pt-10">
            <div className="mb-6 flex justify-between text-[11px] uppercase tracking-[0.08em] text-muted">
              <span>Issue № 01</span>
              <span>Portfolio MMXXVI</span>
              <span>English Edition</span>
            </div>
            <div className="mb-10 h-px bg-hairline" />
            <h1 className="text-[clamp(72px,12vw,160px)] font-bold leading-[0.9] tracking-tight">
              Ann
              <br />
              Zou.
            </h1>
          </div>
          <div className="relative bg-ink">
            <div className="absolute inset-0 bg-coral/30" />
            <div className="relative flex h-full min-h-[400px] items-center justify-center p-8">
              <div className="relative flex h-[min(78vh,720px)] w-full max-w-[520px] items-center justify-center overflow-hidden border border-hairline/40 bg-cream-deep">
                <span className="px-4 text-center text-[10px] uppercase tracking-widest text-muted">
                  Add public/images/hero-portrait.jpg
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-hairline px-16 py-8">
          <div className="mb-6 h-px bg-hairline" />
          <p className="mb-8 max-w-3xl text-sm leading-relaxed text-muted">
            Zhiyi Zou — Fashion design × marketing & finance × AI-native creative.
          </p>
          <div className="grid gap-8 border-t border-hairline pt-8 md:grid-cols-3">
            <div>
              <p className="mb-2 text-[11px] uppercase tracking-widest text-muted">01 — Manifesto</p>
              <p className="text-sm leading-relaxed">
                Trained at the cutting table. Refined at the trading floor. Writing prompts like
                seams — every line earns its place.
              </p>
            </div>
            <div>
              <p className="text-[11px] uppercase tracking-widest text-muted">Available—FW &apos;26</p>
              <p className="mt-2 text-sm">Open to roles</p>
            </div>
            <div className="md:text-right">
              <p className="text-[11px] uppercase tracking-widest text-muted">Scroll ↓</p>
            </div>
          </div>
        </div>
      </section>

      <section id="about" className="border-b border-hairline px-16 py-16">
        <div className="mb-8 flex items-end justify-between border-b border-hairline pb-4 text-[11px] uppercase tracking-widest text-muted">
          <span>02</span>
          <span>About</span>
          <span>§ 02.00–02.04</span>
        </div>
        <div className="grid gap-12 lg:grid-cols-[320px_1fr]">
          <div className="relative flex aspect-[3/4] items-center justify-center overflow-hidden bg-cream-deep">
            <span className="px-4 text-center text-[10px] uppercase tracking-widest text-muted">
              Add public/images/about-portrait.jpg
            </span>
          </div>
          <div>
            <h2 className="text-[clamp(40px,6vw,72px)] font-bold leading-none">
              A practice between
              <br />
              fashion, finance
              <br />
              & AI.
            </h2>
            <p className="mt-8 max-w-xl text-sm leading-relaxed text-muted">
              I trained as a fashion designer (BFA), then took a hard turn into business —
              finishing an MA in Marketing & Finance because I wanted my taste backed by numbers.
              Today I work where those worlds meet AI: prompting like a stylist, prototyping like a
              founder, shipping like an engineer.
            </p>
          </div>
        </div>
      </section>

      <section id="work" className="border-b border-hairline px-16 py-16">
        <div className="mb-8 flex items-end justify-between border-b border-hairline pb-4 text-[11px] uppercase tracking-widest text-muted">
          <span>03</span>
          <span>Selected Work</span>
          <span>10 cases — FW 23 to date</span>
        </div>
        <h2 className="mb-10 text-[clamp(48px,8vw,96px)] font-bold leading-none">
          Selected
          <br />
          Work ——
        </h2>
        <div className="-mx-16 overflow-x-auto px-16 pb-4">
          <div className="flex w-max gap-6">
            {projects.map((p) => (
              <Link
                key={p.slug}
                href={`/work/${p.slug}`}
                className="group w-[min(85vw,420px)] shrink-0 border border-hairline bg-cream p-4 transition-colors hover:border-ink"
              >
                <ProjectCover src={coverPath(p.slug)} alt={p.title} />
                <p className="mt-4 text-[10px] uppercase tracking-widest text-muted">
                  Nº {String(p.order).padStart(2, "0")} — {p.year}
                </p>
                <p className="mt-2 text-2xl font-bold group-hover:text-accent">{p.title}.</p>
                <p className="mt-2 line-clamp-2 text-sm text-muted">{p.subtitle}</p>
                <p className="mt-4 text-[11px] uppercase tracking-widest">View →</p>
              </Link>
            ))}
          </div>
        </div>
        <p className="mt-6 text-[11px] uppercase tracking-widest text-muted">
          ← Drag to scroll → · 01 / 10 · 10 cases
        </p>
      </section>

      <section id="index" className="border-b border-hairline px-16 py-16">
        <div className="mb-8 flex items-end justify-between border-b border-hairline pb-4 text-[11px] uppercase tracking-widest text-muted">
          <span>05</span>
          <span>Index of Services</span>
          <span>Four practices</span>
        </div>
        <h2 className="mb-12 text-[clamp(48px,8vw,96px)] font-bold leading-none">Index.</h2>
        <ul className="divide-y divide-hairline border-t border-hairline">
          {INDEX_ROWS.map((row) => (
            <li key={row.n} className="grid grid-cols-[48px_1fr_auto] items-center gap-6 py-6">
              <span className="text-sm text-muted">{row.n}</span>
              <div>
                <p className="font-medium">{row.title}</p>
                <p className="mt-1 text-sm text-muted">{row.desc}</p>
              </div>
              <span className="text-xl">→</span>
            </li>
          ))}
        </ul>
      </section>

      <footer id="contact" className="px-16 py-20">
        <div className="mb-8 flex items-end justify-between border-b border-hairline pb-4 text-[11px] uppercase tracking-widest text-muted">
          <span>06</span>
          <span>Contact</span>
          <span>End of issue</span>
        </div>
        <h2 className="text-[clamp(48px,8vw,96px)] font-bold leading-none">
          Let&apos;s make
          <br />
          something.
        </h2>
        <div className="mt-12 flex flex-wrap gap-8 text-sm">
          <a href={`mailto:${siteLinks.email}`} className="underline underline-offset-4 hover:text-accent">
            {siteLinks.email}
          </a>
          <a
            href={siteLinks.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-accent"
          >
            LinkedIn ↗
          </a>
          <a
            href={siteLinks.xiaohongshu}
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-4 hover:text-accent"
          >
            Xiaohongshu ↗
          </a>
        </div>
        <p className="mt-16 text-[11px] text-muted">© 2026 Ann Zou — Built with Cursor + Next.js</p>
      </footer>
    </main>
  );
}
