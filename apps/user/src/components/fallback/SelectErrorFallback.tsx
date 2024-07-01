import { FallbackProps } from "react-error-boundary";
import { cn } from "@uket/ui/lib/utils";
import { Button } from "@uket/ui/components/ui/button";

interface SelectErrorFallbackProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    FallbackProps {
  title?: string;
}

const SelectErrorFallback = (props: SelectErrorFallbackProps) => {
  const { className, title, resetErrorBoundary, ...rest } = props;

  return (
    <Button
      variant="link"
      className={cn("p-0 text-xs underline", className)}
      onClick={() => {
        resetErrorBoundary();
      }}
      {...rest}
    >
      {title || "다시 시도"}
    </Button>
  );
};

export default SelectErrorFallback;
