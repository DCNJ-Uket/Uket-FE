import { FallbackProps } from "react-error-boundary";
import { cn } from "@uket/ui/lib/utils";

import BrandButton from "./BrandButton";

interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {}

const ErrorHeader = (props: ErrorProps) => {
  const { className, children, ...rest } = props;
  return (
    <header className={className} {...rest}>
      {children}
    </header>
  );
};

const ErrorTitle = (props: ErrorProps) => {
  const { className, children, ...rest } = props;
  return (
    <h1 className={cn("text-lg font-bold", className)} {...rest}>
      {children}
    </h1>
  );
};

const ErrorDescription = (props: ErrorProps) => {
  const { className, children, ...rest } = props;
  return (
    <p className={cn("text-sm text-gray-700", className)} {...rest}>
      {children}
    </p>
  );
};

const ErrorContainer = (props: ErrorProps) => {
  const { className, children, ...rest } = props;
  return (
    <div
      className={cn(
        "flex h-full w-full items-center justify-center gap-3",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

const DefaultErrorFallback = (props: FallbackProps) => {
  const { error, resetErrorBoundary } = props;
  const errorMessage = error.response.data.message;

  return (
    <ErrorContainer className="flex-col gap-10">
      <ErrorHeader className="text-center">
        <ErrorTitle className="text-xl">잠시 후 다시 시도해주세요</ErrorTitle>
        <ErrorDescription>{errorMessage}</ErrorDescription>
      </ErrorHeader>
      <BrandButton
        title="다시 시도"
        onClick={resetErrorBoundary}
        className="bg-brand w-32 max-w-32 basis-0 py-5 text-base"
      />
    </ErrorContainer>
  );
};

export {
  ErrorHeader,
  ErrorTitle,
  ErrorDescription,
  ErrorContainer,
  DefaultErrorFallback,
};
