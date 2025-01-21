import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { cancelTicket } from "@/api/ticket";

import { CancelTicketResponse } from "@/types/ticketType";

export const useMutationCancelTicket = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationKey: ["cancelTicket"],
    onMutate: () => {
      return { mutationKey: "cancelTicket" };
    },
    mutationFn: (ticketId: number) => cancelTicket(ticketId),
    onSuccess: (data: CancelTicketResponse) => {
      queryClient.invalidateQueries({ queryKey: ["my-ticket-list"] });
      return data;
    },
  });

  return mutation;
};
