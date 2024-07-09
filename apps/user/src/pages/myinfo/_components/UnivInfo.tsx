import { UserInfoResponse } from "@/types/userType";

import InfoItem from "./InfoItem";

interface UnivInfoProps
  extends Pick<
    UserInfoResponse,
    "universityName" | "studentMajor" | "studentCode"
  > {}

const UnivInfo = (props: UnivInfoProps) => {
  const { universityName, studentMajor, studentCode } = props;

  return (
    <div className="flex w-full flex-col gap-2 bg-white px-6 pb-6 pt-4">
      <div className="text-lg font-bold leading-8 text-[#17171B]">학교</div>
      <div className="mb-3 w-full border-t-[0.3px] border-[#5E5E6E] opacity-50"></div>
      <div className="flex flex-col gap-3">
        <InfoItem title="학교" content={universityName} />
        <InfoItem title="학과" content={studentMajor} />
        <InfoItem title="학번" content={studentCode} />
      </div>
    </div>
  );
};

export default UnivInfo;
