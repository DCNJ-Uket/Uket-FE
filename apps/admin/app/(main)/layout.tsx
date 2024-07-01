import "@uket/ui/globals.css";
import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

export default function WithNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className="flex h-dvh flex-col">
      <header className="container sticky top-0">
        <Nav />
      </header>
      <main className="grow">{children}</main>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}
