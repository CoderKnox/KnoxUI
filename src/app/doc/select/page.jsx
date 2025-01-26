"use client";

import React, { useState } from "react"
import { Select } from "knoxui-react"
import { motion } from "framer-motion"
import CodeBlock from "@/components/CodeBlock"

const SelectDoc = () => {
  const [selectedOption, setSelectedOption] = useState(null)
  const options = [
    { value: "option1", label: "Option 1" },
    { value: "option2", label: "Option 2" },
    { value: "option3", label: "Option 3" },
  ]

  const propTableConfig = {
    data: [
      {
        prop: "options",
        type: "Array<Option>",
        default: "[]",
        description: "Array of options to display in the dropdown",
      },
      {
        prop: "placeholder",
        type: "string",
        default: '"Select an option"',
        description: "Placeholder text when no option is selected",
      },
      {
        prop: "multiple",
        type: "boolean",
        default: "false",
        description: "Allow multiple selections",
      },
      {
        prop: "onChange",
        type: "function",
        default: "undefined",
        description: "Callback function when an option is selected",
      },
      {
        prop: "label",
        type: "string",
        default: "undefined",
        description: "Label text for the select component",
      },
      {
        prop: "size",
        type: '"xs" | "sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: "Sets the size of the select component",
      },
      {
        prop: "variant",
        type: '"primary" | "secondary" | "success" | "warning" | "error" | "ghost"',
        default: '"primary"',
        description: "Sets the color variant of the select component",
      },
      {
        prop: "required",
        type: "boolean",
        default: "false",
        description: "Whether the select is required",
      },
      {
        prop: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the select component",
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
        description: "Custom styles to be applied to the select component",
      },
      {
        prop: "renderOption",
        type: "function",
        default: "undefined",
        description: "Custom render function for option items",
      },
      {
        prop: "hideSearch",
        type: "boolean",
        default: "false",
        description: "Hide the search input in the dropdown",
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
          Select Component
        </h1>
        <p className="mb-4">
          The Select component allows users to choose one or multiple options from a dropdown list.
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
          {`import { Select } from 'knoxui-react';

const options = [
  { value: 'option1', label: 'Option 1' },
  { value: 'option2', label: 'Option 2' },
  { value: 'option3', label: 'Option 3' },
];

<Select
  options={options}
  onChange={(option) => setSelectedOption(option)}
  placeholder="Select an option"
/>`}
        </CodeBlock>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Basic Usage</h3>
            <Select options={options} onChange={(option) => setSelectedOption(option)} placeholder="Select an option" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Multiple Selection</h3>
            <Select
              options={options}
              onChange={(options) => console.log(options)}
              placeholder="Select multiple options"
              multiple
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Sizes</h3>
            <div className="space-y-2">
              <Select options={options} size="xs" placeholder="Extra Small" />
              <Select options={options} size="sm" placeholder="Small" />
              <Select options={options} size="md" placeholder="Medium" />
              <Select options={options} size="lg" placeholder="Large" />
              <Select options={options} size="xl" placeholder="Extra Large" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Variants</h3>
            <div className="space-y-2">
              <Select options={options} variant="primary" placeholder="Primary" />
              <Select options={options} variant="secondary" placeholder="Secondary" />
              <Select options={options} variant="success" placeholder="Success" />
              <Select options={options} variant="warning" placeholder="Warning" />
              <Select options={options} variant="error" placeholder="Error" />
              <Select options={options} variant="ghost" placeholder="Ghost" />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">With Label</h3>
            <Select options={options} label="Select an option" placeholder="Choose wisely" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Required Select</h3>
            <Select options={options} label="Required Field" required placeholder="You must choose" />
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default SelectDoc

