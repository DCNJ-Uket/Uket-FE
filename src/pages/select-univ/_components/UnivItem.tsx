import { Skeleton } from "@/components/ui/skeleton";

import { cn } from "@/lib/utils";

interface UnivItemProps {
  selected?: boolean;
  onSelect: () => void;
}

// TODO: 대학교 목록 API로 호출하는 것으로 변경
const UnivItem = (props: UnivItemProps) => {
  const { selected, onSelect } = props;
  return (
    <div
      className="flex flex-col gap-3 justify-center items-center cursor-pointer"
      onClick={onSelect}
    >
      <div
        className={cn(
          "p-3 w-full h-full bg-white rounded-2xl shadow-md aspect-square transition-colors duration-300",
          selected && "bg-brand/50",
        )}
      >
        <Skeleton className="w-full h-full rounded-full" />
      </div>
      <p className="font-bold">건국대</p>
    </div>
  );
};

export default UnivItem;
