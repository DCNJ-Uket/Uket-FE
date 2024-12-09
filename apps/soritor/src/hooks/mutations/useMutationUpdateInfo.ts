import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { updateUserInfo } from "@/api/user";

import { UserInfoResponse, UserInfoUpdateRequest } from "@/types/userType";



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
