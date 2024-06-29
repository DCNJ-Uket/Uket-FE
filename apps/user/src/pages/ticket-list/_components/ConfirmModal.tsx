import { useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogTrigger,
} from "@uket/ui/components/ui/dialog";
import { Button } from "@uket/ui/components/ui/button";

import { useNavigate } from "@/router";

// TODO: 예매 취소 API 연결 및 예매 취소 후 모달 닫는 로직 추가
function ConfirmModal() {
  const [open, setOpen] = useState(false);
  const [cancelCompleted, setCancelCompleted] = useState(false);

  const navigate = useNavigate();

  const handleCancel = () => {
    setOpen(false);
    setCancelCompleted(true);
  };

  const handleComplete = () => {
    setCancelCompleted(false);
    navigate("/ticket-list", { replace: true });
  };

  return (
    <>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button
            variant="link"
            className="cursor-pointer p-0 text-xs text-[#FD724F] underline"
          >
            예매 취소
          </Button>
        </DialogTrigger>
        <DialogContent className=" max-w-60 rounded-2xl sm:max-w-xs">
          <section className="py-6 sm:py-12">
            <h1 className="text-center text-sm font-semibold">
              정말 예매를 취소하시겠어요?
            </h1>
          </section>
          <DialogFooter className="flex-row items-center justify-center gap-3">
            <Button className="basis-1/2" onClick={() => setOpen(false)}>
              아니오
            </Button>
            <DialogClose asChild>
              <Button
                variant="destructive"
                className="basis-1/2"
                onClick={handleCancel}
              >
                네, 취소할게요.
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      {cancelCompleted && (
        <Dialog open={cancelCompleted} onOpenChange={setCancelCompleted}>
          <DialogContent className="max-w-60 rounded-2xl sm:max-w-xs">
            <section className="pb-3 pt-5 sm:py-10">
              <h1 className="text-center text-sm font-semibold">
                예매가 취소되었습니다.
              </h1>
            </section>
            <DialogFooter className="flex-row items-center justify-center gap-3">
              <DialogClose asChild>
                <Button className="mx-3 basis-full" onClick={handleComplete}>
                  확인
                </Button>
              </DialogClose>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}
    </>
  );
}

export default ConfirmModal;
