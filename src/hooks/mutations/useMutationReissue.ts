import { useMutation } from "@tanstack/react-query";

import { AuthResponse } from "@/types/authType";

import { saveTokenList } from "@/utils/handleToken";

import { reissue } from "@/api/auth";

export const useMutationReissue = () => {
  const mutation = useMutation({
    mutationFn: reissue,
    onSuccess: ({ accessToken, refreshToken }: AuthResponse) => {
      saveTokenList(accessToken, refreshToken);
    },
    onError: error => {
      console.error(error);
    },
  });

  return mutation;
};
