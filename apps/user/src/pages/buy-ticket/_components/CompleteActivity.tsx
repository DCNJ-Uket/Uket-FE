import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NextButton from "./NextButton";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
} from "./Activity";

import CompleteBackgroudImg from "/ticketingComplete.png";
import Ticketing3DImg from "/complete3DTicket.png";

const CompleteActivity: ActivityComponentType = () => {
  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent className=" bg-white">
          <ActivityHeader className="relative items-center justify-center">
            <img
              src={Ticketing3DImg}
              alt="티켓 이미지"
              className="animate-rotate-axis w-[180px]"
            />
            <h1 className="mt-10 text-[23px] font-black">
              <p>예매가 완료되었습니다.</p>
            </h1>
            <img
              src={CompleteBackgroudImg}
              alt="티켓팅 완료 이미지"
              className="animate-ping-dealy absolute h-full"
            />
          </ActivityHeader>
          <ActivityFooter className="z-10">
            <NextButton
              activityName={"MainActivity" as never}
              disabled={false}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default CompleteActivity;
