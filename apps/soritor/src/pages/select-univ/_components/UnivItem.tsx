import { cn } from "@uket/ui/lib/utils";
import { FestivalUniversity } from "@uket/api/types/univ";

import Image from "@/components/Image";

interface UnivItemProps
  extends Pick<
    FestivalUniversity,
    "logoUrl" | "name" | "eventName" | "startDateTime"
  > {
  isSelected?: boolean;
  onSelect: () => void;
}

const UnivItem = (props: UnivItemProps) => {
  const { isSelected, onSelect, name, eventName, logoUrl } = props;
  const festivalLogo = logoUrl ? (
    <Image
      src={logoUrl}
      alt={name}
      width={200}
      loading="lazy"
      className="h-full object-contain"
    />
  ) : (
    <div className="text-desc flex h-full w-full items-center justify-center rounded-lg text-sm">
      배너 이미지가 없어요.
    </div>
  );

  return (
    <div
      className="flex cursor-pointer flex-col items-center justify-center gap-3"
      onClick={onSelect}
    >
      <div
        className={cn(
          "h-80 w-full rounded-2xl bg-white p-3 shadow-md transition-colors duration-300",
          isSelected && "bg-brand/50",
        )}
      >
        {festivalLogo}
      </div>
      <header className="text-center">
        <p className="whitespace-wrap font-bold">{eventName}</p>
      </header>
    </div>
  );
};

export default UnivItem;
