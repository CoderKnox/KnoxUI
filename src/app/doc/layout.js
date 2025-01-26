"use client";

import React from 'react';
import DocHeader from '@/components/DocHeader';
import SideMenu from '@/components/SideMenu';
import { useTheme } from 'knoxui-react';
import { motion } from 'framer-motion';

const DocLayout = ({ children }) => {
  const { theme } = useTheme();

  return (
    <div className={`flex flex-col min-h-screen ${theme === 'dark' ? 'dark' : ''}`}>
      <div className="flex flex-1">
        <SideMenu />
        <motion.main 
          className="flex-1 ml-64 bg-gradient-to-br from-base-100 to-base-200 dark:from-base-200 dark:to-base-300 text-base-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <DocHeader className="sticky top-0 z-50" />
          <div className="max-w-7xl mx-auto pb-3 sm:px-3 lg:px-4 bg-base-300">
            <div className='bg-base-200 rounded-lg h-[calc(100vh-86px)] overflow-auto border-2 border-base-100 relative z-30'>
              {children}
            </div>
          </div>
        </motion.main>
      </div>
    </div>
  );
};

export default DocLayout;

