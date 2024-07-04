import { getAccessToken } from "./handleToken";
import { getRefreshToken } from "./handleCookie";

import { Navigate } from "@/router";

// const PRIVATE: Path[] = ["/buy-ticket", "/ticket-list", "/signup"];
const PUBLIC_REGEX = /^\/login(?:\/([^/]+))?$/;

const Redirects = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated =
    !!getAccessToken() && !!getRefreshToken("refreshToken");
  const isValidLoginPath =
    location.pathname === "/login" && location.pathname.match(PUBLIC_REGEX);

  // const unAuthedOnPrivatepath =
  //   !isAuthenticated && PRIVATE.includes(location.pathname as Path);
  const authedOnPublicPath = isAuthenticated && isValidLoginPath;

  if (authedOnPublicPath) return <Navigate to="/" replace />;
  // if (unAuthedOnPrivatepath) return <Navigate to="/login" replace />;
  return children;
};

export default Redirects;
