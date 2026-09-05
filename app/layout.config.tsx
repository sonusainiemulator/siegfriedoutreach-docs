import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2.5 font-semibold tracking-tight text-zinc-900 dark:text-zinc-100">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-indigo-600 text-white font-bold shadow-xs">
          ⚡
        </span>
        <span className="font-bold text-base tracking-tight">
          Siegfried <span className="text-indigo-600 dark:text-indigo-400 font-medium">Docs</span>
        </span>
        <span className="hidden sm:inline-flex text-[10px] uppercase font-semibold px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700/60">
          v2.4
        </span>
      </div>
    ),
    url: '/',
  },
  links: [
    {
      text: 'Overview',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'API & MCP',
      url: '/docs/developer-mcp/mcp-overview',
    },
    {
      text: '100x Growth Blueprint',
      url: '/docs/getting-started/100x-sales-growth-blueprint',
    },
    {
      text: 'Book Live Demo',
      url: '/#book-demo',
    },
    {
      text: 'Console App ➔',
      url: 'https://siegfriedoutreach.com',
      external: true,
    },
  ],
};
