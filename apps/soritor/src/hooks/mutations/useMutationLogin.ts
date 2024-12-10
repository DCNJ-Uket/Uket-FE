import { useMutation, useQueryClient } from "@tanstack/react-query";

import { useNavigate } from "@/router";
import { login } from "@/api/auth";

import { AuthResponse, LoginRequestParams } from "@/types/authType";

import { setAccessToken } from "@/utils/handleToken";
import { deleteCookie, getCookie, setRefreshToken } from "@/utils/handleCookie";


export const useMutationLogin = () => {
  const navigate = useNavigate();
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ code, provider }: LoginRequestParams) =>
      login({ code, provider }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user-info"] });
    },
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
