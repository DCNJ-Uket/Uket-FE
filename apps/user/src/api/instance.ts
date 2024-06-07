import axios from "axios";

import {
  clearAccessToken,
  getAccessToken,
  setAccessToken,
} from "@/utils/handleToken";
import { clearRefreshToken } from "@/utils/handleCookie";

import { reissue } from "./auth";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;
const SERVER_VERSION = "/api/v1";

const AUTH_REQUIRED_PATH = ["/users/register", "/users/info", "/tickets"];
const DYNAMIC_AUTH_REQUIRED_PATH = [
  /\/events\/\d+\/shows/,
  /\/events\/shows\/\d+\/reservations/,
];

const isDynamicUrlMatched = (url: string): boolean => {
  return DYNAMIC_AUTH_REQUIRED_PATH.some(path => path.test(url));
};

export const instance = axios.create({
  baseURL: `${BASE_URL}${SERVER_VERSION}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(config => {
  if (config.url && AUTH_REQUIRED_PATH.includes(config.url)) {
    const accessToken = getAccessToken();

    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

instance.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    const { status, config } = error.response;

    if (
      (status === 404 || status === 403 || status === 400) &&
      config.url === "/auth/reissue"
    ) {
      clearAccessToken("accessToken");
      clearRefreshToken("refreshToken");
      window.location.replace("/login");
    }

    if (
      status === 401 &&
      AUTH_REQUIRED_PATH.includes(config.url) &&
      isDynamicUrlMatched(config.url)
    ) {
      const newAccessToken = await reissue();

      setAccessToken(newAccessToken);

      config.headers.Authorization = `Bearer ${newAccessToken}`;

      return instance(config);
    }
    return Promise.reject(error);
  },
);
