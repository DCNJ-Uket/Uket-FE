import { Skeleton } from "@/components/ui/skeleton";

import { FestivalUniversity } from "@/types/univType";

import { cn } from "@/lib/utils";

interface UnivItemProps extends Pick<FestivalUniversity, "logoUrl" | "name"> {
  selected?: boolean;
  onSelect: () => void;
}

const UnivItem = (props: UnivItemProps) => {
  const { selected, onSelect, name, logoUrl } = props;
  const univLogo = logoUrl ? (
    <img
      src={logoUrl}
      alt={name}
      width={200}
      loading="lazy"
      className="object-cover"
    />
  ) : (
    <Skeleton className="w-full h-full rounded-full" />
  );

  return (
    <div
      className="flex flex-col gap-3 justify-center items-center cursor-pointer"
      onClick={onSelect}
    >
      <div
        className={cn(
          "aspect-square h-full w-full rounded-2xl bg-white p-3 shadow-md transition-colors duration-300",
          selected && "bg-brand/50",
        )}
      >
        {univLogo}
      </div>
      <p className="font-bold">{name}</p>
    </div>
  );
};

export default UnivItem;
