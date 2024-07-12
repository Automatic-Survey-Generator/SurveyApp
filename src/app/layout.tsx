import type { Metadata } from "next";
import { Inter as FontSans } from "next/font/google";
import Link from 'next/link';
import { cn } from "@/lib/utils"
import "@/styles/globals.css";

import NavBar from "@/components/structural/NavBar";
import { getServerSession } from "next-auth";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
})
 
export const metadata: Metadata = {
  title: "Form Builder App",
  description: "A Google Forms-like application built with Next.js",
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const session = await getServerSession(); 
  return (
    <html lang="en">

      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased ",
          fontSans.variable,
          "bg-gray-100"
        )} 
      >
        <NavBar session={session} />
        <main className="mt-24 md:mt-0 pt-20 h-full">
          {children}
        </main>
      </body>
    </html>
  );
}
