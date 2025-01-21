import { useMutation } from "@tanstack/react-query";

import { updateUserInfo } from "@/api/user";

import { UserInfoUpdateRequest } from "@/types/userType";


export const useMutationUpdateInfo = () => {
  const mutation = useMutation({
    mutationFn: (userInfo: UserInfoUpdateRequest) => updateUserInfo(userInfo),
  });

  return mutation;
};
