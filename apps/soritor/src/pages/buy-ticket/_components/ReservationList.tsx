import { useQueryReservationList } from "@uket/api/queries/reservation";

import TimeItem from "./TimeItem";

interface ReservationListProps {
  showId: string;
  selectedItem: number | null;
  onSelect: (id: number, startTime: string, endTime: string) => void;
}

const ReservationList = (props: ReservationListProps) => {
  const { showId, selectedItem, onSelect } = props;

  const { data: reservationList } = useQueryReservationList(Number(showId));

  return (
    <div className="flex flex-col gap-4 px-[22px]">
      {reservationList.map(
        ({ id, startDate, startTime, endTime, reservedCount, totalCount }) => (
          <TimeItem
            key={id}
            startDate={startDate}
            startTime={startTime}
            endTime={endTime}
            reservedCount={reservedCount}
            totalCount={totalCount}
            isSelected={selectedItem === id}
            onSelect={() => onSelect(id, startTime, endTime)}
          />
        ),
      )}
    </div>
  );
};

export default ReservationList;
