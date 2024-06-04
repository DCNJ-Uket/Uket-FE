import React, { PropsWithChildren } from "react";
import { cn } from "@uket/ui/lib/utils";

type CarouselDotButtonProps = PropsWithChildren<
  React.DetailedHTMLProps<
    React.ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
> & { selected: boolean };

export const CarouselDotButton = (props: CarouselDotButtonProps) => {
  const { children, className, selected, ...rest } = props;

  return (
    <button
      type="button"
      className={cn(
        "embla__dot",
        className,
        selected && " embla__dot--selected",
      )}
      {...rest}
    >
      {children}
    </button>
  );
};
