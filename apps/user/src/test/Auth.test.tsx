import { BrowserRouter } from "react-router-dom";
import { render, screen } from "@testing-library/react";

import LoginPage from "@/pages/login";

vi.mock("@/constants/auth_url", () => ({
  KAKAO_LOGIN_URL: "/mock-kakao-login",
  GOOGLE_LOGIN_URL: "/mock-google-login",
}));

describe("로그인 및 회원가입 페이지", () => {
  describe("뒤로가기 버튼", () => {
    it("뒤로가기 버튼이 출력 되는가?", () => {});
    it("클릭 시, 랜딩 페이지로 돌아가는가?", () => {});
  });
  describe("로그인/회원가입 안내 문구", () => {
    it("로그인/회원가입 안내 문구가 출력 되는가?", () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
      );

      expect(screen.getByText("학교 축제 티켓을")).toBeInTheDocument();
      expect(screen.getByText("예매해 볼까요?")).toBeInTheDocument();
      expect(
        screen.getByText("회원가입/로그인 방식을 선택해 주세요."),
      ).toBeInTheDocument();
    });
  });
  describe("카카오톡/구글 소셜 로그인", () => {
    beforeEach(() => {
      vi.clearAllMocks();
    });

    it("카카오톡 소셜 로그인 페이지로 이동 되는가?", async () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
      );

      const kakaoButton = screen.getByText("카카오 계정으로 계속하기");
      expect(kakaoButton).toBeInTheDocument();
      expect(kakaoButton.closest("a")).toHaveAttribute(
        "href",
        "/mock-kakao-login",
      );
    });

    it("구글 소셜 로그인 페이지로 이동 되는가?", () => {
      render(
        <BrowserRouter>
          <LoginPage />
        </BrowserRouter>,
      );
      const googleButton = screen.getByText("구글 계정으로 계속하기");
      expect(googleButton).toBeInTheDocument();
      expect(googleButton.closest("a")).toHaveAttribute(
        "href",
        "/mock-google-login",
      );
    });
  });
});
