import { cn } from "@uket/ui/lib/utils";

import LogoImage from "/logo.png";

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
    <h1
      className={cn(
        "flex flex-col items-center justify-center gap-9  text-lg font-bold",
        className,
      )}
      {...rest}
    >
      <img src={LogoImage} alt="logo" loading="lazy" width={82} />
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

export { ErrorHeader, ErrorTitle, ErrorDescription, ErrorContainer };
