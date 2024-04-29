import { useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { LoaderCircle } from "lucide-react";

import { useNavigate, useParams } from "@/router";
import { Provider, login } from "@/api/auth";

const CallbackPage = () => {
  const { provider } = useParams("/login/:provider");
  const navigate = useNavigate();
  const [params] = useSearchParams();
  const code = params.get("code");

  useEffect(() => {
    if (!code) return;

    const handleAuth = async () => {
      const isRegistered = await login(code, provider as Provider);
      console.log(isRegistered, provider);
      if (!isRegistered) {
        navigate("/signup", {
          replace: true,
        });
      } else {
        navigate("/", {
          replace: true,
        });
      }
    };

    handleAuth();
  }, [code]);

  return (
    <div className="flex justify-center items-center h-full">
      <LoaderCircle className="w-10 h-10 animate-spin" />
    </div>
  );
};

export default CallbackPage;
