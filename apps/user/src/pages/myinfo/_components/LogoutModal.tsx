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

interface LogoutModalProps {
  onLogout: () => void;
}

const LogoutModal = (props: LogoutModalProps) => {
  const { onLogout } = props;
  const { toast } = useToast();

  const [open, setOpen] = useState(false);

  const navigate = useNavigate();

  const handleLogout = () => {
    onLogout();
    setOpen(false);
    toast({
      title: "로그아웃 성공!",
    });
    navigate("/", { replace: true });
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button
          variant="secondary"
          className="basis-1/2 rounded-lg bg-[#8989A1] text-[#F2F2F2]"
        >
          로그아웃
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-60 rounded-2xl sm:max-w-xs" isXHidden>
        <section className="pb-3 pt-5 sm:py-10">
          <h1 className="text-center text-sm font-semibold">
            로그아웃 하시겠습니까?
          </h1>
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
              onClick={handleLogout}
            >
              네
            </Button>
          </DialogClose>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModal;
