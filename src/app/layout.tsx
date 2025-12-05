import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";

export const metadata: Metadata = {
  title: "Next.js Tutorial - เรียน Next.js ภาษาไทย",
  description: "คู่มือการเรียนรู้ Next.js ภาษาไทย พร้อมตัวอย่างโค้ดและคำอธิบายอย่างละเอียด",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="th">
      <body className="font-sans antialiased">
        <Navbar />
        {children}
      </body>
    </html>
  );
}
