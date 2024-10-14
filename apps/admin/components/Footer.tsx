import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@ui/lib/utils";

import { LINKS } from "@/constants/link";

const Footer = () => {
  const pathname = usePathname();

  const links = LINKS;

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
