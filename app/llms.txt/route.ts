import { source } from '@/lib/source';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const pages = source.getPages();
  const baseUrl = 'https://docs.siegfriedoutreach.com';

  const lines = [
    '# Siegfried Outreach Platform Documentation',
    '',
    '> Official bilingual (English & Hindi) documentation for Siegfried Outreach Platform - AI Social Studio, Campaign Hub, AI Studio, Passkey Biometrics, Indian Festival Autopilot, and Model Context Protocol (MCP) AI Tools.',
    '',
    '## Overview',
    '- Platform Main Site: https://siegfriedoutreach.com',
    '- Documentation Portal: https://docs.siegfriedoutreach.com',
    '- API & MCP Base: https://api.siegfriedoutreach.com',
    '- Full Knowledge File: ' + baseUrl + '/llms-full.txt',
    '- Quick Search API: ' + baseUrl + '/api/search?query={searchTerm}',
    '',
    '## AI Agent Directives & Capabilities',
    '- Model Context Protocol (MCP): Connect Claude Desktop, Cursor IDE, Windsurf, or custom LangChain/CrewAI agents directly to Siegfried Outreach using the official MCP studio tools.',
    '- Bilingual Support: All guides, prompt templates, and case studies are available in English and Hindi (हिंदी).',
    '- Target Industries: D2C E-Commerce, Digital Marketing Agencies, Healthcare & Wellness, Real Estate, EdTech, and B2B SaaS.',
    '- Channel Automation: Instagram, Facebook, LinkedIn, YouTube Shorts, X (Twitter), Pinterest, Reddit, WordPress, WhatsApp Cloud API, Telegram Bot, Transactional SMTP.',
    '',
    '## Documentation Index & Direct Links',
    '',
  ];

  for (const page of pages) {
    const title = page.data.title || page.url;
    const desc = page.data.description || 'Step-by-step user guide, implementation instructions, and real-world case study.';
    lines.push(`- [${title}](${baseUrl}${page.url}): ${desc}`);
  }

  lines.push('');
  lines.push('## Key Feature Modules Quick Summary');
  lines.push('- Social Studio Composer: Unified multi-account publisher with rich caption generation, custom platform overrides, carousel publishing, and auto-retry telemetry.');
  lines.push('- AI Indian Festivals Autopilot: 45+ Indian festivals automated scheduler with pre-built cultural creative prompts and festive discount campaigns.');
  lines.push('- Campaign Hub: WhatsApp Cloud API marketing, Telegram bot broadcasts, contact segmentation, and transactional email deliverability.');
  lines.push('- AI Studio Tools: AI Blog Writer, AI Codex Assistant, AI File Bot, AI Slide Maker, AI Content Rewriter, AI Live Agent, AI Transcription, and AI Detector.');
  lines.push('- Security & Enterprise Access: FIDO2 Passkeys, WebAuthn biometrics, multi-tenant RBAC permissions, and team workspace management.');
  lines.push('- Developer MCP & REST API: Native MCP servers (siegfried-social & mcp-perfex-crm) for agentic AI tooling and workflow execution.');
  lines.push('');

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
