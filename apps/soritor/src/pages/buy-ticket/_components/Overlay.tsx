interface OverlayProps {
  soldOut?: boolean;
}

const Overlay = (props: OverlayProps) => {
  const { soldOut } = props;

  const message = soldOut ? "Sold Out" : "Unavailable";

  return (
    <div className="absolute inset-y-0 right-3 z-40 flex w-12 items-center justify-center bg-[#D9D9D9] text-xs font-bold">
      <div className="rotate-90 whitespace-nowrap text-[#FD724F]">
        {message}
      </div>
    </div>
  );
};

export default Overlay;
