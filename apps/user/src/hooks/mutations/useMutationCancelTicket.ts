import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { CancelTicketResponse } from "@/types/ticketType";

import { cancelTicket } from "@/api/ticket";


export const useMutationCancelTicket = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: (ticketId: number) => cancelTicket(ticketId),
    onSuccess: (data: CancelTicketResponse) => {
      queryClient.invalidateQueries({ queryKey: ["my-ticket-list"] });
      return data;
    },
  });

  return mutation;
};
