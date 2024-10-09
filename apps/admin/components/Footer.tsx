"use client";

import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@ui/lib/utils";

// TODO: 실제 링크로 대체
const links = [
  {
    href: "/qr-scan",
    title: "QR 스캔하기",
  },
  {
    href: "#축제",
    title: "축제 정보 관리",
  },
  {
    href: "#입금",
    title: "입금 내역 확인",
  },
  {
    href: "#예매",
    title: "예매 내역 확인",
  },
];

const Footer = () => {
  const pathname = usePathname();

  return (
    <div className="flex h-14">
      {links.map(({ href, title }) => (
        <Link
          href={href}
          key={href}
          className={cn(
            "flex h-full grow items-center justify-center px-4 text-[10px] text-[#5E5E6E]",
            pathname === href && "text-brand border-brand border-t-2 font-bold",
          )}
        >
          {title}
        </Link>
      ))}
    </div>
  );
};

export default Footer;
