import { Badge } from "./ui/badge";

import { cn } from "@/lib/utils";

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
