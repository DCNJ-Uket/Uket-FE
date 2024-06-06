import { Suspense } from "react";
import { Form } from "@uket/ui/components/ui/form";


import { Stack } from "@/utils/stackflow";

import { useStackForm } from "../../hooks/useStackForm";

const SignUpPage = () => {
  const { form } = useStackForm();

  return (
    <main>
      <Suspense>
        <Form {...form}>
          <Stack />
        </Form>
      </Suspense>
    </main>
  );
};
export default SignUpPage;
