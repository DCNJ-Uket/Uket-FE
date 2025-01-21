import dayjs from "dayjs";
import { useSuspenseQuery } from "@tanstack/react-query";
import { createQueryKeys } from "@lukemorales/query-key-factory";

import {
  getFestiavalByUniversity,
  getFestivalUniversityList,
  searchUniversityList,
} from "@/api/univ";

import { FestivalUniversity } from "@/types/univType";


export const festival = createQueryKeys("festival", {
  list: () => ({
    queryKey: ["festival-list"],
    queryFn: getFestivalUniversityList,
  }),
  detail: (id: FestivalUniversity["id"]) => ({
    queryKey: ["festival-detail"],
    queryFn: () => getFestiavalByUniversity(id),
  }),
  certification: () => ({
    queryKey: ["certification"],
    queryFn: searchUniversityList,
  }),
});

/**
 * 현재 진행중인 모든 축제의 목록을 조회합니다.
 * @returns {FestivalUniversity[]} 축제 목록 배열
 */
export const useQueryFestivalList = () => {
  return useSuspenseQuery({
    ...festival.list(),
    select: data =>
      data.map(item => ({
        ...item,
        startDateTime: dayjs(item.startDateTime).format("YYYY.MM.DD HH:mm"),
      })),
  });
};

/**
 * 전달된 id값을 가지는 축제의 상세 정보를 조회합니다.
 * @param {FestivalUniversity["id"]} id
 * @returns {FestivalInfo}
 */
export const useQueryFestivalDetail = (id: FestivalUniversity["id"]) => {
  return useSuspenseQuery(festival.detail(id));
};

/**
 * 인증 가능한 모든 대학을 조회합니다.
 * soritor 도메인에서는 사용하지 않습니다.
 * @returns {UniversityInfo[]}
 */
export const useQueryFestivalCertification = () => {
  return useSuspenseQuery(festival.certification());
};
