import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@uket/ui/components/ui/dialog";
import { Button } from "@uket/ui/components/ui/button";

import { useMutationSignup } from "@/hooks/mutations/useMutationSignup";

import { useMyFlow } from "@/utils/useMyFlow";

import { ActivityParams } from "./Activity";

interface NoUnivModalProps extends ActivityParams {}

const NoUnivModal = (props: NoUnivModalProps) => {
  const { form } = props;
  const { mutateAsync } = useMutationSignup();
  const { replace } = useMyFlow();

  const handleSignup = async () => {
    form.setValue("userType", "no_univ");
    const userName = form.getValues("userName");
    const userPhone = form.getValues("userPhone");

    const data = await mutateAsync({
      userName,
      userPhone,
    });

    if (data) replace("CompleteActivity", {});
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant="link"
          className="text-xs font-medium text-[#8989A1] underline"
        >
          찾으시는 학교가 없나요?
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs rounded-xl">
        <DialogHeader className="pb-5 pt-10 sm:text-center">
          <DialogTitle className="text-base">
            일반인으로 회원가입이 가능합니다!
          </DialogTitle>
          <DialogDescription className="text-desc flex flex-col font-medium">
            <span>소속 학교가 목록에 없는 경우,</span>
            <span>일반인으로 회원가입이 가능합니다.</span>
          </DialogDescription>
        </DialogHeader>
        <DialogFooter className="flex-row gap-3">
          <DialogClose asChild>
            <Button
              type="button"
              className="border-brand text-brand basis-1/2 border bg-white hover:bg-slate-100"
            >
              닫기
            </Button>
          </DialogClose>
          <Button
            type="submit"
            className="border-brand bg-brand hover:bg-brandHover basis-1/2 border text-white"
            onClick={handleSignup}
          >
            일반인 회원가입
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default NoUnivModal;
