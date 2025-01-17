import { HelmetProvider } from "react-helmet-async";
import ReactDOM from "react-dom/client";
import { SpeedInsights } from "@vercel/speed-insights/react";
import { inject } from "@vercel/analytics";
import { Toaster as Sonner } from "@uket/ui/components/ui/sonner";
import { Routes } from "@generouted/react-router";

import "@uket/ui/globals.css";

import { ThemeProvider } from "./components/provider/ThemeProvider";
import SVGProvider from "./components/provider/SVGProvider";
import QueryProvider from "./components/provider/QueryProvider";
import CookieProvider from "./components/provider/CookieProvider";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <HelmetProvider>
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">
      <QueryProvider>
        <Sonner richColors />
        <CookieProvider>
          <Routes />
          <SVGProvider />
          <SpeedInsights />
        </CookieProvider>
      </QueryProvider>
    </ThemeProvider>
  </HelmetProvider>,
);

inject();
