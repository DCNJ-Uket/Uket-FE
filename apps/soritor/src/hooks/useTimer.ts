import { useCallback, useEffect, useState } from "react";

export const useTimer = (time: number | undefined) => {
  const [expiration, setExpiration] = useState(time || 0);

  useEffect(() => {
    if (expiration && expiration > 0) {
      const timerId = setInterval(() => {
        setExpiration(prev => prev - 1);
      }, 1000);

      return () => clearInterval(timerId);
    }
  }, [expiration]);

  const formatTime = (seconds: number) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes}:${remainingSeconds < 10 ? "0" : ""}${remainingSeconds}`;
  };

  const resetTimer = useCallback(() => {
    setExpiration(time || 0);
  }, [time]);

  return { expiration, formatTime, resetTimer };
};
