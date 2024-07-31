"use server";

import { cookies } from "next/headers";

export const setAccessToken = async (accessToken: string) => {
  cookies().set({
    name: "admin-accessToken",
    value: accessToken,
    maxAge: 60 * 60 * 6,
  });
};

export const getAccessToken = async () => {
  try {
    const accessToken = cookies().get("admin-accessToken")?.value;

    return accessToken ? accessToken : null;
  } catch (error) {
    return null;
  }
};

export const clearAccessToken = async () => {
  cookies().delete("admin-accessToken");
};
