import { useMutation } from "@tanstack/react-query";

import { FormSchemaType } from "@/hooks/useStackForm";

import { AuthResponse } from "@/types/authType";

import { setAccessToken } from "@/utils/handleToken";
import { setRefreshToken } from "@/utils/handleCookie";

import { signup } from "@/api/auth";

export const useMutationSignup = () => {
  const mutation = useMutation({
    mutationFn: ({
      userType,
      userName,
      userPhone,
      userUniv,
      userId,
      userMajor,
    }: Partial<FormSchemaType>) =>
      signup({
        userType,
        userName,
        userPhone,
        userUniv,
        userId,
        userMajor,
      }),
    onSuccess: ({ accessToken, refreshToken }: AuthResponse) => {
      setAccessToken(accessToken);
      setRefreshToken("refreshToken", refreshToken);
    },
  });

  return mutation;
};
