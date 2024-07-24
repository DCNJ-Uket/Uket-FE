import { useMutation } from "@tanstack/react-query";

import { LoginRequestParams, LoginResponse } from "@/types/authType";

import { setAccessToken } from "@/utils/handleToken";

import { login } from "@/api/auth";
import { useRouter } from "next/navigation";

export const useMutationLogin = () => {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: ({ email, password }: LoginRequestParams) =>
      login({ email, password }),
    onSuccess: async ({ accessToken }: LoginResponse) => {
      setAccessToken(accessToken);
      router.push("/qr-scan");
    },
    throwOnError: false,
  });

  return mutation;
};
