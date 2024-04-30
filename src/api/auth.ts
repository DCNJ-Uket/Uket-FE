import { AxiosError } from "axios";

import { GOOGLE_REDIRECT_URI, KAKAO_REDIRECT_URI } from "@/constants/auth_url";

import { LoginRequestParams } from "@/types/authType";

import { instance } from "./instance";

import { FormSchemaType } from "@/pages/signup/_hooks/useStackForm";

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
  const isUnivStudnet = userType === "univ";
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
      isUnivStudnet ? univBody : baseBody,
    );

    return data;
  } catch (error) {
    if (error instanceof AxiosError) {
      throw error;
    }
  }
};
