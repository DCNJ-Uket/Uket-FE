import { useSearchParams } from "react-router-dom";
import { FallbackProps } from "react-error-boundary";
import { Suspense } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import BuyTicketErrorFallback from "@/components/fallback/BuyTicketErrorFallback";
import RetryErrorBoundary from "@/components/error/RetryErrorBoundary";

import { useReservationSelection } from "@/hooks/useReservationSelection";
import { useFormatTime } from "@/hooks/useFormatTime";

import SelectHeader from "./SelectHeader";
import ReservationList from "./ReservationList";
import NextButton from "./NextButton";
import HeaderItem from "./HeaderItem";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

interface TimeParams extends ActivityParams {
  showDate: string;
  reservationUserType: string;
}

const TimeActivity: ActivityComponentType<TimeParams> = ({ params }) => {
  const { form, reservationUserType, showDate } = params;

  const [searchParams] = useSearchParams();
  const univName = searchParams.get("univName");
  const showId = searchParams.get("showId") as string;

  const {
    selectedItem,
    selectedStartTime,
    selectedEndTime,
    handleSelectReservation,
  } = useReservationSelection(form);

  const { formatTime: formatStartTime } = useFormatTime(selectedStartTime);
  const { formatTime: formatEndTime } = useFormatTime(selectedEndTime);
  const formatSelectTime =
    selectedStartTime !== "" ? `${formatStartTime} ~ ${formatEndTime}` : "";

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <SelectHeader
            univName={univName}
            reservationUserType={reservationUserType}
            formatShowDate={showDate}
            formatSelectTime={formatSelectTime}
          />
          <ActivityHeader className="px-[22px]">
            <HeaderItem step={"02"} content={"예매 시간을 선택해 주세요."} />
          </ActivityHeader>
          <RetryErrorBoundary
            fallbackComponent={(props: FallbackProps) => (
              <BuyTicketErrorFallback {...props} />
            )}
          >
            <Suspense>
              <ReservationList
                showId={showId}
                selectedItem={selectedItem}
                onSelect={handleSelectReservation}
                reservationUserType={reservationUserType}
              />
            </Suspense>
          </RetryErrorBoundary>
          <ActivityFooter className="z-50">
            <NextButton
              type="submit"
              activityName={"CompleteActivity" as never}
              disabled={selectedItem === null}
              params={{ form }}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default TimeActivity;
