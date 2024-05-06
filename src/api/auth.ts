import { AxiosError } from "axios";

import { FormSchemaType } from "@/hooks/useStackForm";

import { GOOGLE_REDIRECT_URI, KAKAO_REDIRECT_URI } from "@/constants/auth_url";

import { LoginRequestParams } from "@/types/authType";

import { getAccessToken } from "@/utils/handleToken";
import { getRefreshToken } from "@/utils/handleCookie";

import { instance } from "./instance";

// export interface SignUpData
export const login = async ({ code, provider }: LoginRequestParams) => {
  const redirect_uri =
    provider === "google" ? GOOGLE_REDIRECT_URI : KAKAO_REDIRECT_URI;

  try {
    const { data } = await instance.post(`/auth/login/${provider}`, {
      code,
      redirectUri: redirect_uri,
    });

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};

export const signup = async ({
  userType,
  userName,
  userPhone,
  userUniv,
  userId,
  userMajor,
}: Partial<FormSchemaType>) => {
  const isUnivStudent = userType === "univ";
  const baseBody = {
    depositorName: userName,
    phoneNumber: userPhone,
  };
  const univBody = {
    ...baseBody,
    university: userUniv,
    studentMajor: userMajor,
    studentCode: userId,
  };

  try {
    const { data } = await instance.post(
      "/users/register",
      isUnivStudent ? univBody : baseBody,
    );

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};

export const reissue = async () => {
  const reissueToken = getRefreshToken("reissueToken");
  const accessToken = getAccessToken();

  try {
    const { data } = await instance.post("/auth/reissue", {
      accessToken,
      reissueToken,
    });

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};
