'use client'

import React, { useState, useRef, useEffect } from 'react'
import {
  Sparkles,
  Send,
  X,
  Bot,
  User,
  ExternalLink,
  RotateCcw,
  BookOpen,
  HelpCircle,
  Zap,
  Globe,
  Loader2,
  ChevronRight,
  MessageSquare,
} from 'lucide-react'

interface Message {
  id: string
  role: 'user' | 'assistant'
  content: string
  hindiTranslation?: string
  links?: Array<{ title: string; url: string }>
  timestamp: Date
}

// Preset Quick FAQs in Hindi and English
const PRESET_PROMPTS = [
  {
    en: 'How to create & schedule YouTube Shorts or Reels?',
    hi: 'YouTube Shorts aur Reels kaise banayein aur schedule karein?',
  },
  {
    en: 'Why did my X/Twitter post fail with HTTP 402 error?',
    hi: 'Mera X/Twitter post HTTP 402 error se fail kyu hua?',
  },
  {
    en: 'How to connect WhatsApp using QR Code or Cloud API?',
    hi: 'WhatsApp ko QR Code ya Official Cloud API se kaise jodein?',
  },
  {
    en: 'How does India Festivals Auto-Pilot work in AI Social?',
    hi: 'AI Social Manager me India Festivals Auto-Pilot kaise kaam karta hai?',
  },
  {
    en: 'How to connect AI Agents with MCP Studio?',
    hi: 'AI Agents ko MCP Studio se kaise connect karein?',
  },
]

