import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const usePreviousPath = (): [string, () => void] => {
  const location = window.location.href;
  const { pathname } = useLocation();
  const [previousPath, setPreviousPath] = useState<string>("/");

  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    if (storage) {
      const pathStack: string[] = JSON.parse(
        storage.getItem("pathStack") || "[]",
      );

      if (["/", "/home"].includes(pathname)) {
        storage.setItem("pathStack", JSON.stringify([location]));
        setPreviousPath(location);
        return;
      }

      if (location.includes("/buy-ticket") && location.includes("showId")) {
        return;
      }

      if (
        pathStack.length === 0 ||
        pathStack[pathStack.length - 1] !== location
      ) {
        setPreviousPath(pathStack[pathStack.length - 1]);
        pathStack.push(location);
        storage.setItem("pathStack", JSON.stringify(pathStack));
      }
    }
  }, [location, pathname]);

  const popPreviousPath = () => {
    const storage = globalThis?.sessionStorage;
    if (storage) {
      const pathStack: string[] = JSON.parse(
        storage.getItem("pathStack") || "[]",
      );

      if (pathStack.length > 1) {
        pathStack.pop();
        const prevPath = pathStack.pop() || "/";
        setPreviousPath(prevPath);
        storage.setItem("pathStack", JSON.stringify(pathStack));
        return prevPath;
      }
    }
    return "/";
  };

  return [previousPath, popPreviousPath];
};

export default usePreviousPath;
