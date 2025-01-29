"use client"

import React from "react"
import { Button, useTheme } from "knoxui-react"
import { AnimatedCard } from "@/components/AnimatedCard"
import CodeBlock from "@/components/CodeBlock"
import { motion } from "framer-motion"

const ThemeProviderContent = () => {
  const { theme, setTheme } = useTheme()

  return (
    <motion.div
      className="max-w-5xl mx-auto px-6 py-12"
      // variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h1 className="text-5xl font-bold mb-12 bg-clip-text text-transparent bg-gradient-to-r from-primary to-error">
        Theme Provider
      </motion.h1>

      <AnimatedCard className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          The ThemeProvider component is a crucial part of KnoxUI React that enables theming and dark mode functionality
          in your application. It wraps your entire app and provides theme context to all KnoxUI components.
        </p>
      </AnimatedCard>

      <AnimatedCard className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <p className="mb-4">To use ThemeProvider, wrap your application's root component with it:</p>
        <CodeBlock>
          {`import { ThemeProvider } from 'knoxui-react';

export default function App({ children }) {
  return (
    <ThemeProvider 
      attribute="class" 
      defaultTheme="system" 
      storageKey="theme"
    >
      {children}
    </ThemeProvider>
  );
}`}
        </CodeBlock>
      </AnimatedCard>

      <AnimatedCard className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <ul className="list-disc list-inside mb-4">
          <li>
            <strong>attribute</strong> (string): The attribute to apply to the html element. Default is "class".
          </li>
          <li>
            <strong>defaultTheme</strong> (string): The default theme to use. Can be "light", "dark", or "system".
            Default is "system".
          </li>
          <li>
            <strong>storageKey</strong> (string): The key to use for storing the theme preference in localStorage.
            Default is "theme".
          </li>
        </ul>
      </AnimatedCard>

      <AnimatedCard className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">useTheme Hook</h2>
        <p className="mb-4">
          KnoxUI provides a useTheme hook that allows you to access and modify the current theme from any component:
        </p>
        <CodeBlock>
          {`import { useTheme } from 'knoxui-react';

function MyComponent() {
  const { theme, setTheme } = useTheme();

  return (
    <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}>
      Toggle theme
    </button>
  );
}`}
        </CodeBlock>
      </AnimatedCard>

      <AnimatedCard className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Live Example</h2>
        <p className="mb-4">
          Here's a live example of using the useTheme hook to toggle between light and dark themes:
        </p>
        <div className="flex flex-col items-center space-y-4">
          <p>Current theme: {theme}</p>
          <Button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>Toggle Theme</Button>
        </div>
      </AnimatedCard>

      <AnimatedCard className="mb-8">
        <h2 className="text-2xl font-semibold mb-4">Theme Persistence</h2>
        <p className="mb-4">
          The ThemeProvider now saves the selected theme in localStorage. This means that the user's theme preference
          will be remembered across page reloads and browser sessions. The theme is stored using the key specified in
          the <code>storageKey</code> prop (default is "theme").
        </p>
        <p className="mb-4">
          On initial load, the ThemeProvider will check localStorage for a saved theme. If found, it will use that
          theme. Otherwise, it will use the <code>defaultTheme</code> specified in the props.
        </p>
        <p className="mb-4">
          The "system" theme option will automatically switch between light and dark themes based on the user's system
          preferences.
        </p>
      </AnimatedCard>

      <AnimatedCard>
        <h2 className="text-2xl font-semibold mb-4">Best Practices</h2>
        <ul className="list-disc list-inside">
          <li>
            Always wrap your entire application with ThemeProvider to ensure consistent theming across all components.
          </li>
          <li>
            Use the useTheme hook to access the current theme and theme-switching functionality in your components.
          </li>
          <li>
            Consider user preferences by respecting the system's color scheme or allowing users to manually select their
            preferred theme.
          </li>
          <li>
            Ensure all your custom components and styles are compatible with both light and dark themes for a seamless
            user experience.
          </li>
        </ul>
      </AnimatedCard>
    </motion.div>
  )
}

const ThemeProviderPage = () => <ThemeProviderContent />

export default ThemeProviderPage