// Built-in Intelligent Knowledge Base for Instant Bilingual Answers
const KNOWLEDGE_BASE: Array<{
  keywords: string[]
  answerEn: string
  answerHi: string
  links: Array<{ title: string; url: string }>
}> = [
  {
    keywords: ['short', 'reel', 'video', 'youtube short', 'instagram reel', 'tiktok', 'reels', 'shorts'],
    answerEn:
      '### 🎬 Creating & Scheduling Shorts / Reels in Siegfried Outreach\n1. Go to **Social Studio ➔ Create Post** (`/social-media/create-post`).\n2. Select your video accounts (**YouTube**, **Instagram**, **TikTok**).\n3. Under Post Format, select **Reel / Short (9:16 vertical)**.\n4. Upload your 9:16 MP4 video or use AI Video Assistant.\n5. Customize Title, Description & Hashtags.\n6. Choose **Publish Now** or **Schedule** for optimal reach.',
    answerHi:
      '### 🎬 Siegfried Outreach me Shorts / Reels kaise banayein aur schedule karein\n1. **Social Studio ➔ Create Post** (`/social-media/create-post`) par jayein.\n2. Apne video accounts select karein (**YouTube**, **Instagram**, **TikTok**).\n3. Post Type me **Reel / Short (9:16 vertical)** chunein.\n4. Apni 9:16 vertical MP4 video upload karein ya AI generate karein.\n5. Title, Description aur Tags dalein.\n6. **Publish Now** par click karein ya **Schedule** karein.',
    links: [
      { title: 'Create Post Guide', url: '/docs/social-media/create-and-schedule' },
      { title: 'Post Creator in App', url: 'https://siegfriedoutreach.com/social-media/create-post' },
    ],
  },
  {
    keywords: ['402', 'twitter', 'x', 'fail', 'error', 'credits-depleted', 'credit', 'telemetry', 'logs'],
    answerEn:
      '### ❌ Diagnosing HTTP 402 Error on X (Twitter)\n- **Root Cause**: X API Developer account has depleted its paid balance or credit tier.\n- **Diagnosis**: Classified as `API_CREDITS_DEPLETED` under Third-Party Social API.\n- **Resolution Checklist**:\n  1. Log into [Twitter Developer Portal](https://developer.x.com).\n  2. Check **Billing & Usage** and top up credits.\n  3. Go to Siegfried Outreach **Publishing Logs** (`/social-media/logs`).\n  4. Click **Inspect** to see diagnostic breakdown and click **Retry Now**.',
    answerHi:
      '### ❌ X (Twitter) par HTTP 402 Error ka Samadhan\n- **Karan**: Twitter Developer account me credits ya API balance khatam ho gaya hai.\n- **Diagnosis**: Isko hamara Telemetry system `API_CREDITS_DEPLETED` classify karta hai.\n- **Kaise Fix Karein**:\n  1. [Twitter Developer Console](https://developer.x.com) par login karke balance recharge karein.\n  2. Siegfried Outreach ke **Publishing Logs** (`/social-media/logs`) par jayein.\n  3. **Inspect** button dabakar error details dekhein aur **Retry Now** click karein.',
    links: [
      { title: 'Telemetry & Logs Guide', url: '/docs/social-media/publishing-logs-telemetry' },
      { title: 'View Live Logs in App', url: 'https://siegfriedoutreach.com/social-media/logs' },
    ],
  },
  {
    keywords: ['whatsapp', 'qr', 'cloud api', 'broadcast', 'campaign hub', 'telegram'],
    answerEn:
      '### 💬 WhatsApp & Telegram Setup Guide\n- **WhatsApp QR Code**: Go to **Social Channels ➔ WhatsApp**, click **Start QR Session**, scan QR code from WhatsApp mobile app (Linked Devices).\n- **WhatsApp Cloud API**: For high-volume marketing broadcasts, enter your Meta Business Phone Number ID & Permanent Access Token.\n- **Telegram**: Connect your Telegram Bot Token in **Campaign Hub ➔ Telegram** to broadcast to unlimited groups and subscribers.',
    answerHi:
      '### 💬 WhatsApp aur Telegram Setup Guide\n- **WhatsApp QR Connect**: **Social Channels ➔ WhatsApp** par jayein, **Start QR Session** dabayein aur WhatsApp app ke Linked Devices se QR scan karein.\n- **WhatsApp Official Cloud API**: Bulk broadcast marketing ke liye Meta Phone Number ID aur Access Token setup karein.\n- **Telegram Broadcasting**: **Campaign Hub ➔ Telegram** me apna Bot Token dalein aur groups/subscribers ko instant message bhejein.',
    links: [
      { title: 'Campaign Hub Guide', url: '/docs/campaign-hub/broadcasts-and-messaging' },
      { title: 'Channels Setup', url: 'https://siegfriedoutreach.com/social-media/channels' },
    ],
  },
  {
    keywords: ['festival', 'indian festival', 'auto-pilot', 'ai social', 'planner', 'approval'],
    answerEn:
      '### 🇮🇳 Indian Festivals Auto-Pilot & AI Social Manager\n- **Automatic Scheduling**: Automatically detects major Indian festivals (Diwali, Holi, Eid, Independence Day, Navratri) and creates customized branded posts.\n- **Approval Center**: Review AI-generated creatives, captions, and festival wishes before they go live.\n- **Multi-Brand Setup**: Configure your brand logo, color palette, and business tone once, and AI creates tailored banners automatically.',
    answerHi:
      '### 🇮🇳 India Festivals Auto-Pilot aur AI Social Manager\n- **Auto Festival Posts**: Diwali, Holi, Eid, Independence Day jaise sabhi tyoharo par AI automatically branded posters aur captions generate karta hai.\n- **Approval Center**: Post publish hone se pehle aap preview kar sakte hain aur 1-click me approve ya modify kar sakte hain.\n- **Brand Voice**: Ek baar apna logo aur company details set karein, baaki sara social management AI sambhalega.',
    links: [
      { title: 'AI Social Manager Guide', url: '/docs/ai-studio/ai-social-manager' },
      { title: 'Festival Auto-Pilot in App', url: 'https://siegfriedoutreach.com/ai-social/indian-festivals' },
    ],
  },
  {
    keywords: ['mcp', 'model context protocol', 'ai agent', 'hermes', 'bot', 'codex'],
    answerEn:
      '### 🧠 MCP Studio & AI Agent Architecture\n- **Model Context Protocol (MCP)**: Seamlessly connects Claude, Cursor, Google Antigravity, and AI Agents to your Siegfried Outreach databases and tools.\n- **Available Tools**: Includes social analytics, auto-publishing, CRM contact lookups, broadcast triggers, and Perfex CRM bridges.\n- **Setup**: Get your MCP API key from `/mcp-studio?tab=keys` and paste into your MCP Client configuration.',
    answerHi:
      '### 🧠 MCP Studio aur AI Agents ka upyog\n- **Model Context Protocol (MCP)**: AI Models aur IDEs ko aapke Siegfried Outreach system se securely connect karta hai.\n- **Tools**: Social posting, live analytics, CRM data search aur automated broadcasts sabhi MCP tools ke dwara operate hote hain.\n- **Setup**: `/mcp-studio?tab=keys` se API key generate karein aur apne client me configure karein.',
    links: [
      { title: 'MCP Studio Guide', url: '/docs/developer-mcp/mcp-overview' },
      { title: 'MCP Studio in App', url: 'https://siegfriedoutreach.com/mcp-studio' },
    ],
  },
]

