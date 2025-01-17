import { useState } from "react";
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

import { useMutationCancelTicket } from "@/hooks/mutations/useMutationCancelTicket";

interface ConfirmModalProps {
  ticketId: number;
}

function ConfirmModal(props: ConfirmModalProps) {
  const { ticketId } = props;
  const [open, setOpen] = useState(false);
  const { mutate } = useMutationCancelTicket();

  const handleCancel = () => {
    setOpen(false);
    mutate(ticketId);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={e => e.stopPropagation()}>
        <DialogTrigger asChild>
          <div className="cursor-pointer py-3 text-xs text-[#FD724F] underline">
            예매 취소
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-72 rounded-2xl sm:max-w-xs" isXHidden>
          <DialogHeader className="space-y-3 py-5 sm:py-12 sm:pb-8">
            <DialogTitle className="text-center font-semibold">
              정말 예매를 취소하시겠어요?
            </DialogTitle>
            <DialogDescription className="flex flex-col text-center">
              <span>환불 문의는 공연 담당자에게 연락바랍니다.</span>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="flex-row items-center justify-center gap-3">
            <Button
              className="basis-1/2 bg-[#ccc] hover:bg-[#afafaf]"
              onClick={e => {
                e.stopPropagation();
                setOpen(false);
              }}
            >
              아니오
            </Button>
            <DialogClose asChild>
              <Button
                className="basis-1/2 bg-[#FD724F] hover:bg-[#ff5328]"
                onClick={handleCancel}
              >
                네, 취소할게요.
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </div>
    </Dialog>
  );
}

export default ConfirmModal;
