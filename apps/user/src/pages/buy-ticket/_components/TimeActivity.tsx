import { useSearchParams } from "react-router-dom";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import useItemSelect from "@/hooks/useItemSelect";
import { useQueryReservationList } from "@/hooks/queries/useQueryReservationList";

import SelectTicketItem from "./SelectTicketItem";
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

  const { selectedItem, handleSelectItem } = useItemSelect();

  const [searchParams] = useSearchParams();
  const univName = searchParams.get("univName");
  const showId = searchParams.get("showId") as string;

  const handleSelectReservation = (id: number) => {
    handleSelectItem(id);
    form.setValue("reservationId", id);
  };

  const { data: reservationList } = useQueryReservationList(
    showId,
    reservationUserType,
  );

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <div className="flex gap-5 px-[22px]">
            <div>{univName}</div>
            <div>{reservationUserType}</div>
          </div>
          <div className="flex gap-3 px-[22px] pb-4">
            <SelectTicketItem title="선택 학교" content={univName!} />
            <SelectTicketItem title="선택 날짜" content={showDate} />
          </div>
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
