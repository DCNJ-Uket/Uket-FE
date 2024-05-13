import { Outlet, useLocation } from "react-router-dom";

import Nav from "@/components/Nav";

// TODO: 피그마 레이아웃 작업이 완료되면, 수정 또는 변경해주세요. 연결된 Route가 <Outlet />에 렌더링됩니다.
const App = () => {
  const { pathname } = useLocation();
  return (
    <section className="relative flex h-dvh w-screen flex-col">
      {!["/", "/ticket-detail"].includes(pathname) && (
        <header className="sticky left-0 top-0 z-10 bg-white">
          <Nav />
        </header>
      )}
      <main className="w-full grow">
        <Outlet />
      </main>
    </section>
  );
};

export default App;
