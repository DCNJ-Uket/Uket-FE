import DeleteUserInfoModal from "@/pages/myinfo/_components/DeleteUserInfoModal";

import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import UserInfoSection from "./_components/UserInfoSection";
import LogoutModal from "./_components/LogoutModal";

const MyInfo = () => {
  return (
    <main className="relative flex h-full flex-col items-center bg-[#F2F2F2]">
      <main className="flex h-full w-full flex-col gap-3 pb-10">
        <RetryErrorBoundary>
          <UserInfoSection />
        </RetryErrorBoundary>
        <div className="mt-5 flex items-center gap-4 px-5">
          <DeleteUserInfoModal />
          <LogoutModal />
        </div>
      </main>
    </main>
  );
};

export default MyInfo;
