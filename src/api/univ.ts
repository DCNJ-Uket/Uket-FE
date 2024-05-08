import { AxiosError } from "axios";

import { UniversityListResponse } from "@/types/univType";

import { instance } from "@/api/instance";

export const getUniversityList = async () => {
  try {
    const { data } =
      await instance.get<UniversityListResponse>(`/universities`);

    return data.items;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};
