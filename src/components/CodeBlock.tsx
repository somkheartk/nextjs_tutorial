'use client';

import { useState } from 'react';

interface CodeBlockProps {
  code: string;
  language?: string;
  filename?: string;
  showLineNumbers?: boolean;
}

export default function CodeBlock({
  code,
  language = 'typescript',
  filename,
  showLineNumbers = false,
}: CodeBlockProps) {
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const lines = code.split('\n');

  return (
    <div className="group relative my-4 overflow-hidden rounded-lg border border-zinc-200 bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900">
      {/* Header */}
      {filename && (
        <div className="flex items-center justify-between border-b border-zinc-200 bg-zinc-100 px-4 py-2 dark:border-zinc-800 dark:bg-zinc-800/50">
          <span className="text-sm text-zinc-600 dark:text-zinc-400">{filename}</span>
          <span className="text-xs text-zinc-500 dark:text-zinc-500">{language}</span>
        </div>
      )}

      {/* Copy button */}
      <button
        onClick={copyToClipboard}
        className="absolute right-3 top-3 rounded-md bg-zinc-200 px-2 py-1 text-xs font-medium text-zinc-600 opacity-0 transition-opacity group-hover:opacity-100 hover:bg-zinc-300 dark:bg-zinc-700 dark:text-zinc-400 dark:hover:bg-zinc-600"
        style={{ top: filename ? '2.75rem' : '0.75rem' }}
      >
        {copied ? 'คัดลอกแล้ว!' : 'คัดลอก'}
      </button>

      {/* Code content */}
      <div className="overflow-x-auto p-4">
        <pre className="text-sm">
          <code className={`language-${language}`}>
            {showLineNumbers ? (
              lines.map((line, index) => (
                <div key={index} className="flex">
                  <span className="mr-4 inline-block w-8 select-none text-right text-zinc-400 dark:text-zinc-600">
                    {index + 1}
                  </span>
                  <span className="text-zinc-800 dark:text-zinc-200">{line}</span>
                </div>
              ))
            ) : (
              <span className="text-zinc-800 dark:text-zinc-200">{code}</span>
            )}
          </code>
        </pre>
      </div>
    </div>
  );
}
