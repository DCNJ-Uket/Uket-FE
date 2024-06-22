import { Button } from "@uket/ui/components/ui/button";

import { useQueryUserInfo } from "@/hooks/queries/useQueryUserInfo";

import { useNavigate } from "@/router";

const MyInfo = () => {
  const { data: userInfo } = useQueryUserInfo();
  const navigate = useNavigate();

  return (
    <main className="relative flex h-full flex-col items-center justify-evenly bg-[#F2F2F2]">
      <main className="container flex h-full w-full flex-col justify-evenly">
        <div className="flex w-full flex-col items-start gap-7 rounded-xl bg-white p-7">
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
        <section></section>
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
