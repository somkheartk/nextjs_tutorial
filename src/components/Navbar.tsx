'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-zinc-200 bg-white/80 backdrop-blur-md dark:border-zinc-800 dark:bg-zinc-900/80">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Link href="/" className="flex items-center gap-2">
              <svg
                className="h-6 w-6"
                viewBox="0 0 180 180"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <mask
                  id="mask0_408_139"
                  style={{ maskType: 'alpha' }}
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="0"
                  width="180"
                  height="180"
                >
                  <circle cx="90" cy="90" r="90" fill="black" />
                </mask>
                <g mask="url(#mask0_408_139)">
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
                    fill="url(#paint0_linear_408_139)"
                  />
                  <rect
                    x="115"
                    y="54"
                    width="12"
                    height="72"
                    fill="url(#paint1_linear_408_139)"
                  />
                </g>
                <defs>
                  <linearGradient
                    id="paint0_linear_408_139"
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
                    id="paint1_linear_408_139"
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
              <span className="text-lg font-bold text-zinc-900 dark:text-white">
                Next.js Tutorial
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:gap-6">
            <Link
              href="/docs/basics"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              พื้นฐาน
            </Link>
            <Link
              href="/docs/getting-started"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              เริ่มต้นใช้งาน
            </Link>
            <Link
              href="/docs/routing"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              การกำหนดเส้นทาง
            </Link>
            <Link
              href="/docs/data-fetching"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              การดึงข้อมูล
            </Link>
            <Link
              href="/docs/api-routes"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              API Routes
            </Link>
            <Link
              href="/docs/styling"
              className="text-sm font-medium text-zinc-600 transition-colors hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-white"
            >
              การจัดสไตล์
            </Link>
          </div>

          {/* Mobile menu button */}
          <button
            type="button"
            className="inline-flex items-center justify-center rounded-md p-2 text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 md:hidden dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <span className="sr-only">Open main menu</span>
            {mobileMenuOpen ? (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileMenuOpen && (
        <div className="md:hidden">
          <div className="space-y-1 border-t border-zinc-200 bg-white px-4 py-4 dark:border-zinc-800 dark:bg-zinc-900">
            <Link
              href="/docs/basics"
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              พื้นฐาน
            </Link>
            <Link
              href="/docs/getting-started"
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              เริ่มต้นใช้งาน
            </Link>
            <Link
              href="/docs/routing"
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              การกำหนดเส้นทาง
            </Link>
            <Link
              href="/docs/data-fetching"
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              การดึงข้อมูล
            </Link>
            <Link
              href="/docs/api-routes"
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              API Routes
            </Link>
            <Link
              href="/docs/styling"
              className="block rounded-md px-3 py-2 text-base font-medium text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white"
            >
              การจัดสไตล์
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}
