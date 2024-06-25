import React from "react";
import Image from "next/image";

import LogoImage from "/public/logo.png";

const Nav = () => {
  return (
    <nav className="flex items-end gap-2 py-4">
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
    </nav>
  );
};

export default Nav;
