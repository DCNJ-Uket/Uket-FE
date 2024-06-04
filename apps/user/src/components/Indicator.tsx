import React from "react";
import { VariantProps, cn } from "@uket/ui/lib/utils";
import { Badge, badgeVariants } from "@uket/ui/components/ui/badge";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

interface IndicatorBadge extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  rounded?: boolean;
  variant: BadgeVariant;
}

const Indicator = (props: IndicatorBadge) => {
  const { title, rounded, variant, className } = props;

  return (
    <Badge
      className={cn(
        "absolute left-6 top-2 px-2 py-1",
        rounded ? "rounded-lg" : "rounded-md",
        className,
      )}
      variant={variant}
    >
      {title}
    </Badge>
  );
};

export default Indicator;
