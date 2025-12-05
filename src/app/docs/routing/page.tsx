import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'การกำหนดเส้นทาง (Routing) | Next.js Tutorial',
  description: 'เรียนรู้ระบบ Routing ของ Next.js ด้วย App Router',
};

export default function RoutingPage() {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        การกำหนดเส้นทาง (Routing)
      </h1>

      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Next.js ใช้ระบบ File-based Routing ซึ่งหมายความว่าเส้นทาง (routes) 
        ของแอปพลิเคชันจะถูกกำหนดโดยโครงสร้างโฟลเดอร์ภายใน <code>app</code> directory
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        การสร้างเส้นทางพื้นฐาน
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        ในการสร้างเส้นทางใหม่ ให้สร้างโฟลเดอร์ใน <code>app</code> directory 
        และสร้างไฟล์ <code>page.tsx</code> ภายในโฟลเดอร์นั้น
      </p>

      <CodeBlock
        filename="โครงสร้างโฟลเดอร์"
        language="plaintext"
        code={`app/
├── page.tsx          → /
├── about/
│   └── page.tsx      → /about
├── blog/
│   ├── page.tsx      → /blog
│   └── [slug]/
│       └── page.tsx  → /blog/:slug
└── products/
    └── [...slug]/
        └── page.tsx  → /products/*`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        ตัวอย่าง: สร้างหน้า About
      </h2>

      <CodeBlock
        filename="app/about/page.tsx"
        language="tsx"
        code={`export default function AboutPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">เกี่ยวกับเรา</h1>
      <p className="mt-4 text-gray-600">
        นี่คือหน้าเกี่ยวกับเรา
      </p>
    </div>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        Dynamic Routes (เส้นทางแบบไดนามิก)
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        คุณสามารถสร้าง dynamic routes โดยใช้วงเล็บเหลี่ยม <code>[param]</code> 
        ในชื่อโฟลเดอร์ ค่าจะถูกส่งเป็น params ไปยังหน้านั้น
      </p>

      <CodeBlock
        filename="app/blog/[slug]/page.tsx"
        language="tsx"
        code={`type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPost({ params }: Props) {
  const { slug } = await params;
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">
        บทความ: {slug}
      </h1>
      <p className="mt-4 text-gray-600">
        เนื้อหาบทความ {slug}
      </p>
    </div>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        Catch-all Routes
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        ใช้ <code>[...slug]</code> เพื่อจับเส้นทางทั้งหมดที่อยู่ต่อท้าย
      </p>

      <CodeBlock
        filename="app/shop/[...slug]/page.tsx"
        language="tsx"
        code={`type Props = {
  params: Promise<{ slug: string[] }>;
};

export default async function ShopPage({ params }: Props) {
  const { slug } = await params;
  
  // ตัวอย่าง: /shop/clothes/tops/shirts
  // slug = ['clothes', 'tops', 'shirts']
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold">สินค้า</h1>
      <p className="mt-4 text-gray-600">
        หมวดหมู่: {slug.join(' > ')}
      </p>
    </div>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        การนำทาง (Navigation)
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        ใช้ <code>Link</code> component จาก <code>next/link</code> 
        เพื่อนำทางระหว่างหน้า
      </p>

      <CodeBlock
        filename="app/components/Navigation.tsx"
        language="tsx"
        code={`import Link from 'next/link';

export default function Navigation() {
  return (
    <nav className="flex gap-4 p-4 bg-gray-100">
      <Link 
        href="/" 
        className="text-blue-600 hover:underline"
      >
        หน้าแรก
      </Link>
      <Link 
        href="/about" 
        className="text-blue-600 hover:underline"
      >
        เกี่ยวกับ
      </Link>
      <Link 
        href="/blog" 
        className="text-blue-600 hover:underline"
      >
        บล็อก
      </Link>
    </nav>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        การใช้ useRouter Hook
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        สำหรับ Client Components สามารถใช้ <code>useRouter</code> hook 
        เพื่อนำทางแบบ programmatic
      </p>

      <CodeBlock
        filename="app/components/SearchButton.tsx"
        language="tsx"
        code={`'use client';

import { useRouter } from 'next/navigation';

export default function SearchButton() {
  const router = useRouter();

  const handleSearch = () => {
    // นำทางไปยังหน้าค้นหา
    router.push('/search?q=nextjs');
  };

  return (
    <button 
      onClick={handleSearch}
      className="bg-blue-600 text-white px-4 py-2 rounded"
    >
      ค้นหา
    </button>
  );
}`}
        showLineNumbers
      />

      <div className="mt-12 flex items-center justify-between">
        <Link
          href="/docs/getting-started"
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
          ก่อนหน้า: เริ่มต้นใช้งาน
        </Link>
        <Link
          href="/docs/data-fetching"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          ถัดไป: การดึงข้อมูล
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
