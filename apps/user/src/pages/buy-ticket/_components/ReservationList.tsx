import { useQueryReservationList } from "@/hooks/queries/useQueryReservationList";

import TimeItem from "./TimeItem";

interface ReservationListProps {
  showId: string;
  selectedItem: number | null;
  onSelect: (id: number) => void;
}

const ReservationList = (props: ReservationListProps) => {
  const { showId, selectedItem, onSelect } = props;
  const { data: reservationList } = useQueryReservationList(showId);

  return (
    <div className="flex flex-col gap-4 px-[22px]">
      {reservationList.map(
        ({ id, startTime, endTime, reservedCount, totalCount }) => (
          <TimeItem
            key={id}
            startTime={startTime}
            endTime={endTime}
            reservedCount={reservedCount}
            totalCount={totalCount}
            isSelected={selectedItem === id}
            onSelect={() => onSelect(id)}
          />
        ),
      )}
    </div>
  );
};

export default ReservationList;
