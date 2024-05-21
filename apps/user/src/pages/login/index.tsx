import { Link } from "react-router-dom";
import { Button } from "@uket/ui/components/ui/button";

import { GOOGLE_LOGIN_URL, KAKAO_LOGIN_URL } from "@/constants/auth_url";

const LoginPage = () => {
  return (
    <main className="flex h-full flex-col items-center justify-evenly">
      <main className="container flex h-full w-full flex-col justify-evenly">
        <section className="flex w-full flex-col items-center gap-4">
          <h1 className="w-full text-2xl font-black">
            <p>학교 축제 티켓을</p>
            <p>예매해 볼까요?</p>
          </h1>
          <h2 className="w-full text-[#454545]">
            회원가입/로그인 방식을 선택해 주세요.
          </h2>
        </section>
        <section className="flex w-full flex-col items-center justify-center gap-2">
          <Link to={KAKAO_LOGIN_URL} className="w-full sm:w-80">
            <Button className="h-12 w-full rounded-xl bg-[#FEE500] text-base text-[#191919] hover:bg-[#eed600]">
              카카오 계정으로 계속하기
            </Button>
          </Link>
          <Link to={GOOGLE_LOGIN_URL} className="w-full sm:w-80">
            <Button className="hover:bg-primary-foreground h-12 w-full rounded-xl border bg-transparent text-base text-black">
              구글 계정으로 계속하기
            </Button>
          </Link>
        </section>
      </main>
    </main>
  );
};
export default LoginPage;
