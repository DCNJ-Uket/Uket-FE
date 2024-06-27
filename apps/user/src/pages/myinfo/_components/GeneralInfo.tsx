import { UserInfoResponse } from "@/types/userType";

import InfoItem from "./InfoItem";

interface GeneralInfoProps
  extends Pick<UserInfoResponse, "depositorName" | "phoneNumber"> {}

const GeneralInfo = (props: GeneralInfoProps) => {
  const { depositorName, phoneNumber } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="pl-3 text-sm font-bold">일반</div>
      <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-6">
        <InfoItem title="이름(입금자명)" content={depositorName} />
        <InfoItem title="전화번호" content={phoneNumber} />
      </div>
    </div>
  );
};

export default GeneralInfo;
