import { FormSchemaType } from "@/hooks/useStackForm";

import { GOOGLE_REDIRECT_URI, KAKAO_REDIRECT_URI } from "@/constants/auth_url";

import { LoginRequestParams } from "@/types/authType";

import { getAccessToken } from "@/utils/handleToken";
import { getRefreshToken } from "@/utils/handleCookie";

import { fetcher } from "./instance";

export const login = async ({ code, provider }: LoginRequestParams) => {
  const redirect_uri =
    provider === "google" ? GOOGLE_REDIRECT_URI : KAKAO_REDIRECT_URI;

  const { data } = await fetcher.post(`/auth/login/${provider}`, {
    code,
    redirectUri: redirect_uri,
  });

  return data;
};

export const signup = async ({
  userName,
  userPhone,
}: Partial<FormSchemaType>) => {
  const baseBody = {
    depositorName: userName,
    phoneNumber: userPhone,
  };

  const { data } = await fetcher.post("/users/register", baseBody);

  return data;
};

export const reissue = async () => {
  const refreshToken = getRefreshToken("refreshToken");
  const accessToken = getAccessToken();

  const { data } = await fetcher.post(
    "/auth/reissue",
    {
      accessToken,
      refreshToken,
    },
    {
      mode: "TOAST_UI",
      errorContent: {
        title: '토큰 갱신에 오류가 발생했어요.',
        description: '다시 로그인 해주세요.',
      }
    },
  );

  const { accessToken: newAccessToken } = data;

  return newAccessToken;
};
