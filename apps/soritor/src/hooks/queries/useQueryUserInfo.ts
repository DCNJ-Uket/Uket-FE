/* eslint-disable react-hooks/rules-of-hooks */
import { useSuspenseQuery } from "@tanstack/react-query";

import { getUserInfo } from "@/api/user";

import { UserInfoResponse } from "@/types/userType";

import { getAccessToken } from "@/utils/handleToken";
import { getRefreshToken } from "@/utils/handleCookie";


export const useQueryUserInfo = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken("refreshToken");

  if (!accessToken || !refreshToken) return { data: null };

  const { data } = useSuspenseQuery<UserInfoResponse>({
    queryKey: ["user-info"],
    queryFn: () => getUserInfo(),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  return { data: data };
};
