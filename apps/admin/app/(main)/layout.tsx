import "@uket/ui/globals.css";

import SideNav from "@/components/SideNav";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";
import { isMobile } from "@/utils/isMobile";
import { cn } from "@ui/lib/utils";

export default function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mobile = isMobile();

  return (
    <>
      <main className={cn("flex h-dvh", mobile && "flex-col")}>
        <header className={cn("sticky top-0", mobile && "container")}>
          {mobile ? <Nav /> : <SideNav />}
        </header>
        <main className="grow">{children}</main>
        <footer>{mobile && <Footer />}</footer>
      </main>
    </>
  );
}
