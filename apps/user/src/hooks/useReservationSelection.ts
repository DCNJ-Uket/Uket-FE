import { useState } from "react";

export const useReservationSelection = (initialStart = "", initialEnd = "") => {
  const [selectedStartTime, setSelectedStartTme] = useState(initialStart);
  const [selectedEndTime, setSelectedEndTme] = useState(initialEnd);

  return {
    selectedStartTime,
    setSelectedStartTme,
    selectedEndTime,
    setSelectedEndTme,
  };
};
