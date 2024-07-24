import React from "react";
import { VariantProps, cn } from "@uket/ui/lib/utils";
import { Badge, badgeVariants } from "@uket/ui/components/ui/badge";

import { TicketItem } from "@/types/ticketType";

type BadgeVariant = VariantProps<typeof badgeVariants>["variant"];

interface IndicatorBadge extends React.HTMLAttributes<HTMLDivElement> {
  title: string;
  rounded?: boolean;
  variant?: TicketItem["ticketStatus"];
}

const VARIANT_MAPPING: Record<string, BadgeVariant> = {
  "입금 확인중": "deposit",
  "예매 완료": "reservation",
  "입장 완료": "enter",
};

const Indicator = (props: IndicatorBadge) => {
  const { title, rounded, variant, className } = props;

  return (
    <Badge
      className={cn(
        "absolute left-6 top-2 px-2 py-1",
        rounded ? "rounded-lg" : "rounded-md",
        !variant && "bg-[#f2f2f2c6]",
        className,
      )}
      variant={variant ? VARIANT_MAPPING[variant] : "secondary"}
    >
      {title}
    </Badge>
  );
};

export default Indicator;
