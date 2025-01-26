"use client"

import React, { useState } from "react"
import { Checkbox } from "knoxui-react"
import { motion } from "framer-motion"
import CodeBlock from "@/components/CodeBlock"

const CheckboxDoc = () => {
  const [isChecked, setIsChecked] = useState(false)

  // Add these state variables after the existing isChecked state
  const [sizeStates, setSizeStates] = useState({
    xs: false,
    sm: false,
    md: false,
    lg: false,
    xl: false,
  })

  const [variantStates, setVariantStates] = useState({
    primary: false,
    secondary: false,
    success: false,
    warning: false,
    error: false,
    ghost: false,
  })

  const propTableConfig = {
    data: [
      {
        prop: "checked",
        type: "boolean",
        default: "false",
        description: "Whether the checkbox is checked",
      },
      {
        prop: "size",
        type: '"xs" | "sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: "Sets the size of the checkbox",
      },
      {
        prop: "variant",
        type: '"primary" | "secondary" | "success" | "warning" | "error" | "ghost"',
        default: '"primary"',
        description: "Sets the color variant of the checkbox",
      },
      {
        prop: "label",
        type: "string",
        default: "undefined",
        description: "Label text for the checkbox",
      },
      {
        prop: "wrapperClass",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the wrapper element",
      },
      {
        prop: "sx",
        type: "React.CSSProperties",
        default: "{}",
        description: "Custom styles to be applied to the checkbox",
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
    <motion.div
      className="max-w-6xl mx-auto px-6 py-6 *:border *:p-5 *:bg-base-300 *:rounded-lg"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.section className="mb-6 border-none !bg-transparent" variants={itemVariants}>
        <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-error">
          Checkbox Component
        </h1>
        <p className="mb-4">
          The Checkbox component allows users to select one or more options from a list of choices.
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
          {`import { Checkbox } from 'knoxui-react';

const [isChecked, setIsChecked] = useState(false);

<Checkbox
  checked={isChecked}
  onChange={(e) => setIsChecked(e.target.checked)}
  label="Check me"
/>`}
        </CodeBlock>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Basic Usage</h3>
            <Checkbox checked={isChecked} onChange={(e) => setIsChecked(e.target.checked)} label="Check me" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Sizes</h3>
            <div className="flex items-center space-x-2">
              <Checkbox
                size="xs"
                label="XS"
                checked={sizeStates.xs}
                onChange={(e) => setSizeStates((prev) => ({ ...prev, xs: e.target.checked }))}
              />
              <Checkbox
                size="sm"
                label="SM"
                checked={sizeStates.sm}
                onChange={(e) => setSizeStates((prev) => ({ ...prev, sm: e.target.checked }))}
              />
              <Checkbox
                size="md"
                label="MD"
                checked={sizeStates.md}
                onChange={(e) => setSizeStates((prev) => ({ ...prev, md: e.target.checked }))}
              />
              <Checkbox
                size="lg"
                label="LG"
                checked={sizeStates.lg}
                onChange={(e) => setSizeStates((prev) => ({ ...prev, lg: e.target.checked }))}
              />
              <Checkbox
                size="xl"
                label="XL"
                checked={sizeStates.xl}
                onChange={(e) => setSizeStates((prev) => ({ ...prev, xl: e.target.checked }))}
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Variants</h3>
            <div className="space-y-2">
              <Checkbox
                variant="primary"
                label="Primary"
                checked={variantStates.primary}
                onChange={(e) => setVariantStates((prev) => ({ ...prev, primary: e.target.checked }))}
              />
              <Checkbox
                variant="secondary"
                label="Secondary"
                checked={variantStates.secondary}
                onChange={(e) => setVariantStates((prev) => ({ ...prev, secondary: e.target.checked }))}
              />
              <Checkbox
                variant="success"
                label="Success"
                checked={variantStates.success}
                onChange={(e) => setVariantStates((prev) => ({ ...prev, success: e.target.checked }))}
              />
              <Checkbox
                variant="warning"
                label="Warning"
                checked={variantStates.warning}
                onChange={(e) => setVariantStates((prev) => ({ ...prev, warning: e.target.checked }))}
              />
              <Checkbox
                variant="error"
                label="Error"
                checked={variantStates.error}
                onChange={(e) => setVariantStates((prev) => ({ ...prev, error: e.target.checked }))}
              />
              <Checkbox
                variant="ghost"
                label="Ghost"
                checked={variantStates.ghost}
                onChange={(e) => setVariantStates((prev) => ({ ...prev, ghost: e.target.checked }))}
              />
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default CheckboxDoc

