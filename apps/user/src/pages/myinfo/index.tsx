import { Button } from "@uket/ui/components/ui/button";

import { useQueryUserInfo } from "@/hooks/queries/useQueryUserInfo";

import InfoItem from "./_components/InfoItem";


import { useNavigate } from "@/router";

//TODO: 유저정보 userInfo로 채워넣기, toggle 추가, refactor

const MyInfo = () => {
  const { data: userInfo } = useQueryUserInfo();
  const navigate = useNavigate();

  return (
    <main className="relative flex h-full flex-col items-center bg-[#F2F2F2]">
      <main className="container flex h-full w-full flex-col gap-9 pt-10">
        <div className="flex w-full flex-col items-start gap-7 rounded-xl bg-white p-5">
          {userInfo && (
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
          )}
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
          <div className="flex flex-col gap-2">
            <div className="pl-3 text-sm font-bold">일반</div>
            <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-6">
              <InfoItem title={"이름(입금자명)"} content={"김건국"} />
              <InfoItem title={"전화번호"} content={"전화번호"} />
              <InfoItem title={"사용자구분"} content={"대학생"} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="pl-3 text-sm font-bold">학교</div>
            <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-6">
              <InfoItem title={"학교"} content={"김건국"} />
              <InfoItem title={"학과"} content={"전화번호"} />
              <InfoItem title={"학번"} content={"대학생"} />
              <InfoItem title={"학교 인증 여부"} content={"대학생"} />
            </div>
          </div>
          <div className="flex flex-col gap-2">
            <div className="pl-3 text-sm font-bold">알림</div>
            <div className="flex w-full flex-col gap-3 rounded-xl bg-white p-6">
              <div className="text-xs font-semibold">푸시 알람 동의 여부</div>
            </div>
          </div>
        </section>
        <div className="flex flex-col gap-4">
          <Button
            variant="secondary"
            className="w-full rounded-xl bg-white p-6 text-sm font-medium text-black hover:bg-slate-200 sm:w-80"
          >
            로그아웃
          </Button>
          <Button
            variant="secondary"
            className="w-full rounded-xl bg-white p-6 text-sm font-medium text-black hover:bg-slate-200 sm:w-80"
          >
            회원탈퇴
          </Button>
        </div>
      </main>
    </main>
  );
};

export default MyInfo;
