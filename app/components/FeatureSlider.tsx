'use client';

import React, { useState, useMemo, useEffect } from 'react';
import Link from 'next/link';
import {
  ChevronLeft,
  ChevronRight,
  Search,
  ArrowRight,
  Share2,
  Calendar,
  Bot,
  MessageSquare,
  Code2,
  ShieldCheck,
  Zap,
  BarChart3,
  Terminal,
  Sparkles,
  SlidersHorizontal,
  Flame,
  Layers
} from 'lucide-react';

const FEATURES = [
  {
    "id": "ai-social-manager/ai-planner-and-approval",
    "title": "AI Planner & Approval Center",
    "description": "AI Planner & Approval Center - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-social-manager/ai-planner-and-approval",
    "category": "AI Social Manager",
    "categoryFolder": "ai-social-manager",
    "iconName": "Calendar",
    "badgeColor": "amber"
  },
  {
    "id": "ai-social-manager/business-setup-brand-voice",
    "title": "Business Setup & Brand Voice",
    "description": "Business Setup & Brand Voice - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-social-manager/business-setup-brand-voice",
    "category": "AI Social Manager",
    "categoryFolder": "ai-social-manager",
    "iconName": "Calendar",
    "badgeColor": "amber"
  },
  {
    "id": "ai-social-manager/indian-festivals-autopilot",
    "title": "🇮🇳 Indian Festivals Auto-Pilot",
    "description": "🇮🇳 Indian Festivals Auto-Pilot - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-social-manager/indian-festivals-autopilot",
    "category": "AI Social Manager",
    "categoryFolder": "ai-social-manager",
    "iconName": "Calendar",
    "badgeColor": "amber"
  },
  {
    "id": "ai-social-manager/templates-and-credits",
    "title": "Templates & Credit Balance",
    "description": "Templates & Credit Balance - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-social-manager/templates-and-credits",
    "category": "AI Social Manager",
    "categoryFolder": "ai-social-manager",
    "iconName": "Calendar",
    "badgeColor": "amber"
  },
  {
    "id": "ai-studio/ai-avatar-and-video",
    "title": "AI Avatar & Video Studio (AI अवतार और वीडियो)",
    "description": "AI Avatar & Video Studio (AI अवतार और वीडियो) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach P...",
    "url": "/docs/ai-studio/ai-avatar-and-video",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-blog-writer",
    "title": "AI Blog Writer (AI ब्लॉग राइटर)",
    "description": "AI Blog Writer (AI ब्लॉग राइटर) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-blog-writer",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-bot-studio",
    "title": "AI Bot Studio (AI बॉट स्टूडियो)",
    "description": "AI Bot Studio (AI बॉट स्टूडियो) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-bot-studio",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-chat-assistant",
    "title": "AI Chat Assistant (AI चैट असिस्टेंट)",
    "description": "AI Chat Assistant (AI चैट असिस्टेंट) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-chat-assistant",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-codex-and-assistant",
    "title": "AI Codex & Multi-Model Chat Assistant",
    "description": "AI Codex & Multi-Model Chat Assistant - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-codex-and-assistant",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-codex",
    "title": "AI Codex (AI कोडेक्स)",
    "description": "AI Codex (AI कोडेक्स) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-codex",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-content-rewriter",
    "title": "AI Content Rewriter (AI कंटेंट री-राइटर)",
    "description": "AI Content Rewriter (AI कंटेंट री-राइटर) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-content-rewriter",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-detect",
    "title": "AI Detect (AI डिटेक्ट)",
    "description": "AI Detect (AI डिटेक्ट) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-detect",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-file-bot",
    "title": "AI File Bot (AI फाइल बॉट)",
    "description": "AI File Bot (AI फाइल बॉट) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-file-bot",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-live-agent",
    "title": "AI Live Agent (AI लाइव एजेंट)",
    "description": "AI Live Agent (AI लाइव एजेंट) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-live-agent",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-slide-maker",
    "title": "AI Slide Maker (AI स्लाइड मेकर)",
    "description": "AI Slide Maker (AI स्लाइड मेकर) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-slide-maker",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-transcription",
    "title": "AI Transcription (AI ट्रांसक्रिप्शन)",
    "description": "AI Transcription (AI ट्रांसक्रिप्शन) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-transcription",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-writer",
    "title": "AI Viral Writer & Hook Generator",
    "description": "AI Viral Writer & Hook Generator - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/ai-writer",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/ai-writing-assistant",
    "title": "AI Writing Assistant (AI राइटिंग असिस्टेंट)",
    "description": "AI Writing Assistant (AI राइटिंग असिस्टेंट) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Pla...",
    "url": "/docs/ai-studio/ai-writing-assistant",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/chatbots-and-bot-studio",
    "title": "AI Bot Studio & Chatbot Training (AI बॉट स्टूडियो)",
    "description": "AI Bot Studio & Chatbot Training (AI बॉट स्टूडियो) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outre...",
    "url": "/docs/ai-studio/chatbots-and-bot-studio",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/hermes-skills",
    "title": "Hermes Skills Catalog (हर्मीस AI स्किल्स)",
    "description": "Hermes Skills Catalog (हर्मीस AI स्किल्स) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platf...",
    "url": "/docs/ai-studio/hermes-skills",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/slide-maker",
    "title": "AI Slide & Carousel Maker",
    "description": "AI Slide & Carousel Maker - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/slide-maker",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "ai-studio/visual-generator",
    "title": "AI Visual & Image Generator",
    "description": "AI Visual & Image Generator - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/ai-studio/visual-generator",
    "category": "AI Studio Tools",
    "categoryFolder": "ai-studio",
    "iconName": "Bot",
    "badgeColor": "purple"
  },
  {
    "id": "analytics/overview-analytics",
    "title": "Unified Analytics Overview",
    "description": "Unified Analytics Overview - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/analytics/overview-analytics",
    "category": "Analytics",
    "categoryFolder": "analytics",
    "iconName": "BarChart3",
    "badgeColor": "emerald"
  },
  {
    "id": "analytics/platform-breakdowns",
    "title": "Platform-by-Platform Insights",
    "description": "Platform-by-Platform Insights - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/analytics/platform-breakdowns",
    "category": "Analytics",
    "categoryFolder": "analytics",
    "iconName": "BarChart3",
    "badgeColor": "emerald"
  },
  {
    "id": "campaign-hub/broadcasts-and-messaging",
    "title": "Omnichannel Broadcasts",
    "description": "Omnichannel Broadcasts - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/campaign-hub/broadcasts-and-messaging",
    "category": "Campaign Hub",
    "categoryFolder": "campaign-hub",
    "iconName": "MessageSquare",
    "badgeColor": "emerald"
  },
  {
    "id": "campaign-hub/contacts-and-segments",
    "title": "Contacts & Audience Segments",
    "description": "Contacts & Audience Segments - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/campaign-hub/contacts-and-segments",
    "category": "Campaign Hub",
    "categoryFolder": "campaign-hub",
    "iconName": "MessageSquare",
    "badgeColor": "emerald"
  },
  {
    "id": "campaign-hub/mail-setup-and-preferences",
    "title": "Mail Setup & Deliverability",
    "description": "Mail Setup & Deliverability - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/campaign-hub/mail-setup-and-preferences",
    "category": "Campaign Hub",
    "categoryFolder": "campaign-hub",
    "iconName": "MessageSquare",
    "badgeColor": "emerald"
  },
  {
    "id": "developer-mcp/cursor-and-claude",
    "title": "Connecting MCP to Cursor & Claude Desktop",
    "description": "Connecting MCP to Cursor & Claude Desktop - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platf...",
    "url": "/docs/developer-mcp/cursor-and-claude",
    "category": "Developer & MCP",
    "categoryFolder": "developer-mcp",
    "iconName": "Code2",
    "badgeColor": "cyan"
  },
  {
    "id": "developer-mcp/mcp-overview",
    "title": "Siegfried MCP Server Overview",
    "description": "Siegfried MCP Server Overview - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/developer-mcp/mcp-overview",
    "category": "Developer & MCP",
    "categoryFolder": "developer-mcp",
    "iconName": "Code2",
    "badgeColor": "cyan"
  },
  {
    "id": "developer-mcp/rest-api-reference",
    "title": "REST API & Webhooks Reference",
    "description": "REST API & Webhooks Reference - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/developer-mcp/rest-api-reference",
    "category": "Developer & MCP",
    "categoryFolder": "developer-mcp",
    "iconName": "Code2",
    "badgeColor": "cyan"
  },
  {
    "id": "getting-started/100x-sales-growth-blueprint",
    "title": "🚀 100x 1-Week Sales Growth Blueprint",
    "description": "🚀 100x 1-Week Sales Growth Blueprint - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/getting-started/100x-sales-growth-blueprint",
    "category": "Growth Playbooks",
    "categoryFolder": "getting-started",
    "iconName": "Zap",
    "badgeColor": "indigo"
  },
  {
    "id": "getting-started/connecting-accounts",
    "title": "Connecting Social Networks",
    "description": "Connecting Social Networks - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/getting-started/connecting-accounts",
    "category": "Growth Playbooks",
    "categoryFolder": "getting-started",
    "iconName": "Zap",
    "badgeColor": "indigo"
  },
  {
    "id": "getting-started/quickstart",
    "title": "5-Minute Quickstart",
    "description": "5-Minute Quickstart - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/getting-started/quickstart",
    "category": "Growth Playbooks",
    "categoryFolder": "getting-started",
    "iconName": "Zap",
    "badgeColor": "indigo"
  },
  {
    "id": "getting-started/workspace-and-credits",
    "title": "Workspaces & Credits",
    "description": "Workspaces & Credits - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/getting-started/workspace-and-credits",
    "category": "Growth Playbooks",
    "categoryFolder": "getting-started",
    "iconName": "Zap",
    "badgeColor": "indigo"
  },
  {
    "id": "security-and-members/passkeys-and-biometrics",
    "title": "Passkeys & Biometric Security",
    "description": "Passkeys & Biometric Security - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/security-and-members/passkeys-and-biometrics",
    "category": "Security & Auth",
    "categoryFolder": "security-and-members",
    "iconName": "ShieldCheck",
    "badgeColor": "teal"
  },
  {
    "id": "security-and-members/plans-and-billing",
    "title": "Plans, Subscriptions & Invoicing",
    "description": "Plans, Subscriptions & Invoicing - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/security-and-members/plans-and-billing",
    "category": "Security & Auth",
    "categoryFolder": "security-and-members",
    "iconName": "ShieldCheck",
    "badgeColor": "teal"
  },
  {
    "id": "security-and-members/team-roles-and-permissions",
    "title": "Team Roles & Permissions Matrix",
    "description": "Team Roles & Permissions Matrix - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/security-and-members/team-roles-and-permissions",
    "category": "Security & Auth",
    "categoryFolder": "security-and-members",
    "iconName": "ShieldCheck",
    "badgeColor": "teal"
  },
  {
    "id": "social-media/ads-managers",
    "title": "Multi-Platform Ads Managers",
    "description": "Multi-Platform Ads Managers - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/social-media/ads-managers",
    "category": "Social Studio",
    "categoryFolder": "social-media",
    "iconName": "Share2",
    "badgeColor": "blue"
  },
  {
    "id": "social-media/auto-thumbnails",
    "title": "Auto Thumbnail & Cover Studio",
    "description": "Auto Thumbnail & Cover Studio - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/social-media/auto-thumbnails",
    "category": "Social Studio",
    "categoryFolder": "social-media",
    "iconName": "Share2",
    "badgeColor": "blue"
  },
  {
    "id": "social-media/calendar-management",
    "title": "Interactive Social Calendar",
    "description": "Interactive Social Calendar - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/social-media/calendar-management",
    "category": "Social Studio",
    "categoryFolder": "social-media",
    "iconName": "Share2",
    "badgeColor": "blue"
  },
  {
    "id": "social-media/drafts-and-scheduling",
    "title": "Post Drafts & Automated Scheduling",
    "description": "Post Drafts & Automated Scheduling - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/social-media/drafts-and-scheduling",
    "category": "Social Studio",
    "categoryFolder": "social-media",
    "iconName": "Share2",
    "badgeColor": "blue"
  },
  {
    "id": "social-media/post-composer",
    "title": "Multi-Platform Post Composer",
    "description": "Multi-Platform Post Composer - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/social-media/post-composer",
    "category": "Social Studio",
    "categoryFolder": "social-media",
    "iconName": "Share2",
    "badgeColor": "blue"
  },
  {
    "id": "social-media/publishing-logs-telemetry",
    "title": "Publishing Logs & Error Telemetry",
    "description": "Publishing Logs & Error Telemetry - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/social-media/publishing-logs-telemetry",
    "category": "Social Studio",
    "categoryFolder": "social-media",
    "iconName": "Share2",
    "badgeColor": "blue"
  },
  {
    "id": "social-media/reels-and-shorts",
    "title": "YouTube Shorts & Instagram Reels (9:16)",
    "description": "YouTube Shorts & Instagram Reels (9:16) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/social-media/reels-and-shorts",
    "category": "Social Studio",
    "categoryFolder": "social-media",
    "iconName": "Share2",
    "badgeColor": "blue"
  },
  {
    "id": "troubleshooting/common-faqs",
    "title": "Frequently Asked Questions (FAQ)",
    "description": "Frequently Asked Questions (FAQ) - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/troubleshooting/common-faqs",
    "category": "Troubleshooting",
    "categoryFolder": "troubleshooting",
    "iconName": "Terminal",
    "badgeColor": "red"
  },
  {
    "id": "troubleshooting/token-refresh",
    "title": "Re-Authenticating Expired Tokens",
    "description": "Re-Authenticating Expired Tokens - Step-by-step user manual, real-world practical use cases, and automation workflows for Siegfried Outreach Platform.",
    "url": "/docs/troubleshooting/token-refresh",
    "category": "Troubleshooting",
    "categoryFolder": "troubleshooting",
    "iconName": "Terminal",
    "badgeColor": "red"
  }
];

