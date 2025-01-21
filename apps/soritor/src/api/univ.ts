import { fetcher } from "@/api/instance";

import {
  FestivalUniversityResponse,
  FestivalInfoResponse,
  UniversityResponse,
} from "@/types/univType";


export const getFestivalUniversityList = async () => {
  const { data } =
    await fetcher.get<FestivalUniversityResponse>(`/universities`);

  return data.items;
};

export const getFestiavalByUniversity = async (id: string | null) => {
  const { data } = await fetcher.get<FestivalInfoResponse>(
    `/universities/${id}/event`,
  );

  return data;
};

export const searchUniversityList = async () => {
  const { data } = await fetcher.get<UniversityResponse>(
    `/universities/certification`,
  );

  return data.items;
};
