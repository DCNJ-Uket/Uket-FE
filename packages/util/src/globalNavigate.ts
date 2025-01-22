import { NavigateOptions } from "react-router-dom";

/* eslint-disable no-console */
let globalNavigate: ReturnType<typeof import("react-router-dom").useNavigate>;

const setGlobalNavigate = (navigate: typeof globalNavigate) => {
  globalNavigate = navigate;
};

const navigateTo = (path: string, options?: NavigateOptions) => {
  if (globalNavigate) {
    globalNavigate(path, options);
  } else {
    console.log(
      "navigateTo Function was called before navigate was initialized",
    );
  }
};

export { setGlobalNavigate, navigateTo };
