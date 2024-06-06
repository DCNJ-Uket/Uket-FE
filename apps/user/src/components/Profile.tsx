import { useLocation } from "react-router-dom";
import { cn } from "@uket/ui/lib/utils";
import { Button } from "@uket/ui/components/ui/button";

import { useQueryUserInfo } from "@/hooks/queries/useQueryUserInfo";

import { useNavigate } from "@/router";

// TODO: 추후 디자인에 맞춰서 Drawer 또는 페이지로 변경
const Profile = () => {
  const { data: userInfo } = useQueryUserInfo();
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const ladingPageTextColor = pathname === "/" && "text-white";

  return (
    <>
      {userInfo && (
        <Button
          variant="link"
          className={cn("p-0 pt-1 font-bold", ladingPageTextColor)}
        >
          <div className="flex items-center gap-3">
            <div className="relative h-6 w-6">
              <img
                src={userInfo.profileImage}
                alt="프로필 이미지"
                width={100}
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <p className="font-bold">{userInfo.name}</p>
          </div>
        </Button>
      )}
      {!userInfo && (
        <Button
          variant="link"
          className={cn("p-0 pt-1 font-bold", ladingPageTextColor)}
          onClick={() => {
            navigate("/login");
          }}
        >
          로그인
        </Button>
      )}
    </>
  );
};

export default Profile;
