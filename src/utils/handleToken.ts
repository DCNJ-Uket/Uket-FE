export const saveTokenList = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};
