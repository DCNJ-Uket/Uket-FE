import { Cookies } from "react-cookie";

export interface CookieSetOptions {
  path?: string;
  expires?: Date;
  maxAge?: number;
  domain?: string;
  secure?: boolean;
  httpOnly?: boolean;
  sameSite?: boolean | "none" | "lax" | "strict";
  partitioned?: boolean;
}

const cookies = new Cookies();

export const setCookie = (
  name: string,
  value: string,
  options?: CookieSetOptions,
) => {
  const defaultOptions: CookieSetOptions = {
    maxAge: 60 * 60 * 2,
    path: "/",
  };

  cookies.set(name, value, { ...defaultOptions, ...options });
};

export const getCookie = (name: string) => {
  return cookies.get(name);
};

export const deleteCookie = (name: string, options?: CookieSetOptions) => {
  cookies.remove(name, { ...options });
};

export const setRefreshToken = (
  name: string,
  value: string,
  options?: CookieSetOptions,
) => {
  const defaultOptions: CookieSetOptions = {
    maxAge: 60 * 60 * 2,
    path: "/",
  };
  cookies.set(name, value, { ...defaultOptions, ...options });
};

export const getRefreshToken = (name: string) => {
  return cookies.get(name);
};

export const clearRefreshToken = (name: string) => {
  return cookies.remove(name);
};
