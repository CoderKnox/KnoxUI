"use client"

import React, { useState } from "react"
import { Radio } from "knoxui-react"
import { motion } from "framer-motion"
import CodeBlock from "@/components/CodeBlock"

const RadioDoc = () => {
  const [selectedValue, setSelectedValue] = useState("")
  const [sizeValue, setSizeValue] = useState("")
  const [colorValue, setColorValue] = useState("")
  const [buttonValue, setButtonValue] = useState("")
  const [customValue, setCustomValue] = useState(false)
  const [variantValue, setVariantValue] = useState("")

  const propTableConfig = {
    data: [
      {
        prop: "checked",
        type: "boolean",
        default: "false",
        description: "Whether the radio button is checked",
      },
      {
        prop: "size",
        type: '"xs" | "sm" | "md" | "lg" | "xl"',
        default: '"md"',
        description: "Sets the size of the radio button",
      },
      {
        prop: "variant",
        type: '"primary" | "secondary" | "success" | "warning" | "error" | "ghost"',
        default: '"primary"',
        description: "Sets the color variant of the radio button",
      },
      {
        prop: "label",
        type: "string",
        default: "undefined",
        description: "Label text for the radio button",
      },
      {
        prop: "isButton",
        type: "boolean",
        default: "false",
        description: "Renders the radio as a button",
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
        description: "Custom styles to be applied to the radio button",
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
          Radio Component
        </h1>
        <p className="mb-4">
          The Radio component allows users to select a single option from a list of choices. It provides various
          customization options for size, color, and appearance.
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
          {`import { Radio } from 'knoxui-react';

const [selectedValue, setSelectedValue] = useState('');

<Radio
  checked={selectedValue === 'option1'}
  onChange={() => setSelectedValue('option1')}
  label="Option 1"
/>`}
        </CodeBlock>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Basic Usage</h3>
            <div className="space-y-2">
              <Radio
                checked={selectedValue === "option1"}
                onChange={() => setSelectedValue("option1")}
                label="Option 1"
              />
              <Radio
                checked={selectedValue === "option2"}
                onChange={() => setSelectedValue("option2")}
                label="Option 2"
              />
              <Radio
                checked={selectedValue === "option3"}
                onChange={() => setSelectedValue("option3")}
                label="Option 3"
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Sizes</h3>
            <div className="flex items-center space-x-2">
              <Radio size="xs" label="XS" checked={sizeValue === "xs"} onChange={() => setSizeValue("xs")} />
              <Radio size="sm" label="SM" checked={sizeValue === "sm"} onChange={() => setSizeValue("sm")} />
              <Radio size="md" label="MD" checked={sizeValue === "md"} onChange={() => setSizeValue("md")} />
              <Radio size="lg" label="LG" checked={sizeValue === "lg"} onChange={() => setSizeValue("lg")} />
              <Radio size="xl" label="XL" checked={sizeValue === "xl"} onChange={() => setSizeValue("xl")} />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Variants</h3>
            <div className="space-y-2">
              <Radio
                variant="primary"
                label="Primary"
                checked={variantValue === "primary"}
                onChange={() => setVariantValue("primary")}
              />
              <Radio
                variant="secondary"
                label="Secondary"
                checked={variantValue === "secondary"}
                onChange={() => setVariantValue("secondary")}
              />
              <Radio
                variant="success"
                label="Success"
                checked={variantValue === "success"}
                onChange={() => setVariantValue("success")}
              />
              <Radio
                variant="warning"
                label="Warning"
                checked={variantValue === "warning"}
                onChange={() => setVariantValue("warning")}
              />
              <Radio
                variant="error"
                label="Error"
                checked={variantValue === "error"}
                onChange={() => setVariantValue("error")}
              />
              <Radio
                variant="ghost"
                label="Ghost (No background change, no border)"
                checked={variantValue === "ghost"}
                onChange={() => setVariantValue("ghost")}
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Button Style</h3>
            <div className="flex space-x-2">
              <Radio
                isButton
                label="Button 1"
                checked={buttonValue === "button1"}
                onChange={() => setButtonValue("button1")}
              />
              <Radio
                isButton
                label="Button 2"
                checked={buttonValue === "button2"}
                onChange={() => setButtonValue("button2")}
              />
              <Radio
                isButton
                label="Button 3"
                checked={buttonValue === "button3"}
                onChange={() => setButtonValue("button3")}
              />
            </div>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Custom Styling</h3>
            <Radio
              label="Custom Styled Radio"
              wrapperClass="bg-purple-100 p-2 rounded"
              sx={{ borderColor: "purple" }}
              checked={customValue}
              onChange={() => setCustomValue(!customValue)}
            />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Ghost Variant Behavior</h3>
            <div className="space-y-2">
              <Radio color="ghost" label="Ghost Radio (Unchecked)" checked={false} onChange={() => {}} />
              <Radio color="ghost" label="Ghost Radio (Checked)" checked={true} onChange={() => {}} />
            </div>
          </div>
        </div>
      </motion.section>
    </motion.div>
  )
}

export default RadioDoc

