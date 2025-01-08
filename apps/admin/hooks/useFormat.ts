export const useFormat = () => {
  const handleFormatDate = (dateString: string) => {
    const timeOffset = dateString.split("+")[1];

    const [offsetHours, offsetMinutes] = String(timeOffset)
      .split(":")
      .map(Number);

    const date = new Date(dateString);
    date.setHours(date.getHours() + offsetHours);
    date.setMinutes(date.getMinutes() + offsetMinutes);

    const formatTwoDigits = (num: number) => String(num).padStart(2, "0");

    const year = String(date.getFullYear()).slice(2);
    const month = formatTwoDigits(date.getMonth() + 1);
    const day = formatTwoDigits(date.getDate());
    const hours = formatTwoDigits(date.getHours());
    const minutes = formatTwoDigits(date.getMinutes());

    return `${year}.${month}.${day} ${hours}:${minutes}`;
  };

  return { handleFormatDate };
};
