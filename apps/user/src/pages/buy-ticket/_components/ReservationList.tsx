import { ReservationInfo } from "@/types/showType";

import TimeItem from "./TimeItem";

interface ReservationListProps {
  reservationList: ReservationInfo[];
  selectedItem: number | null;
  onSelect: (id: number, startTime: string, endTime: string) => void;
}

const ReservationList = (props: ReservationListProps) => {
  const { reservationList, selectedItem, onSelect } = props;

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
            onSelect={() => onSelect(id, startTime, endTime)}
          />
        ),
      )}
    </div>
  );
};

export default ReservationList;
