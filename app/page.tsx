'use client'

import { useState, useEffect } from 'react'
import { 
  Search, ExternalLink, Home, 
  Globe, Cloud, Server, BookOpen, 
  Cpu, Zap, Code, Layers, 
  Shield, TrendingUp, Users, 
  Database, CreditCard, Sparkles
} from 'lucide-react'
import { categories } from '@/data'

type Locale = 'en' | 'zh'

const translations = {
  en: {
    subtitle: 'Open AI Agent Ecosystem Atlas',
    searchPlaceholder: 'Search AI agent resources...',
    noResultsTitle: 'No resources found',
    noResultsDescription: 'Try a different search term',
    footerTagline: 'OpenClaw Ecosystem'
  },
  zh: {
    subtitle: 'AI 智能体生态地图',
    searchPlaceholder: '搜索 AI 智能体资源...',
    noResultsTitle: '未找到相关资源',
    noResultsDescription: '试试其他关键词',
    footerTagline: 'OpenClaw生态'
  }
}

// 为每个分类配置霓虹色图标
const categoryIcons: Record<string, React.ReactNode> = {
  'official': <Globe className="w-5 h-5" />,
  'cloud': <Cloud className="w-5 h-5" />,
  'local': <Server className="w-5 h-5" />,
  'docs': <BookOpen className="w-5 h-5" />,
  'models': <Cpu className="w-5 h-5" />,
  'services': <Zap className="w-5 h-5" />,
  'coding': <Code className="w-5 h-5" />,
  'frameworks': <Layers className="w-5 h-5" />,
  'security': <Shield className="w-5 h-5" />,
  'communities': <Users className="w-5 h-5" />,
  'tools': <Database className="w-5 h-5" />,
  'payments': <CreditCard className="w-5 h-5" />,
  'trading': <TrendingUp className="w-5 h-5" />,
}

// 霓虹色方案
const neonColors = [
  'from-cyan-400 to-blue-500',
  'from-purple-400 to-pink-500',
  'from-green-400 to-emerald-500',
  'from-orange-400 to-red-500',
  'from-pink-400 to-rose-500',
  'from-indigo-400 to-violet-500',
  'from-teal-400 to-cyan-500',
  'from-yellow-400 to-orange-500',
]

function cn(...classes: (string | undefined | null | false)[]) {
  return classes.filter(Boolean).join(' ')
}

