import { Outlet, useLocation } from "react-router-dom";

import Nav from "@/components/Nav";
import CriticalErrorBoundary from "@/components/CriticalErrorBoundary";

const App = () => {
  const { pathname } = useLocation();
  return (
    <section className="relative flex h-dvh w-screen flex-col">
      <CriticalErrorBoundary>
        {!["/", "/ticket-detail"].includes(pathname) && (
          <header className="sticky left-0 top-0 z-10 bg-white">
            <Nav />
          </header>
        )}
        <main className="w-full grow">
          <Outlet />
        </main>
      </CriticalErrorBoundary>
    </section>
  );
};

export default App;
