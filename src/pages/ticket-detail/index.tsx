import { useState } from "react";

import WhiteLogo from "@/components/WhiteLogo";

import CellItem from "./_components/CellItem";
import CancelModal from "./_components/CancelModal";

const TicketDetail = () => {
  // TODO: 화면 밝기 높아지게 구현해야함 + 예매 취소시에 팝업창 띄우기
  const [modalOpen, setModalOpen] = useState(false);
  const handleCancelTicket = () => {
    setModalOpen(true);
  };

  return (
    <main className="relative flex h-full flex-col items-center justify-evenly bg-green-800 opacity-75">
      <header className="sticky left-0 top-0 z-10 w-full">
        <nav className="container my-2 flex h-10 w-full items-center justify-between self-stretch py-4">
          <WhiteLogo />
        </nav>
      </header>
      <section className="mt-3 h-full w-full px-4">
        <div className="flex h-full w-full flex-col gap-5 rounded-t-[9px] bg-white shadow-lg">
          <div className="mx-[88px] mt-14">
            <div className="mx-auto aspect-square max-h-[300px] min-h-[168px] min-w-[168px] max-w-[300px] bg-black"></div>
            <div className="mt-2 text-center text-[10px] text-brand">
              102389751
            </div>
          </div>
          <div className="mx-[20px] flex flex-col justify-around gap-3">
            <div className="px-[2px]">
              <p className="text-xs text-[#5E5E6E]">건국대</p>
              <p className="text-2xl font-black">녹색지대 Day 1</p>
            </div>

            <div className="my-[1%] w-full border-[1px] border-[#5E5E6E]"></div>

            <div className="grid max-h-max w-full grid-cols-2 grid-rows-3 gap-2 px-[2px] text-[12px]">
              <CellItem title={"예매자"} content={"김건국"} />
              <CellItem title={"입장 날짜"} content={"10월 24일(수)"} />
              <CellItem
                title={"위치(공연장)"}
                content={"건국대학교 노천극장"}
              />
              <CellItem title={"입장 시간"} content={"17:00~17:20"} />
              <CellItem title={"구매 일시"} content={"24년 04월 01일 (월)"} />
              <CellItem title={"회원구분"} content={"대학생 / 재학생"} />
            </div>

            <div className="my-[1%] w-full border-[1px] border-[#5E5E6E]"></div>

            <div className="px-[2px]">
              <p
                className="w-fit text-xs text-[#FD724F] underline decoration-solid"
                onClick={handleCancelTicket}
              >
                예매취소
              </p>
              {modalOpen ? (
                <CancelModal
                  modalOpen={modalOpen}
                  setModalOpen={setModalOpen}
                />
              ) : null}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TicketDetail;
