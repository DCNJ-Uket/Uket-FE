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
          className="w-full rounded-xl bg-white p-6 text-sm font-medium text-black hover:bg-slate-200 sm:w-80"
        >
          로그아웃
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-60 rounded-2xl sm:max-w-xs">
        <section className="pb-3 pt-5 sm:py-10">
          <h1 className="text-center text-sm font-semibold">
            로그아웃 하시겠습니까?
          </h1>
        </section>
        <DialogFooter className="flex-row items-center justify-center gap-3">
          <DialogClose asChild>
            <Button
              variant="destructive"
              className="basis-1/2"
              onClick={handleLogout}
            >
              네
            </Button>
          </DialogClose>
          <Button className="basis-1/2" onClick={() => setOpen(false)}>
            아니오
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default LogoutModal;
