import { Button } from "@uket/ui/components/ui/button";

import { FormType, useTicketStackForm } from "@/hooks/useTicketStackForm";

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
  const { onSubmit } = useTicketStackForm();

  const navigate = useNavigate();

  const handleClick = async () => {
    if (activityName === "MainActivity") {
      navigate("/", { replace: true });
      return;
    } else if (activityName === "CompleteActivity") {
      const { form } = params || {};
      if (form) {
        const ticketResponse = await onSubmit(form.getValues());

        if ("success" in ticketResponse && ticketResponse.success) {
          push(activityName, params || {});
        } else {
          navigate("/", { replace: true });
          return;
        }
      }
    } else {
      push(activityName, params || {});
    }
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
