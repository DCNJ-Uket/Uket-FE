import React from "react";
import Link from "next/link";
import Image from "next/image";
import { cn } from "@ui/lib/utils";

import LogoImage from "/public/logo.png";

interface AdminLogoProps {
  logo_style?: string;
  font_style?: string;
}

const AdminLogo = (props: AdminLogoProps) => {
  const { logo_style, font_style } = props;

  return (
    <Link href="/" className="flex items-end gap-2 py-4">
      <div className={cn("relative w-16", logo_style)}>
        <Image
          src={LogoImage}
          alt="로고"
          width={200}
          height={200}
          className="object-cover"
        />
      </div>
      <p
        className={cn(
          "text-brand flex flex-col justify-end text-sm font-bold",
          font_style,
        )}
      >
        for admin
      </p>
    </Link>
  );
};

export default AdminLogo;
