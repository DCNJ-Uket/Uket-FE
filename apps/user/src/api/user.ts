import { UserInfoResponse, UserInfoUpdateRequest } from "@/types/userType";

import { instance } from "./instance";

export const getUserInfo = async () => {
  const { data } = await instance.get("/users/info");

  return data;
};

export const updateUserInfo = async ({
  depositorName,
  phoneNumber,
}: UserInfoUpdateRequest) => {
  const { data } = await instance.patch<UserInfoResponse>("/users/info", {
    depositorName,
    phoneNumber,
  });

  return data;
};
