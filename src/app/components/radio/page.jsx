'use client'

import { useState } from 'react'
import Radio from '../../../components/Radio'

export default function RadioPage() {
  const [value, setValue] = useState('')

  const options = [
    { label: 'Option 1', value: '1' },
    { label: 'Option 2', value: '2' },
    { label: 'Option 3', value: '3' },
  ]

  return (
    <div>
      <h2 className="text-2xl font-semibold mb-4">Radio Component</h2>
      <div className="space-y-8">
        <div>
          <h3 className="text-xl font-semibold mb-2">Standard Style</h3>
          <Radio
            options={options}
            name="standard-radio"
            value={value}
            onChange={(e) => setValue(e.target.value)}
          />
        </div>
        <div>
          <h3 className="text-xl font-semibold mb-2">Button Style</h3>
          <Radio
            options={options}
            name="button-radio"
            value={value}
            onChange={(e) => setValue(e.target.value)}
            buttonStyle
          />
        </div>
        <p>Selected value: {value}</p>
      </div>
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-2">Usage</h3>
        <pre className="bg-gray-100 dark:bg-gray-800 p-4 rounded-md overflow-x-auto">
          {`import Radio from '../components/Radio'

const options = [
  { label: 'Option 1', value: '1' },
  { label: 'Option 2', value: '2' },
  { label: 'Option 3', value: '3' },
]

<Radio
  options={options}
  name="radio-group-name"
  value="" // Optional: initial value
  onChange={(e) => {}} // Optional: onChange handler
  className="" // Optional: additional classes
  buttonStyle={false} // Optional: use button-like style
/>`}
        </pre>
      </div>
    </div>
  )
}

