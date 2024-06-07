/* eslint-disable react-hooks/rules-of-hooks */
import { useSuspenseQuery } from "@tanstack/react-query";

import { UserInfoResponse } from "@/types/userType";

import { getAccessToken } from "@/utils/handleToken";
import { getRefreshToken } from "@/utils/handleCookie";

import { getUserInfo } from "@/api/user";

export const useQueryUserInfo = () => {
  const accessToken = getAccessToken();
  const refreshToken = getRefreshToken("refreshToken");

  if (!accessToken || !refreshToken) return { data: null };

  const { data, error } = useSuspenseQuery<UserInfoResponse>({
    queryKey: ["user-info"],
    queryFn: () => getUserInfo(),
    refetchOnMount: true,
    refetchOnWindowFocus: true,
  });

  if (error) {
    throw error;
  }

  return { data: data || null };
};
