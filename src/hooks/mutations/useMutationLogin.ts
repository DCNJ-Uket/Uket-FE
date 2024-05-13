import { useMutation } from "@tanstack/react-query";

import { AuthResponse, LoginRequestParams } from "@/types/authType";

import { setAccessToken } from "@/utils/handleToken";
import { setRefreshToken } from "@/utils/handleCookie";

import { useNavigate } from "@/router";
import { login } from "@/api/auth";

export const useMutationLogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ code, provider }: LoginRequestParams) =>
      login({ code, provider }),
    onSuccess: ({ accessToken, refreshToken, isRegistered }: AuthResponse) => {
      setAccessToken(accessToken);
      setRefreshToken("refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 14,
        path: "/",
      });

      if (isRegistered) {
        navigate("/main", {
          replace: true,
        });
      } else {
        navigate("/signup", {
          replace: true,
        });
      }
    },
  });

  return mutation;
};
