import { cn } from "@uket/ui/lib/utils";

interface TicketQuantityItemProps {
  title: string;
  amount: number;
  color: string;
}

const TicketQuantityItem = (props: TicketQuantityItemProps) => {
  const { title, amount, color } = props;

  const formatAmount = amount.toLocaleString("en-US");

  return (
    <div className="flex gap-2">
      <p className="font-medium">{title}</p>
      <p className={cn(`text-[#${color}]`)}>{formatAmount} 개</p>
    </div>
  );
};

export default TicketQuantityItem;
