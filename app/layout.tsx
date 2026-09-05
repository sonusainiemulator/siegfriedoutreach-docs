import './global.css';
import { RootProvider } from 'fumadocs-ui/provider/next';
import type { ReactNode } from 'react';
import AiDocsAssistant from './components/AiDocsAssistant';

export const metadata = {
  title: {
    template: '%s | Siegfried Outreach User Guide',
    default: 'Siegfried Outreach Platform - Official User Guide & Docs (docs.siegfriedoutreach.com)',
  },
  description:
    'Complete bilingual (English & Hindi) step-by-step user manual for Siegfried Outreach Platform. Featuring AI Docs Assistant, Multi-Platform Social Studio, AI Indian Festival Auto-Pilot, WhatsApp & Telegram Broadcasts, and MCP Agent integration.',
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen antialiased selection:bg-indigo-500/20 selection:text-indigo-600 relative">
        <RootProvider search={{ options: { api: '/api/search' } }}>
          {children}
          <AiDocsAssistant />
        </RootProvider>
      </body>
    </html>
  );
}
