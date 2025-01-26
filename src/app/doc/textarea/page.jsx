"use client";

import React from "react"
import { Textarea } from "knoxui-react"
import { motion } from "framer-motion"
import CodeBlock from "@/components/CodeBlock"

const TextareaDoc = () => {
  const propTableConfig = {
    data: [
      {
        prop: "label",
        type: "string",
        default: "undefined",
        description: "Label text for the textarea",
      },
      {
        prop: "size",
        type: '"xs" | "sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: "Sets the size of the textarea",
      },
      {
        prop: "variant",
        type: '"primary" | "secondary" | "success" | "warning" | "error" | "ghost"',
        default: '"primary"',
        description: "Sets the color variant of the textarea",
      },
      {
        prop: "required",
        type: "boolean",
        default: "false",
        description: "Whether the textarea is required",
      },
      {
        prop: "wrapperClass",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the wrapper element",
      },
      {
        prop: "labelClass",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the label element",
      },
      {
        prop: "labelTextClass",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the label text",
      },
      {
        prop: "sx",
        type: "React.CSSProperties",
        default: "{}",
        description: "Custom styles to be applied to the textarea wrapper",
      },
      {
        prop: "rows",
        type: "number",
        default: "3",
        description: "Number of visible text lines",
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
          Textarea Component
        </h1>
        <p className="mb-4">
          The Textarea component is a multi-line text input field that can be customized for various use cases.
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
          {`import { Textarea } from 'knoxui-react';

<Textarea
  label="Description"
  placeholder="Enter your description"
  size="md"
  variant="primary"
  rows={4}
/>`}
        </CodeBlock>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Basic Usage</h3>
            <Textarea label="Description" placeholder="Enter your description" rows={4} />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Sizes</h3>
            <div className="space-y-2">
              <Textarea size="xs" placeholder="Extra Small" />
              <Textarea size="sm" placeholder="Small" />
              <Textarea size="md" placeholder="Medium" />
              <Textarea size="lg" placeholder="Large" />
              <Textarea size="xl" placeholder="Extra Large" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Variants</h3>
            <div className="space-y-2">
              <Textarea variant="primary" placeholder="Primary" />
              <Textarea variant="secondary" placeholder="Secondary" />
              <Textarea variant="success" placeholder="Success" />
              <Textarea variant="warning" placeholder="Warning" />
              <Textarea variant="error" placeholder="Error" />
              <Textarea variant="ghost" placeholder="Ghost" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Different Row Counts</h3>
            <div className="space-y-2">
              <Textarea rows={2} placeholder="2 rows" />
              <Textarea rows={4} placeholder="4 rows" />
              <Textarea rows={6} placeholder="6 rows" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Required Textarea</h3>
            <Textarea label="Required Field" required />
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default TextareaDoc

