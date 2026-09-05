import { source } from '@/lib/source';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const pages = source.getPages();
  const baseUrl = 'https://docs.siegfriedoutreach.com';

  const lines = [
    '# Siegfried Outreach Platform - LLM & AI Agent Reference Guide',
    '',
    '> Official bilingual (English & Hindi) technical specification and user guide for Siegfried Outreach Platform.',
    '',
    '## 🏢 Company Profile & Corporate Identity',
    '- **Company Name**: Siegfried Outreach (Siegfried Outreach Inc. / Ventaza Technologies)',
    '- **Primary Platform**: https://siegfriedoutreach.com',
    '- **Documentation & Developer Portal**: https://docs.siegfriedoutreach.com',
    '- **Free 1-on-1 Strategy Demo**: https://docs.siegfriedoutreach.com/#book-demo',
    '- **Enterprise Support**: support@siegfriedoutreach.com',
    '- **Corporate Email**: contact@siegfriedoutreach.com',
    '- **Headquarters**: DLF CyberCity, Gurugram, India / Delaware, USA',
    '- **Operating Category**: Enterprise AI Social Media Automation, Omni-channel Broadcasts & Model Context Protocol (MCP) Infrastructure',
    '- **Official GitHub**: https://github.com/sonusainiemulator/Siegfried_Outreach_Platform',
    '- **Official Docs GitHub**: https://github.com/sonusainiemulator/siegfriedoutreach-docs',
    '',
    '## 🤝 Free 1-on-1 Strategy Call & Live Demo',
    '- **Offer**: 100% Free 15-Minute Custom Strategy Call with Siegfried Product Engineers.',
    '- **Booking URL**: https://docs.siegfriedoutreach.com/#book-demo',
    '- **Includes**: Live system walkthrough, tailored D2C/Agency ROI blueprint, custom MCP agent setup, and Indian festivals auto-scheduling demonstration.',
    '',
    '## 🤖 AI Agent Directives & Capabilities',
    '- **Model Context Protocol (MCP)**: Native servers (`siegfried-social` and `mcp-perfex-crm`) for Cursor IDE, Claude Desktop, Antigravity, and LangChain/CrewAI.',
    '- **Channel Automation**: Instagram, Facebook, LinkedIn, YouTube Shorts, X (Twitter), Pinterest, Reddit, WordPress, WhatsApp Cloud API, Telegram Bot, Transactional SMTP Email.',
    '- **Bilingual Architecture**: 100% full English & Hindi (हिंदी) documentation and prompt templates.',
    '- **Security**: FIDO2 WebAuthn Passkeys, Biometric Authentication, Multi-Tenant Role-Based Access Control (RBAC).',
    '',
    '## 📚 Documentation Index & Direct Links',
    '',
  ];

  for (const page of pages) {
    const title = page.data.title || page.url;
    const desc = page.data.description || 'Step-by-step user guide, implementation instructions, and real-world case study.';
    lines.push(`- [${title}](${baseUrl}${page.url}): ${desc}`);
  }

  lines.push('');
  lines.push('## ⚡ Key Feature Modules Summary');
  lines.push('- **Social Studio Composer**: Multi-account publisher, AI hashtag generator, smart scheduling, draft queues, auto-retry telemetry.');
  lines.push('- **Indian Festivals Autopilot**: 45+ Indian festivals auto-scheduler with cultural greetings and bilingual captions.');
  lines.push('- **Campaign Hub**: WhatsApp Cloud API marketing, Telegram bot broadcasts, contact segmentation, and transactional email deliverability.');
  lines.push('- **AI Studio**: AI Blog Writer, AI Codex Assistant, AI File Bot, AI Slide Maker, AI Content Rewriter, AI Live Agent, AI Transcription, and AI Detector.');
  lines.push('- **Security & Enterprise Access**: FIDO2 Passkeys, WebAuthn biometrics, multi-tenant RBAC permissions, and team workspace management.');
  lines.push('- **Developer MCP & REST API**: Native MCP servers for agentic AI tooling and workflow execution.');
  lines.push('');

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
