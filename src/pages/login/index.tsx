import { Link } from "react-router-dom";

import { Button } from "@/components/ui/button";

const BASE_URL = `${import.meta.env.VITE_BASE_URL}`;
const KAKAO_LOGIN_URL = `${BASE_URL}/${import.meta.env.VITE_KAKAO_LOGIN}`;
const GOOGLE_LOGIN_URL = `${BASE_URL}/${import.meta.env.VITE_GOOGLE_LOGIN}`;

const LoginPage = () => {
  return (
    <main className="flex flex-col items-center h-full">
      <header className="container mt-2 w-full h-fit">
        <div className="text-2xl font-bold">Uket</div>
      </header>
      <main className="flex flex-col justify-evenly w-full h-full">
        <section className="container flex flex-col gap-4 w-full">
          <h1 className="text-3xl font-bold">
            <p>학교 축제 티켓을</p>
            <p>예매해볼까요?</p>
          </h1>
          <h2 className="text-[#454545]">
            회원가입/로그인 방식을 선택해주세요
          </h2>
        </section>
        <section className="container flex flex-col gap-2 justify-center items-center w-full">
          <Link to={KAKAO_LOGIN_URL} className="block w-full">
            <Button className="w-full bg-[#FEE500] text-[#191919] hover:bg-[#eed600]">
              카카오 계정으로 계속하기
            </Button>
          </Link>
          <Link to={GOOGLE_LOGIN_URL} className="block w-full">
            <Button className="w-full text-black bg-transparent border hover:bg-primary-foreground">
              구글 계정으로 계속하기
            </Button>
          </Link>
        </section>
      </main>
    </main>
  );
};
export default LoginPage;