import { Button } from "@/components/ui/button";

import { useMyFlow } from "@/utils/useMyFlow";

interface NextStepButtonProps {
  activityName: never;
  disabled: boolean;
  params?: Record<string, unknown>;
}

const NextStepButton = (props: NextStepButtonProps) => {
  const { activityName, disabled, params } = props;
  const { push } = useMyFlow();

  const handleClick = () => {
    push(activityName, params || {});
  };
  return (
    <Button
      className="w-full h-16 text-base font-extrabold rounded-none hover:bg-brandHover bg-brand"
      onClick={handleClick}
      disabled={disabled}
    >
      다음으로
    </Button>
  );
};

export default NextStepButton;
