import SelectTicketItem from "./SelectTicketItem";

interface SelectHeaderProps {
  univName: string | null;
  reservationUserType: string;
  formatShowDate: string;
  formatSelectTime?: string;
}

const SelectHeader = (props: SelectHeaderProps) => {
  const { univName, reservationUserType, formatShowDate, formatSelectTime } =
    props;

  return (
    <div className="sticky left-0 top-0 z-50 flex flex-col gap-2 bg-white">
      <div className="flex items-center gap-2 px-[22px]">
        <div className="text-lg font-bold">{univName}</div>
        <div className="text-sm font-semibold text-[#724FFD]">
          {reservationUserType}
        </div>
      </div>
      <div className="flex gap-3 px-[22px] pb-4">
        <SelectTicketItem title="선택 날짜" content={formatShowDate} />
        <SelectTicketItem title="선택 시간" content={formatSelectTime ?? ""} />
      </div>
    </div>
  );
};

export default SelectHeader;
