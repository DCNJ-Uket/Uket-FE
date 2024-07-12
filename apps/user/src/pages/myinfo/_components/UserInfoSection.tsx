import { Switch } from "@uket/ui/components/ui/switch";
import { Button } from "@uket/ui/components/ui/button";


import { useQueryUserInfo } from "@/hooks/queries/useQueryUserInfo";

import InfoItem from "./InfoItem";
import InfoContainer from "./InfoContainer";
import GeneralInfoContainer from "./GeneralInfoContainer";

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
        <GeneralInfoContainer
          depositorName={userInfo.depositorName}
          phoneNumber={userInfo.phoneNumber}
          universityName={
            userInfo.universityName === "일반인"
              ? userInfo.universityName
              : "대학생"
          }
        />
        {userInfo.universityName !== "일반인" && (
          <InfoContainer title="학교">
            <InfoItem title="학교" content={userInfo.universityName} />
            <InfoItem title="학과" content={userInfo.studentMajor} />
            <InfoItem title="학번" content={userInfo.studentCode} />
          </InfoContainer>
        )}
        <InfoContainer title="알림">
          <div className="flex w-full items-center justify-between">
            <div className="text-[13px] text-[#5E5E6E]">
              푸시 알람 동의 여부
            </div>
            <Switch />
          </div>
        </InfoContainer>
      </section>
    </>
  );
};

export default UserInfoSection;
