import Link from 'next/link';
import { 
  Sparkles, 
  Share2, 
  BarChart3, 
  Bot, 
  Calendar, 
  Code2, 
  CheckCircle2, 
  ArrowRight, 
  Play, 
  Layers, 
  Flame, 
  Video, 
  Building2, 
  Mail, 
  ShieldCheck, 
  Zap, 
  Terminal, 
  BookOpen 
} from 'lucide-react';
import FeatureSlider from './components/FeatureSlider';
import BookDemoSection from './components/BookDemoSection';
import ThemeToggle from './components/ThemeToggle';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#090a0f] text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-600 transition-colors duration-200">
      {/* Enterprise Background Grid */}
      <div className="absolute inset-0 bg-enterprise-grid pointer-events-none -z-10" />

      {/* Header / Nav with Light/Dark Mode Switcher */}
      <header className="border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-[#090a0f]/80 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold shadow-xs">
              ⚡
            </span>
            <div className="flex flex-col">
              <span className="font-bold text-base tracking-tight text-zinc-900 dark:text-white">
                Siegfried <span className="text-indigo-600 dark:text-indigo-400 font-medium">Docs</span>
              </span>
              <span className="text-[10px] text-zinc-500 dark:text-zinc-400 font-medium tracking-wide uppercase">
                Official Knowledge Portal
              </span>
            </div>
          </div>

          <div className="flex items-center gap-2.5 sm:gap-4">
            <Link
              href="/docs"
              className="text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              User Manual
            </Link>
            <Link
              href="/docs/developer-mcp/mcp-overview"
              className="hidden md:inline-flex text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              MCP &amp; API
            </Link>
            <Link
              href="/docs/getting-started/100x-sales-growth-blueprint"
              className="hidden sm:inline-flex text-xs sm:text-sm font-medium text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
            >
              100x Blueprint
            </Link>

            {/* Dark and Light Mode Switcher in Header */}
            <ThemeToggle />

            <a
              href="#book-demo"
              className="hidden lg:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-200 text-xs font-semibold transition-colors"
            >
              <Calendar className="w-3.5 h-3.5 text-indigo-600 dark:text-indigo-400" />
              Book Demo
            </a>
            <a
              href="https://siegfriedoutreach.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold shadow-xs transition-colors"
            >
              Console ➔
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 sm:pt-20 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>v2.4 Enterprise Release &bull; Full Bilingual Standard (EN + हिंदी)</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white mb-5 leading-tight">
          Enterprise Outreach &amp; AI Social Media Automation
        </h1>

        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-3xl mx-auto mb-8 leading-relaxed">
          The definitive operational manual for Siegfried Outreach Platform. Configure multi-account publishers, automate Indian festival creative schedules, deploy WhatsApp Cloud broadcasts, and integrate Model Context Protocol (MCP) AI agents.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-xs transition-colors"
          >
            <BookOpen className="w-4 h-4" />
            Explore Documentation
          </Link>
          <a
            href="#book-demo"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-zinc-300 dark:hover:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold text-sm shadow-2xs transition-colors"
          >
            <Calendar className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
            Book 1-on-1 Strategy Demo
          </a>
        </div>

        {/* Enterprise Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 p-5 rounded-xl bg-white dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 shadow-xs text-left">
          <div>
            <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">10+ Channels</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Omnichannel Publishing</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-indigo-600 dark:text-indigo-400">45+ Festivals</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">India Cultural Autopilot</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">64+ MCP Tools</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Cursor &amp; Claude Ready</div>
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold text-emerald-600 dark:text-emerald-400">99.99%</div>
            <div className="text-xs text-zinc-500 dark:text-zinc-400">Enterprise Uptime SLA</div>
          </div>
        </div>
      </section>

      {/* ALL 46 FEATURE BLOCKS INTERACTIVE SLIDER */}
      <FeatureSlider />

      {/* 1-on-1 Demo & VIP Strategy Section */}
      <BookDemoSection />

      {/* Enterprise Corporate & Trust Details */}
      <section className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-950/60 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-sm mb-3">
              <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>TT INFOTECHS PVT LTD</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2">
              Leading Software &amp; IT Company in Bhubaneswar &bull; Next-Gen Siegfried Outreach Platform, Omni-Channel Automation &amp; AI MCP Studio.
            </p>
            <p className="text-zinc-700 dark:text-zinc-300 font-medium">Santoshi Vihar, Laxmisagar, Bhubaneswar, Odisha 751006, India</p>
            <p className="text-emerald-600 dark:text-emerald-400 font-semibold pt-1">WhatsApp: +91 93213 19079</p>
          </div>

          <div>
            <div className="text-zinc-900 dark:text-white font-bold text-sm mb-3">Support &amp; Strategy</div>
            <ul className="space-y-1.5">
              <li><span className="text-zinc-400 dark:text-zinc-500">Support:</span> <a href="mailto:support@siegfriedoutreach.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">support@siegfriedoutreach.com</a></li>
              <li><span className="text-zinc-400 dark:text-zinc-500">Corporate:</span> <a href="mailto:contact@siegfriedoutreach.com" className="text-indigo-600 dark:text-indigo-400 hover:underline">contact@siegfriedoutreach.com</a></li>
              <li><span className="text-zinc-400 dark:text-zinc-500">Strategy Booking:</span> <a href="#book-demo" className="text-emerald-600 dark:text-emerald-400 font-semibold hover:underline">Schedule 1-on-1 Meeting</a></li>
            </ul>
          </div>

          <div>
            <div className="text-zinc-900 dark:text-white font-bold text-sm mb-3">Certifications &amp; Partners</div>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-amber-500" /> <strong>Govt Approved</strong> (MCA &amp; MSME Registered)</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-blue-500" /> <strong>Official Meta Partner</strong> (Cloud API)</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> <strong>Certified Sales Experts</strong> (100x Growth)</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-purple-500" /> 256-bit SSL End-to-End Encryption</li>
            </ul>
          </div>

          <div>
            <div className="text-zinc-900 dark:text-white font-bold text-sm mb-3">Developer &amp; AI Directives</div>
            <ul className="space-y-1.5">
              <li><a href="/llms.txt" className="text-indigo-600 dark:text-indigo-400 hover:underline">/llms.txt (LLM Standard)</a></li>
              <li><a href="/llm.txt" className="text-indigo-600 dark:text-indigo-400 hover:underline">/llm.txt (AI Spec)</a></li>
              <li><a href="/feed.xml" className="text-indigo-600 dark:text-indigo-400 hover:underline">/feed.xml (RSS Fast Index)</a></li>
              <li><a href="/sitemap.xml" className="text-indigo-600 dark:text-indigo-400 hover:underline">/sitemap.xml (Google Sitemap)</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 dark:border-zinc-800 py-6 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 gap-4">
        <p>&copy; 2026 Siegfried Outreach Platform. All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/docs" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Documentation</Link>
          <a href="#book-demo" className="hover:text-indigo-600 dark:hover:text-indigo-400 text-indigo-600 dark:text-indigo-400 font-semibold transition-colors">Book 1-on-1 Demo</a>
          <a href="https://siegfriedoutreach.com" target="_blank" rel="noreferrer" className="hover:text-zinc-900 dark:hover:text-zinc-200 transition-colors">Console App</a>
        </div>
      </footer>
    </main>
  );
}
