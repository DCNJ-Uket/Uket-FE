import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { changeTicketStatus } from "@/api/ticket";

import { ChangeTicketParams, ChangeTicketResponse } from "@/types/ticketType";

export const useMutationChangeTicketStatus = () => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ ticketId, status }: ChangeTicketParams) =>
      changeTicketStatus({ ticketId, status }),
    onSuccess: (data: ChangeTicketResponse) => {
      queryClient.invalidateQueries({ queryKey: ["ticket-list"] });
      return data;
    },
  });

  return mutation;
};
