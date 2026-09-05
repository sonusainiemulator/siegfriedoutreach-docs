'use client';

import React, { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon, Monitor } from 'lucide-react';

export default function ThemeToggle() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="w-8 h-8 rounded-lg bg-zinc-100 dark:bg-zinc-800 animate-pulse" />
    );
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <div className="flex items-center gap-1 bg-zinc-100 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 p-0.5 rounded-lg">
      <button
        type="button"
        onClick={() => setTheme('light')}
        title="Light Mode"
        aria-label="Light Mode"
        className={`p-1.5 rounded-md transition-all cursor-pointer ${
          theme === 'light'
            ? 'bg-white text-amber-500 shadow-2xs font-semibold'
            : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
        }`}
      >
        <Sun className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => setTheme('dark')}
        title="Dark Mode"
        aria-label="Dark Mode"
        className={`p-1.5 rounded-md transition-all cursor-pointer ${
          theme === 'dark'
            ? 'bg-zinc-800 text-indigo-400 shadow-2xs font-semibold'
            : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
        }`}
      >
        <Moon className="w-3.5 h-3.5" />
      </button>

      <button
        type="button"
        onClick={() => setTheme('system')}
        title="System Theme"
        aria-label="System Theme"
        className={`p-1.5 rounded-md transition-all cursor-pointer hidden sm:block ${
          theme === 'system'
            ? 'bg-white dark:bg-zinc-800 text-indigo-600 dark:text-indigo-400 shadow-2xs font-semibold'
            : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
        }`}
      >
        <Monitor className="w-3.5 h-3.5" />
      </button>
    </div>
  );
}
