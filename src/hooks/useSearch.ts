import { Control, useWatch } from "react-hook-form";
import { useEffect, useState } from "react";

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
  const value = useWatch({
    control: control as Control,
    name: formType,
    defaultValue: placeholder,
  });

  const handleSelectItem = (item: string) => {
    setSelectedItem(item);
    form.setValue(formType, item);
    callback(false);
  };

  useEffect(() => {
    setSelectedItem(value);
  }, [value]);

  return { selectedItem, value, handleSelectItem };
};
