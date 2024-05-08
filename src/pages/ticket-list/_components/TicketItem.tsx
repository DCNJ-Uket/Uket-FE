import { useState } from "react";

import { useNavigate } from "@/router";
import { cn } from "@/lib/utils";

interface TicketItemProps {
  selected?: boolean;
  onSelect: () => void;
}

// TODO: 추후에 qr코드 추가, 상세페이지 경로 수정
const TicketItem = (props: TicketItemProps) => {
  const { selected, onSelect } = props;
  const [clickQR, setClickQR] = useState(false);
  const navigate = useNavigate();

  const handleNavigate = () => {
    setClickQR(!clickQR);
    if (!clickQR) return;
    navigate("/ticket-detail");
  };

  return (
    <div
      className={cn(
        "grid h-[500px] min-w-[287px] cursor-pointer grid-cols-1 grid-rows-5 items-center justify-center divide-y divide-dashed opacity-50",
        selected && "opacity-100",
      )}
      onClick={onSelect}
    >
      <div className="row-span-4 grid h-full grid-flow-col grid-rows-2 gap-3.5 rounded-b-[27px]  rounded-t-[9px] bg-white p-4 shadow-lg">
        <div className="h-full w-full rounded-lg bg-green-800"></div>
        <div className="flex w-full flex-col justify-around p-[3px]">
          <div>
            <p className="text-[12px] text-[#5E5E6E]">건국대</p>
            <p className="text-xl font-black">녹색지대 Day 1</p>
          </div>
          <div className="grid max-h-max w-full grid-cols-2 grid-rows-2 gap-1.5 text-[12px]">
            <div>
              <p className="font-bold">예매자</p>
              <p className="text-[#5E5E6E]">김건국</p>
            </div>
            <div>
              <p className="font-bold">입장 날짜</p>
              <p className="text-[#5E5E6E]">10월 24일(수)</p>
            </div>
            <div>
              <p className="font-bold">위치(공연장)</p>
              <p className="text-[#5E5E6E]">건국대학교 노천극장</p>
            </div>
            <div>
              <p className="font-bold">입장 시간</p>
              <p className="text-[#5E5E6E]">17:00~17:20</p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex h-full w-full flex-row justify-between rounded-b-lg rounded-t-3xl bg-white p-5 shadow-lg">
        <div className="self-end text-[10px] text-[#7250FD]">
          102389751(일련번호)
        </div>
        <div
          className="aspect-square h-full min-h-[60px] self-center bg-black"
          onClick={handleNavigate}
        ></div>
      </div>
    </div>
  );
};

export default TicketItem;
