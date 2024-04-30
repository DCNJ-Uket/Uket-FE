import { useMutation } from "@tanstack/react-query";

import { AuthResponse, LoginRequestParams } from "@/types/authType";

import { saveTokenList } from "@/utils/handleToken";

import { useNavigate } from "@/router";
import { login } from "@/api/auth";

export const useMutationLogin = () => {
  const navigate = useNavigate();

  const mutation = useMutation({
    mutationFn: ({ code, provider }: LoginRequestParams) =>
      login({ code, provider }),
    onSuccess: ({ accessToken, refreshToken, isRegistered }: AuthResponse) => {
      saveTokenList(accessToken, refreshToken);
      
      if (isRegistered) {
        navigate("/main", {
          replace: true,
        });
      } else {
        navigate("/signup", {
          replace: true,
        });
      }
    },
    onError: error => {
      console.error(error);
    },
  });

  return mutation;
};
