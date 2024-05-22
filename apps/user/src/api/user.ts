import { instance } from "./instance";

export const getUserInfo = async () => {
  const { data } = await instance.get("/users/info");

  return data;
};
