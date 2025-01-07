import { Link } from "react-router-dom";
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
  const { data: deposit } = useQueryDepositUrl(
    ticketId,
    eventId,
    isDepositActive,
  );

  const handleReissueQRCode = () => {
    refetch();
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
          <Button variant="ghost" size="icon" className="z-50 rounded-full">
            <RefreshCwIcon className="h-5 w-5" onClick={handleReissueQRCode} />
          </Button>
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
            <h3>공연 티켓가 <span className="font-bold">₩{deposit.ticketPrice}</span></h3>
          </header>
          <div className="space-y-1">
            <Button
              asChild
              className="bg-brand hover:bg-brandHover rounded-lg text-xs"
            >
              <Link to={deposit.depositUrl} className="font-bold">
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
