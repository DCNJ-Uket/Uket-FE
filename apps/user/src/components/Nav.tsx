import { useLocation } from "react-router-dom";
import { cn } from "@uket/ui/lib/utils";
import { Button } from "@uket/ui/components/ui/button";

import { useQueryUserInfo } from "@/hooks/queries/useQueryUserInfo";

import Profile from "./Profile";
import Logo from "./Logo";

import { Link, Path } from "@/router";

const PRIVATE: Path[] = ["/login", "/signup"];

const Nav = () => {
  const { pathname } = useLocation();
  const { data: userInfo } = useQueryUserInfo();
  const isPrivatePath = PRIVATE.includes(pathname as Path);
  const ladingPageTextColor = pathname === "/" && "text-white";

  const profileComponent = userInfo ? (
    <Button
      variant="link"
      className={cn("p-0 pt-1 font-bold", ladingPageTextColor)}
    >
      <Profile name={userInfo.name} profileImage={userInfo.profileImage} />
    </Button>
  ) : (
    <Link to="/login">
      <Button
        variant="link"
        className={cn("p-0 pt-1 font-bold", ladingPageTextColor)}
      >
        로그인
      </Button>
    </Link>
  );

  return (
    <nav className="container my-2 flex h-10 w-full items-center justify-between self-stretch">
      <Logo />
      {!isPrivatePath && profileComponent}
    </nav>
  );
};

export default Nav;
