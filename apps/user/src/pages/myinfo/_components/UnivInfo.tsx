import { UserInfoResponse } from "@/types/userType";

import InfoItem from "./InfoItem";

interface UnivInfoProps
  extends Pick<UserInfoResponse, "studentMajor" | "studentCode"> {}

const UnivInfo = (props: UnivInfoProps) => {
  const { studentMajor, studentCode } = props;

  return (
    <div className="flex flex-col gap-2">
      <div className="pl-3 text-sm font-bold">학교</div>
      <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-6">
        <InfoItem title="학과" content={studentMajor} />
        <InfoItem title="학번" content={studentCode} />
      </div>
    </div>
  );
};

export default UnivInfo;
