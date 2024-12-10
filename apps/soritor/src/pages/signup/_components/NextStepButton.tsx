import { LoaderCircleIcon } from "@uket/ui/components/ui/icon";
import { Button } from "@uket/ui/components/ui/button";

import { useNavigate } from "@/router";

import { useMyFlow } from "@/utils/useMyFlow";

import { FormType } from "../../../hooks/useStackForm";


interface NextStepButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  disabled: boolean;
  params?: {
    form: FormType;
  } & Record<string, unknown>;
  mutate?: Function;
  isLoading?: boolean;
}

const NextStepButton = (props: NextStepButtonProps) => {
  const { activityName, disabled, params, isLoading, ...rest } = props;
  const { push } = useMyFlow();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (activityName === "MainActivity") {
      navigate("/", {
        replace: true,
      });
      return;
    }
    push(activityName, params || {});
  };

  return (
    <Button
      className="bg-brand hover:bg-brandHover h-16 w-full rounded-none text-base font-extrabold"
      onClick={handleClick}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? <LoaderCircleIcon className="animate-spin" /> : "다음으로"}
    </Button>
  );
};

export default NextStepButton;
