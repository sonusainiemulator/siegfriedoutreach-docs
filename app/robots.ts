import type { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  const baseUrl = 'https://docs.siegfriedoutreach.com';

  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: [
          'Googlebot',
          'Bingbot',
          'Slurp',
          'DuckDuckBot',
          'Baiduspider',
          'YandexBot',
        ],
        allow: '/',
      },
      {
        userAgent: [
          'GPTBot',
          'ChatGPT-User',
          'ClaudeBot',
          'anthropic-ai',
          'PerplexityBot',
          'Google-Extended',
          'Bytespider',
          'cohere-ai',
          'OAI-SearchBot',
          'FacebookBot',
          'Applebot',
        ],
        allow: '/',
      },
    ],
    sitemap: `${baseUrl}/sitemap.xml`,
    host: baseUrl,
  };
}
