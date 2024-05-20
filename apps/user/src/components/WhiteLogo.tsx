import React from "react";
import { cn } from "@uket/ui/lib/utils";

import { Link } from "@/router";

import WhiteLogoImg from "/whiteLogo.png";

interface LogoProps {
  onActivity?: boolean;
}

const WhiteLogo = (props: LogoProps) => {
  const { onActivity } = props;
  return (
    <Link to="/" className={cn(onActivity ? "pl-6 pt-2" : "")}>
      <img src={WhiteLogoImg} width={62} loading="lazy" alt="로고" />
    </Link>
  );
};

export default WhiteLogo;
