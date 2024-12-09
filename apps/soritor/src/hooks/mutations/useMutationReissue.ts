import { useMutation } from "@tanstack/react-query";

import { reissue } from "@/api/auth";

import { AuthResponse } from "@/types/authType";

import { setAccessToken } from "@/utils/handleToken";
import { setRefreshToken } from "@/utils/handleCookie";


export const useMutationReissue = () => {
  const mutation = useMutation({
    mutationFn: reissue,
    onSuccess: ({ accessToken, refreshToken }: AuthResponse) => {
      setAccessToken(accessToken);
      setRefreshToken("refreshToken", refreshToken);
    },
  });

  return mutation;
};
