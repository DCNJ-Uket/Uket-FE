import type { Metadata } from "next";

import { Inter } from "next/font/google";

import "@uket/ui/globals.css";
import Nav from "@/components/Nav";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="flex h-dvh flex-col">
          <header className="container sticky top-0">
            <Nav />
          </header>
          <main className="grow">{children}</main>
        </main>
      </body>
    </html>
  );
}
