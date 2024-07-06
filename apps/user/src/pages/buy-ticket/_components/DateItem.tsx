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
  const [isSoldOut, setIsSoldOut] = useState(false);

  useEffect(() => {
    if (totalTicketCount === 0) {
      setIsSoldOut(true);
    } else {
      setIsSoldOut(false);
    }
  }, [totalTicketCount]);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const ticketingTime = new Date(ticketingDate).getTime();

    setIsDisabled(currentTime < ticketingTime);
  }, [ticketingDate]);

  const { formatDate: formatShowDate, formatTime: formatStartTime } =
    useFormatTime(startDate);
  const { formatTime: formatEndTime } = useFormatTime(endDate);
  const { formatDate: formatTicketingDate, formatTime: formatTicketingTime } =
    useFormatTime(ticketingDate);

  return (
    <div className="relative">
      {isDisabled && (
        <div className="absolute inset-0 z-50 flex items-center justify-center text-xs font-bold text-red-500">
          {formatTicketingDate} {formatTicketingTime}부터 예매 가능합니다.
        </div>
      )}
      {isSoldOut && (
        <div className="absolute inset-y-0 right-3 z-50 flex w-12 items-center justify-center bg-[#D9D9D9]">
          <div className="rotate-90 text-xs font-bold text-[#FD724F]">
            SOLDOUT
          </div>
        </div>
      )}
      <div
        className={cn(
          "z-40 flex w-full flex-col gap-[9px] rounded-lg bg-white px-5 pb-[15px] pt-[17px] shadow-lg",
          (isDisabled || isSoldOut) &&
            "pointer-events-none bg-[#D9D9D9] opacity-60",
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
