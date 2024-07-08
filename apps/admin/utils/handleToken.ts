export const setAccessToken = (accessToken: string) => {
  localStorage.setItem("admin-accessToken", accessToken);
};

export const getAccessToken = () => {
  try {
    const accessToken = localStorage.getItem("admin-accessToken");

    return accessToken ? accessToken : null;
  } catch (error) {
    return null;
  }
};

export const clearAccessToken = () => {
  localStorage.removeItem("admin-accessToken");
};
