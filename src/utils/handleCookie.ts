import { Cookies } from "react-cookie";

interface CookieSetOptions {
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
  cookies.set(name, value, { ...options });
};

export const getRefreshToken = (name: string) => {
  return cookies.get(name);
};