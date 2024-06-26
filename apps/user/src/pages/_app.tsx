import { Outlet, useLocation } from "react-router-dom";

import Nav from "@/components/Nav";
import CriticalErrorBoundary from "@/components/error/CriticalErrorBoundary";
import BackNav from "@/components/BackNav";

import usePreviousPath from "@/hooks/usePreviousPath";

import Redirects from "@/utils/redirects";

const App = () => {
  const { pathname } = useLocation();
  const previousPath = usePreviousPath();

  const renderHeader = () => {
    if (["/"].includes(pathname)) {
      return null;
    } else if (["/home"].includes(pathname)) {
      return (
        <header className="sticky left-0 top-0 z-10 bg-white">
          <Nav />
        </header>
      );
    } else {
      return (
        <header className="sticky left-0 top-0 z-10 bg-white">
          <BackNav goURL={previousPath} />
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
