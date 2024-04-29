export const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;
export const REDIRECT_URI =
  import.meta.env.MODE === "development"
    ? "https://localhost:5173/login"
    : "https://www.uket.site/login";
export const KAKAO_LOGIN_URL = `https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${import.meta.env.VITE_KAKAO_REST_API_KEY}&redirect_uri=${REDIRECT_URI}`;
export const GOOGLE_LOGIN_URL = `${BASE_URL}/${import.meta.env.VITE_GOOGLE_LOGIN}`;
