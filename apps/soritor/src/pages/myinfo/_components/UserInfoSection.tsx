import { Button } from "@uket/ui/components/ui/button";

import { useNavigate } from "@/router";

import Image from "@/components/Image";

import { useQueryUserInfo } from "@/hooks/queries/useQueryUserInfo";

import InfoItem from "./InfoItem";
import InfoContainer from "./InfoContainer";
import GeneralUserInfoContainer from "./GeneralUserInfoContainer";

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
            <Image
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
          className="bg-brand hover:bg-brandHover w-full rounded-lg py-6 text-center text-sm font-semibold text-white hover:text-white"
          onClick={() => {
            navigate("/ticket-list");
          }}
        >
          내 티켓 확인하기
        </Button>
      </div>
      <section className="flex flex-col gap-2">
        <GeneralUserInfoContainer
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
      </section>
    </>
  );
};

export default UserInfoSection;
