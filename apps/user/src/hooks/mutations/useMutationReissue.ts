import { useMutation } from "@tanstack/react-query";

import { AuthResponse } from "@/types/authType";

import { setAccessToken } from "@/utils/handleToken";
import { setRefreshToken } from "@/utils/handleCookie";

import { reissue } from "@/api/auth";

export const useMutationReissue = () => {
  const mutation = useMutation({
    mutationFn: reissue,
    onSuccess: ({ accessToken, refreshToken }: AuthResponse) => {
      setAccessToken(accessToken);
      setRefreshToken("refreshToken", refreshToken, {
        maxAge: 60 * 60 * 24 * 14,
        path: "/",
      });
    },
  });

  return mutation;
};
