'use client';
import Checkbox from '@/components/Checkbox';
import { useState } from 'react';

export default function CheckboxDocs() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Checkbox Component Documentation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          The Checkbox component is a versatile and customizable checkbox input for use in Knox-UI applications. 
          It supports various sizes, colors, and can be used with or without a label.
        </p>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Props</h2>
        <table className="w-full table-hard">
          <thead>
            <tr className="bg-base-200">
              <th className="border border-gray-300 p-2 text-left">Prop</th>
              <th className="border border-gray-300 p-2 text-left">Type</th>
              <th className="border border-gray-300 p-2 text-left">Default</th>
              <th className="border border-gray-300 p-2 text-left">Description</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border border-gray-300 p-2">checked</td>
              <td className="border border-gray-300 p-2">boolean</td>
              <td className="border border-gray-300 p-2">false</td>
              <td className="border border-gray-300 p-2">Determines if the checkbox is checked</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">size</td>
              <td className="border border-gray-300 p-2">"xs" | "s" | "m" | "l" | "xl"</td>
              <td className="border border-gray-300 p-2">"m"</td>
              <td className="border border-gray-300 p-2">Sets the size of the checkbox</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">color</td>
              <td className="border border-gray-300 p-2">"primary" | "secondary" | "success" | "warning" | "error" | "ghost"</td>
              <td className="border border-gray-300 p-2">"primary"</td>
              <td className="border border-gray-300 p-2">Sets the color scheme of the checkbox</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">label</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Label for the checkbox</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">onChange</td>
              <td className="border border-gray-300 p-2">function</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Function to handle checkbox state changes</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">className</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Additional CSS classes for the checkbox</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">wrapperClass</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">CSS classes for the wrapper div (when label is provided)</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">sx</td>
              <td className="border border-gray-300 p-2">object</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Custom styles for the checkbox or wrapper</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
        <pre className="bg-base-300 p-4 rounded-md overflow-x-auto">
          <code>{`
import Checkbox from '@/components/Checkbox';
import { useState } from 'react';

function CheckboxExample() {
  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      {/* Basic usage */}
      <Checkbox 
        label="Accept terms and conditions" 
        checked={isChecked} 
        onChange={() => setIsChecked(!isChecked)} 
      />

      {/* With custom props */}
      <Checkbox 
        label="Subscribe to newsletter" 
        size="l" 
        color="success" 
        checked={isChecked} 
        onChange={() => setIsChecked(!isChecked)} 
      />

      {/* Without label */}
      <Checkbox 
        checked={isChecked} 
        onChange={() => setIsChecked(!isChecked)} 
        size="m"
        color="secondary"
      />

      {/* With custom styles */}
      <Checkbox 
        label="Custom styled checkbox" 
        checked={isChecked} 
        onChange={() => setIsChecked(!isChecked)} 
        sx={{ marginTop: '20px' }}
        className="custom-checkbox"
      />
    </>
  );
}
          `}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Visual Examples</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Sizes</h3>
          <div className="space-y-4">
            <Checkbox label="Extra Small" size="xs" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <Checkbox label="Small" size="s" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <Checkbox label="Medium" size="m" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <Checkbox label="Large" size="l" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <Checkbox label="Extra Large" size="xl" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Colors</h3>
          <div className="space-y-4">
            <Checkbox label="Primary" color="primary" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <Checkbox label="Secondary" color="secondary" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <Checkbox label="Success" color="success" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <Checkbox label="Warning" color="warning" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <Checkbox label="Error" color="error" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
            <Checkbox label="Ghost" color="ghost" checked={isChecked} onChange={() => setIsChecked(!isChecked)} />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Without Label</h3>
          <div className='space-x-2'>
            <Checkbox checked={isChecked} color='primary' size='xs' onChange={() => setIsChecked(!isChecked)} />
            <Checkbox checked={isChecked} color='secondary' size='s' onChange={() => setIsChecked(!isChecked)} />
            <Checkbox checked={isChecked} color='success' size='m' onChange={() => setIsChecked(!isChecked)} />
            <Checkbox checked={isChecked} color='warning' size='l' onChange={() => setIsChecked(!isChecked)} />
            <Checkbox checked={isChecked} color='error' size='xl' onChange={() => setIsChecked(!isChecked)} />
            <Checkbox checked={isChecked} color='ghost' size='xl' onChange={() => setIsChecked(!isChecked)} />
          </div>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Custom Styling</h3>
          <Checkbox 
            label="Custom Styled Checkbox" 
            checked={isChecked} 
            onChange={() => setIsChecked(!isChecked)} 
            className="accent-purple-500"
            wrapperClass="bg-purple-100 p-2 rounded-md"
          />
        </div>
      </section>
    </div>
  );
}

