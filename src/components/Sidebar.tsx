'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const navigation = [
  {
    title: 'เริ่มต้น',
    items: [
      { title: 'การติดตั้ง', href: '/docs/getting-started' },
    ],
  },
  {
    title: 'หลักการพื้นฐาน',
    items: [
      { title: 'การกำหนดเส้นทาง', href: '/docs/routing' },
      { title: 'การดึงข้อมูล', href: '/docs/data-fetching' },
      { title: 'API Routes', href: '/docs/api-routes' },
      { title: 'การจัดสไตล์', href: '/docs/styling' },
    ],
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden w-64 shrink-0 lg:block">
      <nav className="sticky top-20 h-[calc(100vh-5rem)] overflow-y-auto py-6 pr-4">
        {navigation.map((section) => (
          <div key={section.title} className="mb-6">
            <h3 className="mb-2 text-sm font-semibold text-zinc-900 dark:text-white">
              {section.title}
            </h3>
            <ul className="space-y-1">
              {section.items.map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                      pathname === item.href
                        ? 'bg-blue-50 font-medium text-blue-600 dark:bg-blue-900/30 dark:text-blue-400'
                        : 'text-zinc-600 hover:bg-zinc-100 hover:text-zinc-900 dark:text-zinc-400 dark:hover:bg-zinc-800 dark:hover:text-white'
                    }`}
                  >
                    {item.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
