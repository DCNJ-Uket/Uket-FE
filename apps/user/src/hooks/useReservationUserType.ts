import { useState } from "react";

const useReservationUserType = () => {
  const [reservationUserType, setReservationUserType] = useState<string>("");

  const handleReservationUserType = (reservationType: string) => {
    setReservationUserType(reservationType);
  };

  return {
    reservationUserType,
    handleReservationUserType,
  };
};

export default useReservationUserType;
