'use client'

import Link from 'next/link';
import { useTheme } from './ThemeProvider';
import { Moon, Sun } from 'lucide-react';

const Header = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="bg-base-200 py-1 px-4 sticky top-0 h-11">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          KnoxUI
        </Link>
        <nav className="flex items-center space-x-4">
          <ul className="flex space-x-4">
            <li>
              <Link href="/components" className="hover:underline">
                Components
              </Link>
            </li>
            <li>
              <Link href="/docs" className="hover:underline">
                Documentation
              </Link>
            </li>
          </ul>
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-primary-600 dark:hover:bg-primary-800 transition-colors duration-200"
          >
            {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;

