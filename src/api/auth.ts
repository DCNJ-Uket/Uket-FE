import { AxiosError } from "axios";

import { GOOGLE_REDIRECT_URI, KAKAO_REDIRECT_URI } from "@/constants/auth_url";

import { instance } from "./instance";

export type Provider = "kakao" | "google";

export const login = async (code: string, provider: Provider) => {
  const redirect_uri =
    provider === "google" ? GOOGLE_REDIRECT_URI : KAKAO_REDIRECT_URI;

  try {
    const { data } = await instance.post(`/auth/login/${provider}`, {
      code,
      redirectUri: redirect_uri,
    });

    const { isRegistered } = data;

    return isRegistered;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};
