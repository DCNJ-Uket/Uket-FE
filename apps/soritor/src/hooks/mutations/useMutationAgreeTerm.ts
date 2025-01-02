import { useMutation } from "@tanstack/react-query";

import { agreeTerm } from "@/api/term";

import { TermAgreedParams } from "@/types/termType";


export const useMutationAgreeTerm = () => {
  const mutation = useMutation({
    mutationFn: (agreements: TermAgreedParams[]) => agreeTerm(agreements),
    throwOnError: false,
  });

  return mutation;
};
