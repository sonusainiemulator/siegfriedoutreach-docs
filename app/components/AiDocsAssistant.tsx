'use client';

import React, { useState, useRef, useEffect } from 'react';
import {
  Sparkles,
  Send,
  X,
  Bot,
  User,
  BookOpen,
  Zap,
  Globe,
  Loader2,
  ChevronRight,
} from 'lucide-react';

interface Message {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  hindiTranslation?: string;
  links?: Array<{ title: string; url: string }>;
  timestamp: Date;
}

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
];

const KNOWLEDGE_BASE: Array<{
  keywords: string[];
  answerEn: string;
  answerHi: string;
  links: Array<{ title: string; url: string }>;
}> = [
  {
    keywords: ['short', 'reel', 'video', 'youtube short', 'instagram reel', 'tiktok', 'reels', 'shorts'],
    answerEn:
      '### 🎬 Creating & Scheduling Shorts / Reels in Siegfried Outreach\n1. Go to **Social Studio ➔ Create Post** (/social-media/create-post).\n2. Select your video accounts (**YouTube**, **Instagram**, **TikTok**).\n3. Under Post Format, select **Reel / Short (9:16 vertical)**.\n4. Upload your 9:16 MP4 video or use AI Video Assistant.\n5. Customize Title, Description & Hashtags.\n6. Choose **Publish Now** or **Schedule** for optimal reach.',
    answerHi:
      '### 🎬 Siegfried Outreach me Shorts / Reels kaise banayein aur schedule karein\n1. **Social Studio ➔ Create Post** (/social-media/create-post) par jayein.\n2. Apne video accounts select karein (**YouTube**, **Instagram**, **TikTok**).\n3. Post Type me **Reel / Short (9:16 vertical)** chunein.\n4. Apni 9:16 vertical MP4 video upload karein ya AI generate karein.\n5. Title, Description aur Tags dalein.\n6. **Publish Now** par click karein ya **Schedule** karein.',
    links: [
      { title: 'Create Post Guide', url: '/docs/social-media/reels-and-shorts' },
      { title: 'Post Creator in App', url: 'https://siegfriedoutreach.com/social-media/create-post' },
    ],
  },
  {
    keywords: ['402', 'twitter', 'x', 'fail', 'error', 'credits-depleted', 'credit', 'telemetry', 'logs'],
    answerEn:
      '### ❌ Diagnosing HTTP 402 Error on X (Twitter)\n- **Root Cause**: X API Developer account has depleted its paid balance or credit tier.\n- **Diagnosis**: Classified as API_CREDITS_DEPLETED under Third-Party Social API.\n- **Resolution Checklist**:\n  1. Log into Developer Portal (developer.x.com).\n  2. Check **Billing & Usage** and top up credits.\n  3. Go to Siegfried Outreach **Publishing Logs** (/social-media/logs).\n  4. Click **Inspect** to see diagnostic breakdown and click **Retry Now**.',
    answerHi:
      '### ❌ X (Twitter) par HTTP 402 Error ka Samadhan\n- **Karan**: Twitter Developer account me credits ya API balance khatam ho gaya hai.\n- **Diagnosis**: Isko hamara Telemetry system API_CREDITS_DEPLETED classify karta hai.\n- **Kaise Fix Karein**:\n  1. Twitter Developer Console par login karke balance recharge karein.\n  2. Siegfried Outreach ke **Publishing Logs** (/social-media/logs) par jayein.\n  3. **Inspect** button dabakar error details dekhein aur **Retry Now** click karein.',
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
      { title: 'AI Social Manager Guide', url: '/docs/ai-social-manager/indian-festivals-autopilot' },
      { title: 'Festival Auto-Pilot in App', url: 'https://siegfriedoutreach.com/ai-social/indian-festivals' },
    ],
  },
  {
    keywords: ['mcp', 'model context protocol', 'ai agent', 'hermes', 'bot', 'codex'],
    answerEn:
      '### 🧠 MCP Studio & AI Agent Architecture\n- **Model Context Protocol (MCP)**: Seamlessly connects Claude, Cursor, Google Antigravity, and AI Agents to your Siegfried Outreach databases and tools.\n- **Available Tools**: Includes social analytics, auto-publishing, CRM contact lookups, broadcast triggers, and Perfex CRM bridges.\n- **Setup**: Get your MCP API key from /mcp-studio?tab=keys and paste into your MCP Client configuration.',
    answerHi:
      '### 🧠 MCP Studio aur AI Agents ka upyog\n- **Model Context Protocol (MCP)**: AI Models aur IDEs ko aapke Siegfried Outreach system se securely connect karta hai.\n- **Tools**: Social posting, live analytics, CRM data search aur automated broadcasts sabhi MCP tools ke dwara operate hote hain.\n- **Setup**: /mcp-studio?tab=keys se API key generate karein aur apne client me configure karein.',
    links: [
      { title: 'MCP Studio Guide', url: '/docs/developer-mcp/mcp-overview' },
      { title: 'MCP Studio in App', url: 'https://siegfriedoutreach.com/mcp-studio' },
    ],
  },
];

