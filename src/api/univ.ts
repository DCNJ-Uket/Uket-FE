import { AxiosError } from "axios";

import {
  MajorInfo,
  UniversityInfo,
  UnivOrMajorResponse,
  FestivalUniversityResponse,
} from "@/types/univType";

import { instance } from "@/api/instance";

export const getFestivalUniversityList = async () => {
  try {
    const { data } =
      await instance.get<FestivalUniversityResponse>(`/universities`);

    return data.items;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};

export const getUniversityList = async (query: string) => {
  try {
    instance.defaults.baseURL =
      "//www.career.go.kr/cnet/openapi/getOpenApi.json";

    const params = {
      apiKey: `${import.meta.env.VITE_CAREER_API_KEY}`,
      svcType: "api",
      svcCode: "SCHOOL",
      contentType: "json",
      gubun: "univ_list",
      searchSchulNm: `${query}`,
    };

    const { data } = await instance.get<UnivOrMajorResponse<UniversityInfo>>(
      ``,
      {
        params,
      },
    );

    return data.dataSearch.content;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};

export const getMajorList = async (query: string) => {
  try {
    instance.defaults.baseURL = `//www.career.go.kr/cnet/openapi/getOpenApi.json`;

    const params = {
      apiKey: `${import.meta.env.VITE_CAREER_API_KEY}`,
      svcType: "api",
      svcCode: "MAJOR",
      contentType: "json",
      gubun: "univ_list",
      perPage: "50",
      searchTitle: `${query}`,
    };

    const { data } = await instance.get<UnivOrMajorResponse<MajorInfo>>(``, {
      params,
    });

    return data.dataSearch.content;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};
