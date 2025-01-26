import React from 'react';
import { Copy } from 'lucide-react';

const CodeBlock = ({ children }) => {
  const [copied, setCopied] = React.useState(false);

  const copyToClipboard = () => {
    navigator.clipboard.writeText(children);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="relative group">
      <pre className="bg-base-200 dark:bg-base-300 p-4 rounded-lg overflow-x-auto shadow-lg">
        <code className="text-sm">{children}</code>
      </pre>
      <button
        onClick={copyToClipboard}
        className="absolute top-2 right-2 p-2 rounded-md bg-base-300 dark:bg-base-200 opacity-0 group-hover:opacity-100 transition-opacity duration-200"
      >
        <Copy size={16} />
      </button>
      {copied && (
        <span className="absolute top-2 right-12 text-xs text-green-500">
          Copied!
        </span>
      )}
    </div>
  );
};

export default CodeBlock;
