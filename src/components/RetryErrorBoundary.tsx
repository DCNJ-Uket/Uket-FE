import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

import { Button } from "./ui/button";

const RetryErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ error, resetErrorBoundary }) => {
        const errorMessage = error.response.data.message;

        return (
          <div className="flex flex-col gap-10 justify-center items-center w-full h-full">
            <header className="text-center">
              <h1 className="text-2xl font-bold">잠시 후 다시 시도해주세요</h1>
              <h2 className="text-gray-700">{errorMessage}</h2>
            </header>
            <Button
              onClick={() => resetErrorBoundary()}
              className="py-5 w-full max-w-sm text-base bg-brand"
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
