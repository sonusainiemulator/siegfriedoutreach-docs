import { source } from '@/lib/source';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const pages = source.getPages();
  const baseUrl = 'https://docs.siegfriedoutreach.com';

  const lines = [
    '# Siegfried Outreach Platform - Complete Knowledge Base for AI Agents',
    '',
    'Welcome to the full concatenated reference manual for Siegfried Outreach Platform. This document is optimized for LLMs, Answer Engines (Perplexity, ChatGPT, Claude), and autonomous AI agents.',
    '',
    '================================================================================',
    'TABLE OF CONTENTS',
    '================================================================================',
  ];

  pages.forEach((p, idx) => {
    lines.push(`${idx + 1}. ${p.data.title} (${baseUrl}${p.url})`);
  });

  lines.push('');
  lines.push('================================================================================');
  lines.push('');

  for (const page of pages) {
    lines.push('================================================================================');
    lines.push(`PAGE: ${page.data.title}`);
    lines.push(`URL: ${baseUrl}${page.url}`);
    lines.push(`DESCRIPTION: ${page.data.description || ''}`);
    lines.push('================================================================================');
    lines.push('');
    lines.push(`# ${page.data.title}`);
    lines.push('');
    if (page.data.description) {
      lines.push(`> ${page.data.description}`);
      lines.push('');
    }
  }

  return new NextResponse(lines.join('\n'), {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=86400, s-maxage=86400',
    },
  });
}
