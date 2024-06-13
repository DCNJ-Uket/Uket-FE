import { getTicketQRCode } from "@/api/ticket";
import { TicketItem } from "@/types/ticketType";
import { createBlobURL } from "@/utils/handleTicket";
import { useSuspenseQueries } from "@tanstack/react-query";

export const useQueryTicketQRCode = (ticketList: TicketItem[]) => {
  const queries = ticketList.map(({ ticketId }) => ({
    queryKey: ["qrcode", ticketId],
    queryFn: () => getTicketQRCode(ticketId),
  }));

  const query = useSuspenseQueries({
    queries,
    combine: results => {
      const data = results.reduce<{ [key: number]: string }>(
        (acc, result, index) => {
          acc[ticketList[index].ticketId] = createBlobURL(result.data);
          return acc;
        },
        {},
      );

      return {
        ...results,
        data,
        error: results.find(result => result.isError),
      };
    },
  });

  if (query.error) {
    throw query.error;
  }

  return { data: query.data };
};
