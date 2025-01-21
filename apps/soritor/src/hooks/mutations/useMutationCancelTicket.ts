import { useMutation } from "@tanstack/react-query";

import { cancelTicket } from "@/api/ticket";

export const useMutationCancelTicket = () => {
  const mutation = useMutation({
    mutationKey: ["cancelTicket"],
    mutationFn: (ticketId: number) => cancelTicket(ticketId),
    onMutate: () => {
      return { mutationKey: "cancelTicket" };
    },
  });

  return mutation;
};
