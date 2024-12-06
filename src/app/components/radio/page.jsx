'use client';
import Radio from '@/components/Radio';
import { useState } from 'react';

export default function RadioDocs() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedButtonOption, setSelectedButtonOption] = useState('');
  const [selectedColorOption, setSelectedColorOption] = useState('');

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Radio Button Component Documentation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          The Radio button component is a versatile and customizable radio input for use in Knox-UI applications. 
          It supports various sizes, colors, and can be used with or without a label. It can also be rendered as a button-style radio input.
          When checked, the radio button or button-style input will display the selected color as its background.
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
              <td className="border border-gray-300 p-2">Determines if the radio button is checked</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">size</td>
              <td className="border border-gray-300 p-2">"xs" | "s" | "m" | "l" | "xl"</td>
              <td className="border border-gray-300 p-2">"m"</td>
              <td className="border border-gray-300 p-2">Sets the size of the radio button</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">color</td>
              <td className="border border-gray-300 p-2">"primary" | "secondary" | "success" | "warning" | "error" | "ghost"</td>
              <td className="border border-gray-300 p-2">"primary"</td>
              <td className="border border-gray-300 p-2">Sets the color scheme of the radio button</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">label</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Label for the radio button</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">onChange</td>
              <td className="border border-gray-300 p-2">function</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Function to handle radio button state changes</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">className</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Additional CSS classes for the radio button</td>
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
              <td className="border border-gray-300 p-2">Custom styles for the radio button or wrapper</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">isButton</td>
              <td className="border border-gray-300 p-2">boolean</td>
              <td className="border border-gray-300 p-2">false</td>
              <td className="border border-gray-300 p-2">Renders the radio input as a button-style element</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
        <pre className="bg-base-300 p-4 rounded-md overflow-x-auto">
          <code>{`
import Radio from '@/components/Radio';
import { useState } from 'react';

function RadioExample() {
  const [selectedOption, setSelectedOption] = useState('');
  const [selectedButtonOption, setSelectedButtonOption] = useState('');
  const [selectedColorOption, setSelectedColorOption] = useState('');

  return (
    <>
      {/* Basic usage */}
      <Radio 
        label="Option 1" 
        checked={selectedOption === 'option1'} 
        onChange={() => setSelectedOption('option1')} 
        name="radioGroup"
      />
      <Radio 
        label="Option 2" 
        checked={selectedOption === 'option2'} 
        onChange={() => setSelectedOption('option2')} 
        name="radioGroup"
      />

      {/* With custom props */}
      <Radio 
        label="Large Success Option" 
        size="l" 
        color="success" 
        checked={selectedOption === 'customOption'} 
        onChange={() => setSelectedOption('customOption')} 
        name="radioGroup"
      />

      {/* As button-style radio with colors */}
      <div className="flex gap-2">
        <Radio 
          label="Primary" 
          isButton={true}
          color="primary"
          checked={selectedColorOption === 'primary'} 
          onChange={() => setSelectedColorOption('primary')} 
          name="colorRadioGroup"
        />
        <Radio 
          label="Secondary" 
          isButton={true}
          color="secondary"
          checked={selectedColorOption === 'secondary'} 
          onChange={() => setSelectedColorOption('secondary')} 
          name="colorRadioGroup"
        />
        <Radio 
          label="Success" 
          isButton={true}
          color="success"
          checked={selectedColorOption === 'success'} 
          onChange={() => setSelectedColorOption('success')} 
          name="colorRadioGroup"
        />
      </div>
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
            <Radio label="Extra Small" size="xs" checked={selectedOption === 'xs'} onChange={() => setSelectedOption('xs')} name="sizeGroup" />
            <Radio label="Small" size="s" checked={selectedOption === 's'} onChange={() => setSelectedOption('s')} name="sizeGroup" />
            <Radio label="Medium" size="m" checked={selectedOption === 'm'} onChange={() => setSelectedOption('m')} name="sizeGroup" />
            <Radio label="Large" size="l" checked={selectedOption === 'l'} onChange={() => setSelectedOption('l')} name="sizeGroup" />
            <Radio label="Extra Large" size="xl" checked={selectedOption === 'xl'} onChange={() => setSelectedOption('xl')} name="sizeGroup" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Colors</h3>
          <div className="space-y-4">
            <Radio label="Primary" color="primary" checked={selectedOption === 'primary'} onChange={() => setSelectedOption('primary')} name="colorGroup" />
            <Radio label="Secondary" color="secondary" checked={selectedOption === 'secondary'} onChange={() => setSelectedOption('secondary')} name="colorGroup" />
            <Radio label="Success" color="success" checked={selectedOption === 'success'} onChange={() => setSelectedOption('success')} name="colorGroup" />
            <Radio label="Warning" color="warning" checked={selectedOption === 'warning'} onChange={() => setSelectedOption('warning')} name="colorGroup" />
            <Radio label="Error" color="error" checked={selectedOption === 'error'} onChange={() => setSelectedOption('error')} name="colorGroup" />
            <Radio label="Ghost" color="ghost" checked={selectedOption === 'ghost'} onChange={() => setSelectedOption('ghost')} name="colorGroup" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Without Label</h3>
          <Radio checked={selectedOption === 'noLabel'} onChange={() => setSelectedOption('noLabel')} name="noLabelGroup" />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Custom Styling</h3>
          <Radio 
            label="Custom Styled Radio" 
            checked={selectedOption === 'customStyle'} 
            onChange={() => setSelectedOption('customStyle')} 
            className="accent-purple-500"
            wrapperClass="bg-purple-100 p-2 rounded-md"
            name="customStyleGroup"
          />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Button-style Radio with Colors</h3>
          <div className="flex gap-2">
            <Radio 
              label="Primary" 
              isButton={true}
              color="primary"
              checked={selectedColorOption === 'primary'} 
              onChange={() => setSelectedColorOption('primary')} 
              name="buttonColorGroup"
            />
            <Radio 
              label="Secondary" 
              isButton={true}
              color="secondary"
              checked={selectedColorOption === 'secondary'} 
              onChange={() => setSelectedColorOption('secondary')} 
              name="buttonColorGroup"
            />
            <Radio 
              label="Success" 
              isButton={true}
              color="success"
              checked={selectedColorOption === 'success'} 
              onChange={() => setSelectedColorOption('success')} 
              name="buttonColorGroup"
            />
            <Radio 
              label="Warning" 
              isButton={true}
              color="warning"
              checked={selectedColorOption === 'warning'} 
              onChange={() => setSelectedColorOption('warning')} 
              name="buttonColorGroup"
            />
            <Radio 
              label="Error" 
              isButton={true}
              color="error"
              checked={selectedColorOption === 'error'} 
              onChange={() => setSelectedColorOption('error')} 
              name="buttonColorGroup"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

