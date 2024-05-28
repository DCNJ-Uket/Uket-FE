export const setSelectedShowDate = (showName: string, showDate: string) => {
  const datePart = showDate.split("T")[0];
  const formatDate = datePart.replace(/-/g, ".");

  const selectedShowDate = `${showName} (${formatDate.slice(2)})`;
  localStorage.setItem("selectedShowDate", selectedShowDate);
};

export const getSelectedShowDate = () => {
  const selectedShowDate = localStorage.getItem("selectedShowDate");
  return selectedShowDate ? selectedShowDate : "";
};
