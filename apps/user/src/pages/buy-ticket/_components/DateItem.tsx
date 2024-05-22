import { useState, useEffect } from "react";
import { cn } from "@uket/ui/lib/utils";

import { useSetTime } from "@/hooks/useFormatTime";

import CircleButton from "./CircleButton";

interface DateItemProps {
  name: string;
  startDate: string;
  endDate: string;
  ticketingDate: string;
  totalTicketCount: number;
  isSelected: boolean;
  onSelect: () => void;
}

const DateItem = (props: DateItemProps) => {
  const {
    name,
    startDate,
    endDate,
    ticketingDate,
    totalTicketCount,
    isSelected,
    onSelect,
  } = props;

  const [isDisabled, setIsDisabled] = useState(false);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const ticketingTime = new Date(ticketingDate).getTime();

    if (currentTime < ticketingTime) {
      setIsDisabled(true);
    } else {
      setIsDisabled(false);
    }
  }, [ticketingDate]);

  const { formatDate: formatShowDate, formatTime: formatStartTime } =
    useSetTime(startDate);
  const { formatTime: formatEndTime } = useSetTime(endDate);
  const { formatDate: formatTicketingDate, formatTime: formatTicketingTime } =
    useSetTime(ticketingDate);

  return (
    <div className="relative">
      {isDisabled && (
        <div className="absolute inset-0 flex items-center justify-center text-xs font-bold text-red-500">
          {formatTicketingDate} {formatTicketingTime}부터 예매 가능합니다.
        </div>
      )}
      <div
        className={cn(
          "flex w-full flex-col gap-[9px] rounded-lg bg-white px-5 pb-[15px] pt-[17px] shadow-lg",
          isDisabled && "pointer-events-none bg-[#5E5E6E] opacity-25",
        )}
        onClick={onSelect}
      >
        <div className="flex justify-between">
          <div className="text-[42px] font-black">{name}</div>
          <div className="self-center">
            <CircleButton isSelected={isSelected} />
          </div>
        </div>

        <div className="my-[1%] w-full border-[0.5px] border-[#CCCCCC]"></div>

        <div className="flex gap-10 text-xs">
          <div className="flex gap-2">
            <p className="font-medium">일시</p>
            <div>
              <p className="text-[#5E5E6E]">{formatShowDate}</p>
              <p className="text-[#5E5E6E]">
                {formatStartTime} ~ {formatEndTime}
              </p>
            </div>
          </div>
          <div className="flex gap-2">
            <p className="font-medium">티켓 수량</p>
            <p className="text-[#5E5E6E]">{totalTicketCount}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DateItem;
