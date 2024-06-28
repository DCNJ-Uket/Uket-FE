import { useEffect, useState } from "react";

const usePreviousPath = () => {
  const location = window.location.href;
  const [previousPath, setPreviousPath] = useState<string>("/");

  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    if (storage) {
      const currentPath = storage.getItem("currentPath");
      if (currentPath !== location) {
        setPreviousPath(currentPath || "/");
        storage.setItem("currentPath", location);
      }
    }
  }, [location]);

  return previousPath;
};

export default usePreviousPath;
