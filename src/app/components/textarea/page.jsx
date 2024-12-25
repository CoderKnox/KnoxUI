'use client';
import TextArea from '@/components/TextArea';

export default function TextAreaDocs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Text Area Component Documentation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          The Text Area component is a versatile and customizable multi-line input field for use in Knox-UI applications. 
          It supports various sizes, colors, and can be easily styled to suit different form input needs.
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
              <td className="border border-gray-300 p-2">Label for the textarea</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">size</td>
              <td className="border border-gray-300 p-2">"xs" | "s" | "m" | "l" | "xl"</td>
              <td className="border border-gray-300 p-2">"m"</td>
              <td className="border border-gray-300 p-2">Sets the size of the textarea</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">color</td>
              <td className="border border-gray-300 p-2">"primary" | "secondary" | "success" | "warning" | "error" | "ghost"</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Sets the color scheme of the textarea</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">required</td>
              <td className="border border-gray-300 p-2">boolean</td>
              <td className="border border-gray-300 p-2">false</td>
              <td className="border border-gray-300 p-2">Makes the textarea required</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">className</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">-</td>
              <td className="border border-gray-300 p-2">Additional CSS classes for the textarea</td>
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
            <tr>
              <td className="border border-gray-300 p-2">rows</td>
              <td className="border border-gray-300 p-2">number</td>
              <td className="border border-gray-300 p-2">3</td>
              <td className="border border-gray-300 p-2">Number of visible text lines for the textarea</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
        <pre className="bg-base-300 p-4 rounded-md overflow-x-auto">
          <code>{`
import TextArea from '@/components/TextArea';

// Basic usage
<TextArea label="Comments" />

// With custom props
<TextArea 
  label="Description" 
  size="l" 
  color="primary" 
  required={true}
  rows={5}
/>

// With custom classes
<TextArea 
  label="Feedback" 
  className="custom-textarea" 
  labelClass="custom-label"
/>

// With custom styles
<TextArea 
  label="Custom TextArea" 
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
            <TextArea label="Extra Small" size="xs" placeholder="Extra Small TextArea" />
            <TextArea label="Small" size="s" placeholder="Small TextArea" />
            <TextArea label="Medium" size="m" placeholder="Medium TextArea" />
            <TextArea label="Large" size="l" placeholder="Large TextArea" />
            <TextArea label="Extra Large" size="xl" placeholder="Extra Large TextArea" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Colors</h3>
          <div className="space-y-4">
            <TextArea label="Primary" color="primary" placeholder="Primary TextArea" />
            <TextArea label="Secondary" color="secondary" placeholder="Secondary TextArea" />
            <TextArea label="Success" color="success" placeholder="Success TextArea" />
            <TextArea label="Warning" color="warning" placeholder="Warning TextArea" />
            <TextArea label="Error" color="error" placeholder="Error TextArea" />
            <TextArea label="Ghost" color="ghost" placeholder="Ghost TextArea" />
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Required TextArea</h3>
          <TextArea label="Required Field" required={true} placeholder="This field is required" />
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Custom Rows</h3>
          <TextArea label="Custom Rows" rows={6} placeholder="This TextArea has 6 visible rows" />
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Custom Styling</h3>
          <TextArea 
            label="Custom Styled TextArea" 
            className="bg-purple-100 border-purple-300 focus:border-purple-500" 
            labelClass="text-purple-600"
            placeholder="Custom styled TextArea"
          />
        </div>
      </section>
    </div>
  );
}
