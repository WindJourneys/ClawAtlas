export interface LinkItem {
  title: string
  titleEn?: string
  url: string
  description?: string
  descriptionEn?: string
  tags?: string[]
  featured?: boolean
}

export interface Category {
  id: string
  name: string
  nameEn: string
  icon?: string
  links: LinkItem[]
}

export const categories: Category[] = [
  {
    id: 'official',
    name: '官方资源',
    nameEn: 'Official Resources',
    links: [
      { 
        title: 'OpenClaw 官网', 
        titleEn: 'OpenClaw Official Website',
        url: 'https://openclaw.ai/', 
        description: '开源、本地优先的自主 AI 助手',
        descriptionEn: 'Open-source, local-first autonomous AI assistant that manages your inbox, calendar, and more',
        tags: ['official', 'core'],
        featured: true
      },
      { 
        title: '官方 GitHub', 
        titleEn: 'GitHub Repository',
        url: 'https://github.com/openclaw/openclaw', 
        description: 'OpenClaw 源代码',
        descriptionEn: 'Complete source code, issues, and contributions',
        tags: ['official', 'github', 'open-source'],
        featured: true
      },
      { 
        title: '官方文档', 
        titleEn: 'Official Documentation',
        url: 'https://docs.openclaw.ai/', 
        description: '适用于任何操作系统的 AI 智能体 Gateway',
        descriptionEn: 'Complete documentation for installation, configuration, and usage',
        tags: ['official', 'docs'],
        featured: true
      },
      {
        title: 'OpenClaw AI/ML API',
        titleEn: 'OpenClaw AI/ML API',
        url: 'https://docs.aimlapi.com/quickstart/openclaw',
        description: 'OpenClaw AI/ML 平台 API 文档',
        descriptionEn: 'OpenClaw AI/ML API documentation for building AI agents',
        tags: ['official', 'api', 'docs']
      },
      {
        title: '发布日志',
        titleEn: 'Release Notes',
        url: 'https://github.com/openclaw/openclaw/releases',
        description: '版本更新和新特性',
        descriptionEn: 'Latest releases, changelog, and new features',
        tags: ['official', 'updates']
      },
      {
        title: '社区指南',
        titleEn: 'Community Guidelines',
        url: 'https://github.com/openclaw/openclaw/blob/main/CONTRIBUTING.md',
        description: '社区参与规范和最佳实践',
        descriptionEn: 'How to contribute, report issues, and engage with community',
        tags: ['official', 'community']
      },
      {
        title: '工具和插件',
        titleEn: 'Tools and Plugins',
        url: 'https://docs.openclaw.ai/tools',
        description: 'OpenClaw 工具和插件文档',
        descriptionEn: 'Tools, skills, and plugins documentation',
        tags: ['official', 'tools', 'plugins']
      }
    ]
  },
  {
    id: 'quickstart',
    name: '快速入门',
    nameEn: 'Quick Start',
    links: [
      {
        title: '安装指南',
        titleEn: 'Installation Guide',
        url: 'https://docs.openclaw.ai/start/getting-started',
        description: '5分钟快速安装 OpenClaw',
        descriptionEn: 'Get OpenClaw up and running in 5 minutes',
        tags: ['install', 'quickstart'],
        featured: true
      },
      {
        title: '配置向导',
        titleEn: 'Setup Wizard',
        url: 'https://docs.openclaw.ai/start/wizard',
        description: '交互式配置向导',
        descriptionEn: 'Interactive setup wizard for easy configuration',
        tags: ['setup', 'wizard']
      },
      {
        title: '完整设置指南',
        titleEn: 'Complete Setup Guide',
        url: 'https://www.verdent.ai/guides/openclaw-setup-guide-from-zero-to-ai-assistant',
        description: '从零到 AI 助手的完整指南',
        descriptionEn: 'Complete guide: From Zero to AI Assistant setup',
        tags: ['setup', 'tutorial', 'guide']
      },
      {
        title: '控制面板',
        titleEn: 'Web Control UI',
        url: 'https://docs.openclaw.ai/web/control-ui',
        description: '浏览器控制面板',
        descriptionEn: 'Browser-based dashboard for chat, config, and sessions',
        tags: ['ui', 'dashboard'],
        featured: true
      },
      {
        title: 'iOS/Android 配对',
        titleEn: 'Mobile Pairing',
        url: 'https://docs.openclaw.ai/nodes/pairing',
        description: '移动设备配对指南',
        descriptionEn: 'Pair iOS and Android devices for camera, voice, and canvas',
        tags: ['mobile', 'pairing']
      },
      {
        title: '新手常见问题',
        titleEn: 'Beginner FAQ',
        url: 'https://www.reddit.com/r/openclawsetup',
        description: 'OpenClaw 设置问题和解决方案',
        descriptionEn: 'Reddit community for OpenClaw setup help and solutions',
        tags: ['faq', 'community']
      }
    ]
  },
  {
    id: 'cloud',
    name: '云端服务',
    nameEn: 'Cloud Services',
    links: [
      { 
        title: 'Kimi Claw（云端）', 
        titleEn: 'Kimi Claw',
        url: 'https://www.kimi.com/bot', 
        description: '集成全球爆火的开源源智能体框架 OpenClaw',
        descriptionEn: 'Moonshot AI\'s integration with OpenClaw framework',
        tags: ['cloud', 'free', 'chinese']
      },
      { 
        title: 'MaxClaw（云端）', 
        titleEn: 'MaxClaw',
        url: 'https://agent.minimaxi.com/max-claw', 
        description: '10 秒内完成 OpenClaw 云端部署',
        descriptionEn: 'Deploy OpenClaw on MiniMax cloud in 10 seconds',
        tags: ['cloud', 'deploy']
      },
      { 
        title: 'DuClaw（云端）', 
        titleEn: 'DuClaw',
        url: 'https://cloud.baidu.com/product/duclaw.html', 
        description: 'AI 智能体的"即开即用"',
        descriptionEn: 'Baidu Cloud\'s instant AI agent deployment',
        tags: ['cloud', 'chinese']
      },
      { 
        title: 'ArkClaw（云端）', 
        titleEn: 'ArkClaw',
        url: 'https://www.volcengine.com/experience/ark?mode=claw', 
        description: '模型训练、推理、评测、精调',
        descriptionEn: 'Volcano Engine\'s model training and fine-tuning platform',
        tags: ['cloud', 'ml', 'chinese']
      },
      {
        title: '阿里云 MoltBot',
        titleEn: 'Alibaba Cloud MoltBot',
        url: 'https://www.aliyun.com/benefit/scene/moltbot',
        description: '三步轻松构建 AI 助理低至 9.9 元起',
        descriptionEn: 'Build AI assistant in 3 steps from ¥9.9/month',
        tags: ['cloud', 'chinese', 'paid']
      },
      {
        title: '腾讯云 OpenClaw',
        titleEn: 'Tencent Cloud OpenClaw',
        url: 'https://cloud.tencent.com/act/pro/openclaw',
        description: '让 OpenClaw 一直在线，稳定输出',
        descriptionEn: 'Keep OpenClaw always online with stable output',
        tags: ['cloud', 'chinese']
      },
      {
        title: '火山引擎 ClawDBot',
        titleEn: 'Volcano Engine ClawDBot',
        url: 'https://www.volcengine.com/activity/clawdbot',
        description: '分钟级部署，拥有您的私人 AI 管家',
        descriptionEn: 'Minute-level deployment, your private AI butler',
        tags: ['cloud', 'chinese']
      },
      {
        title: 'xCloud 托管部署',
        titleEn: 'xCloud Managed Hosting',
        url: 'https://xcloud.host/docs/how-to-deploy-openclaw-with-xcloud',
        description: 'OpenClaw 托管云服务',
        descriptionEn: 'Fully managed OpenClaw hosting service',
        tags: ['cloud', 'managed', 'global']
      },
      {
        title: 'Fly.io 部署',
        titleEn: 'Deploy on Fly.io',
        url: 'https://docs.openclaw.ai/deploy/flyio',
        description: '在 Fly.io 上部署 OpenClaw',
        descriptionEn: 'Deploy OpenClaw globally on Fly.io platform',
        tags: ['cloud', 'deploy', 'global']
      },
      {
        title: 'Railway 部署',
        titleEn: 'Deploy on Railway',
        url: 'https://docs.openclaw.ai/deploy/railway',
        description: '在 Railway 上快速部署',
        descriptionEn: 'Quick deployment on Railway platform',
        tags: ['cloud', 'deploy']
      },
      {
        title: 'Atlantic.Net 部署',
        titleEn: 'Atlantic.Net Deployment',
        url: 'https://www.atlantic.net/cloud-platform/openclaw-open-source-ai-agent-and-how-to-deploy-it-on-atlantic-net-cloud',
        description: '在 Atlantic.Net 云上部署 OpenClaw',
        descriptionEn: 'Deploy OpenClaw on Atlantic.Net cloud platform',
        tags: ['cloud', 'deploy']
      },
      {
        title: 'AWS 部署指南',
        titleEn: 'AWS Deployment Guide',
        url: 'https://dev.to/aws-builders/openclaw-meets-aws-end-to-end-testing-and-deployment-1ig1',
        description: 'OpenClaw 在 AWS 上的端到端部署',
        descriptionEn: 'End-to-end testing and deployment of OpenClaw on AWS',
        tags: ['cloud', 'aws', 'deploy']
      },
      {
        title: '免费部署方案',
        titleEn: 'Free Deployment Options',
        url: 'https://www.reddit.com/r/AgentsOfAI/comments/1r1b93b/how_to_deploy_and_use_openclaw_for_free_no_vps_no',
        description: '无需 VPS 和云服务的免费 OpenClaw',
        descriptionEn: 'Free OpenClaw deployment without VPS or cloud services',
        tags: ['cloud', 'free', 'deploy']
      }
    ]
  },
  {
    id: 'tutorials',
    name: '教程指南',
    nameEn: 'Tutorials',
    links: [
      {
        title: '完整设置指南（Substack）',
        titleEn: 'Complete Setup Guide',
        url: 'https://sidsaladi.substack.com/p/how-to-set-up-openclaw-the-complete',
        description: '从免费到付费的完整路径',
        descriptionEn: 'Complete guide mapping every route from free to paid options',
        tags: ['tutorial', 'setup', 'guide'],
        featured: true
      },
      {
        title: 'VPS 部署教程',
        titleEn: 'VPS Deployment Tutorial',
        url: 'https://www.youtube.com/watch?v=T0BCKJx4BHQ',
        description: '在 VPS 上安装和设置 OpenClaw',
        descriptionEn: 'Install and setup OpenClaw on VPS in 45 minutes',
        tags: ['tutorial', 'video', 'deploy']
      },
      {
        title: '完整设置教程',
        titleEn: 'Full Setup Tutorial',
        url: 'https://www.youtube.com/watch?v=fcZMmP5dsl4',
        description: 'OpenClaw 完整设置步骤',
        descriptionEn: 'Complete step-by-step OpenClaw setup walkthrough',
        tags: ['tutorial', 'video', 'setup']
      },
      {
        title: 'Discord 设置教程',
        titleEn: 'Discord Setup Tutorial',
        url: 'https://www.youtube.com/watch?v=eISYigXhyuo',
        description: 'OpenClaw Discord 集成教程系列',
        descriptionEn: 'Tutorial series: Setting up Discord integration',
        tags: ['tutorial', 'video', 'discord']
      },
      {
        title: '自主智能体教程',
        titleEn: 'Autonomous Agent Tutorial',
        url: 'https://www.youtube.com/watch?v=Itmf-5TCRKE',
        description: '将 OpenClaw 转为自主 GitHub 编码智能体',
        descriptionEn: 'Turn OpenClaw into autonomous GitHub coding agent',
        tags: ['tutorial', 'video', 'advanced']
      },
      {
        title: '24x7 AI 智能体部署',
        titleEn: 'Deploy 24x7 AI Agent',
        url: 'https://www.freecodecamp.org/news/how-to-deploy-your-own-24x7-ai-agent-using-openclaw',
        description: '部署你自己的 24x7 AI 智能体',
        descriptionEn: 'Deploy your own 24x7 AI agent using OpenClaw',
        tags: ['tutorial', 'deploy', 'guide']
      },
      {
        title: '云服务器部署实践',
        titleEn: 'Cloud Server Deployment',
        url: 'https://www.tencentcloud.com/techpedia/140030',
        description: 'OpenClaw 云服务器部署完整指南',
        descriptionEn: 'Complete guide for OpenClaw cloud server deployment',
        tags: ['tutorial', 'deploy', 'chinese']
      }
    ]
  },
  {
    id: 'channels',
    name: '聊天渠道',
    nameEn: 'Chat Channels',
    links: [
      {
        title: 'WhatsApp 集成',
        titleEn: 'WhatsApp Integration',
        url: 'https://docs.openclaw.ai/channels/whatsapp',
        description: '连接 WhatsApp 聊天应用',
        descriptionEn: 'Connect OpenClaw to WhatsApp for AI-powered conversations',
        tags: ['channel', 'messaging', 'popular'],
        featured: true
      },
      {
        title: 'Telegram 集成',
        titleEn: 'Telegram Integration',
        url: 'https://docs.openclaw.ai/channels/telegram',
        description: '连接 Telegram 机器人',
        descriptionEn: 'Set up OpenClaw as a Telegram bot',
        tags: ['channel', 'messaging', 'popular'],
        featured: true
      },
      {
        title: 'Discord 集成',
        titleEn: 'Discord Integration',
        url: 'https://docs.openclaw.ai/channels/discord',
        description: 'Discord 服务器机器人',
        descriptionEn: 'Add OpenClaw to your Discord server',
        tags: ['channel', 'messaging', 'popular'],
        featured: true
      },
      {
        title: 'iMessage 集成',
        titleEn: 'iMessage Integration',
        url: 'https://docs.openclaw.ai/channels/imessage',
        description: 'macOS iMessage 支持',
        descriptionEn: 'Use OpenClaw directly from macOS iMessage',
        tags: ['channel', 'messaging', 'macos']
      },
      {
        title: 'Signal 集成',
        titleEn: 'Signal Integration',
        url: 'https://docs.openclaw.ai/channels/signal',
        description: 'Signal 私密消息支持',
        descriptionEn: 'Private messaging with Signal integration',
        tags: ['channel', 'messaging', 'privacy']
      },
      {
        title: 'Mattermost 集成',
        titleEn: 'Mattermost Integration',
        url: 'https://docs.openclaw.ai/channels/mattermost',
        description: '企业级 Mattermost 支持',
        descriptionEn: 'Enterprise team messaging with Mattermost',
        tags: ['channel', 'messaging', 'enterprise']
      },
      {
        title: 'Line 集成',
        titleEn: 'Line Integration',
        url: 'https://docs.openclaw.ai/channels/line',
        description: 'Line 消息应用支持',
        descriptionEn: 'Line messaging app integration',
        tags: ['channel', 'messaging']
      },
      {
        title: 'Slack 集成',
        titleEn: 'Slack Integration',
        url: 'https://docs.openclaw.ai/channels/slack',
        description: 'Slack 工作区机器人',
        descriptionEn: 'Add OpenClaw to your Slack workspace',
        tags: ['channel', 'messaging', 'enterprise']
      }
    ]
  },
  {
    id: 'skills',
    name: 'Skills 生态',
    nameEn: 'Skills Ecosystem',
    links: [
      {
        title: 'ClawHub',
        titleEn: 'ClawHub',
        url: 'https://clawhub.ai/',
        description: 'OpenClaw 的公共 Skills 注册中心',
        descriptionEn: 'Public Skills registry for OpenClaw - discover and install extensions',
        tags: ['skills', 'marketplace'],
        featured: true
      },
      {
        title: 'Skills.sh',
        titleEn: 'Skills.sh',
        url: 'https://skills.sh/',
        description: 'Vercel 推出的 Skills 聚合站',
        descriptionEn: 'Skills aggregation site by Vercel',
        tags: ['skills', 'marketplace']
      },
      {
        title: '开发 Skills',
        titleEn: 'Develop Skills',
        url: 'https://docs.openclaw.ai/skills/development',
        description: '如何创建自定义 Skills',
        descriptionEn: 'Create custom Skills and extend OpenClaw capabilities',
        tags: ['skills', 'development', 'docs'],
        featured: true
      },
      {
        title: 'Skills 规范',
        titleEn: 'Skills Specification',
        url: 'https://docs.openclaw.ai/skills/specification',
        description: 'Skills 开发规范和最佳实践',
        descriptionEn: 'Skills development specification and best practices',
        tags: ['skills', 'docs', 'spec']
      },
      {
        title: '热门 Skills',
        titleEn: 'Popular Skills',
        url: 'https://clawhub.ai/explore',
        description: '浏览最受欢迎的 Skills',
        descriptionEn: 'Browse and discover most popular Skills',
        tags: ['skills', 'discover']
      }
    ]
  },
  {
    id: 'models',
    name: '大模型',
    nameEn: 'LLM Models',
    links: [
      {
        title: 'OpenAI GPT-5.4',
        titleEn: 'OpenAI GPT-5.4',
        url: 'https://platform.openai.com/docs/models',
        description: 'OpenAI 最先进的 Frontier 模型，支持自主代理',
        descriptionEn: 'Most advanced frontier model by OpenAI, autonomous agent support',
        tags: ['model', 'gpt', 'premium'],
        featured: true
      },
      {
        title: 'Anthropic Claude Sonnet 4.6',
        titleEn: 'Anthropic Claude Sonnet 4.6',
        url: 'https://www.anthropic.com/claude',
        description: '最强大的 Sonnet 模型，1M 上下文，混合推理',
        descriptionEn: 'Most capable Sonnet model, 1M context window, hybrid reasoning',
        tags: ['model', 'claude', 'premium'],
        featured: true
      },
      {
        title: 'Google Gemini 3.1 Pro',
        titleEn: 'Google Gemini 3.1 Pro',
        url: 'https://gemini.google.com/',
        description: '谷歌最新 AI 模型，增强推理和问题解决',
        descriptionEn: 'Google\'s latest AI model with enhanced reasoning and problem-solving',
        tags: ['model', 'google', 'multimodal'],
        featured: true
      },
      {
        title: 'X Grok',
        titleEn: 'X Grok',
        url: 'https://x.ai/',
        description: 'X 推出的实时信息 AI 助手',
        descriptionEn: 'Real-time AI assistant by X (formerly Twitter)',
        tags: ['model', 'x', 'realtime'],
        featured: true
      },
      {
        title: 'Meta Llama',
        titleEn: 'Meta Llama',
        url: 'https://llama.meta.com/',
        description: 'Meta 开源大模型系列',
        descriptionEn: 'Open-source LLM series by Meta',
        tags: ['model', 'meta', 'open-source'],
        featured: true
      },
      {
        title: 'Mistral AI',
        titleEn: 'Mistral AI',
        url: 'https://mistral.ai/',
        description: '欧洲开源 AI 模型',
        descriptionEn: 'European open-source AI models',
        tags: ['model', 'open-source', 'european']
      },
      {
        title: 'Perplexity',
        titleEn: 'Perplexity',
        url: 'https://www.perplexity.ai/',
        description: 'AI 搜索引擎，精准回答',
        descriptionEn: 'AI-powered search engine with accurate answers',
        tags: ['model', 'search', 'ai-search']
      },
      {
        title: 'Cohere',
        titleEn: 'Cohere',
        url: 'https://cohere.com/',
        description: '企业级 AI 文本生成',
        descriptionEn: 'Enterprise-grade AI text generation',
        tags: ['model', 'enterprise', 'nlp']
      },
      {
        title: 'Hugging Face',
        titleEn: 'Hugging Face',
        url: 'https://huggingface.co/',
        description: '开源模型和社区平台',
        descriptionEn: 'Open-source models and community platform',
        tags: ['model', 'open-source', 'hub']
      },
      { 
        title: '千问', 
        titleEn: 'Qwen',
        url: 'https://www.qianwen.com/', 
        description: '阿里云推出的超大规模语言模型',
        descriptionEn: 'Alibaba Cloud large-scale language model',
        tags: ['model', 'chinese']
      },
      { 
        title: '豆包', 
        titleEn: 'Doubao',
        url: 'https://www.doubao.com/', 
        description: '抖音旗下 AI 工具',
        descriptionEn: 'ByteDance AI tool and model',
        tags: ['model', 'chinese']
      },
      { 
        title: 'Kimi', 
        titleEn: 'Kimi AI',
        url: 'https://www.kimi.com/', 
        description: '会推理解析，能深度思考',
        descriptionEn: 'Reasoning and deep thinking capabilities',
        tags: ['model', 'chinese']
      },
      {
        title: 'DeepSeek',
        titleEn: 'DeepSeek',
        url: 'https://www.deepseek.com/',
        description: '国产开源大模型',
        descriptionEn: 'Open-source large language model from China',
        tags: ['model', 'open-source', 'chinese']
      },
      {
        title: '模型配置指南',
        titleEn: 'Model Configuration',
        url: 'https://docs.openclaw.ai/llm/providers',
        description: '配置不同模型提供商',
        descriptionEn: 'Configure various LLM providers (OpenAI, Anthropic, Ollama, etc.)',
        tags: ['model', 'config', 'docs'],
        featured: true
      },
      {
        title: 'Ollama 本地模型',
        titleEn: 'Ollama Local Models',
        url: 'https://docs.openclaw.ai/llm/ollama',
        description: '使用本地开源模型',
        descriptionEn: 'Run open-source models locally with Ollama',
        tags: ['model', 'local', 'open-source']
      }
    ]
  },
  {
    id: 'docs',
    name: '文档指南',
    nameEn: 'Documentation',
    links: [
      {
        title: 'OpenClaw 橙皮书',
        titleEn: 'OpenClaw Orange Book',
        url: 'https://my.feishu.cn/wiki/H27Iw9ussiaYbokymhncExtjnAh',
        description: '覆盖从认识到使用的所有关键信息',
        descriptionEn: 'Covers all key info from introduction to usage',
        tags: ['docs', 'guide', 'chinese']
      },
      {
        title: '万象 AI 实验室',
        titleEn: 'Wanxiang AI Lab',
        url: 'https://yunyinghui.feishu.cn/wiki/Ru7PwG82qiDGo1kGMFZcxqpGnnf',
        description: 'OpenClaw 知识手册，从入门到精通',
        descriptionEn: 'OpenClaw knowledge manual, from beginner to expert',
        tags: ['docs', 'guide', 'chinese']
      },
      {
        title: 'Explain OpenClaw',
        titleEn: 'Explain OpenClaw',
        url: 'https://github.com/centminmod/explain-openclaw',
        description: '多 AI 文档库，安全、部署、威胁情报',
        descriptionEn: 'Multi-AI documentation: security, deployment, threat intelligence',
        tags: ['docs', 'knowledge', 'comprehensive']
      },
      {
        title: '快速入门指南',
        titleEn: 'Getting Started',
        url: 'https://docs.openclaw.ai/start/getting-started',
        description: '新手入门必读',
        descriptionEn: 'Essential guide for new users',
        tags: ['docs', 'quickstart'],
        featured: true
      },
      {
        title: '配置指南',
        titleEn: 'Configuration Guide',
        url: 'https://docs.openclaw.ai/config',
        description: '详细配置选项说明',
        descriptionEn: 'Detailed configuration options and settings',
        tags: ['docs', 'config']
      },
      {
        title: '会话管理',
        titleEn: 'Session Management',
        url: 'https://docs.openclaw.ai/runtime/sessions',
        description: '理解和管理会话',
        descriptionEn: 'Understand and manage AI sessions',
        tags: ['docs', 'runtime']
      },
      {
        title: '内存系统',
        titleEn: 'Memory System',
        url: 'https://docs.openclaw.ai/runtime/memory',
        description: '持久化内存和上下文管理',
        descriptionEn: 'Persistent memory and context management',
        tags: ['docs', 'memory', 'runtime']
      },
      {
        title: '信息获取指南',
        titleEn: 'Information Acquisition Guide',
        url: 'https://help.apiyi.com/en/openclaw-news-resources-guide-en.html',
        description: '5 个官方渠道获取一手更新',
        descriptionEn: '5 official channels for first-hand updates',
        tags: ['docs', 'news', 'guide']
      }
    ]
  },
  {
    id: 'community',
    name: '社区生态',
    nameEn: 'Community',
    links: [
      {
        title: '官方 Reddit',
        titleEn: 'Official Reddit',
        url: 'https://www.reddit.com/r/openclaw/',
        description: 'r/openclaw - 官方社区讨论',
        descriptionEn: 'r/openclaw - Official community discussions',
        tags: ['community', 'reddit', 'official'],
        featured: true
      },
      {
        title: 'OpenClaw Use Cases',
        titleEn: 'OpenClaw Use Cases',
        url: 'https://www.reddit.com/r/OpenClawUseCases/',
        description: '实际用例、VPS 智能体、部署指南',
        descriptionEn: 'Real-world use cases, VPS agents, deployment guides',
        tags: ['community', 'reddit', 'examples']
      },
      {
        title: 'OpenClaw Setup',
        titleEn: 'OpenClaw Setup',
        url: 'https://www.reddit.com/r/openclawsetup/',
        description: '设置问题和解决方案',
        descriptionEn: 'Setup help and solutions',
        tags: ['community', 'reddit', 'support']
      },
      {
        title: 'Moltbook',
        titleEn: 'Moltbook',
        url: 'https://www.moltbook.cn/',
        description: '面向 AI Agent 的社交网络',
        descriptionEn: 'Social network for AI Agents',
        tags: ['community', 'social', 'chinese']
      },
      { 
        title: '虾聊', 
        titleEn: 'ClawChat',
        url: 'https://clawdchat.ai/', 
        description: 'AI Agent 的社交平台',
        descriptionEn: 'Social platform for AI Agents',
        tags: ['community', 'social', 'chinese']
      },
      { 
        title: 'PinchBench', 
        titleEn: 'PinchBench',
        url: 'https://pinchbench.com/', 
        description: '龙虾模型排行榜',
        descriptionEn: 'Lobster model leaderboard',
        tags: ['community', 'ranking', 'chinese']
      },
      {
        title: 'GitHub Discussions',
        titleEn: 'GitHub Discussions',
        url: 'https://github.com/openclaw/openclaw/discussions',
        description: 'GitHub 社区讨论',
        descriptionEn: 'Community discussions on GitHub',
        tags: ['community', 'forum'],
        featured: true
      },
      {
        title: 'GitHub Issues',
        titleEn: 'GitHub Issues',
        url: 'https://github.com/openclaw/openclaw/issues',
        description: '问题反馈和功能请求',
        descriptionEn: 'Bug reports and feature requests',
        tags: ['community', 'issues']
      },
      {
        title: '贡献指南',
        titleEn: 'Contributing Guide',
        url: 'https://github.com/openclaw/openclaw/blob/main/CONTRIBUTING.md',
        description: '如何为项目做贡献',
        descriptionEn: 'How to contribute to project',
        tags: ['community', 'contributing']
      },
      {
        title: 'Discord 社区',
        titleEn: 'Discord Community',
        url: 'https://discord.gg/clawd',
        description: '加入 OpenClaw Discord 服务器',
        descriptionEn: 'Join OpenClaw Discord server',
        tags: ['community', 'discord', 'chat']
      },
      {
        title: 'Discord 社区文档',
        titleEn: 'Discord Community Docs',
        url: 'https://github.com/hintjen/openclaw-discord-community',
        description: 'Discord 社区政策和管理文档',
        descriptionEn: 'Discord community policies and management docs',
        tags: ['community', 'discord', 'docs']
      },
      {
        title: 'Twitter/X',
        titleEn: 'Twitter/X',
        url: 'https://x.com/search?q=openclaw',
        description: '关注 OpenClaw 最新动态',
        descriptionEn: 'Follow OpenClaw updates on Twitter',
        tags: ['community', 'social', 'news']
      },
      {
        title: 'LinkedIn 资源',
        titleEn: 'LinkedIn Resources',
        url: 'https://www.linkedin.com/posts/rohit-ghumare_openclaw-ai-opensource-activity-7426593898073993216-nRNB',
        description: '综合性 OpenClaw 资源站点',
        descriptionEn: 'Comprehensive OpenClaw resource site',
        tags: ['community', 'social', 'linkedin']
      },
      {
        title: 'OpenClaw 资源目录',
        titleEn: 'OpenClaw Resource Directory',
        url: 'https://www.reddit.com/r/openclaw/comments/1rprr8t/you_can_find_all_openclaw_resources_on_this',
        description: '所有 OpenClaw 资源整合',
        descriptionEn: 'All OpenClaw resources in one place',
        tags: ['community', 'directory']
      }
    ]
  },
  {
    id: 'tools',
    name: '开发工具',
    nameEn: 'Developer Tools',
    links: [
      {
        title: 'Web Control UI',
        titleEn: 'Web Control UI',
        url: 'https://docs.openclaw.ai/web/control-ui',
        description: '浏览器控制面板',
        descriptionEn: 'Browser-based dashboard for management',
        tags: ['tools', 'ui'],
        featured: true
      },
      {
        title: 'CLI 工具',
        titleEn: 'CLI Tools',
        url: 'https://docs.openclaw.ai/cli/commands',
        description: '命令行工具参考',
        descriptionEn: 'Command-line interface and commands',
        tags: ['tools', 'cli']
      },
      {
        title: '插件开发',
        titleEn: 'Plugin Development',
        url: 'https://docs.openclaw.ai/plugins/development',
        description: '开发自定义插件',
        descriptionEn: 'Create custom plugins for OpenClaw',
        tags: ['tools', 'plugins', 'development']
      },
      {
        title: 'Agent API',
        titleEn: 'Agent API',
        url: 'https://docs.openclaw.ai/api/agents',
        description: 'Agent 编程接口',
        descriptionEn: 'API for agent development and integration',
        tags: ['tools', 'api']
      },
      {
        title: '测试工具',
        titleEn: 'Testing Tools',
        url: 'https://docs.openclaw.ai/testing/overview',
        description: '测试和调试指南',
        descriptionEn: 'Testing and debugging guide',
        tags: ['tools', 'testing']
      }
    ]
  },
  {
    id: 'deploy',
    name: '部署指南',
    nameEn: 'Deployment',
    links: [
      {
        title: 'Fly.io 部署',
        titleEn: 'Deploy on Fly.io',
        url: 'https://docs.openclaw.ai/deploy/flyio',
        description: '全球边缘计算部署',
        descriptionEn: 'Global edge computing deployment',
        tags: ['deploy', 'cloud', 'global']
      },
      {
        title: 'Railway 部署',
        titleEn: 'Deploy on Railway',
        url: 'https://docs.openclaw.ai/deploy/railway',
        description: '一键云部署',
        descriptionEn: 'One-click cloud deployment',
        tags: ['deploy', 'cloud']
      },
      {
        title: 'Docker 部署',
        titleEn: 'Docker Deployment',
        url: 'https://docs.openclaw.ai/deploy/docker',
        description: '容器化部署方案',
        descriptionEn: 'Containerized deployment solution',
        tags: ['deploy', 'docker'],
        featured: true
      },
      {
        title: '本地部署',
        titleEn: 'Local Deployment',
        url: 'https://docs.openclaw.ai/start/getting-started',
        description: '在本地机器运行',
        descriptionEn: 'Run on your local machine',
        tags: ['deploy', 'local']
      },
      {
        title: 'VPS 部署',
        titleEn: 'VPS Deployment',
        url: 'https://docs.openclaw.ai/deploy/vps',
        description: '虚拟服务器部署',
        descriptionEn: 'Deploy to virtual private servers',
        tags: ['deploy', 'vps']
      },
      {
        title: '完整成本计算指南',
        titleEn: 'Complete Cost Calculator',
        url: 'https://www.reddit.com/r/AiAutomations/comments/1r84lov/complete_openclaw_setup_guide_with_cloud_hosting',
        description: '包含成本计算器的完整设置指南',
        descriptionEn: 'Complete setup guide with cost calculator',
        tags: ['deploy', 'cost', 'guide']
      }
    ]
  },
  {
    id: 'chinese',
    name: '中文生态',
    nameEn: 'Chinese Ecosystem',
    links: [
      { 
        title: '360 安全龙虾', 
        titleEn: '360 Security Claw',
        url: 'https://claw.360.cn/', 
        description: '国内首个以"安全模式"为核心',
        descriptionEn: 'First "security mode" focused product in China',
        tags: ['chinese', 'local', 'security']
      },
      { 
        title: 'Qclaw', 
        titleEn: 'Qclaw',
        url: 'https://claw.guanjia.qq.com/', 
        description: '支持微信直联，扫码绑定',
        descriptionEn: 'WeChat direct connection, scan to bind',
        tags: ['chinese', 'local', 'wechat']
      },
      { 
        title: 'LobsterAI 有道龙虾', 
        titleEn: 'LobsterAI Youdao',
        url: 'https://lobsterai.youdao.com/', 
        description: '7×24 小时帮你干活的全场景个人助理',
        descriptionEn: '24/7 full-scene personal assistant',
        tags: ['chinese', 'local']
      },
      { 
        title: 'WorkBuddy', 
        titleEn: 'WorkBuddy',
        url: 'https://www.codebuddy.cn/work/', 
        description: 'AI 原生的桌面智能体工作台',
        descriptionEn: 'AI-native desktop agent workspace',
        tags: ['chinese', 'local', 'desktop']
      },
      { 
        title: '飞书 OpenClaw', 
        titleEn: 'Feishu OpenClaw',
        url: 'https://openclaw.feishu.cn/home', 
        description: '原版 OpenClaw 完整能力，独特个性',
        descriptionEn: 'Original OpenClaw with full capabilities and unique personality',
        tags: ['chinese', 'cloud', 'feishu']
      },
      { 
        title: '飞书秒搭', 
        titleEn: 'Feishu Instant Deploy',
        url: 'https://miaoda.feishu.cn/bot', 
        description: '内置飞书插件，即刻对话',
        descriptionEn: 'Built-in Feishu plugin, instant deployment',
        tags: ['chinese', 'cloud', 'feishu']
      },
      { 
        title: '扣子 Coze', 
        titleEn: 'Coze',
        url: 'https://code.coze.cn/home', 
        description: '字节旗下 AI Agent 开发平台',
        descriptionEn: 'ByteDance AI agent development platform',
        tags: ['chinese', 'cloud', 'bytedance']
      },
      { 
        title: 'Xiaomi MiMo Claw', 
        titleEn: 'Xiaomi MiMo Claw',
        url: 'https://aistudio.xiaomimimo.com/', 
        description: '小米最新大模型，一键部署',
        descriptionEn: 'Xiaomi latest LLM, one-click deployment',
        tags: ['chinese', 'cloud', 'xiaomi']
      },
      { 
        title: 'StepClaw', 
        titleEn: 'StepClaw',
        url: 'https://www.stepfun.com/openclaw', 
        description: '阶跃星辰推出云端 AI 助手',
        descriptionEn: 'Cloud AI assistant by StepFun',
        tags: ['chinese', 'cloud']
      },
      { 
        title: 'AstronClaw', 
        titleEn: 'AstronClaw',
        url: 'https://agent.xfyun.cn/astron-claw', 
        description: '科大讯飞云端部署，全天候在线',
        descriptionEn: 'iFlytek cloud deployment, 24/7 online',
        tags: ['chinese', 'cloud', 'xfyun']
      },
      { 
        title: 'JVS Claw', 
        titleEn: 'JVS Claw',
        url: 'https://jvs.wuying.aliyun.com/', 
        description: '阿里云多 Agent 协作平台',
        descriptionEn: 'Multi-agent collaboration platform by Alibaba Cloud',
        tags: ['chinese', 'cloud', 'aliyun']
      },
      { 
        title: 'EasyClaw', 
        titleEn: 'EasyClaw',
        url: 'https://easyclaw.com/zh-cn', 
        description: '一键部署、多平台集成、本地文件管理',
        descriptionEn: 'One-click deploy, multi-platform integration, local file management',
        tags: ['chinese', 'local']
      },
      { 
        title: 'CoPaw', 
        titleEn: 'CoPaw',
        url: 'https://copaw.agentscope.io/', 
        description: '本地/云端双部署、国内平台原生适配',
        descriptionEn: 'Local/cloud dual deploy, China platform native support',
        tags: ['chinese', 'local']
      },
      { 
        title: 'Tabbit 浏览器', 
        titleEn: 'Tabbit Browser',
        url: 'https://tabbitbrowser.com/', 
        description: '一键引用网页、截图、文件对话',
        descriptionEn: 'One-click web reference, screenshots, file chat',
        tags: ['chinese', 'local', 'browser']
      },
      { 
        title: 'AutoClaw', 
        titleEn: 'AutoClaw',
        url: 'https://autoglm.zhipuai.cn/autoclaw/', 
        description: '飞书集成、模型热插拔、50+技能',
        descriptionEn: 'Feishu integration, hot-swap models, 50+ skills',
        tags: ['chinese', 'local', 'feishu']
      },
      { 
        title: '悟空', 
        titleEn: 'Wukong',
        url: 'https://www.dingtalk.com/wukong', 
        description: '阿里巴巴企业级 AI 原生工作平台',
        descriptionEn: 'Alibaba enterprise AI-native workspace',
        tags: ['chinese', 'local', 'alibaba']
      },
      { 
        title: '阶跃桌面伙伴', 
        titleEn: 'StepFun Desktop',
        url: 'https://www.stepfun.com/download', 
        description: '始终在场，主动做事的桌面 Agent',
        descriptionEn: 'Always-present proactive desktop agent',
        tags: ['chinese', 'local', 'desktop']
      },
      { 
        title: 'Happycapy', 
        titleEn: 'Happycapy',
        url: 'https://happycapy.ai/', 
        description: '面向所有人的云端 Agent 原生计算机',
        descriptionEn: 'Cloud AI agent computer for everyone',
        tags: ['chinese', 'cloud']
      },
      { 
        title: 'Manus', 
        titleEn: 'Manus',
        url: 'https://manus.im/', 
        description: '从任务规划到执行的全流程自动化',
        descriptionEn: 'Full automation from planning to execution',
        tags: ['chinese', 'cloud', 'automation']
      },
      { 
        title: '牛马 AI', 
        titleEn: 'Niuma AI',
        url: 'https://niuma.limyai.com/', 
        description: 'Manus/Genspark 本地免费版',
        descriptionEn: 'Free local version of Manus/Genspark',
        tags: ['chinese', 'local', 'free']
      },
      { 
        title: 'MuleRun', 
        titleEn: 'MuleRun',
        url: 'https://mulerun.com/', 
        description: '全球首个自进化个人 AI（骡子快跑）',
        descriptionEn: 'First self-evolving personal AI (MuleRun)',
        tags: ['chinese', 'cloud']
      },
      { 
        title: 'KiloClaw', 
        titleEn: 'KiloClaw',
        url: 'https://kilo.ai/kiloclaw', 
        description: '面向开发者和团队的托管版',
        descriptionEn: 'Managed OpenClaw for developers and teams',
        tags: ['chinese', 'cloud', 'managed']
      },
      { 
        title: 'NemoClaw', 
        titleEn: 'NemoClaw',
        url: 'https://www.nvidia.com/en-us/ai/nemoclaw', 
        description: '英伟达推出的企业级开源智能体平台',
        descriptionEn: 'Enterprise open-source AI platform by NVIDIA',
        tags: ['chinese', 'cloud', 'enterprise']
      },
      { 
        title: 'DeskClaw', 
        titleEn: 'DeskClaw',
        url: 'https://deskclaw.me/', 
        description: '你的第一个 AI 同事',
        descriptionEn: 'Your first AI colleague',
        tags: ['chinese', 'local', 'desktop']
      },
      { 
        title: 'PoorClaw', 
        titleEn: 'PoorClaw',
        url: 'https://www.poorclaw.com/', 
        description: '穷虾不花一分钱，用 OpenClaw 全部能力',
        descriptionEn: 'Use OpenClaw full capabilities for free, no hidden costs',
        tags: ['chinese', 'local', 'free']
      },
      { 
        title: 'LinkFox', 
        titleEn: 'LinkFox',
        url: 'https://agent.linkfox.com/claw', 
        description: '一键部署 OpenClaw，自由对话',
        descriptionEn: 'One-click OpenClaw deploy, free conversations',
        tags: ['chinese', 'cloud', 'free']
      },
      { 
        title: 'HiClaw', 
        titleEn: 'HiClaw',
        url: 'https://higress.ai/hiclaw/', 
        description: '团队协作升级版，Manager Agent 架构',
        descriptionEn: 'Team collaboration upgrade with Manager Agent architecture',
        tags: ['chinese', 'cloud', 'team']
      },
      { 
        title: 'Loomy', 
        titleEn: 'Loomy',
        url: 'https://loomy.xunfei.cn/', 
        description: '桌面级 AI 个人助理，零配置',
        descriptionEn: 'Desktop AI assistant, zero configuration',
        tags: ['chinese', 'local', 'desktop']
      },
      { 
        title: 'ClawPal', 
        titleEn: 'ClawPal',
        url: 'https://www.clawpal.com/', 
        description: 'OpenClaw 的桌面配置助手',
        descriptionEn: 'OpenClaw desktop configuration assistant',
        tags: ['chinese', 'local', 'desktop']
      },
      { 
        title: 'ClawWatcher', 
        titleEn: 'ClawWatcher',
        url: 'https://www.clawwatcher.com/', 
        description: '监控仪表盘，实时可视化',
        descriptionEn: 'Monitoring dashboard with real-time visualization',
        tags: ['chinese', 'local', 'monitoring']
      },
      { 
        title: 'ClawManager', 
        titleEn: 'ClawManager',
        url: 'https://www.clawmanager.com/', 
        description: '让 OpenClaw 对所有人都可用的仪表盘',
        descriptionEn: 'Dashboard for everyone to manage OpenClaw',
        tags: ['chinese', 'cloud', 'management']
      },
      { 
        title: 'Control Center', 
        titleEn: 'Control Center',
        url: 'https://www.clawmanager.com/', 
        description: '轻松搭建、部署和管理 AI 代理',
        descriptionEn: 'Easy setup, deployment and management of AI agents',
        tags: ['chinese', 'cloud', 'management']
      }
    ]
  }
]
