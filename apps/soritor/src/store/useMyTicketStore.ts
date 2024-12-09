import { create } from "zustand";

import { TicketItem } from "@/types/ticketType";

interface TicketState {
  ticketList: TicketItem[];
  ticket: TicketItem | null;
}

interface TicketAction {
  setTicketList: (ticketList: TicketItem[]) => void;
  getTicketList: () => TicketState["ticketList"];
  getTicket: (ticketId: number) => TicketItem | undefined;
}

export const useMyTicketStore = create<TicketState & TicketAction>(
  (set, get) => ({
    ticketList: [],
    ticket: null,
    setTicketList: ticketList => set({ ticketList }),
    getTicketList: () => get().ticketList,
    getTicket: ticketId => get().ticketList.find(t => t.ticketId === ticketId),
  }),
);
