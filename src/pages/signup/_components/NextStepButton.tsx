import { Button } from "@/components/ui/button";

import { useMyFlow } from "@/utils/useMyFlow";

import { FormType } from "../_hooks/useStackForm";

import { useNavigate } from "@/router";

interface NextStepButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  disabled: boolean;
  params?: {
    form: FormType;
  } & Record<string, unknown>;
}

const NextStepButton = (as: NextStepButtonProps) => {
  const { activityName, disabled, params, ...props } = as;
  const { push } = useMyFlow();
  const navigate = useNavigate();

  const handleClick = () => {
    if (activityName === "MainActivity") {
      navigate("/main", {
        replace: true,
      });
      return;
    }
    push(activityName, params || {});
  };

  return (
    <Button
      className="w-full h-16 text-base font-extrabold rounded-none bg-brand hover:bg-brandHover"
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      다음으로
    </Button>
  );
};

export default NextStepButton;
