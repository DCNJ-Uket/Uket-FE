import { useLocation } from "react-router-dom";
import { FallbackProps } from "react-error-boundary";
import { cn } from "@uket/ui/lib/utils";

import Profile from "./Profile";
import Logo from "./Logo";
import LoginErrorFallback from "./fallback/LoginErrorFallback";
import RetryErrorBoundary from "./error/RetryErrorBoundary";

import { Path } from "@/router";

const PRIVATE: Path[] = ["/login", "/signup"];

const Nav = () => {
  const { pathname } = useLocation();
  const isPrivatePath = PRIVATE.includes(pathname as Path);

  return (
    <nav className="container my-2 flex h-10 w-full items-center justify-between self-stretch">
      <Logo />
      {!isPrivatePath && (
        <RetryErrorBoundary
          resetKeys={["user-info"]}
          fallbackComponent={(props: FallbackProps) => (
            <LoginErrorFallback
              className={cn("text-black", pathname === "/" && "text-white")}
              {...props}
            />
          )}
        >
          <Profile />
        </RetryErrorBoundary>
      )}
    </nav>
  );
};

export default Nav;
