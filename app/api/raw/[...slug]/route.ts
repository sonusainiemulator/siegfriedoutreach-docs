import { source } from '@/lib/source';
import { NextResponse } from 'next/server';

export async function GET(
  request: Request,
  props: { params: Promise<{ slug: string[] }> }
) {
  const params = await props.params;
  const page = source.getPage(params.slug);

  if (!page) {
    return NextResponse.json({ error: 'Documentation page not found' }, { status: 404 });
  }

  return NextResponse.json({
    title: page.data.title,
    description: page.data.description,
    url: `https://docs.siegfriedoutreach.com${page.url}`,
    toc: page.data.toc,
  });
}
