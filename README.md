# ⚡ Siegfried Outreach Platform — Official Documentation & User Guide

A modern, high-performance documentation portal built with **[Fumadocs](https://github.com/fuma-nama/fumadocs)** (Next.js 15 App Router, MDX, Lucide Icons, Full-Text Search & Bilingual English/Hindi Guides).

---

## 🌟 Key Features

- 📱 **Social Media Management**: Multi-platform composer, live mobile/feed previews, visual calendar queues, draft system.
- 🎬 **Shorts & Reels Studio (9:16)**: Vertical video upload, AI hook generation, 1-click HD video frame capture, AI viral thumbnails.
- 📊 **Real-Time Analytics**: Impressions, cross-platform engagement rates, follower growth velocity, and platform deep-dives.
- 🤖 **AI Studio**: AI viral writer, slide maker for carousels, and photorealistic visual generator.
- 🔌 **Developer MCP**: Official Model Context Protocol server (64+ tools) for Cursor IDE, Claude Desktop, Antigravity, and REST API.
- 🌐 **Bilingual (English & हिंदी)**: Interactive tabs on every guide for seamless English & Hindi walkthroughs.

---

## 🛠️ Local Development

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/siegfriedoutreach-docs.git

# Navigate to directory
cd siegfriedoutreach-docs

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the documentation site.

---

## 🚀 How to Publish to GitHub & Deploy to Vercel

### Step 1: Push to Your GitHub Account
```bash
cd /www/wwwroot/siegfriedoutreach-docs
git init
git add .
git commit -m "feat: complete Fumadocs bilingual documentation portal for Siegfried Outreach"

# Create a new repository on GitHub (e.g. siegfriedoutreach-docs), then:
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/siegfriedoutreach-docs.git
git branch -M main
git push -u origin main
```

### Step 2: Deploy to Vercel in 1-Click
1. Go to [vercel.com/new](https://vercel.com/new) and log in.
2. Select **Import Git Repository** and choose `siegfriedoutreach-docs`.
3. Vercel will automatically detect **Next.js**.
4. Click **Deploy**.
5. Your documentation portal will be live on a fast global CDN (`https://siegfriedoutreach-docs.vercel.app`)!
