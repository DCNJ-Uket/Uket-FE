import { useMutation } from "@tanstack/react-query";

import { LoginRequestParams, LoginResponse } from "@/types/authType";

import { setAccessToken } from "@/utils/handleToken";

import { login } from "@/api/auth";

export const useMutationLogin = () => {
  const mutation = useMutation({
    mutationFn: ({ email, password }: LoginRequestParams) =>
      login({ email, password }),
    onSuccess: ({ accessToken }: LoginResponse) => {
      setAccessToken(accessToken);
    },
    throwOnError: false,
  });

  return mutation;
};
