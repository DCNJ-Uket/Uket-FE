import React from "react";

import AdminLogo from "@/components/AdminLogo";

import { useProfile } from "@/hooks/useProfile";

import { isMobile } from "@/utils/isMobile";

import LogoutModal from "./LogoutModal";

const Nav = async () => {
  const { isAuthenticated } = await useProfile();
  const mobile = isMobile();

  return (
    <nav className="flex items-center justify-between">
      <AdminLogo />
      {isAuthenticated && <LogoutModal isMobile={mobile} />}
    </nav>
  );
};

export default Nav;
