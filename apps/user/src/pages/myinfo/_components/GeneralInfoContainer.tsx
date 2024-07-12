import { useState } from "react";
import { Button } from "@uket/ui/components/ui/button";

import { useMutationUpdateInfo } from "@/hooks/mutations/useMutationUpdateInfo";

import InfoItem from "./InfoItem";

interface GeneralInfoContainerProps {
  depositorName: string;
  phoneNumber: string;
  universityName: string;
}

const GeneralInfoContainer = (props: GeneralInfoContainerProps) => {
  const { depositorName, phoneNumber, universityName } = props;

  const mutation = useMutationUpdateInfo();

  const [isEdit, setIsEdit] = useState(false);
  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const [editedDepositorName, setEditedDepositorName] = useState(depositorName);
  const [editedPhoneNumber, setEditedPhoneNumber] = useState(phoneNumber);

  const handleDepositorNameChange = (
    e: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEditedDepositorName(e.target.value);
  };

  const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedPhoneNumber(e.target.value);
  };

  const handleUpdate = () => {
    mutation.mutate(
      { depositorName: editedDepositorName, phoneNumber: editedPhoneNumber },
      {
        onSuccess: () => {
          setIsEdit(false);
        },
      },
    );
  };

  return (
    <div className="flex w-full flex-col gap-2 bg-white px-6 pb-6 pt-4">
      <div className="flex h-8 items-center justify-between">
        <div className="text-lg font-bold text-[#17171B]">일반</div>
        {!isEdit && (
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
              onClick={handleUpdate}
            >
              저장
            </Button>
          </div>
        )}
      </div>
      <div className="mb-3 w-full border-t-[0.3px] border-[#5E5E6E] opacity-50"></div>
      <div className="flex flex-col gap-[10px]">
        <InfoItem
          title="이름(입금자명)"
          content={depositorName}
          isEdit={isEdit}
          onChange={handleDepositorNameChange}
        />
        <InfoItem
          title="전화번호"
          content={phoneNumber}
          isEdit={isEdit}
          onChange={handlePhoneNumberChange}
        />
        <InfoItem title="사용자구분" content={universityName} />
      </div>
    </div>
  );
};

export default GeneralInfoContainer;
