import { useMutation } from "@tanstack/react-query";

import { TicketResponse } from "@/types/showType";

import { FormSchemaType } from "../useTicketStackForm";


import { buyTicket } from "@/api/show";

export const useMutationBuyTicket = () => {
  const mutation = useMutation({
    mutationFn: (data: FormSchemaType) => buyTicket(data),
    onSuccess: (data: TicketResponse) => {
      return data.success;
    },
  });

  return mutation;
};
