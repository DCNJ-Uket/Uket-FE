import { Outlet } from "react-router-dom";

// TODO: 피그마 레이아웃 작업이 완료되면, 수정 또는 변경해주세요. 연결된 Route가 <Outlet />에 렌더링됩니다.
const App = () => {
  return (
    <section className="w-screen h-dvh">
      <header>
        <nav></nav>
      </header>
      <main className="w-full h-full">
        <Outlet />
      </main>
    </section>
  );
};

export default App;
