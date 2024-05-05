export const saveTokenList = (accessToken: string, refreshToken: string) => {
  localStorage.setItem("accessToken", accessToken);
  localStorage.setItem("refreshToken", refreshToken);
};

export const getAccessToken = () => {
  try {
    const accessToken = localStorage.getItem("accessToken");
    
    return accessToken ? accessToken : null;
  } catch (error) {
    return null;
  }
};
