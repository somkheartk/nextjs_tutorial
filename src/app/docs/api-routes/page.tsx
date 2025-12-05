import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'API Routes | Next.js Tutorial',
  description: 'เรียนรู้การสร้าง API Endpoints ด้วย Route Handlers',
};

export default function ApiRoutesPage() {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        API Routes
      </h1>

      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        Next.js ช่วยให้คุณสร้าง API endpoints ได้ง่ายด้วย Route Handlers 
        ซึ่งเป็นฟังก์ชันที่รันบน server และรองรับ HTTP methods ทั้งหมด
      </p>

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        การสร้าง Route Handler
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        สร้างไฟล์ <code>route.ts</code> ในโฟลเดอร์ <code>app/api</code> 
        เพื่อสร้าง API endpoint
      </p>

      <CodeBlock
        filename="โครงสร้างโฟลเดอร์"
        language="plaintext"
        code={`app/
└── api/
    ├── hello/
    │   └── route.ts     → /api/hello
    ├── users/
    │   ├── route.ts     → /api/users
    │   └── [id]/
    │       └── route.ts → /api/users/:id
    └── posts/
        └── route.ts     → /api/posts`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        ตัวอย่าง: GET Request
      </h2>

      <CodeBlock
        filename="app/api/hello/route.ts"
        language="typescript"
        code={`import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    message: 'สวัสดี จาก API!',
    timestamp: new Date().toISOString()
  });
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        ตัวอย่าง: POST Request
      </h2>

      <CodeBlock
        filename="app/api/users/route.ts"
        language="typescript"
        code={`import { NextRequest, NextResponse } from 'next/server';

interface User {
  id: number;
  name: string;
  email: string;
}

// สมมติข้อมูล users
const users: User[] = [
  { id: 1, name: 'สมชาย', email: 'somchai@example.com' },
  { id: 2, name: 'สมหญิง', email: 'somying@example.com' },
];

// GET /api/users
export async function GET() {
  return NextResponse.json(users);
}

// POST /api/users
export async function POST(request: NextRequest) {
  const body = await request.json();
  
  const newUser: User = {
    id: users.length + 1,
    name: body.name,
    email: body.email,
  };
  
  users.push(newUser);
  
  return NextResponse.json(newUser, { status: 201 });
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        Dynamic Route Handlers
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        สร้าง API endpoint ที่รับ parameter แบบ dynamic
      </p>

      <CodeBlock
        filename="app/api/users/[id]/route.ts"
        language="typescript"
        code={`import { NextRequest, NextResponse } from 'next/server';

interface User {
  id: number;
  name: string;
  email: string;
}

// สมมติข้อมูล users
const users: User[] = [
  { id: 1, name: 'สมชาย', email: 'somchai@example.com' },
  { id: 2, name: 'สมหญิง', email: 'somying@example.com' },
];

type Props = {
  params: Promise<{ id: string }>;
};

// GET /api/users/:id
export async function GET(
  request: NextRequest,
  { params }: Props
) {
  const { id } = await params;
  const user = users.find((u) => u.id === parseInt(id));
  
  if (!user) {
    return NextResponse.json(
      { error: 'ไม่พบผู้ใช้' },
      { status: 404 }
    );
  }
  
  return NextResponse.json(user);
}

// DELETE /api/users/:id
export async function DELETE(
  request: NextRequest,
  { params }: Props
) {
  const { id } = await params;
  const index = users.findIndex((u) => u.id === parseInt(id));
  
  if (index === -1) {
    return NextResponse.json(
      { error: 'ไม่พบผู้ใช้' },
      { status: 404 }
    );
  }
  
  users.splice(index, 1);
  
  return NextResponse.json(
    { message: 'ลบผู้ใช้เรียบร้อยแล้ว' },
    { status: 200 }
  );
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        การจัดการ Query Parameters
      </h2>

      <CodeBlock
        filename="app/api/search/route.ts"
        language="typescript"
        code={`import { NextRequest, NextResponse } from 'next/server';

// GET /api/search?q=keyword&limit=10
export async function GET(request: NextRequest) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('q');
  const limit = parseInt(searchParams.get('limit') || '10');
  
  // สมมติการค้นหา
  const results = [
    { id: 1, title: \`ผลลัพธ์ 1 สำหรับ "\${query}"\` },
    { id: 2, title: \`ผลลัพธ์ 2 สำหรับ "\${query}"\` },
  ].slice(0, limit);
  
  return NextResponse.json({
    query,
    limit,
    results,
  });
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        การจัดการ Headers และ Cookies
      </h2>

      <CodeBlock
        filename="app/api/auth/route.ts"
        language="typescript"
        code={`import { NextRequest, NextResponse } from 'next/server';
import { cookies, headers } from 'next/headers';

export async function GET(request: NextRequest) {
  // อ่าน headers
  const headersList = await headers();
  const authHeader = headersList.get('authorization');
  
  // อ่าน cookies
  const cookieStore = await cookies();
  const token = cookieStore.get('token');
  
  if (!authHeader && !token) {
    return NextResponse.json(
      { error: 'ไม่ได้รับอนุญาต' },
      { status: 401 }
    );
  }
  
  return NextResponse.json({
    message: 'ยินดีต้อนรับ!',
    authenticated: true,
  });
}

export async function POST(request: NextRequest) {
  const body = await request.json();
  
  // สร้าง response พร้อม cookie
  const response = NextResponse.json({
    message: 'เข้าสู่ระบบสำเร็จ',
  });
  
  // ตั้งค่า cookie
  response.cookies.set('token', 'example-token-123', {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'strict',
    maxAge: 60 * 60 * 24, // 1 วัน
  });
  
  return response;
}`}
        showLineNumbers
      />

      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        การเรียกใช้ API จาก Client
      </h2>

      <CodeBlock
        filename="app/components/UsersList.tsx"
        language="tsx"
        code={`'use client';

import { useState, useEffect } from 'react';

interface User {
  id: number;
  name: string;
  email: string;
}

export default function UsersList() {
  const [users, setUsers] = useState<User[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/users')
      .then((res) => res.json())
      .then((data) => {
        setUsers(data);
        setLoading(false);
      });
  }, []);

  const addUser = async () => {
    const res = await fetch('/api/users', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: 'ผู้ใช้ใหม่',
        email: 'newuser@example.com',
      }),
    });
    
    const newUser = await res.json();
    setUsers([...users, newUser]);
  };

  if (loading) return <div>กำลังโหลด...</div>;

  return (
    <div>
      <button 
        onClick={addUser}
        className="mb-4 bg-blue-600 text-white px-4 py-2 rounded"
      >
        เพิ่มผู้ใช้
      </button>
      <ul className="space-y-2">
        {users.map((user) => (
          <li key={user.id} className="p-2 bg-gray-50 rounded">
            {user.name} - {user.email}
          </li>
        ))}
      </ul>
    </div>
  );
}`}
        showLineNumbers
      />

      <div className="mt-12 flex items-center justify-between">
        <Link
          href="/docs/data-fetching"
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
          ก่อนหน้า: การดึงข้อมูล
        </Link>
        <Link
          href="/docs/styling"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          ถัดไป: การจัดสไตล์
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
