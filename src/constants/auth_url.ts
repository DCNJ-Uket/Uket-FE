export const BASE_URL =
  import.meta.env.MODE === "development"
    ? "https://localhost:5173"
    : "https://www.uket.site";

export const KAKAO_REDIRECT_URI = `${BASE_URL}/login/kakao`;
export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${KAKAO_REDIRECT_URI}`;

export const GOOGLE_REDIRECT_URI = `${BASE_URL}/login/google`;
export const GOOGLE_LOGIN_URL = `https://accounts.google.com/o/oauth2/v2/auth?response_type=code&scope=email+profile&client_id=${import.meta.env.VITE_GOOGLE_CLIENT_ID}&redirect_uri=${GOOGLE_REDIRECT_URI}`;
