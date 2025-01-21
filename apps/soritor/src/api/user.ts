import {
  UserInfoResponse,
  UserInfoUpdateRequest,
  DeleteUserResponse,
} from "@/types/userType";

import { fetcher } from "./instance";

export const getUserInfo = async () => {
  const { data } = await fetcher.get("/users/info");

  return data;
};

export const updateUserInfo = async ({
  depositorName,
  phoneNumber,
}: UserInfoUpdateRequest) => {
  const { data } = await fetcher.patch<UserInfoResponse>("/users/info", {
    depositorName,
    phoneNumber,
  });

  return data;
};

export const deleteUserInfo = async () => {
  const { data } = await fetcher.post<DeleteUserResponse>(
    "/users/delete",
    null,
    {
      mode: "TOAST_UI",
      errorContent: {
        title: "회원탈퇴 오류",
        description: "잠시 후 다시 시도해 주세요.",
      },
    },
  );

  return data;
};
