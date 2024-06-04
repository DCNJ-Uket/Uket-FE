import axios from "axios";

import { getAccessToken, setAccessToken } from "@/utils/handleToken";

import { reissue } from "./auth";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;
const SERVER_VERSION = "/api/v1";

const AUTH_REQUIRED_PATH = ["/users/register", "/users/info", "/tickets"];

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

    if (config.url === "/auth/reissue") {
      window.location.href = "/login";
      return Promise.reject(error);
    }

    if (status === 401 && AUTH_REQUIRED_PATH.includes(config.url)) {
      const newAccessToken = await reissue();

      if (!newAccessToken) {
        window.location.href = "/login";
        return Promise.reject(error);
      }

      setAccessToken(newAccessToken);

      config.headers.Authorization = `Bearer ${newAccessToken}`;

      return instance(config);
    }
    return Promise.reject(error);
  },
);
