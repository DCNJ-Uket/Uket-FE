import { TermAgreedParams, TermAgreedResponse, TermListResponse } from "@/types/termType";

import { fetcher } from "./instance";

export const getTermList = async () => {
  const { data } = await fetcher.get<TermListResponse>("/terms");

  return data.items;
};

export const agreeTerm = async (agreements: TermAgreedParams[]) => {
  const { data } = await fetcher.post<TermAgreedResponse>("/terms/agreement", agreements);

  return data;
};
