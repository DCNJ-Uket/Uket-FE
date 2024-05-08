import { Link } from "@/router";

import LogoImage from "/whiteLogo.png";

//TODO: 추후에 Logo.tsx와 합치기
const WhiteLogo = () => {
  return (
    <Link to="/main" className="pl-6 pt-2">
      <img src={LogoImage} width={62} loading="lazy" alt="로고" />
    </Link>
  );
};

export default WhiteLogo;
