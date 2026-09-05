# ⚡ Siegfried Outreach Platform — Official Documentation & User Manual
> **Comprehensive Bilingual (English & हिंदी) Documentation Portal with AI Docs Assistant**
> 
> 🌐 **Live Portal**: [docs.siegfriedoutreach.com](https://docs.siegfriedoutreach.com) &nbsp;|&nbsp; 🚀 **Platform**: [siegfriedoutreach.com](https://siegfriedoutreach.com)

[![Next.js](https://img.shields.io/badge/Next.js-16.3.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![Fumadocs](https://img.shields.io/badge/Fumadocs-Framework-6366f1?style=for-the-badge&logo=book-open)](https://fumadocs.vercel.app/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0+-3178c6?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-Vanilla_Styled-38bdf8?style=for-the-badge&logo=tailwindcss)](https://tailwindcss.com/)
[![Bilingual](https://img.shields.io/badge/Language-English_%26_हिंदी-emerald?style=for-the-badge&logo=translate)](https://docs.siegfriedoutreach.com)
[![License](https://img.shields.io/badge/License-Proprietary-amber?style=for-the-badge)](https://siegfriedoutreach.com)

---

## 📖 Overview

The **Siegfried Outreach User Guide & Documentation Portal** is a modern, high-performance knowledge base built with **[Fumadocs](https://github.com/fuma-nama/fumadocs)** on Next.js 16 (App Router + Turbopack). It provides exhaustive, step-by-step operational workflows, architectural blueprints, troubleshooting guides, and API specifications for every single capability of the **Siegfried Outreach Platform**.

---

## 🌟 Core Highlights & AI Features

### 🤖 1. Interactive Bilingual AI Docs Assistant (`Ask AI`)
- **Floating AI Assistant Widget** embedded on all pages for instantaneous real-time question answering.
- **Dual-Language Intelligence**: Ask questions in **English** or **हिंदी** (e.g. *"YouTube Shorts kaise schedule karein?"*, *"HTTP 402 error kyu aata hai?"*, *"WhatsApp QR connect kaise karein?"*).
- **Direct 1-Click Navigation**: Answers include deep-link buttons pointing directly to relevant documentation sections and live platform actions on `siegfriedoutreach.com`.
- **Pre-configured Quick FAQs**: Instant answers for Social Publishing, India Festivals Auto-Pilot, Error Telemetry, and MCP Studio.

### 📱 2. Social Media Studio & Multi-Channel Dispatch
- Multi-account connection and synchronization for **X (Twitter), Instagram, Facebook Pages & Groups, YouTube Shorts/Videos, TikTok, LinkedIn, Pinterest, Reddit, WordPress**, plus WhatsApp QR and Official Cloud API.
- **Shorts & Reels Studio (9:16 Vertical Video)**: High-resolution frame grabber, AI viral hook and title generation, automatic thumbnail generator, and draft management.
- **Visual Content Calendar & Post Queue**: Interactive schedule grid, multi-account drag-and-drop management, and daily queue inspector.

### 📊 3. Publishing Logs & Real-Time Error Telemetry
- **Root-Cause Intelligence**: Classifies all failure dispatches into categorized diagnostic buckets:
  - `API_CREDITS_DEPLETED` *(e.g. X/Twitter HTTP 402)*
  - `AUTH_TOKEN_EXPIRED` *(OAuth token refresh failures)*
  - `PERMISSION_DENIED` *(Missing page admin roles)*
  - `RATE_LIMIT_EXCEEDED` *(Hourly/daily platform quotas)*
  - `MEDIA_PROCESSING_FAILED` *(Aspect ratio / video codec errors)*
  - `CONTENT_POLICY_VIOLATION`
  - `SYSTEM_ERROR`
- **Bilingual Diagnosis & Actionable Checklist**: Explains whether the issue originated from the **Third-Party Social API** or an **Internal System Worker**, with step-by-step resolution checklists.
- **1-Click Retry Dispatch**: Instantly re-queues and publishes failed dispatches directly from the audit modal.

### 🇮🇳 4. AI Social Manager & Indian Festivals Auto-Pilot
- **Autonomous Festival Scheduling**: Pre-schedules branded festive creatives and greetings for all major Indian occasions (Diwali, Holi, Eid, Independence Day, Navratri, Ganesh Chaturthi, Christmas, New Year).
- **Approval Center**: 1-click review, modification, and approval workflow before any AI-generated post goes live.
- **Multi-Brand Voice Profile**: Persistent branding, logos, color palettes, and tone of voice configurations.

### 🤖 5. Full AI Studio Suite
- **AI Chatbots & Bot Studio**: Custom knowledge-base training via PDF, URL scraping, raw text, and FAQ datasets.
- **AI Live Agent Handoff**: Human-agent query reply and channel routing.
- **AI Codex**: Full-stack code assistant with syntax highlighting and multi-language support.
- **AI Blog Writer & Content Rewriter**: SEO-optimized long-form blog articles and multi-tone paraphrasing.
- **AI Slide Maker & Presentation Studio**: Automated slide generation for social carousels and pitches.
- **AI Avatar & Video Studio**: Photorealistic talking avatars and AI voiceover synthesis.

### 📢 6. Campaign Hub & Broadcast Center
- **WhatsApp Cloud API & QR Sessions**: High-throughput broadcast campaigns, template approvals, and interactive contact lists.
- **Telegram Broadcasts**: Direct integration with Telegram bot tokens for group and channel subscriber messaging.
- **Bulk Email Campaigns**: Custom SMTP gateway setup, automated warmups, and tracking.

### 🧠 7. Model Context Protocol (MCP Studio)
- Seamless bridge connecting **Cursor IDE, Claude Desktop, Antigravity, and AI Agents** to Siegfried Outreach tools and database endpoints.
- 64+ tool implementations covering social publishing, analytics queries, CRM contact lookups, and campaign execution.

---

## 📂 Documentation Directory Structure

```
siegfriedoutreach-docs/
├── app/
│   ├── api/
│   │   └── search/             # Full-text fuzzy search API endpoint
│   ├── components/
│   │   └── AiDocsAssistant.tsx # Interactive Bilingual AI Assistant
│   ├── docs/
│   │   └── [[...slug]]/        # Dynamic Fumadocs MDX documentation pages
│   ├── layout.config.tsx       # Navigation bar & global options
│   ├── layout.tsx              # Root HTML & RootProvider layout
│   └── page.tsx                # Hero landing page with animated feature grid
├── content/
│   └── docs/
│       ├── getting-started/    # Account setup, Profile, Workspace configuration
│       ├── social-media/       # Post creator, Shorts/Reels, Calendar, Telemetry & Logs
│       ├── ai-studio/          # AI Social Manager, Festivals Auto-Pilot, Chatbots, Codex
│       ├── campaign-hub/       # WhatsApp Cloud API/QR, Telegram, Email broadcasts
│       ├── developer-mcp/      # MCP Studio, API Keys, Tool definitions, IDE integrations
│       ├── analytics/          # Cross-platform performance metrics & raw data export
│       └── troubleshooting/    # Error codes, HTTP 402/401/403 fixes, API limits
├── lib/
│   └── source.ts               # Fumadocs content source loader
├── public/                     # Static media and branding assets
├── next.config.mjs             # Next.js 16 Turbopack configuration with MDX plugin
├── package.json                # Dependencies and build scripts
└── tsconfig.json               # TypeScript configuration
```

---

## 🛠️ Local Development

```bash
# 1. Clone repository
git clone https://github.com/sonusainiemulator/siegfriedoutreach-docs.git

# 2. Navigate to directory
cd siegfriedoutreach-docs

# 3. Install dependencies
npm install

# 4. Start local development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 🚀 Building & Production Deployment

### Build Locally
```bash
npm run build
```
*Generates 23+ pre-rendered SSG pages with 0 TypeScript/lint errors.*

### Deploying to Vercel with Custom Domain (`docs.siegfriedoutreach.com`)

1. **Import on Vercel**:
   - Go to [vercel.com/new](https://vercel.com/new).
   - Select repository: **`sonusainiemulator/siegfriedoutreach-docs`**.
   - Framework preset: **Next.js**.
   - Click **Deploy**.

2. **Custom Domain Configuration**:
   - In your Vercel Project Dashboard ➔ **Settings** ➔ **Domains**.
   - Add domain: **`docs.siegfriedoutreach.com`**.
   - In your DNS provider (e.g. Cloudflare / cPanel / Namecheap), add a **CNAME record**:
     - **Name / Host**: `docs`
     - **Value / Target**: `cname.vercel-dns.com`
     - **TTL**: Auto / 3600

---

## 🤝 Contributing & Adding New Manual Pages

To add a new documentation chapter:
1. Create a new `.mdx` file inside `content/docs/<category>/<page-slug>.mdx`.
2. Include YAML frontmatter:
   ```mdx
   ---
   title: Feature Name (फीचर का नाम)
   description: Overview of the feature in English and Hindi.
   ---
   ```
3. Structure the page with bilingual tabs:
   ```mdx
   import { Tab, Tabs } from 'fumadocs-ui/components/tabs';

   <Tabs items={['English Guide', 'हिंदी गाइड']}>
     <Tab value="English Guide">
       ### English Step-by-Step Instructions
     </Tab>
     <Tab value="हिंदी गाइड">
       ### हिंदी में चरण-दर-चरण निर्देश
     </Tab>
   </Tabs>
   ```

---

## 📄 License & Copyright

© 2026 **Siegfried Outreach Platform**. All rights reserved. Built for internal team operations, clients, and developers.
