import { toast } from "@uket/ui/components/ui/sonner";

import { navigateTo } from "../utils/globalNavigate";

export const SUCCESS_TOAST = {
  deleteUser: {
    onSuccess: () => {
      navigateTo("/", { replace: true });
      toast.success("정상적으로 탈퇴되었습니다.");
    },
  },
  cancelTicket: {
    onSuccess: () => {
      toast.success("예매가 취소되었습니다.");
    },
  },
};
