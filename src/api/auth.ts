import { AxiosError } from "axios";

import { REDIRECT_URI } from "@/constants/auth_url";

import { instance } from "./instance";

export const login = async (code: string) => {
  try {
    const { data } = await instance.post(`/auth/login/kakao`, {
      code,
      redirectUri: REDIRECT_URI,
    });

    const { isRegistered } = data;


    return isRegistered;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};
