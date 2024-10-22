export const useFormat = () => {
  const handleFormatDate = (dateString: string) => {
    const date = new Date(dateString);

    const formatTwoDigits = (num: number) => String(num).padStart(2, "0");

    const year = String(date.getFullYear()).slice(2);
    const month = formatTwoDigits(date.getMonth() + 1);
    const day = formatTwoDigits(date.getDate());
    const hours = formatTwoDigits(date.getHours());
    const minutes = formatTwoDigits(date.getMinutes());

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  const handleFormatPhone = (phoneString: string) => {
    if (phoneString.length !== 11) {
      throw new Error("Invalid phone format");
    }

    const firstPart = phoneString.slice(0, 3);
    const lastPart = phoneString.slice(7);

    return `${firstPart}-****-${lastPart}`;
  };

  return { handleFormatDate, handleFormatPhone };
};
