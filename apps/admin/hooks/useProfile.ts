"use server";

import { getAccessToken } from "@/utils/handleToken";

export const useProfile = async () => {
  const accessToken = await getAccessToken();

  return { isAuthenticated: !!accessToken };
};
