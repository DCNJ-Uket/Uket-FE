import { useLocation } from "react-router-dom";

import { Link } from "@/router";

import LogoImage from "/logo.png";
import LandingLogoImage from "/landingLogo.png";

import { cn } from "@/lib/utils";

interface LogoProps {
  onActivity?: boolean;
}

const Logo = (props: LogoProps) => {
  const { onActivity } = props;
  const { pathname } = useLocation();
  const imgSrc = ["/", "/ticket-detail"].includes(pathname)
    ? LandingLogoImage
    : LogoImage;

  return (
    <Link to="/" className={cn(onActivity ? "pl-6 pt-2" : "")}>
      <img src={imgSrc} width={62} loading="lazy" alt="로고" />
    </Link>
  );
};

export default Logo;
