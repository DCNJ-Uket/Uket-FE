import { useMutation } from "@tanstack/react-query";

import { deleteUserInfo } from "@/api/user";

export const useMutationDeleteUser = () => {
  const mutation = useMutation({
    mutationFn: deleteUserInfo,
    onMutate: () => {
      return { mutationKey: "deleteUser" };
    },
  });

  return mutation;
};
