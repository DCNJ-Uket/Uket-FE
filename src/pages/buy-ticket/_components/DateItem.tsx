import CircleButton from "./CircleButton";

interface DateItemProps {
  title: string;
  isSelected: boolean;
  onSelect: () => void;
}

const DateItem = (props: DateItemProps) => {
  const { title, isSelected, onSelect } = props;

  return (
    <div
      className="flex w-full flex-col gap-[9px] rounded-lg bg-white px-5 pb-[15px] pt-[17px] shadow-lg"
      onClick={onSelect}
    >
      <div className="flex justify-between">
        <div className="text-[42px] font-black">{title}</div>
        <div className="self-center">
          <CircleButton isSelected={isSelected} />
        </div>
      </div>

      <div className="my-[1%] w-full border-[0.5px] border-[#CCCCCC]"></div>

      <div className="flex gap-10 text-xs">
        <div className="flex gap-2">
          <p className="font-medium">일시</p>
          <div>
            <p className="text-[#5E5E6E]">2024.11.09</p>
            <p className="text-[#5E5E6E]">13:00 ~ 20:00</p>
          </div>
        </div>
        <div className="flex gap-2">
          <p className="font-medium">티켓 수량</p>
          <p className="text-[#5E5E6E]">2,000 개</p>
        </div>
      </div>
    </div>
  );
};

export default DateItem;
