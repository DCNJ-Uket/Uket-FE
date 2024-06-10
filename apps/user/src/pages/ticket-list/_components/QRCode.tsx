import { Separator } from "@uket/ui/components/ui/separator";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@uket/ui/components/ui/dialog";
import { Button } from "@uket/ui/components/ui/button";

import Indicator from "@/components/Indicator";

import TicketHeader from "./TicketHeader";
import TicketDetail from "./TicketDetail";
import ConfirmModal from "./ConfirmModal";

import QRCodeImage from "/qrcode.png";

// TODO: 하드코딩 값을 API 응답 값으로 수정 & index.tsx의 데이터와 동일하게 연결
const QRCode = () => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" className="h-20 w-20 p-0 border-none">
          <img
            src={QRCodeImage}
            alt="qrcode"
            width={100}
            height={100}
            className="aspect-square object-cover"
          />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-xs rounded-lg sm:max-w-md">
        <DialogHeader className="gap-3">
          <DialogTitle className="text-left">
            <Indicator
              variant={"darkdeposit"}
              title="입금 확인중"
              rounded
              className="relative left-0 top-0"
            />
          </DialogTitle>
          <DialogDescription className="flex flex-col items-center justify-center gap-2">
            <img
              src={QRCodeImage}
              alt="qrcode"
              width={100}
              height={100}
              className="aspect-square h-32 w-32"
            />
            <div className="text-xs text-[#7250FD]">UUID394023852</div>
          </DialogDescription>
        </DialogHeader>
        <section className="flex flex-col gap-3">
          <TicketHeader university="건국대학교" title="녹색지대" day="DAY 1" />
          <Separator className="bg-[#5E5E6E]" />
          <TicketDetail
            owner="김건국"
            enterDate="4월 21일 (수)"
            enterTime="17:00~17:20"
            location="건국대학교 노천극장"
            purchaseDate="24년 04월 01일 (월)"
            userType="대학생 / 자대생"
          />
          <Separator className="bg-[#5E5E6E]" />
          <footer>
            <ConfirmModal />
          </footer>
        </section>
        <DialogFooter className="rounded-lg bg-[#FDC950] py-3 text-center sm:justify-center">
          <h1 className="text-sm font-bold">학생증, 신분증을 제시해 주세요!</h1>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};
export default QRCode;
