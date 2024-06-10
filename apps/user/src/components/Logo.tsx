import { useLocation } from "react-router-dom";
import { cn } from "@uket/ui/lib/utils";

import LandingLogoImage from "../../public/landingLogo.png";

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
    <Link to="/" className={cn(onActivity ? "pl-6 pt-2" : "")}>
      <img src={imgSrc} width={62} loading="lazy" alt="로고" />
    </Link>
  );
};

export default Logo;
