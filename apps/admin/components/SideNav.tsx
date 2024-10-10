"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@ui/lib/utils";

import LogoImage from "/public/logo.png";

import { LINKS } from "@/constants/link";

const SideNav = () => {
  const pathname = usePathname();

  const links = LINKS;

  return (
    <div className="flex h-full w-64 flex-col gap-5 bg-gray-100 px-5 py-10">
      <Link href="/">
        <div className="w-16">
          <Image
            src={LogoImage}
            alt="로고"
            width={200}
            height={200}
            className="object-cover"
          />
        </div>
      </Link>
      <div className="mb-8 text-sm">
        <p>안녕하세요,</p>
        <div className="flex-start flex gap-1">
          <p className="font-bold">건국대학교</p>
          <p>관리자님</p>
        </div>
      </div>
      <div className="-mx-5">
        {links.map(({ href, title }) => (
          <Link
            href={href}
            key={href}
            className={cn(
              "flex h-16 grow items-center px-5 text-sm  text-[#5E5E6E]",
              pathname === href && "bg-brand font-bold text-white",
            )}
          >
            {title}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default SideNav;
