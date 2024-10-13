import "@uket/ui/globals.css";
import { isMobile } from "react-device-detect";

import Nav from "@/components/Nav";

export default function WithoutNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-dvh flex-col">
      {isMobile && (
        <header className="container sticky top-0">
          <Nav />
        </header>
      )}
      <main className="grow">{children}</main>
    </main>
  );
}
