import { ErrorBoundary } from "react-error-boundary";
import React from "react";
import { isAxiosError } from "axios";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

import { DefaultErrorFallback } from "./ErrorFallback";

interface RetryErrorBoundaryProps {
  children: React.ReactNode;
  resetKeys?: unknown[];
  fallbackComponent?: React.ReactNode;
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
      fallbackRender={({ error, resetErrorBoundary }) => {
        const childElement = fallbackComponent ? (
          (React.Children.only(fallbackComponent) as React.ReactElement)
        ) : (
          <DefaultErrorFallback
            error={error}
            resetErrorBoundary={resetErrorBoundary}
          />
        );
        const childWithResetBoundary = React.cloneElement(childElement, {
          error,
          resetErrorBoundary,
        } as React.Attributes);

        return childWithResetBoundary;
      }}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RetryErrorBoundary;
