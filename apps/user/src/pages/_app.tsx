import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import Nav from "@/components/Nav";
import CriticalErrorBoundary from "@/components/error/CriticalErrorBoundary";
import BackNav from "@/components/BackNav";

import Redirects from "@/utils/redirects";

const App = () => {
  const { pathname } = useLocation();
  const [previousPath, setPreviousPath] = useState<string>("/");

  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    if (storage) {
      const currentPath = storage.getItem("currentPath");
      if (currentPath !== pathname) {
        setPreviousPath(currentPath || "/");
        storage.setItem("currentPath", pathname);
      }
    }
  }, [pathname]);

  const renderHeader = () => {
    if (pathname === "/") {
      return null;
    } else if (pathname === "/myinfo") {
      return (
        <header className="sticky left-0 top-0 z-10 bg-white">
          <BackNav goURL={previousPath} />
        </header>
      );
    } else {
      return (
        <header className="sticky left-0 top-0 z-10 bg-white">
          <Nav />
        </header>
      );
    }
  };

  return (
    <CriticalErrorBoundary>
      <section className="relative flex h-dvh w-screen flex-col">
        {renderHeader()}
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
