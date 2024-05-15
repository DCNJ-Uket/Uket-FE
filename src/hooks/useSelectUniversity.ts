import { useNavigate } from "react-router-dom";
import { useState } from "react";

export const useSelectUniversity = () => {
  const navigate = useNavigate();
  const [selectedUnivId, setSelectedUnivId] = useState<number | null>(null);
  const [selectedUnivName, setSelectedUnivIdName] = useState<string | null>(
    null,
  );

  const handleSelectUniv = (id: number, name: string) => {
    setSelectedUnivId(id);
    setSelectedUnivIdName(name);
  };

  const handleNavigate = () => {
    if (!selectedUnivId) return;
    navigate({
      pathname: "/home",
      search: `?select-univ=${selectedUnivName}&id=${selectedUnivId}`,
    });
  };

  return {
    selectedUnivId,
    handleSelectUniv,
    handleNavigate,
  };
};
