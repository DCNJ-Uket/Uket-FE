import { type VariantProps } from "@uket/ui/lib/utils";

import { Badge, badgeVariants } from "@uket/ui/components/ui/badge";

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
