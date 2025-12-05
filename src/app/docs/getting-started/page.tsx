import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'เริ่มต้นใช้งาน Next.js | Next.js Tutorial',
  description: 'เรียนรู้วิธีการติดตั้งและตั้งค่าโปรเจค Next.js ใหม่',
};

export default function GettingStartedPage() {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        เริ่มต้นใช้งาน Next.js
      </h1>

      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Next.js เป็น React Framework ที่ช่วยให้การพัฒนาเว็บแอปพลิเคชันเป็นเรื่องง่าย 
        รองรับทั้ง Server-Side Rendering (SSR), Static Site Generation (SSG) 
        และอีกมากมาย
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        สิ่งที่ต้องมีก่อนเริ่มต้น
      </h2>
      <ul className="mt-4 list-disc space-y-2 pl-6 text-zinc-600 dark:text-zinc-400">
        <li>Node.js 18.17 หรือใหม่กว่า</li>
        <li>macOS, Windows หรือ Linux</li>
      </ul>

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        การติดตั้ง
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        เราแนะนำให้สร้างโปรเจค Next.js ใหม่โดยใช้ <code>create-next-app</code> 
        ซึ่งจะตั้งค่าทุกอย่างให้อัตโนมัติ
      </p>

      <CodeBlock
        filename="Terminal"
        language="bash"
        code={`npx create-next-app@latest my-app`}
      />

      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        ในระหว่างการติดตั้ง คุณจะเห็นคำถามต่อไปนี้:
      </p>

      <CodeBlock
        filename="Terminal"
        language="bash"
        code={`What is your project named? my-app
Would you like to use TypeScript? No / Yes
Would you like to use ESLint? No / Yes
Would you like to use Tailwind CSS? No / Yes
Would you like your code inside a \`src/\` directory? No / Yes
Would you like to use App Router? (recommended) No / Yes
Would you like to use Turbopack for \`next dev\`? No / Yes
Would you like to customize the import alias (\`@/*\` by default)? No / Yes`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        โครงสร้างโปรเจค
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        หลังจากติดตั้งเสร็จ คุณจะได้โครงสร้างโปรเจคดังนี้:
      </p>

      <CodeBlock
        filename="โครงสร้างโฟลเดอร์"
        language="plaintext"
        code={`my-app/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── public/
│   ├── next.svg
│   └── vercel.svg
├── next.config.ts
├── package.json
├── postcss.config.mjs
├── tailwind.config.ts
└── tsconfig.json`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        รันโปรเจค
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        เริ่มต้น development server ด้วยคำสั่ง:
      </p>

      <CodeBlock
        filename="Terminal"
        language="bash"
        code={`cd my-app
npm run dev`}
      />

      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        เปิดเบราว์เซอร์ไปที่{' '}
        <code className="rounded bg-zinc-100 px-2 py-1 text-sm dark:bg-zinc-800">
          http://localhost:3000
        </code>{' '}
        เพื่อดูแอปพลิเคชันของคุณ
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        การแก้ไขหน้าแรก
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        คุณสามารถเริ่มแก้ไขหน้าเว็บได้โดยการแก้ไขไฟล์{' '}
        <code className="rounded bg-zinc-100 px-2 py-1 text-sm dark:bg-zinc-800">
          app/page.tsx
        </code>{' '}
        หน้าเว็บจะอัปเดตอัตโนมัติเมื่อคุณบันทึกไฟล์
      </p>

      <CodeBlock
        filename="app/page.tsx"
        language="tsx"
        code={`export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold">
        สวัสดี Next.js!
      </h1>
      <p className="mt-4 text-lg text-gray-600">
        ยินดีต้อนรับสู่โปรเจค Next.js ของคุณ
      </p>
    </main>
  );
}`}
        showLineNumbers
      />

      <div className="mt-12 flex items-center justify-between">
        <Link
          href="/docs/basics"
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
          ก่อนหน้า: พื้นฐานที่ต้องรู้
        </Link>
        <Link
          href="/docs/routing"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          ถัดไป: การกำหนดเส้นทาง
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
              d="M9 5l7 7-7 7"
            />
          </svg>
        </Link>
      </div>
    </article>
  );
}
