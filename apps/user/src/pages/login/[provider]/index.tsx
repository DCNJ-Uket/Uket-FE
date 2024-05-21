import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { LoaderCircle } from "@uket/ui/components/ui/icon";

import { useMutationLogin } from "@/hooks/mutations/useMutationLogin";

import { Provider } from "@/types/authType";

import { useParams } from "@/router";

const CallbackPage = () => {
  const { provider } = useParams("/login/:provider");
  const [params] = useSearchParams();
  const code = params.get("code");
  const { mutate } = useMutationLogin();

  useEffect(() => {
    if (!code) return;
    mutate({ code, provider: provider as Provider });
  }, [code]);

  return (
    <div className="flex h-full items-center justify-center">
      <LoaderCircle className="h-10 w-10 animate-spin" />
    </div>
  );
};

export default CallbackPage;
