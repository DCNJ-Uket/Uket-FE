import { FallbackProps } from "react-error-boundary";
import { Button } from "@uket/ui/components/ui/button";

import {
  ErrorContainer,
  ErrorDescription,
  ErrorHeader,
  ErrorTitle,
} from "../error/CustomError";

import { useNavigate } from "@/router";

const DefaultErrorFallback = (props: FallbackProps) => {
  const navigate = useNavigate();
  const { error, resetErrorBoundary } = props;
  const errorMessage = error.response.data.message;

  const back = () => {
    navigate(-1);
    resetErrorBoundary();
  };

  return (
    <ErrorContainer className="container flex-col justify-around gap-10">
      <ErrorHeader className="text-center">
        <ErrorTitle className="text-xl">잠시 후 다시 시도해 주세요!</ErrorTitle>
        <ErrorDescription>{errorMessage}</ErrorDescription>
      </ErrorHeader>
      <footer className="flex w-full flex-col gap-2">
        <Button
          onClick={resetErrorBoundary}
          className="rounded-xl border border-[#5E5E6E] bg-[#5E5E6E] py-6 text-xs font-bold hover:bg-[#777784]"
        >
          다시 시도
        </Button>
        <Button
          onClick={back}
          className="rounded-xl border border-[#5E5E6E] bg-white py-6 text-xs font-bold text-[#5E5E6E] hover:bg-slate-100"
        >
          이전 페이지로
        </Button>
      </footer>
    </ErrorContainer>
  );
};

export default DefaultErrorFallback;
