import { setCookie } from "./handleCookie";

export const getAccessToken = () => {
  return localStorage.getItem("accessToken");
};

export const saveTokenList = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  setCookie("refreshToken", refreshToken, {
    httpOnly: true,
    maxAge: 60 * 60 * 24 * 14,
    path: "/",
  });
};
