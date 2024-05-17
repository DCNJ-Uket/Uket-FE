import { useState } from "react";

const useItemSelect = () => {
  const [selectedItem, setSelectItem] = useState<number | null>(null);

  const handleSelectItem = (index: number) => {
    setSelectItem(index);
  };

  return {
    selectedItem,
    handleSelectItem,
  };
};

export default useItemSelect;
