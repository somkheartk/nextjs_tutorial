import Link from 'next/link';

export default function DocsPage() {
  return (
    <div className="prose prose-zinc dark:prose-invert max-w-none">
      <h1 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
        เอกสารประกอบการเรียน Next.js
      </h1>
      <p className="mt-4 text-lg text-zinc-600 dark:text-zinc-400">
        ยินดีต้อนรับสู่คู่มือการเรียนรู้ Next.js ภาษาไทย ในเอกสารนี้คุณจะได้เรียนรู้การใช้งาน Next.js 
        ตั้งแต่พื้นฐานจนถึงขั้นสูง พร้อมตัวอย่างโค้ดและการประยุกต์ใช้งานจริง
      </p>

      <div className="mt-8 grid gap-4 md:grid-cols-2">
        <Link
          href="/docs/getting-started"
          className="group rounded-lg border border-zinc-200 p-6 transition-colors hover:border-blue-500 hover:bg-blue-50/50 dark:border-zinc-800 dark:hover:border-blue-500 dark:hover:bg-blue-900/20"
        >
          <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            เริ่มต้นใช้งาน →
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            เรียนรู้วิธีการติดตั้งและตั้งค่าโปรเจค Next.js ใหม่
          </p>
        </Link>

        <Link
          href="/docs/routing"
          className="group rounded-lg border border-zinc-200 p-6 transition-colors hover:border-blue-500 hover:bg-blue-50/50 dark:border-zinc-800 dark:hover:border-blue-500 dark:hover:bg-blue-900/20"
        >
          <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            การกำหนดเส้นทาง →
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            เรียนรู้ระบบ Routing ของ Next.js ด้วย App Router
          </p>
        </Link>

        <Link
          href="/docs/data-fetching"
          className="group rounded-lg border border-zinc-200 p-6 transition-colors hover:border-blue-500 hover:bg-blue-50/50 dark:border-zinc-800 dark:hover:border-blue-500 dark:hover:bg-blue-900/20"
        >
          <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            การดึงข้อมูล →
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            เรียนรู้การดึงข้อมูลด้วย Server Components และ Client Components
          </p>
        </Link>

        <Link
          href="/docs/api-routes"
          className="group rounded-lg border border-zinc-200 p-6 transition-colors hover:border-blue-500 hover:bg-blue-50/50 dark:border-zinc-800 dark:hover:border-blue-500 dark:hover:bg-blue-900/20"
        >
          <h2 className="text-xl font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
            API Routes →
          </h2>
          <p className="mt-2 text-zinc-600 dark:text-zinc-400">
            เรียนรู้การสร้าง API Endpoints ด้วย Route Handlers
          </p>
        </Link>
      </div>
    </div>
  );
}
