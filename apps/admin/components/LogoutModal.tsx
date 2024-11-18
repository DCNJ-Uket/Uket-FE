"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@ui/lib/utils";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@ui/components/ui/dialog";
import { Button } from "@ui/components/ui/button";

import { clearAccessToken } from "@/utils/handleToken";

interface LogoutModalProps {
  isMobile?: boolean;
}

export default function LogoutModal(props: LogoutModalProps) {
  const { isMobile } = props;

  const router = useRouter();
  const handleLogout = () => {
    clearAccessToken();
    router.replace("/");
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button
          variant={isMobile ? "link" : "outline"}
          className={cn(
            isMobile
              ? "px-0 text-xs text-[#5E5E6E]"
              : "border-[#8989A1] text-[#8989A1]",
          )}
        >
          로그아웃
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs rounded-xl border-none" isXHidden>
        <DialogHeader className="h-32 justify-center sm:text-center">
          <DialogTitle className="text-base font-bold">
            로그아웃 하시겠어요?
          </DialogTitle>
        </DialogHeader>
        <DialogFooter className="flex-row space-x-2 sm:justify-center">
          <DialogClose asChild>
            <Button
              className="basis-1/2 border-[#5E5E6E] text-xs"
              variant="outline"
            >
              아니오
            </Button>
          </DialogClose>
          <Button
            className="basis-1/2 bg-[#FD724F] text-xs hover:bg-[#FD724F]"
            onClick={handleLogout}
          >
            네
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
