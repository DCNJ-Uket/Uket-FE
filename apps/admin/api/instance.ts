import axios from "axios";

import { getAccessToken } from "@/utils/handleToken";

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;
const SERVER_VERSION = "/admin/v1";

const AUTH_REQUIRED_PATH: string[] = [];
const DYNAMIC_AUTH_REQUIRED_PATH = [
  /\/ticket\/[^/]+\/enter/,
  /^\/ticket(\/.*)?$/,
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

instance.interceptors.request.use(async config => {
  if (
    config.url &&
    (AUTH_REQUIRED_PATH.includes(config.url) || isDynamicUrlMatched(config.url))
  ) {
    const accessToken = await getAccessToken();

    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});

// TODO: interceptor 에러 발생 시 처리 로직 추가
instance.interceptors.response.use(
  async response => {
    return response;
  },
  async error => {
    return Promise.reject(error);
  },
);
