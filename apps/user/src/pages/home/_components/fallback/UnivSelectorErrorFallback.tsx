import { FallbackProps } from "react-error-boundary";
import { RotateCcwIcon } from "@uket/ui/components/ui/icon";
import { Button } from "@uket/ui/components/ui/button";

import {
  ErrorContainer,
  ErrorDescription,
  ErrorHeader,
  ErrorTitle,
} from "@/components/error/CustomError";

const UnivSelectorErrorFallback = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props;
  const errorMessage = error.response.data.message;

  return (
    <ErrorContainer>
      <ErrorHeader>
        <ErrorTitle>대학을 불러오는데 실패했어요.</ErrorTitle>
        <ErrorDescription>{errorMessage}</ErrorDescription>
      </ErrorHeader>
      <Button onClick={resetErrorBoundary} variant="ghost" size="icon">
        <RotateCcwIcon className="h-4 w-4" />
      </Button>
    </ErrorContainer>
  );
};

export default UnivSelectorErrorFallback;
