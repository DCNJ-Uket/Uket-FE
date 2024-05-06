import { setRefreshToken } from "./handleCookie";

export const saveTokenList = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  setRefreshToken("refreshToken", refreshToken, {
    maxAge: 60 * 60 * 24 * 14,
    path: "/",
  });
};

export const getAccessToken = () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    return accessToken ? accessToken : null;
  } catch (error) {
    return null;
  }
};
