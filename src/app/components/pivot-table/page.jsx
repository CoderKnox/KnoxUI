'use client'

import React, { useState } from 'react'
import { PivotTable } from '@/components/PivotTable'

export default function PivotTableDocs() {
  const initialData = [
    { buyer: 'Zara', style: 'XYZ', orderNumber: 'OD001', color: 'Red', orderQty: 1000, pricePerPcs: 200 },
    { buyer: 'Zara', style: 'XYZ', orderNumber: 'OD002', color: 'Blue', orderQty: 1000, pricePerPcs: 200 },
    { buyer: 'Zara', style: 'SDF', orderNumber: 'OD003', color: 'White', orderQty: 800, pricePerPcs: 300 },
    { buyer: 'H&M', style: 'SDF', orderNumber: 'OD004', color: 'White', orderQty: 800, pricePerPcs: 400 },
    { buyer: 'Lindex', style: 'XXY', orderNumber: 'OD005', color: 'Black', orderQty: 800, pricePerPcs: 400 },
    { buyer: 'Zara', style: 'XYZ', orderNumber: 'OD006', color: 'Green', orderQty: 1200, pricePerPcs: 220 },
    { buyer: 'H&M', style: 'ABC', orderNumber: 'OD007', color: 'Red', orderQty: 1500, pricePerPcs: 180 },
    { buyer: 'Lindex', style: 'XXY', orderNumber: 'OD008', color: 'Blue', orderQty: 900, pricePerPcs: 420 },
    { buyer: 'Zara', style: 'SDF', orderNumber: 'OD009', color: 'Black', orderQty: 700, pricePerPcs: 310 },
    { buyer: 'H&M', style: 'ABC', orderNumber: 'OD010', color: 'White', orderQty: 1300, pricePerPcs: 190 },
    { buyer: 'Lindex', style: 'PQR', orderNumber: 'OD011', color: 'Red', orderQty: 1100, pricePerPcs: 380 },
    { buyer: 'Zara', style: 'MNO', orderNumber: 'OD012', color: 'Blue', orderQty: 950, pricePerPcs: 250 },
    { buyer: 'H&M', style: 'SDF', orderNumber: 'OD013', color: 'Green', orderQty: 850, pricePerPcs: 410 },
    { buyer: 'Lindex', style: 'PQR', orderNumber: 'OD014', color: 'White', orderQty: 1050, pricePerPcs: 390 },
    { buyer: 'Zara', style: 'MNO', orderNumber: 'OD015', color: 'Black', orderQty: 1100, pricePerPcs: 260 },
  ]

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">PivotTable Component Documentation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          The PivotTable component is a powerful and flexible tool for data analysis and visualization. 
          It allows users to dynamically reorganize and summarize large datasets, supporting features such as 
          drag-and-drop field arrangement, data aggregation, and dynamic table rendering.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <table className="w-full table-auto border-collapse">
          <thead>
            <tr className="bg-base-200">
              <th className="border p-2 text-left">Prop</th>
              <th className="border p-2 text-left">Type</th>
              <th className="border p-2 text-left">Default</th>
              <th className="border p-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border p-2">initialData</td>
              <td className="border p-2">Array</td>
              <td className="border p-2">-</td>
              <td className="border p-2">An array of objects representing the dataset to be analyzed</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Example</h2>
        <PivotTable initialData={initialData} />
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Features</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Drag and drop field arrangement for rows, columns, and values</li>
          <li>Data aggregation with sum and count options</li>
          <li>Dynamic table rendering based on selected fields</li>
          <li>Ability to swap value and column headers</li>
          <li>Sorting and row spanning for better data organization</li>
          <li>Search functionality for filtering table data</li>
          <li>Export options for PDF and Excel (to be implemented)</li>
        </ul>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <pre className="bg-base-200 p-4 rounded-md overflow-x-auto">
          <code>{`
import { PivotTable } from '@/components/PivotTable'

const initialData = [
  { buyer: 'Zara', style: 'XYZ', orderNumber: 'OD001', color: 'Red', orderQty: 1000, pricePerPcs: 200 },
  { buyer: 'H&M', style: 'ABC', orderNumber: 'OD002', color: 'Blue', orderQty: 1500, pricePerPcs: 180 },
  { buyer: 'Lindex', style: 'PQR', orderNumber: 'OD003', color: 'Green', orderQty: 800, pricePerPcs: 220 },
  // ... more data ...
]

export default function MyComponent() {
  return (
    <div>
      <h1>My Pivot Table</h1>
      <PivotTable initialData={initialData} />
    </div>
  )
}
          `}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Customization</h2>
        <p className="mb-4">
          The PivotTable component uses Tailwind CSS for styling. You can customize its appearance by modifying 
          the Tailwind classes in the component or by wrapping it with your own styled container.
        </p>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-4">Notes</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>The PivotTable component is designed to work with client-side data. For large datasets, consider implementing server-side processing.</li>
          <li>The export functionality (PDF and Excel) is not implemented in the current version and would require additional development.</li>
          <li>For optimal performance, it's recommended to limit the initial dataset to a reasonable size (e.g., less than 10,000 rows).</li>
        </ul>
      </section>
    </div>
  )
}



