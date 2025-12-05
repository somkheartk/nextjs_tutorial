import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'การดึงข้อมูล (Data Fetching) | Next.js Tutorial',
  description: 'เรียนรู้การดึงข้อมูลด้วย Server Components และ Client Components',
};

export default function DataFetchingPage() {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        การดึงข้อมูล (Data Fetching)
      </h1>

      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Next.js รองรับการดึงข้อมูลหลายวิธี ทั้งบน Server และ Client 
        ในบทเรียนนี้เราจะเรียนรู้วิธีการดึงข้อมูลที่หลากหลาย
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        Server Components (แนะนำ)
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        ใน Next.js 13+ components เป็น Server Components โดยค่าเริ่มต้น 
        คุณสามารถใช้ <code>async/await</code> เพื่อดึงข้อมูลได้โดยตรง
      </p>

      <CodeBlock
        filename="app/posts/page.tsx"
        language="tsx"
        code={`interface Post {
  id: number;
  title: string;
  body: string;
}

async function getPosts(): Promise<Post[]> {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts');
  
  if (!res.ok) {
    throw new Error('ไม่สามารถดึงข้อมูลได้');
  }
  
  return res.json();
}

export default async function PostsPage() {
  const posts = await getPosts();
  
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-3xl font-bold mb-6">บทความทั้งหมด</h1>
      <ul className="space-y-4">
        {posts.slice(0, 10).map((post) => (
          <li 
            key={post.id} 
            className="border p-4 rounded-lg"
          >
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        การแคชข้อมูล (Caching)
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Next.js จะแคชผลลัพธ์จาก fetch โดยอัตโนมัติ คุณสามารถควบคุมการแคชได้:
      </p>

      <CodeBlock
        filename="ตัวเลือก Caching"
        language="tsx"
        code={`// ไม่แคช - ดึงข้อมูลใหม่ทุกครั้ง
const res = await fetch('https://api.example.com/data', {
  cache: 'no-store'
});

// แคชตลอดเวลา (ค่าเริ่มต้น)
const res = await fetch('https://api.example.com/data', {
  cache: 'force-cache'
});

// Revalidate ทุก 60 วินาที
const res = await fetch('https://api.example.com/data', {
  next: { revalidate: 60 }
});`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        Client Components
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        สำหรับข้อมูลที่ต้องการ interactivity หรืออัปเดตบ่อย 
        ใช้ Client Component ร่วมกับ <code>useEffect</code> หรือ libraries เช่น SWR
      </p>

      <CodeBlock
        filename="app/components/LiveData.tsx"
        language="tsx"
        code={`'use client';

import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function LiveData() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function fetchUsers() {
      try {
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!res.ok) throw new Error('Failed to fetch');
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Error');
      } finally {
        setLoading(false);
      }
    }
    
    fetchUsers();
  }, []);

  if (loading) return <div>กำลังโหลด...</div>;
  if (error) return <div>เกิดข้อผิดพลาด: {error}</div>;

  return (
    <ul className="space-y-2">
      {users.map((user) => (
        <li key={user.id} className="p-2 bg-gray-50 rounded">
          {user.name} - {user.email}
        </li>
      ))}
    </ul>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        การใช้ SWR (แนะนำสำหรับ Client)
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        SWR เป็น library จาก Vercel ที่ช่วยจัดการการดึงข้อมูลบน client 
        รองรับการแคช, revalidation, และ focus tracking
      </p>

      <CodeBlock
        filename="การติดตั้ง SWR"
        language="bash"
        code={`npm install swr`}
      />

      <CodeBlock
        filename="app/components/Profile.tsx"
        language="tsx"
        code={`'use client';

import useSWR from 'swr';

interface User {
  id: number;
  name: string;
  email: string;
}

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export default function Profile() {
  const { data, error, isLoading } = useSWR<User>(
    'https://jsonplaceholder.typicode.com/users/1',
    fetcher
  );

  if (isLoading) return <div>กำลังโหลด...</div>;
  if (error) return <div>เกิดข้อผิดพลาด</div>;
  if (!data) return null;

  return (
    <div className="p-4 border rounded-lg">
      <h2 className="text-xl font-bold">{data.name}</h2>
      <p className="text-gray-600">{data.email}</p>
    </div>
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        Server Actions
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Server Actions ช่วยให้คุณรันโค้ดบน server จาก client ได้ 
        เหมาะสำหรับการ submit form หรือ mutations
      </p>

      <CodeBlock
        filename="app/actions.ts"
        language="tsx"
        code={`'use server';

// สมมติว่า import prisma client หรือ database client อื่นๆ
// import { db } from '@/lib/db';

export async function createPost(formData: FormData) {
  const title = formData.get('title') as string;
  const content = formData.get('content') as string;
  
  // บันทึกลงฐานข้อมูล (ตัวอย่างใช้ Prisma)
  // const post = await db.post.create({
  //   data: { title, content }
  // });
  
  // ตัวอย่างการ return ข้อมูล
  return { title, content, id: Date.now() };
}`}
        showLineNumbers
      />

      <CodeBlock
        filename="app/components/PostForm.tsx"
        language="tsx"
        code={`import { createPost } from '../actions';

export default function PostForm() {
  return (
    <form action={createPost} className="space-y-4">
      <div>
        <label className="block text-sm font-medium">
          หัวข้อ
        </label>
        <input
          type="text"
          name="title"
          className="mt-1 block w-full border rounded-md p-2"
          required
        />
      </div>
      <div>
        <label className="block text-sm font-medium">
          เนื้อหา
        </label>
        <textarea
          name="content"
          rows={4}
          className="mt-1 block w-full border rounded-md p-2"
          required
        />
      </div>
      <button
        type="submit"
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        สร้างบทความ
      </button>
    </form>
  );
}`}
        showLineNumbers
      />

      <div className="mt-12 flex items-center justify-between">
        <Link
          href="/docs/routing"
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
          ก่อนหน้า: การกำหนดเส้นทาง
        </Link>
        <Link
          href="/docs/api-routes"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          ถัดไป: API Routes
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
