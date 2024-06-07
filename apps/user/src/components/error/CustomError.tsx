import { cn } from "@uket/ui/lib/utils";

export interface ErrorProps extends React.HTMLAttributes<HTMLDivElement> {}

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
        "flex h-dvh w-full items-center justify-center gap-3",
        className,
      )}
      {...rest}
    >
      {children}
    </div>
  );
};

export { ErrorHeader, ErrorTitle, ErrorDescription, ErrorContainer };
