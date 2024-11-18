import "@uket/ui/globals.css";

import Nav from "@/components/Nav";
import { isMobile } from "@/utils/isMobile";
import AdminLogo from "@/components/AdminLogo";

export default function WithoutNavLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const mobile = isMobile();

  return (
    <main className="flex h-dvh flex-col items-center">
      {mobile ? (
        <header className="container sticky top-0">
          <Nav />
        </header>
      ) : (
        <div className="mt-36 items-center">
          <AdminLogo logo_style="w-32" font_style="text-lg font-medium" />
        </div>
      )}
      <main className="grow">{children}</main>
    </main>
  );
}
