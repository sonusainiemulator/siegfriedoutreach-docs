import type { MetadataRoute } from 'next';
import { source } from '@/lib/source';

export const revalidate = 86400;

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://docs.siegfriedoutreach.com';
  const pages = source.getPages();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/docs`,
      lastModified: new Date(),
      changeFrequency: 'daily',
      priority: 0.95,
    },
  ];

  const docRoutes: MetadataRoute.Sitemap = pages.map((page) => {
    let priority = 0.8;
    if (page.url.includes('getting-started') || page.url.includes('100x-sales-growth')) {
      priority = 0.95;
    } else if (page.url.includes('ai-social-manager') || page.url.includes('social-media')) {
      priority = 0.9;
    } else if (page.url.includes('developer-mcp')) {
      priority = 0.85;
    }

    return {
      url: `${baseUrl}${page.url}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority,
    };
  });

  return [...staticRoutes, ...docRoutes];
}
