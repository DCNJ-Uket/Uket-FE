import React from "react";
import { Button } from "@ui/components/ui/button";

import AdminLogo from "@/components/AdminLogo";

import { useProfile } from "@/hooks/useProfile";

const Nav = async () => {
  const { isAuthenticated } = await useProfile();

  return (
    <nav className="flex items-center justify-between">
      <AdminLogo />
      {isAuthenticated && (
        <aside>
          <Button variant="link" className="px-0 text-xs text-[#5E5E6E]">
            로그아웃
          </Button>
        </aside>
      )}
    </nav>
  );
};

export default Nav;
