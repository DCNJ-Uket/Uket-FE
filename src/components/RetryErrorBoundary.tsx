import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

import { Button } from "./ui/button";

const RetryErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={({ resetErrorBoundary }) => (
        <div>
          <p> 데이터를 불러오는데 실패하였습니다. </p>
          <Button onClick={() => resetErrorBoundary()}>다시 시도</Button>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default RetryErrorBoundary;
