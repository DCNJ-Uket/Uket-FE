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

export const setRefreshToken = (
  name: string,
  value: string,
  options?: CookieSetOptions,
) => {
  const defaultOptions = {
    maxAge: 60 * 60 * 24 * 14,
    path: "/",
  };
  cookies.set(name, value, { ...options } || defaultOptions);
};

export const getRefreshToken = (name: string) => {
  return cookies.get(name);
};
