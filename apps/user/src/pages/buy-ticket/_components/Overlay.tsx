import { cn } from "@uket/ui/lib/utils";

interface OverlayProps {
  message: string;
  soldOut?: boolean;
}

const Overlay = (props: OverlayProps) => {
  const { message, soldOut } = props;

  return (
    <div
      className={cn(
        "absolute inset-y-0 z-50 flex items-center justify-center text-xs font-bold",
        soldOut ? "right-3 w-12 bg-[#D9D9D9]" : "inset-x-0",
      )}
    >
      <div className={cn("text-[#FD724F]", soldOut && "rotate-90")}>
        {message}
      </div>
    </div>
  );
};

export default Overlay;
