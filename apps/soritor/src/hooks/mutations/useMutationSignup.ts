import { useMutation, useQueryClient } from "@tanstack/react-query";

import { signup } from "@/api/auth";

import { FormSchemaType } from "@/hooks/useStackForm";

import { AuthResponse } from "@/types/authType";

import { setAccessToken } from "@/utils/handleToken";
import { setRefreshToken } from "@/utils/handleCookie";


export const useMutationSignup = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ userType, userName, userPhone }: Partial<FormSchemaType>) =>
      signup({
        userType,
        userName,
        userPhone,
      }),
    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["user-info"] });
    },
    onSuccess: ({ accessToken, refreshToken }: AuthResponse) => {
      setAccessToken(accessToken);
      setRefreshToken("refreshToken", refreshToken);
    },
  });

  return mutation;
};
