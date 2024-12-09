export const useFormatTime = (date: string) => {
  const datePart = date.split("T")[0];
  const formatDate = datePart.replace(/-/g, ".");

  const dateObject = new Date(date);

  const dateHours = String(dateObject.getHours()).padStart(2, "0");
  const dateMinutes = String(dateObject.getMinutes()).padStart(2, "0");
  const formatTime = `${dateHours}:${dateMinutes}`;

  return {
    formatDate,
    formatTime,
  };
};
