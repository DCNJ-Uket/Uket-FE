"use client";

import { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
  dehydrate,
} from "@tanstack/react-query";

export default function Providers({ children }: { children: React.ReactNode }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false,
            refetchInterval: false,
            staleTime: 1000 * 60 * 10,
            retry: false,
            throwOnError: true,
          },
          mutations: {
            throwOnError: false,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <HydrationBoundary state={dehydrate(queryClient)}>
        {children}
      </HydrationBoundary>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}
