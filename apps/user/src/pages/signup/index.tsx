import { useLocation } from "react-router-dom";
import { FallbackProps } from "react-error-boundary";
import { Suspense } from "react";
import { Form } from "@uket/ui/components/ui/form";

import SignupErrorFallback from "@/components/fallback/SignupErrorFallback";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { Stack } from "@/utils/stackflow";

import { useStackForm } from "../../hooks/useStackForm";

import { Navigate } from "@/router";

const SignUpPage = () => {
  const { form } = useStackForm();
  const { state: isUnRegistered } = useLocation();

  if (!isUnRegistered) {
    return <Navigate to={"/"} replace />;
  }

  return (
    <main className="relative flex h-full flex-col items-center justify-center">
      <RetryErrorBoundary
        fallbackComponent={(props: FallbackProps) => (
          <SignupErrorFallback {...props} />
        )}
      >
        <Suspense>
          <Form {...form}>
            <Stack />
          </Form>
        </Suspense>
      </RetryErrorBoundary>
    </main>
  );
};
export default SignUpPage;
