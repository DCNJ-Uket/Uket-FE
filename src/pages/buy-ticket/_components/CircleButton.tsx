import { cn } from "@/lib/utils";

interface CircleButtonProps {
  isSelected: boolean;
}

const CircleButton = (props: CircleButtonProps) => {
  const { isSelected } = props;

  return (
    <div
      className={cn(
        "flex aspect-square h-8 w-8 items-center justify-center rounded-full bg-[#CCCCCC]",
        isSelected && "bg-brand",
      )}
    >
      <div
        className={cn(
          "aspect-square h-3 w-3 rounded-full bg-[#F2F2F2]",
          isSelected && "bg-[#D7CDFE]",
        )}
      ></div>
    </div>
  );
};

export default CircleButton;
