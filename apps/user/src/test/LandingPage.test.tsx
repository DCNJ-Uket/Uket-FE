import { BrowserRouter } from "react-router-dom";
import userEvent from "@testing-library/user-event";
import { act, render, renderHook, screen } from "@testing-library/react";

import { useControlRedirect } from "@/hooks/useControlRedirect";
import { useQueryUserInfo } from "@/hooks/queries/useQueryUserInfo";

import { getAccessToken } from "@/utils/handleToken";
import { getRefreshToken } from "@/utils/handleCookie";

import { useNavigate } from "@/router";
import LandingPage from "@/pages";

vi.mock("@/hooks/queries/useQueryUserInfo", () => ({
  useQueryUserInfo: vi.fn(),
}));

vi.mock(import("@/router"), async importOriginal => {
  const mod = await importOriginal();

  return {
    ...mod,
    useNavigate: vi.fn(),
  };
});

vi.mock("@/utils/handleToken", () => ({
  getAccessToken: vi.fn(),
}));

vi.mock("@/utils/handleCookie", () => ({
  getRefreshToken: vi.fn(),
}));

describe("ftr 1, LandingPage 테스트", () => {
  describe("로고", () => {
    it("로고가 출력 되는가?", () => {
      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      );

      expect(screen.getByAltText("로고")).toBeInTheDocument();
    });
  });

  describe("미 로그인 시 테스트", () => {
    it("로그인 및 회원가입 버튼이 제공 되는가?", () => {
      vi.isMockFunction(useQueryUserInfo) &&
        useQueryUserInfo.mockReturnValue({ data: null });

      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      );

      expect(screen.getByText("로그인")).toBeInTheDocument();
    });

    it("로그인 버튼 클릭시, 로그인 및 회원가입 페이지로 이동되는가?", async () => {
      const navigate = vi.fn();
      vi.isMockFunction(useNavigate) && useNavigate.mockReturnValue(navigate);

      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      );

      await userEvent.click(screen.getByText("로그인"));
      expect(navigate).toHaveBeenCalledWith("/login");
    });
  });

  describe("로그인 시 테스트", () => {
    it("프로필 이미지와 사용자의 이름이 잘 표시되는가?", () => {
      vi.isMockFunction(useQueryUserInfo) &&
        useQueryUserInfo.mockReturnValue({
          data: {
            name: "홍길동",
            profileImage: "http://example.com/image.jpg",
          },
        });

      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      );

      expect(screen.getByText("홍길동")).toBeInTheDocument();
      expect(screen.getByAltText("프로필 이미지")).toBeInTheDocument();
    });

    it("프로필 클릭 시, 내 정보 확인 페이지로 이동되는가?", async () => {
      const navigate = vi.fn();
      vi.isMockFunction(useNavigate) && useNavigate.mockReturnValue(navigate);
      vi.isMockFunction(useQueryUserInfo) &&
        useQueryUserInfo.mockReturnValue({
          data: {
            name: "홍길동",
            profileImage: "http://example.com/image.jpg",
          },
        });

      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      );

      await userEvent.click(screen.getByText("홍길동"));
      expect(navigate).toHaveBeenCalledWith("/myinfo");
    });
  });

  // TODO: 이미지 expect 추가
  describe("서비스 소개", () => {
    it("슬로건/카피, 이미지가 출력 되는가?", () => {
      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      );

      expect(screen.getByText("학교 축제 공연 감상,")).toBeInTheDocument();
      expect(screen.getByText("기다림 없이 UKET")).toBeInTheDocument();
    });
  });

  describe("축제 예매하기 버튼", () => {
    it("축제 예매하기 버튼이 출력 되는가?", () => {
      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      );

      expect(screen.getByText("축제 예매하기")).toBeInTheDocument();
    });

    it("버튼 클릭 시, 학교 선택 페이지로 이동 되는가?", async () => {
      const navigate = vi.fn();
      vi.isMockFunction(useNavigate) && useNavigate.mockReturnValue(navigate);

      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      );

      await userEvent.click(screen.getByText("축제 예매하기"));
      expect(navigate).toHaveBeenCalledWith("/select-univ");
    });
  });

  describe("내 티켓 확인하기 버튼", () => {
    it("버튼이 출력 되는가?", () => {
      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      );

      expect(screen.getByText("내 티켓 확인하기")).toBeInTheDocument();
    });

    it("미 로그인 한 경우 클릭 시, 안내 모달이 출력 되는가?", () => {
      vi.isMockFunction(getAccessToken) && getAccessToken.mockReturnValue(null);
      vi.isMockFunction(getRefreshToken) &&
        getRefreshToken.mockReturnValue(null);

      const { result } = renderHook(() => useControlRedirect());

      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      );

      act(() => {
        result.current.handleOpenModalOrRedirect({ path: "/ticket-list" });
      });
      expect(result.current.isModalOpen).toBe(true);
    });

    it("로그인 한 경우, 클릭 시 내 티켓 확인 페이지로 이동 되는가?", async () => {
      vi.isMockFunction(getAccessToken) &&
        getAccessToken.mockReturnValue("fake-access-token");
      vi.isMockFunction(getRefreshToken) &&
        getRefreshToken.mockReturnValue("fake-refresh-token");

      const navigate = vi.fn();
      vi.isMockFunction(useNavigate) && useNavigate.mockReturnValue(navigate);

      const { result } = renderHook(() => useControlRedirect());

      render(
        <BrowserRouter>
          <LandingPage />
        </BrowserRouter>,
      );

      const ticketButton = screen.getByText("내 티켓 확인하기");
      await userEvent.click(ticketButton);

      act(() => {
        result.current.handleOpenModalOrRedirect({ path: "/ticket-list" });
      });
      expect(navigate).toHaveBeenCalledWith({ pathname: "/ticket-list" });
    });
  });
});
