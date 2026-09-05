import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export const baseOptions: BaseLayoutProps = {
  nav: {
    title: (
      <div className="flex items-center gap-2 font-bold tracking-tight">
        <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-tr from-blue-600 via-indigo-600 to-purple-600 text-white shadow-md shadow-indigo-500/20">
          ⚡
        </span>
        <span className="bg-gradient-to-r from-blue-600 via-indigo-500 to-purple-600 bg-clip-text text-transparent font-extrabold text-lg">
          Siegfried
        </span>
        <span className="text-xs px-2 py-0.5 rounded-full bg-indigo-500/10 text-indigo-500 font-semibold border border-indigo-500/20">
          Docs & Guide
        </span>
      </div>
    ),
    url: '/',
  },
  links: [
    {
      text: 'User Guide',
      url: '/docs',
      active: 'nested-url',
    },
    {
      text: 'Platform App',
      url: 'https://siegfriedoutreach.com',
      external: true,
    },
    {
      text: 'MCP Integration',
      url: '/docs/developer-mcp/mcp-overview',
    },
  ],
};
