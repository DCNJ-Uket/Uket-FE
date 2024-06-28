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
      <div className="flex w-full flex-col items-start gap-5 rounded-xl bg-white p-5">
        <div className="flex items-center gap-6">
          <div className="relative h-11 w-11">
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
          className="w-full border-2 border-black py-2 text-center text-sm font-semibold"
          onClick={() => {
            navigate("/ticket-list");
          }}
        >
          내 티켓 확인하기
        </Button>
      </div>
      <section className="flex flex-col gap-5">
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

        <div className="flex flex-col gap-2">
          <div className="pl-3 text-sm font-bold">알림</div>
          <div className="flex w-full items-center justify-between rounded-xl bg-white p-6">
            <div className="text-xs font-semibold">푸시 알람 동의 여부</div>
            <Switch />
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfoSection;
