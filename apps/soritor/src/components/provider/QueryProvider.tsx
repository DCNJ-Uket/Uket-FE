/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable react-hooks/rules-of-hooks */
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  QueryCache,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import { SUCCESS_TOAST } from "@/constants/success_toast";

import { errorHandler } from "@/utils/errorHandler";
import CustomAxiosError from "@/utils/customError";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      throwOnError: error => {
        if (error.response?.status === 500) return true;
        // error는 axios interceptor에서 전달받은 에러 객체입니다.(CustomAxiosError)
        // error.isToast는 mode === 'TOAST_UI'를 의미합니다.
        // 따라서, 'TOAST_UI'라면 에러를 전파하지 않습니다 (return false)
        return !error.isToast;
      },
      retry: false,
      staleTime: 1000 * 60 * 10,
    },
    mutations: {
      throwOnError: error => {
        if (error.response?.status === 500) return true;
        // error는 axios interceptor에서 전달받은 에러 객체입니다.(CustomAxiosError)
        // error.isToast는 mode === 'TOAST_UI'를 의미합니다.
        // 따라서, 'TOAST_UI'라면 에러를 전파하지 않습니다 (return false)
        return !error.isToast;
      },
      onError: error => errorHandler(error as CustomAxiosError),
      onSuccess: (data, _, context) => {
        const mutationKey = (context as any)
          ?.mutationKey as keyof typeof SUCCESS_TOAST;
        if (mutationKey in SUCCESS_TOAST) {
          SUCCESS_TOAST[mutationKey].onSuccess();
        }
      },
    },
  },
  queryCache: new QueryCache({
    // throwOnError가 false일 경우에만, onError 핸들러가 호출됩니다.
    onError: error => errorHandler(error as CustomAxiosError),
  }),
});

const QueryProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
};

export default QueryProvider;
