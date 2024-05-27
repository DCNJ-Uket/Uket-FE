import { useState, useEffect } from "react";
import { cn } from "@uket/ui/lib/utils";

import { useFormatTime } from "@/hooks/useFormatTime";

import TicketQuantityItem from "./TicketQuantityItem";
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
    useFormatTime(startDate);
  const { formatTime: formatEndTime } = useFormatTime(endDate);
  const { formatDate: formatTicketingDate, formatTime: formatTicketingTime } =
    useFormatTime(ticketingDate);

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
          <TicketQuantityItem
            title="티켓 수량"
            amount={totalTicketCount}
            color="5E5E6E"
          />
        </div>
      </div>
    </div>
  );
};

export default DateItem;
