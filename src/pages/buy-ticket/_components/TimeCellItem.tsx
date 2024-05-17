import { cn } from "@/lib/utils";

interface TimeCellItemProps {
  title: string;
  amount: string;
  color: string;
}

const TimeCellItem = (props: TimeCellItemProps) => {
  const { title, amount, color } = props;

  return (
    <div className="flex gap-2">
      <p className="font-medium">{title}</p>
      <p className={cn(`text-[#${color}]`)}>{amount} 개</p>
    </div>
  );
};

export default TimeCellItem;
