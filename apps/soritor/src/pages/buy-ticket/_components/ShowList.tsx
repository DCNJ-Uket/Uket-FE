import { useQueryShowList } from "@uket/api/queries/reservation";

import DateItem from "./DateItem";

interface ShowListProps {
  eventId: string;
  selectedItem: number | null;
  onSelect: (id: number, name: string, startDate: string) => void;
}

const ShowList = (props: ShowListProps) => {
  const { eventId, selectedItem, onSelect } = props;

  const { data: shows } = useQueryShowList(Number(eventId));

  return (
    <div className="flex flex-col gap-4 px-[22px]">
      {shows.map(
        ({
          id,
          name,
          showDate,
          startTime,
          endTime,
          ticketingDate,
          totalTicketCount,
        }) => (
          <DateItem
            key={id}
            name={name}
            showDate={showDate}
            startTime={startTime}
            endTime={endTime}
            ticketingDate={ticketingDate}
            totalTicketCount={totalTicketCount}
            isSelected={selectedItem === id}
            onSelect={() => onSelect(id, name, showDate)}
          />
        ),
      )}
    </div>
  );
};

export default ShowList;
