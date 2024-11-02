import { EntryListResponse } from "@/types/entryType";

import { instance } from "./instance";

export const getEntryList = async ({ page }: { page: number }) => {
  const { data } = await instance.get<EntryListResponse>(
    `/ticket/live/enter-users`,
    {
      params: { page: page, size: 10 },
    },
  );

  return data;
};
