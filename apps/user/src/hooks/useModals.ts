import { useState, useEffect } from "react";

interface UseModalsProps {
  setState?: boolean; //현재 modal의 상태
  handleState?: boolean; //관리할 다른 변수의 상태
}

export const useModals = (props: UseModalsProps) => {
  const { setState, handleState } = props;
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (setState === true) {
      setIsOpen(true);
    }
  }, [setState]);

  const [handleOtherState, setHandleOtherState] = useState(
    handleState !== undefined ? handleState : undefined,
  );

  const openModal = () => {
    setIsOpen(true);
    setHandleOtherState(handleState);
  };

  const closeModal = () => {
    setIsOpen(false);
    setHandleOtherState(handleState);
  };

  const confirmModal = () => {
    setIsOpen(false);
    setHandleOtherState(!handleOtherState);
  };

  return { isOpen, openModal, confirmModal, closeModal, handleOtherState };
};
