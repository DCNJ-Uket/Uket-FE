import { Button } from "@uket/ui/components/ui/button";

import { FormType } from "@/hooks/useTicketStackForm";

import { useMyFlow } from "@/utils/useMyFlow";


import { useNavigate } from "@/router";

interface NextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  disabled: boolean;
  params?: {
    form: FormType;
  } & Record<string, unknown>;
}

const NextButton = (as: NextButtonProps) => {
  const { activityName, disabled, params, ...props } = as;
  const { push } = useMyFlow();
  const navigate = useNavigate();

  const handleClick = () => {
    if (activityName === "MainActivity") {
      navigate("/", { replace: true });
      return;
    }
    push(activityName, params || {});
  };

  return (
    <Button
      className="bg-brand hover:bg-brandHover disabled:bg-formInput h-16 w-full rounded-none text-base font-extrabold disabled:text-black disabled:opacity-100"
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      다음으로
    </Button>
  );
};

export default NextButton;
