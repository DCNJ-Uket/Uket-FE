import { ErrorBoundary } from "react-error-boundary";
import { isAxiosError } from "axios";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

import { Button } from "./ui/button";

const RetryErrorBoundary = ({
  children,
  resetKeys,
}: {
  children: React.ReactNode;
  resetKeys?: unknown[];
}) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      resetKeys={resetKeys}
      onError={error => {
        if (isAxiosError(error) && error?.response?.status === 500) {
          throw error;
        }
      }}
      fallbackRender={({ error, resetErrorBoundary }) => {
        const errorMessage = error.response.data.message;

        return (
          <div className="flex h-full w-full flex-col items-center justify-center gap-10">
            <header className="text-center">
              <h1 className="text-2xl font-bold">잠시 후 다시 시도해주세요</h1>
              <h2 className="text-gray-700">{errorMessage}</h2>
            </header>
            <Button
              onClick={() => resetErrorBoundary()}
              className="w-full max-w-sm bg-brand py-5 text-base"
            >
              다시 시도
            </Button>
          </div>
        );
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RetryErrorBoundary;
