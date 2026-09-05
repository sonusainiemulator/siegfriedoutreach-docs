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
  Globe2,
  Video,
  Building2,
  Mail,
  ShieldCheck,
  Zap,
  Terminal,
  Cpu,
  BookOpen,
  MessageSquare
} from 'lucide-react';
import BookDemoSection from './components/BookDemoSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-[#090a0f] text-zinc-900 dark:text-zinc-100 selection:bg-indigo-500/20 selection:text-indigo-600 transition-colors duration-200">
      {/* Enterprise Subtle Grid */}
      <div className="absolute inset-0 bg-enterprise-grid pointer-events-none -z-10" />

      {/* Header / Nav */}
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

          <div className="flex items-center gap-3 sm:gap-5">
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
              100x Growth Blueprint
            </Link>
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
              Launch App
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-16 pb-12 sm:pt-24 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300 text-xs font-medium mb-6">
          <span className="flex h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>v2.4 Enterprise Release &bull; Full Bilingual Support (EN + हिंदी)</span>
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

      {/* Structured Architecture Matrix */}
      <section className="py-12 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 border-b border-zinc-200 dark:border-zinc-800 pb-4">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white tracking-tight">
              Platform Architecture &amp; Core Modules
            </h2>
            <p className="text-zinc-500 dark:text-zinc-400 text-xs sm:text-sm mt-1">
              Engineered for marketing leaders, D2C brand managers, and AI development engineers.
            </p>
          </div>
          <Link href="/docs" className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline mt-2 sm:mt-0 inline-flex items-center gap-1">
            View All 46+ Features <ArrowRight className="w-3 h-3" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Module 1 */}
          <Link
            href="/docs/social-media/post-composer"
            className="enterprise-card p-6 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-2xs hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-200/60 dark:border-blue-500/20">
                <Share2 className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Social Studio</span>
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5">
              Omnichannel Post Composer
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Write once, customize platform overrides, and dispatch simultaneously to Instagram, X, Facebook, LinkedIn, TikTok, and Reddit.
            </p>
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              Read Guide <ArrowRight className="w-3 h-3" />
            </div>
          </Link>

          {/* Module 2 */}
          <Link
            href="/docs/ai-social-manager/indian-festivals-autopilot"
            className="enterprise-card p-6 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-2xs hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-amber-50 dark:bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-200/60 dark:border-amber-500/20">
                <Calendar className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Automation</span>
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5">
              India Festivals Autopilot
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              45+ cultural festivals automatically scheduled with brand logo, tailored color schemes, and bilingual festive captions.
            </p>
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              Read Guide <ArrowRight className="w-3 h-3" />
            </div>
          </Link>

          {/* Module 3 */}
          <Link
            href="/docs/campaign-hub/broadcasts-and-messaging"
            className="enterprise-card p-6 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-2xs hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-emerald-50 dark:bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-200/60 dark:border-emerald-500/20">
                <MessageSquare className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Campaign Hub</span>
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5">
              WhatsApp &amp; Telegram Broadcasts
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Official WhatsApp Cloud API &amp; QR sessions with interactive buttons, segmentation filters, and delivery telemetry.
            </p>
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              Read Guide <ArrowRight className="w-3 h-3" />
            </div>
          </Link>

          {/* Module 4 */}
          <Link
            href="/docs/developer-mcp/mcp-overview"
            className="enterprise-card p-6 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-2xs hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-purple-50 dark:bg-purple-500/10 text-purple-600 dark:text-purple-400 border border-purple-200/60 dark:border-purple-500/20">
                <Code2 className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Developer</span>
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5">
              Model Context Protocol (MCP)
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Native MCP server connecting Cursor IDE, Claude Desktop, and autonomous agents directly to Siegfried Outreach data.
            </p>
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              Read Guide <ArrowRight className="w-3 h-3" />
            </div>
          </Link>

          {/* Module 5 */}
          <Link
            href="/docs/social-media/publishing-logs-telemetry"
            className="enterprise-card p-6 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-2xs hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-red-50 dark:bg-red-500/10 text-red-600 dark:text-red-400 border border-red-200/60 dark:border-red-500/20">
                <Terminal className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Reliability</span>
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5">
              Publishing Logs &amp; Auto-Retry
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Real-time telemetry queue with error categorization, rate-limit backoff, and 1-click retry engine for failed posts.
            </p>
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              Read Guide <ArrowRight className="w-3 h-3" />
            </div>
          </Link>

          {/* Module 6 */}
          <Link
            href="/docs/security-and-members/passkeys-and-biometrics"
            className="enterprise-card p-6 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-2xs hover:shadow-md transition-all"
          >
            <div className="flex items-center justify-between mb-3">
              <span className="p-2 rounded-lg bg-teal-50 dark:bg-teal-500/10 text-teal-600 dark:text-teal-400 border border-teal-200/60 dark:border-teal-500/20">
                <ShieldCheck className="w-5 h-5" />
              </span>
              <span className="text-[10px] font-semibold text-zinc-400 uppercase tracking-wider">Security</span>
            </div>
            <h3 className="text-base font-bold text-zinc-900 dark:text-white mb-1.5">
              FIDO2 Passkeys &amp; WebAuthn
            </h3>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
              Passwordless biometric authentication with Apple Touch ID, Face ID, Windows Hello, and hardware YubiKey tokens.
            </p>
            <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1">
              Read Guide <ArrowRight className="w-3 h-3" />
            </div>
          </Link>
        </div>
      </section>

      {/* 1-on-1 Demo & VIP Strategy Section */}
      <BookDemoSection />

      {/* Enterprise Corporate & Trust Details */}
      <section className="py-12 border-t border-zinc-200 dark:border-zinc-800 bg-zinc-100/60 dark:bg-zinc-950/60 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-zinc-500 dark:text-zinc-400">
          <div>
            <div className="flex items-center gap-2 text-zinc-900 dark:text-white font-bold text-sm mb-3">
              <Building2 className="w-4 h-4 text-indigo-600 dark:text-indigo-400" />
              <span>Siegfried Outreach Inc.</span>
            </div>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed mb-2">
              Next-generation enterprise outreach, omni-channel social media automation, and AI Agent MCP platform.
            </p>
            <p className="text-zinc-400 dark:text-zinc-500">DLF CyberCity, Gurugram / Delaware, USA</p>
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
            <div className="text-zinc-900 dark:text-white font-bold text-sm mb-3">Compliance &amp; Trust</div>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> FIDO2 Passkeys &amp; WebAuthn</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> Meta Cloud &amp; Google Cloud Approved API</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-500" /> 256-bit SSL End-to-End Encryption</li>
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
