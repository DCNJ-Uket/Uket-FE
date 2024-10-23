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
      <AlertDialogContent>
        <AlertDialogHeader>
          <AlertDialogTitle>
            {userName}님의 티켓 상태를 수정하시겠습니까?
          </AlertDialogTitle>
          <AlertDialogDescription className="flex items-center justify-center gap-3">
            <div className="flex-col items-center gap-3 text-center">
              <p>변경 이전 상태</p>
              <p className="font-bold">{beforeStatus}</p>
            </div>
            <div className="flex-col items-center gap-3">
              <p>변경 이후 상태</p>
              <p className="font-bold">{newStatus}</p>
            </div>
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter className="flex gap-3 sm:justify-center">
          <AlertDialogCancel onClick={() => handleOpenDialog(false)}>
            취소
          </AlertDialogCancel>
          <AlertDialogAction onClick={handleConfirmChange}>
            확인
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default TicketChangeDialog;
