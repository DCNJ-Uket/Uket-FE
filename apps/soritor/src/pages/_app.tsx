import { Outlet, useLocation, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { Toaster } from "@uket/ui/components/ui/toaster";

import Nav from "@/components/Nav";
import CriticalErrorBoundary from "@/components/error/CriticalErrorBoundary";

import Redirects from "@/utils/redirects";
import { setGlobalNavigate } from "@/utils/globalNavigate";

const App = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    setGlobalNavigate(navigate);
  }, [navigate]);

  return (
    <CriticalErrorBoundary>
      <section className="relative flex h-dvh w-screen flex-col items-center">
        <div className="flex h-full w-full flex-col sm:w-[500px]">
          {!["/", "/buy-ticket"].includes(pathname) && (
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
        <Toaster className="bottom-0 left-1/2 -translate-x-1/2" />
      </section>
    </CriticalErrorBoundary>
  );
};

export default App;
