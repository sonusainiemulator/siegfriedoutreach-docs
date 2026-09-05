import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';

export const metadata = {
  title: {
    template: '%s | Siegfried Outreach User Guide',
    default: 'Siegfried Outreach Platform - Official User Guide & Docs',
  },
  description:
    'Complete step-by-step user guide for Siegfried Outreach Platform. Learn how to manage social media, auto-post, generate YouTube Shorts & Instagram Reels, analyze engagement, and integrate MCP AI tools.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen antialiased selection:bg-indigo-500/20 selection:text-indigo-600">
        <RootProvider search={{ options: { api: '/api/search' } }}>
          {children}
        </RootProvider>
      </body>
    </html>
  );
}
