import { useLocation } from "react-router-dom";

import { useAuth } from "@/hooks/useAuth";

import { Button } from "./ui/button";
import Logo from "./Logo";

import { Link, Path } from "@/router";

const PRIVATE: Path[] = ["/login", "/signup"];

// TODO: 로그인한 사용자의 경우 로그인 버튼을 프로필 이미지와 이름으로 대체
const Nav = () => {
  const { pathname } = useLocation();
  const isPrivatePath = PRIVATE.includes(pathname as Path);
  const isAuthenticated = useAuth();
  const profileComponent = isAuthenticated ? (
    <Button variant="link" className="p-0 pt-1 font-bold">
      로그인됨
    </Button>
  ) : (
    <Link to="/login">
      <Button variant="link" className="p-0 pt-1 font-bold">
        로그인
      </Button>
    </Link>
  );

  return (
    <nav className="container flex justify-between items-center self-stretch my-2 w-full h-10">
      <Logo />
      {!isPrivatePath && profileComponent}
    </nav>
  );
};

export default Nav;
