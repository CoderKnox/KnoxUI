"use client";

import React from "react"
import { PivotTable } from "knoxui-react"
import { motion } from "framer-motion"
import CodeBlock from "@/components/CodeBlock"

const PivotTableDoc = () => {
  const initialData = [
    { category: "Fruits", item: "Apple", region: "North", sales: 100 },
    { category: "Fruits", item: "Banana", region: "South", sales: 150 },
    { category: "Vegetables", item: "Carrot", region: "East", sales: 80 },
    { category: "Vegetables", item: "Broccoli", region: "West", sales: 120 },
    { category: "Fruits", item: "Apple", region: "South", sales: 90 },
    { category: "Vegetables", item: "Carrot", region: "North", sales: 110 },
  ]

  const propTableConfig = {
    data: [
      {
        prop: "initialData",
        type: "Array<DataItem>",
        default: "required",
        description: "Initial dataset for the pivot table",
      },
      {
        prop: "title",
        type: "string",
        default: '"Pivot Table"',
        description: "Title of the pivot table",
      },
      {
        prop: "className",
        type: "string",
        default: '""',
        description: "Additional CSS classes for the pivot table wrapper",
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
          PivotTable Component
        </h1>
        <p className="mb-4">
          The PivotTable component allows users to create dynamic pivot tables from a given dataset.
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
          {`import { PivotTable } from 'knoxui-react';

const initialData = [
  { category: 'Fruits', item: 'Apple', region: 'North', sales: 100 },
  { category: 'Fruits', item: 'Banana', region: 'South', sales: 150 },
  { category: 'Vegetables', item: 'Carrot', region: 'East', sales: 80 },
  { category: 'Vegetables', item: 'Broccoli', region: 'West', sales: 120 },
  { category: 'Fruits', item: 'Apple', region: 'South', sales: 90 },
  { category: 'Vegetables', item: 'Carrot', region: 'North', sales: 110 },
];

<PivotTable initialData={initialData} title="Sales Data" />`}
        </CodeBlock>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Features</h2>
        <ul className="list-disc list-inside mb-6">
          <li>Drag and drop fields to configure rows, columns, and values</li>
          <li>Aggregation options (SUM, COUNT)</li>
          <li>Sorting and filtering capabilities</li>
          <li>Export to Excel and PDF</li>
          <li>Responsive design</li>
        </ul>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Example</h2>
        <div className="space-y-4">
          <div>
            <h3 className="text-xl font-bold mb-2">Basic PivotTable</h3>
            <PivotTable initialData={initialData} title="Sales Data" />
          </div>
        </div>
      </motion.section>

      <motion.section className="mb-12" variants={itemVariants}>
        <h2 className="text-2xl font-bold mb-4">Usage Instructions</h2>
        <ol className="list-decimal list-inside space-y-2">
          <li>Drag fields from the "Available Fields" section to "Values", "Rows", or "Columns".</li>
          <li>Use the "SUM" or "COUNT" options in the "Values" section to change the aggregation type.</li>
          <li>Drag fields within "Rows" or "Columns" to change their order.</li>
          <li>Use the search box above the pivot table to filter data globally.</li>
          <li>Click on column headers to sort the data.</li>
          <li>Use the export buttons to download the data as Excel or PDF.</li>
        </ol>
      </motion.section>
    </motion.div>
  )
}

export default PivotTableDoc

