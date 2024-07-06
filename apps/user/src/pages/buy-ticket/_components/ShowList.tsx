import { ShowInfo } from "@/types/showType";

import DateItem from "./DateItem";

interface ShowListProps {
  shows: ShowInfo[];
  selectedItem: number | null;
  onSelect: (id: number, name: string, startDate: string) => void;
}

const ShowList = (props: ShowListProps) => {
  const { shows, selectedItem, onSelect } = props;

  return (
    <div className="flex flex-col gap-4 px-[22px]">
      {shows.map(
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
