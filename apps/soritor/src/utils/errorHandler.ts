import { toast } from "@uket/ui/components/ui/sonner";

import CustomAxiosError from "./customError";

export const useHandleError = () => {
  // 토스트를 띄워줍니다.
  const errorHandler = (error: CustomAxiosError) => {
    if (error.isToast) {
      toast.error(`${error.errorContent?.title || "에러가 발생했어요"}`, {
        description:
          error.errorContent?.description || "잠시 후 시도해 주세요.",
      });
    }
  };

  return { errorHandler };
};
