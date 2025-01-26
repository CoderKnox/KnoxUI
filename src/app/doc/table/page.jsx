"use client"

import React from "react"
import { Table } from "knoxui-react"
import { motion } from "framer-motion"
import CodeBlock from "@/components/CodeBlock"

const TableDoc = () => {
  const propTableConfig = {
    data: [
      {
        prop: "tableConfig",
        type: "TableConfig",
        default: "required",
        description: "Configuration object for the table",
      },
      {
        prop: "isSerialized",
        type: "boolean",
        default: "true",
        description: "Whether to show row numbers",
      },
      {
        prop: "size",
        type: '"xs" | "s" | "m" | "l" | "xl"',
        default: '"m"',
        description: "Sets the size of the table",
      },
      {
        prop: "header",
        type: "boolean",
        default: "true",
        description: "Whether to show the table header",
      },
      {
        prop: "title",
        type: "string",
        default: '""',
        description: "Title of the table",
      },
      {
        prop: "printSize",
        type: "string",
        default: '"A4 landscape"',
        description: "Page size for printing",
      },
      {
        prop: "sum",
        type: "boolean",
        default: "false",
        description: "Whether to show sum row for numeric columns",
      },
    ],
    columns: [
      { key: "prop", header: "Prop" },
      { key: "type", header: "Type" },
      { key: "default", header: "Default" },
      { key: "description", header: "Description" },
    ],
  }

  const sampleTableConfig = {
    data: [
      { id: 1, name: "John Doe", age: 30, city: "New York" },
      { id: 2, name: "Jane Smith", age: 25, city: "Los Angeles" },
      { id: 3, name: "Bob Johnson", age: 35, city: "Chicago" },
    ],
    columns: [
      { key: "id", header: "ID" },
      { key: "name", header: "Name" },
      { key: "age", header: "Age", dataType: "int" },
      { key: "city", header: "City" },
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
      <motion.section className="mb-12 !bg-transparent border-none" variants={itemVariants}>
        <h1 className="text-5xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-primary to-error">
          Table Component
        </h1>
        <p className="mb-4">
          The Table component is a versatile and customizable table that supports sorting, filtering, and exporting
          data. It provides various features to enhance data presentation and interaction.
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
          {`import { Table } from 'knoxui-react';

const tableConfig = {
  data: [
    { id: 1, name: 'John Doe', age: 30, city: 'New York' },
    { id: 2, name: 'Jane Smith', age: 25, city: 'Los Angeles' },
    { id: 3, name: 'Bob Johnson', age: 35, city: 'Chicago' },
  ],
  columns: [
    { key: 'id', header: 'ID' },
    { key: 'name', header: 'Name' },
    { key: 'age', header: 'Age', dataType: 'int' },
    { key: 'city', header: 'City' },
  ],
};

<Table tableConfig={tableConfig} />`}
        </CodeBlock>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Examples</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Basic Usage</h3>
            <Table tableConfig={sampleTableConfig} />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Custom Size</h3>
            <Table tableConfig={sampleTableConfig} size="s" />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">With Title and Sum</h3>
            <Table tableConfig={sampleTableConfig} title="Employee Data" sum />
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">Without Header and Serialization</h3>
            <Table tableConfig={sampleTableConfig} header={false} isSerialized={false} />
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside space-y-2">
          <li>Sorting: Click on column headers to sort the data</li>
          <li>Filtering: Use the search inputs to filter data in each column</li>
          <li>Exporting: Export data to Excel or PDF formats</li>
          <li>Responsive: Adapts to different screen sizes</li>
          <li>Customizable: Adjust size, appearance, and functionality</li>
        </ul>
      </motion.section>
    </motion.div>
  )
}

export default TableDoc

