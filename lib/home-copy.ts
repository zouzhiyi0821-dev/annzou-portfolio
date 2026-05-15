import type { Lang } from "./i18n";

export type HomeCopy = {
  nav: { index: string; work: string; about: string; contact: string };
  marquee: string[];
  hero: {
    issue: string;
    portfolio: string;
    edition: string;
    subtitle: string;
    manifestoLabel: string;
    manifesto: string;
    availableLabel: string;
    availableValue: string;
    scroll: string;
  };
  about: {
    section: string;
    heading: [string, string, string];
    body: string;
  };
  work: { section: string; meta: string; title: [string, string]; sliderHint: string };
  index: {
    section: string;
    meta: string;
    title: string;
    rows: { n: string; title: string; desc: string; slug: string }[];
  };
  contact: {
    section: string;
    meta: string;
    title: [string, string];
    emailLabel: string;
    emailNote: string;
    linksLabel: string;
    linkedin: string;
    xhs: string;
    footer: [string, string, string];
  };
};

export const homeCopy: Record<Lang, HomeCopy> = {
  en: {
    nav: { index: "Index", work: "Work", about: "About", contact: "Contact →" },
    marquee: ["Fashion Design", "Vibe Coding", "Brand Strategy", "Prompt Craft", "Vibe Marketing", "AI Native"],
    hero: {
      issue: "ISSUE Nº01",
      portfolio: "Portfolio MMXXVI",
      edition: "English Edition",
      subtitle: "Zhiyi Zou — Multi-disciplinary practice across fashion,\nbusiness, and AI.",
      manifestoLabel: "01 — Manifesto",
      manifesto:
        "From the sewing machine to commercial strategy to the shop floor.\nSame hand, sharper edge — every line earns its place.",
      availableLabel: "Available — Nov '26",
      availableValue: "Marketing · Branding · AI",
      scroll: "Scroll ↓",
    },
    about: {
      section: "About",
      heading: ["A practice between", "Fashion, Marketing", "& AI."],
      body: "I trained as a fashion designer (BFA), then took a hard turn into business — finishing an MA in Marketing & Finance because I wanted my taste backed by numbers. Today I work where those worlds meet AI: prompting like a stylist, prototyping like a founder, shipping like an engineer.",
    },
    work: {
      section: "Selected Work",
      meta: "Ten projects · 2022 → 2026",
      title: ["Selected", "Work ——"],
      sliderHint: "← Drag to scroll → · 01 / 10 · 10 cases",
    },
    index: {
      section: "Index of Services",
      meta: "Five practices",
      title: "Index.",
      rows: [
        {
          n: "01",
          title: "Brand Identity & Visual Direction",
          desc: "Brand identity, lookbook, packaging — fashion-trained eye, magazine instinct.",
          slug: "semir",
        },
        {
          n: "02",
          title: "Vibe Coding & AI Prototyping",
          desc: "Cursor + CSV-to-HTML pipelines. Idea to shipped GEO dashboard in a weekend.",
          slug: "amillex-geo",
        },
        {
          n: "03",
          title: "Marketing & Growth Strategy",
          desc: "Brand positioning, social ops, growth narrative. Sydney MA — taste backed by numbers.",
          slug: "space-penguin",
        },
        {
          n: "04",
          title: "Fashion Stylist",
          desc: "TV show & TVC & Short Drama fashion stylist.",
          slug: "stylist",
        },
      ],
    },
    contact: {
      section: "Contact",
      meta: "End of issue",
      title: ["Let's make", "something."],
      emailLabel: "· Email — say hi",
      emailNote: "Drop a brief, a link, or a 2 a.m. idea. I reply within 24h — always in plain language, always with a point of view.",
      linksLabel: "· Around the web",
      linkedin: "LinkedIn ↗",
      xhs: "Xiaohongshu @BLACKBOEI ↗",
      footer: ["© 2026 Ann Zou — All rights reserved.", "Built with Cursor + Vibma + a lot of espresso", "v1.0 — last issue 05.MMXXVI"],
    },
  },
  cn: {
    nav: { index: "目录", work: "作品", about: "关于", contact: "联系 →" },
    marquee: ["时装设计", "Vibe Coding", "品牌策略", "Prompt 工艺", "Vibe Marketing", "AI 原生"],
    hero: {
      issue: "ISSUE Nº01",
      portfolio: "Portfolio MMXXVI",
      edition: "中文版",
      subtitle: "邹芷仪 · Zhiyi Zou — 时尚设计 × 商业策略 × AI 原生创作",
      manifestoLabel: "01 — 宣言",
      manifesto: "从缝纫机到商业策略，再到终端。\n笔触未变，锋芒更甚 —— 每一行都自有其位",
      availableLabel: "开放求职 — 2026",
      availableValue: "接受全职 / 实习",
      scroll: "向下滚动 ↓",
    },
    about: {
      section: "关于",
      heading: ["穿梭于", "时装、营销", "与 AI 之间。"],
      body: "武汉纺织大学服装设计本科（2018–22）。担任森马女装创意企划近两年，做季度趋势、色彩与主题。现于悉尼大学读市场营销与金融硕士——同时是 Amillex 的 GEO Growth 实习生，用 vibe coding 提效，尝试 Vibe Marketing。",
    },
    work: {
      section: "精选作品",
      meta: "十个项目 · 2022 → 2026",
      title: ["代表", "作品 ——"],
      sliderHint: "← 拖动浏览 → · 01 / 10 · 10 个项目",
    },
    index: {
      section: "服务索引",
      meta: "五项实践",
      title: "索引.",
      rows: [
        {
          n: "01",
          title: "品牌识别与视觉方向",
          desc: "品牌系统、型录与包装——时装训练的审美与杂志感。",
          slug: "semir",
        },
        {
          n: "02",
          title: "Vibe Coding 与 AI 原型",
          desc: "Vibe-coded GEO 仪表盘，洞察 AI 如何吸引用户。",
          slug: "amillex-geo",
        },
        {
          n: "03",
          title: "营销与增长策略",
          desc: "品牌定位、社媒与内容策略——悉尼硕士，品味有数据支撑。",
          slug: "space-penguin",
        },
        {
          n: "04",
          title: "时装造型",
          desc: "综艺、广告片与短剧造型。",
          slug: "stylist",
        },
      ],
    },
    contact: {
      section: "联系",
      meta: "本期结束",
      title: ["一起", "做点什么。"],
      emailLabel: "· 邮件",
      emailNote: "欢迎项目简介、链接，或凌晨两点的想法。24 小时内回复。",
      linksLabel: "· 线上",
      linkedin: "LinkedIn ↗",
      xhs: "小红书 @BLACKBOEI ↗",
      footer: [
        "© 2026 Ann Zou — 保留所有权利",
        "Built with Cursor + Vibma + a lot of espresso",
        "v1.0 — last issue 05.MMXXVI",
      ],
    },
  },
};