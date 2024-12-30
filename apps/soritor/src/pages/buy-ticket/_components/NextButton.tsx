import { Link } from "react-router-dom";
import { LoaderCircleIcon } from "@uket/ui/components/ui/icon";
import { Button } from "@uket/ui/components/ui/button";

import { useNavigate } from "@/router";

import { FormType, useTicketStackForm } from "@/hooks/useTicketStackForm";

import { useTicketFlow } from "@/utils/useTicketFlow";

interface NextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  disabled: boolean;
  routeUrl?: string;
  isLast?: boolean;
  depositUrl?: string;
  params?: {
    form?: FormType;
  } & Record<string, unknown>;
}

const NextButton = (as: NextButtonProps) => {
  const {
    activityName,
    disabled,
    params,
    routeUrl,
    isLast,
    depositUrl,
    ...props
  } = as;
  const { push, pop } = useTicketFlow();
  const { onSubmit, isPending } = useTicketStackForm();

  const navigate = useNavigate();

  const form = params?.form;

  const handleClick = async () => {
    if (activityName === "MainActivity") {
      pop();
      pop();
      pop();
      pop();
      navigate(routeUrl as any, { replace: true });
      return;
    } else if (activityName === "CompleteActivity" && form) {
      const data = await onSubmit(form.getValues());
      push(activityName, {
        ...params,
        ticketId: data.ticketId,
        eventId: data.eventId,
      });
      return;
    }

    push(activityName, params || {});
  };

  return (
    <>
      {isLast && depositUrl ? (
        <div className="mb-5 flex w-full flex-row justify-center gap-3 px-4 sm:flex-row">
          <Button
            className="border-brand text-brand grow basis-1/2 border bg-white hover:bg-slate-100"
            onClick={handleClick}
            disabled={disabled}
            {...props}
          >
            나중에 하기
          </Button>
          <Button
            asChild
            className="bg-brand border-brand hover:bg-brandHover grow basis-1/2 border"
          >
            <Link to={depositUrl} className="text-white">
              카카오로 입금하기
            </Link>
          </Button>
        </div>
      ) : (
        <Button
          className="bg-brand hover:bg-brandHover disabled:bg-formInput h-16 w-full rounded-none text-base font-extrabold disabled:text-black disabled:opacity-100"
          onClick={handleClick}
          disabled={disabled}
          {...props}
        >
          {isPending ? (
            <LoaderCircleIcon className="animate-spin" />
          ) : (
            "다음으로"
          )}
        </Button>
      )}
    </>
  );
};

export default NextButton;
