import { useMutation } from "@tanstack/react-query";

import { EmailAuthVerifyParams } from "@/types/emailType";

import { verifyEmailAuth } from "@/api/email";

export const useMutationVerifyEmailAuth = ({
  email,
  universityId,
  authCode,
}: EmailAuthVerifyParams) => {
  const mutation = useMutation({
    mutationFn: () => verifyEmailAuth({ email, universityId, authCode }),
    onSuccess: () => {},
    onError: () => {},
    throwOnError: false,
  });

  return mutation;
};
