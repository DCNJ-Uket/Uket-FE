import "@uket/ui/globals.css";
import { isBrowser } from "react-device-detect";

import SideNav from "@/components/SideNav";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      {isBrowser ? (
        <main className="flex h-dvh">
          <header className="sticky top-0">
            <SideNav />
          </header>
          <main className="grow">{children}</main>
        </main>
      ) : (
        <main className="flex h-dvh flex-col">
          <header className="container sticky top-0">
            <Nav />
          </header>
          <main className="grow">{children}</main>
          <footer>
            <Footer />
          </footer>
        </main>
      )}
    </>
  );
}
