import { FallbackProps } from "react-error-boundary";
import { Suspense } from "react";
import { Form } from "@uket/ui/components/ui/form";

import SignupErrorFallback from "@/components/fallback/SignupErrorFallback";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { Stack } from "@/utils/stackflow";

import { useStackForm } from "../../hooks/useStackForm";

const SignUpPage = () => {
  const { form } = useStackForm();

  return (
    <main>
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
