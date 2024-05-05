import { useMutation } from "@tanstack/react-query";

import { FormSchemaType } from "@/hooks/useStackForm";

import { AuthResponse } from "@/types/authType";

import { saveTokenList } from "@/utils/handleToken";

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
      signup({ userType, userName, userPhone, userUniv, userId, userMajor }),
    onSuccess: ({ accessToken, refreshToken }: AuthResponse) => {
      saveTokenList(accessToken, refreshToken);
    },
    onError: error => {
      console.error(error);
    },
  });

  return mutation;
};
