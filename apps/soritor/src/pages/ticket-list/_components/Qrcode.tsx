import { useEffect, useState } from "react";
import { RefreshCwIcon } from "@uket/ui/components/ui/icon";
import { Button } from "@uket/ui/components/ui/button";

import Image from "@/components/Image";

import { useQueryTicketQRCode } from "@/hooks/queries/useQueryTicketQRCode";

import { TicketItem } from "@/types/ticketType";


interface QrcodeProps {
  ticketId: TicketItem["ticketId"];
  ticketStatus: TicketItem["ticketStatus"];
}

const Qrcode = (props: QrcodeProps) => {
  const { ticketId, ticketStatus: isDepositActive } = props;

  const { data: qrcode, refetch } = useQueryTicketQRCode(
    ticketId,
    isDepositActive,
  );

  const [remainingTime, setRemainingTime] = useState(15); // Initialize countdown state

  const handleReissueQRCode = () => {
    refetch();
    setRemainingTime(15);
  };

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
    </>
  );
};

export default Qrcode;
