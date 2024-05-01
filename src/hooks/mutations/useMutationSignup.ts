import { useMutation } from "@tanstack/react-query";

import { AuthResponse } from "@/types/authType";

import { saveTokenList } from "@/utils/handleToken";

import { FormSchemaType } from "@/pages/signup/_hooks/useStackForm";
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
