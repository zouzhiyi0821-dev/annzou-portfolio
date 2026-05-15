import type { Lang } from "./i18n";
import type { Project } from "./projects";

export type ProcessStep = { title: string; body: string };

export type DetailMetric = { value: string; label: string; accent?: boolean };

export type DetailBlock = {
  meta: { date: string; category: string; keywords: string; linkStatus: string };
  /** Two-line hero title, e.g. ["Amillex", "GEO."] */
  heroTitle?: [string, string];
  heroSubtitle?: string;
  breadcrumb?: string;
  sectionCode: string;
  problem: string;
  role: string[];
  processSteps: ProcessStep[];
  outcomeQuote: string;
  metrics: DetailMetric[];
};

const blocks: Record<string, { en: DetailBlock; cn: DetailBlock }> = {
  semir: {
    cn: {
      meta: {
        date: "2022 Jul — 2023 Oct",
        category: "女装创意企划",
        keywords: "趋势预测 / 打样 / 陈列",
        linkStatus: "内部项目 (无外链)",
      },
      sectionCode: "001 SEMIR",
      problem:
        "女装休闲线从趋势到陈列的链路存在损耗：设计意图常在打样、商品企划与终端呈现中被稀释。",
      role: [
        "主导每季 2–3 条系列的趋势、色彩与主题方向，输出可执行的企划文档。",
        "协同商品与视觉团队，把趋势语言落到 SKU 结构与终端陈列。",
      ],
      processSteps: [
        { title: "趋势", body: "季度趋势、色彩与主题研究，形成系列叙事与关键 SKU 方向。" },
        { title: "开发", body: "跟进打样与商品结构，确保设计意图在开发环节不被稀释。" },
        { title: "陈列", body: "终端陈列方案与视觉节奏，强化品类识别与季内转化。" },
        { title: "反馈", body: "季末复盘销售与陈列效果，沉淀下一季企划输入。" },
      ],
      outcomeQuote: "品类季内提升约 15%：趋势—产品—陈列终于形成同一闭环。",
      metrics: [
        { value: "+15%", label: "品类季内提升", accent: true },
        { value: "85%", label: "企划落地率" },
        { value: "+10%", label: "终端转化" },
      ],
    },
    en: {
      heroTitle: ["Semir", "森马."],
      heroSubtitle: "Youth fashion brand marketing strategy and campaign execution.",
      meta: {
        date: "Jul 2022 — Oct 2023",
        category: "Women's creative planning",
        keywords: "Trend / Sampling / VM",
        linkStatus: "Internal project",
      },
      sectionCode: "001 SEMIR",
      problem:
        "Casual womenswear lost intent between trend, sampling, merchandising and in-store presentation.",
      role: [
        "Led trend, colour and theme for 2–3 lines per season with actionable planning docs.",
        "Worked with merch and visual teams to carry narrative through SKU structure and VM.",
      ],
      processSteps: [
        { title: "Trend", body: "Seasonal research → colour, theme and hero SKU direction." },
        { title: "Develop", body: "Tracked sampling and range architecture so intent survived production." },
        { title: "Display", body: "In-store rhythm and VM to strengthen category read and conversion." },
        { title: "Feedback", body: "Closed the loop with sell-through and VM learnings for next season." },
      ],
      outcomeQuote: "~15% category lift: trend, product and display finally closed one loop.",
      metrics: [
        { value: "+15%", label: "Category lift", accent: true },
        { value: "85%", label: "Plan execution" },
        { value: "+10%", label: "Store conversion" },
      ],
    },
  },
  "amillex-geo": {
    cn: {
      meta: {
        date: "2024 — Present",
        category: "GEO 增长实习",
        keywords: "Cursor / Vibe / CSV-HTML",
        linkStatus: "线上链接 (待补)",
      },
      sectionCode: "002 AMILLEX",
      problem:
        "AI 引擎的引用经常不可见：错误链接、语言漂移与隐性偏差会在 PR 团队发现前就损伤品牌可信度。缺少从 query → audit → strategy 的闭环。",
      role: [
        "用 Cursor vibe coding 搭建 GEO 仪表盘：导入客户 URL，跨 AI 平台做引用审计。",
        "把黑箱问题变成 PR 团队周末就能执行的检查清单与可视化报告。",
      ],
      processSteps: [
        { title: "查询", body: "定义品牌 query 集与竞品对照，建立可重复的监测口径。" },
        { title: "审计", body: "抓取 AI 引用、链接与表述，标记错误、漂移与缺口。" },
        { title: "渲染", body: "CSV → HTML 仪表盘，周报视图与异常高亮。" },
        { title: "简报", body: "客户可读的行动建议：修链、补内容、调叙事。" },
      ],
      outcomeQuote: "它把原本黑箱的 GEO 问题，变成了 PR 团队周末就能执行的检查清单。",
      metrics: [
        { value: "5", label: "AI 平台监测", accent: true },
        { value: "Long-tail", label: "Query 覆盖" },
        { value: "Vibe-coded", label: "交付方式" },
      ],
    },
    en: {
      heroTitle: ["Amillex", "GEO."],
      heroSubtitle: "AI-powered geographic market intelligence dashboard.",
      meta: {
        date: "2024 — Present",
        category: "GEO Growth intern",
        keywords: "Cursor / Vibe / CSV-HTML",
        linkStatus: "Live link (TBC)",
      },
      sectionCode: "002 AMILLEX",
      problem:
        "AI citations are often invisible — bad links, language drift and bias hurt credibility before PR notices. No query → audit → strategy loop.",
      role: [
        "Vibe-coded GEO dashboards in Cursor: ingest URLs, audit citations across AI surfaces.",
        "Turned a black box into a weekend checklist PR teams can actually run.",
      ],
      processSteps: [
        { title: "Query", body: "Brand + competitor query sets with repeatable monitoring rules." },
        { title: "Audit", body: "Capture citations, links and phrasing — flag errors and gaps." },
        { title: "Render", body: "CSV → HTML dashboards with weekly views and alerts." },
        { title: "Brief", body: "Plain-language actions: fix links, fill content, adjust narrative." },
      ],
      outcomeQuote: "It turned invisible GEO risk into a checklist PR can run every weekend.",
      metrics: [
        { value: "5", label: "AI surfaces", accent: true },
        { value: "Long-tail", label: "Query coverage" },
        { value: "Vibe-coded", label: "Delivery" },
      ],
    },
  },
  unilever: {
    cn: {
      meta: {
        date: "2024 — 2026",
        category: "快消策略实习",
        keywords: "SKU / 宣称 / 竞品",
        linkStatus: "内部项目 (无外链)",
      },
      sectionCode: "003 UNILEVER",
      problem:
        "高端母婴市场 SKU 众多、宣称复杂，品牌需要快速拆解竞品结构与宣称逻辑，支撑策略决策。",
      role: [
        "Top-100 SKU 拆解与宣称溯源，建立可检索的竞品数据库。",
        "输出策略层可读的结构化洞察，支持市场与品牌团队讨论。",
      ],
      processSteps: [
        { title: "扫描", body: "梳理渠道与 SKU 清单，确定监测范围与优先级。" },
        { title: "聚类", body: "按价格带、功效与宣称维度聚类，看清竞争格局。" },
        { title: "追踪", body: "持续更新宣称与包装变化，标记异常与机会。" },
        { title: "简报", body: "周报式输出：结构图 + 关键发现 + 策略提示。" },
      ],
      outcomeQuote: "把分散的 SKU 与宣称信息，变成团队每周都能打开的竞争地图。",
      metrics: [
        { value: "+25%", label: "决策效率", accent: true },
        { value: "Top-100", label: "SKU 覆盖" },
        { value: "100+", label: "宣称条目" },
      ],
    },
    en: {
      meta: {
        date: "2024 — 2026",
        category: "FMCG strategy intern",
        keywords: "SKU / Claims / Competitors",
        linkStatus: "Internal project",
      },
      sectionCode: "003 UNILEVER",
      problem:
        "Premium maternal & infant is SKU-heavy and claim-dense — the brand needed fast competitive structure and claim logic.",
      role: [
        "Top-100 SKU disassembly + claim tracing into a searchable competitor database.",
        "Structured insights strategists could use in weekly reviews.",
      ],
      processSteps: [
        { title: "Scan", body: "Mapped channels and SKU universe; set monitoring priorities." },
        { title: "Cluster", body: "Clustered by price tier, benefit and claims to see the field." },
        { title: "Track", body: "Updated packaging and claims; flagged shifts and openings." },
        { title: "Brief", body: "Weekly maps + findings + implications for brand teams." },
      ],
      outcomeQuote: "Scattered SKU and claim data became a map the team could open every week.",
      metrics: [
        { value: "+25%", label: "Decision speed", accent: true },
        { value: "Top-100", label: "SKU coverage" },
        { value: "100+", label: "Claim rows" },
      ],
    },
  },
  "max-mara": {
    cn: {
      meta: {
        date: "2022",
        category: "奢侈品电商实习",
        keywords: "KOL / 社媒 SOP / 竞品",
        linkStatus: "微博活动 (外链)",
      },
      sectionCode: "004 MAX MARA",
      problem:
        "奢侈品电商需要稳定的内容节奏与 KOL 体系，同时持续监控竞品活动与曝光表现。",
      role: [
        "筛选 200+ KOL，建立合作 SOP 与内容模板。",
        "竞品社媒监控与单项目平均曝光 200 万+ 的活动执行。",
      ],
      processSteps: [
        { title: "筛选", body: "按调性、粉丝结构与历史转化筛选 KOL 池。" },
        { title: "SOP", body: "标准化 briefing、审稿与发布流程，降低协作损耗。" },
        { title: "投放", body: "活动排期、素材协同与数据回收。" },
        { title: "复盘", body: "曝光、互动与竞品对照，沉淀下一波策略。" },
      ],
      outcomeQuote: "单项目平均曝光超 200 万，KOL 体系从「找人」变成「可复用流程」。",
      metrics: [
        { value: "200+", label: "KOL 合作", accent: true },
        { value: "2M+", label: "平均曝光" },
        { value: "SOP", label: "流程沉淀" },
      ],
    },
    en: {
      meta: {
        date: "2022",
        category: "Luxury e-com intern",
        keywords: "KOL / Social SOP / Competitors",
        linkStatus: "Weibo campaign ↗",
      },
      sectionCode: "004 MAX MARA",
      problem:
        "Luxury e-commerce needs steady content rhythm, a reliable KOL system, and always-on competitor monitoring.",
      role: [
        "Sourced 200+ KOLs; built collaboration SOPs and content templates.",
        "Ran campaigns with 2M+ avg exposure per project; tracked competitor social.",
      ],
      processSteps: [
        { title: "Source", body: "Filtered KOLs by tone, audience quality and conversion history." },
        { title: "SOP", body: "Standardised briefing, review and publishing to cut friction." },
        { title: "Launch", body: "Scheduling, asset coordination and performance capture." },
        { title: "Review", body: "Exposure, engagement and competitor benchmarks for next wave." },
      ],
      outcomeQuote: "2M+ avg exposure per project — KOL ops became a repeatable system, not ad hoc casting.",
      metrics: [
        { value: "200+", label: "KOLs sourced", accent: true },
        { value: "2M+", label: "Avg exposure" },
        { value: "SOP", label: "Playbook" },
      ],
    },
  },
  "prada-prisma": {
    cn: {
      meta: {
        date: "2026",
        category: "欧莱雅 Brandstorm",
        keywords: "Phygital / ESG / 创新",
        linkStatus: "案例文档 (Canva)",
      },
      sectionCode: "005 PRADA",
      problem:
        "液体香氛占主导（约 96.8%），Z 世代需要更低风险的奢华仪式与可触摸的体验。",
      role: [
        "主导 Prada Prisma：NFC 胶囊 + AI 顾问的 wearable phygital 香氛系统。",
        "刀片 + 耗材商业模式与 L'Oréal Brandstorm 2026 提案。",
      ],
      processSteps: [
        { title: "洞察", body: "用户仪式、风险感知与 phygital 触点机会。" },
        { title: "构建", body: "产品叙事、胶囊系统与数字体验原型。" },
        { title: "仪式", body: "穿戴、解压与社交分享的场景设计。" },
        { title: "循环", body: "耗材复购与 ESG 材料叙事闭环。" },
      ],
      outcomeQuote:
        "Prada Prisma 把转瞬即逝的液体香氛，转化为可触摸、可连接、可表达身份的 phygital 仪式。",
      metrics: [
        { value: "2.5mo", label: "开发周期", accent: true },
        { value: "85%", label: "概念验证" },
        { value: "4", label: "团队人数" },
      ],
    },
    en: {
      meta: {
        date: "2026",
        category: "L'Oreal Brandstorm",
        keywords: "Phygital / ESG / Innovation",
        linkStatus: "Case study ↗",
      },
      sectionCode: "005 PRADA",
      problem:
        "Liquid fragrance dominates (~96.8%); Gen Z wants lower-risk luxury rituals and tangible experiences.",
      role: [
        "Led Prada Prisma — NFC capsules + AI advisor in a wearable phygital fragrance system.",
        "Blade + consumables model; L'Oréal Brandstorm 2026 pitch.",
      ],
      processSteps: [
        { title: "Insight", body: "Ritual, risk perception and phygital touchpoint opportunities." },
        { title: "Build", body: "Narrative, capsule system and digital experience prototype." },
        { title: "Ritual", body: "Wearable, fidget and social sharing scenario design." },
        { title: "Loop", body: "Consumable repeat + ESG materials story." },
      ],
      outcomeQuote:
        "Prada Prisma turns fleeting liquid scent into a touchable, connected, identity-forward phygital ritual.",
      metrics: [
        { value: "2.5mo", label: "Build cycle", accent: true },
        { value: "85%", label: "Concept validation" },
        { value: "4", label: "Team size" },
      ],
    },
  },
  glowguard: {
    cn: {
      meta: {
        date: "2026",
        category: "课程 · 悉尼",
        keywords: "品牌 / 健康 / 社媒",
        linkStatus: "案例文档 (Canva)",
      },
      sectionCode: "006 GLOW",
      problem:
        "澳洲是「皮肤癌之都」，用户把防晒当负担；需要把防晒重新定义为 wellness ritual，缓解 sunxiety。",
      role: [
        "品牌营销负责人：定位、产品线与 12 个月社媒日历。",
        "RACE 框架：Reach — Act — Convert — Engage。",
      ],
      processSteps: [
        { title: "洞察", body: "Sunxiety 人群、场景与情绪触发点。" },
        { title: "品牌", body: "GlowGuard 视觉与「guard your glow」叙事。" },
        { title: "产品", body: "四层产品线与使用场景映射。" },
        { title: "计划", body: "12 个月内容与渠道节奏。" },
      ],
      outcomeQuote: "让澳洲用户从「防晒负担 + 情绪压力」中解放出来。",
      metrics: [
        { value: "RACE", label: "增长框架", accent: true },
        { value: "4-tier", label: "产品线" },
        { value: "12-mo", label: "内容日历" },
      ],
    },
    en: {
      meta: {
        date: "2026",
        category: "Course · Sydney",
        keywords: "Brand / Wellness / Social",
        linkStatus: "Case study ↗",
      },
      sectionCode: "006 GLOW",
      problem:
        "Australia's 'skin cancer capital' treats sunscreen as a chore — reposition as wellness for the sunxiety generation.",
      role: [
        "Brand lead: positioning, product tiers and 12-month social calendar.",
        "RACE framework: Reach — Act — Convert — Engage.",
      ],
      processSteps: [
        { title: "Insight", body: "Sunxiety segments, moments and emotional triggers." },
        { title: "Brand", body: "GlowGuard identity and 'guard your glow' narrative." },
        { title: "Product", body: "Four-tier line mapped to use occasions." },
        { title: "Plan", body: "12-month content and channel rhythm." },
      ],
      outcomeQuote: "Free Australians from 'sunscreen burden + anxiety' through ritual, not lecture.",
      metrics: [
        { value: "RACE", label: "Growth frame", accent: true },
        { value: "4-tier", label: "Product line" },
        { value: "12-mo", label: "Calendar" },
      ],
    },
  },
  "space-penguin": {
    cn: {
      meta: {
        date: "2025 — 2026",
        category: "品牌策略",
        keywords: "竞品 / 社媒 / 共享办公",
        linkStatus: "内部项目 (无外链)",
      },
      sectionCode: "007 PENGUIN",
      problem:
        "悉尼联合办公竞争激烈且同质化明显；Space Penguin 需要更清晰差异化定位与内容体系。",
      role: [
        "重定义 USP 与内容策略；测算市场规模并对标主要竞品。",
        "升级 Instagram 视觉，规划月度内容并主导三场拍摄（80+ 图 / 15 条视频）。",
      ],
      processSteps: [
        { title: "市场", body: "澳洲共享办公规模约 5.37 亿澳元，200+ 运营商格局。" },
        { title: "竞品", body: "GetCroissant、Deskpass 及本地玩家：覆盖、定价、社媒语调。" },
        { title: "品牌", body: "差异化叙事与视觉网格规范。" },
        { title: "内容", body: "月度日历 + 实拍素材库与发布节奏。" },
      ],
      outcomeQuote: "通过重定位与内容节奏优化，账号预计粉丝提升 18%，互动率提升 22%。",
      metrics: [
        { value: "$537M", label: "市场规模", accent: true },
        { value: "80+", label: "产出素材" },
        { value: "+18%", label: "粉丝增长" },
      ],
    },
    en: {
      meta: {
        date: "2025 — 2026",
        category: "Brand strategy",
        keywords: "Competitors / Social / Coworking",
        linkStatus: "Internal project",
      },
      sectionCode: "007 PENGUIN",
      problem:
        "Sydney coworking is crowded and homogenous — Space Penguin needed sharper differentiation and a content system.",
      role: [
        "Redefined USP and content strategy; sized market and benchmarked key players.",
        "Upgraded Instagram grid; monthly calendar and three shoots (80+ images, 15 videos).",
      ],
      processSteps: [
        { title: "Market", body: "~AUD 537M market, 200+ operators mapped." },
        { title: "Compete", body: "GetCroissant, Deskpass and locals on coverage, price, tone." },
        { title: "Brand", body: "Differentiation narrative and visual grid rules." },
        { title: "Content", body: "Monthly calendar + asset library and publishing rhythm." },
      ],
      outcomeQuote: "Repositioning + content rhythm target +18% followers and +22% engagement.",
      metrics: [
        { value: "$537M", label: "Market sized", accent: true },
        { value: "80+", label: "Assets" },
        { value: "+18%", label: "Follower lift" },
      ],
    },
  },
  "hello-mom": {
    cn: {
      meta: {
        date: "2024",
        category: "MARD 行业赛",
        keywords: "托育 / 平台 / 社会影响",
        linkStatus: "提案文档 (Canva)",
      },
      sectionCode: "008 MOM",
      problem:
        "印尼女性劳动参与受育儿约束显著；大量 20–40 岁已婚女性因照护退出职场；现有服务价格高、信任弱、供给不稳定。",
      role: [
        "搭建双边托育平台商业模式与 GTM。",
        "悉尼大学 MARD 行业赛第四名。",
      ],
      processSteps: [
        { title: "洞察", body: "职场母亲痛点、信任机制与供给缺口。" },
        { title: "画像", body: "用户与服务提供者分层与使用场景。" },
        { title: "平台", body: "匹配、评价与保障的产品逻辑。" },
        { title: "GTM", body: "冷启动、渠道与合作策略。" },
      ],
      outcomeQuote: "更好的照护，让更多母亲留在职场，也让照护劳动被看见、被尊重。",
      metrics: [
        { value: "4th", label: "MARD 名次", accent: true },
        { value: "13M", label: "照护者规模" },
        { value: "50%", label: "目标人群" },
      ],
    },
    en: {
      meta: {
        date: "2024",
        category: "MARD industry program",
        keywords: "Childcare / Platform / Impact",
        linkStatus: "Pitch deck ↗",
      },
      sectionCode: "008 MOM",
      problem:
        "Indonesian women's labour participation is constrained by care — many exit the workforce; supply is costly, weak-trust, unstable.",
      role: [
        "Built two-sided childcare platform model and GTM.",
        "4th place, USYD MARD Industry Program.",
      ],
      processSteps: [
        { title: "Insight", body: "Working mothers, trust gaps and supply holes." },
        { title: "Persona", body: "User and caregiver segments and use cases." },
        { title: "Platform", body: "Matching, ratings and safety product logic." },
        { title: "GTM", body: "Cold start, channels and partnerships." },
      ],
      outcomeQuote: "Better care so more mothers stay in work — and care labour is seen and valued.",
      metrics: [
        { value: "4th", label: "MARD place", accent: true },
        { value: "13M", label: "Caregivers" },
        { value: "50%", label: "Target reach" },
      ],
    },
  },
  "fear-of-death": {
    cn: {
      meta: {
        date: "2022",
        category: "BFA 毕业设计",
        keywords: "时装 / 系列 / 武汉",
        linkStatus: "内部项目 (无外链)",
      },
      sectionCode: "009 DEATH",
      problem:
        "亲人离世与医疗体验让我直面「身体如何承载时间与失去」，毕设由此展开。",
      role: [
        "将手术灯、监护仪等医疗符号转译为编织、拼贴与材料质感。",
        "完成 15 套系列，叙事分「发生、恶化、回归」三幕。",
      ],
      processSteps: [
        { title: "概念", body: "记录对死亡的感悟并确定主题与材料语言。" },
        { title: "实验", body: "编织、布料拼贴与多种材质试验。" },
        { title: "制作", body: "沟通、打样、打版与系列制作。" },
        { title: "展示", body: "模特拍摄与 Lookbook。" },
      ],
      outcomeQuote: "死亡应被理解为生命循环中的一次转场，也是新的开始。",
      metrics: [
        { value: "15", label: "套系列", accent: true },
        { value: "3", label: "叙事阶段" },
        { value: "BFA", label: "武汉纺织大学" },
      ],
    },
    en: {
      meta: {
        date: "2022",
        category: "BFA capstone",
        keywords: "Fashion / Collection / Wuhan",
        linkStatus: "Internal project",
      },
      sectionCode: "009 DEATH",
      problem:
        "Loss and clinical experience asked how the body holds time and grief — the collection grew from that question.",
      role: [
        "Translated medical symbols into weave, collage and material texture.",
        "15 looks in three acts: onset, worsening, return.",
      ],
      processSteps: [
        { title: "Concept", body: "Grief notes → theme and material language." },
        { title: "Experiment", body: "Weave, collage and material trials." },
        { title: "Make", body: "Pattern, sampling and full series production." },
        { title: "Show", body: "Lookbook and runway documentation." },
      ],
      outcomeQuote: "Death as a passage in the life cycle — and a beginning, not only an end.",
      metrics: [
        { value: "15", label: "Looks", accent: true },
        { value: "3", label: "Acts" },
        { value: "BFA", label: "Wuhan Textile Univ." },
      ],
    },
  },
  stylist: {
    cn: {
      meta: {
        date: "2025",
        category: "时装造型",
        keywords: "综艺 / 广告 / 短剧",
        linkStatus: "内部项目 (无外链)",
      },
      sectionCode: "010 STYLIST",
      problem:
        "在《这就是街舞》《蒙面舞王》等综艺及美心月饼广告、悉尼短剧统筹中，造型需兼顾艺人气质、镜头与现场节奏。",
      role: [
        "从灵感、搭配、Fitting 到现场临场调整的全流程造型。",
        "合作 12+ 艺人/品牌，单次拍摄最长 36 小时。",
      ],
      processSteps: [
        { title: "灵感", body: "按主题与艺人风格收集资讯并构思方向。" },
        { title: "搭配", body: "服装与配饰的多方案尝试。" },
        { title: "Fitting", body: "与艺人试衣调整，确保合身与风格统一。" },
        { title: "临场", body: "根据灯光、导演要求与环境灵活调整。" },
      ],
      outcomeQuote: "她把现场节奏稳住，成片也更有高级感。",
      metrics: [
        { value: "12+", label: "合作艺人/品牌", accent: true },
        { value: "1", label: "全球巡演造型" },
        { value: "36h", label: "最长单次拍摄" },
      ],
    },
    en: {
      meta: {
        date: "2025",
        category: "Fashion stylist",
        keywords: "TV / TVC / Short drama",
        linkStatus: "Internal project",
      },
      sectionCode: "010 STYLIST",
      problem:
        "On variety shows, TVCs and short dramas, styling must balance talent, camera and live-set rhythm.",
      role: [
        "Full flow: moodboard → looks → fitting → on-set adjustments.",
        "12+ talent/brand collaborations; shoots up to 36 hours.",
      ],
      processSteps: [
        { title: "Mood", body: "Research and direction per talent and brief." },
        { title: "Looks", body: "Wardrobe and accessory options." },
        { title: "Fitting", body: "Trials with talent for fit and coherence." },
        { title: "On set", body: "Live tweaks for light, director and environment." },
      ],
      outcomeQuote: "She held the set rhythm — the frames gained a sharper, more elevated finish.",
      metrics: [
        { value: "12+", label: "Collaborations", accent: true },
        { value: "1", label: "Tour styling" },
        { value: "36h", label: "Longest shoot" },
      ],
    },
  },
};

