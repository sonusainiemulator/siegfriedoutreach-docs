import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import type { Metadata, Viewport } from 'next';
import { Suspense } from 'react';
import AiDocsAssistant from './components/AiDocsAssistant';
import Analytics from './components/Analytics';

export const viewport: Viewport = {
  themeColor: '#6366f1',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
};

export const metadata: Metadata = {
  metadataBase: new URL('https://docs.siegfriedoutreach.com'),
  title: {
    template: '%s | Siegfried Docs',
    default: 'Siegfried Outreach - AI Social & Campaign Docs',
  },
  description:
    'Official user manual and developer API guide for Siegfried Outreach Platform. Featuring Multi-Platform Social Studio, WhatsApp Broadcasts, Passkey Security, and MCP Tools.',
  keywords: [
    'Siegfried Outreach',
    'Siegfried Outreach Docs',
    'Social Media Automation',
    'AI Social Media Manager',
    'WhatsApp Broadcast API',
    'Telegram Marketing Bot',
    'Passkey FIDO2 Authentication',
    'Model Context Protocol MCP',
    'Cursor MCP Tools',
    'Claude Desktop MCP',
    'AI Blog Writer',
    'D2C 100x Growth Playbook',
    'सिएगफ्रीड आउटरीच'
  ],
  authors: [
    { name: 'Siegfried Outreach Team', url: 'https://siegfriedoutreach.com' }
  ],
  creator: 'Siegfried Outreach Platform',
  publisher: 'Siegfried Outreach Inc.',
  category: 'Technology & Marketing Software',
  alternates: {
    canonical: 'https://docs.siegfriedoutreach.com',
    types: {
      'application/rss+xml': 'https://docs.siegfriedoutreach.com/feed.xml',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://docs.siegfriedoutreach.com',
    siteName: 'Siegfried Outreach Docs',
    title: 'Siegfried Outreach Platform - Official User Guide & Docs',
    description:
      'Master AI-driven multi-platform social media publishing, WhatsApp campaigns, Indian festival auto-pilot, and MCP agent workflows.',
    images: [
      {
        url: '/images/social-studio-composer.png',
        width: 1200,
        height: 630,
        alt: 'Siegfried Outreach Documentation',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@SiegfriedOutreach',
    creator: '@SiegfriedOutreach',
    title: 'Siegfried Outreach Platform - Official User Guide & Docs',
    description:
      'Step-by-step guides, real industry use cases, and AI MCP integration for Siegfried Outreach Platform.',
    images: ['/images/social-studio-composer.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  other: {
    'llms-txt': 'https://docs.siegfriedoutreach.com/llms.txt',
    'ai-agent-docs': 'https://docs.siegfriedoutreach.com/llms-full.txt',
    'indexnow-key': 'siegfriedoutreachindexnow2026',
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  const websiteJsonLd = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'WebSite',
        '@id': 'https://docs.siegfriedoutreach.com/#website',
        url: 'https://docs.siegfriedoutreach.com',
        name: 'Siegfried Outreach Documentation',
        description: 'Official User Guide and Developer API Reference for Siegfried Outreach Platform',
        publisher: {
          '@id': 'https://siegfriedoutreach.com/#organization',
        },
        potentialAction: {
          '@type': 'SearchAction',
          target: {
            '@type': 'EntryPoint',
            urlTemplate: 'https://docs.siegfriedoutreach.com/docs?q={search_term_string}',
          },
          'query-input': 'required name=search_term_string',
        },
        inLanguage: ['en-US'],
      },
      {
        '@type': 'Organization',
        '@id': 'https://siegfriedoutreach.com/#organization',
        name: 'Siegfried Outreach',
        url: 'https://siegfriedoutreach.com',
        logo: 'https://docs.siegfriedoutreach.com/images/social-studio-composer.png',
        sameAs: [
          'https://twitter.com/SiegfriedOutreach',
          'https://linkedin.com/company/siegfriedoutreach',
          'https://github.com/sonusainiemulator/siegfriedoutreach-docs',
        ],
      },
      {
        '@type': 'SoftwareApplication',
        name: 'Siegfried Outreach Platform',
        operatingSystem: 'All (Web Cloud, iOS, Android, Desktop MCP)',
        applicationCategory: 'BusinessApplication',
        offers: {
          '@type': 'Offer',
          price: '0',
          priceCurrency: 'USD',
        },
        aggregateRating: {
          '@type': 'AggregateRating',
          ratingValue: '4.9',
          ratingCount: '1250',
        },
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteJsonLd) }}
        />
        <link rel="alternate" type="text/plain" href="/llms.txt" title="LLM Documentation" />
        <link rel="alternate" type="application/rss+xml" href="/feed.xml" title="Siegfried Docs RSS Feed" />
      </head>
      <body className="flex flex-col min-h-screen antialiased selection:bg-indigo-500/20 selection:text-indigo-600 relative">
        <Suspense fallback={null}>
          <Analytics />
        </Suspense>
        <RootProvider search={{ options: { api: '/api/search' } }}>
          {children}
          <AiDocsAssistant />
        </RootProvider>
      </body>
    </html>
  );
}
