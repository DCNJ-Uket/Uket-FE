import { Switch } from "@uket/ui/components/ui/switch";
import { Button } from "@uket/ui/components/ui/button";

import { useQueryUserInfo } from "@/hooks/queries/useQueryUserInfo";

import { clearAccessToken } from "@/utils/handleToken";
import { clearRefreshToken } from "@/utils/handleCookie";

import LogoutModal from "./_components/LogoutModal";
import InfoSection from "./_components/InfoSection";
import InfoItem from "./_components/InfoItem";

import { useNavigate } from "@/router";

//TODO: 회원 정보 api 수정되면 반영, 회원탈퇴, 로그인/회원탈퇴 modal

const MyInfo = () => {
  const { data: userInfo } = useQueryUserInfo();
  const navigate = useNavigate();

  const logout = () => {
    clearRefreshToken("refreshToken");
    clearAccessToken("accessToken");
  };

  return (
    <main className="relative flex h-full flex-col items-center bg-[#F2F2F2]">
      {userInfo && (
        <main className="container flex h-full w-full flex-col gap-9 pb-5 pt-10">
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
            <InfoSection title="일반">
              <InfoItem
                title={"이름(입금자명)"}
                content={userInfo.depositorName}
              />
              <InfoItem title={"전화번호"} content={userInfo.phoneNumber} />
              <InfoItem title={"사용자구분"} content={"대학생"} />
            </InfoSection>

            <InfoSection title="학교">
              <InfoItem title={"학교"} content={"userInfo.universityId"} />
              <InfoItem title={"학과"} content={userInfo.studentMajor} />
              <InfoItem title={"학번"} content={userInfo.studentCode} />
              <InfoItem
                title={"학교 인증 여부"}
                content={"userInfo.isRegistered"}
              />
            </InfoSection>

            <div className="flex flex-col gap-2">
              <div className="pl-3 text-sm font-bold">알림</div>
              <div className="flex w-full items-center justify-between rounded-xl bg-white p-6">
                <div className="text-xs font-semibold">푸시 알람 동의 여부</div>
                <Switch />
              </div>
            </div>
          </section>
          <div className="flex flex-col items-center gap-4">
            <LogoutModal onLogout={logout} />
            <Button
              variant="secondary"
              className="w-full rounded-xl bg-white p-6 text-sm font-medium text-black hover:bg-slate-200 sm:w-80"
            >
              회원탈퇴
            </Button>
          </div>
        </main>
      )}
    </main>
  );
};

export default MyInfo;
