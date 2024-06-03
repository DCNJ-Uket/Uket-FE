import { FallbackProps } from "react-error-boundary";
import { cn } from "@uket/ui/lib/utils";
import { Button } from "@uket/ui/components/ui/button";

interface LoginErrorFallbackProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    FallbackProps {}

const LoginErrorFallback = (props: LoginErrorFallbackProps) => {
  const { className, resetErrorBoundary, ...rest } = props;

  return (
    <Button
      variant="link"
      className={cn("p-0 text-xs underline", className)}
      onClick={resetErrorBoundary}
      {...rest}
    >
      다시 시도
    </Button>
  );
};

export default LoginErrorFallback;
