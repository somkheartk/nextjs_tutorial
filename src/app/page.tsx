import Link from "next/link";

export default function Home() {
  const features = [
    {
      title: "Server Components",
      description: "เรนเดอร์ components บน server เพื่อประสิทธิภาพที่ดีขึ้น",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01"
          />
        </svg>
      ),
    },
    {
      title: "File-based Routing",
      description: "กำหนดเส้นทางอัตโนมัติตามโครงสร้างโฟลเดอร์",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"
          />
        </svg>
      ),
    },
    {
      title: "API Routes",
      description: "สร้าง API endpoints ได้ง่ายดายภายในโปรเจคเดียวกัน",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
          />
        </svg>
      ),
    },
    {
      title: "TypeScript",
      description: "รองรับ TypeScript built-in สำหรับการพัฒนาที่มั่นคง",
      icon: (
        <svg
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
    },
  ];

  const tutorials = [
    {
      title: "เริ่มต้นใช้งาน",
      description: "เรียนรู้การติดตั้งและตั้งค่าโปรเจค Next.js ใหม่",
      href: "/docs/getting-started",
      tag: "เริ่มต้น",
    },
    {
      title: "การกำหนดเส้นทาง",
      description: "เรียนรู้ระบบ Routing ของ Next.js ด้วย App Router",
      href: "/docs/routing",
      tag: "พื้นฐาน",
    },
    {
      title: "การดึงข้อมูล",
      description:
        "เรียนรู้การดึงข้อมูลด้วย Server Components และ Client Components",
      href: "/docs/data-fetching",
      tag: "พื้นฐาน",
    },
    {
      title: "API Routes",
      description: "เรียนรู้การสร้าง API Endpoints ด้วย Route Handlers",
      href: "/docs/api-routes",
      tag: "ขั้นกลาง",
    },
    {
      title: "การจัดสไตล์",
      description:
        "เรียนรู้วิธีการจัดสไตล์ด้วย CSS, Tailwind CSS และ CSS-in-JS",
      href: "/docs/styling",
      tag: "พื้นฐาน",
    },
  ];

  return (
    <div className="min-h-screen bg-white dark:bg-zinc-950">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-32 pb-20">
        {/* Background gradient */}
        <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-zinc-950">
          <div className="absolute bottom-auto left-auto right-0 top-0 h-[500px] w-[500px] -translate-x-[30%] translate-y-[20%] rounded-full bg-blue-500/30 opacity-50 blur-[80px] dark:bg-blue-500/20"></div>
          <div className="absolute bottom-auto right-auto left-0 top-0 h-[500px] w-[500px] translate-x-[10%] translate-y-[30%] rounded-full bg-purple-500/30 opacity-50 blur-[80px] dark:bg-purple-500/20"></div>
        </div>

        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Next.js Logo */}
            <div className="mb-8 flex justify-center">
              <svg
                className="h-20 w-20"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0"
                  style={{ maskType: "alpha" }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="180"
                  height="180"
                >
                  <circle cx="90" cy="90" r="90" fill="black" />
                </mask>
                <g mask="url(#mask0)">
                  <circle
                    cx="90"
                    cy="90"
                    r="87"
                    fill="black"
                    stroke="white"
                    strokeWidth="6"
                  />
                  <path
                    d="M149.508 157.52L69.142 54H54V125.97H66.1136V69.3836L139.999 164.845C143.333 162.614 146.509 160.165 149.508 157.52Z"
                    fill="url(#paint0)"
                  />
                  <rect
                    x="115"
                    y="54"
                    width="12"
                    height="72"
                    fill="url(#paint1)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0"
                    x1="109"
                    y1="116.5"
                    x2="144.5"
                    y2="160.5"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                  <linearGradient
                    id="paint1"
                    x1="121"
                    y1="54"
                    x2="120.799"
                    y2="106.875"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="white" stopOpacity="0" />
                  </linearGradient>
                </defs>
              </svg>
            </div>

            <h1 className="text-4xl font-bold tracking-tight text-zinc-900 sm:text-6xl dark:text-white">
              เรียนรู้ Next.js
              <br />
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                ภาษาไทย
              </span>
            </h1>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-zinc-600 dark:text-zinc-400">
              คู่มือการเรียนรู้ Next.js ฉบับภาษาไทย พร้อมตัวอย่างโค้ดและคำอธิบายอย่างละเอียด
              เหมาะสำหรับผู้เริ่มต้นและนักพัฒนาที่ต้องการเพิ่มทักษะ
            </p>

            <div className="mt-10 flex items-center justify-center gap-4">
              <Link
                href="/docs/getting-started"
                className="rounded-full bg-zinc-900 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-zinc-700 dark:bg-white dark:text-zinc-900 dark:hover:bg-zinc-200"
              >
                เริ่มเรียนเลย
              </Link>
              <Link
                href="/docs"
                className="rounded-full border border-zinc-200 bg-white px-6 py-3 text-sm font-semibold text-zinc-900 shadow-sm transition-all hover:bg-zinc-50 dark:border-zinc-800 dark:bg-zinc-900 dark:text-white dark:hover:bg-zinc-800"
              >
                ดูเอกสาร
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              ทำไมต้อง Next.js?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
              Next.js เป็น React Framework ที่ได้รับความนิยมสูงสุด
              ด้วยฟีเจอร์ที่ทรงพลังและง่ายต่อการใช้งาน
            </p>
          </div>

          <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((feature, index) => (
              <div
                key={index}
                className="rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-all hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-blue-100 text-blue-600 dark:bg-blue-900/30 dark:text-blue-400">
                  {feature.icon}
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 dark:text-white">
                  {feature.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tutorials Section */}
      <section className="py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
              บทเรียน
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
              เริ่มต้นเรียนรู้ Next.js ตั้งแต่พื้นฐานจนถึงขั้นสูง
            </p>
          </div>

          <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {tutorials.map((tutorial, index) => (
              <Link
                key={index}
                href={tutorial.href}
                className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-blue-500 hover:shadow-lg dark:border-zinc-800 dark:bg-zinc-900 dark:hover:border-blue-500"
              >
                <div className="flex items-center justify-between">
                  <span className="inline-block rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-700 dark:bg-blue-900/30 dark:text-blue-400">
                    {tutorial.tag}
                  </span>
                  <svg
                    className="h-5 w-5 text-zinc-400 transition-transform group-hover:translate-x-1 group-hover:text-blue-500"
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
                </div>
                <h3 className="mt-4 text-lg font-semibold text-zinc-900 group-hover:text-blue-600 dark:text-white dark:group-hover:text-blue-400">
                  {tutorial.title}
                </h3>
                <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
                  {tutorial.description}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-zinc-200 bg-zinc-50 py-20 dark:border-zinc-800 dark:bg-zinc-900/50">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-zinc-900 dark:text-white">
            พร้อมที่จะเริ่มต้นหรือยัง?
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-zinc-600 dark:text-zinc-400">
            เริ่มต้นสร้างเว็บแอปพลิเคชันที่ทันสมัยด้วย Next.js วันนี้
          </p>
          <div className="mt-8">
            <Link
              href="/docs/getting-started"
              className="inline-flex items-center gap-2 rounded-full bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-blue-700"
            >
              เริ่มเรียนเลย
              <svg
                className="h-4 w-4"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17 8l4 4m0 0l-4 4m4-4H3"
                />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-200 py-8 dark:border-zinc-800">
        <div className="mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <p className="text-sm text-zinc-500 dark:text-zinc-400">
            © 2024 Next.js Tutorial ภาษาไทย - สร้างด้วย ❤️
          </p>
        </div>
      </footer>
    </div>
  );
}