export default function Page() {
  const [searchQuery, setSearchQuery] = useState('')
  const [locale, setLocale] = useState<Locale>('en')
  const [activeCategory, setActiveCategory] = useState<string | null>(null)

  const t = translations[locale]

  const getTitle = (item: { title: string; titleEn?: string }) => {
    return locale === 'en' && item.titleEn ? item.titleEn : item.title
  }

  const getDescription = (item: { description?: string; descriptionEn?: string }) => {
    return locale === 'en' && item.descriptionEn ? item.descriptionEn : item.description
  }

  const getCategoryName = (cat: { name: string; nameEn?: string }) => {
    return locale === 'en' && cat.nameEn ? cat.nameEn : cat.name
  }

  const getCategoryIcon = (categoryId: string) => {
    return categoryIcons[categoryId] || <Globe className="w-5 h-5" />
  }

  const getNeonColor = (index: number) => {
    return neonColors[index % neonColors.length]
  }

  // 滚动到指定分类
  const scrollToCategory = (categoryId: string) => {
    const element = document.getElementById(`category-${categoryId}`)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setActiveCategory(categoryId)
    }
  }

  // 监听滚动，更新当前活跃分类
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveCategory(entry.target.id.replace('category-', ''))
          }
        })
      },
      { rootMargin: '-20% 0px -80% 0px' }
    )

    categories.forEach((cat) => {
      const element = document.getElementById(`category-${cat.id}`)
      if (element) observer.observe(element)
    })

    return () => observer.disconnect()
  }, [])

  // 过滤所有链接（搜索功能）
  const getFilteredCategories = () => {
    if (!searchQuery) return categories
    
    return categories.map(cat => ({
      ...cat,
      links: cat.links.filter(link => {
        const title = getTitle(link)
        const description = getDescription(link)
        return title.toLowerCase().includes(searchQuery.toLowerCase()) ||
               (description && description.toLowerCase().includes(searchQuery.toLowerCase()))
      })
    })).filter(cat => cat.links.length > 0)
  }

  const filteredCategories = getFilteredCategories()
  const hasResults = filteredCategories.length > 0

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 relative overflow-hidden">
      {/* 背景装饰 - 霓虹光晕 */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 left-1/3 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>

      {/* 网格背景 */}
      <div className="fixed inset-0 opacity-5 pointer-events-none" style={{
        backgroundImage: `
          linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
        `,
        backgroundSize: '50px 50px'
      }} />

      {/* Header - 玻璃态导航栏 */}
      <header className="sticky top-0 z-50 backdrop-blur-xl bg-slate-900/50 border-b border-slate-800/50 shadow-2xl">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between gap-6">
            {/* Logo区域 */}
            <div className="flex items-center gap-4">
              <div className="relative group">
                <div className="w-12 h-12 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50 ring-2 ring-cyan-400/50 ring-offset-2 ring-offset-slate-900 group-hover:scale-110 transition-transform duration-300">
                  <span className="text-2xl group-hover:rotate-12 transition-transform">🦞</span>
                </div>
                <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-full border-2 border-slate-900 flex items-center justify-center animate-pulse">
                  <Sparkles className="w-3 h-3 text-white" />
                </div>
              </div>
              <div>
                <h1 className="font-bold text-xl bg-gradient-to-r from-orange-400 via-red-400 to-pink-400 bg-clip-text text-transparent">
                  ClawAtlas
                </h1>
                <p className="text-xs font-medium text-slate-400">
                  龙虾导航 · {t.footerTagline}
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4 flex-1 max-w-2xl">
              {/* Search Bar - 霓虹搜索框 */}
              <div className="relative flex-1 group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <Search className="w-5 h-5 text-slate-500 group-focus-within:text-cyan-400 transition-colors" />
                </div>
                <input
                  type="text"
                  placeholder={t.searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-5 py-3.5 bg-slate-800/50 border-2 border-slate-700 rounded-2xl focus:outline-none focus:border-cyan-500/50 text-slate-100 placeholder:text-slate-500 backdrop-blur-sm transition-all group-focus-within:shadow-[0_0_20px_rgba(34,211,238,0.3)]"
                />
              </div>

              {/* Language Toggle - 霓虹切换按钮 */}
              <div className="flex items-center gap-1 bg-slate-800/50 rounded-xl p-1 backdrop-blur-sm border border-slate-700/50">
                <button
                  onClick={() => setLocale('en')}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
                    locale === 'en'
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
                  )}
                >EN</button>
                <button
                  onClick={() => setLocale('zh')}
                  className={cn(
                    "px-4 py-2.5 rounded-lg text-sm font-semibold transition-all duration-200",
                    locale === 'zh'
                      ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/25"
                      : "text-slate-400 hover:text-slate-200 hover:bg-slate-700/50"
                  )}
                >中文</button>
              </div>

              {/* Home Button */}
              <a 
                href="#" 
                className="flex items-center gap-2 px-4 py-2.5 text-slate-400 hover:text-cyan-400 hover:bg-slate-800/50 rounded-xl text-sm font-medium transition-all border border-transparent hover:border-cyan-500/30"
              >
                <Home className="w-5 h-5" />
                <span>{locale === 'en' ? 'Home' : '首页'}</span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-[1600px] mx-auto px-4 py-8 relative z-10">
        <div className="flex gap-8">
          {/* 左侧导航栏 - 玻璃态 */}
          <aside className="w-72 flex-shrink-0">
            <nav className="sticky top-28 space-y-2">
              <div className="mb-4 px-4">
                <h3 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2 flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-cyan-400" />
                  分类导航
                </h3>
              </div>
              
              {filteredCategories.map((category, index) => {
                const isActive = activeCategory === category.id
                const neonColor = getNeonColor(index)
                
                return (
                  <button
                    key={category.id}
                    onClick={() => scrollToCategory(category.id)}
                    className={cn(
                      "w-full flex items-center gap-4 px-5 py-4 text-left rounded-2xl transition-all duration-300 group border border-slate-800/50",
                      isActive
                        ? `bg-gradient-to-r ${neonColor} text-white shadow-lg shadow-cyan-500/25 scale-105 border-transparent`
                        : "bg-slate-800/30 text-slate-400 hover:bg-slate-800/50 hover:text-slate-200 hover:scale-[1.02] hover:border-slate-700/50"
                    )}
                  >
                    <div className={cn(
                      "p-2.5 rounded-xl transition-all duration-300",
                      isActive
                        ? "bg-white/20"
                        : "bg-slate-700/30 group-hover:bg-slate-700/50"
                    )}>
                      {getCategoryIcon(category.id)}
                    </div>
                    <div className="flex-1">
                      <span className="text-sm font-semibold">
                        {getCategoryName(category)}
                      </span>
                    </div>
                    <div className={cn(
                      "px-2.5 py-1 rounded-lg text-xs font-bold transition-all",
                      isActive
                        ? "bg-white/20"
                        : "bg-slate-700/30 text-slate-500 group-hover:bg-slate-700/50"
                    )}>
                      {category.links.length}
                    </div>
                  </button>
                )
              })}
            </nav>
          </aside>

          {/* 右侧内容区域 */}
          <main className="flex-1 min-w-0">
            {!hasResults ? (
              <div className="bg-slate-800/30 backdrop-blur-xl rounded-3xl border border-slate-700/50 p-12 shadow-2xl">
                <div className="text-center">
                  <div className="w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full flex items-center justify-center mx-auto mb-6 border-2 border-cyan-500/30">
                    <Search className="w-10 h-10 text-cyan-400" />
                  </div>
                  <h3 className="text-xl font-semibold text-slate-200 mb-2">
                    {t.noResultsTitle}
                  </h3>
                  <p className="text-slate-500">
                    {t.noResultsDescription}
                  </p>
                </div>
              </div>
            ) : (
              <div className="space-y-8">
                {filteredCategories.map((category, catIndex) => {
                  const neonColor = getNeonColor(catIndex)
                  
                  return (
                    <section 
                      key={category.id} 
                      id={`category-${category.id}`}
                      className="scroll-mt-24"
                    >
                      {/* 分类标题 */}
                      <div className="flex items-center gap-3 mb-4">
                        <div className={`p-2.5 bg-gradient-to-br ${neonColor} rounded-xl text-white shadow-lg shadow-cyan-500/25`}>
                          {getCategoryIcon(category.id)}
                        </div>
                        <h2 className="text-lg font-bold text-slate-200">
                          {getCategoryName(category)}
                        </h2>
                        <span className="text-sm text-slate-500">
                          {category.links.length}
                        </span>
                      </div>

                      {/* 链接列表 - 霓虹卡片 */}
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {category.links.map((link, linkIndex) => {
                          const cardNeonColor = getNeonColor(linkIndex)
                          
                          return (
                            <a
                              key={linkIndex}
                              href={link.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-slate-800/30 backdrop-blur-xl rounded-xl border border-slate-700/50 p-4 hover:border-cyan-500/30 transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/10"
                              style={{
                                background: 'linear-gradient(135deg, rgba(30, 41, 59, 0.5), rgba(15, 23, 42, 0.8))'
                              }}
                            >
                              <div className="flex items-start gap-2">
                                <div className="flex-1 min-w-0">
                                  <div className="flex items-center gap-2 mb-2">
                                    <span className={`text-base font-bold text-white group-hover:bg-gradient-to-r ${cardNeonColor} group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300`}>
                                      {getTitle(link)}
                                    </span>
                                    <ExternalLink className="w-3.5 h-3.5 text-slate-500 group-hover:text-white group-hover:scale-110 flex-shrink-0 transition-all duration-300" />
                                  </div>
                                  {getDescription(link) && (
                                    <p className="text-sm text-slate-400 leading-relaxed line-clamp-2 group-hover:text-slate-200 transition-colors duration-300">
                                      {getDescription(link)}
                                    </p>
                                  )}
                                </div>
                              </div>
                            </a>
                          )
                        })}
                      </div>
                    </section>
                  )
                })}
              </div>
            )}
          </main>
        </div>
      </div>

      {/* Footer - 玻璃态页脚 (已隐藏，待部署到正式域名后启用) */}
      {/* <footer className="border-t border-slate-800/50 bg-slate-900/30 backdrop-blur-xl py-10 mt-12 relative z-10">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-3 mb-4">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-600 to-cyan-500 rounded-xl flex items-center justify-center shadow-lg shadow-cyan-500/50 ring-2 ring-cyan-400/50 ring-offset-2 ring-offset-slate-900">
              <span className="text-xl">🦞</span>
            </div>
            <span className="font-bold text-slate-200">ClawAtlas</span>
          </div>
          <p className="text-sm text-slate-500">
            © 2025 ClawAtlas. {t.footerTagline} · 用心打造，只为更好
          </p>
        </div>
      </footer> */}
    </div>
  )
}