export default function AiDocsAssistant() {
  const [isOpen, setIsOpen] = useState(false)
  const [query, setQuery] = useState('')
  const [language, setLanguage] = useState<'both' | 'en' | 'hi'>('both')
  const [isLoading, setIsLoading] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        '👋 **Hello! I am Siegfried AI Docs Assistant.**\nAsk me anything about Siegfried Outreach Platform in **English** or **हिंदी** (e.g., social scheduling, WhatsApp setup, error telemetry, or MCP agents).',
      hindiTranslation:
        '👋 **Namaste! Main Siegfried AI Docs Assistant hoon.**\nAap mujhse kisi bhi feature ke baare me Hindi ya English me pooch sakte hain.',
      timestamp: new Date(),
    },
  ])

  const chatEndRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' })
    }
  }, [messages, isOpen])

  const handleSend = (textToSend?: string) => {
    const promptText = (textToSend || query).trim()
    if (!promptText) return

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: promptText,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMsg])
    setQuery('')
    setIsLoading(true)

    // Match against smart knowledge base
    setTimeout(() => {
      const lowerQuery = promptText.toLowerCase()
      let matchedEntry = KNOWLEDGE_BASE.find((entry) =>
        entry.keywords.some((k) => lowerQuery.includes(k))
      )

      let assistantResponse: Message

      if (matchedEntry) {
        assistantResponse = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: matchedEntry.answerEn,
          hindiTranslation: matchedEntry.answerHi,
          links: matchedEntry.links,
          timestamp: new Date(),
        }
      } else {
        assistantResponse = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: `Here is information regarding **"${promptText}"** in Siegfried Outreach Platform:\n\n- You can navigate directly to the relevant module from the sidebar.\n- Check out our detailed documentation chapters covering Social Media, AI Studio, Campaign Hub, and Developer MCP.\n- For live logs and error resolution, check **Publishing Logs** (\`/social-media/logs\`).`,
          hindiTranslation: `**"${promptText}"** ke sambandh me jankari:\n\n- Aap platform ke sidebar se sidhe sambandhit module me ja sakte hain.\n- Hamare user manual ke Social Media, AI Studio, Campaign Hub aur MCP chapters padhein.\n- Kisi bhi post error ke live samadhan ke liye **Publishing Logs** (\`/social-media/logs\`) dekhein.`,
          links: [
            { title: 'User Guide Index', url: '/docs' },
            { title: 'Publishing Logs', url: 'https://siegfriedoutreach.com/social-media/logs' },
          ],
          timestamp: new Date(),
        }
      }

      setMessages((prev) => [...prev, assistantResponse])
      setIsLoading(false)
    }, 450)
  }

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Ask Siegfried AI Assistant"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 text-white font-semibold text-sm shadow-xl shadow-indigo-500/30 hover:shadow-indigo-500/50 hover:scale-105 active:scale-95 transition-all duration-200 border border-white/20 backdrop-blur-md group cursor-pointer"
      >
        <div className="relative flex items-center justify-center">
          <Sparkles className="w-5 h-5 animate-pulse" />
          <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-emerald-400 ring-2 ring-indigo-900 animate-ping" />
        </div>
        <span className="hidden sm:inline font-bold tracking-tight">Ask AI Docs Assistant</span>
        <span className="sm:hidden font-bold">Ask AI</span>
      </button>

      {/* Interactive Modal Assistant */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div
            className="w-full sm:max-w-2xl bg-neutral-950 border border-neutral-800 sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col h-[85vh] sm:h-[680px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 bg-gradient-to-r from-blue-950/40 via-indigo-950/40 to-purple-950/40 border-b border-neutral-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-indigo-600/20 border border-indigo-500/30 text-indigo-400">
                  <Bot className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-base font-bold text-white tracking-tight">
                      Siegfried AI Docs Assistant
                    </h3>
                    <span className="text-[10px] uppercase font-bold px-2 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                      Bilingual (EN + हिंदी)
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400">
                    Instant step-by-step guidance for docs.siegfriedoutreach.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Language Mode Selector */}
                <div className="flex items-center bg-neutral-900 border border-neutral-800 rounded-lg p-0.5 text-xs">
                  <button
                    onClick={() => setLanguage('both')}
                    className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                      language === 'both' ? 'bg-indigo-600 text-white shadow-xs' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    Both
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                      language === 'en' ? 'bg-indigo-600 text-white shadow-xs' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('hi')}
                    className={`px-2 py-1 rounded-md font-medium transition-all cursor-pointer ${
                      language === 'hi' ? 'bg-indigo-600 text-white shadow-xs' : 'text-neutral-400 hover:text-white'
                    }`}
                  >
                    हिंदी
                  </button>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1.5 rounded-lg text-neutral-400 hover:text-white hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Message Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-sm bg-neutral-950/70">
              {messages.map((msg) => {
                const isUser = msg.role === 'user'
                return (
                  <div
                    key={msg.id}
                    className={`flex items-start gap-3 ${isUser ? 'justify-end' : 'justify-start'}`}
                  >
                    {!isUser && (
                      <div className="p-1.5 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30 shrink-0 mt-0.5">
                        <Bot className="w-4 h-4" />
                      </div>
                    )}

                    <div
                      className={`max-w-[85%] rounded-2xl p-4 space-y-3 ${
                        isUser
                          ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-md'
                          : 'bg-neutral-900 border border-neutral-800 text-neutral-200'
                      }`}
                    >
                      {/* English Section */}
                      {(language === 'both' || language === 'en' || isUser) && (
                        <div className="prose prose-invert prose-xs leading-relaxed whitespace-pre-wrap">
                          {msg.content}
                        </div>
                      )}

                      {/* Hindi Translation Section */}
                      {!isUser && msg.hindiTranslation && (language === 'both' || language === 'hi') && (
                        <div className="pt-2.5 border-t border-neutral-800/80 text-xs text-neutral-300 whitespace-pre-wrap leading-relaxed">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-400 mb-1 flex items-center gap-1">
                            <Globe className="w-3 h-3" /> हिंदी विवरण (Hindi Guide):
                          </div>
                          {msg.hindiTranslation}
                        </div>
                      )}

                      {/* Deep Link Buttons */}
                      {!isUser && msg.links && msg.links.length > 0 && (
                        <div className="flex flex-wrap gap-2 pt-2">
                          {msg.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target={link.url.startsWith('http') ? '_blank' : '_self'}
                              rel="noreferrer"
                              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-indigo-500/15 hover:bg-indigo-500/25 text-indigo-300 border border-indigo-500/30 text-xs font-semibold transition-colors"
                            >
                              <BookOpen className="w-3 h-3" />
                              {link.title}
                              <ChevronRight className="w-3 h-3" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {isUser && (
                      <div className="p-1.5 rounded-lg bg-blue-600 text-white shrink-0 mt-0.5">
                        <User className="w-4 h-4" />
                      </div>
                    )}
                  </div>
                )
              })}

              {isLoading && (
                <div className="flex items-center gap-3">
                  <div className="p-1.5 rounded-lg bg-indigo-600/20 text-indigo-400 border border-indigo-500/30">
                    <Bot className="w-4 h-4 animate-spin" />
                  </div>
                  <div className="p-3.5 rounded-2xl bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 flex items-center gap-2">
                    <Loader2 className="w-4 h-4 animate-spin text-indigo-400" />
                    Searching bilingual Siegfried Outreach manual & knowledge base...
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Quick Suggestion Chips */}
            <div className="px-4 py-2 bg-neutral-900/60 border-t border-neutral-800 overflow-x-auto flex items-center gap-2 no-scrollbar">
              <span className="text-[11px] text-neutral-400 shrink-0 font-medium flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-400" /> Quick:
              </span>
              {PRESET_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(language === 'hi' ? prompt.hi : prompt.en)}
                  className="px-2.5 py-1 rounded-full bg-neutral-800 hover:bg-neutral-700 text-neutral-300 hover:text-white border border-neutral-700 text-[11px] whitespace-nowrap transition-colors cursor-pointer"
                >
                  {language === 'hi' ? prompt.hi : prompt.en}
                </button>
              ))}
            </div>

            {/* Chat Input Bar */}
            <div className="p-3 bg-neutral-900 border-t border-neutral-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault()
                  handleSend()
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask in English ya Hindi me sawal poochhein..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-neutral-950 border border-neutral-700 focus:border-indigo-500 rounded-xl px-4 py-2.5 text-sm text-white placeholder-neutral-500 focus:outline-none focus:ring-1 focus:ring-indigo-500"
                />
                <button
                  type="submit"
                  disabled={!query.trim() || isLoading}
                  className="p-2.5 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 text-white disabled:opacity-40 hover:opacity-90 active:scale-95 transition-all shadow-md cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
