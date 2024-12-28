import { useSearchParams } from "react-router-dom";
import { useToast } from "@uket/ui/components/ui/use-toast";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NextButton from "./NextButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

import CompleteBackgroudImg from "/ticketingComplete.png";
import Ticketing3DImg from "/complete3DTicket.png";

import Image from "@/components/Image";

import { useQueryDepositUrl } from "@/hooks/queries/useQueryDepositUrl";

import { handleCopyClipBoard } from "@/utils/handleCopyToClipboard";

interface CompleteParams extends ActivityParams {
  ticketId: number;
  eventId: number;
}

const CompleteActivity: ActivityComponentType<CompleteParams> = ({
  params,
}) => {
  const { ticketId, eventId } = params;

  const [searchParams] = useSearchParams();
  const univName = searchParams.get("univName");
  const univId = searchParams.get("univId") as string;

  const routeUrl = `/home?select-univ=${univName}&id=${univId}`;

  const { toast } = useToast();
  const { data: deposit } = useQueryDepositUrl(
    ticketId,
    eventId,
    "입금 확인중",
  );

  return (
    <AppScreen
      appBar={{
        border: false,
        backButton: {
          renderIcon: () => <div className="hidden"></div>,
          onClick: e => e.preventDefault(),
        },
        height: "56px",
      }}
    >
      <Activity>
        <ActivityContent className="bg-white">
          <ActivityHeader className="relative grow items-center justify-center overflow-hidden">
            <Image
              src={Ticketing3DImg}
              alt="티켓 이미지"
              className="animate-rotate-axis w-[180px]"
            />
            {deposit && (
              <div className="z-20 mt-10 flex flex-col justify-start gap-5 text-center">
                <h1 className="text-[23px] font-black">
                  <p>예매 정보가 등록되었습니다.</p>
                  <p>입금 후 예매가 완료됩니다.</p>
                </h1>
                <h6 className="text-desc text-base font-medium">
                  공연 티켓가 ₩{deposit.ticketPrice}
                </h6>
                <div className="flex items-center gap-2">
                  <div className="text-base font-normal text-[#8989A1]">
                    <span>{deposit.accountNumber} </span>
                    <span>{deposit.accountOwner}</span>
                  </div>
                  <p
                    className="text-brand decoration-brand cursor-pointer font-bold underline decoration-solid decoration-1 underline-offset-2"
                    onClick={() =>
                      handleCopyClipBoard(deposit.accountNumber ?? "", toast)
                    }
                  >
                    복사
                  </p>
                </div>
              </div>
            )}
            <Image
              src={CompleteBackgroudImg}
              alt="티켓팅 완료 이미지"
              className="animate-ping-dealy absolute h-full"
            />
          </ActivityHeader>
          <ActivityFooter className="z-10">
            <NextButton
              isLast
              activityName={"MainActivity" as never}
              routeUrl={routeUrl}
              depositUrl={deposit?.depositUrl}
              disabled={false}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default CompleteActivity;
