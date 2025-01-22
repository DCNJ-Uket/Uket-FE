import { ACCESS_TOKEN, REFRESH_TOKEN } from "@uket/util/token";
import { navigateTo } from "@uket/util/globalNavigate";
import { useMutation, useQueryClient } from "@tanstack/react-query";

import { AuthResponse, LoginRequestParams } from "../types/auth";
import { user } from "../queries/user";
import { login } from "../auth";

export const useMutationLogin = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ code, provider }: LoginRequestParams) =>
      login({ code, provider }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: user.info().queryKey });
    },
    onSuccess: ({ accessToken, refreshToken, isRegistered }: AuthResponse) => {
      ACCESS_TOKEN.set(accessToken);
      REFRESH_TOKEN.set("refreshToken", refreshToken);

      if (isRegistered) {
        navigateTo("/", { replace: true });
      } else {
        navigateTo("/signup", {
          state: { isUnRegistered: true },
          replace: true,
        });
      }
    },
  });

  return mutation;
};
