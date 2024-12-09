import { cn } from "@uket/ui/lib/utils";

interface TicketContainerProps {
  children: React.ReactNode;
  isDisabled: boolean;
  isSoldOut: boolean;
  onSelect: () => void;
}

const TicketContainer = (props: TicketContainerProps) => {
  const { children, isDisabled, isSoldOut, onSelect } = props;

  return (
    <div
      className={cn(
        "z-40 flex w-full flex-col gap-[9px] rounded-lg bg-white px-5 pb-[15px] pt-[17px] shadow-lg",
        (isDisabled || isSoldOut) &&
          "pointer-events-none bg-[#D9D9D9] opacity-60",
      )}
      onClick={onSelect}
    >
      {children}
    </div>
  );
};

export default TicketContainer;
