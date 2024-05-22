import { useFormatTime } from "@/hooks/useFormatTime";

import TimeCellItem from "./TimeCellItem";
import CircleButton from "./CircleButton";


interface TimeItemProps {
  startTime: string;
  endTime: string;
  reservedCount: number;
  totalCount: number;
  isSelected: boolean;
  onSelect: () => void;
}

const TimeItem = (props: TimeItemProps) => {
  const {
    startTime,
    endTime,
    reservedCount,
    totalCount,
    isSelected,
    onSelect,
  } = props;

  const { formatTime: formatStartTime } = useFormatTime(startTime);
  const { formatTime: formatEndTime } = useFormatTime(endTime);

  const leftCount = totalCount - reservedCount;

  return (
    <div
      className="flex w-full flex-col gap-[9px] rounded-lg bg-white px-5 pb-[15px] pt-[17px] shadow-lg"
      onClick={onSelect}
    >
      <div className="flex justify-between">
        <div className="text-[32px] font-extrabold">
          {formatStartTime} ~ {formatEndTime}
        </div>
        <div className="self-center">
          <CircleButton isSelected={isSelected} />
        </div>
      </div>

      <div className="my-[1%] w-full border-[0.5px] border-[#CCCCCC]"></div>

      <div className="flex gap-10 text-xs">
        <TimeCellItem
          title="남은 티켓 수량"
          amount={leftCount}
          color="FD724F"
        />
        <TimeCellItem title="총 티켓 수량" amount={totalCount} color="5E5E6E" />
      </div>
    </div>
  );
};

export default TimeItem;
