export const setSelectedShowDate = (showName: string, showDate: string) => {
  const selectedShowDate = `${showName} (${showDate.slice(2)})`;
  localStorage.setItem("selectedShowDate", selectedShowDate);
};

export const getSelectedShowDate = () => {
  const selectedShowDate = localStorage.getItem("selectedShowDate");
  return selectedShowDate ? selectedShowDate : "";
};
