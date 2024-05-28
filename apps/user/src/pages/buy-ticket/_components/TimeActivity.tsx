import { useSearchParams } from "react-router-dom";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import useItemSelect from "@/hooks/useItemSelect";
import { useQueryReservationList } from "@/hooks/queries/useQueryReservationList";

import TimeItem from "./TimeItem";
import SelectTicketItem from "./SelectTicketItem";
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
}

const TimeActivity: ActivityComponentType<TimeParams> = ({ params }) => {
  const { form, showDate } = params;

  const { selectedItem, handleSelectItem } = useItemSelect();

  const [searchParams] = useSearchParams();
  const univName = searchParams.get("univName");
  const showId = searchParams.get("showId");

  const { data: reservationList } = useQueryReservationList(showId);

  const setFormValues = (reservationId: number) => {
    form.setValue("reservationId", reservationId);
  };

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <div className="flex gap-3 px-[22px] pb-4">
            <SelectTicketItem title="선택 학교" content={univName!} />
            <SelectTicketItem title="선택 날짜" content={showDate} />
          </div>
          <ActivityHeader className="px-[22px]">
            <HeaderItem step={"02"} content={"예매 시간을 선택해 주세요."} />
          </ActivityHeader>
          <div className="flex flex-col gap-4 px-[22px]">
            {reservationList.map(
              ({ id, startTime, endTime, reservedCount, totalCount }) => (
                <TimeItem
                  key={id}
                  startTime={startTime}
                  endTime={endTime}
                  reservedCount={reservedCount}
                  totalCount={totalCount}
                  isSelected={selectedItem === id}
                  onSelect={() => {
                    handleSelectItem(id);
                    setFormValues(id);
                  }}
                />
              ),
            )}
          </div>
          <ActivityFooter>
            <NextButton
              type="submit"
              activityName={"CompleteActivity" as never}
              disabled={selectedItem === null}
            ></NextButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default TimeActivity;
