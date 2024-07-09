import { useState } from "react";

import { FormType } from "./useTicketStackForm";
import useItemSelect from "./useItemSelect";

export const useReservationSelection = (form: FormType) => {
  const [selectedStartTime, setSelectedStartTme] = useState("");
  const [selectedEndTime, setSelectedEndTme] = useState("");

  const { selectedItem, handleSelectItem } = useItemSelect();

  const handleSelectReservation = (
    id: number,
    startTime: string,
    endTime: string,
  ) => {
    handleSelectItem(id);
    form.setValue("reservationId", id);
    setSelectedStartTme(startTime);
    setSelectedEndTme(endTime);
  };

  return {
    selectedItem,
    selectedStartTime,
    setSelectedStartTme,
    selectedEndTime,
    setSelectedEndTme,
    handleSelectReservation,
  };
};
