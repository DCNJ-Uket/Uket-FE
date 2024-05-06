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

export const getAccessToken = () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    
    return accessToken ? accessToken : null;
  } catch (error) {
    return null;
  }
};
