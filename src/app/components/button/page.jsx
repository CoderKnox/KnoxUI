'use client';
import Button from '@/components/Button';

export default function ButtonDocs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-8">Button Component Documentation</h1>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Overview</h2>
        <p className="mb-4">
          The Button component is a versatile and customizable button for use in Knox-UI applications. 
          It supports various sizes, colors, and click effects to suit different design needs.
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
              <td className="border border-gray-300 p-2">size</td>
              <td className="border border-gray-300 p-2">"xs" | "s" | "m" | "l" | "xl"</td>
              <td className="border border-gray-300 p-2">"m"</td>
              <td className="border border-gray-300 p-2">Sets the size of the button</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">color</td>
              <td className="border border-gray-300 p-2">"primary" | "secondary" | "success" | "warning" | "error" | "ghost"</td>
              <td className="border border-gray-300 p-2">"primary"</td>
              <td className="border border-gray-300 p-2">Sets the color scheme of the button</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">clickEffect</td>
              <td className="border border-gray-300 p-2">"ripple" | "push" | "none"</td>
              <td className="border border-gray-300 p-2">"ripple"</td>
              <td className="border border-gray-300 p-2">Sets the click effect animation</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">isLoading</td>
              <td className="border border-gray-300 p-2">boolean</td>
              <td className="border border-gray-300 p-2">false</td>
              <td className="border border-gray-300 p-2">Shows a loading spinner when true</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">disabled</td>
              <td className="border border-gray-300 p-2">boolean</td>
              <td className="border border-gray-300 p-2">false</td>
              <td className="border border-gray-300 p-2">Prevent click event when true</td>
            </tr>
            <tr>
              <td className="border border-gray-300 p-2">className</td>
              <td className="border border-gray-300 p-2">string</td>
              <td className="border border-gray-300 p-2">""</td>
              <td className="border border-gray-300 p-2">Additional CSS classes to apply</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Usage Examples</h2>
        <pre className="bg-base-300 p-4 rounded-md overflow-x-auto">
          <code>{`
import Button from '../components/Button';

// Basic usage
<Button>Click me</Button>

// With custom props
<Button size="l" color="success" clickEffect="push">
  Submit
</Button>

// Loading state
<Button isLoading={true}>Loading</Button>

// Ghost button
<Button color="ghost">Ghost Button</Button>

// Disabled button
<Button disabled={true}>Ghost Button</Button>
          `}</code>
        </pre>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Visual Examples</h2>
        
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Sizes</h3>
          <div className="flex flex-wrap gap-4">
            <Button size="xs">Extra Small</Button>
            <Button size="s">Small</Button>
            <Button size="m">Medium</Button>
            <Button size="l">Large</Button>
            <Button size="xl">Extra Large</Button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Colors</h3>
          <div className="flex flex-wrap gap-4">
            <Button color="primary">Primary</Button>
            <Button color="secondary">Secondary</Button>
            <Button color="success">Success</Button>
            <Button color="warning">Warning</Button>
            <Button color="error">Error</Button>
            <Button color="ghost">Ghost</Button>
          </div>
        </div>

        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-2">Click Effects</h3>
          <div className="flex flex-wrap gap-4">
            <Button clickEffect="ripple">Ripple Effect</Button>
            <Button clickEffect="push">Push Effect</Button>
            <Button clickEffect="none">No Effect</Button>
          </div>
        </div>

        <div className='mb-8'>
          <h3 className="text-xl font-semibold mb-2">Loading State</h3>
          <Button isLoading={true}>Loading Button</Button>
        </div>

        <div>
          <h3 className="text-xl font-semibold mb-2">Disabled</h3>
          <Button disabled={true}>Don't Click</Button>
        </div>
      </section>
    </div>
  );
}

