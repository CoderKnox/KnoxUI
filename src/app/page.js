'use client';

import Button from '../components/Button';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center p-24 space-y-8 bg-base-100">
      <h1 className="text-4xl font-bold">Knox-UI Component Library</h1>
      
      <p className="text-xl text-center max-w-2xl">
        Welcome to Knox-UI, a corporate-focused UI component library. 
        Explore our components and their documentation to build sleek and efficient user interfaces.
      </p>

      <Link href="/button-docs" className="bg-primary-500 hover:bg-primary-600 text-white font-bold py-2 px-4 rounded">
        View Button Documentation
      </Link>

      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Quick Preview</h2>
        <div className="flex space-x-2">
          <Button size="s" color="primary">Primary</Button>
          <Button size="s" color="secondary">Secondary</Button>
          <Button size="s" color="success">Success</Button>
          <Button size="s" color="warning">Warning</Button>
          <Button size="s" color="error">Error</Button>
          <Button size="s" color="ghost">Ghost</Button>
        </div>
      </div>
    </main>
  );
}

