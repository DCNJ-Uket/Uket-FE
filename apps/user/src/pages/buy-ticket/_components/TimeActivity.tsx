import { useSearchParams } from "react-router-dom";
import { Suspense } from "react";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import RetryErrorBoundary from "@/components/RetryErrorBoundary";

import useItemSelect from "@/hooks/useItemSelect";

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
}

const TimeActivity: ActivityComponentType<TimeParams> = ({ params }) => {
  const { form, showDate } = params;

  const { selectedItem, handleSelectItem } = useItemSelect();

  const [searchParams] = useSearchParams();
  const univName = searchParams.get("univName");
  const showId = searchParams.get("showId") as string;

  const handleSelectReservation = (id: number) => {
    handleSelectItem(id);
    form.setValue("reservationId", id);
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

          <RetryErrorBoundary>
            <Suspense>
              <ReservationList
                showId={showId}
                selectedItem={selectedItem}
                onSelect={handleSelectReservation}
              />
            </Suspense>
          </RetryErrorBoundary>

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
