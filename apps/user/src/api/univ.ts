import {
  FestivalUniversityResponse,
  FestivalInfoResponse,
  UniversityResponse,
} from "@/types/univType";

import { instance } from "@/api/instance";

export const getFestivalUniversityList = async () => {
  const { data } =
    await instance.get<FestivalUniversityResponse>(`/universities`);

  return data.items;
};

export const getFestiavalByUniversity = async (id: string | null) => {
  const { data } = await instance.get<FestivalInfoResponse>(
    `/universities/${id}/event`,
  );
  return data;
};

export const searchUniversityList = async () => {
  const { data } = await instance.get<UniversityResponse>(
    `/universities/certification`,
  );

  return data.items;
};
