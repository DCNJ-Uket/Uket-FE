import { ErrorBoundary, FallbackProps } from "react-error-boundary";
import React from "react";
import { isAxiosError } from "axios";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

import DefaultErrorFallback from "../fallback/DefaultErrorFallback";

interface RetryErrorBoundaryProps {
  children: React.ReactNode;
  resetKeys?: unknown[];
  fallbackComponent?: (props: FallbackProps) => React.ReactNode;
}

const RetryErrorBoundary = ({
  children,
  resetKeys,
  fallbackComponent,
}: RetryErrorBoundaryProps) => {
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
      fallbackRender={fallbackComponent || DefaultErrorFallback}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RetryErrorBoundary;
