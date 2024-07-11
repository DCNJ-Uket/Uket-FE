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
      <main className="flex h-full w-full flex-col gap-3 pb-5">
        <RetryErrorBoundary>
          <UserInfoSection />
        </RetryErrorBoundary>
        <div className="mt-5 flex items-center gap-4 px-5">
          <Button
            variant="outline"
            className="basis-1/2 rounded-lg border border-[#8989A1] text-[#8989A1]"
          >
            회원 탈퇴
          </Button>
          <LogoutModal onLogout={logout} />
        </div>
      </main>
    </main>
  );
};

export default MyInfo;
