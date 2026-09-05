import { source } from '@/lib/source';
import { DocsBody, DocsDescription, DocsPage, DocsTitle } from 'fumadocs-ui/page';
import { notFound } from 'next/navigation';
import defaultMdxComponents from 'fumadocs-ui/mdx';
import { Tab, Tabs } from 'fumadocs-ui/components/tabs';
import { Callout } from 'fumadocs-ui/components/callout';
import { Step, Steps } from 'fumadocs-ui/components/steps';
import { Accordion, Accordions } from 'fumadocs-ui/components/accordion';
import type { Metadata } from 'next';

export default async function Page(props: {
  params: Promise<{ slug?: string[] }>;
}) {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;
  const canonicalUrl = `https://docs.siegfriedoutreach.com${page.url}`;

  // Breadcrumbs Schema for Google & AEO Answer Engines
  const breadcrumbItems = [
    {
      '@type': 'ListItem',
      position: 1,
      name: 'Docs',
      item: 'https://docs.siegfriedoutreach.com/docs',
    },
  ];

  if (params.slug && params.slug.length > 0) {
    params.slug.forEach((slugPart, index) => {
      breadcrumbItems.push({
        '@type': 'ListItem',
        position: index + 2,
        name: slugPart.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase()),
        item: `https://docs.siegfriedoutreach.com/docs/${params.slug?.slice(0, index + 1).join('/')}`,
      });
    });
  }

  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: page.data.title,
    description: page.data.description,
    url: canonicalUrl,
    inLanguage: ['en-US', 'hi-IN'],
    author: {
      '@type': 'Organization',
      name: 'Siegfried Outreach Platform',
      url: 'https://siegfriedoutreach.com',
    },
    publisher: {
      '@type': 'Organization',
      name: 'Siegfried Outreach',
      url: 'https://siegfriedoutreach.com',
    },
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': canonicalUrl,
    },
    datePublished: '2025-01-01T00:00:00Z',
    dateModified: new Date().toISOString(),
  };

  const breadcrumbJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: breadcrumbItems,
  };

  // Google AI Overview & FAQPage Structured Data Schema
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: `How do I use ${page.data.title} in Siegfried Outreach?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: page.data.description || `Siegfried Outreach provides automated tools and bilingual guides for ${page.data.title}. Navigate to the platform dashboard and configure your settings in minutes.`,
        },
      },
      {
        '@type': 'Question',
        name: `What platforms and features are supported for ${page.data.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Siegfried Outreach supports Instagram, Facebook, LinkedIn, YouTube Shorts, X (Twitter), Pinterest, Reddit, WordPress, WhatsApp Cloud API, and Telegram with built-in MCP agent tools and passkey authentication.',
        },
      },
      {
        '@type': 'Question',
        name: `Is there bilingual (Hindi & English) support available for ${page.data.title}?`,
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Yes, Siegfried Outreach offers 100% full bilingual documentation, prompt templates, and AI generation in both English and Hindi (हिंदी).',
        },
      },
    ],
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <DocsPage toc={page.data.toc} full={page.data.full}>
        <DocsTitle>{page.data.title}</DocsTitle>
        <DocsDescription>{page.data.description}</DocsDescription>
        <DocsBody>
          <MDX
            components={{
              ...defaultMdxComponents,
              Tab,
              Tabs,
              Callout,
              Step,
              Steps,
              Accordion,
              Accordions,
            }}
          />
        </DocsBody>
      </DocsPage>
    </>
  );
}

export async function generateStaticParams() {
  return source.generateParams();
}

export async function generateMetadata(props: {
  params: Promise<{ slug?: string[] }>;
}): Promise<Metadata> {
  const params = await props.params;
  const page = source.getPage(params.slug);
  if (!page) notFound();

  const title = page.data.title;
  const description =
    page.data.description ||
    `Official documentation and step-by-step user guide for ${title} on Siegfried Outreach Platform.`;
  const canonicalUrl = `https://docs.siegfriedoutreach.com${page.url}`;

  return {
    title,
    description,
    alternates: {
      canonical: canonicalUrl,
      languages: {
        'en-US': canonicalUrl,
        'hi-IN': canonicalUrl,
      },
    },
    openGraph: {
      title: `${title} | Siegfried Outreach Docs`,
      description,
      url: canonicalUrl,
      type: 'article',
      siteName: 'Siegfried Outreach Docs',
      images: [
        {
          url: '/images/social-studio-composer.png',
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | Siegfried Outreach Docs`,
      description,
      images: ['/images/social-studio-composer.png'],
    },
  };
}
