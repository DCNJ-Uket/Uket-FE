import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { buyTicket } from "@/api/show";

import { TicketResponse } from "@/types/showType";

import { FormSchemaType } from "../useTicketStackForm";



export const useMutationBuyTicket = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (data: FormSchemaType) => buyTicket(data),
    onSuccess: (data: TicketResponse) => {
      queryClient.invalidateQueries({ queryKey: ["my-ticket-list"] });
      return data.success;
    },
  });

  return mutation;
};