export default function AiDocsAssistant() {
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState('');
  const [language, setLanguage] = useState<'both' | 'en' | 'hi'>('both');
  const [isLoading, setIsLoading] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 'welcome',
      role: 'assistant',
      content:
        '👋 **Hello! I am Siegfried AI Docs Assistant.**\nAsk me anything about Siegfried Outreach Platform in **English** or **हिंदी** (e.g. social scheduling, WhatsApp setup, error telemetry, or MCP agents).',
      hindiTranslation:
        '👋 **Namaste! Main Siegfried AI Docs Assistant hoon.**\nAap mujhse kisi bhi feature ke baare me Hindi ya English me pooch sakte hain.',
      timestamp: new Date(),
    },
  ]);

  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (isOpen) {
      chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  const handleSend = (textToSend?: string) => {
    const promptText = (textToSend || query).trim();
    if (!promptText) return;

    const userMsg: Message = {
      id: Date.now().toString(),
      role: 'user',
      content: promptText,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMsg]);
    setQuery('');
    setIsLoading(true);

    setTimeout(() => {
      const lowerQuery = promptText.toLowerCase();
      let matchedEntry = KNOWLEDGE_BASE.find((entry) =>
        entry.keywords.some((k) => lowerQuery.includes(k))
      );

      let assistantResponse: Message;

      if (matchedEntry) {
        assistantResponse = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content: matchedEntry.answerEn,
          hindiTranslation: matchedEntry.answerHi,
          links: matchedEntry.links,
          timestamp: new Date(),
        };
      } else {
        assistantResponse = {
          id: (Date.now() + 1).toString(),
          role: 'assistant',
          content:
            'Here is technical guidance for **' + promptText + '** on Siegfried Outreach Platform:\n\n' +
            '- Access this module directly from your platform dashboard.\n' +
            '- Check our documentation chapters for step-by-step instructions and industry blueprints.\n' +
            '- For real-time execution logs and error diagnostics, open Publishing Logs (/social-media/logs).',
          hindiTranslation:
            '**' + promptText + '** ke sambandh me jankari:\n\n' +
            '- Platform dashboard se sambandhit module open karein.\n' +
            '- Hamare user manual ke chapters me step-by-step guide dekhein.\n' +
            '- Kisi bhi post error ke live samadhan ke liye Publishing Logs (/social-media/logs) dekhein.',
          links: [
            { title: 'Documentation Index', url: '/docs' },
            { title: 'Publishing Logs', url: 'https://siegfriedoutreach.com/social-media/logs' },
          ],
          timestamp: new Date(),
        };
      }

      setMessages((prev) => [...prev, assistantResponse]);
      setIsLoading(false);
    }, 400);
  };

  return (
    <>
      {/* Floating Action Button */}
      <button
        onClick={() => setIsOpen(true)}
        aria-label="Ask Siegfried AI Assistant"
        className="fixed bottom-6 right-6 z-50 flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-indigo-600 hover:bg-indigo-500 text-white font-medium text-xs shadow-lg shadow-indigo-500/25 active:scale-95 transition-all duration-200 border border-white/10 cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5" />
        <span className="font-semibold">Ask Docs AI</span>
      </button>

      {/* Interactive Modal Assistant */}
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/50 backdrop-blur-xs animate-in fade-in duration-150">
          <div
            className="w-full sm:max-w-2xl bg-white dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-800 sm:rounded-2xl rounded-t-2xl shadow-2xl flex flex-col h-[85vh] sm:h-[660px] overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="p-4 bg-zinc-50 dark:bg-zinc-900/60 border-b border-zinc-200 dark:border-zinc-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-lg bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200 dark:border-indigo-500/20 text-indigo-600 dark:text-indigo-400">
                  <Bot className="w-4 h-4" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-bold text-zinc-900 dark:text-white tracking-tight">
                      Siegfried AI Docs Assistant
                    </h3>
                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-zinc-200/80 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                      Bilingual (EN + हिंदी)
                    </span>
                  </div>
                  <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                    Official assistance for docs.siegfriedoutreach.com
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                {/* Language Mode Selector */}
                <div className="flex items-center bg-zinc-200/70 dark:bg-zinc-900 border border-zinc-300 dark:border-zinc-800 rounded-lg p-0.5 text-xs">
                  <button
                    onClick={() => setLanguage('both')}
                    className={'px-2 py-0.5 rounded-md text-[11px] font-medium transition-all cursor-pointer ' + (language === 'both' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-2xs' : 'text-zinc-500 dark:text-zinc-400')}
                  >
                    Both
                  </button>
                  <button
                    onClick={() => setLanguage('en')}
                    className={'px-2 py-0.5 rounded-md text-[11px] font-medium transition-all cursor-pointer ' + (language === 'en' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-2xs' : 'text-zinc-500 dark:text-zinc-400')}
                  >
                    EN
                  </button>
                  <button
                    onClick={() => setLanguage('hi')}
                    className={'px-2 py-0.5 rounded-md text-[11px] font-medium transition-all cursor-pointer ' + (language === 'hi' ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-white shadow-2xs' : 'text-zinc-500 dark:text-zinc-400')}
                  >
                    हिंदी
                  </button>
                </div>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-1 rounded-lg text-zinc-400 hover:text-zinc-700 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors cursor-pointer"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Chat Stream */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4 text-xs sm:text-sm bg-zinc-50/50 dark:bg-zinc-950/40">
              {messages.map((msg) => {
                const isUser = msg.role === 'user';
                return (
                  <div
                    key={msg.id}
                    className={'flex items-start gap-2.5 ' + (isUser ? 'justify-end' : 'justify-start')}
                  >
                    {!isUser && (
                      <div className="p-1.5 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20 shrink-0 mt-0.5">
                        <Bot className="w-3.5 h-3.5" />
                      </div>
                    )}

                    <div
                      className={'max-w-[85%] rounded-xl p-3.5 space-y-2.5 ' + (isUser ? 'bg-indigo-600 text-white shadow-xs' : 'bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200 shadow-2xs')}
                    >
                      {/* English */}
                      {(language === 'both' || language === 'en' || isUser) && (
                        <div className="leading-relaxed whitespace-pre-wrap">
                          {msg.content}
                        </div>
                      )}

                      {/* Hindi */}
                      {!isUser && msg.hindiTranslation && (language === 'both' || language === 'hi') && (
                        <div className="pt-2 border-t border-zinc-100 dark:border-zinc-800 text-[11px] sm:text-xs text-zinc-600 dark:text-zinc-400 whitespace-pre-wrap leading-relaxed">
                          <div className="text-[10px] font-bold uppercase tracking-wider text-indigo-600 dark:text-indigo-400 mb-0.5 flex items-center gap-1">
                            <Globe className="w-3 h-3" /> हिंदी विवरण (Hindi Guide):
                          </div>
                          {msg.hindiTranslation}
                        </div>
                      )}

                      {/* Links */}
                      {!isUser && msg.links && msg.links.length > 0 && (
                        <div className="flex flex-wrap gap-1.5 pt-1">
                          {msg.links.map((link, idx) => (
                            <a
                              key={idx}
                              href={link.url}
                              target={link.url.startsWith('http') ? '_blank' : '_self'}
                              rel="noreferrer"
                              className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 text-[11px] font-medium transition-colors"
                            >
                              <BookOpen className="w-3 h-3 text-indigo-600 dark:text-indigo-400" />
                              {link.title}
                              <ChevronRight className="w-3 h-3 text-zinc-400" />
                            </a>
                          ))}
                        </div>
                      )}
                    </div>

                    {isUser && (
                      <div className="p-1.5 rounded-md bg-zinc-800 text-white shrink-0 mt-0.5">
                        <User className="w-3.5 h-3.5" />
                      </div>
                    )}
                  </div>
                );
              })}

              {isLoading && (
                <div className="flex items-center gap-2.5">
                  <div className="p-1.5 rounded-md bg-indigo-50 dark:bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-200 dark:border-indigo-500/20">
                    <Bot className="w-3.5 h-3.5 animate-spin" />
                  </div>
                  <div className="p-3 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-500 flex items-center gap-2">
                    <Loader2 className="w-3.5 h-3.5 animate-spin text-indigo-600 dark:text-indigo-400" />
                    Searching technical docs &amp; knowledge base...
                  </div>
                </div>
              )}

              <div ref={chatEndRef} />
            </div>

            {/* Suggestions */}
            <div className="px-4 py-2 bg-zinc-50 dark:bg-zinc-900/60 border-t border-zinc-200 dark:border-zinc-800 overflow-x-auto flex items-center gap-1.5 no-scrollbar">
              <span className="text-[11px] text-zinc-400 shrink-0 font-medium flex items-center gap-1">
                <Zap className="w-3 h-3 text-amber-500" /> Quick:
              </span>
              {PRESET_PROMPTS.map((prompt, i) => (
                <button
                  key={i}
                  onClick={() => handleSend(language === 'hi' ? prompt.hi : prompt.en)}
                  className="px-2.5 py-1 rounded-md bg-white dark:bg-zinc-800 hover:bg-zinc-100 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 text-[11px] whitespace-nowrap transition-colors cursor-pointer"
                >
                  {language === 'hi' ? prompt.hi : prompt.en}
                </button>
              ))}
            </div>

            {/* Input */}
            <div className="p-3 bg-white dark:bg-zinc-900 border-t border-zinc-200 dark:border-zinc-800">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  handleSend();
                }}
                className="flex items-center gap-2"
              >
                <input
                  type="text"
                  placeholder="Ask in English ya Hindi me sawal poochhein..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                  className="flex-1 bg-zinc-50 dark:bg-zinc-950 border border-zinc-200 dark:border-zinc-750 focus:border-indigo-600 dark:focus:border-indigo-500 rounded-lg px-3.5 py-2 text-xs sm:text-sm text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none transition-colors"
                />
                <button
                  type="submit"
                  disabled={!query.trim() || isLoading}
                  className="p-2 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white disabled:opacity-40 active:scale-95 transition-all cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
