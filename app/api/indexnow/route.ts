import { source } from '@/lib/source';
import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const baseUrl = 'https://docs.siegfriedoutreach.com';
    const pages = source.getPages();
    const urlList = pages.map((p) => `${baseUrl}${p.url}`);
    urlList.unshift(baseUrl);
    urlList.unshift(`${baseUrl}/docs`);

    const payload = {
      host: 'docs.siegfriedoutreach.com',
      key: process.env.INDEXNOW_KEY || 'siegfriedoutreachindexnow2026',
      keyLocation: 'https://docs.siegfriedoutreach.com/indexnow.txt',
      urlList: urlList.slice(0, 100),
    };

    // Forward to Bing / Yandex / IndexNow API for instant crawl
    const response = await fetch('https://api.indexnow.org/indexnow', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json; charset=utf-8' },
      body: JSON.stringify(payload),
    });

    return NextResponse.json({
      success: true,
      message: 'URLs submitted to IndexNow for instant search indexing',
      count: payload.urlList.length,
      status: response.status,
    });
  } catch (error: any) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

export async function GET() {
  return NextResponse.json({
    status: 'IndexNow instant crawler submission ready',
    target: 'https://api.indexnow.org/indexnow',
  });
}
