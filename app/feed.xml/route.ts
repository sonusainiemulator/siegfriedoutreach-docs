import { source } from '@/lib/source';
import { NextResponse } from 'next/server';

export const dynamic = 'force-static';

export async function GET() {
  const baseUrl = 'https://docs.siegfriedoutreach.com';
  const pages = source.getPages();
  const buildDate = new Date().toUTCString();

  let rss = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
<channel>
  <title>Siegfried Outreach Documentation &amp; Updates</title>
  <link>${baseUrl}</link>
  <description>Official guides, real-world case studies, AI social media automation, and MCP developer documentation for Siegfried Outreach Platform.</description>
  <language>en-US</language>
  <lastBuildDate>${buildDate}</lastBuildDate>
  <atom:link href="${baseUrl}/feed.xml" rel="self" type="application/rss+xml" />
`;

  for (const page of pages) {
    const pageUrl = `${baseUrl}${page.url}`;
    const title = page.data.title || 'Documentation Guide';
    const description = page.data.description || 'Step-by-step user guide and implementation tutorial.';
    
    rss += `  <item>
    <title><![CDATA[${title}]]></title>
    <link>${pageUrl}</link>
    <guid isPermaLink="true">${pageUrl}</guid>
    <description><![CDATA[${description}]]></description>
    <pubDate>${buildDate}</pubDate>
  </item>\n`;
  }

  rss += `</channel>
</rss>`;

  return new NextResponse(rss, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  });
}
