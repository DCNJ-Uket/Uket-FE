/* eslint-disable react-hooks/rules-of-hooks */
import { useSuspenseQuery } from "@tanstack/react-query";

import { UserInfoResponse } from "@/types/userType";

import { getAccessToken } from "@/utils/handleToken";

import { getUserInfo } from "@/api/user";

export const useQueryUserInfo = () => {
  const accessToken = getAccessToken();

  if (!accessToken) return { data: null };

  const { data, error } = useSuspenseQuery<UserInfoResponse>({
    queryKey: ["user-info"],
    queryFn: () => getUserInfo(),
  });

  if (error) {
    throw error;
  }

  return { data: data || null };
};
