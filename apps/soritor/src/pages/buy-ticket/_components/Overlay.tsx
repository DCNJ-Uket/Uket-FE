interface OverlayProps {
  disabledMent?: string;
}

const Overlay = (props: OverlayProps) => {
  const { disabledMent } = props;

  return (
    <>
      {disabledMent ? (
        <div className="absolute left-0 top-1/2 z-30 flex w-full -translate-y-1/2 items-center justify-center">
          <div className="whitespace-nowrap text-center text-lg font-extrabold text-[#FD724F]">
            {disabledMent} OPEN
          </div>
        </div>
      ) : (
        <div className="absolute inset-y-0 right-3 z-40 flex w-12 items-center justify-center bg-[#D9D9D9] text-xs font-bold">
          <div className="rotate-90 whitespace-nowrap text-[#FD724F]">
            Sold Out
          </div>
        </div>
      )}
    </>
  );
};

export default Overlay;
