import { useEffect, useState } from "react";

import { useFormatTime } from "@/hooks/useFormatTime";

import TicketQuantityItem from "./TicketQuantityItem";
import TicketHeader from "./TicketHeader";
import TicketFooter from "./TicketFooter";
import TicketDivider from "./TicketDivider";
import TicketContainer from "./TicketContainer";
import Overlay from "./Overlay";

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

  const [isDisabled, setIsDisabled] = useState(false);
  const [isSoldOut, setIsSoldOut] = useState(false);

  const leftCount =
    totalCount - reservedCount < 0 ? 0 : totalCount - reservedCount;

  useEffect(() => {
    setIsSoldOut(leftCount === 0);
  }, [leftCount]);

  useEffect(() => {
    const currentTime = new Date().getTime();
    const ticketingTime = new Date(startTime).getTime();
    setIsDisabled(currentTime > ticketingTime);
  }, [startTime]);

  const { formatTime: formatStartTime } = useFormatTime(startTime);
  const { formatTime: formatEndTime } = useFormatTime(endTime);

  return (
    <div className="relative">
      {isDisabled && <Overlay message="티켓 예매 가능 시간이 지났습니다." />}
      {isSoldOut && !isDisabled && <Overlay message="SOLDOUT" soldOut />}
      <TicketContainer
        isDisabled={isDisabled}
        isSoldOut={isSoldOut}
        onSelect={onSelect}
      >
        <TicketHeader
          title={`${formatStartTime} ~ ${formatEndTime}`}
          fontStyle="text-[32px] font-extrabold"
          isSelected={isSelected}
        />
        <TicketDivider />
        <TicketFooter>
          <TicketQuantityItem
            title="남은 티켓 수량"
            amount={leftCount}
            color="FD724F"
          />
          <TicketQuantityItem
            title="총 티켓 수량"
            amount={totalCount}
            color="5E5E6E"
          />
        </TicketFooter>
      </TicketContainer>
    </div>
  );
};

export default TimeItem;
