"use client";

import React, { useState } from 'react';
import Link from 'next/link';
import { useTheme } from 'knoxui-react';
import { Menu, X, Sun, Moon, Github } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import RotatingLogo from './RotatingLogo';

const DocHeader = ({ className='' }) => {
  const { theme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => {setIsMenuOpen(!isMenuOpen);};

  return (
    <header className={`bg-base-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1 font-bold text-2xl">
            <Link href="/" className="flex items-center text-transparent bg-clip-text bg-gradient-to-r from-primary to-error">
              <span className="sr-only">KnoxUI</span>
              <RotatingLogo className='text-primary' />
              <span className="ml-2">KnoxUI</span>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button type="button" onClick={toggleMenu}
              className="bg-base-300 dark:bg-base-200 rounded-md p-2 inline-flex items-center justify-center text-base-content hover:text-primary hover:bg-base-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
            >
              <span className="sr-only">Open menu</span>
              <Menu className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-base font-medium text-base-content hover:text-primary">
              Home
            </Link>
            <Link href="/doc/installation" className="text-base font-medium text-base-content hover:text-primary">
              Installation
            </Link>
            <Link href="/doc/layouts" className="text-base font-medium text-base-content hover:text-primary">
              Layouts
            </Link>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-base-content bg-base-300 hover:bg-base-100"
            >
              {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </button>
            <a target="_blank" rel="noopener noreferrer"
              href="https://github.com/CoderKnox/knoxui-react"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-base-content bg-base-300 hover:bg-base-100"
            >
              <Github className="h-5 w-5" />
              <span className="ml-2">GitHub</span>
            </a>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-base-100 dark:bg-base-300 divide-y-2 divide-base-200">
              <div className="pt-5 pb-6 px-5">
                <div className="flex items-center justify-between">
                  <div>
                    <RotatingComponentIcon size={32} className="text-primary" />
                  </div>
                  <div className="-mr-2">
                    <button
                      type="button"
                      className="bg-base-200 dark:bg-base-100 rounded-md p-2 inline-flex items-center justify-center text-base-content hover:text-primary hover:bg-base-300 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary"
                      onClick={toggleMenu}
                    >
                      <span className="sr-only">Close menu</span>
                      <X className="h-6 w-6" aria-hidden="true" />
                    </button>
                  </div>
                </div>
                <div className="mt-6">
                  <nav className="grid gap-y-8">
                    <Link href="/doc/installation" className="text-base font-medium text-base-content hover:text-primary">
                      Installation
                    </Link>
                    <Link href="/doc/components" className="text-base font-medium text-base-content hover:text-primary">
                      Components
                    </Link>
                    <Link href="/doc/api" className="text-base font-medium text-base-content hover:text-primary">
                      API
                    </Link>
                  </nav>
                </div>
              </div>
              <div className="py-6 px-5 space-y-6">
                <div className="flex items-center justify-between">
                  <button
                    onClick={toggleTheme}
                    className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-base-content bg-base-300 hover:bg-base-200"
                  >
                    {theme === 'dark' ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
                    <span className="ml-2">{theme === 'dark' ? 'Light Mode' : 'Dark Mode'}</span>
                  </button>
                  <a
                    href="https://github.com/CoderKnox/knoxui-react"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-base-content bg-base-300 hover:bg-base-200"
                  >
                    <Github className="h-5 w-5" />
                    <span className="ml-2">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default DocHeader;

