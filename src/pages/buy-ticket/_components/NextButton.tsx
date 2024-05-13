import { Button } from "@/components/ui/button";

import { useMyFlow } from "@/utils/useMyFlow";

import { useNavigate } from "@/router";

interface NextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  disabled: boolean;
}

const NextButton = (as: NextButtonProps) => {
  const { activityName, disabled, ...props } = as;
  const { push } = useMyFlow();
  const navigate = useNavigate();

  const handleClick = () => {
    if (activityName === "MainActivity") {
      navigate("/main", { replace: true });
      return;
    }
    push(activityName, {});
  };

  return (
    <Button
      className="h-16 w-full rounded-none bg-brand text-base font-extrabold hover:bg-brandHover"
      onClick={handleClick}
      disabled={disabled}
      {...props}
    >
      다음으로
    </Button>
  );
};

export default NextButton;
