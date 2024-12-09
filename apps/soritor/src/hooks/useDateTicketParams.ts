import { useSearchParams } from "react-router-dom";
import { useState } from "react";

const useDateTicketParams = () => {
  const [searchParams] = useSearchParams();

  const univName = searchParams.get("univName") as string;
  const univId = searchParams.get("univId") as string;
  const eventId = searchParams.get("eventId") as string;

  const [showId, setShowId] = useState<number>(-1);
  const handleShowId = (id: number) => {
    setShowId(id);
  };

  return {
    univName,
    univId,
    eventId,
    showId,
    handleShowId,
  };
};

export default useDateTicketParams;
