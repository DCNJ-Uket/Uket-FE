import dayjs from "dayjs";
import "dayjs/locale/ko";

dayjs.locale("ko");

type FormatType = "full" | "short" | "time";

const format = {
  full: "YYYY년 MM월 DD일 (ddd)",
  short: "MM월 DD일 (ddd)",
  time: "HH:mm",
};

export const createBlobURL = (blob: any) => {
  return URL.createObjectURL(blob);
};

export const formatDate = (date: string, type: FormatType) => {
  return dayjs(date).format(format[type]).toString();
};
