import React from "react";
import Link from "next/link";
import Image from "next/image";

import LogoImage from "/public/logo.png";

import { Button } from "@ui/components/ui/button";

import { useProfile } from "@/hooks/useProfile";

const Nav = async () => {
  const { isAuthenticated } = await useProfile();

  return (
    <nav className="flex items-center justify-between">
      <Link href="/" className="flex items-end gap-2 py-4">
        <div className="relative w-16">
          <Image
            src={LogoImage}
            alt="로고"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
        <p className="text-brand flex flex-col justify-end text-sm font-bold">
          for admin
        </p>
      </Link>
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
