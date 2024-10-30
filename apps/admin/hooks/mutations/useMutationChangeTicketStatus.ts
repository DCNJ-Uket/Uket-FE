import { useMutation } from "@tanstack/react-query";
import { useQueryClient } from "@tanstack/react-query";

import { changeTicketStatus } from "@/api/ticket";

import { ChangeTicketParams, ChangeTicketResponse } from "@/types/ticketType";

export const useMutationChangeTicketStatus = (page: number) => {
  const queryClient = useQueryClient();

  const mutation = useMutation({
    mutationFn: ({ ticketId, status }: ChangeTicketParams) =>
      changeTicketStatus({ ticketId, status }),

    onMutate: async ({ ticketId, status }: ChangeTicketParams) => {
      const previousData = queryClient.getQueryData<ChangeTicketResponse>([
        "ticket-list",
        page,
        ticketId,
      ]);

      await queryClient.cancelQueries({ queryKey: ["ticket-list", page] });

      if (previousData) {
        queryClient.setQueryData<ChangeTicketResponse>(
          ["ticket-list", page, ticketId],
          { ...previousData, status },
        );
      }

      return { previousData };
    },

    onError: (error, variables, context) => {
      if (context?.previousData) {
        queryClient.setQueryData(
          ["ticket-list", page, variables.ticketId],
          context.previousData,
        );
      }
    },

    onSettled: () => {
      queryClient.invalidateQueries({ queryKey: ["ticket-list", page] });
    },
  });

  return mutation;
};
