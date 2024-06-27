import { Link, useLocation } from "react-router-dom";
import { FallbackProps } from "react-error-boundary";
import { cn } from "@uket/ui/lib/utils";
import { IconBack } from "@stackflow/plugin-basic-ui";

import usePreviousPath from "@/hooks/usePreviousPath";

import Profile from "./Profile";
import Logo from "./Logo";
import LoginErrorFallback from "./fallback/LoginErrorFallback";
import RetryErrorBoundary from "./error/RetryErrorBoundary";

const Nav = () => {
  const { pathname } = useLocation();
  const previousPath = usePreviousPath();

  return (
    <>
      {["/", "/home"].includes(pathname) ? (
        <nav className="container my-2 flex h-10 w-full items-center justify-between self-stretch">
          <Logo />
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
        </nav>
      ) : (
        <nav className="my-2 flex h-10 w-full items-center justify-between self-stretch pl-[14px]">
          <Link to={previousPath}>
            <IconBack />
          </Link>
        </nav>
      )}
    </>
  );
};

export default Nav;
