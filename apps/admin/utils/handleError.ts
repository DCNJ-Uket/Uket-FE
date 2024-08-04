import { AxiosError } from "axios";

import {
  CUSTOM_ERROR_OBJECT,
  ErrorCategory,
  ErrorType,
} from "@/constants/error";

type ErrorStatus = keyof ErrorCategory;

export const defineCustomError = (error: AxiosError, errorType: ErrorType) => {
  const errorObject = CUSTOM_ERROR_OBJECT[errorType];
  const errorStatus = error.response?.status as ErrorStatus;
  const errorCode = (error.response?.data as any)?.code as string;
  const errorTitle = errorObject[errorStatus][errorCode].title;
  const errorDescription = errorObject[errorStatus][errorCode].description;

  return {
    title: errorTitle,
    description: errorDescription,
  };
};

export const defineError = (error: AxiosError) => {
  const errorMessage = (error.response?.data as any)?.message as string;
  return { errorMessage };
};
