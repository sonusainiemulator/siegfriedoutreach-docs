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
  Phone
} from 'lucide-react';
import BookDemoSection from './components/BookDemoSection';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 selection:bg-indigo-500/30 selection:text-indigo-400">
      {/* Background glow effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-purple-600/20 blur-[130px] rounded-full" />
        <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-purple-600/10 blur-[140px] rounded-full" />
        <div className="absolute bottom-10 left-[-10%] w-[500px] h-[500px] bg-blue-600/10 blur-[140px] rounded-full" />
      </div>

      {/* Header / Nav */}
      <header className="border-b border-slate-800/80 bg-slate-950/60 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white font-bold shadow-lg shadow-indigo-500/25">
              ⚡
            </span>
            <div className="flex flex-col">
              <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent font-extrabold text-lg tracking-tight">
                Siegfried Outreach
              </span>
              <span className="text-[10px] text-slate-400 font-medium tracking-wide uppercase">User Docs &amp; Knowledge Portal</span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <Link
              href="/docs"
              className="text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              Documentation
            </Link>
            <Link
              href="/docs/developer-mcp/mcp-overview"
              className="hidden sm:inline-flex text-sm font-medium text-slate-300 hover:text-white transition-colors"
            >
              MCP &amp; API
            </Link>
            <a
              href="#book-demo"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-indigo-500/20 border border-indigo-500/40 text-indigo-300 text-xs font-semibold hover:bg-indigo-500/30 transition-all"
            >
              <Calendar className="w-3.5 h-3.5" />
              Book Free Demo
            </a>
            <a
              href="https://siegfriedoutreach.com"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 text-white text-xs font-semibold shadow-md shadow-indigo-500/20 transition-all hover:scale-105 active:scale-95"
            >
              Open Platform
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto text-center">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-medium mb-6">
          <Sparkles className="w-3.5 h-3.5" />
          <span>Bilingual Step-by-Step User Guide (English &amp; हिंदी)</span>
        </div>

        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight">
          Master the{' '}
          <span className="bg-gradient-to-r from-blue-400 via-indigo-300 to-purple-400 bg-clip-text text-transparent">
            Siegfried Outreach
          </span>{' '}
          Growth Platform
        </h1>

        <p className="text-lg sm:text-xl text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed">
          Learn how to generate viral YouTube Shorts &amp; Instagram Reels, automate cross-platform scheduling across 10+ social networks, analyze real engagement metrics, and build AI agents using Siegfried MCP.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4">
          <Link
            href="/docs"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-semibold text-sm shadow-xl shadow-indigo-500/25 transition-all hover:scale-105"
          >
            <Play className="w-4 h-4 fill-white" />
            Start User Guide (शुरू करें)
          </Link>
          <a
            href="#book-demo"
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-slate-900 border border-indigo-500/40 text-indigo-300 font-semibold text-sm transition-all hover:bg-slate-800"
          >
            <Calendar className="w-4 h-4 text-indigo-400" />
            Book Free 1-on-1 Strategy Call
          </a>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3">Feature Guides &amp; Tutorials</h2>
          <p className="text-slate-400 text-sm max-w-xl mx-auto">
            Comprehensive step-by-step instructions for every tool in the Siegfried Outreach ecosystem.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1: Social Media Composer */}
          <Link
            href="/docs/social-media/post-composer"
            className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-indigo-500/50 hover:bg-slate-900 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 text-blue-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Share2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
              Multi-Platform Post Composer
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Write once and publish simultaneously to Instagram, X (Twitter), Facebook, LinkedIn, TikTok, YouTube, Pinterest, and Reddit.
            </p>
            <div className="flex items-center text-xs font-semibold text-indigo-400 gap-1">
              Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 2: YouTube Shorts & Reels */}
          <Link
            href="/docs/social-media/reels-and-shorts"
            className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-purple-500/50 hover:bg-slate-900 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Video className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
              YouTube Shorts &amp; Reels (9:16)
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Vertical video upload, AI hook generation, auto video frame capture, viral cover selection, and cross-platform scheduling.
            </p>
            <div className="flex items-center text-xs font-semibold text-purple-400 gap-1">
              Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 3: Auto Thumbnails */}
          <Link
            href="/docs/social-media/auto-thumbnails"
            className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-pink-500/50 hover:bg-slate-900 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-pink-500/10 border border-pink-500/20 text-pink-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Flame className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-pink-400 transition-colors">
              AI &amp; Video Thumbnail Studio
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Extract HD frames from video in 1-click or generate eye-catching AI thumbnail art with badges and custom typography.
            </p>
            <div className="flex items-center text-xs font-semibold text-pink-400 gap-1">
              Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 4: Analytics */}
          <Link
            href="/docs/analytics/overview-analytics"
            className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-emerald-500/50 hover:bg-slate-900 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <BarChart3 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-emerald-400 transition-colors">
              Multi-Platform Analytics
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Real-time impressions, engagement rates, follower growth charts, and channel-by-channel performance breakdowns.
            </p>
            <div className="flex items-center text-xs font-semibold text-emerald-400 gap-1">
              Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 5: AI Studio */}
          <Link
            href="/docs/ai-studio/ai-writer"
            className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-amber-500/50 hover:bg-slate-900 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Bot className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-amber-400 transition-colors">
              AI Writer &amp; Slide Studio
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Generate viral hooks, emoji captions, trending hashtags, multi-slide carousel graphics, and custom AI artwork.
            </p>
            <div className="flex items-center text-xs font-semibold text-amber-400 gap-1">
              Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>

          {/* Card 6: Developer MCP */}
          <Link
            href="/docs/developer-mcp/mcp-overview"
            className="group p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 hover:border-cyan-500/50 hover:bg-slate-900 transition-all duration-300"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
              <Code2 className="w-6 h-6" />
            </div>
            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
              Siegfried MCP &amp; Developer API
            </h3>
            <p className="text-sm text-slate-400 leading-relaxed mb-4">
              Integrate 64+ Model Context Protocol tools into Cursor IDE, Claude Desktop, Antigravity, and custom automation scripts.
            </p>
            <div className="flex items-center text-xs font-semibold text-cyan-400 gap-1">
              Read Guide <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
            </div>
          </Link>
        </div>
      </section>

      {/* Free 1-on-1 Demo & Strategy Consultation Section */}
      <BookDemoSection />

      {/* Detailed Corporate Information & Trust Section */}
      <section className="py-12 border-t border-slate-800/80 bg-slate-950/60 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-xs text-slate-400">
          <div>
            <div className="flex items-center gap-2 text-white font-bold text-sm mb-3">
              <Building2 className="w-4 h-4 text-indigo-400" />
              <span>Siegfried Outreach Inc.</span>
            </div>
            <p className="text-slate-400 leading-relaxed mb-2">
              Next-generation enterprise outreach, omni-channel social media automation, and AI Agent MCP platform.
            </p>
            <p className="text-slate-500">DLF CyberCity, Gurugram / Delaware, USA</p>
          </div>

          <div>
            <div className="text-white font-bold text-sm mb-3">Direct Support &amp; Contacts</div>
            <ul className="space-y-1.5">
              <li><span className="text-slate-500">Support:</span> <a href="mailto:support@siegfriedoutreach.com" className="text-indigo-400 hover:underline">support@siegfriedoutreach.com</a></li>
              <li><span className="text-slate-500">Inquiries:</span> <a href="mailto:contact@siegfriedoutreach.com" className="text-indigo-400 hover:underline">contact@siegfriedoutreach.com</a></li>
              <li><span className="text-slate-500">Strategy Booking:</span> <a href="#book-demo" className="text-emerald-400 hover:underline">Book 1-on-1 Meeting</a></li>
            </ul>
          </div>

          <div>
            <div className="text-white font-bold text-sm mb-3">Security &amp; Compliance</div>
            <ul className="space-y-1.5">
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> FIDO2 Passkeys &amp; WebAuthn</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> Meta &amp; Google Cloud Approved API</li>
              <li className="flex items-center gap-1.5"><ShieldCheck className="w-3.5 h-3.5 text-emerald-400" /> 256-bit SSL End-to-End Encryption</li>
            </ul>
          </div>

          <div>
            <div className="text-white font-bold text-sm mb-3">AI Agent Integrations</div>
            <ul className="space-y-1.5">
              <li><a href="/llms.txt" className="text-indigo-400 hover:underline">/llms.txt (LLM Standard)</a></li>
              <li><a href="/llm.txt" className="text-indigo-400 hover:underline">/llm.txt (AI Spec)</a></li>
              <li><a href="/feed.xml" className="text-indigo-400 hover:underline">/feed.xml (RSS Fast Index)</a></li>
              <li><a href="/sitemap.xml" className="text-indigo-400 hover:underline">/sitemap.xml (Google Sitemap)</a></li>
            </ul>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-800/80 py-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
        <p>© 2026 Siegfried Outreach Platform (Siegfried Outreach Inc.). All rights reserved.</p>
        <div className="flex items-center gap-6">
          <Link href="/docs" className="hover:text-slate-300 transition-colors">Documentation</Link>
          <a href="#book-demo" className="hover:text-indigo-400 text-indigo-400 font-semibold transition-colors">Book 1-on-1 Demo</a>
          <a href="https://siegfriedoutreach.com" target="_blank" rel="noreferrer" className="hover:text-slate-300 transition-colors">Platform App</a>
        </div>
      </footer>
    </main>
  );
}
