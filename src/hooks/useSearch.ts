import { Control, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";

import { UNIVERSITY_LIST } from "@/constants/university_list";

import { FormType } from "./useStackForm";

interface UseSearchProps {
  form: FormType;
  control: unknown;
  formType: "userUniv" | "userMajor";
  placeholder: string;
  callback: (isOpen: boolean) => void;
}

export const useSearch = ({
  form,
  control,
  formType,
  placeholder,
  callback,
}: UseSearchProps) => {
  const [selectedItem, setSelectedItem] = useState(placeholder);
  const [searchedResult, setSearchedResult] = useState([]);
  const value = useWatch({
    control: control as Control,
    name: formType,
  });

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    form.setValue(formType, item);
    callback(false);
  };

  useEffect(() => {
    const result = UNIVERSITY_LIST.filter(item => item.includes(value));
    if (!result) return;

    setSearchedResult(result as never);
  }, [value]);

  return { selectedItem, searchedResult, value, handleSelectItem };
};
