import { TermAgreedParams, TermAgreedResponse, TermListResponse } from "@/types/termType";

import { instance } from "./instance";

export const getTermList = async () => {
  const { data } = await instance.get<TermListResponse>("/terms");

  return data.items;
};

export const agreeTerm = async (agreements: TermAgreedParams[]) => {
  const { data } = await instance.post<TermAgreedResponse>("/terms/agreement", agreements);

  return data;
};
