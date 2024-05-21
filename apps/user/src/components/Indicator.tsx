import React from "react";
import { cn } from "@uket/ui/lib/utils";
import { Badge } from "@uket/ui/components/ui/badge";

interface IndicatorBadge {
  title: string;
  rounded?: boolean;
}

const Indicator = (props: IndicatorBadge) => {
  const { title, rounded } = props;

  return (
    <Badge
      className={cn(
        "absolute left-6 top-2",
        rounded ? "rounded-lg" : "rounded-md",
      )}
      variant="banner"
    >
      {title}
    </Badge>
  );
};

export default Indicator;
