'use client';
import Input from '@/components/Input';

export default function InputDocs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Input Component Documentation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          The Input component is a versatile and customizable input field for use in Knox-UI applications. 
          It supports various sizes, colors, and types to suit different form input needs.
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
              <td className="border border-gray-300 p-2">label</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Label for the input field</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">size</td>
              <td className="border border-gray-300 p-2">"xs" | "s" | "m" | "l" | "xl"</td>
              <td className="border border-gray-300 p-2">"m"</td>
              <td className="border border-gray-300 p-2">Sets the size of the input</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">color</td>
              <td className="border border-gray-300 p-2">"primary" | "secondary" | "success" | "warning" | "error" | "ghost"</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Sets the color scheme of the input</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">type</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">"text"</td>
              <td className="border border-gray-300 p-2">Sets the type of the input (e.g., "text", "password", "email")</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">required</td>
              <td className="border border-gray-300 p-2">boolean</td>
              <td className="border border-gray-300 p-2">false</td>
              <td className="border border-gray-300 p-2">Makes the input field required</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">className</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Additional CSS classes for the input</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">wrapperClass</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">CSS classes for the wrapper div</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">labelClass</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">CSS classes for the label</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">labelTextClass</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">CSS classes for the label text</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">sx</td>
              <td className="border border-gray-300 p-2">object</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Custom styles for the wrapper div</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
        <pre className="bg-base-300 p-4 rounded-md overflow-x-auto">
          <code>{`
import Input from '@/components/Input';

// Basic usage
<Input label="Username" />

// With custom props
<Input 
  label="Email" 
  type="email" 
  size="l" 
  color="primary" 
  required={true}
/>

// With custom classes
<Input 
  label="Password" 
  type="password" 
  className="custom-input" 
  labelClass="custom-label"
/>

// With custom styles
<Input 
  label="Custom Input" 
  sx={{ marginBottom: '20px' }}
/>
          `}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Visual Examples</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Sizes</h3>
          <div className="space-y-4">
            <Input label="Extra Small" size="xs" placeholder="Extra Small Input" />
            <Input label="Small" size="s" placeholder="Small Input" />
            <Input label="Medium" size="m" placeholder="Medium Input" />
            <Input label="Large" size="l" placeholder="Large Input" />
            <Input label="Extra Large" size="xl" placeholder="Extra Large Input" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Colors</h3>
          <div className="space-y-4">
            <Input label="Primary" color="primary" placeholder="Primary Input" />
            <Input label="Secondary" color="secondary" placeholder="Secondary Input" />
            <Input label="Success" color="success" placeholder="Success Input" />
            <Input label="Warning" color="warning" placeholder="Warning Input" />
            <Input label="Error" color="error" placeholder="Error Input" />
            <Input label="Ghost" color="ghost" placeholder="Ghost Input" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Types</h3>
          <div className="space-y-4">
            <Input label="Text" type="text" placeholder="Text Input" />
            <Input label="Password" type="password" placeholder="Password Input" />
            <Input label="Email" type="email" placeholder="Email Input" />
            <Input label="Number" type="number" placeholder="Number Input" />
            <Input label="Date" type="date" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Required Input</h3>
          <Input label="Required Field" required={true} placeholder="This field is required" />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Custom Styling</h3>
          <Input 
            label="Custom Styled Input" 
            className="bg-purple-100 border-purple-300 focus:border-purple-500" 
            labelClass="text-purple-600"
            placeholder="Custom styled input"
          />
        </div>
      </section>
    </div>
  );
}

