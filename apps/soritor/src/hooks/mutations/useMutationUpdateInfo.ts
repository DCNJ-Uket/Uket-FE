import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { updateUserInfo } from "@/api/user";

import { UserInfoResponse, UserInfoUpdateRequest } from "@/types/userType";

import { user } from "../queries/user";


export const useMutationUpdateInfo = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userInfo: UserInfoUpdateRequest) => updateUserInfo(userInfo),
    onSuccess: (data: UserInfoResponse) => {
      queryClient.invalidateQueries({ queryKey: user.info().queryKey });
      return data;
    },
  });

  return mutation;
};
