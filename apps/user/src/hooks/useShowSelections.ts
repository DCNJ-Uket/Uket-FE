import { useState } from "react";

export const useShowSelection = (initialDate = "", initialName = "") => {
  const [selectedShowDate, setSelectedShowDate] = useState(initialDate);
  const [selectedShowName, setSelectedShowName] = useState(initialName);

  return {
    selectedShowDate,
    setSelectedShowDate,
    selectedShowName,
    setSelectedShowName,
  };
};
