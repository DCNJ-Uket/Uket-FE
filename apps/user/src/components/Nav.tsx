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
  const [previousPath, popPreviousPath] = usePreviousPath();

  if (pathname === "/signup") {
    return null;
  }

  const showLogo = ["/", "/home"].includes(pathname);
  const showProfile = !["/buy-ticket", "/myinfo", "/login"].includes(pathname);

  return (
    <nav
      className={cn(
        "my-2 flex h-10 w-full items-center justify-between self-stretch",
        {
          container: showLogo,
          "px-3.5": !showLogo,
        },
      )}
    >
      {showLogo ? (
        <>
          <Logo />
          {showProfile && (
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
        </>
      ) : (
        <Link to={previousPath} onClick={popPreviousPath}>
          <IconBack />
        </Link>
      )}
    </nav>
  );
};

export default Nav;
