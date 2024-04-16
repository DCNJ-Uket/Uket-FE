import { Button } from "@/components/ui/button";

import { useFlow } from "@/utils/stackflow";

interface NextStepButtonProps {
  activityName: never;
  params?: Record<string, unknown>;
}

const NextStepButton = (props: NextStepButtonProps) => {
  const { activityName, params } = props;
  const { push } = useFlow();

  const handleClick = () => {
    push(activityName, params || {});
  };
  return (
    <Button
      className="w-full h-16 text-base font-bold rounded-none bg-brand"
      onClick={handleClick}
    >
      다음으로
    </Button>
  );
};

export default NextStepButton;
