import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'การจัดสไตล์ (Styling) | Next.js Tutorial',
  description: 'เรียนรู้วิธีการจัดสไตล์ใน Next.js ด้วย CSS, Tailwind CSS และ CSS-in-JS',
};

export default function StylingPage() {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        การจัดสไตล์ (Styling)
      </h1>

      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Next.js รองรับวิธีการจัดสไตล์หลายรูปแบบ รวมถึง Global CSS, CSS Modules, 
        Tailwind CSS และ CSS-in-JS libraries
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        1. Global CSS
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        นำเข้า CSS ทั่วโลกได้ในไฟล์ <code>app/layout.tsx</code>
      </p>

      <CodeBlock
        filename="app/globals.css"
        language="css"
        code={`/* Global styles */
* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.5;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.btn {
  display: inline-block;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  cursor: pointer;
}

.btn-primary {
  background-color: #3b82f6;
  color: white;
}

.btn-primary:hover {
  background-color: #2563eb;
}`}
        showLineNumbers
      />

      <CodeBlock
        filename="app/layout.tsx"
        language="tsx"
        code={`import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="th">
      <body>{children}</body>
    </html>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        2. CSS Modules
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        CSS Modules ช่วยให้ styles เป็น scoped ไปยัง component นั้นๆ 
        ใช้ไฟล์ที่ลงท้ายด้วย <code>.module.css</code>
      </p>

      <CodeBlock
        filename="app/components/Button.module.css"
        language="css"
        code={`.button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 0.375rem;
  font-weight: 500;
  transition: all 0.2s;
}

.primary {
  background-color: #3b82f6;
  color: white;
}

.primary:hover {
  background-color: #2563eb;
}

.secondary {
  background-color: #e5e7eb;
  color: #374151;
}

.secondary:hover {
  background-color: #d1d5db;
}

.large {
  padding: 0.75rem 1.5rem;
  font-size: 1.125rem;
}`}
        showLineNumbers
      />

      <CodeBlock
        filename="app/components/Button.tsx"
        language="tsx"
        code={`import styles from './Button.module.css';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary';
  size?: 'normal' | 'large';
  onClick?: () => void;
}

export default function Button({
  children,
  variant = 'primary',
  size = 'normal',
  onClick,
}: ButtonProps) {
  const classes = [
    styles.button,
    styles[variant],
    size === 'large' ? styles.large : '',
  ].join(' ');

  return (
    <button className={classes} onClick={onClick}>
      {children}
    </button>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        3. Tailwind CSS (แนะนำ)
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Tailwind CSS เป็น utility-first CSS framework ที่ช่วยให้จัดสไตล์ได้รวดเร็ว 
        Next.js รองรับ Tailwind CSS built-in
      </p>

      <CodeBlock
        filename="การติดตั้ง Tailwind CSS"
        language="bash"
        code={`npx create-next-app@latest --tailwind`}
      />

      <CodeBlock
        filename="app/components/Card.tsx"
        language="tsx"
        code={`interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;
}

export default function Card({ title, description, imageUrl }: CardProps) {
  return (
    <div className="group overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900">
      {imageUrl && (
        <div className="aspect-video overflow-hidden">
          <img
            src={imageUrl}
            alt={title}
            className="h-full w-full object-cover transition-transform group-hover:scale-105"
          />
        </div>
      )}
      <div className="p-6">
        <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
          {title}
        </h3>
        <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
          {description}
        </p>
      </div>
    </div>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        ตัวอย่าง: Layout แบบ Responsive
      </h2>

      <CodeBlock
        filename="app/components/ResponsiveGrid.tsx"
        language="tsx"
        code={`interface Item {
  id: number;
  title: string;
  description: string;
}

interface ResponsiveGridProps {
  items: Item[];
}

export default function ResponsiveGrid({ items }: ResponsiveGridProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Responsive Grid */}
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="rounded-lg border border-zinc-200 p-6 transition-colors hover:border-blue-500 dark:border-zinc-800"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        4. CSS-in-JS
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        สำหรับ CSS-in-JS libraries เช่น styled-components หรือ Emotion 
        ต้องการการตั้งค่าเพิ่มเติม
      </p>

      <CodeBlock
        filename="การติดตั้ง styled-components"
        language="bash"
        code={`npm install styled-components
npm install -D @types/styled-components`}
      />

      <CodeBlock
        filename="app/components/StyledButton.tsx"
        language="tsx"
        code={`'use client';

import styled from 'styled-components';

const Button = styled.button<{ $primary?: boolean }>\`
  background: \${(props) => (props.$primary ? '#3b82f6' : '#e5e7eb')};
  color: \${(props) => (props.$primary ? 'white' : '#374151')};
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 0.375rem;
  cursor: pointer;
  transition: all 0.2s;

  &:hover {
    background: \${(props) => (props.$primary ? '#2563eb' : '#d1d5db')};
  }
\`;

export default function StyledButton() {
  return (
    <div className="space-x-4">
      <Button $primary>ปุ่มหลัก</Button>
      <Button>ปุ่มรอง</Button>
    </div>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        5. Dark Mode
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        การทำ Dark Mode ด้วย Tailwind CSS ง่ายมาก 
        ใช้ prefix <code>dark:</code> สำหรับ styles ใน dark mode
      </p>

      <CodeBlock
        filename="app/components/ThemeCard.tsx"
        language="tsx"
        code={`export default function ThemeCard() {
  return (
    <div className="rounded-lg border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-900">
      <h2 className="text-xl font-bold text-zinc-900 dark:text-white">
        รองรับ Dark Mode
      </h2>
      <p className="mt-2 text-zinc-600 dark:text-zinc-400">
        สีของ card นี้จะเปลี่ยนตาม system preference
      </p>
      <button className="mt-4 rounded-lg bg-blue-600 px-4 py-2 text-white hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600">
        ปุ่มตัวอย่าง
      </button>
    </div>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        สรุป
      </h2>
      <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <ul className="space-y-2 text-zinc-600 dark:text-zinc-400">
          <li>
            <strong>Global CSS:</strong> เหมาะสำหรับ styles ที่ใช้ทั่วทั้งแอป
          </li>
          <li>
            <strong>CSS Modules:</strong> เหมาะสำหรับ component-scoped styles
          </li>
          <li>
            <strong>Tailwind CSS:</strong> เหมาะสำหรับการพัฒนาที่รวดเร็ว (แนะนำ)
          </li>
          <li>
            <strong>CSS-in-JS:</strong> เหมาะสำหรับ dynamic styles ที่ซับซ้อน
          </li>
        </ul>
      </div>

      <div className="mt-12 flex items-center justify-between">
        <Link
          href="/docs/api-routes"
          className="inline-flex items-center gap-2 rounded-lg border border-zinc-200 px-4 py-2 text-sm font-medium text-zinc-600 transition-colors hover:bg-zinc-50 dark:border-zinc-800 dark:text-zinc-400 dark:hover:bg-zinc-800"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 19l-7-7 7-7"
            />
          </svg>
          ก่อนหน้า: API Routes
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          กลับหน้าแรก
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
