import { ACCESS_TOKEN, REFRESH_TOKEN } from "@uket/util/token";

import { Navigate, Path } from "@/router";

const PRIVATE: Path[] = ["/buy-ticket", "/ticket-list", "/signup", "/myinfo"];
const PUBLIC_REGEX = /^\/login(?:\/([^/]+))?$/;

const Redirects = ({ children }: { children: React.ReactNode }) => {
  const isAuthenticated =
    !!ACCESS_TOKEN.get() && !!REFRESH_TOKEN.get("refreshToken");
  const isValidLoginPath =
    location.pathname === "/login" && location.pathname.match(PUBLIC_REGEX);

  const unAuthedOnPrivatepath =
    !isAuthenticated && PRIVATE.includes(location.pathname as Path);
  const authedOnLoginPath = isAuthenticated && isValidLoginPath;

  if (authedOnLoginPath) return <Navigate to="/" replace />;
  if (unAuthedOnPrivatepath) return <Navigate to="/login" replace />;
  return children;
};

export default Redirects;
