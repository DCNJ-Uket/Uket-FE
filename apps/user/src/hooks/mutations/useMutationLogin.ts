import { useMutation } from "@tanstack/react-query";

import { AuthResponse, LoginRequestParams } from "@/types/authType";

import { setAccessToken } from "@/utils/handleToken";
import { deleteCookie, getCookie, setRefreshToken } from "@/utils/handleCookie";

import { useNavigate } from "@/router";
import { login } from "@/api/auth";

export const useMutationLogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ code, provider }: LoginRequestParams) =>
      login({ code, provider }),
    onSuccess: ({ accessToken, refreshToken, isRegistered }: AuthResponse) => {
      setAccessToken(accessToken);
      setRefreshToken("refreshToken", refreshToken);

      if (isRegistered) {
        const login_redirect_url = getCookie("login_redirect_url");
        if (login_redirect_url) {
          deleteCookie("login_redirect_url", {
            path: "/",
          });

          navigate(login_redirect_url, {
            replace: true,
          });
          return;
        } else {
          navigate("/", {
            replace: true,
          });
        }
      } else {
        navigate("/signup", {
          state: { isUnRegistered: true },
          replace: true,
        });
      }
    },
  });

  return mutation;
};
