import React from "react";
import { useTheme } from 'knoxui-react';
import { Sun, Moon, Github } from 'lucide-react';
import Link from "next/link";
import RotatingLogo from './RotatingLogo';


export default function Header() {
  const { theme, setTheme } = useTheme();

  return (
    <header className="z-50 top-10 w-full px-20 fixed">
      <div className="border rounded-full px-8 py-3 backdrop-blur-lg flex items-center justify-between dark:bg-white/10 dark:!text-white dark:border-white/25 bg-black/5 border-black/15  max-w-7xl w-auto mx-auto">
        <span className="flex space-x-2 items-center">
          <RotatingLogo size={28} />
        </span>

        <nav className="flex items-center space-x-6 text-sm font-medium">
          <a className="hover:underline transition-all" href="/doc/installation">Installation</a>
          <a className="hover:underline transition-all" href="/components">Components</a>
          <a className="hover:underline transition-all" href="/examples">Layouts</a>
        </nav>

        <div className="flex items-center space-x-6">
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
            {theme === 'dark' ? <Sun size={24} /> : <Moon size={24} />}
          </button>
          <a
              href="https://github.com/CoderKnox/knoxui-react"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="h-5 w-5" />
          </a>
          <Link href="/installation" className="hover:underline duration-200">Get Started</Link>
        </div>
      </div>
    </header>
  );
}

