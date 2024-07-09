import { Switch } from "@uket/ui/components/ui/switch";
import { Button } from "@uket/ui/components/ui/button";


import { useQueryUserInfo } from "@/hooks/queries/useQueryUserInfo";

import UnivInfo from "./UnivInfo";
import GeneralInfo from "./GeneralInfo";

import { useNavigate } from "@/router";

const UserInfoSection = () => {
  const { data: userInfo } = useQueryUserInfo();
  const navigate = useNavigate();

  if (userInfo === null) {
    throw new Error("User info is null");
  }

  return (
    <>
      <div className="flex w-full flex-col items-start gap-5 bg-white px-7 pb-7 pt-5">
        <div className="flex items-center gap-6">
          <div className="relative h-14 w-14">
            <img
              src={userInfo.profileImage}
              alt="프로필 이미지"
              width={100}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <p className="text-xl font-bold">{userInfo.name}</p>
        </div>
        <Button
          variant="outline"
          className="bg-brand w-full rounded-lg py-6 text-center text-sm font-semibold text-white"
          onClick={() => {
            navigate("/ticket-list");
          }}
        >
          내 티켓 확인하기
        </Button>
      </div>
      <section className="flex flex-col gap-2">
        <GeneralInfo
          depositorName={userInfo.depositorName}
          phoneNumber={userInfo.phoneNumber}
          universityName={userInfo.universityName}
        />
        {userInfo.universityName !== "일반인" && (
          <UnivInfo
            universityName={userInfo.universityName}
            studentMajor={userInfo.studentMajor}
            studentCode={userInfo.studentCode}
          />
        )}

        <div className="flex w-full flex-col gap-2 bg-white px-6 pb-6 pt-4">
          <div className="text-lg font-bold leading-8 text-[#17171B]">알림</div>
          <div className="mb-3 w-full border-t-[0.3px] border-[#5E5E6E] opacity-50"></div>
          <div className="flex w-full items-center justify-between">
            <div className="text-[13px] text-[#5E5E6E]">
              푸시 알람 동의 여부
            </div>
            <Switch />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfoSection;
