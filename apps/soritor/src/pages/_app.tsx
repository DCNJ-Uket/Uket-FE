import { Outlet, useLocation } from "react-router-dom";
import { Toaster } from "@uket/ui/components/ui/toaster";

import Nav from "@/components/Nav";
import CriticalErrorBoundary from "@/components/error/CriticalErrorBoundary";

import Redirects from "@/utils/redirects";

const App = () => {
  const { pathname } = useLocation();

  return (
    <CriticalErrorBoundary>
      <section className="relative flex h-dvh w-screen flex-col items-center">
        <div className="h-full w-full sm:w-[500px] flex flex-col">
          {!["/"].includes(pathname) && (
            <header className="left-0 top-0 z-10 bg-white">
              <Nav />
            </header>
          )}
          <main className="w-full grow">
            <Redirects>
              <Outlet />
            </Redirects>
          </main>
        </div>
        <Toaster className="bottom-0 right-0" />
      </section>
    </CriticalErrorBoundary>
  );
};

export default App;
