import { useMutation } from "@tanstack/react-query";

import { SignupRequestParams } from "@/types/authType";

import { signup } from "@/api/auth";

// TODO: onSuccess 핸들러 추가
export const useMutationSignup = () => {
  const mutation = useMutation({
    mutationFn: ({ email, password, name }: SignupRequestParams) =>
      signup({ email, password, name }),
  });

  return mutation;
};
