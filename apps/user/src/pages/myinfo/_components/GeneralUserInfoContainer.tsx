import { useState } from "react";
import { Button } from "@uket/ui/components/ui/button";

import { useMutationUpdateInfo } from "@/hooks/mutations/useMutationUpdateInfo";

import InfoItem from "./InfoItem";

interface GeneralUserInfoContainerProps {
  depositorName: string;
  phoneNumber: string;
  universityName: string;
}

const GeneralUserInfoContainer = (props: GeneralUserInfoContainerProps) => {
  const { depositorName, phoneNumber, universityName } = props;

  const depositorNameRegex = /^[가-힣]{2,4}|[a-zA-Z]{2,10}$/;
  const phoneNumberRegex = /^\d{3}-?\d{4}-?\d{4}$/;

  const mutation = useMutationUpdateInfo();

  const [isEdit, setIsEdit] = useState(false);
  const handleIsEdit = () => {
    setIsEdit(!isEdit);
  };

  const formatPhoneNumber = (value: string) => {
    const cleaned = value.replace(/\D/g, "");
    const match = cleaned.match(/^(\d{3})(\d{4})(\d{4})$/);
    if (match) {
      return `${match[1]}-${match[2]}-${match[3]}`;
    }
    return value;
  };

  const [editedDepositorName, setEditedDepositorName] = useState(depositorName);
  const [editedPhoneNumber, setEditedPhoneNumber] = useState(phoneNumber);
  const [errors, setErrors] = useState<{
    depositorName: string;
    phoneNumber: string;
  }>({
    depositorName: "",
    phoneNumber: "",
  });

  const handleDepositorNameChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEditedDepositorName(event.target.value);
  };

  const handlePhoneNumberChange = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setEditedPhoneNumber(event.target.value);
  };

  const handleUpdate = () => {
    if (!depositorNameRegex.test(editedDepositorName)) {
      setErrors(prev => ({
        ...prev,
        depositorName: "입금자명은 한글 또는 영문만 가능합니다.",
      }));
      return;
    }

    if (!phoneNumberRegex.test(editedPhoneNumber)) {
      setErrors(prev => ({
        ...prev,
        phoneNumber: "010-1234-5678 혹은 01012345678 형식으로 입력하세요.",
      }));
      return;
    }

    mutation.mutate(
      { depositorName: editedDepositorName, phoneNumber: editedPhoneNumber },
      {
        onSuccess: () => {
          setIsEdit(false);
          setErrors({ depositorName: "", phoneNumber: "" });
        },
      },
    );
  };

  const handleCancel = () => {
    setEditedDepositorName(depositorName);
    setEditedPhoneNumber(phoneNumber);
    setErrors({ depositorName: "", phoneNumber: "" });
    setIsEdit(false);
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
              onClick={handleCancel}
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
          content={editedDepositorName}
          isEdit={isEdit}
          onChange={handleDepositorNameChange}
        />
        {errors.depositorName !== "" && (
          <div className="text-[10px] text-red-500">{errors.depositorName}</div>
        )}
        <InfoItem
          title="전화번호"
          content={formatPhoneNumber(editedPhoneNumber)}
          isEdit={isEdit}
          onChange={handlePhoneNumberChange}
        />
        {errors.phoneNumber !== "" && (
          <div className="text-[10px] text-red-500">{errors.phoneNumber}</div>
        )}
        <InfoItem title="사용자구분" content={universityName} />
      </div>
    </div>
  );
};

export default GeneralUserInfoContainer;
