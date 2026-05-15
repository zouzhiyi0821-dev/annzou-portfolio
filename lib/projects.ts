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
  coverImage?: string;
};

export const projects: Project[] = [
  { slug: "semir", order: 1, title: "Semir", titleCn: "Semir", subtitle: "Youth fashion brand marketing.", subtitleCn: "Youth fashion marketing.", year: "2023", role: "Marketing Intern", roleCn: "Marketing Intern", tags: ["Brand"], tagsCn: ["Brand"], status: "Completed", statusCn: "Completed", links: [] },
  { slug: "amillex-geo", order: 2, title: "Amillex GEO", titleCn: "Amillex GEO", subtitle: "AI GEO dashboards.", subtitleCn: "AI GEO dashboards.", year: "2025", role: "Solo", roleCn: "Solo", tags: ["AI"], tagsCn: ["AI"], status: "Beta", statusCn: "Beta", links: [] },
  { slug: "unilever-karicare", order: 3, title: "Unilever Karicare", titleCn: "Unilever Karicare", subtitle: "Infant nutrition strategy.", subtitleCn: "Infant nutrition strategy.", year: "2024", role: "Strategist", roleCn: "Strategist", tags: ["FMCG"], tagsCn: ["FMCG"], status: "Completed", statusCn: "Completed", links: [] },
  { slug: "max-mara", order: 4, title: "MAX MARA", titleCn: "MAX MARA", subtitle: "KOL operations for luxury e-commerce.", subtitleCn: "KOL operations for luxury e-commerce.", year: "2022", role: "Intern", roleCn: "Intern", tags: ["Luxury"], tagsCn: ["Luxury"], status: "Completed", statusCn: "Completed", links: [{ label: "Weibo campaign", labelCn: "Weibo", url: "https://m.weibo.cn/status/4766520067227875?wm=3333_2001&from=10G1393010&sourcetype=weixin&s_trans=ZgrFDRhn9RW5hMTN1SgfJw%3D%3D_4766520067227875_s&s_channel=4&jumpfrom=weibocom" }] },
  { slug: "prada-prisma", order: 5, title: "Prada Prisma", titleCn: "Prada Prisma", subtitle: "Phygital fragrance for Brandstorm.", subtitleCn: "Phygital fragrance for Brandstorm.", year: "2026", role: "Team Lead", roleCn: "Team Lead", tags: ["Innovation"], tagsCn: ["Innovation"], status: "Top-4", statusCn: "Top-4", links: [{ label: "Case study", labelCn: "Case study", url: "https://canva.link/8fh1b47fyco5bzn" }] },
  { slug: "glowguard", order: 6, title: "GlowGuard", titleCn: "GlowGuard", subtitle: "Sun-care brand strategy.", subtitleCn: "Sun-care brand strategy.", year: "2026", role: "Brand Lead", roleCn: "Brand Lead", tags: ["Wellness"], tagsCn: ["Wellness"], status: "Course", statusCn: "Course", links: [{ label: "Case study", labelCn: "Case study", url: "https://canva.link/4xn791ktgo8kfov" }] },
  { slug: "space-penguin", order: 7, title: "Space Penguin", titleCn: "Space Penguin", subtitle: "Coworking brand strategy.", subtitleCn: "Coworking brand strategy.", year: "2025", role: "Strategist", roleCn: "Strategist", tags: ["Strategy"], tagsCn: ["Strategy"], status: "Beta", statusCn: "Beta", links: [] },
  { slug: "hello-mom", order: 8, title: "Hello! MoM", titleCn: "Hello! MoM", subtitle: "Childcare platform pitch.", subtitleCn: "Childcare platform pitch.", year: "2024", role: "Team", roleCn: "Team", tags: ["Business"], tagsCn: ["Business"], status: "4th Place", statusCn: "4th Place", links: [{ label: "Pitch deck", labelCn: "Pitch deck", url: "https://canva.link/z4utvgxhpy3qm51" }] },
  { slug: "fear-of-death", order: 9, title: "Fear of Death", titleCn: "Fear of Death", subtitle: "BFA graduation collection.", subtitleCn: "BFA graduation collection.", year: "2023", role: "Designer", roleCn: "Designer", tags: ["Fashion"], tagsCn: ["Fashion"], status: "Graduated", statusCn: "Graduated", links: [] },
  { slug: "stylist", order: 10, title: "Stylist", titleCn: "Stylist", subtitle: "AI styling assistant.", subtitleCn: "AI styling assistant.", year: "2025", role: "Solo", roleCn: "Solo", tags: ["AI"], tagsCn: ["AI"], status: "Beta", statusCn: "Beta", links: [] },
];

export const siteLinks = {
  linkedin: "https://www.linkedin.com/in/zhiyi-zou-76bb70327",
  xiaohongshu: "https://www.xiaohongshu.com/user/profile/59a5895982ec391dbffa466b",
  email: "z15281908190@163.com",
};