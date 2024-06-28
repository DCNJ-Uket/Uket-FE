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
    <div className="flex flex-col gap-2">
      <div className="pl-3 text-sm font-bold">일반</div>
      <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-6">
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
