import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

interface ConfirmModalProps {
  title: string;
  trigger: React.ReactNode;
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const { title, trigger } = props;

  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="w-4/5 rounded-xl">
        <DialogHeader className="pt-3">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-center space-x-4 pt-4">
          <DialogClose asChild>
            <Button
              type="button"
              className="w-[100px] bg-brand text-white hover:bg-brand/80"
            >
              예
            </Button>
          </DialogClose>
          <DialogClose asChild>
            <Button
              type="button"
              className="w-[100px] bg-[#D9D9D9] text-black hover:bg-[#D9D9D9]/80"
            >
              아니오
            </Button>
          </DialogClose>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal;
