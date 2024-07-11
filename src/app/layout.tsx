import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Link from 'next/link';
import { cn } from "@/lib/utils"
import "@/styles/globals.css";

import NavBar from "@/components/structural/NavBar";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
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

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable,
          "bg-gray-100"
        )} 
      >
        <NavBar />
        <main className="mt-20">
          {children}
        </main>
      </body>
    </html>
  );
}