const CATEGORIES = [
  'All (46)',
  'Social Studio',
  'AI Social Manager',
  'AI Studio Tools',
  'Campaign Hub',
  'Developer & MCP',
  'Security & Auth',
  'Growth Playbooks',
  'Analytics'
];

export default function FeatureSlider() {
  const [activeCategory, setActiveCategory] = useState('All (46)');
  const [searchQuery, setSearchQuery] = useState('');
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 6; // 3x2 grid per slide

  const filteredFeatures = useMemo(() => {
    return FEATURES.filter((feat) => {
      const matchCat =
        activeCategory === 'All (46)' || feat.category === activeCategory;
      const matchQuery =
        searchQuery === '' ||
        feat.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        feat.category.toLowerCase().includes(searchQuery.toLowerCase());
      return matchCat && matchQuery;
    });
  }, [activeCategory, searchQuery]);

  const totalPages = Math.max(1, Math.ceil(filteredFeatures.length / itemsPerPage));

  useEffect(() => {
    setCurrentPage(0);
  }, [activeCategory, searchQuery]);

  const handlePrev = () => {
    setCurrentPage((prev) => (prev > 0 ? prev - 1 : totalPages - 1));
  };

  const handleNext = () => {
    setCurrentPage((prev) => (prev < totalPages - 1 ? prev + 1 : 0));
  };

  const currentItems = useMemo(() => {
    const start = currentPage * itemsPerPage;
    return filteredFeatures.slice(start, start + itemsPerPage);
  }, [filteredFeatures, currentPage, itemsPerPage]);

  const getIcon = (cat: string) => {
    switch (cat) {
      case 'Social Studio': return <Share2 className="w-5 h-5 text-blue-500" />;
      case 'AI Social Manager': return <Calendar className="w-5 h-5 text-amber-500" />;
      case 'AI Studio Tools': return <Bot className="w-5 h-5 text-purple-500" />;
      case 'Campaign Hub': return <MessageSquare className="w-5 h-5 text-emerald-500" />;
      case 'Developer & MCP': return <Code2 className="w-5 h-5 text-cyan-500" />;
      case 'Security & Auth': return <ShieldCheck className="w-5 h-5 text-teal-500" />;
      case 'Growth Playbooks': return <Zap className="w-5 h-5 text-indigo-500" />;
      case 'Analytics': return <BarChart3 className="w-5 h-5 text-emerald-500" />;
      default: return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section className="py-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Slider Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-8">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-indigo-50 dark:bg-indigo-500/10 border border-indigo-200/80 dark:border-indigo-500/20 text-indigo-700 dark:text-indigo-400 text-xs font-semibold mb-2">
            <Layers className="w-3.5 h-3.5" />
            <span>Interactive Feature Matrix (46 Total Features)</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            Explore All 46 Siegfried Platform Capabilities
          </h2>
          <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mt-1">
            Browse through all chapters or use category filter and search to jump straight into any guide.
          </p>
        </div>

        {/* Search & Navigation Controls */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search 46 features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-9 pr-3 py-1.5 rounded-lg bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 text-xs text-zinc-900 dark:text-white placeholder-zinc-400 focus:outline-none focus:border-indigo-600 dark:focus:border-indigo-500 w-44 sm:w-60 transition-colors"
            />
          </div>

          <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 rounded-lg p-1">
            <button
              onClick={handlePrev}
              aria-label="Previous Slide"
              className="p-1.5 rounded-md text-zinc-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <ChevronLeft className="w-4 h-4" />
            </button>
            <span className="text-[11px] font-medium text-zinc-500 dark:text-zinc-400 px-2">
              {currentPage + 1} / {totalPages}
            </span>
            <button
              onClick={handleNext}
              aria-label="Next Slide"
              className="p-1.5 rounded-md text-zinc-600 dark:text-zinc-300 hover:bg-white dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white transition-colors cursor-pointer"
            >
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Category Pills Bar */}
      <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-6 no-scrollbar">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat;
          return (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
                isActive
                  ? 'bg-indigo-600 text-white shadow-xs'
                  : 'bg-white dark:bg-zinc-900 text-zinc-600 dark:text-zinc-400 border border-zinc-200/80 dark:border-zinc-800/80 hover:bg-zinc-100 dark:hover:bg-zinc-800 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          );
        })}
      </div>

      {/* Features Grid Carousel Container */}
      {filteredFeatures.length === 0 ? (
        <div className="text-center py-16 bg-white dark:bg-zinc-900/40 rounded-xl border border-dashed border-zinc-300 dark:border-zinc-800">
          <p className="text-zinc-500 text-sm">No feature found matching &quot;{searchQuery}&quot;.</p>
          <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('All (46)');
            }}
            className="mt-3 text-xs font-semibold text-indigo-600 dark:text-indigo-400 hover:underline"
          >
            Reset Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {currentItems.map((feat) => (
            <Link
              key={feat.id}
              href={feat.url}
              className="group p-5 rounded-xl bg-white dark:bg-zinc-900/70 border border-zinc-200/80 dark:border-zinc-800/80 hover:border-indigo-500 dark:hover:border-indigo-500 shadow-2xs hover:shadow-md hover:-translate-y-0.5 transition-all flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200/60 dark:border-zinc-700/60 group-hover:scale-105 transition-transform">
                    {getIcon(feat.category)}
                  </div>
                  <span className="text-[10px] font-semibold text-zinc-500 dark:text-zinc-400 uppercase tracking-wider bg-zinc-100 dark:bg-zinc-800 px-2 py-0.5 rounded">
                    {feat.category}
                  </span>
                </div>

                <h3 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors mb-1.5 line-clamp-1">
                  {feat.title}
                </h3>

                <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed line-clamp-2 mb-4">
                  {feat.description}
                </p>
              </div>

              <div className="text-xs font-semibold text-indigo-600 dark:text-indigo-400 flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                Read Guide <ArrowRight className="w-3 h-3" />
              </div>
            </Link>
          ))}
        </div>
      )}

      {/* Bottom Slider Pagination Dots */}
      <div className="flex items-center justify-center gap-2 mt-8">
        {Array.from({ length: totalPages }).map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrentPage(idx)}
            aria-label={`Slide ${idx + 1}`}
            className={`h-1.5 rounded-full transition-all cursor-pointer ${
              currentPage === idx
                ? 'w-6 bg-indigo-600 dark:bg-indigo-400'
                : 'w-2 bg-zinc-300 dark:bg-zinc-700 hover:bg-zinc-400 dark:hover:bg-zinc-600'
            }`}
          />
        ))}
      </div>
    </section>
  );
}
