import { FallbackProps } from "react-error-boundary";
import { RotateCcwIcon } from "@uket/ui/components/ui/icon";
import { Button } from "@uket/ui/components/ui/button";

import {
  ErrorContainer,
  ErrorDescription,
  ErrorHeader,
} from "../error/CustomError";

interface TermErrorFallbackProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    FallbackProps {}

const TermErrorFallback = (props: TermErrorFallbackProps) => {
  const { resetErrorBoundary } = props;

  return (
    <ErrorContainer className="container flex-col gap-10">
      <ErrorHeader className="text-center">
        <h1>약관을 불러오는 중 오류가 발생했어요.</h1>
        <ErrorDescription>다시 시도해 주세요.</ErrorDescription>
      </ErrorHeader>
      <footer className="flex w-full flex-col items-center">
        <Button onClick={resetErrorBoundary} variant="outline" size="icon">
          <RotateCcwIcon />
        </Button>
      </footer>
    </ErrorContainer>
  );
};

export default TermErrorFallback;
