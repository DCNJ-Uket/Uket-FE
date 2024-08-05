import { useLocation } from "react-router-dom";
import { cn } from "@uket/ui/lib/utils";

import LandingLogoImage from "/landingLogo.png";

import Image from "./Image";

import { Link } from "@/router";

import LogoImage from "/logo.png";

interface LogoProps {
  onActivity?: boolean;
}

const Logo = (props: LogoProps) => {
  const { onActivity } = props;
  const { pathname } = useLocation();
  const imgSrc = ["/"].includes(pathname) ? LandingLogoImage : LogoImage;

  return (
    <Link to="/" className={cn(onActivity ? "pl-3 pt-2" : "")}>
      <Image src={imgSrc} width={62} loading="lazy" alt="로고" />
    </Link>
  );
};

export default Logo;
