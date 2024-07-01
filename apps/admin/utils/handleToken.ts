export const setAccessToken = (accessToken: string) => {
  localStorage.setItem("accessToken", accessToken);
};

export const getAccessToken = () => {
  try {
    const accessToken = localStorage.getItem("accessToken");

    return accessToken ? accessToken : null;
  } catch (error) {
    return null;
  }
};

export const clearAccessToken = () => {
  localStorage.removeItem("accessToken");
};
