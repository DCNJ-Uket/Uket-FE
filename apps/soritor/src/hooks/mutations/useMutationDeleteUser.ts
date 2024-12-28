import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { deleteUserInfo } from "@/api/user";

import { DeleteUserResponse } from "@/types/userType";

import { clearAccessToken } from "@/utils/handleToken";
import { clearRefreshToken } from "@/utils/handleCookie";

export const useMutationDeleteUser = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: () => deleteUserInfo(),
    onSuccess: (data: DeleteUserResponse) => {
      queryClient.removeQueries({ queryKey: ["user-info"] });

      clearRefreshToken("refreshToken");
      clearAccessToken("accessToken");

      return data;
    },
  });

  return mutation;
};
