import { getAccessToken } from "@/utils/handleToken";

// TODO: 로직의 정당성 & 합리성 체크 -> accessToken이 만료된거라면, 로컬 스토리지에 저장된 값으로 판단하는게 의미가 없다. -> 사용자 정보 조회 API로 교체
export const useAuth = () => {
  const isAuthenticated = getAccessToken();

  return isAuthenticated;
};