function splitHeroTitle(title: string): [string, string] {
  const parts = title.trim().split(/\s+/);
  if (parts.length <= 1) return [title, "."];
  const last = parts.pop()!;
  return [parts.join(" "), `${last}.`];
}

function withHeroDefaults(block: DetailBlock, project: Project, lang: Lang): DetailBlock {
  const isCn = lang === "cn";
  const n = String(project.order).padStart(2, "0");
  const displayTitle = isCn ? project.titleCn : project.title;
  return {
    ...block,
    heroTitle: block.heroTitle ?? splitHeroTitle(displayTitle),
    heroSubtitle: block.heroSubtitle ?? (isCn ? project.subtitleCn : project.subtitle),
    breadcrumb:
      block.breadcrumb ??
      (isCn
        ? `← 目录 · 项目 Nº ${n} — ${project.year}`
        : `← Index · Project Nº ${n} — ${project.year}`),
  };
}

function fallback(project: Project, lang: Lang): DetailBlock {
  const isCn = lang === "cn";
  return {
    meta: {
      date: project.year,
      category: isCn ? project.roleCn : project.role,
      keywords: (isCn ? project.tagsCn : project.tags).join(" / "),
      linkStatus: isCn ? "内部项目" : "Internal",
    },
    sectionCode: `${String(project.order).padStart(3, "0")} ${project.title.toUpperCase()}`,
    problem: isCn ? project.subtitleCn : project.subtitle,
    role: [isCn ? project.cardDescCn : project.cardDesc],
    processSteps: [
      { title: isCn ? "调研" : "Research", body: isCn ? project.cardDescCn : project.cardDesc },
      { title: isCn ? "执行" : "Build", body: isCn ? project.roleCn : project.role },
      { title: isCn ? "交付" : "Ship", body: project.year },
      { title: isCn ? "复盘" : "Review", body: isCn ? project.statusCn : project.status },
    ],
    outcomeQuote: isCn ? project.cardDescCn : project.cardDesc,
    metrics: [
      { value: project.year, label: isCn ? "年份" : "Year", accent: true },
      { value: String(project.order).padStart(2, "0"), label: "Nº" },
      { value: (isCn ? project.tagsCn : project.tags)[0] ?? "-", label: isCn ? "类型" : "Type" },
    ],
  };
}

export function getProjectDetail(slug: string, lang: Lang, project: Project): DetailBlock {
  const block = blocks[slug];
  const base = block ? block[lang] : fallback(project, lang);
  return withHeroDefaults(base, project, lang);
}

export function detailLabels(lang: Lang) {
  return lang === "cn"
    ? {
        overview: "概述",
        process: "过程",
        outcome: "结果",
        processHeading: "工作流程",
        challenge: "· 背景",
        myWork: "· 我的工作",
        year: "年份",
        role: "角色",
        stack: "工具栈",
        live: "链接",
        gallery: "图库",
        nextProject: "下一个项目",
        viewCase: "查看案例 +",
      }
    : {
        overview: "Overview",
        process: "Process",
        outcome: "Outcome",
        processHeading: "How it works.",
        challenge: "· Background",
        myWork: "· My work",
        year: "Year",
        role: "Role",
        stack: "Stack",
        live: "Live",
        gallery: "Gallery",
        nextProject: "Next project",
        viewCase: "View case +",
      };
}
