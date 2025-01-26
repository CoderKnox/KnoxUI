"use client"

import React from "react"
import { Button } from "knoxui-react"
import { motion } from "framer-motion"
import CodeBlock from "@/components/CodeBlock"

const ButtonDoc = () => {
  const propTableConfig = {
    data: [
      {
        prop: "size",
        type: '"xs" | "sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: "Sets the size of the button",
      },
      {
        prop: "variant",
        type: '"primary" | "secondary" | "success" | "warning" | "error" | "ghost"',
        default: '"primary"',
        description: "Sets the color variant of the button",
      },
      {
        prop: "clickEffect",
        type: '"ripple" | "push" | "none"',
        default: '"ripple"',
        description: "Sets the click effect of the button",
      },
      {
        prop: "isLoading",
        type: "boolean",
        default: "false",
        description: "Shows a loading spinner when true",
      },
    ],
    columns: [
      { key: "prop", header: "Prop" },
      { key: "type", header: "Type" },
      { key: "default", header: "Default" },
      { key: "description", header: "Description" },
    ],
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  return (
    <motion.div className="max-w-6xl mx-auto px-6 py-6 *:border *:p-5 *:bg-base-300 *:rounded-lg" variants={containerVariants} initial="hidden" animate="visible">
      <motion.section className="mb-12 border-none !bg-transparent" variants={itemVariants}>
        <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-error">
          Button Component
        </h1>
        <p className="mb-4">
          The Button component is a versatile and customizable button that can be used throughout your application.
        </p>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Props</h2>
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-500/40">
              <th className="border p-2 text-left">Prop</th>
              <th className="border p-2 text-left">Type</th>
              <th className="border p-2 text-left">Default</th>
              <th className="border p-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            {propTableConfig.data.map((row, index) => (
              <tr key={index} className={index % 2 === 0 ? "bg-gray-500/5" : "bg-gray-500/10"}>
                <td className="border p-2">{row.prop}</td>
                <td className="border p-2">{row.type}</td>
                <td className="border p-2">{row.default}</td>
                <td className="border p-2">{row.description}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Usage</h2>
        <CodeBlock className="bg-gray-100 p-2 rounded mb-6">
          {`import { Button } from 'knoxui-react';

<Button variant="primary" size="md">
  Click me!
</Button>`}
        </CodeBlock>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Sizes</h3>
            <div className="flex space-x-2">
              <Button size="xs">Extra Small</Button>
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
              <Button size="xl">Extra Large</Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Variants</h3>
            <div className="flex space-x-2">
              <Button variant="primary">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="warning">Warning</Button>
              <Button variant="error">Error</Button>
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Click Effects</h3>
            <div className="flex space-x-2">
              <Button clickEffect="ripple">Ripple</Button>
              <Button clickEffect="push">Push</Button>
              <Button clickEffect="none">None</Button>
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Loading State</h3>
            <Button isLoading>Loading</Button>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Disabled</h3>
            <Button disabled={true}>Disabled</Button>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default ButtonDoc

