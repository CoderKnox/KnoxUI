import React from "react"
import { TabBar } from "knoxui-react"
import { motion } from "framer-motion"
import CodeBlock from "@/components/CodeBlock"

const TabBarDoc = () => {
  const tabs = [
    { label: "Tab 1", content: <div>Content for Tab 1</div> },
    { label: "Tab 2", content: <div>Content for Tab 2</div> },
    { label: "Tab 3", content: <div>Content for Tab 3</div> },
  ]

  const propTableConfig = {
    data: [
      {
        prop: "tabs",
        type: "Array<Tab>",
        default: "[]",
        description: "Array of tab objects with label and content",
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
          TabBar Component
        </h1>
        <p className="mb-4">
          The TabBar component allows users to switch between different views or sections of content.
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
          {`import { TabBar } from 'knoxui-react';

const tabs = [
  { label: 'Tab 1', content: <div>Content for Tab 1</div> },
  { label: 'Tab 2', content: <div>Content for Tab 2</div> },
  { label: 'Tab 3', content: <div>Content for Tab 3</div> },
];

<TabBar tabs={tabs} />`}
        </CodeBlock>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Basic Usage</h3>
            <TabBar tabs={tabs} />
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside">
          <li>Smooth transitions between tabs</li>
          <li>Animated indicator for the active tab</li>
          <li>Responsive design</li>
          <li>Accessible with proper ARIA attributes</li>
        </ul>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Customization</h2>
        <p>
          The TabBar component can be customized by modifying the CSS classes in the component file. You can adjust
          colors, spacing, and animations to match your application's design.
        </p>
      </motion.section>
    </motion.div>
  )
}

export default TabBarDoc

