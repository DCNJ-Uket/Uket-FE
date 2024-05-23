import { useLocation } from "react-router-dom";
import { Button } from "@uket/ui/components/ui/button";

import RetryErrorBoundary from "./RetryErrorBoundary";
import Profile from "./Profile";
import Logo from "./Logo";

import { Path } from "@/router";

const PRIVATE: Path[] = ["/login", "/signup"];

const Nav = () => {
  const { pathname } = useLocation();

  const isPrivatePath = PRIVATE.includes(pathname as Path);

  return (
    <nav className="container my-2 flex h-10 w-full items-center justify-between self-stretch">
      <Logo />
      {!isPrivatePath && (
        <RetryErrorBoundary fallbackComponent={<Button>다시 시도</Button>}>
          <Profile />
        </RetryErrorBoundary>
      )}
    </nav>
  );
};

export default Nav;
