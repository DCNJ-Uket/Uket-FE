import React from "react";

import AuthSection from "./_components/AuthSection";
import { isMobile } from "@/utils/isMobile";
import { cn } from "@ui/lib/utils";

export default function AuthPage() {
  const mobile = isMobile();

  return (
    <main
      className={cn("flex h-full flex-col", mobile ? "w-full" : "container max-w-sm")}
    >
      {mobile && <h1 className="font-black text-2xl">관리자 로그인</h1>}
      <AuthSection />
    </main>
  );
}
