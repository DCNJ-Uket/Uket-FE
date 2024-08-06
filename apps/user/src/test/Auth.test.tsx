import { BrowserRouter, MemoryRouter } from "react-router-dom";
import {
  act,
  render,
  renderHook,
  screen,
  waitFor,
} from "@testing-library/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import Nav from "@/components/Nav";

import { useMutationLogin } from "@/hooks/mutations/useMutationLogin";

import { setAccessToken } from "@/utils/handleToken";
import { setRefreshToken } from "@/utils/handleCookie";

import { useNavigate } from "@/router";
import LoginPage from "@/pages/login";
import { login } from "@/api/auth";

vi.mock("@/constants/auth_url", () => ({
  KAKAO_LOGIN_URL: "/mock-kakao-login",
  GOOGLE_LOGIN_URL: "/mock-google-login",
}));

vi.mock("@/hooks/usePreviousPath", () => ({
  default: () => ["/previous-path", vi.fn()],
}));

vi.mock("@stackflow/plugin-basic-ui", () => ({
  IconBack: () => <div data-testid="icon-back">Back Icon</div>,
}));

vi.mock(import("@/router"), async importOriginal => {
  const mod = await importOriginal();

  return {
    ...mod,
    useNavigate: vi.fn(),
  };
});

vi.mock("@/api/auth", () => ({
  login: vi.fn(),
}));

vi.mock("@/utils/handleToken", () => ({
  setAccessToken: vi.fn(),
}));

vi.mock("@/utils/handleCookie", () => ({
  setRefreshToken: vi.fn(),
}));

const navigate = vi.fn();

describe("로그인 및 회원가입 페이지", () => {
  describe("뒤로가기 버튼", () => {
    it("뒤로가기 버튼이 출력 되는가?", () => {
      render(
        <MemoryRouter initialEntries={["/login"]}>
          <Nav />
          <LoginPage />
        </MemoryRouter>,
      );

      const backIcon = screen.getByTestId("icon-back");
      expect(backIcon).toBeInTheDocument();
    });

    it("클릭 시, 랜딩 페이지로 돌아가는가?", () => {
      render(
        <MemoryRouter initialEntries={["/login"]}>
          <Nav />
          <LoginPage />
        </MemoryRouter>,
      );

      const backIcon = screen.getByTestId("icon-back");
      expect(backIcon).toBeInTheDocument();
      expect(backIcon.closest("a")).toHaveAttribute("href", "/previous-path");
    });
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

  describe("회원가입(미 가입 시)", () => {
    let queryClient: QueryClient;

    beforeEach(() => {
      queryClient = new QueryClient();
      vi.clearAllMocks();
    });

    it("카카오톡 인증 이후, 미 가입된 경우, 사용자 구분 선택 화면으로 이동되는가?", async () => {
      vi.isMockFunction(useNavigate) && useNavigate.mockReturnValue(navigate);
      vi.isMockFunction(login) &&
        login.mockReturnValue({
          accessToken: "mock-access-token",
          refreshToken: "mock-refresh-token",
          isRegistered: false,
        });

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );

      const { result } = renderHook(() => useMutationLogin(), {
        wrapper,
      });

      act(() =>
        result.current.mutate({ code: "mock-code", provider: "kakao" }),
      );

      await waitFor(() => result.current.isSuccess);

      expect(login).toHaveBeenCalledWith({
        code: "mock-code",
        provider: "kakao",
      });

      vi.isMockFunction(setAccessToken) &&
        expect(setAccessToken).toHaveBeenCalledWith("mock-access-token");

      vi.isMockFunction(setRefreshToken) &&
        expect(setRefreshToken).toHaveBeenCalledWith(
          "refreshToken",
          "mock-refresh-token",
        );

      expect(navigate).toHaveBeenCalledWith("/signup", {
        state: { isUnRegistered: true },
        replace: true,
      });
    });

    it("구글 인증 이후, 미 가입된 경우, 사용자 구분 선택 화면으로 이동되는가?", async () => {
      vi.isMockFunction(useNavigate) && useNavigate.mockReturnValue(navigate);
      vi.isMockFunction(login) &&
        login.mockReturnValue({
          accessToken: "mock-access-token",
          refreshToken: "mock-refresh-token",
          isRegistered: false,
        });

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );

      const { result } = renderHook(() => useMutationLogin(), {
        wrapper,
      });

      act(() =>
        result.current.mutate({ code: "mock-code", provider: "google" }),
      );

      await waitFor(() => result.current.isSuccess);

      expect(login).toHaveBeenCalledWith({
        code: "mock-code",
        provider: "google",
      });

      vi.isMockFunction(setAccessToken) &&
        expect(setAccessToken).toHaveBeenCalledWith("mock-access-token");

      vi.isMockFunction(setRefreshToken) &&
        expect(setRefreshToken).toHaveBeenCalledWith(
          "refreshToken",
          "mock-refresh-token",
        );

      expect(navigate).toHaveBeenCalledWith("/signup", {
        state: { isUnRegistered: true },
        replace: true,
      });
    });
  });

  describe("로그인(가입 시)", () => {
    let queryClient: QueryClient;

    beforeEach(() => {
      queryClient = new QueryClient();
      vi.clearAllMocks();
    });

    it("카카오톡 인증 이후, 가입되어 있는 경우, 랜딩 페이지로 이동되는가?", async () => {
      vi.isMockFunction(useNavigate) && useNavigate.mockReturnValue(navigate);
      vi.isMockFunction(login) &&
        login.mockReturnValue({
          accessToken: "mock-access-token",
          refreshToken: "mock-refresh-token",
          isRegistered: true,
        });

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );

      const { result } = renderHook(() => useMutationLogin(), {
        wrapper,
      });

      act(() =>
        result.current.mutate({ code: "mock-code", provider: "kakao" }),
      );

      await waitFor(() => result.current.isSuccess);

      expect(login).toHaveBeenCalledWith({
        code: "mock-code",
        provider: "kakao",
      });

      vi.isMockFunction(setAccessToken) &&
        expect(setAccessToken).toHaveBeenCalledWith("mock-access-token");

      vi.isMockFunction(setRefreshToken) &&
        expect(setRefreshToken).toHaveBeenCalledWith(
          "refreshToken",
          "mock-refresh-token",
        );

      expect(navigate).toHaveBeenCalledWith("/", {
        replace: true,
      });
    });
    it("구글 인증 이후, 가입되어 있는 경우, 랜딩 페이지로 이동되는가?", async () => {
      vi.isMockFunction(useNavigate) && useNavigate.mockReturnValue(navigate);
      vi.isMockFunction(login) &&
        login.mockReturnValue({
          accessToken: "mock-access-token",
          refreshToken: "mock-refresh-token",
          isRegistered: true,
        });

      const wrapper = ({ children }: { children: React.ReactNode }) => (
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      );

      const { result } = renderHook(() => useMutationLogin(), {
        wrapper,
      });

      act(() =>
        result.current.mutate({ code: "mock-code", provider: "google" }),
      );

      await waitFor(() => result.current.isSuccess);

      expect(login).toHaveBeenCalledWith({
        code: "mock-code",
        provider: "google",
      });

      vi.isMockFunction(setAccessToken) &&
        expect(setAccessToken).toHaveBeenCalledWith("mock-access-token");

      vi.isMockFunction(setRefreshToken) &&
        expect(setRefreshToken).toHaveBeenCalledWith(
          "refreshToken",
          "mock-refresh-token",
        );

      expect(navigate).toHaveBeenCalledWith("/", {
        replace: true,
      });
    });
  });
});
