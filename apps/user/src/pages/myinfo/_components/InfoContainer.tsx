import { useState } from "react";
import { Button } from "@uket/ui/components/ui/button";

interface InfoContainerProps {
  title: string;
  isGeneralInfo?: boolean;
  children: React.ReactNode;
}

const InfoContainer = (props: InfoContainerProps) => {
  const { title, isGeneralInfo, children } = props;

  const [isEdit, setIsEdit] = useState(false);
  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  return (
    <div className="flex w-full flex-col gap-2 bg-white px-6 pb-6 pt-4">
      <div className="flex h-8 items-center justify-between">
        <div className="text-lg font-bold text-[#17171B]">{title}</div>
        {isGeneralInfo && !isEdit && (
          <Button
            variant="link"
            className="cursor-pointer p-0 pr-px text-sm text-[#5E5E6E] underline"
            onClick={handleIsEdit}
          >
            편집
          </Button>
        )}
        {isEdit && (
          <div className="flex gap-6">
            <Button
              variant="link"
              className="cursor-pointer p-0 pr-px text-sm  text-[#8989A1] underline"
              onClick={handleIsEdit}
            >
              취소
            </Button>
            <Button
              variant="link"
              className="cursor-pointer p-0 pr-px text-sm text-[#724FFD] underline"
            >
              저장
            </Button>
          </div>
        )}
      </div>
      <div className="mb-3 w-full border-t-[0.3px] border-[#5E5E6E] opacity-50"></div>
      <div className="flex flex-col gap-3">{children}</div>
    </div>
  );
};

export default InfoContainer;
