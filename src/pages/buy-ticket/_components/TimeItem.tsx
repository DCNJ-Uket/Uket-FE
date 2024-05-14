interface TimeItemProps {
  title: string;
  //date: Date;
}

const TimeItem = (props: TimeItemProps) => {
  const { title } = props;

  return (
    <div className="flex w-full flex-col gap-[9px] rounded-lg bg-white px-5 pb-[15px] pt-[17px] shadow-lg">
      <div className="flex justify-between">
        <div className="text-[32px] font-extrabold">{title}</div>
        <div className="self-center">
          <div className="h-8 w-8 rounded-full bg-brand"></div>
        </div>
      </div>

      <div className="my-[1%] w-full border-[0.5px] border-[#CCCCCC]"></div>

      <div className="flex gap-10 text-xs">
        <div className="flex gap-2">
          <p className="font-medium">남은 티켓 수량</p>
          <p className="text-[#FD724F]">40개</p>
        </div>
        <div className="flex gap-2">
          <p className="font-medium">총 티켓 수량</p>
          <p className="text-[#5E5E6E]">100 개</p>
        </div>
      </div>
    </div>
  );
};

export default TimeItem;
