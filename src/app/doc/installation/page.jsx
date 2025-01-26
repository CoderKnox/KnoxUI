"use client";

import React from 'react';
import { Button, Input, useTheme } from 'knoxui-react';
import { motion } from 'framer-motion';
import CodeBlock from '@/components/CodeBlock';

const InstallationGuide = () => {
  const { theme, setTheme } = useTheme();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1
    }
  };

  return (
    <motion.div 
      className="max-w-6xl mx-auto px-6 py-6 *:border *:p-5 *:bg-base-300 *:rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 
        className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-error border-none"
        variants={itemVariants}
      >
        Installation Guide
      </motion.h1>
      
      <motion.section className="mb-16" variants={itemVariants}>
        <h2 className="text-3xl font-semibold mb-6 text-base-200-content">Installation</h2>
        <p className="mb-4 text-base-content text-lg">To install KnoxUI React, run one of the following commands in your project directory:</p>
        <CodeBlock>npm install knoxui-react</CodeBlock>
        <p className="mt-4 text-base-content text-lg">or if you're using Yarn:</p>
        <CodeBlock>yarn add knoxui-react</CodeBlock>
      </motion.section>

      <motion.section className="mb-16" variants={itemVariants}>
        <h2 className="text-3xl font-semibold mb-6 text-base-200-content">Setup</h2>
        <p className="mb-4 text-base-content text-lg">After installation, wrap your application with the ThemeProvider component:</p>
        <CodeBlock>{`
import { ThemeProvider } from 'knoxui-react'

export default function App({ children }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      {children}
    </ThemeProvider>
  )
}
        `}</CodeBlock>
      </motion.section>

      <motion.section className="mb-16" variants={itemVariants}>
        <h2 className="text-3xl font-semibold mb-6 text-base-200-content">Usage</h2>
        <p className="mb-4 text-base-content text-lg">Here's a simple example of how to use KnoxUI React components:</p>
        <CodeBlock>{`
import React from 'react';
import { Button, Input, useTheme } from 'knoxui-react';

const MyComponent = () => {
  const { theme, setTheme } = useTheme();

  return (
    <div>
      <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
        Toggle Theme
      </Button>
      <Input placeholder="Enter your name" />
    </div>
  );
};
        `}</CodeBlock>
      </motion.section>

      <motion.section className="mb-16" variants={itemVariants}>
        <h2 className="text-3xl font-semibold mb-6 text-base-200-content">Live Example</h2>
        <p className="mb-4 text-base-content text-lg">Here's a live example of KnoxUI React components in action:</p>
        <div className="flex flex-col space-y-6 bg-base-200 dark:bg-base-300 p-8 rounded-lg shadow-lg">
          <Button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="w-fit transition-all duration-300 hover:scale-105">
            Toggle Theme
          </Button>
          <Input 
            placeholder="Enter your name" 
            className="max-w-md transition-all duration-300 focus:scale-105"
          />
        </div>
      </motion.section>

      <motion.section variants={itemVariants}>
        <h2 className="text-3xl font-semibold mb-6 text-base-200-content">Additional Resources</h2>
        <ul className="space-y-4 text-base-content text-lg">
          <li>
            <a 
              target='_blank' 
              href="http://npmjs.com/package/knoxui-react?activeTab=readme" 
              className="text-primary hover:underline hover:text-secondary transition-colors duration-300"
            >
              NPM Documentation
            </a>
          </li>
          <li>
            <a 
              href="#" 
              className="text-primary hover:underline hover:text-secondary transition-colors duration-300"
            >
              Component Gallery
            </a>
          </li>
          <li>
            <a 
              target="_blank" 
              href="https://github.com/CoderKnox/knoxui-react#readme" 
              className="text-primary hover:underline hover:text-secondary transition-colors duration-300"
            >
              GitHub Repository
            </a>
          </li>
        </ul>
      </motion.section>
    </motion.div>
  );
};

export default InstallationGuide;

