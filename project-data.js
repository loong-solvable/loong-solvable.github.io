window.TQYProjectLedger = {
  categories: [
    { id: "all", label: "全部" },
    { id: "product", label: "产品与商业" },
    { id: "content", label: "内容与信息" },
    { id: "agent", label: "AI 与 Agent" },
    { id: "automation", label: "自动化运营" },
    { id: "engineering", label: "游戏与工程" },
    { id: "media", label: "视频与声音" },
    { id: "experiment", label: "实验记录" }
  ],
  evidence: {
    A: "真实运行或交付",
    B: "已有代码或工程产物",
    C: "原型或阶段记录",
    "A/B": "关键链路已验收",
    "B/C": "实验工程或局部链路",
    S: "个人记录，未独立核验"
  },
  projects: [
    {
      slug: "bigpoplar",
      title: "Bigpoplar AI 工具站",
      category: "product",
      grade: "B",
      summary: "把文件转换、图片压缩、文本润色、AI 修图和资料库做成全栈工具站。",
      boundary: "曾完成公网部署；当前域名与 HTTPS 重新验收前，不提供失效外链。"
    },
    {
      slug: "xhsgeo",
      title: "xhsGEO 文案与分发平台",
      category: "product",
      featured: "primary",
      caseAnchor: "tuowen",
      grade: "B",
      summary: "连接商家资料、内容生成、真人接单、发布审核、账本和返佣的业务主链。",
      boundary: "工程链已落地，付费商家和真实投放结果待验证。",
      href: "./project-cases/index.html#tuowen",
      linkLabel: "查看档案"
    },
    {
      slug: "paid-ai-guide",
      title: "AI 小白实战手册与服务商品化",
      category: "product",
      grade: "B",
      summary: "完成 27 页文档、飞书交付版、销售页和工作流诊断服务框架。",
      boundary: "真实订单、转化率和持续服务收入未核验。"
    },
    {
      slug: "client-content-system",
      title: "B 端 AI 内容系统定制",
      category: "product",
      grade: "B",
      summary: "完成真实客户定制，沉淀需求拆解、权限边界、内容结构和交付方法。",
      boundary: "客户资料不公开，不包装成公开产品。"
    },
    {
      slug: "wechat-digest",
      title: "微信群聊日报",
      category: "content",
      featured: "case",
      caseAnchor: "wechat-digest",
      grade: "A",
      summary: "本地读取群聊，完成分群摘要、低价值过滤、重要性排序和报告落盘。",
      boundary: "已有两次真实批量运行、测试、构建和覆盖校验。",
      href: "./project-cases/index.html#wechat-digest",
      linkLabel: "查看档案"
    },
    {
      slug: "automaticstream",
      title: "AI 早报 / AutomaticStream",
      category: "content",
      featured: "case",
      caseAnchor: "morning-brief",
      grade: "B",
      summary: "从浏览器、RSS 和公开 API 采集信号，整理成结构化每日早报。",
      boundary: "采集链已运行，成品质量和维护成本仍需持续核验。",
      href: "./project-cases/index.html#morning-brief",
      linkLabel: "查看档案"
    },
    {
      slug: "writing-pipeline",
      title: "母文章创作流水线",
      category: "content",
      grade: "B",
      summary: "覆盖选题研究、证据绑定、分任务写作、双重质检、平台适配和发布确认。",
      boundary: "本地规则和测试链完整，真实发布确认仍为 0。"
    },
    {
      slug: "content-skills",
      title: "内容 Skill 与发布工具",
      category: "content",
      grade: "B",
      summary: "形成 X 书签整理、个人文风学习、公众号 HTML、知乎导出和并行调度工具。",
      boundary: "以可复用仓库和本地 Skill 为主要交付物。",
      href: "https://github.com/loong-solvable/copy-writing",
      linkLabel: "查看 GitHub"
    },
    {
      slug: "yunmeng",
      title: "云梦世界",
      category: "agent",
      featured: "primary",
      caseAnchor: "infinite-story",
      grade: "B",
      summary: "AI 驱动的角色与剧情游玩平台，包含世界观、多 Agent、记忆和社区体验。",
      boundary: "已开放使用示例数据的纯前端交互原型；完整平台的成本、长期运行和商业化状态仍待核验。",
      href: "./demos/yunmeng/",
      linkLabel: "查看交互演示"
    },
    {
      slug: "storymaker",
      title: "AAA-StoryMaker / 821 工程",
      category: "agent",
      grade: "B",
      summary: "持续开发 AI 故事、角色记忆、素材生产、会员和生产治理系统。",
      boundary: "支付、权益、回调和退款闭环尚未最终验收。"
    },
    {
      slug: "task-manager-agent",
      title: "TaskManagerAgent",
      category: "agent",
      grade: "B/C",
      summary: "实验性任务管理 Agent，完成观测能力和错误诊断加固。",
      boundary: "仍属于实验工程，私有仓库不作为公开入口。"
    },
    {
      slug: "memory-center",
      title: "MemoryCenter",
      category: "agent",
      grade: "B/C",
      summary: "本地个人记忆中心，处理长期记忆组织、检索和记忆溢出问题。",
      boundary: "核心项目为私有仓库，长期使用效果待验证。"
    },
    {
      slug: "bb-browser",
      title: "bb-browser",
      category: "agent",
      grade: "B",
      summary: "让 Agent 通过 CLI 和 MCP 使用保留登录态的真实 Chrome。",
      boundary: "已形成可复用浏览器控制能力。",
      href: "https://github.com/loong-solvable/bb-browser",
      linkLabel: "查看 GitHub"
    },
    {
      slug: "siw",
      title: "SIW 商业意图识别引擎",
      category: "agent",
      grade: "B/C",
      summary: "从帖子、评论和论坛文本中提取购买信号与商业意图。",
      boundary: "本地优先实验项目，真实业务效果待验证。",
      href: "https://loong-solvable.github.io/SIW/",
      linkLabel: "查看在线演示"
    },
    {
      slug: "xseeboost",
      title: "Xseeboost",
      category: "agent",
      grade: "B/C",
      summary: "X 互动增长市场的任务、Worker、验证、支付和后台审核基座。",
      boundary: "已有工程骨架，完整市场闭环未核验。",
      href: "https://github.com/loong-solvable/Xseeboost",
      linkLabel: "查看 GitHub"
    },
    {
      slug: "luxselect",
      title: "LuxSelect-AI",
      category: "agent",
      grade: "B/C",
      summary: "系统级 AI 划词助手，把选中文本直接交给模型处理。",
      boundary: "已有项目资产；私有仓库不作为公开入口，稳定交付状态待核验。"
    },
    {
      slug: "healthcare",
      title: "HealthCare",
      category: "agent",
      grade: "B/C",
      summary: "个人健康管理助手 Skill，用于健康资料整理、检查和日常决策支持。",
      boundary: "属于个人工具，不替代专业医疗判断。",
      href: "https://github.com/loong-solvable/HealthCare",
      linkLabel: "查看 GitHub"
    },
    {
      slug: "xianyu-auto",
      title: "闲鱼自动回复与自动发货",
      category: "automation",
      featured: "case",
      caseAnchor: "xianyu",
      grade: "B",
      summary: "完成安全审查、公开副本、服务器部署、心跳、监控和业务总开关加固。",
      boundary: "平台写操作关闭，长期稳定和付款交付未验收。",
      href: "https://github.com/loong-solvable/xianyu-auto-reply",
      linkLabel: "查看 GitHub"
    },
    {
      slug: "wechat-auto-reply",
      title: "微信 AI 自动回复",
      category: "automation",
      grade: "B",
      summary: "基于 wxauto 和兼容模型实现 Windows 微信 AI 回复工具。",
      boundary: "公开仓库已形成，长期运行效果未重新验收。",
      href: "https://github.com/loong-solvable/tqy-wechat-auto-reply",
      linkLabel: "查看 GitHub"
    },
    {
      slug: "channel-hub",
      title: "渠道运营中枢",
      category: "automation",
      grade: "B",
      summary: "统一管理闲鱼、淘宝、小红书网店、客服、发货和商品机会池。",
      boundary: "当前处于人工影子模式和小范围验收阶段。"
    },
    {
      slug: "game-asset-library",
      title: "游戏商品后台素材库",
      category: "engineering",
      grade: "A",
      summary: "完成素材隔离、格式校验、缩略图、上传编辑、引用保护和真实接口接入。",
      boundary: "通过后端、前端、真实上传和异常边界验收。"
    },
    {
      slug: "suzaku",
      title: "Suzaku 游戏运营后台",
      category: "engineering",
      grade: "A/B",
      summary: "修复 CPS 资格、设备窗口、上传边界、命名和订单角色导出。",
      boundary: "已部署测试栈；私有仓库不作为公开入口，完整商业运营状态未确认。"
    },
    {
      slug: "catjump",
      title: "CatJump",
      category: "engineering",
      grade: "B",
      summary: "完成 3D 美术层重建、槽位映射和干净项目归档。",
      boundary: "交付资产已形成，持续运营状态未核验。"
    },
    {
      slug: "indie-games",
      title: "Shici / qi-ju-lang / 多人小游戏",
      category: "engineering",
      grade: "C",
      summary: "做过游戏原型、关卡、结构和功能开发。",
      boundary: "尚未全部形成可持续产品。"
    },
    {
      slug: "campus-ai-assistant",
      title: "校园 AI 助手",
      category: "agent",
      grade: "B/C",
      summary: "为校内信息网络中心开发基于 Dify、DeepSeek、BGE-m3 和 RAG 的智能客服。",
      boundary: "保留工程经历，当前运行状态未复验。"
    },
    {
      slug: "livetalking",
      title: "LiveTalking 与本地音色克隆",
      category: "media",
      grade: "B",
      summary: "评估数字人链路，并在 Apple M4 上跑通 Qwen3-TTS / MLX 测试音频。",
      boundary: "生产级推理、长期直播和网页编辑尚未完成。"
    },
    {
      slug: "ai-comic-video",
      title: "AI 漫剧与视频工具链",
      category: "media",
      grade: "B",
      summary: "完成两部 AI 漫剧，走过脚本、角色一致性、分镜、配音、字幕和成片。",
      boundary: "形成完整制作经验，但没有明显收益。"
    },
    {
      slug: "skin-workbench",
      title: "换肤工作台",
      category: "engineering",
      grade: "B",
      summary: "使用 Node、Express、Multer 和 Three.js 做出资产上传、换装和预览 MVP。",
      boundary: "当前是可演示原型，不是生产产品。"
    },
    {
      slug: "business-experiments",
      title: "个人商业实验记录",
      category: "experiment",
      grade: "S",
      summary: "记录潮牌倒货、闲鱼接单、X 流量和网盘拉新等个人实验。",
      boundary: "数据未独立核验，不作为稳定收益或成熟项目。"
    }
  ]
};
