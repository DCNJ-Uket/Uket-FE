import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@uket/ui/components/ui/dialog";
import { Button, ButtonProps } from "@uket/ui/components/ui/button";

import { useControlRedirect } from "@/hooks/useControlRedirect";

import { Path } from "@/router";

interface AuthRequiredModalButtonProps extends ButtonProps {
  title: string;
  path?: Path;
}

const AuthRequiredModalButton = (props: AuthRequiredModalButtonProps) => {
  const { variant, title, className, path, onClick, ...rest } = props;
  const {
    isModalOpen,
    handleOpenModalOrRedirect,
    handleCloseModal,
    handleRedirectToLogin,
  } = useControlRedirect();

  return (
    <Dialog
      open={isModalOpen}
      onOpenChange={() =>
        handleOpenModalOrRedirect({
          path,
          onCustomClick: onClick as () => void,
        })
      }
    >
      <DialogTrigger asChild>
        <Button variant={variant} className={className} {...rest}>
          {title}
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-72 rounded-2xl sm:max-w-xs" isXHidden>
        <DialogHeader className="sm:text-center">
          <DialogTitle>로그인 후 이용 가능합니다.</DialogTitle>
        </DialogHeader>
        <DialogFooter className="w-full flex-row justify-center gap-3 sm:flex-row">
          <Button
            className="border-brand text-brand grow basis-1/2 border bg-white hover:bg-slate-100"
            onClick={handleCloseModal}
          >
            취소
          </Button>
          <Button
            className="bg-brand border-brand hover:bg-brandHover grow basis-1/2 border text-white"
            onClick={handleRedirectToLogin}
          >
            로그인
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default AuthRequiredModalButton;
