import { UserInfoResponse } from "@/types/userType";

interface ProfileProps
  extends Pick<UserInfoResponse, "name" | "profileImage"> {}

// TODO: 추후 디자인에 맞춰서 Drawer 또는 페이지로 변경
const Profile = (props: ProfileProps) => {
  const { profileImage, name } = props;

  return (
    <>
      {profileImage && name && (
        <div className="flex items-center gap-3">
          <div className="relative h-6 w-6">
            <img
              src={profileImage}
              alt="프로필 이미지"
              width={100}
              className="h-full w-full rounded-full object-cover"
            />
          </div>
          <p className="font-bold">{name}</p>
        </div>
      )}
    </>
  );
};

export default Profile;
