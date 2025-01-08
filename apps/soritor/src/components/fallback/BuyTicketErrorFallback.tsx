import { FallbackProps } from "react-error-boundary";
import { Button } from "@uket/ui/components/ui/button";

import { useNavigate } from "@/router";

import {
  ErrorContainer,
  ErrorDescription,
  ErrorHeader,
  ErrorTitle,
} from "../error/CustomError";

const BuyTicketErrorFallback = (props: FallbackProps) => {
  const navigate = useNavigate();
  const { error, resetErrorBoundary } = props;
  const errorMessage = error.response.data.message;

  const back = () => {
    navigate(-1);
    setTimeout(() => {
      window.location.reload();
    }, 100);
    resetErrorBoundary();
  };

  return (
    <ErrorContainer className="flex-col gap-10">
      <ErrorHeader className="text-center">
        <ErrorTitle className="text-xl">
          티켓 예매 과정에 에러가 발생했습니다.
        </ErrorTitle>
        <ErrorDescription className="pt-3">{errorMessage}</ErrorDescription>
      </ErrorHeader>
      <footer className="flex w-full flex-col gap-2 px-5">
        <Button
          onClick={resetErrorBoundary}
          className="rounded-xl border border-[#5E5E6E] bg-[#5E5E6E] py-6 text-sm font-bold hover:bg-[#777784]"
        >
          다시 시도
        </Button>
        <Button
          onClick={back}
          className="rounded-xl border border-[#5E5E6E] bg-white py-6 text-sm font-bold text-[#5E5E6E] hover:bg-slate-100"
        >
          이전 페이지로
        </Button>
      </footer>
    </ErrorContainer>
  );
};

export default BuyTicketErrorFallback;
