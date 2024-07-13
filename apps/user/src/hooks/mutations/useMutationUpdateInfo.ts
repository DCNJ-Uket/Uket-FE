import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { UserInfoResponse, UserInfoUpdateRequest } from "@/types/userType";

import { updateUserInfo } from "@/api/user";


export const useMutationUpdateInfo = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (userInfo: UserInfoUpdateRequest) => updateUserInfo(userInfo),
    onSuccess: (data: UserInfoResponse) => {
      queryClient.invalidateQueries({ queryKey: ["user-info"] });
      return data;
    },
  });

  return mutation;
};
