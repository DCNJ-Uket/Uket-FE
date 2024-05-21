import axios from "axios";

import { getAccessToken, setAccessToken } from "@/utils/handleToken";

import { reissue } from "./auth";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;
const SERVER_VERSION = "/api/v1";

const AUTH_REQUIRED_PATH = ["/users/register"];

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

    if (status === 401 && config.url.includes("/users/register")) {
      const newAccessToken = await reissue();

      if (!newAccessToken) return Promise.reject(error);
      setAccessToken(newAccessToken);

      config.headers.Authorization = `Bearer ${newAccessToken}`;

      return instance(config);
    }
    return Promise.reject(error);
  },
);