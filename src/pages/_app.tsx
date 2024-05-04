import { Outlet } from "react-router-dom";

import Nav from "@/components/Nav";

// TODO: 피그마 레이아웃 작업이 완료되면, 수정 또는 변경해주세요. 연결된 Route가 <Outlet />에 렌더링됩니다.
const App = () => {
  return (
    <section className="flex relative flex-col w-screen h-dvh">
      <header className="sticky top-0 left-0 z-10 bg-white">
        <Nav />
      </header>
      <main className="w-full grow">
        <Outlet />
      </main>
    </section>
  );
};

export default App;
