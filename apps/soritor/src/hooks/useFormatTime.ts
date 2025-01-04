export const useFormatTime = (date: string) => {
  const timeOffset = date.split("+")[1];

  const [offsetHours, offsetMinutes] = String(timeOffset)
    .split(":")
    .map(Number);

  const dateObject = new Date(date);
  dateObject.setHours(dateObject.getHours() + offsetHours);
  dateObject.setMinutes(dateObject.getMinutes() + offsetMinutes);

  const dateYear = String(dateObject.getFullYear());
  const dateMonth = String(dateObject.getMonth() + 1).padStart(2, "0");
  const dateDay = String(dateObject.getDate()).padStart(2, "0");
  const formatDate = `${dateYear}. ${dateMonth}. ${dateDay}`;

  const dateHours = String(dateObject.getHours()).padStart(2, "0");
  const dateMinutes = String(dateObject.getMinutes()).padStart(2, "0");
  const formatTime = `${dateHours}:${dateMinutes}`;

  return {
    formatDate,
    formatTime,
    isoDate: dateObject,
  };
};
