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
};

export const projects: Project[] = [
  { slug:"semir", order:1, title:"Semir", titleCn:"森马", subtitle:"Youth fashion brand marketing strategy.", subtitleCn:"青年时尚品牌营销策略。", year:"2023", role:"Marketing Intern", roleCn:"市场营销实习生", tags:["Brand","Campaign","Fashion"], tagsCn:["品牌","营销","时尚"], status:"Completed", statusCn:"已完成", links:[] },
  { slug:"amillex-geo", order:2, title:"Amillex GEO", titleCn:"Amillex GEO", subtitle:"AI-powered geographic market intelligence dashboard.", subtitleCn:"AI驱动的地理市场洞察仪表盘。", year:"2025", role:"Solo — design + build", roleCn:"独立设计+开发", tags:["AI","Vibe Coding","Tooling"], tagsCn:["AI","Vibe Coding","工具"], status:"Beta", statusCn:"测试版", links:[] },
  { slug:"unilever-karicare", order:3, title:"Unilever Karicare", titleCn:"联合利华 Karicare", subtitle:"Marketing strategy for Karicare infant nutrition in China.", subtitleCn:"Karicare婴幼儿营养品中国市场营销策略。", year:"2024", role:"Marketing Strategist", roleCn:"市场策略师", tags:["FMCG","Strategy","China"], tagsCn:["快消品","策略","中国市场"], status:"Completed", statusCn:"已完成", links:[] },
  { slug:"max-mara", order:4, title:"MAX MARA", titleCn:"MAX MARA", subtitle:"KOL operations and social-media SOPs for MAX MARA China e-commerce. 200+ KOLs sourced, 2M+ avg exposure.", subtitleCn:"MAX MARA中国电商KOL运营与社媒SOP，筛选200+ KOL，单项目平均曝光超200万。", year:"2022", role:"E-commerce Intern", roleCn:"电商实习生", tags:["Internship","Luxury","E-commerce"], tagsCn:["实习","奢侈品","电商"], status:"Completed · Shanghai", statusCn:"已完成·上海", links:[{ label:"Weibo campaign", labelCn:"微博活动", url:"https://m.weibo.cn/status/4766520067227875?wm=3333_2001&from=10G1393010&sourcetype=weixin&s_trans=ZgrFDRhn9RW5hMTN1SgfJw%3D%3D_4766520067227875_s&s_channel=4&jumpfrom=weibocom" }] },
  { slug:"prada-prisma", order:5, title:"Prada Prisma", titleCn:"Prada Prisma", subtitle:"Phygital fragrance ecosystem for L'Oreal Brandstorm 2026. Top-4 AU/NZ.", subtitleCn:"为欧莱雅Brandstorm 2026设计的虚实融合香氛生态，澳新Top 4。", year:"2026", role:"Team Lead (4)", roleCn:"团队负责人", tags:["Brandstorm","ESG","Innovation"], tagsCn:["Brandstorm","ESG","创新"], status:"Top-4 AU/NZ", statusCn:"澳新Top 4", links:[{ label:"Case study", labelCn:"案例文档", url:"https://canva.link/8fh1b47fyco5bzn" }] },
  { slug:"glowguard", order:6, title:"GlowGuard", titleCn:"GlowGuard", subtitle:"Sun-care brand repositioning sunscreen as a wellness ritual.", subtitleCn:"将防晒重新定位为健康仪式的品牌项目。", year:"2026", role:"Brand Mkt Lead (6)", roleCn:"品牌营销负责人", tags:["Brand","Wellness","Social"], tagsCn:["品牌","健康","社媒"], status:"Course · Sydney", statusCn:"课程项目·悉尼", links:[{ label:"Case study", labelCn:"案例文档", url:"https://canva.link/4xn791ktgo8kfov" }] },
  { slug:"space-penguin", order:7, title:"Space Penguin", titleCn:"Space Penguin", subtitle:"Virtual coworking brand strategy and competitive analysis.", subtitleCn:"虚拟共享办公品牌策略及竞品分析。", year:"2025", role:"Brand Strategist", roleCn:"品牌策略师", tags:["AI","Branding","Research"], tagsCn:["AI","品牌","研究"], status:"Beta", statusCn:"测试版", links:[] },
  { slug:"hello-mom", order:8, title:"Hello! MoM", titleCn:"Hello! MoM", subtitle:"On-demand childcare platform for Indonesia. 4th place USYD MARD.", subtitleCn:"印尼按需托育平台，悉尼大学MARD赛第四名。", year:"2024", role:"Hello! MoM Team (4)", roleCn:"团队成员", tags:["Course","Business","Social Impact"], tagsCn:["课程","商业","社会影响"], status:"4th Place · USYD", statusCn:"第四名·悉尼大学", links:[{ label:"Pitch deck", labelCn:"提案文档", url:"https://canva.link/z4utvgxhpy3qm51" }] },
  { slug:"fear-of-death", order:9, title:"Fear of Death", titleCn:"Fear of Death", subtitle:"BFA graduation collection — 13 looks exploring mortality through fashion.", subtitleCn:"BFA毕业设计系列，13套造型以时装探讨生死议题。", year:"2023", role:"Fashion Designer", roleCn:"服装设计师", tags:["Fashion Design","BFA","Collection"], tagsCn:["服装设计","BFA","系列"], status:"Graduated", statusCn:"已毕业", links:[] },
  { slug:"stylist", order:10, title:"Stylist", titleCn:"Stylist", subtitle:"AI personal styling assistant — outfit generation via LLM and vision.", subtitleCn:"AI个人造型助手，通过LLM和视觉模型生成穿搭建议。", year:"2025", role:"Solo — design + build", roleCn:"独立设计+开发", tags:["AI","Fashion","Vibe Coding"], tagsCn:["AI","时尚","Vibe Coding"], status:"Beta", statusCn:"测试版", links:[] },
];

export const siteLinks = {
  linkedin: "https://www.linkedin.com/in/zhiyi-zou-76bb70327",
  xiaohongshu: "https://www.xiaohongshu.com/user/profile/59a5895982ec391dbffa466b",
  email: "z15281908190@163.com",
};