import { useMutation } from "@tanstack/react-query";

import { buyTicket } from "@/api/show";

import { FormSchemaType } from "../useTicketStackForm";


export const useMutationBuyTicket = () => {
  const mutation = useMutation({
    mutationFn: (data: FormSchemaType) => buyTicket(data),
  });

  return mutation;
};
