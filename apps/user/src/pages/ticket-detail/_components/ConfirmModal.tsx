import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@uket/ui/components/ui/dialog";
import { Button } from "@uket/ui/components/ui/button";

interface ConfirmModalProps {
  isOpen: boolean;
  title: string;
  confirm: { title: string; onClick: () => void };
  close?: { title: string; onClick: () => void };
}

const ConfirmModal = (props: ConfirmModalProps) => {
  const { isOpen, title, confirm, close } = props;

  return (
    <Dialog open={isOpen}>
      <DialogContent className="w-4/5 rounded-xl">
        <DialogHeader className="pt-3">
          <DialogTitle>{title}</DialogTitle>
        </DialogHeader>

        <div className="flex items-center justify-center space-x-4 pt-4">
          <Button
            type="button"
            className="w-[100px] bg-brand text-white hover:bg-brand/80"
            onClick={confirm.onClick}
          >
            {confirm.title}
          </Button>
          {close && (
            <Button
              type="button"
              className="w-[100px] bg-[#D9D9D9] text-black hover:bg-[#D9D9D9]/80"
              onClick={close.onClick}
            >
              {close.title}
            </Button>
          )}
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ConfirmModal;
