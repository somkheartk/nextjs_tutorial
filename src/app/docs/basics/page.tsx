import CodeBlock from '@/components/CodeBlock';
import Link from 'next/link';

export const metadata = {
  title: 'พื้นฐานที่ต้องรู้ก่อนเรียน Next.js | Next.js Tutorial',
  description: 'เรียนรู้พื้นฐาน React และ Next.js ก่อนเริ่มต้นพัฒนาเว็บแอปพลิเคชัน',
};

export default function BasicsPage() {
  return (
    <article className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        พื้นฐานที่ต้องรู้ก่อนเรียน Next.js
      </h1>

      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        ก่อนที่จะเริ่มต้นใช้งาน Next.js คุณควรเข้าใจพื้นฐานของ React และแนวคิดสำคัญต่างๆ 
        ในบทเรียนนี้เราจะเรียนรู้พื้นฐานที่จำเป็นอย่างละเอียด
      </p>

      {/* Section: What is React */}
      <div className="mt-8 rounded-lg border border-blue-200 bg-blue-50 p-6 dark:border-blue-800 dark:bg-blue-900/20">
        <h2 className="mt-0 text-2xl font-semibold text-blue-900 dark:text-blue-100">
          React คืออะไร?
        </h2>
        <p className="mb-0 text-blue-800 dark:text-blue-200">
          React เป็น JavaScript library ที่ใช้สำหรับสร้าง User Interface (UI) 
          พัฒนาโดย Facebook (Meta) มีหลักการทำงานแบบ Component-based 
          ซึ่งช่วยให้การพัฒนาเว็บเป็นเรื่องง่ายและมีประสิทธิภาพ
        </p>
      </div>

      {/* Section: What is Next.js */}
      <div className="mt-4 rounded-lg border border-purple-200 bg-purple-50 p-6 dark:border-purple-800 dark:bg-purple-900/20">
        <h2 className="mt-0 text-2xl font-semibold text-purple-900 dark:text-purple-100">
          Next.js คืออะไร?
        </h2>
        <p className="mb-0 text-purple-800 dark:text-purple-200">
          Next.js เป็น React Framework ที่เพิ่มความสามารถพิเศษให้กับ React เช่น 
          Server-Side Rendering (SSR), Static Site Generation (SSG), 
          File-based Routing และอื่นๆ อีกมากมาย ช่วยให้การพัฒนาเว็บแอปพลิเคชันสมบูรณ์แบบยิ่งขึ้น
        </p>
      </div>

      {/* Section: React vs Next.js */}
      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        React กับ Next.js ต่างกันอย่างไร?
      </h2>

      <div className="mt-4 overflow-hidden rounded-lg border border-zinc-200 dark:border-zinc-800">
        <table className="min-w-full divide-y divide-zinc-200 dark:divide-zinc-800">
          <thead className="bg-zinc-50 dark:bg-zinc-900">
            <tr>
              <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                คุณสมบัติ
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                React
              </th>
              <th className="px-4 py-3 text-left text-sm font-semibold text-zinc-900 dark:text-white">
                Next.js
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-zinc-200 bg-white dark:divide-zinc-800 dark:bg-zinc-950">
            <tr>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">ประเภท</td>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">Library</td>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">Framework</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">Routing</td>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">ต้องติดตั้งเพิ่ม (react-router)</td>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">มี Built-in (File-based)</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">Rendering</td>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">Client-Side เท่านั้น</td>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">SSR, SSG, CSR, ISR</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">SEO</td>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">ยากที่จะทำให้ดี</td>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">รองรับได้ดีมาก</td>
            </tr>
            <tr>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">API Routes</td>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">ไม่มี</td>
              <td className="px-4 py-3 text-sm text-zinc-600 dark:text-zinc-400">มี Built-in</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Section: Understanding Components */}
      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        Component คืออะไร?
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Component เป็นชิ้นส่วนย่อยของ UI ที่สามารถ reuse ได้ 
        คิดง่ายๆ ว่าเหมือนตัวต่อเลโก้ที่นำมาประกอบกันเป็นหน้าเว็บ
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Function Component (แนะนำ)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            เป็นฟังก์ชัน JavaScript ที่ return JSX ง่ายต่อการเขียนและเข้าใจ
          </p>
        </div>
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            Class Component (แบบเก่า)
          </h3>
          <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
            ใช้ class ของ JavaScript ปัจจุบันไม่นิยมใช้แล้ว
          </p>
        </div>
      </div>

      <CodeBlock
        filename="ตัวอย่าง Function Component"
        language="tsx"
        code={`// นี่คือ Component อย่างง่าย
function Greeting() {
  return (
    <div>
      <h1>สวัสดี!</h1>
      <p>ยินดีต้อนรับสู่เว็บไซต์ของเรา</p>
    </div>
  );
}

// Component ที่รับ props
function Welcome({ name }: { name: string }) {
  return <h1>สวัสดี, {name}!</h1>;
}

// การใช้งาน
function App() {
  return (
    <div>
      <Greeting />
      <Welcome name="สมชาย" />
    </div>
  );
}`}
        showLineNumbers
      />

      {/* Section: JSX */}
      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        JSX คืออะไร?
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        JSX (JavaScript XML) เป็น syntax extension ที่ช่วยให้เราเขียน HTML ภายใน JavaScript ได้ 
        มันถูกแปลงเป็น JavaScript ปกติก่อนที่จะรันในเบราว์เซอร์
      </p>

      <div className="mt-4 rounded-lg border border-yellow-200 bg-yellow-50 p-4 dark:border-yellow-800 dark:bg-yellow-900/20">
        <h3 className="mt-0 text-lg font-semibold text-yellow-900 dark:text-yellow-100">
          กฎสำคัญของ JSX
        </h3>
        <ul className="mb-0 mt-2 space-y-2 text-yellow-800 dark:text-yellow-200">
          <li>✅ ต้อง return element เดียว (ใช้ <code>&lt;div&gt;</code> หรือ <code>&lt;&gt;</code> ครอบ)</li>
          <li>✅ ต้องปิด tag ทุกตัว (เช่น <code>&lt;img /&gt;</code>)</li>
          <li>✅ ใช้ <code>className</code> แทน <code>class</code></li>
          <li>✅ ใช้ <code>htmlFor</code> แทน <code>for</code></li>
          <li>✅ ใส่ JavaScript expression ใน <code>{'{}'}</code></li>
        </ul>
      </div>

      <CodeBlock
        filename="ตัวอย่าง JSX"
        language="tsx"
        code={`// JSX พื้นฐาน
function MyComponent() {
  const name = "สมหญิง";
  const isLoggedIn = true;
  const items = ["แอปเปิ้ล", "กล้วย", "ส้ม"];

  return (
    <div className="container">
      {/* ใส่ตัวแปรใน JSX */}
      <h1>สวัสดี, {name}</h1>
      
      {/* Conditional Rendering */}
      {isLoggedIn ? (
        <p>ยินดีต้อนรับกลับมา!</p>
      ) : (
        <p>กรุณาเข้าสู่ระบบ</p>
      )}
      
      {/* Loop แสดงรายการ */}
      <ul>
        {items.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
      
      {/* Event Handler */}
      <button onClick={() => alert('คลิกแล้ว!')}>
        คลิกฉันสิ
      </button>
    </div>
  );
}`}
        showLineNumbers
      />

      {/* Section: Props */}
      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        Props คืออะไร?
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        Props (Properties) คือข้อมูลที่ส่งจาก Component แม่ ไปยัง Component ลูก 
        เปรียบเหมือนการส่ง parameter ให้ฟังก์ชัน Props เป็น read-only ไม่สามารถแก้ไขได้
      </p>

      <CodeBlock
        filename="ตัวอย่าง Props"
        language="tsx"
        code={`// กำหนด type สำหรับ props
interface CardProps {
  title: string;
  description: string;
  imageUrl?: string;  // optional prop
  onClick?: () => void;  // optional function prop
}

// Component ที่รับ props
function Card({ title, description, imageUrl, onClick }: CardProps) {
  return (
    <div className="card" onClick={onClick}>
      {imageUrl && <img src={imageUrl} alt={title} />}
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
}

// การใช้งาน
function App() {
  const handleClick = () => {
    console.log('Card ถูกคลิก!');
  };

  return (
    <div>
      {/* ส่ง props ให้ Card component */}
      <Card 
        title="บทความที่ 1" 
        description="เนื้อหาบทความที่น่าสนใจ"
        imageUrl="/images/article1.jpg"
        onClick={handleClick}
      />
      
      {/* ไม่ส่ง optional props ก็ได้ */}
      <Card 
        title="บทความที่ 2" 
        description="บทความนี้ไม่มีรูป"
      />
    </div>
  );
}`}
        showLineNumbers
      />

      {/* Section: State */}
      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        State คืออะไร?
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        State คือข้อมูลที่ Component จัดเก็บและจัดการเอง เมื่อ State เปลี่ยน 
        Component จะ re-render เพื่อแสดงผลใหม่ ใช้ <code>useState</code> hook ในการจัดการ State
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-green-200 bg-green-50 p-4 dark:border-green-800 dark:bg-green-900/20">
          <h3 className="mt-0 text-lg font-semibold text-green-900 dark:text-green-100">
            Props
          </h3>
          <ul className="mb-0 mt-2 text-sm text-green-800 dark:text-green-200">
            <li>• ส่งจากภายนอก (parent)</li>
            <li>• Read-only ไม่แก้ไขได้</li>
            <li>• เหมือน parameter</li>
          </ul>
        </div>
        <div className="rounded-lg border border-blue-200 bg-blue-50 p-4 dark:border-blue-800 dark:bg-blue-900/20">
          <h3 className="mt-0 text-lg font-semibold text-blue-900 dark:text-blue-100">
            State
          </h3>
          <ul className="mb-0 mt-2 text-sm text-blue-800 dark:text-blue-200">
            <li>• จัดการภายใน component</li>
            <li>• แก้ไขได้ผ่าน setter function</li>
            <li>• เปลี่ยนแล้ว re-render</li>
          </ul>
        </div>
      </div>

      <CodeBlock
        filename="ตัวอย่าง State (useState)"
        language="tsx"
        code={`'use client';  // ต้องใส่ใน Next.js เมื่อใช้ hooks

import { useState } from 'react';

function Counter() {
  // สร้าง state: count เริ่มต้นที่ 0
  // setCount คือฟังก์ชันสำหรับอัปเดต count
  const [count, setCount] = useState(0);

  return (
    <div className="text-center p-8">
      <h1 className="text-4xl font-bold">{count}</h1>
      <div className="mt-4 space-x-2">
        <button 
          onClick={() => setCount(count - 1)}
          className="px-4 py-2 bg-red-500 text-white rounded"
        >
          ลด
        </button>
        <button 
          onClick={() => setCount(count + 1)}
          className="px-4 py-2 bg-green-500 text-white rounded"
        >
          เพิ่ม
        </button>
        <button 
          onClick={() => setCount(0)}
          className="px-4 py-2 bg-gray-500 text-white rounded"
        >
          รีเซ็ต
        </button>
      </div>
    </div>
  );
}

// ตัวอย่าง State แบบ object
function UserForm() {
  const [user, setUser] = useState({
    name: '',
    email: '',
    age: 0
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUser(prev => ({
      ...prev,  // เก็บค่าเดิมไว้
      [name]: value  // อัปเดตเฉพาะที่เปลี่ยน
    }));
  };

  return (
    <form className="space-y-4">
      <input 
        name="name"
        value={user.name}
        onChange={handleChange}
        placeholder="ชื่อ"
        className="border p-2 rounded w-full"
      />
      <input 
        name="email"
        value={user.email}
        onChange={handleChange}
        placeholder="อีเมล"
        className="border p-2 rounded w-full"
      />
      <p>สวัสดี {user.name || 'เพื่อน'}!</p>
    </form>
  );
}`}
        showLineNumbers
      />

      {/* Section: useEffect */}
      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        useEffect คืออะไร?
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        <code>useEffect</code> ใช้สำหรับจัดการ side effects เช่น การดึงข้อมูล การติดตาม events 
        หรือการจัดการกับ DOM โดยตรง
      </p>

      <CodeBlock
        filename="ตัวอย่าง useEffect"
        language="tsx"
        code={`'use client';

import { useState, useEffect } from 'react';

function DataFetcher() {
  const [data, setData] = useState<string[]>([]);
  const [loading, setLoading] = useState(true);

  // useEffect จะทำงานหลังจาก component render
  useEffect(() => {
    // ดึงข้อมูลจาก API
    async function fetchData() {
      try {
        const response = await fetch('https://api.example.com/items');
        const result = await response.json();
        setData(result);
      } catch (error) {
        console.error('Error:', error);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, []); // [] = ทำงานครั้งเดียวตอน mount

  if (loading) return <p>กำลังโหลด...</p>;

  return (
    <ul>
      {data.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

// ตัวอย่าง useEffect ที่ติดตามการเปลี่ยนแปลง
function SearchComponent() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<string[]>([]);

  useEffect(() => {
    // ทำงานทุกครั้งที่ query เปลี่ยน
    if (query.length > 2) {
      // สมมติว่าค้นหาข้อมูล
      console.log('ค้นหา:', query);
    }
  }, [query]); // [query] = ทำงานเมื่อ query เปลี่ยน

  return (
    <input
      value={query}
      onChange={(e) => setQuery(e.target.value)}
      placeholder="ค้นหา..."
    />
  );
}

// useEffect กับ cleanup function
function Timer() {
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    // สร้าง interval
    const intervalId = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    // cleanup function - ทำงานเมื่อ component unmount
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  return <p>เวลา: {seconds} วินาที</p>;
}`}
        showLineNumbers
      />

      {/* Section: Server vs Client Components */}
      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        Server Components vs Client Components
      </h2>
      <p className="mt-4 text-zinc-600 dark:text-zinc-400">
        ใน Next.js 13+ มีแนวคิด Server Components และ Client Components 
        ซึ่งเป็นหัวใจสำคัญของ App Router
      </p>

      <div className="mt-4 grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            🖥️ Server Components (ค่าเริ่มต้น)
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <li>• Render บน server</li>
            <li>• ดึงข้อมูลได้โดยตรง</li>
            <li>• ไม่มี JavaScript ส่งไป client</li>
            <li>• ใช้ไม่ได้กับ useState, useEffect</li>
            <li>• SEO ดี</li>
          </ul>
        </div>
        <div className="rounded-lg border border-zinc-200 p-4 dark:border-zinc-800">
          <h3 className="text-lg font-semibold text-zinc-900 dark:text-white">
            💻 Client Components
          </h3>
          <ul className="mt-2 space-y-1 text-sm text-zinc-600 dark:text-zinc-400">
            <li>• Render บน browser</li>
            <li>• ใช้ได้กับ useState, useEffect</li>
            <li>• ใช้ได้กับ event handlers</li>
            <li>• ต้องใส่ <code>&apos;use client&apos;</code> ที่บรรทัดแรก</li>
            <li>• เหมาะกับ interactivity</li>
          </ul>
        </div>
      </div>

      <CodeBlock
        filename="ตัวอย่าง Server และ Client Components"
        language="tsx"
        code={`// app/posts/page.tsx - Server Component (ค่าเริ่มต้น)
// ไม่ต้องใส่ 'use client'

async function getPosts() {
  const res = await fetch('https://api.example.com/posts');
  return res.json();
}

export default async function PostsPage() {
  // ดึงข้อมูลบน server ได้เลย
  const posts = await getPosts();

  return (
    <div>
      <h1>บทความทั้งหมด</h1>
      {posts.map((post: { id: number; title: string }) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
      {/* ใช้ Client Component ภายใน */}
      <LikeButton />
    </div>
  );
}

// app/components/LikeButton.tsx - Client Component
'use client';

import { useState } from 'react';

export default function LikeButton() {
  const [likes, setLikes] = useState(0);

  return (
    <button onClick={() => setLikes(likes + 1)}>
      ❤️ {likes} likes
    </button>
  );
}`}
        showLineNumbers
      />

      {/* Section: Summary */}
      <h2 className="mt-8 text-2xl font-semibold text-zinc-900 dark:text-white">
        สรุปพื้นฐานที่สำคัญ
      </h2>

      <div className="mt-4 rounded-lg border border-zinc-200 bg-zinc-50 p-6 dark:border-zinc-800 dark:bg-zinc-900">
        <ul className="space-y-3 text-zinc-600 dark:text-zinc-400">
          <li className="flex items-start gap-2">
            <span className="text-xl">📦</span>
            <span><strong>Component:</strong> ชิ้นส่วน UI ที่ reuse ได้ เขียนเป็น function ที่ return JSX</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">📝</span>
            <span><strong>JSX:</strong> syntax ที่เขียน HTML ใน JavaScript ใช้ {'{}'} สำหรับ expression</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">📤</span>
            <span><strong>Props:</strong> ข้อมูลที่ส่งจาก parent ไป child component (read-only)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">🔄</span>
            <span><strong>State:</strong> ข้อมูลที่ component จัดการเอง ใช้ useState เมื่อเปลี่ยนแล้ว re-render</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">⚡</span>
            <span><strong>useEffect:</strong> จัดการ side effects เช่น ดึงข้อมูล, event listeners</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">🖥️</span>
            <span><strong>Server Components:</strong> render บน server, ดึงข้อมูลได้โดยตรง (ค่าเริ่มต้นใน Next.js)</span>
          </li>
          <li className="flex items-start gap-2">
            <span className="text-xl">💻</span>
            <span><strong>Client Components:</strong> render บน browser, ใช้ได้กับ hooks และ events (ใส่ &apos;use client&apos;)</span>
          </li>
        </ul>
      </div>

      <div className="mt-8 rounded-lg border border-green-200 bg-green-50 p-6 dark:border-green-800 dark:bg-green-900/20">
        <h3 className="mt-0 text-lg font-semibold text-green-900 dark:text-green-100">
          💡 เคล็ดลับสำหรับผู้เริ่มต้น
        </h3>
        <ul className="mb-0 mt-2 space-y-2 text-green-800 dark:text-green-200">
          <li>1. เริ่มจาก Server Components ก่อน เพิ่ม &apos;use client&apos; เมื่อต้องการใช้ hooks</li>
          <li>2. แยก component ให้เล็กและทำหน้าที่เดียว</li>
          <li>3. ใช้ TypeScript เพื่อช่วยตรวจสอบ type</li>
          <li>4. อ่าน error message อย่างละเอียด มันช่วยได้มาก!</li>
          <li>5. ฝึกสร้างโปรเจคเล็กๆ ก่อนเริ่มโปรเจคใหญ่</li>
        </ul>
      </div>

      <div className="mt-12 flex justify-end">
        <Link
          href="/docs/getting-started"
          className="inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-blue-700"
        >
          ถัดไป: เริ่มต้นใช้งาน
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
