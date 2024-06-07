import { Outlet, useLocation } from "react-router-dom";

import Nav from "@/components/Nav";
import CriticalErrorBoundary from "@/components/error/CriticalErrorBoundary";

import Redirects from "@/utils/redirects";

const App = () => {
  const { pathname } = useLocation();

  return (
    <CriticalErrorBoundary>
      <section className="relative flex h-dvh w-screen flex-col">
        {!["/"].includes(pathname) && (
          <header className="sticky left-0 top-0 z-10 bg-white">
            <Nav />
          </header>
        )}
        <main className="w-full grow">
          <Redirects>
            <Outlet />
          </Redirects>
        </main>
      </section>
    </CriticalErrorBoundary>
  );
};

export default App;
