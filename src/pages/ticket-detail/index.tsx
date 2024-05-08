import WhiteLogo from "@/components/WhiteLogo";

const TicketDetail = () => {
  // TODO: 화면 밝기 높아지게 구현해야함 + 예매 취소시에 팝업창 띄우기

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
            <div className="mt-2 text-center text-[10px] text-[#7250FD]">
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
              <div>
                <p className="font-bold">구매 일시</p>
                <p className="text-[#5E5E6E]">24년 04월 01일 (월)</p>
              </div>
              <div>
                <p className="font-bold">회원구분</p>
                <p className="text-[#5E5E6E]">대학생 / 재학생</p>
              </div>
            </div>

            <div className="my-[1%] w-full border-[1px] border-[#5E5E6E]"></div>

            <div className="px-[2px]">
              <p className="text-xs text-[#FD724F] underline decoration-solid">
                예매취소
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TicketDetail;
