import { useSearchParams } from "react-router-dom";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import { useReservationSelection } from "@/hooks/useReservationSelection";
import { useFormatTime } from "@/hooks/useFormatTime";
import { useQueryReservationList } from "@/hooks/queries/useQueryReservationList";

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
  const { form, showDate, reservationUserType } = params;

  const [searchParams] = useSearchParams();
  const univName = searchParams.get("univName");
  const showId = searchParams.get("showId") as string;

  const {
    selectedItem,
    selectedStartTime,
    selectedEndTime,
    handleSelectReservation,
  } = useReservationSelection(form);

  const { data: reservationList } = useQueryReservationList(
    showId,
    reservationUserType,
  );

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

          <ReservationList
            reservationList={reservationList}
            selectedItem={selectedItem}
            onSelect={handleSelectReservation}
          />
          <ActivityFooter>
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
