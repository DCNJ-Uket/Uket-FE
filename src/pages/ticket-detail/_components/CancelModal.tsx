import { useState } from "react";

import { Button } from "@/components/ui/button";

import { useNavigate } from "@/router";

interface CancelModalPops {
  modalOpen: boolean;
  setModalOpen: (modalOpen: boolean) => void;
}

const CancelModal = (props: CancelModalPops) => {
  const { setModalOpen } = props;

  const [selectYes, setSelectYes] = useState(false);
  const navigate = useNavigate();

  const handleYesClick = () => {
    setSelectYes(true);
  };

  const handleNoClick = () => {
    setSelectYes(false);
    setModalOpen(false);
  };

  const handleNavigate = () => {
    setModalOpen(false);
    navigate("/ticket-list");
  };

  const FirstModal = () => {
    return (
      <>
        <h2>정말 예매를 취소하시겠습니까?</h2>
        <Button
          className="w-full rounded-xl bg-brand p-6 text-base font-black text-white  hover:bg-brand/80 sm:w-80"
          onClick={handleYesClick}
        >
          예
        </Button>
        <Button
          className="w-full rounded-xl bg-brand p-6 text-base font-black text-white  hover:bg-brand/80 sm:w-80"
          onClick={handleNoClick}
        >
          아니오
        </Button>
      </>
    );
  };

  const SecondModal = () => {
    return (
      <>
        <h2>예매가 취소되었습니다.</h2>
        <Button
          className="w-full rounded-xl bg-brand p-6 text-base font-black text-white  hover:bg-brand/80 sm:w-80"
          onClick={handleNavigate}
        >
          확인
        </Button>
      </>
    );
  };
  return (
    <div className="bg-[#F2F2F2]">
      {!selectYes ? <FirstModal /> : <SecondModal />}
    </div>
  );
};

export default CancelModal;
