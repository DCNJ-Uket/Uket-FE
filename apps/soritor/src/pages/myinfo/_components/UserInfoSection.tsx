import { Link } from "react-router-dom";
import { ExternalLink } from "@uket/ui/components/ui/icon";
import { Button } from "@uket/ui/components/ui/button";

import { useNavigate } from "@/router";

import Image from "@/components/Image";

import { useQueryUserInfo } from "@/hooks/queries/useQueryUserInfo";

import InfoItem from "./InfoItem";
import InfoContainer from "./InfoContainer";
import GeneralUserInfoContainer from "./GeneralUserInfoContainer";

const OPEN_CHATTING = "https://open.kakao.com/me/uket";

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
          <p className="text-xl font-bold">{userInfo.depositorName}</p>
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
        <div className="flex w-full flex-col gap-2 bg-white px-6 py-4">
          <div className="flex h-8 items-center justify-start gap-3">
            <div className="text-lg font-bold text-[#17171B]">
              문의﹒제보하기
            </div>
            <Link to={OPEN_CHATTING} target="_blank">
              <ExternalLink className="h-5" />
            </Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default UserInfoSection;
