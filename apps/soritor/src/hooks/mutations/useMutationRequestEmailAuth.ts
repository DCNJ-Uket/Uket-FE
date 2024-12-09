import { useMutation } from "@tanstack/react-query";


import { useEmailAuthStore } from "@/store/useEmailAuthStore";
import { requestEmailAuth } from "@/api/email";

import { EmailAuthRequestParams } from "@/types/emailType";

export const useMutationRequestEmailAuth = ({
  email,
  universityId,
}: EmailAuthRequestParams) => {
  const { setEmailAuthInfo } = useEmailAuthStore();

  const mutation = useMutation({
    mutationKey: ["request-email-auth"],
    mutationFn: () => requestEmailAuth({ email, universityId }),
    onSuccess: ({ email, expiration }) => {
      setEmailAuthInfo({ email, expiration: expiration / 1000 });
    },
    onError: () => {},
    throwOnError: false,
  });

  return mutation;
};
