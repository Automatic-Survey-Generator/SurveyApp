import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Link from 'next/link';
import "@/styles/globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Form Builder App",
  description: "A Google Forms-like application built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="flex justify-center items-center gap-4">
          <Link href="/">Home</Link>
          <Link href="/editor">Form Editor</Link>
          <Link href="/admin">Admin Panel</Link>
          <Link href="/login">Login</Link>
        </nav>
        {children}
      </body>
    </html>
  );
}
