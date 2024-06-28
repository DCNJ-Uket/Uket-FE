import { Button } from "@uket/ui/components/ui/button";

import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { clearAccessToken } from "@/utils/handleToken";
import { clearRefreshToken } from "@/utils/handleCookie";

import UserInfoSection from "./_components/UserInfoSection";
import LogoutModal from "./_components/LogoutModal";


//TODO: 메일인증여부 추가, 회원탈퇴 modal 및 기능

const MyInfo = () => {
  const logout = () => {
    clearRefreshToken("refreshToken");
    clearAccessToken("accessToken");
  };

  return (
    <main className="relative flex h-full flex-col items-center bg-[#F2F2F2]">
      <main className="container flex h-full w-full flex-col gap-9 pb-5 pt-10">
        <RetryErrorBoundary>
          <UserInfoSection />
        </RetryErrorBoundary>
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
    </main>
  );
};

export default MyInfo;
