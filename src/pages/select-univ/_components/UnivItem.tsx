import { Skeleton } from "@/components/ui/skeleton";

import { FestivalUniversity } from "@/types/univType";

import { cn } from "@/lib/utils";

interface UnivItemProps extends Pick<FestivalUniversity, "logoUrl" | "name"> {
  isSelected?: boolean;
  onSelect: () => void;
}

const UnivItem = (props: UnivItemProps) => {
  const { isSelected, onSelect, name, logoUrl } = props;
  const univLogo = logoUrl ? (
    <img
      src={logoUrl}
      alt={name}
      width={200}
      loading="lazy"
      className="object-cover"
    />
  ) : (
    <Skeleton className="h-full w-full rounded-full" />
  );

  return (
    <div
      className="flex cursor-pointer flex-col items-center justify-center gap-3"
      onClick={onSelect}
    >
      <div
        className={cn(
          "aspect-square h-full w-full rounded-2xl bg-white p-3 shadow-md transition-colors duration-300",
          isSelected && "bg-brand/50",
        )}
      >
        {univLogo}
      </div>
      <p className="font-bold">{name}</p>
    </div>
  );
};

export default UnivItem;
