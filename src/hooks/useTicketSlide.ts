import { useState } from "react";

export const useTicketSlide = (
  ticketCount: number,
  ticketWidth: number,
  gapWidth: number,
) => {
  const [selectedTicket, setSelectedTicket] = useState<number>(0);
  const [touchStartX, setTouchStartX] = useState<number>(0);
  const [slidePosition, setSlidePosition] = useState<number>(0);

  const slideWidth = ticketWidth + gapWidth;

  const onTouchStart = (event: React.TouchEvent<HTMLDivElement>) => {
    setTouchStartX(event.changedTouches[0].pageX);
  };

  const onTouchEnd = (event: React.TouchEvent<HTMLDivElement>) => {
    const touchEndX = event.changedTouches[0].pageX;
    const distanceX = touchStartX - touchEndX;

    const maxSlidePosition = (ticketCount - 1) * slideWidth;

    let newPosition =
      distanceX < 0 ? slidePosition - slideWidth : slidePosition + slideWidth;

    // 슬라이드 이동 범위 제한
    if (newPosition < 0) {
      newPosition = 0;
    } else if (newPosition > maxSlidePosition) {
      newPosition = maxSlidePosition;
    }

    setSelectedTicket(Math.round(newPosition / slideWidth));
    setSlidePosition(newPosition);
  };

  const handleSelectTicket = (index: number) => {
    setSelectedTicket(index);
    setSlidePosition(index * slideWidth);
  };

  return {
    selectedTicket,
    slidePosition,
    onTouchStart,
    onTouchEnd,
    handleSelectTicket,
  };
};
