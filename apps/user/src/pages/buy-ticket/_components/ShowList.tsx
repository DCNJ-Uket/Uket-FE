import { useQueryShowList } from "@/hooks/queries/useQueryShowList";

import DateItem from "./DateItem";

interface ShowListProps {
  eventId: string;
  selectedItem: number | null;
  onSelect: (id: number, name: string, startDate: string) => void;
}

const ShowList = (props: ShowListProps) => {
  const { eventId, selectedItem, onSelect } = props;
  const { data: showList } = useQueryShowList(eventId);

  return (
    <div className="flex flex-col gap-4 px-[22px]">
      {showList.map(
        ({ id, name, startDate, endDate, ticketingDate, totalTicketCount }) => (
          <DateItem
            key={id}
            name={name}
            startDate={startDate}
            endDate={endDate}
            ticketingDate={ticketingDate}
            totalTicketCount={totalTicketCount}
            isSelected={selectedItem === id}
            onSelect={() => onSelect(id, name, startDate)}
          />
        ),
      )}
    </div>
  );
};

export default ShowList;
