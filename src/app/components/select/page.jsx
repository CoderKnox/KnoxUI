'use client'

import { useState } from 'react'
import Select from '@/components/Select'

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
  { value: 'date', label: 'Date' },
  { value: 'elderberry', label: 'Elderberry' },
  { value: 'fig', label: 'Fig' },
  { value: 'grape', label: 'Grape' },
]

export default function SelectUsage() {
  const [singleValue, setSingleValue] = useState(null)
  const [multiValue, setMultiValue] = useState([])

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Select Component Documentation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          The Select component is a customizable dropdown input that supports searching and multi-select functionality.
          It can be used for single selection or multiple selections, with a built-in search feature to filter options.
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
              <td className="border p-2">options</td>
              <td className="border p-2">Array</td>
              <td className="border p-2">-</td>
              <td className="border p-2">An array of objects with value and label properties</td>
            </tr>
            <tr>
              <td className="border p-2">placeholder</td>
              <td className="border p-2">String</td>
              <td className="border p-2">-</td>
              <td className="border p-2">Placeholder text when no option is selected</td>
            </tr>
            <tr>
              <td className="border p-2">multiple</td>
              <td className="border p-2">Boolean</td>
              <td className="border p-2">false</td>
              <td className="border p-2">Enable multi-select functionality</td>
            </tr>
            <tr>
              <td className="border p-2">onChange</td>
              <td className="border p-2">Function</td>
              <td className="border p-2">-</td>
              <td className="border p-2">Callback function called when selection changes</td>
            </tr>
            <tr>
              <td className="border p-2">label</td>
              <td className="border p-2">String</td>
              <td className="border p-2">-</td>
              <td className="border p-2">Label for the select input</td>
            </tr>
            <tr>
              <td className="border p-2">size</td>
              <td className="border p-2">"xs" | "s" | "m" | "l" | "xl"</td>
              <td className="border p-2">"m"</td>
              <td className="border p-2">Sets the size of the select input</td>
            </tr>
            <tr>
              <td className="border p-2">color</td>
              <td className="border p-2">"primary" | "secondary" | "success" | "warning" | "error" | "ghost"</td>
              <td className="border p-2">-</td>
              <td className="border p-2">Sets the color scheme of the select input</td>
            </tr>
            <tr>
              <td className="border p-2">required</td>
              <td className="border p-2">Boolean</td>
              <td className="border p-2">false</td>
              <td className="border p-2">Makes the select input required</td>
            </tr>
            <tr>
              <td className="border p-2">className</td>
              <td className="border p-2">String</td>
              <td className="border p-2">-</td>
              <td className="border p-2">Additional CSS classes for the select input</td>
            </tr>
            <tr>
              <td className="border p-2">wrapperClass</td>
              <td className="border p-2">String</td>
              <td className="border p-2">-</td>
              <td className="border p-2">CSS classes for the wrapper div</td>
            </tr>
            <tr>
              <td className="border p-2">labelClass</td>
              <td className="border p-2">String</td>
              <td className="border p-2">-</td>
              <td className="border p-2">CSS classes for the label</td>
            </tr>
            <tr>
              <td className="border p-2">labelTextClass</td>
              <td className="border p-2">String</td>
              <td className="border p-2">-</td>
              <td className="border p-2">CSS classes for the label text</td>
            </tr>
            <tr>
              <td className="border p-2">sx</td>
              <td className="border p-2">Object</td>
              <td className="border p-2">-</td>
              <td className="border p-2">Custom styles for the wrapper div</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Single Select</h3>
          <Select
            options={options}
            placeholder="Select a fruit"
            label="Single Select"
            onChange={(option) => setSingleValue(option)}
          />
          <p className="mt-2">Selected value: {singleValue ? singleValue.label : 'None'}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Multi Select</h3>
          <Select
            options={options}
            placeholder="Select fruits"
            label="Multi Select"
            multiple
            onChange={(options) => setMultiValue(options)}
          />
          <p className="mt-2">Selected values: {multiValue.map(v => v.label).join(', ') || 'None'}</p>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Sizes</h3>
          <div className="space-y-4">
            <Select options={options} placeholder="Extra Small" size="xs" label="Extra Small" />
            <Select options={options} placeholder="Small" size="s" label="Small" />
            <Select options={options} placeholder="Medium" size="m" label="Medium" />
            <Select options={options} placeholder="Large" size="l" label="Large" />
            <Select options={options} placeholder="Extra Large" size="xl" label="Extra Large" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Colors</h3>
          <div className="space-y-4">
            <Select options={options} placeholder="Primary" color="primary" label="Primary" />
            <Select options={options} placeholder="Secondary" color="secondary" label="Secondary" />
            <Select options={options} placeholder="Success" color="success" label="Success" />
            <Select options={options} placeholder="Warning" color="warning" label="Warning" />
            <Select options={options} placeholder="Error" color="error" label="Error" />
            <Select options={options} placeholder="Ghost" color="ghost" label="Ghost" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Required Select</h3>
          <Select options={options} placeholder="Required Select" label="Required Select" required />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Custom Styling</h3>
          <Select 
            options={options}
            placeholder="Custom Styled Select"
            label="Custom Styled Select"
            className="bg-purple-100 border-purple-300 focus:border-purple-500"
            labelClass="text-purple-600"
          />
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage</h2>
        <pre className="bg-base-200 p-4 rounded-md overflow-x-auto">
          <code>{`
import Select from '@/components/Select'

const options = [
  { value: 'apple', label: 'Apple' },
  { value: 'banana', label: 'Banana' },
  { value: 'cherry', label: 'Cherry' },
]

// Single select
<Select
  options={options}
  placeholder="Select a fruit"
  label="Single Select"
  onChange={(option) => console.log(option)}
/>

// Multi select
<Select
  options={options}
  placeholder="Select fruits"
  label="Multi Select"
  multiple
  onChange={(options) => console.log(options)}
/>

// With custom props
<Select
  options={options}
  placeholder="Custom Select"
  label="Custom Select"
  size="l"
  color="primary"
  required={true}
  className="custom-select"
  labelClass="custom-label"
  sx={{ marginBottom: '20px' }}
  onChange={(option) => console.log(option)}
/>
          `}</code>
        </pre>
      </section>
    </div>
  )
}

