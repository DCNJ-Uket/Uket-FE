import { Badge } from "./ui/badge";

import { cn } from "@/lib/utils";

const variantMapping = {
  deposit: "입금 확인중",
  reservation: "예매 완료",
  enter: "입장 완료",
  darkdeposit: "입금 확인중",
  darkreservation: "예매 완료",
  darkenter: "입장 완료",
} as const;

type BadgeVariant = keyof typeof variantMapping;

interface IndicatorBadge {
  state: BadgeVariant;
}

const TicketIndicator = (props: IndicatorBadge) => {
  const { state } = props;

  return (
    <Badge
      className={cn("absolute left-2 top-2 rounded-lg text-[10px] font-normal")}
      variant={state}
    >
      {variantMapping[state]}
    </Badge>
  );
};

export default TicketIndicator;
