import { Button } from "@uket/ui/components/ui/button";

import { UserInfoResponse } from "@/types/userType";

import InfoItem from "./InfoItem";

interface GeneralInfoProps
  extends Pick<
    UserInfoResponse,
    "depositorName" | "phoneNumber" | "universityName"
  > {}

const GeneralInfo = (props: GeneralInfoProps) => {
  const { depositorName, phoneNumber, universityName } = props;

  return (
    <div className="flex w-full flex-col gap-2 bg-white px-6 pb-6 pt-4">
      <div className="flex h-8 w-full items-center justify-between ">
        <div className="text-lg font-bold text-[#17171B]">일반</div>
        <Button
          variant="link"
          className="cursor-pointer text-sm text-[#5E5E6E] underline"
        >
          편집
        </Button>
      </div>
      <div className="mb-3 w-full border-t-[0.3px] border-[#5E5E6E] opacity-50"></div>
      <div className="flex flex-col gap-3">
        <InfoItem title="이름(입금자명)" content={depositorName} />
        <InfoItem title="전화번호" content={phoneNumber} />
        <InfoItem
          title="사용자구분"
          content={universityName === "일반인" ? universityName : "대학생"}
        />
      </div>
    </div>
  );
};

export default GeneralInfo;
