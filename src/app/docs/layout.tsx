import Sidebar from '@/components/Sidebar';

export default function DocsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto max-w-7xl px-4 pt-20 sm:px-6 lg:px-8">
      <div className="flex gap-8">
        <Sidebar />
        <main className="min-w-0 flex-1 py-8">{children}</main>
      </div>
    </div>
  );
}
