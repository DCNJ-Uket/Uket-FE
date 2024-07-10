import { useState } from "react";
import { useToast } from "@uket/ui/components/ui/use-toast";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@uket/ui/components/ui/dialog";
import { Button } from "@uket/ui/components/ui/button";

import { useMutationCancelTicket } from "@/hooks/mutations/useMutationCancelTicket";

interface ConfirmModalProps {
  ticketId: number;
}

function ConfirmModal(props: ConfirmModalProps) {
  const { ticketId } = props;
  const { toast } = useToast();

  const [open, setOpen] = useState(false);

  const mutation = useMutationCancelTicket();

  const handleCancel = () => {
    mutation.mutate(ticketId, {
      onSuccess: () => {
        setOpen(false);
        toast({
          title: "티켓 취소 성공!",
        });
      },
      onError: () => {
        setOpen(false);
        toast({
          variant: "destructive",
          title: "오류",
          description: "티켓 취소 중 오류가 발생했습니다. 다시 시도해주세요.",
        });
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <div onClick={e => e.stopPropagation()}>
        <DialogTrigger asChild>
          <div
            className="cursor-pointer py-3 text-xs text-[#FD724F] underline"
          >
            예매 취소
          </div>
        </DialogTrigger>
        <DialogContent className="max-w-60 rounded-2xl sm:max-w-xs" isXHidden>
          <section className="py-5 sm:py-12">
            <h1 className="text-center text-sm font-semibold">
              정말 예매를 취소하시겠어요?
            </h1>
          </section>
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
              <Button className="basis-1/2 bg-[#FD724F] hover:bg-[#ff5328]" onClick={handleCancel}>
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
