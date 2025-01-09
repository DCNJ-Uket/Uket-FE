import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useToast } from "@uket/ui/components/ui/use-toast";
import { RefreshCwIcon } from "@uket/ui/components/ui/icon";
import { Button } from "@uket/ui/components/ui/button";

import Image from "@/components/Image";

import { useQueryTicketQRCode } from "@/hooks/queries/useQueryTicketQRCode";
import { useQueryDepositUrl } from "@/hooks/queries/useQueryDepositUrl";

import { TicketItem } from "@/types/ticketType";

import { handleCopyClipBoard } from "@/utils/handleCopyToClipboard";

interface QrcodeAndDepositProps {
  ticketId: TicketItem["ticketId"];
  eventId: TicketItem["eventId"];
  ticketStatus: TicketItem["ticketStatus"];
}

const QrcodeAndDeposit = (props: QrcodeAndDepositProps) => {
  const { ticketId, eventId, ticketStatus: isDepositActive } = props;

  const { toast } = useToast();
  const { data: qrcode, refetch } = useQueryTicketQRCode(
    ticketId,
    isDepositActive,
  );
  const [remainingTime, setRemainingTime] = useState(15); // Initialize countdown state

  useEffect(() => {
    const timer = setInterval(() => {
      setRemainingTime(prev => {
        if (prev <= 1) {
          return 0;
        }
        return prev - 1; // Decrease countdown
      });
    }, 1000);

    return () => clearInterval(timer); // Cleanup on unmount
  }, []);

  useEffect(() => {
    if (remainingTime === 0) {
      refetch(); // 타이머가 0일 때 refetch 호출
      setRemainingTime(15); // 타이머를 15초로 초기화
    }
  }, [remainingTime]);

  const { data: deposit } = useQueryDepositUrl(
    ticketId,
    eventId,
    isDepositActive,
  );

  const handleReissueQRCode = () => {
    refetch();
    setRemainingTime(15);
  };

  return (
    <>
      {qrcode && (
        <>
          <div>
            <Image
              src={qrcode}
              alt="qrcode"
              width={100}
              height={100}
              className="aspect-square h-36 w-36 scale-125"
            />
          </div>
          <div className="z-50 flex items-center pl-2">
            <div className="space-x-2">
              <span>남은시간</span>
              <span className="text-brand">
                {remainingTime < 10
                  ? `00:0${remainingTime}`
                  : `00:${remainingTime}`}
              </span>
            </div>
            <Button variant="ghost" size="icon" className="rounded-full">
              <RefreshCwIcon
                className="h-5 w-5"
                onClick={handleReissueQRCode}
              />
            </Button>
          </div>
        </>
      )}
      {isDepositActive && deposit && (
        <div className="text-center">
          <header className="mb-3 space-y-1.5 font-medium">
            <h1 className="text-desc text-xl font-black">
              입금 완료 시 QR 활성화
            </h1>
            <h2>
              <p>입급 후 예매가 완료되면 QR이 활성화됩니다.</p>
              <p>입금 확인까지 시간이 다소 소요될 수 있습니다.</p>
            </h2>
            <h3>
              공연 티켓가{" "}
              <span className="font-bold">₩{deposit.ticketPrice}</span>
            </h3>
          </header>
          <div className="space-y-1">
            <Button
              asChild
              className="bg-brand hover:bg-brandHover rounded-lg text-xs"
            >
              <Link
                to={deposit.depositUrl}
                target="_blank"
                className="font-bold"
              >
                카카오로 입금하기
              </Link>
            </Button>
            <footer className="flex items-center justify-center gap-1 text-sm">
              <div>
                <span>{deposit.accountNumber} </span>
                <span>{deposit.accountOwner}</span>
              </div>
              <Button
                variant="link"
                className="text-brand cursor-pointer px-1 font-bold"
                onClick={() =>
                  handleCopyClipBoard(deposit?.accountNumber ?? "", toast)
                }
              >
                복사
              </Button>
            </footer>
          </div>
        </div>
      )}
    </>
  );
};

export default QrcodeAndDeposit;
