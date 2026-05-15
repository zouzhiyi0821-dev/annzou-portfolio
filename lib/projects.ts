export type ProjectLink = {
  label: string;
  labelCn: string;
  url: string;
};

export type Project = {
  slug: string;
  order: number;
  title: string;
  titleCn: string;
  subtitle: string;
  subtitleCn: string;
  year: string;
  role: string;
  roleCn: string;
  tags: string[];
  tagsCn: string[];
  status: string;
  statusCn: string;
  links: ProjectLink[];
  cardMeta: string;
  cardMetaCn: string;
  cardDesc: string;
  cardDescCn: string;
  cardTags: string[];
  cardTagsCn: string[];
  galleryCount?: number;
};

export const projects: Project[] = [
  {
    slug: "semir",
    order: 1,
    title: "Semir",
    titleCn: "\u68ee\u9a6c",
    subtitle: "From the sewing machine — to commercial strategy — to the shop floor.",
    subtitleCn: "\u4ece\u7f1d\u7eab\u673a\uff0c\u5230\u5546\u4e1a\u7b56\u7565\uff0c\u518d\u5230\u7ec8\u7aef\u3002",
    year: "2023",
    role: "Marketing Intern",
    roleCn: "\u5e02\u573a\u8425\u9500\u5b9e\u4e60\u751f",
    tags: ["Brand", "Campaign", "Fashion"],
    tagsCn: ["\u54c1\u724c", "\u8425\u9500\u6d3b\u52a8", "\u65f6\u5c1a"],
    status: "Completed",
    statusCn: "\u5df2\u5b8c\u6210",
    links: [],
    cardMeta: "N\u00ba 01 \u2014 2022\u201323 \u00b7 CREATIVE PLANNER / SHANGHAI",
    cardMetaCn: "N\u00ba 01 \u2014 2022\u201323 \u00b7 \u521b\u610f\u4f01\u5212 / \u4e0a\u6d77",
    cardDesc:
      "Women's casual: trend to VM — design intent often diluted across sampling, merchandising and retail.",
    cardDescCn:
      "\u5973\u88c5\u4f11\u95f2\u7ebf\u8d8b\u52bf\u5230\u9648\u5217\u7684\u94fe\u8def\uff1a\u8bbe\u8ba1\u610f\u56fe\u5e38\u5728\u6253\u6837\u3001\u5546\u54c1\u4f01\u5212\u4e0e\u7ec8\u7aef\u5448\u73b0\u4e2d\u88ab\u7a00\u91ca\u3002",
    cardTags: ["TREND", "MERCHANDISE", "VISUAL"],
    cardTagsCn: ["\u8d8b\u52bf", "\u5546\u54c1", "\u89c6\u89c9"],
    galleryCount: 3,
  },
  {
    slug: "amillex-geo",
    order: 2,
    title: "Amillex GEO",
    titleCn: "Amillex GEO",
    subtitle: "AI-powered geographic market intelligence dashboard.",
    subtitleCn: "AI \u9a71\u52a8\u7684\u5730\u7406\u5e02\u573a\u6d1e\u5bdf\u4eea\u8868\u76d8\u3002",
    year: "2025",
    role: "Solo \u2014 design + build",
    roleCn: "\u72ec\u7acb \u2014 \u8bbe\u8ba1 + \u5f00\u53d1",
    tags: ["AI", "Vibe Coding", "Tooling"],
    tagsCn: ["AI", "Vibe Coding", "\u5de5\u5177\u5f00\u53d1"],
    status: "Beta",
    statusCn: "\u6d4b\u8bd5\u7248",
    links: [],
    cardMeta: "N\u00ba 02 \u2014 2026 \u00b7 INTERNSHIP / SYDNEY",
    cardMetaCn: "N\u00ba 02 \u2014 2026 \u00b7 \u5b9e\u4e60 / \u6089\u5c3c",
    cardDesc: "Vibe-coded GEO dashboards — how AI surfaces attract users.",
    cardDescCn:
      "Vibe coding \u642d\u5efa GEO \u4eea\u8868\u76d8\uff0c\u6d1e\u5bdf AI \u5f15\u64ce\u5982\u4f55\u5438\u5f15\u7528\u6237\u3002",
    cardTags: ["GEO", "AI AUDIT", "VIBE CODING"],
    cardTagsCn: ["GEO", "AI \u5ba1\u8ba1", "VIBE CODING"],
    galleryCount: 1,
  },
  {
    slug: "unilever",
    order: 3,
    title: "Unilever",
    titleCn: "\u8054\u5408\u5229\u534e",
    subtitle:
      "Pinduoduo personal-care Top-100 SKU teardown + maternal & infant claim tracing.",
    subtitleCn:
      "\u62fc\u591a\u591a\u6d17\u62a4\u5e02\u573a Top-100 SKU \u62c6\u89e3\u4e0e\u6bcd\u5a74\u5e02\u573a Claims \u6eaf\u6e90\u3002",
    year: "2024",
    role: "Marketing Strategist",
    roleCn: "\u5e02\u573a\u7b56\u7565\u5e08",
    tags: ["FMCG", "Strategy", "China"],
    tagsCn: ["\u5feb\u6d88\u54c1", "\u7b56\u7565", "\u4e2d\u56fd\u5e02\u573a"],
    status: "Completed",
    statusCn: "\u5df2\u5b8c\u6210",
    links: [],
    cardMeta: "N\u00ba 03 \u2014 2026 \u00b7 INTERNSHIP / SHANGHAI",
    cardMetaCn: "N\u00ba 03 \u2014 2026 \u00b7 \u5b9e\u4e60 / \u4e0a\u6d77",
    cardDesc:
      "Pinduoduo personal-care Top-100 SKU teardown + maternal & infant claim tracing.",
    cardDescCn:
      "\u62fc\u591a\u591a\u6d17\u62a4\u5e02\u573a Top-100 SKU \u62c6\u89e3\u4e0e\u6bcd\u5a74\u5e02\u573a Claims \u6eaf\u6e90\u3002",
    cardTags: ["DATA", "BRAND", "COMPETITOR"],
    cardTagsCn: ["\u6570\u636e", "\u54c1\u724c", "\u7ade\u54c1"],
    galleryCount: 2,
  },
  {
    slug: "max-mara",
    order: 4,
    title: "MAX MARA",
    titleCn: "MAX MARA",
    subtitle:
      "KOL operations, social-media SOPs and competitor monitoring for MAX MARA China e-commerce.",
    subtitleCn: "MAX MARA \u4e2d\u56fd\u7535\u5546 KOL \u8fd0\u8425\u3001\u793e\u5a92 SOP \u53ca\u7ade\u54c1\u76d1\u63a7\u3002",
    year: "2022",
    role: "E-commerce Intern",
    roleCn: "\u7535\u5546\u5b9e\u4e60\u751f",
    tags: ["Internship", "Luxury", "E-commerce"],
    tagsCn: ["\u5b9e\u4e60", "\u5962\u4f88\u54c1", "\u7535\u5546"],
    status: "Completed \u00b7 Shanghai",
    statusCn: "\u5df2\u5b8c\u6210 \u00b7 \u4e0a\u6d77",
    links: [
      {
        label: "Weibo campaign",
        labelCn: "\u5fae\u535a\u6d3b\u52a8",
        url: "https://m.weibo.cn/status/4766520067227875",
      },
    ],
    cardMeta: "N\u00ba 04 \u2014 2022 \u00b7 INTERNSHIP / SHANGHAI",
    cardMetaCn: "N\u00ba 04 \u2014 2022 \u00b7 \u5b9e\u4e60 / \u4e0a\u6d77",
    cardDesc: "KOL operations, social SOPs and competitor monitoring for luxury e-commerce.",
    cardDescCn: "\u5962\u4f88\u54c1\u7535\u5546 KOL \u8fd0\u8425\u3001\u793e\u5a92 SOP \u4e0e\u7ade\u54c1\u76d1\u63a7\u3002",
    cardTags: ["KOL", "LUXURY", "E-COMMERCE"],
    cardTagsCn: ["KOL", "\u5962\u4f88\u54c1", "\u7535\u5546"],
  },
  {
    slug: "prada-prisma",
    order: 5,
    title: "Prada Prisma",
    titleCn: "Prada Prisma",
    subtitle:
      "Wearable phygital fragrance ecosystem for Prada Beauty \u2014 L'Oreal Brandstorm 2026.",
    subtitleCn:
      "\u5168\u7403\u9996\u6b3e\u53ef\u7a7f\u6234\u865a\u5b9e\u878d\u5408\u9999\u6c1b\u751f\u6001\u7cfb\u7edf \u2014 \u6b27\u83b1\u96c5 Brandstorm 2026\u3002",
    year: "2026",
    role: "Team Lead (4)",
    roleCn: "\u56e2\u961f\u8d1f\u8d23\u4eba\uff084\u4eba\uff09",
    tags: ["L'Oreal Brandstorm", "ESG", "Innovation"],
    tagsCn: ["\u6b27\u83b1\u96c5 Brandstorm", "ESG", "\u521b\u65b0"],
    status: "Brandstorm 2026",
    statusCn: "Brandstorm 2026",
    links: [
      {
        label: "Case study",
        labelCn: "\u6848\u4f8b\u6587\u6863",
        url: "https://canva.link/goay0lktl9owqde",
      },
    ],
    cardMeta: "N\u00ba 05 \u2014 2026 \u00b7 L'OREAL BRANDSTORM / SYDNEY",
    cardMetaCn: "N\u00ba 05 \u2014 2026 \u00b7 \u6b27\u83b1\u96c5 Brandstorm / \u6089\u5c3c",
    cardDesc: "Wearable phygital fragrance ecosystem for Prada Beauty \u2014 L'Oreal Brandstorm 2026.",
    cardDescCn: "Prada Beauty \u53ef\u7a7f\u6234\u865a\u5b9e\u878d\u5408\u9999\u6c1b \u2014 \u6b27\u83b1\u96c5 Brandstorm 2026\u3002",
    cardTags: ["BRANDSTORM", "ESG", "INNOVATION"],
    cardTagsCn: ["BRANDSTORM", "ESG", "\u521b\u65b0"],
  },
  {
    slug: "glowguard",
    order: 6,
    title: "GlowGuard",
    titleCn: "GlowGuard",
    subtitle: "Sun-care repositioned as wellness ritual for Australia's sunxiety generation.",
    subtitleCn: "\u5c06\u9632\u6652\u971c\u4ece\u88ab\u52a8\u8d1f\u62c5\u91cd\u5851\u4e3a\u5065\u5eb7\u4eea\u5f0f\u3002",
    year: "2026",
    role: "Brand Mkt Lead (6)",
    roleCn: "\u54c1\u724c\u8425\u9500\u8d1f\u8d23\u4eba\uff086\u4eba\uff09",
    tags: ["Brand", "Wellness", "Social"],
    tagsCn: ["\u54c1\u724c", "\u5065\u5eb7", "\u793e\u5a92"],
    status: "Course \u00b7 Sydney",
    statusCn: "\u8bfe\u7a0b\u9879\u76ee \u00b7 \u6089\u5c3c",
    links: [
      {
        label: "Case study",
        labelCn: "\u6848\u4f8b\u6587\u6863",
        url: "https://canva.link/4xn791ktgo8kfov",
      },
    ],
    cardMeta: "N\u00ba 06 \u2014 2026 \u00b7 COURSE / SYDNEY",
    cardMetaCn: "N\u00ba 06 \u2014 2026 \u00b7 \u8bfe\u7a0b / \u6089\u5c3c",
    cardDesc: "Sun-care repositioned as wellness ritual for Australia's sunxiety generation.",
    cardDescCn: "\u9632\u6652\u4ece\u8d1f\u62c5\u91cd\u5851\u4e3a\u5065\u5eb7\u4eea\u5f0f\u3002",
    cardTags: ["BRAND", "WELLNESS", "SOCIAL"],
    cardTagsCn: ["\u54c1\u724c", "\u5065\u5eb7", "\u793e\u5a92"],
    galleryCount: 3,
  },
  {
    slug: "space-penguin",
    order: 7,
    title: "Space Penguin",
    titleCn: "Space Penguin",
    subtitle: "Virtual coworking brand strategy and social media competitive analysis.",
    subtitleCn: "\u865a\u62df\u5171\u4eab\u529e\u516c\u54c1\u724c\u7b56\u7565\u53ca\u793e\u5a92\u7ade\u54c1\u5206\u6790\u3002",
    year: "2025",
    role: "Brand Strategist",
    roleCn: "\u54c1\u724c\u7b56\u7565\u5e08",
    tags: ["Strategy", "Social", "Coworking"],
    tagsCn: ["\u7b56\u7565", "\u793e\u5a92", "\u5171\u4eab\u529e\u516c"],
    status: "Completed",
    statusCn: "\u5df2\u5b8c\u6210",
    links: [],
    cardMeta: "N\u00ba 07 \u2014 2025\u201326 \u00b7 BRAND STRATEGY / SYDNEY",
    cardMetaCn: "N\u00ba 07 \u2014 2025\u201326 \u00b7 \u54c1\u724c\u7b56\u7565 / \u6089\u5c3c",
    cardDesc: "Virtual coworking brand strategy + AU competitive map for Space Penguin.",
    cardDescCn: "Space Penguin \u865a\u62df\u5171\u4eab\u529e\u516c\u54c1\u724c\u7b56\u7565\u4e0e\u6fb3\u6d32\u7ade\u54c1\u5730\u56fe\u3002",
    cardTags: ["STRATEGY", "SOCIAL", "COWORKING"],
    cardTagsCn: ["\u7b56\u7565", "\u793e\u5a92", "\u5171\u4eab\u529e\u516c"],
    galleryCount: 3,
  },
  {
    slug: "hello-mom",
    order: 8,
    title: "Hello! MoM",
    titleCn: "Hello! MoM",
    subtitle: "On-demand childcare platform for Indonesia \u2014 4th place USYD MARD Industry Program.",
    subtitleCn: "\u5370\u5c3c\u6309\u9700\u6258\u80b2\u5e73\u53f0 \u2014 \u6089\u5c3c\u5927\u5b66 MARD \u884c\u4e1a\u8d5b\u7b2c\u56db\u540d\u3002",
    year: "2024",
    role: "Hello! MoM Team (4)",
    roleCn: "Hello! MoM \u56e2\u961f\uff084\u4eba\uff09",
    tags: ["Course", "Business", "Social Impact"],
    tagsCn: ["\u8bfe\u7a0b\u9879\u76ee", "\u5546\u4e1a", "\u793e\u4f1a\u5f71\u54cd"],
    status: "4th Place \u00b7 USYD",
    statusCn: "\u7b2c\u56db\u540d \u00b7 \u6089\u5c3c\u5927\u5b66",
    links: [
      {
        label: "Pitch deck",
        labelCn: "\u63d0\u6848\u6587\u6863",
        url: "https://canva.link/z4utvgxhpy3qm51",
      },
    ],
    cardMeta: "N\u00ba 08 \u2014 2024 \u00b7 BUSS5221 MARD / SYDNEY",
    cardMetaCn: "N\u00ba 08 \u2014 2024 \u00b7 MARD \u884c\u4e1a\u8d5b / \u6089\u5c3c",
    cardDesc: "On-demand childcare platform for Indonesia \u2014 4th place USYD MARD Industry Program.",
    cardDescCn: "\u5370\u5c3c\u6309\u9700\u6258\u80b2\u5e73\u53f0 \u2014 \u6089\u5c3c\u5927\u5b66 MARD \u884c\u4e1a\u8d5b\u7b2c\u56db\u540d\u3002",
    cardTags: ["COURSE", "BUSINESS", "SOCIAL IMPACT"],
    cardTagsCn: ["\u8bfe\u7a0b", "\u5546\u4e1a", "\u793e\u4f1a\u5f71\u54cd"],
  },
  {
    slug: "fear-of-death",
    order: 9,
    title: "Fear of Death",
    titleCn: "Fear of Death",
    subtitle: "BFA graduation collection \u2014 13 looks exploring mortality through fashion.",
    subtitleCn: "BFA \u6bd5\u4e1a\u8bbe\u8ba1\u7cfb\u5217 \u2014 13 \u5957\u9020\u578b\u3002",
    year: "2023",
    role: "Fashion Designer",
    roleCn: "\u670d\u88c5\u8bbe\u8ba1\u5e08",
    tags: ["Fashion Design", "BFA", "Collection"],
    tagsCn: ["\u670d\u88c5\u8bbe\u8ba1", "BFA", "\u6bd5\u4e1a\u7cfb\u5217"],
    status: "Graduated",
    statusCn: "\u5df2\u6bd5\u4e1a",
    links: [],
    cardMeta: "N\u00ba 09 \u2014 2022 \u00b7 BFA CAPSTONE / WUHAN",
    cardMetaCn: "N\u00ba 09 \u2014 2022 \u00b7 BFA \u6bd5\u4e1a\u8bbe\u8ba1 / \u6b66\u6c49",
    cardDesc: "BFA graduation collection exploring mortality through fashion.",
    cardDescCn: "BFA \u6bd5\u4e1a\u7cfb\u5217\uff0c\u4ee5\u65f6\u88c5\u63a2\u8ba8\u751f\u6b7b\u8bae\u9898\u3002",
    cardTags: ["FASHION", "BFA", "COLLECTION"],
    cardTagsCn: ["\u65f6\u88c5", "BFA", "\u7cfb\u5217"],
    galleryCount: 2,
  },
  {
    slug: "stylist",
    order: 10,
    title: "Stylist",
    titleCn: "Stylist",
    subtitle: "TV, TVC & short-drama styling \u2014 backstage to final frame.",
    subtitleCn: "\u7efc\u827a\u3001\u5e7f\u544a\u7247\u4e0e\u77ed\u5267\u9020\u578b\u3002",
    year: "2025",
    role: "Fashion Stylist",
    roleCn: "\u65f6\u88c5\u9020\u578b\u5e08",
    tags: ["Styling", "TV", "Fashion"],
    tagsCn: ["\u9020\u578b", "\u5f71\u89c6", "\u65f6\u88c5"],
    status: "Portfolio",
    statusCn: "\u4f5c\u54c1\u96c6",
    links: [],
    cardMeta: "N\u00ba 10 \u2014 2025 \u00b7 STYLIST / SHANGHAI",
    cardMetaCn: "N\u00ba 10 \u2014 2025 \u00b7 \u9020\u578b / \u4e0a\u6d77",
    cardDesc: "TV, TVC & short-drama styling \u2014 backstage to final frame.",
    cardDescCn: "\u7efc\u827a\u3001\u5e7f\u544a\u7247\u4e0e\u77ed\u5267\u9020\u578b \u2014 \u4ece\u540e\u53f0\u5230\u6210\u7247\u3002",
    cardTags: ["STYLING", "TV", "FASHION"],
    cardTagsCn: ["\u9020\u578b", "\u5f71\u89c6", "\u65f6\u88c5"],
    galleryCount: 4,
  },
];

export const siteLinks = {
  linkedin: "https://www.linkedin.com/in/zhiyi-zou-76bb70327",
  xiaohongshu: "https://www.xiaohongshu.com/user/profile/59a5895982ec391dbffa466b",
  email: "z15281908190@163.com",
};
