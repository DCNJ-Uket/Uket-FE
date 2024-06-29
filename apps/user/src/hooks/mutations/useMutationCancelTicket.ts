import { useMutation } from "@tanstack/react-query";

import { CancelTicketResponse } from "@/types/ticketType";

import { cancelTicket } from "@/api/ticket";

export const useMutationCancelTicket = () => {
  const mutation = useMutation({
    mutationFn: (ticketId: number) => cancelTicket(ticketId),
    onSuccess: (data: CancelTicketResponse) => {
      return data;
    },
  });

  return mutation;
};
