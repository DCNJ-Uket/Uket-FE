import axios from "axios";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;
const SERVER_VERSION = "/api/v1";

export const instance = axios.create({
  baseURL: `${BASE_URL}${SERVER_VERSION}`,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

instance.interceptors.request.use(config => {
  if (config.url === "/users/register") {
    const accessToken = localStorage.getItem("accessToken");

    config.headers.Authorization = `Bearer ${accessToken}`;
  }

  return config;
});
