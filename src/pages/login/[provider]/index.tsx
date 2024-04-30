import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { LoaderCircle } from "lucide-react";

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
    <div className="flex justify-center items-center h-full">
      <LoaderCircle className="w-10 h-10 animate-spin" />
    </div>
  );
};

export default CallbackPage;
