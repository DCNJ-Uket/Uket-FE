import ReactDOM from "react-dom/client";
import { Routes } from "@generouted/react-router";

import "./index.css";

import { ThemeProvider } from "./components/provider/ThemeProvider";
import QueryProvider from "./components/provider/QueryProvider";
import CookieProvider from "./components/provider/CookieProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
    <QueryProvider>
      <CookieProvider>
        <Routes />
      </CookieProvider>
    </QueryProvider>
  </ThemeProvider>,
);
