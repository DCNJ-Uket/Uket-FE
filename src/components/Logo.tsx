import { Link } from "@/router";

import LogoImage from "/logo.png";

import { cn } from "@/lib/utils";

interface LogoProps {
  onActivity?: boolean;
}

const Logo = (props: LogoProps) => {
  const { onActivity } = props;
  return (
    <Link to="/main" className={cn(onActivity ? "pt-2 pl-6" : "")}>
      <img src={LogoImage} width={62} loading="lazy" alt="로고" />
    </Link>
  );
};

export default Logo;
