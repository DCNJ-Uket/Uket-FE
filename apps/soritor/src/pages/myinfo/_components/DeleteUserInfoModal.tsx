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

import { useNavigate } from "@/router";

import { useMutationDeleteUser } from "@/hooks/mutations/useMutationDeleteUser";

const DeleteUserInfoModal = () => {
  const { toast } = useToast();

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const mutation = useMutationDeleteUser();

  const handleDeleteUserInfo = () => {
    setOpen(false);
    mutation.mutate(undefined, {
      onSuccess: () => {
        toast({
          title: "회원탈퇴 성공!",
        });
        navigate("/", { replace: true });
      },
      onError: () => {
        toast({
          title: "회원탈퇴 실패",
          variant: "brandDestructive",
        });
      },
    });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          className="basis-1/2 rounded-lg border border-[#8989A1] text-[#8989A1]"
        >
          회원 탈퇴
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-72 rounded-2xl sm:max-w-xs" isXHidden>
        <section className="flex flex-col gap-1 pb-3 pt-5 sm:py-10">
          <h1 className="text-center text-sm font-semibold">
            회원 탈퇴 하시겠습니까?
          </h1>
          <h3 className="text-desc text-center text-xs font-medium">
            계정정보가 바로 삭제되며 복구할 수 없습니다.
          </h3>
        </section>
        <DialogFooter className="flex-row items-center justify-center gap-3">
          <Button
            variant="outline"
            className="basis-1/2 border-[#5E5E6E] text-xs text-[#5E5E6E]"
            onClick={() => setOpen(false)}
          >
            아니오
          </Button>
          <DialogClose asChild>
            <Button
              className="basis-1/2 bg-[#FD724F] text-xs"
              onClick={handleDeleteUserInfo}
            >
              네
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteUserInfoModal;
