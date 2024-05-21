import { ErrorBoundary } from "react-error-boundary";
import { useQueryErrorResetBoundary } from "@tanstack/react-query";

const CriticalErrorBoundary = ({ children }: { children: React.ReactNode }) => {
  const { reset } = useQueryErrorResetBoundary();

  return (
    <ErrorBoundary
      onReset={reset}
      fallbackRender={() => (
        <div>
          <h1>데이터를 불러오는데 실패하였습니다.</h1>
          <p>에러가 지속되면 고객센터로 문의하세요.</p>
        </div>
      )}
    >
      {children}
    </ErrorBoundary>
  );
};

export default CriticalErrorBoundary;
