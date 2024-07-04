import { FallbackProps } from "react-error-boundary";
import { Button } from "@uket/ui/components/ui/button";

import {
  ErrorContainer,
  ErrorDescription,
  ErrorHeader,
  ErrorTitle,
} from "../error/CustomError";

import { Link } from "@/router";

interface SignupErrorFallbackProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    FallbackProps {}

const SignupErrorFallback = (props: SignupErrorFallbackProps) => {
  const { resetErrorBoundary } = props;

  return (
    <ErrorContainer className="flex-col gap-10">
      <ErrorHeader className="text-center">
        <ErrorTitle className="text-xl">
          회원가입 과정에서 오류가 발생했어요.
        </ErrorTitle>
        <ErrorDescription>회원가입을 다시 시도해 주세요.</ErrorDescription>
      </ErrorHeader>
      <footer className="flex w-full flex-col gap-2">
        <Link to="/" replace className="flex justify-center">
          <Button
            onClick={resetErrorBoundary}
            className="rounded-xl border border-[#5E5E6E] bg-[#5E5E6E] py-6 text-xs font-bold hover:bg-[#777784]"
          >
            홈 화면으로
          </Button>
        </Link>
      </footer>
    </ErrorContainer>
  );
};

export default SignupErrorFallback;
