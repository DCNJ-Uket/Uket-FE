import { VariantProps } from "class-variance-authority";

import { Badge, badgeVariants } from "./ui/badge";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

interface IndicatorBadge {
  variant: BadgeVariant;
  title: string;
}

const TicketIndicator = (props: IndicatorBadge) => {
  const { variant, title } = props;

  return (
    <Badge
      className="absolute left-2 top-2 rounded-lg text-[10px] font-normal"
      variant={variant}
    >
      {title}
    </Badge>
  );
};

export default TicketIndicator;
