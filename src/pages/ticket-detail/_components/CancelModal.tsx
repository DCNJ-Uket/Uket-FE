import { useState } from "react";

import { Button } from "@/components/ui/button";

import { useNavigate } from "@/router";

interface CancelModalPops {
  modalOpen: boolean;
  onOpenModal: (modalOpen: boolean) => void;
}

const CancelModal = (props: CancelModalPops) => {
  const { onOpenModal } = props;

  const [selectYes, setSelectYes] = useState(false);
  const navigate = useNavigate();

  const handleClick = () => {
    setSelectYes(!selectYes);
    if (!selectYes) {
      onOpenModal(false);
    }
  };

  const handleNavigate = () => {
    onOpenModal(false);
    navigate("/ticket-list");
  };

  //TODO: 티켓 취소 기능 추가하기
  const FirstModal = () => {
    return (
      <div className="flex w-full flex-col gap-5 px-6 py-7">
        <h2 className="text-center font-black">
          정말 예매를 취소하시겠습니까?
        </h2>
        <div className="flex gap-3">
          <Button
            className="w-full rounded-xl bg-brand p-6 text-base font-black text-[#D6D6D6]  hover:bg-brand/80 sm:w-80"
            onClick={handleClick}
          >
            예
          </Button>
          <Button
            className="w-full rounded-xl bg-[#8B8B8B] p-6 text-base font-black text-[#D6D6D6]  hover:bg-[#8B8B8B]/80 sm:w-80"
            onClick={handleClick}
          >
            아니오
          </Button>
        </div>
      </div>
    );
  };

  const SecondModal = () => {
    return (
      <div className="flex w-full flex-col gap-5 px-6 py-7">
        <h2 className="text-center font-black">예매가 취소되었습니다.</h2>
        <Button
          className=" rounded-xl bg-brand p-6 text-base font-black text-[#D6D6D6]  hover:bg-brand/80 sm:w-80"
          onClick={handleNavigate}
        >
          확인
        </Button>
      </div>
    );
  };
  return (
    <div className="absolute left-1/2 top-1/2 z-[999] h-[150px] w-[285px] -translate-x-1/2 -translate-y-1/2 transform rounded-2xl bg-[#D9D9D9]">
      {!selectYes ? <FirstModal /> : <SecondModal />}
    </div>
  );
};

export default CancelModal;
