import type { Metadata } from "next";

import { Inter } from "next/font/google";
import "@uket/ui/globals.css";
import { Toaster } from "@ui/components/ui/toaster";

import Providers from "./providers";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Uket 어드민",
  description: "Uket 어드민을 위한 서비스입니다.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Providers>{children}</Providers>
        <Toaster />
      </body>
    </html>
  );
}
