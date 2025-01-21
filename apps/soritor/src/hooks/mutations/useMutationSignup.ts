import { useMutation } from "@tanstack/react-query";

import { signup } from "@/api/auth";

import { FormSchemaType } from "@/hooks/useStackForm";


export const useMutationSignup = () => {
  const mutation = useMutation({
    mutationFn: ({ userType, userName, userPhone }: Partial<FormSchemaType>) =>
      signup({
        userType,
        userName,
        userPhone,
      }),
  });

  return mutation;
};
