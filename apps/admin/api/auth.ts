import {
  LoginRequestParams,
  LoginResponse,
  SignupRequestParams,
  SignupResponse,
} from "@/types/authType";

import { instance } from "./instance";

export const login = async ({ email, password }: LoginRequestParams) => {
  const { data } = await instance.post<LoginResponse>(`/auth/login`, {
    email,
    password,
  });

  return data;
};

export const signup = async ({
  email,
  password,
  name,
}: SignupRequestParams) => {
  const { data } = await instance.post<SignupResponse>(`/auth/signup`, {
    email,
    password,
    name,
  });

  return data;
};
