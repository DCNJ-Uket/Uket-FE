import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@ui/components/ui/alert-dialog";

import ThreeChevrons from "@/components/ThreeChevrons";

import TicketChangeItem from "./TicketChangeItem";

interface TicketChangeDialogProps {
  userName: string;
  openDialog: boolean;
  handleOpenDialog: (open: boolean) => void;
  beforeStatus: string;
  newStatus: string;
  handleConfirmChange: () => void;
}

function TicketChangeDialog(props: TicketChangeDialogProps) {
  const {
    userName,
    openDialog,
    handleOpenDialog,
    beforeStatus,
    newStatus,
    handleConfirmChange,
  } = props;

  return (
    <AlertDialog open={openDialog} onOpenChange={handleOpenDialog}>
      <AlertDialogContent className="max-w-[380px] pt-11">
        <AlertDialogHeader className="gap-3">
          <AlertDialogTitle>
            <div className="text-center font-bold">
              <span className="underline decoration-1">{userName}</span>
              <span>
                님의 티켓 상태를
                <br />
                수정하시겠습니까?
              </span>
            </div>
          </AlertDialogTitle>
          <AlertDialogDescription className="flex items-center justify-center gap-5">
            <TicketChangeItem status={beforeStatus} before />
            <ThreeChevrons />
            <TicketChangeItem status={newStatus} />
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="mt-5 flex gap-3 sm:justify-center">
          <AlertDialogCancel
            onClick={() => handleOpenDialog(false)}
            className="basis-1/2 bg-[#D9D9D9] py-6 text-base font-bold text-[#8989A1]"
          >
            취소
          </AlertDialogCancel>
          <AlertDialogAction
            onClick={handleConfirmChange}
            className="bg-brand basis-1/2 py-6 text-base font-bold text-white"
          >
            확인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default TicketChangeDialog;
