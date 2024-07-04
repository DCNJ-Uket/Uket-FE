import {
  EmailAuthRequestParams,
  EmailAuthResponse,
  EmailAuthVerifyParams,
} from "@/types/emailType";

import { instance } from "./instance";

export const requestEmailAuth = async ({
  email,
  universityId,
}: EmailAuthRequestParams) => {
  const { data } = await instance.post<EmailAuthResponse>(`/email/send`, {
    email,
    universityId,
  });

  return data;
};

export const verifyEmailAuth = async ({
  email,
  universityId,
  authCode,
}: EmailAuthVerifyParams) => {
  const { data } = await instance.post<EmailAuthResponse>(`/email/verify`, {
    email,
    universityId,
    authCode,
  });

  return data;
};
